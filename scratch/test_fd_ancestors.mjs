import { chromium } from 'playwright';

async function testFDAncestors() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const chain = await page.evaluate(() => {
    let el = document.querySelector('#calc-pane-fdrd .rp-calc-controls-card');
    const list = [];
    while (el) {
      const r = el.getBoundingClientRect();
      const s = window.getComputedStyle(el);
      list.push({
        tag: el.tagName,
        id: el.id,
        cls: el.className,
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
        paddingLeft: s.paddingLeft,
        paddingRight: s.paddingRight,
        marginLeft: s.marginLeft,
        marginRight: s.marginRight
      });
      el = el.parentElement;
    }
    return list;
  });

  console.log('Ancestor chain for FD:');
  chain.reverse().forEach(c => {
    console.log(` - <${c.tag} id="${c.id}" class="${c.cls}"> left=${c.left} right=${c.right} width=${c.width} pl=${c.paddingLeft} pr=${c.paddingRight} ml=${c.marginLeft} mr=${c.marginRight}`);
  });
  await browser.close();
}

testFDAncestors();

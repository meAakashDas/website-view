import { chromium } from 'playwright';

async function testInsideCard() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    const card = document.querySelector('#calc-pane-fdrd .rp-calc-controls-card');
    const items = [];
    card.querySelectorAll('*').forEach(el => {
      const r = el.getBoundingClientRect();
      const s = window.getComputedStyle(el);
      items.push({
        tag: el.tagName,
        id: el.id,
        cls: el.className,
        width: Math.round(r.width),
        scrollWidth: el.scrollWidth,
        minWidth: s.minWidth,
        maxWidth: s.maxWidth,
        whiteSpace: s.whiteSpace,
        display: s.display
      });
    });
    return items;
  });

  console.log('Elements inside FD controls card:');
  res.filter(i => i.scrollWidth > 250 || i.width > 250).forEach(i => {
    console.log(` - <${i.tag} id="${i.id}" class="${i.cls}"> w=${i.width} sw=${i.scrollWidth} minW=${i.minWidth} ws=${i.whiteSpace}`);
  });

  await browser.close();
}

testInsideCard();

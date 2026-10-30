import { chromium } from 'playwright';

async function checkLayout() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const info = await page.evaluate(() => {
    const card = document.querySelector('.rp-calc-controls-card');
    const container = card ? card.closest('.container, [class*="container"]') : null;
    const section = card ? card.closest('section, .section') : null;

    function getStyle(el) {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        className: el.className,
        width: r.width,
        left: r.left,
        right: r.right,
        paddingLeft: s.paddingLeft,
        paddingRight: s.paddingRight,
        marginLeft: s.marginLeft,
        marginRight: s.marginRight,
        boxSizing: s.boxSizing
      };
    }

    return {
      windowWidth: window.innerWidth,
      card: getStyle(card),
      container: getStyle(container),
      section: getStyle(section)
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}

checkLayout();

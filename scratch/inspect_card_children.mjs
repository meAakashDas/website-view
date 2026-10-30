import { chromium } from 'playwright';

async function inspectCardChildren() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    const card = document.querySelector('.rp-calc-controls-card');
    const items = [];
    card.querySelectorAll('*').forEach(el => {
      const s = window.getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if (r.width > 260) {
        items.push({
          tag: el.tagName,
          id: el.id,
          cls: el.className,
          width: r.width,
          scrollWidth: el.scrollWidth,
          minWidth: s.minWidth
        });
      }
    });
    return items;
  });

  console.log('Items in card > 260px:', res);
  await browser.close();
}

inspectCardChildren();

import { chromium } from 'playwright';

async function findInSubpane() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    const pane = document.getElementById('fdrd-pane-fd');
    const items = [];
    pane.querySelectorAll('*').forEach(el => {
      if (el.scrollWidth > 262) {
        items.push({
          tag: el.tagName,
          id: el.id,
          cls: el.className,
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
          offsetWidth: el.offsetWidth
        });
      }
    });
    return items;
  });

  console.log('Items in fdrd-pane-fd with scrollWidth > 262:', res);
  await browser.close();
}

findInSubpane();

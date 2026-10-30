import { chromium } from 'playwright';

async function findBodyOverflow() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const culprits = await page.evaluate(() => {
    const list = [];
    document.querySelectorAll('body *').forEach(el => {
      if (el.scrollWidth > 320) {
        list.push({
          tag: el.tagName,
          id: el.id,
          cls: el.className,
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
          offsetWidth: el.offsetWidth
        });
      }
    });
    return list;
  });

  console.log('Elements with scrollWidth > 320:', culprits);
  await browser.close();
}

findBodyOverflow();

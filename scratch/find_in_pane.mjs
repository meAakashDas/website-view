import { chromium } from 'playwright';

async function findInPane() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const culprits = await page.evaluate(() => {
    const pane = document.getElementById('calc-pane-fdrd');
    const list = [];
    pane.querySelectorAll('*').forEach(el => {
      if (el.scrollWidth > 288 || el.offsetWidth > 288) {
        list.push({
          tag: el.tagName,
          id: el.id,
          cls: el.className,
          scrollWidth: el.scrollWidth,
          offsetWidth: el.offsetWidth,
          clientWidth: el.clientWidth
        });
      }
    });
    return list;
  });

  console.log('Culprits inside pane:', culprits);
  await browser.close();
}

findInPane();

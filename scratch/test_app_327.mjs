import { chromium } from 'playwright';

async function testApp327() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    // Hide mobile menu first
    const mm = document.getElementById('mobile-menu');
    if (mm) mm.style.display = 'none';

    // Find any element whose right bound > 320
    const outOfBounds = [];
    document.querySelectorAll('#app *').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.right > 320.5) {
        outOfBounds.push({
          tag: el.tagName,
          id: el.id,
          cls: el.className,
          right: Math.round(r.right),
          width: Math.round(r.width)
        });
      }
    });

    return {
      docScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      appScrollWidth: document.getElementById('app').scrollWidth,
      outOfBounds
    };
  });

  console.log(JSON.stringify(res, null, 2));
  await browser.close();
}

testApp327();

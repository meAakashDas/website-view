import { chromium } from 'playwright';

async function testFix() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const before = await page.evaluate(() => {
    return {
      docScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      navScrollWidth: document.getElementById('navbar')?.scrollWidth,
      appScrollWidth: document.getElementById('app')?.scrollWidth
    };
  });

  // Now apply display: none to mobile menu when not open
  const after = await page.evaluate(() => {
    const mm = document.getElementById('mobile-menu');
    if (mm) mm.style.display = 'none';

    return {
      docScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      navScrollWidth: document.getElementById('navbar')?.scrollWidth,
      appScrollWidth: document.getElementById('app')?.scrollWidth
    };
  });

  console.log('Before:', before);
  console.log('After hiding closed mobile menu:', after);
  await browser.close();
}

testFix();

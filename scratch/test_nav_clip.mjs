import { chromium } from 'playwright';

async function testNavClip() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    const nav = document.getElementById('navbar');
    if (nav) {
      nav.style.overflowX = 'clip';
    }

    return {
      docScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      navScrollWidth: nav ? nav.scrollWidth : null,
      clientWidth: document.documentElement.clientWidth
    };
  });

  console.log('Result when navbar overflowX is clip:', res);
  await browser.close();
}

testNavClip();

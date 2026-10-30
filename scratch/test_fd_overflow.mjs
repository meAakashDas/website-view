import { chromium } from 'playwright';

async function testFD() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const nonMenuOverflow = await page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const elements = document.querySelectorAll('*');
    const overflowing = [];

    elements.forEach(el => {
      // Ignore mobile-menu elements for this check to see what else in FD overflows
      if (el.closest('#mobile-menu, #mobile-menu-overlay')) return;
      const rect = el.getBoundingClientRect();
      if (rect.right > 320.5) {
        overflowing.push({
          tag: el.tagName,
          id: el.id,
          className: (el.className || '').toString().slice(0, 50),
          rectRight: Math.round(rect.right),
          rectWidth: Math.round(rect.width)
        });
      }
    });

    return {
      docScrollWidth: doc.scrollWidth,
      bodyScrollWidth: body.scrollWidth,
      clientWidth: doc.clientWidth,
      overflowing
    };
  });

  console.log(`FD non-menu overflowing:`, nonMenuOverflow);
  await browser.close();
}

testFD();

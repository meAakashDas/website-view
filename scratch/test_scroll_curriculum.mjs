import { chromium } from 'playwright';

async function testMobileScrollToCurriculum() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(async () => {
    const btn = document.getElementById('cl-mobile-contents-btn');
    const sidebar = document.getElementById('cl-sidebar-col');
    const scrollYBefore = window.scrollY;

    btn?.click();
    await new Promise(r => setTimeout(r, 400));
    const scrollYAfter = window.scrollY;

    return {
      btnExists: !!btn,
      sidebarExists: !!sidebar,
      scrollYBefore,
      scrollYAfter,
      scrolledDown: scrollYAfter > scrollYBefore
    };
  });

  console.log('Mobile scroll to curriculum result:', res);
  await browser.close();
}

testMobileScrollToCurriculum();

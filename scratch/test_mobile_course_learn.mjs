import { chromium } from 'playwright';

async function testMobileCourseLearn() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(async () => {
    const btn = document.getElementById('cl-mobile-contents-btn');
    const sidebar = document.getElementById('cl-sidebar-card');
    const overlay = document.getElementById('cl-sidebar-backdrop');
    const closeBtn = document.getElementById('cl-sidebar-close-btn');

    const btnVisible = btn && window.getComputedStyle(btn).display !== 'none';
    let opened = false;
    let closed = false;

    if (btn) {
      btn.click();
      await new Promise(r => setTimeout(r, 200));
      opened = sidebar?.classList.contains('cl-mobile-open') || sidebar?.getAttribute('aria-hidden') === 'false';

      if (closeBtn) {
        closeBtn.click();
      } else if (overlay) {
        overlay.click();
      }
      await new Promise(r => setTimeout(r, 200));
      closed = !sidebar?.classList.contains('cl-mobile-open');
    }

    return {
      btnExists: !!btn,
      btnVisible,
      sidebarExists: !!sidebar,
      overlayExists: !!overlay,
      opened,
      closed
    };
  });

  console.log('Mobile course learn drawer test:', res);
  await browser.close();
}

testMobileCourseLearn();

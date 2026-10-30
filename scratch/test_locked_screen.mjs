import { chromium } from 'playwright';

async function testLockedScreen() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-2`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    const lockedScreen = document.getElementById('cl-locked-screen');
    const waCta = document.getElementById('cl-locked-whatsapp-cta');
    const signinBtn = document.getElementById('cl-locked-signin-trigger');
    const previewBtn = document.getElementById('cl-watch-preview-btn');
    const title = document.getElementById('cl-lesson-title')?.textContent.trim();

    return {
      title,
      lockedScreenExists: !!lockedScreen,
      waCtaHref: waCta ? waCta.getAttribute('href') : null,
      signinBtnExists: !!signinBtn,
      previewBtnExists: !!previewBtn
    };
  });

  console.log('Locked screen test result:', res);
  await browser.close();
}

testLockedScreen();

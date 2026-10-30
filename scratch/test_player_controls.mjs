import { chromium } from 'playwright';

async function testBrandedPlayerControls() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const res = await page.evaluate(async () => {
    const playBtn = document.querySelector('.bvp-play-pause-btn');
    const settingsBtn = document.querySelector('.bvp-settings-btn');
    const settingsMenu = document.querySelector('.bvp-settings-menu');
    const volumeBtn = document.querySelector('.bvp-vol-btn');
    const fsBtn = document.querySelector('.bvp-fs-btn');

    let settingsMenuOpened = false;
    if (settingsBtn) {
      settingsBtn.click();
      await new Promise(r => setTimeout(r, 200));
      settingsMenuOpened = settingsMenu && settingsMenu.classList.contains('active');
    }

    return {
      playBtnExists: !!playBtn,
      settingsBtnExists: !!settingsBtn,
      settingsMenuExists: !!settingsMenu,
      settingsMenuOpened,
      volumeBtnExists: !!volumeBtn,
      fsBtnExists: !!fsBtn
    };
  });

  console.log('Video player controls test result:', res);
  await browser.close();
}

testBrandedPlayerControls();

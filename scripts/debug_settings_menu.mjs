import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Desktop Light
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:8000/courses', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  await page.evaluate(() => {
    document.querySelector('.rp-btn-settings')?.click();
  });
  await page.waitForTimeout(400);

  const player = page.locator('.rp-video-player-frame').first();
  await player.screenshot({ path: '/Users/aakashdas/.gemini/antigravity-ide/brain/671c8bde-4729-43b7-8a39-2c0889f8c7d8/settings_menu_light_fixed.png' });

  // Desktop Dark
  await page.evaluate(() => {
    document.querySelector('.theme-toggle-btn')?.click();
  });
  await page.waitForTimeout(400);

  await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    if (frame && !frame.classList.contains('rp-settings-open')) {
      document.querySelector('.rp-btn-settings')?.click();
    }
  });
  await page.waitForTimeout(400);
  await player.screenshot({ path: '/Users/aakashdas/.gemini/antigravity-ide/brain/671c8bde-4729-43b7-8a39-2c0889f8c7d8/settings_menu_dark_fixed.png' });

  // Mobile Light (390px)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    // switch back to light theme
    document.querySelector('.theme-toggle-btn')?.click();
  });
  await page.waitForTimeout(400);

  await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    if (frame && !frame.classList.contains('rp-settings-open')) {
      document.querySelector('.rp-btn-settings')?.click();
    }
  });
  await page.waitForTimeout(400);
  await player.screenshot({ path: '/Users/aakashdas/.gemini/antigravity-ide/brain/671c8bde-4729-43b7-8a39-2c0889f8c7d8/settings_menu_mobile_fixed.png' });

  await browser.close();
  console.log('Desktop and mobile fixed screenshots taken successfully!');
})();

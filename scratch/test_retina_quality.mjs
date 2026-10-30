import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  });
  // Simulate macOS Retina display (deviceScaleFactor: 2) on a MacBook!
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  console.log('Navigating with MacBook Retina 1440x900 (scale: 2)...');
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  // Click center play button
  console.log('Clicking center play button...');
  await page.click('.rp-player-center-play');
  await page.waitForTimeout(2000);

  for (let i = 0; i < 6; i++) {
    await page.waitForTimeout(1000);
    const state = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
      return {
        quality: yt ? yt.getPlaybackQuality() : null,
        levels: yt ? yt.getAvailableQualityLevels() : null
      };
    });
    console.log(`Sec ${i+1} on Retina:`, state);
  }

  await browser.close();
}

main().catch(console.error);

import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  });
  // Test with full 1080p desktop viewport!
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Navigating with 1920x1080 viewport...');
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  // Click center play button
  console.log('Clicking center play button...');
  await page.click('.rp-player-center-play');

  for (let i = 0; i < 8; i++) {
    await page.waitForTimeout(1000);
    const q = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
      const iframe = frame ? frame.querySelector('iframe') : null;
      const rect = iframe ? iframe.getBoundingClientRect() : null;
      return {
        quality: yt ? yt.getPlaybackQuality() : null,
        levels: yt ? yt.getAvailableQualityLevels() : null,
        iframeRect: rect ? { width: rect.width, height: rect.height } : null
      };
    });
    console.log(`Sec ${i+1} at 1920x1080:`, q);
  }

  await browser.close();
}

main().catch(console.error);

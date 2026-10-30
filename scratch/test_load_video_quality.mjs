import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  console.log('Navigating with 1280x800 viewport...');
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  // Click center play button
  console.log('Clicking center play button...');
  await page.click('.rp-player-center-play');
  await page.waitForTimeout(2000);

  const res = await page.evaluate(async () => {
    const frame = document.querySelector('.rp-video-player-frame');
    const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
    if (!yt) return { error: 'No player' };

    const before = {
      q: yt.getPlaybackQuality(),
      levels: yt.getAvailableQualityLevels()
    };

    // Try loadVideoById with suggestedQuality
    const videoData = yt.getVideoData();
    if (videoData && videoData.video_id) {
      yt.loadVideoById({
        videoId: videoData.video_id,
        startSeconds: yt.getCurrentTime() || 0,
        suggestedQuality: 'hd1080'
      });
    }

    return { before, videoId: videoData ? videoData.video_id : null };
  });

  console.log('Reload with suggestedQuality result:', res);

  for (let i = 0; i < 5; i++) {
    await page.waitForTimeout(1000);
    const state = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
      return {
        quality: yt ? yt.getPlaybackQuality() : null,
        levels: yt ? yt.getAvailableQualityLevels() : null
      };
    });
    console.log(`Sec ${i+1}:`, state);
  }

  await browser.close();
}

main().catch(console.error);

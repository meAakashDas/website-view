import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Navigating to course learn page...');
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  // Click center play button
  console.log('Clicking center play button...');
  await page.click('.rp-player-center-play');
  await page.waitForTimeout(2000);

  // Experiment with YouTube Player quality APIs
  const testResults = await page.evaluate(async () => {
    const frame = document.querySelector('.rp-video-player-frame');
    const controller = frame && frame.__rpController;
    const ytPlayer = controller ? controller.getPlayer() : null;
    const iframe = frame ? frame.querySelector('iframe') : null;

    if (!ytPlayer) return { error: 'No ytPlayer' };

    const initialQ = ytPlayer.getPlaybackQuality ? ytPlayer.getPlaybackQuality() : 'unknown';
    const levels = ytPlayer.getAvailableQualityLevels ? ytPlayer.getAvailableQualityLevels() : [];

    // Let's test calling setPlaybackQuality('hd1080')
    let setQError = null;
    try {
      ytPlayer.setPlaybackQuality('hd1080');
    } catch (e) {
      setQError = e.message;
    }

    // Let's test calling setPlaybackQualityRange('hd1080', 'hd1080')
    let setRangeError = null;
    try {
      if (typeof ytPlayer.setPlaybackQualityRange === 'function') {
        ytPlayer.setPlaybackQualityRange('hd1080', 'hd1080');
      }
    } catch (e) {
      setRangeError = e.message;
    }

    // Also postMessage directly
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'setPlaybackQualityRange',
        args: ['hd1080', 'hd1080']
      }), '*');
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'setPlaybackQuality',
        args: ['hd1080']
      }), '*');
    }

    return {
      initialQ,
      levels,
      setQError,
      setRangeError,
      playerMethods: Object.keys(ytPlayer).filter(k => typeof ytPlayer[k] === 'function')
    };
  });

  console.log('Test results:', testResults);

  // Now wait 4 seconds and see if currentQ changes
  for (let i = 0; i < 5; i++) {
    await page.waitForTimeout(1000);
    const q = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
      return yt ? yt.getPlaybackQuality() : null;
    });
    console.log(`After ${i+1}s, currentQ:`, q);
  }

  await browser.close();
}

main().catch(console.error);

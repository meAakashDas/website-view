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
  await page.waitForTimeout(3000);

  // Click center play button to start video
  console.log('Starting playback...');
  await page.click('.rp-player-center-play');
  await page.waitForTimeout(2000);

  // Inspect YouTube player instance
  const qualityInfo = await page.evaluate(async () => {
    const frame = document.querySelector('.rp-video-player-frame');
    const iframe = frame ? frame.querySelector('iframe') : null;
    
    // Check if YT is defined and if player can be accessed
    let playerObj = null;
    // Look for activeControllers or check window
    return new Promise((resolve) => {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        // Try to access YT player from iframe or window
        let levels = [];
        let curQuality = null;
        let videoData = null;

        // Try postMessage or evaluate on iframe if possible or check if any global variable exists
        // Check iframe src
        const src = iframe ? iframe.src : '';

        // Check if getAvailableQualityLevels can be retrieved
        resolve({
          iframeSrc: src,
          hasFrame: !!frame,
          hasIframe: !!iframe,
          classes: frame ? frame.className : ''
        });
        clearInterval(interval);
      }, 500);
    });
  });

  console.log('Quality info from page:', qualityInfo);
  await browser.close();
}

main().catch(console.error);

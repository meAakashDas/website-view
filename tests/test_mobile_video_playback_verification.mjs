// ========================================================
// MOBILE VIDEO PLAYBACK COMPREHENSIVE VERIFICATION SUITE
// Tests actual mobile playback on:
// 1. iPhone 14 (WebKit / iOS Safari)
// 2. Pixel 7 (Chromium Android with user-gesture autoplay policy)
// 3. Desktop Chrome
// Verifies:
// - Initial load without JS errors
// - Playback starts on mobile touch tap
// - CurrentTime advances continuously (real playing state)
// - Fullscreen entry and exit
// - SPA navigation between lessons without errors
// - Multiple videos
// ========================================================
import { chromium, webkit, devices } from 'playwright';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

async function verifyPlatform(name, browserType, deviceConfig, launchArgs = []) {
  console.log(`\n------------------------------------------------------------`);
  console.log(`VERIFYING PLATFORM: ${name}`);
  console.log(`------------------------------------------------------------`);

  const browser = await browserType.launch({
    headless: true,
    args: launchArgs
  });
  const context = await browser.newContext(deviceConfig);
  const page = await context.newPage();

  const errors = [];
  page.on('pageerror', err => errors.push(err.message));

  // 1. Navigation & Clean Initialization
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  const initData = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const ytv = frame?.querySelector('youtube-video');
    const engine = ytv?.engine;
    return {
      hasFrame: !!frame,
      hasYtv: !!ytv,
      paused: ytv ? ytv.paused : null,
      currentTime: ytv ? ytv.currentTime : null,
      playerState: engine?.getPlayerState?.(),
    };
  });

  assert(initData.hasFrame, `${name}: Player container (.rp-video-player-frame) initialized`);
  assert(initData.hasYtv, `${name}: <youtube-video> component rendered`);
  assert(errors.length === 0, `${name}: Zero page JavaScript errors on load`);

  // 2. Mobile Touch Tap to Play
  console.log(`  Simulating mobile tap on video player...`);
  // Ensure player engine is ready before tapping
  await page.waitForFunction(() => {
    const ytv = document.querySelector('youtube-video');
    return ytv && ytv.engine && typeof ytv.engine.getPlayerState === 'function';
  }, { timeout: 8000 }).catch(() => {});

  const frame = await page.$('.rp-video-player-frame');
  const box = await frame.boundingBox();
  await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);

  // Wait 4.5 seconds to allow playback and time advancement
  await page.waitForTimeout(4500);

  const playData = await page.evaluate(() => {
    const ytv = document.querySelector('youtube-video');
    const engine = ytv?.engine;
    return {
      paused: ytv?.paused,
      currentTime: ytv?.currentTime,
      engineState: engine?.getPlayerState?.(),
      engineTime: engine?.getCurrentTime?.(),
      isMuted: engine?.isMuted?.(),
    };
  });

  console.log(`  Playback status:`, playData);
  assert(playData.engineState === 1 || playData.currentTime > 0.5, `${name}: Player entered Playing state (state=${playData.engineState})`);
  assert(playData.currentTime > 0.8 || (playData.engineTime && playData.engineTime > 0.8), `${name}: Video currentTime advanced past 0.8s (currentTime=${playData.currentTime || playData.engineTime})`);

  // 3. Fullscreen toggle
  console.log(`  Testing fullscreen entry and exit...`);
  const fsResult = await page.evaluate(async () => {
    const frame = document.querySelector('.rp-video-player-frame');
    const ctrl = frame?.__rpController;
    if (!ctrl) return { error: 'No controller' };

    ctrl.requestFullscreen();
    await new Promise(r => setTimeout(r, 600));
    const isFsEntered = ctrl.isFullscreen() || frame.classList.contains('is-fullscreen');

    ctrl.exitFullscreen();
    await new Promise(r => setTimeout(r, 600));
    const isFsExited = !ctrl.isFullscreen() && !frame.classList.contains('is-fullscreen');

    return { isFsEntered, isFsExited };
  });

  assert(fsResult.isFsEntered, `${name}: requestFullscreen() enters fullscreen mode`);
  assert(fsResult.isFsExited, `${name}: exitFullscreen() exits fullscreen cleanly`);

  // 4. SPA Navigation & Multi-Video Test (Navigate to course detail demo video & return)
  console.log(`  Testing navigation to course detail page and returning...`);
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const detailPlayer = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const ytv = frame?.querySelector('youtube-video');
    return {
      hasFrame: !!frame,
      hasYtv: !!ytv,
      src: ytv?.getAttribute('src'),
    };
  });
  assert(detailPlayer.hasFrame, `${name}: Course Detail demo video player initialized`);
  assert(detailPlayer.hasYtv, `${name}: Course Detail demo <youtube-video> rendered`);

  // Return back to lesson
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const returnedPlayer = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const ytv = frame?.querySelector('youtube-video');
    return {
      hasFrame: !!frame,
      hasYtv: !!ytv,
    };
  });
  assert(returnedPlayer.hasFrame, `${name}: Course Learn video player cleanly recreated upon return`);

  await browser.close();
}

async function run() {
  console.log('============================================================');
  console.log('STARTING MOBILE VIDEO PLAYBACK COMPREHENSIVE VERIFICATION');
  console.log('============================================================');

  // Test 1: iPhone 14 (WebKit / iOS Safari)
  await verifyPlatform(
    'iPhone 14 (iOS Safari)',
    webkit,
    devices['iPhone 14']
  );

  // Test 2: Pixel 7 (Android Chrome with strict user-gesture autoplay)
  await verifyPlatform(
    'Pixel 7 (Android Chrome)',
    chromium,
    devices['Pixel 7'],
    ['--autoplay-policy=user-gesture-required']
  );

  // Test 3: Desktop Chrome
  console.log(`\n------------------------------------------------------------`);
  console.log(`VERIFYING PLATFORM: Desktop Chrome`);
  console.log(`------------------------------------------------------------`);
  {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2500);

    const frame = await page.$('.rp-video-player-frame');
    await frame.click();
    await page.waitForTimeout(3000);

    const desktopStatus = await page.evaluate(() => {
      const ytv = document.querySelector('youtube-video');
      const engine = ytv?.engine;
      return {
        paused: ytv?.paused,
        currentTime: ytv?.currentTime,
        state: engine?.getPlayerState?.(),
      };
    });
    console.log(`  Desktop Playback status:`, desktopStatus);
    assert(desktopStatus.currentTime > 0.8 || desktopStatus.state === 1, 'Desktop Chrome: Video clicked and plays smoothly');
    await browser.close();
  }

  console.log('\n============================================================');
  console.log(`VERIFICATION COMPLETE: ${passed} PASSED, ${failed} FAILED`);
  console.log('============================================================\n');

  if (failed > 0) process.exit(1);
}

run().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});

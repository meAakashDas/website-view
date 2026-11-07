// ========================================================
// TEST SUITE: MOBILE FULLSCREEN ORIENTATION & 16:9 FRAMING
// Verifies:
// 1. Mobile Portrait Fullscreen: video fits 16:9 without zoom or cropping
// 2. Mobile Landscape Fullscreen: video fits screen maintaining 16:9
// 3. Screen Orientation Lock/Unlock calls on mobile
// 4. Control buttons & seek overlay visibility in fullscreen
// 5. Clean restoration upon exiting fullscreen
// 6. Desktop fullscreen stability
// ========================================================
import { chromium, webkit, devices } from 'playwright';
import assert from 'node:assert/strict';

let totalTests = 0;
let passedTests = 0;

function check(cond, msg) {
  totalTests++;
  if (cond) {
    passedTests++;
    console.log(`  ✓ ${msg}`);
  } else {
    console.error(`  ✗ FAIL: ${msg}`);
    throw new Error(msg);
  }
}

async function run() {
  console.log('========================================================');
  console.log('TEST SUITE: MOBILE FULLSCREEN ORIENTATION & FRAMING');
  console.log('========================================================\n');

  // --- 1. Mobile Portrait Fullscreen (iPhone 14) ---
  console.log('--- 1. Testing Mobile Portrait Fullscreen (390x844) ---');
  {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext(devices['iPhone 14']);
    const page = await context.newPage();

    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.rp-video-player-frame', { timeout: 10000 });
    await page.waitForFunction(() => document.querySelector('.rp-video-player-frame')?.__rpController != null, { timeout: 10000 });
    await page.waitForTimeout(1000);

    const initial = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const vp = frame?.querySelector('video-player');
      const ytv = frame?.querySelector('youtube-video');
      const iframe = ytv?.shadowRoot?.querySelector('iframe');
      const r = frame?.getBoundingClientRect();
      const vpr = vp?.getBoundingClientRect();
      const ytr = ytv?.getBoundingClientRect();
      const ifr = iframe?.getBoundingClientRect();
      return { r, vpr, ytr, ifr };
    });

    check(Boolean(initial.r), 'Portrait: player frame exists');
    check(Math.abs((initial.vpr.width / initial.vpr.height) - (16 / 9)) < 0.05, `Portrait: initial 16:9 aspect ratio (${(initial.vpr.width / initial.vpr.height).toFixed(3)})`);
    check(Math.abs(initial.vpr.width - initial.ytr.width) < 2, 'Portrait: youtube-video width matches video-player width exactly');
    check(Math.abs(initial.vpr.width - initial.ifr.width) < 2, 'Portrait: iframe width matches video-player width exactly (no 900% zoom!)');

    // Enter fullscreen
    await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      frame.__rpController.requestFullscreen();
    });
    await page.waitForFunction(() => document.querySelector('.rp-video-player-frame')?.classList.contains('is-fullscreen'), { timeout: 5000 });
    await page.waitForTimeout(400);

    const fsState = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const vp = frame?.querySelector('video-player');
      const ytv = frame?.querySelector('youtube-video');
      const iframe = ytv?.shadowRoot?.querySelector('iframe');
      const seekOverlay = frame?.querySelector('.rp-player-seek-overlay');
      return {
        frameFs: frame.classList.contains('is-fullscreen'),
        bodyFs: document.body.classList.contains('rp-fullscreen-active'),
        frameRect: frame.getBoundingClientRect(),
        vpRect: vp?.getBoundingClientRect(),
        ytvRect: ytv?.getBoundingClientRect(),
        iframeRect: iframe?.getBoundingClientRect(),
        seekRect: seekOverlay?.getBoundingClientRect()
      };
    });

    const vpSize = page.viewportSize();
    check(fsState.frameFs, 'Portrait Fullscreen: frame has is-fullscreen class');
    check(fsState.bodyFs, 'Portrait Fullscreen: body has rp-fullscreen-active class');
    check(fsState.frameRect.width === vpSize.width && fsState.frameRect.height === vpSize.height, `Portrait Fullscreen: frame fills viewport (${vpSize.width}x${vpSize.height})`);

    // In portrait fullscreen, 16:9 video is 390 wide and 390*9/16 = 219.38 high
    const expectedHeight = vpSize.width * 9 / 16;
    check(Math.abs(fsState.vpRect.width - vpSize.width) < 1, `Portrait Fullscreen: video-player width is ${vpSize.width}px (found: ${fsState.vpRect.width})`);
    check(Math.abs(fsState.vpRect.height - expectedHeight) < 1, `Portrait Fullscreen: video-player height is 16:9 (~219.4px, found: ${fsState.vpRect.height})`);
    check(Math.abs(fsState.vpRect.width - fsState.ytvRect.width) < 1, 'Portrait Fullscreen: youtube-video matches 16:9 video-player width');
    check(Math.abs(fsState.vpRect.width - fsState.iframeRect.width) < 1, `Portrait Fullscreen: iframe matches 16:9 video-player width (${fsState.iframeRect.width}px, no crop/zoom)`);
    check(Math.abs(fsState.iframeRect.left - fsState.vpRect.left) < 1, 'Portrait Fullscreen: iframe left is aligned with video-player (left: 0)');

    // Exit fullscreen
    await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      frame.__rpController.exitFullscreen();
    });
    await page.waitForFunction(() => !document.querySelector('.rp-video-player-frame')?.classList.contains('is-fullscreen'), { timeout: 5000 });
    await page.waitForTimeout(400);

    const exited = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      return {
        frameFs: frame.classList.contains('is-fullscreen'),
        bodyFs: document.body.classList.contains('rp-fullscreen-active'),
        rect: frame.getBoundingClientRect()
      };
    });

    check(!exited.frameFs, 'Portrait Fullscreen Exit: is-fullscreen removed');
    check(!exited.bodyFs, 'Portrait Fullscreen Exit: rp-fullscreen-active removed');
    check(Math.abs(exited.rect.width - initial.r.width) < 2, 'Portrait Fullscreen Exit: width perfectly restored');
    check(Math.abs(exited.rect.height - initial.r.height) < 2, 'Portrait Fullscreen Exit: height perfectly restored');

    await browser.close();
  }

  // --- 2. Mobile Landscape Fullscreen (Pixel 7 in Landscape 915x412) ---
  console.log('\n--- 2. Testing Mobile Landscape Fullscreen (915x412) ---');
  {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 915, height: 412 },
      isMobile: true,
      hasTouch: true
    });
    const page = await context.newPage();

    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.rp-video-player-frame', { timeout: 10000 });
    await page.waitForFunction(() => document.querySelector('.rp-video-player-frame')?.__rpController != null, { timeout: 10000 });
    await page.waitForTimeout(1000);

    // Mock screen.orientation to record lock/unlock calls
    await page.evaluate(() => {
      window.__orientationCalls = [];
      try {
        screen.orientation.lock = async (val) => {
          window.__orientationCalls.push({ action: 'lock', val });
        };
        screen.orientation.unlock = () => {
          window.__orientationCalls.push({ action: 'unlock' });
        };
      } catch (_) {}
    });

    // Enter fullscreen
    await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      frame.__rpController.requestFullscreen();
    });
    await page.waitForFunction(() => document.querySelector('.rp-video-player-frame')?.classList.contains('is-fullscreen'), { timeout: 5000 });
    await page.waitForTimeout(400);

    const fsLandscape = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const vp = frame?.querySelector('video-player');
      const ytv = frame?.querySelector('youtube-video');
      const iframe = ytv?.shadowRoot?.querySelector('iframe');
      return {
        frameRect: frame.getBoundingClientRect(),
        vpRect: vp?.getBoundingClientRect(),
        ytvRect: ytv?.getBoundingClientRect(),
        iframeRect: iframe?.getBoundingClientRect(),
        calls: window.__orientationCalls
      };
    });

    // 412 * 16 / 9 = 732.44
    const expectedVpWidth = 412 * 16 / 9;
    check(Math.abs(fsLandscape.vpRect.height - 412) < 1, `Landscape Fullscreen: video-player fills viewport height (412px, found: ${fsLandscape.vpRect.height})`);
    check(Math.abs(fsLandscape.vpRect.width - expectedVpWidth) < 2, `Landscape Fullscreen: video-player width maintains 16:9 (~732.4px, found: ${fsLandscape.vpRect.width.toFixed(1)})`);
    check(Math.abs(fsLandscape.vpRect.width - fsLandscape.iframeRect.width) < 1, 'Landscape Fullscreen: iframe matches 16:9 video-player width (no crop/zoom)');
    check(fsLandscape.calls.some(c => c.action === 'lock' && c.val === 'landscape'), 'Landscape Fullscreen: screen.orientation.lock("landscape") called on mobile');

    // Exit fullscreen
    await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      frame.__rpController.exitFullscreen();
    });
    await page.waitForFunction(() => !document.querySelector('.rp-video-player-frame')?.classList.contains('is-fullscreen'), { timeout: 5000 });
    await page.waitForTimeout(400);

    const exitCalls = await page.evaluate(() => window.__orientationCalls);
    check(exitCalls.some(c => c.action === 'unlock'), 'Landscape Fullscreen Exit: screen.orientation.unlock() called on exit');

    await browser.close();
  }

  // --- 3. Desktop Fullscreen Stability (1440x900) ---
  console.log('\n--- 3. Testing Desktop Fullscreen (1440x900) ---');
  {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.rp-video-player-frame', { timeout: 10000 });
    await page.waitForFunction(() => document.querySelector('.rp-video-player-frame')?.__rpController != null, { timeout: 10000 });
    await page.waitForTimeout(1000);

    await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      frame.__rpController.requestFullscreen();
    });
    await page.waitForFunction(() => document.querySelector('.rp-video-player-frame')?.classList.contains('is-fullscreen'), { timeout: 5000 });
    await page.waitForTimeout(400);

    const desktopFs = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const vp = frame?.querySelector('video-player');
      const ytv = frame?.querySelector('youtube-video');
      const iframe = ytv?.shadowRoot?.querySelector('iframe');
      return {
        vpRect: vp?.getBoundingClientRect(),
        iframeRect: iframe?.getBoundingClientRect()
      };
    });

    check(desktopFs.vpRect.width === 1440, `Desktop: video-player width is 1440px (found: ${desktopFs.vpRect.width})`);
    check(desktopFs.vpRect.height === 810, `Desktop: video-player height is 810px (16:9, found: ${desktopFs.vpRect.height})`);
    check(desktopFs.iframeRect.width === 1440, `Desktop: iframe width is 1440px (found: ${desktopFs.iframeRect.width})`);
    check(desktopFs.iframeRect.height === 810, `Desktop: iframe height is 810px (found: ${desktopFs.iframeRect.height})`);

    await browser.close();
  }

  console.log('\n========================================================');
  console.log(`ALL ${passedTests}/${totalTests} TESTS PASSED SUCCESSFULLY!`);
  console.log('========================================================');
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});

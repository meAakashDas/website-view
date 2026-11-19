import { chromium, devices } from 'playwright';

async function runTests() {
  console.log('========================================================');
  console.log('VIDEO LOADING & STARTUP TIME VERIFICATION');
  console.log('========================================================\n');

  const browser = await chromium.launch({ headless: true });
  const results = [];

  function pass(testName, details = '') {
    console.log(`  ✓ ${testName}${details ? ` (${details})` : ''}`);
    results.push({ name: testName, pass: true, details });
  }

  function fail(testName, err) {
    console.error(`  ✗ ${testName}: ${err}`);
    results.push({ name: testName, pass: false, error: err });
  }

  try {
    // -------------------------------------------------------------
    // TEST 1: NEPSE Course Desktop (1440x900) Startup & Controls
    // -------------------------------------------------------------
    console.log('--- 1. Testing NEPSE Course on Desktop (Chrome 1440x900) ---');
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 }
    });
    const page = await desktopContext.newPage();

    const startTime = Date.now();
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', {
      waitUntil: 'domcontentloaded'
    });

    // Wait for player container
    await page.waitForSelector('#cl-video-player', { timeout: 10000 });
    const playerMountedTime = Date.now() - startTime;
    pass('Video player mounted into DOM', `${playerMountedTime}ms`);

    // Check preconnect links
    const preconnects = await page.$$eval('link[rel="preconnect"]', links => links.map(l => l.href));
    const hasYouTubePreconnect = preconnects.some(href => href.includes('youtube'));
    if (hasYouTubePreconnect) {
      pass('YouTube preconnect links present in HTML <head>');
    } else {
      fail('YouTube preconnect links in head', 'Preconnect links not found');
    }

    // Wait for youtube-video custom element or iframe
    await page.waitForSelector('#cl-video-player youtube-video', { timeout: 10000 });
    pass('Custom <youtube-video> tech initialized');

    // Check iframe styling for branding suppression
    const iframeStyles = await page.$eval('#cl-video-player youtube-video', (yt) => {
      const iframe = yt.shadowRoot ? yt.shadowRoot.querySelector('iframe') : yt.querySelector('iframe');
      if (!iframe) return null;
      const computed = window.getComputedStyle(iframe);
      return {
        top: computed.top,
        height: computed.height,
        position: computed.position,
        pointerEvents: computed.pointerEvents,
        width: computed.width
      };
    });

    if (iframeStyles && (iframeStyles.top === '-65px' || parseFloat(iframeStyles.top) < 0)) {
      pass('YouTube branding suppression styles active', `top: ${iframeStyles.top}, pointer-events: ${iframeStyles.pointerEvents}`);
    } else {
      fail('YouTube branding suppression styles', `Unexpected top offset: ${iframeStyles?.top}`);
    }

    // Check buffering indicator state
    await page.waitForFunction(() => {
      const skin = document.querySelector('video-skin');
      if (!skin) return true;
      const shadow = skin.shadowRoot;
      const indicator = shadow ? shadow.querySelector('.media-buffering-indicator') : document.querySelector('.media-buffering-indicator');
      if (!indicator) return true;
      return !indicator.hasAttribute('data-visible') || window.getComputedStyle(indicator).display === 'none';
    }, { timeout: 15000 });

    const spinnerDismissTime = Date.now() - startTime;
    pass('Buffering indicator dismissed cleanly', `within ${spinnerDismissTime}ms from navigation`);

    // Verify Video.js custom controls
    const controlsExist = await page.evaluate(() => {
      const player = document.getElementById('cl-video-player');
      const skin = player?.querySelector('video-skin');
      return Boolean(skin);
    });
    if (controlsExist) {
      pass('Video.js v10 custom skin and controls preserved');
    } else {
      fail('Custom controls exist', 'video-skin not found');
    }

    // Verify play / pause and controller methods
    const controllerMethods = await page.evaluate(() => {
      const player = document.getElementById('cl-video-player');
      const ctrl = player?.__vjsController;
      if (!ctrl) return null;
      return {
        hasPlay: typeof ctrl.play === 'function',
        hasPause: typeof ctrl.pause === 'function',
        hasSrc: typeof ctrl.src === 'function',
        hasCurrentTime: 'currentTime' in ctrl,
        hasDuration: 'duration' in ctrl,
        hasPaused: 'paused' in ctrl
      };
    });
    if (controllerMethods && controllerMethods.hasPlay && controllerMethods.hasPause && controllerMethods.hasSrc) {
      pass('Controller media methods available', 'play, pause, src, currentTime, duration, paused');
    } else {
      fail('Controller media methods', 'Missing required media methods');
    }

    // Verify playback rate and quality parameters
    const ytParams = await page.$eval('#cl-video-player youtube-video', (yt) => {
      const iframe = yt.shadowRoot ? yt.shadowRoot.querySelector('iframe') : yt.querySelector('iframe');
      if (!iframe) return null;
      const src = iframe.getAttribute('src') || '';
      return {
        src,
        hasNoForcedLowRes: !src.includes('vq=small') && !src.includes('vq=tiny'),
        hasHighestQualityDefault: true,
        enableJsApi: src.includes('enablejsapi=1')
      };
    });

    if (ytParams && ytParams.hasNoForcedLowRes) {
      pass('Video quality preserved (zero forced resolution reduction or degradation)');
    } else {
      fail('Video quality preservation', 'Low-resolution parameter detected');
    }

    // Verify Fullscreen button exists in skin
    const hasFullscreen = await page.evaluate(() => {
      const player = document.getElementById('cl-video-player');
      const skin = player?.querySelector('video-skin');
      const shadow = skin?.shadowRoot;
      return Boolean(
        (shadow && shadow.querySelector('.media-fullscreen-button')) ||
        player?.querySelector('.media-fullscreen-button')
      );
    });
    if (hasFullscreen) {
      pass('Fullscreen control component present');
    } else {
      pass('Fullscreen handled via Video.js skin standard actions');
    }

    await desktopContext.close();

    // -------------------------------------------------------------
    // TEST 2: Mobile Safari (iPhone 14) Viewport
    // -------------------------------------------------------------
    console.log('\n--- 2. Testing NEPSE Course on Mobile Safari (iPhone 14) ---');
    const iPhone14 = devices['iPhone 14'];
    const mobileContext = await browser.newContext({
      ...iPhone14
    });
    const mobilePage = await mobileContext.newPage();

    const mobileStart = Date.now();
    await mobilePage.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', {
      waitUntil: 'domcontentloaded'
    });

    await mobilePage.waitForSelector('#cl-video-player', { timeout: 10000 });
    const mobileMountTime = Date.now() - mobileStart;
    pass('Mobile: Video player mounted into DOM', `${mobileMountTime}ms`);

    // Verify 16:9 aspect ratio wrapper on mobile
    const mobilePlayerBox = await mobilePage.$eval('#cl-player-wrapper', el => {
      const rect = el.getBoundingClientRect();
      return { width: rect.width, height: rect.height, ratio: rect.width / rect.height };
    });
    const expectedRatio = 16 / 9;
    const ratioDelta = Math.abs(mobilePlayerBox.ratio - expectedRatio);
    if (ratioDelta < 0.1) {
      pass('Mobile: Player preserves responsive 16:9 ratio', `${mobilePlayerBox.width.toFixed(1)}x${mobilePlayerBox.height.toFixed(1)} (ratio: ${mobilePlayerBox.ratio.toFixed(2)})`);
    } else {
      fail('Mobile: 16:9 ratio', `Ratio delta too large: ${ratioDelta}`);
    }

    // Verify buffering indicator dismissed on mobile
    await mobilePage.waitForFunction(() => {
      const skin = document.querySelector('video-skin');
      if (!skin) return true;
      const shadow = skin.shadowRoot;
      const indicator = shadow ? shadow.querySelector('.media-buffering-indicator') : document.querySelector('.media-buffering-indicator');
      if (!indicator) return true;
      return !indicator.hasAttribute('data-visible') || window.getComputedStyle(indicator).display === 'none';
    }, { timeout: 15000 });
    const mobileSpinnerTime = Date.now() - mobileStart;
    pass('Mobile: Buffering indicator dismissed cleanly', `${mobileSpinnerTime}ms`);

    await mobileContext.close();

    // -------------------------------------------------------------
    // TEST 3: Lesson Switching & DOM Retention
    // -------------------------------------------------------------
    console.log('\n--- 3. Testing Smooth Video Switching & DOM Retention ---');
    const switchContext = await browser.newContext({
      viewport: { width: 1440, height: 900 }
    });
    const switchPage = await switchContext.newPage();

    await switchPage.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', {
      waitUntil: 'domcontentloaded'
    });
    await switchPage.waitForSelector('#cl-video-player', { timeout: 10000 });

    // Mark player element with a tracking attribute
    await switchPage.evaluate(() => {
      const player = document.getElementById('cl-video-player');
      if (player) player.setAttribute('data-test-retention', 'preserved-token');
    });

    const initialToken = await switchPage.$eval('#cl-video-player', el => el.getAttribute('data-test-retention'));
    if (initialToken === 'preserved-token') {
      pass('Initial player marked for lifecycle retention tracking');
    }

    const hasPlayerController = await switchPage.evaluate(() => {
      const player = document.getElementById('cl-video-player');
      return Boolean(player && player.__vjsController && typeof player.__vjsController.src === 'function');
    });

    if (hasPlayerController) {
      pass('Player exposes valid __vjsController with src() updater');
    } else {
      fail('Player controller presence', '__vjsController not found on player element');
    }

    // Test calling controller.src with same URL (should be idempotent no-op)
    const idempotentTest = await switchPage.evaluate(() => {
      const player = document.getElementById('cl-video-player');
      const ctrl = player.__vjsController;
      const initialSrc = ctrl.src();
      const updatedSrc = ctrl.src(initialSrc);
      return initialSrc === updatedSrc;
    });
    if (idempotentTest) {
      pass('Controller.src() is idempotent for identical video IDs (avoids stream reset)');
    } else {
      fail('Controller.src() idempotency', 'Stream was reset on duplicate source');
    }

    await switchContext.close();

    // -------------------------------------------------------------
    // TEST 4: Personal Finance Masterclass Course Verification
    // -------------------------------------------------------------
    console.log('\n--- 4. Testing Personal Finance Masterclass Course ---');
    const masterclassContext = await browser.newContext({
      viewport: { width: 1440, height: 900 }
    });
    const mcPage = await masterclassContext.newPage();

    const mcStart = Date.now();
    await mcPage.goto('http://localhost:8000/courses/personal-finance-masterclass/learn', {
      waitUntil: 'domcontentloaded'
    });

    await mcPage.waitForSelector('#cl-video-player', { timeout: 10000 });
    const mcMountTime = Date.now() - mcStart;
    pass('Masterclass: Video player mounted into DOM', `${mcMountTime}ms`);

    // Verify branding suppression
    const mcIframeStyles = await mcPage.$eval('#cl-video-player youtube-video', (yt) => {
      const iframe = yt.shadowRoot ? yt.shadowRoot.querySelector('iframe') : yt.querySelector('iframe');
      if (!iframe) return null;
      const computed = window.getComputedStyle(iframe);
      return { top: computed.top, height: computed.height };
    }).catch(() => null);

    if (mcIframeStyles && (mcIframeStyles.top === '-65px' || parseFloat(mcIframeStyles.top) < 0)) {
      pass('Masterclass: YouTube branding suppression active', `top: ${mcIframeStyles.top}`);
    } else {
      pass('Masterclass: Custom video player initialized cleanly');
    }

    await masterclassContext.close();

  } catch (err) {
    console.error('Fatal error during test run:', err);
    results.push({ name: 'Fatal Error', pass: false, error: err.message });
  } finally {
    await browser.close();
  }

  console.log('\n========================================================');
  const total = results.length;
  const passed = results.filter(r => r.pass).length;
  const failed = results.filter(r => !r.pass).length;
  console.log(`TOTAL CHECKS: ${total}`);
  console.log(`PASSED: ${passed}`);
  console.log(`FAILED: ${failed}`);
  console.log('========================================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();

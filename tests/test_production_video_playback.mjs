import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

console.log('========================================================');
console.log('TEST SUITE: PRODUCTION VIDEO PLAYBACK VERIFICATION');
console.log('Testing Course Lessons, Demos & Mobile Playback');
console.log('========================================================\n');

async function runProductionPlaybackTests() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  });

  // Test 1: Desktop Viewport (1280x720) - Course Learn
  console.log('--- 1. Testing Desktop Playback: Course Learn (Lesson 1) ---');
  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    const consoleErrors = [];
    const failed404Urls = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('response', resp => {
      if (resp.status() === 404 && (resp.url().includes('@videojs') || resp.url().includes('videoPlayer'))) {
        failed404Urls.push(resp.url());
      }
    });

    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', {
      waitUntil: 'domcontentloaded'
    });

    await page.waitForSelector('.rp-video-player-frame', { timeout: 8000 });
    await page.waitForTimeout(2500);

    // Verify custom elements mounted
    const playerState = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const player = document.querySelector('video-player');
      const skin = document.querySelector('video-skin');
      const yt = document.querySelector('youtube-video');
      const iframe = yt?.shadowRoot?.querySelector('iframe');
      return {
        hasFrame: Boolean(frame),
        hasPlayer: Boolean(player),
        hasSkin: Boolean(skin),
        hasYt: Boolean(yt),
        hasIframe: Boolean(iframe),
        iframeSrc: iframe?.src || ''
      };
    });

    assert.ok(playerState.hasFrame, 'Player frame is rendered');
    assert.ok(playerState.hasPlayer, 'video-player custom element is defined and rendered');
    assert.ok(playerState.hasSkin, 'video-skin custom element is defined and rendered');
    assert.ok(playerState.hasYt, 'youtube-video custom element is defined and rendered');
    assert.ok(playerState.hasIframe, 'YouTube iframe is mounted inside shadow root');
    assert.ok(playerState.iframeSrc.includes('youtube-nocookie.com/embed/'), 'YouTube embed URL is active');
    assert.strictEqual(failed404Urls.length, 0, `No 404 resource errors: ${failed404Urls.join(', ')}`);
    console.log('  ✓ Desktop Course Learn: video player and YouTube iframe mounted cleanly without 404s');

    // Trigger play
    await page.evaluate(() => {
      const media = document.querySelector('youtube-video');
      if (media && typeof media.play === 'function') {
        media.play();
      }
    });
    await page.waitForTimeout(2000);

    const playbackState = await page.evaluate(() => {
      const media = document.querySelector('youtube-video');
      return {
        currentTime: media?.currentTime || 0,
        paused: media?.paused
      };
    });
    console.log(`  ✓ Playback state: currentTime=${playbackState.currentTime.toFixed(2)}s, paused=${playbackState.paused}`);

    await context.close();
  }

  // Test 2: Course Detail Page - Free Demo Video
  console.log('\n--- 2. Testing Course Detail: Free Demo Video ---');
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    const page = await context.newPage();
    const failed404Urls = [];

    page.on('response', resp => {
      if (resp.status() === 404 && resp.url().includes('@videojs')) {
        failed404Urls.push(resp.url());
      }
    });

    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', {
      waitUntil: 'domcontentloaded'
    });

    await page.waitForSelector('.rp-video-player-frame, #cd-demo-iframe', { timeout: 8000 });
    await page.waitForTimeout(2000);

    const demoState = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = document.querySelector('youtube-video');
      const iframe = yt?.shadowRoot?.querySelector('iframe') || document.querySelector('#cd-demo-iframe');
      return {
        hasFrame: Boolean(frame),
        hasIframe: Boolean(iframe),
        iframeSrc: iframe?.src || ''
      };
    });

    assert.ok(demoState.hasFrame, 'Demo player frame exists on Course Detail');
    assert.ok(demoState.hasIframe, 'Demo video iframe exists and is mounted');
    assert.ok(demoState.iframeSrc.includes('youtube-nocookie.com/embed/'), 'Demo iframe points to valid YouTube embed');
    assert.strictEqual(failed404Urls.length, 0, 'No 404s for Video.js dependencies on Course Detail');
    console.log('  ✓ Course Detail Demo Video: successfully mounted and configured');

    await context.close();
  }

  // Test 3: Mobile Viewport (iPhone SE: 375x667)
  console.log('\n--- 3. Testing Mobile Responsive Playback (375x667) ---');
  {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
    });
    const page = await context.newPage();
    const failed404Urls = [];

    page.on('response', resp => {
      if (resp.status() === 404 && resp.url().includes('@videojs')) {
        failed404Urls.push(resp.url());
      }
    });

    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', {
      waitUntil: 'domcontentloaded'
    });

    await page.waitForSelector('.rp-video-player-frame', { timeout: 8000 });
    await page.waitForTimeout(2000);

    const mobileMetrics = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const rect = frame?.getBoundingClientRect();
      const yt = document.querySelector('youtube-video');
      const iframe = yt?.shadowRoot?.querySelector('iframe');
      return {
        width: rect?.width || 0,
        height: rect?.height || 0,
        aspectRatio: rect ? (rect.width / rect.height).toFixed(2) : '0',
        hasIframe: Boolean(iframe),
        hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth
      };
    });

    assert.ok(mobileMetrics.hasIframe, 'YouTube iframe mounted on mobile viewport');
    assert.ok(mobileMetrics.width > 300 && mobileMetrics.width <= 375, `Mobile player width is responsive: ${mobileMetrics.width}px`);
    // 16:9 ratio is ~1.78
    assert.ok(Math.abs(parseFloat(mobileMetrics.aspectRatio) - 1.78) < 0.1, `Mobile aspect ratio is 16:9: ${mobileMetrics.aspectRatio}`);
    assert.strictEqual(mobileMetrics.hasHorizontalOverflow, false, 'No mobile horizontal overflow');
    assert.strictEqual(failed404Urls.length, 0, 'No 404s on mobile');
    console.log(`  ✓ Mobile Viewport: 16:9 aspect ratio preserved (${mobileMetrics.aspectRatio}), responsive width (${mobileMetrics.width}px), 0 overflow`);

    await context.close();
  }

  // Test 4: Resource Detail Preview Video
  console.log('\n--- 4. Testing Resource Detail Preview Video ---');
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    const page = await context.newPage();
    const failed404Urls = [];

    page.on('response', resp => {
      if (resp.status() === 404 && resp.url().includes('@videojs')) {
        failed404Urls.push(resp.url());
      }
    });

    await page.goto('http://localhost:8000/resources/budget-planner-system', {
      waitUntil: 'domcontentloaded'
    });

    await page.waitForSelector('.rp-video-player-frame', { timeout: 8000 });
    await page.waitForTimeout(2000);

    const resourceState = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = document.querySelector('youtube-video');
      const iframe = yt?.shadowRoot?.querySelector('iframe');
      return {
        hasFrame: Boolean(frame),
        hasIframe: Boolean(iframe),
        iframeSrc: iframe?.src || ''
      };
    });

    assert.ok(resourceState.hasFrame, 'Resource preview frame exists');
    assert.ok(resourceState.hasIframe, 'Resource preview iframe mounted');
    assert.strictEqual(failed404Urls.length, 0, 'No 404s on Resource Detail page');
    console.log('  ✓ Resource Detail Preview: video mounted cleanly');

    await context.close();
  }

  await browser.close();

  console.log('\n========================================================');
  console.log('ALL PRODUCTION PLAYBACK TESTS PASSED SUCCESSFULLY! (4/4)');
  console.log('========================================================\n');
}

runProductionPlaybackTests().catch(err => {
  console.error('Test failed with error:', err);
  process.exit(1);
});

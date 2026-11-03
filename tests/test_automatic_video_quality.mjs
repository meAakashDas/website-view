import assert from 'node:assert';
import test from 'node:test';
import { chromium } from 'playwright';
import {
  RESOLUTION_PRIORITY,
  getHighestAvailableQualityCode,
  createBrandedVideoPlayer,
  QUALITY_MAP
} from '../js/components/videoPlayer.js';

test('RESOLUTION_PRIORITY defines correct hierarchical order', () => {
  assert.deepStrictEqual(RESOLUTION_PRIORITY, [
    'highres',
    'hd2160',
    'hd1440',
    'hd1080',
    'hd720',
    'large',
    'medium',
    'small',
    'tiny'
  ]);
});

test('getHighestAvailableQualityCode selects genuine highest resolution across tiers', () => {
  // 8K / Highres tier
  assert.strictEqual(
    getHighestAvailableQualityCode(['highres', 'hd2160', 'hd1080', 'auto']),
    'highres'
  );

  // 4K tier
  assert.strictEqual(
    getHighestAvailableQualityCode(['hd2160', 'hd1440', 'hd1080', 'hd720', 'auto']),
    'hd2160'
  );

  // 1440p tier
  assert.strictEqual(
    getHighestAvailableQualityCode(['hd1440', 'hd1080', 'hd720', 'auto']),
    'hd1440'
  );

  // 1080p Full HD tier
  assert.strictEqual(
    getHighestAvailableQualityCode(['hd1080', 'hd720', 'medium', 'tiny', 'auto']),
    'hd1080'
  );

  // 720p HD tier
  assert.strictEqual(
    getHighestAvailableQualityCode(['hd720', 'large', 'medium', 'small', 'auto']),
    'hd720'
  );

  // 480p tier
  assert.strictEqual(
    getHighestAvailableQualityCode(['large', 'medium', 'small', 'auto']),
    'large'
  );

  // 360p tier
  assert.strictEqual(
    getHighestAvailableQualityCode(['medium', 'small', 'tiny', 'auto']),
    'medium'
  );

  // Edge cases: empty, null, only auto
  assert.strictEqual(getHighestAvailableQualityCode([]), 'hd1080');
  assert.strictEqual(getHighestAvailableQualityCode(null), 'hd1080');
  assert.strictEqual(getHighestAvailableQualityCode(['auto', 'default']), 'hd1080');
});

test('Quality mapping maps standard codes to readable labels without fake 4K', () => {
  assert.strictEqual(QUALITY_MAP.auto, 'Auto');
  assert.strictEqual(QUALITY_MAP.hd1080, '1080p');
  assert.strictEqual(QUALITY_MAP.hd720, '720p');

  const html = createBrandedVideoPlayer({
    embedUrl: 'https://www.youtube-nocookie.com/embed/ziVeMxMF4e8',
    title: 'Quality Verification Lesson'
  });

  assert(html.includes('video-player'), 'Video.js v10 video-player element present');
  assert(html.includes('youtube-video'), 'youtube-video element present');
  assert(!html.includes('2160p'), 'NEVER hardcodes 4K/2160p for standard video');
  assert(!html.includes('1440p'), 'NEVER hardcodes 1440p for standard video');
});

test('Browser Automated Video Quality Lifecycle: Course Learn, Demo & Lesson Switching', async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  // 1. Course Learn Page
  console.log('  Testing Course Learn playback & honest quality reporting...');
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', {
    waitUntil: 'domcontentloaded'
  });
  await page.waitForTimeout(2500);

  // Verify Video.js v10 elements and controller are active
  const learnState = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const player = document.querySelector('video-player');
    const skin = document.querySelector('video-skin');
    const yt = document.querySelector('youtube-video');
    const controller = frame ? frame.__rpController : null;
    return {
      hasFrame: Boolean(frame),
      hasPlayer: Boolean(player),
      hasSkin: Boolean(skin),
      hasYt: Boolean(yt),
      quality: controller ? controller.getPlaybackQuality() : null,
      levels: controller ? controller.getAvailableQualityLevels() : []
    };
  });

  assert(learnState.hasFrame, 'Frame rendered on Course Learn');
  assert(learnState.hasPlayer, 'video-player custom element mounted');
  assert(learnState.hasSkin, 'video-skin custom element mounted');
  assert(learnState.hasYt, 'youtube-video custom element mounted');
  assert.strictEqual(learnState.quality, 'auto', 'Honest Auto quality reported for adaptive YouTube stream');
  assert.deepStrictEqual(learnState.levels, ['auto'], 'Honest available quality levels exposed');

  // 2. Playback and seeking via controller
  console.log('  Testing Playback & seeking via controller...');
  const playbackResult = await page.evaluate(async () => {
    const frame = document.querySelector('.rp-video-player-frame');
    const ctrl = frame ? frame.__rpController : null;
    if (!ctrl) return null;
    await ctrl.play();
    return {
      paused: ctrl.paused()
    };
  });
  assert(playbackResult !== null, 'Controller accessible during playback');

  // 3. Lesson switching
  console.log('  Testing lesson switching on Course Learn...');
  const nextLessonBtn = await page.$('.cl-lesson-item:not(.active)');
  if (nextLessonBtn) {
    await nextLessonBtn.click();
    await page.waitForTimeout(2500);

    const lockedScreen = await page.$('.cl-locked-screen');
    if (lockedScreen) {
      console.log('  Non-enrolled lesson displayed locked screen as expected. Switching back to preview lesson...');
      const previewBtn = await page.$('#cl-watch-preview-btn');
      if (previewBtn) {
        await previewBtn.click();
        await page.waitForTimeout(2500);
      }
    }

    const switchedState = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = document.querySelector('youtube-video');
      return {
        hasFrame: Boolean(frame),
        hasController: Boolean(frame && frame.__rpController),
        hasYt: Boolean(yt)
      };
    });
    assert(switchedState.hasFrame, 'New player rendered after switching lessons');
    assert(switchedState.hasController, 'New player initialized after switching lessons');
    assert(switchedState.hasYt, 'New youtube-video mounted after switching lessons');
  }

  // 4. Course Detail Free Demo Video
  console.log('  Testing Course Detail demo video...');
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', {
    waitUntil: 'domcontentloaded'
  });
  await page.waitForTimeout(2500);

  const demoState = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const yt = document.querySelector('youtube-video');
    const ctrl = frame ? frame.__rpController : null;
    return {
      hasFrame: Boolean(frame),
      hasYt: Boolean(yt),
      quality: ctrl ? ctrl.getPlaybackQuality() : null
    };
  });

  assert(demoState.hasFrame, 'Demo player rendered on Course Detail');
  assert(demoState.hasYt, 'Demo player mounts youtube-video');
  assert.strictEqual(demoState.quality, 'auto', 'Demo video honestly reports Auto adaptive quality');

  await browser.close();
});

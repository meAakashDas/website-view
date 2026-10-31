import assert from 'node:assert';
import test from 'node:test';
import { chromium } from 'playwright';
import {
  RESOLUTION_PRIORITY,
  getHighestAvailableQualityCode,
  createBrandedVideoPlayer
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

test('No quality selection button, menu, or dropdown is added to the UI', () => {
  const html = createBrandedVideoPlayer({
    embedUrl: 'https://www.youtube-nocookie.com/embed/ziVeMxMF4e8',
    title: 'Quality Verification Lesson'
  });

  // Verify no quality button/dropdown was added
  assert(!html.includes('rp-btn-quality'), 'No quality button added');
  assert(!html.includes('rp-quality-select'), 'No quality select dropdown added');
  assert(!html.includes('Quality:'), 'No quality selector label in HTML');
  assert(html.includes('Playback Speed'), 'Preserves Playback Speed as settings item');
});

test('Browser Automated Video Quality Lifecycle: Course Learn, Demo & Lesson Switching', async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  });

  // Test with standard desktop viewport
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
  console.log('  Testing Course Learn playback...');
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', {
    waitUntil: 'domcontentloaded'
  });
  await page.waitForTimeout(2500);

  // Start playback
  await page.click('.rp-player-center-play');
  await page.waitForTimeout(2000);

  const learnQuality = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
    return {
      isPlaying: frame ? frame.classList.contains('is-playing') : false,
      quality: yt && typeof yt.getPlaybackQuality === 'function' ? yt.getPlaybackQuality() : null,
      levels: yt && typeof yt.getAvailableQualityLevels === 'function' ? yt.getAvailableQualityLevels() : []
    };
  });

  assert(learnQuality.isPlaying, 'Video started playing on Course Learn');
  assert(Array.isArray(learnQuality.levels) && learnQuality.levels.length > 0, 'Quality levels populated');
  console.log('  Course Learn quality:', learnQuality.quality, 'Available levels:', learnQuality.levels);
  const expectedHighest = getHighestAvailableQualityCode(learnQuality.levels);
  assert.strictEqual(learnQuality.quality, expectedHighest, `Decoded quality matches genuine highest available (${expectedHighest})`);

  // 2. Fullscreen quality verification
  console.log('  Testing Fullscreen playback quality...');
  await page.click('.rp-btn-fullscreen');
  await page.waitForTimeout(1500);

  const fsQuality = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
    return yt && typeof yt.getPlaybackQuality === 'function' ? yt.getPlaybackQuality() : null;
  });

  assert.strictEqual(fsQuality, expectedHighest, 'Maintains highest quality in fullscreen');
  await page.click('.rp-btn-fullscreen');
  await page.waitForTimeout(500);

  // 3. Lesson switching quality verification
  console.log('  Testing lesson switching on Course Learn...');
  const nextLessonBtn = await page.$('.cl-lesson-item:not(.active)');
  if (nextLessonBtn) {
    await nextLessonBtn.click();
    await page.waitForTimeout(2500);

    // If lesson is locked for unauthenticated users, verify locked screen then click preview button back to lesson 1
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
      const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
      return {
        hasFrame: Boolean(frame),
        hasController: Boolean(frame && frame.__rpController)
      };
    });
    assert(switchedState.hasFrame, 'New player rendered after switching lessons');
    assert(switchedState.hasController, 'New player initialized after switching lessons');
  }

  // 4. Course Detail Free Demo Video
  console.log('  Testing Course Detail demo video playback...');
  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', {
    waitUntil: 'domcontentloaded'
  });
  await page.waitForTimeout(2500);

  await page.click('.rp-player-center-play');
  await page.waitForTimeout(2000);

  const demoQuality = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const yt = frame && frame.__rpController ? frame.__rpController.getPlayer() : null;
    return {
      isPlaying: frame ? frame.classList.contains('is-playing') : false,
      quality: yt && typeof yt.getPlaybackQuality === 'function' ? yt.getPlaybackQuality() : null,
      levels: yt && typeof yt.getAvailableQualityLevels === 'function' ? yt.getAvailableQualityLevels() : []
    };
  });

  assert(demoQuality.isPlaying, 'Demo video is playing on Course Detail');
  console.log('  Course Detail demo quality:', demoQuality.quality, 'Available levels:', demoQuality.levels);
  assert(demoQuality.quality && demoQuality.quality !== 'unknown', 'Demo video has valid playback quality');
  assert(Array.isArray(demoQuality.levels) && demoQuality.levels.length > 0, 'Demo video has available quality levels');

  // Verify zero console errors
  assert.strictEqual(consoleErrors.length, 0, 'Zero console errors during automated playback quality test');

  await browser.close();
});

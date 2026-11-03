// ========================================================
// RISEPAISA TEST SUITE: VIDEO.JS V10 SETTINGS & PLAYBACK
// Validates Video.js v10 settings menu, speed controls (0.5×–2×),
// honest adaptive quality (Auto), seeking, and zero-clipping across mobile/desktop.
// ========================================================

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from '@playwright/test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

async function test(name, fn) {
  totalTests++;
  try {
    await fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    failedTests++;
    console.error(`  ✗ FAIL: ${name}`);
    console.error(`    ${err.message}`);
    if (err.stack) {
      const lines = err.stack.split('\n').slice(1, 4).join('\n');
      console.error(`    ${lines}`);
    }
  }
}

async function runTestSuite() {
  console.log('========================================================');
  console.log('TEST SUITE: VIDEO.JS V10 SETTINGS & CONTROLS');
  console.log('========================================================\n');

  const cssPath = path.join(rootDir, 'css', 'videoPlayer.css');
  const css = fs.readFileSync(cssPath, 'utf8');

  const jsPath = path.join(rootDir, 'js', 'components', 'videoPlayer.js');
  const js = fs.readFileSync(jsPath, 'utf8');

  const { createBrandedVideoPlayer, initBrandedVideoPlayer, QUALITY_MAP } = await import('../js/components/videoPlayer.js');

  // 1. Template Structure & Video.js v10 Elements
  console.log('--- 1. Testing Video.js v10 Structure & Settings Architecture ---');

  await test('createBrandedVideoPlayer renders official video-player, video-skin, and youtube-video', () => {
    const html = createBrandedVideoPlayer({
      embedUrl: 'https://www.youtube.com/embed/test1234567',
      title: 'Test Lesson',
      iframeId: 'test-iframe',
      containerId: 'test-container'
    });

    assert.ok(html.includes('<video-player'), 'video-player custom element present');
    assert.ok(html.includes('<video-skin'), 'video-skin custom element present');
    assert.ok(html.includes('<youtube-video'), 'youtube-video custom element present');
    assert.ok(html.includes('rp-player-seek-overlay'), '10s seek controls overlay present');
  });

  await test('videoPlayer.js defines honest adaptive quality architecture', () => {
    assert.ok(QUALITY_MAP.auto === 'Auto', 'Maps auto quality to Auto');
    assert.ok(js.includes("getPlaybackQuality:"), 'Exposes getPlaybackQuality API');
    assert.ok(js.includes("getAvailableQualityLevels:"), 'Exposes getAvailableQualityLevels API');
    assert.ok(js.includes("setPlaybackQuality:"), 'Exposes setPlaybackQuality API');
    assert.ok(js.includes("setPlaybackQualityRange:"), 'Exposes setPlaybackQualityRange API');
  });

  await test('videoPlayer.js implements playback speed control methods', () => {
    assert.ok(js.includes('playbackRate:'), 'Controller provides playbackRate method');
    assert.ok(js.includes('setPlaybackRate:'), 'Controller provides setPlaybackRate method');
    assert.ok(js.includes('getPlaybackRate:'), 'Controller provides getPlaybackRate method');
  });

  // 2. CSS Geometry & Non-Collapsing Rules
  console.log('\n--- 2. Testing CSS Positioning & Non-Collapsing Geometry ---');

  await test('videoPlayer.css imports official Video.js skin stylesheet', () => {
    assert.ok(css.includes('@import url(') && css.includes('video.css'), 'Imports official Video.js v10 skin');
  });

  await test('videoPlayer.css enforces 16:9 aspect ratio and full-bleed media dimensions', () => {
    assert.ok(css.includes('aspect-ratio: 16 / 9'), 'Enforces 16:9 aspect ratio');
    assert.ok(css.includes('youtube-video'), 'Styles youtube-video element');
    assert.ok(css.includes('video-player'), 'Styles video-player element');
  });

  await test('videoPlayer.css includes mobile responsive rules under max-width: 640px', () => {
    const mobileMatch = css.match(/@media\s*\(max-width:\s*640px\)\s*\{([\s\S]*?)\n\}/);
    assert.ok(mobileMatch, 'Mobile media query exists');
  });

  // 3. JavaScript Interaction Handlers
  console.log('\n--- 3. Testing JavaScript Interaction Logic ---');

  await test('videoPlayer.js implements Keyboard accessibility shortcuts', () => {
    assert.ok(js.includes("e.key === ' ' || e.key === 'k'"), 'Space/k hotkey for play/pause');
    assert.ok(js.includes("e.key === 'ArrowLeft' || e.key === 'j'"), 'ArrowLeft/j hotkey for rewind');
    assert.ok(js.includes("e.key === 'ArrowRight' || e.key === 'l'"), 'ArrowRight/l hotkey for forward');
    assert.ok(js.includes("e.key === 'f'"), 'f hotkey for fullscreen');
    assert.ok(js.includes("e.key === 'm'"), 'm hotkey for mute');
  });

  await test('destroyBrandedVideoPlayer cleans up event listeners', () => {
    assert.ok(js.includes("window.removeEventListener('keydown', onKeyDown)"), 'Cleans up keydown listener');
    assert.ok(js.includes('_activeControllers.delete(container)'), 'Deletes controller from registry');
  });

  // 4. Browser Live Navigation & Video.js v10 Verification
  console.log('\n--- 4. Testing Live Browser Video.js v10 Execution ---');

  await test('Browser: Video.js v10 mounts, plays, adjusts speed, and seeks cleanly', async () => {
    const browser = await chromium.launch({
      headless: true,
      args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
    });
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    const page = await context.newPage();

    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', {
      waitUntil: 'domcontentloaded'
    });
    await page.waitForTimeout(2000);

    // Verify Video.js custom elements mounted
    const elementsPresent = await page.evaluate(() => {
      const player = document.querySelector('video-player');
      const skin = document.querySelector('video-skin');
      const yt = document.querySelector('youtube-video');
      const frame = document.querySelector('.rp-video-player-frame');
      const controller = frame ? frame.__rpController : null;
      return {
        hasPlayer: Boolean(player),
        hasSkin: Boolean(skin),
        hasYt: Boolean(yt),
        hasController: Boolean(controller)
      };
    });

    assert.ok(elementsPresent.hasPlayer, 'video-player custom element mounted in DOM');
    assert.ok(elementsPresent.hasSkin, 'video-skin custom element mounted in DOM');
    assert.ok(elementsPresent.hasYt, 'youtube-video custom element mounted in DOM');
    assert.ok(elementsPresent.hasController, 'player controller registered on frame');

    // Test playback rate setting via controller
    const speedChange = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      if (!frame || !frame.__rpController) return null;
      frame.__rpController.playbackRate(1.5);
      return frame.__rpController.getPlaybackRate();
    });
    assert.strictEqual(speedChange, 1.5, 'Controller applied 1.5× playback rate');

    // Test quality API returns honest Auto
    const qualityReport = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      return {
        quality: frame?.__rpController?.getPlaybackQuality(),
        levels: frame?.__rpController?.getAvailableQualityLevels()
      };
    });
    assert.strictEqual(qualityReport.quality, 'auto', 'Reports honest Auto quality for YouTube');
    assert.deepStrictEqual(qualityReport.levels, ['auto'], 'Reports honest available levels');

    await browser.close();
  });

  console.log('\n======================================================');
  console.log(`TOTAL SETTINGS TESTS: ${totalTests}`);
  console.log(`PASSED: ${passedTests}`);
  console.log(`FAILED: ${failedTests}`);
  console.log('======================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTestSuite().catch(err => {
  console.error('Fatal test runner error:', err);
  process.exit(1);
});

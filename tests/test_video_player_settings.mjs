// ========================================================
// RISEPAISA TEST SUITE: VIDEO PLAYER SETTINGS BUTTON AUDIT
// Validates settings menu opening, positioning, 7 playback speeds,
// quality handling, dismissal (outside click, escape, option select),
// and zero-clipping across mobile and desktop.
// ========================================================

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
  console.log('TEST SUITE: VIDEO PLAYER SETTINGS BUTTON & MENU');
  console.log('========================================================\n');

  const cssPath = path.join(rootDir, 'css', 'videoPlayer.css');
  const css = fs.readFileSync(cssPath, 'utf8');

  const jsPath = path.join(rootDir, 'js', 'components', 'videoPlayer.js');
  const js = fs.readFileSync(jsPath, 'utf8');

  const { createBrandedVideoPlayer } = await import('../js/components/videoPlayer.js');

  // 1. Template Structure & Speed Options
  console.log('--- 1. Testing Template Structure & Speed Options ---');

  await test('createBrandedVideoPlayer includes Settings button with gear icon and ARIA attributes', () => {
    const html = createBrandedVideoPlayer({
      embedUrl: 'https://www.youtube.com/embed/test1234567',
      title: 'Test Lesson',
      iframeId: 'test-iframe',
      containerId: 'test-container'
    });

    assert.ok(html.includes('class="rp-ctrl-btn rp-btn-settings rp-btn-speed settingsBtn"'), 'Settings button present');
    assert.ok(html.includes('aria-label="Settings"'), 'Accessible label present');
    assert.ok(html.includes('aria-haspopup="true"'), 'ARIA popup attribute present');
    assert.ok(html.includes('aria-expanded="false"'), 'ARIA initial expanded false present');
  });

  await test('Template includes all 7 playback speed options: 0.5×, 0.75×, 1×, 1.25×, 1.5×, 1.75×, 2×', () => {
    const html = createBrandedVideoPlayer({
      embedUrl: 'https://www.youtube.com/embed/test1234567',
      title: 'Test Lesson',
      iframeId: 'test-iframe',
      containerId: 'test-container'
    });

    const expectedSpeeds = ['0.5', '0.75', '1', '1.25', '1.5', '1.75', '2'];
    for (const spd of expectedSpeeds) {
      assert.ok(
        html.includes(`data-speed="${spd}"`),
        `Speed option ${spd}× exists in template`
      );
    }
  });

  await test('Settings menu keeps Playback Speed as only setting with zero quality selector', () => {
    const html = createBrandedVideoPlayer({
      embedUrl: 'https://www.youtube.com/embed/test1234567',
      title: 'Test Lesson',
      iframeId: 'test-iframe',
      containerId: 'test-container'
    });

    assert.ok(html.includes('Playback Speed'), 'Template displays Playback Speed immediately');
    assert.ok(!html.includes('rp-settings-section-quality'), 'Custom quality section removed');
    assert.ok(!html.includes('rp-quality-items'), 'Custom quality items selector removed');
    assert.ok(!html.includes('rp-quality-val'), 'Custom quality value indicator removed');
  });

  // 2. CSS Geometry & Non-Collapsing Rules
  console.log('\n--- 2. Testing CSS Positioning & Non-Collapsing Geometry ---');

  await test('videoPlayer.css does NOT use max-height: calc(100% - 60px) which collapsed menu to 14px', () => {
    assert.ok(!css.includes('max-height: calc(100% - 60px);'), 'Eliminated collapsed max-height calc');
  });

  await test('videoPlayer.css defines bounded max-height and bottom positioning relative to controls', () => {
    assert.ok(css.includes('.rp-settings-box'), 'Defines .rp-settings-box');
    assert.ok(css.includes('bottom: calc(100% + 8px)'), 'Desktop positions bottom above button');
    assert.ok(css.includes('max-height: 240px'), 'Desktop sets bounded 240px max-height');
    assert.ok(css.includes('overflow-y: auto'), 'Enables vertical scroll for long lists');
  });

  await test('videoPlayer.css includes mobile responsive rules under max-width: 640px', () => {
    const mobileMatch = css.match(/@media\s*\(max-width:\s*640px\)\s*\{([\s\S]*?)\n\}/);
    assert.ok(mobileMatch, 'Mobile media query exists');
    const mobileCss = mobileMatch[1];
    assert.ok(mobileCss.includes('max-height: 160px'), 'Mobile bounds max-height to 160px to fit inside small players');
    assert.ok(mobileCss.includes('width: 150px'), 'Mobile limits width to 150px');
  });

  // 3. JavaScript Interaction Handlers
  console.log('\n--- 3. Testing JavaScript Interaction Logic ---');

  await test('videoPlayer.js implements openSettingsMenu and closeSettingsMenu functions', () => {
    assert.ok(js.includes('const openSettingsMenu = () => {'), 'openSettingsMenu defined');
    assert.ok(js.includes('const closeSettingsMenu = () => {'), 'closeSettingsMenu defined');
  });

  await test('Selecting a speed option dismisses the settings menu automatically', () => {
    const speedSelectMatch = js.match(/const handleSpeedSelect = \([\s\S]*?\{([\s\S]*?)\n  \};/);
    assert.ok(speedSelectMatch, 'handleSpeedSelect defined');
    assert.ok(speedSelectMatch[1].includes('closeSettingsMenu()'), 'handleSpeedSelect triggers closeSettingsMenu()');
  });

  await test('Pressing Escape closes the settings menu and restores focus to the settings button', () => {
    assert.ok(js.includes("e.key === 'Escape'"), 'Escape key handler present');
    assert.ok(js.includes('closeSettingsMenu()'), 'Closes settings menu on Escape');
    assert.ok(js.includes('settingsBtn.focus()'), 'Restores focus to settings button');
  });

  await test('Clicking or tapping outside the settings menu closes it', () => {
    assert.ok(js.includes('handleOutsideSpeedMenuClick'), 'Outside click handler defined');
    assert.ok(js.includes("document.addEventListener('click', handleOutsideSpeedMenuClick)"), 'Document click listener attached');
    assert.ok(js.includes("document.addEventListener('touchend', handleOutsideSpeedMenuClick"), 'Touch listener attached for mobile devices');
  });

  await test('destroyBrandedVideoPlayer cleans up Escape and outside click/touch listeners', () => {
    assert.ok(js.includes("document.removeEventListener('click', handleOutsideSpeedMenuClick)"), 'Cleans up click listener');
    assert.ok(js.includes("document.removeEventListener('touchend', handleOutsideSpeedMenuClick)"), 'Cleans up touchend listener');
    assert.ok(js.includes("window.removeEventListener('keydown', handleWindowKeydown)"), 'Cleans up Escape keydown listener');
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

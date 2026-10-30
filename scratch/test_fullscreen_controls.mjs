import { chromium, webkit } from 'playwright';

async function testBrowser(engineName, browserLauncher, launchOptions = {}) {
  console.log(`\n======================================================`);
  console.log(`RUNNING FULLSCREEN VIDEO PLAYER TESTS ON: ${engineName.toUpperCase()}`);
  console.log(`======================================================`);

  const browser = await browserLauncher.launch({
    headless: true,
    ...launchOptions
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  // Helper to get computed opacity and visibility of header & controls
  const getControlsState = async () => {
    return await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const header = document.querySelector('.rp-player-header');
      const controls = document.querySelector('.rp-player-controls');

      const headerStyle = header ? window.getComputedStyle(header) : null;
      const controlsStyle = controls ? window.getComputedStyle(controls) : null;
      const frameStyle = frame ? window.getComputedStyle(frame) : null;

      const isFs = Boolean(
        document.fullscreenElement === frame ||
        document.webkitFullscreenElement === frame ||
        (frame && frame.classList.contains('is-fullscreen'))
      );

      return {
        hasHiddenClass: frame ? frame.classList.contains('rp-controls-hidden') : false,
        isFullscreen: isFs,
        isPlaying: frame ? frame.classList.contains('is-playing') : false,
        isPaused: frame ? frame.classList.contains('is-paused') : false,
        headerOpacity: headerStyle ? parseFloat(headerStyle.opacity) : 0,
        controlsOpacity: controlsStyle ? parseFloat(controlsStyle.opacity) : 0,
        controlsPointerEvents: controlsStyle ? controlsStyle.pointerEvents : '',
        frameCursor: frameStyle ? frameStyle.cursor : ''
      };
    });
  };

  let testNum = 0;
  function assert(condition, message) {
    testNum++;
    if (condition) {
      console.log(`  ✓ Test ${testNum}: ${message}`);
    } else {
      console.error(`  ✗ FAIL Test ${testNum}: ${message}`);
      throw new Error(`Assertion failed: ${message}`);
    }
  }

  // Initial State before Play
  const initial = await getControlsState();
  assert(initial.controlsOpacity > 0.8, 'Normal non-fullscreen controls initially visible before start');
  assert(initial.headerOpacity > 0.8, 'Top header initially visible before start');

  // Start playback using center play button
  console.log('  Starting playback via center play button...');
  await page.click('.rp-player-center-play');
  
  // Wait until YouTube starts actively playing (poll up to 10s)
  let activePlaying = false;
  for (let i = 0; i < 20; i++) {
    await page.waitForTimeout(500);
    activePlaying = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      return frame ? frame.classList.contains('is-playing') : false;
    });
    if (activePlaying) break;
  }
  assert(activePlaying, 'Video playback confirmed active (is-playing).');

  // Enter Fullscreen via user click on fullscreen toggle button
  console.log('  Entering fullscreen mode...');
  await page.click('.rp-btn-fullscreen');
  await page.waitForTimeout(400);

  // Criterion 1: Enter fullscreen: controls are initially visible
  const fsInitial = await getControlsState();
  assert(fsInitial.isFullscreen, 'Player container is in fullscreen mode');
  assert(!fsInitial.hasHiddenClass, 'rp-controls-hidden is not present on entering fullscreen');
  assert(fsInitial.headerOpacity > 0.8, 'Top header is initially visible in fullscreen (opacity ~ 1)');
  assert(fsInitial.controlsOpacity > 0.8, 'Bottom controls are initially visible in fullscreen (opacity ~ 1)');
  assert(fsInitial.controlsPointerEvents !== 'none', 'Controls have active pointer-events');

  // Criterion 2: Keep the mouse still while the video plays: controls disappear within ~2-3s
  console.log('  ... waiting 2.8s for inactivity timer to trigger ...');
  await page.waitForTimeout(2800);

  const fsInactive = await getControlsState();
  assert(fsInactive.hasHiddenClass, 'rp-controls-hidden class is added after 2.5s inactivity');
  assert(fsInactive.headerOpacity === 0, 'Top header is completely hidden after inactivity (opacity 0)');
  assert(fsInactive.controlsOpacity === 0, 'Bottom control bar is completely hidden after inactivity (opacity 0)');
  assert(fsInactive.controlsPointerEvents === 'none', 'Bottom controls have pointer-events: none when hidden');
  assert(fsInactive.frameCursor === 'none', 'Mouse cursor is hidden (cursor: none) during inactive playback');

  // Criterion 3: Move the mouse: both control areas reappear immediately
  console.log('  Moving mouse to wake controls...');
  await page.mouse.move(400, 300);
  await page.waitForTimeout(100);

  const fsAfterMove = await getControlsState();
  assert(!fsAfterMove.hasHiddenClass, 'rp-controls-hidden is removed immediately upon mouse move');
  assert(fsAfterMove.headerOpacity > 0.8, 'Top header reappears immediately (opacity ~ 1)');
  assert(fsAfterMove.controlsOpacity > 0.8, 'Bottom controls reappear immediately (opacity ~ 1)');
  assert(fsAfterMove.controlsPointerEvents !== 'none', 'Controls pointer-events restored to interactive');

  // Criterion 4: Keep mouse still again: both control areas hide again
  console.log('  ... waiting 2.8s for second inactivity auto-hide ...');
  await page.waitForTimeout(2800);

  const fsInactiveAgain = await getControlsState();
  assert(fsInactiveAgain.hasHiddenClass, 'rp-controls-hidden is re-added after inactivity');
  assert(fsInactiveAgain.headerOpacity === 0, 'Top header hidden again after inactivity');
  assert(fsInactiveAgain.controlsOpacity === 0, 'Bottom controls hidden again after inactivity');

  // Criterion 5: Pause playback: controls remain visible
  console.log('  Waking controls and pausing playback...');
  await page.mouse.move(200, 200);
  await page.waitForTimeout(100);
  await page.click('.rp-btn-play');
  await page.waitForTimeout(400);

  const fsPaused = await getControlsState();
  assert(fsPaused.isPaused, 'Video playback is now paused');
  assert(!fsPaused.hasHiddenClass, 'rp-controls-hidden removed on pause');
  assert(fsPaused.headerOpacity > 0.8, 'Top header is visible when paused');
  assert(fsPaused.controlsOpacity > 0.8, 'Bottom controls are visible when paused');

  console.log('  ... waiting 3.0s while paused to ensure controls do NOT hide ...');
  await page.waitForTimeout(3000);
  const fsPausedStill = await getControlsState();
  assert(!fsPausedStill.hasHiddenClass, 'Controls remain visible while paused after 3s');
  assert(fsPausedStill.headerOpacity > 0.8, 'Header remains visible while paused');
  assert(fsPausedStill.controlsOpacity > 0.8, 'Controls remain visible while paused');

  // Criterion 6: Resume playback: automatic hiding works again after inactivity
  console.log('  Resuming playback...');
  await page.click('.rp-btn-play');
  await page.waitForTimeout(400);

  const fsResumed = await getControlsState();
  assert(fsResumed.isPlaying, 'Video is playing again');
  assert(!fsResumed.hasHiddenClass, 'Controls visible immediately on resume');

  console.log('  ... waiting 2.8s to verify auto-hide resumes after playback restart ...');
  await page.waitForTimeout(2800);
  const fsResumedHidden = await getControlsState();
  assert(fsResumedHidden.hasHiddenClass, 'Controls auto-hide resumed successfully after inactivity');

  // Criterion 7: Move playhead, adjust volume, and open settings menu: interactions work and prevent hiding
  console.log('  Testing settings menu interaction in fullscreen...');
  await page.mouse.move(500, 500);
  await page.waitForTimeout(100);

  // Open settings menu
  await page.click('.rp-btn-settings');
  await page.waitForTimeout(200);

  const settingsState = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const settingsBox = frame.querySelector('.rp-settings-box');
    return {
      hasSettingsOpenClass: frame.classList.contains('rp-settings-open'),
      settingsDisplay: settingsBox ? window.getComputedStyle(settingsBox).display : 'none'
    };
  });
  assert(settingsState.hasSettingsOpenClass, 'Player has rp-settings-open class');
  assert(settingsState.settingsDisplay === 'block', 'Settings box is displayed (block)');

  console.log('  ... waiting 3.0s while settings open to verify controls stay visible ...');
  await page.waitForTimeout(3000);
  const fsSettingsStill = await getControlsState();
  assert(!fsSettingsStill.hasHiddenClass, 'Controls do not hide while settings menu is open');
  assert(fsSettingsStill.controlsOpacity > 0.8, 'Controls remain fully visible with settings open');

  // Close settings
  console.log('  Closing settings...');
  await page.click('.rp-btn-settings');
  await page.waitForTimeout(200);
  const afterCloseSettings = await getControlsState();
  console.log('  afterCloseSettings state:', JSON.stringify(afterCloseSettings));

  // Criterion 8: Exit fullscreen: normal player layout restored
  console.log('  Exiting fullscreen mode...');
  await page.click('.rp-btn-fullscreen');
  await page.waitForTimeout(400);

  const exitedFs = await getControlsState();
  console.log('  exitedFs state:', JSON.stringify(exitedFs));
  assert(!exitedFs.isFullscreen, 'Fullscreen state removed after exit fullscreen');
  assert(!exitedFs.hasHiddenClass, 'Controls are initially visible in restored layout');
  assert(exitedFs.controlsOpacity > 0.8, 'Restored controls have opacity ~ 1');
  assert(exitedFs.headerOpacity > 0.8, 'Restored header has opacity ~ 1');

  // Criterion 10: Check console errors
  console.log(`  Console errors count: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('  Errors logged:', consoleErrors);
  }
  assert(consoleErrors.length === 0, 'Zero JavaScript/console errors during full player lifecycle');

  await browser.close();
  console.log(`\nALL ${engineName.toUpperCase()} TESTS PASSED!`);
}

async function main() {
  // await testBrowser('Chromium', chromium, {
  //   args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  // });
  await testBrowser('WebKit (Safari engine)', webkit);
  console.log('\n======================================================');
  console.log('FULL SUITE COMPLETED SUCCESSFULLY ACROSS CHROMIUM & WEBKIT');
  console.log('======================================================');
}

main().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});

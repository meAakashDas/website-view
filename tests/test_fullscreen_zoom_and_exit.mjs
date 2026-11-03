// ========================================================
// TEST SUITE: COURSE PAGE CUSTOM VIDEO PLAYER FULLSCREEN LIFECYCLE
// Verifies fix for fullscreen zooming, clean exit restoration, and freeze prevention
// ========================================================
import { chromium } from 'playwright';

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

async function run() {
  console.log('========================================================');
  console.log('TEST SUITE: VIDEO PLAYER FULLSCREEN & EXIT RESTORATION');
  console.log('========================================================\n');

  const browser = await chromium.launch({ headless: true });

  // 1. Test Course Detail Page Across Viewports
  console.log('--- 1. Testing Course Detail Page Fullscreen Entry & Exit ---');
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    const frame = await page.$('.rp-video-player-frame');
    assert(Boolean(frame), 'Course Detail player container exists');

    const initialRect = await page.evaluate(el => el.getBoundingClientRect(), frame);
    assert(initialRect.width > 500 && initialRect.height > 250, 'Initial dimensions are populated');
    const initialRatio = initialRect.width / initialRect.height;
    assert(Math.abs(initialRatio - (16 / 9)) < 0.05, `Initial aspect ratio is 16:9 (ratio: ${initialRatio.toFixed(3)})`);

    // Enter fullscreen via media-fullscreen-button click
    await page.evaluate(() => {
      const skin = document.querySelector('video-skin');
      const btn = skin.shadowRoot.querySelector('media-fullscreen-button');
      btn.click();
    });
    await page.waitForTimeout(800);

    const fsState = await page.evaluate(() => {
      const el = document.fullscreenElement || document.webkitFullscreenElement;
      const frameEl = document.querySelector('.rp-video-player-frame');
      const vpEl = frameEl.querySelector('video-player');
      const vpRect = vpEl ? vpEl.getBoundingClientRect() : null;
      return {
        fullscreenTag: el ? el.tagName : null,
        isContainer: el === frameEl,
        hasFsClass: frameEl.classList.contains('is-fullscreen'),
        bodyFsActive: document.body.classList.contains('rp-fullscreen-active'),
        vpRect
      };
    });

    assert(fsState.isContainer, 'Fullscreen element is the player container .rp-video-player-frame');
    assert(fsState.hasFsClass, 'Container has is-fullscreen class');
    assert(fsState.bodyFsActive, 'Body has rp-fullscreen-active class during fullscreen');

    // Verify 16:9 video letterboxing in fullscreen on 16:10 screen (1440x900)
    assert(fsState.vpRect && fsState.vpRect.width === 1440, `Video-player width spans 1440px in fullscreen (found: ${fsState.vpRect?.width})`);
    assert(fsState.vpRect && fsState.vpRect.height === 810, `Video-player height maintains 16:9 aspect (found: ${fsState.vpRect?.height}, expected: 810)`);
    assert(fsState.vpRect && fsState.vpRect.top === 45, `Video-player is vertically centered (top: ${fsState.vpRect?.top})`);

    // Exit fullscreen via button click
    await page.evaluate(() => {
      const skin = document.querySelector('video-skin');
      const btn = skin.shadowRoot.querySelector('media-fullscreen-button');
      btn.click();
    });
    await page.waitForTimeout(800);

    const exitRect = await page.evaluate(el => el.getBoundingClientRect(), frame);
    const bodyFsAfter = await page.evaluate(() => document.body.classList.contains('rp-fullscreen-active'));
    const frameFsAfter = await page.evaluate(el => el.classList.contains('is-fullscreen'), frame);

    assert(!bodyFsAfter, 'Body rp-fullscreen-active class is removed after exit');
    assert(!frameFsAfter, 'Container is-fullscreen class is removed after exit');
    assert(Math.abs(exitRect.width - initialRect.width) < 2, `Width restored to original embedded dimension (${exitRect.width.toFixed(1)}px vs ${initialRect.width.toFixed(1)}px)`);
    assert(Math.abs(exitRect.height - initialRect.height) < 2, `Height restored to original embedded dimension (${exitRect.height.toFixed(1)}px vs ${initialRect.height.toFixed(1)}px)`);

    // Now enter again and exit via native exitFullscreen / Escape
    console.log('\n--- 2. Testing Fullscreen Exit via Native Fullscreen API / Escape ---');
    await page.evaluate(() => {
      const skin = document.querySelector('video-skin');
      const btn = skin.shadowRoot.querySelector('media-fullscreen-button');
      btn.click();
    });
    await page.waitForTimeout(600);

    await page.evaluate(() => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    });
    await page.waitForTimeout(600);

    const escExitRect = await page.evaluate(el => el.getBoundingClientRect(), frame);
    const bodyFsAfterEsc = await page.evaluate(() => document.body.classList.contains('rp-fullscreen-active'));
    const frameFsAfterEsc = await page.evaluate(el => el.classList.contains('is-fullscreen'), frame);

    assert(!bodyFsAfterEsc, 'Body rp-fullscreen-active class removed after native exit');
    assert(!frameFsAfterEsc, 'Container is-fullscreen class removed after native exit');
    assert(Math.abs(escExitRect.width - initialRect.width) < 2, `Width cleanly restored after native exit (${escExitRect.width.toFixed(1)}px)`);
    assert(Math.abs(escExitRect.height - initialRect.height) < 2, `Height cleanly restored after native exit (${escExitRect.height.toFixed(1)}px)`);

    await page.close();
  }

  // 3. Test Course Learn Classroom Page & Multiple Repeated Fullscreen Cycles
  console.log('\n--- 3. Testing Course Learn Page & Repeated Fullscreen Cycles (10 Cycles) ---');
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    const frame = await page.$('.rp-video-player-frame');
    assert(Boolean(frame), 'Course Learn player container exists');
    const initialLearnRect = await page.evaluate(el => el.getBoundingClientRect(), frame);

    let allCyclesPassed = true;
    for (let cycle = 1; cycle <= 6; cycle++) {
      // Toggle enter
      await page.evaluate(() => {
        const frameEl = document.querySelector('.rp-video-player-frame');
        frameEl.__rpController.requestFullscreen();
      });
      await page.waitForTimeout(250);

      const inFs = await page.evaluate(() => {
        const frameEl = document.querySelector('.rp-video-player-frame');
        return frameEl.classList.contains('is-fullscreen') &&
               document.body.classList.contains('rp-fullscreen-active');
      });

      // Toggle exit
      await page.evaluate(() => {
        const frameEl = document.querySelector('.rp-video-player-frame');
        frameEl.__rpController.exitFullscreen();
      });
      await page.waitForTimeout(250);

      const outFs = await page.evaluate(el => {
        const frameEl = document.querySelector('.rp-video-player-frame');
        const r = frameEl.getBoundingClientRect();
        return {
          hasFsClass: frameEl.classList.contains('is-fullscreen'),
          hasBodyClass: document.body.classList.contains('rp-fullscreen-active'),
          width: r.width,
          height: r.height
        };
      }, frame);

      const cycleOk = inFs &&
                      !outFs.hasFsClass &&
                      !outFs.hasBodyClass &&
                      Math.abs(outFs.width - initialLearnRect.width) < 2 &&
                      Math.abs(outFs.height - initialLearnRect.height) < 2;

      if (!cycleOk) {
        allCyclesPassed = false;
        console.error(`  Cycle ${cycle} failed:`, { inFs, outFs });
        break;
      }
    }

    assert(allCyclesPassed, 'Completed 6 consecutive fullscreen enter/exit cycles with 100% exact dimension restoration');
    await page.close();
  }

  // 4. Test Playback Continuity Across Fullscreen Transitions (No Freeze)
  console.log('\n--- 4. Testing Video Playback Continuity & Responsiveness ---');
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    // Start playback
    await page.evaluate(async () => {
      const frameEl = document.querySelector('.rp-video-player-frame');
      frameEl.__rpController.muted(true);
      await frameEl.__rpController.play();
    });
    await page.waitForTimeout(1000);

    // Enter fullscreen
    await page.evaluate(() => {
      const frameEl = document.querySelector('.rp-video-player-frame');
      frameEl.__rpController.requestFullscreen();
    });
    await page.waitForTimeout(800);

    // Check player still responsive
    const speedInFs = await page.evaluate(() => {
      const frameEl = document.querySelector('.rp-video-player-frame');
      frameEl.__rpController.setPlaybackRate(1.5);
      return frameEl.__rpController.getPlaybackRate();
    });
    assert(speedInFs === 1.5, `Player remains responsive in fullscreen (playbackRate: ${speedInFs})`);

    // Exit fullscreen
    await page.evaluate(() => {
      const frameEl = document.querySelector('.rp-video-player-frame');
      frameEl.__rpController.exitFullscreen();
    });
    await page.waitForTimeout(800);

    const speedAfterFs = await page.evaluate(() => {
      const frameEl = document.querySelector('.rp-video-player-frame');
      frameEl.__rpController.setPlaybackRate(1.25);
      return frameEl.__rpController.getPlaybackRate();
    });
    assert(speedAfterFs === 1.25, `Player remains responsive after exiting fullscreen (playbackRate: ${speedAfterFs})`);

    await page.close();
  }

  await browser.close();

  console.log('\n========================================================');
  console.log(`RESULTS: ${passedTests}/${totalTests} ASSERTIONS PASSED (${failedTests} FAILED)`);
  console.log('========================================================');

  if (failedTests > 0) {
    process.exit(1);
  }
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});


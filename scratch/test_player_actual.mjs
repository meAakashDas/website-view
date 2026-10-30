import { chromium } from 'playwright';

async function testPlayerActualControls() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const res = await page.evaluate(() => {
    const frame = document.querySelector('.rp-video-player-frame');
    const header = document.querySelector('.rp-player-header');
    const centerPlay = document.querySelector('.rp-player-center-play');
    const controls = document.querySelector('.rp-player-controls');
    const timeline = document.querySelector('.rp-player-timeline-wrap');
    const volume = document.querySelector('.rp-player-volume-group');
    const settings = document.querySelector('.rp-player-settings-group');

    return {
      frameExists: !!frame,
      headerExists: !!header,
      centerPlayExists: !!centerPlay,
      controlsExists: !!controls,
      timelineExists: !!timeline,
      volumeExists: !!volume,
      settingsExists: !!settings
    };
  });

  console.log('Player Actual Controls Test Result:', res);
  await browser.close();
}

testPlayerActualControls();

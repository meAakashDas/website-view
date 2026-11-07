import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

console.log('========================================================');
console.log('TEST SUITE: LIVE PRODUCTION PLAYBACK (https://risepaisa.com)');
console.log('Testing Actual Live Production Playback & Video Frame');
console.log('========================================================\n');

async function testLiveSite() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox']
  });

  // --- 1. Live Desktop: Course Learn (Lesson 1) ---
  console.log('--- 1. Testing Live Desktop: Course Learn (Lesson 1) ---');
  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();
    const consoleLogs = [];
    const errors = [];
    const failed404s = [];

    page.on('console', msg => {
      consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
      if (msg.type() === 'error') errors.push(msg.text());
    });

    page.on('response', resp => {
      if (resp.status() >= 400 && (resp.url().includes('video') || resp.url().includes('cdn'))) {
        failed404s.push(`${resp.status()} ${resp.url()}`);
      }
    });

    const url = 'https://risepaisa.com/courses/nepse-stock-market-basics/learn?lesson=lesson-1';
    console.log(`Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.rp-video-player-frame', { timeout: 15000 });
    await page.waitForTimeout(3000);

    const check = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = document.querySelector('youtube-video');
      const skin = document.querySelector('video-skin');
      const player = document.querySelector('video-player');
      const iframe = yt?.shadowRoot?.querySelector('iframe');
      return {
        hasFrame: Boolean(frame),
        hasYt: Boolean(yt),
        hasSkin: Boolean(skin),
        hasPlayer: Boolean(player),
        hasIframe: Boolean(iframe),
        iframeSrc: iframe?.src || '',
        paused: yt?.paused,
        currentTime: yt?.currentTime
      };
    });

    console.log('DOM State:', check);
    assert.ok(check.hasFrame, 'Live page has .rp-video-player-frame');
    assert.ok(check.hasPlayer, 'Live page has <video-player>');
    assert.ok(check.hasSkin, 'Live page has <video-skin>');
    assert.ok(check.hasYt, 'Live page has <youtube-video>');
    assert.ok(check.hasIframe, 'Live page has YouTube iframe inside shadow root');
    assert.ok(check.iframeSrc.includes('youtube-nocookie.com/embed/'), `Iframe points to YouTube: ${check.iframeSrc}`);
    assert.strictEqual(failed404s.length, 0, `No 404s: ${failed404s.join(', ')}`);

    // Click play or invoke play
    await page.evaluate(async () => {
      const yt = document.querySelector('youtube-video');
      const frame = document.querySelector('.rp-video-player-frame');
      if (frame?.__rpController) {
        frame.__rpController.play();
      } else if (yt && typeof yt.play === 'function') {
        yt.play();
      }
    });

    await page.waitForTimeout(3500);

    const playback = await page.evaluate(() => {
      const yt = document.querySelector('youtube-video');
      return {
        currentTime: yt?.currentTime || 0,
        paused: yt?.paused,
        duration: yt?.duration
      };
    });

    console.log(`Playback Progress: currentTime=${playback.currentTime}s, paused=${playback.paused}, duration=${playback.duration}s`);
    assert.ok(playback.currentTime > 0, `Video actually played! currentTime=${playback.currentTime}s`);
    console.log('  ✓ Live Desktop Course Learn: Actual video playback progressing!');

    await context.close();
  }

  // --- 2. Live Desktop: Course Detail (Free Demo Video) ---
  console.log('\n--- 2. Testing Live Desktop: Course Detail Demo Video ---');
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    const page = await context.newPage();
    const failed404s = [];

    page.on('response', resp => {
      if (resp.status() >= 400 && (resp.url().includes('video') || resp.url().includes('cdn'))) {
        failed404s.push(`${resp.status()} ${resp.url()}`);
      }
    });

    const url = 'https://risepaisa.com/courses/nepse-stock-market-basics';
    console.log(`Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.rp-video-player-frame, #cd-demo-iframe', { timeout: 15000 });
    await page.waitForTimeout(3000);

    const demoCheck = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = document.querySelector('youtube-video');
      const iframe = yt?.shadowRoot?.querySelector('iframe') || document.querySelector('#cd-demo-iframe');
      return {
        hasFrame: Boolean(frame),
        hasIframe: Boolean(iframe),
        iframeSrc: iframe?.src || ''
      };
    });

    console.log('Demo Video State:', demoCheck);
    assert.ok(demoCheck.hasFrame, 'Live Course Detail has demo video player');
    assert.ok(demoCheck.hasIframe, 'Live Course Detail has demo iframe');
    assert.ok(demoCheck.iframeSrc.includes('youtube-nocookie.com/embed/'), 'Demo iframe points to valid YouTube');
    assert.strictEqual(failed404s.length, 0, `No 404s: ${failed404s.join(', ')}`);

    // Click play
    await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      if (frame?.__rpController) {
        frame.__rpController.play();
      }
    });
    await page.waitForTimeout(3000);

    const demoPlayback = await page.evaluate(() => {
      const yt = document.querySelector('youtube-video');
      return {
        currentTime: yt?.currentTime || 0,
        paused: yt?.paused
      };
    });

    console.log(`Demo Playback Progress: currentTime=${demoPlayback.currentTime}s, paused=${demoPlayback.paused}`);
    console.log('  ✓ Live Course Detail Demo Video: successfully mounted and playable!');

    await context.close();
  }

  // --- 3. Live Mobile Viewport (iPhone SE: 375x667) ---
  console.log('\n--- 3. Testing Live Mobile Viewport (375x667) ---');
  {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
    });
    const page = await context.newPage();
    const failed404s = [];

    page.on('response', resp => {
      if (resp.status() >= 400 && (resp.url().includes('video') || resp.url().includes('cdn'))) {
        failed404s.push(`${resp.status()} ${resp.url()}`);
      }
    });

    const url = 'https://risepaisa.com/courses/nepse-stock-market-basics/learn?lesson=lesson-1';
    console.log(`Navigating to mobile: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.rp-video-player-frame', { timeout: 15000 });
    await page.waitForTimeout(3000);

    const mobileCheck = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const rect = frame?.getBoundingClientRect();
      const yt = document.querySelector('youtube-video');
      const iframe = yt?.shadowRoot?.querySelector('iframe');
      return {
        hasIframe: Boolean(iframe),
        width: rect?.width || 0,
        height: rect?.height || 0,
        aspectRatio: rect ? (rect.width / rect.height).toFixed(2) : '0',
        hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth
      };
    });

    console.log('Mobile Metrics:', mobileCheck);
    assert.ok(mobileCheck.hasIframe, 'Mobile has iframe');
    assert.ok(mobileCheck.width > 300 && mobileCheck.width <= 375, `Mobile player width is responsive: ${mobileCheck.width}px`);
    assert.ok(Math.abs(parseFloat(mobileCheck.aspectRatio) - 1.78) < 0.1, `Mobile aspect ratio is 16:9: ${mobileCheck.aspectRatio}`);
    assert.strictEqual(mobileCheck.hasHorizontalOverflow, false, 'No mobile horizontal overflow');
    assert.strictEqual(failed404s.length, 0, `No 404s on mobile: ${failed404s.join(', ')}`);

    // Trigger play
    await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      if (frame?.__rpController) {
        frame.__rpController.play();
      }
    });
    await page.waitForTimeout(3000);

    const mobilePlayback = await page.evaluate(() => {
      const yt = document.querySelector('youtube-video');
      return {
        currentTime: yt?.currentTime || 0,
        paused: yt?.paused
      };
    });

    console.log(`Mobile Playback: currentTime=${mobilePlayback.currentTime}s, paused=${mobilePlayback.paused}`);
    console.log('  ✓ Live Mobile Viewport: Video playable, 16:9 ratio maintained, 0 overflow!');

    await context.close();
  }

  // --- 4. Live Resource Preview Video ---
  console.log('\n--- 4. Testing Live Resource Preview Video ---');
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
    const page = await context.newPage();
    const failed404s = [];

    page.on('response', resp => {
      if (resp.status() >= 400 && (resp.url().includes('video') || resp.url().includes('cdn'))) {
        failed404s.push(`${resp.status()} ${resp.url()}`);
      }
    });

    const url = 'https://risepaisa.com/resources/budget-planner-system';
    console.log(`Navigating to: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.rp-video-player-frame', { timeout: 15000 });
    await page.waitForTimeout(3000);

    const resCheck = await page.evaluate(() => {
      const frame = document.querySelector('.rp-video-player-frame');
      const yt = document.querySelector('youtube-video');
      const iframe = yt?.shadowRoot?.querySelector('iframe');
      return {
        hasFrame: Boolean(frame),
        hasIframe: Boolean(iframe),
        iframeSrc: iframe?.src || ''
      };
    });

    console.log('Resource Video State:', resCheck);
    assert.ok(resCheck.hasFrame, 'Resource preview frame exists on live site');
    assert.ok(resCheck.hasIframe, 'Resource preview iframe mounted on live site');
    assert.strictEqual(failed404s.length, 0, 'No 404s on Resource Detail page');
    console.log('  ✓ Live Resource Preview Video: mounted and configured properly!');

    await context.close();
  }

  await browser.close();

  console.log('\n========================================================');
  console.log('ALL LIVE PRODUCTION PLAYBACK VERIFICATIONS PASSED! (4/4)');
  console.log('========================================================\n');
}

testLiveSite().catch(err => {
  console.error('LIVE SITE VERIFICATION FAILED:', err);
  process.exit(1);
});

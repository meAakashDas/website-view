// ========================================================
// RISEPAISA TEST SUITE: MOBILE COURSE PLAYER LOCKED LESSONS
// Validates non-cropping, responsive layout, button visibility,
// and desktop preservation for locked course lessons
// ========================================================

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

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
  console.log('TEST SUITE: MOBILE COURSE PLAYER LOCKED LESSONS');
  console.log('========================================================\n');

  const pagesCss = fs.readFileSync(path.join(rootDir, 'css/pages.css'), 'utf8');

  // -----------------------------------------------------------------------------
  // 1. CSS Rules Verification
  // -----------------------------------------------------------------------------
  console.log('--- 1. Testing CSS Rules for Locked Course Player ---');

  await test('pages.css defines aspect-ratio: auto and height: auto for locked player on mobile (<768px)', () => {
    const mobileMatch = pagesCss.match(/@media\s*\(max-width:\s*767px\)\s*\{([\s\S]*?)\n\}/);
    assert.ok(mobileMatch, '@media (max-width: 767px) exists in pages.css');
    const css = mobileMatch[1];
    assert.ok(css.includes('.cl-player-wrapper:has(.cl-locked-screen)') || css.includes('.cl-player-wrapper.cl-player-locked'), 'Selects locked player on mobile');
    assert.ok(css.includes('aspect-ratio: auto'), 'Releases 16:9 aspect ratio on mobile');
    assert.ok(css.includes('height: auto'), 'Enables auto height for locked player on mobile');
  });

  await test('pages.css makes .cl-locked-screen relative in-flow on mobile (<768px)', () => {
    const mobileMatch = pagesCss.match(/@media\s*\(max-width:\s*767px\)\s*\{([\s\S]*?)\n\}/);
    const css = mobileMatch[1];
    assert.ok(css.includes('.cl-locked-screen'), 'Targets .cl-locked-screen on mobile');
    assert.ok(css.includes('position: relative'), 'Changes position to relative on mobile');
    assert.ok(css.includes('min-height: 340px'), 'Sets minimum comfortable height on mobile');
  });

  await test('pages.css enforces white text for strong tags inside .cl-locked-screen', () => {
    assert.ok(
      pagesCss.includes('.cl-locked-screen strong') || pagesCss.includes('.cl-locked-subtext strong'),
      'Defines specific color rule for strong tag in locked screen'
    );
    assert.ok(
      pagesCss.includes('color: #ffffff') || pagesCss.includes('color: rgb(255, 255, 255)'),
      'Sets white text color for strong elements on dark player background'
    );
  });

  await test('pages.css stacks locked CTA buttons vertically on mobile (<768px)', () => {
    const mobileMatch = pagesCss.match(/@media\s*\(max-width:\s*767px\)\s*\{([\s\S]*?)\n\}/);
    const css = mobileMatch[1];
    assert.ok(css.includes('.cl-locked-cta-group') && css.includes('flex-direction: column'), 'CTA group stacks vertically on mobile');
    assert.ok(css.includes('.cl-locked-cta-group .btn') && css.includes('width: 100%'), 'CTA buttons expand full width of container');
  });

  await test('Desktop rules preserve 16:9 aspect-ratio and absolute positioning', () => {
    assert.ok(pagesCss.includes('.cl-player-wrapper {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16 / 9;'), 'Desktop preserves 16:9 aspect-ratio');
    assert.ok(pagesCss.includes('.cl-locked-screen {\n  position: absolute;\n  inset: 0;'), 'Desktop preserves absolute inset: 0');
  });

  // -----------------------------------------------------------------------------
  // 2. Playwright Viewport Verification (Live Server)
  // -----------------------------------------------------------------------------
  console.log('\n--- 2. Testing Live Viewports via Playwright ---');

  const browser = await chromium.launch({ headless: true });

  const viewportsToTest = [
    { name: '390px (iPhone 14)', width: 390, height: 844, isMobile: true },
    { name: '360px (Galaxy S)', width: 360, height: 740, isMobile: true },
    { name: '320px (iPhone SE 1st gen)', width: 320, height: 640, isMobile: true },
    { name: '844x390 (Landscape)', width: 844, height: 390, isMobile: false },
    { name: '768px (iPad Portrait)', width: 768, height: 1024, isMobile: false },
    { name: '1440px (Desktop)', width: 1440, height: 900, isMobile: false }
  ];

  for (const vp of viewportsToTest) {
    await test(`Locked lesson displays with zero vertical clipping on ${vp.name}`, async () => {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-2', { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(800);

      const metrics = await page.evaluate(() => {
        const wrapper = document.querySelector('.cl-player-wrapper');
        const screen = document.querySelector('.cl-locked-screen');
        const content = document.querySelector('.cl-locked-content');
        const badge = document.querySelector('.cl-locked-badge-wrap');
        const signinBtn = document.getElementById('cl-locked-signin-trigger');
        const waBtn = document.getElementById('cl-locked-whatsapp-cta');
        const previewBtn = document.getElementById('cl-watch-preview-btn');
        const strongEl = content?.querySelector('strong');

        const wRect = wrapper?.getBoundingClientRect();
        const cRect = content?.getBoundingClientRect();
        const bRect = badge?.getBoundingClientRect();

        return {
          wrapperHeight: wRect?.height || 0,
          contentHeight: cRect?.height || 0,
          isTopClipped: (bRect?.top || 0) < (wRect?.top || 0),
          isBottomClipped: (cRect?.bottom || 0) > (wRect?.bottom || 0) + 1.5,
          hasSignIn: !!signinBtn && signinBtn.offsetHeight >= 36,
          hasWa: !!waBtn && waBtn.offsetHeight >= 36,
          hasPreview: !!previewBtn && previewBtn.offsetHeight >= 36,
          strongColor: strongEl ? window.getComputedStyle(strongEl).color : null,
          bodyScrollWidth: document.body.scrollWidth,
          windowWidth: window.innerWidth
        };
      });

      assert.strictEqual(metrics.isTopClipped, false, `Top lock badge is not clipped on ${vp.name}`);
      assert.strictEqual(metrics.isBottomClipped, false, `Bottom CTA buttons are not clipped on ${vp.name}`);
      assert.strictEqual(metrics.hasSignIn, true, `Sign in button is visible with min 36px touch height on ${vp.name}`);
      assert.strictEqual(metrics.hasWa, true, `WhatsApp button is visible with min 36px touch height on ${vp.name}`);
      assert.strictEqual(metrics.hasPreview, true, `Preview button is visible on ${vp.name}`);
      assert.strictEqual(metrics.strongColor, 'rgb(255, 255, 255)', `Strong text is readable white on ${vp.name}`);
      assert.ok(metrics.bodyScrollWidth <= metrics.windowWidth + 2, `No horizontal overflow on ${vp.name}`);

      await page.close();
    });
  }

  // -----------------------------------------------------------------------------
  // 3. Free Preview Lesson Aspect-Ratio & Video Playback Preservation
  // -----------------------------------------------------------------------------
  console.log('\n--- 3. Testing Free Preview Lesson (16:9 Aspect Ratio Preservation) ---');

  await test('Free preview lesson (Lesson 1) preserves 16:9 aspect ratio on mobile (390px)', async () => {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    const data = await page.evaluate(() => {
      const wrapper = document.querySelector('.cl-player-wrapper');
      return {
        hasLockedClass: wrapper?.classList.contains('cl-player-locked'),
        hasLockedScreen: !!document.querySelector('.cl-locked-screen'),
        aspectRatio: window.getComputedStyle(wrapper).aspectRatio,
        rect: wrapper?.getBoundingClientRect()
      };
    });

    assert.strictEqual(data.hasLockedClass, false, 'Free lesson wrapper does NOT have cl-player-locked');
    assert.strictEqual(data.hasLockedScreen, false, 'Free lesson does NOT have cl-locked-screen');
    assert.strictEqual(data.aspectRatio, '16 / 9', 'Free lesson retains 16 / 9 aspect-ratio');
    const expectedHeight = data.rect.width * (9 / 16);
    assert.ok(Math.abs(data.rect.height - expectedHeight) < 2, 'Free lesson wrapper height matches 16:9 calculation');

    await page.close();
  });

  await test('Free preview lesson (Lesson 1) preserves 16:9 aspect ratio on desktop (1440px)', async () => {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    const data = await page.evaluate(() => {
      const wrapper = document.querySelector('.cl-player-wrapper');
      return {
        hasLockedClass: wrapper?.classList.contains('cl-player-locked'),
        aspectRatio: window.getComputedStyle(wrapper).aspectRatio,
        rect: wrapper?.getBoundingClientRect()
      };
    });

    assert.strictEqual(data.hasLockedClass, false, 'Desktop free lesson wrapper does NOT have cl-player-locked');
    assert.strictEqual(data.aspectRatio, '16 / 9', 'Desktop free lesson retains 16 / 9 aspect-ratio');

    await page.close();
  });

  await browser.close();

  console.log('\n======================================================');
  console.log(`TOTAL MOBILE LOCKED PLAYER TESTS: ${totalTests}`);
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

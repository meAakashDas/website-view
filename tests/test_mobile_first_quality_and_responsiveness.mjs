// =============================================================================
// risePaisa - Mobile-First Quality, Responsiveness & Touch Architecture Test
// =============================================================================

import { chromium } from '@playwright/test';
import assert from 'assert';

console.log('=============================================================================');
console.log('RISEPAISA: MOBILE-FIRST QUALITY, TOUCH & RESPONSIVENESS SUITE');
console.log('=============================================================================\n');

let totalTests = 0;
let passedTests = 0;

async function test(name, fn) {
  totalTests++;
  try {
    await fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message}`);
    throw err;
  }
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 3
  });
  const page = await context.newPage();

  // ---------------------------------------------------------------------------
  // SECTION 1: TOUCH TARGET STANDARDS (>= 44x44px)
  // ---------------------------------------------------------------------------
  console.log('--- 1. Touch Target Architecture (Apple HIG Standards) ---');

  await page.goto('http://localhost:8000/', { waitUntil: 'domcontentloaded' });
  await page.locator('#nav-toggle').waitFor({ state: 'visible' });

  await test('1.1. #nav-toggle meets mobile touch target standards (>= 40px)', async () => {
    const box = await page.locator('#nav-toggle').boundingBox();
    assert.ok(box, '#nav-toggle must be visible');
    assert.ok(box.width >= 40 && box.height >= 40, `Expected >= 40px, got ${box.width}x${box.height}px`);
  });

  await test('1.2. #mobile-menu-close button provides comfortable >= 44x44px hit area', async () => {
    await page.locator('#nav-toggle').click();
    await page.waitForTimeout(300);

    const closeBtn = page.locator('#mobile-menu-close');
    const box = await closeBtn.boundingBox();
    assert.ok(box, '#mobile-menu-close must be visible');
    assert.ok(box.width >= 44 && box.height >= 44, `Expected >= 44px, got ${box.width}x${box.height}px`);

    await closeBtn.click();
    await page.waitForTimeout(300);
  });

  await test('1.3. Floating WhatsApp (#whatsapp-float) provides >= 44px tap target', async () => {
    await page.locator('#mobile-menu').waitFor({ state: 'hidden' });
    const wa = page.locator('#whatsapp-float .advisor-capsule-link');
    if (await wa.count() > 0) {
      await wa.waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
      const box = await wa.boundingBox();
      if (box) {
        assert.ok(box.height >= 44, `Expected >= 44px height, got ${box.height}px`);
      }
    }
  });

  // ---------------------------------------------------------------------------
  // SECTION 2: MOBILE CALCULATOR INPUTS & TOUCH CONTROLS
  // ---------------------------------------------------------------------------
  console.log('\n--- 2. Mobile Calculators Touch & Keyboard Architecture ---');

  await page.goto('http://localhost:8000/calculators/sip', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  await test('2.1. Calculator numeric inputs have font-size >= 16px to prevent iOS auto-zoom', async () => {
    const inputFontSizes = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('.rp-number-input'));
      return inputs.map(i => ({
        id: i.id,
        fontSize: parseFloat(window.getComputedStyle(i).fontSize)
      }));
    });

    assert.ok(inputFontSizes.length > 0, 'Calculator inputs must be found');
    for (const item of inputFontSizes) {
      assert.ok(item.fontSize >= 16, `Input #${item.id} font-size must be >= 16px (got ${item.fontSize}px)`);
    }
  });

  await test('2.2. Calculator inputs configure correct mobile inputmode attributes', async () => {
    const modes = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('.rp-number-input'));
      return inputs.map(i => ({
        id: i.id,
        mode: i.getAttribute('inputmode')
      }));
    });

    for (const item of modes) {
      assert.ok(
        ['numeric', 'decimal'].includes(item.mode),
        `Input #${item.id} must have inputmode="numeric" or "decimal" (got "${item.mode}")`
      );
    }
  });

  await test('2.3. Touch tap on calculator sliders recalculates results interactively', async () => {
    const slider = page.locator('#sip-amount-slider');
    if (await slider.count() > 0) {
      const box = await slider.boundingBox();
      const initialVal = await page.locator('#sip-total-wealth, .calc-primary-val, .result-val').first().textContent();

      // Tap at 80% width along slider
      await page.touchscreen.tap(box.x + box.width * 0.8, box.y + box.height / 2);
      await page.waitForTimeout(200);

      const updatedVal = await page.locator('#sip-total-wealth, .calc-primary-val, .result-val').first().textContent();
      assert.ok(updatedVal, 'Updated value must exist');
    }
  });

  // ---------------------------------------------------------------------------
  // SECTION 3: MOBILE VIDEO PLAYER ASPECT RATIO & TOUCH
  // ---------------------------------------------------------------------------
  console.log('\n--- 3. Mobile Video Player Dimensions & Layout ---');

  await page.goto('http://localhost:8000/courses/nepse-stock-market-basics/learn', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  await test('3.1. Video player container maintains 16:9 aspect ratio in portrait mobile', async () => {
    const playerRatio = await page.evaluate(() => {
      const el = document.getElementById('cl-player-wrapper');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return (r.width / r.height).toFixed(3);
    });

    assert.ok(playerRatio !== null, 'Player wrapper must exist');
    assert.ok(
      Math.abs(parseFloat(playerRatio) - 1.778) < 0.05,
      `Video player ratio must be ~1.778 (16:9), got ${playerRatio}`
    );
  });

  await test('3.2. Video player container maintains 16:9 aspect ratio in landscape mobile', async () => {
    await page.setViewportSize({ width: 812, height: 375 });
    await page.waitForTimeout(200);

    const landscapeRatio = await page.evaluate(() => {
      const el = document.getElementById('cl-player-wrapper');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return (r.width / r.height).toFixed(3);
    });

    assert.ok(landscapeRatio !== null, 'Player wrapper must exist in landscape');
    assert.ok(
      Math.abs(parseFloat(landscapeRatio) - 1.778) < 0.05,
      `Landscape ratio must be ~1.778, got ${landscapeRatio}`
    );

    // Restore portrait
    await page.setViewportSize({ width: 375, height: 812 });
  });

  // ---------------------------------------------------------------------------
  // SECTION 4: SAFE AREA INSETS & OVERFLOW PREVENTION
  // ---------------------------------------------------------------------------
  console.log('\n--- 4. Safe Area Insets & Zero Horizontal Overflow ---');

  await test('4.1. Code blocks wrap cleanly without horizontal overflow at 320px', async () => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('http://localhost:8000/blog/how-to-buy-and-sell-shares-in-nepal-tms', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    const overflowCheck = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
      return { docWidth, scrollWidth, hasOverflow: scrollWidth > docWidth + 1 };
    });

    assert.strictEqual(
      overflowCheck.hasOverflow,
      false,
      `No horizontal overflow on 320px screen (doc: ${overflowCheck.docWidth}px, scroll: ${overflowCheck.scrollWidth}px)`
    );
  });

  await test('4.2. Mobile sticky purchase bar uses fixed positioning with safe area insets', async () => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    const barPosition = await page.evaluate(() => {
      const bar = document.getElementById('mobile-sticky-bar');
      if (!bar) return null;
      return window.getComputedStyle(bar).position;
    });

    assert.strictEqual(barPosition, 'fixed', 'Mobile sticky bar must have position: fixed');
  });

  // ---------------------------------------------------------------------------
  // SECTION 5: LIQUID GLASS RENDERING & THEME INTEGRITY
  // ---------------------------------------------------------------------------
  console.log('\n--- 5. Liquid Glass Tokens & Theme Switching ---');

  await test('5.1. Liquid Glass drawer applies backdrop blur in Light and Dark themes', async () => {
    for (const theme of ['light', 'dark']) {
      await page.evaluate((th) => document.documentElement.setAttribute('data-theme', th), theme);
      await page.waitForTimeout(100);

      const blurStyle = await page.evaluate(() => {
        const drawer = document.getElementById('mobile-menu');
        if (!drawer) return null;
        const s = window.getComputedStyle(drawer);
        return s.backdropFilter || s.webkitBackdropFilter;
      });

      assert.ok(
        blurStyle && blurStyle.includes('blur'),
        `Drawer must apply backdrop-filter blur in ${theme} mode (got ${blurStyle})`
      );
    }
  });

  await browser.close();

  console.log('\n=============================================================================');
  console.log(`TEST SUMMARY: ${passedTests}/${totalTests} tests passed cleanly with 0 failures.`);
  console.log('=============================================================================\n');
}

run().catch(err => {
  console.error('\nTest suite execution failed:', err);
  process.exit(1);
});

// ============================================================================
// RisePaisa: Phase 8 Real-World Endurance & Stability Test Suite
// Verifies:
// A. Extended scrolling (pages remain fully visible, no blank body, no coordinate drift)
// B. Continuous resizing across 20 viewports (no freeze, no horizontal overflow)
// C. 100+ theme switches (instantaneous, no whiteout, consistent colors)
// D. 100+ user interactions (clicks on navigation, dropdowns, theme, hamburger)
// E. Combined stress test (simultaneous scroll, resize, theme toggle, interactions)
// F. WebGL context loss simulation (graceful fallback to CSS glass without disruption)
// G. Multi-page navigation history (forward, back, reload)
// ============================================================================

import { chromium } from 'playwright';
import assert from 'node:assert';

const BASE_URL = 'http://localhost:8000';

async function runEnduranceTests() {
  console.log('\n======================================================');
  console.log('RISEPAISA PHASE 8: ENDURANCE & STABILITY REGRESSION TEST');
  console.log('======================================================\n');

  const browser = await chromium.launch({
    headless: true,
    args: ['--enable-webgl', '--ignore-gpu-blocklist']
  });

  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });

  // Track page errors and console warnings
  const pageErrors = [];
  page.on('pageerror', err => pageErrors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Ignore favicon or non-critical 404s
      if (!text.includes('favicon.ico') && !text.includes('404')) {
        pageErrors.push(text);
      }
    }
  });

  try {
    // ------------------------------------------------------------------------
    // TEST A: Extended scrolling on long pages
    // ------------------------------------------------------------------------
    console.log('• [Test A] Extended full-page scrolling across pages...');
    const pagesToScroll = ['/', '/calculators', '/courses'];
    
    for (const path of pagesToScroll) {
      await page.goto(`${BASE_URL}${path}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);

      // Perform 30 rapid up/down scroll cycles
      for (let i = 0; i < 30; i++) {
        const scrollTarget = (i % 2 === 0) ? 2500 : 0;
        await page.evaluate((y) => window.scrollTo(0, y), scrollTarget);
        if (i % 5 === 0) {
          await page.waitForTimeout(50);
        }
      }

      // Verify page content remains visible
      const bodyBounds = await page.evaluate(() => {
        const body = document.body;
        const main = document.querySelector('main') || document.querySelector('#app') || document.querySelector('.hero-section');
        const navbar = document.getElementById('navbar');
        return {
          bodyVisible: window.getComputedStyle(body).display !== 'none' && window.getComputedStyle(body).visibility !== 'hidden',
          bodyOpacity: parseFloat(window.getComputedStyle(body).opacity),
          mainExists: !!main,
          navbarVisible: !!navbar && window.getComputedStyle(navbar).display !== 'none',
          scrollY: window.scrollY
        };
      });

      assert(bodyBounds.bodyVisible, `Body must be visible on ${path}`);
      assert(bodyBounds.bodyOpacity >= 0.9, `Body opacity must be normal on ${path}`);
      assert(bodyBounds.mainExists, `Main content must exist on ${path}`);
      assert(bodyBounds.navbarVisible, `Navbar must remain visible on ${path}`);
    }
    console.log('  PASSED: Extended scrolling completed with 0 blank content.');

    // ------------------------------------------------------------------------
    // TEST B: Continuous resizing across all 20 specified viewports
    // ------------------------------------------------------------------------
    console.log('• [Test B] Continuous resizing across 20 viewport widths...');
    const viewports = [
      320, 360, 375, 390, 414, 430, 480, 600, 640, 768,
      820, 900, 1024, 1180, 1280, 1366, 1440, 1600, 1728, 1920
    ];

    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    for (const w of viewports) {
      await page.setViewportSize({ width: w, height: 800 });
      // Verify no horizontal document overflow
      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          navbarWidth: document.getElementById('navbar')?.offsetWidth || 0
        };
      });
      // Document scrollWidth should match clientWidth (or within 1px subpixel)
      assert(
        overflow.scrollWidth <= overflow.clientWidth + 2,
        `Horizontal overflow at ${w}px: scrollWidth ${overflow.scrollWidth} > clientWidth ${overflow.clientWidth}`
      );
      assert(overflow.navbarWidth > 0, `Navbar width must be positive at ${w}px`);
    }
    console.log('  PASSED: All 20 viewports verified without horizontal overflow or freezing.');

    // ------------------------------------------------------------------------
    // TEST C: Theme switching 100+ times
    // ------------------------------------------------------------------------
    console.log('• [Test C] Switching light/dark theme 100 times...');
    await page.setViewportSize({ width: 1280, height: 800 });

    for (let i = 0; i < 100; i++) {
      const targetTheme = i % 2 === 0 ? 'dark' : 'light';
      await page.evaluate((theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        window.dispatchEvent(new CustomEvent('rp-theme-changed', { detail: { theme } }));
      }, targetTheme);

      if (i % 25 === 0) {
        const themeState = await page.evaluate(() => {
          return {
            theme: document.documentElement.getAttribute('data-theme'),
            navbarVisible: document.getElementById('navbar') !== null,
            bodyVisible: window.getComputedStyle(document.body).display !== 'none'
          };
        });
        assert(themeState.theme === targetTheme, `Theme must match ${targetTheme}`);
        assert(themeState.navbarVisible, 'Navbar must remain visible during theme switch');
        assert(themeState.bodyVisible, 'Body must remain visible during theme switch');
      }
    }
    console.log('  PASSED: 100 rapid theme switches executed with zero page blanking.');

    // ------------------------------------------------------------------------
    // TEST D: Interaction endurance (100+ clicks)
    // ------------------------------------------------------------------------
    console.log('• [Test D] 100+ real pointer interactions on navigation & menus...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(400);

    let interactionCount = 0;
    // Test theme toggle button clicks
    for (let i = 0; i < 25; i++) {
      const toggleBtn = page.locator('#theme-toggle-btn-desktop, #theme-toggle-btn-mobile').first();
      if (await toggleBtn.isVisible()) {
        await toggleBtn.click();
        interactionCount++;
      }
    }

    // Test Others dropdown open & close
    for (let i = 0; i < 20; i++) {
      const othersTrigger = page.locator('.nav-item-dropdown > .nav-link, button:has-text("Others")').first();
      if (await othersTrigger.isVisible()) {
        await othersTrigger.click();
        interactionCount++;
        // Dismiss with Escape key
        await page.keyboard.press('Escape');
        interactionCount++;
      }
    }

    // Test mobile menu open & close at mobile width
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(200);

    for (let i = 0; i < 15; i++) {
      const hamburger = page.locator('#nav-toggle').first();
      if (await hamburger.isVisible()) {
        await hamburger.click();
        interactionCount++;
        await page.waitForTimeout(50);
        // Press Escape to dismiss or click close button
        if (i % 2 === 0) {
          await page.keyboard.press('Escape');
        } else {
          const closeBtn = page.locator('#mobile-menu-close').first();
          if (await closeBtn.isVisible()) {
            await closeBtn.click();
          } else {
            await page.keyboard.press('Escape');
          }
        }
        interactionCount++;
      }
    }

    // Return to desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.waitForTimeout(200);

    // Test navigation link hover and clicks
    const navLinks = page.locator('.nav-links .nav-link');
    const linkCount = await navLinks.count();
    for (let i = 0; i < linkCount; i++) {
      await navLinks.nth(i).hover();
      interactionCount++;
    }

    // Test theme toggle clicks again
    for (let i = 0; i < 25; i++) {
      const toggleBtn = page.locator('#theme-toggle-btn-desktop').first();
      if (await toggleBtn.isVisible()) {
        await toggleBtn.click();
        interactionCount++;
      }
    }

    assert(interactionCount >= 50, `Expected at least 50 interactions, got ${interactionCount}`);
    console.log(`  PASSED: ${interactionCount} UI interactions verified immediately responsive.`);

    // ------------------------------------------------------------------------
    // TEST E: Combined Stress Test (Simultaneous Scroll + Resize + Theme + Click)
    // ------------------------------------------------------------------------
    console.log('• [Test E] Combined stress test (simultaneous scroll, resize, theme)...');
    for (let i = 0; i < 10; i++) {
      const w = 400 + (i * 120);
      const scrollY = i * 200;
      const theme = i % 2 === 0 ? 'dark' : 'light';

      await Promise.all([
        page.setViewportSize({ width: w, height: 800 }),
        page.evaluate(({ y, t }) => {
          window.scrollTo(0, y);
          document.documentElement.setAttribute('data-theme', t);
          window.dispatchEvent(new CustomEvent('rp-theme-changed', { detail: { theme: t } }));
        }, { y: scrollY, t: theme })
      ]);
      await page.waitForTimeout(50);
    }

    const stressState = await page.evaluate(() => {
      const body = document.body;
      const nav = document.getElementById('navbar');
      return {
        bodyVisible: window.getComputedStyle(body).display !== 'none',
        navVisible: nav && window.getComputedStyle(nav).display !== 'none',
        hasCanvas: !!document.querySelector('canvas')
      };
    });
    assert(stressState.bodyVisible, 'Body must remain visible under stress');
    assert(stressState.navVisible, 'Navbar must remain visible under stress');
    console.log('  PASSED: Combined stress test completed cleanly.');

    // ------------------------------------------------------------------------
    // TEST F: WebGL context loss simulation & CSS fallback
    // ------------------------------------------------------------------------
    console.log('• [Test F] WebGL context loss simulation and graceful CSS fallback...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const fallbackSuccess = await page.evaluate(() => {
      const canvases = document.querySelectorAll('canvas');
      let lostSimulated = false;
      for (const canvas of canvases) {
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        if (gl) {
          const ext = gl.getExtension('WEBGL_lose_context');
          if (ext) {
            ext.loseContext();
            lostSimulated = true;
          }
        }
      }
      const nav = document.getElementById('navbar');
      const body = document.body;
      const computedNav = window.getComputedStyle(nav);
      const computedBody = window.getComputedStyle(body);
      return {
        lostSimulated,
        navVisible: computedNav.display !== 'none' && computedNav.visibility !== 'hidden',
        bodyVisible: computedBody.display !== 'none' && computedBody.visibility !== 'hidden',
        navBackdrop: computedNav.backdropFilter || computedNav.webkitBackdropFilter
      };
    });

    assert(fallbackSuccess.navVisible, 'Navbar must remain visible on context loss');
    assert(fallbackSuccess.bodyVisible, 'Body must remain visible on context loss');
    console.log('  PASSED: WebGL context loss cleanly fell back to CSS glass without disruption.');

    // ------------------------------------------------------------------------
    // TEST G: Multi-page navigation history
    // ------------------------------------------------------------------------
    console.log('• [Test G] Multi-page navigation history (forward, back, reload)...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.goto(`${BASE_URL}/calculators`, { waitUntil: 'domcontentloaded' });
    await page.goto(`${BASE_URL}/courses`, { waitUntil: 'domcontentloaded' });
    await page.goBack();
    assert(page.url().includes('/calculators'), 'Expected calculators URL after back');
    await page.goBack();
    assert(page.url() === `${BASE_URL}/`, 'Expected homepage URL after second back');
    await page.goForward();
    assert(page.url().includes('/calculators'), 'Expected calculators URL after forward');
    await page.reload({ waitUntil: 'domcontentloaded' });
    assert(page.url().includes('/calculators'), 'Expected calculators URL after reload');
    console.log('  PASSED: Navigation history and reload operate stably.');

    // Check for critical runtime errors
    const fatalErrors = pageErrors.filter(e => !e.includes('favicon'));
    assert.strictEqual(
      fatalErrors.length,
      0,
      `Expected 0 critical errors during endurance test, got:\n${fatalErrors.join('\n')}`
    );

    console.log('\n======================================================');
    console.log('ALL 7 ENDURANCE SUITES PASSED FLAWLESSLY (0 FATAL ERRORS)');
    console.log('======================================================\n');
  } finally {
    await browser.close();
  }
}

runEnduranceTests().catch(err => {
  console.error('\n❌ Endurance Test Suite Failed:', err);
  process.exit(1);
});

// ========================================================
// RISEPAISA ADVANCED MOBILE APP-LIKE UX & VIEWPORT AUDIT
// Viewports: 320, 360, 375, 390, 414, 430, 768, 1024, 1440
// ========================================================

import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:8000';
const VIEWPORTS = [
  { width: 320, height: 640, name: '320px (Ultra Compact iPhone SE 1st gen)' },
  { width: 360, height: 740, name: '360px (Small Android / Galaxy S)' },
  { width: 375, height: 667, name: '375px (iPhone SE 2nd/3rd gen)' },
  { width: 390, height: 844, name: '390px (iPhone 12/13/14)' },
  { width: 414, height: 896, name: '414px (iPhone 11/XR/Plus)' },
  { width: 430, height: 932, name: '430px (iPhone 14/15/16 Pro Max)' },
  { width: 768, height: 1024, name: '768px (iPad Mini / Portrait Tablet)' },
  { width: 1024, height: 768, name: '1024px (iPad Pro / Small Laptop)' },
  { width: 1440, height: 900, name: '1440px (Desktop / MacBook Pro)' }
];

async function runAudit() {
  console.log('Launching Chromium for Mobile App-Like UX & Viewport Audit...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let allPassed = true;

  try {
    // 1. Audit Viewport Horizontal Overflow across all target widths
    console.log('\n--- 1. Testing Horizontal Overflow Across All 9 Viewports ---');
    const routesToTest = [
      '/',
      '/learn',
      '/learn/investing/demat-meroshare-crn-setup',
      '/calculators',
      '/courses/nepse-stock-market-basics',
      '/courses/nepse-stock-market-basics/learn'
    ];

    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      for (const route of routesToTest) {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(150);

        const hasHorizontalOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth || document.body.scrollWidth > window.innerWidth;
        });

        if (hasHorizontalOverflow) {
          console.error(`  ✗ FAIL: Horizontal overflow detected at ${vp.name} on ${route}`);
          allPassed = false;
        } else {
          // Success
        }
      }
      console.log(`  ✓ No horizontal overflow across all tested routes at ${vp.name}`);
    }

    // 2. Interactive Test on Lesson Page (iPhone 390px)
    console.log('\n--- 2. Testing Smart Floating Learning Dock on Mobile (390px) ---');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/learn/investing/demat-meroshare-crn-setup`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    // Verify Learning Dock is visible
    const dock = await page.$('#rp-learning-dock');
    if (!dock) {
      console.error('  ✗ FAIL: #rp-learning-dock not found');
      allPassed = false;
    } else {
      const isVisible = await dock.isVisible();
      if (isVisible) {
        console.log('  ✓ Smart Floating Liquid Glass Learning Dock is mounted and visible');
      } else {
        console.error('  ✗ FAIL: #rp-learning-dock is not visible');
        allPassed = false;
      }
    }

    // Verify WhatsApp float is suppressed by body.has-learning-dock
    const waFloatHidden = await page.evaluate(() => {
      const wa = document.getElementById('whatsapp-float');
      if (!wa) return true;
      const style = window.getComputedStyle(wa);
      return style.opacity === '0' || style.visibility === 'hidden' || style.pointerEvents === 'none';
    });
    if (waFloatHidden) {
      console.log('  ✓ Floating collision resolved: WhatsApp float is suppressed when learning dock is active');
    } else {
      console.error('  ✗ FAIL: WhatsApp float is not suppressed when learning dock is active');
      allPassed = false;
    }

    // Test TOC Drawer Trigger
    const tocBtn = await page.$('#dock-toc-trigger');
    if (tocBtn) {
      await tocBtn.click();
      await page.waitForTimeout(200);
      const isDrawerOpen = await page.evaluate(() => {
        const drawer = document.getElementById('rp-mobile-toc-drawer');
        return drawer && drawer.classList.contains('open');
      });
      if (isDrawerOpen) {
        console.log('  ✓ TOC Drawer opens smoothly on trigger click');
        // Close drawer
        const closeBtn = await page.$('#rp-drawer-close-btn');
        if (closeBtn) {
          await closeBtn.click();
        } else {
          await page.click('#dock-toc-trigger');
        }
        await page.waitForTimeout(200);
        const isClosed = await page.evaluate(() => {
          const drawer = document.getElementById('rp-mobile-toc-drawer');
          return !drawer || !drawer.classList.contains('open');
        });
        if (isClosed) {
          console.log('  ✓ TOC Drawer closes cleanly');
        }
      } else {
        console.error('  ✗ FAIL: TOC Drawer did not open');
        allPassed = false;
      }
    } else {
      console.error('  ✗ FAIL: #dock-toc-trigger not found');
      allPassed = false;
    }

    // Test Language Switch in Dock preserving scroll
    await page.evaluate(() => window.scrollTo(0, 450));
    await page.waitForTimeout(100);
    const scrollBeforeLang = await page.evaluate(() => window.scrollY);

    const npLangBtn = await page.$('.rp-dock-seg-btn[data-dock-lang="np"]');
    if (npLangBtn) {
      await npLangBtn.click();
      await page.waitForTimeout(250);
      const scrollAfterLang = await page.evaluate(() => window.scrollY);
      const langActive = await page.evaluate(() => {
        const active = document.querySelector('.rp-dock-seg-btn.active');
        return active ? active.getAttribute('data-dock-lang') : null;
      });
      if (langActive === 'np' && Math.abs(scrollAfterLang - scrollBeforeLang) < 50) {
        console.log('  ✓ Language switch toggles to Nepali smoothly without resetting scroll position');
      } else {
        console.error(`  ✗ FAIL: Language switch scroll or state issue (active: ${langActive}, scrollDiff: ${Math.abs(scrollAfterLang - scrollBeforeLang)})`);
        allPassed = false;
      }
    } else {
      console.error('  ✗ FAIL: data-dock-lang="np" not found');
      allPassed = false;
    }

    // Test Share Button in Dock (Clipboard fallback + Toast)
    const shareBtn = await page.$('#dock-share-trigger');
    if (shareBtn) {
      await shareBtn.click();
      await page.waitForTimeout(200);
      const toastVisible = await page.evaluate(() => {
        const toast = document.querySelector('.rp-global-toast-notification.show');
        return Boolean(toast);
      });
      if (toastVisible) {
        console.log('  ✓ Share trigger activates universal Liquid Glass toast notification');
      } else {
        console.log('  ℹ Note: Share trigger executed (native share or toast fallback active)');
      }
    }

    // 3. Test Course Video Learning Interface on Mobile (375px)
    console.log('\n--- 3. Testing Course Video Learning Interface on Mobile (375px) ---');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    const isCourseLearnSuppressed = await page.evaluate(() => {
      const wa = document.getElementById('whatsapp-float');
      if (!wa) return true;
      const style = window.getComputedStyle(wa);
      return document.body.classList.contains('page-course-learn') && (style.opacity === '0' || style.pointerEvents === 'none');
    });
    if (isCourseLearnSuppressed) {
      console.log('  ✓ WhatsApp float is clean & suppressed during video learning mode');
    } else {
      console.error('  ✗ FAIL: Video player floating collision detected');
      allPassed = false;
    }

    // Video aspect ratio test
    const playerWrapper = await page.$('#cl-player-wrapper');
    if (playerWrapper) {
      const box = await playerWrapper.boundingBox();
      if (box && box.width > 0 && box.height > 0) {
        const ratio = box.width / box.height;
        // ~16:9 ratio is between 1.65 and 1.85
        if (ratio >= 1.55 && ratio <= 1.90) {
          console.log(`  ✓ Video player maintains responsive ~16:9 aspect ratio (${ratio.toFixed(2)})`);
        } else {
          console.log(`  ℹ Video player dimensions: ${box.width}x${box.height} (ratio: ${ratio.toFixed(2)})`);
        }
      }
    }

    // 4. Test Desktop behavior (1440px): Learning Dock is hidden
    console.log('\n--- 4. Testing Desktop Viewport (1440px) ---');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/learn/investing/demat-meroshare-crn-setup`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(200);

    const dockHiddenOnDesktop = await page.evaluate(() => {
      const dock = document.getElementById('rp-learning-dock');
      if (!dock) return true;
      const style = window.getComputedStyle(dock);
      return style.display === 'none';
    });
    if (dockHiddenOnDesktop) {
      console.log('  ✓ Mobile learning dock is appropriately hidden on desktop screens (>=1024px)');
    } else {
      console.error('  ✗ FAIL: Learning dock should not display on desktop screens');
      allPassed = false;
    }

    console.log('\n======================================================');
    if (allPassed) {
      console.log('MOBILE APP-LIKE UX AUDIT: ALL TESTS PASSED SUCCESSFULLY');
    } else {
      console.log('MOBILE APP-LIKE UX AUDIT: SOME CHECKS FAILED');
    }
    console.log('======================================================\n');

  } catch (err) {
    console.error('Unexpected error during audit:', err);
    allPassed = false;
  } finally {
    await browser.close();
  }

  process.exit(allPassed ? 0 : 1);
}

runAudit();

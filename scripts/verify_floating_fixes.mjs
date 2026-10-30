import { chromium } from 'playwright';
import path from 'path';

const BASE_URL = 'http://localhost:8000';
const ARTIFACTS_DIR = '/Users/aakashdas/.gemini/antigravity-ide/brain/671c8bde-4729-43b7-8a39-2c0889f8c7d8';

async function run() {
  console.log('Starting Playwright visual verification of floating UI fixes...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let passCount = 0;
  let failCount = 0;

  function assert(cond, msg) {
    if (cond) {
      passCount++;
      console.log(`  ✓ ${msg}`);
    } else {
      failCount++;
      console.error(`  ✗ FAIL: ${msg}`);
    }
  }

  try {
    // -------------------------------------------------------------
    // SCENARIO 1: Course Detail Floating Purchase CTA
    // -------------------------------------------------------------
    console.log('\n--- Scenario 1: Course Detail Floating Purchase CTA ---');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(400);

    // Initial state: before scrolling past in-page purchase card, floating CTA should be hidden
    const initialBarVisible = await page.evaluate(() => {
      const bar = document.getElementById('mobile-sticky-bar');
      if (!bar) return false;
      const style = window.getComputedStyle(bar);
      return bar.classList.contains('visible') && style.opacity !== '0';
    });
    assert(!initialBarVisible, 'Floating purchase bar is initially hidden while in-page purchase card is visible');

    // Scroll past in-page purchase card (> 1600px)
    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(400);

    const barData = await page.evaluate(() => {
      const bar = document.getElementById('mobile-sticky-bar');
      const btn = document.getElementById('mobile-bar-whatsapp-btn');
      const advisor = document.querySelector('.advisor-capsule-float');
      const wa = document.getElementById('whatsapp-float');
      const style = bar ? window.getComputedStyle(bar) : null;
      const advStyle = advisor ? window.getComputedStyle(advisor) : null;
      const waStyle = wa ? window.getComputedStyle(wa) : null;

      return {
        hasBar: Boolean(bar),
        isVisible: bar ? (bar.classList.contains('visible') && style.opacity === '1') : false,
        btnText: btn ? btn.textContent.trim().replace(/\s+/g, ' ') : '',
        href: btn ? btn.getAttribute('href') : '',
        advisorHidden: !advisor || advStyle.opacity === '0' || advStyle.pointerEvents === 'none',
        waHidden: !wa || waStyle.opacity === '0' || waStyle.pointerEvents === 'none'
      };
    });

    assert(barData.isVisible, 'Floating purchase CTA is visible after scrolling past in-page purchase card');
    assert(barData.btnText.includes('Buy Course — NPR 2,999'), `CTA button text is standardized: "${barData.btnText}"`);
    assert(barData.href && barData.href.includes('wa.me'), 'CTA points to WhatsApp purchase integration');
    assert(barData.advisorHidden, 'Ask Advisor float is suppressed when purchase CTA is visible (no collision)');
    assert(barData.waHidden, 'Generic WhatsApp float is suppressed when purchase CTA is visible (no duplicate)');

    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'course_detail_mobile_cta.png') });

    // Scroll to footer: verify sticky bar is hidden via body.near-footer
    await page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'end' });
    });
    await page.waitForTimeout(400);

    const nearFooterData = await page.evaluate(() => {
      const bar = document.getElementById('mobile-sticky-bar');
      const style = bar ? window.getComputedStyle(bar) : null;
      return {
        nearFooterClass: document.body.classList.contains('near-footer'),
        barHidden: !bar || style.opacity === '0' || style.pointerEvents === 'none'
      };
    });
    assert(nearFooterData.nearFooterClass, 'body.near-footer is active when scrolled to footer');
    assert(nearFooterData.barHidden, 'Floating purchase CTA hides smoothly near footer boundary (does not obscure footer)');
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'course_detail_footer_hide.png') });

    // Desktop course detail check (1280px)
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    // At top of desktop page, inline purchase card in sidebar is visible, so floating bar must be hidden
    const desktopTopBarVisible = await page.evaluate(() => {
      const bar = document.getElementById('mobile-sticky-bar');
      return bar && bar.classList.contains('visible');
    });
    assert(!desktopTopBarVisible, 'Desktop: floating bar is hidden when inline sidebar purchase card is visible');

    // -------------------------------------------------------------
    // SCENARIO 2: Calculators - Floating Toolbar Removed & Math Working
    // -------------------------------------------------------------
    console.log('\n--- Scenario 2: Calculators - Clean Layout & Functional Math ---');
    for (const calcRoute of ['/calculators/home-loan', '/calculators/sip', '/calculators']) {
      await page.goto(`${BASE_URL}${calcRoute}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(300);
      await page.evaluate(() => window.scrollTo(0, 600));
      await page.waitForTimeout(200);

      const floatBar = await page.$('#rp-calc-floating-bar');
      assert(!floatBar, `Floating calculator toolbar is completely removed on ${calcRoute}`);
    }

    // Verify calculator interactivity and calculation on /calculators/home-loan
    await page.goto(`${BASE_URL}/calculators/home-loan`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(400);

    // Read initial EMI value
    const initialEmi = await page.evaluate(() => {
      const el = document.getElementById('hl-res-monthly') || document.querySelector('.maturity-large') || document.querySelector('.rp-stat-value');
      return el ? el.textContent.trim() : '';
    });
    assert(Boolean(initialEmi), `Initial Home Loan EMI is calculated: ${initialEmi}`);

    // Update property price input
    await page.evaluate(() => {
      const priceInput = document.getElementById('hl-input-price');
      if (priceInput) {
        priceInput.value = '20000000';
        priceInput.dispatchEvent(new Event('input', { bubbles: true }));
        priceInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
    await page.waitForTimeout(350);

    const updatedEmi = await page.evaluate(() => {
      const el = document.getElementById('hl-res-monthly') || document.querySelector('.maturity-large') || document.querySelector('.rp-stat-value');
      return el ? el.textContent.trim() : '';
    });
    assert(Boolean(updatedEmi) && updatedEmi !== initialEmi, `Home loan recalculation works in natural flow (Updated: ${updatedEmi})`);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'calc_home_loan_clean.png') });

    // -------------------------------------------------------------
    // SCENARIO 3: Course Learning Page - Simplified Dock & Working TOC
    // -------------------------------------------------------------
    console.log('\n--- Scenario 3: Course Learning Page - Simplified Dock & TOC ---');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(400);

    const dockData = await page.evaluate(() => {
      const dock = document.getElementById('rp-learning-dock');
      const tocBtn = document.getElementById('dock-toc-trigger');
      const langSwitch = dock ? dock.querySelector('.rp-dock-segmented-switch') : null;
      const bookmarkBtn = document.getElementById('dock-bookmark-trigger');
      const shareBtn = document.getElementById('dock-share-trigger');
      const progressReadout = document.getElementById('dock-progress-readout');

      return {
        hasDock: Boolean(dock),
        hasToc: Boolean(tocBtn),
        hasLangSwitch: Boolean(langSwitch),
        hasBookmark: Boolean(bookmarkBtn),
        hasShare: Boolean(shareBtn),
        progressText: progressReadout ? progressReadout.textContent.trim() : ''
      };
    });

    assert(dockData.hasDock, 'Learning dock is mounted on mobile learning page');
    assert(dockData.hasToc, 'Table of Contents trigger is present in learning dock');
    assert(!dockData.hasLangSwitch, 'Crowded language switch is REMOVED from course learning dock');
    assert(!dockData.hasBookmark, 'Bookmark button is REMOVED from course learning dock (kept in-page under video)');
    assert(!dockData.hasShare, 'Share button is REMOVED from course learning dock (kept in-page under video)');
    assert(Boolean(dockData.progressText), `Progress readout badge is displayed: "${dockData.progressText}"`);

    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'course_learn_dock_toc_only.png') });

    // Test TOC action: clicking TOC scrolls smoothly to curriculum on mobile (<768px)
    await page.click('#dock-toc-trigger');
    await page.waitForTimeout(500);

    const scrollPos = await page.evaluate(() => window.scrollY);
    assert(scrollPos > 300, `Clicking Table of Contents smoothly navigated to curriculum (scroll: ${scrollPos}px)`);

    // Verify video controls remain unobstructed
    const playerBox = await page.evaluate(() => {
      const wrapper = document.getElementById('cl-player-wrapper');
      if (!wrapper) return null;
      const rect = wrapper.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    });
    assert(playerBox && playerBox.width > 0, `Video player container is intact and responsive (${playerBox?.width}px)`);

    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'course_learn_curriculum_nav.png') });

  } catch (err) {
    console.error('Test execution error:', err);
    failCount++;
  } finally {
    await browser.close();
  }

  console.log('\n======================================================');
  console.log(`VERIFICATION SUMMARY: ${passCount} passed, ${failCount} failed`);
  console.log('======================================================');

  process.exit(failCount === 0 ? 0 : 1);
}

run();

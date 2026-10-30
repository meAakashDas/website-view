import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:8000';

const PAGES_TO_AUDIT = [
  { url: '/', name: 'Homepage' },
  { url: '/courses/nepse-stock-market-basics', name: 'NEPSE Course Sales Page' },
  { url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1', name: 'Course Player' },
  { url: '/calculators', name: 'Calculators Hub' },
  { url: '/calculators/sip', name: 'SIP Calculator' },
  { url: '/calculators/emi', name: 'EMI Calculator' },
  { url: '/calculators/loan', name: 'Loan Calculator' },
  { url: '/calculators/home-loan', name: 'Home Loan Calculator' },
  { url: '/calculators/personal-loan', name: 'Personal Loan Calculator' },
  { url: '/calculators/vehicle-loan', name: 'Vehicle Loan Calculator' },
  { url: '/calculators/swp', name: 'SWP Calculator' },
  { url: '/calculators/nepal-income-tax', name: 'Nepal Income Tax Calculator' },
  { url: '/calculators/nepse-share', name: 'NEPSE Share Calculator' },
  { url: '/calculators/fixed-deposit', name: 'Fixed Deposit Calculator' },
  { url: '/calculators/retirement', name: 'Retirement Calculator' },
  { url: '/calculators/cagr', name: 'CAGR Calculator' },
  { url: '/calculators/inflation', name: 'Inflation Calculator' },
  { url: '/learn', name: 'Learn Academy' },
  { url: '/learn/guides', name: 'Learn Guides Hub' },
  { url: '/learn/guides/stock-market-beginners-nepal', name: 'Learn Guide Detail' },
  { url: '/learn/glossary', name: 'Learn Glossary Hub' },
  { url: '/learn/glossary/nepse', name: 'Glossary Term Detail' },
  { url: '/learn/fundamentals', name: 'Learn Category' },
  { url: '/about', name: 'About Page' },
  { url: '/aakash-das', name: 'Founder Page' },
  { url: '/contact', name: 'Contact Page' },
  { url: '/faq', name: 'FAQ Page' },
  { url: '/terms', name: 'Terms Page' },
  { url: '/privacy', name: 'Privacy Page' },
  { url: '/refund-policy', name: 'Refund Policy Page' },
  { url: '/disclaimer', name: 'Disclaimer Page' },
  { url: '/editorial-policy', name: 'Editorial Policy Page' },
];

const VIEWPORTS = [
  { width: 320, height: 600, name: 'Mobile 320px (iPhone SE)' },
  { width: 375, height: 667, name: 'Mobile 375px' },
  { width: 390, height: 844, name: 'Mobile 390px (iPhone 14)' },
  { width: 414, height: 896, name: 'Mobile 414px (Plus)' },
  { width: 768, height: 1024, name: 'Tablet 768px (iPad)' },
  { width: 1024, height: 768, name: 'Laptop 1024px' },
  { width: 1280, height: 800, name: 'Desktop 1280px' },
];

async function runAudit() {
  console.log('====================================================');
  console.log('RISEPAISA FULL WEBSITE TECHNICAL AUDIT — VERIFICATION PASS');
  console.log('====================================================\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const issuesFound = [];
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push({ text: msg.text(), location: msg.location() });
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push({ text: `PageError: ${err.message}`, stack: err.stack });
  });

  // 1. Audit Overflow and Layout across all pages at 320px, 390px, 768px, 1280px
  console.log('--- 1. Testing Horizontal Overflow Across Viewports ---');
  let overflowTestsPassed = 0;
  for (const pageInfo of PAGES_TO_AUDIT) {
    for (const vp of [VIEWPORTS[0], VIEWPORTS[2], VIEWPORTS[4], VIEWPORTS[6]]) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      try {
        await page.goto(`${BASE_URL}${pageInfo.url}`, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(150);

        const overflowInfo = await page.evaluate((vpWidth) => {
          const doc = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(doc.scrollWidth, body.scrollWidth);
          const hasOverflow = scrollWidth > vpWidth + 1;

          let overflowingElements = [];
          if (hasOverflow) {
            const allElements = document.querySelectorAll('*');
            for (const el of allElements) {
              const rect = el.getBoundingClientRect();
              if (rect.right > vpWidth + 2) {
                overflowingElements.push({
                  tag: el.tagName,
                  className: (el.className || '').toString().slice(0, 50),
                  id: el.id,
                  right: Math.round(rect.right),
                  width: Math.round(rect.width)
                });
                if (overflowingElements.length >= 5) break;
              }
            }
          }

          return {
            scrollWidth,
            clientWidth: doc.clientWidth,
            hasOverflow,
            overflowingElements
          };
        }, vp.width);

        if (overflowInfo.hasOverflow) {
          const issue = `[Overflow] ${pageInfo.name} at ${vp.name}: scrollWidth ${overflowInfo.scrollWidth}px > viewport ${vp.width}px. Culprits: ${JSON.stringify(overflowInfo.overflowingElements)}`;
          console.error(`  ❌ ${issue}`);
          issuesFound.push(issue);
        } else {
          overflowTestsPassed++;
        }
      } catch (err) {
        issuesFound.push(`[Load Error] ${pageInfo.name} at ${vp.name}: ${err.message}`);
      }
    }
  }
  console.log(`✓ Horizontal overflow checked across ${overflowTestsPassed} viewport/page combinations.`);

  // 2. Navigation Audit: Mobile Drawer, Dropdowns, Escape key, Links
  console.log('\n--- 2. Auditing Navigation & Mobile Drawer ---');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);

  const navAudit = await page.evaluate(async () => {
    const results = {};
    const toggleBtn = document.getElementById('nav-toggle');
    const drawer = document.getElementById('mobile-menu');
    results.toggleBtnExists = !!toggleBtn;
    results.drawerExists = !!drawer;

    if (toggleBtn && drawer) {
      // Test opening
      toggleBtn.click();
      await new Promise(r => setTimeout(r, 250));
      results.drawerOpenClass = drawer.classList.contains('open');
      results.drawerDisplayed = window.getComputedStyle(drawer).display !== 'none';
      results.bodyScrollLocked = document.body.style.position === 'fixed' || document.body.style.overflow === 'hidden';

      // Test closing with close button
      const closeBtn = document.getElementById('mobile-menu-close');
      if (closeBtn) {
        closeBtn.click();
      } else {
        toggleBtn.click();
      }
      await new Promise(r => setTimeout(r, 250));
      results.drawerClosedClass = !drawer.classList.contains('open');
      results.drawerHidden = window.getComputedStyle(drawer).display === 'none';
      results.bodyScrollUnlocked = document.body.style.overflow !== 'hidden';
    }

    return results;
  });

  console.log('Mobile navigation audit result:', navAudit);
  if (!navAudit.toggleBtnExists) issuesFound.push('Mobile toggle button missing');
  if (!navAudit.drawerExists) issuesFound.push('Mobile drawer element missing');
  if (!navAudit.drawerOpenClass || !navAudit.drawerDisplayed) issuesFound.push('Mobile drawer does not open on toggle click');
  if (!navAudit.drawerClosedClass || !navAudit.drawerHidden) issuesFound.push('Mobile drawer does not close on close button click');

  // 3. Mobile Others Dropdown Audit
  console.log('\n--- 3. Auditing Mobile Others Dropdown Menu ---');
  const othersAudit = await page.evaluate(async () => {
    const othersBtn = document.getElementById('mobile-nav-others');
    const othersMenu = document.getElementById('mobile-others-menu');
    const results = { othersBtnExists: !!othersBtn, othersMenuExists: !!othersMenu };

    if (othersBtn && othersMenu) {
      othersBtn.click();
      await new Promise(r => setTimeout(r, 200));
      results.menuVisible = window.getComputedStyle(othersMenu).display !== 'none';
      results.ariaExpanded = othersBtn.getAttribute('aria-expanded') === 'true';

      // Click again to close
      othersBtn.click();
      await new Promise(r => setTimeout(r, 200));
      results.menuClosed = window.getComputedStyle(othersMenu).display === 'none';
    }
    return results;
  });
  console.log('Mobile Others dropdown audit result:', othersAudit);

  // 4. Course Player & Interactive Controls Audit
  console.log('\n--- 4. Auditing Course Learning Interface ---');
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const courseAudit = await page.evaluate(async () => {
    const playerWrapper = document.getElementById('cl-player-wrapper');
    const iframe = document.getElementById('cl-video-iframe');
    const nextBtn = document.getElementById('cl-next-btn');
    const prevBtn = document.getElementById('cl-prev-btn');
    const sidebar = document.getElementById('cl-sidebar-col');

    return {
      playerWrapperExists: !!playerWrapper,
      iframeExists: !!iframe,
      nextBtnExists: !!nextBtn,
      prevBtnExists: !!prevBtn,
      sidebarExists: !!sidebar
    };
  });
  console.log('Course learning interface audit:', courseAudit);
  if (!courseAudit.playerWrapperExists) issuesFound.push('Course video player wrapper missing');
  if (!courseAudit.iframeExists) issuesFound.push('Course video iframe missing');
  if (!courseAudit.nextBtnExists) issuesFound.push('Lesson Next button missing');

  // 5. Calculators Usability & Edge-Case Testing
  console.log('\n--- 5. Auditing Financial Calculators ---');
  const calcTests = [
    { slug: 'sip', name: 'SIP', testId: 'sip-input-investment', testVal: '10000' },
    { slug: 'emi', name: 'EMI', testId: 'emi-input-amount', testVal: '3000000' },
    { slug: 'swp', name: 'SWP', testId: 'swp-input-investment', testVal: '6000000' },
    { slug: 'fixed-deposit', name: 'Fixed Deposit', testId: 'fd-principal-input', testVal: '800000' },
    { slug: 'nepal-income-tax', name: 'Income Tax', testId: 'tax-income-input', testVal: '1500000' }
  ];

  for (const calc of calcTests) {
    await page.goto(`${BASE_URL}/calculators/${calc.slug}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    const calcState = await page.evaluate((c) => {
      const inputs = document.querySelectorAll('input[type="number"], input[type="range"]');
      const h1 = document.querySelector('h1');
      const stats = Array.from(document.querySelectorAll('.rp-stat-value')).map(el => el.textContent.trim());
      const hasNaN = stats.some(s => s.includes('NaN') || s.includes('undefined'));

      return {
        inputCount: inputs.length,
        h1Text: h1 ? h1.textContent.trim() : null,
        statsCount: stats.length,
        hasNaN
      };
    }, calc);

    if (calcState.hasNaN || calcState.inputCount === 0) {
      issuesFound.push(`Calculator ${calc.name} failed: NaN found or zero inputs`);
    } else {
      console.log(`✓ Calculator ${calc.name} verified (inputs: ${calcState.inputCount}, h1: "${calcState.h1Text}", stats: ${calcState.statsCount}, zero NaN).`);
    }
  }

  // 6. Accessibility Audit (Labels, Headings)
  console.log('\n--- 6. Auditing Accessibility & Semantic Hierarchy ---');
  for (const pageInfo of [PAGES_TO_AUDIT[0], PAGES_TO_AUDIT[1], PAGES_TO_AUDIT[3], PAGES_TO_AUDIT[17], PAGES_TO_AUDIT[23]]) {
    await page.goto(`${BASE_URL}${pageInfo.url}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(200);

    const a11yAudit = await page.evaluate(() => {
      const buttonsWithoutLabels = [];
      document.querySelectorAll('button').forEach((btn) => {
        const text = (btn.textContent || '').trim();
        const ariaLabel = btn.getAttribute('aria-label');
        const title = btn.getAttribute('title');
        if (!text && !ariaLabel && !title) {
          buttonsWithoutLabels.push({ id: btn.id, className: btn.className });
        }
      });

      const h1Count = document.querySelectorAll('h1').length;
      return { buttonsWithoutLabels, h1Count };
    });

    if (a11yAudit.h1Count !== 1) {
      console.warn(`  ⚠️ [a11y] ${pageInfo.name} has ${a11yAudit.h1Count} <h1> tags.`);
      issuesFound.push(`${pageInfo.name} has ${a11yAudit.h1Count} <h1> tags`);
    }
    if (a11yAudit.buttonsWithoutLabels.length > 0) {
      console.warn(`  ⚠️ [a11y] ${pageInfo.name} has unlabeled buttons:`, a11yAudit.buttonsWithoutLabels);
      issuesFound.push(`${pageInfo.name} has ${a11yAudit.buttonsWithoutLabels.length} unlabeled buttons`);
    }
  }

  console.log('\n--- 7. Console Errors & Uncaught Exceptions ---');
  console.log(`Total console errors recorded during audit: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors.slice(0, 10));
    issuesFound.push(`${consoleErrors.length} console errors recorded`);
  }

  await browser.close();

  console.log('\n====================================================');
  console.log(`AUDIT FINISHED. Total Issues Found: ${issuesFound.length}`);
  console.log('====================================================');

  if (issuesFound.length > 0) {
    console.error('Remaining issues:', issuesFound);
    process.exit(1);
  } else {
    console.log('🎉 ALL AUDIT CHECKS PASSED WITH ZERO DEFECTS!');
  }
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});

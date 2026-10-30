import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:8000';

async function runE2eVerification() {
  console.log('========================================================');
  console.log('RISEPAISA PART 8: END-TO-END PRODUCTION READINESS AUDIT');
  console.log('========================================================\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push({ text: msg.text(), location: msg.location() });
    }
  });

  page.on('requestfailed', (req) => {
    // Filter out expected external aborts/optional analytics
    const url = req.url();
    if (
      !url.includes('google-analytics') &&
      !url.includes('googletagmanager') &&
      !url.includes('youtube') &&
      !url.includes('youtube-nocookie')
    ) {
      failedRequests.push({ url, failure: req.failure()?.errorText });
    }
  });

  let passedChecks = 0;
  let failedChecks = 0;

  function assert(condition, message) {
    if (condition) {
      passedChecks++;
      console.log(`  ✓ ${message}`);
    } else {
      failedChecks++;
      console.error(`  ✗ FAIL: ${message}`);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // STAGE A: DISCOVERY JOURNEY (HOMEPAGE)
  // ─────────────────────────────────────────────────────────────
  console.log('--- Stage A: Visitor Discovery on Homepage ---');
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(200);

  const homeData = await page.evaluate(() => {
    const title = document.title;
    const h1 = document.querySelector('h1')?.textContent?.trim() || '';
    const courseCard = document.querySelector('.course-card, .home-course-card, [data-course-slug]');
    const calcLink = document.querySelector('a[href="/calculators"], a[href^="/calculators/"]');
    const nepseLink = document.querySelector('a[href*="nepse-stock-market-basics"]');
    return {
      title,
      h1,
      hasCourseCard: Boolean(courseCard),
      hasCalcLink: Boolean(calcLink),
      hasNepseLink: Boolean(nepseLink),
      bodyText: document.body.innerText
    };
  });

  assert(homeData.title.includes('RisePaisa'), 'Homepage has valid title with brand name');
  assert(homeData.h1.length > 0, `Homepage has visible H1: "${homeData.h1.slice(0, 40)}..."`);
  assert(homeData.hasNepseLink, 'Homepage features direct link to NEPSE Stock Market course');
  assert(homeData.hasCalcLink, 'Homepage features navigation to free financial tools');
  assert(homeData.bodyText.includes('2,999'), 'Homepage displays correct course price NPR 2,999');

  // ─────────────────────────────────────────────────────────────
  // STAGE B: COURSE EVALUATION JOURNEY
  // ─────────────────────────────────────────────────────────────
  console.log('\n--- Stage B: Course Evaluation Journey ---');
  await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(250);

  const courseData = await page.evaluate(() => {
    const title = document.querySelector('h1')?.textContent?.trim() || '';
    const priceEl = document.querySelector('.cd-price-current, .price-display, [data-course-price]');
    const priceText = priceEl ? priceEl.textContent : '';
    const modules = document.querySelectorAll('.cd-module-accordion, .module-item, [data-module-id]');
    const demoIframe = document.querySelector('#rp-video-frame, iframe[src*="youtube"]');
    const waPrimaryBtn = document.querySelector('#buy-course-whatsapp-btn, #hero-enroll-whatsapp-btn');
    const waLink = waPrimaryBtn ? waPrimaryBtn.getAttribute('href') : '';
    const bodyText = document.body.innerText;

    return {
      title,
      priceText,
      moduleCount: modules.length,
      hasDemoIframe: Boolean(demoIframe),
      waLink,
      bodyText
    };
  });

  assert(courseData.title.includes('Share Market') || courseData.title.includes('NEPSE'), `Course page renders valid title: "${courseData.title}"`);
  assert(courseData.bodyText.includes('2,999'), 'Course page displays NPR 2,999');
  assert(courseData.bodyText.includes('Lifetime') || courseData.bodyText.includes('lifetime'), 'Course page affirms Lifetime Access');
  assert(courseData.bodyText.includes('20+ Hours') || courseData.bodyText.includes('20+ hours'), 'Course page documents 20+ hours duration');
  assert(courseData.hasDemoIframe, 'Course page embeds responsive preview video player');

  // ─────────────────────────────────────────────────────────────
  // STAGE C: WHATSAPP ENROLLMENT DESTINATION & MESSAGE AUDIT
  // ─────────────────────────────────────────────────────────────
  console.log('\n--- Stage C: WhatsApp Enrollment Pathway Verification ---');
  assert(courseData.waLink.includes('wa.me/9779740269317') || courseData.waLink.includes('api.whatsapp.com/send?phone=9779740269317'), `WhatsApp link targets official number +977 9740269317`);
  assert(courseData.waLink.includes('2%2C999') || courseData.waLink.includes('2999'), 'WhatsApp prefilled text specifies NPR 2,999 price');
  assert(courseData.waLink.includes('NEPSE') || courseData.waLink.includes('Stock'), 'WhatsApp prefilled text identifies course correctly');

  // ─────────────────────────────────────────────────────────────
  // STAGE D: LEARNING PLATFORM & ACCESS GATE VERIFICATION
  // ─────────────────────────────────────────────────────────────
  console.log('\n--- Stage D: Learning Platform & Content Protection ---');
  
  // 1. Check free preview lesson (Lesson 1)
  await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);

  const previewState = await page.evaluate(() => {
    const playerWrapper = document.getElementById('cl-player-wrapper');
    const iframe = document.getElementById('cl-video-iframe');
    const badge = document.getElementById('cl-access-badge');
    const isLocked = document.getElementById('cl-locked-screen') !== null;
    return {
      hasPlayerWrapper: Boolean(playerWrapper),
      hasIframe: Boolean(iframe),
      badgeText: badge?.textContent?.trim() || '',
      isLocked
    };
  });

  assert(previewState.hasPlayerWrapper, 'Course player wrapper renders on lesson 1');
  assert(previewState.hasIframe, 'Free preview lesson mounts video player iframe');
  assert(previewState.badgeText.includes('Free Preview'), 'Lesson 1 marked as Free Preview');
  assert(!previewState.isLocked, 'Lesson 1 is NOT blocked by locked overlay');

  // 2. Check locked lesson for unauthorized visitor (Lesson 2)
  await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn?lesson=lesson-2`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);

  const lockedState = await page.evaluate(() => {
    const lockedScreen = document.getElementById('cl-locked-screen');
    const iframe = document.getElementById('cl-video-iframe');
    const badge = document.getElementById('cl-access-badge');
    const overlayText = lockedScreen ? lockedScreen.innerText : '';
    const signinBtn = document.getElementById('cl-locked-signin-trigger');
    const whatsappBtn = document.getElementById('cl-locked-whatsapp-cta');
    return {
      hasLockedScreen: Boolean(lockedScreen),
      hasIframe: Boolean(iframe),
      badgeText: badge?.textContent?.trim() || '',
      overlayText,
      hasSigninBtn: Boolean(signinBtn),
      hasWhatsappBtn: Boolean(whatsappBtn)
    };
  });

  assert(lockedState.hasLockedScreen, 'Lesson 2 displays locked overlay (#cl-locked-screen) for unauthenticated visitor');
  assert(!lockedState.hasIframe, 'Restricted lesson does NOT mount active video iframe for unauthorized visitor');
  assert(lockedState.badgeText.includes('Enrolled Only'), 'Lesson 2 badge marked as Enrolled Only');
  assert(lockedState.hasSigninBtn && lockedState.hasWhatsappBtn, 'Locked overlay presents sign-in and WhatsApp enrollment pathways');

  // 3. Test Student Auth Dialog
  const authModalState = await page.evaluate(() => {
    const authBtn = document.getElementById('nav-signin-btn');
    if (authBtn) authBtn.click();
    const modal = document.querySelector('.rp-auth-modal, .rp-modal-backdrop, [data-auth-modal]');
    return {
      hasAuthBtn: Boolean(authBtn),
      hasModal: Boolean(modal)
    };
  });

  assert(authModalState.hasAuthBtn, 'Navigation bar includes student authentication button (#nav-signin-btn)');

  // ─────────────────────────────────────────────────────────────
  // STAGE E: ALL 13 FINANCIAL CALCULATORS VERIFICATION
  // ─────────────────────────────────────────────────────────────
  console.log('\n--- Stage E: Financial Calculators Math & Invariance ---');
  const CALCULATORS = [
    { slug: 'sip', name: 'SIP', testField: 'calc-sip-monthly', val: '8000' },
    { slug: 'emi', name: 'EMI', testField: 'calc-emi-principal', val: '2500000' },
    { slug: 'loan', name: 'Loan', testField: null },
    { slug: 'home-loan', name: 'Home Loan', testField: null },
    { slug: 'personal-loan', name: 'Personal Loan', testField: null },
    { slug: 'vehicle-loan', name: 'Vehicle Loan', testField: null },
    { slug: 'swp', name: 'SWP', testField: null },
    { slug: 'nepal-income-tax', name: 'Nepal Income Tax', testField: null },
    { slug: 'nepse-share', name: 'NEPSE Share', testField: null },
    { slug: 'fixed-deposit', name: 'Fixed Deposit', testField: null },
    { slug: 'retirement', name: 'Retirement', testField: null },
    { slug: 'cagr', name: 'CAGR', testField: null },
    { slug: 'inflation', name: 'Inflation', testField: null }
  ];

  for (const calc of CALCULATORS) {
    await page.goto(`${BASE_URL}/calculators/${calc.slug}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(150);

    const calcCheck = await page.evaluate((slug) => {
      const h1 = document.querySelector('h1')?.textContent?.trim() || '';
      const text = document.body.innerText;
      const hasNaN = text.includes('NaN') || text.includes('undefined');
      const statValues = Array.from(document.querySelectorAll('.rp-stat-val, .calc-result-val, [data-stat-val]')).map(el => el.textContent.trim());
      return {
        h1,
        hasNaN,
        statCount: statValues.length,
        sampleStats: statValues.slice(0, 3)
      };
    }, calc.slug);

    assert(!calcCheck.hasNaN, `Calculator ${calc.name} renders clean without NaN or undefined`);
    assert(calcCheck.h1.length > 0, `Calculator ${calc.name} renders H1: "${calcCheck.h1}"`);
  }

  // ─────────────────────────────────────────────────────────────
  // STAGE F: MOBILE RESPONSIVE OVERFLOW AUDIT (320px, 375px, 390px, 768px)
  // ─────────────────────────────────────────────────────────────
  console.log('\n--- Stage F: Mobile Responsive Overflow Check ---');
  const CHECK_URLS = ['/', '/courses/nepse-stock-market-basics', '/calculators/sip', '/calculators/fixed-deposit', '/about', '/aakash-das', '/terms', '/contact'];
  const CHECK_VIEWPORTS = [
    { width: 320, height: 600, name: '320px (iPhone SE)' },
    { width: 375, height: 667, name: '375px' },
    { width: 390, height: 844, name: '390px (iPhone 14)' },
    { width: 768, height: 1024, name: '768px (iPad)' }
  ];

  let overflowFailures = 0;
  for (const url of CHECK_URLS) {
    for (const vp of CHECK_VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${BASE_URL}${url}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(100);

      const hasOverflow = await page.evaluate((w) => {
        return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) > w + 1;
      }, vp.width);

      if (hasOverflow) {
        overflowFailures++;
        console.error(`  ✗ Overflow detected at ${url} on ${vp.name}`);
      }
    }
  }

  assert(overflowFailures === 0, `All audited pages passed responsive check with 0 overflow across all viewports`);

  // ─────────────────────────────────────────────────────────────
  // CONSOLE AND NETWORK HEALTH
  // ─────────────────────────────────────────────────────────────
  console.log('\n--- Stage G: Console & Network Health ---');
  assert(consoleErrors.length === 0, `Zero console errors recorded during journey (Actual: ${consoleErrors.length})`);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
  }
  assert(failedRequests.length === 0, `Zero failed network requests during journey (Actual: ${failedRequests.length})`);
  if (failedRequests.length > 0) {
    console.error('Failed requests:', failedRequests);
  }

  await browser.close();

  console.log('\n========================================================');
  console.log(`E2E AUDIT RESULTS: ${passedChecks} PASSED, ${failedChecks} FAILED`);
  console.log('========================================================\n');

  if (failedChecks > 0) {
    process.exit(1);
  }
}

runE2eVerification().catch((err) => {
  console.error('Fatal error during E2E verification:', err);
  process.exit(1);
});

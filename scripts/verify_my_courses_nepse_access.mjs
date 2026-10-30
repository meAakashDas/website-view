import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:8000';
const NEPSE_LEARN_URL = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';

async function runVerification() {
  console.log('======================================================');
  console.log('PLAYWRIGHT E2E VERIFICATION: MY COURSES & NEPSE ACCESS');
  console.log('======================================================\n');

  const browser = await chromium.launch({ headless: true });
  let allPassed = true;

  const testPassed = (msg) => console.log(`  ✓ ${msg}`);
  const testFailed = (msg, err) => {
    console.error(`  ✗ FAIL: ${msg}`, err || '');
    allPassed = false;
  };

  try {
    // ------------------------------------------------------------------------
    // SCENARIO 1: LOGGED-OUT VISITOR
    // ------------------------------------------------------------------------
    console.log('--- Scenario 1: Logged-Out Visitor ---');
    const guestContext = await browser.newContext();
    const guestPage = await guestContext.newPage();

    // 1. Visit /my-courses as guest
    await guestPage.goto(`${BASE_URL}/my-courses`, { waitUntil: 'domcontentloaded' });
    await guestPage.waitForSelector('.mc-page', { timeout: 5000 });

    // Verify Guest Banner and NEPSE course card
    const cardDataUrl = await guestPage.getAttribute('.mc-course-card', 'data-course-url');
    if (cardDataUrl === NEPSE_LEARN_URL) {
      testPassed('Course card has exact data-course-url="/courses/nepse-stock-market-basics/learn?lesson=lesson-1"');
    } else {
      testFailed(`Expected data-course-url to be ${NEPSE_LEARN_URL}, got ${cardDataUrl}`);
    }

    // Click the NEPSE course card
    await Promise.all([
      guestPage.waitForURL(`**${NEPSE_LEARN_URL}`),
      guestPage.click('.mc-course-card')
    ]);
    testPassed('Clicking course card navigated to exact learning URL: /courses/nepse-stock-market-basics/learn?lesson=lesson-1');

    // Verify Lesson 1 is active and video is playable (free preview)
    await guestPage.waitForSelector('#cl-iframe-container', { timeout: 5000 });
    const isLesson1IframePresent = await guestPage.isVisible('#cl-video-iframe');
    if (isLesson1IframePresent) {
      testPassed('Lesson 1 (Free Preview) plays video iframe for guest visitor');
    } else {
      testFailed('Expected video iframe for Lesson 1 free preview');
    }

    // Verify Lesson 2 has lock icon in sidebar
    const isLockIconVisible = await guestPage.isVisible('#cl-lock-icon-lesson-2');
    if (isLockIconVisible) {
      testPassed('Lesson 2 displays lock icon in sidebar for guest visitor');
    } else {
      testFailed('Expected lock icon on Lesson 2 in sidebar');
    }

    // Attempt to navigate to paid lesson 2
    await guestPage.click('.cl-lesson-btn[data-lesson-id="lesson-2"]');
    await guestPage.waitForSelector('#cl-locked-screen', { timeout: 5000 });

    const isLockedScreenVisible = await guestPage.isVisible('#cl-locked-screen');
    const isIframeStillVisible = await guestPage.isVisible('#cl-video-iframe');
    const lockedHeadline = await guestPage.textContent('.cl-locked-headline');
    const hasSignInBtn = await guestPage.isVisible('#cl-locked-signin-trigger');
    const hasWhatsAppBtn = await guestPage.isVisible('#cl-locked-whatsapp-cta');

    if (isLockedScreenVisible && !isIframeStillVisible && hasSignInBtn && hasWhatsAppBtn) {
      testPassed(`Paid Lesson 2 is strictly LOCKED: "${lockedHeadline?.trim()}", sign-in & WhatsApp CTAs visible, NO video iframe`);
    } else {
      testFailed('Paid lesson did not show proper locked state or leaked iframe');
    }

    // Click "Watch Free Lesson 1" button in locked screen
    await guestPage.click('#cl-watch-preview-btn');
    await guestPage.waitForSelector('#cl-video-iframe', { timeout: 5000 });
    testPassed('"Watch Free Lesson 1" in locked screen returns guest to playable Lesson 1');

    await guestContext.close();

    // ------------------------------------------------------------------------
    // SCENARIO 2: LOGGED-IN UNPAID STUDENT
    // ------------------------------------------------------------------------
    console.log('\n--- Scenario 2: Logged-In Unpaid Student ---');
    const unpaidContext = await browser.newContext();
    const unpaidPage = await unpaidContext.newPage();

    await unpaidPage.goto(`${BASE_URL}/my-courses`, { waitUntil: 'domcontentloaded' });
    await unpaidPage.evaluate(async () => {
      const auth = await import('/js/firebase/auth.js');
      const courses = await import('/js/firebase/courses.js');
      const uid = 'test-unpaid-student-uid';
      courses.setEnrollmentCacheForTesting(uid, '1', {
        enrolled: false,
        hasAccess: false,
        status: 'not_enrolled'
      });
      courses.setEnrollmentCacheForTesting(uid, 'nepse-stock-market-basics', {
        enrolled: false,
        hasAccess: false,
        status: 'not_enrolled'
      });
      auth.setCurrentUserForTesting({
        uid,
        email: 'unpaid@example.com',
        displayName: 'Unpaid Student'
      });
    });
    await unpaidPage.waitForTimeout(500);

    // Verify empty state "View NEPSE Course (Free Preview)" button points to exact learning URL
    const freePreviewHref = await unpaidPage.evaluate(() => {
      const links = Array.from(document.querySelectorAll('.mc-state-actions a'));
      const previewLink = links.find(a => a.textContent.includes('NEPSE'));
      return previewLink ? previewLink.getAttribute('href') : null;
    });

    if (freePreviewHref === NEPSE_LEARN_URL) {
      testPassed(`Empty state button points to exact learning URL: ${NEPSE_LEARN_URL}`);
    } else {
      testFailed(`Expected empty state button to point to ${NEPSE_LEARN_URL}, got: ${freePreviewHref}`);
    }

    // Navigate to learning URL as unpaid student
    await unpaidPage.goto(`${BASE_URL}${NEPSE_LEARN_URL}`, { waitUntil: 'domcontentloaded' });
    await unpaidPage.evaluate(async () => {
      const auth = await import('/js/firebase/auth.js');
      const courses = await import('/js/firebase/courses.js');
      const uid = 'test-unpaid-student-uid';
      courses.setEnrollmentCacheForTesting(uid, '1', {
        enrolled: false,
        hasAccess: false,
        status: 'not_enrolled'
      });
      courses.setEnrollmentCacheForTesting(uid, 'nepse-stock-market-basics', {
        enrolled: false,
        hasAccess: false,
        status: 'not_enrolled'
      });
      auth.setCurrentUserForTesting({
        uid,
        email: 'unpaid@example.com',
        displayName: 'Unpaid Student'
      });
    });
    await unpaidPage.waitForSelector('#cl-iframe-container', { timeout: 5000 });
    testPassed('Lesson 1 plays free preview for logged-in unpaid student');

    // Click Lesson 2 in sidebar
    await unpaidPage.click('.cl-lesson-btn[data-lesson-id="lesson-2"]');
    await unpaidPage.waitForSelector('#cl-locked-screen', { timeout: 5000 });

    const unpaidLockedIframe = await unpaidPage.isVisible('#cl-video-iframe');
    const unpaidLockedWhatsapp = await unpaidPage.isVisible('#cl-locked-whatsapp-cta');
    const unpaidLockedSignin = await unpaidPage.isVisible('#cl-locked-signin-trigger');

    if (!unpaidLockedIframe && unpaidLockedWhatsapp && !unpaidLockedSignin) {
      testPassed('Paid Lesson 2 is strictly locked for unpaid student (WhatsApp CTA shown, sign-in CTA hidden since already logged in)');
    } else {
      testFailed('Unexpected state for unpaid logged-in student on paid lesson');
    }

    await unpaidContext.close();

    // ------------------------------------------------------------------------
    // SCENARIO 3: UNVERIFIED / PENDING PAYMENT ENROLLMENT
    // ------------------------------------------------------------------------
    console.log('\n--- Scenario 3: Unverified / Pending Payment ---');
    const pendingContext = await browser.newContext();
    const pendingPage = await pendingContext.newPage();

    await pendingPage.goto(`${BASE_URL}${NEPSE_LEARN_URL}`, { waitUntil: 'domcontentloaded' });
    await pendingPage.evaluate(async () => {
      const auth = await import('/js/firebase/auth.js');
      const courses = await import('/js/firebase/courses.js');
      const uid = 'test-pending-student-uid';
      courses.setEnrollmentCacheForTesting(uid, '1', {
        enrolled: false,
        hasAccess: false,
        status: 'pending',
        data: { status: 'pending' }
      });
      courses.setEnrollmentCacheForTesting(uid, 'nepse-stock-market-basics', {
        enrolled: false,
        hasAccess: false,
        status: 'pending',
        data: { status: 'pending' }
      });
      auth.setCurrentUserForTesting({
        uid,
        email: 'pending@example.com',
        displayName: 'Pending Student'
      });
    });
    await pendingPage.waitForTimeout(500);

    // Verify Lesson 1 is playable (free preview)
    const pendingLesson1Playable = await pendingPage.isVisible('#cl-video-iframe');
    if (pendingLesson1Playable) {
      testPassed('Lesson 1 free preview is accessible while payment verification is pending');
    } else {
      testFailed('Lesson 1 free preview was unexpectedly blocked for pending student');
    }

    // Navigate to protected lesson 2
    await pendingPage.click('.cl-lesson-btn[data-lesson-id="lesson-2"]');
    await pendingPage.waitForSelector('#cl-locked-screen', { timeout: 5000 });

    const pendingLockedIframe = await pendingPage.isVisible('#cl-video-iframe');
    const pendingTag = await pendingPage.textContent('.cl-locked-tag');

    if (!pendingLockedIframe) {
      testPassed(`Paid Lesson 2 strictly locked for unverified payment: "${pendingTag?.trim()}" - NO video iframe rendered`);
    } else {
      testFailed('Leaked video iframe during pending payment verification');
    }

    await pendingContext.close();

    // ------------------------------------------------------------------------
    // SCENARIO 4: PAID / ENROLLED STUDENT
    // ------------------------------------------------------------------------
    console.log('\n--- Scenario 4: Paid / Enrolled Student ---');
    const enrolledContext = await browser.newContext();
    const enrolledPage = await enrolledContext.newPage();

    // 1. Check My Courses page as enrolled student
    await enrolledPage.goto(`${BASE_URL}/my-courses`, { waitUntil: 'domcontentloaded' });
    await enrolledPage.evaluate(async () => {
      const auth = await import('/js/firebase/auth.js');
      const courses = await import('/js/firebase/courses.js');
      const uid = 'test-enrolled-student-uid';
      courses.setEnrollmentCacheForTesting(uid, '1', {
        enrolled: true,
        hasAccess: true,
        status: 'active',
        data: { status: 'active', enrolledAt: new Date().toISOString() }
      });
      courses.setEnrollmentCacheForTesting(uid, 'nepse-stock-market-basics', {
        enrolled: true,
        hasAccess: true,
        status: 'active',
        data: { status: 'active', enrolledAt: new Date().toISOString() }
      });
      auth.setCurrentUserForTesting({
        uid,
        email: 'student@example.com',
        displayName: 'Enrolled Student'
      });
    });
    const continueBtn = await enrolledPage.waitForSelector('.mc-continue-btn', { timeout: 5000 });
    const continueBtnHref = await continueBtn.getAttribute('href');

    if (continueBtnHref === NEPSE_LEARN_URL) {
      testPassed(`Enrolled course card "Continue Learning" points to exact learning URL: ${NEPSE_LEARN_URL}`);
    } else {
      testFailed(`Expected continue button href to be ${NEPSE_LEARN_URL}, got: ${continueBtnHref}`);
    }

    // Click the course card
    await Promise.all([
      enrolledPage.waitForURL(`**${NEPSE_LEARN_URL}`),
      enrolledPage.click('.mc-course-card')
    ]);
    testPassed('Enrolled student clicking course card in My Courses navigates to exact learning URL');

    // On learning page, set enrolled credentials
    await enrolledPage.evaluate(async () => {
      const auth = await import('/js/firebase/auth.js');
      const courses = await import('/js/firebase/courses.js');
      const uid = 'test-enrolled-student-uid';
      courses.setEnrollmentCacheForTesting(uid, '1', {
        enrolled: true,
        hasAccess: true,
        status: 'active',
        data: { status: 'active', enrolledAt: new Date().toISOString() }
      });
      courses.setEnrollmentCacheForTesting(uid, 'nepse-stock-market-basics', {
        enrolled: true,
        hasAccess: true,
        status: 'active',
        data: { status: 'active', enrolledAt: new Date().toISOString() }
      });
      auth.setCurrentUserForTesting({
        uid,
        email: 'student@example.com',
        displayName: 'Enrolled Student'
      });
    });
    await enrolledPage.waitForTimeout(300);

    // Verify Lesson 1 is active and video is playable
    await enrolledPage.waitForSelector('#cl-iframe-container', { timeout: 5000 });
    const enrolledLesson1Iframe = await enrolledPage.isVisible('#cl-video-iframe');
    if (enrolledLesson1Iframe) {
      testPassed('Lesson 1 is playable for enrolled student');
    } else {
      testFailed('Expected video iframe on Lesson 1 for enrolled student');
    }

    // Now click paid Lesson 2
    await enrolledPage.click('.cl-lesson-btn[data-lesson-id="lesson-2"]');
    await enrolledPage.waitForTimeout(300);

    const enrolledLesson2Iframe = await enrolledPage.isVisible('#cl-video-iframe');
    const enrolledLesson2Locked = await enrolledPage.isVisible('#cl-locked-screen');

    if (enrolledLesson2Iframe && !enrolledLesson2Locked) {
      testPassed('Paid Lesson 2 is successfully UNLOCKED and playable for enrolled student (no locked screen)');
    } else {
      testFailed('Paid Lesson 2 remained locked for verified enrolled student');
    }

    // Check URL preserves exact lesson query parameter
    const currentUrl = enrolledPage.url();
    if (currentUrl.includes('/courses/nepse-stock-market-basics/learn?lesson=lesson-2')) {
      testPassed('Browser URL cleanly updated to: /courses/nepse-stock-market-basics/learn?lesson=lesson-2');
    } else {
      testFailed(`URL query mismatch: ${currentUrl}`);
    }

    await enrolledContext.close();

  } catch (err) {
    testFailed('Unhandled exception in verification suite', err);
  } finally {
    await browser.close();
  }

  console.log('\n======================================================');
  if (allPassed) {
    console.log('ALL E2E NEPSE MY COURSES & ACCESS CONTROL TESTS PASSED!');
  } else {
    console.error('SOME TESTS FAILED! Inspect errors above.');
    process.exit(1);
  }
  console.log('======================================================\n');
}

runVerification().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});

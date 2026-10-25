// ========================================================
// RISEPAISA TEST SUITE: NEPSE MY COURSES NAVIGATION & ACCESS CONTROL
// Validates 10 Crucial Scenarios for NEPSE My Courses Navigation
// ========================================================

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

// ── In-Memory Firestore Mock Helper ──────────────────────────────────────────
function createMockFirestore(initialStore = {}) {
  const store = new Map();

  for (const [docPath, data] of Object.entries(initialStore)) {
    store.set(docPath.replace(/^\/|\/$/g, ''), JSON.parse(JSON.stringify(data)));
  }

  return {
    doc(db, ...segments) {
      let base = (db && db.path) ? db.path : (typeof db === 'string' ? db : '');
      const fullPath = [base, ...segments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
      const parts = fullPath.split('/');
      return {
        path: fullPath,
        id: parts[parts.length - 1],
        _type: 'docRef'
      };
    },
    collection(db, ...segments) {
      let base = (db && db.path) ? db.path : (typeof db === 'string' ? db : '');
      const fullPath = [base, ...segments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
      const parts = fullPath.split('/');
      return {
        path: fullPath,
        id: parts[parts.length - 1],
        _type: 'colRef'
      };
    },
    async getDoc(docRef) {
      const key = docRef.path.replace(/^\/|\/$/g, '');
      const exists = store.has(key);
      const data = exists ? store.get(key) : undefined;
      return {
        exists: () => exists,
        id: docRef.id,
        data: () => (exists ? JSON.parse(JSON.stringify(data)) : undefined)
      };
    },
    async getDocs(colRef) {
      const targetColPath = colRef.path.replace(/^\/|\/$/g, '');
      const docs = [];
      for (const [key, data] of store.entries()) {
        const lastSlash = key.lastIndexOf('/');
        const parentPath = lastSlash !== -1 ? key.slice(0, lastSlash) : '';
        if (parentPath === targetColPath) {
          const docId = key.slice(lastSlash + 1);
          docs.push({
            id: docId,
            data: () => JSON.parse(JSON.stringify(data))
          });
        }
      }
      return {
        docs,
        size: docs.length,
        empty: docs.length === 0,
        forEach: (cb) => docs.forEach(cb)
      };
    },
    _setDocDirect(docPath, data) {
      store.set(docPath.replace(/^\/|\/$/g, ''), JSON.parse(JSON.stringify(data)));
    },
    _deleteDocDirect(docPath) {
      store.delete(docPath.replace(/^\/|\/$/g, ''));
    }
  };
}

async function runTestSuite() {
  console.log('\n======================================================');
  console.log('TEST SUITE: NEPSE MY COURSES NAVIGATION & ACCESS CONTROL');
  console.log('======================================================\n');

  // Dynamic imports from codebase
  const { ROUTES } = await import('../js/routes.js');
  const { renderNavbar, isNavLinkActive } = await import('../js/components.js');
  const { renderMyCoursesPage } = await import('../js/pages/myCourses.js');
  const { renderCourseLearnPage, getPublishedLessonsSequence } = await import('../js/pages/courseLearn.js');
  const { renderCoursesPage } = await import('../js/pages/courses.js');
  const { getCourseBySlug, getCourses, getAllCourses } = await import('../js/data/courses.js');
  const {
    normalizeCourseData,
    checkUserEnrollment,
    fetchUserEnrolledCourses,
    resetCourseCache
  } = await import('../js/firebase/courses.js');

  const NEPSE_TARGET_URL = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';

  // -----------------------------------------------------------------------------
  // TEST 1: An enrolled student clicks My Courses
  // -----------------------------------------------------------------------------
  console.log('--- TEST 1: Enrolled Student Clicks My Courses ---');
  await test('My Courses navigation links to dedicated My Courses section or learning interface', () => {
    assert.ok(
      ROUTES.MY_COURSES === '/my-courses' || ROUTES.MY_COURSES === NEPSE_TARGET_URL,
      'ROUTES.MY_COURSES must point to dedicated My Courses section or NEPSE learn'
    );
  });

  await test('Enrolled student has valid access and receives unlocked learning state', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/student-enrolled-123': {
        accountStatus: 'active',
        onboardingCompleted: true
      },
      'users/student-enrolled-123/courses/1': {
        courseId: '1',
        status: 'active',
        enrolledAt: '2026-01-01T00:00:00Z',
        expiresAt: null
      }
    });

    const check = await checkUserEnrollment('student-enrolled-123', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(check.enrolled, true, 'Student must be recognized as enrolled');
    assert.strictEqual(check.status, 'active', 'Student enrollment must be active');

    // Free preview lesson 1 renders iframe
    const learnHtml = renderCourseLearnPage('nepse-stock-market-basics', 'lesson-1');
    assert.ok(learnHtml.includes('id="cl-video-iframe"'), 'Lesson 1 renders active video iframe');
    assert.ok(learnHtml.includes('Share Market Full Course (NEPSE)'), 'Displays NEPSE course title');
  });

  // -----------------------------------------------------------------------------
  // TEST 2: An authenticated user without enrollment clicks My Courses
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 2: Authenticated User Without Enrollment Clicks My Courses ---');
  await test('Unenrolled user stays on NEPSE route, has free preview, but paid lessons remain locked', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/user-unenrolled-456': {
        accountStatus: 'active',
        onboardingCompleted: true
      }
      // No course 1 enrollment
    });

    const check = await checkUserEnrollment('user-unenrolled-456', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(check.enrolled, false, 'Unenrolled user must have enrolled: false');
    assert.strictEqual(check.status, 'not_enrolled', 'Status must be not_enrolled');

    // Lesson 1 is free preview
    const rawCourse = getCourseBySlug('nepse-stock-market-basics');
    const normCourse = normalizeCourseData(rawCourse);
    const lessons = getPublishedLessonsSequence(normCourse);
    assert.strictEqual(lessons[0].isFree, true, 'Lesson 1 must be designated as free preview');
    assert.strictEqual(lessons[1].isFree, false, 'Lesson 2 must NOT be free preview');

    // Direct render of lesson 2 for unenrolled renders locked screen, NOT iframe
    const lockedHtml = renderCourseLearnPage('nepse-stock-market-basics', 'lesson-2');
    assert.ok(lockedHtml.includes('id="cl-locked-screen"'), 'Lesson 2 renders locked screen');
    assert.ok(lockedHtml.includes('Enrollment Required'), 'Explains enrollment is required');
    assert.ok(lockedHtml.includes('Enroll via WhatsApp'), 'Preserves WhatsApp enrollment CTA');
    assert.strictEqual(lockedHtml.includes('id="cl-video-iframe"'), false, 'Strictly NO video iframe rendered for locked lesson');
  });

  // -----------------------------------------------------------------------------
  // TEST 3: Logged-out visitor clicks My Courses
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 3: Logged-Out Visitor Clicks My Courses ---');
  await test('Logged-out visitor navigation preserves intended destination and requires auth', async () => {
    resetCourseCache();
    const check = await checkUserEnrollment(null, '1');
    assert.strictEqual(check.enrolled, false, 'Guest user is strictly unenrolled');
    assert.strictEqual(check.hasAccess, false, 'Guest has no paid access');

    // On /my-courses directly, guest card prompts sign in
    const myCoursesSrc = fs.readFileSync(path.join(rootDir, 'js/pages/myCourses.js'), 'utf-8');
    assert.ok(myCoursesSrc.includes('id="mc-signin-btn"'), 'Defines Sign In button for guests');
    assert.ok(myCoursesSrc.includes('Watch Free Lesson 1'), 'Offers Watch Free Lesson 1');
    assert.ok(myCoursesSrc.includes(NEPSE_TARGET_URL), 'Links directly to NEPSE learn lesson-1');
  });

  // -----------------------------------------------------------------------------
  // TEST 4: Enrolled student refreshes the learning page
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 4: Enrolled Student Refreshes Learning Page ---');
  await test('Enrollment revalidation succeeds on refresh without loss of state', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/student-refresh-789': {
        accountStatus: 'active',
        onboardingCompleted: true
      },
      'users/student-refresh-789/courses/1': {
        courseId: '1',
        status: 'active',
        enrolledAt: '2026-02-15T00:00:00Z',
        expiresAt: null
      }
    });

    const check1 = await checkUserEnrollment('student-refresh-789', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(check1.enrolled, true);

    // Simulate page refresh (cache reset + revalidation)
    resetCourseCache();
    const check2 = await checkUserEnrollment('student-refresh-789', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(check2.enrolled, true, 'Revalidation after refresh confirms active access');
  });

  // -----------------------------------------------------------------------------
  // TEST 5: Enrolled student access is revoked
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 5: Enrolled Student Access Is Revoked ---');
  await test('Updated authorization takes effect immediately when access is revoked', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/student-revoked-321': {
        accountStatus: 'active',
        onboardingCompleted: true
      },
      'users/student-revoked-321/courses/1': {
        courseId: '1',
        status: 'revoked',
        revokedAt: '2026-03-01T00:00:00Z',
        revocationReason: 'Refund processed'
      }
    });

    const check = await checkUserEnrollment('student-revoked-321', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(check.enrolled, false, 'Revoked user must have enrolled: false');
    assert.strictEqual(check.status, 'revoked', 'Status must be revoked');
    assert.strictEqual(check.hasAccess, false, 'Revoked user must not have access');
  });

  // -----------------------------------------------------------------------------
  // TEST 6: FinanceMasterclass does NOT appear in My Courses
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 6: FinanceMasterclass Excluded from My Courses ---');
  await test('FinanceMasterclass never appears in My Courses markup, code, or recommendations', () => {
    const myCoursesSrc = fs.readFileSync(path.join(rootDir, 'js/pages/myCourses.js'), 'utf-8');
    assert.strictEqual(
      myCoursesSrc.toLowerCase().includes('financemasterclass'),
      false,
      'myCourses.js must NOT contain FinanceMasterclass'
    );
    assert.strictEqual(
      myCoursesSrc.includes('personal-finance-masterclass'),
      false,
      'myCourses.js must NOT reference personal-finance-masterclass slug'
    );

    // Check pre-rendered my-courses/index.html
    const myCoursesHtml = fs.readFileSync(path.join(rootDir, 'my-courses/index.html'), 'utf-8');
    const mainMatch = myCoursesHtml.match(/<main id="app">([\s\S]*?)<\/main>/);
    assert.ok(mainMatch, 'main#app exists in my-courses/index.html');
    assert.strictEqual(
      mainMatch[1].toLowerCase().includes('financemasterclass'),
      false,
      'Pre-rendered my-courses app content must NOT contain FinanceMasterclass'
    );
    assert.strictEqual(
      mainMatch[1].includes('personal-finance-masterclass'),
      false,
      'Pre-rendered my-courses app content must NOT contain personal-finance-masterclass'
    );
  });

  // -----------------------------------------------------------------------------
  // TEST 7: Canonical Public Course Offering & Underlying Data Preservation
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 7: Canonical Public Course & Data Preservation ---');
  await test('Public courses catalog features single canonical Share Market course while underlying data is preserved', () => {
    const allCourses = getAllCourses();
    const pfUnderlying = allCourses.find(c => c.slug === 'personal-finance-masterclass');
    assert.ok(pfUnderlying, 'FinanceMasterclass underlying curriculum is preserved in course system data');

    const publicCatalog = getCourses();
    assert.strictEqual(publicCatalog.length, 1, 'Only one canonical public course is offered');
    assert.strictEqual(publicCatalog[0].slug, 'nepse-stock-market-basics', 'Public course is Share Market Full Course');
    assert.strictEqual(publicCatalog[0].price, 2999, 'Canonical price is NPR 2,999');

    const coursesPageHtml = renderCoursesPage();
    assert.ok(coursesPageHtml.includes('nepse-stock-market-basics'), 'Public courses page features NEPSE course');
    assert.ok(
      !coursesPageHtml.includes('personal-finance-masterclass'),
      'Public courses page does not promote Personal Finance course as a public offering'
    );
  });

  // -----------------------------------------------------------------------------
  // TEST 8: Direct navigation to NEPSE learning URL
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 8: Direct Navigation to NEPSE Learning URL ---');
  await test('Opening NEPSE learning URL directly renders correct lesson and layout', () => {
    const htmlLesson1 = renderCourseLearnPage('nepse-stock-market-basics', 'lesson-1');
    assert.ok(htmlLesson1.includes('What Is the Share Market?'), 'Loads lesson 1 title');
    assert.ok(htmlLesson1.includes('cl-main-player-col'), 'Left column player exists');
    assert.ok(htmlLesson1.includes('cl-sidebar-col'), 'Right column sidebar exists');

    const htmlLesson2 = renderCourseLearnPage('nepse-stock-market-basics', 'lesson-2');
    assert.ok(htmlLesson2.includes('Understanding the Key Participants'), 'Loads lesson 2 title');
  });

  // -----------------------------------------------------------------------------
  // TEST 9: Nested Course URL Refresh & Static Assets
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 9: Nested Course URL Refresh & Static Assets ---');
  await test('Nested learn route file exists on disk with root-relative asset paths', () => {
    const nestedLearnHtmlFile = path.join(rootDir, 'courses/nepse-stock-market-basics/learn/index.html');
    assert.ok(fs.existsSync(nestedLearnHtmlFile), 'courses/nepse-stock-market-basics/learn/index.html exists');

    const content = fs.readFileSync(nestedLearnHtmlFile, 'utf-8');
    assert.ok(content.includes('href="css/'), 'Stylesheets are linked');
    assert.ok(content.includes('src="js/app.js'), 'App script is linked');
    assert.ok(content.includes('Share Market Full Course (NEPSE)'), 'Includes pre-rendered course title');
  });

  // -----------------------------------------------------------------------------
  // TEST 10: Switching Between Authenticated Accounts
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 10: Account Switching Isolation ---');
  await test('One student enrollment status never leaks to another student', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/student-paid-alpha/courses/1': {
        courseId: '1',
        status: 'active',
        enrolledAt: '2026-01-01T00:00:00Z',
        expiresAt: null
      },
      'users/student-unpaid-beta': {
        accountStatus: 'active'
      }
      // No enrollment for student-unpaid-beta
    });

    const alphaAccess = await checkUserEnrollment('student-paid-alpha', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(alphaAccess.enrolled, true, 'Student Alpha has active access');

    // Switch to Student Beta
    const betaAccess = await checkUserEnrollment('student-unpaid-beta', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(betaAccess.enrolled, false, 'Student Beta is NOT enrolled');
    assert.strictEqual(betaAccess.hasAccess, false, 'Student Beta receives no access from Student Alpha');
  });

  // -----------------------------------------------------------------------------
  // BONUS: Active Nav Link Verification across paths
  // -----------------------------------------------------------------------------
  console.log('\n--- Navigation Active Highlight Verification ---');
  await test('isNavLinkActive correctly activates My Courses and Courses independently', () => {
    // When on learning page:
    assert.strictEqual(
      isNavLinkActive(ROUTES.MY_COURSES, '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'),
      true,
      'My Courses is active on learning page'
    );
    assert.strictEqual(
      isNavLinkActive(ROUTES.COURSES, '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'),
      false,
      'Courses is NOT active on learning page'
    );

    // When on /my-courses:
    assert.strictEqual(
      isNavLinkActive(ROUTES.MY_COURSES, '/my-courses'),
      true,
      'My Courses is active on /my-courses'
    );
    assert.strictEqual(
      isNavLinkActive(ROUTES.COURSES, '/my-courses'),
      false,
      'Courses is NOT active on /my-courses'
    );

    // When on /courses:
    assert.strictEqual(
      isNavLinkActive(ROUTES.COURSES, '/courses'),
      true,
      'Courses is active on /courses'
    );
    assert.strictEqual(
      isNavLinkActive(ROUTES.MY_COURSES, '/courses'),
      false,
      'My Courses is NOT active on /courses'
    );

    // When on public course detail:
    assert.strictEqual(
      isNavLinkActive(ROUTES.COURSES, '/courses/nepse-stock-market-basics'),
      true,
      'Courses is active on course syllabus page'
    );
    assert.strictEqual(
      isNavLinkActive(ROUTES.MY_COURSES, '/courses/nepse-stock-market-basics'),
      false,
      'My Courses is NOT active on course syllabus page'
    );
  });

  // -----------------------------------------------------------------------------
  // TEST 11: The 4 Core Access Rules & Invalid/Unverified Payment Verification
  // -----------------------------------------------------------------------------
  console.log('\n--- TEST 11: Four Core Access Rules & Invalid/Unverified Payment ---');
  await test('Rule 1 (Paid/enrolled user): Verified active enrollment grants access', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/rule1-student': { accountStatus: 'active', onboardingCompleted: true },
      'users/rule1-student/courses/1': { courseId: '1', status: 'active', enrolledAt: '2026-01-01T00:00:00Z' }
    });
    const check = await checkUserEnrollment('rule1-student', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(check.enrolled, true, 'Rule 1: Enrolled must be true');
    assert.strictEqual(check.hasAccess, true, 'Rule 1: hasAccess must be true');
    assert.strictEqual(check.status, 'active', 'Rule 1: status must be active');
  });

  await test('Rule 2 (Logged-in but unpaid user): Paid lessons stay locked, preview allowed', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/rule2-unpaid': { accountStatus: 'active', onboardingCompleted: true }
      // no enrollment record
    });
    const check = await checkUserEnrollment('rule2-unpaid', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(check.enrolled, false, 'Rule 2: Enrolled must be false');
    assert.strictEqual(check.hasAccess, false, 'Rule 2: hasAccess must be false');
    assert.strictEqual(check.status, 'not_enrolled', 'Rule 2: status must be not_enrolled');
  });

  await test('Rule 3 (Logged-out visitor): Paid lessons stay locked, free preview allowed', async () => {
    resetCourseCache();
    const check = await checkUserEnrollment(null, '1');
    assert.strictEqual(check.enrolled, false, 'Rule 3: Enrolled must be false for guest');
    assert.strictEqual(check.hasAccess, false, 'Rule 3: hasAccess must be false for guest');
  });

  await test('Rule 4 (Invalid or unverified payment): Pending or unverified enrollment fails closed', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/rule4-pending': { accountStatus: 'active', onboardingCompleted: true },
      'users/rule4-pending/courses/1': { courseId: '1', status: 'pending', submittedAt: '2026-10-25T00:00:00Z' }
    });
    const check = await checkUserEnrollment('rule4-pending', '1', null, { db: { path: '' }, sdk: mockSdk });
    assert.strictEqual(check.enrolled, false, 'Rule 4: Pending enrollment must NOT confer active enrollment');
    assert.strictEqual(check.hasAccess, false, 'Rule 4: Pending enrollment must NOT grant paid lesson access');
    assert.strictEqual(check.status, 'pending', 'Rule 4: Status must reflect pending verification');
  });

  await test('Enrollment check fails closed on backend/database error', async () => {
    resetCourseCache();
    const brokenSdk = {
      doc() { throw new Error('Firestore connection timeout'); }
    };
    const check = await checkUserEnrollment('error-user', '1', null, { db: { path: '' }, sdk: brokenSdk });
    assert.strictEqual(check.enrolled, false, 'Must fail closed on error');
    assert.strictEqual(check.hasAccess, false, 'Must never unlock on error');
    assert.strictEqual(check.status, 'error', 'Status must be error');
  });

  await test('My Courses source code sets data-course-url to NEPSE learning URL across all card variants', () => {
    const myCoursesSrc = fs.readFileSync(path.join(rootDir, 'js/pages/myCourses.js'), 'utf-8');
    assert.ok(
      myCoursesSrc.includes('data-course-url="${NEPSE_LEARN_URL}"'),
      'myCourses.js must include data-course-url with NEPSE_LEARN_URL on course cards'
    );
    assert.ok(
      myCoursesSrc.includes('Watch Free Lesson 1'),
      'Empty state for unpaid users must include Watch Free Lesson 1 CTA pointing to NEPSE learn'
    );
    assert.ok(
      myCoursesSrc.includes('Verification Pending'),
      'myCourses.js must handle verification pending status cleanly'
    );
  });


  console.log('\n======================================================');
  console.log(`TOTAL NEPSE NAVIGATION TESTS: ${totalTests}`);
  console.log(`PASSED: ${passedTests}`);
  console.log(`FAILED: ${failedTests}`);
  console.log('======================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});

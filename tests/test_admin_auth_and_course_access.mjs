// ========================================================
// RISEPAISA TEST SUITE: ADMIN AUTHORIZATION & COURSE ACCESS
// Validates 15 Specific Scenarios for Admin & Learning Access
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
function createMockFirestore(initialStore = {}, options = {}) {
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
      if (options.throwError) {
        throw options.throwError;
      }
      const data = store.get(docRef.path);
      const exists = data !== undefined;
      return {
        id: docRef.id,
        ref: docRef,
        exists: () => exists,
        data: () => (exists ? JSON.parse(JSON.stringify(data)) : undefined)
      };
    },
    async setDoc(docRef, data, opts = {}) {
      if (options.throwError) throw options.throwError;
      const existing = store.get(docRef.path) || {};
      const merged = opts.merge ? { ...existing, ...data } : data;
      store.set(docRef.path, JSON.parse(JSON.stringify(merged)));
    },
    async getDocs(colRef) {
      if (options.throwError) throw options.throwError;
      const docs = [];
      for (const [key, val] of store.entries()) {
        const parentCol = key.substring(0, key.lastIndexOf('/'));
        if (parentCol === colRef.path) {
          const docId = key.substring(key.lastIndexOf('/') + 1);
          docs.push({
            id: docId,
            data: () => JSON.parse(JSON.stringify(val)),
            exists: () => true
          });
        }
      }
      return {
        empty: docs.length === 0,
        size: docs.length,
        docs,
        forEach(cb) { docs.forEach(cb); }
      };
    },
    _getStore() {
      return store;
    }
  };
}

async function runTestSuite() {
  console.log('\n========================================================');
  console.log('TEST SUITE: ADMIN AUTHORIZATION & COURSE ACCESS (15 SCENARIOS)');
  console.log('========================================================\n');

  // Import application modules
  const {
    checkIsAdminDetailed,
    checkIsAdmin,
    isEnrollmentActive,
    resolveEnrollmentDisplayStatus,
    checkUserEnrollment,
    fetchUserEnrolledCourses,
    resetCourseCache,
    assertClientCannotEnroll,
    normalizeCourseData,
    toSafeYouTubeEmbedUrl,
    ENROLLMENT_STATUS
  } = await import('../js/firebase/courses.js');

  const { renderAdminCoursesPage } = await import('../js/pages/adminCourses.js');
  const { renderAdminEnrollmentsPage } = await import('../js/pages/adminEnrollments.js');
  const { renderMyCoursesPage } = await import('../js/pages/myCourses.js');
  const { renderCourseLearnPage, getPublishedLessonsSequence } = await import('../js/pages/courseLearn.js');
  const { default: rawCourses } = await import('../js/data/courses.js');

  const nepseCourse = normalizeCourseData(rawCourses.find(c => c.slug === 'nepse-stock-market-basics'));
  const allLessons = getPublishedLessonsSequence(nepseCourse);

  // ── SCENARIO 1: Signed-out visitor opens an admin route ──
  console.log('--- Scenario 1: Signed-Out Visitor Opens Admin Route ---');
  await test('checkIsAdminDetailed returns missing_uid when user is null', async () => {
    const res = await checkIsAdminDetailed(null);
    assert.strictEqual(res.isAdmin, false);
    assert.strictEqual(res.reason, 'missing_uid');
    assert.strictEqual(res.code, 'missing-uid');
  });

  await test('Admin SSR shells render secure initial markup without leaking admin console', async () => {
    const coursesShell = renderAdminCoursesPage();
    assert.ok(coursesShell.includes('ac-workspace'), 'Includes workspace container');
    assert.ok(!coursesShell.includes('All Platform Courses'), 'Does not leak course table in initial SSR shell');

    const enrollmentsShell = renderAdminEnrollmentsPage();
    assert.ok(enrollmentsShell.includes('ae-workspace'), 'Includes enrollments workspace container');
    assert.ok(!enrollmentsShell.includes('active-enrollments-table'), 'Does not leak enrollments table in SSR shell');
  });

  // ── SCENARIO 2: Signed-in ordinary user opens an admin route ──
  console.log('\n--- Scenario 2: Signed-In Ordinary User Opens Admin Route ---');
  await test('Ordinary user UID missing in admins collection is denied authorization', async () => {
    const mockSdk = createMockFirestore({
      'admins/admin-owner-uid': { role: 'admin', email: 'owner@risepaisa.com' }
    });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const res = await checkIsAdminDetailed('regular-user-uid', mockBundle);
    assert.strictEqual(res.isAdmin, false);
    assert.strictEqual(res.reason, 'not_in_allowlist');
    assert.strictEqual(res.code, 'not-found');
    assert.ok(res.message.includes('admins/regular-user-uid'), 'Mentions target document path');
  });

  // ── SCENARIO 3: Authorized administrator opens the course manager ──
  console.log('\n--- Scenario 3: Authorized Administrator Opens Course Manager ---');
  await test('Authorized admin UID in admins collection is granted admin privileges', async () => {
    const mockSdk = createMockFirestore({
      'admins/authorized-admin-uid': { role: 'admin', email: 'itsaakashdas@gmail.com' }
    });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const res = await checkIsAdminDetailed('authorized-admin-uid', mockBundle);
    assert.strictEqual(res.isAdmin, true);
    assert.strictEqual(res.reason, 'authorized');
    assert.strictEqual(res.code, 'authorized');
    assert.strictEqual(res.error, null);

    const isBoolAdmin = await checkIsAdmin('authorized-admin-uid', mockBundle);
    assert.strictEqual(isBoolAdmin, true);
  });

  // ── SCENARIO 4: Authorized administrator opens enrollment management ──
  console.log('\n--- Scenario 4: Authorized Administrator Opens Enrollment Management ---');
  await test('Enrollment management authorization verifies admins collection', async () => {
    const mockSdk = createMockFirestore({
      'admins/itsaakashdas-uid': { role: 'admin', email: 'itsaakashdas@gmail.com' }
    });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const res = await checkIsAdminDetailed('itsaakashdas-uid', mockBundle);
    assert.strictEqual(res.isAdmin, true);
    assert.strictEqual(res.reason, 'authorized');
  });

  // ── SCENARIO 5: Missing admin document ──
  console.log('\n--- Scenario 5: Missing Admin Document ---');
  await test('Missing admin document returns not_in_allowlist with exact target UID', async () => {
    const mockSdk = createMockFirestore({});
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const targetUid = 'non-existent-admin-uid-999';
    const res = await checkIsAdminDetailed(targetUid, mockBundle);
    assert.strictEqual(res.isAdmin, false);
    assert.strictEqual(res.reason, 'not_in_allowlist');
    assert.strictEqual(res.code, 'not-found');
    assert.ok(res.message.includes(targetUid), 'Error message provides exact missing document target UID');
  });

  // ── SCENARIO 6: Firestore permission-denied error ──
  console.log('\n--- Scenario 6: Firestore Permission-Denied Error ---');
  await test('Firestore permission-denied is categorized as permission_denied with informative guidance', async () => {
    const permissionError = new Error('Missing or insufficient permissions.');
    permissionError.code = 'permission-denied';

    const mockSdk = createMockFirestore({}, { throwError: permissionError });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const res = await checkIsAdminDetailed('some-user-uid', mockBundle);
    assert.strictEqual(res.isAdmin, false);
    assert.strictEqual(res.reason, 'permission_denied');
    assert.strictEqual(res.code, 'permission-denied');
    assert.ok(res.message.includes('Cloud Firestore Security Rules denied read access'), 'Diagnostic message references Firestore rules');
    assert.ok(res.message.includes('risepaisa-77278'), 'Diagnostic message references project risepaisa-77278');
  });

  // ── SCENARIO 7: Network failure ──
  console.log('\n--- Scenario 7: Network Failure ---');
  await test('Firestore network offline error is categorized as network_error', async () => {
    const netError = new Error('Could not reach Cloud Firestore backend. Failed to get document because the client is offline.');
    netError.code = 'unavailable';

    const mockSdk = createMockFirestore({}, { throwError: netError });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const res = await checkIsAdminDetailed('any-uid', mockBundle);
    assert.strictEqual(res.isAdmin, false);
    assert.strictEqual(res.reason, 'network_error');
    assert.strictEqual(res.code, 'network-error');
    assert.ok(res.message.includes('Network connection failed') || res.message.includes('unreachable'), 'Message clearly states network issue');
  });

  // ── SCENARIO 8: Signed-in user with no enrollments opens My Courses ──
  console.log('\n--- Scenario 8: Signed-In User With No Enrollments Opens My Courses ---');
  await test('My Courses SSR shell and empty state content structure', async () => {
    const html = renderMyCoursesPage();
    assert.ok(html.includes('Student Dashboard'), 'Includes Student Dashboard badge');
    assert.ok(html.includes('My Enrolled Courses'), 'Includes primary heading');
    assert.ok(html.includes('mc-content-slot'), 'Includes dynamic content slot');

    const myCoursesSrc = fs.readFileSync(path.join(rootDir, 'js/pages/myCourses.js'), 'utf-8');
    assert.ok(myCoursesSrc.includes('Your Learning Journey Starts Here'), 'Contains exact empty state heading');
    assert.ok(myCoursesSrc.includes("Courses you enroll in will appear here. Explore RisePaisa's courses"), 'Contains exact empty state description');
    assert.ok(myCoursesSrc.includes('Explore Courses'), 'Contains Explore Courses CTA');
    assert.ok(myCoursesSrc.includes('View NEPSE Course'), 'Contains View NEPSE Course CTA');
    assert.ok(myCoursesSrc.includes('mc-recommended-section'), 'Renders recommended featured masterclass');
  });

  // ── SCENARIO 9: Student with an active enrollment opens My Courses ──
  console.log('\n--- Scenario 9: Student with Active Enrollment Opens My Courses ---');
  await test('fetchUserEnrolledCourses returns active courses with progress and metadata', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/student-active-uid/courses/nepse-stock-market-basics': {
        courseId: 'nepse-stock-market-basics',
        status: 'active',
        enrolledAt: '2026-01-01T00:00:00Z',
        expiresAt: null
      }
    });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const enrolledList = await fetchUserEnrolledCourses('student-active-uid', mockBundle);
    assert.strictEqual(enrolledList.length, 1, 'Returns 1 enrolled course');
    assert.strictEqual(enrolledList[0].slug, 'nepse-stock-market-basics');
    assert.strictEqual(enrolledList[0].isActive, true);
    assert.strictEqual(enrolledList[0].enrollmentStatus, 'active');

    const myCoursesSrc = fs.readFileSync(path.join(rootDir, 'js/pages/myCourses.js'), 'utf-8');
    assert.ok(myCoursesSrc.includes('Continue Learning'), 'Renders Continue Learning button');
    assert.ok(myCoursesSrc.includes('Lifetime Access') || myCoursesSrc.includes('Access Valid Until'), 'Renders access duration info');
  });

  // ── SCENARIO 10: Student with active enrollment opens a protected lesson ──
  console.log('\n--- Scenario 10: Student with Active Enrollment Opens Protected Lesson ---');
  await test('Active enrollment unlocks protected lessons', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/student-active-uid/courses/nepse-stock-market-basics': {
        courseId: 'nepse-stock-market-basics',
        status: 'active',
        enrolledAt: '2026-01-01T00:00:00Z'
      }
    });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const check = await checkUserEnrollment('student-active-uid', 'nepse-stock-market-basics', mockBundle);
    assert.strictEqual(check.enrolled, true);
    assert.strictEqual(check.status, 'active');

    const lesson2 = allLessons.find(l => !l.isFree);
    assert.ok(lesson2, 'Protected lesson exists');
    assert.strictEqual(lesson2.isFree, false);

    const hasAccess = Boolean(lesson2.isFree || check.enrolled);
    assert.strictEqual(hasAccess, true, 'Student has access to protected lesson');

    const sampleVideoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const embedUrl = toSafeYouTubeEmbedUrl(sampleVideoUrl);
    assert.ok(embedUrl.includes('youtube-nocookie.com/embed/dQw4w9WgXcQ'), 'Produces safe embed URL');
  });

  // ── SCENARIO 11: Student with expired enrollment attempts to open a lesson ──
  console.log('\n--- Scenario 11: Student with Expired Enrollment Opens Lesson ---');
  await test('Expired enrollment is treated as inactive and blocks protected lesson', async () => {
    resetCourseCache();
    const pastDate = new Date(Date.now() - 86400000).toISOString();
    const expiredDoc = {
      courseId: 'nepse-stock-market-basics',
      status: 'active',
      enrolledAt: '2025-01-01T00:00:00Z',
      expiresAt: pastDate
    };

    assert.strictEqual(isEnrollmentActive(expiredDoc), false, 'isEnrollmentActive is false for past expiresAt');
    assert.strictEqual(resolveEnrollmentDisplayStatus(expiredDoc), 'expired', 'Status resolved as expired');

    const mockSdk = createMockFirestore({
      'users/student-expired-uid/courses/nepse-stock-market-basics': expiredDoc
    });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const check = await checkUserEnrollment('student-expired-uid', 'nepse-stock-market-basics', mockBundle);
    assert.strictEqual(check.enrolled, false, 'Expired enrollment does not grant course access');
    assert.strictEqual(check.status, 'expired', 'Returns expired status');

    const lesson2 = allLessons.find(l => !l.isFree);
    const hasAccess = Boolean(lesson2.isFree || check.enrolled);
    assert.strictEqual(hasAccess, false, 'Protected lesson access is denied');
  });

  // ── SCENARIO 12: Student with revoked enrollment attempts to open a lesson ──
  console.log('\n--- Scenario 12: Student with Revoked Enrollment Opens Lesson ---');
  await test('Revoked enrollment is blocked from accessing protected lesson', async () => {
    resetCourseCache();
    const revokedDoc = {
      courseId: 'nepse-stock-market-basics',
      status: 'revoked',
      enrolledAt: '2026-01-01T00:00:00Z',
      revokedAt: '2026-01-15T00:00:00Z'
    };

    assert.strictEqual(isEnrollmentActive(revokedDoc), false, 'isEnrollmentActive is false for revoked status');
    assert.strictEqual(resolveEnrollmentDisplayStatus(revokedDoc), 'revoked', 'Status resolved as revoked');

    const mockSdk = createMockFirestore({
      'users/student-revoked-uid/courses/nepse-stock-market-basics': revokedDoc
    });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const check = await checkUserEnrollment('student-revoked-uid', 'nepse-stock-market-basics', mockBundle);
    assert.strictEqual(check.enrolled, false, 'Revoked enrollment does not grant course access');
    assert.strictEqual(check.status, 'revoked');

    const lesson2 = allLessons.find(l => !l.isFree);
    const hasAccess = Boolean(lesson2.isFree || check.enrolled);
    assert.strictEqual(hasAccess, false, 'Protected lesson access is denied');
  });

  // ── SCENARIO 13: Guest accesses the designated free preview ──
  console.log('\n--- Scenario 13: Guest Accesses Designated Free Preview ---');
  await test('Free preview lesson is accessible to guests without enrollment', async () => {
    const freeLesson = allLessons.find(l => l.isFree);
    assert.ok(freeLesson, 'Free preview lesson exists');
    assert.strictEqual(freeLesson.isFree, true, 'Designated as free preview');
    assert.strictEqual(freeLesson.id, 'lesson-1', 'Free lesson ID matches canonical lesson-1');
    assert.strictEqual(freeLesson.title, 'What Is the Share Market?', 'Free lesson title matches What Is the Share Market?');

    const isEnrolled = false;
    const hasAccess = Boolean(freeLesson.isFree || isEnrolled);
    assert.strictEqual(hasAccess, true, 'Guest can watch free preview lesson');

    const embedUrl = toSafeYouTubeEmbedUrl(freeLesson.youtubeUrl);
    assert.ok(embedUrl.startsWith('https://www.youtube-nocookie.com/embed/'), 'Produces YouTube embed URL for free preview');

    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(html.includes(freeLesson.title), 'Renders free preview lesson title by default');
    assert.ok(html.includes('youtube-nocookie.com/embed/'), 'Initial SSR render embeds the free preview video');

    const paidLessons = allLessons.filter(l => !l.isFree);
    assert.ok(paidLessons.length >= 20, `Remaining ${paidLessons.length} lessons remain protected`);
  });

  // ── SCENARIO 14: User switches accounts after signing out ──
  console.log('\n--- Scenario 14: User Switches Accounts After Signing Out ---');
  await test('Sign-out resets course caches and isolates account access', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({
      'users/user-a/courses/nepse-stock-market-basics': {
        courseId: 'nepse-stock-market-basics',
        status: 'active'
      },
      'users/user-b/courses/nepse-stock-market-basics': {
        courseId: 'nepse-stock-market-basics',
        status: 'revoked'
      }
    });
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const checkA = await checkUserEnrollment('user-a', 'nepse-stock-market-basics', mockBundle);
    assert.strictEqual(checkA.enrolled, true, 'User A is active');

    resetCourseCache();

    const checkB = await checkUserEnrollment('user-b', 'nepse-stock-market-basics', mockBundle);
    assert.strictEqual(checkB.enrolled, false, 'User B is NOT enrolled (revoked)');
    assert.strictEqual(checkB.status, 'revoked');

    assert.notStrictEqual(checkA.enrolled, checkB.enrolled);
  });

  // ── SCENARIO 15: Enrollment is granted and student refreshes page ──
  console.log('\n--- Scenario 15: Enrollment Granted and Student Refreshes ---');
  await test('When admin grants enrollment, student refresh immediately detects access', async () => {
    resetCourseCache();
    const mockSdk = createMockFirestore({});
    const mockBundle = { db: { path: '' }, sdk: mockSdk };

    const checkBefore = await checkUserEnrollment('student-new-uid', 'nepse-stock-market-basics', mockBundle);
    assert.strictEqual(checkBefore.enrolled, false);

    await mockSdk.setDoc(
      mockSdk.doc(mockBundle.db, 'users', 'student-new-uid', 'courses', 'nepse-stock-market-basics'),
      {
        courseId: 'nepse-stock-market-basics',
        status: 'active',
        enrolledAt: new Date().toISOString(),
        grantedBy: 'admin-owner-uid'
      }
    );

    resetCourseCache();

    const checkAfter = await checkUserEnrollment('student-new-uid', 'nepse-stock-market-basics', mockBundle);
    assert.strictEqual(checkAfter.enrolled, true, 'Student is now enrolled');
    assert.strictEqual(checkAfter.status, 'active');
  });

  // ── Client Security Invariant Test ──
  console.log('\n--- Additional Invariant Tests: Client Security & Rule Files ---');
  await test('assertClientCannotEnroll throws immediately on client execution', () => {
    assert.throws(() => {
      assertClientCannotEnroll({ courseId: 'nepse-stock-market-basics' });
    }, /SECURITY ERROR: Client-side self-enrollment is forbidden/);
  });

  await test('firestore.rules file contains admins and student courses access rules', () => {
    const rulesPath = path.join(rootDir, 'firestore.rules');
    assert.ok(fs.existsSync(rulesPath), 'firestore.rules exists');
    const rules = fs.readFileSync(rulesPath, 'utf-8');

    assert.ok(rules.includes('match /admins/{adminUid}'), 'Contains match /admins/{adminUid} rule');
    assert.ok(rules.includes('request.auth.uid == adminUid'), 'Restricts admin read to own UID');
    assert.ok(rules.includes('match /courses/{courseId}'), 'Contains course enrollment rule under users collection');
    assert.ok(rules.includes('/users/{userId}/courses/{courseId}'), 'Contains user course enrollment path reference');
    assert.ok(rules.includes('allow write: if false;'), 'Admin writes are strictly forbidden from client SDK');
  });

  console.log('\n========================================================');
  console.log(`TEST SUITE RESULTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
  console.log('========================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTestSuite();

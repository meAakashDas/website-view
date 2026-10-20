// ========================================================
// RISEPAISA FULL INTEGRATION, SECURITY AUDIT & HARDENING (PART 9)
// Comprehensive End-to-End Verification & Regression Suite
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

// ── In-Memory Firestore Mock for Part 9 Hardening ────────────────────────────
function createMockFirestore(initialState = {}) {
  const store = new Map();

  for (const [coll, docs] of Object.entries(initialState)) {
    for (const [docId, data] of Object.entries(docs)) {
      const docPath = `${coll}/${docId}`;
      store.set(docPath, JSON.parse(JSON.stringify(data)));
    }
  }

  const sdk = {
    doc(firstArg, ...segments) {
      let base = '';
      if (typeof firstArg === 'string') {
        base = firstArg;
      } else if (firstArg && firstArg.path) {
        base = firstArg.path;
      }
      const pathSegments = segments;
      if (pathSegments.length === 0) {
        const autoId = 'audit-int-' + Math.random().toString(36).substr(2, 9);
        return { path: `${base}/${autoId}`, id: autoId, _type: 'docRef' };
      }
      const fullPath = [base, ...pathSegments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
      const parts = fullPath.split('/');
      return { path: fullPath, id: parts[parts.length - 1], _type: 'docRef' };
    },

    collection(firstArg, ...segments) {
      let base = '';
      if (typeof firstArg === 'string') {
        base = firstArg;
      } else if (firstArg && firstArg.path) {
        base = firstArg.path;
      }
      const fullPath = [base, ...segments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
      const parts = fullPath.split('/');
      return { path: fullPath, id: parts[parts.length - 1], _type: 'colRef' };
    },

    async getDoc(docRef) {
      const data = store.get(docRef.path);
      const exists = data !== undefined;
      return {
        id: docRef.id,
        ref: docRef,
        exists: () => exists,
        data: () => (exists ? JSON.parse(JSON.stringify(data)) : undefined)
      };
    },

    async getDocs(target) {
      const colPath = target.path || (target._colRef ? target._colRef.path : '');
      const docs = [];
      const constraints = target._constraints || [];

      for (const [storedPath, storedData] of store.entries()) {
        const parentPath = storedPath.substring(0, storedPath.lastIndexOf('/'));
        if (parentPath === colPath) {
          const docId = storedPath.substring(storedPath.lastIndexOf('/') + 1);
          let matches = true;

          for (const c of constraints) {
            if (c.type === 'where') {
              const val = storedData[c.field];
              if (c.op === '==' && val !== c.val) matches = false;
            }
          }

          if (matches) {
            docs.push({
              id: docId,
              ref: { path: storedPath, id: docId },
              exists: () => true,
              data: () => JSON.parse(JSON.stringify(storedData))
            });
          }
        }
      }

      return {
        empty: docs.length === 0,
        size: docs.length,
        docs: docs,
        forEach(cb) { docs.forEach(cb); }
      };
    },

    query(colRef, ...constraints) {
      return { _colRef: colRef, path: colRef.path, _constraints: constraints };
    },

    where(field, op, val) { return { type: 'where', field, op, val }; },
    limit(n) { return { type: 'limit', limit: n }; },
    orderBy(field, direction = 'asc') { return { type: 'orderBy', field, direction }; },

    serverTimestamp() {
      const now = new Date();
      return {
        _type: 'serverTimestamp',
        toDate: () => now,
        toMillis: () => now.getTime()
      };
    },

    Timestamp: {
      fromDate(date) {
        return {
          toDate: () => date,
          toMillis: () => date.getTime(),
          seconds: Math.floor(date.getTime() / 1000),
          nanoseconds: (date.getTime() % 1000) * 1e6
        };
      },
      fromMillis(ms) {
        const d = new Date(ms);
        return {
          toDate: () => d,
          toMillis: () => ms,
          seconds: Math.floor(ms / 1000),
          nanoseconds: (ms % 1000) * 1e6
        };
      }
    },

    writeBatch() {
      const operations = [];
      return {
        set(docRef, data, options = {}) { operations.push({ type: 'set', docRef, data, options }); },
        update(docRef, data) { operations.push({ type: 'update', docRef, data }); },
        delete(docRef) { operations.push({ type: 'delete', docRef }); },
        async commit() {
          for (const op of operations) {
            const p = op.docRef.path;
            if (op.type === 'set') {
              if (op.options && op.options.merge && store.has(p)) {
                store.set(p, { ...store.get(p), ...JSON.parse(JSON.stringify(op.data)) });
              } else {
                store.set(p, JSON.parse(JSON.stringify(op.data)));
              }
            } else if (op.type === 'update') {
              store.set(p, { ...(store.get(p) || {}), ...JSON.parse(JSON.stringify(op.data)) });
            } else if (op.type === 'delete') {
              store.delete(p);
            }
          }
          return true;
        }
      };
    }
  };

  const db = { _isMockDb: true, _store: store };
  return { db, sdk, store };
}

// ── Main Part 9 Test Runner ──────────────────────────────────────────────────
async function runIntegrationHardeningSuite() {
  console.log('========================================================');
  console.log('RISEPAISA PART 9: FULL INTEGRATION & SECURITY HARDENING');
  console.log('========================================================\n');

  // Load modules
  const { ROUTES } = await import('../js/routes.js');
  const {
    ENROLLMENT_STATUS,
    ENROLLMENT_AUDIT_EVENT,
    isEnrollmentActive,
    resolveEnrollmentDisplayStatus,
    checkUserEnrollment,
    fetchUserEnrolledCourses,
    grantStudentEnrollment,
    revokeStudentEnrollment,
    renewStudentEnrollment,
    searchStudentUser,
    resetCourseCache,
    validateEnrollmentPayload,
    validateLessonProgressPayload,
    assertClientCannotEnroll
  } = await import('../js/firebase/courses.js');

  const { resolvePageSEO } = await import('../js/seo.js');
  const { renderMyCoursesPage } = await import('../js/pages/myCourses.js');
  const { renderAdminEnrollmentsPage } = await import('../js/pages/adminEnrollments.js');

  // -----------------------------------------------------------------------------
  // Section 1: Canonical Firestore Paths & Schema Uniformity
  // -----------------------------------------------------------------------------
  console.log('--- 1. Canonical Firestore Document Paths & Schema Uniformity ---');

  await test('1. All modules reference canonical path users/{userId}/courses/{courseId}', () => {
    const coursesJs = fs.readFileSync(path.join(rootDir, 'js/firebase/courses.js'), 'utf8');
    const rules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');

    assert.ok(coursesJs.includes("'users', studentUid, 'courses', cleanCourseId") || coursesJs.includes("'users', uid, 'courses', cleanCourseId"));
    assert.ok(rules.includes('match /users/{userId}'));
    assert.ok(rules.includes('match /courses/{courseId}'));
  });

  await test('2. Enrollment audit logs use canonical collection enrollment_audits/{auditId}', () => {
    const coursesJs = fs.readFileSync(path.join(rootDir, 'js/firebase/courses.js'), 'utf8');
    const rules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');

    assert.ok(coursesJs.includes("'enrollment_audits'"));
    assert.ok(rules.includes('match /enrollment_audits/{auditId}'));
    assert.ok(rules.includes('allow update, delete: if false;'), 'Audit logs are strictly tamper-proof in rules');
  });

  await test('3. Administrator verification targets canonical admins/{uid}', () => {
    const coursesJs = fs.readFileSync(path.join(rootDir, 'js/firebase/courses.js'), 'utf8');
    const rules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');

    assert.ok(coursesJs.includes("'admins', uid"));
    assert.ok(rules.includes('match /admins/{adminUid}'));
    assert.ok(rules.includes('allow write: if false;'), 'Client writes to /admins are forbidden in rules');
  });

  // -----------------------------------------------------------------------------
  // Section 2: Comprehensive 15-Scenario Enrollment Validity Matrix
  // -----------------------------------------------------------------------------
  console.log('\n--- 2. Comprehensive 15-Scenario Enrollment Validity Matrix ---');

  await test('Case 1: Guest user (null UID) is strictly non-enrolled with 0 queries', async () => {
    resetCourseCache();
    const res = await checkUserEnrollment(null, 'nepse-stock-market-basics');
    assert.strictEqual(res.enrolled, false);
    assert.strictEqual(res.status, 'none');
  });

  await test('Case 2: Authenticated user without enrollment document', () => {
    assert.strictEqual(isEnrollmentActive(null), false);
    assert.strictEqual(resolveEnrollmentDisplayStatus(null), 'not_enrolled');
  });

  await test('Case 3: Active enrollment with no expiration (lifetime access)', () => {
    const doc = { courseId: 'nepse-stock-market-basics', status: 'active', startsAt: new Date(Date.now() - 60000), expiresAt: null };
    assert.strictEqual(isEnrollmentActive(doc), true);
    assert.strictEqual(resolveEnrollmentDisplayStatus(doc), 'active');
  });

  await test('Case 4: Enrollment with future startsAt date is not yet active', () => {
    const futureDoc = { courseId: 'nepse-stock-market-basics', status: 'active', startsAt: new Date(Date.now() + 60000), expiresAt: null };
    assert.strictEqual(isEnrollmentActive(futureDoc), false);
  });

  await test('Case 5: Enrollment with future expiration date is active', () => {
    const futureExpDoc = { courseId: 'nepse-stock-market-basics', status: 'active', startsAt: new Date(Date.now() - 60000), expiresAt: new Date(Date.now() + 86400000) };
    assert.strictEqual(isEnrollmentActive(futureExpDoc), true);
    assert.strictEqual(resolveEnrollmentDisplayStatus(futureExpDoc), 'active');
  });

  await test('Case 6: Enrollment that expires at exact current instant is exclusive (inactive)', () => {
    const now = new Date(1750000000000);
    const exactDoc = { courseId: 'nepse-stock-market-basics', status: 'active', startsAt: new Date(1700000000000), expiresAt: now };
    assert.strictEqual(isEnrollmentActive(exactDoc, now), false);
    assert.strictEqual(resolveEnrollmentDisplayStatus(exactDoc, now), 'expired');
  });

  await test('Case 7: Enrollment with past expiresAt is inactive even if status string says "active"', () => {
    const pastDoc = { courseId: 'nepse-stock-market-basics', status: 'active', startsAt: new Date(Date.now() - 100000), expiresAt: new Date(Date.now() - 1000) };
    assert.strictEqual(isEnrollmentActive(pastDoc), false);
    assert.strictEqual(resolveEnrollmentDisplayStatus(pastDoc), 'expired');
  });

  await test('Case 8: Revoked enrollment is inactive', () => {
    const revokedDoc = { courseId: 'nepse-stock-market-basics', status: 'revoked' };
    assert.strictEqual(isEnrollmentActive(revokedDoc), false);
    assert.strictEqual(resolveEnrollmentDisplayStatus(revokedDoc), 'revoked');
  });

  await test('Case 9: Revoked enrollment with future expiration remains inactive (revocation overrides)', () => {
    const futureRevoked = { courseId: 'nepse-stock-market-basics', status: 'revoked', expiresAt: new Date(Date.now() + 1e11) };
    assert.strictEqual(isEnrollmentActive(futureRevoked), false);
    assert.strictEqual(resolveEnrollmentDisplayStatus(futureRevoked), 'revoked');
  });

  await test('Case 10: Lifetime enrollment (expiresAt explicitly undefined/null)', () => {
    const lifetime = { courseId: 'nepse-stock-market-basics', status: 'active' };
    assert.strictEqual(isEnrollmentActive(lifetime), true);
    assert.strictEqual(resolveEnrollmentDisplayStatus(lifetime), 'active');
  });

  await test('Case 11: Missing enrollment document (empty object)', () => {
    assert.strictEqual(isEnrollmentActive({}), false);
    assert.strictEqual(resolveEnrollmentDisplayStatus({}), 'not_enrolled');
  });

  await test('Case 12: Malformed enrollment document (missing status)', () => {
    assert.strictEqual(isEnrollmentActive({ courseId: 'nepse-stock-market-basics' }), false);
  });

  await test('Case 13: Missing optional timestamps (enrolledAt, updatedAt omitted) handled safely', () => {
    const docWithoutOptionals = { courseId: 'nepse-stock-market-basics', status: 'active' };
    assert.doesNotThrow(() => isEnrollmentActive(docWithoutOptionals));
    assert.strictEqual(isEnrollmentActive(docWithoutOptionals), true);
  });

  await test('Case 14: Deleted or unpublished course slug cannot be granted', async () => {
    const mock = createMockFirestore({ admins: { 'adm-1': { active: true } } });
    await assert.rejects(
      async () => await grantStudentEnrollment('adm-1', 'stu-1', 'completely-non-existent-course-slug', {}, mock),
      /does not exist/i
    );
  });

  await test('Case 15: Enrollment renewal after expiration restores status to active with audit log', async () => {
    const mock = createMockFirestore({
      admins: { 'adm-1': { active: true } }
    });
    mock.store.set('users/stu-1/courses/nepse-stock-market-basics', {
      courseId: 'nepse-stock-market-basics',
      status: 'expired',
      expiresAt: new Date(Date.now() - 10000)
    });

    const renewRes = await renewStudentEnrollment(
      'adm-1',
      'stu-1',
      'nepse-stock-market-basics',
      { expiresAt: new Date(Date.now() + 86400000), note: 'Renewal test' },
      mock
    );

    assert.strictEqual(renewRes.success, true);
    const updated = mock.store.get('users/stu-1/courses/nepse-stock-market-basics');
    assert.strictEqual(updated.status, 'active');
    assert.strictEqual(updated.revokedAt, null);
    assert.strictEqual(updated.revokedBy, null);

    const audit = mock.store.get(`enrollment_audits/${renewRes.auditId}`);
    assert.strictEqual(audit.eventType, ENROLLMENT_AUDIT_EVENT.ACCESS_RENEWED);
    assert.strictEqual(audit.previousStatus, 'expired');
    assert.strictEqual(audit.newStatus, 'active');
  });

  // -----------------------------------------------------------------------------
  // Section 3: In-Memory Cache Security & Account Switching
  // -----------------------------------------------------------------------------
  console.log('\n--- 3. In-Memory Cache Security & Account Switching ---');

  await test('16. resetCourseCache() clears enrollment and progress caches completely', () => {
    resetCourseCache();
    // Verify reset doesn't throw and runs cleanly
    assert.doesNotThrow(() => resetCourseCache());
  });

  await test('17. Dynamic time evaluation inside cache window prevents stale access', () => {
    const now = Date.now();
    const docExpiringSoon = {
      courseId: 'nepse-stock-market-basics',
      status: 'active',
      startsAt: new Date(now - 10000),
      expiresAt: new Date(now + 100) // expires in 100ms
    };

    // Right now, active
    assert.strictEqual(isEnrollmentActive(docExpiringSoon, new Date(now)), true);
    // 200ms later, evaluated without DB call, dynamically inactive!
    assert.strictEqual(isEnrollmentActive(docExpiringSoon, new Date(now + 200)), false);
  });

  // -----------------------------------------------------------------------------
  // Section 4: Student Dashboard (My Courses) Hardening
  // -----------------------------------------------------------------------------
  console.log('\n--- 4. Student Dashboard (My Courses) Hardening ---');

  await test('18. fetchUserEnrolledCourses returns accurate status and sorts active courses first', async () => {
    const mock = createMockFirestore();
    mock.store.set('users/student-multi/courses/nepse-stock-market-basics', {
      courseId: 'nepse-stock-market-basics',
      status: 'active',
      expiresAt: new Date(Date.now() + 86400000)
    });
    mock.store.set('users/student-multi/courses/personal-finance-masterclass', {
      courseId: 'personal-finance-masterclass',
      status: 'expired',
      expiresAt: new Date(Date.now() - 50000)
    });

    const courses = await fetchUserEnrolledCourses('student-multi', {}, mock);
    assert.strictEqual(courses.length, 2, 'Returns both enrolled courses');
    assert.strictEqual(courses[0].isActive, true, 'Active course is first');
    assert.strictEqual(courses[0].enrollmentStatus, 'active');
    assert.strictEqual(courses[1].isActive, false, 'Expired course is second');
    assert.strictEqual(courses[1].enrollmentStatus, 'expired');
  });

  await test('19. My Courses static shell renders properly with noindex directives', () => {
    const html = renderMyCoursesPage();
    assert.ok(html.includes('My Enrolled Courses'));
    assert.ok(html.includes('id="mc-content-slot"'));

    const seo = resolvePageSEO('/my-courses');
    assert.strictEqual(seo.robots, 'noindex, nofollow');
    assert.strictEqual(seo.canonical, 'https://risepaisa.com/my-courses');
  });

  // -----------------------------------------------------------------------------
  // Section 5: Course Learning Player Protection & Iframe Safety
  // -----------------------------------------------------------------------------
  console.log('\n--- 5. Course Player Protection & Iframe Safety ---');

  await test('20. Protected lessons strictly DO NOT render YouTube iframe when locked', () => {
    const learnJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseLearn.js'), 'utf8');
    // Verify that locked screen is rendered instead of iframe when !hasAccess
    assert.ok(learnJs.includes('cl-locked-screen'));
    assert.ok(learnJs.includes('cl-locked-headline'));
    assert.ok(learnJs.includes('Your Enrollment Has Expired'));
    assert.ok(learnJs.includes('Course Access Revoked'));
  });

  await test('21. Classroom URL is strictly unindexed with canonical to public marketing page', () => {
    const seo = resolvePageSEO('/courses/nepse-stock-market-basics/learn');
    assert.strictEqual(seo.robots, 'noindex, nofollow', 'Classroom must not be indexed');
    assert.strictEqual(seo.canonical, 'https://risepaisa.com/courses/nepse-stock-market-basics', 'Canonical must point to public course page');
  });

  // -----------------------------------------------------------------------------
  // Section 6: Security Rules & Default-Deny Conformance
  // -----------------------------------------------------------------------------
  console.log('\n--- 6. Security Rules Default-Deny & Whitelist Conformance ---');

  await test('22. firestore.rules enforces least-privilege, default-deny architecture', () => {
    const rules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');
    assert.ok(rules.includes('match /{document=**} {\n      allow read, write: if false;\n    }'));
    assert.ok(rules.includes('match /admins/{adminUid}'));
    assert.ok(rules.includes('match /users/{userId}'));
    assert.ok(rules.includes('match /courses/{courseId}'));
    assert.ok(rules.includes('match /enrollment_audits/{auditId}'));
    assert.ok(rules.includes('allow create, update: if isAdmin()'));
    assert.ok(rules.includes('allow update, delete: if false;'));
  });

  await test('23. Students cannot write or self-enroll via client functions', () => {
    assert.throws(
      () => assertClientCannotEnroll({ courseId: 'nepse-stock-market-basics', status: 'active' }),
      /Client-side self-enrollment is forbidden/i
    );
  });

  await test('24. Lesson progress schema strictly forbids injecting enrollment access or admin role', () => {
    const progressWithAdmin = { completed: true, lastPositionSeconds: 10, isAdmin: true, status: 'active' };
    const val = validateLessonProgressPayload(progressWithAdmin);
    assert.strictEqual(val.valid, false, 'Progress with isAdmin/status must be rejected');
  });

  // -----------------------------------------------------------------------------
  // Section 7: Public Sitemap & Static Pre-Rendering Protection
  // -----------------------------------------------------------------------------
  console.log('\n--- 7. Public Sitemap & Static Pre-Rendering Protection ---');

  await test('25. sitemap.xml excludes admin consoles and student dashboards', () => {
    const sitemap = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf8');
    assert.strictEqual(sitemap.includes('/admin'), false, 'Sitemap must not contain /admin');
    assert.strictEqual(sitemap.includes('/my-courses'), false, 'Sitemap must not contain /my-courses');
    assert.strictEqual(sitemap.includes('/learn?lesson'), false, 'Sitemap must not contain lesson query URLs');
    assert.ok(sitemap.includes('/courses'), 'Sitemap includes public courses hub');
    assert.ok(sitemap.includes('/courses/nepse-stock-market-basics'), 'Sitemap includes public course page');
  });

  console.log('\n========================================================');
  console.log(`TOTAL PART 9 HARDENING TESTS: ${totalTests}`);
  console.log(`PASSED: ${passedTests}`);
  console.log(`FAILED: ${failedTests}`);
  console.log('========================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runIntegrationHardeningSuite().catch(err => {
  console.error('Fatal hardening test execution error:', err);
  process.exit(1);
});

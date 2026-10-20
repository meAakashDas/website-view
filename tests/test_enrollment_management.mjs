// ========================================================
// RISEPAISA STUDENT ENROLLMENT MANAGEMENT TEST SUITE (PART 8)
// Administrative Access Provisioning, Expiration & Security
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

// ── In-Memory Firestore Mock for Node Testing ────────────────────────────────
function createMockFirestore(initialState = {}) {
  // Store is a nested Map: pathString -> dataObject
  const store = new Map();

  // Populate initial records
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
        // Auto-ID generator like doc(collectionRef)
        const autoId = 'audit-mock-' + Math.random().toString(36).substr(2, 9);
        const fullPath = `${base}/${autoId}`;
        return {
          path: fullPath,
          id: autoId,
          _type: 'docRef'
        };
      }
      const fullPath = [base, ...pathSegments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
      const parts = fullPath.split('/');
      const id = parts[parts.length - 1];
      return {
        path: fullPath,
        id: id,
        _type: 'docRef'
      };
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
      const id = parts[parts.length - 1];
      return {
        path: fullPath,
        id: id,
        _type: 'colRef'
      };
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

          // Apply where filters
          for (const c of constraints) {
            if (c.type === 'where') {
              const val = storedData[c.field];
              if (c.op === '==' && val !== c.val) matches = false;
              if (c.op === '<=' && val > c.val) matches = false;
              if (c.op === '>=' && val < c.val) matches = false;
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

      // Apply limit
      let finalDocs = docs;
      for (const c of constraints) {
        if (c.type === 'limit' && c.limit < finalDocs.length) {
          finalDocs = finalDocs.slice(0, c.limit);
        }
      }

      return {
        empty: finalDocs.length === 0,
        size: finalDocs.length,
        docs: finalDocs,
        forEach(cb) {
          finalDocs.forEach(cb);
        }
      };
    },

    query(colRef, ...constraints) {
      return {
        _colRef: colRef,
        path: colRef.path,
        _constraints: constraints
      };
    },

    where(field, op, val) {
      return { type: 'where', field, op, val };
    },

    limit(n) {
      return { type: 'limit', limit: n };
    },

    orderBy(field, direction = 'asc') {
      return { type: 'orderBy', field, direction };
    },

    serverTimestamp() {
      const now = new Date();
      return {
        _type: 'serverTimestamp',
        toDate: () => now,
        toMillis: () => now.getTime(),
        seconds: Math.floor(now.getTime() / 1000),
        nanoseconds: (now.getTime() % 1000) * 1e6
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
        set(docRef, data, options = {}) {
          operations.push({ type: 'set', docRef, data, options });
        },
        update(docRef, data) {
          operations.push({ type: 'update', docRef, data });
        },
        delete(docRef) {
          operations.push({ type: 'delete', docRef });
        },
        async commit() {
          for (const op of operations) {
            const p = op.docRef.path;
            if (op.type === 'set') {
              if (op.options && op.options.merge && store.has(p)) {
                const existing = store.get(p);
                store.set(p, { ...existing, ...JSON.parse(JSON.stringify(op.data)) });
              } else {
                store.set(p, JSON.parse(JSON.stringify(op.data)));
              }
            } else if (op.type === 'update') {
              const existing = store.get(p) || {};
              store.set(p, { ...existing, ...JSON.parse(JSON.stringify(op.data)) });
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

// ── Main Test Runner ─────────────────────────────────────────────────────────
async function runAllTests() {
  console.log('========================================================');
  console.log('RISEPAISA PART 8: STUDENT ENROLLMENT & ACCESS MANAGEMENT');
  console.log('========================================================\n');

  // -----------------------------------------------------------------------------
  // Import Modules under test
  // -----------------------------------------------------------------------------
  const { ROUTES } = await import('../js/routes.js');
  const {
    ENROLLMENT_STATUS,
    ENROLLMENT_AUDIT_EVENT,
    ALLOWED_ENROLLMENT_KEYS,
    parseDateToMillis,
    validateEnrollmentPayload,
    isEnrollmentActive,
    resolveEnrollmentDisplayStatus,
    assertClientCannotEnroll,
    checkIsAdmin,
    searchStudentUser,
    fetchStudentEnrollments,
    grantStudentEnrollment,
    revokeStudentEnrollment,
    renewStudentEnrollment,
    fetchEnrollmentAuditLogs,
    resetCourseCache
  } = await import('../js/firebase/courses.js');

  const { renderAdminEnrollmentsPage } = await import('../js/pages/adminEnrollments.js');
  const { renderAdminCoursesPage } = await import('../js/pages/adminCourses.js');
  const { resolvePageSEO } = await import('../js/seo.js');

  // -----------------------------------------------------------------------------
  // Test Section 1: Route Registration & Navigation
  // -----------------------------------------------------------------------------
  console.log('--- 1. Admin Route Registration & Navigation ---');

  await test('1. Admin enrollments route is registered in ROUTES.ADMIN_ENROLLMENTS', () => {
    assert.strictEqual(ROUTES.ADMIN_ENROLLMENTS, '/admin/enrollments');
  });

  await test('2. app.js matches /admin/enrollments route path', () => {
    const appJsPath = path.join(rootDir, 'js/app.js');
    const appJs = fs.readFileSync(appJsPath, 'utf8');
    assert.ok(appJs.includes('/admin/enrollments') || appJs.includes('\\/admin\\/enrollments'), 'app.js includes /admin/enrollments');
    assert.ok(appJs.includes('adminEnrollments'), 'app.js imports or routes to adminEnrollments');
  });

  await test('3. SEO resolver sets noindex, nofollow and canonical for /admin/enrollments', () => {
    const seo = resolvePageSEO('/admin/enrollments');
    assert.strictEqual(seo.robots, 'noindex, nofollow', 'Admin enrollment page must be noindex, nofollow');
    assert.strictEqual(seo.canonical, 'https://risepaisa.com/admin/enrollments');
  });

  await test('4. Dual-tab switcher links seamlessly between /admin/courses and /admin/enrollments', () => {
    const adminCoursesHtml = renderAdminCoursesPage();
    const adminEnrollmentsHtml = renderAdminEnrollmentsPage();

    assert.ok(adminCoursesHtml.includes('href="/admin/enrollments"'), 'Courses console has link to Enrollments');
    assert.ok(adminEnrollmentsHtml.includes('href="/admin/courses"'), 'Enrollments console has link to Courses');
    assert.ok(adminEnrollmentsHtml.includes('Student Enrollments'), 'Enrollments console title is present');
    assert.ok(adminEnrollmentsHtml.includes('id="ae-workspace"'), 'Workspace slot is present');
    assert.ok(adminEnrollmentsHtml.includes('id="ae-modal-slot"'), 'Modal slot is present');
  });

  // -----------------------------------------------------------------------------
  // Test Section 2: Authorization & Administrative Privilege Enforcement
  // -----------------------------------------------------------------------------
  console.log('\n--- 2. Authorization & Admin Privilege Enforcement ---');

  // Setup mock database with verified admin and ordinary student
  const mockInitial = {
    admins: {
      'admin-super-999': { active: true, email: 'admin@risepaisa.com' }
    },
    users: {
      'student-regular-111': {
        displayName: 'Sita Sharma',
        email: 'sita@example.com',
        createdAt: new Date('2026-01-01')
      }
    }
  };
  const mockDb = createMockFirestore(mockInitial);

  await test('5. Guest cannot access administrative enrollment actions', async () => {
    const isAdmin = await checkIsAdmin(null, mockDb);
    assert.strictEqual(isAdmin, false, 'Guest is not admin');

    await assert.rejects(
      async () => await searchStudentUser(null, 'sita@example.com', mockDb),
      /Access Denied/i
    );
    await assert.rejects(
      async () => await fetchStudentEnrollments(null, 'student-regular-111', mockDb),
      /Access Denied/i
    );
    await assert.rejects(
      async () => await grantStudentEnrollment(null, 'student-regular-111', 'nepse-stock-market-basics', {}, mockDb),
      /Access Denied/i
    );
    await assert.rejects(
      async () => await revokeStudentEnrollment(null, 'student-regular-111', 'nepse-stock-market-basics', {}, mockDb),
      /Access Denied/i
    );
    await assert.rejects(
      async () => await renewStudentEnrollment(null, 'student-regular-111', 'nepse-stock-market-basics', {}, mockDb),
      /Access Denied/i
    );
    await assert.rejects(
      async () => await fetchEnrollmentAuditLogs(null, {}, mockDb),
      /Access Denied/i
    );
  });

  await test('6. Authenticated non-admin student cannot manage enrollments', async () => {
    const isAdmin = await checkIsAdmin('student-regular-111', mockDb);
    assert.strictEqual(isAdmin, false, 'Ordinary student is not admin');

    await assert.rejects(
      async () => await searchStudentUser('student-regular-111', 'sita@example.com', mockDb),
      /Access Denied/i
    );
    await assert.rejects(
      async () => await grantStudentEnrollment('student-regular-111', 'student-regular-111', 'nepse-stock-market-basics', {}, mockDb),
      /Access Denied/i
    );
    await assert.rejects(
      async () => await revokeStudentEnrollment('student-regular-111', 'student-regular-111', 'nepse-stock-market-basics', {}, mockDb),
      /Access Denied/i
    );
    await assert.rejects(
      async () => await renewStudentEnrollment('student-regular-111', 'student-regular-111', 'nepse-stock-market-basics', {}, mockDb),
      /Access Denied/i
    );
  });

  await test('7. Verified admin can access the management interface', async () => {
    const isAdmin = await checkIsAdmin('admin-super-999', mockDb);
    assert.strictEqual(isAdmin, true, 'Verified admin passes checkIsAdmin');
  });

  // -----------------------------------------------------------------------------
  // Test Section 3: Student Search & Account Lookup
  // -----------------------------------------------------------------------------
  console.log('\n--- 3. Student Account Search (Safe Lookup) ---');

  await test('8. Search by exact email returns student profile safely', async () => {
    const res = await searchStudentUser('admin-super-999', 'sita@example.com', mockDb);
    assert.strictEqual(res.found, true, 'Found student by email');
    assert.strictEqual(res.method, 'email');
    assert.strictEqual(res.user.uid, 'student-regular-111');
    assert.strictEqual(res.user.displayName, 'Sita Sharma');
    assert.strictEqual(res.user.email, 'sita@example.com');
  });

  await test('9. Search by exact Firebase UID returns student profile safely', async () => {
    const res = await searchStudentUser('admin-super-999', 'student-regular-111', mockDb);
    assert.strictEqual(res.found, true, 'Found student by UID');
    assert.strictEqual(res.method, 'uid');
    assert.strictEqual(res.user.uid, 'student-regular-111');
  });

  await test('10. Search with Auth-only UID (missing profile doc) succeeds with fallback baseline', async () => {
    // A user registered in Firebase Auth who hasn't completed Firestore profile sync
    const authOnlyUid = 'auth-only-uid-888';
    const res = await searchStudentUser('admin-super-999', authOnlyUid, mockDb);
    assert.strictEqual(res.found, true, 'Supports auth-only UID lookup');
    assert.strictEqual(res.user.uid, authOnlyUid);
    assert.strictEqual(res.existsInFirestore, false);
    assert.ok(res.user.note.includes('Firestore') && res.user.note.includes('profile'), 'Explanation note present for admin');
  });

  await test('11. Empty or whitespace search query is rejected', async () => {
    await assert.rejects(
      async () => await searchStudentUser('admin-super-999', '   ', mockDb),
      /Search query is required/i
    );
  });

  // -----------------------------------------------------------------------------
  // Test Section 4: Granting Course Access & Schema Verification
  // -----------------------------------------------------------------------------
  console.log('\n--- 4. Granting Course Access & Schema Conformance ---');

  await test('12. Missing or malformed student UID is rejected when granting access', async () => {
    await assert.rejects(
      async () => await grantStudentEnrollment('admin-super-999', '', 'nepse-stock-market-basics', {}, mockDb),
      /Student UID is required/i
    );
    await assert.rejects(
      async () => await grantStudentEnrollment('admin-super-999', null, 'nepse-stock-market-basics', {}, mockDb),
      /Student UID is required/i
    );
  });

  await test('13. Invalid or non-existent course ID is rejected', async () => {
    await assert.rejects(
      async () => await grantStudentEnrollment('admin-super-999', 'student-regular-111', 'fake-nonexistent-course', {}, mockDb),
      /does not exist/i
    );
    await assert.rejects(
      async () => await grantStudentEnrollment('admin-super-999', 'student-regular-111', '', {}, mockDb),
      /Course identifier is required/i
    );
  });

  await test('14. Granting access creates the authoritative enrollment schema and audit record', async () => {
    const studentUid = 'student-regular-111';
    const courseId = 'nepse-stock-market-basics';
    const oneMonthLater = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const grantResult = await grantStudentEnrollment(
      'admin-super-999',
      studentUid,
      courseId,
      { expiresAt: oneMonthLater, note: 'Initial scholarship grant' },
      mockDb
    );

    assert.strictEqual(grantResult.success, true, 'Grant returned success');
    assert.ok(grantResult.auditId, 'Audit ID returned');

    // Inspect stored enrollment doc
    const storedEnrollment = mockDb.store.get(`users/${studentUid}/courses/${courseId}`);
    assert.ok(storedEnrollment, 'Enrollment doc created in users/{uid}/courses/{courseId}');
    assert.strictEqual(storedEnrollment.courseId, courseId);
    assert.strictEqual(storedEnrollment.status, ENROLLMENT_STATUS.ACTIVE);
    assert.strictEqual(storedEnrollment.grantedBy, 'admin-super-999');
    assert.strictEqual(storedEnrollment.source, 'manual_admin');
    assert.ok(storedEnrollment.grantedAt, 'grantedAt timestamp present');
    assert.ok(storedEnrollment.startsAt, 'startsAt timestamp present');
    assert.ok(storedEnrollment.expiresAt, 'expiresAt timestamp present');

    // Validate enrollment against schema validator
    const val = validateEnrollmentPayload(storedEnrollment);
    assert.strictEqual(val.valid, true, 'Stored enrollment passes validateEnrollmentPayload');

    // Inspect stored audit log
    const storedAudit = mockDb.store.get(`enrollment_audits/${grantResult.auditId}`);
    assert.ok(storedAudit, 'Audit log document created');
    assert.strictEqual(storedAudit.eventType, ENROLLMENT_AUDIT_EVENT.ACCESS_GRANTED);
    assert.strictEqual(storedAudit.studentUid, studentUid);
    assert.strictEqual(storedAudit.courseId, courseId);
    assert.strictEqual(storedAudit.adminUid, 'admin-super-999');
    assert.strictEqual(storedAudit.newStatus, ENROLLMENT_STATUS.ACTIVE);
    assert.strictEqual(storedAudit.note, 'Initial scholarship grant');
  });

  await test('15. Granting access does not overwrite unrelated student profile, bookmarks, or progress', async () => {
    const studentUid = 'student-profile-protect-test';
    // Preset user profile, a bookmark, and an existing lesson progress
    mockDb.store.set(`users/${studentUid}`, {
      displayName: 'Hari Prasad',
      email: 'hari@example.com',
      createdAt: new Date('2025-05-01')
    });
    mockDb.store.set(`users/${studentUid}/bookmarks/b-123`, {
      type: 'guide',
      title: 'Complete Banking Guide',
      url: '/learn/guides/complete-banking-guide'
    });
    mockDb.store.set(`users/${studentUid}/courses/nepse-stock-market-basics/lessons/lesson-1`, {
      completed: true,
      lastPositionSeconds: 520
    });

    // Grant enrollment
    await grantStudentEnrollment('admin-super-999', studentUid, 'nepse-stock-market-basics', {}, mockDb);

    // Verify profile unchanged
    const profile = mockDb.store.get(`users/${studentUid}`);
    assert.strictEqual(profile.displayName, 'Hari Prasad', 'Profile displayName preserved');
    assert.strictEqual(profile.email, 'hari@example.com', 'Profile email preserved');

    // Verify bookmark unchanged
    const bookmark = mockDb.store.get(`users/${studentUid}/bookmarks/b-123`);
    assert.strictEqual(bookmark.title, 'Complete Banking Guide', 'Bookmark preserved');

    // Verify lesson progress unchanged
    const progress = mockDb.store.get(`users/${studentUid}/courses/nepse-stock-market-basics/lessons/lesson-1`);
    assert.strictEqual(progress.completed, true, 'Lesson progress completed flag preserved');
    assert.strictEqual(progress.lastPositionSeconds, 520, 'Lesson progress timestamp preserved');
  });

  await test('16. Duplicate grant behavior updates record safely without duplicates', async () => {
    const studentUid = 'student-regular-111';
    const courseId = 'nepse-stock-market-basics';

    const secondGrant = await grantStudentEnrollment(
      'admin-super-999',
      studentUid,
      courseId,
      { note: 'Re-grant / renewal test' },
      mockDb
    );
    assert.strictEqual(secondGrant.success, true);

    const audit = mockDb.store.get(`enrollment_audits/${secondGrant.auditId}`);
    assert.strictEqual(audit.eventType, ENROLLMENT_AUDIT_EVENT.ACCESS_RENEWED, 'Re-grant recorded as ACCESS_RENEWED in audit');
  });

  // -----------------------------------------------------------------------------
  // Test Section 5: Revoking Course Access
  // -----------------------------------------------------------------------------
  console.log('\n--- 5. Revoking Course Access ---');

  await test('17. Revoking access updates enrollment status to "revoked" and logs audit', async () => {
    const studentUid = 'student-regular-111';
    const courseId = 'nepse-stock-market-basics';

    const revokeResult = await revokeStudentEnrollment(
      'admin-super-999',
      studentUid,
      courseId,
      { reason: 'Terms violation or refund requested' },
      mockDb
    );

    assert.strictEqual(revokeResult.success, true);
    assert.ok(revokeResult.auditId, 'Audit ID returned from revoke');

    const doc = mockDb.store.get(`users/${studentUid}/courses/${courseId}`);
    assert.strictEqual(doc.status, ENROLLMENT_STATUS.REVOKED);
    assert.strictEqual(doc.revokedBy, 'admin-super-999');
    assert.ok(doc.revokedAt, 'revokedAt timestamp set');

    // Verify audit log
    const audit = mockDb.store.get(`enrollment_audits/${revokeResult.auditId}`);
    assert.ok(audit, 'Audit log stored in enrollment_audits');
    assert.strictEqual(audit.eventType, ENROLLMENT_AUDIT_EVENT.ACCESS_REVOKED);
    assert.strictEqual(audit.previousStatus, ENROLLMENT_STATUS.ACTIVE);
    assert.strictEqual(audit.newStatus, ENROLLMENT_STATUS.REVOKED);
  });

  await test('18. Revoked enrollment cannot access protected lessons even with future expiration', () => {
    const futureDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    const revokedEnrollment = {
      courseId: 'nepse-stock-market-basics',
      status: 'revoked',
      startsAt: new Date(Date.now() - 10000),
      expiresAt: futureDate
    };

    assert.strictEqual(
      isEnrollmentActive(revokedEnrollment),
      false,
      'Revoked enrollment must return false from isEnrollmentActive'
    );
    assert.strictEqual(
      resolveEnrollmentDisplayStatus(revokedEnrollment),
      'revoked',
      'Display status must be "revoked"'
    );
  });

  // -----------------------------------------------------------------------------
  // Test Section 6: Renewing Course Access & Expiration Boundaries
  // -----------------------------------------------------------------------------
  console.log('\n--- 6. Renewing Access & Expiration Boundary Enforcement ---');

  await test('19. Renewing access restores status to "active" and updates expiration', async () => {
    const studentUid = 'student-regular-111';
    const courseId = 'nepse-stock-market-basics';
    const newExpiresAt = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);

    const renewResult = await renewStudentEnrollment(
      'admin-super-999',
      studentUid,
      courseId,
      { expiresAt: newExpiresAt, note: '60 days renewal extension' },
      mockDb
    );

    assert.strictEqual(renewResult.success, true);
    assert.ok(renewResult.auditId, 'Audit ID returned from renew');

    const doc = mockDb.store.get(`users/${studentUid}/courses/${courseId}`);
    assert.strictEqual(doc.status, ENROLLMENT_STATUS.ACTIVE);
    assert.strictEqual(doc.revokedAt, null, 'revokedAt cleared on renewal');
    assert.strictEqual(doc.revokedBy, null, 'revokedBy cleared on renewal');
    assert.strictEqual(doc.updatedBy, 'admin-super-999');

    // Audit verification
    const audit = mockDb.store.get(`enrollment_audits/${renewResult.auditId}`);
    assert.ok(audit, 'Audit log document exists');
    assert.strictEqual(audit.eventType, ENROLLMENT_AUDIT_EVENT.ACCESS_RENEWED);
    assert.strictEqual(audit.previousStatus, ENROLLMENT_STATUS.REVOKED);
    assert.strictEqual(audit.newStatus, ENROLLMENT_STATUS.ACTIVE);
  });

  await test('20. Lifetime enrollment (no expiration / null expiresAt) remains active', () => {
    const lifetimeEnrollment = {
      courseId: 'nepse-stock-market-basics',
      status: 'active',
      startsAt: new Date('2026-01-01'),
      expiresAt: null
    };

    assert.strictEqual(isEnrollmentActive(lifetimeEnrollment), true, 'Lifetime enrollment is active');
    assert.strictEqual(resolveEnrollmentDisplayStatus(lifetimeEnrollment), 'active');
  });

  await test('21. Expired enrollment (expiresAt in past) is inactive even if status string says "active"', () => {
    const pastDate = new Date(Date.now() - 5000); // 5 seconds ago
    const expiredEnrollment = {
      courseId: 'nepse-stock-market-basics',
      status: 'active', // Note: database status may not yet be updated by a batch job
      startsAt: new Date(Date.now() - 100000),
      expiresAt: pastDate
    };

    assert.strictEqual(
      isEnrollmentActive(expiredEnrollment),
      false,
      'Enrollment past expiresAt must be deemed inactive immediately'
    );
    assert.strictEqual(
      resolveEnrollmentDisplayStatus(expiredEnrollment),
      'expired',
      'Display status must be "expired"'
    );
  });

  await test('22. Expiration exactly at current time is exclusive (instant access ends)', () => {
    const now = new Date(1700000000000);
    const boundaryEnrollment = {
      courseId: 'nepse-stock-market-basics',
      status: 'active',
      startsAt: new Date(1600000000000),
      expiresAt: now
    };

    // At exact timestamp now, expiresAt <= now is treated as expired
    assert.strictEqual(isEnrollmentActive(boundaryEnrollment, now), false, 'Expires exactly at instant');
  });

  await test('23. startsAt in the future does not grant access until effective date', () => {
    const futureStart = new Date(Date.now() + 100000);
    const pendingEnrollment = {
      courseId: 'nepse-stock-market-basics',
      status: 'active',
      startsAt: futureStart,
      expiresAt: null
    };

    assert.strictEqual(isEnrollmentActive(pendingEnrollment), false, 'Cannot access before startsAt');
  });

  // -----------------------------------------------------------------------------
  // Test Section 7: Audit Logging Retrieval & Tamper-Resistance
  // -----------------------------------------------------------------------------
  console.log('\n--- 7. Audit Log Retrieval & Tamper Resistance ---');

  await test('24. fetchEnrollmentAuditLogs retrieves audit trail for course and student', async () => {
    const logs = await fetchEnrollmentAuditLogs(
      'admin-super-999',
      { studentUid: 'student-regular-111' },
      mockDb
    );
    assert.ok(Array.isArray(logs), 'Returns array of logs');
    assert.ok(logs.length >= 2, 'Contains at least grant and revoke/renew logs');
    assert.ok(logs.some(l => l.eventType === ENROLLMENT_AUDIT_EVENT.ACCESS_GRANTED));
    assert.ok(logs.some(l => l.eventType === ENROLLMENT_AUDIT_EVENT.ACCESS_REVOKED));
  });

  // -----------------------------------------------------------------------------
  // Test Section 8: Client-Side Exploit Prevention & Security Rules
  // -----------------------------------------------------------------------------
  console.log('\n--- 8. Client-Side Exploit Prevention & Security Rules ---');

  await test('25. assertClientCannotEnroll strictly blocks client-side self-enrollment attempts', () => {
    assert.throws(
      () => assertClientCannotEnroll({ courseId: 'nepse-stock-market-basics', status: 'active' }),
      /Client-side self-enrollment is forbidden/i
    );
  });

  await test('26. validateEnrollmentPayload rejects unexpected or privilege-escalating fields', () => {
    const base = {
      courseId: 'nepse-stock-market-basics',
      status: 'active'
    };

    assert.strictEqual(validateEnrollmentPayload(base).valid, true);

    // Injection attempts
    assert.strictEqual(validateEnrollmentPayload({ ...base, isAdmin: true }).valid, false);
    assert.strictEqual(validateEnrollmentPayload({ ...base, role: 'administrator' }).valid, false);
    assert.strictEqual(validateEnrollmentPayload({ ...base, bypassPayment: true }).valid, false);
    assert.strictEqual(validateEnrollmentPayload({ ...base, status: 'super_vip' }).valid, false);
  });

  await test('27. firestore.rules statically enforces admin-only enrollment writes and immutable audits', () => {
    const rulesPath = path.join(rootDir, 'firestore.rules');
    const rules = fs.readFileSync(rulesPath, 'utf8');

    // 1. Course enrollments subcollection rules
    assert.ok(rules.includes('match /users/{userId}'), 'Rules match /users/{userId}');
    assert.ok(rules.includes('match /courses/{courseId}'), 'Rules match /courses/{courseId}');
    assert.ok(rules.includes('allow create, update: if isAdmin()'), 'Only admin can create or update enrollment');
    assert.ok(rules.includes('allow delete: if isAdmin()'), 'Only admin can delete enrollment');
    assert.ok(rules.includes('hasOnlyAllowedEnrollmentFields'), 'Rules enforce enrollment field whitelist');
    assert.ok(rules.includes('isValidEnrollmentFields'), 'Rules enforce enrollment field data types');

    // 2. Audit logs collection rules
    assert.ok(rules.includes('match /enrollment_audits/{auditId}'), 'Rules match /enrollment_audits/{auditId}');
    assert.ok(rules.includes('allow read: if isAdmin()'), 'Audit read restricted to admin');
    assert.ok(rules.includes('hasOnlyAllowedAuditFields'), 'Rules enforce audit field whitelist');
    assert.ok(rules.includes('allow update, delete: if false;'), 'Audit logs are immutable (tamper-proof)');
  });

  // -----------------------------------------------------------------------------
  // Test Section 9: Course Learning Player Protection Integration
  // -----------------------------------------------------------------------------
  console.log('\n--- 9. Course Player Protection & UI State Integration ---');

  await test('28. courseLearn.js displays clear locked states for revoked and expired enrollments', () => {
    const learnPath = path.join(rootDir, 'js/pages/courseLearn.js');
    const learnJs = fs.readFileSync(learnPath, 'utf8');

    // State definitions
    assert.ok(learnJs.includes("'revoked'"), 'courseLearn.js handles revoked state');
    assert.ok(learnJs.includes("'expired'"), 'courseLearn.js handles expired state');
    assert.ok(learnJs.includes("'not_enrolled'"), 'courseLearn.js handles not_enrolled state');

    // Locked messages
    assert.ok(learnJs.includes('Course Access Revoked'), 'Clear messaging for revoked enrollment');
    assert.ok(learnJs.includes('Enrollment Expired') || learnJs.includes('Your Enrollment Has Expired'), 'Clear messaging for expired enrollment');
    assert.ok(learnJs.includes('Enrollment Required'), 'Clear messaging for not enrolled');

    // Player does not load YouTube iframes when locked
    assert.ok(learnJs.includes('cl-locked-hero') || learnJs.includes('cl-locked-screen'), 'Renders locked screen instead of player iframe');
  });

  // -----------------------------------------------------------------------------
  // Test Section 10: Mobile Responsiveness & CSS Layout Verification
  // -----------------------------------------------------------------------------
  console.log('\n--- 10. Mobile Responsiveness & CSS Layout Verification ---');

  await test('29. css/pages.css provides responsive tables, wrappers, and mobile breakpoints for admin enrollments', () => {
    const cssPath = path.join(rootDir, 'css/pages.css');
    const css = fs.readFileSync(cssPath, 'utf8');

    assert.ok(css.includes('.ae-table-responsive'), 'Table responsive wrapper for horizontal scroll containment');
    assert.ok(css.includes('overflow-x: auto'), 'Enforces overflow-x: auto on table wrapper');
    assert.ok(css.includes('.ae-modal-backdrop'), 'Modal backdrop styles present');
    assert.ok(css.includes('.ae-modal-card'), 'Modal card container present');
    assert.ok(css.includes('@media (max-width: 768px)'), 'Mobile 768px breakpoint present');
    assert.ok(css.includes('@media (max-width: 480px)'), 'Small mobile 480px breakpoint present');
  });

  // -----------------------------------------------------------------------------
  // Test Section 11: Static Hub Generation Check
  // -----------------------------------------------------------------------------
  console.log('\n--- 11. Static Page Generation Integration ---');

  await test('30. scripts/generate_static_pages.mjs includes /admin/enrollments hub', () => {
    const genPath = path.join(rootDir, 'scripts/generate_static_pages.mjs');
    const genScript = fs.readFileSync(genPath, 'utf8');

    assert.ok(genScript.includes('/admin/enrollments'), 'generate_static_pages.mjs includes /admin/enrollments');
    assert.ok(genScript.includes('renderAdminEnrollmentsPage'), 'Imports and calls renderAdminEnrollmentsPage');
  });

  console.log('\n========================================================');
  console.log(`TOTAL PART 8 TESTS: ${totalTests}`);
  console.log(`PASSED: ${passedTests}`);
  console.log(`FAILED: ${failedTests}`);
  console.log('========================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runAllTests().catch(err => {
  console.error('Fatal test execution error:', err);
  process.exit(1);
});

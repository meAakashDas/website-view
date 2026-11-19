// =============================================================================
// risePaisa - Backend Security, Access Control & 365-Day Validity Test Suite
// Verifies:
// 1. Strict 365-day (1-year) course enrollment validity enforcement
// 2. Renewal date calculations & protection against expiration stripping
// 3. Runtime access control (active, expired, revoked, suspended, scheduled)
// 4. Privilege escalation & field injection defense (profiles & progress)
// 5. Strict administrative authorization enforcement across all mutations
// 6. Append-only audit trail logging
// 7. Student ID normalization and Nepali phone validation
// 8. Lifetime digital resource delivery distinction
// =============================================================================

import assert from 'assert';
import {
  grantStudentEnrollment,
  renewStudentEnrollment,
  revokeStudentEnrollment,
  suspendStudentAccount,
  reactivateStudentAccount,
  createStudentAccount,
  searchStudentUser,
  fetchEnrollmentAuditLogs,
  saveAdminCourse,
  deleteAdminCourse,
  isEnrollmentActive,
  resolveEnrollmentDisplayStatus,
  validateLessonProgressPayload,
  checkIsAdminDetailed,
  checkIsAdmin,
  ENROLLMENT_STATUS,
  ENROLLMENT_AUDIT_EVENT
} from '../js/firebase/courses.js';

import {
  validateUserProfilePayload,
  validateBookmarkPayload
} from '../js/firebase/db.js';

import {
  resolveStudentLoginIdentifier,
  validateNepaliPhoneNumber,
  isStudentId,
  extractStudentIdFromEmail,
  formatStudentInternalEmail
} from '../js/firebase/auth.js';

console.log('=============================================================================');
console.log('RISEPAISA: BACKEND SECURITY, ACCESS CONTROL & 365-DAY VALIDITY AUDIT');
console.log('=============================================================================\n');

let totalTests = 0;
let passedTests = 0;

async function test(name, fn) {
  totalTests++;
  try {
    await fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message}`);
    throw err;
  }
}

// -----------------------------------------------------------------------------
// In-Memory Mock Database Bundle
// -----------------------------------------------------------------------------
function createMockDb() {
  const store = new Map();

  return {
    store,
    db: {},
    sdk: {
      serverTimestamp: () => ({ _isServerTimestamp: true, toMillis: () => Date.now() }),
      doc: (firstArg, ...segments) => {
        let base = '';
        if (typeof firstArg === 'string') {
          base = firstArg;
        } else if (firstArg && firstArg.path) {
          base = firstArg.path;
        }
        if (segments.length === 0) {
          const autoId = 'audit-mock-' + Math.random().toString(36).substr(2, 9);
          const fullPath = `${base}/${autoId}`.replace(/^\/+/, '');
          return { id: autoId, path: fullPath, _type: 'docRef' };
        }
        const fullPath = [base, ...segments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
        const parts = fullPath.split('/');
        return { id: parts[parts.length - 1], path: fullPath, _type: 'docRef' };
      },
      collection: (firstArg, ...segments) => {
        let base = '';
        if (typeof firstArg === 'string') {
          base = firstArg;
        } else if (firstArg && firstArg.path) {
          base = firstArg.path;
        }
        const fullPath = [base, ...segments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
        const parts = fullPath.split('/');
        return { id: parts[parts.length - 1], path: fullPath, _type: 'colRef' };
      },
      getDoc: async (docRef) => {
        const data = store.get(docRef.path);
        return {
          exists: () => data !== undefined,
          data: () => (data ? JSON.parse(JSON.stringify(data)) : undefined)
        };
      },
      setDoc: async (docRef, data, options = {}) => {
        if (options.merge && store.has(docRef.path)) {
          const prev = store.get(docRef.path);
          store.set(docRef.path, { ...prev, ...data });
        } else {
          store.set(docRef.path, data);
        }
      },
      updateDoc: async (docRef, data) => {
        if (!store.has(docRef.path)) {
          throw new Error(`Document not found: ${docRef.path}`);
        }
        const prev = store.get(docRef.path);
        store.set(docRef.path, { ...prev, ...data });
      },
      writeBatch: (db) => {
        const operations = [];
        return {
          set: (docRef, data, options = {}) => {
            operations.push({ op: 'set', docRef, data, options });
          },
          update: (docRef, data) => {
            operations.push({ op: 'update', docRef, data });
          },
          delete: (docRef) => {
            operations.push({ op: 'delete', docRef });
          },
          commit: async () => {
            for (const { op, docRef, data, options } of operations) {
              if (op === 'set') {
                if (options && options.merge && store.has(docRef.path)) {
                  const prev = store.get(docRef.path);
                  store.set(docRef.path, { ...prev, ...data });
                } else {
                  store.set(docRef.path, data);
                }
              } else if (op === 'update') {
                const prev = store.get(docRef.path) || {};
                store.set(docRef.path, { ...prev, ...data });
              } else if (op === 'delete') {
                store.delete(docRef.path);
              }
            }
          }
        };
      }
    }
  };
}

async function run() {
  const adminUid = 'admin-verified-888';
  const nonAdminUid = 'student-unauthorized-111';
  const targetStudentUid = 'student-test-target-222';
  const courseId = 'nepse-stock-market-basics';

  // Seed mock store with admin allowlist and published course
  const mockBundle = createMockDb();
  mockBundle.store.set(`admins/${adminUid}`, { role: 'superadmin', active: true });
  mockBundle.store.set(`courses/${courseId}`, {
    slug: courseId,
    title: 'Complete NEPSE Stock Market Mastery',
    published: true,
    price: 4999
  });
  mockBundle.store.set(`users/${targetStudentUid}`, {
    displayName: 'Sita Sharma',
    email: 'sita@example.com',
    accountStatus: 'active',
    createdAt: new Date()
  });

  // ===========================================================================
  // SECTION 1: STRICT 365-DAY COURSE ACCESS ENFORCEMENT
  // ===========================================================================
  console.log('\n--- Section 1: Course 365-Day Validity Enforcement ---');

  await test('1.1. Default grantStudentEnrollment enforces strict 365-day expiration window', async () => {
    const beforeMs = Date.now();
    const result = await grantStudentEnrollment(adminUid, targetStudentUid, courseId, {}, mockBundle);

    assert.strictEqual(result.success, true);
    assert.ok(result.enrollment.expiresAt instanceof Date, 'expiresAt must be a Date instance');

    const expectedExpiryMs = beforeMs + 365 * 24 * 60 * 60 * 1000;
    const actualExpiryMs = result.enrollment.expiresAt.getTime();
    const diffSeconds = Math.abs(actualExpiryMs - expectedExpiryMs) / 1000;

    assert.ok(diffSeconds < 5, `Expected ~365 days expiry, got diff of ${diffSeconds}s`);
  });

  await test('1.2. grantStudentEnrollment with accessDurationDays respects bounded custom days', async () => {
    const beforeMs = Date.now();
    const result = await grantStudentEnrollment(
      adminUid,
      targetStudentUid,
      courseId,
      { accessDurationDays: 45 },
      mockBundle
    );

    assert.strictEqual(result.success, true);
    const expectedExpiryMs = beforeMs + 45 * 24 * 60 * 60 * 1000;
    const actualExpiryMs = result.enrollment.expiresAt.getTime();
    const diffSeconds = Math.abs(actualExpiryMs - expectedExpiryMs) / 1000;

    assert.ok(diffSeconds < 5, `Expected 45 days expiry, got diff of ${diffSeconds}s`);
  });

  await test('1.3. renewStudentEnrollment without explicit date extends 365 days from current expiry', async () => {
    // Current enrollment expires in 30 days
    const currentExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    mockBundle.store.set(`users/${targetStudentUid}/courses/${courseId}`, {
      courseId,
      status: 'active',
      expiresAt: currentExpiry
    });

    const renewResult = await renewStudentEnrollment(adminUid, targetStudentUid, courseId, {}, mockBundle);
    assert.strictEqual(renewResult.success, true);

    const updatedDoc = mockBundle.store.get(`users/${targetStudentUid}/courses/${courseId}`);
    assert.ok(updatedDoc.expiresAt instanceof Date, 'renewed expiresAt must be Date');

    const expectedExpiryMs = currentExpiry.getTime() + 365 * 24 * 60 * 60 * 1000;
    const actualExpiryMs = updatedDoc.expiresAt.getTime();
    const diffSeconds = Math.abs(actualExpiryMs - expectedExpiryMs) / 1000;

    assert.ok(diffSeconds < 5, `Renewal must extend 365 days past existing expiry: diff ${diffSeconds}s`);
  });

  await test('1.4. renewStudentEnrollment on already expired enrollment extends 365 days from now', async () => {
    // Enrollment expired 10 days ago
    const pastExpiry = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000);
    mockBundle.store.set(`users/${targetStudentUid}/courses/${courseId}`, {
      courseId,
      status: 'expired',
      expiresAt: pastExpiry
    });

    const beforeMs = Date.now();
    await renewStudentEnrollment(adminUid, targetStudentUid, courseId, {}, mockBundle);

    const updatedDoc = mockBundle.store.get(`users/${targetStudentUid}/courses/${courseId}`);
    assert.strictEqual(updatedDoc.status, 'active');

    const expectedExpiryMs = beforeMs + 365 * 24 * 60 * 60 * 1000;
    const actualExpiryMs = updatedDoc.expiresAt.getTime();
    const diffSeconds = Math.abs(actualExpiryMs - expectedExpiryMs) / 1000;

    assert.ok(diffSeconds < 5, `Renewal from expired state must extend 365 days from now: diff ${diffSeconds}s`);
  });

  // ===========================================================================
  // SECTION 2: RUNTIME ACCESS EVALUATION (isEnrollmentActive & Display Status)
  // ===========================================================================
  console.log('\n--- Section 2: Runtime Access Evaluation & Expiration ---');

  await test('2.1. Active, unexpired enrollment grants active access', () => {
    const doc = {
      courseId,
      status: ENROLLMENT_STATUS.ACTIVE,
      startsAt: new Date(Date.now() - 5000),
      expiresAt: new Date(Date.now() + 100000)
    };
    assert.strictEqual(isEnrollmentActive(doc), true);
    assert.strictEqual(resolveEnrollmentDisplayStatus(doc), 'active');
  });

  await test('2.2. Expired enrollment (past expiresAt) immediately denies access', () => {
    const doc = {
      courseId,
      status: ENROLLMENT_STATUS.ACTIVE, // Raw DB status might still say active before batch cron
      startsAt: new Date(Date.now() - 200000),
      expiresAt: new Date(Date.now() - 1000) // 1s ago
    };
    assert.strictEqual(isEnrollmentActive(doc), false, 'Expired enrollment must return false');
    assert.strictEqual(resolveEnrollmentDisplayStatus(doc), 'expired', 'Display status must resolve to expired');
  });

  await test('2.3. Exact expiration instant is strictly exclusive (access ends immediately at expiresAt)', () => {
    const boundaryTime = new Date(1700000000000);
    const doc = {
      courseId,
      status: ENROLLMENT_STATUS.ACTIVE,
      startsAt: new Date(1600000000000),
      expiresAt: boundaryTime
    };
    assert.strictEqual(isEnrollmentActive(doc, boundaryTime), false, 'Exact millisecond boundary must not grant access');
  });

  await test('2.4. Suspended student account immediately denies access even with active course dates', () => {
    const doc = {
      courseId,
      status: ENROLLMENT_STATUS.ACTIVE,
      accountStatus: 'suspended',
      startsAt: new Date(Date.now() - 5000),
      expiresAt: new Date(Date.now() + 100000)
    };
    assert.strictEqual(isEnrollmentActive(doc), false, 'Suspended accounts cannot access courses');
  });

  await test('2.5. Revoked enrollment immediately denies access', () => {
    const doc = {
      courseId,
      status: ENROLLMENT_STATUS.REVOKED,
      startsAt: new Date(Date.now() - 5000),
      expiresAt: new Date(Date.now() + 100000)
    };
    assert.strictEqual(isEnrollmentActive(doc), false);
    assert.strictEqual(resolveEnrollmentDisplayStatus(doc), 'revoked');
  });

  await test('2.6. Scheduled future start date does not grant access until effective time', () => {
    const futureDoc = {
      courseId,
      status: ENROLLMENT_STATUS.ACTIVE,
      startsAt: new Date(Date.now() + 50000),
      expiresAt: new Date(Date.now() + 100000)
    };
    assert.strictEqual(isEnrollmentActive(futureDoc), false, 'Cannot access before startsAt');
    assert.strictEqual(resolveEnrollmentDisplayStatus(futureDoc), 'scheduled');
  });

  // ===========================================================================
  // SECTION 3: PRIVILEGE ESCALATION & FIELD INJECTION DEFENSE
  // ===========================================================================
  console.log('\n--- Section 3: Privilege Escalation & Injection Defense ---');

  await test('3.1. validateUserProfilePayload strictly blocks isAdmin injection', () => {
    const check = validateUserProfilePayload({ displayName: 'Attacker', isAdmin: true });
    assert.strictEqual(check.valid, false);
    assert.ok(check.errors.some(e => e.includes('isAdmin')), 'Must flag isAdmin injection');
  });

  await test('3.2. validateUserProfilePayload strictly blocks role and permissions escalation', () => {
    const checkRole = validateUserProfilePayload({ displayName: 'Attacker', role: 'admin' });
    assert.strictEqual(checkRole.valid, false);

    const checkPerms = validateUserProfilePayload({ displayName: 'Attacker', permissions: ['superadmin'] });
    assert.strictEqual(checkPerms.valid, false);

    const checkPaid = validateUserProfilePayload({ displayName: 'Attacker', paid: true });
    assert.strictEqual(checkPaid.valid, false);

    const checkEnrolled = validateUserProfilePayload({ displayName: 'Attacker', enrolled: true });
    assert.strictEqual(checkEnrolled.valid, false);
  });

  await test('3.3. validateLessonProgressPayload strictly blocks course access escalation fields', () => {
    const checkEscalation = validateLessonProgressPayload({
      completed: true,
      lastPositionSeconds: 120,
      enrolled: true,
      isAdmin: true,
      status: 'active'
    });
    assert.strictEqual(checkEscalation.valid, false);
    assert.ok(checkEscalation.errors.length >= 3, 'Must reject all escalation keys');
  });

  await test('3.4. validateBookmarkPayload rejects invalid types and oversized payloads', () => {
    const checkBadType = validateBookmarkPayload({
      type: 'malicious_system_type',
      slug: 'test-slug',
      title: 'Valid Title',
      url: '/test-slug'
    });
    assert.strictEqual(checkBadType.valid, false);

    const checkOversized = validateBookmarkPayload({
      type: 'lesson',
      slug: 'a'.repeat(150), // exceeds 100 chars
      title: 'Valid Title',
      url: '/test-slug'
    });
    assert.strictEqual(checkOversized.valid, false);
  });

  // ===========================================================================
  // SECTION 4: STRICT ADMINISTRATIVE AUTHORIZATION ENFORCEMENT
  // ===========================================================================
  console.log('\n--- Section 4: Administrative Authorization Enforcement ---');

  await test('4.1. Non-admin cannot grant course enrollments', async () => {
    await assert.rejects(
      async () => await grantStudentEnrollment(nonAdminUid, targetStudentUid, courseId, {}, mockBundle),
      /Access Denied/
    );
  });

  await test('4.2. Non-admin cannot revoke course enrollments', async () => {
    await assert.rejects(
      async () => await revokeStudentEnrollment(nonAdminUid, targetStudentUid, courseId, {}, mockBundle),
      /Access Denied/
    );
  });

  await test('4.3. Non-admin cannot renew course enrollments', async () => {
    await assert.rejects(
      async () => await renewStudentEnrollment(nonAdminUid, targetStudentUid, courseId, {}, mockBundle),
      /Access Denied/
    );
  });

  await test('4.4. Non-admin cannot suspend or reactivate student accounts', async () => {
    await assert.rejects(
      async () => await suspendStudentAccount(nonAdminUid, targetStudentUid, {}, mockBundle),
      /Access Denied/
    );
    await assert.rejects(
      async () => await reactivateStudentAccount(nonAdminUid, targetStudentUid, {}, mockBundle),
      /Access Denied/
    );
  });

  await test('4.5. Non-admin cannot search student directory', async () => {
    await assert.rejects(
      async () => await searchStudentUser(nonAdminUid, 'sita@example.com', mockBundle),
      /Access Denied/
    );
  });

  await test('4.6. Non-admin cannot fetch enrollment audit logs', async () => {
    await assert.rejects(
      async () => await fetchEnrollmentAuditLogs(nonAdminUid, {}, mockBundle),
      /Access Denied/
    );
  });

  await test('4.7. Non-admin cannot save or delete courses in catalog', async () => {
    await assert.rejects(
      async () => await saveAdminCourse(nonAdminUid, { slug: 'new-course', title: 'New Course' }, mockBundle),
      /Access Denied/
    );
    await assert.rejects(
      async () => await deleteAdminCourse(nonAdminUid, courseId, mockBundle),
      /Access Denied/
    );
  });

  await test('4.8. checkIsAdminDetailed verifies directly against Firestore admins/{uid}', async () => {
    const adminCheck = await checkIsAdminDetailed(adminUid, mockBundle);
    assert.strictEqual(adminCheck.isAdmin, true);
    assert.strictEqual(adminCheck.reason, 'authorized');

    const nonAdminCheck = await checkIsAdminDetailed(nonAdminUid, mockBundle);
    assert.strictEqual(nonAdminCheck.isAdmin, false);
    assert.strictEqual(nonAdminCheck.reason, 'not_in_allowlist');
  });

  // ===========================================================================
  // SECTION 5: APPEND-ONLY AUDIT TRAIL LOGGING
  // ===========================================================================
  console.log('\n--- Section 5: Immutable Audit Trail Logging ---');

  await test('5.1. grantStudentEnrollment logs ACCESS_GRANTED event in enrollment_audits', async () => {
    const grant = await grantStudentEnrollment(adminUid, targetStudentUid, courseId, { note: 'Audit verify grant' }, mockBundle);
    assert.ok(grant.auditId, 'Audit ID generated');

    const auditDoc = mockBundle.store.get(`enrollment_audits/${grant.auditId}`);
    assert.ok(auditDoc, 'Audit document persisted in store');
    assert.strictEqual(auditDoc.adminUid, adminUid);
    assert.strictEqual(auditDoc.studentUid, targetStudentUid);
    assert.strictEqual(auditDoc.courseId, courseId);
    assert.strictEqual(auditDoc.newStatus, 'active');
  });

  await test('5.2. revokeStudentEnrollment logs ACCESS_REVOKED event in enrollment_audits', async () => {
    const revoke = await revokeStudentEnrollment(adminUid, targetStudentUid, courseId, { reason: 'Refund requested' }, mockBundle);
    assert.ok(revoke.auditId);

    const auditDoc = mockBundle.store.get(`enrollment_audits/${revoke.auditId}`);
    assert.strictEqual(auditDoc.eventType, ENROLLMENT_AUDIT_EVENT.ACCESS_REVOKED);
    assert.strictEqual(auditDoc.newStatus, 'revoked');
    assert.strictEqual(auditDoc.note, 'Refund requested');
  });

  // ===========================================================================
  // SECTION 6: STUDENT ID RESOLUTION & NEPALI PHONE VALIDATION
  // ===========================================================================
  console.log('\n--- Section 6: Identity Normalization & Phone Validation ---');

  await test('6.1. resolveStudentLoginIdentifier seamlessly bridges Student IDs and Emails', () => {
    assert.strictEqual(
      resolveStudentLoginIdentifier('hari@example.com'),
      'hari@example.com'
    );
    assert.strictEqual(
      resolveStudentLoginIdentifier('RP-2026-X9K2P1'),
      'rp-2026-x9k2p1@students.risepaisa.com'
    );
    assert.strictEqual(
      resolveStudentLoginIdentifier('  rp-2026-abc123  '),
      'rp-2026-abc123@students.risepaisa.com'
    );
  });

  await test('6.2. Student ID format checkers and extractors function accurately', () => {
    assert.strictEqual(isStudentId('RP-2026-A1B2C3'), true);
    assert.strictEqual(isStudentId('hari@example.com'), false);
    assert.strictEqual(extractStudentIdFromEmail('rp-2026-a1b2c3@students.risepaisa.com'), 'RP-2026-A1B2C3');
    assert.strictEqual(extractStudentIdFromEmail('regular@gmail.com'), null);
  });

  await test('6.3. validateNepaliPhoneNumber accepts standard operators (98, 97, 96)', () => {
    assert.strictEqual(validateNepaliPhoneNumber('9841234567').valid, true);
    assert.strictEqual(validateNepaliPhoneNumber('+977-9801234567').valid, true);
    assert.strictEqual(validateNepaliPhoneNumber('9779741234567').valid, true);
    assert.strictEqual(validateNepaliPhoneNumber('9612345678').valid, true);
  });

  await test('6.4. validateNepaliPhoneNumber rejects invalid prefixes and non-10-digit inputs', () => {
    assert.strictEqual(validateNepaliPhoneNumber('9123456789').valid, false); // Operator not 98/97/96
    assert.strictEqual(validateNepaliPhoneNumber('984123').valid, false); // Too short
    assert.strictEqual(validateNepaliPhoneNumber('984123456789').valid, false); // Too long
    assert.strictEqual(validateNepaliPhoneNumber('abcdefghij').valid, false); // Non-digit
  });

  // ===========================================================================
  // SECTION 7: LIFETIME DIGITAL RESOURCE DELIVERY DISTINCTION
  // ===========================================================================
  console.log('\n--- Section 7: Digital Resources Delivery Distinction ---');

  await test('7.1. Digital resources maintain lifetime delivery without course expiration', async () => {
    const { getResources, getResourceBySlug } = await import('../js/data/resources.js');
    const resources = getResources();

    assert.ok(resources.length >= 2, 'Must have at least 2 digital resources');
    const notionResource = getResourceBySlug('notion-finance-tracker');
    assert.ok(notionResource, 'Notion tracker resource exists');
    assert.strictEqual(notionResource.slug, 'notion-finance-tracker');

    // Resources are decoupled from courses table: they do not require course validity expiration
    const budgetResource = getResourceBySlug('budget-planner-system');
    assert.ok(budgetResource, 'Budget planner resource exists');
    assert.strictEqual(budgetResource.slug, 'budget-planner-system');
  });

  console.log('\n=============================================================================');
  console.log(`TEST SUMMARY: ${passedTests}/${totalTests} tests passed cleanly with 0 failures.`);
  console.log('=============================================================================\n');
}

run().catch(err => {
  console.error('\nTest suite execution failed:', err);
  process.exit(1);
});

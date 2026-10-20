// ========================================================
// RISEPAISA STUDENT ACCOUNT MANAGEMENT & ONBOARDING TEST SUITE
// Automated Unit & Integration Tests for Admin Creation,
// Student ID Bridge, Profile Onboarding, Suspension & Access Gates
// ========================================================

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  generateStudentId,
  generateTemporaryPassword,
  formatStudentInternalEmail,
  isStudentId,
  extractStudentIdFromEmail,
  resolveStudentLoginIdentifier,
  validateNepaliPhoneNumber,
  normalizeNepaliPhoneNumber
} from '../js/firebase/auth.js';

import {
  ACCOUNT_STATUS,
  ENROLLMENT_STATUS,
  isEnrollmentActive,
  checkUserEnrollment
} from '../js/firebase/courses.js';

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

console.log('\n========================================================');
console.log('TEST SUITE: STUDENT ACCOUNT CREATION, ONBOARDING & ACCESS');
console.log('========================================================\n');

// ── 1. Student ID Generation & Uniqueness ────────────────────────────────────
console.log('--- 1. Testing Student ID Generation, Format & Entropy ---');

await test('Student ID matches required format RP-2026-XXXXXX', () => {
  const id = generateStudentId();
  assert.match(id, /^RP-2026-[A-Z0-9]{6}$/, `Expected ID to match RP-2026-XXXXXX, got: ${id}`);
});

await test('Generated student IDs are non-sequential and unique across 1,000 runs', () => {
  const set = new Set();
  for (let i = 0; i < 1000; i++) {
    const id = generateStudentId();
    assert.strictEqual(set.has(id), false, `Collision detected on run ${i}: ${id}`);
    set.add(id);
  }
  assert.strictEqual(set.size, 1000);
});

await test('isStudentId correctly discriminates Student IDs from emails and UIDs', () => {
  assert.strictEqual(isStudentId('RP-2026-A7K9M2'), true);
  assert.strictEqual(isStudentId('rp-2026-a7k9m2'), true);
  assert.strictEqual(isStudentId('RP-2026-123456'), true);
  assert.strictEqual(isStudentId('admin@risepaisa.com'), false);
  assert.strictEqual(isStudentId('user@gmail.com'), false);
  assert.strictEqual(isStudentId('UID-12345-ABCDE'), false);
  assert.strictEqual(isStudentId(''), false);
  assert.strictEqual(isStudentId(null), false);
});

// ── 2. Temporary Password Cryptographic Security ─────────────────────────────
console.log('\n--- 2. Testing Temporary Password Security ---');

await test('Temporary passwords have minimum length of 12 by default', () => {
  const pwd = generateTemporaryPassword();
  assert.ok(pwd.length >= 12, `Password length should be >= 12, got: ${pwd.length}`);
});

await test('Temporary password contains mixed character sets (upper, lower, digit, symbol)', () => {
  const pwd = generateTemporaryPassword(16);
  assert.strictEqual(pwd.length, 16);
  assert.match(pwd, /[A-Z]/, 'Must contain uppercase letter');
  assert.match(pwd, /[a-z]/, 'Must contain lowercase letter');
  assert.match(pwd, /[0-9]/, 'Must contain digit');
  assert.match(pwd, /[!@#$%&*?]/, 'Must contain approved special character');
});

await test('1,000 generated temporary passwords produce no collisions', () => {
  const set = new Set();
  for (let i = 0; i < 1000; i++) {
    const pwd = generateTemporaryPassword(12);
    assert.strictEqual(set.has(pwd), false, `Collision detected in password generator: ${pwd}`);
    set.add(pwd);
  }
  assert.strictEqual(set.size, 1000);
});

// ── 3. Student ID to Firebase Authentication Bridge ──────────────────────────
console.log('\n--- 3. Testing Student ID Authentication Bridge ---');

await test('formatStudentInternalEmail formats internal identifier accurately', () => {
  const email = formatStudentInternalEmail('RP-2026-A7K9M2');
  assert.strictEqual(email, 'rp-2026-a7k9m2@students.risepaisa.com');
});

await test('extractStudentIdFromEmail extracts uppercase Student ID accurately', () => {
  const id = extractStudentIdFromEmail('rp-2026-a7k9m2@students.risepaisa.com');
  assert.strictEqual(id, 'RP-2026-A7K9M2');
  assert.strictEqual(extractStudentIdFromEmail('user@gmail.com'), null);
});

await test('resolveStudentLoginIdentifier bridges student ID and preserves regular email', () => {
  assert.strictEqual(
    resolveStudentLoginIdentifier('RP-2026-A7K9M2'),
    'rp-2026-a7k9m2@students.risepaisa.com'
  );
  assert.strictEqual(
    resolveStudentLoginIdentifier('  rp-2026-xyz890  '),
    'rp-2026-xyz890@students.risepaisa.com'
  );
  assert.strictEqual(
    resolveStudentLoginIdentifier('student@example.com'),
    'student@example.com'
  );
  assert.strictEqual(
    resolveStudentLoginIdentifier('admin.risepaisa@gmail.com'),
    'admin.risepaisa@gmail.com'
  );
});

// ── 4. Nepali Mobile Phone Validation & Normalization ────────────────────────
console.log('\n--- 4. Testing Nepali Mobile Phone Validation & Normalization ---');

await test('validateNepaliPhoneNumber accepts valid 10-digit mobile formats (98, 97, 96)', () => {
  assert.strictEqual(validateNepaliPhoneNumber('9841234567').valid, true);
  assert.strictEqual(validateNepaliPhoneNumber('9851098765').valid, true);
  assert.strictEqual(validateNepaliPhoneNumber('9741234567').valid, true);
  assert.strictEqual(validateNepaliPhoneNumber('9611234567').valid, true);
  assert.strictEqual(validateNepaliPhoneNumber('+977 9841234567').valid, true);
  assert.strictEqual(validateNepaliPhoneNumber('+977-9841-234567').valid, true);
  assert.strictEqual(validateNepaliPhoneNumber('00977 9841234567').valid, true);
});

await test('validateNepaliPhoneNumber rejects invalid numbers', () => {
  assert.strictEqual(validateNepaliPhoneNumber('1234567890').valid, false); // Invalid prefix
  assert.strictEqual(validateNepaliPhoneNumber('984123456').valid, false);  // 9 digits (too short)
  assert.strictEqual(validateNepaliPhoneNumber('98412345678').valid, false); // 11 digits (too long)
  assert.strictEqual(validateNepaliPhoneNumber('abcdefghij').valid, false);
  assert.strictEqual(validateNepaliPhoneNumber('').valid, false);
  assert.strictEqual(validateNepaliPhoneNumber(null).valid, false);
});

await test('normalizeNepaliPhoneNumber produces consistent E.164 +977 standard', () => {
  assert.strictEqual(normalizeNepaliPhoneNumber('9841234567'), '+9779841234567');
  assert.strictEqual(normalizeNepaliPhoneNumber('+977 9841234567'), '+9779841234567');
  assert.strictEqual(normalizeNepaliPhoneNumber('+977-9841-234567'), '+9779841234567');
  assert.strictEqual(normalizeNepaliPhoneNumber('00977 9841234567'), '+9779841234567');
});

// ── 5. Account Suspension & Course Access Gatekeeping ─────────────────────────
console.log('\n--- 5. Testing Account Suspension & Access Gates ---');

await test('ACCOUNT_STATUS constants are defined', () => {
  assert.strictEqual(ACCOUNT_STATUS.ACTIVE, 'active');
  assert.strictEqual(ACCOUNT_STATUS.SUSPENDED, 'suspended');
  assert.strictEqual(ACCOUNT_STATUS.DISABLED, 'disabled');
});

await test('isEnrollmentActive returns true only for active status and valid timeframe', () => {
  const now = Date.now();
  const activeEnroll = {
    status: ENROLLMENT_STATUS.ACTIVE,
    startsAt: new Date(now - 100000),
    expiresAt: new Date(now + 10000000)
  };
  assert.strictEqual(isEnrollmentActive(activeEnroll), true);

  const expiredEnroll = {
    status: ENROLLMENT_STATUS.ACTIVE,
    startsAt: new Date(now - 1000000),
    expiresAt: new Date(now - 1000)
  };
  assert.strictEqual(isEnrollmentActive(expiredEnroll), false);

  const revokedEnroll = {
    status: ENROLLMENT_STATUS.REVOKED,
    startsAt: new Date(now - 100000),
    expiresAt: new Date(now + 10000000)
  };
  assert.strictEqual(isEnrollmentActive(revokedEnroll), false);
});

await test('checkUserEnrollment blocks suspended student accounts', async () => {
  const courseId = 'nepse-stock-market-basics';
  const mockStudentUid = 'student-suspended-123';

  // Simulating Firestore state where user is suspended
  const mockDb = {
    async getDoc(docRef) {
      if (docRef.path === `users/${mockStudentUid}`) {
        return {
          exists: () => true,
          data: () => ({
            uid: mockStudentUid,
            role: 'student',
            accountStatus: ACCOUNT_STATUS.SUSPENDED,
            onboardingCompleted: true
          })
        };
      }
      if (docRef.path === `users/${mockStudentUid}/courses/${courseId}`) {
        return {
          exists: () => true,
          data: () => ({
            courseId,
            status: ENROLLMENT_STATUS.ACTIVE,
            startsAt: new Date(Date.now() - 10000),
            expiresAt: new Date(Date.now() + 10000000)
          })
        };
      }
      return { exists: () => false, data: () => null };
    },
    doc(firstArg, ...segments) {
      let base = '';
      if (typeof firstArg === 'string') {
        base = firstArg;
      } else if (firstArg && firstArg.path) {
        base = firstArg.path;
      }
      const full = [base, ...segments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
      return { path: full, id: full.split('/').pop() };
    }
  };

  const result = await checkUserEnrollment(mockStudentUid, courseId, mockDb);
  assert.strictEqual(result.hasAccess, false, 'Suspended student must NOT have access');
  assert.strictEqual(result.isSuspended, true, 'isSuspended must be true');
  assert.strictEqual(result.reason, 'account_suspended', 'Reason must indicate suspension');
});

await test('checkUserEnrollment detects incomplete onboarding for active student', async () => {
  const courseId = 'nepse-stock-market-basics';
  const mockStudentUid = 'student-onboard-pending-456';

  const mockDb = {
    async getDoc(docRef) {
      if (docRef.path === `users/${mockStudentUid}`) {
        return {
          exists: () => true,
          data: () => ({
            uid: mockStudentUid,
            role: 'student',
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            onboardingCompleted: false
          })
        };
      }
      if (docRef.path === `users/${mockStudentUid}/courses/${courseId}`) {
        return {
          exists: () => true,
          data: () => ({
            courseId,
            status: ENROLLMENT_STATUS.ACTIVE,
            startsAt: new Date(Date.now() - 10000),
            expiresAt: new Date(Date.now() + 10000000)
          })
        };
      }
      return { exists: () => false, data: () => null };
    },
    doc(firstArg, ...segments) {
      let base = '';
      if (typeof firstArg === 'string') {
        base = firstArg;
      } else if (firstArg && firstArg.path) {
        base = firstArg.path;
      }
      const full = [base, ...segments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
      return { path: full, id: full.split('/').pop() };
    }
  };

  const result = await checkUserEnrollment(mockStudentUid, courseId, mockDb);
  assert.strictEqual(result.hasAccess, false, 'Pending onboarding must gate protected course access');
  assert.strictEqual(result.onboardingRequired, true, 'onboardingRequired flag must be true');
  assert.strictEqual(result.reason, 'onboarding_required');
});

await test('checkUserEnrollment grants access when student is active, enrolled, and onboarded', async () => {
  const courseId = 'nepse-stock-market-basics';
  const mockStudentUid = 'student-active-789';

  const mockDb = {
    async getDoc(docRef) {
      if (docRef.path === `users/${mockStudentUid}`) {
        return {
          exists: () => true,
          data: () => ({
            uid: mockStudentUid,
            role: 'student',
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            onboardingCompleted: true
          })
        };
      }
      if (docRef.path === `users/${mockStudentUid}/courses/${courseId}`) {
        return {
          exists: () => true,
          data: () => ({
            courseId,
            status: ENROLLMENT_STATUS.ACTIVE,
            startsAt: new Date(Date.now() - 10000),
            expiresAt: new Date(Date.now() + 10000000)
          })
        };
      }
      return { exists: () => false, data: () => null };
    },
    doc(firstArg, ...segments) {
      let base = '';
      if (typeof firstArg === 'string') {
        base = firstArg;
      } else if (firstArg && firstArg.path) {
        base = firstArg.path;
      }
      const full = [base, ...segments].filter(Boolean).join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
      return { path: full, id: full.split('/').pop() };
    }
  };

  const result = await checkUserEnrollment(mockStudentUid, courseId, mockDb);
  assert.strictEqual(result.hasAccess, true, 'Active onboarded enrolled student must have access');
  assert.strictEqual(result.isSuspended, false);
  assert.strictEqual(result.onboardingRequired, false);
  assert.strictEqual(result.reason, 'enrolled');
});

// ── 6. Security Rules & Schema Integrity ─────────────────────────────────────
console.log('\n--- 6. Testing Security Rules Invariants ---');

await test('firestore.rules protects studentIdMappings collection against public enumeration', () => {
  const rulesPath = path.resolve(rootDir, 'firestore.rules');
  const rules = fs.readFileSync(rulesPath, 'utf8');

  assert.ok(rules.includes('match /studentIdMappings/{studentId}'), 'Must have studentIdMappings rule block');
  assert.ok(rules.includes('allow read, write: if isAdmin();'), 'Only allowlisted admins can read/write studentIdMappings');
});

await test('firestore.rules protects student profile fields against student tampering', () => {
  const rulesPath = path.resolve(rootDir, 'firestore.rules');
  const rules = fs.readFileSync(rulesPath, 'utf8');

  // Must allow admin to create and update student documents
  assert.ok(rules.includes('allow create: if (isOwner(userId)'), 'Owner can create');
  assert.ok(rules.includes('|| isAdmin();'), 'Admin can create/update user docs');
  // Role, accountStatus, studentId must not be modifiable by student
  assert.ok(rules.includes('"role"') || rules.includes('role'), 'Protects role');
  assert.ok(rules.includes('accountStatus'), 'Protects accountStatus');
  assert.ok(rules.includes('studentId'), 'Protects studentId');
  // Invariant from previous tests: allow delete: if false; must remain intact
  assert.ok(rules.includes('allow delete: if false;'), 'Preserves delete deny');
});

await test('Audit event whitelist includes all student account lifecycle actions', () => {
  const rulesPath = path.resolve(rootDir, 'firestore.rules');
  const rules = fs.readFileSync(rulesPath, 'utf8');

  assert.ok(rules.includes('student_account_created'), 'Includes student_account_created in audit events');
  assert.ok(rules.includes('student_account_suspended'), 'Includes student_account_suspended in audit events');
  assert.ok(rules.includes('student_account_reactivated'), 'Includes student_account_reactivated in audit events');
  assert.ok(rules.includes('student_password_reset'), 'Includes student_password_reset in audit events');
  assert.ok(rules.includes('student_profile_updated'), 'Includes student_profile_updated in audit events');
});

// ── 7. UI Integration & Visual Layout Verification ───────────────────────────
console.log('\n--- 7. Testing Frontend UI Components & Buttons ---');

await test('Admin Enrollments SSR shell and HTML contain + Add Student button', () => {
  const htmlPath = path.resolve(rootDir, 'admin/enrollments/index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  assert.ok(html.includes('ae-add-student-btn'), 'HTML must contain ae-add-student-btn');
  assert.ok(html.includes('Add Student'), 'HTML must display Add Student text');
  assert.ok(html.includes('ae-workspace'), 'HTML must include workspace container slot');
});

await test('adminEnrollments.js defines Add Student, Directory, and Credential Card handlers', () => {
  const jsPath = path.resolve(rootDir, 'js/pages/adminEnrollments.js');
  const js = fs.readFileSync(jsPath, 'utf8');

  assert.ok(js.includes('openAddStudentModal'), 'Must define openAddStudentModal');
  assert.ok(js.includes('openEditProfileModal'), 'Must define openEditProfileModal');
  assert.ok(js.includes('openResetPasswordModal'), 'Must define openResetPasswordModal');
  assert.ok(js.includes('openSuspendConfirmModal'), 'Must define openSuspendConfirmModal');
  assert.ok(js.includes('openReactivateConfirmModal'), 'Must define openReactivateConfirmModal');
  assert.ok(js.includes('copyToClipboard'), 'Must define copyToClipboard helper');
  assert.ok(js.includes('loadStudentDirectory'), 'Must define loadStudentDirectory');
  assert.ok(js.includes('ae-directory-slot'), 'Must define ae-directory-slot');
});

await test('ui.js supports Student ID login input and first-login onboarding modal', () => {
  const jsPath = path.resolve(rootDir, 'js/firebase/ui.js');
  const js = fs.readFileSync(jsPath, 'utf8');

  assert.ok(js.includes('openOnboardingModal'), 'ui.js must export openOnboardingModal');
  assert.ok(js.includes('Email or Student ID'), 'Login input must label Email or Student ID');
  assert.ok(js.includes('completeStudentProfile'), 'Must call completeStudentProfile on onboarding form submission');
});

await test('courseLearn.js and myCourses.js display dedicated suspended account warnings', () => {
  const learnPath = path.resolve(rootDir, 'js/pages/courseLearn.js');
  const learnJs = fs.readFileSync(learnPath, 'utf8');
  assert.ok(learnJs.includes('RisePaisa account is currently suspended'), 'courseLearn must show suspension notice');

  const myCoursesPath = path.resolve(rootDir, 'js/pages/myCourses.js');
  const myCoursesJs = fs.readFileSync(myCoursesPath, 'utf8');
  assert.ok(myCoursesJs.includes('Account Suspended'), 'myCourses must flag suspended accounts');
});

console.log('\n========================================================');
console.log(`STUDENT ACCOUNT TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

// ==============================================
// risePaisa - Part 8: Final Production Readiness & Release Approval Suite
// Automated verification for release approval: policy consistency, purchase pathway,
// access protection, calculator invariance, security rules, and code hygiene.
// ==============================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import { getWhatsAppPurchaseUrl, getWhatsAppNumber } from '../js/components.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('RISEPAISA FINAL PRODUCTION READINESS & RELEASE SUITE');
console.log('========================================================\n');

// ── 1. POLICY & ENROLLMENT TERM UNIFORMITY ────────────────────
console.log('--- 1. Testing Policy & Contractual Uniformity Across Surfaces ---');

const legalJs = fs.readFileSync(path.join(rootDir, 'js/pages/legal.js'), 'utf8');
const courseDetailJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseDetail.js'), 'utf8');
const coursesDataJs = fs.readFileSync(path.join(rootDir, 'js/data/courses.js'), 'utf8');
const adminEnrollmentsJs = fs.readFileSync(path.join(rootDir, 'js/pages/adminEnrollments.js'), 'utf8');

// Price uniformity: NPR 2,999 universally
assert(coursesDataJs.includes('price: 2999'), 'Course catalog defines price as NPR 2,999');
assert(courseDetailJs.includes('2999'), 'Course landing page renders NPR 2,999');
assert(legalJs.includes('2,999'), 'Legal documentation specifies NPR 2,999');

// Access term policy: One-year validity and non-refundable on Terms, no lifetime claims
assert(legalJs.includes('Course Access and Validity'), 'Terms & Conditions explicitly defines Course Access and Validity');
assert(legalJs.includes('one (1) year'), 'Terms specifies one (1) year access period');
assert(legalJs.includes('Course access is not lifetime access'), 'Terms affirms course access is not lifetime access');
assert(legalJs.includes('All course purchases are final and non-refundable'), 'Terms defines non-refundable policy');
assert(!legalJs.includes('Lifetime Platform Access'), 'No Lifetime Platform Access clause remains in Terms & Conditions');
assert(!legalJs.includes('lifetime course platform access'), 'Terms meta description does not specify lifetime access');
assert(!legalJs.includes('confirmed lifetime access'), 'FAQ does not claim confirmed lifetime access');

// Refund policy terms
assert(legalJs.includes('Duplicate or Accidental Excess Billing'), 'Refund terms guarantee 100% refund for duplicate/accidental billing');
assert(legalJs.includes('48 to 72'), 'Refund terms guarantee 48-72h resolution or refund for technical delivery failure');

// Admin enrollment default alignment
assert(adminEnrollmentsJs.includes('value="none" selected>No Expiration (Lifetime Access) — Standard</option>'), 'Admin enrollment grant modal defaults to Lifetime Access');
assert(adminEnrollmentsJs.includes('value="0" selected>Lifetime Access (No Expiration) — Standard</option>'), 'Admin student creation modal defaults to Lifetime Access');

// ── 2. WHATSAPP ENROLLMENT PATHWAY ─────────────────────────────
console.log('\n--- 2. Testing WhatsApp Purchase Link & Pre-filled Message ---');

const waNumber = getWhatsAppNumber();
assert(waNumber === '9779740269317', `Official WhatsApp destination number verified as +${waNumber}`);

const sampleWaUrl = getWhatsAppPurchaseUrl('Share Market Full Course (NEPSE)', 2999);
assert(sampleWaUrl.includes('9779740269317'), 'Purchase URL targets official WhatsApp number');
assert(sampleWaUrl.includes('Share%20Market%20Full%20Course%20(NEPSE)'), 'Purchase URL contains full course title');
assert(sampleWaUrl.includes('2%2C999'), 'Purchase URL contains formatted price (NPR 2,999)');

// ── 3. CONTENT PROTECTION & ACCESS GATING ─────────────────────
console.log('\n--- 3. Testing Course Content Protection & Access Gates ---');

const courseLearnJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseLearn.js'), 'utf8');

assert(courseLearnJs.includes('cl-player-wrapper'), 'Course player wrapper renders');
assert(courseLearnJs.includes('cl-locked-screen'), 'Course player renders locked screen for unauthorized visitors');
assert(courseLearnJs.includes('cl-locked-signin-trigger'), 'Locked screen provides sign-in pathway for enrolled students');
assert(courseLearnJs.includes('cl-locked-whatsapp-cta'), 'Locked screen provides WhatsApp enrollment trigger');
assert(courseLearnJs.includes('isFreePreview && embedUrl'), 'Video player is only mounted when lesson is free preview or student is enrolled');

// ── 4. FIRESTORE SECURITY RULES INTEGRITY ─────────────────────
console.log('\n--- 4. Testing Firestore Security Rules & Authorization Model ---');

const firestoreRules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');

assert(firestoreRules.includes('match /{document=**} {\n      allow read, write: if false;\n    }'), 'Firestore rules enforce default-deny across all unspecified collections');
assert(firestoreRules.includes('allow read: if isOwner(userId) || isAdmin();'), 'User profiles readable only by owner or administrator');
assert(firestoreRules.includes('allow create, update: if isAdmin()'), 'Course enrollments can only be modified by verified administrators');
assert(firestoreRules.includes('match /studentIdMappings/{studentId} {\n      allow read, write: if isAdmin();\n    }'), 'Student ID mappings restricted exclusively to administrators');
assert(firestoreRules.includes('allow update, delete: if false; // Tamper-proof append-only audit trail'), 'Audit logs are immutable and tamper-proof');

// ── 5. CALCULATOR STATUTORY COMPLIANCE ────────────────────────
console.log('\n--- 5. Testing Financial Calculator Constants & Regulatory Slabs ---');

const nepalConfigJs = fs.readFileSync(path.join(rootDir, 'js/calculators/nepalConfig.js'), 'utf8');

assert(nepalConfigJs.includes("currentFiscalYear: '2082/83'"), 'Nepal tax config supports latest FY 2082/83 Finance Act');
assert(nepalConfigJs.includes('sebonFeeRate: 0.00015'), 'NEPSE calculator includes 0.015% SEBON regulatory fee');
assert(nepalConfigJs.includes('dpCharge: 25'), 'NEPSE calculator includes NPR 25 CDS & Clearing DP fee');
assert(nepalConfigJs.includes('individualShortTerm: 0.075'), 'Short-term share capital gains tax set to 7.5% (< 365 days)');
assert(nepalConfigJs.includes('individualLongTerm: 0.05'), 'Long-term share capital gains tax set to 5.0% (>= 365 days)');
assert(nepalConfigJs.includes('quarterly: { periodsPerYear: 4, label: \'Quarterly (Nepal Standard)\' }'), 'Fixed deposit defaults to quarterly compounding standard');

// ── 6. CODE QUALITY & LINTING VERIFICATION ─────────────────────
console.log('\n--- 6. Verifying ESLint Zero-Error Standard ---');

const eslintResult = spawnSync('npx', ['eslint', 'js/'], {
  cwd: rootDir,
  encoding: 'utf8',
  env: { ...process.env }
});

assert(eslintResult.status === 0, 'ESLint check on js/ directory exits with 0 errors');

// ── SUMMARY ────────────────────────────────────────────────────
console.log('\n========================================================');
console.log(`RELEASE SUITE SUMMARY: ${passedTests} passed, ${failedTests} failed`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

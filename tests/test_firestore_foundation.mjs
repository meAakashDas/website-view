// ========================================================
// RISEPAISA FIRESTORE FOUNDATION & SECURITY TEST SUITE
// ========================================================
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('TEST SUITE: FIRESTORE FOUNDATION & SECURITY SPECIFICATION');
console.log('========================================================\n');

// ── 1. Configuration & Rules File Verification ───────────────
console.log('--- 1. Testing Configuration Files & Isolation ---');

const firebaseJsonPath = path.join(rootDir, 'firebase.json');
assert(fs.existsSync(firebaseJsonPath), 'firebase.json exists');

const firebaseJson = JSON.parse(fs.readFileSync(firebaseJsonPath, 'utf8'));
assert(Boolean(firebaseJson.firestore), 'firebase.json contains firestore target');
assert(firebaseJson.firestore.rules === 'firestore.rules', 'firebase.json points to firestore.rules');
assert(firebaseJson.firestore.indexes === 'firestore.indexes.json', 'firebase.json points to firestore.indexes.json');
assert(firebaseJson.hosting === undefined, 'CRITICAL: firebase.json does NOT contain hosting (GitHub Pages preserved)');
assert(firebaseJson.functions === undefined, 'firebase.json does NOT configure Cloud Functions');
assert(firebaseJson.storage === undefined, 'firebase.json does NOT configure Cloud Storage');

const firebaseRcPath = path.join(rootDir, '.firebaserc');
assert(fs.existsSync(firebaseRcPath), '.firebaserc exists');
const firebaseRc = JSON.parse(fs.readFileSync(firebaseRcPath, 'utf8'));
assert(firebaseRc.projects?.default === 'risepaisa-77278', '.firebaserc targets risepaisa-77278');

const indexesPath = path.join(rootDir, 'firestore.indexes.json');
assert(fs.existsSync(indexesPath), 'firestore.indexes.json exists');
const indexesJson = JSON.parse(fs.readFileSync(indexesPath, 'utf8'));
assert(Array.isArray(indexesJson.indexes), 'firestore.indexes.json contains valid indexes array');

// ── 2. Security Rules Analysis ────────────────────────────────
console.log('\n--- 2. Testing firestore.rules Security Specification ---');

const rulesPath = path.join(rootDir, 'firestore.rules');
assert(fs.existsSync(rulesPath), 'firestore.rules exists');

const rulesContent = fs.readFileSync(rulesPath, 'utf8');
assert(rulesContent.includes("rules_version = '2';"), "Rules declare version '2'");
assert(rulesContent.includes('match /{document=**} {\n      allow read, write: if false;\n    }'), 'Default deny catch-all rule is active');

// User Profiles
assert(rulesContent.includes('match /users/{userId}'), 'Defines /users/{userId} path match');
assert(rulesContent.includes('allow read: if isOwner(userId);'), 'Users can only read their own profile');
assert(rulesContent.includes('hasOnlyAllowedUserFields'), 'Enforces user profile field whitelist');
assert(rulesContent.includes("'displayName'"), 'Whitelist permits displayName');
assert(rulesContent.includes("'email'"), 'Whitelist permits email');
assert(rulesContent.includes("'photoURL'"), 'Whitelist permits photoURL');
assert(rulesContent.includes("'createdAt'"), 'Whitelist permits createdAt');
assert(rulesContent.includes("'updatedAt'"), 'Whitelist permits updatedAt');
assert(!rulesContent.includes("'isAdmin'") && !rulesContent.includes("'role'") && !rulesContent.includes("'paid'"), 'Rules do NOT whitelist isAdmin, role, or paid profile fields');
assert(rulesContent.includes('resource.data.createdAt'), 'Profile update enforces createdAt immutability');
assert(rulesContent.includes('allow delete: if false;'), 'Client-side profile deletion is forbidden');

// Bookmarks
assert(rulesContent.includes('match /bookmarks/{bookmarkId}'), 'Defines /bookmarks/{bookmarkId} subcollection match');
assert(rulesContent.includes('hasOnlyAllowedBookmarkFields'), 'Enforces bookmark field whitelist');
assert(rulesContent.includes("d.type in ['lesson', 'guide', 'resource', 'calculator', 'article']"), 'Enforces valid website bookmark content types');
assert(rulesContent.includes('allow delete: if isOwner(userId);'), 'Users can delete only their own bookmarks');

assert(rulesContent.includes('match /courses/{courseId}'), 'Future courses collection is explicitly defined');
assert(rulesContent.includes('match /admin/{adminDoc}'), 'Admin collection is explicitly defined');
assert(rulesContent.includes('allow create, update: if isAdmin()') || rulesContent.includes('match /courses/{courseId} {\n      allow read, write: if false;'), 'Courses collection is strictly protected by security rules');
assert(rulesContent.includes('match /admin/{adminDoc} {\n      allow read, write: if false;'), 'Admin collection is explicitly locked');

// ── 3. Database Client Interface & Validation ──────────────────
console.log('\n--- 3. Testing js/firebase/db.js Module & Schema Validation ---');

const dbModulePath = path.join(rootDir, 'js/firebase/db.js');
assert(fs.existsSync(dbModulePath), 'db.js exists at js/firebase/db.js');

const {
  generateBookmarkId,
  validateBookmarkPayload,
  validateUserProfilePayload,
  getFirestoreDb
} = await import('../js/firebase/db.js');

assert(typeof generateBookmarkId === 'function', 'generateBookmarkId is exported');
assert(typeof validateBookmarkPayload === 'function', 'validateBookmarkPayload is exported');
assert(typeof validateUserProfilePayload === 'function', 'validateUserProfilePayload is exported');
assert(typeof getFirestoreDb === 'function', 'getFirestoreDb is exported');

// Test deterministic bookmark ID generation
const id1 = generateBookmarkId('lesson', 'demat-meroshare-crn-setup');
const id2 = generateBookmarkId('lesson', 'demat-meroshare-crn-setup');
const id3 = generateBookmarkId('guide', 'complete-ipo-guide');
assert(id1 === 'lesson_demat-meroshare-crn-setup', 'generateBookmarkId formats correctly');
assert(id1 === id2, 'generateBookmarkId produces stable, deterministic IDs (prevents duplicates)');
assert(id3 === 'guide_complete-ipo-guide', 'generateBookmarkId supports guides');

// Test Profile Payload Validation
const validProfile = {
  displayName: 'Aakash Das',
  email: 'aakash@example.com',
  photoURL: 'https://example.com/avatar.jpg'
};
assert(validateUserProfilePayload(validProfile).valid === true, 'Accepts valid profile payload');

const exploitProfileAdmin = {
  ...validProfile,
  isAdmin: true
};
assert(validateUserProfilePayload(exploitProfileAdmin).valid === false, 'Rejects exploit payload with isAdmin');

const exploitProfileRole = {
  ...validProfile,
  role: 'admin'
};
assert(validateUserProfilePayload(exploitProfileRole).valid === false, 'Rejects exploit payload with role');

const exploitProfilePaid = {
  ...validProfile,
  paid: true,
  courseAccess: ['nepse-basics']
};
assert(validateUserProfilePayload(exploitProfilePaid).valid === false, 'Rejects exploit payload with paid/courseAccess');

const exploitProfileUnknown = {
  ...validProfile,
  unauthorizedField: 'foo'
};
assert(validateUserProfilePayload(exploitProfileUnknown).valid === false, 'Rejects unexpected fields in profile payload');

// Test Bookmark Payload Validation
const validLessonBookmark = {
  type: 'lesson',
  slug: 'demat-meroshare-crn-setup',
  title: 'How to Open Demat & MeroShare',
  url: '/learn/nepse/demat-meroshare-crn-setup'
};
assert(validateBookmarkPayload(validLessonBookmark).valid === true, 'Accepts valid lesson bookmark');

const validGuideBookmark = {
  type: 'guide',
  slug: 'complete-ipo-guide',
  title: 'Complete IPO Guide',
  url: '/learn/guides/complete-ipo-guide'
};
assert(validateBookmarkPayload(validGuideBookmark).valid === true, 'Accepts valid guide bookmark');

const validResourceBookmark = {
  type: 'resource',
  slug: 'budget-planner-system',
  title: 'Budget Planner System',
  url: '/resources/budget-planner-system'
};
assert(validateBookmarkPayload(validResourceBookmark).valid === true, 'Accepts valid resource bookmark');

const invalidTypeBookmark = {
  type: 'malicious-type',
  slug: 'test-slug',
  title: 'Test Title',
  url: '/test'
};
assert(validateBookmarkPayload(invalidTypeBookmark).valid === false, 'Rejects invalid bookmark type');

const invalidInjectedBookmark = {
  ...validLessonBookmark,
  isUnlocked: true
};
assert(validateBookmarkPayload(invalidInjectedBookmark).valid === false, 'Rejects extraneous bookmark fields');

// Test SSR / Build Safety
const ssrDb = await getFirestoreDb();
assert(ssrDb === null, 'getFirestoreDb returns null safely in Node environment (prevents SSR errors)');

// ── 3.1 Network Reliability & Bounded Retry Verification ───────
console.log('\n--- 3.1 Testing Network Reliability & Bounded Retry Strategy ---');
const { isTransientError, withBoundedRetry } = await import('../js/firebase/db.js');

assert(typeof isTransientError === 'function', 'isTransientError helper is exported');
assert(typeof withBoundedRetry === 'function', 'withBoundedRetry helper is exported');

// Transient error classification checks
assert(isTransientError({ code: 'unavailable' }) === true, 'Classifies code "unavailable" as transient');
assert(isTransientError({ code: 'deadline-exceeded' }) === true, 'Classifies code "deadline-exceeded" as transient');
assert(isTransientError({ code: 'network-request-failed' }) === true, 'Classifies code "network-request-failed" as transient');
assert(isTransientError({ message: 'Failed to fetch' }) === true, 'Classifies fetch network drop as transient');

// Permanent error classification checks (must NOT retry)
assert(isTransientError({ code: 'permission-denied' }) === false, 'Rejects code "permission-denied" as non-transient');
assert(isTransientError({ code: 'unauthenticated' }) === false, 'Rejects code "unauthenticated" as non-transient');
assert(isTransientError({ code: 'invalid-argument' }) === false, 'Rejects code "invalid-argument" as non-transient');
assert(isTransientError({ code: 'not-found' }) === false, 'Rejects code "not-found" as non-transient');
assert(isTransientError({ message: 'Missing or insufficient permissions.' }) === false, 'Rejects permission message as non-transient');

// Verify withBoundedRetry executes and resolves on first attempt
let immediateCount = 0;
const immediateRes = await withBoundedRetry(async () => {
  immediateCount++;
  return 'success_val';
});
assert(immediateRes === 'success_val' && immediateCount === 1, 'withBoundedRetry succeeds immediately without delay');

// Verify withBoundedRetry retries transient errors and succeeds
let retryCount = 0;
const recoveredRes = await withBoundedRetry(async () => {
  retryCount++;
  if (retryCount < 3) {
    const err = new Error('Client is offline');
    err.code = 'unavailable';
    throw err;
  }
  return 'recovered';
}, { maxAttempts: 3, baseDelayMs: 10, maxDelayMs: 50 });
assert(recoveredRes === 'recovered' && retryCount === 3, 'withBoundedRetry retries transient errors and recovers');

// Verify withBoundedRetry does not retry permanent errors
let permCount = 0;
let caughtPerm = false;
try {
  await withBoundedRetry(async () => {
    permCount++;
    const err = new Error('Permission denied');
    err.code = 'permission-denied';
    throw err;
  }, { maxAttempts: 3, baseDelayMs: 10 });
} catch (e) {
  caughtPerm = true;
}
assert(caughtPerm && permCount === 1, 'withBoundedRetry aborts immediately on permanent authorization error');

// ── 4. Public Pages & Calculator Isolation ─────────────────────
console.log('\n--- 4. Testing Zero Overhead on Static Pages & Calculators ---');

const calcDir = path.join(rootDir, 'js/calculators');
const calcFiles = fs.readdirSync(calcDir).filter(f => f.endsWith('.js'));
let calcHasFirestore = false;

calcFiles.forEach(file => {
  const content = fs.readFileSync(path.join(calcDir, file), 'utf8');
  if (content.includes('firestore') || content.includes('firebase/db')) {
    calcHasFirestore = true;
  }
});
assert(calcHasFirestore === false, 'No calculator files import or reference Firestore');

const learnPageContent = fs.readFileSync(path.join(rootDir, 'js/pages/learn.js'), 'utf8');
assert(learnPageContent.includes('localStorage.getItem'), 'learn.js preserves local storage for bookmark display');
assert(!learnPageContent.includes("from './firebase/db.js'"), 'learn.js does not run automatic Firestore queries on load');

console.log('\n========================================================');
console.log(`FIRESTORE FOUNDATION SUITE: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

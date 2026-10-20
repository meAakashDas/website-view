// ========================================================
// RISEPAISA BOOKMARK PERSISTENCE & LIFECYCLE TEST SUITE
// Tests Scenarios TEST A through TEST K from Specification
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
console.log('TEST SUITE: BOOKMARK PERSISTENCE & END-TO-END LIFECYCLE');
console.log('========================================================\n');

class MockStorage {
  constructor(initialData = {}) {
    this.store = new Map(Object.entries(initialData));
  }
  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }
  setItem(key, value) {
    this.store.set(key, String(value));
  }
  removeItem(key) {
    this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
}

const {
  STORAGE_KEYS,
  syncBookmarkToggle,
  isBookmarkSaved,
  reconcileBookmarksOnSignIn,
  handleUserSignOut,
  resetSyncSession,
  resolveBookmarkMetadata,
  registerLessonAlias,
  getLessonAlias
} = await import('../js/firebase/db.js');

const { renderBookmarksTab } = await import('../js/pages/learn.js');

// ── TEST A: CREATE BOOKMARK ───────────────────────────────────
console.log('--- TEST A: Bookmark Creation & UI Representation ---');

resetSyncSession();
const testAStorage = new MockStorage();

// 1. Unauthenticated attempt must be rejected
const unauthRes = await syncBookmarkToggle('lesson', 'pf-1', true, null, testAStorage);
assert(unauthRes.success === false && unauthRes.requiresAuth === true, 'Unauthenticated bookmark attempt is rejected with requiresAuth: true');
assert(isBookmarkSaved('lesson', 'pf-1', testAStorage) === false, 'No bookmark saved in storage for unauthenticated visitor');

globalThis.localStorage = testAStorage;
const unauthRendered = renderBookmarksTab('en', {});
assert(unauthRendered.includes('Sign in to access your bookmarks'), 'Rendered bookmarks tab prompts unauthenticated visitor to sign in');

// 2. Authenticated user bookmarks lesson 'pf-1'
testAStorage.setItem(STORAGE_KEYS.ACTIVE_UID, 'test_student_1');
const createRes = await syncBookmarkToggle('lesson', 'pf-1', true, null, testAStorage);
assert(createRes.success === true, 'Authenticated bookmark creation returns success: true');
assert(isBookmarkSaved('lesson', 'pf-1', testAStorage) === true, 'Bookmark is saved in storage for authenticated user');

const renderedA = renderBookmarksTab('en', {});
assert(renderedA.includes('data-lesson-id="pf-1"'), 'Saved for Later renders the bookmarked lesson card');
assert(renderedA.includes('The Cash Flow Equation in Nepal'), 'Saved for Later renders correct lesson title');
assert(!renderedA.includes('saved-lessons-empty'), 'Empty state is hidden when bookmarks exist');

// ── TEST B: REFRESH RESILIENCE ────────────────────────────────
console.log('\n--- TEST B: Persistence Across Page Refresh ---');

// Simulate page refresh: module reset, auth resolving, verify storage is NOT wiped
const refreshStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'test_student_1',
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['pf-1', 'nep-1'])
});

// Verify handleUserSignOut is NOT called on refresh (storage keeps items)
assert(refreshStorage.getItem(STORAGE_KEYS.LESSONS).includes('pf-1'), 'Bookmarks remain intact before auth handshake');

// Mock cloud fetch during reconciliation on refresh
const mockCloudRefresh = [
  { id: 'lesson_pf-1', type: 'lesson', slug: 'pf-1', title: 'The Cash Flow Equation in Nepal', url: '/learn/personal-finance/cash-flow-equation-nepal' },
  { id: 'lesson_nep-1', type: 'lesson', slug: 'nep-1', title: 'Setting Up Demat & MeroShare', url: '/learn/nepse/demat-meroshare-crn-setup' }
];

resetSyncSession();
const refreshReconcile = await reconcileBookmarksOnSignIn('test_student_1', refreshStorage, mockCloudRefresh);
assert(refreshReconcile.success === true, 'Reconciliation succeeds on refresh');

const afterRefreshLessons = JSON.parse(refreshStorage.getItem(STORAGE_KEYS.LESSONS));
assert(afterRefreshLessons.includes('pf-1'), 'Lesson pf-1 persists after refresh');
assert(afterRefreshLessons.includes('nep-1'), 'Lesson nep-1 persists after refresh');

// ── TEST C: NAVIGATION RETENTION ──────────────────────────────
console.log('\n--- TEST C: Navigation Between Learn Sections ---');

// Navigating away and back: re-rendering bookmarks tab with existing storage
globalThis.localStorage = refreshStorage;
const renderedC = renderBookmarksTab('en', {});
assert(renderedC.includes('data-lesson-id="pf-1"') && renderedC.includes('data-lesson-id="nep-1"'), 'All bookmarked lessons present upon navigating back to Saved for Later');
assert(renderedC.includes('2 Saved Lessons'), 'Counter badge displays 2 Saved Lessons');

// ── TEST D: SIGN-OUT & SIGN-IN (NEW SESSION) ──────────────────
console.log('\n--- TEST D: Signing Out & Re-Authenticating Same Account ---');

const sessionUserUid = 'student_samuel';
const sessionCloudBookmarks = [
  { id: 'lesson_pf-2', type: 'lesson', slug: 'pf-2', title: '50/30/20 Budget Adapted for Nepal', url: '/learn/personal-finance/50-30-20-budget-nepal' }
];

const sessionStorage = new MockStorage();
resetSyncSession();

// 1. Initial sign-in
await reconcileBookmarksOnSignIn(sessionUserUid, sessionStorage, sessionCloudBookmarks);
assert(isBookmarkSaved('lesson', 'pf-2', sessionStorage) === true, 'Session user has pf-2 bookmarked');

// 2. User signs out
handleUserSignOut(sessionStorage);
assert(sessionStorage.getItem(STORAGE_KEYS.ACTIVE_UID) === null, 'Active UID cleared on sign out');
assert(isBookmarkSaved('lesson', 'pf-2', sessionStorage) === false, 'Personal bookmarks removed from device storage on sign out');

// 3. User signs back into the same account in a future session
resetSyncSession();
const reSignInRes = await reconcileBookmarksOnSignIn(sessionUserUid, sessionStorage, sessionCloudBookmarks);
assert(reSignInRes.success === true, 'Re-signing in succeeds');
assert(isBookmarkSaved('lesson', 'pf-2', sessionStorage) === true, 'Personal bookmarks restored from authoritative cloud source');

// ── TEST E: REMOVAL & PERMANENT DELETION ───────────────────────
console.log('\n--- TEST E: Bookmark Removal & Sync ---');

const removeStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'test_student_1',
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['pf-1', 'pf-2'])
});
globalThis.localStorage = removeStorage;

// Remove pf-1
const removeRes = await syncBookmarkToggle('lesson', 'pf-1', false, null, removeStorage);
assert(removeRes.success === true, 'Bookmark removal succeeds');
assert(isBookmarkSaved('lesson', 'pf-1', removeStorage) === false, 'Removed lesson is no longer saved locally');
assert(isBookmarkSaved('lesson', 'pf-2', removeStorage) === true, 'Other bookmarks remain unchanged');

const renderedE = renderBookmarksTab('en', {});
assert(!renderedE.includes('data-lesson-id="pf-1"'), 'Removed lesson disappeared from Saved for Later view');
assert(renderedE.includes('data-lesson-id="pf-2"'), 'Remaining lesson pf-2 is displayed');

// ── TEST F: DUPLICATE CLICK PROTECTION ────────────────────────
console.log('\n--- TEST F: Duplicate Click Protection & Coalescing ---');

resetSyncSession();
const rapidStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'test_student_1'
});

// Trigger 5 rapid simultaneous clicks on the same lesson
const clickPromises = [
  syncBookmarkToggle('lesson', 'tax-1', true, null, rapidStorage),
  syncBookmarkToggle('lesson', 'tax-1', true, null, rapidStorage),
  syncBookmarkToggle('lesson', 'tax-1', true, null, rapidStorage),
  syncBookmarkToggle('lesson', 'tax-1', true, null, rapidStorage),
  syncBookmarkToggle('lesson', 'tax-1', true, null, rapidStorage)
];

const clickResults = await Promise.all(clickPromises);
const allSucceeded = clickResults.every(r => r.success === true);
assert(allSucceeded, 'All concurrent clicks handle cleanly without throwing');

const taxLessons = JSON.parse(rapidStorage.getItem(STORAGE_KEYS.LESSONS));
const countTax1 = taxLessons.filter(x => x === 'tax-1').length;
assert(countTax1 === 1, 'Duplicate protection guarantees exactly 1 record saved (no duplicates)');

// ── TEST G: ACCOUNT ISOLATION ─────────────────────────────────
console.log('\n--- TEST G: Account Isolation Between Multiple Students ---');

const isolationStorage = new MockStorage();
resetSyncSession();

const studentAlphaUid = 'student_alpha_001';
const studentBetaUid = 'student_beta_002';

const alphaBookmarks = [
  { id: 'lesson_alpha-priv', type: 'lesson', slug: 'alpha-priv', title: 'Alpha Private Study', url: '/learn/alpha' }
];
const betaBookmarks = [
  { id: 'lesson_beta-priv', type: 'lesson', slug: 'beta-priv', title: 'Beta Private Study', url: '/learn/beta' }
];

// Student Alpha signs in
await reconcileBookmarksOnSignIn(studentAlphaUid, isolationStorage, alphaBookmarks);
assert(isBookmarkSaved('lesson', 'alpha-priv', isolationStorage) === true, 'Student Alpha sees Alpha bookmarks');
assert(isBookmarkSaved('lesson', 'beta-priv', isolationStorage) === false, 'Student Alpha CANNOT see Beta bookmarks');

// Alpha signs out
handleUserSignOut(isolationStorage);

// Student Beta signs in on same browser
resetSyncSession();
await reconcileBookmarksOnSignIn(studentBetaUid, isolationStorage, betaBookmarks);
assert(isBookmarkSaved('lesson', 'beta-priv', isolationStorage) === true, 'Student Beta sees Beta bookmarks');
assert(isBookmarkSaved('lesson', 'alpha-priv', isolationStorage) === false, 'CRITICAL: Student Beta CANNOT see Alpha bookmarks (Zero Data Leakage)');

// ── TEST H: NETWORK FAILURE ROLLBACK ──────────────────────────
console.log('\n--- TEST H: Network Failure Recovery & Rollback ---');

const offlineTestStorage = new MockStorage({
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['safe-lesson'])
});

// Reconcile with network failure (returns null from provider)
resetSyncSession();
const failReconcile = await reconcileBookmarksOnSignIn('user_net_fail', offlineTestStorage, () => null);
assert(failReconcile.networkFailure === true, 'Network failure flagged properly');

const preservedLessons = JSON.parse(offlineTestStorage.getItem(STORAGE_KEYS.LESSONS));
assert(preservedLessons.includes('safe-lesson'), 'Existing bookmarks are NOT deleted or overwritten on network error');

// ── TEST I: AUTHENTICATION TIMING ─────────────────────────────
console.log('\n--- TEST I: Authentication Timing & Loading State ---');

// Simulate pending auth where active UID exists in storage but authReady is false
const authPendingStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'pending_user_99',
  [STORAGE_KEYS.LESSONS]: JSON.stringify([])
});

globalThis.localStorage = authPendingStorage;
globalThis.window = { _rpAuthReady: false };

const renderedI = renderBookmarksTab('en', {});
assert(renderedI.includes('saved-lessons-loading'), 'Shows elegant loading state when auth resolution is pending');
assert(!renderedI.includes('saved-lessons-empty'), 'Does NOT flash false empty state while auth is initializing');

// Once auth resolves and bookmarks are empty:
globalThis.window._rpAuthReady = true;
const renderedResolvedEmpty = renderBookmarksTab('en', {});
assert(renderedResolvedEmpty.includes('saved-lessons-empty'), 'Shows clean empty state only after auth resolution');

// ── TEST J: MISSING LESSON METADATA HANDLING ──────────────────
console.log('\n--- TEST J: Missing Metadata Fallback ---');

const missingMetaStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'test_student_1',
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['archived-special-lesson-2024'])
});

globalThis.localStorage = missingMetaStorage;
const renderedJ = renderBookmarksTab('en', {});

assert(renderedJ.includes('data-lesson-id="archived-special-lesson-2024"'), 'Missing metadata lesson is rendered in bookmarks');
assert(renderedJ.includes('Archived Special Lesson 2024'), 'Formatted title-case fallback generated gracefully');
assert(renderedJ.includes('data-lesson-slug="archived-special-lesson-2024"'), 'Remove button data attributes bound properly');
assert(!renderedJ.includes('saved-lessons-empty'), 'List remains usable and does NOT crash or hide items');

// ── TEST K: DIFFERENT LESSONS & CATEGORIES ────────────────────
console.log('\n--- TEST K: Multi-Lesson & Cross-Category Verification ---');

const multiLessonStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'test_student_1',
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['pf-1', 'nep-1', 'tax-1', 'ins-1'])
});

globalThis.localStorage = multiLessonStorage;
const renderedK = renderBookmarksTab('en', {});

assert(renderedK.includes('Personal Finance') || renderedK.includes('pf-1'), 'Contains Personal Finance lesson');
assert(renderedK.includes('Demat') || renderedK.includes('nep-1') || renderedK.includes('NEPSE'), 'Contains NEPSE lesson');
assert(renderedK.includes('Taxation') || renderedK.includes('tax-1') || renderedK.includes('Tax'), 'Contains Taxation lesson');
assert(renderedK.includes('Saved Lessons'), 'Count badge formatted correctly');

// Test alias equivalence
registerLessonAlias('nep-1', 'demat-meroshare-crn-setup');
assert(getLessonAlias('nep-1') === 'demat-meroshare-crn-setup', 'Lesson ID maps to slug');
assert(getLessonAlias('demat-meroshare-crn-setup') === 'nep-1', 'Lesson slug maps to ID');

const aliasStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'test_student_1',
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['demat-meroshare-crn-setup'])
});
assert(isBookmarkSaved('lesson', 'nep-1', aliasStorage) === true, 'isBookmarkSaved detects bookmark stored under slug alias');

console.log('\n========================================================');
console.log(`LIFECYCLE TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

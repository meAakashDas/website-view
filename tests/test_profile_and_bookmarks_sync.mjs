// ========================================================
// RISEPAISA USER PROFILE & CLOUD BOOKMARK SYNC TEST SUITE
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
console.log('TEST SUITE: PART 4 - USER PROFILES & CLOUD BOOKMARK SYNC');
console.log('========================================================\n');

// ── In-Memory Mock Storage Adapter ───────────────────────────
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

// Import db module exports
const {
  STORAGE_KEYS,
  VALID_BOOKMARK_TYPES,
  ALLOWED_PROFILE_KEYS,
  generateBookmarkId,
  validateBookmarkPayload,
  validateUserProfilePayload,
  resolveBookmarkMetadata,
  reconcileBookmarksOnSignIn,
  syncBookmarkToggle,
  handleUserSignOut,
  isBookmarkSaved,
  resetSyncSession
} = await import('../js/firebase/db.js');

// ── 1. Guest Behavior & Local Storage Integrity ───────────────
console.log('--- 1. Testing Guest Behavior & Storage Integrity ---');

assert(Boolean(STORAGE_KEYS.LESSONS), 'STORAGE_KEYS.LESSONS is defined');
assert(Boolean(STORAGE_KEYS.GUIDES), 'STORAGE_KEYS.GUIDES is defined');
assert(Boolean(STORAGE_KEYS.RESOURCES), 'STORAGE_KEYS.RESOURCES is defined');
assert(Boolean(STORAGE_KEYS.ACTIVE_UID), 'STORAGE_KEYS.ACTIVE_UID is defined');

const guestStorage = new MockStorage();

// 1. Unauthenticated guest attempts must be blocked
const saveRes1 = await syncBookmarkToggle('lesson', 'demat-meroshare-crn-setup', true, null, guestStorage);
assert(saveRes1.success === false && saveRes1.requiresAuth === true, 'Unauthenticated bookmark attempt returns requiresAuth: true');
assert(guestStorage.getItem(STORAGE_KEYS.LESSONS) === null, 'No lesson is stored in localStorage for unauthenticated visitor');
assert(isBookmarkSaved('lesson', 'demat-meroshare-crn-setup', guestStorage) === false, 'isBookmarkSaved returns false for unauthenticated visitor');

const unauthGuideRes = await syncBookmarkToggle('guide', 'complete-ipo-guide', true, null, guestStorage);
assert(unauthGuideRes.success === false && unauthGuideRes.requiresAuth === true, 'Unauthenticated guide bookmark returns requiresAuth: true');

// 2. Authenticated user saving and removing bookmarks
const authStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'auth_student_001'
});
const saveAuthRes = await syncBookmarkToggle('lesson', 'demat-meroshare-crn-setup', true, null, authStorage);
assert(saveAuthRes.success === true, 'Authenticated bookmark save returns success');
const authLessons = JSON.parse(authStorage.getItem(STORAGE_KEYS.LESSONS));
assert(Array.isArray(authLessons) && authLessons.includes('demat-meroshare-crn-setup'), 'Lesson is stored in localStorage for authenticated user');
assert(isBookmarkSaved('lesson', 'demat-meroshare-crn-setup', authStorage) === true, 'isBookmarkSaved correctly detects saved lesson for authenticated user');

// Authenticated user removing a lesson
const removeAuthRes = await syncBookmarkToggle('lesson', 'demat-meroshare-crn-setup', false, null, authStorage);
assert(removeAuthRes.success === true, 'Authenticated bookmark removal succeeds');
const updatedLessons = JSON.parse(authStorage.getItem(STORAGE_KEYS.LESSONS));
assert(!updatedLessons.includes('demat-meroshare-crn-setup'), 'Lesson is removed from localStorage');
assert(isBookmarkSaved('lesson', 'demat-meroshare-crn-setup', authStorage) === false, 'isBookmarkSaved reflects removed lesson');

// ── 2. Authenticated Profile Rules & Validation ───────────────
console.log('\n--- 2. Testing Authenticated User Profile Rules ---');

const minimalValidProfile = {
  displayName: 'Pooja Shrestha',
  email: 'pooja@example.com',
  photoURL: null
};
const val1 = validateUserProfilePayload(minimalValidProfile);
assert(val1.valid === true, 'Minimal valid profile passes schema validation');

const fullValidProfile = {
  displayName: 'Pooja Shrestha',
  email: 'pooja@example.com',
  photoURL: 'https://lh3.googleusercontent.com/a/sample-photo',
  createdAt: new Date(),
  updatedAt: new Date()
};
assert(validateUserProfilePayload(fullValidProfile).valid === true, 'Full valid profile with timestamps passes schema validation');

// Privilege escalation checks
const exploitAdmin = { ...minimalValidProfile, isAdmin: true };
assert(validateUserProfilePayload(exploitAdmin).valid === false, 'Rejects exploit payload containing isAdmin');

const exploitRole = { ...minimalValidProfile, role: 'superadmin' };
assert(validateUserProfilePayload(exploitRole).valid === false, 'Rejects exploit payload containing role');

const exploitPaid = { ...minimalValidProfile, paid: true, courseAccess: ['all'] };
assert(validateUserProfilePayload(exploitPaid).valid === false, 'Rejects exploit payload containing paid / courseAccess');

const exploitExtra = { ...minimalValidProfile, customCreditScore: 780 };
assert(validateUserProfilePayload(exploitExtra).valid === false, 'Rejects unwhitelisted arbitrary fields');

// Data size limits
const longNameProfile = { ...minimalValidProfile, displayName: 'a'.repeat(101) };
assert(validateUserProfilePayload(longNameProfile).valid === false, 'Rejects displayName exceeding 100 characters');

const longEmailProfile = { ...minimalValidProfile, email: 'a'.repeat(151) };
assert(validateUserProfilePayload(longEmailProfile).valid === false, 'Rejects email exceeding 150 characters');

const longPhotoProfile = { ...minimalValidProfile, photoURL: 'https://example.com/' + 'a'.repeat(500) };
assert(validateUserProfilePayload(longPhotoProfile).valid === false, 'Rejects photoURL exceeding 500 characters');

// ── 3. Deterministic Bookmark Identifiers & Payload Security ──
console.log('\n--- 3. Testing Bookmark Identifiers & Payload Security ---');

const idA = generateBookmarkId('lesson', 'demat-meroshare-crn-setup');
const idB = generateBookmarkId('lesson', 'demat-meroshare-crn-setup');
assert(idA === idB, 'generateBookmarkId produces stable, repeatable ID (prevents duplicates in Firestore)');
assert(idA === 'lesson_demat-meroshare-crn-setup', 'Deterministic ID follows type_slug naming convention');

const validPayload = {
  type: 'lesson',
  slug: 'demat-meroshare-crn-setup',
  title: 'How to Open Demat & MeroShare in Nepal',
  url: '/learn/nepse/demat-meroshare-crn-setup'
};
assert(validateBookmarkPayload(validPayload).valid === true, 'Valid lesson bookmark payload passes validation');

// Whitelisted bookmark types
for (const t of VALID_BOOKMARK_TYPES) {
  const p = { type: t, slug: 'test-slug', title: 'Test Title', url: '/test' };
  assert(validateBookmarkPayload(p).valid === true, `validateBookmarkPayload permits type: "${t}"`);
}

// Injected fields in bookmarks
const injectedPayload = { ...validPayload, permissions: 'all' };
assert(validateBookmarkPayload(injectedPayload).valid === false, 'Rejects bookmark payload with injected fields');

// Type boundary checks
const invalidTypePayload = { ...validPayload, type: 'unsupported-custom-type' };
assert(validateBookmarkPayload(invalidTypePayload).valid === false, 'Rejects unapproved bookmark type');

// Empty slug / title / url
assert(validateBookmarkPayload({ ...validPayload, slug: '' }).valid === false, 'Rejects empty slug');
assert(validateBookmarkPayload({ ...validPayload, title: '' }).valid === false, 'Rejects empty title');
assert(validateBookmarkPayload({ ...validPayload, url: '' }).valid === false, 'Rejects empty url');

// ── 4. Safe LocalStorage Migration & Union Reconciliation ──────
console.log('\n--- 4. Testing Safe LocalStorage Migration & Reconciliation ---');

resetSyncSession();

const migrationStorage = new MockStorage({
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['local-lesson-1', 'shared-lesson-2']),
  [STORAGE_KEYS.GUIDES]: JSON.stringify(['local-guide-1']),
  [STORAGE_KEYS.RESOURCES]: JSON.stringify(['local-resource-1'])
});

// Mock cloud bookmarks from other devices
const cloudBookmarksUserA = [
  { id: 'lesson_shared-lesson-2', type: 'lesson', slug: 'shared-lesson-2', title: 'Shared Lesson 2', url: '/learn/nepse/shared-lesson-2' },
  { id: 'lesson_cloud-only-3', type: 'lesson', slug: 'cloud-only-3', title: 'Cloud Only Lesson 3', url: '/learn/nepse/cloud-only-3' },
  { id: 'guide_cloud-guide-2', type: 'guide', slug: 'cloud-guide-2', title: 'Cloud Guide 2', url: '/learn/guides/cloud-guide-2' }
];

// Perform sign-in reconciliation
const migrationResult = await reconcileBookmarksOnSignIn('user_alpha', migrationStorage, cloudBookmarksUserA);
assert(migrationResult.success === true, 'Migration completes successfully');

// Verify union of local and cloud bookmarks
const lessonsAfter = JSON.parse(migrationStorage.getItem(STORAGE_KEYS.LESSONS));
assert(lessonsAfter.includes('local-lesson-1'), 'Pre-existing local lesson 1 preserved');
assert(lessonsAfter.includes('shared-lesson-2'), 'Pre-existing shared lesson 2 preserved');
assert(lessonsAfter.includes('cloud-only-3'), 'Cloud-only lesson from other device brought into local storage');
assert(lessonsAfter.length === 3, 'Merged lessons contains exact deduplicated union (3 items)');

const guidesAfter = JSON.parse(migrationStorage.getItem(STORAGE_KEYS.GUIDES));
assert(guidesAfter.includes('local-guide-1'), 'Local guide 1 preserved');
assert(guidesAfter.includes('cloud-guide-2'), 'Cloud guide 2 brought into local storage');

// Verify active UID is tracked
assert(migrationStorage.getItem(STORAGE_KEYS.ACTIVE_UID) === 'user_alpha', 'Active UID stored to detect account switches');

// Repeating migration should be a no-op guard
const repeatResult = await reconcileBookmarksOnSignIn('user_alpha', migrationStorage, cloudBookmarksUserA);
assert(repeatResult.alreadyMigrated === true, 'Migration guard prevents redundant executions on route change');

// ── 5. Network Failure Safety (Zero Local Data Loss) ──────────
console.log('\n--- 5. Testing Network Failure Safety ---');

resetSyncSession();

const offlineStorage = new MockStorage({
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['precious-lesson-alpha'])
});

// Simulate network failure where cloud fetch returns null
const networkFailResult = await reconcileBookmarksOnSignIn('user_offline', offlineStorage, () => null);
assert(networkFailResult.success === false && networkFailResult.networkFailure === true, 'Detects cloud network failure');
const offlineLessons = JSON.parse(offlineStorage.getItem(STORAGE_KEYS.LESSONS));
assert(offlineLessons.includes('precious-lesson-alpha'), 'CRITICAL: Local bookmarks are NEVER deleted on network failure');

// ── 6. Malformed & Outdated Local Data Resilience ──────────────
console.log('\n--- 6. Testing Malformed & Outdated Local Data Handling ---');

resetSyncSession();

const corruptedStorage = new MockStorage({
  [STORAGE_KEYS.LESSONS]: '{corrupted-json-syntax',
  [STORAGE_KEYS.GUIDES]: JSON.stringify('not-an-array'),
  [STORAGE_KEYS.RESOURCES]: JSON.stringify([null, '', 123, 'valid-res'])
});

let crashed = false;
try {
  await reconcileBookmarksOnSignIn('user_beta', corruptedStorage, []);
} catch (e) {
  crashed = true;
}
assert(crashed === false, 'reconcileBookmarksOnSignIn does NOT crash on corrupted or non-array local data');

const sanitizedResources = JSON.parse(corruptedStorage.getItem(STORAGE_KEYS.RESOURCES));
assert(Array.isArray(sanitizedResources), 'Sanitizes corrupted resources into a valid Array');
assert(sanitizedResources.includes('valid-res'), 'Preserves valid string elements from messy array');
assert(!sanitizedResources.includes(null) && !sanitizedResources.includes(123), 'Filters out non-string and empty elements');

// ── 7. Account Isolation & Clean Sign-Out ─────────────────────
console.log('\n--- 7. Testing Account Isolation & Sign-Out Behavior ---');

resetSyncSession();

// Setup: Guest had 'guest-lesson-alpha' before signing in
const multiUserStorage = new MockStorage({
  [STORAGE_KEYS.LESSONS]: JSON.stringify(['guest-lesson-alpha'])
});

// User 1 signs in with their cloud bookmarks
const cloudBookmarksUser1 = [
  { id: 'lesson_user1-secret', type: 'lesson', slug: 'user1-secret', title: 'User 1 Secret', url: '/learn/user1' }
];
await reconcileBookmarksOnSignIn('user_1', multiUserStorage, cloudBookmarksUser1);
assert(multiUserStorage.getItem(STORAGE_KEYS.ACTIVE_UID) === 'user_1', 'user_1 is active');
assert(isBookmarkSaved('lesson', 'user1-secret', multiUserStorage) === true, 'user_1 cloud bookmarks merged into session');

// user_1 signs out
handleUserSignOut(multiUserStorage);
assert(multiUserStorage.getItem(STORAGE_KEYS.ACTIVE_UID) === null, 'ACTIVE_UID cleared on sign-out');

// Logged-out state: user_1 secret is NOT leaked to next visitor
assert(isBookmarkSaved('lesson', 'user1-secret', multiUserStorage) === false, 'CRITICAL: user_1 bookmarks are NOT leaked after sign out');
assert(isBookmarkSaved('lesson', 'guest-lesson-alpha', multiUserStorage) === false, 'Guest has zero bookmarks accessible after sign out');

// User 2 signs in on the same browser
resetSyncSession();
const cloudBookmarksUser2 = [
  { id: 'lesson_user2-item', type: 'lesson', slug: 'user2-item', title: 'User 2 Item', url: '/learn/user2' }
];
await reconcileBookmarksOnSignIn('user_2', multiUserStorage, cloudBookmarksUser2);
assert(multiUserStorage.getItem(STORAGE_KEYS.ACTIVE_UID) === 'user_2', 'user_2 is now active');
assert(isBookmarkSaved('lesson', 'user1-secret', multiUserStorage) === false, 'user_2 does NOT inherit user_1 private bookmarks');
assert(isBookmarkSaved('lesson', 'user2-item', multiUserStorage) === true, 'user_2 has only user_2 bookmarks');

// ── 8. Metadata Resolution from Content Catalogs ───────────────
console.log('\n--- 8. Testing Bookmark Content Catalog Metadata Resolution ---');

const metaLesson = await resolveBookmarkMetadata('lesson', 'demat-meroshare-crn-setup');
assert(metaLesson !== null, 'resolveBookmarkMetadata returns metadata for lesson');
assert(metaLesson.type === 'lesson', 'Resolved type is "lesson"');
assert(metaLesson.slug === 'demat-meroshare-crn-setup', 'Resolved slug matches requested slug');
assert(metaLesson.title.length > 0, 'Resolved title is non-empty');
assert(metaLesson.url.startsWith('/learn/'), 'Resolved URL points to valid learn path');

const metaGuide = await resolveBookmarkMetadata('guide', 'complete-ipo-guide');
assert(metaGuide !== null, 'resolveBookmarkMetadata returns metadata for guide');
assert(metaGuide.type === 'guide', 'Resolved type is "guide"');
assert(metaGuide.slug === 'complete-ipo-guide', 'Resolved guide slug matches');
assert(metaGuide.title.length > 0, 'Resolved guide title is non-empty');
assert(metaGuide.url.includes('/learn/guides/'), 'Resolved guide URL points to /learn/guides/');

// Fallback formatting for unindexed slug
const metaFallback = await resolveBookmarkMetadata('lesson', 'custom-future-lesson');
assert(metaFallback !== null, 'resolveBookmarkMetadata provides clean fallback for unindexed slug');
assert(metaFallback.title === 'Custom Future Lesson', 'Fallback formats title with title-case words');
assert(metaFallback.url.includes('custom-future-lesson'), 'Fallback formats valid URL path');

// ── 9. Public Pages & Calculator Isolation Check ───────────────
console.log('\n--- 9. Testing Zero Overhead on Static Pages & Calculators ---');

const calcDir = path.join(rootDir, 'js/calculators');
const calcFiles = fs.readdirSync(calcDir).filter(f => f.endsWith('.js'));
let calcHasDirectDb = false;

calcFiles.forEach(file => {
  const content = fs.readFileSync(path.join(calcDir, file), 'utf8');
  if (content.includes("from '../firebase/db.js'") || content.includes('syncUserProfile')) {
    calcHasDirectDb = true;
  }
});
assert(calcHasDirectDb === false, 'No calculators import or execute Firestore profile/bookmark sync');

// ── 10. Activity Tracking Elimination & Obsolete Stats Removal ──
console.log('\n--- 10. Testing Activity Tracking Elimination & Obsolete Stats Removal ---');

// 1. Verify db.js only persists lesson bookmarks
const { saveUserBookmark, fetchUserBookmarks } = await import('../js/firebase/db.js');
const nonLessonBookmark = {
  type: 'guide',
  slug: 'test-guide',
  title: 'Test Guide',
  url: '/learn/guides/test-guide'
};
const saveGuideRes = await saveUserBookmark('dummy_uid', nonLessonBookmark);
assert(saveGuideRes.skipped === true && saveGuideRes.localOnly === true, 'saveUserBookmark skips non-lesson bookmark (zero Firestore writes)');

// 2. Verify learnCategory.js and learnLesson.js do not contain obsolete tracking
const learnCatCode = fs.readFileSync(path.join(rootDir, 'js/pages/learnCategory.js'), 'utf8');
assert(!learnCatCode.includes('toggleLessonCompleted'), 'learnCategory.js has NO toggleLessonCompleted');
assert(!learnCatCode.includes('rp_completed_lessons'), 'learnCategory.js has NO rp_completed_lessons tracking');
assert(!learnCatCode.includes('lesson-checkbox-btn'), 'learnCategory.js has NO lesson completion checkboxes');

const learnLessonCode = fs.readFileSync(path.join(rootDir, 'js/pages/learnLesson.js'), 'utf8');
assert(!learnLessonCode.includes('hero-complete-btn'), 'learnLesson.js has NO hero-complete-btn (Mark Completed button removed)');
assert(!learnLessonCode.includes('toggleLessonCompleted'), 'learnLesson.js has NO toggleLessonCompleted');

// 3. Verify recordRecentView in learn.js is neutralized
const { recordRecentView, getRecentViews } = await import('../js/data/learn.js');
recordRecentView('lesson', 'test-slug', 'Test');
assert(getRecentViews().length === 0, 'recordRecentView does not record reading history');

// 4. Verify learn.js dashboard removes obsolete progress ring and tracking counters
const learnJsCode = fs.readFileSync(path.join(rootDir, 'js/pages/learn.js'), 'utf8');
assert(!learnJsCode.includes('renderProgressTab'), 'learn.js no longer defines or renders renderProgressTab');
assert(!learnJsCode.includes('rp-progress-ring'), 'learn.js no longer renders rp-progress-ring');
assert(!learnJsCode.includes('Lessons Completed'), 'learn.js no longer displays Lessons Completed counter');
assert(!learnJsCode.includes('Guides Read'), 'learn.js no longer displays Guides Read counter');
assert(!learnJsCode.includes('Calculators Used'), 'learn.js no longer displays Calculators Used counter');
assert(!learnJsCode.includes('Resources Downloaded'), 'learn.js no longer displays Resources Downloaded counter');
assert(!learnJsCode.includes('35%'), 'learn.js no longer renders hardcoded 35% learning progress');

// 5. Verify renderLearnPage outputs Saved for Later (tab-bookmarks)
const { renderLearnPage } = await import('../js/pages/learn.js');
const renderedLearn = renderLearnPage();
assert(renderedLearn.includes('id="tab-bookmarks"'), 'renderLearnPage outputs tab-bookmarks container');
assert(renderedLearn.includes('Saved for Later'), 'renderLearnPage outputs "Saved for Later" label');
assert(renderedLearn.includes('saved-lessons-grid') || renderedLearn.includes('saved-lessons-empty'), 'renderLearnPage outputs Saved for Later grid/empty structure');

// 6. Test duplicate-click protection & in-memory cache
resetSyncSession();
const rapidStorage = new MockStorage({
  [STORAGE_KEYS.ACTIVE_UID]: 'rapid_user_1'
});
const togglePromise1 = syncBookmarkToggle('lesson', 'nepse-stock-broker-guide', true, null, rapidStorage);
const togglePromise2 = syncBookmarkToggle('lesson', 'nepse-stock-broker-guide', true, null, rapidStorage);
const [res1, res2] = await Promise.all([togglePromise1, togglePromise2]);
assert(res1.success === true && res2.success === true, 'Rapid duplicate bookmark clicks are handled safely');

console.log('\n========================================================');
console.log(`PART 4 TEST SUITE: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}


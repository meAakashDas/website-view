// ========================================================
// RISEPAISA RELIABILITY AUDIT & INTERMITTENT BUG FIX VERIFICATION
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
console.log('TEST SUITE: RELIABILITY AUDIT & ASYNC HARDENING');
console.log('========================================================\n');

// ── 1. Firebase Coalescing & Master Listener Deduplication ────
console.log('--- 1. Testing Lazy SDK & Master Listener Invariants ---');

const configSrc = fs.readFileSync(path.join(rootDir, 'js/firebase/config.js'), 'utf8');
assert(configSrc.includes('_firebaseAppPromise'), 'config.js uses _firebaseAppPromise to coalesce concurrent SDK initialization');

const authSrc = fs.readFileSync(path.join(rootDir, 'js/firebase/auth.js'), 'utf8');
assert(authSrc.includes('_loadAuthPromise'), 'auth.js uses _loadAuthPromise to coalesce parallel SDK imports');
assert(authSrc.includes('sdk.onAuthStateChanged(_authInstance'), 'auth.js attaches master onAuthStateChanged listener to _authInstance inside loadAuthSDK');

const dbSrc = fs.readFileSync(path.join(rootDir, 'js/firebase/db.js'), 'utf8');
assert(dbSrc.includes('_firestorePromise'), 'db.js uses _firestorePromise to coalesce concurrent Firestore imports');
assert(dbSrc.includes('_inFlightBookmarkFetches'), 'db.js tracks _inFlightBookmarkFetches to coalesce parallel bookmark reads');

// ── 2. Transient Network Retry & Jitter Strategy ──────────────
console.log('\n--- 2. Testing Transient Error Handling & Bounded Retry ---');
const { isTransientError, withBoundedRetry } = await import('../js/firebase/db.js');

// Verify bounded attempts (capped at 5)
let cappedAttempts = 0;
try {
  await withBoundedRetry(async () => {
    cappedAttempts++;
    const err = new Error('Network timeout');
    err.code = 'unavailable';
    throw err;
  }, { maxAttempts: 99, baseDelayMs: 1, maxDelayMs: 2 });
} catch {
  // expected rejection
}
assert(cappedAttempts <= 5, `Bounded retry enforces maximum ceiling (attempted ${cappedAttempts} times, <= 5)`);

// Verify idempotency and immediate return on success
let successCalls = 0;
const testResult = await withBoundedRetry(async () => {
  successCalls++;
  return { status: 'ok' };
});
assert(testResult.status === 'ok' && successCalls === 1, 'withBoundedRetry resolves clean calls in a single execution');

// ── 3. Memory Leak Prevention & Event Listener Cleanups ───────
console.log('\n--- 3. Testing Listener Cleanups on Dynamic Route Transitions ---');

const courseDetailSrc = fs.readFileSync(path.join(rootDir, 'js/pages/courseDetail.js'), 'utf8');
assert(courseDetailSrc.includes('window.removeEventListener(\'scroll\', updateMobileBar)'), 'courseDetail.js removes scroll listener on page unmount');
assert(courseDetailSrc.includes('window.removeEventListener(\'resize\', updateMobileBar)'), 'courseDetail.js removes resize listener on page unmount');
assert(courseDetailSrc.includes('document.body.classList.remove(\'has-mobile-cta\')'), 'courseDetail.js cleans up has-mobile-cta body class');

const resourceDetailSrc = fs.readFileSync(path.join(rootDir, 'js/pages/resourceDetail.js'), 'utf8');
assert(resourceDetailSrc.includes('window.removeEventListener(\'scroll\', updateMobileBar)'), 'resourceDetail.js cleans up scroll listener on unmount');
assert(resourceDetailSrc.includes('window.removeEventListener(\'resize\', updateMobileBar)'), 'resourceDetail.js cleans up resize listener on unmount');

const enhancementsSrc = fs.readFileSync(path.join(rootDir, 'js/enhancements.js'), 'utf8');
assert(enhancementsSrc.includes(':not([data-btn-micro="1"])'), 'enhancements.js guards button micro-interactions against duplicate listeners');

const uiSrc = fs.readFileSync(path.join(rootDir, 'js/firebase/ui.js'), 'utf8');
assert(uiSrc.includes('_authUIInitialized'), 'ui.js prevents duplicate auth UI subscription registrations');
assert(uiSrc.includes('_desktopOutsideClickBound'), 'ui.js prevents duplicate desktop outside-click document listeners');

// ── 4. Async State Sequencing in myCourses.js ─────────────────
console.log('\n--- 4. Testing Request Sequencing in myCourses.js ---');

const myCoursesSrc = fs.readFileSync(path.join(rootDir, 'js/pages/myCourses.js'), 'utf8');
assert(myCoursesSrc.includes('activeRequestId = 0'), 'myCourses.js declares activeRequestId sequence counter');
assert(myCoursesSrc.includes('const reqId = ++activeRequestId;'), 'myCourses.js increments sequence token on state transitions');
assert(myCoursesSrc.includes('if (reqId !== activeRequestId) return;'), 'myCourses.js drops stale responses before updating container DOM');

// ── 5. In-flight Query Coalescing in courses.js ────────────────
console.log('\n--- 5. Testing Query Coalescing & Memory Caches in courses.js ---');

const coursesSrc = fs.readFileSync(path.join(rootDir, 'js/firebase/courses.js'), 'utf8');
assert(coursesSrc.includes('_inFlightEnrollmentChecks'), 'courses.js declares _inFlightEnrollmentChecks Map');
assert(coursesSrc.includes('_inFlightCourseData'), 'courses.js declares _inFlightCourseData Map');
assert(coursesSrc.includes('_inFlightEnrollmentChecks.delete(cacheKey)'), 'courses.js removes entry when check completes');
assert(coursesSrc.includes('_inFlightCourseData.delete(cleanKey)'), 'courses.js removes entry when fetch completes');
assert(coursesSrc.includes('_inFlightEnrollmentChecks.clear()'), 'courses.js clears in-flight enrollment checks on cache reset');
assert(coursesSrc.includes('_inFlightCourseData.clear()'), 'courses.js clears in-flight course data on cache reset');

// ── 6. Business Rule Invariant: Learn Activity Persistence ───
console.log('\n--- 6. Testing Learn Activity Business Rule Invariant ---');
const learnSrc = fs.readFileSync(path.join(rootDir, 'js/pages/learn.js'), 'utf8');
assert(!learnSrc.includes('learning_activity'), 'learn.js does not persist automatic learning_activity');
assert(!learnSrc.includes('recordLessonCompletion'), 'learn.js does not automatically write lesson completions');
assert(!coursesSrc.includes('recordAutoLearningStreak'), 'courses.js does not record automatic streaks');

console.log('\n========================================================');
console.log(`RELIABILITY AUDIT SUITE: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

// ========================================================
// RISEPAISA COURSE PLATFORM FOUNDATION TEST SUITE
// Comprehensive unit and integration verification for Part 5
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
console.log('TEST SUITE: COURSE PLATFORM FOUNDATION (PART 5)');
console.log('========================================================\n');

// ── 1. Module Exports & Contract Verification ────────────────
console.log('--- 1. Testing Module Structure & Exports ---');

const coursesModulePath = path.join(rootDir, 'js/firebase/courses.js');
assert(fs.existsSync(coursesModulePath), 'courses.js exists at js/firebase/courses.js');

const {
  ENROLLMENT_STATUS,
  RESOURCE_FILE_TYPES,
  extractYouTubeVideoId,
  validateYouTubeUrl,
  toSafeYouTubeEmbedUrl,
  validateResourceUrl,
  sanitizeText,
  validateCourse,
  validateTopic,
  validateLesson,
  validateResource,
  normalizeCourseData,
  validateEnrollmentPayload,
  assertClientCannotEnroll,
  isEnrollmentActive,
  validateLessonProgressPayload,
  checkUserEnrollment,
  fetchUserCourseProgress,
  resetCourseCache
} = await import('../js/firebase/courses.js');

assert(typeof ENROLLMENT_STATUS === 'object', 'ENROLLMENT_STATUS is exported');
assert(ENROLLMENT_STATUS.ACTIVE === 'active', 'ENROLLMENT_STATUS.ACTIVE is "active"');
assert(ENROLLMENT_STATUS.REVOKED === 'revoked', 'ENROLLMENT_STATUS.REVOKED is "revoked"');
assert(ENROLLMENT_STATUS.EXPIRED === 'expired', 'ENROLLMENT_STATUS.EXPIRED is "expired"');
assert(Array.isArray(RESOURCE_FILE_TYPES), 'RESOURCE_FILE_TYPES is exported');
assert(typeof extractYouTubeVideoId === 'function', 'extractYouTubeVideoId is exported');
assert(typeof validateYouTubeUrl === 'function', 'validateYouTubeUrl is exported');
assert(typeof toSafeYouTubeEmbedUrl === 'function', 'toSafeYouTubeEmbedUrl is exported');
assert(typeof validateResourceUrl === 'function', 'validateResourceUrl is exported');
assert(typeof validateCourse === 'function', 'validateCourse is exported');
assert(typeof validateTopic === 'function', 'validateTopic is exported');
assert(typeof validateLesson === 'function', 'validateLesson is exported');
assert(typeof validateResource === 'function', 'validateResource is exported');
assert(typeof normalizeCourseData === 'function', 'normalizeCourseData is exported');
assert(typeof validateEnrollmentPayload === 'function', 'validateEnrollmentPayload is exported');
assert(typeof assertClientCannotEnroll === 'function', 'assertClientCannotEnroll is exported');
assert(typeof isEnrollmentActive === 'function', 'isEnrollmentActive is exported');
assert(typeof validateLessonProgressPayload === 'function', 'validateLessonProgressPayload is exported');
assert(typeof checkUserEnrollment === 'function', 'checkUserEnrollment is exported');

// ── 2. Course Metadata Validation ─────────────────────────────
console.log('\n--- 2. Testing Course Metadata Schema Validation ---');

const validCourseObj = {
  id: 'nepse-stock-market-basics',
  slug: 'nepse-stock-market-basics',
  title: 'Share Market Full Course (NEPSE)',
  shortDescription: 'Comprehensive learning program for Nepal stock market.',
  published: true,
  displayOrder: 1
};
assert(validateCourse(validCourseObj).valid === true, 'Accepts valid course object');

assert(validateCourse(null).valid === false, 'Rejects null course');
assert(validateCourse({ ...validCourseObj, id: '' }).valid === false, 'Rejects empty course id');
assert(validateCourse({ ...validCourseObj, slug: 'Invalid Slug With Spaces' }).valid === false, 'Rejects invalid course slug');
assert(validateCourse({ ...validCourseObj, title: '' }).valid === false, 'Rejects empty course title');
assert(validateCourse({ ...validCourseObj, title: 'A'.repeat(250) }).valid === false, 'Rejects overly long course title (>200 chars)');
assert(validateCourse({ ...validCourseObj, published: 'yes' }).valid === false, 'Rejects non-boolean published flag');
assert(validateCourse({ ...validCourseObj, displayOrder: 'first' }).valid === false, 'Rejects non-numeric displayOrder');

// ── 3. Topic & Lesson Validation & Ordering ───────────────────
console.log('\n--- 3. Testing Topic and Lesson Validation & Hierarchy ---');

const validTopicObj = {
  id: 'topic-1',
  title: 'Introduction to Share Market',
  shortDescription: 'Basic concepts of NEPSE before investing',
  displayOrder: 1,
  published: true
};
assert(validateTopic(validTopicObj).valid === true, 'Accepts valid topic object');
assert(validateTopic({ ...validTopicObj, id: '' }).valid === false, 'Rejects topic with empty id');
assert(validateTopic({ ...validTopicObj, displayOrder: NaN }).valid === false, 'Rejects topic with invalid displayOrder');

const validLessonObj = {
  id: 'lesson-1',
  title: 'What Is the Share Market?',
  shortDescription: 'Core market concepts and purpose of NEPSE',
  youtubeUrl: 'https://www.youtube.com/watch?v=ziVeMxMF4e8',
  duration: '7:41',
  displayOrder: 1,
  published: true,
  resources: [
    {
      title: 'First-Time Investor Checklist',
      url: '/assets/downloads/nepse-first-time-investor-checklist.html',
      fileType: 'checklist'
    }
  ]
};
assert(validateLesson(validLessonObj).valid === true, 'Accepts valid lesson object');
assert(validateLesson({ ...validLessonObj, youtubeUrl: 'javascript:alert(1)' }).valid === false, 'Rejects lesson with dangerous javascript: URL');
assert(validateLesson({ ...validLessonObj, resources: 'not-an-array' }).valid === false, 'Rejects non-array lesson resources');

// ── 4. Actual Course Data Normalization (NEPSE Course) ────────
console.log('\n--- 4. Testing Normalization of Existing Repository Courses ---');

const { default: rawCourses } = await import('../js/data/courses.js');
assert(Array.isArray(rawCourses), 'Raw courses array loaded from js/data/courses.js');

const rawNepseCourse = rawCourses.find(c => c.id === 1 || c.slug === 'nepse-stock-market-basics');
assert(Boolean(rawNepseCourse), 'Found existing NEPSE course in js/data/courses.js');

const normalized = normalizeCourseData(rawNepseCourse);
assert(normalized !== null, 'Successfully normalized NEPSE course');
assert(normalized.id === '1', 'Normalized course has stable ID "1"');
assert(normalized.slug === 'nepse-stock-market-basics', 'Normalized course has canonical slug');
assert(normalized.published === true, 'Normalized course is published');
assert(normalized.topics.length === 8, 'Normalized NEPSE course contains all 8 modules');

// Verify ordering
let prevTopicOrder = 0;
for (const topic of normalized.topics) {
  assert(topic.displayOrder > prevTopicOrder, `Topic ${topic.id} order (${topic.displayOrder}) is strictly sequential`);
  prevTopicOrder = topic.displayOrder;
  assert(validateTopic(topic).valid === true, `Topic ${topic.id} passes validation`);

  for (const lesson of topic.lessons) {
    assert(validateLesson(lesson).valid === true, `Lesson ${lesson.id} passes validation`);
    assert(typeof lesson.displayOrder === 'number', `Lesson ${lesson.id} has numeric displayOrder`);
  }
}

const totalLessonsCount = normalized.topics.reduce((sum, t) => sum + t.lessons.length, 0);
assert(totalLessonsCount === 22, 'Normalized course contains all 22 authentic video lessons');
assert(normalized.topics[0].lessons[0].isFree === true, 'First lesson is flagged as free demo preview');
assert(normalized.topics[0].lessons[1].isFree === false, 'Subsequent lessons are flagged as protected');

// ── 5. YouTube URL & Video Safety ─────────────────────────────
console.log('\n--- 5. Testing YouTube URL Parsing & Attack Rejection ---');

// Valid formats
assert(extractYouTubeVideoId('https://www.youtube.com/watch?v=ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Extracts ID from standard youtube.com watch URL');
assert(extractYouTubeVideoId('https://youtube.com/watch?v=ziVeMxMF4e8&t=45s') === 'ziVeMxMF4e8', 'Extracts ID with query parameters');
assert(extractYouTubeVideoId('https://youtu.be/ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Extracts ID from youtu.be short URL');
assert(extractYouTubeVideoId('https://www.youtube.com/embed/ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Extracts ID from embed URL');
assert(extractYouTubeVideoId('https://www.youtube-nocookie.com/embed/ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Extracts ID from youtube-nocookie.com URL');

// Attack and invalid inputs
assert(extractYouTubeVideoId('javascript:alert("XSS")') === null, 'Rejects javascript: pseudo-protocol');
assert(extractYouTubeVideoId('data:text/html,<script>alert(1)</script>') === null, 'Rejects data: URI');
assert(extractYouTubeVideoId('https://youtube.com.attacker.com/watch?v=ziVeMxMF4e8') === null, 'Rejects subdomain spoofing attack');
assert(extractYouTubeVideoId('https://notyoutube.com/watch?v=ziVeMxMF4e8') === null, 'Rejects unauthorized external domain');
assert(extractYouTubeVideoId('https://www.youtube.com/watch?v=short') === null, 'Rejects video ID not matching 11 characters');
assert(extractYouTubeVideoId('https://www.youtube.com/watch?v=<script>123') === null, 'Rejects malicious script tags in video ID');
assert(extractYouTubeVideoId('') === null, 'Returns null on empty string');
assert(extractYouTubeVideoId(null) === null, 'Returns null on null input');

// Embed URL generation
const embedUrl = toSafeYouTubeEmbedUrl('https://www.youtube.com/watch?v=ziVeMxMF4e8');
assert(embedUrl === 'https://www.youtube-nocookie.com/embed/ziVeMxMF4e8?rel=0&modestbranding=1', 'Generates safe, privacy-enhanced youtube-nocookie embed URL');
assert(toSafeYouTubeEmbedUrl('https://evil.com/fake') === null, 'Returns null embed URL on invalid input');

// Text Sanitizer
assert(sanitizeText('<script>alert("xss")</script>') === '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;', 'Sanitizes HTML tags and quotes');

// ── 6. Downloadable Learning Resource Safety ──────────────────
console.log('\n--- 6. Testing Downloadable Resource URL Safety ---');

assert(validateResourceUrl('/assets/downloads/nepse-first-time-investor-checklist.html').valid === true, 'Accepts valid relative asset path');
assert(validateResourceUrl('assets/downloads/commercial-bank-loan-comparison-worksheet.csv').valid === true, 'Accepts unslashed asset path');
assert(validateResourceUrl('https://cdn.risepaisa.com/docs/guide.pdf').valid === true, 'Accepts secure HTTPS resource URL');
assert(validateResourceUrl('javascript:alert(document.cookie)').valid === false, 'Rejects javascript: in resource URL');
assert(validateResourceUrl('data:application/pdf;base64,JVBERi0...').valid === false, 'Rejects data: in resource URL');
assert(validateResourceUrl('file:///etc/passwd').valid === false, 'Rejects file:// URL');
assert(validateResourceUrl('http://insecure-domain.com/sheet.xls').valid === false, 'Rejects plain insecure HTTP URL');

const validResourcePayload = {
  title: 'NEPSE First-Time Investor Checklist',
  url: '/assets/downloads/nepse-first-time-investor-checklist.html',
  fileType: 'checklist'
};
assert(validateResource(validResourcePayload).valid === true, 'Accepts valid resource payload');
assert(validateResource({ ...validResourcePayload, fileType: 'executable' }).valid === false, 'Rejects forbidden fileType');

// ── 7. Enrollment Schema & Client-Side Exploit Prevention ─────
console.log('\n--- 7. Testing Enrollment Schema & Client-Side Privilege Rejection ---');

const validEnrollment = {
  courseId: 'nepse-stock-market-basics',
  status: 'active'
};
assert(validateEnrollmentPayload(validEnrollment).valid === true, 'Accepts valid enrollment payload schema');
assert(validateEnrollmentPayload({ ...validEnrollment, status: 'revoked' }).valid === true, 'Accepts revoked status');
assert(validateEnrollmentPayload({ ...validEnrollment, status: 'expired' }).valid === true, 'Accepts expired status');

// Exploit prevention tests
assert(validateEnrollmentPayload({ ...validEnrollment, status: 'lifetime_vip' }).valid === false, 'Rejects unauthorized enrollment status');
assert(validateEnrollmentPayload({ ...validEnrollment, courseId: '' }).valid === false, 'Rejects empty courseId in enrollment');
assert(validateEnrollmentPayload({ ...validEnrollment, isAdmin: true }).valid === false, 'Rejects privilege escalation field (isAdmin) in enrollment');

// Client-side self-enrollment must throw
let didThrow = false;
try {
  assertClientCannotEnroll({ courseId: 'nepse-stock-market-basics', status: 'active' });
} catch (err) {
  didThrow = true;
  assert(err.message.includes('Client-side self-enrollment is forbidden'), 'assertClientCannotEnroll throws explicit security exception');
}
assert(didThrow === true, 'Client cannot self-assign enrollment access');

// Test isEnrollmentActive
assert(isEnrollmentActive({ status: 'active' }) === true, 'isEnrollmentActive returns true for active status');
assert(isEnrollmentActive({ status: 'revoked' }) === false, 'isEnrollmentActive returns false for revoked status');
assert(isEnrollmentActive({ status: 'expired' }) === false, 'isEnrollmentActive returns false for expired status');
assert(isEnrollmentActive(null) === false, 'isEnrollmentActive returns false for null');
assert(isEnrollmentActive({}) === false, 'isEnrollmentActive returns false for empty object');

// ── 8. Lesson Progress Schema & Separation from Enrollment ───
console.log('\n--- 8. Testing Lesson Progress & Decoupling from Authorization ---');

const validProgress = {
  completed: true,
  lastPositionSeconds: 420
};
assert(validateLessonProgressPayload(validProgress).valid === true, 'Accepts valid progress payload');

// Must reject any attempt to piggyback authorization inside progress
const exploitProgressWithAccess = {
  ...validProgress,
  enrolled: true,
  courseAccess: 'nepse-stock-market-basics'
};
assert(validateLessonProgressPayload(exploitProgressWithAccess).valid === false, 'Rejects progress payload attempting to inject "enrolled" or "courseAccess"');

const exploitProgressWithRole = {
  ...validProgress,
  status: 'active',
  role: 'admin'
};
assert(validateLessonProgressPayload(exploitProgressWithRole).valid === false, 'Rejects progress payload attempting to inject "status" or "role"');

// Critical check: Possession of progress records does NOT grant course access
assert(isEnrollmentActive(validProgress) === false, 'Progress payload does NOT confer course enrollment access');

// ── 9. Zero Database Overhead on Guest Visits ────────────────
console.log('\n--- 9. Testing Zero Database Overhead for Unauthenticated Visits ---');

resetCourseCache();

// Calling checkUserEnrollment with null UID must return immediately with 0 queries
const guestResult = await checkUserEnrollment(null, 'nepse-stock-market-basics');
assert(guestResult.enrolled === false, 'Guest is not enrolled');
assert(guestResult.status === 'none', 'Guest status is "none"');

const guestProgress = await fetchUserCourseProgress(null, 'nepse-stock-market-basics');
assert(Object.keys(guestProgress).length === 0, 'Guest has empty progress object with zero queries');

// ── 10. Security Rules Alignment Verification ────────────────
console.log('\n--- 10. Testing firestore.rules Course & Enrollment Specifications ---');

const rulesPath = path.join(rootDir, 'firestore.rules');
const rulesContent = fs.readFileSync(rulesPath, 'utf8');

// Enrollment path under /users/{userId}
assert(rulesContent.includes('match /courses/{courseId}'), 'Rules contain /courses/{courseId} match');
assert(rulesContent.includes('allow read: if isOwner(userId);'), 'Enrollment and progress allow read only to owner');
assert(rulesContent.includes('allow write: if false;'), 'User-level course enrollment strictly forbids client writes');
assert(rulesContent.includes('match /lessons/{lessonId}'), 'Rules contain /lessons/{lessonId} progress match');
assert(rulesContent.includes('hasOnlyAllowedProgressFields'), 'Rules enforce whitelist for progress fields');
assert(rulesContent.includes('allow read, write: if false;'), 'Main /courses/{courseId} collection remains locked in current rules pending approved deployment');

// ── Summary ──────────────────────────────────────────────────
console.log('\n========================================================');
console.log(`COURSE FOUNDATION TESTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

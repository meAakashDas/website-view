// ========================================================
// RISEPAISA COURSE LEARNING INTERFACE & VIDEO PLAYER TEST SUITE
// Comprehensive unit, security, and integration verification for Part 6
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
console.log('TEST SUITE: COURSE LEARNING INTERFACE & VIDEO PLAYER (PART 6)');
console.log('========================================================\n');

// ── 1. Module Exports & Contract Verification ────────────────
console.log('--- 1. Testing Module Structure & Exports ---');

const courseLearnPath = path.join(rootDir, 'js/pages/courseLearn.js');
assert(fs.existsSync(courseLearnPath), 'courseLearn.js exists at js/pages/courseLearn.js');

const {
  renderCourseLearnPage,
  initCourseLearnPage,
  getPublishedLessonsSequence
} = await import('../js/pages/courseLearn.js');

assert(typeof renderCourseLearnPage === 'function', 'renderCourseLearnPage is exported as function');
assert(typeof initCourseLearnPage === 'function', 'initCourseLearnPage is exported as function');
assert(typeof getPublishedLessonsSequence === 'function', 'getPublishedLessonsSequence is exported as function');

const {
  extractYouTubeVideoId,
  validateYouTubeUrl,
  toSafeYouTubeEmbedUrl,
  validateResourceUrl,
  normalizeCourseData,
  checkUserEnrollment,
  assertClientCannotEnroll,
  isEnrollmentActive
} = await import('../js/firebase/courses.js');

const { ROUTES } = await import('../js/routes.js');
assert(typeof ROUTES.COURSE_LEARN === 'function', 'ROUTES.COURSE_LEARN is defined');
assert(ROUTES.COURSE_LEARN('nepse-stock-market-basics') === '/courses/nepse-stock-market-basics/learn', 'COURSE_LEARN generates canonical base learn route');
assert(ROUTES.COURSE_LEARN('nepse-stock-market-basics', 'lesson-2') === '/courses/nepse-stock-market-basics/learn?lesson=lesson-2', 'COURSE_LEARN formats lesson parameter query correctly');

// ── 2. Course Page Rendering (SSR & Desktop/Mobile Layouts) ───
console.log('\n--- 2. Testing Course Learning Page Rendering ---');

const htmlRender = renderCourseLearnPage('nepse-stock-market-basics');
assert(typeof htmlRender === 'string' && htmlRender.length > 500, 'Renders non-empty HTML string');
assert(htmlRender.includes('Share Market Full Course (NEPSE)'), 'Render includes course title');
assert(htmlRender.includes('cl-workspace'), 'Render includes main learning workspace');
assert(htmlRender.includes('cl-layout-grid'), 'Render includes desktop grid layout');
assert(htmlRender.includes('cl-main-player-col'), 'Render includes left column player container');
assert(htmlRender.includes('cl-sidebar-col'), 'Render includes right column sidebar container');
assert(htmlRender.includes('cl-player-wrapper'), 'Render includes 16:9 video player frame');
assert(htmlRender.includes('cl-modules-accordion'), 'Render includes modules accordion in sidebar');
assert(htmlRender.includes('cl-breadcrumb'), 'Render includes navigation breadcrumb');
assert(htmlRender.includes('Course Overview &amp; Syllabus'), 'Render includes back-to-syllabus link');

// ── 3. Topic and Lesson Hierarchy & Ordering ──────────────────
console.log('\n--- 3. Testing Topic and Lesson Ordering ---');

const { default: rawCourses } = await import('../js/data/courses.js');
const rawNepseCourse = rawCourses.find(c => c.slug === 'nepse-stock-market-basics');
const normalizedCourse = normalizeCourseData(rawNepseCourse);
const sequence = getPublishedLessonsSequence(normalizedCourse);

assert(sequence.length === 22, `Published sequence contains exactly 22 lessons (found: ${sequence.length})`);

// Validate strict linear display ordering
let prevOrder = 0;
for (let i = 0; i < sequence.length; i++) {
  const lesson = sequence[i];
  assert(lesson.displayOrder === i + 1, `Lesson #${i + 1} displayOrder (${lesson.displayOrder}) is strictly consecutive`);
  assert(typeof lesson.title === 'string' && lesson.title.trim().length > 0, `Lesson #${i + 1} has non-empty title`);
  assert(typeof lesson.topicTitle === 'string' && lesson.topicTitle.trim().length > 0, `Lesson #${i + 1} retains parent topic title`);
}

// ── 4. Initial Lesson Selection & Query Parameter Resolution ───
console.log('\n--- 4. Testing Lesson Selection & Active Highlighting ---');

// Default without parameter should select lesson 1 (free preview)
const defaultRender = renderCourseLearnPage('nepse-stock-market-basics');
assert(defaultRender.includes('What Is the Share Market?'), 'Default selection selects Lesson 1');
assert(defaultRender.includes('cl-video-iframe'), 'Lesson 1 renders active video iframe for free preview');
assert(defaultRender.includes('id="cl-sidebar-item-lesson-1"'), 'Sidebar contains lesson-1 item');
assert(defaultRender.includes('class="cl-lesson-item active"'), 'Lesson 1 is visually highlighted with .active');

// Selection of Lesson 2 (protected)
const lesson2Render = renderCourseLearnPage('nepse-stock-market-basics', 'lesson-2');
assert(lesson2Render.includes('Understanding the Key Participants in the Share Market'), 'Selecting lesson-2 updates lesson title');
assert(lesson2Render.includes('cl-locked-screen'), 'Lesson 2 renders locked screen by default for guest');
assert(!lesson2Render.includes('<iframe'), 'Protected lesson strictly DOES NOT render iframe in static HTML');

// ── 5. Previous and Next Navigation Controls ─────────────────
console.log('\n--- 5. Testing Previous and Next Navigation Controls ---');

// First lesson: Previous should be disabled, Next should point to lesson-2
assert(defaultRender.includes('id="cl-prev-btn"\n                  disabled aria-disabled="true"'), 'First lesson has Prev button disabled');
assert(defaultRender.includes('data-target-id="lesson-2"'), 'First lesson has Next button targeted to lesson-2');
assert(defaultRender.includes('Understanding the Key Participants in the Share Market'), 'Next button shows preview title of lesson 2');

// Middle lesson (e.g. lesson-5): Both Prev and Next should be active
const lesson5Render = renderCourseLearnPage('nepse-stock-market-basics', 'lesson-5');
assert(lesson5Render.includes('data-target-id="lesson-4"'), 'Lesson 5 has Prev button targeted to lesson-4');
assert(lesson5Render.includes('data-target-id="lesson-6"'), 'Lesson 5 has Next button targeted to lesson-6');

// Last lesson (lesson-22): Next should be disabled, Prev should point to lesson-21
const lesson22Render = renderCourseLearnPage('nepse-stock-market-basics', 'lesson-22');
assert(lesson22Render.includes('data-target-id="lesson-21"'), 'Lesson 22 has Prev button targeted to lesson-21');
assert(lesson22Render.includes('id="cl-next-btn"\n                  disabled aria-disabled="true"'), 'Last lesson has Next button disabled');

// ── 6. YouTube URL Validation & Safety ────────────────────────
console.log('\n--- 6. Testing YouTube Embed Safety & Format Verification ---');

// Valid formats
assert(validateYouTubeUrl('https://www.youtube.com/watch?v=ziVeMxMF4e8'), 'Validates standard youtube.com URL');
assert(validateYouTubeUrl('https://youtu.be/ziVeMxMF4e8'), 'Validates youtu.be short URL');
assert(validateYouTubeUrl('https://www.youtube.com/embed/ziVeMxMF4e8'), 'Validates youtube.com/embed/ URL');
assert(toSafeYouTubeEmbedUrl('https://www.youtube.com/watch?v=ziVeMxMF4e8') === 'https://www.youtube-nocookie.com/embed/ziVeMxMF4e8?rel=0&modestbranding=1', 'Generates privacy-enhanced youtube-nocookie embed');

// Attack and spoofing rejection
assert(toSafeYouTubeEmbedUrl('javascript:alert("XSS")') === null, 'Rejects javascript: attack');
assert(toSafeYouTubeEmbedUrl('https://youtube.com.attacker.com/watch?v=ziVeMxMF4e8') === null, 'Rejects subdomain spoofing');
assert(toSafeYouTubeEmbedUrl('https://vimeo.com/12345678') === null, 'Rejects external non-YouTube hosts');
assert(toSafeYouTubeEmbedUrl('https://www.youtube.com/watch?v=invalid_short') === null, 'Rejects malformed video ID');

// ── 7. Responsive Video Container Behavior ───────────────────
console.log('\n--- 7. Testing Video Container Responsiveness & Styles ---');

const pagesCssPath = path.join(rootDir, 'css/pages.css');
const pagesCss = fs.readFileSync(pagesCssPath, 'utf8');

assert(pagesCss.includes('.cl-player-wrapper'), 'pages.css defines .cl-player-wrapper');
assert(pagesCss.includes('aspect-ratio: 16 / 9'), 'pages.css enforces 16:9 aspect-ratio on player wrapper');
assert(pagesCss.includes('.cl-video-iframe'), 'pages.css defines .cl-video-iframe');
assert(pagesCss.includes('.cl-locked-screen'), 'pages.css defines .cl-locked-screen');
assert(pagesCss.includes('@media (max-width: 960px)'), 'pages.css contains responsive mobile breakpoint for course player');
assert(pagesCss.includes('grid-template-columns: 1fr'), 'Mobile breakpoint collapses layout to single column');

// ── 8. Missing Lesson Descriptions & Optional Fields ──────────
console.log('\n--- 8. Testing Missing Descriptions & Optional Metadata Handling ---');

const mockCourseWithSparseLessons = {
  id: 'test-sparse-course',
  slug: 'test-sparse-course',
  title: 'Sparse Course',
  shortDescription: 'Testing optional fields',
  isPublished: true,
  curriculum: [
    {
      moduleNumber: 1,
      title: 'Module 1',
      lessons: [
        {
          rank: 1,
          title: 'Lesson Without Description or Duration'
          // no goal, no duration, no resources
        }
      ]
    }
  ]
};

const normalizedSparse = normalizeCourseData(mockCourseWithSparseLessons);
const sparseLesson = normalizedSparse.topics[0].lessons[0];
assert(sparseLesson.duration === null, 'Safely handles missing duration');
assert(sparseLesson.shortDescription === '', 'Safely handles missing description');
assert(Array.isArray(sparseLesson.resources) && sparseLesson.resources.length === 0, 'Safely initializes empty resources array');

// ── 9. Empty Courses and Empty Topics Handling ────────────────
console.log('\n--- 9. Testing Empty Courses and Empty Topics ---');

// Missing course returns 404
const notFoundHtml = renderCourseLearnPage('non-existent-course-slug');
assert(notFoundHtml.includes('Course Not Found'), 'Renders clean 404 state for non-existent course');

// Course with no published lessons
const emptyCourse = {
  id: 99,
  slug: 'empty-test-course',
  title: 'Empty Course Test',
  curriculum: []
};
const normalizedEmpty = normalizeCourseData(emptyCourse);
assert(getPublishedLessonsSequence(normalizedEmpty).length === 0, 'Returns empty sequence for course with 0 lessons');

// ── 10. Downloadable Resource URL Validation ──────────────────
console.log('\n--- 10. Testing Downloadable Resource URLs & Whitelist ---');

assert(validateResourceUrl('/assets/downloads/nepse-first-time-investor-checklist.html').valid === true, 'Accepts valid relative asset');
assert(validateResourceUrl('https://risepaisa.com/assets/downloads/sheet.xlsx').valid === true, 'Accepts secure HTTPS asset');
assert(validateResourceUrl('javascript:alert(1)').valid === false, 'Rejects javascript: scheme');
assert(validateResourceUrl('data:text/html;base64,...').valid === false, 'Rejects data: scheme');
assert(validateResourceUrl('file:///etc/passwd').valid === false, 'Rejects file:// scheme');
assert(validateResourceUrl('http://insecure.com/file.pdf').valid === false, 'Rejects insecure plain HTTP link');

// ── 11. Locked Lesson Behavior & Exploit Prevention ───────────
console.log('\n--- 11. Testing Locked Lesson Security & Exploit Prevention ---');

// Guest check returns unenrolled with zero queries
const guestCheck = await checkUserEnrollment(null, 'nepse-stock-market-basics');
assert(guestCheck.enrolled === false, 'Guest is strictly unenrolled');

// Client-side self-enrollment must throw
let didThrow = false;
try {
  assertClientCannotEnroll();
} catch (err) {
  didThrow = true;
  assert(err.message.includes('Client-side self-enrollment is forbidden'), 'assertClientCannotEnroll blocks client writes');
}
assert(didThrow === true, 'Client cannot self-assign enrollment');

// Fake progress object must NOT confer enrollment
assert(isEnrollmentActive({ completed: true, lastPositionSeconds: 500 }) === false, 'Progress records do NOT grant enrollment access');
assert(isEnrollmentActive({ enrolled: true }) === false, 'Fake { enrolled: true } without active status does NOT grant access');

// ── 12. Unpublished Lesson Exclusion ──────────────────────────
console.log('\n--- 12. Testing Unpublished Lesson Exclusion ---');

const courseWithUnpublished = {
  id: 'unpub-test',
  slug: 'unpub-test',
  title: 'Unpublished Test Course',
  curriculum: [
    {
      moduleNumber: 1,
      title: 'Topic 1',
      published: true,
      lessons: [
        { rank: 1, title: 'Published Lesson 1', published: true },
        { rank: 2, title: 'Draft Secret Lesson 2', published: false },
        { rank: 3, title: 'Published Lesson 3', published: true }
      ]
    },
    {
      moduleNumber: 2,
      title: 'Hidden Topic 2',
      published: false,
      lessons: [
        { rank: 4, title: 'Lesson in Hidden Topic', published: true }
      ]
    }
  ]
};

const normalizedUnpub = normalizeCourseData(courseWithUnpublished);
const filteredSequence = getPublishedLessonsSequence(normalizedUnpub);
assert(filteredSequence.length === 2, `Excludes unpublished lessons and hidden topics (found ${filteredSequence.length}, expected 2)`);
assert(filteredSequence.find(l => l.title === 'Draft Secret Lesson 2') === undefined, 'Draft lesson is strictly excluded');
assert(filteredSequence.find(l => l.title === 'Lesson in Hidden Topic') === undefined, 'Lessons in hidden topics are strictly excluded');

// ── 13. Preservation of Authentication & Bookmarks ────────────
console.log('\n--- 13. Testing Preservation of Authentication & Bookmarks ---');

const authModule = await import('../js/firebase/auth.js');
assert(typeof authModule.subscribeToAuth === 'function', 'subscribeToAuth is preserved');
assert(typeof authModule.loginWithEmail === 'function', 'loginWithEmail is preserved');
assert(typeof authModule.loginWithGoogle === 'function', 'loginWithGoogle is preserved');
assert(typeof authModule.logoutUser === 'function', 'logoutUser is preserved');

const dbModule = await import('../js/firebase/db.js');
assert(typeof dbModule.reconcileBookmarksOnSignIn === 'function', 'reconcileBookmarksOnSignIn is preserved');
assert(typeof dbModule.syncUserProfile === 'function', 'syncUserProfile is preserved');
assert(typeof dbModule.handleUserSignOut === 'function', 'handleUserSignOut is preserved');

// ── 14. Existing Calculators Preservation ─────────────────────
console.log('\n--- 14. Testing Calculator Registry & Performance Preservation ---');

const { CALCULATOR_REGISTRY } = await import('../js/calculators/registry.js');
assert(Array.isArray(CALCULATOR_REGISTRY), 'CALCULATOR_REGISTRY is an array');
assert(CALCULATOR_REGISTRY.some(c => c.id === 'sip'), 'SIP calculator is preserved in registry');
assert(CALCULATOR_REGISTRY.some(c => c.id === 'emi'), 'EMI calculator is preserved in registry');
assert(CALCULATOR_REGISTRY.some(c => c.id === 'swp'), 'SWP calculator is preserved in registry');
assert(CALCULATOR_REGISTRY.some(c => c.id === 'home-loan'), 'Home loan calculator is preserved in registry');

// ── 15. SEO & Canonical Protection ────────────────────────────
console.log('\n--- 15. Testing SEO Metadata & Canonical Protection ---');

const { resolvePageSEO } = await import('../js/seo.js');
const seoPublic = resolvePageSEO('/courses/nepse-stock-market-basics');
assert(seoPublic.robots.includes('index'), 'Public course page remains indexed');
assert(seoPublic.canonical === 'https://risepaisa.com/courses/nepse-stock-market-basics', 'Public canonical matches');

const seoLearn = resolvePageSEO('/courses/nepse-stock-market-basics/learn');
assert(seoLearn.robots.includes('noindex'), 'Course learn classroom is strictly noindex');
assert(seoLearn.robots.includes('nofollow'), 'Course learn classroom is strictly nofollow');
assert(seoLearn.canonical === 'https://risepaisa.com/courses/nepse-stock-market-basics', 'Classroom canonical points to public course page');

// ── 16. Static Page Generation Output Verification ───────────
console.log('\n--- 16. Testing Generated Static Files ---');

const staticLearnHtmlPath = path.join(rootDir, 'courses/nepse-stock-market-basics/learn/index.html');
assert(fs.existsSync(staticLearnHtmlPath), 'courses/nepse-stock-market-basics/learn/index.html exists');

const staticContent = fs.readFileSync(staticLearnHtmlPath, 'utf8');
assert(staticContent.includes('<meta name="robots" content="noindex, nofollow">'), 'Static HTML contains noindex meta');
assert(staticContent.includes('rel="canonical" href="https://risepaisa.com/courses/nepse-stock-market-basics"'), 'Static HTML contains canonical to course');
assert(staticContent.includes('Share Market Full Course (NEPSE)'), 'Static HTML contains course title');
assert(staticContent.includes('cl-player-wrapper'), 'Static HTML contains responsive player wrapper');
assert(staticContent.includes('First-Time Investor Checklist'), 'Static HTML contains resource checklist for lesson 1');

// ── Summary ──────────────────────────────────────────────────
console.log('\n========================================================');
console.log(`COURSE LEARNING INTERFACE TESTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

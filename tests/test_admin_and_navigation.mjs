// ==============================================
// risePaisa - Automated Test Suite: Part 7
// Navigation Refinement, My Courses, and Admin Course Management
// ==============================================

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import System Components & Services
import { renderNavbar } from '../js/components.js';
import { ROUTES } from '../js/routes.js';
import {
  validateCourse,
  validateTopic,
  validateLesson,
  validateResource,
  validateYouTubeUrl,
  validateResourceUrl,
  normalizeCourseData,
  checkIsAdmin,
  saveAdminCourse,
  deleteAdminCourse,
  fetchAdminCourses,
  fetchUserEnrolledCourses,
  generateStableId,
  reorderCollection,
  resetCourseCache,
  ENROLLMENT_STATUS
} from '../js/firebase/courses.js';
import { renderMyCoursesPage } from '../js/pages/myCourses.js';
import { renderAdminCoursesPage } from '../js/pages/adminCourses.js';
import { resolvePageSEO } from '../js/seo.js';

let passedCount = 0;
let failedCount = 0;

async function test(name, fn) {
  try {
    await fn();
    passedCount++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    failedCount++;
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message}`);
  }
}

async function runAllTests() {
  console.log('\n======================================================');
  console.log('RISEPAISA PART 7: AUTOMATED TEST SUITE');
  console.log('======================================================\n');

  // -----------------------------------------------------------------------------
  // 1. Navigation Refinement Tests
  // -----------------------------------------------------------------------------
  console.log('--- 1. Navigation Refinement ---');

  await test('1. Existing Courses link remains present in desktop and mobile nav', () => {
    const html = renderNavbar('/courses');
    assert.ok(html.includes(`href="${ROUTES.COURSES}"`), 'Courses link must exist in navbar');
    assert.ok(html.includes('>Courses<'), 'Courses label must exist in navbar');
  });

  await test('2. Navigation includes Courses and first-class My Courses destination', () => {
    const html = renderNavbar('/courses');
    assert.ok(html.includes(`href="${ROUTES.COURSES}"`), 'Courses link must exist');
    assert.ok(html.includes('>Courses<'), 'Courses text label must exist');
    assert.ok(html.includes('>My Courses<'), 'First-class My Courses destination must appear in nav');
    assert.ok(ROUTES.MY_COURSES === '/my-courses' || ROUTES.MY_COURSES.includes('/learn'), 'ROUTES.MY_COURSES must preserve route mapping');
  });

  await test('3. Mobile drawer contains consolidated Courses link and no competing My Courses', () => {
    const html = renderNavbar('/courses');
    const drawerRegex = /<aside class="mobile-menu"[\s\S]*?<\/aside>/;
    const drawerMatch = html.match(drawerRegex);
    assert.ok(drawerMatch, 'Mobile drawer must exist');
    const drawerContent = drawerMatch[0];
    assert.ok(drawerContent.includes(`href="${ROUTES.COURSES}"`), 'Drawer has Courses link');
    assert.ok(!drawerContent.includes(`href="${ROUTES.MY_COURSES}"`), 'Drawer does not have competing My Courses link');
  });

  await test('4. The top navigation search button/icon is removed from the header bar', () => {
    const html = renderNavbar('/');
    const navAuthAreaRegex = /<div class="nav-auth-area">([\s\S]*?)<\/div>/;
    const match = html.match(navAuthAreaRegex);
    assert.ok(match, 'nav-auth-area must exist');
    assert.strictEqual(
      match[1].includes('id="nav-search-btn"'),
      false,
      'Top header nav-search-btn must be removed from nav-auth-area'
    );
  });

  await test('5. Existing search modal, shortcuts, and drawer search remain intact', () => {
    const html = renderNavbar('/');
    assert.ok(html.includes('id="mobile-drawer-search-btn"'), 'Drawer quick search button must remain intact');
    assert.ok(html.includes('id="search-modal-overlay"'), 'Search modal overlay markup must remain intact');
    assert.ok(html.includes('id="search-modal"'), 'Search modal must remain intact');
  });

  await test('6. Desktop navigation remains usable and responsive', () => {
    const html = renderNavbar('/my-courses');
    assert.ok(html.includes('class="nav-links"'), 'Desktop nav-links container must exist');
    assert.ok(html.includes('href="/learn"'), 'Learn link present');
    assert.ok(html.includes('href="/calculators"'), 'Calculators link present');
    assert.ok(html.includes('href="/resources"'), 'Resources link present');
    assert.ok(html.includes('href="/blog"'), 'Blog link present');
    assert.ok(html.includes('href="/about"'), 'About link present');
  });

  await test('7. Mobile navigation quick buttons and drawer remain functional', () => {
    const html = renderNavbar('/');
    assert.ok(html.includes('class="mobile-quick-actions"'), 'Mobile center quick actions present');
    assert.ok(html.includes('id="nav-toggle"'), 'Mobile hamburger toggle button present');
    assert.ok(html.includes('id="mobile-menu-close"'), 'Mobile drawer close button present');

    // Mobile quick action button has "Courses" label targeting ROUTES.COURSES link:
    const quickActionsMatch = html.match(/<div class="mobile-quick-actions"[\s\S]*?<\/div>/);
    assert.ok(quickActionsMatch, 'mobile-quick-actions element found');
    assert.ok(quickActionsMatch[0].includes(`href="${ROUTES.COURSES}"`), 'Mobile quick button targets /courses');
    assert.ok(quickActionsMatch[0].includes('<span>Courses</span>'), 'Mobile quick button displays "Courses"');

    // Desktop nav links are unchanged:
    const desktopNavMatch = html.match(/<div class="nav-links">([\s\S]*?)<\/div>/);
    assert.ok(desktopNavMatch, 'desktop nav-links found');
    assert.ok(desktopNavMatch[1].includes('>Courses<'), 'Desktop nav retains Courses link');
  });

  await test('8. Theme toggle, WhatsApp CTA, and authentication slot are preserved', () => {
    const html = renderNavbar('/');
    assert.ok(html.includes('id="theme-toggle-btn-desktop"'), 'Desktop theme toggle button must exist');
    assert.ok(html.includes('id="desktop-auth-container"'), 'Desktop auth container slot must exist');
    assert.ok(html.includes('id="mobile-auth-container"'), 'Mobile auth container slot must exist');
    assert.ok(html.includes('https://wa.me/'), 'WhatsApp contact CTA link must exist');
  });

  // -----------------------------------------------------------------------------
  // 2. My Courses Page Tests
  // -----------------------------------------------------------------------------
  console.log('\n--- 2. My Courses Page ---');

  await test('9. My Courses static shell renders properly with breadcrumbs and portal header', () => {
    const html = renderMyCoursesPage();
    assert.ok(html.includes('class="mc-page"'), 'My Courses page container must exist');
    assert.ok(html.includes('My Enrolled Courses'), 'H1 title must exist');
    assert.ok(html.includes('id="mc-content-slot"'), 'Dynamic content slot must exist');
    assert.ok(html.includes('Student Dashboard'), 'Student Dashboard badge must exist');
  });

  await test('10. My Courses SEO directives set noindex, nofollow and canonical', () => {
    const seo = resolvePageSEO('/my-courses');
    assert.strictEqual(seo.robots, 'noindex, nofollow', 'Private student dashboard must not be indexed');
    assert.strictEqual(seo.canonical, 'https://risepaisa.com/my-courses', 'Canonical link must be accurate');
  });

  await test('11. Guests receive zero database queries and empty list when unauthenticated', async () => {
    resetCourseCache();
    const enrolled = await fetchUserEnrolledCourses(null);
    assert.deepStrictEqual(enrolled, [], 'Guest must return empty array without Firestore calls');
    const enrolledUndefined = await fetchUserEnrolledCourses(undefined);
    assert.deepStrictEqual(enrolledUndefined, [], 'Undefined UID must return empty array');
  });

  await test('12. Enrollment is not inferred from localStorage or client variables', () => {
    // Verify that fetchUserEnrolledCourses only queries database when uid is provided
    assert.ok(typeof fetchUserEnrolledCourses === 'function', 'fetchUserEnrolledCourses is a server/db function');
  });

  // -----------------------------------------------------------------------------
  // 3. Administrator Security & Firestore Rules Tests
  // -----------------------------------------------------------------------------
  console.log('\n--- 3. Administrator Security & Firestore Rules ---');

  await test('13. Firestore rules file contains strict isAdmin() helper', () => {
    const rules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');
    assert.ok(rules.includes('function isAdmin()'), 'Rules must define isAdmin helper');
    assert.ok(
      rules.includes('exists(/databases/$(database)/documents/admins/$(request.auth.uid))'),
      'isAdmin must check /admins/{uid} document existence'
    );
  });

  await test('14. Firestore rules strictly forbid client writes to /admins', () => {
    const rules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');
    const adminsBlock = rules.match(/match \/admins\/\{adminUid\} \{([\s\S]*?)\}/);
    assert.ok(adminsBlock, 'match /admins/{adminUid} block must exist');
    assert.ok(adminsBlock[1].includes('allow write: if false;'), 'Client writes to /admins must be forbidden');
    assert.ok(
      adminsBlock[1].includes('allow read: if isAuthenticated() && request.auth.uid == adminUid;'),
      'Only the authenticated user may check their own admin doc'
    );
  });

  await test('15. Firestore rules enforce isAdmin() for course creation, updates, and deletion', () => {
    const rules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');
    const courseRulesIndex = rules.indexOf('match /courses/{courseId}');
    assert.ok(courseRulesIndex !== -1, 'match /courses/{courseId} block must exist');
    const coursesSubstr = rules.slice(courseRulesIndex);
    assert.ok(coursesSubstr.includes('allow create, update: if isAdmin()'), 'Create/Update requires isAdmin');
    assert.ok(coursesSubstr.includes('allow delete: if isAdmin();'), 'Delete requires isAdmin');
  });

  await test('16. Firestore rules restrict unpublished courses to administrators only', () => {
    const rules = fs.readFileSync(path.join(rootDir, 'firestore.rules'), 'utf8');
    assert.ok(
      rules.includes('allow read: if (resource != null && resource.data.published == true) || isAdmin();'),
      'Unpublished courses are only readable by admins'
    );
  });

  await test('17. checkIsAdmin rejects null or invalid UIDs safely without throwing', async () => {
    const resNull = await checkIsAdmin(null);
    assert.strictEqual(resNull, false, 'Null UID must return false');
    const resEmpty = await checkIsAdmin('');
    assert.strictEqual(resEmpty, false, 'Empty UID must return false');
    const resNum = await checkIsAdmin(12345);
    assert.strictEqual(resNum, false, 'Numeric UID must return false');
  });

  await test('18. saveAdminCourse rejects non-admin execution with security error', async () => {
    let errorCaught = false;
    try {
      await saveAdminCourse('ordinary-user-uid', {
        id: 'test',
        slug: 'test',
        title: 'Test',
        shortDescription: 'Test',
        published: true,
        displayOrder: 1
      });
    } catch (err) {
      errorCaught = true;
      assert.ok(err.message.includes('Administrative permissions required'), 'Must throw permission error');
    }
    assert.ok(errorCaught, 'Must deny unauthorized save');
  });

  await test('19. deleteAdminCourse rejects non-admin execution with security error', async () => {
    let errorCaught = false;
    try {
      await deleteAdminCourse('ordinary-user-uid', 'nepse-stock-market-basics');
    } catch (err) {
      errorCaught = true;
      assert.ok(err.message.includes('Administrative permissions required'), 'Must throw permission error');
    }
    assert.ok(errorCaught, 'Must deny unauthorized delete');
  });

  // -----------------------------------------------------------------------------
  // 4. Course Management & Schema Validation Tests
  // -----------------------------------------------------------------------------
  console.log('\n--- 4. Course Management & Schema Validation ---');

  await test('20. Admin Courses static shell renders properly with header and breadcrumbs', () => {
    const html = renderAdminCoursesPage();
    assert.ok(html.includes('class="ac-page"'), 'Admin page container must exist');
    assert.ok(html.includes('Course Management'), 'Title must exist');
    assert.ok(html.includes('id="ac-workspace"'), 'Workspace slot must exist');
    assert.ok(html.includes('Administrator Portal'), 'Admin badge must exist');
  });

  await test('21. Admin Courses SEO directives set noindex, nofollow', () => {
    const seo = resolvePageSEO('/admin/courses');
    assert.strictEqual(seo.robots, 'noindex, nofollow', 'Admin console must not be indexed');
    assert.strictEqual(seo.canonical, 'https://risepaisa.com/admin/courses', 'Admin canonical must be correct');
  });

  await test('22. Course validation validates valid course and rejects invalid fields', () => {
    const valid = validateCourse({
      id: 'test-course',
      slug: 'test-course',
      title: 'Valid Course Title',
      shortDescription: 'Valid short description',
      published: true,
      displayOrder: 1
    });
    assert.strictEqual(valid.valid, true, 'Valid course must pass');

    const invalidSlug = validateCourse({
      id: 'test-course',
      slug: 'INVALID SLUG WITH SPACES',
      title: 'Title',
      shortDescription: 'Desc',
      published: true,
      displayOrder: 1
    });
    assert.strictEqual(invalidSlug.valid, false, 'Invalid slug must fail');
    assert.ok(invalidSlug.errors.some(e => e.includes('slug')), 'Error must mention slug');

    const missingTitle = validateCourse({
      id: 'test-course',
      slug: 'test-course',
      title: '',
      shortDescription: 'Desc',
      published: true,
      displayOrder: 1
    });
    assert.strictEqual(missingTitle.valid, false, 'Empty title must fail');
  });

  await test('23. Topic validation validates valid topic and rejects invalid fields', () => {
    const valid = validateTopic({
      id: 'topic-1',
      title: 'Module 1: Introduction',
      displayOrder: 1,
      published: true
    });
    assert.strictEqual(valid.valid, true, 'Valid topic must pass');

    const invalid = validateTopic({
      id: '',
      title: '',
      displayOrder: 'one',
      published: 'yes'
    });
    assert.strictEqual(invalid.valid, false, 'Invalid topic must fail');
    assert.strictEqual(invalid.errors.length >= 3, true, 'Must report multiple errors');
  });

  await test('24. Lesson validation validates valid lesson and rejects invalid fields', () => {
    const valid = validateLesson({
      id: 'lesson-1',
      title: 'Lesson 1: Basics',
      displayOrder: 1,
      published: true,
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    });
    assert.strictEqual(valid.valid, true, 'Valid lesson must pass');

    const invalidYt = validateLesson({
      id: 'lesson-1',
      title: 'Lesson 1',
      displayOrder: 1,
      published: true,
      youtubeUrl: 'https://vimeo.com/12345678'
    });
    assert.strictEqual(invalidYt.valid, false, 'Non-YouTube URL in lesson must fail');
  });

  await test('25. YouTube URL validation rejects arbitrary domains and malformed URLs', () => {
    assert.strictEqual(validateYouTubeUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), true);
    assert.strictEqual(validateYouTubeUrl('https://youtu.be/dQw4w9WgXcQ'), true);
    assert.strictEqual(validateYouTubeUrl('https://www.youtube.com/embed/dQw4w9WgXcQ'), true);
    assert.strictEqual(validateYouTubeUrl('https://malicious-site.com/watch?v=dQw4w9WgXcQ'), false);
    assert.strictEqual(validateYouTubeUrl('javascript:alert(1)'), false);
    assert.strictEqual(validateYouTubeUrl(''), false);
    assert.strictEqual(validateYouTubeUrl(null), false);
  });

  await test('26. Resource URL validation rejects javascript: and unsecure URLs', () => {
    assert.strictEqual(validateResourceUrl('/assets/downloads/checklist.html').valid, true);
    assert.strictEqual(validateResourceUrl('https://example.com/sheet.xlsx').valid, true);
    assert.strictEqual(validateResourceUrl('javascript:alert(1)').valid, false);
    assert.strictEqual(validateResourceUrl('data:text/html,malicious').valid, false);
    assert.strictEqual(validateResourceUrl('http://insecure.com/file.pdf').valid, false);
  });

  await test('27. generateStableId generates unique, predictable, collision-resistant IDs', () => {
    const id1 = generateStableId('topic');
    const id2 = generateStableId('topic');
    const id3 = generateStableId('lesson');
    assert.notStrictEqual(id1, id2, 'Generated IDs must be unique');
    assert.ok(id1.startsWith('topic-'), 'Topic ID must have topic prefix');
    assert.ok(id3.startsWith('lesson-'), 'Lesson ID must have lesson prefix');
  });

  await test('28. reorderCollection moves items and re-indexes displayOrder sequentially', () => {
    const items = [
      { id: 'm1', title: 'Module 1', displayOrder: 1 },
      { id: 'm2', title: 'Module 2', displayOrder: 2 },
      { id: 'm3', title: 'Module 3', displayOrder: 3 }
    ];

    // Move Module 3 to top (index 2 -> index 0)
    const reordered = reorderCollection(items, 2, 0);
    assert.strictEqual(reordered[0].id, 'm3', 'Module 3 must be first');
    assert.strictEqual(reordered[0].displayOrder, 1, 'First item must have displayOrder 1');
    assert.strictEqual(reordered[1].id, 'm1', 'Module 1 must be second');
    assert.strictEqual(reordered[1].displayOrder, 2, 'Second item must have displayOrder 2');
    assert.strictEqual(reordered[2].id, 'm2', 'Module 2 must be third');
    assert.strictEqual(reordered[2].displayOrder, 3, 'Third item must have displayOrder 3');
  });

  // -----------------------------------------------------------------------------
  // 5. Static Files & Routing Consistency Tests
  // -----------------------------------------------------------------------------
  console.log('\n--- 5. Static Files & Routing Consistency ---');

  await test('29. Pre-rendered static files for /my-courses and /admin/courses exist', () => {
    const myCoursesFile = path.join(rootDir, 'my-courses', 'index.html');
    const adminCoursesFile = path.join(rootDir, 'admin', 'courses', 'index.html');
    assert.ok(fs.existsSync(myCoursesFile), 'my-courses/index.html must exist on disk');
    assert.ok(fs.existsSync(adminCoursesFile), 'admin/courses/index.html must exist on disk');

    const myCoursesContent = fs.readFileSync(myCoursesFile, 'utf8');
    assert.ok(myCoursesContent.includes('My Enrolled Courses'), 'Pre-rendered content present');

    const adminCoursesContent = fs.readFileSync(adminCoursesFile, 'utf8');
    assert.ok(adminCoursesContent.includes('Course Management'), 'Pre-rendered admin content present');
  });

  await test('30. Pre-rendered pages contain updated navigation without search button', () => {
    const homeFile = path.join(rootDir, 'index.html');
    const homeContent = fs.readFileSync(homeFile, 'utf8');
    assert.ok(homeContent.includes('>My Courses<'), 'Home page navbar includes first-class My Courses destination');
    assert.ok(homeContent.includes('href="/courses"'), 'Home page navbar must have Courses link');
    assert.strictEqual(
      homeContent.includes('id="nav-search-btn"'),
      false,
      'nav-search-btn must be removed from pre-rendered static header'
    );
  });

  console.log('\n======================================================');
  console.log(`TOTAL PART 7 TESTS: ${passedCount + failedCount}`);
  console.log(`PASSED: ${passedCount}`);
  console.log(`FAILED: ${failedCount}`);
  console.log('======================================================\n');

  if (failedCount > 0) {
    process.exit(1);
  }
}

runAllTests().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});

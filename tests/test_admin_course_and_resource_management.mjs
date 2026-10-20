// ========================================================
// RISEPAISA ADMIN COURSE & RESOURCE MANAGEMENT TEST SUITE
// Comprehensive verification of course CRUD, modules,
// lessons, YouTube safety, file validation, and storage rules
// ========================================================

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
  }
}

async function runTestSuite() {
  console.log('\n========================================================');
  console.log('TEST SUITE: ADMIN COURSE, LESSON & RESOURCE MANAGEMENT');
  console.log('========================================================\n');

  // Import courses module
  const {
    validateCourse,
    validateTopic,
    validateLesson,
    validateResource,
    validateYouTubeUrl,
    toSafeYouTubeEmbedUrl,
    validateResourceUrl,
    validateResourceFile,
    uploadCourseResource,
    MAX_RESOURCE_FILE_SIZE_BYTES,
    ALLOWED_RESOURCE_EXTENSIONS,
    PLATFORM_DOWNLOADABLE_ASSETS,
    generateStableId,
    reorderCollection,
    saveAdminCourse,
    deleteAdminCourse
  } = await import('../js/firebase/courses.js');

  const { renderAdminCoursesPage } = await import('../js/pages/adminCourses.js');

  // ── 1. Course Creation & Metadata Validation ─────────────────────────────
  console.log('--- 1. Testing Course Metadata & Hierarchy Validation ---');

  await test('validateCourse accepts valid course object', () => {
    const validCourse = {
      id: 'nepse-basics',
      slug: 'nepse-basics',
      title: 'NEPSE Stock Market Basics',
      shortDescription: 'Master the Nepal stock exchange.',
      description: 'Full course syllabus detailing NEPSE trading.',
      published: true,
      displayOrder: 1
    };
    const res = validateCourse(validCourse);
    assert.strictEqual(res.valid, true);
    assert.strictEqual(res.errors.length, 0);
  });

  await test('validateCourse rejects missing title or invalid slug', () => {
    const badSlug = validateCourse({
      id: 'course-1',
      slug: 'Invalid Slug!',
      title: 'Course Title',
      published: true
    });
    assert.strictEqual(badSlug.valid, false);

    const emptyTitle = validateCourse({
      id: 'course-1',
      slug: 'course-1',
      title: '   ',
      published: true
    });
    assert.strictEqual(emptyTitle.valid, false);
  });

  await test('validateTopic validates topic schema and display order', () => {
    const valid = validateTopic({
      id: 'topic-1',
      title: 'Module 1: Getting Started',
      displayOrder: 1,
      published: true
    });
    assert.strictEqual(valid.valid, true);

    const invalid = validateTopic({
      id: '',
      title: '',
      displayOrder: 'one'
    });
    assert.strictEqual(invalid.valid, false);
  });

  await test('validateLesson validates lesson schema, YouTube links, and free preview', () => {
    const valid = validateLesson({
      id: 'les-1',
      title: 'Lesson 1: Introduction',
      displayOrder: 1,
      published: true,
      isFree: true,
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    });
    assert.strictEqual(valid.valid, true);

    const badYt = validateLesson({
      id: 'les-1',
      title: 'Lesson 1',
      displayOrder: 1,
      published: true,
      youtubeUrl: 'https://unauthorized-domain.com/video'
    });
    assert.strictEqual(badYt.valid, false);
  });

  // ── 2. YouTube Safety & Sanitization ─────────────────────────────────────
  console.log('\n--- 2. Testing YouTube Safety & Embed URL Generation ---');

  await test('validateYouTubeUrl handles standard, shortened, and embed URLs', () => {
    assert.strictEqual(validateYouTubeUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), true);
    assert.strictEqual(validateYouTubeUrl('https://youtu.be/dQw4w9WgXcQ'), true);
    assert.strictEqual(validateYouTubeUrl('https://www.youtube.com/embed/dQw4w9WgXcQ'), true);
    assert.strictEqual(validateYouTubeUrl('https://m.youtube.com/watch?v=dQw4w9WgXcQ'), true);
    assert.strictEqual(validateYouTubeUrl('https://youtube-nocookie.com/embed/dQw4w9WgXcQ'), true);
  });

  await test('validateYouTubeUrl strictly rejects arbitrary domains, javascript:, and file:', () => {
    assert.strictEqual(validateYouTubeUrl('https://malicious.com/watch?v=dQw4w9WgXcQ'), false);
    assert.strictEqual(validateYouTubeUrl('javascript:alert(1)'), false);
    assert.strictEqual(validateYouTubeUrl('file:///etc/passwd'), false);
    assert.strictEqual(validateYouTubeUrl('data:text/html;base64,PHNjcmlwdD4='), false);
  });

  await test('toSafeYouTubeEmbedUrl produces youtube-nocookie embed URL', () => {
    const embed = toSafeYouTubeEmbedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    assert.strictEqual(embed, 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1');
  });

  // ── 3. Resource URL & Schema Validation ───────────────────────────────────
  console.log('\n--- 3. Testing Resource URL & Attachment Validation ---');

  await test('validateResourceUrl accepts relative /assets/ paths and HTTPS links', () => {
    assert.strictEqual(validateResourceUrl('/assets/downloads/nepse-first-time-investor-checklist.html').valid, true);
    assert.strictEqual(validateResourceUrl('assets/downloads/commercial-bank-loan-comparison-worksheet.csv').valid, true);
    assert.strictEqual(validateResourceUrl('https://firebasestorage.googleapis.com/v0/b/.../file.pdf').valid, true);
  });

  await test('validateResourceUrl rejects dangerous schemes and unencrypted HTTP', () => {
    assert.strictEqual(validateResourceUrl('javascript:alert(1)').valid, false);
    assert.strictEqual(validateResourceUrl('data:application/pdf;base64,...').valid, false);
    assert.strictEqual(validateResourceUrl('file:///path/to/secret').valid, false);
    assert.strictEqual(validateResourceUrl('http://insecure-domain.com/doc.pdf').valid, false);
  });

  await test('validateResource validates title and fileType enum', () => {
    const valid = validateResource({
      title: 'Valuation Sheet',
      url: '/assets/downloads/commercial-bank-loan-comparison-worksheet.csv',
      fileType: 'excel'
    });
    assert.strictEqual(valid.valid, true);

    const invalid = validateResource({
      title: '',
      url: 'javascript:void(0)',
      fileType: 'invalid-type'
    });
    assert.strictEqual(invalid.valid, false);
    assert.strictEqual(invalid.errors.length >= 3, true);
  });

  // ── 4. Resource File Validation (validateResourceFile) ────────────────────
  console.log('\n--- 4. Testing Physical File Upload Validation ---');

  await test('validateResourceFile accepts valid PDF, CSV, Excel, and HTML files under 25MB', () => {
    const pdfFile = { name: 'nepse-guide.pdf', size: 2 * 1024 * 1024 };
    const csvFile = { name: 'budget-planner.csv', size: 150 * 1024 };
    const xlsxFile = { name: 'loan-sheet.xlsx', size: 5 * 1024 * 1024 };
    const htmlFile = { name: 'checklist.html', size: 25 * 1024 };

    assert.strictEqual(validateResourceFile(pdfFile).valid, true);
    assert.strictEqual(validateResourceFile(csvFile).valid, true);
    assert.strictEqual(validateResourceFile(xlsxFile).valid, true);
    assert.strictEqual(validateResourceFile(htmlFile).valid, true);
  });

  await test('validateResourceFile rejects oversized files (> 25MB)', () => {
    const hugeFile = { name: 'huge-video.pdf', size: 26 * 1024 * 1024 };
    const res = validateResourceFile(hugeFile);
    assert.strictEqual(res.valid, false);
    assert.ok(res.error.includes('maximum limit of 25MB'));
  });

  await test('validateResourceFile rejects 0-byte empty files', () => {
    const emptyFile = { name: 'empty.pdf', size: 0 };
    const res = validateResourceFile(emptyFile);
    assert.strictEqual(res.valid, false);
    assert.ok(res.error.includes('empty'));
  });

  await test('validateResourceFile rejects forbidden executable and script extensions', () => {
    const forbidden = ['bad.exe', 'script.sh', 'code.js', 'exploit.py', 'installer.msi'];
    for (const name of forbidden) {
      const res = validateResourceFile({ name, size: 1024 });
      assert.strictEqual(res.valid, false, `Must reject ${name}`);
    }
  });

  await test('validateResourceFile rejects path traversal characters in file names', () => {
    const traversal = ['../../etc/passwd.pdf', 'dir/file.pdf', '..\\win\\system.pdf'];
    for (const name of traversal) {
      const res = validateResourceFile({ name, size: 1024 });
      assert.strictEqual(res.valid, false, `Must reject path traversal ${name}`);
    }
  });

  await test('validateResourceFile sanitizes special characters cleanly', () => {
    const res = validateResourceFile({ name: 'NEPSE [2026] #1 Final!.pdf', size: 1024 });
    assert.strictEqual(res.valid, true);
    assert.strictEqual(res.sanitizedName, 'NEPSE__2026___1_Final_.pdf');
  });

  // ── 5. Pre-bundled Platform Assets Verification ───────────────────────────
  console.log('\n--- 5. Testing Pre-bundled Platform Learning Assets ---');

  await test('PLATFORM_DOWNLOADABLE_ASSETS contains 14 verified study assets', () => {
    assert.strictEqual(Array.isArray(PLATFORM_DOWNLOADABLE_ASSETS), true);
    assert.strictEqual(PLATFORM_DOWNLOADABLE_ASSETS.length, 14);
  });

  await test('Every asset in PLATFORM_DOWNLOADABLE_ASSETS physically exists on disk in assets/downloads/', () => {
    for (const asset of PLATFORM_DOWNLOADABLE_ASSETS) {
      assert.ok(asset.url.startsWith('/assets/downloads/'), `Asset ${asset.title} has /assets/downloads/ URL`);
      const diskPath = path.join(rootDir, asset.url.replace(/^\//, ''));
      assert.ok(fs.existsSync(diskPath), `Physical file exists on disk at ${diskPath}`);
      const stat = fs.statSync(diskPath);
      assert.ok(stat.size > 0, `File ${diskPath} has size > 0 bytes (got ${stat.size})`);
    }
  });

  // ── 6. Storage Upload Handler (uploadCourseResource) ──────────────────────
  console.log('\n--- 6. Testing Storage Upload Architecture & Progress Reporting ---');

  await test('uploadCourseResource rejects non-admin executions with security error', async () => {
    let errorCaught = false;
    try {
      await uploadCourseResource('nepse-basics', { name: 'guide.pdf', size: 1024 }, null, {
        uid: 'ordinary-student-uid'
      });
    } catch (err) {
      errorCaught = true;
      assert.ok(err.message.includes('Administrative permissions required'));
    }
    assert.strictEqual(errorCaught, true);
  });

  await test('uploadCourseResource executes upload and reports progress via storage adapter', async () => {
    const progressReports = [];
    const mockStorageAdapter = {
      upload: async (targetPath, file) => {
        assert.ok(targetPath.startsWith('courses/nepse-basics/resources/'));
        return {
          downloadUrl: `https://firebasestorage.googleapis.com/v0/b/risepaisa-77278.firebasestorage.app/o/${encodeURIComponent(targetPath)}`
        };
      }
    };

    const file = { name: 'nepse-valuation.xlsx', size: 2048 };
    const res = await uploadCourseResource(
      'nepse-basics',
      file,
      (pct) => progressReports.push(pct),
      { storageAdapter: mockStorageAdapter }
    );

    assert.strictEqual(res.success, true);
    assert.ok(res.url.includes('nepse-valuation.xlsx'));
    assert.strictEqual(res.fileType, 'excel');
    assert.deepStrictEqual(progressReports, [50, 100]);
  });

  // ── 7. Firebase Storage Security Rules Specification ──────────────────────
  console.log('\n--- 7. Testing storage.rules Security Specification ---');

  await test('storage.rules exists and specifies version 2 with default-deny', () => {
    const storageRulesPath = path.join(rootDir, 'storage.rules');
    assert.ok(fs.existsSync(storageRulesPath), 'storage.rules exists');

    const rules = fs.readFileSync(storageRulesPath, 'utf8');
    assert.ok(rules.includes("rules_version = '2';"), "storage.rules specifies version '2'");
    assert.ok(rules.includes('service firebase.storage'), 'Targets service firebase.storage');
    assert.ok(rules.includes('allow read, write: if false;'), 'Default deny catch-all exists');
  });

  await test('storage.rules restricts course resources write to isAdmin() with size and MIME checks', () => {
    const rules = fs.readFileSync(path.join(rootDir, 'storage.rules'), 'utf8');
    assert.ok(rules.includes('match /courses/{courseSlug}/resources/{fileName}'), 'Matches course resources path');
    assert.ok(rules.includes('allow read: if request.auth != null;'), 'Authenticated read permitted');
    assert.ok(rules.includes('allow write: if isAdmin()'), 'Write requires isAdmin()');
    assert.ok(rules.includes('allow delete: if isAdmin()'), 'Delete requires isAdmin()');
    assert.ok(rules.includes('25 * 1024 * 1024'), 'Enforces 25MB maximum file size');
    assert.ok(rules.includes('application/pdf'), 'Whitelists application/pdf');
    assert.ok(rules.includes('text/csv'), 'Whitelists text/csv');
  });

  // ── 8. Admin Courses UI Markup & Accessibility ────────────────────────────
  console.log('\n--- 8. Testing Admin Courses UI Markup & Modal Accessibility ---');

  await test('renderAdminCoursesPage includes ac-modal-slot and required structure', () => {
    const html = renderAdminCoursesPage();
    assert.ok(html.includes('id="ac-modal-slot"'), 'ac-modal-slot exists for dialogs');
    assert.ok(html.includes('id="ac-workspace"'), 'ac-workspace exists for course views');
    assert.ok(html.includes('id="ac-alert-slot"'), 'ac-alert-slot exists for notifications');
  });

  await test('adminCourses.js source wires upload input, library picker, and test download links', () => {
    const source = fs.readFileSync(path.join(rootDir, 'js/pages/adminCourses.js'), 'utf8');
    assert.ok(source.includes('ac-res-file-input'), 'Contains ac-res-file-input');
    assert.ok(source.includes('ac-pick-lib-btn'), 'Contains ac-pick-lib-btn');
    assert.ok(source.includes('ac-res-test-link'), 'Contains ac-res-test-link');
    assert.ok(source.includes('ac-lib-modal-card'), 'Contains ac-lib-modal-card');
    assert.ok(source.includes('window.addEventListener(\'keydown\', handleEscapeKey)'), 'Handles Escape key');
  });

  await test('pages.css defines styles for resource head actions, progress bar, and library modal', () => {
    const css = fs.readFileSync(path.join(rootDir, 'css/pages.css'), 'utf8');
    assert.ok(css.includes('.ac-res-head-actions'), 'pages.css has .ac-res-head-actions');
    assert.ok(css.includes('.ac-upload-res-label'), 'pages.css has .ac-upload-res-label');
    assert.ok(css.includes('.ac-pick-lib-btn'), 'pages.css has .ac-pick-lib-btn');
    assert.ok(css.includes('.ac-res-progress-bar'), 'pages.css has .ac-res-progress-bar');
    assert.ok(css.includes('.ac-lib-modal-card'), 'pages.css has .ac-lib-modal-card');
  });

  // ── Summary ──────────────────────────────────────────────────────────────
  console.log('\n========================================================');
  console.log(`ADMIN COURSE TEST SUITE: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
  console.log('========================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTestSuite().catch(err => {
  console.error('Test runner fatal error:', err);
  process.exit(1);
});

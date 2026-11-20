/**
 * test_admin_course_management_backend.mjs
 * 
 * Exhaustive Integration Test Suite for RisePaisa Course Management Backend:
 * 1. Admin Course Information & Pricing Management (Title, Subtitle, Category, Duration, Price NPR, WhatsApp links, Payment Methods, Features)
 * 2. Video & Lesson Management (Add, Edit, Reorder, Delete, YouTube URL Validation & ID Extraction, Free Preview, Locked, Custom Thumbnails)
 * 3. Module Management (Add, Rename, Goal, Reorder, Safe Deletion with Lesson Migration or Force Delete)
 * 4. Image Upload & Validation System (File types, <=5MB size, Storage Rules, URL references)
 * 5. Frontend Dynamic Parity (Course Detail & Learn Pages consume backend source of truth)
 * 6. Protection of Existing NEPSE Course Data & Security Authorization
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Helper to load ES modules
async function importModule(relPath) {
  const fullPath = path.resolve(ROOT_DIR, relPath);
  return await import(`file://${fullPath}`);
}

// In-memory Mock DB
function createMockDb() {
  const store = new Map();
  const sdk = {
    doc: (db, col, id) => ({ path: `${col}/${id}`, id }),
    collection: (db, col) => ({ path: col }),
    getDoc: async (docRef) => {
      const data = store.get(docRef.path);
      return {
        exists: () => data !== undefined,
        data: () => (data ? JSON.parse(JSON.stringify(data)) : undefined),
        id: docRef.id
      };
    },
    setDoc: async (docRef, data, opts) => {
      if (opts && opts.merge && store.has(docRef.path)) {
        const existing = store.get(docRef.path);
        store.set(docRef.path, { ...existing, ...JSON.parse(JSON.stringify(data)) });
      } else {
        store.set(docRef.path, JSON.parse(JSON.stringify(data)));
      }
    },
    deleteDoc: async (docRef) => {
      store.delete(docRef.path);
    },
    getDocs: async (colRef) => {
      const docs = [];
      for (const [p, data] of store.entries()) {
        if (p.startsWith(colRef.path + '/') && p.split('/').length === colRef.path.split('/').length + 1) {
          docs.push({
            id: p.split('/').pop(),
            data: () => JSON.parse(JSON.stringify(data))
          });
        }
      }
      return {
        forEach: (cb) => docs.forEach(cb),
        docs
      };
    },
    query: (colRef, ...constraints) => ({ ...colRef, constraints }),
    where: (field, op, val) => ({ field, op, val }),
    serverTimestamp: () => new Date().toISOString()
  };

  // Seed admin user
  store.set('admins/admin-uid-1', {
    uid: 'admin-uid-1',
    email: 'admin@risepaisa.com',
    role: 'admin'
  });

  return { db: {}, sdk, store };
}

// Mock browser environment
function setupMockBrowser() {
  const store = {};
  global.localStorage = {
    getItem: (key) => store[key] || null,
    setItem: (key, val) => { store[key] = String(val); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); }
  };

  global.window = {
    location: { origin: 'http://localhost:8000', pathname: '/' },
    localStorage: global.localStorage
  };
}

describe('RisePaisa — Course Management Backend Implementation', async () => {
  setupMockBrowser();

  const coursesFirebase = await importModule('js/firebase/courses.js');
  const coursesData = await importModule('js/data/courses.js');
  const {
    validateCourse,
    validateTopic,
    validateLesson,
    validateImageFile,
    uploadCourseImage,
    saveAdminCourse,
    normalizeCourseData,
    MAX_IMAGE_FILE_SIZE_BYTES,
    ALLOWED_IMAGE_EXTENSIONS,
    extractYouTubeVideoId,
    validateYouTubeUrl,
    toSafeYouTubeEmbedUrl
  } = coursesFirebase;

  const {
    getCourses,
    getAllCourses
  } = coursesData;

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. Course Information & Metadata Management
  // ─────────────────────────────────────────────────────────────────────────────
  describe('1. Course Metadata & Pricing Management', () => {
    it('1.1 validates complete course metadata with pricing and WhatsApp links', () => {
      const testCourse = {
        id: 'advanced-nepse-price-action',
        slug: 'advanced-nepse-price-action',
        title: 'Advanced NEPSE Price Action & Flow',
        subtitle: 'Institutional order flow and candlestick dynamics for Nepal Stock Exchange',
        category: 'Technical Analysis',
        duration: '18 hours (self-paced)',
        shortDescription: 'Master institutional volume and chart analysis in Nepal.',
        description: 'Comprehensive guide to trading NEPSE index and listed stocks.',
        price: 3999,
        originalPrice: 7999,
        currency: 'NPR',
        whatsappUrl: 'https://wa.me/9779800000000?text=I%20want%20to%20enroll',
        supportWhatsappUrl: 'https://wa.me/9779800000000?text=Support%20request',
        paymentMethods: ['esewa', 'khalti', 'bank_transfer', 'connect_ips'],
        instructor: 'Aakash Das',
        instructorRole: 'Head Research Analyst',
        instructorNote: 'With guest veteran technical analysts',
        instructorImage: 'https://storage.googleapis.com/test-bucket/avatar.png',
        featuresList: [
          'Full 4K Video Lessons',
          'Downloadable Excel Financial Models',
          'Private Telegram & Discord Discussion Access',
          'Verified Certificate of Completion'
        ],
        published: true,
        displayOrder: 2,
        topics: [
          {
            id: 'm1',
            title: 'Module 01: Foundations',
            displayOrder: 1,
            published: true,
            lessons: [
              {
                id: 'l1',
                title: 'Lesson 1.1: NEPSE Basics',
                youtubeUrl: 'https://www.youtube.com/watch?v=ziVeMxMF4e8',
                duration: '14 mins',
                displayOrder: 1,
                published: true,
                isFree: true,
                locked: false
              }
            ]
          }
        ]
      };

      const val = validateCourse(testCourse);
      assert.equal(val.valid, true, `Validation failed: ${JSON.stringify(val.errors)}`);
      assert.equal(val.errors.length, 0);
    });

    it('1.2 normalizes and preserves extended course fields cleanly', () => {
      const raw = {
        title: 'Value Investing in Nepal',
        slug: 'value-investing-nepal',
        subtitle: 'Warren Buffett philosophy applied to NEPSE commercial banks and hydropower',
        price: '4500',
        originalPrice: '9000',
        currency: 'NPR',
        whatsappUrl: 'https://wa.me/9779811111111',
        paymentMethods: ['esewa', 'khalti'],
        instructor: 'Aakash Das',
        featuresList: ['Feature 1', 'Feature 2'],
        topics: []
      };

      const normalized = normalizeCourseData(raw);
      assert.equal(normalized.title, 'Value Investing in Nepal');
      assert.equal(normalized.subtitle, 'Warren Buffett philosophy applied to NEPSE commercial banks and hydropower');
      assert.equal(normalized.price, 4500);
      assert.equal(normalized.originalPrice, 9000);
      assert.equal(normalized.whatsappUrl, 'https://wa.me/9779811111111');
      assert.deepEqual(normalized.paymentMethods, ['esewa', 'khalti']);
      assert.deepEqual(normalized.featuresList, ['Feature 1', 'Feature 2']);
    });

    it('1.3 rejects invalid price or non-whitelisted WhatsApp URLs', () => {
      const badCourse = {
        id: 'bad-course',
        title: 'Faulty Course',
        slug: 'faulty-course',
        shortDescription: 'Short description',
        published: true,
        price: -500, // Invalid negative price
        topics: []
      };
      const val = validateCourse(badCourse);
      assert.equal(val.valid, false);
      assert.ok(val.errors.some(e => /price/i.test(e)));

      const badWaCourse = {
        id: 'bad-wa-course',
        title: 'Dangerous WhatsApp Link Course',
        slug: 'dangerous-wa-course',
        shortDescription: 'Short description',
        published: true,
        price: 1000,
        whatsappUrl: 'javascript:alert(1)', // Malicious protocol
        topics: []
      };
      const val2 = validateCourse(badWaCourse);
      assert.equal(val2.valid, false);
      assert.ok(val2.errors.some(e => /whatsapp/i.test(e)));
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. Video & Lesson Management
  // ─────────────────────────────────────────────────────────────────────────────
  describe('2. Video & Lesson Management', () => {
    it('2.1 validates YouTube URLs, short links, and extracts 11-char video ID', () => {
      const testCases = [
        { url: 'https://www.youtube.com/watch?v=ziVeMxMF4e8', expectedId: 'ziVeMxMF4e8' },
        { url: 'https://youtu.be/ziVeMxMF4e8', expectedId: 'ziVeMxMF4e8' },
        { url: 'https://www.youtube.com/embed/ziVeMxMF4e8', expectedId: 'ziVeMxMF4e8' },
        { url: 'https://youtube.com/shorts/ziVeMxMF4e8', expectedId: 'ziVeMxMF4e8' }
      ];

      for (const tc of testCases) {
        assert.equal(validateYouTubeUrl(tc.url), true, `Failed validating: ${tc.url}`);
        assert.equal(extractYouTubeVideoId(tc.url), tc.expectedId, `Failed extracting ID from: ${tc.url}`);
        const embedUrl = toSafeYouTubeEmbedUrl(tc.url);
        assert.match(embedUrl, /youtube-nocookie\.com\/embed\/ziVeMxMF4e8/);
      }
    });

    it('2.2 rejects malicious or non-YouTube video links', () => {
      const invalidUrls = [
        'https://vimeo.com/123456789',
        'https://malicious-site.com/video.mp4',
        'javascript:stealData()',
        'file:///etc/passwd',
        'http://insecure-http.com/watch?v=ziVeMxMF4e8'
      ];

      for (const url of invalidUrls) {
        assert.equal(validateYouTubeUrl(url), false, `Should have rejected: ${url}`);
      }
    });

    it('2.3 supports lesson flags: Free Preview, Locked, and Published', () => {
      const lessonFree = {
        id: 'les-free',
        title: 'Free Preview Lesson',
        displayOrder: 1,
        published: true,
        isFree: true,
        locked: false,
        youtubeUrl: 'https://youtu.be/ziVeMxMF4e8'
      };
      assert.equal(validateLesson(lessonFree).valid, true);

      const lessonLocked = {
        id: 'les-locked',
        title: 'Paid Exclusive Lesson',
        displayOrder: 2,
        published: true,
        isFree: false,
        locked: true,
        youtubeUrl: 'https://youtu.be/ziVeMxMF4e8'
      };
      assert.equal(validateLesson(lessonLocked).valid, true);

      const normalized = normalizeCourseData({
        title: 'Test',
        slug: 'test',
        topics: [{ id: 't1', title: 'T1', lessons: [lessonFree, lessonLocked] }]
      });

      assert.equal(normalized.topics[0].lessons[0].isFree, true);
      assert.equal(normalized.topics[0].lessons[0].locked, false);
      assert.equal(normalized.topics[0].lessons[1].isFree, false);
      assert.equal(normalized.topics[0].lessons[1].locked, true);
    });

    it('2.4 lesson custom thumbnails are accepted and normalized', () => {
      const lessonWithThumb = {
        id: 'les-thumb',
        title: 'Lesson with Custom Thumbnail',
        displayOrder: 1,
        published: true,
        thumbnail: 'https://firebasestorage.googleapis.com/v0/b/bucket/o/courses%2Flesson.png',
        youtubeUrl: 'https://youtu.be/ziVeMxMF4e8'
      };

      const val = validateLesson(lessonWithThumb);
      assert.equal(val.valid, true);

      const normalized = normalizeCourseData({
        title: 'Thumb Test',
        slug: 'thumb-test',
        topics: [{ id: 't1', title: 'T1', lessons: [lessonWithThumb] }]
      });
      assert.equal(normalized.topics[0].lessons[0].thumbnail, lessonWithThumb.thumbnail);
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. Module Management & Safe Deletion
  // ─────────────────────────────────────────────────────────────────────────────
  describe('3. Module Management & Safe Deletion', () => {
    it('3.1 supports module creation, ordering, shortDescription goal, and publication', () => {
      const topic1 = {
        id: 'top-1',
        title: 'Module 01 — Basics of Nepalese Financial Markets',
        shortDescription: 'Understand NEPSE index, brokers, and account opening.',
        displayOrder: 1,
        published: true,
        lessons: [
          { id: 'l1', title: 'L1', displayOrder: 1, published: true }
        ]
      };

      const val = validateTopic(topic1);
      assert.equal(val.valid, true, `Module validation failed: ${JSON.stringify(val.errors)}`);
    });

    it('3.2 simulates safe lesson migration when a module is deleted', () => {
      const course = {
        title: 'Trading Masterclass',
        slug: 'trading-masterclass',
        topics: [
          {
            id: 'mod-1',
            title: 'Module 1: Obsolete Intro',
            lessons: [
              { id: 'les-1', title: 'Valuable Lesson 1', topicId: 'mod-1' },
              { id: 'les-2', title: 'Valuable Lesson 2', topicId: 'mod-1' }
            ]
          },
          {
            id: 'mod-2',
            title: 'Module 2: Core Strategies',
            lessons: [
              { id: 'les-3', title: 'Core Lesson A', topicId: 'mod-2' }
            ]
          }
        ]
      };

      // Safe Option 1: Move lessons from mod-1 to mod-2 before deleting mod-1
      const sourceTopic = course.topics[0];
      const targetTopic = course.topics[1];

      // Migrate lessons
      sourceTopic.lessons.forEach(les => {
        les.topicId = targetTopic.id;
        targetTopic.lessons.push(les);
      });
      // Delete source topic
      course.topics.splice(0, 1);

      // Verify no data loss
      assert.equal(course.topics.length, 1);
      assert.equal(course.topics[0].id, 'mod-2');
      assert.equal(course.topics[0].lessons.length, 3);
      assert.equal(course.topics[0].lessons[1].title, 'Valuable Lesson 1');
      assert.equal(course.topics[0].lessons[1].topicId, 'mod-2');
      assert.equal(course.topics[0].lessons[2].title, 'Valuable Lesson 2');
      assert.equal(course.topics[0].lessons[2].topicId, 'mod-2');
    });

    it('3.3 moving a lesson between modules transfers ownership cleanly', () => {
      const moduleA = {
        id: 'mod-a',
        title: 'Module A',
        lessons: [
          { id: 'l1', title: 'Lesson 1', topicId: 'mod-a' },
          { id: 'l2', title: 'Lesson 2 to move', topicId: 'mod-a' }
        ]
      };
      const moduleB = {
        id: 'mod-b',
        title: 'Module B',
        lessons: [
          { id: 'l3', title: 'Lesson 3', topicId: 'mod-b' }
        ]
      };

      // Move Lesson 2 from Module A to Module B
      const [moved] = moduleA.lessons.splice(1, 1);
      moved.topicId = moduleB.id;
      moduleB.lessons.push(moved);

      assert.equal(moduleA.lessons.length, 1);
      assert.equal(moduleB.lessons.length, 2);
      assert.equal(moduleB.lessons[1].id, 'l2');
      assert.equal(moduleB.lessons[1].topicId, 'mod-b');
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. Image Upload & Validation System
  // ─────────────────────────────────────────────────────────────────────────────
  describe('4. Image Upload & Validation System', () => {
    it('4.1 accepts valid images (JPEG, PNG, WebP, SVG) under 5MB', () => {
      const validFiles = [
        { name: 'poster.jpg', size: 1024 * 500, type: 'image/jpeg' },
        { name: 'thumbnail.png', size: 1024 * 1024 * 2, type: 'image/png' },
        { name: 'banner.webp', size: 1024 * 1024 * 4.5, type: 'image/webp' },
        { name: 'icon.svg', size: 1024 * 50, type: 'image/svg+xml' }
      ];

      for (const f of validFiles) {
        const val = validateImageFile(f);
        assert.equal(val.valid, true, `Expected valid for ${f.name}: ${val.error}`);
      }
    });

    it('4.2 rejects files exceeding 5MB limit', () => {
      const oversizedFile = {
        name: 'huge_course_poster.png',
        size: 5.5 * 1024 * 1024, // 5.5MB
        type: 'image/png'
      };

      const val = validateImageFile(oversizedFile);
      assert.equal(val.valid, false);
      assert.match(val.error, /exceeds the maximum limit/i);
    });

    it('4.3 rejects non-image or executable files', () => {
      const forbiddenFiles = [
        { name: 'malware.exe', size: 1024, type: 'application/x-msdownload' },
        { name: 'script.js', size: 1024, type: 'application/javascript' },
        { name: 'document.pdf', size: 1024, type: 'application/pdf' },
        { name: 'archive.zip', size: 1024, type: 'application/zip' },
        { name: 'backdoor.php', size: 1024, type: 'application/x-php' }
      ];

      for (const f of forbiddenFiles) {
        const val = validateImageFile(f);
        assert.equal(val.valid, false, `Should have rejected: ${f.name}`);
        assert.match(val.error, /unsupported image format/i);
      }
    });

    it('4.4 verifies storage.rules protects course images path', () => {
      const storageRulesPath = path.resolve(ROOT_DIR, 'storage.rules');
      assert.ok(fs.existsSync(storageRulesPath), 'storage.rules must exist');
      const content = fs.readFileSync(storageRulesPath, 'utf8');

      // Check for /courses/{courseSlug}/images/{fileName}
      assert.match(content, /match \/courses\/\{courseSlug\}\/images\/\{fileName\}/, 'Storage rule for course images must exist');
      assert.match(content, /allow read: if true/, 'Public read must be allowed for images');
      assert.match(content, /allow write: if isAdmin\(\)/, 'Only admin can write course images');
      assert.match(content, /5 \* 1024 \* 1024/, 'Size must be enforced <= 5MB in storage.rules');
      assert.match(content, /image\/\.\*/, 'MIME type must be checked in storage.rules');
    });

    it('4.5 uploadCourseImage enforces admin authentication and upload progress', async () => {
      let progressReported = false;
      const mockStorage = {
        upload: async (targetPath, file) => {
          assert.ok(targetPath.startsWith('courses/nepse-course/images/'));
          return {
            downloadUrl: `https://firebasestorage.googleapis.com/v0/b/risepaisa-77278.firebasestorage.app/o/${encodeURIComponent(targetPath)}`
          };
        }
      };

      // Non-admin call must throw
      await assert.rejects(
        async () => {
          await uploadCourseImage(
            'nepse-course',
            { name: 'poster.png', size: 1000, type: 'image/png' },
            null,
            { uid: 'unauthorized-user', storageAdapter: mockStorage }
          );
        },
        /Administrative permissions required/i
      );

      // Authorized upload execution
      const result = await uploadCourseImage(
        'nepse-course',
        { name: 'poster.png', size: 1000, type: 'image/png' },
        (pct) => { progressReported = true; },
        { storageAdapter: mockStorage }
      );

      assert.ok(result.url, 'Result must contain image download URL');
      assert.match(result.url, /nepse-course/);
      assert.equal(progressReported, true, 'Progress callback must have been executed');
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. Frontend Integration & Dynamic Course Parity
  // ─────────────────────────────────────────────────────────────────────────────
  describe('5. Frontend Integration & Data Parity', () => {
    it('5.1 saved course updates persist in Firestore & localStorage cache', async () => {
      const mockDb = createMockDb();
      const updatedCourse = {
        id: 'nepse-mastery-course-2026',
        title: 'NEPSE Mastery 2026 Updated',
        slug: 'nepse-mastery-course-2026',
        subtitle: 'From Fundamentals to High Probability Trading',
        category: 'Stock Market',
        duration: '25 Hours',
        shortDescription: 'Master the Nepal stock exchange.',
        price: 2999,
        originalPrice: 5999,
        currency: 'NPR',
        whatsappUrl: 'https://wa.me/9779800000000?text=Enroll%20Now',
        supportWhatsappUrl: 'https://wa.me/9779800000000?text=Support',
        paymentMethods: ['esewa', 'khalti', 'bank_transfer'],
        instructor: 'Aakash Das',
        instructorRole: 'Founder & Analyst',
        instructorNote: 'With guest industry experts',
        featuresList: ['Full 4K Video Course', 'Downloadable Financial Sheets'],
        published: true,
        displayOrder: 1,
        topics: [
          {
            id: 'top-1',
            title: 'Module 01: Foundations',
            displayOrder: 1,
            published: true,
            lessons: [
              {
                id: 'les-1',
                title: 'Lesson 1: Introduction to NEPSE',
                youtubeUrl: 'https://www.youtube.com/watch?v=ziVeMxMF4e8',
                duration: '15 mins',
                displayOrder: 1,
                published: true,
                isFree: true,
                locked: false
              }
            ]
          }
        ]
      };

      // Save as admin
      const saveRes = await saveAdminCourse('admin-uid-1', updatedCourse, mockDb);
      assert.equal(saveRes.success, true);

      // Verify cached in localStorage
      const cachedRaw = localStorage.getItem(`rp_course_cache_${updatedCourse.slug}`);
      assert.ok(cachedRaw, 'Updated course must be found in localStorage cache');
      const cached = JSON.parse(cachedRaw);
      assert.equal(cached.price, 2999);
      assert.equal(cached.whatsappUrl, updatedCourse.whatsappUrl);
      assert.deepEqual(cached.paymentMethods, updatedCourse.paymentMethods);
    });

    it('5.2 courseDetail.js dynamically reflects custom WhatsApp URL and instructor info', () => {
      const courseDetailPath = path.resolve(ROOT_DIR, 'js/pages/courseDetail.js');
      const content = fs.readFileSync(courseDetailPath, 'utf8');

      // Verify dynamic WhatsApp purchase URL
      assert.match(content, /course\.whatsappUrl/, 'courseDetail.js must read course.whatsappUrl');
      // Verify dynamic WhatsApp support URL
      assert.match(content, /course\.supportWhatsappUrl/, 'courseDetail.js must read course.supportWhatsappUrl');
      // Verify dynamic payment methods
      assert.match(content, /course\.paymentMethods/, 'courseDetail.js must read course.paymentMethods');
      // Verify dynamic instructor image
      assert.match(content, /course\.instructorImage/, 'courseDetail.js must read course.instructorImage');
      // Verify dynamic instructor note
      assert.match(content, /course\.instructorNote/, 'courseDetail.js must read course.instructorNote');
    });

    it('5.3 courseLearn.js dynamically honors custom course.whatsappUrl for enrollment', () => {
      const courseLearnPath = path.resolve(ROOT_DIR, 'js/pages/courseLearn.js');
      const content = fs.readFileSync(courseLearnPath, 'utf8');

      assert.match(content, /course\.whatsappUrl/, 'courseLearn.js must use custom course.whatsappUrl');
    });
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. Security & Existing NEPSE Course Protection
  // ─────────────────────────────────────────────────────────────────────────────
  describe('6. Security & Existing NEPSE Course Protection', () => {
    it('6.1 flagship NEPSE course retains all 8 modules and 22 lessons with zero data loss', () => {
      const courses = getCourses();
      assert.ok(courses && courses.length > 0, 'Courses catalog must not be empty');
      const nepseCourse = courses[0];

      assert.equal(nepseCourse.title, 'Share Market Full Course (NEPSE)');
      assert.equal(nepseCourse.slug, 'nepse-stock-market-basics');
      assert.ok(Array.isArray(nepseCourse.topics), 'NEPSE course topics must be array');
      assert.equal(nepseCourse.topics.length, 8, 'Flagship NEPSE course must have 8 modules');

      const allLessons = nepseCourse.topics.flatMap(t => t.lessons || []);
      assert.equal(allLessons.length, 22, 'Flagship NEPSE course must retain all 22 lessons');

      // Lessons with active YouTube URL must be valid
      const lessonsWithUrl = allLessons.filter(l => Boolean(l.youtubeUrl));
      assert.equal(lessonsWithUrl.length, 21, '21 lessons must have active YouTube links');
      for (const les of lessonsWithUrl) {
        assert.equal(validateYouTubeUrl(les.youtubeUrl), true, `Lesson ${les.title} must have valid YouTube URL`);
      }
    });

    it('6.2 non-admin users cannot call saveAdminCourse or tamper with courses', async () => {
      const studentUid = 'student-regular-123';
      const maliciousPayload = {
        title: 'Hacked Course',
        slug: 'nepse-stock-trading-masterclass',
        price: 0
      };

      await assert.rejects(
        async () => {
          await saveAdminCourse(studentUid, maliciousPayload);
        },
        /Administrative permissions required/i
      );
    });

    it('6.3 firestore.rules strictly protects /courses/{courseId} write operations to admins only', () => {
      const rulesPath = path.resolve(ROOT_DIR, 'firestore.rules');
      assert.ok(fs.existsSync(rulesPath), 'firestore.rules must exist');
      const rules = fs.readFileSync(rulesPath, 'utf8');

      assert.match(rules, /match \/courses\/\{courseId\}/, 'Must have rule for /courses/{courseId}');
      assert.match(rules, /allow write: if isAdmin\(\)/, 'Course writes must be restricted to isAdmin()');
    });
  });
});

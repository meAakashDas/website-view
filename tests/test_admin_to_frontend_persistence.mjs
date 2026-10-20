// =============================================================================
// TEST SUITE: ADMIN-TO-FRONTEND COURSE DATA PERSISTENCE & PARITY
// Verifies Tests A through H as specified in the Critical Bug Fix requirements.
// Ensures Administrator Portal is the authoritative single source of truth across:
// - Course metadata (title, shortDescription, fullDescription, thumbnail, order, published)
// - Modules & lessons (titles, order, publication, duration, YouTube URLs, free preview)
// - Downloadable resources (titles, URLs, fileTypes)
// - Frontend consumers (Detail page, Learning player, Accordion, Catalog, Homepage)
// - Persistence across page reloads and cache clearing
// =============================================================================

import assert from 'node:assert';

// ── Mock Browser Environment (window & localStorage) ─────────────────────────
const storageStore = new Map();
const mockLocalStorage = {
  getItem: (k) => (storageStore.has(k) ? storageStore.get(k) : null),
  setItem: (k, v) => storageStore.set(k, String(v)),
  removeItem: (k) => storageStore.delete(k),
  clear: () => storageStore.clear()
};

globalThis.window = {
  localStorage: mockLocalStorage,
  location: { pathname: '/courses/nepse-test-course' }
};

import {
  extractYouTubeVideoId,
  validateYouTubeUrl,
  toCanonicalYouTubeUrl,
  toSafeYouTubeEmbedUrl,
  normalizeCourseData,
  saveAdminCourse,
  deleteAdminCourse,
  fetchCourseData,
  fetchPublishedCourses,
  resetCourseCache,
  validateCourse,
  validateLesson,
  validateResource
} from '../js/firebase/courses.js';

import {
  getAllCourses,
  getCourses,
  getCourseBySlug,
  updateCourseInCache,
  removeCourseFromCache
} from '../js/data/courses.js';

import {
  renderCourseLearnPage,
  getPublishedLessonsSequence,
  renderModulesAccordion
} from '../js/pages/courseLearn.js';

import {
  renderCurriculumAccordion,
  renderCourseDetailPage
} from '../js/pages/courseDetail.js';

import { renderCourseCard } from '../js/components.js';

let passed = 0;
let failed = 0;

function it(desc, fn) {
  try {
    fn();
    console.log(`  ✓ ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${desc}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

async function itAsync(desc, fn) {
  try {
    await fn();
    console.log(`  ✓ ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${desc}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

/**
 * In-memory Mock Firestore Database with transaction & collections support
 */
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
      for (const [path, data] of store.entries()) {
        if (path.startsWith(colRef.path + '/') && path.split('/').length === colRef.path.split('/').length + 1) {
          docs.push({
            id: path.split('/').pop(),
            data: () => JSON.parse(JSON.stringify(data))
          });
        }
      }
      return {
        forEach: (cb) => docs.forEach(cb),
        docs
      };
    },
    query: (colRef, ...constraints) => {
      return { ...colRef, constraints };
    },
    where: (field, op, val) => ({ field, op, val }),
    serverTimestamp: () => new Date().toISOString()
  };

  // Seed authorized admin user
  store.set('admins/admin-uid-1', {
    uid: 'admin-uid-1',
    email: 'admin@risepaisa.com',
    role: 'admin'
  });

  return { db: {}, sdk, store };
}

console.log('========================================================');
console.log('TEST SUITE: ADMIN-TO-FRONTEND PERSISTENCE & DATA PARITY');
console.log('========================================================\n');

// ── Test A: Course Metadata ──────────────────────────────────────────────────
console.log('--- Test A — Course Metadata Parity ---');

await itAsync('A1: Saves updated course metadata and reflects on frontend synchronously & asynchronously', async () => {
  resetCourseCache();
  mockLocalStorage.clear();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  const coursePayload = {
    id: 'test-course-a',
    slug: 'test-course-a',
    title: 'Advanced Technical Analysis Masterclass',
    shortDescription: 'Master candlestick patterns and indicators on NEPSE.',
    description: 'Complete in-depth masterclass for active NEPSE traders.',
    fullDescription: 'Complete in-depth masterclass for active NEPSE traders.',
    thumbnail: 'https://images.unsplash.com/photo-test-thumb.jpg',
    displayOrder: 2,
    published: true,
    price: 3500,
    currency: 'NPR',
    topics: [
      {
        id: 'topic-1',
        title: 'Module 1: Chart Mastery',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-1',
            title: 'Candlestick Foundations',
            displayOrder: 1,
            published: true,
            isFree: true,
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '22:15',
            shortDescription: 'Understanding green and red candles.'
          }
        ]
      }
    ]
  };

  const saveRes = await saveAdminCourse(adminUid, coursePayload, mockDb);
  assert.strictEqual(saveRes.success, true);
  assert.strictEqual(saveRes.course.title, 'Advanced Technical Analysis Masterclass');

  // Verify persistence in localStorage
  const cachedJson = mockLocalStorage.getItem('rp_course_cache_test-course-a');
  assert.ok(cachedJson, 'Course must be cached in localStorage for zero-latency hydration');
  const parsedCache = JSON.parse(cachedJson);
  assert.strictEqual(parsedCache.title, 'Advanced Technical Analysis Masterclass');
  assert.strictEqual(parsedCache.thumbnail, 'https://images.unsplash.com/photo-test-thumb.jpg');

  // Verify synchronous reading via getCourseBySlug
  const syncCourse = getCourseBySlug('test-course-a');
  assert.ok(syncCourse, 'getCourseBySlug must find saved course in cache');
  assert.strictEqual(syncCourse.title, 'Advanced Technical Analysis Masterclass');
  assert.strictEqual(syncCourse.shortDescription, 'Master candlestick patterns and indicators on NEPSE.');
  assert.strictEqual(syncCourse.fullDescription, 'Complete in-depth masterclass for active NEPSE traders.');

  // Verify rendering on course card
  const cardHtml = renderCourseCard(syncCourse);
  assert.ok(cardHtml.includes('Advanced Technical Analysis Masterclass'));
  assert.ok(cardHtml.includes('https://images.unsplash.com/photo-test-thumb.jpg'));
  assert.ok(cardHtml.includes('3,500') && cardHtml.includes('NPR'));

  // Verify rendering on detail page
  const detailHtml = renderCourseDetailPage('test-course-a');
  assert.ok(detailHtml.includes('Advanced Technical Analysis Masterclass'));
  assert.ok(detailHtml.includes('Master candlestick patterns and indicators on NEPSE.'));

  // Verify rendering on learn page
  const learnHtml = renderCourseLearnPage('test-course-a');
  assert.ok(learnHtml.includes('Advanced Technical Analysis Masterclass'));
});

// ── Test B: Lesson Information ───────────────────────────────────────────────
console.log('\n--- Test B — Lesson Information Parity ---');

await itAsync('B1: Updates lesson title, description, and duration; verified on frontend', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  const coursePayload = {
    id: 'test-course-b',
    slug: 'test-course-b',
    title: 'Fundamental Analysis Course',
    shortDescription: 'Learn balance sheets and quarterly reports.',
    description: 'Full course syllabus',
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-b1',
        title: 'Module 1: Balance Sheets',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-b1',
            title: 'Quarterly Report Deep-Dive',
            shortDescription: 'How to read Fourth Quarter (Q4) commercial bank reports.',
            duration: '34:45',
            youtubeUrl: 'https://www.youtube.com/watch?v=ziVeMxMF4e8',
            displayOrder: 1,
            published: true,
            isFree: true,
            resources: []
          }
        ]
      }
    ]
  };

  await saveAdminCourse(adminUid, coursePayload, mockDb);

  // Fetch normalized course data
  const fetched = await fetchCourseData('test-course-b', mockDb);
  assert.ok(fetched);
  const lesson = fetched.topics[0].lessons[0];
  assert.strictEqual(lesson.title, 'Quarterly Report Deep-Dive');
  assert.strictEqual(lesson.shortDescription, 'How to read Fourth Quarter (Q4) commercial bank reports.');
  assert.strictEqual(lesson.duration, '34:45');

  // Verify detail accordion renders the updated title and duration
  const accordionHtml = renderCurriculumAccordion(fetched.curriculum, fetched.slug);
  assert.ok(accordionHtml.includes('Quarterly Report Deep-Dive'));
  assert.ok(accordionHtml.includes('34:45'));

  // Verify learn sidebar accordion renders updated title and duration
  const sidebarHtml = renderModulesAccordion(fetched.topics, 'lesson-b1', false);
  assert.ok(sidebarHtml.includes('Quarterly Report Deep-Dive'));
  assert.ok(sidebarHtml.includes('34:45'));
});

// ── Test C: YouTube URL Handling & Player Integration ────────────────────────
console.log('\n--- Test C — YouTube URL Normalization & Video Player Rendering ---');

await itAsync('C1: Validates, canonicalizes, and embeds updated YouTube URL in player', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  const rawUrl = 'https://youtu.be/dQw4w9WgXcQ?si=test12345';
  const canonical = toCanonicalYouTubeUrl(rawUrl);
  assert.strictEqual(canonical, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  const coursePayload = {
    id: 'test-course-c',
    slug: 'test-course-c',
    title: 'Video Testing Course',
    shortDescription: 'Testing video embed',
    description: 'Testing video embed',
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-c1',
        title: 'Module 1: Video',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-c1',
            title: 'Intro Video Lesson',
            shortDescription: 'Intro lesson with safe YouTube embed',
            duration: '10:00',
            youtubeUrl: rawUrl,
            displayOrder: 1,
            published: true,
            isFree: true,
            resources: []
          }
        ]
      }
    ]
  };

  const saveRes = await saveAdminCourse(adminUid, coursePayload, mockDb);
  assert.strictEqual(saveRes.success, true);

  // Authoritative URL in course document must be canonical
  const fetched = await fetchCourseData('test-course-c', mockDb);
  assert.strictEqual(fetched.topics[0].lessons[0].youtubeUrl, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  // Verify previewVideoUrl was synced from Lesson 1
  assert.strictEqual(fetched.previewVideoUrl, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  // Verify safe privacy-enhanced embed URL
  const embedUrl = toSafeYouTubeEmbedUrl(fetched.topics[0].lessons[0].youtubeUrl);
  assert.strictEqual(embedUrl, 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1');

  // Verify learning interface renders the video iframe with this safe embed URL
  const learnHtml = renderCourseLearnPage('test-course-c', 'lesson-c1');
  assert.ok(learnHtml.includes('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&amp;modestbranding=1') || learnHtml.includes('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1'));
});

// ── Test D: Module & Lesson Ordering ─────────────────────────────────────────
console.log('\n--- Test D — Module & Lesson Ordering Consistency ---');

await itAsync('D1: Reorders modules and lessons; verifies sequence across views', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  // Topic 2 has displayOrder 1; Topic 1 has displayOrder 2
  const coursePayload = {
    id: 'test-course-d',
    slug: 'test-course-d',
    title: 'Order Testing Course',
    shortDescription: 'Testing display order',
    description: 'Testing display order',
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-d2',
        title: 'Module 2: Realized First',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-d2-1',
            title: 'First Lesson in Sequence',
            displayOrder: 1,
            published: true,
            isFree: true,
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          }
        ]
      },
      {
        id: 'topic-d1',
        title: 'Module 1: Realized Second',
        displayOrder: 2,
        published: true,
        lessons: [
          {
            id: 'lesson-d1-1',
            title: 'Second Lesson in Sequence',
            displayOrder: 1,
            published: true,
            isFree: false,
            youtubeUrl: 'https://www.youtube.com/watch?v=ziVeMxMF4e8'
          }
        ]
      }
    ]
  };

  await saveAdminCourse(adminUid, coursePayload, mockDb);
  const fetched = await fetchCourseData('test-course-d', mockDb);

  const seq = getPublishedLessonsSequence(fetched);
  assert.strictEqual(seq.length, 2);
  assert.strictEqual(seq[0].id, 'lesson-d2-1');
  assert.strictEqual(seq[0].title, 'First Lesson in Sequence');
  assert.strictEqual(seq[1].id, 'lesson-d1-1');
  assert.strictEqual(seq[1].title, 'Second Lesson in Sequence');
});

// ── Test E: Publication Settings ─────────────────────────────────────────────
console.log('\n--- Test E — Publication Settings & Content Visibility Rules ---');

await itAsync('E1: Unpublished courses are excluded from public catalog and getCourses', async () => {
  resetCourseCache();
  mockLocalStorage.clear();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  const unpublishedCourse = {
    id: 'test-course-unpublished',
    slug: 'test-course-unpublished',
    title: 'Secret Draft Course',
    shortDescription: 'Not yet ready for public release',
    description: 'Internal draft',
    published: false,
    displayOrder: 99,
    topics: []
  };

  await saveAdminCourse(adminUid, unpublishedCourse, mockDb);

  // 1. fetchPublishedCourses must omit it
  const publishedList = await fetchPublishedCourses(mockDb);
  assert.strictEqual(publishedList.some(c => c.slug === 'test-course-unpublished'), false);

  // 2. getCourses() public catalog helper must omit it
  const publicList = getCourses();
  assert.strictEqual(publicList.some(c => c.slug === 'test-course-unpublished'), false);

  // 3. getAllCourses() includes it for admin visibility
  const allList = getAllCourses();
  assert.strictEqual(allList.some(c => c.slug === 'test-course-unpublished'), true);
});

await itAsync('E2: Unpublished modules and lessons are hidden from students in learning player sequence', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  const coursePayload = {
    id: 'test-course-e2',
    slug: 'test-course-e2',
    title: 'Partial Publication Course',
    shortDescription: 'Some content is hidden',
    description: 'Test course',
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-e-pub',
        title: 'Public Module',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-e-visible',
            title: 'Visible Lesson',
            displayOrder: 1,
            published: true,
            isFree: true,
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          },
          {
            id: 'lesson-e-hidden',
            title: 'Hidden Draft Lesson',
            displayOrder: 2,
            published: false,
            isFree: true,
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          }
        ]
      },
      {
        id: 'topic-e-draft',
        title: 'Draft Module (Hidden)',
        displayOrder: 2,
        published: false,
        lessons: [
          {
            id: 'lesson-e-draft-1',
            title: 'Inside Draft Module',
            displayOrder: 1,
            published: true,
            isFree: true,
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          }
        ]
      }
    ]
  };

  await saveAdminCourse(adminUid, coursePayload, mockDb);
  const fetched = await fetchCourseData('test-course-e2', mockDb);

  const seq = getPublishedLessonsSequence(fetched);
  assert.strictEqual(seq.length, 1);
  assert.strictEqual(seq[0].id, 'lesson-e-visible');

  // Verify sidebar accordion excludes hidden lesson
  const sidebarHtml = renderModulesAccordion(fetched.topics, 'lesson-e-visible', false);
  assert.ok(sidebarHtml.includes('Visible Lesson'));
  assert.ok(!sidebarHtml.includes('Hidden Draft Lesson'));
  assert.ok(!sidebarHtml.includes('Draft Module (Hidden)'));
});

// ── Test F: Downloadable Resources ───────────────────────────────────────────
console.log('\n--- Test F — Downloadable Resources Parity & Access ---');

await itAsync('F1: Adds downloadable resources; renders valid links on learning interface', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  const coursePayload = {
    id: 'test-course-f',
    slug: 'test-course-f',
    title: 'Resource Testing Course',
    shortDescription: 'Testing downloadable files',
    description: 'Testing downloadable files',
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-f1',
        title: 'Module 1: Templates',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-f1',
            title: 'Valuation Worksheet Lesson',
            displayOrder: 1,
            published: true,
            isFree: true,
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            resources: [
              {
                title: 'NEPSE Commercial Bank Valuation Model 2026',
                url: '/assets/downloads/bank-valuation-model.xlsx',
                fileType: 'excel'
              },
              {
                title: 'Investment Checklist PDF',
                url: 'https://example.com/checklist.pdf',
                fileType: 'pdf'
              }
            ]
          }
        ]
      }
    ]
  };

  const saveRes = await saveAdminCourse(adminUid, coursePayload, mockDb);
  assert.strictEqual(saveRes.success, true);

  const fetched = await fetchCourseData('test-course-f', mockDb);
  const resList = fetched.topics[0].lessons[0].resources;
  assert.strictEqual(resList.length, 2);
  assert.strictEqual(resList[0].title, 'NEPSE Commercial Bank Valuation Model 2026');
  assert.strictEqual(resList[0].fileType, 'excel');

  // Verify learning interface renders resources
  const learnHtml = renderCourseLearnPage('test-course-f', 'lesson-f1');
  assert.ok(learnHtml.includes('NEPSE Commercial Bank Valuation Model 2026'));
  assert.ok(learnHtml.includes('/assets/downloads/bank-valuation-model.xlsx'));
  assert.ok(learnHtml.includes('Investment Checklist PDF'));
  assert.ok(learnHtml.includes('https://example.com/checklist.pdf'));
});

// ── Test G: Persistence Across Simulated Restart & Reload ────────────────────
console.log('\n--- Test G — Persistence Across Fresh Session & Cache Eviction ---');

await itAsync('G1: Saved edits survive complete in-memory cache eviction and persist via localStorage & db', async () => {
  resetCourseCache();
  mockLocalStorage.clear();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  const coursePayload = {
    id: 'test-course-persist',
    slug: 'test-course-persist',
    title: 'Persistent Course V1',
    shortDescription: 'Will survive reload',
    description: 'Persistence test',
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-p1',
        title: 'Module 1',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-p1',
            title: 'Initial Title',
            displayOrder: 1,
            published: true,
            isFree: true,
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          }
        ]
      }
    ]
  };

  await saveAdminCourse(adminUid, coursePayload, mockDb);

  // Update title to V2
  coursePayload.title = 'Persistent Course V2 Updated';
  coursePayload.topics[0].lessons[0].title = 'Updated Title V2';
  await saveAdminCourse(adminUid, coursePayload, mockDb);

  // 1. Completely reset in-memory cache
  resetCourseCache();

  // 2. Simulate instantaneous first-paint reload using localStorage
  const fastCourse = getCourseBySlug('test-course-persist');
  assert.ok(fastCourse, 'Fast path must resolve course from localStorage on fresh reload');
  assert.strictEqual(fastCourse.title, 'Persistent Course V2 Updated');
  assert.strictEqual(fastCourse.topics[0].lessons[0].title, 'Updated Title V2');

  // 3. Simulate asynchronous database fetch (e.g. backend / Firestore revalidation)
  const dbCourse = await fetchCourseData('test-course-persist', mockDb);
  assert.ok(dbCourse);
  assert.strictEqual(dbCourse.title, 'Persistent Course V2 Updated');
  assert.strictEqual(dbCourse.topics[0].lessons[0].title, 'Updated Title V2');
});

// ── Test H: Regression & Security Invariants ─────────────────────────────────
console.log('\n--- Test H — Regression, Slug Aliasing & Access Security ---');

it('H1: Flagship NEPSE stock market course resolves reliably with valid defaults', () => {
  const nepse = getCourseBySlug('nepse-stock-market-basics');
  assert.ok(nepse);
  assert.strictEqual(nepse.slug, 'nepse-stock-market-basics');
  assert.ok(nepse.topics.length >= 8);
  assert.ok(nepse.curriculum.length >= 8);
});

it('H2: Course lookup supports numeric ID and canonical slug seamlessly', () => {
  const bySlug = getCourseBySlug('nepse-stock-market-basics');
  const byId = getCourseBySlug('1');
  assert.ok(bySlug);
  assert.ok(byId);
  assert.strictEqual(bySlug.slug, byId.slug);
});

await itAsync('H3: Non-admin users are strictly rejected from saving courses with zero data loss', async () => {
  const mockDb = createMockDb();
  let threw = false;
  try {
    await saveAdminCourse('intruder-uid', {
      id: 'hack-course',
      slug: 'hack-course',
      title: 'Hacked',
      shortDescription: 'Hacked',
      published: true,
      displayOrder: 1,
      topics: []
    }, mockDb);
  } catch (err) {
    threw = true;
    assert.ok(err.message.includes('Access Denied'));
  }
  assert.strictEqual(threw, true);
});

await itAsync('H4: Course deletion properly cleans up in-memory cache and localStorage index', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const adminUid = 'admin-uid-1';

  const coursePayload = {
    id: 'to-delete',
    slug: 'to-delete',
    title: 'To Be Deleted',
    shortDescription: 'Temporary',
    published: true,
    displayOrder: 1,
    topics: []
  };

  await saveAdminCourse(adminUid, coursePayload, mockDb);
  assert.ok(getCourseBySlug('to-delete'));

  await deleteAdminCourse(adminUid, 'to-delete', mockDb);
  resetCourseCache();
  assert.strictEqual(getCourseBySlug('to-delete'), null);
});

console.log('\n========================================================');
console.log(`TOTAL ADMIN-TO-FRONTEND INTEGRATION TESTS: ${passed + failed}`);
console.log(`PASSED: ${passed}`);
console.log(`FAILED: ${failed}`);
console.log('========================================================\n');

if (failed > 0) {
  process.exit(1);
}

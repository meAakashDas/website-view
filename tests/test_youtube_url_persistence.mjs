// =============================================================================
// TEST SUITE: YOUTUBE URL PERSISTENCE & ADMIN DATA INTEGRITY
// Comprehensive automated verification for YouTube URL persistence,
// normalizer preservation, database write/read cycle, and security gates.
// =============================================================================

import assert from 'node:assert';
import {
  extractYouTubeVideoId,
  validateYouTubeUrl,
  toCanonicalYouTubeUrl,
  toSafeYouTubeEmbedUrl,
  normalizeCourseData,
  saveAdminCourse,
  fetchCourseData,
  fetchAdminCourses,
  resetCourseCache,
  validateLesson,
  validateCourse
} from '../js/firebase/courses.js';

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

console.log('========================================================');
console.log('TEST SUITE: YOUTUBE URL PERSISTENCE & DATA INTEGRITY');
console.log('========================================================\n');

// ── 1. YouTube URL Parsing, Normalization & Canonicalization ───────────────
console.log('--- 1. Testing YouTube URL Parsing & Canonicalization ---');

it('extracts video ID from standard watch URL', () => {
  const id = extractYouTubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  assert.strictEqual(id, 'dQw4w9WgXcQ');
});

it('extracts video ID from shortened youtu.be URL', () => {
  const id = extractYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ');
  assert.strictEqual(id, 'dQw4w9WgXcQ');
});

it('extracts video ID from embed URL', () => {
  const id = extractYouTubeVideoId('https://www.youtube.com/embed/dQw4w9WgXcQ');
  assert.strictEqual(id, 'dQw4w9WgXcQ');
});

it('extracts video ID from youtube-nocookie embed URL', () => {
  const id = extractYouTubeVideoId('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ');
  assert.strictEqual(id, 'dQw4w9WgXcQ');
});

it('extracts video ID from YouTube Shorts URL', () => {
  const id = extractYouTubeVideoId('https://www.youtube.com/shorts/dQw4w9WgXcQ');
  assert.strictEqual(id, 'dQw4w9WgXcQ');
});

it('extracts video ID from YouTube Live stream URL', () => {
  const id = extractYouTubeVideoId('https://www.youtube.com/live/dQw4w9WgXcQ');
  assert.strictEqual(id, 'dQw4w9WgXcQ');
});

it('extracts video ID from protocol-less input (e.g. pasted without https://)', () => {
  const id1 = extractYouTubeVideoId('youtube.com/watch?v=dQw4w9WgXcQ');
  const id2 = extractYouTubeVideoId('www.youtube.com/watch?v=dQw4w9WgXcQ');
  const id3 = extractYouTubeVideoId('youtu.be/dQw4w9WgXcQ');
  assert.strictEqual(id1, 'dQw4w9WgXcQ');
  assert.strictEqual(id2, 'dQw4w9WgXcQ');
  assert.strictEqual(id3, 'dQw4w9WgXcQ');
});

it('handles query parameters and tracking tags cleanly (?si=, &t=, &feature=)', () => {
  const id1 = extractYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ?si=abcdef123456');
  const id2 = extractYouTubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=120s&feature=share');
  assert.strictEqual(id1, 'dQw4w9WgXcQ');
  assert.strictEqual(id2, 'dQw4w9WgXcQ');
});

it('converts to canonical URL: https://www.youtube.com/watch?v=VIDEO_ID', () => {
  const canonical = toCanonicalYouTubeUrl('https://youtu.be/dQw4w9WgXcQ?si=xyz');
  assert.strictEqual(canonical, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

it('converts to privacy-sanitized embed URL', () => {
  const embed = toSafeYouTubeEmbedUrl('https://youtu.be/dQw4w9WgXcQ');
  assert.strictEqual(embed, 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1');
});

it('strictly rejects non-YouTube URLs and dangerous schemes', () => {
  assert.strictEqual(validateYouTubeUrl('https://vimeo.com/123456789'), false);
  assert.strictEqual(validateYouTubeUrl('https://malicious-site.com/watch?v=dQw4w9WgXcQ'), false);
  assert.strictEqual(validateYouTubeUrl('javascript:alert(1)'), false);
  assert.strictEqual(validateYouTubeUrl('https://www.youtube.com/watch?v=invalid_short_id'), false);
  assert.strictEqual(validateYouTubeUrl('https://www.youtube.com/channel/UC12345'), false);
});

// ── 2. Testing Course Normalizer Preservation ──────────────────────────────
console.log('\n--- 2. Testing Course Normalizer Data Preservation ---');

it('preserves full topics array and lesson fields from Firestore documents', () => {
  const firestoreDoc = {
    id: 'test-course',
    slug: 'test-course',
    title: 'Test Financial Course',
    shortDescription: 'Short description',
    description: 'Full course description',
    price: 1999,
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-1',
        title: 'Module 1: Foundations',
        shortDescription: 'Basics of market',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-1-1',
            topicId: 'topic-1',
            title: 'Lesson 1.1: Welcome & Setup',
            shortDescription: 'Overview of syllabus',
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            duration: '14:20',
            displayOrder: 1,
            published: true,
            isFree: true,
            resources: [
              {
                title: 'Checklist',
                url: '/assets/downloads/nepse-first-time-investor-checklist.html',
                fileType: 'checklist'
              }
            ]
          }
        ]
      }
    ]
  };

  const normalized = normalizeCourseData(firestoreDoc);
  assert.strictEqual(normalized.topics.length, 1);
  assert.strictEqual(normalized.topics[0].lessons.length, 1);
  const l1 = normalized.topics[0].lessons[0];
  assert.strictEqual(l1.id, 'lesson-1-1');
  assert.strictEqual(l1.title, 'Lesson 1.1: Welcome & Setup');
  assert.strictEqual(l1.youtubeUrl, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  assert.strictEqual(l1.duration, '14:20');
  assert.strictEqual(l1.isFree, true);
  assert.strictEqual(l1.published, true);
  assert.strictEqual(l1.resources.length, 1);
  assert.strictEqual(normalized.previewVideoUrl, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

it('normalizes legacy curriculum catalog format cleanly', () => {
  const legacyDoc = {
    id: 1,
    slug: 'nepse-stock-market-basics',
    title: 'Share Market Full Course (NEPSE)',
    previewVideoUrl: 'https://www.youtube.com/watch?v=ziVeMxMF4e8',
    curriculum: [
      {
        moduleNumber: 1,
        title: 'Module 1: Getting Started',
        lessons: [
          {
            title: 'Demat & MeroShare Setup',
            duration: '18:40',
            youtubeUrl: 'https://www.youtube.com/watch?v=ziVeMxMF4e8',
            isFree: true
          }
        ]
      }
    ]
  };

  const normalized = normalizeCourseData(legacyDoc);
  assert.strictEqual(normalized.topics.length, 1);
  assert.strictEqual(normalized.topics[0].lessons.length, 1);
  assert.strictEqual(normalized.topics[0].lessons[0].youtubeUrl, 'https://www.youtube.com/watch?v=ziVeMxMF4e8');
});

// ── 3. Database Write, Read-back, and Persistence Cycle ────────────────────
console.log('\n--- 3. Testing Database Save & Read Persistence Cycle ---');

// In-Memory Firestore Mock Adapter for deterministic automated testing
function createMockDb() {
  const store = new Map(); // path -> data
  const sdk = {
    doc: (db, ...pathSegments) => {
      const fullPath = pathSegments.join('/');
      return { path: fullPath, type: 'doc' };
    },
    collection: (db, ...pathSegments) => {
      const fullPath = pathSegments.join('/');
      return { path: fullPath, type: 'col' };
    },
    getDoc: async (docRef) => {
      const data = store.get(docRef.path);
      return {
        exists: () => data !== undefined,
        data: () => (data ? JSON.parse(JSON.stringify(data)) : undefined)
      };
    },
    setDoc: async (docRef, data, options = {}) => {
      if (options.merge && store.has(docRef.path)) {
        store.set(docRef.path, { ...store.get(docRef.path), ...data });
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
          const docId = path.split('/').pop();
          docs.push({
            id: docId,
            data: () => JSON.parse(JSON.stringify(data))
          });
        }
      }
      return {
        forEach: (cb) => docs.forEach(cb),
        docs
      };
    },
    serverTimestamp: () => new Date().toISOString()
  };

  // Seed admin user in authoritative admins collection
  store.set('admins/admin-test-uid', {
    uid: 'admin-test-uid',
    email: 'admin@risepaisa.com',
    role: 'admin'
  });

  // Seed student user
  store.set('users/student-test-uid', {
    uid: 'student-test-uid',
    email: 'student@example.com',
    role: 'student'
  });

  return { db: {}, sdk, store };
}

await itAsync('Step 1-6: Saves YouTube URL and reads it back from authoritative source', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const adminUid = 'admin-test-uid';

  const testCourse = {
    id: 'nepse-basics-test',
    slug: 'nepse-basics-test',
    title: 'NEPSE Basics Test Course',
    shortDescription: 'Testing URL persistence',
    description: 'Comprehensive test course for URL integrity',
    price: 1999,
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-1',
        title: 'Module 1: Introduction',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-1',
            topicId: 'topic-1',
            title: 'Lesson 1: Market Intro',
            duration: '15:00',
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

  // 1. Initial save
  const res1 = await saveAdminCourse(adminUid, testCourse, mockDb);
  assert.strictEqual(res1.success, true);

  // 2. Clear cache to simulate fresh browser session/reload
  resetCourseCache();

  // 3. Read back from database
  const read1 = await fetchCourseData('nepse-basics-test', mockDb);
  assert.strictEqual(read1.topics[0].lessons[0].youtubeUrl, 'https://www.youtube.com/watch?v=ziVeMxMF4e8');

  // 4. Update URL to a different valid YouTube URL (e.g. Rick Astley)
  const newUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  read1.topics[0].lessons[0].youtubeUrl = newUrl;

  const res2 = await saveAdminCourse(adminUid, read1, mockDb);
  assert.strictEqual(res2.success, true);
  assert.strictEqual(res2.course.topics[0].lessons[0].youtubeUrl, newUrl);

  // 5. Clear cache again and perform fresh read
  resetCourseCache();
  const read2 = await fetchCourseData('nepse-basics-test', mockDb);
  assert.strictEqual(read2.topics[0].lessons[0].youtubeUrl, newUrl);
  assert.strictEqual(read2.previewVideoUrl, newUrl);

  // 6. Update to a third valid URL in shortened format (youtu.be)
  const thirdUrl = 'https://youtu.be/jNQXAC9IVRw';
  read2.topics[0].lessons[0].youtubeUrl = thirdUrl;

  const res3 = await saveAdminCourse(adminUid, read2, mockDb);
  assert.strictEqual(res3.success, true);
  // Canonicalized into standard watch format
  assert.strictEqual(res3.course.topics[0].lessons[0].youtubeUrl, 'https://www.youtube.com/watch?v=jNQXAC9IVRw');

  // 7. Verify fresh read returns canonicalized third URL
  resetCourseCache();
  const read3 = await fetchCourseData('nepse-basics-test', mockDb);
  assert.strictEqual(read3.topics[0].lessons[0].youtubeUrl, 'https://www.youtube.com/watch?v=jNQXAC9IVRw');
});

await itAsync('Step 11: Rejects invalid YouTube URL without corrupting previously saved data', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const adminUid = 'admin-test-uid';

  const validCourse = {
    id: 'valid-course',
    slug: 'valid-course',
    title: 'Valid Course',
    shortDescription: 'Valid desc',
    price: 999,
    published: true,
    displayOrder: 1,
    topics: [
      {
        id: 'topic-1',
        title: 'Module 1',
        displayOrder: 1,
        published: true,
        lessons: [
          {
            id: 'lesson-1',
            title: 'Lesson 1',
            displayOrder: 1,
            published: true,
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          }
        ]
      }
    ]
  };

  await saveAdminCourse(adminUid, validCourse, mockDb);

  // Attempt invalid URL update
  validCourse.topics[0].lessons[0].youtubeUrl = 'https://malicious-site.com/video';

  let threw = false;
  try {
    await saveAdminCourse(adminUid, validCourse, mockDb);
  } catch (err) {
    threw = true;
    assert(err.message.includes('Invalid YouTube URL') || err.message.includes('Invalid lesson'));
  }
  assert.strictEqual(threw, true);

  // Confirm previously saved valid URL is still intact in the database
  resetCourseCache();
  const untouched = await fetchCourseData('valid-course', mockDb);
  assert.strictEqual(untouched.topics[0].lessons[0].youtubeUrl, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});

await itAsync('Step 12: Blocks unauthorized non-admin users from saving course data', async () => {
  resetCourseCache();
  const mockDb = createMockDb();
  const studentUid = 'student-test-uid';

  const testCourse = {
    id: 'hacked-course',
    slug: 'hacked-course',
    title: 'Hacked Course',
    shortDescription: 'Should fail',
    topics: []
  };

  let threw = false;
  try {
    await saveAdminCourse(studentUid, testCourse, mockDb);
  } catch (err) {
    threw = true;
    assert(err.message.includes('Access Denied'));
  }
  assert.strictEqual(threw, true);
});

await itAsync('Step 13: Handles database write failure without false success', async () => {
  resetCourseCache();
  const failingDb = createMockDb();
  // Simulate database write failure
  failingDb.sdk.setDoc = async () => {
    throw new Error('Firestore network error: quota exceeded');
  };

  const testCourse = {
    id: 'failing-course',
    slug: 'failing-course',
    title: 'Failing Course',
    shortDescription: 'Testing failure handling',
    published: true,
    displayOrder: 1,
    topics: []
  };

  let threw = false;
  try {
    await saveAdminCourse('admin-test-uid', testCourse, failingDb);
  } catch (err) {
    threw = true;
    assert(err.message.includes('quota exceeded'));
  }
  assert.strictEqual(threw, true);
});

console.log('\n========================================================');
console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED (TOTAL: ${passed + failed})`);
console.log('========================================================\n');

if (failed > 0) {
  process.exit(1);
}

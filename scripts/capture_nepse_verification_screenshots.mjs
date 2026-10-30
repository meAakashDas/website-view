import { chromium } from 'playwright';
import path from 'path';

const ARTIFACT_DIR = '/Users/aakashdas/.gemini/antigravity-ide/brain/671c8bde-4729-43b7-8a39-2c0889f8c7d8';
const BASE_URL = 'http://localhost:8000';
const NEPSE_LEARN_URL = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';

async function capture() {
  const browser = await chromium.launch({ headless: true });

  // 1. Guest My Courses
  const guestCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const guestPage = await guestCtx.newPage();
  await guestPage.goto(`${BASE_URL}/my-courses`, { waitUntil: 'domcontentloaded' });
  await guestPage.waitForSelector('.mc-course-card');
  await guestPage.screenshot({ path: path.join(ARTIFACT_DIR, 'my_courses_guest.png'), fullPage: false });
  console.log('Captured my_courses_guest.png');

  // 2. Lesson 1 Free Preview (Guest/Public)
  await guestPage.click('.mc-course-card');
  await guestPage.waitForURL(`**${NEPSE_LEARN_URL}`);
  await guestPage.waitForSelector('#cl-video-iframe');
  await guestPage.screenshot({ path: path.join(ARTIFACT_DIR, 'course_learn_lesson1_preview.png'), fullPage: false });
  console.log('Captured course_learn_lesson1_preview.png');

  // 3. Lesson 2 Locked Screen
  await guestPage.click('.cl-lesson-btn[data-lesson-id="lesson-2"]');
  await guestPage.waitForSelector('#cl-locked-screen');
  await guestPage.screenshot({ path: path.join(ARTIFACT_DIR, 'course_learn_lesson2_locked.png'), fullPage: false });
  console.log('Captured course_learn_lesson2_locked.png');
  await guestCtx.close();

  // 4. Enrolled Student My Courses
  const enrolledCtx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const enrolledPage = await enrolledCtx.newPage();
  await enrolledPage.goto(`${BASE_URL}/my-courses`, { waitUntil: 'domcontentloaded' });
  await enrolledPage.evaluate(async () => {
    const auth = await import('/js/firebase/auth.js');
    const courses = await import('/js/firebase/courses.js');
    const uid = 'test-enrolled-student-uid';
    courses.setEnrollmentCacheForTesting(uid, '1', {
      enrolled: true,
      hasAccess: true,
      status: 'active',
      data: { status: 'active', enrolledAt: new Date().toISOString() }
    });
    courses.setEnrollmentCacheForTesting(uid, 'nepse-stock-market-basics', {
      enrolled: true,
      hasAccess: true,
      status: 'active',
      data: { status: 'active', enrolledAt: new Date().toISOString() }
    });
    auth.setCurrentUserForTesting({ uid, email: 'student@example.com', displayName: 'Aakash Student' });
  });
  await enrolledPage.waitForSelector('.mc-continue-btn', { timeout: 5000 });
  await enrolledPage.screenshot({ path: path.join(ARTIFACT_DIR, 'my_courses_enrolled.png'), fullPage: false });
  console.log('Captured my_courses_enrolled.png');

  // 5. Enrolled Student Unlocked Lesson 2
  await enrolledPage.click('.mc-course-card');
  await enrolledPage.waitForURL(`**${NEPSE_LEARN_URL}`);
  await enrolledPage.evaluate(async () => {
    const auth = await import('/js/firebase/auth.js');
    const courses = await import('/js/firebase/courses.js');
    const uid = 'test-enrolled-student-uid';
    courses.setEnrollmentCacheForTesting(uid, '1', {
      enrolled: true,
      hasAccess: true,
      status: 'active',
      data: { status: 'active', enrolledAt: new Date().toISOString() }
    });
    courses.setEnrollmentCacheForTesting(uid, 'nepse-stock-market-basics', {
      enrolled: true,
      hasAccess: true,
      status: 'active',
      data: { status: 'active', enrolledAt: new Date().toISOString() }
    });
    auth.setCurrentUserForTesting({ uid, email: 'student@example.com', displayName: 'Aakash Student' });
  });
  await enrolledPage.waitForSelector('#cl-video-iframe');
  await enrolledPage.click('.cl-lesson-btn[data-lesson-id="lesson-2"]');
  await enrolledPage.waitForTimeout(300);
  await enrolledPage.screenshot({ path: path.join(ARTIFACT_DIR, 'course_learn_enrolled_unlocked_lesson2.png'), fullPage: false });
  console.log('Captured course_learn_enrolled_unlocked_lesson2.png');
  await enrolledCtx.close();

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});

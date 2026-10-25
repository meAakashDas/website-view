// ========================================================
// RISEPAISA TEST SUITE: NEPSE COURSE DIRECT NAVIGATION VERIFICATION
// Verifies:
// 1. All entry points lead directly to /courses/nepse-stock-market-basics/learn?lesson=lesson-1
// 2. Relative URLs used (no hardcoded localhost:8000)
// 3. Lesson query parameter ?lesson=lesson-1 preserved
// 4. All cards, titles, thumbnails, and CTAs correctly configured
// 5. App router click delegation and legacy redirects
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

console.log('========================================================');
console.log('TEST SUITE: NEPSE COURSE DIRECT NAVIGATION VERIFICATION');
console.log('========================================================\n');

const EXPECTED_DESTINATION = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';

// Import modules
const { renderHomePage } = await import('../js/pages/home.js');
const { renderCourseCard } = await import('../js/components.js');
const { getCourses } = await import('../js/data/courses.js');
const { renderCourseDetailPage } = await import('../js/pages/courseDetail.js');

const nepseCourse = getCourses().find(c => c.slug === 'nepse-stock-market-basics');

console.log('--- 1. Homepage Entry Points ---');

await test('Homepage renders with hero CTA linking directly to /courses/nepse-stock-market-basics/learn?lesson=lesson-1', () => {
  const html = renderHomePage();
  const heroMatch = html.match(/id="hero-nepse-course-cta"[^>]*href="([^"]+)"/) || html.match(/href="([^"]+)"[^>]*id="hero-nepse-course-cta"/);
  assert.ok(heroMatch, 'Hero CTA button found in home page');
  assert.strictEqual(heroMatch[1], EXPECTED_DESTINATION, 'Hero CTA points to exact learning destination');
});

await test('Homepage flagship course card has data-course-url pointing to exact destination', () => {
  const html = renderHomePage();
  assert.ok(html.includes(`id="flagship-nepse-showcase" data-course-url="${EXPECTED_DESTINATION}"`), 'Flagship card has data-course-url');
});

await test('Homepage flagship thumbnail link points directly to exact destination', () => {
  const html = renderHomePage();
  const thumbMatch = html.match(/class="flagship-cover-link"[^>]*href="([^"]+)"/) || html.match(/href="([^"]+)"[^>]*class="flagship-cover-link"/);
  assert.ok(thumbMatch, 'Flagship thumbnail link found');
  assert.strictEqual(thumbMatch[1], EXPECTED_DESTINATION, 'Thumbnail link points to exact learning destination');
});

await test('Homepage flagship course title link points directly to exact destination', () => {
  const html = renderHomePage();
  const titleMatch = html.match(/class="flagship-course-heading"[\s\S]*?<a href="([^"]+)"/);
  assert.ok(titleMatch, 'Flagship heading link found');
  assert.strictEqual(titleMatch[1], EXPECTED_DESTINATION, 'Title link points to exact learning destination');
});

await test('Homepage flagship explore CTA button points directly to exact destination', () => {
  const html = renderHomePage();
  const ctaMatch = html.match(/id="flagship-explore-course-btn"[^>]*href="([^"]+)"/) || html.match(/href="([^"]+)"[^>]*id="flagship-explore-course-btn"/);
  assert.ok(ctaMatch, 'Flagship explore button found');
  assert.strictEqual(ctaMatch[1], EXPECTED_DESTINATION, 'Explore CTA points to exact learning destination');
});

await test('Homepage final CTA section points directly to exact destination', () => {
  const html = renderHomePage();
  const finalCtaMatch = html.match(/id="final-cta"[\s\S]*?<a href="([^"]+)" class="btn btn-secondary/);
  assert.ok(finalCtaMatch, 'Final CTA found');
  assert.strictEqual(finalCtaMatch[1], EXPECTED_DESTINATION, 'Final CTA points to exact learning destination');
});

console.log('\n--- 2. Course Card Component Entry Points ---');

await test('renderCourseCard for NEPSE points thumbnail link directly to exact destination', () => {
  const cardHtml = renderCourseCard(nepseCourse);
  const thumbMatch = cardHtml.match(/class="card-image-link"[^>]*href="([^"]+)"/) || cardHtml.match(/href="([^"]+)"[^>]*class="card-image-link"/);
  assert.ok(thumbMatch, 'Card thumbnail link found');
  assert.strictEqual(thumbMatch[1], EXPECTED_DESTINATION, 'Card thumbnail link points to exact learning destination');
});

await test('renderCourseCard for NEPSE points course title link directly to exact destination', () => {
  const cardHtml = renderCourseCard(nepseCourse);
  const titleMatch = cardHtml.match(/<h3><a href="([^"]+)"/);
  assert.ok(titleMatch, 'Card title link found');
  assert.strictEqual(titleMatch[1], EXPECTED_DESTINATION, 'Card title link points to exact learning destination');
});

await test('renderCourseCard for NEPSE points secondary button directly to exact destination', () => {
  const cardHtml = renderCourseCard(nepseCourse);
  const btnMatch = cardHtml.match(/<a href="([^"]+)" class="btn btn-secondary btn-sm"/);
  assert.ok(btnMatch, 'Card button found');
  assert.strictEqual(btnMatch[1], EXPECTED_DESTINATION, 'Card button points to exact learning destination');
});

await test('renderCourseCard for NEPSE sets data-course-url on article element', () => {
  const cardHtml = renderCourseCard(nepseCourse);
  assert.ok(cardHtml.includes(`data-course-url="${EXPECTED_DESTINATION}"`), 'Card article contains data-course-url');
});

console.log('\n--- 3. URL Quality & Rule Adherence ---');

await test('No entry points contain hardcoded localhost:8000', () => {
  const homeHtml = renderHomePage();
  const cardHtml = renderCourseCard(nepseCourse);
  assert.strictEqual(homeHtml.includes('localhost:8000'), false, 'Homepage must not hardcode localhost:8000');
  assert.strictEqual(cardHtml.includes('localhost:8000'), false, 'Course card must not hardcode localhost:8000');
});

await test('Destination URL preserves the lesson query parameter ?lesson=lesson-1', () => {
  const url = new URL(EXPECTED_DESTINATION, 'https://risepaisa.com');
  assert.strictEqual(url.pathname, '/courses/nepse-stock-market-basics/learn');
  assert.strictEqual(url.searchParams.get('lesson'), 'lesson-1');
});

console.log('\n--- 4. App Router Delegation & Redirects ---');

await test('app.js click listener delegates course-card and flagship clicks to data-course-url', () => {
  const appSrc = fs.readFileSync(path.join(rootDir, 'js/app.js'), 'utf8');
  assert.ok(appSrc.includes('.course-card, #flagship-nepse-showcase'), 'app.js includes card delegation selector');
  assert.ok(appSrc.includes('getAttribute(\'data-course-url\')'), 'app.js reads data-course-url');
});

await test('app.js redirects legacy /course/nepse-stock-market-basics directly to exact destination', () => {
  const appSrc = fs.readFileSync(path.join(rootDir, 'js/app.js'), 'utf8');
  assert.ok(appSrc.includes("m[1] === 'nepse-stock-market-basics' ? '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'"), 'Legacy route redirect cleanly targets exact destination');
});

console.log('\n--- 5. Course Detail & Inactive Notices ---');

await test('Course detail inactive notices link directly to exact learning destination', () => {
  const courseDetailHtml = renderCourseDetailPage('personal-finance-masterclass');
  assert.ok(courseDetailHtml.includes(EXPECTED_DESTINATION), 'Inactive notice points directly to NEPSE learning URL');
});

console.log('\n--- 6. My Courses Navigation & Navbar Integration ---');

await test('ROUTES.MY_COURSES points directly to exact learning destination', async () => {
  const { ROUTES } = await import('../js/routes.js');
  assert.strictEqual(ROUTES.MY_COURSES, EXPECTED_DESTINATION, 'ROUTES.MY_COURSES must equal /courses/nepse-stock-market-basics/learn?lesson=lesson-1');
  assert.strictEqual(ROUTES.MY_COURSES_PAGE, EXPECTED_DESTINATION, 'ROUTES.MY_COURSES_PAGE must equal /courses/nepse-stock-market-basics/learn?lesson=lesson-1');
});

await test('renderNavbar renders desktop and mobile My Courses pointing directly to exact destination', async () => {
  const { renderNavbar } = await import('../js/components.js');
  const navHtml = renderNavbar('/');
  
  // Desktop nav
  const desktopMatch = navHtml.match(/<a href="([^"]+)"[^>]*>My Courses<\/a>/i);
  assert.ok(desktopMatch, 'Desktop My Courses nav link found');
  assert.strictEqual(desktopMatch[1], EXPECTED_DESTINATION, 'Desktop My Courses points directly to learning URL');

  // Mobile nav
  const mobileMatch = navHtml.match(/id="mobile-nav-my-courses"[^>]*href="([^"]+)"/) || navHtml.match(/href="([^"]+)"[^>]*id="mobile-nav-my-courses"/);
  assert.ok(mobileMatch, 'Mobile My Courses nav link found');
  assert.strictEqual(mobileMatch[1], EXPECTED_DESTINATION, 'Mobile My Courses points directly to learning URL');
});

await test('app.js redirects /my-courses directly to exact destination', () => {
  const appSrc = fs.readFileSync(path.join(rootDir, 'js/app.js'), 'utf8');
  assert.ok(appSrc.includes("/^\\/my-courses\\/?$/"), 'app.js includes /my-courses route pattern');
  assert.ok(appSrc.includes("redirect: () => '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'"), 'app.js redirects /my-courses to exact learning URL');
});

await test('Static index.html pre-renders My Courses button with direct destination', () => {
  const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  assert.ok(indexHtml.includes(`href="${EXPECTED_DESTINATION}"`), 'index.html contains expected direct destination');
  assert.ok(!indexHtml.includes('href="/my-courses"'), 'index.html does not link to /my-courses');
});

console.log('\n======================================================');
console.log(`SUMMARY: ${passedTests} passed, ${failedTests} failed, ${totalTests} total`);
console.log('======================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

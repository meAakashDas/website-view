// ========================================================
// RISEPAISA TEST SUITE: MOBILE COURSE LEARNING PAGE SIMPLIFICATION
// Validates all 6 core requirements for mobile-only learning view
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
    if (err.stack) {
      const lines = err.stack.split('\n').slice(1, 4).join('\n');
      console.error(`    ${lines}`);
    }
  }
}

async function runTestSuite() {
  console.log('========================================================');
  console.log('TEST SUITE: MOBILE COURSE LEARNING PAGE SIMPLIFICATION');
  console.log('========================================================\n');

  const { renderCourseLearnPage, getPublishedLessonsSequence } = await import('../js/pages/courseLearn.js');
  const { default: rawCourses } = await import('../js/data/courses.js');
  const { normalizeCourseData } = await import('../js/firebase/courses.js');

  const nepseCourse = rawCourses.find(c => c.slug === 'nepse-stock-market-basics');
  const normalizedNepse = normalizeCourseData(nepseCourse);
  const lessons = getPublishedLessonsSequence(normalizedNepse);
  const pagesCss = fs.readFileSync(path.join(rootDir, 'css/pages.css'), 'utf8');

  // -----------------------------------------------------------------------------
  // 1. Requirement 1: Show All Lessons on Mobile
  // -----------------------------------------------------------------------------
  console.log('--- 1. Testing Show All Lessons on Mobile ---');

  await test('HTML contains both player section and sidebar section in single DOM flow', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(html.includes('class="cl-main-player-col"'), 'Player column exists');
    assert.ok(html.includes('id="cl-sidebar-col"'), 'Sidebar column exists');
    assert.ok(html.includes('id="cl-modules-accordion"'), 'Modules accordion exists');
    
    // Check that player column appears before sidebar in HTML
    const playerIdx = html.indexOf('class="cl-main-player-col"');
    const sidebarIdx = html.indexOf('id="cl-sidebar-col"');
    assert.ok(playerIdx !== -1 && sidebarIdx !== -1 && playerIdx < sidebarIdx, 'Player column precedes sidebar column in document flow');
  });

  await test('Every published course lesson is rendered in the list', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.strictEqual(lessons.length, 22, 'NEPSE course has 22 published lessons');
    for (const l of lessons) {
      assert.ok(html.includes(`data-lesson-id="${l.id}"`), `Lesson #${l.displayOrder} (${l.id}) exists in curriculum list`);
    }
  });

  await test('CSS defines in-flow, static positioning and visible module content on mobile', () => {
    const mobileBlockMatch = pagesCss.match(/@media\s*\(max-width:\s*767px\)\s*\{([\s\S]*?)\n\}/);
    assert.ok(mobileBlockMatch, '@media (max-width: 767px) exists in pages.css');
    const css = mobileBlockMatch[1];

    assert.ok(css.includes('.cl-sidebar-col') && css.includes('position: static'), 'Sidebar col becomes static on mobile');
    assert.ok(css.includes('transform: none'), 'Sidebar col removes translateX transform on mobile');
    assert.ok(css.includes('.cl-module-content') && css.includes('display: block !important'), 'All module contents are displayed on mobile');
    assert.ok(css.includes('.cl-drawer-backdrop') && css.includes('display: none !important'), 'Drawer backdrop is hidden on mobile');
    assert.ok(css.includes('.cl-drawer-close-btn') && css.includes('display: none !important'), 'Drawer close button is hidden on mobile');
    assert.ok(css.includes('.cl-mobile-bottom-bar') && css.includes('display: none !important'), 'Redundant bottom button is hidden on mobile');
  });

  await test('Top "Course Contents" button remains present in the header', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(html.includes('id="cl-mobile-contents-btn"'), 'Top Course Contents button exists');
    assert.ok(html.includes('Course Contents'), 'Button displays Course Contents text');
  });

  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // 2. Requirement 2: Remove "Mark as Complete" Completely
  // -----------------------------------------------------------------------------
  console.log('\n--- 2. Testing Remove "Mark as Complete" Completely ---');

  await test('Mark as Complete markup is completely removed from SSR and client UI', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(!html.includes('id="cl-complete-toggle-btn"'), 'Complete button markup is completely removed');
    assert.ok(!html.includes('Mark as Complete'), 'Complete button label is removed');
    assert.ok(!html.includes('cl-completion-action'), 'Completion action container is removed');
  });

  // -----------------------------------------------------------------------------
  // 3. Requirement 3: Remove Redundant Duration Badge & Preserve Sidebar Durations
  // -----------------------------------------------------------------------------
  console.log('\n--- 3. Testing Duration Display Cleanup ---');

  await test('Redundant duration badge below video is removed from rendered UI', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(!html.includes('id="cl-duration-badge"'), 'Duration badge in lesson info card is removed');
  });

  await test('Lesson durations remain visible in course sidebar on desktop and mobile', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(html.includes('cl-item-duration'), 'Sidebar contains lesson duration items');
    assert.ok(html.includes('7:41'), 'Sidebar displays lesson 1 duration');

    const mobileBlockMatch = pagesCss.match(/@media\s*\(max-width:\s*767px\)\s*\{([\s\S]*?)\n\}/);
    const css = mobileBlockMatch[1];
    assert.ok(!css.includes('.cl-item-duration {\n    display: none !important;\n  }'), 'Sidebar lesson duration is not hidden on mobile');
  });

  await test('Lesson data retains duration values in underlying records', () => {
    const l1 = lessons[0];
    assert.ok(l1.duration && typeof l1.duration === 'string', 'Lesson 1 retains duration string in data layer');
  });

  // -----------------------------------------------------------------------------
  // 4. Requirement 4: Simplify Resources Section (Rename to "Resources")
  // -----------------------------------------------------------------------------
  console.log('\n--- 4. Testing Resources Section Simplification ---');

  await test('Resources heading is cleanly "Resources" without verbose prefix', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(html.includes('<h3 class="cl-resources-heading">Resources</h3>'), 'Resources heading is concise');
    assert.ok(!html.includes('Lesson Downloads &amp; Resources'), 'Old verbose heading is removed');
  });

  // -----------------------------------------------------------------------------
  // 5. Requirement 5: Remove Resource Count Badge & Course Progress Indicators
  // -----------------------------------------------------------------------------
  console.log('\n--- 5. Testing Remove Count Badge & Completion Progress ---');

  await test('Resource count badge is completely removed from rendered UI', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(!html.includes('id="cl-res-count-badge"'), 'Resource count badge is completely removed');
    assert.ok(!html.includes('1 Available'), 'Resource available count text is removed');
  });

  await test('Course completion progress indicators are removed from sidebar', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(!html.includes('id="cl-progress-pill"'), 'Progress count pill is removed from sidebar header');
    assert.ok(!html.includes('id="cl-progress-bar"'), 'Progress bar meter is removed from sidebar');
    assert.ok(!html.includes('0 / 22 Completed'), 'Progress count text is removed');
    assert.ok(!html.includes('id="cl-mobile-progress-badge"'), 'Mobile top progress badge is removed');
    assert.ok(!html.includes('id="cl-mobile-bottom-progress-badge"'), 'Mobile bottom progress badge is removed');
  });

  await test('Important access permission badges and lock icons remain preserved', () => {
    const html = renderCourseLearnPage('nepse-stock-market-basics');
    assert.ok(html.includes('id="cl-access-badge"'), 'Access status badge preserved');
    assert.ok(html.includes('cl-badge-free'), 'Free preview badge preserved');
    assert.ok(html.includes('cl-item-lock-icon'), 'Locked lesson icons preserved in curriculum list');
  });

  // -----------------------------------------------------------------------------
  // 6. Requirement 6: Simplified Mobile Lesson Cards Layout & Non-Overflow
  // -----------------------------------------------------------------------------
  console.log('\n--- 6. Testing Simplified Mobile Lesson Cards ---');

  await test('Mobile cards have comfortable touch targets and word-wrap styles', () => {
    const mobileBlockMatch = pagesCss.match(/@media\s*\(max-width:\s*767px\)\s*\{([\s\S]*?)\n\}/);
    const css = mobileBlockMatch[1];
    assert.ok(css.includes('.cl-lesson-btn') && css.includes('min-height: 48px'), 'Lesson buttons satisfy 48px touch targets');
    assert.ok(css.includes('.cl-module-toggle') && css.includes('min-height: 44px'), 'Module headers satisfy 44px touch targets');
    assert.ok(css.includes('word-break: break-word'), 'Cards enforce word-break to prevent horizontal overflow');
  });

  // -----------------------------------------------------------------------------
  // 7. Requirement 7: Desktop and Tablet Layout Preservation
  // -----------------------------------------------------------------------------
  console.log('\n--- 7. Testing Desktop and Tablet Layout Preservation ---');

  await test('Tablet off-canvas drawer styles (< 960px) remain preserved for tablet widths', () => {
    assert.ok(pagesCss.includes('@media (max-width: 960px)'), 'Preserves @media (max-width: 960px) tablet container rule');
    assert.ok(pagesCss.includes('.cl-sidebar-col {\n    position: fixed;'), 'Preserves tablet fixed off-canvas sidebar drawer');
    assert.ok(pagesCss.includes('body.cl-drawer-open .cl-sidebar-col'), 'Preserves tablet drawer open state');
  });

  await test('Desktop 2-column grid layout remains preserved', () => {
    assert.ok(pagesCss.includes('.cl-layout-grid {\n  display: grid;'), 'Desktop defines grid layout');
    assert.ok(pagesCss.includes('.cl-sidebar-card {\n  position: sticky;'), 'Desktop defines sticky sidebar');
  });

  console.log('\n======================================================');
  console.log(`TOTAL MOBILE SIMPLIFICATION TESTS: ${totalTests}`);
  console.log(`PASSED: ${passedTests}`);
  console.log(`FAILED: ${failedTests}`);
  console.log('======================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});

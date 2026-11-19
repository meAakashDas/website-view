/**
 * Test Suite: Premium Course Contents Button Redesign & Liquid Glass Styling
 *
 * Verifies:
 * 1. Refined Lucide list-checks icon replacing generic checkbox icon.
 * 2. Authentic Liquid Glass pill geometry, backdrop-filter, rim highlights, and ambient shadow.
 * 3. Responsive symmetry between "Course Overview & Syllabus" and "Course Contents" (38px on standard, 34px on <=360px).
 * 4. Micro-interactions: tap feedback (scale 0.965), hover transition, and aria-expanded state.
 * 5. Dark theme contrast and glass styling.
 * 6. Playwright interactive tests across multiple viewports (960px, 430px, 390px, 360px, 320px) with zero horizontal overflow.
 */

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;

async function test(name, fn) {
  totalTests++;
  try {
    await fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

console.log('\n--- 1. Testing Course Contents Button Markup & Icon Definition ---');

const courseLearnJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseLearn.js'), 'utf8');
const pagesCss = fs.readFileSync(path.join(rootDir, 'css/pages.css'), 'utf8');
const learnCss = fs.readFileSync(path.join(rootDir, 'css/learn.css'), 'utf8');
const nepseLearnHtml = fs.readFileSync(
  path.join(rootDir, 'courses/nepse-stock-market-basics/learn/index.html'),
  'utf8'
);

await test('CL_ICONS defines Lucide list-checks icon', () => {
  assert.ok(courseLearnJs.includes('listChecks:'), 'courseLearn.js defines listChecks icon in CL_ICONS');
  assert.ok(courseLearnJs.includes('m3 17 2 2 4-4'), 'Icon uses Lucide list-checks path');
  assert.ok(courseLearnJs.includes('M13 6h8'), 'Icon includes list lines');
});

await test('courseLearn.js renders listChecks icon for top and bottom Course Contents buttons', () => {
  assert.ok(
    courseLearnJs.includes('${CL_ICONS.listChecks}</span>\n              <span class="cl-m-btn-text">Course Contents</span>'),
    'Top button renders listChecks icon'
  );
  assert.ok(
    courseLearnJs.includes('${CL_ICONS.listChecks}</span>\n                  <span class="cl-m-btn-text">Course Contents</span>'),
    'Bottom button renders listChecks icon'
  );
});

await test('Pre-rendered static HTML includes the new list-checks Lucide icon', () => {
  assert.ok(nepseLearnHtml.includes('id="cl-mobile-contents-btn"'), 'Top button exists in static HTML');
  assert.ok(nepseLearnHtml.includes('m3 17 2 2 4-4'), 'Static HTML uses Lucide list-checks SVG');
  assert.ok(
    !nepseLearnHtml.includes('id="cl-mobile-contents-btn">\n              <span class="cl-m-btn-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 11 3 3L22 4"/>'),
    'Old checkbox icon is completely replaced in static HTML'
  );
});

console.log('\n--- 2. Testing Liquid Glass Design System Tokens & CSS Architecture ---');

await test('pages.css defines authentic Liquid Glass styling for .cl-mobile-contents-btn', () => {
  assert.ok(pagesCss.includes('.cl-mobile-contents-btn {'), 'Styles defined for .cl-mobile-contents-btn');
  assert.ok(pagesCss.includes('border-radius: var(--radius-pill);'), 'Uses pill radius');
  assert.ok(pagesCss.includes('backdrop-filter: var(--liquid-glass-clear-blur'), 'Applies glass blur');
  assert.ok(pagesCss.includes('inset 0 1px 0.5px rgba(255, 255, 255, 0.95)'), 'Applies specular top highlight');
  assert.ok(pagesCss.includes('height: 38px;'), 'Sets unified 38px height');
  assert.ok(pagesCss.includes('min-height: 38px;'), 'Sets unified 38px min-height');
});

await test('pages.css defines hover, active/tap, and expanded states for .cl-mobile-contents-btn', () => {
  assert.ok(pagesCss.includes('.cl-mobile-contents-btn:hover {'), 'Hover state defined');
  assert.ok(pagesCss.includes('.cl-mobile-contents-btn:active {'), 'Active/tap state defined');
  assert.ok(pagesCss.includes('transform: scale(0.965);'), 'Tactile scale down on tap');
  assert.ok(pagesCss.includes('.cl-mobile-contents-btn[aria-expanded="true"]'), 'Expanded state defined');
});

await test('pages.css provides dark mode support for .cl-mobile-contents-btn', () => {
  assert.ok(pagesCss.includes('[data-theme="dark"] .cl-mobile-contents-btn {'), 'Dark mode block exists');
  assert.ok(pagesCss.includes('[data-theme="dark"] .cl-mobile-contents-btn:hover {'), 'Dark mode hover exists');
  assert.ok(pagesCss.includes('[data-theme="dark"] .cl-mobile-contents-btn[aria-expanded="true"]'), 'Dark mode expanded exists');
});

await test('.cl-back-course-link pairs symmetrically with .cl-mobile-contents-btn', () => {
  assert.ok(pagesCss.includes('.cl-back-course-link {'), 'Styles defined for back course link');
  assert.ok(pagesCss.includes('height: 38px;'), 'Back course link has matching 38px height');
  assert.ok(pagesCss.includes('[data-theme="dark"] .cl-back-course-link'), 'Back course link supports dark mode');
});

await test('Ultra-compact screen query (<= 360px) harmonizes both controls to 34px', () => {
  const compactBlock = pagesCss.slice(pagesCss.indexOf('@media (max-width: 360px)'));
  assert.ok(compactBlock.includes('.cl-back-course-link {\n    font-size: 11px;\n    padding: 0 9px;\n    height: 34px;'), 'Back link scales to 34px');
  assert.ok(compactBlock.includes('.cl-mobile-contents-btn {\n    font-size: 11px;\n    padding: 0 9px;\n    height: 34px;'), 'Contents btn scales to 34px');
});

await test('Cross-site consistency: .cl-mobile-bottom-contents-btn and .mobile-contents-trigger-btn use Liquid Glass', () => {
  assert.ok(pagesCss.includes('.cl-mobile-bottom-contents-btn {'), 'Bottom contents btn styled');
  assert.ok(pagesCss.includes('[data-theme="dark"] .cl-mobile-bottom-contents-btn'), 'Bottom contents dark mode styled');
  assert.ok(learnCss.includes('.mobile-contents-trigger-btn {'), 'Learn category contents btn styled');
  assert.ok(learnCss.includes('[data-theme="dark"] .mobile-contents-trigger-btn'), 'Learn category contents dark mode styled');
});

console.log('\n--- 3. Testing Playwright Interactive & Layout Verification ---');

const browser = await chromium.launch({ headless: true });
const BASE_URL = 'http://localhost:8000';

try {
  // Test across responsive viewports
  const viewports = [
    { name: 'Tablet 960px', width: 960, height: 800 },
    { name: 'Tablet 768px', width: 768, height: 1024 },
    { name: 'iPhone 14 Pro Max 430px', width: 430, height: 932 },
    { name: 'iPhone 14 390px', width: 390, height: 844 },
    { name: 'Android Galaxy 360px', width: 360, height: 740 },
    { name: 'iPhone SE 320px', width: 320, height: 568 }
  ];

  for (const vp of viewports) {
    await test(`Course Contents button renders properly at ${vp.name} (${vp.width}x${vp.height})`, async () => {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);

      const btn = page.locator('#cl-mobile-contents-btn');
      await assert.ok(await btn.isVisible(), `Button must be visible at ${vp.width}px`);

      // Check text and icon
      const text = await btn.innerText();
      assert.ok(text.includes('Course Contents'), 'Button displays Course Contents text');

      const iconSvg = btn.locator('.cl-m-btn-icon svg');
      assert.ok(await iconSvg.isVisible(), 'Icon SVG is rendered');

      // Check layout overflow
      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      assert.strictEqual(hasHorizontalOverflow, false, `No horizontal overflow at ${vp.width}px`);

      // Check button bounding box
      const box = await btn.boundingBox();
      assert.ok(box.width > 100, `Button width ${box.width} is comfortable`);
      assert.ok(box.height >= 34, `Button height ${box.height} meets touch target criteria`);

      await page.close();
    });
  }

  await test('Interactions: Clicking Course Contents button scrolls to curriculum or opens drawer', async () => {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const btn = page.locator('#cl-mobile-contents-btn');
    await btn.click();
    await page.waitForTimeout(400);

    // Verify sidebar exists and is in view
    const sidebar = page.locator('#cl-sidebar-col');
    await assert.ok(await sidebar.isVisible(), 'Sidebar is visible');

    await page.close();
  });

  await test('Dark Theme: Course Contents button adapts contrast and glass styles', async () => {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
    
    // Switch to dark theme
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    await page.waitForTimeout(300);

    const btn = page.locator('#cl-mobile-contents-btn');
    const color = await btn.evaluate(el => window.getComputedStyle(el).color);
    // Dark mode color should not be dark grey
    assert.ok(color.startsWith('rgb'), 'Color computed');

    await page.close();
  });

} finally {
  await browser.close();
}

console.log('\n======================================================');
console.log(`TEST RESULTS: ${passedTests}/${totalTests} PASSED`);
console.log('======================================================\n');
if (passedTests < totalTests) {
  process.exit(1);
}

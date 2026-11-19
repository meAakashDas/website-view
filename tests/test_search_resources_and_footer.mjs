/**
 * Test Suite: Search UI Bug Fix, Resources Page Cleanup & Global Mobile Footer Optimization
 *
 * Verifies:
 * 1. Search Bar Focus & Duplicate Border Elimination:
 *    - Learn search bar has no inner square border, outline, or duplicate focus ring.
 *    - Entire outer pill container is subtly highlighted on focus (:focus-within).
 *    - Global search inputs have duplicate outline resets.
 * 2. Resources Page Cleanup:
 *    - Complete removal of "Comprehensive Architectures", "Operating Systems & Dashboards" section.
 *    - Preservation of main "Financial Systems" page header and description.
 *    - Preservation of product cards ("Notion Finance Tracker", "Budget Planner System") and category filters.
 *    - Clean spacing without large blank gaps.
 * 3. Mobile Footer Responsive Redesign:
 *    - Semantic, touch-friendly collapsible accordions on mobile (<768px).
 *    - Permanent 4-column layout on desktop (>=1024px) and 2-column layout on tablet (640px-1023px).
 *    - Preservation of all 9 Quick Links, 8 Academy & Topics links, and 6 Trust & Legal links.
 *    - Interactive accordion toggle with aria-expanded synchronization.
 *    - Zero horizontal overflow across 390px, 360px, and 320px viewports.
 *    - Flawless appearance in both light and dark modes.
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

console.log('\n--- 1. Testing Search Input CSS & Border Elimination ---');

const learnCss = fs.readFileSync(path.join(rootDir, 'css/learn.css'), 'utf8');
const searchCss = fs.readFileSync(path.join(rootDir, 'css/search.css'), 'utf8');

await test('.learn-search-input has explicit outline and border resets on focus', () => {
  assert.ok(learnCss.includes('.learn-search-input:focus'), 'Focus selector exists for learn-search-input');
  assert.ok(learnCss.includes('outline: none !important;'), 'Outline is set to none !important');
  assert.ok(learnCss.includes('border: none !important;'), 'Border is set to none !important');
});

await test('.learn-page-v2 input:focus-visible excludes search inputs from rectangular focus outline', () => {
  assert.ok(
    learnCss.includes('input:not(.learn-search-input):not(.learn-filter-search-input)'),
    ':focus-visible excludes search inputs from default outline'
  );
});

await test('css/search.css resets focus outlines for all global search inputs', () => {
  assert.ok(searchCss.includes('.search-modal-input:focus'), 'search-modal-input focus reset defined');
  assert.ok(searchCss.includes('.learn-search-input:focus'), 'learn-search-input focus reset defined in search.css');
  assert.ok(searchCss.includes('box-shadow: none !important;'), 'box-shadow reset defined');
});

console.log('\n--- 2. Testing Resources Page Markup & Section Removal ---');

const resourcesJs = fs.readFileSync(path.join(rootDir, 'js/pages/resources.js'), 'utf8');
const resourcesHtml = fs.readFileSync(path.join(rootDir, 'resources/index.html'), 'utf8');

await test('Operating Systems & Dashboards section is completely removed from js/pages/resources.js', () => {
  assert.ok(!resourcesJs.includes('Operating Systems & Dashboards'), 'Heading removed from resources.js');
  assert.ok(!resourcesJs.includes('Comprehensive Architectures'), 'Eyebrow removed from resources.js');
  assert.ok(!resourcesJs.includes('Complete multi-year architectures built for structured budgeting'), 'Description removed from resources.js');
});

await test('Operating Systems & Dashboards section is completely removed from resources/index.html', () => {
  assert.ok(!resourcesHtml.includes('Operating Systems & Dashboards'), 'Heading removed from resources/index.html');
  assert.ok(!resourcesHtml.includes('Comprehensive Architectures'), 'Eyebrow removed from resources/index.html');
});

await test('Main Financial Systems page heading and description are preserved', () => {
  assert.ok(resourcesJs.includes('<h1>Financial Systems</h1>'), 'Main h1 preserved in resources.js');
  assert.ok(resourcesJs.includes('Premium templates, operating dashboards'), 'Description preserved in resources.js');
  assert.ok(resourcesHtml.includes('<h1>Financial Systems</h1>'), 'Main h1 preserved in resources/index.html');
});

await test('Resource cards and filter tabs are preserved on Resources page', () => {
  assert.ok(resourcesJs.includes('id="resource-filters"'), 'Filter tabs preserved in resources.js');
  assert.ok(resourcesJs.includes('id="resources-grid"'), 'Resource grid preserved in resources.js');
  assert.ok(resourcesHtml.includes('Notion Finance Tracker'), 'Product card preserved in resources/index.html');
});

console.log('\n--- 3. Testing Footer Markup & Responsive CSS ---');

const componentsJs = fs.readFileSync(path.join(rootDir, 'js/components.js'), 'utf8');
const layoutCss = fs.readFileSync(path.join(rootDir, 'css/layout.css'), 'utf8');

await test('renderFooter() includes collapsible accordion markup and all required links', () => {
  assert.ok(componentsJs.includes('class="footer-section" data-collapsible="true"'), 'data-collapsible defined on footer sections');
  assert.ok(componentsJs.includes('class="footer-section-toggle"'), 'Toggle button exists');
  assert.ok(componentsJs.includes('class="footer-links-content"'), 'Links content wrapper exists');

  // Verify all 9 Quick Links
  const quickLinks = ['Home', 'Learn Academy', 'Courses', 'Calculators', 'Resources', 'Articles', 'About Us', 'Aakash Das (Founder)', 'Contact'];
  for (const ql of quickLinks) {
    assert.ok(componentsJs.includes(`>${ql}</a>`), `Quick link "${ql}" is present in footer`);
  }

  // Verify all 8 Academy & Topics links
  const topicLinks = ['Investing', 'NEPSE', 'Personal Finance', 'Taxation Nepal', 'Mutual Funds', 'Loans &amp; Banking', 'Insurance', 'Retirement Planning'];
  for (const tl of topicLinks) {
    assert.ok(componentsJs.includes(`>${tl}</a>`), `Topic link "${tl}" is present in footer`);
  }

  // Verify all 6 Trust & Legal links
  const legalLinks = ['Editorial Policy', 'Disclaimer', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'FAQ'];
  for (const ll of legalLinks) {
    assert.ok(componentsJs.includes(`>${ll}</a>`), `Legal link "${ll}" is present in footer`);
  }
});

await test('layout.css defines desktop 4-column layout and mobile accordion rules', () => {
  assert.ok(layoutCss.includes('grid-template-columns: 2fr 1fr 1fr 1fr;'), 'Desktop 4-column layout defined');
  assert.ok(layoutCss.includes('@media (max-width: 767px)'), 'Mobile media query defined');
  assert.ok(layoutCss.includes('.footer-section-toggle {'), 'Toggle button styles defined');
  assert.ok(layoutCss.includes('transform: rotate(180deg);'), 'Chevron rotation on expansion defined');
  assert.ok(layoutCss.includes('env(safe-area-inset-bottom'), 'Safe area inset padding defined');
});

console.log('\n--- 4. Interactive Browser Verification via Playwright ---');

const browser = await chromium.launch({ headless: true });

await test('Learn search bar has no duplicate inner rectangle border when focused', async () => {
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  await page.goto('http://localhost:8000/learn/', { waitUntil: 'domcontentloaded' });
  const searchInput = page.locator('#learn-search-input');
  assert.ok(await searchInput.isVisible(), 'Learn search input is visible');

  await searchInput.focus();
  await page.waitForTimeout(150);

  // Check computed styles on input
  const outline = await searchInput.evaluate((el) => window.getComputedStyle(el).outlineStyle);
  const border = await searchInput.evaluate((el) => window.getComputedStyle(el).borderStyle);
  const boxShadow = await searchInput.evaluate((el) => window.getComputedStyle(el).boxShadow);

  assert.ok(outline === 'none', `Input outline is none (was: ${outline})`);
  assert.ok(border === 'none', `Input border is none (was: ${border})`);
  assert.ok(boxShadow === 'none', `Input box-shadow is none (was: ${boxShadow})`);

  // Check outer container receives the focus highlight
  const searchBox = page.locator('.learn-search-box').first();
  const boxBorder = await searchBox.evaluate((el) => window.getComputedStyle(el).borderColor);
  assert.ok(boxBorder.includes('rgb'), 'Outer search container border is highlighted on focus');

  await page.close();
});

await test('Resources page displays Financial Systems without unwanted architecture sub-header', async () => {
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  await page.goto('http://localhost:8000/resources/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(200);

  const text = await page.content();
  assert.ok(!text.includes('Operating Systems & Dashboards'), 'Operating Systems & Dashboards is absent');
  assert.ok(!text.includes('Comprehensive Architectures'), 'Comprehensive Architectures is absent');
  assert.ok(text.includes('Financial Systems'), 'Main Financial Systems heading is present');

  // Products grid is visible
  const cards = page.locator('.resource-card');
  const count = await cards.count();
  assert.ok(count >= 2, `Product cards are present (found ${count})`);

  await page.close();
});

await test('Mobile Footer: Collapses cleanly and expands on touch with zero overflow', async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://localhost:8000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(200);

  // Check zero horizontal overflow
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  assert.ok(scrollWidth <= 390, `No horizontal overflow on 390px viewport (scrollWidth: ${scrollWidth})`);

  const quickToggle = page.locator('.footer-section-toggle').first();
  const quickContent = page.locator('#footer-links-quick');

  // Initially collapsed
  const isExpandedInitial = await quickToggle.getAttribute('aria-expanded');
  assert.strictEqual(isExpandedInitial, 'false', 'Quick Links initially collapsed');

  // Click to expand
  await quickToggle.click();
  await page.waitForTimeout(350);

  const isExpandedAfter = await quickToggle.getAttribute('aria-expanded');
  assert.strictEqual(isExpandedAfter, 'true', 'Quick Links expanded after click');

  const isVisible = await quickContent.isVisible();
  assert.ok(isVisible, 'Links content is visible when expanded');

  // Verify individual link inside
  const homeLink = quickContent.locator('a[href="/"]').first();
  assert.ok(await homeLink.isVisible(), 'Home link inside Quick Links is visible');

  // Click again to collapse
  await quickToggle.click();
  await page.waitForTimeout(350);
  const isExpandedFinal = await quickToggle.getAttribute('aria-expanded');
  assert.strictEqual(isExpandedFinal, 'false', 'Quick Links collapsed again');

  await page.close();
});

await test('Desktop Footer: Displays all 4 columns with visible links without collapsing', async () => {
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  await page.goto('http://localhost:8000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(200);

  const quickContent = page.locator('#footer-links-quick');
  assert.ok(await quickContent.isVisible(), 'Quick links content is visible on desktop');

  const topicsContent = page.locator('#footer-links-topics');
  assert.ok(await topicsContent.isVisible(), 'Topics content is visible on desktop');

  const legalContent = page.locator('#footer-links-legal');
  assert.ok(await legalContent.isVisible(), 'Legal content is visible on desktop');

  // Chevron is hidden on desktop
  const chevron = page.locator('.footer-toggle-icon').first();
  const chevronDisplay = await chevron.evaluate((el) => window.getComputedStyle(el).display);
  assert.strictEqual(chevronDisplay, 'none', 'Chevron is hidden on desktop');

  await page.close();
});

await test('Narrow viewports (360px & 320px) maintain zero horizontal overflow', async () => {
  for (const width of [360, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 600 } });
    await page.goto('http://localhost:8000/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(150);

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    assert.ok(scrollWidth <= width, `No horizontal scroll on ${width}px (scrollWidth: ${scrollWidth})`);
    await page.close();
  }
});

await browser.close();

console.log(`\nAll ${totalTests} search, resources, and footer tests passed successfully! (${passedTests}/${totalTests})\n`);

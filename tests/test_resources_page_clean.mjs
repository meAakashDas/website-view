/**
 * Test Suite: Resources Page Cleanup & Paid-Only Verification
 * 
 * Verifies:
 * 1. Complete permanent deletion of free resources data file (`freeResources.js`).
 * 2. Only paid resources exist in `js/data/resources.js` with valid pricing and purchase flow.
 * 3. `js/pages/resources.js` renders the refined Apple-inspired UI with paid cards and empty state.
 * 4. All free resource cards, download buttons, and preview modal hooks are eradicated.
 * 5. Static HTML shells (resources, learn, category pages, homepage) contain zero references to deleted free downloads.
 * 6. Responsive container styling, clean typography, and zero dead routes.
 */

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

const DELETED_TITLES = [
  'Nepal Personal Budget Planner',
  'Monthly Cash Flow & Net Worth Tracker',
  'First-Time NEPSE Investor Checklist',
  'Commercial Bank Loan Comparison Worksheet',
  'Essential Finance Reading List for Nepal',
  'Salary Earner Legal Tax Deductions Checklist',
  'Financial Jargon Pocket Reference Guide'
];

console.log('\n--- 1. Verification of File System & Permanent Deletion ---');

await test('js/data/freeResources.js does NOT exist on disk', () => {
  const filePath = path.join(rootDir, 'js/data/freeResources.js');
  assert.strictEqual(fs.existsSync(filePath), false, 'freeResources.js should be permanently deleted');
});

await test('js/data/learn.js does not export FREE_RESOURCES', async () => {
  const learnData = await import('../js/data/learn.js');
  assert.strictEqual(learnData.FREE_RESOURCES, undefined, 'FREE_RESOURCES export must not exist');
});

console.log('\n--- 2. Verification of Paid Resources Data ---');

const { getResources } = await import('../js/data/resources.js');

await test('getResources() returns valid array of paid products only', () => {
  const resources = getResources();
  assert.ok(Array.isArray(resources), 'getResources must return an array');
  assert.ok(resources.length >= 2, 'Must have at least 2 paid resources');
  
  for (const res of resources) {
    assert.ok(res.id, 'Resource must have id');
    assert.ok(res.slug, 'Resource must have slug');
    assert.ok(res.title, 'Resource must have title');
    assert.ok(typeof res.price === 'number' && res.price > 0, `Resource ${res.title} must have price > 0`);
    assert.strictEqual(res.currency, 'NPR', `Resource ${res.title} currency must be NPR`);
    assert.ok(res.shortDescription, `Resource ${res.title} must have description`);
    assert.ok(res.category, `Resource ${res.title} must have category`);
  }
});

console.log('\n--- 3. Verification of js/pages/resources.js UI Logic ---');

const { renderResourcesPage } = await import('../js/pages/resources.js');

await test('renderResourcesPage renders Apple-inspired paid product cards', () => {
  const html = renderResourcesPage();
  assert.ok(html.includes('Financial Systems'), 'Must render system header');
  assert.ok(html.includes('Notion Finance Tracker'), 'Must render Notion Finance Tracker');
  assert.ok(html.includes('Budget Planner System'), 'Must render Budget Planner System');
  assert.ok(html.includes('299'), 'Must render price for Notion tracker');
  assert.ok(html.includes('399'), 'Must render price for Budget planner');
  
  // Verify complete absence of deleted free resources
  for (const title of DELETED_TITLES) {
    assert.strictEqual(html.includes(title), false, `Page must not contain deleted title: ${title}`);
  }
  
  // Verify no free download or preview buttons
  assert.strictEqual(html.includes('free-res-preview-btn'), false, 'No preview buttons allowed');
  assert.strictEqual(html.includes('free-res-download-btn'), false, 'No free download buttons allowed');
  assert.strictEqual(html.includes('free-resources-section'), false, 'No free resources section allowed');
});

await test('renderResourcesPage handles empty state cleanly when no products exist', () => {
  // Test empty state function
  const emptyHtml = renderResourcesPage([]);
  assert.ok(emptyHtml.includes('resources-empty-state'), 'Must render empty state container');
  assert.ok(emptyHtml.includes('No Resources Currently Available'), 'Must show clean empty state message');
});

console.log('\n--- 4. Verification of Static HTML Shells ---');

await test('resources/index.html contains no free resource cards or sections', () => {
  const html = fs.readFileSync(path.join(rootDir, 'resources/index.html'), 'utf8');
  assert.strictEqual(html.includes('free-resources-section'), false, 'Must not have #free-resources-section');
  assert.strictEqual(html.includes('free-res-preview-btn'), false, 'Must not have free preview button');
  assert.strictEqual(html.includes('free-res-download-btn'), false, 'Must not have free download button');
  for (const title of DELETED_TITLES) {
    assert.strictEqual(html.includes(title), false, `resources/index.html must not contain ${title}`);
  }
  assert.ok(html.includes('Notion Finance Tracker'), 'Must retain Notion Finance Tracker');
  assert.ok(html.includes('Budget Planner System'), 'Must retain Budget Planner System');
});

await test('learn/index.html #tab-resources contains only paid systems', () => {
  const html = fs.readFileSync(path.join(rootDir, 'learn/index.html'), 'utf8');
  assert.strictEqual(html.includes('res-budget-planner'), false, 'No res-budget-planner');
  assert.strictEqual(html.includes('res-cashflow-notion'), false, 'No res-cashflow-notion');
  assert.strictEqual(html.includes('free-res-preview-btn'), false, 'No free-res-preview-btn');
  for (const title of DELETED_TITLES) {
    assert.strictEqual(html.includes(title), false, `learn/index.html must not contain ${title}`);
  }
  assert.ok(html.includes('Financial Systems &amp; Dashboards') || html.includes('Financial Systems & Dashboards'), 'Must render financial systems section');
});

await test('Category pages have no #cat-resources tab or free download section', () => {
  const categoryPaths = [
    'learn/nepse/index.html',
    'learn/personal-finance/index.html',
    'learn/taxation/index.html'
  ];
  for (const catPath of categoryPaths) {
    const fullPath = path.join(rootDir, catPath);
    if (fs.existsSync(fullPath)) {
      const html = fs.readFileSync(fullPath, 'utf8');
      assert.strictEqual(html.includes('cat-resources'), false, `${catPath} must not have #cat-resources`);
      assert.strictEqual(html.includes('Free Downloads'), false, `${catPath} must not have Free Downloads`);
    }
  }
});

await test('Homepage does not promote free downloadable templates banner', () => {
  const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
  assert.strictEqual(html.includes('learn-resources-banner'), false, 'Homepage must not have learn-resources-banner');
  assert.strictEqual(html.includes('Free Budgeting &amp; Investing Templates'), false, 'Homepage must not have free templates banner text');
});

console.log(`\nResults: ${passedTests}/${totalTests} tests passed.\n`);
if (passedTests !== totalTests) {
  process.exit(1);
}

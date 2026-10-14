import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

import { renderCalculatorsPage } from '../js/pages/calculators.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('CALCULATOR RENDERING & INSTANT HYDRATION TEST SUITE');
console.log('========================================================\n');

// 1. Verify renderCalculatorsPage('') renders all calculators without any loading container
console.log('--- 1. Testing In-Memory Synchronous Page Render ---');
const defaultHtml = renderCalculatorsPage('');

assert(!defaultHtml.includes('rp-calc-loading-container'), 'Default render contains ZERO rp-calc-loading-container elements');
assert(!defaultHtml.includes('Loading calculator...'), 'Default render contains ZERO "Loading calculator..." strings');

// Check all calculator containers are present
const expectedContainers = [
  { id: 'sip-calculator', name: 'SIP Calculator' },
  { id: 'loan-calculators-hub', name: 'Loan Calculators Hub' },
  { id: 'swp-calculator', name: 'SWP Calculator' },
  { id: 'tax-calculator', name: 'Tax Calculator' },
  { id: 'nepse-share-calculator', name: 'NEPSE Share Calculator' },
  { id: 'fdrd-calculator', name: 'FD & RD Calculator' },
  { id: 'retirement-goal-calculator', name: 'Retirement & Goal Planner' },
  { id: 'cagr-calculator', name: 'CAGR Calculator' },
  { id: 'inflation-calculator', name: 'Inflation Calculator' },
];

for (const c of expectedContainers) {
  assert(defaultHtml.includes(`id="${c.id}"`), `${c.name} container (#${c.id}) is directly rendered in HTML`);
}

// 2. Verify all calculator slugs activate the proper tab
console.log('\n--- 2. Testing Calculator Slugs and Active States ---');
const testSlugs = [
  { slug: 'sip', expectedActive: 'calc-pane-sip', activeBtn: 'tab-btn-sip' },
  { slug: 'emi', expectedActive: 'calc-pane-emi', activeBtn: 'tab-btn-emi' },
  { slug: 'home-loan', expectedActive: 'calc-pane-emi', activeBtn: 'tab-btn-emi' },
  { slug: 'personal-loan', expectedActive: 'calc-pane-emi', activeBtn: 'tab-btn-emi' },
  { slug: 'vehicle-loan', expectedActive: 'calc-pane-emi', activeBtn: 'tab-btn-emi' },
  { slug: 'swp', expectedActive: 'calc-pane-swp', activeBtn: 'tab-btn-swp' },
  { slug: 'nepal-income-tax', expectedActive: 'calc-pane-tax', activeBtn: 'tab-btn-tax' },
  { slug: 'nepse-share', expectedActive: 'calc-pane-share', activeBtn: 'tab-btn-share' },
  { slug: 'fixed-deposit', expectedActive: 'calc-pane-fdrd', activeBtn: 'tab-btn-fdrd' },
  { slug: 'retirement', expectedActive: 'calc-pane-retirement', activeBtn: 'tab-btn-retirement' },
  { slug: 'cagr', expectedActive: 'calc-pane-cagr', activeBtn: 'tab-btn-cagr' },
  { slug: 'inflation', expectedActive: 'calc-pane-inflation', activeBtn: 'tab-btn-inflation' },
];

for (const t of testSlugs) {
  const html = renderCalculatorsPage(t.slug);
  assert(!html.includes('rp-calc-loading-container'), `Slug "${t.slug}" has no loading container`);
  assert(!html.includes('Loading calculator...'), `Slug "${t.slug}" has no "Loading calculator..." text`);
  assert(html.includes(`id="${t.expectedActive}"`) && html.includes(`aria-controls="${t.expectedActive}"`), `Slug "${t.slug}" renders pane ${t.expectedActive}`);
}

// 3. Verify static HTML files on disk
console.log('\n--- 3. Testing Pre-Rendered Static HTML Files ---');
const staticFiles = [
  'calculators/index.html',
  'calculators/sip/index.html',
  'calculators/emi/index.html',
  'calculators/home-loan/index.html',
  'calculators/personal-loan/index.html',
  'calculators/vehicle-loan/index.html',
  'calculators/swp/index.html',
  'calculators/nepal-income-tax/index.html',
  'calculators/nepse-share/index.html',
  'calculators/fixed-deposit/index.html',
  'calculators/retirement/index.html',
  'calculators/cagr/index.html',
  'calculators/inflation/index.html',
];

for (const relPath of staticFiles) {
  const fullPath = path.join(rootDir, relPath);
  assert(fs.existsSync(fullPath), `Static file exists: ${relPath}`);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    assert(!content.includes('rp-calc-loading-container'), `${relPath} contains ZERO rp-calc-loading-container elements`);
    assert(!content.includes('Loading calculator...'), `${relPath} contains ZERO "Loading calculator..." text`);
    assert(content.includes('id="sip-calculator"'), `${relPath} contains SIP Calculator markup`);
    assert(content.includes('id="sip-input-investment"'), `${relPath} contains SIP input investment control`);
  }
}

console.log('\n========================================================');
console.log(`CALCULATOR RENDERING TESTS: ${passed} PASSED, ${failed} FAILED`);
console.log('========================================================');

if (failed > 0) {
  process.exit(1);
}

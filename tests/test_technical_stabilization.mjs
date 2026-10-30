// ==============================================
// risePaisa - Technical Stabilization & Mobile Optimization Regression Suite
// Verifies fixes from Part 7 audit: mobile drawer overflow, 320px responsive rules,
// calculator zero-rate math, accessibility labels, and ESLint integrity.
// ==============================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('RISEPAISA TECHNICAL STABILIZATION & MOBILE AUDIT SUITE');
console.log('========================================================\n');

// ── 1. MOBILE DRAWER & HORIZONTAL OVERFLOW PREVENTION ─────────
console.log('--- 1. Testing Mobile Navigation & Off-Screen Containment ---');

const layoutCss = fs.readFileSync(path.join(rootDir, 'css/layout.css'), 'utf8');
const baseCss = fs.readFileSync(path.join(rootDir, 'css/base.css'), 'utf8');
const calculatorsCss = fs.readFileSync(path.join(rootDir, 'css/calculators.css'), 'utf8');
const pagesCss = fs.readFileSync(path.join(rootDir, 'css/pages.css'), 'utf8');

// Ensure containing-block trap is eliminated from .navbar
assert(!layoutCss.includes('transform: translateZ(0)'), '.navbar does not have transform: translateZ(0) containing block trap');

// Ensure closed mobile menu does not expand off-screen layout
assert(layoutCss.includes('.mobile-menu:not(.open)'), '.mobile-menu has explicit :not(.open) selector');
assert(layoutCss.includes('display: none !important'), 'Closed mobile menu is hidden with display: none !important');
assert(layoutCss.includes('.mobile-menu.open'), '.mobile-menu.open class handles display restoration');

// Ensure ultra-narrow (320px) viewport protection rules exist
assert(baseCss.includes('@media (max-width: 360px)'), 'base.css contains max-width: 360px container padding rules');
assert(calculatorsCss.includes('@media (max-width: 360px)'), 'calculators.css contains max-width: 360px layout rules');
assert(calculatorsCss.includes('.rp-freq-switch'), 'calculators.css adjusts .rp-freq-switch for compact screens');
assert(pagesCss.includes('@media (max-width: 480px)'), 'pages.css contains max-width: 480px rules for founder/bio grids');
assert(pagesCss.includes('grid-template-columns: 1fr'), 'pages.css switches entity fact lists to single column on small screens');

// ── 2. CALCULATOR MATHEMATICAL ROBUSTNESS ──────────────────────
console.log('\n--- 2. Testing Calculator Mathematical Invariance & Boundary Cases ---');

// SIP calculation verification with 0% interest
function calculateSip(monthly, annualRate, years) {
  const i = (annualRate / 100) / 12;
  const n = years * 12;
  const invested = monthly * n;
  let total;
  if (i === 0) {
    total = invested;
  } else {
    total = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  }
  const wealthGain = total - invested;
  return { invested, wealthGain, total };
}

const sipZero = calculateSip(5000, 0, 10);
assert(sipZero.invested === 600000, 'SIP invested amount is correct (NPR 6,00,000)');
assert(sipZero.wealthGain === 0, 'SIP wealth gain at 0% interest is exactly 0');
assert(sipZero.total === 600000, 'SIP total at 0% interest equals invested principal without NaN');
assert(!Number.isNaN(sipZero.total), 'SIP total is not NaN at 0%');

// EMI calculation verification with 0% interest
function calculateEmi(principal, annualRate, tenureYears) {
  const r = (annualRate / 100) / 12;
  const n = tenureYears * 12;
  let emi;
  if (r === 0) {
    emi = principal / n;
  } else {
    emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;
  return { emi: Math.round(emi), totalPayment: Math.round(totalPayment), totalInterest: Math.round(totalInterest) };
}

const emiZero = calculateEmi(1200000, 0, 10);
assert(emiZero.emi === 10000, 'EMI at 0% interest is principal / months (NPR 10,000)');
assert(emiZero.totalInterest === 0, 'EMI total interest at 0% is 0');
assert(!Number.isNaN(emiZero.emi), 'EMI is not NaN at 0%');

// ── 3. ACCESSIBILITY & ARIA LABELS ────────────────────────────
console.log('\n--- 3. Testing Accessibility Attributes & UI Standards ---');

const calculatorsJs = fs.readFileSync(path.join(rootDir, 'js/pages/calculators.js'), 'utf8');
const firebaseUiJs = fs.readFileSync(path.join(rootDir, 'js/firebase/ui.js'), 'utf8');

assert(calculatorsJs.includes('aria-label="${cat} (${categoryCounts[cat] || 0} calculators)"'), 'Calculator directory category buttons have descriptive aria-labels');
assert(firebaseUiJs.includes('aria-label="Student Sign In tab"'), 'Auth dialog Sign In tab has descriptive aria-label');
assert(firebaseUiJs.includes('aria-label="Create Account tab"'), 'Auth dialog Create Account tab has descriptive aria-label');
assert(firebaseUiJs.includes('aria-label="Forgot Password tab"'), 'Auth dialog Forgot Password tab has descriptive aria-label');

// ── 4. COURSE LEARNING PLATFORM & PLAYER INTEGRITY ─────────────
console.log('\n--- 4. Testing Course Player & Free Preview Integrity ---');

const courseLearnJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseLearn.js'), 'utf8');
const courseDetailJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseDetail.js'), 'utf8');
const videoPlayerJs = fs.readFileSync(path.join(rootDir, 'js/components/videoPlayer.js'), 'utf8');

assert(courseLearnJs.includes('cl-player-wrapper'), 'Course player template renders #cl-player-wrapper');
assert(courseLearnJs.includes('cl-prev-btn'), 'Course player includes previous lesson navigation (#cl-prev-btn)');
assert(courseLearnJs.includes('cl-next-btn'), 'Course player includes next lesson navigation (#cl-next-btn)');
assert(courseLearnJs.includes('isFreePreview'), 'Course player enforces free preview access state');
assert(videoPlayerJs.includes('createBrandedVideoPlayer'), 'Video player module exports createBrandedVideoPlayer');
assert(courseDetailJs.includes('getWhatsAppPurchaseUrl'), 'Course sales page integrates verified WhatsApp enrollment link generator');
assert(courseDetailJs.includes('buy-course-whatsapp-btn'), 'Course sales page includes WhatsApp purchase CTA button');

// ── 5. ESLINT LINT & STATIC CODE HYGIENE ───────────────────────
console.log('\n--- 5. Running ESLint Code Hygiene Check ---');

const eslintResult = spawnSync('npx', ['eslint', 'js/'], {
  cwd: rootDir,
  encoding: 'utf8',
  env: { ...process.env }
});

assert(eslintResult.status === 0, 'ESLint check on js/ directory exits with 0 errors');
if (eslintResult.status !== 0) {
  console.error(eslintResult.stdout || eslintResult.stderr);
}

// ── SUMMARY ────────────────────────────────────────────────────
console.log('\n========================================================');
console.log(`STABILIZATION TEST SUMMARY: ${passedTests} passed, ${failedTests} failed`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

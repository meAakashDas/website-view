import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

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
console.log('RISEPAISA TRUST, CREDIBILITY & POLICY INTEGRITY SUITE');
console.log('========================================================\n');

// ── 1. POLICY CONSISTENCY & ACCESS TERMS ────────────────────────
console.log('--- 1. Testing Policy Consistency & Course Access Terms ---');

const legalJs = fs.readFileSync(path.join(rootDir, 'js/pages/legal.js'), 'utf8');
const courseDetailJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseDetail.js'), 'utf8');
const homeJs = fs.readFileSync(path.join(rootDir, 'js/pages/home.js'), 'utf8');
const coursesDataJs = fs.readFileSync(path.join(rootDir, 'js/data/courses.js'), 'utf8');

// Verify Course Access and Validity policy (1-year access, non-refundable on Terms)
assert(legalJs.includes('Course Access and Validity'), 'Terms & Conditions defines Course Access and Validity');
assert(legalJs.includes('one (1) year'), 'Terms & Conditions specifies one (1) year course access period');
assert(legalJs.includes('Course access is not lifetime access'), 'Terms & Conditions specifies course access is not lifetime access');
assert(legalJs.includes('All course purchases are final and non-refundable'), 'Terms & Conditions specifies non-refundable policy');
assert(!legalJs.includes('Lifetime Platform Access'), 'Terms & Conditions does not contain obsolete Lifetime Platform Access');

// Course price consistency
assert(coursesDataJs.includes('price: 2999'), 'Course catalog defines price as NPR 2,999');
assert(courseDetailJs.includes('2999'), 'Course sales page renders NPR 2,999');
assert(legalJs.includes('2,999'), 'Legal documentation specifies NPR 2,999 course fee');

// Refund policy consistency
assert(legalJs.includes('Refund &amp; Cancellation Policy'), 'Legal terms link directly to Refund Policy');
assert(legalJs.includes('Duplicate or Accidental Excess Billing'), 'Refund policy specifies 100% refund for duplicate billing');
assert(legalJs.includes('48 to 72 business hours'), 'Refund policy specifies 48-72h technical resolution guarantee');
assert(courseDetailJs.includes('48 to 72 hours'), 'Course page FAQ aligns on 48-72h refund condition');

// ── 2. FOUNDER PRESENTATION & UNVERIFIED CLAIMS AUDIT ──────────
console.log('\n--- 2. Testing Founder Claims & Transparency ---');

const aakashDasJs = fs.readFileSync(path.join(rootDir, 'js/pages/aakashDas.js'), 'utf8');
const aboutJs = fs.readFileSync(path.join(rootDir, 'js/pages/about.js'), 'utf8');

// No fake "No. 1 in Nepal" or "Leading educator" superlatives
assert(!aboutJs.includes("Nepal's leading finance educator"), 'About page avoids unsupported "leading finance educator" claim');
assert(!aboutJs.includes("No. 1 in Nepal"), 'About page avoids "No. 1 in Nepal" claim');
assert(!aboutJs.includes("Join hundreds of Nepali youth"), 'About page avoids unverified student count claims');

// Transparent academic disclosures
assert(aakashDasJs.includes('not CA qualified'), 'Founder profile explicitly discloses CA coursework was discontinued (not CA qualified)');
assert(aakashDasJs.includes('Coventry University'), 'Founder profile documents BSc IT studies with Coventry University');
assert(aakashDasJs.includes('degree expected August 2028'), 'Founder profile specifies ongoing degree expected completion');
assert(aakashDasJs.includes('Transparency Note: Audience metrics represent combined followers across public social video channels'), 'Audience statistics include explicit transparency disclaimer');

// ── 3. CONTACT & STUDENT SUPPORT PATHWAYS ──────────────────────
console.log('\n--- 3. Testing Contact Pathways & WhatsApp Integration ---');

const contactJs = fs.readFileSync(path.join(rootDir, 'js/pages/contact.js'), 'utf8');

assert(contactJs.includes('Course Inquiries'), 'Contact page features dedicated Course Inquiries pathway');
assert(contactJs.includes('Verify Payment'), 'Contact page features dedicated Payment Verification pathway');
assert(contactJs.includes('Student Access Help'), 'Contact page features Student Access Help pathway');
assert(contactJs.includes('Feedback &amp; Media'), 'Contact page features Feedback & Media pathway');
assert(contactJs.includes('+977 9740269317'), 'Contact page lists official WhatsApp number (+977 9740269317)');
assert(contactJs.includes('itsaakashdas@gmail.com'), 'Contact page lists official email (itsaakashdas@gmail.com)');
assert(contactJs.includes('Sunday to Friday, 9:00 AM'), 'Contact page states realistic operating hours');

// ── 4. FINANCIAL DISCLAIMER & SEBON DISCLOSURE ──────────────────
console.log('\n--- 4. Testing Educational Disclaimers & SEBON Transparency ---');

assert(legalJs.includes('Securities Act, 2063'), 'Disclaimer references Securities Act 2063');
assert(/NOT(<\/strong>)?\s+registered,\s*licensed,\s*or\s*operating\s*as/i.test(legalJs), 'Disclaimer clearly states non-licensed status with SEBON');
assert(legalJs.includes('Past performance does not guarantee or indicate future results'), 'Disclaimer warns that past case studies do not guarantee future returns');
assert(courseDetailJs.includes('Important Educational &amp; Investment Risk Disclaimer'), 'Course sales page features prominent Educational & Risk Disclaimer');

// ── 5. LIVE HTTP ENDPOINT STATUS (PORT 8000) ───────────────────
console.log('\n--- 5. Testing Policy & Trust Endpoints (HTTP 200) ---');

function checkHttp(urlPath) {
  return new Promise((resolve) => {
    http.get({
      host: 'localhost',
      port: 8000,
      path: urlPath,
      headers: { 'User-Agent': 'Mozilla/5.0 (Part6TrustTest)' }
    }, (res) => {
      assert(res.statusCode === 200, `HTTP GET ${urlPath} returns 200 OK (got: ${res.statusCode})`);
      resolve();
    }).on('error', (err) => {
      assert(false, `HTTP GET ${urlPath} network error: ${err.message}`);
      resolve();
    });
  });
}

async function runHttpTests() {
  await checkHttp('/about');
  await checkHttp('/contact');
  await checkHttp('/aakash-das');
  await checkHttp('/terms');
  await checkHttp('/privacy');
  await checkHttp('/refund-policy');
  await checkHttp('/disclaimer');
  await checkHttp('/editorial-policy');
  await checkHttp('/faq');

  console.log('\n========================================================');
  console.log(`TRUST & CREDIBILITY SUITE: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${passedTests + failedTests})`);
  console.log('========================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runHttpTests();

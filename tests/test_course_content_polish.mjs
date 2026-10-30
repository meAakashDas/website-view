// ========================================================
// TEST SUITE: COURSE PAGE CONTENT CLEANUP & POLISH
// Verifies all requirements from ANTIGRAVITY USER REQUEST
// ========================================================
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('========================================================');
console.log('TEST SUITE: COURSE PAGE CONTENT CLEANUP & POLISH');
console.log('========================================================\n');

const { renderCourseDetailPage, initCourseDetailPage } = await import('../js/pages/courseDetail.js');
const courseDetailHtml = renderCourseDetailPage('nepse-stock-market-basics');
const staticNepseHtml = fs.readFileSync(path.join(rootDir, 'courses', 'nepse-stock-market-basics', 'index.html'), 'utf8');

let totalTests = 0;
let passedTests = 0;

function check(desc, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✓ ${desc}`);
  } catch (err) {
    console.error(`  ✗ FAIL: ${desc}`);
    console.error(`    ${err.message}`);
    process.exitCode = 1;
  }
}

// ── 1. Audience Badge & Redundant Statistics ───────────────────
console.log('--- 1. Testing Removed Badges & Redundant Statistics ---');

check('Audience badge "For Beginners & Retail Investors in Nepal" is removed from component HTML', () => {
  assert.ok(!courseDetailHtml.includes('For Beginners & Retail Investors in Nepal'));
  assert.ok(!courseDetailHtml.includes('For Beginners &amp; Retail Investors in Nepal'));
});

check('Audience badge is removed from pre-rendered static HTML', () => {
  assert.ok(!staticNepseHtml.includes('For Beginners & Retail Investors in Nepal'));
  assert.ok(!staticNepseHtml.includes('For Beginners &amp; Retail Investors in Nepal'));
});

check('Curriculum statistics lead line is removed from component HTML', () => {
  assert.ok(!courseDetailHtml.includes('5 in-depth modules · 21 structured lessons'));
  assert.ok(!courseDetailHtml.includes('in-depth modules ·'));
});

check('Curriculum statistics lead line is removed from pre-rendered static HTML', () => {
  assert.ok(!staticNepseHtml.includes('5 in-depth modules · 21 structured lessons'));
  assert.ok(!staticNepseHtml.includes('in-depth modules ·'));
});

// ── 2. Decorative Eyebrows ─────────────────────────────────────
console.log('\n--- 2. Testing Removed Decorative Eyebrows ---');

check('No "PRACTICAL LEARNING OUTCOMES" eyebrow label', () => {
  assert.ok(!courseDetailHtml.toLowerCase().includes('practical learning outcomes'));
  assert.ok(!staticNepseHtml.toLowerCase().includes('practical learning outcomes'));
});

check('No "LESSON BREAKDOWN" eyebrow label', () => {
  assert.ok(!courseDetailHtml.toLowerCase().includes('lesson breakdown'));
  assert.ok(!staticNepseHtml.toLowerCase().includes('lesson breakdown'));
});

check('No "COURSE PACKAGE" eyebrow label', () => {
  assert.ok(!courseDetailHtml.toLowerCase().includes('course package'));
  assert.ok(!staticNepseHtml.toLowerCase().includes('course package'));
});

check('No "GOT QUESTIONS?" eyebrow label', () => {
  assert.ok(!courseDetailHtml.toLowerCase().includes('got questions?'));
  assert.ok(!staticNepseHtml.toLowerCase().includes('got questions?'));
});

check('No "COMPLETE COURSE ACCESS" label in enrollment card', () => {
  assert.ok(!courseDetailHtml.includes('Complete Course Access'));
  assert.ok(!staticNepseHtml.includes('Complete Course Access'));
});

// ── 3. WhatsApp Enrollment Explanation & Lifetime Claims ───────
console.log('\n--- 3. Testing WhatsApp Explanation & Lifetime Claims Removal ---');

check('Long official WhatsApp enrollment explanation paragraph is removed', () => {
  const explanation = 'Chat directly with our team. Pay securely via eSewa, Khalti, connectIPS, or bank transfer with human-verified account activation.';
  assert.ok(!courseDetailHtml.includes(explanation));
  assert.ok(!staticNepseHtml.includes(explanation));
});

check('No "Lifetime Access" or equivalent claims in course page component HTML', () => {
  assert.ok(!courseDetailHtml.toLowerCase().includes('lifetime access'));
  assert.ok(!courseDetailHtml.toLowerCase().includes('lifetime platform access'));
});

check('No "Lifetime Access" or equivalent claims in static course HTML body', () => {
  // Check main content of static page (excluding external script bundles)
  const bodyStart = staticNepseHtml.indexOf('<main id="app">');
  const bodyEnd = staticNepseHtml.indexOf('</main>');
  const bodyContent = staticNepseHtml.substring(bodyStart, bodyEnd);
  assert.ok(!bodyContent.toLowerCase().includes('lifetime access'));
});

// ── 4. Free Demo Video Order & Focus ───────────────────────────
console.log('\n--- 4. Testing Free Demo Video Hierarchy ---');

check('Correct hierarchy: Breadcrumb -> Title -> Description -> Free Demo Video -> Video Player', () => {
  const bcPos = courseDetailHtml.indexOf('class="cd-breadcrumb');
  const titlePos = courseDetailHtml.indexOf('class="cd-course-title');
  const descPos = courseDetailHtml.indexOf('class="cd-course-desc');
  const demoPos = courseDetailHtml.indexOf('class="cd-demo-title"');
  const playerPos = courseDetailHtml.indexOf('id="cd-demo-video-container"');

  assert.ok(bcPos !== -1 && titlePos !== -1 && descPos !== -1 && demoPos !== -1 && playerPos !== -1);
  assert.ok(bcPos < titlePos, 'Breadcrumb precedes title');
  assert.ok(titlePos < descPos, 'Title precedes description');
  assert.ok(descPos < demoPos, 'Description precedes demo title');
  assert.ok(demoPos < playerPos, 'Demo title precedes video player');
});

check('Redundant demo metadata tag is removed', () => {
  assert.ok(!courseDetailHtml.includes('Lesson 01 Preview · 7m 41s · What is the Share Market & NEPSE'));
  assert.ok(!courseDetailHtml.includes('cd-demo-lesson-tag'));
  assert.ok(!staticNepseHtml.includes('Lesson 01 Preview · 7m 41s · What is the Share Market & NEPSE'));
});

// ── 5. Revised "What You Will Learn" Copy ─────────────────────
console.log('\n--- 5. Testing Revised "What You Will Learn" Descriptions ---');

check('NEPSE Foundations & Investing Process has exact revised copy', () => {
  assert.ok(courseDetailHtml.includes("Understand how Nepal's stock market works, including SEBON, DEMAT, MeroShare, C-ASBA, and broker trading accounts."));
});

check('Fundamental Analysis & Financial Reports has exact revised copy', () => {
  assert.ok(courseDetailHtml.includes("Learn to interpret company financial statements and evaluate EPS, P/E ratio, ROE, and book value."));
});

check('Technical Analysis & Price Charts has exact revised copy', () => {
  assert.ok(courseDetailHtml.includes("Understand candlestick patterns, market trends, support and resistance, and price-volume relationships."));
});

check('Risk Management & Trading Discipline has exact revised copy', () => {
  assert.ok(courseDetailHtml.includes("Learn position sizing, stop-loss planning, risk-to-reward assessment, and disciplined investment decision-making."));
});

// ── 6. Revised "What\'s Included" List ──────────────────────────
console.log('\n--- 6. Testing Revised "What\'s Included" 5-Item List ---');

check('Includes "Recorded Video Lessons" with exact copy', () => {
  assert.ok(courseDetailHtml.includes('Recorded Video Lessons'));
  assert.ok(courseDetailHtml.includes("Structured lessons covering Nepal's share market, fundamental analysis, technical analysis, and practical stock evaluation."));
});

check('Includes "Fundamental & Technical Analysis" with exact copy', () => {
  assert.ok(courseDetailHtml.includes('Fundamental &amp; Technical Analysis'));
  assert.ok(courseDetailHtml.includes("Learn to interpret financial statements, evaluate companies, and understand price charts."));
});

check('Includes "Excel & PDF Study Resources" with exact copy', () => {
  assert.ok(courseDetailHtml.includes('Excel &amp; PDF Study Resources'));
  assert.ok(courseDetailHtml.includes("Use the existing valuation worksheets, checklists, and study guides to support your learning."));
});

check('Includes "WhatsApp Student Support" with exact copy', () => {
  assert.ok(courseDetailHtml.includes('WhatsApp Student Support'));
  assert.ok(courseDetailHtml.includes("Get assistance with course-related questions through the existing student support channel, if currently provided."));
});

check('Includes "Learn Across Your Devices" with exact copy', () => {
  assert.ok(courseDetailHtml.includes('Learn Across Your Devices'));
  assert.ok(courseDetailHtml.includes("Access the existing learning platform on supported phones, tablets, and computers."));
});

// ── 7. Collapsible FAQ Implementation ──────────────────────────
console.log('\n--- 7. Testing Collapsible FAQ Accordion Structure & Content ---');

check('FAQ has exact 5 questions', () => {
  assert.ok(courseDetailHtml.includes('Is this course suitable for beginners?'));
  assert.ok(courseDetailHtml.includes('What does the course include?'));
  assert.ok(courseDetailHtml.includes('How do I pay and access the course?'));
  assert.ok(courseDetailHtml.includes('What is the refund policy?'));
  assert.ok(courseDetailHtml.includes('Does this course guarantee investment profits?'));
});

check('FAQ answers have exact revised content', () => {
  assert.ok(courseDetailHtml.includes("Yes. The course introduces Nepal's share market and investing process before progressing to company analysis, chart reading, and risk management."));
  assert.ok(courseDetailHtml.includes("The course includes recorded lessons, fundamental and technical analysis instruction, existing Excel/PDF study resources, and the student support currently offered."));
  assert.ok(courseDetailHtml.includes("Contact the enrollment team through the official WhatsApp button to receive payment instructions."));
  assert.ok(courseDetailHtml.includes("Refunds are governed by the existing <a href=\"/refund-policy\">Refund &amp; Cancellation Policy</a>."));
  assert.ok(courseDetailHtml.includes("No. RisePaisa provides financial education, not guaranteed returns or personalized investment recommendations."));
});

check('Refund policy link points to real existing route /refund-policy', () => {
  assert.ok(courseDetailHtml.includes('href="/refund-policy"'));
  assert.ok(!courseDetailHtml.includes('localhost:8000/refund-policy'));
});

check('All FAQ items are collapsed by default in initial markup', () => {
  // Matches all aria-expanded attributes inside #course-faq-accordion
  const faqSection = courseDetailHtml.substring(courseDetailHtml.indexOf('id="course-faq-accordion"'));
  const headerExpandedMatches = faqSection.match(/aria-expanded="([^"]+)"/g) || [];
  assert.strictEqual(headerExpandedMatches.length, 5, 'Found 5 FAQ header buttons');
  for (const m of headerExpandedMatches) {
    assert.strictEqual(m, 'aria-expanded="false"', 'Every FAQ item starts collapsed');
  }
});

// ── 8. Educational Disclaimer ──────────────────────────────────
console.log('\n--- 8. Testing Educational Disclaimer ---');

check('Disclaimer has exact required wording and links', () => {
  const expected = 'This course is for educational purposes only. It does not guarantee investment returns or provide personalized investment advice. Investing in NEPSE involves risk, including possible loss of capital. Read our <a href="/disclaimer">Full Disclaimer</a> and <a href="/terms">Terms &amp; Conditions</a>.';
  assert.ok(courseDetailHtml.includes(expected));
});

// ── 9. Pricing & Sidebar Card ──────────────────────────────────
console.log('\n--- 9. Testing Pricing & Sidebar Card Cleanliness ---');

check('Sidebar card displays NPR 2,999', () => {
  assert.ok(courseDetailHtml.includes('2,999'));
});

check('Sidebar card has primary WhatsApp enrollment button', () => {
  assert.ok(courseDetailHtml.includes('id="buy-course-whatsapp-btn"'));
  assert.ok(courseDetailHtml.includes('Buy Course via WhatsApp'));
});

check('Sidebar card has secondary Chat on WhatsApp button', () => {
  assert.ok(courseDetailHtml.includes('id="ask-question-btn"'));
  assert.ok(courseDetailHtml.includes('Chat on WhatsApp'));
});

check('Sidebar card lists accepted payment rails', () => {
  assert.ok(courseDetailHtml.includes('eSewa'));
  assert.ok(courseDetailHtml.includes('Khalti'));
  assert.ok(courseDetailHtml.includes('connectIPS'));
  assert.ok(courseDetailHtml.includes('Bank Transfer'));
});

console.log('\n--------------------------------------------------------');
console.log(`Results: ${passedTests}/${totalTests} assertions passed (${totalTests - passedTests} failed)`);
console.log('--------------------------------------------------------\n');

if (passedTests !== totalTests) {
  process.exit(1);
}


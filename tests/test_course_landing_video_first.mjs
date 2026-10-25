// ========================================================
// RISEPAISA COURSE LANDING PAGE TWO-COLUMN LAYOUT TEST SUITE
// Verifies:
// 1. Two-column desktop grid (.cd-layout-grid, .cd-main-column ~65%, .cd-sidebar-column ~35%)
// 2. Demo video positioned prominently on left below course intro
// 3. Right column purchase panel with price, WhatsApp buy button & contact button
// 4. Compact instructor row and highlights
// 5. Sticky purchase card on desktop
// 6. Mobile stacking order (Title -> Video -> Price/Buy -> WhatsApp -> Instructor -> Curriculum -> Details)
// 7. Responsive CSS tokens and rules across viewports
// ========================================================
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('TEST SUITE: COURSE LANDING PAGE TWO-COLUMN LAYOUT');
console.log('========================================================\n');

const { renderCourseDetailPage } = await import('../js/pages/courseDetail.js');
const courseDetailHtml = renderCourseDetailPage('nepse-stock-market-basics');
const cssContent = fs.readFileSync(path.join(rootDir, 'css', 'pages.css'), 'utf8');

// ── 1. Two-Column Desktop Layout Structure ───────────────────
console.log('--- 1. Testing Two-Column Grid and Content Hierarchy ---');

assert(courseDetailHtml.includes('class="cd-layout-grid"'), '1. Main two-column grid container (.cd-layout-grid) exists');
assert(courseDetailHtml.includes('class="cd-main-column"'), '2. Left main content column (.cd-main-column) exists');
assert(courseDetailHtml.includes('class="cd-sidebar-column"'), '3. Right purchase sidebar column (.cd-sidebar-column) exists');

const introPos = courseDetailHtml.indexOf('id="course-intro-block"');
const breadcrumbPos = courseDetailHtml.indexOf('class="cd-breadcrumb');
const titlePos = courseDetailHtml.indexOf('class="cd-course-title');
const descPos = courseDetailHtml.indexOf('class="cd-course-desc');
const demoPos = courseDetailHtml.indexOf('id="course-demo"');
const instructorPos = courseDetailHtml.indexOf('id="course-instructor-row"');
const highlightsPos = courseDetailHtml.indexOf('id="course-highlights"');
const curriculumPos = courseDetailHtml.indexOf('id="course-curriculum"');
const supportingPos = courseDetailHtml.indexOf('id="course-supporting"');
const sidebarPos = courseDetailHtml.indexOf('id="course-sidebar"');
const purchaseCardPos = courseDetailHtml.indexOf('id="purchase-card"');

assert(introPos !== -1, '4. Introductory information block exists');
assert(breadcrumbPos !== -1, '5. Compact breadcrumb navigation exists');
assert(titlePos !== -1, '6. Course title exists');
assert(descPos !== -1, '7. Course description exists');
assert(demoPos !== -1, '8. Demo video section exists');
assert(instructorPos !== -1, '9. Instructor information exists');
assert(highlightsPos !== -1, '10. Course highlights section exists');
assert(curriculumPos !== -1, '11. Course curriculum section exists');
assert(supportingPos !== -1, '12. Course supporting content section exists');
assert(purchaseCardPos !== -1, '13. Course purchase card exists in sidebar');

assert(breadcrumbPos < titlePos, 'Left Column Order: Breadcrumb is before course title');
assert(titlePos < descPos, 'Left Column Order: Course title is before course description');
assert(descPos < demoPos, 'Left Column Order: Course description is immediately followed by demo video');
assert(demoPos < instructorPos, 'Left Column Order: Demo video is before instructor information');
assert(instructorPos < highlightsPos, 'Left Column Order: Instructor information is before course highlights');
assert(highlightsPos < curriculumPos, 'Left Column Order: Course highlights are before curriculum');
assert(curriculumPos < supportingPos, 'Left Column Order: Curriculum is before inclusions and FAQs');
assert(sidebarPos > introPos && purchaseCardPos > sidebarPos, 'Right Column: Purchase card sits in sidebar column alongside main stream');

// Ensure no instructor cards or feature panels appear between description and demo video
const contentBetweenDescAndDemo = courseDetailHtml.substring(descPos, demoPos);
assert(!contentBetweenDescAndDemo.includes('cd-instructor-row'), 'No instructor card placed between description and demo video');
assert(!contentBetweenDescAndDemo.includes('cd-compact-highlights'), 'No highlights panel placed between description and demo video');
assert(!contentBetweenDescAndDemo.includes('cd-purchase-card'), 'No purchase card placed between description and demo video');

// ── 2. Demo Video Main Focus ─────────────────────────────────
console.log('\n--- 2. Testing Demo Video Main Focus ---');

assert(courseDetailHtml.includes('id="cd-demo-iframe"'), 'Includes real demo iframe with id="cd-demo-iframe"');
assert(courseDetailHtml.includes('ziVeMxMF4e8'), 'Uses real configured YouTube demo video ID ziVeMxMF4e8');
assert(courseDetailHtml.includes('Free Demo Video'), 'Contains clear heading "Free Demo Video"');
assert(!courseDetailHtml.includes('18m 42s Free Preview'), 'Does not contain removed "18m 42s Free Preview" runtime label');
assert(!courseDetailHtml.includes('Open in Learning Player'), 'Does not contain removed "Open in Learning Player" link');
assert(!courseDetailHtml.includes('autoplay=1'), 'Does not autoplay with sound');

// ── 3. Instructor Profile Row ────────────────────────────────
console.log('\n--- 3. Testing Compact Instructor Row ---');

assert(courseDetailHtml.includes('class="cd-instructor-avatar"'), 'Renders instructor circular avatar');
assert(courseDetailHtml.includes('Aakash Das'), 'Displays instructor name Aakash Das');
assert(courseDetailHtml.includes('Founder of RisePaisa') || courseDetailHtml.includes('Founder &amp; Lead Analyst'), 'Displays instructor role');
assert(courseDetailHtml.includes('With guest technical sessions by NEPSE veteran traders'), 'Displays co-instructor note');

// ── 4. Compact Course Highlights ─────────────────────────────
console.log('\n--- 4. Testing Compact Course Highlights ---');

assert(courseDetailHtml.includes('20+ Hours'), 'Includes "20+ Hours" highlight');
assert(courseDetailHtml.includes('Structured video lessons'), 'Includes "Structured video lessons" subtext');
assert(courseDetailHtml.includes('Beginner to Advanced'), 'Includes "Beginner to Advanced" highlight');
assert(courseDetailHtml.includes('No prior experience needed'), 'Includes "No prior experience needed" subtext');
assert(courseDetailHtml.includes('Practical NEPSE'), 'Includes "Practical NEPSE" highlight');
assert(courseDetailHtml.includes('Real listed-company analysis'), 'Includes "Real listed-company analysis" subtext');
assert(courseDetailHtml.includes('What You Will Learn'), 'Learning outcomes section is present');

// ── 5. Pricing & Purchase CTAs (Right Column) ────────────────
console.log('\n--- 5. Testing Right Column Pricing & Purchase CTAs ---');

assert(courseDetailHtml.includes('id="purchase-card"'), 'Renders purchase card with id="purchase-card"');
assert(courseDetailHtml.includes('NPR 2,999'), 'Displays correct price NPR 2,999');
assert(courseDetailHtml.includes('id="buy-course-whatsapp-btn"'), 'Renders primary purchase button with id="buy-course-whatsapp-btn"');
assert(courseDetailHtml.includes('id="ask-question-btn"'), 'Renders advisor button with id="ask-question-btn"');
assert(courseDetailHtml.includes('9779740269317'), 'WhatsApp button targets configured RisePaisa WhatsApp number');
assert(courseDetailHtml.includes('Included with Enrollment'), 'Includes course package / enrollment benefits in sidebar card');
assert(courseDetailHtml.includes('cd-card-trust-badge'), 'Includes trust reassurance badge');
assert(courseDetailHtml.includes('id="mobile-sticky-bar"'), 'Preserves mobile sticky bar container');

// ── 6. CSS Rules & Layout Integrity ──────────────────────────
console.log('\n--- 6. Testing Responsive CSS Rules ---');

assert(cssContent.includes('.cd-page'), 'Contains .cd-page styling');
assert(cssContent.includes('.cd-container'), 'Contains .cd-container centering rule');
assert(cssContent.includes('.cd-layout-grid'), 'Contains .cd-layout-grid styling');
assert(cssContent.includes('.cd-main-column'), 'Contains .cd-main-column styling');
assert(cssContent.includes('.cd-sidebar-column'), 'Contains .cd-sidebar-column styling');
assert(cssContent.includes('position: sticky'), 'Sidebar column is sticky on desktop');
assert(cssContent.includes('.cd-demo-section'), 'Contains .cd-demo-section styling');
assert(cssContent.includes('.cd-instructor-row'), 'Contains .cd-instructor-row styling');
assert(cssContent.includes('.cd-compact-highlights'), 'Contains .cd-compact-highlights styling');
assert(cssContent.includes('.cd-purchase-card'), 'Contains .cd-purchase-card styling');
assert(cssContent.includes('.cd-card-thumb-container'), 'Contains .cd-card-thumb-container styling');
assert(cssContent.includes('.cd-card-included-section'), 'Contains .cd-card-included-section styling');
assert(cssContent.includes('.cd-cta-group'), 'Contains .cd-cta-group styling');
assert(cssContent.includes('@media (max-width: 1023px)'), 'Contains 1023px mobile stacking breakpoint');
assert(cssContent.includes('display: contents'), 'Uses display: contents for mobile stacking');
assert(cssContent.includes('@media (max-width: 768px)'), 'Contains 768px mobile breakpoint');
assert(cssContent.includes('@media (max-width: 430px)'), 'Contains 430px compact mobile breakpoint');
assert(cssContent.includes('@media (max-width: 320px)'), 'Contains 320px ultra-compact mobile breakpoint');

console.log('\n--------------------------------------------------------');
console.log(`Results: ${passedTests}/${totalTests} assertions passed (${failedTests} failed)`);
console.log('--------------------------------------------------------\n');

if (failedTests > 0) {
  process.exit(1);
}

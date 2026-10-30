import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

console.log('========================================================');
console.log('RISEPAISA CONTACT, HOMEPAGE & TERMS VERIFICATION SUITE');
console.log('========================================================\n');

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✓ ${description}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${description}\n    ${err.message}`);
    failed++;
  }
}

// ── 1. CONTACT PAGE REORGANIZATION & REFINEMENT ────────────────
console.log('--- 1. Testing Contact Page Order & Copy ---');

const contactJs = fs.readFileSync(path.join(rootDir, 'js/pages/contact.js'), 'utf8');
const contactHtml = fs.readFileSync(path.join(rootDir, 'contact/index.html'), 'utf8');

test('Section 1 is Official Social Profiles', () => {
  const socialIdx = contactJs.indexOf('id="contact-social-section"');
  const inquiriesIdx = contactJs.indexOf('id="contact-support-pathways"');
  assert(socialIdx !== -1, 'Social profiles section exists');
  assert(inquiriesIdx !== -1, 'Inquiries section exists');
  assert(socialIdx < inquiriesIdx, 'Official Social Profiles appears BEFORE Contact RisePaisa');
});

test('Section 1 copy matches exact requirement', () => {
  assert(contactJs.includes('PUBLIC COMMUNITIES'), 'Eyebrow is PUBLIC COMMUNITIES');
  assert(contactJs.includes('<h2>Official Social Profiles</h2>'), 'Heading is Official Social Profiles');
  assert(contactJs.includes('<p>Follow RisePaisa and Aakash Das.</p>'), 'Description is Follow RisePaisa and Aakash Das.');
  assert(contactJs.includes('assets/images/risepaisa.jpg'), 'RisePaisa profile image is present');
  assert(contactJs.includes('assets/images/aakash-das-founder-risepaisa.jpg'), 'Aakash Das profile image is present');
});

test('Section 2 copy matches exact requirement', () => {
  assert(contactJs.includes('CONTACT &amp; SUPPORT'), 'Eyebrow is CONTACT & SUPPORT');
  assert(contactJs.includes('<h2>Contact RisePaisa</h2>'), 'Heading is Contact RisePaisa');
  assert(contactJs.includes('<p>Get help with courses, payments, student access, or feedback.</p>'), 'Description matches');
  assert(contactJs.includes('CONTACT OPTIONS'), 'Inquiry eyebrow is CONTACT OPTIONS');
  assert(contactJs.includes('<h3>How Can We Help?</h3>'), 'Inquiry heading is How Can We Help?');
});

test('All 4 inquiry cards are present with correct copy and links', () => {
  assert(contactJs.includes('Course Inquiries'), 'Course Inquiries card present');
  assert(contactJs.includes('Questions about the NEPSE course? Contact us before enrolling.'), 'Course Inquiries text correct');
  assert(contactJs.includes('Ask via WhatsApp'), 'Course Inquiries button correct');

  assert(contactJs.includes('Verify Payment'), 'Verify Payment card present');
  assert(contactJs.includes('Submit your payment receipt and transaction ID.'), 'Verify Payment text correct');
  assert(contactJs.includes('Verify via WhatsApp'), 'Verify Payment button correct');

  assert(contactJs.includes('Student Access Help'), 'Student Access Help card present');
  assert(contactJs.includes('Need help with your course or account?'), 'Student Access Help text correct');
  assert(contactJs.includes('Student Support'), 'Student Access Help button correct');

  assert(contactJs.includes('Feedback &amp; Media'), 'Feedback & Media card present');
  assert(contactJs.includes('Report errors, share feedback, or discuss partnerships.'), 'Feedback & Media text correct');
  assert(contactJs.includes('Email Editorial Desk'), 'Feedback & Media button correct');
});

test('Verified Official Channels panel has accurate operational details', () => {
  assert(contactJs.includes('Verified Official Channels'), 'Verified Official Channels title present');
  assert(contactJs.includes('Contact RisePaisa only through the official channels listed below.'), 'Panel description correct');
  assert(contactJs.includes('+977 9740269317'), 'WhatsApp number correct');
  assert(contactJs.includes('itsaakashdas@gmail.com'), 'Email correct');
  assert(contactJs.includes('Sunday to Friday, 9:00 AM – 6:00 PM NPT'), 'Schedule correct');
  assert(contactJs.includes('Kathmandu, Nepal'), 'Location correct');
});

test('Static pre-rendered contact HTML has reversed section order', () => {
  const socialIdx = contactHtml.indexOf('id="contact-social-section"');
  const inquiriesIdx = contactHtml.indexOf('id="contact-support-pathways"');
  assert(socialIdx !== -1 && inquiriesIdx !== -1, 'Both sections in static HTML');
  assert(socialIdx < inquiriesIdx, 'Static HTML has social profiles first, support pathways second');
});

// ── 2. HOMEPAGE FEATURED COURSE CARD ────────────────────────────
console.log('\n--- 2. Testing Homepage Featured Course Card ---');

const homeJs = fs.readFileSync(path.join(rootDir, 'js/pages/home.js'), 'utf8');
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

test('Instructor row is removed from homepage flagship course card', () => {
  assert(!homeJs.includes('flagship-instructor-strip'), 'home.js does not contain flagship-instructor-strip');
  assert(!indexHtml.includes('flagship-instructor-strip'), 'index.html does not contain flagship-instructor-strip');
  assert(!homeJs.includes('INSTRUCTOR:'), 'INSTRUCTOR: label is removed from flagship course card');
  assert(!indexHtml.includes('INSTRUCTOR:'), 'INSTRUCTOR: label is absent from static index.html');
});

test('Flagship course thumbnail, title, price, and actions remain intact', () => {
  assert(homeJs.includes('${nepseCourse.title}'), 'Course title interpolated in home.js');
  assert(indexHtml.includes('Share Market Full Course (NEPSE)'), 'Course title present in static index.html');
  assert(homeJs.includes('coursePriceFormatted') || homeJs.includes('2,999'), 'Course fee NPR 2,999 present in home.js');
  assert(indexHtml.includes('2,999'), 'Course fee NPR 2,999 present in static index.html');
  assert(homeJs.includes('Enroll via WhatsApp'), 'WhatsApp CTA button present');
  assert(homeJs.includes('Explore Syllabus'), 'Explore Syllabus button present');
});

// ── 3. TERMS & CONDITIONS (ONE-YEAR VALIDITY & NON-REFUNDABLE) ──
console.log('\n--- 3. Testing Terms & Conditions and Exclusivity ---');

const legalJs = fs.readFileSync(path.join(rootDir, 'js/pages/legal.js'), 'utf8');
const termsHtml = fs.readFileSync(path.join(rootDir, 'terms/index.html'), 'utf8');

test('Terms Section 4 defines Course Access and Validity (1-year access)', () => {
  assert(legalJs.includes('<h2>4. Course Access and Validity</h2>'), 'Section 4 title is Course Access and Validity');
  assert(legalJs.includes('Access to purchased courses is provided for a period of one (1) year. Course access is not lifetime access. Once the applicable access period expires, access to the course content may be discontinued.'), 'Section 4 policy text matches exact requirement');
  assert(termsHtml.includes('Course Access and Validity'), 'Static terms HTML contains Section 4');
});

test('Terms Section 10 defines Refund and Cancellation Policy (non-refundable)', () => {
  assert(legalJs.includes('<h2>10. Refund and Cancellation Policy</h2>'), 'Section 10 title is Refund and Cancellation Policy');
  assert(legalJs.includes('All course purchases are final and non-refundable. Once payment has been completed and course enrollment has been processed, the amount paid will not be refunded. Please review the course information and available details carefully before making a purchase.'), 'Section 10 policy text matches exact requirement');
  assert(termsHtml.includes('Refund and Cancellation Policy'), 'Static terms HTML contains Section 10');
});

test('No course lifetime access claims remain on public site pages', () => {
  assert(!homeJs.includes('Lifetime Access'), 'No Lifetime Access in home.js');
  assert(!indexHtml.includes('Lifetime Access'), 'No Lifetime Access in index.html');
  const courseDetailJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseDetail.js'), 'utf8');
  assert(!courseDetailJs.includes('Lifetime Access'), 'No Lifetime Access in courseDetail.js');
  assert(!legalJs.includes('Lifetime Platform Access'), 'No Lifetime Platform Access in legal.js');
  assert(!legalJs.includes('confirmed lifetime access'), 'No confirmed lifetime access in legal.js');
});

test('Exclusivity Rule: one-year validity and non-refundable course terms are strictly on Terms & Conditions', () => {
  // Course sales page, home page, contact page should NOT have "1-year course access", "One-year validity", "No lifetime access", "Non-refundable course"
  const courseDetailJs = fs.readFileSync(path.join(rootDir, 'js/pages/courseDetail.js'), 'utf8');
  
  assert(!homeJs.toLowerCase().includes('1-year course access'), 'Home does not say 1-year course access');
  assert(!homeJs.toLowerCase().includes('one-year validity'), 'Home does not say one-year validity');
  assert(!homeJs.toLowerCase().includes('no lifetime access'), 'Home does not say no lifetime access');
  assert(!homeJs.toLowerCase().includes('non-refundable course'), 'Home does not say non-refundable course');

  assert(!courseDetailJs.toLowerCase().includes('1-year course access'), 'Course detail does not say 1-year course access');
  assert(!courseDetailJs.toLowerCase().includes('one-year validity'), 'Course detail does not say one-year validity');
  assert(!courseDetailJs.toLowerCase().includes('no lifetime access'), 'Course detail does not say no lifetime access');
  assert(!courseDetailJs.toLowerCase().includes('non-refundable course'), 'Course detail does not say non-refundable course');

  assert(!contactJs.toLowerCase().includes('1-year course access'), 'Contact does not say 1-year course access');
  assert(!contactJs.toLowerCase().includes('no lifetime access'), 'Contact does not say no lifetime access');
});

console.log('\n========================================================');
console.log(`TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log('========================================================\n');

if (failed > 0) {
  process.exit(1);
}

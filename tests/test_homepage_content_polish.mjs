// ========================================================
// RisePaisa Homepage Content Cleanup & Polish Test Suite
// ========================================================

import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const { renderHomePage } = await import('../js/pages/home.js');
const homeHtml = renderHomePage();
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

let passedCount = 0;
let failedCount = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passedCount++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message}`);
    failedCount++;
  }
}

console.log('========================================================');
console.log('TEST SUITE: HOMEPAGE CONTENT CLEANUP & POLISH');
console.log('========================================================\n');

console.log('--- 1. Testing Hero Section Simplification ---');

test('Hero eyebrow is "FINANCIAL EDUCATION FOR NEPAL"', () => {
  assert.ok(homeHtml.includes('FINANCIAL EDUCATION FOR NEPAL'), 'Component HTML contains exact hero eyebrow');
  assert.ok(indexHtml.includes('FINANCIAL EDUCATION FOR NEPAL'), 'Static index.html contains exact hero eyebrow');
});

test('Hero heading is "Understand Money. Make Better Financial Decisions."', () => {
  assert.ok(homeHtml.includes('Understand Money.'), 'Hero heading line 1');
  assert.ok(homeHtml.includes('Make Better Financial Decisions.'), 'Hero heading line 2');
});

test('Hero description matches exact revised copy', () => {
  const expectedDesc = 'Learn about investing, taxation, and personal finance in Nepal through practical guides, free calculators, and structured courses.';
  assert.ok(homeHtml.includes(expectedDesc), 'Component HTML contains exact hero description');
  assert.ok(indexHtml.includes(expectedDesc), 'Static index.html contains exact hero description');
});

test('Hero actions: primary points to learning resources and secondary to calculators', () => {
  const heroPrimaryMatch = homeHtml.match(/id="hero-nepse-course-cta"[^>]*href="([^"]+)"/) || homeHtml.match(/href="([^"]+)"[^>]*id="hero-nepse-course-cta"/);
  assert.ok(heroPrimaryMatch, 'Hero learning resources CTA found');
  assert.strictEqual(heroPrimaryMatch[1], '/courses/nepse-stock-market-basics/learn?lesson=lesson-1');
  assert.ok(homeHtml.includes('Explore Learning Resources'), 'Hero primary CTA label');

  const heroSecondaryMatch = homeHtml.match(/id="hero-free-tools-cta"[^>]*href="([^"]+)"/) || homeHtml.match(/href="([^"]+)"[^>]*id="hero-free-tools-cta"/);
  assert.ok(heroSecondaryMatch, 'Hero calculators CTA found');
  assert.strictEqual(heroSecondaryMatch[1], '/calculators');
  assert.ok(homeHtml.includes('Financial Calculators'), 'Hero secondary CTA label');
});

test('Hero removed elements: Nepali kicker and trust/stats bar are absent', () => {
  assert.ok(!homeHtml.includes('नेपालमै आधारित वित्तीय शिक्षा र औजारहरू'), 'Nepali kicker removed from home.js');
  assert.ok(!indexHtml.includes('नेपालमै आधारित वित्तीय शिक्षा र औजारहरू'), 'Nepali kicker removed from index.html');

  assert.ok(!homeHtml.includes('REAL FINANCE FOR NEPAL · TRUSTED BY NEPALI YOUTH'), 'Trust bar uppercase label removed from home.js');
  assert.ok(!indexHtml.includes('REAL FINANCE FOR NEPAL · TRUSTED BY NEPALI YOUTH'), 'Trust bar uppercase label removed from index.html');

  assert.ok(!homeHtml.includes('id="trust-section"'), 'Trust section removed from home.js');
  assert.ok(!indexHtml.includes('id="trust-section"'), 'Trust section removed from index.html');

  assert.ok(!homeHtml.includes('Hours of NEPSE Lessons'), 'Stats item removed');
  assert.ok(!homeHtml.includes('Nepal-Focused Curriculum'), 'Stats item removed');
});

console.log('\n--- 2. Testing Flagship NEPSE Course Section Simplification ---');

test('Flagship eyebrow is "FEATURED COURSE"', () => {
  assert.ok(homeHtml.includes('FEATURED COURSE'), 'Flagship eyebrow in home.js');
  assert.ok(indexHtml.includes('FEATURED COURSE'), 'Flagship eyebrow in index.html');
});

test('Flagship heading is "Master the Nepal Share Market"', () => {
  assert.ok(homeHtml.includes('Master the Nepal Share Market'), 'Flagship title in home.js');
  assert.ok(indexHtml.includes('Master the Nepal Share Market'), 'Flagship title in index.html');
});

test('Flagship description matches exact copy', () => {
  const expectedDesc = 'Learn share market fundamentals, company analysis, technical charts, and risk management through practical NEPSE-focused lessons.';
  assert.ok(homeHtml.includes(expectedDesc), 'Flagship description in home.js');
  assert.ok(indexHtml.includes(expectedDesc), 'Flagship description in index.html');
});

test('Flagship cover badge has compact course-information line', () => {
  const expectedBadge = '20+ Hours of Lessons · Practical NEPSE Analysis';
  assert.ok(homeHtml.includes(expectedBadge), 'Cover badge in home.js');
  assert.ok(indexHtml.includes(expectedBadge), 'Cover badge in index.html');
});

test('Flagship removed elements: highlights strip, metadata badges, audience callout, payment bar, and lifetime claims are absent', () => {
  assert.ok(!homeHtml.includes('8 Modules · 20+ Hours · Lifetime Access'), 'Highlights strip removed');
  assert.ok(!homeHtml.includes('Comprehensive Curriculum'), 'Comprehensive Curriculum badge removed');
  assert.ok(!homeHtml.includes('Confirmed Lifetime Access'), 'Confirmed Lifetime Access badge removed');
  assert.ok(!homeHtml.includes('One-time payment · Confirmed lifetime access'), 'Lifetime access terms removed');
  assert.ok(!homeHtml.includes('Intended Audience'), 'Audience callout removed');
  assert.ok(!homeHtml.includes('flagship-payment-bar'), 'Payment bar removed');
  assert.ok(!homeHtml.includes('Accepted in Nepal'), 'Accepted payment methods removed');

  // Check static HTML
  assert.ok(!indexHtml.includes('8 Modules · 20+ Hours · Lifetime Access'), 'Highlights strip removed from index.html');
  assert.ok(!indexHtml.includes('Confirmed Lifetime Access'), 'Confirmed Lifetime Access removed from index.html');
  assert.ok(!indexHtml.includes('Intended Audience'), 'Audience callout removed from index.html');
});

test('Flagship benefits list contains exactly the 4 verified topics', () => {
  assert.ok(homeHtml.includes('Fundamental and technical analysis'), 'Benefit 1');
  assert.ok(homeHtml.includes('NEPSE company evaluation'), 'Benefit 2');
  assert.ok(homeHtml.includes('Risk management and trading discipline'), 'Benefit 3');
  assert.ok(homeHtml.includes('Existing Excel and PDF study resources'), 'Benefit 4');

  // Verify removed items
  assert.ok(!homeHtml.includes('Weekly Live Q&amp;A Sessions'), 'Unverified benefit removed');
  assert.ok(!homeHtml.includes('Practical Stock Selection Framework'), 'Redundant benefit removed');
});

test('Flagship pricing area has single price display and compact buttons', () => {
  assert.ok(homeHtml.includes('2,999'), 'Price 2,999 present');
  assert.ok(homeHtml.includes('id="flagship-buy-course-btn"'), 'Buy button present');
  assert.ok(homeHtml.includes('Enroll via WhatsApp'), 'Enroll label present');
  assert.ok(homeHtml.includes('id="flagship-explore-course-btn"'), 'Explore button present');
  assert.ok(homeHtml.includes('Explore Syllabus'), 'Explore syllabus label present');
});

console.log('\n--- 3. Testing Financial Calculators Section Simplification ---');

test('Calculators eyebrow is "FREE FINANCIAL TOOLS"', () => {
  assert.ok(homeHtml.includes('FREE FINANCIAL TOOLS'), 'Eyebrow in home.js');
  assert.ok(indexHtml.includes('FREE FINANCIAL TOOLS'), 'Eyebrow in index.html');
});

test('Calculators heading and description match exact copy', () => {
  assert.ok(homeHtml.includes('Financial Calculators'), 'Heading in home.js');
  assert.ok(homeHtml.includes('Calculate taxes, loan payments, savings growth, and NEPSE trading costs using tools designed for Nepal.'), 'Description in home.js');
});

test('5 Calculator cards have exact 1-sentence descriptions', () => {
  assert.ok(homeHtml.includes("Estimate salary tax and applicable deductions using Nepal's relevant tax rules."), 'Tax calc desc');
  assert.ok(homeHtml.includes("Project potential investment growth using monthly contributions and compound returns."), 'SIP calc desc');
  assert.ok(homeHtml.includes("Calculate monthly installments, total interest, and loan repayment schedules."), 'EMI calc desc');
  assert.ok(homeHtml.includes("Estimate deposit interest and maturity value using the selected rate and compounding method."), 'FD calc desc');
  assert.ok(homeHtml.includes("Estimate transaction costs, brokerage charges, and applicable capital gains tax."), 'NEPSE calc desc');
});

test('Decorative badges are removed from calculator cards', () => {
  assert.ok(!homeHtml.includes('Smart Utilities'), '"Smart Utilities" eyebrow removed');
  assert.ok(!homeHtml.includes('FY 2082/83</span>'), 'FY badge removed from card top');
  assert.ok(!homeHtml.includes('>Compounding</span>'), 'Compounding badge removed');
  assert.ok(!homeHtml.includes('>Banking</span>'), 'Banking badge removed');
  assert.ok(!homeHtml.includes('>Bank Savings</span>'), 'Bank Savings badge removed');
  assert.ok(!homeHtml.includes('>Stock Market</span>'), 'Stock Market badge removed');
});

test('Calculators bottom action is "Explore All Calculators"', () => {
  assert.ok(homeHtml.includes('Explore All Calculators'), 'Clean secondary action in home.js');
  assert.ok(!homeHtml.includes('Explore All 12 Calculators'), 'Unnecessary count removed from CTA');
});

console.log('\n--- 4. Testing Learn and Explore Section Simplification ---');

test('Learn & Explore eyebrow is "FREE LEARNING RESOURCES"', () => {
  assert.ok(homeHtml.includes('FREE LEARNING RESOURCES'), 'Eyebrow in home.js');
  assert.ok(indexHtml.includes('FREE LEARNING RESOURCES'), 'Eyebrow in index.html');
  assert.ok(!homeHtml.includes('Free Knowledge Hub'), 'Obsolete eyebrow removed');
});

test('Learn & Explore heading and description match exact copy', () => {
  assert.ok(homeHtml.includes('<h2>Learn and Explore</h2>'), 'Heading in home.js');
  assert.ok(homeHtml.includes('Explore practical guides, financial concepts, and research tailored to Nepal.'), 'Description in home.js');
});

test('Group 1 (Structured Academy) has exact description and clean footer', () => {
  assert.ok(homeHtml.includes('Follow structured learning paths covering personal finance, investing, taxation, and NEPSE.'), 'Group 1 desc');
  assert.ok(homeHtml.includes('Explore Academy'), 'Clean footer link');
  assert.ok(!homeHtml.includes('13 guided curriculum paths'), 'Unverified claim removed');
  assert.ok(!homeHtml.includes('Explore 13 Academy Paths'), 'Unverified count removed from footer');
});

test('Group 2 (Guides & Glossary) has exact description and clean footer', () => {
  assert.ok(homeHtml.includes('Learn common financial tasks in Nepal through step-by-step guides and simple explanations.'), 'Group 2 desc');
  assert.ok(homeHtml.includes('Browse Guides'), 'Clean footer link');
  assert.ok(!homeHtml.includes('60+ terms'), 'Unverified count removed');
  assert.ok(!homeHtml.includes('60+ Nepali financial terms'), 'Unverified count removed');
});

test('Group 3 (Articles & Insights) has exact description and clean footer', () => {
  assert.ok(homeHtml.includes("Read practical articles on Nepal's financial system, investing, and personal finance."), 'Group 3 desc');
  assert.ok(homeHtml.includes('Read Articles'), 'Clean footer link');
});

test('Downloadable Resources banner has exact concise copy', () => {
  assert.ok(homeHtml.includes('Free Financial Resources'), 'Banner title');
  assert.ok(homeHtml.includes('Download practical budgeting spreadsheets, investment worksheets, and study checklists.'), 'Banner desc');
  assert.ok(homeHtml.includes('Explore Free Resources'), 'Banner action');
});

console.log('\n--- 5. Testing Founder and Mission Section Simplification ---');

test('Founder eyebrow is "OUR MISSION"', () => {
  assert.ok(homeHtml.includes('OUR MISSION'), 'Eyebrow in home.js');
  assert.ok(indexHtml.includes('OUR MISSION'), 'Eyebrow in index.html');
  assert.ok(!homeHtml.includes('Our Mission &amp; Founder'), 'Obsolete eyebrow removed');
});

test('Founder heading and description match exact copy', () => {
  assert.ok(homeHtml.includes('Financial Education Built for Nepal'), 'Founder heading');
  const expectedFounderDesc = "RisePaisa was founded by <a href=\"/aakash-das\" style=\"color:var(--color-accent);font-weight:600;text-decoration:none\">Aakash Das</a> to make financial knowledge easier to understand and apply in Nepal. We create practical educational content, calculators, and resources covering the country's financial system, taxation, banking, and stock market.";
  assert.ok(homeHtml.includes('RisePaisa was founded by'), 'Founder lead text');
  assert.ok(homeHtml.includes("covering the country's financial system, taxation, banking, and stock market."), 'Founder trailing text');
});

test('Founder supporting points are exactly the 3 concise pillars', () => {
  assert.ok(homeHtml.includes('Nepal-focused financial education'), 'Pillar 1');
  assert.ok(homeHtml.includes('Practical tools and research-based learning'), 'Pillar 2');
  assert.ok(homeHtml.includes('Clear explanations of investing, taxation, and personal finance'), 'Pillar 3');

  // Verify removed repetitive claims
  assert.ok(!homeHtml.includes('100% Nepal-specific laws (Finance Act'), 'Repetitive legal claim removed');
  assert.ok(!homeHtml.includes('Zero speculative stock tips or guaranteed'), 'Repetitive disclaimer removed');
  assert.ok(!homeHtml.includes('Free, accessible tools designed for students'), 'Repetitive audience claim removed');
});

console.log('\n--- 6. Testing Final Call to Action Section Simplification ---');

test('Final CTA heading and description match exact copy', () => {
  assert.ok(homeHtml.includes('Take the Next Step in Your Financial Learning'), 'Final CTA heading');
  assert.ok(homeHtml.includes('Explore free calculators and practical guides, or learn the NEPSE share market through our structured course.'), 'Final CTA desc');
});

test('Final CTA has exactly 2 actions (Tools and Course) without duplicate WhatsApp button', () => {
  const finalCtaBlock = homeHtml.match(/id="final-cta"[\s\S]*?<\/section>/)?.[0] || '';
  assert.ok(finalCtaBlock.includes('Explore Financial Tools'), 'Tools button present');
  assert.ok(finalCtaBlock.includes('Explore the NEPSE Course'), 'Course button present');
  assert.ok(!finalCtaBlock.includes('Enroll via WhatsApp'), '3rd WhatsApp enrollment button removed from final CTA');
});

console.log('\n--- 7. No "Lifetime Access" wording anywhere in homepage ---');

test('Homepage HTML contains zero instances of "Lifetime Access"', () => {
  assert.strictEqual(homeHtml.toLowerCase().includes('lifetime access'), false, 'home.js has zero lifetime access claims');
  // Check index.html outside global footer (footer doesn't have it, but check full body)
  const indexBody = indexHtml.match(/<main[\s\S]*?<\/main>/)?.[0] || indexHtml;
  assert.strictEqual(indexBody.toLowerCase().includes('lifetime access'), false, 'index.html body has zero lifetime access claims');
});

console.log('\n--------------------------------------------------------');
console.log(`Results: ${passedCount}/${passedCount + failedCount} assertions passed (${failedCount} failed)`);
console.log('--------------------------------------------------------\n');

if (failedCount > 0) {
  process.exit(1);
}


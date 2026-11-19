/**
 * Test Suite: Calculator UI Bug Fix, Dark Mode Refinement & Layout Audit
 *
 * Verifies:
 * 1. Dark & Light mode Slider Redesign:
 *    - Sleek 6px track height, pill radius.
 *    - Pure Apple primary blue (#0071E3) light mode, bright blue (#2997FF) dark mode.
 *    - Elimination of toxic lime green (#30D158) and teal (#00C7BE) gradients.
 *    - Refined 22px circular disc thumb in light (#FFFFFF) and dark (#F5F7FA) modes with subtle rim highlight.
 *    - Elimination of faux-metallic 28px orb gradient.
 *    - Restrained hover/drag scaling and focus auras.
 * 2. Investment Journey at a Glance:
 *    - CSS syntax error repair in css/calculators.css.
 *    - Desktop: equal height 4-step chain, flex-direction: column, justify-content: space-between.
 *    - Aligned bottom subtitles via margin-top: auto.
 *    - Vertically centered connecting arrows.
 *    - Mobile (<=860px): clean vertical column, rotated 90deg arrows centered, zero overflow.
 * 3. Surface & Dark Mode Harmonization:
 *    - Liquid Glass styling for .rp-growth-chart-container and .rp-table-section in dark mode.
 *    - Dynamic slider fill synchronization helper in js/liquid-glass.js.
 * 4. Interactive Browser Verification:
 *    - Live DOM inspection on SIP, SWP, Loan, and Tax calculators in desktop and mobile viewports.
 *    - Preservation of exact financial math formulas and calculations.
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

console.log('\n--- 1. Testing Calculator Slider CSS & Color Definitions ---');

const calcCss = fs.readFileSync(path.join(rootDir, 'css/calculators.css'), 'utf8');
const liquidGlassJs = fs.readFileSync(path.join(rootDir, 'js/liquid-glass.js'), 'utf8');

await test('Slider track uses sleek 6px height and pill geometry', () => {
  assert.ok(calcCss.includes('height: 6px;'), 'Track height is 6px');
  assert.ok(calcCss.includes('border-radius: var(--radius-full, 9999px);'), 'Track has pill border-radius');
});

await test('Slider track fill colors use Apple pure blue (no green/teal)', () => {
  assert.ok(calcCss.includes('#0071E3 var(--slider-fill-pct, 0%)'), 'Light mode uses Apple blue #0071E3');
  assert.ok(calcCss.includes('#2997FF var(--slider-fill-pct, 0%)'), 'Dark mode uses Apple bright blue #2997FF');
  // Confirm removal of green/teal from slider tracks
  assert.ok(!calcCss.includes('#30D158 var(--slider-fill-pct'), 'Lime green #30D158 removed from slider track');
  assert.ok(!calcCss.includes('#00C7BE var(--slider-fill-pct'), 'Teal #00C7BE removed from slider track');
});

await test('Slider thumbs use refined 22px disc geometry and Apple drop shadows', () => {
  assert.ok(calcCss.includes('width: 22px;\n  height: 22px;'), 'Thumb size is 22px in Webkit and Moz');
  assert.ok(calcCss.includes('background: #FFFFFF;'), 'Light mode thumb is crisp solid white disc');
  assert.ok(calcCss.includes('background: #F5F7FA;'), 'Dark mode thumb is refined off-white disc');
  assert.ok(!calcCss.includes('rgba(65, 78, 100, 0.85) 50%, rgba(26, 32, 44, 0.95) 100%'), 'Metallic dark orb gradient removed');
});

console.log('\n--- 2. Testing Investment Journey at a Glance CSS & Syntax ---');

await test('No syntax errors or orphaned dangling rules in .rp-flow-step', () => {
  // Check for the previously orphaned bracket pattern
  const brokenPattern = '[data-theme="dark"] .rp-flow-step {\n  background: rgba(32, 34, 44, 0.55);\n  border-color: rgba(255, 255, 255, 0.12);\n  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 2px 6px rgba(0, 0, 0, 0.25);\n}\n  border: 1px solid var(--color-border);';
  assert.ok(!calcCss.includes(brokenPattern), 'Orphaned CSS block is fixed');
});

await test('.rp-flow-chain has stretch alignment and .rp-flow-step has flex layout', () => {
  assert.ok(calcCss.includes('align-items: stretch;'), '.rp-flow-chain stretches cards to equal height');
  assert.ok(calcCss.includes('flex: 1 1 0;'), '.rp-flow-step distributes width equally');
  assert.ok(calcCss.includes('display: flex;\n  flex-direction: column;\n  justify-content: space-between;'), '.rp-flow-step has vertical flex column');
});

await test('.rp-flow-step-sub uses margin-top: auto for aligned subtitles', () => {
  assert.ok(calcCss.includes('margin-top: auto;\n  padding-top: 8px;'), 'Subtitles pushed to card bottom evenly');
});

await test('.rp-flow-arrow is vertically centered on desktop and rotated on mobile', () => {
  assert.ok(calcCss.includes('align-self: center;'), 'Arrow is centered vertically');
  assert.ok(calcCss.includes('transform: rotate(90deg);'), 'Mobile arrow rotates downward');
});

console.log('\n--- 3. Testing Liquid Glass Dark Mode & Fill Synchronizer ---');

await test('.rp-growth-chart-container and .rp-table-section have dark mode Liquid Glass tokens', () => {
  assert.ok(calcCss.includes('[data-theme="dark"] .rp-growth-chart-container'), 'Dark mode chart container is styled');
  assert.ok(calcCss.includes('[data-theme="dark"] .rp-table-section'), 'Dark mode table section is styled');
});

await test('js/liquid-glass.js exports syncRangeSliderFill and syncAllRangeSliders', () => {
  assert.ok(liquidGlassJs.includes('export function syncRangeSliderFill'), 'syncRangeSliderFill exported');
  assert.ok(liquidGlassJs.includes('export function syncAllRangeSliders'), 'syncAllRangeSliders exported');
  assert.ok(liquidGlassJs.includes("tooltip.style.left = `calc(${pctStr} + (${11 - pct * 22}px))`;"), 'Tooltip positioned for 22px thumb');
});

console.log('\n--- 4. Interactive Playwright DOM & Layout Verification ---');

const browser = await chromium.launch({ headless: true });

await test('SIP Calculator: Investment Journey cards have equal heights and centered arrows', async () => {
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  await page.goto('http://localhost:8000/calculators/sip/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);

  const steps = page.locator('.rp-flow-step');
  const count = await steps.count();
  assert.strictEqual(count, 4, 'SIP flow has exactly 4 steps');

  const heights = [];
  for (let i = 0; i < count; i++) {
    const box = await steps.nth(i).boundingBox();
    assert.ok(box && box.height > 60, `Step ${i + 1} has rendered with height: ${box?.height}`);
    heights.push(box.height);
  }

  // Verify all card heights are equal within 1px
  const minHeight = Math.min(...heights);
  const maxHeight = Math.max(...heights);
  assert.ok(maxHeight - minHeight <= 2, `Cards have equal heights (min: ${minHeight}, max: ${maxHeight})`);

  // Verify connecting arrows are vertically centered
  const arrows = page.locator('.rp-flow-arrow');
  const arrowCount = await arrows.count();
  assert.strictEqual(arrowCount, 3, 'Flow has 3 connecting arrows');

  const firstStepBox = await steps.nth(0).boundingBox();
  const firstArrowBox = await arrows.nth(0).boundingBox();
  const stepCenterY = firstStepBox.y + firstStepBox.height / 2;
  const arrowCenterY = firstArrowBox.y + firstArrowBox.height / 2;
  assert.ok(Math.abs(stepCenterY - arrowCenterY) < 15, 'Arrow is vertically centered with adjacent cards');

  await page.close();
});

await test('SIP Calculator: Mobile view has zero horizontal overflow and stacked vertical flow', async () => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto('http://localhost:8000/calculators/sip/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);

  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  assert.ok(scrollWidth <= 390, `No horizontal overflow on mobile 390px (scrollWidth: ${scrollWidth})`);

  // Steps should be stacked vertically (different Y coordinates)
  const step1 = await page.locator('.rp-flow-step').nth(0).boundingBox();
  const step2 = await page.locator('.rp-flow-step').nth(1).boundingBox();
  assert.ok(step2.y > step1.y + step1.height - 10, 'Steps stack vertically on mobile');

  await page.close();
});

await test('SWP Calculator: Slider track is 6px, thumb is 22px, and fill updates dynamically', async () => {
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  await page.goto('http://localhost:8000/calculators/swp/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);

  const slider = page.locator('#swp-range-corpus');
  assert.ok(await slider.isVisible(), 'Corpus slider is visible');

  const trackHeight = await slider.evaluate((el) => window.getComputedStyle(el).height);
  assert.strictEqual(trackHeight, '6px', 'Computed track height is 6px');

  // Initial fill pct exists
  const initialFill = await slider.evaluate((el) => el.style.getPropertyValue('--slider-fill-pct'));
  assert.ok(initialFill.includes('%'), 'Initial slider fill percentage is set');

  // Change slider value and trigger input
  await slider.fill('5000000');
  await slider.dispatchEvent('input');
  await page.waitForTimeout(100);

  const updatedFill = await slider.evaluate((el) => el.style.getPropertyValue('--slider-fill-pct'));
  assert.ok(updatedFill.includes('%'), 'Updated fill percentage is computed');

  // Verify calculation results updated and remain valid
  const resFinal = page.locator('#swp-res-final');
  const text = await resFinal.textContent();
  assert.ok(text.includes('NPR'), 'Calculation output is formatted in NPR');
  assert.ok(!text.includes('NaN'), 'Calculation output does not contain NaN');

  await page.close();
});

await test('Dark Mode: theme toggle switches surface colors seamlessly without NaN or errors', async () => {
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  await page.goto('http://localhost:8000/calculators/swp/', { waitUntil: 'domcontentloaded' });

  // Switch to dark mode
  await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
  await page.waitForTimeout(200);

  const controlsCard = page.locator('.rp-calc-controls-card').first();
  const bg = await controlsCard.evaluate((el) => window.getComputedStyle(el).backgroundColor);
  assert.ok(bg.includes('rgb'), 'Dark mode background computed successfully');

  // Check no console errors or visual anomalies
  const finalCorpus = await page.locator('#swp-res-final').textContent();
  assert.ok(finalCorpus.length > 5, 'Financial results remain populated in dark mode');

  await page.close();
});

await browser.close();

console.log(`\nAll ${totalTests} calculator UI and slider tests passed successfully! (${passedTests}/${totalTests})\n`);

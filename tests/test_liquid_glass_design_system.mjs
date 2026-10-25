// ========================================================
// RISEPAISA AUTHENTIC APPLE LIQUID GLASS DESIGN SYSTEM TESTS
// ========================================================
import fs from 'fs';
import path from 'path';

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
console.log('TESTING AUTHENTIC APPLE LIQUID GLASS DESIGN SYSTEM');
console.log('========================================================\n');

const repoRoot = path.resolve('.');
const variablesCss = fs.readFileSync(path.join(repoRoot, 'css/variables.css'), 'utf-8');
const componentsCss = fs.readFileSync(path.join(repoRoot, 'css/components.css'), 'utf-8');
const layoutCss = fs.readFileSync(path.join(repoRoot, 'css/layout.css'), 'utf-8');
const searchCss = fs.readFileSync(path.join(repoRoot, 'css/search.css'), 'utf-8');
const learnCss = fs.readFileSync(path.join(repoRoot, 'css/learn.css'), 'utf-8');
const calculatorsCss = fs.readFileSync(path.join(repoRoot, 'css/calculators.css'), 'utf-8');
const pagesCss = fs.readFileSync(path.join(repoRoot, 'css/pages.css'), 'utf-8');
const videoPlayerCss = fs.readFileSync(path.join(repoRoot, 'css/videoPlayer.css'), 'utf-8');

// 1. Token Architecture in variables.css
console.log('--- 1. Testing Design Tokens in variables.css ---');
assert(variablesCss.includes('--liquid-glass-bg:'), 'Defines regular liquid glass background in light theme');
assert(variablesCss.includes('--liquid-glass-border:'), 'Defines regular liquid glass border in light theme');
assert(variablesCss.includes('--liquid-glass-highlight:'), 'Defines authentic specular highlight in light theme');
assert(variablesCss.includes('--liquid-glass-blur:'), 'Defines regular liquid glass blur with saturation boost in light theme');
assert(variablesCss.includes('--liquid-glass-clear-bg:'), 'Defines clear liquid glass background variant in light theme');
assert(variablesCss.includes('--liquid-glass-clear-highlight:'), 'Defines clear liquid glass specular highlight in light theme');
assert(variablesCss.includes('--liquid-glass-subtle-bg:'), 'Defines subtle translucent material background in light theme');
assert(variablesCss.includes('--liquid-glass-subtle-blur:'), 'Defines subtle translucent blur in light theme');

// Dark Mode Tokens
const darkModeBlock = variablesCss.slice(variablesCss.indexOf('[data-theme="dark"]'));
assert(darkModeBlock.includes('--liquid-glass-bg:'), 'Defines regular liquid glass background in dark theme');
assert(darkModeBlock.includes('--liquid-glass-border:'), 'Defines regular liquid glass border in dark theme');
assert(darkModeBlock.includes('--liquid-glass-highlight:'), 'Defines authentic specular highlight in dark theme');
assert(darkModeBlock.includes('--liquid-glass-blur:'), 'Defines regular liquid glass blur in dark theme');
assert(darkModeBlock.includes('--liquid-glass-clear-bg:'), 'Defines clear liquid glass background in dark theme');
assert(darkModeBlock.includes('--liquid-glass-subtle-bg:'), 'Defines subtle translucent material background in dark theme');

// 2. Utility Classes in components.css
console.log('\n--- 2. Testing Material Utility Classes in components.css ---');
assert(componentsCss.includes('.glass-control {'), 'Defines .glass-control utility class for primary navigation/modals');
assert(componentsCss.includes('.glass-clear {'), 'Defines .glass-clear utility class for transient overlays/controls');
assert(componentsCss.includes('.glass-subtle {'), 'Defines .glass-subtle utility class for segmented pills/tabs');
assert(componentsCss.includes('.content-solid {'), 'Defines .content-solid utility class for text-heavy content surfaces');

// 3. Progressive Enhancement & Accessibility Fallbacks
console.log('\n--- 3. Testing Fallbacks & Progressive Enhancement ---');
assert(componentsCss.includes('@supports not (backdrop-filter: blur(10px))'), 'Provides progressive fallback for non-backdrop-filter browsers');
assert(componentsCss.includes('@media (prefers-reduced-transparency: reduce)'), 'Honors WCAG 2.2 AA prefers-reduced-transparency preference');

// 4. Surface Layering Verification across CSS Modules
console.log('\n--- 4. Testing Surface Layering on Key UI Surfaces ---');
assert(layoutCss.includes('var(--liquid-glass-bg)'), 'Primary navbar uses regular liquid glass background');
assert(layoutCss.includes('var(--liquid-glass-highlight)'), 'Primary navbar applies authentic specular highlight');
assert(layoutCss.includes('.mobile-menu {') && layoutCss.includes('var(--liquid-glass-bg-scrolled)'), 'Mobile slide drawer uses liquid glass with specular highlight');
assert(componentsCss.includes('.advisor-capsule-link {') && componentsCss.includes('var(--liquid-glass-clear-bg)'), 'Advisor capsule uses clear liquid glass material');
assert(searchCss.includes('.search-modal {') && searchCss.includes('var(--liquid-glass-bg)'), 'Search command modal uses liquid glass material');
assert(learnCss.includes('.learn-tabs-bar.scrolled {') && learnCss.includes('var(--liquid-glass-bg)'), 'Learn sub-nav uses frosted liquid glass material');
assert(calculatorsCss.includes('.rp-calc-nav-bar {') && calculatorsCss.includes('var(--liquid-glass-bg)'), 'Calculator sub-nav bar uses frosted liquid glass material');
assert(videoPlayerCss.includes('.rp-center-btn {') && videoPlayerCss.includes('var(--liquid-glass-clear-bg'), 'Video center play button uses clear liquid glass material');
assert(videoPlayerCss.includes('.rp-settings-box {') && videoPlayerCss.includes('var(--liquid-glass-bg'), 'Video player settings menu uses liquid glass material');

// 5. Content Surfaces Integrity (Must remain solid/opaque)
console.log('\n--- 5. Testing Content Surfaces (Opaque Content Layer) ---');
assert(componentsCss.includes('.card {') && componentsCss.includes('background-color: var(--card-bg);'), 'Content cards maintain opaque background for readability');
assert(variablesCss.includes('--card-bg:                   #FFFFFF;'), 'Light mode card surface is 100% opaque pure white');
assert(variablesCss.includes('--card-bg:                   #1C1C1E;'), 'Dark mode card surface is 100% opaque system dark');

// 6. Floating Control System & Mobile Learning Dock
console.log('\n--- 6. Testing Floating Liquid Glass Learning Dock & Controls Coordinator ---');
const floatingControlsJs = fs.readFileSync(path.join(repoRoot, 'js/floatingControls.js'), 'utf-8');
const componentsJs = fs.readFileSync(path.join(repoRoot, 'js/components.js'), 'utf-8');

assert(floatingControlsJs.includes('export function initFloatingSystem'), 'Exports initFloatingSystem coordinator');
assert(floatingControlsJs.includes('export function renderLearningDockHtml'), 'Exports renderLearningDockHtml component');
assert(floatingControlsJs.includes('export function bindLearningDock'), 'Exports bindLearningDock event listener handler');
assert(floatingControlsJs.includes('export function updateLearningDockProgress'), 'Exports updateLearningDockProgress handler');
assert(floatingControlsJs.includes('export function updateLearningDockBookmark'), 'Exports updateLearningDockBookmark handler');
assert(floatingControlsJs.includes('export function unmountLearningDock'), 'Exports unmountLearningDock cleanup handler');
assert(floatingControlsJs.includes('export function initCourseFloatingBuy'), 'Exports initCourseFloatingBuy smart purchase action');
assert(floatingControlsJs.includes('export function unmountCourseFloatingBuy'), 'Exports unmountCourseFloatingBuy cleanup');
assert(floatingControlsJs.includes('export function initCalculatorFloatingControls'), 'Exports initCalculatorFloatingControls quick actions');
assert(floatingControlsJs.includes('export function unmountCalculatorFloatingControls'), 'Exports unmountCalculatorFloatingControls cleanup');
assert(floatingControlsJs.includes('export function initArticleFloatingControls'), 'Exports initArticleFloatingControls article actions');
assert(floatingControlsJs.includes('export function unmountArticleFloatingControls'), 'Exports unmountArticleFloatingControls cleanup');

assert(componentsJs.includes('export function showToast('), 'Exports universal Liquid Glass showToast in components.js');
assert(componentsJs.includes('export async function shareContent('), 'Exports universal shareContent helper in components.js');

// Verify collision suppression rules in components.css
assert(componentsCss.includes('body.has-learning-dock .whatsapp-float'), 'Suppresses WhatsApp float when learning dock is active');
assert(componentsCss.includes('body.has-mobile-cta .whatsapp-float'), 'Suppresses WhatsApp float when mobile course detail CTA is active');
assert(componentsCss.includes('body.keyboard-open .rp-learning-dock'), 'Hides learning dock when mobile virtual keyboard opens');
assert(componentsCss.includes('body.is-fullscreen .rp-learning-dock'), 'Hides floating controls during fullscreen video playback');
assert(componentsCss.includes('body.near-footer .rp-learning-dock'), 'Tucks learning dock away near footer boundary');
assert(componentsCss.includes('body.page-course-learn .whatsapp-float'), 'Suppresses WhatsApp float on course video learn pages');
assert(componentsCss.includes('.rp-calc-floating-bar'), 'Defines smart floating calculator quick actions bar');
assert(componentsCss.includes('.rp-article-floating-bar'), 'Defines smart floating article actions bar');
assert(pagesCss.includes('.cd-mobile-sticky-bar'), 'Defines smart floating course purchase capsule');

// Verify mobile drawer and responsive grid fixes
assert(learnCss.includes('.rp-mobile-toc-drawer'), 'Defines authentic Liquid Glass mobile TOC drawer');
assert(learnCss.includes('minmax(min(100%, 280px), 1fr)'), 'Prevents 320px/360px grid horizontal overflow');

console.log('\n======================================================');
console.log(`LIQUID GLASS TEST RESULTS: ${passed} passed, ${failed} failed`);
console.log('======================================================\n');

if (failed > 0) {
  process.exit(1);
}

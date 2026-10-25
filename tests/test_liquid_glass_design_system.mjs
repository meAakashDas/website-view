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

console.log('\n======================================================');
console.log(`LIQUID GLASS TEST RESULTS: ${passed} passed, ${failed} failed`);
console.log('======================================================\n');

if (failed > 0) {
  process.exit(1);
}

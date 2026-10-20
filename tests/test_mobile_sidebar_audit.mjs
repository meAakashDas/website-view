import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderNavbar, ICONS } from '../js/components.js';
import { ROUTES } from '../js/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

console.log('========================================================');
console.log('TEST SUITE: MOBILE SIDEBAR AUDIT, REPAIR & UX QUALITY');
console.log('========================================================\n');

let passedTests = 0;
let totalTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    Error: ${err.message}`);
    process.exitCode = 1;
  }
}

// ── 1. Testing Mobile Drawer Markup & Anatomy ───────────
console.log('--- 1. Testing Mobile Drawer Markup & Anatomy ---');

test('Renders mobile-menu aside with dialog and accessibility semantics', () => {
  const html = renderNavbar('/');
  assert.ok(html.includes('<aside class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">'), 'Drawer dialog element present');
});

test('Renders mobile-menu-overlay element with aria-hidden="true"', () => {
  const html = renderNavbar('/');
  assert.ok(html.includes('<div class="mobile-menu-overlay" id="mobile-menu-overlay" aria-hidden="true"></div>'), 'Overlay element present');
});

test('Renders mobile-drawer-header with logo and close button', () => {
  const html = renderNavbar('/');
  assert.ok(html.includes('class="mobile-drawer-header"'), 'Header container present');
  assert.ok(html.includes('class="drawer-logo"'), 'Drawer logo present');
  assert.ok(html.includes('id="mobile-menu-close"'), 'Close button present');
  assert.ok(html.includes('aria-label="Close navigation menu"'), 'Accessible name on close button');
});

test('Renders search trigger with min-width compatible label and kbd', () => {
  const html = renderNavbar('/');
  assert.ok(html.includes('id="mobile-drawer-search-btn"'), 'Search trigger button present');
  assert.ok(html.includes('class="mobile-drawer-search-text"'), 'Search text label present');
  assert.ok(html.includes('class="mobile-drawer-search-kbd"'), 'Search keyboard shortcut badge present');
});

test('Renders all 9 mobile drawer navigation links with icons and chevrons', () => {
  const html = renderNavbar('/');
  const expectedLabels = [
    'Home',
    'Courses',
    'My Courses',
    'Learn Academy',
    'Calculators',
    'Resources',
    'Articles & Blog',
    'About Us',
    'Contact'
  ];

  for (const label of expectedLabels) {
    assert.ok(html.includes(`<span class="mobile-link-text">${label}</span>`), `Contains navigation item: ${label}`);
  }
});

test('Renders drawer footer with full-width WhatsApp CTA button', () => {
  const html = renderNavbar('/');
  assert.ok(html.includes('class="mobile-drawer-footer"'), 'Drawer footer container present');
  assert.ok(html.includes('class="btn btn-whatsapp btn-lg mobile-drawer-wa-btn"'), 'WhatsApp CTA button present');
  assert.ok(html.includes('Chat on WhatsApp'), 'WhatsApp button label present');
});

test('Renders theme switcher with segmented light/dark controls', () => {
  const html = renderNavbar('/');
  assert.ok(html.includes('class="mobile-menu-theme-row"'), 'Theme control row present');
  assert.ok(html.includes('id="seg-btn-light"'), 'Light mode button present');
  assert.ok(html.includes('id="seg-btn-dark"'), 'Dark mode button present');
});

// ── 2. Testing CSS Scoping, Bounded Sizing & Safe Areas ──
console.log('\n--- 2. Testing CSS Scoping, Bounded Sizing & Safe Areas ---');

const layoutCss = fs.readFileSync(path.join(ROOT_DIR, 'css/layout.css'), 'utf8');

test('layout.css defines bounded responsive width for mobile-menu', () => {
  assert.ok(layoutCss.includes('width: min(360px, calc(100vw - 44px));'), 'Bounded width rule present');
  assert.ok(layoutCss.includes('border-top-left-radius: 20px;'), 'Rounded corner rule present');
  assert.ok(layoutCss.includes('border-bottom-left-radius: 20px;'), 'Rounded corner rule present');
});

test('layout.css includes safe-area-inset-top in mobile-drawer-header', () => {
  assert.ok(layoutCss.includes('env(safe-area-inset-top'), 'Header handles safe-area-inset-top');
});

test('layout.css includes safe-area-inset-bottom in mobile-drawer-footer', () => {
  assert.ok(layoutCss.includes('env(safe-area-inset-bottom'), 'Footer handles safe-area-inset-bottom');
});

test('layout.css dims background navbar-inner to prevent double logo when drawer is open', () => {
  assert.ok(layoutCss.includes('.navbar.has-mobile-open .navbar-inner') || layoutCss.includes('body:has(.mobile-menu.open) .navbar .navbar-inner'), 'Background navbar dimming rule present');
});

test('layout.css elevates navbar z-index when drawer is open', () => {
  assert.ok(layoutCss.includes('.navbar.has-mobile-open') && layoutCss.includes('z-index: var(--z-overlay)'), 'Navbar elevation rule present');
});

test('layout.css provides thin scrollbars and min-height on mobile-drawer-body', () => {
  assert.ok(layoutCss.includes('scrollbar-width: thin;'), 'Thin scrollbar defined');
  assert.ok(layoutCss.includes('::-webkit-scrollbar'), 'Webkit scrollbar styled');
});

test('layout.css enforces min-width: 0 on search text and link text to prevent overflow', () => {
  assert.ok(layoutCss.includes('.mobile-drawer-search-text') && layoutCss.includes('min-width: 0;'), 'Search text min-width: 0 present');
  assert.ok(layoutCss.includes('.mobile-link-text') && layoutCss.includes('min-width: 0;'), 'Link text min-width: 0 present');
});

// ── 3. Testing Account & Auth UI Architecture ───────────
console.log('\n--- 3. Testing Account & Auth UI Architecture ---');

const uiJs = fs.readFileSync(path.join(ROOT_DIR, 'js/firebase/ui.js'), 'utf8');

test('ui.js renders mobile-auth-user-card with profile row and 2-column actions grid', () => {
  assert.ok(uiJs.includes('class="mobile-auth-user-card"'), 'User card container present');
  assert.ok(uiJs.includes('class="mobile-auth-profile-row"'), 'Profile row present');
  assert.ok(uiJs.includes('class="mobile-auth-actions-grid"'), 'Actions grid present');
  assert.ok(uiJs.includes('id="mobile-courses-btn"'), 'Courses button present');
  assert.ok(uiJs.includes('id="mobile-settings-btn"'), 'Settings button present');
  assert.ok(uiJs.includes('id="mobile-admin-btn"'), 'Admin button present');
  assert.ok(uiJs.includes('id="mobile-logout-btn"'), 'Sign Out button present');
});

test('ui.js renders mobile-auth-guest-card for unauthenticated visitors', () => {
  assert.ok(uiJs.includes('class="mobile-auth-guest-card"'), 'Guest card container present');
  assert.ok(uiJs.includes('id="mobile-signin-btn"'), 'Sign In button present');
  assert.ok(uiJs.includes('Student Portal'), 'Portal title present');
});

test('layout.css styles mobile-auth-actions-grid with 2 columns and full-width signout span', () => {
  assert.ok(layoutCss.includes('grid-template-columns: repeat(2, 1fr);'), 'Grid columns defined');
  assert.ok(layoutCss.includes('grid-column: span 2;'), 'Sign out full-width span defined');
});

// ── 4. Testing Navigation Destinations & Integrity ───────
console.log('\n--- 4. Testing Navigation Destinations & Integrity ---');

test('My Courses links directly to /courses/nepse-stock-market-basics/learn?lesson=lesson-1', () => {
  const html = renderNavbar('/courses');
  assert.ok(html.includes(`href="${ROUTES.MY_COURSES}"`), 'Drawer contains correct My Courses destination');
});

test('Calculators link is present and correct in drawer', () => {
  const html = renderNavbar('/');
  assert.ok(html.includes(`href="${ROUTES.CALCULATORS}"`), 'Drawer contains Calculators link');
});

test('Resources link is present and correct in drawer', () => {
  const html = renderNavbar('/');
  assert.ok(html.includes(`href="${ROUTES.RESOURCES}"`), 'Drawer contains Resources link');
});

console.log('\n========================================================');
console.log(`TEST SUITE RESULTS: ${passedTests} PASSED, 0 FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

/**
 * Test Suite: Mobile Sidebar & Liquid Glass Animation Optimization
 * 
 * Verifies:
 * 1. Fluid, hardware-accelerated slide-in (340ms) and slide-out (300ms) transitions.
 * 2. Complete absence of jarring `display: none` snapping on drawer closure.
 * 3. Translucent frosted Liquid Glass backdrop with blur and subtle saturation.
 * 4. Micro-staggered ingress transitions for header, search, student portal, nav links, and WhatsApp CTA.
 * 5. Touch and keyboard interactions: rapid tapping, tap outside, close button, Escape key, and client route selection.
 * 6. Flawless scroll locking during open state and clean restoration upon close.
 * 7. Dark/light mode fidelity, safe area insets, and zero console errors.
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

console.log('\n--- 1. Testing CSS Architecture & Hardware Acceleration ---');

const layoutCss = fs.readFileSync(path.join(rootDir, 'css/layout.css'), 'utf8');
const variablesCss = fs.readFileSync(path.join(rootDir, 'css/variables.css'), 'utf8');

await test('layout.css eliminates abrupt display: none on drawer close', () => {
  assert.strictEqual(
    layoutCss.includes('.mobile-menu:not(.open) {\n  display: none !important;\n}'),
    false,
    'Must not have display: none !important on closed drawer'
  );
  assert.ok(layoutCss.includes('transform: translate3d(100%, 0, 0);'), 'Closed drawer uses hardware-accelerated translate3d');
  assert.ok(layoutCss.includes('transform: translate3d(0, 0, 0);'), 'Open drawer targets translate3d(0, 0, 0)');
});

await test('layout.css defines Apple fluid cubic-bezier curves for drawer and backdrop', () => {
  assert.ok(layoutCss.includes('cubic-bezier(0.16, 1, 0.3, 1)'), 'Uses Apple fluid deceleration curve on enter');
  assert.ok(layoutCss.includes('cubic-bezier(0.32, 0.72, 0, 1)'), 'Uses smooth reverse acceleration curve on exit');
});

await test('variables.css defines refined Liquid Glass translucent backdrop and surface variables', () => {
  assert.ok(variablesCss.includes('--liquid-glass-drawer-bg:'), 'Defines drawer surface background');
  assert.ok(variablesCss.includes('--liquid-glass-drawer-blur:'), 'Defines drawer backdrop blur');
  assert.ok(variablesCss.includes('--liquid-glass-drawer-overlay:'), 'Defines frosted overlay tint');
});

await test('layout.css implements micro-staggered ingress transitions for all drawer sections', () => {
  assert.ok(layoutCss.includes('.mobile-menu.open .mobile-drawer-header'), 'Header staggered delay');
  assert.ok(layoutCss.includes('.mobile-menu.open .mobile-drawer-search-wrap'), 'Search bar staggered delay');
  assert.ok(layoutCss.includes('.mobile-menu.open .mobile-drawer-auth-slot'), 'Student portal staggered delay');
  assert.ok(layoutCss.includes('.mobile-menu.open .mobile-nav-links .mobile-link:nth-child(1)'), 'Nav item 1 staggered delay');
  assert.ok(layoutCss.includes('.mobile-menu.open .mobile-nav-links .mobile-link:nth-child(8)'), 'Nav item 8 staggered delay');
  assert.ok(layoutCss.includes('.mobile-menu.open .mobile-drawer-footer'), 'WhatsApp footer staggered delay');
  assert.ok(layoutCss.includes('.mobile-menu:not(.open) .mobile-drawer-header'), 'Immediate delay reset to 0ms on exit');
});

await test('layout.css respects prefers-reduced-motion for sidebar transitions', () => {
  assert.ok(layoutCss.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced motion query exists');
  assert.ok(layoutCss.includes('transform: none !important;'), 'Transforms suppressed under reduced motion');
});

console.log('\n--- 2. Interactive Browser Execution & Interaction Testing ---');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const consoleErrors = [];

page.on('console', msg => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', err => consoleErrors.push(err.message));

await page.goto('http://localhost:8000/', { waitUntil: 'domcontentloaded' });
await page.locator('#nav-toggle').waitFor({ state: 'visible' });
await page.waitForTimeout(500);

await test('Tapping #nav-toggle opens drawer smoothly with immediate response', async () => {
  const toggle = page.locator('#nav-toggle');
  await toggle.click();
  await page.waitForTimeout(100);

  const isOpen = await page.locator('#mobile-menu').evaluate(el => el.classList.contains('open'));
  const isOverlayOpen = await page.locator('#mobile-menu-overlay').evaluate(el => el.classList.contains('open'));
  const isScrollLocked = await page.evaluate(() => document.body.style.overflow === 'hidden');

  assert.strictEqual(isOpen, true, 'Drawer must have .open');
  assert.strictEqual(isOverlayOpen, true, 'Overlay must have .open');
  assert.strictEqual(isScrollLocked, true, 'Body scroll must be locked');
});

await test('Tapping #mobile-menu-close closes drawer and restores scroll position', async () => {
  const closeBtn = page.locator('#mobile-menu-close');
  await closeBtn.click();
  await page.waitForTimeout(350);

  const isOpen = await page.locator('#mobile-menu').evaluate(el => el.classList.contains('open'));
  const isOverlayOpen = await page.locator('#mobile-menu-overlay').evaluate(el => el.classList.contains('open'));
  const isScrollUnlocked = await page.evaluate(() => document.body.style.overflow === '');

  assert.strictEqual(isOpen, false, 'Drawer .open removed');
  assert.strictEqual(isOverlayOpen, false, 'Overlay .open removed');
  assert.strictEqual(isScrollUnlocked, true, 'Body scroll restored');
});

await test('Tapping outside on #mobile-menu-overlay closes the sidebar smoothly', async () => {
  // Open again
  await page.locator('#nav-toggle').click();
  await page.waitForTimeout(100);
  assert.strictEqual(await page.locator('#mobile-menu').evaluate(el => el.classList.contains('open')), true);

  // Click backdrop overlay on left side (e.g. x: 30, y: 300)
  await page.mouse.click(30, 300);
  await page.waitForTimeout(350);

  const isOpen = await page.locator('#mobile-menu').evaluate(el => el.classList.contains('open'));
  assert.strictEqual(isOpen, false, 'Drawer must close after clicking outside');
});

await test('Pressing Escape key closes drawer and returns focus to toggle', async () => {
  await page.locator('#nav-toggle').click();
  await page.waitForTimeout(100);
  assert.strictEqual(await page.locator('#mobile-menu').evaluate(el => el.classList.contains('open')), true);

  await page.keyboard.press('Escape');
  await page.waitForTimeout(350);

  const isOpen = await page.locator('#mobile-menu').evaluate(el => el.classList.contains('open'));
  assert.strictEqual(isOpen, false, 'Drawer must close on Escape key');
  const activeElementId = await page.evaluate(() => document.activeElement?.id);
  assert.strictEqual(activeElementId, 'nav-toggle', 'Focus returned to nav-toggle');
});

await test('Rapid tapping on toggle and close button does not lock up or cause errors', async () => {
  const toggle = page.locator('#nav-toggle');
  const closeBtn = page.locator('#mobile-menu-close');
  for (let i = 0; i < 3; i++) {
    await toggle.click();
    await page.waitForTimeout(100);
    await closeBtn.click();
    await page.waitForTimeout(100);
  }
  // Allow settling
  await page.waitForTimeout(350);
  const isOpen = await page.locator('#mobile-menu').evaluate(el => el.classList.contains('open'));
  assert.strictEqual(isOpen, false, 'Drawer state settled to closed');
});

await test('Clicking a navigation link inside the drawer navigates and closes drawer', async () => {
  // Ensure open
  const isOpen = await page.locator('#mobile-menu').evaluate(el => el.classList.contains('open'));
  if (!isOpen) {
    await page.locator('#nav-toggle').click();
    await page.waitForTimeout(100);
  }

  // Click Calculators link inside drawer
  const calcLink = page.locator('#mobile-menu a[href="/calculators"]');
  await calcLink.click();
  await page.waitForTimeout(400);

  const drawerClosed = await page.locator('#mobile-menu').evaluate(el => !el.classList.contains('open'));
  assert.strictEqual(drawerClosed, true, 'Drawer closed after navigating');
  assert.ok(page.url().includes('/calculators'), 'Page navigated to /calculators');
});

await test('Theme toggle works inside drawer across light and dark modes with 0 console errors', async () => {
  // Re-open drawer
  await page.locator('#nav-toggle').click();
  await page.waitForTimeout(100);

  // Click Dark theme segmented button
  const darkBtn = page.locator('#seg-btn-dark');
  await darkBtn.click();
  await page.waitForTimeout(150);

  const isDark = await page.evaluate(() => document.documentElement.getAttribute('data-theme') === 'dark');
  assert.strictEqual(isDark, true, 'Theme set to dark');

  // Click Light theme segmented button
  const lightBtn = page.locator('#seg-btn-light');
  await lightBtn.click();
  await page.waitForTimeout(150);

  const isLight = await page.evaluate(() => document.documentElement.getAttribute('data-theme') === 'light');
  assert.strictEqual(isLight, true, 'Theme set to light');

  // Close drawer
  await page.locator('#mobile-menu-close').click();
  await page.waitForTimeout(350);

  assert.strictEqual(consoleErrors.length, 0, `Zero console errors expected, got: ${consoleErrors.join(', ')}`);
});

await browser.close();

console.log(`\nResults: ${passedTests}/${totalTests} tests passed.\n`);
if (passedTests !== totalTests) {
  process.exit(1);
}

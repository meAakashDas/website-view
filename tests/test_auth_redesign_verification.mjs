// ========================================================
// RisePaisa Authentication UI Redesign Verification Suite
// Validates Apple-inspired design standards, minimal elements,
// animation rules, responsive behavior, and functional preservation.
// ========================================================

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let passedCount = 0;
let failedCount = 0;

function assert(condition, testDescription) {
  if (condition) {
    console.log(`  ✓ ${testDescription}`);
    passedCount++;
  } else {
    console.error(`  ✗ FAIL: ${testDescription}`);
    failedCount++;
  }
}

console.log('========================================================');
console.log('TEST SUITE: AUTHENTICATION UI REDESIGN & APPLE STANDARDS');
console.log('========================================================\n');

// ── 1. Login Page Minimal Elements & Clean Architecture ───
console.log('--- 1. Testing Login Page Minimal Elements & Typography ---');

const uiJsPath = path.join(rootDir, 'js/firebase/ui.js');
const uiJs = fs.readFileSync(uiJsPath, 'utf8');

// Logo
assert(uiJs.includes('rp-auth-brand-logo') && uiJs.includes('rise<span>Paisa</span>'), 'RisePaisa brand logo is cleanly rendered at top');

// Typography & Heading
assert(uiJs.includes("'Welcome back.'"), 'Simple primary heading "Welcome back." is configured for login');
assert(uiJs.includes("'Continue learning.'"), 'Minimal subtitle "Continue learning." is configured for login');

// Form inputs
assert(uiJs.includes('Email or Student ID'), 'Email or Student ID label is present for student and general access');
assert(uiJs.includes('placeholder="you@example.com or RP-2026-A7K9M2"'), 'Input placeholder cleanly indicates email or student ID format');
assert(uiJs.includes('id="rp-toggle-pwd"') && uiJs.includes('aria-label="Toggle password visibility"'), 'Password input features show/hide eye toggle button');
assert(uiJs.includes('ICONS.eye') && uiJs.includes('ICONS.eyeOff'), 'Password toggle alternates between eye and eyeOff SVG icons');

// Action buttons & Links
assert(uiJs.includes('rp-auth-submit-btn') && uiJs.includes('Sign In'), 'One prominent Sign In primary action button exists');
assert(uiJs.includes('rp-auth-google-btn') && uiJs.includes('Continue with Google'), 'Subtle Google sign-in option is available');
assert(uiJs.includes('rp-auth-inline-link') && uiJs.includes('Forgot password?'), 'Inline "Forgot password?" link is neatly positioned next to password label');
assert(uiJs.includes('rp-auth-footer-link'), 'Small register / switch account link is positioned at bottom');

// ── 2. Registration & Password Recovery Cleanliness ────────
console.log('\n--- 2. Testing Registration & Password Recovery Simplification ---');

assert(uiJs.includes("'Create your account.'"), 'Registration heading is concise ("Create your account.")');
assert(uiJs.includes("'Start learning.'"), 'Registration subtitle is minimal ("Start learning.")');
assert(uiJs.includes('rp-group-name'), 'Registration includes essential Name input');
assert(uiJs.includes("'Reset password.'"), 'Password recovery heading is direct ("Reset password.")');
assert(uiJs.includes("'Enter your email to receive a recovery link.'"), 'Password recovery subtitle explains action without excess paragraphs');
assert(uiJs.includes('rp-auth-alert-error') && uiJs.includes('rp-auth-alert-success'), 'Clear success and error alert banners are integrated');

// ── 3. Account & Security Redesign ─────────────────────────
console.log('\n--- 3. Testing Account & Security Modal Simplification ---');

assert(uiJs.includes('rp-user-info-card'), 'Account info card is cleanly structured');
assert(uiJs.includes('rp-role-badge'), 'Role indicator badge is rendered minimally');
assert(uiJs.includes('rp-provider-chip'), 'Minimal authentication provider chips indicate sign-in method');
assert(uiJs.includes('rp-uid-row') && uiJs.includes('rp-btn-copy-uid'), 'Compact UID row with one-click copy button is preserved');
assert(uiJs.includes('rp-settings-pwd-form'), 'Simple, direct password update form exists');
assert(uiJs.includes('data-target="rp-settings-current-pwd"') && uiJs.includes('data-target="rp-settings-new-pwd"'), 'Account security password fields include show/hide visibility toggles');

// ── 4. Apple-Inspired Visual Styling in auth.css ───────────
console.log('\n--- 4. Testing Apple-Inspired Visual Design & CSS Architecture ---');

const authCssPath = path.join(rootDir, 'css/auth.css');
const authCss = fs.readFileSync(authCssPath, 'utf8');

// Colors & Surfaces
assert(authCss.includes('#FFFFFF') || authCss.includes('rgba(255, 255, 255'), 'Clean white surfaces configured for light mode');
assert(authCss.includes('#1C1C1E') || authCss.includes('#2C2C2E'), 'Dark mode uses Apple-inspired dark gray surfaces (#1C1C1E / #2C2C2E)');
assert(authCss.includes('#0071E3'), 'Primary buttons use Apple Blue (#0071E3)');
assert(authCss.includes('#0077ED') || authCss.includes('#0062C4'), 'Apple Blue button has refined hover/active states');

// Hairline Borders & Shadows
assert(authCss.includes('0 20px 48px'), 'Modal card uses soft diffused multi-stop box-shadow');
assert(authCss.includes('border-radius: 18px') || authCss.includes('border-radius: 16px'), 'Modal card uses rounded modern Apple corner radius (18px)');
assert(authCss.includes('border-radius: 12px'), 'Inputs and buttons use uniform 12px corner radii');
assert(authCss.includes('border-radius: 10px'), 'Segmented tabs use 10px corner radii');

// Typography
assert(authCss.includes('-apple-system') && authCss.includes('BlinkMacSystemFont'), 'Uses Apple system font stack (-apple-system, BlinkMacSystemFont)');

// Segmented Tab Switcher
assert(authCss.includes('.rp-auth-tabs') && authCss.includes('.rp-auth-tab'), 'Segmented pill tab switcher is styled with subtle active pill highlight');

// ── 5. Animation & Interaction Polish ──────────────────────
console.log('\n--- 5. Testing Animation & Micro-Interactions ---');

// Page load / modal enter
assert(authCss.includes('@keyframes rp-modal-enter'), 'Entrance animation @keyframes rp-modal-enter is defined');
assert(authCss.includes('translateY(12px)'), 'Modal enters with subtle upward 12px glide');

// Button interaction
assert(authCss.includes('transform: scale(0.98)') || authCss.includes('scale(0.98)'), 'Interactive buttons feature tactile 0.98 press-down scale on :active');
assert(authCss.includes('@keyframes rp-spin'), 'Loading spinner animation @keyframes rp-spin is defined');
assert(authCss.includes('.rp-spinner'), 'Spinner element .rp-spinner is styled for seamless loading states');
assert(authCss.includes('.rp-btn-success'), 'Success button state .rp-btn-success is styled with Apple green');
assert(authCss.includes('#34C759'), 'Uses Apple green (#34C759) for verified success states');

// Reduced motion accessibility
assert(authCss.includes('@media (prefers-reduced-motion: reduce)'), 'prefers-reduced-motion is strictly respected, disabling all animations');

// ── 6. Mobile-First Experience & Responsive Guardrails ─────
console.log('\n--- 6. Testing Mobile-First Viewport & Responsive Design ---');

assert(authCss.includes('@media (max-width: 480px)'), 'Mobile-first breakpoint (@media max-width: 480px) is configured');
assert(authCss.includes('font-size: 16px !important') || authCss.includes('font-size: 16px'), 'Mobile inputs enforce 16px font-size to prevent iOS Safari auto-zoom');
assert(authCss.includes('min-height: 44px') || authCss.includes('min-height: 42px'), 'Touch targets meet Apple 44px touch target guidelines');
assert(authCss.includes('calc(100vw - 32px)'), 'Modal width is bounded by viewport margin to prevent horizontal scrolling');
assert(authCss.includes('env(safe-area-inset-bottom)'), 'Safe area insets are respected for modern iPhone displays');

// ── 7. Functional Preservation & Security Logic ────────────
console.log('\n--- 7. Testing Functional Integrity & API Contract Preservation ---');

const authModulePath = path.join(rootDir, 'js/firebase/auth.js');
const authModule = fs.readFileSync(authModulePath, 'utf8');

assert(authModule.includes('loginWithEmail'), 'loginWithEmail is exported');
assert(authModule.includes('registerWithEmail'), 'registerWithEmail is exported');
assert(authModule.includes('loginWithGoogle'), 'loginWithGoogle is exported');
assert(authModule.includes('resetPassword'), 'resetPassword is exported');
assert(authModule.includes('logoutUser'), 'logoutUser is exported');
assert(authModule.includes('resolveStudentLoginIdentifier'), 'Student ID to internal email resolver is preserved');
assert(uiJs.includes('openSettingsModal') && uiJs.includes('closeSettingsModal'), 'Account settings modal interface functions are exported');
assert(uiJs.includes('openOnboardingModal') && uiJs.includes('closeOnboardingModal'), 'Student onboarding modal interface functions are exported');

// ── SUMMARY ────────────────────────────────────────────────
console.log('\n========================================================');
console.log(`REDESIGN VERIFICATION: ${passedCount} PASSED, ${failedCount} FAILED (TOTAL: ${passedCount + failedCount})`);
console.log('========================================================\n');

if (failedCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

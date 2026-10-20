// ========================================================
// RISEPAISA FIREBASE AUTHENTICATION FOUNDATION TEST SUITE
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
console.log('TEST SUITE: FIREBASE CONFIGURATION & AUTH FOUNDATION');
console.log('========================================================\n');

// ── 1. Configuration & Security Audit ────────────────────────
console.log('--- 1. Testing Firebase Config & Client Isolation ---');

const configModulePath = path.join(rootDir, 'js/firebase/config.js');
assert(fs.existsSync(configModulePath), 'Config module exists at js/firebase/config.js');

const configContent = fs.readFileSync(configModulePath, 'utf8');
assert(!configContent.includes('private_key'), 'Config does not contain private_key');
assert(!configContent.includes('client_email'), 'Config does not contain service account client_email');
assert(!configContent.includes('type": "service_account"'), 'Config is not a service account credential file');
assert(configContent.includes('risepaisa-77278'), 'Config references the verified project ID: risepaisa-77278');

const { firebaseConfig, isFirebaseConfigured } = await import('../js/firebase/config.js');
assert(typeof firebaseConfig === 'object', 'firebaseConfig is exported as an object');
assert(typeof isFirebaseConfigured === 'function', 'isFirebaseConfigured is exported as a function');

// Test isFirebaseConfigured with empty vs populated config
assert(isFirebaseConfigured({ apiKey: '', projectId: 'risepaisa-77278', appId: '' }) === false, 'isFirebaseConfigured correctly rejects unpopulated config');
assert(isFirebaseConfigured({ apiKey: 'AIzaSyDemoKey123', projectId: 'risepaisa-77278', appId: '1:710320151474:web:demo' }) === true, 'isFirebaseConfigured accepts valid config');
assert(isFirebaseConfigured() === true, 'isFirebaseConfigured() returns true for active project config');

// ── 2. Authentication Interface & Error Formatting ──────────
console.log('\n--- 2. Testing Modular Auth Interface & Error Formatting ---');

const authModulePath = path.join(rootDir, 'js/firebase/auth.js');
assert(fs.existsSync(authModulePath), 'Auth module exists at js/firebase/auth.js');

const {
  subscribeToAuth,
  registerWithEmail,
  loginWithEmail,
  loginWithGoogle,
  logoutUser,
  resetPassword,
  getCurrentUser,
  formatAuthError
} = await import('../js/firebase/auth.js');

assert(typeof subscribeToAuth === 'function', 'subscribeToAuth is exported');
assert(typeof registerWithEmail === 'function', 'registerWithEmail is exported');
assert(typeof loginWithEmail === 'function', 'loginWithEmail is exported');
assert(typeof loginWithGoogle === 'function', 'loginWithGoogle is exported');
assert(typeof logoutUser === 'function', 'logoutUser is exported');
assert(typeof resetPassword === 'function', 'resetPassword is exported');
assert(typeof getCurrentUser === 'function', 'getCurrentUser is exported');
assert(typeof formatAuthError === 'function', 'formatAuthError is exported');

// Test critical Firebase Auth error mappings
assert(formatAuthError({ code: 'auth/invalid-email' }).includes('valid email'), 'formatAuthError maps invalid-email');
assert(formatAuthError({ code: 'auth/user-not-found' }).includes('No account exists'), 'formatAuthError maps user-not-found');
assert(formatAuthError({ code: 'auth/wrong-password' }).includes('Incorrect password'), 'formatAuthError maps wrong-password');
assert(formatAuthError({ code: 'auth/email-already-in-use' }).includes('already exists'), 'formatAuthError maps email-already-in-use');
assert(formatAuthError({ code: 'auth/weak-password' }).includes('at least 6 characters'), 'formatAuthError maps weak-password');
assert(formatAuthError({ code: 'auth/unauthorized-domain' }).includes('domain is not authorized'), 'formatAuthError maps unauthorized-domain');
assert(formatAuthError({ code: 'auth/too-many-requests' }).includes('few minutes'), 'formatAuthError maps too-many-requests');
assert(formatAuthError({ code: 'auth/popup-closed-by-user' }).includes('cancelled'), 'formatAuthError maps popup-closed-by-user');

// ── 3. UI & Stylesheet Integrity ─────────────────────────────
console.log('\n--- 3. Testing UI Components & Stylesheet Integrity ---');

const authCssPath = path.join(rootDir, 'css/auth.css');
assert(fs.existsSync(authCssPath), 'css/auth.css exists');

const authCss = fs.readFileSync(authCssPath, 'utf8');
assert(authCss.includes('.nav-auth-slot'), 'auth.css defines .nav-auth-slot');
assert(authCss.includes('.nav-auth-btn'), 'auth.css defines .nav-auth-btn');
assert(authCss.includes('.nav-user-badge'), 'auth.css defines .nav-user-badge');
assert(authCss.includes('.nav-user-menu'), 'auth.css defines .nav-user-menu');
assert(authCss.includes('.rp-auth-modal-overlay'), 'auth.css defines .rp-auth-modal-overlay');
assert(authCss.includes('[data-theme="dark"]'), 'auth.css contains dark mode theme adaptations');

// ── 4. Static HTML Pre-Rendering Verification ─────────────────
console.log('\n--- 4. Testing Static HTML Navbar Integration ---');

const indexHtmlPath = path.join(rootDir, 'index.html');
assert(fs.existsSync(indexHtmlPath), 'index.html exists');

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
assert(indexHtml.includes('css/auth.css'), 'index.html links to css/auth.css');
assert(indexHtml.includes('id="desktop-auth-container"'), 'index.html contains desktop-auth-container in navbar');
assert(indexHtml.includes('id="mobile-auth-container"'), 'index.html contains mobile-auth-container in drawer');

console.log('\n========================================================');
console.log(`FOUNDATION TEST SUITE: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) {
  process.exit(1);
}

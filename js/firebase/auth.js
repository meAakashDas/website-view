// ==============================================
// risePaisa - Firebase Authentication Foundation
// Modular, lightweight authentication layer
// Loaded on-demand to maintain zero overhead on static pages
// ==============================================

import { getFirebaseApp, isFirebaseConfigured } from './config.js';

let _authInstance = null;
let _authModule = null;
let _currentUser = null;
let _isMockUser = false;
let _authInitialized = false;
let _authInitError = null;
const _authSubscribers = new Set();
const _authWaiters = [];
let _loadAuthPromise = null;

/**
 * Load the modular Firebase Auth SDK on-demand.
 */
async function loadAuthSDK() {
  if (_authModule && _authInstance) {
    return { auth: _authInstance, sdk: _authModule };
  }

  if (typeof window === 'undefined') {
    return null;
  }

  if (_loadAuthPromise) {
    return _loadAuthPromise;
  }

  _loadAuthPromise = (async () => {
    const app = await getFirebaseApp();
    if (!app) {
      _authInitialized = true;
      while (_authWaiters.length > 0) {
        const waiter = _authWaiters.shift();
        try { waiter(null, new Error('Firebase app unavailable')); } catch {}
      }
      return null;
    }

    try {
      const sdk = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');
      _authModule = sdk;
      _authInstance = sdk.getAuth(app);

      // Attach master auth listener once
      sdk.onAuthStateChanged(_authInstance, (user) => {
        if (_isMockUser) {
          return;
        }
        _currentUser = user;
        _authInitialized = true;
        while (_authWaiters.length > 0) {
          const waiter = _authWaiters.shift();
          try { waiter(user, null); } catch (wErr) { console.error('[risePaisa:Auth] Waiter error:', wErr); }
        }
        _authSubscribers.forEach((callback) => {
          try {
            callback(user);
          } catch (cbErr) {
            console.error('[risePaisa:Auth] Callback error:', cbErr);
          }
        });
      });

      return { auth: _authInstance, sdk: _authModule };
    } catch (err) {
      console.warn('[risePaisa:Auth] Could not load Firebase Auth SDK:', err);
      _authInitialized = true;
      _authInitError = err;
      while (_authWaiters.length > 0) {
        const waiter = _authWaiters.shift();
        try { waiter(null, err); } catch {}
      }
      return null;
    } finally {
      _loadAuthPromise = null;
    }
  })();

  return _loadAuthPromise;
}


/**
 * Check whether the Firebase Auth SDK has loaded and verified the initial user state.
 * @returns {boolean}
 */
export function isAuthInitialized() {
  return _authInitialized;
}

/**
 * Await initial Firebase Auth resolution.
 * Resolves with the authenticated User object (or null if unauthenticated).
 *
 * @param {number} [timeoutMs=7000] - Safe timeout in milliseconds
 * @returns {Promise<object|null>}
 */
export function waitForAuthReady(timeoutMs = 7000) {
  if (_authInitialized) {
    return Promise.resolve(_currentUser);
  }

  if (typeof window !== 'undefined' && isFirebaseConfigured()) {
    loadAuthSDK();
  }

  return new Promise((resolve) => {
    let timer = null;
    const waiter = (user) => {
      if (timer) clearTimeout(timer);
      resolve(user);
    };

    _authWaiters.push(waiter);

    timer = setTimeout(() => {
      const idx = _authWaiters.indexOf(waiter);
      if (idx !== -1) _authWaiters.splice(idx, 1);
      _authInitialized = true;
      resolve(_currentUser);
    }, timeoutMs);
  });
}

/**
 * Subscribe to authentication state changes.
 * Calls callback immediately with current user, and on every state transition.
 * Returns an unsubscribe function.
 */
export function subscribeToAuth(callback) {
  if (typeof callback !== 'function') return () => {};

  _authSubscribers.add(callback);
  // Initial synchronous callback
  callback(_currentUser);

  // Ensure SDK is active
  if (typeof window !== 'undefined' && isFirebaseConfigured()) {
    loadAuthSDK();
  }

  return () => {
    _authSubscribers.delete(callback);
  };
}

/**
 * Get current authenticated user (or null).
 */
export function getCurrentUser() {
  return _currentUser;
}

/**
 * Set current user mock (for automated test environments).
 *
 * @param {object|null} user
 */
export function setCurrentUserForTesting(user) {
  _isMockUser = user !== null;
  _currentUser = user;
  _authInitialized = true;
  _authSubscribers.forEach((cb) => {
    try { cb(user); } catch {}
  });
}

/**
 * Register a new user with Email and Password.
 */
export async function registerWithEmail(email, password, displayName = '') {
  const bundle = await loadAuthSDK();
  if (!bundle) {
    throw new Error(isFirebaseConfigured() ? 'Failed to connect to authentication service.' : 'Firebase Web App configuration is pending in project settings.');
  }

  const { auth, sdk } = bundle;
  const userCredential = await sdk.createUserWithEmailAndPassword(auth, email.trim(), password);

  if (displayName && displayName.trim() && userCredential.user) {
    try {
      await sdk.updateProfile(userCredential.user, { displayName: displayName.trim() });
    } catch (profileErr) {
      console.warn('[risePaisa:Auth] Could not set display name:', profileErr);
    }
  }

  _currentUser = auth.currentUser;
  return _currentUser;
}

/**
 * Student ID Character Set (Unambiguous Alphanumeric: excludes 0, O, 1, I)
 */
const STUDENT_ID_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

/**
 * Generate a unique, human-readable, non-sequential Student ID.
 * Example format: RP-2026-A7K9M2
 *
 * @param {number|string} [year=2026] - Current calendar year
 * @returns {string} Formatted Student ID
 */
export function generateStudentId(year = 2026) {
  const yr = String(year || 2026).trim();
  let randomPart = '';

  // Use cryptographically secure random numbers if available
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(6);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < 6; i++) {
      randomPart += STUDENT_ID_CHARS[bytes[i] % STUDENT_ID_CHARS.length];
    }
  } else {
    // Fallback for non-crypto Node runtimes
    for (let i = 0; i < 6; i++) {
      const idx = Math.floor(Math.random() * STUDENT_ID_CHARS.length);
      randomPart += STUDENT_ID_CHARS[idx];
    }
  }

  return `RP-${yr}-${randomPart}`;
}

/**
 * Generate a cryptographically secure temporary password.
 * Enforces entropy: uppercase, lowercase, digits, and safe special characters.
 *
 * @param {number} [length=12] - Password length (must be >= 12)
 * @returns {string} Temporary password
 */
export function generateTemporaryPassword(length = 12) {
  const len = Math.max(12, length);
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghijkmnpqrstuvwxyz';
  const digits = '23456789';
  const special = '!@#$%&*?';
  const allChars = upper + lower + digits + special;

  // Guarantee at least 1 of each character class
  let chars = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    digits[Math.floor(Math.random() * digits.length)],
    special[Math.floor(Math.random() * special.length)]
  ];

  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(len - 4);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < bytes.length; i++) {
      chars.push(allChars[bytes[i] % allChars.length]);
    }
  } else {
    for (let i = 4; i < len; i++) {
      chars.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }
  }

  // Shuffle array using Fisher-Yates
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join('');
}

/**
 * Standardize student internal login email identifier.
 * Note: This is an internal authentication identifier for Firebase Auth,
 * not a public mailbox.
 *
 * @param {string} studentId
 * @returns {string} E.g. "rp-2026-a7k9m2@students.risepaisa.com"
 */
export function formatStudentInternalEmail(studentId) {
  if (!studentId || typeof studentId !== 'string') return '';
  const clean = studentId.trim().toLowerCase();
  return `${clean}@students.risepaisa.com`;
}

/**
 * Check whether a string matches a student ID pattern.
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isStudentId(str) {
  if (!str || typeof str !== 'string') return false;
  const trimmed = str.trim();
  if (trimmed.includes('@')) return false;
  // Format: RP-YYYY-XXXXXX (case-insensitive) or simple RP- prefix
  return /^RP-\d{4}-[A-Z0-9]{4,10}$/i.test(trimmed) || /^RP-/i.test(trimmed);
}

/**
 * Extract normalized Student ID from internal student email identifier.
 *
 * @param {string|null} email
 * @returns {string|null} E.g. "RP-2026-A7K9M2" or null
 */
export function extractStudentIdFromEmail(email) {
  if (!email || typeof email !== 'string') return null;
  const lower = email.trim().toLowerCase();
  if (!lower.endsWith('@students.risepaisa.com')) return null;
  const idPart = lower.replace('@students.risepaisa.com', '').trim();
  return idPart.toUpperCase();
}

/**
 * Bridge helper to resolve a login identifier (Student ID or Email)
 * to an authenticated Firebase Auth login identifier.
 *
 * @param {string} identifier - User email or Student ID
 * @returns {string} Normalized email identifier for Firebase Auth
 */
export function resolveStudentLoginIdentifier(identifier) {
  if (!identifier || typeof identifier !== 'string') return '';
  const trimmed = identifier.trim();

  // If standard email address, normalize to lowercase
  if (trimmed.includes('@')) {
    return trimmed.toLowerCase();
  }

  // Treat as Student ID (e.g. RP-2026-A7K9M2)
  const normalizedId = trimmed.toUpperCase();
  return formatStudentInternalEmail(normalizedId);
}

/**
 * Validate a Nepalese mobile phone number.
 * Supported operators: NTC, Ncell, Smart Cell (10 digits starting with 98, 97, or 96).
 *
 * @param {string} phone
 * @returns {{ valid: boolean, error?: string, cleanNumber?: string, normalized?: string }}
 */
export function validateNepaliPhoneNumber(phone) {
  if (!phone || typeof phone !== 'string') {
    return { valid: false, error: 'Mobile phone number is required.' };
  }

  // Strip spaces, dashes, parentheses, dots
  let digits = phone.replace(/[\s\-\(\)\.]/g, '');

  // Strip leading international prefix if provided
  if (digits.startsWith('+977')) {
    digits = digits.slice(4);
  } else if (digits.startsWith('00977')) {
    digits = digits.slice(5);
  } else if (digits.startsWith('977') && digits.length === 13) {
    digits = digits.slice(3);
  }

  // Must be exactly 10 digits
  if (!/^\d{10}$/.test(digits)) {
    return {
      valid: false,
      error: 'Please enter a valid 10-digit mobile number (e.g. 9841XXXXXX or 9801XXXXXX).'
    };
  }

  // Check prefix: Nepalese mobile operators begin with 98, 97, or 96
  const prefix2 = digits.substring(0, 2);
  if (!['98', '97', '96'].includes(prefix2)) {
    return {
      valid: false,
      error: 'Nepalese mobile numbers must begin with 98, 97, or 96.'
    };
  }

  return {
    valid: true,
    cleanNumber: digits,
    normalized: `+977${digits}`,
    formatted: `+977 ${digits}`
  };
}

/**
 * Normalize a Nepalese phone number into standard international format: "+97798XXXXXXXX".
 *
 * @param {string} phone
 * @returns {string} Normalized phone number or original if invalid
 */
export function normalizeNepaliPhoneNumber(phone) {
  const res = validateNepaliPhoneNumber(phone);
  return res.valid ? res.normalized : String(phone || '').trim();
}

/**
 * Sign in existing user with Email or Student ID and Password.
 * Seamlessly resolves student IDs (e.g. RP-2026-A7K9M2) to internal auth identifiers.
 */
export async function loginWithEmail(emailOrStudentId, password) {
  const bundle = await loadAuthSDK();
  if (!bundle) {
    throw new Error(isFirebaseConfigured() ? 'Failed to connect to authentication service.' : 'Firebase Web App configuration is pending in project settings.');
  }

  const resolvedIdentifier = resolveStudentLoginIdentifier(emailOrStudentId);
  const { auth, sdk } = bundle;
  const userCredential = await sdk.signInWithEmailAndPassword(auth, resolvedIdentifier, password);
  _currentUser = userCredential.user;
  return _currentUser;
}

/**
 * Sign in using Google Provider (Popup).
 */
export async function loginWithGoogle() {
  const bundle = await loadAuthSDK();
  if (!bundle) {
    throw new Error(isFirebaseConfigured() ? 'Failed to connect to authentication service.' : 'Firebase Web App configuration is pending in project settings.');
  }

  const { auth, sdk } = bundle;
  const provider = new sdk.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  const result = await sdk.signInWithPopup(auth, provider);
  _currentUser = result.user;
  return _currentUser;
}

/**
 * Sign out current authenticated user.
 */
export async function logoutUser() {
  const bundle = await loadAuthSDK();
  if (!bundle) {
    _currentUser = null;
    return;
  }

  const { auth, sdk } = bundle;
  await sdk.signOut(auth);
  _currentUser = null;
}

/**
 * Send password reset email.
 */
export async function resetPassword(email) {
  const bundle = await loadAuthSDK();
  if (!bundle) {
    throw new Error(isFirebaseConfigured() ? 'Failed to connect to authentication service.' : 'Firebase Web App configuration is pending in project settings.');
  }

  const { auth, sdk } = bundle;
  await sdk.sendPasswordResetEmail(auth, email.trim());
}

/**
 * Get list of authentication providers linked to a user.
 *
 * @param {object|null} [user=null] - Firebase User object
 * @returns {string[]} Array of provider IDs (e.g. ['google.com', 'password'])
 */
export function getUserProviders(user = null) {
  const target = user || _currentUser;
  if (!target || !Array.isArray(target.providerData)) return [];
  return target.providerData.map(p => p.providerId);
}

/**
 * Check if the user has an email/password credential linked to their account.
 *
 * @param {object|null} [user=null] - Firebase User object
 * @returns {boolean}
 */
export function hasPasswordProvider(user = null) {
  const target = user || _currentUser;
  if (!target || !Array.isArray(target.providerData)) return false;
  return target.providerData.some(p => p.providerId === 'password');
}

/**
 * Change or set account password in Firebase Authentication.
 * For password users: requires current password verification before updating.
 * For Google-only users: links email/password credentials to the existing account.
 *
 * @param {object} params
 * @param {string} [params.currentPassword=''] - Current password (required if account has password provider)
 * @param {string} params.newPassword - New password (must be >= 6 chars)
 * @param {object|null} [sdkOverride=null] - Optional override bundle for tests
 * @returns {Promise<{ success: boolean, mode: 'updated' | 'linked' }>}
 */
export async function changeAccountPassword({ currentPassword = '', newPassword = '' }, sdkOverride = null) {
  if (!newPassword || typeof newPassword !== 'string' || newPassword.length < 6) {
    throw new Error('New password must be at least 6 characters.');
  }

  const bundle = sdkOverride || await loadAuthSDK();
  if (!bundle) {
    throw new Error(isFirebaseConfigured() ? 'Failed to connect to authentication service.' : 'Firebase Web App configuration is pending in project settings.');
  }

  const { auth, sdk } = bundle;
  const user = (auth && auth.currentUser) || _currentUser;
  if (!user) {
    throw new Error('Authentication required. Please sign in to change your password.');
  }

  const isPasswordUser = hasPasswordProvider(user);

  if (isPasswordUser) {
    if (!currentPassword) {
      throw new Error('Current password is required to change your password.');
    }
    // Reauthenticate with current password
    const cred = sdk.EmailAuthProvider.credential(user.email, currentPassword);
    await sdk.reauthenticateWithCredential(user, cred);
    await sdk.updatePassword(user, newPassword);
    return { success: true, mode: 'updated' };
  } else {
    // Google-only account: link email/password credential
    try {
      const cred = sdk.EmailAuthProvider.credential(user.email, newPassword);
      if (typeof sdk.linkWithCredential === 'function') {
        await sdk.linkWithCredential(user, cred);
      } else if (typeof sdk.updatePassword === 'function') {
        await sdk.updatePassword(user, newPassword);
      }
      return { success: true, mode: 'linked' };
    } catch (err) {
      if (err.code === 'auth/requires-recent-login' && typeof sdk.reauthenticateWithPopup === 'function') {
        const provider = new sdk.GoogleAuthProvider();
        await sdk.reauthenticateWithPopup(user, provider);
        const cred = sdk.EmailAuthProvider.credential(user.email, newPassword);
        if (typeof sdk.linkWithCredential === 'function') {
          await sdk.linkWithCredential(user, cred);
        } else {
          await sdk.updatePassword(user, newPassword);
        }
        return { success: true, mode: 'linked' };
      }
      if (err.code === 'auth/provider-already-linked') {
        await sdk.updatePassword(user, newPassword);
        return { success: true, mode: 'updated' };
      }
      throw err;
    }
  }
}

/**
 * Map Firebase Auth error codes into human-friendly messages.
 */
export function formatAuthError(error) {
  if (!error) return 'An unexpected error occurred. Please try again.';
  
  const code = error.code || '';
  const message = error.message || '';

  switch (code) {
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-disabled':
      return 'This account has been disabled. Please contact support.';
    case 'auth/user-not-found':
      return 'No account exists with this email address. Please register.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please verify your credentials.';
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please verify your credentials.';
    case 'auth/email-already-in-use':
      return 'An account already exists with this email address. Please sign in.';
    case 'auth/weak-password':
      return 'Password is too weak. Please use at least 6 characters with letters and numbers.';
    case 'auth/requires-recent-login':
      return 'For your security, this operation requires recent login. Please sign out and sign in again, then retry.';
    case 'auth/provider-already-linked':
      return 'A password is already configured for this account. Please use the Change Password form.';
    case 'auth/credential-already-in-use':
      return 'This credential is already linked to another account.';
    case 'auth/operation-not-allowed':
      return 'Email/Password sign-in is not enabled in the Firebase Console.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in cancelled. The Google sign-in window was closed.';
    case 'auth/popup-blocked':
      return 'Sign-in popup was blocked by your browser. Please allow popups for risepaisa.com.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized in Firebase Authentication settings. Please verify authorized domains.';
    case 'auth/too-many-requests':
      return 'Access temporarily disabled due to too many failed attempts. Please try again in a few minutes.';
    case 'auth/network-request-failed':
      return 'Network connection failed. Please check your internet connection.';
    default:
      if (message.includes('API key not valid')) {
        return 'Firebase API key configuration is pending. Please verify your Firebase project setup.';
      }
      return message.replace(/^Firebase:\s*/i, '') || 'Authentication failed. Please try again.';
  }
}

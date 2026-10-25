// ==============================================
// risePaisa - Authentication UI & Interactions
// Apple-inspired Modal Dialog & Navbar Profile Integration
// ==============================================

import {
  subscribeToAuth,
  registerWithEmail,
  loginWithEmail,
  loginWithGoogle,
  logoutUser,
  resetPassword,
  formatAuthError,
  getCurrentUser,
  hasPasswordProvider,
  getUserProviders,
  changeAccountPassword,
  isStudentId,
  extractStudentIdFromEmail,
  validateNepaliPhoneNumber,
  isAuthInitialized
} from './auth.js';
import {
  syncUserProfile,
  reconcileBookmarksOnSignIn,
  handleUserSignOut,
  resetSyncSession,
  getFirestoreDb
} from './db.js';
import { resetCourseCache, checkIsAdmin, completeStudentProfile } from './courses.js';
import { isFirebaseConfigured } from './config.js';

const ICONS = {
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  google: `<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 2-2 2m-1.5 1.5L14 9l-2-2-4 4 2 2-5 5a2 2 0 0 0 0 2.83l.17.17a2 2 0 0 0 2.83 0l5-5 2 2 4-4-2-2 3.5-3.5"/></svg>`
};

let _modalMounted = false;
let _currentTab = 'login'; // 'login' | 'register' | 'forgot'
let _isSubmitting = false;
let _desktopOutsideClickBound = false;
let _authUIInitialized = false;

/**
 * Build the HTML structure for the Apple-inspired Auth Modal.
 */
function createAuthModalHtml() {
  return `
    <div class="rp-auth-modal-overlay" id="rp-auth-modal" role="dialog" aria-modal="true" aria-label="Account Authentication">
      <div class="rp-auth-modal-card">
        <button type="button" class="rp-auth-close-btn" id="rp-auth-close" aria-label="Close dialog">
          ${ICONS.close}
        </button>

        <!-- Modal Header -->
        <div class="rp-auth-header">
          <div class="rp-auth-brand-logo">rise<span>Paisa</span></div>
          <h2 class="rp-auth-title" id="rp-auth-modal-title">Welcome to RisePaisa</h2>
          <p class="rp-auth-subtitle" id="rp-auth-modal-subtitle">Save bookmarks, track courses, and personalize your finance journey.</p>
        </div>

        <!-- Tab Switcher -->
        <div class="rp-auth-tabs" id="rp-auth-tabs" role="tablist">
          <button type="button" class="rp-auth-tab active" data-tab="login" role="tab" aria-selected="true">Sign In</button>
          <button type="button" class="rp-auth-tab" data-tab="register" role="tab" aria-selected="false">Create Account</button>
          <button type="button" class="rp-auth-tab" data-tab="forgot" role="tab" aria-selected="false">Forgot</button>
        </div>

        <!-- Alert Notification Box -->
        <div class="rp-auth-alert rp-auth-alert-error" id="rp-auth-error" role="alert"></div>
        <div class="rp-auth-alert rp-auth-alert-success" id="rp-auth-success" role="status"></div>

        <!-- Forms Container -->
        <form class="rp-auth-form" id="rp-auth-form" novalidate>
          <!-- Display Name (Register only) -->
          <div class="rp-form-group" id="rp-group-name" style="display: none;">
            <label class="rp-form-label" for="rp-auth-name">Your Full Name</label>
            <div class="rp-input-wrap">
              <span class="rp-input-icon">${ICONS.user}</span>
              <input type="text" id="rp-auth-name" class="rp-input" placeholder="e.g. Aakash Das" autocomplete="name">
            </div>
          </div>

          <!-- Email / Student ID Input (Always visible) -->
          <div class="rp-form-group">
            <label class="rp-form-label" for="rp-auth-email" id="rp-auth-email-label">Email or Student ID</label>
            <div class="rp-input-wrap">
              <span class="rp-input-icon">${ICONS.mail}</span>
              <input type="text" id="rp-auth-email" class="rp-input" placeholder="you@example.com or RP-2026-A7K9M2" required autocomplete="username">
            </div>
          </div>

          <!-- Password Input (Login & Register only) -->
          <div class="rp-form-group" id="rp-group-password">
            <label class="rp-form-label" for="rp-auth-password">Password</label>
            <div class="rp-input-wrap">
              <span class="rp-input-icon">${ICONS.lock}</span>
              <input type="password" id="rp-auth-password" class="rp-input" placeholder="••••••••" required autocomplete="current-password">
              <button type="button" class="rp-input-toggle-pwd" id="rp-toggle-pwd" aria-label="Toggle password visibility">
                ${ICONS.eye}
              </button>
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="rp-auth-submit-btn" id="rp-auth-submit">
            <span class="rp-submit-text" id="rp-submit-text">Sign In</span>
          </button>
        </form>

        <!-- Social Divider & Google Button -->
        <div id="rp-social-section">
          <div class="rp-auth-divider">
            <span>or continue with</span>
          </div>
          <button type="button" class="rp-auth-google-btn" id="rp-auth-google">
            ${ICONS.google}
            <span>Sign in with Google</span>
          </button>
        </div>

        <!-- Secondary Footnote Link -->
        <div style="text-align: center; margin-top: 14px;">
          <button type="button" class="rp-auth-footer-link" id="rp-auth-switch-link">
            Need an account? Register free
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Ensure the modal element is attached to DOM.
 */
function ensureAuthModal() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('rp-auth-modal')) return;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = createAuthModalHtml();
  document.body.appendChild(wrapper.firstElementChild);
  _modalMounted = true;
  attachModalEvents();
}

let _authModalKeydownAttached = false;
function handleAuthModalKeydown(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('rp-auth-modal');
    if (modal && modal.classList.contains('open')) {
      closeAuthModal();
    }
  }
}

/**
 * Attach interactive listeners to the modal elements.
 */
function attachModalEvents() {
  const modal = document.getElementById('rp-auth-modal');
  const closeBtn = document.getElementById('rp-auth-close');
  const form = document.getElementById('rp-auth-form');
  const tabs = document.querySelectorAll('.rp-auth-tab');
  const switchLink = document.getElementById('rp-auth-switch-link');
  const googleBtn = document.getElementById('rp-auth-google');
  const pwdToggle = document.getElementById('rp-toggle-pwd');
  const pwdInput = document.getElementById('rp-auth-password');

  if (!modal) return;

  // Close handlers
  closeBtn?.addEventListener('click', closeAuthModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeAuthModal();
  });
  if (!_authModalKeydownAttached) {
    window.addEventListener('keydown', handleAuthModalKeydown);
    _authModalKeydownAttached = true;
  }

  // Password visibility toggle
  pwdToggle?.addEventListener('click', () => {
    if (!pwdInput) return;
    const isPwd = pwdInput.type === 'password';
    pwdInput.type = isPwd ? 'text' : 'password';
  });

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setAuthTab(tab.dataset.tab);
    });
  });

  // Switch link at bottom
  switchLink?.addEventListener('click', () => {
    if (_currentTab === 'login') {
      setAuthTab('register');
    } else {
      setAuthTab('login');
    }
  });

  // Form submission
  form?.addEventListener('submit', handleFormSubmit);

  // Google sign in
  googleBtn?.addEventListener('click', handleGoogleSignIn);
}

/**
 * Switch the active tab inside the modal.
 */
export function setAuthTab(tabKey) {
  _currentTab = tabKey || 'login';
  ensureAuthModal();

  const titleEl = document.getElementById('rp-auth-modal-title');
  const subtitleEl = document.getElementById('rp-auth-modal-subtitle');
  const nameGroup = document.getElementById('rp-group-name');
  const pwdGroup = document.getElementById('rp-group-password');
  const submitText = document.getElementById('rp-submit-text');
  const socialSection = document.getElementById('rp-social-section');
  const switchLink = document.getElementById('rp-auth-switch-link');
  const tabs = document.querySelectorAll('.rp-auth-tab');

  clearAlerts();

  tabs.forEach(tab => {
    const isActive = tab.dataset.tab === _currentTab;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  const emailLabel = document.getElementById('rp-auth-email-label');
  const emailInput = document.getElementById('rp-auth-email');

  if (_currentTab === 'login') {
    if (titleEl) titleEl.textContent = 'Welcome back';
    if (subtitleEl) subtitleEl.textContent = 'Sign in to access your saved lessons and preferences.';
    if (emailLabel) emailLabel.textContent = 'Email or Student ID';
    if (emailInput) {
      emailInput.placeholder = 'you@example.com or RP-2026-A7K9M2';
      emailInput.autocomplete = 'username';
    }
    if (nameGroup) nameGroup.style.display = 'none';
    if (pwdGroup) pwdGroup.style.display = 'flex';
    if (submitText) submitText.textContent = 'Sign In';
    if (socialSection) socialSection.style.display = 'block';
    if (switchLink) switchLink.textContent = "Don't have an account? Register free";
  } else if (_currentTab === 'register') {
    if (titleEl) titleEl.textContent = 'Create your Account';
    if (subtitleEl) subtitleEl.textContent = 'Join RisePaisa free for personal finance learning.';
    if (emailLabel) emailLabel.textContent = 'Email Address';
    if (emailInput) {
      emailInput.placeholder = 'you@example.com';
      emailInput.autocomplete = 'email';
    }
    if (nameGroup) nameGroup.style.display = 'flex';
    if (pwdGroup) pwdGroup.style.display = 'flex';
    if (submitText) submitText.textContent = 'Create Account';
    if (socialSection) socialSection.style.display = 'block';
    if (switchLink) switchLink.textContent = 'Already have an account? Sign in';
  } else if (_currentTab === 'forgot') {
    if (titleEl) titleEl.textContent = 'Reset Password';
    if (subtitleEl) subtitleEl.textContent = "Enter your registered email and we'll send a reset link.";
    if (emailLabel) emailLabel.textContent = 'Registered Email Address';
    if (emailInput) {
      emailInput.placeholder = 'you@example.com';
      emailInput.autocomplete = 'email';
    }
    if (nameGroup) nameGroup.style.display = 'none';
    if (pwdGroup) pwdGroup.style.display = 'none';
    if (submitText) submitText.textContent = 'Send Reset Link';
    if (socialSection) socialSection.style.display = 'none';
    if (switchLink) switchLink.textContent = 'Remembered your password? Sign in';
  }
}

/**
 * Open the authentication modal.
 *
 * @param {string} [tab='login'] - 'login' | 'register' | 'forgot'
 * @param {object} [options={}] - Optional custom modal titles
 * @param {string} [options.title]
 * @param {string} [options.subtitle]
 */
export function openAuthModal(tab = 'login', options = {}) {
  ensureAuthModal();
  setAuthTab(tab);
  const modal = document.getElementById('rp-auth-modal');
  if (modal) {
    if (options.title) {
      const titleEl = document.getElementById('rp-auth-modal-title');
      if (titleEl) titleEl.textContent = options.title;
    }
    if (options.subtitle) {
      const subEl = document.getElementById('rp-auth-modal-subtitle');
      if (subEl) subEl.textContent = options.subtitle;
    }
    modal.classList.add('open');
    setTimeout(() => {
      const emailInput = document.getElementById('rp-auth-email');
      emailInput?.focus();
    }, 100);
  }
}

/**
 * Close the authentication modal.
 */
export function closeAuthModal() {
  const modal = document.getElementById('rp-auth-modal');
  if (modal) {
    modal.classList.remove('open');
    clearAlerts();
    // Reset modal title and subtitle to defaults
    const titleEl = document.getElementById('rp-auth-modal-title');
    if (titleEl) titleEl.textContent = 'Welcome to RisePaisa';
    const subEl = document.getElementById('rp-auth-modal-subtitle');
    if (subEl) subEl.textContent = 'Save bookmarks, track courses, and personalize your finance journey.';
  }
}

/**
 * Prompt an unauthenticated visitor to sign in to save a bookmark.
 * Renders a clean Apple-inspired prompt dialog with a prominent "Sign In" button.
 *
 * @param {object} [options]
 * @param {string} [options.title='Sign in to bookmark']
 * @param {string} [options.message]
 * @param {string} [options.contentType='lesson']
 */
export function promptSignInForBookmark(options = {}) {
  const contentType = options.contentType || 'lesson';
  const title = options.title || 'Sign in to bookmark';
  const message = options.message || `Sign in to save this ${contentType} and access your bookmarks later.`;

  let promptModal = document.getElementById('rp-bookmark-auth-prompt');
  if (!promptModal) {
    promptModal = document.createElement('div');
    promptModal.id = 'rp-bookmark-auth-prompt';
    promptModal.className = 'rp-auth-modal-overlay';
    promptModal.setAttribute('role', 'dialog');
    promptModal.setAttribute('aria-modal', 'true');
    promptModal.setAttribute('aria-label', title);
    promptModal.innerHTML = `
      <div class="rp-auth-modal-card rp-bookmark-prompt-card">
        <button type="button" class="rp-auth-close-btn" id="rp-prompt-close-btn" aria-label="Close dialog">
          ${ICONS.close}
        </button>
        <div class="rp-prompt-icon-badge" aria-hidden="true">
          ${ICONS.bookmark}
        </div>
        <h3 class="rp-prompt-title" id="rp-prompt-title">${title}</h3>
        <p class="rp-prompt-message" id="rp-prompt-message">${message}</p>
        <div class="rp-prompt-actions">
          <button type="button" class="btn btn-primary rp-prompt-signin-btn" id="rp-prompt-signin-btn">
            Sign In
          </button>
          <button type="button" class="btn btn-secondary rp-prompt-cancel-btn" id="rp-prompt-cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(promptModal);

    const closePrompt = () => {
      promptModal.classList.remove('open');
    };

    promptModal.querySelector('#rp-prompt-close-btn')?.addEventListener('click', closePrompt);
    promptModal.querySelector('#rp-prompt-cancel-btn')?.addEventListener('click', closePrompt);
    promptModal.addEventListener('click', (e) => {
      if (e.target === promptModal) closePrompt();
    });

    promptModal.querySelector('#rp-prompt-signin-btn')?.addEventListener('click', () => {
      closePrompt();
      setTimeout(() => {
        openAuthModal('login', {
          title: 'Sign in to bookmark',
          subtitle: message
        });
      }, 80);
    });
  } else {
    const titleEl = document.getElementById('rp-prompt-title');
    if (titleEl) titleEl.textContent = title;
    const msgEl = document.getElementById('rp-prompt-message');
    if (msgEl) msgEl.textContent = message;
  }

  promptModal.classList.add('open');
  setTimeout(() => {
    promptModal.querySelector('#rp-prompt-signin-btn')?.focus();
  }, 60);
}

function clearAlerts() {
  const errEl = document.getElementById('rp-auth-error');
  const succEl = document.getElementById('rp-auth-success');
  if (errEl) {
    errEl.textContent = '';
    errEl.classList.remove('show');
  }
  if (succEl) {
    succEl.textContent = '';
    succEl.classList.remove('show');
  }
}

function showError(msg) {
  clearAlerts();
  const errEl = document.getElementById('rp-auth-error');
  if (errEl) {
    errEl.textContent = msg;
    errEl.classList.add('show');
  }
}

function showSuccess(msg) {
  clearAlerts();
  const succEl = document.getElementById('rp-auth-success');
  if (succEl) {
    succEl.textContent = msg;
    succEl.classList.add('show');
  }
}

function setSubmitting(loading) {
  _isSubmitting = loading;
  const submitBtn = document.getElementById('rp-auth-submit');
  const submitText = document.getElementById('rp-submit-text');
  if (!submitBtn || !submitText) return;

  submitBtn.disabled = loading;
  if (loading) {
    submitText.innerHTML = `<span class="rp-spinner" aria-hidden="true"></span> Processing…`;
  } else {
    if (_currentTab === 'login') submitText.textContent = 'Sign In';
    else if (_currentTab === 'register') submitText.textContent = 'Create Account';
    else submitText.textContent = 'Send Reset Link';
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();
  if (_isSubmitting) return;

  const email = document.getElementById('rp-auth-email')?.value?.trim();
  const password = document.getElementById('rp-auth-password')?.value;
  const name = document.getElementById('rp-auth-name')?.value?.trim();

  if (!email) {
    showError('Please enter your email address.');
    return;
  }

  if (!isFirebaseConfigured()) {
    showError('Firebase Web App configuration is pending in project settings. Please verify configuration.');
    return;
  }

  setSubmitting(true);
  clearAlerts();

  try {
    if (_currentTab === 'login') {
      if (!password) {
        showError('Please enter your password.');
        setSubmitting(false);
        return;
      }
      await loginWithEmail(email, password);
      showSuccess('Signed in successfully.');
      setTimeout(() => closeAuthModal(), 600);
    } else if (_currentTab === 'register') {
      if (!password || password.length < 6) {
        showError('Password must be at least 6 characters.');
        setSubmitting(false);
        return;
      }
      await registerWithEmail(email, password, name);
      showSuccess('Account created successfully!');
      setTimeout(() => closeAuthModal(), 600);
    } else if (_currentTab === 'forgot') {
      await resetPassword(email);
      showSuccess('Password reset link sent! Check your inbox.');
    }
  } catch (err) {
    showError(formatAuthError(err));
  } finally {
    setSubmitting(false);
  }
}

async function handleGoogleSignIn() {
  if (!isFirebaseConfigured()) {
    showError('Firebase Web App configuration is pending. Please verify configuration.');
    return;
  }

  clearAlerts();
  try {
    await loginWithGoogle();
    showSuccess('Signed in with Google.');
    setTimeout(() => closeAuthModal(), 600);
  } catch (err) {
    showError(formatAuthError(err));
  }
}

/**
 * Escape HTML special characters for safe string interpolation.
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Build HTML structure for the Account & Security Settings modal dialog.
 */
function createSettingsModalHtml(user, isAdmin = false) {
  const displayName = escapeHtml(user?.displayName || user?.email?.split('@')[0] || 'User');
  const userEmail = escapeHtml(user?.email || '');
  const initial = (displayName.charAt(0) || 'U').toUpperCase();
  const photoUrl = user?.photoURL ? escapeHtml(user.photoURL) : null;
  const isPasswordUser = hasPasswordProvider(user);
  const providers = getUserProviders(user);

  const avatarHtml = photoUrl
    ? `<img src="${photoUrl}" alt="${displayName}" referrerpolicy="no-referrer">`
    : initial;

  const providerChips = providers.map((p) => {
    if (p === 'google.com') {
      return `<span class="rp-provider-chip">${ICONS.google} Google</span>`;
    }
    if (p === 'password') {
      return `<span class="rp-provider-chip">${ICONS.mail} Password</span>`;
    }
    return `<span class="rp-provider-chip">${ICONS.user} ${escapeHtml(p)}</span>`;
  }).join('');

  return `
    <div class="rp-auth-modal-overlay" id="rp-settings-modal" role="dialog" aria-modal="true" aria-label="Account and Security Settings">
      <div class="rp-auth-modal-card rp-settings-card">
        <button type="button" class="rp-auth-close-btn" id="rp-settings-close" aria-label="Close settings dialog">
          ${ICONS.close}
        </button>

        <!-- Header -->
        <div class="rp-auth-header">
          <div class="rp-auth-brand-logo">rise<span>Paisa</span></div>
          <h2 class="rp-auth-title" id="rp-settings-title">Account & Security</h2>
          <p class="rp-auth-subtitle">Manage your credentials, password, and platform authorizations.</p>
        </div>

        <!-- User Information Card -->
        <div class="rp-user-info-card">
          <div class="rp-user-info-top">
            <div class="nav-user-avatar" style="width: 40px; height: 40px; font-size: 15px;">${avatarHtml}</div>
            <div class="rp-user-info-meta">
              <div class="rp-user-info-name">${displayName}</div>
              <div class="rp-user-info-email">${userEmail || 'No email attached'}</div>
            </div>
          </div>
          <div class="rp-user-info-bottom">
            <span class="rp-role-badge ${isAdmin ? 'rp-role-admin' : 'rp-role-member'}">
              ${isAdmin ? `${ICONS.shield} Administrator` : `${ICONS.user} Member`}
            </span>
            <div class="rp-provider-tags">
              ${providerChips || `<span class="rp-provider-chip">${ICONS.user} Member</span>`}
            </div>
          </div>
          <div class="rp-uid-row">
            <span>UID:</span>
            <span class="rp-uid-chip" id="rp-settings-uid-val" title="${escapeHtml(user?.uid || '')}">${escapeHtml(user?.uid || 'Not available')}</span>
            <button type="button" class="rp-btn-copy-uid" id="rp-settings-copy-uid" aria-label="Copy Firebase Auth UID">Copy UID</button>
          </div>
        </div>

        <!-- Password Management Section -->
        <div class="rp-settings-section">
          <h3 class="rp-settings-section-title">Password & Security</h3>
          <p class="rp-settings-section-desc" id="rp-settings-desc">
            ${isPasswordUser
              ? 'Update your RisePaisa login password. Enter your current password to verify your identity.'
              : 'You are currently signed in with Google. Set an account password below to enable direct email and password login alongside Google OAuth.'}
          </p>

          <!-- Alert Notification Box -->
          <div class="rp-auth-alert rp-auth-alert-error" id="rp-settings-error" role="alert"></div>
          <div class="rp-auth-alert rp-auth-alert-success" id="rp-settings-success" role="status"></div>

          <!-- Password Change Form -->
          <form class="rp-auth-form" id="rp-settings-pwd-form" novalidate>
            ${isPasswordUser ? `
            <div class="rp-form-group" id="rp-settings-group-current">
              <label class="rp-form-label" for="rp-settings-current-pwd">Current Password</label>
              <div class="rp-input-wrap">
                <span class="rp-input-icon">${ICONS.lock}</span>
                <input type="password" id="rp-settings-current-pwd" class="rp-input" placeholder="Current password" required autocomplete="current-password">
                <button type="button" class="rp-input-toggle-pwd" data-target="rp-settings-current-pwd" aria-label="Toggle current password visibility">
                  ${ICONS.eye}
                </button>
              </div>
            </div>
            ` : ''}

            <div class="rp-form-group">
              <label class="rp-form-label" for="rp-settings-new-pwd">${isPasswordUser ? 'New Password' : 'Set Account Password'}</label>
              <div class="rp-input-wrap">
                <span class="rp-input-icon">${ICONS.lock}</span>
                <input type="password" id="rp-settings-new-pwd" class="rp-input" placeholder="At least 6 characters" minlength="6" required autocomplete="new-password">
                <button type="button" class="rp-input-toggle-pwd" data-target="rp-settings-new-pwd" aria-label="Toggle new password visibility">
                  ${ICONS.eye}
                </button>
              </div>
            </div>

            <div class="rp-form-group">
              <label class="rp-form-label" for="rp-settings-confirm-pwd">Confirm ${isPasswordUser ? 'New Password' : 'Password'}</label>
              <div class="rp-input-wrap">
                <span class="rp-input-icon">${ICONS.lock}</span>
                <input type="password" id="rp-settings-confirm-pwd" class="rp-input" placeholder="Repeat password" minlength="6" required autocomplete="new-password">
                <button type="button" class="rp-input-toggle-pwd" data-target="rp-settings-confirm-pwd" aria-label="Toggle confirm password visibility">
                  ${ICONS.eye}
                </button>
              </div>
            </div>

            <button type="submit" class="rp-auth-submit-btn" id="rp-settings-submit-btn">
              ${ICONS.key}
              <span id="rp-settings-submit-text">${isPasswordUser ? 'Update Password' : 'Set Account Password'}</span>
            </button>

            ${isPasswordUser && user?.email ? `
            <div style="text-align: center; margin-top: 10px;">
              <button type="button" class="rp-auth-footer-link" id="rp-settings-forgot-link">
                Forgot current password? Send reset link
              </button>
            </div>
            ` : ''}
          </form>
        </div>
      </div>
    </div>
  `;
}

let _settingsModalKeydownAttached = false;
function handleSettingsModalKeydown(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('rp-settings-modal');
    if (modal && modal.classList.contains('open')) {
      closeSettingsModal();
    }
  }
}

/**
 * Attach listeners to Settings modal elements.
 */
function attachSettingsModalEvents(user) {
  const modal = document.getElementById('rp-settings-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('rp-settings-close');
  const copyUidBtn = document.getElementById('rp-settings-copy-uid');
  const form = document.getElementById('rp-settings-pwd-form');
  const forgotLink = document.getElementById('rp-settings-forgot-link');
  const errorAlert = document.getElementById('rp-settings-error');
  const successAlert = document.getElementById('rp-settings-success');
  const submitBtn = document.getElementById('rp-settings-submit-btn');
  const submitText = document.getElementById('rp-settings-submit-text');

  function showSettingsErr(msg) {
    if (errorAlert) {
      errorAlert.textContent = msg;
      errorAlert.classList.add('show');
    }
    if (successAlert) successAlert.classList.remove('show');
  }

  function showSettingsOk(msg) {
    if (successAlert) {
      successAlert.textContent = msg;
      successAlert.classList.add('show');
    }
    if (errorAlert) errorAlert.classList.remove('show');
  }

  // Close handlers
  closeBtn?.addEventListener('click', closeSettingsModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSettingsModal();
  });
  if (!_settingsModalKeydownAttached) {
    window.addEventListener('keydown', handleSettingsModalKeydown);
    _settingsModalKeydownAttached = true;
  }

  // Password visibility toggles
  modal.querySelectorAll('.rp-input-toggle-pwd').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;
      const isPwd = input.type === 'password';
      input.type = isPwd ? 'text' : 'password';
      toggle.classList.toggle('active', isPwd);
    });
  });

  // Copy UID button
  copyUidBtn?.addEventListener('click', async () => {
    const uid = user?.uid || '';
    if (!uid) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(uid);
      } else {
        const ta = document.createElement('textarea');
        ta.value = uid;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      copyUidBtn.textContent = 'Copied!';
      setTimeout(() => {
        if (copyUidBtn) copyUidBtn.textContent = 'Copy UID';
      }, 2000);
    } catch (err) {
      console.warn('Failed to copy UID:', err);
    }
  });

  // Forgot password link
  forgotLink?.addEventListener('click', async () => {
    if (!user?.email) return;
    try {
      forgotLink.disabled = true;
      await resetPassword(user.email);
      showSettingsOk(`Password reset email sent to ${user.email}. Check your inbox.`);
    } catch (err) {
      showSettingsErr(formatAuthError(err));
    } finally {
      forgotLink.disabled = false;
    }
  });

  // Password change / link submit
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorAlert) errorAlert.classList.remove('show');
    if (successAlert) successAlert.classList.remove('show');

    const currentPwdInput = document.getElementById('rp-settings-current-pwd');
    const newPwdInput = document.getElementById('rp-settings-new-pwd');
    const confirmPwdInput = document.getElementById('rp-settings-confirm-pwd');

    const isPasswordUser = hasPasswordProvider(user);
    const currentPassword = currentPwdInput ? currentPwdInput.value : '';
    const newPassword = newPwdInput ? newPwdInput.value : '';
    const confirmPassword = confirmPwdInput ? confirmPwdInput.value : '';

    if (isPasswordUser && !currentPassword) {
      showSettingsErr('Please enter your current password.');
      currentPwdInput?.focus();
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      showSettingsErr('New password must be at least 6 characters.');
      newPwdInput?.focus();
      return;
    }

    if (newPassword !== confirmPassword) {
      showSettingsErr('New passwords do not match. Please verify.');
      confirmPwdInput?.focus();
      return;
    }

    if (isPasswordUser && currentPassword === newPassword) {
      showSettingsErr('New password must be different from your current password.');
      newPwdInput?.focus();
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.textContent = 'Updating...';

    try {
      const res = await changeAccountPassword({
        currentPassword,
        newPassword
      });

      if (res && res.mode === 'linked') {
        showSettingsOk('Password created successfully! You can now sign in using your email and password or continue with Google.');
      } else {
        showSettingsOk('Password changed successfully.');
      }

      form.reset();
    } catch (err) {
      showSettingsErr(formatAuthError(err));
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitText) submitText.textContent = isPasswordUser ? 'Update Password' : 'Set Account Password';
    }
  });
}

/**
 * Ensure the Settings modal is rendered into DOM and initialized.
 */
export function ensureSettingsModal(user, isAdmin = false) {
  if (typeof document === 'undefined') return null;

  const existing = document.getElementById('rp-settings-modal');
  if (existing) {
    existing.remove();
  }

  const wrapper = document.createElement('div');
  wrapper.innerHTML = createSettingsModalHtml(user, isAdmin);
  const modalEl = wrapper.firstElementChild;
  document.body.appendChild(modalEl);
  attachSettingsModalEvents(user);
  return modalEl;
}

/**
 * Open the Account & Security Settings dialog.
 */
export async function openSettingsModal() {
  if (typeof document === 'undefined') return;

  const user = getCurrentUser();
  if (!user) {
    openAuthModal('login');
    return;
  }

  let isAdmin = false;
  try {
    isAdmin = await checkIsAdmin(user.uid);
  } catch (err) {
    console.warn('[risePaisa:Auth] Admin status check in settings:', err);
  }

  const modal = ensureSettingsModal(user, isAdmin);
  if (modal) {
    modal.classList.add('open');
    document.body.style.position = '';
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close the Account & Security Settings dialog.
 */
export function closeSettingsModal() {
  if (typeof document === 'undefined') return;
  const modal = document.getElementById('rp-settings-modal');
  if (modal) {
    modal.classList.remove('open');
  }
  document.body.style.position = '';
  document.body.style.overflow = '';
}

/**
 * Build HTML structure for the First-Login Student Onboarding modal dialog.
 */
function createOnboardingModalHtml(user, studentData = {}) {
  const studentId = studentData.studentId || extractStudentIdFromEmail(user?.email) || '';
  const initialName = escapeHtml(studentData.displayName || user?.displayName || '');
  const initialPhone = escapeHtml(studentData.phoneNumber || '');
  const initialEmail = escapeHtml(studentData.email || (user?.email && !user.email.endsWith('@students.risepaisa.com') ? user.email : ''));

  return `
    <div class="rp-auth-modal-overlay open rp-onboarding-overlay" id="rp-onboarding-modal" role="dialog" aria-modal="true" aria-label="Complete Your Student Profile">
      <div class="rp-auth-modal-card rp-onboarding-card">
        <!-- Header -->
        <div class="rp-auth-header">
          <div class="rp-auth-brand-logo">rise<span>Paisa</span></div>
          <h2 class="rp-auth-title" id="rp-onboarding-title">Complete Your Student Profile</h2>
          <p class="rp-auth-subtitle">Before accessing your courses, please provide the basic information required for your RisePaisa student account.</p>
        </div>

        ${studentId ? `
          <div class="rp-onboard-student-badge">
            <span class="rp-badge-label">Student ID</span>
            <span class="rp-badge-val">${escapeHtml(studentId)}</span>
          </div>
        ` : ''}

        <!-- Alerts -->
        <div class="rp-auth-alert rp-auth-alert-error" id="rp-onboard-error" role="alert"></div>
        <div class="rp-auth-alert rp-auth-alert-success" id="rp-onboard-success" role="status"></div>

        <!-- Onboarding Form -->
        <form class="rp-auth-form" id="rp-onboard-form" novalidate>
          <div class="rp-form-group">
            <label class="rp-form-label" for="rp-onboard-name">Full Name <span class="rp-required">*</span></label>
            <div class="rp-input-wrap">
              <span class="rp-input-icon">${ICONS.user}</span>
              <input type="text" id="rp-onboard-name" class="rp-input" placeholder="e.g. Aakash Das" value="${initialName}" required autocomplete="name">
            </div>
          </div>

          <div class="rp-form-group">
            <label class="rp-form-label" for="rp-onboard-phone">Mobile Phone Number <span class="rp-required">*</span></label>
            <div class="rp-input-wrap">
              <span class="rp-input-icon">${ICONS.shield}</span>
              <input type="tel" id="rp-onboard-phone" class="rp-input" placeholder="98XXXXXXXX" value="${initialPhone}" required autocomplete="tel">
            </div>
            <span class="rp-field-hint">10-digit Nepalese mobile number (e.g. 9841000000, 9741000000)</span>
          </div>

          <div class="rp-form-group">
            <label class="rp-form-label" for="rp-onboard-email">Personal Email Address <span class="rp-optional">(optional)</span></label>
            <div class="rp-input-wrap">
              <span class="rp-input-icon">${ICONS.mail}</span>
              <input type="email" id="rp-onboard-email" class="rp-input" placeholder="you@example.com" value="${initialEmail}" autocomplete="email">
            </div>
            <span class="rp-field-hint">Used for official communications and course updates</span>
          </div>

          <div class="rp-form-group rp-checkbox-group">
            <label class="rp-checkbox-label">
              <input type="checkbox" id="rp-onboard-terms" required>
              <span>I accept the <a href="/terms" target="_blank" rel="noopener">Terms of Service</a> and <a href="/privacy" target="_blank" rel="noopener">Privacy Notice</a>.</span>
            </label>
          </div>

          <button type="submit" class="rp-auth-submit-btn" id="rp-onboard-submit">
            <span id="rp-onboard-submit-text">Complete Profile & Start Learning</span>
          </button>
        </form>

        <div style="text-align: center; margin-top: 14px;">
          <button type="button" class="rp-auth-footer-link" id="rp-onboard-signout" style="color: #666;">
            Sign out of this account
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Ensure Onboarding Modal element is created and mounted.
 */
export function ensureOnboardingModal(user, studentData = {}) {
  if (typeof document === 'undefined') return null;

  const existing = document.getElementById('rp-onboarding-modal');
  if (existing) existing.remove();

  const wrapper = document.createElement('div');
  wrapper.innerHTML = createOnboardingModalHtml(user, studentData);
  const modalEl = wrapper.firstElementChild;
  document.body.appendChild(modalEl);
  attachOnboardingModalEvents(user);
  return modalEl;
}

/**
 * Open the First-Login Student Onboarding modal.
 */
export function openOnboardingModal(user, studentData = {}) {
  const modal = ensureOnboardingModal(user, studentData);
  if (modal) {
    modal.classList.add('open');
    document.body.style.position = '';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const nameInput = document.getElementById('rp-onboard-name');
      nameInput?.focus();
    }, 150);
  }
}

/**
 * Close the Onboarding Modal.
 */
export function closeOnboardingModal() {
  if (typeof document === 'undefined') return;
  const modal = document.getElementById('rp-onboarding-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.remove();
  }
  document.body.style.position = '';
  document.body.style.overflow = '';
}

/**
 * Attach listeners to Onboarding Modal elements.
 */
function attachOnboardingModalEvents(user) {
  const form = document.getElementById('rp-onboard-form');
  const signoutBtn = document.getElementById('rp-onboard-signout');
  const errorAlert = document.getElementById('rp-onboard-error');
  const successAlert = document.getElementById('rp-onboard-success');
  const submitBtn = document.getElementById('rp-onboard-submit');
  const submitText = document.getElementById('rp-onboard-submit-text');

  signoutBtn?.addEventListener('click', async () => {
    closeOnboardingModal();
    await logoutUser();
  });

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorAlert) {
      errorAlert.textContent = '';
      errorAlert.classList.remove('show');
    }
    if (successAlert) {
      successAlert.textContent = '';
      successAlert.classList.remove('show');
    }

    const name = document.getElementById('rp-onboard-name')?.value?.trim();
    const phone = document.getElementById('rp-onboard-phone')?.value?.trim();
    const email = document.getElementById('rp-onboard-email')?.value?.trim();
    const termsAccepted = document.getElementById('rp-onboard-terms')?.checked;

    if (!name || name.length < 2) {
      if (errorAlert) {
        errorAlert.textContent = 'Please enter your full name (minimum 2 characters).';
        errorAlert.classList.add('show');
      }
      return;
    }

    const phoneRes = validateNepaliPhoneNumber(phone);
    if (!phoneRes.valid) {
      if (errorAlert) {
        errorAlert.textContent = phoneRes.error || 'Please enter a valid 10-digit Nepalese mobile number.';
        errorAlert.classList.add('show');
      }
      return;
    }

    if (!termsAccepted) {
      if (errorAlert) {
        errorAlert.textContent = 'You must accept the Terms of Service and Privacy Notice to proceed.';
        errorAlert.classList.add('show');
      }
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (submitText) submitText.innerHTML = `<span class="rp-spinner" aria-hidden="true"></span> Saving Profile…`;

    try {
      await completeStudentProfile(user.uid, {
        displayName: name,
        phoneNumber: phoneRes.normalized,
        email: email || null,
        termsAccepted: true
      });

      if (successAlert) {
        successAlert.textContent = 'Profile completed successfully! Welcome to RisePaisa.';
        successAlert.classList.add('show');
      }

      setTimeout(() => {
        closeOnboardingModal();
        if (window.location.pathname.startsWith('/admin')) {
          window.location.href = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';
        } else if (window.location.pathname.includes('/learn')) {
          window.location.reload();
        } else {
          window.location.href = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';
        }
      }, 1000);
    } catch (err) {
      if (errorAlert) {
        errorAlert.textContent = err.message || 'Failed to save student profile. Please try again.';
        errorAlert.classList.add('show');
      }
      if (submitBtn) submitBtn.disabled = false;
      if (submitText) submitText.textContent = 'Complete Profile & Start Learning';
    }
  });
}

/**
 * Update the navbar desktop and mobile containers based on user auth state.
 */
export function updateNavUserUI(user) {
  const desktopContainer = document.getElementById('desktop-auth-container');
  const mobileContainer = document.getElementById('mobile-auth-container');

  if (desktopContainer) {
    if (!user) {
      desktopContainer.innerHTML = `
        <button type="button" class="nav-auth-btn" id="nav-signin-btn" aria-label="Sign in to your account">
          ${ICONS.user}
          <span>Sign In</span>
        </button>
      `;
      document.getElementById('nav-signin-btn')?.addEventListener('click', () => openAuthModal('login'));
    } else {
      const studentId = extractStudentIdFromEmail(user.email);
      const emailDisplay = studentId ? `Student ID: ${studentId}` : escapeHtml(user.email || '');
      const rawName = user.displayName || (studentId ? studentId : (user.email?.split('@')[0] || 'User'));
      const displayName = escapeHtml(rawName);
      const initial = (displayName.charAt(0) || 'U').toUpperCase();
      const photoUrl = user.photoURL ? escapeHtml(user.photoURL) : null;

      const avatarHtml = photoUrl
        ? `<img src="${photoUrl}" alt="${displayName}" referrerpolicy="no-referrer">`
        : initial;

      desktopContainer.innerHTML = `
        <button type="button" class="nav-user-badge" id="nav-user-badge" aria-expanded="false" aria-haspopup="true" aria-label="User account menu for ${displayName}">
          <div class="nav-user-avatar">${avatarHtml}</div>
          <span class="nav-user-name">${displayName}</span>
          <span class="nav-user-chevron">${ICONS.chevronDown}</span>
        </button>
        <div class="nav-user-menu" id="nav-user-menu" role="menu" aria-label="Account Menu">
          <div class="nav-user-menu-header">
            <div class="nav-user-menu-name">${displayName}</div>
            <div class="nav-user-menu-email">${emailDisplay}</div>
          </div>
          <a href="/courses/nepse-stock-market-basics/learn?lesson=lesson-1" class="nav-user-menu-item" id="nav-menu-my-courses" role="menuitem" style="text-decoration: none;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>My Courses</span>
          </a>
          <button type="button" class="nav-user-menu-item" id="nav-menu-bookmarks" role="menuitem">
            ${ICONS.bookmark}
            <span>My Bookmarks</span>
          </button>
          <button type="button" class="nav-user-menu-item" id="nav-menu-settings" role="menuitem">
            ${ICONS.settings}
            <span>Account & Security</span>
          </button>
          <a href="/admin/enrollments" class="nav-user-menu-item admin-item" id="nav-menu-admin" role="menuitem" style="display: none; text-decoration: none;">
            ${ICONS.shield}
            <span>Admin Console</span>
          </a>
          <button type="button" class="nav-user-menu-item logout-item" id="nav-menu-logout" role="menuitem">
            ${ICONS.logout}
            <span>Sign Out</span>
          </button>
        </div>
      `;

      const badge = document.getElementById('nav-user-badge');
      const menu = document.getElementById('nav-user-menu');
      const logoutBtn = document.getElementById('nav-menu-logout');
      const bookmarksBtn = document.getElementById('nav-menu-bookmarks');
      const settingsBtn = document.getElementById('nav-menu-settings');

      badge?.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu?.classList.toggle('open');
        badge.classList.toggle('open', isOpen);
        badge.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      settingsBtn?.addEventListener('click', () => {
        menu?.classList.remove('open');
        badge?.classList.remove('open');
        badge?.setAttribute('aria-expanded', 'false');
        openSettingsModal();
      });

      logoutBtn?.addEventListener('click', async () => {
        await logoutUser();
      });

      bookmarksBtn?.addEventListener('click', () => {
        menu?.classList.remove('open');
        badge?.classList.remove('open');
        badge?.setAttribute('aria-expanded', 'false');
        window.location.href = '/learn#bookmarks';
      });

      // Close dropdown when clicking outside (bound once)
      if (!_desktopOutsideClickBound) {
        _desktopOutsideClickBound = true;
        document.addEventListener('click', (e) => {
          const container = document.getElementById('desktop-auth-container');
          if (container && !container.contains(e.target)) {
            const m = document.getElementById('nav-user-menu');
            const b = document.getElementById('nav-user-badge');
            m?.classList.remove('open');
            b?.classList.remove('open');
            b?.setAttribute('aria-expanded', 'false');
          }
        });
      }


      // Check admin status to reveal Admin Console link
      checkIsAdmin(user.uid).then((isAdmin) => {
        if (isAdmin) {
          const adminLink = document.getElementById('nav-menu-admin');
          if (adminLink) adminLink.style.display = 'flex';
        }
      }).catch(() => {});
    }
  }

  if (mobileContainer) {
    if (!user) {
      mobileContainer.innerHTML = `
        <div class="mobile-auth-guest-card">
          <div class="mobile-auth-guest-info">
            <span class="mobile-auth-guest-title">Student Portal</span>
            <span class="mobile-auth-guest-subtitle">Sign in to track progress & courses</span>
          </div>
          <button type="button" class="btn btn-primary btn-sm mobile-auth-signin-btn" id="mobile-signin-btn" aria-label="Sign in to your account">
            Sign In
          </button>
        </div>
      `;
      document.getElementById('mobile-signin-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-menu')?.classList.remove('open');
        document.getElementById('mobile-menu-overlay')?.classList.remove('open');
        document.getElementById('navbar')?.classList.remove('has-mobile-open');
        document.body.style.position = '';
        document.body.style.overflow = '';
        setTimeout(() => openAuthModal('login'), 120);
      });
    } else {
      const studentId = extractStudentIdFromEmail(user.email);
      const emailDisplay = studentId ? `Student ID: ${studentId}` : escapeHtml(user.email || '');
      const rawName = user.displayName || (studentId ? studentId : (user.email?.split('@')[0] || 'User'));
      const displayName = escapeHtml(rawName);
      const initial = (displayName.charAt(0) || 'U').toUpperCase();
      const photoUrl = user.photoURL ? escapeHtml(user.photoURL) : null;
      const avatarHtml = photoUrl
        ? `<img src="${photoUrl}" alt="${displayName}" referrerpolicy="no-referrer">`
        : initial;

      mobileContainer.innerHTML = `
        <div class="mobile-auth-user-card">
          <div class="mobile-auth-profile-row">
            <div class="mobile-auth-avatar-wrap">
              <div class="nav-user-avatar">${avatarHtml}</div>
            </div>
            <div class="mobile-auth-details">
              <span class="mobile-auth-user-name">${displayName}</span>
              <span class="mobile-auth-user-email">${emailDisplay}</span>
            </div>
          </div>
          <div class="mobile-auth-actions-grid" role="group" aria-label="Account Actions">
            <a href="/courses/nepse-stock-market-basics/learn?lesson=lesson-1" class="mobile-auth-btn" id="mobile-courses-btn">
              <svg class="mobile-auth-btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span>Courses</span>
            </a>
            <button type="button" class="mobile-auth-btn" id="mobile-settings-btn">
              <svg class="mobile-auth-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              <span>Settings</span>
            </button>
            <a href="/admin/enrollments" class="mobile-auth-btn mobile-auth-admin-btn" id="mobile-admin-btn" style="display: none;">
              <svg class="mobile-auth-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Admin</span>
            </a>
            <button type="button" class="mobile-auth-btn mobile-auth-logout-btn" id="mobile-logout-btn">
              <svg class="mobile-auth-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      `;

      document.getElementById('mobile-settings-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-menu')?.classList.remove('open');
        document.getElementById('mobile-menu-overlay')?.classList.remove('open');
        document.getElementById('navbar')?.classList.remove('has-mobile-open');
        document.body.style.position = '';
        document.body.style.overflow = '';
        setTimeout(() => openSettingsModal(), 120);
      });

      document.getElementById('mobile-logout-btn')?.addEventListener('click', async () => {
        await logoutUser();
      });

      checkIsAdmin(user.uid).then((isAdmin) => {
        if (isAdmin) {
          const mobileAdmin = document.getElementById('mobile-admin-btn');
          if (mobileAdmin) mobileAdmin.style.display = 'inline-flex';
        }
      }).catch(() => {});
    }
  }
}

/**
 * Initialize the Auth UI bindings and listener.
 */
export function initAuthUI() {
  if (typeof window === 'undefined') return;
  if (_authUIInitialized) return;
  _authUIInitialized = true;

  // Mount modal markup
  ensureAuthModal();


  let _lastKnownUid = null;

  // Listen to auth state transitions
  subscribeToAuth((user) => {
    // If auth is still initializing, do not treat initial null as a sign-out event
    if (!isAuthInitialized() && !user) {
      return;
    }

    if (typeof window !== 'undefined') {
      window._rpAuthReady = true;
    }

    updateNavUserUI(user);

    // Isolate account data if switching accounts in the same browser session
    if (_lastKnownUid && (!user || _lastKnownUid !== user.uid)) {
      resetCourseCache();
      resetSyncSession(_lastKnownUid);
    }
    const previousUid = _lastKnownUid;
    _lastKnownUid = user ? user.uid : null;

    if (user && user.uid) {
      // Authenticated user signed in: sync profile & reconcile bookmarks safely
      syncUserProfile(user).catch((err) => {
        console.warn('[risePaisa:Auth] Profile sync skipped or failed:', err);
      });

      reconcileBookmarksOnSignIn(user.uid).then((res) => {
        if (res && res.success && typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('rp:bookmarks-synced', { detail: { uid: user.uid, res } }));
        }
      }).catch((err) => {
        console.warn('[risePaisa:Auth] Bookmark reconciliation skipped or failed:', err);
      });

      // Check student onboarding status and account suspension
      getFirestoreDb().then((bundle) => {
        if (!bundle) return;
        const { db, sdk } = bundle;
        return sdk.getDoc(sdk.doc(db, 'users', user.uid));
      }).then((snap) => {
        if (snap && (typeof snap.exists === 'function' ? snap.exists() : Boolean(snap.exists))) {
          const uData = snap.data() || {};
          if (uData.accountStatus === 'suspended') {
            alert('Your RisePaisa account is currently suspended. Please contact support for assistance.');
            logoutUser();
            return;
          }
          const isStudent = uData.role === 'student' || Boolean(uData.studentId) || (user.email && user.email.includes('@students.risepaisa.com'));
          if (isStudent && !uData.onboardingCompleted) {
            openOnboardingModal(user, uData);
          }
        }
      }).catch((err) => {
        console.warn('[risePaisa:Auth] User status/onboarding check skipped:', err);
      });
    } else {
      // ONLY perform sign-out cleanup if a previously signed-in user signed out
      closeOnboardingModal();
      if (previousUid) {
        handleUserSignOut();
        resetCourseCache();
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('rp:bookmarks-synced', { detail: { uid: null } }));
        }
      }
    }
  });
}


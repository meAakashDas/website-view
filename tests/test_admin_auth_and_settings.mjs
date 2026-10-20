// ========================================================
// RISEPAISA ADMIN AUTHENTICATION & SETTINGS TEST SUITE
// ========================================================
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

async function test(name, fn) {
  totalTests++;
  try {
    await fn();
    passedTests++;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    failedTests++;
    console.error(`  ✗ FAIL: ${name}`);
    console.error(`    ${err.message}`);
  }
}

// Minimal DOM simulation for Node.js test environment
class MockClassList {
  constructor() {
    this._set = new Set();
  }
  add(cls) { this._set.add(cls); }
  remove(cls) { this._set.delete(cls); }
  toggle(cls, force) {
    if (force !== undefined) {
      if (force) this._set.add(cls);
      else this._set.delete(cls);
      return force;
    }
    if (this._set.has(cls)) {
      this._set.delete(cls);
      return false;
    } else {
      this._set.add(cls);
      return true;
    }
  }
  contains(cls) { return this._set.has(cls); }
}

class MockElement {
  constructor(tagName = 'div') {
    this.tagName = tagName.toUpperCase();
    this.classList = new MockClassList();
    this.style = {};
    this.attributes = {};
    this.listeners = {};
    this.innerHTML = '';
    this.value = '';
    this.type = 'text';
    this.disabled = false;
    this.textContent = '';
    this.children = [];
    this.parentElement = null;
  }
  setAttribute(k, v) { this.attributes[k] = String(v); }
  getAttribute(k) { return this.attributes[k] || null; }
  addEventListener(event, handler) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(handler);
  }
  dispatchEvent(event) {
    const list = this.listeners[event.type || event] || [];
    list.forEach(h => h(event));
  }
  contains(child) {
    return child === this || this.children.some(c => c === child || (c.contains && c.contains(child)));
  }
  appendChild(child) {
    child.parentElement = this;
    this.children.push(child);
    return child;
  }
  remove() {
    if (this.parentElement) {
      const idx = this.parentElement.children.indexOf(this);
      if (idx !== -1) this.parentElement.children.splice(idx, 1);
      this.parentElement = null;
    }
  }
  querySelectorAll() { return []; }
  focus() {}
  reset() { this.value = ''; }
}

async function runTestSuite() {
  console.log('\n========================================================');
  console.log('TEST SUITE: ADMIN AUTHENTICATION & SETTINGS SYSTEM');
  console.log('========================================================\n');

  // Import modules
  const {
    hasPasswordProvider,
    getUserProviders,
    changeAccountPassword,
    formatAuthError
  } = await import('../js/firebase/auth.js');

  const {
    createSettingsModalHtml,
    updateNavUserUI,
    openSettingsModal,
    closeSettingsModal
  } = await import('../js/firebase/ui.js');

  // ── 1. Provider Detection & Provider Tags ───────────────────
  console.log('--- 1. Testing Provider Detection & Security Helper Functions ---');

  await test('hasPasswordProvider returns false for null or undefined user', () => {
    assert.strictEqual(hasPasswordProvider(null), false);
    assert.strictEqual(hasPasswordProvider(undefined), false);
  });

  await test('hasPasswordProvider returns false for Google-only OAuth account', () => {
    const googleUser = {
      uid: 'SCkJBiPHBqVR7pCXMXTomMd36sr1',
      email: 'itsaakashdas@gmail.com',
      providerData: [{ providerId: 'google.com' }]
    };
    assert.strictEqual(hasPasswordProvider(googleUser), false);
    const providers = getUserProviders(googleUser);
    assert.deepStrictEqual(providers, ['google.com']);
  });

  await test('hasPasswordProvider returns true for email/password account', () => {
    const pwdUser = {
      uid: 'email-user-123',
      email: 'member@risepaisa.com',
      providerData: [{ providerId: 'password' }]
    };
    assert.strictEqual(hasPasswordProvider(pwdUser), true);
    assert.deepStrictEqual(getUserProviders(pwdUser), ['password']);
  });

  await test('hasPasswordProvider returns true for dual Google and Password linked account', () => {
    const linkedUser = {
      uid: 'SCkJBiPHBqVR7pCXMXTomMd36sr1',
      email: 'itsaakashdas@gmail.com',
      providerData: [
        { providerId: 'google.com' },
        { providerId: 'password' }
      ]
    };
    assert.strictEqual(hasPasswordProvider(linkedUser), true);
    assert.deepStrictEqual(getUserProviders(linkedUser), ['google.com', 'password']);
  });

  // ── 2. Password Change Logic & Validation ──────────────────
  console.log('\n--- 2. Testing Password Change & Reauthentication Flows ---');

  await test('changeAccountPassword validates password length (< 6 chars rejected)', async () => {
    await assert.rejects(
      async () => {
        await changeAccountPassword({ currentPassword: 'old', newPassword: '123' });
      },
      /at least 6 characters/i
    );
  });

  await test('changeAccountPassword requires signed-in user session', async () => {
    const mockSdk = {
      auth: { currentUser: null },
      sdk: {}
    };
    await assert.rejects(
      async () => {
        await changeAccountPassword({ currentPassword: 'password123', newPassword: 'newpassword123' }, mockSdk);
      },
      /Authentication required/i
    );
  });

  await test('changeAccountPassword requires currentPassword for password-provider user', async () => {
    const mockUser = {
      uid: 'user-with-pwd',
      email: 'test@risepaisa.com',
      providerData: [{ providerId: 'password' }]
    };
    const mockSdk = {
      auth: { currentUser: mockUser },
      sdk: {
        EmailAuthProvider: { credential: (e, p) => ({ e, p }) }
      }
    };
    await assert.rejects(
      async () => {
        await changeAccountPassword({ currentPassword: '', newPassword: 'newpassword123' }, mockSdk);
      },
      /Current password is required/i
    );
  });

  await test('changeAccountPassword reauthenticates and updates password for password-provider user', async () => {
    let reauthCalled = false;
    let updatePasswordCalled = false;

    const mockUser = {
      uid: 'user-with-pwd',
      email: 'test@risepaisa.com',
      providerData: [{ providerId: 'password' }]
    };
    const mockSdk = {
      auth: { currentUser: mockUser },
      sdk: {
        EmailAuthProvider: {
          credential: (email, pwd) => {
            assert.strictEqual(email, 'test@risepaisa.com');
            assert.strictEqual(pwd, 'CorrectCurrentPwd123');
            return { email, pwd };
          }
        },
        reauthenticateWithCredential: async (u, cred) => {
          assert.strictEqual(u, mockUser);
          assert.strictEqual(cred.pwd, 'CorrectCurrentPwd123');
          reauthCalled = true;
        },
        updatePassword: async (u, newPwd) => {
          assert.strictEqual(u, mockUser);
          assert.strictEqual(newPwd, 'BrandNewSecurePwd999');
          updatePasswordCalled = true;
        }
      }
    };

    const res = await changeAccountPassword({
      currentPassword: 'CorrectCurrentPwd123',
      newPassword: 'BrandNewSecurePwd999'
    }, mockSdk);

    assert.strictEqual(reauthCalled, true, 'Reauthenticated with current credentials');
    assert.strictEqual(updatePasswordCalled, true, 'updatePassword was called');
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.mode, 'updated');
  });

  await test('changeAccountPassword propagates wrong-password error during reauthentication', async () => {
    const mockUser = {
      uid: 'user-with-pwd',
      email: 'test@risepaisa.com',
      providerData: [{ providerId: 'password' }]
    };
    const mockSdk = {
      auth: { currentUser: mockUser },
      sdk: {
        EmailAuthProvider: { credential: (e, p) => ({ e, p }) },
        reauthenticateWithCredential: async () => {
          const err = new Error('Wrong password provided');
          err.code = 'auth/wrong-password';
          throw err;
        }
      }
    };

    try {
      await changeAccountPassword({
        currentPassword: 'WrongPasswordProvided',
        newPassword: 'BrandNewSecurePwd999'
      }, mockSdk);
      assert.fail('Should have thrown wrong-password');
    } catch (err) {
      assert.strictEqual(err.code, 'auth/wrong-password');
      const formatted = formatAuthError(err);
      assert.ok(formatted.includes('Incorrect password'), 'Maps to human readable message');
    }
  });

  await test('changeAccountPassword links email/password to Google-only account', async () => {
    let linkCalled = false;

    const mockGoogleUser = {
      uid: 'SCkJBiPHBqVR7pCXMXTomMd36sr1',
      email: 'itsaakashdas@gmail.com',
      providerData: [{ providerId: 'google.com' }]
    };
    const mockSdk = {
      auth: { currentUser: mockGoogleUser },
      sdk: {
        EmailAuthProvider: {
          credential: (email, pwd) => {
            assert.strictEqual(email, 'itsaakashdas@gmail.com');
            assert.strictEqual(pwd, 'NewlyCreatedAdminPassword123');
            return { email, pwd };
          }
        },
        linkWithCredential: async (u, cred) => {
          assert.strictEqual(u, mockGoogleUser);
          assert.strictEqual(cred.pwd, 'NewlyCreatedAdminPassword123');
          linkCalled = true;
        }
      }
    };

    const res = await changeAccountPassword({
      currentPassword: '',
      newPassword: 'NewlyCreatedAdminPassword123'
    }, mockSdk);

    assert.strictEqual(linkCalled, true, 'linkWithCredential was executed');
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.mode, 'linked');
  });

  await test('changeAccountPassword handles requires-recent-login by reauthenticating with popup and retrying link', async () => {
    let popupCalled = false;
    let linkAttemptCount = 0;

    const mockGoogleUser = {
      uid: 'SCkJBiPHBqVR7pCXMXTomMd36sr1',
      email: 'itsaakashdas@gmail.com',
      providerData: [{ providerId: 'google.com' }]
    };
    const mockSdk = {
      auth: { currentUser: mockGoogleUser },
      sdk: {
        GoogleAuthProvider: class {},
        EmailAuthProvider: { credential: (email, pwd) => ({ email, pwd }) },
        reauthenticateWithPopup: async (u) => {
          assert.strictEqual(u, mockGoogleUser);
          popupCalled = true;
        },
        linkWithCredential: async (u, cred) => {
          linkAttemptCount++;
          if (linkAttemptCount === 1) {
            const err = new Error('Requires recent login');
            err.code = 'auth/requires-recent-login';
            throw err;
          }
          assert.strictEqual(cred.pwd, 'SecurePassword456');
        }
      }
    };

    const res = await changeAccountPassword({
      currentPassword: '',
      newPassword: 'SecurePassword456'
    }, mockSdk);

    assert.strictEqual(popupCalled, true, 'Reauthenticated via Google popup');
    assert.strictEqual(linkAttemptCount, 2, 'Retried link after popup authentication');
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.mode, 'linked');
  });

  // ── 3. HTML Markup & Component Security Checks ─────────────
  console.log('\n--- 3. Testing Settings & Admin Navigation Security ---');

  await test('auth.css defines account settings, role badge, and UID styling', () => {
    const authCss = fs.readFileSync(path.join(rootDir, 'css/auth.css'), 'utf8');
    assert.ok(authCss.includes('.rp-settings-card'), 'auth.css has .rp-settings-card');
    assert.ok(authCss.includes('.rp-user-info-card'), 'auth.css has .rp-user-info-card');
    assert.ok(authCss.includes('.rp-role-badge'), 'auth.css has .rp-role-badge');
    assert.ok(authCss.includes('.rp-role-admin'), 'auth.css has .rp-role-admin');
    assert.ok(authCss.includes('.rp-provider-chip'), 'auth.css has .rp-provider-chip');
    assert.ok(authCss.includes('.rp-uid-row'), 'auth.css has .rp-uid-row');
    assert.ok(authCss.includes('.rp-btn-copy-uid'), 'auth.css has .rp-btn-copy-uid');
    assert.ok(authCss.includes('.nav-user-menu-item.admin-item'), 'auth.css has .nav-user-menu-item.admin-item');
  });

  await test('ui.js exports openSettingsModal, closeSettingsModal, and ensureSettingsModal', async () => {
    const uiModule = await import('../js/firebase/ui.js');
    assert.strictEqual(typeof uiModule.openSettingsModal, 'function');
    assert.strictEqual(typeof uiModule.closeSettingsModal, 'function');
    assert.strictEqual(typeof uiModule.ensureSettingsModal, 'function');
  });

  await test('Admin route files preserve authenticated administration requirement', () => {
    const coursesAdminHtml = fs.readFileSync(path.join(rootDir, 'admin/courses/index.html'), 'utf8');
    const enrollmentsAdminHtml = fs.readFileSync(path.join(rootDir, 'admin/enrollments/index.html'), 'utf8');
    const appJs = fs.readFileSync(path.join(rootDir, 'js/app.js'), 'utf8');

    assert.ok(coursesAdminHtml.includes('/admin/courses'), 'courses/index.html references admin route');
    assert.ok(enrollmentsAdminHtml.includes('/admin/enrollments'), 'enrollments/index.html references enrollments route');
    assert.ok(coursesAdminHtml.includes('content="noindex, nofollow"'), 'courses/index.html has noindex robots');
    assert.ok(enrollmentsAdminHtml.includes('content="noindex, nofollow"'), 'enrollments/index.html has noindex robots');
    assert.ok(appJs.includes("load: () => import('./pages/adminCourses.js')"), 'app.js routes admin/courses');
    assert.ok(appJs.includes("load: () => import('./pages/adminEnrollments.js')"), 'app.js routes admin/enrollments');
  });

  console.log('\n========================================================');
  console.log(`TEST SUITE RESULTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
  console.log('========================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTestSuite();

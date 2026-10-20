// ==============================================
// risePaisa - Student Enrollment Management Console (Admin Interface)
// Focused, secure, minimal enrollment, provisioning & expiration manager
// ==============================================

import { ROUTES } from '../routes.js';
import { setPageMeta } from '../components.js';
import {
  checkIsAdmin,
  checkIsAdminDetailed,
  searchStudentUser,
  fetchStudentEnrollments,
  grantStudentEnrollment,
  revokeStudentEnrollment,
  renewStudentEnrollment,
  fetchEnrollmentAuditLogs,
  fetchAdminCourses,
  sanitizeText,
  parseDateToMillis,
  ENROLLMENT_STATUS,
  createStudentAccount,
  suspendStudentAccount,
  reactivateStudentAccount,
  resetStudentPassword,
  updateStudentProfile,
  fetchStudentDirectory
} from '../firebase/courses.js';
import {
  subscribeToAuth,
  getCurrentUser,
  isAuthInitialized,
  waitForAuthReady,
  logoutUser,
  generateStudentId,
  generateTemporaryPassword,
  validateNepaliPhoneNumber,
  normalizeNepaliPhoneNumber
} from '../firebase/auth.js';
import { openAuthModal } from '../firebase/ui.js';

const AE_ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  history: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>`,
  slash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 2-2 2m-1.5 1.5L14 9l-2-2-4 4 2 2-5 5a2 2 0 0 0 0 2.83l.17.17a2 2 0 0 0 2.83 0l5-5 2 2 4-4-2-2 3.5-3.5"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
};

/**
 * Format a timestamp value into readable localized date and UTC ISO string.
 *
 * @param {any} timestamp
 * @returns {string}
 */
function formatDate(timestamp) {
  if (!timestamp) return 'None (Permanent)';
  const ms = parseDateToMillis(timestamp);
  if (!ms) return 'Invalid Date';
  const d = new Date(ms);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Format a full timestamp for audit logs and tooltips.
 *
 * @param {any} timestamp
 * @returns {string}
 */
function formatFullDateTime(timestamp) {
  if (!timestamp) return 'None';
  const ms = parseDateToMillis(timestamp);
  if (!ms) return 'Unknown';
  const d = new Date(ms);
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Render the static SSR shell of the Admin Enrollment Management page.
 *
 * @returns {string} HTML string
 */
export function renderAdminEnrollmentsPage() {
  return `
    <div class="ac-page ae-page" id="ae-page">
      <!-- Breadcrumb Bar -->
      <nav class="ac-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container ac-breadcrumb-inner">
          <a href="${ROUTES.HOME}" class="ac-crumb-link">Home</a>
          <span class="ac-crumb-sep">/</span>
          <a href="${ROUTES.ADMIN_COURSES || '/admin/courses'}" class="ac-crumb-link">Admin Portal</a>
          <span class="ac-crumb-sep">/</span>
          <span class="ac-crumb-current" aria-current="page">Student Enrollments</span>
        </div>
      </nav>

      <!-- Admin Tab Switcher -->
      <div class="container ae-nav-tabs-wrap">
        <div class="ae-nav-tabs" role="tablist" aria-label="Admin Navigation Tabs">
          <a href="${ROUTES.ADMIN_COURSES || '/admin/courses'}" class="ae-tab-btn" role="tab" aria-selected="false">
            ${AE_ICONS.book} Courses &amp; Lessons
          </a>
          <a href="${ROUTES.ADMIN_ENROLLMENTS || '/admin/enrollments'}" class="ae-tab-btn active" role="tab" aria-selected="true">
            ${AE_ICONS.user} Student Enrollments
          </a>
        </div>
      </div>

      <!-- Header Section -->
      <header class="ac-header-section">
        <div class="container ac-header-inner">
          <div>
            <div class="ac-badge">Administrator Portal</div>
            <h1 class="ac-title">Enrollment Management</h1>
            <p class="ac-lead">Search registered students, view account profiles, manually provision course access, and manage expiration dates.</p>
          </div>
          <div class="ac-header-actions" id="ae-header-actions">
            <button type="button" class="btn btn-primary ae-add-student-btn" id="ae-add-student-btn">
              ${AE_ICONS.plus} Add Student
            </button>
          </div>
        </div>
      </header>

      <!-- Main Workspace -->
      <main class="container ac-main-content">
        <div id="ae-alert-slot" class="ac-alert-slot" role="alert" aria-live="assertive"></div>
        <div id="ae-workspace" class="ae-workspace" aria-live="polite">
          <div class="ac-loading-state">
            <div class="ac-spinner"></div>
            <p>Checking administrative authorization...</p>
          </div>
        </div>
      </main>

      <!-- Modal Slot for Confirmation & Forms -->
      <div id="ae-modal-slot"></div>
    </div>
  `;
}

/**
 * Initialize dynamic student search, enrollment tables, grant/revoke actions, and audit trail.
 *
 * @returns {Function} Cleanup function
 */
export function initAdminEnrollmentsPage() {
  const workspace = document.getElementById('ae-workspace');
  const alertSlot = document.getElementById('ae-alert-slot');
  const headerActions = document.getElementById('ae-header-actions');
  const modalSlot = document.getElementById('ae-modal-slot');
  if (!workspace) return () => {};

  setPageMeta(
    'Student Enrollment Management | risePaisa Admin',
    'Manage manual student course enrollments, access provisioning, and expirations.',
    ROUTES.ADMIN_ENROLLMENTS
  );

  let authUnsubscribe = null;
  let currentUser = null;
  let activeStudent = null; // { uid, studentId, email, displayName, photoURL, createdAt, updatedAt, note, ... }
  let studentEnrollments = [];
  let availableCourses = [];
  let auditLogs = [];
  let directoryStudents = [];
  let directoryFilterStatus = 'all'; // 'all' | 'active' | 'suspended'
  let directorySearchQuery = '';
  let isSubmitting = false;

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape' && modalSlot && modalSlot.innerHTML.trim() !== '') {
      modalSlot.innerHTML = '';
    }
  };
  window.addEventListener('keydown', handleEscapeKey);

  modalSlot?.addEventListener('click', (e) => {
    if (e.target && e.target.classList && e.target.classList.contains('ae-modal-backdrop')) {
      modalSlot.innerHTML = '';
    }
  });

  function showAlert(message, type = 'info') {
    if (!alertSlot) return;
    alertSlot.innerHTML = `
      <div class="ac-alert ac-alert-${type}">
        <span>${sanitizeText(message)}</span>
        <button type="button" class="ac-alert-close" aria-label="Close notification">&times;</button>
      </div>
    `;
    alertSlot.querySelector('.ac-alert-close')?.addEventListener('click', () => {
      alertSlot.innerHTML = '';
    });
  }

  function clearAlert() {
    if (alertSlot) alertSlot.innerHTML = '';
  }

  /**
   * Safe Clipboard API wrapper with fallback for copying credentials and IDs.
   */
  async function copyToClipboard(text, btnElement, successMsg = 'Copied!') {
    if (!text) return;
    const originalText = btnElement ? btnElement.innerHTML : '';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      if (btnElement) {
        btnElement.textContent = successMsg;
        setTimeout(() => {
          if (btnElement) btnElement.innerHTML = originalText;
        }, 2000);
      }
    } catch (err) {
      console.warn('Copy failed:', err);
      if (btnElement) {
        btnElement.textContent = 'Copy failed';
        setTimeout(() => {
          if (btnElement) btnElement.innerHTML = originalText;
        }, 2000);
      }
    }
  }

  // ── Render Search & Management Interface ───────────────────────────────────
  function renderEnrollmentWorkspace() {
    clearAlert();

    // Populate header action button
    if (headerActions) {
      headerActions.innerHTML = `
        <button type="button" class="btn btn-primary ae-add-student-btn" id="ae-add-student-btn">
          ${AE_ICONS.plus} Add Student
        </button>
      `;
      document.getElementById('ae-add-student-btn')?.addEventListener('click', openAddStudentModal);
    }

    workspace.innerHTML = `
      <!-- Search Card -->
      <section class="ae-search-card" aria-label="Student Account Search">
        <div class="ae-card-header ae-header-with-action">
          <div class="ae-card-title-group">
            <span class="ae-card-icon">${AE_ICONS.search}</span>
            <div>
              <h2 class="ae-card-title">Student Account Search</h2>
              <p class="ae-card-subtitle">Search registered students by Student ID (e.g. RP-2026-XXXXXX), email, or Firebase UID.</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary btn-sm ae-add-student-btn" id="ae-search-card-add-btn">
            ${AE_ICONS.plus} Add Student
          </button>
        </div>

        <form id="ae-search-form" class="ae-search-form" autocomplete="off">
          <div class="ae-search-input-wrap">
            <input
              type="text"
              id="ae-search-input"
              class="ae-input"
              placeholder="e.g. RP-2026-A7K9M2, student@gmail.com, or 4hX9wK2mN8..."
              value="${activeStudent ? sanitizeText(activeStudent.studentId || activeStudent.email || activeStudent.uid) : ''}"
              required
              aria-label="Student ID, Email, or UID"
            />
            <button type="submit" class="btn btn-primary ae-search-submit" id="ae-search-btn">
              ${AE_ICONS.search} Search Student
            </button>
          </div>
          <span class="ae-search-hint">
            Tip: Search by Student ID (e.g. <code>RP-2026-...</code>), student's personal email, or Firebase Auth UID.
          </span>
        </form>
      </section>

      <!-- Dynamic Student View Slot -->
      <div id="ae-student-details-slot">
        ${activeStudent ? renderStudentContentHtml() : `
          <div class="ae-initial-state-card">
            <div class="ae-initial-icon">${AE_ICONS.user}</div>
            <h3>No Student Selected</h3>
            <p>Enter a student's ID, email address, or Firebase UID above, or choose a student from the directory below to manage course access, credentials, and profile.</p>
          </div>
        `}
      </div>

      <!-- Student Directory Section Slot -->
      <div id="ae-directory-slot">
        <div class="ac-loading-state" style="padding:var(--space-8) 0;">
          <div class="ac-spinner"></div>
          <p>Loading student directory...</p>
        </div>
      </div>
    `;

    document.getElementById('ae-search-card-add-btn')?.addEventListener('click', openAddStudentModal);

    // Bind Search Form
    const searchForm = document.getElementById('ae-search-form');
    searchForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('ae-search-input');
      const val = input ? input.value.trim() : '';
      if (!val) return;
      await performStudentSearch(val);
    });

    if (activeStudent) {
      bindStudentActionButtons();
    }
    loadStudentDirectory();
  }

  // ── Search Handler ─────────────────────────────────────────────────────────
  let activeSearchReqId = 0;

  async function performStudentSearch(queryStr) {
    if (!currentUser) return;
    clearAlert();

    const searchReqId = ++activeSearchReqId;
    const searchBtn = document.getElementById('ae-search-btn');
    const slot = document.getElementById('ae-student-details-slot');

    if (searchBtn) {
      searchBtn.disabled = true;
      searchBtn.innerHTML = `<span class="ae-mini-spinner"></span> Searching...`;
    }

    if (slot) {
      slot.innerHTML = `
        <div class="ac-loading-state">
          <div class="ac-spinner"></div>
          <p>Searching student directory in Cloud Firestore...</p>
        </div>
      `;
    }

    try {
      const searchResult = await searchStudentUser(currentUser.uid, queryStr);
      if (searchReqId !== activeSearchReqId) return;

      if (!searchResult.found) {
        activeStudent = null;
        studentEnrollments = [];
        auditLogs = [];
        showAlert(searchResult.message || `No student account found for "${queryStr}".`, 'error');
        if (slot) {
          slot.innerHTML = `
            <div class="ae-initial-state-card">
              <div class="ae-initial-icon">${AE_ICONS.slash}</div>
              <h3>Student Not Found</h3>
              <p>${sanitizeText(searchResult.message || 'No matching student account was found.')}</p>
            </div>
          `;
        }
        return;
      }

      activeStudent = searchResult.user;

      // Fetch student's course enrollments and recent audit logs in parallel
      const [enrollments, logs] = await Promise.all([
        fetchStudentEnrollments(currentUser.uid, activeStudent.uid),
        fetchEnrollmentAuditLogs(currentUser.uid, { studentUid: activeStudent.uid, limit: 20 })
      ]);

      if (searchReqId !== activeSearchReqId) return;

      studentEnrollments = enrollments;
      auditLogs = logs;

      if (slot) {
        slot.innerHTML = renderStudentContentHtml();
        bindStudentActionButtons();
      }

      showAlert(`Loaded student profile for ${activeStudent.studentId || activeStudent.email || activeStudent.uid}.`, 'success');
    } catch (err) {
      if (searchReqId !== activeSearchReqId) return;
      console.error('[risePaisa:Admin] Search error:', err);
      showAlert(err.message || 'An error occurred during search.', 'error');
      if (slot) {
        slot.innerHTML = `
          <div class="ae-initial-state-card">
            <div class="ae-initial-icon">${AE_ICONS.slash}</div>
            <h3>Search Request Failed</h3>
            <p>${sanitizeText(err.message || 'Could not complete search.')}</p>
          </div>
        `;
      }
    } finally {
      if (searchBtn) {
        searchBtn.disabled = false;
        searchBtn.innerHTML = `${AE_ICONS.search} Search Student`;
      }
    }
  }

  // ── Student Directory Loader & Table Renderer ──────────────────────────────
  async function loadStudentDirectory() {
    if (!currentUser) return;
    try {
      directoryStudents = await fetchStudentDirectory(currentUser.uid);
      renderDirectorySection();
    } catch (err) {
      console.warn('[risePaisa:Admin] Failed to load directory:', err);
      const slot = document.getElementById('ae-directory-slot');
      if (slot) {
        slot.innerHTML = `
          <div class="ae-directory-card">
            <div class="ae-card-header">
              <h3 class="ae-card-title">Student Directory</h3>
            </div>
            <div class="ae-empty-table-state">
              <p>Could not load student directory: ${sanitizeText(err.message || 'Check administrator permissions.')}</p>
              <button type="button" class="btn btn-sm btn-outline" id="ae-retry-dir-btn">Retry</button>
            </div>
          </div>
        `;
        document.getElementById('ae-retry-dir-btn')?.addEventListener('click', loadStudentDirectory);
      }
    }
  }

  function renderDirectorySection() {
    const slot = document.getElementById('ae-directory-slot');
    if (!slot) return;

    const query = (directorySearchQuery || '').toLowerCase().trim();
    const filtered = directoryStudents.filter(s => {
      if (directoryFilterStatus !== 'all' && s.accountStatus !== directoryFilterStatus) {
        return false;
      }
      if (!query) return true;
      const sId = (s.studentId || '').toLowerCase();
      const name = (s.displayName || '').toLowerCase();
      const phone = (s.phoneNumber || '').toLowerCase();
      const email = (s.email || '').toLowerCase();
      const internalEmail = (s.internalEmail || '').toLowerCase();
      const uid = (s.uid || '').toLowerCase();
      return sId.includes(query) || name.includes(query) || phone.includes(query) || email.includes(query) || internalEmail.includes(query) || uid.includes(query);
    });

    slot.innerHTML = `
      <section class="ae-directory-card" id="ae-directory-card" aria-label="Student Directory">
        <div class="ae-card-header ae-header-with-action">
          <div>
            <h3 class="ae-card-title">Student Directory (${directoryStudents.length})</h3>
            <p class="ae-card-subtitle">All student accounts, credentials, statuses, and administrative actions.</p>
          </div>
          <button type="button" class="btn btn-primary btn-sm ae-add-student-btn" id="ae-dir-add-btn">
            ${AE_ICONS.plus} Add Student
          </button>
        </div>

        <!-- Directory Toolbar -->
        <div class="ae-directory-toolbar">
          <div class="ae-search-input-wrap ae-dir-search-wrap">
            <input
              type="text"
              id="ae-dir-search-input"
              class="ae-input ae-dir-search-input"
              placeholder="Filter by Student ID, Name, Phone, or Email…"
              value="${sanitizeText(directorySearchQuery)}"
              aria-label="Filter students directory"
            />
          </div>

          <div class="ae-status-filters" role="radiogroup" aria-label="Status Filters">
            <button type="button" class="ae-filter-pill ${directoryFilterStatus === 'all' ? 'active' : ''}" data-filter="all">
              All (${directoryStudents.length})
            </button>
            <button type="button" class="ae-filter-pill ${directoryFilterStatus === 'active' ? 'active' : ''}" data-filter="active">
              Active (${directoryStudents.filter(s => s.accountStatus === 'active').length})
            </button>
            <button type="button" class="ae-filter-pill ${directoryFilterStatus === 'suspended' ? 'active' : ''}" data-filter="suspended">
              Suspended (${directoryStudents.filter(s => s.accountStatus === 'suspended').length})
            </button>
          </div>
        </div>

        <!-- Table -->
        ${filtered.length === 0 ? `
          <div class="ae-empty-table-state">
            <p>No student accounts match the filter criteria.</p>
          </div>
        ` : `
          <div class="ae-table-responsive">
            <table class="ae-table ae-dir-table">
              <thead>
                <tr>
                  <th scope="col">Student ID</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                  <th scope="col">Joined</th>
                  <th scope="col" class="ae-th-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.map(s => {
                  const isSusp = s.accountStatus === 'suspended';
                  const sId = s.studentId || s.uid.substring(0, 10);
                  return `
                    <tr class="ae-table-row">
                      <td class="ae-cell-title">
                        <strong style="font-family:monospace;font-size:13px;color:#0066cc;">${sanitizeText(sId)}</strong>
                      </td>
                      <td>
                        <strong>${sanitizeText(s.displayName || 'Pending Profile')}</strong>
                        ${!s.onboardingCompleted ? '<span class="ae-sub-tag">New</span>' : ''}
                      </td>
                      <td class="ae-cell-date">${sanitizeText(s.phoneNumber || '—')}</td>
                      <td class="ae-cell-date ae-text-muted">${sanitizeText(s.email || (s.internalEmail ? 'ID Auth' : '—'))}</td>
                      <td>
                        <span class="ae-status-pill ${isSusp ? 'ae-badge-revoked' : 'ae-badge-active'}">
                          ${isSusp ? AE_ICONS.slash : AE_ICONS.check} <span>${isSusp ? 'Suspended' : 'Active'}</span>
                        </span>
                      </td>
                      <td class="ae-cell-date ae-text-muted">${formatDate(s.createdAt)}</td>
                      <td class="ae-cell-actions">
                        <button type="button" class="btn btn-sm btn-ghost ae-dir-view-btn" data-uid="${sanitizeText(s.uid)}" data-student-id="${sanitizeText(s.studentId || s.uid)}" title="View profile & course enrollments">
                          View
                        </button>
                        <button type="button" class="btn btn-sm btn-ghost ae-dir-edit-btn" data-uid="${sanitizeText(s.uid)}" title="Edit student profile">
                          Edit
                        </button>
                        ${isSusp ? `
                          <button type="button" class="btn btn-sm btn-primary ae-dir-reactivate-btn" data-uid="${sanitizeText(s.uid)}" title="Reactivate account">
                            Reactivate
                          </button>
                        ` : `
                          <button type="button" class="btn btn-sm btn-ghost ae-btn-danger ae-dir-suspend-btn" data-uid="${sanitizeText(s.uid)}" title="Suspend account">
                            Suspend
                          </button>
                        `}
                        <button type="button" class="btn btn-sm btn-ghost ae-dir-reset-btn" data-uid="${sanitizeText(s.uid)}" title="Reset temporary password">
                          Reset Pwd
                        </button>
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        `}
      </section>
    `;

    // Bind directory events
    document.getElementById('ae-dir-add-btn')?.addEventListener('click', openAddStudentModal);

    const dirInput = document.getElementById('ae-dir-search-input');
    dirInput?.addEventListener('input', (e) => {
      directorySearchQuery = e.target.value;
      renderDirectorySection();
      const updatedInput = document.getElementById('ae-dir-search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
      }
    });

    const filterPills = slot.querySelectorAll('.ae-filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        directoryFilterStatus = pill.getAttribute('data-filter') || 'all';
        renderDirectorySection();
      });
    });

    // View button
    slot.querySelectorAll('.ae-dir-view-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const query = btn.getAttribute('data-student-id') || btn.getAttribute('data-uid');
        if (query) {
          const sInput = document.getElementById('ae-search-input');
          if (sInput) sInput.value = query;
          await performStudentSearch(query);
          document.getElementById('ae-student-details-slot')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Edit button
    slot.querySelectorAll('.ae-dir-edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = btn.getAttribute('data-uid');
        const st = directoryStudents.find(s => s.uid === uid);
        if (st) openEditProfileModal(st);
      });
    });

    // Suspend button
    slot.querySelectorAll('.ae-dir-suspend-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = btn.getAttribute('data-uid');
        const st = directoryStudents.find(s => s.uid === uid);
        if (st) openSuspendConfirmModal(st);
      });
    });

    // Reactivate button
    slot.querySelectorAll('.ae-dir-reactivate-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = btn.getAttribute('data-uid');
        const st = directoryStudents.find(s => s.uid === uid);
        if (st) openReactivateConfirmModal(st);
      });
    });

    // Reset password button
    slot.querySelectorAll('.ae-dir-reset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = btn.getAttribute('data-uid');
        const st = directoryStudents.find(s => s.uid === uid);
        if (st) openResetPasswordModal(st);
      });
    });
  }

  // ── Render Student Content (Details, Enrollments Table, Audit Trail) ───────
  function renderStudentContentHtml() {
    if (!activeStudent) return '';

    const activeCount = studentEnrollments.filter(e => e.isActive).length;
    const expiredCount = studentEnrollments.filter(e => e.displayStatus === 'expired').length;
    const revokedCount = studentEnrollments.filter(e => e.displayStatus === 'revoked').length;

    return `
      <!-- Student Profile Card -->
      <section class="ae-profile-card" aria-label="Student Account Details">
        <div class="ae-profile-header">
          <div class="ae-avatar-slot">
            ${activeStudent.photoURL ? `
              <img src="${sanitizeText(activeStudent.photoURL)}" alt="Avatar" class="ae-avatar-img" />
            ` : `
              <div class="ae-avatar-placeholder">${AE_ICONS.user}</div>
            `}
          </div>

          <div class="ae-profile-info">
            <div class="ae-profile-name-row">
              <h2 class="ae-profile-name">${sanitizeText(activeStudent.displayName || 'Registered Student')}</h2>
              ${activeStudent.studentId ? `
                <span class="ae-student-id-badge" title="Student ID">
                  <strong>ID:</strong> <code>${sanitizeText(activeStudent.studentId)}</code>
                  <button type="button" class="ae-copy-mini-btn" data-copy="${sanitizeText(activeStudent.studentId)}" title="Copy Student ID">
                    ${AE_ICONS.copy}
                  </button>
                </span>
              ` : ''}
              <span class="ae-uid-badge" title="Firebase Auth UID">
                <code>${sanitizeText(activeStudent.uid)}</code>
                <button type="button" class="ae-copy-mini-btn" data-copy="${sanitizeText(activeStudent.uid)}" title="Copy UID">
                  ${AE_ICONS.copy}
                </button>
              </span>
            </div>

            <div class="ae-profile-meta-row">
              <span class="ae-meta-item">
                <strong>Phone:</strong> ${sanitizeText(activeStudent.phoneNumber || 'Not provided')}
              </span>
              <span class="ae-meta-item">
                <strong>Email:</strong> ${sanitizeText(activeStudent.email || (activeStudent.internalEmail ? 'Student ID Authentication' : 'Not in Firestore Profile'))}
              </span>
              <span class="ae-meta-item">
                <strong>Joined:</strong> ${formatDate(activeStudent.createdAt)}
              </span>
              <span class="ae-meta-item">
                <strong>Status:</strong>
                <span class="ae-status-pill ${activeStudent.accountStatus === 'suspended' ? 'ae-badge-revoked' : 'ae-badge-active'}">
                  ${activeStudent.accountStatus === 'suspended' ? 'Suspended' : 'Active'}
                </span>
              </span>
              <span class="ae-meta-item">
                <strong>Onboarding:</strong>
                <span class="ae-status-pill ${activeStudent.onboardingCompleted ? 'ae-badge-active' : 'ae-badge-scheduled'}">
                  ${activeStudent.onboardingCompleted ? 'Completed' : 'Pending Onboarding'}
                </span>
              </span>
            </div>

            <!-- Profile Action Toolbar -->
            <div class="ae-profile-actions-toolbar" style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
              <button type="button" class="btn btn-sm btn-outline" id="ae-edit-active-profile-btn">
                ${AE_ICONS.edit} Edit Profile
              </button>
              <button type="button" class="btn btn-sm btn-outline" id="ae-reset-active-pwd-btn">
                ${AE_ICONS.key} Reset Password
              </button>
              ${activeStudent.accountStatus === 'suspended' ? `
                <button type="button" class="btn btn-sm btn-primary" id="ae-reactivate-active-btn">
                  ${AE_ICONS.check} Reactivate Account
                </button>
              ` : `
                <button type="button" class="btn btn-sm btn-ghost ae-btn-danger" id="ae-suspend-active-btn">
                  ${AE_ICONS.slash} Suspend Account
                </button>
              `}
            </div>

            ${activeStudent.adminNote || activeStudent.note ? `
              <div class="ae-profile-notice">
                <span>${AE_ICONS.shield}</span> ${sanitizeText(activeStudent.adminNote || activeStudent.note)}
              </div>
            ` : ''}
          </div>

          <div class="ae-profile-stats">
            <div class="ae-stat-pill ae-stat-active">
              <span class="ae-stat-num">${activeCount}</span>
              <span class="ae-stat-label">Active</span>
            </div>
            <div class="ae-stat-pill ae-stat-expired">
              <span class="ae-stat-num">${expiredCount}</span>
              <span class="ae-stat-label">Expired</span>
            </div>
            <div class="ae-stat-pill ae-stat-revoked">
              <span class="ae-stat-num">${revokedCount}</span>
              <span class="ae-stat-label">Revoked</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Course Enrollments Management Section -->
      <section class="ae-enrollments-card" aria-label="Course Enrollments">
        <div class="ae-card-header ae-header-with-action">
          <div>
            <h3 class="ae-card-title">Course Enrollments (${studentEnrollments.length})</h3>
            <p class="ae-card-subtitle">Active, expired, and revoked course access records for this student.</p>
          </div>
          <button type="button" class="btn btn-primary" id="ae-grant-new-btn">
            ${AE_ICONS.plus} Grant Course Access
          </button>
        </div>

        ${studentEnrollments.length === 0 ? `
          <div class="ae-empty-table-state">
            <p>This student is not currently enrolled in any courses.</p>
            <button type="button" class="btn btn-primary btn-sm" id="ae-grant-first-btn">
              ${AE_ICONS.plus} Grant First Course Access
            </button>
          </div>
        ` : `
          <div class="ae-table-responsive">
            <table class="ae-table">
              <thead>
                <tr>
                  <th scope="col">Course Title</th>
                  <th scope="col">Status</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">Expiration Date</th>
                  <th scope="col">Last Updated</th>
                  <th scope="col" class="ae-th-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${studentEnrollments.map(enroll => {
                  let statusBadgeClass = 'ae-badge-active';
                  let statusIcon = AE_ICONS.check;
                  let statusLabel = 'Active';

                  if (enroll.displayStatus === 'revoked') {
                    statusBadgeClass = 'ae-badge-revoked';
                    statusIcon = AE_ICONS.slash;
                    statusLabel = 'Revoked';
                  } else if (enroll.displayStatus === 'expired') {
                    statusBadgeClass = 'ae-badge-expired';
                    statusIcon = AE_ICONS.clock;
                    statusLabel = 'Expired';
                  } else if (enroll.displayStatus === 'scheduled') {
                    statusBadgeClass = 'ae-badge-scheduled';
                    statusIcon = AE_ICONS.calendar;
                    statusLabel = 'Scheduled';
                  }

                  return `
                    <tr class="ae-table-row">
                      <td class="ae-cell-title">
                        <strong>${sanitizeText(enroll.courseTitle)}</strong>
                        <span class="ae-course-id-sub"><code>${sanitizeText(enroll.courseId)}</code></span>
                      </td>
                      <td>
                        <span class="ae-status-pill ${statusBadgeClass}">
                          ${statusIcon} <span>${statusLabel}</span>
                        </span>
                      </td>
                      <td class="ae-cell-date">${formatDate(enroll.startsAt)}</td>
                      <td class="ae-cell-date">
                        ${enroll.expiresAt ? `
                          <span class="${enroll.displayStatus === 'expired' ? 'ae-text-danger' : ''}">
                            ${formatDate(enroll.expiresAt)}
                          </span>
                        ` : '<span class="ae-text-muted">Lifetime Access</span>'}
                      </td>
                      <td class="ae-cell-date ae-text-muted">${formatDate(enroll.updatedAt || enroll.grantedAt)}</td>
                      <td class="ae-cell-actions">
                        ${enroll.isActive ? `
                          <button
                            type="button"
                            class="btn btn-sm btn-ghost ae-btn-renew"
                            data-course-id="${sanitizeText(enroll.courseId)}"
                            data-course-title="${sanitizeText(enroll.courseTitle)}"
                            title="Update expiration date or renew course access">
                            ${AE_ICONS.refresh} Renew / Extend
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm btn-ghost ae-btn-danger ae-btn-revoke"
                            data-course-id="${sanitizeText(enroll.courseId)}"
                            data-course-title="${sanitizeText(enroll.courseTitle)}"
                            title="Revoke access immediately">
                            ${AE_ICONS.slash} Revoke Access
                          </button>
                        ` : `
                          <button
                            type="button"
                            class="btn btn-sm btn-primary ae-btn-renew"
                            data-course-id="${sanitizeText(enroll.courseId)}"
                            data-course-title="${sanitizeText(enroll.courseTitle)}"
                            title="Restore access and update expiration">
                            ${AE_ICONS.refresh} Reactivate Access
                          </button>
                        `}
                      </td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>
        `}
      </section>

      <!-- Audit History Section -->
      <section class="ae-audit-card" aria-label="Administrative Audit Trail">
        <div class="ae-card-header">
          <div class="ae-card-title-group">
            <span class="ae-card-icon">${AE_ICONS.history}</span>
            <div>
              <h3 class="ae-card-title">Enrollment Audit History</h3>
              <p class="ae-card-subtitle">Authoritative audit trail of administrative access grants, renewals, and revocations for this student.</p>
            </div>
          </div>
        </div>

        ${auditLogs.length === 0 ? `
          <div class="ae-empty-table-state">
            <p>No audit events recorded yet for this student account.</p>
          </div>
        ` : `
          <div class="ae-table-responsive">
            <table class="ae-table ae-audit-table">
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col">Course</th>
                  <th scope="col">Transition</th>
                  <th scope="col">Administrator</th>
                  <th scope="col">Timestamp</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              <tbody>
                ${auditLogs.map(log => `
                  <tr>
                    <td>
                      <span class="ae-audit-event ae-event-${sanitizeText(log.eventType || 'unknown')}">
                        ${sanitizeText((log.eventType || '').replace(/_/g, ' '))}
                      </span>
                    </td>
                    <td><code>${sanitizeText(log.courseId || '')}</code></td>
                    <td class="ae-transition-cell">
                      <span>${sanitizeText(log.previousStatus || 'none')}</span> &rarr;
                      <strong>${sanitizeText(log.newStatus || 'active')}</strong>
                    </td>
                    <td><code>${sanitizeText(log.adminUid || 'Admin')}</code></td>
                    <td class="ae-text-muted">${formatFullDateTime(log.timestamp)}</td>
                    <td class="ae-audit-note">${sanitizeText(log.note || '')}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </section>
    `;
  }

  // ── Event Bindings for Student Actions ─────────────────────────────────────
  function bindStudentActionButtons() {
    // 1. Grant Buttons
    document.getElementById('ae-grant-new-btn')?.addEventListener('click', openGrantModal);
    document.getElementById('ae-grant-first-btn')?.addEventListener('click', openGrantModal);

    // 2. Revoke Buttons
    const revokeButtons = document.querySelectorAll('.ae-btn-revoke');
    revokeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.getAttribute('data-course-id');
        const cTitle = btn.getAttribute('data-course-title');
        openRevokeConfirmModal(cId, cTitle);
      });
    });

    // 3. Renew Buttons
    const renewButtons = document.querySelectorAll('.ae-btn-renew');
    renewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.getAttribute('data-course-id');
        const cTitle = btn.getAttribute('data-course-title');
        openRenewModal(cId, cTitle);
      });
    });

    // 4. Edit Profile Button
    document.getElementById('ae-edit-active-profile-btn')?.addEventListener('click', () => {
      if (activeStudent) openEditProfileModal(activeStudent);
    });

    // 5. Reset Password Button
    document.getElementById('ae-reset-active-pwd-btn')?.addEventListener('click', () => {
      if (activeStudent) openResetPasswordModal(activeStudent);
    });

    // 6. Suspend / Reactivate Buttons
    document.getElementById('ae-suspend-active-btn')?.addEventListener('click', () => {
      if (activeStudent) openSuspendConfirmModal(activeStudent);
    });
    document.getElementById('ae-reactivate-active-btn')?.addEventListener('click', () => {
      if (activeStudent) openReactivateConfirmModal(activeStudent);
    });

    // 7. Copy Mini Buttons
    document.querySelectorAll('.ae-copy-mini-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const copyVal = btn.getAttribute('data-copy');
        if (copyVal) copyToClipboard(copyVal, btn, 'Copied');
      });
    });
  }

  // ── Grant Access Modal ─────────────────────────────────────────────────────
  async function openGrantModal() {
    if (!activeStudent || !modalSlot) return;

    // Load available courses if not loaded
    if (availableCourses.length === 0) {
      try {
        availableCourses = await fetchAdminCourses(currentUser.uid);
      } catch (e) {
        console.warn('[risePaisa:Admin] Using catalog fallback:', e);
      }
    }

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" id="ae-modal-backdrop">
        <div class="ae-modal-card" role="dialog" aria-labelledby="ae-modal-title" aria-modal="true">
          <div class="ae-modal-head">
            <h3 class="ae-modal-title" id="ae-modal-title">${AE_ICONS.plus} Grant Course Access</h3>
            <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="ae-grant-form" class="ae-modal-body">
            <div class="ae-form-group">
              <label class="ae-label">Student Account</label>
              <div class="ae-readonly-box">
                <strong>${sanitizeText(activeStudent.displayName || 'Student')}</strong>
                <span>${sanitizeText(activeStudent.email || activeStudent.uid)}</span>
              </div>
            </div>

            <div class="ae-form-group">
              <label for="ae-course-select" class="ae-label">Course Selection <span class="ae-req">*</span></label>
              <select id="ae-course-select" class="ae-input" required>
                <option value="">Select a course to grant access...</option>
                ${availableCourses.map(c => `
                  <option value="${sanitizeText(c.id || c.slug)}">
                    ${sanitizeText(c.title)} (${c.currency || 'NPR'} ${(c.price || 0).toLocaleString()})
                  </option>
                `).join('')}
              </select>
            </div>

            <div class="ae-form-group">
              <label for="ae-expiration-select" class="ae-label">Expiration Policy <span class="ae-req">*</span></label>
              <select id="ae-expiration-select" class="ae-input" required>
                <option value="none">No Expiration (Lifetime Access)</option>
                <option value="1_month">1 Month Access</option>
                <option value="3_months">3 Months Access</option>
                <option value="6_months">6 Months Access</option>
                <option value="1_year" selected>1 Year Access (Standard)</option>
                <option value="custom">Custom Expiration Date...</option>
              </select>
            </div>

            <div class="ae-form-group ae-hidden" id="ae-custom-date-group">
              <label for="ae-custom-date-input" class="ae-label">Custom Expiration Date (Local Time)</label>
              <input type="date" id="ae-custom-date-input" class="ae-input" />
            </div>

            <div class="ae-form-group">
              <label for="ae-grant-note" class="ae-label">Administrative Note (Audit Reason)</label>
              <input type="text" id="ae-grant-note" class="ae-input" placeholder="e.g. Paid via eSewa / Bank transfer transaction #123456" />
            </div>

            <div class="ae-confirm-summary-box">
              <span class="ae-summary-icon">${AE_ICONS.shield}</span>
              <p>Granting access will update the student's authoritative Firestore enrollment record and record an append-only audit event.</p>
            </div>

            <div class="ae-modal-actions">
              <button type="button" class="btn btn-outline" id="ae-modal-cancel">Cancel</button>
              <button type="submit" class="btn btn-primary" id="ae-grant-submit-btn">
                Confirm &amp; Grant Access
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('ae-grant-form');
    const closeBtn = document.getElementById('ae-modal-close');
    const cancelBtn = document.getElementById('ae-modal-cancel');
    const expSelect = document.getElementById('ae-expiration-select');
    const customGroup = document.getElementById('ae-custom-date-group');
    const customInput = document.getElementById('ae-custom-date-input');

    const closeModal = () => { modalSlot.innerHTML = ''; };
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    expSelect?.addEventListener('change', () => {
      if (expSelect.value === 'custom') {
        customGroup?.classList.remove('ae-hidden');
        if (customInput) customInput.required = true;
      } else {
        customGroup?.classList.add('ae-hidden');
        if (customInput) customInput.required = false;
      }
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const courseId = document.getElementById('ae-course-select')?.value;
      const expChoice = expSelect?.value;
      const note = document.getElementById('ae-grant-note')?.value.trim();

      if (!courseId) {
        alert('Please select a course.');
        return;
      }

      let expiresAtDate = null;
      const now = new Date();

      if (expChoice === '1_month') {
        expiresAtDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 23, 59, 59);
      } else if (expChoice === '3_months') {
        expiresAtDate = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate(), 23, 59, 59);
      } else if (expChoice === '6_months') {
        expiresAtDate = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate(), 23, 59, 59);
      } else if (expChoice === '1_year') {
        expiresAtDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate(), 23, 59, 59);
      } else if (expChoice === 'custom') {
        const val = customInput?.value;
        if (!val) {
          alert('Please select a custom expiration date.');
          return;
        }
        expiresAtDate = new Date(`${val}T23:59:59`);
      }

      const submitBtn = document.getElementById('ae-grant-submit-btn');
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Granting Access...';
      }

      try {
        await grantStudentEnrollment(currentUser.uid, activeStudent.uid, courseId, {
          expiresAt: expiresAtDate,
          source: 'manual_admin',
          note: note || 'Access manually granted by administrator'
        });

        closeModal();
        showAlert(`Successfully granted access to "${courseId}".`, 'success');
        await refreshActiveStudentData();
      } catch (err) {
        console.error('[risePaisa:Admin] Grant error:', err);
        alert(`Failed to grant enrollment: ${err.message || err}`);
      } finally {
        isSubmitting = false;
      }
    });
  }

  // ── Revoke Access Confirmation Modal ───────────────────────────────────────
  function openRevokeConfirmModal(courseId, courseTitle) {
    if (!activeStudent || !modalSlot) return;

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" id="ae-modal-backdrop">
        <div class="ae-modal-card ae-danger-modal" role="dialog" aria-labelledby="ae-modal-title" aria-modal="true">
          <div class="ae-modal-head">
            <h3 class="ae-modal-title" id="ae-modal-title">${AE_ICONS.slash} Revoke Course Access</h3>
            <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="ae-revoke-form" class="ae-modal-body">
            <div class="ae-danger-alert-box">
              <span class="ae-danger-icon">${AE_ICONS.slash}</span>
              <div>
                <strong>Warning: Immediate Loss of Access</strong>
                <p>The student will immediately lose access to all protected video lessons and downloads for <strong>${sanitizeText(courseTitle)}</strong>.</p>
              </div>
            </div>

            <div class="ae-form-group">
              <label class="ae-label">Student Account</label>
              <div class="ae-readonly-box">
                <strong>${sanitizeText(activeStudent.displayName || 'Student')}</strong>
                <span>${sanitizeText(activeStudent.email || activeStudent.uid)}</span>
              </div>
            </div>

            <div class="ae-form-group">
              <label for="ae-revoke-reason" class="ae-label">Reason for Revocation <span class="ae-req">*</span></label>
              <input
                type="text"
                id="ae-revoke-reason"
                class="ae-input"
                placeholder="e.g. Refund issued / Inappropriate behavior / Account duplicate"
                required
              />
            </div>

            <div class="ae-modal-actions">
              <button type="button" class="btn btn-outline" id="ae-modal-cancel">Cancel</button>
              <button type="submit" class="btn btn-danger" id="ae-revoke-submit-btn">
                Confirm Revocation
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('ae-revoke-form');
    const closeBtn = document.getElementById('ae-modal-close');
    const cancelBtn = document.getElementById('ae-modal-cancel');

    const closeModal = () => { modalSlot.innerHTML = ''; };
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const reason = document.getElementById('ae-revoke-reason')?.value.trim();
      const submitBtn = document.getElementById('ae-revoke-submit-btn');

      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Revoking Access...';
      }

      try {
        await revokeStudentEnrollment(currentUser.uid, activeStudent.uid, courseId, {
          reason: reason || 'Access manually revoked by administrator'
        });

        closeModal();
        showAlert(`Revoked course access for "${courseTitle}".`, 'info');
        await refreshActiveStudentData();
      } catch (err) {
        console.error('[risePaisa:Admin] Revoke error:', err);
        alert(`Failed to revoke enrollment: ${err.message || err}`);
      } finally {
        isSubmitting = false;
      }
    });
  }

  // ── Renew Access Modal ─────────────────────────────────────────────────────
  function openRenewModal(courseId, courseTitle) {
    if (!activeStudent || !modalSlot) return;

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" id="ae-modal-backdrop">
        <div class="ae-modal-card" role="dialog" aria-labelledby="ae-modal-title" aria-modal="true">
          <div class="ae-modal-head">
            <h3 class="ae-modal-title" id="ae-modal-title">${AE_ICONS.refresh} Renew Course Access</h3>
            <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="ae-renew-form" class="ae-modal-body">
            <div class="ae-form-group">
              <label class="ae-label">Student &amp; Course</label>
              <div class="ae-readonly-box">
                <strong>${sanitizeText(courseTitle)}</strong>
                <span>Student: ${sanitizeText(activeStudent.email || activeStudent.uid)}</span>
              </div>
            </div>

            <div class="ae-form-group">
              <label for="ae-renew-expiration-select" class="ae-label">New Expiration Policy <span class="ae-req">*</span></label>
              <select id="ae-renew-expiration-select" class="ae-input" required>
                <option value="1_month">+1 Month from Today</option>
                <option value="3_months">+3 Months from Today</option>
                <option value="6_months">+6 Months from Today</option>
                <option value="1_year" selected>+1 Year from Today</option>
                <option value="none">No Expiration (Lifetime Access)</option>
                <option value="custom">Custom Date...</option>
              </select>
            </div>

            <div class="ae-form-group ae-hidden" id="ae-renew-custom-date-group">
              <label for="ae-renew-custom-date-input" class="ae-label">Custom Expiration Date</label>
              <input type="date" id="ae-renew-custom-date-input" class="ae-input" />
            </div>

            <div class="ae-form-group">
              <label for="ae-renew-note" class="ae-label">Administrative Note</label>
              <input type="text" id="ae-renew-note" class="ae-input" placeholder="e.g. Subscription renewed for 1 year" />
            </div>

            <div class="ae-modal-actions">
              <button type="button" class="btn btn-outline" id="ae-modal-cancel">Cancel</button>
              <button type="submit" class="btn btn-primary" id="ae-renew-submit-btn">
                Confirm Renewal
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('ae-renew-form');
    const closeBtn = document.getElementById('ae-modal-close');
    const cancelBtn = document.getElementById('ae-modal-cancel');
    const expSelect = document.getElementById('ae-renew-expiration-select');
    const customGroup = document.getElementById('ae-renew-custom-date-group');
    const customInput = document.getElementById('ae-renew-custom-date-input');

    const closeModal = () => { modalSlot.innerHTML = ''; };
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    expSelect?.addEventListener('change', () => {
      if (expSelect.value === 'custom') {
        customGroup?.classList.remove('ae-hidden');
        if (customInput) customInput.required = true;
      } else {
        customGroup?.classList.add('ae-hidden');
        if (customInput) customInput.required = false;
      }
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const expChoice = expSelect?.value;
      const note = document.getElementById('ae-renew-note')?.value.trim();

      let expiresAtDate = null;
      const now = new Date();

      if (expChoice === '1_month') {
        expiresAtDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 23, 59, 59);
      } else if (expChoice === '3_months') {
        expiresAtDate = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate(), 23, 59, 59);
      } else if (expChoice === '6_months') {
        expiresAtDate = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate(), 23, 59, 59);
      } else if (expChoice === '1_year') {
        expiresAtDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate(), 23, 59, 59);
      } else if (expChoice === 'custom') {
        const val = customInput?.value;
        if (!val) {
          alert('Please pick a custom expiration date.');
          return;
        }
        expiresAtDate = new Date(`${val}T23:59:59`);
      }

      const submitBtn = document.getElementById('ae-renew-submit-btn');
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Renewing Access...';
      }

      try {
        await renewStudentEnrollment(currentUser.uid, activeStudent.uid, courseId, {
          expiresAt: expiresAtDate,
          note: note || 'Enrollment renewed by administrator'
        });

        closeModal();
        showAlert(`Successfully renewed access to "${courseTitle}".`, 'success');
        await refreshActiveStudentData();
      } catch (err) {
        console.error('[risePaisa:Admin] Renew error:', err);
        alert(`Failed to renew enrollment: ${err.message || err}`);
      } finally {
        isSubmitting = false;
      }
    });
  }

  // ── Add Student Account Modal ──────────────────────────────────────────────
  async function openAddStudentModal() {
    if (!currentUser || !modalSlot) return;

    // Load available courses if not loaded
    if (availableCourses.length === 0) {
      try {
        availableCourses = await fetchAdminCourses(currentUser.uid);
      } catch (e) {
        console.warn('[risePaisa:Admin] Using catalog fallback:', e);
      }
    }

    let currentStudentId = generateStudentId();
    let currentTempPwd = generateTemporaryPassword(12);

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" id="ae-modal-backdrop">
        <div class="ae-modal-card ae-add-student-modal-card" role="dialog" aria-labelledby="ae-add-student-title" aria-modal="true">
          <div class="ae-modal-head">
            <h3 class="ae-modal-title" id="ae-add-student-title">${AE_ICONS.user} Add Student Account</h3>
            <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="ae-add-student-form" class="ae-modal-body">
            <p class="ae-modal-intro" style="margin-top:0;margin-bottom:16px;font-size:13px;color:var(--color-text-secondary,#666);line-height:1.5;">
              Provision a new student account. RisePaisa uses secure Student ID credentials with internal identifier bridging so students never need an email address to log in.
            </p>

            <!-- Student ID -->
            <div class="ae-form-group">
              <label class="ae-label">Student ID (Unique Login ID) <span class="ae-req">*</span></label>
              <div style="display:flex;gap:8px;">
                <input
                  type="text"
                  id="ae-add-student-id-input"
                  class="ae-input"
                  value="${currentStudentId}"
                  readonly
                  style="font-family:monospace;font-weight:600;letter-spacing:0.5px;background:var(--color-bg-secondary,#f5f5f7);cursor:default;"
                  required
                />
                <button type="button" class="btn btn-outline btn-sm" id="ae-add-regen-id-btn" title="Generate a different unique Student ID">
                  ${AE_ICONS.refresh} Regenerate
                </button>
              </div>
              <span style="font-size:11px;color:var(--color-text-secondary,#666);margin-top:4px;display:block;">
                Unique student identifier format (e.g. RP-2026-A7K9M2).
              </span>
            </div>

            <!-- Temporary Password -->
            <div class="ae-form-group">
              <label class="ae-label">Temporary Password <span class="ae-req">*</span></label>
              <div style="display:flex;gap:8px;">
                <input
                  type="text"
                  id="ae-add-temp-pwd-input"
                  class="ae-input"
                  value="${currentTempPwd}"
                  readonly
                  style="font-family:monospace;font-weight:600;letter-spacing:0.5px;background:var(--color-bg-secondary,#f5f5f7);"
                  required
                />
                <button type="button" class="btn btn-outline btn-sm" id="ae-add-regen-pwd-btn" title="Generate a different strong password">
                  ${AE_ICONS.refresh} Regenerate
                </button>
              </div>
              <span style="font-size:11px;color:var(--color-text-secondary,#666);margin-top:4px;display:block;">
                Cryptographically secure 12-character password. Shown once upon creation for copying.
              </span>
            </div>

            <!-- Full Name (Optional) -->
            <div class="ae-form-group">
              <label for="ae-add-name-input" class="ae-label">
                Student Full Name <span class="ae-text-muted" style="font-size:12px;font-weight:normal;">(Optional)</span>
              </label>
              <input
                type="text"
                id="ae-add-name-input"
                class="ae-input"
                placeholder="e.g. Ramesh Sharma"
                maxlength="100"
              />
              <span style="font-size:11px;color:var(--color-text-secondary,#666);margin-top:2px;display:block;">
                If omitted, the student will enter their name during first-login onboarding.
              </span>
            </div>

            <!-- Phone Number (Optional) -->
            <div class="ae-form-group">
              <label for="ae-add-phone-input" class="ae-label">
                Mobile Phone Number <span class="ae-text-muted" style="font-size:12px;font-weight:normal;">(Optional)</span>
              </label>
              <input
                type="tel"
                id="ae-add-phone-input"
                class="ae-input"
                placeholder="e.g. 9841234567 or +977 9841234567"
                maxlength="20"
              />
              <span style="font-size:11px;color:var(--color-text-secondary,#666);margin-top:2px;display:block;">
                Nepali mobile number (98/97/96 series).
              </span>
            </div>

            <!-- Admin Note (Optional) -->
            <div class="ae-form-group">
              <label for="ae-add-note-input" class="ae-label">
                Administrative Note <span class="ae-text-muted" style="font-size:12px;font-weight:normal;">(Optional)</span>
              </label>
              <input
                type="text"
                id="ae-add-note-input"
                class="ae-input"
                placeholder="e.g. In-person registration / Cohort 2026"
                maxlength="200"
              />
            </div>

            <!-- Initial Course Enrollment (Optional) -->
            <div class="ae-form-group">
              <label for="ae-add-course-select" class="ae-label">
                Initial Course Enrollment <span class="ae-text-muted" style="font-size:12px;font-weight:normal;">(Optional)</span>
              </label>
              <select id="ae-add-course-select" class="ae-input">
                <option value="">No initial course enrollment</option>
                ${availableCourses.map(c => `
                  <option value="${sanitizeText(c.id || c.slug)}">
                    ${sanitizeText(c.title)}
                  </option>
                `).join('')}
              </select>
            </div>

            <!-- Course Duration (Conditional) -->
            <div class="ae-form-group ae-hidden" id="ae-add-duration-group">
              <label for="ae-add-duration-select" class="ae-label">Course Access Duration</label>
              <select id="ae-add-duration-select" class="ae-input">
                <option value="30">1 Month (30 Days)</option>
                <option value="90">3 Months (90 Days)</option>
                <option value="180">6 Months (180 Days)</option>
                <option value="365" selected>1 Year (365 Days) — Standard</option>
                <option value="0">Lifetime Access (No Expiration)</option>
              </select>
            </div>

            <div class="ae-modal-actions">
              <button type="button" class="btn btn-outline" id="ae-modal-cancel">Cancel</button>
              <button type="submit" class="btn btn-primary" id="ae-add-submit-btn">
                ${AE_ICONS.plus} Create Student Account
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('ae-add-student-form');
    const closeBtn = document.getElementById('ae-modal-close');
    const cancelBtn = document.getElementById('ae-modal-cancel');
    const idInput = document.getElementById('ae-add-student-id-input');
    const pwdInput = document.getElementById('ae-add-temp-pwd-input');
    const regenIdBtn = document.getElementById('ae-add-regen-id-btn');
    const regenPwdBtn = document.getElementById('ae-add-regen-pwd-btn');
    const courseSelect = document.getElementById('ae-add-course-select');
    const durationGroup = document.getElementById('ae-add-duration-group');

    const closeModal = () => { modalSlot.innerHTML = ''; };
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    regenIdBtn?.addEventListener('click', () => {
      currentStudentId = generateStudentId();
      if (idInput) idInput.value = currentStudentId;
    });

    regenPwdBtn?.addEventListener('click', () => {
      currentTempPwd = generateTemporaryPassword(12);
      if (pwdInput) pwdInput.value = currentTempPwd;
    });

    courseSelect?.addEventListener('change', () => {
      if (courseSelect.value) {
        durationGroup?.classList.remove('ae-hidden');
      } else {
        durationGroup?.classList.add('ae-hidden');
      }
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const studentId = idInput?.value.trim();
      const temporaryPassword = pwdInput?.value.trim();
      const displayName = document.getElementById('ae-add-name-input')?.value.trim();
      const rawPhone = document.getElementById('ae-add-phone-input')?.value.trim();
      const adminNote = document.getElementById('ae-add-note-input')?.value.trim();
      const initialCourseId = courseSelect?.value.trim() || null;
      const durationDays = initialCourseId ? parseInt(document.getElementById('ae-add-duration-select')?.value, 10) : null;

      if (!studentId || !temporaryPassword) {
        alert('Student ID and Temporary Password are required.');
        return;
      }

      if (rawPhone && !validateNepaliPhoneNumber(rawPhone)) {
        alert('Please enter a valid Nepali mobile number (e.g. 98XXXXXXXX or +977 98XXXXXXXX).');
        return;
      }

      const submitBtn = document.getElementById('ae-add-submit-btn');
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Creating Account...';
      }

      try {
        const result = await createStudentAccount(currentUser.uid, {
          studentId,
          temporaryPassword,
          displayName,
          phoneNumber: rawPhone,
          adminNote,
          initialCourseId,
          courseDurationDays: durationDays
        });

        // Show Credential Card
        modalSlot.innerHTML = `
          <div class="ae-modal-backdrop" id="ae-modal-backdrop">
            <div class="ae-modal-card ae-credential-card-modal" role="dialog" aria-labelledby="ae-cred-title" aria-modal="true">
              <div class="ae-modal-head">
                <h3 class="ae-modal-title" id="ae-cred-title" style="color:var(--color-primary,#0066cc);">
                  ${AE_ICONS.check} Student Account Created
                </h3>
                <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
              </div>

              <div class="ae-modal-body">
                <div class="ae-credential-card-body" style="background:var(--color-bg-secondary,#f8f9fa);border:1px solid var(--color-border-subtle,#e0e0e0);border-radius:12px;padding:20px;margin-bottom:16px;">
                  <div style="margin-bottom:14px;">
                    <span class="ae-status-pill ae-badge-active" style="margin-bottom:8px;display:inline-flex;">Account Ready</span>
                    <h4 style="margin:0 0 6px 0;font-size:16px;">Student Login Credentials</h4>
                    <p style="margin:0;font-size:13px;color:var(--color-text-secondary,#666);line-height:1.4;">
                      Deliver these credentials to the student. They will sign in using their Student ID and complete their profile upon first login.
                    </p>
                  </div>

                  <div class="ae-cred-row" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">
                    <div>
                      <div style="font-size:11px;color:#777;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">Student Login ID</div>
                      <div style="font-family:monospace;font-size:18px;font-weight:700;color:#0066cc;margin-top:2px;" id="ae-cred-val-id">${sanitizeText(result.studentId)}</div>
                    </div>
                    <button type="button" class="btn btn-outline btn-sm" id="ae-copy-id-btn">
                      ${AE_ICONS.copy} Copy ID
                    </button>
                  </div>

                  <div class="ae-cred-row" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;">
                    <div>
                      <div style="font-size:11px;color:#777;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">Temporary Password</div>
                      <div style="font-family:monospace;font-size:18px;font-weight:700;color:#1d1d1f;margin-top:2px;" id="ae-cred-val-pwd">${sanitizeText(result.temporaryPassword)}</div>
                    </div>
                    <button type="button" class="btn btn-outline btn-sm" id="ae-copy-pwd-btn">
                      ${AE_ICONS.copy} Copy Password
                    </button>
                  </div>

                  <div style="display:flex;gap:8px;">
                    <button type="button" class="btn btn-outline btn-sm" id="ae-copy-both-btn" style="flex:1;">
                      ${AE_ICONS.copy} Copy Both Credentials
                    </button>
                  </div>

                  <div style="margin-top:14px;padding:10px 12px;background:#fff8e6;border:1px solid #f6d365;border-radius:6px;font-size:12px;color:#856404;line-height:1.4;">
                    <strong>Security Notice:</strong> Plaintext passwords are not stored in Cloud Firestore. Copy this password now — it cannot be displayed again.
                  </div>
                </div>

                <div class="ae-modal-actions">
                  <button type="button" class="btn btn-primary" id="ae-done-view-profile-btn" style="width:100%;">
                    Done &amp; View Student Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

        document.getElementById('ae-modal-close')?.addEventListener('click', closeModal);

        document.getElementById('ae-copy-id-btn')?.addEventListener('click', () => {
          copyToClipboard(result.studentId, document.getElementById('ae-copy-id-btn'), 'Copied ID!');
        });

        document.getElementById('ae-copy-pwd-btn')?.addEventListener('click', () => {
          copyToClipboard(result.temporaryPassword, document.getElementById('ae-copy-pwd-btn'), 'Copied Password!');
        });

        document.getElementById('ae-copy-both-btn')?.addEventListener('click', () => {
          const bothText = `RisePaisa Student Login Credentials:\nStudent ID: ${result.studentId}\nTemporary Password: ${result.temporaryPassword}\nLogin Portal: https://risepaisa.com`;
          copyToClipboard(bothText, document.getElementById('ae-copy-both-btn'), 'Copied Both!');
        });

        document.getElementById('ae-done-view-profile-btn')?.addEventListener('click', async () => {
          closeModal();
          showAlert(`Student account ${result.studentId} created successfully.`, 'success');
          await loadStudentDirectory();
          await performStudentSearch(result.studentId);
          document.getElementById('ae-student-details-slot')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

      } catch (err) {
        console.error('[risePaisa:Admin] Account creation error:', err);
        alert(`Failed to create student account: ${err.message || err}`);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `${AE_ICONS.plus} Create Student Account`;
        }
      } finally {
        isSubmitting = false;
      }
    });
  }

  // ── Edit Student Profile Modal ─────────────────────────────────────────────
  function openEditProfileModal(student) {
    if (!student || !currentUser || !modalSlot) return;

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" id="ae-modal-backdrop">
        <div class="ae-modal-card" role="dialog" aria-labelledby="ae-edit-title" aria-modal="true">
          <div class="ae-modal-head">
            <h3 class="ae-modal-title" id="ae-edit-title">${AE_ICONS.edit} Edit Student Profile</h3>
            <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="ae-edit-profile-form" class="ae-modal-body">
            <div class="ae-form-group">
              <label class="ae-label">Student Account</label>
              <div class="ae-readonly-box">
                <strong>${sanitizeText(student.displayName || 'Student')}</strong>
                ${student.studentId ? `<span>ID: <code>${sanitizeText(student.studentId)}</code></span>` : ''}
                <span>UID: <code>${sanitizeText(student.uid)}</code></span>
              </div>
            </div>

            <div class="ae-form-group">
              <label for="ae-edit-name-input" class="ae-label">Full Name <span class="ae-req">*</span></label>
              <input
                type="text"
                id="ae-edit-name-input"
                class="ae-input"
                value="${sanitizeText(student.displayName || '')}"
                placeholder="Full Name"
                required
              />
            </div>

            <div class="ae-form-group">
              <label for="ae-edit-phone-input" class="ae-label">Phone Number</label>
              <input
                type="tel"
                id="ae-edit-phone-input"
                class="ae-input"
                value="${sanitizeText(student.phoneNumber || '')}"
                placeholder="+977 98XXXXXXXX"
              />
            </div>

            <div class="ae-form-group">
              <label for="ae-edit-email-input" class="ae-label">Email Address <span class="ae-text-muted" style="font-size:12px;font-weight:normal;">(Optional)</span></label>
              <input
                type="email"
                id="ae-edit-email-input"
                class="ae-input"
                value="${sanitizeText(student.email || '')}"
                placeholder="student@example.com"
              />
            </div>

            <div class="ae-form-group">
              <label for="ae-edit-note-input" class="ae-label">Administrative Note</label>
              <input
                type="text"
                id="ae-edit-note-input"
                class="ae-input"
                value="${sanitizeText(student.adminNote || student.note || '')}"
                placeholder="Internal administrative note"
              />
            </div>

            <div class="ae-modal-actions">
              <button type="button" class="btn btn-outline" id="ae-modal-cancel">Cancel</button>
              <button type="submit" class="btn btn-primary" id="ae-edit-submit-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('ae-edit-profile-form');
    const closeBtn = document.getElementById('ae-modal-close');
    const cancelBtn = document.getElementById('ae-modal-cancel');

    const closeModal = () => { modalSlot.innerHTML = ''; };
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const displayName = document.getElementById('ae-edit-name-input')?.value.trim();
      const rawPhone = document.getElementById('ae-edit-phone-input')?.value.trim();
      const email = document.getElementById('ae-edit-email-input')?.value.trim();
      const adminNote = document.getElementById('ae-edit-note-input')?.value.trim();

      if (!displayName) {
        alert('Full Name is required.');
        return;
      }

      if (rawPhone && !validateNepaliPhoneNumber(rawPhone)) {
        alert('Please enter a valid Nepali mobile phone number (e.g. 98XXXXXXXX or +977 98XXXXXXXX).');
        return;
      }

      const submitBtn = document.getElementById('ae-edit-submit-btn');
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Saving...';
      }

      try {
        await updateStudentProfile(currentUser.uid, student.uid, {
          displayName,
          phoneNumber: rawPhone,
          email,
          adminNote
        });

        closeModal();
        showAlert('Student profile updated successfully.', 'success');
        if (activeStudent && activeStudent.uid === student.uid) {
          await refreshActiveStudentData();
        } else {
          await loadStudentDirectory();
        }
      } catch (err) {
        console.error('[risePaisa:Admin] Update profile error:', err);
        alert(`Failed to update profile: ${err.message || err}`);
      } finally {
        isSubmitting = false;
      }
    });
  }

  // ── Reset Student Password Modal ───────────────────────────────────────────
  function openResetPasswordModal(student) {
    if (!student || !currentUser || !modalSlot) return;

    let newTempPwd = generateTemporaryPassword(12);

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" id="ae-modal-backdrop">
        <div class="ae-modal-card" role="dialog" aria-labelledby="ae-reset-pwd-title" aria-modal="true">
          <div class="ae-modal-head">
            <h3 class="ae-modal-title" id="ae-reset-pwd-title">${AE_ICONS.key} Reset Student Password</h3>
            <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="ae-reset-pwd-form" class="ae-modal-body">
            <div class="ae-form-group">
              <label class="ae-label">Student Account</label>
              <div class="ae-readonly-box">
                <strong>${sanitizeText(student.displayName || 'Student')}</strong>
                ${student.studentId ? `<span>ID: <code>${sanitizeText(student.studentId)}</code></span>` : ''}
                <span>UID: <code>${sanitizeText(student.uid)}</code></span>
              </div>
            </div>

            <div class="ae-form-group">
              <label class="ae-label">New Temporary Password <span class="ae-req">*</span></label>
              <div style="display:flex;gap:8px;">
                <input
                  type="text"
                  id="ae-new-pwd-input"
                  class="ae-input"
                  value="${newTempPwd}"
                  readonly
                  style="font-family:monospace;font-weight:600;letter-spacing:0.5px;background:var(--color-bg-secondary,#f5f5f7);"
                  required
                />
                <button type="button" class="btn btn-outline btn-sm" id="ae-regen-reset-pwd-btn" title="Generate another password">
                  ${AE_ICONS.refresh} Regenerate
                </button>
              </div>
              <span style="font-size:11px;color:var(--color-text-secondary,#666);margin-top:4px;display:block;">
                Cryptographically generated 12-character password.
              </span>
            </div>

            <div class="ae-form-group">
              <label for="ae-reset-note-input" class="ae-label">Audit Reason / Note <span class="ae-req">*</span></label>
              <input
                type="text"
                id="ae-reset-note-input"
                class="ae-input"
                placeholder="e.g. Student forgot password / Requested password reset"
                required
              />
            </div>

            <div class="ae-confirm-summary-box">
              <span class="ae-summary-icon">${AE_ICONS.shield}</span>
              <p>Resetting the password will update Firebase Authentication credentials immediately and log an authoritative audit record.</p>
            </div>

            <div class="ae-modal-actions">
              <button type="button" class="btn btn-outline" id="ae-modal-cancel">Cancel</button>
              <button type="submit" class="btn btn-primary" id="ae-reset-submit-btn">
                ${AE_ICONS.key} Confirm Password Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('ae-reset-pwd-form');
    const closeBtn = document.getElementById('ae-modal-close');
    const cancelBtn = document.getElementById('ae-modal-cancel');
    const pwdInput = document.getElementById('ae-new-pwd-input');
    const regenBtn = document.getElementById('ae-regen-reset-pwd-btn');

    const closeModal = () => { modalSlot.innerHTML = ''; };
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    regenBtn?.addEventListener('click', () => {
      newTempPwd = generateTemporaryPassword(12);
      if (pwdInput) pwdInput.value = newTempPwd;
    });

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const note = document.getElementById('ae-reset-note-input')?.value.trim();
      const finalPwd = pwdInput?.value.trim();

      if (!finalPwd) {
        alert('Temporary password is required.');
        return;
      }

      const submitBtn = document.getElementById('ae-reset-submit-btn');
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Resetting Password...';
      }

      try {
        await resetStudentPassword(currentUser.uid, student.uid, finalPwd, note);

        // Show updated credential card
        modalSlot.innerHTML = `
          <div class="ae-modal-backdrop" id="ae-modal-backdrop">
            <div class="ae-modal-card ae-credential-card-modal" role="dialog" aria-labelledby="ae-reset-success-title" aria-modal="true">
              <div class="ae-modal-head">
                <h3 class="ae-modal-title" id="ae-reset-success-title" style="color:var(--color-primary,#0066cc);">
                  ${AE_ICONS.check} Password Reset Completed
                </h3>
                <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
              </div>

              <div class="ae-modal-body">
                <div class="ae-credential-card-body" style="background:var(--color-bg-secondary,#f8f9fa);border:1px solid var(--color-border-subtle,#e0e0e0);border-radius:12px;padding:20px;margin-bottom:16px;">
                  <div style="margin-bottom:14px;">
                    <span class="ae-status-pill ae-badge-active" style="margin-bottom:8px;display:inline-flex;">Password Updated</span>
                    <h4 style="margin:0 0 6px 0;font-size:16px;">New Temporary Credentials</h4>
                    <p style="margin:0;font-size:13px;color:var(--color-text-secondary,#666);line-height:1.4;">
                      Please share the new password with the student immediately.
                    </p>
                  </div>

                  ${student.studentId ? `
                    <div class="ae-cred-row" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">
                      <div>
                        <div style="font-size:11px;color:#777;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">Student Login ID</div>
                        <div style="font-family:monospace;font-size:18px;font-weight:700;color:#0066cc;margin-top:2px;">${sanitizeText(student.studentId)}</div>
                      </div>
                      <button type="button" class="btn btn-outline btn-sm" id="ae-copy-id-btn">
                        ${AE_ICONS.copy} Copy ID
                      </button>
                    </div>
                  ` : ''}

                  <div class="ae-cred-row" style="background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;">
                    <div>
                      <div style="font-size:11px;color:#777;text-transform:uppercase;font-weight:600;letter-spacing:0.5px;">New Temporary Password</div>
                      <div style="font-family:monospace;font-size:18px;font-weight:700;color:#1d1d1f;margin-top:2px;">${sanitizeText(finalPwd)}</div>
                    </div>
                    <button type="button" class="btn btn-outline btn-sm" id="ae-copy-pwd-btn">
                      ${AE_ICONS.copy} Copy Password
                    </button>
                  </div>

                  <div style="display:flex;gap:8px;">
                    <button type="button" class="btn btn-outline btn-sm" id="ae-copy-both-btn" style="flex:1;">
                      ${AE_ICONS.copy} Copy Credentials
                    </button>
                  </div>
                </div>

                <div class="ae-modal-actions">
                  <button type="button" class="btn btn-primary" id="ae-done-reset-btn" style="width:100%;">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

        document.getElementById('ae-modal-close')?.addEventListener('click', closeModal);
        document.getElementById('ae-copy-id-btn')?.addEventListener('click', () => {
          copyToClipboard(student.studentId, document.getElementById('ae-copy-id-btn'), 'Copied ID!');
        });
        document.getElementById('ae-copy-pwd-btn')?.addEventListener('click', () => {
          copyToClipboard(finalPwd, document.getElementById('ae-copy-pwd-btn'), 'Copied Password!');
        });
        document.getElementById('ae-copy-both-btn')?.addEventListener('click', () => {
          const text = `RisePaisa Student Credentials:\nStudent ID: ${student.studentId || student.uid}\nTemporary Password: ${finalPwd}\nLogin Portal: https://risepaisa.com`;
          copyToClipboard(text, document.getElementById('ae-copy-both-btn'), 'Copied!');
        });
        document.getElementById('ae-done-reset-btn')?.addEventListener('click', async () => {
          closeModal();
          showAlert('Password reset successfully.', 'success');
          if (activeStudent && activeStudent.uid === student.uid) {
            await refreshActiveStudentData();
          }
          await loadStudentDirectory();
        });

      } catch (err) {
        console.error('[risePaisa:Admin] Reset password error:', err);
        alert(`Failed to reset password: ${err.message || err}`);
      } finally {
        isSubmitting = false;
      }
    });
  }

  // ── Suspend Student Account Modal ──────────────────────────────────────────
  function openSuspendConfirmModal(student) {
    if (!student || !currentUser || !modalSlot) return;

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" id="ae-modal-backdrop">
        <div class="ae-modal-card ae-danger-modal" role="dialog" aria-labelledby="ae-suspend-title" aria-modal="true">
          <div class="ae-modal-head">
            <h3 class="ae-modal-title" id="ae-suspend-title">${AE_ICONS.slash} Suspend Student Account</h3>
            <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="ae-suspend-form" class="ae-modal-body">
            <div class="ae-danger-alert-box">
              <span class="ae-danger-icon">${AE_ICONS.slash}</span>
              <div>
                <strong>Warning: Immediate Account Access Revocation</strong>
                <p>The student will be blocked from accessing all courses, lessons, and protected resources immediately. Historical records and enrollment progress are preserved.</p>
              </div>
            </div>

            <div class="ae-form-group">
              <label class="ae-label">Student Account</label>
              <div class="ae-readonly-box">
                <strong>${sanitizeText(student.displayName || 'Student')}</strong>
                ${student.studentId ? `<span>ID: <code>${sanitizeText(student.studentId)}</code></span>` : ''}
                <span>UID: <code>${sanitizeText(student.uid)}</code></span>
              </div>
            </div>

            <div class="ae-form-group">
              <label for="ae-suspend-reason-input" class="ae-label">Reason for Suspension <span class="ae-req">*</span></label>
              <input
                type="text"
                id="ae-suspend-reason-input"
                class="ae-input"
                placeholder="e.g. Terms violation / Chargeback / Suspicious activity"
                required
              />
            </div>

            <div class="ae-modal-actions">
              <button type="button" class="btn btn-outline" id="ae-modal-cancel">Cancel</button>
              <button type="submit" class="btn btn-danger" id="ae-suspend-submit-btn">
                Confirm Suspension
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('ae-suspend-form');
    const closeBtn = document.getElementById('ae-modal-close');
    const cancelBtn = document.getElementById('ae-modal-cancel');

    const closeModal = () => { modalSlot.innerHTML = ''; };
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const reason = document.getElementById('ae-suspend-reason-input')?.value.trim();
      const submitBtn = document.getElementById('ae-suspend-submit-btn');

      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Suspending...';
      }

      try {
        await suspendStudentAccount(currentUser.uid, student.uid, reason);
        closeModal();
        showAlert(`Suspended student account ${student.studentId || student.uid}.`, 'info');
        if (activeStudent && activeStudent.uid === student.uid) {
          await refreshActiveStudentData();
        }
        await loadStudentDirectory();
      } catch (err) {
        console.error('[risePaisa:Admin] Suspend error:', err);
        alert(`Failed to suspend account: ${err.message || err}`);
      } finally {
        isSubmitting = false;
      }
    });
  }

  // ── Reactivate Student Account Modal ───────────────────────────────────────
  function openReactivateConfirmModal(student) {
    if (!student || !currentUser || !modalSlot) return;

    modalSlot.innerHTML = `
      <div class="ae-modal-backdrop" id="ae-modal-backdrop">
        <div class="ae-modal-card" role="dialog" aria-labelledby="ae-reactivate-title" aria-modal="true">
          <div class="ae-modal-head">
            <h3 class="ae-modal-title" id="ae-reactivate-title">${AE_ICONS.check} Reactivate Student Account</h3>
            <button type="button" class="ae-modal-close" id="ae-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="ae-reactivate-form" class="ae-modal-body">
            <div class="ae-confirm-summary-box">
              <span class="ae-summary-icon">${AE_ICONS.shield}</span>
              <p>Reactivating will restore account login and re-enable active course enrollments. Previously revoked or expired enrollments remain unchanged.</p>
            </div>

            <div class="ae-form-group">
              <label class="ae-label">Student Account</label>
              <div class="ae-readonly-box">
                <strong>${sanitizeText(student.displayName || 'Student')}</strong>
                ${student.studentId ? `<span>ID: <code>${sanitizeText(student.studentId)}</code></span>` : ''}
                <span>UID: <code>${sanitizeText(student.uid)}</code></span>
              </div>
            </div>

            <div class="ae-form-group">
              <label for="ae-reactivate-note-input" class="ae-label">Reactivation Reason / Note <span class="ae-req">*</span></label>
              <input
                type="text"
                id="ae-reactivate-note-input"
                class="ae-input"
                placeholder="e.g. Account reinstated / Identity verified"
                required
              />
            </div>

            <div class="ae-modal-actions">
              <button type="button" class="btn btn-outline" id="ae-modal-cancel">Cancel</button>
              <button type="submit" class="btn btn-primary" id="ae-reactivate-submit-btn">
                Confirm Reactivation
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('ae-reactivate-form');
    const closeBtn = document.getElementById('ae-modal-close');
    const cancelBtn = document.getElementById('ae-modal-cancel');

    const closeModal = () => { modalSlot.innerHTML = ''; };
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const note = document.getElementById('ae-reactivate-note-input')?.value.trim();
      const submitBtn = document.getElementById('ae-reactivate-submit-btn');

      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Reactivating...';
      }

      try {
        await reactivateStudentAccount(currentUser.uid, student.uid, note);
        closeModal();
        showAlert(`Reactivated student account ${student.studentId || student.uid}.`, 'success');
        if (activeStudent && activeStudent.uid === student.uid) {
          await refreshActiveStudentData();
        }
        await loadStudentDirectory();
      } catch (err) {
        console.error('[risePaisa:Admin] Reactivate error:', err);
        alert(`Failed to reactivate account: ${err.message || err}`);
      } finally {
        isSubmitting = false;
      }
    });
  }

  // ── Refresh Helper ─────────────────────────────────────────────────────────
  async function refreshActiveStudentData() {
    if (!currentUser || !activeStudent) return;
    try {
      const [freshStudent, enrollments, logs] = await Promise.all([
        searchStudentUser(currentUser.uid, activeStudent.uid),
        fetchStudentEnrollments(currentUser.uid, activeStudent.uid),
        fetchEnrollmentAuditLogs(currentUser.uid, { studentUid: activeStudent.uid, limit: 20 })
      ]);
      if (freshStudent) {
        activeStudent = freshStudent;
      }
      studentEnrollments = enrollments;
      auditLogs = logs;

      const slot = document.getElementById('ae-student-details-slot');
      if (slot) {
        slot.innerHTML = renderStudentContentHtml();
        bindStudentActionButtons();
      }
      loadStudentDirectory();
    } catch (err) {
      console.warn('[risePaisa:Admin] Failed to refresh student:', err);
    }
  }

  // ── Authentication & Admin Authorization Check ─────────────────────────────
  let isChecking = false;

  async function verifyAdminAndInit(user) {
    if (isChecking) return;
    isChecking = true;
    currentUser = user;

    try {
      // 1. If auth is not ready yet and user is null, wait for initial resolution
      if (!isAuthInitialized() && !user) {
        if (headerActions) headerActions.innerHTML = '';
        workspace.innerHTML = `
          <div class="ac-loading-state">
            <div class="ac-spinner"></div>
            <p>Checking authentication status...</p>
          </div>
        `;
        user = await waitForAuthReady(6000);
        currentUser = user;
      }

      // 2. Not signed in state
      if (!user) {
        activeStudent = null;
        studentEnrollments = [];
        if (headerActions) headerActions.innerHTML = '';
        workspace.innerHTML = `
          <div class="ac-auth-lock-card">
            <div class="ac-lock-icon">${AE_ICONS.lock}</div>
            <h2>Authentication Required</h2>
            <p>Please sign in with your authorized RisePaisa administrator account (Google or Email/Password) to manage student enrollments.</p>
            <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <button type="button" class="btn btn-primary btn-lg" id="ae-signin-btn">
                Sign In to Admin Account
              </button>
              <a href="${ROUTES.HOME}" class="btn btn-outline btn-lg">
                Return to Website
              </a>
            </div>
          </div>
        `;
        document.getElementById('ae-signin-btn')?.addEventListener('click', () => {
          openAuthModal('login');
        });
        isChecking = false;
        return;
      }

      // 3. Verifying administrative authorization in Firestore
      workspace.innerHTML = `
        <div class="ac-loading-state">
          <div class="ac-spinner"></div>
          <p>Verifying administrative authorization for <strong>${sanitizeText(user.email || user.uid)}</strong>...</p>
        </div>
      `;

      const res = await checkIsAdminDetailed(user.uid);

      // 4. Condition 6: Administrator access granted
      if (res.isAdmin) {
        renderEnrollmentWorkspace();
        return;
      }

      if (headerActions) headerActions.innerHTML = '';

      // 5. Condition 3: Firestore permission denied (Rules reject reading /admins/{uid})
      if (res.reason === 'permission_denied') {
        workspace.innerHTML = `
          <div class="ac-auth-lock-card ac-auth-denied">
            <div class="ac-lock-icon" style="color:var(--color-warning, #f59e0b)">${AE_ICONS.shield}</div>
            <h2>Firestore Security Rules Required</h2>
            <p>
              Cloud Firestore security rules in Firebase project <strong>risepaisa-77278</strong> denied read access to <code>admins/${user.uid}</code>:
              <br><code style="display:inline-block;margin-top:var(--space-2);padding:var(--space-2) var(--space-3);background:var(--color-bg-secondary);border-radius:var(--radius-sm);color:var(--color-warning, #f59e0b);font-size:var(--text-xs)">Missing or insufficient permissions (permission-denied)</code>
            </p>
            <div class="ac-provision-help" style="text-align:left;margin:var(--space-6) auto;max-width:580px;background:var(--color-bg-secondary);padding:var(--space-4) var(--space-5);border-radius:var(--radius-lg);border:1px solid var(--color-border-subtle)">
              <h3 style="font-size:var(--text-md);margin-bottom:var(--space-2);color:var(--color-heading)">Administrator Allowlist &amp; Rules Activation</h3>
              <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-3)">
                The production Firestore rules on <code>risepaisa-77278</code> currently enforce default-deny without the <code>/admins/{adminUid}</code> rule. Complete these two steps to activate permanent access:
              </p>
              <ol style="font-size:var(--text-sm);color:var(--color-text-secondary);padding-left:var(--space-4);line-height:1.6">
                <li>
                  <strong>Deploy Firestore Security Rules:</strong>
                  Open <a href="https://console.firebase.google.com/project/risepaisa-77278/firestore/rules" target="_blank" rel="noopener">Firebase Console &gt; Firestore &gt; Rules</a> and publish the rules from <code>firestore.rules</code> (which include <code>match /admins/{adminUid}</code>).
                </li>
                <li>
                  <strong>Create Your Admin Allowlist Record:</strong>
                  Under <a href="https://console.firebase.google.com/project/risepaisa-77278/firestore/data" target="_blank" rel="noopener">Firestore Data</a>, create collection <code>admins</code> and add a document with your exact Firebase Auth UID:
                  <div style="margin:var(--space-2) 0;display:flex;align-items:center;gap:var(--space-2);background:var(--color-bg-tertiary);padding:var(--space-2);border-radius:var(--radius-md);word-break:break-all;font-family:monospace;font-size:var(--text-xs)">
                    <span id="ae-uid-denied-val">${user.uid}</span>
                    <button type="button" class="btn btn-sm btn-outline" id="ae-copy-uid-denied-btn" style="margin-left:auto;white-space:nowrap">Copy UID</button>
                  </div>
                  Add document fields:
                  <br>&bull; <code>role: "admin"</code> (string)
                  <br>&bull; <code>email: "${sanitizeText(user.email || '')}"</code> (string)
                </li>
                <li>Once saved in Firebase Console, click <strong>Re-check Permissions</strong> below.</li>
              </ol>
            </div>
            <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <button type="button" class="btn btn-primary" id="ae-retry-rules-btn">
                Re-check Permissions
              </button>
              <button type="button" class="btn btn-outline" id="ae-switch-account-rules-btn">
                Sign In with Different Account
              </button>
              <a href="${ROUTES.HOME}" class="btn btn-outline">
                Return to Homepage
              </a>
            </div>
          </div>
        `;
        document.getElementById('ae-copy-uid-denied-btn')?.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(user.uid);
            const btn = document.getElementById('ae-copy-uid-denied-btn');
            if (btn) btn.textContent = 'Copied!';
            setTimeout(() => {
              const b = document.getElementById('ae-copy-uid-denied-btn');
              if (b) b.textContent = 'Copy UID';
            }, 2000);
          } catch {}
        });
        document.getElementById('ae-retry-rules-btn')?.addEventListener('click', () => {
          verifyAdminAndInit(user);
        });
        document.getElementById('ae-switch-account-rules-btn')?.addEventListener('click', async () => {
          await logoutUser();
          openAuthModal('login');
        });
        return;
      }

      // 6. Condition 2: Administrator document missing (Rules allowed read, but doc does not exist)
      if (res.reason === 'not_in_allowlist') {
        workspace.innerHTML = `
          <div class="ac-auth-lock-card ac-auth-denied">
            <div class="ac-lock-icon">${AE_ICONS.shield}</div>
            <h2>Administrative Authorization Required</h2>
            <p>
              The account <strong>${sanitizeText(user.email || user.uid)}</strong> is signed in, but is not registered as an authorized platform administrator in Cloud Firestore (missing <code>admins/${user.uid}</code>).
            </p>
            <div class="ac-provision-help" style="text-align:left;margin:var(--space-6) auto;max-width:540px;background:var(--color-bg-secondary);padding:var(--space-4) var(--space-5);border-radius:var(--radius-lg);border:1px solid var(--color-border-subtle)">
              <h3 style="font-size:var(--text-md);margin-bottom:var(--space-2);color:var(--color-heading)">Administrator Setup Instructions</h3>
              <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-3)">To grant administrative permissions to this account:</p>
              <ol style="font-size:var(--text-sm);color:var(--color-text-secondary);padding-left:var(--space-4);line-height:1.6">
                <li>Open your Firebase Console: <a href="https://console.firebase.google.com/project/risepaisa-77278/firestore" target="_blank" rel="noopener">risepaisa-77278 Firestore</a>.</li>
                <li>In <strong>Cloud Firestore</strong>, locate or create collection: <code>admins</code>.</li>
                <li>Create document with Document ID matching your Auth UID:
                  <div style="margin:var(--space-2) 0;display:flex;align-items:center;gap:var(--space-2);background:var(--color-bg-tertiary);padding:var(--space-2);border-radius:var(--radius-md);word-break:break-all;font-family:monospace;font-size:var(--text-xs)">
                    <span id="ae-uid-missing-val">${user.uid}</span>
                    <button type="button" class="btn btn-sm btn-outline" id="ae-copy-uid-btn" style="margin-left:auto;white-space:nowrap">Copy UID</button>
                  </div>
                </li>
                <li>Add fields: <code>role: "admin"</code> (string) and <code>email: "${sanitizeText(user.email || '')}"</code> (string).</li>
                <li>Click Save, then click <strong>Re-check Permissions</strong> below.</li>
              </ol>
            </div>
            <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <button type="button" class="btn btn-primary" id="ae-retry-auth-btn">
                Re-check Permissions
              </button>
              <button type="button" class="btn btn-outline" id="ae-switch-account-btn">
                Sign In with Different Account
              </button>
              <a href="${ROUTES.HOME}" class="btn btn-outline">
                Return to Homepage
              </a>
            </div>
          </div>
        `;
        document.getElementById('ae-copy-uid-btn')?.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(user.uid);
            const btn = document.getElementById('ae-copy-uid-btn');
            if (btn) btn.textContent = 'Copied!';
            setTimeout(() => {
              const b = document.getElementById('ae-copy-uid-btn');
              if (b) b.textContent = 'Copy UID';
            }, 2000);
          } catch {}
        });
        document.getElementById('ae-retry-auth-btn')?.addEventListener('click', () => {
          verifyAdminAndInit(user);
        });
        document.getElementById('ae-switch-account-btn')?.addEventListener('click', async () => {
          await logoutUser();
          openAuthModal('login');
        });
        return;
      }

      // 7. Condition 5: Network unavailable
      if (res.reason === 'network_error') {
        workspace.innerHTML = `
          <div class="ac-auth-lock-card ac-auth-denied">
            <div class="ac-lock-icon" style="color:var(--color-warning, #f59e0b)">${AE_ICONS.refresh}</div>
            <h2>Network Connection Unavailable</h2>
            <p>
              Unable to reach Cloud Firestore services. Please check your internet connection and try again.
            </p>
            <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <button type="button" class="btn btn-primary" id="ae-retry-net-btn">
                Retry Connection
              </button>
              <a href="${ROUTES.HOME}" class="btn btn-outline">
                Return to Homepage
              </a>
            </div>
          </div>
        `;
        document.getElementById('ae-retry-net-btn')?.addEventListener('click', () => {
          verifyAdminAndInit(user);
        });
        return;
      }

      // 8. Condition 4: Firebase configuration error / database unavailable
      workspace.innerHTML = `
        <div class="ac-auth-lock-card ac-auth-denied">
          <div class="ac-lock-icon" style="color:var(--color-warning, #f59e0b)">${AE_ICONS.shield}</div>
          <h2>Firebase Configuration Error</h2>
          <p>
            Unable to verify administrative authorization due to a configuration or database issue:
            <br><code style="display:inline-block;margin-top:var(--space-2);padding:var(--space-2) var(--space-3);background:var(--color-bg-secondary);border-radius:var(--radius-sm);color:var(--color-error)">${sanitizeText(res.message || 'Database connection failed')}</code>
          </p>
          <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
            <button type="button" class="btn btn-primary" id="ae-retry-error-btn">
              Retry Connection
            </button>
            <button type="button" class="btn btn-outline" id="ae-switch-user-btn">
              Sign In with Different Account
            </button>
            <a href="${ROUTES.HOME}" class="btn btn-outline">
              Return to Homepage
            </a>
          </div>
        </div>
      `;
      document.getElementById('ae-retry-error-btn')?.addEventListener('click', () => {
        verifyAdminAndInit(user);
      });
      document.getElementById('ae-switch-user-btn')?.addEventListener('click', async () => {
        await logoutUser();
        openAuthModal('login');
      });
    } finally {
      isChecking = false;
    }
  }

  authUnsubscribe = subscribeToAuth((user) => {
    verifyAdminAndInit(user);
  });

  return () => {
    window.removeEventListener('keydown', handleEscapeKey);
    if (typeof authUnsubscribe === 'function') {
      authUnsubscribe();
    }
  };
}

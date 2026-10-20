// ==============================================
// risePaisa - Course Management Console (Admin Interface)
// Focused, secure, minimal course curriculum and lesson manager
// ==============================================

import { ROUTES } from '../routes.js';
import { setPageMeta } from '../components.js';
import {
  fetchAdminCourses,
  saveAdminCourse,
  deleteAdminCourse,
  checkIsAdmin,
  checkIsAdminDetailed,
  validateYouTubeUrl,
  toCanonicalYouTubeUrl,
  validateResourceUrl,
  validateResourceFile,
  uploadCourseResource,
  generateStableId,
  reorderCollection,
  sanitizeText,
  RESOURCE_FILE_TYPES,
  PLATFORM_DOWNLOADABLE_ASSETS
} from '../firebase/courses.js';
import {
  subscribeToAuth,
  getCurrentUser,
  isAuthInitialized,
  waitForAuthReady,
  logoutUser
} from '../firebase/auth.js';
import { openAuthModal } from '../firebase/ui.js';

const AC_ICONS = {
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  arrowDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
};

/**
 * Render the static SSR shell of the Admin Course Management page
 *
 * @returns {string} HTML string
 */
export function renderAdminCoursesPage() {
  return `
    <div class="ac-page" id="ac-page">
      <!-- Breadcrumb Bar -->
      <nav class="ac-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container ac-breadcrumb-inner">
          <a href="${ROUTES.HOME}" class="ac-crumb-link">Home</a>
          <span class="ac-crumb-sep">/</span>
          <a href="${ROUTES.ADMIN_COURSES || '/admin/courses'}" class="ac-crumb-link">Admin Portal</a>
          <span class="ac-crumb-sep">/</span>
          <span class="ac-crumb-current" aria-current="page">Course Management</span>
        </div>
      </nav>

      <!-- Admin Tab Switcher -->
      <div class="container ae-nav-tabs-wrap">
        <div class="ae-nav-tabs" role="tablist" aria-label="Admin Navigation Tabs">
          <a href="${ROUTES.ADMIN_COURSES || '/admin/courses'}" class="ae-tab-btn active" role="tab" aria-selected="true">
            ${AC_ICONS.book} Courses &amp; Lessons
          </a>
          <a href="${ROUTES.ADMIN_ENROLLMENTS || '/admin/enrollments'}" class="ae-tab-btn" role="tab" aria-selected="false">
            ${AC_ICONS.user} Student Enrollments
          </a>
        </div>
      </div>

      <!-- Header Section -->
      <header class="ac-header-section">
        <div class="container ac-header-inner">
          <div>
            <div class="ac-badge">Administrator Portal</div>
            <h1 class="ac-title">Course Management</h1>
            <p class="ac-lead">Manage course details, modules, lessons, YouTube video URLs, and downloadable resources.</p>
          </div>
          <div class="ac-header-actions" id="ac-header-actions">
            <!-- Populated dynamically when authenticated as admin -->
          </div>
        </div>
      </header>

      <!-- Main Admin Workspace -->
      <main class="container ac-main-content">
        <div id="ac-alert-slot" class="ac-alert-slot" role="alert" aria-live="assertive"></div>
        <div id="ac-workspace" class="ac-workspace" aria-live="polite">
          <div class="ac-loading-state">
            <div class="ac-spinner"></div>
            <p>Checking administrative authorization...</p>
          </div>
        </div>
      </main>
      <div id="ac-modal-slot"></div>
    </div>
  `;
}

/**
 * Initialize dynamic course management, editor forms, reordering, and Firestore synchronization
 *
 * @returns {Function} Cleanup function
 */
export function initAdminCoursesPage() {
  const workspace = document.getElementById('ac-workspace');
  const alertSlot = document.getElementById('ac-alert-slot');
  const headerActions = document.getElementById('ac-header-actions');
  const modalSlot = document.getElementById('ac-modal-slot');
  if (!workspace) return () => {};

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

  setPageMeta(
    'Course Management Console | risePaisa Admin',
    'Manage courses, modules, lessons, and resources for risePaisa platform.',
    ROUTES.ADMIN_COURSES
  );

  let authUnsubscribe = null;
  let currentUser = null;
  let activeCourses = [];
  let editingCourse = null;

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

  // ── Render Course List ─────────────────────────────────────────────────────
  function renderCourseList() {
    editingCourse = null;
    clearAlert();

    if (headerActions) {
      headerActions.innerHTML = `
        <button type="button" class="btn btn-primary" id="ac-new-course-btn">
          ${AC_ICONS.plus} New Course
        </button>
      `;
      document.getElementById('ac-new-course-btn')?.addEventListener('click', () => {
        openCourseEditor({
          id: generateStableId('course'),
          slug: '',
          title: '',
          shortDescription: '',
          description: '',
          thumbnail: '',
          published: false,
          displayOrder: activeCourses.length + 1,
          topics: []
        }, true);
      });
    }

    if (activeCourses.length === 0) {
      workspace.innerHTML = `
        <div class="ac-empty-card">
          <div class="ac-empty-icon">${AC_ICONS.layers}</div>
          <h3>No Courses Found</h3>
          <p>Get started by creating your first course.</p>
          <button type="button" class="btn btn-primary" id="ac-empty-new-btn">
            ${AC_ICONS.plus} Create Course
          </button>
        </div>
      `;
      document.getElementById('ac-empty-new-btn')?.addEventListener('click', () => {
        openCourseEditor({
          id: generateStableId('course'),
          slug: '',
          title: '',
          shortDescription: '',
          description: '',
          thumbnail: '',
          published: false,
          displayOrder: 1,
          topics: []
        }, true);
      });
      return;
    }

    const rows = activeCourses.map((c) => {
      const topicCount = Array.isArray(c.topics) ? c.topics.length : 0;
      let lessonCount = 0;
      if (Array.isArray(c.topics)) {
        c.topics.forEach(t => {
          if (Array.isArray(t.lessons)) lessonCount += t.lessons.length;
        });
      }
      const previewUrl = ROUTES.COURSE_LEARN ? ROUTES.COURSE_LEARN(c.slug) : `/courses/${c.slug}/learn`;

      return `
        <div class="ac-course-row" data-slug="${c.slug}">
          <div class="ac-course-info">
            <div class="ac-course-title-wrap">
              <h3 class="ac-course-title">${sanitizeText(c.title)}</h3>
              <span class="ac-status-pill ${c.published ? 'published' : 'draft'}">
                ${c.published ? 'Published' : 'Draft'}
              </span>
            </div>
            <div class="ac-course-meta">
              <span>Slug: <code>/${sanitizeText(c.slug)}</code></span>
              <span>•</span>
              <span>${topicCount} Modules</span>
              <span>•</span>
              <span>${lessonCount} Lessons</span>
            </div>
          </div>
          <div class="ac-course-actions">
            <a href="${previewUrl}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">
              ${AC_ICONS.eye} Preview
            </a>
            <button type="button" class="btn btn-outline btn-sm ac-edit-btn" data-slug="${c.slug}">
              ${AC_ICONS.edit} Edit Content
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ac-delete-btn" data-slug="${c.slug}">
              ${AC_ICONS.trash}
            </button>
          </div>
        </div>
      `;
    }).join('');

    workspace.innerHTML = `
      <div class="ac-courses-table-card">
        <div class="ac-table-header">
          <h2>All Platform Courses (${activeCourses.length})</h2>
        </div>
        <div class="ac-course-list">
          ${rows}
        </div>
      </div>
    `;

    // Wire Edit buttons
    workspace.querySelectorAll('.ac-edit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-slug');
        const course = activeCourses.find(c => c.slug === slug);
        if (course) openCourseEditor(course);
      });
    });

    // Wire Delete buttons
    workspace.querySelectorAll('.ac-delete-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const slug = btn.getAttribute('data-slug');
        const course = activeCourses.find(c => c.slug === slug);
        if (!course) return;

        const confirmMsg = `Are you sure you want to delete "${course.title}"? This action cannot be undone.`;
        if (window.confirm(confirmMsg)) {
          try {
            await deleteAdminCourse(currentUser.uid, slug);
            activeCourses = activeCourses.filter(c => c.slug !== slug);
            showAlert(`Course "${course.title}" deleted successfully.`, 'success');
            renderCourseList();
          } catch (err) {
            showAlert(`Failed to delete course: ${err.message}`, 'error');
          }
        }
      });
    });
  }

  // ── Course Editor View ─────────────────────────────────────────────────────
  function openCourseEditor(course, isNew = false) {
    // Deep clone to isolate edits until saved
    editingCourse = JSON.parse(JSON.stringify(course));
    editingCourse._originalSlug = editingCourse.slug;
    if (!Array.isArray(editingCourse.topics)) {
      editingCourse.topics = [];
    }

    if (headerActions) {
      headerActions.innerHTML = `
        <button type="button" class="btn btn-outline" id="ac-back-btn">
          Back to Courses
        </button>
        <button type="button" class="btn btn-primary" id="ac-save-course-btn">
          ${AC_ICONS.check} Save Changes
        </button>
      `;
      document.getElementById('ac-back-btn')?.addEventListener('click', () => {
        renderCourseList();
      });
      document.getElementById('ac-save-course-btn')?.addEventListener('click', handleSaveCourse);
    }

    renderEditorUI(isNew);
  }

  function renderEditorUI(isNew = false) {
    if (!editingCourse) return;

    workspace.innerHTML = `
      <div class="ac-editor-layout">
        <!-- Section 1: Course Metadata -->
        <section class="ac-editor-card">
          <div class="ac-card-head">
            <h2>Course Details</h2>
            <span class="ac-pill-hint">Basic Metadata</span>
          </div>

          <div class="ac-form-grid">
            <div class="ac-form-group ac-col-8">
              <label for="ac-input-title">Course Title *</label>
              <input type="text" id="ac-input-title" class="ac-input" value="${sanitizeText(editingCourse.title)}" placeholder="e.g. Share Market Full Course (NEPSE)" required>
            </div>

            <div class="ac-form-group ac-col-4">
              <label for="ac-input-slug">URL Slug *</label>
              <input type="text" id="ac-input-slug" class="ac-input" value="${sanitizeText(editingCourse.slug)}" placeholder="e.g. nepse-stock-market-basics" required>
              <small class="ac-input-help">Lowercase letters, numbers, and hyphens.</small>
            </div>

            <div class="ac-form-group ac-col-12">
              <label for="ac-input-shortdesc">Short Description *</label>
              <textarea id="ac-input-shortdesc" class="ac-textarea" rows="2" placeholder="Brief summary for catalog cards">${sanitizeText(editingCourse.shortDescription)}</textarea>
            </div>

            <div class="ac-form-group ac-col-12">
              <label for="ac-input-desc">Full Course Description</label>
              <textarea id="ac-input-desc" class="ac-textarea" rows="4" placeholder="Detailed syllabus explanation">${sanitizeText(editingCourse.description)}</textarea>
            </div>

            <div class="ac-form-group ac-col-6">
              <label for="ac-input-thumb">Thumbnail URL (optional)</label>
              <input type="url" id="ac-input-thumb" class="ac-input" value="${sanitizeText(editingCourse.thumbnail || '')}" placeholder="https://...">
            </div>

            <div class="ac-form-group ac-col-3">
              <label for="ac-input-order">Display Order</label>
              <input type="number" id="ac-input-order" class="ac-input" value="${editingCourse.displayOrder || 1}" min="1">
            </div>

            <div class="ac-form-group ac-col-3 ac-toggle-group">
              <label>Publish Status</label>
              <label class="ac-switch">
                <input type="checkbox" id="ac-input-published" ${editingCourse.published ? 'checked' : ''}>
                <span class="ac-switch-slider"></span>
                <span class="ac-switch-label" id="ac-switch-text">${editingCourse.published ? 'Published' : 'Draft'}</span>
              </label>
            </div>
          </div>
        </section>

        <!-- Section 2: Curriculum Structure (Topics & Lessons) -->
        <section class="ac-curriculum-section">
          <div class="ac-section-head">
            <div>
              <h2>Course Modules & Lessons</h2>
              <p class="ac-subhead">Manage topics, lesson video URLs, and downloadable files.</p>
            </div>
            <button type="button" class="btn btn-outline" id="ac-add-topic-btn">
              ${AC_ICONS.plus} Add Module
            </button>
          </div>

          <div id="ac-topics-container" class="ac-topics-container">
            ${renderTopicsList(editingCourse.topics)}
          </div>
        </section>
      </div>
    `;

    // Dynamic publish toggle label
    const pubCheckbox = document.getElementById('ac-input-published');
    const pubText = document.getElementById('ac-switch-text');
    pubCheckbox?.addEventListener('change', () => {
      if (pubText) pubText.textContent = pubCheckbox.checked ? 'Published' : 'Draft';
      editingCourse.published = pubCheckbox.checked;
    });

    // Add Topic Button
    document.getElementById('ac-add-topic-btn')?.addEventListener('click', () => {
      const newTopicOrder = (editingCourse.topics || []).length + 1;
      editingCourse.topics.push({
        id: generateStableId('topic'),
        title: `Module ${newTopicOrder}: Untitled Topic`,
        shortDescription: '',
        displayOrder: newTopicOrder,
        published: true,
        lessons: []
      });
      renderTopicsContainer();
    });

    wireTopicsEventHandlers();
  }

  function renderTopicsList(topics = []) {
    if (!topics || topics.length === 0) {
      return `
        <div class="ac-topics-empty">
          <p>No modules added yet. Click <strong>Add Module</strong> to create the first topic.</p>
        </div>
      `;
    }

    return topics.map((topic, tIdx) => {
      const lessons = topic.lessons || [];

      return `
        <div class="ac-topic-card" data-tidx="${tIdx}">
          <!-- Topic Header Bar -->
          <div class="ac-topic-header">
            <div class="ac-topic-title-area">
              <span class="ac-topic-num">#${topic.displayOrder || tIdx + 1}</span>
              <input type="text" class="ac-topic-title-input" data-tidx="${tIdx}" value="${sanitizeText(topic.title)}" placeholder="Topic / Module Title">
            </div>
            <div class="ac-topic-controls">
              <label class="ac-topic-pub-label">
                <input type="checkbox" class="ac-topic-pub-checkbox" data-tidx="${tIdx}" ${topic.published !== false ? 'checked' : ''}>
                <span>${topic.published !== false ? 'Published' : 'Hidden'}</span>
              </label>
              <button type="button" class="btn btn-icon ac-topic-move-up" data-tidx="${tIdx}" title="Move Up" ${tIdx === 0 ? 'disabled' : ''}>
                ${AC_ICONS.arrowUp}
              </button>
              <button type="button" class="btn btn-icon ac-topic-move-down" data-tidx="${tIdx}" title="Move Down" ${tIdx === topics.length - 1 ? 'disabled' : ''}>
                ${AC_ICONS.arrowDown}
              </button>
              <button type="button" class="btn btn-icon btn-danger ac-topic-delete" data-tidx="${tIdx}" title="Delete Topic">
                ${AC_ICONS.trash}
              </button>
            </div>
          </div>

          <!-- Topic Lessons List -->
          <div class="ac-lessons-wrap">
            <div class="ac-lessons-list" data-tidx="${tIdx}">
              ${renderLessonsList(lessons, tIdx)}
            </div>
            <button type="button" class="btn btn-outline btn-sm ac-add-lesson-btn" data-tidx="${tIdx}">
              ${AC_ICONS.plus} Add Lesson
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderLessonsList(lessons = [], tIdx) {
    if (!lessons || lessons.length === 0) {
      return `<p class="ac-lessons-empty">No lessons in this module. Click "+ Add Lesson" below.</p>`;
    }

    return lessons.map((les, lIdx) => {
      const resources = les.resources || [];
      const hasValidYoutube = les.youtubeUrl ? validateYouTubeUrl(les.youtubeUrl) : true;

      return `
        <div class="ac-lesson-item" data-tidx="${tIdx}" data-lidx="${lIdx}">
          <div class="ac-lesson-row">
            <div class="ac-lesson-order">${les.displayOrder || lIdx + 1}</div>
            
            <div class="ac-lesson-inputs">
              <!-- Lesson Title & Free Preview -->
              <div class="ac-lesson-line1">
                <input type="text" class="ac-lesson-title-input" data-tidx="${tIdx}" data-lidx="${lIdx}" value="${sanitizeText(les.title)}" placeholder="Lesson Title" required>
                <div class="ac-lesson-flags">
                  <label class="ac-check-pill" title="Free Preview allows public access without enrollment">
                    <input type="checkbox" class="ac-lesson-free-check" data-tidx="${tIdx}" data-lidx="${lIdx}" ${les.isFree ? 'checked' : ''}>
                    <span>Free Preview</span>
                  </label>
                  <label class="ac-check-pill">
                    <input type="checkbox" class="ac-lesson-pub-check" data-tidx="${tIdx}" data-lidx="${lIdx}" ${les.published !== false ? 'checked' : ''}>
                    <span>${les.published !== false ? 'Published' : 'Hidden'}</span>
                  </label>
                </div>
              </div>

              <!-- YouTube URL and Duration -->
              <div class="ac-lesson-line2">
                <div class="ac-yt-wrap ${!hasValidYoutube ? 'ac-has-error' : ''}">
                  <span class="ac-yt-icon">${AC_ICONS.youtube}</span>
                  <input type="url" class="ac-lesson-yt-input" data-tidx="${tIdx}" data-lidx="${lIdx}" value="${sanitizeText(les.youtubeUrl || '')}" placeholder="YouTube URL: https://youtube.com/watch?v=... or https://youtu.be/...">
                </div>
                <input type="text" class="ac-lesson-dur-input" data-tidx="${tIdx}" data-lidx="${lIdx}" value="${sanitizeText(les.duration || '')}" placeholder="Duration (e.g. 15 mins)">
              </div>

              <!-- Lesson Short Description -->
              <input type="text" class="ac-lesson-desc-input" data-tidx="${tIdx}" data-lidx="${lIdx}" value="${sanitizeText(les.shortDescription || '')}" placeholder="Short lesson summary / learning outcome (optional)">

              <!-- Downloadable Resources List -->
              <div class="ac-resources-box" data-tidx="${tIdx}" data-lidx="${lIdx}">
                <div class="ac-res-head">
                  <span class="ac-res-title">${AC_ICONS.download} Downloadable Resources (${resources.length})</span>
                  <div class="ac-res-head-actions">
                    <label class="ac-upload-res-label" title="Upload a document from your device">
                      <input type="file" class="ac-res-file-input" data-tidx="${tIdx}" data-lidx="${lIdx}" accept=".pdf,.xlsx,.xls,.docx,.doc,.csv,.zip,.html,.txt" style="display:none">
                      <span>${AC_ICONS.upload} Upload File</span>
                    </label>
                    <button type="button" class="ac-pick-lib-btn" data-tidx="${tIdx}" data-lidx="${lIdx}" title="Attach pre-bundled study checklist or worksheet">
                      Library Asset
                    </button>
                    <button type="button" class="ac-add-res-btn" data-tidx="${tIdx}" data-lidx="${lIdx}" title="Add a custom URL or external link">
                      + Custom URL
                    </button>
                  </div>
                </div>
                <div class="ac-res-progress-wrap" id="ac-res-progress-${tIdx}-${lIdx}" style="display:none">
                  <div class="ac-res-progress-msg" style="font-size:11px;color:var(--color-heading);margin-bottom:4px">Uploading file...</div>
                  <div class="ac-res-progress-bar">
                    <div class="ac-res-progress-fill" style="width:0%"></div>
                  </div>
                </div>
                <div class="ac-res-items">
                  ${renderResourcesList(resources, tIdx, lIdx)}
                </div>
              </div>
            </div>

            <!-- Action Controls -->
            <div class="ac-lesson-actions">
              <button type="button" class="btn btn-icon ac-les-move-up" data-tidx="${tIdx}" data-lidx="${lIdx}" ${lIdx === 0 ? 'disabled' : ''}>
                ${AC_ICONS.arrowUp}
              </button>
              <button type="button" class="btn btn-icon ac-les-move-down" data-tidx="${tIdx}" data-lidx="${lIdx}" ${lIdx === lessons.length - 1 ? 'disabled' : ''}>
                ${AC_ICONS.arrowDown}
              </button>
              <button type="button" class="btn btn-icon btn-danger ac-les-delete" data-tidx="${tIdx}" data-lidx="${lIdx}">
                ${AC_ICONS.trash}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderResourcesList(resources = [], tIdx, lIdx) {
    if (!resources || resources.length === 0) {
      return `<p class="ac-res-empty">No downloadable files attached to this lesson.</p>`;
    }

    return resources.map((res, rIdx) => {
      return `
        <div class="ac-res-row">
          <input type="text" class="ac-res-title-input" data-tidx="${tIdx}" data-lidx="${lIdx}" data-ridx="${rIdx}" value="${sanitizeText(res.title)}" placeholder="Resource Title (e.g. NEPSE Valuation Template)" required>
          <input type="text" class="ac-res-url-input" data-tidx="${tIdx}" data-lidx="${lIdx}" data-ridx="${rIdx}" value="${sanitizeText(res.url)}" placeholder="/assets/downloads/... or https://..." required>
          <select class="ac-res-type-select" data-tidx="${tIdx}" data-lidx="${lIdx}" data-ridx="${rIdx}">
            ${RESOURCE_FILE_TYPES.map(ft => `
              <option value="${ft}" ${(res.fileType || '').toLowerCase() === ft ? 'selected' : ''}>${ft.toUpperCase()}</option>
            `).join('')}
          </select>
          <a href="${sanitizeText(res.url)}" class="btn btn-icon btn-outline ac-res-test-link" target="_blank" rel="noopener" title="Test / Download File">
            ${AC_ICONS.download}
          </a>
          <button type="button" class="btn btn-icon btn-danger ac-res-delete" data-tidx="${tIdx}" data-lidx="${lIdx}" data-ridx="${rIdx}" title="Remove file">
            ${AC_ICONS.trash}
          </button>
        </div>
      `;
    }).join('');
  }

  function syncEditorDomToCourse() {
    if (!editingCourse) return;
    const titleEl = document.getElementById('ac-input-title');
    const slugEl = document.getElementById('ac-input-slug');
    const shortDescEl = document.getElementById('ac-input-shortdesc');
    const descEl = document.getElementById('ac-input-desc');
    const thumbEl = document.getElementById('ac-input-thumb');
    const orderEl = document.getElementById('ac-input-order');
    const pubEl = document.getElementById('ac-input-published');

    if (titleEl) editingCourse.title = titleEl.value.trim();
    if (slugEl) editingCourse.slug = slugEl.value.trim().toLowerCase();
    if (shortDescEl) editingCourse.shortDescription = shortDescEl.value.trim();
    if (descEl) {
      editingCourse.description = descEl.value.trim();
      editingCourse.fullDescription = descEl.value.trim();
    }
    if (thumbEl) editingCourse.thumbnail = thumbEl.value.trim() || null;
    if (orderEl) editingCourse.displayOrder = parseInt(orderEl.value || '1', 10);
    if (pubEl) {
      editingCourse.published = pubEl.checked;
      editingCourse.isPublished = pubEl.checked;
    }

    const container = document.getElementById('ac-topics-container');
    if (!container || !Array.isArray(editingCourse.topics)) return;

    // Sync topics
    container.querySelectorAll('.ac-topic-title-input').forEach(input => {
      const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
      if (editingCourse.topics[tIdx]) {
        editingCourse.topics[tIdx].title = input.value;
      }
    });

    container.querySelectorAll('.ac-topic-pub-checkbox').forEach(chk => {
      const tIdx = parseInt(chk.getAttribute('data-tidx'), 10);
      if (editingCourse.topics[tIdx]) {
        editingCourse.topics[tIdx].published = chk.checked;
      }
    });

    // Sync lessons
    container.querySelectorAll('.ac-lesson-title-input').forEach(input => {
      const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
      if (editingCourse.topics[tIdx]?.lessons?.[lIdx]) {
        editingCourse.topics[tIdx].lessons[lIdx].title = input.value.trim();
      }
    });

    container.querySelectorAll('.ac-lesson-free-check').forEach(chk => {
      const tIdx = parseInt(chk.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(chk.getAttribute('data-lidx'), 10);
      if (editingCourse.topics[tIdx]?.lessons?.[lIdx]) {
        editingCourse.topics[tIdx].lessons[lIdx].isFree = chk.checked;
      }
    });

    container.querySelectorAll('.ac-lesson-pub-check').forEach(chk => {
      const tIdx = parseInt(chk.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(chk.getAttribute('data-lidx'), 10);
      if (editingCourse.topics[tIdx]?.lessons?.[lIdx]) {
        editingCourse.topics[tIdx].lessons[lIdx].published = chk.checked;
      }
    });

    container.querySelectorAll('.ac-lesson-yt-input').forEach(input => {
      const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
      if (editingCourse.topics[tIdx]?.lessons?.[lIdx]) {
        editingCourse.topics[tIdx].lessons[lIdx].youtubeUrl = input.value.trim();
      }
    });

    container.querySelectorAll('.ac-lesson-dur-input').forEach(input => {
      const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
      if (editingCourse.topics[tIdx]?.lessons?.[lIdx]) {
        editingCourse.topics[tIdx].lessons[lIdx].duration = input.value.trim();
      }
    });

    container.querySelectorAll('.ac-lesson-desc-input').forEach(input => {
      const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
      if (editingCourse.topics[tIdx]?.lessons?.[lIdx]) {
        editingCourse.topics[tIdx].lessons[lIdx].shortDescription = input.value.trim();
      }
    });

    // Sync resources
    container.querySelectorAll('.ac-res-title-input').forEach(input => {
      const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
      const rIdx = parseInt(input.getAttribute('data-ridx'), 10);
      const res = editingCourse.topics[tIdx]?.lessons?.[lIdx]?.resources?.[rIdx];
      if (res) res.title = input.value.trim();
    });

    container.querySelectorAll('.ac-res-url-input').forEach(input => {
      const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
      const rIdx = parseInt(input.getAttribute('data-ridx'), 10);
      const res = editingCourse.topics[tIdx]?.lessons?.[lIdx]?.resources?.[rIdx];
      if (res) res.url = input.value.trim();
    });

    container.querySelectorAll('.ac-res-type-select').forEach(select => {
      const tIdx = parseInt(select.getAttribute('data-tidx'), 10);
      const lIdx = parseInt(select.getAttribute('data-lidx'), 10);
      const rIdx = parseInt(select.getAttribute('data-ridx'), 10);
      const res = editingCourse.topics[tIdx]?.lessons?.[lIdx]?.resources?.[rIdx];
      if (res) res.fileType = select.value;
    });
  }

  function renderTopicsContainer() {
    const container = document.getElementById('ac-topics-container');
    if (!container || !editingCourse) return;
    syncEditorDomToCourse();
    container.innerHTML = renderTopicsList(editingCourse.topics);
    wireTopicsEventHandlers();
  }

  function wireTopicsEventHandlers() {
    const container = document.getElementById('ac-topics-container');
    if (!container || !editingCourse) return;

    // Topic title edit
    container.querySelectorAll('.ac-topic-title-input').forEach(input => {
      input.addEventListener('input', () => {
        const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
        if (editingCourse.topics[tIdx]) {
          editingCourse.topics[tIdx].title = input.value;
        }
      });
    });

    // Topic publish check
    container.querySelectorAll('.ac-topic-pub-checkbox').forEach(chk => {
      chk.addEventListener('change', () => {
        const tIdx = parseInt(chk.getAttribute('data-tidx'), 10);
        if (editingCourse.topics[tIdx]) {
          editingCourse.topics[tIdx].published = chk.checked;
          const label = chk.parentElement.querySelector('span');
          if (label) label.textContent = chk.checked ? 'Published' : 'Hidden';
        }
      });
    });

    // Topic move up
    container.querySelectorAll('.ac-topic-move-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        if (tIdx > 0) {
          editingCourse.topics = reorderCollection(editingCourse.topics, tIdx, tIdx - 1);
          renderTopicsContainer();
        }
      });
    });

    // Topic move down
    container.querySelectorAll('.ac-topic-move-down').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        if (tIdx < editingCourse.topics.length - 1) {
          editingCourse.topics = reorderCollection(editingCourse.topics, tIdx, tIdx + 1);
          renderTopicsContainer();
        }
      });
    });

    // Topic delete
    container.querySelectorAll('.ac-topic-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        const topic = editingCourse.topics[tIdx];
        if (window.confirm(`Delete module "${topic.title}" and its lessons?`)) {
          editingCourse.topics.splice(tIdx, 1);
          editingCourse.topics = reorderCollection(editingCourse.topics, 0, 0); // Re-index
          renderTopicsContainer();
        }
      });
    });

    // Add Lesson button
    container.querySelectorAll('.ac-add-lesson-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        const topic = editingCourse.topics[tIdx];
        if (!topic) return;
        if (!Array.isArray(topic.lessons)) topic.lessons = [];

        const newLesOrder = topic.lessons.length + 1;
        topic.lessons.push({
          id: generateStableId('lesson'),
          topicId: topic.id,
          title: `Lesson ${newLesOrder}`,
          shortDescription: '',
          youtubeUrl: '',
          duration: '',
          displayOrder: newLesOrder,
          published: true,
          isFree: false,
          resources: []
        });
        renderTopicsContainer();
      });
    });

    // Lesson title input
    container.querySelectorAll('.ac-lesson-title-input').forEach(input => {
      input.addEventListener('input', () => {
        const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
        if (editingCourse.topics[tIdx]?.lessons[lIdx]) {
          editingCourse.topics[tIdx].lessons[lIdx].title = input.value;
        }
      });
    });

    // Lesson free preview toggle
    container.querySelectorAll('.ac-lesson-free-check').forEach(chk => {
      chk.addEventListener('change', () => {
        const tIdx = parseInt(chk.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(chk.getAttribute('data-lidx'), 10);
        if (editingCourse.topics[tIdx]?.lessons[lIdx]) {
          editingCourse.topics[tIdx].lessons[lIdx].isFree = chk.checked;
        }
      });
    });

    // Lesson publish toggle
    container.querySelectorAll('.ac-lesson-pub-check').forEach(chk => {
      chk.addEventListener('change', () => {
        const tIdx = parseInt(chk.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(chk.getAttribute('data-lidx'), 10);
        if (editingCourse.topics[tIdx]?.lessons[lIdx]) {
          editingCourse.topics[tIdx].lessons[lIdx].published = chk.checked;
          const label = chk.parentElement.querySelector('span');
          if (label) label.textContent = chk.checked ? 'Published' : 'Hidden';
        }
      });
    });

    // Lesson YouTube input
    container.querySelectorAll('.ac-lesson-yt-input').forEach(input => {
      const updateYt = () => {
        const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
        const val = input.value.trim();
        const wrapper = input.closest('.ac-yt-wrap');

        if (editingCourse.topics[tIdx]?.lessons[lIdx]) {
          editingCourse.topics[tIdx].lessons[lIdx].youtubeUrl = val;
        }

        if (val && !validateYouTubeUrl(val)) {
          wrapper?.classList.add('ac-has-error');
        } else {
          wrapper?.classList.remove('ac-has-error');
        }
      };

      input.addEventListener('input', updateYt);
      input.addEventListener('change', updateYt);
      input.addEventListener('blur', updateYt);
    });

    // Lesson duration input
    container.querySelectorAll('.ac-lesson-dur-input').forEach(input => {
      input.addEventListener('input', () => {
        const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
        if (editingCourse.topics[tIdx]?.lessons[lIdx]) {
          editingCourse.topics[tIdx].lessons[lIdx].duration = input.value;
        }
      });
    });

    // Lesson short description input
    container.querySelectorAll('.ac-lesson-desc-input').forEach(input => {
      input.addEventListener('input', () => {
        const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
        if (editingCourse.topics[tIdx]?.lessons[lIdx]) {
          editingCourse.topics[tIdx].lessons[lIdx].shortDescription = input.value;
        }
      });
    });

    // Lesson move up
    container.querySelectorAll('.ac-les-move-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(btn.getAttribute('data-lidx'), 10);
        const topic = editingCourse.topics[tIdx];
        if (topic && lIdx > 0) {
          topic.lessons = reorderCollection(topic.lessons, lIdx, lIdx - 1);
          renderTopicsContainer();
        }
      });
    });

    // Lesson move down
    container.querySelectorAll('.ac-les-move-down').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(btn.getAttribute('data-lidx'), 10);
        const topic = editingCourse.topics[tIdx];
        if (topic && lIdx < topic.lessons.length - 1) {
          topic.lessons = reorderCollection(topic.lessons, lIdx, lIdx + 1);
          renderTopicsContainer();
        }
      });
    });

    // Lesson delete
    container.querySelectorAll('.ac-les-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(btn.getAttribute('data-lidx'), 10);
        const topic = editingCourse.topics[tIdx];
        const les = topic?.lessons[lIdx];
        if (les && window.confirm(`Delete lesson "${les.title}"?`)) {
          topic.lessons.splice(lIdx, 1);
          topic.lessons = reorderCollection(topic.lessons, 0, 0); // Re-index
          renderTopicsContainer();
        }
      });
    });

    // Add Resource button (Custom URL)
    container.querySelectorAll('.ac-add-res-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(btn.getAttribute('data-lidx'), 10);
        const les = editingCourse.topics[tIdx]?.lessons[lIdx];
        if (!les) return;
        if (!Array.isArray(les.resources)) les.resources = [];

        les.resources.push({
          title: 'New Resource File',
          url: '/assets/downloads/',
          fileType: 'pdf'
        });
        renderTopicsContainer();
      });
    });

    // File Upload Handler (Physical file uploaded to Firebase Storage)
    container.querySelectorAll('.ac-res-file-input').forEach(input => {
      input.addEventListener('change', async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
        const les = editingCourse.topics[tIdx]?.lessons[lIdx];
        if (!les) return;

        const progressWrap = document.getElementById(`ac-res-progress-${tIdx}-${lIdx}`);
        const progressMsg = progressWrap?.querySelector('.ac-res-progress-msg');
        const progressFill = progressWrap?.querySelector('.ac-res-progress-fill');

        const fileVal = validateResourceFile(file);
        if (!fileVal.valid) {
          showAlert(fileVal.error, 'error');
          input.value = '';
          return;
        }

        try {
          if (progressWrap) progressWrap.style.display = 'block';
          if (progressMsg) progressMsg.textContent = `Uploading "${file.name}" (0%)...`;
          if (progressFill) progressFill.style.width = '0%';

          const uploaded = await uploadCourseResource(
            editingCourse.slug || 'general',
            file,
            (pct) => {
              if (progressMsg) progressMsg.textContent = `Uploading "${file.name}" (${pct}%)...`;
              if (progressFill) progressFill.style.width = `${pct}%`;
            },
            { uid: currentUser?.uid }
          );

          if (!Array.isArray(les.resources)) les.resources = [];
          les.resources.push({
            title: file.name.replace(/\.[^/.]+$/, ''),
            url: uploaded.url,
            fileType: uploaded.fileType || 'pdf'
          });

          showAlert(`Resource "${file.name}" uploaded successfully!`, 'success');
          renderTopicsContainer();
        } catch (uploadErr) {
          console.error('[risePaisa:Upload] Failed:', uploadErr);
          showAlert(`Upload failed: ${uploadErr.message}. You can also attach local files or enter HTTPS URLs.`, 'error');
          if (progressWrap) progressWrap.style.display = 'none';
        } finally {
          input.value = '';
        }
      });
    });

    // Pick Pre-bundled Library Asset
    container.querySelectorAll('.ac-pick-lib-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(btn.getAttribute('data-lidx'), 10);
        const les = editingCourse.topics[tIdx]?.lessons[lIdx];
        if (!les || !modalSlot) return;

        const itemsHtml = PLATFORM_DOWNLOADABLE_ASSETS.map((asset, aIdx) => `
          <div class="ac-lib-item" data-aidx="${aIdx}">
            <div class="ac-lib-item-info">
              <span class="ac-lib-item-title">${sanitizeText(asset.title)}</span>
              <span class="ac-lib-item-path">${sanitizeText(asset.url)}</span>
            </div>
            <button type="button" class="btn btn-sm btn-primary ac-lib-choose-btn" data-aidx="${aIdx}">
              Attach
            </button>
          </div>
        `).join('');

        modalSlot.innerHTML = `
          <div class="ae-modal-backdrop" id="ac-modal-backdrop">
            <div class="ae-modal-card ac-lib-modal-card" role="dialog" aria-labelledby="ac-lib-title" aria-modal="true">
              <div class="ae-modal-head">
                <h3 class="ae-modal-title" id="ac-lib-title">
                  ${AC_ICONS.download} Select Pre-bundled Learning Resource
                </h3>
                <button type="button" class="ae-modal-close" id="ac-lib-close-btn" aria-label="Close dialog">&times;</button>
              </div>
              <div class="ae-modal-body" style="max-height:60vh;overflow-y:auto">
                <p style="font-size:var(--text-xs);color:var(--color-text-secondary);margin-bottom:12px">
                  Choose a verified financial checklist or spreadsheet template from the local RisePaisa library:
                </p>
                <div class="ac-lib-list">
                  ${itemsHtml}
                </div>
              </div>
            </div>
          </div>
        `;

        const closeLibModal = () => { modalSlot.innerHTML = ''; };
        document.getElementById('ac-lib-close-btn')?.addEventListener('click', closeLibModal);

        modalSlot.querySelectorAll('.ac-lib-choose-btn').forEach(chooseBtn => {
          chooseBtn.addEventListener('click', () => {
            const aIdx = parseInt(chooseBtn.getAttribute('data-aidx'), 10);
            const asset = PLATFORM_DOWNLOADABLE_ASSETS[aIdx];
            if (asset) {
              if (!Array.isArray(les.resources)) les.resources = [];
              les.resources.push({
                title: asset.title,
                url: asset.url,
                fileType: asset.fileType || 'checklist'
              });
              closeLibModal();
              showAlert(`Attached "${asset.title}" to lesson.`, 'success');
              renderTopicsContainer();
            }
          });
        });
      });
    });

    // Resource input binds
    container.querySelectorAll('.ac-res-title-input').forEach(input => {
      input.addEventListener('input', () => {
        const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
        const rIdx = parseInt(input.getAttribute('data-ridx'), 10);
        const res = editingCourse.topics[tIdx]?.lessons[lIdx]?.resources[rIdx];
        if (res) res.title = input.value;
      });
    });

    container.querySelectorAll('.ac-res-url-input').forEach(input => {
      input.addEventListener('input', () => {
        const tIdx = parseInt(input.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(input.getAttribute('data-lidx'), 10);
        const rIdx = parseInt(input.getAttribute('data-ridx'), 10);
        const res = editingCourse.topics[tIdx]?.lessons[lIdx]?.resources[rIdx];
        if (res) res.url = input.value;
      });
    });

    container.querySelectorAll('.ac-res-type-select').forEach(select => {
      select.addEventListener('change', () => {
        const tIdx = parseInt(select.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(select.getAttribute('data-lidx'), 10);
        const rIdx = parseInt(select.getAttribute('data-ridx'), 10);
        const res = editingCourse.topics[tIdx]?.lessons[lIdx]?.resources[rIdx];
        if (res) res.fileType = select.value;
      });
    });

    container.querySelectorAll('.ac-res-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const tIdx = parseInt(btn.getAttribute('data-tidx'), 10);
        const lIdx = parseInt(btn.getAttribute('data-lidx'), 10);
        const rIdx = parseInt(btn.getAttribute('data-ridx'), 10);
        const les = editingCourse.topics[tIdx]?.lessons[lIdx];
        const res = les?.resources[rIdx];
        if (les?.resources[rIdx] && window.confirm(`Remove attached resource "${res.title || 'this file'}"?`)) {
          les.resources.splice(rIdx, 1);
          renderTopicsContainer();
        }
      });
    });
  }

  // ── Save Handler ───────────────────────────────────────────────────────────
  async function handleSaveCourse() {
    if (!editingCourse || !currentUser) return;

    // Flush all current DOM inputs into editingCourse
    syncEditorDomToCourse();

    // Validate and canonicalize URLs
    for (const topic of editingCourse.topics) {
      for (const les of (topic.lessons || [])) {
        if (les.youtubeUrl) {
          if (!validateYouTubeUrl(les.youtubeUrl)) {
            showAlert(`Invalid YouTube URL in lesson "${les.title}". Please enter a valid YouTube video address.`, 'error');
            return;
          }
          les.youtubeUrl = toCanonicalYouTubeUrl(les.youtubeUrl) || les.youtubeUrl;
        }
        for (const res of (les.resources || [])) {
          const resCheck = validateResourceUrl(res.url);
          if (!resCheck.valid) {
            showAlert(`Invalid resource URL in "${res.title}": ${resCheck.error}`, 'error');
            return;
          }
        }
      }
    }

    const saveBtn = document.getElementById('ac-save-course-btn');
    try {
      if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.textContent = 'Saving...';
      }

      const saveResult = await saveAdminCourse(currentUser.uid, editingCourse);
      const savedCourse = saveResult.course || editingCourse;
      const oldSlug = editingCourse._originalSlug;
      editingCourse = savedCourse;

      // Update active list
      const existingIdx = activeCourses.findIndex(c => c.slug === savedCourse.slug || (oldSlug && c.slug === oldSlug));
      if (existingIdx >= 0) {
        activeCourses[existingIdx] = savedCourse;
      } else {
        activeCourses.push(savedCourse);
      }

      showAlert(`Course "${savedCourse.title}" successfully saved to Cloud Firestore!`, 'success');
      setTimeout(() => {
        renderCourseList();
      }, 1000);
    } catch (err) {
      showAlert(`Error saving course: ${err.message}`, 'error');
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.innerHTML = `${AC_ICONS.check} Save Changes`;
      }
    }
  }

  // ── Authentication & Authorization Gateway ─────────────────────────────────
  let isChecking = false;

  async function checkAdminAccess(user) {
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
        if (headerActions) headerActions.innerHTML = '';
        workspace.innerHTML = `
          <div class="ac-auth-card">
            <div class="ac-auth-icon">${AC_ICONS.lock}</div>
            <h2>Administrator Sign-In Required</h2>
            <p>Please sign in with your authorized RisePaisa administrator account (Google or Email/Password) to access the Course Management Console.</p>
            <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <button type="button" class="btn btn-primary btn-lg" id="ac-login-btn">
                Sign In to Admin Account
              </button>
              <a href="${ROUTES.HOME}" class="btn btn-outline btn-lg">
                Return to Website
              </a>
            </div>
          </div>
        `;
        document.getElementById('ac-login-btn')?.addEventListener('click', () => {
          openAuthModal('login');
        });
        isChecking = false;
        return;
      }

      // 3. Checking administrator permissions state
      workspace.innerHTML = `
        <div class="ac-loading-state">
          <div class="ac-spinner"></div>
          <p>Verifying administrative privileges for <strong>${sanitizeText(user.email || user.uid)}</strong>...</p>
        </div>
      `;

      const res = await checkIsAdminDetailed(user.uid);

      // 4. Condition 6: Administrator access granted -> Fetch and render courses
      if (res.isAdmin) {
        workspace.innerHTML = `
          <div class="ac-loading-state">
            <div class="ac-spinner"></div>
            <p>Loading course catalog...</p>
          </div>
        `;
        activeCourses = await fetchAdminCourses(user.uid);
        renderCourseList();
        return;
      }

      if (headerActions) headerActions.innerHTML = '';

      // 5. Condition 3: Firestore permission denied (Rules reject reading /admins/{uid})
      if (res.reason === 'permission_denied') {
        workspace.innerHTML = `
          <div class="ac-auth-card ac-access-denied">
            <div class="ac-auth-icon ac-denied-icon" style="color:var(--color-warning, #f59e0b)">${AC_ICONS.x}</div>
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
                    <span id="ac-uid-denied-val">${user.uid}</span>
                    <button type="button" class="btn btn-sm btn-outline" id="ac-copy-uid-denied-btn" style="margin-left:auto;white-space:nowrap">Copy UID</button>
                  </div>
                  Add document fields:
                  <br>&bull; <code>role: "admin"</code> (string)
                  <br>&bull; <code>email: "${sanitizeText(user.email || '')}"</code> (string)
                </li>
                <li>Once saved in Firebase Console, click <strong>Re-check Permissions</strong> below.</li>
              </ol>
            </div>
            <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <button type="button" class="btn btn-primary" id="ac-retry-rules-btn">
                Re-check Permissions
              </button>
              <button type="button" class="btn btn-outline" id="ac-switch-account-rules-btn">
                Sign In with Different Account
              </button>
              <a href="${ROUTES.HOME}" class="btn btn-outline">
                Return to Website
              </a>
            </div>
          </div>
        `;
        document.getElementById('ac-copy-uid-denied-btn')?.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(user.uid);
            const btn = document.getElementById('ac-copy-uid-denied-btn');
            if (btn) btn.textContent = 'Copied!';
            setTimeout(() => {
              const b = document.getElementById('ac-copy-uid-denied-btn');
              if (b) b.textContent = 'Copy UID';
            }, 2000);
          } catch {}
        });
        document.getElementById('ac-retry-rules-btn')?.addEventListener('click', () => {
          checkAdminAccess(user);
        });
        document.getElementById('ac-switch-account-rules-btn')?.addEventListener('click', async () => {
          await logoutUser();
          openAuthModal('login');
        });
        return;
      }

      // 6. Condition 2: Administrator document missing (Rules allowed read, but doc does not exist)
      if (res.reason === 'not_in_allowlist') {
        workspace.innerHTML = `
          <div class="ac-auth-card ac-access-denied">
            <div class="ac-auth-icon ac-denied-icon">${AC_ICONS.x}</div>
            <h2>Administrative Authorization Required</h2>
            <p>
              Your signed-in account (<strong>${sanitizeText(user.email || user.uid)}</strong>) is authenticated, but is not recognized as a registered platform administrator in Cloud Firestore (missing <code>admins/${user.uid}</code>).
            </p>
            <div class="ac-provision-help">
              <h3>Owner Administrator Activation Guide</h3>
              <p>To authorize this account as a permanent platform administrator:</p>
              <ol>
                <li>Open Cloud Firestore in your Firebase Console: <a href="https://console.firebase.google.com/project/risepaisa-77278/firestore" target="_blank" rel="noopener">risepaisa-77278 Firestore</a>.</li>
                <li>Under <strong>Cloud Firestore</strong>, locate or click <strong>Start collection</strong> with name: <code>admins</code>.</li>
                <li>Add a document where the <strong>Document ID</strong> is your exact Firebase Auth UID:
                  <div style="margin:var(--space-2) 0;display:flex;align-items:center;gap:var(--space-2);background:var(--color-bg-secondary);padding:var(--space-2) var(--space-3);border-radius:var(--radius-md);word-break:break-all;font-family:monospace;font-size:var(--text-xs)">
                    <span id="ac-uid-value">${user.uid}</span>
                    <button type="button" class="btn btn-sm btn-outline" id="ac-copy-uid-btn" style="margin-left:auto;white-space:nowrap">Copy UID</button>
                  </div>
                </li>
                <li>Inside the document, add fields:
                  <br>&bull; <code>role: "admin"</code> (string)
                  <br>&bull; <code>email: "${sanitizeText(user.email || '')}"</code> (string)
                </li>
                <li>Click <strong>Save</strong> in Firebase Console, then click <strong>Re-check Permissions</strong> below.</li>
              </ol>
            </div>
            <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <button type="button" class="btn btn-primary" id="ac-retry-auth-btn">
                Re-check Permissions
              </button>
              <button type="button" class="btn btn-outline" id="ac-switch-account-btn">
                Sign In with Different Account
              </button>
              <a href="${ROUTES.HOME}" class="btn btn-outline">
                Return to Website
              </a>
            </div>
          </div>
        `;
        document.getElementById('ac-copy-uid-btn')?.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(user.uid);
            const btn = document.getElementById('ac-copy-uid-btn');
            if (btn) btn.textContent = 'Copied!';
            setTimeout(() => {
              const b = document.getElementById('ac-copy-uid-btn');
              if (b) b.textContent = 'Copy UID';
            }, 2000);
          } catch {}
        });
        document.getElementById('ac-retry-auth-btn')?.addEventListener('click', () => {
          checkAdminAccess(user);
        });
        document.getElementById('ac-switch-account-btn')?.addEventListener('click', async () => {
          await logoutUser();
          openAuthModal('login');
        });
        return;
      }

      // 7. Condition 5: Network unavailable
      if (res.reason === 'network_error') {
        workspace.innerHTML = `
          <div class="ac-auth-card ac-error-card">
            <div class="ac-auth-icon ac-denied-icon" style="color:var(--color-warning, #f59e0b)">${AC_ICONS.x}</div>
            <h2>Network Connection Unavailable</h2>
            <p>
              Unable to reach Cloud Firestore services. Please check your internet connection and try again.
            </p>
            <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <button type="button" class="btn btn-primary" id="ac-retry-net-btn">
                Retry Connection
              </button>
              <a href="${ROUTES.HOME}" class="btn btn-outline">
                Return to Homepage
              </a>
            </div>
          </div>
        `;
        document.getElementById('ac-retry-net-btn')?.addEventListener('click', () => {
          checkAdminAccess(user);
        });
        return;
      }

      // 8. Condition 4: Firebase configuration error / database unavailable
      workspace.innerHTML = `
        <div class="ac-auth-card ac-error-card">
          <div class="ac-auth-icon ac-denied-icon" style="color:var(--color-warning, #f59e0b)">${AC_ICONS.x}</div>
          <h2>Firebase Configuration Error</h2>
          <p>
            Unable to verify administrative authorization due to a configuration or database issue:
            <br><code style="display:inline-block;margin-top:var(--space-2);padding:var(--space-2) var(--space-3);background:var(--color-bg-secondary);border-radius:var(--radius-sm);color:var(--color-error)">${sanitizeText(res.message || 'Database connection failed')}</code>
          </p>
          <div class="ac-auth-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
            <button type="button" class="btn btn-primary" id="ac-retry-error-btn">
              Retry Connection
            </button>
            <button type="button" class="btn btn-outline" id="ac-switch-user-btn">
              Sign In with Different Account
            </button>
            <a href="${ROUTES.HOME}" class="btn btn-outline">
              Return to Homepage
            </a>
          </div>
        </div>
      `;
      document.getElementById('ac-retry-error-btn')?.addEventListener('click', () => {
        checkAdminAccess(user);
      });
      document.getElementById('ac-switch-user-btn')?.addEventListener('click', async () => {
        await logoutUser();
        openAuthModal('login');
      });
      return;
    } catch (err) {
      workspace.innerHTML = `
        <div class="ac-auth-card ac-access-denied">
          <h2>Failed to Load Courses</h2>
          <p>${sanitizeText(err.message)}</p>
          <div class="ac-auth-actions" style="margin-top:var(--space-4);display:flex;gap:var(--space-3);justify-content:center">
            <button type="button" class="btn btn-primary" id="ac-reload-courses-btn">Retry</button>
            <a href="${ROUTES.HOME}" class="btn btn-outline">Return to Website</a>
          </div>
        </div>
      `;
      document.getElementById('ac-reload-courses-btn')?.addEventListener('click', () => {
        checkAdminAccess(user);
      });
    } finally {
      isChecking = false;
    }
  }

  // Subscribe to auth state
  authUnsubscribe = subscribeToAuth((user) => {
    checkAdminAccess(user);
  });

  return () => {
    window.removeEventListener('keydown', handleEscapeKey);
    if (typeof authUnsubscribe === 'function') {
      authUnsubscribe();
    }
  };
}

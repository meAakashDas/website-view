// ==============================================
// risePaisa - Course Learning Interface & Video Player
// Premium, Minimalist, Responsive Educational Interface
// Inspired by Apple Design & Clean Academic Restraint
// ==============================================

import { getCourseBySlug } from '../data/courses.js';
import { getSettings } from '../data/settings.js';
import { ROUTES } from '../routes.js';
import { ICONS, setPageMeta } from '../components.js';
import {
  normalizeCourseData,
  fetchCourseData,
  toSafeYouTubeEmbedUrl,
  validateResourceUrl,
  sanitizeText,
  checkUserEnrollment
} from '../firebase/courses.js';
import { subscribeToAuth, getCurrentUser } from '../firebase/auth.js';
import { openAuthModal } from '../firebase/ui.js';
import {
  createBrandedVideoPlayer,
  initBrandedVideoPlayer,
  destroyBrandedVideoPlayer
} from '../components/videoPlayer.js';

// ── SVG Icons for Course Learning Interface ──────
const CL_ICONS = {
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  unlock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  fileText: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  spreadsheet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/></svg>`,
  checklist: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
};

/**
 * Returns an appropriate icon for downloadable resource file types.
 */
function _getResourceIcon(fileType) {
  const type = (fileType || '').toLowerCase();
  if (type === 'excel' || type === 'sheet' || type === 'csv') {
    return CL_ICONS.spreadsheet;
  }
  if (type === 'checklist') {
    return CL_ICONS.checklist;
  }
  return CL_ICONS.fileText;
}

/**
 * Flattens all published topics and lessons into a linear sequence.
 * Guarantees that Prev/Next navigation operates strictly on published content.
 *
 * @param {object} normalizedCourse
 * @returns {Array<object>}
 */
export function getPublishedLessonsSequence(normalizedCourse) {
  if (!normalizedCourse || !Array.isArray(normalizedCourse.topics)) {
    return [];
  }
  const sequence = [];
  for (const topic of normalizedCourse.topics) {
    if (topic.published === false) continue;
    if (!Array.isArray(topic.lessons)) continue;
    for (const lesson of topic.lessons) {
      if (lesson.published === false) continue;
      sequence.push({
        ...lesson,
        topicTitle: topic.title,
        topicOrder: topic.displayOrder
      });
    }
  }
  return sequence;
}

/**
 * Clean helper to find a lesson by ID or rank.
 */
function _findLessonInSequence(sequence, lessonId) {
  if (!Array.isArray(sequence) || sequence.length === 0) return null;
  if (!lessonId) return sequence[0];

  const cleanId = String(lessonId).trim().toLowerCase();
  return (
    sequence.find(l => String(l.id).toLowerCase() === cleanId) ||
    sequence.find(l => String(l.displayOrder) === cleanId) ||
    sequence.find(l => `lesson-${l.displayOrder}` === cleanId) ||
    sequence[0]
  );
}

/**
 * Build WhatsApp enrollment URL with pre-filled course title and fee.
 */
function _buildWhatsAppEnrollUrl(course) {
  const settings = getSettings ? getSettings() : {};
  const rawPhone = settings.whatsapp || '9779740269317';
  const cleanPhone = rawPhone.replace(/[^0-9]/g, '');
  const priceStr = course?.price ? ` (NPR ${course.price.toLocaleString()})` : '';
  const message = `Hi RisePaisa! I want to enroll in the ${course?.title || 'Course'}${priceStr} to unlock full lesson access.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Render the module and lesson accordion markup for the sidebar.
 * Shared between initial static render and live client hydration.
 *
 * @param {Array<object>} topics
 * @param {string} activeLessonId
 * @param {boolean} [isEnrolled=false]
 * @returns {string}
 */
export function renderModulesAccordion(topics, activeLessonId, isEnrolled = false) {
  if (!Array.isArray(topics)) return '';
  return topics.map((topic, topicIdx) => {
    if (topic.published === false) return '';
    const topicLessons = (topic.lessons || []).filter(l => l.published !== false);
    if (topicLessons.length === 0) return '';

    const isTopicActive = topicLessons.some(l => l.id === activeLessonId);

    return `
      <div class="cl-module-group ${isTopicActive ? 'active' : ''}" data-topic-id="${topic.id}">
        <button
          type="button"
          class="cl-module-toggle"
          aria-expanded="${isTopicActive ? 'true' : 'false'}"
          aria-controls="cl-module-content-${topic.id}">
          <div class="cl-module-toggle-left">
            <span class="cl-mod-num">M0${topic.displayOrder || (topicIdx + 1)}</span>
            <span class="cl-mod-name">${sanitizeText(topic.title)}</span>
          </div>
          <span class="cl-mod-chevron">${CL_ICONS.chevronDown}</span>
        </button>

        <div class="cl-module-content" id="cl-module-content-${topic.id}">
          <div class="cl-lesson-list" role="list">
            ${topicLessons.map(lesson => {
              const isCurrent = lesson.id === activeLessonId;
              const isLessonFree = Boolean(lesson.isFree);

              return `
                <div
                  role="listitem"
                  class="cl-lesson-item ${isCurrent ? 'active' : ''}"
                  id="cl-sidebar-item-${lesson.id}"
                  data-lesson-id="${lesson.id}"
                  ${isCurrent ? 'aria-current="true"' : ''}>
                  
                  <button
                    type="button"
                    class="cl-lesson-btn"
                    data-lesson-id="${lesson.id}">
                    
                    <div class="cl-lesson-indicator">
                      <span class="cl-item-rank">${String(lesson.displayOrder || 1).padStart(2, '0')}</span>
                    </div>

                    <div class="cl-item-body">
                      <span class="cl-item-title">${sanitizeText(lesson.title)}</span>
                      <div class="cl-item-submeta">
                        ${lesson.duration ? `
                          <span class="cl-item-duration">${sanitizeText(lesson.duration)}</span>
                        ` : ''}
                        ${(isLessonFree || isEnrolled) ? (isLessonFree ? `
                          <span class="cl-item-free-tag">Free</span>
                        ` : '') : `
                          <span class="cl-item-lock-icon" id="cl-lock-icon-${lesson.id}">${CL_ICONS.lock}</span>
                        `}
                      </div>
                    </div>
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================================================
// 1. Server-Side / Static HTML Renderer
// =============================================================================

/**
 * Render the static course learning interface shell.
 * Compatible with static site generation and client-side history navigation.
 *
 * @param {string} slug - Course slug (e.g. 'nepse-stock-market-basics')
 * @param {string|null} [initialLessonId=null] - Optional lesson ID to open
 * @returns {string} Rendered HTML string
 */
export function renderCourseLearnPage(slug, initialLessonId = null) {
  const rawCourse = getCourseBySlug(slug);

  if (!rawCourse) {
    setPageMeta('Course Not Found', 'The requested course does not exist.', ROUTES.COURSES);
    return `
      <div class="section">
        <div class="container" style="text-align:center;padding:var(--space-16) 0">
          <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-3);color:var(--color-heading)">Course Not Found</h1>
          <p style="color:var(--color-text-secondary);margin-bottom:var(--space-6)">The course you are attempting to learn is not available.</p>
          <a href="${ROUTES.COURSES}" class="btn btn-primary">Browse All Courses</a>
        </div>
      </div>
    `;
  }

  const course = normalizeCourseData(rawCourse);
  const publishedLessons = getPublishedLessonsSequence(course);

  setPageMeta(
    `${course.title} - Learning Interface`,
    `Interactive learning interface and structured video lessons for ${course.title}.`,
    ROUTES.COURSE_LEARN ? ROUTES.COURSE_LEARN(course.slug) : `/courses/${course.slug}/learn`
  );

  if (publishedLessons.length === 0) {
    return `
      <div class="cl-page-container">
        <div class="container">
          <nav class="cl-breadcrumb" aria-label="Breadcrumb">
            <a href="${ROUTES.HOME}">Home</a>
            <span class="cl-sep">/</span>
            <a href="${ROUTES.COURSES}">Courses</a>
            <span class="cl-sep">/</span>
            <a href="${ROUTES.COURSE_DETAIL(course.slug)}">${sanitizeText(course.title)}</a>
            <span class="cl-sep">/</span>
            <span class="cl-current">Learn</span>
          </nav>
          <div class="cl-empty-catalog-card">
            <div class="cl-empty-catalog-icon">${CL_ICONS.clock}</div>
            <h2>No Published Lessons Yet</h2>
            <p>Lessons for <strong>${sanitizeText(course.title)}</strong> are currently being prepared and published.</p>
            <a href="${ROUTES.COURSE_DETAIL(course.slug)}" class="btn btn-primary">View Course Overview</a>
          </div>
        </div>
      </div>
    `;
  }

  const activeLesson = _findLessonInSequence(publishedLessons, initialLessonId);
  const activeIndex = publishedLessons.findIndex(l => l.id === activeLesson.id);
  const prevLesson = activeIndex > 0 ? publishedLessons[activeIndex - 1] : null;
  const nextLesson = activeIndex < publishedLessons.length - 1 ? publishedLessons[activeIndex + 1] : null;

  const isFreePreview = Boolean(activeLesson.isFree);
  const embedUrl = isFreePreview ? toSafeYouTubeEmbedUrl(activeLesson.youtubeUrl) : null;
  const waEnrollUrl = _buildWhatsAppEnrollUrl(course);

  return `
    <div class="cl-page-container" id="cl-page" data-course-id="${sanitizeText(course.id)}" data-course-slug="${sanitizeText(course.slug)}">
      <div class="container cl-header-container">
        
        <!-- Breadcrumb & Top Utility Nav -->
        <div class="cl-top-bar">
          <div class="cl-top-bar-nav">
            <a href="${ROUTES.COURSE_DETAIL(course.slug)}" class="cl-back-course-link" title="Return to Course Overview &amp; Syllabus">
              ${CL_ICONS.arrowLeft} <span>Course Overview &amp; Syllabus</span>
            </a>
            <span class="cl-top-divider" aria-hidden="true">|</span>
            <nav class="cl-breadcrumb" aria-label="Breadcrumb">
              <a href="${ROUTES.HOME}">Home</a>
              <span class="cl-sep">/</span>
              <a href="${ROUTES.COURSES}">Courses</a>
              <span class="cl-sep">/</span>
              <a href="${ROUTES.COURSE_DETAIL(course.slug)}">${sanitizeText(course.title)}</a>
              <span class="cl-sep">/</span>
              <span class="cl-current" id="cl-breadcrumb-current">${sanitizeText(activeLesson.title)}</span>
            </nav>
          </div>

          <!-- Mobile Drawer Trigger Button -->
          <button
            type="button"
            class="cl-mobile-contents-btn"
            id="cl-mobile-contents-btn"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="cl-sidebar-card"
            aria-label="Open course contents outline">
            <span class="cl-m-btn-icon">${CL_ICONS.checklist}</span>
            <span class="cl-m-btn-text">Course Contents</span>
          </button>
        </div>

        <!-- Course Title Header -->
        <header class="cl-header-banner">
          <div class="cl-header-meta">
            <span class="cl-kicker-pill">
              <span class="cl-kicker-pulse"></span>
              Learning Mode · ${publishedLessons.length} Lessons
            </span>
            <h1 class="cl-course-title">${sanitizeText(course.title)}</h1>
          </div>
        </header>
      </div>

      <!-- Main Learning Workspace (Desktop 2-Column Grid / Mobile Stack) -->
      <main class="cl-workspace">
        <div class="container">
          <div class="cl-layout-grid">
            
            <!-- LEFT COLUMN: VIDEO PLAYER & LESSON DETAILS -->
            <section class="cl-main-player-col" aria-label="Lesson Video & Details">
              
              <!-- 16:9 Responsive Video Stage -->
              <div class="cl-player-wrapper" id="cl-player-wrapper">
                ${isFreePreview && embedUrl ? createBrandedVideoPlayer({
                  embedUrl,
                  title: activeLesson.title || 'Course Lesson',
                  iframeId: 'cl-video-iframe',
                  containerId: 'cl-iframe-container'
                }) : `
                  <div class="cl-locked-screen" id="cl-locked-screen">
                    <div class="cl-locked-content">
                      <div class="cl-locked-badge-wrap">
                        <span class="cl-locked-icon-badge">${CL_ICONS.lock}</span>
                        <span class="cl-locked-tag">Enrollment Required</span>
                      </div>
                      <h2 class="cl-locked-headline">This Lesson Requires Course Enrollment</h2>
                      <p class="cl-locked-subtext">
                        Enroll in <strong>${sanitizeText(course.title)}</strong> to unlock all 20+ hours of video lessons, practical NEPSE company analysis, and downloadable templates.
                      </p>
                      <div class="cl-locked-cta-group">
                        <button type="button" class="btn btn-primary" id="cl-locked-signin-trigger">
                          Sign In to Your Account
                        </button>
                        <a href="${waEnrollUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="cl-locked-whatsapp-cta">
                          ${CL_ICONS.whatsapp} Enroll via WhatsApp (${course.currency || 'NPR'} ${(course.price || 2999).toLocaleString()})
                        </a>
                        ${publishedLessons[0] && publishedLessons[0].id !== activeLesson.id ? `
                          <button type="button" class="btn btn-ghost" id="cl-watch-preview-btn" data-target-id="${publishedLessons[0].id}">
                            Watch Free Lesson 1
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                `}
              </div>

              <!-- Lesson Meta Row: Topic, Title, Duration, Access Status, Completion Button -->
              <div class="cl-lesson-meta-card">
                <div class="cl-lesson-top-row">
                  <div class="cl-topic-indicator" id="cl-topic-indicator">
                    ${sanitizeText(activeLesson.topicTitle || 'Module 1')}
                  </div>
                  
                  <div class="cl-status-badges" id="cl-status-badges">
                    <span class="cl-access-badge ${isFreePreview ? 'cl-badge-free' : 'cl-badge-locked'}" id="cl-access-badge">
                      ${isFreePreview ? `${CL_ICONS.sparkles} Free Preview` : `${CL_ICONS.lock} Enrolled Only`}
                    </span>
                  </div>
                </div>

                <div class="cl-lesson-title-row">
                  <h2 class="cl-lesson-title" id="cl-lesson-title">
                    ${sanitizeText(activeLesson.title)}
                  </h2>
                </div>

                <!-- Short Lesson Description -->
                <div class="cl-lesson-desc-box ${!activeLesson.shortDescription ? 'cl-hidden' : ''}" id="cl-lesson-desc-box">
                  <p class="cl-lesson-desc" id="cl-lesson-desc">
                    ${sanitizeText(activeLesson.shortDescription || '')}
                  </p>
                </div>
              </div>

              <!-- Downloadable Lesson Resources (Rendered only when lesson has resources & is accessible) -->
              <div class="cl-resources-card ${(isFreePreview && activeLesson.resources && activeLesson.resources.length > 0) ? '' : 'cl-hidden'}" id="cl-resources-section">
                <div class="cl-resources-header">
                  <div class="cl-res-hdr-left">
                    <span class="cl-res-hdr-icon">${CL_ICONS.download}</span>
                    <h3 class="cl-resources-heading">Resources</h3>
                  </div>
                </div>

                <div class="cl-resources-list" id="cl-resources-list">
                  ${(isFreePreview && activeLesson.resources) ? activeLesson.resources.map(res => {
                    const icon = _getResourceIcon(res.fileType);
                    const safeUrl = sanitizeText(res.url);
                    return `
                      <div class="cl-resource-item">
                        <div class="cl-res-icon-wrap">${icon}</div>
                        <div class="cl-res-info">
                          <span class="cl-res-title">${sanitizeText(res.title)}</span>
                          <span class="cl-res-type-pill">${sanitizeText(res.fileType || 'Document')}</span>
                        </div>
                        <a href="${safeUrl}" download target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-ghost cl-res-download-btn">
                          ${CL_ICONS.download} Open Resource
                        </a>
                      </div>
                    `;
                  }).join('') : ''}
                </div>
              </div>

              <!-- Prev / Next Lesson Navigation Bar -->
              <nav class="cl-prev-next-nav" aria-label="Lesson Sequence Navigation">
                <button
                  type="button"
                  class="cl-nav-step-btn cl-nav-prev"
                  id="cl-prev-btn"
                  ${!prevLesson ? 'disabled aria-disabled="true"' : `data-target-id="${prevLesson.id}"`}
                  aria-label="Navigate to previous lesson">
                  <span class="cl-nav-arrow">${CL_ICONS.chevronLeft}</span>
                  <div class="cl-nav-step-text">
                    <span class="cl-nav-step-sub">Previous Lesson</span>
                    <span class="cl-nav-step-title" id="cl-prev-title">${prevLesson ? sanitizeText(prevLesson.title) : 'Beginning of Course'}</span>
                  </div>
                </button>

                <button
                  type="button"
                  class="cl-nav-step-btn cl-nav-next"
                  id="cl-next-btn"
                  ${!nextLesson ? 'disabled aria-disabled="true"' : `data-target-id="${nextLesson.id}"`}
                  aria-label="Navigate to next lesson">
                  <div class="cl-nav-step-text cl-nav-text-right">
                    <span class="cl-nav-step-sub">Next Lesson</span>
                    <span class="cl-nav-step-title" id="cl-next-title">${nextLesson ? sanitizeText(nextLesson.title) : 'End of Course'}</span>
                  </div>
                  <span class="cl-nav-arrow">${CL_ICONS.chevronRight}</span>
                </button>
              </nav>

              <!-- Mobile Bottom Course Contents Trigger Button -->
              <div class="cl-mobile-bottom-bar">
                <button
                  type="button"
                  class="cl-mobile-bottom-contents-btn"
                  id="cl-mobile-bottom-contents-btn"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="cl-sidebar-card"
                  aria-label="Open course contents outline">
                  <span class="cl-m-btn-icon">${CL_ICONS.checklist}</span>
                  <span class="cl-m-btn-text">Course Contents</span>
                </button>
              </div>

            </section>

            <!-- RIGHT COLUMN: COURSE CONTENT SIDEBAR (STICKY ON DESKTOP, ACCORDION/DRAWER ON MOBILE) -->
            <aside class="cl-sidebar-col" id="cl-sidebar-col" aria-label="Course Curriculum and Lessons">
              <div class="cl-sidebar-card" id="cl-sidebar-card">
                
                <div class="cl-sidebar-header">
                  <div class="cl-sidebar-header-info">
                    <h2 class="cl-sidebar-title">Course Content</h2>
                    <span class="cl-sidebar-subtitle">
                      ${course.topics.length} Modules · ${publishedLessons.length} Lessons
                    </span>
                  </div>
                  <div class="cl-sidebar-header-actions">
                    <button type="button" class="cl-drawer-close-btn" id="cl-drawer-close-btn" aria-label="Close Course Outline">
                      ✕
                    </button>
                  </div>
                </div>

                <!-- Scrollable Module and Lesson Stack -->
                <div class="cl-modules-accordion" id="cl-modules-accordion">
                  ${renderModulesAccordion(course.topics, activeLesson.id, false)}
                </div>

              </div>
            </aside>

          </div>
        </div>
      </main>

      <!-- Mobile Off-Canvas Drawer Backdrop -->
      <div class="cl-drawer-backdrop" id="cl-drawer-backdrop" aria-hidden="true"></div>
    </div>
  `;
}

// =============================================================================
// 2. Client-Side Interactive Lifecycle Handler
// =============================================================================

/**
 * Initialize dynamic interactivity, authentication checks, progress synchronization,
 * and seamless lesson switching for the Course Learning page.
 *
 * @param {string} slug - Course slug
 * @param {string|null} [initialLessonId=null] - Initial lesson parameter
 * @returns {Function} Cleanup handler invoked when navigating away
 */
export function initCourseLearnPage(slug, initialLessonId = null) {
  const pageContainer = document.getElementById('cl-page');
  if (!pageContainer) return () => {};

  const rawCourse = getCourseBySlug(slug);
  if (!rawCourse) return () => {};

  const course = normalizeCourseData(rawCourse);
  const allLessons = getPublishedLessonsSequence(course);
  if (allLessons.length === 0) return () => {};

  // Resolve initial selected lesson:
  // 1. Explicit initialLessonId parameter always takes highest precedence
  // 2. Otherwise default to the designated free preview lesson for non-enrolled or guest visitors
  // 3. Enrolled students can resume their saved lesson from localStorage
  let activeLesson = null;
  if (initialLessonId) {
    activeLesson = _findLessonInSequence(allLessons, initialLessonId);
  }
  if (!activeLesson) {
    const freePreviewLesson = allLessons.find(l => l.isFree) || allLessons[0];
    try {
      const savedLessonId = localStorage.getItem(`risepaisa_last_lesson_${course.id}`);
      if (savedLessonId) {
        const candidate = _findLessonInSequence(allLessons, savedLessonId);
        // Only restore candidate if it's free preview; protected lessons will be restored if enrollment checks succeed
        if (candidate && candidate.isFree) {
          activeLesson = candidate;
        }
      }
    } catch {
      // LocalStorage access exception protection
    }
    if (!activeLesson) {
      activeLesson = freePreviewLesson;
    }
  }

  // Reactive State
  let currentLessonId = activeLesson.id;
  let currentUser = getCurrentUser ? getCurrentUser() : null;
  let isEnrolled = false;
  let enrollmentStatus = 'not_enrolled';
  let isCheckingEnrollment = false;
  let authUnsubscribe = null;

  const waEnrollUrl = _buildWhatsAppEnrollUrl(course);
  let activePlayerLessonId = null;
  let activePlayerAccess = null;
  let activePlayerEmbedUrl = null;

  // ── UI Update: Video Player Frame ──────────────────────────────────────────
  function updatePlayer(lesson, hasAccess) {
    const wrapper = document.getElementById('cl-player-wrapper');
    if (!wrapper) return;

    if (hasAccess) {
      const embedUrl = toSafeYouTubeEmbedUrl(lesson.youtubeUrl);
      if (embedUrl) {
        const existingPlayer = wrapper.querySelector('[data-rp-player]');
        if (existingPlayer && activePlayerLessonId === lesson.id && activePlayerAccess === true && activePlayerEmbedUrl === embedUrl) {
          return;
        }
        activePlayerLessonId = lesson.id;
        activePlayerAccess = true;
        activePlayerEmbedUrl = embedUrl;
        destroyBrandedVideoPlayer(existingPlayer);
        wrapper.innerHTML = createBrandedVideoPlayer({
          embedUrl,
          title: lesson.title || 'Course Lesson',
          iframeId: 'cl-video-iframe',
          containerId: 'cl-iframe-container'
        });
        initBrandedVideoPlayer(wrapper.querySelector('[data-rp-player]'));
      } else {
        activePlayerLessonId = lesson.id;
        activePlayerAccess = true;
        activePlayerEmbedUrl = null;
        destroyBrandedVideoPlayer(wrapper.querySelector('[data-rp-player]'));
        // Video URL missing or invalid
        wrapper.innerHTML = `
          <div class="cl-empty-player-frame">
            <div class="cl-empty-player-icon">${CL_ICONS.play}</div>
            <h3 class="cl-empty-player-title">Video In Preparation</h3>
            <p class="cl-empty-player-desc">
              The video for <strong>${sanitizeText(lesson.title)}</strong> will be available shortly.
            </p>
          </div>
        `;
      }
    } else {
      activePlayerLessonId = lesson.id;
      activePlayerAccess = false;
      activePlayerEmbedUrl = null;
      destroyBrandedVideoPlayer(wrapper.querySelector('[data-rp-player]'));
      // Locked Screen - strictly NO iframe rendered
      let lockBadgeTag = 'Enrollment Required';
      let lockHeadline = 'This Lesson Requires Course Enrollment';
      let lockSubtext = `Enroll in <strong>${sanitizeText(course.title)}</strong> to unlock all 20+ hours of video lessons, practical NEPSE company analysis, and downloadable templates.`;

      if (enrollmentStatus === 'suspended') {
        lockBadgeTag = 'Account Suspended';
        lockHeadline = 'RisePaisa Account Suspended';
        lockSubtext = 'Your RisePaisa account is currently suspended. Please contact support for assistance.';
      } else if (enrollmentStatus === 'onboarding_required') {
        lockBadgeTag = 'Onboarding Required';
        lockHeadline = 'Complete Your Student Profile';
        lockSubtext = 'Before accessing course lessons, please provide the basic information required for your RisePaisa student account.';
      } else if (enrollmentStatus === 'revoked') {
        lockBadgeTag = 'Access Revoked';
        lockHeadline = 'Course Access Revoked';
        lockSubtext = `Your administrative access to <strong>${sanitizeText(course.title)}</strong> has been revoked. If you believe this is in error, please contact RisePaisa support.`;
      } else if (enrollmentStatus === 'expired') {
        lockBadgeTag = 'Enrollment Expired';
        lockHeadline = 'Your Enrollment Has Expired';
        lockSubtext = `Your access period for <strong>${sanitizeText(course.title)}</strong> has ended. Please renew your enrollment to continue watching full course lessons.`;
      }

      wrapper.innerHTML = `
        <div class="cl-locked-screen" id="cl-locked-screen">
          <div class="cl-locked-content">
            <div class="cl-locked-badge-wrap">
              <span class="cl-locked-icon-badge">${CL_ICONS.lock}</span>
              <span class="cl-locked-tag">${lockBadgeTag}</span>
            </div>
            <h2 class="cl-locked-headline">${lockHeadline}</h2>
            <p class="cl-locked-subtext">
              ${lockSubtext}
            </p>
            <div class="cl-locked-cta-group">
              ${!currentUser ? `
                <button type="button" class="btn btn-primary" id="cl-locked-signin-trigger">
                  Sign In to Your Account
                </button>
              ` : ''}
              <a href="${waEnrollUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="cl-locked-whatsapp-cta">
                ${CL_ICONS.whatsapp} ${enrollmentStatus === 'expired' ? 'Renew Access via WhatsApp' : 'Enroll via WhatsApp'} (${course.currency || 'NPR'} ${(course.price || 2999).toLocaleString()})
              </a>
              ${allLessons[0] && allLessons[0].id !== lesson.id ? `
                <button type="button" class="btn btn-ghost" id="cl-watch-preview-btn" data-target-id="${allLessons[0].id}">
                  Watch Free Lesson 1
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;

      document.getElementById('cl-locked-signin-trigger')?.addEventListener('click', () => {
        openAuthModal('login');
      });

      document.getElementById('cl-watch-preview-btn')?.addEventListener('click', () => {
        selectLesson(allLessons[0].id);
      });
    }
  }

  // ── UI Update: Lesson Meta, Resources & Controls ───────────────────────────
  function updateLessonMeta(lesson, hasAccess) {
    // Topic & Breadcrumbs
    const topicIndicator = document.getElementById('cl-topic-indicator');
    if (topicIndicator) topicIndicator.textContent = lesson.topicTitle || 'Module';

    const breadcrumbCurrent = document.getElementById('cl-breadcrumb-current');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = lesson.title || 'Lesson';

    const lessonTitleEl = document.getElementById('cl-lesson-title');
    if (lessonTitleEl) lessonTitleEl.textContent = lesson.title || '';

    // Access badge
    const accessBadge = document.getElementById('cl-access-badge');
    if (accessBadge) {
      if (lesson.isFree) {
        accessBadge.className = 'cl-access-badge cl-badge-free';
        accessBadge.innerHTML = `${CL_ICONS.sparkles} Free Preview`;
      } else if (hasAccess) {
        accessBadge.className = 'cl-access-badge cl-badge-enrolled';
        accessBadge.innerHTML = `${CL_ICONS.unlock} Enrolled`;
      } else {
        accessBadge.className = 'cl-access-badge cl-badge-locked';
        accessBadge.innerHTML = `${CL_ICONS.lock} Enrolled Only`;
      }
    }

    // Description Box
    const descBox = document.getElementById('cl-lesson-desc-box');
    const descEl = document.getElementById('cl-lesson-desc');
    if (descBox && descEl) {
      if (lesson.shortDescription && lesson.shortDescription.trim()) {
        descBox.classList.remove('cl-hidden');
        descEl.textContent = lesson.shortDescription;
      } else {
        descBox.classList.add('cl-hidden');
        descEl.textContent = '';
      }
    }

    // Downloadable Resources (Render only if accessible and resources exist)
    const resSection = document.getElementById('cl-resources-section');
    const resList = document.getElementById('cl-resources-list');

    if (resSection && resList) {
      if (hasAccess && Array.isArray(lesson.resources) && lesson.resources.length > 0) {
        const validResources = lesson.resources.filter(r => validateResourceUrl(r.url).valid);
        if (validResources.length > 0) {
          resSection.classList.remove('cl-hidden');
          resList.innerHTML = validResources.map(res => {
            const icon = _getResourceIcon(res.fileType);
            const safeUrl = sanitizeText(res.url);
            return `
              <div class="cl-resource-item">
                <div class="cl-res-icon-wrap">${icon}</div>
                <div class="cl-res-info">
                  <span class="cl-res-title">${sanitizeText(res.title)}</span>
                  <span class="cl-res-type-pill">${sanitizeText(res.fileType || 'Document')}</span>
                </div>
                <a href="${safeUrl}" download target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-ghost cl-res-download-btn">
                  ${CL_ICONS.download} Open Resource
                </a>
              </div>
            `;
          }).join('');
        } else {
          resSection.classList.add('cl-hidden');
          resList.innerHTML = '';
        }
      } else {
        resSection.classList.add('cl-hidden');
        resList.innerHTML = '';
      }
    }

    // Prev / Next Buttons
    const activeIndex = allLessons.findIndex(l => l.id === lesson.id);
    const prevBtn = document.getElementById('cl-prev-btn');
    const nextBtn = document.getElementById('cl-next-btn');
    const prevTitle = document.getElementById('cl-prev-title');
    const nextTitle = document.getElementById('cl-next-title');

    if (prevBtn) {
      if (activeIndex > 0) {
        const pLesson = allLessons[activeIndex - 1];
        prevBtn.removeAttribute('disabled');
        prevBtn.removeAttribute('aria-disabled');
        prevBtn.setAttribute('data-target-id', pLesson.id);
        if (prevTitle) prevTitle.textContent = pLesson.title;
      } else {
        prevBtn.setAttribute('disabled', 'true');
        prevBtn.setAttribute('aria-disabled', 'true');
        prevBtn.removeAttribute('data-target-id');
        if (prevTitle) prevTitle.textContent = 'Beginning of Course';
      }
    }

    if (nextBtn) {
      if (activeIndex < allLessons.length - 1) {
        const nLesson = allLessons[activeIndex + 1];
        nextBtn.removeAttribute('disabled');
        nextBtn.removeAttribute('aria-disabled');
        nextBtn.setAttribute('data-target-id', nLesson.id);
        if (nextTitle) nextTitle.textContent = nLesson.title;
      } else {
        nextBtn.setAttribute('disabled', 'true');
        nextBtn.setAttribute('aria-disabled', 'true');
        nextBtn.removeAttribute('data-target-id');
        if (nextTitle) nextTitle.textContent = 'End of Course';
      }
    }

  }

  // ── UI Update: Sidebar Active Highlight & Module Expansion ─────────────────
  function updateSidebar(selectedId) {
    // 1. Update active item highlight
    const allItems = document.querySelectorAll('.cl-lesson-item');
    allItems.forEach(item => {
      const itemId = item.getAttribute('data-lesson-id');
      const isCur = itemId === selectedId;
      item.classList.toggle('active', isCur);
      if (isCur) {
        item.setAttribute('aria-current', 'true');
      } else {
        item.removeAttribute('aria-current');
      }
    });

    // 2. Expand active topic group
    const activeItem = document.getElementById(`cl-sidebar-item-${selectedId}`);
    if (activeItem) {
      const parentGroup = activeItem.closest('.cl-module-group');
      if (parentGroup) {
        parentGroup.classList.add('active');
        const toggle = parentGroup.querySelector('.cl-module-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
      }
      // Gentle scroll inside sidebar if needed
      if (typeof window !== 'undefined' && window.innerWidth > 767) {
        activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }

    // 3. Update lock icon visibility based on enrollment
    allLessons.forEach(l => {
      const lockIcon = document.getElementById(`cl-lock-icon-${l.id}`);
      if (lockIcon) {
        if (l.isFree || isEnrolled) {
          lockIcon.style.display = 'none';
        } else {
          lockIcon.style.display = '';
        }
      }
    });
  }

  // ── Central Lesson Selector ────────────────────────────────────────────────
  function selectLesson(targetId, updateBrowserUrl = true) {
    const lesson = _findLessonInSequence(allLessons, targetId);
    if (!lesson) return;

    currentLessonId = lesson.id;
    const hasAccess = Boolean(lesson.isFree || isEnrolled);

    updatePlayer(lesson, hasAccess);
    updateLessonMeta(lesson, hasAccess);
    updateSidebar(lesson.id);

    // Save to localStorage
    try {
      localStorage.setItem(`risepaisa_last_lesson_${course.id}`, lesson.id);
    } catch {
      // ignore
    }

    // Close mobile drawer if it was open
    closeMobileDrawer();

    // On mobile devices, ensure the video player is in view
    if (typeof window !== 'undefined' && window.innerWidth <= 960) {
      const playerEl = document.getElementById('cl-player-wrapper');
      if (playerEl) {
        playerEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    // Update browser URL query/path without full page reload
    if (updateBrowserUrl && typeof window !== 'undefined' && window.history) {
      const targetUrl = ROUTES.COURSE_LEARN
        ? ROUTES.COURSE_LEARN(course.slug, lesson.id)
        : `/courses/${course.slug}/learn?lesson=${encodeURIComponent(lesson.id)}`;
      window.history.replaceState({}, '', targetUrl);
    }

    // If navigating to a protected lesson, asynchronously verify enrollment freshness
    if (!lesson.isFree && currentUser && currentUser.uid) {
      checkUserEnrollment(currentUser.uid, course.id).then((fresh) => {
        const freshEnrolled = Boolean(fresh.enrolled);
        const freshStatus = fresh.status || (freshEnrolled ? 'active' : 'not_enrolled');
        if (freshEnrolled !== isEnrolled || freshStatus !== enrollmentStatus) {
          isEnrolled = freshEnrolled;
          enrollmentStatus = freshStatus;
          updatePlayer(lesson, freshEnrolled);
          updateLessonMeta(lesson, freshEnrolled);
          updateSidebar(lesson.id);
        }
      }).catch(() => {});
    }
  }

  // ── Enrollment & Auth Verification ─────────────────────────────────────────
  async function syncEnrollmentAndProgress(user) {
    currentUser = user;

    if (!user) {
      isEnrolled = false;
      enrollmentStatus = 'not_enrolled';
      // Re-evaluate current lesson
      selectLesson(currentLessonId, false);
      return;
    }

    if (isCheckingEnrollment) return;
    isCheckingEnrollment = true;

    try {
      // Check enrollment (cached in courses.js)
      const enrollResult = await checkUserEnrollment(user.uid, course.id);
      isEnrolled = Boolean(enrollResult.enrolled);
      enrollmentStatus = enrollResult.status || (isEnrolled ? 'active' : 'not_enrolled');

      // If user is enrolled, allow resuming last visited lesson from localStorage
      if (isEnrolled && !initialLessonId) {
        try {
          const savedId = localStorage.getItem(`risepaisa_last_lesson_${course.id}`);
          if (savedId && _findLessonInSequence(allLessons, savedId)) {
            currentLessonId = savedId;
          }
        } catch {}
      } else if (!isEnrolled && !initialLessonId) {
        // If not enrolled and no explicit lesson in URL, ensure visitor sees the free preview lesson
        const cur = _findLessonInSequence(allLessons, currentLessonId);
        if (!cur || !cur.isFree) {
          const freeLesson = allLessons.find(l => l.isFree) || allLessons[0];
          currentLessonId = freeLesson.id;
        }
      }

      // Update current view with fresh credentials
      selectLesson(currentLessonId, false);
    } catch (err) {
      console.warn('[risePaisa:Course] Error synchronizing enrollment:', err);
    } finally {
      isCheckingEnrollment = false;
    }
  }

  // ── Mobile Drawer Open / Close Functions ───────────────────────────────────
  const mobileContentsBtn = document.getElementById('cl-mobile-contents-btn');
  const mobileBottomContentsBtn = document.getElementById('cl-mobile-bottom-contents-btn');
  const drawerCloseBtn = document.getElementById('cl-drawer-close-btn');
  const drawerBackdrop = document.getElementById('cl-drawer-backdrop');

  function openMobileDrawer() {
    document.body.classList.add('cl-drawer-open');
    mobileContentsBtn?.setAttribute('aria-expanded', 'true');
    mobileBottomContentsBtn?.setAttribute('aria-expanded', 'true');
    const activeItem = document.getElementById(`cl-sidebar-item-${currentLessonId}`);
    activeItem?.scrollIntoView({ block: 'nearest' });
  }

  function closeMobileDrawer() {
    document.body.classList.remove('cl-drawer-open');
    mobileContentsBtn?.setAttribute('aria-expanded', 'false');
    mobileBottomContentsBtn?.setAttribute('aria-expanded', 'false');
  }

  const onKeydown = (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('cl-drawer-open')) {
      closeMobileDrawer();
      mobileContentsBtn?.focus();
    }
  };

  const onMobileContentsClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 767) {
      e?.preventDefault?.();
      const sidebarEl = document.getElementById('cl-sidebar-col');
      if (sidebarEl) {
        sidebarEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    openMobileDrawer();
  };

  mobileContentsBtn?.addEventListener('click', onMobileContentsClick);
  mobileBottomContentsBtn?.addEventListener('click', onMobileContentsClick);
  drawerCloseBtn?.addEventListener('click', closeMobileDrawer);
  drawerBackdrop?.addEventListener('click', closeMobileDrawer);
  window.addEventListener('keydown', onKeydown);

  // ── Event Bindings ─────────────────────────────────────────────────────────

  // 1. Sidebar Lesson Clicks
  const accordionContainer = document.getElementById('cl-modules-accordion');
  const onAccordionClick = (e) => {
    // Topic header toggle
    const toggleBtn = e.target.closest('.cl-module-toggle');
    if (toggleBtn) {
      const group = toggleBtn.closest('.cl-module-group');
      if (group) {
        const isExp = group.classList.toggle('active');
        toggleBtn.setAttribute('aria-expanded', isExp ? 'true' : 'false');
      }
      return;
    }

    // Lesson row selection
    const lessonBtn = e.target.closest('.cl-lesson-btn');
    if (lessonBtn) {
      const targetId = lessonBtn.getAttribute('data-lesson-id');
      if (targetId && targetId !== currentLessonId) {
        selectLesson(targetId, true);
      }
    }
  };
  accordionContainer?.addEventListener('click', onAccordionClick);

  // 2. Prev / Next Button Clicks
  const prevBtn = document.getElementById('cl-prev-btn');
  const nextBtn = document.getElementById('cl-next-btn');

  const onPrevClick = () => {
    const targetId = prevBtn?.getAttribute('data-target-id');
    if (targetId) selectLesson(targetId, true);
  };
  const onNextClick = () => {
    const targetId = nextBtn?.getAttribute('data-target-id');
    if (targetId) selectLesson(targetId, true);
  };

  prevBtn?.addEventListener('click', onPrevClick);
  nextBtn?.addEventListener('click', onNextClick);

  // 4. Locked Screen Sign-In Trigger (Initial static state)
  const initialSignInTrigger = document.getElementById('cl-locked-signin-trigger');
  initialSignInTrigger?.addEventListener('click', () => {
    openAuthModal('login');
  });

  const initialWatchPreviewBtn = document.getElementById('cl-watch-preview-btn');
  initialWatchPreviewBtn?.addEventListener('click', () => {
    if (allLessons[0]) selectLesson(allLessons[0].id, true);
  });

  // 5. Auth State Subscription
  if (typeof subscribeToAuth === 'function') {
    authUnsubscribe = subscribeToAuth((user) => {
      syncEnrollmentAndProgress(user);
    });
  }

  // Run initial selection with initial parameters
  selectLesson(currentLessonId, false);

  // Synchronize authoritative course data from Firestore / local cache
  // Ensures admin updates to video URLs, lesson details, or resources
  // update the active player and sidebar without needing a build/deploy.
  fetchCourseData(slug).then((liveCourse) => {
    if (!liveCourse) return;
    const updatedLessons = getPublishedLessonsSequence(liveCourse);
    if (!updatedLessons || updatedLessons.length === 0) return;

    // Update course metadata in DOM
    const titleEl = document.querySelector('.cl-course-title');
    if (titleEl && liveCourse.title) titleEl.textContent = liveCourse.title;

    const kickerEl = document.querySelector('.cl-header-meta .cl-kicker-pill');
    if (kickerEl) {
      kickerEl.innerHTML = `<span class="cl-kicker-pulse"></span> Learning Mode · ${updatedLessons.length} Lessons`;
    }

    const subEl = document.querySelector('.cl-sidebar-subtitle');
    if (subEl) {
      subEl.textContent = `${liveCourse.topics?.length || 0} Modules · ${updatedLessons.length} Lessons`;
    }

    const bcCourseLink = document.querySelector('.cl-top-bar-nav .cl-breadcrumb a[href*="/courses/"]');
    if (bcCourseLink && liveCourse.title) {
      bcCourseLink.textContent = liveCourse.title;
      bcCourseLink.href = ROUTES.COURSE_DETAIL(liveCourse.slug);
    }
    const backLink = document.querySelector('.cl-back-course-link');
    if (backLink) {
      backLink.href = ROUTES.COURSE_DETAIL(liveCourse.slug);
    }

    // Refresh sidebar accordion with live topics/modules and lessons
    const accordionEl = document.getElementById('cl-modules-accordion');
    if (accordionEl && Array.isArray(liveCourse.topics)) {
      accordionEl.innerHTML = renderModulesAccordion(liveCourse.topics, currentLessonId, isEnrolled);
    }

    allLessons.length = 0;
    allLessons.push(...updatedLessons);

    const updatedActive = _findLessonInSequence(allLessons, currentLessonId) || allLessons[0];
    if (updatedActive) {
      activeLesson = updatedActive;
      selectLesson(activeLesson.id, false);
    }
  }).catch((err) => {
    console.warn('[risePaisa:CourseLearn] Note on live course synchronization:', err);
  });

  // ── Return Cleanup Handler ─────────────────────────────────────────────────
  return () => {
    if (typeof authUnsubscribe === 'function') {
      try {
        authUnsubscribe();
      } catch {
        // ignore
      }
    }
    accordionContainer?.removeEventListener('click', onAccordionClick);
    prevBtn?.removeEventListener('click', onPrevClick);
    nextBtn?.removeEventListener('click', onNextClick);
    mobileContentsBtn?.removeEventListener('click', onMobileContentsClick);
    mobileBottomContentsBtn?.removeEventListener('click', onMobileContentsClick);
    drawerCloseBtn?.removeEventListener('click', closeMobileDrawer);
    drawerBackdrop?.removeEventListener('click', closeMobileDrawer);
    window.removeEventListener('keydown', onKeydown);
    document.body.classList.remove('cl-drawer-open');
    destroyBrandedVideoPlayer(document.getElementById('cl-player-wrapper')?.querySelector('[data-rp-player]'));
  };
}

export default {
  renderCourseLearnPage,
  initCourseLearnPage,
  getPublishedLessonsSequence,
  renderModulesAccordion
};

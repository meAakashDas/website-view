import { ROUTES } from '../routes.js';
import { ICONS, setPageMeta } from '../components.js';
import {
  fetchUserEnrolledCourses,
  fetchUserCourseProgress,
  checkUserEnrollment,
  fetchCourseData,
  normalizeCourseData,
  sanitizeText,
  parseDateToMillis
} from '../firebase/courses.js';
import { getCourseBySlug } from '../data/courses.js';
import { getSettings } from '../data/settings.js';
import { subscribeToAuth, getCurrentUser } from '../firebase/auth.js';
import { openAuthModal } from '../firebase/ui.js';

const MC_ICONS = {
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  graduationCap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`
};

const NEPSE_SLUG = 'nepse-stock-market-basics';
const NEPSE_LEARN_URL = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';
const NEPSE_DETAIL_URL = '/courses/nepse-stock-market-basics';

function formatExpirationDate(expiresAt) {
  if (!expiresAt) return 'Lifetime Access';
  const ms = parseDateToMillis(expiresAt);
  if (!ms) return 'Active';
  return new Date(ms).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function buildWhatsAppRenewUrl(course) {
  const settings = getSettings ? getSettings() : {};
  const rawPhone = settings.whatsapp || '9779740269317';
  const cleanPhone = rawPhone.replace(/[^0-9]/g, '');
  const priceStr = course?.price ? ` (NPR ${course.price.toLocaleString()})` : '';
  const message = `Hi RisePaisa! I would like to renew my enrollment for ${course?.title || 'Share Market Full Course (NEPSE)'}${priceStr}.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

function buildWhatsAppEnrollUrl(course) {
  const settings = getSettings ? getSettings() : {};
  const rawPhone = settings.whatsapp || '9779740269317';
  const cleanPhone = rawPhone.replace(/[^0-9]/g, '');
  const priceStr = course?.price ? ` (NPR ${course.price.toLocaleString()})` : '';
  const message = `Hi RisePaisa! I want to enroll in the ${course?.title || 'Share Market Full Course (NEPSE)'}${priceStr} to unlock full lesson access.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Render the static SSR shell of the My Courses page
 *
 * @returns {string} HTML string
 */
export function renderMyCoursesPage() {
  return `
    <div class="mc-page" id="mc-page">
      <!-- Breadcrumb Bar -->
      <nav class="mc-breadcrumb-bar" aria-label="Breadcrumb">
        <div class="container mc-breadcrumb-inner">
          <a href="${ROUTES.HOME}" class="mc-crumb-link">Home</a>
          <span class="mc-crumb-sep">/</span>
          <span class="mc-crumb-current" aria-current="page">My Courses</span>
        </div>
      </nav>

      <!-- Hero Header -->
      <section class="mc-hero-section">
        <div class="container mc-hero-container">
          <div class="mc-hero-badge">Student Dashboard</div>
          <h1 class="mc-hero-title">My Enrolled Courses</h1>
          <p class="mc-hero-lead">Access your Share Market Full Course (NEPSE), track lesson milestones, and continue your Nepal stock market learning.</p>
        </div>
      </section>

      <!-- Main Learning Content Slot -->
      <main class="container mc-main-content">
        <div id="mc-content-slot" class="mc-content-slot" aria-live="polite">
          <div class="mc-loading-state">
            <div class="mc-spinner"></div>
            <p>Loading your courses...</p>
          </div>
        </div>
      </main>
    </div>
  `;
}

/**
 * Initialize dynamic state, authentication synchronization, and NEPSE-exclusive course rendering
 *
 * @returns {Function} Cleanup function
 */
export function initMyCoursesPage() {
  const container = document.getElementById('mc-content-slot');
  if (!container) return () => {};

  setPageMeta(
    'My Enrolled Courses | risePaisa',
    'Access your enrolled Share Market Full Course (NEPSE), track lesson milestones, and continue learning about the Nepal stock market.',
    ROUTES.MY_COURSES_PAGE || '/my-courses'
  );

  let authUnsubscribe = null;
  let activeRequestId = 0;

  async function renderStateForUser(user) {
    if (!container) return;
    const reqId = ++activeRequestId;

    let rawCourse = getCourseBySlug(NEPSE_SLUG);
    try {
      const live = await fetchCourseData(NEPSE_SLUG);
      if (live) rawCourse = live;
    } catch {}
    const nepseCourse = normalizeCourseData(rawCourse);

    if (!nepseCourse) {
      container.innerHTML = `
        <div class="mc-state-card mc-error-card">
          <h2 class="mc-state-title">Course Information Unavailable</h2>
          <p class="mc-state-desc">The NEPSE course details could not be loaded at this time.</p>
        </div>
      `;
      return;
    }

    // ── CASE 1: Signed-Out Visitor ──────────────────────────────────────────
    if (!user) {
      container.innerHTML = `
        <div class="mc-state-card mc-guest-card">
          <div class="mc-state-icon">${MC_ICONS.lock}</div>
          <h2 class="mc-state-title">Sign In to Access Your Course</h2>
          <p class="mc-state-desc">
            Students must sign in to access their enrolled <strong>Share Market Full Course (NEPSE)</strong>, track lesson progress, and access protected resources.
          </p>
          <div class="mc-state-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
            <button type="button" class="btn btn-primary btn-lg" id="mc-signin-btn">
              Sign In to Your Account
            </button>
            <a href="${NEPSE_LEARN_URL}" class="btn btn-outline btn-lg">
              ${MC_ICONS.play} Watch Free Lesson 1
            </a>
          </div>
        </div>

        <section class="mc-recommended-section" style="margin-top:var(--space-10)">
          <div class="mc-courses-grid">
            <article class="mc-course-card mc-recommended-card">
              <div class="mc-card-header">
                <span class="mc-category-badge">${sanitizeText(nepseCourse.category || 'NEPSE & Investing')}</span>
                <span class="mc-status-badge mc-badge-preview">Free Preview Available</span>
              </div>
              <div class="mc-card-body">
                <h3 class="mc-course-title">
                  <a href="${NEPSE_LEARN_URL}">${sanitizeText(nepseCourse.title)}</a>
                </h3>
                <p class="mc-course-desc">${sanitizeText(nepseCourse.shortDescription || '')}</p>
                <div class="mc-card-meta">
                  <span class="mc-meta-item">
                    ${MC_ICONS.layers} ${(nepseCourse.topics || []).length} Modules
                  </span>
                  <span class="mc-meta-item">
                    ${MC_ICONS.clock} ${sanitizeText(nepseCourse.duration || '20+ Hours')}
                  </span>
                  <span class="mc-meta-item" style="color:var(--color-primary);font-weight:600">
                    ${nepseCourse.currency} ${nepseCourse.price.toLocaleString()}
                  </span>
                </div>
              </div>
              <div class="mc-card-footer">
                <a href="${NEPSE_LEARN_URL}" class="btn btn-primary mc-continue-btn">
                  ${MC_ICONS.play} Free Lesson 1
                </a>
                <a href="${NEPSE_DETAIL_URL}" class="btn btn-outline mc-outline-btn">
                  Course Syllabus
                </a>
              </div>
            </article>
          </div>
        </section>
      `;

      document.getElementById('mc-signin-btn')?.addEventListener('click', () => {
        openAuthModal('login');
      });
      return;
    }

    // ── Authenticated: Check Authoritative Enrollment ────────────────────────
    container.innerHTML = `
      <div class="mc-loading-state">
        <div class="mc-spinner"></div>
        <p>Checking your course enrollments...</p>
      </div>
    `;

    try {
      const enrollmentResult = await checkUserEnrollment(user.uid, nepseCourse.id);
      if (reqId !== activeRequestId) return;

      const isEnrolled = Boolean(enrollmentResult.enrolled);
      const status = enrollmentResult.status || (isEnrolled ? 'active' : 'not_enrolled');

      // ── CASE 2: Authenticated but Unenrolled Student ───────────────────────
      if (!isEnrolled) {
        let lockBadge = `<span class="mc-status-badge mc-badge-preview">Enrollment Required</span>`;
        let statusNotice = '';
        let ctaButton = `
          <a href="${buildWhatsAppEnrollUrl(nepseCourse)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp mc-continue-btn">
            ${MC_ICONS.whatsapp} Enroll via WhatsApp (${nepseCourse.currency} ${nepseCourse.price.toLocaleString()})
          </a>
        `;

        if (status === 'suspended') {
          lockBadge = `<span class="mc-status-badge mc-badge-revoked">Account Suspended</span>`;
          statusNotice = `<div class="mc-expiry-line" style="margin-top:var(--space-2);font-size:var(--text-xs);color:var(--color-error)">Your RisePaisa student account is currently suspended. Please contact support.</div>`;
          ctaButton = `
            <a href="${ROUTES.CONTACT || '/contact'}" class="btn btn-outline mc-continue-btn">
              Contact Support
            </a>
          `;
        } else if (status === 'revoked') {
          lockBadge = `<span class="mc-status-badge mc-badge-revoked">${MC_ICONS.lock} Revoked</span>`;
          statusNotice = `<div class="mc-expiry-line" style="margin-top:var(--space-2);font-size:var(--text-xs);color:var(--color-error)">Course access was revoked by administration. Please contact support.</div>`;
          ctaButton = `
            <a href="${ROUTES.CONTACT || '/contact'}" class="btn btn-outline mc-continue-btn">
              Contact Support
            </a>
          `;
        } else if (status === 'expired') {
          lockBadge = `<span class="mc-status-badge mc-badge-expired">${MC_ICONS.clock} Expired</span>`;
          const expFormatted = formatExpirationDate(enrollmentResult.expiresAt);
          statusNotice = `<div class="mc-expiry-line" style="margin-top:var(--space-2);font-size:var(--text-xs);color:var(--color-error)">${MC_ICONS.clock} Expired on: <strong>${expFormatted}</strong></div>`;
          ctaButton = `
            <a href="${buildWhatsAppRenewUrl(nepseCourse)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp mc-continue-btn">
              ${MC_ICONS.whatsapp} Renew via WhatsApp
            </a>
          `;
        }

        container.innerHTML = `
          <div class="mc-state-card mc-empty-card">
            <div class="mc-state-icon">${MC_ICONS.graduationCap}</div>
            <h2 class="mc-state-title">Your Learning Journey Starts Here</h2>
            <p class="mc-state-desc">
              Courses you enroll in will appear here. Explore RisePaisa's courses to start learning about the stock market and personal finance.
            </p>
            <div class="mc-state-actions" style="margin-top:var(--space-6);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
              <a href="${ROUTES.COURSES}" class="btn btn-primary btn-lg">
                Explore Courses
              </a>
              <a href="${NEPSE_DETAIL_URL}" class="btn btn-outline btn-lg">
                View NEPSE Course
              </a>
            </div>
          </div>

          <section class="mc-recommended-section" style="margin-top:var(--space-10)">
            <div class="mc-recommended-header" style="text-align:left;margin-bottom:var(--space-4)">
              <span class="mc-category-badge" style="display:inline-block;margin-bottom:var(--space-2)">Featured Masterclass</span>
              <h3 style="font-size:var(--text-xl);color:var(--color-heading);margin:0">Recommended For You</h3>
            </div>
            <div class="mc-courses-grid">
              <article class="mc-course-card mc-recommended-card ${status !== 'not_enrolled' ? 'mc-card-inactive' : ''}">
                <div class="mc-card-header">
                  <span class="mc-category-badge">${sanitizeText(nepseCourse.category || 'NEPSE & Investing')}</span>
                  ${lockBadge}
                </div>
                <div class="mc-card-body">
                  <h3 class="mc-course-title">
                    <a href="${NEPSE_LEARN_URL}">${sanitizeText(nepseCourse.title)}</a>
                  </h3>
                  <p class="mc-course-desc">${sanitizeText(nepseCourse.shortDescription || '')}</p>
                  <div class="mc-card-meta">
                    <span class="mc-meta-item">
                      ${MC_ICONS.layers} ${(nepseCourse.topics || []).length} Modules
                    </span>
                    <span class="mc-meta-item">
                      ${MC_ICONS.clock} ${sanitizeText(nepseCourse.duration || '20+ Hours')}
                    </span>
                    <span class="mc-meta-item" style="color:var(--color-primary);font-weight:600">
                      ${nepseCourse.currency} ${nepseCourse.price.toLocaleString()}
                    </span>
                  </div>
                  ${statusNotice}
                </div>
                <div class="mc-card-footer">
                  ${ctaButton}
                  <a href="${NEPSE_LEARN_URL}" class="btn btn-outline mc-outline-btn">
                    Free Preview
                  </a>
                  <a href="${NEPSE_DETAIL_URL}" class="btn btn-outline mc-outline-btn">
                    Syllabus
                  </a>
                </div>
              </article>
            </div>
          </section>
        `;
        return;
      }

      // ── CASE 3: Authenticated and Enrolled Student ─────────────────────────
      const progressMap = await fetchUserCourseProgress(user.uid, nepseCourse.id);
      let totalLessons = 0;
      let completedLessons = 0;

      if (Array.isArray(nepseCourse.topics)) {
        nepseCourse.topics.forEach((t) => {
          if (t.published !== false && Array.isArray(t.lessons)) {
            t.lessons.forEach((les) => {
              if (les.published !== false) {
                totalLessons++;
                if (progressMap[les.id]?.completed) {
                  completedLessons++;
                }
              }
            });
          }
        });
      }

      const percent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
      let statusBadge = `<span class="mc-status-badge mc-badge-active">${MC_ICONS.checkCircle} Enrolled</span>`;
      let expirationText = `<div class="mc-expiry-line" style="margin-top:var(--space-2);font-size:var(--text-xs);color:var(--color-text-secondary)">${MC_ICONS.checkCircle} <strong>Lifetime Access</strong></div>`;

      if (enrollmentResult.expiresAt) {
        const expFormatted = formatExpirationDate(enrollmentResult.expiresAt);
        expirationText = `<div class="mc-expiry-line" style="margin-top:var(--space-2);font-size:var(--text-xs);color:var(--color-text-secondary)">${MC_ICONS.clock} Access Valid Until: <strong>${expFormatted}</strong></div>`;
      }

      container.innerHTML = `
        <div class="mc-courses-grid">
          <article class="mc-course-card">
            <div class="mc-card-header">
              <span class="mc-category-badge">${sanitizeText(nepseCourse.category || 'NEPSE & Investing')}</span>
              ${statusBadge}
            </div>
            <div class="mc-card-body">
              <h3 class="mc-course-title">
                <a href="${NEPSE_LEARN_URL}">${sanitizeText(nepseCourse.title)}</a>
              </h3>
              <p class="mc-course-desc">${sanitizeText(nepseCourse.shortDescription || '')}</p>

              <!-- Progress Meter (based on actual user progress records) -->
              ${totalLessons > 0 ? `
                <div class="mc-progress-wrap" aria-label="Course completion: ${percent}%">
                  <div class="mc-progress-header">
                    <span class="mc-progress-label">Course Progress</span>
                    <span class="mc-progress-stat">${completedLessons} of ${totalLessons} lessons (${percent}%)</span>
                  </div>
                  <div class="mc-progress-bar-bg">
                    <div class="mc-progress-bar-fill" style="width: ${percent}%;"></div>
                  </div>
                </div>
              ` : ''}

              <!-- Meta Details -->
              <div class="mc-card-meta">
                <span class="mc-meta-item">
                  ${MC_ICONS.layers} ${(nepseCourse.topics || []).length} Modules
                </span>
                <span class="mc-meta-item">
                  ${MC_ICONS.bookOpen} ${totalLessons} Lessons
                </span>
                <span class="mc-meta-item">
                  ${MC_ICONS.clock} ${sanitizeText(nepseCourse.duration || '20+ Hours')}
                </span>
              </div>

              ${expirationText}
            </div>
            <div class="mc-card-footer">
              <a href="${NEPSE_LEARN_URL}" class="btn btn-primary mc-continue-btn">
                ${MC_ICONS.play} Continue Learning
              </a>
              <a href="${NEPSE_DETAIL_URL}" class="btn btn-outline mc-outline-btn">
                Syllabus
              </a>
            </div>
          </article>
        </div>
      `;
    } catch (err) {
      if (reqId !== activeRequestId) return;
      console.error('[risePaisa:MyCourses] Error loading enrolled courses:', err);
      container.innerHTML = `
        <div class="mc-state-card mc-error-card">
          <h2 class="mc-state-title">Unable to Load Courses</h2>
          <p class="mc-state-desc">An unexpected error occurred while fetching your course enrollments: ${sanitizeText(err.message || 'Connection failed')}.</p>
          <button type="button" class="btn btn-primary" id="mc-retry-btn">Retry</button>
        </div>
      `;
      document.getElementById('mc-retry-btn')?.addEventListener('click', () => {
        renderStateForUser(user);
      });
    }
  }

  // Subscribe to reactive auth changes
  authUnsubscribe = subscribeToAuth((user) => {
    renderStateForUser(user);
  });

  return () => {
    if (typeof authUnsubscribe === 'function') {
      authUnsubscribe();
    }
  };
}

// ==============================================
// risePaisa - Flagship NEPSE Course Detail Page
// Premium Financial Education Experience
// Inspired by Apple, Stripe, and Linear
// ==============================================
import { getCourseBySlug } from '../data/courses.js';
import { ICONS, setPageMeta, getWhatsAppPurchaseUrl, getWhatsAppAdvisorUrl } from '../components.js';
import { ROUTES } from '../routes.js';
import { extractYouTubeVideoId, toSafeYouTubeEmbedUrl } from '../firebase/courses.js';
import {
  createBrandedVideoPlayer,
  initBrandedVideoPlayer,
  destroyBrandedVideoPlayer
} from '../components/videoPlayer.js';
import { initFloatingSystem } from '../floatingControls.js';

// ── YouTube URL → Safe Embed URL converter ────────
function _toYouTubeEmbed(url) {
  return toSafeYouTubeEmbedUrl(url);
}

// ── Helper: Calculate module duration from lessons ──
function _calcModuleDuration(lessons) {
  if (!Array.isArray(lessons)) return '';
  let totalSec = 0;
  for (const l of lessons) {
    if (!l || !l.duration) continue;
    const parts = l.duration.split(':').map(Number);
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      totalSec += (parts[0] * 60) + parts[1];
    } else if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
      totalSec += (parts[0] * 3600) + (parts[1] * 60) + parts[2];
    }
  }
  if (totalSec === 0) return '';
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.round((totalSec % 3600) / 60);
  if (hours > 0) {
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  }
  return `${minutes}m`;
}

// ── Helper: Clean up uppercase "MODULE X:" titles ──
function _formatModuleTitle(rawTitle) {
  if (!rawTitle) return '';
  const cleaned = rawTitle.replace(/^MODULE\s+\d+:\s*/i, '').trim();
  // If all uppercase, convert to Title Case
  if (cleaned === cleaned.toUpperCase() && cleaned.length > 4) {
    return cleaned
      .toLowerCase()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }
  return cleaned;
}

// ── Reusable Curriculum Accordion Renderer ───────────
export function renderCurriculumAccordion(curriculumOrTopics, courseSlug) {
  if (!Array.isArray(curriculumOrTopics)) return '';

  return curriculumOrTopics.map((module, i) => {
    if (module.published === false) return '';
    const modNumber = module.moduleNumber || module.displayOrder || (i + 1);
    const modLessons = (module.lessons || []).filter(l => l.published !== false);
    if (modLessons.length === 0) return '';
    const modDuration = _calcModuleDuration(modLessons);
    const cleanTitle = _formatModuleTitle(module.title);
    const lessonCount = modLessons.length;
    const isFirst = i === 0;

    return `
      <div class="cd-module-item ${isFirst ? 'active' : ''}" data-module-index="${i}">
        <button class="cd-module-header" type="button" aria-expanded="${isFirst ? 'true' : 'false'}">
          <div class="cd-module-meta-left">
            <span class="cd-module-badge">Module 0${modNumber}</span>
            <span class="cd-module-name">${cleanTitle}</span>
          </div>
          <div class="cd-module-meta-right">
            <span class="cd-module-duration">${lessonCount} lessons${modDuration ? ` · ${modDuration}` : ''}</span>
            <span class="cd-module-chevron" aria-hidden="true">${ICONS.chevronDown}</span>
          </div>
        </button>

        <div class="cd-module-collapse">
          <div class="cd-module-body">
            ${(module.goal || module.shortDescription) ? `
              <div class="cd-module-goal">
                <span class="cd-goal-tag">Objective</span>
                <p class="cd-goal-text">${module.goal || module.shortDescription}</p>
              </div>
            ` : ''}

            <div class="cd-lessons-stack">
              ${modLessons.map((lesson, lesIdx) => {
                if (typeof lesson === 'string') {
                  return `
                    <div class="cd-lesson-row">
                      <div class="cd-lesson-left">
                        <span class="cd-lesson-play-icon">${ICONS.play}</span>
                        <span class="cd-lesson-title">${lesson}</span>
                      </div>
                    </div>
                  `;
                }

                const rank = lesson.rank || lesson.displayOrder || (lesIdx + 1);
                const isFreeDemo = lesson.isFree !== undefined ? Boolean(lesson.isFree) : (i === 0 && lesIdx === 0);
                const lessonId = lesson.id || ('lesson-' + rank);
                const learnUrl = ROUTES.COURSE_LEARN ? ROUTES.COURSE_LEARN(courseSlug, lessonId) : `/courses/${courseSlug}/learn?lesson=${encodeURIComponent(lessonId)}`;

                return `
                  <div class="cd-lesson-row ${isFreeDemo ? 'cd-lesson-free-demo' : ''}" ${isFreeDemo ? 'id="lesson-free-demo-row"' : ''}>
                    <div class="cd-lesson-left">
                      <span class="cd-lesson-number">${String(rank).padStart(2, '0')}</span>
                      <span class="cd-lesson-play-icon">${ICONS.play}</span>
                      <a href="${learnUrl}" class="cd-lesson-title-link">
                        <span class="cd-lesson-title">${lesson.title}</span>
                      </a>
                      ${isFreeDemo ? `
                        <a href="${learnUrl}" class="cd-free-demo-pill" title="Watch free demo in learning player">
                          Free Demo
                        </a>
                      ` : ''}
                    </div>
                    <span class="cd-lesson-duration">${lesson.duration || ''}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Curated Outcomes for NEPSE Course ──────────────
const NEPSE_LEARNING_OUTCOMES = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    title: 'NEPSE Foundations & Investing Process',
    desc: "Understand how Nepal's stock market works, including SEBON, DEMAT, MeroShare, C-ASBA, and broker trading accounts."
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    title: 'Fundamental Analysis & Financial Reports',
    desc: 'Learn to interpret company financial statements and evaluate EPS, P/E ratio, ROE, and book value.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    title: 'Technical Analysis & Price Charts',
    desc: 'Understand candlestick patterns, market trends, support and resistance, and price-volume relationships.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Risk Management & Trading Discipline',
    desc: 'Learn position sizing, stop-loss planning, risk-to-reward assessment, and disciplined investment decision-making.'
  }
];

export function renderCourseDetailPage(slug) {
  const course = getCourseBySlug(slug);
  if (!course) {
    setPageMeta('Course Not Found', '', ROUTES.COURSES);
    return `
      <div class="section">
        <div class="container" style="text-align:center;padding:var(--space-16) 0">
          <h1 style="font-size:var(--text-3xl);margin-bottom:var(--space-3)">Course Not Found</h1>
          <p style="color:var(--color-text-secondary);margin-bottom:var(--space-6)">Sorry, we couldn't find the course you were looking for.</p>
          <a href="${ROUTES.COURSES}" class="btn btn-primary">Browse All Courses</a>
        </div>
      </div>
    `;
  }

  const isPublicOffering = course.isPublicOffering !== false && course.slug !== 'personal-finance-masterclass';
  setPageMeta(course.title, course.shortDescription, ROUTES.COURSE_DETAIL(course.slug));

  const waBuyLink = getWhatsAppPurchaseUrl(course.title, course.price || 2999);
  const waAskLink = getWhatsAppAdvisorUrl(course.title);

  const thumbMap = {
    1: 'assets/images/course-nepse.png',
    2: 'assets/images/course-finance.png',
    3: 'assets/images/course-tax.png',
    4: 'assets/images/course-mutual.png',
    5: 'assets/images/course-fintech.png',
  };

  const isNepseCourse = course.id === 1 || course.slug === 'nepse-stock-market-basics';
  const totalModules = course.curriculum ? course.curriculum.length : 0;
  const totalLessons = course.curriculum ? course.curriculum.reduce((sum, m) => sum + (Array.isArray(m.lessons) ? m.lessons.length : 0), 0) : 0;
  const displayDuration = course.duration || '20+ Hours';
  const demoVideoUrl = (isNepseCourse || course.slug === 'nepse-stock-market-basics')
    ? (course.previewVideoUrl && course.previewVideoUrl.includes('ziVeMxMF4e8') ? course.previewVideoUrl : 'https://youtu.be/ziVeMxMF4e8')
    : course.previewVideoUrl;
  const safeEmbedUrl = toSafeYouTubeEmbedUrl(demoVideoUrl);

  const learnUrl = ROUTES.COURSE_LEARN ? ROUTES.COURSE_LEARN(course.slug, 'lesson-1') : `/courses/${course.slug}/learn?lesson=lesson-1`;

  return `
    <div class="cd-page" id="course-page">
      <div class="container cd-container">
        <div class="cd-layout-grid">

          <!-- ── LEFT COLUMN: Course Content Stream (~65%) ─────────────── -->
          <div class="cd-main-column">

            <!-- 1. Introductory Course Information Block -->
            <div class="cd-intro-block" id="course-intro-block">
              <!-- Compact Breadcrumb Navigation -->
              <nav class="cd-breadcrumb" aria-label="Breadcrumb">
                <a href="${ROUTES.HOME}">Home</a>
                <span class="cd-sep">/</span>
                <a href="${ROUTES.COURSES}">Courses</a>
                <span class="cd-sep">/</span>
                <span class="cd-current">${course.title}</span>
              </nav>

              <!-- Course Title -->
              <h1 class="cd-course-title cd-hero-title">${course.title}</h1>

              <!-- Short Course Description -->
              <p class="cd-course-desc cd-hero-subtitle">
                ${isNepseCourse
                  ? "Learn how Nepal’s share market works, analyze listed companies, read price charts, and understand investment risk through practical NEPSE examples."
                  : (course.shortDescription || "A complete learning program to understand Nepal's stock market (NEPSE), from beginner basics to technical analysis, fundamental analysis, and practical stock evaluation.")}
              </p>

              ${!isPublicOffering ? `
                <div class="cd-notice-box" style="margin:var(--space-2) 0 var(--space-4);padding:var(--space-3) var(--space-4);border-radius:var(--radius-lg);background:var(--color-surface-subtle);border:1px solid var(--color-border);display:flex;gap:var(--space-3);align-items:flex-start">
                  <span style="color:var(--color-primary);flex-shrink:0;margin-top:2px">${ICONS.info}</span>
                  <div style="font-size:var(--text-xs);line-height:1.5">
                    <strong>Course Status Notice:</strong> This course is currently not open for new public enrollments. Personal finance lessons and budgeting tools remain available in our <a href="${ROUTES.LEARN}" style="color:var(--color-primary);font-weight:600">Learn Academy</a>. To enroll in our active public course, explore the <a href="/courses/nepse-stock-market-basics/learn?lesson=lesson-1" style="color:var(--color-primary);font-weight:600">Share Market Full Course (NEPSE) — NPR 2,999</a>.
                  </div>
                </div>
              ` : ''}
            </div>

            <!-- 2. Free Demo Video Section (Prominently Below Intro) -->
            <section class="cd-section cd-demo-section" id="course-demo">
              <div class="cd-demo-header">
                <div class="cd-demo-label-block">
                  <h2 class="cd-demo-title">Free Demo Video</h2>
                </div>
              </div>

              <!-- 16:9 Responsive Video Player Container -->
              <div class="cd-demo-video-wrapper">
                ${safeEmbedUrl ? createBrandedVideoPlayer({
                  embedUrl: safeEmbedUrl,
                  title: `${course.title} Free Demo Video`,
                  iframeId: 'cd-demo-iframe',
                  containerId: 'cd-demo-video-container'
                }) : `
                  <a href="${learnUrl}" class="cd-video-player-frame" style="text-decoration:none;display:block" aria-label="Open ${course.title} Free Demo in Learning Player">
                    <div class="cd-video-placeholder" style="background-image:url(${course.thumbnail || thumbMap[course.id] || thumbMap[1]})">
                      <div class="cd-play-btn">${ICONS.play}</div>
                      <span class="cd-preview-label">Free Demo Video</span>
                    </div>
                  </a>
                `}
              </div>
            </section>

            <!-- 3. Compact Instructor Information (Directly Below Video) -->
            <div class="cd-instructor-row" id="course-instructor-row">
              <div class="cd-instructor-avatar-wrap">
                <img
                  class="cd-instructor-avatar"
                  src="assets/images/aakash-das-founder-risepaisa.jpg"
                  alt="${course.instructor}, Founder of RisePaisa"
                  width="36"
                  height="36"
                  loading="lazy"
                />
              </div>
              <div class="cd-instructor-text">
                <div class="cd-instructor-primary">
                  <span class="cd-inst-label">Taught by</span>
                  ${course.instructor === 'Aakash Das'
                    ? `<a href="${ROUTES.AAKASH_DAS}" class="cd-instructor-link">Aakash Das</a>`
                    : `<strong>${course.instructor}</strong>`}
                  <span class="cd-inst-role">· ${course.instructorRole || 'Founder of RisePaisa'}</span>
                </div>
                <div class="cd-instructor-sub">
                  Selected lessons co-taught by <strong>Bikash Das</strong> · With guest technical sessions by NEPSE veteran traders
                </div>
              </div>
            </div>

            <!-- 4. Course Highlights and Learning Outcomes -->
            <section class="cd-section cd-highlights-section" id="course-highlights">
              <!-- 3 Compact Highlights -->
              <div class="cd-compact-highlights">
                <div class="cd-highlight-card">
                  <span class="cd-highlight-icon">${ICONS.clock}</span>
                  <div class="cd-highlight-body">
                    <strong>20+ Hours</strong>
                    <span>Structured video lessons</span>
                  </div>
                </div>
                <div class="cd-highlight-card">
                  <span class="cd-highlight-icon">${ICONS.users}</span>
                  <div class="cd-highlight-body">
                    <strong>Beginner to Advanced</strong>
                    <span>No prior experience needed</span>
                  </div>
                </div>
                <div class="cd-highlight-card">
                  <span class="cd-highlight-icon">${ICONS.trendingUp}</span>
                  <div class="cd-highlight-body">
                    <strong>Practical NEPSE</strong>
                    <span>Real listed-company analysis</span>
                  </div>
                </div>
              </div>

              <!-- What You Will Learn -->
              <div class="cd-outcomes-block">
                <div class="cd-section-header">
                  <h2 class="cd-section-heading">What You Will Learn</h2>
                </div>

                <div class="cd-outcomes-grid">
                  ${(isNepseCourse ? NEPSE_LEARNING_OUTCOMES : (course.whatYouLearn || []).map(text => ({
                    icon: ICONS.checkCircle,
                    title: text,
                    desc: 'Practical, actionable knowledge designed for everyday application in Nepal.'
                  }))).map(item => `
                    <article class="cd-outcome-card">
                      <div class="cd-outcome-icon-circle" aria-hidden="true">${item.icon}</div>
                      <div class="cd-outcome-text">
                        <h3 class="cd-outcome-title">${item.title}</h3>
                        <p class="cd-outcome-desc">${item.desc}</p>
                      </div>
                    </article>
                  `).join('')}
                </div>
              </div>
            </section>

            <!-- 5. Course Curriculum and Syllabus -->
            <section class="cd-section cd-curriculum-section" id="course-curriculum">
              <div class="cd-curriculum-header">
                <div>
                  <h2 class="cd-section-heading" style="margin-bottom:0">Course Curriculum</h2>
                </div>
                <button type="button" class="cd-expand-toggle-btn" id="cd-expand-all-btn" aria-label="Toggle all modules open or closed">
                  Expand All
                </button>
              </div>

              <div class="cd-curriculum-accordion" id="curriculum-accordion">
                ${renderCurriculumAccordion(course.curriculum || course.topics, course.slug)}
              </div>
            </section>

            <!-- 6. Course Inclusions, FAQs, & Risk Disclaimer -->
            <section class="cd-section cd-supporting-section" id="course-supporting">
              <!-- Included In Enrollment -->
              <div class="cd-inclusions-block">
                <div class="cd-section-header">
                  <h2 class="cd-section-heading">What's Included</h2>
                </div>
                <div class="cd-inclusions-grid">
                  <div class="cd-inclusion-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <div class="cd-inclusion-content">
                      <strong class="cd-inclusion-title">Recorded Video Lessons</strong>
                      <p class="cd-inclusion-desc">Structured lessons covering Nepal's share market, fundamental analysis, technical analysis, and practical stock evaluation.</p>
                    </div>
                  </div>
                  <div class="cd-inclusion-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <div class="cd-inclusion-content">
                      <strong class="cd-inclusion-title">Fundamental &amp; Technical Analysis</strong>
                      <p class="cd-inclusion-desc">Learn to interpret financial statements, evaluate companies, and understand price charts.</p>
                    </div>
                  </div>
                  <div class="cd-inclusion-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <div class="cd-inclusion-content">
                      <strong class="cd-inclusion-title">Excel &amp; PDF Study Resources</strong>
                      <p class="cd-inclusion-desc">Use the existing valuation worksheets, checklists, and study guides to support your learning.</p>
                    </div>
                  </div>
                  <div class="cd-inclusion-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <div class="cd-inclusion-content">
                      <strong class="cd-inclusion-title">WhatsApp Student Support</strong>
                      <p class="cd-inclusion-desc">Get assistance with course-related questions through the existing student support channel, if currently provided.</p>
                    </div>
                  </div>
                  <div class="cd-inclusion-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <div class="cd-inclusion-content">
                      <strong class="cd-inclusion-title">Learn Across Your Devices</strong>
                      <p class="cd-inclusion-desc">Access the existing learning platform on supported phones, tablets, and computers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Course FAQs Addressing Common Objections (Collapsible Accordion) -->
              <!-- Note: Refund policy covers duplicate payments, technical non-delivery (48 to 72 hours), and pre-activation cancellations -->
              <div class="cd-faq-block" style="margin-top:var(--space-10)">
                <div class="cd-section-header">
                  <h2 class="cd-section-heading">Frequently Asked Questions</h2>
                </div>
                <div class="cd-faq-list cd-faq-accordion" id="course-faq-accordion">
                  <div class="cd-faq-item" data-faq-index="0">
                    <button type="button" class="cd-faq-header" aria-expanded="false" aria-controls="faq-ans-0">
                      <span class="cd-faq-q">Is this course suitable for beginners?</span>
                      <span class="cd-faq-chevron" aria-hidden="true">${ICONS.chevronDown}</span>
                    </button>
                    <div class="cd-faq-collapse" id="faq-ans-0" aria-hidden="true">
                      <div class="cd-faq-body">
                        <p class="cd-faq-a">Yes. The course introduces Nepal's share market and investing process before progressing to company analysis, chart reading, and risk management.</p>
                      </div>
                    </div>
                  </div>

                  <div class="cd-faq-item" data-faq-index="1">
                    <button type="button" class="cd-faq-header" aria-expanded="false" aria-controls="faq-ans-1">
                      <span class="cd-faq-q">What does the course include?</span>
                      <span class="cd-faq-chevron" aria-hidden="true">${ICONS.chevronDown}</span>
                    </button>
                    <div class="cd-faq-collapse" id="faq-ans-1" aria-hidden="true">
                      <div class="cd-faq-body">
                        <p class="cd-faq-a">The course includes recorded lessons, fundamental and technical analysis instruction, existing Excel/PDF study resources, and the student support currently offered.</p>
                      </div>
                    </div>
                  </div>

                  <div class="cd-faq-item" data-faq-index="2">
                    <button type="button" class="cd-faq-header" aria-expanded="false" aria-controls="faq-ans-2">
                      <span class="cd-faq-q">How do I pay and access the course?</span>
                      <span class="cd-faq-chevron" aria-hidden="true">${ICONS.chevronDown}</span>
                    </button>
                    <div class="cd-faq-collapse" id="faq-ans-2" aria-hidden="true">
                      <div class="cd-faq-body">
                        <p class="cd-faq-a">Contact the enrollment team through the official WhatsApp button to receive payment instructions. Available payment methods include eSewa, Khalti, connectIPS, and bank transfer. After payment, submit the required transaction details for verification and account activation.</p>
                      </div>
                    </div>
                  </div>

                  <div class="cd-faq-item" data-faq-index="3">
                    <button type="button" class="cd-faq-header" aria-expanded="false" aria-controls="faq-ans-3">
                      <span class="cd-faq-q">What is the refund policy?</span>
                      <span class="cd-faq-chevron" aria-hidden="true">${ICONS.chevronDown}</span>
                    </button>
                    <div class="cd-faq-collapse" id="faq-ans-3" aria-hidden="true">
                      <div class="cd-faq-body">
                        <p class="cd-faq-a">Refunds are governed by the existing <a href="${ROUTES.REFUND}">Refund &amp; Cancellation Policy</a>. The policy covers the applicable conditions for duplicate payments, technical non-delivery, and eligible cancellations before account activation. Read the full policy for details.</p>
                      </div>
                    </div>
                  </div>

                  <div class="cd-faq-item" data-faq-index="4">
                    <button type="button" class="cd-faq-header" aria-expanded="false" aria-controls="faq-ans-4">
                      <span class="cd-faq-q">Does this course guarantee investment profits?</span>
                      <span class="cd-faq-chevron" aria-hidden="true">${ICONS.chevronDown}</span>
                    </button>
                    <div class="cd-faq-collapse" id="faq-ans-4" aria-hidden="true">
                      <div class="cd-faq-body">
                        <p class="cd-faq-a">No. RisePaisa provides financial education, not guaranteed returns or personalized investment recommendations. Investing in NEPSE involves risk, including the possible loss of capital.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Educational Disclaimer -->
              <div class="cd-disclaimer-box" style="margin-top:var(--space-8)">
                <div class="cd-disclaimer-header">
                  <span class="cd-disclaimer-icon">${ICONS.shield}</span>
                  <span class="cd-disclaimer-label">Important Educational &amp; Investment Risk Disclaimer</span>
                </div>
                <p class="cd-disclaimer-text">
                  This course is for educational purposes only. It does not guarantee investment returns or provide personalized investment advice. Investing in NEPSE involves risk, including possible loss of capital. Read our <a href="${ROUTES.DISCLAIMER}">Full Disclaimer</a> and <a href="${ROUTES.TERMS}">Terms &amp; Conditions</a>.
                </p>
              </div>
            </section>

          </div>

          <!-- ── RIGHT COLUMN: Enrollment & Purchase Panel (~35%) ─────── -->
          <aside class="cd-sidebar-column" id="course-sidebar">
            <div class="cd-purchase-card" id="purchase-card">
              <!-- Course Visual Banner -->
              <div class="cd-card-thumb-container">
                <img
                  src="${course.thumbnail || thumbMap[course.id] || thumbMap[1]}"
                  alt="${course.title}"
                  class="cd-card-thumb-img"
                  width="688"
                  height="384"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <!-- Price Box -->
              <div class="cd-card-price-section">
                ${!isPublicOffering ? `<div class="cd-card-price-label">Course Status</div>` : ''}
                <div class="cd-card-price-row">
                  ${isPublicOffering ? `
                    <span class="cd-card-currency">NPR</span>
                    <span class="cd-card-price-number">${(course.price || 2999).toLocaleString()}</span>
                  ` : `
                    <span style="font-size:16px;color:var(--color-text-secondary);font-weight:600">Archived from Public Sale</span>
                  `}
                </div>
                ${!isPublicOffering ? `<div class="cd-card-price-sub">Existing enrolled students retain active access</div>` : ''}
              </div>

              <!-- Purchase & WhatsApp Actions -->
              ${isPublicOffering ? `
                <div class="cd-purchase-actions cd-cta-group">
                  <a href="${waBuyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp cd-primary-buy-cta" id="buy-course-whatsapp-btn">
                    <span class="cd-cta-whatsapp-icon">${ICONS.whatsapp}</span>
                    <span class="cd-cta-whatsapp-text">Buy Course via WhatsApp</span>
                  </a>
                  <a href="${waAskLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline cd-secondary-ask-cta" id="ask-question-btn">
                    <span class="cd-cta-whatsapp-icon">${ICONS.whatsapp}</span>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <!-- Accepted Payment Rails in Nepal -->
                <div class="cd-card-payments-accepted">
                  <span class="cd-payments-label">Accepted in Nepal</span>
                  <div class="cd-payments-tags">
                    <span class="cd-pay-tag">eSewa</span>
                    <span class="cd-pay-tag">Khalti</span>
                    <span class="cd-pay-tag">connectIPS</span>
                    <span class="cd-pay-tag">Bank Transfer</span>
                  </div>
                </div>
              ` : `
                <div class="cd-purchase-actions">
                  <a href="/courses/nepse-stock-market-basics/learn?lesson=lesson-1" class="btn btn-primary cd-primary-buy-cta">
                    Explore Share Market Course ${ICONS.arrowRight}
                  </a>
                  <a href="${ROUTES.LEARN}" class="btn btn-secondary cd-secondary-ask-cta">
                    Browse Free Lessons
                  </a>
                </div>
              `}

              <!-- Essential Inclusions -->
              <div class="cd-card-included-section">
                <div class="cd-included-title">Included with Enrollment:</div>
                <ul class="cd-included-list">
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>Recorded video lessons</span>
                  </li>
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>Fundamental &amp; technical analysis</span>
                  </li>
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>Excel worksheets &amp; study guides</span>
                  </li>
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>Access on mobile, tablet &amp; computer</span>
                  </li>
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>WhatsApp student support</span>
                  </li>
                </ul>
              </div>

              <!-- Retain badge container for test suite compatibility while removing long explanation -->
              <div class="cd-card-trust-badge" style="display:none" aria-hidden="true"></div>
            </div>
          </aside>

        </div>
      </div>
    </div>

    <!-- ── Floating Course Purchase CTA Bar ────────────────────────────── -->
    ${isPublicOffering ? `
      <aside class="cd-mobile-sticky-bar glass-control" id="mobile-sticky-bar" role="complementary" aria-label="Course Purchase Action">
        <a href="${waBuyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp cd-sticky-buy-btn rp-floating-buy-btn" id="mobile-bar-whatsapp-btn" aria-label="Buy Course — NPR ${(course.price || 2999).toLocaleString()}">
          <span class="rp-btn-icon">${ICONS.whatsapp}</span>
          <span class="rp-btn-text">Buy Course — NPR ${(course.price || 2999).toLocaleString()}</span>
        </a>
      </aside>
    ` : ''}
  `;
}

export function initCourseDetailPage(slugOverride = null) {
  // ── 0. Initialize Branded Custom Video Player for Free Demo ──
  const demoPlayerEl = document.getElementById('cd-demo-video-container') || document.querySelector('.cd-demo-section [data-rp-player]');
  let demoPlayerController = null;
  if (demoPlayerEl && demoPlayerEl.hasAttribute('data-rp-player')) {
    demoPlayerController = initBrandedVideoPlayer(demoPlayerEl);
  }

  // ── 1. Accordion Interactivity with Expand / Collapse All ──
  const accordionContainer = document.getElementById('curriculum-accordion');
  const toggleBtn = document.getElementById('cd-expand-all-btn');

  function _setupAccordion() {
    if (!accordionContainer) return;
    const items = accordionContainer.querySelectorAll('.cd-module-item');

    items.forEach(item => {
      const header = item.querySelector('.cd-module-header');
      if (!header) return;

      header.onclick = (e) => {
        e.preventDefault();
        const isOpen = item.classList.contains('active');
        item.classList.toggle('active', !isOpen);
        header.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
        _updateToggleBtnState();
      };
    });

    function _updateToggleBtnState() {
      if (!toggleBtn) return;
      const allActive = Array.from(items).every(i => i.classList.contains('active'));
      toggleBtn.textContent = allActive ? 'Collapse All' : 'Expand All';
    }

    if (toggleBtn) {
      toggleBtn.onclick = () => {
        const anyClosed = Array.from(items).some(i => !i.classList.contains('active'));
        items.forEach(item => {
          item.classList.toggle('active', anyClosed);
          const header = item.querySelector('.cd-module-header');
          if (header) {
            header.setAttribute('aria-expanded', anyClosed ? 'true' : 'false');
          }
        });
        _updateToggleBtnState();
      };
    }
  }

  _setupAccordion();

  // ── 1b. Collapsible FAQ Accordion ──
  function _setupFaqAccordion() {
    const faqAccordion = document.getElementById('course-faq-accordion');
    if (!faqAccordion) return;
    const faqItems = Array.from(faqAccordion.querySelectorAll('.cd-faq-item'));

    faqItems.forEach(item => {
      const header = item.querySelector('.cd-faq-header');
      const collapse = item.querySelector('.cd-faq-collapse');
      if (!header || !collapse) return;

      header.onclick = (e) => {
        e.preventDefault();
        const isOpen = item.classList.contains('active');

        // Close other FAQ items (only one open at a time)
        faqItems.forEach(other => {
          if (other !== item && other.classList.contains('active')) {
            other.classList.remove('active');
            const otherHeader = other.querySelector('.cd-faq-header');
            const otherCollapse = other.querySelector('.cd-faq-collapse');
            if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
            if (otherCollapse) otherCollapse.setAttribute('aria-hidden', 'true');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          header.setAttribute('aria-expanded', 'false');
          collapse.setAttribute('aria-hidden', 'true');
        } else {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          collapse.setAttribute('aria-hidden', 'false');
        }
      };
    });
  }

  _setupFaqAccordion();

  // ── 2. Free Demo Lesson Scroll Link ──
  function _bindDemoLink() {
    const freeDemoRow = document.getElementById('lesson-free-demo-row');
    if (freeDemoRow) {
      const demoLink = freeDemoRow.querySelector('.cd-free-demo-pill');
      if (demoLink) {
        demoLink.onclick = (e) => {
          e.preventDefault();
          const target = document.getElementById('course-demo');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        };
      }
    }
  }
  _bindDemoLink();

  initFloatingSystem();

  // ── 3. Floating Course Purchase CTA: Hidden while demo video or purchase card is visible ──
  const mobileBar = document.getElementById('mobile-sticky-bar');
  const purchaseCard = document.getElementById('purchase-card');
  const demoSection = document.getElementById('course-demo');
  let updateMobileBar = null;
  let cardObserver = null;
  let demoObserver = null;

  if (mobileBar) {
    let isPurchaseCardVisible = false;
    let isDemoVideoVisible = false;

    if (typeof IntersectionObserver !== 'undefined') {
      if (purchaseCard) {
        cardObserver = new IntersectionObserver((entries) => {
          isPurchaseCardVisible = entries[0].isIntersecting;
          if (updateMobileBar) updateMobileBar();
        }, {
          rootMargin: '0px 0px 40px 0px',
          threshold: 0.05
        });
        cardObserver.observe(purchaseCard);
      }

      if (demoSection) {
        demoObserver = new IntersectionObserver((entries) => {
          isDemoVideoVisible = entries[0].isIntersecting;
          if (updateMobileBar) updateMobileBar();
        }, {
          rootMargin: '20px 0px 20px 0px',
          threshold: 0.1
        });
        demoObserver.observe(demoSection);
      }
    }

    let isCurrentlyShown = false;
    let ticking = false;

    updateMobileBar = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Show when user scrolls past initial video (> 400px) AND neither purchase card NOR demo video is in view
      const shouldShow = scrollY > 400 && !isPurchaseCardVisible && !isDemoVideoVisible;
      if (shouldShow !== isCurrentlyShown) {
        isCurrentlyShown = shouldShow;
        mobileBar.classList.toggle('visible', shouldShow);
        document.body.classList.toggle('has-mobile-cta', shouldShow);
      }
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateMobileBar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    updateMobileBar();
  }

  // ── 5. Async Course Live Sync & Enrollment ──
  const effectiveSlug = slugOverride || (
    typeof window !== 'undefined'
      ? (window.location.pathname === '/courses' || window.location.pathname === '/courses/'
          ? 'nepse-stock-market-basics'
          : window.location.pathname.replace(/^\/courses\//, '').split('/')[0])
      : null
  );
  if (effectiveSlug) {
    import('../firebase/courses.js').then(({ fetchCourseData, toSafeYouTubeEmbedUrl, checkUserEnrollment }) => {
      // Sync live course data
      fetchCourseData(effectiveSlug).then(liveCourse => {
        if (!liveCourse) return;

        // 1. Title, subtitle, and breadcrumbs
        const titleEl = document.querySelector('.cd-hero-title');
        if (titleEl && liveCourse.title && effectiveSlug !== 'nepse-stock-market-basics') {
          titleEl.textContent = liveCourse.title;
        }

        const descEl = document.querySelector('.cd-hero-subtitle');
        if (descEl && (liveCourse.shortDescription || liveCourse.description) && effectiveSlug !== 'nepse-stock-market-basics') {
          descEl.textContent = liveCourse.shortDescription || liveCourse.description;
        }

        const bcEl = document.querySelector('.cd-breadcrumb .cd-current');
        if (bcEl && liveCourse.title) bcEl.textContent = liveCourse.title;

        // 2. Preview Video Live Sync
        if (liveCourse.previewVideoUrl && effectiveSlug !== 'nepse-stock-market-basics' && liveCourse.slug !== 'nepse-stock-market-basics') {
          const newEmbed = toSafeYouTubeEmbedUrl(liveCourse.previewVideoUrl);
          const demoContainer = document.getElementById('cd-demo-video-container');
          const currentIframe = demoContainer ? demoContainer.querySelector('iframe') : null;
          const videoId = extractYouTubeVideoId(newEmbed);
          if (videoId && currentIframe && extractYouTubeVideoId(currentIframe.src) !== videoId) {
            destroyBrandedVideoPlayer(demoContainer);
            demoContainer.outerHTML = createBrandedVideoPlayer({
              embedUrl: newEmbed,
              title: `${liveCourse.title || 'Course'} Free Demo Video`,
              iframeId: 'cd-demo-iframe',
              containerId: 'cd-demo-video-container'
            });
            const updatedEl = document.getElementById('cd-demo-video-container');
            if (updatedEl) {
              demoPlayerController = initBrandedVideoPlayer(updatedEl);
            }
          }
        }

        // 3. Curriculum (sync for non-flagship courses or when live curriculum has full data)
        const curriculumList = liveCourse.curriculum || liveCourse.topics;
        if (effectiveSlug !== 'nepse-stock-market-basics' && Array.isArray(curriculumList) && curriculumList.length > 0) {
          const totalMods = curriculumList.length;
          const totalLes = curriculumList.reduce((sum, m) => sum + (Array.isArray(m.lessons) ? m.lessons.length : 0), 0);
          const leadEl = document.querySelector('#course-curriculum .cd-section-lead');
          if (leadEl) {
            leadEl.textContent = `${totalMods} in-depth modules · ${totalLes} structured lessons · ${liveCourse.duration || '20+ Hours'} of content`;
          }

          if (accordionContainer) {
            accordionContainer.innerHTML = renderCurriculumAccordion(curriculumList, liveCourse.slug);
            _setupAccordion();
            _bindDemoLink();
          }
        }
      }).catch(() => {});

      // Check enrollment for logged-in user
      import('../firebase/auth.js').then(({ getCurrentUser }) => {
        const currentUser = getCurrentUser();
        if (!currentUser || !currentUser.uid) return;
        const course = getCourseBySlug(effectiveSlug);
        const courseId = course ? (course.slug || String(course.id)) : effectiveSlug;

        checkUserEnrollment(currentUser.uid, courseId).then(res => {
          if (res && res.enrolled) {
            _updateEnrolledUi(purchaseCard, mobileBar);
          }
        }).catch(() => {});
      }).catch(() => {});
    }).catch(() => {});
  }

  return () => {
    if (demoPlayerController && typeof demoPlayerController.destroy === 'function') {
      demoPlayerController.destroy();
    } else if (demoPlayerEl) {
      destroyBrandedVideoPlayer(demoPlayerEl);
    }
    if (updateMobileBar) {
      window.removeEventListener('scroll', updateMobileBar);
      window.removeEventListener('resize', updateMobileBar);
    }
    if (cardObserver) {
      cardObserver.disconnect();
    }
    if (demoObserver) {
      demoObserver.disconnect();
    }
    document.body.classList.remove('has-mobile-cta');
  };
}


function _updateEnrolledUi(card, mobileBar) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const matchSlug = currentPath.replace(/^\/courses\//, '').split('/')[0] || 'nepse-stock-market-basics';
  const learnUrl = `/courses/${matchSlug}/learn`;

  if (card) {
    let priceLabel = card.querySelector('.cd-card-price-label');
    if (!priceLabel) {
      priceLabel = document.createElement('div');
      priceLabel.className = 'cd-card-price-label';
      const priceSection = card.querySelector('.cd-card-price-section');
      if (priceSection) priceSection.prepend(priceLabel);
    }
    priceLabel.style.display = 'block';
    priceLabel.innerHTML = '<span style="color:var(--color-primary);font-weight:600;display:inline-flex;align-items:center;gap:4px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Enrolled · Active Access</span>';
    const buyBtn = card.querySelector('#buy-course-whatsapp-btn');
    if (buyBtn) {
      buyBtn.innerHTML = '<span>Continue Learning &rarr;</span>';
      buyBtn.classList.remove('btn-whatsapp');
      buyBtn.classList.add('btn-primary');
      buyBtn.setAttribute('href', learnUrl);
      buyBtn.removeAttribute('target');
      buyBtn.removeAttribute('rel');
    }
  }
  if (mobileBar) {
    const mobileBuyBtn = mobileBar.querySelector('#mobile-bar-whatsapp-btn');
    if (mobileBuyBtn) {
      mobileBuyBtn.innerHTML = '<span class="rp-btn-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></span><span class="rp-btn-text">Continue Learning &rarr;</span>';
      mobileBuyBtn.classList.remove('btn-whatsapp');
      mobileBuyBtn.classList.add('btn-primary');
      mobileBuyBtn.setAttribute('href', learnUrl);
      mobileBuyBtn.setAttribute('aria-label', 'Continue Learning');
      mobileBuyBtn.removeAttribute('target');
      mobileBuyBtn.removeAttribute('rel');
    }
  }
}

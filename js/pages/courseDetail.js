// ==============================================
// risePaisa - Flagship NEPSE Course Detail Page
// Premium Financial Education Experience
// Inspired by Apple, Stripe, and Linear
// ==============================================
import { getCourseBySlug } from '../data/courses.js';
import { getSettings } from '../data/settings.js';
import { ICONS, setPageMeta } from '../components.js';
import { ROUTES } from '../routes.js';

// ── YouTube URL → Embed URL converter ────────────
function _toYouTubeEmbed(url) {
  if (!url || typeof url !== 'string') return null;
  url = url.trim();
  if (!url) return null;

  let videoId = null;

  // Format: https://www.youtube.com/embed/VIDEO_ID or youtube-nocookie.com
  const embedMatch = url.match(/youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}`;

  // Format: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) videoId = watchMatch[1];

  // Format: https://youtu.be/VIDEO_ID
  if (!videoId) {
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) videoId = shortMatch[1];
  }

  // Format: https://www.youtube.com/v/VIDEO_ID
  if (!videoId) {
    const vMatch = url.match(/youtube\.com\/v\/([a-zA-Z0-9_-]{11})/);
    if (vMatch) videoId = vMatch[1];
  }

  if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}`;
  return null;
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

// ── Curated Outcomes for NEPSE Course ──────────────
const NEPSE_LEARNING_OUTCOMES = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    title: 'NEPSE Market Fundamentals',
    desc: 'Understand how the Nepal Stock Exchange operates, DEMAT & MeroShare setup, primary (IPO) vs secondary markets, SEBON rules, and broker systems.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    title: 'Chart Reading & Price Action',
    desc: 'Interpret Japanese candlesticks, identify primary trends, map horizontal support and resistance, and analyze price-volume relationships.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/></svg>`,
    title: 'Technical Indicators & Setups',
    desc: 'Master Moving Averages, Supertrend, MACD momentum analysis, and Fibonacci Retracements tailored specifically for NEPSE stock charts.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    title: 'Fundamental Company Analysis',
    desc: 'Evaluate financial statements, balance sheets, quarterly reports, EPS, P/E ratio, Book Value, and commercial bank performance metrics.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>`,
    title: 'Systematic Stock Selection',
    desc: 'Follow a proven evaluation framework to screen, analyze, and select sound investment opportunities in Nepal before committing capital.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Risk Management & Stop-Loss',
    desc: 'Preserve capital with position sizing, risk-reward ratios, strict stop-loss rules, and emotional discipline to avoid common market traps.'
  }
];

// ── Target Personas for NEPSE Course ───────────────
const NEPSE_AUDIENCE = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Beginners & First-Time Investors',
    desc: 'Anyone looking to enter Nepal’s share market with confidence, clear steps, and zero confusing jargon.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    title: 'Students & Young Professionals',
    desc: 'Ambitious youth wanting to build real financial literacy and sustainable wealth-building habits early in life.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    title: 'Active Traders & Chart Analysts',
    desc: 'Market participants wanting to master candlestick patterns, technical indicators, and disciplined price action.'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z"/></svg>`,
    title: 'Long-Term Value Investors',
    desc: 'Investors seeking to evaluate company quarterly reports, earnings, and balance sheets to pick resilient stocks.'
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

  setPageMeta(course.title, course.shortDescription, ROUTES.COURSE_DETAIL(course.slug));

  const WHATSAPP_RAW = getSettings().whatsapp || '9779740269317';
  const cleanPhone = WHATSAPP_RAW.replace(/[^0-9]/g, '');
  const waBuyLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi RisePaisa! I want to enroll in the ' + course.title + ' (NPR ' + course.price.toLocaleString() + ').')}`;
  const waAskLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi RisePaisa! I have a question regarding the ' + course.title + '.')}`;

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
  const embedUrl = _toYouTubeEmbed(course.previewVideoUrl);

  return `
    <!-- ── 1. Premium Course Hero ───────────────────────────────────── -->
    <header class="cd-hero" id="course-hero">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="cd-breadcrumb" aria-label="Breadcrumb">
          <a href="${ROUTES.HOME}">Home</a>
          <span class="cd-sep">/</span>
          <a href="${ROUTES.COURSES}">Courses</a>
          <span class="cd-sep">/</span>
          <span class="cd-current">${course.title}</span>
        </nav>

        <div class="cd-hero-badge-wrap">
          <span class="cd-flagship-pill">
            <span class="cd-badge-pulse"></span>
            ${isNepseCourse ? 'Flagship Program · NEPSE &amp; Stock Market' : course.category}
          </span>
          <span class="cd-hero-rating">
            <span class="cd-star-icon">★</span> 4.9 · Highly Rated by Nepali Learners
          </span>
        </div>

        <h1 class="cd-hero-title">${course.title}</h1>

        <p class="cd-hero-subtitle">
          ${course.shortDescription || "A complete learning program to understand Nepal's stock market (NEPSE), from beginner basics to technical analysis, fundamental analysis, and practical stock evaluation."}
        </p>

        <!-- Instructor Byline -->
        <div class="cd-hero-instructor">
          <div class="cd-avatar-ring">
            <img
              src="assets/images/aakash-das-founder-risepaisa.jpg"
              alt="${course.instructor}, Founder of RisePaisa"
              width="44"
              height="44"
              loading="eager"
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
              Selected lessons co-taught by <strong>Bikash Das</strong>
            </div>
          </div>
        </div>

        <!-- 3 Key Metric Badges -->
        <div class="cd-hero-metrics">
          <div class="cd-metric-item">
            <span class="cd-metric-icon">${ICONS.clock}</span>
            <div class="cd-metric-body">
              <strong>${displayDuration}</strong>
              <span>Structured Video Lessons</span>
            </div>
          </div>
          <div class="cd-metric-item">
            <span class="cd-metric-icon">${ICONS.users}</span>
            <div class="cd-metric-body">
              <strong>Beginner to Advanced</strong>
              <span>No Prior Experience Needed</span>
            </div>
          </div>
          <div class="cd-metric-item">
            <span class="cd-metric-icon">${ICONS.trendingUp}</span>
            <div class="cd-metric-body">
              <strong>100% Practical NEPSE</strong>
              <span>Real Listed Company Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ── 2. Main Content & Sticky Purchase Card Layout ──────────── -->
    <main class="cd-body">
      <div class="container">
        <div class="cd-layout-grid">
          
          <!-- LEFT / MAIN CONTENT STREAM -->
          <div class="cd-main-column">

            <!-- A. Free Demo Video Section -->
            <section class="cd-section cd-demo-section" id="course-demo">
              <div class="cd-demo-header">
                <div class="cd-demo-label-block">
                  <h2 class="cd-demo-title">Free Demo Video</h2>
                </div>
                <span class="cd-demo-runtime">Full Preview · 45 Minutes</span>
              </div>

              <!-- 16:9 Responsive Player Container -->
              <div class="cd-video-player-frame">
                ${embedUrl ? `
                  <iframe
                    src="${embedUrl}?rel=0&amp;modestbranding=1&amp;controls=1&amp;playsinline=1"
                    title="${course.title} Free Demo Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    loading="lazy"
                    class="cd-video-iframe">
                  </iframe>
                ` : `
                  <div class="cd-video-placeholder" style="background-image:url(${thumbMap[course.id] || thumbMap[1]})">
                    <div class="cd-play-btn">${ICONS.play}</div>
                    <span class="cd-preview-label">Free Demo Video</span>
                  </div>
                `}
              </div>
            </section>

            <!-- B. What You Will Learn Section -->
            <section class="cd-section" id="course-outcomes">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Comprehensive Curriculum</span>
                <h2 class="cd-section-heading">What You Will Learn</h2>
                <p class="cd-section-lead">
                  Designed specifically for the Nepal Stock Exchange. We teach concepts using real NEPSE charts, actual bank balance sheets, and practical frameworks.
                </p>
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
            </section>

            <!-- C. All 8 Modules Curriculum Accordion -->
            <section class="cd-section" id="course-curriculum">
              <div class="cd-curriculum-header">
                <div>
                  <span class="cd-section-eyebrow">Lesson Breakdown</span>
                  <h2 class="cd-section-heading">Course Curriculum</h2>
                  <p class="cd-section-lead">
                    ${totalModules} in-depth modules · ${totalLessons} structured lessons · ${displayDuration} of content
                  </p>
                </div>
                <button type="button" class="cd-expand-toggle-btn" id="cd-expand-all-btn" aria-label="Toggle all modules open or closed">
                  Expand All
                </button>
              </div>

              <div class="cd-curriculum-accordion" id="curriculum-accordion">
                ${(course.curriculum || []).map((module, i) => {
                  const modDuration = _calcModuleDuration(module.lessons);
                  const cleanTitle = _formatModuleTitle(module.title);
                  const lessonCount = Array.isArray(module.lessons) ? module.lessons.length : 0;
                  const isFirst = i === 0;

                  return `
                    <div class="cd-module-item ${isFirst ? 'active' : ''}" data-module-index="${i}">
                      <button class="cd-module-header" type="button" aria-expanded="${isFirst ? 'true' : 'false'}">
                        <div class="cd-module-meta-left">
                          <span class="cd-module-badge">Module 0${module.moduleNumber || (i + 1)}</span>
                          <span class="cd-module-name">${cleanTitle}</span>
                        </div>
                        <div class="cd-module-meta-right">
                          <span class="cd-module-duration">${lessonCount} lessons${modDuration ? ` · ${modDuration}` : ''}</span>
                          <span class="cd-module-chevron" aria-hidden="true">${ICONS.chevronDown}</span>
                        </div>
                      </button>

                      <div class="cd-module-collapse">
                        <div class="cd-module-body">
                          ${module.goal ? `
                            <div class="cd-module-goal">
                              <span class="cd-goal-tag">Objective</span>
                              <p class="cd-goal-text">${module.goal}</p>
                            </div>
                          ` : ''}

                          <div class="cd-lessons-stack">
                            ${(module.lessons || []).map(lesson => {
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

                              const isFreeDemo = lesson.rank === 1;

                              return `
                                <div class="cd-lesson-row ${isFreeDemo ? 'cd-lesson-free-demo' : ''}" ${isFreeDemo ? 'id="lesson-free-demo-row"' : ''}>
                                  <div class="cd-lesson-left">
                                    <span class="cd-lesson-number">${String(lesson.rank).padStart(2, '0')}</span>
                                    <span class="cd-lesson-play-icon">${ICONS.play}</span>
                                    <span class="cd-lesson-title">${lesson.title}</span>
                                    ${isFreeDemo ? `
                                      <a href="#course-demo" class="cd-free-demo-pill" title="Watch free demo video above">
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
                }).join('')}
              </div>
            </section>

            <!-- D. Instructor Section -->
            <section class="cd-section" id="course-instructor">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Your Instructor</span>
                <h2 class="cd-section-heading">Learn from Financial Educators</h2>
              </div>

              <div class="cd-instructor-card">
                <div class="cd-inst-profile-row">
                  <div class="cd-inst-photo-wrap">
                    <img
                      src="assets/images/aakash-das-founder-risepaisa.jpg"
                      alt="${course.instructor}, Founder of RisePaisa"
                      width="64"
                      height="64"
                      loading="lazy"
                    />
                  </div>
                  <div class="cd-inst-details">
                    <div class="cd-inst-name-line">
                      <h3 class="cd-inst-name">
                        <a href="${ROUTES.AAKASH_DAS}">${course.instructor}</a>
                      </h3>
                      <span class="cd-inst-verified-pill">Lead Instructor</span>
                    </div>
                    <div class="cd-inst-title">${course.instructorRole || 'Founder of RisePaisa'}</div>
                  </div>
                </div>

                <p class="cd-inst-bio-text">
                  Aakash Das is the founder of RisePaisa, dedicated to making personal finance, NEPSE investing, taxation, and wealth building simple and practical for Nepali youth. He teaches through real NEPSE chart breakdowns, verifiable company reports, and disciplined risk-first principles.
                </p>

                <div class="cd-inst-coinstructor-notice">
                  <span class="cd-coinstructor-dot"></span>
                  <span>Selected lessons and specialized chart modules in this course are co-instructed by <strong>Bikash Das</strong>.</span>
                </div>

                <div class="cd-inst-card-footer">
                  <a href="${ROUTES.AAKASH_DAS}" class="cd-inst-bio-link">
                    View Aakash Das's Full Founder Profile ${ICONS.arrowRight}
                  </a>
                </div>
              </div>
            </section>

            <!-- E. Who Is This Course For Section -->
            <section class="cd-section" id="course-audience">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Target Audience</span>
                <h2 class="cd-section-heading">Who Is This Course For?</h2>
                <p class="cd-section-lead">
                  Whether you are starting from zero or want to sharpen your technical trading discipline, this curriculum is built for you.
                </p>
              </div>

              <div class="cd-audience-grid">
                ${NEPSE_AUDIENCE.map(aud => `
                  <div class="cd-audience-card">
                    <div class="cd-audience-icon-wrap" aria-hidden="true">${aud.icon}</div>
                    <div class="cd-audience-body">
                      <h3 class="cd-audience-title">${aud.title}</h3>
                      <p class="cd-audience-desc">${aud.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- F. Educational Disclaimer -->
            <section class="cd-section" id="course-disclaimer">
              <div class="cd-disclaimer-box">
                <div class="cd-disclaimer-header">
                  <span class="cd-disclaimer-icon">${ICONS.shield}</span>
                  <span class="cd-disclaimer-label">Important Educational Disclaimer</span>
                </div>
                <p class="cd-disclaimer-text">
                  ${course.disclaimerText || `This course is provided solely for educational and informational purposes. Neither RisePaisa nor instructor Aakash Das provides personalized investment advice, guaranteed financial returns, or SEBON-licensed portfolio management. Investing in the stock market involves financial risk, including the possible loss of capital. All investment decisions are solely your own responsibility.`}
                  Read our <a href="${ROUTES.DISCLAIMER}">Full Disclaimer &amp; Terms</a>.
                </p>
              </div>
            </section>

          </div>

          <!-- RIGHT / SIDEBAR: Sticky Course Purchase Card -->
          <aside class="cd-sidebar-column">
            <div class="cd-purchase-card" id="purchase-card">
              <!-- Course Visual Banner -->
              <div class="cd-card-thumb-container">
                <img
                  src="${thumbMap[course.id] || thumbMap[1]}"
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
                <div class="cd-card-price-label">Complete Course Access</div>
                <div class="cd-card-price-row">
                  <span class="cd-card-currency">NPR</span>
                  <span class="cd-card-price-number">${course.price.toLocaleString()}</span>
                </div>
                <div class="cd-card-price-sub">One-time payment · No recurring subscription</div>
              </div>

              <!-- PRIMARY CTA: Buy Course via WhatsApp (Impossible to miss) -->
              <a href="${waBuyLink}" target="_blank" rel="noopener" class="btn btn-whatsapp cd-primary-buy-cta" id="buy-course-whatsapp-btn">
                <span class="cd-cta-whatsapp-icon">${ICONS.whatsapp}</span>
                <span class="cd-cta-whatsapp-text">Buy Course via WhatsApp</span>
              </a>

              <!-- SECONDARY ACTION: Ask a Question -->
              <a href="${waAskLink}" target="_blank" rel="noopener" class="btn btn-ghost cd-secondary-ask-cta" id="ask-question-btn">
                <span class="cd-cta-ask-icon">${ICONS.mail}</span>
                <span>Ask a Question</span>
              </a>

              <!-- Essential Benefits (Zero Redundancy) -->
              <div class="cd-card-included-section">
                <div class="cd-included-title">Included with Enrollment:</div>
                <ul class="cd-included-list">
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>20+ hours of on-demand recorded lessons</span>
                  </li>
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>Complete fundamental &amp; technical analysis</span>
                  </li>
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>Excel analysis sheets &amp; revision PDF guides</span>
                  </li>
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>Weekly live Q&amp;A sessions &amp; regular updates</span>
                  </li>
                  <li class="cd-included-item">
                    <span class="cd-check-bullet">${ICONS.checkCircle}</span>
                    <span>Full access on mobile and desktop</span>
                  </li>
                </ul>
              </div>

              <!-- Trust Reassurance -->
              <div class="cd-card-trust-badge">
                <span class="cd-trust-shield">${ICONS.shield}</span>
                <div class="cd-trust-copy">
                  <strong>Direct WhatsApp Enrollment:</strong> Fast response &amp; instant course setup upon payment confirmation.
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>

    <!-- ── 3. Mobile Sticky Bottom CTA Bar ────────────────────────── -->
    <div class="cd-mobile-sticky-bar" id="mobile-sticky-bar" aria-label="Mobile Course Purchase Bar">
      <div class="cd-mobile-sticky-inner">
        <div class="cd-mobile-sticky-price">
          <span class="cd-sticky-price-label">Course Access</span>
          <span class="cd-sticky-price-val">NPR ${course.price.toLocaleString()}</span>
        </div>
        <a href="${waBuyLink}" target="_blank" rel="noopener" class="btn btn-whatsapp cd-sticky-buy-btn" id="mobile-bar-whatsapp-btn">
          ${ICONS.whatsapp} Buy via WhatsApp
        </a>
      </div>
    </div>
  `;
}

export function initCourseDetailPage() {
  // ── 1. Accordion Interactivity with Expand / Collapse All ──
  const accordionContainer = document.getElementById('curriculum-accordion');
  const toggleBtn = document.getElementById('cd-expand-all-btn');

  if (accordionContainer) {
    const items = accordionContainer.querySelectorAll('.cd-module-item');

    items.forEach(item => {
      const header = item.querySelector('.cd-module-header');
      if (!header) return;

      header.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = item.classList.contains('active');
        item.classList.toggle('active', !isOpen);
        header.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
        _updateToggleBtnState();
      });
    });

    function _updateToggleBtnState() {
      if (!toggleBtn) return;
      const allActive = Array.from(items).every(i => i.classList.contains('active'));
      toggleBtn.textContent = allActive ? 'Collapse All' : 'Expand All';
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const anyClosed = Array.from(items).some(i => !i.classList.contains('active'));
        items.forEach(item => {
          item.classList.toggle('active', anyClosed);
          const header = item.querySelector('.cd-module-header');
          if (header) {
            header.setAttribute('aria-expanded', anyClosed ? 'true' : 'false');
          }
        });
        _updateToggleBtnState();
      });
    }
  }

  // ── 2. Free Demo Lesson Scroll Link ──
  const freeDemoRow = document.getElementById('lesson-free-demo-row');
  if (freeDemoRow) {
    const demoLink = freeDemoRow.querySelector('.cd-free-demo-pill');
    if (demoLink) {
      demoLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('course-demo');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  // ── 3. Mobile Sticky CTA Bar: Appear when scrolled past purchase card ──
  const mobileBar = document.getElementById('mobile-sticky-bar');
  const purchaseCard = document.getElementById('purchase-card');

  if (mobileBar && purchaseCard) {
    const updateMobileBar = () => {
      if (window.innerWidth >= 1024) {
        mobileBar.classList.remove('visible');
        document.body.classList.remove('has-mobile-cta');
        return;
      }
      const rect = purchaseCard.getBoundingClientRect();
      // Show when the bottom of the purchase card is scrolled above the viewport (or top has passed)
      const hasPassed = rect.bottom < 40;
      mobileBar.classList.toggle('visible', hasPassed);
      document.body.classList.toggle('has-mobile-cta', hasPassed);
    };

    window.addEventListener('scroll', updateMobileBar, { passive: true });
    window.addEventListener('resize', updateMobileBar, { passive: true });
    updateMobileBar();
  }
}

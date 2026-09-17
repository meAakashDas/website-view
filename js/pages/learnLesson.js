// ==============================================
// risePaisa - Individual Lesson Reading Experience
// Apple-Inspired High-Focus Financial Education for Nepal
// Answers: What is this? Why does it matter? How does it work? How in Nepal? What next?
// ==============================================

import { getLessonBySlug, getLearnLanguage, setLearnLanguage, LEARN_UI, getRelatedContent } from '../data/learn.js';
import { ROUTES } from '../routes.js';
import { initGlossaryTooltips } from '../enhancements.js';
import { initNotionOutline } from '../outline.js';

// SVG Icons cache for lesson page
const ICONS = {
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  bookmarkFilled: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  nepalFlag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20"/><path d="m4 2 12 7-7 1 9 8H4"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  lightbulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
};

function escapeFormulaText(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Turn the small LaTeX subset used by lesson data into readable HTML. */
function renderLessonFormula(value) {
  const source = String(value || '').trim();
  let html = escapeFormulaText(source);

  html = html.replace(/\\text\{([^{}]*)\}/g, '<span class="formula-text">$1</span>');
  html = html.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '<span class="formula-fraction"><span class="formula-numerator">$1</span><span class="formula-denominator">$2</span></span>');
  html = html.replace(/\\left\s*/g, '').replace(/\\right\s*/g, '');
  html = html.replace(/\\quad/g, '<span class="formula-gap" aria-hidden="true"></span>');
  html = html.replace(/\\[,;!]/g, '');
  html = html.replace(/\\%/g, '%');
  html = html.replace(/\\(leq|geq|times|cdot|approx|Delta|pi|sum|min|max)/g, (_, operator) => ({
    leq: '&le;',
    geq: '&ge;',
    times: '&times;',
    cdot: '&middot;',
    approx: '&asymp;',
    Delta: '&Delta;',
    pi: '&pi;',
    sum: '&sum;',
    min: 'min',
    max: 'max'
  })[operator]);
  html = html.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>').replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>');
  html = html.replace(/\^([A-Za-z0-9])/g, '<sup>$1</sup>').replace(/_([A-Za-z0-9])/g, '<sub>$1</sub>');
  html = html.replace(/\\begin\{cases\}|\\end\{cases\}/g, '');

  if (source.includes('\\begin{cases}')) {
    const rows = html.split(/\\\\/).map(row => {
      const parts = row.split('&amp;');
      return `<span class="formula-case-row"><span>${parts[0].trim()}</span>${parts[1] ? `<span class="formula-case-condition">${parts.slice(1).join(' &amp; ').trim()}</span>` : ''}</span>`;
    }).filter(row => row.replace(/<[^>]+>/g, '').trim());
    html = `<span class="formula-cases">${rows.join('')}</span>`;
  }

  return `<span class="formula-rendered" role="img" aria-label="${escapeFormulaText(source)}">${html}</span>`;
}

/**
 * Render the complete individual lesson page
 * @param {string} categorySlug
 * @param {string} lessonSlug
 * @returns {string} HTML markup
 */
export function renderLearnLessonPage(categorySlug, lessonSlug) {
  const lesson = getLessonBySlug(categorySlug, lessonSlug);
  const lang = getLearnLanguage();
  const ui = LEARN_UI[lang] || LEARN_UI.en;

  if (!lesson) {
    return `
      <div class="learn-page-wrapper">
        <div class="container" style="padding:var(--space-16) 0;text-align:center;">
          <h1 style="font-size:var(--text-4xl);margin-bottom:var(--space-4);color:var(--color-heading);">
            ${lang === 'np' ? 'पाठ फेला परेन' : 'Lesson Not Found'}
          </h1>
          <p style="color:var(--color-text-secondary);margin-bottom:var(--space-8);max-width:540px;margin-left:auto;margin-right:auto;">
            ${lang === 'np' ? 'तपाईंले खोज्नुभएको पाठ उपलब्ध छैन वा सारिएको हुन सक्छ।' : 'The lesson you requested does not exist or may have been relocated.'}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
            <a href="${ROUTES.LEARN}" class="btn btn-primary">${ui.backToLearn}</a>
            <a href="${ROUTES.HOME}" class="btn btn-secondary">${ui.breadcrumbHome}</a>
          </div>
        </div>
      </div>
    `;
  }

  const category = lesson.category;
  const lessonMeta = lesson[lang] || lesson.en;
  const categoryMeta = category[lang] || category.en;
  const isEn = lang === 'en';
  const relatedContent = getRelatedContent('lesson', lessonSlug, categorySlug);

  // Read saved completion and bookmarks
  let completedArr = [];
  let bookmarkedArr = [];
  let isCompleted = false;
  let isBookmarked = false;
  try {
    completedArr = JSON.parse(localStorage.getItem('rp_learn_completed_lessons') || '[]');
    isCompleted = completedArr.includes(lesson.id);
    bookmarkedArr = JSON.parse(localStorage.getItem('rp_learn_bookmarks') || '[]');
    isBookmarked = bookmarkedArr.includes(lesson.id);
  } catch (e) {
    // Ignore storage issues
  }

  const categoryUrl = `/learn/${category.slug}`;
  const prevLessonUrl = lesson.prevLesson ? `/learn/${category.slug}/${lesson.prevLesson.slug}` : null;
  const nextLessonUrl = lesson.nextLesson ? `/learn/${category.slug}/${lesson.nextLesson.slug}` : null;

  return `
    <div class="learn-page-wrapper learn-lesson-view" data-lesson-id="${lesson.id}" data-category-slug="${category.slug}">
      
      <!-- 1. Top Reading Progress Indicator (Pinned at top of viewport) -->
      <div class="lesson-reading-progress-bar" id="reading-progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>

      <!-- 2. Sticky Reading Sub-Navbar (Appears as user scrolls) -->
      <header class="lesson-sticky-subnav" id="lesson-sticky-subnav" aria-label="Lesson Navigation Bar">
        <div class="container lesson-subnav-container">
          <div class="lesson-subnav-left">
            <a href="${categoryUrl}" class="lesson-subnav-cat-link">
              <span class="subnav-cat-icon">${ICONS.bookOpen}</span>
              <span class="subnav-cat-name">${categoryMeta.name}</span>
            </a>
            <span class="subnav-divider">/</span>
            <span class="lesson-subnav-title" id="subnav-title">${lessonMeta.title}</span>
          </div>

          <div class="lesson-subnav-center">
            <div class="subnav-mini-progress">
              <span class="subnav-chapter-indicator">${ui.currentChapter} 0${lesson.lessonIndex + 1}/0${lesson.totalLessons}</span>
              <span class="subnav-progress-divider" aria-hidden="true">·</span>
              <span class="subnav-progress-text" id="subnav-progress-pct">0% ${ui.completed}</span>
            </div>
          </div>

          <div class="lesson-subnav-right">
            <!-- Bookmark Button -->
            <button type="button" class="lesson-action-btn ${isBookmarked ? 'active' : ''}" id="sticky-bookmark-btn" aria-label="${ui.bookmark}" title="${ui.bookmark}">
              <span class="btn-icon">${isBookmarked ? ICONS.bookmarkFilled : ICONS.bookmark}</span>
            </button>

            <!-- Share Button -->
            <button type="button" class="lesson-action-btn" id="sticky-share-btn" aria-label="${ui.shareLesson}" title="${ui.shareLesson}">
              <span class="btn-icon">${ICONS.share}</span>
            </button>

            <!-- Inline Language Toggle -->
            <div class="learn-lang-switch">
              <button type="button" class="learn-lang-btn ${isEn ? 'active' : ''}" data-lang="en">EN</button>
              <button type="button" class="learn-lang-btn ${!isEn ? 'active' : ''}" data-lang="np">नेपाली</button>
            </div>
          </div>
        </div>
      </header>

      <!-- 3. Clean Lesson Hero Section -->
      <section class="lesson-hero-section">
        <div class="container">
          
          <!-- Breadcrumbs -->
          <nav class="learn-breadcrumbs" aria-label="Breadcrumb">
            <a href="${ROUTES.HOME}">${ui.breadcrumbHome}</a>
            <span class="sep">/</span>
            <a href="${ROUTES.LEARN}">${ui.breadcrumbLearn}</a>
            <span class="sep">/</span>
            <a href="${categoryUrl}">${categoryMeta.name}</a>
            <span class="sep">/</span>
            <span class="current" aria-current="page">${lessonMeta.title}</span>
          </nav>

          <!-- Module Pill & Category Tag -->
          <div class="lesson-hero-header-badges">
            <a href="${categoryUrl}" class="lesson-category-tag-pill">
              <span>${categoryMeta.name}</span>
            </a>
            <span class="lesson-module-tag-pill">
              ${ui.module} 0${lesson.moduleNumber}: ${isEn ? lesson.moduleTitle : lesson.moduleTitleNp}
            </span>
          </div>

          <!-- Main Lesson Headline -->
          <h1 class="lesson-hero-title" id="lesson-title">${lessonMeta.title}</h1>

          <!-- Concise One-Sentence Summary -->
          <p class="lesson-hero-summary">${lessonMeta.oneLineSummary}</p>

          <!-- Hero Action Buttons & Language Switcher -->
          <div class="lesson-hero-actions-row">
            <div class="hero-actions-left">
              <!-- Bookmark Button -->
              <button type="button" class="btn btn-secondary btn-sm lesson-action-pill ${isBookmarked ? 'bookmarked' : ''}" id="hero-bookmark-btn">
                <span class="btn-icon">${isBookmarked ? ICONS.bookmarkFilled : ICONS.bookmark}</span>
                <span class="btn-text">${isBookmarked ? ui.bookmarked : ui.bookmark}</span>
              </button>

              <!-- Share Button -->
              <button type="button" class="btn btn-secondary btn-sm lesson-action-pill" id="hero-share-btn">
                <span class="btn-icon">${ICONS.share}</span>
                <span class="btn-text">${ui.shareLesson}</span>
              </button>

              <!-- Mark Completed Button -->
              <button type="button" class="btn ${isCompleted ? 'btn-success' : 'btn-outline'} btn-sm lesson-action-pill ${isCompleted ? 'completed' : ''}" id="hero-complete-btn">
                <span class="btn-icon">${isCompleted ? ICONS.checkCircle : ICONS.check}</span>
                <span class="btn-text">${isCompleted ? ui.markLessonIncomplete : ui.markLessonComplete}</span>
              </button>

              <div class="learn-lang-switch">
                <button type="button" class="learn-lang-btn ${isEn ? 'active' : ''}" data-lang="en">EN</button>
                <button type="button" class="learn-lang-btn ${!isEn ? 'active' : ''}" data-lang="np">नेपाली</button>
              </div>
            </div>
          </div>



        </div>
      </section>

      <!-- 4. Two-Column Reading Layout -->
      <section class="lesson-reading-layout">
        <div class="container lesson-reading-grid">

          <!-- Left / Primary Reading Content Area (Max Width ~760px) -->
          <main class="lesson-content-col" id="lesson-main-content">

            <!-- Top Learning Sequence Bar -->
            <nav class="lesson-sequence-bar" aria-label="${ui.learningSequence}">
              ${lesson.prevLesson ? `
                <a href="${prevLessonUrl}" class="seq-nav-btn seq-prev" title="${lesson.prevLesson.title}">
                  <span class="seq-dir">${ICONS.arrowLeft} ${ui.previousLesson}</span>
                  <span class="seq-name">${isEn ? lesson.prevLesson.title : lesson.prevLesson.titleNp}</span>
                </a>
              ` : `
                <div class="seq-nav-btn seq-prev disabled">
                  <span class="seq-dir">${ICONS.arrowLeft} ${ui.previousLesson}</span>
                  <span class="seq-name">${isEn ? 'First Lesson of Pathway' : 'सिकाइ मार्गको पहिलो पाठ'}</span>
                </div>
              `}

              <div class="seq-nav-curr">
                <span class="seq-curr-badge">${ui.currentChapter} 0${lesson.lessonIndex + 1} / 0${lesson.totalLessons}</span>
                <span class="seq-curr-name">${lessonMeta.title}</span>
              </div>

              ${lesson.nextLesson ? `
                <a href="${nextLessonUrl}" class="seq-nav-btn seq-next" title="${lesson.nextLesson.title}">
                  <span class="seq-dir">${ui.nextLesson} ${ICONS.arrowRight}</span>
                  <span class="seq-name">${isEn ? lesson.nextLesson.title : lesson.nextLesson.titleNp}</span>
                </a>
              ` : `
                <div class="seq-nav-btn seq-next disabled">
                  <span class="seq-dir">${ui.nextLesson} ${ICONS.arrowRight}</span>
                  <span class="seq-name">${isEn ? 'Final Lesson' : 'अन्तिम पाठ'}</span>
                </div>
              `}
            </nav>

            <!-- Section 1: Introduction & Core Definition (What is this?) -->
            <article class="lesson-section-block" id="sec-what-is-this">
              <h2 class="lesson-heading-h2">
                <span class="heading-num">01.</span>
                <span>${ui.whatIsThis}</span>
              </h2>
              <div class="lesson-prose">
                <p class="lead-paragraph">${lessonMeta.whatIsThis}</p>
              </div>

            </article>

            <!-- Section 2: Why It Matters & Hidden Costs of Inaction (Why does it matter?) -->
            <article class="lesson-section-block" id="sec-why-it-matters">
              <h2 class="lesson-heading-h2">
                <span class="heading-num">02.</span>
                <span>${ui.whyItMatters}</span>
              </h2>
              <div class="lesson-prose">
                <p>${lessonMeta.whyItMatters}</p>
              </div>

            </article>

            <!-- Section 3: How It Works Step-by-Step (How does it work?) -->
            <article class="lesson-section-block" id="sec-how-it-works">
              <h2 class="lesson-heading-h2">
                <span class="heading-num">03.</span>
                <span>${ui.howItWorks}</span>
              </h2>
              
              <div class="lesson-step-by-step-grid">
                ${(lessonMeta.howItWorks || []).map(step => `
                  <div class="lesson-step-card">
                    <div class="step-card-header">
                      <span class="step-badge">Step 0${step.step}</span>
                      <h4 class="step-title">${step.title}</h4>
                    </div>
                    <p class="step-desc">${step.desc}</p>
                  </div>
                `).join('')}
              </div>
            </article>

            <!-- Section 4: Visual Learning Diagram / Comparison Table -->
            ${lessonMeta.visualDiagram ? `
              <article class="lesson-section-block" id="sec-visual-diagram">
                <h2 class="lesson-heading-h2">
                  <span class="heading-num">04.</span>
                  <span>${ui.visualDiagram}</span>
                </h2>
                
                <div class="lesson-visual-table-wrapper">
                  <table class="lesson-visual-table">
                    ${lessonMeta.visualDiagram.caption ? `<caption>${lessonMeta.visualDiagram.caption}</caption>` : ''}
                    <thead>
                      <tr>
                        ${lessonMeta.visualDiagram.headers.map(h => `<th>${h}</th>`).join('')}
                      </tr>
                    </thead>
                    <tbody>
                      ${lessonMeta.visualDiagram.rows.map(row => `
                        <tr>
                          ${row.map((cell, cIdx) => cIdx === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`).join('')}
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </article>
            ` : ''}

            <!-- Section 5: The Nepal Context Block (How does it apply in Nepal?) -->
            <article class="lesson-section-block" id="sec-nepal-context">
              <div class="nepal-context-card">
                <div class="nepal-context-badge">
                  <span class="flag-icon">${ICONS.nepalFlag}</span>
                  <span>${ui.nepalContext}</span>
                </div>
                <h2 class="nepal-context-title">${ui.howInNepalTitle}</h2>
                <div class="nepal-context-body">
                  <p>${lessonMeta.nepalContext}</p>
                </div>

                <div class="nepal-context-advisory" style="margin-top:var(--space-4);padding-top:var(--space-3);border-top:1px dashed var(--color-border);font-size:var(--text-xs);color:var(--color-text-tertiary);line-height:1.5;">
                  <strong>${isEn ? 'Regulatory Note:' : 'नियमनकारी जानकारी:'}</strong> ${isEn ? 'Statutory tax brackets, regulatory fees, and monetary caps reflect current official practice and are subject to periodic amendment in annual Nepal Finance Acts and NRB circulars. Always verify the latest gazetted directives before financial execution.' : 'कानुनी कर दर, नियमनकारी शुल्क तथा मौद्रिक सीमाहरू वर्तमान आधिकारिक अभ्यासमा आधारित छन् र वार्षिक आर्थिक ऐन तथा राष्ट्र बैंकका परिपत्र अनुसार परिवर्तन हुन सक्छन्। वित्तीय निर्णय लिनुअघि पछिल्लो राजपत्रित निर्देशन हेर्नुहोस्।'}
                </div>
              </div>
            </article>

            <!-- Section 6: Practical Real-World Example in Nepal -->
            ${lessonMeta.practicalScenario ? `
              <article class="lesson-section-block" id="sec-practical-example">
                <h2 class="lesson-heading-h2">
                  <span class="heading-num">06.</span>
                  <span>${ui.practicalExample}</span>
                </h2>

                <div class="practical-scenario-card">
                  <div class="scenario-card-header">
                    <div class="persona-info">
                      <span class="persona-avatar">${ICONS.user}</span>
                      <div>
                        <h4 class="persona-name">${lessonMeta.practicalScenario.persona}</h4>
                        <span class="persona-income">${lessonMeta.practicalScenario.income}</span>
                      </div>
                    </div>
                    <div class="scenario-highlight-badge">
                      <span>${lessonMeta.practicalScenario.metricHighlight}</span>
                    </div>
                  </div>

                  <div class="scenario-body">
                    <div class="scenario-problem">
                      <h5>${isEn ? 'The Situation:' : 'सुरुवाती अवस्था:'}</h5>
                      <p>${lessonMeta.practicalScenario.scenarioText}</p>
                    </div>

                    <div class="scenario-solution">
                      <h5>${isEn ? 'The RisePaisa Strategy:' : 'risePaisa रणनीति र समाधान:'}</h5>
                      <p>${lessonMeta.practicalScenario.solutionText}</p>
                    </div>
                  </div>

                  ${lessonMeta.decisionScenario ? `
                    <div class="lesson-decision-callout">
                      <div class="decision-callout-header">
                        <span class="decision-icon">${ICONS.lightbulb}</span>
                        <h4 class="decision-title">${lessonMeta.decisionScenario.title || (isEn ? 'Practical Decision Scenario' : 'व्यावहारिक निर्णय परिदृश्य')}</h4>
                      </div>
                      <div class="decision-callout-body">
                        ${lessonMeta.decisionScenario.goal ? `<p class="decision-goal"><strong>${isEn ? 'Goal & Dilemma:' : 'लक्ष्य र दुविधा:'}</strong> ${lessonMeta.decisionScenario.goal}</p>` : ''}
                        ${Array.isArray(lessonMeta.decisionScenario.options) && lessonMeta.decisionScenario.options.length > 0 ? `
                          <div class="decision-options-list">
                            ${lessonMeta.decisionScenario.options.map(opt => `
                              <div class="decision-option-item ${opt.recommended ? 'recommended' : ''}">
                                <div class="decision-opt-head">
                                  <span class="decision-opt-title">${opt.option}</span>
                                  <span class="decision-opt-badge ${opt.recommended ? 'badge-rec' : 'badge-alt'}">${opt.verdict || (opt.recommended ? (isEn ? 'Recommended' : 'सिफारिस') : (isEn ? 'Caution / Alternative' : 'वैकल्पिक'))}</span>
                                </div>
                                <p class="decision-opt-desc">${opt.rationale}</p>
                              </div>
                            `).join('')}
                          </div>
                        ` : ''}
                        ${lessonMeta.decisionScenario.takeaway ? `
                          <div class="decision-takeaway-note">
                            <strong>${isEn ? 'Decision Takeaway:' : 'निर्णय निष्कर्ष:'}</strong> ${lessonMeta.decisionScenario.takeaway}
                          </div>
                        ` : ''}
                      </div>
                    </div>
                  ` : ''}
                </div>
              </article>
            ` : ''}

            <!-- Section: Advantages & Limitations -->
            ${((lessonMeta.advantages && lessonMeta.advantages.length > 0) || (lessonMeta.limitations && lessonMeta.limitations.length > 0)) ? `
              <article class="lesson-section-block" id="sec-pros-cons">
                <h2 class="lesson-heading-h2">
                  <span class="heading-num">07.</span>
                  <span>${isEn ? 'Advantages & Limitations' : 'फाइदाहरू र सीमाहरू (जोखिम)'}</span>
                </h2>
                <div class="lesson-proscons-grid">
                  ${lessonMeta.advantages && lessonMeta.advantages.length > 0 ? `
                    <div class="lesson-pros-card">
                      <div class="proscons-card-header">
                        <span class="proscons-badge badge-pro">${ICONS.check} ${isEn ? 'Key Advantages' : 'मुख्य फाइदाहरू'}</span>
                      </div>
                      <ul class="proscons-list">
                        ${lessonMeta.advantages.map(adv => `
                          <li>
                            <span class="bullet-check">${ICONS.check}</span>
                            <span>${adv}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  ${lessonMeta.limitations && lessonMeta.limitations.length > 0 ? `
                    <div class="lesson-cons-card">
                      <div class="proscons-card-header">
                        <span class="proscons-badge badge-con">${ICONS.alertTriangle} ${isEn ? 'Limitations & Risks' : 'सीमा तथा जोखिमहरू'}</span>
                      </div>
                      <ul class="proscons-list">
                        ${lessonMeta.limitations.map(lim => `
                          <li>
                            <span class="bullet-alert">${ICONS.alertTriangle}</span>
                            <span>${lim}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              </article>
            ` : ''}

            <!-- Section: Who Should Use This vs Who Should Avoid This -->
            ${lessonMeta.targetAudience ? `
              <article class="lesson-section-block" id="sec-target-audience">
                <h2 class="lesson-heading-h2">
                  <span class="heading-num">08.</span>
                  <span>${isEn ? 'Who Should Use This (And Who Should Avoid It)' : 'कसका लागि उपयुक्त (र कसले सचेत रहने)'}</span>
                </h2>
                <div class="lesson-target-audience-card">
                  <div class="audience-grid">
                    <div class="audience-col audience-use">
                      <div class="audience-col-header">
                        <span class="audience-badge badge-use">${ICONS.checkCircle} ${isEn ? 'Ideal For:' : 'यसका लागि उपयुक्त:'}</span>
                      </div>
                      <ul class="audience-list">
                        ${(lessonMeta.targetAudience.whoShouldUse || []).map(item => `
                          <li>
                            <span class="aud-icon aud-check">${ICONS.check}</span>
                            <span>${item}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                    <div class="audience-col audience-avoid">
                      <div class="audience-col-header">
                        <span class="audience-badge badge-avoid">${ICONS.x} ${isEn ? 'Caution / Avoid If:' : 'सचेत रहने वा नगर्ने अवस्था:'}</span>
                      </div>
                      <ul class="audience-list">
                        ${(lessonMeta.targetAudience.whoShouldAvoid || []).map(item => `
                          <li>
                            <span class="aud-icon aud-x">${ICONS.x}</span>
                            <span>${item}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ` : ''}

            <!-- Section 9: Financial Formula Block & Worked Calculation -->
            ${lessonMeta.formula ? `
              <article class="lesson-section-block" id="sec-financial-formula">
                <h2 class="lesson-heading-h2">
                  <span class="heading-num">09.</span>
                  <span>Financial Formula & Step-by-Step Calculation</span>
                </h2>

                <div class="financial-formula-card">
                  <div class="formula-card-top">
                    <span class="formula-kicker">Mathematical Model</span>
                    <h3 class="formula-name">${lessonMeta.formula.name}</h3>
                    <div class="formula-equation-display">
                      ${renderLessonFormula(lessonMeta.formula.equation)}
                    </div>
                  </div>

                  ${lessonMeta.formula.variables ? `
                    <div class="formula-variables-block">
                      <h4 class="variables-title">Variable Breakdown:</h4>
                      <div class="variables-grid">
                        ${lessonMeta.formula.variables.map(v => `
                          <div class="variable-item">
                            <span class="var-symbol">${renderLessonFormula(v.symbol)}</span>
                            <div class="var-details">
                              <strong class="var-name">${v.name}</strong>
                              <p class="var-desc">${v.desc || v.meaning || ''}</p>
                            </div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}

                  <div class="formula-worked-example">
                    <h4 class="example-title">Worked Nepal Scenario:</h4>
                    <p class="example-math">${lessonMeta.formula.exampleCalculation}</p>
                  </div>

                  <div class="formula-card-footer">
                    <a href="/${lessonMeta.formula.shortcutCalcSlug}" class="btn btn-primary btn-sm">
                      <span class="btn-icon">${ICONS.calculator}</span>
                      <span>${lessonMeta.formula.shortcutCalcName}</span>
                    </a>
                  </div>
                </div>
              </article>
            ` : ''}

            <!-- Section 10: Common Mistakes to Avoid in Nepal -->
            ${(lessonMeta.commonMistakes && lessonMeta.commonMistakes.length > 0) ? `
              <article class="lesson-section-block" id="sec-common-mistakes">
                <h2 class="lesson-heading-h2">
                  <span class="heading-num">10.</span>
                  <span>${ui.commonMistakes}</span>
                </h2>

                <div class="mistakes-comparison-list">
                  ${lessonMeta.commonMistakes.map(m => `
                    <div class="mistake-comparison-card">
                      <div class="mistake-side mistake-wrong">
                        <span class="mistake-tag">${ICONS.x} ${ui.wrongWay}</span>
                        <p class="mistake-text">${m.mistake}</p>
                      </div>
                      <div class="mistake-side mistake-right">
                        <span class="mistake-tag">${ICONS.check} ${ui.rightWay}</span>
                        <p class="mistake-text">${m.correct}</p>
                      </div>
                      <div class="mistake-explanation">
                        <span>${isEn ? 'Why:' : 'कारण:'}</span> ${m.explanation}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </article>
            ` : ''}

            <!-- Section 11: Downloadable Educational Resources -->
            ${(lesson.downloadableResources && lesson.downloadableResources.length > 0) ? `
              <article class="lesson-section-block" id="sec-resources">
                <h2 class="lesson-heading-h2">
                  <span class="heading-num">13.</span>
                  <span>${ui.downloadableResourcesTitle}</span>
                </h2>

                <div class="lesson-resources-grid">
                  ${lesson.downloadableResources.map(rawRes => {
                    const res = resolveDownloadableResource(rawRes, lesson.categorySlug);
                    return `
                      <div class="lesson-resource-card">
                        <div class="res-card-icon">${ICONS.download}</div>
                        <div class="res-card-info">
                          <span class="res-card-type">${rawRes.type || 'Resource'} · ${rawRes.size || 'Direct Download'}</span>
                          <h4 class="res-card-title">${rawRes.title}</h4>
                        </div>
                        <a href="${res.href}" class="btn btn-primary btn-sm res-download-btn" ${res.downloadAttr} ${res.targetAttr} data-resource-title="${(rawRes.title || '').replace(/"/g, '&quot;')}">
                          <span>${isEn ? 'Download' : 'डाउनलोड'}</span>
                          ${ICONS.download}
                        </a>
                      </div>
                    `;
                  }).join('')}
                </div>
              </article>
            ` : ''}

            <!-- Section 14: Frequently Asked Questions (Interactive Accordions) -->
            ${(lessonMeta.faqs && lessonMeta.faqs.length > 0) ? `
              <article class="lesson-section-block" id="sec-faqs">
                <h2 class="lesson-heading-h2">
                  <span class="heading-num">14.</span>
                  <span>${ui.frequentlyAskedQuestions}</span>
                </h2>

                <div class="lesson-faq-accordions">
                  ${lessonMeta.faqs.map((faq, fIdx) => `
                    <div class="lesson-faq-item" data-faq-id="${fIdx}">
                      <button type="button" class="lesson-faq-question" aria-expanded="false">
                        <span>${faq.q}</span>
                        <span class="faq-toggle-icon">${ICONS.chevronDown}</span>
                      </button>
                      <div class="lesson-faq-answer">
                        <p>${faq.a}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </article>
            ` : ''}


            <!-- Bottom Sequence Navigation Bar -->
            <nav class="lesson-sequence-bar lesson-seq-bottom" aria-label="${ui.learningSequence}">
              ${lesson.prevLesson ? `
                <a href="${prevLessonUrl}" class="seq-nav-btn seq-prev" title="${lesson.prevLesson.title}">
                  <span class="seq-dir">${ICONS.arrowLeft} ${ui.previousLesson}</span>
                  <span class="seq-name">${isEn ? lesson.prevLesson.title : lesson.prevLesson.titleNp}</span>
                </a>
              ` : `
                <div class="seq-nav-btn seq-prev disabled">
                  <span class="seq-dir">${ICONS.arrowLeft} ${ui.previousLesson}</span>
                  <span class="seq-name">${isEn ? 'First Lesson of Pathway' : 'सिकाइ मार्गको पहिलो पाठ'}</span>
                </div>
              `}

              ${lesson.nextLesson ? `
                <a href="${nextLessonUrl}" class="seq-nav-btn seq-next" title="${lesson.nextLesson.title}">
                  <span class="seq-dir">${ui.nextLesson} ${ICONS.arrowRight}</span>
                  <span class="seq-name">${isEn ? lesson.nextLesson.title : lesson.nextLesson.titleNp}</span>
                </a>
              ` : `
                <div class="seq-nav-btn seq-next disabled">
                  <span class="seq-dir">${ui.nextLesson} ${ICONS.arrowRight}</span>
                  <span class="seq-name">${isEn ? 'Final Lesson' : 'अन्तिम पाठ'}</span>
                </div>
              `}
            </nav>

          </main>

        </div>
      </section>

    </div>
  `;
}

/**
 * Initialize interactions for the individual lesson page
 * @param {string} categorySlug
 * @param {string} lessonSlug
 */
export function initLearnLessonPage(categorySlug, lessonSlug) {
  const lesson = getLessonBySlug(categorySlug, lessonSlug);
  if (!lesson) return;

  // Initialize interactive glossary tooltips
  initGlossaryTooltips();

  const lang = getLearnLanguage();
  const ui = LEARN_UI[lang] || LEARN_UI.en;
  const lessonMeta = lesson[lang] || lesson.en;

  // 1. Update Document Title, Canonical URL and SEO Meta
  const pageTitle = `${lessonMeta.title} | ${lesson.category.en.name} | risePaisa Nepal`;
  document.title = pageTitle;

  // 2. Reading Progress Bar & Sticky Header Listener (RAF Throttled & Zero-Reflow)
  const progressBar = document.getElementById('reading-progress-bar');
  const stickySubnav = document.getElementById('lesson-sticky-subnav');
  const progressPctText = document.getElementById('subnav-progress-pct');
  const mainContent = document.getElementById('lesson-main-content');

  let contentTop = 0;
  let contentHeight = 0;
  let lastPct = -1;
  let isStickyVisible = false;
  let ticking = false;

  const updateGeometry = () => {
    if (!mainContent) return;
    const rect = mainContent.getBoundingClientRect();
    contentTop = rect.top + (window.scrollY || window.pageYOffset);
    contentHeight = rect.height;
  };
  updateGeometry();

  const updateScrollProgress = () => {
    if (!mainContent) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Show sticky bar once user scrolls past hero
    if (stickySubnav) {
      const shouldBeSticky = scrollY > 300;
      if (shouldBeSticky !== isStickyVisible) {
        isStickyVisible = shouldBeSticky;
        stickySubnav.classList.toggle('visible', shouldBeSticky);
      }
    }

    // Calculate percentage read through main content
    const totalScrollable = contentHeight - windowHeight + 100;
    if (totalScrollable > 0) {
      const currentScroll = Math.max(0, scrollY - (contentTop - 120));
      const pct = Math.min(100, Math.max(0, Math.round((currentScroll / totalScrollable) * 100)));

      if (pct !== lastPct) {
        lastPct = pct;
        if (progressBar) {
          progressBar.style.width = `${pct}%`;
          progressBar.setAttribute('aria-valuenow', pct);
        }
        if (progressPctText) {
          progressPctText.textContent = `${pct}% ${ui.completed}`;
        }
        const railBadge = document.getElementById('rail-progress-badge');
        if (railBadge) {
          railBadge.textContent = `${pct}%`;
        }
      }
    }
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateGeometry, { passive: true });
  updateScrollProgress();

  // 3. Initialize Notion-Style Dynamic Outline
  initNotionOutline({
    contentSelector: '#lesson-main-content',
    headingSelector: 'h1, h2, h3',
    offset: 85,
    title: ui.tableOfContents || (lang === 'np' ? 'विषयसूची' : 'Outline')
  });

  // 4. Interactive Bookmark Toggle
  const bookmarkButtons = [
    document.getElementById('hero-bookmark-btn'),
    document.getElementById('sticky-bookmark-btn')
  ].filter(Boolean);

  bookmarkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      let bookmarkedArr = [];
      try {
        bookmarkedArr = JSON.parse(localStorage.getItem('rp_learn_bookmarks') || '[]');
      } catch (e) {}

      const idx = bookmarkedArr.indexOf(lesson.id);
      let isNowBookmarked = false;
      if (idx > -1) {
        bookmarkedArr.splice(idx, 1);
        isNowBookmarked = false;
      } else {
        bookmarkedArr.push(lesson.id);
        isNowBookmarked = true;
      }

      localStorage.setItem('rp_learn_bookmarks', JSON.stringify(bookmarkedArr));

      // Update all bookmark buttons
      bookmarkButtons.forEach(b => {
        b.classList.toggle('bookmarked', isNowBookmarked);
        b.classList.toggle('active', isNowBookmarked);
        const iconSpan = b.querySelector('.btn-icon');
        if (iconSpan) iconSpan.innerHTML = isNowBookmarked ? ICONS.bookmarkFilled : ICONS.bookmark;
        const textSpan = b.querySelector('.btn-text');
        if (textSpan) textSpan.textContent = isNowBookmarked ? ui.bookmarked : ui.bookmark;
      });
    });
  });

  // 5. Interactive Mark as Completed Toggle
  const completeButtons = [
    document.getElementById('hero-complete-btn')
  ].filter(Boolean);

  completeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      let completedArr = [];
      try {
        completedArr = JSON.parse(localStorage.getItem('rp_learn_completed_lessons') || '[]');
      } catch (e) {}

      const idx = completedArr.indexOf(lesson.id);
      let isNowComplete = false;
      if (idx > -1) {
        completedArr.splice(idx, 1);
        isNowComplete = false;
      } else {
        completedArr.push(lesson.id);
        isNowComplete = true;
      }

      localStorage.setItem('rp_learn_completed_lessons', JSON.stringify(completedArr));

      // Update UI across all complete buttons
      completeButtons.forEach(b => {
        b.classList.toggle('completed', isNowComplete);
        b.classList.toggle('btn-success', isNowComplete);
        if (!isNowComplete) {
          b.classList.add('btn-outline');
        } else {
          b.classList.remove('btn-primary', 'btn-outline', 'btn-secondary');
        }

        const iconSpan = b.querySelector('.btn-icon');
        if (iconSpan) iconSpan.innerHTML = isNowComplete ? ICONS.checkCircle : ICONS.check;
        const textSpan = b.querySelector('.btn-text') || b.querySelector('span:not(.btn-icon)');
        if (textSpan) textSpan.textContent = isNowComplete ? ui.markLessonIncomplete : ui.markLessonComplete;
      });
    });
  });

  // 7. Interactive Share Button (Web Share API or Clipboard Toast)
  const shareButtons = [
    document.getElementById('hero-share-btn'),
    document.getElementById('sticky-share-btn')
  ].filter(Boolean);

  shareButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const shareData = {
        title: pageTitle,
        text: lessonMeta.oneLineSummary,
        url: window.location.href
      };

      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          return;
        } catch (e) {
          // User dismissed or unsupported, fallback to clipboard
        }
      }

      // Clipboard fallback
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(window.location.href);
          showToast(ui.linkCopied);
        } catch (e) {
          showToast('URL: ' + window.location.href);
        }
      } else {
        showToast(ui.linkCopied);
      }
    });
  });

  // 8. FAQ Accordion Toggle (Smooth CSS max-height & opacity transition)
  const faqItems = Array.from(document.querySelectorAll('.lesson-faq-item'));
  faqItems.forEach(item => {
    const qBtn = item.querySelector('.lesson-faq-question');
    const aBox = item.querySelector('.lesson-faq-answer');
    if (!qBtn || !aBox) return;

    qBtn.addEventListener('click', () => {
      const isExpanded = qBtn.getAttribute('aria-expanded') === 'true';
      qBtn.setAttribute('aria-expanded', !isExpanded);
      aBox.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
      item.classList.toggle('active', !isExpanded);
    });
  });

  // 9. Language Switcher Buttons Listener
  const langBtns = Array.from(document.querySelectorAll('.learn-lang-btn'));
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetLang = btn.getAttribute('data-lang');
      setLearnLanguage(targetLang);
      // Re-render lesson page seamlessly in current place
      const appEl = document.getElementById('app');
      if (appEl) {
        appEl.innerHTML = renderLearnLessonPage(categorySlug, lessonSlug);
        initLearnLessonPage(categorySlug, lessonSlug);
      }
    });
  });

  // 10. Downloadable Resources Toast Feedback
  document.querySelectorAll('.res-download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-resource-title') || 'Educational Resource';
      showToast(isEn ? `📥 Download started: ${title}` : `📥 डाउनलोड सुरु भयो: ${title}`);
    });
  });

  // Return unmount cleanup function to prevent memory leaks and orphaned scroll listeners
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', updateGeometry);
  };
}

// ── Smart Resource Download Resolver ──────────────────────
function resolveDownloadableResource(res, categorySlug = '') {
  const title = (res.title || '').toLowerCase();
  const href = (res.href || '').trim();

  // If already a direct download link
  if (href.startsWith('assets/downloads/') || href.startsWith('/assets/downloads/')) {
    const cleanHref = href.startsWith('/') ? href.slice(1) : href;
    const isHtml = cleanHref.endsWith('.html');
    const filename = cleanHref.split('/').pop();
    return {
      href: cleanHref,
      downloadAttr: isHtml ? '' : `download="${filename}"`,
      targetAttr: isHtml ? 'target="_blank" rel="noopener noreferrer"' : '',
      title: res.title
    };
  }

  // Smart contextual mapping to real assets/downloads/ files
  let targetFile = 'nepse-first-time-investor-checklist.html';

  if (title.includes('budget') || title.includes('बजेट') || title.includes('saving') || title.includes('50/30/20') || title.includes('expense') || title.includes('festival')) {
    targetFile = 'nepal-personal-budget-planner.csv';
  } else if (title.includes('cash flow') || title.includes('net worth') || title.includes('ledger') || title.includes('सम्पत्ति') || title.includes('pay yourself first') || title.includes('audit tracker')) {
    targetFile = 'nepal-cash-flow-tracker.csv';
  } else if (title.includes('tax') || title.includes('कर') || title.includes('pan') || title.includes('tds') || title.includes('salary') || title.includes('d-01') || title.includes('capital gains')) {
    targetFile = 'nepal-salary-tax-deductions-checklist.html';
  } else if (title.includes('sip') || title.includes('mutual fund') || title.includes('म्युचुअल') || title.includes('compound') || title.includes('sebon licensed') || title.includes('rebalancing')) {
    targetFile = 'nepal-sip-mutual-fund-checklist.html';
  } else if (title.includes('ipo') || title.includes('prospectus') || title.includes('allotment') || title.includes('meroshare') || title.includes('c-asba')) {
    targetFile = 'nepal-ipo-application-checklist.html';
  } else if (title.includes('demat') || title.includes('cdsc') || title.includes('transfer') || title.includes('डिम्याट') || title.includes('हक हस्तान्तरण') || title.includes('transmission')) {
    targetFile = 'cdsc-demat-transfer-checklist.html';
  } else if (title.includes('loan') || title.includes('base rate') || title.includes('कर्जा') || title.includes('emi') || title.includes('credit card') || title.includes('spread') || title.includes('bounce') || title.includes('fir')) {
    targetFile = 'commercial-bank-loan-comparison-worksheet.csv';
  } else if (title.includes('fd') || title.includes('debenture') || title.includes('fixed deposit') || title.includes('ऋणपत्र') || title.includes('मुद्दती') || title.includes('cib') || title.includes('deposit guarantee') || title.includes('dcgf') || title.includes('migrant worker')) {
    targetFile = 'nepal-bank-rates-debenture-guide.html';
  } else if (title.includes('insurance') || title.includes('hlv') || title.includes('बीमा') || title.includes('claim') || title.includes('health') || title.includes('critical illness')) {
    targetFile = 'nepal-insurance-claim-checklist.html';
  } else if (title.includes('company') || title.includes('ocr') || title.includes('कम्पनी') || title.includes('compliance') || title.includes('business') || title.includes('registration')) {
    targetFile = 'nepal-company-registration-compliance-checklist.html';
  } else if (title.includes('cyber') || title.includes('payment') || title.includes('digital') || title.includes('fraud') || title.includes('safety') || title.includes('सुरक्षा') || title.includes('atm') || title.includes('qr')) {
    targetFile = 'nepal-digital-payment-safety-guide.html';
  } else if (title.includes('reading') || title.includes('book') || title.includes('पुस्तक') || title.includes('jargon') || title.includes('dictionary') || title.includes('glossary')) {
    targetFile = 'financial-jargon-pocket-guide.html';
  } else if (categorySlug === 'investing' || categorySlug === 'nepse') {
    targetFile = 'nepse-first-time-investor-checklist.html';
  } else if (categorySlug === 'taxation-nepal') {
    targetFile = 'nepal-salary-tax-deductions-checklist.html';
  } else if (categorySlug === 'banking-loans') {
    targetFile = 'commercial-bank-loan-comparison-worksheet.csv';
  }

  const resolvedHref = `assets/downloads/${targetFile}`;
  const isHtml = targetFile.endsWith('.html');

  return {
    href: resolvedHref,
    downloadAttr: isHtml ? '' : `download="${targetFile}"`,
    targetAttr: isHtml ? 'target="_blank" rel="noopener noreferrer"' : '',
    title: res.title
  };
}

// ── Toast Notification Helper ──────────────────────────────
function showToast(message) {
  let toast = document.getElementById('rp-lesson-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'rp-lesson-toast';
    toast.className = 'lesson-toast-notification';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.__lessonToastTimer);
  window.__lessonToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ==============================================
// risePaisa - Learn Academy Landing Page (/learn)
// Redesigned: 5-Tab Platform Architecture
// Progressive Disclosure | Accordion Categories | Goal Journeys
// Apple-Inspired Minimalist | Bilingual (EN / NP)
// ==============================================

import {
  LEARN_CATEGORIES,
  getLearnLanguage,
  setLearnLanguage,
  LEARN_UI,
  POPULAR_GUIDES,
  GLOSSARY_PREVIEW,
  FREE_RESOURCES,
  CONTINUE_LEARNING_DEFAULT,
  FINANCE_JOURNEYS
} from '../data/learn.js';
import { getResources } from '../data/resources.js';
import { ROUTES } from '../routes.js';
import { ICONS, setPageMeta } from '../components.js';

// ── SVG Helpers ─────────────────────────────────
const BOOKMARK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;
const BOOKMARK_FILLED_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;
const DOWNLOAD_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
const CALC_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></svg>`;
const CHEVRON_DOWN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
const CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
const MAP_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>`;
const BOOK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
const RESOURCE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
const GLOSSARY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
const PROGRESS_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
const TARGET_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;

// ── Category Group Map ───────────────────────────
const CATEGORY_GROUPS = {
  en: [
    { id: 'foundation', label: 'Foundation', emoji: '🏗️', slugs: ['personal-finance', 'economics'] },
    { id: 'markets', label: 'Markets & Investing', emoji: '📈', slugs: ['nepse', 'investing', 'mutual-funds', 'ipo'] },
    { id: 'banking', label: 'Banking & Debt', emoji: '🏦', slugs: ['banking', 'loans'] },
    { id: 'tax', label: 'Tax & Protection', emoji: '🛡️', slugs: ['taxation', 'insurance'] },
    { id: 'advanced', label: 'Specialized Topics', emoji: '🚀', slugs: ['retirement-planning', 'digital-payments', 'business'] }
  ],
  np: [
    { id: 'foundation', label: 'जग (Foundation)', emoji: '🏗️', slugs: ['personal-finance', 'economics'] },
    { id: 'markets', label: 'बजार र लगानी', emoji: '📈', slugs: ['nepse', 'investing', 'mutual-funds', 'ipo'] },
    { id: 'banking', label: 'बैंकिङ र ऋण', emoji: '🏦', slugs: ['banking', 'loans'] },
    { id: 'tax', label: 'कर र सुरक्षा', emoji: '🛡️', slugs: ['taxation', 'insurance'] },
    { id: 'advanced', label: 'उन्नत विषयहरू', emoji: '🚀', slugs: ['retirement-planning', 'digital-payments', 'business'] }
  ]
};

// ── Journey Icons ────────────────────────────────
const JOURNEY_ICON_MAP = {
  trendingUp: ICONS.trendingUp || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  wallet: ICONS.wallet || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  shield: ICONS.shield || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  home: ICONS.home || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  barChart: ICONS.chartBar || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
};

function getJourneyIcon(iconKey) {
  return JOURNEY_ICON_MAP[iconKey] || TARGET_ICON;
}

function getCategoryIcon(iconKey) {
  const iconMap = {
    wallet: ICONS.wallet || ICONS.target,
    trending: ICONS.trendingUp || ICONS.target,
    'trending-up': ICONS.trendingUp || ICONS.target,
    trendingUp: ICONS.trendingUp || ICONS.target,
    chart: ICONS.chartBar || ICONS.target,
    'chart-bar': ICONS.chartBar || ICONS.target,
    chartBar: ICONS.chartBar || ICONS.target,
    building: ICONS.building || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1"/></svg>`,
    receipt: ICONS.receipt || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8M8 11h8M8 15h4"/></svg>`,
    shield: ICONS.shield,
    'shield-check': ICONS.shieldCheck || ICONS.shield,
    shieldCheck: ICONS.shieldCheck || ICONS.shield,
    handCoins: ICONS.handCoins || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L16 13"/><circle cx="18" cy="6" r="3"/></svg>`,
    smartphone: ICONS.smartphone || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    briefcase: ICONS.briefcase || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    globe: ICONS.globe || ICONS.compass,
    checkCircle: ICONS.checkCircle || ICONS.check,
    umbrella: ICONS.umbrella || ICONS.shield,
    book: ICONS.book,
    calculator: CALC_ICON,
    target: ICONS.target,
  };
  return iconMap[iconKey] || ICONS.bookOpen;
}

// ── Language Toggle ──────────────────────────────
export function renderLanguageToggle(lang) {
  return `
    <div class="learn-lang-switch" role="group" aria-label="Select academy language">
      <button type="button"
              class="learn-lang-btn ${lang === 'en' ? 'active' : ''}"
              data-lang="en"
              aria-pressed="${lang === 'en'}"
              title="Switch to English">
        EN
      </button>
      <button type="button"
              class="learn-lang-btn ${lang === 'np' ? 'active' : ''}"
              data-lang="np"
              aria-pressed="${lang === 'np'}"
              title="नेपाली भाषामा पढ्नुहोस्">
        नेपाली
      </button>
    </div>
  `;
}

// ═══════════════════════════════════════════════
// TAB 1 - START HERE (Roadmap + Goal Journeys)
// ═══════════════════════════════════════════════
function renderRoadmapTab(lang, ui) {
  // Journey type icon
  const journeyTypeIcon = {
    lesson: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12"><path d="M2 2h12v12H2z"/><path d="M5 6h6M5 9h4"/></svg>`,
    guide: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12"><path d="M3 2h10v12H3zM6 6h4M6 9h4"/></svg>`,
    calculator: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12"><rect x="2" y="1" width="12" height="14" rx="2"/><path d="M5 4h6M5 8h2M9 8h2M5 11h2M9 11h2"/></svg>`,
    resource: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12"><path d="M9 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6L9 1zm0 0v5h5"/></svg>`
  };

  return `
    <div class="learn-tab-panel" id="tab-roadmap" role="tabpanel" aria-labelledby="tab-btn-roadmap">

      <!-- Where to Start Banner -->
      <div class="learn-start-banner">
        <div class="learn-start-banner-icon" aria-hidden="true">${TARGET_ICON}</div>
        <div class="learn-start-banner-text">
          <h2>${lang === 'np' ? 'कहाँबाट सुरु गर्ने?' : 'Where should I start?'}</h2>
          <p>${lang === 'np' ? 'आफ्नो वित्तीय लक्ष्य रोज्नुहोस् र हामी तपाईंलाई सुरुवाती विन्दुदेखि व्यावहारिक कार्यान्वयनसम्म डोर्‍याउनेछौँ।' : 'Choose your financial goal and we\'ll guide you step-by-step from zero to practical execution in Nepal.'}</p>
        </div>
      </div>

      <!-- Goal-Based Journey Selector -->
      <div class="learn-section-header-sm">
        <span class="learn-flow-kicker">${lang === 'np' ? '१ · लक्ष्य छान्नुहोस्' : '1 · Choose a goal'}</span>
        <h3 class="learn-section-label">${lang === 'np' ? 'तपाईंको लक्ष्य के हो?' : 'What is your financial goal?'}</h3>
      </div>

      <div class="learn-journeys-grid" role="list">
        ${(FINANCE_JOURNEYS || []).map((journey, idx) => {
          const title = journey.title[lang] || journey.title.en;
          const tagline = journey.tagline[lang] || journey.tagline.en;
          return `
            <button type="button"
                    class="learn-journey-card${idx === 0 ? ' active' : ''}"
                    data-journey-id="${journey.id}"
                    role="listitem"
                    aria-pressed="${idx === 0}"
                    aria-label="${title}">
              <div class="learn-journey-card-icon" aria-hidden="true" style="color: ${journey.color}">
                ${getJourneyIcon(journey.icon)}
              </div>
              <div class="learn-journey-card-body">
                <div class="learn-journey-card-title">${title}</div>
                <div class="learn-journey-card-tagline">${tagline}</div>
              </div>
              <div class="learn-journey-card-arrow" aria-hidden="true">${ICONS.arrowRight}</div>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Journey Steps (Dynamic Panel) -->
      ${(FINANCE_JOURNEYS || []).map((journey, idx) => {
        const title = journey.title[lang] || journey.title.en;
        return `
          <div class="learn-journey-steps-panel${idx === 0 ? ' active' : ''}"
               id="journey-${journey.id}"
               aria-hidden="${idx !== 0}">
            <div class="learn-journey-steps-header">
              <div class="learn-journey-steps-title-row">
                <div class="learn-journey-steps-icon" aria-hidden="true" style="color: ${journey.color}">
                  ${getJourneyIcon(journey.icon)}
                </div>
                <div>
                  <span class="learn-flow-kicker">${lang === 'np' ? '२ · तपाईंको मार्ग' : '2 · Your pathway'}</span>
                  <h4>${title}</h4>
                </div>
              </div>
              <a href="${ROUTES.LEARN_CATEGORY ? ROUTES.LEARN_CATEGORY(journey.categorySlug) : `/learn/${journey.categorySlug}`}"
                 class="learn-journey-steps-cta">
                ${lang === 'np' ? 'पूर्ण यात्रा' : 'Full Pathway'} ${ICONS.arrowRight}
              </a>
            </div>
            <div class="learn-journey-steps-track" role="list">
              ${journey.steps.map((step, si) => {
                const stepTitle = step.title[lang] || step.title.en;
                const typeIcon = journeyTypeIcon[step.type] || journeyTypeIcon.lesson;
                let stepHref = '#';
                if (step.type === 'lesson' && step.categorySlug && step.slug) {
                  stepHref = ROUTES.LEARN_LESSON ? ROUTES.LEARN_LESSON(step.categorySlug, step.slug) : `/learn/${step.categorySlug}/${step.slug}`;
                } else if (step.type === 'guide' && step.slug) {
                  stepHref = `/learn/guides/${step.slug}`;
                } else if (step.type === 'calculator' && step.slug) {
                  stepHref = `/calculators/${step.slug}`;
                } else if (step.type === 'resource' && step.slug) {
                  stepHref = `/resources/${step.slug}`;
                }
                return `
                  <a href="${stepHref}" class="learn-journey-step" role="listitem">
                    <div class="learn-journey-step-num">${step.number}</div>
                    <div class="learn-journey-step-connector${si < journey.steps.length - 1 ? '' : ' last'}" aria-hidden="true"></div>
                    <div class="learn-journey-step-body">
                      <div class="learn-journey-step-meta">
                        <span class="learn-journey-step-type-badge">${typeIcon} ${step.type}</span>
                      </div>
                      <div class="learn-journey-step-title">${stepTitle}</div>
                    </div>
                    <div class="learn-journey-step-arrow" aria-hidden="true">${ICONS.arrowRight}</div>
                  </a>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }).join('')}

    </div>
  `;
}

// ═══════════════════════════════════════════════
// TAB 2 - BROWSE TOPICS (Grouped Accordions)
// ═══════════════════════════════════════════════
function renderBrowseTab(lang, ui) {
  const groups = CATEGORY_GROUPS[lang] || CATEGORY_GROUPS.en;

  // Build a slug→category map for quick lookup
  const catMap = {};
  (LEARN_CATEGORIES || []).forEach(cat => { catMap[cat.slug] = cat; });

  // Render category accordion content
  function renderCategoryLessons(cat) {
    const catData = cat[lang] || cat.en;
    const lessons = [];
    (cat.roadmap || []).forEach(module => {
      (module.lessons || []).forEach(lesson => {
        lessons.push({ lesson, module });
      });
    });
    const visibleLessons = lessons.slice(0, 6);
    const hasMore = lessons.length > 6;

    return `
      <div class="learn-accordion-cat-overview">
        <p class="learn-accordion-cat-desc">${catData.shortDesc || ''}</p>
        <div class="learn-accordion-cat-meta">
          <span>${ICONS.bookOpen} <strong>${cat.lessonCount || lessons.length}</strong> ${lang === 'np' ? 'पाठहरू' : 'Lessons'}</span>
        </div>
      </div>
      <div class="learn-accordion-lessons-grid">
        ${visibleLessons.map(({ lesson, module }) => {
          const lessonData = lesson[lang] || lesson.en;
          const moduleData = module[lang] || module.en;
          const lessonHref = ROUTES.LEARN_LESSON ? ROUTES.LEARN_LESSON(cat.slug, lesson.slug) : `/learn/${cat.slug}/${lesson.slug}`;
          return `
            <a href="${lessonHref}" class="learn-accordion-lesson-card" data-type="${(lesson.type || 'lesson').toLowerCase()}">
              <div class="learn-accordion-lesson-top">
                <span class="learn-content-type-badge badge-${(lesson.type || 'lesson').toLowerCase()}">${lesson.type || 'Lesson'}</span>
              </div>
              <div class="learn-accordion-lesson-title">${lessonData?.title || ''}</div>
              <div class="learn-accordion-lesson-summary">${lessonData?.summary || ''}</div>
              <div class="learn-accordion-lesson-module">${moduleData?.title || ''}</div>
            </a>
          `;
        }).join('')}
      </div>
      ${hasMore ? `
        <div class="learn-accordion-view-more">
          <a href="${ROUTES.LEARN_CATEGORY ? ROUTES.LEARN_CATEGORY(cat.slug) : `/learn/${cat.slug}`}" class="learn-view-more-btn">
            ${lang === 'np' ? `${lessons.length - 6} थप पाठहरू हेर्नुहोस्` : `View All ${lessons.length} Lessons`}
            ${ICONS.arrowRight}
          </a>
        </div>
      ` : `
        <div class="learn-accordion-view-more">
          <a href="${ROUTES.LEARN_CATEGORY ? ROUTES.LEARN_CATEGORY(cat.slug) : `/learn/${cat.slug}`}" class="learn-view-more-btn">
            ${lang === 'np' ? 'पूर्ण मार्ग हेर्नुहोस्' : 'View Complete Pathway'}
            ${ICONS.arrowRight}
          </a>
        </div>
      `}
    `;
  }

  // Side nav items
  const sideNavItems = groups.map(group => `
    <a href="#group-${group.id}" class="learn-side-nav-link" data-group="${group.id}">
      <span class="learn-side-nav-emoji" aria-hidden="true">${group.emoji}</span>
      <span>${group.label}</span>
    </a>
  `).join('');

  // Accordion groups
  const accordionGroupsHtml = groups.map((group, groupIdx) => {
    const groupCats = group.slugs.map(slug => catMap[slug]).filter(Boolean);
    if (groupCats.length === 0) return '';
    const groupLessonCount = groupCats.reduce((total, cat) => total + (cat.lessonCount || 0), 0);
    return `
      <div class="learn-category-group" id="group-${group.id}">
        <div class="learn-category-group-label">
          <span class="learn-category-group-marker" aria-hidden="true">${String(groupIdx + 1).padStart(2, '0')}</span>
          <span class="learn-category-group-emoji" aria-hidden="true">${group.emoji}</span>
          <span class="learn-category-group-name">${group.label}</span>
          <span class="learn-category-group-rule" aria-hidden="true"></span>
          <span class="learn-category-group-count">${groupCats.length} ${lang === 'np' ? 'विषय' : 'topics'} · ${groupLessonCount} ${lang === 'np' ? 'पाठ' : 'lessons'}</span>
        </div>
        ${groupCats.map((cat, catIdx) => {
          const catData = cat[lang] || cat.en;
          const isFirstInFirstGroup = groupIdx === 0 && catIdx === 0;
          return `
              <div class="learn-accordion"
                 id="accordion-${cat.slug}"
                 data-slug="${cat.slug}">
              <button type="button"
                      class="learn-accordion-header"
                      aria-expanded="false"
                      aria-controls="accordion-body-${cat.slug}">
                <div class="learn-accordion-header-left">
                  <div class="learn-accordion-cat-icon" aria-hidden="true">
                    ${getCategoryIcon(cat.icon)}
                  </div>
                  <div class="learn-accordion-header-text">
                    <span class="learn-accordion-cat-name">${catData.name || ''}</span>
                    <span class="learn-accordion-cat-tagline">${catData.tagline || catData.shortDesc || ''}</span>
                  </div>
                </div>
                <div class="learn-accordion-header-right">
                  <span class="learn-accordion-lesson-count">
                    ${cat.lessonCount || 0} ${lang === 'np' ? 'पाठ' : 'lessons'}
                  </span>
                  <span class="learn-accordion-chevron" aria-hidden="true">${CHEVRON_DOWN}</span>
                </div>
              </button>
              <div class="learn-accordion-body"
                   id="accordion-body-${cat.slug}"
                   hidden>
                <div class="learn-accordion-body-inner">
                  ${renderCategoryLessons(cat)}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('');

  return `
    <div class="learn-tab-panel" id="tab-browse" role="tabpanel" aria-labelledby="tab-btn-browse">

      <div class="learn-browse-intro">
        <span class="learn-flow-kicker">${lang === 'np' ? 'विषय अनुसार सिक्नुहोस्' : 'Learn by topic'}</span>
        <h2>${lang === 'np' ? 'आफ्नो सिकाइ मार्ग छान्नुहोस्' : 'Choose a learning path'}</h2>
        <p>${lang === 'np' ? 'विषय छान्नुहोस् र त्यसका पाठहरू क्रमैसँग खोल्नुहोस्।' : 'Choose a topic, then open its lessons in the order that suits you.'}</p>
      </div>

      <!-- Search + Filter Bar -->
      <div class="learn-filter-bar" id="learn-browse-filter-bar">
        <div class="learn-filter-search-wrap">
          <span class="learn-filter-search-icon" aria-hidden="true">${ICONS.search}</span>
          <input type="text"
                 id="learn-browse-search"
                 class="learn-filter-search-input"
                 placeholder="${lang === 'np' ? 'पाठहरू, विषयहरू खोज्नुहोस्...' : 'Search lessons, topics...'}"
                 autocomplete="off"
                 aria-label="${lang === 'np' ? 'पाठहरू खोज्नुहोस्' : 'Search lessons'}" />
        </div>
      </div>

      <!-- Layout: Sidebar + Main -->
      <div class="learn-browse-layout">

        <!-- Sticky Sidebar Nav (desktop) -->
        <nav class="learn-side-nav" aria-label="${lang === 'np' ? 'श्रेणी नेभिगेसन' : 'Category navigation'}">
          <div class="learn-side-nav-header">${lang === 'np' ? 'श्रेणीहरू' : 'Categories'}</div>
          ${sideNavItems}
        </nav>

        <!-- Main Content -->
        <div class="learn-browse-main" id="learn-browse-main">

          <!-- No results message (hidden by default) -->
          <div class="learn-no-results" id="learn-browse-no-results" hidden>
            <div class="learn-no-results-icon" aria-hidden="true">${ICONS.search}</div>
            <p>${lang === 'np' ? 'कुनै नतिजा भेटिएन। कृपया अन्य कीवर्ड प्रयोग गर्नुहोस्।' : 'No results found. Try a different keyword.'}</p>
          </div>

          <!-- Grouped Accordions -->
          <div id="learn-accordions-container">
            ${accordionGroupsHtml}
          </div>

        </div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════
// TAB 3 - RESOURCES & TOOLS
// ═══════════════════════════════════════════════
function renderResourcesTab(lang, ui) {
  const paidResources = getResources();

  const RES_ICONS = {
    spreadsheet: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
    ledger: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    checklist: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    comparison: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M3 7l4 4-4 4M21 7l-4 4 4 4"/></svg>`,
    handbook: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    guide: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    download: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    external: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
  };

  function renderResourceCards(resources, isPaid = false) {
    return resources.map(res => {
      const title = typeof res.title === 'object' ? (res.title[lang] || res.title.en) : res.title;
      const desc = typeof res.desc === 'object'
        ? (res.desc[lang] || res.desc.en)
        : (res.shortDescription || res.description || '');
      const badge = typeof res.badge === 'object' ? (res.badge[lang] || res.badge.en) : (res.badge || res.category || 'Resource');
      const time = res.estimatedTime ? (res.estimatedTime[lang] || res.estimatedTime.en) : '';
      const price = isPaid ? `${res.currency || 'NPR'} ${res.price}` : '';
      const href = isPaid 
        ? `/resources/${res.slug}` 
        : (res.downloadUrl || (res.downloadFilename ? `assets/downloads/${res.downloadFilename}` : 'assets/downloads/nepal-personal-budget-planner.csv'));
      const isDirectDownload = !isPaid;
      const isHtml = href.endsWith('.html');
      const downloadAttr = isDirectDownload && !isHtml ? `download="${res.downloadFilename || 'resource'}"` : '';
      const targetAttr = isDirectDownload && isHtml ? 'target="_blank" rel="noopener noreferrer"' : '';
      const iconSvg = RES_ICONS[res.icon] || (isPaid ? RES_ICONS.ledger : RES_ICONS.spreadsheet);

      const highlights = Array.isArray(res.highlights) ? res.highlights : [];
      const highlightsHtml = highlights.length > 0 ? `
        <div class="learn-res-highlights">
          ${highlights.map(h => `<span class="learn-res-highlight-chip">${typeof h === 'object' ? (h[lang] || h.en) : h}</span>`).join('')}
        </div>
      ` : '';

      const companionTitle = typeof res.companionLessonTitle === 'object' 
        ? (res.companionLessonTitle[lang] || res.companionLessonTitle.en)
        : (lang === 'np' ? 'सम्बन्धित पाठ' : 'Companion Lesson');

      const companionLessonHtml = res.companionLesson ? `
        <a href="/learn/${res.companionCategorySlug || 'personal-finance'}/${res.companionLesson}" class="learn-res-companion-badge" title="${lang === 'np' ? 'सम्बन्धित पाठ अध्ययन गर्नुहोस्' : 'Study companion curriculum lesson'}">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <span>${companionTitle}</span>
        </a>
      ` : '';

      return `
        <article class="learn-resource-card${isPaid ? ' learn-resource-card-paid' : ''}" id="${res.id}" role="listitem">
          <div class="learn-resource-top">
            <div class="learn-res-format-pill">
              ${iconSvg}
              <span>${isPaid ? (lang === 'np' ? 'प्रिमियम प्रणाली' : 'Premium System') : (res.formatBadge || badge)}</span>
            </div>
            <span class="learn-resource-size">${price || `${time ? `${time} · ` : ''}${res.fileSize || res.format || ''}`}</span>
          </div>

          <h4 class="learn-resource-title">${title}</h4>
          <p class="learn-resource-desc">${desc}</p>
          
          ${highlightsHtml}
          ${companionLessonHtml}

          <div class="learn-resource-actions">
            ${!isPaid ? `
              <button type="button" class="learn-res-action-btn learn-res-preview-btn" data-res-id="${res.id}" aria-label="Quick Preview ${title.replace(/"/g, '&quot;')}">
                ${RES_ICONS.eye}
                <span>${lang === 'np' ? 'पूर्वावलोकन' : 'Quick Preview'}</span>
              </button>
            ` : ''}
            <a href="${href}" class="learn-res-action-btn learn-res-primary-btn" ${downloadAttr} ${targetAttr} data-resource-title="${title.replace(/"/g, '&quot;')}">
              ${isPaid ? ICONS.arrowRight : (isHtml ? RES_ICONS.external : RES_ICONS.download)}
              <span>${isPaid ? (lang === 'np' ? 'विवरण हेर्नुहोस्' : 'Explore System') : (isHtml ? (lang === 'np' ? 'खोल्नुहोस् / प्रिन्ट' : 'Open / Print') : (lang === 'np' ? 'डाउनलोड गर्नुहोस्' : 'Download Template'))}</span>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  return `
    <div class="learn-tab-panel" id="tab-resources" role="tabpanel" aria-labelledby="tab-btn-resources">
      <!-- Free Resources -->
      <div class="learn-section-header-sm">
        <div>
          <span class="learn-section-kicker" style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--color-accent);">${lang === 'np' ? 'नि:शुल्क शैक्षिक सामग्री' : 'Community Toolkits'}</span>
          <h3 class="learn-section-label" style="margin-top:2px;">${ui.freeResourcesTitle || 'Free Educational Resources'}</h3>
          <p class="learn-section-sublabel">${ui.freeResourcesSubtitle || 'Practical templates, spreadsheets, and checklists to take control of your wealth in Nepal.'}</p>
        </div>
        <a href="${ROUTES.RESOURCES || '/resources'}" class="learn-section-link">
          ${lang === 'np' ? 'सबै स्रोतहरू' : 'All Resources'} ${ICONS.arrowRight}
        </a>
      </div>

      <div class="learn-resources-grid" role="list">
        ${renderResourceCards(FREE_RESOURCES || [])}
      </div>

      <div class="learn-section-divider"></div>
      <div class="learn-section-header-sm">
        <div>
          <span class="learn-section-kicker" style="font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--color-accent);">${lang === 'np' ? 'उन्नत वित्तीय प्रणाली' : 'Full Operating Systems'}</span>
          <h3 class="learn-section-label" style="margin-top:2px;">${lang === 'np' ? 'सशुल्क वित्तीय स्रोतहरू' : 'Paid Financial Resources'}</h3>
          <p class="learn-section-sublabel">${lang === 'np' ? 'गहिरो वित्तीय व्यवस्थापनका लागि तयार पारिएका प्रिमियम उपकरणहरू।' : 'Premium tools built for deeper financial planning and management.'}</p>
        </div>
        <a href="${ROUTES.RESOURCES || '/resources'}" class="learn-section-link">
          ${lang === 'np' ? 'सबै स्रोतहरू' : 'Browse All Resources'} ${ICONS.arrowRight}
        </a>
      </div>

      <div class="learn-resources-grid" role="list">
        ${renderResourceCards(paidResources, true)}
      </div>

    </div>
  `;
}

// ═══════════════════════════════════════════════
// TAB 4 - GLOSSARY
// ═══════════════════════════════════════════════
function renderGlossaryTab(lang, ui) {
  const letters = Array.from(new Set((GLOSSARY_PREVIEW || []).map(item => item.letter))).sort();
  return `
    <div class="learn-tab-panel" id="tab-glossary" role="tabpanel" aria-labelledby="tab-btn-glossary">

      <div class="learn-section-header-sm">
        <h3 class="learn-section-label">${ui.glossaryTitle || 'Finance Glossary'}</h3>
        <p class="learn-section-sublabel">${ui.glossarySubtitle || ''}</p>
        <a href="/learn/glossary" class="learn-section-link">
          ${ui.viewAllGlossary || 'View Complete Glossary'} ${ICONS.arrowRight}
        </a>
      </div>

      <!-- Alphabet Filter -->
      <div class="learn-glossary-nav" role="tablist" aria-label="Glossary Alphabet Filter">
        <button type="button" class="learn-glossary-letter-btn active" data-letter="ALL" role="tab" aria-selected="true">
          ${lang === 'np' ? 'सबै' : 'All'}
        </button>
        ${letters.map(letter => `
          <button type="button" class="learn-glossary-letter-btn" data-letter="${letter}" role="tab" aria-selected="false">
            ${letter}
          </button>
        `).join('')}
      </div>

      <!-- Terms Grid -->
      <div class="learn-glossary-grid" id="glossary-preview-grid" role="list">
        ${(GLOSSARY_PREVIEW || []).map(item => {
          const def = item.def[lang] || item.def.en;
          return `
            <div class="learn-glossary-card" data-letter="${item.letter}" role="listitem">
              <div class="learn-glossary-char" aria-hidden="true">${item.letter}</div>
              <div class="learn-glossary-content">
                <h4 class="learn-glossary-term">${item.term}</h4>
                <p class="learn-glossary-def">${def}</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="learn-glossary-footer">
        <a href="/learn/glossary" class="btn btn-secondary">
          ${ui.viewAllGlossary || 'View Complete Glossary'} ${ICONS.arrowRight}
        </a>
      </div>

    </div>
  `;
}

// ═══════════════════════════════════════════════
// TAB 5 - PROGRESS DASHBOARD
// ═══════════════════════════════════════════════
function renderProgressTab(lang, ui) {
  // Read progress from localStorage
  let savedProgress = null;
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('rp_learn_progress');
      if (stored) savedProgress = JSON.parse(stored);
    } catch (_) {}
  }

  const rawProgressPercent = Number(savedProgress?.percent ?? 35);
  const progressPercent = Number.isFinite(rawProgressPercent)
    ? Math.min(100, Math.max(0, rawProgressPercent))
    : 0;
  const lessonsCompleted = savedProgress?.lessonsCompleted ?? (savedProgress ? 8 : 4);
  const totalLessons = 64;
  const guidesRead = savedProgress?.guidesRead ?? (savedProgress ? 3 : 2);
  const totalGuides = 12;
  const calcsUsed = savedProgress?.calcsUsed ?? (savedProgress ? 4 : 3);
  const totalCalcs = 9;
  const resourcesDownloaded = savedProgress?.resourcesDownloaded ?? (savedProgress ? 2 : 1);
  const totalResources = 6;

  const readSavedList = (key) => {
    if (typeof window === 'undefined') return [];
    try {
      const value = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(value) ? value : [];
    } catch (error) {
      return [];
    }
  };

  const savedLessonIds = readSavedList('rp_learn_bookmarks');
  const savedGuideSlugs = readSavedList('rp_learn_saved_guides');
  const savedResourceIds = readSavedList('rp_learn_saved_resources');
  const savedLessons = [];
  (LEARN_CATEGORIES || []).forEach(category => {
    (category.roadmap || []).forEach(module => {
      (module.lessons || []).forEach(lesson => {
        if (!savedLessonIds.includes(lesson.id)) return;
        const lessonData = lesson[lang] || lesson.en || {};
        savedLessons.push({
          type: lang === 'np' ? 'पाठ' : 'Lesson',
          title: lessonData.title || lesson.id,
          href: ROUTES.LEARN_LESSON ? ROUTES.LEARN_LESSON(category.slug, lesson.slug) : `/learn/${category.slug}/${lesson.slug}`
        });
      });
    });
  });
  const savedGuides = (POPULAR_GUIDES || [])
    .filter(guide => savedGuideSlugs.includes(guide.slug))
    .map(guide => ({
      type: lang === 'np' ? 'गाइड' : 'Guide',
      title: guide.title[lang] || guide.title.en,
      href: guide.href || `/learn/guides/${guide.slug}`
    }));
  const savedResources = (FREE_RESOURCES || [])
    .filter(resource => savedResourceIds.includes(resource.id))
    .map(resource => ({
      type: lang === 'np' ? 'स्रोत' : 'Resource',
      title: resource.title[lang] || resource.title.en,
      href: resource.downloadUrl
    }));
  const savedItems = [...savedLessons, ...savedGuides, ...savedResources];

  return `
    <div class="learn-tab-panel" id="tab-progress" role="tabpanel" aria-labelledby="tab-btn-progress">

      <!-- Progress Dashboard -->
      <div class="learn-progress-dashboard">
        <div class="learn-progress-header">
          <div class="learn-progress-ring-box">
            <div class="rp-progress-ring-wrap">
              <svg class="rp-progress-ring" width="88" height="88" viewBox="0 0 88 88" aria-hidden="true">
                <circle class="rp-progress-ring-track" cx="44" cy="44" r="36" stroke-width="7" fill="none" />
                <circle class="rp-progress-ring-fill" cx="44" cy="44" r="36" stroke-width="7" fill="none"
                  stroke-dasharray="226.19"
                  stroke-dashoffset="${(226.19 - (progressPercent / 100) * 226.19).toFixed(1)}" />
              </svg>
              <div class="rp-progress-ring-text">
                <span class="rp-progress-ring-val">${progressPercent}%</span>
              </div>
            </div>
            <div class="learn-progress-hero-text">
              <div class="learn-continue-label">
                <span class="dot" aria-hidden="true"></span>
                ${savedProgress ? ui.continuePrompt : (lang === 'np' ? 'तपाईंको सिकाइ ड्यासबोर्ड' : 'Your Learning Dashboard')}
              </div>
              <h2 class="learn-continue-title">
                ${savedProgress ? savedProgress.title : (CONTINUE_LEARNING_DEFAULT.title[lang] || CONTINUE_LEARNING_DEFAULT.title.en)}
              </h2>
              <p class="learn-continue-desc">
                ${savedProgress ? (savedProgress.desc || '') : (CONTINUE_LEARNING_DEFAULT.desc[lang] || CONTINUE_LEARNING_DEFAULT.desc.en)}
              </p>
              <div class="rp-progress-pill-row">
                <div class="rp-progress-pill-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progressPercent}" aria-label="${lang === 'np' ? 'समग्र सिकाइ प्रगति' : 'Overall learning progress'}">
                  <div class="rp-progress-pill-fill" style="width: ${progressPercent}%;"></div>
                </div>
                <span class="rp-progress-pill-badge">${progressPercent}% ${lang === 'np' ? 'सम्पन्न' : 'Complete'}</span>
              </div>
            </div>
          </div>

          <div class="learn-progress-cta-wrap">
            <a href="${savedProgress ? savedProgress.href : CONTINUE_LEARNING_DEFAULT.href}" class="btn btn-primary btn-lg">
              ${savedProgress ? (lang === 'np' ? 'पाठ पुनः सुरु गर्नुहोस्' : 'Resume Lesson') : (lang === 'np' ? 'मोड्युल १ सुरु गर्नुहोस्' : 'Start Module 1')}
              ${ICONS.arrowRight}
            </a>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="learn-progress-stats-grid">
          <div class="learn-progress-stat-card">
            <div class="learn-stat-icon" aria-hidden="true">${ICONS.bookOpen}</div>
            <div class="learn-stat-content">
              <div class="learn-stat-val">${lessonsCompleted} <span class="learn-stat-max">/ ${totalLessons}</span></div>
              <div class="learn-stat-label">${lang === 'np' ? 'सकिएका पाठहरू' : 'Lessons Completed'}</div>
            </div>
          </div>

          <div class="learn-progress-stat-card">
            <div class="learn-stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
            </div>
            <div class="learn-stat-content">
              <div class="learn-stat-val">${guidesRead} <span class="learn-stat-max">/ ${totalGuides}</span></div>
              <div class="learn-stat-label">${lang === 'np' ? 'पढिएका गाइडहरू' : 'Guides Read'}</div>
            </div>
          </div>

          <div class="learn-progress-stat-card">
            <div class="learn-stat-icon" aria-hidden="true">${CALC_ICON}</div>
            <div class="learn-stat-content">
              <div class="learn-stat-val">${calcsUsed} <span class="learn-stat-max">/ ${totalCalcs}</span></div>
              <div class="learn-stat-label">${lang === 'np' ? 'प्रयोग गरिएका Calculator' : 'Calculators Used'}</div>
            </div>
          </div>

          <div class="learn-progress-stat-card">
            <div class="learn-stat-icon" aria-hidden="true">${DOWNLOAD_ICON}</div>
            <div class="learn-stat-content">
              <div class="learn-stat-val">${resourcesDownloaded} <span class="learn-stat-max">/ ${totalResources}</span></div>
              <div class="learn-stat-label">${lang === 'np' ? 'डाउनलोड गरिएका सामग्री' : 'Resources Downloaded'}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Saved Items -->
      <section class="learn-saved-section" aria-labelledby="learn-saved-title">
        <div class="learn-section-header-sm">
          <h3 class="learn-section-label" id="learn-saved-title">${lang === 'np' ? 'सुरक्षित सामग्री' : 'Saved for Later'}</h3>
          <p class="learn-section-sublabel">${lang === 'np' ? 'तपाईंले Bookmark गरेका पाठ र गाइडहरू।' : 'Lessons and guides you have bookmarked for later.'}</p>
        </div>
        ${savedItems.length ? `
          <div class="learn-saved-grid" role="list">
            ${savedItems.map(item => `
              <a href="${item.href}" class="learn-saved-card" role="listitem">
                <span class="learn-saved-type">${item.type}</span>
                <span class="learn-saved-title">${item.title}</span>
                <span class="learn-saved-arrow" aria-hidden="true">${ICONS.arrowRight}</span>
              </a>
            `).join('')}
          </div>
        ` : `
          <div class="learn-saved-empty">
            <span>${lang === 'np' ? 'अहिलेसम्म कुनै सामग्री सुरक्षित गरिएको छैन।' : 'No saved items yet.'}</span>
            <a href="#tab-browse" class="learn-saved-empty-link">${lang === 'np' ? 'पाठहरू हेर्नुहोस्' : 'Browse lessons'}</a>
          </div>
        `}
      </section>

    </div>
  `;
}

// ═══════════════════════════════════════════════
// MAIN RENDER - LEARN PAGE
// ═══════════════════════════════════════════════
export function renderLearnPage() {
  const lang = getLearnLanguage();
  const ui = LEARN_UI[lang] || LEARN_UI.en;

  // SEO & Meta
  setPageMeta(
    lang === 'np'
      ? 'वित्तीय शिक्षा एकेडेमी | risePaisa Nepal'
      : 'Learn Finance with Confidence | risePaisa Academy Nepal',
    lang === 'np'
      ? 'नेपालको लागि विशेष रूपमा तयार पारिएको व्यावहारिक वित्तीय शिक्षा। NEPSE, व्यक्तिगत वित्त, कर र लगानीका चरणबद्ध पाठहरू।'
      : 'Practical financial education designed for Nepal. Learn step by step through structured lessons, real-world examples, trusted guides, and practical financial tools.'
  );

  const tabs = [
    { id: 'roadmap', icon: MAP_ICON, label: lang === 'np' ? 'सुरु गर्नुहोस्' : 'Start Here' },
    { id: 'browse', icon: BOOK_ICON, label: lang === 'np' ? 'विषयहरू' : 'Browse Topics' },
    { id: 'resources', icon: RESOURCE_ICON, label: lang === 'np' ? 'स्रोतहरू' : 'Resources' },
    { id: 'glossary', icon: GLOSSARY_ICON, label: lang === 'np' ? 'शब्दावली' : 'Glossary' },
    { id: 'progress', icon: PROGRESS_ICON, label: lang === 'np' ? 'प्रगति' : 'Progress' },
  ];

  return `
    <div class="learn-page learn-page-v2">

      <!-- ── HERO SECTION ── -->
      <section class="learn-hero" id="learn-hero">
        <div class="container">
          <div class="learn-hero-inner">
            <div class="learn-hero-top">
              <span class="learn-pill-badge">
                <span class="dot" aria-hidden="true"></span>
                ${ui.badge}
              </span>
              ${renderLanguageToggle(lang)}
            </div>

            <h1 class="learn-hero-title">${ui.heroTitle}</h1>
            <p class="learn-hero-subtitle">${ui.heroSubtitle}</p>

            <!-- Global Search Box -->
            <div class="learn-search-wrap">
              <div class="learn-search-box">
                <span class="learn-search-icon" aria-hidden="true">${ICONS.search}</span>
                <input type="text"
                       id="learn-search-input"
                       class="learn-search-input"
                       placeholder="${ui.searchPlaceholder}"
                       aria-label="${ui.searchPlaceholder}"
                       autocomplete="off" />
                <kbd class="learn-search-shortcut" title="${ui.searchShortcut}">/</kbd>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ── STICKY TAB NAVIGATION ── -->
      <div class="learn-tabs-bar" id="learn-tabs-bar" role="tablist" aria-label="${lang === 'np' ? 'सिकाइ क्षेत्रहरू' : 'Learning sections'}">
        <div class="learn-tabs-bar-inner">
          ${tabs.map((tab, idx) => `
            <button type="button"
                    class="learn-tab-btn${idx === 0 ? ' active' : ''}"
                    id="tab-btn-${tab.id}"
                    data-tab="${tab.id}"
                    role="tab"
                    aria-selected="${idx === 0}"
                    aria-controls="tab-${tab.id}">
              <span class="learn-tab-btn-icon" aria-hidden="true">${tab.icon}</span>
              <span class="learn-tab-btn-label">${tab.label}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- ── TAB CONTENT ── -->
      <div class="learn-tabs-content" id="learn-tabs-content">
        <div class="container">
          ${renderRoadmapTab(lang, ui)}
          ${renderBrowseTab(lang, ui)}
          ${renderResourcesTab(lang, ui)}
          ${renderGlossaryTab(lang, ui)}
          ${renderProgressTab(lang, ui)}
        </div>
      </div>

    </div>
  `;
}

// ═══════════════════════════════════════════════
// INIT - Attach All Interactive Behaviors
// ═══════════════════════════════════════════════
export function initLearnPage() {
  const lang = getLearnLanguage();
  const activeTabStorageKey = 'rp_learn_active_tab';

  // ── 1. Language Toggle ──────────────────────
  document.querySelectorAll('.learn-lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.dataset.lang;
      if (!targetLang || targetLang === getLearnLanguage()) return;
      setLearnLanguage(targetLang);
      const appEl = document.getElementById('app');
      if (appEl) {
        appEl.innerHTML = renderLearnPage();
        initLearnPage();
      }
    });
  });

  // ── 2. Tab Switching ────────────────────────
  const tabBtns = document.querySelectorAll('.learn-tab-btn');
  const tabPanels = document.querySelectorAll('.learn-tab-panel');
  const accordionStateKey = 'rp_learn_expanded_categories';

  function getExpandedCategories() {
    try {
      return JSON.parse(localStorage.getItem(accordionStateKey) || '[]');
    } catch (error) {
      return [];
    }
  }

  function saveExpandedCategories() {
    const expanded = Array.from(document.querySelectorAll('.learn-accordion.open'))
      .map(accordion => accordion.dataset.slug)
      .filter(Boolean);
    localStorage.setItem(accordionStateKey, JSON.stringify(expanded));
  }

  function activateTab(tabId) {
    tabBtns.forEach(btn => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });
    tabPanels.forEach(panel => {
      const isActive = panel.id === `tab-${tabId}`;
      panel.classList.toggle('active', isActive);
      panel.setAttribute('aria-hidden', !isActive);
      panel.hidden = !isActive;
    });
    localStorage.setItem(activeTabStorageKey, tabId);
  }

  // Initialize: restore the last section, defaulting to Start Here.
  const savedTab = localStorage.getItem(activeTabStorageKey);
  const initialTab = Array.from(tabBtns).some(btn => btn.dataset.tab === savedTab) ? savedTab : 'roadmap';
  tabPanels.forEach((panel, idx) => {
    const isActive = panel.id === `tab-${initialTab}`;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
    panel.setAttribute('aria-hidden', !isActive);
  });
  tabBtns.forEach(btn => {
    const isActive = btn.dataset.tab === initialTab;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.dataset.tab);
      // On mobile, scroll to top of tab content
      const tabsBar = document.getElementById('learn-tabs-bar');
      if (tabsBar && window.innerWidth < 768) {
        tabsBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  tabBtns.forEach((btn, index) => {
    btn.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? tabBtns.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabBtns.length) % tabBtns.length;
      tabBtns[nextIndex].focus();
      activateTab(tabBtns[nextIndex].dataset.tab);
    });
  });

  // ── 3. Hero Search → Jump to Browse Tab ────
  const heroSearch = document.getElementById('learn-search-input');
  let handleSlashKey = null;
  if (heroSearch) {
    // Keyboard shortcut "/"
    handleSlashKey = (e) => {
      if (e.key === '/' && document.activeElement !== heroSearch && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        heroSearch.focus();
        heroSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    window.addEventListener('keydown', handleSlashKey);

    heroSearch.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      if (q.length > 1) {
        // Switch to Browse tab and copy search query
        activateTab('browse');
        const browseSearch = document.getElementById('learn-browse-search');
        if (browseSearch) {
          browseSearch.value = q;
          browseSearch.dispatchEvent(new Event('input'));
        }
      }
    });
  }

  // ── 4. Accordion Expand/Collapse ───────────
  const expandedCategories = getExpandedCategories();
  document.querySelectorAll('.learn-accordion').forEach(accordion => {
    if (!expandedCategories.includes(accordion.dataset.slug)) return;
    const body = accordion.querySelector('.learn-accordion-body');
    const header = accordion.querySelector('.learn-accordion-header');
    accordion.classList.add('open');
    header.setAttribute('aria-expanded', 'true');
    body.hidden = false;
    body.style.maxHeight = 'none';
  });

  document.querySelectorAll('.learn-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.closest('.learn-accordion');
      const body = accordion.querySelector('.learn-accordion-body');
      const isOpen = accordion.classList.contains('open');

      // Close all other accordions in the same group
      const group = accordion.closest('.learn-category-group');
      if (group) {
        group.querySelectorAll('.learn-accordion.open').forEach(openAcc => {
          if (openAcc !== accordion) {
            openAcc.classList.remove('open');
            openAcc.querySelector('.learn-accordion-header').setAttribute('aria-expanded', 'false');
            const openBody = openAcc.querySelector('.learn-accordion-body');
            openBody.hidden = true;
            openBody.style.maxHeight = '0';
          }
        });
      }

      if (isOpen) {
        accordion.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = body.scrollHeight + 'px';
        requestAnimationFrame(() => { body.style.maxHeight = '0'; });
        body.addEventListener('transitionend', () => { body.hidden = true; }, { once: true });
      } else {
        accordion.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        body.hidden = false;
        body.style.maxHeight = '0';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            body.style.maxHeight = body.scrollHeight + 'px';
            body.addEventListener('transitionend', () => { body.style.maxHeight = 'none'; }, { once: true });
          });
        });
      }
      saveExpandedCategories();
    });
  });

  // ── 5. Browse Tab - Search Filtering (Debounced) ───────
  const browseSearch = document.getElementById('learn-browse-search');
  let browseSearchTimer = null;
  if (browseSearch) {
    browseSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      clearTimeout(browseSearchTimer);
      browseSearchTimer = setTimeout(() => {
        filterBrowseContent(q, null);
      }, 150);
    });
  }

  function filterBrowseContent(query) {
    const lessonCards = document.querySelectorAll('.learn-accordion-lesson-card');
    const noResults = document.getElementById('learn-browse-no-results');
    let anyVisible = false;

    highlightBrowseMatches(query);

    // Filter accordion lesson cards
    lessonCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const matchesQuery = !query || text.includes(query);
      const visible = matchesQuery;
      card.style.display = visible ? '' : 'none';
      if (visible) anyVisible = true;
    });

    // Show/hide accordion groups based on whether their children are visible
    document.querySelectorAll('.learn-accordion').forEach(accordion => {
      const visibleCards = accordion.querySelectorAll('.learn-accordion-lesson-card:not([style*="display: none"])');
      if (query) {
        if (visibleCards.length === 0) {
          accordion.style.display = 'none';
        } else {
          accordion.style.display = '';
          // Auto-open accordion if it has matches
          if (!accordion.classList.contains('open')) {
            const header = accordion.querySelector('.learn-accordion-header');
            const body = accordion.querySelector('.learn-accordion-body');
            accordion.classList.add('open');
            header.setAttribute('aria-expanded', 'true');
            body.hidden = false;
            body.style.maxHeight = 'none';
          }
        }
      } else {
        accordion.style.display = '';
      }
    });

    if (noResults) {
      noResults.hidden = anyVisible || !query;
    }
  }

  function highlightBrowseMatches(query) {
    const cards = document.querySelectorAll('.learn-accordion-lesson-card');
    cards.forEach(card => {
      card.querySelectorAll('mark.learn-search-match').forEach(mark => {
        mark.replaceWith(document.createTextNode(mark.textContent));
      });
      if (!query) return;

      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const matcher = new RegExp(escapedQuery, 'gi');
      const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      let node;
      while ((node = walker.nextNode())) textNodes.push(node);

      textNodes.forEach(textNode => {
        if (!matcher.test(textNode.nodeValue)) {
          matcher.lastIndex = 0;
          return;
        }
        matcher.lastIndex = 0;
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;
        textNode.nodeValue.replace(matcher, (match, offset) => {
          fragment.append(document.createTextNode(textNode.nodeValue.slice(lastIndex, offset)));
          const mark = document.createElement('mark');
          mark.className = 'learn-search-match';
          mark.textContent = match;
          fragment.append(mark);
          lastIndex = offset + match.length;
          return match;
        });
        fragment.append(document.createTextNode(textNode.nodeValue.slice(lastIndex)));
        textNode.replaceWith(fragment);
      });
    });
  }

  // ── 7. Journey Card Selection ───────────────
  document.querySelectorAll('.learn-journey-card').forEach(card => {
    card.addEventListener('click', () => {
      const journeyId = card.dataset.journeyId;

      document.querySelectorAll('.learn-journey-card').forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      card.classList.add('active');
      card.setAttribute('aria-pressed', 'true');

      document.querySelectorAll('.learn-journey-steps-panel').forEach(panel => {
        const isActive = panel.id === `journey-${journeyId}`;
        panel.classList.toggle('active', isActive);
        panel.setAttribute('aria-hidden', !isActive);
      });
    });
  });

  // ── 8. Glossary Letter Filter ───────────────
  const glossaryBtns = document.querySelectorAll('.learn-glossary-letter-btn');
  const glossaryCards = document.querySelectorAll('.learn-glossary-card');

  glossaryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const letter = btn.dataset.letter;
      glossaryBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      glossaryCards.forEach(card => {
        card.style.display = (letter === 'ALL' || card.dataset.letter === letter) ? '' : 'none';
      });
    });
  });

  // ── 9. Bookmark Toggle ──────────────────────
  document.querySelectorAll('.learn-bookmark-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isSaved = btn.getAttribute('data-saved') === 'true';
      if (isSaved) {
        btn.setAttribute('data-saved', 'false');
        btn.innerHTML = BOOKMARK_ICON;
        btn.style.color = '';
      } else {
        btn.setAttribute('data-saved', 'true');
        btn.innerHTML = BOOKMARK_FILLED_ICON;
        btn.style.color = 'var(--color-accent)';
      }
    });
  });

  // ── 10. Newsletter Submission ───────────────
  const newsForm = document.getElementById('learn-newsletter-form');
  const newsSuccess = document.getElementById('learn-newsletter-success');
  if (newsForm && newsSuccess) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('learn-newsletter-email');
      if (emailInput && emailInput.value) {
        newsForm.style.display = 'none';
        newsSuccess.style.display = 'inline-flex';
      }
    });
  }

  // ── 11. Sticky Tab Bar - Scroll Behavior ───
  const learnTabsBar = document.getElementById('learn-tabs-bar');
  const learnHero = document.getElementById('learn-hero');
  if (learnTabsBar && learnHero) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        learnTabsBar.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-60px 0px 0px 0px' }
    );
    observer.observe(learnHero);
  }

  // ── 12. Sidebar Nav Active Highlighting ────
  const sideNavLinks = document.querySelectorAll('.learn-side-nav-link');
  if (sideNavLinks.length > 0) {
    const groupObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          const link = document.querySelector(`.learn-side-nav-link[href="#${id}"]`);
          if (link) link.classList.toggle('active', entry.isIntersecting);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    document.querySelectorAll('.learn-category-group').forEach(section => {
      if (section.id) groupObserver.observe(section);
    });

    sideNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href')?.replace('#', '');
        if (targetId) {
          e.preventDefault();
          const target = document.getElementById(targetId);
          if (target) {
            const offset = 120; // Account for sticky nav + tab bar
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      });
    });
  }

  // ── 13. Free Resource Download Feedback & Quick Preview Modal ──
  document.querySelectorAll('.learn-res-primary-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const resTitle = btn.getAttribute('data-resource-title') || 'Educational Resource';
      showLearnToast(lang === 'np' ? `📥 नि:शुल्क डाउनलोड सुरु भयो: ${resTitle}` : `📥 Download started: ${resTitle}`);
    });
  });

  document.querySelectorAll('.learn-res-preview-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const resId = btn.getAttribute('data-res-id');
      if (resId) openResourcePreviewModal(resId, lang);
    });
  });

  // Return unmount cleanup function
  return () => {
    if (handleSlashKey) window.removeEventListener('keydown', handleSlashKey);
    if (browseSearchTimer) clearTimeout(browseSearchTimer);
  };
}

export function openResourcePreviewModal(resId, lang = 'en') {
  const res = (FREE_RESOURCES || []).find(r => r.id === resId);
  if (!res) return;

  const title = typeof res.title === 'object' ? (res.title[lang] || res.title.en) : res.title;
  const desc = typeof res.desc === 'object' ? (res.desc[lang] || res.desc.en) : (res.desc || '');
  const badge = typeof res.badge === 'object' ? (res.badge[lang] || res.badge.en) : (res.formatBadge || res.type || 'Resource');
  const href = res.downloadUrl || (res.downloadFilename ? `assets/downloads/${res.downloadFilename}` : '');
  const isHtml = href.endsWith('.html');

  let modal = document.getElementById('rp-resource-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'rp-resource-modal-overlay';
    modal.className = 'rp-res-modal-overlay';
    document.body.appendChild(modal);
  }

  let contentHtml = '';
  if (isHtml) {
    contentHtml = `
      <div class="rp-res-modal-iframe-wrap">
        <iframe src="${href}" class="rp-res-modal-iframe" title="${title}"></iframe>
      </div>
    `;
  } else {
    contentHtml = `
      <div class="rp-res-modal-csv-wrap" id="rp-res-csv-container">
        <div class="rp-res-modal-loading">
          <div class="rp-res-spinner"></div>
          <span>${lang === 'np' ? 'स्प्रेडसिट तालिका लोड हुँदैछ...' : 'Loading spreadsheet preview...'}</span>
        </div>
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="rp-res-modal-backdrop" onclick="window.closeResourcePreviewModal()"></div>
    <div class="rp-res-modal-window" role="dialog" aria-modal="true" aria-labelledby="rp-res-modal-title">
      <header class="rp-res-modal-header">
        <div class="rp-res-modal-header-info">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
            <span class="rp-res-modal-tag">${res.formatBadge || badge}</span>
            <span style="font-size:12px; color:var(--color-text-muted); font-weight:500;">${res.fileSize || res.format || ''}</span>
          </div>
          <h3 id="rp-res-modal-title" class="rp-res-modal-title">${title}</h3>
          <p class="rp-res-modal-desc">${desc}</p>
        </div>
        <button type="button" class="rp-res-modal-close" onclick="window.closeResourcePreviewModal()" aria-label="Close Preview">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </header>

      <div class="rp-res-modal-body">
        ${contentHtml}
      </div>

      <footer class="rp-res-modal-footer">
        <div class="rp-res-modal-footer-hint">
          <span>💡 ${lang === 'np' ? 'अफलाइन प्रयोगका लागि फाइल डाउनलोड गर्नुहोस्।' : 'Instant in-browser preview. Download file for complete offline use.'}</span>
        </div>
        <div class="rp-res-modal-footer-actions">
          <button type="button" class="btn btn-outline btn-sm" onclick="window.closeResourcePreviewModal()">
            ${lang === 'np' ? 'बन्द गर्नुहोस्' : 'Close'}
          </button>
          <a href="${href}" ${!isHtml ? `download="${res.downloadFilename || 'resource'}"` : 'target="_blank" rel="noopener noreferrer"'} class="btn btn-primary btn-sm rp-res-modal-dl-btn">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>${isHtml ? (lang === 'np' ? 'नयाँ ट्याबमा खोल्नुहोस् / प्रिन्ट' : 'Open Full Page / Print') : (lang === 'np' ? 'डाउनलोड गर्नुहोस्' : 'Download Template')}</span>
          </a>
        </div>
      </footer>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (!isHtml) {
    fetch(href)
      .then(r => r.text())
      .then(csvText => {
        const container = document.getElementById('rp-res-csv-container');
        if (!container) return;

        const lines = csvText.trim().split('\n').map(l => l.trim()).filter(Boolean);
        const dataLines = lines.filter(l => !l.startsWith('#'));

        function parseCSVLine(line) {
          const result = [];
          let current = '';
          let inQuotes = false;
          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              result.push(current);
              current = '';
            } else {
              current += char;
            }
          }
          result.push(current);
          return result.map(s => s.trim().replace(/^"|"$/g, ''));
        }

        if (dataLines.length > 0) {
          const headerCells = parseCSVLine(dataLines[0]);
          let tableHtml = `<div class="rp-res-table-scroller"><table class="rp-res-preview-table"><thead><tr>`;
          headerCells.forEach(h => {
            tableHtml += `<th>${h}</th>`;
          });
          tableHtml += `</tr></thead><tbody>`;

          for (let r = 1; r < dataLines.length; r++) {
            const rowCells = parseCSVLine(dataLines[r]);
            if (!rowCells.some(c => c && c.trim() && c.trim() !== '-')) continue;
            const isTotalRow = rowCells[0] && (rowCells[0].includes('TOTAL') || rowCells[0].includes('NET WORTH') || rowCells[0].includes('GROSS ASSETS') || rowCells[0].includes('SURPLUS'));
            tableHtml += `<tr class="${isTotalRow ? 'rp-res-table-total-row' : ''}">`;
            rowCells.forEach((c) => {
              const isNumeric = /^-?[\d,]+(\.\d+)?%?$/.test(c.trim()) || c.startsWith('NPR') || c.startsWith('+NPR') || c.startsWith('-NPR');
              tableHtml += `<td class="${isNumeric ? 'text-right' : ''}">${c || '-'}</td>`;
            });
            tableHtml += `</tr>`;
          }
          tableHtml += `</tbody></table></div>`;
          container.innerHTML = tableHtml;
        } else {
          container.innerHTML = `<p style="padding:20px; text-align:center; color:var(--color-text-muted);">Preview currently unavailable.</p>`;
        }
      })
      .catch(() => {
        const container = document.getElementById('rp-res-csv-container');
        if (container) {
          container.innerHTML = `<div style="padding:40px; text-align:center;"><p style="font-size:14px; margin-bottom:12px; color:var(--color-text-secondary);">Direct preview ready via file download.</p><a href="${href}" download class="btn btn-primary btn-sm">Download File Now</a></div>`;
        }
      });
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      closeResourcePreviewModal();
      document.removeEventListener('keydown', handleEsc);
    }
  }
  document.addEventListener('keydown', handleEsc);
}

export function closeResourcePreviewModal() {
  const modal = document.getElementById('rp-resource-modal-overlay');
  if (modal) {
    modal.classList.remove('open');
  }
  document.body.style.overflow = '';
}

if (typeof window !== 'undefined') {
  window.openResourcePreviewModal = openResourcePreviewModal;
  window.closeResourcePreviewModal = closeResourcePreviewModal;
}

function showLearnToast(message) {
  let toast = document.getElementById('rp-learn-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'rp-learn-toast';
    toast.className = 'lesson-toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__learnToastTimer);
  window.__learnToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}


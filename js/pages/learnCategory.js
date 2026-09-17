// ==============================================
// risePaisa - Learn Category Page (/learn/:slug)
// Dedicated Pathway Architecture: Hero, Overview, Visual Roadmap,
// Collapsible Modules, Rich Lesson Cards, Top/Bottom Learning Sequence,
// Sticky Desktop Sidebar & Mobile "Course Contents" Drawer,
// Smart Recommendations, Related Tools, FAQs & Bilingual Engine
// ==============================================

import { 
  getCategoryBySlug, 
  getAllCategories, 
  getLearnLanguage, 
  setLearnLanguage, 
  LEARN_UI,
  CATEGORY_ENHANCEMENTS,
  GLOSSARY_DICTIONARY,
  FREE_RESOURCES
} from '../data/learn.js';
import { ROUTES, CALCULATOR_ROUTES } from '../routes.js';
import { ICONS, setPageMeta } from '../components.js';
import { renderLanguageToggle } from './learn.js';

// ── Local Storage Keys for Future-Ready Progress Architecture ───
const STORAGE_COMPLETED_KEY = 'rp_learn_completed_lessons';
const STORAGE_BOOKMARKS_KEY = 'rp_learn_bookmarks';

export function getCompletedLessons() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_COMPLETED_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

export function toggleLessonCompleted(lessonId) {
  if (typeof window === 'undefined' || !lessonId) return false;
  const list = getCompletedLessons();
  const idx = list.indexOf(lessonId);
  let isCompleted = false;
  if (idx > -1) {
    list.splice(idx, 1);
  } else {
    list.push(lessonId);
    isCompleted = true;
  }
  localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(list));
  return isCompleted;
}

export function getBookmarkedLessons() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

export function toggleLessonBookmark(lessonId) {
  if (typeof window === 'undefined' || !lessonId) return false;
  const list = getBookmarkedLessons();
  const idx = list.indexOf(lessonId);
  let isBookmarked = false;
  if (idx > -1) {
    list.splice(idx, 1);
  } else {
    list.push(lessonId);
    isBookmarked = true;
  }
  localStorage.setItem(STORAGE_BOOKMARKS_KEY, JSON.stringify(list));
  return isBookmarked;
}

/**
 * Get Category Icon SVG
 * @param {string} iconKey 
 * @returns {string} SVG HTML
 */
function getCategoryIcon(iconKey) {
  const iconMap = {
    wallet: ICONS.wallet || ICONS.target,
    trendingUp: ICONS.trendingUp || ICONS.target,
    'trending-up': ICONS.trendingUp || ICONS.target,
    chartBar: ICONS.chartBar || ICONS.target,
    'chart-bar': ICONS.chartBar || ICONS.target,
    building: ICONS.building || ICONS.target,
    receipt: ICONS.receipt || ICONS.target,
    shieldCheck: ICONS.shieldCheck || ICONS.shield,
    'shield-check': ICONS.shieldCheck || ICONS.shield,
    handCoins: ICONS.handCoins || ICONS.target,
    'hand-coins': ICONS.handCoins || ICONS.target,
    smartphone: ICONS.smartphone || ICONS.target,
    briefcase: ICONS.briefcase || ICONS.target,
    globe: ICONS.globe || ICONS.compass,
    checkCircle: ICONS.checkCircle || ICONS.check,
    'check-circle': ICONS.checkCircle || ICONS.check,
    umbrella: ICONS.umbrella || ICONS.shield,
    layers: ICONS.layers || ICONS.target,
    pieChart: ICONS.pieChart || ICONS.target,
    target: ICONS.target,
  };
  return iconMap[iconKey] || ICONS.bookOpen;
}

/**
 * Calculator directory lookup metadata for related calculator cards
 */
const CALC_METADATA = {
  sip: {
    name: { en: 'SIP & Compounding Calculator', np: 'SIP र चक्रवृद्धि ब्याज Calculator' },
    desc: { en: 'Simulate monthly systematic investments and inflation-adjusted corpus growth in Nepal.', np: 'नेपालमा मासिक नियमित लगानी (SIP) र मुद्रास्फीति समायोजनपछिको कुल प्रतिफल हिसाब गर्नुहोस्।' },
    icon: ICONS.trendingUp || ICONS.target
  },
  emi: {
    name: { en: 'Home & Personal Loan EMI Calculator', np: 'घर तथा व्यक्तिगत कर्जा EMI Calculator' },
    desc: { en: 'Calculate exact monthly bank repayments, interest amortizations, and base rate spreads.', np: 'नेपाली बैंकहरूको Base Rate र Premium का आधारमा वास्तविक महिनावारि किस्ता हिसाब गर्नुहोस्।' },
    icon: ICONS.handCoins || ICONS.target
  },
  loan: {
    name: { en: 'Loan EMI & Repayment Calculator', np: 'कर्जा EMI र किस्ता Calculator' },
    desc: { en: 'Plan loan tenures, monthly debt repayments, and prepayment interest reductions.', np: 'बैंक कर्जाको अवधि, मासिक किस्ता र पूर्वभुक्तानी गर्दा जोगिने ब्याज हिसाब गर्नुहोस्।' },
    icon: ICONS.handCoins || ICONS.target
  },
  'home-loan': {
    name: { en: 'Home Loan & Mortgage Calculator', np: 'घर कर्जा (Home Loan) Calculator' },
    desc: { en: 'Compute home mortgage EMIs, 50% DTI eligibility limits, and total bank interest costs.', np: 'घर कर्जाको मासिक किस्ता, ५०% DTI सीमा र तिर्नुपर्ने कुल ब्याज हिसाब गर्नुहोस्।' },
    icon: ICONS.building || ICONS.target
  },
  'nepal-income-tax': {
    name: { en: 'Nepal Income Tax Calculator', np: 'नेपाल आयकर (Tax) Calculator' },
    desc: { en: 'Calculate single & married tax slabs, SSF deductions, CIT rebates, and medical tax credits.', np: 'नेपाल सरकारको नयाँ बजेट अनुसार व्यक्तिगत तथा दम्पतीको आयकर, SSF र CIT छुटको यथार्थ हिसाब।' },
    icon: ICONS.receipt || ICONS.target
  },
  share: {
    name: { en: 'NEPSE Share & Capital Gains Calculator', np: 'NEPSE सेयर कारोबार तथा पुँजीगत लाभकर Calculator' },
    desc: { en: 'Compute SEBON fees, broker commission tiers, DP charges, and 5% vs 7.5% CGT for short/long term.', np: 'ब्रोकर कमिसन, SEBON शुल्क, DP शुल्क र ५% वा ७.५% पुँजीगत लाभकर (CGT) को विस्तृत हिसाब।' },
    icon: ICONS.chartBar || ICONS.target
  },
  retirement: {
    name: { en: 'Retirement Corpus Calculator', np: 'अवकाश कोष (Retirement Corpus) Calculator' },
    desc: { en: 'Determine the exact nest egg needed to retire with dignified passive income in Nepal.', np: 'नेपालमा सम्मानजनक जीवनयापनका लागि आवश्यक अवकाश कोष र ४% सुरक्षित निकासी हिसाब गर्नुहोस्।' },
    icon: ICONS.umbrella || ICONS.shield
  },
  swp: {
    name: { en: 'Systematic Withdrawal Plan (SWP) Calculator', np: 'नियमित निकासी योजना (SWP) Calculator' },
    desc: { en: 'Calculate monthly pension payouts from invested mutual funds without depleting principal.', np: 'Mutual Fund लगानीबाट मूलधन सुरक्षित राखी मासिक पेन्सन जस्तै आम्दानी लिने तरिका हिसाब गर्नुहोस्।' },
    icon: ICONS.wallet || ICONS.target
  },
  fd: {
    name: { en: 'Fixed Deposit (FD) Return Calculator', np: 'मुद्दती निक्षेप (FD) प्रतिफल Calculator' },
    desc: { en: 'Calculate compounding bank deposit returns minus 5% withholding tax in Nepal.', np: '५% TDS कर कट्टापछि नेपाली बैंकको मुद्दती निक्षेपबाट प्राप्त हुने खुद आम्दानी हिसाब गर्नुहोस्।' },
    icon: ICONS.building || ICONS.target
  },
  cagr: {
    name: { en: 'CAGR Growth Calculator', np: 'CAGR वार्षिक वृद्धिदर Calculator' },
    desc: { en: 'Measure the true compounded annual growth rate of your stock or mutual fund investments.', np: 'आफ्नो सेयर वा Mutual Fund लगानीको वास्तविक वार्षिक चक्रवृद्धिको दर (CAGR) पत्ता लगाउनुहोस्।' },
    icon: ICONS.trendingUp || ICONS.target
  },
  inflation: {
    name: { en: 'Nepal Purchasing Power & Inflation Calculator', np: 'मुद्रास्फीति र क्रयशक्ति ह्रास Calculator' },
    desc: { en: 'Discover how rising living costs erode the future purchasing power of your bank savings.', np: 'बढ्दो महँगीले भविष्यमा तपाईंको बचतको क्रयशक्ति कति घटाउँछ भन्ने यथार्थ हिसाब हेर्नुहोस्।' },
    icon: ICONS.target
  }
};

/**
 * Render Category Detail Page Content
 * @param {string} slug - Category URL slug
 * @returns {string} HTML string
 */
export function renderLearnCategoryPage(slug) {
  const category = getCategoryBySlug(slug);
  const lang = getLearnLanguage();
  const ui = LEARN_UI[lang] || LEARN_UI.en;
  const isEn = lang === 'en';

  // Graceful 404 handler
  if (!category) {
    setPageMeta('Topic Not Found | risePaisa Academy', 'The requested financial learning path does not exist.');
    return `
      <div class="container section" style="text-align:center;min-height:55vh;display:flex;align-items:center;justify-content:center;">
        <div>
          <h1 style="font-size:var(--text-4xl);margin-bottom:var(--space-3);color:var(--color-heading);">
            ${lang === 'np' ? 'सिकाइ मार्ग फेला परेन' : 'Topic Not Found'}
          </h1>
          <p style="color:var(--color-text-secondary);margin-bottom:var(--space-6);max-width:480px;margin-left:auto;margin-right:auto;">
            ${lang === 'np' ? 'तपाईंले खोज्नुभएको सिकाइ मार्ग उपलब्ध छैन वा हटाइएको छ।' : 'The financial learning path you are looking for does not exist or has been moved.'}
          </p>
          <a href="${ROUTES.LEARN}" class="btn btn-primary btn-lg">
            ${ICONS.arrowRight} ${ui.backToLearn}
          </a>
        </div>
      </div>
    `;
  }

  const catData = category[lang] || category.en;
  const catTitle = catData.name;
  const diffLabel = category.difficulty[lang] || category.difficulty.en;
  const durationLabel = category.duration[lang] || category.duration.en;

  // Collect all lessons flatly for sequence calculations
  const allLessons = [];
  category.roadmap.forEach((stage, sIdx) => {
    stage.lessons.forEach((lesson, lIdx) => {
      allLessons.push({
        ...lesson,
        stageNumber: stage.stageNumber || stage.moduleNumber || (sIdx + 1),
        stageTitle: stage[lang]?.title || stage.en.title,
        globalIndex: allLessons.length
      });
    });
  });

  const totalLessonsCount = allLessons.length || category.lessonCount;
  const completedList = getCompletedLessons();
  const completedInCat = allLessons.filter(l => completedList.includes(l.id)).length;
  const initialProgressPct = totalLessonsCount > 0 ? Math.round((completedInCat / totalLessonsCount) * 100) : 0;
  const bookmarkedList = getBookmarkedLessons();

  // First lesson as initial current lesson
  const currentLesson = allLessons[0] || null;
  const nextLesson = allLessons[1] || null;

  // SEO & Meta
  setPageMeta(
    lang === 'np'
      ? `${catTitle} सिक्नुहोस् | risePaisa एकेडेमी नेपाल`
      : `Learn ${catTitle} | risePaisa Academy Nepal`,
    catData.shortDesc || catData.tagline
  );

  // Suggested next categories
  const allCats = getAllCategories();
  const nextCats = allCats.filter(c => c.slug !== category.slug).slice(0, 3);

  // Contextual glossary terms for this domain
  const catGlossaryTerms = (GLOSSARY_DICTIONARY || []).filter(t => 
    t.categorySlug === category.slug || 
    (category.slug === 'retirement-planning' && t.categorySlug === 'retirement') ||
    (category.slug === 'business' && (t.categorySlug === 'investing' || t.categorySlug === 'accounting'))
  ).slice(0, 6);

  // Contextual free resources for this category
  const catResources = (FREE_RESOURCES || []).filter(r => 
    r.companionCategorySlug === category.slug || 
    (category.relatedResources && category.relatedResources.includes(r.id || r.slug))
  );

  return `
    <div class="learn-category-page" data-category-slug="${category.slug}" data-total-lessons="${totalLessonsCount}">
      
      <!-- 1. Breadcrumbs & Category Hero -->
      <section class="learn-cat-hero">
        <div class="container">
          <!-- Breadcrumbs -->
          <nav class="learn-breadcrumbs" aria-label="Breadcrumb">
            <a href="${ROUTES.HOME}">${ui.breadcrumbHome}</a>
            <span class="sep" aria-hidden="true">/</span>
            <a href="${ROUTES.LEARN}">${ui.breadcrumbLearn}</a>
            <span class="sep" aria-hidden="true">/</span>
            <span class="current" aria-current="page">${catTitle}</span>
          </nav>

          <div class="learn-cat-header-row">
            <div class="learn-cat-title-block">
              <div class="learn-cat-hero-icon" aria-hidden="true">
                ${getCategoryIcon(category.icon)}
              </div>
              <div>
                <span class="learn-pill-badge" style="margin-bottom:6px;">
                  <span class="dot" aria-hidden="true"></span>
                  ${ui.badge} • ${diffLabel}
                </span>
                <h1>${catTitle}</h1>
              </div>
            </div>

            <!-- Native Language Selector -->
            <div>
              ${renderLanguageToggle(lang)}
            </div>
          </div>

          <p class="learn-cat-hero-desc">${catData.overview || catData.shortDesc}</p>

          <!-- 7-Point Metric Capsule Bar -->
          <div class="learn-cat-metrics-bar" role="region" aria-label="Curriculum overview">
            <div class="learn-cat-metric">
              ${ICONS.bookOpen}
              <span>${ui.lessonsCount}:</span>
              <strong class="learn-cat-metric-val">${totalLessonsCount}</strong>
            </div>

            <div class="learn-cat-metric-div" aria-hidden="true"></div>

            <div class="learn-cat-metric">
              ${ICONS.clock}
              <span>${ui.duration}:</span>
              <strong class="learn-cat-metric-val">${durationLabel}</strong>
            </div>

            <div class="learn-cat-metric-div" aria-hidden="true"></div>

            <div class="learn-cat-metric">
              ${ICONS.target}
              <span>${ui.difficulty}:</span>
              <strong class="learn-cat-metric-val">${diffLabel}</strong>
            </div>

            <div class="learn-cat-metric-div" aria-hidden="true"></div>

            <div class="learn-cat-metric">
              ${ICONS.clock}
              <span>${ui.lastUpdated}:</span>
              <strong class="learn-cat-metric-val">${category.lastUpdated || 'Sep 2026'}</strong>
            </div>

            <div class="learn-cat-metric-div" aria-hidden="true"></div>

            <div class="learn-cat-metric">
              ${ICONS.book}
              <span>${ui.guides}:</span>
              <strong class="learn-cat-metric-val">${category.guideCount || (category.relatedGuides?.length || 2)}</strong>
            </div>

            <div class="learn-cat-metric-div" aria-hidden="true"></div>

            <div class="learn-cat-metric">
              ${ICONS.calculator}
              <span>${ui.calculators}:</span>
              <strong class="learn-cat-metric-val">${category.calcCount || (category.relatedCalculators?.length || 2)}</strong>
            </div>

            <div class="learn-cat-metric-div" aria-hidden="true"></div>

            <!-- Progress Tracker Capsule -->
            <div class="learn-cat-metric learn-hero-progress-metric">
              <div class="hero-progress-pill" title="${ui.progressTracker}">
                <div class="hero-progress-fill" style="width: ${initialProgressPct}%;"></div>
              </div>
              <strong class="learn-cat-metric-val hero-progress-text">${initialProgressPct}% ${ui.completed}</strong>
            </div>
          </div>
        </div>
      </section>

      <!-- Sticky Category Navigation Bar (All 7 Knowledge Dimensions) -->
      <nav class="learn-cat-nav-strip" id="cat-nav-strip" aria-label="Category Navigation">
        <div class="container cat-nav-container">
          <div class="cat-nav-tabs-row" id="cat-nav-tabs">
            <a href="#cat-overview" class="cat-nav-tab active" data-target="cat-overview">
              <span class="tab-icon">${ICONS.bookOpen}</span>
              <span>${isEn ? 'Overview' : 'परिचय'}</span>
            </a>
            <a href="#cat-lessons" class="cat-nav-tab" data-target="cat-lessons">
              <span class="tab-icon">${ICONS.book}</span>
              <span>${isEn ? 'Lessons' : 'पाठहरू'} (${category.lessonCount})</span>
            </a>
            ${category.relatedGuides && category.relatedGuides.length > 0 ? `
              <a href="#cat-guides" class="cat-nav-tab" data-target="cat-guides">
                <span class="tab-icon">${ICONS.bookOpen}</span>
                <span>${isEn ? 'Guides' : 'गाइडहरू'} (${category.relatedGuides.length})</span>
              </a>
            ` : ''}
            ${category.relatedCalculators && category.relatedCalculators.length > 0 ? `
              <a href="#cat-calculators" class="cat-nav-tab" data-target="cat-calculators">
                <span class="tab-icon">${ICONS.calculator}</span>
                <span>${isEn ? 'Calculators' : 'औजारहरू'} (${category.relatedCalculators.length})</span>
              </a>
            ` : ''}
            ${catGlossaryTerms.length > 0 ? `
              <a href="#cat-glossary" class="cat-nav-tab" data-target="cat-glossary">
                <span class="tab-icon">${ICONS.bookmark}</span>
                <span>${isEn ? 'Glossary' : 'शब्दावली'} (${catGlossaryTerms.length})</span>
              </a>
            ` : ''}
            ${catResources.length > 0 ? `
              <a href="#cat-resources" class="cat-nav-tab" data-target="cat-resources">
                <span class="tab-icon">${ICONS.download}</span>
                <span>${isEn ? 'Resources' : 'स्रोतहरू'} (${catResources.length})</span>
              </a>
            ` : ''}
            ${category.faqs && category.faqs.length > 0 ? `
              <a href="#cat-faqs" class="cat-nav-tab" data-target="cat-faqs">
                <span class="tab-icon">${ICONS.target}</span>
                <span>FAQs</span>
              </a>
            ` : ''}
          </div>
        </div>
      </nav>

      <!-- 2. Category Overview Briefing (Definition, Why Important, Nepal Reality) -->
      <section class="learn-cat-overview-section" id="cat-overview" aria-label="${ui.categoryOverviewTitle}">
        <div class="container">
          <div class="learn-core-questions">
            <div class="learn-question-card">
              <div class="learn-question-card-label">${lang === 'np' ? '१. यो के हो?' : '1. What is this?'}</div>
              <h2 class="learn-question-title" style="font-size:var(--text-lg);font-weight:600;margin:0 0 var(--space-2) 0;color:var(--color-heading);">${lang === 'np' ? 'विषयको परिचय र अवधारणा' : 'Definition & Concept'}</h2>
              <p>${catData.whatIsThis}</p>
            </div>

            <div class="learn-question-card">
              <div class="learn-question-card-label">${lang === 'np' ? '२. किन महत्त्वपूर्ण छ?' : '2. Why is it important?'}</div>
              <h2 class="learn-question-title" style="font-size:var(--text-lg);font-weight:600;margin:0 0 var(--space-2) 0;color:var(--color-heading);">${lang === 'np' ? 'जीवनमा यसको व्यावहारिक प्रभाव' : 'Practical Importance'}</h2>
              <p>${catData.whyImportant}</p>
            </div>

            <div class="learn-question-card" style="grid-column: 1 / -1;">
              <div class="learn-question-card-label">${lang === 'np' ? '३. नेपालमा यसले कसरी काम गर्छ?' : '3. How does it work in Nepal?'}</div>
              <h2 class="learn-question-title" style="font-size:var(--text-lg);font-weight:600;margin:0 0 var(--space-2) 0;color:var(--color-heading);">${lang === 'np' ? 'नेपालको वास्तविक परिवेश र नियमहरू' : 'The Nepal Context & Regulatory Reality'}</h2>
              <p>${catData.howInNepal}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Visual Learning Roadmap (Centerpiece Linear Pipeline) -->
      ${category.visualRoadmap && category.visualRoadmap.length > 0 ? `
        <section class="learn-visual-roadmap-section" aria-label="${ui.visualRoadmapTitle}">
          <div class="container">
            <div class="learn-section-header" style="margin-bottom:var(--space-6);">
              <span class="learn-section-kicker">${ui.learningRoadmap}</span>
              <h2 class="learn-section-title">${ui.visualRoadmapTitle}</h2>
              <p class="learn-section-sub">${ui.visualRoadmapSubtitle}</p>
            </div>

            <div class="roadmap-timeline-wrapper">
              <div class="roadmap-timeline-track">
                ${category.visualRoadmap.map((milestone, mIdx) => `
                  <div class="roadmap-node-step">
                    <div class="roadmap-node-badge">
                      <span class="roadmap-node-num">0${mIdx + 1}</span>
                    </div>
                    <div class="roadmap-node-card">
                      <span class="roadmap-node-stage">Step 0${mIdx + 1}</span>
                      <h3 class="roadmap-node-title" style="font-size:var(--text-base);font-weight:600;margin:0;color:var(--color-heading);">${milestone}</h3>
                    </div>
                    ${mIdx < category.visualRoadmap.length - 1 ? `
                      <div class="roadmap-node-connector" aria-hidden="true">
                        ${ICONS.arrowRight}
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>
      ` : ''}

      <!-- 4. Main Two-Column Layout (Content + Sticky Sidebar) -->
      <section class="learn-cat-main-layout">
        <div class="container">
          <div class="learn-cat-layout-grid">

            <!-- Primary Content Area -->
            <main class="learn-cat-primary-area">

              <!-- Anchor for Lessons -->
              <div id="cat-lessons" style="scroll-margin-top: 100px;"></div>

              <!-- Top Learning Sequence Bar -->
              <nav class="learn-sequence-bar learn-seq-top" aria-label="${ui.learningSequence}">
                <div class="seq-item seq-prev disabled" id="top-seq-prev">
                  <span class="seq-direction">${ICONS.chevronLeft} ${ui.previousLesson}</span>
                  <span class="seq-title">-</span>
                </div>
                <div class="seq-item seq-curr" id="top-seq-curr">
                  <span class="seq-direction">${ui.currentLesson}</span>
                  <span class="seq-title">${currentLesson ? (currentLesson[lang]?.title || currentLesson.en.title) : catTitle}</span>
                </div>
                <div class="seq-item seq-next ${nextLesson ? '' : 'disabled'}" id="top-seq-next">
                  <span class="seq-direction">${ui.nextLesson} ${ICONS.chevronRight}</span>
                  <span class="seq-title">${nextLesson ? (nextLesson[lang]?.title || nextLesson.en.title) : '-'}</span>
                </div>
              </nav>

              <!-- Lesson Modules Container -->
              <div class="learn-modules-container">
                ${category.roadmap.map((stage, sIdx) => {
                  const stageMeta = stage[lang] || stage.en;
                  const modNum = stage.moduleNumber || stage.stageNumber || (sIdx + 1);
                  const lessonsList = stage.lessons || [];
                  const rec = stage.smartRecommendation || null;

                  return `
                    <section class="learn-module-block" id="module-${modNum}" data-module-num="${modNum}">
                      
                      <!-- Module Header (Clickable for Mobile Collapse) -->
                      <header class="learn-module-header" data-toggle-module="${modNum}" role="button" aria-expanded="true" tabindex="0">
                        <div class="learn-module-header-left">
                          <div class="learn-module-pill">
                            <span>${ui.module} 0${modNum}</span>
                          </div>
                          <div>
                            <h3 class="learn-module-title">${stageMeta.title}</h3>
                            <p class="learn-module-desc">${stageMeta.desc}</p>
                          </div>
                        </div>

                        <div class="learn-module-header-right">
                          <span class="learn-module-meta-chip">
                            ${ICONS.clock} ${stage.estimatedTime || '40 min'}
                          </span>
                          <span class="learn-module-meta-chip">
                            ${ICONS.bookOpen} ${lessonsList.length} ${ui.lessons}
                          </span>
                          <button type="button" class="learn-module-collapse-btn" aria-label="${ui.collapseModule}">
                            ${ICONS.chevronDown}
                          </button>
                        </div>
                      </header>

                      <!-- Module Lessons List -->
                      <div class="learn-module-body">
                        <div class="learn-lessons-grid">
                          ${lessonsList.map(lesson => {
                            const lessonMeta = lesson[lang] || lesson.en;
                            const isDone = completedList.includes(lesson.id);
                            const isBookmarked = bookmarkedList.includes(lesson.id);
                            const lessonType = lesson.type || 'Lesson';
                            const lessonTypeLabel = (ui.lessonTypes && ui.lessonTypes[lessonType.toLowerCase()]) || lessonType;

                            return `
                              <article class="learn-lesson-card ${isDone ? 'lesson-completed' : ''}" id="lesson-${lesson.id}" data-lesson-id="${lesson.id}" data-lesson-url="/learn/${category.slug}/${lesson.slug}">
                                <div class="lesson-card-lead-row">
                                  <div class="lesson-card-left-meta">
                                    <!-- Interactive Completion Toggle Checkbox -->
                                    <button type="button" 
                                      class="lesson-checkbox-btn ${isDone ? 'checked' : ''}" 
                                      data-lesson-id="${lesson.id}" 
                                      aria-label="${isDone ? ui.markIncomplete : ui.markCompleted}"
                                      title="${isDone ? ui.markIncomplete : ui.markCompleted}">
                                      ${isDone ? ICONS.checkSquare : ICONS.square}
                                    </button>
                                    <span class="lesson-order-num">0${lesson.number}</span>
                                  </div>

                                  <div class="lesson-card-center">
                                    <div class="lesson-card-meta-line">
                                      <span class="lesson-type-badge type-${lessonType.toLowerCase()}">${lessonTypeLabel}</span>
                                      <span class="lesson-meta-dot">·</span>
                                      <span class="lesson-badge-inline">${lesson.duration}</span>
                                      <span class="lesson-meta-dot">·</span>
                                      <span class="lesson-badge-inline diff-${(lesson.difficulty || 'beginner').toLowerCase()}">${lesson.difficulty || 'Beginner'}</span>
                                    </div>

                                    <h4 class="lesson-title">
                                      <a href="/learn/${category.slug}/${lesson.slug}" class="lesson-title-link">${lessonMeta.title}</a>
                                    </h4>
                                    <p class="lesson-summary">${lessonMeta.summary}</p>
                                    
                                    ${lessonMeta.keyTakeaways ? `
                                      <div class="lesson-takeaway-inline">
                                        <span class="takeaway-label">${ICONS.sparkles} ${lang === 'np' ? 'मुख्य बुँदा:' : 'Key Takeaway:'}</span>
                                        <span class="takeaway-text">${lessonMeta.keyTakeaways}</span>
                                      </div>
                                    ` : ''}

                                    ${lesson.prerequisites ? `
                                      <div class="lesson-prereq-note">
                                        <span>${ui.prerequisitesRequired}:</span> ${lesson.prerequisites}
                                      </div>
                                    ` : ''}
                                  </div>

                                  <div class="lesson-card-actions">
                                    <!-- Interactive Bookmark Button -->
                                    <button type="button" 
                                      class="lesson-action-icon-btn ${isBookmarked ? 'bookmarked' : ''}" 
                                      data-bookmark-id="${lesson.id}" 
                                      aria-label="${ui.bookmarkLesson}"
                                      title="${ui.bookmarkLesson}">
                                      ${isBookmarked ? ICONS.bookmarkFilled : ICONS.bookmark}
                                    </button>

                                    <!-- Start / Read Button -->
                                    <a href="/learn/${category.slug}/${lesson.slug}" class="lesson-start-link-btn" data-lesson-id="${lesson.id}">
                                      <span>${ui.startThisLesson}</span>
                                      ${ICONS.arrowRight}
                                    </a>
                                  </div>
                                </div>
                              </article>
                            `;
                          }).join('')}
                        </div>

                        <!-- Smart Module Recommendations Box -->
                        ${rec ? `
                          <div class="learn-module-recommendation">
                            <div class="rec-header">
                              <span class="rec-badge">${ICONS.sparkles} ${ui.smartRecommendations}</span>
                              <span class="rec-next-title">${lang === 'np' ? 'अर्को मोड्युल:' : 'Next up:'} <strong>${rec.nextModule}</strong></span>
                            </div>

                            <div class="rec-grid">
                              ${rec.relatedGuide ? `
                                <div class="rec-card">
                                  <span class="rec-card-kicker">${ui.recommendedGuide}</span>
                                  <h5>${rec.relatedGuide.title}</h5>
                                  <span class="rec-card-meta">${ICONS.clock} ${rec.relatedGuide.duration}</span>
                                </div>
                              ` : ''}

                              ${rec.relevantCalc ? `
                                <a href="/${rec.relevantCalc.slug}" class="rec-card rec-card-calc">
                                  <span class="rec-card-kicker">${ui.recommendedCalc}</span>
                                  <h5>${rec.relevantCalc.name}</h5>
                                  <span class="rec-card-action">${ui.openCalculator} ${ICONS.arrowRight}</span>
                                </a>
                              ` : ''}

                              ${rec.glossaryTerms && rec.glossaryTerms.length > 0 ? `
                                <div class="rec-card rec-card-glossary">
                                  <span class="rec-card-kicker">${ui.recommendedGlossary}</span>
                                  <div class="rec-glossary-chips">
                                    ${rec.glossaryTerms.map(term => `
                                      <span class="rec-term-chip">${term}</span>
                                    `).join('')}
                                  </div>
                                </div>
                              ` : ''}
                            </div>
                          </div>
                        ` : ''}
                      </div>

                    </section>
                  `;
                }).join('')}
              </div>

              <!-- Bottom Learning Sequence Bar -->
              <nav class="learn-sequence-bar learn-seq-bottom" aria-label="${ui.learningSequence}">
                <div class="seq-item seq-prev disabled" id="bottom-seq-prev">
                  <span class="seq-direction">${ICONS.chevronLeft} ${ui.previousLesson}</span>
                  <span class="seq-title">-</span>
                </div>
                <div class="seq-item seq-curr" id="bottom-seq-curr">
                  <span class="seq-direction">${ui.currentLesson}</span>
                  <span class="seq-title">${currentLesson ? (currentLesson[lang]?.title || currentLesson.en.title) : catTitle}</span>
                </div>
                <div class="seq-item seq-next ${nextLesson ? '' : 'disabled'}" id="bottom-seq-next">
                  <span class="seq-direction">${ui.nextLesson} ${ICONS.chevronRight}</span>
                  <span class="seq-title">${nextLesson ? (nextLesson[lang]?.title || nextLesson.en.title) : '-'}</span>
                </div>
              </nav>

              <!-- Related Calculators Bridge Section -->
              ${category.relatedCalculators && category.relatedCalculators.length > 0 ? `
                <section class="learn-related-section" id="cat-calculators" aria-label="${ui.relatedCalculators}">
                  <div class="learn-section-header">
                    <span class="learn-section-kicker">${ui.practiceBadge}</span>
                    <h2 class="learn-section-title">${ui.relatedCalculators}</h2>
                    <p class="learn-section-sub">
                      ${lang === 'np' 
                        ? 'यस विषयमा सिकेका अवधारणाहरू आफ्नै आम्दानी, ऋण वा लगानीमा प्रत्यक्ष लागू गरी हेर्नुहोस्:' 
                        : 'Put the financial concepts learned in this path into immediate practice with our interactive tools:'}
                    </p>
                  </div>

                  <div class="learn-rel-grid">
                    ${category.relatedCalculators.map(calcKey => {
                      const meta = CALC_METADATA[calcKey] || {
                        name: { en: 'Financial Calculator', np: 'वित्तीय Calculator' },
                        desc: { en: 'Interactive calculator for Nepal.', np: 'नेपालका लागि अन्तरक्रियात्मक Calculator।' },
                        icon: ICONS.calculator || ICONS.target
                      };
                      const name = meta.name[lang] || meta.name.en;
                      const desc = meta.desc[lang] || meta.desc.en;
                      const calcUrl = CALCULATOR_ROUTES[calcKey] || ROUTES.CALCULATORS;

                      return `
                        <a href="${calcUrl}" class="learn-rel-card">
                          <div class="learn-rel-card-icon" aria-hidden="true">
                            ${meta.icon}
                          </div>
                          <div class="learn-rel-card-content">
                            <h4>${name}</h4>
                            <p>${desc}</p>
                            <span class="learn-rel-link">${ui.openCalculator} ${ICONS.arrowRight}</span>
                          </div>
                        </a>
                      `;
                    }).join('')}
                  </div>
                </section>
              ` : ''}

              <!-- Related Editorial Guides Section -->
              ${category.relatedGuides && category.relatedGuides.length > 0 ? `
                <section class="learn-related-guides-section" id="cat-guides" aria-label="${ui.guidesTitle}">
                  <div class="learn-section-header">
                    <span class="learn-section-kicker">${ui.guides}</span>
                    <h2 class="learn-section-title">${ui.guidesTitle}</h2>
                    <p class="learn-section-sub">
                      ${lang === 'np'
                        ? 'यस विषयमा थप गहिराइमा पुग्न तयार गरिएका कर्नरस्टोन गाइडहरू:'
                        : 'Deep-dive references and cornerstone publications for this topic in Nepal:'}
                    </p>
                  </div>

                  <div class="learn-guides-grid">
                    ${category.relatedGuides.map(guide => `
                      <div class="learn-guide-card">
                        <div class="learn-guide-badge">
                          <span>${ICONS.book} ${guide.difficulty || 'Beginner'}</span>
                          <span>${ICONS.clock} ${guide.duration}</span>
                        </div>
                        <h3>${guide.title}</h3>
                        <div class="learn-guide-link">
                          <span>${ui.readGuide}</span>
                          ${ICONS.arrowRight}
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </section>
              ` : ''}

              <!-- Category Glossary Terms Section -->
              ${catGlossaryTerms.length > 0 ? `
                <section class="learn-cat-glossary-section" id="cat-glossary" aria-label="${isEn ? 'Key Glossary Terms' : 'मुख्य शब्दावली'}">
                  <div class="learn-section-header">
                    <span class="learn-section-kicker">${isEn ? 'Glossary' : 'शब्दावली'}</span>
                    <h2 class="learn-section-title">${isEn ? 'Key Financial Terms in This Domain' : 'यस विषयका प्रमुख वित्तीय शब्दहरू'}</h2>
                    <p class="learn-section-sub">
                      ${isEn 
                        ? 'Essential definitions and terminology you will encounter across lessons and guides:' 
                        : 'यस विषयका पाठ तथा गाइडहरूमा प्रयोग हुने मुख्य प्राविधिक शब्दहरूको संक्षिप्त परिभाषा:'}
                    </p>
                  </div>

                  <div class="cat-glossary-grid">
                    ${catGlossaryTerms.map(term => {
                      const termDef = term.oneLineDef ? (term.oneLineDef[lang] || term.oneLineDef.en) : (term.def ? (term.def[lang] || term.def.en) : '');
                      const termTitle = isEn ? term.term : (term.termNp || term.term);
                      return `
                        <a href="/learn/glossary/${term.slug}" class="cat-glossary-card" style="text-decoration:none;color:inherit;display:block;">
                          <div class="cat-glossary-card-top">
                            <span class="content-type-badge badge-glossary">${isEn ? 'Glossary' : 'शब्दावली'}</span>
                          </div>
                          <h3 class="cat-glossary-term">${termTitle}</h3>
                          <p class="cat-glossary-def">${termDef}</p>
                        </a>
                      `;
                    }).join('')}
                  </div>
                </section>
              ` : ''}

              <!-- Category Downloadable Resources Section -->
              ${catResources.length > 0 ? `
                <section class="learn-cat-resources-section" id="cat-resources" aria-label="${isEn ? 'Downloadable Resources' : 'डाउनलोड गर्न मिल्ने स्रोतहरू'}">
                  <div class="learn-section-header">
                    <span class="learn-section-kicker">${isEn ? 'Resources' : 'स्रोतहरू'}</span>
                    <h2 class="learn-section-title">${isEn ? 'Practical Worksheets & Templates' : 'व्यावहारिक चेकलिस्ट तथा टेम्प्लेटहरू'}</h2>
                    <p class="learn-section-sub">
                      ${isEn 
                        ? 'Handcrafted worksheets, spreadsheets, and decision templates designed for Nepal:' 
                        : 'नेपाली परिवेशका लागि तयार पारिएका व्यावहारिक चेकलिस्ट र एक्सेल टेम्प्लेटहरू:'}
                    </p>
                  </div>

                  <div class="cat-resources-grid">
                    ${catResources.map(res => {
                      const resTitle = res.title ? (res.title[lang] || res.title.en) : 'Worksheet';
                      const resDesc = res.desc ? (res.desc[lang] || res.desc.en) : '';
                      const isHtml = (res.downloadUrl || '').endsWith('.html');
                      const downloadAttr = isHtml ? '' : `download="${res.downloadFilename || 'resource'}"`;
                      const targetAttr = isHtml ? 'target="_blank" rel="noopener noreferrer"' : '';
                      const badge = res.formatBadge || res.type || (isEn ? 'Toolkit' : 'उपकरण');

                      const highlights = Array.isArray(res.highlights) ? res.highlights : [];
                      const highlightsHtml = highlights.length > 0 ? `
                        <div class="learn-res-highlights" style="margin: 10px 0 14px; display:flex; flex-wrap:wrap; gap:5px;">
                          ${highlights.map(h => `<span class="learn-res-highlight-chip" style="font-size:11px; padding:2px 8px; border-radius:9999px; background:var(--color-surface-subtle); border:1px solid var(--color-border-subtle);">${typeof h === 'object' ? (h[lang] || h.en) : h}</span>`).join('')}
                        </div>
                      ` : '';

                      return `
                        <div class="cat-resource-card learn-resource-card" style="padding:22px; border-radius:18px;">
                          <div class="cat-res-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                            <div class="res-badge-wrap" style="display:flex; align-items:center; gap:6px;">
                              <span class="cat-res-type-pill" style="font-size:11px; font-weight:600; padding:3px 8px; border-radius:9999px; background:rgba(29, 161, 242, 0.08); color:var(--color-accent);">${badge}</span>
                            </div>
                            <span class="cat-res-size" style="font-size:11.5px; color:var(--color-text-muted);">${res.fileSize || ''}</span>
                          </div>
                          <h3 class="cat-res-title" style="font-size:16.5px; font-weight:600; margin-bottom:6px; line-height:1.3;">${resTitle}</h3>
                          <p class="cat-res-desc" style="font-size:13px; color:var(--color-text-secondary); line-height:1.5;">${resDesc}</p>
                          ${highlightsHtml}
                          <div class="cat-res-footer" style="display:flex; gap:8px; margin-top:auto; padding-top:12px; border-top:1px solid var(--color-border-subtle);">
                            <button type="button" class="btn btn-outline btn-sm learn-cat-preview-btn" data-res-id="${res.id}" style="flex:1; justify-content:center; border-radius:9999px; font-size:12px;" onclick="if(window.openResourcePreviewModal) window.openResourcePreviewModal('${res.id}', '${lang}')">
                              <span>${isEn ? 'Preview' : 'पूर्वावलोकन'}</span>
                            </button>
                            <a href="${res.downloadUrl || (res.downloadFilename ? `assets/downloads/${res.downloadFilename}` : 'assets/downloads/nepal-personal-budget-planner.csv')}" class="cat-res-download-btn btn btn-primary btn-sm" ${downloadAttr} ${targetAttr} data-resource-title="${resTitle.replace(/"/g, '&quot;')}" style="flex:1.2; justify-content:center; border-radius:9999px; font-size:12px;">
                              <span class="btn-icon">${ICONS.download}</span>
                              <span>${isHtml ? (isEn ? 'Open' : 'खोल्नुहोस्') : (isEn ? 'Download' : 'डाउनलोड')}</span>
                            </a>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </section>
              ` : ''}

              <!-- Category Frequently Asked Questions -->
              ${category.faqs && category.faqs.length > 0 ? `
                <section class="learn-faq-section" id="cat-faqs" aria-label="${ui.faqTitle}">
                  <div class="learn-section-header">
                    <span class="learn-section-kicker">FAQ</span>
                    <h2 class="learn-section-title">${ui.faqTitle}</h2>
                    <p class="learn-section-sub">${ui.faqSubtitle}</p>
                  </div>

                  <div class="learn-faq-list">
                    ${category.faqs.map((faq, idx) => {
                      const qText = faq[lang]?.q || faq.en.q;
                      const aText = faq[lang]?.a || faq.en.a;
                      return `
                        <div class="learn-faq-item ${idx === 0 ? 'active' : ''}" id="cat-faq-${idx}">
                          <button type="button" class="learn-faq-header" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                            <span>${qText}</span>
                            ${ICONS.chevronDown}
                          </button>
                          <div class="learn-faq-body">
                            <p>${aText}</p>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </section>
              ` : ''}

              <!-- Continue Learning (Next Categories Bridge) -->
              <section class="learn-continue-section" aria-label="${ui.relatedCategories}">
                <div class="learn-section-header">
                  <span class="learn-section-kicker">${ui.continueTitle}</span>
                  <h2 class="learn-section-title">${ui.relatedCategories}</h2>
                  <p class="learn-section-sub">
                    ${lang === 'np' 
                      ? 'आफ्नो वित्तीय यात्रालाई निरन्तरता दिन अर्को महत्वपूर्ण विषय छान्नुहोस्:' 
                      : 'Expand your practical mastery with other foundational learning paths in Nepal:'}
                  </p>
                </div>

                <div class="learn-continue-grid">
                  ${nextCats.map(c => {
                    const nextTitle = c[lang]?.name || c.en.name;
                    const nextDesc = c[lang]?.shortDesc || c.en.shortDesc;
                    return `
                      <a href="${ROUTES.LEARN_CATEGORY(c.slug)}" class="learn-bridge-card">
                        <div class="learn-bridge-card-icon" aria-hidden="true">
                          ${getCategoryIcon(c.icon)}
                        </div>
                        <h3>${nextTitle}</h3>
                        <p>${nextDesc}</p>
                        <div class="learn-bridge-card-link">
                          <span>${ui.startTopic}</span>
                          ${ICONS.arrowRight}
                        </div>
                      </a>
                    `;
                  }).join('')}
                </div>
              </section>

            </main>

          </div>
        </div>
      </section>

      <!-- 5. Notion-Style Collapsible Navigation Rail for Category -->
      <nav class="lesson-nav-rail" id="cat-nav-rail" aria-label="Quick Category Navigation">
        <div class="rail-inner">
          <button type="button" class="rail-btn" id="rail-cat-progress-btn" aria-label="${ui.progressTracker}" title="${ui.progressTracker}">
            <span class="rail-icon">${ICONS.checkCircle}</span>
            <span class="rail-mini-badge" id="rail-cat-progress-badge">${initialProgressPct}%</span>
            <span class="rail-tooltip">${ui.progressTracker}</span>
          </button>
          <button type="button" class="rail-btn" id="rail-cat-modules-btn" aria-label="${ui.courseContents}" title="${ui.courseContents}">
            <span class="rail-icon">${ICONS.list}</span>
            <span class="rail-tooltip">${ui.courseContents}</span>
          </button>
          <button type="button" class="rail-btn" id="rail-cat-tools-btn" aria-label="${ui.calculators}" title="${ui.calculators}">
            <span class="rail-icon">${ICONS.calculator}</span>
            <span class="rail-tooltip">${ui.calculators}</span>
          </button>
          <button type="button" class="rail-btn" id="rail-cat-guides-btn" aria-label="${ui.guides}" title="${ui.guides}">
            <span class="rail-icon">${ICONS.book}</span>
            <span class="rail-tooltip">${ui.guides}</span>
          </button>
          <div class="rail-divider" aria-hidden="true"></div>
          <button type="button" class="rail-btn rail-expand-btn" id="rail-cat-expand-btn" aria-label="Expand Navigator" title="Expand Navigator">
            <span class="rail-icon">${ICONS.chevronLeft}</span>
            <span class="rail-tooltip">${isEn ? 'Expand' : 'खोल्नुहोस्'}</span>
          </button>
        </div>
      </nav>

      <!-- 6. Floating Overlay Panel for Category (Drawer) -->
      <aside class="lesson-flyout-panel" id="cat-flyout-panel" aria-hidden="true" role="dialog" aria-label="Category Navigator">
        <div class="flyout-panel-header">
          <div class="flyout-header-title">
            <span class="flyout-header-icon">${ICONS.bookOpen}</span>
            <h4>${catTitle}</h4>
          </div>
          <button type="button" class="flyout-close-btn" id="cat-flyout-close-btn" aria-label="Close">
            ${ICONS.x}
          </button>
        </div>

        <div class="flyout-panel-body">
          <!-- Progress Widget -->
          <div class="sidebar-widget sidebar-progress-widget" id="cat-flyout-progress">
            <div class="sidebar-widget-header">
              <h4>${ui.progressTracker}</h4>
              <span class="sidebar-pct-text">${initialProgressPct}%</span>
            </div>
            <div class="sidebar-progress-track">
              <div class="sidebar-progress-bar" style="width: ${initialProgressPct}%;"></div>
            </div>
            <div class="sidebar-progress-sub">
              <span class="sidebar-completed-count">${completedInCat}</span> ${ui.completed} • 
              <span class="sidebar-remaining-count">${totalLessonsCount - completedInCat}</span> ${lang === 'np' ? 'बाँकी' : 'remaining'}
            </div>
          </div>

          <!-- Estimated Time Widget -->
          <div class="sidebar-widget sidebar-time-widget">
            <h4>${ui.estimatedCompletion}</h4>
            <ul class="sidebar-time-list">
              <li>
                <span>${ui.entireCategory}:</span>
                <strong>${durationLabel}</strong>
              </li>
              <li>
                <span>${ui.currentModule}:</span>
                <strong>${category.roadmap[0]?.estimatedTime || '35 min'}</strong>
              </li>
              <li>
                <span>${ui.currentLessonEst}:</span>
                <strong>${currentLesson?.duration || '15 min'}</strong>
              </li>
            </ul>
          </div>

          <!-- Modules Outline -->
          <div class="sidebar-widget sidebar-nav-widget" id="cat-flyout-modules">
            <h4>${ui.courseContents}</h4>
            <ul class="sidebar-module-links">
              ${category.roadmap.map((st, idx) => {
                const modNumber = st.moduleNumber || st.stageNumber || (idx + 1);
                const title = st[lang]?.title || st.en.title;
                return `
                  <li>
                    <a href="#module-${modNumber}" class="sidebar-mod-jump-link ${idx === 0 ? 'active' : ''}">
                      <span class="mod-idx">0${modNumber}</span>
                      <span class="mod-name">${title}</span>
                    </a>
                  </li>
                `;
              }).join('')}
            </ul>
          </div>

          <!-- Shortcuts -->
          <div class="sidebar-widget sidebar-shortcuts-widget" id="cat-flyout-shortcuts">
            <h4>${lang === 'np' ? 'द्रुत लिंकहरू' : 'Quick Shortcuts'}</h4>
            <div class="sidebar-quick-links">
              <a href="#section-calculators" class="sidebar-quick-btn">
                ${ICONS.calculator}
                <span>${ui.calculators}</span>
              </a>
              <a href="#section-guides" class="sidebar-quick-btn">
                ${ICONS.book}
                <span>${ui.guides}</span>
              </a>
              <a href="#section-faqs" class="sidebar-quick-btn">
                ${ICONS.helpCircle}
                <span>FAQ</span>
              </a>
            </div>
          </div>

          <!-- Back to Academy -->
          <div class="sidebar-widget-footer">
            <a href="${ROUTES.LEARN}" class="sidebar-back-link">
              ${ICONS.arrowRight} ${ui.backToLearn}
            </a>
          </div>
        </div>
      </aside>
      <div class="lesson-panel-backdrop" id="cat-panel-backdrop"></div>

      <!-- 5. Mobile Floating "Course Contents" Trigger & Drawer Panel -->
      <div class="mobile-contents-bar" role="region" aria-label="Mobile Navigation">
        <button type="button" class="mobile-contents-trigger-btn" id="mobile-contents-open-btn" aria-haspopup="dialog">
          ${ICONS.list}
          <span>${ui.courseContents}</span>
          <span class="mobile-progress-badge">${initialProgressPct}%</span>
        </button>
      </div>

      <!-- Mobile Drawer Modal -->
      <div class="mobile-contents-drawer" id="mobile-contents-drawer" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="mobile-drawer-backdrop" id="mobile-drawer-backdrop"></div>
        <div class="mobile-drawer-sheet">
          <div class="mobile-drawer-header">
            <div class="mobile-drawer-title-group">
              ${ICONS.bookOpen}
              <h3>${ui.courseContents}</h3>
            </div>
            <button type="button" class="mobile-drawer-close-btn" id="mobile-contents-close-btn" aria-label="${ui.closeContents}">
              ${ICONS.x}
            </button>
          </div>

          <div class="mobile-drawer-body">
            <!-- Progress Summary -->
            <div class="mobile-drawer-progress-box">
              <div class="mobile-drawer-progress-top">
                <span>${ui.progressTracker}</span>
                <strong class="mobile-drawer-pct">${initialProgressPct}%</strong>
              </div>
              <div class="sidebar-progress-track">
                <div class="sidebar-progress-bar" style="width: ${initialProgressPct}%;"></div>
              </div>
            </div>

            <!-- Modules & Lessons Jump List -->
            <div class="mobile-drawer-modules-list">
              ${category.roadmap.map((st, sIdx) => {
                const modNum = st.moduleNumber || st.stageNumber || (sIdx + 1);
                const title = st[lang]?.title || st.en.title;
                const lessons = st.lessons || [];

                return `
                  <div class="mobile-drawer-module-group">
                    <a href="#module-${modNum}" class="mobile-drawer-mod-link">
                      <span class="mod-num">Module 0${modNum}</span>
                      <span class="mod-title">${title}</span>
                    </a>

                    <ul class="mobile-drawer-lesson-items">
                      ${lessons.map(ls => {
                        const lMeta = ls[lang] || ls.en;
                        const isDone = completedList.includes(ls.id);
                        return `
                          <li>
                            <a href="#lesson-${ls.id}" class="mobile-drawer-lesson-link ${isDone ? 'completed' : ''}">
                              <span class="status-icon">${isDone ? ICONS.checkSquare : ICONS.square}</span>
                              <span class="lesson-text">0${ls.number}. ${lMeta.title}</span>
                            </a>
                          </li>
                        `;
                      }).join('')}
                    </ul>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Quick Links -->
            <div class="mobile-drawer-shortcuts">
              <a href="#section-calculators" class="btn btn-secondary btn-sm mobile-shortcut-link">
                ${ICONS.calculator} ${ui.calculators}
              </a>
              <a href="#section-guides" class="btn btn-secondary btn-sm mobile-shortcut-link">
                ${ICONS.book} ${ui.guides}
              </a>
              <a href="#section-faqs" class="btn btn-secondary btn-sm mobile-shortcut-link">
                ${ICONS.helpCircle} FAQ
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

/**
 * Initialize Interactive Behaviors on the Category Page
 * @param {string} slug - Category URL slug
 */
export function initLearnCategoryPage(slug) {
  const category = getCategoryBySlug(slug);
  if (!category) return;

  const pageContainer = document.querySelector('.learn-category-page');
  if (!pageContainer) return;

  const totalLessons = parseInt(pageContainer.dataset.totalLessons, 10) || category.lessonCount || 6;

  // 1. Language Selector Handler
  const switchBtns = document.querySelectorAll('.learn-lang-btn');
  switchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.dataset.lang;
      if (!targetLang || targetLang === getLearnLanguage()) return;

      setLearnLanguage(targetLang);

      // Re-render category content smoothly in-place
      const appEl = document.getElementById('app');
      if (appEl) {
        appEl.innerHTML = renderLearnCategoryPage(slug);
        initLearnCategoryPage(slug);
      }
    });
  });

  // 2. FAQ Accordion Handlers
  const faqHeaders = document.querySelectorAll('.learn-faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.learn-faq-item');
      if (!item) return;

      const wasActive = item.classList.contains('active');

      // Close all items
      document.querySelectorAll('.learn-faq-item').forEach(i => {
        i.classList.remove('active');
        const btn = i.querySelector('.learn-faq-header');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!wasActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 3. Module Collapsing Handlers (Accordion on mobile / tablet)
  const moduleHeaders = document.querySelectorAll('[data-toggle-module]');
  moduleHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      // Don't trigger if clicked on child links or action buttons
      if (e.target.closest('a') || e.target.closest('button.btn') || e.target.closest('.lesson-action-icon-btn')) return;

      const modBlock = header.closest('.learn-module-block');
      if (!modBlock) return;

      const isCollapsed = modBlock.classList.contains('collapsed');
      if (isCollapsed) {
        modBlock.classList.remove('collapsed');
        header.setAttribute('aria-expanded', 'true');
      } else {
        modBlock.classList.add('collapsed');
        header.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // 4. Update UI Progress Counters
  function updateProgressUI() {
    const completedList = getCompletedLessons();
    // Count how many completed lessons belong to this category
    const catLessonElements = document.querySelectorAll('.learn-lesson-card[data-lesson-id]');
    let catCompletedCount = 0;
    catLessonElements.forEach(card => {
      const id = card.dataset.lessonId;
      if (completedList.includes(id)) {
        catCompletedCount++;
        card.classList.add('lesson-completed');
      } else {
        card.classList.remove('lesson-completed');
      }
    });

    const pct = totalLessons > 0 ? Math.round((catCompletedCount / totalLessons) * 100) : 0;

    // Update Hero progress pill
    const heroProgressFill = document.querySelector('.hero-progress-fill');
    const heroProgressText = document.querySelector('.hero-progress-text');
    if (heroProgressFill) heroProgressFill.style.width = `${pct}%`;
    if (heroProgressText) {
      const lang = getLearnLanguage();
      heroProgressText.textContent = `${pct}% ${lang === 'np' ? 'सम्पन्न' : 'Completed'}`;
    }

    // Update Sidebar progress widget
    const sidebarBar = document.querySelector('.sidebar-progress-bar');
    const sidebarPct = document.querySelector('.sidebar-pct-text');
    const sidebarComp = document.querySelector('.sidebar-completed-count');
    const sidebarRem = document.querySelector('.sidebar-remaining-count');
    if (sidebarBar) sidebarBar.style.width = `${pct}%`;
    if (sidebarPct) sidebarPct.textContent = `${pct}%`;
    if (sidebarComp) sidebarComp.textContent = `${catCompletedCount}`;
    if (sidebarRem) sidebarRem.textContent = `${Math.max(0, totalLessons - catCompletedCount)}`;

    // Update Mobile Drawer progress
    const mobileBadge = document.querySelector('.mobile-progress-badge');
    const mobilePct = document.querySelector('.mobile-drawer-pct');
    if (mobileBadge) mobileBadge.textContent = `${pct}%`;
    if (mobilePct) mobilePct.textContent = `${pct}%`;
  }

  // 5. Completion Toggle Checkbox Handlers
  const checkButtons = document.querySelectorAll('.lesson-checkbox-btn');
  checkButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lessonId = btn.dataset.lessonId;
      if (!lessonId) return;

      const isCompleted = toggleLessonCompleted(lessonId);
      if (isCompleted) {
        btn.classList.add('checked');
        btn.innerHTML = ICONS.checkSquare;
      } else {
        btn.classList.remove('checked');
        btn.innerHTML = ICONS.square;
      }

      updateProgressUI();
    });
  });

  // 6. Bookmark Toggle Handlers
  const bookmarkButtons = document.querySelectorAll('[data-bookmark-id]');
  bookmarkButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lessonId = btn.dataset.bookmarkId;
      if (!lessonId) return;

      const isBookmarked = toggleLessonBookmark(lessonId);
      if (isBookmarked) {
        btn.classList.add('bookmarked');
        btn.innerHTML = ICONS.bookmarkFilled;
      } else {
        btn.classList.remove('bookmarked');
        btn.innerHTML = ICONS.bookmark;
      }
    });
  });

  // 7. Lesson Start Button Click / Sequence Updates
  const allLessonCards = Array.from(document.querySelectorAll('.learn-lesson-card'));
  allLessonCards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on checkbox or bookmark button
      if (e.target.closest('.lesson-checkbox-btn') || e.target.closest('[data-bookmark-id]')) return;

      const lessonUrl = card.getAttribute('data-lesson-url');
      if (lessonUrl) {
        if (window._rpNavigateTo) {
          window._rpNavigateTo(lessonUrl);
        } else {
          window.location.href = lessonUrl;
        }
        return;
      }
      const prevLesson = idx > 0 ? allLessonCards[idx - 1] : null;
      const currLesson = card;
      const nextLesson = idx < allLessonCards.length - 1 ? allLessonCards[idx + 1] : null;

      const currTitle = currLesson.querySelector('.lesson-title')?.textContent || 'Lesson';
      const prevTitle = prevLesson ? prevLesson.querySelector('.lesson-title')?.textContent : '-';
      const nextTitle = nextLesson ? nextLesson.querySelector('.lesson-title')?.textContent : '-';

      // Update Top Sequence Bar
      const topPrev = document.getElementById('top-seq-prev');
      const topCurr = document.getElementById('top-seq-curr');
      const topNext = document.getElementById('top-seq-next');

      if (topCurr) topCurr.querySelector('.seq-title').textContent = currTitle;
      if (topPrev) {
        topPrev.querySelector('.seq-title').textContent = prevTitle;
        topPrev.classList.toggle('disabled', !prevLesson);
        if (prevLesson) {
          topPrev.onclick = () => prevLesson.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      if (topNext) {
        topNext.querySelector('.seq-title').textContent = nextTitle;
        topNext.classList.toggle('disabled', !nextLesson);
        if (nextLesson) {
          topNext.onclick = () => nextLesson.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

      // Update Bottom Sequence Bar
      const btmPrev = document.getElementById('bottom-seq-prev');
      const btmCurr = document.getElementById('bottom-seq-curr');
      const btmNext = document.getElementById('bottom-seq-next');

      if (btmCurr) btmCurr.querySelector('.seq-title').textContent = currTitle;
      if (btmPrev) {
        btmPrev.querySelector('.seq-title').textContent = prevTitle;
        btmPrev.classList.toggle('disabled', !prevLesson);
        if (prevLesson) {
          btmPrev.onclick = () => prevLesson.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      if (btmNext) {
        btmNext.querySelector('.seq-title').textContent = nextTitle;
        btmNext.classList.toggle('disabled', !nextLesson);
        if (nextLesson) {
          btmNext.onclick = () => nextLesson.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

      // Highlight active card
      allLessonCards.forEach(c => c.classList.remove('active-reading'));
      card.classList.add('active-reading');
    });
  });

  // 8. Mobile "Course Contents" Drawer Handlers
  const mobileOpenBtn = document.getElementById('mobile-contents-open-btn');
  const mobileCloseBtn = document.getElementById('mobile-contents-close-btn');
  const mobileDrawer = document.getElementById('mobile-contents-drawer');
  const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');

  function openMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (mobileOpenBtn) mobileOpenBtn.addEventListener('click', openMobileDrawer);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileDrawer);

  // Close drawer on clicking jump links
  const drawerJumpLinks = document.querySelectorAll('.mobile-drawer-sheet a');
  drawerJumpLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  // 9. Notion-Style Collapsible Rail & Drawer Controller for Category
  document.querySelectorAll('body > #cat-flyout-panel').forEach(el => el.remove());
  document.querySelectorAll('body > #cat-panel-backdrop').forEach(el => el.remove());

  const catNavRail = document.getElementById('cat-nav-rail');
  const catFlyoutPanel = document.getElementById('cat-flyout-panel');
  const catFlyoutBackdrop = document.getElementById('cat-panel-backdrop');
  const catFlyoutCloseBtn = document.getElementById('cat-flyout-close-btn');
  const railCatExpandBtn = document.getElementById('rail-cat-expand-btn');
  const railCatProgressBtn = document.getElementById('rail-cat-progress-btn');
  const railCatModulesBtn = document.getElementById('rail-cat-modules-btn');
  const railCatToolsBtn = document.getElementById('rail-cat-tools-btn');
  const railCatGuidesBtn = document.getElementById('rail-cat-guides-btn');

  if (catFlyoutPanel && catFlyoutPanel.parentElement !== document.body) {
    document.body.appendChild(catFlyoutPanel);
  }
  if (catFlyoutBackdrop && catFlyoutBackdrop.parentElement !== document.body) {
    document.body.appendChild(catFlyoutBackdrop);
  }

  let isCatFlyoutOpen = false;
  let catHoverTimeout = null;
  let catCloseTimeout = null;

  function openCatFlyout(targetSection = null) {
    clearTimeout(catCloseTimeout);
    clearTimeout(catHoverTimeout);
    if (!catFlyoutPanel) return;
    isCatFlyoutOpen = true;
    catFlyoutPanel.classList.add('open');
    catFlyoutPanel.setAttribute('aria-hidden', 'false');
    if (catFlyoutBackdrop) catFlyoutBackdrop.classList.add('open');

    if (targetSection) {
      const targetEl = catFlyoutPanel.querySelector(targetSection);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  function closeCatFlyout() {
    clearTimeout(catCloseTimeout);
    clearTimeout(catHoverTimeout);
    if (!catFlyoutPanel) return;
    isCatFlyoutOpen = false;
    catFlyoutPanel.classList.remove('open');
    catFlyoutPanel.setAttribute('aria-hidden', 'true');
    if (catFlyoutBackdrop) catFlyoutBackdrop.classList.remove('open');
  }

  if (railCatExpandBtn) {
    railCatExpandBtn.addEventListener('click', () => {
      if (isCatFlyoutOpen) closeCatFlyout();
      else openCatFlyout();
    });
  }

  if (railCatProgressBtn) railCatProgressBtn.addEventListener('click', () => openCatFlyout('#cat-flyout-progress'));
  if (railCatModulesBtn) railCatModulesBtn.addEventListener('click', () => openCatFlyout('#cat-flyout-modules'));
  if (railCatToolsBtn) railCatToolsBtn.addEventListener('click', () => openCatFlyout('#cat-flyout-shortcuts'));
  if (railCatGuidesBtn) railCatGuidesBtn.addEventListener('click', () => openCatFlyout('#cat-flyout-shortcuts'));

  if (catNavRail) {
    catNavRail.addEventListener('mouseenter', () => {
      clearTimeout(catCloseTimeout);
      catHoverTimeout = setTimeout(() => {
        openCatFlyout();
      }, 160);
    });
    catNavRail.addEventListener('mouseleave', () => {
      clearTimeout(catHoverTimeout);
      catCloseTimeout = setTimeout(() => {
        if (catFlyoutPanel && !catFlyoutPanel.matches(':hover')) {
          closeCatFlyout();
        }
      }, 280);
    });
  }

  if (catFlyoutPanel) {
    catFlyoutPanel.addEventListener('mouseenter', () => {
      clearTimeout(catCloseTimeout);
    });
    catFlyoutPanel.addEventListener('mouseleave', () => {
      catCloseTimeout = setTimeout(() => {
        closeCatFlyout();
      }, 280);
    });
  }

  if (catFlyoutCloseBtn) catFlyoutCloseBtn.addEventListener('click', closeCatFlyout);
  if (catFlyoutBackdrop) catFlyoutBackdrop.addEventListener('click', closeCatFlyout);

  // 10. Smooth Scroll for Sidebar Module Links
  const sidebarLinks = document.querySelectorAll('.sidebar-mod-jump-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          if (typeof closeCatFlyout === 'function') closeCatFlyout();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          sidebarLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  // 11. Category Navigation Bar Smooth Scroll & Scroll-Spy
  const catNavTabs = document.querySelectorAll('.cat-nav-tab');
  catNavTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetId = tab.getAttribute('data-target') || (tab.getAttribute('href') || '').replace('#', '');
      if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const offsetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - 110;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          catNavTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
        }
      }
    });
  });

  // Scroll spy for category tabs
  const observedSectionIds = ['cat-overview', 'cat-lessons', 'cat-guides', 'cat-calculators', 'cat-glossary', 'cat-resources', 'cat-faqs'];
  const sectionsToObserve = observedSectionIds.map(id => document.getElementById(id)).filter(Boolean);

  if ('IntersectionObserver' in window && sectionsToObserve.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          catNavTabs.forEach(tab => {
            const target = tab.getAttribute('data-target') || (tab.getAttribute('href') || '').replace('#', '');
            if (target === id) {
              catNavTabs.forEach(t => t.classList.remove('active'));
              tab.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-120px 0px -60% 0px', threshold: 0.1 });

    sectionsToObserve.forEach(sec => observer.observe(sec));
  }

  // Initial Progress UI calculation
  updateProgressUI();

  // Download button toast feedback
  const lang = getLearnLanguage();
  const isEn = lang === 'en';
  document.querySelectorAll('.cat-res-download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-resource-title') || 'Worksheet';
      showCategoryToast(isEn ? `📥 Download started: ${title}` : `📥 डाउनलोड सुरु भयो: ${title}`);
    });
  });
}

function showCategoryToast(message) {
  let toast = document.getElementById('rp-category-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'rp-category-toast';
    toast.className = 'lesson-toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__categoryToastTimer);
  window.__categoryToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

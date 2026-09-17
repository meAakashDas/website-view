// ==============================================
// risePaisa - Complete Guides Hub Page (/learn/guides)
// Central Gateway to In-Depth Editorial Publications in Nepal
// ==============================================

import {
  POPULAR_GUIDES,
  FINANCE_JOURNEYS,
  LEARN_CATEGORIES,
  CONTENT_TYPES,
  getLearnLanguage,
  setLearnLanguage,
  onLearnLanguageChange,
  LEARN_UI,
  getSavedGuides,
  getRecentViews
} from '../data/learn.js';
import { ROUTES, buildCanonicalUrl, navigateTo } from '../routes.js';

const ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
};

export function renderLearnGuidesHubPage() {
  const lang = getLearnLanguage();
  const ui = LEARN_UI[lang] || LEARN_UI.en;
  const isEn = lang === 'en';

  const savedGuideSlugs = getSavedGuides();
  const recentViews = getRecentViews();

  // Featured Guide is PAN Guide
  const featured = POPULAR_GUIDES.find(g => g.slug === 'complete-pan-guide') || POPULAR_GUIDES[0];
  const featuredTitle = featured.title[lang] || featured.title.en;
  const featuredDesc = featured.desc[lang] || featured.desc.en;

  // Distinct Categories present in Guides
  const uniqueCategorySlugs = Array.from(new Set(POPULAR_GUIDES.map(g => g.categorySlug)));

  return `
    <div class="learn-page-wrapper guides-hub-page">
      <!-- 1. Guides Hub Hero -->
      <header class="guides-hub-hero">
        <div class="container">
          <!-- Top Breadcrumb & Language Switcher -->
          <div class="guides-top-bar">
            <nav class="guides-breadcrumb" aria-label="Breadcrumb">
              <a href="${ROUTES.HOME}">${ui.breadcrumbHome}</a>
              <span class="breadcrumb-sep">/</span>
              <a href="${ROUTES.LEARN}">${ui.breadcrumbLearn}</a>
              <span class="breadcrumb-sep">/</span>
              <span class="breadcrumb-current">${ui.tabGuides}</span>
            </nav>

            <div class="guides-lang-toggle-wrap">
              <button type="button" class="lang-pill-btn ${lang === 'en' ? 'active' : ''}" data-set-lang="en" aria-label="Switch to English">English</button>
              <button type="button" class="lang-pill-btn ${lang === 'np' ? 'active' : ''}" data-set-lang="np" aria-label="Switch to Nepali">नेपाली</button>
            </div>
          </div>

          <div class="guides-hero-content">
            <div class="guides-hero-badge">
              <span class="badge-icon">${ICONS.bookOpen}</span>
              <span>${ui.contentTypeGuide} · ${POPULAR_GUIDES.length} ${ui.guidesCountLabel}</span>
            </div>
            <h1 class="guides-hero-title">${ui.guideHubTitle}</h1>
            <p class="guides-hero-subtitle">${ui.guideHubSubtitle}</p>
          </div>

          <!-- Search & Filter Controls Bar -->
          <div class="guides-search-filter-card">
            <div class="guides-search-input-wrap">
              <span class="search-icon">${ICONS.search}</span>
              <input 
                type="text" 
                id="guides-search-input" 
                class="guides-search-input" 
                placeholder="${ui.searchGuidesPlaceholder}"
                aria-label="${ui.searchGuidesPlaceholder}"
                autocomplete="off"
              />
              <button type="button" class="search-clear-btn" id="guides-search-clear" style="display:none;" aria-label="Clear search">✕</button>
            </div>

            <!-- Domain Filter Chips (All 10 Categories) -->
            <div class="guides-filter-chips-row" id="guides-category-chips">
              <button type="button" class="guide-chip-btn active" data-cat="all">${ui.allCategories || 'All Guides'}</button>
              <button type="button" class="guide-chip-btn" data-cat="investing">${isEn ? 'Investing' : 'लगानी'}</button>
              <button type="button" class="guide-chip-btn" data-cat="taxation">${isEn ? 'Taxation' : 'कर र TDS'}</button>
              <button type="button" class="guide-chip-btn" data-cat="banking">${isEn ? 'Banking' : 'बैंकिङ'}</button>
              <button type="button" class="guide-chip-btn" data-cat="nepse">${isEn ? 'NEPSE' : 'नेप्से'}</button>
              <button type="button" class="guide-chip-btn" data-cat="insurance">${isEn ? 'Insurance' : 'बीमा'}</button>
              <button type="button" class="guide-chip-btn" data-cat="loans">${isEn ? 'Loans' : 'कर्जा'}</button>
              <button type="button" class="guide-chip-btn" data-cat="personal-finance">${isEn ? 'Personal Finance' : 'व्यक्तिगत वित्त'}</button>
              <button type="button" class="guide-chip-btn" data-cat="business">${isEn ? 'Business' : 'व्यवसाय'}</button>
              <button type="button" class="guide-chip-btn" data-cat="digital-payments">${isEn ? 'Digital Payments' : 'डिजिटल भुक्तानी'}</button>
              <button type="button" class="guide-chip-btn" data-cat="retirement-planning">${isEn ? 'Retirement' : 'अवकाश योजना'}</button>
            </div>
          </div>
        </div>
      </header>

      <main class="container guides-hub-main">
        <!-- 2. Featured Cornerstone Publication -->
        <section class="guides-featured-section" aria-label="${ui.featuredGuide}">
          <div class="guides-featured-card">
            <div class="featured-card-badge">
              <span class="badge-sparkle">${ICONS.sparkles}</span>
              <span>${ui.featuredGuide}</span>
            </div>
            <div class="featured-card-body">
              <div class="featured-text-col">
                <div class="featured-meta-row">
                  <span class="content-type-badge badge-guide">${ui.contentTypeGuide}</span>
                  <span class="featured-cat-tag">Taxation & TDS</span>
                  <span class="featured-time-tag">${featured.readTime}</span>
                  <span class="featured-updated-tag">FY 2083/84</span>
                </div>
                <h2 class="featured-title">
                  <a href="/learn/guides/${featured.slug}">${featuredTitle}</a>
                </h2>
                <p class="featured-desc">${featuredDesc}</p>
                <div class="featured-actions">
                  <a href="/learn/guides/${featured.slug}" class="btn btn-primary">
                    <span>${ui.readGuide}</span>
                    ${ICONS.arrowRight}
                  </a>
                  <span class="featured-note">
                    ${isEn ? 'Mandatory for all Demat, banking & salaried earners in Nepal' : 'नेपालमा डिम्याट, बैंक र तलबजीवी सबैका लागि अनिवार्य'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. Goal-Based Finance Journeys -->
        <section class="guides-journeys-section" aria-label="${ui.financialJourneysTitle}">
          <div class="section-heading-clean">
            <div class="heading-text">
              <span class="section-kicker">${ui.financialJourneysTitle}</span>
              <h2 class="section-title">${ui.chooseGoal}</h2>
              <p class="section-sub">${ui.financialJourneysSubtitle}</p>
            </div>
          </div>

          <div class="journeys-cards-grid">
            ${FINANCE_JOURNEYS.map(journey => {
              const jTitle = journey.title[lang] || journey.title.en;
              const jTagline = journey.tagline[lang] || journey.tagline.en;
              const firstStep = journey.steps[0];
              const firstStepUrl = firstStep.type === 'guide' 
                ? `/learn/guides/${firstStep.slug}` 
                : (firstStep.type === 'lesson' ? `/learn/${firstStep.categorySlug || journey.categorySlug}/${firstStep.slug}` : `/calculators/${firstStep.slug}`);

              return `
                <div class="journey-card" data-journey-id="${journey.id}">
                  <div class="journey-card-header">
                    <span class="journey-icon-capsule" style="color:${journey.color};background:${journey.color}15">
                      ${ICONS.compass}
                    </span>
                    <span class="journey-steps-count">${journey.steps.length} ${ui.journeyStep}s</span>
                  </div>
                  <h3 class="journey-title">${jTitle}</h3>
                  <p class="journey-desc">${jTagline}</p>

                  <div class="journey-steps-preview">
                    ${journey.steps.slice(0, 3).map(s => `
                      <div class="step-mini-row">
                        <span class="step-mini-num">${s.number}</span>
                        <span class="step-mini-title">${s.title[lang] || s.title.en}</span>
                        <span class="content-type-badge badge-${s.type} mini">${s.type}</span>
                      </div>
                    `).join('')}
                  </div>

                  <div class="journey-card-footer">
                    <a href="${firstStepUrl}" class="btn btn-secondary btn-sm journey-start-btn">
                      <span>${ui.startThisJourney}</span>
                      ${ICONS.arrowRight}
                    </a>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- 4. Guides Catalog Grid (All Cornerstone Guides) -->
        <section class="guides-catalog-section" id="guides-catalog-section" aria-label="${ui.allGuides}">
          <div class="catalog-heading-clean">
            <div class="heading-text">
              <span class="section-kicker">${ui.tabGuides}</span>
              <h2 class="section-title" id="guides-catalog-title">${ui.allGuides}</h2>
            </div>
            <div class="catalog-count-pill" id="guides-counter-display">
              ${POPULAR_GUIDES.length} ${ui.guidesCountLabel}
            </div>
          </div>

          <div class="guides-cards-grid" id="guides-cards-grid">
            ${POPULAR_GUIDES.map(guide => {
              const gTitle = guide.title[lang] || guide.title.en;
              const gDesc = guide.desc[lang] || guide.desc.en;
              const gCatName = guide.categoryName ? (guide.categoryName[lang] || guide.categoryName.en) : guide.categorySlug;
              const isSaved = savedGuideSlugs.includes(guide.slug);

              return `
                <article 
                  class="knowledge-guide-card" 
                  data-guide-slug="${guide.slug}"
                  data-guide-cat="${guide.categorySlug}"
                  data-guide-difficulty="${(guide.difficulty || '').toLowerCase()}"
                  data-guide-search="${(gTitle + ' ' + gDesc + ' ' + gCatName).toLowerCase()}"
                >
                  <div class="guide-card-top">
                    <div class="guide-badges-group">
                      <span class="content-type-badge badge-guide">${ui.contentTypeGuide}</span>
                      <span class="guide-cat-badge">${gCatName}</span>
                    </div>
                    <button 
                      type="button" 
                      class="guide-bookmark-toggle ${isSaved ? 'bookmarked' : ''}" 
                      data-bookmark-guide="${guide.slug}" 
                      aria-label="${ui.saveGuide}"
                      title="${isSaved ? ui.guideSaved : ui.saveGuide}"
                    >
                      ${ICONS.bookmark}
                    </button>
                  </div>

                  <h3 class="guide-card-title">
                    <a href="/learn/guides/${guide.slug}">${gTitle}</a>
                  </h3>
                  <p class="guide-card-desc">${gDesc}</p>

                  <div class="guide-meta-pills">
                    <span class="guide-meta-pill">${ICONS.clock} ${guide.readTime}</span>
                    <span class="guide-meta-pill">${guide.sections} ${ui.guideChapter}s</span>
                    <span class="guide-meta-pill">${guide.difficulty}</span>
                  </div>

                  <div class="guide-card-footer">
                    <a href="/learn/guides/${guide.slug}" class="guide-read-link">
                      <span>${ui.readGuide}</span>
                      ${ICONS.arrowRight}
                    </a>
                  </div>
                </article>
              `;
            }).join('')}
          </div>

          <!-- Filter & Search Empty State -->
          <div id="guides-empty-state" class="guides-empty-state" style="display:none;">
            <div class="empty-icon">${ICONS.search}</div>
            <h3>${isEn ? 'No Guides Found' : 'कुनै गाइड फेला परेन'}</h3>
            <p>${isEn ? 'Try adjusting your search keywords or switching category filters.' : 'कृपया फरक शब्द खोज्नुहोस् वा अन्य क्षेत्र छान्नुहोस्।'}</p>
            <button type="button" class="btn btn-secondary btn-sm" id="reset-guides-filter-btn">
              ${isEn ? 'Reset All Filters' : 'सबै फिल्टरहरू रिसेट गर्नुहोस्'}
            </button>
          </div>
        </section>

        <!-- 5. Cross-Linking Bridge to Interactive Tools -->
        <section class="guides-bridge-section" aria-label="Interactive Financial Tools">
          <div class="guides-bridge-card">
            <div class="bridge-text">
              <span class="bridge-badge">${ui.contentTypeCalculator} Bridge</span>
              <h2 class="guides-bridge-title" style="font-size:var(--text-xl);font-weight:600;margin:0 0 var(--space-2) 0;color:var(--color-heading);">${isEn ? 'Pair Reading with Interactive Nepal Calculators' : 'पढाइलाई Calculators सँग जोड्नुहोस्'}</h2>
              <p>${isEn ? 'Move seamlessly from learning tax, loan, and NEPSE mechanics to calculating your exact figures with our suite of free Nepal calculators.' : 'नेपालको कर, ऋण, र सेयर बजारको सिद्धान्त बुझिसकेपछि आफ्नो वास्तविक रकम हिसाब गर्न हाम्रा निःशुल्क Calculators प्रयोग गर्नुहोस्।'}</p>
            </div>
            <div class="bridge-actions">
              <a href="${ROUTES.CALCULATORS}" class="btn btn-primary">
                <span>${ui.exploreCalculators}</span>
                ${ICONS.chevronRight}
              </a>
              <a href="${ROUTES.LEARN}" class="btn btn-secondary">
                <span>${ui.allPathsTitle}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

export function initLearnGuidesHubPage() {
  const lang = getLearnLanguage();

  // 1. Language Toggle Listeners
  const langBtns = document.querySelectorAll('.guides-lang-toggle-wrap [data-set-lang]');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-set-lang');
      if (targetLang && targetLang !== getLearnLanguage()) {
        setLearnLanguage(targetLang);
        if (window._rpRouterReload) {
          window._rpRouterReload();
        }
      }
    });
  });

  // 2. Search & Category Filtering
  const searchInput = document.getElementById('guides-search-input');
  const searchClear = document.getElementById('guides-search-clear');
  const categoryChips = document.querySelectorAll('#guides-category-chips .guide-chip-btn');
  const guideCards = Array.from(document.querySelectorAll('.knowledge-guide-card'));
  const emptyState = document.getElementById('guides-empty-state');
  const counterDisplay = document.getElementById('guides-counter-display');
  const resetBtn = document.getElementById('reset-guides-filter-btn');

  let activeCategory = 'all';
  let searchQuery = '';

  const filterGuides = () => {
    let visibleCount = 0;

    guideCards.forEach(card => {
      const cardCat = card.getAttribute('data-guide-cat');
      const cardSearchText = card.getAttribute('data-guide-search') || '';

      const matchesCat = (activeCategory === 'all') || (cardCat === activeCategory);
      const matchesSearch = !searchQuery || cardSearchText.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counterDisplay) {
      const ui = LEARN_UI[getLearnLanguage()] || LEARN_UI.en;
      counterDisplay.textContent = `${visibleCount} ${ui.guidesCountLabel}`;
    }

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (searchClear) searchClear.style.display = searchQuery ? 'block' : 'none';
      filterGuides();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      searchClear.style.display = 'none';
      filterGuides();
      if (searchInput) searchInput.focus();
    });
  }

  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-cat') || 'all';
      filterGuides();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      if (searchClear) searchClear.style.display = 'none';
      activeCategory = 'all';
      categoryChips.forEach(c => c.classList.toggle('active', c.getAttribute('data-cat') === 'all'));
      filterGuides();
    });
  }

  // 3. Bookmark Toggle
  const bookmarkBtns = document.querySelectorAll('[data-bookmark-guide]');
  bookmarkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const slug = btn.getAttribute('data-bookmark-guide');
      if (!slug) return;

      try {
        const saved = JSON.parse(localStorage.getItem('rp_learn_saved_guides') || '[]');
        const idx = saved.indexOf(slug);
        let nowSaved = false;
        if (idx >= 0) {
          saved.splice(idx, 1);
          nowSaved = false;
        } else {
          saved.push(slug);
          nowSaved = true;
        }
        localStorage.setItem('rp_learn_saved_guides', JSON.stringify(saved));
        btn.classList.toggle('bookmarked', nowSaved);
      } catch (err) {
        // Ignore storage errors
      }
    });
  });
}

// ==============================================
// risePaisa - Comprehensive Finance Glossary Hub (/learn/glossary)
// Searchable Financial Dictionary Tailored for Nepal
// ==============================================

import {
  getLearnLanguage,
  setLearnLanguage,
  LEARN_UI,
  GLOSSARY_CATEGORIES,
  GLOSSARY_DICTIONARY,
  searchGlossaryTerms,
  getGlossaryAlphabetMap,
  getPopularGlossaryTerms
} from '../data/learn.js';
import { ROUTES } from '../routes.js';

const ICONS = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
};

export function renderLearnGlossaryHubPage() {
  const lang = getLearnLanguage();
  const isEn = lang === 'en';
  const ui = LEARN_UI[lang] || LEARN_UI.en;

  const alphabetMap = getGlossaryAlphabetMap();
  const popularTerms = getPopularGlossaryTerms();
  const totalCount = GLOSSARY_DICTIONARY.length;

  const quickSearchExamples = [
    { label: 'SIP', slug: 'sip' },
    { label: 'Inflation', slug: 'inflation' },
    { label: 'IPO', slug: 'ipo' },
    { label: 'Dividend', slug: 'dividend' },
    { label: 'PAN', slug: 'pan' },
    { label: 'NAV', slug: 'nav' }
  ];

  return `
    <div class="learn-page-wrapper glossary-hub-page">
      <!-- 1. Glossary Hero Section -->
      <header class="glossary-hero-section">
        <div class="container">
          <!-- Top Breadcrumb & Language Switcher -->
          <div class="glossary-top-bar">
            <nav class="glossary-breadcrumb" aria-label="Breadcrumb">
              <a href="${ROUTES.HOME}">${ui.breadcrumbHome}</a>
              <span class="breadcrumb-sep">/</span>
              <a href="${ROUTES.LEARN}">${ui.breadcrumbLearn}</a>
              <span class="breadcrumb-sep">/</span>
              <span class="breadcrumb-current">${isEn ? 'Finance Glossary' : 'शब्दावली'}</span>
            </nav>

            <div class="glossary-lang-toggle">
              <button type="button" class="lang-pill-btn ${isEn ? 'active' : ''}" data-set-lang="en" aria-label="English">English</button>
              <button type="button" class="lang-pill-btn ${!isEn ? 'active' : ''}" data-set-lang="np" aria-label="Nepali">नेपाली</button>
            </div>
          </div>

          <div class="glossary-hero-content">
            <div class="glossary-hero-badge">
              <span class="badge-icon">${ICONS.bookOpen}</span>
              <span>${isEn ? 'Nepal Financial Dictionary' : 'नेपाल वित्तीय शब्दकोश'} · ${totalCount} ${isEn ? 'Terms' : 'अवधारणाहरू'}</span>
            </div>
            <h1 class="glossary-hero-title">${isEn ? 'Finance Glossary' : 'वित्तीय शब्दावली'}</h1>
            <p class="glossary-hero-subtitle">
              ${isEn 
                ? 'Understand financial terms in simple language with explanations designed specifically for Nepal.' 
                : 'नेपालको सन्दर्भमा तयार पारिएका सरल, भरपर्दो र व्यावहारिक व्याख्याहरूमार्फत वित्तीय अवधारणाहरू बुझ्नुहोस्।'}
            </p>
          </div>

          <!-- Prominent Search Box -->
          <div class="glossary-search-container">
            <div class="glossary-search-input-wrap">
              <span class="search-icon">${ICONS.search}</span>
              <input 
                type="text" 
                id="glossary-search-input" 
                class="glossary-search-input" 
                placeholder="${isEn ? 'Search financial terms... (e.g. SIP, FD, Inflation, Tax)' : 'वित्तीय शब्द खोज्नुहोस्... (जस्तै: SIP, FD, मुद्रास्फीति, PAN)'}"
                aria-label="Search financial terms"
                autocomplete="off"
              />
              <button type="button" class="search-clear-btn" id="glossary-search-clear" style="display:none;" aria-label="Clear search">
                ${ICONS.x}
              </button>
            </div>

            <!-- Quick Search Suggestion Pills -->
            <div class="glossary-quick-pills-row">
              <span class="quick-pills-label">${isEn ? 'Popular:' : 'लोकप्रिय:'}</span>
              ${quickSearchExamples.map(ex => `
                <a href="/learn/glossary/${ex.slug}" class="quick-pill-link" data-search-term="${ex.label}">
                  ${ex.label}
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </header>

      <!-- 2. Sticky Alphabet Navigation Bar -->
      <nav class="glossary-alphabet-strip" aria-label="Alphabetical Navigation">
        <div class="container alphabet-strip-container">
          <div class="alphabet-letters-row" id="glossary-alphabet-row">
            <button type="button" class="alpha-letter-btn active" data-letter="ALL">
              <span>${isEn ? 'All' : 'सबै'}</span>
            </button>
            ${alphabetMap.map(item => `
              <button 
                type="button" 
                class="alpha-letter-btn ${!item.active ? 'disabled' : ''}" 
                data-letter="${item.letter}"
                ${!item.active ? 'disabled aria-disabled="true"' : `title="${item.count} ${isEn ? 'terms' : 'शब्दहरू'}"`}
              >
                <span>${item.letter}</span>
                ${item.active ? `<span class="alpha-letter-count">${item.count}</span>` : ''}
              </button>
            `).join('')}
          </div>
        </div>
      </nav>

      <main class="container glossary-main-content">
        <!-- 3. Category Filter Chips Row -->
        <section class="glossary-categories-section" aria-label="Categories">
          <div class="categories-filter-strip" id="glossary-category-chips">
            ${GLOSSARY_CATEGORIES.map((cat, idx) => `
              <button 
                type="button" 
                class="glossary-cat-chip ${idx === 0 ? 'active' : ''}" 
                data-cat="${cat.slug}"
              >
                <span>${cat.name[lang] || cat.name.en}</span>
              </button>
            `).join('')}
          </div>
        </section>

        <!-- Dynamic Results Counter Bar (Visible when filtering) -->
        <div class="glossary-results-status" id="glossary-results-status" style="display:none;">
          <span id="glossary-results-count-text">Showing terms</span>
          <button type="button" id="glossary-reset-filters-btn" class="reset-filter-link">${isEn ? 'Reset Filters' : 'फिल्टर हटाउनुहोस्'}</button>
        </div>

        <!-- 4. Featured Cornerstone Definitions (Visible by default) -->
        <section class="glossary-featured-section" id="glossary-featured-section">
          <div class="section-header-clean">
            <div class="section-title-wrap">
              <span class="section-kicker">${isEn ? 'Core Foundations' : 'आधारभूत अवधारणाहरू'}</span>
              <h2 class="section-title">${isEn ? 'Common Beginner Terms' : 'सुरुवाती लगानीकर्ताका लागि अनिवार्य शब्दहरू'}</h2>
            </div>
            <p class="section-desc">
              ${isEn 
                ? 'Master these foundational terms first to navigate loans, investing, and taxes in Nepal with confidence.' 
                : 'नेपालमा बैंकिङ, सेयर लगानी र कर प्रणाली बुझ्न यी आधारभूत शब्दहरूबाट अध्ययन सुरु गर्नुहोस्।'}
            </p>
          </div>

          <div class="glossary-popular-grid">
            ${popularTerms.map(term => {
              const defText = term.oneLineDef[lang] || term.oneLineDef.en;
              return `
                <article class="glossary-popular-card">
                  <div class="popular-card-top">
                    <span class="content-type-badge badge-glossary mini">Glossary</span>
                    <span class="popular-card-cat">${term.categoryName[lang] || term.categoryName.en}</span>
                  </div>
                  <h3 class="popular-card-title">
                    <a href="/learn/glossary/${term.slug}">${term.term}</a>
                  </h3>
                  <span class="popular-card-sub">${term.termNp}</span>
                  <p class="popular-card-def">${defText}</p>
                  <div class="popular-card-footer">
                    <a href="/learn/glossary/${term.slug}" class="popular-card-link">
                      <span>${isEn ? 'View Definition' : 'पूर्ण विवरण हेर्नुहोस्'}</span>
                      ${ICONS.arrowRight}
                    </a>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </section>

        <!-- 5. Complete Alphabetical Directory Index -->
        <section class="glossary-directory-section" id="glossary-directory-section">
          <div class="section-header-clean">
            <div class="section-title-wrap">
              <span class="section-kicker">${isEn ? 'A-Z Directory' : 'क-ज्ञ शब्दसूची'}</span>
              <h2 class="section-title">${isEn ? 'All Financial Definitions' : 'सम्पूर्ण वित्तीय शब्दावली'}</h2>
            </div>
            <p class="section-desc">
              ${isEn 
                ? 'Search or scroll through alphabetically indexed definitions with Nepal-specific context.' 
                : 'वर्णानुक्रम अनुसार व्यवस्थित गरिएका सबै वित्तीय शब्दहरू र तिनको विस्तृत नेपाली सन्दर्भ।'}
            </p>
          </div>

          <div class="glossary-directory-stream" id="glossary-directory-stream">
            ${renderAlphabeticalDirectory(GLOSSARY_DICTIONARY, lang)}
          </div>
        </section>

        <!-- 6. Browse by Domain Categories Grid -->
        <section class="glossary-domains-grid-section" aria-label="Browse by Topic">
          <div class="section-header-clean">
            <div class="section-title-wrap">
              <span class="section-kicker">${isEn ? 'Topic Exploration' : 'विषयगत खोजी'}</span>
              <h2 class="section-title">${isEn ? 'Browse by Domain' : 'क्षेत्र अनुसार शब्दावली'}</h2>
            </div>
          </div>

          <div class="glossary-domains-grid">
            ${GLOSSARY_CATEGORIES.filter(c => c.slug !== 'all').map(cat => {
              const catTerms = GLOSSARY_DICTIONARY.filter(t => t.categorySlug === cat.slug);
              return `
                <div class="domain-card" data-domain-slug="${cat.slug}">
                  <div class="domain-card-icon">${cat.icon}</div>
                  <div class="domain-card-body">
                    <div class="domain-card-header">
                      <h3 class="domain-card-title">${cat.name[lang] || cat.name.en}</h3>
                      <span class="domain-terms-badge">${catTerms.length} ${isEn ? 'terms' : 'शब्द'}</span>
                    </div>
                    <p class="domain-card-desc">${cat.desc[lang] || cat.desc.en}</p>
                    <button type="button" class="domain-filter-btn" data-filter-cat="${cat.slug}">
                      <span>${isEn ? 'View Category Terms' : 'यस क्षेत्रका शब्दहरू'}</span>
                      ${ICONS.arrowRight}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- 7. Continue Learning Cross-Linking Banner -->
        <section class="glossary-learning-bridge">
          <div class="learning-bridge-card">
            <div class="bridge-text-group">
              <span class="content-type-badge badge-guide mini">${isEn ? 'Knowledge Ecosystem' : 'ज्ञान प्रणाली'}</span>
              <h2 class="bridge-title">${isEn ? 'Ready to apply these financial concepts?' : 'यी वित्तीय अवधारणाहरू व्यवहारमा उतार्न तयार हुनुहुन्छ?'}</h2>
              <p class="bridge-desc">
                ${isEn 
                  ? 'Explore step-by-step lessons, comprehensive cornerstone guides, and practical calculators designed for Nepal.' 
                  : 'नेपालका लागि तयार पारिएका चरणबद्ध पाठहरू, कर्नरस्टोन गाइडहरू र क्याल्कुलेटरहरू निःशुल्क अध्ययन गर्नुहोस्।'}
              </p>
            </div>
            <div class="bridge-actions-group">
              <a href="${ROUTES.LEARN}" class="btn btn-primary">
                <span>${ui.tabLessons}</span>
                ${ICONS.arrowRight}
              </a>
              <a href="${ROUTES.LEARN_GUIDES}" class="btn btn-secondary">
                <span>${ui.tabGuides}</span>
                ${ICONS.arrowRight}
              </a>
              <a href="${ROUTES.CALCULATORS}" class="btn btn-secondary">
                <span>${ui.tabCalculators}</span>
                ${ICONS.arrowRight}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

// ── Directory Stream Rendering Helper ────────────────────────
function renderAlphabeticalDirectory(termsList, lang) {
  const isEn = lang === 'en';
  if (!termsList || termsList.length === 0) {
    return `
      <div class="glossary-empty-state">
        <div class="empty-state-icon">${ICONS.search}</div>
        <h3 class="empty-state-title">${isEn ? 'No financial terms found' : 'कुनै शब्द फेला परेन'}</h3>
        <p class="empty-state-desc">${isEn ? 'Try searching for an abbreviation like "FD", "SIP", or "PAN", or clear your filter.' : 'कृपया अन्य कुनै शब्द वा "FD", "SIP", "PAN" जस्ता संक्षिप्त नामहरू खोज्नुहोस्।'}</p>
      </div>
    `;
  }

  // Group terms by initial letter
  const grouped = {};
  termsList.forEach(term => {
    const letter = (term.letter || term.term.charAt(0)).toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(term);
  });

  const sortedLetters = Object.keys(grouped).sort();

  return sortedLetters.map(letter => `
    <div class="glossary-letter-group" id="letter-${letter}">
      <div class="letter-group-anchor">
        <span class="letter-char">${letter}</span>
        <span class="letter-term-count">${grouped[letter].length} ${isEn ? 'entries' : 'शब्दहरू'}</span>
      </div>
      <div class="letter-group-cards">
        ${grouped[letter].map(term => {
          const defText = term.oneLineDef[lang] || term.oneLineDef.en;
          return `
            <article class="glossary-entry-card" data-slug="${term.slug}">
              <div class="entry-card-header">
                <div class="entry-title-wrap">
                  <h3 class="entry-title">
                    <a href="/learn/glossary/${term.slug}">${term.term}</a>
                  </h3>
                  <span class="entry-title-np">${term.termNp}</span>
                </div>
                <div class="entry-badges-wrap">
                  <span class="entry-cat-badge">${term.categoryName[lang] || term.categoryName.en}</span>
                  <span class="entry-diff-badge">${term.difficulty}</span>
                </div>
              </div>
              <p class="entry-one-line-def">${defText}</p>
              <div class="entry-card-footer">
                <div class="entry-nepal-preview">
                  <span class="nepal-flag-icon">🇳🇵</span>
                  <span class="nepal-tagline">${term.nepalContext.headline[lang] || term.nepalContext.headline.en}</span>
                </div>
                <a href="/learn/glossary/${term.slug}" class="entry-read-link">
                  <span>${isEn ? 'Read Explanation' : 'विस्तृत हेर्नुहोस्'}</span>
                  ${ICONS.arrowRight}
                </a>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ── Interactive Controller for Glossary Hub ──────────────────
export function initLearnGlossaryHubPage() {
  const lang = getLearnLanguage();
  const isEn = lang === 'en';

  let currentQuery = '';
  let currentCategory = 'all';
  let currentLetter = 'ALL';

  const searchInput = document.getElementById('glossary-search-input');
  const searchClearBtn = document.getElementById('glossary-search-clear');
  const directoryStream = document.getElementById('glossary-directory-stream');
  const featuredSection = document.getElementById('glossary-featured-section');
  const resultsStatus = document.getElementById('glossary-results-status');
  const resultsCountText = document.getElementById('glossary-results-count-text');
  const resetFiltersBtn = document.getElementById('glossary-reset-filters-btn');

  function updateView() {
    const results = searchGlossaryTerms(currentQuery, currentCategory, currentLetter);
    const isFiltering = currentQuery.trim().length > 0 || currentCategory !== 'all' || currentLetter !== 'ALL';

    // Hide/show featured section during search/filter
    if (featuredSection) {
      featuredSection.style.display = isFiltering ? 'none' : 'block';
    }

    // Results status message
    if (resultsStatus && resultsCountText) {
      if (isFiltering) {
        resultsStatus.style.display = 'flex';
        const label = isEn 
          ? `Found ${results.length} financial definition${results.length === 1 ? '' : 's'}`
          : `कुल ${results.length} वटा वित्तीय परिभाषा भेटियो`;
        resultsCountText.textContent = label;
      } else {
        resultsStatus.style.display = 'none';
      }
    }

    // Update directory stream
    if (directoryStream) {
      directoryStream.innerHTML = renderAlphabeticalDirectory(results, lang);
    }
  }

  // 1. Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentQuery = searchInput.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = currentQuery.length > 0 ? 'flex' : 'none';
      }
      updateView();
    });
  }

  // 2. Search Clear Button
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentQuery = '';
      searchClearBtn.style.display = 'none';
      searchInput.focus();
      updateView();
    });
  }

  // 3. Alphabet Letter Buttons
  const alphabetBtns = document.querySelectorAll('.alpha-letter-btn:not(.disabled)');
  alphabetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alphabetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentLetter = btn.getAttribute('data-letter') || 'ALL';

      // If user is not searching, smooth scroll to letter anchor if all is not selected
      if (currentLetter !== 'ALL' && !currentQuery.trim() && currentCategory === 'all') {
        const anchor = document.getElementById(`letter-${currentLetter}`);
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        updateView();
      }
    });
  });

  // 4. Category Filter Chips
  const categoryChips = document.querySelectorAll('.glossary-cat-chip');
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      currentCategory = chip.getAttribute('data-cat') || 'all';
      updateView();
    });
  });

  // 5. Domain Grid Cards Filter Trigger
  const domainFilterBtns = document.querySelectorAll('.domain-filter-btn');
  domainFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const catSlug = btn.getAttribute('data-filter-cat');
      if (!catSlug) return;

      currentCategory = catSlug;
      categoryChips.forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-cat') === catSlug);
      });

      updateView();

      if (directoryStream) {
        directoryStream.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 6. Reset Filters Button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentQuery = '';
      currentCategory = 'all';
      currentLetter = 'ALL';

      if (searchClearBtn) searchClearBtn.style.display = 'none';

      categoryChips.forEach((c, idx) => c.classList.toggle('active', idx === 0));
      alphabetBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-letter') === 'ALL'));

      updateView();
    });
  }

  // 7. Bilingual Toggle Buttons
  document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-set-lang');
      if (targetLang && targetLang !== lang) {
        setLearnLanguage(targetLang);
        window.location.reload();
      }
    });
  });
}

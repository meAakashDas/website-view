// ==============================================
// risePaisa - Search Results Page
// Route: /search  →  /search?q=...
// Full-page search results with filters, grouping, empty states
// ==============================================

import {
  querySearch, groupResultsByType, highlightMatch,
  POPULAR_SEARCHES, TRENDING_TOPICS, buildSearchIndex,
  registerSearchItems, emitSearchEvent,
} from '../search.js';
import { ROUTES } from '../routes.js';
import { getResources } from '../data/resources.js';

// ── Type badge colors & icons ─────────────────────────────────────────
const TYPE_META = {
  lesson: {
    label: 'Lesson', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    color: 'var(--color-accent)',
  },
  guide: {
    label: 'Guide', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    color: '#10b981',
  },
  calculator: {
    label: 'Calculator', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
    color: '#f59e0b',
  },
  glossary: {
    label: 'Glossary', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',
    color: '#8b5cf6',
  },
  resource: {
    label: 'Resource', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    color: '#06b6d4',
  },
  category: {
    label: 'Category', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    color: '#ec4899',
  },
  faq: {
    label: 'FAQ', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    color: '#64748b',
  },
};

// ── Register resources into search index ─────────────────────────────
function registerResources() {
  try {
    const resources = getResources ? getResources() : [];
    const resourceItems = resources.map(r => ({
      id: `resource-${r.slug}`,
      type: 'resource',
      title: r.title,
      titleNp: '',
      description: r.shortDescription || '',
      category: r.category || 'Resources',
      categorySlug: 'resources',
      difficulty: '',
      readingTime: '',
      updatedDate: '',
      lang: ['en'],
      url: ROUTES.RESOURCE_DETAIL(r.slug),
      breadcrumb: `Resources › ${r.category || ''}`,
      tags: [r.category || '', r.title.toLowerCase()],
      keywords: [r.title.toLowerCase(), r.slug.replace(/-/g, ' ')],
    }));
    registerSearchItems(resourceItems);
  } catch {
    // Silent - resources optional
  }
}

// ── Render a single result card ───────────────────────────────────────
function renderResultCard(item, query) {
  const meta = TYPE_META[item.type] || TYPE_META.lesson;
  const highlighted = highlightMatch(item.title, query);
  const desc = item.description
    ? highlightMatch(item.description.slice(0, 160) + (item.description.length > 160 ? '…' : ''), query)
    : '';

  const meta1 = item.difficulty ? `<span class="sr-meta-chip">${item.difficulty}</span>` : '';
  const meta2 = item.readingTime ? `<span class="sr-meta-chip">${item.readingTime}</span>` : '';
  const meta3 = item.updatedDate ? `<span class="sr-meta-chip sr-meta-updated">Updated ${item.updatedDate}</span>` : '';
  const langChips = item.lang?.includes('np')
    ? `<span class="sr-lang-chip">EN</span><span class="sr-lang-chip">NP</span>`
    : `<span class="sr-lang-chip">EN</span>`;

  return `
    <a href="${item.url}" class="sr-result-card" data-result-type="${item.type}" aria-label="${item.title}">
      <div class="sr-result-card-inner">
        <div class="sr-result-type-badge" style="--type-color: ${meta.color}">
          <span class="sr-type-icon">${meta.icon}</span>
          <span class="sr-type-label">${meta.label}</span>
        </div>
        <div class="sr-result-body">
          <div class="sr-result-breadcrumb">${item.breadcrumb || ''}</div>
          <h3 class="sr-result-title">${highlighted}</h3>
          ${desc ? `<p class="sr-result-desc">${desc}</p>` : ''}
          <div class="sr-result-meta-row">
            ${meta1}${meta2}${meta3}
            <span class="sr-lang-chips">${langChips}</span>
          </div>
        </div>
        <div class="sr-result-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </a>
  `;
}

// ── Render filter pills ───────────────────────────────────────────────
function renderFilterPills(activeFilter) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'lesson', label: 'Lessons' },
    { id: 'guide', label: 'Guides' },
    { id: 'calculator', label: 'Calculators' },
    { id: 'glossary', label: 'Glossary' },
    { id: 'resource', label: 'Resources' },
    { id: 'category', label: 'Categories' },
  ];

  return filters.map(f => `
    <button class="sr-filter-pill ${f.id === activeFilter ? 'active' : ''}" data-filter="${f.id}" type="button" aria-pressed="${f.id === activeFilter}">
      ${f.label}
    </button>
  `).join('');
}

// ── Render popular searches grid ──────────────────────────────────────
function renderPopularGrid() {
  return `
    <section class="sr-popular-section" aria-label="Popular searches">
      <h2 class="sr-popular-title">Popular Searches</h2>
      <div class="sr-popular-grid" role="list">
        ${POPULAR_SEARCHES.map(term => `
          <button class="sr-popular-chip" role="listitem" data-search-term="${term}" type="button">${term}</button>
        `).join('')}
      </div>
      <h2 class="sr-popular-title" style="margin-top: var(--space-12)">Trending Topics</h2>
      <div class="sr-trending-grid" role="list">
        ${TRENDING_TOPICS.map(t => `
          <a href="${t.url}" class="sr-trending-item" role="listitem">
            <span>${t.label}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

// ── Render empty state ────────────────────────────────────────────────
function renderEmptyState(query) {
  return `
    <div class="sr-empty-state" role="status">
      <div class="sr-empty-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </div>
      <h2 class="sr-empty-title">No results for "<strong>${query.replace(/</g, '&lt;')}</strong>"</h2>
      <p class="sr-empty-desc">We couldn't find an exact match. Try a different spelling or browse the suggestions below.</p>
      <div class="sr-empty-suggestions">
        <p class="sr-empty-suggestions-label">Try searching for:</p>
        <div class="sr-popular-grid">
          ${POPULAR_SEARCHES.slice(0, 8).map(term => `
            <button class="sr-popular-chip" data-search-term="${term}" type="button">${term}</button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ── Main page renderer ────────────────────────────────────────────────
export function renderSearchPage(searchParams) {
  const query = searchParams?.get?.('q') || '';
  const filterType = searchParams?.get?.('type') || 'all';

  return `
    <div class="search-page" role="main">
      <!-- SEO: noindex for search result pages -->
      <meta name="robots" content="noindex">

      <!-- Search Hero Bar -->
      <div class="sr-hero" role="search">
        <div class="container">
          <div class="sr-hero-inner">
            <div class="sr-search-bar-wrap">
              <div class="sr-search-bar" id="sr-search-bar">
                <span class="sr-search-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </span>
                <input
                  type="search"
                  id="sr-search-input"
                  class="sr-search-input"
                  placeholder="Search finance topics, lessons, calculators..."
                  value="${query.replace(/"/g, '&quot;')}"
                  autocomplete="off"
                  autocorrect="off"
                  autocapitalize="off"
                  spellcheck="false"
                  aria-label="Search RisePaisa"
                  data-voice-ready="true"
                  aria-autocomplete="list"
                  aria-controls="sr-live-results"
                >
                ${query ? `
                  <button class="sr-clear-btn" id="sr-clear-btn" type="button" aria-label="Clear search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Pills -->
      <div class="sr-filter-bar" role="toolbar" aria-label="Filter results by type">
        <div class="container">
          <div class="sr-filter-bar-inner" id="sr-filter-bar">
            ${renderFilterPills(filterType)}
          </div>
        </div>
      </div>

      <!-- Results Area -->
      <div class="sr-results-area" id="sr-results-area">
        <div class="container">
          ${query
            ? `<div id="sr-results-container" data-query="${query.replace(/"/g, '&quot;')}" data-filter="${filterType}">
                <div class="sr-loading" role="status" aria-live="polite">
                  <div class="sr-loading-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
               </div>`
            : `<div id="sr-results-container" data-query="" data-filter="all">
                ${renderPopularGrid()}
               </div>`
          }
          <div id="sr-live-results" class="sr-live-announce" aria-live="polite" aria-atomic="true" role="status"></div>
        </div>
      </div>
    </div>
  `;
}

// ── Page init ─────────────────────────────────────────────────────────
export function initSearchPage(searchParams) {
  const query = searchParams?.get?.('q') || '';
  const filterType = searchParams?.get?.('type') || 'all';

  // Ensure resources are registered
  registerResources();

  // Pre-build index in background
  setTimeout(() => buildSearchIndex(), 100);

  // Run initial search if query present
  if (query) {
    setTimeout(() => runSearch(query, filterType), 50);
  }

  // Wire up search input
  const input = document.getElementById('sr-search-input');
  const clearBtn = document.getElementById('sr-clear-btn');

  if (input) {
    input.focus();
    let debounceTimer;
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const q = input.value.trim();
        updateUrl(q, filterType);
        if (q) {
          runSearch(q, getCurrentFilter());
        } else {
          renderContainer(renderPopularGrid());
          hideClearBtn();
        }
      }, 200);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.blur();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (input) {
        input.value = '';
        input.focus();
      }
      updateUrl('', 'all');
      renderContainer(renderPopularGrid());
    });
  }

  // Filter pills
  document.getElementById('sr-filter-bar')?.addEventListener('click', (e) => {
    const pill = e.target.closest('[data-filter]');
    if (!pill) return;
    const newFilter = pill.dataset.filter;
    setActiveFilter(newFilter);
    const currentQ = input?.value.trim() || query;
    updateUrl(currentQ, newFilter);
    if (currentQ) runSearch(currentQ, newFilter);
  });

  // Popular search chips
  document.getElementById('sr-results-container')?.addEventListener('click', handleChipClick);
}

function handleChipClick(e) {
  const chip = e.target.closest('[data-search-term]');
  if (!chip) return;
  const term = chip.dataset.searchTerm;
  const input = document.getElementById('sr-search-input');
  if (input) {
    input.value = term;
    // Show clear button
    const clearBtn = document.getElementById('sr-clear-btn');
    if (!clearBtn) {
      const bar = document.getElementById('sr-search-bar');
      if (bar) {
        const btn = document.createElement('button');
        btn.className = 'sr-clear-btn';
        btn.id = 'sr-clear-btn';
        btn.type = 'button';
        btn.setAttribute('aria-label', 'Clear search');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
        btn.addEventListener('click', () => {
          input.value = '';
          updateUrl('', 'all');
          renderContainer(renderPopularGrid());
        });
        bar.appendChild(btn);
      }
    }
  }
  updateUrl(term, 'all');
  runSearch(term, 'all');
}

// ── Run search & render results ───────────────────────────────────────
function runSearch(query, filterType = 'all') {
  const typeFilter = filterType === 'all' ? null : filterType;
  const results = querySearch(query, { type: typeFilter, limit: 60 });
  const groups = groupResultsByType(results);

  emitSearchEvent(query, results.length);

  // Announce to screen readers
  const liveEl = document.getElementById('sr-live-results');
  if (liveEl) {
    liveEl.textContent = results.length
      ? `${results.length} result${results.length === 1 ? '' : 's'} found for ${query}`
      : `No results found for ${query}`;
  }

  if (results.length === 0) {
    renderContainer(renderEmptyState(query));
    document.getElementById('sr-results-container')?.addEventListener('click', handleChipClick);
    return;
  }

  const totalCount = results.length;
  const html = `
    <div class="sr-results-header" role="status" aria-live="polite">
      <span class="sr-results-count">${totalCount} result${totalCount === 1 ? '' : 's'}</span>
      <span class="sr-results-query">for "<strong>${query.replace(/</g, '&lt;')}</strong>"</span>
    </div>
    <div class="sr-groups">
      ${groups.map(group => `
        <section class="sr-group" aria-label="${group.label}" data-group="${group.type}">
          <div class="sr-group-header">
            <span class="sr-group-type-icon" style="color: ${TYPE_META[group.type]?.color || 'var(--color-accent)'}">
              ${TYPE_META[group.type]?.icon || ''}
            </span>
            <h2 class="sr-group-title">${group.label}</h2>
            <span class="sr-group-count">${group.items.length}</span>
          </div>
          <div class="sr-group-cards" role="list">
            ${group.items.map(item => renderResultCard(item, query)).join('')}
          </div>
        </section>
      `).join('')}
    </div>
  `;

  renderContainer(html);
}

// ── Helpers ───────────────────────────────────────────────────────────
function renderContainer(html) {
  const container = document.getElementById('sr-results-container');
  if (container) {
    container.innerHTML = html;
    // Re-bind chip clicks after re-render
    container.addEventListener('click', handleChipClick);
  }
}

function getCurrentFilter() {
  const activePill = document.querySelector('.sr-filter-pill.active');
  return activePill?.dataset.filter || 'all';
}

function setActiveFilter(type) {
  document.querySelectorAll('.sr-filter-pill').forEach(pill => {
    const isActive = pill.dataset.filter === type;
    pill.classList.toggle('active', isActive);
    pill.setAttribute('aria-pressed', String(isActive));
  });
}

function updateUrl(query, filterType) {
  const params = new URLSearchParams();
  if (query) params.set('q', query);
  if (filterType && filterType !== 'all') params.set('type', filterType);
  const newUrl = `${ROUTES.SEARCH || '/search'}${params.toString() ? '?' + params.toString() : ''}`;
  if (window.location.pathname + window.location.search !== newUrl) {
    window.history.replaceState({}, '', newUrl);
  }
}

function hideClearBtn() {
  document.getElementById('sr-clear-btn')?.remove();
}

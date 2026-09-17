// ==============================================
// risePaisa - Universal Search Engine
// Client-side, no external dependencies, bilingual (EN + NP)
// Covers: lessons, guides, calculators, glossary, resources, categories, FAQs
// Architecture: index-at-first-use, debounce-ready, analytics-hooked, voice-ready
// ==============================================

import { LEARN_CATEGORIES, POPULAR_GUIDES } from './data/learn.js';
import { GLOSSARY_DICTIONARY } from './data/glossaryData.js';
import { ROUTES } from './routes.js';

// ── Synonym & Acronym Map ────────────────────────────────────────────
// Bi-directional: searching any alias returns results for all mapped terms
const SYNONYMS = {
  // Acronyms → full form + related
  'ipo': ['initial public offering', 'primary market', 'share allotment', 'c-asba', 'casba', 'ipo application'],
  'sip': ['systematic investment plan', 'mutual fund sip', 'monthly investment', 'sip calculator', 'recurring investment'],
  'pan': ['permanent account number', 'tax registration', 'pan card nepal', 'irb', 'ird'],
  'fd': ['fixed deposit', 'mudatdi nikshep', 'fixed deposit calculator', 'bank deposit'],
  'rd': ['recurring deposit', 'monthly deposit'],
  'emi': ['equated monthly installment', 'loan payment', 'kista', 'monthly installment', 'loan emi'],
  'tms': ['trading management system', 'online trading nepal', 'nepse tms', 'broker platform'],
  'tds': ['tax deducted at source', 'withholding tax', 'salary tax deduction'],
  'nrb': ['nepal rastra bank', 'central bank', 'monetary policy', 'base rate'],
  'sebon': ['securities board of nepal', 'stock regulator', 'sebon nepal'],
  'cgt': ['capital gains tax', 'share profit tax', 'pugijigat labhakar'],
  'ssf': ['social security fund', 'samajik suraksha kosh', 'employee fund'],
  'cit': ['citizens investment trust', 'nagarik lagani kosh'],
  'swp': ['systematic withdrawal plan', 'regular withdrawal', 'retirement withdrawal'],
  'nav': ['net asset value', 'mutual fund nav', 'fund unit price'],
  'kyc': ['know your customer', 'identity verification', 'bank kyc'],
  'asba': ['application supported by blocked amount', 'ipo asba', 'bank blocked amount'],
  'cdsc': ['cds and clearing limited', 'demat operator', 'share registry'],
  'cagr': ['compound annual growth rate', 'investment growth rate', 'annual return'],
  'dsti': ['debt service to income', 'loan eligibility', 'loan limit'],
  'hlv': ['human life value', 'insurance calculation', 'life cover'],
  'cib': ['karja suchana kendra', 'credit score', 'cibil', 'blacklist', 'credit report'],
  'remittance': ['bipreshan', 'hundi', 'foreign employment', 'remit', 'fcy'],
  'debenture': ['bank debenture', 'bonds', 'fixed income', 'rinpatra'],
  'dollar card': ['prepaid usd card', 'forex card', 'usd 500 card'],

  // Synonyms → alternate terms
  'shares': ['stocks', 'equity', 'seyar', 'sher', 'securities', 'nepse shares'],
  'loan': ['credit', 'rin', 'karza', 'debt', 'borrowing'],
  'home loan': ['mortgage', 'ghar karza', 'housing loan', 'property loan'],
  'personal loan': ['consumer loan', 'byaktigat rin'],
  'vehicle loan': ['car loan', 'bike loan', 'gadi karza'],
  'salary tax': ['income tax', 'aayakar', 'payroll tax', 'employee tax'],
  'finance': ['personal finance', 'money management', 'financial planning'],
  'savings': ['bachat', 'saving', 'deposit', 'reserve fund'],
  'investment': ['lagani', 'investing', 'asset building', 'wealth creation'],
  'insurance': ['bima', 'life insurance', 'term insurance', 'beema'],
  'budget': ['budgeting', 'cash flow', 'expense tracking', '50-30-20'],
  'dividend': ['labhansh', 'share dividend', 'stock dividend', 'cash dividend', 'divident'],
  'inflation': ['price rise', 'mudra sphiti', 'cost of living', 'inflasion'],
  'meroshare': ['mero share', 'meroshare cdsc', 'cdsc portal', 'demat portal', 'merosheer'],
  'demat': ['dematerialised account', 'share account', 'cdsc account'],
  'mutual fund': ['mutualfund', 'open ended fund', 'close ended fund', 'fund', 'saamuhik lagani'],
  'tax': ['taxation', 'kar', 'income tax', 'tds', 'vat', 'revenue'],
  'nepse': ['nepal stock exchange', 'share market', 'stock market', 'nepsee'],

  // Nepali keywords → English topics (bilingual search support)
  'kar': ['tax', 'income tax', 'pan', 'tax calculator', 'tds'],
  'rin': ['loan', 'emi', 'home loan', 'vehicle loan', 'karza'],
  'lagani': ['investing', 'investment', 'sip', 'ipo', 'mutual fund', 'share'],
  'bachat': ['savings', 'emergency fund', 'fd', 'fixed deposit', 'saving'],
  'bima': ['insurance', 'life insurance', 'term insurance'],
  'byaj': ['interest', 'interest rate', 'base rate', 'fd interest'],
  'seyar': ['shares', 'stocks', 'nepse', 'equity'],
  'mudra sphiti': ['inflation', 'inflation calculator', 'price rise'],
  'kista': ['emi', 'installment', 'loan payment', 'loan emi'],
  'anubadhi nikshep': ['fd', 'fixed deposit', 'bank deposit'],
  'aayakar': ['income tax', 'tax', 'salary tax', 'tds'],
  'samajik suraksha': ['ssf', 'social security fund', 'employee fund'],
  'labhansh': ['dividend', 'share dividend', 'cash dividend'],
  'pugijigat labhakar': ['cgt', 'capital gains tax', 'share profit tax'],
};

// ── Calculator index ─────────────────────────────────────────────────
const CALCULATORS = [
  {
    id: 'calc-sip',
    slug: 'sip',
    title: 'SIP Calculator',
    description: 'Calculate monthly SIP returns and see how your mutual fund investments grow with compounding.',
    tags: ['sip', 'mutual fund', 'monthly investment', 'compounding', 'systematic investment plan', 'lagani'],
    category: 'Investing',
    categorySlug: 'investing',
    keywords: ['sip calculator', 'mutual fund calculator', 'monthly investment'],
  },
  {
    id: 'calc-emi',
    slug: 'emi',
    title: 'EMI Calculator',
    description: 'Calculate your monthly loan installment, total interest payable, and create an amortization schedule.',
    tags: ['emi', 'loan', 'installment', 'kista', 'monthly payment', 'rin'],
    category: 'Loans',
    categorySlug: 'loans',
    keywords: ['emi calculator', 'loan calculator', 'installment calculator'],
  },
  {
    id: 'calc-home-loan',
    slug: 'home-loan',
    title: 'Home Loan Calculator',
    description: 'Plan your home purchase in Nepal. Calculate EMI, total interest, and loan eligibility.',
    tags: ['home loan', 'housing loan', 'mortgage', 'ghar karza', 'property loan'],
    category: 'Loans',
    categorySlug: 'loans',
    keywords: ['home loan calculator', 'mortgage calculator', 'housing loan'],
  },
  {
    id: 'calc-personal-loan',
    slug: 'personal-loan',
    title: 'Personal Loan Calculator',
    description: 'Calculate personal loan EMI and total interest cost for consumer loans in Nepal.',
    tags: ['personal loan', 'consumer loan', 'byaktigat rin'],
    category: 'Loans',
    categorySlug: 'loans',
    keywords: ['personal loan calculator', 'consumer loan calculator'],
  },
  {
    id: 'calc-vehicle-loan',
    slug: 'vehicle-loan',
    title: 'Vehicle Loan Calculator',
    description: 'Calculate bike or car loan EMI and total interest for vehicle financing in Nepal.',
    tags: ['vehicle loan', 'car loan', 'bike loan', 'gadi karza', 'auto loan'],
    category: 'Loans',
    categorySlug: 'loans',
    keywords: ['vehicle loan calculator', 'car loan calculator', 'bike loan calculator'],
  },
  {
    id: 'calc-swp',
    slug: 'swp',
    title: 'SWP Calculator',
    description: 'Systematic Withdrawal Plan calculator for planning regular income from your mutual fund corpus.',
    tags: ['swp', 'systematic withdrawal', 'retirement income', 'pension', 'monthly withdrawal'],
    category: 'Investing',
    categorySlug: 'investing',
    keywords: ['swp calculator', 'withdrawal plan', 'retirement withdrawal'],
  },
  {
    id: 'calc-tax',
    slug: 'nepal-income-tax',
    title: 'Nepal Income Tax Calculator',
    description: 'Calculate your exact income tax liability for FY 2081/82 based on Nepal\'s tax slabs.',
    tags: ['income tax', 'tax calculator', 'kar', 'aayakar', 'tds', 'salary tax', 'nepal tax'],
    category: 'Taxation',
    categorySlug: 'taxation',
    keywords: ['income tax calculator', 'nepal tax calculator', 'salary tax calculator', 'tds calculator'],
  },
  {
    id: 'calc-share',
    slug: 'nepse-share',
    title: 'NEPSE Share Calculator',
    description: 'Calculate broker commission, DP charges, and capital gains tax on NEPSE stock transactions.',
    tags: ['nepse', 'share calculator', 'broker fee', 'cgt', 'capital gains', 'seyar', 'stock profit'],
    category: 'NEPSE',
    categorySlug: 'nepse',
    keywords: ['nepse calculator', 'share calculator', 'broker commission', 'capital gains tax'],
  },
  {
    id: 'calc-fd',
    slug: 'fixed-deposit',
    title: 'Fixed Deposit Calculator',
    description: 'Calculate FD and RD maturity amount and interest earned at Nepal bank rates.',
    tags: ['fd', 'fixed deposit', 'rd', 'recurring deposit', 'bank interest', 'mudatdi', 'anubadhi'],
    category: 'Banking',
    categorySlug: 'banking',
    keywords: ['fd calculator', 'fixed deposit calculator', 'rd calculator', 'bank interest calculator'],
  },
  {
    id: 'calc-retirement',
    slug: 'retirement',
    title: 'Retirement Goal Calculator',
    description: 'Plan your retirement corpus and calculate how much to save monthly to retire comfortably in Nepal.',
    tags: ['retirement', 'pension', 'retirement goal', 'corpus planning', 'abakas'],
    category: 'Personal Finance',
    categorySlug: 'personal-finance',
    keywords: ['retirement calculator', 'pension calculator', 'retirement planning'],
  },
  {
    id: 'calc-cagr',
    slug: 'cagr',
    title: 'CAGR Calculator',
    description: 'Calculate Compound Annual Growth Rate of your investments to compare returns over time.',
    tags: ['cagr', 'compound annual growth rate', 'investment return', 'growth rate'],
    category: 'Investing',
    categorySlug: 'investing',
    keywords: ['cagr calculator', 'growth rate calculator', 'compound return calculator'],
  },
  {
    id: 'calc-inflation',
    slug: 'inflation',
    title: 'Inflation Calculator',
    description: 'See how inflation erodes purchasing power over time and plan savings to beat the cost of living.',
    tags: ['inflation', 'price rise', 'cost of living', 'mudra sphiti', 'purchasing power'],
    category: 'Economics',
    categorySlug: 'economics',
    keywords: ['inflation calculator', 'price calculator', 'cost of living calculator'],
  },
];

// ── Popular searches & categories ─────────────────────────────────────
export const POPULAR_SEARCHES = [
  'SIP', 'IPO', 'Income Tax', 'MeroShare', 'Fixed Deposit',
  'NEPSE', 'Mutual Fund', 'Emergency Fund', 'Home Loan', 'Dividend',
  'Budget', 'PAN', 'Inflation', 'Demat Account',
];

export const TRENDING_TOPICS = [
  { label: 'SIP Calculator', url: ROUTES.CALCULATOR_SIP },
  { label: 'Nepal Tax 2081/82', url: ROUTES.CALCULATOR_TAX },
  { label: 'IPO Application', url: ROUTES.LEARN_LESSON('nepse', 'what-is-an-ipo') },
  { label: 'MeroShare Guide', url: ROUTES.LEARN_GUIDE('complete-meroshare-guide') },
  { label: 'Emergency Fund', url: ROUTES.LEARN_LESSON('personal-finance', 'emergency-fund') },
  { label: 'NEPSE Trading', url: ROUTES.LEARN_CATEGORY('nepse') },
];

// ── Levenshtein distance (lightweight typo tolerance) ─────────────────
function levenshtein(a, b) {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function fuzzyMatch(token, target) {
  if (!token || !target) return false;
  const a = token.toLowerCase().trim();
  const b = target.toLowerCase().trim();
  if (b.includes(a)) return true;
  if (a.length >= 4) return levenshtein(a, b) <= 2;
  return a === b;
}

// ── Expand query through synonyms ────────────────────────────────────
function expandQuery(query) {
  const q = query.toLowerCase().trim();
  const terms = new Set([q]);
  for (const [key, aliases] of Object.entries(SYNONYMS)) {
    if (fuzzyMatch(q, key) || key.includes(q)) {
      aliases.forEach(a => terms.add(a.toLowerCase()));
      terms.add(key.toLowerCase());
    }
    if (aliases.some(a => fuzzyMatch(q, a) || a.includes(q))) {
      terms.add(key.toLowerCase());
      aliases.forEach(a => terms.add(a.toLowerCase()));
    }
  }
  return [...terms];
}

// ── Score a single item against query terms ──────────────────────────
function scoreItem(item, queryTerms, rawQuery) {
  let score = 0;
  const rawQ = rawQuery.toLowerCase().trim();
  const title = (item.title || '').toLowerCase();
  const desc = (item.description || '').toLowerCase();
  const tags = (item.tags || []).map(t => t.toLowerCase());
  const keywords = (item.keywords || []).map(k => k.toLowerCase());

  // Exact title match → highest priority
  if (title === rawQ) score += 100;
  else if (title.startsWith(rawQ)) score += 80;
  else if (title.includes(rawQ)) score += 60;

  // Tag / acronym / synonym exact match
  if (tags.some(t => t === rawQ)) score += 70;
  else if (tags.some(t => t.includes(rawQ) || rawQ.includes(t))) score += 50;

  // Keyword match
  if (keywords.some(k => k.includes(rawQ))) score += 40;

  // Description contains query
  if (desc.includes(rawQ)) score += 30;

  // Expanded term matches
  for (const term of queryTerms) {
    if (term === rawQ) continue; // already counted
    if (title.includes(term)) score += 20;
    if (tags.some(t => t.includes(term) || term.includes(t))) score += 18;
    if (keywords.some(k => k.includes(term))) score += 15;
    if (desc.includes(term)) score += 10;
  }

  // Fuzzy token match (typo tolerance)
  const queryTokens = rawQ.split(/\s+/).filter(t => t.length >= 3);
  for (const token of queryTokens) {
    if (fuzzyMatch(token, title)) score += 15;
    if (tags.some(t => fuzzyMatch(token, t))) score += 12;
  }

  // Content type priority bonus
  const typePriority = {
    lesson: 10, guide: 9, calculator: 8, glossary: 7,
    resource: 5, category: 4, faq: 3,
  };
  score += (typePriority[item.type] || 0);

  return score;
}

// ── Build Search Index ───────────────────────────────────────────────
let _index = null;

export function buildSearchIndex() {
  if (_index) return _index;
  const items = [];

  // 1. Lessons from LEARN_CATEGORIES
  if (Array.isArray(LEARN_CATEGORIES)) {
    for (const cat of LEARN_CATEGORIES) {
      const catName = cat.en?.name || cat.slug;
      const catSlug = cat.slug;

      // Category itself
      items.push({
        id: `category-${catSlug}`,
        type: 'category',
        title: catName,
        titleNp: cat.np?.name || '',
        description: cat.en?.shortDesc || cat.en?.tagline || '',
        category: catName,
        categorySlug: catSlug,
        difficulty: cat.difficulty?.en || '',
        readingTime: cat.duration?.en || '',
        updatedDate: cat.lastUpdated || '',
        lang: ['en', 'np'],
        url: ROUTES.LEARN_CATEGORY(catSlug),
        breadcrumb: `Learn › ${catName}`,
        tags: cat.tags || [],
        keywords: [catName.toLowerCase(), catSlug, ...(cat.tags || [])],
      });

      // Lessons within each category
      if (Array.isArray(cat.roadmap)) {
        for (const stage of cat.roadmap) {
          if (!Array.isArray(stage.lessons)) continue;
          for (const lesson of stage.lessons) {
            const lessonTitle = lesson.en?.title || '';
            const lessonTitleNp = lesson.np?.title || '';
            items.push({
              id: `lesson-${catSlug}-${lesson.slug}`,
              type: 'lesson',
              title: lessonTitle,
              titleNp: lessonTitleNp,
              description: lesson.en?.summary || lesson.en?.keyTakeaways || '',
              category: catName,
              categorySlug: catSlug,
              difficulty: lesson.difficulty || '',
              readingTime: lesson.duration || '',
              updatedDate: lesson.updatedDate || '',
              lang: ['en', 'np'],
              url: ROUTES.LEARN_LESSON(catSlug, lesson.slug),
              breadcrumb: `Learn › ${catName}`,
              tags: [catSlug, lesson.type || 'lesson', lesson.difficulty || ''],
              keywords: [
                lessonTitle.toLowerCase(),
                lessonTitleNp.toLowerCase(),
                catSlug,
                catName.toLowerCase(),
                lesson.slug.replace(/-/g, ' '),
              ].filter(Boolean),
            });
          }
        }
      }
    }
  }

  // 2. Calculators
  for (const calc of CALCULATORS) {
    items.push({
      id: calc.id,
      type: 'calculator',
      title: calc.title,
      titleNp: '',
      description: calc.description,
      category: calc.category,
      categorySlug: calc.categorySlug,
      difficulty: 'Interactive',
      readingTime: '',
      updatedDate: '',
      lang: ['en'],
      url: `/calculators/${calc.slug}`,
      breadcrumb: `Calculators › ${calc.category}`,
      tags: calc.tags,
      keywords: calc.keywords,
    });
  }

  // 3. Glossary terms
  if (Array.isArray(GLOSSARY_DICTIONARY)) {
    for (const term of GLOSSARY_DICTIONARY) {
      const termTitle = term.term || '';
      const termNp = term.termNp || '';
      const catName = term.categoryName?.en || term.categorySlug || '';
      const termSlug = term.slug || termTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      items.push({
        id: `glossary-${termSlug}`,
        type: 'glossary',
        title: termTitle,
        titleNp: termNp,
        description: term.oneLineDef?.en || '',
        category: catName,
        categorySlug: term.categorySlug || '',
        difficulty: term.difficulty || 'Beginner',
        readingTime: term.readTime || '',
        updatedDate: '',
        lang: ['en', 'np'],
        url: ROUTES.LEARN_GLOSSARY_TERM(termSlug),
        breadcrumb: `Glossary › ${catName}`,
        tags: [
          termTitle.toLowerCase(),
          ...(term.synonyms || []),
          term.abbreviation || '',
          term.categorySlug || '',
        ].filter(Boolean),
        keywords: [
          termTitle.toLowerCase(),
          termNp.toLowerCase(),
          ...(term.synonyms || []).map(s => s.toLowerCase()),
          term.abbreviation?.toLowerCase() || '',
        ].filter(Boolean),
      });
    }
  }

  // 4. Guides from POPULAR_GUIDES
  if (Array.isArray(POPULAR_GUIDES)) {
    for (const guide of POPULAR_GUIDES) {
      const guideTitle = guide.title?.en || guide.title || '';
      const guideTitleNp = guide.title?.np || '';
      const catName = guide.categoryName?.en || guide.categorySlug || '';
      items.push({
        id: `guide-${guide.slug}`,
        type: 'guide',
        title: guideTitle,
        titleNp: guideTitleNp,
        description: guide.desc?.en || guide.desc || '',
        category: catName,
        categorySlug: guide.categorySlug || '',
        difficulty: guide.difficulty || '',
        readingTime: guide.readTime || '',
        updatedDate: guide.updated || '',
        lang: ['en', 'np'],
        url: ROUTES.LEARN_GUIDE(guide.slug),
        breadcrumb: `Learn › Guides › ${catName}`,
        tags: [guide.categorySlug, guide.badge || '', guide.difficulty || ''].filter(Boolean),
        keywords: [
          guideTitle.toLowerCase(),
          guideTitleNp.toLowerCase(),
          guide.slug.replace(/-/g, ' '),
          guide.categorySlug,
        ].filter(Boolean),
      });
    }
  }

  // 5. Resources are added lazily via registerSearchItems()

  _index = items;
  return _index;
}

// Allow external registration of resource items (called from pages/search.js)
export function registerSearchItems(additionalItems) {
  const idx = buildSearchIndex();
  // Avoid duplicates
  const existingIds = new Set(idx.map(i => i.id));
  for (const item of additionalItems) {
    if (!existingIds.has(item.id)) {
      idx.push(item);
      existingIds.add(item.id);
    }
  }
}

// ── Main Query Function ───────────────────────────────────────────────
/**
 * @param {string} query - User's search input
 * @param {{ type?: string, limit?: number }} options
 * @returns {SearchItem[]} Ranked results
 */
export function querySearch(query, options = {}) {
  if (!query || query.trim().length < 1) return [];

  const rawQ = query.trim();
  const expandedTerms = expandQuery(rawQ);
  const index = buildSearchIndex();
  const { type = null, limit = 50 } = options;

  let results = [];
  for (const item of index) {
    if (type && item.type !== type) continue;
    const s = scoreItem(item, expandedTerms, rawQ);
    if (s > 0) results.push({ ...item, score: s });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}

/**
 * Quick search for the live modal overlay (max 8 results, lightweight)
 * @param {string} query
 * @returns {SearchItem[]}
 */
export function quickSearch(query) {
  if (!query || query.trim().length < 1) return [];
  return querySearch(query, { limit: 8 });
}

/**
 * Group results by content type for the results page
 * @param {SearchItem[]} results
 * @returns {{ type: string, label: string, items: SearchItem[] }[]}
 */
export function groupResultsByType(results) {
  const order = ['lesson', 'guide', 'calculator', 'glossary', 'resource', 'category', 'faq'];
  const labels = {
    lesson: 'Lessons',
    guide: 'Guides',
    calculator: 'Calculators',
    glossary: 'Glossary',
    resource: 'Resources',
    category: 'Categories',
    faq: 'FAQs',
  };
  const groups = {};
  for (const item of results) {
    if (!groups[item.type]) groups[item.type] = [];
    groups[item.type].push(item);
  }
  return order
    .filter(t => groups[t] && groups[t].length > 0)
    .map(t => ({ type: t, label: labels[t], items: groups[t] }));
}

/**
 * Highlight matching text within a string
 * @param {string} text
 * @param {string} query
 * @returns {string} HTML with <mark> tags
 */
export function highlightMatch(text, query) {
  if (!text || !query) return text || '';
  const safeQ = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try {
    return text.replace(new RegExp(`(${safeQ})`, 'gi'), '<mark class="search-highlight">$1</mark>');
  } catch {
    return text;
  }
}

// ── Analytics hook (fire & forget, future consumers can listen) ───────
export function emitSearchEvent(query, resultCount) {
  try {
    window.dispatchEvent(new CustomEvent('rp-search', {
      detail: { query, resultCount, timestamp: Date.now() }
    }));
  } catch { /* silent */ }
}

// ── Voice search readiness marker ─────────────────────────────────────
export const VOICE_SEARCH_READY = true; // Future: wire up Web Speech API here

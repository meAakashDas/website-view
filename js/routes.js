// ==============================================
// risePaisa — Centralized Route Definitions & Routing Architecture
// Single source of truth for all public, calculator, course, blog, learn, and admin URLs
// ==============================================

export const SITE_ORIGIN = 'https://risepaisa.com';

export const APP_BASE_PATH = (() => {
  if (typeof document === 'undefined') return '';
  const base = document.querySelector('base');
  if (!base) return '';
  const path = new URL(base.href, window.location.href).pathname;
  return path === '/' ? '' : path.replace(/\/+$/, '');
})();

export function getAppPathname(pathname = window.location.pathname) {
  if (APP_BASE_PATH && pathname.startsWith(APP_BASE_PATH)) {
    return pathname.slice(APP_BASE_PATH.length) || '/';
  }
  return pathname || '/';
}

export function toBrowserPath(pathname) {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${APP_BASE_PATH}${path === '/' ? '/' : path}`;
}

/**
 * Reusable Route URL Constants
 */
export const ROUTES = {
  // Public Pages
  HOME: '/',
  COURSES: '/courses',
  COURSE_DETAIL: (slug) => `/courses/${slug}`,
  RESOURCES: '/resources',
  RESOURCE_DETAIL: (slug) => `/resources/${slug}`,
  BLOG: '/blog',
  BLOG_POST: (slug) => `/blog/${slug}`,
  CALCULATORS: '/calculators',
  CONTACT: '/contact',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  REFUND: '/refund-policy',
  FAQ: '/faq',
  DISCLAIMER: '/disclaimer',

  // Individual Calculator URLs
  CALCULATOR_SIP: '/calculators/sip',
  CALCULATOR_EMI: '/calculators/emi',
  CALCULATOR_LOAN: '/calculators/loan',
  CALCULATOR_HOME_LOAN: '/calculators/home-loan',
  CALCULATOR_PERSONAL_LOAN: '/calculators/personal-loan',
  CALCULATOR_VEHICLE_LOAN: '/calculators/vehicle-loan',
  CALCULATOR_SWP: '/calculators/swp',
  CALCULATOR_TAX: '/calculators/nepal-income-tax',
  CALCULATOR_SHARE: '/calculators/nepse-share',
  CALCULATOR_FD: '/calculators/fixed-deposit',
  CALCULATOR_RETIREMENT: '/calculators/retirement',
  CALCULATOR_CAGR: '/calculators/cagr',
  CALCULATOR_INFLATION: '/calculators/inflation',
};

/**
 * Calculator Sub-Route Key to URL mapping
 */
export const CALCULATOR_ROUTES = {
  sip: ROUTES.CALCULATOR_SIP,
  emi: ROUTES.CALCULATOR_EMI,
  loan: ROUTES.CALCULATOR_HOME_LOAN,
  loans: ROUTES.CALCULATOR_HOME_LOAN,
  'home-loan': ROUTES.CALCULATOR_HOME_LOAN,
  'personal-loan': ROUTES.CALCULATOR_PERSONAL_LOAN,
  'vehicle-loan': ROUTES.CALCULATOR_VEHICLE_LOAN,
  swp: ROUTES.CALCULATOR_SWP,
  tax: ROUTES.CALCULATOR_TAX,
  'nepal-income-tax': ROUTES.CALCULATOR_TAX,
  share: ROUTES.CALCULATOR_SHARE,
  'nepse-share': ROUTES.CALCULATOR_SHARE,
  fd: ROUTES.CALCULATOR_FD,
  fdrd: ROUTES.CALCULATOR_FD,
  'fixed-deposit': ROUTES.CALCULATOR_FD,
  retirement: ROUTES.CALCULATOR_RETIREMENT,
  goal: ROUTES.CALCULATOR_RETIREMENT,
  cagr: ROUTES.CALCULATOR_CAGR,
  inflation: ROUTES.CALCULATOR_INFLATION,
};

/**
 * Reverse mapping from calculator path slug to active calculator tab id
 */
export const CALCULATOR_SLUG_TO_ID = {
  sip: 'sip',
  emi: 'emi',
  loan: 'emi',
  loans: 'emi',
  'home-loan': 'home-loan',
  'personal-loan': 'personal-loan',
  'vehicle-loan': 'vehicle-loan',
  swp: 'swp',
  tax: 'tax',
  'nepal-income-tax': 'tax',
  'income-tax': 'tax',
  share: 'share',
  'nepse-share': 'share',
  fd: 'fdrd',
  fdrd: 'fdrd',
  'fixed-deposit': 'fdrd',
  retirement: 'retirement',
  'retirement-goal': 'retirement',
  goal: 'retirement',
  cagr: 'cagr',
  inflation: 'inflation',
};

/**
 * Translate legacy hash URLs to new clean canonical paths
 * Example:
 *  "#/courses" -> "/courses"
 *  "#/course/nepse-101" -> "/courses/nepse-101"
 *  "#/calculators" -> "/calculators"
 *  "#/calculators?calc=sip" -> "/calculators/sip"
 * 
 * @param {string} hash - Raw window.location.hash
 * @returns {string|null} Clean canonical path or null if no legacy hash
 */
export function resolveLegacyHash(hash) {
  if (!hash || typeof hash !== 'string') return null;

  const raw = hash.trim();
  if (!raw || raw === '#') return null;

  // If hash is an in-page fragment (e.g. #future-calculators, #calculator-display-section),
  // do not treat it as a legacy route rewrite unless it matches a known legacy route.
  if (raw.startsWith('#') && !raw.startsWith('#/')) {
    const legacyWithoutSlash = ['#courses', '#calculators', '#calculator', '#consultancy', '#resources', '#blog', '#about', '#contact', '#privacy', '#terms', '#refund', '#faq', '#disclaimer', '#login', '#register', '#profile'];
    const lowerBase = raw.toLowerCase().split('?')[0];
    const isKnownLegacy = legacyWithoutSlash.includes(lowerBase) ||
      lowerBase.startsWith('#course/') ||
      lowerBase.startsWith('#resource/') ||
      lowerBase.startsWith('#blog/');
    if (!isKnownLegacy) {
      return null;
    }
  }

  // Normalize hash
  let clean = raw;
  if (clean.startsWith('#')) {
    clean = clean.slice(1);
  }
  if (!clean.startsWith('/')) {
    clean = '/' + clean;
  }

  // Remove trailing slash unless root
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }

  // Parse query string if present
  const [basePath, query] = clean.split('?');
  const params = new URLSearchParams(query || '');

  // Calculators & Calculator query mapping
  if (basePath === '/calculators' || basePath === '/calculator' || basePath === '/consultancy') {
    const calc = params.get('calc') || params.get('tab');
    if (calc && CALCULATOR_SLUG_TO_ID[calc]) {
      const id = CALCULATOR_SLUG_TO_ID[calc];
      return CALCULATOR_ROUTES[id] || ROUTES.CALCULATORS;
    }
    return ROUTES.CALCULATORS;
  }

  if (basePath.startsWith('/calculator/')) {
    return `/calculators/${basePath.slice(12)}`;
  }

  // Legacy mappings
  if (basePath === '' || basePath === '/') return ROUTES.HOME;
  if (basePath === '/courses') return ROUTES.COURSES;
  if (basePath.startsWith('/course/')) {
    return `/courses/${basePath.slice(8)}`;
  }
  if (basePath === '/resources') return ROUTES.RESOURCES;
  if (basePath.startsWith('/resource/')) {
    return `/resources/${basePath.slice(10)}`;
  }
  if (basePath === '/blog') return query ? `${ROUTES.BLOG}?${query}` : ROUTES.BLOG;
  if (basePath.startsWith('/blog/')) {
    return basePath;
  }
  if (basePath === '/about') return ROUTES.ABOUT;
  if (basePath === '/contact') return ROUTES.CONTACT;
  if (basePath === '/privacy') return ROUTES.PRIVACY;
  if (basePath === '/terms') return ROUTES.TERMS;
  if (basePath === '/refund' || basePath === '/refund-policy') return ROUTES.REFUND;
  if (basePath === '/faq') return ROUTES.FAQ;
  if (basePath === '/disclaimer') return ROUTES.DISCLAIMER;

  // Retired legacy routes -> redirect to public equivalents
  if (basePath === '/login' || basePath === '/register' || basePath === '/forgot-password' || basePath === '/reset-password' || basePath === '/profile' || basePath === '/my-courses' || basePath.startsWith('/learn')) {
    return ROUTES.COURSES;
  }
  if (basePath.startsWith('/admin')) {
    return ROUTES.HOME;
  }

  return null;
}

/**
 * Build a canonical URL for SEO tags
 * @param {string} pathname
 * @returns {string} e.g. "https://risepaisa.com/courses" or "https://risepaisa.com/"
 */
export function buildCanonicalUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_ORIGIN}${path === '/' ? '/' : path}`;
}

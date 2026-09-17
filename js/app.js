// ==============================================
// risePaisa - App Router & Initialization
// Premium HTML5 History API Routing Architecture
// Clean, SEO-friendly, zero-hash paths with automatic legacy hash redirects
// Ultra-optimized route-level code splitting & zero-reflow lifecycle
// ==============================================
import { renderNavbar, renderFooter, renderWhatsAppFloat, initNavbar, updateNavbarActive, initTheme } from './components.js';
import { initAllEnhancements } from './enhancements.js';
import { updatePageSEO } from './seo.js';
import { ROUTES, resolveLegacyHash, getAppPathname, toBrowserPath } from './routes.js';

// ── Route Definitions (Dynamic Code-Split Imports) ──
const routes = [
  // 1. Home
  {
    pattern: /^\/?$/,
    load: () => import('./pages/home.js'),
    render: (m, p, mod) => mod.renderHomePage(),
    init: (m, p, mod) => mod.initHomePage(),
    nav: ROUTES.HOME
  },

  // 2. Courses Hierarchy
  {
    pattern: /^\/courses\/?$/,
    load: () => import('./pages/courses.js'),
    render: (m, p, mod) => mod.renderCoursesPage(),
    init: (m, p, mod) => mod.initCoursesPage(),
    nav: ROUTES.COURSES
  },
  {
    pattern: /^\/courses\/([a-z0-9-]+)\/?$/,
    load: () => import('./pages/courseDetail.js'),
    render: (m, p, mod) => mod.renderCourseDetailPage(m[1]),
    init: (m, p, mod) => mod.initCourseDetailPage(),
    nav: ROUTES.COURSES
  },
  // Legacy /course/:slug redirect
  { pattern: /^\/course\/([a-z0-9-]+)\/?$/, redirect: (m) => ROUTES.COURSE_DETAIL(m[1]) },

  // 3. Resources Hierarchy
  {
    pattern: /^\/resources\/?$/,
    load: () => import('./pages/resources.js'),
    render: (m, p, mod) => mod.renderResourcesPage(),
    init: (m, p, mod) => mod.initResourcesPage(),
    nav: ROUTES.RESOURCES
  },
  {
    pattern: /^\/resources\/([a-z0-9-]+)\/?$/,
    load: () => import('./pages/resourceDetail.js'),
    render: (m, p, mod) => mod.renderResourceDetailPage(m[1]),
    init: (m, p, mod) => mod.initResourceDetailPage(),
    nav: ROUTES.RESOURCES
  },
  // Legacy /resource/:slug redirect
  { pattern: /^\/resource\/([a-z0-9-]+)\/?$/, redirect: (m) => ROUTES.RESOURCE_DETAIL(m[1]) },

  // 4. Blog Hierarchy
  {
    pattern: /^\/blog\/([a-z0-9-]+)\/?$/,
    load: () => import('./pages/blogPost.js'),
    render: (m, p, mod) => mod.renderBlogPostPage(m[1]),
    init: (m, p, mod) => mod.initBlogPostPage(),
    nav: ROUTES.BLOG
  },
  {
    pattern: /^\/blog\/?$/,
    load: () => import('./pages/blog.js'),
    render: (m, p, mod) => mod.renderBlogPage(p),
    init: (m, p, mod) => mod.initBlogPage(),
    nav: ROUTES.BLOG
  },

  // 5. Calculators Hub & Dedicated Calculator URLs
  {
    pattern: /^\/calculators\/?$/,
    load: () => import('./pages/calculators.js'),
    render: (m, p, mod) => mod.renderCalculatorsPage(''),
    init: (m, p, mod) => mod.initCalculatorsPage(''),
    nav: ROUTES.CALCULATORS
  },
  {
    pattern: /^\/calculators\/([a-z0-9-]+)\/?$/,
    load: () => import('./pages/calculators.js'),
    render: (m, p, mod) => mod.renderCalculatorsPage(m[1]),
    init: (m, p, mod) => mod.initCalculatorsPage(m ? m[1] : ''),
    nav: ROUTES.CALCULATORS
  },
  // Legacy /calculator aliases redirect to canonical /calculators
  { pattern: /^\/calculator\/?$/, redirect: () => ROUTES.CALCULATORS },
  { pattern: /^\/calculator\/([a-z0-9-]+)\/?$/, redirect: (m) => `/calculators/${m[1]}` },
  // Legacy consultancy redirect
  { pattern: /^\/consultancy\/?$/, redirect: () => ROUTES.CALCULATORS },

  // 6. Learn Academy (Foundation, Dedicated Guides Hub, Cornerstone Guides & Lessons)
  {
    pattern: /^\/learn\/?$/,
    load: () => import('./pages/learn.js'),
    render: (m, p, mod) => mod.renderLearnPage(),
    init: (m, p, mod) => mod.initLearnPage(),
    nav: ROUTES.LEARN
  },
  {
    pattern: /^\/learn\/guides\/?$/,
    load: () => import('./pages/learnGuides.js'),
    render: (m, p, mod) => mod.renderLearnGuidesHubPage(),
    init: (m, p, mod) => mod.initLearnGuidesHubPage(),
    nav: ROUTES.LEARN
  },
  {
    pattern: /^\/learn\/guides\/([a-z0-9-]+)\/?$/,
    load: () => import('./pages/learnGuideDetail.js'),
    render: (m, p, mod) => mod.renderLearnGuideDetailPage(m[1]),
    init: (m, p, mod) => mod.initLearnGuideDetailPage(m ? m[1] : ''),
    nav: ROUTES.LEARN
  },
  {
    pattern: /^\/learn\/glossary\/?$/,
    load: () => import('./pages/learnGlossary.js'),
    render: (m, p, mod) => mod.renderLearnGlossaryHubPage(),
    init: (m, p, mod) => mod.initLearnGlossaryHubPage(),
    nav: ROUTES.LEARN
  },
  {
    pattern: /^\/learn\/glossary\/([a-z0-9-]+)\/?$/,
    load: () => import('./pages/learnGlossaryDetail.js'),
    render: (m, p, mod) => mod.renderLearnGlossaryDetailPage(m ? m[1] : ''),
    init: (m, p, mod) => mod.initLearnGlossaryDetailPage(m ? m[1] : ''),
    nav: ROUTES.LEARN
  },
  {
    pattern: /^\/learn\/([a-z0-9-]+)\/([a-z0-9-]+)\/?$/,
    load: () => import('./pages/learnLesson.js'),
    render: (m, p, mod) => mod.renderLearnLessonPage(m[1], m[2]),
    init: (m, p, mod) => mod.initLearnLessonPage(m ? m[1] : '', m ? m[2] : ''),
    nav: ROUTES.LEARN
  },
  {
    pattern: /^\/learn\/([a-z0-9-]+)\/?$/,
    load: () => import('./pages/learnCategory.js'),
    render: (m, p, mod) => mod.renderLearnCategoryPage(m[1]),
    init: (m, p, mod) => mod.initLearnCategoryPage(m ? m[1] : ''),
    nav: ROUTES.LEARN
  },

  // 7. Search
  {
    pattern: /^\/search\/?$/,
    load: () => import('./pages/search.js'),
    render: (m, p, mod) => mod.renderSearchPage(p),
    init: (m, p, mod) => mod.initSearchPage(p),
    nav: ROUTES.LEARN
  },

  // 8. Static / Company Pages
  {
    pattern: /^\/about\/?$/,
    load: () => import('./pages/about.js'),
    render: (m, p, mod) => mod.renderAboutPage(),
    init: (m, p, mod) => mod.initAboutPage(),
    nav: ROUTES.ABOUT
  },
  {
    pattern: /^\/contact\/?$/,
    load: () => import('./pages/contact.js'),
    render: (m, p, mod) => mod.renderContactPage(),
    init: (m, p, mod) => mod.initContactPage(),
    nav: ROUTES.CONTACT
  },

  // 9. Legal Pages
  { pattern: /^\/privacy\/?$/, load: () => import('./pages/legal.js'), render: (m, p, mod) => mod.renderLegalPage('privacy'), init: (m, p, mod) => mod.initLegalPage(), nav: null },
  { pattern: /^\/terms\/?$/, load: () => import('./pages/legal.js'), render: (m, p, mod) => mod.renderLegalPage('terms'), init: (m, p, mod) => mod.initLegalPage(), nav: null },
  { pattern: /^\/refund-policy\/?$/, load: () => import('./pages/legal.js'), render: (m, p, mod) => mod.renderLegalPage('refund'), init: (m, p, mod) => mod.initLegalPage(), nav: null },
  { pattern: /^\/refund\/?$/, redirect: () => ROUTES.REFUND },
  { pattern: /^\/disclaimer\/?$/, load: () => import('./pages/legal.js'), render: (m, p, mod) => mod.renderLegalPage('disclaimer'), init: (m, p, mod) => mod.initLegalPage(), nav: null },
  { pattern: /^\/faq\/?$/, load: () => import('./pages/legal.js'), render: (m, p, mod) => mod.renderLegalPage('faq'), init: (m, p, mod) => mod.initLegalPage(), nav: null },

  // 10. Retired Legacy Routes -> Safe Redirects
  { pattern: /^\/(?:login|register|forgot-password|reset-password|profile|my-courses)\/?$/, redirect: () => ROUTES.COURSES },
  { pattern: /^\/admin(?:\/.*)?$/, redirect: () => ROUTES.HOME },
];

// ── Programmatic Navigation ──────────────────────
/**
 * Navigate to a clean URL path without a full page refresh
 * @param {string} url - Target path (e.g. '/courses', '/calculators/sip')
 * @param {boolean} [replace=false] - Whether to replace the history entry
 */
export function navigateTo(url, replace = false) {
  if (!url || typeof url !== 'string') return;

  // Handle external or non-path URLs
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:')) {
    window.location.href = url;
    return;
  }

  // Handle clean internal paths
  let cleanUrl = url;
  if (!cleanUrl.startsWith('/')) {
    cleanUrl = '/' + cleanUrl;
  }

  if (replace) {
    window.history.replaceState({}, '', toBrowserPath(cleanUrl));
  } else {
    window.history.pushState({}, '', toBrowserPath(cleanUrl));
  }

  router();
}

// Expose globally for components
if (typeof window !== 'undefined') {
  window._rpNavigateTo = navigateTo;
  window._rpRouterReload = router;
}

// ── Router Core ──────────────────────────────────
let currentPageCleanup = null;
let currentNavRendered = false;

async function router() {
  // Check for legacy hash link (e.g. #/courses or #/calculators)
  const rawHash = window.location.hash;
  if (rawHash && (rawHash.startsWith('#/') || rawHash === '#')) {
    const cleanPath = resolveLegacyHash(rawHash);
    if (cleanPath && cleanPath !== window.location.pathname) {
      window.history.replaceState({}, '', toBrowserPath(cleanPath));
    }
  }

  document.body.classList.remove('has-mobile-cta');

  const pathname = getAppPathname();
  const searchParams = new URLSearchParams(window.location.search);

  let matchedRoute = null;
  let match = null;

  for (const route of routes) {
    const m = pathname.match(route.pattern);
    if (m) {
      matchedRoute = route;
      match = m;
      break;
    }
  }

  // Handle route redirect
  if (matchedRoute?.redirect) {
    const dest = matchedRoute.redirect(match);
    navigateTo(dest, true);
    return;
  }

  // Clean up previous page listeners, observers, and timers before rendering new route
  if (typeof currentPageCleanup === 'function') {
    try {
      currentPageCleanup();
    } catch (e) {
      console.error('Previous page cleanup error:', e);
    }
    currentPageCleanup = null;
  }

  if (!matchedRoute) {
    try {
      updatePageSEO(pathname, searchParams);
    } catch (err) {
      console.error('SEO update error:', err);
    }

    // 404 Not Found - Premium Apple-inspired layout
    document.getElementById('app').innerHTML = `
      <div class="section not-found-section" style="min-height:72vh;display:flex;align-items:center;justify-content:center;padding:var(--space-16) 0">
        <div class="container" style="max-width:640px;text-align:center">
          <div class="badge badge-primary" style="margin-bottom:var(--space-4);font-weight:600">
            404 · Page Not Found
          </div>
          <h1 style="font-size:clamp(2.5rem, 5vw, 3.75rem);font-weight:600;letter-spacing:-0.035em;line-height:1.1;color:var(--color-heading);margin-bottom:var(--space-4)">
            Lost in Navigation
          </h1>
          <p style="font-size:1.125rem;color:var(--color-text-secondary);line-height:1.6;margin-bottom:var(--space-8);max-width:520px;margin-left:auto;margin-right:auto">
            The page you requested could not be found or has been moved. Explore our financial learning tracks, free calculators, or return home.
          </p>
          <div style="display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap;margin-bottom:var(--space-10)">
            <a href="${ROUTES.HOME}" class="btn btn-primary btn-lg">Return Home</a>
            <a href="${ROUTES.LEARN}" class="btn btn-secondary btn-lg">Explore Academy</a>
            <a href="${ROUTES.CALCULATORS}" class="btn btn-secondary btn-lg">Calculators</a>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Handle fullscreen routes
  const isFullscreen = matchedRoute.fullscreen;
  const navContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');
  const waContainer = document.getElementById('whatsapp-container');

  if (isFullscreen) {
    if (navContainer) navContainer.style.display = 'none';
    if (footerContainer) footerContainer.style.display = 'none';
    if (waContainer) waContainer.style.display = 'none';
  } else {
    if (navContainer) navContainer.style.display = '';
    if (footerContainer) footerContainer.style.display = '';
    if (waContainer) waContainer.style.display = '';

    const navPath = matchedRoute.nav || pathname;
    if (!currentNavRendered) {
      navContainer.innerHTML = renderNavbar(navPath);
      initNavbar();
      currentNavRendered = true;
    } else {
      updateNavbarActive(navPath);
      initNavbar();
    }
  }

  // Dynamically load page module code chunk on-demand
  let pageModule = null;
  if (typeof matchedRoute.load === 'function') {
    pageModule = await matchedRoute.load();
  }

  // Render page content with smooth fade transition
  const content = matchedRoute.render(match, searchParams, pageModule);
  const appEl = document.getElementById('app');
  if (appEl) {
    appEl.classList.remove('page-enter');
    appEl.innerHTML = content;
    void appEl.offsetWidth; // Restart CSS transition smoothly
    appEl.classList.add('page-enter');
  }

  // Initialize page interactivity and capture cleanup handler
  if (typeof matchedRoute.init === 'function') {
    const cleanup = matchedRoute.init(match, searchParams, pageModule);
    if (typeof cleanup === 'function') {
      currentPageCleanup = cleanup;
    }
  }

  // Premium UI enhancements (runs after page init)
  if (!isFullscreen) {
    setTimeout(initAllEnhancements, 60);
  }

  // Update page SEO metadata & Schema.org JSON-LD
  try {
    updatePageSEO(pathname, searchParams);
  } catch (err) {
    console.error('SEO update error:', err);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ── Intelligent Link Prefetching ─────────────────
const prefetchedUrls = new Set();

function prefetchRouteForUrl(url) {
  if (!url || typeof url !== 'string' || !url.startsWith('/') || prefetchedUrls.has(url)) return;
  prefetchedUrls.add(url);

  const cleanPath = url.split('?')[0].split('#')[0];
  for (const route of routes) {
    if (route.pattern && route.pattern.test(cleanPath) && typeof route.load === 'function') {
      route.load(); // Triggers browser fetch and module cache in background
      break;
    }
  }
}

function initLinkPrefetch() {
  // Prefetch route code chunks on link hover or pointer focus
  document.addEventListener('mouseover', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      prefetchRouteForUrl(href);
    }
  }, { passive: true });
}

// ── Initialize App ───────────────────────────────
function initApp() {
  initTheme();
  const body = document.body;

  // Navbar container
  const navContainer = document.createElement('div');
  navContainer.id = 'navbar-container';
  body.prepend(navContainer);

  // Footer (always visible)
  const footerContainer = document.createElement('div');
  footerContainer.id = 'footer-container';
  footerContainer.innerHTML = renderFooter();

  // WhatsApp float
  const waContainer = document.createElement('div');
  waContainer.id = 'whatsapp-container';
  waContainer.innerHTML = renderWhatsAppFloat();

  // Append after app div
  const appDiv = document.getElementById('app');
  appDiv.after(footerContainer);
  body.appendChild(waContainer);

  // Intercept internal link clicks for smooth client-side SPA transitions
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Safely handle pure in-page fragment anchors (preventing base href="/" from redirecting to root)
    if (href.startsWith('#') && !href.startsWith('#/')) {
      e.preventDefault();
      try {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (err) {
        // Ignore invalid selectors
      }
      return;
    }

    // Ignore external URLs, tel, mailto, or new window links
    if (
      link.target === '_blank' ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      link.hasAttribute('download')
    ) {
      return;
    }

    // Intercept internal path navigation
    e.preventDefault();
    navigateTo(href);
  });

  // Listen for browser back / forward buttons
  window.addEventListener('popstate', router);

  // Listen for language toggles to update SEO, html lang, and JSON-LD
  window.addEventListener('rp-learn-lang-changed', (e) => {
    try {
      updatePageSEO(getAppPathname(), new URLSearchParams(window.location.search), e.detail?.lang);
    } catch (err) {
      console.error('SEO language update error:', err);
    }
  });

  // Enable smart background link prefetching
  initLinkPrefetch();

  // Initial routing
  router();
}

// Boot
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}

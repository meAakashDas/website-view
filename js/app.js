// ==============================================
// risePaisa — App Router & Initialization
// Premium HTML5 History API Routing Architecture
// Clean, SEO-friendly, zero-hash paths with automatic legacy hash redirects
// ==============================================
import { renderNavbar, renderFooter, renderWhatsAppFloat, initNavbar } from './components.js';
import { initAllEnhancements } from './enhancements.js';
import { renderHomePage, initHomePage } from './pages/home.js';
import { renderCoursesPage, initCoursesPage } from './pages/courses.js';
import { renderCourseDetailPage, initCourseDetailPage } from './pages/courseDetail.js';
import { renderResourcesPage, initResourcesPage } from './pages/resources.js';
import { renderResourceDetailPage, initResourceDetailPage } from './pages/resourceDetail.js';
import { renderBlogPage, initBlogPage } from './pages/blog.js';
import { renderBlogPostPage, initBlogPostPage } from './pages/blogPost.js';
import { renderAboutPage, initAboutPage } from './pages/about.js';
import { renderContactPage, initContactPage } from './pages/contact.js';
import { renderCalculatorsPage, initCalculatorsPage } from './pages/calculators.js';
import { renderLegalPage, initLegalPage } from './pages/legal.js';
import { ROUTES, resolveLegacyHash, getAppPathname, toBrowserPath } from './routes.js';

// ── Route Definitions ────────────────────────────
const routes = [
  // 1. Home
  { pattern: /^\/?$/, render: () => renderHomePage(), init: () => initHomePage(), nav: ROUTES.HOME },

  // 2. Courses Hierarchy
  { pattern: /^\/courses\/?$/, render: () => renderCoursesPage(), init: () => initCoursesPage(), nav: ROUTES.COURSES },
  { pattern: /^\/courses\/([a-z0-9-]+)\/?$/, render: (m) => renderCourseDetailPage(m[1]), init: () => initCourseDetailPage(), nav: ROUTES.COURSES },
  // Legacy /course/:slug redirect
  { pattern: /^\/course\/([a-z0-9-]+)\/?$/, redirect: (m) => ROUTES.COURSE_DETAIL(m[1]) },

  // 3. Resources Hierarchy
  { pattern: /^\/resources\/?$/, render: () => renderResourcesPage(), init: () => initResourcesPage(), nav: ROUTES.RESOURCES },
  { pattern: /^\/resources\/([a-z0-9-]+)\/?$/, render: (m) => renderResourceDetailPage(m[1]), init: () => initResourceDetailPage(), nav: ROUTES.RESOURCES },
  // Legacy /resource/:slug redirect
  { pattern: /^\/resource\/([a-z0-9-]+)\/?$/, redirect: (m) => ROUTES.RESOURCE_DETAIL(m[1]) },

  // 4. Blog Hierarchy
  { pattern: /^\/blog\/([a-z0-9-]+)\/?$/, render: (m) => renderBlogPostPage(m[1]), init: () => initBlogPostPage(), nav: ROUTES.BLOG },
  { pattern: /^\/blog\/?$/, render: (m, params) => renderBlogPage(params), init: () => initBlogPage(), nav: ROUTES.BLOG },

  // 5. Calculators Hub & Dedicated Calculator URLs
  { pattern: /^\/calculators\/?$/, render: () => renderCalculatorsPage(''), init: () => initCalculatorsPage(''), nav: ROUTES.CALCULATORS },
  { pattern: /^\/calculators\/([a-z0-9-]+)\/?$/, render: (m) => renderCalculatorsPage(m[1]), init: (m) => initCalculatorsPage(m ? m[1] : ''), nav: ROUTES.CALCULATORS },
  // Legacy /calculator aliases redirect to canonical /calculators
  { pattern: /^\/calculator\/?$/, redirect: () => ROUTES.CALCULATORS },
  { pattern: /^\/calculator\/([a-z0-9-]+)\/?$/, redirect: (m) => `/calculators/${m[1]}` },
  // Legacy consultancy redirect
  { pattern: /^\/consultancy\/?$/, redirect: () => ROUTES.CALCULATORS },

  // 6. Static / Company Pages
  { pattern: /^\/about\/?$/, render: () => renderAboutPage(), init: () => initAboutPage(), nav: ROUTES.ABOUT },
  { pattern: /^\/contact\/?$/, render: () => renderContactPage(), init: () => initContactPage(), nav: ROUTES.CONTACT },

  // 7. Legal Pages
  { pattern: /^\/privacy\/?$/, render: () => renderLegalPage('privacy'), init: () => initLegalPage(), nav: null },
  { pattern: /^\/terms\/?$/, render: () => renderLegalPage('terms'), init: () => initLegalPage(), nav: null },
  { pattern: /^\/refund-policy\/?$/, render: () => renderLegalPage('refund'), init: () => initLegalPage(), nav: null },
  { pattern: /^\/refund\/?$/, redirect: () => ROUTES.REFUND },
  { pattern: /^\/disclaimer\/?$/, render: () => renderLegalPage('disclaimer'), init: () => initLegalPage(), nav: null },
  { pattern: /^\/faq\/?$/, render: () => renderLegalPage('faq'), init: () => initLegalPage(), nav: null },

  // 8. Retired Legacy Routes -> Safe Redirects
  { pattern: /^\/(?:login|register|forgot-password|reset-password|profile|my-courses)\/?$/, redirect: () => ROUTES.COURSES },
  { pattern: /^\/learn(?:\/.*)?$/, redirect: () => ROUTES.COURSES },
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
window._rpNavigateTo = navigateTo;
window._rpRouterReload = router;

// ── Router Core ──────────────────────────────────
function router() {
  // Check for legacy hash link (e.g. #/courses or #/calculators)
  const rawHash = window.location.hash;
  if (rawHash && (rawHash.startsWith('#/') || rawHash === '#')) {
    const cleanPath = resolveLegacyHash(rawHash);
    if (cleanPath && cleanPath !== window.location.pathname) {
      window.history.replaceState({}, '', toBrowserPath(cleanPath));
    }
  }

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

  if (!matchedRoute) {
    // 404 Not Found
    document.getElementById('app').innerHTML = `
      <div class="section" style="text-align:center;min-height:60vh;display:flex;align-items:center;justify-content:center">
        <div>
          <h1 style="font-size:var(--text-6xl);color:var(--color-accent);margin-bottom:var(--space-4)">404</h1>
          <h2 style="margin-bottom:var(--space-4)">Page Not Found</h2>
          <p style="margin-bottom:var(--space-8);color:var(--color-text-secondary)">The page you're looking for doesn't exist.</p>
          <a href="${ROUTES.HOME}" class="btn btn-primary btn-lg">Go Home</a>
        </div>
      </div>
    `;
    return;
  }

  // Handle fullscreen routes (learn page — no navbar/footer/whatsapp)
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

    // Update navbar with active path
    const navPath = matchedRoute.nav || pathname;
    navContainer.innerHTML = renderNavbar(navPath);
  }

  // Render page content with smooth fade transition
  const content = matchedRoute.render(match, searchParams);
  const appEl = document.getElementById('app');
  if (appEl) {
    appEl.classList.remove('page-enter');
    appEl.innerHTML = content;
    void appEl.offsetWidth; // Restart CSS transition smoothly
    appEl.classList.add('page-enter');
  }

  // Initialize page interactivity
  if (!isFullscreen) {
    initNavbar();
  }
  if (typeof matchedRoute.init === 'function') {
    matchedRoute.init(match, searchParams);
  }

  // Premium UI enhancements (runs after page init)
  if (!isFullscreen) {
    setTimeout(initAllEnhancements, 60);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ── Initialize App ───────────────────────────────
function initApp() {
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

  // Initial routing
  router();
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

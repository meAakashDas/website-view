import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import SEO and data layers
import { resolvePageSEO } from '../js/seo.js';
import * as learnData from '../js/data/learn.js';
import { DETAILED_GUIDES } from '../js/data/detailedGuides.js';
import { GLOSSARY_DICTIONARY } from '../js/data/glossaryData.js';
import { CALCULATOR_REGISTRY } from '../js/calculators/registry.js';
import { CALCULATOR_ROUTES, CALCULATOR_SLUG_TO_ID, ROUTES } from '../js/routes.js';
import COURSES from '../js/data/courses.js';
import RESOURCES from '../js/data/resources.js';
import ARTICLES from '../js/data/articles.js';

// Import Shared Component HTML renderers
import { renderNavbar, renderFooter, renderWhatsAppFloat } from '../js/components.js';

// Import Page Renderers
import { renderHomePage } from '../js/pages/home.js';
import { renderAboutPage } from '../js/pages/about.js';
import { renderContactPage } from '../js/pages/contact.js';
import { renderAakashDasPage } from '../js/pages/aakashDas.js';
import { renderEditorialPolicyPage } from '../js/pages/editorialPolicy.js';
import { renderLegalPage } from '../js/pages/legal.js';
import { renderCalculatorsPage, preloadAllCalculators } from '../js/pages/calculators.js';
import { renderCoursesPage } from '../js/pages/courses.js';
import { renderCourseDetailPage } from '../js/pages/courseDetail.js';
import { renderCourseLearnPage } from '../js/pages/courseLearn.js';
import { renderMyCoursesPage } from '../js/pages/myCourses.js';
import { renderAdminCoursesPage } from '../js/pages/adminCourses.js';
import { renderAdminEnrollmentsPage } from '../js/pages/adminEnrollments.js';
import { renderResourcesPage } from '../js/pages/resources.js';
import { renderResourceDetailPage } from '../js/pages/resourceDetail.js';
import { renderBlogPage } from '../js/pages/blog.js';
import { renderBlogPostPage } from '../js/pages/blogPost.js';
import { renderLearnPage } from '../js/pages/learn.js';
import { renderLearnGuidesHubPage } from '../js/pages/learnGuides.js';
import { renderLearnGuideDetailPage } from '../js/pages/learnGuideDetail.js';
import { renderLearnGlossaryHubPage } from '../js/pages/learnGlossary.js';
import { renderLearnGlossaryDetailPage } from '../js/pages/learnGlossaryDetail.js';
import { renderLearnCategoryPage } from '../js/pages/learnCategory.js';
import { renderLearnLessonPage } from '../js/pages/learnLesson.js';

function escapeAttr(text = '') {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildHtml(routePath, navPath, contentHtml) {
  const seo = resolvePageSEO(routePath, null, 'en', learnData);
  const pageAuthor = (routePath === '/aakash-das' || seo.type === 'article') ? 'Aakash Das' : 'risePaisa';
  const ogImage = seo.image || 'https://risepaisa.com/assets/images/risepaisa_logo.png';
  const ogImageWidth = seo.imageWidth || (seo.type === 'article' ? 960 : 512);
  const ogImageHeight = seo.imageHeight || (seo.type === 'article' ? 640 : 512);
  const ogImageAlt = seo.imageAlt || seo.title;

  let articleMetaTags = '';
  if (seo.type === 'article' && seo.datePublished) {
    articleMetaTags += `\n  <meta property="article:published_time" content="${seo.datePublished}">`;
    if (seo.dateModified) {
      articleMetaTags += `\n  <meta property="article:modified_time" content="${seo.dateModified}">`;
    }
    if (seo.articleSection) {
      articleMetaTags += `\n  <meta property="article:section" content="${escapeAttr(seo.articleSection)}">`;
    }
  }

  const navbarHtml = renderNavbar(navPath || routePath);
  const footerHtml = renderFooter();
  const whatsappHtml = renderWhatsAppFloat();
  const ldJsonString = JSON.stringify(seo.ldJson, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <base href="/">
  
  <!-- SEO Meta Tags -->
  <title>${escapeAttr(seo.title)}</title>
  <meta name="description" content="${escapeAttr(seo.description)}">
  <meta name="keywords" content="${escapeAttr(seo.keywords)}">
  <meta name="author" content="${pageAuthor}">
  <meta name="robots" content="${seo.robots}">
  <meta name="googlebot" content="${seo.robots}">
  <meta name="bingbot" content="${seo.robots}">
  <link rel="canonical" href="${seo.canonical}">
  <link rel="alternate" hreflang="en" href="${seo.canonical}">
  <link rel="alternate" hreflang="ne" href="${seo.canonical}">
  <link rel="alternate" hreflang="x-default" href="${seo.canonical}">

  <!-- Geo & Local SEO Tags (Nepal) -->
  <meta name="geo.region" content="NP">
  <meta name="geo.placename" content="Kathmandu, Nepal">
  <meta name="geo.position" content="27.7172;85.3240">
  <meta name="ICBM" content="27.7172, 85.3240">

  <!-- Mobile & PWA Web App Meta Tags -->
  <meta name="theme-color" content="#ffffff">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="risePaisa">
  <meta name="application-name" content="risePaisa">
  <meta name="format-detection" content="telephone=no">

  <!-- Open Graph -->
  <meta property="og:type" content="${seo.type || 'website'}">
  <meta property="og:title" content="${escapeAttr(seo.title)}">
  <meta property="og:description" content="${escapeAttr(seo.description)}">
  <meta property="og:url" content="${seo.canonical}">
  <meta property="og:site_name" content="risePaisa">
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="ne_NP">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="${ogImageWidth}">
  <meta property="og:image:height" content="${ogImageHeight}">
  <meta property="og:image:alt" content="${escapeAttr(ogImageAlt)}">${articleMetaTags}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttr(seo.title)}">
  <meta name="twitter:description" content="${escapeAttr(seo.description)}">
  <meta name="twitter:image" content="${ogImage}">
  <meta name="twitter:image:alt" content="${escapeAttr(ogImageAlt)}">
  <meta name="twitter:creator" content="@risepaisa">
  <meta name="twitter:site" content="@risepaisa">

  <!-- Base Schema.org Structured Data -->
  <script type="application/ld+json" id="rp-ld-json">
${ldJsonString}
  </script>

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/images/risepaisa_logo.png?v=1">
  <link rel="shortcut icon" type="image/png" href="assets/images/risepaisa_logo.png?v=1">
  <link rel="apple-touch-icon" href="assets/images/risepaisa_logo.png?v=1">

  <!-- Google Fonts: Inter + Outfit -->
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700&display=swap" rel="stylesheet">

  <!-- Theme Bootstrapper (Zero Flash: Default Light Mode for First-Time Visitors) -->
  <script>
    (function() {
      try {
        var savedTheme = localStorage.getItem('rp_theme');
        var theme = savedTheme === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  </script>

  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/pages.css?v=2">
  <link rel="stylesheet" href="css/calculators.css">
  <link rel="stylesheet" href="css/learn.css">
  <link rel="stylesheet" href="css/search.css">
  <link rel="stylesheet" href="css/auth.css">
</head>
<body>
  <div id="navbar-container">${navbarHtml}</div>
  <!-- App Content -->
  <main id="app">${contentHtml}</main>
  <div id="footer-container">${footerHtml}</div>
  <div id="whatsapp-container">${whatsappHtml}</div>

  <!-- App Script -->
  <script type="module" src="js/app.js?v=3"></script>
</body>
</html>
`;
}

function writeStaticFile(routePath, html) {
  let relativeDir;
  if (!routePath || routePath === '/') {
    relativeDir = '';
  } else {
    relativeDir = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  }

  const targetDir = path.join(rootDir, relativeDir);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filePath = path.join(targetDir, 'index.html');
  fs.writeFileSync(filePath, html, 'utf8');
}

// ── Master Build Orchestration ────────────────────
async function generateAllPages() {
  console.log('Generating pre-rendered static HTML pages for RisePaisa...');
  await learnData.preloadAllLessons();
  await learnData.preloadAllGuides();
  await preloadAllCalculators();
  let count = 0;

  // 1. Root Homepage
  const homeHtml = buildHtml('/', ROUTES.HOME, renderHomePage());
  writeStaticFile('/', homeHtml);
  count++;

  // 2. Hub and Company Static Pages
  const staticHubs = [
    { route: '/about', nav: ROUTES.ABOUT, render: () => renderAboutPage() },
    { route: '/contact', nav: ROUTES.CONTACT, render: () => renderContactPage() },
    { route: '/aakash-das', nav: ROUTES.ABOUT, render: () => renderAakashDasPage() },
    { route: '/editorial-policy', nav: null, render: () => renderEditorialPolicyPage() },
    { route: '/calculators', nav: ROUTES.CALCULATORS, render: () => renderCalculatorsPage('') },
    { route: '/courses', nav: ROUTES.COURSES, render: () => renderCoursesPage() },
    { route: '/my-courses', nav: ROUTES.MY_COURSES, render: () => renderMyCoursesPage() },
    { route: '/admin/courses', nav: null, render: () => renderAdminCoursesPage() },
    { route: '/admin/enrollments', nav: null, render: () => renderAdminEnrollmentsPage() },
    { route: '/resources', nav: ROUTES.RESOURCES, render: () => renderResourcesPage() },
    { route: '/blog', nav: ROUTES.BLOG, render: () => renderBlogPage() },
    { route: '/learn', nav: ROUTES.LEARN, render: () => renderLearnPage() },
    { route: '/learn/guides', nav: ROUTES.LEARN, render: () => renderLearnGuidesHubPage() },
    { route: '/learn/glossary', nav: ROUTES.LEARN, render: () => renderLearnGlossaryHubPage() },
    { route: '/privacy', nav: null, render: () => renderLegalPage('privacy') },
    { route: '/terms', nav: null, render: () => renderLegalPage('terms') },
    { route: '/disclaimer', nav: null, render: () => renderLegalPage('disclaimer') },
    { route: '/refund-policy', nav: null, render: () => renderLegalPage('refund') },
    { route: '/faq', nav: null, render: () => renderLegalPage('faq') },
  ];

  for (const hub of staticHubs) {
    const html = buildHtml(hub.route, hub.nav, hub.render());
    writeStaticFile(hub.route, html);
    count++;
  }

  // 3. Financial Calculators (Canonical routes & aliases)
  for (const calc of CALCULATOR_REGISTRY) {
    if (calc.status === 'active') {
      const canonicalRoute = CALCULATOR_ROUTES[calc.id] || `/calculators/${calc.id}`;
      const calcContent = renderCalculatorsPage(calc.id);

      // Preferred canonical file
      const html = buildHtml(canonicalRoute, ROUTES.CALCULATORS, calcContent);
      writeStaticFile(canonicalRoute, html);
      count++;

      // If id is different from canonical route slug (e.g. tax vs nepal-income-tax), also generate id route pointing to canonical
      if (canonicalRoute !== `/calculators/${calc.id}`) {
        const aliasRoute = `/calculators/${calc.id}`;
        const aliasHtml = buildHtml(aliasRoute, ROUTES.CALCULATORS, calcContent);
        writeStaticFile(aliasRoute, aliasHtml);
        count++;
      }
    }
  }

  // Common long-form calculator aliases
  const longCalcAliases = [
    { alias: '/calculators/sip-calculator', id: 'sip' },
    { alias: '/calculators/emi-calculator', id: 'emi' },
    { alias: '/calculators/home-loan-calculator', id: 'home-loan' },
    { alias: '/calculators/personal-loan-calculator', id: 'personal-loan' },
    { alias: '/calculators/vehicle-loan-calculator', id: 'vehicle-loan' },
    { alias: '/calculators/swp-calculator', id: 'swp' },
    { alias: '/calculators/nepal-income-tax-calculator', id: 'tax' },
    { alias: '/calculators/nepse-share-calculator', id: 'share' },
    { alias: '/calculators/fixed-deposit-calculator', id: 'fdrd' },
    { alias: '/calculators/retirement-calculator', id: 'retirement' },
    { alias: '/calculators/cagr-calculator', id: 'cagr' },
    { alias: '/calculators/inflation-calculator', id: 'inflation' },
  ];
  for (const item of longCalcAliases) {
    const html = buildHtml(item.alias, ROUTES.CALCULATORS, renderCalculatorsPage(item.id));
    writeStaticFile(item.alias, html);
    count++;
  }

  // 4. Courses
  for (const course of COURSES) {
    if (course.slug) {
      const courseRoute = `/courses/${course.slug}`;
      const html = buildHtml(courseRoute, ROUTES.COURSES, renderCourseDetailPage(course.slug));
      writeStaticFile(courseRoute, html);
      count++;

      const learnRoute = `/courses/${course.slug}/learn`;
      const learnNav = ROUTES.COURSE_LEARN ? ROUTES.COURSE_LEARN(course.slug) : learnRoute;
      const learnHtml = buildHtml(learnRoute, learnNav, renderCourseLearnPage(course.slug));
      writeStaticFile(learnRoute, learnHtml);
      count++;
    }
  }

  // 5. Digital Resources & Templates
  for (const resource of RESOURCES) {
    if (resource.slug) {
      const resourceRoute = `/resources/${resource.slug}`;
      const html = buildHtml(resourceRoute, ROUTES.RESOURCES, renderResourceDetailPage(resource.slug));
      writeStaticFile(resourceRoute, html);
      count++;
    }
  }

  // 6. Blog Articles
  for (const article of ARTICLES) {
    if (article.slug) {
      const articleRoute = `/blog/${article.slug}`;
      const html = buildHtml(articleRoute, ROUTES.BLOG, renderBlogPostPage(article.slug));
      writeStaticFile(articleRoute, html);
      count++;
    }
  }

  // 7. Learn Categories
  for (const cat of learnData.LEARN_CATEGORIES) {
    const catRoute = `/learn/${cat.slug}`;
    const html = buildHtml(catRoute, ROUTES.LEARN, renderLearnCategoryPage(cat.slug));
    writeStaticFile(catRoute, html);
    count++;

    // Category Lessons
    if (cat.roadmap && Array.isArray(cat.roadmap)) {
      for (const stage of cat.roadmap) {
        if (stage.lessons && Array.isArray(stage.lessons)) {
          for (const lesson of stage.lessons) {
            const lessonRoute = `/learn/${cat.slug}/${lesson.slug}`;
            const lessonHtml = buildHtml(lessonRoute, ROUTES.LEARN, renderLearnLessonPage(cat.slug, lesson.slug));
            writeStaticFile(lessonRoute, lessonHtml);
            count++;
          }
        }
      }
    }
  }

  // 8. Cornerstone Guides
  const guideSlugs = Object.keys(DETAILED_GUIDES);
  for (const slug of guideSlugs) {
    const guideRoute = `/learn/guides/${slug}`;
    const html = buildHtml(guideRoute, ROUTES.LEARN, renderLearnGuideDetailPage(slug));
    writeStaticFile(guideRoute, html);
    count++;
  }

  // 9. Glossary Terms
  for (const term of GLOSSARY_DICTIONARY) {
    const termRoute = `/learn/glossary/${term.slug}`;
    const html = buildHtml(termRoute, ROUTES.LEARN, renderLearnGlossaryDetailPage(term.slug));
    writeStaticFile(termRoute, html);
    count++;
  }

  console.log(`Successfully generated ${count} pre-rendered static HTML pages.`);
}

generateAllPages().catch(err => {
  console.error('Static page generation failed:', err);
  process.exit(1);
});

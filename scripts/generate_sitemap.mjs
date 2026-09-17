import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Import application data layers
import { LEARN_CATEGORIES, DETAILED_GUIDES } from '../js/data/learn.js';
import { GLOSSARY_DICTIONARY } from '../js/data/glossaryData.js';
import { CALCULATOR_REGISTRY } from '../js/calculators/registry.js';
import COURSES from '../js/data/courses.js';
import RESOURCES from '../js/data/resources.js';
import ARTICLES from '../js/data/articles.js';

const DOMAIN = 'https://risepaisa.com';
const TODAY = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'learn', priority: '0.95', changefreq: 'daily' },
  { path: 'learn/guides', priority: '0.9', changefreq: 'weekly' },
  { path: 'learn/glossary', priority: '0.9', changefreq: 'weekly' },
  { path: 'calculators', priority: '0.9', changefreq: 'weekly' },
  { path: 'resources', priority: '0.8', changefreq: 'weekly' },
  { path: 'courses', priority: '0.8', changefreq: 'weekly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'about', priority: '0.7', changefreq: 'monthly' },
  { path: 'contact', priority: '0.7', changefreq: 'monthly' },
  { path: 'privacy', priority: '0.5', changefreq: 'monthly' },
  { path: 'terms', priority: '0.5', changefreq: 'monthly' },
  { path: 'disclaimer', priority: '0.5', changefreq: 'monthly' },
  { path: 'faq', priority: '0.6', changefreq: 'monthly' },
  { path: 'refund-policy', priority: '0.5', changefreq: 'monthly' }
];

const entries = [];

// 1. Static & Hub Pages
for (const page of staticPages) {
  const loc = page.path ? `${DOMAIN}/${page.path}` : `${DOMAIN}/`;
  entries.push({
    loc,
    priority: page.priority,
    changefreq: page.changefreq,
    lastmod: TODAY
  });
}

// 2. Categories
for (const cat of LEARN_CATEGORIES) {
  entries.push({
    loc: `${DOMAIN}/learn/${cat.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
    lastmod: TODAY
  });

  // Category Lessons
  if (cat.roadmap && Array.isArray(cat.roadmap)) {
    for (const stage of cat.roadmap) {
      if (stage.lessons && Array.isArray(stage.lessons)) {
        for (const lesson of stage.lessons) {
          entries.push({
            loc: `${DOMAIN}/learn/${cat.slug}/${lesson.slug}`,
            priority: '0.8',
            changefreq: 'monthly',
            lastmod: TODAY
          });
        }
      }
    }
  }
}

// 3. Flagship & Cornerstone Guides
const guideSlugs = Object.keys(DETAILED_GUIDES);
for (const slug of guideSlugs) {
  entries.push({
    loc: `${DOMAIN}/learn/guides/${slug}`,
    priority: '0.85',
    changefreq: 'monthly',
    lastmod: TODAY
  });
}

// 4. Financial Dictionary (Glossary Terms)
for (const term of GLOSSARY_DICTIONARY) {
  entries.push({
    loc: `${DOMAIN}/learn/glossary/${term.slug}`,
    priority: '0.75',
    changefreq: 'monthly',
    lastmod: TODAY
  });
}

// 5. Calculators
for (const calc of CALCULATOR_REGISTRY) {
  if (calc.status === 'active') {
    entries.push({
      loc: `${DOMAIN}/calculators/${calc.id}`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: TODAY
    });
  }
}

// 6. Courses
for (const course of COURSES) {
  if (course.slug) {
    entries.push({
      loc: `${DOMAIN}/courses/${course.slug}`,
      priority: '0.85',
      changefreq: 'weekly',
      lastmod: TODAY
    });
  }
}

// 7. Digital Resources & Templates
for (const resource of RESOURCES) {
  if (resource.slug) {
    entries.push({
      loc: `${DOMAIN}/resources/${resource.slug}`,
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: TODAY
    });
  }
}

// 8. Blog Articles & Research Notes
for (const article of ARTICLES) {
  if (article.slug) {
    entries.push({
      loc: `${DOMAIN}/blog/${article.slug}`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: article.date || TODAY
    });
  }
}

// Build XML string
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

for (const entry of entries) {
  xml += `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${entry.loc}" />
    <xhtml:link rel="alternate" hreflang="ne" href="${entry.loc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.loc}" />
  </url>
`;
}

xml += `</urlset>
`;

const sitemapPath = path.join(rootDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');

console.log(`Successfully generated sitemap.xml with ${entries.length} URLs at ${sitemapPath}`);

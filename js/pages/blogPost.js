// ==============================================
// risePaisa | Blog Article Experience
// High-Authority, Nepal-Specific Sourced Financial Guides
// ==============================================
import { getArticles, getArticleBySlug } from '../data/articles.js';
import { renderShareButtons, renderArticleCard, formatDate, setPageMeta } from '../components.js';
import { ROUTES } from '../routes.js';

const ICONS = {
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-left:3px"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-right:4px"><polyline points="20 6 9 17 4 12"/></svg>`
};

export function renderBlogPostPage(slug) {
  const article = getArticleBySlug(slug);
  if (!article) {
    setPageMeta('Article Not Found', '', ROUTES.BLOG);
    return `<div class="section"><div class="container" style="text-align:center"><h1>Article Not Found</h1><p>Sorry, we could not find that article.</p><a href="${ROUTES.BLOG}" class="btn btn-primary" style="margin-top:var(--space-6)">Browse Articles</a></div></div>`;
  }

  setPageMeta(article.title, article.excerpt, ROUTES.BLOG_POST(article.slug));

  const catClass = {
    'Personal Finance': 'cat-personal-finance',
    'NEPSE & Investing': 'cat-nepse',
    'Taxation': 'cat-taxation',
    'Fintech': 'cat-fintech',
  };

  // Get related articles (same category, not this one)
  const ARTICLES = getArticles();
  const related = ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

  return `
    <!-- 1. Article Hero Section -->
    <div class="blog-post-hero" id="post-hero">
      <div class="container">
        <div class="breadcrumb">
          <a href="${ROUTES.HOME}">Home</a><span class="separator">/</span>
          <a href="${ROUTES.BLOG}">Blog</a><span class="separator">/</span>
          ${article.relatedTopic ? `<a href="${article.relatedTopic.url}">${article.category}</a><span class="separator">/</span>` : ''}
          <span>${article.title}</span>
        </div>

        <div style="display:flex;align-items:center;gap:var(--space-3);flex-wrap:wrap;margin-bottom:var(--space-4)">
          <span class="card-category ${catClass[article.category] || 'cat-nepse'}">${article.category}</span>
          ${article.relatedTopic ? `<a href="${article.relatedTopic.url}" class="badge badge-outline" style="text-decoration:none">${article.relatedTopic.name}</a>` : ''}
        </div>

        <h1 style="max-width:840px">${article.title}</h1>

        <div class="blog-post-meta" style="flex-wrap:wrap;gap:var(--space-2) var(--space-4)">
          <span>
            Written by ${article.author === 'Aakash Das'
              ? `<a href="${ROUTES.AAKASH_DAS}" style="color:inherit;font-weight:600;text-decoration:underline;text-underline-offset:2px">Aakash Das</a>`
              : `<strong>${article.author}</strong>`}
          </span>
          <span>·</span>
          <span>Published: ${formatDate(article.date)}</span>
          ${article.lastUpdated ? `
            <span>·</span>
            <span style="color:var(--color-accent);font-weight:500;display:inline-flex;align-items:center">
              ${ICONS.check} Verified: ${formatDate(article.lastUpdated)}
            </span>
          ` : ''}
          <span>·</span>
          <span>${article.readTime}</span>
        </div>
      </div>
    </div>

    <!-- 2. Featured Image (if available) -->
    ${article.thumbnail
      ? `<div class="blog-post-featured" id="post-featured">
          <div class="container container-narrow" style="max-width:760px;margin:0 auto;padding:0 var(--space-5)">
            <img src="${article.thumbnail}" alt="${article.title}" class="blog-post-featured-img" loading="lazy" decoding="async">
          </div>
        </div>`
      : ''
    }

    <!-- 3. Main Editorial Body -->
    <article class="blog-post-body" id="post-body">
      ${article.content}

      <!-- Interactive Calculator Callout (if connected) -->
      ${article.relatedCalculator ? `
        <div class="article-tool-callout" style="display:flex;align-items:center;gap:var(--space-4);padding:var(--space-4) var(--space-5);border-radius:var(--radius-lg);background:var(--color-surface);border:1px solid var(--color-border);margin:var(--space-8) 0;box-shadow:var(--shadow-sm)">
          <div style="display:inline-flex;width:36px;height:36px;border-radius:var(--radius-full);background:var(--color-accent-subtle);color:var(--color-accent);align-items:center;justify-content:center;flex-shrink:0">
            ${ICONS.calculator}
          </div>
          <div style="flex:1">
            <span style="font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.05em;color:var(--color-accent);font-weight:600;display:block">Interactive Tool</span>
            <strong style="display:block;font-size:var(--text-base);color:var(--color-heading);margin-top:2px">${article.relatedCalculator.title}</strong>
            <p style="margin:2px 0 0;font-size:var(--text-xs);color:var(--color-text-secondary)">${article.relatedCalculator.ctaText}</p>
          </div>
          <a href="${article.relatedCalculator.url}" class="btn btn-secondary btn-sm" style="white-space:nowrap">
            Open Tool →
          </a>
        </div>
      ` : ''}

      <!-- Sources & Regulatory References -->
      ${article.sources && article.sources.length > 0 ? `
        <div class="article-sources-box" style="margin-top:var(--space-8);padding:var(--space-5);border-radius:var(--radius-lg);background:var(--color-surface);border:1px solid var(--color-border)">
          <h3 style="font-size:var(--text-sm);text-transform:uppercase;letter-spacing:0.06em;color:var(--color-heading);margin:0 0 var(--space-3) 0;display:flex;align-items:center;gap:var(--space-2)">
            <span style="color:var(--color-accent);display:inline-flex;width:16px;height:16px">${ICONS.shield}</span>
            Sources & Primary Regulatory References
          </h3>
          <ul style="margin:0;padding-left:var(--space-4);font-size:var(--text-xs);color:var(--color-text-secondary);line-height:1.7">
            ${article.sources.map(s => `
              <li>
                <strong>${s.title}</strong> — <span>${s.institution}</span>
                (<a href="${s.url}" target="_blank" rel="noopener nofollow" style="color:var(--color-accent);text-decoration:none">${new URL(s.url).hostname}${ICONS.externalLink}</a>)
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Educational Disclaimer -->
      <div class="article-disclaimer-box" style="margin-top:var(--space-6);padding:var(--space-4) var(--space-5);border-radius:var(--radius-md);background:var(--color-surface-subtle);border-left:3px solid var(--color-border);font-size:var(--text-xs);color:var(--color-text-muted);line-height:1.6">
        <strong>Educational Disclaimer:</strong> ${article.disclaimer || 'All content published on RisePaisa is strictly for educational and informational purposes. Neither RisePaisa nor Aakash Das provides personalized financial advice or brokerage services.'} Read our <a href="${ROUTES.EDITORIAL_POLICY || '/editorial-policy'}" style="color:inherit;text-decoration:underline">Editorial Policy & Standards</a>.
      </div>
    </article>

    <!-- 4. Reusable Author Component -->
    ${article.author === 'Aakash Das' ? `
      <div class="container container-narrow" style="max-width:760px;margin:0 auto var(--space-8);padding:0 var(--space-5)">
        <div class="article-author-box" style="display:flex;gap:var(--space-4);align-items:center;padding:var(--space-5);border-radius:var(--radius-lg);background:var(--color-surface);border:1px solid var(--color-border)">
          <img src="assets/images/aakash-das-founder-risepaisa.jpg" alt="Aakash Das, founder of RisePaisa" style="width:64px;height:64px;border-radius:var(--radius-full);object-fit:cover;flex-shrink:0;border:2px solid var(--color-accent)" loading="lazy" decoding="async" width="64" height="64">
          <div style="flex:1">
            <span style="font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.06em;color:var(--color-accent);font-weight:600">About the Author</span>
            <h4 style="margin:2px 0 2px;font-size:var(--text-base)">
              <a href="${ROUTES.AAKASH_DAS}" style="color:var(--color-heading);text-decoration:none">Aakash Das</a>
            </h4>
            <div style="font-size:var(--text-xs);color:var(--color-text-secondary);font-weight:500;margin-bottom:var(--space-2)">
              Founder of RisePaisa | Finance Educator & Content Creator
            </div>
            <p style="margin:0;font-size:var(--text-xs);color:var(--color-text-secondary);line-height:1.5">
              Aakash Das is the founder of RisePaisa, a Nepal-focused financial education platform covering investing, NEPSE, personal finance, banking, fintech, and taxation.
            </p>
            <a href="${ROUTES.AAKASH_DAS}" style="display:inline-block;margin-top:var(--space-2);font-size:var(--text-xs);color:var(--color-accent);font-weight:600;text-decoration:none">
              View Aakash Das's profile & articles →
            </a>
          </div>
        </div>
      </div>
    ` : ''}

    <!-- 5. Footer & Share Actions -->
    <div class="blog-post-footer" id="post-footer">
      ${renderShareButtons(article.title, `blog/${article.slug}`)}
      <a href="${ROUTES.BLOG}" class="btn btn-ghost">← Back to Articles</a>
    </div>

    <!-- 6. Related Articles Grid -->
    ${related.length > 0 ? `
      <section class="related-articles" id="related-articles">
        <div class="container">
          <div class="section-header">
            <h2>Related Articles</h2>
          </div>
          <div class="grid-3">
            ${related.map(a => renderArticleCard(a)).join('')}
          </div>
        </div>
      </section>
    ` : ''}
  `;
}

export function initBlogPostPage() {
  // No special initialization needed
}

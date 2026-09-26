// ==============================================
// risePaisa | Aakash Das Official Profile Page
// Founder of RisePaisa | Finance Educator & Content Creator
// ==============================================
import { ICONS, setPageMeta, getWhatsApp } from '../components.js';
import { ROUTES } from '../routes.js';
import { getSettings } from '../data/settings.js';
import { getArticles } from '../data/articles.js';

// ── LinkedIn icon ──────────────────────────────
const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

// ── Verified check badge icon ──────────────────
const ICON_VERIFIED_BADGE = `<svg viewBox="0 0 22 22" fill="none" class="contact-verified-badge" style="display:inline-block;vertical-align:middle;margin-left:6px"><circle cx="11" cy="11" r="11" fill="var(--color-accent)"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function renderAakashDasPage() {
  setPageMeta(
    'Aakash Das — Founder of RisePaisa | Finance Educator',
    'Learn about Aakash Das, founder of RisePaisa and a finance educator and content creator focused on financial education in Nepal.',
    ROUTES.AAKASH_DAS
  );

  const settings = getSettings();
  const aakashLinks = settings.contactLinks?.aakash || {};
  const articles = getArticles().filter(a => a.author === 'Aakash Das');

  return `
    <!-- Breadcrumb Header -->
    <div class="page-header" id="aakash-header" style="padding-bottom:var(--space-6)">
      <div class="container">
        <div class="breadcrumb" style="margin-bottom:var(--space-3)">
          <a href="${ROUTES.HOME}">Home</a><span class="separator">/</span>
          <a href="${ROUTES.ABOUT}">About</a><span class="separator">/</span>
          <span>Aakash Das</span>
        </div>
        <span class="section-eyebrow">Platform Leadership</span>
        <h1>Aakash Das</h1>
        <p style="max-width:700px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
          Founder of RisePaisa · Finance Educator & Content Creator
        </p>
      </div>
    </div>

    <!-- Main Profile Card Section -->
    <section class="section founder-section-wrapper" id="aakash-profile-section" style="padding-top:0">
      <div class="container">
        <div class="founder-card-redesign" style="margin-top:0">
          <div class="founder-grid-layout">
            <div class="founder-photo-col">
              <figure style="margin:0">
                <div class="founder-photo-card">
                  <img
                    src="assets/images/aakash-das-founder-risepaisa.jpg"
                    alt="Aakash Das, founder of RisePaisa"
                    class="founder-photo-img"
                    loading="eager"
                    decoding="async"
                    width="1563"
                    height="1563"
                  >
                  <div class="founder-photo-glow"></div>
                </div>
                <figcaption class="founder-figure-caption">
                  Aakash Das — Founder of RisePaisa
                </figcaption>
              </figure>

              <div class="profile-social-strip">
                ${aakashLinks.linkedin ? `<a href="${aakashLinks.linkedin}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Aakash Das on LinkedIn">${ICON_LINKEDIN}</a>` : ''}
                ${aakashLinks.youtube ? `<a href="${aakashLinks.youtube}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Aakash Das on YouTube">${ICONS.youtube}</a>` : ''}
                ${aakashLinks.instagram ? `<a href="${aakashLinks.instagram}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Aakash Das on Instagram">${ICONS.instagram}</a>` : ''}
                ${aakashLinks.facebook ? `<a href="${aakashLinks.facebook}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Aakash Das on Facebook">${ICONS.facebook}</a>` : ''}
                ${aakashLinks.twitter ? `<a href="${aakashLinks.twitter}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Aakash Das on X">${ICONS.twitter}</a>` : ''}
                ${aakashLinks.tiktok ? `<a href="${aakashLinks.tiktok}" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Aakash Das on TikTok">${ICONS.tiktok}</a>` : ''}
              </div>
            </div>

            <div class="founder-info-col">
              <div class="founder-header-block">
                <span class="founder-badge">Platform Leadership</span>
                <h2 class="founder-name">About Aakash Das ${ICON_VERIFIED_BADGE}</h2>
                <div class="founder-titles-list">
                  <span>Founder of RisePaisa</span>
                  <span class="founder-title-dot">•</span>
                  <span>Finance Educator</span>
                  <span class="founder-title-dot">•</span>
                  <span>Content Creator</span>
                </div>
              </div>

              <div class="founder-bio-block">
                <p style="font-size:var(--text-base);line-height:1.6;color:var(--color-heading);font-weight:500;margin-bottom:var(--space-3)">
                  Aakash Das is the founder of RisePaisa, a Nepal-focused financial education platform. He creates educational content and practical financial tools covering areas including the Nepal stock market (NEPSE), personal finance, banking, fintech, and taxation.
                </p>
                <p>
                  Observing that most available financial guidance in Nepal was either overly academic, copied from Western markets, or obscured by speculative noise, Aakash started RisePaisa to provide clear, actionable, and verified financial education.
                </p>
                <p>
                  His educational focus centers on simplifying how money actually works in Nepal: from mastering fundamental personal budgeting and navigating the Nepal Stock Exchange (NEPSE) to filing personal income taxes, utilizing digital wallets safely, and planning long-term wealth through disciplined SIPs and mutual funds.
                </p>
              </div>

              <div class="entity-fact-set">
                <span class="entity-fact-label">Key Entity Facts</span>
                <dl class="entity-fact-list">
                  <dt>Full Name:</dt>
                  <dd>Aakash Das</dd>
                  <dt>Role:</dt>
                  <dd>Founder of RisePaisa</dd>
                  <dt>Professional Focus:</dt>
                  <dd>Finance Education & Content Creation</dd>
                  <dt>Organization:</dt>
                  <dd><a href="${ROUTES.HOME}">RisePaisa</a></dd>
                  <dt>Market Focus:</dt>
                  <dd>Nepal (Financial Ecosystem)</dd>
                  <dt>Academic Background:</dt>
                  <dd>Information Technology (Softwarica College of IT)</dd>
                  <dt>Canonical Profile:</dt>
                  <dd><a href="https://risepaisa.com/aakash-das">https://risepaisa.com/aakash-das</a></dd>
                </dl>
              </div>

              <div class="founder-actions-row">
                <a
                  href="https://wa.me/${getWhatsApp()}?text=${encodeURIComponent('Hi Aakash, I would like to connect and learn more about risePaisa.') }"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-whatsapp founder-btn-primary"
                >
                  ${ICONS.whatsapp} Connect via WhatsApp
                </a>
                <a
                  href="${ROUTES.CONTACT}"
                  class="btn btn-secondary founder-btn-secondary"
                >
                  ${ICONS.mail} General Inquiries
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Educational Focus Areas -->
    <section class="section section-alt" id="aakash-focus-areas">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-10)">
          <span class="section-eyebrow">Curriculum & Topics</span>
          <h2>Areas of Focus</h2>
          <p style="max-width:640px;margin:var(--space-3) auto 0;color:var(--color-text-secondary)">
            Core financial domains taught, researched, and developed by Aakash Das across the RisePaisa ecosystem.
          </p>
        </div>

        <div class="grid-3 stagger-children" style="max-width:1100px;margin:0 auto">
          <!-- 1. NEPSE -->
          <div class="card" style="padding:var(--space-6);display:flex;flex-direction:column;justify-content:space-between">
            <div>
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3)">
                <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.target}</span>
                <h3 style="margin:0;font-size:var(--text-base)">Nepal Stock Market (NEPSE)</h3>
              </div>
              <p style="color:var(--color-text-secondary);font-size:var(--text-xs);line-height:1.6;margin-bottom:var(--space-4)">
                Step-by-step guidance for beginners on opening DEMAT accounts, using CDSC MeroShare, participating in IPO allocations, understanding SEBON regulations, and long-term equity valuation.
              </p>
            </div>
            <a href="${ROUTES.LEARN_CATEGORY('nepse')}" class="card-link" style="display:inline-flex;align-items:center;gap:4px;color:var(--color-primary);font-size:var(--text-xs);font-weight:600;text-decoration:none">
              Explore NEPSE Curriculum ${ICONS.arrowRight}
            </a>
          </div>

          <!-- 2. Personal Income Tax -->
          <div class="card" style="padding:var(--space-6);display:flex;flex-direction:column;justify-content:space-between">
            <div>
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3)">
                <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.receipt}</span>
                <h3 style="margin:0;font-size:var(--text-base)">Nepal Income Tax & Deductions</h3>
              </div>
              <p style="color:var(--color-text-secondary);font-size:var(--text-xs);line-height:1.6;margin-bottom:var(--space-4)">
                Demystifying Inland Revenue Department (IRD) progressive tax slabs, legal deductions (SSF, CIT, life insurance), and self-assessment filing for salaried professionals and freelancers.
              </p>
            </div>
            <a href="${ROUTES.LEARN_CATEGORY('taxation')}" class="card-link" style="display:inline-flex;align-items:center;gap:4px;color:var(--color-primary);font-size:var(--text-xs);font-weight:600;text-decoration:none">
              Explore Taxation Hub ${ICONS.arrowRight}
            </a>
          </div>

          <!-- 3. Disciplined Investing & SIPs -->
          <div class="card" style="padding:var(--space-6);display:flex;flex-direction:column;justify-content:space-between">
            <div>
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3)">
                <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.trendingUp}</span>
                <h3 style="margin:0;font-size:var(--text-base)">Disciplined Investing & SIPs</h3>
              </div>
              <p style="color:var(--color-text-secondary);font-size:var(--text-xs);line-height:1.6;margin-bottom:var(--space-4)">
                Educating Nepali earners on the power of compounding through Systematic Investment Plans (SIP) in open-ended mutual funds, fixed deposit strategies, and inflation-hedged wealth preservation.
              </p>
            </div>
            <a href="${ROUTES.LEARN_CATEGORY('mutual-funds')}" class="card-link" style="display:inline-flex;align-items:center;gap:4px;color:var(--color-primary);font-size:var(--text-xs);font-weight:600;text-decoration:none">
              Explore Mutual Funds Hub ${ICONS.arrowRight}
            </a>
          </div>

          <!-- 4. Personal Finance & Budgeting -->
          <div class="card" style="padding:var(--space-6);display:flex;flex-direction:column;justify-content:space-between">
            <div>
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3)">
                <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.pieChart || ICONS.chart}</span>
                <h3 style="margin:0;font-size:var(--text-base)">Personal Finance & Cash Flow</h3>
              </div>
              <p style="color:var(--color-text-secondary);font-size:var(--text-xs);line-height:1.6;margin-bottom:var(--space-4)">
                Structuring pragmatic monthly budgets, emergency funds, debt reduction strategies, and financial planning tailored to living costs in urban and semi-urban Nepal.
              </p>
            </div>
            <a href="${ROUTES.LEARN_CATEGORY('personal-finance')}" class="card-link" style="display:inline-flex;align-items:center;gap:4px;color:var(--color-primary);font-size:var(--text-xs);font-weight:600;text-decoration:none">
              Explore Personal Finance ${ICONS.arrowRight}
            </a>
          </div>

          <!-- 5. Banking & Interest Rates -->
          <div class="card" style="padding:var(--space-6);display:flex;flex-direction:column;justify-content:space-between">
            <div>
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3)">
                <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.check}</span>
                <h3 style="margin:0;font-size:var(--text-base)">Banking & Fixed Deposits</h3>
              </div>
              <p style="color:var(--color-text-secondary);font-size:var(--text-xs);line-height:1.6;margin-bottom:var(--space-4)">
                Evaluating Class 'A' commercial banks, understanding Nepal Rastra Bank base rates, deposit guarantees by DCGF, and maximizing returns on savings accounts and recurring deposits.
              </p>
            </div>
            <a href="${ROUTES.LEARN_CATEGORY('banking')}" class="card-link" style="display:inline-flex;align-items:center;gap:4px;color:var(--color-primary);font-size:var(--text-xs);font-weight:600;text-decoration:none">
              Explore Banking Guide ${ICONS.arrowRight}
            </a>
          </div>

          <!-- 6. Fintech & Digital Safety -->
          <div class="card" style="padding:var(--space-6);display:flex;flex-direction:column;justify-content:space-between">
            <div>
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3)">
                <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.shield}</span>
                <h3 style="margin:0;font-size:var(--text-base)">Fintech & Digital Payment Safety</h3>
              </div>
              <p style="color:var(--color-text-secondary);font-size:var(--text-xs);line-height:1.6;margin-bottom:var(--space-4)">
                Practical awareness against financial cyber fraud in Nepal, covering OTP phishing defenses, digital wallet security (eSewa, Khalti, ConnectIPS), and reporting protocols with the Nepal Police Cyber Bureau.
              </p>
            </div>
            <a href="${ROUTES.LEARN_CATEGORY('fintech')}" class="card-link" style="display:inline-flex;align-items:center;gap:4px;color:var(--color-primary);font-size:var(--text-xs);font-weight:600;text-decoration:none">
              Explore Fintech Hub ${ICONS.arrowRight}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Academic & Technical Background -->
    <section class="section" id="aakash-education">
      <div class="container container-narrow">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Academic Foundation</span>
          <h2>Education & Background</h2>
          <p style="max-width:560px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            Formal studies in Information Technology paired with foundational financial and accounting training.
          </p>
        </div>

        <div style="display:flex;flex-direction:column;gap:var(--space-4);max-width:760px;margin:0 auto">
          <!-- 1. Softwarica IT -->
          <div class="card" style="padding:var(--space-6);display:flex;gap:var(--space-4);align-items:flex-start">
            <div style="display:inline-flex;width:40px;height:40px;border-radius:var(--radius-md);background:var(--color-accent-subtle);color:var(--color-accent);align-items:center;justify-content:center;flex-shrink:0">
              ${ICONS.book || ICONS.target}
            </div>
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-2);margin-bottom:var(--space-1)">
                <h3 style="margin:0;font-size:var(--text-base)">Information Technology (IT)</h3>
                <span class="badge badge-outline" style="font-size:11px">Currently Enrolled</span>
              </div>
              <div style="font-size:var(--text-xs);color:var(--color-accent);font-weight:500;margin-bottom:var(--space-2)">
                Softwarica College of IT & E-Commerce, Kathmandu, Nepal
              </div>
              <p style="margin:0;font-size:var(--text-xs);color:var(--color-text-secondary);line-height:1.6">
                Pursuing formal studies in Information Technology, focusing on software architecture, web technologies, and computational systems—the technical foundation powering RisePaisa's interactive financial calculators and accessible digital learning infrastructure.
              </p>
            </div>
          </div>

          <!-- 2. CA Studies Transition -->
          <div class="card" style="padding:var(--space-6);display:flex;gap:var(--space-4);align-items:flex-start">
            <div style="display:inline-flex;width:40px;height:40px;border-radius:var(--radius-md);background:var(--color-surface-alt);color:var(--color-text-muted);align-items:center;justify-content:center;flex-shrink:0">
              ${ICONS.receipt || ICONS.shield}
            </div>
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-2);margin-bottom:var(--space-1)">
                <h3 style="margin:0;font-size:var(--text-base)">Foundational Accounting & Financial Studies</h3>
                <span style="font-size:11px;color:var(--color-text-muted)">Prior Academic Focus</span>
              </div>
              <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-2)">
                Chartered Accountancy Preparatory Coursework
              </div>
              <p style="margin:0;font-size:var(--text-xs);color:var(--color-text-secondary);line-height:1.6">
                Previously pursued formal Chartered Accountancy studies covering Nepali tax legislation, auditing principles, and financial reporting standards before transitioning focus to Information Technology and scalable digital financial education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Authored by Aakash Das -->
    <section class="section section-alt" id="aakash-articles-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Publications</span>
          <h2>Latest Articles by Aakash Das</h2>
          <p>Practical, Nepal-specific research and guides genuinely authored by Aakash Das on RisePaisa.</p>
        </div>

        <div class="grid-3 stagger-children">
          ${articles.map(a => `
            <article class="card article-card" id="author-article-${a.id}" style="display:flex;flex-direction:column;justify-content:space-between">
              <div>
                ${a.thumbnail ? `<img src="${a.thumbnail}" alt="${a.title}" class="article-card-thumb" loading="lazy" decoding="async">` : ''}
                <div class="card-body">
                  <div class="card-badges" style="display:flex;align-items:center;gap:6px;margin-bottom:var(--space-2)">
                    <span class="badge badge-outline">${a.category}</span>
                    ${a.lastUpdated ? `<span style="font-size:10px;color:var(--color-text-muted);background:var(--color-surface-alt);padding:2px 6px;border-radius:var(--radius-sm)">Updated ${a.lastUpdated}</span>` : ''}
                  </div>
                  <h3 style="margin-top:0"><a href="${ROUTES.BLOG_POST(a.slug)}" style="color:inherit;text-decoration:none">${a.title}</a></h3>
                  <p style="font-size:var(--text-xs);line-height:1.5;color:var(--color-text-secondary);margin-bottom:var(--space-3)">${a.excerpt}</p>
                </div>
              </div>
              <div class="card-body" style="padding-top:0;border-top:1px solid var(--color-border);margin-top:var(--space-2)">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;font-size:11px;color:var(--color-text-muted)">
                  <span>${a.date} · ${a.readTime}</span>
                  ${a.relatedCalculator ? `<a href="${a.relatedCalculator.url}" style="color:var(--color-primary);text-decoration:none;font-weight:600">${a.relatedCalculator.title || a.relatedCalculator.name} →</a>` : ''}
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <div style="text-align:center;margin-top:var(--space-8)">
          <a href="${ROUTES.BLOG}" class="btn btn-secondary">Browse All RisePaisa Articles ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- Relationship with RisePaisa: Founder of RisePaisa -->
    <section class="section" id="aakash-platform-relationship">
      <div class="container container-narrow" style="text-align:center">
        <span class="section-eyebrow">Platform Stewardship</span>
        <h2 style="margin-bottom:var(--space-4)">Founder of RisePaisa</h2>
        <p style="color:var(--color-text-secondary);font-size:var(--text-base);line-height:1.7;margin-bottom:var(--space-4)">
          Aakash Das founded <strong>RisePaisa</strong> as an independent financial education platform focused on helping people in Nepal better understand investing, personal finance, banking, taxation, and the broader financial system.
        </p>
        <p style="color:var(--color-text-secondary);font-size:var(--text-sm);line-height:1.7;margin-bottom:var(--space-8)">
          Under his direction, RisePaisa develops structured masterclasses, comprehensive learning roadmaps, and free interactive financial calculators designed specifically for Nepal's economic reality.
        </p>
        <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
          <a href="${ROUTES.HOME}" class="btn btn-primary">Explore RisePaisa →</a>
          <a href="${ROUTES.ABOUT}" class="btn btn-secondary">About RisePaisa</a>
          <a href="${ROUTES.LEARN}" class="btn btn-secondary">Learn Academy</a>
        </div>
      </div>
    </section>

    <!-- Official Profiles & Entity Verification -->
    <section class="section section-alt" id="aakash-official-profiles">
      <div class="container container-narrow">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Entity Verification</span>
          <h2>Official Profiles & Public Channels</h2>
          <p style="max-width:560px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            Verified digital profiles and official public channels for Aakash Das.
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:var(--space-4);max-width:800px;margin:0 auto">
          ${aakashLinks.linkedin ? `
            <a href="${aakashLinks.linkedin}" target="_blank" rel="noopener me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:32px;height:32px;border-radius:var(--radius-full);background:var(--color-surface-alt);align-items:center;justify-content:center;color:var(--color-primary);flex-shrink:0">${ICON_LINKEDIN}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">LinkedIn</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">Professional Network</span>
              </div>
            </a>
          ` : ''}
          ${aakashLinks.youtube ? `
            <a href="${aakashLinks.youtube}" target="_blank" rel="noopener me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:32px;height:32px;border-radius:var(--radius-full);background:var(--color-surface-alt);align-items:center;justify-content:center;color:#ff0000;flex-shrink:0">${ICONS.youtube}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">YouTube</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">Video Lessons</span>
              </div>
            </a>
          ` : ''}
          ${aakashLinks.twitter ? `
            <a href="${aakashLinks.twitter}" target="_blank" rel="noopener me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:32px;height:32px;border-radius:var(--radius-full);background:var(--color-surface-alt);align-items:center;justify-content:center;color:var(--color-heading);flex-shrink:0">${ICONS.twitter}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">X (Twitter)</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">Discussions & Insights</span>
              </div>
            </a>
          ` : ''}
          ${aakashLinks.instagram ? `
            <a href="${aakashLinks.instagram}" target="_blank" rel="noopener me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:32px;height:32px;border-radius:var(--radius-full);background:var(--color-surface-alt);align-items:center;justify-content:center;color:#e1306c;flex-shrink:0">${ICONS.instagram}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">Instagram</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">Visual Financial Tips</span>
              </div>
            </a>
          ` : ''}
        </div>
      </div>
    </section>

    <!-- Educational Disclaimer Notice -->
    <section class="section" id="aakash-disclaimer" style="padding-top:var(--space-6);padding-bottom:var(--space-10)">
      <div class="container container-narrow">
        <div style="padding:var(--space-5);border-radius:var(--radius-lg);border:1px solid var(--color-border);background:var(--color-surface);font-size:var(--text-xs);color:var(--color-text-muted);line-height:1.6">
          <p style="margin:0">
            <strong>Educational Transparency Notice:</strong> All educational material, articles, videos, and calculators produced by Aakash Das through RisePaisa are intended strictly for educational and informational purposes. Neither RisePaisa nor Aakash Das provides personalized financial advice, licensed brokerage, or portfolio management services. For details on research standards, verification, and corrections, please read our <a href="${ROUTES.EDITORIAL_POLICY || '/editorial-policy'}">Editorial Policy & Fact-Checking Standards</a> and <a href="${ROUTES.DISCLAIMER}">Full Disclaimer</a>.
          </p>
        </div>
      </div>
    </section>
  `;
}

export function initAakashDasPage() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('about-animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('#aakash-profile-section .founder-card-redesign, #aakash-focus-areas .card, #aakash-articles-section .article-card').forEach(el => {
    el.classList.add('about-animate-target');
    observer.observe(el);
  });
}

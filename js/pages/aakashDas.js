// ==============================================
// risePaisa | Aakash Das Official Founder Profile
// Founder of RisePaisa | Finance Educator & Content Creator
// ==============================================
import { ICONS, setPageMeta, getWhatsApp } from '../components.js';
import { ROUTES } from '../routes.js';
import { getSettings } from '../data/settings.js';
import { getArticles } from '../data/articles.js';

// ── Verified badge icon ───────────────────────
const ICON_VERIFIED_BADGE = `<svg viewBox="0 0 22 22" fill="none" class="contact-verified-badge" style="display:inline-block;vertical-align:middle;margin-left:6px" width="18" height="18" aria-label="Verified Profile"><circle cx="11" cy="11" r="11" fill="var(--color-accent)"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// ── LinkedIn icon ──────────────────────────────
const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

export function renderAakashDasPage() {
  setPageMeta(
    'Aakash Das — Founder of RisePaisa | Finance Educator & Content Creator',
    'Official profile of Aakash Das, founder of RisePaisa and RiseNepse. Explore his background, education, career journey, projects, publications, and financial education initiatives in Nepal.',
    ROUTES.AAKASH_DAS
  );

  const settings = getSettings();
  const aakashLinks = settings.contactLinks?.aakash || {};
  const articles = getArticles().filter(a => a.author === 'Aakash Das');
  const instagramUrl = aakashLinks.instagram || 'https://www.instagram.com/aakashdas_';

  return `
    <!-- Top Minimal Breadcrumb -->
    <div class="container" style="padding-top:var(--space-6);margin-bottom:var(--space-4)">
      <div class="breadcrumb" style="margin-bottom:0">
        <a href="${ROUTES.HOME}">Home</a><span class="separator">/</span>
        <a href="${ROUTES.ABOUT}">About</a><span class="separator">/</span>
        <span>Aakash Das</span>
      </div>
    </div>

    <!-- 1. Profile Hero Section (Redesigned & Unified) -->
    <section class="section founder-section-wrapper" id="aakash-profile-section" style="padding-top:0">
      <div class="container">
        <div class="founder-hero-card" id="aakash-hero">
          <div class="founder-hero-grid">
            
            <!-- Left Column: Portrait & Verified Social Strip -->
            <div class="founder-portrait-col">
              <figure style="margin:0;width:100%">
                <div class="founder-portrait-wrap">
                  <img
                    src="assets/images/aakash-das-founder-risepaisa.jpg"
                    alt="Aakash Das, founder of RisePaisa"
                    class="founder-portrait-img"
                    loading="eager"
                    decoding="async"
                    width="1563"
                    height="1563"
                  >
                </div>
                <figcaption class="founder-portrait-caption">
                  Aakash Das · Founder of RisePaisa
                </figcaption>
              </figure>

              <!-- Verified Social Links Strip -->
              <div class="profile-social-strip" aria-label="Official Social Profiles">
                ${aakashLinks.linkedin ? `<a href="${aakashLinks.linkedin}" target="_blank" rel="noopener noreferrer me" class="social-icon-btn" aria-label="Aakash Das on LinkedIn">${ICON_LINKEDIN}</a>` : ''}
                <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer me" class="social-icon-btn" aria-label="Aakash Das on Instagram">${ICONS.instagram}</a>
                ${aakashLinks.youtube ? `<a href="${aakashLinks.youtube}" target="_blank" rel="noopener noreferrer me" class="social-icon-btn" aria-label="Aakash Das on YouTube">${ICONS.youtube}</a>` : ''}
                ${aakashLinks.facebook ? `<a href="${aakashLinks.facebook}" target="_blank" rel="noopener noreferrer me" class="social-icon-btn" aria-label="Aakash Das on Facebook">${ICONS.facebook}</a>` : ''}
                ${aakashLinks.twitter ? `<a href="${aakashLinks.twitter}" target="_blank" rel="noopener noreferrer me" class="social-icon-btn" aria-label="Aakash Das on X">${ICONS.twitter}</a>` : ''}
                ${aakashLinks.tiktok ? `<a href="${aakashLinks.tiktok}" target="_blank" rel="noopener noreferrer me" class="social-icon-btn" aria-label="Aakash Das on TikTok">${ICONS.tiktok}</a>` : ''}
              </div>
            </div>

            <!-- Right Column: Founder Identification, Bio & Primary CTAs -->
            <div class="founder-hero-content">
              <span class="founder-hero-badge">Founder & Finance Educator</span>
              <h1 class="founder-hero-name">Aakash Das ${ICON_VERIFIED_BADGE}</h1>
              <div class="founder-hero-headline">Founder of RisePaisa | Finance Educator & Content Creator</div>
              <div class="founder-hero-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Kathmandu, Nepal · RisePaisa & RiseNepse</span>
              </div>

              <p class="founder-hero-bio">
                I'm Aakash Das, founder of RisePaisa, a Nepal-focused financial education platform. I create practical educational content and digital tools that help people understand investing, banking, taxation, fintech, and personal finance.
              </p>

              <!-- Meaningful Credibility Highlights -->
              <div class="founder-cred-strip">
                <span class="founder-cred-pill"><strong>100K+</strong> Combined Social Following</span>
                <span class="founder-cred-pill"><strong>RisePaisa & RiseNepse</strong> Platforms</span>
                <span class="founder-cred-pill"><strong>60+</strong> Research Guides & Lessons</span>
                <span class="founder-cred-pill"><strong>12</strong> Interactive Financial Engines</span>
                <span class="founder-cred-pill"><strong>BSc IT Student</strong> (Coventry / Softwarica)</span>
              </div>

              <!-- Prioritized Actions: 1. Explore My Work, 2. Visit RisePaisa, 3. Instagram, 4. WhatsApp Connect -->
              <div class="founder-cta-row">
                <a href="#aakash-work" class="btn btn-primary" style="text-decoration:none">
                  Explore My Work ↓
                </a>
                <a href="${ROUTES.HOME}" class="btn btn-secondary" style="text-decoration:none">
                  Visit RisePaisa →
                </a>
                <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer me" class="btn btn-secondary" aria-label="Visit Aakash Das on Instagram (@aakashdas_)" style="text-decoration:none">
                  ${ICONS.instagram} Instagram
                </a>
                <a href="https://wa.me/${getWhatsApp()}?text=${encodeURIComponent('Hi Aakash, I would like to connect regarding RisePaisa.')}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="text-decoration:none">
                  ${ICONS.whatsapp} Connect
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 2. Professional Overview (Clear Narrative & Snapshot) -->
    <section class="section section-alt" id="aakash-about-section">
      <div class="container container-narrow">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Background & Mission</span>
          <h2>Professional Overview</h2>
          <p style="max-width:640px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            Building transparent, accessible, and structured financial education systems tailored to Nepal's economic reality.
          </p>
        </div>

        <div style="display:grid;grid-template-columns:1fr;gap:var(--space-6)">
          <div class="card" style="padding:var(--space-8)">
            <div style="font-size:var(--text-base);line-height:1.75;color:var(--color-text-secondary);display:flex;flex-direction:column;gap:var(--space-4)">
              <p style="margin:0;color:var(--color-heading);font-weight:600;font-size:1.125rem">
                Financial literacy in Nepal is too often fragmented, overly academic, or obscured by speculative market noise. My mission is to make real financial understanding simple, practical, and universally accessible.
              </p>
              <p style="margin:0">
                My background in finance began with a rigorous focus on how capital, accounting, and regulation operate in Nepal. During an intensive year of Chartered Accountancy coursework with The Institute of Chartered Accountants of India (ICAI), I studied financial accounting, auditing principles, corporate taxation, and financial management. That foundational period provided a thorough grasp of financial statements, balance sheets, and statutory frameworks.
              </p>
              <p style="margin:0">
                Recognizing that everyday Nepalis needed practical systems rather than theoretical accounting treatises, I made a conscious transition into technology and public financial education. Currently studying Information Technology at Coventry University (delivered via Softwarica College in Kathmandu), I combine financial analysis with software engineering to design client-side interactive calculators and structured learning roadmaps that help Nepali youth and diaspora earners build lasting financial discipline.
              </p>
            </div>
          </div>

          <!-- Professional Snapshot Panel -->
          <div class="entity-fact-set">
            <span class="entity-fact-label">Professional Snapshot</span>
            <dl class="entity-fact-list">
              <dt>Full Name:</dt>
              <dd>Aakash Das</dd>
              <dt>Primary Role:</dt>
              <dd>Founder of RisePaisa</dd>
              <dt>Specialized Project:</dt>
              <dd>RiseNepse (Stock Market Education)</dd>
              <dt>Focus Areas:</dt>
              <dd>Financial Education, NEPSE Analysis, Progressive Taxation & Web Tooling</dd>
              <dt>Location:</dt>
              <dd>Kathmandu, Nepal</dd>
              <dt>Current Education:</dt>
              <dd>BSc Information Technology, Coventry University / Softwarica (In Progress)</dd>
              <dt>Foundational Studies:</dt>
              <dd>Chartered Accountancy Coursework, ICAI (2024–2025, Discontinued)</dd>
              <dt>Canonical Profile:</dt>
              <dd><a href="https://risepaisa.com/aakash-das">https://risepaisa.com/aakash-das</a></dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Career Timeline (Chronological Progression & Decisions) -->
    <section class="section" id="aakash-timeline-section">
      <div class="container container-narrow">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-10)">
          <span class="section-eyebrow">Progression & Path</span>
          <h2>Career Timeline</h2>
          <p style="max-width:600px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            A transparent chronological record of education, intentional career transitions, and venture development.
          </p>
        </div>

        <div class="timeline-track">

          <!-- Milestone 1: School Education -->
          <div class="timeline-item">
            <div class="timeline-node"></div>
            <div class="timeline-card">
              <div class="timeline-meta-row">
                <span class="timeline-date">2022 – 2024</span>
                <span class="timeline-status completed">Completed Education</span>
              </div>
              <h3 class="timeline-title">Higher Secondary Education (+2 Science / Biology)</h3>
              <div class="timeline-institution">Sainik Awasiya Mahavidyalaya, Bhaktapur, Nepal</div>
              <p class="timeline-desc">
                Completed higher secondary school education focused on biological sciences. Built analytical discipline, participated in national-level mathematics and science exhibitions presented before Nepal's Chief of Army Staff, and engaged in inter-school debates and leadership societies.
              </p>
            </div>
          </div>

          <!-- Milestone 2: CA Studies -->
          <div class="timeline-item">
            <div class="timeline-node"></div>
            <div class="timeline-card">
              <div class="timeline-meta-row">
                <span class="timeline-date">May 2024 – June 2025</span>
                <span class="timeline-status transition">Discontinued Professional Studies</span>
              </div>
              <h3 class="timeline-title">Chartered Accountancy Studies (Foundational Coursework)</h3>
              <div class="timeline-institution">The Institute of Chartered Accountants of India (ICAI)</div>
              <p class="timeline-desc">
                Pursued one year of intensive foundational studies in financial accounting, corporate taxation, auditing standards, and financial management. After one year, made an intentional and professional decision to transition into information technology and scalable digital financial education rather than completing the full professional qualification. <em>(Foundational coursework completed; discontinued before full qualification; not CA qualified).</em>
              </p>
            </div>
          </div>

          <!-- Milestone 3: IT Studies -->
          <div class="timeline-item is-current">
            <div class="timeline-node"></div>
            <div class="timeline-card">
              <div class="timeline-meta-row">
                <span class="timeline-date">August 2025 – August 2028</span>
                <span class="timeline-status ongoing">Ongoing University Education</span>
              </div>
              <h3 class="timeline-title">Bachelor of Science (BSc) in Information Technology</h3>
              <div class="timeline-institution">Coventry University · Studied at Softwarica College of IT & E-Commerce, Kathmandu</div>
              <p class="timeline-desc">
                Currently enrolled in an undergraduate degree in Information Technology. Studies focus on software engineering, relational database systems, web applications, and computational logic—directly informing the development of RisePaisa's mathematical calculation engines and digital platform. <em>(Degree in progress; expected completion August 2028).</em>
              </p>
            </div>
          </div>

          <!-- Milestone 4: Founding RisePaisa -->
          <div class="timeline-item is-current">
            <div class="timeline-node"></div>
            <div class="timeline-card">
              <div class="timeline-meta-row">
                <span class="timeline-date">December 2025 – Present</span>
                <span class="timeline-status active">Active Entrepreneurial Venture</span>
              </div>
              <h3 class="timeline-title">Founded RisePaisa (risepaisa.com)</h3>
              <div class="timeline-institution">RisePaisa · Primary Organization</div>
              <p class="timeline-desc">
                Established RisePaisa to address Nepal's critical financial education gap. Designed and engineered 12 mathematical calculation tools verified against statutory rules (NRB, IRD, SEBON) and created structured learning roadmaps, articles, and financial calculators for Nepali earners.
              </p>
            </div>
          </div>

          <!-- Milestone 5: Founding RiseNepse -->
          <div class="timeline-item is-current">
            <div class="timeline-node"></div>
            <div class="timeline-card">
              <div class="timeline-meta-row">
                <span class="timeline-date">February 2026 – Present</span>
                <span class="timeline-status active">Active Educational Project</span>
              </div>
              <h3 class="timeline-title">Founded RiseNepse</h3>
              <div class="timeline-institution">RiseNepse · Specialized Stock Market Project</div>
              <p class="timeline-desc">
                Launched a specialized educational project dedicated to demystifying the Nepal Stock Exchange (NEPSE). Produces practical guides on DEMAT accounts, CDSC MeroShare, C-ASBA IPO mechanics, broker commissions, and disciplined fundamental analysis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. Dedicated Education Section (Concise Academic Summary) -->
    <section class="section section-alt" id="aakash-education-section">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Academic Summary</span>
          <h2>Formal Education & Studies</h2>
          <p style="max-width:600px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            A concise summary of formal university degree studies, professional coursework, and secondary education.
          </p>
        </div>

        <div class="edu-cards-grid">

          <!-- Card 1: Coventry / Softwarica -->
          <div class="edu-card">
            <div>
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-2);margin-bottom:var(--space-3)">
                <span class="timeline-status ongoing">Ongoing</span>
                <span style="font-size:12px;color:var(--color-text-muted);font-weight:600">2025 – 2028</span>
              </div>
              <h3 style="font-size:var(--text-lg);margin:0 0 var(--space-1);color:var(--color-heading)">BSc Information Technology</h3>
              <div style="font-size:var(--text-sm);font-weight:600;color:var(--color-primary-text, var(--color-primary));margin-bottom:var(--space-2)">
                Coventry University (UK)
              </div>
              <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-3)">
                Delivered at: Softwarica College of IT & E-Commerce, Kathmandu
              </div>
              <p style="font-size:var(--text-xs);line-height:1.6;color:var(--color-text-secondary);margin:0">
                Undergraduate program focused on software engineering, relational databases, web architecture, and algorithms. In progress; degree expected August 2028.
              </p>
            </div>
          </div>

          <!-- Card 2: ICAI -->
          <div class="edu-card">
            <div>
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-2);margin-bottom:var(--space-3)">
                <span class="timeline-status transition">Discontinued</span>
                <span style="font-size:12px;color:var(--color-text-muted);font-weight:600">2024 – 2025</span>
              </div>
              <h3 style="font-size:var(--text-lg);margin:0 0 var(--space-1);color:var(--color-heading)">Chartered Accountancy Coursework</h3>
              <div style="font-size:var(--text-sm);font-weight:600;color:var(--color-text);margin-bottom:var(--space-2)">
                The Institute of Chartered Accountants of India (ICAI)
              </div>
              <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-3)">
                Foundational Professional Studies (Completed ~1 Year)
              </div>
              <p style="font-size:var(--text-xs);line-height:1.6;color:var(--color-text-secondary);margin:0">
                Intensive foundational coursework in financial accounting, corporate taxation, and auditing. Transitioned to technology; explicitly not CA qualified.
              </p>
            </div>
          </div>

          <!-- Card 3: Sainik Awasiya Mahavidyalaya -->
          <div class="edu-card">
            <div>
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-2);margin-bottom:var(--space-3)">
                <span class="timeline-status completed">Completed</span>
                <span style="font-size:12px;color:var(--color-text-muted);font-weight:600">2022 – 2024</span>
              </div>
              <h3 style="font-size:var(--text-lg);margin:0 0 var(--space-1);color:var(--color-heading)">Higher Secondary Education (+2)</h3>
              <div style="font-size:var(--text-sm);font-weight:600;color:var(--color-text);margin-bottom:var(--space-2)">
                Sainik Awasiya Mahavidyalaya
              </div>
              <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-3)">
                Bhaktapur, Nepal · Biology / Biological Sciences
              </div>
              <p style="font-size:var(--text-xs);line-height:1.6;color:var(--color-text-secondary);margin:0">
                Completed secondary education with biology major. Participated in national science and mathematics exhibitions and inter-school academic events.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 5. Ventures & Projects Portfolio (Prioritized) -->
    <section class="section" id="aakash-ventures-section">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Projects & Platforms</span>
          <h2>Ventures & Projects</h2>
          <p style="max-width:640px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            Platforms, financial calculation tools, and educational initiatives engineered and led by Aakash Das.
          </p>
        </div>

        <div class="project-cards-grid">

          <!-- 1. RisePaisa Platform -->
          <div class="project-card">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-3)">
                <span class="badge badge-outline">Primary Platform</span>
                <span style="font-size:12px;color:var(--color-text-muted);font-weight:600">Dec 2025 – Present</span>
              </div>
              <h3 style="font-size:var(--text-lg);margin:0 0 var(--space-2);color:var(--color-heading)">RisePaisa (risepaisa.com)</h3>
              <p style="font-size:var(--text-xs);line-height:1.6;color:var(--color-text-secondary);margin-bottom:var(--space-4)">
                Nepal-focused financial education platform providing structured masterclasses, personal finance roadmaps, taxation explainers, and interactive tools designed specifically for the Nepali economic landscape.
              </p>
            </div>
            <a href="${ROUTES.HOME}" class="card-link" style="font-size:var(--text-xs);font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:4px">
              Explore RisePaisa Platform →
            </a>
          </div>

          <!-- 2. RiseNepse -->
          <div class="project-card">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-3)">
                <span class="badge badge-outline">Stock Market Project</span>
                <span style="font-size:12px;color:var(--color-text-muted);font-weight:600">Feb 2026 – Present</span>
              </div>
              <h3 style="font-size:var(--text-lg);margin:0 0 var(--space-2);color:var(--color-heading)">RiseNepse</h3>
              <p style="font-size:var(--text-xs);line-height:1.6;color:var(--color-text-secondary);margin-bottom:var(--space-4)">
                A dedicated educational project focused on the Nepal Stock Exchange (NEPSE). Delivers structured tutorials on DEMAT accounts, MeroShare, IPOs, secondary trading, broker commission tiers, and long-term valuation frameworks.
              </p>
            </div>
            <a href="${ROUTES.LEARN_CATEGORY('nepse')}" class="card-link" style="font-size:var(--text-xs);font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:4px">
              View NEPSE Educational Hub →
            </a>
          </div>

          <!-- 3. Financial Calculators -->
          <div class="project-card">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-3)">
                <span class="badge badge-outline">Fintech Tooling</span>
                <span style="font-size:12px;color:var(--color-text-muted);font-weight:600">12 Custom Engines</span>
              </div>
              <h3 style="font-size:var(--text-lg);margin:0 0 var(--space-2);color:var(--color-heading)">12 Nepal Financial Calculators</h3>
              <p style="font-size:var(--text-xs);line-height:1.6;color:var(--color-text-secondary);margin-bottom:var(--space-4)">
                Interactive mathematical engines built with vanilla JavaScript and tested against NRB, SEBON, and IRD formulas: SIP, SWP, Reducing-balance Loans, Progressive Tax, NEPSE WACC, FD/RD with 5% TDS, and Inflation.
              </p>
            </div>
            <a href="${ROUTES.CALCULATORS}" class="card-link" style="font-size:var(--text-xs);font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:4px">
              Use All 12 Calculators →
            </a>
          </div>

          <!-- 4. Financial Curriculum -->
          <div class="project-card">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-3)">
                <span class="badge badge-outline">Curriculum</span>
                <span style="font-size:12px;color:var(--color-text-muted);font-weight:600">6 Core Hubs</span>
              </div>
              <h3 style="font-size:var(--text-lg);margin:0 0 var(--space-2);color:var(--color-heading)">Nepal Financial Masterclasses</h3>
              <p style="font-size:var(--text-xs);line-height:1.6;color:var(--color-text-secondary);margin-bottom:var(--space-4)">
                A structured multi-tier curriculum spanning Personal Finance, NEPSE, Banking, Nepal Tax, Mutual Funds, and Digital Fintech Safety, complete with sequential reading paths and bilingual support.
              </p>
            </div>
            <a href="${ROUTES.LEARN}" class="card-link" style="font-size:var(--text-xs);font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:4px">
              Explore Learning Academy →
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- 6. Selected Publications & Educational Content (Explore My Work) -->
    <section class="section section-alt" id="aakash-work">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Research & Editorial</span>
          <h2>Selected Work & Publications</h2>
          <p style="max-width:640px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            Practical, research-backed financial guides and educational articles authored by Aakash Das on RisePaisa.
          </p>
        </div>

        <div class="grid-3 stagger-children">
          ${articles.map(a => `
            <article class="card article-card" id="aakash-pub-${a.id}" style="display:flex;flex-direction:column;justify-content:space-between">
              <div>
                ${a.thumbnail ? `<img src="${a.thumbnail}" alt="${a.title}" class="article-card-thumb" loading="lazy" decoding="async">` : ''}
                <div class="card-body">
                  <div class="card-badges" style="display:flex;align-items:center;gap:6px;margin-bottom:var(--space-2)">
                    <span class="badge badge-outline">${a.category}</span>
                    ${a.readTime ? `<span style="font-size:10px;color:var(--color-text-muted);background:var(--color-surface-subtle);padding:2px 6px;border-radius:var(--radius-sm)">${a.readTime}</span>` : ''}
                  </div>
                  <h3 style="margin-top:0;font-size:var(--text-base)"><a href="${ROUTES.BLOG_POST(a.slug)}" style="color:inherit;text-decoration:none">${a.title}</a></h3>
                  <p style="font-size:var(--text-xs);line-height:1.55;color:var(--color-text-secondary);margin-bottom:var(--space-3)">${a.excerpt}</p>
                </div>
              </div>
              <div class="card-body" style="padding-top:0;border-top:1px solid var(--color-border);margin-top:var(--space-2)">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;font-size:11px;color:var(--color-text-muted)">
                  <span>Published ${a.date}</span>
                  <a href="${ROUTES.BLOG_POST(a.slug)}" style="color:var(--color-primary-text, var(--color-primary));text-decoration:none;font-weight:600">Read Guide →</a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <div style="text-align:center;margin-top:var(--space-8)">
          <a href="${ROUTES.BLOG}" class="btn btn-secondary">Browse All RisePaisa Articles →</a>
        </div>
      </div>
    </section>

    <!-- 7. Skills & Areas of Expertise -->
    <section class="section" id="aakash-expertise-section">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Domains of Practice</span>
          <h2>Skills & Areas of Expertise</h2>
          <p style="max-width:620px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            Practical competencies spanning financial analysis, educational content strategy, and software engineering.
          </p>
        </div>

        <div class="skills-matrix-grid">

          <!-- Group 1: Financial Research -->
          <div class="skill-group-card">
            <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-2)">
              <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.trendingUp}</span>
              <h3 style="margin:0;font-size:var(--text-base)">Financial Research & Literacy</h3>
            </div>
            <p style="font-size:var(--text-xs);color:var(--color-text-secondary);line-height:1.55;margin:0">
              Domain expertise grounded in Nepal's statutory frameworks, banking ecosystem, and equity market.
            </p>
            <div class="skill-chips-wrap">
              <span class="skill-chip">Personal Cash Flow</span>
              <span class="skill-chip">NEPSE Equity Valuation</span>
              <span class="skill-chip">Nepal Income Tax Act 2058</span>
              <span class="skill-chip">Commercial Banking & Base Rates</span>
              <span class="skill-chip">Mutual Funds & SIP Planning</span>
              <span class="skill-chip">Inflation & Purchasing Power</span>
            </div>
          </div>

          <!-- Group 2: Content Strategy -->
          <div class="skill-group-card">
            <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-2)">
              <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.book}</span>
              <h3 style="margin:0;font-size:var(--text-base)">Content Strategy & Media</h3>
            </div>
            <p style="font-size:var(--text-xs);color:var(--color-text-secondary);line-height:1.55;margin:0">
              Translating complex statutory and quantitative concepts into clear, engaging educational media.
            </p>
            <div class="skill-chips-wrap">
              <span class="skill-chip">Educational Video Lessons</span>
              <span class="skill-chip">Research-Based Writing</span>
              <span class="skill-chip">Financial Infographics</span>
              <span class="skill-chip">Curriculum Architecture</span>
              <span class="skill-chip">Fact-Checking & Sourcing</span>
              <span class="skill-chip">Community Education</span>
            </div>
          </div>

          <!-- Group 3: Technology -->
          <div class="skill-group-card">
            <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-2)">
              <span style="display:inline-flex;width:24px;height:24px;color:var(--color-accent)">${ICONS.shield}</span>
              <h3 style="margin:0;font-size:var(--text-base)">Technology & Software Systems</h3>
            </div>
            <p style="font-size:var(--text-xs);color:var(--color-text-secondary);line-height:1.55;margin:0">
              Formal studies in Information Technology supporting algorithmic calculations and clean UI/UX.
            </p>
            <div class="skill-chips-wrap">
              <span class="skill-chip">Frontend Web Architecture</span>
              <span class="skill-chip">Financial Algorithms & Math</span>
              <span class="skill-chip">Design Systems (Apple-Inspired)</span>
              <span class="skill-chip">Responsive Web Layouts</span>
              <span class="skill-chip">Database Management</span>
              <span class="skill-chip">Technical SEO & Schema</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 8. Verified Audience & Impact -->
    <section class="section section-alt" id="aakash-impact-section">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Community & Impact</span>
          <h2>Audience & Educational Reach</h2>
          <p style="max-width:620px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            Serving the domestic Nepali population and global diaspora through verified financial education.
          </p>
        </div>

        <div class="impact-stats-grid">
          <div class="impact-stat-card">
            <span class="impact-stat-number">100K+</span>
            <span class="impact-stat-label">Social Community</span>
            <span class="impact-stat-sub">Combined across YouTube, TikTok & Instagram</span>
          </div>

          <div class="impact-stat-card">
            <span class="impact-stat-number">60+</span>
            <span class="impact-stat-label">Published Lessons</span>
            <span class="impact-stat-sub">Research-backed Nepal guides</span>
          </div>

          <div class="impact-stat-card">
            <span class="impact-stat-number">12</span>
            <span class="impact-stat-label">Financial Engines</span>
            <span class="impact-stat-sub">Bespoke mathematical tools</span>
          </div>

          <div class="impact-stat-card">
            <span class="impact-stat-number">100%</span>
            <span class="impact-stat-label">Free & Open</span>
            <span class="impact-stat-sub">Accessible public education</span>
          </div>
        </div>

        <div style="text-align:center;max-width:680px;margin:0 auto;font-size:var(--text-xs);color:var(--color-text-muted);line-height:1.6">
          <em>Transparency Note: Audience metrics represent combined followers across public social video channels (YouTube, TikTok, and Instagram). RisePaisa operates strictly as an educational publisher and does not provide commercial financial advisory or broker solicitation.</em>
        </div>
      </div>
    </section>

    <!-- 9. Official Profiles & Contact Channels -->
    <section class="section" id="aakash-contact-section">
      <div class="container container-narrow">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-8)">
          <span class="section-eyebrow">Connect & Engage</span>
          <h2>Official Profiles & Contact</h2>
          <p style="max-width:560px;margin:var(--space-2) auto 0;color:var(--color-text-secondary)">
            Direct verified channels for educational feedback, inquiries, and platform collaborations.
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:var(--space-4);max-width:800px;margin:0 auto var(--space-8)">
          ${aakashLinks.linkedin ? `
            <a href="${aakashLinks.linkedin}" target="_blank" rel="noopener noreferrer me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:34px;height:34px;border-radius:50%;background:var(--color-surface-subtle);align-items:center;justify-content:center;color:var(--color-primary-text, var(--color-primary));flex-shrink:0">${ICON_LINKEDIN}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">LinkedIn</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">Professional Network</span>
              </div>
            </a>
          ` : ''}
          <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
            <span style="display:inline-flex;width:34px;height:34px;border-radius:50%;background:var(--color-surface-subtle);align-items:center;justify-content:center;color:#e1306c;flex-shrink:0">${ICONS.instagram}</span>
            <div>
              <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">Instagram</strong>
              <span style="font-size:var(--text-xs);color:var(--color-text-muted)">@aakashdas_</span>
            </div>
          </a>
          ${aakashLinks.youtube ? `
            <a href="${aakashLinks.youtube}" target="_blank" rel="noopener noreferrer me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:34px;height:34px;border-radius:50%;background:var(--color-surface-subtle);align-items:center;justify-content:center;color:#ff0000;flex-shrink:0">${ICONS.youtube}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">YouTube</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">@me.aakashdas</span>
              </div>
            </a>
          ` : ''}
          ${aakashLinks.facebook ? `
            <a href="${aakashLinks.facebook}" target="_blank" rel="noopener noreferrer me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:34px;height:34px;border-radius:50%;background:var(--color-surface-subtle);align-items:center;justify-content:center;color:#1877f2;flex-shrink:0">${ICONS.facebook}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">Facebook</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">Community Updates</span>
              </div>
            </a>
          ` : ''}
          ${aakashLinks.twitter ? `
            <a href="${aakashLinks.twitter}" target="_blank" rel="noopener noreferrer me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:34px;height:34px;border-radius:50%;background:var(--color-surface-subtle);align-items:center;justify-content:center;color:var(--color-heading);flex-shrink:0">${ICONS.twitter}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">X (Twitter)</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">@meaakashdas</span>
              </div>
            </a>
          ` : ''}
          ${aakashLinks.tiktok ? `
            <a href="${aakashLinks.tiktok}" target="_blank" rel="noopener noreferrer me" class="card" style="padding:var(--space-4);display:flex;align-items:center;gap:var(--space-3);text-decoration:none;color:inherit;transition:all var(--transition-fast)">
              <span style="display:inline-flex;width:34px;height:34px;border-radius:50%;background:var(--color-surface-subtle);align-items:center;justify-content:center;color:var(--color-heading);flex-shrink:0">${ICONS.tiktok}</span>
              <div>
                <strong style="display:block;font-size:var(--text-sm);color:var(--color-heading)">TikTok</strong>
                <span style="font-size:var(--text-xs);color:var(--color-text-muted)">@aakashdas_</span>
              </div>
            </a>
          ` : ''}
        </div>

        <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
          <a
            href="https://wa.me/${getWhatsApp()}?text=${encodeURIComponent('Hi Aakash, I would like to connect regarding RisePaisa.')}"
            target="_blank"
            rel="noopener"
            class="btn btn-whatsapp"
            style="text-decoration:none"
          >
            ${ICONS.whatsapp} Direct Message on WhatsApp
          </a>
          <a
            href="${instagramUrl}"
            target="_blank"
            rel="noopener noreferrer me"
            class="btn btn-secondary"
            style="text-decoration:none"
          >
            ${ICONS.instagram} Follow on Instagram
          </a>
          <a href="${ROUTES.CONTACT}" class="btn btn-ghost" style="text-decoration:none">
            ${ICONS.mail} General Inquiries
          </a>
        </div>
      </div>
    </section>

    <!-- 10. Educational Disclaimer Notice -->
    <section class="section" id="aakash-disclaimer" style="padding-top:0;padding-bottom:var(--space-10)">
      <div class="container container-narrow">
        <div style="padding:var(--space-5);border-radius:var(--radius-lg);border:1px solid var(--color-border);background:var(--color-surface);font-size:var(--text-xs);color:var(--color-text-muted);line-height:1.6">
          <p style="margin:0">
            <strong>Educational Transparency Notice:</strong> All educational material, articles, videos, and calculators produced by Aakash Das through RisePaisa and RiseNepse are intended strictly for educational and informational purposes. Neither RisePaisa nor Aakash Das provides personalized financial advice, licensed securities brokerage, or portfolio management services. For details on research standards, verification, and corrections, please read our <a href="${ROUTES.EDITORIAL_POLICY || '/editorial-policy'}">Editorial Policy & Fact-Checking Standards</a> and <a href="${ROUTES.DISCLAIMER}">Full Disclaimer</a>.
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

  document.querySelectorAll('#aakash-hero, .timeline-item, .edu-card, .project-card, .skill-group-card, .impact-stat-card, .article-card').forEach(el => {
    el.classList.add('about-animate-target');
    observer.observe(el);
  });
}

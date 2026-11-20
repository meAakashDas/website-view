// ==============================================
// risePaisa - Resource Detail Page
// Refined Apple-Inspired Architecture & Layout
// ==============================================
import { getResourceBySlug } from '../data/resources.js';
import { getSettings } from '../data/settings.js';
import { ICONS, setPageMeta, initAccordions } from '../components.js';
import { ROUTES } from '../routes.js';
import { getLearnLanguage } from '../data/learn.js';
import {
  createBrandedVideoPlayer,
  initBrandedVideoPlayer
} from '../components/videoPlayer.js';
import {
  checkUserResourceAccess,
  verifyAndRedeemAccessCode
} from '../firebase/resources.js';
import { getCurrentUser } from '../firebase/auth.js';

function renderResourceDownloadButtons(resource) {
  const buttons = [];
  if (Array.isArray(resource.downloadableFiles) && resource.downloadableFiles.length > 0) {
    resource.downloadableFiles.forEach((file, idx) => {
      const title = file.title || `Download File ${idx + 1}`;
      const size = file.size ? ` (${file.size})` : '';
      buttons.push(`
        <a href="${file.url}" download="${title}" target="_blank" rel="noopener" class="btn btn-primary rp-download-btn" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:12px 16px;border-radius:var(--radius-md, 12px);font-size:14px;font-weight:600;text-decoration:none;background:var(--color-primary);color:#fff;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>${title}${size}</span>
        </a>
      `);
    });
  }
  if (resource.notionTemplateUrl) {
    buttons.push(`
      <a href="${resource.notionTemplateUrl}" target="_blank" rel="noopener" class="btn btn-primary rp-notion-btn" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:12px 16px;border-radius:var(--radius-md, 12px);font-size:14px;font-weight:600;text-decoration:none;background:#111;color:#fff;">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.387c-.466.046-.56.28-.373.466l1.822 1.355zm.84 3.034v13.017c0 .653.373 1.027 1.168.98l14.195-.84c.794-.047.934-.513.934-1.073V5.981c0-.56-.374-.886-.934-.84l-14.429.84c-.653.047-.934.373-.934.981zm13.447.887v10.873c0 .28-.187.373-.42.373-.234 0-.467-.14-.654-.373l-6.44-8.82v8.587c0 .327-.14.467-.467.467h-1.027c-.327 0-.467-.14-.467-.467V7.848c0-.28.187-.373.42-.373.28 0 .514.14.7.42l6.44 8.774V8.128c0-.327.14-.467.467-.467h1.028c.327 0 .42.14.42.468z"/></svg>
        <span>Duplicate to Notion Workspace &rarr;</span>
      </a>
    `);
  }
  if (buttons.length === 0) {
    buttons.push(`
      <a href="https://risepaisa.notion.site" target="_blank" rel="noopener" class="btn btn-primary rp-notion-btn" style="display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:12px 16px;border-radius:var(--radius-md, 12px);font-size:14px;font-weight:600;text-decoration:none;background:#111;color:#fff;">
        <span>Access Master System &rarr;</span>
      </a>
    `);
  }
  return buttons.join('');
}

function parseAudienceCards(resource) {
  if (!resource.targetAudience) return [];
  const points = (resource.targetAudience || '')
    .split(/,\s*(?:and\s+)?|;\s*/)
    .map(s => s.trim().replace(/^and\s+/i, ''))
    .filter(s => s.length > 0);

  const icons = {
    briefcase: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    laptop: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    cap: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    trend: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    home: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    wallet: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`
  };

  return points.map(point => {
    const lower = point.toLowerCase();
    if (lower.includes('salaried')) {
      return {
        icon: icons.briefcase,
        title: 'Salaried Professionals',
        desc: 'Seeking structured money management, fixed expense allocation, and automated salary tracking.'
      };
    }
    if (lower.includes('freelancer')) {
      return {
        icon: icons.laptop,
        title: 'Freelancers & Remote Workers',
        desc: 'Balancing irregular multi-currency income across eSewa, Khalti, and commercial bank accounts.'
      };
    }
    if (lower.includes('student')) {
      return {
        icon: icons.cap,
        title: 'Students & Early Earners',
        desc: 'Developing disciplined budgeting habits early and eliminating hidden everyday cash leaks.'
      };
    }
    if (lower.includes('investor') || lower.includes('nepse')) {
      return {
        icon: icons.trend,
        title: 'Retail NEPSE Investors',
        desc: 'Consolidating stock allotments, mutual fund SIPs, and real-time personal net worth growth.'
      };
    }
    if (lower.includes('fresh graduate')) {
      return {
        icon: icons.cap,
        title: 'Fresh Graduates',
        desc: 'Earning their first formal paycheck and establishing automated financial foundations.'
      };
    }
    if (lower.includes('young couple') || lower.includes('couples')) {
      return {
        icon: icons.home,
        title: 'Young Couples & Households',
        desc: 'Managing joint household budgets, room rent, festival travel, and shared future savings goals.'
      };
    }
    if (lower.includes('borrower') || lower.includes('emi')) {
      return {
        icon: icons.wallet,
        title: 'Bank Borrowers',
        desc: 'Tracking reducing-balance bank loan EMIs, interest savings, and accelerated debt payoff schedules.'
      };
    }
    if (lower.includes('famil')) {
      return {
        icon: icons.home,
        title: 'Families in Nepal',
        desc: 'Committed to building long-term financial security, festival funds, and 6-month emergency buffers.'
      };
    }
    return {
      icon: icons.wallet,
      title: point.charAt(0).toUpperCase() + point.slice(1).split(' ')[0] + ' ' + (point.split(' ')[1] || 'Learners'),
      desc: point.charAt(0).toUpperCase() + point.slice(1)
    };
  });
}

export function renderResourceDetailPage(slug, preferredLang = null) {
  const resource = getResourceBySlug(slug);
  if (!resource) {
    setPageMeta('Resource Not Found', '', ROUTES.RESOURCES);
    return `<div class="section"><div class="container" style="text-align:center"><h1>Resource Not Found</h1><p>Sorry, we couldn't find that resource.</p><a href="${ROUTES.RESOURCES}" class="btn btn-primary" style="margin-top:var(--space-6)">Browse Resources</a></div></div>`;
  }

  setPageMeta(resource.title, resource.shortDescription, ROUTES.RESOURCE_DETAIL(resource.slug));
  const lang = preferredLang || getLearnLanguage();
  const isEn = lang === 'en';
  const WHATSAPP_NUMBER = getSettings().whatsapp;
  const waLink = resource.whatsappUrl || `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I want to buy the ' + resource.title + '.')}`;
  const waAskLink = resource.contactUrl || `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I want to ask about the ' + resource.title + '.')}`;

  const thumbMap = {
    1: 'assets/images/resource-notion.png',
    2: 'assets/images/resource-budget.png',
  };
  const mainThumb = resource.thumbnail || resource.imageUrl || thumbMap[resource.id] || 'assets/images/resource-notion.png';

  // Calculate content stats
  const totalItems = resource.modulesCount || (resource.whatsIncluded ? resource.whatsIncluded.length : (resource.whatItContains ? resource.whatItContains.length : null));

  // Anchor price & discount calculation
  const hasOriginalPrice = resource.originalPrice && Number(resource.originalPrice) > Number(resource.price);
  const anchorPrice = hasOriginalPrice ? Number(resource.originalPrice) : null;
  const discountPercent = hasOriginalPrice ? Math.round(((resource.originalPrice - resource.price) / resource.originalPrice) * 100) : 0;
  const isFree = Number(resource.price) === 0 || resource.accessType === 'free';

  // Parse structured audience cards
  const audienceCards = parseAudienceCards(resource);

  // Parse fullDescription into paragraphs
  const descParagraphs = (resource.fullDescription || resource.shortDescription || '')
    .split('\n')
    .map(p => p.trim())
    .filter(Boolean);

  const creatorName = resource.creator || 'Aakash Das';

  return `
    <div class="cd-page resource-detail-page">
      <div class="cd-container container">
        <div class="cd-layout-grid cd-grid">

          <!-- ── LEFT COLUMN: Main Resource Content (~68%) ─────────────── -->
          <div class="cd-main-column cd-main">

            <!-- 1. Introductory Resource Information Block -->
            <div class="cd-intro-block" id="resource-intro-block">
              <!-- Compact Apple Breadcrumb Navigation -->
              <nav class="cd-breadcrumb" aria-label="Breadcrumb">
                <a href="${ROUTES.HOME}">Home</a>
                <span class="cd-sep">/</span>
                <a href="${ROUTES.RESOURCES}">Resources</a>
                <span class="cd-sep">/</span>
                <span class="cd-current">${resource.title}</span>
              </nav>

              <!-- Category Badge & Rating -->
              <div class="cd-hero-badge-wrap">
                <span class="cd-category-tag">${resource.category || 'Finance System'}</span>
                <span class="cd-hero-rating">
                  <span class="cd-star-icon" aria-hidden="true">★</span> 4.9 · Verified Finance System
                </span>
              </div>

              <!-- Resource Title -->
              <h1 class="cd-hero-title cd-course-title">${resource.title}</h1>

              <!-- Short Resource Description -->
              ${resource.shortDescription ? `<p class="cd-hero-subtitle cd-course-desc">${resource.shortDescription}</p>` : ''}

              <!-- Compact Creator Information -->
              <div class="cd-instructor-row">
                <div class="cd-instructor-avatar-wrap">
                  <img src="assets/images/aakash-das-founder-risepaisa.jpg" alt="${creatorName}, founder of RisePaisa" loading="lazy" decoding="async" width="40" height="40" class="cd-instructor-avatar" />
                </div>
                <div class="cd-instructor-text">
                  <span class="cd-inst-label">Created by</span>
                  <div class="cd-instructor-primary">
                    ${creatorName === 'Aakash Das' ? `<a href="${ROUTES.AAKASH_DAS}" class="cd-instructor-link">Aakash Das</a>` : `<strong>${creatorName}</strong>`}
                    <span class="cd-inst-role">· Founder of RisePaisa</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. Product Preview & Demonstration (Render only if video, image, or screenshots present) -->
            ${(resource.previewVideoUrl || resource.imageUrl || (resource.screenshots && resource.screenshots.length > 0)) ? `
            <section class="cd-section cd-demo-section" id="resource-preview">
              <div class="cd-demo-header">
                <div class="cd-demo-label-block">
                  <span class="cd-section-eyebrow">Product Preview</span>
                  <h2 class="cd-demo-title cd-section-heading">Interactive Walkthrough & Architecture</h2>
                </div>
              </div>

              ${resource.previewVideoUrl
                ? `
                  <div class="cd-video-wrap" id="resource-preview-container">
                    ${createBrandedVideoPlayer({
                      embedUrl: resource.previewVideoUrl,
                      title: `${resource.title} Preview`,
                      playerId: 'resource-preview-player',
                      containerId: 'resource-preview-iframe',
                      extraClass: 'cd-video-iframe'
                    })}
                  </div>
                `
                : (resource.imageUrl ? `
                  <div class="resource-preview-window" aria-label="${resource.title} live interface preview">
                    <div class="resource-window-bar">
                      <div class="resource-window-dots" aria-hidden="true">
                        <span class="window-dot dot-red"></span>
                        <span class="window-dot dot-yellow"></span>
                        <span class="window-dot dot-green"></span>
                      </div>
                      <div class="resource-window-title">${resource.title} — System Architecture & Dashboard</div>
                      <div class="resource-window-action">
                        <span class="resource-window-badge">Live System</span>
                      </div>
                    </div>
                    <div class="resource-window-viewport">
                      <img src="${resource.imageUrl}" alt="${resource.title} preview" loading="lazy" decoding="async">
                    </div>
                  </div>
                ` : '')
              }

              ${resource.screenshots && resource.screenshots.length > 0 ? `
              <div class="resource-screenshots-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:12px;margin-top:16px;">
                ${resource.screenshots.map(s => `
                  <div style="border-radius:var(--radius-md, 12px);overflow:hidden;border:1px solid var(--color-border);background:var(--color-surface);">
                    <img src="${s}" alt="${resource.title} screenshot" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;" />
                  </div>
                `).join('')}
              </div>
              ` : ''}

              <!-- Unified Specifications Meta Bar -->
              <div class="cd-meta-bar">
                ${totalItems ? `
                <div class="cd-meta-item">
                  <span class="cd-meta-icon" aria-hidden="true">${ICONS.bookOpen}</span>
                  <span>${totalItems} Modules Included</span>
                </div>
                ` : ''}
                <div class="cd-meta-item">
                  <span class="cd-meta-icon" aria-hidden="true">${ICONS.users}</span>
                  <span>All Skill Levels</span>
                </div>
                ${resource.setupTime ? `
                <div class="cd-meta-item">
                  <span class="cd-meta-icon" aria-hidden="true">${ICONS.clock}</span>
                  <span>${resource.setupTime}</span>
                </div>
                ` : ''}
              </div>
            </section>
            ` : ''}

            <!-- 3. Product Overview -->
            ${descParagraphs.length > 0 ? `
            <section class="cd-section" id="resource-description">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Overview</span>
                <h2 class="cd-section-title cd-section-heading">About This Resource</h2>
              </div>
              <div class="cd-about-text">
                ${descParagraphs.map(p => `<p>${p}</p>`).join('')}
              </div>
            </section>
            ` : ''}

            <!-- 4. Recommended Learning Sequence -->
            ${(resource.recommendedBeforeLesson || resource.recommendedAfterLesson) ? `
            <section class="cd-section" id="resource-learning-sequence">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">${isEn ? 'Practical Learning Pathway' : 'सिकाइ मार्ग'}</span>
                <h2 class="cd-section-title cd-section-heading">${isEn ? 'Recommended Learning Sequence' : 'सिफारिस गरिएको सिकाइ क्रम'}</h2>
                <p class="cd-section-lead">
                  ${isEn 
                    ? 'To maximize the practical value of this resource, follow this curated 3-step learning pathway:' 
                    : 'यो स्रोतको अधिकतम व्यावहारिक फाइदा लिन, तल दिइएको ३-चरणको सिकाइ मार्ग पछ्याउनुहोस्:'}
                </p>
              </div>
              <div class="cd-learning-sequence">
                ${resource.recommendedBeforeLesson ? `
                <div class="cd-seq-step">
                  <div class="cd-seq-badge cd-seq-badge-study">
                    ${isEn ? 'Step 1 · Study First' : 'चरण १ · पहिले अध्ययन गर्नुहोस्'}
                  </div>
                  <div class="cd-seq-content">
                    <div class="cd-seq-eyebrow">
                      ${isEn ? 'Prerequisite Curriculum Lesson' : 'पूर्वशर्त पाठ्यक्रम पाठ'}
                    </div>
                    <h3 class="cd-seq-title">
                      <a href="${ROUTES.LEARN_LESSON(resource.recommendedBeforeLesson.categorySlug, resource.recommendedBeforeLesson.slug)}">
                        ${(resource.recommendedBeforeLesson.title && (resource.recommendedBeforeLesson.title[lang] || resource.recommendedBeforeLesson.title.en)) || 'Prerequisite Lesson'} &rarr;
                      </a>
                    </h3>
                    <p class="cd-seq-desc">
                      ${(resource.recommendedBeforeLesson.why && (resource.recommendedBeforeLesson.why[lang] || resource.recommendedBeforeLesson.why.en)) || ''}
                    </p>
                  </div>
                </div>
                ` : ''}

                <div class="cd-seq-step cd-seq-step-active">
                  <div class="cd-seq-badge cd-seq-badge-active">
                    ${isEn ? 'Step 2 · Apply Here' : 'चरण २ · यहाँ लागू गर्नुहोस्'}
                  </div>
                  <div class="cd-seq-content">
                    <div class="cd-seq-eyebrow" style="color:var(--color-accent);font-weight:600;">
                      ${isEn ? 'Hands-On Execution System' : 'व्यावहारिक कार्यान्वयन प्रणाली'}
                    </div>
                    <h3 class="cd-seq-title" style="color:var(--color-heading);">
                      ${resource.title} (${resource.category || 'System'})
                    </h3>
                    <p class="cd-seq-desc">
                      ${isEn
                        ? `Deploy this structured template to record real income, track expense leakages, and automate month-end financial audits.`
                        : `आम्दानी, खर्च चुहावट र महिनाको अन्त्यमा कुल सम्पत्ति अडिट गर्न यो स्वचालित प्रणाली प्रयोग गर्नुहोस्।`}
                    </p>
                  </div>
                </div>

                ${resource.recommendedAfterLesson ? `
                <div class="cd-seq-step">
                  <div class="cd-seq-badge cd-seq-badge-study">
                    ${isEn ? 'Step 3 · Next Milestone' : 'चरण ३ · अर्को चरण'}
                  </div>
                  <div class="cd-seq-content">
                    <div class="cd-seq-eyebrow">
                      ${isEn ? 'Next Skill to Master' : 'सिक्नुपर्ने अर्को सीप'}
                    </div>
                    <h3 class="cd-seq-title">
                      <a href="${ROUTES.LEARN_LESSON(resource.recommendedAfterLesson.categorySlug, resource.recommendedAfterLesson.slug)}">
                        ${(resource.recommendedAfterLesson.title && (resource.recommendedAfterLesson.title[lang] || resource.recommendedAfterLesson.title.en)) || 'Next Milestone'} &rarr;
                      </a>
                    </h3>
                    <p class="cd-seq-desc">
                      ${(resource.recommendedAfterLesson.why && (resource.recommendedAfterLesson.why[lang] || resource.recommendedAfterLesson.why.en)) || ''}
                    </p>
                  </div>
                </div>
                ` : ''}
              </div>
            </section>
            ` : ''}

            <!-- 5. How to Use / Setup Workflow -->
            ${resource.howToUse && resource.howToUse.length > 0 ? `
            <section class="cd-section" id="resource-how-to-use">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Workflow & Deployment</span>
                <h2 class="cd-section-title cd-section-heading">How to Use This Resource</h2>
                <p class="cd-section-lead">Deploy this system into your routine in straightforward steps:</p>
              </div>
              <div class="cd-how-grid">
                ${resource.howToUse.map((step, idx) => {
                  const cleanTitle = (step.stepTitle || '').replace(/^\d+\.\s*/, '');
                  const stepNum = String(idx + 1).padStart(2, '0');
                  return `
                  <div class="cd-how-item">
                    <div class="cd-how-header">
                      <span class="cd-how-step-badge">${stepNum}</span>
                      <span class="cd-how-step-label">Step ${idx + 1}</span>
                    </div>
                    <div class="cd-how-body">
                      <strong class="cd-how-step-title">${cleanTitle}</strong>
                      <p class="cd-how-step-desc">${step.stepDesc || ''}</p>
                    </div>
                  </div>
                `;}).join('')}
              </div>
            </section>
            ` : ''}

            <!-- 6. Who Is This For? -->
            ${audienceCards.length > 0 ? `
            <section class="cd-section" id="resource-audience">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Audience</span>
                <h2 class="cd-section-title cd-section-heading">Who Is This For?</h2>
                <p class="cd-section-lead">Engineered specifically for individuals navigating personal finance in Nepal:</p>
              </div>
              <div class="cd-audience-grid">
                ${audienceCards.map(item => `
                  <div class="cd-audience-card">
                    <div class="cd-audience-icon-wrap" aria-hidden="true">
                      ${item.icon}
                    </div>
                    <div class="cd-audience-body">
                      <h4 class="cd-audience-title">${item.title}</h4>
                      <p class="cd-audience-desc">${item.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>
            ` : ''}

            <!-- 7. What You'll Learn -->
            ${resource.whatYouLearn && resource.whatYouLearn.length > 0 ? `
            <section class="cd-section" id="resource-outcomes">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Outcomes</span>
                <h2 class="cd-section-title cd-section-heading">What You'll Learn & Master</h2>
              </div>
              <div class="cd-learn-grid">
                ${resource.whatYouLearn.map(item => `
                  <div class="cd-learn-item">
                    <span class="cd-bullet-dot" aria-hidden="true"></span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </section>
            ` : ''}

            <!-- 8. What's Included -->
            ${resource.whatsIncluded && resource.whatsIncluded.length > 0 ? `
            <section class="cd-section" id="resource-content">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Package Contents</span>
                <h2 class="cd-section-title cd-section-heading">What's Included</h2>
                <p class="cd-curriculum-summary">${resource.whatsIncluded.length} items · Instant digital delivery</p>
              </div>
              <div class="cd-accordion">
                <div class="accordion-item active">
                  <button class="accordion-header" type="button" aria-expanded="true">
                    <div class="cd-acc-left">
                      <span class="cd-acc-title">Included in this resource</span>
                      <span class="cd-acc-meta">${resource.whatsIncluded.length} modules</span>
                    </div>
                    <span class="chevron" aria-hidden="true">${ICONS.chevronDown}</span>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-body">
                      <ul class="cd-included-items-list">
                        ${resource.whatsIncluded.map(item => `
                          <li class="cd-included-item">
                            <span class="cd-check-bullet" aria-hidden="true">
                              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                            </span>
                            <span>${item}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            ` : ''}

            <!-- 9. Recommended Companion Tools -->
            ${resource.companionTools && resource.companionTools.length > 0 ? `
            <section class="cd-section" id="resource-companion-tools">
              <div class="cd-section-header">
                <span class="cd-section-eyebrow">Synergy</span>
                <h2 class="cd-section-title cd-section-heading">Recommended Companion Tools</h2>
                <p class="cd-section-lead">Combine this operating system with complementary RisePaisa educational guides and calculators:</p>
              </div>
              <div class="companion-tools-grid">
                ${resource.companionTools.map(tool => `
                  <a href="${tool.url}" class="companion-tool-card">
                    <span class="companion-tool-badge">${tool.type}</span>
                    <h4 class="companion-tool-title">${tool.title}</h4>
                    <p class="companion-tool-desc">${tool.desc}</p>
                    <div class="companion-tool-footer">
                      <span class="companion-tool-cta">Explore Tool</span>
                      <span class="calc-arrow-btn" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </span>
                    </div>
                  </a>
                `).join('')}
              </div>
            </section>
            ` : ''}

          </div>

          <!-- ── RIGHT COLUMN: Sticky Purchase Card (~32%) ─────────────── -->
          <aside class="cd-sidebar-column cd-sidebar">
            <div class="cd-purchase-card cd-pricing-card" id="resource-pricing-card">
              <div class="cd-card-thumb-container">
                <img src="${mainThumb}" alt="${resource.title}" class="cd-card-thumb-img cd-pricing-thumb" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='assets/images/resource-notion.png';">
              </div>

              <div class="cd-card-price-section cd-price-block">
                <div class="cd-card-price-label">Lifetime Resource Access</div>
                <div class="cd-card-price-row cd-price-row">
                  ${hasOriginalPrice ? `<span class="cd-price-anchor">NPR ${anchorPrice.toLocaleString()}</span>` : ''}
                  ${isFree ? `
                    <span class="cd-card-price-number cd-price-current" style="color:var(--color-success,#16a34a)">FREE</span>
                  ` : `
                    <span class="cd-card-price-number cd-price-current"><span class="cd-card-currency cd-price-currency">NPR </span>${Number(resource.price).toLocaleString()}</span>
                  `}
                  ${hasOriginalPrice ? `<span class="cd-discount-badge">${discountPercent}% OFF</span>` : ''}
                </div>
                <div class="cd-card-price-sub">${isFree ? 'Free digital download' : 'One-time payment · Instant digital delivery'}</div>
              </div>

              <div class="cd-price-labels">
                <span class="cd-label-item">Instant delivery</span>
                <span class="cd-label-item">Lifetime access</span>
                <span class="cd-label-item">Mobile + Desktop</span>
                <span class="cd-label-item">Free updates</span>
              </div>

              ${!isFree ? `
              <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp cd-primary-buy-cta cd-cta-primary" id="buy-whatsapp-btn">
                <span class="cd-cta-whatsapp-icon">${ICONS.whatsapp}</span>
                <span class="cd-cta-whatsapp-text">Buy Now via WhatsApp</span>
              </a>
              <a href="${waAskLink}" target="_blank" rel="noopener" class="btn btn-ghost cd-secondary-ask-cta cd-cta-secondary" id="ask-question-btn">
                <span class="cd-cta-ask-icon">${ICONS.mail}</span>
                <span>Ask a Question</span>
              </a>
              ` : ''}

              <!-- Access Code Unlock / Download Area -->
              <div class="cd-access-unlock-box" id="resource-access-unlock-box" style="margin: 16px 0;">
                ${isFree ? `
                  <div class="rp-access-card rp-access-unlocked" style="background:var(--color-surface, #fff);border:1px solid var(--color-success, #16a34a);border-radius:var(--radius-lg, 16px);padding:18px;box-shadow:0 4px 16px rgba(22,163,74,0.08);">
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;color:var(--color-success,#16a34a);font-weight:600;font-size:14px;">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>Free Resource · Direct Download</span>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:10px;">
                      ${renderResourceDownloadButtons(resource)}
                    </div>
                  </div>
                ` : `
                  <div class="rp-access-card rp-access-locked" id="rp-access-locked-panel" style="background:var(--color-surface, #fff);border:1px solid var(--color-border);border-radius:var(--radius-lg, 16px);padding:18px;box-shadow:0 4px 16px rgba(0,0,0,0.04);">
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;color:var(--color-heading);font-weight:600;font-size:14px;">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      <span>Already purchased?</span>
                    </div>
                    <p style="font-size:12px;color:var(--color-text-secondary);margin-bottom:12px;line-height:1.4;">Enter your access code below to unlock your download.</p>
                    <div style="display:flex;gap:8px;margin-bottom:8px;">
                      <input type="text" id="rp-access-code-input" placeholder="RISE-XXXX-XXXX" maxlength="19" autocomplete="off" spellcheck="false" style="flex:1;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-md, 8px);font-family:monospace;font-size:13px;font-weight:600;text-transform:uppercase;background:var(--color-bg);color:var(--color-text);" />
                      <button type="button" id="rp-unlock-btn" class="btn btn-primary btn-sm" style="padding:10px 16px;border-radius:var(--radius-md, 8px);font-weight:600;white-space:nowrap;">Unlock</button>
                    </div>
                    <div id="rp-access-feedback" style="font-size:12px;min-height:16px;line-height:1.3;"></div>
                  </div>
                `}
              </div>

              <!-- Single Consolidated Non-Redundant Benefit List -->
              <div class="cd-clean-benefits-list">
                <div class="cd-feature-item">
                  <span class="cd-check-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Instant digital access upon checkout</span>
                </div>
                <div class="cd-feature-item">
                  <span class="cd-check-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Full lifetime access with free version updates</span>
                </div>
                <div class="cd-feature-item">
                  <span class="cd-check-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Optimized for iOS, Android, Mac & Windows</span>
                </div>
                <div class="cd-feature-item">
                  <span class="cd-check-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>One-time investment · Zero recurring subscriptions</span>
                </div>
                <div class="cd-feature-item">
                  <span class="cd-check-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Direct WhatsApp onboarding support from creator</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>

    <!-- Mobile Sticky CTA Bar (Fades in when in-flow card scrolled out) -->
    <div class="cd-mobile-sticky-bar cd-mobile-cta" id="resource-mobile-cta" aria-label="Mobile Resource Purchase Bar">
      <div class="cd-mobile-sticky-inner cd-mobile-cta-inner">
        <div class="cd-mobile-sticky-price cd-mobile-price">
          ${hasOriginalPrice ? `<span class="cd-sticky-price-label cd-mobile-anchor">NPR ${anchorPrice.toLocaleString()}</span>` : ''}
          ${isFree ? `
            <span class="cd-sticky-price-val cd-mobile-current" style="color:var(--color-success,#16a34a)">FREE</span>
          ` : `
            <span class="cd-sticky-price-val cd-mobile-current">NPR ${Number(resource.price).toLocaleString()}</span>
          `}
        </div>
        ${!isFree ? `
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp cd-sticky-buy-btn cd-mobile-buy" id="mobile-bar-whatsapp-btn">
          ${ICONS.whatsapp} Buy via WhatsApp
        </a>
        ` : `
        <a href="#resource-access-unlock-box" class="btn btn-primary cd-sticky-buy-btn cd-mobile-buy" style="border-radius:9999px;">
          Download Free
        </a>
        `}
      </div>
    </div>
  `;
}

export function initResourceDetailPage(slugFromRouter = '') {
  initAccordions();

  // Resolve target resource
  const cleanSlug = slugFromRouter || (typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean).pop() : '');
  const resource = getResourceBySlug(cleanSlug);

  // Initialize Video.js custom video player if element present
  const playerEl = document.getElementById('resource-preview-player');
  if (playerEl) {
    initBrandedVideoPlayer(playerEl).catch(() => {});
  }

  // Mobile sticky CTA bar
  const mobileBar = document.getElementById('resource-mobile-cta');
  const purchaseCard = document.getElementById('resource-pricing-card');
  let updateMobileBar = null;
  let cardObserver = null;

  if (mobileBar && purchaseCard) {
    let isCurrentlyShown = false;
    let isCardInView = true;

    const syncVisibility = () => {
      if (window.innerWidth >= 1024) {
        if (isCurrentlyShown) {
          isCurrentlyShown = false;
          mobileBar.classList.remove('visible');
          document.body.classList.remove('has-mobile-cta');
        }
        return;
      }
      const scrollY = window.scrollY || window.pageYOffset;
      const shouldShow = !isCardInView && scrollY > 200;
      if (shouldShow !== isCurrentlyShown) {
        isCurrentlyShown = shouldShow;
        mobileBar.classList.toggle('visible', shouldShow);
        document.body.classList.toggle('has-mobile-cta', shouldShow);
      }
    };

    if (typeof IntersectionObserver !== 'undefined') {
      cardObserver = new IntersectionObserver((entries) => {
        isCardInView = Boolean(entries[0]?.isIntersecting);
        syncVisibility();
      }, {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0
      });
      cardObserver.observe(purchaseCard);
    }

    let ticking = false;
    updateMobileBar = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          syncVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateMobileBar, { passive: true });
    window.addEventListener('resize', updateMobileBar, { passive: true });
    syncVisibility();
  }

  // Wire Access Code and Download Unlocking
  const accessBox = document.getElementById('resource-access-unlock-box');
  if (accessBox && resource) {
    const isFree = Number(resource.price) === 0 || resource.accessType === 'free';

    const renderUnlockedState = () => {
      accessBox.innerHTML = `
        <div class="rp-access-card rp-access-unlocked" style="background:var(--color-surface, #fff);border:1px solid var(--color-success, #16a34a);border-radius:var(--radius-lg, 16px);padding:18px;box-shadow:0 4px 16px rgba(22,163,74,0.08);animation:fadeInUp 0.3s ease;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;color:var(--color-success,#16a34a);font-weight:600;font-size:14px;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>Access Unlocked · Ready to Download</span>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${renderResourceDownloadButtons(resource)}
          </div>
        </div>
      `;
    };

    if (isFree) {
      renderUnlockedState();
    } else {
      // Check stored access (localStorage token or Firestore user record)
      const user = getCurrentUser ? getCurrentUser() : null;
      checkUserResourceAccess(user ? user.uid : null, resource.slug).then(res => {
        if (res.hasAccess) {
          renderUnlockedState();
        }
      }).catch(() => {});

      const unlockBtn = document.getElementById('rp-unlock-btn');
      const inputEl = document.getElementById('rp-access-code-input');
      const feedbackEl = document.getElementById('rp-access-feedback');

      const handleRedeem = async () => {
        if (!inputEl) return;
        const code = inputEl.value.trim().toUpperCase();
        if (!code) {
          if (feedbackEl) {
            feedbackEl.textContent = 'Please enter your access code.';
            feedbackEl.style.color = 'var(--color-danger, #ef4444)';
          }
          return;
        }

        if (unlockBtn) {
          unlockBtn.disabled = true;
          unlockBtn.textContent = 'Verifying...';
        }
        if (feedbackEl) {
          feedbackEl.textContent = 'Verifying access code...';
          feedbackEl.style.color = 'var(--color-text-secondary)';
        }

        try {
          const currentUser = getCurrentUser ? getCurrentUser() : null;
          const result = await verifyAndRedeemAccessCode(code, resource.slug, {
            userUid: currentUser ? currentUser.uid : null
          });

          if (result.success) {
            if (feedbackEl) {
              feedbackEl.textContent = result.message || 'Access granted! Unlocking download...';
              feedbackEl.style.color = 'var(--color-success, #16a34a)';
            }
            setTimeout(() => {
              renderUnlockedState();
            }, 500);
          } else {
            if (feedbackEl) {
              feedbackEl.textContent = result.message || 'Invalid or exhausted access code.';
              feedbackEl.style.color = 'var(--color-danger, #ef4444)';
            }
          }
        } catch (err) {
          if (feedbackEl) {
            feedbackEl.textContent = err.message || 'Verification failed. Please try again.';
            feedbackEl.style.color = 'var(--color-danger, #ef4444)';
          }
        } finally {
          if (unlockBtn) {
            unlockBtn.disabled = false;
            unlockBtn.textContent = 'Unlock';
          }
        }
      };

      if (unlockBtn) {
        unlockBtn.addEventListener('click', handleRedeem);
      }
      if (inputEl) {
        inputEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleRedeem();
          }
        });
        inputEl.addEventListener('input', () => {
          inputEl.value = inputEl.value.toUpperCase();
          if (feedbackEl) feedbackEl.textContent = '';
        });
      }
    }
  }

  return () => {
    if (cardObserver) {
      cardObserver.disconnect();
      cardObserver = null;
    }
    if (updateMobileBar) {
      window.removeEventListener('scroll', updateMobileBar);
      window.removeEventListener('resize', updateMobileBar);
    }
    document.body.classList.remove('has-mobile-cta');
  };
}


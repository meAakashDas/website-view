// ==============================================
// risePaisa - Resource Detail Page (Clone of Course Detail)
// ==============================================
import { getResourceBySlug } from '../data/resources.js';
import { getSettings } from '../data/settings.js';
import { ICONS, setPageMeta, initAccordions } from '../components.js';
import { ROUTES } from '../routes.js';
import { getLearnLanguage } from '../data/learn.js';
import { createBrandedVideoPlayer, initBrandedVideoPlayer } from '../components/videoPlayer.js';

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
  const waLink    = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I want to buy the ' + resource.title + '.')}`;
  const waAskLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I want to ask about the ' + resource.title + '.')}`;

  const thumbMap = {
    1: 'assets/images/resource-notion.png',
    2: 'assets/images/resource-budget.png',
  };

  // Calculate content stats
  const totalItems = resource.whatsIncluded.length;
  const totalLearnItems = resource.whatYouLearn.length;

  // Anchor price (original price before discount)
  const anchorPrice = Math.round(resource.price * 2);

  // Parse target audience into bullet points
  const audiencePoints = resource.targetAudience
    .split(/,\s*(?:and\s+)?|;\s*/)
    .map(s => s.trim().replace(/^and\s+/i, ''))
    .filter(s => s.length > 0);

  // Parse fullDescription into paragraphs
  const descParagraphs = resource.fullDescription.split('\n').filter(p => p.trim());

  return `
    <!-- Hero -->
    <header class="cd-hero" id="resource-hero">
      <div class="container">
        <nav class="cd-breadcrumb" aria-label="Breadcrumb">
          <a href="${ROUTES.HOME}">Home</a><span class="cd-sep">/</span>
          <a href="${ROUTES.RESOURCES}">Resources</a><span class="cd-sep">/</span>
          <span class="cd-current">${resource.title}</span>
        </nav>
        <div class="cd-hero-badge-wrap">
          <span class="cd-category-tag">${resource.category}</span>
          <span class="cd-hero-rating">
            <span class="cd-star-icon">★</span> 4.9 · Verified Finance System
          </span>
        </div>
        <h1 class="cd-hero-title cd-title">${resource.title}</h1>
        <p class="cd-hero-subtitle">${resource.shortDescription}</p>
        <div class="cd-hero-instructor cd-instructor">
          <div class="cd-avatar-ring cd-avatar"><img src="assets/images/aakash-das-founder-risepaisa.jpg" alt="${resource.creator}, founder of RisePaisa" loading="lazy" decoding="async" width="40" height="40" style="width:40px;height:40px;border-radius:var(--radius-full);object-fit:cover" /></div>
          <div class="cd-instructor-text">
            <span class="cd-inst-label">Created by</span>
            <div class="cd-instructor-primary">
              ${resource.creator === 'Aakash Das' ? `<a href="${ROUTES.AAKASH_DAS}" class="cd-instructor-link">Aakash Das</a>` : `<strong>${resource.creator}</strong>`}
              <span class="cd-inst-role">· Founder of RisePaisa</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Body -->
    <div class="cd-body">
      <div class="container">
        <div class="cd-layout-grid cd-grid">
          <!-- LEFT: Main Content -->
          <div class="cd-main-column cd-main">

            <!-- Preview -->
            <section class="cd-section" id="resource-preview">
              <h2 class="cd-section-title cd-section-heading">Preview</h2>
                ${resource.previewVideoUrl
                  ? createBrandedVideoPlayer({
                      embedUrl: resource.previewVideoUrl,
                      title: `${resource.title} Preview`,
                      iframeId: 'resource-preview-iframe',
                      extraClass: 'cd-video-wrap'
                    })
                  : `<div class="cd-resource-preview-banner" style="background:linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-secondary, #f8fafc) 100%);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:var(--space-8);text-align:center;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.04);margin-bottom:var(--space-6);">
                      <div style="font-size:36px;margin-bottom:var(--space-3);">${resource.format === 'Notion' ? '📝' : '📊'}</div>
                      <div style="font-weight:700;font-size:var(--text-lg);color:var(--color-heading);margin-bottom:var(--space-2);">${resource.title} - Digital Architecture</div>
                      <p style="color:var(--color-text-secondary);font-size:var(--text-sm);max-width:540px;margin:0 auto var(--space-6);line-height:1.6;">
                        ${resource.description}
                      </p>
                      <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);justify-content:center;margin-bottom:var(--space-4);">
                        ${(resource.whatItContains || []).map(item => `
                          <span style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:9999px;font-size:var(--text-xs);font-weight:600;color:var(--color-text);">
                            <span style="color:var(--color-primary);">${ICONS.checkCircle}</span>
                            ${item}
                          </span>
                        `).join('')}
                      </div>
                      <div style="display:inline-flex;align-items:center;gap:8px;font-size:var(--text-xs);color:var(--color-text-tertiary);background:rgba(0,0,0,0.03);padding:6px 16px;border-radius:9999px;">
                        <span>${ICONS.clock}</span>
                        <span>${resource.setupTime ? `Quick setup in ${resource.setupTime}` : 'Instant 1-click duplicate'}</span>
                      </div>
                    </div>`
                }
              ${resource.imageUrl ? `
              <div class="cd-image-preview">
                <img src="${resource.imageUrl}" alt="${resource.title} preview" loading="lazy" decoding="async">
              </div>
              ` : ''}
              <div class="cd-meta-bar">
                <div class="cd-meta-item">
                  <span class="cd-meta-icon" aria-hidden="true">${ICONS.bookOpen}</span>
                  <span>${totalItems} items included</span>
                </div>
                <div class="cd-meta-item">
                  <span class="cd-meta-icon" aria-hidden="true">${ICONS.users}</span>
                  <span>Beginner</span>
                </div>
                ${resource.setupTime ? `
                <div class="cd-meta-item">
                  <span class="cd-meta-icon" aria-hidden="true">${ICONS.clock}</span>
                  <span>${resource.setupTime}</span>
                </div>
                ` : ''}
              </div>
            </section>

            <!-- About -->
            <section class="cd-section" id="resource-description">
              <h2 class="cd-section-title cd-section-heading">About This Resource</h2>
              <div class="cd-about-text">
                ${descParagraphs.map(p => `<p>${p.trim()}</p>`).join('')}
              </div>
            </section>

            <!-- Recommended Learning Sequence & Practical Framework -->
            ${(resource.recommendedBeforeLesson || resource.recommendedAfterLesson) ? `
            <section class="cd-section" id="resource-learning-sequence">
              <h2 class="cd-section-title cd-section-heading">${isEn ? 'Recommended Learning Sequence' : 'सिफारिस गरिएको सिकाइ क्रम'}</h2>
              <p class="cd-section-lead" style="margin-bottom:var(--space-4);">
                ${isEn 
                  ? 'To maximize the practical value of this resource, follow this curated 3-step learning pathway:' 
                  : 'यो स्रोतको अधिकतम व्यावहारिक फाइदा लिन, तल दिइएको ३-चरणको सिकाइ मार्ग पछ्याउनुहोस्:'}
              </p>
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
                        ${resource.recommendedBeforeLesson.title[lang] || resource.recommendedBeforeLesson.title.en} &rarr;
                      </a>
                    </h3>
                    <p class="cd-seq-desc">
                      ${resource.recommendedBeforeLesson.why[lang] || resource.recommendedBeforeLesson.why.en}
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
                      ${resource.title} (${resource.category})
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
                        ${resource.recommendedAfterLesson.title[lang] || resource.recommendedAfterLesson.title.en} &rarr;
                      </a>
                    </h3>
                    <p class="cd-seq-desc">
                      ${resource.recommendedAfterLesson.why[lang] || resource.recommendedAfterLesson.why.en}
                    </p>
                  </div>
                </div>
                ` : ''}
              </div>
            </section>
            ` : ''}

            <!-- What You'll Learn -->
            <section class="cd-section" id="resource-outcomes">
              <h2 class="cd-section-title cd-section-heading">What You'll Learn</h2>
              <div class="cd-learn-grid">
                ${resource.whatYouLearn.map(item => `
                  <div class="cd-learn-item">
                    <span class="cd-bullet-dot" aria-hidden="true"></span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- What's Included (single section, no modules) -->
            <section class="cd-section" id="resource-content">
              <h2 class="cd-section-title cd-section-heading">What's Included</h2>
              <p class="cd-curriculum-summary">${totalItems} items · Instant digital delivery</p>
              <div class="cd-accordion">
                <div class="accordion-item active">
                  <button class="accordion-header" type="button" aria-expanded="true">
                    <div class="cd-acc-left">
                      <span class="cd-acc-title">Included in this resource</span>
                      <span class="cd-acc-meta">${totalItems} items</span>
                    </div>
                    <span class="chevron" aria-hidden="true">${ICONS.chevronDown}</span>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-body">
                      <ul class="cd-included-items-list">
                        ${resource.whatsIncluded.map(item => `
                          <li class="cd-included-item">
                            <span class="cd-check-bullet" aria-hidden="true">${ICONS.check || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`}</span>
                            <span>${item}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- How to Use / Setup Workflow -->
            ${resource.howToUse && resource.howToUse.length > 0 ? `
            <section class="cd-section" id="resource-how-to-use">
              <h2 class="cd-section-title cd-section-heading">How to Use This Resource</h2>
              <div class="cd-how-grid">
                ${resource.howToUse.map((step, idx) => `
                  <div class="cd-how-item">
                    <span class="cd-how-step-badge">Step ${idx + 1}</span>
                    <div class="cd-how-body">
                      <strong class="cd-how-step-title">${step.stepTitle}</strong>
                      <span class="cd-how-step-desc">${step.stepDesc}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>
            ` : ''}

            <!-- Who Is This For -->
            <section class="cd-section" id="resource-audience">
              <h2 class="cd-section-title cd-section-heading">Who Is This For?</h2>
              <div class="cd-audience-grid">
                ${audiencePoints.map(point => `
                  <div class="cd-audience-card">
                    <div class="cd-audience-icon-wrap" aria-hidden="true">
                      ${ICONS.users}
                    </div>
                    <div class="cd-audience-body">
                      <p class="cd-audience-desc">${point.charAt(0).toUpperCase() + point.slice(1)}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- Recommended Companion Tools -->
            ${resource.companionTools && resource.companionTools.length > 0 ? `
            <section class="cd-section" id="resource-companion-tools">
              <h2 class="cd-section-title cd-section-heading">Recommended Companion Tools</h2>
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

          <!-- RIGHT: Sticky Pricing Card -->
          <aside class="cd-sidebar-column cd-sidebar">
            <div class="cd-purchase-card cd-pricing-card" id="resource-pricing-card">
              <div class="cd-card-thumb-container">
                <img src="${thumbMap[resource.id] || thumbMap[1]}" alt="${resource.title}" class="cd-card-thumb-img cd-pricing-thumb" loading="lazy" decoding="async">
              </div>

              <div class="cd-card-price-section cd-price-block">
                <div class="cd-card-price-label">Lifetime Resource Access</div>
                <div class="cd-card-price-row cd-price-row">
                  <span class="cd-price-anchor">NPR ${anchorPrice.toLocaleString()}</span>
                  <span class="cd-card-price-number cd-price-current"><span class="cd-card-currency cd-price-currency">NPR </span>${resource.price.toLocaleString()}</span>
                  <span class="cd-discount-badge">50% OFF</span>
                </div>
                <div class="cd-card-price-sub">One-time payment · Instant digital delivery</div>
              </div>

              <div class="cd-price-labels">
                <span class="cd-label-item">Instant delivery</span>
                <span class="cd-label-item">Lifetime access</span>
                <span class="cd-label-item">Mobile + Desktop</span>
                <span class="cd-label-item">Free updates</span>
              </div>

              <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp cd-primary-buy-cta cd-cta-primary" id="buy-whatsapp-btn">
                <span class="cd-cta-whatsapp-icon">${ICONS.whatsapp}</span>
                <span class="cd-cta-whatsapp-text">Buy Now via WhatsApp</span>
              </a>
              <a href="${waAskLink}" target="_blank" rel="noopener" class="btn btn-ghost cd-secondary-ask-cta cd-cta-secondary" id="ask-question-btn">
                <span class="cd-cta-ask-icon">${ICONS.mail}</span>
                <span>Ask a Question</span>
              </a>

              <div class="cd-trust-signals">
                <div class="cd-trust-item">
                  <span class="cd-trust-dot"></span>
                  <span>One-time payment · No subscription</span>
                </div>
                <div class="cd-trust-item">
                  <span class="cd-trust-dot"></span>
                  <span>Instant access via private link</span>
                </div>
                <div class="cd-trust-item">
                  <span class="cd-trust-dot"></span>
                  <span>No prior experience needed</span>
                </div>
              </div>

              <div class="cd-features-list">
                <div class="cd-feature-item">
                  <span class="cd-bullet-dot"></span>
                  <span>Full lifetime access</span>
                </div>
                <div class="cd-feature-item">
                  <span class="cd-bullet-dot"></span>
                  <span>Access on mobile and desktop</span>
                </div>
                <div class="cd-feature-item">
                  <span class="cd-bullet-dot"></span>
                  <span>Free future updates</span>
                </div>
                <div class="cd-feature-item">
                  <span class="cd-bullet-dot"></span>
                  <span>Direct support from creator</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>

    <!-- Mobile Sticky CTA -->
    <div class="cd-mobile-sticky-bar cd-mobile-cta" id="resource-mobile-cta" aria-label="Mobile Resource Purchase Bar">
      <div class="cd-mobile-sticky-inner cd-mobile-cta-inner">
        <div class="cd-mobile-sticky-price cd-mobile-price">
          <span class="cd-sticky-price-label cd-mobile-anchor">NPR ${anchorPrice.toLocaleString()}</span>
          <span class="cd-sticky-price-val cd-mobile-current">NPR ${resource.price.toLocaleString()}</span>
        </div>
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp cd-sticky-buy-btn cd-mobile-buy" id="mobile-bar-whatsapp-btn">
          ${ICONS.whatsapp} Buy via WhatsApp
        </a>
      </div>
    </div>
  `;
}

export function initResourceDetailPage() {
  initAccordions();

  const previewPlayerEl = document.querySelector('#resource-preview [data-rp-player]');
  const previewPlayerController = previewPlayerEl ? initBrandedVideoPlayer(previewPlayerEl) : null;

  // Mobile sticky CTA bar: Appear on mobile (< 1024px) when scrolled past purchase card
  const mobileBar = document.getElementById('resource-mobile-cta');
  const purchaseCard = document.getElementById('resource-pricing-card');
  let updateMobileBar = null;

  if (mobileBar && purchaseCard) {
    let isCurrentlyShown = false;
    let ticking = false;

    const computeVisibility = () => {
      if (window.innerWidth >= 1024) {
        if (isCurrentlyShown) {
          isCurrentlyShown = false;
          mobileBar.classList.remove('visible');
          document.body.classList.remove('has-mobile-cta');
        }
        return;
      }
      const rect = purchaseCard.getBoundingClientRect();
      const hasPassed = rect.bottom < 40;
      if (hasPassed !== isCurrentlyShown) {
        isCurrentlyShown = hasPassed;
        mobileBar.classList.toggle('visible', hasPassed);
        document.body.classList.toggle('has-mobile-cta', hasPassed);
      }
    };

    updateMobileBar = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          computeVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateMobileBar, { passive: true });
    window.addEventListener('resize', updateMobileBar, { passive: true });
    computeVisibility();
  }

  return () => {
    if (previewPlayerController) {
      previewPlayerController.destroy();
    }
    if (updateMobileBar) {
      window.removeEventListener('scroll', updateMobileBar);
      window.removeEventListener('resize', updateMobileBar);
    }
    document.body.classList.remove('has-mobile-cta');
  };
}



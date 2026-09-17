// ==============================================
// risePaisa - Resource Detail Page (Clone of Course Detail)
// ==============================================
import { getResourceBySlug } from '../data/resources.js';
import { getSettings } from '../data/settings.js';
import { ICONS, setPageMeta, initAccordions } from '../components.js';
import { ROUTES } from '../routes.js';
import { getLearnLanguage } from '../data/learn.js';

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
    <div class="cd-hero" id="resource-hero">
      <div class="container">
        <div class="cd-breadcrumb">
          <a href="${ROUTES.HOME}">Home</a><span class="cd-sep">/</span>
          <a href="${ROUTES.RESOURCES}">Resources</a><span class="cd-sep">/</span>
          <span>${resource.title}</span>
        </div>
        <h1 class="cd-title">${resource.title}</h1>
        <div class="cd-instructor">
          <div class="cd-avatar"><img src="assets/images/founder.png" alt="Aakash Das" loading="lazy" decoding="async" /></div>
          <span>Creator: <strong>${resource.creator}</strong></span>
        </div>
        <span class="cd-category-tag">${resource.category}</span>
      </div>
    </div>

    <!-- Body -->
    <div class="cd-body">
      <div class="container">
        <div class="cd-grid">
          <!-- LEFT: Main Content -->
          <div class="cd-main">

            <!-- Preview -->
            <section class="cd-section" id="resource-preview">
              <h2 class="cd-section-title">Preview</h2>
                ${resource.previewVideoUrl
                  ? `<div class="cd-video-wrap">
                       <iframe
                         src="${resource.previewVideoUrl}"
                         title="${resource.title} Preview"
                         frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen
                         loading="lazy"
                         style="border:0"></iframe>
                     </div>`
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
                  <span class="cd-meta-icon">${ICONS.bookOpen}</span>
                  <span>${totalItems} items included</span>
                </div>
                <div class="cd-meta-item">
                  <span class="cd-meta-icon">${ICONS.users}</span>
                  <span>Beginner</span>
                </div>
                ${resource.setupTime ? `
                <div class="cd-meta-item">
                  <span class="cd-meta-icon">${ICONS.clock}</span>
                  <span>${resource.setupTime}</span>
                </div>
                ` : ''}
              </div>
            </section>

            <!-- About -->
            <section class="cd-section" id="resource-description">
              <h2 class="cd-section-title">About This Resource</h2>
              <div class="cd-about-text">
                ${descParagraphs.map(p => `<p>${p.trim()}</p>`).join('')}
              </div>
            </section>

            <!-- Recommended Learning Sequence & Practical Framework -->
            ${(resource.recommendedBeforeLesson || resource.recommendedAfterLesson) ? `
            <section class="cd-section" id="resource-learning-sequence">
              <h2 class="cd-section-title">${isEn ? 'Recommended Learning Sequence' : 'सिफारिस गरिएको सिकाइ क्रम'}</h2>
              <p style="color:var(--color-text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-4);line-height:1.5;">
                ${isEn 
                  ? 'To maximize the practical value of this resource, follow this curated 3-step learning pathway:' 
                  : 'यो स्रोतको अधिकतम व्यावहारिक फाइदा लिन, तल दिइएको ३-चरणको सिकाइ मार्ग पछ्याउनुहोस्:'}
              </p>
              <div class="cd-learning-sequence" style="display:flex;flex-direction:column;gap:var(--space-3);">
                ${resource.recommendedBeforeLesson ? `
                <div style="display:flex;gap:var(--space-4);padding:var(--space-4);background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:var(--radius-md);align-items:flex-start;">
                  <div style="flex-shrink:0;background:rgba(0,102,204,0.12);color:var(--color-primary);border-radius:9999px;padding:4px 12px;font-size:var(--text-xs);font-weight:700;">
                    ${isEn ? 'Step 1 · Study First' : 'चरण १ · पहिले अध्ययन गर्नुहोस्'}
                  </div>
                  <div style="flex:1;">
                    <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-text-tertiary);margin-bottom:2px;">
                      ${isEn ? 'Prerequisite Curriculum Lesson' : 'पूर्वशर्त पाठ्यक्रम पाठ'}
                    </div>
                    <h3 style="font-size:var(--text-base);font-weight:600;margin:0 0 4px 0;">
                      <a href="${ROUTES.LEARN_LESSON(resource.recommendedBeforeLesson.categorySlug, resource.recommendedBeforeLesson.slug)}" style="color:var(--color-heading);text-decoration:none;">
                        ${resource.recommendedBeforeLesson.title[lang] || resource.recommendedBeforeLesson.title.en} &rarr;
                      </a>
                    </h3>
                    <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin:0;line-height:1.5;">
                      ${resource.recommendedBeforeLesson.why[lang] || resource.recommendedBeforeLesson.why.en}
                    </p>
                  </div>
                </div>
                ` : ''}

                <div style="display:flex;gap:var(--space-4);padding:var(--space-4);background:rgba(0,102,204,0.04);border:1px solid rgba(0,102,204,0.25);border-radius:var(--radius-md);align-items:flex-start;">
                  <div style="flex-shrink:0;background:var(--color-primary);color:#fff;border-radius:9999px;padding:4px 12px;font-size:var(--text-xs);font-weight:700;">
                    ${isEn ? 'Step 2 · Apply Here' : 'चरण २ · यहाँ लागू गर्नुहोस्'}
                  </div>
                  <div style="flex:1;">
                    <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-primary);margin-bottom:2px;font-weight:600;">
                      ${isEn ? 'Hands-On Execution System' : 'व्यावहारिक कार्यान्वयन प्रणाली'}
                    </div>
                    <h3 style="font-size:var(--text-base);font-weight:600;margin:0 0 4px 0;color:var(--color-heading);">
                      ${resource.title} (${resource.category})
                    </h3>
                    <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin:0;line-height:1.5;">
                      ${isEn
                        ? `Deploy this structured template to record real income, track expense leakages, and automate month-end financial audits.`
                        : `आम्दानी, खर्च चुहावट र महिनाको अन्त्यमा कुल सम्पत्ति अडिट गर्न यो स्वचालित प्रणाली प्रयोग गर्नुहोस्।`}
                    </p>
                  </div>
                </div>

                ${resource.recommendedAfterLesson ? `
                <div style="display:flex;gap:var(--space-4);padding:var(--space-4);background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:var(--radius-md);align-items:flex-start;">
                  <div style="flex-shrink:0;background:rgba(0,102,204,0.12);color:var(--color-primary);border-radius:9999px;padding:4px 12px;font-size:var(--text-xs);font-weight:700;">
                    ${isEn ? 'Step 3 · Next Milestone' : 'चरण ३ · अर्को चरण'}
                  </div>
                  <div style="flex:1;">
                    <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-text-tertiary);margin-bottom:2px;">
                      ${isEn ? 'Next Skill to Master' : 'सिक्नुपर्ने अर्को सीप'}
                    </div>
                    <h3 style="font-size:var(--text-base);font-weight:600;margin:0 0 4px 0;">
                      <a href="${ROUTES.LEARN_LESSON(resource.recommendedAfterLesson.categorySlug, resource.recommendedAfterLesson.slug)}" style="color:var(--color-heading);text-decoration:none;">
                        ${resource.recommendedAfterLesson.title[lang] || resource.recommendedAfterLesson.title.en} &rarr;
                      </a>
                    </h3>
                    <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin:0;line-height:1.5;">
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
              <h2 class="cd-section-title">What You'll Learn</h2>
              <div class="cd-learn-grid">
                ${resource.whatYouLearn.map(item => `
                  <div class="cd-learn-item">
                    <span class="cd-bullet-dot"></span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- What's Included (single section, no modules) -->
            <section class="cd-section" id="resource-content">
              <h2 class="cd-section-title">What's Included</h2>
              <p class="cd-curriculum-summary">${totalItems} items · Instant digital delivery</p>
              <div class="cd-accordion">
                <div class="accordion-item active">
                  <button class="accordion-header">
                    <div class="cd-acc-left">
                      <span class="cd-acc-title">Included in this resource</span>
                      <span class="cd-acc-meta">${totalItems} items</span>
                    </div>
                    <span class="chevron">${ICONS.chevronDown}</span>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-body">
                      <ul>
                        ${resource.whatsIncluded.map(item => `<li>${item}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- How to Use / Setup Workflow -->
            ${resource.howToUse && resource.howToUse.length > 0 ? `
            <section class="cd-section" id="resource-how-to-use">
              <h2 class="cd-section-title">How to Use This Resource</h2>
              <div class="cd-learn-grid" style="grid-template-columns:1fr;gap:var(--space-3);">
                ${resource.howToUse.map((step, idx) => `
                  <div class="cd-learn-item" style="align-items:flex-start;padding:var(--space-4);background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:var(--radius-md);">
                    <span style="background:var(--color-primary);color:#fff;font-size:11px;font-weight:700;border-radius:999px;padding:3px 10px;margin-right:var(--space-3);flex-shrink:0;letter-spacing:0.02em;">Step ${idx + 1}</span>
                    <div>
                      <strong style="color:var(--color-heading);display:block;margin-bottom:4px;font-size:var(--text-base);">${step.stepTitle}</strong>
                      <span style="color:var(--color-text-secondary);font-size:var(--text-sm);line-height:1.5;">${step.stepDesc}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>
            ` : ''}

            <!-- Who Is This For -->
            <section class="cd-section" id="resource-audience">
              <h2 class="cd-section-title">Who Is This For?</h2>
              <ul class="cd-audience-list">
                ${audiencePoints.map(point => `
                  <li class="cd-audience-item">
                    <span class="cd-bullet-dot"></span>
                    <span>${point.charAt(0).toUpperCase() + point.slice(1)}</span>
                  </li>
                `).join('')}
              </ul>
            </section>

            <!-- Recommended Companion Tools -->
            ${resource.companionTools && resource.companionTools.length > 0 ? `
            <section class="cd-section" id="resource-companion-tools">
              <h2 class="cd-section-title">Recommended Companion Tools</h2>
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
          <div class="cd-sidebar">
            <div class="cd-pricing-card" id="resource-pricing-card">
              <img src="${thumbMap[resource.id] || thumbMap[1]}" alt="${resource.title}" class="cd-pricing-thumb" loading="lazy" decoding="async">

              <div class="cd-price-block">
                <span class="cd-price-anchor">NPR ${anchorPrice.toLocaleString()}</span>
                <span class="cd-price-current"><span class="cd-price-currency">NPR </span>${resource.price.toLocaleString()}</span>
                <span class="cd-discount-badge">50% OFF</span>
              </div>

              <div class="cd-price-labels">
                <span class="cd-label-item">Instant delivery</span>
                <span class="cd-label-item">Lifetime access</span>
                <span class="cd-label-item">Mobile + Desktop</span>
                <span class="cd-label-item">Free updates</span>
              </div>

              <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg cd-cta-primary" id="buy-whatsapp-btn">
                ${ICONS.whatsapp} Buy Now via WhatsApp
              </a>
              <a href="${waAskLink}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg cd-cta-secondary">
                ${ICONS.mail} Ask a Question
              </a>

              <div class="cd-trust-signals">
                <div class="cd-trust-item">
                  <span class="cd-trust-dot"></span>
                  <span>One-time payment</span>
                </div>
                <div class="cd-trust-item">
                  <span class="cd-trust-dot"></span>
                  <span>Instant access</span>
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
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Sticky CTA -->
    <div class="cd-mobile-cta" id="resource-mobile-cta">
      <div class="cd-mobile-cta-inner">
        <div class="cd-mobile-price">
          <span class="cd-mobile-anchor">NPR ${anchorPrice.toLocaleString()}</span>
          <span class="cd-mobile-current">NPR ${resource.price.toLocaleString()}</span>
        </div>
        <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp cd-mobile-buy">
          ${ICONS.whatsapp} Buy Now
        </a>
      </div>
    </div>
  `;
}

export function initResourceDetailPage() {
  initAccordions();

  // Mobile sticky CTA: show/hide based on scroll
  const mobileCta = document.getElementById('resource-mobile-cta');
  const pricingCard = document.getElementById('resource-pricing-card');
  if (mobileCta && pricingCard) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = !entry.isIntersecting;
        mobileCta.classList.toggle('visible', isVisible);
        document.body.classList.toggle('has-mobile-cta', isVisible);
      },
      { threshold: 0 }
    );
    observer.observe(pricingCard);
  }
}

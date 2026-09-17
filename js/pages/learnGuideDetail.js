// ==============================================
// risePaisa - Dedicated Cornerstone Guide Experience (/learn/guides/:slug)
// End-to-End Practical Manuals for Nepal’s Financial Systems
// ==============================================

import {
  getGuideBySlug,
  getLearnLanguage,
  setLearnLanguage,
  LEARN_UI,
  recordRecentView,
  toggleSavedGuide,
  isGuideSaved,
  getRelatedContent
} from '../data/learn.js';
import { ROUTES } from '../routes.js';
import { initGlossaryTooltips } from '../enhancements.js';
import { initNotionOutline } from '../outline.js';

const ICONS = {
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  bookmarkFilled: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  nepalFlag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20"/><path d="m4 2 12 7-7 1 9 8H4"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
};

export function renderLearnGuideDetailPage(guideSlug) {
  const slug = typeof guideSlug === 'object' && guideSlug !== null ? (guideSlug.slug || guideSlug[1] || '') : (guideSlug || '');
  const guide = getGuideBySlug(slug);
  const lang = getLearnLanguage();
  const ui = LEARN_UI[lang] || LEARN_UI.en;
  const isEn = lang === 'en';

  if (!guide) {
    return `
      <div class="learn-page-wrapper">
        <div class="container" style="padding:var(--space-16) 0;text-align:center;">
          <h1 style="font-size:var(--text-4xl);margin-bottom:var(--space-4);color:var(--color-heading);">
            ${isEn ? 'Guide Not Found' : 'गाइड फेला परेन'}
          </h1>
          <p style="color:var(--color-text-secondary);margin-bottom:var(--space-8);max-width:540px;margin-left:auto;margin-right:auto;">
            ${isEn ? 'The requested cornerstone guide does not exist or may have been relocated.' : 'तपाईंले खोज्नुभएको कर्नरस्टोन गाइड फेला परेन वा सारिएको हुन सक्छ।'}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
            <a href="${ROUTES.LEARN_GUIDES}" class="btn btn-primary">${ui.allGuides}</a>
            <a href="${ROUTES.LEARN}" class="btn btn-secondary">${ui.breadcrumbLearn}</a>
          </div>
        </div>
      </div>
    `;
  }

  const guideData = guide[lang] || guide.en;
  const title = guide.title[lang] || guide.title.en;
  const summary = guide.oneLineSummary[lang] || guide.oneLineSummary.en;
  const categoryName = guide.categoryName ? (guide.categoryName[lang] || guide.categoryName.en) : guide.categorySlug;
  const isSaved = isGuideSaved(guide.slug);

  // Smart cross-linking graph
  const relatedContent = getRelatedContent('guide', guide.slug, guide.categorySlug);

  const nextLesson = guideData.whereToGoNext?.nextLesson || {
    title: isEn ? 'Personal Finance Fundamentals' : 'व्यक्तिगत वित्तका आधारभूत कुराहरू',
    slug: '50-30-20-budget-rule',
    categorySlug: 'personal-finance',
    readTime: isEn ? '12 min read' : '१२ मिनेट पढाइ'
  };
  const nextGuide = guideData.whereToGoNext?.nextGuide || {
    title: isEn ? 'Complete Income Tax Guide' : 'आयकरको सम्पूर्ण गाइड',
    slug: 'complete-income-tax-guide',
    readTime: isEn ? '16 min read' : '१६ मिनेट पढाइ'
  };
  const nextCalculator = guideData.whereToGoNext?.nextCalculator || {
    title: isEn ? 'Nepal Income Tax Calculator' : 'नेपाल आयकर क्याल्कुलेटर',
    slug: 'nepal-income-tax'
  };
  const nextGlossary = guideData.whereToGoNext?.nextGlossary || {
    term: 'TDS (कर कट्टी)',
    def: isEn ? 'Statutory advance tax withheld at source on salary and financial income in Nepal.' : 'पारिश्रमिक वा ब्याज भुक्तानी गर्दा मुहानमै कानुनी रूपमा कट्टा गरिने अग्रिम कर।'
  };

  return `
    <div class="learn-page-wrapper guide-detail-page">
      <!-- 1. Top Pinned Reading Progress Bar -->
      <div class="reading-progress-track" aria-hidden="true">
        <div class="reading-progress-bar" id="guide-reading-progress"></div>
      </div>

      <!-- 2. Sticky Reading Sub-Nav Bar -->
      <nav class="guide-sticky-bar" id="guide-sticky-bar" aria-label="Guide Navigation">
        <div class="container guide-sticky-container">
          <div class="sticky-left-cluster">
            <span class="content-type-badge badge-guide mini">${ui.contentTypeGuide}</span>
            <span class="sticky-guide-title">${title}</span>
          </div>
          <div class="sticky-right-cluster">
            <div class="sticky-progress-readout">
              <span id="guide-sticky-progress-pct">0%</span>
              <span class="progress-lbl">${isEn ? 'read' : 'सम्पन्न'}</span>
            </div>
            <button 
              type="button" 
              class="btn-icon-capsule ${isSaved ? 'bookmarked' : ''}" 
              id="sticky-guide-bookmark-btn" 
              title="${isSaved ? ui.guideSaved : ui.saveGuide}"
              aria-label="${ui.saveGuide}"
            >
              ${isSaved ? ICONS.bookmarkFilled : ICONS.bookmark}
            </button>
            <button type="button" class="btn-icon-capsule" id="sticky-guide-share-btn" title="${ui.shareGuide}" aria-label="${ui.shareGuide}">
              ${ICONS.share}
            </button>
            <div class="sticky-lang-cluster">
              <button type="button" class="lang-text-btn ${lang === 'en' ? 'active' : ''}" data-set-lang="en">EN</button>
              <span class="lang-divider">|</span>
              <button type="button" class="lang-text-btn ${lang === 'np' ? 'active' : ''}" data-set-lang="np">नेपाली</button>
            </div>
          </div>
        </div>
      </nav>

      <!-- 3. Guide Hero Area -->
      <header class="guide-hero-area">
        <div class="container">
          <!-- Breadcrumb Navigation -->
          <nav class="guide-breadcrumb" aria-label="Breadcrumb">
            <a href="${ROUTES.HOME}">${ui.breadcrumbHome}</a>
            <span class="breadcrumb-sep">/</span>
            <a href="${ROUTES.LEARN}">${ui.breadcrumbLearn}</a>
            <span class="breadcrumb-sep">/</span>
            <a href="${ROUTES.LEARN_GUIDES}">${ui.tabGuides}</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">${categoryName}</span>
          </nav>

          <div class="guide-hero-badges-row">
            <span class="content-type-badge badge-guide">${ui.contentTypeGuide}</span>
            <a href="/learn/${guide.categorySlug}" class="guide-category-badge">${categoryName}</a>
          </div>

          <h1 class="guide-hero-title">${title}</h1>
          <p class="guide-hero-summary">${summary}</p>

          <div class="guide-hero-actions-row">
            <div class="hero-actions-left">
              <button type="button" class="btn btn-secondary btn-sm lesson-action-pill ${isSaved ? 'bookmarked' : ''}" id="hero-guide-bookmark-btn">
                <span class="btn-icon">${isSaved ? ICONS.bookmarkFilled : ICONS.bookmark}</span>
                <span class="btn-text">${isSaved ? ui.guideSaved : ui.saveGuide}</span>
              </button>
              <button type="button" class="btn btn-secondary btn-sm lesson-action-pill" id="hero-guide-share-btn">
                <span class="btn-icon">${ICONS.share}</span>
                <span class="btn-text">${ui.shareGuide}</span>
              </button>
            </div>
          </div>


        </div>
      </header>

      <!-- 4. Two-Column Reading Layout -->
      <section class="lesson-reading-layout">
        <div class="container lesson-reading-grid">
          <!-- Main Editorial Reading Column (~760px) -->
          <main class="lesson-content-col guide-reading-main" id="guide-main-article">
            <!-- Introduction Chapter -->
            <article class="guide-chapter-block" id="guide-chap-intro">
              <div class="chapter-badge">${isEn ? 'Orientation' : 'प्रारम्भ'}</div>
              <h2 class="guide-chapter-title" id="guide-heading-intro">${isEn ? 'Introduction & Purpose' : 'परिचय तथा उद्देश्य'}</h2>
              <div class="guide-prose-body">
                <p>${guideData.intro}</p>
              </div>
            </article>

            <!-- Step-by-Step Editorial Chapters -->
            ${(guideData.chapters || []).map((chap, idx) => `
              <article class="guide-chapter-block" id="${chap.id}">
                <div class="chapter-badge">${ui.guideChapter} 0${chap.num}</div>
                <h2 class="guide-chapter-title" id="guide-heading-${chap.id}">${chap.title}</h2>
                <div class="guide-prose-body">
                  <p>${chap.content}</p>
                </div>

                ${chap.callout ? `
                  <div class="lesson-callout callout-${chap.callout.type || 'tip'}">
                    <div class="callout-icon">
                      ${chap.callout.type === 'warning' ? ICONS.alertTriangle : ICONS.sparkles}
                    </div>
                    <div class="callout-content">
                      <h4 class="callout-title">${chap.callout.title}</h4>
                      <p>${chap.callout.text}</p>
                    </div>
                  </div>
                ` : ''}
              </article>
            `).join('')}

            <!-- Dedicated Nepal Regulatory Context -->
            ${guideData.nepalContext ? `
              <article class="guide-chapter-block" id="guide-chap-nepal">
                <div class="nepal-context-card">
                  <div class="nepal-context-badge">
                    <span class="flag-icon">${ICONS.nepalFlag}</span>
                    <span>${ui.nepalContext}</span>
                  </div>
                  <h2 class="nepal-context-title">${ui.howInNepalTitle}</h2>
                  <div class="nepal-context-body">
                    <p>${guideData.nepalContext}</p>
                  </div>
                  <div class="nepal-regulators-strip">
                    <span class="reg-label">${isEn ? 'Supervised Under:' : 'नियमनकारी निकायहरू:'}</span>
                    <div class="reg-chips">
                      <span class="reg-chip">NRB (Nepal Rastra Bank)</span>
                      <span class="reg-chip">SEBON (Securities Board)</span>
                      <span class="reg-chip">IRD (Inland Revenue)</span>
                      <span class="reg-chip">CDSC (MeroShare)</span>
                    </div>
                  </div>
                  <div class="nepal-context-advisory" style="margin-top:var(--space-4);padding-top:var(--space-3);border-top:1px dashed var(--color-border);font-size:var(--text-xs);color:var(--color-text-tertiary);line-height:1.5;">
                    <strong>${isEn ? 'Regulatory Note:' : 'नियमनकारी जानकारी:'}</strong> ${isEn ? 'Statutory tax brackets, regulatory fees, and monetary caps reflect current official practice and are subject to periodic amendment in annual Nepal Finance Acts and NRB circulars. Always verify the latest gazetted directives before financial execution.' : 'कानुनी कर दर, नियमनकारी शुल्क तथा मौद्रिक सीमाहरू वर्तमान आधिकारिक अभ्यासमा आधारित छन् र वार्षिक आर्थिक ऐन तथा राष्ट्र बैंकका परिपत्र अनुसार परिवर्तन हुन सक्छन्। वित्तीय निर्णय लिनुअघि पछिल्लो राजपत्रित निर्देशन हेर्नुहोस्।'}
                  </div>
                </div>
              </article>
            ` : ''}

            <!-- Key Comparison Table -->
            ${guideData.comparisonTable ? `
              <article class="guide-chapter-block" id="guide-chap-comparison">
                <h2 class="lesson-heading-h2">
                  <span>${guideData.comparisonTable.title}</span>
                </h2>
                <div class="lesson-visual-table-wrapper">
                  <table class="lesson-visual-table">
                    ${guideData.comparisonTable.caption ? `<caption>${guideData.comparisonTable.caption}</caption>` : ''}
                    <thead>
                      <tr>
                        ${guideData.comparisonTable.headers.map(h => `<th>${h}</th>`).join('')}
                      </tr>
                    </thead>
                    <tbody>
                      ${guideData.comparisonTable.rows.map(row => `
                        <tr>
                          ${row.map((cell, cIdx) => cIdx === 0 ? `<td><strong style="color:var(--color-heading);">${cell}</strong></td>` : `<td>${cell}</td>`).join('')}
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </article>
            ` : ''}

            <!-- Practical Real-World Case Study -->
            ${guideData.practicalScenario ? `
              <article class="guide-chapter-block" id="guide-chap-case-study">
                <h2 class="lesson-heading-h2">
                  <span>${ui.practicalExample}</span>
                </h2>
                <div class="practical-scenario-card">
                  <div class="scenario-card-header">
                    <h3 class="persona-name">${guideData.practicalScenario.persona}</h3>
                  </div>
                  <div class="scenario-body">
                    <div class="scenario-problem">
                      <h4 class="scenario-sub-heading" style="font-size:var(--text-sm);font-weight:600;margin:0 0 var(--space-1) 0;color:var(--color-heading);">${isEn ? 'The Challenge:' : 'समस्या:'}</h4>
                      <p>${guideData.practicalScenario.challenge}</p>
                    </div>
                    <div class="scenario-solution">
                      <h4 class="scenario-sub-heading" style="font-size:var(--text-sm);font-weight:600;margin:0 0 var(--space-1) 0;color:var(--color-heading);">${isEn ? 'The RisePaisa Solution:' : 'risePaisa समाधान:'}</h4>
                      <p>${guideData.practicalScenario.solutionText || guideData.practicalScenario.solution}</p>
                    </div>
                  </div>
                </div>
              </article>
            ` : ''}

            <!-- Contextual Calculator Recommendation -->
            ${guideData.calculatorShortcut ? `
              <article class="guide-chapter-block" id="guide-chap-calculators">
                <h2 class="lesson-heading-h2" id="guide-heading-calculators">
                  <span>${ui.contentTypeCalculator}: ${guideData.calculatorShortcut.name}</span>
                </h2>
                <div class="guide-calculator-bridge-card">
                  <div class="calc-bridge-icon">${ICONS.calculator}</div>
                  <div class="calc-bridge-info">
                    <span class="calc-bridge-kicker">${ui.contentTypeCalculator} Bridge</span>
                    <h3 class="calc-bridge-title">${guideData.calculatorShortcut.name}</h3>
                    <p class="calc-bridge-desc">${guideData.calculatorShortcut.desc}</p>
                  </div>
                  <a href="/calculators/${guideData.calculatorShortcut.slug}" class="btn btn-primary">
                    <span>${ui.exploreTool}</span>
                    ${ICONS.chevronRight}
                  </a>
                </div>
              </article>
            ` : ''}

            <!-- Downloadable Resources -->
            ${guideData.downloadableResources && guideData.downloadableResources.length > 0 ? `
              <article class="guide-chapter-block" id="guide-chap-downloads">
                <h2 class="lesson-heading-h2" id="guide-heading-downloads">
                  <span>${ui.downloadableResourcesTitle}</span>
                </h2>
                <div class="lesson-resources-grid">
                  ${guideData.downloadableResources.map(rawRes => {
                    const res = resolveGuideDownloadableResource(rawRes, guide);
                    return `
                      <div class="lesson-resource-card">
                        <div class="res-card-icon">${ICONS.download}</div>
                        <div class="res-card-info">
                          <span class="res-card-type">${rawRes.type || 'Resource'} · ${rawRes.size || 'Direct Download'}</span>
                          <h4 class="res-card-title">${rawRes.title}</h4>
                        </div>
                        <a href="${res.href}" class="btn btn-primary btn-sm res-download-btn" ${res.downloadAttr} ${res.targetAttr} data-resource-title="${(rawRes.title || '').replace(/"/g, '&quot;')}">
                          <span>${isEn ? 'Download' : 'डाउनलोड'}</span>
                          ${ICONS.download}
                        </a>
                      </div>
                    `;
                  }).join('')}
                </div>
              </article>
            ` : ''}

            <!-- Connected FAQ Accordions -->
            ${guideData.faqs && guideData.faqs.length > 0 ? `
              <article class="guide-chapter-block" id="guide-chap-faqs">
                <h2 class="lesson-heading-h2" id="guide-heading-faqs">
                  <span>${ui.frequentlyAskedQuestions}</span>
                </h2>
                <div class="lesson-faq-accordions">
                  ${guideData.faqs.map((faq, fIdx) => `
                    <div class="lesson-faq-item" data-faq-id="${fIdx}">
                      <button type="button" class="lesson-faq-question" aria-expanded="false">
                        <span>${faq.q}</span>
                        <span class="faq-toggle-icon">${ICONS.chevronDown}</span>
                      </button>
                      <div class="lesson-faq-answer" hidden>
                        <p>${faq.a}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </article>
            ` : ''}

            <!-- WHERE SHOULD I GO NEXT? (Continuous Learning Knowledge Graph) -->
            <article class="guide-chapter-block" id="guide-chap-where-next">
              <div class="where-next-panel">
                <div class="where-next-header">
                  <span class="where-next-icon">${ICONS.sparkles}</span>
                  <div>
                    <h2 class="where-next-title" id="guide-heading-where-next" style="font-size:var(--text-xl);margin:0 0 var(--space-1) 0;color:var(--color-heading);">${ui.whereToGoNext}</h2>
                    <p class="where-next-sub">${ui.whereToGoNextSubtitle}</p>
                  </div>
                </div>

                <div class="where-next-grid">
                  <!-- Next Lesson Recommendation -->
                  <div class="where-next-card">
                    <span class="content-type-badge badge-lesson">${ui.contentTypeLesson}</span>
                    <h4 class="where-card-title">${nextLesson.title}</h4>
                    <span class="where-card-meta">${nextLesson.readTime}</span>
                    <a href="/learn/${nextLesson.categorySlug}/${nextLesson.slug}" class="where-card-link">
                      <span>${isEn ? 'Start Lesson' : 'पाठ सुरु गर्नुहोस्'}</span>
                      ${ICONS.arrowRight}
                    </a>
                  </div>

                  <!-- Next Guide Recommendation -->
                  <div class="where-next-card">
                    <span class="content-type-badge badge-guide">${ui.contentTypeGuide}</span>
                    <h4 class="where-card-title">${nextGuide.title}</h4>
                    <span class="where-card-meta">${nextGuide.readTime}</span>
                    <a href="/learn/guides/${nextGuide.slug}" class="where-card-link">
                      <span>${ui.readGuide}</span>
                      ${ICONS.arrowRight}
                    </a>
                  </div>

                  <!-- Contextual Calculator -->
                  <div class="where-next-card">
                    <span class="content-type-badge badge-calculator">${ui.contentTypeCalculator}</span>
                    <h4 class="where-card-title">${nextCalculator.title}</h4>
                    <span class="where-card-meta">${isEn ? 'Interactive Tool' : 'अन्तर्क्रियात्मक औजार'}</span>
                    <a href="/calculators/${nextCalculator.slug}" class="where-card-link">
                      <span>${ui.exploreTool}</span>
                      ${ICONS.arrowRight}
                    </a>
                  </div>

                  <!-- Connected Glossary Definition -->
                  <div class="where-next-card">
                    <span class="content-type-badge badge-glossary">${ui.contentTypeGlossary}</span>
                    <h4 class="where-card-title">${nextGlossary.term || nextGlossary.title}</h4>
                    <p class="where-card-meta">${nextGlossary.def || ''}</p>
                    <a href="/learn/glossary" class="where-card-link">
                      <span>${ui.viewGlossaryTerm}</span>
                      ${ICONS.arrowRight}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </section>
    </div>
  `;
}

export function initLearnGuideDetailPage(guideSlug) {
  const slug = typeof guideSlug === 'object' && guideSlug !== null ? (guideSlug.slug || guideSlug[1] || '') : (guideSlug || '');
  const guide = getGuideBySlug(slug);
  if (!guide) return;

  const lang = getLearnLanguage();
  const ui = LEARN_UI[lang] || LEARN_UI.en;

  // Record recent view in history
  recordRecentView('guide', guide.slug, guide.title.en, guide.categorySlug);

  // Initialize interactive glossary tooltips
  initGlossaryTooltips();

  // 1. Reading Progress Bar & Sticky Sub-Nav (RAF Throttled & Zero-Reflow)
  const progressBar = document.getElementById('guide-reading-progress');
  const stickyBar = document.getElementById('guide-sticky-bar');
  const stickyProgressPct = document.getElementById('guide-sticky-progress-pct');

  let cachedDocHeight = 0;
  let lastProgress = -1;
  let isStickyVisible = false;
  let ticking = false;

  const updateDocHeight = () => {
    cachedDocHeight = document.documentElement.scrollHeight - window.innerHeight;
  };
  updateDocHeight();

  const updateScrollProgress = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (cachedDocHeight <= 0) updateDocHeight();
    const progress = cachedDocHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollY / cachedDocHeight) * 100))) : 0;

    if (progress !== lastProgress) {
      lastProgress = progress;
      if (progressBar) progressBar.style.width = `${progress}%`;
      if (stickyProgressPct) stickyProgressPct.textContent = `${progress}%`;
    }

    if (stickyBar) {
      const shouldBeSticky = scrollY > 380;
      if (shouldBeSticky !== isStickyVisible) {
        isStickyVisible = shouldBeSticky;
        stickyBar.classList.toggle('visible', shouldBeSticky);
      }
    }
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateDocHeight, { passive: true });
  updateScrollProgress();

  // 2. Initialize Notion-Style Dynamic Outline
  initNotionOutline({
    contentSelector: '#guide-main-article',
    headingSelector: 'h2, h3',
    offset: 85,
    title: ui.tableOfContents || (lang === 'np' ? 'विषयसूची' : 'Outline')
  });

  // 3. Bookmark Toggle
  const bookmarkButtons = [
    document.getElementById('hero-guide-bookmark-btn'),
    document.getElementById('sticky-guide-bookmark-btn')
  ].filter(Boolean);

  bookmarkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const nowSaved = toggleSavedGuide(guide.slug);
      bookmarkButtons.forEach(b => {
        b.classList.toggle('bookmarked', nowSaved);
        const span = b.querySelector('span');
        if (span) span.textContent = nowSaved ? ui.guideSaved : ui.saveGuide;
        const iconSvg = nowSaved ? ICONS.bookmarkFilled : ICONS.bookmark;
        if (!span) {
          b.innerHTML = iconSvg;
        } else {
          b.innerHTML = `${iconSvg} <span>${nowSaved ? ui.guideSaved : ui.saveGuide}</span>`;
        }
      });
    });
  });

  // 5. Share Button with Toast
  const shareButtons = [
    document.getElementById('hero-guide-share-btn'),
    document.getElementById('sticky-guide-share-btn')
  ].filter(Boolean);

  const showToast = (message) => {
    const existing = document.getElementById('lesson-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'lesson-toast';
    toast.className = 'lesson-toast';
    toast.innerHTML = `<span>${ICONS.checkCircle}</span> <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('visible'), 10);
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  };

  shareButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const url = window.location.href;
      if (navigator.share) {
        navigator.share({ title: guide.title.en, url }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          showToast(ui.guideLinkCopied);
        }).catch(() => {});
      }
    });
  });

  // 6. FAQ Accordion Expand/Collapse
  const faqItems = document.querySelectorAll('.lesson-faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.lesson-faq-question');
    const answerDiv = item.querySelector('.lesson-faq-answer');
    if (questionBtn && answerDiv) {
      questionBtn.addEventListener('click', () => {
        const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';
        questionBtn.setAttribute('aria-expanded', !isExpanded);
        answerDiv.hidden = isExpanded;
        item.classList.toggle('open', !isExpanded);
      });
    }
  });

  // 7. Download Button Toast Feedback
  const isEn = (guide?.lang || 'en') === 'en';
  document.querySelectorAll('.res-download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-resource-title') || 'Guide Resource';
      showToast(isEn ? `📥 Download started: ${title}` : `📥 डाउनलोड सुरु भयो: ${title}`);
    });
  });

  // Return unmount cleanup function to prevent memory leaks and orphaned scroll listeners
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', updateDocHeight);
  };
}

// ── Smart Resource Download Resolver for Guides ───────────
function resolveGuideDownloadableResource(res, guide = {}) {
  const title = (res.title || '').toLowerCase();
  const href = (res.href || '').trim();

  // If already a direct download link in assets/downloads/
  if (href.startsWith('assets/downloads/') || href.startsWith('/assets/downloads/')) {
    const cleanHref = href.startsWith('/') ? href.slice(1) : href;
    const isHtml = cleanHref.endsWith('.html');
    const filename = cleanHref.split('/').pop();
    return {
      href: cleanHref,
      downloadAttr: isHtml ? '' : `download="${filename}"`,
      targetAttr: isHtml ? 'target="_blank" rel="noopener noreferrer"' : '',
      title: res.title
    };
  }

  // Contextual mapping
  let targetFile = 'nepse-first-time-investor-checklist.html';

  if (title.includes('demat') || title.includes('cdsc') || title.includes('हक हस्तान्तरण') || title.includes('नामसारी') || title.includes('transmission')) {
    targetFile = 'cdsc-demat-transfer-checklist.html';
  } else if (title.includes('ipo') || title.includes('prospectus') || title.includes('c-asba')) {
    targetFile = 'nepal-ipo-application-checklist.html';
  } else if (title.includes('company') || title.includes('ocr') || title.includes('कम्पनी') || title.includes('compliance') || title.includes('business')) {
    targetFile = 'nepal-company-registration-compliance-checklist.html';
  } else if (title.includes('cyber') || title.includes('payment') || title.includes('digital') || title.includes('fraud') || title.includes('safety') || title.includes('सुरक्षा')) {
    targetFile = 'nepal-digital-payment-safety-guide.html';
  } else if (title.includes('budget') || title.includes('बजेट') || title.includes('cash flow') || title.includes('planner')) {
    targetFile = 'nepal-personal-budget-planner.csv';
  } else if (title.includes('net worth') || title.includes('audit') || title.includes('सम्पत्ति')) {
    targetFile = 'nepal-cash-flow-tracker.csv';
  } else if (title.includes('sip') || title.includes('mutual fund') || title.includes('म्युचुअल')) {
    targetFile = 'nepal-sip-mutual-fund-checklist.html';
  } else if (title.includes('tax') || title.includes('कर') || title.includes('salary') || title.includes('pan')) {
    targetFile = 'nepal-salary-tax-deductions-checklist.html';
  } else if (title.includes('loan') || title.includes('base rate') || title.includes('कर्जा') || title.includes('emi')) {
    targetFile = 'commercial-bank-loan-comparison-worksheet.csv';
  } else if (title.includes('debenture') || title.includes('cib') || title.includes('migrant worker') || title.includes('वैदेशिक') || title.includes('fd') || title.includes('bank')) {
    targetFile = 'nepal-bank-rates-debenture-guide.html';
  } else if (title.includes('insurance') || title.includes('बीमा')) {
    targetFile = 'nepal-insurance-claim-checklist.html';
  } else if (guide.categorySlug === 'investing' || guide.categorySlug === 'nepse') {
    targetFile = 'nepse-first-time-investor-checklist.html';
  }

  const resolvedHref = `assets/downloads/${targetFile}`;
  const isHtml = targetFile.endsWith('.html');

  return {
    href: resolvedHref,
    downloadAttr: isHtml ? '' : `download="${targetFile}"`,
    targetAttr: isHtml ? 'target="_blank" rel="noopener noreferrer"' : '',
    title: res.title
  };
}

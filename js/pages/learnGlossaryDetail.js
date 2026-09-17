// ==============================================
// risePaisa - Individual Finance Glossary Page (/learn/glossary/:term)
// High-authority, searchable financial dictionary tailored for Nepal
// ==============================================

import {
  getGlossaryTermBySlug,
  getLearnLanguage,
  setLearnLanguage,
  LEARN_UI,
  recordRecentView
} from '../data/learn.js';
import { ROUTES, buildCanonicalUrl } from '../routes.js';
import { initGlossaryTooltips } from '../enhancements.js';

const ICONS = {
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  volume2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  bookmarkFilled: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  nepalFlag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20"/><path d="m4 2 12 7-7 1 9 8H4"/></svg>`
};

const SAVED_TERMS_KEY = 'risepaisa_saved_glossary_terms';

function getSavedGlossaryTerms() {
  try {
    const raw = localStorage.getItem(SAVED_TERMS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function isGlossaryTermSaved(slug) {
  const saved = getSavedGlossaryTerms();
  return saved.includes(slug);
}

function toggleSavedGlossaryTerm(slug) {
  try {
    let saved = getSavedGlossaryTerms();
    const index = saved.indexOf(slug);
    if (index > -1) {
      saved.splice(index, 1);
    } else {
      saved.push(slug);
    }
    localStorage.setItem(SAVED_TERMS_KEY, JSON.stringify(saved));
    return index === -1; // true if now saved
  } catch (e) {
    return false;
  }
}

export function renderLearnGlossaryDetailPage(termSlug) {
  const slug = typeof termSlug === 'object' && termSlug !== null ? (termSlug.slug || termSlug[1] || '') : (termSlug || '');
  const term = getGlossaryTermBySlug(slug);
  const lang = getLearnLanguage();
  const ui = LEARN_UI[lang] || LEARN_UI.en;
  const isEn = lang === 'en';

  if (!term) {
    return `
      <div class="learn-page-wrapper glossary-detail-wrapper">
        <div class="container" style="padding:var(--space-16) 0;text-align:center;">
          <h1 style="font-size:var(--text-4xl);margin-bottom:var(--space-4);color:var(--color-heading);">
            ${isEn ? 'Term Not Found' : 'पारिभाषिक शब्द फेला परेन'}
          </h1>
          <p style="color:var(--color-text-secondary);margin-bottom:var(--space-8);max-width:520px;margin-left:auto;margin-right:auto;">
            ${isEn 
              ? 'The requested financial term does not exist in our dictionary or may have moved.' 
              : 'तपाईंले खोज्नुभएको वित्तीय शब्द हाम्रो शब्दकोशमा फेला परेन वा सारिएको हुन सक्छ।'}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
            <a href="${ROUTES.LEARN_GLOSSARY}" class="btn btn-primary">${isEn ? 'Browse All Terms' : 'सबै शब्दहरू हेर्नुहोस्'}</a>
            <a href="${ROUTES.LEARN}" class="btn btn-secondary">${ui.breadcrumbLearn}</a>
          </div>
        </div>
      </div>
    `;
  }

  const title = term.term;
  const termNp = term.termNp || term.term;
  const categoryName = term.categoryName ? (term.categoryName[lang] || term.categoryName.en) : term.categorySlug;
  const oneLineDef = term.oneLineDef ? (term.oneLineDef[lang] || term.oneLineDef.en) : '';
  const detailedExplanation = term.detailedExplanation ? (term.detailedExplanation[lang] || term.detailedExplanation.en) : '';

  const whyItMatters = term.whyItMatters ? (term.whyItMatters[lang] || term.whyItMatters.en) : '';
  const howItWorks = term.howItWorks ? (term.howItWorks[lang] || term.howItWorks.en) : null;
  const formulaObj = term.formula || null;
  const whereUsed = term.whereUsed ? (term.whereUsed[lang] || term.whereUsed.en) : [];
  const advantages = term.advantages ? (term.advantages[lang] || term.advantages.en || term.advantages) : [];
  const limitations = term.limitations ? (term.limitations[lang] || term.limitations.en || term.limitations) : [];
  const misconceptions = Array.isArray(term.misconceptions) ? term.misconceptions : [];
  const comparison = term.comparison || null;
  const summaryPoints = term.summary ? (term.summary[lang] || term.summary.en || term.summary) : [];

  const nepalHeadline = term.nepalContext && term.nepalContext.headline ? (term.nepalContext.headline[lang] || term.nepalContext.headline.en) : (isEn ? 'Nepal Financial & Regulatory Context' : 'नेपालको वित्तीय तथा कानुनी सन्दर्भ');
  const nepalBody = term.nepalContext && term.nepalContext.body ? (term.nepalContext.body[lang] || term.nepalContext.body.en) : '';
  const nepalKeyPoints = term.nepalContext && term.nepalContext.keyPoints 
    ? (Array.isArray(term.nepalContext.keyPoints) 
        ? term.nepalContext.keyPoints 
        : (term.nepalContext.keyPoints[lang] || term.nepalContext.keyPoints.en || []))
    : [];
  
  const practicalScenario = term.practicalExample && term.practicalExample.scenario ? (term.practicalExample.scenario[lang] || term.practicalExample.scenario.en) : '';
  const practicalTakeaway = term.practicalExample && term.practicalExample.takeaway ? (term.practicalExample.takeaway[lang] || term.practicalExample.takeaway.en) : '';
  
  const relatedConcepts = Array.isArray(term.relatedConcepts) ? term.relatedConcepts : [];
  const relatedLessons = Array.isArray(term.relatedLessons) ? term.relatedLessons : [];
  const relatedGuides = Array.isArray(term.relatedGuides) ? term.relatedGuides : [];
  const relatedCalculators = Array.isArray(term.relatedCalculators) ? term.relatedCalculators : [];
  const faqs = Array.isArray(term.faqs) ? term.faqs : [];
  const whereSeen = Array.isArray(term.whereSeen) ? term.whereSeen : [];
  const isSaved = isGlossaryTermSaved(term.slug);

  return `
    <div class="learn-page-wrapper glossary-detail-page">
      <!-- 1. Top Breadcrumbs Bar & Language Switch -->
      <div class="glossary-top-bar">
        <div class="container glossary-top-container">
          <nav class="glossary-breadcrumb" aria-label="Breadcrumb">
            <a href="${ROUTES.HOME}">${ui.breadcrumbHome}</a>
            <span class="breadcrumb-sep">/</span>
            <a href="${ROUTES.LEARN}">${ui.breadcrumbLearn}</a>
            <span class="breadcrumb-sep">/</span>
            <a href="${ROUTES.LEARN_GLOSSARY}">${isEn ? 'Glossary' : 'शब्दकोश'}</a>
            <span class="breadcrumb-sep">/</span>
            <a href="${ROUTES.LEARN_GLOSSARY}?category=${term.categorySlug}">${categoryName}</a>
            <span class="breadcrumb-sep">/</span>
            <span class="breadcrumb-current">${title}</span>
          </nav>
          
          <div class="glossary-top-controls">
            <div class="lang-switch-capsule" role="group" aria-label="Select glossary language">
              <button type="button" class="lang-btn ${lang === 'en' ? 'active' : ''}" data-glossary-lang="en" aria-pressed="${lang === 'en'}">EN</button>
              <button type="button" class="lang-btn ${lang === 'np' ? 'active' : ''}" data-glossary-lang="np" aria-pressed="${lang === 'np'}">नेपाली</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Layout Container -->
      <div class="container glossary-detail-main">
        <article class="glossary-article">
          <!-- 2. Header & Term Identity -->
          <header class="glossary-term-header">
            <div class="glossary-term-meta-badges">
              <a href="${ROUTES.LEARN_GLOSSARY}?category=${term.categorySlug}" class="glossary-cat-chip">
                ${categoryName}
              </a>
              <span class="glossary-letter-pill">Letter ${term.letter}</span>
              ${term.abbreviation ? `<span class="glossary-abbr-pill">${term.abbreviation}</span>` : ''}
              <span class="glossary-diff-pill">${term.difficulty || 'Beginner'}</span>
              <span class="glossary-time-pill">${term.readTime || '3 min read'}</span>
            </div>

            <div class="glossary-title-row">
              <div>
                <h1 class="glossary-term-title">${title}</h1>
                ${termNp !== title ? `<div class="glossary-term-nepali-title">${termNp}</div>` : ''}
              </div>

              <!-- Action Buttons -->
              <div class="glossary-header-actions">
                <button 
                  type="button" 
                  class="btn-icon-capsule" 
                  id="glossary-speak-btn" 
                  title="${isEn ? 'Listen to pronunciation' : 'उच्चारण सुन्नुहोस्'}"
                  aria-label="${isEn ? 'Pronounce term' : 'उच्चारण सुन्नुहोस्'}"
                >
                  ${ICONS.volume2}
                </button>
                <button 
                  type="button" 
                  class="btn-icon-capsule ${isSaved ? 'bookmarked' : ''}" 
                  id="glossary-bookmark-btn" 
                  title="${isSaved ? (isEn ? 'Saved' : 'सुरक्षित गरिएको') : (isEn ? 'Save Term' : 'शब्द सुरक्षित गर्नुहोस्')}"
                  aria-label="${isEn ? 'Bookmark term' : 'शब्द सुरक्षित गर्नुहोस्'}"
                >
                  ${isSaved ? ICONS.bookmarkFilled : ICONS.bookmark}
                </button>
                <button 
                  type="button" 
                  class="btn-icon-capsule" 
                  id="glossary-share-btn" 
                  title="${isEn ? 'Share definition' : 'सेयर गर्नुहोस्'}"
                  aria-label="${isEn ? 'Share definition' : 'सेयर गर्नुहोस्'}"
                >
                  ${ICONS.share}
                </button>
              </div>
            </div>
          </header>

          <!-- 3. One-line Definition Callout -->
          <section class="glossary-section glossary-def-section" aria-label="One-line definition">
            <div class="glossary-definition-card">
              <div class="def-badge">${isEn ? 'Plain-Language Definition' : 'सरल परिभाषा'}</div>
              <p class="def-lead-text">${oneLineDef}</p>
            </div>
          </section>

          <!-- 4. Detailed Explanation -->
          <section class="glossary-section glossary-detail-section" aria-label="Detailed Explanation">
            <h2 class="glossary-section-heading">${isEn ? 'Detailed Explanation' : 'विस्तृत व्याख्या'}</h2>
            <div class="glossary-prose">
              <p>${detailedExplanation}</p>
            </div>
          </section>

          <!-- 4b. Why It Matters -->
          ${whyItMatters ? `
            <section class="glossary-section glossary-why-section" aria-label="Why It Matters">
              <h2 class="glossary-section-heading">${isEn ? 'Why It Matters to You' : 'यो किन महत्त्वपूर्ण छ?'}</h2>
              <div class="glossary-why-card">
                <p class="why-body-text">${whyItMatters}</p>
              </div>
            </section>
          ` : ''}

          <!-- 4c. How It Works -->
          ${howItWorks ? `
            <section class="glossary-section glossary-how-section" aria-label="How It Works">
              <h2 class="glossary-section-heading">${isEn ? 'How It Works & Operating Mechanism' : 'यसले कसरी काम गर्छ?'}</h2>
              <div class="glossary-how-card">
                ${typeof howItWorks === 'string' ? `<p class="how-summary-text">${howItWorks}</p>` : `
                  ${howItWorks.summary ? `<p class="how-summary-text">${howItWorks.summary[lang] || howItWorks.summary.en || howItWorks.summary}</p>` : ''}
                  ${Array.isArray(howItWorks.steps) && howItWorks.steps.length > 0 ? `
                    <ol class="how-steps-list">
                      ${howItWorks.steps.map((st, sidx) => `
                        <li class="how-step-item">
                          <span class="how-step-num">${sidx + 1}</span>
                          <div class="how-step-content">
                            <strong class="how-step-title">${st.title ? (st.title[lang] || st.title.en || st.title) : ''}</strong>
                            <p class="how-step-desc">${st.desc ? (st.desc[lang] || st.desc.en || st.desc) : ''}</p>
                          </div>
                        </li>
                      `).join('')}
                    </ol>
                  ` : ''}
                `}
              </div>
            </section>
          ` : ''}

          <!-- 4d. Mathematical Formula (if applicable) -->
          ${formulaObj ? `
            <section class="glossary-section glossary-formula-section" aria-label="Formula and Calculation">
              <h2 class="glossary-section-heading">Formula & Calculation</h2>
              <div class="glossary-formula-card">
                <div class="formula-equation-box">
                  <code>${formulaObj.equation || formulaObj.formula}</code>
                </div>
                ${formulaObj.explanation ? `
                  <p class="formula-explanation-text">${formulaObj.explanation[lang] || formulaObj.explanation.en || formulaObj.explanation}</p>
                ` : ''}
                ${Array.isArray(formulaObj.variables) && formulaObj.variables.length > 0 ? `
                  <div class="formula-vars-wrap">
                    <span class="formula-vars-title">Where:</span>
                    <ul class="formula-vars-list">
                      ${formulaObj.variables.map(v => {
                        const sym = v.symbol || v.name || '';
                        const desc = v.label ? (v.label[lang] || v.label.en || v.label) : (v.desc ? (v.desc[lang] || v.desc.en || v.desc) : '');
                        return `<li><strong>${sym}</strong> = ${desc}</li>`;
                      }).join('')}
                    </ul>
                  </div>
                ` : ''}
                ${formulaObj.exampleCalc ? `
                  <div class="formula-example-box">
                    <span class="formula-example-title">Practical Calculation Example:</span>
                    <p class="formula-example-scenario">${typeof formulaObj.exampleCalc === 'object' ? (formulaObj.exampleCalc[lang] || formulaObj.exampleCalc.en || '') : formulaObj.exampleCalc}</p>
                  </div>
                ` : (formulaObj.example ? `
                  <div class="formula-example-box">
                    <span class="formula-example-title">Practical Calculation Example:</span>
                    <p class="formula-example-scenario">${formulaObj.example.scenario ? (formulaObj.example.scenario[lang] || formulaObj.example.scenario.en) : ''}</p>
                    <div class="formula-example-math">
                      <code>${formulaObj.example.calculation ? (formulaObj.example.calculation[lang] || formulaObj.example.calculation.en) : ''}</code>
                    </div>
                    ${formulaObj.example.result ? `
                      <div class="formula-example-result">
                        <strong>Result:</strong> ${formulaObj.example.result[lang] || formulaObj.example.result.en}
                      </div>
                    ` : ''}
                  </div>
                ` : '')}
              </div>
            </section>
          ` : ''}

          <!-- 4e. Where Commonly Used -->
          ${Array.isArray(whereUsed) && whereUsed.length > 0 ? `
            <section class="glossary-section glossary-whereused-section" aria-label="Where Commonly Used">
              <h2 class="glossary-section-heading">${isEn ? 'Where It Is Commonly Used' : 'यो कहाँ प्रयोग हुन्छ?'}</h2>
              <div class="glossary-whereused-card">
                <ul class="whereused-list">
                  ${whereUsed.map(item => `
                    <li>
                      <span class="point-icon">${ICONS.checkCircle}</span>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </section>
          ` : ''}

          <!-- 4f. Advantages & Limitations -->
          ${(advantages.length > 0 || limitations.length > 0) ? `
            <section class="glossary-section glossary-proscons-section" aria-label="Advantages and Limitations">
              <h2 class="glossary-section-heading">${isEn ? 'Key Advantages & Limitations' : 'फाइदा तथा सीमितताहरू'}</h2>
              <div class="glossary-proscons-grid">
                ${advantages.length > 0 ? `
                  <div class="proscons-col pros">
                    <h3 class="proscons-header">${isEn ? 'Key Advantages' : 'मुख्य फाइदाहरू'}</h3>
                    <ul class="proscons-list">
                      ${advantages.map(adv => `
                        <li><span class="point-icon green">${ICONS.checkCircle}</span><span>${adv}</span></li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
                ${limitations.length > 0 ? `
                  <div class="proscons-col cons">
                    <h3 class="proscons-header">${isEn ? 'Limitations & Risks' : 'सीमितता तथा जोखिमहरू'}</h3>
                    <ul class="proscons-list">
                      ${limitations.map(lim => `
                        <li><span class="point-icon amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></span><span>${lim}</span></li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            </section>
          ` : ''}

          <!-- 4g. Common Misconceptions -->
          ${misconceptions.length > 0 ? `
            <section class="glossary-section glossary-misconceptions-section" aria-label="Common Misconceptions">
              <h2 class="glossary-section-heading">${isEn ? 'Common Misconceptions & Beginner Traps' : 'सुरुवाती लगानीकर्ताका भ्रम र यथार्थ'}</h2>
              <div class="glossary-misconceptions-grid">
                ${misconceptions.map(m => {
                  const myth = m.myth ? (m.myth[lang] || m.myth.en || m.myth) : '';
                  const reality = m.reality ? (m.reality[lang] || m.reality.en || m.reality) : '';
                  return `
                    <div class="misconception-card">
                      <div class="misconception-row myth">
                        <span class="misconception-badge myth-badge">${isEn ? 'Myth' : 'भ्रम'}</span>
                        <p class="misconception-text">${myth}</p>
                      </div>
                      <div class="misconception-row reality">
                        <span class="misconception-badge reality-badge">${isEn ? 'Reality' : 'यथार्थ'}</span>
                        <p class="misconception-text">${reality}</p>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </section>
          ` : ''}

          <!-- 4h. Comparison Table (where applicable) -->
          ${comparison ? `
            <section class="glossary-section glossary-comparison-section" aria-label="Comparison Table">
              <h2 class="glossary-section-heading">${comparison.title ? (comparison.title[lang] || comparison.title.en) : (isEn ? 'Comparison Analysis' : 'तुलनात्मक विश्लेषण')}</h2>
              ${comparison.subtitle ? `<p class="glossary-section-subhead">${comparison.subtitle[lang] || comparison.subtitle.en}</p>` : ''}
              <div class="comparison-table-wrap">
                <table class="glossary-comparison-table">
                  <thead>
                    <tr>
                      <th>${comparison.featureHeader ? (comparison.featureHeader[lang] || comparison.featureHeader.en) : (isEn ? 'Feature / Dimension' : 'विशेषता / आधार')}</th>
                      <th>${comparison.colA ? (comparison.colA[lang] || comparison.colA.en) : ''}</th>
                      <th>${comparison.colB ? (comparison.colB[lang] || comparison.colB.en) : ''}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${(comparison.rows || []).map(r => `
                      <tr>
                        <td class="feature-cell">${r.feature ? (r.feature[lang] || r.feature.en || r.feature) : ''}</td>
                        <td>${r.valA ? (r.valA[lang] || r.valA.en || r.valA) : ''}</td>
                        <td>${r.valB ? (r.valB[lang] || r.valB.en || r.valB) : ''}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </section>
          ` : ''}

          <!-- 5. Nepal Context Section -->
          <section class="glossary-section glossary-nepal-section" aria-label="Nepal Context">
            <div class="glossary-nepal-card">
              <div class="nepal-card-header">
                <div class="nepal-badge-icon">${ICONS.nepalFlag}</div>
                <div>
                  <span class="nepal-kicker">${isEn ? 'Nepal Practical Context' : 'नेपालको सन्दर्भ'}</span>
                  <h3 class="nepal-headline">${nepalHeadline}</h3>
                </div>
              </div>
              <p class="nepal-body-text">${nepalBody}</p>
              ${nepalKeyPoints.length > 0 ? `
                <div class="nepal-key-points">
                  <span class="key-points-title">${isEn ? 'Key Nepal Highlights:' : 'मुख्य बुँदाहरू:'}</span>
                  <ul class="nepal-points-list">
                    ${nepalKeyPoints.map(point => `
                      <li>
                        <span class="point-icon">${ICONS.checkCircle}</span>
                        <span>${typeof point === 'object' && point !== null ? (point[lang] || point.en || '') : point}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}
              <div class="nepal-context-advisory" style="margin-top:var(--space-4);padding-top:var(--space-3);border-top:1px dashed var(--color-border);font-size:var(--text-xs);color:var(--color-text-tertiary);line-height:1.5;">
                <strong>${isEn ? 'Regulatory Note:' : 'नियमनकारी जानकारी:'}</strong> ${isEn ? 'Statutory rules, tax brackets, and official limits are subject to periodic amendment in annual Nepal Finance Acts and NRB circulars. Always verify current gazetted regulations.' : 'कानुनी कर दर, नियमनकारी शुल्क तथा सीमाहरू वर्तमान अभ्यासमा आधारित छन् र वार्षिक आर्थिक ऐन तथा परिपत्रहरू अनुसार परिवर्तन हुन सक्छन्। पछिल्लो आधिकारिक निर्देशन हेर्नुहोस्।'}
              </div>
            </div>
          </section>

          <!-- 6. Practical Real-World Example -->
          <section class="glossary-section glossary-example-section" aria-label="Practical Example">
            <h2 class="glossary-section-heading">${isEn ? 'Real-World Practical Scenario' : 'व्यावहारिक उदाहरण'}</h2>
            <div class="glossary-example-card">
              <div class="example-scenario-box">
                <span class="example-label">${isEn ? 'The Scenario:' : 'घटनाक्रम:'}</span>
                <p class="example-narrative">${practicalScenario}</p>
              </div>
              ${practicalTakeaway ? `
                <div class="example-takeaway-box">
                  <span class="takeaway-label">${isEn ? 'Key Takeaway:' : 'मुख्य निष्कर्ष:'}</span>
                  <p class="takeaway-text">${practicalTakeaway}</p>
                </div>
              ` : ''}
            </div>
          </section>

          <!-- 6b. Key Takeaways & Summary -->
          ${Array.isArray(summaryPoints) && summaryPoints.length > 0 ? `
            <section class="glossary-section glossary-summary-section" aria-label="Key Takeaways Summary">
              <h2 class="glossary-section-heading">${isEn ? 'Key Takeaways & Summary' : 'मुख्य निष्कर्ष तथा सारसंक्षेप'}</h2>
              <div class="glossary-summary-card">
                <ul class="summary-bullets-list">
                  ${summaryPoints.map(point => `
                    <li class="summary-bullet-item">
                      <span class="point-icon">${ICONS.sparkles}</span>
                      <span>${point}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </section>
          ` : ''}

          <!-- 7. Where You've Seen This (Platform Context) -->
          ${whereSeen.length > 0 ? `
            <section class="glossary-section glossary-whereseen-section" aria-label="Where You Have Seen This">
              <h2 class="glossary-section-heading">${isEn ? 'Where You’ve Seen This Term' : 'यो शब्द कहाँ प्रयोग भएको छ?'}</h2>
              <p class="glossary-section-subhead">
                ${isEn 
                  ? 'This concept is actively referenced across the following RisePaisa lessons, guides, and interactive tools:' 
                  : 'यो अवधारणा RisePaisa का निम्न पाठ, निर्देशिका र क्याल्कुलेटरहरूमा प्रत्यक्ष प्रयोग गरिएको छ:'}
              </p>
              <div class="whereseen-grid">
                ${whereSeen.map(item => `
                  <a href="${item.url}" class="whereseen-card">
                    <span class="whereseen-type-badge ${item.type}">${item.type.toUpperCase()}</span>
                    <span class="whereseen-title">${item.title}</span>
                    <span class="whereseen-arrow">${ICONS.arrowRight}</span>
                  </a>
                `).join('')}
              </div>
            </section>
          ` : ''}

          <!-- 8. Related Concepts (Glossary Cross-Links) -->
          ${relatedConcepts.length > 0 ? `
            <section class="glossary-section glossary-concepts-section" aria-label="Related Financial Concepts">
              <h2 class="glossary-section-heading">${isEn ? 'Connected Financial Concepts' : 'सम्बन्धित वित्तीय अवधारणाहरू'}</h2>
              <div class="concepts-chips-cluster">
                ${relatedConcepts.map(c => `
                  <a href="${ROUTES.LEARN_GLOSSARY_TERM(c.slug)}" class="concept-glossary-chip">
                    <span class="concept-dot"></span>
                    <span class="concept-name">${c.name}</span>
                    <span class="concept-sub">${isEn ? 'Glossary' : 'शब्दकोश'}</span>
                  </a>
                `).join('')}
              </div>
            </section>
          ` : ''}

          <!-- 9. Related Learning (Lessons, Guides, Calculators) -->
          <section class="glossary-section glossary-ecosystem-section" aria-label="Deepen Your Learning">
            <h2 class="glossary-section-heading">${isEn ? 'Apply & Deepen Your Understanding' : 'ज्ञानलाई व्यवहारमा उतार्नुहोस्'}</h2>
            <div class="ecosystem-cards-grid">
              <!-- Lessons Column -->
              ${relatedLessons.length > 0 ? `
                <div class="ecosystem-col">
                  <div class="ecosystem-col-header">
                    <span class="ecosystem-type-icon">${ICONS.book}</span>
                    <h3>${isEn ? 'Related Lessons' : 'सम्बन्धित पाठहरू'}</h3>
                  </div>
                  <div class="ecosystem-items-list">
                    ${relatedLessons.map(l => `
                      <a href="/learn/${l.categorySlug}/${l.slug}" class="ecosystem-link-card">
                        <span class="eco-card-title">${l.title}</span>
                        <span class="eco-card-action">${isEn ? 'Start Lesson' : 'पाठ सुरु गर्नुहोस्'} →</span>
                      </a>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Guides Column -->
              ${relatedGuides.length > 0 ? `
                <div class="ecosystem-col">
                  <div class="ecosystem-col-header">
                    <span class="ecosystem-type-icon">${ICONS.compass}</span>
                    <h3>${isEn ? 'Cornerstone Guides' : 'विस्तृत निर्देशिकाहरू'}</h3>
                  </div>
                  <div class="ecosystem-items-list">
                    ${relatedGuides.map(g => `
                      <a href="${ROUTES.LEARN_GUIDES}/${g.slug}" class="ecosystem-link-card">
                        <span class="eco-card-title">${g.title}</span>
                        <span class="eco-card-action">${isEn ? 'Read Guide' : 'निर्देशिका पढ्नुहोस्'} →</span>
                      </a>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Calculators Column -->
              ${relatedCalculators.length > 0 ? `
                <div class="ecosystem-col">
                  <div class="ecosystem-col-header">
                    <span class="ecosystem-type-icon">${ICONS.calculator}</span>
                    <h3>${isEn ? 'Interactive Tools' : 'सम्बन्धित क्याल्कुलेटर'}</h3>
                  </div>
                  <div class="ecosystem-items-list">
                    ${relatedCalculators.map(c => `
                      <a href="/calculators/${c.slug}" class="ecosystem-link-card calculator-bridge">
                        <span class="eco-card-title">${c.name}</span>
                        <span class="eco-card-action">${isEn ? 'Calculate Now' : 'हिसाब गर्नुहोस्'} →</span>
                      </a>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </section>

          <!-- 10. Frequently Asked Questions (Accordion) -->
          ${faqs.length > 0 ? `
            <section class="glossary-section glossary-faqs-section" aria-label="Frequently Asked Questions">
              <h2 class="glossary-section-heading">${isEn ? 'Frequently Asked Questions' : 'प्रायः सोधिने प्रश्नहरू'}</h2>
              <div class="glossary-faqs-accordion" id="glossary-faqs">
                ${faqs.map((faq, idx) => {
                  const qObj = faq.question || faq.q || {};
                  const aObj = faq.answer || faq.a || {};
                  const q = typeof qObj === 'string' ? qObj : (qObj[lang] || qObj.en || '');
                  const a = typeof aObj === 'string' ? aObj : (aObj[lang] || aObj.en || '');
                  return `
                    <div class="glossary-faq-item ${idx === 0 ? 'expanded' : ''}" data-faq-index="${idx}">
                      <button 
                        type="button" 
                        class="glossary-faq-trigger" 
                        aria-expanded="${idx === 0 ? 'true' : 'false'}"
                        aria-controls="faq-ans-${idx}"
                        id="faq-btn-${idx}"
                      >
                        <span class="faq-question-text">${q}</span>
                        <span class="faq-toggle-icon">${ICONS.chevronDown}</span>
                      </button>
                      <div 
                        class="glossary-faq-panel" 
                        id="faq-ans-${idx}" 
                        role="region" 
                        aria-labelledby="faq-btn-${idx}"
                        style="${idx === 0 ? 'display:block;' : 'display:none;'}"
                      >
                        <p class="faq-answer-text">${a}</p>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </section>
          ` : ''}

          <!-- 11. Continue Learning Footer Banner -->
          <div class="glossary-next-banner">
            <div class="next-banner-content">
              <h3>${isEn ? 'Explore More of the RisePaisa Financial Dictionary' : 'RisePaisa वित्तीय शब्दकोश थप अन्वेषण गर्नुहोस्'}</h3>
              <p>${isEn 
                ? 'Over 30+ core terms designed specifically for Nepal’s personal finance, NEPSE stock market, and banking ecosystem.' 
                : 'नेपालको व्यक्तिगत वित्त, सेयर बजार र बैंकिङ प्रणालीका लागि तयार पारिएका ३० भन्दा बढी आधारभूत पारिभाषिक शब्दहरू।'}
              </p>
            </div>
            <div class="next-banner-actions">
              <a href="${ROUTES.LEARN_GLOSSARY}" class="btn btn-primary">${isEn ? 'Back to All Terms' : 'सबै शब्दहरूमा फर्कनुहोस्'}</a>
              <a href="${ROUTES.LEARN}" class="btn btn-secondary">${ui.breadcrumbLearn}</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  `;
}

export function initLearnGlossaryDetailPage(termSlug) {
  const slug = typeof termSlug === 'object' && termSlug !== null ? (termSlug.slug || termSlug[1] || '') : (termSlug || '');
  const term = getGlossaryTermBySlug(slug);

  if (!term) return;

  const lang = getLearnLanguage();
  const isEn = lang === 'en';

  // 1. Record Recent View in Learn tracking
  try {
    recordRecentView({
      id: `glossary-${term.slug}`,
      type: 'glossary',
      slug: term.slug,
      title: term.term,
      categorySlug: term.categorySlug,
      timestamp: Date.now()
    });
  } catch (e) {
    // Ignore storage issues
  }

  // 2. SEO Title, Description, Canonical & JSON-LD DefinedTerm Schema
  const canonicalUrl = buildCanonicalUrl(ROUTES.LEARN_GLOSSARY_TERM(term.slug));
  document.title = `${term.term} - Meaning, Practical Example & Nepal Context | RisePaisa Glossary`;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = term.oneLineDef.en;

  // 3. Audio Pronunciation (SpeechSynthesis with fallback toast)
  const speakBtn = document.getElementById('glossary-speak-btn');
  if (speakBtn) {
    speakBtn.addEventListener('click', () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(term.term);
        utterance.rate = 0.9;
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
      } else {
        showMicroToast(isEn ? `Pronunciation: "${term.term}"` : `उच्चारण: "${term.term}"`);
      }
    });
  }

  // 4. Bookmark / Save Term
  const bookmarkBtn = document.getElementById('glossary-bookmark-btn');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', () => {
      const nowSaved = toggleSavedGlossaryTerm(term.slug);
      bookmarkBtn.classList.toggle('bookmarked', nowSaved);
      bookmarkBtn.innerHTML = nowSaved ? ICONS.bookmarkFilled : ICONS.bookmark;
      showMicroToast(
        nowSaved 
          ? (isEn ? 'Term saved to your library' : 'शब्द तपाईंको लाइब्रेरीमा सुरक्षित गरियो')
          : (isEn ? 'Term removed from saved' : 'शब्द हटाइयो')
      );
    });
  }

  // 5. Share Term
  const shareBtn = document.getElementById('glossary-share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: `${term.term} - RisePaisa Finance Glossary`,
        text: term.oneLineDef[lang] || term.oneLineDef.en,
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (e) {
          // User cancelled
        }
      } else {
        try {
          await navigator.clipboard.writeText(window.location.href);
          showMicroToast(isEn ? 'Link copied to clipboard!' : 'लिङ्क कपी गरियो!');
        } catch (e) {
          showMicroToast(window.location.href);
        }
      }
    });
  }

  // 6. Language Switch Buttons
  const langBtns = document.querySelectorAll('[data-glossary-lang]');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-glossary-lang');
      setLearnLanguage(targetLang);
      // Re-render and re-init detail page smoothly
      const appEl = document.getElementById('app');
      if (appEl) {
        appEl.innerHTML = renderLearnGlossaryDetailPage(slug);
        initLearnGlossaryDetailPage(slug);
      }
    });
  });

  // 7. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.glossary-faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.glossary-faq-trigger');
    const panel = item.querySelector('.glossary-faq-panel');
    if (trigger && panel) {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        
        // Close others in accordion
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('expanded');
            const otherTrig = other.querySelector('.glossary-faq-trigger');
            const otherPanel = other.querySelector('.glossary-faq-panel');
            if (otherTrig) otherTrig.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.style.display = 'none';
          }
        });

        if (isExpanded) {
          item.classList.remove('expanded');
          trigger.setAttribute('aria-expanded', 'false');
          panel.style.display = 'none';
        } else {
          item.classList.add('expanded');
          trigger.setAttribute('aria-expanded', 'true');
          panel.style.display = 'block';
        }
      });
    }
  });

  // 8. Tooltip hydration across text
  try {
    initGlossaryTooltips();
  } catch (e) {
    // Ignore
  }
}

function showMicroToast(message) {
  let toast = document.getElementById('glossary-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'glossary-toast';
    toast.className = 'glossary-micro-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(window.__glossaryToastTimer);
  window.__glossaryToastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2400);
}

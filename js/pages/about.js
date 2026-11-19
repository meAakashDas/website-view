// ==============================================
// RisePaisa | About Page (Apple Minimal UI & iOS Liquid Glass)
// ==============================================
import { ICONS, setPageMeta, getWhatsApp } from '../components.js';
import { ROUTES } from '../routes.js';

export function renderAboutPage() {
  setPageMeta(
    'About RisePaisa: Financial Education for Nepal',
    'RisePaisa is an independent financial education platform founded by Aakash Das, providing structured masterclasses, free calculators, and practical guides for Nepal.',
    ROUTES.ABOUT
  );

  return `
    <div class="about-page-wrap">
      <!-- 1. Hero Section -->
      <section class="about-hero" id="about-hero">
        <div class="container">
          <div class="about-hero-inner">
            <div class="about-eyebrow-pill">
              <span class="about-pill-flag">🇳🇵</span>
              <span class="about-pill-text">Independent Financial Literacy for Nepal</span>
            </div>
            <h1 class="about-hero-title">Clarity, Research &amp; Independence in Nepalese Finance</h1>
            <p class="about-hero-lead">
              Practical financial education, verified statutory research, and 12 free mathematical calculators built specifically for Nepal.
            </p>
            <div class="about-hero-pill-strip">
              <div class="about-spec-pill">
                <span class="about-spec-dot"></span>
                <span>12 Free Public Calculators</span>
              </div>
              <div class="about-spec-pill">
                <span class="about-spec-dot"></span>
                <span>Statutory Sources (NRB, SEBON, IRD)</span>
              </div>
              <div class="about-spec-pill">
                <span class="about-spec-dot"></span>
                <span>Zero Affiliate Tips or Speculation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Our Story (Editorial Two-Column Layout) -->
      <section class="section about-story-section" id="about-story">
        <div class="container">
          <div class="about-story-layout">
            <!-- Left: Editorial Perspective & Callout -->
            <div class="about-story-aside">
              <span class="section-eyebrow">Origins &amp; Grounding</span>
              <h2 class="about-section-heading">Why We Founded RisePaisa</h2>
              <div class="about-story-quote-card">
                <p class="about-quote-text">
                  "Financial education in Nepal should not be fragmented across social media rumors, speculative trading tips, or dense statutory gazettes."
                </p>
                <div class="about-quote-author">
                  <span class="about-author-name">Aakash Das</span>
                  <span class="about-author-role">Founder, RisePaisa</span>
                </div>
              </div>
            </div>

            <!-- Right: Editorial Narrative Content -->
            <div class="about-story-main">
              <div class="about-narrative-card">
                <p class="about-lead-para">
                  <strong>RisePaisa is a Nepal-focused financial education platform founded by Aakash Das in Kathmandu.</strong>
                </p>
                <p>
                  The platform was created to address a clear, everyday challenge: individuals across Nepal and in the diaspora want to build savings, understand the share market, and plan for their financial future, but often encounter fragmented explanations, speculative social media tips, and dense legal text.
                </p>
                <p>
                  RisePaisa brings structure and clarity to personal finance in Nepal. We explain how money works under Nepalese regulations, covering personal budgeting, NEPSE stock investing, progressive income tax slabs, and banking products. Our goal is to translate financial concepts into practical, step-by-step systems.
                </p>
                <p>
                  We believe financial literacy is not an elite luxury or a get-rich-quick formula. It is an essential life skill that equips every Nepali earner to make confident, sovereign, and well-researched financial choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Mission & Educational Philosophy -->
      <section class="section section-alt about-mission-section" id="about-mission">
        <div class="container">
          <div class="about-section-header">
            <span class="section-eyebrow">Purpose &amp; Direction</span>
            <h2 class="about-section-heading">Mission &amp; Educational Philosophy</h2>
            <p class="about-section-sub">
              Guiding learners with practical, research-backed financial education tailored to Nepal's regulatory landscape.
            </p>
          </div>

          <div class="about-mission-grid">
            <!-- Mission Card -->
            <div class="about-pillar-card">
              <div class="about-card-top">
                <div class="about-icon-badge">
                  ${ICONS.target}
                </div>
                <span class="about-card-badge">Our Mission</span>
              </div>
              <h3 class="about-pillar-title">Democratize Practical Financial Knowledge</h3>
              <p class="about-pillar-desc">
                To make financial knowledge in Nepal clear, practical, and accessible so every Nepali earner can make informed, independent money decisions.
              </p>
              <ul class="about-checklist">
                <li>
                  <span class="about-check-icon">${ICONS.check}</span>
                  <div class="about-check-text">
                    <strong>Plain-Language Statutory Clarity:</strong> Explain complex statutory rules in straightforward, accessible language.
                  </div>
                </li>
                <li>
                  <span class="about-check-icon">${ICONS.check}</span>
                  <div class="about-check-text">
                    <strong>100% Nepal-Centric Architecture:</strong> Focus 100% on Nepal's regulatory and financial framework.
                  </div>
                </li>
                <li>
                  <span class="about-check-icon">${ICONS.check}</span>
                  <div class="about-check-text">
                    <strong>Objective Analytical Tools:</strong> Equip learners with objective analytical tools rather than speculative tips.
                  </div>
                </li>
              </ul>
            </div>

            <!-- Vision / Philosophy Card -->
            <div class="about-pillar-card">
              <div class="about-card-top">
                <div class="about-icon-badge">
                  ${ICONS.eye}
                </div>
                <span class="about-card-badge">Our Philosophy</span>
              </div>
              <h3 class="about-pillar-title">Research-Backed, Independent Rigor</h3>
              <p class="about-pillar-desc">
                To establish dependable, high-quality financial education where financial literacy is treated as an essential practical life skill.
              </p>
              <ul class="about-checklist">
                <li>
                  <span class="about-check-icon">${ICONS.check}</span>
                  <div class="about-check-text">
                    <strong>Primary Statutory Sources:</strong> Base all research on primary statutory sources (NRB, SEBON, IRD, CDSC).
                  </div>
                </li>
                <li>
                  <span class="about-check-icon">${ICONS.check}</span>
                  <div class="about-check-text">
                    <strong>Public Mathematical Engines:</strong> Provide 12 verified mathematical calculators free for public use.
                  </div>
                </li>
                <li>
                  <span class="about-check-icon">${ICONS.check}</span>
                  <div class="about-check-text">
                    <strong>Long-Term Financial Discipline:</strong> Foster long-term financial discipline rather than get-rich-quick speculation.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Core Values Section -->
      <section class="section about-values-section" id="about-values">
        <div class="container">
          <div class="about-section-header">
            <span class="section-eyebrow">Core Standards</span>
            <h2 class="about-section-heading">What We Stand For</h2>
            <p class="about-section-sub">
              Our editorial and educational standards prioritize student clarity, accuracy, and genuine utility.
            </p>
          </div>

          <div class="about-values-grid">
            <div class="about-value-item">
              <div class="about-value-icon-box">
                ${ICONS.book}
              </div>
              <h3 class="about-value-title">Practical Over Theoretical</h3>
              <p class="about-value-text">
                Every concept is explained with realistic Nepalese Rupee figures, current fiscal year tax rules, and local market case studies.
              </p>
            </div>

            <div class="about-value-item">
              <div class="about-value-icon-box">
                ${ICONS.shield}
              </div>
              <h3 class="about-value-title">Honest &amp; Unbiased</h3>
              <p class="about-value-text">
                We do not promote speculative trading calls, stock tips, or paid affiliate recommendations. Only verified financial principles.
              </p>
            </div>

            <div class="about-value-item">
              <div class="about-value-icon-box">
                ${ICONS.compass}
              </div>
              <h3 class="about-value-title">Tailored for Nepal</h3>
              <p class="about-value-text">
                From NEPSE settlement by-laws and MeroShare to IRD income tax brackets and NRB Base Rates, content is built specifically for Nepal.
              </p>
            </div>

            <div class="about-value-item">
              <div class="about-value-icon-box">
                ${ICONS.users}
              </div>
              <h3 class="about-value-title">Transparent Authorship</h3>
              <p class="about-value-text">
                All guides, masterclasses, and calculation tools disclose their creators, review dates, and primary source documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Educational Ecosystem / Platform Offerings -->
      <section class="section section-alt about-ecosystem-section" id="about-offerings">
        <div class="container">
          <div class="about-section-header">
            <span class="section-eyebrow">Platform Ecosystem</span>
            <h2 class="about-section-heading">How RisePaisa Empowers You</h2>
            <p class="about-section-sub">
              Three integrated educational pillars built to guide Nepali earners from financial fundamentals to structured investing.
            </p>
          </div>

          <div class="about-offerings-grid">
            <div class="about-offering-card">
              <div class="about-offering-num">01</div>
              <h3 class="about-offering-title">Structured Masterclasses</h3>
              <p class="about-offering-text">
                In-depth video masterclasses covering share market fundamentals, personal wealth management, and capital market strategies in Nepali.
              </p>
              <a href="${ROUTES.COURSES}" class="about-offering-link">
                Explore Courses ${ICONS.arrowRight}
              </a>
            </div>

            <div class="about-offering-card">
              <div class="about-offering-num">02</div>
              <h3 class="about-offering-title">12 Free Calculators</h3>
              <p class="about-offering-text">
                Verified financial engines for SIP, Nepal Income Tax (FY 2082/83), EMI, NEPSE Share transactions, SWP, and Retirement planning.
              </p>
              <a href="${ROUTES.CALCULATORS}" class="about-offering-link">
                Open Calculators ${ICONS.arrowRight}
              </a>
            </div>

            <div class="about-offering-card">
              <div class="about-offering-num">03</div>
              <h3 class="about-offering-title">Research Guides &amp; Academy</h3>
              <p class="about-offering-text">
                Comprehensive step-by-step guides, statutory explainers, and financial glossary entries covering banking, demat, and investing.
              </p>
              <a href="${ROUTES.LEARN}" class="about-offering-link">
                Visit Learn Academy ${ICONS.arrowRight}
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Founder Section -->
      <section class="section about-founder-section" id="about-founder">
        <div class="container">
          <div class="about-founder-card">
            <div class="about-founder-grid">
              <!-- Left Column: Founder Photo & Visuals -->
              <div class="about-founder-media">
                <div class="about-founder-frame">
                  <img
                    src="assets/images/aakash-das-founder-risepaisa.jpg"
                    alt="Aakash Das, founder of RisePaisa"
                    class="about-founder-img"
                    loading="lazy"
                    decoding="async"
                    width="1563"
                    height="1563"
                  >
                </div>
                <div class="about-founder-caption">
                  <span class="about-founder-badge">Founder &amp; Educator</span>
                </div>
              </div>

              <!-- Right Column: Founder Information, Bio, Stats, Actions -->
              <div class="about-founder-body">
                <div class="about-founder-header">
                  <h2 class="about-founder-name">
                    <a href="${ROUTES.AAKASH_DAS}">Aakash Das</a>
                  </h2>
                  <div class="about-founder-tags">
                    <span>Founder of RisePaisa</span>
                    <span class="about-founder-sep">•</span>
                    <span>Finance Educator</span>
                    <span class="about-founder-sep">•</span>
                    <span>Content Creator</span>
                  </div>
                </div>

                <div class="about-founder-bio">
                  <p>
                    Aakash Das is the founder of RisePaisa and a finance educator and content creator focused on making personal finance and capital markets accessible for Nepali learners.
                  </p>
                  <p>
                    He created RisePaisa to replace market speculation with structured, research-backed financial education. Combining foundational financial analysis with modern web software engineering, he authored the platform's learning curriculum and designed its 12 interactive financial engines.
                  </p>
                </div>

                <div class="about-founder-pills">
                  <span class="about-bio-pill">📍 Kathmandu, Nepal</span>
                  <span class="about-bio-pill">📊 NEPSE &amp; Personal Finance</span>
                  <span class="about-bio-pill">💻 Web &amp; Financial Tools</span>
                </div>

                <!-- Action Buttons -->
                <div class="about-founder-actions">
                  <a
                    href="${ROUTES.AAKASH_DAS}"
                    class="btn btn-secondary about-founder-btn"
                  >
                    View Profile &amp; Background ${ICONS.arrowRight}
                  </a>
                  <a
                    href="https://wa.me/${getWhatsApp()}?text=${encodeURIComponent('Hi Aakash, I would like to connect and learn more about RisePaisa.')}"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-whatsapp about-founder-wa"
                  >
                    ${ICONS.whatsapp} Connect on WhatsApp
                  </a>
                  <a
                    href="${ROUTES.CONTACT}"
                    class="btn btn-ghost about-founder-ghost"
                  >
                    ${ICONS.mail} Contact RisePaisa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Educational & Risk Disclaimer -->
      <section class="section section-compact about-disclaimer-section" id="about-disclaimer">
        <div class="container container-narrow">
          <div class="about-disclaimer-card">
            <div class="about-disclaimer-header">
              <span class="about-disclaimer-icon">${ICONS.shield}</span>
              <h4>Educational &amp; Regulatory Transparency</h4>
            </div>
            <p>
              RisePaisa is an independent financial education platform and does not provide certified financial planning, tax advisory, or individual investment advice. All content, tools, and calculators are provided for informational and educational purposes only. Users should consult certified tax practitioners or licensed financial advisors before making substantial financial commitments.
            </p>
          </div>
        </div>
      </section>

      <!-- 8. Call to Action Section -->
      <section class="section about-cta-section" id="about-cta">
        <div class="container">
          <div class="about-cta-card">
            <span class="section-eyebrow">Start Today</span>
            <h2 class="about-cta-title">Build Your Financial Knowledge with Confidence</h2>
            <p class="about-cta-sub">
              Explore structured masterclasses, research-backed guides, and 12 free financial calculators built specifically for Nepal.
            </p>
            <div class="about-cta-buttons">
              <a href="${ROUTES.COURSES}" class="btn btn-primary btn-lg">Explore Courses</a>
              <a href="${ROUTES.CALCULATORS}" class="btn btn-secondary btn-lg">Use Free Calculators</a>
            </div>
            <p class="about-cta-note">
              Have questions about our curriculum? <a href="https://wa.me/${getWhatsApp()}?text=${encodeURIComponent('Hello RisePaisa, I have a question about your courses.')}" target="_blank" rel="noopener">Chat with us on WhatsApp</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initAboutPage() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('about-animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll(
    '.about-pillar-card, .about-value-item, .about-offering-card, .about-founder-card, .about-narrative-card, .about-story-quote-card, .about-cta-card, .about-disclaimer-card, .mission-card, .value-card, .founder-card-redesign, .about-story-accent, .cta-banner'
  ).forEach(el => {
    el.classList.add('about-animate-target');
    observer.observe(el);
  });
}

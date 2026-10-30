// ==============================================
// RisePaisa | About Page (Polished & Unified Experience)
// ==============================================
import { ICONS, setPageMeta, getWhatsApp } from '../components.js';
import { ROUTES } from '../routes.js';

export function renderAboutPage() {
  setPageMeta(
    'About RisePaisa — Financial Education for Nepal',
    'RisePaisa is an independent financial education platform founded by Aakash Das, providing structured masterclasses, free calculators, and practical guides for Nepal.',
    ROUTES.ABOUT
  );

  return `
    <!-- 1. Hero Section -->
    <section class="about-hero" id="about-hero">
      <div class="container">
        <div class="hero-badge" style="margin:0 auto var(--space-5)">🇳🇵 About RisePaisa</div>
        <h1 class="about-hero-title">About RisePaisa</h1>
        <p class="about-hero-sub">
          Practical financial education, verified market research, and free analytical tools built specifically for Nepal.
        </p>
      </div>
    </section>

    <!-- 2. Our Story Section -->
    <section class="section" id="about-story">
      <div class="container container-narrow">
        <div class="about-story-accent">
          <h2 class="about-section-heading">Our Story</h2>
          <div class="about-story-content">
            <p>
              <strong>RisePaisa is a Nepal-focused financial education platform founded by Aakash Das in Kathmandu.</strong>
            </p>
            <p>
              The platform was created to address a clear, everyday challenge: individuals across Nepal and in the diaspora want to build savings, understand the share market, and plan for their financial future, but often encounter fragmented explanations, speculative social media tips, and dense legal text.
            </p>
            <p>
              RisePaisa brings structure and clarity to personal finance in Nepal. We explain how money actually works under Nepalese regulations—spanning personal budgeting, NEPSE stock investing, progressive income tax slabs, and banking products—translating financial concepts into practical, step-by-step systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Mission & Vision Section -->
    <section class="section section-alt" id="about-mission">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-10)">
          <span class="section-eyebrow">Purpose & Direction</span>
          <h2 class="about-section-heading">Mission & Educational Philosophy</h2>
          <p style="max-width:600px;margin:var(--space-3) auto 0;color:var(--color-text-secondary)">
            Guiding learners with practical, research-backed financial education tailored to Nepal's economic landscape.
          </p>
        </div>

        <div class="about-mission-grid">
          <!-- Mission Card -->
          <div class="mission-card about-enhanced-card">
            <div class="mission-card__icon-wrap">
              <span class="mission-card__icon">${ICONS.target}</span>
            </div>
            <h3>Our Mission</h3>
            <p class="mission-card-intro">
              To make financial knowledge in Nepal clear, practical, and accessible so every Nepali earner can make informed, independent money decisions.
            </p>
            <ul class="mission-checklist">
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Explain complex statutory rules in straightforward, accessible language</span>
              </li>
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Focus 100% on Nepal's regulatory and financial framework</span>
              </li>
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Equip learners with objective analytical tools rather than speculative tips</span>
              </li>
            </ul>
          </div>

          <!-- Vision Card -->
          <div class="mission-card about-enhanced-card">
            <div class="mission-card__icon-wrap">
              <span class="mission-card__icon">${ICONS.eye}</span>
            </div>
            <h3>Our Educational Approach</h3>
            <p class="mission-card-intro">
              To establish dependable, high-quality financial education where financial literacy is treated as an essential practical life skill.
            </p>
            <ul class="mission-checklist">
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Base all research on primary statutory sources (NRB, SEBON, IRD, CDSC)</span>
              </li>
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Provide 12 verified mathematical calculators free for public use</span>
              </li>
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Foster long-term financial discipline rather than get-rich-quick speculation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Core Values Section -->
    <section class="section" id="about-values">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-10)">
          <span class="section-eyebrow">Core Standards</span>
          <h2 class="about-section-heading">What We Stand For</h2>
          <p style="max-width:600px;margin:var(--space-3) auto 0;color:var(--color-text-secondary)">
            Our editorial and educational standards prioritize student clarity, accuracy, and genuine utility.
          </p>
        </div>

        <div class="about-values-grid">
          <div class="value-card about-enhanced-card">
            <div class="value-card__icon-wrap">
              <span class="value-card__icon">${ICONS.book}</span>
            </div>
            <h3>Practical Over Theoretical</h3>
            <p>Every concept is explained with realistic Nepalese Rupee figures, current fiscal year tax rules, and local market case studies.</p>
          </div>

          <div class="value-card about-enhanced-card">
            <div class="value-card__icon-wrap">
              <span class="value-card__icon">${ICONS.shield}</span>
            </div>
            <h3>Honest & Unbiased</h3>
            <p>We do not promote speculative trading calls, stock tips, or paid affiliate recommendations. Only verified financial principles.</p>
          </div>

          <div class="value-card about-enhanced-card">
            <div class="value-card__icon-wrap">
              <span class="value-card__icon">${ICONS.compass}</span>
            </div>
            <h3>Tailored for Nepal</h3>
            <p>From NEPSE settlement by-laws and MeroShare to IRD income tax brackets and NRB Base Rates, content is built specifically for Nepal.</p>
          </div>

          <div class="value-card about-enhanced-card">
            <div class="value-card__icon-wrap">
              <span class="value-card__icon">${ICONS.users}</span>
            </div>
            <h3>Transparent Authorship</h3>
            <p>All guides, masterclasses, and calculation tools disclose their creators, review dates, and primary source documents.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Founder Section -->
    <section class="section section-alt founder-section-wrapper" id="about-founder">
      <div class="container">
        <div class="founder-card-redesign">
          <div class="founder-grid-layout">
            <!-- Left Column: Founder Photo & Visuals -->
            <div class="founder-photo-col">
              <div class="founder-photo-card">
                <img
                  src="assets/images/aakash-das-founder-risepaisa.jpg"
                  alt="Aakash Das, founder of RisePaisa"
                  class="founder-photo-img"
                  loading="lazy"
                  decoding="async"
                  width="1563"
                  height="1563"
                >
                <div class="founder-photo-glow"></div>
              </div>
            </div>

            <!-- Right Column: Founder Information, Bio, Stats, Actions -->
            <div class="founder-info-col">
              <div class="founder-header-block">
                <span class="founder-badge">Founder & Educator</span>
                <h2 class="founder-name">
                  <a href="${ROUTES.AAKASH_DAS}" style="color:inherit;text-decoration:none">Aakash Das</a>
                </h2>
                <div class="founder-titles-list">
                  <span>Founder of RisePaisa</span>
                  <span class="founder-title-dot">•</span>
                  <span>Finance Educator</span>
                  <span class="founder-title-dot">•</span>
                  <span>Content Creator</span>
                </div>
              </div>

              <div class="founder-bio-block">
                <p>
                  Aakash Das is the founder of RisePaisa and a finance educator and content creator focused on making personal finance and capital markets accessible for Nepali learners.
                </p>
                <p>
                  He created RisePaisa to replace market speculation with structured, research-backed financial education. Combining foundational financial analysis with modern web software engineering, he authored the platform's learning curriculum and designed its 12 interactive financial engines.
                </p>
              </div>

              <!-- Action Buttons -->
              <div class="founder-actions-row">
                <a
                  href="${ROUTES.AAKASH_DAS}"
                  class="btn btn-secondary founder-btn-profile"
                >
                  View Profile & Background ${ICONS.arrowRight}
                </a>
                <a
                  href="https://wa.me/${getWhatsApp()}?text=${encodeURIComponent('Hi Aakash, I would like to connect and learn more about RisePaisa.')}"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-whatsapp founder-btn-primary"
                >
                  ${ICONS.whatsapp} Connect on WhatsApp
                </a>
                <a
                  href="${ROUTES.CONTACT}"
                  class="btn btn-ghost founder-btn-secondary"
                >
                  ${ICONS.mail} Contact RisePaisa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Call to Action Section -->
    <section class="section" id="about-cta">
      <div class="container">
        <div class="cta-banner">
          <h2>Start Your Financial Learning</h2>
          <p>Explore structured masterclasses, research-backed guides, and free financial calculators built for Nepal.</p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="${ROUTES.COURSES}" class="btn btn-primary btn-lg">Explore Courses</a>
            <a href="${ROUTES.CALCULATORS}" class="btn btn-secondary btn-lg">Use Free Calculators</a>
          </div>
        </div>
      </div>
    </section>
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
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.mission-card, .value-card, .founder-card-redesign, .about-story-accent, .cta-banner').forEach(el => {
    el.classList.add('about-animate-target');
    observer.observe(el);
  });
}

// ==============================================
// risePaisa | About Page (Polished & Unified Experience)
// ==============================================
import { ICONS, setPageMeta, getWhatsApp } from '../components.js';
import { ROUTES } from '../routes.js';

export function renderAboutPage() {
  setPageMeta(
    'About Us',
    "risePaisa is Nepal's trusted financial education platform. Founded by Aakash Das, we're on a mission to improve financial literacy across Nepal.",
    ROUTES.ABOUT
  );

  return `
    <!-- 1. Hero Section -->
    <section class="about-hero" id="about-hero">
      <div class="container">
        <div class="hero-badge" style="margin:0 auto var(--space-5)">🇳🇵 About risePaisa</div>
        <h1 class="about-hero-title">About risePaisa</h1>
        <p class="about-hero-sub">
          Building Nepal's most trusted financial education platform, one lesson at a time.
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
              risePaisa was built on a simple reality: people in Nepal are trying to improve their financial life, but they lack clear, reliable direction.
            </p>
            <p>
              The problem is not effort, but confusion. Scattered information, unclear advice, and no structured path make it difficult to make the right financial decisions.
            </p>
            <p>
              risePaisa brings clarity. We simplify how money works in Nepal and turn it into practical, step-by-step systems that help you earn better, manage smarter, and build real financial stability over time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subtle divider -->
    <div class="about-divider"><span></span></div>

    <!-- 3. Mission & Vision Section -->
    <section class="section" id="about-mission" style="background:var(--color-bg-alt)">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-10)">
          <h2 class="about-section-heading">Mission & Vision</h2>
          <p style="max-width:600px;margin:var(--space-3) auto 0;color:var(--color-text-secondary)">
            Guiding the future of financial literacy and empowerment across Nepal.
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
              To make financial knowledge in Nepal clear, practical, and accessible so every Nepali can make better money decisions, regardless of background or income.
            </p>
            <ul class="mission-checklist">
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Make financial education available in simple, accessible language</span>
              </li>
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Focus 100% on Nepal's financial ecosystem</span>
              </li>
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Enable confident, informed financial decisions</span>
              </li>
            </ul>
          </div>

          <!-- Vision Card -->
          <div class="mission-card about-enhanced-card">
            <div class="mission-card__icon-wrap">
              <span class="mission-card__icon">${ICONS.eye}</span>
            </div>
            <h3>Our Vision</h3>
            <p class="mission-card-intro">
              To become Nepal’s most trusted financial education platform and the standard for understanding, managing, and growing money.
            </p>
            <ul class="mission-checklist">
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Build a Nepal where financial literacy is a fundamental life skill</span>
              </li>
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Provide actionable tools, calculators, and educational roadmaps</span>
              </li>
              <li>
                <span class="mission-check-icon">${ICONS.check}</span>
                <span>Empower the next generation of Nepali investors and creators</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Subtle divider -->
    <div class="about-divider"><span></span></div>

    <!-- 4. Core Values Section -->
    <section class="section" id="about-values">
      <div class="container">
        <div class="section-header" style="text-align:center;margin-bottom:var(--space-10)">
          <h2 class="about-section-heading">What We Stand For</h2>
          <p style="max-width:600px;margin:var(--space-3) auto 0;color:var(--color-text-secondary)">
            Our principles reflect our commitment to genuine value and clarity for our students.
          </p>
        </div>

        <div class="about-values-grid">
          <div class="value-card about-enhanced-card">
            <div class="value-card__icon-wrap">
              <span class="value-card__icon">${ICONS.book}</span>
            </div>
            <h3>Practical Over Theoretical</h3>
            <p>Every concept is explained with real Nepali examples, realistic rupee figures, and actual case studies.</p>
          </div>

          <div class="value-card about-enhanced-card">
            <div class="value-card__icon-wrap">
              <span class="value-card__icon">${ICONS.shield}</span>
            </div>
            <h3>Honest & Unbiased</h3>
            <p>We don't promote get-rich-quick schemes or sponsored stock tips. Only verified financial principles.</p>
          </div>

          <div class="value-card about-enhanced-card">
            <div class="value-card__icon-wrap">
              <span class="value-card__icon">${ICONS.compass}</span>
            </div>
            <h3>Tailored for Nepal</h3>
            <p>From NEPSE rules and Meroshare to local tax slabs and banking systems, everything is built for Nepal.</p>
          </div>

          <div class="value-card about-enhanced-card">
            <div class="value-card__icon-wrap">
              <span class="value-card__icon">${ICONS.users}</span>
            </div>
            <h3>Community First</h3>
            <p>We learn together. Connect with fellow learners, ask questions, and grow your wealth alongside peers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subtle divider -->
    <div class="about-divider"><span></span></div>

    <!-- 5. Founder Section -->
    <section class="section founder-section-wrapper" id="about-founder" style="background:var(--color-bg-alt)">
      <div class="container">
        <div class="founder-card-redesign">
          <div class="founder-grid-layout">
            <!-- Left Column: Founder Photo & Visuals -->
            <div class="founder-photo-col">
              <div class="founder-photo-card">
                <img
                  src="assets/images/founder.png"
                  alt="Aakash Das | Founder of risePaisa"
                  class="founder-photo-img"
                  loading="lazy"
                  decoding="async"
                >
                <div class="founder-photo-glow"></div>
              </div>
            </div>

            <!-- Right Column: Founder Information, Bio, Stats, Actions -->
            <div class="founder-info-col">
              <div class="founder-header-block">
                <span class="founder-badge">Founder & Lead Educator</span>
                <h2 class="founder-name">Aakash Das</h2>
                <div class="founder-titles-list">
                  <span>Founder, risePaisa</span>
                  <span class="founder-title-dot">•</span>
                  <span>Financial Educator</span>
                  <span class="founder-title-dot">•</span>
                  <span>Content Creator</span>
                </div>
              </div>

              <div class="founder-bio-block">
                <p>
                  Aakash Das is building a new standard for financial education in Nepal. He founded risePaisa to address a critical gap: the absence of clear, structured financial guidance tailored to Nepal.
                </p>
                <p>
                  His approach is direct: remove confusion, focus on what works in Nepal, and teach in a way that leads to real execution rather than just knowledge.
                </p>
              </div>

              <!-- 4 Clean Statistic Cards -->
              <div class="founder-stats-grid">
                <div class="founder-stat-card">
                  <span class="founder-stat-number">500+</span>
                  <span class="founder-stat-label">Students</span>
                </div>
                <div class="founder-stat-card">
                  <span class="founder-stat-number">10K+</span>
                  <span class="founder-stat-label">Content Views</span>
                </div>
                <div class="founder-stat-card">
                  <span class="founder-stat-number">100%</span>
                  <span class="founder-stat-label">Nepal Focused</span>
                </div>
                <div class="founder-stat-card">
                  <span class="founder-stat-number">Growing</span>
                  <span class="founder-stat-label">Learning Community</span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="founder-actions-row">
                <a
                  href="https://wa.me/${getWhatsApp()}?text=${encodeURIComponent('Hi Aakash, I would like to connect and learn more about risePaisa.')}"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-whatsapp founder-btn-primary"
                >
                  ${ICONS.whatsapp} Connect on WhatsApp
                </a>
                <a
                  href="${ROUTES.CONTACT}"
                  class="btn btn-secondary founder-btn-secondary"
                >
                  ${ICONS.mail} Contact risePaisa
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
          <h2>Ready to Start Learning?</h2>
          <p>Join hundreds of Nepali youth who are taking control of their financial future with risePaisa.</p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="${ROUTES.COURSES}" class="btn btn-primary btn-lg">Explore Courses</a>
            <a href="${ROUTES.BLOG}" class="btn btn-secondary btn-lg">Read Free Articles</a>
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

// ==============================================
// risePaisa | Home Page
// ==============================================
import { getCourses } from '../data/courses.js';
import { getResources } from '../data/resources.js';
import { getArticles } from '../data/articles.js';
import { ICONS, renderCourseCard, renderResourceCard, renderArticleCard, setPageMeta, initStatCounters, getWhatsApp } from '../components.js';
import { ROUTES } from '../routes.js';

export function renderHomePage() {
  setPageMeta(null, 'Learn personal finance, stock market investing, taxation, and fintech in Nepal. Join thousands of Nepali youth building financial literacy with risePaisa.', ROUTES.HOME);

  const COURSES = getCourses();
  const RESOURCES = getResources();
  const ARTICLES = getArticles();

  const featuredCourses = COURSES.slice(0, 2);
  const featuredResources = RESOURCES.slice(0, 2);
  const latestArticles = ARTICLES.slice(0, 3);

  return `
    <!-- Hero Section -->
    <section class="hero" id="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-grid-pattern"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge animate-fade-in" style="animation-delay:0ms">
            🇳🇵 नेपालमै आधारित वित्तीय शिक्षा
          </div>
          <h1 class="animate-fade-in-up" style="animation-delay:100ms">
            risePaisa - Hamro Nepal, Hamro Arthik Uday<br><span class="accent">Rise with risePaisa.</span>
          </h1>
          <p class="hero-subtitle animate-fade-in-up" style="animation-delay:200ms">
            Nepal's most practical financial education platform. Practical NEPSE, taxation, and personal finance strategies built for real income growth in Nepal.
          </p>
          <div class="hero-actions animate-fade-in-up" style="animation-delay:300ms">
            <a href="${ROUTES.LEARN}" class="btn btn-primary btn-lg">
              Explore Academy ${ICONS.arrowRight}
            </a>
            <a href="${ROUTES.COURSES}" class="btn btn-secondary btn-lg">
              View Masterclasses
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Bar / Stats -->
    <section class="trust-bar" id="trust-section">
      <div class="container">
        <div class="trust-nepali">Real Finance for Nepal · Trusted by Nepali Youth 🇳🇵</div>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number" data-count="500" data-suffix="+">0</div>
            <div class="stat-label">Active Learners</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="10000" data-suffix="+">0</div>
            <div class="stat-label">Content Views</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="25" data-suffix="+">0</div>
            <div class="stat-label">Articles Published</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="1" data-suffix="">0</div>
            <div class="stat-label">Expert Courses</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="section" id="featured-courses">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Masterclasses</span>
          <h2>Featured Courses</h2>
          <p>Build financial control and wealth with step-by-step systems built for Nepal.</p>
        </div>
        <div class="grid-2 stagger-children" style="max-width:860px;margin:0 auto">
          ${featuredCourses.map(c => renderCourseCard(c)).join('')}
        </div>
        <div style="text-align:center;margin-top:var(--space-8)">
          <a href="${ROUTES.COURSES}" class="btn btn-secondary btn-lg">View All Courses ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- Financial Calculators Spotlight -->
    <section class="section section-alt" id="calculators-spotlight">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Smart Utilities</span>
          <h2>Financial Calculators</h2>
          <p>Model compounding growth, calculate take-home salary after taxes, and plan loan EMIs tailored to Nepal's financial laws.</p>
        </div>
        
        <div class="calc-spotlight-grid">
          <!-- SIP Card -->
          <a href="${ROUTES.CALCULATOR_SIP}" class="calc-spotlight-card">
            <div class="calc-spotlight-top">
              <div class="calc-spotlight-icon" aria-hidden="true">${ICONS.trendingUp}</div>
              <span class="calc-spotlight-badge">Compounding</span>
            </div>
            <h3>SIP & Mutual Funds</h3>
            <p>Calculate future wealth with monthly SIP contributions and compounding interest tailored for Nepal.</p>
            <div class="calc-spotlight-footer">
              <span class="calc-spotlight-cta">Launch Calculator</span>
              <span class="calc-arrow-btn" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </a>

          <!-- Income Tax Card -->
          <a href="${ROUTES.CALCULATOR_TAX}" class="calc-spotlight-card">
            <div class="calc-spotlight-top">
              <div class="calc-spotlight-icon" aria-hidden="true">${ICONS.receipt}</div>
              <span class="calc-spotlight-badge">FY 2082/83</span>
            </div>
            <h3>Salary & Income Tax</h3>
            <p>Accurate Nepal income tax deductions, SST, and SSF calculations for married and unmarried individuals.</p>
            <div class="calc-spotlight-footer">
              <span class="calc-spotlight-cta">Launch Calculator</span>
              <span class="calc-arrow-btn" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </a>

          <!-- Loan EMI Card -->
          <a href="${ROUTES.CALCULATOR_EMI}" class="calc-spotlight-card">
            <div class="calc-spotlight-top">
              <div class="calc-spotlight-icon" aria-hidden="true">${ICONS.building}</div>
              <span class="calc-spotlight-badge">Banking</span>
            </div>
            <h3>Loan EMI & Amortization</h3>
            <p>Calculate monthly installments, total interest payable, and full payment breakdown schedules.</p>
            <div class="calc-spotlight-footer">
              <span class="calc-spotlight-cta">Launch Calculator</span>
              <span class="calc-arrow-btn" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </a>
        </div>

        <div style="text-align:center;margin-top:var(--space-8)">
          <a href="${ROUTES.CALCULATORS}" class="btn btn-secondary btn-lg">Explore All 11 Calculators ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="section" id="featured-resources">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Tools & Systems</span>
          <h2>Resources</h2>
          <p>Templates, tools, and systems for financial growth.</p>
        </div>
        <div class="grid-2 stagger-children" style="max-width:860px;margin:0 auto">
          ${featuredResources.map(r => renderResourceCard(r)).join('')}
        </div>
        <div style="text-align:center;margin-top:var(--space-8)">
          <a href="${ROUTES.RESOURCES}" class="btn btn-secondary btn-lg">Explore Resources ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- Latest Articles -->
    <section class="section section-alt" id="latest-articles">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Knowledge Base</span>
          <h2>Latest Articles</h2>
          <p>Free, in-depth finance articles written for the Nepali context.</p>
        </div>
        <div class="grid-3 stagger-children">
          ${latestArticles.map(a => renderArticleCard(a)).join('')}
        </div>
        <div style="text-align:center;margin-top:var(--space-8)">
          <a href="${ROUTES.BLOG}" class="btn btn-secondary btn-lg">Read All Articles ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- About Teaser -->
    <section class="section" id="about-teaser-section">
      <div class="container">
        <div class="about-teaser">
          <div class="about-teaser-img">
            <img src="assets/images/aakash-das-founder-risepaisa.jpg" alt="Aakash Das, founder of RisePaisa" loading="lazy" decoding="async" width="500" height="500">
          </div>
          <div>
            <h2>Why risePaisa?</h2>
            <p style="font-size:var(--text-lg);margin-bottom:var(--space-4)">
              Financial education built specifically for Nepal. Different rules, different systems, different reality.
            </p>
            <p>
              risePaisa fixes that. Founded by <a href="${ROUTES.AAKASH_DAS}" style="color:var(--color-accent);font-weight:600;text-decoration:none">Aakash Das</a>, finance educator and content creator, it gives Nepali youth clear, practical knowledge to earn, manage, and invest money the right way — based on how Nepal actually works.
            </p>
            <div style="display:flex;gap:var(--space-3);align-items:center;flex-wrap:wrap;margin-top:var(--space-6)">
              <a href="${ROUTES.ABOUT}" class="btn btn-secondary">About RisePaisa ${ICONS.arrowRight}</a>
              <a href="${ROUTES.AAKASH_DAS}" class="btn btn-ghost">Meet the Founder ${ICONS.arrowRight}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section section-alt" id="final-cta">
      <div class="container">
        <div class="cta-banner">
          <h2>Start Your Financial Journey Today</h2>
          <p>Join hundreds of Nepali youth who are taking control of their financial future with risePaisa.</p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="${ROUTES.COURSES}" class="btn btn-primary btn-lg">Explore Courses</a>
            <a href="https://wa.me/${getWhatsApp()}?text=${encodeURIComponent('I want to contact you.')}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
              ${ICONS.whatsapp} Chat with Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHomePage() {
  initStatCounters();
}

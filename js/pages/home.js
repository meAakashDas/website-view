// ==============================================
// risePaisa | Home Page
// ==============================================
import { getCourses } from '../data/courses.js';
import { getResources } from '../data/resources.js';
import { getArticles } from '../data/articles.js';
import { ICONS, renderResourceCard, renderArticleCard, setPageMeta, initStatCounters, getWhatsApp, getWhatsAppPurchaseUrl } from '../components.js';
import { initHomeFloatingBuy, unmountHomeFloatingBuy } from '../floatingControls.js';
import { ROUTES } from '../routes.js';

export function renderHomePage() {
  setPageMeta(null, 'Learn personal finance, stock market investing with our flagship NEPSE course, taxation, and fintech in Nepal. Join thousands of Nepali youth building financial literacy with risePaisa.', ROUTES.HOME);

  const COURSES = getCourses();
  const nepseCourse = COURSES.find(c => c.slug === 'nepse-stock-market-basics') || COURSES[0];
  const nepseLearnUrl = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';
  const RESOURCES = getResources();
  const ARTICLES = getArticles();

  const featuredResources = RESOURCES.slice(0, 2);
  const latestArticles = ARTICLES.slice(0, 3);

  return `
    <!-- Hero Section -->
    <section class="hero" id="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-kicker">
            🇳🇵 नेपालमै आधारित वित्तीय शिक्षा
          </div>
          <h1>
            Hamro Nepal, Hamro Arthik Uday.<br><span class="hero-title-accent">Rise with risePaisa.</span>
          </h1>
          <p class="hero-subtitle">
            Nepal's most practical financial education platform. Master the NEPSE stock market, personal finance, taxation, and wealth building designed for Nepal.
          </p>
          <div class="hero-actions">
            <a href="${nepseLearnUrl}" class="btn btn-primary btn-lg hero-btn-primary" id="hero-nepse-course-cta">
              Explore Share Market Course ${ICONS.arrowRight}
            </a>
            <a href="${ROUTES.LEARN}" class="btn btn-secondary btn-lg hero-btn-secondary" id="hero-free-resources-cta">
              Explore Free Learning Resources
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
            <div class="stat-number" data-count="20" data-suffix="+">20+</div>
            <div class="stat-label">Hours of NEPSE Lessons</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="25" data-suffix="+">25+</div>
            <div class="stat-label">Articles &amp; Guides</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="12" data-suffix="">12</div>
            <div class="stat-label">Financial Calculators</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="100" data-suffix="%">100%</div>
            <div class="stat-label">Nepal-Focused Curriculum</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dedicated Flagship Featured Course Section -->
    <section class="section flagship-section" id="featured-course">
      <div class="container">
        <div class="flagship-header">
          <span class="flagship-eyebrow">RISEPAISA FLAGSHIP COURSE</span>
          <h2 class="flagship-section-title">Learn the Nepal Share Market. Invest with Confidence.</h2>
          <p class="flagship-section-desc">Understand NEPSE from the fundamentals to technical analysis with practical lessons designed for Nepali investors.</p>
        </div>

        <div class="flagship-showcase-container">
          <article class="flagship-showcase" id="flagship-nepse-showcase" data-course-url="${nepseLearnUrl}">
            
            <!-- Left Column: Original Course Cover Image -->
            <div class="flagship-col-visual">
              <a href="${nepseLearnUrl}" class="flagship-cover-link" aria-label="Explore ${nepseCourse.title}">
                <img src="${nepseCourse.thumbnail || 'assets/images/course-nepse.png'}" alt="${nepseCourse.title} by RisePaisa" class="flagship-cover-image" loading="lazy" decoding="async" width="1376" height="768">
              </a>
            </div>

            <!-- Right Column: Course Info, Key Benefits, Price & CTAs -->
            <div class="flagship-col-details">
              <h3 class="flagship-course-heading">
                <a href="${nepseLearnUrl}">${nepseCourse.title}</a>
              </h3>

              <p class="flagship-course-desc">
                ${nepseCourse.shortDescription || nepseCourse.description || "A practical, structured program to understand Nepal's stock market from the ground up, covering technical analysis, balance sheet evaluation, stock selection, and disciplined risk management."}
              </p>

              <!-- Essential Course Benefits -->
              <ul class="flagship-benefits-grid">
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.clock}</span>
                  <span class="flagship-benefit-text">20+ Hours of Recorded Lessons</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.chartBar}</span>
                  <span class="flagship-benefit-text">Fundamental Analysis</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.trendingUp}</span>
                  <span class="flagship-benefit-text">Technical Analysis</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.building}</span>
                  <span class="flagship-benefit-text">Practical Stock Analysis</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.shield}</span>
                  <span class="flagship-benefit-text">Risk Management</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.layers}</span>
                  <span class="flagship-benefit-text">PDF and Excel Learning Resources</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.sparkles}</span>
                  <span class="flagship-benefit-text">Weekly Course Updates</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.users}</span>
                  <span class="flagship-benefit-text">Weekly Live Q&amp;A Sessions</span>
                </li>
              </ul>

              <!-- Pricing, Terms & Actions Bar -->
              <div class="flagship-footer-bar">
                <div class="flagship-price-cluster">
                  <span class="flagship-price-kicker">Course Fee</span>
                  <div class="flagship-price-display">
                    <span class="flagship-price-currency">${nepseCourse.currency || 'NPR'}</span>
                    <span class="flagship-price-amount">${(nepseCourse.price || 2999).toLocaleString()}</span>
                  </div>
                  <span class="flagship-price-terms">One-time payment</span>
                </div>

                <div class="flagship-actions-cluster">
                  <a href="${getWhatsAppPurchaseUrl(nepseCourse.title, nepseCourse.price)}" target="_blank" rel="noopener" class="flagship-btn-primary" id="flagship-buy-course-btn" style="display:inline-flex;align-items:center;gap:6px;background:#25D366;border-color:#25D366;color:#FFFFFF">
                    ${ICONS.whatsapp}
                    <span>Buy Course — NPR ${(nepseCourse.price || 2999).toLocaleString()}</span>
                  </a>
                  <a href="${nepseLearnUrl}" class="flagship-btn-secondary" id="flagship-explore-course-btn">
                    <span>Explore Syllabus</span>
                    ${ICONS.arrowRight}
                  </a>
                </div>
              </div>

            </div>
          </article>
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
          <a href="${ROUTES.CALCULATORS}" class="btn btn-secondary btn-lg">Explore All 12 Calculators ${ICONS.arrowRight}</a>
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
              risePaisa fixes that. Founded by <a href="${ROUTES.AAKASH_DAS}" style="color:var(--color-accent);font-weight:600;text-decoration:none">Aakash Das</a>, finance educator and content creator, it gives Nepali youth clear, practical knowledge to earn, manage, and invest money the right way, based on how Nepal actually works.
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
            <a href="${getWhatsAppPurchaseUrl(nepseCourse.title, nepseCourse.price)}" target="_blank" rel="noopener" class="btn btn-primary btn-lg" style="display:inline-flex;align-items:center;gap:6px;background:#25D366;border-color:#25D366;color:#FFFFFF">
              ${ICONS.whatsapp} Buy Course — NPR ${(nepseCourse.price || 2999).toLocaleString()}
            </a>
            <a href="${nepseLearnUrl}" class="btn btn-secondary btn-lg">
              Explore Syllabus
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHomePage() {
  initStatCounters();

  let cleanupBuy = null;
  const COURSES = getCourses();
  const nepseCourse = COURSES.find(c => c.slug === 'nepse-stock-market-basics') || COURSES[0];
  const nepseLearnUrl = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';

  if (typeof window !== 'undefined') {
    const showcase = document.getElementById('flagship-nepse-showcase');
    if (showcase) {
      showcase.style.cursor = 'pointer';
      showcase.addEventListener('click', (e) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        const targetUrl = showcase.getAttribute('data-course-url') || nepseLearnUrl;
        if (typeof window._rpNavigateTo === 'function') {
          window._rpNavigateTo(targetUrl);
        } else {
          window.location.href = targetUrl;
        }
      });
    }

    cleanupBuy = initHomeFloatingBuy({
      course: nepseCourse,
      waBuyLink: getWhatsAppPurchaseUrl(nepseCourse.title, nepseCourse.price)
    });

    // Check user enrollment state to update CTA
    import('../firebase/auth.js').then(({ getCurrentUser }) => {
      const user = getCurrentUser();
      if (user) {
        import('../firebase/courses.js').then(({ checkUserEnrollment }) => {
          checkUserEnrollment(user.uid, nepseCourse.id).then(res => {
            if (res && res.enrolled) {
              if (typeof cleanupBuy === 'function') cleanupBuy();
              cleanupBuy = initHomeFloatingBuy({
                course: nepseCourse,
                isEnrolled: true,
                waBuyLink: getWhatsAppPurchaseUrl(nepseCourse.title, nepseCourse.price)
              });
            }
          }).catch(() => {});
        }).catch(() => {});
      }
    }).catch(() => {});

    import('../firebase/courses.js').then(({ fetchCourseData }) => {
      fetchCourseData('nepse-stock-market-basics').then((liveCourse) => {
        if (!liveCourse) return;
        const liveShowcase = document.getElementById('flagship-nepse-showcase');
        if (!liveShowcase) return;

        const headingLink = liveShowcase.querySelector('.flagship-course-heading a');
        if (headingLink && liveCourse.title) {
          headingLink.textContent = liveCourse.title;
          headingLink.href = nepseLearnUrl;
        }

        const desc = liveShowcase.querySelector('.flagship-course-desc');
        if (desc && (liveCourse.shortDescription || liveCourse.description)) {
          desc.textContent = liveCourse.shortDescription || liveCourse.description;
        }

        const img = liveShowcase.querySelector('.flagship-cover-image');
        if (img && liveCourse.thumbnail) {
          img.src = liveCourse.thumbnail;
        }

        const coverLink = liveShowcase.querySelector('.flagship-cover-link');
        if (coverLink) {
          coverLink.href = nepseLearnUrl;
        }

        const exploreBtn = document.getElementById('flagship-explore-course-btn');
        if (exploreBtn) {
          exploreBtn.href = nepseLearnUrl;
        }

        const buyBtn = document.getElementById('flagship-buy-course-btn');
        if (buyBtn && liveCourse.price) {
          buyBtn.href = getWhatsAppPurchaseUrl(liveCourse.title, liveCourse.price);
        }

        const priceEl = liveShowcase.querySelector('.flagship-price-amount');
        if (priceEl && liveCourse.price) {
          priceEl.textContent = liveCourse.price.toLocaleString();
        }
      }).catch(() => {});
    }).catch(() => {});
  }

  return () => {
    if (typeof cleanupBuy === 'function') cleanupBuy();
    unmountHomeFloatingBuy();
  };
}

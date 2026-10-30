// ==============================================
// risePaisa | Home Page (Apple-Inspired Visual Hierarchy)
// ==============================================
import { getCourses } from '../data/courses.js';
import { ICONS, setPageMeta, initStatCounters, getWhatsAppPurchaseUrl } from '../components.js';
import { initHomeFloatingBuy, unmountHomeFloatingBuy } from '../floatingControls.js';
import { ROUTES } from '../routes.js';

export function renderHomePage() {
  setPageMeta(
    'Understand Money. Make Better Financial Decisions | risePaisa',
    'Nepal\'s practical financial education platform. Master the NEPSE share market, personal finance, taxation, and explore 12 free financial calculators.',
    ROUTES.HOME
  );

  const COURSES = getCourses();
  const nepseCourse = COURSES.find(c => c.slug === 'nepse-stock-market-basics') || COURSES[0];
  const nepseLearnUrl = '/courses/nepse-stock-market-basics/learn?lesson=lesson-1';
  const coursePrice = nepseCourse.price || 2999;
  const coursePriceFormatted = coursePrice.toLocaleString();
  const waBuyUrl = getWhatsAppPurchaseUrl(nepseCourse.title, coursePrice);

  return `
    <!-- Section A — Hero -->
    <section class="hero" id="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="section-eyebrow hero-eyebrow">FINANCIAL EDUCATION FOR NEPAL</span>
          <h1>
            Understand Money.<br><span class="hero-title-accent">Make Better Financial Decisions.</span>
          </h1>
          <p class="hero-subtitle">
            Learn about investing, taxation, and personal finance in Nepal through practical guides, free calculators, and structured courses.
          </p>
          <div class="hero-actions">
            <a href="${nepseLearnUrl}" class="btn btn-primary btn-lg hero-btn-primary" id="hero-nepse-course-cta">
              Explore Learning Resources ${ICONS.arrowRight}
            </a>
            <a href="${ROUTES.CALCULATORS}" class="btn btn-secondary btn-lg hero-btn-secondary" id="hero-free-tools-cta">
              Financial Calculators
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section B — Featured NEPSE Course -->
    <section class="section flagship-section" id="featured-course">
      <div class="container">
        <div class="flagship-header">
          <span class="flagship-eyebrow">FEATURED COURSE</span>
          <h2 class="flagship-section-title">Master the Nepal Share Market</h2>
          <p class="flagship-section-desc">Learn share market fundamentals, company analysis, technical charts, and risk management through practical NEPSE-focused lessons.</p>
        </div>

        <div class="flagship-showcase-container">
          <article class="flagship-showcase" id="flagship-nepse-showcase" data-course-url="${nepseLearnUrl}">
            
            <!-- Left Column: Course Visual -->
            <div class="flagship-col-visual">
              <a href="${nepseLearnUrl}" class="flagship-cover-link" aria-label="Explore ${nepseCourse.title}">
                <img src="${nepseCourse.thumbnail || 'assets/images/course-nepse.png'}" alt="${nepseCourse.title} by RisePaisa" class="flagship-cover-image" loading="lazy" decoding="async" width="1376" height="768">
                <span class="flagship-cover-badge">
                  <span class="flagship-badge-dot"></span> 20+ Hours of Lessons · Practical NEPSE Analysis
                </span>
              </a>
            </div>

            <!-- Right Column: Course Info, Outcomes, Price & CTAs -->
            <div class="flagship-col-details">
              <h3 class="flagship-course-heading">
                <a href="${nepseLearnUrl}">${nepseCourse.title}</a>
              </h3>

              <!-- Essential Course Learning Outcomes -->
              <ul class="flagship-benefits-grid">
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.chartBar}</span>
                  <span class="flagship-benefit-text">Fundamental and technical analysis</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.trendingUp}</span>
                  <span class="flagship-benefit-text">NEPSE company evaluation</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.shield}</span>
                  <span class="flagship-benefit-text">Risk management and trading discipline</span>
                </li>
                <li class="flagship-benefit-item">
                  <span class="flagship-benefit-icon" aria-hidden="true">${ICONS.layers}</span>
                  <span class="flagship-benefit-text">Existing Excel and PDF study resources</span>
                </li>
              </ul>

              <!-- Pricing & Actions Bar -->
              <div class="flagship-footer-bar">
                <div class="flagship-price-cluster">
                  <span class="flagship-price-kicker">Course Fee</span>
                  <div class="flagship-price-display">
                    <span class="flagship-price-currency">${nepseCourse.currency || 'NPR'}</span>
                    <span class="flagship-price-amount">${coursePriceFormatted}</span>
                  </div>
                </div>

                <div class="flagship-actions-cluster">
                  <a href="${waBuyUrl}" target="_blank" rel="noopener" class="flagship-btn-primary" id="flagship-buy-course-btn">
                    ${ICONS.whatsapp}
                    <span>Enroll via WhatsApp</span>
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

    <!-- Section C — Free Financial Tools -->
    <section class="section section-alt" id="calculators-spotlight">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">FREE FINANCIAL TOOLS</span>
          <h2>Financial Calculators</h2>
          <p>Calculate taxes, loan payments, savings growth, and NEPSE trading costs using tools designed for Nepal.</p>
        </div>
        
        <div class="calc-spotlight-grid">
          <!-- 1. Nepal Income Tax Calculator -->
          <a href="${ROUTES.CALCULATOR_TAX}" class="calc-spotlight-card">
            <div class="calc-spotlight-top">
              <div class="calc-spotlight-icon" aria-hidden="true">${ICONS.receipt}</div>
            </div>
            <h3>Salary &amp; Income Tax</h3>
            <p>Estimate salary tax and applicable deductions using Nepal's relevant tax rules.</p>
            <div class="calc-spotlight-footer">
              <span class="calc-spotlight-cta">Launch Calculator</span>
              <span class="calc-arrow-btn" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </a>

          <!-- 2. SIP & Mutual Funds Calculator -->
          <a href="${ROUTES.CALCULATOR_SIP}" class="calc-spotlight-card">
            <div class="calc-spotlight-top">
              <div class="calc-spotlight-icon" aria-hidden="true">${ICONS.trendingUp}</div>
            </div>
            <h3>SIP &amp; Mutual Funds</h3>
            <p>Project potential investment growth using monthly contributions and compound returns.</p>
            <div class="calc-spotlight-footer">
              <span class="calc-spotlight-cta">Launch Calculator</span>
              <span class="calc-arrow-btn" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </a>

          <!-- 3. Loan EMI & Amortization Calculator -->
          <a href="${ROUTES.CALCULATOR_EMI}" class="calc-spotlight-card">
            <div class="calc-spotlight-top">
              <div class="calc-spotlight-icon" aria-hidden="true">${ICONS.building}</div>
            </div>
            <h3>Loan EMI &amp; Amortization</h3>
            <p>Calculate monthly installments, total interest, and loan repayment schedules.</p>
            <div class="calc-spotlight-footer">
              <span class="calc-spotlight-cta">Launch Calculator</span>
              <span class="calc-arrow-btn" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </a>

          <!-- 4. Fixed Deposit & Recurring Deposit -->
          <a href="${ROUTES.CALCULATOR_FD}" class="calc-spotlight-card">
            <div class="calc-spotlight-top">
              <div class="calc-spotlight-icon" aria-hidden="true">${ICONS.wallet}</div>
            </div>
            <h3>Fixed &amp; Recurring Deposits</h3>
            <p>Estimate deposit interest and maturity value using the selected rate and compounding method.</p>
            <div class="calc-spotlight-footer">
              <span class="calc-spotlight-cta">Launch Calculator</span>
              <span class="calc-arrow-btn" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </a>

          <!-- 5. NEPSE Share Buy/Sell Calculator -->
          <a href="${ROUTES.CALCULATOR_SHARE}" class="calc-spotlight-card">
            <div class="calc-spotlight-top">
              <div class="calc-spotlight-icon" aria-hidden="true">${ICONS.chartBar}</div>
            </div>
            <h3>NEPSE Share &amp; Capital Gains Tax</h3>
            <p>Estimate transaction costs, brokerage charges, and applicable capital gains tax.</p>
            <div class="calc-spotlight-footer">
              <span class="calc-spotlight-cta">Launch Calculator</span>
              <span class="calc-arrow-btn" aria-hidden="true">${ICONS.arrowRight}</span>
            </div>
          </a>
        </div>

        <div style="text-align:center;margin-top:var(--space-8)">
          <a href="${ROUTES.CALCULATORS}" class="btn btn-secondary btn-lg">Explore All Calculators ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- Section D — Learn and Explore -->
    <section class="section learn-explore-section" id="learn-explore">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">FREE LEARNING RESOURCES</span>
          <h2>Learn and Explore</h2>
          <p>Explore practical guides, financial concepts, and research tailored to Nepal.</p>
        </div>

        <div class="learn-explore-grid">
          <!-- Card 1: Structured Learning Academy -->
          <div class="learn-explore-card">
            <div class="learn-explore-icon" aria-hidden="true">${ICONS.bookOpen}</div>
            <h3>Structured Academy</h3>
            <p class="learn-explore-desc">Follow structured learning paths covering personal finance, investing, taxation, and NEPSE.</p>
            <ul class="learn-explore-links-list">
              <li class="learn-explore-link-item">
                <a href="${ROUTES.LEARN_CATEGORY('personal-finance')}">
                  <span>Personal Finance</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
              <li class="learn-explore-link-item">
                <a href="${ROUTES.LEARN_CATEGORY('nepse')}">
                  <span>NEPSE Stock Market</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
              <li class="learn-explore-link-item">
                <a href="${ROUTES.LEARN_CATEGORY('taxation')}">
                  <span>Taxation &amp; SSF</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
            </ul>
            <a href="${ROUTES.LEARN}" class="learn-card-footer-link">
              Explore Academy ${ICONS.arrowRight}
            </a>
          </div>

          <!-- Card 2: Essential Guides & Glossary -->
          <div class="learn-explore-card">
            <div class="learn-explore-icon" aria-hidden="true">${ICONS.compass}</div>
            <h3>Guides &amp; Glossary</h3>
            <p class="learn-explore-desc">Learn common financial tasks in Nepal through step-by-step guides and simple explanations.</p>
            <ul class="learn-explore-links-list">
              <li class="learn-explore-link-item">
                <a href="${ROUTES.LEARN_GUIDE('complete-ipo-guide')}">
                  <span>Complete IPO Guide for Nepal</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
              <li class="learn-explore-link-item">
                <a href="${ROUTES.LEARN_LESSON('nepse', 'demat-meroshare-crn-setup')}">
                  <span>Demat, MeroShare &amp; CRN Setup</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
              <li class="learn-explore-link-item">
                <a href="${ROUTES.LEARN_GLOSSARY}">
                  <span>Nepali Financial Glossary</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
            </ul>
            <a href="${ROUTES.LEARN_GUIDES}" class="learn-card-footer-link">
              Browse Guides ${ICONS.arrowRight}
            </a>
          </div>

          <!-- Card 3: Articles & Market Insights -->
          <div class="learn-explore-card">
            <div class="learn-explore-icon" aria-hidden="true">${ICONS.layers}</div>
            <h3>Articles &amp; Insights</h3>
            <p class="learn-explore-desc">Read practical articles on Nepal's financial system, investing, and personal finance.</p>
            <ul class="learn-explore-links-list">
              <li class="learn-explore-link-item">
                <a href="${ROUTES.BLOG_POST('income-tax-nepal-explained')}">
                  <span>Income Tax in Nepal Explained</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
              <li class="learn-explore-link-item">
                <a href="${ROUTES.BLOG_POST('how-to-buy-and-sell-shares-in-nepal-tms')}">
                  <span>Buying and Selling Shares on NEPSE TMS</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
              <li class="learn-explore-link-item">
                <a href="${ROUTES.BLOG_POST('sip-investing-guide-nepal')}">
                  <span>SIP Investing in Nepal</span>
                  ${ICONS.chevronRight}
                </a>
              </li>
            </ul>
            <a href="${ROUTES.BLOG}" class="learn-card-footer-link">
              Read Articles ${ICONS.arrowRight}
            </a>
          </div>
        </div>

        <!-- Downloadable Spreadsheets & Templates Banner -->
        <div class="learn-resources-banner">
          <div class="learn-resources-info">
            <div class="learn-resources-icon" aria-hidden="true">${ICONS.download}</div>
            <div>
              <h4 class="learn-resources-title">Free Financial Resources</h4>
              <p class="learn-resources-desc">Download practical budgeting spreadsheets, investment worksheets, and study checklists.</p>
            </div>
          </div>
          <a href="${ROUTES.RESOURCES}" class="btn btn-secondary btn-sm">Explore Free Resources ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <!-- Section E — Trust and Founder Identity -->
    <section class="section section-alt" id="about-teaser-section">
      <div class="container">
        <div class="about-teaser">
          <div class="about-teaser-img">
            <img src="assets/images/aakash-das-founder-risepaisa.jpg" alt="Aakash Das, founder of RisePaisa" loading="lazy" decoding="async" width="500" height="500">
          </div>
          <div>
            <span class="section-eyebrow" style="margin-bottom:var(--space-2);display:inline-block">OUR MISSION</span>
            <h2>Financial Education Built for Nepal</h2>
            <p style="font-size:var(--text-lg);margin-bottom:var(--space-4)">
              RisePaisa was founded by <a href="${ROUTES.AAKASH_DAS}" style="color:var(--color-accent);font-weight:600;text-decoration:none">Aakash Das</a> to make financial knowledge easier to understand and apply in Nepal. We create practical educational content, calculators, and resources covering the country's financial system, taxation, banking, and stock market.
            </p>
            <div class="about-trust-pillars">
              <div class="about-trust-item">
                ${ICONS.checkCircle}
                <span>Nepal-focused financial education</span>
              </div>
              <div class="about-trust-item">
                ${ICONS.checkCircle}
                <span>Practical tools and research-based learning</span>
              </div>
              <div class="about-trust-item">
                ${ICONS.checkCircle}
                <span>Clear explanations of investing, taxation, and personal finance</span>
              </div>
            </div>
            <div style="display:flex;gap:var(--space-3);align-items:center;flex-wrap:wrap;margin-top:var(--space-6)">
              <a href="${ROUTES.ABOUT}" class="btn btn-secondary">About RisePaisa ${ICONS.arrowRight}</a>
              <a href="${ROUTES.AAKASH_DAS}" class="btn btn-ghost">Meet Aakash Das ${ICONS.arrowRight}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section F — Final Action -->
    <section class="section" id="final-cta">
      <div class="container">
        <div class="cta-banner">
          <h2>Take the Next Step in Your Financial Learning</h2>
          <p>Explore free calculators and practical guides, or learn the NEPSE share market through our structured course.</p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="${ROUTES.CALCULATORS}" class="btn btn-primary btn-lg hero-btn-primary">
              Explore Financial Tools ${ICONS.arrowRight}
            </a>
            <a href="${nepseLearnUrl}" class="btn btn-secondary btn-lg">
              Explore the NEPSE Course
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

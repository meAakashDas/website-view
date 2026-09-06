// ==============================================
// risePaisa | Financial Calculators Hub Page
// Navigation tabs between SIP, EMI, SWP, Tax, NEPSE Share, FD & RD, Retirement & Goal Planner
// ==============================================
import { setPageMeta } from '../components.js';
import { CALCULATOR_REGISTRY } from '../calculators/registry.js';
import { renderSIPCalculator, initSIPCalculator } from '../calculators/sip.js';
import { renderLoanCalculators, initLoanCalculators } from '../calculators/loans.js';
import { renderEMICalculator, initEMICalculator } from '../calculators/emi.js';
import { renderSWPCalculator, initSWPCalculator } from '../calculators/swp.js';
import { renderTaxCalculator, initTaxCalculator } from '../calculators/tax.js';
import { renderShareCalculator, initShareCalculator } from '../calculators/share.js';
import { renderFDRDCalculator, initFDRDCalculator } from '../calculators/fdrd.js';
import { renderRetirementGoalCalculator, initRetirementGoalCalculator } from '../calculators/retirement.js';
import { renderCAGRCalculator, initCAGRCalculator } from '../calculators/cagr.js';
import { renderInflationCalculator, initInflationCalculator } from '../calculators/inflation.js';
import { ROUTES, CALCULATOR_ROUTES, CALCULATOR_SLUG_TO_ID, getAppPathname, toBrowserPath } from '../routes.js';

export const CALC_METAS = {
  sip: {
    title: 'Nepal SIP Calculator: Systematic Investment Plan Compounding | risePaisa',
    desc: 'Estimate mutual fund and equity SIP wealth growth with monthly compounding in Nepal.',
    path: ROUTES.CALCULATOR_SIP,
  },
  emi: {
    title: 'Nepal Loan Calculators: Home, Personal & Vehicle Loan EMI | risePaisa',
    desc: 'Calculate monthly loan EMI, total interest, LTV health ratio, and amortization schedules for Home, Personal, and Vehicle loans in Nepal.',
    path: ROUTES.CALCULATOR_EMI,
  },
  'home-loan': {
    title: 'Nepal Home Loan Calculator: Housing Mortgage EMI & LTV Health | risePaisa',
    desc: 'Estimate Nepal home loan monthly EMI, down payment, Loan-to-Value (LTV) ratio, NRB limits, and full amortization schedule.',
    path: ROUTES.CALCULATOR_HOME_LOAN,
  },
  'personal-loan': {
    title: 'Nepal Personal Loan Calculator: EMI & Tenure Comparison | risePaisa',
    desc: 'Calculate unsecured personal loan monthly EMIs, effective borrowing costs, and compare 5, 7, and 10 year repayment terms.',
    path: ROUTES.CALCULATOR_PERSONAL_LOAN,
  },
  'vehicle-loan': {
    title: 'Nepal Vehicle Loan Calculator: Two-Wheeler & Auto Financing | risePaisa',
    desc: 'Calculate vehicle loan monthly EMIs, down payments, and LTV ratios for cars, SUVs, motorcycles, and electric vehicles (EVs) in Nepal.',
    path: ROUTES.CALCULATOR_VEHICLE_LOAN,
  },
  swp: {
    title: 'Nepal SWP Calculator: Systematic Withdrawal Plan Longevity | risePaisa',
    desc: 'Simulate monthly regular income withdrawals and estimate corpus longevity for retirement in Nepal.',
    path: ROUTES.CALCULATOR_SWP,
  },
  tax: {
    title: 'Nepal Personal Income Tax Calculator (FY 2082/83) | risePaisa',
    desc: 'Calculate resident natural person income tax under Nepal FY 2082/83 with official progressive slabs, Single/Married status, and statutory deductions.',
    path: ROUTES.CALCULATOR_TAX,
  },
  share: {
    title: 'NEPSE Share Calculator: Buy, Sell, CGT, Broker Fee & WACC | risePaisa',
    desc: 'Accurately calculate NEPSE share trading costs, broker commissions (0.27%-0.40%), SEBON fees, DP charges, capital gains tax, and multi-lot WACC.',
    path: ROUTES.CALCULATOR_SHARE,
  },
  fdrd: {
    title: 'Nepal Fixed Deposit (FD) & RD Calculator with 5% TDS | risePaisa',
    desc: 'Compare commercial bank Fixed Deposit and Recurring Deposit maturity returns in Nepal with quarterly compounding and statutory 5% TDS.',
    path: ROUTES.CALCULATOR_FD,
  },
  retirement: {
    title: 'Nepal Retirement & Financial Goal Planner: Inflation Adjusted | risePaisa',
    desc: 'Plan for early retirement and major financial milestones in Nepal with 6% inflation-adjusted living expense modeling and reverse SIP requirements.',
    path: ROUTES.CALCULATOR_RETIREMENT,
  },
  cagr: {
    title: 'Nepal CAGR Calculator: Compound Annual Growth Rate | risePaisa',
    desc: 'Measure annualized compound returns for NEPSE stocks, mutual funds, gold, fixed deposits, and real estate in Nepal with 5-20 year projections.',
    path: ROUTES.CALCULATOR_CAGR,
  },
  inflation: {
    title: 'Nepal Inflation Calculator: Purchasing Power & Future Cost | risePaisa',
    desc: 'Estimate future purchasing costs and money purchasing power decay over time based on configurable inflation in Nepal.',
    path: ROUTES.CALCULATOR_INFLATION,
  },
};

/**
 * Render Financial Calculators Hub Page
 * @param {string} [calcSlug] - Optional active calculator slug from URL path
 * @returns {string} HTML markup
 */
export function renderCalculatorsPage(calcSlug = '') {
  // Determine active loan subtab
  let initialLoanSubtab = 'home';
  if (calcSlug === 'personal-loan') initialLoanSubtab = 'personal';
  else if (calcSlug === 'vehicle-loan') initialLoanSubtab = 'vehicle';
  else if (typeof window !== 'undefined') {
    const p = getAppPathname();
    if (p.includes('/personal-loan')) initialLoanSubtab = 'personal';
    else if (p.includes('/vehicle-loan')) initialLoanSubtab = 'vehicle';
  }

  // Determine active tab from direct param or URL path
  let activeTab = 'sip';
  if (calcSlug && CALCULATOR_SLUG_TO_ID[calcSlug]) {
    activeTab = CALCULATOR_SLUG_TO_ID[calcSlug];
  } else {
    const path = typeof window !== 'undefined' ? getAppPathname() : '';
    if (path.includes('/sip')) activeTab = 'sip';
    else if (path.includes('/emi') || path.includes('/loan') || path.includes('/home-loan') || path.includes('/personal-loan') || path.includes('/vehicle-loan')) activeTab = 'emi';
    else if (path.includes('/swp')) activeTab = 'swp';
    else if (path.includes('/nepal-income-tax') || path.includes('/tax')) activeTab = 'tax';
    else if (path.includes('/nepse-share') || path.includes('/share')) activeTab = 'share';
    else if (path.includes('/fixed-deposit') || path.includes('/fd')) activeTab = 'fdrd';
    else if (path.includes('/retirement') || path.includes('/goal')) activeTab = 'retirement';
    else if (path.includes('/cagr')) activeTab = 'cagr';
    else if (path.includes('/inflation')) activeTab = 'inflation';
  }

  if (['home-loan', 'personal-loan', 'vehicle-loan'].includes(calcSlug)) {
    activeTab = 'emi';
  }

  const metaKey = ['home-loan', 'personal-loan', 'vehicle-loan'].includes(calcSlug)
    ? calcSlug
    : activeTab;
  const meta = CALC_METAS[metaKey] || {
    title: 'Financial Calculators for Nepal: Loans, SIP, Tax, NEPSE, FD & Retirement | risePaisa',
    desc: 'Free financial calculators designed for Nepal: Home/Personal/Vehicle Loans, Retirement corpus, Fixed Deposit, NEPSE share profit, Personal Income Tax FY 2082/83, SIP compounding, and SWP.',
    path: ROUTES.CALCULATORS,
  };
  setPageMeta(meta.title, meta.desc, meta.path);

  const activeCalculators = CALCULATOR_REGISTRY.filter(c => c.status === 'active');
  const futureCalculators = CALCULATOR_REGISTRY.filter(c => c.status === 'coming-soon');

  return `
    <!-- Calculator Hub Hero -->
    <section class="rp-hub-hero" id="calculators-hero">
      <div class="container">
        <div class="rp-hub-badge">🇳🇵 Financial Tools for Nepal</div>
        <h1 class="rp-hub-title">Financial Calculators</h1>
        <p class="rp-hub-desc">
          Free financial calculators designed for Nepal to help estimate retirement independence, major financial goals, bank savings, stock trades, personal taxes, loans, and SIP wealth compounding.
        </p>
      </div>
    </section>

    <!-- Calculator Navigation Tabs -->
    <nav class="rp-calc-nav-bar" id="calculator-tabs-bar" aria-label="Financial Calculators Navigation">
      <div class="container">
        <div class="rp-calc-tabs-wrapper" role="tablist">
          <!-- SIP Tab -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'sip' ? 'active' : ''}"
            id="tab-btn-sip"
            role="tab"
            aria-selected="${activeTab === 'sip'}"
            aria-controls="calc-pane-sip"
            data-target="sip"
          >
            <span class="rp-tab-bullet">•</span> SIP Calculator
          </button>

          <!-- Loan Calculators Tab -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'emi' ? 'active' : ''}"
            id="tab-btn-emi"
            role="tab"
            aria-selected="${activeTab === 'emi'}"
            aria-controls="calc-pane-emi"
            data-target="emi"
          >
            <span class="rp-tab-bullet">•</span> Loan Calculators
          </button>

          <!-- SWP Tab -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'swp' ? 'active' : ''}"
            id="tab-btn-swp"
            role="tab"
            aria-selected="${activeTab === 'swp'}"
            aria-controls="calc-pane-swp"
            data-target="swp"
          >
            <span class="rp-tab-bullet">•</span> SWP Calculator
          </button>

          <!-- Tax Tab -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'tax' ? 'active' : ''}"
            id="tab-btn-tax"
            role="tab"
            aria-selected="${activeTab === 'tax'}"
            aria-controls="calc-pane-tax"
            data-target="tax"
          >
            <span class="rp-tab-bullet">•</span> Tax Calculator
          </button>

          <!-- Share Tab -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'share' ? 'active' : ''}"
            id="tab-btn-share"
            role="tab"
            aria-selected="${activeTab === 'share'}"
            aria-controls="calc-pane-share"
            data-target="share"
          >
            <span class="rp-tab-bullet">•</span> NEPSE Share Calculator
          </button>

          <!-- FD & RD Tab -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'fdrd' ? 'active' : ''}"
            id="tab-btn-fdrd"
            role="tab"
            aria-selected="${activeTab === 'fdrd'}"
            aria-controls="calc-pane-fdrd"
            data-target="fdrd"
          >
            <span class="rp-tab-bullet">•</span> FD & RD Calculator
          </button>

          <!-- Retirement & Goal Planner Tab (ACTIVE) -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'retirement' ? 'active' : ''}"
            id="tab-btn-retirement"
            role="tab"
            aria-selected="${activeTab === 'retirement'}"
            aria-controls="calc-pane-retirement"
            data-target="retirement"
          >
            <span class="rp-tab-bullet">•</span> Retirement & Goal Planner
          </button>

          <!-- Inflation Tab -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'inflation' ? 'active' : ''}"
            id="tab-btn-inflation"
            role="tab"
            aria-selected="${activeTab === 'inflation'}"
            aria-controls="calc-pane-inflation"
            data-target="inflation"
          >
            <span class="rp-tab-bullet">•</span> Inflation Calculator
          </button>

          <!-- CAGR Tab -->
          <button
            type="button"
            class="rp-calc-tab-btn ${activeTab === 'cagr' ? 'active' : ''}"
            id="tab-btn-cagr"
            role="tab"
            aria-selected="${activeTab === 'cagr'}"
            aria-controls="calc-pane-cagr"
            data-target="cagr"
          >
            <span class="rp-tab-bullet">•</span> CAGR Calculator
          </button>
        </div>
      </div>
    </nav>

    <!-- Active Calculator Display Panes -->
    <section class="rp-calc-section-active" id="calculator-display-section">
      <div class="container">
        
        <!-- PANE 1: SIP Calculator -->
        <div
          class="rp-calc-pane ${activeTab === 'sip' ? 'active' : ''}"
          id="calc-pane-sip"
          role="tabpanel"
          aria-labelledby="tab-btn-sip"
          style="${activeTab === 'sip' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                SIP Calculator
              </h2>
              <p class="rp-pane-desc">
                Systematic Investment Plan (SIP) return estimator with monthly compounding.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderSIPCalculator()}
        </div>

        <!-- PANE 2: Loan Calculators -->
        <div
          class="rp-calc-pane ${activeTab === 'emi' ? 'active' : ''}"
          id="calc-pane-emi"
          role="tabpanel"
          aria-labelledby="tab-btn-emi"
          style="${activeTab === 'emi' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                Loan Calculators
              </h2>
              <p class="rp-pane-desc">
                Reducing-balance loan installment, LTV health assessment, and amortization estimators for Home, Personal, and Vehicle loans in Nepal.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderLoanCalculators(initialLoanSubtab)}
        </div>

        <!-- PANE 3: SWP Calculator -->
        <div
          class="rp-calc-pane ${activeTab === 'swp' ? 'active' : ''}"
          id="calc-pane-swp"
          role="tabpanel"
          aria-labelledby="tab-btn-swp"
          style="${activeTab === 'swp' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                SWP Calculator
              </h2>
              <p class="rp-pane-desc">
                Systematic Withdrawal Plan (SWP) regular income and corpus longevity simulation.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderSWPCalculator()}
        </div>

        <!-- PANE 4: Nepal Income Tax Calculator -->
        <div
          class="rp-calc-pane ${activeTab === 'tax' ? 'active' : ''}"
          id="calc-pane-tax"
          role="tabpanel"
          aria-labelledby="tab-btn-tax"
          style="${activeTab === 'tax' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                Nepal Personal Income Tax Calculator (FY 2082/83)
              </h2>
              <p class="rp-pane-desc">
                Progressive slab-by-slab income tax and take-home pay estimator for resident individuals and couples.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderTaxCalculator()}
        </div>

        <!-- PANE 5: NEPSE Share Calculator -->
        <div
          class="rp-calc-pane ${activeTab === 'share' ? 'active' : ''}"
          id="calc-pane-share"
          role="tabpanel"
          aria-labelledby="tab-btn-share"
          style="${activeTab === 'share' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                NEPSE Share Calculator
              </h2>
              <p class="rp-pane-desc">
                Calculate share purchase costs, sell profits, Capital Gains Tax, WACC average price, and break-even targets.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderShareCalculator()}
        </div>

        <!-- PANE 6: Fixed Deposit & RD Calculator -->
        <div
          class="rp-calc-pane ${activeTab === 'fdrd' ? 'active' : ''}"
          id="calc-pane-fdrd"
          role="tabpanel"
          aria-labelledby="tab-btn-fdrd"
          style="${activeTab === 'fdrd' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                Fixed Deposit (FD) & Recurring Deposit (RD) Calculator
              </h2>
              <p class="rp-pane-desc">
                Calculate compound interest, quarterly compounding, statutory 5% TDS, and maturity values for safe bank savings in Nepal.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderFDRDCalculator()}
        </div>

        <!-- PANE 7: Retirement & Goal Planner -->
        <div
          class="rp-calc-pane ${activeTab === 'retirement' ? 'active' : ''}"
          id="calc-pane-retirement"
          role="tabpanel"
          aria-labelledby="tab-btn-retirement"
          style="${activeTab === 'retirement' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                Retirement & Financial Goal Planner
              </h2>
              <p class="rp-pane-desc">
                Estimate inflation-adjusted retirement corpus requirements and calculate required monthly investments for major life milestones.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderRetirementGoalCalculator()}
        </div>

        <!-- PANE 8: CAGR Calculator -->
        <div
          class="rp-calc-pane ${activeTab === 'cagr' ? 'active' : ''}"
          id="calc-pane-cagr"
          role="tabpanel"
          aria-labelledby="tab-btn-cagr"
          style="${activeTab === 'cagr' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                CAGR & Investment Growth Calculator
              </h2>
              <p class="rp-pane-desc">
                Measure annualized geometric compound growth rates for NEPSE stocks, mutual funds, gold, fixed deposits, and real estate in Nepal.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderCAGRCalculator()}
        </div>

        <!-- PANE 9: Inflation Calculator -->
        <div
          class="rp-calc-pane ${activeTab === 'inflation' ? 'active' : ''}"
          id="calc-pane-inflation"
          role="tabpanel"
          aria-labelledby="tab-btn-inflation"
          style="${activeTab === 'inflation' ? '' : 'display:none;'}"
        >
          <div class="rp-calc-pane-header">
            <div>
              <h2 class="rp-pane-title">
                Nepal Inflation & Purchasing Power Calculator
              </h2>
              <p class="rp-pane-desc">
                Estimate future purchasing costs and money purchasing power decay over time based on configurable inflation in Nepal.
              </p>
            </div>
            <a href="#future-calculators" class="btn btn-ghost btn-sm rp-view-all-btn">
              View All Calculators ↓
            </a>
          </div>

          ${renderInflationCalculator()}
        </div>

      </div>
    </section>

    <!-- Future Calculators Directory -->
    <section class="rp-future-section" id="future-calculators" style="background:var(--color-bg-alt);border-top:1px solid var(--color-border)">
      <div class="container">
        <div class="rp-future-header">
          <h2>Financial Calculators Directory</h2>
          <p>
            Explore live calculators or preview upcoming tools tailored for Nepal's financial and regulatory landscape.
          </p>
        </div>

        <div class="rp-calc-grid">
          <!-- Active Cards -->
          ${activeCalculators.map(c => `
            <div class="rp-calc-card active-card" id="card-${c.id}">
              <div class="rp-calc-card-top">
                <div class="rp-calc-card-icon">${c.icon}</div>
                <span class="rp-badge-live">${c.badge}</span>
              </div>
              <h3 class="rp-calc-card-title">${c.title}</h3>
              <p class="rp-calc-card-desc">${c.shortDesc}</p>
              <div class="rp-calc-card-footer">
                <span class="rp-calc-category">${c.category}</span>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm rp-switch-calc-btn"
                  data-target="${c.id}"
                >Use Calculator</button>
              </div>
            </div>
          `).join('')}

          <!-- Future Coming Soon Cards -->
          ${futureCalculators.map(c => `
            <div class="rp-calc-card disabled-card" id="calc-${c.id}">
              <div class="rp-calc-card-top">
                <div class="rp-calc-card-icon">${c.icon}</div>
                <span class="rp-badge-coming-soon">${c.badge}</span>
              </div>
              <h3 class="rp-calc-card-title">${c.title}</h3>
              <p class="rp-calc-card-desc">${c.shortDesc}</p>
              <div class="rp-calc-card-footer">
                <span class="rp-calc-category">${c.category}</span>
                <span class="rp-card-dev-label">In Development</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * Initialize Calculators Hub interactivity & tab switching
 * @param {string} [calcSlug='']
 */
export function initCalculatorsPage(calcSlug = '') {
  const paneSIP = document.getElementById('calc-pane-sip');
  const paneEMI = document.getElementById('calc-pane-emi');
  const paneSWP = document.getElementById('calc-pane-swp');
  const paneTax = document.getElementById('calc-pane-tax');
  const paneShare = document.getElementById('calc-pane-share');
  const paneFDRD = document.getElementById('calc-pane-fdrd');
  const paneRetirement = document.getElementById('calc-pane-retirement');
  const paneCAGR = document.getElementById('calc-pane-cagr');
  const paneInflation = document.getElementById('calc-pane-inflation');

  const tabBtnSIP = document.getElementById('tab-btn-sip');
  const tabBtnEMI = document.getElementById('tab-btn-emi');
  const tabBtnSWP = document.getElementById('tab-btn-swp');
  const tabBtnTax = document.getElementById('tab-btn-tax');
  const tabBtnShare = document.getElementById('tab-btn-share');
  const tabBtnFDRD = document.getElementById('tab-btn-fdrd');
  const tabBtnRetirement = document.getElementById('tab-btn-retirement');
  const tabBtnCAGR = document.getElementById('tab-btn-cagr');
  const tabBtnInflation = document.getElementById('tab-btn-inflation');

  // Determine active loan subtab
  let initialLoanSubtab = 'home';
  if (calcSlug === 'personal-loan') initialLoanSubtab = 'personal';
  else if (calcSlug === 'vehicle-loan') initialLoanSubtab = 'vehicle';
  else if (typeof window !== 'undefined') {
    const p = window.location.pathname;
    if (p.includes('/personal-loan')) initialLoanSubtab = 'personal';
    else if (p.includes('/vehicle-loan')) initialLoanSubtab = 'vehicle';
  }

  // Map of lazy calculator initializers
  const calcInitializers = {
    sip: () => initSIPCalculator(),
    emi: () => initLoanCalculators(initialLoanSubtab),
    swp: () => initSWPCalculator(),
    tax: () => initTaxCalculator(),
    share: () => initShareCalculator(),
    fdrd: () => initFDRDCalculator(),
    retirement: () => initRetirementGoalCalculator(),
    cagr: () => initCAGRCalculator(),
    inflation: () => initInflationCalculator(),
  };

  const initialized = new Set();
  function ensureInit(tabKey) {
    if (!initialized.has(tabKey) && calcInitializers[tabKey]) {
      calcInitializers[tabKey]();
      initialized.add(tabKey);
    }
  }

  const panes = {
    sip: paneSIP,
    emi: paneEMI,
    swp: paneSWP,
    tax: paneTax,
    share: paneShare,
    fdrd: paneFDRD,
    retirement: paneRetirement,
    cagr: paneCAGR,
    inflation: paneInflation,
  };

  const tabButtons = {
    sip: tabBtnSIP,
    emi: tabBtnEMI,
    swp: tabBtnSWP,
    tax: tabBtnTax,
    share: tabBtnShare,
    fdrd: tabBtnFDRD,
    retirement: tabBtnRetirement,
    cagr: tabBtnCAGR,
    inflation: tabBtnInflation,
  };

  /**
   * Switch active calculator tab
   * @param {'sip' | 'emi' | 'swp' | 'tax' | 'share' | 'fdrd' | 'retirement' | 'cagr' | 'inflation'} target
   * @param {boolean} [updateUrl=true]
   */
  function switchTab(target, updateUrl = true) {
    ensureInit(target);

    Object.keys(panes).forEach(key => {
      const pane = panes[key];
      const btn = tabButtons[key];
      if (key === target) {
        if (pane) {
          pane.style.display = 'block';
          pane.classList.add('active');
        }
        if (btn) {
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        }
      } else {
        if (pane) {
          pane.style.display = 'none';
          pane.classList.remove('active');
        }
        if (btn) {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        }
      }
    });

    const meta = CALC_METAS[target];
    if (meta) {
      setPageMeta(meta.title, meta.desc, meta.path);
      if (updateUrl && getAppPathname() !== meta.path) {
        window.history.pushState({}, '', toBrowserPath(meta.path));
      }
    }
  }

  // Tab click listeners
  tabBtnSIP?.addEventListener('click', () => switchTab('sip', true));
  tabBtnEMI?.addEventListener('click', () => switchTab('emi', true));
  tabBtnSWP?.addEventListener('click', () => switchTab('swp', true));
  tabBtnTax?.addEventListener('click', () => switchTab('tax', true));
  tabBtnShare?.addEventListener('click', () => switchTab('share', true));
  tabBtnFDRD?.addEventListener('click', () => switchTab('fdrd', true));
  tabBtnRetirement?.addEventListener('click', () => switchTab('retirement', true));
  tabBtnCAGR?.addEventListener('click', () => switchTab('cagr', true));
  tabBtnInflation?.addEventListener('click', () => switchTab('inflation', true));

  // "View All Calculators" header button navigation
  document.querySelectorAll('.rp-view-all-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (getAppPathname() !== ROUTES.CALCULATORS) {
        window.history.pushState({}, '', toBrowserPath(ROUTES.CALCULATORS));
        setPageMeta(
          'Financial Calculators for Nepal: Loans, SIP, Tax, NEPSE, FD & Retirement | risePaisa',
          'Free financial calculators designed for Nepal: Home/Personal/Vehicle Loans, Retirement corpus, Fixed Deposit, NEPSE share profit, Personal Income Tax FY 2082/83, SIP compounding, and SWP.',
          ROUTES.CALCULATORS
        );
      }
      const dirSection = document.getElementById('future-calculators');
      if (dirSection) {
        dirSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // "Use Calculator" buttons in directory grid
  document.querySelectorAll('.rp-switch-calc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      let target = btn.dataset.target;
      if (target === 'income-tax') target = 'tax';
      if (['share-average', 'share-profit-loss'].includes(target)) target = 'share';
      if (['fd', 'recurring-deposit', 'fdrd'].includes(target)) target = 'fdrd';
      if (['retirement', 'goal', 'retirement-goal'].includes(target)) target = 'retirement';

      // Specific loan calculators routing
      if (['home-loan', 'personal-loan', 'vehicle-loan'].includes(target)) {
        switchTab('emi', true);
        const sub = target === 'home-loan' ? 'home' : target === 'personal-loan' ? 'personal' : 'vehicle';
        if (window._rpSwitchLoanSubTab) {
          window._rpSwitchLoanSubTab(sub);
        }
        const displaySection = document.getElementById('calculator-display-section');
        if (displaySection) {
          displaySection.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      if (['sip', 'emi', 'swp', 'tax', 'share', 'fdrd', 'retirement', 'cagr', 'inflation'].includes(target)) {
        switchTab(target, true);
        const displaySection = document.getElementById('calculator-display-section');
        if (displaySection) {
          displaySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Initial tab selection
  let initialTab = 'sip';
  if (calcSlug && CALCULATOR_SLUG_TO_ID[calcSlug]) {
    initialTab = CALCULATOR_SLUG_TO_ID[calcSlug];
  } else {
    const path = getAppPathname();
    if (path.includes('/sip')) initialTab = 'sip';
    else if (path.includes('/emi') || path.includes('/loan') || path.includes('/home-loan') || path.includes('/personal-loan') || path.includes('/vehicle-loan')) initialTab = 'emi';
    else if (path.includes('/swp')) initialTab = 'swp';
    else if (path.includes('/nepal-income-tax') || path.includes('/tax')) initialTab = 'tax';
    else if (path.includes('/nepse-share') || path.includes('/share')) initialTab = 'share';
    else if (path.includes('/fixed-deposit') || path.includes('/fd')) initialTab = 'fdrd';
    else if (path.includes('/retirement') || path.includes('/goal')) initialTab = 'retirement';
    else if (path.includes('/cagr')) initialTab = 'cagr';
    else if (path.includes('/inflation')) initialTab = 'inflation';
  }

  if (['home-loan', 'personal-loan', 'vehicle-loan'].includes(calcSlug)) {
    initialTab = 'emi';
  }

  switchTab(initialTab, false);

  // Idle warmup of remaining calculators in background
  if (typeof window !== 'undefined') {
    const idleFn = window.requestIdleCallback || ((cb) => setTimeout(cb, 350));
    idleFn(() => {
      Object.keys(calcInitializers).forEach(k => ensureInit(k));
    });
  }
}

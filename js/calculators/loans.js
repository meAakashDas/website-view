// ==============================================
// risePaisa — Unified Nepal Loan Calculators Hub
// Home Loan, Personal Loan & Vehicle Loan Calculators
// Reusable Reducing-Balance Calculation Engine with Zero Duplication
// ==============================================
import {
  formatNPR,
  formatCompactNPR,
  calculateEMI,
  generateAmortizationSchedule,
  calculateLTV,
  getLTVHealth,
  calculateLoanComparison,
  validateLoanInputs,
  HOME_LOAN_DEFAULTS,
  PERSONAL_LOAN_DEFAULTS,
  VEHICLE_LOAN_DEFAULTS,
  VEHICLE_TYPES,
} from './engine.js';
import { renderLoanDonutChart, renderLoanBalanceChart, positionChartTooltip } from './charts.js';
import { getAppPathname, toBrowserPath } from '../routes.js';

/**
 * Shared state for all three loan calculators
 */
const loanState = {
  activeSubTab: 'home', // 'home' | 'personal' | 'vehicle'

  // 1. Home Loan State
  home: {
    propertyPrice: HOME_LOAN_DEFAULTS.propertyPrice,
    downPayment: HOME_LOAN_DEFAULTS.downPayment,
    loanAmount: HOME_LOAN_DEFAULTS.loanAmount,
    annualRate: HOME_LOAN_DEFAULTS.annualRate,
    tenure: HOME_LOAN_DEFAULTS.tenureYears,
    tenureUnit: 'years',
    processingFee: HOME_LOAN_DEFAULTS.processingFee,
    showFullSchedule: false,
  },

  // 2. Personal Loan State
  personal: {
    loanAmount: PERSONAL_LOAN_DEFAULTS.loanAmount,
    annualRate: PERSONAL_LOAN_DEFAULTS.annualRate,
    tenure: PERSONAL_LOAN_DEFAULTS.tenureYears,
    tenureUnit: 'years',
    processingFee: PERSONAL_LOAN_DEFAULTS.processingFee,
    showFullSchedule: false,
  },

  // 3. Vehicle Loan State
  vehicle: {
    vehiclePrice: VEHICLE_LOAN_DEFAULTS.vehiclePrice,
    downPayment: VEHICLE_LOAN_DEFAULTS.downPayment,
    loanAmount: VEHICLE_LOAN_DEFAULTS.loanAmount,
    annualRate: VEHICLE_LOAN_DEFAULTS.annualRate,
    tenure: VEHICLE_LOAN_DEFAULTS.tenureYears,
    tenureUnit: 'years',
    processingFee: VEHICLE_LOAN_DEFAULTS.processingFee,
    vehicleType: VEHICLE_LOAN_DEFAULTS.vehicleType,
    showFullSchedule: false,
  },
};

/**
 * Render the unified Loan Calculators HTML markup
 * @param {string} [initialTab='home'] - Active loan sub-tab ('home', 'personal', 'vehicle')
 * @returns {string} HTML markup
 */
export function renderLoanCalculators(initialTab = 'home') {
  if (['home', 'personal', 'vehicle'].includes(initialTab)) {
    loanState.activeSubTab = initialTab;
  }

  return `
    <div class="rp-calc-wrapper" id="loan-calculators-hub">
      
      <!-- Sub-Tab Navigation Bar -->
      <nav class="rp-loan-tabs-nav" aria-label="Loan Calculator Sub-Types">
        <div class="rp-loan-tabs-list" role="tablist">
          <button
            type="button"
            class="rp-loan-tab-btn ${loanState.activeSubTab === 'home' ? 'active' : ''}"
            id="loan-tab-btn-home"
            role="tab"
            aria-selected="${loanState.activeSubTab === 'home'}"
            aria-controls="loan-pane-home"
            data-subtab="home"
          >
            <span class="rp-tab-icon">🏠</span> Home Loan
          </button>

          <button
            type="button"
            class="rp-loan-tab-btn ${loanState.activeSubTab === 'personal' ? 'active' : ''}"
            id="loan-tab-btn-personal"
            role="tab"
            aria-selected="${loanState.activeSubTab === 'personal'}"
            aria-controls="loan-pane-personal"
            data-subtab="personal"
          >
            <span class="rp-tab-icon">💼</span> Personal Loan
          </button>

          <button
            type="button"
            class="rp-loan-tab-btn ${loanState.activeSubTab === 'vehicle' ? 'active' : ''}"
            id="loan-tab-btn-vehicle"
            role="tab"
            aria-selected="${loanState.activeSubTab === 'vehicle'}"
            aria-controls="loan-pane-vehicle"
            data-subtab="vehicle"
          >
            <span class="rp-tab-icon">🚗</span> Vehicle Loan
          </button>
        </div>
      </nav>

      <!-- Sub-Pane 1: Home Loan Calculator -->
      <div
        class="rp-loan-subpane ${loanState.activeSubTab === 'home' ? 'active' : ''}"
        id="loan-pane-home"
        role="tabpanel"
        aria-labelledby="loan-tab-btn-home"
        style="${loanState.activeSubTab === 'home' ? '' : 'display:none;'}"
      >
        ${renderHomeLoanMarkup()}
      </div>

      <!-- Sub-Pane 2: Personal Loan Calculator -->
      <div
        class="rp-loan-subpane ${loanState.activeSubTab === 'personal' ? 'active' : ''}"
        id="loan-pane-personal"
        role="tabpanel"
        aria-labelledby="loan-tab-btn-personal"
        style="${loanState.activeSubTab === 'personal' ? '' : 'display:none;'}"
      >
        ${renderPersonalLoanMarkup()}
      </div>

      <!-- Sub-Pane 3: Vehicle Loan Calculator -->
      <div
        class="rp-loan-subpane ${loanState.activeSubTab === 'vehicle' ? 'active' : ''}"
        id="loan-pane-vehicle"
        role="tabpanel"
        aria-labelledby="loan-tab-btn-vehicle"
        style="${loanState.activeSubTab === 'vehicle' ? '' : 'display:none;'}"
      >
        ${renderVehicleLoanMarkup()}
      </div>

      <!-- Educational Insights Section (Shared for all loans) -->
      ${renderSharedEducationalSection()}

    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// 1. HOME LOAN MARKUP
// ─────────────────────────────────────────────────────────────
function renderHomeLoanMarkup() {
  const s = loanState.home;
  const isMonths = s.tenureUnit === 'months';
  const tenureMonths = isMonths ? s.tenure : s.tenure * 12;

  const res = calculateEMI({
    loanAmount: s.loanAmount,
    annualRate: s.annualRate,
    tenureMonths,
    processingFeePercent: s.processingFee,
  });

  const ltv = calculateLTV(s.loanAmount, s.propertyPrice);
  const ltvHealth = getLTVHealth(ltv);

  const scheduleData = generateAmortizationSchedule({
    loanAmount: s.loanAmount,
    annualRate: s.annualRate,
    tenureMonths,
    monthlyEMI: res.monthlyEMI,
  });

  return `
    <div class="rp-calc-layout">
      
      <!-- Controls Column -->
      <div class="rp-calc-controls-card">
        <div class="rp-calc-card-header">
          <div>
            <h3 style="margin:0">Home Loan Parameters</h3>
            <span style="font-size:var(--text-xs);color:var(--color-text-secondary)">Long-term residential mortgage</span>
          </div>
          <span class="rp-badge rp-badge-accent">Reducing Balance</span>
        </div>

        <!-- Input 1: Property Price -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <label for="hl-input-price" class="rp-field-label">Property Price</label>
            <div class="rp-input-affix-wrap">
              <span class="rp-affix">NPR</span>
              <input
                type="number"
                id="hl-input-price"
                class="rp-number-input"
                value="${s.propertyPrice}"
                min="500000"
                max="100000000"
                step="100000"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Property Price in NPR"
              >
            </div>
          </div>
          <input
            type="range"
            id="hl-range-price"
            class="rp-range-slider"
            value="${s.propertyPrice}"
            min="2000000"
            max="50000000"
            step="200000"
            aria-label="Property Price Slider"
          >
          <div class="rp-range-ticks">
            <span>NPR 20 Lakhs</span>
            <span>NPR 1.2 Crore</span>
            <span>NPR 5 Crore</span>
          </div>
          <div class="rp-field-error" id="err-hl-price"></div>
        </div>

        <!-- Input 2: Down Payment -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <div class="rp-label-with-toggle">
              <label for="hl-input-down" class="rp-field-label">Down Payment</label>
              <span class="rp-field-hint" id="hl-down-pct-hint">
                (${s.propertyPrice > 0 ? ((s.downPayment / s.propertyPrice) * 100).toFixed(1) : 0}% of Price)
              </span>
            </div>
            <div class="rp-input-affix-wrap">
              <span class="rp-affix">NPR</span>
              <input
                type="number"
                id="hl-input-down"
                class="rp-number-input"
                value="${s.downPayment}"
                min="0"
                max="${s.propertyPrice}"
                step="50000"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Down Payment in NPR"
              >
            </div>
          </div>
          <input
            type="range"
            id="hl-range-down"
            class="rp-range-slider"
            value="${s.downPayment}"
            min="0"
            max="${Math.max(1000000, s.propertyPrice)}"
            step="50000"
            aria-label="Down Payment Slider"
          >
          <div class="rp-range-ticks">
            <span>NPR 0</span>
            <span>NPR 20 Lakhs (16.7%)</span>
            <span>NPR ${formatCompactNPR(s.propertyPrice)}</span>
          </div>
          <div class="rp-field-error" id="err-hl-down"></div>
        </div>

        <!-- Input 3: Loan Amount (Auto-Calculated) -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <div class="rp-label-with-toggle">
              <label for="hl-input-amount" class="rp-field-label">Loan Amount</label>
              <span class="rp-badge rp-badge-neutral" style="font-size:10px">Auto-Calculated</span>
            </div>
            <div class="rp-input-affix-wrap">
              <span class="rp-affix">NPR</span>
              <input
                type="number"
                id="hl-input-amount"
                class="rp-number-input"
                value="${s.loanAmount}"
                min="100000"
                max="${s.propertyPrice}"
                step="50000"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Loan Amount in NPR"
              >
            </div>
          </div>
          <div class="rp-range-ticks" style="margin-top:2px">
            <span>Property Price (${formatCompactNPR(s.propertyPrice)}) − Down Payment (${formatCompactNPR(s.downPayment)})</span>
          </div>
          <div class="rp-field-error" id="err-hl-amount"></div>
        </div>

        <!-- Input 4: Annual Interest Rate -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <label for="hl-input-rate" class="rp-field-label">Annual Interest Rate</label>
            <div class="rp-input-affix-wrap">
              <input
                type="number"
                id="hl-input-rate"
                class="rp-number-input text-right"
                value="${s.annualRate}"
                min="4"
                max="25"
                step="0.25"
                inputmode="decimal"
                autocomplete="off"
                aria-label="Interest Rate"
              >
              <span class="rp-affix">%</span>
            </div>
          </div>
          <input
            type="range"
            id="hl-range-rate"
            class="rp-range-slider"
            value="${s.annualRate}"
            min="6"
            max="16"
            step="0.25"
            aria-label="Interest Rate Slider"
          >
          <div class="rp-range-ticks">
            <span>6%</span>
            <span>8.75% (Avg Nepal Home Loan)</span>
            <span>16%</span>
          </div>
          <div class="rp-field-error" id="err-hl-rate"></div>
        </div>

        <!-- Input 5: Loan Tenure (Years / Months) -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <div class="rp-label-with-toggle">
              <label for="hl-input-tenure" class="rp-field-label">Loan Tenure</label>
              <div class="rp-unit-switch" role="group" aria-label="Tenure Unit">
                <button
                  type="button"
                  class="rp-unit-btn ${!isMonths ? 'active' : ''}"
                  id="hl-unit-years"
                  aria-pressed="${!isMonths}"
                >Years</button>
                <button
                  type="button"
                  class="rp-unit-btn ${isMonths ? 'active' : ''}"
                  id="hl-unit-months"
                  aria-pressed="${isMonths}"
                >Months</button>
              </div>
            </div>
            <div class="rp-input-affix-wrap">
              <input
                type="number"
                id="hl-input-tenure"
                class="rp-number-input text-right"
                value="${s.tenure}"
                min="1"
                max="${isMonths ? 360 : 30}"
                step="1"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Loan Tenure"
              >
              <span class="rp-affix" id="hl-tenure-affix">${isMonths ? 'Mo' : 'Yr'}</span>
            </div>
          </div>
          <input
            type="range"
            id="hl-range-tenure"
            class="rp-range-slider"
            value="${s.tenure}"
            min="1"
            max="${isMonths ? 360 : 30}"
            step="1"
            aria-label="Loan Tenure Slider"
          >
          <div class="rp-range-ticks" id="hl-tenure-ticks">
            ${isMonths ? `<span>12 Mo</span><span>180 Mo (15 Yr)</span><span>360 Mo (30 Yr)</span>` : `<span>1 Yr</span><span>15 Yr</span><span>30 Yr</span>`}
          </div>
          <div class="rp-field-error" id="err-hl-tenure"></div>
        </div>

        <!-- Input 6: Processing Fee (Optional) -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <label for="hl-input-fee" class="rp-field-label">
              Processing Fee <span style="font-size:var(--text-xs);color:var(--color-text-muted)">(Optional)</span>
            </label>
            <div class="rp-input-affix-wrap">
              <input
                type="number"
                id="hl-input-fee"
                class="rp-number-input text-right"
                value="${s.processingFee}"
                min="0"
                max="5"
                step="0.25"
                inputmode="decimal"
                autocomplete="off"
                aria-label="Processing Fee Percentage"
              >
              <span class="rp-affix">%</span>
            </div>
          </div>
          <div class="rp-range-ticks" style="margin-top:2px">
            <span id="hl-fee-calc-text">Fee: ${formatNPR(res.processingFeeAmount)}</span>
            <span>Typical Nepal bank: 0% – 0.75%</span>
          </div>
        </div>

      </div>

      <!-- Results & Visual Analytics Column -->
      <div class="rp-calc-results-card">
        
        <!-- Primary Results Grid -->
        <div class="rp-results-grid">
          
          <div class="rp-stat-card maturity span-2">
            <div class="rp-maturity-header">
              <span class="rp-stat-label">Monthly EMI</span>
              <span class="rp-badge rp-badge-pulse">Housing Installment</span>
            </div>
            <div class="rp-stat-value maturity-large" id="hl-res-monthly">${formatNPR(res.monthlyEMI)}</div>
            <div class="rp-stat-caption">Fixed monthly installment on reducing balance</div>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Loan Amount</span>
            <div class="rp-stat-value accent" id="hl-res-loan-amt">${formatNPR(s.loanAmount)}</div>
            <span class="rp-stat-sub" id="hl-res-ltv-sub">LTV: ${ltv}%</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Total Interest</span>
            <div class="rp-stat-value" style="color:#f59e0b" id="hl-res-interest">${formatNPR(res.totalInterest)}</div>
            <span class="rp-stat-sub" id="hl-res-interest-pct">${res.interestPct}% of total payment</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Total Payment</span>
            <div class="rp-stat-value" id="hl-res-total">${formatNPR(res.totalPayment)}</div>
            <span class="rp-stat-sub">Principal + Interest</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Total Borrowing Cost</span>
            <div class="rp-stat-value" style="color:#38bdf8" id="hl-res-effective">${formatNPR(res.effectiveTotalCost)}</div>
            <span class="rp-stat-sub" id="hl-res-fee-note">Including ${formatNPR(res.processingFeeAmount)} fee</span>
          </div>

        </div>

        <!-- Loan Health Indicator (Loan-to-Value LTV) -->
        <div class="rp-ltv-card" id="hl-ltv-card">
          <div class="rp-ltv-header">
            <div class="rp-ltv-title-group">
              <span class="rp-ltv-title">Loan Health Indicator: Loan-to-Value (LTV)</span>
              <span class="rp-ltv-badge ${ltvHealth.badgeClass}" id="hl-ltv-badge">${ltv}% · ${ltvHealth.label}</span>
            </div>
          </div>

          <!-- LTV Visual Meter -->
          <div class="rp-ltv-meter-track">
            <div class="rp-ltv-meter-fill" id="hl-ltv-meter-fill" style="width: ${Math.min(100, ltv)}%; background-color: ${ltvHealth.color}"></div>
            <div class="rp-ltv-threshold mark-70" title="NRB 70% Guideline"><span>70%</span></div>
            <div class="rp-ltv-threshold mark-85" title="85% High Risk"><span>85%</span></div>
          </div>

          <div class="rp-ltv-legend">
            <span class="rp-ltv-legend-item"><span class="rp-ltv-dot green"></span> &lt;70% Low Risk</span>
            <span class="rp-ltv-legend-item"><span class="rp-ltv-dot yellow"></span> 70%–85% Moderate</span>
            <span class="rp-ltv-legend-item"><span class="rp-ltv-dot red"></span> &gt;85% High Risk</span>
          </div>

          <p class="rp-ltv-desc" id="hl-ltv-desc">
            ${ltvHealth.desc}
          </p>
          <div class="rp-ltv-disclaimer">
            ℹ️ <em>Educational Indicator: Nepal Rastra Bank guidelines specify residential home loan LTV caps (typically 70% for residential homes, and 50% for real estate loans in the Kathmandu valley).</em>
          </div>
        </div>

        <!-- Doughnut Chart: Principal vs Interest -->
        <div id="hl-donut-container">
          ${renderLoanDonutChart({ principal: res.loanAmount, totalInterest: res.totalInterest })}
        </div>

      </div>

    </div>

    <!-- Outstanding Balance Graph -->
    <div class="rp-calc-section" id="hl-balance-chart-container">
      ${renderLoanBalanceChart({ yearlyMilestones: scheduleData.yearlyMilestones })}
    </div>

    <!-- Amortization Schedule Table -->
    <div class="rp-calc-section rp-table-section">
      <div class="rp-section-heading-row">
        <div>
          <h3>Home Loan Amortization Schedule</h3>
          <p class="rp-subtext">Month-by-month breakdown of principal payoff, interest, and remaining balance.</p>
        </div>
        <div class="rp-table-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="hl-btn-toggle-schedule">
            ${s.showFullSchedule ? 'Show First 12 Months' : `View Full Schedule (${res.tenureMonths} Months)`}
          </button>
        </div>
      </div>

      <div class="rp-table-responsive">
        <table class="rp-growth-table rp-amort-table" aria-label="Home Loan Amortization Schedule">
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Opening Balance</th>
              <th scope="col">EMI</th>
              <th scope="col">Principal Paid</th>
              <th scope="col">Interest Paid</th>
              <th scope="col">Closing Balance</th>
            </tr>
          </thead>
          <tbody id="hl-amort-table-body">
            ${renderAmortizationRows(scheduleData.monthlySchedule, s.showFullSchedule)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// 2. PERSONAL LOAN MARKUP
// ─────────────────────────────────────────────────────────────
function renderPersonalLoanMarkup() {
  const s = loanState.personal;
  const isMonths = s.tenureUnit === 'months';
  const tenureMonths = isMonths ? s.tenure : s.tenure * 12;

  const res = calculateEMI({
    loanAmount: s.loanAmount,
    annualRate: s.annualRate,
    tenureMonths,
    processingFeePercent: s.processingFee,
  });

  const interestOfLoanPct = s.loanAmount > 0
    ? Math.round((res.totalInterest / s.loanAmount) * 1000) / 10
    : 0;

  const comparisonData = calculateLoanComparison({
    loanAmount: s.loanAmount,
    annualRate: s.annualRate,
    tenureYearsArray: [5, 7, 10],
    processingFeePercent: s.processingFee,
  });

  const scheduleData = generateAmortizationSchedule({
    loanAmount: s.loanAmount,
    annualRate: s.annualRate,
    tenureMonths,
    monthlyEMI: res.monthlyEMI,
  });

  return `
    <div class="rp-calc-layout">
      
      <!-- Controls Column -->
      <div class="rp-calc-controls-card">
        <div class="rp-calc-card-header">
          <div>
            <h3 style="margin:0">Personal Loan Parameters</h3>
            <span style="font-size:var(--text-xs);color:var(--color-text-secondary)">Unsecured personal financing</span>
          </div>
          <span class="rp-badge rp-badge-accent">Reducing Balance</span>
        </div>

        <!-- Input 1: Loan Amount -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <label for="pl-input-amount" class="rp-field-label">Loan Amount</label>
            <div class="rp-input-affix-wrap">
              <span class="rp-affix">NPR</span>
              <input
                type="number"
                id="pl-input-amount"
                class="rp-number-input"
                value="${s.loanAmount}"
                min="50000"
                max="5000000"
                step="25000"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Loan Amount in NPR"
              >
            </div>
          </div>
          <input
            type="range"
            id="pl-range-amount"
            class="rp-range-slider"
            value="${s.loanAmount}"
            min="50000"
            max="3000000"
            step="25000"
            aria-label="Loan Amount Slider"
          >
          <div class="rp-range-ticks">
            <span>NPR 50,000</span>
            <span>NPR 5 Lakhs (Default)</span>
            <span>NPR 30 Lakhs</span>
          </div>
          <div class="rp-field-error" id="err-pl-amount"></div>
        </div>

        <!-- Input 2: Annual Interest Rate -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <label for="pl-input-rate" class="rp-field-label">Annual Interest Rate</label>
            <div class="rp-input-affix-wrap">
              <input
                type="number"
                id="pl-input-rate"
                class="rp-number-input text-right"
                value="${s.annualRate}"
                min="5"
                max="25"
                step="0.25"
                inputmode="decimal"
                autocomplete="off"
                aria-label="Interest Rate"
              >
              <span class="rp-affix">%</span>
            </div>
          </div>
          <input
            type="range"
            id="pl-range-rate"
            class="rp-range-slider"
            value="${s.annualRate}"
            min="8"
            max="20"
            step="0.25"
            aria-label="Interest Rate Slider"
          >
          <div class="rp-range-ticks">
            <span>8%</span>
            <span>12% (Avg Nepal Personal Loan)</span>
            <span>20%</span>
          </div>
          <div class="rp-field-error" id="err-pl-rate"></div>
        </div>

        <!-- Input 3: Loan Period (Years or Months) -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <div class="rp-label-with-toggle">
              <label for="pl-input-tenure" class="rp-field-label">Loan Period</label>
              <div class="rp-unit-switch" role="group" aria-label="Tenure Unit">
                <button
                  type="button"
                  class="rp-unit-btn ${!isMonths ? 'active' : ''}"
                  id="pl-unit-years"
                  aria-pressed="${!isMonths}"
                >Years</button>
                <button
                  type="button"
                  class="rp-unit-btn ${isMonths ? 'active' : ''}"
                  id="pl-unit-months"
                  aria-pressed="${isMonths}"
                >Months</button>
              </div>
            </div>
            <div class="rp-input-affix-wrap">
              <input
                type="number"
                id="pl-input-tenure"
                class="rp-number-input text-right"
                value="${s.tenure}"
                min="1"
                max="${isMonths ? 120 : 10}"
                step="1"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Loan Period"
              >
              <span class="rp-affix" id="pl-tenure-affix">${isMonths ? 'Mo' : 'Yr'}</span>
            </div>
          </div>
          <input
            type="range"
            id="pl-range-tenure"
            class="rp-range-slider"
            value="${s.tenure}"
            min="1"
            max="${isMonths ? 120 : 10}"
            step="1"
            aria-label="Loan Period Slider"
          >
          <div class="rp-range-ticks" id="pl-tenure-ticks">
            ${isMonths ? `<span>6 Mo</span><span>60 Mo (5 Yr)</span><span>120 Mo (10 Yr)</span>` : `<span>1 Yr</span><span>5 Yr</span><span>10 Yr</span>`}
          </div>
          <div class="rp-field-error" id="err-pl-tenure"></div>
        </div>

        <!-- Input 4: Processing Fee (Optional) -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <label for="pl-input-fee" class="rp-field-label">
              Processing Fee <span style="font-size:var(--text-xs);color:var(--color-text-muted)">(Optional)</span>
            </label>
            <div class="rp-input-affix-wrap">
              <input
                type="number"
                id="pl-input-fee"
                class="rp-number-input text-right"
                value="${s.processingFee}"
                min="0"
                max="5"
                step="0.25"
                inputmode="decimal"
                autocomplete="off"
                aria-label="Processing Fee Percentage"
              >
              <span class="rp-affix">%</span>
            </div>
          </div>
          <div class="rp-range-ticks" style="margin-top:2px">
            <span id="pl-fee-calc-text">Fee: ${formatNPR(res.processingFeeAmount)}</span>
            <span>Typical Nepal bank: 0.5% – 1.0%</span>
          </div>
        </div>

      </div>

      <!-- Results Column -->
      <div class="rp-calc-results-card">
        
        <div class="rp-results-grid">
          <div class="rp-stat-card maturity span-2">
            <div class="rp-maturity-header">
              <span class="rp-stat-label">Monthly EMI</span>
              <span class="rp-badge rp-badge-pulse">Personal Loan Installment</span>
            </div>
            <div class="rp-stat-value maturity-large" id="pl-res-monthly">${formatNPR(res.monthlyEMI)}</div>
            <div class="rp-stat-caption">Fixed monthly installment on reducing balance</div>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Total Interest</span>
            <div class="rp-stat-value" style="color:#f59e0b" id="pl-res-interest">${formatNPR(res.totalInterest)}</div>
            <span class="rp-stat-sub" id="pl-res-interest-pct">${res.interestPct}% of total payment</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Interest as % of Loan</span>
            <div class="rp-stat-value accent" id="pl-res-loan-ratio">${interestOfLoanPct}%</div>
            <span class="rp-stat-sub">Lifetime interest markup</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Total Payment</span>
            <div class="rp-stat-value" id="pl-res-total">${formatNPR(res.totalPayment)}</div>
            <span class="rp-stat-sub">Principal + Interest</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Effective Borrowing Cost</span>
            <div class="rp-stat-value" style="color:#38bdf8" id="pl-res-effective">${formatNPR(res.effectiveTotalCost)}</div>
            <span class="rp-stat-sub" id="pl-res-fee-sub">Including ${formatNPR(res.processingFeeAmount)} fee</span>
          </div>
        </div>

        <!-- Doughnut Chart -->
        <div id="pl-donut-container">
          ${renderLoanDonutChart({ principal: res.loanAmount, totalInterest: res.totalInterest })}
        </div>

      </div>

    </div>

    <!-- Quick Comparison: 5 Years vs 7 Years vs 10 Years -->
    <div class="rp-comparison-section">
      <div class="rp-section-heading-row">
        <div>
          <h3>Quick Tenure Comparison: 5 Years vs 7 Years vs 10 Years</h3>
          <p class="rp-subtext">
            Compare how tenure affects monthly payments and lifetime interest. Longer loans offer lower monthly EMIs, but significantly inflate total interest paid.
          </p>
        </div>
      </div>

      <div class="rp-tenure-comp-grid" id="pl-comp-grid">
        ${renderTenureComparisonCards(comparisonData, s.tenure, isMonths)}
      </div>

      <div class="rp-tradeoff-note">
        💡 <strong>The Loan Duration Trade-Off:</strong> Choosing a 10-year term instead of 5 years lowers your monthly commitment, but substantially increases total interest paid over the life of the loan. Whenever cash flow allows, choosing a shorter tenure saves significant money in Nepal.
      </div>
    </div>

    <!-- Outstanding Balance Graph -->
    <div class="rp-calc-section" id="pl-balance-chart-container">
      ${renderLoanBalanceChart({ yearlyMilestones: scheduleData.yearlyMilestones })}
    </div>

    <!-- Amortization Schedule Table -->
    <div class="rp-calc-section rp-table-section">
      <div class="rp-section-heading-row">
        <div>
          <h3>Personal Loan Amortization Schedule</h3>
          <p class="rp-subtext">Month-by-month reducing balance breakdown.</p>
        </div>
        <div class="rp-table-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="pl-btn-toggle-schedule">
            ${s.showFullSchedule ? 'Show First 12 Months' : `View Full Schedule (${res.tenureMonths} Months)`}
          </button>
        </div>
      </div>

      <div class="rp-table-responsive">
        <table class="rp-growth-table rp-amort-table" aria-label="Personal Loan Amortization Schedule">
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Opening Balance</th>
              <th scope="col">EMI</th>
              <th scope="col">Principal Paid</th>
              <th scope="col">Interest Paid</th>
              <th scope="col">Closing Balance</th>
            </tr>
          </thead>
          <tbody id="pl-amort-table-body">
            ${renderAmortizationRows(scheduleData.monthlySchedule, s.showFullSchedule)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// 3. VEHICLE LOAN MARKUP
// ─────────────────────────────────────────────────────────────
function renderVehicleLoanMarkup() {
  const s = loanState.vehicle;
  const isMonths = s.tenureUnit === 'months';
  const tenureMonths = isMonths ? s.tenure : s.tenure * 12;

  const res = calculateEMI({
    loanAmount: s.loanAmount,
    annualRate: s.annualRate,
    tenureMonths,
    processingFeePercent: s.processingFee,
  });

  const downPaymentPct = s.vehiclePrice > 0
    ? Math.round((s.downPayment / s.vehiclePrice) * 1000) / 10
    : 0;

  const ltv = calculateLTV(s.loanAmount, s.vehiclePrice);
  const ltvHealth = getLTVHealth(ltv);

  const scheduleData = generateAmortizationSchedule({
    loanAmount: s.loanAmount,
    annualRate: s.annualRate,
    tenureMonths,
    monthlyEMI: res.monthlyEMI,
  });

  return `
    <div class="rp-calc-layout">
      
      <!-- Controls Column -->
      <div class="rp-calc-controls-card">
        <div class="rp-calc-card-header">
          <div>
            <h3 style="margin:0">Vehicle Loan Parameters</h3>
            <span style="font-size:var(--text-xs);color:var(--color-text-secondary)">Two-Wheeler & Four-Wheeler Auto Financing</span>
          </div>
          <span class="rp-badge rp-badge-accent">Asset-Backed</span>
        </div>

        <!-- Vehicle Type Selector (Pills) -->
        <div class="rp-field-group">
          <label class="rp-field-label">Vehicle Type (Optional)</label>
          <div class="rp-vtype-pills" role="radiogroup" aria-label="Vehicle Type">
            ${VEHICLE_TYPES.map(vt => `
              <button
                type="button"
                class="rp-vtype-btn ${s.vehicleType === vt.label ? 'active' : ''}"
                data-vtype="${vt.label}"
                role="radio"
                aria-checked="${s.vehicleType === vt.label}"
                title="${vt.note}"
              >
                <span>${vt.icon}</span> ${vt.label}
              </button>
            `).join('')}
          </div>
          <div class="rp-vtype-context-note" id="vl-vtype-note">
            ${s.vehicleType === 'Electric Vehicle (EV)'
              ? '⚡ <strong>Nepal Rastra Bank (NRB) Green Incentive:</strong> Electric Vehicles (EVs) are eligible for up to <strong>80%–90% financing</strong> compared to 50% for standard fossil-fuel vehicles.'
              : '🚗 <strong>NRB Guideline:</strong> Maximum financing for standard private internal-combustion vehicles is <strong>50% LTV</strong>. Higher down payment is required.'}
          </div>
        </div>

        <!-- Input 1: Vehicle Price -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <label for="vl-input-price" class="rp-field-label">Vehicle Price (On-Road)</label>
            <div class="rp-input-affix-wrap">
              <span class="rp-affix">NPR</span>
              <input
                type="number"
                id="vl-input-price"
                class="rp-number-input"
                value="${s.vehiclePrice}"
                min="100000"
                max="50000000"
                step="50000"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Vehicle Price in NPR"
              >
            </div>
          </div>
          <input
            type="range"
            id="vl-range-price"
            class="rp-range-slider"
            value="${s.vehiclePrice}"
            min="200000"
            max="15000000"
            step="50000"
            aria-label="Vehicle Price Slider"
          >
          <div class="rp-range-ticks">
            <span>NPR 2 Lakhs</span>
            <span>NPR 45 Lakhs (Default)</span>
            <span>NPR 1.5 Crore</span>
          </div>
          <div class="rp-field-error" id="err-vl-price"></div>
        </div>

        <!-- Input 2: Down Payment -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <div class="rp-label-with-toggle">
              <label for="vl-input-down" class="rp-field-label">Down Payment</label>
              <span class="rp-field-hint" id="vl-down-pct-hint">(${downPaymentPct}% of Price)</span>
            </div>
            <div class="rp-input-affix-wrap">
              <span class="rp-affix">NPR</span>
              <input
                type="number"
                id="vl-input-down"
                class="rp-number-input"
                value="${s.downPayment}"
                min="0"
                max="${s.vehiclePrice}"
                step="25000"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Down Payment in NPR"
              >
            </div>
          </div>
          <input
            type="range"
            id="vl-range-down"
            class="rp-range-slider"
            value="${s.downPayment}"
            min="0"
            max="${Math.max(500000, s.vehiclePrice)}"
            step="25000"
            aria-label="Down Payment Slider"
          >
          <div class="rp-range-ticks">
            <span>NPR 0</span>
            <span>NPR 9 Lakhs (20%)</span>
            <span>NPR ${formatCompactNPR(s.vehiclePrice)}</span>
          </div>
          <div class="rp-field-error" id="err-vl-down"></div>
        </div>

        <!-- Input 3: Loan Amount (Auto-Calculated) -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <div class="rp-label-with-toggle">
              <label for="vl-input-amount" class="rp-field-label">Loan Amount</label>
              <span class="rp-badge rp-badge-neutral" style="font-size:10px">Auto-Calculated</span>
            </div>
            <div class="rp-input-affix-wrap">
              <span class="rp-affix">NPR</span>
              <input
                type="number"
                id="vl-input-amount"
                class="rp-number-input"
                value="${s.loanAmount}"
                min="50000"
                max="${s.vehiclePrice}"
                step="25000"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Loan Amount in NPR"
              >
            </div>
          </div>
          <div class="rp-range-ticks" style="margin-top:2px">
            <span>Vehicle Price (${formatCompactNPR(s.vehiclePrice)}) − Down Payment (${formatCompactNPR(s.downPayment)})</span>
          </div>
          <div class="rp-field-error" id="err-vl-amount"></div>
        </div>

        <!-- Input 4: Annual Interest Rate -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <label for="vl-input-rate" class="rp-field-label">Annual Interest Rate</label>
            <div class="rp-input-affix-wrap">
              <input
                type="number"
                id="vl-input-rate"
                class="rp-number-input text-right"
                value="${s.annualRate}"
                min="5"
                max="25"
                step="0.25"
                inputmode="decimal"
                autocomplete="off"
                aria-label="Interest Rate"
              >
              <span class="rp-affix">%</span>
            </div>
          </div>
          <input
            type="range"
            id="vl-range-rate"
            class="rp-range-slider"
            value="${s.annualRate}"
            min="6"
            max="18"
            step="0.25"
            aria-label="Interest Rate Slider"
          >
          <div class="rp-range-ticks">
            <span>6%</span>
            <span>9% (Avg Nepal Auto Loan)</span>
            <span>18%</span>
          </div>
          <div class="rp-field-error" id="err-vl-rate"></div>
        </div>

        <!-- Input 5: Loan Period -->
        <div class="rp-field-group">
          <div class="rp-field-top">
            <div class="rp-label-with-toggle">
              <label for="vl-input-tenure" class="rp-field-label">Loan Period</label>
              <div class="rp-unit-switch" role="group" aria-label="Tenure Unit">
                <button
                  type="button"
                  class="rp-unit-btn ${!isMonths ? 'active' : ''}"
                  id="vl-unit-years"
                  aria-pressed="${!isMonths}"
                >Years</button>
                <button
                  type="button"
                  class="rp-unit-btn ${isMonths ? 'active' : ''}"
                  id="vl-unit-months"
                  aria-pressed="${isMonths}"
                >Months</button>
              </div>
            </div>
            <div class="rp-input-affix-wrap">
              <input
                type="number"
                id="vl-input-tenure"
                class="rp-number-input text-right"
                value="${s.tenure}"
                min="1"
                max="${isMonths ? 120 : 10}"
                step="1"
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="off"
                aria-label="Loan Period"
              >
              <span class="rp-affix" id="vl-tenure-affix">${isMonths ? 'Mo' : 'Yr'}</span>
            </div>
          </div>
          <input
            type="range"
            id="vl-range-tenure"
            class="rp-range-slider"
            value="${s.tenure}"
            min="1"
            max="${isMonths ? 120 : 10}"
            step="1"
            aria-label="Loan Period Slider"
          >
          <div class="rp-range-ticks" id="vl-tenure-ticks">
            ${isMonths ? `<span>12 Mo</span><span>84 Mo (7 Yr)</span><span>120 Mo (10 Yr)</span>` : `<span>1 Yr</span><span>7 Yr (Default)</span><span>10 Yr</span>`}
          </div>
          <div class="rp-field-error" id="err-vl-tenure"></div>
        </div>

      </div>

      <!-- Results Column -->
      <div class="rp-calc-results-card">
        
        <div class="rp-results-grid">
          <div class="rp-stat-card maturity span-2">
            <div class="rp-maturity-header">
              <span class="rp-stat-label">Monthly EMI</span>
              <span class="rp-badge rp-badge-pulse">Vehicle Installment</span>
            </div>
            <div class="rp-stat-value maturity-large" id="vl-res-monthly">${formatNPR(res.monthlyEMI)}</div>
            <div class="rp-stat-caption">Fixed monthly installment on reducing balance</div>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Loan Amount</span>
            <div class="rp-stat-value accent" id="vl-res-loan">${formatNPR(s.loanAmount)}</div>
            <span class="rp-stat-sub">Principal financed</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Down Payment %</span>
            <div class="rp-stat-value" style="color:#10b981" id="vl-res-down-pct">${downPaymentPct}%</div>
            <span class="rp-stat-sub" id="vl-res-down-amt">${formatNPR(s.downPayment)} upfront</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Total Interest</span>
            <div class="rp-stat-value" style="color:#f59e0b" id="vl-res-interest">${formatNPR(res.totalInterest)}</div>
            <span class="rp-stat-sub" id="vl-res-interest-pct">${res.interestPct}% of total payment</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Total Payment</span>
            <div class="rp-stat-value" id="vl-res-total">${formatNPR(res.totalPayment)}</div>
            <span class="rp-stat-sub">Principal + Interest</span>
          </div>

          <div class="rp-stat-card">
            <span class="rp-stat-label">Loan-to-Value (LTV)</span>
            <div class="rp-stat-value" style="color:${ltvHealth.color}" id="vl-res-ltv">${ltv}%</div>
            <span class="rp-stat-sub" id="vl-res-ltv-sub">${ltvHealth.label}</span>
          </div>
        </div>

        <!-- Doughnut Chart -->
        <div id="vl-donut-container">
          ${renderLoanDonutChart({ principal: res.loanAmount, totalInterest: res.totalInterest })}
        </div>

      </div>

    </div>

    <!-- Outstanding Balance Graph -->
    <div class="rp-calc-section" id="vl-balance-chart-container">
      ${renderLoanBalanceChart({ yearlyMilestones: scheduleData.yearlyMilestones })}
    </div>

    <!-- Amortization Schedule Table -->
    <div class="rp-calc-section rp-table-section">
      <div class="rp-section-heading-row">
        <div>
          <h3>Vehicle Loan Amortization Schedule</h3>
          <p class="rp-subtext">Month-by-month reducing balance breakdown.</p>
        </div>
        <div class="rp-table-actions">
          <button type="button" class="btn btn-secondary btn-sm" id="vl-btn-toggle-schedule">
            ${s.showFullSchedule ? 'Show First 12 Months' : `View Full Schedule (${res.tenureMonths} Months)`}
          </button>
        </div>
      </div>

      <div class="rp-table-responsive">
        <table class="rp-growth-table rp-amort-table" aria-label="Vehicle Loan Amortization Schedule">
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Opening Balance</th>
              <th scope="col">EMI</th>
              <th scope="col">Principal Paid</th>
              <th scope="col">Interest Paid</th>
              <th scope="col">Closing Balance</th>
            </tr>
          </thead>
          <tbody id="vl-amort-table-body">
            ${renderAmortizationRows(scheduleData.monthlySchedule, s.showFullSchedule)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// 4. SHARED EDUCATIONAL SECTION
// ─────────────────────────────────────────────────────────────
function renderSharedEducationalSection() {
  return `
    <div class="rp-calc-section rp-edu-cards-section" style="margin-top:var(--space-8)">
      <h3 style="font-size:var(--text-xl);color:var(--color-heading);margin-bottom:var(--space-2)">
        Understanding Loans in Nepal
      </h3>
      <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-6)">
        Key differences, interest structures, and Nepal Rastra Bank (NRB) regulatory insights for smart borrowing.
      </p>

      <div class="rp-edu-grid">
        
        <!-- Educational Card 1: Home Loan -->
        <div class="rp-edu-card">
          <div class="rp-edu-icon-wrap" style="color:#1da1f2">🏠</div>
          <h4 style="color:var(--color-heading)">Home Loan</h4>
          <ul class="rp-edu-list">
            <li><strong>Long Repayment Period:</strong> Typically 10 to 30 years, allowing for manageable monthly installments on large property purchases.</li>
            <li><strong>Lower Interest Rates:</strong> Because real estate serves as prime collateral (registered mortgage deed), home loans carry lower interest rates than unsecured personal credit.</li>
            <li><strong>NRB LTV Guidelines:</strong> Nepal Rastra Bank limits financing up to 70% for first-time residential home buyers, and 50% for real estate in Kathmandu valley.</li>
          </ul>
        </div>

        <!-- Educational Card 2: Personal Loan -->
        <div class="rp-edu-card">
          <div class="rp-edu-icon-wrap" style="color:#f59e0b">💼</div>
          <h4 style="color:var(--color-heading)">Personal Loan</h4>
          <ul class="rp-edu-list">
            <li><strong>Usually Unsecured:</strong> Requires no physical collateral, approved primarily on monthly salary slips, tax clearance, or business cash flow.</li>
            <li><strong>Higher Interest:</strong> Unsecured risk causes banks to charge higher interest rates (commonly 11%–16% in Nepal).</li>
            <li><strong>Shorter Tenures:</strong> Typically capped at 3 to 5 years (maximum 7 years), making shorter duration essential to avoid paying massive interest markups.</li>
          </ul>
        </div>

        <!-- Educational Card 3: Vehicle Loan -->
        <div class="rp-edu-card">
          <div class="rp-edu-icon-wrap" style="color:#10b981">🚗</div>
          <h4 style="color:var(--color-heading)">Vehicle Loan</h4>
          <ul class="rp-edu-list">
            <li><strong>Asset-Backed Hypothecation:</strong> Bank places a lien on the vehicle blue book (Yatayat Karyalaya), protecting the lender against default.</li>
            <li><strong>Importance of Down Payment:</strong> Vehicles are depreciating assets that lose 15%–20% value upon registration. A solid down payment prevents "negative equity" (owing more than car is worth).</li>
            <li><strong>Electric Vehicle (EV) Benefit:</strong> NRB allows up to 80%–90% financing for zero-emission electric vehicles, compared to 50% for petrol/diesel cars.</li>
          </ul>
        </div>

      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// HELPER: Amortization Table Rows
// ─────────────────────────────────────────────────────────────
function renderAmortizationRows(schedule, showFull) {
  const rows = showFull ? schedule : schedule.slice(0, 12);
  if (!rows || rows.length === 0) {
    return `<tr><td colspan="6" style="text-align:center;padding:20px;color:var(--color-text-muted)">No schedule available</td></tr>`;
  }

  return rows.map(r => `
    <tr>
      <td class="rp-num">${r.month}</td>
      <td class="rp-num">${formatNPR(r.openingBalance)}</td>
      <td class="rp-num">${formatNPR(r.emi)}</td>
      <td class="rp-num" style="color:#10B981">${formatNPR(r.principalPaid)}</td>
      <td class="rp-num" style="color:#f59e0b">${formatNPR(r.interestPaid)}</td>
      <td class="rp-num">${formatNPR(r.closingBalance)}</td>
    </tr>
  `).join('');
}

// ─────────────────────────────────────────────────────────────
// HELPER: 5, 7, 10 Years Comparison Cards
// ─────────────────────────────────────────────────────────────
function renderTenureComparisonCards(compList, currentTenure, isMonths) {
  const currentYears = isMonths ? Math.round(currentTenure / 12) : currentTenure;

  return compList.map(c => {
    const isCurrent = c.years === currentYears;
    return `
      <div class="rp-comp-card ${isCurrent ? 'current-active' : ''}">
        <div class="rp-comp-header">
          <span class="rp-comp-years">${c.years} Years</span>
          ${isCurrent ? `<span class="rp-badge rp-badge-accent">Selected</span>` : ''}
        </div>
        <div class="rp-comp-metric">
          <span class="rp-comp-label">Monthly EMI:</span>
          <span class="rp-comp-val accent">${formatNPR(c.monthlyEMI)}</span>
        </div>
        <div class="rp-comp-metric">
          <span class="rp-comp-label">Total Interest:</span>
          <span class="rp-comp-val" style="color:#f59e0b">${formatNPR(c.totalInterest)}</span>
        </div>
        <div class="rp-comp-metric">
          <span class="rp-comp-label">Total Outflow:</span>
          <span class="rp-comp-val">${formatNPR(c.totalPayment)}</span>
        </div>
        <div class="rp-comp-foot">
          Interest is <strong>${c.interestRatio}%</strong> of loan
        </div>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────────────────────
// INITIALIZATION & EVENT BINDINGS
// ─────────────────────────────────────────────────────────────
export function initLoanCalculators(initialTab = 'home') {
  const container = document.getElementById('loan-calculators-hub');
  if (!container) return;

  if (['home', 'personal', 'vehicle'].includes(initialTab)) {
    loanState.activeSubTab = initialTab;
  }

  // Bind Sub-Tab navigation
  const subTabBtns = container.querySelectorAll('.rp-loan-tab-btn');
  const subPanes = {
    home: document.getElementById('loan-pane-home'),
    personal: document.getElementById('loan-pane-personal'),
    vehicle: document.getElementById('loan-pane-vehicle'),
  };

  function switchLoanSubTab(targetTab) {
    if (!['home', 'personal', 'vehicle'].includes(targetTab)) return;
    loanState.activeSubTab = targetTab;

    subTabBtns.forEach(btn => {
      const match = btn.dataset.subtab === targetTab;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    Object.keys(subPanes).forEach(k => {
      const pane = subPanes[k];
      if (pane) {
        pane.style.display = k === targetTab ? 'block' : 'none';
        pane.classList.toggle('active', k === targetTab);
      }
    });

    // Update URL query or path if on /calculators/home-loan etc.
    const targetUrl = targetTab === 'home'
      ? '/calculators/home-loan'
      : targetTab === 'personal'
        ? '/calculators/personal-loan'
        : '/calculators/vehicle-loan';

    if (getAppPathname().startsWith('/calculators/') && getAppPathname() !== targetUrl) {
      window.history.pushState({}, '', toBrowserPath(targetUrl));
    }
  }

  subTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLoanSubTab(btn.dataset.subtab);
    });
  });

  // Initialize individual sub-calculators
  initHomeLoanEvents(container);
  initPersonalLoanEvents(container);
  initVehicleLoanEvents(container);

  // Expose tab switcher globally for outside access (e.g. from directory cards)
  window._rpSwitchLoanSubTab = switchLoanSubTab;
}

/**
 * Shared interactive tooltip setup for loan balance charts
 */
function initLoanChartTooltip(balanceWrap) {
  if (!balanceWrap) return;

  function renderLoanTooltipContent(tooltip, pt) {
    const year = pt.dataset.year;
    const balance = Number(pt.dataset.balance);
    const principal = Number(pt.dataset.principal);
    const interest = Number(pt.dataset.interest);

    tooltip.innerHTML = `
      <div class="rp-tt-title">Year ${year} Milestone</div>
      <div class="rp-tt-row"><span class="rp-tt-label">Remaining Principal:</span> <span class="rp-tt-val accent">${formatNPR(balance)}</span></div>
      <div class="rp-tt-row"><span class="rp-tt-label">Principal Paid:</span> <span class="rp-tt-val">${formatNPR(principal)}</span></div>
      <div class="rp-tt-row"><span class="rp-tt-label">Interest Paid:</span> <span class="rp-tt-val" style="color:#F59E0B">${formatNPR(interest)}</span></div>
    `;

    positionChartTooltip(tooltip, pt, balanceWrap);
  }

  function handleChartTooltip(e) {
    const pt = e.target.closest('.rp-chart-point');
    const tooltip = balanceWrap.querySelector('.rp-chart-tooltip');
    if (!tooltip) return;

    if (!pt) {
      tooltip.style.display = 'none';
      return;
    }

    renderLoanTooltipContent(tooltip, pt);
  }

  function handleChartTouch(e) {
    const tooltip = balanceWrap.querySelector('.rp-chart-tooltip');
    if (!tooltip) return;

    const points = Array.from(balanceWrap.querySelectorAll('.rp-chart-point'));
    if (!points.length) return;

    const clientX = e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX;
    if (clientX === undefined) return;

    let nearestPt = null;
    let minDist = Infinity;
    points.forEach(pt => {
      const r = pt.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const dist = Math.abs(cx - clientX);
      if (dist < minDist) {
        minDist = dist;
        nearestPt = pt;
      }
    });

    if (nearestPt) {
      renderLoanTooltipContent(tooltip, nearestPt);
    }
  }

  balanceWrap.addEventListener('pointerover', handleChartTooltip);
  balanceWrap.addEventListener('focusin', handleChartTooltip);
  balanceWrap.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      handleChartTouch(e);
    } else {
      handleChartTooltip(e);
    }
  });
  balanceWrap.addEventListener('touchstart', handleChartTouch, { passive: true });
  balanceWrap.addEventListener('touchmove', handleChartTouch, { passive: true });
  balanceWrap.addEventListener('pointerleave', () => {
    const tooltip = balanceWrap.querySelector('.rp-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
  balanceWrap.addEventListener('focusout', () => {
    const tooltip = balanceWrap.querySelector('.rp-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
}

// ─────────────────────────────────────────────────────────────
// 1. HOME LOAN EVENTS
// ─────────────────────────────────────────────────────────────
function initHomeLoanEvents(container) {
  const elPrice = document.getElementById('hl-input-price');
  const elRangePrice = document.getElementById('hl-range-price');
  const elDown = document.getElementById('hl-input-down');
  const elRangeDown = document.getElementById('hl-range-down');
  const elAmount = document.getElementById('hl-input-amount');
  const elRate = document.getElementById('hl-input-rate');
  const elRangeRate = document.getElementById('hl-range-rate');
  const elTenure = document.getElementById('hl-input-tenure');
  const elRangeTenure = document.getElementById('hl-range-tenure');
  const elFee = document.getElementById('hl-input-fee');
  const elUnitYears = document.getElementById('hl-unit-years');
  const elUnitMonths = document.getElementById('hl-unit-months');
  const elTenureAffix = document.getElementById('hl-tenure-affix');
  const elTenureTicks = document.getElementById('hl-tenure-ticks');
  const elDownPctHint = document.getElementById('hl-down-pct-hint');
  const elFeeCalcText = document.getElementById('hl-fee-calc-text');

  // Results elements
  const resMonthly = document.getElementById('hl-res-monthly');
  const resLoanAmt = document.getElementById('hl-res-loan-amt');
  const resLtvSub = document.getElementById('hl-res-ltv-sub');
  const resInterest = document.getElementById('hl-res-interest');
  const resInterestPct = document.getElementById('hl-res-interest-pct');
  const resTotal = document.getElementById('hl-res-total');
  const resEffective = document.getElementById('hl-res-effective');
  const resFeeNote = document.getElementById('hl-res-fee-note');

  // LTV elements
  const ltvBadge = document.getElementById('hl-ltv-badge');
  const ltvMeterFill = document.getElementById('hl-ltv-meter-fill');
  const ltvDesc = document.getElementById('hl-ltv-desc');

  // Charts & Table
  const donutWrap = document.getElementById('hl-donut-container');
  const balanceWrap = document.getElementById('hl-balance-chart-container');
  const tableBody = document.getElementById('hl-amort-table-body');
  const btnToggle = document.getElementById('hl-btn-toggle-schedule');

  let currentSchedule = [];

  function updateHomeLoan(trigger = 'all') {
    const s = loanState.home;
    const priceVal = Math.max(0, Number(elPrice?.value) || 0);
    let downVal = Math.max(0, Number(elDown?.value) || 0);

    // Auto-calculate Loan Amount: Property Price - Down Payment
    if (trigger === 'price' || trigger === 'down' || trigger === 'all') {
      if (downVal > priceVal) {
        downVal = priceVal;
        if (elDown) elDown.value = downVal;
        if (elRangeDown) elRangeDown.value = downVal;
      }
      s.propertyPrice = priceVal;
      s.downPayment = downVal;
      s.loanAmount = Math.max(0, priceVal - downVal);
      if (elAmount) elAmount.value = s.loanAmount;
    } else if (trigger === 'amount') {
      const loanVal = Math.max(0, Number(elAmount?.value) || 0);
      s.loanAmount = loanVal;
      s.downPayment = Math.max(0, priceVal - loanVal);
      if (elDown) elDown.value = s.downPayment;
      if (elRangeDown) elRangeDown.value = s.downPayment;
    }

    s.annualRate = Math.max(0, Number(elRate?.value) || 8.75);
    s.tenure = Math.max(1, Number(elTenure?.value) || 25);
    s.processingFee = Math.max(0, Number(elFee?.value) || 0);

    const isMonths = s.tenureUnit === 'months';
    const tenureMonths = isMonths ? s.tenure : s.tenure * 12;

    const res = calculateEMI({
      loanAmount: s.loanAmount,
      annualRate: s.annualRate,
      tenureMonths,
      processingFeePercent: s.processingFee,
    });

    const ltv = calculateLTV(s.loanAmount, s.propertyPrice);
    const ltvHealth = getLTVHealth(ltv);

    const scheduleData = generateAmortizationSchedule({
      loanAmount: s.loanAmount,
      annualRate: s.annualRate,
      tenureMonths,
      monthlyEMI: res.monthlyEMI,
    });
    currentSchedule = scheduleData.monthlySchedule;

    // Update DOM
    if (elDownPctHint && s.propertyPrice > 0) {
      elDownPctHint.textContent = `(${((s.downPayment / s.propertyPrice) * 100).toFixed(1)}% of Price)`;
    }
    if (elFeeCalcText) {
      elFeeCalcText.textContent = `Fee: ${formatNPR(res.processingFeeAmount)}`;
    }

    if (resMonthly) resMonthly.textContent = formatNPR(res.monthlyEMI);
    if (resLoanAmt) resLoanAmt.textContent = formatNPR(s.loanAmount);
    if (resLtvSub) resLtvSub.textContent = `LTV: ${ltv}%`;
    if (resInterest) resInterest.textContent = formatNPR(res.totalInterest);
    if (resInterestPct) resInterestPct.textContent = `${res.interestPct}% of total payment`;
    if (resTotal) resTotal.textContent = formatNPR(res.totalPayment);
    if (resEffective) resEffective.textContent = formatNPR(res.effectiveTotalCost);
    if (resFeeNote) resFeeNote.textContent = `Including ${formatNPR(res.processingFeeAmount)} fee`;

    // LTV Health
    if (ltvBadge) {
      ltvBadge.className = `rp-ltv-badge ${ltvHealth.badgeClass}`;
      ltvBadge.textContent = `${ltv}% · ${ltvHealth.label}`;
    }
    if (ltvMeterFill) {
      ltvMeterFill.style.width = `${Math.min(100, ltv)}%`;
      ltvMeterFill.style.backgroundColor = ltvHealth.color;
    }
    if (ltvDesc) ltvDesc.textContent = ltvHealth.desc;

    // Donut Chart
    if (donutWrap) {
      donutWrap.innerHTML = renderLoanDonutChart({
        principal: res.loanAmount,
        totalInterest: res.totalInterest,
      });
    }

    // Balance Chart
    if (balanceWrap) {
      balanceWrap.innerHTML = renderLoanBalanceChart({
        yearlyMilestones: scheduleData.yearlyMilestones,
      });
    }

    // Table
    if (tableBody) {
      tableBody.innerHTML = renderAmortizationRows(currentSchedule, s.showFullSchedule);
    }
    if (btnToggle) {
      btnToggle.textContent = s.showFullSchedule
        ? 'Show First 12 Months'
        : `View Full Schedule (${res.tenureMonths} Months)`;
    }
  }

  let homeLoanRaf = null;
  function scheduleHomeLoanUpdate(trigger = 'all') {
    if (homeLoanRaf) return;
    homeLoanRaf = requestAnimationFrame(() => {
      homeLoanRaf = null;
      updateHomeLoan(trigger);
    });
  }

  // Price listeners
  elPrice?.addEventListener('input', () => {
    if (elRangePrice) elRangePrice.value = elPrice.value;
    if (elRangeDown) elRangeDown.max = elPrice.value;
    scheduleHomeLoanUpdate('price');
  });
  elRangePrice?.addEventListener('input', () => {
    if (elPrice) elPrice.value = elRangePrice.value;
    if (elRangeDown) elRangeDown.max = elRangePrice.value;
    scheduleHomeLoanUpdate('price');
  });

  // Down payment listeners
  elDown?.addEventListener('input', () => {
    if (elRangeDown) elRangeDown.value = elDown.value;
    scheduleHomeLoanUpdate('down');
  });
  elRangeDown?.addEventListener('input', () => {
    if (elDown) elDown.value = elRangeDown.value;
    scheduleHomeLoanUpdate('down');
  });

  // Loan amount listener
  elAmount?.addEventListener('input', () => {
    scheduleHomeLoanUpdate('amount');
  });

  // Rate listeners
  elRate?.addEventListener('input', () => {
    if (elRangeRate) elRangeRate.value = elRate.value;
    scheduleHomeLoanUpdate('rate');
  });
  elRangeRate?.addEventListener('input', () => {
    if (elRate) elRate.value = elRangeRate.value;
    scheduleHomeLoanUpdate('rate');
  });

  // Tenure listeners
  elTenure?.addEventListener('input', () => {
    if (elRangeTenure) elRangeTenure.value = elTenure.value;
    scheduleHomeLoanUpdate('tenure');
  });
  elRangeTenure?.addEventListener('input', () => {
    if (elTenure) elTenure.value = elRangeTenure.value;
    scheduleHomeLoanUpdate('tenure');
  });

  // Fee listener
  elFee?.addEventListener('input', () => {
    scheduleHomeLoanUpdate('fee');
  });

  // Unit switcher
  function switchHomeTenureUnit(newUnit) {
    const s = loanState.home;
    if (s.tenureUnit === newUnit) return;
    s.tenureUnit = newUnit;
    const isMonths = newUnit === 'months';
    const currentVal = Number(elTenure.value) || 25;

    if (isMonths) {
      const mVal = Math.min(360, Math.max(1, Math.round(currentVal * 12)));
      elTenure.value = mVal;
      elTenure.max = 360;
      elRangeTenure.max = 360;
      elRangeTenure.value = mVal;
      if (elTenureAffix) elTenureAffix.textContent = 'Mo';
      if (elTenureTicks) elTenureTicks.innerHTML = `<span>12 Mo</span><span>180 Mo (15 Yr)</span><span>360 Mo (30 Yr)</span>`;
      elUnitMonths?.classList.add('active');
      elUnitYears?.classList.remove('active');
    } else {
      const yVal = Math.min(30, Math.max(1, Math.round(currentVal / 12)));
      elTenure.value = yVal;
      elTenure.max = 30;
      elRangeTenure.max = 30;
      elRangeTenure.value = yVal;
      if (elTenureAffix) elTenureAffix.textContent = 'Yr';
      if (elTenureTicks) elTenureTicks.innerHTML = `<span>1 Yr</span><span>15 Yr</span><span>30 Yr</span>`;
      elUnitYears?.classList.add('active');
      elUnitMonths?.classList.remove('active');
    }
    scheduleHomeLoanUpdate('tenure');
  }

  elUnitYears?.addEventListener('click', () => switchHomeTenureUnit('years'));
  elUnitMonths?.addEventListener('click', () => switchHomeTenureUnit('months'));

  // Table toggle
  btnToggle?.addEventListener('click', () => {
    loanState.home.showFullSchedule = !loanState.home.showFullSchedule;
    if (tableBody) {
      tableBody.innerHTML = renderAmortizationRows(currentSchedule, loanState.home.showFullSchedule);
    }
    if (btnToggle) {
      btnToggle.textContent = loanState.home.showFullSchedule
        ? 'Show First 12 Months'
        : `View Full Schedule (${currentSchedule.length} Months)`;
    }
  });

  initLoanChartTooltip(balanceWrap);
}

// ─────────────────────────────────────────────────────────────
// 2. PERSONAL LOAN EVENTS
// ─────────────────────────────────────────────────────────────
function initPersonalLoanEvents(container) {
  const elAmount = document.getElementById('pl-input-amount');
  const elRangeAmount = document.getElementById('pl-range-amount');
  const elRate = document.getElementById('pl-input-rate');
  const elRangeRate = document.getElementById('pl-range-rate');
  const elTenure = document.getElementById('pl-input-tenure');
  const elRangeTenure = document.getElementById('pl-range-tenure');
  const elFee = document.getElementById('pl-input-fee');
  const elUnitYears = document.getElementById('pl-unit-years');
  const elUnitMonths = document.getElementById('pl-unit-months');
  const elTenureAffix = document.getElementById('pl-tenure-affix');
  const elTenureTicks = document.getElementById('pl-tenure-ticks');
  const elFeeCalcText = document.getElementById('pl-fee-calc-text');

  // Results
  const resMonthly = document.getElementById('pl-res-monthly');
  const resInterest = document.getElementById('pl-res-interest');
  const resInterestPct = document.getElementById('pl-res-interest-pct');
  const resLoanRatio = document.getElementById('pl-res-loan-ratio');
  const resTotal = document.getElementById('pl-res-total');
  const resEffective = document.getElementById('pl-res-effective');
  const resFeeSub = document.getElementById('pl-res-fee-sub');

  // Comparison & Charts & Table
  const compGrid = document.getElementById('pl-comp-grid');
  const donutWrap = document.getElementById('pl-donut-container');
  const balanceWrap = document.getElementById('pl-balance-chart-container');
  const tableBody = document.getElementById('pl-amort-table-body');
  const btnToggle = document.getElementById('pl-btn-toggle-schedule');

  let currentSchedule = [];

  function updatePersonalLoan() {
    const s = loanState.personal;
    s.loanAmount = Math.max(0, Number(elAmount?.value) || 0);
    s.annualRate = Math.max(0, Number(elRate?.value) || 12);
    s.tenure = Math.max(1, Number(elTenure?.value) || 5);
    s.processingFee = Math.max(0, Number(elFee?.value) || 0);

    const isMonths = s.tenureUnit === 'months';
    const tenureMonths = isMonths ? s.tenure : s.tenure * 12;

    const res = calculateEMI({
      loanAmount: s.loanAmount,
      annualRate: s.annualRate,
      tenureMonths,
      processingFeePercent: s.processingFee,
    });

    const interestOfLoanPct = s.loanAmount > 0
      ? Math.round((res.totalInterest / s.loanAmount) * 1000) / 10
      : 0;

    const comparisonData = calculateLoanComparison({
      loanAmount: s.loanAmount,
      annualRate: s.annualRate,
      tenureYearsArray: [5, 7, 10],
      processingFeePercent: s.processingFee,
    });

    const scheduleData = generateAmortizationSchedule({
      loanAmount: s.loanAmount,
      annualRate: s.annualRate,
      tenureMonths,
      monthlyEMI: res.monthlyEMI,
    });
    currentSchedule = scheduleData.monthlySchedule;

    // Update DOM
    if (resMonthly) resMonthly.textContent = formatNPR(res.monthlyEMI);
    if (resInterest) resInterest.textContent = formatNPR(res.totalInterest);
    if (resInterestPct) resInterestPct.textContent = `${res.interestPct}% of total payment`;
    if (resLoanRatio) resLoanRatio.textContent = `${interestOfLoanPct}%`;
    if (resTotal) resTotal.textContent = formatNPR(res.totalPayment);
    if (resEffective) resEffective.textContent = formatNPR(res.effectiveTotalCost);
    if (resFeeSub) resFeeSub.textContent = `Including ${formatNPR(res.processingFeeAmount)} fee`;
    if (elFeeCalcText) elFeeCalcText.textContent = `Fee: ${formatNPR(res.processingFeeAmount)}`;

    // Comparison grid
    if (compGrid) {
      compGrid.innerHTML = renderTenureComparisonCards(comparisonData, s.tenure, isMonths);
    }

    // Donut Chart
    if (donutWrap) {
      donutWrap.innerHTML = renderLoanDonutChart({
        principal: res.loanAmount,
        totalInterest: res.totalInterest,
      });
    }

    // Balance Chart
    if (balanceWrap) {
      balanceWrap.innerHTML = renderLoanBalanceChart({
        yearlyMilestones: scheduleData.yearlyMilestones,
      });
    }

    // Table
    if (tableBody) {
      tableBody.innerHTML = renderAmortizationRows(currentSchedule, s.showFullSchedule);
    }
    if (btnToggle) {
      btnToggle.textContent = s.showFullSchedule
        ? 'Show First 12 Months'
        : `View Full Schedule (${res.tenureMonths} Months)`;
    }
  }

  let personalLoanRaf = null;
  function schedulePersonalLoanUpdate() {
    if (personalLoanRaf) return;
    personalLoanRaf = requestAnimationFrame(() => {
      personalLoanRaf = null;
      updatePersonalLoan();
    });
  }

  elAmount?.addEventListener('input', () => {
    if (elRangeAmount) elRangeAmount.value = elAmount.value;
    schedulePersonalLoanUpdate();
  });
  elRangeAmount?.addEventListener('input', () => {
    if (elAmount) elAmount.value = elRangeAmount.value;
    schedulePersonalLoanUpdate();
  });

  elRate?.addEventListener('input', () => {
    if (elRangeRate) elRangeRate.value = elRate.value;
    schedulePersonalLoanUpdate();
  });
  elRangeRate?.addEventListener('input', () => {
    if (elRate) elRate.value = elRangeRate.value;
    schedulePersonalLoanUpdate();
  });

  elTenure?.addEventListener('input', () => {
    if (elRangeTenure) elRangeTenure.value = elTenure.value;
    schedulePersonalLoanUpdate();
  });
  elRangeTenure?.addEventListener('input', () => {
    if (elTenure) elTenure.value = elRangeTenure.value;
    schedulePersonalLoanUpdate();
  });

  elFee?.addEventListener('input', () => {
    schedulePersonalLoanUpdate();
  });

  function switchPersonalTenureUnit(newUnit) {
    const s = loanState.personal;
    if (s.tenureUnit === newUnit) return;
    s.tenureUnit = newUnit;
    const isMonths = newUnit === 'months';
    const currentVal = Number(elTenure.value) || 5;

    if (isMonths) {
      const mVal = Math.min(120, Math.max(1, Math.round(currentVal * 12)));
      elTenure.value = mVal;
      elTenure.max = 120;
      elRangeTenure.max = 120;
      elRangeTenure.value = mVal;
      if (elTenureAffix) elTenureAffix.textContent = 'Mo';
      if (elTenureTicks) elTenureTicks.innerHTML = `<span>6 Mo</span><span>60 Mo (5 Yr)</span><span>120 Mo (10 Yr)</span>`;
      elUnitMonths?.classList.add('active');
      elUnitYears?.classList.remove('active');
    } else {
      const yVal = Math.min(10, Math.max(1, Math.round(currentVal / 12)));
      elTenure.value = yVal;
      elTenure.max = 10;
      elRangeTenure.max = 10;
      elRangeTenure.value = yVal;
      if (elTenureAffix) elTenureAffix.textContent = 'Yr';
      if (elTenureTicks) elTenureTicks.innerHTML = `<span>1 Yr</span><span>5 Yr</span><span>10 Yr</span>`;
      elUnitYears?.classList.add('active');
      elUnitMonths?.classList.remove('active');
    }
    schedulePersonalLoanUpdate();
  }

  elUnitYears?.addEventListener('click', () => switchPersonalTenureUnit('years'));
  elUnitMonths?.addEventListener('click', () => switchPersonalTenureUnit('months'));

  btnToggle?.addEventListener('click', () => {
    loanState.personal.showFullSchedule = !loanState.personal.showFullSchedule;
    if (tableBody) {
      tableBody.innerHTML = renderAmortizationRows(currentSchedule, loanState.personal.showFullSchedule);
    }
    if (btnToggle) {
      btnToggle.textContent = loanState.personal.showFullSchedule
        ? 'Show First 12 Months'
        : `View Full Schedule (${currentSchedule.length} Months)`;
    }
  });

  initLoanChartTooltip(balanceWrap);
}

// ─────────────────────────────────────────────────────────────
// 3. VEHICLE LOAN EVENTS
// ─────────────────────────────────────────────────────────────
function initVehicleLoanEvents(container) {
  const elPrice = document.getElementById('vl-input-price');
  const elRangePrice = document.getElementById('vl-range-price');
  const elDown = document.getElementById('vl-input-down');
  const elRangeDown = document.getElementById('vl-range-down');
  const elAmount = document.getElementById('vl-input-amount');
  const elRate = document.getElementById('vl-input-rate');
  const elRangeRate = document.getElementById('vl-range-rate');
  const elTenure = document.getElementById('vl-input-tenure');
  const elRangeTenure = document.getElementById('vl-range-tenure');
  const elUnitYears = document.getElementById('vl-unit-years');
  const elUnitMonths = document.getElementById('vl-unit-months');
  const elTenureAffix = document.getElementById('vl-tenure-affix');
  const elTenureTicks = document.getElementById('vl-tenure-ticks');
  const elDownPctHint = document.getElementById('vl-down-pct-hint');
  const elVTypeNote = document.getElementById('vl-vtype-note');

  // Results
  const resMonthly = document.getElementById('vl-res-monthly');
  const resLoan = document.getElementById('vl-res-loan');
  const resDownPct = document.getElementById('vl-res-down-pct');
  const resDownAmt = document.getElementById('vl-res-down-amt');
  const resInterest = document.getElementById('vl-res-interest');
  const resInterestPct = document.getElementById('vl-res-interest-pct');
  const resTotal = document.getElementById('vl-res-total');
  const resLtv = document.getElementById('vl-res-ltv');
  const resLtvSub = document.getElementById('vl-res-ltv-sub');

  // Charts & Table
  const donutWrap = document.getElementById('vl-donut-container');
  const balanceWrap = document.getElementById('vl-balance-chart-container');
  const tableBody = document.getElementById('vl-amort-table-body');
  const btnToggle = document.getElementById('vl-btn-toggle-schedule');

  let currentSchedule = [];

  function updateVehicleLoan(trigger = 'all') {
    const s = loanState.vehicle;
    const priceVal = Math.max(0, Number(elPrice?.value) || 0);
    let downVal = Math.max(0, Number(elDown?.value) || 0);

    // Auto-calculate Loan Amount: Vehicle Price - Down Payment
    if (trigger === 'price' || trigger === 'down' || trigger === 'all') {
      if (downVal > priceVal) {
        downVal = priceVal;
        if (elDown) elDown.value = downVal;
        if (elRangeDown) elRangeDown.value = downVal;
      }
      s.vehiclePrice = priceVal;
      s.downPayment = downVal;
      s.loanAmount = Math.max(0, priceVal - downVal);
      if (elAmount) elAmount.value = s.loanAmount;
    } else if (trigger === 'amount') {
      const loanVal = Math.max(0, Number(elAmount?.value) || 0);
      s.loanAmount = loanVal;
      s.downPayment = Math.max(0, priceVal - loanVal);
      if (elDown) elDown.value = s.downPayment;
      if (elRangeDown) elRangeDown.value = s.downPayment;
    }

    s.annualRate = Math.max(0, Number(elRate?.value) || 9);
    s.tenure = Math.max(1, Number(elTenure?.value) || 7);

    const isMonths = s.tenureUnit === 'months';
    const tenureMonths = isMonths ? s.tenure : s.tenure * 12;

    const res = calculateEMI({
      loanAmount: s.loanAmount,
      annualRate: s.annualRate,
      tenureMonths,
      processingFeePercent: s.processingFee,
    });

    const downPaymentPct = s.vehiclePrice > 0
      ? Math.round((s.downPayment / s.vehiclePrice) * 1000) / 10
      : 0;

    const ltv = calculateLTV(s.loanAmount, s.vehiclePrice);
    const ltvHealth = getLTVHealth(ltv);

    const scheduleData = generateAmortizationSchedule({
      loanAmount: s.loanAmount,
      annualRate: s.annualRate,
      tenureMonths,
      monthlyEMI: res.monthlyEMI,
    });
    currentSchedule = scheduleData.monthlySchedule;

    // Update DOM
    if (elDownPctHint && s.vehiclePrice > 0) {
      elDownPctHint.textContent = `(${downPaymentPct}% of Price)`;
    }

    if (resMonthly) resMonthly.textContent = formatNPR(res.monthlyEMI);
    if (resLoan) resLoan.textContent = formatNPR(s.loanAmount);
    if (resDownPct) resDownPct.textContent = `${downPaymentPct}%`;
    if (resDownAmt) resDownAmt.textContent = `${formatNPR(s.downPayment)} upfront`;
    if (resInterest) resInterest.textContent = formatNPR(res.totalInterest);
    if (resInterestPct) resInterestPct.textContent = `${res.interestPct}% of total payment`;
    if (resTotal) resTotal.textContent = formatNPR(res.totalPayment);
    if (resLtv) {
      resLtv.textContent = `${ltv}%`;
      resLtv.style.color = ltvHealth.color;
    }
    if (resLtvSub) resLtvSub.textContent = ltvHealth.label;

    // Donut Chart
    if (donutWrap) {
      donutWrap.innerHTML = renderLoanDonutChart({
        principal: res.loanAmount,
        totalInterest: res.totalInterest,
      });
    }

    // Balance Chart
    if (balanceWrap) {
      balanceWrap.innerHTML = renderLoanBalanceChart({
        yearlyMilestones: scheduleData.yearlyMilestones,
      });
    }

    // Table
    if (tableBody) {
      tableBody.innerHTML = renderAmortizationRows(currentSchedule, s.showFullSchedule);
    }
    if (btnToggle) {
      btnToggle.textContent = s.showFullSchedule
        ? 'Show First 12 Months'
        : `View Full Schedule (${res.tenureMonths} Months)`;
    }
  }

  let vehicleLoanRaf = null;
  function scheduleVehicleLoanUpdate(trigger = 'all') {
    if (vehicleLoanRaf) return;
    vehicleLoanRaf = requestAnimationFrame(() => {
      vehicleLoanRaf = null;
      updateVehicleLoan(trigger);
    });
  }

  // Vehicle Type buttons
  container.querySelectorAll('.rp-vtype-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.rp-vtype-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');
      const vtype = btn.dataset.vtype;
      loanState.vehicle.vehicleType = vtype;

      if (elVTypeNote) {
        if (vtype === 'Electric Vehicle (EV)') {
          elVTypeNote.innerHTML = '⚡ <strong>Nepal Rastra Bank (NRB) Green Incentive:</strong> Electric Vehicles (EVs) are eligible for up to <strong>80%–90% financing</strong> compared to 50% for standard fossil-fuel vehicles.';
        } else if (vtype === 'Motorcycle' || vtype === 'Scooter') {
          elVTypeNote.innerHTML = '🏍️ <strong>Two-Wheeler Financing:</strong> Nepal banks generally cap two-wheeler loans at <strong>50% LTV</strong> with shorter 3–5 year tenures.';
        } else {
          elVTypeNote.innerHTML = '🚗 <strong>NRB Guideline:</strong> Maximum financing for standard private internal-combustion vehicles is <strong>50% LTV</strong>. Higher down payment is required.';
        }
      }
      scheduleVehicleLoanUpdate('type');
    });
  });

  elPrice?.addEventListener('input', () => {
    if (elRangePrice) elRangePrice.value = elPrice.value;
    if (elRangeDown) elRangeDown.max = elPrice.value;
    scheduleVehicleLoanUpdate('price');
  });
  elRangePrice?.addEventListener('input', () => {
    if (elPrice) elPrice.value = elRangePrice.value;
    if (elRangeDown) elRangeDown.max = elRangePrice.value;
    scheduleVehicleLoanUpdate('price');
  });

  elDown?.addEventListener('input', () => {
    if (elRangeDown) elRangeDown.value = elDown.value;
    scheduleVehicleLoanUpdate('down');
  });
  elRangeDown?.addEventListener('input', () => {
    if (elDown) elDown.value = elRangeDown.value;
    scheduleVehicleLoanUpdate('down');
  });

  elAmount?.addEventListener('input', () => {
    scheduleVehicleLoanUpdate('amount');
  });

  elRate?.addEventListener('input', () => {
    if (elRangeRate) elRangeRate.value = elRate.value;
    scheduleVehicleLoanUpdate('rate');
  });
  elRangeRate?.addEventListener('input', () => {
    if (elRate) elRate.value = elRangeRate.value;
    scheduleVehicleLoanUpdate('rate');
  });

  elTenure?.addEventListener('input', () => {
    if (elRangeTenure) elRangeTenure.value = elTenure.value;
    scheduleVehicleLoanUpdate('tenure');
  });
  elRangeTenure?.addEventListener('input', () => {
    if (elTenure) elTenure.value = elRangeTenure.value;
    scheduleVehicleLoanUpdate('tenure');
  });

  function switchVehicleTenureUnit(newUnit) {
    const s = loanState.vehicle;
    if (s.tenureUnit === newUnit) return;
    s.tenureUnit = newUnit;
    const isMonths = newUnit === 'months';
    const currentVal = Number(elTenure.value) || 7;

    if (isMonths) {
      const mVal = Math.min(120, Math.max(1, Math.round(currentVal * 12)));
      elTenure.value = mVal;
      elTenure.max = 120;
      elRangeTenure.max = 120;
      elRangeTenure.value = mVal;
      if (elTenureAffix) elTenureAffix.textContent = 'Mo';
      if (elTenureTicks) elTenureTicks.innerHTML = `<span>12 Mo</span><span>84 Mo (7 Yr)</span><span>120 Mo (10 Yr)</span>`;
      elUnitMonths?.classList.add('active');
      elUnitYears?.classList.remove('active');
    } else {
      const yVal = Math.min(10, Math.max(1, Math.round(currentVal / 12)));
      elTenure.value = yVal;
      elTenure.max = 10;
      elRangeTenure.max = 10;
      elRangeTenure.value = yVal;
      if (elTenureAffix) elTenureAffix.textContent = 'Yr';
      if (elTenureTicks) elTenureTicks.innerHTML = `<span>1 Yr</span><span>7 Yr</span><span>10 Yr</span>`;
      elUnitYears?.classList.add('active');
      elUnitMonths?.classList.remove('active');
    }
    scheduleVehicleLoanUpdate('tenure');
  }

  elUnitYears?.addEventListener('click', () => switchVehicleTenureUnit('years'));
  elUnitMonths?.addEventListener('click', () => switchVehicleTenureUnit('months'));

  btnToggle?.addEventListener('click', () => {
    loanState.vehicle.showFullSchedule = !loanState.vehicle.showFullSchedule;
    if (tableBody) {
      tableBody.innerHTML = renderAmortizationRows(currentSchedule, loanState.vehicle.showFullSchedule);
    }
    if (btnToggle) {
      btnToggle.textContent = loanState.vehicle.showFullSchedule
        ? 'Show First 12 Months'
        : `View Full Schedule (${currentSchedule.length} Months)`;
    }
  });

  initLoanChartTooltip(balanceWrap);
}

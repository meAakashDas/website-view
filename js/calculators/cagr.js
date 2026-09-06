// ==============================================
// risePaisa — Nepal CAGR & Investment Growth Calculator Component
// Precise Compound Annual Growth Rate, Projections & Multi-Asset Comparison
// ==============================================
import {
  formatNPR,
  formatCompactNPR,
  calculateCAGR,
  calculateFutureValueFromCAGR,
  generateCAGRGrowthCurve,
  generateCAGRMilestones,
  compareInvestments,
  validateCAGRInputs,
  CAGR_DEFAULTS,
} from './engine.js';
import { renderCAGRGrowthChart, renderCAGRBarChart, positionChartTooltip } from './charts.js';

/**
 * State for CAGR Calculator
 */
const state = {
  mode: 'cagr', // 'cagr' (calculate CAGR from BV & EV) | 'fv' (project FV from BV & CAGR)

  // Mode 1: Calculate CAGR
  beginningValue: CAGR_DEFAULTS.beginningValue,
  endingValue: CAGR_DEFAULTS.endingValue,
  years: CAGR_DEFAULTS.years,
  months: 0,
  days: 0,

  // Mode 2: Project Future Value
  cagrPercent: CAGR_DEFAULTS.cagrPercent,

  // 3-Way Comparison Data
  comparison: [
    { name: 'NEPSE Blue-Chip Stock', icon: '📈', beginningValue: 100000, endingValue: 245000, years: 5 },
    { name: 'Commercial Bank FD (9%)', icon: '🏦', beginningValue: 100000, endingValue: 153862, years: 5 },
    { name: 'Kathmandu Land / Real Estate', icon: '🏡', beginningValue: 100000, endingValue: 210000, years: 5 },
  ],
};

/**
 * Render CAGR Calculator HTML markup
 * @returns {string} HTML markup
 */
export function renderCAGRCalculator() {
  const isCAGRMode = state.mode === 'cagr';

  const res = isCAGRMode
    ? calculateCAGR({
        beginningValue: state.beginningValue,
        endingValue: state.endingValue,
        years: state.years,
        months: state.months,
        days: state.days,
      })
    : calculateFutureValueFromCAGR({
        beginningValue: state.beginningValue,
        cagrPercent: state.cagrPercent,
        years: state.years,
        months: state.months,
        days: state.days,
      });

  const effectiveEV = isCAGRMode ? state.endingValue : res.endingValue;
  const effectiveCAGR = isCAGRMode ? res.cagr : state.cagrPercent;

  const growthPoints = generateCAGRGrowthCurve({
    beginningValue: state.beginningValue,
    endingValue: effectiveEV,
    timeInYears: res.timeYears,
    pointsCount: 10,
  });

  const milestones = generateCAGRMilestones({
    beginningValue: state.beginningValue,
    cagrPercent: effectiveCAGR,
    yearsArray: [5, 10, 15, 20],
  });

  const compResults = compareInvestments(state.comparison);

  return `
    <div class="rp-calc-wrapper" id="cagr-calculator">

      <!-- Mode Switcher Tabs -->
      <div class="rp-cagr-mode-nav">
        <div class="rp-cagr-mode-switch" role="tablist" aria-label="CAGR Calculation Mode">
          <button
            type="button"
            class="rp-cagr-mode-btn ${isCAGRMode ? 'active' : ''}"
            id="cagr-mode-btn-cagr"
            role="tab"
            aria-selected="${isCAGRMode}"
            data-mode="cagr"
          >
            📊 Calculate CAGR <span class="rp-mode-sub">(From Start & End Value)</span>
          </button>
          <button
            type="button"
            class="rp-cagr-mode-btn ${!isCAGRMode ? 'active' : ''}"
            id="cagr-mode-btn-fv"
            role="tab"
            aria-selected="${!isCAGRMode}"
            data-mode="fv"
          >
            🔮 Project Future Value <span class="rp-mode-sub">(From Target CAGR %)</span>
          </button>
        </div>
      </div>

      <!-- Main Layout Grid -->
      <div class="rp-calc-layout">

        <!-- Controls Column -->
        <div class="rp-calc-controls-card">
          <div class="rp-calc-card-header">
            <div>
              <h3 style="margin:0">${isCAGRMode ? 'Investment Parameters' : 'Target Growth Parameters'}</h3>
              <span style="font-size:var(--text-xs);color:var(--color-text-secondary)">
                ${isCAGRMode ? 'Annualized compound return estimator' : 'Future wealth accumulation model'}
              </span>
            </div>
            <span class="rp-badge rp-badge-accent">Compound Growth</span>
          </div>

          <!-- Input 1: Beginning Value -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="cagr-input-bv" class="rp-field-label">Beginning Value (Initial Investment)</label>
              <div class="rp-input-affix-wrap">
                <span class="rp-affix">NPR</span>
                <input
                  type="number"
                  id="cagr-input-bv"
                  class="rp-number-input"
                  value="${state.beginningValue}"
                  min="1000"
                  max="100000000"
                  step="10000"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Beginning Investment Value in NPR"
                >
              </div>
            </div>
            <input
              type="range"
              id="cagr-range-bv"
              class="rp-range-slider"
              value="${state.beginningValue}"
              min="10000"
              max="5000000"
              step="10000"
              aria-label="Beginning Value Slider"
            >
            <div class="rp-range-ticks">
              <span>NPR 10,000</span>
              <span>NPR 1 Lakh (Default)</span>
              <span>NPR 50 Lakhs</span>
            </div>
            <div class="rp-field-error" id="err-cagr-bv"></div>
          </div>

          <!-- Mode 1: Ending Value -->
          <div class="rp-field-group" id="cagr-group-ev" style="${isCAGRMode ? '' : 'display:none;'}">
            <div class="rp-field-top">
              <label for="cagr-input-ev" class="rp-field-label">Ending Value (Final Proceeds)</label>
              <div class="rp-input-affix-wrap">
                <span class="rp-affix">NPR</span>
                <input
                  type="number"
                  id="cagr-input-ev"
                  class="rp-number-input"
                  value="${state.endingValue}"
                  min="0"
                  max="500000000"
                  step="10000"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Ending Investment Value in NPR"
                >
              </div>
            </div>
            <input
              type="range"
              id="cagr-range-ev"
              class="rp-range-slider"
              value="${state.endingValue}"
              min="10000"
              max="10000000"
              step="20000"
              aria-label="Ending Value Slider"
            >
            <div class="rp-range-ticks">
              <span>NPR 10,000</span>
              <span>NPR 1.8 Lakhs (Default)</span>
              <span>NPR 1 Crore</span>
            </div>
            <div class="rp-field-error" id="err-cagr-ev"></div>
          </div>

          <!-- Mode 2: Annual CAGR % -->
          <div class="rp-field-group" id="cagr-group-rate" style="${!isCAGRMode ? '' : 'display:none;'}">
            <div class="rp-field-top">
              <label for="cagr-input-rate" class="rp-field-label">Expected Annual CAGR</label>
              <div class="rp-input-affix-wrap">
                <input
                  type="number"
                  id="cagr-input-rate"
                  class="rp-number-input text-right"
                  value="${state.cagrPercent}"
                  min="-100"
                  max="200"
                  step="0.25"
                  inputmode="decimal"
                  autocomplete="off"
                  aria-label="Expected Annual CAGR Percentage"
                >
                <span class="rp-affix">%</span>
              </div>
            </div>
            <input
              type="range"
              id="cagr-range-rate"
              class="rp-range-slider"
              value="${state.cagrPercent}"
              min="-20"
              max="50"
              step="0.25"
              aria-label="CAGR Percentage Slider"
            >
            <div class="rp-range-ticks">
              <span>0% (Break-even)</span>
              <span>12.47% (Default)</span>
              <span>30% (High Growth)</span>
            </div>
            <div class="rp-field-error" id="err-cagr-rate"></div>
          </div>

          <!-- Input: Investment Duration (Years, Months, Days) -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label class="rp-field-label">Investment Duration</label>
              <span class="rp-field-hint" id="cagr-duration-hint">${res.durationLabel}</span>
            </div>

            <!-- Duration Granular Inputs -->
            <div class="rp-cagr-duration-row">
              <div class="rp-cagr-dur-col">
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="cagr-input-years"
                    class="rp-number-input text-right"
                    value="${state.years}"
                    min="0"
                    max="50"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Duration Years"
                  >
                  <span class="rp-affix">Yrs</span>
                </div>
              </div>

              <div class="rp-cagr-dur-col">
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="cagr-input-months"
                    class="rp-number-input text-right"
                    value="${state.months}"
                    min="0"
                    max="11"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Duration Months"
                  >
                  <span class="rp-affix">Mo</span>
                </div>
              </div>

              <div class="rp-cagr-dur-col">
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="cagr-input-days"
                    class="rp-number-input text-right"
                    value="${state.days}"
                    min="0"
                    max="365"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Duration Days"
                  >
                  <span class="rp-affix">Days</span>
                </div>
              </div>
            </div>

            <!-- Quick Duration Buttons -->
            <div class="rp-cagr-dur-presets">
              <span style="font-size:11px;color:var(--color-text-muted)">Quick Presets:</span>
              <button type="button" class="rp-cagr-quick-btn ${state.years === 1 && state.months === 0 ? 'active' : ''}" data-years="1">1 Yr</button>
              <button type="button" class="rp-cagr-quick-btn ${state.years === 3 && state.months === 0 ? 'active' : ''}" data-years="3">3 Yrs</button>
              <button type="button" class="rp-cagr-quick-btn ${state.years === 5 && state.months === 0 ? 'active' : ''}" data-years="5">5 Yrs</button>
              <button type="button" class="rp-cagr-quick-btn ${state.years === 10 && state.months === 0 ? 'active' : ''}" data-years="10">10 Yrs</button>
            </div>
            <div class="rp-field-error" id="err-cagr-duration"></div>
          </div>

        </div>

        <!-- Results Column -->
        <div class="rp-calc-results-card">
          <div class="rp-results-grid">

            <!-- Primary Metric Highlight Card -->
            <div class="rp-stat-card maturity span-2">
              <div class="rp-maturity-header">
                <span class="rp-stat-label">${isCAGRMode ? 'Compound Annual Growth Rate (CAGR)' : 'Estimated Future Value'}</span>
                <span class="rp-badge rp-badge-pulse">${isCAGRMode ? 'Annualized Geometric Return' : 'Compounded Corpus'}</span>
              </div>
              <div class="rp-stat-value maturity-large accent" id="cagr-res-primary">
                ${isCAGRMode ? `${res.cagr}%` : formatNPR(res.endingValue)}
              </div>
              <div class="rp-stat-caption" id="cagr-res-caption">
                ${isCAGRMode
                  ? `Annualized rate of return compounding over ${res.durationLabel}`
                  : `Total portfolio value compounded at ${res.cagr}% CAGR`}
              </div>
            </div>

            <!-- Stat 2: Absolute Profit -->
            <div class="rp-stat-card">
              <span class="rp-stat-label">Absolute Profit / Gain</span>
              <div class="rp-stat-value" style="color:${res.isGain ? '#10B981' : '#EF4444'}" id="cagr-res-profit">
                ${res.isGain ? '+' : ''}${formatNPR(res.absoluteProfit)}
              </div>
              <span class="rp-stat-sub">Ending Value − Beginning Value</span>
            </div>

            <!-- Stat 3: Total Return % -->
            <div class="rp-stat-card">
              <span class="rp-stat-label">Total Cumulative Return</span>
              <div class="rp-stat-value" style="color:${res.isGain ? '#10B981' : '#EF4444'}" id="cagr-res-total-ret">
                ${res.isGain ? '+' : ''}${res.totalReturnPct}%
              </div>
              <span class="rp-stat-sub">Total capital appreciation</span>
            </div>

            <!-- Stat 4: Average Annual Return -->
            <div class="rp-stat-card">
              <span class="rp-stat-label">Average Annual Return</span>
              <div class="rp-stat-value" id="cagr-res-avg-annual">
                ${res.avgAnnualGrowth}% / yr
              </div>
              <span class="rp-stat-sub">Simple arithmetic return</span>
            </div>

            <!-- Stat 5: Capital Growth Multiple -->
            <div class="rp-stat-card">
              <span class="rp-stat-label">Wealth Multiple</span>
              <div class="rp-stat-value accent" id="cagr-res-multiple">
                ${res.growthMultiple}x
              </div>
              <span class="rp-stat-sub">Fold increase on starting capital</span>
            </div>

          </div>

          <!-- Chart 2: Beginning Value vs Profit Bar Chart -->
          <div id="cagr-bar-chart-container">
            ${renderCAGRBarChart({
              beginningValue: state.beginningValue,
              absoluteProfit: res.absoluteProfit,
              endingValue: effectiveEV,
            })}
          </div>

        </div>

      </div>

      <!-- Chart 1: Investment Growth Over Time (Line Chart) -->
      <div class="rp-calc-section" id="cagr-line-chart-container">
        ${renderCAGRGrowthChart({
          growthPoints,
          beginningValue: state.beginningValue,
          endingValue: effectiveEV,
          totalYears: res.timeYears,
        })}
      </div>

      <!-- Future Growth Projections (5, 10, 15, 20 Years) -->
      <div class="rp-calc-section rp-cagr-milestones-section">
        <div class="rp-section-heading-row">
          <div>
            <h3>Compounding Growth Projections (${effectiveCAGR}% CAGR)</h3>
            <p class="rp-subtext">
              Projected future portfolio value if initial capital of ${formatNPR(state.beginningValue)} continues to compound at this annualized rate.
            </p>
          </div>
        </div>

        <div class="rp-cagr-milestone-grid" id="cagr-milestones-grid">
          ${renderMilestoneCards(milestones)}
        </div>
        <div class="rp-cagr-disclaimer-note">
          ℹ️ <em>Educational Projection: Market returns fluctuate over time. Past compounding rate is not a guarantee of future investment returns.</em>
        </div>
      </div>

      <!-- 3-Way Investment Comparison Tool -->
      <div class="rp-calc-section rp-cagr-comparison-section">
        <div class="rp-section-heading-row">
          <div>
            <h3>3-Way Investment Comparison</h3>
            <p class="rp-subtext">
              Compare CAGR across multiple asset classes in Nepal (e.g. Stocks, Fixed Deposits, and Real Estate) to see which delivered superior compound growth.
            </p>
          </div>
        </div>

        <div class="rp-cagr-comp-grid" id="cagr-comparison-grid">
          ${renderComparisonCards(compResults.investments)}
        </div>
      </div>

      <!-- Educational Insights Section (< 200 words) -->
      <div class="rp-calc-section rp-edu-cards-section">
        <h3 style="font-size:var(--text-xl);color:var(--color-heading);margin-bottom:var(--space-2)">
          Understanding CAGR (Compound Annual Growth Rate)
        </h3>
        <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-6)">
          Essential knowledge for evaluating stocks, mutual funds, and investments in Nepal.
        </p>

        <div class="rp-edu-grid">
          <div class="rp-edu-card">
            <h4>What CAGR Measures</h4>
            <p>
              CAGR measures the mean annual growth rate of an investment over a specified multi-year period assuming profits were reinvested and compounded each year.
            </p>
          </div>

          <div class="rp-edu-card">
            <h4>CAGR vs Simple Average</h4>
            <p>
              Dividing total return by years creates an arithmetic average that ignores the compounding effect ("interest on interest") and grossly exaggerates true multi-year performance.
            </p>
          </div>

          <div class="rp-edu-card">
            <h4>Arithmetic vs Geometric Return</h4>
            <p>
              In volatile assets like NEPSE shares, arithmetic return is always higher than geometric CAGR. A 50% gain followed by a 50% loss averages 0%, yet leaves you with a 25% net loss.
            </p>
          </div>

          <div class="rp-edu-card">
            <h4>When to Use (and When Not To)</h4>
            <p>
              Use CAGR for multi-year lump sum holdings like NEPSE blue-chips, gold, or land. Do not use CAGR for recurring monthly SIPs (use XIRR) or short-term day trades.
            </p>
          </div>
        </div>

        <!-- Nepal Context Examples Box -->
        <div class="rp-cagr-nepal-examples">
          <h4 style="color:var(--color-heading);margin-bottom:var(--space-3);display:flex;align-items:center;gap:8px">
            🇳🇵 Nepal Investment Return Context
          </h4>
          <div class="rp-nepal-examples-grid">
            <div class="rp-nepal-ex-item">
              <span class="rp-nepal-ex-badge">NEPSE Stocks</span>
              <p>Top commercial banks and hydropower companies have historically cycled through bull and bear phases, yielding 12%–18% long-term CAGR.</p>
            </div>
            <div class="rp-nepal-ex-item">
              <span class="rp-nepal-ex-badge">Fixed Deposits</span>
              <p>Commercial bank FDs in Nepal typically compound at 7.5%–10.5% annualized before the statutory 5% TDS deduction.</p>
            </div>
            <div class="rp-nepal-ex-item">
              <span class="rp-nepal-ex-badge">Kathmandu Real Estate</span>
              <p>Land in major urban belts has historically appreciated at 10%–16% CAGR, though liquidity is significantly lower than listed equities.</p>
            </div>
          </div>
          <div style="font-size:11px;color:var(--color-text-muted);margin-top:var(--space-3)">
            * Illustrative historical examples for educational analysis. risePaisa does not provide investment recommendations or financial advice.
          </div>
        </div>

      </div>

    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// HELPER: Milestone Cards Markup
// ─────────────────────────────────────────────────────────────
function renderMilestoneCards(milestones) {
  if (!milestones || milestones.length === 0) return '';
  return milestones.map(m => `
    <div class="rp-cagr-milestone-card">
      <div class="rp-ms-year-badge">${m.years} Years</div>
      <div class="rp-ms-val">${formatNPR(m.estimatedValue)}</div>
      <div class="rp-ms-sub">
        Gain: <span style="color:#10B981">+${formatNPR(m.estimatedProfit)}</span>
      </div>
      <div class="rp-ms-multiple">${m.multiple}x Initial Capital (${m.totalReturnPct}% Gain)</div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────
// HELPER: Comparison Cards Markup
// ─────────────────────────────────────────────────────────────
function renderComparisonCards(investments) {
  if (!investments || investments.length === 0) return '';
  return investments.map((inv, idx) => `
    <div class="rp-cagr-comp-card ${inv.isHighest ? 'is-winner' : ''}" data-index="${idx}">
      <div class="rp-comp-top">
        <div class="rp-comp-asset-title">
          <span class="rp-comp-icon">${inv.icon}</span>
          <span class="rp-comp-name">${inv.name}</span>
        </div>
        ${inv.isHighest ? `<span class="rp-cagr-winner-badge">🏆 Highest CAGR</span>` : ''}
      </div>

      <div class="rp-comp-cagr-val ${inv.isHighest ? 'accent' : ''}">
        ${inv.cagr}% <span style="font-size:12px;font-weight:normal;color:var(--color-text-secondary)">CAGR</span>
      </div>

      <div class="rp-comp-stats-table">
        <div class="rp-comp-stat-row">
          <span>Start Value:</span>
          <span class="rp-num">${formatNPR(inv.beginningValue)}</span>
        </div>
        <div class="rp-comp-stat-row">
          <span>Final Value:</span>
          <span class="rp-num">${formatNPR(inv.endingValue)}</span>
        </div>
        <div class="rp-comp-stat-row">
          <span>Duration:</span>
          <span>${inv.years} Years</span>
        </div>
        <div class="rp-comp-stat-row">
          <span>Total Gain:</span>
          <span style="color:#10B981">+${formatNPR(inv.absoluteProfit)} (${inv.totalReturnPct}%)</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────
// INITIALIZATION & EVENT BINDINGS
// ─────────────────────────────────────────────────────────────
export function initCAGRCalculator() {
  const container = document.getElementById('cagr-calculator');
  if (!container) return;

  // DOM Elements
  const btnModeCAGR = document.getElementById('cagr-mode-btn-cagr');
  const btnModeFV = document.getElementById('cagr-mode-btn-fv');

  const groupEV = document.getElementById('cagr-group-ev');
  const groupRate = document.getElementById('cagr-group-rate');

  const inputBV = document.getElementById('cagr-input-bv');
  const rangeBV = document.getElementById('cagr-range-bv');
  const inputEV = document.getElementById('cagr-input-ev');
  const rangeEV = document.getElementById('cagr-range-ev');
  const inputRate = document.getElementById('cagr-input-rate');
  const rangeRate = document.getElementById('cagr-range-rate');

  const inputYears = document.getElementById('cagr-input-years');
  const inputMonths = document.getElementById('cagr-input-months');
  const inputDays = document.getElementById('cagr-input-days');
  const durationHint = document.getElementById('cagr-duration-hint');

  // Error placeholders
  const errBV = document.getElementById('err-cagr-bv');
  const errEV = document.getElementById('err-cagr-ev');
  const errRate = document.getElementById('err-cagr-rate');
  const errDuration = document.getElementById('err-cagr-duration');

  // Result displays
  const resPrimary = document.getElementById('cagr-res-primary');
  const resCaption = document.getElementById('cagr-res-caption');
  const resProfit = document.getElementById('cagr-res-profit');
  const resTotalRet = document.getElementById('cagr-res-total-ret');
  const resAvgAnnual = document.getElementById('cagr-res-avg-annual');
  const resMultiple = document.getElementById('cagr-res-multiple');

  // Chart Containers
  const lineChartWrap = document.getElementById('cagr-line-chart-container');
  const barChartWrap = document.getElementById('cagr-bar-chart-container');

  // Milestones
  const milestonesGrid = document.getElementById('cagr-milestones-grid');

  function update() {
    const isCAGRMode = state.mode === 'cagr';

    const validation = validateCAGRInputs({
      beginningValue: inputBV?.value,
      endingValue: inputEV?.value,
      cagrPercent: inputRate?.value,
      years: inputYears?.value,
      months: inputMonths?.value,
      days: inputDays?.value,
    }, state.mode);

    if (errBV) errBV.textContent = validation.errors.beginningValue || '';
    if (errEV) errEV.textContent = validation.errors.endingValue || '';
    if (errRate) errRate.textContent = validation.errors.cagrPercent || '';
    if (errDuration) errDuration.textContent = validation.errors.duration || '';

    state.beginningValue = validation.sanitized.beginningValue;
    state.endingValue = validation.sanitized.endingValue;
    state.cagrPercent = validation.sanitized.cagrPercent;
    state.years = validation.sanitized.years;
    state.months = validation.sanitized.months;
    state.days = validation.sanitized.days;

    const res = isCAGRMode
      ? calculateCAGR({
          beginningValue: state.beginningValue,
          endingValue: state.endingValue,
          years: state.years,
          months: state.months,
          days: state.days,
        })
      : calculateFutureValueFromCAGR({
          beginningValue: state.beginningValue,
          cagrPercent: state.cagrPercent,
          years: state.years,
          months: state.months,
          days: state.days,
        });

    const effectiveEV = isCAGRMode ? state.endingValue : res.endingValue;
    const effectiveCAGR = isCAGRMode ? res.cagr : state.cagrPercent;

    // Update Result Cards
    if (resPrimary) {
      resPrimary.textContent = isCAGRMode ? `${res.cagr}%` : formatNPR(res.endingValue);
    }
    if (resCaption) {
      resCaption.textContent = isCAGRMode
        ? `Annualized rate of return compounding over ${res.durationLabel}`
        : `Total portfolio value compounded at ${res.cagr}% CAGR`;
    }
    if (durationHint) {
      durationHint.textContent = res.durationLabel;
    }

    if (resProfit) {
      resProfit.textContent = `${res.isGain ? '+' : ''}${formatNPR(res.absoluteProfit)}`;
      resProfit.style.color = res.isGain ? '#10B981' : '#EF4444';
    }
    if (resTotalRet) {
      resTotalRet.textContent = `${res.isGain ? '+' : ''}${res.totalReturnPct}%`;
      resTotalRet.style.color = res.isGain ? '#10B981' : '#EF4444';
    }
    if (resAvgAnnual) {
      resAvgAnnual.textContent = `${res.avgAnnualGrowth}% / yr`;
    }
    if (resMultiple) {
      resMultiple.textContent = `${res.growthMultiple}x`;
    }

    // Update Line Chart
    const growthPoints = generateCAGRGrowthCurve({
      beginningValue: state.beginningValue,
      endingValue: effectiveEV,
      timeInYears: res.timeYears,
      pointsCount: 10,
    });

    if (lineChartWrap) {
      lineChartWrap.innerHTML = renderCAGRGrowthChart({
        growthPoints,
        beginningValue: state.beginningValue,
        endingValue: effectiveEV,
        totalYears: res.timeYears,
      });
    }

    // Update Bar Chart
    if (barChartWrap) {
      barChartWrap.innerHTML = renderCAGRBarChart({
        beginningValue: state.beginningValue,
        absoluteProfit: res.absoluteProfit,
        endingValue: effectiveEV,
      });
    }

    // Update Milestones Grid
    const milestones = generateCAGRMilestones({
      beginningValue: state.beginningValue,
      cagrPercent: effectiveCAGR,
      yearsArray: [5, 10, 15, 20],
    });
    if (milestonesGrid) {
      milestonesGrid.innerHTML = renderMilestoneCards(milestones);
    }
  }

  let cagrRaf = null;
  function scheduleUpdate() {
    if (cagrRaf) return;
    cagrRaf = requestAnimationFrame(() => {
      cagrRaf = null;
      update();
    });
  }

  // Delegated tooltip interaction for Line Chart
  function renderCAGRTooltipContent(tooltip, pt) {
    const time = pt.dataset.time;
    const val = Number(pt.dataset.value);
    const profit = Number(pt.dataset.profit);
    tooltip.innerHTML = `
      <div class="rp-tt-title">Year ${time}</div>
      <div class="rp-tt-row"><span class="rp-tt-label">Portfolio Value:</span> <span class="rp-tt-val accent">${formatNPR(val)}</span></div>
      <div class="rp-tt-row"><span class="rp-tt-label">Net Gain:</span> <span class="rp-tt-val" style="color:#10B981">+${formatNPR(profit)}</span></div>
    `;

    positionChartTooltip(tooltip, pt, lineChartWrap, { desktopTop: '15px' });
  }

  function handleChartTooltip(e) {
    const pt = e.target.closest('.rp-cagr-point');
    const tooltip = document.getElementById('rp-cagr-chart-tooltip');
    if (!tooltip) return;

    if (!pt) {
      tooltip.style.display = 'none';
      return;
    }

    renderCAGRTooltipContent(tooltip, pt);
  }

  function handleChartTouch(e) {
    const tooltip = document.getElementById('rp-cagr-chart-tooltip');
    if (!tooltip || !lineChartWrap) return;

    const points = Array.from(lineChartWrap.querySelectorAll('.rp-cagr-point'));
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
      renderCAGRTooltipContent(tooltip, nearestPt);
    }
  }

  lineChartWrap?.addEventListener('pointerover', handleChartTooltip);
  lineChartWrap?.addEventListener('focusin', handleChartTooltip);
  lineChartWrap?.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      handleChartTouch(e);
    } else {
      handleChartTooltip(e);
    }
  });
  lineChartWrap?.addEventListener('touchstart', handleChartTouch, { passive: true });
  lineChartWrap?.addEventListener('touchmove', handleChartTouch, { passive: true });
  lineChartWrap?.addEventListener('pointerleave', () => {
    const tooltip = document.getElementById('rp-cagr-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
  lineChartWrap?.addEventListener('focusout', () => {
    const tooltip = document.getElementById('rp-cagr-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });

  // Mode Switcher
  function switchMode(newMode) {
    if (state.mode === newMode) return;
    state.mode = newMode;

    const isCAGRMode = newMode === 'cagr';
    btnModeCAGR?.classList.toggle('active', isCAGRMode);
    btnModeCAGR?.setAttribute('aria-selected', isCAGRMode ? 'true' : 'false');
    btnModeFV?.classList.toggle('active', !isCAGRMode);
    btnModeFV?.setAttribute('aria-selected', !isCAGRMode ? 'true' : 'false');

    if (groupEV) groupEV.style.display = isCAGRMode ? '' : 'none';
    if (groupRate) groupRate.style.display = !isCAGRMode ? '' : 'none';

    scheduleUpdate();
  }

  btnModeCAGR?.addEventListener('click', () => switchMode('cagr'));
  btnModeFV?.addEventListener('click', () => switchMode('fv'));

  // Synced Inputs
  inputBV?.addEventListener('input', () => {
    if (rangeBV) rangeBV.value = inputBV.value;
    scheduleUpdate();
  });
  rangeBV?.addEventListener('input', () => {
    if (inputBV) inputBV.value = rangeBV.value;
    scheduleUpdate();
  });

  inputEV?.addEventListener('input', () => {
    if (rangeEV) rangeEV.value = inputEV.value;
    scheduleUpdate();
  });
  rangeEV?.addEventListener('input', () => {
    if (inputEV) inputEV.value = rangeEV.value;
    scheduleUpdate();
  });

  inputRate?.addEventListener('input', () => {
    if (rangeRate) rangeRate.value = inputRate.value;
    scheduleUpdate();
  });
  rangeRate?.addEventListener('input', () => {
    if (inputRate) inputRate.value = rangeRate.value;
    scheduleUpdate();
  });

  inputYears?.addEventListener('input', scheduleUpdate);
  inputMonths?.addEventListener('input', scheduleUpdate);
  inputDays?.addEventListener('input', scheduleUpdate);

  // Quick Duration Buttons
  container.querySelectorAll('.rp-cagr-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.rp-cagr-quick-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const y = Number(btn.dataset.years) || 1;
      if (inputYears) inputYears.value = y;
      if (inputMonths) inputMonths.value = 0;
      if (inputDays) inputDays.value = 0;
      scheduleUpdate();
    });
  });
}

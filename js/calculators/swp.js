// ==============================================
// risePaisa - Nepal SWP Calculator Component
// Systematic Withdrawal Plan simulation and sustainability analytics
// ==============================================
import {
  formatNPR,
  formatCompactNPR,
  validateSWPInputs,
  simulateSWP,
  SWP_BOUNDS,
} from './engine.js';
import { renderSWPDonutChart, renderSWPBalanceChart, positionChartTooltip } from './charts.js';

/**
 * State for SWP Calculator
 */
let state = {
  initialCorpus: SWP_BOUNDS.defaultCorpus,
  monthlyWithdrawal: SWP_BOUNDS.defaultWithdrawal,
  annualRate: SWP_BOUNDS.defaultRate,
  tenure: SWP_BOUNDS.defaultYears,
  tenureUnit: 'years', // 'years' | 'months'
  frequency: 'monthly', // 'monthly' | 'quarterly' | 'yearly'
};

/**
 * Render SWP Calculator HTML markup
 * @returns {string} HTML markup
 */
export function renderSWPCalculator() {
  const isMonths = state.tenureUnit === 'months';
  const tenureMax = isMonths ? SWP_BOUNDS.maxMonths : SWP_BOUNDS.maxYears;
  const tenureStep = isMonths ? 1 : 1;

  const tenureMonths = isMonths ? state.tenure : state.tenure * 12;
  const res = simulateSWP({
    initialCorpus: state.initialCorpus,
    monthlyWithdrawal: state.monthlyWithdrawal,
    annualRate: state.annualRate,
    tenureMonths,
    frequency: state.frequency,
  });

  return `
    <div class="rp-calc-wrapper" id="swp-calculator">
      <!-- Calculator Layout Grid -->
      <div class="rp-calc-layout">
        
        <!-- Controls Column (Inputs & Sliders) -->
        <div class="rp-calc-controls-card">
          <div class="rp-calc-card-header">
            <h3>Withdrawal Parameters</h3>
            <span class="rp-badge rp-badge-accent">SWP Simulation</span>
          </div>

          <!-- Input 1: Initial Corpus -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="swp-input-corpus" class="rp-field-label">Initial Investment Corpus</label>
              <div class="rp-input-affix-wrap">
                <span class="rp-affix">NPR</span>
                <input
                  type="number"
                  id="swp-input-corpus"
                  class="rp-number-input"
                  value="${state.initialCorpus}"
                  min="${SWP_BOUNDS.minCorpus}"
                  max="${SWP_BOUNDS.maxCorpus}"
                  step="50000"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Initial Investment Corpus in NPR"
                >
              </div>
            </div>
            <input
              type="range"
              id="swp-range-corpus"
              class="rp-range-slider"
              value="${state.initialCorpus}"
              min="100000"
              max="10000000"
              step="50000"
              aria-label="Initial Corpus Slider"
            >
            <div class="rp-range-ticks">
              <span>NPR 1 Lakh</span>
              <span>NPR 50 Lakhs</span>
              <span>NPR 1 Crore</span>
            </div>
            <div class="rp-field-error" id="err-swp-corpus"></div>
          </div>

          <!-- Input 2: Monthly Withdrawal -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="swp-input-withdrawal" class="rp-field-label">Monthly Withdrawal Amount</label>
              <div class="rp-input-affix-wrap">
                <span class="rp-affix">NPR</span>
                <input
                  type="number"
                  id="swp-input-withdrawal"
                  class="rp-number-input"
                  value="${state.monthlyWithdrawal}"
                  min="${SWP_BOUNDS.minWithdrawal}"
                  max="${SWP_BOUNDS.maxWithdrawal}"
                  step="1000"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Monthly Withdrawal Amount in NPR"
                >
              </div>
            </div>
            <input
              type="range"
              id="swp-range-withdrawal"
              class="rp-range-slider"
              value="${state.monthlyWithdrawal}"
              min="2000"
              max="100000"
              step="1000"
              aria-label="Monthly Withdrawal Slider"
            >
            <div class="rp-range-ticks">
              <span>NPR 2,000</span>
              <span>NPR 50,000</span>
              <span>NPR 1,00,000</span>
            </div>
            <div class="rp-field-error" id="err-swp-withdrawal"></div>
          </div>

          <!-- Input 3: Expected Annual Return -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="swp-input-rate" class="rp-field-label">Expected Annual Return</label>
              <div class="rp-input-affix-wrap">
                <input
                  type="number"
                  id="swp-input-rate"
                  class="rp-number-input text-right"
                  value="${state.annualRate}"
                  min="${SWP_BOUNDS.minRate}"
                  max="${SWP_BOUNDS.maxRate}"
                  step="0.5"
                  inputmode="decimal"
                  autocomplete="off"
                  aria-label="Expected Annual Return in percent"
                >
                <span class="rp-affix">%</span>
              </div>
            </div>
            <input
              type="range"
              id="swp-range-rate"
              class="rp-range-slider"
              value="${state.annualRate}"
              min="2"
              max="25"
              step="0.5"
              aria-label="Expected Annual Return Slider"
            >
            <div class="rp-range-ticks">
              <span>2%</span>
              <span>10% (Balanced/Equity)</span>
              <span>25%</span>
            </div>
            <div class="rp-field-error" id="err-swp-rate"></div>
          </div>

          <!-- Input 4: Withdrawal Period (with Years/Months switch) -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <div class="rp-label-with-toggle">
                <label for="swp-input-tenure" class="rp-field-label">Withdrawal Period</label>
                <!-- Unit Switcher -->
                <div class="rp-unit-switch" role="group" aria-label="Tenure Unit">
                  <button
                    type="button"
                    class="rp-unit-btn ${!isMonths ? 'active' : ''}"
                    id="swp-unit-years"
                    aria-pressed="${!isMonths}"
                  >Years</button>
                  <button
                    type="button"
                    class="rp-unit-btn ${isMonths ? 'active' : ''}"
                    id="swp-unit-months"
                    aria-pressed="${isMonths}"
                  >Months</button>
                </div>
              </div>
              <div class="rp-input-affix-wrap">
                <input
                  type="number"
                  id="swp-input-tenure"
                  class="rp-number-input text-right"
                  value="${state.tenure}"
                  min="${isMonths ? 1 : 1}"
                  max="${tenureMax}"
                  step="${tenureStep}"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Withdrawal Period"
                >
                <span class="rp-affix" id="swp-tenure-affix">${isMonths ? 'Mo' : 'Yr'}</span>
              </div>
            </div>
            <input
              type="range"
              id="swp-range-tenure"
              class="rp-range-slider"
              value="${state.tenure}"
              min="${isMonths ? 1 : 1}"
              max="${tenureMax}"
              step="${tenureStep}"
              aria-label="Withdrawal Period Slider"
            >
            <div class="rp-range-ticks" id="swp-tenure-ticks">
              ${isMonths ? `
                <span>1 Mo</span>
                <span>120 Mo (10 Yr)</span>
                <span>360 Mo (30 Yr)</span>
              ` : `
                <span>1 Yr</span>
                <span>15 Yr</span>
                <span>30 Yr</span>
              `}
            </div>
            <div class="rp-field-error" id="err-swp-tenure"></div>
          </div>

          <!-- Input 5: Withdrawal Frequency Selector -->
          <div class="rp-field-group">
            <label class="rp-field-label">Withdrawal Frequency</label>
            <div class="rp-freq-switch" role="group" aria-label="Withdrawal Frequency">
              <button
                type="button"
                class="rp-freq-btn ${state.frequency === 'monthly' ? 'active' : ''}"
                data-freq="monthly"
              >Monthly</button>
              <button
                type="button"
                class="rp-freq-btn ${state.frequency === 'quarterly' ? 'active' : ''}"
                data-freq="quarterly"
              >Quarterly</button>
              <button
                type="button"
                class="rp-freq-btn ${state.frequency === 'yearly' ? 'active' : ''}"
                data-freq="yearly"
              >Yearly</button>
            </div>
          </div>

          <!-- Quick presets for corpus -->
          <div class="rp-presets-row">
            <span class="rp-preset-title">Quick Corpus:</span>
            <button type="button" class="rp-preset-btn" data-corpus="1000000" data-withdrawal="10000">10 Lakhs</button>
            <button type="button" class="rp-preset-btn" data-corpus="2000000" data-withdrawal="20000">20 Lakhs</button>
            <button type="button" class="rp-preset-btn" data-corpus="5000000" data-withdrawal="45000">50 Lakhs</button>
            <button type="button" class="rp-preset-btn" data-corpus="10000000" data-withdrawal="90000">1 Crore</button>
          </div>
        </div>

        <!-- Results Column -->
        <div class="rp-calc-results-card">
          <!-- Primary Results Grid -->
          <div class="rp-results-grid">
            <div class="rp-stat-card maturity span-2">
              <div class="rp-maturity-header">
                <span class="rp-stat-label">Final Remaining Corpus</span>
                <span class="rp-badge ${res.isExhausted ? 'rp-badge-danger' : 'rp-badge-pulse'}">
                  ${res.isExhausted ? 'Depleted Early' : 'Projected Balance'}
                </span>
              </div>
              <div class="rp-stat-value maturity-large ${res.isExhausted ? 'text-danger' : ''}" id="swp-res-final">
                ${formatNPR(res.finalRemainingCorpus)}
              </div>
              <div class="rp-stat-caption" id="swp-exhaustion-banner">
                ${res.isExhausted
                  ? `Your investment corpus is projected to be exhausted before the selected withdrawal period (in Year ${res.exhaustedYear}, Month ${res.exhaustedMonth}).`
                  : 'Your corpus is projected to remain after the selected period.'}
              </div>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Total Amount Withdrawn</span>
              <div class="rp-stat-value accent" id="swp-res-withdrawn">${formatNPR(res.totalAmountWithdrawn)}</div>
              <span class="rp-stat-sub">Across ${res.tenureYears} years</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Total Interest Earned</span>
              <div class="rp-stat-value" style="color:#10B981" id="swp-res-growth">+${formatNPR(res.totalInterestEarned)}</div>
              <span class="rp-stat-sub">Compounded return</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Initial Corpus</span>
              <div class="rp-stat-value" id="swp-res-initial">${formatNPR(res.initialCorpus)}</div>
              <span class="rp-stat-sub">Starting capital</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Annual Withdrawal Rate</span>
              <div class="rp-stat-value" id="swp-res-rate">
                ${res.initialCorpus > 0 ? ((res.monthlyWithdrawal * 12 / res.initialCorpus) * 100).toFixed(1) : 0}%
              </div>
              <span class="rp-stat-sub">Effective annual drawdown</span>
            </div>
          </div>

          <!-- Withdrawal Sustainability Indicator Card -->
          <div class="rp-sustainability-card ${res.sustainability}" id="swp-sustainability-card">
            <div class="rp-sustain-header">
              <span class="rp-sustain-dot"></span>
              <span class="rp-sustain-title" id="swp-sustain-label">${res.sustainabilityLabel}</span>
            </div>
            <p class="rp-sustain-desc" id="swp-sustain-desc">${res.sustainabilityDesc}</p>
          </div>

          <!-- Doughnut Chart: Total Withdrawn vs Final Balance -->
          <div id="swp-donut-container">
            ${renderSWPDonutChart({
              totalWithdrawn: res.totalAmountWithdrawn,
              finalBalance: res.finalRemainingCorpus,
            })}
          </div>
        </div>

      </div>

      <!-- Sensitivity Comparison Box (-10% vs Base vs +10%) -->
      <div class="rp-comparison-section">
        <div class="rp-section-heading-row">
          <div>
            <h3>Withdrawal Sensitivity Analysis</h3>
            <p class="rp-subtext">Small adjustments to your monthly withdrawal can dramatically alter how long your capital survives.</p>
          </div>
        </div>

        <div class="rp-comparison-grid" id="swp-sensitivity-cards">
          ${renderSensitivityHTML(res.sensitivity)}
        </div>
      </div>

      <!-- Remaining Corpus Trajectory Graph -->
      <div class="rp-calc-section" id="swp-chart-container">
        ${renderSWPBalanceChart({
          yearlyMilestones: res.yearlyMilestones,
          isExhausted: res.isExhausted,
        })}
      </div>

      <!-- Yearly Breakdown Table -->
      <div class="rp-calc-section rp-table-section">
        <div class="rp-section-heading-row">
          <div>
            <h3>Year-wise Corpus Breakdown</h3>
            <p class="rp-subtext">Year-by-year simulation of opening capital, compounding growth, withdrawals, and closing balances.</p>
          </div>
          <span class="rp-badge rp-badge-outline" id="swp-table-count">${res.yearlyBreakdown.length} Years</span>
        </div>

        <div class="rp-table-responsive">
          <table class="rp-growth-table" aria-label="SWP Yearly Progression Table">
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Opening Corpus</th>
                <th scope="col">Investment Growth</th>
                <th scope="col">Withdrawal</th>
                <th scope="col">Closing Corpus</th>
              </tr>
            </thead>
            <tbody id="swp-table-body">
              ${renderYearlyRows(res.yearlyBreakdown)}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Educational Insights Section -->
      <div class="rp-calc-section rp-edu-cards-section" style="margin-top:var(--space-8)">
        <h3 style="font-size:var(--text-xl);color:var(--color-heading);margin-bottom:var(--space-2)">
          Understanding SWP Pensions & Capital Preservation in Nepal
        </h3>
        <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-6)">
          How Systematic Withdrawal Plans create a predictable monthly retirement pension while minimizing tax drag.
        </p>

        <div class="rp-edu-grid">
          <!-- Card 1: Mathematical Formula & Drawdown Engine -->
          <div class="rp-edu-card">
            <div class="rp-edu-icon-wrap" style="color:var(--color-accent);font-size:24px;margin-bottom:8px">📐</div>
            <h4>The Drawdown Mathematics</h4>
            <p style="margin-bottom:10px">
              Calculated month-by-month using iterative compounding:
              <br><code>Bₜ = Bₜ₋₁ × (1 + r/12) - W</code>
            </p>
            <p style="font-size:0.875rem;line-height:1.55">
              Where <strong>Bₜ</strong> is the remaining balance, <strong>r</strong> is the annual growth rate, and <strong>W</strong> is the periodic cash withdrawal. As long as your withdrawal rate (<code>W ÷ Total Corpus</code>) stays below the net real return, your principal survives permanently.
            </p>
          </div>

          <!-- Card 2: Nepal Tax Efficiency vs Bank FD -->
          <div class="rp-edu-card">
            <div class="rp-edu-icon-wrap" style="color:#10b981;font-size:24px;margin-bottom:8px">🇳🇵</div>
            <h4>Tax Efficiency vs Bank Fixed Deposit</h4>
            <ul class="rp-edu-list" style="margin:0;padding-left:18px;font-size:0.875rem;color:var(--color-text-secondary);line-height:1.6">
              <li><strong>FD Interest Tax Drag:</strong> Commercial banks deduct 5% TDS upfront on 100% of the interest earned annually, eroding capital compound speed.</li>
              <li><strong>Mutual Fund Capital Gains:</strong> Under an SWP, redemptions represent capital return plus capital gain. Only the net capital gain portion is taxed at 5% CGT, leaving unredeemed units compounding tax-free.</li>
              <li><strong>ConnectIPS Direct Credit:</strong> Fund managers (AMCs) deposit monthly pension payouts directly to your commercial bank account on the 1st of every month.</li>
            </ul>
          </div>

          <!-- Card 3: Sequence of Returns & Sizing Guide -->
          <div class="rp-edu-card">
            <div class="rp-edu-icon-wrap" style="color:#f59e0b;font-size:24px;margin-bottom:8px">⚖️</div>
            <h4>Sequence of Returns Risk & The 3.5% Rule</h4>
            <ul class="rp-edu-list" style="margin:0;padding-left:18px;font-size:0.875rem;color:var(--color-text-secondary);line-height:1.6">
              <li><strong>The Bear Market Trap:</strong> Withdrawing during an early NEPSE downturn forces selling more units at rock-bottom NAVs, causing permanent portfolio impairment.</li>
              <li><strong>The 3-Year Cash Bucket:</strong> Maintain 2 to 3 years of living expenses in liquid fixed deposits or short-term debentures to fund cash flow during market corrections.</li>
              <li><strong>Safe Withdrawal Rate:</strong> In Nepal's 6%-7% inflation environment, a conservative 3.0%-3.5% initial withdrawal rate provides bulletproof multi-decade sustainability.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Nepal Educational Context Note & Companion Links -->
      <div class="rp-educational-note" style="margin-top:var(--space-6)">
        <div class="rp-edu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div class="rp-edu-text">
          <strong>Recommended Learning Path:</strong> Explore how to engineer a lifelong private pension in our lesson on <a href="/learn/mutual-funds/systematic-withdrawal-plan-swp-pension" style="color:var(--color-accent);text-decoration:underline">SWP Pension Mechanics for Nepal</a> or read the comprehensive <a href="/learn/guides/complete-retirement-planning-guide" style="color:var(--color-accent);text-decoration:underline">Complete Retirement & Pension Guide</a>.
        </div>
      </div>

    </div>
  `;
}

/**
 * Render Sensitivity HTML cards
 * @param {Object} sens
 * @returns {string}
 */
function renderSensitivityHTML(sens) {
  if (!sens) return '';

  return `
    <!-- -10% Withdrawal -->
    <div class="rp-comp-card">
      <div class="rp-comp-badge" style="background:rgba(16,185,129,0.15);color:#10B981">-10% Less Withdrawal</div>
      <div class="rp-comp-rate">${formatNPR(sens.minus10.monthlyWithdrawal)} / mo</div>
      <div class="rp-comp-emi" style="color:#10B981">${formatNPR(sens.minus10.finalBalance)}</div>
      <div class="rp-comp-diff" style="color:#10B981">
        ${sens.minus10.isExhausted ? `Exhausts in Yr ${sens.minus10.exhaustedYear}` : 'Corpus projected to survive'}
      </div>
      <div class="rp-comp-interest">
        Total Withdrawn: <strong>${formatNPR(sens.minus10.totalWithdrawn)}</strong>
      </div>
    </div>

    <!-- Current Withdrawal -->
    <div class="rp-comp-card active">
      <div class="rp-comp-badge" style="background:rgba(10,132,255,0.12);color:var(--color-accent);border:1px solid rgba(10,132,255,0.3)">Current Plan</div>
      <div class="rp-comp-rate accent">${formatNPR(sens.base.monthlyWithdrawal)} / mo</div>
      <div class="rp-comp-emi accent">${formatNPR(sens.base.finalBalance)}</div>
      <div class="rp-comp-diff" style="color:var(--color-text-muted)">
        ${sens.base.isExhausted ? `Exhausts in Yr ${sens.base.exhaustedYear}, Mo ${sens.base.exhaustedMonth}` : 'Corpus projected to survive'}
      </div>
      <div class="rp-comp-interest">
        Total Withdrawn: <strong>${formatNPR(sens.base.totalWithdrawn)}</strong>
      </div>
    </div>

    <!-- +10% Withdrawal -->
    <div class="rp-comp-card">
      <div class="rp-comp-badge" style="background:rgba(239,68,68,0.15);color:#ef4444">+10% More Withdrawal</div>
      <div class="rp-comp-rate">${formatNPR(sens.plus10.monthlyWithdrawal)} / mo</div>
      <div class="rp-comp-emi" style="color:${sens.plus10.isExhausted ? '#ef4444' : 'var(--color-white)'}">
        ${formatNPR(sens.plus10.finalBalance)}
      </div>
      <div class="rp-comp-diff" style="color:${sens.plus10.isExhausted ? '#ef4444' : '#10B981'}">
        ${sens.plus10.isExhausted ? `Exhausts early in Yr ${sens.plus10.exhaustedYear}, Mo ${sens.plus10.exhaustedMonth}` : 'Corpus projected to survive'}
      </div>
      <div class="rp-comp-interest">
        Total Withdrawn: <strong>${formatNPR(sens.plus10.totalWithdrawn)}</strong>
      </div>
    </div>
  `;
}

/**
 * Render Yearly Breakdown Table Rows
 * @param {Array} breakdown
 * @returns {string}
 */
function renderYearlyRows(breakdown) {
  if (!breakdown || !breakdown.length) {
    return `<tr><td colspan="5" class="text-center">No simulation data available</td></tr>`;
  }

  return breakdown.map(r => `
    <tr class="${r.closingCorpus === 0 ? 'rp-row-exhausted' : ''}">
      <td>
        <span class="rp-year-badge">Year ${r.year}</span>
        ${r.closingCorpus === 0 ? '<span class="rp-pill-final" style="background:#ef4444">Depleted</span>' : ''}
      </td>
      <td class="rp-num">${formatNPR(r.openingCorpus)}</td>
      <td class="rp-num font-semibold" style="color:#10B981">+${formatNPR(r.investmentGrowth)}</td>
      <td class="rp-num" style="color:#f59e0b">-${formatNPR(r.withdrawal)}</td>
      <td class="rp-num accent font-semibold">${formatNPR(r.closingCorpus)}</td>
    </tr>
  `).join('');
}

/**
 * Initialize SWP Calculator DOM events and interactivity
 */
export function initSWPCalculator() {
  const container = document.getElementById('swp-calculator');
  if (!container) return;

  // DOM Elements
  const elInputCorpus = document.getElementById('swp-input-corpus');
  const elRangeCorpus = document.getElementById('swp-range-corpus');
  const elInputWithdrawal = document.getElementById('swp-input-withdrawal');
  const elRangeWithdrawal = document.getElementById('swp-range-withdrawal');
  const elInputRate = document.getElementById('swp-input-rate');
  const elRangeRate = document.getElementById('swp-range-rate');
  const elInputTenure = document.getElementById('swp-input-tenure');
  const elRangeTenure = document.getElementById('swp-range-tenure');
  const elUnitYears = document.getElementById('swp-unit-years');
  const elUnitMonths = document.getElementById('swp-unit-months');
  const elTenureAffix = document.getElementById('swp-tenure-affix');
  const elTenureTicks = document.getElementById('swp-tenure-ticks');

  // Error placeholders
  const errCorpus = document.getElementById('err-swp-corpus');
  const errWithdrawal = document.getElementById('err-swp-withdrawal');
  const errRate = document.getElementById('err-swp-rate');
  const errTenure = document.getElementById('err-swp-tenure');

  // Results displays
  const resFinal = document.getElementById('swp-res-final');
  const resWithdrawn = document.getElementById('swp-res-withdrawn');
  const resGrowth = document.getElementById('swp-res-growth');
  const resInitial = document.getElementById('swp-res-initial');
  const resRate = document.getElementById('swp-res-rate');
  const exhaustionBanner = document.getElementById('swp-exhaustion-banner');

  // Sustainability card
  const sustainCard = document.getElementById('swp-sustainability-card');
  const sustainLabel = document.getElementById('swp-sustain-label');
  const sustainDesc = document.getElementById('swp-sustain-desc');

  // Containers
  const donutContainer = document.getElementById('swp-donut-container');
  const chartContainer = document.getElementById('swp-chart-container');
  const sensitivityCards = document.getElementById('swp-sensitivity-cards');
  const tableBody = document.getElementById('swp-table-body');
  const tableCount = document.getElementById('swp-table-count');

  function update() {
    const validation = validateSWPInputs({
      initialCorpus: elInputCorpus?.value,
      monthlyWithdrawal: elInputWithdrawal?.value,
      annualRate: elInputRate?.value,
      tenure: elInputTenure?.value,
      tenureUnit: state.tenureUnit,
      frequency: state.frequency,
    });

    if (errCorpus) errCorpus.textContent = validation.errors.initialCorpus || '';
    if (errWithdrawal) {
      errWithdrawal.textContent = validation.errors.monthlyWithdrawal || validation.warnings.monthlyWithdrawal || '';
      if (validation.warnings.monthlyWithdrawal) {
        errWithdrawal.style.color = 'var(--color-warning)';
      } else {
        errWithdrawal.style.color = 'var(--color-error)';
      }
    }
    if (errRate) errRate.textContent = validation.errors.annualRate || '';
    if (errTenure) errTenure.textContent = validation.errors.tenure || '';

    const sanitized = validation.sanitized;
    state.initialCorpus = sanitized.initialCorpus;
    state.monthlyWithdrawal = sanitized.monthlyWithdrawal;
    state.annualRate = sanitized.annualRate;
    state.tenure = sanitized.tenure;

    const res = simulateSWP({
      initialCorpus: sanitized.initialCorpus,
      monthlyWithdrawal: sanitized.monthlyWithdrawal,
      annualRate: sanitized.annualRate,
      tenureMonths: sanitized.tenureMonths,
      frequency: state.frequency,
    });

    // Update Primary Results
    if (resFinal) {
      resFinal.textContent = formatNPR(res.finalRemainingCorpus);
      if (res.isExhausted) {
        resFinal.classList.add('text-danger');
      } else {
        resFinal.classList.remove('text-danger');
      }
    }
    if (resWithdrawn) resWithdrawn.textContent = formatNPR(res.totalAmountWithdrawn);
    if (resGrowth) resGrowth.textContent = `+${formatNPR(res.totalInterestEarned)}`;
    if (resInitial) resInitial.textContent = formatNPR(res.initialCorpus);
    if (resRate) {
      resRate.textContent = `${res.initialCorpus > 0 ? ((res.monthlyWithdrawal * 12 / res.initialCorpus) * 100).toFixed(1) : 0}%`;
    }

    if (exhaustionBanner) {
      exhaustionBanner.textContent = res.isExhausted
        ? `Your investment corpus is projected to be exhausted before the selected withdrawal period (in Year ${res.exhaustedYear}, Month ${res.exhaustedMonth}).`
        : 'Your corpus is projected to remain after the selected period.';
    }

    // Update Sustainability Card
    if (sustainCard) {
      sustainCard.className = `rp-sustainability-card ${res.sustainability}`;
    }
    if (sustainLabel) sustainLabel.textContent = res.sustainabilityLabel;
    if (sustainDesc) sustainDesc.textContent = res.sustainabilityDesc;

    // Update Donut Chart
    if (donutContainer) {
      donutContainer.innerHTML = renderSWPDonutChart({
        totalWithdrawn: res.totalAmountWithdrawn,
        finalBalance: res.finalRemainingCorpus,
      });
    }

    // Update Sensitivity Cards
    if (sensitivityCards) {
      sensitivityCards.innerHTML = renderSensitivityHTML(res.sensitivity);
    }

    // Update Line Chart
    if (chartContainer) {
      chartContainer.innerHTML = renderSWPBalanceChart({
        yearlyMilestones: res.yearlyMilestones,
        isExhausted: res.isExhausted,
      });
    }

    // Update Table
    if (tableBody) {
      tableBody.innerHTML = renderYearlyRows(res.yearlyBreakdown);
    }
    if (tableCount) {
      tableCount.textContent = `${res.yearlyBreakdown.length} Years`;
    }
  }

  let swpRaf = null;
  function scheduleUpdate() {
    if (swpRaf) return;
    swpRaf = requestAnimationFrame(() => {
      swpRaf = null;
      update();
    });
  }

  // ── Synced Inputs ─────────────────────────────
  elInputCorpus?.addEventListener('input', () => {
    if (elRangeCorpus) elRangeCorpus.value = elInputCorpus.value;
    scheduleUpdate();
  });
  elRangeCorpus?.addEventListener('input', () => {
    if (elInputCorpus) elInputCorpus.value = elRangeCorpus.value;
    scheduleUpdate();
  });

  elInputWithdrawal?.addEventListener('input', () => {
    if (elRangeWithdrawal) elRangeWithdrawal.value = elInputWithdrawal.value;
    scheduleUpdate();
  });
  elRangeWithdrawal?.addEventListener('input', () => {
    if (elInputWithdrawal) elInputWithdrawal.value = elRangeWithdrawal.value;
    scheduleUpdate();
  });

  elInputRate?.addEventListener('input', () => {
    if (elRangeRate) elRangeRate.value = elInputRate.value;
    scheduleUpdate();
  });
  elRangeRate?.addEventListener('input', () => {
    if (elInputRate) elInputRate.value = elRangeRate.value;
    scheduleUpdate();
  });

  elInputTenure?.addEventListener('input', () => {
    if (elRangeTenure) elRangeTenure.value = elInputTenure.value;
    scheduleUpdate();
  });
  elRangeTenure?.addEventListener('input', () => {
    if (elInputTenure) elInputTenure.value = elRangeTenure.value;
    scheduleUpdate();
  });

  // Tenure Unit Switcher (Years <-> Months)
  function switchTenureUnit(newUnit) {
    if (state.tenureUnit === newUnit) return;
    state.tenureUnit = newUnit;
    const isMonths = newUnit === 'months';
    const currentVal = Number(elInputTenure.value) || 15;

    if (isMonths) {
      const monthsVal = Math.min(SWP_BOUNDS.maxMonths, Math.max(1, Math.round(currentVal * 12)));
      elInputTenure.value = monthsVal;
      elInputTenure.max = SWP_BOUNDS.maxMonths;
      elRangeTenure.max = 360;
      elRangeTenure.value = monthsVal;
      elTenureAffix.textContent = 'Mo';
      if (elTenureTicks) {
        elTenureTicks.innerHTML = `<span>1 Mo</span><span>120 Mo (10 Yr)</span><span>360 Mo (30 Yr)</span>`;
      }
      elUnitMonths?.classList.add('active');
      elUnitYears?.classList.remove('active');
    } else {
      const yearsVal = Math.min(SWP_BOUNDS.maxYears, Math.max(1, Math.round(currentVal / 12)));
      elInputTenure.value = yearsVal;
      elInputTenure.max = SWP_BOUNDS.maxYears;
      elRangeTenure.max = SWP_BOUNDS.maxYears;
      elRangeTenure.value = yearsVal;
      elTenureAffix.textContent = 'Yr';
      if (elTenureTicks) {
        elTenureTicks.innerHTML = `<span>1 Yr</span><span>15 Yr</span><span>30 Yr</span>`;
      }
      elUnitYears?.classList.add('active');
      elUnitMonths?.classList.remove('active');
    }
    scheduleUpdate();
  }

  elUnitYears?.addEventListener('click', () => switchTenureUnit('years'));
  elUnitMonths?.addEventListener('click', () => switchTenureUnit('months'));

  // Frequency Buttons
  container.querySelectorAll('.rp-freq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.rp-freq-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.frequency = btn.dataset.freq || 'monthly';
      scheduleUpdate();
    });
  });

  // Preset Buttons
  container.querySelectorAll('.rp-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const corpus = Number(btn.dataset.corpus);
      const withdrawal = Number(btn.dataset.withdrawal);
      if (elInputCorpus) elInputCorpus.value = corpus;
      if (elRangeCorpus) elRangeCorpus.value = corpus;
      if (elInputWithdrawal) elInputWithdrawal.value = withdrawal;
      if (elRangeWithdrawal) elRangeWithdrawal.value = withdrawal;
      scheduleUpdate();
    });
  });

  // Delegated Chart Tooltip Interactivity
  function renderSWPTooltipContent(tooltip, pt) {
    const year = pt.dataset.year;
    const balance = Number(pt.dataset.balance);
    const withdrawn = Number(pt.dataset.withdrawn);
    const growth = Number(pt.dataset.growth);

    tooltip.innerHTML = `
      <div class="rp-tt-title">Year ${year} Milestone</div>
      <div class="rp-tt-row"><span class="rp-tt-label">Remaining Corpus:</span> <span class="rp-tt-val ${balance === 0 ? 'text-danger' : 'accent'}">${formatNPR(balance)}</span></div>
      <div class="rp-tt-row"><span class="rp-tt-label">Total Withdrawn:</span> <span class="rp-tt-val">${formatNPR(withdrawn)}</span></div>
      <div class="rp-tt-row"><span class="rp-tt-label">Growth Earned:</span> <span class="rp-tt-val" style="color:#10B981">+${formatNPR(growth)}</span></div>
    `;

    positionChartTooltip(tooltip, pt, chartContainer);
  }

  function handleChartTooltip(e) {
    const pt = e.target.closest('.rp-chart-point');
    const tooltip = document.getElementById('rp-swp-chart-tooltip');
    if (!tooltip) return;

    if (!pt) {
      tooltip.style.display = 'none';
      return;
    }

    renderSWPTooltipContent(tooltip, pt);
  }

  function handleChartTouch(e) {
    const tooltip = document.getElementById('rp-swp-chart-tooltip');
    if (!tooltip || !chartContainer) return;

    const points = Array.from(chartContainer.querySelectorAll('.rp-chart-point'));
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
      renderSWPTooltipContent(tooltip, nearestPt);
    }
  }

  chartContainer?.addEventListener('pointerover', handleChartTooltip);
  chartContainer?.addEventListener('focusin', handleChartTooltip);
  chartContainer?.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      handleChartTouch(e);
    } else {
      handleChartTooltip(e);
    }
  });
  chartContainer?.addEventListener('touchstart', handleChartTouch, { passive: true });
  chartContainer?.addEventListener('touchmove', handleChartTouch, { passive: true });
  chartContainer?.addEventListener('pointerleave', () => {
    const tooltip = document.getElementById('rp-swp-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
  chartContainer?.addEventListener('focusout', () => {
    const tooltip = document.getElementById('rp-swp-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
}

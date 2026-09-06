// ==============================================
// risePaisa — Nepal SIP Calculator Component
// Interactive, responsive, high-performance calculator
// ==============================================
import { formatNPR, formatCompactNPR, validateSIPInputs, calculateSIP, SIP_BOUNDS } from './engine.js';
import { renderDonutChart, renderGrowthChart, positionChartTooltip } from './charts.js';

/**
 * State for SIP Calculator
 */
let state = {
  monthlyInvestment: SIP_BOUNDS.defaultInvestment,
  annualReturn: SIP_BOUNDS.defaultReturn,
  tenure: SIP_BOUNDS.defaultYears,
  tenureUnit: 'years', // 'years' | 'months'
};

/**
 * Render SIP Calculator HTML structure
 * @returns {string} HTML markup
 */
export function renderSIPCalculator() {
  const isMonths = state.tenureUnit === 'months';
  const tenureMax = isMonths ? SIP_BOUNDS.maxMonths : SIP_BOUNDS.maxYears;
  const tenureStep = isMonths ? 1 : 1;

  // Initial calculation
  const tenureMonths = isMonths ? state.tenure : state.tenure * 12;
  const res = calculateSIP({
    monthlyInvestment: state.monthlyInvestment,
    annualReturn: state.annualReturn,
    tenureMonths,
  });

  return `
    <div class="rp-calc-wrapper" id="sip-calculator">
      <!-- Calculator Main Grid -->
      <div class="rp-calc-layout">
        
        <!-- Controls Column (Inputs & Sliders) -->
        <div class="rp-calc-controls-card">
          <div class="rp-calc-card-header">
            <h3>Investment Parameters</h3>
            <span class="rp-badge rp-badge-accent">Monthly SIP</span>
          </div>

          <!-- Input 1: Monthly Investment -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="sip-input-investment" class="rp-field-label">Monthly Investment</label>
              <div class="rp-input-affix-wrap">
                <span class="rp-affix">NPR</span>
                <input
                  type="number"
                  id="sip-input-investment"
                  class="rp-number-input"
                  value="${state.monthlyInvestment}"
                  min="${SIP_BOUNDS.minInvestment}"
                  max="${SIP_BOUNDS.maxInvestment}"
                  step="500"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Monthly Investment in NPR"
                >
              </div>
            </div>
            <input
              type="range"
              id="sip-range-investment"
              class="rp-range-slider"
              value="${state.monthlyInvestment}"
              min="500"
              max="100000"
              step="500"
              aria-label="Monthly Investment Slider"
            >
            <div class="rp-range-ticks">
              <span>NPR 500</span>
              <span>NPR 50,000</span>
              <span>NPR 1,00,000</span>
            </div>
            <div class="rp-field-error" id="err-sip-investment"></div>
          </div>

          <!-- Input 2: Expected Annual Return -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="sip-input-return" class="rp-field-label">Expected Annual Return</label>
              <div class="rp-input-affix-wrap">
                <input
                  type="number"
                  id="sip-input-return"
                  class="rp-number-input text-right"
                  value="${state.annualReturn}"
                  min="${SIP_BOUNDS.minReturn}"
                  max="${SIP_BOUNDS.maxReturn}"
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
              id="sip-range-return"
              class="rp-range-slider"
              value="${state.annualReturn}"
              min="1"
              max="30"
              step="0.5"
              aria-label="Expected Annual Return Slider"
            >
            <div class="rp-range-ticks">
              <span>1%</span>
              <span>12% (Typical Eq)</span>
              <span>30%</span>
            </div>
            <div class="rp-field-error" id="err-sip-return"></div>
          </div>

          <!-- Input 3: Investment Period (with Years / Months switch) -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <div class="rp-label-with-toggle">
                <label for="sip-input-tenure" class="rp-field-label">Investment Period</label>
                <!-- Unit Switcher Toggle -->
                <div class="rp-unit-switch" role="group" aria-label="Tenure Unit">
                  <button
                    type="button"
                    class="rp-unit-btn ${!isMonths ? 'active' : ''}"
                    id="sip-unit-years"
                    aria-pressed="${!isMonths}"
                  >Years</button>
                  <button
                    type="button"
                    class="rp-unit-btn ${isMonths ? 'active' : ''}"
                    id="sip-unit-months"
                    aria-pressed="${isMonths}"
                  >Months</button>
                </div>
              </div>
              <div class="rp-input-affix-wrap">
                <input
                  type="number"
                  id="sip-input-tenure"
                  class="rp-number-input text-right"
                  value="${state.tenure}"
                  min="${isMonths ? 1 : 1}"
                  max="${tenureMax}"
                  step="${tenureStep}"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Investment Period"
                >
                <span class="rp-affix" id="sip-tenure-affix">${isMonths ? 'Mo' : 'Yr'}</span>
              </div>
            </div>
            <input
              type="range"
              id="sip-range-tenure"
              class="rp-range-slider"
              value="${state.tenure}"
              min="${isMonths ? 1 : 1}"
              max="${tenureMax}"
              step="${tenureStep}"
              aria-label="Investment Period Slider"
            >
            <div class="rp-range-ticks" id="sip-tenure-ticks">
              ${isMonths ? `
                <span>1 Mo</span>
                <span>60 Mo (5 Yr)</span>
                <span>120 Mo (10 Yr)</span>
              ` : `
                <span>1 Yr</span>
                <span>10 Yr</span>
                <span>30 Yr</span>
              `}
            </div>
            <div class="rp-field-error" id="err-sip-tenure"></div>
          </div>

          <!-- Presets for fast exploration -->
          <div class="rp-presets-row">
            <span class="rp-preset-title">Quick Monthly:</span>
            <button type="button" class="rp-preset-btn" data-val="1000">1K</button>
            <button type="button" class="rp-preset-btn" data-val="5000">5K</button>
            <button type="button" class="rp-preset-btn" data-val="10000">10K</button>
            <button type="button" class="rp-preset-btn" data-val="25000">25K</button>
          </div>
        </div>

        <!-- Results & Breakdown Column -->
        <div class="rp-calc-results-card">
          <!-- Primary Results Stat Cards -->
          <div class="rp-results-grid">
            <div class="rp-stat-card">
              <span class="rp-stat-label">Total Investment</span>
              <div class="rp-stat-value" id="sip-res-invested">${formatNPR(res.totalInvested)}</div>
              <span class="rp-stat-sub">Principal deposited</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Estimated Returns</span>
              <div class="rp-stat-value profit" id="sip-res-returns">${formatNPR(res.estimatedReturns)}</div>
              <span class="rp-stat-sub" id="sip-res-pct">+${res.returnPercentage}% growth</span>
            </div>

            <div class="rp-stat-card maturity span-2">
              <div class="rp-maturity-header">
                <span class="rp-stat-label">Estimated Maturity Amount</span>
                <span class="rp-badge rp-badge-pulse">Projected Value</span>
              </div>
              <div class="rp-stat-value maturity-large" id="sip-res-maturity">${formatNPR(res.maturityAmount)}</div>
              <div class="rp-stat-caption">Total accumulated wealth at tenure completion</div>
            </div>
          </div>

          <!-- Doughnut Chart Section -->
          <div id="sip-donut-container">
            ${renderDonutChart({ invested: res.totalInvested, profit: res.estimatedReturns })}
          </div>
        </div>

      </div>

      <!-- Visual Investment Summary Flow -->
      <div class="rp-summary-flow-card">
        <h4 class="rp-summary-flow-title">Investment Journey at a Glance</h4>
        <div class="rp-flow-chain">
          <div class="rp-flow-step">
            <div class="rp-flow-step-num">1</div>
            <div class="rp-flow-step-label">Monthly Investment</div>
            <div class="rp-flow-step-val" id="sip-flow-monthly">${formatNPR(res.monthlyInvestment)}</div>
            <div class="rp-flow-step-sub">Every month</div>
          </div>

          <div class="rp-flow-arrow">→</div>

          <div class="rp-flow-step">
            <div class="rp-flow-step-num">2</div>
            <div class="rp-flow-step-label">Total Invested</div>
            <div class="rp-flow-step-val" id="sip-flow-invested">${formatNPR(res.totalInvested)}</div>
            <div class="rp-flow-step-sub">${res.tenureMonths} contributions</div>
          </div>

          <div class="rp-flow-arrow">→</div>

          <div class="rp-flow-step">
            <div class="rp-flow-step-num">3</div>
            <div class="rp-flow-step-label">Estimated Returns</div>
            <div class="rp-flow-step-val profit" id="sip-flow-returns">${formatNPR(res.estimatedReturns)}</div>
            <div class="rp-flow-step-sub">Compound interest</div>
          </div>

          <div class="rp-flow-arrow">→</div>

          <div class="rp-flow-step highlight">
            <div class="rp-flow-step-num">4</div>
            <div class="rp-flow-step-label">Final Maturity Value</div>
            <div class="rp-flow-step-val maturity" id="sip-flow-maturity">${formatNPR(res.maturityAmount)}</div>
            <div class="rp-flow-step-sub">Maturity wealth</div>
          </div>
        </div>
      </div>

      <!-- Growth Graph Section -->
      <div class="rp-calc-section" id="sip-growth-container">
        ${renderGrowthChart({ yearlyBreakdown: res.yearlyBreakdown })}
      </div>

      <!-- Year-wise Growth Breakdown Table -->
      <div class="rp-calc-section rp-table-section">
        <div class="rp-section-heading-row">
          <div>
            <h3>Year-wise Growth Table</h3>
            <p class="rp-subtext">Detailed year-by-year progression of your investment and compound wealth.</p>
          </div>
          <span class="rp-badge rp-badge-outline" id="sip-table-count">${res.yearlyBreakdown.length} Milestones</span>
        </div>

        <div class="rp-table-responsive">
          <table class="rp-growth-table" aria-label="Year-wise Investment Breakdown">
            <thead>
              <tr>
                <th scope="col">Year</th>
                <th scope="col">Total Invested</th>
                <th scope="col">Estimated Value</th>
                <th scope="col">Estimated Profit</th>
              </tr>
            </thead>
            <tbody id="sip-table-body">
              ${renderTableRows(res.yearlyBreakdown)}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Nepal Educational Context Note -->
      <div class="rp-educational-note">
        <div class="rp-edu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div class="rp-edu-text">
          <strong>Nepal Investment Context:</strong> Historically, long-term equity returns vary significantly. This calculator provides estimates only and does not guarantee investment performance. Investors should evaluate risk, inflation, and market volatility before investing. 12% is a standard historical reference for equity mutual funds and does not imply guaranteed returns.
        </div>
      </div>
    </div>
  `;
}

/**
 * Generate table rows markup for the yearly breakdown
 * @param {Array} yearlyBreakdown
 * @returns {string}
 */
function renderTableRows(yearlyBreakdown) {
  if (!yearlyBreakdown || !yearlyBreakdown.length) {
    return `<tr><td colspan="4" class="text-center">No data available</td></tr>`;
  }

  return yearlyBreakdown.map(row => `
    <tr class="${row.isFinal ? 'rp-row-final' : ''}">
      <td>
        <span class="rp-year-badge">Year ${row.year}</span>
        ${row.isFinal ? '<span class="rp-pill-final">Maturity</span>' : ''}
      </td>
      <td class="rp-num">${formatNPR(row.totalInvested)}</td>
      <td class="rp-num accent font-semibold">${formatNPR(row.estimatedValue)}</td>
      <td class="rp-num profit">+${formatNPR(row.estimatedProfit)}</td>
    </tr>
  `).join('');
}

/**
 * Initialize interactive events, synchronized inputs, and live recalculations
 */
export function initSIPCalculator() {
  const container = document.getElementById('sip-calculator');
  if (!container) return;

  // DOM Elements
  const elInputInvestment = document.getElementById('sip-input-investment');
  const elRangeInvestment = document.getElementById('sip-range-investment');
  const elInputReturn = document.getElementById('sip-input-return');
  const elRangeReturn = document.getElementById('sip-range-return');
  const elInputTenure = document.getElementById('sip-input-tenure');
  const elRangeTenure = document.getElementById('sip-range-tenure');
  const elUnitYears = document.getElementById('sip-unit-years');
  const elUnitMonths = document.getElementById('sip-unit-months');
  const elTenureAffix = document.getElementById('sip-tenure-affix');
  const elTenureTicks = document.getElementById('sip-tenure-ticks');

  // Error placeholders
  const errInvestment = document.getElementById('err-sip-investment');
  const errReturn = document.getElementById('err-sip-return');
  const errTenure = document.getElementById('err-sip-tenure');

  // Results elements
  const resInvested = document.getElementById('sip-res-invested');
  const resReturns = document.getElementById('sip-res-returns');
  const resMaturity = document.getElementById('sip-res-maturity');
  const resPct = document.getElementById('sip-res-pct');

  // Summary flow
  const flowMonthly = document.getElementById('sip-flow-monthly');
  const flowInvested = document.getElementById('sip-flow-invested');
  const flowReturns = document.getElementById('sip-flow-returns');
  const flowMaturity = document.getElementById('sip-flow-maturity');

  // Chart and Table containers
  const donutContainer = document.getElementById('sip-donut-container');
  const growthContainer = document.getElementById('sip-growth-container');
  const tableBody = document.getElementById('sip-table-body');
  const tableCount = document.getElementById('sip-table-count');

  let rafId = null;
  function scheduleUpdate() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      update();
    });
  }

  /**
   * Recalculate and update the DOM
   */
  function update() {
    // Validate
    const validation = validateSIPInputs({
      monthlyInvestment: elInputInvestment?.value,
      annualReturn: elInputReturn?.value,
      tenure: elInputTenure?.value,
      tenureUnit: state.tenureUnit,
    });

    // Display inline validation messages
    if (errInvestment) errInvestment.textContent = validation.errors.monthlyInvestment || '';
    if (errReturn) errReturn.textContent = validation.errors.annualReturn || '';
    if (errTenure) errTenure.textContent = validation.errors.tenure || '';

    // Calculate using sanitized values
    const sanitized = validation.sanitized;
    state.monthlyInvestment = sanitized.monthlyInvestment;
    state.annualReturn = sanitized.annualReturn;
    state.tenure = sanitized.tenure;

    const res = calculateSIP({
      monthlyInvestment: sanitized.monthlyInvestment,
      annualReturn: sanitized.annualReturn,
      tenureMonths: sanitized.tenureMonths,
    });

    // Update Results Cards
    if (resInvested) resInvested.textContent = formatNPR(res.totalInvested);
    if (resReturns) resReturns.textContent = formatNPR(res.estimatedReturns);
    if (resMaturity) resMaturity.textContent = formatNPR(res.maturityAmount);
    if (resPct) resPct.textContent = `+${res.returnPercentage}% growth`;

    // Update Summary Flow
    if (flowMonthly) flowMonthly.textContent = formatNPR(res.monthlyInvestment);
    if (flowInvested) flowInvested.textContent = formatNPR(res.totalInvested);
    if (flowReturns) flowReturns.textContent = formatNPR(res.estimatedReturns);
    if (flowMaturity) flowMaturity.textContent = formatNPR(res.maturityAmount);

    // Update Doughnut Chart
    if (donutContainer) {
      donutContainer.innerHTML = renderDonutChart({
        invested: res.totalInvested,
        profit: res.estimatedReturns,
      });
    }

    // Update Growth Chart
    if (growthContainer) {
      growthContainer.innerHTML = renderGrowthChart({
        yearlyBreakdown: res.yearlyBreakdown,
      });
    }

    // Update Table
    if (tableBody) {
      tableBody.innerHTML = renderTableRows(res.yearlyBreakdown);
    }
    if (tableCount) {
      tableCount.textContent = `${res.yearlyBreakdown.length} Milestones`;
    }
  }

  // ── Input & Slider Synchronizations ───────────────

  // Investment
  elInputInvestment?.addEventListener('input', () => {
    if (elRangeInvestment) elRangeInvestment.value = elInputInvestment.value;
    scheduleUpdate();
  });
  elRangeInvestment?.addEventListener('input', () => {
    if (elInputInvestment) elInputInvestment.value = elRangeInvestment.value;
    scheduleUpdate();
  });

  // Annual Return
  elInputReturn?.addEventListener('input', () => {
    if (elRangeReturn) elRangeReturn.value = elInputReturn.value;
    scheduleUpdate();
  });
  elRangeReturn?.addEventListener('input', () => {
    if (elInputReturn) elInputReturn.value = elRangeReturn.value;
    scheduleUpdate();
  });

  // Tenure
  elInputTenure?.addEventListener('input', () => {
    if (elRangeTenure) elRangeTenure.value = elInputTenure.value;
    scheduleUpdate();
  });
  elRangeTenure?.addEventListener('input', () => {
    if (elInputTenure) elInputTenure.value = elRangeTenure.value;
    scheduleUpdate();
  });

  // Quick Preset Buttons
  container.querySelectorAll('.rp-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = Number(btn.dataset.val);
      if (elInputInvestment) elInputInvestment.value = val;
      if (elRangeInvestment) elRangeInvestment.value = val;
      scheduleUpdate();
    });
  });

  // Tenure Unit Switcher (Years <-> Months)
  function switchTenureUnit(newUnit) {
    if (state.tenureUnit === newUnit) return;
    state.tenureUnit = newUnit;

    const isMonths = newUnit === 'months';
    const currentVal = Number(elInputTenure.value) || 10;

    if (isMonths) {
      // Switched to Months: multiply years by 12
      const monthsVal = Math.min(SIP_BOUNDS.maxMonths, Math.max(1, Math.round(currentVal * 12)));
      elInputTenure.value = monthsVal;
      elInputTenure.max = SIP_BOUNDS.maxMonths;
      elRangeTenure.max = 120; // Default range max 10 years (120 months) for smooth mobile slider
      elRangeTenure.value = monthsVal;
      elTenureAffix.textContent = 'Mo';
      if (elTenureTicks) {
        elTenureTicks.innerHTML = `<span>1 Mo</span><span>60 Mo (5 Yr)</span><span>120 Mo (10 Yr)</span>`;
      }
      elUnitMonths?.classList.add('active');
      elUnitYears?.classList.remove('active');
    } else {
      // Switched to Years: divide months by 12
      const yearsVal = Math.min(SIP_BOUNDS.maxYears, Math.max(1, Math.round(currentVal / 12)));
      elInputTenure.value = yearsVal;
      elInputTenure.max = SIP_BOUNDS.maxYears;
      elRangeTenure.max = SIP_BOUNDS.maxYears;
      elRangeTenure.value = yearsVal;
      elTenureAffix.textContent = 'Yr';
      if (elTenureTicks) {
        elTenureTicks.innerHTML = `<span>1 Yr</span><span>10 Yr</span><span>30 Yr</span>`;
      }
      elUnitYears?.classList.add('active');
      elUnitMonths?.classList.remove('active');
    }

    scheduleUpdate();
  }

  elUnitYears?.addEventListener('click', () => switchTenureUnit('years'));
  elUnitMonths?.addEventListener('click', () => switchTenureUnit('months'));

  // Delegated interactive tooltip for SVG graph
  function renderTooltipContent(tooltip, pt) {
    const year = pt.dataset.year;
    const val = Number(pt.dataset.val);
    const invested = Number(pt.dataset.invested);
    const profit = Number(pt.dataset.profit);

    tooltip.innerHTML = `
      <div class="rp-tt-title">Year ${year} Milestone</div>
      <div class="rp-tt-row"><span class="rp-tt-label">Total Value:</span> <span class="rp-tt-val accent">${formatNPR(val)}</span></div>
      <div class="rp-tt-row"><span class="rp-tt-label">Invested:</span> <span class="rp-tt-val">${formatNPR(invested)}</span></div>
      <div class="rp-tt-row"><span class="rp-tt-label">Profit:</span> <span class="rp-tt-val profit">+${formatNPR(profit)}</span></div>
    `;

    positionChartTooltip(tooltip, pt, growthContainer);
  }

  function handleChartTooltip(e) {
    const pt = e.target.closest('.rp-chart-point');
    const tooltip = document.getElementById('rp-chart-tooltip');
    if (!tooltip) return;

    if (!pt) {
      tooltip.style.display = 'none';
      return;
    }

    renderTooltipContent(tooltip, pt);
  }

  function handleChartTouch(e) {
    const tooltip = document.getElementById('rp-chart-tooltip');
    if (!tooltip || !growthContainer) return;

    const points = Array.from(growthContainer.querySelectorAll('.rp-chart-point'));
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
      renderTooltipContent(tooltip, nearestPt);
    }
  }

  growthContainer?.addEventListener('pointerover', handleChartTooltip);
  growthContainer?.addEventListener('focusin', handleChartTooltip);
  growthContainer?.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      handleChartTouch(e);
    } else {
      handleChartTooltip(e);
    }
  });
  growthContainer?.addEventListener('touchstart', handleChartTouch, { passive: true });
  growthContainer?.addEventListener('touchmove', handleChartTouch, { passive: true });
  growthContainer?.addEventListener('pointerleave', () => {
    const tooltip = document.getElementById('rp-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
  growthContainer?.addEventListener('focusout', () => {
    const tooltip = document.getElementById('rp-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
}

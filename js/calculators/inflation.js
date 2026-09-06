// ==============================================
// risePaisa — Nepal Inflation & Purchasing Power Calculator
// Compound Price Escalation, Purchasing Power Decay & Real-Life Presets
// ==============================================
import {
  formatNPR,
  formatCompactNPR,
  calculateInflation,
  generateInflationCurves,
  validateInflationInputs,
  INFLATION_DEFAULTS,
  INFLATION_PRESETS,
} from './engine.js';
import { renderInflationBarChart, renderPurchasingPowerChart, positionChartTooltip } from './charts.js';

/**
 * State for Inflation Calculator
 */
const state = {
  mode: 'cost', // 'cost' (Future Cost Calculator) | 'power' (Purchasing Power Calculator)
  presentValue: INFLATION_DEFAULTS.presentValue,
  annualInflationRate: INFLATION_DEFAULTS.annualInflationRate,
  years: INFLATION_DEFAULTS.years,
  months: 0,
  activePresetId: null,
};

/**
 * Render Inflation Calculator HTML markup
 * @returns {string} HTML markup
 */
export function renderInflationCalculator() {
  const isCostMode = state.mode === 'cost';

  const res = calculateInflation({
    presentValue: state.presentValue,
    annualInflationRate: state.annualInflationRate,
    years: state.years,
    months: state.months,
  });

  const curvePoints = generateInflationCurves({
    presentValue: state.presentValue,
    annualInflationRate: state.annualInflationRate,
    timeInYears: res.timeYears,
    pointsCount: 10,
  });

  return `
    <div class="rp-calc-wrapper" id="inflation-calculator">

      <!-- Mode Switcher Tabs -->
      <div class="rp-cagr-mode-nav">
        <div class="rp-cagr-mode-switch" role="tablist" aria-label="Inflation Calculation Mode">
          <button
            type="button"
            class="rp-cagr-mode-btn ${isCostMode ? 'active' : ''}"
            id="inf-mode-btn-cost"
            role="tab"
            aria-selected="${isCostMode}"
            data-mode="cost"
          >
            📈 Mode 1: Future Cost Calculator <span class="rp-mode-sub">(Price Escalation)</span>
          </button>
          <button
            type="button"
            class="rp-cagr-mode-btn ${!isCostMode ? 'active' : ''}"
            id="inf-mode-btn-power"
            role="tab"
            aria-selected="${!isCostMode}"
            data-mode="power"
          >
            📉 Mode 2: Purchasing Power Calculator <span class="rp-mode-sub">(Money Value Decay)</span>
          </button>
        </div>
      </div>

      <!-- Real-Life Selectable Examples Bar -->
      <div class="rp-inflation-presets-wrap">
        <span class="rp-preset-title">💡 Real-Life Nepal Examples (Click to Auto-Fill):</span>
        <div class="rp-preset-pills">
          ${INFLATION_PRESETS.map(p => `
            <button
              type="button"
              class="rp-preset-btn ${state.activePresetId === p.id ? 'active' : ''}"
              data-preset-id="${p.id}"
              title="${p.note}"
            >
              <span>${p.icon}</span> ${p.label}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Main Layout Grid -->
      <div class="rp-calc-layout">

        <!-- Controls Column -->
        <div class="rp-calc-controls-card">
          <div class="rp-calc-card-header">
            <div>
              <h3 style="margin:0">${isCostMode ? 'Future Cost Parameters' : 'Purchasing Power Parameters'}</h3>
              <span style="font-size:var(--text-xs);color:var(--color-text-secondary)">
                ${isCostMode ? 'Project future price escalation' : 'Measure the real erosion of uninvested savings'}
              </span>
            </div>
            <span class="rp-badge rp-badge-accent">Inflation Model</span>
          </div>

          <!-- Input 1: Current Amount / Savings -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="inf-input-pv" class="rp-field-label">
                ${isCostMode ? 'Current Item / Goal Cost (Today)' : 'Current Savings Amount (Today)'}
              </label>
              <div class="rp-input-affix-wrap">
                <span class="rp-affix">NPR</span>
                <input
                  type="number"
                  id="inf-input-pv"
                  class="rp-number-input"
                  value="${state.presentValue}"
                  min="1000"
                  max="100000000"
                  step="10000"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Current Amount in NPR"
                >
              </div>
            </div>
            <input
              type="range"
              id="inf-range-pv"
              class="rp-range-slider"
              value="${state.presentValue}"
              min="10000"
              max="5000000"
              step="10000"
              aria-label="Current Amount Slider"
            >
            <div class="rp-range-ticks">
              <span>NPR 10,000</span>
              <span>NPR 1 Lakh (Default)</span>
              <span>NPR 50 Lakhs</span>
            </div>
            <div class="rp-field-error" id="err-inf-pv"></div>
          </div>

          <!-- Input 2: Expected Annual Inflation Rate (%) -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="inf-input-rate" class="rp-field-label">Expected Annual Inflation Rate</label>
              <div class="rp-input-affix-wrap">
                <input
                  type="number"
                  id="inf-input-rate"
                  class="rp-number-input text-right"
                  value="${state.annualInflationRate}"
                  min="0"
                  max="30"
                  step="0.25"
                  inputmode="decimal"
                  autocomplete="off"
                  aria-label="Expected Annual Inflation Rate"
                >
                <span class="rp-affix">%</span>
              </div>
            </div>
            <input
              type="range"
              id="inf-range-rate"
              class="rp-range-slider"
              value="${state.annualInflationRate}"
              min="1"
              max="15"
              step="0.25"
              aria-label="Inflation Rate Slider"
            >
            <div class="rp-range-ticks">
              <span>3% (Low)</span>
              <span>6% (Default)</span>
              <span>12% (High)</span>
            </div>
            <div class="rp-field-error" id="err-inf-rate"></div>
          </div>

          <!-- Input 3: Time Period (Years & Months) -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label class="rp-field-label">Time Period</label>
              <span class="rp-field-hint" id="inf-duration-hint">${res.durationLabel}</span>
            </div>

            <div class="rp-cagr-duration-row" style="grid-template-columns: 1fr 1fr;">
              <div class="rp-cagr-dur-col">
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="inf-input-years"
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
                    id="inf-input-months"
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
            </div>

            <div class="rp-cagr-dur-presets">
              <span style="font-size:11px;color:var(--color-text-muted)">Quick Presets:</span>
              <button type="button" class="rp-cagr-quick-btn ${state.years === 5 && state.months === 0 ? 'active' : ''}" data-years="5">5 Yrs</button>
              <button type="button" class="rp-cagr-quick-btn ${state.years === 10 && state.months === 0 ? 'active' : ''}" data-years="10">10 Yrs</button>
              <button type="button" class="rp-cagr-quick-btn ${state.years === 15 && state.months === 0 ? 'active' : ''}" data-years="15">15 Yrs</button>
              <button type="button" class="rp-cagr-quick-btn ${state.years === 20 && state.months === 0 ? 'active' : ''}" data-years="20">20 Yrs</button>
            </div>
            <div class="rp-field-error" id="err-inf-duration"></div>
          </div>

        </div>

        <!-- Results Column -->
        <div class="rp-calc-results-card">
          <div class="rp-results-grid">

            <!-- Primary Metric Highlight Card -->
            <div class="rp-stat-card maturity span-2">
              <div class="rp-maturity-header">
                <span class="rp-stat-label" id="inf-primary-label">
                  ${isCostMode ? 'Estimated Future Purchasing Cost' : 'Real Future Purchasing Power'}
                </span>
                <span class="rp-badge rp-badge-pulse" id="inf-primary-badge" style="background:${isCostMode ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)'};color:${isCostMode ? '#EF4444' : '#F59E0B'}">
                  ${isCostMode ? 'Price Inflation' : 'Real Value Retention'}
                </span>
              </div>
              <div class="rp-stat-value maturity-large accent" id="inf-res-primary">
                ${isCostMode ? formatNPR(res.futureCost) : formatNPR(res.purchasingPower)}
              </div>
              <div class="rp-stat-caption" id="inf-res-caption">
                ${isCostMode
                  ? `What costs ${formatNPR(state.presentValue)} today will cost in ${res.durationLabel} at ${res.annualInflationRate}% inflation`
                  : `What ${formatNPR(state.presentValue)} today will buy in ${res.durationLabel} at ${res.annualInflationRate}% inflation`}
              </div>
            </div>

            <!-- Stat 2: Increase or Loss Amount -->
            <div class="rp-stat-card">
              <span class="rp-stat-label" id="inf-sec-label">
                ${isCostMode ? 'Increase Due to Inflation' : 'Loss of Purchasing Power'}
              </span>
              <div class="rp-stat-value" style="color:#EF4444" id="inf-res-sec">
                ${isCostMode ? `+${formatNPR(res.inflationIncrease)}` : `-${formatNPR(res.purchasingPowerLoss)}`}
              </div>
              <span class="rp-stat-sub" id="inf-sec-sub">
                ${isCostMode ? 'Added cost over current price' : 'Eroded monetary value'}
              </span>
            </div>

            <!-- Stat 3: Percentage Impact -->
            <div class="rp-stat-card">
              <span class="rp-stat-label" id="inf-pct-label">
                ${isCostMode ? 'Cumulative Price Surge' : 'Purchasing Power Loss'}
              </span>
              <div class="rp-stat-value" style="color:#F59E0B" id="inf-res-pct">
                ${isCostMode ? `+${res.percentageIncrease}%` : `-${res.purchasingPowerLossPct}%`}
              </div>
              <span class="rp-stat-sub">
                ${isCostMode ? 'Total price escalation' : 'Net decline in real value'}
              </span>
            </div>

            <!-- Stat 4: Remaining Purchasing Power (Mode 1) / Future Cost (Mode 2) -->
            <div class="rp-stat-card">
              <span class="rp-stat-label">
                ${isCostMode ? 'Real Purchasing Power' : 'Future Cost to Buy Same Basket'}
              </span>
              <div class="rp-stat-value" id="inf-res-alt" style="color:${isCostMode ? '#38BDF8' : '#EF4444'}">
                ${isCostMode ? formatNPR(res.purchasingPower) : formatNPR(res.futureCost)}
              </div>
              <span class="rp-stat-sub">
                ${isCostMode ? `(${res.purchasingPowerRatio}% of original value)` : `(+${res.percentageIncrease}% increase)`}
              </span>
            </div>

            <!-- Stat 5: Inflation Rate & Duration -->
            <div class="rp-stat-card">
              <span class="rp-stat-label">Compounding Profile</span>
              <div class="rp-stat-value accent" id="inf-res-profile">
                ${res.annualInflationRate}% / yr
              </div>
              <span class="rp-stat-sub">${res.durationLabel} compounding horizon</span>
            </div>

          </div>

          <!-- Chart 1: Current vs Future Cost Bar Chart -->
          <div id="inflation-bar-chart-container">
            ${renderInflationBarChart({
              presentValue: state.presentValue,
              inflationIncrease: res.inflationIncrease,
              futureCost: res.futureCost,
            })}
          </div>

        </div>

      </div>

      <!-- Chart 2: Purchasing Power Erosion Over Time (Line Chart) -->
      <div class="rp-calc-section" id="purchasing-power-chart-container">
        ${renderPurchasingPowerChart({
          curvePoints,
          presentValue: state.presentValue,
          futurePurchasingPower: res.purchasingPower,
          totalYears: res.timeYears,
        })}
      </div>

      <!-- Nepal Context Information Box -->
      <div class="rp-calc-section rp-nepal-context-box">
        <div class="rp-context-header">
          <span style="font-size:22px">🇳🇵</span>
          <h4 style="margin:0;color:var(--color-heading);font-size:var(--text-base)">
            Nepal Macroeconomic & Inflation Planning Context
          </h4>
        </div>
        <p class="rp-context-desc">
          This calculator uses an inflation rate entered by the user. Actual inflation in Nepal changes over time based on economic conditions. Use this calculator for planning and educational purposes rather than as a prediction.
        </p>
        <div class="rp-nepal-context-grid">
          <div class="rp-context-point">
            <strong>Target Inflation Bands</strong>
            <p>Nepal Rastra Bank (NRB) monetary policy typically targets keeping consumer price inflation within a 5.0%–6.5% corridor, though supply shocks and fuel price volatility can cause temporary spikes.</p>
          </div>
          <div class="rp-context-point">
            <strong>Food & Import Linkages</strong>
            <p>Because Nepal relies on imports for petroleum, vehicles, and industrial raw materials, and maintains a currency peg with the Indian Rupee (INR 1 = NPR 1.60), domestic inflation is closely tied to Indian inflation dynamics.</p>
          </div>
          <div class="rp-context-point">
            <strong>Beating Inflation</strong>
            <p>Cash kept in zero-interest bank accounts loses real purchasing power every single year. Long-term wealth creation requires investing in assets whose compounding returns outpace inflation (such as NEPSE equities, mutual funds, or productive real estate).</p>
          </div>
        </div>
      </div>

      <!-- Educational Section (< 200 words) -->
      <div class="rp-calc-section rp-edu-cards-section">
        <h3 style="font-size:var(--text-xl);color:var(--color-heading);margin-bottom:var(--space-2)">
          Understanding Inflation & Protecting Your Wealth
        </h3>
        <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-6)">
          Essential principles for preserving real purchasing power over time.
        </p>

        <div class="rp-edu-grid">
          <div class="rp-edu-card">
            <h4>What Inflation Is</h4>
            <p>
              Inflation is the persistent general rise in prices of goods and services over time. As prices increase, every single rupee buys fewer items than it did previously.
            </p>
          </div>

          <div class="rp-edu-card">
            <h4>Why Prices Rise Over Time</h4>
            <p>
              Prices rise when demand exceeds available supply (demand-pull), production and transport costs escalate (cost-push), or the broader money supply expands faster than economic output.
            </p>
          </div>

          <div class="rp-edu-card">
            <h4>The Silent Cost of Saving Cash</h4>
            <p>
              Holding uninvested cash or low-yielding deposits guarantees a silent loss in purchasing power. If inflation is 6% and your deposit yields 4%, you are losing 2% real wealth every year.
            </p>
          </div>

          <div class="rp-edu-card">
            <h4>Nominal vs Real Return</h4>
            <p>
              Nominal return is your stated rupee percentage gain. Real return is your gain minus inflation ($\text{Real} \approx \text{Nominal} - \text{Inflation}$). Always evaluate investments on real returns.
            </p>
          </div>
        </div>
      </div>

    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// INITIALIZATION & EVENT BINDINGS
// ─────────────────────────────────────────────────────────────
export function initInflationCalculator() {
  const container = document.getElementById('inflation-calculator');
  if (!container) return;

  // Mode Buttons
  const btnModeCost = document.getElementById('inf-mode-btn-cost');
  const btnModePower = document.getElementById('inf-mode-btn-power');

  // Input Elements
  const inputPV = document.getElementById('inf-input-pv');
  const rangePV = document.getElementById('inf-range-pv');
  const inputRate = document.getElementById('inf-input-rate');
  const rangeRate = document.getElementById('inf-range-rate');
  const inputYears = document.getElementById('inf-input-years');
  const inputMonths = document.getElementById('inf-input-months');
  const durationHint = document.getElementById('inf-duration-hint');

  // Error spans
  const errPV = document.getElementById('err-inf-pv');
  const errRate = document.getElementById('err-inf-rate');
  const errDuration = document.getElementById('err-inf-duration');

  // Results elements
  const resPrimary = document.getElementById('inf-res-primary');
  const primaryLabel = document.getElementById('inf-primary-label');
  const primaryBadge = document.getElementById('inf-primary-badge');
  const resCaption = document.getElementById('inf-res-caption');

  const secLabel = document.getElementById('inf-sec-label');
  const resSec = document.getElementById('inf-res-sec');
  const secSub = document.getElementById('inf-sec-sub');

  const pctLabel = document.getElementById('inf-pct-label');
  const resPct = document.getElementById('inf-res-pct');

  const resAlt = document.getElementById('inf-res-alt');
  const resProfile = document.getElementById('inf-res-profile');

  // Charts
  const barChartWrap = document.getElementById('inflation-bar-chart-container');
  const lineChartWrap = document.getElementById('purchasing-power-chart-container');

  function update() {
    const isCostMode = state.mode === 'cost';

    const validation = validateInflationInputs({
      presentValue: inputPV?.value,
      annualInflationRate: inputRate?.value,
      years: inputYears?.value,
      months: inputMonths?.value,
    }, state.mode);

    if (errPV) errPV.textContent = validation.errors.presentValue || '';
    if (errRate) errRate.textContent = validation.errors.annualInflationRate || '';
    if (errDuration) errDuration.textContent = validation.errors.duration || '';

    state.presentValue = validation.sanitized.presentValue;
    state.annualInflationRate = validation.sanitized.annualInflationRate;
    state.years = validation.sanitized.years;
    state.months = validation.sanitized.months;

    const res = calculateInflation({
      presentValue: state.presentValue,
      annualInflationRate: state.annualInflationRate,
      years: state.years,
      months: state.months,
    });

    if (durationHint) {
      durationHint.textContent = res.durationLabel;
    }

    // Update Primary Result
    if (resPrimary) {
      resPrimary.textContent = isCostMode ? formatNPR(res.futureCost) : formatNPR(res.purchasingPower);
    }
    if (primaryLabel) {
      primaryLabel.textContent = isCostMode ? 'Estimated Future Purchasing Cost' : 'Real Future Purchasing Power';
    }
    if (primaryBadge) {
      primaryBadge.textContent = isCostMode ? 'Price Inflation' : 'Real Value Retention';
      primaryBadge.style.color = isCostMode ? '#EF4444' : '#F59E0B';
      primaryBadge.style.background = isCostMode ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)';
    }
    if (resCaption) {
      resCaption.textContent = isCostMode
        ? `What costs ${formatNPR(state.presentValue)} today will cost in ${res.durationLabel} at ${res.annualInflationRate}% inflation`
        : `What ${formatNPR(state.presentValue)} today will buy in ${res.durationLabel} at ${res.annualInflationRate}% inflation`;
    }

    // Update Secondary Result
    if (secLabel) {
      secLabel.textContent = isCostMode ? 'Increase Due to Inflation' : 'Loss of Purchasing Power';
    }
    if (resSec) {
      resSec.textContent = isCostMode ? `+${formatNPR(res.inflationIncrease)}` : `-${formatNPR(res.purchasingPowerLoss)}`;
    }
    if (secSub) {
      secSub.textContent = isCostMode ? 'Added cost over current price' : 'Eroded monetary value';
    }

    // Update Percentage Result
    if (pctLabel) {
      pctLabel.textContent = isCostMode ? 'Cumulative Price Surge' : 'Purchasing Power Loss';
    }
    if (resPct) {
      resPct.textContent = isCostMode ? `+${res.percentageIncrease}%` : `-${res.purchasingPowerLossPct}%`;
    }

    // Alternate Stat
    if (resAlt) {
      resAlt.textContent = isCostMode ? formatNPR(res.purchasingPower) : formatNPR(res.futureCost);
      const sub = resAlt.nextElementSibling;
      if (sub) {
        sub.textContent = isCostMode
          ? `(${res.purchasingPowerRatio}% of original value)`
          : `(+${res.percentageIncrease}% increase)`;
      }
    }

    if (resProfile) {
      resProfile.textContent = `${res.annualInflationRate}% / yr`;
    }

    // Update Bar Chart
    if (barChartWrap) {
      barChartWrap.innerHTML = renderInflationBarChart({
        presentValue: state.presentValue,
        inflationIncrease: res.inflationIncrease,
        futureCost: res.futureCost,
      });
    }

    // Update Line Chart
    const curvePoints = generateInflationCurves({
      presentValue: state.presentValue,
      annualInflationRate: state.annualInflationRate,
      timeInYears: res.timeYears,
      pointsCount: 10,
    });

    if (lineChartWrap) {
      lineChartWrap.innerHTML = renderPurchasingPowerChart({
        curvePoints,
        presentValue: state.presentValue,
        futurePurchasingPower: res.purchasingPower,
        totalYears: res.timeYears,
      });
    }
  }

  let infRaf = null;
  function scheduleUpdate() {
    if (infRaf) return;
    infRaf = requestAnimationFrame(() => {
      infRaf = null;
      update();
    });
  }

  // Delegated interactive tooltip for purchasing power line curve
  function renderInfTooltipContent(tooltip, pt) {
    const time = pt.dataset.time;
    const power = Number(pt.dataset.power);
    const pct = pt.dataset.pct;
    const futureCost = Number(pt.dataset.futurecost);
    tooltip.innerHTML = `
      <div class="rp-tt-title">Year ${time}</div>
      <div class="rp-tt-row"><span class="rp-tt-label">Real Purchasing Power:</span> <span class="rp-tt-val" style="color:#F59E0B">${formatNPR(power)} (${pct}%)</span></div>
      <div class="rp-tt-row"><span class="rp-tt-label">Future Basket Cost:</span> <span class="rp-tt-val" style="color:#EF4444">${formatNPR(futureCost)}</span></div>
    `;

    positionChartTooltip(tooltip, pt, lineChartWrap, { desktopTop: '15px' });
  }

  function handleChartTooltip(e) {
    const pt = e.target.closest('.rp-inf-point');
    const tooltip = document.getElementById('rp-inf-chart-tooltip');
    if (!tooltip) return;

    if (!pt) {
      tooltip.style.display = 'none';
      return;
    }

    renderInfTooltipContent(tooltip, pt);
  }

  function handleChartTouch(e) {
    const tooltip = document.getElementById('rp-inf-chart-tooltip');
    if (!tooltip || !lineChartWrap) return;

    const points = Array.from(lineChartWrap.querySelectorAll('.rp-inf-point'));
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
      renderInfTooltipContent(tooltip, nearestPt);
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
    const tooltip = document.getElementById('rp-inf-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
  lineChartWrap?.addEventListener('focusout', () => {
    const tooltip = document.getElementById('rp-inf-chart-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });

  // Switch Mode
  function switchMode(newMode) {
    if (state.mode === newMode) return;
    state.mode = newMode;

    const isCostMode = newMode === 'cost';
    btnModeCost?.classList.toggle('active', isCostMode);
    btnModeCost?.setAttribute('aria-selected', isCostMode ? 'true' : 'false');
    btnModePower?.classList.toggle('active', !isCostMode);
    btnModePower?.setAttribute('aria-selected', !isCostMode ? 'true' : 'false');

    scheduleUpdate();
  }

  btnModeCost?.addEventListener('click', () => switchMode('cost'));
  btnModePower?.addEventListener('click', () => switchMode('power'));

  // Preset Selection
  container.querySelectorAll('.rp-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetId = btn.dataset.presetId;
      const preset = INFLATION_PRESETS.find(p => p.id === presetId);
      if (!preset) return;

      container.querySelectorAll('.rp-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activePresetId = presetId;

      if (inputPV) inputPV.value = preset.presentValue;
      if (rangePV) rangePV.value = Math.min(Number(rangePV.max), preset.presentValue);
      if (inputRate) inputRate.value = preset.annualInflationRate;
      if (rangeRate) rangeRate.value = preset.annualInflationRate;
      if (inputYears) inputYears.value = preset.years;
      if (inputMonths) inputMonths.value = preset.months;

      scheduleUpdate();
    });
  });

  // Synced Inputs
  inputPV?.addEventListener('input', () => {
    if (rangePV) rangePV.value = inputPV.value;
    state.activePresetId = null;
    container.querySelectorAll('.rp-preset-btn').forEach(b => b.classList.remove('active'));
    scheduleUpdate();
  });
  rangePV?.addEventListener('input', () => {
    if (inputPV) inputPV.value = rangePV.value;
    state.activePresetId = null;
    container.querySelectorAll('.rp-preset-btn').forEach(b => b.classList.remove('active'));
    scheduleUpdate();
  });

  inputRate?.addEventListener('input', () => {
    if (rangeRate) rangeRate.value = inputRate.value;
    state.activePresetId = null;
    container.querySelectorAll('.rp-preset-btn').forEach(b => b.classList.remove('active'));
    scheduleUpdate();
  });
  rangeRate?.addEventListener('input', () => {
    if (inputRate) inputRate.value = rangeRate.value;
    state.activePresetId = null;
    container.querySelectorAll('.rp-preset-btn').forEach(b => b.classList.remove('active'));
    scheduleUpdate();
  });

  inputYears?.addEventListener('input', () => {
    state.activePresetId = null;
    container.querySelectorAll('.rp-preset-btn').forEach(b => b.classList.remove('active'));
    scheduleUpdate();
  });
  inputMonths?.addEventListener('input', () => {
    state.activePresetId = null;
    container.querySelectorAll('.rp-preset-btn').forEach(b => b.classList.remove('active'));
    scheduleUpdate();
  });

  // Quick Duration Buttons
  container.querySelectorAll('.rp-cagr-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.rp-cagr-quick-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const y = Number(btn.dataset.years) || 10;
      if (inputYears) inputYears.value = y;
      if (inputMonths) inputMonths.value = 0;
      state.activePresetId = null;
      container.querySelectorAll('.rp-preset-btn').forEach(b => b.classList.remove('active'));
      scheduleUpdate();
    });
  });
}

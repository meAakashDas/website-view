// ==============================================
// risePaisa — Nepal Fixed Deposit (FD) & Recurring Deposit (RD) Calculator
// Compound interest, quarterly compounding default, adjustable TDS, and growth charts
// ==============================================
import {
  formatNPR,
  formatCompactNPR,
  calculateFD,
  calculateRD,
  FD_RD_CONFIG,
} from './engine.js';
import { renderFDGrowthChart, renderFDDonutChart } from './charts.js';

/**
 * State for FD & RD Calculator
 */
let state = {
  activeSubTab: 'fd', // 'fd' | 'rd'
  // FD state
  fdPrincipal: FD_RD_CONFIG.fdDefaults.principal,
  fdRate: FD_RD_CONFIG.fdDefaults.annualRate,
  fdPeriodYears: FD_RD_CONFIG.fdDefaults.tenureYears,
  fdPeriodUnit: 'years', // 'years' | 'months'
  fdFrequency: FD_RD_CONFIG.fdDefaults.frequency, // 'quarterly' default
  fdTDS: FD_RD_CONFIG.fdDefaults.tdsPercent, // 5% default
  // RD state
  rdMonthly: FD_RD_CONFIG.rdDefaults.monthlyDeposit,
  rdRate: FD_RD_CONFIG.rdDefaults.annualRate,
  rdPeriodYears: FD_RD_CONFIG.rdDefaults.tenureYears,
  rdPeriodUnit: 'years',
  rdFrequency: FD_RD_CONFIG.rdDefaults.frequency, // 'monthly' default
  rdTDS: FD_RD_CONFIG.rdDefaults.tdsPercent,
};

/**
 * Render FD & RD Calculator HTML markup
 * @returns {string} HTML markup
 */
export function renderFDRDCalculator() {
  const fdMonths = state.fdPeriodUnit === 'years' ? state.fdPeriodYears * 12 : state.fdPeriodYears;
  const fdRes = calculateFD({
    principal: state.fdPrincipal,
    annualRate: state.fdRate,
    tenureMonths: fdMonths,
    frequency: state.fdFrequency,
    tdsPercent: state.fdTDS,
  });

  const rdMonths = state.rdPeriodUnit === 'years' ? state.rdPeriodYears * 12 : state.rdPeriodYears;
  const rdRes = calculateRD({
    monthlyDeposit: state.rdMonthly,
    annualRate: state.rdRate,
    tenureMonths: rdMonths,
    frequency: state.rdFrequency,
    tdsPercent: state.rdTDS,
  });

  return `
    <div class="rp-calc-wrapper" id="fdrd-calculator">
      
      <!-- Internal Sub-Tabs (FD vs RD) -->
      <div class="rp-fdrd-subtabs" role="tablist" aria-label="Deposit Calculator Options">
        <button
          type="button"
          class="rp-fdrd-tab-btn ${state.activeSubTab === 'fd' ? 'active' : ''}"
          id="fdrd-tab-fd"
          data-subtab="fd"
          role="tab"
          aria-selected="${state.activeSubTab === 'fd'}"
          aria-controls="fdrd-pane-fd"
        >
          1. Fixed Deposit (FD)
        </button>

        <button
          type="button"
          class="rp-fdrd-tab-btn ${state.activeSubTab === 'rd' ? 'active' : ''}"
          id="fdrd-tab-rd"
          data-subtab="rd"
          role="tab"
          aria-selected="${state.activeSubTab === 'rd'}"
          aria-controls="fdrd-pane-rd"
        >
          2. Recurring Deposit (RD)
        </button>
      </div>

      <!-- ── SUB-PANE 1: FIXED DEPOSIT (FD) ───────────────────────── -->
      <div
        class="rp-fdrd-subpane ${state.activeSubTab === 'fd' ? 'active' : ''}"
        id="fdrd-pane-fd"
        role="tabpanel"
        style="${state.activeSubTab === 'fd' ? '' : 'display:none;'}"
      >
        <div class="rp-calc-layout">
          <!-- FD Inputs -->
          <div class="rp-calc-controls-card">
            <div class="rp-calc-card-header">
              <h3>Fixed Deposit Parameters</h3>
              <span class="rp-badge rp-badge-accent">Quarterly Default</span>
            </div>

            <!-- Deposit Amount -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="fd-principal-input" class="rp-field-label">Deposit Amount</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="fd-principal-input"
                    class="rp-number-input"
                    value="${state.fdPrincipal}"
                    min="1000"
                    max="100000000"
                    step="5000"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Deposit Amount in NPR"
                  >
                </div>
              </div>
              <input
                type="range"
                id="fd-principal-slider"
                class="rp-slider"
                value="${state.fdPrincipal}"
                min="10000"
                max="5000000"
                step="10000"
                aria-label="Deposit Amount Slider"
              >
              <div class="rp-slider-track-labels">
                <span>NPR 10K</span>
                <span>NPR 25L</span>
                <span>NPR 50L</span>
              </div>
            </div>

            <!-- Quick Presets -->
            <div class="rp-presets-row">
              <span class="rp-preset-title">Presets:</span>
              <button type="button" class="rp-tax-preset-btn" data-target="fd-prin" data-val="100000">1 Lakh</button>
              <button type="button" class="rp-tax-preset-btn" data-target="fd-prin" data-val="250000">2.5 Lakh</button>
              <button type="button" class="rp-tax-preset-btn" data-target="fd-prin" data-val="500000">5 Lakh</button>
              <button type="button" class="rp-tax-preset-btn" data-target="fd-prin" data-val="1000000">10 Lakh</button>
              <button type="button" class="rp-tax-preset-btn" data-target="fd-prin" data-val="2500000">25 Lakh</button>
            </div>

            <!-- Interest Rate -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="fd-rate-input" class="rp-field-label">Annual Interest Rate</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="fd-rate-input"
                    class="rp-number-input text-right"
                    value="${state.fdRate}"
                    min="1"
                    max="20"
                    step="0.1"
                    inputmode="decimal"
                    autocomplete="off"
                    aria-label="Annual Interest Rate percentage"
                  >
                  <span class="rp-affix">%</span>
                </div>
              </div>
              <input
                type="range"
                id="fd-rate-slider"
                class="rp-slider"
                value="${state.fdRate}"
                min="3"
                max="15"
                step="0.1"
                aria-label="Interest Rate Slider"
              >
              <div class="rp-slider-track-labels">
                <span>3%</span>
                <span>8% (Avg)</span>
                <span>15%</span>
              </div>
            </div>

            <!-- Deposit Period -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="fd-period-input" class="rp-field-label">Deposit Period</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="fd-period-input"
                    class="rp-number-input text-right"
                    value="${state.fdPeriodYears}"
                    min="1"
                    max="30"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Deposit Period in Years"
                  >
                  <span class="rp-affix">Years</span>
                </div>
              </div>
              <input
                type="range"
                id="fd-period-slider"
                class="rp-slider"
                value="${state.fdPeriodYears}"
                min="1"
                max="20"
                step="1"
                aria-label="Deposit Period Slider"
              >
              <div class="rp-slider-track-labels">
                <span>1 Yr</span>
                <span>3 Yrs</span>
                <span>5 Yrs</span>
                <span>10 Yrs</span>
                <span>20 Yrs</span>
              </div>
            </div>

            <!-- Compounding Frequency -->
            <div class="rp-field-group">
              <label class="rp-field-label">Compounding Frequency</label>
              <div class="rp-freq-switch" role="group" aria-label="FD Compounding Frequency">
                <button
                  type="button"
                  class="rp-freq-btn ${state.fdFrequency === 'monthly' ? 'active' : ''}"
                  data-target="fd-freq"
                  data-freq="monthly"
                >
                  Monthly
                </button>
                <button
                  type="button"
                  class="rp-freq-btn ${state.fdFrequency === 'quarterly' ? 'active' : ''}"
                  data-target="fd-freq"
                  data-freq="quarterly"
                >
                  Quarterly (Nepal)
                </button>
                <button
                  type="button"
                  class="rp-freq-btn ${state.fdFrequency === 'half-yearly' ? 'active' : ''}"
                  data-target="fd-freq"
                  data-freq="half-yearly"
                >
                  Half-Yearly
                </button>
                <button
                  type="button"
                  class="rp-freq-btn ${state.fdFrequency === 'yearly' ? 'active' : ''}"
                  data-target="fd-freq"
                  data-freq="yearly"
                >
                  Yearly
                </button>
              </div>
            </div>

            <!-- Interest Tax (TDS) % -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="fd-tds-input" class="rp-field-label">Interest Tax (TDS Deduction)</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="fd-tds-input"
                    class="rp-number-input text-right"
                    value="${state.fdTDS}"
                    min="0"
                    max="25"
                    step="0.5"
                    inputmode="decimal"
                    autocomplete="off"
                    aria-label="Interest Tax TDS percentage"
                  >
                  <span class="rp-affix">%</span>
                </div>
              </div>
              <span class="rp-field-hint">Standard resident individual TDS on bank interest in Nepal is 5%.</span>
            </div>
          </div>

          <!-- FD Results & Visualizations -->
          <div class="rp-calc-results-card">
            <div class="rp-results-grid">
              <div class="rp-stat-card maturity span-2">
                <div class="rp-maturity-header">
                  <span class="rp-stat-label">Net Maturity Amount</span>
                  <span class="rp-badge rp-badge-pulse">After 5% TDS</span>
                </div>
                <div class="rp-stat-value maturity-large accent" id="fd-res-net-maturity">
                  ${formatNPR(fdRes.netMaturity)}
                </div>
                <div class="rp-stat-caption">
                  Effective Annual Yield (APY): <strong id="fd-res-apy">${fdRes.apy}%</strong>
                </div>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Principal Deposited</span>
                <div class="rp-stat-value" id="fd-res-principal">${formatNPR(fdRes.principal)}</div>
                <span class="rp-stat-sub">Initial capital</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Gross Interest</span>
                <div class="rp-stat-value" id="fd-res-gross-interest">${formatNPR(fdRes.grossInterest)}</div>
                <span class="rp-stat-sub">Before tax deduction</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Interest Tax (TDS)</span>
                <div class="rp-stat-value" style="color:#F59E0B" id="fd-res-tds">${formatNPR(fdRes.tdsAmount)}</div>
                <span class="rp-stat-sub" id="fd-res-tds-label">${state.fdTDS}% statutory TDS</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Net Interest Earned</span>
                <div class="rp-stat-value" style="color:#10B981" id="fd-res-net-interest">${formatNPR(fdRes.netInterest)}</div>
                <span class="rp-stat-sub">In-hand interest</span>
              </div>
            </div>

            <!-- FD Donut Chart -->
            <div id="fd-donut-container">
              ${renderFDDonutChart({
                principal: fdRes.principal,
                netInterest: fdRes.netInterest,
                tds: fdRes.tdsAmount,
              })}
            </div>

            <!-- SIP Comparison Perspective Card -->
            <div class="rp-fd-sip-compare-card" id="fd-sip-compare-card">
              <div class="rp-compare-badge">Educational Perspective</div>
              <div class="rp-compare-title">If the same amount is invested as SIP instead of FD</div>
              <div class="rp-compare-stats">
                <div class="rp-compare-stat">
                  <span class="rp-stat-label">Total Deposited</span>
                  <div class="rp-compare-val">${formatNPR(fdRes.sipComparison.invested)}</div>
                </div>
                <div class="rp-compare-arrow">→</div>
                <div class="rp-compare-stat">
                  <span class="rp-stat-label">Est. Value (@ 12% return)</span>
                  <div class="rp-compare-val" style="color:#10B981" id="fd-sip-compare-val">
                    ${formatNPR(fdRes.sipComparison.estimatedValue)}
                  </div>
                </div>
              </div>
              <div class="rp-compare-note">
                💡 <em>FD provides predictable returns guaranteed by your bank, whereas SIP returns depend on market performance.</em>
              </div>
            </div>
          </div>
        </div>

        <!-- FD Growth Curve Graph -->
        <div class="rp-calc-section" id="fd-growth-chart-container" style="margin-top:var(--space-6)">
          ${renderFDGrowthChart({
            milestones: fdRes.milestones,
            principal: fdRes.principal,
            netMaturity: fdRes.netMaturity,
          })}
        </div>
      </div>

      <!-- ── SUB-PANE 2: RECURRING DEPOSIT (RD) ───────────────────── -->
      <div
        class="rp-fdrd-subpane ${state.activeSubTab === 'rd' ? 'active' : ''}"
        id="fdrd-pane-rd"
        role="tabpanel"
        style="${state.activeSubTab === 'rd' ? '' : 'display:none;'}"
      >
        <div class="rp-calc-layout">
          <!-- RD Controls -->
          <div class="rp-calc-controls-card">
            <div class="rp-calc-card-header">
              <h3>Recurring Deposit Parameters</h3>
              <span class="rp-badge rp-badge-accent">Monthly Savings</span>
            </div>

            <!-- Monthly Deposit -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="rd-monthly-input" class="rp-field-label">Monthly Deposit</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="rd-monthly-input"
                    class="rp-number-input"
                    value="${state.rdMonthly}"
                    min="500"
                    max="1000000"
                    step="500"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Monthly Deposit Amount in NPR"
                  >
                </div>
              </div>
              <input
                type="range"
                id="rd-monthly-slider"
                class="rp-slider"
                value="${state.rdMonthly}"
                min="1000"
                max="100000"
                step="1000"
                aria-label="Monthly Deposit Slider"
              >
              <div class="rp-slider-track-labels">
                <span>NPR 1,000</span>
                <span>NPR 50,000</span>
                <span>NPR 1,00,000</span>
              </div>
            </div>

            <!-- Quick Presets -->
            <div class="rp-presets-row">
              <span class="rp-preset-title">Presets:</span>
              <button type="button" class="rp-tax-preset-btn" data-target="rd-month" data-val="2500">2,500</button>
              <button type="button" class="rp-tax-preset-btn" data-target="rd-month" data-val="5000">5,000</button>
              <button type="button" class="rp-tax-preset-btn" data-target="rd-month" data-val="10000">10,000</button>
              <button type="button" class="rp-tax-preset-btn" data-target="rd-month" data-val="25000">25,000</button>
              <button type="button" class="rp-tax-preset-btn" data-target="rd-month" data-val="50000">50,000</button>
            </div>

            <!-- Annual Rate -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="rd-rate-input" class="rp-field-label">Annual Interest Rate</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="rd-rate-input"
                    class="rp-number-input text-right"
                    value="${state.rdRate}"
                    min="1"
                    max="20"
                    step="0.1"
                    inputmode="decimal"
                    autocomplete="off"
                    aria-label="RD Annual Interest Rate"
                  >
                  <span class="rp-affix">%</span>
                </div>
              </div>
              <input
                type="range"
                id="rd-rate-slider"
                class="rp-slider"
                value="${state.rdRate}"
                min="3"
                max="15"
                step="0.1"
                aria-label="RD Interest Rate Slider"
              >
              <div class="rp-slider-track-labels">
                <span>3%</span>
                <span>7.5%</span>
                <span>15%</span>
              </div>
            </div>

            <!-- Deposit Period -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="rd-period-input" class="rp-field-label">Deposit Period</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="rd-period-input"
                    class="rp-number-input text-right"
                    value="${state.rdPeriodYears}"
                    min="1"
                    max="30"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="RD Deposit Period in Years"
                  >
                  <span class="rp-affix">Years</span>
                </div>
              </div>
              <input
                type="range"
                id="rd-period-slider"
                class="rp-slider"
                value="${state.rdPeriodYears}"
                min="1"
                max="15"
                step="1"
                aria-label="RD Period Slider"
              >
              <div class="rp-slider-track-labels">
                <span>1 Yr</span>
                <span>3 Yrs</span>
                <span>5 Yrs</span>
                <span>10 Yrs</span>
                <span>15 Yrs</span>
              </div>
            </div>

            <!-- Compounding Frequency -->
            <div class="rp-field-group">
              <label class="rp-field-label">Compounding Frequency</label>
              <div class="rp-freq-switch" role="group" aria-label="RD Compounding Frequency">
                <button
                  type="button"
                  class="rp-freq-btn ${state.rdFrequency === 'monthly' ? 'active' : ''}"
                  data-target="rd-freq"
                  data-freq="monthly"
                >
                  Monthly
                </button>
                <button
                  type="button"
                  class="rp-freq-btn ${state.rdFrequency === 'quarterly' ? 'active' : ''}"
                  data-target="rd-freq"
                  data-freq="quarterly"
                >
                  Quarterly
                </button>
                <button
                  type="button"
                  class="rp-freq-btn ${state.rdFrequency === 'half-yearly' ? 'active' : ''}"
                  data-target="rd-freq"
                  data-freq="half-yearly"
                >
                  Half-Yearly
                </button>
                <button
                  type="button"
                  class="rp-freq-btn ${state.rdFrequency === 'yearly' ? 'active' : ''}"
                  data-target="rd-freq"
                  data-freq="yearly"
                >
                  Yearly
                </button>
              </div>
            </div>

            <!-- TDS Deduction -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="rd-tds-input" class="rp-field-label">Interest Tax (TDS Deduction)</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="rd-tds-input"
                    class="rp-number-input text-right"
                    value="${state.rdTDS}"
                    min="0"
                    max="25"
                    step="0.5"
                    inputmode="decimal"
                    autocomplete="off"
                    aria-label="RD Interest Tax TDS percentage"
                  >
                  <span class="rp-affix">%</span>
                </div>
              </div>
              <span class="rp-field-hint">TDS of 5% applies to gross interest earned in Nepal banks.</span>
            </div>
          </div>

          <!-- RD Results -->
          <div class="rp-calc-results-card">
            <div class="rp-results-grid">
              <div class="rp-stat-card maturity span-2">
                <div class="rp-maturity-header">
                  <span class="rp-stat-label">Net Maturity Value</span>
                  <span class="rp-badge rp-badge-pulse">+${rdRes.effectiveReturn}% Return</span>
                </div>
                <div class="rp-stat-value maturity-large accent" id="rd-res-net-maturity">
                  ${formatNPR(rdRes.netMaturity)}
                </div>
                <div class="rp-stat-caption">
                  Total maturity after receiving all monthly compound interest minus 5% TDS.
                </div>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Total Deposited</span>
                <div class="rp-stat-value" id="rd-res-total-deposited">${formatNPR(rdRes.totalDeposited)}</div>
                <span class="rp-stat-sub">${state.rdPeriodYears * 12} installments</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Gross Interest</span>
                <div class="rp-stat-value" id="rd-res-gross-interest">${formatNPR(rdRes.grossInterest)}</div>
                <span class="rp-stat-sub">Before TDS</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Interest Tax (TDS)</span>
                <div class="rp-stat-value" style="color:#F59E0B" id="rd-res-tds">${formatNPR(rdRes.tdsAmount)}</div>
                <span class="rp-stat-sub">${state.rdTDS}% deduction</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Net Interest Earned</span>
                <div class="rp-stat-value" style="color:#10B981" id="rd-res-net-interest">${formatNPR(rdRes.netInterest)}</div>
                <span class="rp-stat-sub">Take-home growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Educational Section -->
      <div class="rp-calc-section rp-edu-cards-section" style="margin-top:var(--space-8)">
        <h3 style="font-size:var(--text-lg);color:var(--color-heading);margin-bottom:var(--space-4)">
          Understanding Fixed & Recurring Deposits in Nepal
        </h3>
        <div class="rp-edu-grid">
          <div class="rp-edu-card">
            <h4>What is Fixed Deposit (FD)?</h4>
            <p>
              A lump-sum deposit locked with a Class A, B, or C financial institution for a fixed tenure (from 3 months to 10+ years) at a guaranteed contractual interest rate.
            </p>
          </div>
          <div class="rp-edu-card">
            <h4>What is Recurring Deposit (RD)?</h4>
            <p>
              A structured monthly savings scheme where you deposit a fixed sum every month into the bank, accumulating interest similar to an FD.
            </p>
          </div>
          <div class="rp-edu-card">
            <h4>FD vs RD: When to Use Which?</h4>
            <p>
              Use <strong>FD</strong> when you have an existing lump sum (e.g. severance, land sale, bonus) seeking safe yields. Use <strong>RD</strong> when building wealth out of monthly salary.
            </p>
          </div>
        </div>
      </div>

      <!-- Nepal Banking Context Notice -->
      <div class="rp-educational-note">
        <div class="rp-edu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div class="rp-edu-text">
          <strong>Nepal Banking Notice:</strong> Interest rates vary across Nepali commercial banks, development banks, and finance companies based on monthly NRB monetary circulars. Enter the exact annual interest rate offered by your bank. This calculator estimates maturity values using compound interest and an adjustable statutory TDS deduction (5% for resident individuals).
        </div>
      </div>

    </div>
  `;
}

/**
 * Initialize FD & RD Calculator interactivity
 */
export function initFDRDCalculator() {
  const container = document.getElementById('fdrd-calculator');
  if (!container) return;

  // Sub-tabs switching
  const tabBtns = container.querySelectorAll('.rp-fdrd-tab-btn');
  const paneFD = document.getElementById('fdrd-pane-fd');
  const paneRD = document.getElementById('fdrd-pane-rd');

  function switchSubTab(target) {
    state.activeSubTab = target;
    tabBtns.forEach(btn => {
      const isTarget = btn.dataset.subtab === target;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', String(isTarget));
    });

    if (paneFD) {
      paneFD.style.display = target === 'fd' ? 'block' : 'none';
      paneFD.classList.toggle('active', target === 'fd');
    }
    if (paneRD) {
      paneRD.style.display = target === 'rd' ? 'block' : 'none';
      paneRD.classList.toggle('active', target === 'rd');
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchSubTab(btn.dataset.subtab));
  });

  // ── 1. FD Logic ───────────────────────────────
  const fdPrinInput = document.getElementById('fd-principal-input');
  const fdPrinSlider = document.getElementById('fd-principal-slider');
  const fdRateInput = document.getElementById('fd-rate-input');
  const fdRateSlider = document.getElementById('fd-rate-slider');
  const fdPeriodInput = document.getElementById('fd-period-input');
  const fdPeriodSlider = document.getElementById('fd-period-slider');
  const fdTdsInput = document.getElementById('fd-tds-input');

  const fdResNetMaturity = document.getElementById('fd-res-net-maturity');
  const fdResApy = document.getElementById('fd-res-apy');
  const fdResPrincipal = document.getElementById('fd-res-principal');
  const fdResGrossInterest = document.getElementById('fd-res-gross-interest');
  const fdResTds = document.getElementById('fd-res-tds');
  const fdResTdsLabel = document.getElementById('fd-res-tds-label');
  const fdResNetInterest = document.getElementById('fd-res-net-interest');
  const fdDonutContainer = document.getElementById('fd-donut-container');
  const fdGrowthChartContainer = document.getElementById('fd-growth-chart-container');
  const fdSipCompareVal = document.getElementById('fd-sip-compare-val');

  function updateFD() {
    const fdMonths = state.fdPeriodYears * 12;
    const res = calculateFD({
      principal: state.fdPrincipal,
      annualRate: state.fdRate,
      tenureMonths: fdMonths,
      frequency: state.fdFrequency,
      tdsPercent: state.fdTDS,
    });

    if (fdResNetMaturity) fdResNetMaturity.textContent = formatNPR(res.netMaturity);
    if (fdResApy) fdResApy.textContent = `${res.apy}%`;
    if (fdResPrincipal) fdResPrincipal.textContent = formatNPR(res.principal);
    if (fdResGrossInterest) fdResGrossInterest.textContent = formatNPR(res.grossInterest);
    if (fdResTds) fdResTds.textContent = formatNPR(res.tdsAmount);
    if (fdResTdsLabel) fdResTdsLabel.textContent = `${state.fdTDS}% statutory TDS`;
    if (fdResNetInterest) fdResNetInterest.textContent = formatNPR(res.netInterest);
    if (fdSipCompareVal) fdSipCompareVal.textContent = formatNPR(res.sipComparison.estimatedValue);

    if (fdDonutContainer) {
      fdDonutContainer.innerHTML = renderFDDonutChart({
        principal: res.principal,
        netInterest: res.netInterest,
        tds: res.tdsAmount,
      });
    }

    if (fdGrowthChartContainer) {
      fdGrowthChartContainer.innerHTML = renderFDGrowthChart({
        milestones: res.milestones,
        principal: res.principal,
        netMaturity: res.netMaturity,
      });
    }
  }

  let fdRaf = null;
  function scheduleFDUpdate() {
    if (fdRaf) return;
    fdRaf = requestAnimationFrame(() => {
      fdRaf = null;
      updateFD();
    });
  }

  function syncFDPrincipal(val) {
    state.fdPrincipal = Math.max(1000, Number(val) || 1000);
    if (fdPrinInput) fdPrinInput.value = state.fdPrincipal;
    if (fdPrinSlider) fdPrinSlider.value = Math.min(5000000, state.fdPrincipal);
    scheduleFDUpdate();
  }

  function syncFDRate(val) {
    state.fdRate = Math.max(0.1, Math.min(25, Number(val) || 0.1));
    if (fdRateInput) fdRateInput.value = state.fdRate;
    if (fdRateSlider) fdRateSlider.value = state.fdRate;
    scheduleFDUpdate();
  }

  function syncFDPeriod(val) {
    state.fdPeriodYears = Math.max(1, Math.min(30, Number(val) || 1));
    if (fdPeriodInput) fdPeriodInput.value = state.fdPeriodYears;
    if (fdPeriodSlider) fdPeriodSlider.value = Math.min(20, state.fdPeriodYears);
    scheduleFDUpdate();
  }

  fdPrinInput?.addEventListener('input', e => syncFDPrincipal(e.target.value));
  fdPrinSlider?.addEventListener('input', e => syncFDPrincipal(e.target.value));
  fdRateInput?.addEventListener('input', e => syncFDRate(e.target.value));
  fdRateSlider?.addEventListener('input', e => syncFDRate(e.target.value));
  fdPeriodInput?.addEventListener('input', e => syncFDPeriod(e.target.value));
  fdPeriodSlider?.addEventListener('input', e => syncFDPeriod(e.target.value));

  fdTdsInput?.addEventListener('input', e => {
    state.fdTDS = Math.max(0, Math.min(30, Number(e.target.value) || 0));
    scheduleFDUpdate();
  });

  // Presets
  container.querySelectorAll('[data-target="fd-prin"]').forEach(btn => {
    btn.addEventListener('click', () => syncFDPrincipal(btn.dataset.val));
  });

  // FD Frequency Switch
  container.querySelectorAll('[data-target="fd-freq"]').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('[data-target="fd-freq"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.fdFrequency = btn.dataset.freq;
      scheduleFDUpdate();
    });
  });

  // ── 2. RD Logic ───────────────────────────────
  const rdMonthlyInput = document.getElementById('rd-monthly-input');
  const rdMonthlySlider = document.getElementById('rd-monthly-slider');
  const rdRateInput = document.getElementById('rd-rate-input');
  const rdRateSlider = document.getElementById('rd-rate-slider');
  const rdPeriodInput = document.getElementById('rd-period-input');
  const rdPeriodSlider = document.getElementById('rd-period-slider');
  const rdTdsInput = document.getElementById('rd-tds-input');

  const rdResNetMaturity = document.getElementById('rd-res-net-maturity');
  const rdResTotalDeposited = document.getElementById('rd-res-total-deposited');
  const rdResGrossInterest = document.getElementById('rd-res-gross-interest');
  const rdResTds = document.getElementById('rd-res-tds');
  const rdResNetInterest = document.getElementById('rd-res-net-interest');

  let rdRaf = null;
  function scheduleRDUpdate() {
    if (rdRaf) return;
    rdRaf = requestAnimationFrame(() => {
      rdRaf = null;
      updateRD();
    });
  }

  function updateRD() {
    const rdMonths = state.rdPeriodYears * 12;
    const res = calculateRD({
      monthlyDeposit: state.rdMonthly,
      annualRate: state.rdRate,
      tenureMonths: rdMonths,
      frequency: state.rdFrequency,
      tdsPercent: state.rdTDS,
    });

    if (rdResNetMaturity) rdResNetMaturity.textContent = formatNPR(res.netMaturity);
    if (rdResTotalDeposited) rdResTotalDeposited.textContent = formatNPR(res.totalDeposited);
    if (rdResGrossInterest) rdResGrossInterest.textContent = formatNPR(res.grossInterest);
    if (rdResTds) rdResTds.textContent = formatNPR(res.tdsAmount);
    if (rdResNetInterest) rdResNetInterest.textContent = formatNPR(res.netInterest);
  }

  function syncRDMonthly(val) {
    state.rdMonthly = Math.max(100, Number(val) || 100);
    if (rdMonthlyInput) rdMonthlyInput.value = state.rdMonthly;
    if (rdMonthlySlider) rdMonthlySlider.value = Math.min(100000, state.rdMonthly);
    scheduleRDUpdate();
  }

  function syncRDRate(val) {
    state.rdRate = Math.max(0.1, Math.min(25, Number(val) || 0.1));
    if (rdRateInput) rdRateInput.value = state.rdRate;
    if (rdRateSlider) rdRateSlider.value = state.rdRate;
    scheduleRDUpdate();
  }

  function syncRDPeriod(val) {
    state.rdPeriodYears = Math.max(1, Math.min(30, Number(val) || 1));
    if (rdPeriodInput) rdPeriodInput.value = state.rdPeriodYears;
    if (rdPeriodSlider) rdPeriodSlider.value = Math.min(15, state.rdPeriodYears);
    scheduleRDUpdate();
  }

  rdMonthlyInput?.addEventListener('input', e => syncRDMonthly(e.target.value));
  rdMonthlySlider?.addEventListener('input', e => syncRDMonthly(e.target.value));
  rdRateInput?.addEventListener('input', e => syncRDRate(e.target.value));
  rdRateSlider?.addEventListener('input', e => syncRDRate(e.target.value));
  rdPeriodInput?.addEventListener('input', e => syncRDPeriod(e.target.value));
  rdPeriodSlider?.addEventListener('input', e => syncRDPeriod(e.target.value));

  rdTdsInput?.addEventListener('input', e => {
    state.rdTDS = Math.max(0, Math.min(30, Number(e.target.value) || 0));
    scheduleRDUpdate();
  });

  // RD Presets
  container.querySelectorAll('[data-target="rd-month"]').forEach(btn => {
    btn.addEventListener('click', () => syncRDMonthly(btn.dataset.val));
  });

  // RD Frequency Switch
  container.querySelectorAll('[data-target="rd-freq"]').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('[data-target="rd-freq"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.rdFrequency = btn.dataset.freq;
      scheduleRDUpdate();
    });
  });
}

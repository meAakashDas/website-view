// ==============================================
// risePaisa — Nepal Personal Income Tax Calculator (FY 2082/83)
// Progressive slab-by-slab taxation, deductions, and take-home analytics
// ==============================================
import {
  formatNPR,
  formatCompactNPR,
  validateTaxInputs,
  calculateNepalIncomeTax,
  TAX_BOUNDS,
  NEPAL_TAX_CONFIG,
  DEFAULT_FISCAL_YEAR,
} from './engine.js';
import { renderTaxDonutChart } from './charts.js';

/**
 * State for Tax Calculator
 */
let state = {
  grossIncome: TAX_BOUNDS.defaultIncome,
  maritalStatus: TAX_BOUNDS.defaultStatus, // 'single' | 'married'
  fiscalYear: DEFAULT_FISCAL_YEAR,
  deductionsExpanded: false,
  deductions: {
    epf: 0,
    cit: 0,
    ssf: 0,
    lifeInsurance: 0,
    healthInsurance: 0,
    donations: 0,
  },
};

/**
 * Render Tax Calculator HTML markup
 * @returns {string} HTML markup
 */
export function renderTaxCalculator() {
  const isMarried = state.maritalStatus === 'married';
  const res = calculateNepalIncomeTax({
    grossIncome: state.grossIncome,
    maritalStatus: state.maritalStatus,
    deductions: state.deductions,
    fiscalYear: state.fiscalYear,
  });

  return `
    <div class="rp-calc-wrapper" id="tax-calculator">
      
      <!-- Top Type Switch: Individual vs Married Couple -->
      <div class="rp-tax-type-bar">
        <span class="rp-preset-title">Tax Assessment Category:</span>
        <div class="rp-marital-switch" role="group" aria-label="Taxpayer Category">
          <button
            type="button"
            class="rp-marital-btn ${!isMarried ? 'active' : ''}"
            id="tax-btn-single"
            data-status="single"
          >
            Resident Individual (Single)
          </button>
          <button
            type="button"
            class="rp-marital-btn ${isMarried ? 'active' : ''}"
            id="tax-btn-married"
            data-status="married"
          >
            Resident Married Couple
          </button>
        </div>
        <span class="rp-badge rp-badge-accent" style="margin-left:auto">
          🇳🇵 ${res.fiscalYear} Tax Slabs
        </span>
      </div>

      <!-- Main Calculator Grid -->
      <div class="rp-calc-layout">
        
        <!-- Controls Column (Inputs & Deductions) -->
        <div class="rp-calc-controls-card">
          <div class="rp-calc-card-header">
            <h3>Income Details</h3>
            <span class="rp-badge rp-badge-pulse">Progressive</span>
          </div>

          <!-- Input 1: Gross Annual Income -->
          <div class="rp-field-group">
            <div class="rp-field-top">
              <label for="tax-input-income" class="rp-field-label">Annual Taxable Income</label>
              <div class="rp-input-affix-wrap">
                <span class="rp-affix">NPR</span>
                <input
                  type="number"
                  id="tax-input-income"
                  class="rp-number-input"
                  value="${state.grossIncome}"
                  min="${TAX_BOUNDS.minIncome}"
                  max="${TAX_BOUNDS.maxIncome}"
                  step="25000"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  autocomplete="off"
                  aria-label="Annual Gross Taxable Income in NPR"
                >
              </div>
            </div>
            <input
              type="range"
              id="tax-range-income"
              class="rp-range-slider"
              value="${Math.min(state.grossIncome, 5000000)}"
              min="100000"
              max="5000000"
              step="25000"
              aria-label="Annual Income Slider"
            >
            <div class="rp-range-ticks">
              <span>NPR 1 Lakh</span>
              <span>NPR 25 Lakhs</span>
              <span>NPR 50 Lakhs</span>
            </div>
            <div class="rp-field-error" id="err-tax-income"></div>
          </div>

          <!-- Quick Income Presets -->
          <div class="rp-presets-row" style="margin-bottom:var(--space-5)">
            <span class="rp-preset-title">Common Incomes:</span>
            <button type="button" class="rp-tax-preset-btn" data-income="600000">6 Lakhs</button>
            <button type="button" class="rp-tax-preset-btn" data-income="1000000">10 Lakhs</button>
            <button type="button" class="rp-tax-preset-btn" data-income="1200000">12 Lakhs</button>
            <button type="button" class="rp-tax-preset-btn" data-income="2000000">20 Lakhs</button>
            <button type="button" class="rp-tax-preset-btn" data-income="3000000">30 Lakhs</button>
          </div>

          <!-- Collapsible Deductions Section -->
          <div class="rp-deductions-container">
            <button
              type="button"
              class="rp-deductions-toggle ${state.deductionsExpanded ? 'open' : ''}"
              id="tax-deductions-toggle"
              aria-expanded="${state.deductionsExpanded}"
              aria-controls="tax-deductions-panel"
            >
              <div style="display:flex;align-items:center;gap:8px">
                <svg class="rp-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                <span style="font-weight:var(--weight-semibold);color:var(--color-heading);font-size:var(--text-sm)">
                  Tax Deductions & Reliefs (Optional)
                </span>
              </div>
              <span class="rp-badge ${res.deductions.totalApplied > 0 ? 'rp-badge-accent' : 'rp-badge-outline'}" id="tax-badge-ded-applied">
                ${res.deductions.totalApplied > 0 ? `-${formatNPR(res.deductions.totalApplied)} Applied` : '0 Applied'}
              </span>
            </button>

            <div
              class="rp-deductions-panel ${state.deductionsExpanded ? 'open' : ''}"
              id="tax-deductions-panel"
              style="${state.deductionsExpanded ? '' : 'display:none;'}"
            >
              <p class="rp-ded-subtext">
                Statutory deductions reduce your net taxable income before slabs are computed.
              </p>

              <!-- EPF -->
              <div class="rp-ded-field">
                <label for="tax-input-epf" class="rp-field-label">Employee Provident Fund (EPF)</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="tax-input-epf"
                    class="rp-number-input"
                    value="${state.deductions.epf || ''}"
                    placeholder="0"
                    min="0"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                  >
                </div>
              </div>

              <!-- CIT -->
              <div class="rp-ded-field">
                <label for="tax-input-cit" class="rp-field-label">Citizen Investment Trust (CIT)</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="tax-input-cit"
                    class="rp-number-input"
                    value="${state.deductions.cit || ''}"
                    placeholder="0"
                    min="0"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                  >
                </div>
              </div>

              <!-- SSF -->
              <div class="rp-ded-field">
                <label for="tax-input-ssf" class="rp-field-label">Social Security Fund (SSF)</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="tax-input-ssf"
                    class="rp-number-input"
                    value="${state.deductions.ssf || ''}"
                    placeholder="0"
                    min="0"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                  >
                </div>
              </div>
              <div class="rp-ded-hint">
                * Combined retirement deduction (EPF + CIT + SSF) capped at lower of: actual, 1/3 of income, or NPR 5,00,000.
              </div>

              <!-- Life Insurance -->
              <div class="rp-ded-field" style="margin-top:var(--space-3)">
                <label for="tax-input-life" class="rp-field-label">Life Insurance Premium (Max NPR 40,000)</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="tax-input-life"
                    class="rp-number-input"
                    value="${state.deductions.lifeInsurance || ''}"
                    placeholder="0"
                    min="0"
                    max="40000"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                  >
                </div>
              </div>

              <!-- Health Insurance -->
              <div class="rp-ded-field">
                <label for="tax-input-health" class="rp-field-label">Health Insurance Premium (Max NPR 20,000)</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="tax-input-health"
                    class="rp-number-input"
                    value="${state.deductions.healthInsurance || ''}"
                    placeholder="0"
                    min="0"
                    max="20000"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                  >
                </div>
              </div>

              <!-- Donations -->
              <div class="rp-ded-field">
                <label for="tax-input-donations" class="rp-field-label">Approved Donations (Max 5% / NPR 1,00,000)</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="tax-input-donations"
                    class="rp-number-input"
                    value="${state.deductions.donations || ''}"
                    placeholder="0"
                    min="0"
                    max="100000"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                  >
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- Results & Visualization Column -->
        <div class="rp-calc-results-card">
          <!-- Primary Results Grid -->
          <div class="rp-results-grid">
            <div class="rp-stat-card maturity span-2">
              <div class="rp-maturity-header">
                <span class="rp-stat-label">Total Annual Income Tax</span>
                <span class="rp-badge rp-badge-pulse" style="background:rgba(245,158,11,0.15);color:#F59E0B;border:1px solid rgba(245,158,11,0.3)">
                  Annual Tax Liability
                </span>
              </div>
              <div class="rp-stat-value maturity-large" style="color:#F59E0B" id="tax-res-total">
                ${formatNPR(res.totalTax)}
              </div>
              <div class="rp-stat-caption">
                Calculated on net taxable income of <strong id="tax-res-caption-net">${formatNPR(res.netTaxableIncome)}</strong>
              </div>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Effective Tax Rate</span>
              <div class="rp-stat-value" id="tax-res-rate">${res.effectiveTaxRate}%</div>
              <span class="rp-stat-sub">Overall tax on gross income</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Monthly Tax Estimate</span>
              <div class="rp-stat-value" style="color:#F59E0B" id="tax-res-monthly-tax">${formatNPR(res.monthlyTax)}</div>
              <span class="rp-stat-sub">Estimated TDS per month</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Monthly Take-Home</span>
              <div class="rp-stat-value accent" id="tax-res-monthly-home">${formatNPR(res.monthlyTakeHome)}</div>
              <span class="rp-stat-sub">After tax deductions</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Annual Take-Home</span>
              <div class="rp-stat-value" style="color:#10B981" id="tax-res-annual-home">${formatNPR(res.annualTakeHome)}</div>
              <span class="rp-stat-sub">Net disposable pay</span>
            </div>
          </div>

          <!-- SVG Donut Chart: Take-Home vs Tax vs Deductions -->
          <div id="tax-donut-container">
            ${renderTaxDonutChart({
              grossIncome: res.grossIncome,
              totalTax: res.totalTax,
              takeHome: res.annualTakeHome,
              totalDeductions: res.deductions.totalApplied,
            })}
          </div>
        </div>

      </div>

      <!-- Progressive Tax Breakdown Table -->
      <div class="rp-calc-section rp-table-section">
        <div class="rp-section-heading-row">
          <div>
            <h3>Slab-by-Slab Tax Breakdown (${res.fiscalYear})</h3>
            <p class="rp-subtext">
              See exactly how much income falls into each tax bracket and the precise tax computed at each step.
            </p>
          </div>
          <span class="rp-badge rp-badge-accent" id="tax-table-status-badge">
            ${isMarried ? 'Married Couple Slabs' : 'Individual Slabs'}
          </span>
        </div>

        <div class="rp-table-responsive">
          <table class="rp-growth-table rp-tax-table" aria-label="Progressive Tax Slabs Breakdown">
            <thead>
              <tr>
                <th scope="col">Income Slab</th>
                <th scope="col">Tax Rate</th>
                <th scope="col">Taxable in Slab</th>
                <th scope="col">Tax Paid</th>
              </tr>
            </thead>
            <tbody id="tax-breakdown-table-body">
              ${renderTaxBreakdownRows(res.breakdown)}
            </tbody>
            <tfoot>
              <tr class="rp-row-final">
                <td style="font-weight:var(--weight-bold);color:var(--color-white)">Total Tax Liability</td>
                <td>—</td>
                <td class="rp-num font-semibold">${formatNPR(res.netTaxableIncome)}</td>
                <td class="rp-num font-semibold" style="color:#F59E0B">${formatNPR(res.totalTax)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- Educational Insights: Progressive Taxation -->
      <div class="rp-calc-section rp-edu-cards-section">
        <h3 style="font-size:var(--text-lg);color:var(--color-heading);margin-bottom:var(--space-4)">
          How Progressive Income Tax Works in Nepal
        </h3>
        <div class="rp-edu-card" style="max-width:100%">
          <p>
            Nepal uses a <strong>progressive slab taxation</strong> system. Earning more money never subjects your entire income to the highest tax bracket. Each tax rate applies <em>strictly</em> to the portion of income within that designated slab. For example, if your income crosses into the 30% slab, only the rupees above NPR 10 Lakhs (or 11 Lakhs if married) are taxed at 30%, while all previous rupees remain taxed at 1%, 10%, and 20%. Increasing your salary always results in higher net take-home pay.
          </p>
        </div>
      </div>

      <!-- Official Disclaimer Notice -->
      <div class="rp-educational-note">
        <div class="rp-edu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div class="rp-edu-text">
          <strong>Important Notice:</strong> This calculator is designed for educational and estimation purposes using FY 2082/83 resident natural person tax slabs. Actual tax liability may differ depending on deductions, exemptions, employment status, remote foreign income rules, or future legal changes. Always verify with the Inland Revenue Department (IRD) or a qualified tax professional.
        </div>
      </div>

    </div>
  `;
}

/**
 * Render Tax Breakdown Rows
 * @param {Array} breakdown
 * @returns {string}
 */
function renderTaxBreakdownRows(breakdown) {
  if (!breakdown || !breakdown.length) {
    return `<tr><td colspan="4" class="text-center">No tax slab breakdown available</td></tr>`;
  }

  return breakdown.map(s => `
    <tr class="${s.isActive ? 'rp-slab-active' : 'rp-slab-inactive'}">
      <td>
        <span class="rp-year-badge ${s.isActive ? 'active' : ''}">${s.label}</span>
      </td>
      <td>
        <span class="rp-tax-rate-pill ${s.isActive ? 'active' : ''}">${s.rateLabel}</span>
      </td>
      <td class="rp-num ${s.isActive ? 'font-semibold' : ''}">${formatNPR(s.taxableInSlab)}</td>
      <td class="rp-num ${s.isActive && s.taxPaid > 0 ? 'font-semibold' : ''}" style="${s.taxPaid > 0 ? 'color:#F59E0B' : ''}">
        ${formatNPR(s.taxPaid)}
      </td>
    </tr>
  `).join('');
}

/**
 * Initialize Tax Calculator DOM events and interactivity
 */
export function initTaxCalculator() {
  const container = document.getElementById('tax-calculator');
  if (!container) return;

  // DOM elements
  const btnSingle = document.getElementById('tax-btn-single');
  const btnMarried = document.getElementById('tax-btn-married');
  const elInputIncome = document.getElementById('tax-input-income');
  const elRangeIncome = document.getElementById('tax-range-income');
  const errIncome = document.getElementById('err-tax-income');

  // Deductions toggle & inputs
  const btnDedToggle = document.getElementById('tax-deductions-toggle');
  const panelDed = document.getElementById('tax-deductions-panel');
  const badgeDedApplied = document.getElementById('tax-badge-ded-applied');

  const elInputEPF = document.getElementById('tax-input-epf');
  const elInputCIT = document.getElementById('tax-input-cit');
  const elInputSSF = document.getElementById('tax-input-ssf');
  const elInputLife = document.getElementById('tax-input-life');
  const elInputHealth = document.getElementById('tax-input-health');
  const elInputDonations = document.getElementById('tax-input-donations');

  // Results elements
  const resTotal = document.getElementById('tax-res-total');
  const resCaptionNet = document.getElementById('tax-res-caption-net');
  const resRate = document.getElementById('tax-res-rate');
  const resMonthlyTax = document.getElementById('tax-res-monthly-tax');
  const resMonthlyHome = document.getElementById('tax-res-monthly-home');
  const resAnnualHome = document.getElementById('tax-res-annual-home');

  // Chart & Table
  const donutContainer = document.getElementById('tax-donut-container');
  const tableBody = document.getElementById('tax-breakdown-table-body');
  const tableStatusBadge = document.getElementById('tax-table-status-badge');

  function update() {
    const rawIncome = elInputIncome?.value || 0;
    const validation = validateTaxInputs({
      grossIncome: rawIncome,
      maritalStatus: state.maritalStatus,
      deductions: {
        epf: elInputEPF?.value,
        cit: elInputCIT?.value,
        ssf: elInputSSF?.value,
        lifeInsurance: elInputLife?.value,
        healthInsurance: elInputHealth?.value,
        donations: elInputDonations?.value,
      },
    });

    if (errIncome) errIncome.textContent = validation.errors.grossIncome || '';

    state.grossIncome = validation.sanitized.grossIncome;
    state.deductions = validation.sanitized.deductions;

    const res = calculateNepalIncomeTax({
      grossIncome: state.grossIncome,
      maritalStatus: state.maritalStatus,
      deductions: state.deductions,
      fiscalYear: state.fiscalYear,
    });

    // Update Primary Results
    if (resTotal) resTotal.textContent = formatNPR(res.totalTax);
    if (resCaptionNet) resCaptionNet.textContent = formatNPR(res.netTaxableIncome);
    if (resRate) resRate.textContent = `${res.effectiveTaxRate}%`;
    if (resMonthlyTax) resMonthlyTax.textContent = formatNPR(res.monthlyTax);
    if (resMonthlyHome) resMonthlyHome.textContent = formatNPR(res.monthlyTakeHome);
    if (resAnnualHome) resAnnualHome.textContent = formatNPR(res.annualTakeHome);

    if (badgeDedApplied) {
      badgeDedApplied.textContent = res.deductions.totalApplied > 0
        ? `-${formatNPR(res.deductions.totalApplied)} Applied`
        : '0 Applied';
      badgeDedApplied.className = `rp-badge ${res.deductions.totalApplied > 0 ? 'rp-badge-accent' : 'rp-badge-outline'}`;
    }

    if (tableStatusBadge) {
      tableStatusBadge.textContent = state.maritalStatus === 'married' ? 'Married Couple Slabs' : 'Individual Slabs';
    }

    // Update Breakdown Table
    if (tableBody) {
      tableBody.innerHTML = renderTaxBreakdownRows(res.breakdown);
    }

    // Update Donut Chart
    if (donutContainer) {
      donutContainer.innerHTML = renderTaxDonutChart({
        grossIncome: res.grossIncome,
        totalTax: res.totalTax,
        takeHome: res.annualTakeHome,
        totalDeductions: res.deductions.totalApplied,
      });
    }
  }

  let taxRaf = null;
  function scheduleUpdate() {
    if (taxRaf) return;
    taxRaf = requestAnimationFrame(() => {
      taxRaf = null;
      update();
    });
  }

  // ── Event Listeners ───────────────────────────
  // Marital Status buttons
  btnSingle?.addEventListener('click', () => {
    btnSingle.classList.add('active');
    btnMarried?.classList.remove('active');
    state.maritalStatus = 'single';
    scheduleUpdate();
  });

  btnMarried?.addEventListener('click', () => {
    btnMarried.classList.add('active');
    btnSingle?.classList.remove('active');
    state.maritalStatus = 'married';
    scheduleUpdate();
  });

  // Synced Income inputs
  elInputIncome?.addEventListener('input', () => {
    if (elRangeIncome) elRangeIncome.value = Math.min(elInputIncome.value, 5000000);
    scheduleUpdate();
  });
  elRangeIncome?.addEventListener('input', () => {
    if (elInputIncome) elInputIncome.value = elRangeIncome.value;
    scheduleUpdate();
  });

  // Preset buttons
  container.querySelectorAll('.rp-tax-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const income = Number(btn.dataset.income);
      if (elInputIncome) elInputIncome.value = income;
      if (elRangeIncome) elRangeIncome.value = Math.min(income, 5000000);
      scheduleUpdate();
    });
  });

  // Deductions toggle
  btnDedToggle?.addEventListener('click', () => {
    state.deductionsExpanded = !state.deductionsExpanded;
    btnDedToggle.classList.toggle('open', state.deductionsExpanded);
    btnDedToggle.setAttribute('aria-expanded', String(state.deductionsExpanded));
    if (panelDed) {
      panelDed.style.display = state.deductionsExpanded ? 'block' : 'none';
      panelDed.classList.toggle('open', state.deductionsExpanded);
    }
  });

  // Deduction input events
  [elInputEPF, elInputCIT, elInputSSF, elInputLife, elInputHealth, elInputDonations].forEach(input => {
    input?.addEventListener('input', () => {
      scheduleUpdate();
    });
  });
}

// ==============================================
// risePaisa — Nepal Retirement & Financial Goal Planner Component
// Retirement corpus estimation, inflation escalation, and goal SIP requirements
// ==============================================
import {
  formatNPR,
  formatCompactNPR,
  calculateRetirement,
  calculateFinancialGoal,
  RETIREMENT_GOAL_CONFIG,
} from './engine.js';
import { renderRetirementChart, renderGoalProgressBar } from './charts.js';

/**
 * State for Retirement & Goal Planner
 */
let state = {
  activeSubTab: 'retirement', // 'retirement' | 'goal'
  // Retirement state
  currentAge: RETIREMENT_GOAL_CONFIG.retirementDefaults.currentAge,
  retirementAge: RETIREMENT_GOAL_CONFIG.retirementDefaults.retirementAge,
  monthlyExpenses: RETIREMENT_GOAL_CONFIG.retirementDefaults.monthlyExpenses,
  inflationRate: RETIREMENT_GOAL_CONFIG.retirementDefaults.inflationRate,
  postReturn: RETIREMENT_GOAL_CONFIG.retirementDefaults.postRetirementReturn,
  lifeExpectancy: RETIREMENT_GOAL_CONFIG.retirementDefaults.lifeExpectancy,
  preReturn: RETIREMENT_GOAL_CONFIG.retirementDefaults.preRetirementReturn,
  // Goal state
  targetAmount: RETIREMENT_GOAL_CONFIG.goalDefaults.targetAmount,
  currentSavings: RETIREMENT_GOAL_CONFIG.goalDefaults.currentSavings,
  goalReturn: RETIREMENT_GOAL_CONFIG.goalDefaults.annualReturn,
  goalYears: RETIREMENT_GOAL_CONFIG.goalDefaults.tenureYears,
};

/**
 * Render Retirement & Goal Planner HTML markup
 * @returns {string} HTML markup
 */
export function renderRetirementGoalCalculator() {
  const retRes = calculateRetirement({
    currentAge: state.currentAge,
    retirementAge: state.retirementAge,
    monthlyExpenses: state.monthlyExpenses,
    inflation: state.inflationRate,
    postReturn: state.postReturn,
    lifeExpectancy: state.lifeExpectancy,
    preReturn: state.preReturn,
  });

  const goalRes = calculateFinancialGoal({
    targetAmount: state.targetAmount,
    currentSavings: state.currentSavings,
    annualReturn: state.goalReturn,
    tenureMonths: state.goalYears * 12,
  });

  return `
    <div class="rp-calc-wrapper" id="retirement-goal-calculator">
      
      <!-- Sub-Tabs Bar -->
      <div class="rp-retire-subtabs" role="tablist" aria-label="Planning Tools">
        <button
          type="button"
          class="rp-retire-tab-btn ${state.activeSubTab === 'retirement' ? 'active' : ''}"
          id="retire-subtab-retire"
          data-subtab="retirement"
          role="tab"
          aria-selected="${state.activeSubTab === 'retirement'}"
          aria-controls="retire-pane-retire"
        >
          1. Retirement Planner
        </button>

        <button
          type="button"
          class="rp-retire-tab-btn ${state.activeSubTab === 'goal' ? 'active' : ''}"
          id="retire-subtab-goal"
          data-subtab="goal"
          role="tab"
          aria-selected="${state.activeSubTab === 'goal'}"
          aria-controls="retire-pane-goal"
        >
          2. Financial Goal Planner
        </button>
      </div>

      <!-- ── SUB-PANE 1: RETIREMENT PLANNER ───────────────────────── -->
      <div
        class="rp-retire-subpane ${state.activeSubTab === 'retirement' ? 'active' : ''}"
        id="retire-pane-retire"
        role="tabpanel"
        style="${state.activeSubTab === 'retirement' ? '' : 'display:none;'}"
      >
        <div class="rp-calc-layout">
          <!-- Retirement Inputs -->
          <div class="rp-calc-controls-card">
            <div class="rp-calc-card-header">
              <h3>Retirement Timeline & Expenses</h3>
              <span class="rp-badge rp-badge-accent">Sustainable Drawdown</span>
            </div>

            <!-- Current Age & Retirement Age -->
            <div class="rp-row-2col">
              <div class="rp-field-group">
                <label for="retire-cur-age" class="rp-field-label">Current Age</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="retire-cur-age"
                    class="rp-number-input"
                    value="${state.currentAge}"
                    min="18"
                    max="75"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Current Age"
                  >
                  <span class="rp-affix">Yrs</span>
                </div>
              </div>

              <div class="rp-field-group">
                <label for="retire-ret-age" class="rp-field-label">Retirement Age</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="retire-ret-age"
                    class="rp-number-input"
                    value="${state.retirementAge}"
                    min="40"
                    max="80"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Target Retirement Age"
                  >
                  <span class="rp-affix">Yrs</span>
                </div>
              </div>
            </div>

            <!-- Monthly Expenses -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="retire-exp-input" class="rp-field-label">Current Monthly Expenses</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="retire-exp-input"
                    class="rp-number-input"
                    value="${state.monthlyExpenses}"
                    min="5000"
                    max="2000000"
                    step="5000"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Current Monthly Living Expenses"
                  >
                </div>
              </div>
              <input
                type="range"
                id="retire-exp-slider"
                class="rp-slider"
                value="${state.monthlyExpenses}"
                min="10000"
                max="250000"
                step="5000"
                aria-label="Monthly Expenses Slider"
              >
              <div class="rp-slider-track-labels">
                <span>NPR 10K</span>
                <span>NPR 1.25L</span>
                <span>NPR 2.5L</span>
              </div>
            </div>

            <!-- Inflation Rate & Post-Retirement Return -->
            <div class="rp-row-2col">
              <div class="rp-field-group">
                <label for="retire-inf-input" class="rp-field-label">Expected Inflation</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="retire-inf-input"
                    class="rp-number-input text-right"
                    value="${state.inflationRate}"
                    min="1"
                    max="15"
                    step="0.5"
                    inputmode="decimal"
                    autocomplete="off"
                    aria-label="Expected Annual Inflation percentage"
                  >
                  <span class="rp-affix">%</span>
                </div>
                <span class="rp-field-hint">Nepal average: 5% – 7%</span>
              </div>

              <div class="rp-field-group">
                <label for="retire-post-return" class="rp-field-label">Post-Retirement Return</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="retire-post-return"
                    class="rp-number-input text-right"
                    value="${state.postReturn}"
                    min="2"
                    max="18"
                    step="0.5"
                    inputmode="decimal"
                    autocomplete="off"
                    aria-label="Post-retirement portfolio return"
                  >
                  <span class="rp-affix">%</span>
                </div>
                <span class="rp-field-hint">Safe yields (FD/Debt): 7% – 9%</span>
              </div>
            </div>

            <!-- Life Expectancy -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="retire-life-input" class="rp-field-label">Life Expectancy</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="retire-life-input"
                    class="rp-number-input text-right"
                    value="${state.lifeExpectancy}"
                    min="65"
                    max="105"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Life Expectancy"
                  >
                  <span class="rp-affix">Years</span>
                </div>
              </div>
              <span class="rp-field-hint">Provides sustainable withdrawals until age ${state.lifeExpectancy} (${state.lifeExpectancy - state.retirementAge} years in retirement).</span>
            </div>
          </div>

          <!-- Retirement Results -->
          <div class="rp-calc-results-card">
            <div class="rp-results-grid">
              <div class="rp-stat-card maturity span-2">
                <div class="rp-maturity-header">
                  <span class="rp-stat-label">Estimated Retirement Corpus Required</span>
                  <span class="rp-badge rp-badge-pulse">At Age ${retRes.retirementAge}</span>
                </div>
                <div class="rp-stat-value maturity-large accent" id="retire-res-corpus">
                  ${formatNPR(retRes.retirementCorpus)}
                </div>
                <div class="rp-stat-caption">
                  Monthly SIP needed to build this corpus: <strong id="retire-res-sip" style="color:#10B981">${formatNPR(retRes.monthlySIPNeeded)}/mo</strong> (@ 12% equity return)
                </div>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Current Monthly Expense</span>
                <div class="rp-stat-value" id="retire-res-cur-exp">${formatNPR(retRes.currentMonthlyExpenses)}</div>
                <span class="rp-stat-sub">Present living cost</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Monthly Expense at 60</span>
                <div class="rp-stat-value" style="color:#F59E0B" id="retire-res-fut-exp">${formatNPR(retRes.futureMonthlyExp)}</div>
                <span class="rp-stat-sub">After ${retRes.inflationRate}% annual inflation</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Years Until Retirement</span>
                <div class="rp-stat-value" id="retire-res-accum-yrs">${retRes.yearsToRetirement} Years</div>
                <span class="rp-stat-sub">Accumulation horizon</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Years in Retirement</span>
                <div class="rp-stat-value" id="retire-res-retire-yrs">${retRes.yearsInRetirement} Years</div>
                <span class="rp-stat-sub">Drawdown duration (to age ${retRes.lifeExpectancy})</span>
              </div>
            </div>

            <!-- Retirement Chart Container -->
            <div id="retire-chart-container" style="margin-top:var(--space-4)">
              ${renderRetirementChart({
                milestones: retRes.milestones,
                corpus: retRes.retirementCorpus,
              })}
            </div>
          </div>
        </div>
      </div>

      <!-- ── SUB-PANE 2: FINANCIAL GOAL PLANNER ───────────────────── -->
      <div
        class="rp-retire-subpane ${state.activeSubTab === 'goal' ? 'active' : ''}"
        id="retire-pane-goal"
        role="tabpanel"
        style="${state.activeSubTab === 'goal' ? '' : 'display:none;'}"
      >
        <!-- Quick Goal Presets -->
        <div class="rp-goal-presets-bar">
          <span class="rp-preset-title">Quick Goal Templates:</span>
          <div class="rp-goal-presets-list">
            ${RETIREMENT_GOAL_CONFIG.goalPresets.map(g => `
              <button
                type="button"
                class="rp-goal-preset-btn"
                data-target="${g.target}"
                data-savings="${g.savings}"
                data-years="${g.years}"
                data-return="${g.returnRate}"
              >
                ${g.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="rp-calc-layout" style="margin-top:var(--space-4)">
          <!-- Goal Inputs -->
          <div class="rp-calc-controls-card">
            <div class="rp-calc-card-header">
              <h3>Financial Goal Parameters</h3>
              <span class="rp-badge rp-badge-accent">Target SIP</span>
            </div>

            <!-- Target Amount -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="goal-target-input" class="rp-field-label">Target Goal Amount</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="goal-target-input"
                    class="rp-number-input"
                    value="${state.targetAmount}"
                    min="10000"
                    max="1000000000"
                    step="50000"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Target Goal Amount in NPR"
                  >
                </div>
              </div>
              <input
                type="range"
                id="goal-target-slider"
                class="rp-slider"
                value="${state.targetAmount}"
                min="100000"
                max="20000000"
                step="100000"
                aria-label="Target Amount Slider"
              >
              <div class="rp-slider-track-labels">
                <span>NPR 1L</span>
                <span>NPR 1 Crore</span>
                <span>NPR 2 Crore</span>
              </div>
            </div>

            <!-- Current Savings -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="goal-savings-input" class="rp-field-label">Current Savings (Existing Capital)</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="goal-savings-input"
                    class="rp-number-input"
                    value="${state.currentSavings}"
                    min="0"
                    max="500000000"
                    step="10000"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Existing Savings allocated to this goal"
                  >
                </div>
              </div>
              <input
                type="range"
                id="goal-savings-slider"
                class="rp-slider"
                value="${state.currentSavings}"
                min="0"
                max="5000000"
                step="25000"
                aria-label="Existing Savings Slider"
              >
              <div class="rp-slider-track-labels">
                <span>NPR 0</span>
                <span>NPR 25L</span>
                <span>NPR 50L</span>
              </div>
            </div>

            <!-- Expected Return & Time Period -->
            <div class="rp-row-2col">
              <div class="rp-field-group">
                <label for="goal-return-input" class="rp-field-label">Expected Annual Return</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="goal-return-input"
                    class="rp-number-input text-right"
                    value="${state.goalReturn}"
                    min="1"
                    max="25"
                    step="0.5"
                    inputmode="decimal"
                    autocomplete="off"
                    aria-label="Expected Investment Return percentage"
                  >
                  <span class="rp-affix">%</span>
                </div>
              </div>

              <div class="rp-field-group">
                <label for="goal-years-input" class="rp-field-label">Time Period</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="goal-years-input"
                    class="rp-number-input text-right"
                    value="${state.goalYears}"
                    min="1"
                    max="35"
                    step="1"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Goal Time Horizon in Years"
                  >
                  <span class="rp-affix">Years</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Goal Results -->
          <div class="rp-calc-results-card">
            <div class="rp-results-grid">
              <div class="rp-stat-card maturity span-2">
                <div class="rp-maturity-header">
                  <span class="rp-stat-label">Monthly Investment Required</span>
                  <span class="rp-badge rp-badge-pulse">Recommended SIP</span>
                </div>
                <div class="rp-stat-value maturity-large accent" id="goal-res-monthly-sip">
                  ${formatNPR(goalRes.monthlySIP)}
                </div>
                <div class="rp-stat-caption">
                  Invest <strong>${formatNPR(goalRes.monthlySIP)}</strong> every month for ${goalRes.tenureYears} years to reach your ${formatNPR(goalRes.targetAmount)} goal.
                </div>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Target Goal Amount</span>
                <div class="rp-stat-value" id="goal-res-target">${formatNPR(goalRes.targetAmount)}</div>
                <span class="rp-stat-sub">Target sum</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Future Value of Savings</span>
                <div class="rp-stat-value" style="color:#06B6D4" id="goal-res-fv-savings">${formatNPR(goalRes.fvSavings)}</div>
                <span class="rp-stat-sub">Grows from ${formatNPR(goalRes.currentSavings)}</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Estimated Total Invested</span>
                <div class="rp-stat-value" id="goal-res-total-invested">${formatNPR(goalRes.totalInvested)}</div>
                <span class="rp-stat-sub">Principal capital out of pocket</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Compound Growth Gain</span>
                <div class="rp-stat-value" style="color:#10B981" id="goal-res-growth">${formatNPR(goalRes.totalGrowth)}</div>
                <span class="rp-stat-sub">Wealth generated by returns</span>
              </div>
            </div>

            <!-- Goal Progress Bar Component -->
            <div id="goal-progress-container" style="margin-top:var(--space-4)">
              ${renderGoalProgressBar({
                targetAmount: goalRes.targetAmount,
                currentSavings: goalRes.currentSavings,
                fvSavings: goalRes.fvSavings,
                totalFreshSIP: goalRes.totalFreshSIP,
                totalGrowth: goalRes.totalGrowth,
              })}
            </div>
          </div>
        </div>
      </div>

      <!-- Educational Section -->
      <div class="rp-calc-section rp-edu-cards-section" style="margin-top:var(--space-8)">
        <h3 style="font-size:var(--text-lg);color:var(--color-heading);margin-bottom:var(--space-4)">
          Essential Principles of Long-Term Financial Planning
        </h3>
        <div class="rp-edu-grid">
          <div class="rp-edu-card">
            <h4>Why Inflation Matters</h4>
            <p>
              Over 20–30 years, inflation compounds silently. At 6% inflation, living costs double every 12 years. Planning in future rupees prevents retirement shortfalls.
            </p>
          </div>
          <div class="rp-edu-card">
            <h4>The Power of Starting Early</h4>
            <p>
              Starting to invest at age 25 rather than 35 cuts your required monthly SIP by more than half, because compound interest does the heavy lifting for you.
            </p>
          </div>
          <div class="rp-edu-card">
            <h4>Saving vs. Investing</h4>
            <p>
              Saving keeps money safe in cash or bank accounts, but loses purchasing power to inflation. Investing in compounding assets grows your wealth ahead of inflation.
            </p>
          </div>
        </div>
      </div>

      <!-- Nepal Context Notice -->
      <div class="rp-educational-note">
        <div class="rp-edu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div class="rp-edu-text">
          <strong>Educational Planning Notice:</strong> This calculator is designed for educational financial planning. Inflation, investment returns, and personal circumstances vary over time. Review your financial plan periodically and verify assumptions before making long-term financial decisions.
        </div>
      </div>

    </div>
  `;
}

/**
 * Initialize Retirement & Goal Planner interactivity
 */
export function initRetirementGoalCalculator() {
  const container = document.getElementById('retirement-goal-calculator');
  if (!container) return;

  // Sub-tabs switching
  const tabBtns = container.querySelectorAll('.rp-retire-tab-btn');
  const paneRetire = document.getElementById('retire-pane-retire');
  const paneGoal = document.getElementById('retire-pane-goal');

  function switchSubTab(target) {
    state.activeSubTab = target;
    tabBtns.forEach(btn => {
      const isTarget = btn.dataset.subtab === target;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', String(isTarget));
    });

    if (paneRetire) {
      paneRetire.style.display = target === 'retirement' ? 'block' : 'none';
      paneRetire.classList.toggle('active', target === 'retirement');
    }
    if (paneGoal) {
      paneGoal.style.display = target === 'goal' ? 'block' : 'none';
      paneGoal.classList.toggle('active', target === 'goal');
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchSubTab(btn.dataset.subtab));
  });

  // ── 1. Retirement Planner Logic ───────────────
  const elCurAge = document.getElementById('retire-cur-age');
  const elRetAge = document.getElementById('retire-ret-age');
  const elExpInput = document.getElementById('retire-exp-input');
  const elExpSlider = document.getElementById('retire-exp-slider');
  const elInfInput = document.getElementById('retire-inf-input');
  const elPostReturn = document.getElementById('retire-post-return');
  const elLifeInput = document.getElementById('retire-life-input');

  const resCorpus = document.getElementById('retire-res-corpus');
  const resSIP = document.getElementById('retire-res-sip');
  const resCurExp = document.getElementById('retire-res-cur-exp');
  const resFutExp = document.getElementById('retire-res-fut-exp');
  const resAccumYrs = document.getElementById('retire-res-accum-yrs');
  const resRetireYrs = document.getElementById('retire-res-retire-yrs');
  const chartContainer = document.getElementById('retire-chart-container');

  let retireRaf = null;
  function scheduleRetirementUpdate() {
    if (retireRaf) return;
    retireRaf = requestAnimationFrame(() => {
      retireRaf = null;
      updateRetirement();
    });
  }

  function updateRetirement() {
    state.currentAge = Math.max(18, Math.min(80, Number(elCurAge?.value) || 30));
    state.retirementAge = Math.max(state.currentAge + 1, Math.min(90, Number(elRetAge?.value) || 60));
    state.monthlyExpenses = Math.max(1000, Number(elExpInput?.value) || 50000);
    state.inflationRate = Math.max(0, Number(elInfInput?.value) || 6.0);
    state.postReturn = Math.max(0, Number(elPostReturn?.value) || 8.0);
    state.lifeExpectancy = Math.max(state.retirementAge + 1, Math.min(105, Number(elLifeInput?.value) || 85));

    const res = calculateRetirement({
      currentAge: state.currentAge,
      retirementAge: state.retirementAge,
      monthlyExpenses: state.monthlyExpenses,
      inflation: state.inflationRate,
      postReturn: state.postReturn,
      lifeExpectancy: state.lifeExpectancy,
      preReturn: state.preReturn,
    });

    if (resCorpus) resCorpus.textContent = formatNPR(res.retirementCorpus);
    if (resSIP) resSIP.textContent = `${formatNPR(res.monthlySIPNeeded)}/mo`;
    if (resCurExp) resCurExp.textContent = formatNPR(res.currentMonthlyExpenses);
    if (resFutExp) resFutExp.textContent = formatNPR(res.futureMonthlyExp);
    if (resAccumYrs) resAccumYrs.textContent = `${res.yearsToRetirement} Years`;
    if (resRetireYrs) resRetireYrs.textContent = `${res.yearsInRetirement} Years`;

    if (chartContainer) {
      chartContainer.innerHTML = renderRetirementChart({
        milestones: res.milestones,
        corpus: res.retirementCorpus,
      });
    }
  }

  elCurAge?.addEventListener('input', scheduleRetirementUpdate);
  elRetAge?.addEventListener('input', scheduleRetirementUpdate);
  elInfInput?.addEventListener('input', scheduleRetirementUpdate);
  elPostReturn?.addEventListener('input', scheduleRetirementUpdate);
  elLifeInput?.addEventListener('input', scheduleRetirementUpdate);

  elExpInput?.addEventListener('input', e => {
    state.monthlyExpenses = Math.max(1000, Number(e.target.value) || 1000);
    if (elExpSlider) elExpSlider.value = Math.min(250000, state.monthlyExpenses);
    scheduleRetirementUpdate();
  });

  elExpSlider?.addEventListener('input', e => {
    state.monthlyExpenses = Number(e.target.value);
    if (elExpInput) elExpInput.value = state.monthlyExpenses;
    scheduleRetirementUpdate();
  });

  // ── 2. Financial Goal Planner Logic ───────────
  const elTargetInput = document.getElementById('goal-target-input');
  const elTargetSlider = document.getElementById('goal-target-slider');
  const elSavingsInput = document.getElementById('goal-savings-input');
  const elSavingsSlider = document.getElementById('goal-savings-slider');
  const elReturnInput = document.getElementById('goal-return-input');
  const elYearsInput = document.getElementById('goal-years-input');

  const resGoalMonthlySIP = document.getElementById('goal-res-monthly-sip');
  const resGoalTarget = document.getElementById('goal-res-target');
  const resGoalFvSavings = document.getElementById('goal-res-fv-savings');
  const resGoalInvested = document.getElementById('goal-res-total-invested');
  const resGoalGrowth = document.getElementById('goal-res-growth');
  const progressContainer = document.getElementById('goal-progress-container');

  let goalRaf = null;
  function scheduleGoalUpdate() {
    if (goalRaf) return;
    goalRaf = requestAnimationFrame(() => {
      goalRaf = null;
      updateGoal();
    });
  }

  function updateGoal() {
    state.targetAmount = Math.max(10000, Number(elTargetInput?.value) || 5000000);
    state.currentSavings = Math.max(0, Number(elSavingsInput?.value) || 0);
    state.goalReturn = Math.max(0.1, Number(elReturnInput?.value) || 10.0);
    state.goalYears = Math.max(1, Math.min(40, Number(elYearsInput?.value) || 15));

    const res = calculateFinancialGoal({
      targetAmount: state.targetAmount,
      currentSavings: state.currentSavings,
      annualReturn: state.goalReturn,
      tenureMonths: state.goalYears * 12,
    });

    if (resGoalMonthlySIP) resGoalMonthlySIP.textContent = formatNPR(res.monthlySIP);
    if (resGoalTarget) resGoalTarget.textContent = formatNPR(res.targetAmount);
    if (resGoalFvSavings) resGoalFvSavings.textContent = formatNPR(res.fvSavings);
    if (resGoalInvested) resGoalInvested.textContent = formatNPR(res.totalInvested);
    if (resGoalGrowth) resGoalGrowth.textContent = formatNPR(res.totalGrowth);

    if (progressContainer) {
      progressContainer.innerHTML = renderGoalProgressBar({
        targetAmount: res.targetAmount,
        currentSavings: res.currentSavings,
        fvSavings: res.fvSavings,
        totalFreshSIP: res.totalFreshSIP,
        totalGrowth: res.totalGrowth,
      });
    }
  }

  elTargetInput?.addEventListener('input', e => {
    state.targetAmount = Math.max(10000, Number(e.target.value) || 10000);
    if (elTargetSlider) elTargetSlider.value = Math.min(20000000, state.targetAmount);
    scheduleGoalUpdate();
  });

  elTargetSlider?.addEventListener('input', e => {
    state.targetAmount = Number(e.target.value);
    if (elTargetInput) elTargetInput.value = state.targetAmount;
    scheduleGoalUpdate();
  });

  elSavingsInput?.addEventListener('input', e => {
    state.currentSavings = Math.max(0, Number(e.target.value) || 0);
    if (elSavingsSlider) elSavingsSlider.value = Math.min(5000000, state.currentSavings);
    scheduleGoalUpdate();
  });

  elSavingsSlider?.addEventListener('input', e => {
    state.currentSavings = Number(e.target.value);
    if (elSavingsInput) elSavingsInput.value = state.currentSavings;
    scheduleGoalUpdate();
  });

  elReturnInput?.addEventListener('input', scheduleGoalUpdate);
  elYearsInput?.addEventListener('input', scheduleGoalUpdate);

  // Quick Goal Preset Buttons
  container.querySelectorAll('.rp-goal-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = Number(btn.dataset.target);
      const savings = Number(btn.dataset.savings);
      const years = Number(btn.dataset.years);
      const returnRate = Number(btn.dataset.return);

      state.targetAmount = target;
      state.currentSavings = savings;
      state.goalYears = years;
      state.goalReturn = returnRate;

      if (elTargetInput) elTargetInput.value = target;
      if (elTargetSlider) elTargetSlider.value = Math.min(20000000, target);
      if (elSavingsInput) elSavingsInput.value = savings;
      if (elSavingsSlider) elSavingsSlider.value = Math.min(5000000, savings);
      if (elYearsInput) elYearsInput.value = years;
      if (elReturnInput) elReturnInput.value = returnRate;

      scheduleGoalUpdate();
    });
  });
}

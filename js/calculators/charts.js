// ==============================================
// risePaisa — Native SVG Financial Chart Suite
// Lightweight, responsive, zero-dependency charts
// ==============================================
import { formatNPR, formatCompactNPR } from './engine.js';

/**
 * Generate a pure SVG Doughnut Chart for Investment vs Returns breakdown
 * @param {Object} params
 * @param {number} params.invested - Total invested amount
 * @param {number} params.profit - Estimated returns / profit
 * @returns {string} HTML string containing the SVG chart and legend
 */
export function renderDonutChart({ invested, profit }) {
  const total = Math.max(1, (invested || 0) + (profit || 0));
  const investedVal = Math.max(0, invested || 0);
  const profitVal = Math.max(0, profit || 0);

  const investedPct = Math.round((investedVal / total) * 1000) / 10;
  const profitPct = Math.max(0, Math.round((100 - investedPct) * 10) / 10);

  // SVG dimensions & circle geometry
  const size = 180;
  const cx = 90;
  const cy = 90;
  const r = 64;
  const circumference = 2 * Math.PI * r; // ~402.12

  // Dash calculations
  // Invested arc
  const investedDash = (investedPct / 100) * circumference;
  // Profit arc
  const profitDash = (profitPct / 100) * circumference;

  // Offset profit arc so it starts right after invested arc
  // Starting at -90deg (top center)
  const profitOffset = -investedDash;

  return `
    <div class="rp-donut-card">
      <div class="rp-donut-chart-wrap">
        <svg class="rp-donut-svg" viewBox="0 0 ${size} ${size}" aria-label="Investment vs Returns Breakdown">
          <defs>
            <linearGradient id="profitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4db8ff" />
              <stop offset="100%" stop-color="#1da1f2" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#1da1f2" flood-opacity="0.3"/>
            </filter>
          </defs>

          <!-- Track Background -->
          <circle
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            stroke-width="18"
          />

          <!-- Invested Segment (Base Slate) -->
          <circle
            class="rp-donut-segment rp-donut-invested"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="#2a3b5c"
            stroke-width="18"
            stroke-dasharray="${investedDash} ${circumference}"
            stroke-dashoffset="0"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Profit Segment (Vibrant Accent Glow) -->
          <circle
            class="rp-donut-segment rp-donut-profit"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#profitGrad)"
            stroke-width="18"
            stroke-dasharray="${profitDash} ${circumference}"
            stroke-dashoffset="${profitOffset}"
            transform="rotate(-90 ${cx} ${cy})"
            filter="url(#glow)"
          />

          <!-- Center Text -->
          <g class="rp-donut-center" transform="translate(${cx}, ${cy})">
            <text class="rp-donut-center-label" y="-8" text-anchor="middle">Maturity Value</text>
            <text class="rp-donut-center-val" y="14" text-anchor="middle">${formatCompactNPR(total)}</text>
          </g>
        </svg>
      </div>

      <!-- Legend -->
      <div class="rp-donut-legend">
        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot dot-invested"></span>
            <span class="rp-legend-name">Total Investment</span>
            <span class="rp-legend-pct">${investedPct}%</span>
          </div>
          <div class="rp-legend-amount">${formatNPR(investedVal)}</div>
        </div>

        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot dot-profit"></span>
            <span class="rp-legend-name">Estimated Returns</span>
            <span class="rp-legend-pct">${profitPct}%</span>
          </div>
          <div class="rp-legend-amount accent">${formatNPR(profitVal)}</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generate a pure SVG Growth Line and Area Chart
 * Renders smooth compounding curve vs linear invested curve
 * @param {Object} params
 * @param {Array} params.yearlyBreakdown - Array of yearly data points
 * @returns {string} HTML string containing responsive SVG growth chart
 */
export function renderGrowthChart({ yearlyBreakdown }) {
  if (!yearlyBreakdown || yearlyBreakdown.length === 0) {
    return `<div class="rp-chart-empty">No growth data available</div>`;
  }

  // Canvas bounds
  const width = 720;
  const height = 280;
  const padLeft = 68;
  const padRight = 32;
  const padTop = 28;
  const padBottom = 42;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  // Max value for Y scale
  const finalPoint = yearlyBreakdown[yearlyBreakdown.length - 1];
  const maxY = Math.max(1, finalPoint.estimatedValue * 1.08); // 8% headroom
  const totalYears = yearlyBreakdown.length;

  // Coordinate mappers
  const getX = (year) => padLeft + (year / totalYears) * chartW;
  const getY = (val) => padTop + chartH - (val / maxY) * chartH;

  // Base point (Year 0, Value 0)
  const x0 = padLeft;
  const y0 = padTop + chartH;

  // Build point arrays
  const pointsValue = [{ x: x0, y: y0, year: 0, val: 0, invested: 0, profit: 0 }];
  const pointsInvested = [{ x: x0, y: y0 }];

  yearlyBreakdown.forEach((pt) => {
    pointsValue.push({
      x: getX(pt.year),
      y: getY(pt.estimatedValue),
      year: pt.year,
      val: pt.estimatedValue,
      invested: pt.totalInvested,
      profit: pt.estimatedProfit,
    });
    pointsInvested.push({
      x: getX(pt.year),
      y: getY(pt.totalInvested),
    });
  });

  // Generate smooth cubic bezier path for compounding value line
  let pathD = `M ${pointsValue[0].x} ${pointsValue[0].y}`;
  for (let i = 0; i < pointsValue.length - 1; i++) {
    const p0 = i > 0 ? pointsValue[i - 1] : pointsValue[i];
    const p1 = pointsValue[i];
    const p2 = pointsValue[i + 1];
    const p3 = i < pointsValue.length - 2 ? pointsValue[i + 2] : p2;

    // Catmull-Rom to Cubic Bezier control points
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    pathD += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  // Area path (closed at bottom)
  const lastX = pointsValue[pointsValue.length - 1].x;
  const areaD = `${pathD} L ${lastX.toFixed(1)} ${y0} L ${x0} ${y0} Z`;

  // Invested line path (linear)
  const investedD = pointsInvested.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');

  // Horizontal Grid Lines & Y-axis labels (4 subdivisions)
  const yTicks = [];
  for (let i = 0; i <= 4; i++) {
    const tickVal = (maxY / 4) * i;
    const tickY = getY(tickVal);
    yTicks.push({
      y: tickY,
      label: formatCompactNPR(tickVal),
    });
  }

  // X-axis step intervals (e.g. show 5-7 labels max)
  const step = Math.max(1, Math.ceil(totalYears / 6));
  const xTicks = [{ year: 0, x: x0, label: 'Yr 0' }];
  for (let y = step; y <= totalYears; y += step) {
    xTicks.push({
      year: y,
      x: getX(y),
      label: `Yr ${y}`,
    });
  }
  // Ensure final year is visible if not aligned with step
  if (xTicks[xTicks.length - 1].year !== totalYears) {
    xTicks.push({
      year: totalYears,
      x: getX(totalYears),
      label: `Yr ${totalYears}`,
    });
  }

  // Interactive circle markers & tooltips
  const markers = pointsValue.slice(1).map((pt) => `
    <g class="rp-chart-point" data-year="${pt.year}" data-val="${pt.val}" data-invested="${pt.invested}" data-profit="${pt.profit}" tabindex="0" role="button" aria-label="Year ${pt.year}: ${formatNPR(pt.val)}">
      <circle class="rp-point-hit" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="14" fill="transparent" />
      <circle class="rp-point-outer" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="6" fill="rgba(29, 161, 242, 0.25)" />
      <circle class="rp-point-inner" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.5" fill="#1da1f2" />
    </g>
  `).join('');

  return `
    <div class="rp-growth-chart-container" id="rp-growth-chart-wrap">
      <div class="rp-chart-header">
        <div class="rp-chart-title">Investment Growth Over Time</div>
        <div class="rp-chart-badges">
          <span class="rp-badge-line invested-line">Invested</span>
          <span class="rp-badge-line value-line">Total Value</span>
        </div>
      </div>

      <div class="rp-chart-svg-wrapper">
        <svg class="rp-growth-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="Growth Graph">
          <defs>
            <!-- Area Gradient Fill -->
            <linearGradient id="growthAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1da1f2" stop-opacity="0.38" />
              <stop offset="60%" stop-color="#1da1f2" stop-opacity="0.08" />
              <stop offset="100%" stop-color="#1da1f2" stop-opacity="0.0" />
            </linearGradient>

            <filter id="lineGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1da1f2" flood-opacity="0.4"/>
            </filter>
          </defs>

          <!-- Horizontal Grid Lines -->
          ${yTicks.map(t => `
            <line class="rp-grid-line" x1="${padLeft}" y1="${t.y.toFixed(1)}" x2="${width - padRight}" y2="${t.y.toFixed(1)}" />
            <text class="rp-axis-text y-axis" x="${padLeft - 10}" y="${(t.y + 4).toFixed(1)}" text-anchor="end">${t.label}</text>
          `).join('')}

          <!-- X Axis Ticks -->
          ${xTicks.map(t => `
            <line class="rp-tick-line" x1="${t.x.toFixed(1)}" y1="${y0}" x2="${t.x.toFixed(1)}" y2="${y0 + 5}" />
            <text class="rp-axis-text x-axis" x="${t.x.toFixed(1)}" y="${y0 + 20}" text-anchor="middle">${t.label}</text>
          `).join('')}

          <!-- Area Fill -->
          <path class="rp-chart-area" d="${areaD}" fill="url(#growthAreaGrad)" />

          <!-- Invested Principal Line (Dashed Slate) -->
          <path class="rp-chart-line-invested" d="${investedD}" fill="none" stroke="#486581" stroke-width="2" stroke-dasharray="4 4" />

          <!-- Value Curve (Compounding Neon Blue) -->
          <path class="rp-chart-line-value" d="${pathD}" fill="none" stroke="#1da1f2" stroke-width="3" filter="url(#lineGlow)" />

          <!-- Interactive Year Point Markers -->
          ${markers}
        </svg>

        <!-- Hover Tooltip Container -->
        <div class="rp-chart-tooltip" id="rp-chart-tooltip" style="display:none;"></div>
      </div>
    </div>
  `;
}

/**
 * Generate a pure SVG Doughnut Chart for Principal vs Interest breakdown
 * @param {Object} params
 * @param {number} params.principal - Loan Amount P
 * @param {number} params.totalInterest - Total Interest
 * @returns {string} HTML markup
 */
export function renderLoanDonutChart({ principal, totalInterest }) {
  const pVal = Math.max(0, principal || 0);
  const intVal = Math.max(0, totalInterest || 0);
  const total = Math.max(1, pVal + intVal);

  const principalPct = Math.round((pVal / total) * 1000) / 10;
  const interestPct = Math.max(0, Math.round((100 - principalPct) * 10) / 10);

  const size = 180;
  const cx = 90;
  const cy = 90;
  const r = 64;
  const circumference = 2 * Math.PI * r;

  const principalDash = (principalPct / 100) * circumference;
  const interestDash = (interestPct / 100) * circumference;
  const interestOffset = -principalDash;

  return `
    <div class="rp-donut-card">
      <div class="rp-donut-chart-wrap">
        <svg class="rp-donut-svg" viewBox="0 0 ${size} ${size}" aria-label="Principal vs Interest Breakdown">
          <defs>
            <linearGradient id="loanPrincipalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4db8ff" />
              <stop offset="100%" stop-color="#1da1f2" />
            </linearGradient>
            <linearGradient id="loanInterestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fbbf24" />
              <stop offset="100%" stop-color="#f59e0b" />
            </linearGradient>
          </defs>

          <!-- Track Background -->
          <circle
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            stroke-width="18"
          />

          <!-- Principal Segment (Cyan Glow) -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#loanPrincipalGrad)"
            stroke-width="18"
            stroke-dasharray="${principalDash} ${circumference}"
            stroke-dashoffset="0"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Interest Segment (Amber Gold) -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#loanInterestGrad)"
            stroke-width="18"
            stroke-dasharray="${interestDash} ${circumference}"
            stroke-dashoffset="${interestOffset}"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Center Text -->
          <g class="rp-donut-center" transform="translate(${cx}, ${cy})">
            <text class="rp-donut-center-label" y="-8" text-anchor="middle">Total Payment</text>
            <text class="rp-donut-center-val" y="14" text-anchor="middle">${formatCompactNPR(total)}</text>
          </g>
        </svg>
      </div>

      <!-- Legend -->
      <div class="rp-donut-legend">
        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#1da1f2;box-shadow:0 0 6px #1da1f2"></span>
            <span class="rp-legend-name">Principal Amount</span>
            <span class="rp-legend-pct">${principalPct}%</span>
          </div>
          <div class="rp-legend-amount accent">${formatNPR(pVal)}</div>
        </div>

        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#f59e0b;box-shadow:0 0 6px #f59e0b"></span>
            <span class="rp-legend-name">Total Interest</span>
            <span class="rp-legend-pct">${interestPct}%</span>
          </div>
          <div class="rp-legend-amount" style="color:#f59e0b">${formatNPR(intVal)}</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generate a pure SVG Line Chart showing Outstanding Loan Balance over time
 * @param {Object} params
 * @param {Array} params.yearlyMilestones - Array of yearly balance points
 * @returns {string} HTML markup
 */
export function renderLoanBalanceChart({ yearlyMilestones }) {
  if (!yearlyMilestones || yearlyMilestones.length === 0) {
    return `<div class="rp-chart-empty">No balance data available</div>`;
  }

  const width = 720;
  const height = 280;
  const padLeft = 68;
  const padRight = 32;
  const padTop = 28;
  const padBottom = 42;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const initialBalance = yearlyMilestones[0]?.balance || 1;
  const maxY = Math.max(1, initialBalance * 1.08);
  const totalYears = yearlyMilestones[yearlyMilestones.length - 1].year || 1;

  const getX = (year) => padLeft + (year / totalYears) * chartW;
  const getY = (val) => padTop + chartH - (val / maxY) * chartH;
  const y0 = padTop + chartH;

  const points = yearlyMilestones.map((pt) => ({
    x: getX(pt.year),
    y: getY(pt.balance),
    year: pt.year,
    balance: pt.balance,
    cumPrincipal: pt.cumulativePrincipal,
    cumInterest: pt.cumulativeInterest,
  }));

  // Build smooth cubic bezier curve
  let pathD = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i < points.length - 2 ? points[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    pathD += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  const lastX = points[points.length - 1].x;
  const areaD = `${pathD} L ${lastX.toFixed(1)} ${y0} L ${points[0].x.toFixed(1)} ${y0} Z`;

  // Grid lines
  const yTicks = [];
  for (let i = 0; i <= 4; i++) {
    const tickVal = (maxY / 4) * i;
    yTicks.push({
      y: getY(tickVal),
      label: formatCompactNPR(tickVal),
    });
  }

  const step = Math.max(1, Math.ceil(totalYears / 6));
  const xTicks = [{ year: 0, x: padLeft, label: 'Yr 0' }];
  for (let y = step; y <= totalYears; y += step) {
    xTicks.push({
      year: y,
      x: getX(y),
      label: `Yr ${y}`,
    });
  }
  if (xTicks[xTicks.length - 1].year !== totalYears) {
    xTicks.push({
      year: totalYears,
      x: getX(totalYears),
      label: `Yr ${totalYears}`,
    });
  }

  const markers = points.map((pt) => `
    <g class="rp-chart-point" data-year="${pt.year}" data-balance="${pt.balance}" data-principal="${pt.cumPrincipal}" data-interest="${pt.cumInterest}" tabindex="0" role="button" aria-label="Year ${pt.year} Balance: ${formatNPR(pt.balance)}">
      <circle class="rp-point-hit" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="14" fill="transparent" />
      <circle class="rp-point-outer" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="6" fill="rgba(29, 161, 242, 0.25)" />
      <circle class="rp-point-inner" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.5" fill="#1da1f2" />
    </g>
  `).join('');

  return `
    <div class="rp-growth-chart-container" id="rp-loan-chart-wrap">
      <div class="rp-chart-header">
        <div class="rp-chart-title">Outstanding Loan Balance Over Time</div>
        <div class="rp-chart-badges">
          <span class="rp-badge-line value-line">Remaining Principal</span>
        </div>
      </div>

      <div class="rp-chart-svg-wrapper">
        <svg class="rp-growth-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="Loan Balance Reduction Graph">
          <defs>
            <linearGradient id="balanceAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1da1f2" stop-opacity="0.32" />
              <stop offset="70%" stop-color="#1da1f2" stop-opacity="0.05" />
              <stop offset="100%" stop-color="#1da1f2" stop-opacity="0.0" />
            </linearGradient>
            <filter id="loanLineGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1da1f2" flood-opacity="0.4"/>
            </filter>
          </defs>

          <!-- Grid Lines -->
          ${yTicks.map(t => `
            <line class="rp-grid-line" x1="${padLeft}" y1="${t.y.toFixed(1)}" x2="${width - padRight}" y2="${t.y.toFixed(1)}" />
            <text class="rp-axis-text y-axis" x="${padLeft - 10}" y="${(t.y + 4).toFixed(1)}" text-anchor="end">${t.label}</text>
          `).join('')}

          <!-- X Axis Ticks -->
          ${xTicks.map(t => `
            <line class="rp-tick-line" x1="${t.x.toFixed(1)}" y1="${y0}" x2="${t.x.toFixed(1)}" y2="${y0 + 5}" />
            <text class="rp-axis-text x-axis" x="${t.x.toFixed(1)}" y="${y0 + 20}" text-anchor="middle">${t.label}</text>
          `).join('')}

          <!-- Area Fill -->
          <path class="rp-chart-area" d="${areaD}" fill="url(#balanceAreaGrad)" />

          <!-- Line Curve -->
          <path class="rp-chart-line-value" d="${pathD}" fill="none" stroke="#1da1f2" stroke-width="3" filter="url(#loanLineGlow)" />

          <!-- Markers -->
          ${markers}
        </svg>

        <div class="rp-chart-tooltip" id="rp-loan-chart-tooltip" style="display:none;"></div>
      </div>
    </div>
  `;
}

/**
 * Generate a pure SVG Doughnut Chart for SWP: Total Withdrawn vs Final Remaining Corpus
 * @param {Object} params
 * @param {number} params.totalWithdrawn - Sum of all withdrawals
 * @param {number} params.finalBalance - Remaining corpus
 * @returns {string} HTML markup
 */
export function renderSWPDonutChart({ totalWithdrawn, finalBalance }) {
  const wVal = Math.max(0, totalWithdrawn || 0);
  const bVal = Math.max(0, finalBalance || 0);
  const total = Math.max(1, wVal + bVal);

  const withdrawnPct = Math.round((wVal / total) * 1000) / 10;
  const balancePct = Math.max(0, Math.round((100 - withdrawnPct) * 10) / 10);

  const size = 180;
  const cx = 90;
  const cy = 90;
  const r = 64;
  const circumference = 2 * Math.PI * r;

  const withdrawnDash = (withdrawnPct / 100) * circumference;
  const balanceDash = (balancePct / 100) * circumference;
  const balanceOffset = -withdrawnDash;

  return `
    <div class="rp-donut-card">
      <div class="rp-donut-chart-wrap">
        <svg class="rp-donut-svg" viewBox="0 0 ${size} ${size}" aria-label="SWP Wealth Distribution">
          <defs>
            <linearGradient id="swpWithdrawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#0284c7" />
            </linearGradient>
            <linearGradient id="swpBalanceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#34d399" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
          </defs>

          <!-- Track Background -->
          <circle
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            stroke-width="18"
          />

          <!-- Total Withdrawn Segment (Sky Blue) -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#swpWithdrawnGrad)"
            stroke-width="18"
            stroke-dasharray="${withdrawnDash} ${circumference}"
            stroke-dashoffset="0"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Remaining Corpus Segment (Emerald Green) -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#swpBalanceGrad)"
            stroke-width="18"
            stroke-dasharray="${balanceDash} ${circumference}"
            stroke-dashoffset="${balanceOffset}"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Center Text -->
          <g class="rp-donut-center" transform="translate(${cx}, ${cy})">
            <text class="rp-donut-center-label" y="-8" text-anchor="middle">Total Wealth</text>
            <text class="rp-donut-center-val" y="14" text-anchor="middle">${formatCompactNPR(total)}</text>
          </g>
        </svg>
      </div>

      <!-- Legend -->
      <div class="rp-donut-legend">
        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#0284c7;box-shadow:0 0 6px #0284c7"></span>
            <span class="rp-legend-name">Total Withdrawn</span>
            <span class="rp-legend-pct">${withdrawnPct}%</span>
          </div>
          <div class="rp-legend-amount accent">${formatNPR(wVal)}</div>
        </div>

        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#059669;box-shadow:0 0 6px #059669"></span>
            <span class="rp-legend-name">Remaining Corpus</span>
            <span class="rp-legend-pct">${balancePct}%</span>
          </div>
          <div class="rp-legend-amount" style="color:#34d399">${formatNPR(bVal)}</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Generate a pure SVG Line Chart showing SWP Remaining Corpus over time
 * @param {Object} params
 * @param {Array} params.yearlyMilestones - Array of yearly balance points
 * @param {boolean} params.isExhausted - Whether corpus depleted early
 * @returns {string} HTML markup
 */
export function renderSWPBalanceChart({ yearlyMilestones, isExhausted }) {
  if (!yearlyMilestones || yearlyMilestones.length === 0) {
    return `<div class="rp-chart-empty">No trajectory data available</div>`;
  }

  const width = 720;
  const height = 280;
  const padLeft = 68;
  const padRight = 32;
  const padTop = 28;
  const padBottom = 42;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const maxBalance = Math.max(...yearlyMilestones.map(m => m.balance), 1);
  const maxY = Math.max(1, maxBalance * 1.08);
  const totalYears = yearlyMilestones[yearlyMilestones.length - 1].year || 1;

  const getX = (year) => padLeft + (year / totalYears) * chartW;
  const getY = (val) => padTop + chartH - (val / maxY) * chartH;
  const y0 = padTop + chartH;

  const points = yearlyMilestones.map((pt) => ({
    x: getX(pt.year),
    y: getY(pt.balance),
    year: pt.year,
    balance: pt.balance,
    cumWithdrawn: pt.cumulativeWithdrawn,
    cumGrowth: pt.cumulativeGrowth,
  }));

  // Build smooth cubic bezier curve
  let pathD = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i < points.length - 2 ? points[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    pathD += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  const lastX = points[points.length - 1].x;
  const areaD = `${pathD} L ${lastX.toFixed(1)} ${y0} L ${points[0].x.toFixed(1)} ${y0} Z`;

  // Grid lines
  const yTicks = [];
  for (let i = 0; i <= 4; i++) {
    const tickVal = (maxY / 4) * i;
    yTicks.push({
      y: getY(tickVal),
      label: formatCompactNPR(tickVal),
    });
  }

  const step = Math.max(1, Math.ceil(totalYears / 6));
  const xTicks = [{ year: 0, x: padLeft, label: 'Yr 0' }];
  for (let y = step; y <= totalYears; y += step) {
    xTicks.push({
      year: y,
      x: getX(y),
      label: `Yr ${y}`,
    });
  }
  if (xTicks[xTicks.length - 1].year !== totalYears) {
    xTicks.push({
      year: totalYears,
      x: getX(totalYears),
      label: `Yr ${totalYears}`,
    });
  }

  const strokeColor = isExhausted ? '#ef4444' : '#1da1f2';
  const gradStop1 = isExhausted ? '#ef4444' : '#1da1f2';

  const markers = points.map((pt) => `
    <g class="rp-chart-point" data-year="${pt.year}" data-balance="${pt.balance}" data-withdrawn="${pt.cumWithdrawn}" data-growth="${pt.cumGrowth}" tabindex="0" role="button" aria-label="Year ${pt.year} Remaining Corpus: ${formatNPR(pt.balance)}">
      <circle class="rp-point-hit" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="14" fill="transparent" />
      <circle class="rp-point-outer" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="6" fill="${isExhausted && pt.balance === 0 ? 'rgba(239,68,68,0.25)' : 'rgba(29,161,242,0.25)'}" />
      <circle class="rp-point-inner" cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.5" fill="${isExhausted && pt.balance === 0 ? '#ef4444' : '#1da1f2'}" />
    </g>
  `).join('');

  return `
    <div class="rp-growth-chart-container" id="rp-swp-chart-wrap">
      <div class="rp-chart-header">
        <div class="rp-chart-title">Corpus Trajectory Over Time</div>
        <div class="rp-chart-badges">
          <span class="rp-badge-line value-line" style="${isExhausted ? '--line-color:#ef4444' : ''}">Remaining Corpus</span>
        </div>
      </div>

      <div class="rp-chart-svg-wrapper">
        <svg class="rp-growth-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="SWP Corpus Trajectory Graph">
          <defs>
            <linearGradient id="swpAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${gradStop1}" stop-opacity="0.32" />
              <stop offset="70%" stop-color="${gradStop1}" stop-opacity="0.05" />
              <stop offset="100%" stop-color="${gradStop1}" stop-opacity="0.0" />
            </linearGradient>
            <filter id="swpLineGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="${strokeColor}" flood-opacity="0.4"/>
            </filter>
          </defs>

          <!-- Grid Lines -->
          ${yTicks.map(t => `
            <line class="rp-grid-line" x1="${padLeft}" y1="${t.y.toFixed(1)}" x2="${width - padRight}" y2="${t.y.toFixed(1)}" />
            <text class="rp-axis-text y-axis" x="${padLeft - 10}" y="${(t.y + 4).toFixed(1)}" text-anchor="end">${t.label}</text>
          `).join('')}

          <!-- X Axis Ticks -->
          ${xTicks.map(t => `
            <line class="rp-tick-line" x1="${t.x.toFixed(1)}" y1="${y0}" x2="${t.x.toFixed(1)}" y2="${y0 + 5}" />
            <text class="rp-axis-text x-axis" x="${t.x.toFixed(1)}" y="${y0 + 20}" text-anchor="middle">${t.label}</text>
          `).join('')}

          <!-- Area Fill -->
          <path class="rp-chart-area" d="${areaD}" fill="url(#swpAreaGrad)" />

          <!-- Line Curve -->
          <path class="rp-chart-line-value" d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="3" filter="url(#swpLineGlow)" />

          <!-- Markers -->
          ${markers}
        </svg>

        <div class="rp-chart-tooltip" id="rp-swp-chart-tooltip" style="display:none;"></div>
      </div>
    </div>
  `;
}

/**
 * Generate a pure SVG Doughnut Chart for Income Tax: Take-Home vs Tax Paid vs Deductions
 * @param {Object} params
 * @param {number} params.grossIncome
 * @param {number} params.totalTax
 * @param {number} params.takeHome
 * @param {number} [params.totalDeductions=0]
 * @returns {string} HTML markup
 */
export function renderTaxDonutChart({ grossIncome, totalTax, takeHome, totalDeductions = 0 }) {
  const gross = Math.max(1, grossIncome || 1);
  const tax = Math.max(0, totalTax || 0);
  const home = Math.max(0, takeHome || 0);
  const ded = Math.max(0, totalDeductions || 0);

  // Percentages relative to gross income
  const taxPct = Math.round((tax / gross) * 1000) / 10;
  const dedPct = Math.min(Math.round((ded / gross) * 1000) / 10, 100 - taxPct);
  const homePct = Math.max(0, Math.round((100 - taxPct - dedPct) * 10) / 10);

  const size = 180;
  const cx = 90;
  const cy = 90;
  const r = 64;
  const circumference = 2 * Math.PI * r;

  const homeDash = (homePct / 100) * circumference;
  const taxDash = (taxPct / 100) * circumference;
  const dedDash = (dedPct / 100) * circumference;

  const homeOffset = 0;
  const taxOffset = -homeDash;
  const dedOffset = -(homeDash + taxDash);

  return `
    <div class="rp-donut-card">
      <div class="rp-donut-chart-wrap">
        <svg class="rp-donut-svg" viewBox="0 0 ${size} ${size}" aria-label="Income and Tax Distribution">
          <defs>
            <linearGradient id="taxHomeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10B981" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
            <linearGradient id="taxPaidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F59E0B" />
              <stop offset="100%" stop-color="#D97706" />
            </linearGradient>
            <linearGradient id="taxDedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="#0284C7" />
            </linearGradient>
          </defs>

          <!-- Track Background -->
          <circle
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            stroke-width="18"
          />

          <!-- Take-Home Segment (Emerald Green) -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#taxHomeGrad)"
            stroke-width="18"
            stroke-dasharray="${homeDash} ${circumference}"
            stroke-dashoffset="${homeOffset}"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Tax Paid Segment (Amber / Orange) -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#taxPaidGrad)"
            stroke-width="18"
            stroke-dasharray="${taxDash} ${circumference}"
            stroke-dashoffset="${taxOffset}"
            transform="rotate(-90 ${cx} ${cy})"
          />

          ${dedPct > 0 ? `
            <!-- Deductions Shield Segment (Sky Blue) -->
            <circle
              class="rp-donut-segment"
              cx="${cx}" cy="${cy}" r="${r}"
              fill="none"
              stroke="url(#taxDedGrad)"
              stroke-width="18"
              stroke-dasharray="${dedDash} ${circumference}"
              stroke-dashoffset="${dedOffset}"
              transform="rotate(-90 ${cx} ${cy})"
            />
          ` : ''}

          <!-- Center Text -->
          <g class="rp-donut-center" transform="translate(${cx}, ${cy})">
            <text class="rp-donut-center-label" y="-8" text-anchor="middle">Take-Home</text>
            <text class="rp-donut-center-val" y="14" text-anchor="middle" style="fill:#10B981">${formatCompactNPR(home)}</text>
          </g>
        </svg>
      </div>

      <!-- Legend -->
      <div class="rp-donut-legend">
        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#10B981;box-shadow:0 0 6px #10B981"></span>
            <span class="rp-legend-name">Take-Home Pay</span>
            <span class="rp-legend-pct">${homePct}%</span>
          </div>
          <div class="rp-legend-amount" style="color:#10B981">${formatNPR(home)}</div>
        </div>

        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#F59E0B;box-shadow:0 0 6px #F59E0B"></span>
            <span class="rp-legend-name">Income Tax</span>
            <span class="rp-legend-pct">${taxPct}%</span>
          </div>
          <div class="rp-legend-amount" style="color:#F59E0B">${formatNPR(tax)}</div>
        </div>

        ${ded > 0 ? `
          <div class="rp-legend-item">
            <div class="rp-legend-header">
              <span class="rp-legend-dot" style="background:#0284C7;box-shadow:0 0 6px #0284C7"></span>
              <span class="rp-legend-name">Tax Deductions</span>
              <span class="rp-legend-pct">${dedPct}%</span>
            </div>
            <div class="rp-legend-amount accent">${formatNPR(ded)}</div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

/**
 * Generate a pure SVG Doughnut Chart for NEPSE Share Sell Profit & Charges Breakdown
 * @param {Object} params
 * @param {number} params.buyTotal
 * @param {number} params.totalCharges
 * @param {number} params.cgt
 * @param {number} params.netProfit
 * @returns {string} HTML markup
 */
export function renderShareProfitChart({ buyTotal, totalCharges, cgt, netProfit }) {
  const isProfitable = netProfit > 0;
  const buyCost = Math.max(1, buyTotal || 1);
  const charges = Math.max(0, totalCharges || 0);
  const tax = Math.max(0, cgt || 0);
  const profit = Math.max(0, netProfit || 0);
  const loss = netProfit < 0 ? Math.abs(netProfit) : 0;

  // Base for total pie
  const total = isProfitable
    ? buyCost + profit
    : buyCost;

  const buyPct = Math.round((Math.max(0, buyCost - charges) / total) * 1000) / 10;
  const chargesPct = Math.round((charges / total) * 1000) / 10;
  const taxPct = Math.round((tax / total) * 1000) / 10;
  const profitPct = isProfitable ? Math.max(0, Math.round((profit / total) * 1000) / 10) : 0;
  const lossPct = !isProfitable ? Math.min(100, Math.round((loss / total) * 1000) / 10) : 0;

  const size = 180;
  const cx = 90;
  const cy = 90;
  const r = 64;
  const circumference = 2 * Math.PI * r;

  // Segment dash calculations
  const buyDash = (buyPct / 100) * circumference;
  const chargesDash = (chargesPct / 100) * circumference;
  const taxDash = (taxPct / 100) * circumference;
  const profitDash = (profitPct / 100) * circumference;
  const lossDash = (lossPct / 100) * circumference;

  let currentOffset = 0;
  const buyOffset = currentOffset;
  currentOffset -= buyDash;
  const chargesOffset = currentOffset;
  currentOffset -= chargesDash;
  const taxOffset = currentOffset;
  currentOffset -= taxDash;
  const profitOffset = currentOffset;

  return `
    <div class="rp-donut-card">
      <div class="rp-donut-chart-wrap">
        <svg class="rp-donut-svg" viewBox="0 0 ${size} ${size}" aria-label="NEPSE Profit and Charges Breakdown">
          <defs>
            <linearGradient id="shareBuyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="#0284C7" />
            </linearGradient>
            <linearGradient id="shareChargesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F43F5E" />
              <stop offset="100%" stop-color="#E11D48" />
            </linearGradient>
            <linearGradient id="shareTaxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F59E0B" />
              <stop offset="100%" stop-color="#D97706" />
            </linearGradient>
            <linearGradient id="shareProfitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10B981" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
          </defs>

          <!-- Track Background -->
          <circle
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            stroke-width="18"
          />

          <!-- Principal / Net Buy Cost -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#shareBuyGrad)"
            stroke-width="18"
            stroke-dasharray="${buyDash} ${circumference}"
            stroke-dashoffset="${buyOffset}"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Charges Segment (Broker + SEBON + DP) -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none"
            stroke="url(#shareChargesGrad)"
            stroke-width="18"
            stroke-dasharray="${chargesDash} ${circumference}"
            stroke-dashoffset="${chargesOffset}"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Capital Gains Tax -->
          ${tax > 0 ? `
            <circle
              class="rp-donut-segment"
              cx="${cx}" cy="${cy}" r="${r}"
              fill="none"
              stroke="url(#shareTaxGrad)"
              stroke-width="18"
              stroke-dasharray="${taxDash} ${circumference}"
              stroke-dashoffset="${taxOffset}"
              transform="rotate(-90 ${cx} ${cy})"
            />
          ` : ''}

          <!-- Net Profit Segment -->
          ${isProfitable ? `
            <circle
              class="rp-donut-segment"
              cx="${cx}" cy="${cy}" r="${r}"
              fill="none"
              stroke="url(#shareProfitGrad)"
              stroke-width="18"
              stroke-dasharray="${profitDash} ${circumference}"
              stroke-dashoffset="${profitOffset}"
              transform="rotate(-90 ${cx} ${cy})"
            />
          ` : ''}

          <!-- Center Text -->
          <g class="rp-donut-center" transform="translate(${cx}, ${cy})">
            <text class="rp-donut-center-label" y="-8" text-anchor="middle">
              ${isProfitable ? 'Net Profit' : 'Net Outcome'}
            </text>
            <text
              class="rp-donut-center-val"
              y="14"
              text-anchor="middle"
              style="fill:${isProfitable ? '#10B981' : (netProfit < 0 ? '#EF4444' : '#ffffff')}"
            >
              ${isProfitable ? `+${formatCompactNPR(profit)}` : (netProfit < 0 ? `-${formatCompactNPR(loss)}` : 'NPR 0')}
            </text>
          </g>
        </svg>
      </div>

      <!-- Legend -->
      <div class="rp-donut-legend">
        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#0284C7;box-shadow:0 0 6px #0284C7"></span>
            <span class="rp-legend-name">Purchase Cost</span>
          </div>
          <div class="rp-legend-amount accent">${formatNPR(buyCost)}</div>
        </div>

        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#E11D48;box-shadow:0 0 6px #E11D48"></span>
            <span class="rp-legend-name">Trading Charges (Broker+SEBON+DP)</span>
          </div>
          <div class="rp-legend-amount" style="color:#F43F5E">${formatNPR(charges)}</div>
        </div>

        ${tax > 0 ? `
          <div class="rp-legend-item">
            <div class="rp-legend-header">
              <span class="rp-legend-dot" style="background:#F59E0B;box-shadow:0 0 6px #F59E0B"></span>
              <span class="rp-legend-name">Capital Gains Tax (CGT)</span>
            </div>
            <div class="rp-legend-amount" style="color:#F59E0B">${formatNPR(tax)}</div>
          </div>
        ` : ''}

        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:${isProfitable ? '#10B981' : '#EF4444'};box-shadow:0 0 6px ${isProfitable ? '#10B981' : '#EF4444'}"></span>
            <span class="rp-legend-name">${isProfitable ? 'Net Profit' : 'Net Loss'}</span>
          </div>
          <div class="rp-legend-amount" style="color:${isProfitable ? '#10B981' : '#EF4444'}">
            ${isProfitable ? `+${formatNPR(profit)}` : (netProfit < 0 ? `-${formatNPR(loss)}` : 'NPR 0')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render pure SVG Line Chart for FD Principal vs Balance Growth over time
 * @param {Object} params
 * @param {Array<{ year: number, balance: number, principal: number }>} params.milestones
 * @param {number} params.principal
 * @param {number} params.netMaturity
 * @returns {string} HTML markup
 */
export function renderFDGrowthChart({ milestones, principal, netMaturity }) {
  if (!milestones || milestones.length < 2) {
    return `<div class="rp-chart-card"><p class="text-center">Deposit period too short for growth trajectory.</p></div>`;
  }

  const width = 540;
  const height = 240;
  const padLeft = 65;
  const padRight = 25;
  const padTop = 25;
  const padBottom = 35;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const maxVal = Math.max(netMaturity * 1.05, principal * 1.1, 1000);
  const minVal = principal * 0.95;

  const totalYears = milestones[milestones.length - 1].year || 1;

  function getX(yr) {
    return padLeft + (yr / totalYears) * chartW;
  }

  function getY(val) {
    const range = maxVal - minVal || 1;
    const norm = (val - minVal) / range;
    return padTop + (1 - norm) * chartH;
  }

  // Generate path points
  const points = milestones.map(m => `${getX(m.year).toFixed(1)},${getY(m.balance).toFixed(1)}`);
  const lineD = `M ${points.join(' L ')}`;

  const areaD = `M ${getX(0).toFixed(1)},${getY(principal).toFixed(1)} L ${points.join(' L ')} L ${getX(totalYears).toFixed(1)},${getY(principal).toFixed(1)} Z`;

  const principalY = getY(principal).toFixed(1);

  // Gridlines
  const yTicks = [minVal, (minVal + maxVal) / 2, maxVal];

  return `
    <div class="rp-chart-card">
      <div class="rp-chart-header">
        <h4 class="rp-chart-title">FD Growth Trajectory</h4>
        <div class="rp-chart-badges">
          <span class="rp-chart-badge" style="background:rgba(56,189,248,0.15);color:#38BDF8">Principal Base</span>
          <span class="rp-chart-badge" style="background:rgba(16,185,129,0.15);color:#10B981">Compound Growth</span>
        </div>
      </div>
      <div class="rp-chart-wrap">
        <svg class="rp-line-svg" viewBox="0 0 ${width} ${height}" aria-label="FD Growth Curve">
          <defs>
            <linearGradient id="fdAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#10B981" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#10B981" stop-opacity="0.02" />
            </linearGradient>
            <linearGradient id="fdLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="#10B981" />
            </linearGradient>
          </defs>

          <!-- Horizontal Gridlines -->
          ${yTicks.map(t => {
            const y = getY(t).toFixed(1);
            return `
              <line x1="${padLeft}" y1="${y}" x2="${width - padRight}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
              <text x="${padLeft - 8}" y="${Number(y) + 4}" fill="#8EA0B6" font-size="12" font-family="var(--font-mono)" text-anchor="end">${formatCompactNPR(t)}</text>
            `;
          }).join('')}

          <!-- Principal Baseline -->
          <line
            x1="${padLeft}" y1="${principalY}"
            x2="${width - padRight}" y2="${principalY}"
            stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4"
            opacity="0.6"
          />

          <!-- Area under Growth Curve -->
          <path d="${areaD}" fill="url(#fdAreaGrad)" />

          <!-- Growth Curve Line -->
          <path d="${lineD}" fill="none" stroke="url(#fdLineGrad)" stroke-width="2.5" stroke-linecap="round" />

          <!-- Milestone Circles -->
          ${milestones.map(m => `
            <circle cx="${getX(m.year).toFixed(1)}" cy="${getY(m.balance).toFixed(1)}" r="4" fill="#10B981" stroke="#050B18" stroke-width="2" />
          `).join('')}

          <!-- X Axis Labels -->
          ${milestones.filter((_, idx) => idx === 0 || idx === milestones.length - 1 || idx % Math.ceil(milestones.length / 5) === 0).map(m => `
            <text x="${getX(m.year).toFixed(1)}" y="${height - 12}" fill="#8EA0B6" font-size="12" text-anchor="middle">
              ${m.year === 0 ? 'Start' : `Yr ${m.year}`}
            </text>
          `).join('')}
        </svg>
      </div>
    </div>
  `;
}

/**
 * Render pure SVG Doughnut Chart for FD Principal vs Interest vs TDS
 * @param {Object} params
 * @param {number} params.principal
 * @param {number} params.netInterest
 * @param {number} params.tds
 * @returns {string} HTML markup
 */
export function renderFDDonutChart({ principal, netInterest, tds }) {
  const p = Math.max(1, principal || 1);
  const int = Math.max(0, netInterest || 0);
  const tax = Math.max(0, tds || 0);
  const total = p + int + tax;

  const pPct = Math.round((p / total) * 1000) / 10;
  const intPct = Math.round((int / total) * 1000) / 10;
  const taxPct = Math.round((tax / total) * 1000) / 10;

  const size = 180;
  const cx = 90;
  const cy = 90;
  const r = 64;
  const circumference = 2 * Math.PI * r;

  const pDash = (pPct / 100) * circumference;
  const intDash = (intPct / 100) * circumference;
  const taxDash = (taxPct / 100) * circumference;

  let currentOffset = 0;
  const pOffset = currentOffset;
  currentOffset -= pDash;
  const intOffset = currentOffset;
  currentOffset -= intDash;
  const taxOffset = currentOffset;

  return `
    <div class="rp-donut-card">
      <div class="rp-donut-chart-wrap">
        <svg class="rp-donut-svg" viewBox="0 0 ${size} ${size}" aria-label="FD Maturity Breakdown">
          <defs>
            <linearGradient id="fdPrinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="#0284C7" />
            </linearGradient>
            <linearGradient id="fdIntGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10B981" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
            <linearGradient id="fdTdsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F59E0B" />
              <stop offset="100%" stop-color="#D97706" />
            </linearGradient>
          </defs>

          <!-- Track -->
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="18" />

          <!-- Principal -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none" stroke="url(#fdPrinGrad)" stroke-width="18"
            stroke-dasharray="${pDash} ${circumference}"
            stroke-dashoffset="${pOffset}"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- Net Interest -->
          <circle
            class="rp-donut-segment"
            cx="${cx}" cy="${cy}" r="${r}"
            fill="none" stroke="url(#fdIntGrad)" stroke-width="18"
            stroke-dasharray="${intDash} ${circumference}"
            stroke-dashoffset="${intOffset}"
            transform="rotate(-90 ${cx} ${cy})"
          />

          <!-- TDS Tax -->
          ${tax > 0 ? `
            <circle
              class="rp-donut-segment"
              cx="${cx}" cy="${cy}" r="${r}"
              fill="none" stroke="url(#fdTdsGrad)" stroke-width="18"
              stroke-dasharray="${taxDash} ${circumference}"
              stroke-dashoffset="${taxOffset}"
              transform="rotate(-90 ${cx} ${cy})"
            />
          ` : ''}

          <!-- Center Text -->
          <g class="rp-donut-center" transform="translate(${cx}, ${cy})">
            <text class="rp-donut-center-label" y="-8" text-anchor="middle">Net Maturity</text>
            <text class="rp-donut-center-val" y="14" text-anchor="middle" style="fill:#10B981">
              ${formatCompactNPR(p + int)}
            </text>
          </g>
        </svg>
      </div>

      <!-- Legend -->
      <div class="rp-donut-legend">
        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#0284C7;box-shadow:0 0 6px #0284C7"></span>
            <span class="rp-legend-name">Principal Deposited</span>
            <span class="rp-legend-pct">${pPct}%</span>
          </div>
          <div class="rp-legend-amount accent">${formatNPR(p)}</div>
        </div>

        <div class="rp-legend-item">
          <div class="rp-legend-header">
            <span class="rp-legend-dot" style="background:#10B981;box-shadow:0 0 6px #10B981"></span>
            <span class="rp-legend-name">Net Interest Earned</span>
            <span class="rp-legend-pct">${intPct}%</span>
          </div>
          <div class="rp-legend-amount" style="color:#10B981">${formatNPR(int)}</div>
        </div>

        ${tax > 0 ? `
          <div class="rp-legend-item">
            <div class="rp-legend-header">
              <span class="rp-legend-dot" style="background:#F59E0B;box-shadow:0 0 6px #F59E0B"></span>
              <span class="rp-legend-name">Interest Tax (TDS)</span>
              <span class="rp-legend-pct">${taxPct}%</span>
            </div>
            <div class="rp-legend-amount" style="color:#F59E0B">${formatNPR(tax)}</div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

/**
 * Render pure SVG Dual-Line Chart for Retirement Living Expenses & Corpus Trajectory
 * @param {Object} params
 * @param {Array<{ age: number, year: number, monthlyExpense: number, accumulatedCorpus: number }>} params.milestones
 * @param {number} params.currentExpenses
 * @param {number} params.futureExpenses
 * @param {number} params.corpus
 * @returns {string} HTML markup
 */
export function renderRetirementChart({ milestones, corpus }) {
  if (!milestones || milestones.length < 2) {
    return `<div class="rp-chart-card"><p class="text-center">Timeline too short for retirement trajectory.</p></div>`;
  }

  const width = 540;
  const height = 240;
  const padLeft = 65;
  const padRight = 25;
  const padTop = 25;
  const padBottom = 35;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const maxCorpus = Math.max(corpus * 1.05, 100000);
  const totalYears = milestones[milestones.length - 1].year || 1;

  function getX(yr) {
    return padLeft + (yr / totalYears) * chartW;
  }

  function getYCorpus(val) {
    const norm = Math.min(1, Math.max(0, val / maxCorpus));
    return padTop + (1 - norm) * chartH;
  }

  // Generate Corpus line path
  const corpusPoints = milestones.map(m => `${getX(m.year).toFixed(1)},${getYCorpus(m.accumulatedCorpus).toFixed(1)}`);
  const corpusLineD = `M ${corpusPoints.join(' L ')}`;
  const corpusAreaD = `M ${getX(0).toFixed(1)},${(padTop + chartH).toFixed(1)} L ${corpusPoints.join(' L ')} L ${getX(totalYears).toFixed(1)},${(padTop + chartH).toFixed(1)} Z`;

  // Gridlines
  const yTicks = [0, maxCorpus * 0.5, maxCorpus];

  return `
    <div class="rp-chart-card">
      <div class="rp-chart-header">
        <h4 class="rp-chart-title">Retirement Corpus Accumulation Trajectory</h4>
        <div class="rp-chart-badges">
          <span class="rp-chart-badge" style="background:rgba(16,185,129,0.15);color:#10B981">Target Corpus</span>
          <span class="rp-chart-badge" style="background:rgba(245,158,11,0.15);color:#F59E0B">Inflation Escalation</span>
        </div>
      </div>
      <div class="rp-chart-wrap">
        <svg class="rp-line-svg" viewBox="0 0 ${width} ${height}" aria-label="Retirement Corpus Accumulation">
          <defs>
            <linearGradient id="retireAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#10B981" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#10B981" stop-opacity="0.02" />
            </linearGradient>
            <linearGradient id="retireLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="#10B981" />
            </linearGradient>
          </defs>

          <!-- Horizontal Gridlines -->
          ${yTicks.map(t => {
            const y = getYCorpus(t).toFixed(1);
            return `
              <line x1="${padLeft}" y1="${y}" x2="${width - padRight}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
              <text x="${padLeft - 8}" y="${Number(y) + 4}" fill="#8EA0B6" font-size="12" font-family="var(--font-mono)" text-anchor="end">${formatCompactNPR(t)}</text>
            `;
          }).join('')}

          <!-- Corpus Area Fill -->
          <path d="${corpusAreaD}" fill="url(#retireAreaGrad)" />

          <!-- Corpus Line -->
          <path d="${corpusLineD}" fill="none" stroke="url(#retireLineGrad)" stroke-width="2.5" stroke-linecap="round" />

          <!-- Milestone Circles -->
          ${milestones.map(m => `
            <circle cx="${getX(m.year).toFixed(1)}" cy="${getYCorpus(m.accumulatedCorpus).toFixed(1)}" r="4" fill="#10B981" stroke="#050B18" stroke-width="2" />
          `).join('')}

          <!-- X Axis Age Labels -->
          ${milestones.map(m => `
            <text x="${getX(m.year).toFixed(1)}" y="${height - 12}" fill="#8EA0B6" font-size="12" text-anchor="middle">
              Age ${m.age}
            </text>
          `).join('')}
        </svg>
      </div>
    </div>
  `;
}

/**
 * Render pure SVG Goal Progress Graphic
 * @param {Object} params
 * @param {number} params.targetAmount
 * @param {number} params.currentSavings
 * @param {number} params.fvSavings
 * @param {number} params.totalFreshSIP
 * @param {number} params.totalGrowth
 * @returns {string} HTML markup
 */
export function renderGoalProgressBar({ targetAmount, currentSavings, fvSavings, totalFreshSIP, totalGrowth }) {
  const target = Math.max(1, targetAmount || 1);
  const savings = Math.max(0, currentSavings || 0);
  const savingsG = Math.max(0, fvSavings - savings);
  const fresh = Math.max(0, totalFreshSIP || 0);
  const sipG = Math.max(0, totalGrowth - savingsG);

  const savingsPct = Math.min(100, Math.round((savings / target) * 1000) / 10);
  const savingsGPct = Math.min(100 - savingsPct, Math.round((savingsG / target) * 1000) / 10);
  const freshPct = Math.min(100 - savingsPct - savingsGPct, Math.round((fresh / target) * 1000) / 10);
  const sipGPct = Math.max(0, Math.round((100 - savingsPct - savingsGPct - freshPct) * 10) / 10);

  return `
    <div class="rp-goal-progress-wrap">
      <div class="rp-goal-progress-header">
        <span class="rp-stat-label">Goal Target Composition</span>
        <span class="rp-badge rp-badge-pulse">100% Target Met</span>
      </div>

      <!-- Segmented Bar -->
      <div class="rp-goal-bar-track">
        <div class="rp-goal-bar-seg" style="width:${savingsPct}%;background:#38BDF8;" title="Existing Savings: ${formatNPR(savings)} (${savingsPct}%)"></div>
        <div class="rp-goal-bar-seg" style="width:${savingsGPct}%;background:#06B6D4;" title="Existing Savings Growth: ${formatNPR(savingsG)} (${savingsGPct}%)"></div>
        <div class="rp-goal-bar-seg" style="width:${freshPct}%;background:#818CF8;" title="Monthly Contributions: ${formatNPR(fresh)} (${freshPct}%)"></div>
        <div class="rp-goal-bar-seg" style="width:${sipGPct}%;background:#10B981;" title="Investment Compound Growth: ${formatNPR(sipG)} (${sipGPct}%)"></div>
      </div>

      <!-- Legend -->
      <div class="rp-goal-legend-grid">
        <div class="rp-goal-legend-item">
          <span class="rp-legend-dot" style="background:#38BDF8"></span>
          <span class="rp-legend-name">Current Savings</span>
          <span class="rp-legend-amount">${formatNPR(savings)}</span>
        </div>
        <div class="rp-goal-legend-item">
          <span class="rp-legend-dot" style="background:#06B6D4"></span>
          <span class="rp-legend-name">Savings Growth</span>
          <span class="rp-legend-amount">${formatNPR(savingsG)}</span>
        </div>
        <div class="rp-goal-legend-item">
          <span class="rp-legend-dot" style="background:#818CF8"></span>
          <span class="rp-legend-name">Fresh Monthly SIP</span>
          <span class="rp-legend-amount">${formatNPR(fresh)}</span>
        </div>
        <div class="rp-goal-legend-item">
          <span class="rp-legend-dot" style="background:#10B981"></span>
          <span class="rp-legend-name">SIP Compound Growth</span>
          <span class="rp-legend-amount" style="color:#10B981">${formatNPR(sipG)}</span>
        </div>
      </div>
    </div>
  `;
}

// ── CAGR (Compound Annual Growth Rate) Charts ───────────────

/**
 * Render pure SVG Line Chart showing Investment Growth Over Time
 * 
 * @param {Object} params
 * @param {Array} params.growthPoints - Array of { time, yearLabel, value, profit }
 * @param {number} params.beginningValue
 * @param {number} params.endingValue
 * @param {number} params.totalYears
 * @returns {string} HTML markup
 */
export function renderCAGRGrowthChart({ growthPoints, beginningValue, endingValue, totalYears }) {
  if (!growthPoints || growthPoints.length === 0) {
    return `<div class="rp-chart-empty">No CAGR trajectory data available</div>`;
  }

  const width = 720;
  const height = 280;
  const padLeft = 75;
  const padRight = 35;
  const padTop = 32;
  const padBottom = 42;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const maxY = Math.max(1, Math.max(beginningValue, endingValue) * 1.15);
  const tTotal = Math.max(0.1, totalYears || 1);

  const getX = (t) => padLeft + (t / tTotal) * chartW;
  const getY = (val) => padTop + chartH - (Math.max(0, val) / maxY) * chartH;
  const y0 = padTop + chartH;

  const pts = growthPoints.map(p => ({
    x: getX(p.time),
    y: getY(p.value),
    time: p.time,
    label: p.yearLabel,
    value: p.value,
    profit: p.profit,
  }));

  // Cubic bezier path
  let pathD = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = i > 0 ? pts[i - 1] : pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = i < pts.length - 2 ? pts[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    pathD += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  const areaD = `${pathD} L ${pts[pts.length - 1].x.toFixed(1)} ${y0} L ${pts[0].x.toFixed(1)} ${y0} Z`;

  // Grid ticks
  const yTicks = [
    { val: maxY * 0.25, y: getY(maxY * 0.25) },
    { val: maxY * 0.5, y: getY(maxY * 0.5) },
    { val: maxY * 0.75, y: getY(maxY * 0.75) },
    { val: maxY, y: getY(maxY) },
  ];

  const isGain = endingValue >= beginningValue;
  const strokeColor = isGain ? '#10B981' : '#EF4444';
  const gradStart = isGain ? 'rgba(16, 185, 129, 0.35)' : 'rgba(239, 68, 68, 0.35)';

  return `
    <div class="rp-chart-container" id="cagr-line-chart-wrap">
      <div class="rp-chart-header">
        <div class="rp-chart-title-group">
          <h4 class="rp-chart-title">Investment Compounding Curve</h4>
          <span class="rp-chart-sub">Annualized geometric asset growth over ${tTotal.toFixed(1)} Years</span>
        </div>
        <div class="rp-chart-badge" style="background:${isGain ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'};color:${strokeColor}">
          ${isGain ? 'Compound Wealth Accumulation' : 'Investment Decline'}
        </div>
      </div>

      <div class="rp-svg-wrap" style="position:relative">
        <svg class="rp-svg-chart" viewBox="0 0 ${width} ${height}" aria-label="CAGR Growth Chart">
          <defs>
            <linearGradient id="cagrAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="${gradStart}" />
              <stop offset="100%" stop-color="rgba(16, 185, 129, 0.0)" />
            </linearGradient>
            <linearGradient id="cagrLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="${strokeColor}" />
            </linearGradient>
          </defs>

          <!-- Horizontal Gridlines & Y-Axis Labels -->
          ${yTicks.map(t => `
            <line x1="${padLeft}" y1="${t.y.toFixed(1)}" x2="${width - padRight}" y2="${t.y.toFixed(1)}" stroke="rgba(255, 255, 255, 0.05)" stroke-dasharray="4 4" />
            <text x="${padLeft - 10}" y="${(t.y + 4).toFixed(1)}" fill="var(--color-text-secondary)" font-size="12" text-anchor="end" font-family="var(--font-mono)">
              ${formatCompactNPR(t.val)}
            </text>
          `).join('')}

          <!-- Base zero axis -->
          <line x1="${padLeft}" y1="${y0}" x2="${width - padRight}" y2="${y0}" stroke="rgba(255, 255, 255, 0.12)" />

          <!-- Gradient Area -->
          <path d="${areaD}" fill="url(#cagrAreaGrad)" />

          <!-- Compounding Curve Line -->
          <path d="${pathD}" fill="none" stroke="url(#cagrLineGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

          <!-- X-Axis Labels -->
          ${pts.map((p, idx) => {
            if (idx === 0 || idx === pts.length - 1 || idx === Math.floor(pts.length / 2)) {
              return `
                <text x="${p.x.toFixed(1)}" y="${y0 + 20}" fill="var(--color-text-secondary)" font-size="12" text-anchor="middle" font-family="var(--font-mono)">
                  ${p.label}
                </text>
              `;
            }
            return '';
          }).join('')}

          <!-- Interactive Points -->
          ${pts.map(p => `
            <circle
              class="rp-chart-point rp-cagr-point"
              cx="${p.x.toFixed(1)}"
              cy="${p.y.toFixed(1)}"
              r="4.5"
              fill="#0d1b3e"
              stroke="${strokeColor}"
              stroke-width="2.5"
              tabindex="0"
              data-time="${p.time}"
              data-label="${p.label}"
              data-value="${p.value}"
              data-profit="${p.profit}"
              aria-label="${p.label}: ${formatNPR(p.value)}"
            />
          `).join('')}
        </svg>

        <!-- Floating Tooltip -->
        <div class="rp-chart-tooltip" id="rp-cagr-chart-tooltip" style="display:none;position:absolute;pointer-events:none;z-index:20;"></div>
      </div>
    </div>
  `;
}

/**
 * Render pure SVG Bar Chart comparing Beginning Value vs Profit vs Total Value
 * 
 * @param {Object} params
 * @param {number} params.beginningValue
 * @param {number} params.absoluteProfit
 * @param {number} params.endingValue
 * @returns {string} HTML markup
 */
export function renderCAGRBarChart({ beginningValue, absoluteProfit, endingValue }) {
  const BV = Math.max(0, Number(beginningValue) || 0);
  const profit = Number(absoluteProfit) || 0;
  const EV = Math.max(0, Number(endingValue) || 0);

  const isGain = profit >= 0;
  const maxBarVal = Math.max(1, Math.max(BV, EV, Math.abs(profit)) * 1.2);

  const width = 720;
  const height = 190;
  const padLeft = 60;
  const padRight = 40;
  const padTop = 30;
  const padBottom = 35;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const bars = [
    {
      label: 'Initial Principal',
      value: BV,
      color: '#38BDF8',
      gradId: 'bvBarGrad',
      gradColor1: '#38BDF8',
      gradColor2: '#0284C7',
      sub: 'Beginning Capital',
    },
    {
      label: isGain ? 'Absolute Profit' : 'Absolute Loss',
      value: Math.abs(profit),
      color: isGain ? '#10B981' : '#EF4444',
      gradId: 'profitBarGrad',
      gradColor1: isGain ? '#34D399' : '#F87171',
      gradColor2: isGain ? '#059669' : '#DC2626',
      sub: isGain ? 'Net Capital Growth' : 'Loss of Capital',
    },
    {
      label: 'Ending Value',
      value: EV,
      color: '#818CF8',
      gradId: 'evBarGrad',
      gradColor1: '#A5B4FC',
      gradColor2: '#6366F1',
      sub: 'Final Portfolio',
    },
  ];

  const barCount = bars.length;
  const slotW = chartW / barCount;
  const barW = Math.min(90, slotW * 0.55);

  return `
    <div class="rp-chart-container" id="cagr-bar-chart-wrap" style="margin-top:var(--space-6)">
      <div class="rp-chart-header">
        <div class="rp-chart-title-group">
          <h4 class="rp-chart-title">Capital vs Return Breakdown</h4>
          <span class="rp-chart-sub">Visual distribution of starting capital and compounded returns</span>
        </div>
      </div>

      <div class="rp-svg-wrap">
        <svg class="rp-svg-chart" viewBox="0 0 ${width} ${height}" aria-label="Beginning Value vs Profit Bar Chart">
          <defs>
            ${bars.map(b => `
              <linearGradient id="${b.gradId}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="${b.gradColor1}" />
                <stop offset="100%" stop-color="${b.gradColor2}" />
              </linearGradient>
            `).join('')}
          </defs>

          <!-- Baseline -->
          <line x1="${padLeft}" y1="${padTop + chartH}" x2="${width - padRight}" y2="${padTop + chartH}" stroke="rgba(255, 255, 255, 0.12)" />

          <!-- Bars -->
          ${bars.map((b, i) => {
            const barH = Math.max(4, (b.value / maxBarVal) * chartH);
            const x = padLeft + i * slotW + (slotW - barW) / 2;
            const y = padTop + chartH - barH;

            return `
              <g class="rp-cagr-bar-group">
                <!-- Value Label Above Bar -->
                <text x="${(x + barW / 2).toFixed(1)}" y="${(y - 8).toFixed(1)}" fill="${b.color}" font-size="13" font-weight="600" text-anchor="middle" font-family="var(--font-mono)">
                  ${formatCompactNPR(b.value)}
                </text>

                <!-- Bar Rect -->
                <rect
                  x="${x.toFixed(1)}"
                  y="${y.toFixed(1)}"
                  width="${barW.toFixed(1)}"
                  height="${barH.toFixed(1)}"
                  rx="6"
                  fill="url(#${b.gradId})"
                  opacity="0.9"
                />

                <!-- Category Label Below Bar -->
                <text x="${(x + barW / 2).toFixed(1)}" y="${padTop + chartH + 20}" fill="var(--color-text-secondary)" font-size="12" font-weight="500" text-anchor="middle">
                  ${b.label}
                </text>
              </g>
            `;
          }).join('')}
        </svg>
      </div>

      <!-- Quick Summary Legend -->
      <div class="rp-cagr-bar-legend">
        ${bars.map(b => `
          <div class="rp-cagr-legend-item">
            <span class="rp-legend-dot" style="background:${b.color};box-shadow:0 0 8px ${b.color}"></span>
            <span class="rp-legend-name">${b.label}:</span>
            <span class="rp-legend-amount" style="color:${b.color}">${formatNPR(b.value)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── Nepal Inflation & Purchasing Power Charts ───────────────

/**
 * Render pure SVG Bar Chart comparing Current Value vs Inflation Added vs Future Cost
 * 
 * @param {Object} params
 * @param {number} params.presentValue
 * @param {number} params.inflationIncrease
 * @param {number} params.futureCost
 * @returns {string} HTML markup
 */
export function renderInflationBarChart({ presentValue, inflationIncrease, futureCost }) {
  const PV = Math.max(0, Number(presentValue) || 0);
  const inc = Math.max(0, Number(inflationIncrease) || 0);
  const FV = Math.max(0, Number(futureCost) || 0);

  const maxVal = Math.max(1, FV * 1.18);

  const width = 720;
  const height = 190;
  const padLeft = 60;
  const padRight = 40;
  const padTop = 30;
  const padBottom = 35;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const bars = [
    {
      label: "Today's Cost",
      value: PV,
      color: '#38BDF8',
      gradId: 'infPvGrad',
      gradColor1: '#38BDF8',
      gradColor2: '#0284C7',
      sub: 'Base Purchasing Amount',
    },
    {
      label: 'Added by Inflation',
      value: inc,
      color: '#F59E0B',
      gradId: 'infIncGrad',
      gradColor1: '#FBBF24',
      gradColor2: '#D97706',
      sub: 'Purchasing Loss Penalty',
    },
    {
      label: 'Future Cost',
      value: FV,
      color: '#EF4444',
      gradId: 'infFvGrad',
      gradColor1: '#F87171',
      gradColor2: '#DC2626',
      sub: 'Future Equivalent Price',
    },
  ];

  const slotW = chartW / bars.length;
  const barW = Math.min(90, slotW * 0.55);

  return `
    <div class="rp-chart-container" id="inflation-bar-chart-wrap">
      <div class="rp-chart-header">
        <div class="rp-chart-title-group">
          <h4 class="rp-chart-title">Current Cost vs Future Cost</h4>
          <span class="rp-chart-sub">Visual price escalation caused by compound annual inflation</span>
        </div>
      </div>

      <div class="rp-svg-wrap">
        <svg class="rp-svg-chart" viewBox="0 0 ${width} ${height}" aria-label="Current Value vs Future Cost Bar Chart">
          <defs>
            ${bars.map(b => `
              <linearGradient id="${b.gradId}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="${b.gradColor1}" />
                <stop offset="100%" stop-color="${b.gradColor2}" />
              </linearGradient>
            `).join('')}
          </defs>

          <!-- Baseline -->
          <line x1="${padLeft}" y1="${padTop + chartH}" x2="${width - padRight}" y2="${padTop + chartH}" stroke="rgba(255, 255, 255, 0.12)" />

          <!-- Bars -->
          ${bars.map((b, i) => {
            const barH = Math.max(4, (b.value / maxVal) * chartH);
            const x = padLeft + i * slotW + (slotW - barW) / 2;
            const y = padTop + chartH - barH;

            return `
              <g class="rp-cagr-bar-group">
                <text x="${(x + barW / 2).toFixed(1)}" y="${(y - 8).toFixed(1)}" fill="${b.color}" font-size="13" font-weight="600" text-anchor="middle" font-family="var(--font-mono)">
                  ${formatCompactNPR(b.value)}
                </text>

                <rect
                  x="${x.toFixed(1)}"
                  y="${y.toFixed(1)}"
                  width="${barW.toFixed(1)}"
                  height="${barH.toFixed(1)}"
                  rx="6"
                  fill="url(#${b.gradId})"
                  opacity="0.9"
                />

                <text x="${(x + barW / 2).toFixed(1)}" y="${padTop + chartH + 20}" fill="var(--color-text-secondary)" font-size="12" font-weight="500" text-anchor="middle">
                  ${b.label}
                </text>
              </g>
            `;
          }).join('')}
        </svg>
      </div>

      <!-- Quick Summary Legend -->
      <div class="rp-cagr-bar-legend">
        ${bars.map(b => `
          <div class="rp-cagr-legend-item">
            <span class="rp-legend-dot" style="background:${b.color};box-shadow:0 0 8px ${b.color}"></span>
            <span class="rp-legend-name">${b.label}:</span>
            <span class="rp-legend-amount" style="color:${b.color}">${formatNPR(b.value)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Render pure SVG Line Chart showing Purchasing Power Erosion Over Time
 * 
 * @param {Object} params
 * @param {Array} params.curvePoints - Array of { time, yearLabel, futureCost, purchasingPower, purchasingPowerPct }
 * @param {number} params.presentValue
 * @param {number} params.futurePurchasingPower
 * @param {number} params.totalYears
 * @returns {string} HTML markup
 */
export function renderPurchasingPowerChart({ curvePoints, presentValue, futurePurchasingPower, totalYears }) {
  if (!curvePoints || curvePoints.length === 0) {
    return `<div class="rp-chart-empty">No purchasing power curve data available</div>`;
  }

  const width = 720;
  const height = 280;
  const padLeft = 75;
  const padRight = 35;
  const padTop = 32;
  const padBottom = 42;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const maxY = Math.max(1, presentValue * 1.15);
  const tTotal = Math.max(0.1, totalYears || 1);

  const getX = (t) => padLeft + (t / tTotal) * chartW;
  const getY = (val) => padTop + chartH - (Math.max(0, val) / maxY) * chartH;
  const y0 = padTop + chartH;

  const pts = curvePoints.map(p => ({
    x: getX(p.time),
    y: getY(p.purchasingPower),
    time: p.time,
    label: p.yearLabel,
    purchasingPower: p.purchasingPower,
    pct: p.purchasingPowerPct,
    futureCost: p.futureCost,
  }));

  // Cubic bezier path
  let pathD = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = i > 0 ? pts[i - 1] : pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = i < pts.length - 2 ? pts[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    pathD += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  const areaD = `${pathD} L ${pts[pts.length - 1].x.toFixed(1)} ${y0} L ${pts[0].x.toFixed(1)} ${y0} Z`;

  // Grid ticks
  const yTicks = [
    { val: maxY * 0.25, y: getY(maxY * 0.25) },
    { val: maxY * 0.5, y: getY(maxY * 0.5) },
    { val: maxY * 0.75, y: getY(maxY * 0.75) },
    { val: maxY, y: getY(maxY) },
  ];

  return `
    <div class="rp-chart-container" id="purchasing-power-chart-wrap" style="margin-top:var(--space-6)">
      <div class="rp-chart-header">
        <div class="rp-chart-title-group">
          <h4 class="rp-chart-title">Purchasing Power Erosion Over Time</h4>
          <span class="rp-chart-sub">Real value of today's ${formatNPR(presentValue)} decaying over ${tTotal.toFixed(1)} Years</span>
        </div>
        <div class="rp-chart-badge" style="background:rgba(239,68,68,0.15);color:#EF4444">
          Purchasing Power Decay
        </div>
      </div>

      <div class="rp-svg-wrap" style="position:relative">
        <svg class="rp-svg-chart" viewBox="0 0 ${width} ${height}" aria-label="Purchasing Power Erosion Chart">
          <defs>
            <linearGradient id="infPowerAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(245, 158, 11, 0.35)" />
              <stop offset="100%" stop-color="rgba(239, 68, 68, 0.0)" />
            </linearGradient>
            <linearGradient id="infPowerLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38BDF8" />
              <stop offset="100%" stop-color="#EF4444" />
            </linearGradient>
          </defs>

          <!-- Horizontal Gridlines & Y-Axis Labels -->
          ${yTicks.map(t => `
            <line x1="${padLeft}" y1="${t.y.toFixed(1)}" x2="${width - padRight}" y2="${t.y.toFixed(1)}" stroke="rgba(255, 255, 255, 0.05)" stroke-dasharray="4 4" />
            <text x="${padLeft - 10}" y="${(t.y + 4).toFixed(1)}" fill="var(--color-text-secondary)" font-size="12" text-anchor="end" font-family="var(--font-mono)">
              ${formatCompactNPR(t.val)}
            </text>
          `).join('')}

          <!-- Base zero axis -->
          <line x1="${padLeft}" y1="${y0}" x2="${width - padRight}" y2="${y0}" stroke="rgba(255, 255, 255, 0.12)" />

          <!-- Gradient Area -->
          <path d="${areaD}" fill="url(#infPowerAreaGrad)" />

          <!-- Erosion Curve Line -->
          <path d="${pathD}" fill="none" stroke="url(#infPowerLineGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

          <!-- X-Axis Labels -->
          ${pts.map((p, idx) => {
            if (idx === 0 || idx === pts.length - 1 || idx === Math.floor(pts.length / 2)) {
              return `
                <text x="${p.x.toFixed(1)}" y="${y0 + 20}" fill="var(--color-text-secondary)" font-size="12" text-anchor="middle" font-family="var(--font-mono)">
                  ${p.label}
                </text>
              `;
            }
            return '';
          }).join('')}

          <!-- Interactive Points -->
          ${pts.map(p => `
            <circle
              class="rp-chart-point rp-inf-point"
              cx="${p.x.toFixed(1)}"
              cy="${p.y.toFixed(1)}"
              r="4.5"
              fill="#0d1b3e"
              stroke="#F59E0B"
              stroke-width="2.5"
              tabindex="0"
              data-time="${p.time}"
              data-label="${p.label}"
              data-power="${p.purchasingPower}"
              data-pct="${p.pct}"
              data-futurecost="${p.futureCost}"
              aria-label="${p.label}: ${formatNPR(p.purchasingPower)} (${p.pct}%)"
            />
          `).join('')}
        </svg>

        <!-- Floating Tooltip -->
        <div class="rp-chart-tooltip" id="rp-inf-chart-tooltip" style="display:none;position:absolute;pointer-events:none;z-index:20;"></div>
      </div>
    </div>
  `;
}

/**
 * Intelligently positions a chart tooltip so that on mobile (< 768px) and all screen sizes,
 * it always remains completely inside the visible viewport and never overflows or gets clipped.
 * 
 * @param {HTMLElement} tooltip - The tooltip DOM element (.rp-chart-tooltip)
 * @param {Element} targetPoint - The hovered / touched SVG chart point (.rp-chart-point)
 * @param {HTMLElement} [container] - The chart wrapper container (defaults to tooltip.offsetParent)
 * @param {Object} [options] - Additional positioning options
 */
export function positionChartTooltip(tooltip, targetPoint, container, options = {}) {
  if (!tooltip || !targetPoint) return;

  // Make sure tooltip is rendered in DOM layout to measure bounding box accurately
  tooltip.style.display = 'block';

  const isMobile = window.innerWidth < 768;
  const offsetParent = tooltip.offsetParent || container || tooltip.parentElement || document.body;
  const parentRect = offsetParent.getBoundingClientRect();
  const ptRect = targetPoint.getBoundingClientRect();
  const ttRect = tooltip.getBoundingClientRect();
  
  const ttWidth = ttRect.width || tooltip.offsetWidth || 200;
  const ttHeight = ttRect.height || tooltip.offsetHeight || 90;
  
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const vh = window.innerHeight || document.documentElement.clientHeight;

  if (!isMobile) {
    // DESKTOP (>= 768px): Preserve exact desktop behavior
    const idealLeft = ptRect.left - parentRect.left - (ttWidth / 2) + (ptRect.width / 2);
    const left = Math.max(10, Math.min(parentRect.width - ttWidth - 10, idealLeft));
    tooltip.style.left = `${left}px`;
    tooltip.style.top = options.desktopTop || '10px';
    return;
  }

  // MOBILE (< 768px): Intelligent Viewport-Safe Clamped Positioning
  const screenMargin = 12; // 8-16px margin from viewport edges

  // 1. Horizontal (X) Positioning:
  // Center horizontally over the touched point
  const ptCenterX = ptRect.left + (ptRect.width / 2);
  let screenLeft = ptCenterX - (ttWidth / 2);

  // Clamp within viewport edges with screenMargin
  const minScreenLeft = screenMargin;
  const maxScreenLeft = Math.max(screenMargin, vw - screenMargin - ttWidth);
  screenLeft = Math.max(minScreenLeft, Math.min(maxScreenLeft, screenLeft));

  // 2. Vertical (Y) Positioning:
  // Calculate available space above and below the point inside the chart container and viewport
  const gap = 12;
  const spaceAbovePoint = ptRect.top - parentRect.top;
  const spaceBelowPoint = parentRect.bottom - ptRect.bottom;
  
  let targetScreenTop;
  
  // Reposition vertically: if not enough room above inside chart, display below; if not enough room below, display above
  if (spaceAbovePoint >= ttHeight + gap) {
    targetScreenTop = ptRect.top - ttHeight - gap;
  } else if (spaceBelowPoint >= ttHeight + gap) {
    targetScreenTop = ptRect.bottom + gap;
  } else {
    // If tight on both sides, place inside container with gap from top or bottom
    if (ptRect.top - parentRect.top > parentRect.height / 2) {
      targetScreenTop = parentRect.top + gap;
    } else {
      targetScreenTop = parentRect.bottom - ttHeight - gap;
    }
  }

  // Clamp vertical position strictly within visible viewport [screenMargin, vh - screenMargin - ttHeight]
  const minScreenTop = screenMargin;
  const maxScreenTop = Math.max(screenMargin, vh - screenMargin - ttHeight);
  const screenTop = Math.max(minScreenTop, Math.min(maxScreenTop, targetScreenTop));

  // Convert viewport coordinates (screenLeft, screenTop) to offsetParent-relative coordinates
  const relativeLeft = screenLeft - parentRect.left;
  const relativeTop = screenTop - parentRect.top;

  tooltip.style.left = `${relativeLeft}px`;
  tooltip.style.top = `${relativeTop}px`;
}


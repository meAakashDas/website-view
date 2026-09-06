// ==============================================
// risePaisa — Nepal NEPSE Share Calculator Component
// Buy Cost, Sell & Profit, WACC Average Price, and Break-even Calculator
// ==============================================
import {
  formatNPR,
  formatCompactNPR,
  getNEPSEBrokerCommission,
  calculateNEPSEBuy,
  calculateNEPSESell,
  calculateNEPSEWACC,
  calculateNEPSEBreakEven,
  NEPSE_FEE_CONFIG,
} from './engine.js';
import { renderShareProfitChart } from './charts.js';

/**
 * State for NEPSE Share Calculator
 */
let state = {
  activeSubTab: 'buy', // 'buy' | 'sell' | 'wacc' | 'breakeven'
  // Buy tab
  buyPrice: 500,
  buyQty: 100,
  // Sell tab
  sellBuyPrice: 500,
  sellPrice: 600,
  sellQty: 100,
  holdingPeriod: 'short', // 'short' (<365d) | 'long' (>365d)
  investorType: 'individual', // 'individual' | 'institution'
  // WACC tab
  waccLots: [
    { id: 1, price: 450, quantity: 100 },
    { id: 2, price: 550, quantity: 100 },
  ],
  // Break-even tab
  beBuyPrice: 500,
  beQty: 100,
};

/**
 * Render NEPSE Share Calculator HTML markup
 * @returns {string} HTML markup
 */
export function renderShareCalculator() {
  const buyRes = calculateNEPSEBuy({
    price: state.buyPrice,
    quantity: state.buyQty,
  });

  const sellRes = calculateNEPSESell({
    buyPrice: state.sellBuyPrice,
    sellPrice: state.sellPrice,
    quantity: state.sellQty,
    holdingPeriod: state.holdingPeriod,
    investorType: state.investorType,
  });

  const waccRes = calculateNEPSEWACC(state.waccLots);

  const beRes = calculateNEPSEBreakEven({
    buyPrice: state.beBuyPrice,
    quantity: state.beQty,
  });

  return `
    <div class="rp-calc-wrapper" id="nepse-share-calculator">
      
      <!-- NEPSE Calculator Sub-Tabs Bar -->
      <div class="rp-share-subtabs" role="tablist" aria-label="NEPSE Calculator Tools">
        <button
          type="button"
          class="rp-subtab-btn ${state.activeSubTab === 'buy' ? 'active' : ''}"
          id="share-subtab-buy"
          data-subtab="buy"
          role="tab"
          aria-selected="${state.activeSubTab === 'buy'}"
          aria-controls="share-pane-buy"
        >
          1. Buy Cost Calculator
        </button>

        <button
          type="button"
          class="rp-subtab-btn ${state.activeSubTab === 'sell' ? 'active' : ''}"
          id="share-subtab-sell"
          data-subtab="sell"
          role="tab"
          aria-selected="${state.activeSubTab === 'sell'}"
          aria-controls="share-pane-sell"
        >
          2. Sell & Profit Calculator
        </button>

        <button
          type="button"
          class="rp-subtab-btn ${state.activeSubTab === 'wacc' ? 'active' : ''}"
          id="share-subtab-wacc"
          data-subtab="wacc"
          role="tab"
          aria-selected="${state.activeSubTab === 'wacc'}"
          aria-controls="share-pane-wacc"
        >
          3. Average Price (WACC)
        </button>

        <button
          type="button"
          class="rp-subtab-btn ${state.activeSubTab === 'breakeven' ? 'active' : ''}"
          id="share-subtab-breakeven"
          data-subtab="breakeven"
          role="tab"
          aria-selected="${state.activeSubTab === 'breakeven'}"
          aria-controls="share-pane-breakeven"
        >
          4. Break-even Price
        </button>
      </div>

      <!-- ── SUB-PANE 1: BUY COST CALCULATOR ──────────────────────── -->
      <div
        class="rp-share-subpane ${state.activeSubTab === 'buy' ? 'active' : ''}"
        id="share-pane-buy"
        role="tabpanel"
        style="${state.activeSubTab === 'buy' ? '' : 'display:none;'}"
      >
        <div class="rp-calc-layout">
          <!-- Buy Inputs -->
          <div class="rp-calc-controls-card">
            <div class="rp-calc-card-header">
              <h3>Share Purchase Details</h3>
              <span class="rp-badge rp-badge-accent">NEPSE Slabs</span>
            </div>

            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="share-buy-price" class="rp-field-label">Share Purchase Price</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="share-buy-price"
                    class="rp-number-input"
                    value="${state.buyPrice}"
                    min="1"
                    step="1"
                    inputmode="decimal"
                    autocomplete="off"
                    aria-label="Purchase Price per share in NPR"
                  >
                </div>
              </div>
            </div>

            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="share-buy-qty" class="rp-field-label">Quantity (Kitta)</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="share-buy-qty"
                    class="rp-number-input text-right"
                    value="${state.buyQty}"
                    min="1"
                    step="10"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                    aria-label="Quantity of shares"
                  >
                  <span class="rp-affix">Kitta</span>
                </div>
              </div>
            </div>

            <!-- Quick Presets -->
            <div class="rp-presets-row">
              <span class="rp-preset-title">Quick Kitta:</span>
              <button type="button" class="rp-kitta-btn" data-target="buy" data-qty="10">10</button>
              <button type="button" class="rp-kitta-btn" data-target="buy" data-qty="50">50</button>
              <button type="button" class="rp-kitta-btn" data-target="buy" data-qty="100">100</button>
              <button type="button" class="rp-kitta-btn" data-target="buy" data-qty="500">500</button>
              <button type="button" class="rp-kitta-btn" data-target="buy" data-qty="1000">1,000</button>
            </div>
          </div>

          <!-- Buy Results -->
          <div class="rp-calc-results-card">
            <div class="rp-results-grid">
              <div class="rp-stat-card maturity span-2">
                <div class="rp-maturity-header">
                  <span class="rp-stat-label">Total Purchase Cost</span>
                  <span class="rp-badge rp-badge-pulse">Total Payable</span>
                </div>
                <div class="rp-stat-value maturity-large accent" id="share-buy-res-total">
                  ${formatNPR(buyRes.totalCost)}
                </div>
                <div class="rp-stat-caption">
                  Effective Cost: <strong id="share-buy-res-effective">${formatNPR(buyRes.effectiveCostPerShare)}</strong> per kitta
                </div>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Gross Purchase Amount</span>
                <div class="rp-stat-value" id="share-buy-res-gross">${formatNPR(buyRes.grossAmount)}</div>
                <span class="rp-stat-sub">Price &times; Quantity</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Broker Commission</span>
                <div class="rp-stat-value" id="share-buy-res-broker">${formatNPR(buyRes.brokerCommission)}</div>
                <span class="rp-stat-sub">Applicable tiered slab</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">SEBON Regulatory Fee</span>
                <div class="rp-stat-value" id="share-buy-res-sebon">${formatNPR(buyRes.sebonFee)}</div>
                <span class="rp-stat-sub">0.015% of gross</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">DP Charge</span>
                <div class="rp-stat-value" id="share-buy-res-dp">${formatNPR(buyRes.dpCharge)}</div>
                <span class="rp-stat-sub">NPR 25 per transaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SUB-PANE 2: SELL & PROFIT CALCULATOR ─────────────────── -->
      <div
        class="rp-share-subpane ${state.activeSubTab === 'sell' ? 'active' : ''}"
        id="share-pane-sell"
        role="tabpanel"
        style="${state.activeSubTab === 'sell' ? '' : 'display:none;'}"
      >
        <div class="rp-calc-layout">
          <!-- Sell Controls -->
          <div class="rp-calc-controls-card">
            <div class="rp-calc-card-header">
              <h3>Sell Trade Parameters</h3>
              <span class="rp-badge rp-badge-accent">Capital Gains</span>
            </div>

            <!-- Buy Price -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="share-sell-buyprice" class="rp-field-label">Buying Price (WACC)</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="share-sell-buyprice"
                    class="rp-number-input"
                    value="${state.sellBuyPrice}"
                    min="1"
                    step="1"
                    inputmode="decimal"
                    autocomplete="off"
                  >
                </div>
              </div>
            </div>

            <!-- Sell Price -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="share-sell-price" class="rp-field-label">Selling Price</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="share-sell-price"
                    class="rp-number-input"
                    value="${state.sellPrice}"
                    min="1"
                    step="1"
                    inputmode="decimal"
                    autocomplete="off"
                  >
                </div>
              </div>
            </div>

            <!-- Quantity -->
            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="share-sell-qty" class="rp-field-label">Quantity</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="share-sell-qty"
                    class="rp-number-input text-right"
                    value="${state.sellQty}"
                    min="1"
                    step="10"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                  >
                  <span class="rp-affix">Kitta</span>
                </div>
              </div>
            </div>

            <!-- Holding Period -->
            <div class="rp-field-group">
              <label class="rp-field-label">Holding Period</label>
              <div class="rp-freq-switch" role="group" aria-label="Holding Period">
                <button
                  type="button"
                  class="rp-freq-btn ${state.holdingPeriod === 'short' ? 'active' : ''}"
                  id="share-btn-hold-short"
                  data-hold="short"
                >
                  &lt; 365 Days (7.5% CGT)
                </button>
                <button
                  type="button"
                  class="rp-freq-btn ${state.holdingPeriod === 'long' ? 'active' : ''}"
                  id="share-btn-hold-long"
                  data-hold="long"
                >
                  &ge; 365 Days (5.0% CGT)
                </button>
              </div>
            </div>

            <!-- Investor Type -->
            <div class="rp-field-group">
              <label class="rp-field-label">Investor Classification</label>
              <div class="rp-freq-switch" role="group" aria-label="Investor Type">
                <button
                  type="button"
                  class="rp-freq-btn ${state.investorType === 'individual' ? 'active' : ''}"
                  id="share-btn-type-ind"
                  data-inv="individual"
                >
                  Individual
                </button>
                <button
                  type="button"
                  class="rp-freq-btn ${state.investorType === 'institution' ? 'active' : ''}"
                  id="share-btn-type-inst"
                  data-inv="institution"
                >
                  Institution (10% CGT)
                </button>
              </div>
            </div>
          </div>

          <!-- Sell Results & Donut Chart -->
          <div class="rp-calc-results-card">
            <div class="rp-results-grid">
              <div class="rp-stat-card maturity span-2">
                <div class="rp-maturity-header">
                  <span class="rp-stat-label">Net Profit / Loss</span>
                  <span class="rp-badge ${sellRes.isProfitable ? 'rp-badge-pulse' : 'rp-badge-danger'}" id="share-sell-badge-status">
                    ${sellRes.isProfitable ? `+${sellRes.returnPercentage}% Return` : `${sellRes.returnPercentage}% Return`}
                  </span>
                </div>
                <div
                  class="rp-stat-value maturity-large"
                  id="share-sell-res-profit"
                  style="color:${sellRes.isProfitable ? '#10B981' : (sellRes.actualProfitLoss < 0 ? '#EF4444' : '#ffffff')}"
                >
                  ${sellRes.isProfitable ? `+${formatNPR(sellRes.actualProfitLoss)}` : formatNPR(sellRes.actualProfitLoss)}
                </div>
                <div class="rp-stat-caption">
                  Net Receivable after all charges & CGT: <strong id="share-sell-res-netrec">${formatNPR(sellRes.netReceivable)}</strong>
                </div>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Gross Selling Amount</span>
                <div class="rp-stat-value" id="share-sell-res-gross">${formatNPR(sellRes.grossSaleAmount)}</div>
                <span class="rp-stat-sub">${state.sellQty} kitta &times; NPR ${state.sellPrice}</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Total Purchase Cost</span>
                <div class="rp-stat-value" id="share-sell-res-buytotal">${formatNPR(sellRes.buyDetails.totalCost)}</div>
                <span class="rp-stat-sub">Including buy-side fees</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Total Trading Charges</span>
                <div class="rp-stat-value" style="color:#F43F5E" id="share-sell-res-charges">${formatNPR(sellRes.totalAllCharges)}</div>
                <span class="rp-stat-sub">Buy + Sell Broker, SEBON & DP</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Capital Gains Tax (CGT)</span>
                <div class="rp-stat-value" style="color:#F59E0B" id="share-sell-res-cgt">${formatNPR(sellRes.cgtAmount)}</div>
                <span class="rp-stat-sub" id="share-sell-res-cgt-rate">${sellRes.cgtRateLabel} on taxable gain</span>
              </div>
            </div>

            <!-- Profit Distribution Donut Chart -->
            <div id="share-donut-container">
              ${renderShareProfitChart({
                buyTotal: sellRes.buyDetails.totalCost,
                totalCharges: sellRes.totalAllCharges,
                cgt: sellRes.cgtAmount,
                netProfit: sellRes.actualProfitLoss,
              })}
            </div>
          </div>
        </div>
      </div>

      <!-- ── SUB-PANE 3: AVERAGE PRICE (WACC) ─────────────────────── -->
      <div
        class="rp-share-subpane ${state.activeSubTab === 'wacc' ? 'active' : ''}"
        id="share-pane-wacc"
        role="tabpanel"
        style="${state.activeSubTab === 'wacc' ? '' : 'display:none;'}"
      >
        <div class="rp-calc-section rp-table-section">
          <div class="rp-section-heading-row">
            <div>
              <h3>Purchase Lots & Weighted Average Cost</h3>
              <p class="rp-subtext">Add all your purchase lots to determine your exact weighted-average buying cost (WACC).</p>
            </div>
            <div class="rp-table-actions">
              <button type="button" class="btn btn-secondary btn-sm" id="share-btn-add-lot">
                + Add Purchase Lot
              </button>
              <button type="button" class="btn btn-ghost btn-sm" id="share-btn-reset-lots" style="color:var(--color-text-muted)">
                Reset Lots
              </button>
            </div>
          </div>

          <!-- Lots Table -->
          <div class="rp-table-responsive">
            <table class="rp-growth-table rp-wacc-table" aria-label="WACC Purchase Lots">
              <thead>
                <tr>
                  <th scope="col">Lot #</th>
                  <th scope="col">Purchase Price (NPR)</th>
                  <th scope="col">Quantity (Kitta)</th>
                  <th scope="col">Gross Amount</th>
                  <th scope="col" style="width:80px">Action</th>
                </tr>
              </thead>
              <tbody id="share-wacc-table-body">
                ${renderWACCRows(state.waccLots)}
              </tbody>
            </table>
          </div>

          <!-- WACC Summary Cards -->
          <div class="rp-wacc-summary-grid">
            <div class="rp-stat-card maturity">
              <span class="rp-stat-label">Weighted Average Cost (WACC)</span>
              <div class="rp-stat-value maturity-large accent" id="share-wacc-res-price">
                ${formatNPR(waccRes.wacc)}
              </div>
              <div class="rp-stat-caption">Pure weighted price per share</div>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Total Quantity</span>
              <div class="rp-stat-value" id="share-wacc-res-qty">${waccRes.totalQuantity.toLocaleString()} Kitta</div>
              <span class="rp-stat-sub">Accumulated shares</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Total Investment</span>
              <div class="rp-stat-value" id="share-wacc-res-gross">${formatNPR(waccRes.totalInvestment)}</div>
              <span class="rp-stat-sub">Gross capital invested</span>
            </div>

            <div class="rp-stat-card">
              <span class="rp-stat-label">Adjusted WACC (with Buy Fees)</span>
              <div class="rp-stat-value" style="color:#10B981" id="share-wacc-res-adjusted">
                ${formatNPR(waccRes.adjustedWACC)}
              </div>
              <span class="rp-stat-sub">Total Cost: ${formatNPR(waccRes.totalCostWithCharges)}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SUB-PANE 4: BREAK-EVEN PRICE ─────────────────────────── -->
      <div
        class="rp-share-subpane ${state.activeSubTab === 'breakeven' ? 'active' : ''}"
        id="share-pane-breakeven"
        role="tabpanel"
        style="${state.activeSubTab === 'breakeven' ? '' : 'display:none;'}"
      >
        <div class="rp-calc-layout">
          <!-- Break-even Controls -->
          <div class="rp-calc-controls-card">
            <div class="rp-calc-card-header">
              <h3>Target Break-even Analysis</h3>
              <span class="rp-badge rp-badge-accent">Fee Recovery</span>
            </div>

            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="share-be-buyprice" class="rp-field-label">Purchase / WACC Price</label>
                <div class="rp-input-affix-wrap">
                  <span class="rp-affix">NPR</span>
                  <input
                    type="number"
                    id="share-be-buyprice"
                    class="rp-number-input"
                    value="${state.beBuyPrice}"
                    min="1"
                    step="1"
                    inputmode="decimal"
                    autocomplete="off"
                  >
                </div>
              </div>
            </div>

            <div class="rp-field-group">
              <div class="rp-field-top">
                <label for="share-be-qty" class="rp-field-label">Quantity</label>
                <div class="rp-input-affix-wrap">
                  <input
                    type="number"
                    id="share-be-qty"
                    class="rp-number-input text-right"
                    value="${state.beQty}"
                    min="1"
                    step="10"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="off"
                  >
                  <span class="rp-affix">Kitta</span>
                </div>
              </div>
            </div>

            <div class="rp-educational-note" style="margin-top:var(--space-4)">
              <div class="rp-edu-text" style="font-size:var(--text-xs)">
                💡 <strong>Important Note:</strong> Selling at the exact purchase price results in a loss because broker commission, SEBON fees, and DP charges apply on both buy and sell sides.
              </div>
            </div>
          </div>

          <!-- Break-even Results -->
          <div class="rp-calc-results-card">
            <div class="rp-results-grid">
              <div class="rp-stat-card maturity span-2">
                <div class="rp-maturity-header">
                  <span class="rp-stat-label">Minimum Selling Price (Break-Even)</span>
                  <span class="rp-badge rp-badge-pulse" style="background:rgba(16,185,129,0.15);color:#10B981;border:1px solid rgba(16,185,129,0.3)">
                    +${beRes.requiredIncrease}% Needed
                  </span>
                </div>
                <div class="rp-stat-value maturity-large accent" id="share-be-res-price">
                  ${formatNPR(beRes.breakEvenPrice)}
                </div>
                <div class="rp-stat-caption">
                  You must sell at or above this price to recover all round-trip fees without a loss.
                </div>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Total Purchase Cost</span>
                <div class="rp-stat-value" id="share-be-res-buycost">${formatNPR(beRes.totalBuyCost)}</div>
                <span class="rp-stat-sub">Including buy fees</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Buy-side Fees</span>
                <div class="rp-stat-value" id="share-be-res-buyfees">${formatNPR(beRes.buyCharges)}</div>
                <span class="rp-stat-sub">Broker + SEBON + DP</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Sell-side Fees</span>
                <div class="rp-stat-value" id="share-be-res-sellfees">${formatNPR(beRes.sellCharges)}</div>
                <span class="rp-stat-sub">At break-even price</span>
              </div>

              <div class="rp-stat-card">
                <span class="rp-stat-label">Total Round-Trip Charges</span>
                <div class="rp-stat-value" style="color:#F43F5E" id="share-be-res-totalfees">${formatNPR(beRes.totalRoundTripCharges)}</div>
                <span class="rp-stat-sub">Total fee burden to recover</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Educational Section -->
      <div class="rp-calc-section rp-edu-cards-section" style="margin-top:var(--space-8)">
        <h3 style="font-size:var(--text-lg);color:var(--color-heading);margin-bottom:var(--space-4)">
          Essential NEPSE Trading & Charge Concepts
        </h3>
        <div class="rp-edu-grid">
          <div class="rp-edu-card">
            <h4>Broker Commission</h4>
            <p>
              NEPSE brokers charge a tiered fee between <strong>0.27% and 0.40%</strong> based on transaction value, with a statutory minimum of NPR 10 per transaction.
            </p>
          </div>
          <div class="rp-edu-card">
            <h4>SEBON & DP Charges</h4>
            <p>
              SEBON levies a regulatory charge of <strong>0.015%</strong>. CDS & Clearing charges a flat <strong>NPR 25 DP fee</strong> per stock per day for depository transfers.
            </p>
          </div>
          <div class="rp-edu-card">
            <h4>Capital Gains Tax (CGT)</h4>
            <p>
              CGT is levied only on net taxable profit. For individuals, short-term (&lt;365 days) is <strong>7.5%</strong> and long-term is <strong>5.0%</strong>. Institutions pay <strong>10.0%</strong>.
            </p>
          </div>
        </div>
      </div>

      <!-- Nepal Regulatory Disclaimer -->
      <div class="rp-educational-note">
        <div class="rp-edu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </div>
        <div class="rp-edu-text">
          <strong>Nepal Stock Market Notice:</strong> Broker commission, SEBON fee, DP charges, and capital gains tax rules may change over time. This calculator provides estimates using the configured rates. Always verify charges with your licensed broker and current SEBON regulations before making investment decisions.
        </div>
      </div>

    </div>
  `;
}

/**
 * Render WACC Table Rows
 * @param {Array} lots
 * @returns {string}
 */
function renderWACCRows(lots) {
  if (!lots || !lots.length) {
    return `<tr><td colspan="5" class="text-center">No purchase lots added. Click "Add Purchase Lot" above.</td></tr>`;
  }

  return lots.map((lot, idx) => `
    <tr data-lot-id="${lot.id}">
      <td><span class="rp-year-badge">Lot #${idx + 1}</span></td>
      <td>
        <input
          type="number"
          class="rp-number-input rp-wacc-price-input"
          value="${lot.price}"
          min="1"
          step="1"
          inputmode="decimal"
          autocomplete="off"
          style="width:130px;padding:4px 8px"
        >
      </td>
      <td>
        <input
          type="number"
          class="rp-number-input rp-wacc-qty-input"
          value="${lot.quantity}"
          min="1"
          step="10"
          inputmode="numeric"
          pattern="[0-9]*"
          autocomplete="off"
          style="width:110px;padding:4px 8px"
        >
      </td>
      <td class="rp-num font-semibold">
        ${formatNPR(lot.price * lot.quantity)}
      </td>
      <td>
        ${lots.length > 1 ? `
          <button type="button" class="btn btn-ghost btn-sm rp-wacc-delete-btn" data-lot-id="${lot.id}" style="color:#ef4444;padding:2px 6px;font-size:11px">
            Delete
          </button>
        ` : '—'}
      </td>
    </tr>
  `).join('');
}

/**
 * Initialize NEPSE Share Calculator interactivity
 */
export function initShareCalculator() {
  const container = document.getElementById('nepse-share-calculator');
  if (!container) return;

  // Sub-tabs switching
  const subtabBtns = container.querySelectorAll('.rp-subtab-btn');
  const subpanes = {
    buy: document.getElementById('share-pane-buy'),
    sell: document.getElementById('share-pane-sell'),
    wacc: document.getElementById('share-pane-wacc'),
    breakeven: document.getElementById('share-pane-breakeven'),
  };

  function switchSubTab(target) {
    state.activeSubTab = target;
    subtabBtns.forEach(btn => {
      const isTarget = btn.dataset.subtab === target;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', String(isTarget));
    });

    Object.keys(subpanes).forEach(k => {
      const pane = subpanes[k];
      if (pane) {
        pane.style.display = k === target ? 'block' : 'none';
        pane.classList.toggle('active', k === target);
      }
    });
  }

  subtabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchSubTab(btn.dataset.subtab));
  });

  // ── 1. Buy Cost Logic ─────────────────────────
  const elBuyPrice = document.getElementById('share-buy-price');
  const elBuyQty = document.getElementById('share-buy-qty');
  const buyResTotal = document.getElementById('share-buy-res-total');
  const buyResEffective = document.getElementById('share-buy-res-effective');
  const buyResGross = document.getElementById('share-buy-res-gross');
  const buyResBroker = document.getElementById('share-buy-res-broker');
  const buyResSebon = document.getElementById('share-buy-res-sebon');
  const buyResDp = document.getElementById('share-buy-res-dp');

  let buyRaf = null;
  function scheduleBuyUpdate() {
    if (buyRaf) return;
    buyRaf = requestAnimationFrame(() => {
      buyRaf = null;
      updateBuy();
    });
  }

  function updateBuy() {
    state.buyPrice = Math.max(0, Number(elBuyPrice?.value) || 0);
    state.buyQty = Math.max(0, Number(elBuyQty?.value) || 0);

    const res = calculateNEPSEBuy({
      price: state.buyPrice,
      quantity: state.buyQty,
    });

    if (buyResTotal) buyResTotal.textContent = formatNPR(res.totalCost);
    if (buyResEffective) buyResEffective.textContent = `${formatNPR(res.effectiveCostPerShare)}`;
    if (buyResGross) buyResGross.textContent = formatNPR(res.grossAmount);
    if (buyResBroker) buyResBroker.textContent = formatNPR(res.brokerCommission);
    if (buyResSebon) buyResSebon.textContent = formatNPR(res.sebonFee);
    if (buyResDp) buyResDp.textContent = formatNPR(res.dpCharge);
  }

  elBuyPrice?.addEventListener('input', scheduleBuyUpdate);
  elBuyQty?.addEventListener('input', scheduleBuyUpdate);

  // Quick Kitta buttons
  container.querySelectorAll('.rp-kitta-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const qty = Number(btn.dataset.qty);
      if (target === 'buy' && elBuyQty) {
        elBuyQty.value = qty;
        scheduleBuyUpdate();
      }
    });
  });

  // ── 2. Sell & Profit Logic ────────────────────
  const elSellBuyPrice = document.getElementById('share-sell-buyprice');
  const elSellPrice = document.getElementById('share-sell-price');
  const elSellQty = document.getElementById('share-sell-qty');
  const btnHoldShort = document.getElementById('share-btn-hold-short');
  const btnHoldLong = document.getElementById('share-btn-hold-long');
  const btnTypeInd = document.getElementById('share-btn-type-ind');
  const btnTypeInst = document.getElementById('share-btn-type-inst');

  const sellBadgeStatus = document.getElementById('share-sell-badge-status');
  const sellResProfit = document.getElementById('share-sell-res-profit');
  const sellResNetrec = document.getElementById('share-sell-res-netrec');
  const sellResGross = document.getElementById('share-sell-res-gross');
  const sellResBuytotal = document.getElementById('share-sell-res-buytotal');
  const sellResCharges = document.getElementById('share-sell-res-charges');
  const sellResCgt = document.getElementById('share-sell-res-cgt');
  const sellResCgtRate = document.getElementById('share-sell-res-cgt-rate');
  const donutContainer = document.getElementById('share-donut-container');

  let sellRaf = null;
  function scheduleSellUpdate() {
    if (sellRaf) return;
    sellRaf = requestAnimationFrame(() => {
      sellRaf = null;
      updateSell();
    });
  }

  function updateSell() {
    state.sellBuyPrice = Math.max(0, Number(elSellBuyPrice?.value) || 0);
    state.sellPrice = Math.max(0, Number(elSellPrice?.value) || 0);
    state.sellQty = Math.max(0, Number(elSellQty?.value) || 0);

    const res = calculateNEPSESell({
      buyPrice: state.sellBuyPrice,
      sellPrice: state.sellPrice,
      quantity: state.sellQty,
      holdingPeriod: state.holdingPeriod,
      investorType: state.investorType,
    });

    if (sellBadgeStatus) {
      sellBadgeStatus.className = `rp-badge ${res.isProfitable ? 'rp-badge-pulse' : 'rp-badge-danger'}`;
      sellBadgeStatus.textContent = res.isProfitable ? `+${res.returnPercentage}% Return` : `${res.returnPercentage}% Return`;
    }

    if (sellResProfit) {
      sellResProfit.textContent = res.isProfitable ? `+${formatNPR(res.actualProfitLoss)}` : formatNPR(res.actualProfitLoss);
      sellResProfit.style.color = res.isProfitable ? '#10B981' : (res.actualProfitLoss < 0 ? '#EF4444' : '#ffffff');
    }

    if (sellResNetrec) sellResNetrec.textContent = formatNPR(res.netReceivable);
    if (sellResGross) sellResGross.textContent = formatNPR(res.grossSaleAmount);
    if (sellResBuytotal) sellResBuytotal.textContent = formatNPR(res.buyDetails.totalCost);
    if (sellResCharges) sellResCharges.textContent = formatNPR(res.totalAllCharges);
    if (sellResCgt) sellResCgt.textContent = formatNPR(res.cgtAmount);
    if (sellResCgtRate) sellResCgtRate.textContent = `${res.cgtRateLabel} on taxable gain`;

    if (donutContainer) {
      donutContainer.innerHTML = renderShareProfitChart({
        buyTotal: res.buyDetails.totalCost,
        totalCharges: res.totalAllCharges,
        cgt: res.cgtAmount,
        netProfit: res.actualProfitLoss,
      });
    }
  }

  elSellBuyPrice?.addEventListener('input', scheduleSellUpdate);
  elSellPrice?.addEventListener('input', scheduleSellUpdate);
  elSellQty?.addEventListener('input', scheduleSellUpdate);

  btnHoldShort?.addEventListener('click', () => {
    state.holdingPeriod = 'short';
    btnHoldShort.classList.add('active');
    btnHoldLong?.classList.remove('active');
    scheduleSellUpdate();
  });

  btnHoldLong?.addEventListener('click', () => {
    state.holdingPeriod = 'long';
    btnHoldLong.classList.add('active');
    btnHoldShort?.classList.remove('active');
    scheduleSellUpdate();
  });

  btnTypeInd?.addEventListener('click', () => {
    state.investorType = 'individual';
    btnTypeInd.classList.add('active');
    btnTypeInst?.classList.remove('active');
    scheduleSellUpdate();
  });

  btnTypeInst?.addEventListener('click', () => {
    state.investorType = 'institution';
    btnTypeInst.classList.add('active');
    btnTypeInd?.classList.remove('active');
    scheduleSellUpdate();
  });

  // ── 3. WACC Logic ─────────────────────────────
  const waccTableBody = document.getElementById('share-wacc-table-body');
  const btnAddLot = document.getElementById('share-btn-add-lot');
  const btnResetLots = document.getElementById('share-btn-reset-lots');
  const waccResPrice = document.getElementById('share-wacc-res-price');
  const waccResQty = document.getElementById('share-wacc-res-qty');
  const waccResGross = document.getElementById('share-wacc-res-gross');
  const waccResAdjusted = document.getElementById('share-wacc-res-adjusted');

  let waccRaf = null;
  function scheduleWACCUpdate() {
    if (waccRaf) return;
    waccRaf = requestAnimationFrame(() => {
      waccRaf = null;
      updateWACC();
    });
  }

  function updateWACC() {
    const res = calculateNEPSEWACC(state.waccLots);
    if (waccResPrice) waccResPrice.textContent = formatNPR(res.wacc);
    if (waccResQty) waccResQty.textContent = `${res.totalQuantity.toLocaleString()} Kitta`;
    if (waccResGross) waccResGross.textContent = formatNPR(res.totalInvestment);
    if (waccResAdjusted) waccResAdjusted.textContent = formatNPR(res.adjustedWACC);
  }

  function bindWACCInputs() {
    if (!waccTableBody) return;
    const rows = waccTableBody.querySelectorAll('tr[data-lot-id]');
    rows.forEach(row => {
      const id = Number(row.dataset.lotId);
      const priceInput = row.querySelector('.rp-wacc-price-input');
      const qtyInput = row.querySelector('.rp-wacc-qty-input');
      const delBtn = row.querySelector('.rp-wacc-delete-btn');

      priceInput?.addEventListener('input', () => {
        const lot = state.waccLots.find(l => l.id === id);
        if (lot) {
          lot.price = Math.max(0, Number(priceInput.value) || 0);
          const grossCell = row.children[3];
          if (grossCell) grossCell.textContent = formatNPR(lot.price * lot.quantity);
          scheduleWACCUpdate();
        }
      });

      qtyInput?.addEventListener('input', () => {
        const lot = state.waccLots.find(l => l.id === id);
        if (lot) {
          lot.quantity = Math.max(0, Number(qtyInput.value) || 0);
          const grossCell = row.children[3];
          if (grossCell) grossCell.textContent = formatNPR(lot.price * lot.quantity);
          scheduleWACCUpdate();
        }
      });

      delBtn?.addEventListener('click', () => {
        state.waccLots = state.waccLots.filter(l => l.id !== id);
        renderWACCPane();
      });
    });
  }

  function renderWACCPane() {
    if (waccTableBody) {
      waccTableBody.innerHTML = renderWACCRows(state.waccLots);
      bindWACCInputs();
      scheduleWACCUpdate();
    }
  }

  btnAddLot?.addEventListener('click', () => {
    const nextId = (state.waccLots[state.waccLots.length - 1]?.id || 0) + 1;
    state.waccLots.push({ id: nextId, price: 500, quantity: 100 });
    renderWACCPane();
  });

  btnResetLots?.addEventListener('click', () => {
    state.waccLots = [
      { id: 1, price: 450, quantity: 100 },
      { id: 2, price: 550, quantity: 100 },
    ];
    renderWACCPane();
  });

  bindWACCInputs();

  // ── 4. Break-even Logic ───────────────────────
  const elBeBuyPrice = document.getElementById('share-be-buyprice');
  const elBeQty = document.getElementById('share-be-qty');
  const beResPrice = document.getElementById('share-be-res-price');
  const beResBuycost = document.getElementById('share-be-res-buycost');
  const beResBuyfees = document.getElementById('share-be-res-buyfees');
  const beResSellfees = document.getElementById('share-be-res-sellfees');
  const beResTotalfees = document.getElementById('share-be-res-totalfees');

  let beRaf = null;
  function scheduleBreakEvenUpdate() {
    if (beRaf) return;
    beRaf = requestAnimationFrame(() => {
      beRaf = null;
      updateBreakEven();
    });
  }

  function updateBreakEven() {
    state.beBuyPrice = Math.max(0, Number(elBeBuyPrice?.value) || 0);
    state.beQty = Math.max(0, Number(elBeQty?.value) || 0);

    const res = calculateNEPSEBreakEven({
      buyPrice: state.beBuyPrice,
      quantity: state.beQty,
    });

    if (beResPrice) beResPrice.textContent = formatNPR(res.breakEvenPrice);
    if (beResBuycost) beResBuycost.textContent = formatNPR(res.totalBuyCost);
    if (beResBuyfees) beResBuyfees.textContent = formatNPR(res.buyCharges);
    if (beResSellfees) beResSellfees.textContent = formatNPR(res.sellCharges);
    if (beResTotalfees) beResTotalfees.textContent = formatNPR(res.totalRoundTripCharges);
  }

  elBeBuyPrice?.addEventListener('input', scheduleBreakEvenUpdate);
  elBeQty?.addEventListener('input', scheduleBreakEvenUpdate);
}

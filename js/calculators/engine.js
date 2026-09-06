// ==============================================
// risePaisa — Financial Calculator Engine
// Reusable math, validation, and currency utilities
// ==============================================

// Centralized Nepal Regulatory & Market Configuration Re-Exports
export {
  NEPAL_TAX_CONFIG,
  DEFAULT_FISCAL_YEAR,
  NEPSE_FEE_CONFIG,
  FD_RD_CONFIG,
  RETIREMENT_GOAL_CONFIG,
} from './nepalConfig.js';

import {
  NEPAL_TAX_CONFIG,
  DEFAULT_FISCAL_YEAR,
  NEPSE_FEE_CONFIG,
  FD_RD_CONFIG,
  RETIREMENT_GOAL_CONFIG,
} from './nepalConfig.js';

/**
 * Format a number into Nepali Rupees (NPR) display format
 * Uses standard South Asian digit grouping (lakhs & crores)
 * Rounds to two decimal places internally, omits decimals if whole number
 * @param {number} value - Numeric amount
 * @param {boolean} includeDecimals - Whether to force decimals
 * @returns {string} e.g. "NPR 11,61,695"
 */
export function formatNPR(value, includeDecimals = false) {
  if (value === null || value === undefined || isNaN(value)) {
    return 'NPR 0';
  }

  const num = Number(value);
  const targetVal = includeDecimals ? Math.round(num * 100) / 100 : Math.round(num);

  const formatted = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: includeDecimals ? 2 : 0,
    maximumFractionDigits: includeDecimals ? 2 : 0,
  }).format(targetVal);

  return `NPR ${formatted}`;
}

/**
 * Format a number into a compact Nepali representation (Lakhs / Crores)
 * Useful for graph axis labels and charts
 * @param {number} value
 * @returns {string} e.g. "1.16L" or "2.5Cr"
 */
export function formatCompactNPR(value) {
  if (value === null || value === undefined || isNaN(value)) return '0';
  const num = Math.abs(Number(value));

  if (num >= 10000000) {
    // 1 Crore = 10,000,000
    const cr = (num / 10000000).toFixed(2).replace(/\.?0+$/, '');
    return `${cr} Cr`;
  }
  if (num >= 100000) {
    // 1 Lakh = 100,000
    const lk = (num / 100000).toFixed(2).replace(/\.?0+$/, '');
    return `${lk} L`;
  }
  if (num >= 1000) {
    const k = (num / 1000).toFixed(1).replace(/\.?0+$/, '');
    return `${k} K`;
  }
  return Math.round(num).toString();
}

/**
 * Standardized Percentage Formatter
 * @param {number} value - Percentage value (e.g. 12.5)
 * @param {number} [decimals=2] - Number of decimal places
 * @returns {string} e.g. "12.50%" or "0.00%"
 */
export function formatPercent(value, decimals = 2) {
  if (value === null || value === undefined || isNaN(value)) {
    return '0.00%';
  }
  const num = Number(value);
  return `${num.toFixed(decimals)}%`;
}

/**
 * Clamp a number between a minimum and maximum bound
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  const num = Number(value);
  if (isNaN(num)) return min;
  return Math.max(min, Math.min(max, num));
}

/**
 * Sanitize numeric input safely with boundary limits and defaults
 * Prevents NaN, null, undefined, and out-of-range inputs from breaking math
 * @param {*} value - Raw input value
 * @param {number} defaultVal - Default fallback
 * @param {number} min - Minimum allowed
 * @param {number} max - Maximum allowed
 * @returns {number}
 */
export function sanitizeNumber(value, defaultVal = 0, min = 0, max = Infinity) {
  const num = Number(value);
  if (value === null || value === undefined || value === '' || isNaN(num)) {
    return defaultVal;
  }
  return Math.max(min, Math.min(max, num));
}

/**
 * Validation bounds for SIP inputs
 */
export const SIP_BOUNDS = {
  minInvestment: 100,
  maxInvestment: 10000000, // NPR 1 Crore / month
  defaultInvestment: 5000,

  minReturn: 0,
  maxReturn: 100,
  defaultReturn: 12,

  minYears: 1,
  maxYears: 50,
  defaultYears: 10,

  minMonths: 1,
  maxMonths: 600,
};

/**
 * Validate SIP inputs and return friendly validation messages
 * @param {Object} inputs
 * @returns {Object} { isValid: boolean, errors: Object, sanitized: Object }
 */
export function validateSIPInputs(inputs) {
  const errors = {};
  const sanitized = {};

  // Monthly Investment
  const rawInvestment = Number(inputs.monthlyInvestment);
  if (isNaN(rawInvestment) || rawInvestment <= 0) {
    errors.monthlyInvestment = 'Monthly investment must be greater than zero.';
    sanitized.monthlyInvestment = SIP_BOUNDS.minInvestment;
  } else if (rawInvestment < SIP_BOUNDS.minInvestment) {
    errors.monthlyInvestment = `Minimum investment is NPR ${SIP_BOUNDS.minInvestment.toLocaleString()}.`;
    sanitized.monthlyInvestment = SIP_BOUNDS.minInvestment;
  } else if (rawInvestment > SIP_BOUNDS.maxInvestment) {
    errors.monthlyInvestment = `Maximum investment is NPR ${SIP_BOUNDS.maxInvestment.toLocaleString()}.`;
    sanitized.monthlyInvestment = SIP_BOUNDS.maxInvestment;
  } else {
    sanitized.monthlyInvestment = Math.round(rawInvestment);
  }

  // Expected Annual Return (%)
  const rawReturn = Number(inputs.annualReturn);
  if (isNaN(rawReturn) || rawReturn < SIP_BOUNDS.minReturn) {
    errors.annualReturn = 'Expected annual return cannot be negative.';
    sanitized.annualReturn = SIP_BOUNDS.minReturn;
  } else if (rawReturn > SIP_BOUNDS.maxReturn) {
    errors.annualReturn = `Expected return cannot exceed ${SIP_BOUNDS.maxReturn}%.`;
    sanitized.annualReturn = SIP_BOUNDS.maxReturn;
  } else {
    sanitized.annualReturn = Math.round(rawReturn * 10) / 10;
  }

  // Investment Period
  const isMonths = inputs.tenureUnit === 'months';
  const rawTenure = Number(inputs.tenure);

  if (isMonths) {
    if (isNaN(rawTenure) || rawTenure < SIP_BOUNDS.minMonths) {
      errors.tenure = 'Investment period must be at least 1 month.';
      sanitized.tenure = SIP_BOUNDS.minMonths;
    } else if (rawTenure > SIP_BOUNDS.maxMonths) {
      errors.tenure = `Investment period cannot exceed ${SIP_BOUNDS.maxMonths} months (50 years).`;
      sanitized.tenure = SIP_BOUNDS.maxMonths;
    } else {
      sanitized.tenure = Math.round(rawTenure);
    }
    sanitized.tenureMonths = sanitized.tenure;
    sanitized.tenureYears = sanitized.tenure / 12;
  } else {
    if (isNaN(rawTenure) || rawTenure < SIP_BOUNDS.minYears) {
      errors.tenure = 'Investment period must be at least 1 year.';
      sanitized.tenure = SIP_BOUNDS.minYears;
    } else if (rawTenure > SIP_BOUNDS.maxYears) {
      errors.tenure = `Investment period cannot exceed ${SIP_BOUNDS.maxYears} years.`;
      sanitized.tenure = SIP_BOUNDS.maxYears;
    } else {
      sanitized.tenure = Math.round(rawTenure);
    }
    sanitized.tenureYears = sanitized.tenure;
    sanitized.tenureMonths = sanitized.tenure * 12;
  }

  sanitized.tenureUnit = isMonths ? 'months' : 'years';

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized,
  };
}

/**
 * Calculate SIP Future Value with standard monthly compounding formula
 * 
 * Formula:
 * Monthly Rate: r = Annual Return ÷ 12 ÷ 100
 * Number of Months: n = Total Months
 * Future Value: FV = P × (((1+r)^n − 1) / r) × (1+r)
 * 
 * Total Invested = P × n
 * Estimated Returns = FV − Total Invested
 * 
 * @param {Object} params
 * @param {number} params.monthlyInvestment - P
 * @param {number} params.annualReturn - Expected annual rate in %
 * @param {number} params.tenureMonths - Total months of investment n
 * @returns {Object} Comprehensive SIP calculation results
 */
export function calculateSIP({ monthlyInvestment, annualReturn, tenureMonths }) {
  const P = Math.max(0, Number(monthlyInvestment) || 0);
  const annualRate = Math.max(0, Number(annualReturn) || 0);
  const n = Math.max(1, Math.round(Number(tenureMonths) || 1));

  const totalInvested = P * n;

  // Monthly rate
  const r = (annualRate / 12) / 100;

  let futureValue = 0;
  if (r === 0) {
    // 0% return edge-case: simple total of contributions
    futureValue = totalInvested;
  } else {
    // Standard annuity due future value formula
    const compoundFactor = Math.pow(1 + r, n);
    futureValue = P * ((compoundFactor - 1) / r) * (1 + r);
  }

  // Precision rounding
  const maturityAmount = Math.round(futureValue * 100) / 100;
  const estimatedReturns = Math.max(0, Math.round((maturityAmount - totalInvested) * 100) / 100);

  // Growth percentage: (Returns / Invested) * 100
  const returnPercentage = totalInvested > 0
    ? Math.round((estimatedReturns / totalInvested) * 1000) / 10
    : 0;

  // Generate Year-wise growth breakdown
  const yearlyBreakdown = [];
  const totalYears = Math.ceil(n / 12);

  for (let y = 1; y <= totalYears; y++) {
    const currentMonths = Math.min(y * 12, n);
    const investedAtYear = P * currentMonths;
    let valueAtYear = 0;

    if (r === 0) {
      valueAtYear = investedAtYear;
    } else {
      const factor = Math.pow(1 + r, currentMonths);
      valueAtYear = P * ((factor - 1) / r) * (1 + r);
    }

    const roundedVal = Math.round(valueAtYear * 100) / 100;
    const profitAtYear = Math.max(0, Math.round((roundedVal - investedAtYear) * 100) / 100);

    yearlyBreakdown.push({
      year: y,
      months: currentMonths,
      totalInvested: investedAtYear,
      estimatedValue: roundedVal,
      estimatedProfit: profitAtYear,
      isFinal: currentMonths === n,
    });
  }

  return {
    monthlyInvestment: P,
    annualReturn: annualRate,
    tenureMonths: n,
    totalInvested,
    estimatedReturns,
    maturityAmount,
    returnPercentage,
    yearlyBreakdown,
  };
}

// ── EMI & Loan Calculation Engine ──────────────────────────

/**
 * Validation bounds for EMI & Loan inputs
 */
export const EMI_BOUNDS = {
  minAmount: 10000,
  maxAmount: 500000000, // NPR 50 Crore
  defaultAmount: 2500000, // NPR 25 Lakhs (Common Nepal Home/Property Loan)

  minRate: 0,
  maxRate: 40,
  defaultRate: 9, // 9% typical Nepal commercial bank base+spread

  minYears: 1,
  maxYears: 40,
  defaultYears: 20,

  minMonths: 1,
  maxMonths: 480,

  minFee: 0,
  maxFee: 10,
  defaultFee: 0,
};

/**
 * Common loan presets in Nepal
 */
export const LOAN_PRESETS = [
  { id: 'home', label: 'Home Loan', amount: 2500000, rate: 9.0, tenure: 20, tenureUnit: 'years', fee: 0.5 },
  { id: 'vehicle', label: 'Vehicle Loan', amount: 2000000, rate: 11.0, tenure: 7, tenureUnit: 'years', fee: 1.0 },
  { id: 'personal', label: 'Personal Loan', amount: 500000, rate: 13.5, tenure: 3, tenureUnit: 'years', fee: 1.0 },
  { id: 'education', label: 'Education Loan', amount: 1500000, rate: 10.5, tenure: 5, tenureUnit: 'years', fee: 0.75 },
  { id: 'business', label: 'Business Loan', amount: 5000000, rate: 12.0, tenure: 10, tenureUnit: 'years', fee: 1.0 },
];

/**
 * Validate EMI inputs and return friendly validation messages
 * @param {Object} inputs
 * @returns {Object} { isValid: boolean, errors: Object, sanitized: Object }
 */
export function validateEMIInputs(inputs) {
  const errors = {};
  const sanitized = {};

  // Loan Amount
  const rawAmount = Number(inputs.loanAmount);
  if (isNaN(rawAmount) || rawAmount <= 0) {
    errors.loanAmount = 'Loan amount must be greater than zero.';
    sanitized.loanAmount = EMI_BOUNDS.minAmount;
  } else if (rawAmount < EMI_BOUNDS.minAmount) {
    errors.loanAmount = `Minimum loan amount is NPR ${EMI_BOUNDS.minAmount.toLocaleString()}.`;
    sanitized.loanAmount = EMI_BOUNDS.minAmount;
  } else if (rawAmount > EMI_BOUNDS.maxAmount) {
    errors.loanAmount = `Maximum loan amount is NPR ${EMI_BOUNDS.maxAmount.toLocaleString()}.`;
    sanitized.loanAmount = EMI_BOUNDS.maxAmount;
  } else {
    sanitized.loanAmount = Math.round(rawAmount);
  }

  // Annual Interest Rate (%)
  const rawRate = Number(inputs.annualRate);
  if (isNaN(rawRate) || rawRate < EMI_BOUNDS.minRate) {
    errors.annualRate = 'Interest rate cannot be negative.';
    sanitized.annualRate = EMI_BOUNDS.minRate;
  } else if (rawRate > EMI_BOUNDS.maxRate) {
    errors.annualRate = `Interest rate cannot exceed ${EMI_BOUNDS.maxRate}%.`;
    sanitized.annualRate = EMI_BOUNDS.maxRate;
  } else {
    sanitized.annualRate = Math.round(rawRate * 100) / 100;
  }

  // Tenure
  const isMonths = inputs.tenureUnit === 'months';
  const rawTenure = Number(inputs.tenure);

  if (isMonths) {
    if (isNaN(rawTenure) || rawTenure < EMI_BOUNDS.minMonths) {
      errors.tenure = 'Tenure must be at least 1 month.';
      sanitized.tenure = EMI_BOUNDS.minMonths;
    } else if (rawTenure > EMI_BOUNDS.maxMonths) {
      errors.tenure = `Tenure cannot exceed ${EMI_BOUNDS.maxMonths} months (40 years).`;
      sanitized.tenure = EMI_BOUNDS.maxMonths;
    } else {
      sanitized.tenure = Math.round(rawTenure);
    }
    sanitized.tenureMonths = sanitized.tenure;
    sanitized.tenureYears = sanitized.tenure / 12;
  } else {
    if (isNaN(rawTenure) || rawTenure < EMI_BOUNDS.minYears) {
      errors.tenure = 'Tenure must be at least 1 year.';
      sanitized.tenure = EMI_BOUNDS.minYears;
    } else if (rawTenure > EMI_BOUNDS.maxYears) {
      errors.tenure = `Tenure cannot exceed ${EMI_BOUNDS.maxYears} years.`;
      sanitized.tenure = EMI_BOUNDS.maxYears;
    } else {
      sanitized.tenure = Math.round(rawTenure);
    }
    sanitized.tenureYears = sanitized.tenure;
    sanitized.tenureMonths = sanitized.tenure * 12;
  }
  sanitized.tenureUnit = isMonths ? 'months' : 'years';

  // Processing Fee (%)
  const rawFee = Number(inputs.processingFee);
  if (isNaN(rawFee) || rawFee < EMI_BOUNDS.minFee) {
    sanitized.processingFee = 0;
  } else if (rawFee > EMI_BOUNDS.maxFee) {
    errors.processingFee = `Processing fee cannot exceed ${EMI_BOUNDS.maxFee}%.`;
    sanitized.processingFee = EMI_BOUNDS.maxFee;
  } else {
    sanitized.processingFee = Math.round(rawFee * 100) / 100;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized,
  };
}

/**
 * Pure mathematical calculation of reducing-balance EMI
 * Formula:
 * Monthly Interest Rate: r = Annual Rate ÷ 12 ÷ 100
 * Number of Installments: n = Total Months
 * EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1)
 * 
 * If r == 0:
 * EMI = P ÷ n
 * 
 * @param {Object} params
 * @param {number} params.loanAmount - Principal P
 * @param {number} params.annualRate - Annual Interest Rate %
 * @param {number} params.tenureMonths - Total Months n
 * @param {number} params.processingFeePercent - Optional fee %
 * @returns {Object} Comprehensive EMI calculation results
 */
export function calculateEMI({ loanAmount, annualRate, tenureMonths, processingFeePercent = 0 }) {
  const P = Math.max(0, Number(loanAmount) || 0);
  const rate = Math.max(0, Number(annualRate) || 0);
  const n = Math.max(1, Math.round(Number(tenureMonths) || 1));
  const feePct = Math.max(0, Number(processingFeePercent) || 0);

  const r = (rate / 12) / 100;

  let monthlyEMI = 0;
  if (r === 0) {
    monthlyEMI = P / n;
  } else {
    const factor = Math.pow(1 + r, n);
    monthlyEMI = (P * r * factor) / (factor - 1);
  }

  const roundedEMI = Math.round(monthlyEMI * 100) / 100;
  const totalPayment = Math.round(roundedEMI * n * 100) / 100;
  const totalInterest = Math.max(0, Math.round((totalPayment - P) * 100) / 100);

  // Fee calculation
  const processingFeeAmount = Math.round((P * (feePct / 100)) * 100) / 100;
  const effectiveTotalCost = Math.round((totalPayment + processingFeeAmount) * 100) / 100;

  // Percentage breakdown
  const principalPct = totalPayment > 0
    ? Math.round((P / totalPayment) * 1000) / 10
    : 100;
  const interestPct = Math.max(0, Math.round((100 - principalPct) * 10) / 10);

  // Rate sensitivity comparison (-1% and +1%)
  const rateDown = Math.max(0, rate - 1);
  const rateUp = rate + 1;

  const calcSingleEMI = (altRate) => {
    const altR = (altRate / 12) / 100;
    if (altR === 0) return P / n;
    const f = Math.pow(1 + altR, n);
    return (P * altR * f) / (f - 1);
  };

  const emiDown = Math.round(calcSingleEMI(rateDown) * 100) / 100;
  const totalPaymentDown = Math.round(emiDown * n * 100) / 100;
  const interestDown = Math.max(0, Math.round((totalPaymentDown - P) * 100) / 100);

  const emiUp = Math.round(calcSingleEMI(rateUp) * 100) / 100;
  const totalPaymentUp = Math.round(emiUp * n * 100) / 100;
  const interestUp = Math.max(0, Math.round((totalPaymentUp - P) * 100) / 100);

  const rateComparison = {
    lower: {
      rate: rateDown,
      emi: emiDown,
      diffEMI: Math.round((emiDown - roundedEMI) * 100) / 100,
      totalInterest: interestDown,
      diffInterest: Math.round((interestDown - totalInterest) * 100) / 100,
    },
    current: {
      rate,
      emi: roundedEMI,
      totalInterest,
    },
    higher: {
      rate: rateUp,
      emi: emiUp,
      diffEMI: Math.round((emiUp - roundedEMI) * 100) / 100,
      totalInterest: interestUp,
      diffInterest: Math.round((interestUp - totalInterest) * 100) / 100,
    },
  };

  return {
    loanAmount: P,
    annualRate: rate,
    tenureMonths: n,
    processingFeePercent: feePct,
    processingFeeAmount,
    monthlyEMI: roundedEMI,
    totalPayment,
    totalInterest,
    effectiveTotalCost,
    principalPct,
    interestPct,
    rateComparison,
  };
}

/**
 * Generate full month-by-month reducing balance amortization schedule
 * Also aggregates yearly milestones for loan balance visualization
 * 
 * @param {Object} params
 * @param {number} params.loanAmount - Principal P
 * @param {number} params.annualRate - Annual Interest Rate %
 * @param {number} params.tenureMonths - Total Months n
 * @param {number} params.monthlyEMI - Monthly EMI
 * @returns {Object} { monthlySchedule: Array, yearlyMilestones: Array }
 */
export function generateAmortizationSchedule({ loanAmount, annualRate, tenureMonths, monthlyEMI }) {
  const P = Math.max(0, Number(loanAmount) || 0);
  const rate = Math.max(0, Number(annualRate) || 0);
  const n = Math.max(1, Math.round(Number(tenureMonths) || 1));
  const emi = Number(monthlyEMI) || 0;
  const r = (rate / 12) / 100;

  const monthlySchedule = [];
  const yearlyMilestones = [
    { year: 0, month: 0, balance: P, cumulativePrincipal: 0, cumulativeInterest: 0 }
  ];

  let currentBalance = P;
  let cumulativePrincipal = 0;
  let cumulativeInterest = 0;

  for (let m = 1; m <= n; m++) {
    const openingBalance = currentBalance;
    const interestPaid = r === 0 ? 0 : Math.round(openingBalance * r * 100) / 100;

    let principalPaid = 0;
    let closingBalance = 0;

    if (m === n || openingBalance <= emi) {
      // Last month or final payoff: pay off remaining principal cleanly
      principalPaid = openingBalance;
      closingBalance = 0;
    } else {
      principalPaid = Math.min(openingBalance, Math.round((emi - interestPaid) * 100) / 100);
      closingBalance = Math.max(0, Math.round((openingBalance - principalPaid) * 100) / 100);
    }

    cumulativePrincipal += principalPaid;
    cumulativeInterest += interestPaid;
    currentBalance = closingBalance;

    monthlySchedule.push({
      month: m,
      year: Math.ceil(m / 12),
      openingBalance,
      emi: Math.round((principalPaid + interestPaid) * 100) / 100,
      principalPaid,
      interestPaid,
      closingBalance,
    });

    // Milestone every 12 months or at the very end
    if (m % 12 === 0 || m === n) {
      const yr = Math.ceil(m / 12);
      // Avoid duplicate year entries
      if (!yearlyMilestones.some(ym => ym.year === yr)) {
        yearlyMilestones.push({
          year: yr,
          month: m,
          balance: closingBalance,
          cumulativePrincipal: Math.round(cumulativePrincipal * 100) / 100,
          cumulativeInterest: Math.round(cumulativeInterest * 100) / 100,
        });
      }
    }
  }

  return {
    monthlySchedule,
    yearlyMilestones,
  };
}

// ── Shared Loan Engine Helpers (Home, Personal & Vehicle Loans) ─

export const HOME_LOAN_DEFAULTS = {
  propertyPrice: 12000000, // NPR 1.2 Crore
  downPayment: 2000000,    // NPR 20 Lakhs
  loanAmount: 10000000,    // NPR 1 Crore
  annualRate: 8.75,
  tenureYears: 25,
  processingFee: 0,
};

export const PERSONAL_LOAN_DEFAULTS = {
  loanAmount: 500000, // NPR 5 Lakhs
  annualRate: 12,
  tenureYears: 5,
  processingFee: 0.75,
};

export const VEHICLE_LOAN_DEFAULTS = {
  vehiclePrice: 4500000, // NPR 45 Lakhs
  downPayment: 900000,   // NPR 9 Lakhs (20%)
  loanAmount: 3600000,   // NPR 36 Lakhs
  annualRate: 9,
  tenureYears: 7,
  processingFee: 0.5,
  vehicleType: 'Car',
};

export const VEHICLE_TYPES = [
  { id: 'car', label: 'Car', icon: '🚗', maxNRBLtv: 50, note: 'Standard private ICE vehicle cap (NRB: 50%)' },
  { id: 'suv', label: 'SUV', icon: '🚙', maxNRBLtv: 50, note: 'Private SUV / crossover cap (NRB: 50%)' },
  { id: 'ev', label: 'Electric Vehicle (EV)', icon: '⚡', maxNRBLtv: 80, note: 'Green vehicle concession (NRB: up to 80%-90%)' },
  { id: 'motorcycle', label: 'Motorcycle', icon: '🏍️', maxNRBLtv: 50, note: 'Two-wheeler financing (NRB: typically 50%)' },
  { id: 'scooter', label: 'Scooter', icon: '🛵', maxNRBLtv: 50, note: 'Two-wheeler commuter financing (NRB: 50%)' },
];

/**
 * Calculate Loan-to-Value (LTV) Ratio
 * @param {number} loanAmount
 * @param {number} assetPrice - Property or Vehicle Price
 * @returns {number} LTV as a percentage rounded to 1 decimal place (e.g. 83.3)
 */
export function calculateLTV(loanAmount, assetPrice) {
  const loan = Math.max(0, Number(loanAmount) || 0);
  const asset = Math.max(0, Number(assetPrice) || 0);
  if (asset <= 0) return 0;
  return Math.min(100, Math.round((loan / asset) * 1000) / 10);
}

/**
 * Get Loan Health assessment based on Loan-to-Value (LTV) Ratio
 * Guidelines:
 *  - Below 70%: Green (Low risk / Healthy)
 *  - 70% – 85%: Yellow (Moderate / High Equity Needed)
 *  - Above 85%: Red (High Risk / Exceeds NRB Guidelines)
 * @param {number} ltvPct
 * @returns {Object} { status: 'green'|'yellow'|'red', label: string, color: string, badgeClass: string, desc: string }
 */
export function getLTVHealth(ltvPct) {
  const ltv = Number(ltvPct) || 0;
  if (ltv < 70) {
    return {
      status: 'green',
      label: 'Healthy / Low Risk',
      color: '#10B981',
      badgeClass: 'rp-ltv-green',
      desc: 'LTV is under 70%. Complies comfortably with Nepal Rastra Bank (NRB) residential mortgage loan limits and preserves strong borrower equity.',
    };
  } else if (ltv <= 85) {
    return {
      status: 'yellow',
      label: 'Moderate / Caution',
      color: '#F59E0B',
      badgeClass: 'rp-ltv-yellow',
      desc: 'LTV is between 70% and 85%. Moderate equity buffer. Nepali commercial banks may require additional collateral or stringent debt-service-to-gross-income (DSTI) verification.',
    };
  } else {
    return {
      status: 'red',
      label: 'High Risk / Regulatory Alert',
      color: '#EF4444',
      badgeClass: 'rp-ltv-red',
      desc: 'LTV exceeds 85%. This is higher than standard NRB macroprudential caps (typically 70% for first-time residential homes and 50% for real estate in Kathmandu valley).',
    };
  }
}

/**
 * Quick tenure comparison helper (e.g., 5, 7, 10 years)
 * Shows the trade-off between lower monthly EMI and higher lifetime interest
 * @param {Object} params
 * @param {number} params.loanAmount
 * @param {number} params.annualRate
 * @param {number[]} [params.tenureYearsArray=[5, 7, 10]]
 * @param {number} [params.processingFeePercent=0]
 * @returns {Array} Array of comparison results
 */
export function calculateLoanComparison({
  loanAmount,
  annualRate,
  tenureYearsArray = [5, 7, 10],
  processingFeePercent = 0,
}) {
  return tenureYearsArray.map(years => {
    const months = years * 12;
    const res = calculateEMI({
      loanAmount,
      annualRate,
      tenureMonths: months,
      processingFeePercent,
    });
    const interestRatio = loanAmount > 0
      ? Math.round((res.totalInterest / loanAmount) * 1000) / 10
      : 0;

    return {
      years,
      months,
      monthlyEMI: res.monthlyEMI,
      totalInterest: res.totalInterest,
      totalPayment: res.totalPayment,
      interestRatio,
    };
  });
}

/**
 * Validate inputs for Home, Personal, and Vehicle loans
 * Ensures zero/negative prevention, down payment bounds, tenure limits, and NaN safety
 * @param {Object} inputs
 * @returns {Object} { isValid: boolean, errors: Object, sanitized: Object }
 */
export function validateLoanInputs(inputs = {}) {
  const errors = {};
  const {
    propertyPrice,
    vehiclePrice,
    downPayment,
    loanAmount,
    annualRate,
    tenure,
    tenureUnit = 'years',
    processingFee,
  } = inputs;

  const isMonths = tenureUnit === 'months';
  const hasAssetPrice = propertyPrice !== undefined || vehiclePrice !== undefined;
  const rawAssetPrice = propertyPrice !== undefined ? propertyPrice : vehiclePrice;

  // Sanitize asset price if present
  let sanitizedAssetPrice = 0;
  if (hasAssetPrice) {
    const num = Number(rawAssetPrice);
    if (isNaN(num) || num < 0) {
      errors.assetPrice = 'Price must be a positive number';
      sanitizedAssetPrice = 0;
    } else {
      sanitizedAssetPrice = Math.round(num);
    }
  }

  // Sanitize down payment if present
  let sanitizedDownPayment = 0;
  if (downPayment !== undefined) {
    const num = Number(downPayment);
    if (isNaN(num) || num < 0) {
      errors.downPayment = 'Down payment cannot be negative';
      sanitizedDownPayment = 0;
    } else if (hasAssetPrice && num > sanitizedAssetPrice) {
      errors.downPayment = 'Down payment cannot exceed total price';
      sanitizedDownPayment = sanitizedAssetPrice;
    } else {
      sanitizedDownPayment = Math.round(num);
    }
  }

  // Sanitize loan amount
  let sanitizedLoanAmount = 0;
  if (loanAmount !== undefined) {
    const num = Number(loanAmount);
    if (isNaN(num) || num < 0) {
      errors.loanAmount = 'Loan amount must be a positive number';
      sanitizedLoanAmount = 0;
    } else {
      sanitizedLoanAmount = Math.round(num);
    }
  } else if (hasAssetPrice) {
    sanitizedLoanAmount = Math.max(0, sanitizedAssetPrice - sanitizedDownPayment);
  }

  // Sanitize annual interest rate
  let sanitizedRate = 8.75;
  const rawRate = Number(annualRate);
  if (isNaN(rawRate) || rawRate < 0) {
    errors.annualRate = 'Interest rate cannot be negative';
    sanitizedRate = 0;
  } else if (rawRate > 50) {
    errors.annualRate = 'Interest rate cannot exceed 50%';
    sanitizedRate = 50;
  } else {
    sanitizedRate = Math.round(rawRate * 100) / 100;
  }

  // Sanitize tenure
  let sanitizedTenure = 1;
  let sanitizedTenureMonths = 12;
  const rawTenure = Number(tenure);
  if (isNaN(rawTenure) || rawTenure <= 0) {
    errors.tenure = 'Tenure must be at least 1 ' + (isMonths ? 'month' : 'year');
    sanitizedTenure = 1;
    sanitizedTenureMonths = isMonths ? 1 : 12;
  } else {
    const maxTenure = isMonths ? 360 : 30;
    sanitizedTenure = Math.min(maxTenure, Math.max(1, Math.round(rawTenure)));
    sanitizedTenureMonths = isMonths ? sanitizedTenure : sanitizedTenure * 12;
  }

  // Sanitize processing fee
  let sanitizedFee = 0;
  const rawFee = Number(processingFee);
  if (isNaN(rawFee) || rawFee < 0) {
    errors.processingFee = 'Fee percentage cannot be negative';
    sanitizedFee = 0;
  } else if (rawFee > 10) {
    errors.processingFee = 'Fee percentage cannot exceed 10%';
    sanitizedFee = 10;
  } else {
    sanitizedFee = Math.round(rawFee * 100) / 100;
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitized: {
      assetPrice: sanitizedAssetPrice,
      downPayment: sanitizedDownPayment,
      loanAmount: sanitizedLoanAmount,
      annualRate: sanitizedRate,
      tenure: sanitizedTenure,
      tenureUnit,
      tenureMonths: sanitizedTenureMonths,
      processingFee: sanitizedFee,
    },
  };
}

// ── SWP (Systematic Withdrawal Plan) Engine ───────────────

/**
 * Validation bounds for SWP inputs
 */
export const SWP_BOUNDS = {
  minCorpus: 10000,
  maxCorpus: 500000000, // NPR 50 Crore
  defaultCorpus: 2000000, // NPR 20 Lakhs

  minWithdrawal: 500,
  maxWithdrawal: 5000000, // NPR 50 Lakhs / month
  defaultWithdrawal: 20000,

  minRate: 0,
  maxRate: 50,
  defaultRate: 10, // 10% expected return

  minYears: 1,
  maxYears: 40,
  defaultYears: 15,

  minMonths: 1,
  maxMonths: 480,

  frequencies: ['monthly', 'quarterly', 'yearly'],
  defaultFrequency: 'monthly',
};

/**
 * Validate SWP inputs
 * @param {Object} inputs
 * @returns {Object} { isValid: boolean, errors: Object, warnings: Object, sanitized: Object }
 */
export function validateSWPInputs(inputs) {
  const errors = {};
  const warnings = {};
  const sanitized = {};

  // Initial Corpus
  const rawCorpus = Number(inputs.initialCorpus);
  if (isNaN(rawCorpus) || rawCorpus <= 0) {
    errors.initialCorpus = 'Initial corpus must be greater than zero.';
    sanitized.initialCorpus = SWP_BOUNDS.minCorpus;
  } else if (rawCorpus < SWP_BOUNDS.minCorpus) {
    errors.initialCorpus = `Minimum corpus is NPR ${SWP_BOUNDS.minCorpus.toLocaleString()}.`;
    sanitized.initialCorpus = SWP_BOUNDS.minCorpus;
  } else if (rawCorpus > SWP_BOUNDS.maxCorpus) {
    errors.initialCorpus = `Maximum corpus is NPR ${SWP_BOUNDS.maxCorpus.toLocaleString()}.`;
    sanitized.initialCorpus = SWP_BOUNDS.maxCorpus;
  } else {
    sanitized.initialCorpus = Math.round(rawCorpus);
  }

  // Monthly Withdrawal
  const rawWithdrawal = Number(inputs.monthlyWithdrawal);
  if (isNaN(rawWithdrawal) || rawWithdrawal <= 0) {
    errors.monthlyWithdrawal = 'Withdrawal amount must be greater than zero.';
    sanitized.monthlyWithdrawal = SWP_BOUNDS.minWithdrawal;
  } else if (rawWithdrawal < SWP_BOUNDS.minWithdrawal) {
    errors.monthlyWithdrawal = `Minimum withdrawal is NPR ${SWP_BOUNDS.minWithdrawal.toLocaleString()}.`;
    sanitized.monthlyWithdrawal = SWP_BOUNDS.minWithdrawal;
  } else if (rawWithdrawal > SWP_BOUNDS.maxWithdrawal) {
    errors.monthlyWithdrawal = `Maximum withdrawal is NPR ${SWP_BOUNDS.maxWithdrawal.toLocaleString()}.`;
    sanitized.monthlyWithdrawal = SWP_BOUNDS.maxWithdrawal;
  } else {
    sanitized.monthlyWithdrawal = Math.round(rawWithdrawal);
  }

  // Warning if first monthly withdrawal exceeds corpus
  if (sanitized.monthlyWithdrawal >= sanitized.initialCorpus) {
    warnings.monthlyWithdrawal = 'Warning: Monthly withdrawal is greater than or equal to initial corpus.';
  }

  // Expected Annual Return (%)
  const rawRate = Number(inputs.annualRate);
  if (isNaN(rawRate) || rawRate < SWP_BOUNDS.minRate) {
    errors.annualRate = 'Expected annual return cannot be negative.';
    sanitized.annualRate = SWP_BOUNDS.minRate;
  } else if (rawRate > SWP_BOUNDS.maxRate) {
    errors.annualRate = `Expected return cannot exceed ${SWP_BOUNDS.maxRate}%.`;
    sanitized.annualRate = SWP_BOUNDS.maxRate;
  } else {
    sanitized.annualRate = Math.round(rawRate * 10) / 10;
  }

  // Withdrawal Period
  const isMonths = inputs.tenureUnit === 'months';
  const rawTenure = Number(inputs.tenure);

  if (isMonths) {
    if (isNaN(rawTenure) || rawTenure < SWP_BOUNDS.minMonths) {
      errors.tenure = 'Withdrawal period must be at least 1 month.';
      sanitized.tenure = SWP_BOUNDS.minMonths;
    } else if (rawTenure > SWP_BOUNDS.maxMonths) {
      errors.tenure = `Withdrawal period cannot exceed ${SWP_BOUNDS.maxMonths} months (40 years).`;
      sanitized.tenure = SWP_BOUNDS.maxMonths;
    } else {
      sanitized.tenure = Math.round(rawTenure);
    }
    sanitized.tenureMonths = sanitized.tenure;
    sanitized.tenureYears = sanitized.tenure / 12;
  } else {
    if (isNaN(rawTenure) || rawTenure < SWP_BOUNDS.minYears) {
      errors.tenure = 'Withdrawal period must be at least 1 year.';
      sanitized.tenure = SWP_BOUNDS.minYears;
    } else if (rawTenure > SWP_BOUNDS.maxYears) {
      errors.tenure = `Withdrawal period cannot exceed ${SWP_BOUNDS.maxYears} years.`;
      sanitized.tenure = SWP_BOUNDS.maxYears;
    } else {
      sanitized.tenure = Math.round(rawTenure);
    }
    sanitized.tenureYears = sanitized.tenure;
    sanitized.tenureMonths = sanitized.tenure * 12;
  }
  sanitized.tenureUnit = isMonths ? 'months' : 'years';

  // Frequency
  const freq = (inputs.frequency || '').toLowerCase();
  sanitized.frequency = SWP_BOUNDS.frequencies.includes(freq) ? freq : SWP_BOUNDS.defaultFrequency;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    warnings,
    sanitized,
  };
}

/**
 * Simulate SWP period-by-period
 * For every period:
 * Step 1: Grow remaining corpus by periodic return
 * Step 2: Subtract withdrawal amount
 * Continues until period ends or corpus reaches zero
 * 
 * @param {Object} params
 * @param {number} params.initialCorpus - Initial lumpsum P
 * @param {number} params.monthlyWithdrawal - Monthly withdrawal base amount W
 * @param {number} params.annualRate - Annual return rate %
 * @param {number} params.tenureMonths - Total months of plan
 * @param {string} params.frequency - 'monthly' | 'quarterly' | 'yearly'
 * @returns {Object} Full SWP simulation results & breakdowns
 */
export function simulateSWP({
  initialCorpus,
  monthlyWithdrawal,
  annualRate,
  annualReturn,
  tenureMonths,
  tenureYears,
  frequency = 'monthly',
}) {
  const P = Math.max(0, Number(initialCorpus) || 0);
  const W_monthly = Math.max(0, Number(monthlyWithdrawal) || 0);
  const rate = Math.max(0, Number(annualRate ?? annualReturn) || 0);
  const totalMonths = Math.max(1, Math.round(Number(tenureMonths ?? (tenureYears ? tenureYears * 12 : null)) || 1));

  // Determine periodic parameters
  let r = 0;
  let periods = 0;
  let withdrawalPerPeriod = 0;
  let monthsPerPeriod = 1;

  if (frequency === 'quarterly') {
    r = (rate / 4) / 100;
    periods = Math.ceil(totalMonths / 3);
    withdrawalPerPeriod = W_monthly * 3;
    monthsPerPeriod = 3;
  } else if (frequency === 'yearly') {
    r = (rate / 1) / 100;
    periods = Math.ceil(totalMonths / 12);
    withdrawalPerPeriod = W_monthly * 12;
    monthsPerPeriod = 12;
  } else {
    // Default: monthly
    r = (rate / 12) / 100;
    periods = totalMonths;
    withdrawalPerPeriod = W_monthly;
    monthsPerPeriod = 1;
  }

  // Simulation execution
  const totalYears = Math.ceil(totalMonths / 12);
  const yearlyBuckets = Array.from({ length: totalYears }, (_, i) => ({
    year: i + 1,
    openingCorpus: 0,
    growth: 0,
    withdrawal: 0,
    closingCorpus: 0,
  }));

  let currentBalance = P;
  let totalWithdrawn = 0;
  let totalGrowth = 0;
  let isExhausted = false;
  let exhaustedPeriod = null;
  let exhaustedMonth = null;
  let exhaustedYear = null;

  for (let p = 1; p <= periods; p++) {
    const periodStartBalance = currentBalance;
    const currentMonth = Math.min(totalMonths, p * monthsPerPeriod);
    const currentYear = Math.min(totalYears, Math.ceil(currentMonth / 12));
    const yearBucket = yearlyBuckets[currentYear - 1];

    if (currentBalance <= 0) {
      if (!isExhausted) {
        isExhausted = true;
        exhaustedPeriod = p;
        exhaustedMonth = currentMonth;
        exhaustedYear = currentYear;
      }
      continue;
    }

    // Capture opening balance for the year on first period of that year
    if (yearBucket.openingCorpus === 0 && currentYear === 1 && p === 1) {
      yearBucket.openingCorpus = P;
    } else if (yearBucket.openingCorpus === 0) {
      yearBucket.openingCorpus = periodStartBalance;
    }

    // Step 1: Grow remaining corpus
    const periodGrowth = r === 0 ? 0 : periodStartBalance * r;
    const balanceAfterGrowth = periodStartBalance + periodGrowth;

    // Step 2: Subtract withdrawal
    let actualWithdrawal = 0;
    let periodEndBalance = 0;

    if (balanceAfterGrowth <= withdrawalPerPeriod) {
      // Corpus runs out this period
      actualWithdrawal = balanceAfterGrowth;
      periodEndBalance = 0;
      isExhausted = true;
      exhaustedPeriod = p;
      exhaustedMonth = currentMonth;
      exhaustedYear = currentYear;
    } else {
      actualWithdrawal = withdrawalPerPeriod;
      periodEndBalance = balanceAfterGrowth - actualWithdrawal;
    }

    currentBalance = periodEndBalance;
    totalGrowth += periodGrowth;
    totalWithdrawn += actualWithdrawal;

    yearBucket.growth += periodGrowth;
    yearBucket.withdrawal += actualWithdrawal;
    yearBucket.closingCorpus = periodEndBalance;
  }

  // Ensure consecutive opening balances match prior closing balance
  for (let y = 0; y < yearlyBuckets.length; y++) {
    if (y === 0) {
      yearlyBuckets[y].openingCorpus = P;
    } else {
      yearlyBuckets[y].openingCorpus = yearlyBuckets[y - 1].closingCorpus;
    }
  }

  // Yearly milestones for chart (Year 0 -> Year N)
  const yearlyMilestones = [
    { year: 0, balance: P, cumulativeWithdrawn: 0, cumulativeGrowth: 0 }
  ];

  let runningWithdrawn = 0;
  let runningGrowth = 0;

  yearlyBuckets.forEach(b => {
    runningWithdrawn += b.withdrawal;
    runningGrowth += b.growth;
    yearlyMilestones.push({
      year: b.year,
      balance: Math.round(b.closingCorpus * 100) / 100,
      cumulativeWithdrawn: Math.round(runningWithdrawn * 100) / 100,
      cumulativeGrowth: Math.round(runningGrowth * 100) / 100,
    });
  });

  // Final rounded values
  const finalRemainingCorpus = Math.max(0, Math.round(currentBalance * 100) / 100);
  const roundedTotalWithdrawn = Math.round(totalWithdrawn * 100) / 100;
  const roundedTotalGrowth = Math.round(totalGrowth * 100) / 100;

  // Sustainability indicator logic:
  // Green ('sustainable'): not exhausted and final balance >= 50% of initial corpus
  // Yellow ('monitor'): not exhausted but final balance < 50% of initial corpus
  // Red ('exhausted'): exhausted before selected period
  let sustainability = 'sustainable';
  let sustainabilityLabel = 'Likely Sustainable';
  let sustainabilityDesc = 'Your investment growth is outpacing or sustaining your withdrawals over the selected period.';

  if (isExhausted) {
    sustainability = 'exhausted';
    sustainabilityLabel = 'Corpus Exhausted Early';
    sustainabilityDesc = `Corpus is projected to deplete in Year ${exhaustedYear}, Month ${exhaustedMonth} before your planned ${totalYears}-year tenure ends.`;
  } else if (finalRemainingCorpus < P * 0.5) {
    sustainability = 'monitor';
    sustainabilityLabel = 'Monitor Closely';
    sustainabilityDesc = `Your corpus survives the full ${totalYears}-year period, but draws down more than 50% of your initial capital.`;
  }

  // Sensitivity analysis (-10% and +10% withdrawal)
  const runSensitivity = (factor) => {
    const altWithdrawal = W_monthly * factor;
    let altBal = P;
    let altWithdrawn = 0;
    let altExhausted = false;
    let altExhaustedMonth = null;
    let altExhaustedYear = null;
    const altWithdrawalPerPeriod = frequency === 'quarterly' ? altWithdrawal * 3 : (frequency === 'yearly' ? altWithdrawal * 12 : altWithdrawal);

    for (let p = 1; p <= periods; p++) {
      const curMo = Math.min(totalMonths, p * monthsPerPeriod);
      const curYr = Math.min(totalYears, Math.ceil(curMo / 12));
      if (altBal <= 0) {
        if (!altExhausted) {
          altExhausted = true;
          altExhaustedMonth = curMo;
          altExhaustedYear = curYr;
        }
        break;
      }
      const g = r === 0 ? 0 : altBal * r;
      const bg = altBal + g;
      if (bg <= altWithdrawalPerPeriod) {
        altWithdrawn += bg;
        altBal = 0;
        altExhausted = true;
        altExhaustedMonth = curMo;
        altExhaustedYear = curYr;
        break;
      } else {
        altWithdrawn += altWithdrawalPerPeriod;
        altBal = bg - altWithdrawalPerPeriod;
      }
    }

    return {
      monthlyWithdrawal: Math.round(altWithdrawal),
      finalBalance: Math.max(0, Math.round(altBal * 100) / 100),
      totalWithdrawn: Math.round(altWithdrawn * 100) / 100,
      isExhausted: altExhausted,
      exhaustedYear: altExhaustedYear,
      exhaustedMonth: altExhaustedMonth,
    };
  };

  const sensitivity = {
    minus10: runSensitivity(0.9),
    base: {
      monthlyWithdrawal: W_monthly,
      finalBalance: finalRemainingCorpus,
      totalWithdrawn: roundedTotalWithdrawn,
      isExhausted,
      exhaustedYear,
      exhaustedMonth,
    },
    plus10: runSensitivity(1.1),
  };

  return {
    initialCorpus: P,
    monthlyWithdrawal: W_monthly,
    annualRate: rate,
    tenureMonths: totalMonths,
    tenureYears: totalYears,
    frequency,
    totalAmountWithdrawn: roundedTotalWithdrawn,
    totalWithdrawn: roundedTotalWithdrawn,
    totalInterestEarned: roundedTotalGrowth,
    totalGrowth: roundedTotalGrowth,
    finalRemainingCorpus,
    isExhausted,
    exhaustedPeriod,
    exhaustedMonth,
    exhaustedYear,
    sustainability,
    sustainabilityLabel,
    sustainabilityDesc,
    yearlyBreakdown: yearlyBuckets.map(b => ({
      year: b.year,
      openingCorpus: Math.round(b.openingCorpus * 100) / 100,
      investmentGrowth: Math.round(b.growth * 100) / 100,
      withdrawal: Math.round(b.withdrawal * 100) / 100,
      closingCorpus: Math.max(0, Math.round(b.closingCorpus * 100) / 100),
    })),
    yearlyMilestones,
    sensitivity,
  };
}

// ── Nepal Personal Income Tax Engine (FY 2082/83) ─────────

/**
 * Validation bounds for Tax inputs
 */
export const TAX_BOUNDS = {
  minIncome: 0,
  maxIncome: 1000000000, // NPR 100 Crore
  defaultIncome: 1200000, // NPR 12 Lakhs
  defaultStatus: 'single', // 'single' | 'married'
};

/**
 * Validate Tax inputs and deduction values
 * @param {Object} inputs
 * @returns {Object} { isValid: boolean, errors: Object, warnings: Object, sanitized: Object }
 */
export function validateTaxInputs(inputs) {
  const errors = {};
  const warnings = {};
  const sanitized = {};

  // Gross Income
  const rawIncome = Number(inputs.grossIncome);
  if (isNaN(rawIncome) || rawIncome < 0) {
    errors.grossIncome = 'Gross annual income cannot be negative.';
    sanitized.grossIncome = 0;
  } else if (rawIncome > TAX_BOUNDS.maxIncome) {
    errors.grossIncome = 'Income exceeds allowable limit.';
    sanitized.grossIncome = TAX_BOUNDS.maxIncome;
  } else {
    sanitized.grossIncome = Math.round(rawIncome);
  }

  // Marital Status
  const status = (inputs.maritalStatus || '').toLowerCase();
  sanitized.maritalStatus = status === 'married' ? 'married' : 'single';

  // Deductions (sanitize negative values to zero)
  const sanitizeDeduction = (val) => {
    const n = Number(val);
    return isNaN(n) || n < 0 ? 0 : Math.round(n);
  };

  sanitized.deductions = {
    epf: sanitizeDeduction(inputs.deductions?.epf),
    cit: sanitizeDeduction(inputs.deductions?.cit),
    ssf: sanitizeDeduction(inputs.deductions?.ssf),
    lifeInsurance: sanitizeDeduction(inputs.deductions?.lifeInsurance),
    healthInsurance: sanitizeDeduction(inputs.deductions?.healthInsurance),
    donations: sanitizeDeduction(inputs.deductions?.donations),
  };

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    warnings,
    sanitized,
  };
}

/**
 * Calculate Nepal Personal Income Tax (Progressive Slab-by-Slab Calculation)
 * @param {Object} params
 * @param {number} params.grossIncome - Total Annual Taxable Income (NPR)
 * @param {'single' | 'married'} params.maritalStatus - Marital status
 * @param {Object} [params.deductions] - Deductions: { epf, cit, ssf, lifeInsurance, healthInsurance, donations }
 * @param {string} [params.fiscalYear] - Fiscal year key (default: '2082/83')
 * @returns {Object} Complete tax breakdown, take-home, and deductions applied
 */
export function calculateNepalIncomeTax({
  grossIncome,
  annualGrossIncome,
  maritalStatus = 'single',
  deductions = {},
  retirementContribution,
  lifeInsurancePremium,
  healthInsurancePremium,
  charitableDonations,
  fiscalYear = DEFAULT_FISCAL_YEAR,
}) {
  const config = NEPAL_TAX_CONFIG[fiscalYear] || NEPAL_TAX_CONFIG[DEFAULT_FISCAL_YEAR];
  const gross = Math.max(0, Number(grossIncome ?? annualGrossIncome) || 0);
  const status = maritalStatus === 'married' ? 'married' : 'single';
  const limits = config.deductionLimits;

  // ── 1. Calculate Allowable Deductions ──────────────
  const rawEPF = Math.max(0, Number(deductions.epf ?? retirementContribution) || 0);
  const rawCIT = Math.max(0, Number(deductions.cit) || 0);
  const rawSSF = Math.max(0, Number(deductions.ssf) || 0);
  const rawLife = Math.max(0, Number(deductions.lifeInsurance ?? lifeInsurancePremium) || 0);
  const rawHealth = Math.max(0, Number(deductions.healthInsurance ?? healthInsurancePremium) || 0);
  const rawDonations = Math.max(0, Number(deductions.donations ?? charitableDonations) || 0);

  // Retirement Fund Contribution limit: min(total contribution, 1/3 of gross, max limit)
  const totalRetirementContrib = rawEPF + rawCIT + rawSSF;
  const maxRetirementAllowable = Math.min(
    gross * limits.retirementIncomeFraction,
    limits.retirementMax
  );
  const allowableRetirement = Math.min(totalRetirementContrib, maxRetirementAllowable);

  // Insurance limits
  const allowableLife = Math.min(rawLife, limits.lifeInsuranceMax);
  const allowableHealth = Math.min(rawHealth, limits.healthInsuranceMax);

  // Donations limit: min(actual, 5% of gross, max 100,000)
  const maxDonationsAllowable = Math.min(gross * limits.donationIncomeFraction, limits.donationMaxAmount);
  const allowableDonations = Math.min(rawDonations, maxDonationsAllowable);

  const totalDeductionsClaimed = totalRetirementContrib + rawLife + rawHealth + rawDonations;
  const totalDeductionsApplied = Math.min(
    gross,
    Math.round((allowableRetirement + allowableLife + allowableHealth + allowableDonations) * 100) / 100
  );

  // ── 2. Net Taxable Income ─────────────────────────
  const netTaxableIncome = Math.max(0, gross - totalDeductionsApplied);

  // ── 3. Progressive Slab Calculation ───────────────
  const slabs = config.slabs[status];
  let remainingIncome = netTaxableIncome;
  let totalTax = 0;
  const breakdown = [];

  for (const slab of slabs) {
    if (remainingIncome <= 0) {
      breakdown.push({
        id: slab.id,
        label: slab.label,
        rate: slab.rate,
        rateLabel: slab.rateLabel,
        taxableInSlab: 0,
        taxPaid: 0,
        isActive: false,
      });
      continue;
    }

    const taxableInSlab = slab.limit === Infinity
      ? remainingIncome
      : Math.min(remainingIncome, slab.limit);

    const taxInSlab = Math.round(taxableInSlab * slab.rate * 100) / 100;
    totalTax += taxInSlab;
    remainingIncome -= taxableInSlab;

    breakdown.push({
      id: slab.id,
      label: slab.label,
      rate: slab.rate,
      rateLabel: slab.rateLabel,
      taxableInSlab: Math.round(taxableInSlab * 100) / 100,
      taxPaid: taxInSlab,
      isActive: true,
    });
  }

  totalTax = Math.round(totalTax);
  const annualTakeHome = Math.max(0, gross - totalTax);
  const monthlyTax = Math.round((totalTax / 12) * 100) / 100;
  const monthlyTakeHome = Math.round((annualTakeHome / 12) * 100) / 100;
  const effectiveTaxRate = gross > 0 ? Math.round((totalTax / gross) * 1000) / 10 : 0;

  return {
    fiscalYear: config.fiscalYear,
    maritalStatus: status,
    grossIncome: gross,
    deductions: {
      raw: {
        epf: rawEPF,
        cit: rawCIT,
        ssf: rawSSF,
        lifeInsurance: rawLife,
        healthInsurance: rawHealth,
        donations: rawDonations,
      },
      allowable: {
        retirement: allowableRetirement,
        lifeInsurance: allowableLife,
        healthInsurance: allowableHealth,
        donations: allowableDonations,
      },
      totalClaimed: totalDeductionsClaimed,
      totalApplied: totalDeductionsApplied,
    },
    totalDeductions: totalDeductionsApplied,
    netTaxableIncome,
    totalTax,
    effectiveTaxRate,
    monthlyTax,
    annualTakeHome,
    monthlyTakeHome,
    breakdown,
  };
}

// ── Nepal NEPSE Share Calculator Engine ───────────────────

/**
 * Calculate NEPSE broker commission for a given transaction amount
 * @param {number} amount - Gross transaction value (NPR)
 * @returns {number} Commission in NPR
 */
export function getNEPSEBrokerCommission(amount) {
  const val = Math.max(0, Number(amount) || 0);
  if (val === 0) return 0;

  let applicableRate = 0.0040;
  for (const slab of NEPSE_FEE_CONFIG.brokerSlabs) {
    if (val <= slab.max) {
      applicableRate = slab.rate;
      break;
    }
  }

  const calculated = val * applicableRate;
  return Math.max(NEPSE_FEE_CONFIG.minBrokerCommission, Math.round(calculated * 100) / 100);
}

/**
 * Calculate NEPSE Buy Cost
 * @param {Object} params
 * @param {number} params.price - Buying price per share (NPR)
 * @param {number} params.quantity - Number of shares (Kitta)
 * @returns {Object} Complete buy breakdown
 */
export function calculateNEPSEBuy({ price, quantity }) {
  const p = Math.max(0, Number(price) || 0);
  const q = Math.max(0, Number(quantity) || 0);

  if (p === 0 || q === 0) {
    return {
      sharePrice: p,
      quantity: q,
      grossAmount: 0,
      brokerCommission: 0,
      sebonFee: 0,
      dpCharge: 0,
      totalCost: 0,
      effectiveCostPerShare: 0,
    };
  }

  const grossAmount = Math.round(p * q * 100) / 100;
  const brokerCommission = getNEPSEBrokerCommission(grossAmount);
  const sebonFee = Math.round(grossAmount * NEPSE_FEE_CONFIG.sebonFeeRate * 100) / 100;
  const dpCharge = NEPSE_FEE_CONFIG.dpCharge;
  const totalCost = Math.round((grossAmount + brokerCommission + sebonFee + dpCharge) * 100) / 100;
  const effectiveCostPerShare = Math.round((totalCost / q) * 100) / 100;

  return {
    sharePrice: p,
    quantity: q,
    grossAmount,
    totalPurchaseAmount: grossAmount,
    brokerCommission,
    sebonFee,
    dpCharge,
    totalCost,
    effectiveCostPerShare,
  };
}

/**
 * Calculate NEPSE Sell & Profit
 * @param {Object} params
 * @param {number} params.buyPrice - Purchase price per share (NPR)
 * @param {number} params.sellPrice - Selling price per share (NPR)
 * @param {number} params.quantity - Number of shares (Kitta)
 * @param {'short' | 'long'} [params.holdingPeriod='short'] - Holding period (< 365d vs > 365d)
 * @param {'individual' | 'institution'} [params.investorType='individual'] - Taxpayer classification
 * @returns {Object} Complete sell, charges, CGT, and net profit breakdown
 */
export function calculateNEPSESell({
  buyPrice,
  sellPrice,
  quantity,
  holdingPeriod = 'short',
  investorType = 'individual',
}) {
  const bp = Math.max(0, Number(buyPrice) || 0);
  const sp = Math.max(0, Number(sellPrice) || 0);
  const q = Math.max(0, Number(quantity) || 0);

  // 1. Buy side cost
  const buyDetails = calculateNEPSEBuy({ price: bp, quantity: q });

  // 2. Sell side calculations
  const grossSaleAmount = Math.round(sp * q * 100) / 100;
  const sellBroker = getNEPSEBrokerCommission(grossSaleAmount);
  const sellSebon = Math.round(grossSaleAmount * NEPSE_FEE_CONFIG.sebonFeeRate * 100) / 100;
  const sellDp = NEPSE_FEE_CONFIG.dpCharge;
  const totalSellCharges = Math.round((sellBroker + sellSebon + sellDp) * 100) / 100;

  // Net selling amount before CGT
  const netSellingBeforeCGT = Math.max(0, Math.round((grossSaleAmount - totalSellCharges) * 100) / 100);

  // 3. Capital Gains Tax (CGT)
  // Taxable capital gain base = Net Selling Amount - Total Purchase Cost
  const taxableProfitBase = Math.round((netSellingBeforeCGT - buyDetails.totalCost) * 100) / 100;

  let cgtRate = NEPSE_FEE_CONFIG.cgtRates.individualShortTerm;
  let cgtRateLabel = '7.5%';

  if (investorType === 'institution') {
    cgtRate = NEPSE_FEE_CONFIG.cgtRates.institutional;
    cgtRateLabel = '10%';
  } else if (holdingPeriod === 'long') {
    cgtRate = NEPSE_FEE_CONFIG.cgtRates.individualLongTerm;
    cgtRateLabel = '5%';
  }

  let cgtAmount = 0;
  if (taxableProfitBase > 0) {
    cgtAmount = Math.round(taxableProfitBase * cgtRate * 100) / 100;
  }

  // 4. Net Receivable & Actual Profit/Loss
  const netReceivable = Math.max(0, Math.round((netSellingBeforeCGT - cgtAmount) * 100) / 100);
  const actualProfitLoss = Math.round((netReceivable - buyDetails.totalCost) * 100) / 100;
  const returnPercentage = buyDetails.totalCost > 0
    ? Math.round((actualProfitLoss / buyDetails.totalCost) * 10000) / 100
    : 0;

  const totalAllCharges = Math.round(
    (buyDetails.brokerCommission + buyDetails.sebonFee + buyDetails.dpCharge + totalSellCharges) * 100
  ) / 100;

  return {
    buyDetails,
    grossSaleAmount,
    sellBroker,
    sellSebon,
    sellDp,
    totalSellCharges,
    totalAllCharges,
    taxableProfitBase,
    cgtRate,
    cgtRateLabel,
    cgtAmount,
    netReceivable,
    actualProfitLoss,
    netProfit: actualProfitLoss,
    returnPercentage,
    isProfitable: actualProfitLoss > 0,
    isProfit: actualProfitLoss > 0,
    holdingPeriod,
    investorType,
  };
}

/**
 * Calculate Weighted Average Cost (WACC) for multiple purchase lots
 * @param {Array<{ price: number, quantity: number }>} lots
 * @returns {Object} WACC analytics
 */
export function calculateNEPSEWACC(lots) {
  if (!Array.isArray(lots) || lots.length === 0) {
    return {
      totalQuantity: 0,
      totalUnits: 0,
      totalInvestment: 0,
      wacc: 0,
      waccRate: 0,
      totalBuyCharges: 0,
      totalCostWithCharges: 0,
      adjustedWACC: 0,
      lots: [],
    };
  }

  let totalQty = 0;
  let totalGross = 0;
  let totalCharges = 0;

  const lotDetails = lots.map((lot, idx) => {
    const p = Math.max(0, Number(lot.price ?? lot.rate) || 0);
    const q = Math.max(0, Number(lot.quantity ?? lot.units) || 0);
    const gross = p * q;
    const buy = calculateNEPSEBuy({ price: p, quantity: q });

    totalQty += q;
    totalGross += gross;
    totalCharges += (buy.brokerCommission + buy.sebonFee + buy.dpCharge);

    return {
      id: idx + 1,
      price: p,
      quantity: q,
      grossAmount: gross,
      totalCost: buy.totalCost,
    };
  });

  const wacc = totalQty > 0 ? Math.round((totalGross / totalQty) * 100) / 100 : 0;
  const totalCostWithCharges = Math.round((totalGross + totalCharges) * 100) / 100;
  const adjustedWACC = totalQty > 0 ? Math.round((totalCostWithCharges / totalQty) * 100) / 100 : 0;

  return {
    totalQuantity: totalQty,
    totalUnits: totalQty,
    totalInvestment: Math.round(totalGross * 100) / 100,
    wacc,
    waccRate: wacc,
    totalBuyCharges: Math.round(totalCharges * 100) / 100,
    totalCostWithCharges,
    adjustedWACC,
    lots: lotDetails,
  };
}

/**
 * Determine Break-even Selling Price to recover all buy and sell charges
 * @param {Object} params
 * @param {number} params.buyPrice
 * @param {number} params.quantity
 * @returns {Object} Break-even details
 */
export function calculateNEPSEBreakEven({ buyPrice, quantity }) {
  const p = Math.max(0, Number(buyPrice) || 0);
  const q = Math.max(0, Number(quantity) || 0);

  if (p === 0 || q === 0) {
    return {
      buyPrice: p,
      quantity: q,
      totalBuyCost: 0,
      breakEvenPrice: 0,
      requiredIncrease: 0,
      buyCharges: 0,
      sellCharges: 0,
      totalRoundTripCharges: 0,
    };
  }

  const buy = calculateNEPSEBuy({ price: p, quantity: q });
  const targetNet = buy.totalCost;

  // Numerical refinement for break-even selling price
  let low = p;
  let high = p * 1.5;
  let bestPrice = p;

  for (let i = 0; i < 50; i++) {
    const mid = (low + high) / 2;
    const grossSale = mid * q;
    const broker = getNEPSEBrokerCommission(grossSale);
    const sebon = Math.round(grossSale * NEPSE_FEE_CONFIG.sebonFeeRate * 100) / 100;
    const dp = NEPSE_FEE_CONFIG.dpCharge;
    const netReceivable = grossSale - broker - sebon - dp;

    if (Math.abs(netReceivable - targetNet) < 0.005) {
      bestPrice = mid;
      break;
    }
    if (netReceivable < targetNet) {
      low = mid;
    } else {
      bestPrice = mid;
      high = mid;
    }
  }

  const breakEvenPrice = Math.round(bestPrice * 100) / 100;
  const requiredIncrease = p > 0 ? Math.round(((breakEvenPrice - p) / p) * 10000) / 100 : 0;

  const grossSaleAtBreakEven = breakEvenPrice * q;
  const sellBroker = getNEPSEBrokerCommission(grossSaleAtBreakEven);
  const sellSebon = Math.round(grossSaleAtBreakEven * NEPSE_FEE_CONFIG.sebonFeeRate * 100) / 100;
  const sellDp = NEPSE_FEE_CONFIG.dpCharge;
  const sellCharges = Math.round((sellBroker + sellSebon + sellDp) * 100) / 100;
  const buyCharges = Math.round((buy.brokerCommission + buy.sebonFee + buy.dpCharge) * 100) / 100;

  return {
    buyPrice: p,
    quantity: q,
    totalBuyCost: buy.totalCost,
    breakEvenPrice,
    requiredIncrease,
    buyCharges,
    sellCharges,
    totalRoundTripCharges: Math.round((buyCharges + sellCharges) * 100) / 100,
  };
}

// ── Nepal Fixed Deposit (FD) & Recurring Deposit (RD) Engine ─

/**
 * Calculate Fixed Deposit (FD) Maturity & Compound Interest
 * Formula: A = P * (1 + r/n)^(n*t)
 * 
 * @param {Object} params
 * @param {number} params.principal - Initial deposit amount (NPR)
 * @param {number} params.annualRate - Annual interest rate (%)
 * @param {number} params.tenureMonths - Total deposit duration in months
 * @param {string} [params.frequency='quarterly'] - 'monthly' | 'quarterly' | 'half-yearly' | 'yearly'
 * @param {number} [params.tdsPercent=5.0] - Interest tax percentage (%)
 * @returns {Object} Complete FD maturity results
 */
export function calculateFD({
  principal,
  annualRate,
  tenureMonths,
  frequency = 'quarterly',
  tdsPercent = 5.0,
}) {
  const P = Math.max(0, Number(principal) || 0);
  const rate = Math.max(0, Number(annualRate) || 0);
  const months = Math.max(1, Number(tenureMonths) || 1);
  const taxRate = Math.max(0, Number(tdsPercent) || 0);

  const freqConfig = FD_RD_CONFIG.compoundingFrequencies[frequency] || FD_RD_CONFIG.compoundingFrequencies.quarterly;
  const n = freqConfig.periodsPerYear;
  const r = rate / 100;
  const t = months / 12;

  // Exact Compound Interest: A = P * (1 + r/n)^(n*t)
  const grossMaturity = r === 0 ? P : P * Math.pow(1 + r / n, n * t);
  const roundedGrossMaturity = Math.round(grossMaturity * 100) / 100;
  const roundedGrossInterest = Math.max(0, Math.round((roundedGrossMaturity - P) * 100) / 100);
  const tdsAmount = Math.round(roundedGrossInterest * (taxRate / 100) * 100) / 100;
  const netInterest = Math.max(0, Math.round((roundedGrossInterest - tdsAmount) * 100) / 100);
  const netMaturity = Math.round((P + netInterest) * 100) / 100;

  // Effective Annual Yield (APY) = (1 + r/n)^n - 1
  const apy = r === 0 ? 0 : Math.round(((Math.pow(1 + r / n, n) - 1) * 100) * 100) / 100;

  // Yearly growth milestones for the SVG line chart
  const totalYears = Math.ceil(t);
  const milestones = [
    { year: 0, balance: P, principal: P, interest: 0, netInterest: 0 }
  ];

  for (let y = 1; y <= totalYears; y++) {
    const curT = Math.min(y, t);
    const yrGross = r === 0 ? P : P * Math.pow(1 + r / n, n * curT);
    const yrInt = yrGross - P;
    const yrTds = yrInt * (taxRate / 100);
    const yrNet = yrInt - yrTds;
    milestones.push({
      year: y,
      balance: Math.round((P + yrNet) * 100) / 100,
      principal: P,
      interest: Math.round(yrInt * 100) / 100,
      netInterest: Math.round(yrNet * 100) / 100,
    });
  }

  // Comparative SIP Simulation: Same amount invested in equity/SIP at 12% expected return
  const sipEstimatedValue = Math.round((P * Math.pow(1 + 0.12, t)) * 100) / 100;

  return {
    principal: P,
    annualRate: rate,
    tenureMonths: months,
    tenureYears: Math.round(t * 100) / 100,
    frequency,
    frequencyLabel: freqConfig.label,
    tdsPercent: taxRate,
    grossMaturity: roundedGrossMaturity,
    grossInterest: roundedGrossInterest,
    tdsAmount,
    netInterest,
    netMaturity,
    apy,
    milestones,
    sipComparison: {
      invested: P,
      estimatedValue: sipEstimatedValue,
      periodYears: Math.round(t * 10) / 10,
    },
  };
}

/**
 * Calculate Recurring Deposit (RD) Maturity & Compound Accumulation
 * 
 * @param {Object} params
 * @param {number} params.monthlyDeposit - Monthly installment amount (NPR)
 * @param {number} params.annualRate - Annual interest rate (%)
 * @param {number} params.tenureMonths - Total duration in months
 * @param {string} [params.frequency='monthly'] - Compounding frequency
 * @param {number} [params.tdsPercent=5.0] - Interest tax percentage (%)
 * @returns {Object} Complete RD maturity results
 */
export function calculateRD({
  monthlyDeposit,
  annualRate,
  tenureMonths,
  frequency = 'monthly',
  tdsPercent = 5.0,
}) {
  const D = Math.max(0, Number(monthlyDeposit) || 0);
  const rate = Math.max(0, Number(annualRate) || 0);
  const months = Math.max(1, Number(tenureMonths) || 1);
  const taxRate = Math.max(0, Number(tdsPercent) || 0);

  const freqConfig = FD_RD_CONFIG.compoundingFrequencies[frequency] || FD_RD_CONFIG.compoundingFrequencies.monthly;
  const n = freqConfig.periodsPerYear;
  const r = rate / 100;

  // Monthly deposit compound accumulation:
  // Each deposit m = 1..months is compounded for (months - m + 1) / 12 years
  let grossMaturity = 0;
  for (let m = 1; m <= months; m++) {
    const t_m = (months - m + 1) / 12;
    grossMaturity += r === 0 ? D : D * Math.pow(1 + r / n, n * t_m);
  }

  const totalDeposited = D * months;
  const roundedGrossMaturity = r === 0 ? totalDeposited : Math.round(grossMaturity * 100) / 100;
  const grossInterest = Math.max(0, Math.round((roundedGrossMaturity - totalDeposited) * 100) / 100);
  const tdsAmount = Math.round(grossInterest * (taxRate / 100) * 100) / 100;
  const netInterest = Math.max(0, Math.round((grossInterest - tdsAmount) * 100) / 100);
  const netMaturity = Math.round((totalDeposited + netInterest) * 100) / 100;
  const effectiveReturn = totalDeposited > 0
    ? Math.round((netInterest / totalDeposited) * 10000) / 100
    : 0;

  return {
    monthlyDeposit: D,
    annualRate: rate,
    tenureMonths: months,
    tenureYears: Math.round((months / 12) * 100) / 100,
    frequency,
    frequencyLabel: freqConfig.label,
    tdsPercent: taxRate,
    totalDeposited,
    totalDeposit: totalDeposited,
    grossMaturity: roundedGrossMaturity,
    grossInterest,
    tdsAmount,
    netInterest,
    netMaturity,
    effectiveReturn,
  };
}

// ── Nepal Retirement & Financial Goal Planner Engine ──────

/**
 * Calculate Retirement Planning Projections
 * 
 * @param {Object} params
 * @param {number} params.currentAge
 * @param {number} params.retirementAge
 * @param {number} params.monthlyExpenses
 * @param {number} params.inflation
 * @param {number} params.postReturn
 * @param {number} params.lifeExpectancy
 * @param {number} [params.preReturn=12.0]
 * @returns {Object}
 */
export function calculateRetirement({
  currentAge,
  retirementAge,
  monthlyExpenses,
  inflation,
  postReturn,
  lifeExpectancy,
  preReturn = 12.0,
}) {
  const cAge = Math.max(18, Math.min(80, Number(currentAge) || 30));
  const rAge = Math.max(cAge + 1, Math.min(90, Number(retirementAge) || 60));
  const lExp = Math.max(rAge + 1, Math.min(105, Number(lifeExpectancy) || 85));

  const exp = Math.max(1000, Number(monthlyExpenses) || 50000);
  const infRate = Math.max(0, Number(inflation) || 6.0);
  const postRate = Math.max(0, Number(postReturn) || 8.0);
  const preRate = Math.max(0, Number(preReturn) || 12.0);

  const yearsToRetirement = rAge - cAge;
  const yearsInRetirement = lExp - rAge;

  const inf = infRate / 100;
  const rPost = postRate / 100;
  const rPre = preRate / 100;

  // 1. Future monthly living expenses at retirement age
  const futureMonthlyExp = exp * Math.pow(1 + inf, yearsToRetirement);
  const annualExpAtRetirement = futureMonthlyExp * 12;

  // 2. Real rate of return in retirement: r_real = (1 + rPost) / (1 + inf) - 1
  const rReal = (1 + rPost) / (1 + inf) - 1;

  // 3. Estimated Sustainable Retirement Corpus (Annuity Present Value)
  let corpus = 0;
  if (Math.abs(rReal) < 0.0001) {
    corpus = annualExpAtRetirement * yearsInRetirement;
  } else {
    corpus = annualExpAtRetirement * ((1 - Math.pow(1 + rReal, -yearsInRetirement)) / rReal);
  }

  // 4. Monthly SIP required to accumulate corpus during working years
  const monthsAccum = yearsToRetirement * 12;
  const moRate = rPre / 12;
  let monthlySIPNeeded = 0;
  if (moRate > 0 && monthsAccum > 0) {
    monthlySIPNeeded = (corpus * moRate) / ((1 + moRate) * (Math.pow(1 + moRate, monthsAccum) - 1));
  } else if (monthsAccum > 0) {
    monthlySIPNeeded = corpus / monthsAccum;
  }

  // 5. Milestone points for visualization
  const milestones = [];
  const stepYears = Math.max(1, Math.round(yearsToRetirement / 5));
  for (let y = 0; y <= yearsToRetirement; y += stepYears) {
    const age = cAge + y;
    const curMoExp = exp * Math.pow(1 + inf, y);
    const monthsPast = y * 12;
    const accumulatedCorpus = moRate > 0 && monthsPast > 0
      ? monthlySIPNeeded * ((Math.pow(1 + moRate, monthsPast) - 1) / moRate) * (1 + moRate)
      : monthlySIPNeeded * monthsPast;

    milestones.push({
      age,
      year: y,
      monthlyExpense: Math.round(curMoExp),
      accumulatedCorpus: Math.round(accumulatedCorpus),
    });
  }

  // Ensure exact retirement age milestone is present
  if (milestones[milestones.length - 1].age !== rAge) {
    milestones.push({
      age: rAge,
      year: yearsToRetirement,
      monthlyExpense: Math.round(futureMonthlyExp),
      accumulatedCorpus: Math.round(corpus),
    });
  }

  return {
    currentAge: cAge,
    retirementAge: rAge,
    lifeExpectancy: lExp,
    yearsToRetirement,
    yearsInRetirement,
    currentMonthlyExpenses: exp,
    inflationRate: infRate,
    postRetirementReturn: postRate,
    preRetirementReturn: preRate,
    futureMonthlyExp: Math.round(futureMonthlyExp),
    annualExpAtRetirement: Math.round(annualExpAtRetirement),
    retirementCorpus: Math.round(corpus),
    monthlySIPNeeded: Math.round(monthlySIPNeeded),
    milestones,
  };
}

/**
 * Calculate Financial Goal Monthly Investment Requirement
 * 
 * @param {Object} params
 * @param {number} params.targetAmount
 * @param {number} params.currentSavings
 * @param {number} params.annualReturn
 * @param {number} params.tenureMonths
 * @returns {Object}
 */
export function calculateFinancialGoal({
  targetAmount,
  currentSavings,
  annualReturn,
  tenureMonths,
}) {
  const target = Math.max(1000, Number(targetAmount) || 5000000);
  const savings = Math.max(0, Number(currentSavings) || 0);
  const rate = Math.max(0.1, Number(annualReturn) || 10.0);
  const months = Math.max(1, Number(tenureMonths) || 180);

  const years = months / 12;
  const r = rate / 100;
  const moRate = r / 12;

  // Future Value of Existing Savings
  const fvSavings = savings * Math.pow(1 + r, years);

  // Remaining Gap to be bridged by monthly contributions
  const remainingGoal = Math.max(0, target - fvSavings);

  // Monthly SIP Required
  let monthlySIP = 0;
  if (remainingGoal > 0 && months > 0) {
    if (moRate > 0) {
      monthlySIP = (remainingGoal * moRate) / ((1 + moRate) * (Math.pow(1 + moRate, months) - 1));
    } else {
      monthlySIP = remainingGoal / months;
    }
  }

  const totalFreshSIP = monthlySIP * months;
  const totalInvested = savings + totalFreshSIP;
  const totalGrowth = Math.max(0, target - totalInvested);
  const savingsGrowth = Math.max(0, fvSavings - savings);

  return {
    targetAmount: Math.round(target),
    currentSavings: Math.round(savings),
    annualReturn: rate,
    tenureMonths: months,
    tenureYears: Math.round(years * 100) / 100,
    fvSavings: Math.round(fvSavings),
    savingsGrowth: Math.round(savingsGrowth),
    remainingGoal: Math.round(remainingGoal),
    monthlySIP: Math.round(monthlySIP),
    totalFreshSIP: Math.round(totalFreshSIP),
    totalInvested: Math.round(totalInvested),
    totalGrowth: Math.round(totalGrowth),
    isGoalAlreadyMet: fvSavings >= target,
  };
}

// ── Convenient Aliases for Unified Calculator API ─────────
export const calculateSWP = simulateSWP;
export const calculateNEPSEBuyCost = calculateNEPSEBuy;
export const calculateNEPSESellCost = calculateNEPSESell;
export const calculateWACC = calculateNEPSEWACC;
export const calculateBreakEvenPrice = calculateNEPSEBreakEven;

// ── Compound Annual Growth Rate (CAGR) Engine ─────────────

export const CAGR_DEFAULTS = {
  beginningValue: 100000, // NPR 1 Lakh
  endingValue: 180000,    // NPR 1.8 Lakhs
  years: 5,
  months: 0,
  days: 0,
  cagrPercent: 12.47,
};

/**
 * Calculate Compound Annual Growth Rate (CAGR) and metrics
 * CAGR = (Ending Value / Beginning Value)^(1 / t) - 1
 * 
 * @param {Object} params
 * @param {number} params.beginningValue - Initial investment amount (NPR)
 * @param {number} params.endingValue - Final investment value (NPR)
 * @param {number} [params.years=0] - Duration in years
 * @param {number} [params.months=0] - Duration in months
 * @param {number} [params.days=0] - Duration in days
 * @returns {Object} Comprehensive CAGR calculation results
 */
export function calculateCAGR({ beginningValue, endingValue, years = 0, months = 0, days = 0 }) {
  const BV = Math.max(0, Number(beginningValue) || 0);
  const EV = Math.max(0, Number(endingValue) || 0);
  const y = Math.max(0, Number(years) || 0);
  const m = Math.max(0, Number(months) || 0);
  const d = Math.max(0, Number(days) || 0);

  // Exact time duration in decimal years
  let t = y + (m / 12) + (d / 365);
  if (t <= 0) t = 1; // Guard against divide-by-zero

  const absoluteProfit = Math.round((EV - BV) * 100) / 100;
  const totalReturnPct = BV > 0
    ? Math.round(((EV - BV) / BV) * 10000) / 100
    : 0;

  let cagr = 0;
  if (BV > 0 && EV > 0) {
    cagr = (Math.pow(EV / BV, 1 / t) - 1) * 100;
  } else if (BV > 0 && EV === 0) {
    cagr = -100;
  }

  const roundedCAGR = Math.round(cagr * 100) / 100;
  const avgAnnualGrowth = Math.round((totalReturnPct / t) * 100) / 100;

  // Duration label formatting
  const durationParts = [];
  if (y > 0) durationParts.push(`${y} Year${y > 1 ? 's' : ''}`);
  if (m > 0) durationParts.push(`${m} Month${m > 1 ? 's' : ''}`);
  if (d > 0) durationParts.push(`${d} Day${d > 1 ? 's' : ''}`);
  const durationLabel = durationParts.length > 0 ? durationParts.join(' ') : `${t.toFixed(1)} Years`;

  return {
    beginningValue: BV,
    endingValue: EV,
    timeYears: Math.round(t * 100) / 100,
    durationLabel,
    absoluteProfit,
    totalReturnPct,
    cagr: roundedCAGR,
    avgAnnualGrowth,
    growthMultiple: BV > 0 ? Math.round((EV / BV) * 100) / 100 : 0,
    isGain: EV >= BV,
  };
}

/**
 * Calculate Future Value from a target CAGR
 * FV = Beginning Value * (1 + CAGR)^t
 * 
 * @param {Object} params
 * @param {number} params.beginningValue - Initial amount (NPR)
 * @param {number} params.cagrPercent - Annual CAGR %
 * @param {number} [params.years=0]
 * @param {number} [params.months=0]
 * @param {number} [params.days=0]
 * @returns {Object} Future value projection results
 */
export function calculateFutureValueFromCAGR({ beginningValue, cagrPercent, years = 0, months = 0, days = 0 }) {
  const BV = Math.max(0, Number(beginningValue) || 0);
  const rate = Number(cagrPercent) || 0;
  const y = Math.max(0, Number(years) || 0);
  const m = Math.max(0, Number(months) || 0);
  const d = Math.max(0, Number(days) || 0);

  let t = y + (m / 12) + (d / 365);
  if (t <= 0) t = 1;

  const r = rate / 100;
  const fv = BV * Math.pow(1 + r, t);
  const roundedFV = Math.round(fv * 100) / 100;
  const absoluteProfit = Math.round((roundedFV - BV) * 100) / 100;
  const totalReturnPct = BV > 0
    ? Math.round(((roundedFV - BV) / BV) * 10000) / 100
    : 0;
  const avgAnnualGrowth = Math.round((totalReturnPct / t) * 100) / 100;

  const durationParts = [];
  if (y > 0) durationParts.push(`${y} Year${y > 1 ? 's' : ''}`);
  if (m > 0) durationParts.push(`${m} Month${m > 1 ? 's' : ''}`);
  if (d > 0) durationParts.push(`${d} Day${d > 1 ? 's' : ''}`);
  const durationLabel = durationParts.length > 0 ? durationParts.join(' ') : `${t.toFixed(1)} Years`;

  return {
    beginningValue: BV,
    endingValue: roundedFV,
    timeYears: Math.round(t * 100) / 100,
    durationLabel,
    absoluteProfit,
    totalReturnPct,
    cagr: Math.round(rate * 100) / 100,
    avgAnnualGrowth,
    growthMultiple: BV > 0 ? Math.round((roundedFV / BV) * 100) / 100 : 0,
    isGain: roundedFV >= BV,
  };
}

/**
 * Generate discrete compounding points along the CAGR curve for SVG line chart
 * 
 * @param {Object} params
 * @param {number} params.beginningValue
 * @param {number} params.endingValue
 * @param {number} params.timeInYears
 * @param {number} [params.pointsCount=10]
 * @returns {Array} Array of { time, yearLabel, value, profit }
 */
export function generateCAGRGrowthCurve({ beginningValue, endingValue, timeInYears, pointsCount = 10 }) {
  const BV = Math.max(0, Number(beginningValue) || 0);
  const EV = Math.max(0, Number(endingValue) || 0);
  const t = Math.max(0.1, Number(timeInYears) || 1);

  if (BV <= 0) return [];

  const cagr = Math.pow(EV / BV, 1 / t) - 1;
  const points = [];
  const steps = Math.max(4, Math.min(20, Math.round(pointsCount)));

  for (let i = 0; i <= steps; i++) {
    const fraction = i / steps;
    const currentTime = fraction * t;
    const currentValue = Math.round(BV * Math.pow(1 + cagr, currentTime));
    const profit = currentValue - BV;

    points.push({
      time: Math.round(currentTime * 100) / 100,
      yearLabel: i === 0 ? 'Start' : `Yr ${currentTime.toFixed(1)}`,
      value: currentValue,
      profit,
    });
  }

  return points;
}

/**
 * Generate future growth milestones (5, 10, 15, 20 Years) using calculated CAGR
 * 
 * @param {Object} params
 * @param {number} params.beginningValue
 * @param {number} params.cagrPercent
 * @param {number[]} [params.yearsArray=[5, 10, 15, 20]]
 * @returns {Array} Array of milestone objects
 */
export function generateCAGRMilestones({ beginningValue, cagrPercent, yearsArray = [5, 10, 15, 20] }) {
  const BV = Math.max(0, Number(beginningValue) || 0);
  const r = (Number(cagrPercent) || 0) / 100;

  return yearsArray.map(years => {
    const estimatedValue = Math.round(BV * Math.pow(1 + r, years));
    const estimatedProfit = estimatedValue - BV;
    const multiple = BV > 0 ? Math.round((estimatedValue / BV) * 10) / 10 : 0;
    const totalReturnPct = BV > 0 ? Math.round(((estimatedValue - BV) / BV) * 100) : 0;

    return {
      years,
      estimatedValue,
      estimatedProfit,
      multiple,
      totalReturnPct,
    };
  });
}

/**
 * Compare up to three investment options by CAGR
 * 
 * @param {Array} investments - Array of { name, beginningValue, endingValue, years, icon }
 * @returns {Object} { ranked: Array, highestCAGR: number, winner: Object }
 */
export function compareInvestments(investments = []) {
  if (!investments || investments.length === 0) return { ranked: [], highestCAGR: 0, winner: null };

  const processed = investments.map((inv, idx) => {
    const res = calculateCAGR({
      beginningValue: inv.beginningValue,
      endingValue: inv.endingValue,
      years: inv.years,
    });

    return {
      id: `inv-${idx}`,
      name: inv.name || `Investment ${String.fromCharCode(65 + idx)}`,
      icon: inv.icon || '📈',
      beginningValue: res.beginningValue,
      endingValue: res.endingValue,
      years: res.timeYears,
      cagr: res.cagr,
      absoluteProfit: res.absoluteProfit,
      totalReturnPct: res.totalReturnPct,
      growthMultiple: res.growthMultiple,
      isHighest: false,
    };
  });

  // Find max CAGR
  let maxCAGR = -Infinity;
  let winnerIndex = -1;
  processed.forEach((item, index) => {
    if (item.cagr > maxCAGR) {
      maxCAGR = item.cagr;
      winnerIndex = index;
    }
  });

  if (winnerIndex >= 0) {
    processed[winnerIndex].isHighest = true;
  }

  return {
    investments: processed,
    highestCAGR: maxCAGR,
    winner: winnerIndex >= 0 ? processed[winnerIndex] : null,
  };
}

/**
 * Validate inputs for CAGR Calculator
 * 
 * @param {Object} inputs
 * @param {'cagr' | 'fv'} [mode='cagr']
 * @returns {Object} { isValid, errors, sanitized }
 */
export function validateCAGRInputs(inputs = {}, mode = 'cagr') {
  const errors = {};
  const {
    beginningValue,
    endingValue,
    cagrPercent,
    years = 0,
    months = 0,
    days = 0,
  } = inputs;

  let sanitizedBV = 100000;
  const rawBV = Number(beginningValue);
  if (isNaN(rawBV) || rawBV <= 0) {
    errors.beginningValue = 'Beginning value must be greater than 0';
    sanitizedBV = 100000;
  } else {
    sanitizedBV = Math.round(rawBV);
  }

  let sanitizedEV = 180000;
  if (mode === 'cagr') {
    const rawEV = Number(endingValue);
    if (isNaN(rawEV) || rawEV < 0) {
      errors.endingValue = 'Ending value cannot be negative';
      sanitizedEV = 0;
    } else {
      sanitizedEV = Math.round(rawEV);
    }
  }

  let sanitizedCAGR = 12.47;
  if (mode === 'fv') {
    const rawCAGR = Number(cagrPercent);
    if (isNaN(rawCAGR)) {
      errors.cagrPercent = 'Please enter a valid CAGR percentage';
      sanitizedCAGR = 0;
    } else if (rawCAGR < -100) {
      errors.cagrPercent = 'CAGR cannot be less than -100%';
      sanitizedCAGR = -100;
    } else {
      sanitizedCAGR = Math.round(rawCAGR * 100) / 100;
    }
  }

  const rawY = Math.max(0, Number(years) || 0);
  const rawM = Math.max(0, Number(months) || 0);
  const rawD = Math.max(0, Number(days) || 0);
  const totalDuration = rawY + (rawM / 12) + (rawD / 365);

  if (totalDuration <= 0) {
    errors.duration = 'Investment duration must be greater than zero';
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitized: {
      beginningValue: sanitizedBV,
      endingValue: sanitizedEV,
      cagrPercent: sanitizedCAGR,
      years: rawY,
      months: rawM,
      days: rawD,
      totalYears: Math.max(0.01, Math.round(totalDuration * 100) / 100),
    },
  };
}

// ── Nepal Inflation & Purchasing Power Engine ─────────────

export const INFLATION_DEFAULTS = {
  presentValue: 100000,      // NPR 1 Lakh
  annualInflationRate: 6.0,  // 6% per annum
  years: 10,
  months: 0,
};

export const INFLATION_PRESETS = [
  {
    id: 'house',
    label: 'House Purchase',
    icon: '🏡',
    presentValue: 15000000,
    annualInflationRate: 6.5,
    years: 15,
    months: 0,
    note: 'Long-term residential real estate in urban belts',
  },
  {
    id: 'vehicle',
    label: 'Vehicle Purchase',
    icon: '🚗',
    presentValue: 4500000,
    annualInflationRate: 6.0,
    years: 7,
    months: 0,
    note: 'Automobile & replacement cost projection',
  },
  {
    id: 'education',
    label: 'University Education',
    icon: '🎓',
    presentValue: 2000000,
    annualInflationRate: 7.0,
    years: 10,
    months: 0,
    note: 'Higher education & specialized college tuition',
  },
  {
    id: 'expenses',
    label: 'Household Expenses',
    icon: '🛒',
    presentValue: 600000,
    annualInflationRate: 6.0,
    years: 10,
    months: 0,
    note: 'Annual family groceries, healthcare & utility basket',
  },
  {
    id: 'retirement',
    label: 'Retirement Living',
    icon: '🏖️',
    presentValue: 1200000,
    annualInflationRate: 6.0,
    years: 20,
    months: 0,
    note: 'Annual living expenses during retirement',
  },
];

/**
 * Calculate Future Cost and Purchasing Power under Inflation
 * 
 * Formula:
 * Future Cost = Present Value * (1 + i)^t
 * Purchasing Power = Present Value / (1 + i)^t
 * 
 * @param {Object} params
 * @param {number} params.presentValue - Current amount in NPR
 * @param {number} params.annualInflationRate - Expected annual inflation rate (%)
 * @param {number} [params.years=10] - Duration in years
 * @param {number} [params.months=0] - Duration in months
 * @returns {Object} Comprehensive inflation calculation results
 */
export function calculateInflation({ presentValue, annualInflationRate, years = 10, months = 0 }) {
  const PV = Math.max(0, Number(presentValue) || 0);
  const rate = Number(annualInflationRate) || 0;
  const y = Math.max(0, Number(years) || 0);
  const m = Math.max(0, Number(months) || 0);

  let t = y + (m / 12);
  if (t <= 0) t = 1;

  const i = rate / 100;
  const compoundFactor = Math.pow(1 + i, t);

  const futureCost = Math.round(PV * compoundFactor * 100) / 100;
  const inflationIncrease = Math.round((futureCost - PV) * 100) / 100;
  const percentageIncrease = PV > 0
    ? Math.round(((futureCost - PV) / PV) * 10000) / 100
    : 0;

  const purchasingPower = compoundFactor > 0
    ? Math.round((PV / compoundFactor) * 100) / 100
    : 0;
  const purchasingPowerLoss = Math.round((PV - purchasingPower) * 100) / 100;
  const purchasingPowerLossPct = PV > 0
    ? Math.round(((PV - purchasingPower) / PV) * 10000) / 100
    : 0;

  const durationParts = [];
  if (y > 0) durationParts.push(`${y} Year${y > 1 ? 's' : ''}`);
  if (m > 0) durationParts.push(`${m} Month${m > 1 ? 's' : ''}`);
  const durationLabel = durationParts.length > 0 ? durationParts.join(' ') : `${t.toFixed(1)} Years`;

  return {
    presentValue: PV,
    annualInflationRate: Math.round(rate * 100) / 100,
    timeYears: Math.round(t * 100) / 100,
    durationLabel,
    futureCost,
    inflationIncrease,
    percentageIncrease,
    purchasingPower,
    purchasingPowerLoss,
    purchasingPowerLossPct,
    compoundFactor: Math.round(compoundFactor * 100) / 100,
    purchasingPowerRatio: PV > 0 ? Math.round((purchasingPower / PV) * 1000) / 10 : 0, // e.g. 55.8%
  };
}

/**
 * Generate inflation trajectory points for SVG charts
 * 
 * @param {Object} params
 * @param {number} params.presentValue
 * @param {number} params.annualInflationRate
 * @param {number} params.timeInYears
 * @param {number} [params.pointsCount=10]
 * @returns {Array} Array of trajectory points
 */
export function generateInflationCurves({ presentValue, annualInflationRate, timeInYears, pointsCount = 10 }) {
  const PV = Math.max(0, Number(presentValue) || 0);
  const i = (Number(annualInflationRate) || 0) / 100;
  const t = Math.max(0.1, Number(timeInYears) || 1);

  if (PV <= 0) return [];

  const steps = Math.max(4, Math.min(20, Math.round(pointsCount)));
  const points = [];

  for (let s = 0; s <= steps; s++) {
    const currentTime = (s / steps) * t;
    const factor = Math.pow(1 + i, currentTime);
    const futureCost = Math.round(PV * factor);
    const purchasingPower = factor > 0 ? Math.round(PV / factor) : 0;
    const purchasingPowerPct = factor > 0 ? Math.round((100 / factor) * 10) / 10 : 0;

    points.push({
      time: Math.round(currentTime * 100) / 100,
      yearLabel: s === 0 ? 'Today' : `Yr ${currentTime.toFixed(1)}`,
      futureCost,
      purchasingPower,
      purchasingPowerPct,
    });
  }

  return points;
}

/**
 * Validate inputs for Inflation Calculator
 * 
 * @param {Object} inputs
 * @param {'cost' | 'power'} [mode='cost']
 * @returns {Object} { isValid, errors, sanitized }
 */
export function validateInflationInputs(inputs = {}, mode = 'cost') {
  const errors = {};
  const {
    presentValue,
    annualInflationRate,
    years = 0,
    months = 0,
  } = inputs;

  let sanitizedPV = 100000;
  const rawPV = Number(presentValue);
  if (isNaN(rawPV) || rawPV <= 0) {
    errors.presentValue = 'Amount must be greater than 0';
    sanitizedPV = 100000;
  } else {
    sanitizedPV = Math.round(rawPV);
  }

  let sanitizedRate = 6.0;
  const rawRate = Number(annualInflationRate);
  if (isNaN(rawRate)) {
    errors.annualInflationRate = 'Please enter a valid inflation rate';
    sanitizedRate = 6.0;
  } else if (rawRate < -20) {
    errors.annualInflationRate = 'Inflation rate cannot be less than -20%';
    sanitizedRate = -20;
  } else if (rawRate > 100) {
    errors.annualInflationRate = 'Inflation rate cannot exceed 100%';
    sanitizedRate = 100;
  } else {
    sanitizedRate = Math.round(rawRate * 100) / 100;
  }

  const rawY = Math.max(0, Number(years) || 0);
  const rawM = Math.max(0, Number(months) || 0);
  const totalDuration = rawY + (rawM / 12);

  if (totalDuration <= 0) {
    errors.duration = 'Time period must be greater than zero';
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitized: {
      presentValue: sanitizedPV,
      annualInflationRate: sanitizedRate,
      years: rawY,
      months: rawM,
      totalYears: Math.max(0.1, Math.round(totalDuration * 100) / 100),
    },
  };
}


// ==============================================
// risePaisa — Nepal Centralized Regulatory & Market Configuration
// Single source of truth for all Nepal tax, NEPSE, banking, and financial planning parameters
// Update this file to modify tax slabs, broker commissions, bank compounding rules, or TDS
// ==============================================

/**
 * 1. Nepal Personal Income Tax Configuration
 * Resident Natural Person Slabs according to Finance Act 2082/83 (FY 2082/83)
 */
export const NEPAL_TAX_CONFIG = {
  currentFiscalYear: '2082/83',
  '2082/83': {
    fiscalYear: 'FY 2082/83',
    effectiveFrom: '2082-04-01 BS',
    description: 'Finance Act 2082/83 resident natural person progressive tax schedule',
    slabs: {
      single: [
        { id: 's1', label: 'First NPR 500,000 (0 - 5L)', limit: 500000, rate: 0.01, rateLabel: '1%' },
        { id: 's2', label: 'Next NPR 200,000 (5L - 7L)', limit: 200000, rate: 0.10, rateLabel: '10%' },
        { id: 's3', label: 'Next NPR 300,000 (7L - 10L)', limit: 300000, rate: 0.20, rateLabel: '20%' },
        { id: 's4', label: 'Next NPR 1,000,000 (10L - 20L)', limit: 1000000, rate: 0.30, rateLabel: '30%' },
        { id: 's5', label: 'Next NPR 3,000,000 (20L - 50L)', limit: 3000000, rate: 0.36, rateLabel: '36%' },
        { id: 's6', label: 'Above NPR 5,000,000 (50L+)', limit: Infinity, rate: 0.39, rateLabel: '39%' },
      ],
      married: [
        { id: 'm1', label: 'First NPR 600,000 (0 - 6L)', limit: 600000, rate: 0.01, rateLabel: '1%' },
        { id: 'm2', label: 'Next NPR 200,000 (6L - 8L)', limit: 200000, rate: 0.10, rateLabel: '10%' },
        { id: 'm3', label: 'Next NPR 300,000 (8L - 11L)', limit: 300000, rate: 0.20, rateLabel: '20%' },
        { id: 'm4', label: 'Next NPR 900,000 (11L - 20L)', limit: 900000, rate: 0.30, rateLabel: '30%' },
        { id: 'm5', label: 'Next NPR 3,000,000 (20L - 50L)', limit: 3000000, rate: 0.36, rateLabel: '36%' },
        { id: 'm6', label: 'Above NPR 5,000,000 (50L+)', limit: Infinity, rate: 0.39, rateLabel: '39%' },
      ],
    },
    deductionLimits: {
      retirementMax: 500000, // Maximum NPR 500,000 or 1/3rd of assessable income (EPF + CIT + SSF)
      retirementIncomeFraction: 1 / 3,
      lifeInsuranceMax: 40000, // NPR 40,000 max per year
      healthInsuranceMax: 20000, // NPR 20,000 max per year
      donationsMaxAmount: 100000, // NPR 100,000 max or 5% of taxable income
      donationMaxAmount: 100000, // Alias for backwards compatibility
      donationsIncomeFraction: 0.05,
      donationIncomeFraction: 0.05,
    },
  },
};

export const DEFAULT_FISCAL_YEAR = '2082/83';

/**
 * 2. NEPSE Stock Trading & Regulatory Fee Configuration
 * Based on current Securities Board of Nepal (SEBON) & CDS and Clearing regulations
 */
export const NEPSE_FEE_CONFIG = {
  // Official NEPSE equity broker commission slabs
  brokerSlabs: [
    { max: 50000, rate: 0.0040, label: 'Up to NPR 50,000 (0.40%)' },
    { max: 500000, rate: 0.0037, label: 'NPR 50,001 - 5,00,000 (0.37%)' },
    { max: 2000000, rate: 0.0034, label: 'NPR 5,00,001 - 20,00,000 (0.34%)' },
    { max: 10000000, rate: 0.0030, label: 'NPR 20,00,001 - 1,00,00,000 (0.30%)' },
    { max: Infinity, rate: 0.0027, label: 'Above NPR 1,00,00,000 (0.27%)' },
  ],
  minBrokerCommission: 10, // Statutory minimum NPR 10 per transaction
  sebonFeeRate: 0.00015, // SEBON regulatory fee: 0.015%
  dpCharge: 25, // CDS & Clearing Depository Participant charge: NPR 25 per transaction
  cgtRates: {
    individualShortTerm: 0.075, // 7.5% (< 365 days holding)
    individualLongTerm: 0.05, // 5.0% (>= 365 days holding)
    institutional: 0.10, // 10.0%
  },
};

/**
 * 3. Nepal Banking Fixed Deposit (FD) & Recurring Deposit (RD) Configuration
 * Standard conventions across Class A, B, and C financial institutions
 */
export const FD_RD_CONFIG = {
  compoundingFrequencies: {
    monthly: { periodsPerYear: 12, label: 'Monthly' },
    quarterly: { periodsPerYear: 4, label: 'Quarterly (Nepal Standard)' },
    'half-yearly': { periodsPerYear: 2, label: 'Half-Yearly' },
    yearly: { periodsPerYear: 1, label: 'Yearly' },
  },
  fdDefaults: {
    principal: 500000, // NPR 5 Lakhs
    annualRate: 8.0, // 8%
    tenureYears: 3,
    frequency: 'quarterly', // Standard banking practice in Nepal
    tdsPercent: 5.0, // Statutory 5% TDS for resident natural persons
  },
  rdDefaults: {
    monthlyDeposit: 10000, // NPR 10,000 / month
    annualRate: 7.5, // 7.5%
    tenureYears: 5,
    frequency: 'monthly',
    tdsPercent: 5.0,
  },
  bounds: {
    minDeposit: 1000,
    maxDeposit: 1000000000, // NPR 100 Crore
    minRate: 0.1,
    maxRate: 30,
    minYears: 0.25,
    maxYears: 30,
  },
};

/**
 * 4. Nepal Retirement & Financial Goal Planning Configuration
 */
export const RETIREMENT_GOAL_CONFIG = {
  retirementDefaults: {
    currentAge: 30,
    retirementAge: 60,
    monthlyExpenses: 50000,
    inflationRate: 6.0, // Historic long-term Nepal inflation benchmark
    postRetirementReturn: 8.0, // Conservative fixed-income / bond return in retirement
    lifeExpectancy: 85,
    preRetirementReturn: 12.0, // Long-term equity mutual fund / SIP growth expectation
  },
  goalDefaults: {
    targetAmount: 5000000, // NPR 50 Lakhs
    currentSavings: 500000, // NPR 5 Lakhs
    annualReturn: 10.0,
    tenureYears: 15,
  },
  goalPresets: [
    { id: 'house', label: '🏠 Buy a House', target: 15000000, savings: 1000000, years: 15, returnRate: 12 },
    { id: 'vehicle', label: '🚗 Buy a Vehicle', target: 3500000, savings: 500000, years: 5, returnRate: 10 },
    { id: 'education', label: '🎓 Child Education', target: 4000000, savings: 300000, years: 10, returnRate: 11 },
    { id: 'abroad', label: '🌍 Foreign Study', target: 6000000, savings: 800000, years: 6, returnRate: 10 },
    { id: 'wedding', label: '💍 Wedding Fund', target: 2500000, savings: 200000, years: 4, returnRate: 9 },
    { id: 'early-retire', label: '🏖 Early Retirement', target: 30000000, savings: 2000000, years: 20, returnRate: 12 },
  ],
};

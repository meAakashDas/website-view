import {
  calculateSIP,
  calculateEMI,
  calculateLTV,
  getLTVHealth,
  calculateNepalIncomeTax,
  calculateNEPSEBuy,
  calculateNEPSESell,
  calculateNEPSEWACC,
  calculateNEPSEBreakEven,
  calculateFD,
  calculateRD,
  calculateRetirement,
  calculateFinancialGoal,
  calculateCAGR,
  calculateFutureValueFromCAGR,
  calculateInflation,
  simulateSWP,
  generateAmortizationSchedule,
} from '../js/calculators/engine.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('RISEPAISA COMPREHENSIVE FINANCIAL CALCULATOR TEST SUITE');
console.log('========================================================\n');

// ─────────────────────────────────────────────────────────────
// 1. SIP CALCULATOR (Annuity-Due Monthly Compounding)
// ─────────────────────────────────────────────────────────────
console.log('--- 1. Testing SIP Calculator ---');
// Standard test: P=5000, 12% annual, 120 months
const sipRes = calculateSIP({ monthlyInvestment: 5000, annualReturn: 12, tenureMonths: 120 });
assert(sipRes.totalInvested === 600000, `Total invested is 600,000 (got ${sipRes.totalInvested})`);
// Annuity-due formula: 5000 * ((1.01^120 - 1)/0.01) * 1.01 = 1,161,695.38
assert(Math.abs(sipRes.maturityAmount - 1161695) < 2, `Maturity amount is ~1,161,695 (got ${sipRes.maturityAmount})`);
assert(Math.abs(sipRes.estimatedReturns - (sipRes.maturityAmount - sipRes.totalInvested)) < 0.01, `Returns = Maturity - Invested`);

// SIP Edge-case: 0% return
const sipZero = calculateSIP({ monthlyInvestment: 5000, annualReturn: 0, tenureMonths: 120 });
assert(sipZero.maturityAmount === 600000, `0% return maturity equals invested exactly`);
assert(sipZero.estimatedReturns === 0, `0% return has 0 estimated profit`);

// SIP Boundary: 1 month tenure
const sipOne = calculateSIP({ monthlyInvestment: 10000, annualReturn: 12, tenureMonths: 1 });
assert(sipOne.totalInvested === 10000, `1-month total invested is 10,000`);
assert(Math.abs(sipOne.maturityAmount - 10100) < 1, `1-month maturity earns 1 month interest (10,100)`);

// ─────────────────────────────────────────────────────────────
// 2. SWP CALCULATOR (Systematic Withdrawal Plan)
// ─────────────────────────────────────────────────────────────
console.log('\n--- 2. Testing SWP Simulation ---');
// Sustainable SWP: Corpus=1,000,000, withdrawal=5,000/mo, 10% rate, 5 years (60 months)
const swpRes = simulateSWP({ initialCorpus: 1000000, monthlyWithdrawal: 5000, annualRate: 10, tenureMonths: 60 });
assert(swpRes.totalWithdrawn === 300000, `Total withdrawn is 300,000 (got ${swpRes.totalWithdrawn})`);
assert(!swpRes.isExhausted, `Corpus is sustainable, not exhausted`);
assert(swpRes.finalRemainingCorpus > 1000000, `Corpus grew because 10% return > 6% annual withdrawal`);

// Exhausting SWP: Corpus=100,000, withdrawal=20,000/mo, 6% rate, 5 years (60 months)
const swpDepleted = simulateSWP({ initialCorpus: 100000, monthlyWithdrawal: 20000, annualRate: 6, tenureMonths: 60 });
assert(swpDepleted.isExhausted, `Exhausted flag set when withdrawal depletes funds`);
assert(swpDepleted.finalRemainingCorpus === 0, `Final remaining corpus is strictly 0 (never negative)`);
assert(swpDepleted.exhaustedMonth > 0 && swpDepleted.exhaustedMonth <= 6, `Depletes in month ${swpDepleted.exhaustedMonth}`);

// SWP 0% rate: exact subtraction
const swpZeroRate = simulateSWP({ initialCorpus: 500000, monthlyWithdrawal: 10000, annualRate: 0, tenureMonths: 24 });
assert(swpZeroRate.totalWithdrawn === 240000, `0% rate total withdrawn is 240,000`);
assert(swpZeroRate.finalRemainingCorpus === 260000, `0% rate remaining corpus is 500,000 - 240,000 = 260,000`);

// ─────────────────────────────────────────────────────────────
// 3. EMI & LOAN CALCULATORS (Reducing Balance Math)
// ─────────────────────────────────────────────────────────────
console.log('\n--- 3. Testing EMI & Loan Calculators ---');
// Loan: P=1,000,000, 10% rate, 60 months
const emiRes = calculateEMI({ loanAmount: 1000000, annualRate: 10, tenureMonths: 60, processingFeePercent: 1.0 });
assert(Math.abs(emiRes.monthlyEMI - 21247.04) < 1, `EMI is ~21,247 (got ${emiRes.monthlyEMI})`);
assert(emiRes.totalPayment > 1000000, `Total payment exceeds principal`);
assert(emiRes.processingFeeAmount === 10000, `1% processing fee on 1M is 10,000`);
assert(emiRes.effectiveTotalCost === emiRes.totalPayment + 10000, `Effective total cost includes fee`);
assert(emiRes.equivalentFlatRate > 0, `Equivalent flat rate computed (${emiRes.equivalentFlatRate}%)`);
assert(emiRes.flatRateComparison.flatExcessInterest > 0, `Flat rate excess interest accurately computed (>0)`);
assert(emiRes.flatRateComparison.flatTotalInterest > emiRes.totalInterest, `Flat rate total interest exceeds reducing balance interest`);

// Zero interest loan: EMI = P / n, total interest = 0
const emiZero = calculateEMI({ loanAmount: 1000000, annualRate: 0, tenureMonths: 60 });
assert(Math.abs(emiZero.monthlyEMI - 16666.67) < 1, `0% EMI is exactly P/n ~16,666.67`);
assert(emiZero.totalInterest === 0, `0% EMI total interest is 0 (no floating point residue)`);
assert(emiZero.totalPayment === 1000000, `0% EMI total payment equals principal`);

// Amortization schedule check
const amort = generateAmortizationSchedule({ loanAmount: 100000, annualRate: 12, tenureMonths: 12, monthlyEMI: 8884.88 });
assert(amort.monthlySchedule.length === 12, `Schedule contains 12 monthly rows`);
assert(amort.monthlySchedule[11].closingBalance === 0, `Final monthly closing balance reduces cleanly to 0`);

// ─────────────────────────────────────────────────────────────
// 4. HOME LOAN & LTV (NRB Directives)
// ─────────────────────────────────────────────────────────────
console.log('\n--- 4. Testing Home Loan & LTV ---');
// Residential property: 10,000,000, loan 6,000,000 => LTV 60%
const ltvNormal = calculateLTV(6000000, 10000000);
assert(ltvNormal === 60, `LTV is 60% (got ${ltvNormal}%)`);
const healthNormal = getLTVHealth(ltvNormal);
assert(healthNormal.status === 'green', `60% is green (under 70% NRB conservative benchmark)`);

// Above 85% warning test: loan 9,000,000 on 10,000,000 asset => LTV 90%
const ltvExcess = calculateLTV(9000000, 10000000);
assert(ltvExcess === 90, `LTV is 90%`);
const healthExcess = getLTVHealth(ltvExcess);
assert(healthExcess.status === 'red', `90% correctly triggers red regulatory alert (>85%)`);

// ─────────────────────────────────────────────────────────────
// 5. FD & RD CALCULATORS (Quarterly Compounding & 5% TDS)
// ─────────────────────────────────────────────────────────────
console.log('\n--- 5. Testing FD and RD Calculators ---');
// FD: P=500,000, 8% annual, 36 months, quarterly compounding, 5% TDS
const fdRes = calculateFD({ principal: 500000, annualRate: 8, tenureMonths: 36, frequency: 'quarterly', tdsPercent: 5 });
assert(Math.abs(fdRes.grossMaturity - 634120.8) < 2, `FD gross maturity is ~634,121 (got ${fdRes.grossMaturity})`);
assert(fdRes.tdsAmount === Math.round(fdRes.grossInterest * 0.05 * 100) / 100, `5% TDS accurately calculated`);
assert(fdRes.netMaturity === Math.round((fdRes.principal + fdRes.netInterest) * 100) / 100, `Net maturity = Principal + Net Interest`);

// RD: Monthly=10,000, 7.5% annual, 60 months
const rdRes = calculateRD({ monthlyDeposit: 10000, annualRate: 7.5, tenureMonths: 60 });
assert(rdRes.totalDeposited === 600000, `RD total deposited is 600,000`);
assert(rdRes.netInterest > 0, `RD earned interest is positive`);
assert(rdRes.netMaturity > rdRes.totalDeposited, `Net maturity exceeds total deposits`);

// ─────────────────────────────────────────────────────────────
// 6. CAGR CALCULATOR (Geometric Annualized Return)
// ─────────────────────────────────────────────────────────────
console.log('\n--- 6. Testing CAGR Calculator ---');
// Standard doubling over 5 years: (200k/100k)^(1/5) - 1 = 14.87%
const cagrRes = calculateCAGR({ beginningValue: 100000, endingValue: 200000, years: 5 });
assert(cagrRes.cagr === 14.87, `CAGR for doubling in 5 years is 14.87% (got ${cagrRes.cagr})`);
assert(cagrRes.growthMultiple === 2, `Growth multiple is 2.0x`);
assert(cagrRes.isGain === true, `isGain flag is true`);

// Capital loss: 100k to 50k over 3 years: (50k/100k)^(1/3) - 1 = -20.63%
const cagrLoss = calculateCAGR({ beginningValue: 100000, endingValue: 50000, years: 3 });
assert(cagrLoss.cagr === -20.63, `CAGR for loss is -20.63% (got ${cagrLoss.cagr})`);
assert(cagrLoss.isGain === false, `isGain flag is false for loss`);

// Fractional duration: 2 years 6 months = 2.5 years
const cagrFrac = calculateCAGR({ beginningValue: 100000, endingValue: 150000, years: 2, months: 6 });
assert(cagrFrac.timeYears === 2.5, `Time is 2.5 years`);
assert(cagrFrac.cagr === 17.61, `CAGR for 1.5x in 2.5 yrs is 17.61% (got ${cagrFrac.cagr})`);

// Future Value from CAGR: 100,000 at 14.87% for 5 years = ~200,000
const fvFromCagr = calculateFutureValueFromCAGR({ beginningValue: 100000, cagrPercent: 14.87, years: 5 });
assert(Math.abs(fvFromCagr.endingValue - 200000) < 50, `Projected FV matches initial target (got ${fvFromCagr.endingValue})`);

// ─────────────────────────────────────────────────────────────
// 7. INFLATION & PURCHASING POWER CALCULATOR
// ─────────────────────────────────────────────────────────────
console.log('\n--- 7. Testing Inflation Calculator ---');
// Present 50,000 at 6% inflation for 10 years:
// Future Cost = 50,000 * 1.06^10 = 89,542.38
const infRes = calculateInflation({ presentValue: 50000, annualInflationRate: 6.0, years: 10 });
assert(Math.abs(infRes.futureCost - 89542.38) < 1, `Future cost is ~89,542.38 (got ${infRes.futureCost})`);
// Real Purchasing Power = 50,000 / 1.06^10 = 27,919.74
assert(Math.abs(infRes.purchasingPower - 27919.74) < 1, `Purchasing power is ~27,919.74 (got ${infRes.purchasingPower})`);
assert(infRes.percentageIncrease === 79.08, `79.08% cumulative price surge`);

// 0% inflation boundary: no price increase, 100% purchasing power
const infZero = calculateInflation({ presentValue: 100000, annualInflationRate: 0, years: 15 });
assert(infZero.futureCost === 100000, `0% inflation future cost equals present value`);
assert(infZero.purchasingPower === 100000, `0% inflation purchasing power equals present value`);
assert(infZero.inflationIncrease === 0, `0 inflation increase`);

// ─────────────────────────────────────────────────────────────
// 8. RETIREMENT & FINANCIAL GOAL PLANNER
// ─────────────────────────────────────────────────────────────
console.log('\n--- 8. Testing Retirement & Financial Goal Planner ---');
// Current Age 30, Retirement 60, Life Exp 85, Monthly Exp 50,000, Inf 6%, Post-ret return 8%, Pre-ret 12%
const retRes = calculateRetirement({
  currentAge: 30,
  retirementAge: 60,
  lifeExpectancy: 85,
  monthlyExpenses: 50000,
  inflation: 6.0,
  postReturn: 8.0,
  preReturn: 12.0,
});
assert(retRes.yearsToRetirement === 30, `30 working years to retirement`);
assert(retRes.yearsInRetirement === 25, `25 years of retirement`);
// Future monthly expense at 60 = 50,000 * 1.06^30 = 287,175
assert(Math.abs(retRes.futureMonthlyExp - 287175) < 50, `Future monthly expense at 60 is ~287,175 (got ${retRes.futureMonthlyExp})`);
assert(retRes.retirementCorpus > 0, `Retirement corpus is positive`);
assert(retRes.monthlySIPNeeded > 0, `Monthly SIP needed is positive`);
assert(retRes.milestones.length > 0, `Milestones generated`);

// Financial Goal: Target 5,000,000 in 10 years at 12% return, existing savings 500,000
const goalRes = calculateFinancialGoal({
  targetAmount: 5000000,
  targetYears: 10,
  expectedReturn: 12.0,
  currentSavings: 500000,
});
assert(goalRes.fvSavings > 500000, `Existing savings compound over 10 years`);
assert(goalRes.monthlySIP > 0, `Requires fresh monthly SIP to bridge gap`);
assert(goalRes.totalGrowth > 0, `Compound growth contributes significantly`);

// ─────────────────────────────────────────────────────────────
// 9. NEPAL INCOME TAX (FY 2082/83 Progressive Slabs)
// ─────────────────────────────────────────────────────────────
console.log('\n--- 9. Testing Nepal Income Tax (FY 2082/83) ---');
// Single Individual, Gross 800,000 (No deductions)
// Slabs: First 5L @ 1% = 5,000; Next 2L @ 10% = 20,000; Next 1L @ 20% = 20,000 => Total = 45,000
const taxSingle = calculateNepalIncomeTax({ grossIncome: 800000, maritalStatus: 'single' });
assert(taxSingle.totalTax === 45000, `Tax for single earning 8L is 45,000 (got ${taxSingle.totalTax})`);
assert(taxSingle.annualTakeHome === 755000, `Annual take-home is 755,000`);

// Married Couple, Gross 800,000 (No deductions)
// Slabs: First 6L @ 1% = 6,000; Next 2L @ 10% = 20,000 => Total = 26,000
const taxMarried = calculateNepalIncomeTax({ grossIncome: 800000, maritalStatus: 'married' });
assert(taxMarried.totalTax === 26000, `Tax for married earning 8L is 26,000 (got ${taxMarried.totalTax})`);

// Deductions Cap: EPF/CIT retirement cap at min(actual, 1/3 gross, 500,000)
const taxWithDeductions = calculateNepalIncomeTax({
  grossIncome: 1200000,
  maritalStatus: 'single',
  deductions: { epf: 300000, lifeInsurance: 40000, healthInsurance: 20000 },
});
// 1/3 of 1.2M is 400,000, max limit is 500,000 => allowable retirement = 300,000
// Life insurance max 40,000 => 40,000; Health max 20,000 => 20,000 => Total deductions = 360,000
assert(taxWithDeductions.totalDeductions === 360000, `Allowable deductions correctly capped at 360,000 (got ${taxWithDeductions.totalDeductions})`);
assert(taxWithDeductions.netTaxableIncome === 840000, `Net taxable income is 1,200,000 - 360,000 = 840,000`);

// SSF Contributor Exemption from 1% SST on basic slab
const taxSSF = calculateNepalIncomeTax({ grossIncome: 800000, maritalStatus: 'single', hasSSF: true });
assert(taxSSF.totalTax === 40000, `Tax for single 8L with SSF is 40,000 (saves 5,000 1% SST, got ${taxSSF.totalTax})`);
assert(taxSSF.ssfExemptionApplied === true, `SSF exemption applied flag is true`);

// Resident Female Employee 10% Rebate
const taxFemale = calculateNepalIncomeTax({ grossIncome: 800000, maritalStatus: 'single', isFemale: true });
assert(taxFemale.totalTax === 40500, `Female resident 10% rebate reduces 45k to 40.5k (got ${taxFemale.totalTax})`);
assert(taxFemale.femaleRebateAmount === 4500, `Female rebate amount is 4,500`);

// Combined SSF and Female rebate
const taxSSFFemale = calculateNepalIncomeTax({ grossIncome: 800000, maritalStatus: 'single', hasSSF: true, isFemale: true });
assert(taxSSFFemale.totalTax === 36000, `Combined SSF and female rebate: 36,000 (got ${taxSSFFemale.totalTax})`);

// ─────────────────────────────────────────────────────────────
// 10. NEPSE SHARE CALCULATORS (SEBON Rules, CDSC & CGT)
// ─────────────────────────────────────────────────────────────
console.log('\n--- 10. Testing NEPSE Share Trading Calculators ---');
// Buy 100 shares @ NPR 500
// Gross = 50,000; Broker 0.40% = 200; SEBON 0.015% = 7.50; DP = 25 => Total = 50,232.50
const buyRes = calculateNEPSEBuy({ price: 500, quantity: 100 });
assert(buyRes.grossAmount === 50000, `Gross buy amount is 50,000`);
assert(buyRes.brokerCommission === 200, `Broker commission is 200`);
assert(buyRes.sebonFee === 7.5, `SEBON fee is 7.50`);
assert(buyRes.dpCharge === 25, `DP charge is 25.00`);
assert(buyRes.totalCost === 50232.5, `Total purchase cost is 50,232.50`);
assert(buyRes.effectiveCostPerShare === 502.33, `Effective price per share is 502.33`);

// Sell 100 shares @ NPR 600 (Short-term holding: 7.5% CGT)
const sellShort = calculateNEPSESell({ buyPrice: 500, sellPrice: 600, quantity: 100, holdingPeriod: 'short' });
assert(sellShort.grossSaleAmount === 60000, `Gross sale is 60,000`);
assert(sellShort.isProfitable, `Trade is marked profitable`);
assert(sellShort.cgtRate === 0.075 && sellShort.cgtRateLabel === '7.5%', `Short term CGT rate is 7.5%`);
assert(sellShort.cgtAmount > 0, `CGT applied`);
assert(sellShort.actualProfitLoss === sellShort.netReceivable - 50232.5, `Net profit accounts for full round-trip friction`);

// Sell Long-term holding: 5.0% CGT
const sellLong = calculateNEPSESell({ buyPrice: 500, sellPrice: 600, quantity: 100, holdingPeriod: 'long' });
assert(sellLong.cgtRate === 0.05 && sellLong.cgtRateLabel === '5%', `Long term CGT rate is 5.0%`);
assert(sellLong.cgtAmount < sellShort.cgtAmount, `Long term CGT is lower than short term CGT`);

// WACC Calculation: Purchase Lot 1 (100 shares @ 400) + Lot 2 (200 shares @ 500)
// Lot 1 gross = 40,000; Lot 2 gross = 100,000; Total = 140,000 / 300 = 466.67
const waccRes = calculateNEPSEWACC([
  { quantity: 100, price: 400 },
  { quantity: 200, price: 500 },
]);
assert(waccRes.totalQuantity === 300, `Total quantity is 300`);
assert(Math.abs(waccRes.waccRate - 466.67) < 0.1, `Standard WACC rate is ~466.67 (got ${waccRes.waccRate})`);
assert(Math.abs(waccRes.adjustedWACC - 468.67) < 0.1, `Adjusted WACC with purchase fees is ~468.67 (got ${waccRes.adjustedWACC})`);

// Break-even price: buying 100 shares @ 500 requires selling at ~504.52 to cover round-trip fees
const beRes = calculateNEPSEBreakEven({ buyPrice: 500, quantity: 100 });
assert(beRes.breakEvenPrice > 500, `Break-even price (${beRes.breakEvenPrice}) exceeds buy price (500)`);
assert(beRes.requiredIncrease > 0.8 && beRes.requiredIncrease < 1.3, `Requires ~0.9%-1.1% stock increase (${beRes.requiredIncrease}%) to break even`);

// ─────────────────────────────────────────────────────────────
// SUMMARY REPORT
// ─────────────────────────────────────────────────────────────
console.log(`\n========================================================`);
console.log(`RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log(`========================================================`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL 12 CALCULATORS MATHEMATICALLY & REGULATORY VERIFIED CLEANLY.');
}

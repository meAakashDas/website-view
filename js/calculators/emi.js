// ==============================================
// risePaisa — Nepal EMI & Loan Calculator Component
// Unified Loan Calculators Architecture (Home, Personal, Vehicle)
// Reuses the core reducing balance calculation engine
// ==============================================
import { renderLoanCalculators, initLoanCalculators } from './loans.js';

export { renderLoanCalculators, initLoanCalculators };

/**
 * Backwards-compatible bridge for renderEMICalculator
 * @param {string} [subtab='home']
 * @returns {string} HTML markup
 */
export function renderEMICalculator(subtab = 'home') {
  return renderLoanCalculators(subtab);
}

/**
 * Backwards-compatible bridge for initEMICalculator
 * @param {string} [subtab='home']
 */
export function initEMICalculator(subtab = 'home') {
  return initLoanCalculators(subtab);
}

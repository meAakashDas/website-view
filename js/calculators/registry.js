// ==============================================
// risePaisa - Calculator Hub Registry
// Catalog of active financial calculators categorized for Nepal
// ==============================================

export const CALCULATOR_CATEGORIES = [
  'All',
  'Investment & Savings',
  'Loans & EMI',
  'Tax & Salary',
  'NEPSE & Shares',
  'Inflation & Planning',
];

export const CALCULATOR_REGISTRY = [
  // ── 1. SIP Calculator ──────────────────────────
  {
    id: 'sip',
    title: 'SIP Calculator',
    shortDesc: 'Calculate wealth accumulation and compound maturity returns for Systematic Investment Plans in Nepal.',
    category: 'Investment & Savings',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/learn/guides/complete-sip-guide',
      label: 'Read Guide: Complete SIP & Compounding Guide',
    },
  },

  // ── 2. EMI & Loan Calculator ───────────────────
  {
    id: 'emi',
    title: 'EMI & Loan Calculator',
    shortDesc: 'Calculate reducing-balance monthly EMIs, total interest, and full repayment schedules for Nepal loans.',
    category: 'Loans & EMI',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/blog/reducing-balance-vs-flat-interest-loan-nepal',
      label: 'Read Guide: Reducing vs Flat Rate Loan EMI',
    },
  },

  // ── 3. SWP Calculator ──────────────────────────
  {
    id: 'swp',
    title: 'SWP Calculator',
    shortDesc: 'Systematic Withdrawal Plan: simulate regular monthly cash flow and project remaining corpus health over time.',
    category: 'Investment & Savings',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/learn/guides/complete-mutual-fund-guide',
      label: 'Read Guide: Nepal Mutual Funds & Systematic Withdrawal',
    },
  },

  // ── 4. Home Loan Calculator ────────────────────
  {
    id: 'home-loan',
    title: 'Home Loan Calculator',
    shortDesc: 'Calculate housing loan installments, LTV health metrics, and long-term interest costs for property in Nepal.',
    category: 'Loans & EMI',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/learn/guides/complete-home-loan-guide',
      label: 'Read Guide: Complete Home Loan & LTV Manual',
    },
  },

  // ── 5. Personal Loan Calculator ────────────────
  {
    id: 'personal-loan',
    title: 'Personal Loan Calculator',
    shortDesc: 'Compute monthly repayment schedules, true borrowing costs, and quick tenure comparisons for personal loans.',
    category: 'Loans & EMI',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/blog/reducing-balance-vs-flat-interest-loan-nepal',
      label: 'Read Guide: Personal Loan Interest Spreads & EMI',
    },
  },

  // ── 6. Vehicle Loan Calculator ─────────────────
  {
    id: 'vehicle-loan',
    title: 'Vehicle Loan Calculator',
    shortDesc: 'Calculate down payment, loan ratio, and monthly EMIs for two-wheelers, cars, SUVs, and electric vehicles.',
    category: 'Loans & EMI',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/blog/reducing-balance-vs-flat-interest-loan-nepal',
      label: 'Read Guide: Vehicle Loan Financing & Reducing EMI',
    },
  },

  // ── 7. Fixed Deposit & RD Calculator ───────────
  {
    id: 'fdrd',
    title: 'Fixed Deposit & RD Calculator',
    shortDesc: 'Calculate FD and RD returns with quarterly/monthly compounding, statutory 5% TDS deduction, and APY yield.',
    category: 'Investment & Savings',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 2 2 7h20L12 2z"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/learn/banking/deposit-types-fixed-deposit-nepal',
      label: 'Read Guide: FD Mechanics & 5% TDS in Nepal',
    },
  },

  // ── 8. Nepal Income Tax Calculator ─────────────
  {
    id: 'tax',
    title: 'Nepal Income Tax Calculator',
    shortDesc: 'Calculate personal income tax for FY 2082/83 across resident individual and married couple progressive slabs.',
    category: 'Tax & Salary',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/learn/guides/complete-income-tax-guide',
      label: 'Read Guide: Nepal Income Tax Slabs & Deductions FY 2082/83',
    },
  },

  // ── 9. NEPSE Share Calculator ──────────────────
  {
    id: 'share',
    title: 'NEPSE Share Calculator',
    shortDesc: 'Complete NEPSE trading suite: Buy Costs, Sell & Profit, Capital Gains Tax, WACC Average Price, and Break-even recovery.',
    category: 'NEPSE & Shares',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/learn/guides/complete-tms-guide',
      label: 'Read Guide: Complete NEPSE Online TMS & Broker Guide',
    },
  },

  // ── 10. CAGR Calculator ────────────────────────
  {
    id: 'cagr',
    title: 'CAGR Calculator',
    shortDesc: 'Measure the Compound Annual Growth Rate of your stock, mutual fund, real estate, or business investments.',
    category: 'Investment & Savings',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/blog/pe-ratio-eps-book-value-explained-nepse',
      label: 'Read Guide: Valuation Metrics & Investment Returns',
    },
  },

  // ── 11. Inflation Calculator ───────────────────
  {
    id: 'inflation',
    title: 'Inflation Calculator',
    shortDesc: 'Understand the erosion of purchasing power over time and plan for future price escalation in Nepal.',
    category: 'Inflation & Planning',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/learn/investing/inflation-vs-savings-nepal',
      label: 'Read Guide: Inflation & Purchasing Power in Nepal',
    },
  },

  // ── 12. Retirement & Goal Planner ──────────────
  {
    id: 'retirement',
    title: 'Retirement & Goal Planner',
    shortDesc: 'Plan long-term retirement corpus needs, inflation escalation, and required monthly SIPs for major life goals.',
    category: 'Inflation & Planning',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12a10.06 10.06 0 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/></svg>`,
    status: 'active',
    badge: 'Popular',
    featured: true,
    companionLink: {
      url: '/learn/guides/complete-retirement-planning-guide',
      label: 'Read Guide: Retirement & Goal Planning in Nepal',
    },
  },
];

// risePaisa | Resources Catalog Data
const RESOURCES = [
  {
    id: 1,
    slug: 'notion-finance-tracker',
    title: 'Notion Finance Tracker',
    shortDescription: 'A complete Notion operating system to track Nepali income, room rent, festival sinking funds, eSewa/Khalti balances, and NEPSE portfolio growth.',
    fullDescription: `Take full control of your personal finances with this beautifully engineered Notion template designed for real life in Nepal. Track every rupee coming in and going out, manage multiple bank accounts and digital wallets, allocate dedicated sinking funds for major Nepali festivals like Dashain and Tihar, and visualize your true net worth in real time.\n\nDesigned specifically for Nepali professionals, freelancers, and students managing cash across Class-A commercial banks, eSewa, Khalti, and physical cash. Whether you earn NPR 25,000 or NPR 250,000, this tracker adapts to your financial realities, eliminates unrecorded cash leaks, and helps you compound wealth systematically.`,
    price: 299,
    currency: 'NPR',
    creator: 'Aakash Das',
    category: 'Notion',
    thumbnail: null,
    previewVideoUrl: 'https://www.youtube-nocookie.com/embed/dbWxH9C5cBE?rel=0&modestbranding=1&controls=1&showinfo=0',
    imageUrl: 'assets/images/resource-notion-preview.png',
    setupTime: '15-min initial setup · 5 min/week maintenance',
    expectedTime: '15 minutes',
    whatYouLearn: [
      'Centralize multi-channel income (salary, remittances, freelance, cash dividends)',
      'Categorize daily living costs adapted for Nepal (room rent, groceries, transport, utility bills)',
      'Establish automated sinking funds for Dashain, Tihar, and annual insurance premiums',
      'Track digital wallet balances across eSewa, Khalti, IME Pay, and bank accounts',
      'Monitor NEPSE stock portfolio allotments, mutual fund SIPs, and WACC cost bases',
      'Automate month-end cash flow reconciliation and visualize savings ratios',
      'Calculate true personal net worth (Liquid Assets + Investments - Outstanding Debts)',
      'Prevent lifestyle inflation with visual spending threshold alerts'
    ],
    whatsIncluded: [
      'Comprehensive Monthly Budget & Cash Flow Dashboard',
      'Multi-Account Balance Ledger (Commercial Banks, Digital Wallets, Cash in Hand)',
      'Nepali Festival & Annual Expense Sinking Fund Tracker',
      'NEPSE Stock & Open-Ended Mutual Fund Portfolio Ledger',
      'Emergency Fund Milestone Tracker (3 to 6 Months Living Costs)',
      'Automated Net Worth Calculator with Historical Growth Chart',
      'Mobile-Optimized Quick-Entry Widget for Daily On-The-Go Expenses',
      'Step-by-Step Setup Video Guide & Lifetime Notion Workspace Updates'
    ],
    whatItContains: [
      'Interactive Notion Database with relational rollups for automatic balance tallying',
      'Pre-populated expense categories matching urban and semi-urban Nepali lifestyles',
      'Dedicated debt repayment tracker for personal loans, credit cards, and hire-purchase EMIs',
      'Archival database to preserve multi-year financial records for IRD tax reconciliation'
    ],
    howToUse: [
      {
        stepTitle: '1. One-Click Workspace Duplicate',
        stepDesc: 'Click the private duplicate link provided upon checkout to clone the entire template directly into your free or paid Notion workspace in seconds.'
      },
      {
        stepTitle: '2. Baseline Accounts & Fixed Expenses Setup',
        stepDesc: 'Input your opening bank balances (e.g. Nabil, NIC Asia), eSewa/Khalti balances, cash on hand, and monthly fixed commitments (room rent, Wi-Fi, insurance).'
      },
      {
        stepTitle: '3. Daily Mobile Logging & Monthly Review',
        stepDesc: 'Use the pinned mobile quick-entry button to log daily expenses in 10 seconds. At month-end, review the automated net worth chart and adjust next month’s budget.'
      }
    ],
    targetAudience: 'Salaried professionals seeking structured money management, freelancers balancing irregular income across multiple digital wallets, students learning disciplined budgeting, and retail NEPSE investors wanting a consolidated net worth view.',
    whoItIsFor: 'Salaried employees, tech freelancers, remote workers, students, and newly independent earners in Nepal.',
    companionLessonSlug: 'budgeting-50-30-20-nepal',
    companionCategorySlug: 'personal-finance',
    companionCalculatorSlug: 'sip',
    recommendedBeforeLesson: {
      slug: 'budgeting-50-30-20-nepal',
      categorySlug: 'personal-finance',
      title: {
        en: '50/30/20 Budgeting Rule for Nepal',
        np: 'नेपालमा ५०/३०/२० बजेटिङ नियम'
      },
      why: {
        en: 'Understand how to divide income into Needs (50%), Wants (30%), and Savings (20%) before setting up your Notion tracking database.',
        np: 'आफ्नो Notion ट्र्याकिङ डेटाबेस सेटअप गर्नुअघि आम्दानीलाई आवश्यकता (५०%), रहर (३०%) र बचत (२०%) मा बाँड्ने विधि बुझ्नुहोस्।'
      }
    },
    recommendedAfterLesson: {
      slug: 'how-to-start-monthly-sip-nepal',
      categorySlug: 'investing',
      title: {
        en: 'How to Start a Monthly SIP via ConnectIPS',
        np: 'ConnectIPS बाट मासिक SIP लगानी सुरु गर्ने विधि'
      },
      why: {
        en: 'Now that you track your monthly cash surplus, automate long-term wealth compounding into open-ended mutual funds.',
        np: 'मासिक बचत ट्र्याक गर्न थालेपछि, खुलामुखी सामूहिक लगानी कोष (SIP) मार्फत दीर्घकालीन सम्पत्ति निर्माण सुरु गर्नुहोस्।'
      }
    },
    companionTools: [
      {
        type: 'Curriculum Lesson',
        title: '50/30/20 Budgeting in Nepal',
        desc: 'Master allocating salary across room rent, groceries, leisure, and disciplined 20% savings.',
        url: '/learn/personal-finance/budgeting-50-30-20-nepal'
      },
      {
        type: 'Interactive Calculator',
        title: 'SIP & Wealth Compounding Calculator',
        desc: 'Calculate how compounding your monthly savings into mutual funds builds long-term wealth.',
        url: '/calculators/sip'
      },
      {
        type: 'Cornerstone Guide',
        title: 'Complete Personal Budgeting Guide',
        desc: 'End-to-end framework for mastering personal cash flow and debt management in Nepal.',
        url: '/learn/guides/complete-budgeting-guide'
      }
    ],
    featured: true
  },
  {
    id: 2,
    slug: 'budget-planner-system',
    title: 'Budget Planner System',
    shortDescription: 'A powerful automated Google Sheets and Excel command center with 50/30/20 formula engine, festival sinking fund planner, and EMI debt payoff calculator.',
    fullDescription: `Stop wondering where your monthly salary disappeared. This comprehensive Budget Planner System gives you an automated financial command center built natively for Google Sheets and Microsoft Excel-requiring zero software installations or complex macros.\n\nGrounded in the time-tested 50/30/20 budgeting framework adapted specifically for Nepali living expenses. Accommodates high-impact local expenses like Dashain travel, room rent TDS, utility tariffs, life insurance premiums, and commercial bank reducing-balance loan EMIs. Fill in your figures and watch dynamic charts visualize your financial health instantly.`,
    price: 399,
    currency: 'NPR',
    creator: 'Aakash Das',
    category: 'Finance Tools',
    thumbnail: null,
    previewVideoUrl: 'https://www.youtube-nocookie.com/embed/lRlK0qY46Ns?rel=0&modestbranding=1&controls=1&showinfo=0',
    imageUrl: 'assets/images/resource-budget-preview.png',
    setupTime: '10-min initial setup · 5 min/week review',
    expectedTime: '10 minutes',
    whatYouLearn: [
      'Implement the 50/30/20 budgeting rule calibrated for Nepali salary scales',
      'Separate non-negotiable living needs from discretionary lifestyle desires',
      'Automate monthly savings calculations before discretionary spending begins',
      'Eliminate hidden money leaks across online food delivery, tea, and subscriptions',
      'Calculate exact monthly allocations required for annual Dashain and Tihar expenses',
      'Model debt payoff timelines using reducing-balance amortization formulas',
      'Build and track a robust 6-month emergency buffer against unexpected shocks',
      'Generate annual financial summaries for tax planning and personal audits'
    ],
    whatsIncluded: [
      'Automated 50/30/20 Monthly Budget Engine (Google Sheets + Excel XLSX)',
      'Nepal-Specific Expense Category Breakdown (Rent, Groceries, Electricity, Data Packs)',
      'Multi-Source Income Tracker (Primary Salary, Freelance, Allowances, Dividends)',
      'Festival & Annual Commitment Sinking Fund Planner (Dashain, Insurance, Tax)',
      'Bank Loan EMI & Debt Snowball Payoff Calculator',
      'Visual Cash Flow Analysis Charts (Pie Breakdowns and Monthly Burn Rate Bars)',
      'Annual 12-Month Financial Performance Summary Dashboard',
      'Setup Walkthrough Video & Comprehensive Printable PDF Reference Guide'
    ],
    whatItContains: [
      'Pre-formatted formula cells protected against accidental overwrite',
      'Dynamic conditional formatting highlighting category budget overruns in red',
      'Universal compatibility across Google Sheets (iOS/Android/Web) and Microsoft Excel',
      'Dedicated printable monthly snapshot sheets for offline household budgeting'
    ],
    howToUse: [
      {
        stepTitle: '1. Copy to Google Drive or Open in Excel',
        stepDesc: 'Open the one-click template link to duplicate the master sheet to your personal Google Drive or download the clean .xlsx file for Excel.'
      },
      {
        stepTitle: '2. Input Net Monthly Income & Fixed Living Needs',
        stepDesc: 'Enter your net take-home salary (after SSF/TDS) and baseline living essentials (house rent, groceries, electricity, internet, insurance).'
      },
      {
        stepTitle: '3. Monitor Spending & Track Debt Payoff',
        stepDesc: 'Log actual weekly expenses to verify you stay within the 30% wants threshold, and watch debt payoff progress bars update automatically.'
      }
    ],
    targetAudience: 'Fresh graduates earning their first formal paycheck, young couples managing household expenses, bank borrowers wanting transparent EMI payoff tracking, and families committed to building long-term financial security in Nepal.',
    whoItIsFor: 'Salaried employees, young couples, first-time borrowers, and families managing household finances in Nepal.',
    companionLessonSlug: 'emergency-fund-blueprint',
    companionCategorySlug: 'personal-finance',
    companionCalculatorSlug: 'loans',
    recommendedBeforeLesson: {
      slug: 'emergency-fund-blueprint',
      categorySlug: 'personal-finance',
      title: {
        en: 'Emergency Fund Blueprint for Nepal',
        np: 'नेपालमा आपतकालीन कोष निर्माण खाका'
      },
      why: {
        en: 'Calculate your mandatory 3-6 month survival cash cushion before locking surplus into aggressive debt payoff or investments.',
        np: 'ऋण भुक्तानी वा लगानीमा लाग्नुअघि आफ्नो परिवारका लागि अनिवार्य ३ देखि ६ महिनाको आपतकालीन सुरक्षा कोष हिसाब गर्नुहोस्।'
      }
    },
    recommendedAfterLesson: {
      slug: 'flat-rate-vs-reducing-balance-emi',
      categorySlug: 'loans',
      title: {
        en: 'Flat Rate vs Reducing Balance EMI',
        np: 'फ्ल्याट रेट र घट्दो मौज्दात (Reducing Balance) EMI'
      },
      why: {
        en: 'Use your calculated monthly free cash flow to accelerate loan principal prepayments and eliminate bank interest drag.',
        np: 'एक्सेलबाट पत्ता लागेको बचत रकम प्रयोग गरी बैंकको सावाँ छिट्टै चुक्ता गर्ने र लाखौँ ब्याज बचाउने रणनीति सिक्नुहोस्।'
      }
    },
    companionTools: [
      {
        type: 'Curriculum Lesson',
        title: 'Emergency Fund Blueprint for Nepal',
        desc: 'Calculate exact 3-6 month cash buffers required to withstand job losses or medical emergencies.',
        url: '/learn/personal-finance/emergency-fund-blueprint'
      },
      {
        type: 'Interactive Calculator',
        title: 'Commercial Bank Loan EMI Calculator',
        desc: 'Calculate exact monthly reducing balance EMIs, total interest, and prepayment savings.',
        url: '/calculators/loans'
      },
      {
        type: 'Cornerstone Guide',
        title: 'Complete Commercial Banking Guide',
        desc: 'Master bank account tiers, deposit insurance (NPR 5 Lakhs), and interest rate spreads.',
        url: '/learn/guides/complete-banking-guide'
      }
    ],
    featured: true
  }
];

export function getResources() {
  return RESOURCES;
}

export function getResourceBySlug(slug) {
  return RESOURCES.find(r => r.slug === slug) || null;
}

export default RESOURCES;

// ==============================================
// risePaisa | Blog Articles Data & Research Registry
// Author: Aakash Das (Founder of RisePaisa | Finance Educator & Content Creator)
// Fact-checked against Nepal Regulatory Frameworks (NRB, SEBON, CDSC, IRD Nepal)
// ==============================================

const ARTICLES = [
  {
    id: 1,
    slug: 'how-to-open-demat-account-nepal',
    title: 'How to Open a DEMAT Account in Nepal: Complete 2026 Guide',
    excerpt: 'A step-by-step guide to opening your DEMAT account through CDSC, setting up Meroshare, and getting ready to trade on NEPSE.',
    category: 'NEPSE & Investing',
    categorySlug: 'nepse',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-03-15',
    lastUpdated: '2026-09-20',
    readTime: '8 min read',
    featured: true,
    thumbnail: 'assets/images/blog-demat-account.png',
    imageAlt: 'Customer completing DEMAT account opening form and KYC verification at a licensed depository participant counter',
    relatedCalculator: {
      title: 'NEPSE Share & Profit Calculator',
      slug: 'nepse-share',
      url: '/calculators/nepse-share',
      ctaText: 'Calculate NEPSE broker commissions, SEBON fees, and net trading profits'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Nepal Stock Market Academy',
      url: '/learn/nepse'
    },
    sources: [
      {
        title: 'Central Depository Services Regulations',
        institution: 'CDS and Clearing Limited (CDSC)',
        url: 'https://cdsc.com.np'
      },
      {
        title: 'Securities Registration and Issue Regulations',
        institution: 'Securities Board of Nepal (SEBON)',
        url: 'https://sebon.gov.np'
      },
      {
        title: 'Trading By-Laws & Membership Directives',
        institution: 'Nepal Stock Exchange (NEPSE)',
        url: 'https://nepalstock.com.np'
      }
    ],
    disclaimer: 'This article is prepared for educational and informational purposes under prevailing CDSC and SEBON regulations. It does not constitute investment advice or licensed broker solicitation.',
    content: `
      <p>If you want to invest in the Nepal Stock Exchange (NEPSE), the very first statutory requirement is to open a DEMAT (Dematerialized) account. Regulated by CDS and Clearing Limited (CDSC) under the oversight of SEBON, this account holds your shares electronically, similar to how a commercial bank account holds your cash deposits.</p>

      <h2>What is a DEMAT Account in Nepal?</h2>
      <p>A DEMAT account is an electronic ledger that stores your equity shares, mutual fund units, debentures, and corporate bonds in digital format. In Nepal, all dematerialized records are maintained centrally by CDS and Clearing Limited (CDSC), a subsidiary of NEPSE.</p>
      <p>Every DEMAT account is assigned a unique 16-digit Beneficial Owner Identification (BOID) number. The first 8 digits represent your Depository Participant (DP), and the remaining 8 digits identify your unique client account. Whenever you receive primary IPO allotments or execute secondary purchases, shares are credited directly to this electronic BOID.</p>

      <h2>Documents Required by CDSC Regulations</h2>
      <p>Under statutory Know Your Customer (KYC) requirements prescribed by SEBON, you must provide:</p>
      <ul>
        <li>Original Nepali citizenship certificate (with clear photocopies of front and back)</li>
        <li>Two recent passport-sized photographs</li>
        <li>Active bank account details (including Cheque leaf or account statement for automated dividend disbursement)</li>
        <li>Permanent Account Number (PAN): mandatory for institutional trading and transactions above statutory caps, highly recommended for retail investors</li>
        <li>Birth certificate and guardian citizenship (if opening a minor account under 18 years of age)</li>
      </ul>

      <h2>Step-by-Step Account Opening Process</h2>
      <h3>Step 1: Select an Authorized Depository Participant (DP)</h3>
      <p>Depository Participants (DPs) are licensed intermediaries authorized by CDSC to interface with investors. In Nepal, authorized DPs include commercial banks, development banks, licensed merchant banking subsidiaries, and SEBON-registered stockbrokers. Choose a DP with a reliable digital portal and prompt C-ASBA verification.</p>

      <h3>Step 2: Complete the DEMAT & KYC Form</h3>
      <p>Fill out the standardized DEMAT account opening form. Ensure that your spelling of name, father's name, grandfather's name, and permanent address matches your Nepali citizenship certificate exactly to prevent CDSC verification rejections.</p>

      <h3>Step 3: Register for MeroShare Portal</h3>
      <p>MeroShare (meroshare.cdsc.com.np) is the official web and mobile interface provided by CDSC. Once your DP issues your 16-digit BOID, submit a MeroShare registration form. MeroShare allows you to apply for IPOs/FPOs, check allotment results, track your portfolio, and transfer shares through Electronic Instruction Slip (EDIS).</p>

      <h3>Step 4: Obtain Your CRN (C-ASBA Registration Number)</h3>
      <p>To apply for IPOs, visit your bank branch or use internet banking to verify your C-ASBA (Centralized Application Supported by Blocked Amount) registration. The bank verifies your account balance and issues a confidential CRN code, which links your bank account to your MeroShare profile.</p>

      <blockquote><p>Regulatory Note: As per CDSC directives, an individual in Nepal is legally permitted to hold a maximum of two DEMAT accounts across all authorized depository participants.</p></blockquote>

      <h2>Statutory Fees & Maintenance Charges</h2>
      <p>Under prevailing CDSC fee schedules:</p>
      <ul>
        <li><strong>DEMAT Opening Fee:</strong> NPR 50 to NPR 150 (one-time regulatory fee depending on DP).</li>
        <li><strong>Annual DEMAT Maintenance Charge (AMC):</strong> NPR 100 per fiscal year (payable annually before Ashadh end).</li>
        <li><strong>MeroShare Annual Renewal Fee:</strong> NPR 50 per fiscal year.</li>
        <li><strong>C-ASBA Application Charge:</strong> NPR 0 to NPR 5 per IPO application (most commercial banks charge NPR 5; some state-owned banks charge zero).</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Mismatched citizenship names causing C-ASBA verification failure at the bank level.</li>
        <li>Forgetting annual AMC renewal before Ashadh, leading to account freezing during active IPOs.</li>
        <li>Failing to verify the bank account linkage for electronic dividend payments.</li>
        <li>Sharing MeroShare passwords or PINs with unauthorized third parties.</li>
      </ul>

      <p>Once your DEMAT account and MeroShare profile are activated, you are fully prepared to begin your investment journey. To estimate transaction costs including brokerage commissions, SEBON regulatory fees (0.015%), and capital gains tax, explore our free calculators below.</p>
    `
  },
  {
    id: 2,
    slug: 'budgeting-tips-nepali-salary',
    title: '7 Budgeting Tips That Actually Work on a Nepali Salary',
    excerpt: 'Practical, no-nonsense budgeting advice tailored for Nepali incomes, from NPR 20,000 to 200,000 per month.',
    category: 'Personal Finance',
    categorySlug: 'personal-finance',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-03-10',
    lastUpdated: '2026-09-22',
    readTime: '6 min read',
    featured: true,
    thumbnail: 'assets/images/blog-budgeting.png',
    imageAlt: 'Personal budgeting setup with financial ledger notebook, expense calculator, and salary planning notes',
    relatedCalculator: {
      title: 'SIP & Compounding Wealth Calculator',
      slug: 'sip',
      url: '/calculators/sip',
      ctaText: 'Calculate how a monthly savings plan compounds over 5, 10, and 20 years in Nepal'
    },
    relatedCourse: {
      title: 'Personal Finance Mastery for Nepal',
      url: '/courses/personal-finance-mastery'
    },
    relatedTopic: {
      name: 'Personal Finance Academy',
      url: '/learn/personal-finance'
    },
    sources: [
      {
        title: 'Macroeconomic and Financial Situation of Nepal (Household Inflation Data)',
        institution: 'Nepal Rastra Bank (NRB)',
        url: 'https://nrb.org.np'
      },
      {
        title: 'Social Security Fund Contribution Schemes & Guidelines',
        institution: 'Social Security Fund (SSF Nepal)',
        url: 'https://ssf.gov.np'
      }
    ],
    disclaimer: 'This article outlines practical budgeting frameworks for personal financial management. All illustrative rupee figures are for educational modeling and should be adjusted to individual household circumstances.',
    content: `
      <p>Most budgeting advice available online is written for Western economies earning in US dollars. Standard tips like "skip the daily $6 latte" or "automate $500 into index funds" do not reflect the ground reality of living in Nepal on a salary ranging between NPR 25,000 and NPR 120,000 per month. Here is a practical, grounded framework designed for Nepali households.</p>

      <h2>1. Calculate Net Take-Home Pay (Post-SSF & Taxes)</h2>
      <p>Before allocating funds, identify your exact monthly credit. If you work in the formal sector in Nepal, your gross salary is adjusted for an 11% employee contribution to the Social Security Fund (SSF) and statutory TDS (Tax Deducted at Source) under progressive Inland Revenue Department (IRD) slabs. Budget only against the actual net amount hitting your commercial bank account.</p>

      <h2>2. Adapt the 50/30/20 Rule for Nepal (55/25/20 Model)</h2>
      <p>Urban living in cities like Kathmandu, Pokhara, or Biratnagar carries higher essential baseline ratios for housing, kitchen commodities, and fuel. An adapted framework works best:</p>
      <ul>
        <li><strong>55% Essentials (Needs):</strong> House rent, daily groceries, electricity (NEA), drinking water (melamchi/tanker), cooking gas (LPG), internet, and transportation/petrol.</li>
        <li><strong>25% Lifestyle (Wants):</strong> Social dining, cafe visits, clothing, festive gifts, and subscription services.</li>
        <li><strong>20% Wealth Building (Savings & Investments):</strong> Emergency liquidity, recurring deposits (RD), monthly SIPs, or primary IPO applications.</li>
      </ul>
      <p><em>Illustrative Example:</em> On a net monthly income of NPR 50,000, allocate NPR 27,500 to essentials, NPR 12,500 to lifestyle, and NPR 10,000 strictly to savings and disciplined investment.</p>

      <h2>3. Establish Separate Accounts for Spending vs. Savings</h2>
      <p>Keeping salary and savings inside one single mobile-banking-enabled account creates psychological friction and micro-leakages. Maintain two separate accounts: a "Primary Operating Account" with debit card and mobile banking enabled for bills, and a "Capital Reserve Account" at another commercial bank without mobile banking active on your phone.</p>

      <h2>4. Pre-Fund Festival & Dashain Expenses (1/12th Rule)</h2>
      <p>In Nepal, seasonal festivities (Dashain, Tihar, Chhath, weddings) routinely cause financial distress when funded through high-interest personal borrowing or credit cards. Calculate your historical festival spend (e.g., NPR 60,000 for travel, dakshina, and hosting). Divide by 12 (NPR 5,000/month) and transfer this amount into a dedicated sub-ledger each month starting from Kartik.</p>

      <h2>5. Control Digital Payment Micro-Leakages</h2>
      <p>QR code payments via digital wallets (eSewa, Khalti) and Fonepay have eliminated cash friction. While convenient, frictionless payments make it easy to spend NPR 150 on chiya and snacks multiple times daily without noticing. Set a fixed weekly wallet top-up limit (e.g., NPR 2,500). When the wallet balance hits zero, non-essential spending pauses until the next scheduled transfer.</p>

      <h2>6. Benchmark Against Nepal Inflation</h2>
      <p>According to Nepal Rastra Bank data, annual consumer price inflation in Nepal has historically averaged between 5% and 8%. Keeping savings idle in a standard 2.5% savings account guarantees loss of purchasing power over time. Once an initial emergency cushion is established, channel capital into instruments yielding inflation-beating returns, such as Systematic Investment Plans (SIP) in mutual funds or disciplined NEPSE dividend stocks.</p>

      <h2>7. Audit Recurring Overhead Semi-Annually</h2>
      <p>Review recurring expenses every six months: compare internet ISP plans, consolidate telecom data bundles, and negotiate lease renewals directly with landlords. Small recurring reductions compound into significant long-term investment capital.</p>
    `
  },
  {
    id: 3,
    slug: 'income-tax-nepal-explained',
    title: 'Income Tax in Nepal Explained Simply (FY 2082/83)',
    excerpt: 'Everything you need to know about Nepal\'s progressive income tax system: slabs, deductions, SSF rules, and how to file your returns.',
    category: 'Taxation',
    categorySlug: 'taxation',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-03-05',
    lastUpdated: '2026-09-25',
    readTime: '10 min read',
    featured: true,
    thumbnail: 'assets/images/blog-tax.png',
    imageAlt: 'Tax professional reviewing personal income tax return documents and slab calculations',
    relatedCalculator: {
      title: 'Nepal Personal Income Tax Calculator',
      slug: 'nepal-income-tax',
      url: '/calculators/nepal-income-tax',
      ctaText: 'Calculate your exact tax liability, SSF exemptions, and net salary under FY 2082/83 slabs'
    },
    relatedCourse: {
      title: 'Nepal Taxation & Salary Structuring',
      url: '/courses/taxation-nepal'
    },
    relatedTopic: {
      name: 'Nepal Taxation Academy',
      url: '/learn/taxation'
    },
    sources: [
      {
        title: 'Income Tax Act 2058 (with Finance Act Amendments)',
        institution: 'Inland Revenue Department (IRD Nepal)',
        url: 'https://ird.gov.np'
      },
      {
        title: 'Annual Budget & Fiscal Policy Statements',
        institution: 'Ministry of Finance, Government of Nepal',
        url: 'https://mof.gov.np'
      },
      {
        title: 'Social Security Fund Directives',
        institution: 'Social Security Fund (SSF)',
        url: 'https://ssf.gov.np'
      }
    ],
    disclaimer: 'This article provides general tax education based on the Income Tax Act 2058 and prevailing Finance Act provisions. It does not replace individualized tax advice from a registered Chartered Accountant or certified tax practitioner.',
    content: `
      <p>Understanding income tax in Nepal is not just a statutory compliance requirement, it is a critical personal finance skill that directly preserves your net earnings. Under Nepal's progressive income tax system governed by the Inland Revenue Department (IRD), taxable income is evaluated across tiered slabs with specific statutory deductions for retirement and insurance contributions.</p>

      <h2>Who is Liable to Pay Income Tax in Nepal?</h2>
      <p>Under the Income Tax Act 2058, any resident natural person earning income from employment, business, investment, or professional freelancing in Nepal is subject to tax assessment if their annual assessable income exceeds statutory baseline thresholds.</p>

      <h2>Current Progressive Tax Slabs (Individual & Married Couples)</h2>
      <p>Nepal operates a graduated tax schedule. Under prevailing fiscal provisions:</p>

      <h3>1. Individual (Unmarried) Resident Tax Slabs:</h3>
      <ul>
        <li><strong>First NPR 5,00,000:</strong> 1% Social Security Tax (SST)*</li>
        <li><strong>Next NPR 2,00,000 (NPR 5,00,001 to 7,00,000):</strong> 10%</li>
        <li><strong>Next NPR 3,00,000 (NPR 7,00,001 to 10,00,000):</strong> 20%</li>
        <li><strong>Next NPR 10,00,000 (NPR 10,00,001 to 20,00,000):</strong> 30%</li>
        <li><strong>Next NPR 30,00,000 (NPR 20,00,001 to 50,00,000):</strong> 36% (30% + 20% surcharge)</li>
        <li><strong>Above NPR 50,00,000:</strong> 39% (30% + 30% surcharge)</li>
      </ul>

      <h3>2. Married Couple (Filing Jointly) Tax Slabs:</h3>
      <ul>
        <li><strong>First NPR 6,00,000:</strong> 1% Social Security Tax (SST)*</li>
        <li><strong>Next NPR 2,00,000 (NPR 6,00,001 to 8,00,000):</strong> 10%</li>
        <li><strong>Next NPR 3,00,000 (NPR 8,00,001 to 11,00,000):</strong> 20%</li>
        <li><strong>Next NPR 9,00,000 (NPR 11,00,001 to 20,00,000):</strong> 30%</li>
        <li><strong>Next NPR 30,00,000 (NPR 20,00,001 to 50,00,000):</strong> 36%</li>
        <li><strong>Above NPR 50,00,000:</strong> 39%</li>
      </ul>

      <blockquote><p><strong>*SSF Exemption Note:</strong> Salaried employees enrolled in the contribution-based Social Security Fund (SSF) are formally exempted from paying the 1% Social Security Tax on their first slab under prevailing Finance Act directives.</p></blockquote>

      <h2>Statutory Deductions & Allowable Exemptions</h2>
      <p>Taxpayers in Nepal can legally reduce their assessable taxable income by utilizing allowable deductions before slab rates are applied:</p>

      <h3>1. Social Security Fund (SSF)</h3>
      <p>The entire 11% employee deduction contributed to the Social Security Fund reduces assessable income. The employer's 20% contribution is similarly credited without tax friction.</p>

      <h3>2. Approved Retirement Funds (CIT / EPF)</h3>
      <p>Contributions to the Citizen Investment Trust (CIT) or Employees Provident Fund (EPF / Karmachari Sanchaya Kosh) can be deducted up to one-third of total assessable income or <strong>NPR 3,00,000 per year</strong>, whichever is lower.</p>

      <h3>3. Life Insurance Premium Deduction</h3>
      <p>Premiums paid on life insurance policies registered with licensed Nepali life insurers are deductible up to a statutory cap of <strong>NPR 40,000 per year</strong>.</p>

      <h3>4. Health / Medical Insurance & Remote Area Relief</h3>
      <p>Health insurance premiums are deductible up to NPR 20,000 per year. In addition, medical tax credits and remote work allowances (Categories A through E) apply to professionals stationed across designated rural districts.</p>

      <h2>Filing Your Return via the IRD Electronic Portal</h2>
      <p>Salaried individuals, sole proprietors, and freelancers can register for a Permanent Account Number (PAN) in minutes through the Nagarik App or directly on ird.gov.np. By accessing the "Taxpayer Portal," submit your annual self-assessment return (Form D-01), reconcile employer TDS certificates, and generate your official clearance confirmation.</p>

      <p>Use our interactive calculator below to simulate your exact tax liability across different income levels.</p>
    `
  },
  {
    id: 4,
    slug: 'esewa-vs-khalti-comparison',
    title: 'eSewa vs Khalti in 2026: Which Digital Wallet is Better?',
    excerpt: 'An honest comparison of Nepal\'s two biggest digital wallets: features, fees, security, and which one you should use.',
    category: 'Fintech',
    categorySlug: 'fintech',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-02-28',
    lastUpdated: '2026-09-21',
    readTime: '7 min read',
    featured: false,
    thumbnail: 'assets/images/blog-fintech.png',
    imageAlt: 'Customer making contactless mobile wallet payment using smartphone at merchant checkout',
    relatedCalculator: {
      title: 'Digital Payment Safety & Scam Defense Guide',
      slug: 'complete-digital-payments-guide',
      url: '/learn/guides/complete-digital-payments-guide',
      ctaText: 'Read our comprehensive manual on avoiding OTP phishing and digital banking scams in Nepal'
    },
    relatedCourse: {
      title: 'Personal Finance & Wealth Masterclass',
      url: '/courses/personal-finance-masterclass'
    },
    relatedTopic: {
      name: 'Nepal Digital Payments & Banking',
      url: '/learn/digital-payments'
    },
    sources: [
      {
        title: 'Payment and Settlement Directives for PSPs and PSOs',
        institution: 'Nepal Rastra Bank (Payment Systems Department)',
        url: 'https://nrb.org.np'
      },
      {
        title: 'Cyber Fraud Advisories & OTP Security Bulletins',
        institution: 'Nepal Police Cyber Bureau',
        url: 'https://nepalpolice.gov.np'
      }
    ],
    disclaimer: 'This comparison represents an independent editorial assessment of publicly available features, limits, and fee schedules regulated by Nepal Rastra Bank. Neither risePaisa nor Aakash Das accepts affiliate commissions from digital wallet operators.',
    content: `
      <p>Digital payments in Nepal have expanded exponentially, led by two licensed Payment Service Providers (PSPs): eSewa, operating since 2009 under F1Soft International, and Khalti, launched in 2017 by Sparrow Pay. Regulated under Nepal Rastra Bank's Payment and Settlement Act, both platforms facilitate everyday utilities, government service payments, and fund transfers. Here is an objective breakdown of how they compare.</p>

      <h2>Market Penetration & Merchant Ecosystem</h2>
      <p><strong>eSewa</strong> maintains the largest merchant footprint across Nepal, particularly in secondary cities and rural districts where local schools, drinking water committees (Khanepani), electricity counters (NEA), and regional cooperatives integrated early with its ecosystem.</p>
      <p><strong>Khalti</strong> has focused heavily on modern user interfaces, developer APIs, youth-centric lifestyle services, and direct integrations with entertainment, airlines, and cinema ticketing. Its acquisition and backing by institutional investors has rapidly expanded its commercial footprint.</p>

      <h2>Regulatory Transaction Limits (NRB Directives)</h2>
      <p>Both wallets operate under standardized ceilings mandated by the Nepal Rastra Bank Payment Systems Department for verified (KYC-compliant) accounts:</p>
      <ul>
        <li><strong>Wallet to Wallet Transfer:</strong> Up to NPR 25,000 per transaction; NPR 1,00,000 per day; NPR 5,00,000 per month.</li>
        <li><strong>Wallet to Bank Transfer:</strong> Standard bank transfer limits aligned with national payment switch guidelines (up to NPR 1,00,000 per transaction).</li>
        <li><strong>Non-KYC Accounts:</strong> Restricted from outgoing transfers, limited strictly to micro utility bill payments under statutory monitoring.</li>
      </ul>

      <h2>User Experience & App Interface</h2>
      <p>Khalti features a clean, minimalist layout with fast-loading transactional pages, biometric authentication support, and streamlined split-bill utilities. eSewa offers comprehensive functionality across thousands of institutional services, but the interface can feel denser due to extensive feature modules and advertising banners.</p>

      <h2>Fee Schedules & Interoperability</h2>
      <p>Both wallets offer free bill payments for electricity, water, telecom top-ups, and internet subscriptions. Nominal inter-bank transfer fees (typically NPR 10 to NPR 15) apply when moving funds from wallet to commercial bank accounts, governed by clearing house fee parameters.</p>

      <h2>Security Features & Best Practices</h2>
      <p>Both providers deploy Two-Factor Authentication (2FA), device binding, transaction MPINs, and SMS/app notifications. However, security ultimately depends on user vigilance. According to Nepal Police Cyber Bureau data, social engineering and OTP phishing represent the overwhelming majority of digital payment fraud in Nepal. Remember: neither eSewa, Khalti, nor bank staff will ever ask for your MPIN or SMS verification code.</p>

      <h2>Summary Verdict</h2>
      <p>For most Nepali consumers, maintaining both apps is practical. Use eSewa for universal institutional payments (governmental offices, localized utilities, schools) and Khalti for modern lifestyle transactions, air travel, and rewards.</p>
    `
  },
  {
    id: 5,
    slug: 'emergency-fund-guide-nepal',
    title: 'Building an Emergency Fund: A Complete Guide for Nepalis',
    excerpt: 'How much you really need in your emergency fund, where to keep it, and how to build it even on a tight budget.',
    category: 'Personal Finance',
    categorySlug: 'personal-finance',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-02-20',
    lastUpdated: '2026-09-22',
    readTime: '7 min read',
    featured: false,
    thumbnail: 'assets/images/blog-emergency.png',
    imageAlt: 'Individual organizing household savings, emergency cash envelopes, and budget spreadsheets',
    relatedCalculator: {
      title: 'Fixed Deposit (FD) & RD Calculator',
      slug: 'fixed-deposit',
      url: '/calculators/fixed-deposit',
      ctaText: 'Model interest returns across Class A commercial bank term deposits in Nepal'
    },
    relatedCourse: {
      title: 'Personal Finance Mastery for Nepal',
      url: '/courses/personal-finance-mastery'
    },
    relatedTopic: {
      name: 'Personal Finance Academy',
      url: '/learn/personal-finance'
    },
    sources: [
      {
        title: 'Deposit Insurance Directives & Coverage Thresholds',
        institution: 'Deposit and Credit Guarantee Fund (DCGF Nepal)',
        url: 'https://dcgf.gov.np'
      },
      {
        title: 'Commercial Banking Interest Rate Statistics & Guidelines',
        institution: 'Nepal Rastra Bank (NRB)',
        url: 'https://nrb.org.np'
      }
    ],
    disclaimer: 'This guide discusses liquidity and capital preservation strategies for individual households. It is intended for educational purposes and does not constitute credit advice.',
    content: `
      <p>Unexpected economic shocks, ranging from health emergencies and vehicular repairs to sudden unemployment or natural events, are an inevitable part of life. Without dedicated cash reserves, households in Nepal are often forced into distress sales of family gold, pledging assets, or taking informal loans from local lenders at predatory interest rates. An emergency fund is your fundamental financial safety cushion.</p>

      <h2>What Exactly is an Emergency Fund?</h2>
      <p>An emergency fund is a ring-fenced reserve of highly liquid cash designed strictly to cover unforeseen, essential financial obligations. It is not intended for planned festive expenditures, vacation travel, or speculative stock trading.</p>

      <h2>How Much Should You Save in Nepal?</h2>
      <p>While generic advice suggests 3 to 6 months of expenses, the appropriate quantum in Nepal depends on income predictability and family structure:</p>
      <ul>
        <li><strong>Salaried Employees in Formal Sectors:</strong> 3 to 4 months of essential baseline expenditures.</li>
        <li><strong>Freelancers, Commission Earners & Small Business Owners:</strong> 6 to 9 months of expenses, reflecting seasonal payment delays.</li>
        <li><strong>Single-Earner Joint Families:</strong> 6 to 12 months, accounting for dependency ratios and higher medical contingencies.</li>
      </ul>
      <p><em>Calculation Formula:</em> Sum your monthly essential expenses (Rent + Groceries + Utilities + EMIs + Insurance + Family Baseline). If your minimum baseline is NPR 35,000, a 6-month target equals NPR 2,10,000.</p>

      <h2>Where to Store Emergency Capital in Nepal</h2>
      <p>Emergency funds prioritize capital safety and immediate liquidity over high returns. Effective storage vehicles include:</p>
      <ul>
        <li><strong>Commercial Bank Savings Accounts:</strong> 30% of the fund in an established Class A commercial bank with ATM access. Note that retail deposits up to <strong>NPR 5,00,000</strong> are protected under the Deposit and Credit Guarantee Fund (DCGF).</li>
        <li><strong>Flexible Recurring Deposits (RD) or Short-Term FD:</strong> 70% in 3-month or 6-month fixed deposits that allow premature encashment or loan-against-deposit facilities (up to 90% loan value) within 24 hours.</li>
        <li><strong>Open-Ended Mutual Funds:</strong> Systematic allocation into liquid schemes with fast T+1 redemption cycles.</li>
      </ul>

      <h2>Practical Steps to Build Your Fund on a Modest Income</h2>
      <ol>
        <li><strong>Establish a Starter Cushion:</strong> Begin with an initial milestone of NPR 25,000 to cover minor home or vehicular repairs.</li>
        <li><strong>Automate Salary-Day Deductions:</strong> Transfer a fixed percentage (e.g., 10% to 15%) to your designated emergency account on the day salary is credited.</li>
        <li><strong>Channel Windfall Inflows:</strong> Allocate 50% of annual bonuses, festival allowances, tax refunds, or freelance windfalls directly into your reserve until your target is achieved.</li>
      </ol>

      <p>Remember: an emergency fund is insurance, not an investment. Its measure of success is not how fast it grows, but the quiet peace of mind it provides when life presents the unexpected.</p>
    `
  },
  {
    id: 6,
    slug: 'ipo-investing-guide-nepal',
    title: 'How to Apply for IPOs in Nepal Through Meroshare',
    excerpt: 'A beginner-friendly walkthrough of applying for Initial Public Offerings (IPOs) in Nepal using the Meroshare platform.',
    category: 'NEPSE & Investing',
    categorySlug: 'nepse',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-02-15',
    lastUpdated: '2026-09-24',
    readTime: '6 min read',
    featured: false,
    thumbnail: 'assets/images/blog-ipo.png',
    imageAlt: 'Investor using laptop and phone to submit primary IPO share application on MeroShare',
    relatedCalculator: {
      title: 'NEPSE Share & Profit Calculator',
      slug: 'nepse-share',
      url: '/calculators/nepse-share',
      ctaText: 'Simulate IPO allotment gains, secondary sale proceeds, and capital gains tax deductions'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Nepal Stock Market Academy',
      url: '/learn/nepse'
    },
    sources: [
      {
        title: 'Securities Issue and Allotment Guidelines 2074',
        institution: 'Securities Board of Nepal (SEBON)',
        url: 'https://sebon.gov.np'
      },
      {
        title: 'Centralized Application Supported by Blocked Amount (C-ASBA) Manual',
        institution: 'CDS and Clearing Limited (CDSC)',
        url: 'https://cdsc.com.np'
      }
    ],
    disclaimer: 'This guide outlines regulatory procedures for applying to public issues in Nepal. IPO investments carry equity market risks, and applicants should review the official issuing company prospectus before applying.',
    content: `
      <p>Initial Public Offerings (IPOs) represent the primary gateway for retail citizens in Nepal to participate in corporate capital formation. Regulated by the Securities Board of Nepal (SEBON) under the Securities Issue and Allotment Guidelines 2074, primary issues in Nepal have historically democratized stock ownership, enabling millions of retail applicants to acquire shares at face value.</p>

      <h2>Understanding Nepal's 10-Kitta Allotment Rule</h2>
      <p>Under SEBON regulations, every retail public issue in Nepal operates under the mandatory 10-kitta allotment rule. If an issue is oversubscribed (which occurs for virtually all ordinary equity IPOs), CDSC conducts a cryptographic, computer-based lottery where selected applicants receive a baseline minimum allotment of 10 shares (typically NPR 1,000 at par value of NPR 100).</p>
      <p>Consequently, applying for more than 10 or 20 kitta in an ordinary, heavily oversubscribed IPO ties up excess bank capital without improving your mathematical probability of allotment.</p>

      <h2>Prerequisites for Applying via MeroShare</h2>
      <ul>
        <li>Active 16-digit DEMAT BOID account registered with an authorized DP.</li>
        <li>Active MeroShare login credentials (username, password, and 4-digit transaction PIN).</li>
        <li>Bank account with active C-ASBA authorization and verified CRN number.</li>
        <li>Clear bank balance equal to the application value (NPR 1,000 for 10 units).</li>
      </ul>

      <h2>Step-by-Step Application Walkthrough</h2>
      <ol>
        <li><strong>Log into MeroShare:</strong> Visit meroshare.cdsc.com.np or launch the MeroShare mobile application. Select your Depository Participant (DP) from the dropdown, enter your username and password.</li>
        <li><strong>Navigate to 'My ASBA':</strong> From the navigation dashboard, click on the "My ASBA" tab and select "Apply for Issue".</li>
        <li><strong>Select the Open Issue:</strong> Locate the public company currently issuing shares to the general public. Click "Apply".</li>
        <li><strong>Fill the Application Form:</strong>
          <ul>
            <li>Select your verified bank account and depository branch.</li>
            <li>Enter your registered C-ASBA Registration Number (CRN).</li>
            <li>Specify applied quantity (typically 10 kitta for retail issues).</li>
            <li>Agree to the regulatory declarations by checking the consent box.</li>
          </ul>
        </li>
        <li><strong>Confirm with Transaction PIN:</strong> Enter your 4-digit transaction PIN to submit. The applied amount is immediately blocked (held) in your bank account via ASBA.</li>
      </ol>

      <h2>Checking Allotment Results</h2>
      <p>Following issue closure and regulatory scrutiny, CDSC conducts the allotment ceremony. Results are publicly verifiable on:</p>
      <ul>
        <li>MeroShare portal under "Application Report"</li>
        <li>Official CDSC allotment verification portal (iporesult.cdsc.com.np)</li>
        <li>The issuing company's designated merchant banker portal</li>
      </ul>

      <p>If allotted, the blocked funds are transferred to the issuing company, and shares are credited to your DEMAT BOID within several working days. If unallotted, the blocked funds are automatically released back to your available bank balance without deduction.</p>
    `
  },
  {
    id: 7,
    slug: 'how-to-buy-and-sell-shares-in-nepal-tms',
    title: 'How to Buy and Sell Shares in Nepal: Complete NEPSE & TMS Trading Guide',
    excerpt: 'Master the Trade Management System (TMS), understand broker accounts, collateral loading, order types, and the T+2 settlement cycle in Nepal.',
    category: 'NEPSE & Investing',
    categorySlug: 'nepse',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-03-28',
    lastUpdated: '2026-10-15',
    readTime: '11 min read',
    featured: true,
    thumbnail: 'assets/images/blog-tms-trading.png',
    imageAlt: 'Dual-screen stock trading desk showing NEPSE TMS order book, price tickers, and trade management system',
    relatedCalculator: {
      title: 'NEPSE Share & Profit Calculator',
      slug: 'nepse-share',
      url: '/calculators/nepse-share',
      ctaText: 'Calculate exact broker commissions, SEBON fees, and net profit before placing your NEPSE trade'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Nepal Stock Market Academy',
      url: '/learn/nepse'
    },
    sources: [
      {
        title: 'NEPSE Trading By-Laws & Directives',
        institution: 'Nepal Stock Exchange Limited (NEPSE)',
        url: 'https://nepalstock.com.np'
      },
      {
        title: 'Central Depository Services and Clearing Regulations',
        institution: 'CDS and Clearing Limited (CDSC)',
        url: 'https://cdsc.com.np'
      },
      {
        title: 'Securities Businessperson (Stock Broker) Regulations',
        institution: 'Securities Board of Nepal (SEBON)',
        url: 'https://sebon.gov.np'
      }
    ],
    disclaimer: 'This guide is published solely for educational purposes under prevailing NEPSE and SEBON trading rules. It does not constitute investment advice or a recommendation to buy or sell specific securities.',
    content: `
      <p>While primary market IPOs introduce retail investors to corporate ownership, the secondary market on the <strong>Nepal Stock Exchange (NEPSE)</strong> is where shares are actively bought and sold every trading day. To participate in secondary trading in Nepal, you need an active <strong>Trade Management System (TMS)</strong> account linked with a licensed stockbroker.</p>
      <p>This comprehensive guide explains the end-to-end mechanism of buying and selling shares on NEPSE, from opening a broker account and depositing collateral to placing Limit orders, completing EDIS share transfers, and understanding all statutory transaction costs.</p>

      <h2>1. The Four Foundational Pillars of Secondary Trading</h2>
      <p>Before placing your first trade on NEPSE, ensure you have these four interconnected accounts set up:</p>
      <ul>
        <li><strong>DEMAT Account:</strong> Your 16-digit electronic depository account operated by CDSC that holds your shares digitally.</li>
        <li><strong>MeroShare Account:</strong> The online portal used to calculate purchase costs (WACC) and transfer sold shares through Electronic Instruction Slips (EDIS).</li>
        <li><strong>Bank Account with ConnectIPS:</strong> An active Nepali commercial or development bank account linked with ConnectIPS for instant digital collateral loading and settlement.</li>
        <li><strong>Broker TMS Account:</strong> Your personal login to NEPSE's automated trading engine provided by your chosen SEBON-licensed brokerage firm (Brokers 1 through 90+).</li>
      </ul>

      <h2>2. How to Open a Broker Account and Set Up TMS</h2>
      <p>Under SEBON directives, you can open a broker account completely online without visiting the broker's physical office:</p>
      <ol>
        <li><strong>Select a Licensed Broker:</strong> Choose a reputable SEBON-registered stockbroker with reliable online customer support and prompt payment disbursements.</li>
        <li><strong>Submit Online KYC:</strong> Visit the official TMS portal of your selected broker (e.g., <code>https://tmsXX.nepalstock.com.np</code>, where <em>XX</em> is the broker number). Fill out the client registration form with your citizenship details, 16-digit DEMAT BOID, bank account number, and PAN.</li>
        <li><strong>Upload Required Documentation:</strong> Attach digital scans of your Nepali citizenship certificate, a recent passport-sized photograph, a selfie holding your citizenship card, and a map of your residence location.</li>
        <li><strong>Receive TMS Login Credentials:</strong> Once the broker's compliance team verifies your KYC, you will receive your unique Client Code and temporary password via email. Log in immediately and set up a secure permanent password.</li>
      </ol>

      <h2>3. Collateral Management: Funding Your Buy Orders</h2>
      <p>Under NEPSE trading regulations, investors cannot buy shares on credit. You must provide collateral before the system permits you to place a buy order:</p>
      <ul>
        <li><strong>Collateral Multiplier:</strong> Most brokers provide a 4x trading limit on deposited cash collateral (e.g., depositing NPR 25,000 cash collateral allows you to place buy orders up to NPR 100,000).</li>
        <li><strong>Loading Collateral Online:</strong> Within your TMS dashboard, navigate to <em>Fund Management → Collateral Management → Load Collateral</em>. Select ConnectIPS or supported mobile wallets, enter the amount, and confirm the transaction. The trading limit is updated instantly.</li>
        <li><strong>Bank Guarantee Option:</strong> High-net-worth and institutional traders can also submit an official Bank Guarantee from a commercial bank in lieu of cash deposits.</li>
      </ul>

      <h2>4. Understanding Order Types on NEPSE</h2>
      <p>NEPSE operates an automated continuous matching engine from Sunday to Thursday (11:00 AM to 3:00 PM). Understanding order types ensures you never overpay or sell below your desired price:</p>
      <div class="table-responsive">
        <table class="table-custom">
          <thead>
            <tr>
              <th>Order Type</th>
              <th>How It Works</th>
              <th>Best Used For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Limit Order (LMT)</strong></td>
              <td>You specify the exact maximum price you are willing to pay (Buy) or minimum price you will accept (Sell). The trade only executes at your price or better.</td>
              <td>Standard retail investing; protects you from sudden price slippage during volatile trading hours.</td>
            </tr>
            <tr>
              <td><strong>Market Order (MKT)</strong></td>
              <td>Executes immediately at the prevailing best available price in the market order book.</td>
              <td>Urgent entries or exits when execution speed is more critical than price optimization.</td>
            </tr>
            <tr>
              <td><strong>Immediate or Cancel (IOC)</strong></td>
              <td>Executes whatever quantity can be matched immediately against current market orders; any remaining unfilled quantity is automatically cancelled.</td>
              <td>Large block orders where partial execution is acceptable without leaving open orders pending.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>5. Step-by-Step: Buying Shares on TMS</h2>
      <ol>
        <li>Log into your broker TMS portal during active market trading hours (11:00 AM to 3:00 PM).</li>
        <li>Navigate to <strong>Order Management → Buy/Sell</strong>.</li>
        <li>Select the <strong>Buy</strong> tab.</li>
        <li>Enter the listed company's stock symbol (e.g., <code>NABIL</code>, <code>GBIME</code>, <code>SHIVM</code>).</li>
        <li>Specify the desired order quantity (number of shares/kitta) and your limit price. Ensure your order price falls within NEPSE's daily 10% circuit filter and 2% order limit band.</li>
        <li>Click <strong>Place Order</strong> and review the order confirmation modal. Once confirmed, your order enters NEPSE's Central Order Book.</li>
        <li>Track the status under <em>Order Book</em>. When a matching seller is found, the status updates to <strong>Completed</strong>.</li>
      </ol>

      <h2>6. The T+2 Settlement Cycle & Transferring Sold Shares (EDIS)</h2>
      <p>NEPSE operates on a strict <strong>T+2 rolling settlement cycle</strong> (Transaction Day + 2 clearing business days). Both buyers and sellers must fulfill their legal obligations within this statutory window:</p>
      
      <h3>For Buyers (Settling Payment)</h3>
      <p>Once your buy order executes on Day T, you must pay your broker the full purchase amount minus any cash collateral by Day T+1 or Day T+2. Most brokers offer direct payment through ConnectIPS inside TMS under <em>Fund Management → Fund Settlement</em>.</p>

      <h3>For Sellers (Transferring Shares via MeroShare EDIS)</h3>
      <p>When you sell shares on NEPSE, you must physically deliver the digital units to the clearing house through MeroShare EDIS before 6:00 PM on Day T+1. Failure to do so results in a mandatory <strong>20% closeout penalty</strong> under CDSC by-laws:</p>
      <ol>
        <li>Log into MeroShare (meroshare.cdsc.com.np).</li>
        <li>Click on <strong>My Purchase Source</strong> and calculate the Weighted Average Cost of Capital (WACC) for the sold script.</li>
        <li>Navigate to <strong>My EDIS → Transfer Shares</strong>.</li>
        <li>Select the settlement transaction, tick the sold shares, and click <strong>Transfer</strong>. Your shares are debited and transferred to the clearing pool account automatically.</li>
      </ol>

      <h2>7. Complete Breakdown of Trading Costs & Commissions</h2>
      <p>Every transaction on NEPSE incurs statutory fees prescribed by SEBON and the Government of Nepal:</p>
      <ul>
        <li><strong>Brokerage Commission (Tiered):</strong>
          <ul>
            <li>Up to NPR 50,000: <strong>0.40%</strong></li>
            <li>NPR 50,001 to NPR 500,000: <strong>0.37%</strong></li>
            <li>NPR 500,001 to NPR 2,000,000: <strong>0.34%</strong></li>
            <li>NPR 2,000,001 to NPR 10,000,000: <strong>0.30%</strong></li>
            <li>Above NPR 10,000,000: <strong>0.27%</strong></li>
          </ul>
        </li>
        <li><strong>SEBON Regulatory Fee:</strong> <strong>0.015%</strong> on total transaction turnover.</li>
        <li><strong>DP Transaction Fee:</strong> Fixed flat fee of <strong>NPR 25</strong> per company traded per day charged by CDSC.</li>
        <li><strong>Capital Gains Tax (CGT - Sellers Only):</strong> Individual resident investors pay <strong>5%</strong> (holding period ≥ 365 days) or <strong>7.5%</strong> (holding period &lt; 365 days) on net capital gains.</li>
      </ul>

      <blockquote><p>Professional Tip: You can calculate your exact net proceeds, commissions, and tax deductions using RisePaisa's interactive <a href="/calculators/nepse-share">NEPSE Share Trading & Capital Gains Calculator</a> before executing trades.</p></blockquote>

      <h2>Common Beginner Mistakes to Avoid</h2>
      <ul>
        <li><strong>Placing market orders in illiquid stocks:</strong> Low-volume stocks can experience wide bid-ask spreads, causing you to buy at an inflated price or sell far below market value. Always prefer Limit orders.</li>
        <li><strong>Forgetting to complete MeroShare EDIS:</strong> Missing the 20% auction penalty cutoff causes severe financial losses on executed sell orders. Always complete WACC and EDIS immediately after the market closes.</li>
        <li><strong>Overtrading and ignoring commission friction:</strong> Frequent short-term trading accumulates broker fees, SEBON charges, and DP costs that rapidly erode small investment profits.</li>
      </ul>
    `
  },
  {
    id: 8,
    slug: 'pe-ratio-eps-book-value-explained-nepse',
    title: 'EPS, P/E Ratio, and Book Value Explained: How to Analyze NEPSE Stocks',
    excerpt: 'Learn how to calculate and interpret EPS, P/E ratio, Book Value, and ROE to identify undervalued stocks and avoid overpaying on the Nepal Stock Exchange.',
    category: 'NEPSE & Investing',
    categorySlug: 'nepse',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-04-02',
    lastUpdated: '2026-10-16',
    readTime: '10 min read',
    featured: true,
    thumbnail: 'assets/images/blog-fundamental-analysis.png',
    imageAlt: 'Financial analyst examining corporate annual reports, balance sheets, and P/E valuation ratios',
    relatedCalculator: {
      title: 'CAGR & Investment Growth Calculator',
      slug: 'cagr',
      url: '/calculators/cagr',
      ctaText: 'Calculate compound annual growth rates on your fundamental equity investments'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Nepal Stock Market Academy',
      url: '/learn/nepse'
    },
    sources: [
      {
        title: 'Listed Company Financial Reporting Framework',
        institution: 'Securities Board of Nepal (SEBON)',
        url: 'https://sebon.gov.np'
      },
      {
        title: 'Nepal Financial Reporting Standards (NFRS) Directives',
        institution: 'Institute of Chartered Accountants of Nepal (ICAN)',
        url: 'https://ican.org.np'
      },
      {
        title: 'Bank & Financial Institutions Directives',
        institution: 'Nepal Rastra Bank (NRB)',
        url: 'https://nrb.org.np'
      }
    ],
    disclaimer: 'This article teaches fundamental financial metrics for educational evaluation. Financial ratios must be analyzed alongside audited balance sheets, corporate governance, and sector conditions.',
    content: `
      <p>When beginners start analyzing companies on the Nepal Stock Exchange (NEPSE), they frequently make the mistake of judging whether a stock is "cheap" or "expensive" based purely on its share price. A stock trading at NPR 200 is not necessarily cheaper than one trading at NPR 1,200. To understand a company's true valuation, you must evaluate fundamental per-share metrics: <strong>Earnings Per Share (EPS)</strong>, the <strong>Price-to-Earnings (P/E) Ratio</strong>, and <strong>Book Value Per Share (BVPS)</strong>.</p>
      <p>This guide explains how to calculate, interpret, and cross-reference these critical metrics using quarterly financial reports published by Nepali commercial banks, hydropower companies, and insurance firms.</p>

      <h2>1. Earnings Per Share (EPS): The Company’s Profit Engine</h2>
      <p><strong>Earnings Per Share (EPS)</strong> measures the portion of a company's net profit allocated to each individual outstanding share of common stock. It represents the ultimate profitability metric for equity shareholders.</p>
      
      <h3>The Basic EPS Formula</h3>
      <blockquote><p><strong>EPS = (Net Profit After Tax - Preference Dividends) / Total Outstanding Common Shares</strong></p></blockquote>

      <h3>How Annualized EPS Works in Nepal’s Quarterly Reports</h3>
      <p>In Nepal, listed companies publish un-audited financial reports every three months (Q1, Q2, Q3, and annual Q4). Because a Q2 report covers only 6 months of corporate operations, companies annualize the figure to make it comparable to full-year historical earnings:</p>
      <ul>
        <li><strong>Q1 EPS (3 Months):</strong> Quarterly Net Profit × 4 / Total Shares</li>
        <li><strong>Q2 EPS (6 Months):</strong> Half-Year Net Profit × 2 / Total Shares</li>
        <li><strong>Q3 EPS (9 Months):</strong> Nine-Month Net Profit × (12 / 9) / Total Shares</li>
        <li><strong>Q4 EPS (Full Year):</strong> Actual full-year audited net earnings divided by total shares</li>
      </ul>
      <p><strong>Practical Example:</strong> If a commercial bank with 10 crore outstanding shares earns a net profit of NPR 1 Arba (100 Crore) in its 6-month Q2 report, its annualized EPS is calculated as: <code>(NPR 100 Crore × 2) / 10 Crore shares = NPR 20.00</code>.</p>

      <h2>2. Price-to-Earnings (P/E) Ratio: What Are You Paying for NPR 1 of Profit?</h2>
      <p>The <strong>P/E ratio</strong> compares the company's current market trading price on NEPSE to its annualized Earnings Per Share. It indicates how many rupees investors are currently willing to pay for every single rupee of annual corporate profit generated.</p>

      <blockquote><p><strong>P/E Ratio = Current Market Price (CMP) / Annualized Earnings Per Share (EPS)</strong></p></blockquote>

      <h3>Interpreting P/E in the Context of NEPSE Sectors</h3>
      <div class="table-responsive">
        <table class="table-custom">
          <thead>
            <tr>
              <th>P/E Valuation Band</th>
              <th>Typical Interpretation in Nepal</th>
              <th>Sector Context & Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>P/E Under 15x</strong></td>
              <td>Statistically undervalued or mature, slow-growth enterprise</td>
              <td>Common among Class 'A' Commercial Banks with established loan books and consistent dividend payouts.</td>
            </tr>
            <tr>
              <td><strong>P/E Between 15x and 30x</strong></td>
              <td>Fair valuation reflecting balanced growth expectations</td>
              <td>Typical for stable microfinance institutions, non-life insurers, and quality hydropower operators.</td>
            </tr>
            <tr>
              <td><strong>P/E Above 40x - 60x+</strong></td>
              <td>High growth expectations or speculative bubble territory</td>
              <td>Frequently seen in newly listed hydropower scripts where earnings have not yet reached full operational capacity.</td>
            </tr>
            <tr>
              <td><strong>Negative P/E</strong></td>
              <td>The company generated a net loss over the reporting period</td>
              <td>Requires caution; evaluate operational cash flows and debt service capability.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. Book Value Per Share (BVPS): The Balance Sheet Anchor</h2>
      <p>While EPS tracks earnings on the income statement, <strong>Book Value Per Share (Net Worth Per Share)</strong> tells you what each share is worth based strictly on the company's balance sheet assets after paying off all liabilities. In simple terms, it is the theoretical liquidation value of the company.</p>

      <blockquote><p><strong>Book Value Per Share = (Total Shareholders’ Equity) / Total Outstanding Shares</strong></p></blockquote>
      <p>Under SEBON regulations, every company lists its Net Worth Per Share in quarterly summaries. For a newly established company, book value typically equals par value (NPR 100). As the business retains earnings and builds general reserves, book value grows to NPR 150, NPR 200, or NPR 300+.</p>

      <h2>4. Price-to-Book (P/B) Ratio: Gauging Asset Premiums</h2>
      <p>The <strong>Price-to-Book (P/B) ratio</strong> measures how much premium the stock market is placing on the company's tangible net worth:</p>
      <blockquote><p><strong>P/B Ratio = Current Market Price (CMP) / Book Value Per Share (BVPS)</strong></p></blockquote>
      <ul>
        <li><strong>P/B near 1.0x to 1.5x:</strong> Common in Nepali commercial banking when credit cycles soften. You are purchasing ownership at close to balance sheet asset value.</li>
        <li><strong>P/B above 3.0x:</strong> Indicates the market values the company's future growth prospects, brand power, and operational returns well beyond historical net assets.</li>
      </ul>

      <h2>5. Return on Equity (ROE): The Ultimate Quality Filter</h2>
      <p>A company might boast high profits simply because it has accumulated enormous capital. <strong>Return on Equity (ROE)</strong> measures capital efficiency: how effectively corporate management utilizes shareholder funds to produce net profits.</p>
      <blockquote><p><strong>ROE (%) = (Annual Net Profit / Total Shareholders' Equity) × 100</strong></p></blockquote>
      <p>In Nepal, top-performing commercial institutions consistently achieve ROE figures between <strong>12% and 18%</strong>. An ROE falling persistently below the commercial fixed deposit interest rate indicates that the company is failing to generate economic value above risk-free deposit benchmarks.</p>

      <h2>Practical Checklist for Evaluating a NEPSE Stock</h2>
      <ol>
        <li><strong>Compare within the same sector:</strong> Never compare the P/E of a commercial bank (capital-intensive, regulated spreads) with a manufacturing company like Unilever Nepal or Shivam Cements. Always evaluate companies against direct industry peers.</li>
        <li><strong>Examine earnings quality:</strong> Check whether reported net profit is derived from core commercial operations or one-time exceptional items (such as selling land or reversing loan loss provisions).</li>
        <li><strong>Inspect credit quality (Banks & MFIs):</strong> For banking institutions, high EPS is meaningless if Non-Performing Loans (NPL) are spiking above regulatory comfort thresholds (3% to 5%).</li>
        <li><strong>Combine P/E with PEG:</strong> A P/E of 25x is attractive if the company is growing its profits at 30% annually, but dangerous if earnings growth is stagnant at 3%.</li>
      </ol>
    `
  },
  {
    id: 9,
    slug: 'bonus-share-vs-cash-dividend-nepal',
    title: 'Bonus Share vs Cash Dividend in Nepal: Tax, Price Adjustment & Wealth Impact',
    excerpt: 'Understand how bonus shares and cash dividends work in Nepal, how NEPSE adjusts market prices on book closure date, and how taxation impacts your net returns.',
    category: 'NEPSE & Investing',
    categorySlug: 'nepse',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-04-10',
    lastUpdated: '2026-10-17',
    readTime: '9 min read',
    featured: false,
    thumbnail: 'assets/images/blog-dividends.png',
    imageAlt: 'Shareholder reviewing official corporate dividend distribution notice and share certificate',
    relatedCalculator: {
      title: 'NEPSE Share & Profit Calculator',
      slug: 'nepse-share',
      url: '/calculators/nepse-share',
      ctaText: 'Simulate NEPSE book closure price adjustments and calculate net dividend yields'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Nepal Stock Market Academy',
      url: '/learn/nepse'
    },
    sources: [
      {
        title: 'Listing and Trading Regulations',
        institution: 'Nepal Stock Exchange (NEPSE)',
        url: 'https://nepalstock.com.np'
      },
      {
        title: 'Income Tax Act 2058 (Provisions on Dividend & Capital Gains)',
        institution: 'Inland Revenue Department (IRD)',
        url: 'https://ird.gov.np'
      },
      {
        title: 'Companies Act 2063 (Section 179: Bonus Shares)',
        institution: 'Office of the Company Registrar (OCR)',
        url: 'https://ocr.gov.np'
      }
    ],
    disclaimer: 'This educational article explains corporate distributions and price adjustment mechanisms under NEPSE trading rules. Corporate dividend announcements are subject to Annual General Meeting (AGM) and regulatory approvals.',
    content: `
      <p>Every year between Ashwin and Poush, listed companies on the Nepal Stock Exchange (NEPSE) declare annual corporate earnings distributions. In Nepal, investors eagerly await announcements of <strong>Cash Dividends (नगद लाभांश)</strong> and <strong>Bonus Shares (बोनस सेयर / स्टक लाभांश)</strong>.</p>
      <p>However, widespread confusion exists among retail investors regarding how bonus shares affect portfolio value, why stock prices drop on the <strong>Book Closure Date</strong>, and how the Inland Revenue Department (IRD) taxes each distribution type. This guide breaks down the financial mathematics, corporate balance sheet mechanics, and tax rules governing dividends in Nepal.</p>

      <h2>1. The Fundamental Difference: Cash vs Bonus Shares</h2>
      <div class="table-responsive">
        <table class="table-custom">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Cash Dividend (नगद लाभांश)</th>
              <th>Bonus Share (बोनस सेयर)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>What You Receive</strong></td>
              <td>Direct cash credited to your registered bank account via IPS.</td>
              <td>Additional new shares credited to your electronic DEMAT BOID.</td>
            </tr>
            <tr>
              <td><strong>Company Balance Sheet</strong></td>
              <td>Cash reserves decrease; paid-up capital remains unchanged.</td>
              <td>Retained earnings are capitalized into Paid-Up Equity Capital; cash remains inside the firm.</td>
            </tr>
            <tr>
              <td><strong>Total Shares in Market</strong></td>
              <td>Remains exactly the same.</td>
              <td>Increases proportionally by the declared bonus percentage.</td>
            </tr>
            <tr>
              <td><strong>NEPSE Market Price</strong></td>
              <td>Adjusted downward only if cash dividend exceeds statutory threshold (historically 10%+).</td>
              <td><strong>Always adjusted downward</strong> mathematically on Book Closure Date.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>2. Why and How NEPSE Adjusts Stock Prices for Bonus Shares</h2>
      <p>A common misconception among beginner investors is that receiving a 20% bonus share represents "free money." In reality, bonus shares do not create new commercial assets overnight; they simply slice the exact same corporate pie into a larger number of smaller slices.</p>
      <p>Because the total number of outstanding company shares increases, NEPSE automatically adjusts the market trading price on the morning of the <strong>Book Closure Date</strong> using the standardized regulatory formula:</p>

      <blockquote><p><strong>Adjusted Market Price = Previous Day Closing Price / (1 + Bonus Percentage / 100)</strong></p></blockquote>

      <h3>Worked Mathematical Example</h3>
      <p>Imagine you hold <strong>100 shares</strong> of a commercial bank trading at <strong>NPR 600</strong> on the day immediately prior to book closure. The bank declares a <strong>20% bonus share</strong>:</p>
      <ul>
        <li><strong>Pre-adjustment portfolio value:</strong> 100 shares × NPR 600 = <strong>NPR 60,000</strong>.</li>
        <li><strong>NEPSE Price Adjustment:</strong> <code>NPR 600 / (1 + 20 / 100) = NPR 600 / 1.20 = <strong>NPR 500</strong></code>.</li>
        <li><strong>Your new share quantity:</strong> 100 + 20% = <strong>120 shares</strong>.</li>
        <li><strong>Post-adjustment portfolio value:</strong> 120 shares × NPR 500 = <strong>NPR 60,000</strong>.</li>
      </ul>
      <p>On the morning of book closure, your total monetary wealth is exactly identical (NPR 60,000). The true financial benefit of bonus shares comes over the long run: as the company continues growing its business and earnings, the market price of those 120 shares can gradually appreciate back toward NPR 600 or higher.</p>

      <h2>3. Understanding Book Closure Date & Record Date</h2>
      <p>To receive any declared dividend in Nepal, you must own the shares on or before the statutory deadline:</p>
      <ul>
        <li><strong>Book Closure Date:</strong> The official date on which the company closes its shareholder register to compile the beneficiary list for AGM and dividend disbursement.</li>
        <li><strong>The Purchase Cut-off Rule:</strong> Due to NEPSE's T+2 rolling settlement cycle, you must buy the shares <strong>at least one trading day prior to the Book Closure Date</strong>. If you buy shares on the Book Closure Date itself, you will buy at the adjusted lower price, but you will NOT receive the dividend.</li>
      </ul>

      <h2>4. Taxation Rules: Withholding Tax on Dividends</h2>
      <p>Under Section 54 and Section 88 of Nepal’s Income Tax Act 2058:</p>
      <ul>
        <li><strong>Tax on Cash Dividends:</strong> A final withholding tax (TDS) of <strong>5%</strong> is deducted at source for individual resident citizens before the funds are deposited into your bank account.</li>
        <li><strong>Tax on Bonus Shares:</strong> The face value of bonus shares (NPR 100 per share) is subject to a <strong>5% dividend tax</strong>. Most profitable companies declare a small accompanying cash dividend specifically labeled as <em>"for tax purposes"</em> to cover this liability on behalf of shareholders.</li>
        <li><strong>Capital Gains Implications:</strong> When you eventually sell bonus shares in the secondary market, your acquisition cost for tax purposes (WACC) is calculated using the statutory par value (NPR 100) under current CDSC and IRD guidelines.</li>
      </ul>

      <h2>Which Is Better for Long-Term Investors?</h2>
      <p>Whether you should prefer cash dividends or bonus shares depends on your life stage and financial goals:</p>
      <ul>
        <li><strong>Choose Cash Dividends If:</strong> You are in or near retirement, require regular cash flow to meet living expenses, or invest in mature companies that have limited avenues to productively reinvest capital.</li>
        <li><strong>Choose Bonus Shares If:</strong> You are in your wealth-accumulation phase, want to automatically compound your ownership without incurring transaction fees, and invest in high-ROE businesses that effectively reinvest retained profits for corporate expansion.</li>
      </ul>
    `
  },
  {
    id: 10,
    slug: 'reducing-balance-vs-flat-interest-loan-nepal',
    title: 'Reducing-Balance vs Flat Interest Rate in Nepal: How Loan EMI Actually Works',
    excerpt: 'Avoid deceptive loan offers in Nepal. Understand the mathematical difference between flat and reducing-balance interest rates, Base Rate premiums, and EMI calculation.',
    category: 'Personal Finance',
    categorySlug: 'personal-finance',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-04-18',
    lastUpdated: '2026-10-18',
    readTime: '10 min read',
    featured: true,
    thumbnail: 'assets/images/blog-loan-emi.png',
    imageAlt: 'Bank loan officer and client reviewing loan agreement documents and reducing-balance EMI schedule',
    relatedCalculator: {
      title: 'Home & Personal Loan EMI Calculator',
      slug: 'emi',
      url: '/calculators/emi',
      ctaText: 'Calculate reducing-balance loan EMIs, interest schedules, and compare bank interest rates'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Banking & Financial Foundations',
      url: '/learn/banking'
    },
    sources: [
      {
        title: 'Unified Directives for Licensed Financial Institutions',
        institution: 'Nepal Rastra Bank (NRB)',
        url: 'https://nrb.org.np'
      },
      {
        title: 'Consumer Financial Protection Guidelines',
        institution: 'Nepal Rastra Bank (NRB)',
        url: 'https://nrb.org.np'
      }
    ],
    disclaimer: 'This educational guide breaks down banking math and consumer credit regulations in Nepal. Actual loan approvals and contractual interest rates depend on individual bank risk assessment and prevailing NRB circulars.',
    content: `
      <p>When shopping for a vehicle loan, personal loan, or cooperative credit facility in Nepal, you will frequently encounter advertisements boasting: <em>"Instant loan at only 9% interest!"</em> Many borrowers enthusiastically sign loan agreements without realizing that the advertised rate is a <strong>Flat Interest Rate</strong> rather than a standard <strong>Reducing-Balance Interest Rate</strong>.</p>
      <p>The mathematical difference between these two calculation methods is massive: a 10% flat interest rate can effectively equal an interest rate of <strong>over 18% per year</strong> on a reducing-balance basis. Understanding this difference will save you hundreds of thousands of rupees over your borrowing lifetime.</p>

      <h2>1. The Flat Interest Rate Trap Explained</h2>
      <p>In a <strong>Flat Interest Rate</strong> structure, interest is calculated on the <em>original initial principal</em> for the entire tenure of the loan, completely ignoring the fact that you are repaying principal every single month.</p>
      
      <h3>The Flat Rate Formula</h3>
      <blockquote><p><strong>Total Interest = Principal × Annual Rate × Tenure (Years)</strong><br>
      <strong>Monthly EMI = (Principal + Total Interest) / Total Months</strong></p></blockquote>

      <p><strong>Example:</strong> Suppose you take an auto loan of <strong>NPR 1,000,000</strong> for <strong>5 years</strong> at a "10% flat interest rate":</p>
      <ul>
        <li>Total Interest Charged: <code>NPR 1,000,000 × 10% × 5 years = NPR 500,000</code>.</li>
        <li>Total Repayment: NPR 1,500,000.</li>
        <li>Fixed Monthly EMI: <code>NPR 1,500,000 / 60 months = NPR 25,000</code>.</li>
      </ul>
      <p>Notice the fatal flaw: in Year 5, when you have already paid off most of your debt and owe only NPR 200,000, the lender is still charging you interest on the full original NPR 1,000,000! Your true Effective Annual Rate (Internal Rate of Return) in this scenario is approximately <strong>17.27%</strong>—nearly double the advertised 10% figure.</p>

      <h2>2. How Reducing-Balance Interest Works</h2>
      <p>Under a <strong>Reducing-Balance (Diminishing Balance)</strong> system, interest for each monthly cycle is calculated <em>only on the outstanding principal balance remaining</em> at the beginning of that specific month.</p>
      <p>As you make your monthly payments, a portion goes toward interest and the remaining portion directly reduces your outstanding loan principal. In the subsequent month, interest is calculated on the smaller remaining debt, so the interest component shrinks while the principal repayment accelerates.</p>

      <h3>The Standard EMI Formula</h3>
      <blockquote><p><strong>EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1]</strong></p>
      <p>Where: <em>P</em> = Principal, <em>r</em> = Monthly interest rate (Annual Rate / 12 / 100), <em>n</em> = Total tenure in months.</p></blockquote>

      <p>For the same NPR 1,000,000 loan over 5 years at a true <strong>10% reducing-balance rate</strong>:</p>
      <ul>
        <li>Monthly EMI: <strong>NPR 21,247</strong> (compared to NPR 25,000 flat).</li>
        <li>Total Interest Paid: <strong>NPR 274,823</strong> (compared to NPR 500,000 flat).</li>
        <li><strong>Net Savings: NPR 225,177 in pure interest!</strong></li>
      </ul>

      <h2>3. Nepal Rastra Bank Regulations on Loan Pricing</h2>
      <p>To protect consumers from predatory interest practices, <strong>Nepal Rastra Bank (NRB)</strong> enforces strict directives across all licensed commercial banks (Class 'A'), development banks (Class 'B'), and finance companies (Class 'C'):</p>
      <ul>
        <li><strong>Mandatory Reducing-Balance Calculation:</strong> All institutional retail loans in Nepal must be structured and amortized on a reducing-balance basis. Lenders are legally prohibited from advertising flat rates without disclosing the effective reducing rate.</li>
        <li><strong>The Base Rate + Premium Model:</strong> Bank floating interest rates in Nepal are anchored to the bank’s published <strong>Base Rate (आधार दर)</strong> plus a fixed contract premium:
          <blockquote><p><strong>Borrower Loan Rate = Bank Base Rate + Fixed Contract Premium %</strong></p></blockquote>
        </li>
        <li><strong>Premium Fixation Rule:</strong> Under NRB guidelines, once a bank signs a loan contract with a retail customer, the agreed premium percentage cannot be arbitrarily increased during the tenure of the loan. When the bank's Base Rate falls, your interest rate must automatically decrease.</li>
        <li><strong>Debt-Service-to-Income (DSTI) Limit:</strong> NRB mandates that monthly loan repayments for residential real estate and personal borrowing cannot exceed <strong>50%</strong> of the borrower's verified, tax-audited monthly income.</li>
      </ul>

      <h2>4. Practical Tips When Negotiating a Bank Loan in Nepal</h2>
      <ol>
        <li><strong>Always ask for the Loan Amortization Schedule:</strong> Request the official month-by-month repayment breakdown before signing. Inspect the opening balance, principal repayment, interest charge, and closing balance for each month.</li>
        <li><strong>Compare Base Rates across banks:</strong> State-owned and top-tier private commercial banks typically maintain lower Base Rates (7.0% to 8.5%) than smaller financial institutions (9.5% to 11.5%), translating to substantial interest savings.</li>
        <li><strong>Inspect Pre-Payment Penalty Terms:</strong> Under NRB directives, commercial banks cannot charge punitive loan prepayment penalties on retail residential home loans if paid from verifiable personal income sources.</li>
      </ol>
    `
  },
  {
    id: 11,
    slug: 'capital-gains-tax-shares-nepal-wacc',
    title: 'Capital Gains Tax on Shares in Nepal: WACC Calculation, Holding Periods & MeroShare Guide',
    excerpt: 'Complete guide to Capital Gains Tax (CGT) on NEPSE shares. Learn the difference between 5% and 7.5% rates, WACC calculation in MeroShare, and EDIS transfer rules.',
    category: 'Taxation',
    categorySlug: 'taxation',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-04-25',
    lastUpdated: '2026-10-18',
    readTime: '9 min read',
    featured: false,
    thumbnail: 'assets/images/blog-capital-gains-tax.png',
    imageAlt: 'Investor calculating NEPSE capital gains tax liability and WACC holding period statements',
    relatedCalculator: {
      title: 'Nepal Income Tax Calculator',
      slug: 'tax',
      url: '/calculators/nepal-income-tax',
      ctaText: 'Calculate personal income tax liability, slab brackets, and statutory tax deductions'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Nepal Stock Market Academy',
      url: '/learn/nepse'
    },
    sources: [
      {
        title: 'Income Tax Act 2058 (Section 95Ka: Capital Gains Withholding)',
        institution: 'Inland Revenue Department (IRD)',
        url: 'https://ird.gov.np'
      },
      {
        title: 'MeroShare Purchase Source & WACC Guidelines',
        institution: 'CDS and Clearing Limited (CDSC)',
        url: 'https://cdsc.com.np'
      },
      {
        title: 'Securities Board of Nepal Directives',
        institution: 'Securities Board of Nepal (SEBON)',
        url: 'https://sebon.gov.np'
      }
    ],
    disclaimer: 'This guide outlines statutory tax computation rules under prevailing Nepali fiscal acts. Tax rules and withholding rates are governed by official Inland Revenue Department Finance Acts.',
    content: `
      <p>When you profit from selling shares on the Nepal Stock Exchange (NEPSE), the government of Nepal levies a <strong>Capital Gains Tax (CGT - पुँजीगत लाभकर)</strong> on your net trading gains. Unlike many other nations where tax filing occurs months later, Nepal operates an automated, real-time withholding system integrated into MeroShare and your broker's settlement portal.</p>
      <p>To ensure you never overpay tax or incur penalties, you must understand how your <strong>Holding Period</strong> determines your tax rate, how the <strong>Weighted Average Cost of Capital (WACC)</strong> is calculated, and how to verify purchase sources in MeroShare.</p>

      <h2>1. Current Capital Gains Tax Rates in Nepal</h2>
      <p>Under Section 95Ka of the Income Tax Act 2058, the Government of Nepal differentiates individual retail investors based strictly on the holding period of the shares sold:</p>
      <div class="table-responsive">
        <table class="table-custom">
          <thead>
            <tr>
              <th>Investor Category</th>
              <th>Holding Period (दिन/अवधि)</th>
              <th>Statutory CGT Rate</th>
              <th>Nature of Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Individual Resident (Short-Term)</strong></td>
              <td>Less than 365 Days (&lt; 1 Year)</td>
              <td><strong>7.5%</strong></td>
              <td>Withheld at source by broker</td>
            </tr>
            <tr>
              <td><strong>Individual Resident (Long-Term)</strong></td>
              <td>365 Days or More (≥ 1 Year)</td>
              <td><strong>5.0%</strong></td>
              <td>Withheld at source by broker</td>
            </tr>
            <tr>
              <td><strong>Institutional / Corporate Entity</strong></td>
              <td>Any Holding Period</td>
              <td><strong>10.0%</strong></td>
              <td>Advance tax credit against annual returns</td>
            </tr>
            <tr>
              <td><strong>Non-Resident Investor</strong></td>
              <td>Any Holding Period</td>
              <td><strong>25.0%</strong></td>
              <td>Final withholding tax</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>2. What Is WACC and Why Does It Matter?</h2>
      <p><strong>WACC</strong> stands for <strong>Weighted Average Cost of Capital (भारित औसत लागत)</strong>. When you acquire shares of the same company at different times and different prices (e.g., 10 shares in an IPO at NPR 100, 50 shares in the secondary market at NPR 450, and 20 bonus shares), you cannot arbitrarily choose which specific batch you are selling.</p>
      <p>CDSC mandates the WACC formula to calculate the uniform average purchase price of your entire holding:</p>

      <blockquote><p><strong>WACC = Total Cost of All Purchases (including purchase commissions & DP fees) / Total Number of Shares Acquired</strong></p></blockquote>

      <h3>How Bonus and Rights Shares Affect WACC</h3>
      <ul>
        <li><strong>IPO / FPO Purchases:</strong> Entered at actual allotment cost (typically NPR 100 par value, or approved premium price).</li>
        <li><strong>Secondary Market Purchases:</strong> Automatically logged by CDSC with broker commissions and SEBON fees included.</li>
        <li><strong>Rights Shares:</strong> Cost is registered at statutory face value (NPR 100 per share).</li>
        <li><strong>Bonus Shares:</strong> Cost is registered at statutory face value of NPR 100 under current CDSC rules.</li>
      </ul>

      <h2>3. Step-by-Step: Confirming WACC in MeroShare</h2>
      <p>Whenever you execute a sell order on NEPSE, you must confirm your purchase cost before EDIS transfer:</p>
      <ol>
        <li>Log into your <strong>MeroShare</strong> account (meroshare.cdsc.com.np).</li>
        <li>Click on the <strong>My Purchase Source</strong> tab from the sidebar.</li>
        <li>Select the company script you just sold and click <strong>Search</strong>.</li>
        <li>Review your purchase history. The system displays your acquisition batches, quantities, and dates. Tick the boxes next to the relevant holdings.</li>
        <li>Click <strong>Proceed</strong> and verify the auto-calculated WACC price per share.</li>
        <li>Confirm by clicking <strong>Update</strong>.</li>
        <li>Navigate to <strong>My Holdings</strong>, select the script, and check the holding period duration (short-term vs long-term). Confirm your holding duration.</li>
        <li>Finally, proceed to <strong>My EDIS → Transfer Shares</strong> to complete settlement.</li>
      </ol>

      <h2>4. Step-by-Step Capital Gains Tax Calculation</h2>
      <p>Let's walk through a realistic selling scenario:</p>
      <ul>
        <li><strong>Quantity Sold:</strong> 200 shares of Company ABC</li>
        <li><strong>Selling Price:</strong> NPR 550 per share</li>
        <li><strong>Gross Sales Turnover:</strong> 200 × NPR 550 = <strong>NPR 110,000</strong></li>
        <li><strong>Selling Expenses:</strong>
          <ul>
            <li>Brokerage Commission (0.37% on NPR 110,000): NPR 407.00</li>
            <li>SEBON Regulatory Fee (0.015%): NPR 16.50</li>
            <li>DP Transfer Charge: NPR 25.00</li>
            <li>Total Selling Costs: NPR 448.50</li>
          </ul>
        </li>
        <li><strong>Net Sales Consideration:</strong> NPR 110,000 - NPR 448.50 = <strong>NPR 109,551.50</strong></li>
        <li><strong>Total Purchase Cost (WACC NPR 350 × 200):</strong> NPR 70,000.00</li>
        <li><strong>Net Capital Gain:</strong> NPR 109,551.50 - NPR 70,000.00 = <strong>NPR 39,551.50</strong></li>
      </ul>

      <p><strong>Tax Liability:</strong></p>
      <ul>
        <li>If held <strong>≥ 365 days (5% rate):</strong> <code>NPR 39,551.50 × 5% = <strong>NPR 1,977.58</strong></code></li>
        <li>If held <strong>&lt; 365 days (7.5% rate):</strong> <code>NPR 39,551.50 × 7.5% = <strong>NPR 2,966.36</strong></code></li>
      </ul>
      <p>Holding the shares for more than one full year saved the investor nearly NPR 1,000 in direct tax on a single 200-share transaction!</p>

      <h2>What Happens If You Sell at a Loss?</h2>
      <p>If your Net Sales Consideration is lower than your total purchase cost, your net capital gain is zero or negative. <strong>No Capital Gains Tax is charged on loss-making trades.</strong> Furthermore, within the same fiscal year, your broker's system offsets capital losses against capital gains from other profitable trades executed through that same brokerage account.</p>
    `
  },
  {
    id: 12,
    slug: 'sip-investing-guide-nepal',
    title: 'SIP Investing in Nepal: Complete Guide to Mutual Funds & Compounding',
    excerpt: 'Discover how Systematic Investment Plans (SIP) in open-ended mutual funds work in Nepal, how rupee cost averaging builds wealth, and how to start with NPR 1,000/month.',
    category: 'Personal Finance',
    categorySlug: 'personal-finance',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-05-04',
    lastUpdated: '2026-10-18',
    readTime: '10 min read',
    featured: false,
    thumbnail: 'assets/images/blog-sip-investing.png',
    imageAlt: 'Disciplined systematic investment concept with compounding growth curve chart, savings jar, and seedling',
    relatedCalculator: {
      title: 'SIP & Compounding Wealth Calculator',
      slug: 'sip',
      url: '/calculators/sip',
      ctaText: 'Simulate monthly SIP compounding growth, expected fund returns, and long-term wealth accumulation'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Mutual Funds & Systematic Investing',
      url: '/learn/mutual-funds'
    },
    sources: [
      {
        title: 'Mutual Fund Regulations 2067',
        institution: 'Securities Board of Nepal (SEBON)',
        url: 'https://sebon.gov.np'
      },
      {
        title: 'Open-Ended Mutual Fund Guidelines',
        institution: 'Securities Board of Nepal (SEBON)',
        url: 'https://sebon.gov.np'
      }
    ],
    disclaimer: 'Mutual fund investments are subject to market risks. Read all scheme offer documents and past performance disclosures carefully before investing.',
    content: `
      <p>For salaried professionals, young workers, and college students in Nepal who do not have the time to track NEPSE daily or analyze balance sheets, direct stock trading can feel overwhelming. Fortunately, SEBON’s modernization of the mutual fund industry has made <strong>Systematic Investment Plans (SIP - व्यवस्थित लगानी योजना)</strong> one of the most effective, stress-free ways to build long-term wealth in Nepal.</p>
      <p>With an SIP, you invest a fixed sum of money (starting from as little as NPR 1,000 per month) into a SEBON-regulated open-ended mutual fund. This guide explains how SIPs operate, why <strong>Rupee Cost Averaging</strong> protects you during stock market downturns, and how to start your first plan online.</p>

      <h2>1. Open-Ended vs Closed-Ended Mutual Funds in Nepal</h2>
      <p>To understand SIPs, you must distinguish between the two mutual fund structures in Nepal:</p>
      <ul>
        <li><strong>Closed-Ended Mutual Funds:</strong> These have a fixed fund size and a fixed maturity lifespan (typically 5, 7, or 10 years). They issue units via an initial public offering, list on NEPSE, and are traded like ordinary stocks through brokers. You cannot start an automated monthly SIP in a closed-ended fund.</li>
        <li><strong>Open-Ended Mutual Funds:</strong> These schemes do not have a fixed maturity date or fixed unit limits. Units are bought and sold directly through the Fund Manager (Merchant Capital) at the daily published <strong>Net Asset Value (NAV - खुद सम्पत्ति मूल्य)</strong>. These are the schemes that facilitate automated SIPs.</li>
      </ul>

      <h2>2. The Magic of Rupee Cost Averaging</h2>
      <p>The single greatest psychological advantage of an SIP is that it eliminates the dangerous urge to "time the market." When markets drop, retail investors often panic and stop investing. An SIP turns market volatility into your biggest advantage through <strong>Rupee Cost Averaging</strong>:</p>
      <div class="table-responsive">
        <table class="table-custom">
          <thead>
            <tr>
              <th>Month</th>
              <th>Monthly SIP (NPR)</th>
              <th>Scheme NAV (NPR)</th>
              <th>Units Allotted</th>
              <th>Investor Advantage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Month 1</strong></td>
              <td>NPR 5,000</td>
              <td>NPR 10.00</td>
              <td>500.00 Units</td>
              <td>Baseline initial investment</td>
            </tr>
            <tr>
              <td><strong>Month 2 (Market Drops)</strong></td>
              <td>NPR 5,000</td>
              <td>NPR 8.00</td>
              <td><strong>625.00 Units</strong></td>
              <td>You automatically buy MORE units at a discount!</td>
            </tr>
            <tr>
              <td><strong>Month 3 (Market Recovers)</strong></td>
              <td>NPR 5,000</td>
              <td>NPR 12.50</td>
              <td>400.00 Units</td>
              <td>Total units appreciate significantly</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Across these 3 months, you invested a total of NPR 15,000 and accumulated <strong>1,525 units</strong>. Your average cost per unit was <code>NPR 15,000 / 1,525 = NPR 9.83</code>—well below the original NAV of NPR 10.00 and far below the peak of NPR 12.50. When the market surges, your accumulated low-cost units generate compound returns.</p>

      <h2>3. The Compounding Engine: Dividend Reinvestment Plan (DREP)</h2>
      <p>When enrolling in an SIP in Nepal, fund managers provide two options for annual dividend distributions:</p>
      <ol>
        <li><strong>Cash Dividend Payout:</strong> Annual fund returns are credited in cash to your bank account.</li>
        <li><strong>Dividend Reinvestment Plan (DREP):</strong> Your declared annual dividend is automatically used to purchase additional units of the fund at prevailing NAV with <em>zero entry fees</em>.</li>
      </ol>
      <p>For investors with a 10- to 20-year time horizon, choosing <strong>DREP</strong> unleashes true exponential compounding. Reinvesting dividends ensures that each subsequent year's returns generate further returns on an ever-expanding base of units.</p>

      <h2>4. Popular Open-Ended Mutual Funds in Nepal</h2>
      <p>Prominent SEBON-regulated open-ended mutual fund schemes currently operating in Nepal include:</p>
      <ul>
        <li><strong>NIBL Sahabhagita Fund:</strong> Managed by NIMB Ace Capital (Nepal's pioneer open-ended scheme).</li>
        <li><strong>Siddhartha Systematic Investment Scheme:</strong> Managed by Siddhartha Capital.</li>
        <li><strong>Kumari Sunaulo Yojana:</strong> Managed by Kumari Capital.</li>
        <li><strong>NIC Asia Dynamic Debt / Growth Fund:</strong> Managed by NIC Asia Capital.</li>
        <li><strong>Nabil Flexi Cap Fund:</strong> Managed by Nabil Investment Banking.</li>
      </ul>

      <h2>5. How to Start Your SIP Online (Step-by-Step)</h2>
      <ol>
        <li><strong>Prerequisites:</strong> Ensure you have your 16-digit DEMAT BOID, active bank account, and ConnectIPS or mobile wallet account ready.</li>
        <li><strong>Visit the Capital Portal:</strong> Navigate to the official website of the merchant banker managing the open-ended scheme of your choice.</li>
        <li><strong>Complete SIP Registration:</strong> Click on <em>"SIP Registration"</em>. Enter your DEMAT account details, select the scheme, and designate your preferred installment amount (e.g., NPR 1,000, NPR 2,500, or NPR 5,000).</li>
        <li><strong>Choose Frequency & Duration:</strong> Select monthly or quarterly deduction intervals and specify your desired term (e.g., 5 years, 10 years, or perpetual).</li>
        <li><strong>Set Up Auto-Debit via ConnectIPS:</strong> Link your bank account using ConnectIPS Mandate/e-Mandate so monthly contributions are debited automatically without manual intervention.</li>
      </ol>
    `
  },
  {
    id: 13,
    slug: 'technical-analysis-nepse-beginners-guide',
    title: 'Technical Analysis for NEPSE Beginners: Candlesticks, Trends & Risk Management',
    excerpt: 'A grounded introduction to technical analysis in Nepal. Learn candlestick anatomy, support and resistance, moving averages, RSI, and stop-loss discipline.',
    category: 'NEPSE & Investing',
    categorySlug: 'nepse',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-05-12',
    lastUpdated: '2026-10-19',
    readTime: '11 min read',
    featured: false,
    thumbnail: 'assets/images/blog-technical-analysis.png',
    imageAlt: 'Technical analyst examining multi-screen candlestick chart patterns, trendlines, and trading volume',
    relatedCalculator: {
      title: 'NEPSE Share & Profit Calculator',
      slug: 'nepse-share',
      url: '/calculators/nepse-share',
      ctaText: 'Calculate risk-to-reward ratios and net trading profit targets before placing trades'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Nepal Stock Market Academy',
      url: '/learn/nepse'
    },
    sources: [
      {
        title: 'Technical Trading Guidelines & Market Behavior',
        institution: 'Nepal Stock Exchange (NEPSE)',
        url: 'https://nepalstock.com.np'
      },
      {
        title: 'Investor Education and Risk Awareness Directives',
        institution: 'Securities Board of Nepal (SEBON)',
        url: 'https://sebon.gov.np'
      }
    ],
    disclaimer: 'Technical analysis studies historical price action and volume patterns to manage probability and risk. It does not predict future price movements with certainty and should never replace disciplined risk management.',
    content: `
      <p>While fundamental analysis evaluates <em>what</em> company to buy based on financial statements and earnings quality, <strong>Technical Analysis (प्राविधिक विश्लेषण)</strong> focuses on <em>when</em> to buy and sell by studying supply, demand, and investor psychology reflected in price charts.</p>
      <p>On the Nepal Stock Exchange (NEPSE), price action reflects the collective emotions of over six million account holders. Understanding technical foundations helps you identify high-probability setups, time entry points effectively, and most importantly, protect your capital using disciplined risk controls.</p>

      <h2>1. Anatomy of a Japanese Candlestick</h2>
      <p>Every price bar on a NEPSE chart represents market action over a specific timeframe (e.g., Daily, Weekly, or 1-Hour). A standard Japanese candlestick displays four critical data points:</p>
      <ul>
        <li><strong>Open:</strong> The price at which the stock executed its first trade during the period.</li>
        <li><strong>High:</strong> The absolute highest price reached during the period.</li>
        <li><strong>Low:</strong> The absolute lowest price reached during the period.</li>
        <li><strong>Close:</strong> The final traded price when the session ended.</li>
      </ul>
      <p>If the Close is higher than the Open, the candle is <strong>Bullish (Green/White)</strong>, indicating buyer dominance. If the Close is lower than the Open, the candle is <strong>Bearish (Red/Black)</strong>, signaling seller control. The thin lines above and below the body are called <strong>Wicks (Shadows)</strong>, showing price rejection levels.</p>

      <h2>2. Support and Resistance: The Battlegrounds of Price</h2>
      <p>Support and resistance represent psychological price zones where institutional and retail orders congregate:</p>
      <ul>
        <li><strong>Support Level (टेवा बिन्दु):</strong> A horizontal price floor where buying interest is strong enough to overcome selling pressure. When a stock price approaches support, buyers enter and price tends to bounce upward.</li>
        <li><strong>Resistance Level (अवरोध बिन्दु):</strong> A price ceiling where selling pressure overcomes buying appetite. When price hits resistance, profit-taking and fresh short orders emerge, pushing prices lower.</li>
      </ul>
      <blockquote><p>Rule of Polarity: Once a strong resistance level is broken decisively with heavy volume, that level flips and becomes future support. Conversely, broken support turns into future resistance.</p></blockquote>

      <h2>3. Market Trends: Never Fight the Direction of NEPSE</h2>
      <p>Prices do not move in straight lines; they move in waves of impulse and correction. Identifying market structure is essential:</p>
      <ul>
        <li><strong>Uptrend (बुलिश ट्रेन्ड):</strong> The stock consistently forms <strong>Higher Highs (HH)</strong> and <strong>Higher Lows (HL)</strong>. In an uptrend, pullbacks toward support or moving averages are buying opportunities.</li>
        <li><strong>Downtrend (बेयरिश ट्रेन्ड):</strong> The stock forms <strong>Lower Highs (LH)</strong> and <strong>Lower Lows (LL)</strong>. Cash or defensive positions are safest; attempting to "catch falling knives" leads to severe drawdown.</li>
        <li><strong>Consolidation / Sideways:</strong> The stock bounces back and forth within a horizontal channel between support and resistance without clear directional trend.</li>
      </ul>

      <h2>4. Three Essential Technical Indicators for NEPSE</h2>
      
      <h3>1. Moving Averages (SMA / EMA)</h3>
      <p>Moving averages smooth out daily price noise to reveal underlying trend direction:</p>
      <ul>
        <li><strong>20-Day EMA:</strong> Tracks short-term momentum; ideal for swing traders.</li>
        <li><strong>50-Day SMA:</strong> Standard intermediate trend benchmark.</li>
        <li><strong>200-Day SMA:</strong> The ultimate long-term institutional trend line. When the NEPSE Index trades above its 200-day moving average, the broader market is in a structural bull cycle.</li>
      </ul>

      <h3>2. Relative Strength Index (RSI - 14 Period)</h3>
      <p>RSI is a momentum oscillator measuring the speed and magnitude of recent price changes on a scale of 0 to 100:</p>
      <ul>
        <li><strong>RSI Below 30:</strong> Considered <em>Oversold</em>. Selling may be exhausted; watch for bullish reversal patterns.</li>
        <li><strong>RSI Above 70:</strong> Considered <em>Overbought</em>. The stock has experienced intense rapid buying; expect consolidation or profit-taking.</li>
        <li><strong>Bullish / Bearish Divergence:</strong> If the stock makes a new lower low but RSI forms a higher low, momentum is shifting upward—often presaging a major trend reversal.</li>
      </ul>

      <h3>3. Volume Confirmation</h3>
      <p>Volume represents the fuel of price movement. A price breakout above resistance with low volume is often a <strong>False Breakout (Trap)</strong>. A valid, sustainable breakout must be accompanied by volume significantly higher than the 20-day average, confirming institutional participation.</p>

      <h2>5. Risk Management: The Non-Negotiable Rule of Survival</h2>
      <p>The difference between successful traders and gamblers on NEPSE is not the indicator they use; it is their strict adherence to <strong>Risk Management</strong>:</p>
      <ul>
        <li><strong>Always Define Your Stop-Loss Before Entering:</strong> A stop-loss is an automatic exit price that limits your loss if the trade invalidates your thesis. Never enter a position without knowing where you will cut your loss.</li>
        <li><strong>Minimum 1:2 Risk-to-Reward Ratio:</strong> Never risk NPR 1,000 to make NPR 500. If your stop-loss risks NPR 20 per share, your target profit must be at least NPR 40 to NPR 60 per share. With a 1:2 ratio, you can be wrong 50% of the time and still remain consistently profitable!</li>
        <li><strong>Position Sizing (The 1-2% Rule):</strong> Never risk more than 1% to 2% of your total trading portfolio on any single trade. If your account size is NPR 500,000, your maximum allowable loss on any single trade should never exceed NPR 5,000 to NPR 10,000.</li>
      </ul>
    `
  },
  {
    id: 14,
    slug: 'digital-banking-security-nepal-connectips',
    title: 'Digital Banking Security in Nepal: ConnectIPS, QR Safety & Fraud Prevention',
    excerpt: 'Protect your hard-earned savings from cyber fraud, fake QR codes, OTP scams, and social engineering in Nepal. Step-by-step reporting guide.',
    category: 'Fintech',
    categorySlug: 'fintech',
    author: 'Aakash Das',
    authorRole: 'Founder of RisePaisa | Finance Educator & Content Creator',
    authorUrl: '/aakash-das',
    date: '2026-05-20',
    lastUpdated: '2026-10-19',
    readTime: '9 min read',
    featured: false,
    thumbnail: 'assets/images/blog-banking-security.png',
    imageAlt: 'Smartphone with verified biometric security shield for ConnectIPS and digital banking protection',
    relatedCalculator: {
      title: 'Emergency Fund Planner',
      slug: 'emergency-fund',
      url: '/calculators/fixed-deposit',
      ctaText: 'Calculate and structure safe liquid emergency savings across protected banking institutions'
    },
    relatedCourse: {
      title: 'Share Market Full Course (NEPSE)',
      url: '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    },
    relatedTopic: {
      name: 'Digital Payments & Fintech in Nepal',
      url: '/learn/digital-payments'
    },
    sources: [
      {
        title: 'Information Technology & Cybersecurity Guidelines for Financial Institutions',
        institution: 'Nepal Rastra Bank (NRB)',
        url: 'https://nrb.org.np'
      },
      {
        title: 'Cyber Crime Reporting Directives',
        institution: 'Nepal Police Cyber Bureau',
        url: 'https://cid.nepalpolice.gov.np'
      },
      {
        title: 'Payment Systems Modernization Guidelines',
        institution: 'Nepal Clearing House Limited (NCHL)',
        url: 'https://nchl.com.np'
      }
    ],
    disclaimer: 'This cybersecurity advisory is compiled for consumer protection education. If you suspect an unauthorized transaction, contact your bank’s 24/7 hotline and the Nepal Police Cyber Bureau immediately.',
    content: `
      <p>Digital finance in Nepal has witnessed exponential expansion over recent years. From Fonepay and NepalPay QR codes in local neighborhood shops to ConnectIPS interbank settlements, millions of rupees are transferred across digital payment rails every minute. However, this convenience has also attracted sophisticated cybercriminals targeting unwary consumers.</p>
      <p>Every week, Nepali citizens fall victim to social engineering scams, fraudulent investment schemes, and unauthorized banking withdrawals. This comprehensive guide outlines the anatomy of modern digital financial scams in Nepal and gives you an actionable security blueprint to protect your accounts.</p>

      <h2>1. The Four Most Common Digital Financial Scams in Nepal</h2>
      
      <h3>1. The OTP & "Customer Support" Impersonation Scam</h3>
      <p>Scammers pose as customer care representatives from digital wallets (eSewa, Khalti) or commercial banks. They contact you claiming your account has been "temporarily suspended for KYC renewal" or that you won an official cash prize. They instruct you to share an incoming SMS code. <strong>That SMS is an automated One-Time Password (OTP) enabling them to log into your account or authorize a fund transfer.</strong></p>

      <h3>2. The Remote Access App Trap (AnyDesk / TeamViewer)</h3>
      <p>Under the guise of "helping you fix a failed transaction" or "updating mobile banking," fraudsters instruct victims to install remote desktop applications (such as AnyDesk, QuickSupport, or RustDesk) from the Google Play Store. Once installed, the scammer gains complete visual and keyboard control over your smartphone, capturing your banking MPINs and transferring out your balances.</p>

      <h3>3. Fake Payment Screenshot Scams (Targeting Retail Merchants)</h3>
      <p>Scammers enter retail grocery stores, restaurants, or clothing boutiques, pretend to scan a Fonepay QR code, and display a fabricated "Payment Successful" screen on their phone generated by third-party spoofing apps. The merchant glance at the phone without verifying the actual incoming transaction SMS or banking soundbox announcement, resulting in merchandise theft.</p>

      <h3>4. The Online Telegram / WhatsApp "Task Investment" Scheme</h3>
      <p>Victims receive unsolicited messages offering "work-from-home earnings" simply by liking YouTube videos or reviewing hotels. The victim is paid a small initial reward (NPR 500 to NPR 1,500) to build false trust. Subsequently, the victim is lured into depositing larger sums (NPR 50,000 to NPR 500,000+) into individual "crypto" or "VIP trading accounts" through domestic bank accounts, after which the scammers vanish.</p>

      <h2>2. Core Rules of Digital Banking Defense</h2>
      <ul>
        <li><strong>Never Share Your OTP with Anyone:</strong> Bank employees, wallet support agents, and police officers will NEVER ask for your OTP, MPIN, or transaction PIN under any circumstance. An OTP is meant solely for your eyes.</li>
        <li><strong>Beware of Urgency and Panic Tactics:</strong> Scammers manufacture artificial panic ("Your account will be deleted in 10 minutes!") to bypass your rational thinking. If someone creates urgent pressure, immediately disconnect the call.</li>
        <li><strong>Verify Bank URLs and Apps:</strong> Only download mobile banking applications from verified app store developer profiles. For browser-based trading or banking, verify that the domain ends in official extensions and features valid SSL encryption.</li>
        <li><strong>Separate Your Operational Account from Your Savings:</strong> Keep the bulk of your emergency savings and long-term funds in a bank account that does not have an active mobile banking app or debit card linked for daily street purchases. Keep only modest daily spending amounts in your wallet or active mobile banking account.</li>
      </ul>

      <h2>3. Retail Merchant Safety Checklist</h2>
      <p>If you operate a retail shop or business accepting QR payments in Nepal:</p>
      <ol>
        <li><strong>Never trust a customer's phone screen:</strong> Anyone can display a fake screenshot or screen recording. Always wait for your own verification.</li>
        <li><strong>Verify via Official Soundbox or SMS:</strong> Rely strictly on real-time audio confirmations from your merchant soundbox or official transaction SMS alerts delivered directly to your registered phone.</li>
        <li><strong>Check Merchant Dashboard:</strong> If in doubt, open your merchant app (e.g., Fonepay Merchant, eSewa Merchant) and confirm the incoming Transaction ID and timestamp before releasing high-value goods.</li>
      </ol>

      <h2>4. Emergency Action Plan: What to Do If Compromised</h2>
      <p>If you suspect unauthorized activity or have accidentally disclosed your credentials:</p>
      <ol>
        <li><strong>Call Your Bank’s 24/7 Card & Digital Hotline Immediately:</strong> Request an emergency block on your debit cards, mobile banking credentials, and internet banking profile. Every commercial bank in Nepal maintains a 24-hour card support division.</li>
        <li><strong>Lock or Change Your Digital Wallet Credentials:</strong> Log into your digital wallet from a secure browser and immediately reset your transaction PIN and password.</li>
        <li><strong>Gather Documentary Evidence:</strong> Take clear screenshots of the scammer's phone number, transaction IDs, recipient bank account numbers, SMS messages, and social media handles.</li>
        <li><strong>File an Official Complaint with the Nepal Police Cyber Bureau:</strong>
          <ul>
            <li>Location: Nepal Police Cyber Bureau, Bhotahiti, Kathmandu</li>
            <li>Hotline: 01-4241908 / 01-4241909</li>
            <li>Email: cyberbureau@nepalpolice.gov.np</li>
            <li>Online Complaint: Accessible via the official Nepal Police digital portal</li>
          </ul>
        </li>
      </ol>
    `
  }
];

export function getArticles() {
  return ARTICLES;
}

export function getArticleBySlug(slug) {
  return ARTICLES.find(a => a.slug === slug) || null;
}

export default ARTICLES;

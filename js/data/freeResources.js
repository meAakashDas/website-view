// ==============================================
// risePaisa - Free Downloadable Resources (7 Practical Tools)
// Lightweight metadata module for /resources and /learn
// ==============================================

export const FREE_RESOURCES = [
  {
    id: 'res-budget-planner',
    title: { en: 'Nepal Personal Budget Planner', np: 'नेपाल व्यक्तिगत बजेट प्लानर' },
    desc: { en: 'Clean Excel & Google Sheets template adapted for Nepali salaries, room rent, and festival sinking funds.', np: 'नेपाली तलब, कोठा भाडा, रासन र चाडपर्व खर्च ट्र्याक गर्न तयार पारिएको Excel/Sheets Template।' },
    type: 'Spreadsheet',
    format: 'XLSX / CSV',
    formatBadge: 'Spreadsheet',
    icon: 'spreadsheet',
    previewType: 'csv',
    fileSize: '142 KB',
    badge: { en: 'Most Popular', np: 'अति लोकप्रिय' },
    downloadUrl: 'assets/downloads/nepal-personal-budget-planner.csv',
    downloadFilename: 'nepal-personal-budget-planner.csv',
    isDirectDownload: true,
    highlights: [
      { en: '50/30/20 Rule Engine', np: '५०/३०/२० बजेट सूत्र' },
      { en: 'Dashain Sinking Fund', np: 'दशैं-तिहार बचत कोष' },
      { en: 'Excel & Google Sheets', np: 'एक्सेल र सिट' }
    ],
    whoItIsFor: {
      en: 'Salaried employees, fresh graduates, and families living in urban Nepal seeking structured monthly cash control.',
      np: 'मासिक तलब पाउने कर्मचारी, नयाँ स्नातक र सहरमा बस्ने परिवार जसलाई आफ्नो मासिक खर्च नियन्त्रण गर्नु छ।'
    },
    howToUse: {
      en: '1. Download the CSV template. 2. Open in Microsoft Excel, Apple Numbers, or Google Sheets. 3. Enter take-home salary and track monthly categories.',
      np: '१. CSV फाइल डाउनलोड गर्नुहोस्। २. Excel वा Google Sheets मा खोल्नुहोस्। ३. तलब हालेर मासिक खर्च व्यवस्थित गर्नुहोस्।'
    },
    estimatedTime: { en: '15 Mins Setup', np: '१५ मिनेट सेटअप' },
    companionLesson: 'budgeting-50-30-20-nepal',
    companionLessonTitle: { en: '50/30/20 Budgeting Rule for Nepal', np: 'नेपालमा ५०/३०/२० बजेटिङ नियम' },
    companionCategorySlug: 'personal-finance',
    companionCalculator: 'sip'
  },
  {
    id: 'res-cashflow-notion',
    title: { en: 'Monthly Cash Flow & Net Worth Tracker', np: 'मासिक Cash Flow र Net Worth ट्र्याकर' },
    desc: { en: 'Comprehensive personal balance sheet ledger for tracking liquid wallets, investments, debts, and true net worth.', np: 'दैनिक खर्च, वालेट, बैंक खाता, सेयर लगानी, ऋण र आफ्नो कुल नेटवर्थ व्यवस्थित रूपमा ट्र्याक गर्ने स्प्रेडसिट ट्र्याकर।' },
    type: 'Spreadsheet',
    format: 'CSV / Excel',
    formatBadge: 'Net Worth Ledger',
    icon: 'ledger',
    previewType: 'csv',
    fileSize: '180 KB',
    badge: { en: 'Direct Download', np: 'प्रत्यक्ष डाउनलोड' },
    downloadUrl: 'assets/downloads/nepal-cash-flow-tracker.csv',
    downloadFilename: 'nepal-cash-flow-tracker.csv',
    isDirectDownload: true,
    highlights: [
      { en: 'Bank & Wallet Balances', np: 'बैंक र वालेट हिसाब' },
      { en: 'True Net Worth Formula', np: 'नेट वर्थ सूत्र' },
      { en: 'Solvency & Runway Check', np: 'बचत क्षमता जाँच' }
    ],
    whoItIsFor: {
      en: 'Salaried earners, digital freelancers, and multi-account holders (Bank + eSewa + Khalti + NEPSE).',
      np: 'तलबजीवी, फ्रिलान्सर र धेरै खाता (बैंक, इसेवा, खल्ती र सेयर) चलाउने व्यक्तिहरू।'
    },
    howToUse: {
      en: '1. Download CSV. 2. Open in Excel/Sheets. 3. Enter initial bank and wallet balances to view automatic Net Worth calculation.',
      np: '१. CSV डाउनलोड गर्नुहोस्। २. Excel वा Sheets मा खोल्नुहोस्। ३. बैंक र वालेटको मौज्दात हालेर Net Worth हिसाब हेर्नुहोस्।'
    },
    estimatedTime: { en: '10 Mins Setup', np: '१० मिनेट सेटअप' },
    companionLesson: 'tracking-money-leaks',
    companionLessonTitle: { en: 'How to Track Unseen Money Leaks', np: 'पैसा कहाँ हराउँछ? Money Leaks पत्ता लगाउने विधि' },
    companionCategorySlug: 'personal-finance',
    companionCalculator: 'tax'
  },
  {
    id: 'res-nepse-checklist',
    title: { en: 'First-Time NEPSE Investor Checklist', np: 'पहिलो पटक NEPSE मा लगानी गर्नेहरूको चेकलिस्ट' },
    desc: { en: 'A step-by-step printable and interactive checklist covering Demat opening, C-ASBA, broker selection, and TMS trading.', np: 'Demat खोल्ने, C-ASBA लिने, ब्रोकर छनोट गर्ने र पहिलो सेयर अर्डर हाल्नेसम्मको चरणबद्ध प्रिन्ट गर्न मिल्ने चेकलिस्ट।' },
    type: 'Printable Checklist',
    format: 'HTML / Print PDF',
    formatBadge: 'Interactive Checklist',
    icon: 'checklist',
    previewType: 'html',
    fileSize: '320 KB',
    badge: { en: 'Printable', np: 'प्रिन्ट गर्न मिल्ने' },
    downloadUrl: 'assets/downloads/nepse-first-time-investor-checklist.html',
    downloadFilename: 'nepse-first-time-investor-checklist.html',
    isDirectDownload: true,
    highlights: [
      { en: '18 Actionable Steps', np: '१८ चरणबद्ध प्रक्रिया' },
      { en: 'C-ASBA & CRN Guide', np: 'सी-आस्वा र CRN' },
      { en: 'Print / Save as PDF', np: 'प्रिन्ट र सेभ' }
    ],
    whoItIsFor: {
      en: 'Complete beginners ready to open their first Demat, apply for IPOs via MeroShare, and trade on NEPSE TMS.',
      np: 'पहिलो पटक डिम्याट खोल्न, मेरोसेयरबाट IPO भर्न र NEPSE TMS बाट सेयर कारोबार गर्न चाहने नयाँ लगानीकर्ता।'
    },
    howToUse: {
      en: '1. Click Download/Open to view printable checklist. 2. Check off documents (Nagarikta, PP photo). 3. Click "Print / Save as PDF".',
      np: '१. चेकलिस्ट डाउनलोड वा खोल्नुहोस्। २. नागरिकता र फोटो तयार पार्नुहोस्। ३. "Print / Save as PDF" थिचेर सेभ गर्नुहोस्।'
    },
    estimatedTime: { en: '5 Mins Read', np: '५ मिनेट अध्ययन' },
    companionLesson: 'demat-meroshare-tms',
    companionLessonTitle: { en: 'Demat, MeroShare & TMS Account Guide', np: 'डिम्याट, मेरोसेयर र TMS खाता गाइड' },
    companionCategorySlug: 'nepse',
    companionCalculator: 'share'
  },
  {
    id: 'res-loan-comparison',
    title: { en: 'Commercial Bank Loan Comparison Worksheet', np: 'वाणिज्य बैंक कर्जा तुलना तालिका' },
    desc: { en: 'Compare bank base rates, premium spreads, prepayment penalty clauses, and true repayment cost.', np: 'विभिन्न बैंकहरूको Base Rate, प्रिमियम र अग्रिम भुक्तानीका सर्तहरू दाँज्ने विश्लेषणात्मक पाना।' },
    type: 'Worksheet',
    format: 'XLSX / CSV',
    formatBadge: 'Comparison Matrix',
    icon: 'comparison',
    previewType: 'csv',
    fileSize: '180 KB',
    badge: { en: 'Loan Analysis', np: 'कर्जा विश्लेषण' },
    downloadUrl: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv',
    downloadFilename: 'commercial-bank-loan-comparison-worksheet.csv',
    isDirectDownload: true,
    highlights: [
      { en: '5 Class-A Bank Matrix', np: '५ वाणिज्य बैंक तुलना' },
      { en: 'Base Rate + Premium', np: 'बेस रेट र प्रिमियम' },
      { en: 'NRB Fee Rules', np: 'राष्ट्र बैंकका नियमहरू' }
    ],
    whoItIsFor: {
      en: 'Homebuyers, vehicle loan applicants, and entrepreneurs evaluating bank loan offers across Class-A commercial banks.',
      np: 'घरकर्जा, सवारी कर्जा वा व्यवसायिक कर्जा लिन बैंकका प्रस्तावहरू तुलना गरिरहेका व्यक्तिहरू।'
    },
    howToUse: {
      en: '1. Download worksheet. 2. Enter Base Rate and Premium for 3 banks. 3. Compare monthly EMI and total interest.',
      np: '१. पाना डाउनलोड गर्नुहोस्। २. तीन बैंकको Base Rate र Premium हाल्नुहोस्। ३. मासिक किस्ता र कुल ब्याज दाँज्नुहोस्।'
    },
    estimatedTime: { en: '15 Mins Analysis', np: '१५ मिनेट विश्लेषण' },
    companionLesson: 'good-debt-vs-bad-debt',
    companionLessonTitle: { en: 'Good Debt vs Bad Debt in Nepal', np: 'सकारात्मक र हानिकारक ऋणको भिन्नता' },
    companionCategorySlug: 'personal-finance',
    companionCalculator: 'loans'
  },
  {
    id: 'res-reading-list',
    title: { en: 'Essential Finance Reading List for Nepal', np: 'नेपालका लागि अत्यावश्यक वित्तीय पुस्तक सूची' },
    desc: { en: 'Curated handbook of timeless money books translated into Nepali context, policy primers, and resources.', np: 'संसारका उत्कृष्ट वित्तीय पुस्तकहरूका मुख्य सन्देश र नेपाली परिवेशमा तिनको व्यावहारिक प्रयोग।' },
    type: 'Curated Guide',
    format: 'Printable Handbook',
    formatBadge: 'Curated Handbook',
    icon: 'handbook',
    previewType: 'html',
    fileSize: '410 KB',
    badge: { en: 'Curated', np: 'विशेष छनोट' },
    downloadUrl: 'assets/downloads/essential-finance-reading-list.html',
    downloadFilename: 'essential-finance-reading-list.html',
    isDirectDownload: true,
    highlights: [
      { en: '8 Classic Finance Books', np: '८ क्लासिक वित्तीय पुस्तक' },
      { en: 'Nepali Context Analysis', np: 'नेपाली परिवेश व्याख्या' },
      { en: '3-Tier Action Roadmap', np: '३-चरणबद्ध मार्गचित्र' }
    ],
    whoItIsFor: {
      en: 'Self-directed learners, students, and professionals cultivating long-term financial mindset and investing philosophy.',
      np: 'दीर्घकालीन वित्तीय सोच र लगानी दर्शन विकास गर्न चाहने स्व-अध्येता, विद्यार्थी र पेसाकर्मी।'
    },
    howToUse: {
      en: '1. Open handbook. 2. Review the tiered reading roadmap. 3. Read chapter takeaways adapted for Nepal.',
      np: '१. पुस्तिका खोल्नुहोस्। २. पुस्तक मार्गचित्र हेर्नुहोस्। ३. नेपाली परिवेश अनुसार मुख्य बुँदाहरू पढ्नुहोस्।'
    },
    estimatedTime: { en: '20 Mins Read', np: '२० मिनेट अध्ययन' },
    companionLesson: 'compound-interest-nepal',
    companionLessonTitle: { en: 'Compound Interest & Rupee Growth', np: 'चक्रवृद्धि ब्याज र रुपैयाँको शक्ति' },
    companionCategorySlug: 'personal-finance',
    companionCalculator: 'cagr'
  },
  {
    id: 'res-tax-deductions-list',
    title: { en: 'Salary Earner Legal Tax Deductions Checklist', np: 'तलबजीवी कर्मचारीका लागि कर छुट चेकलिस्ट' },
    desc: { en: 'Every legitimate deduction you can claim: SSF, CIT, Life Insurance, Medical Tax Credit, and Remote Allowance.', np: 'नेपालमा कर घटाउन दाबी गर्न सकिने सबै कानुनी छुटहरूको पूर्ण सूची: SSF, CIT, बीमा र औषधि उपचार कर क्रेडिट।' },
    type: 'Printable Checklist',
    format: 'Printable Document',
    formatBadge: 'Tax Blueprint',
    icon: 'checklist',
    previewType: 'html',
    fileSize: '250 KB',
    badge: { en: 'FY 2081/82 - 2082/83', np: 'आ.व. २०८१/८२' },
    downloadUrl: 'assets/downloads/nepal-salary-tax-deductions-checklist.html',
    downloadFilename: 'nepal-salary-tax-deductions-checklist.html',
    isDirectDownload: true,
    highlights: [
      { en: '7 Statutory Deductions', np: '७ कानुनी छुटहरू' },
      { en: 'Section 63 CIT/SSF Rules', np: 'दफा ६३ का प्रावधान' },
      { en: 'Single vs Married Slabs', np: 'व्यक्तिगत र दम्पती स्ल्याब' }
    ],
    whoItIsFor: {
      en: 'Salaried employees and HR/finance payroll managers aiming to optimize annual tax withholding under Income Tax Act 2058.',
      np: 'आयकर ऐन २०५८ बमोजिम कानुनी रूपमा कर बचत गर्न चाहने तलबजीवी कर्मचारी र लेखापालहरू।'
    },
    howToUse: {
      en: '1. Open checklist. 2. Check Section 63 limits (NPR 3 Lakhs / 1/3 income). 3. Submit insurance policies to employer HR before Jestha 15.',
      np: '१. चेकलिस्ट खोल्नुहोस्। २. दफा ६३ का सीमाहरू जाँच्नुहोस्। ३. जेठ १५ अगावै बीमा पोलिसी कार्यालयको HR मा बुझाउनुहोस्।'
    },
    estimatedTime: { en: '10 Mins Check', np: '१० मिनेट रुजु' },
    companionLesson: 'income-tax-nepal-basics',
    companionLessonTitle: { en: 'Income Tax in Nepal: Slabs & Rules', np: 'नेपालमा आयकर: स्ल्याब र नियमहरू' },
    companionCategorySlug: 'taxation',
    companionCalculator: 'tax'
  },
  {
    id: 'res-glossary-pocket',
    title: { en: 'Financial Jargon Pocket Reference Guide', np: 'वित्तीय शब्दावली पकेट सन्दर्भ पुस्तिका' },
    desc: { en: '50+ essential Nepali stock market and banking terms with clear two-sentence explanations.', np: 'नेपालको सेयर बजार र बैंकिङ प्रणालीमा प्रयोग हुने ५० भन्दा बढी प्रमुख शब्दहरूको संक्षिप्त परिभाषा।' },
    type: 'Pocket Guide',
    format: 'Printable Guide',
    formatBadge: 'Bilingual Glossary',
    icon: 'guide',
    previewType: 'html',
    fileSize: '490 KB',
    badge: { en: 'Reference', np: 'सन्दर्भ सामग्री' },
    downloadUrl: 'assets/downloads/financial-jargon-pocket-guide.html',
    downloadFilename: 'financial-jargon-pocket-guide.html',
    isDirectDownload: true,
    highlights: [
      { en: 'Searchable Dictionary', np: 'खोज्न मिल्ने शब्दकोश' },
      { en: 'NEPSE, Banking & Tax', np: 'सेयर, बैंकिङ र कर' },
      { en: 'English & Nepali Defs', np: 'अंग्रेजी र नेपाली परिभाषा' }
    ],
    whoItIsFor: {
      en: 'Anyone overwhelmed by banking jargon, NEPSE acronyms (EDIS, WACC, C-ASBA, DSTI, LTV), and regulatory terms.',
      np: 'बैंकिङ र सेयर बजारका प्राविधिक शब्दहरू (EDIS, WACC, C-ASBA, DSTI, LTV) बुझ्न चाहने जोकोही।'
    },
    howToUse: {
      en: '1. Open pocket guide. 2. Bookmark or print as reference. 3. Read concise English definition with exact Nepali equivalent.',
      np: '१. पकेट गाइड खोल्नुहोस्। २. बुकमार्क वा प्रिन्ट गर्नुहोस्। ३. सरल नेपाली र अंग्रेजी दुवै भाषामा अर्थ बुझ्नुहोस्।'
    },
    estimatedTime: { en: 'Quick Reference', np: 'तत्काल सन्दर्भ' },
    companionLesson: 'demat-meroshare-tms',
    companionLessonTitle: { en: 'Demat, MeroShare & TMS Account Guide', np: 'डिम्याट, मेरोसेयर र TMS खाता गाइड' },
    companionCategorySlug: 'nepse',
    companionCalculator: 'share'
  }
];

// ==============================================
// risePaisa - Expanded Banking, Loans & Digital Rails Glossary
// Core credit, banking prudential metrics and settlement rails (NPL, CAR, Spread Rate, Reducing Balance, ConnectIPS, WACC)
// ==============================================

export const EXPANDED_BANKING_GLOSSARY = [
  // 1. NPL
  {
    slug: 'npl',
    term: 'NPL (Non-Performing Loan)',
    termNp: 'निष्प्रभावी कर्जा (NPL / खराब कर्जा)',
    categorySlug: 'banking',
    categoryName: { en: 'Banking', np: 'बैंकिङ' },
    letter: 'N',
    abbreviation: 'NPL',
    synonyms: ['Non-Performing Loan', 'NPA', 'खराब कर्जा', 'भाखा नाघेको ऋण'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Non-Performing Loan (NPL) is a bank loan where the borrower has failed to pay scheduled principal or interest payments for 90 days or longer.',
      np: 'निष्प्रभावी कर्जा (NPL) भनेको ऋणीले ९० दिन वा सोभन्दा बढी समयसम्म सावाँ वा ब्याज भुक्तानी गर्न नसकेको बैंक तथा वित्तीय संस्थाको भाखा नाघेको ऋण हो।'
    },
    detailedExplanation: {
      en: 'Regulated under Nepal Rastra Bank\'s Unified Directives, loans are categorized into Performing (Pass & Watchlist) and Non-Performing. Once payments are overdue past 90 days, the loan enters NPL and is classified into Substandard (90-180 days, requiring 25% provisioning), Doubtful (180-360 days, requiring 50% provisioning), and Loss (over 360 days, requiring 100% provisioning). When NPL rises, the bank must set aside large portions of its operating profit into Loan Loss Provisions, directly crushing net profits, EPS, and dividend capacity.',
      np: 'नेपाल राष्ट्र बैंकको एकीकृत निर्देशन अनुसार ९० दिनभन्दा बढी भाखा नाघेका कर्जालाई खराब कर्जामा गणना गरिन्छ। यसलाई कमसल (२५% प्रोभिजन), शंकास्पद (५०% प्रोभिजन) र खराब (१००% प्रोभिजन) मा वर्गीकरण गरिन्छ। जब बैंकमा खराब कर्जा बढ्छ, बैंकले आफ्नो नाफाबाट ठूलो रकम प्रोभिजनिङ (नोक्सानी व्यवस्था) मा छुट्याउनुपर्छ, जसले गर्दा खुद नाफा, ईपीएस र लाभांश क्षमतामा सिधै गिरावट आउँछ।'
    },
    whyItMatters: {
      en: 'NPL is the most crucial health indicator of a commercial bank in Nepal. A bank with an NPL surging past 4% to 5% faces regulatory intervention, restrictions on dividend distributions, and credit rating downgrades.',
      np: 'खराब कर्जा बैंकको स्वास्थ्य देखाउने मुख्य ऐना हो। यदि खराब कर्जा ५% भन्दा माथि पुग्यो भने राष्ट्र बैंकले लाभांश बाँड्न रोक लगाउन सक्छ र बैंक समस्याग्रस्त हुन सक्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Nepal Rastra Bank loan classification categories and required provisioning:',
        np: 'नेपाल राष्ट्र बैंकको कर्जा वर्गीकरण र प्रोभिजनिङ नियम:'
      },
      steps: [
        {
          title: { en: '1. Pass Loan (< 30 Days)', np: '१. असल कर्जा (३० दिनसम्म)' },
          desc: { en: 'Regular payments made on time; requires minimal 1.25% general loan loss reserve.', np: 'समयमै किस्ता तिरेको; १.२५% साधारण नोक्सानी व्यवस्था।' }
        },
        {
          title: { en: '2. Substandard (90 to 180 Days)', np: '२. कमसल कर्जा (९० देखि १८० दिन)' },
          desc: { en: 'Enters NPL category; bank must provision exactly 25% of the total loan amount from operating profit.', np: 'खराब कर्जामा प्रवेश; २५% रकम नाफाबाट नोक्सानी व्यवस्थामा राख्नुपर्ने।' }
        },
        {
          title: { en: '3. Doubtful (180 to 360 Days)', np: '३. शंकास्पद कर्जा (१८० देखि ३६० दिन)' },
          desc: { en: 'Severe default risk; bank must provision exactly 50% of the loan value.', np: 'असुल हुन कठिन; ५०% रकम प्रोभिजनिङ गर्नुपर्ने।' }
        },
        {
          title: { en: '4. Loss Loan (> 360 Days / Collateral Bad)', np: '४. खराब कर्जा (१ वर्षभन्दा बढी)' },
          desc: { en: 'Total default; requires 100% provisioning and initiation of collateral auction / CIB blacklisting.', np: 'पूर्ण जोखिम; १००% प्रोभिजनिङसहित धितो लिलामी र कर्जा सूचना केन्द्रमा कालोसूचीमा राख्ने।' }
        }
      ]
    },
    whereUsed: {
      en: ['Bank quarterly financial audits', 'Credit rating analysis', 'Regulatory dividend approval screenings']
    },
    nepalContext: {
      en: 'Under NRB directives, if a commercial bank\'s gross NPL exceeds 5.0%, it is placed under prompt supervisory scrutiny and legally prohibited from distributing cash dividends or bonus shares.',
      np: 'नेपाल राष्ट्र बैंकको नियम अनुसार कुनै पनि बैंकको खराब कर्जा ५% भन्दा बढी पुगेमा सो बैंकले सेयरधनीहरूलाई नगद वा बोनस लाभांश वितरण गर्न पाउँदैन।'
    },
    formula: {
      expression: 'NPL Ratio (%) = (Total Non-Performing Loans / Total Outstanding Loan Portfolio) × 100',
      variables: [
        { symbol: 'Total NPL', meaning: 'Sum of Substandard, Doubtful, and Loss credit facilities' },
        { symbol: 'Total Loan Portfolio', meaning: 'Gross lending advances disbursed by the financial institution' }
      ],
      exampleCalculation: 'If a bank disbursed NPR 200 Arba in total loans and NPR 6 Arba are overdue past 90 days, NPL = (6 / 200) × 100 = 3.00%.'
    },
    example: {
      scenario: 'Impact of rising NPL on bank profitability',
      calculations: [
        'Bank has operating profit of NPR 4 Arba before provisions',
        'Economic slowdown causes NPL to jump by NPR 2 Arba, requiring fresh provisions',
        'Net Profit after provisions: NPR 4 Arba - NPR 2 Arba = NPR 2 Arba',
        'Result: Net profit and EPS are cut in half due strictly to NPL provisioning'
      ],
      outcome: 'Stock price drops as market prices in lower future dividend yields.'
    },
    commonMisconceptions: [
      {
        misconception: 'If a loan is backed by land collateral, it cannot be classified as NPL.',
        reality: 'False. NPL classification is based strictly on payment aging (past 90 days). Even with prime Kathmandu land collateral, overdue interest forces NPL classification.'
      }
    ],
    prosAndCons: {
      pros: ['Enforces conservative banking discipline', 'Transparent measure of real banking credit quality', 'Protects customer deposits'],
      cons: ['High provisioning cycles temporarily suppress bank stock prices']
    },
    relatedTerms: [
      { slug: 'car', name: 'CAR', type: 'glossary' },
      { slug: 'base-rate', name: 'Base Rate', type: 'glossary' },
      { slug: 'eps', name: 'EPS', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Bank Financial Statement Breakdown', categorySlug: 'banking', slug: 'cheque-bounce-banking-offence-nepal' }
    ],
    relatedGuides: [
      { title: 'Commercial Bank Loan Comparison Worksheet', slug: 'commercial-bank-loan-comparison-worksheet' }
    ],
    relatedCalculators: [
      { name: 'Loan EMI Calculator', slug: 'emi', desc: 'Simulate loan schedules and payments.' }
    ],
    faq: [
      {
        q: { en: 'What is a "good" NPL ratio in Nepal?', np: 'नेपालका बैंकहरूमा कति एनपिएललाई सन्तोषजनक मानिन्छ?' },
        a: {
          en: 'An NPL below 2.0% is considered exceptional, while 2% to 3.5% is typical of normal economic conditions. An NPL approaching or exceeding 5.0% represents serious credit stress.',
          np: '२% भन्दा कम एनपिएल हुनु उत्कृष्ट मानिन्छ भने २% देखि ३.५% सम्म सामान्य मानिन्छ। ५% नाघ्नुलाई भने गम्भीर संकट मानिन्छ।'
        }
      }
    ],
    references: [
      { title: 'Unified Directives on Asset Classification', authority: 'Nepal Rastra Bank', url: 'https://nrb.org.np' }
    ]
  },

  // 2. CAR
  {
    slug: 'car',
    term: 'CAR (Capital Adequacy Ratio)',
    termNp: 'पुँजी पर्याप्तता अनुपात (Capital Adequacy Ratio)',
    categorySlug: 'banking',
    categoryName: { en: 'Banking', np: 'बैंकिङ' },
    letter: 'C',
    abbreviation: 'CAR',
    synonyms: ['Capital to Risk-Weighted Assets Ratio', 'CRAR', 'पुँजी पर्याप्तता अनुपात', 'बसेल ३ पुँजी'],
    difficulty: 'Advanced',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Capital Adequacy Ratio (CAR) measures a bank\'s available capital as a percentage of its risk-weighted credit exposure, ensuring solvency against catastrophic losses.',
      np: 'पुँजी पर्याप्तता अनुपात (CAR) ले बैंकले प्रवाह गरेको कर्जाको जोखिमको तुलनामा बैंकसँग आफ्नै पुँजीको बफर कति छ भन्ने मापन गर्दछ।'
    },
    detailedExplanation: {
      en: 'Enforced by Nepal Rastra Bank under the international Basel III framework, the Capital Adequacy Ratio (also known as CRAR) ensures that financial institutions maintain a sufficient cushion of core capital to absorb unexpected loan defaults without jeopardizing public customer deposits. CAR divides a bank\'s eligible capital (Tier 1 Core Capital plus Tier 2 Supplementary Capital) by its Total Risk-Weighted Assets (RWA). In Nepal, commercial banks must maintain a minimum Total CAR of 11.0% (including capital conservation buffers). If CAR drops below this statutory line, the bank is barred from issuing new loans and cannot distribute dividends.',
      np: 'अन्तर्राष्ट्रिय बसेल ३ (Basel III) मापदण्ड अनुसार नेपाल राष्ट्र बैंकले लागू गरेको पुँजी पर्याप्तता अनुपातले बैंक टाट पल्टिनबाट जोगाउँछ। यसले बैंकको आफ्नै पुँजी (Tier 1 प्राथमिक पुँजी र Tier 2 पूरक पुँजी) लाई कुल जोखिमभारित सम्पत्तिले भाग गर्छ। नेपालका वाणिज्य बैंकहरूले कम्तीमा ११% पुँजी पर्याप्तता अनुपात कायम गर्नैपर्छ। यो अनुपात पुगेन भने बैंकले नयाँ ऋण दिन पाउँदैन र सेयरधनीलाई लाभांश बाँड्न पनि प्रतिबन्ध लाग्छ।'
    },
    whyItMatters: {
      en: 'CAR determines a bank\'s capacity to expand its business. A bank with an 11.2% CAR cannot grow its loan book without raising fresh capital (via rights shares or debentures), whereas a bank with a 14% CAR has ample runway to disburse profitable loans.',
      np: 'बैंकले थप कर्जा विस्तार गर्न सक्छ कि सक्दैन भन्ने कुरा CAR मा भर पर्छ। यदि यो सीमा ११% को नजिक छ भने बैंकले थप ऋण लगानी गर्न पाउँदैन र व्यवसाय ठप्प हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The 2 capital components that protect a bank under Basel III:',
        np: 'पुँजी पर्याप्तता अनुपातका २ मुख्य अंगहरू:'
      },
      steps: [
        {
          title: { en: '1. Tier 1 Core Capital (Minimum 8.5%)', np: '१. प्राथमिक पुँजी (Tier 1 Capital)' },
          desc: { en: 'Paid-up equity capital, statutory general reserves, share premium, and retained earnings.', np: 'चुक्ता पुँजी, साधारण जगेडा कोष र सेयर प्रिमियमसहितको वास्तविक पुँजी।' }
        },
        {
          title: { en: '2. Tier 2 Supplementary Capital', np: '२. पूरक पुँजी (Tier 2 Capital)' },
          desc: { en: 'Subordinated debentures, general loan loss provisions, and exchange equalization funds.', np: 'बैंकले जारी गरेका ऋणपत्र (Debentures) र असल कर्जा नोक्सानी कोष।' }
        },
        {
          title: { en: '3. Risk-Weighted Assets (RWA)', np: '३. जोखिमभारित सम्पत्ति' },
          desc: { en: 'Loans are weighted by risk: 0% on gold or government treasury bills, 100% on unsecured personal loans.', np: 'कर्जाको जोखिम अनुसार भार दिइन्छ (जस्तै सरकारी ऋणपत्रमा ०% र व्यक्तिगत कर्जामा १००%)।' }
        }
      ]
    },
    whereUsed: {
      en: ['NRB regulatory compliance audits', 'Debenture issuance eligibility', 'Rights share issuance justifications']
    },
    nepalContext: {
      en: 'NRB mandates a minimum Tier 1 ratio of 8.5% and a Total CAR of 11.0%. Banks struggling near 11.0% frequently issue multi-billion rupee subordinated debentures on NEPSE to bolster Tier 2 capital.',
      np: 'नेपालमा प्राथमिक पुँजी कम्तीमा ८.५% र कुल पुँजी पर्याप्तता ११% हुनैपर्छ। यो पुँजी बढाउन बैंकहरूले नेप्सेमा १० वर्षे ऋणपत्र (Debentures) जारी गर्ने गर्दछन्।'
    },
    formula: {
      expression: 'CAR (%) = [(Tier 1 Capital + Tier 2 Capital) / Total Risk-Weighted Assets] × 100',
      variables: [
        { symbol: 'Tier 1', meaning: 'Common Equity Tier 1 (Paid-up capital + General Reserves)' },
        { symbol: 'Tier 2', meaning: 'Subordinated bonds and general provisions' },
        { symbol: 'RWA', meaning: 'Risk-Weighted Assets across credit, market, and operational risk' }
      ],
      exampleCalculation: 'If Eligible Capital = NPR 24 Arba and RWA = NPR 200 Arba, CAR = (24 / 200) × 100 = 12.0%.'
    },
    example: {
      scenario: 'Bank CAR drops to 10.8% due to rapid lending growth',
      calculations: [
        'Total CAR falls below NRB\'s statutory 11.0% threshold',
        'NRB imposes prompt corrective restrictions: loan disbursement halted',
        'Bank management cannot declare annual dividends at AGM',
        'Bank issues NPR 3 Arba in 10-year subordinated debentures to restore CAR to 12.3%'
      ],
      outcome: 'Compliance restored; business operations resume under regulatory green zone.'
    },
    commonMisconceptions: [
      {
        misconception: 'CAR measures total cash deposits inside the bank vault.',
        reality: 'Deposits are bank liabilities owed to customers. CAR measures the bank\'s OWN shareholder capital relative to the credit risk of its loan book.'
      }
    ],
    prosAndCons: {
      pros: ['Guarantees systemic stability and depositor safety', 'Prevents reckless over-lending', 'Enforces international Basel standards'],
      cons: ['Forces banks to slow down lending growth during tight capital cycles']
    },
    relatedTerms: [
      { slug: 'npl', name: 'NPL', type: 'glossary' },
      { slug: 'base-rate', name: 'Base Rate', type: 'glossary' },
      { slug: 'asset', name: 'Asset', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Deposit Types and Banking Security in Nepal', categorySlug: 'banking', slug: 'deposit-types-fixed-deposit-nepal' }
    ],
    relatedGuides: [
      { title: 'Commercial Bank Loan Comparison Worksheet', slug: 'commercial-bank-loan-comparison-worksheet' }
    ],
    relatedCalculators: [
      { name: 'Loan EMI Calculator', slug: 'emi', desc: 'Simulate loan schedules.' }
    ],
    faq: [
      {
        q: { en: 'What happens if a bank fails to maintain 11% CAR in Nepal?', np: 'बैंकले ११% पुँजी पर्याप्तता पुर्याउन सकेन भने के हुन्छ?' },
        a: {
          en: 'Nepal Rastra Bank freezes the bank\'s capacity to disburse new commercial loans and legally bars it from paying any cash or bonus dividends until capital is restored.',
          np: 'राष्ट्र बैंकले नयाँ ऋण दिन रोक लगाउँछ र पुँजी पर्याप्तता नपुगेसम्म कुनै पनि लाभांश वितरण गर्न पाउँदैन।'
        }
      }
    ],
    references: [
      { title: 'Capital Adequacy Framework (Basel III)', authority: 'Nepal Rastra Bank', url: 'https://nrb.org.np' }
    ]
  },

  // 3. Spread Rate
  {
    slug: 'spread-rate',
    term: 'Interest Rate Spread',
    termNp: 'ब्याजदर स्प्रेड (Interest Rate Spread)',
    categorySlug: 'banking',
    categoryName: { en: 'Banking', np: 'बैंकिङ' },
    letter: 'S',
    abbreviation: 'Spread',
    synonyms: ['Interest Rate Spread', 'NIM', 'ब्याजदर स्प्रेड', 'ब्याज अन्तर'],
    difficulty: 'Intermediate',
    readTime: '3 min read',
    oneLineDef: {
      en: 'The Interest Rate Spread is the mathematical difference between the average weighted interest rate a bank charges on loans and the average rate it pays on customer deposits.',
      np: 'ब्याजदर स्प्रेड भनेको बैंकले ऋणीहरूबाट असुल गर्ने औसत कर्जाको ब्याजदर र निक्षेपकर्तालाई दिने औसत निक्षेपको ब्याजदर बीचको खुद भिन्नता (अन्तर) हो।'
    },
    detailedExplanation: {
      en: 'Commercial banks make money primarily by acting as financial intermediaries: they collect public deposits at one interest rate and disburse credit at a higher interest rate. The gap between these two weighted averages is the Interest Rate Spread. To protect borrowers from price gouging while ensuring reasonable banking profits, Nepal Rastra Bank enforces a regulatory ceiling capping the interest spread of Class \'A\' commercial banks at a maximum of 4.00% (and 4.60% for development banks). If a bank\'s spread exceeds this cap, NRB penalizes the bank and forces rate adjustments.',
      np: 'बैंकको मुख्य आम्दानीको स्रोत नै निक्षेपमा थोरै ब्याज दिने र कर्जामा धेरै ब्याज लिने अन्तर हो। यसरी कर्जाको औसत ब्याजदरबाट निक्षेपको औसत ब्याजदर घटाउँदा आउने अन्तरलाई स्प्रेड दर भनिन्छ। बैंकहरूले मनपरी नाफा असुल्न नपाउन् भनेर नेपाल राष्ट्र बैंकले वाणिज्य बैंकहरूको अधिकतम स्प्रेड दर ४.००% मा सीमित गरिदिएको छ। यो सीमा नाघेमा राष्ट्र बैंकले कारबाही गर्छ।'
    },
    whyItMatters: {
      en: 'Interest rate spread directly dictates a bank\'s Net Interest Margin (NIM) and core profitability. A narrowing regulatory spread cap forces banks to become operationally cost-efficient and rely more on fee-based commission revenues.',
      np: 'स्प्रेड दरले बैंकको खुद ब्याज आम्दानी निर्धारण गर्छ। राष्ट्र बैंकले स्प्रेड दर घटाउँदा बैंकको ब्याज नाफामा दबाब पर्छ भने ऋणीहरूले सस्तो ब्याजदरमा कर्जा पाउने लाभ पाउँछन्।'
    },
    howItWorks: {
      summary: {
        en: 'Calculating and monitoring bank interest rate spread in Nepal:',
        np: 'स्प्रेड दर गणना गर्ने प्रक्रिया:'
      },
      steps: [
        {
          title: { en: '1. Weighted Lending Rate', np: '१. भारित औसत कर्जा ब्याजदर' },
          desc: { en: 'Average interest collected across all business, mortgage, auto, and personal loans.', np: 'सबै प्रकारका कर्जाबाट बैंकले संकलन गर्ने औषत ब्याजदर।' }
        },
        {
          title: { en: '2. Weighted Deposit Rate', np: '२. भारित औसत निक्षेप ब्याजदर' },
          desc: { en: 'Average interest paid across savings accounts, fixed deposits, and call deposits.', np: 'मुद्दती र बचत खातामा बैंकले ग्राहकलाई भुक्तानी गर्ने औषत ब्याजदर।' }
        },
        {
          title: { en: '3. Subtract Difference', np: '३. अन्तर निकाल्ने' },
          desc: { en: 'Lending Rate minus Deposit Rate equals Spread; must remain at or below 4.00%.', np: 'कर्जा दरबाट निक्षेप दर घटाउँदा आउने अंक ४.००% भन्दा बढी हुन पाउँदैन।' }
        }
      ]
    },
    whereUsed: {
      en: ['NRB monthly compliance monitoring', 'Bank Net Interest Income (NII) forecasting', 'Monetary policy transmission tracking']
    },
    nepalContext: {
      en: 'NRB gradually lowered the commercial banking spread cap from 4.40% to 4.00% to stimulate private sector borrowing and economic industrialization in Nepal.',
      np: 'राष्ट्र बैंकले निजी क्षेत्रलाई सस्तो कर्जा दिलाउन वाणिज्य बैंकहरूको स्प्रेड दर ४.४०% बाट घटाएर ४.००% मा झारेको हो।'
    },
    formula: {
      expression: 'Spread Rate (%) = Weighted Average Lending Rate (%) - Weighted Average Deposit Rate (%)',
      variables: [
        { symbol: 'Lending Rate', meaning: 'Weighted average interest rate across all loan advances' },
        { symbol: 'Deposit Rate', meaning: 'Weighted average interest rate across all customer deposits' }
      ],
      exampleCalculation: 'If average loan rate is 10.50% and average deposit rate is 6.80%, Spread = 10.50% - 6.80% = 3.70% (Compliant with 4.00% cap).'
    },
    example: {
      scenario: 'Monitoring spread cap compliance',
      calculations: [
        'Bank Lending Rate: 11.20%',
        'Bank Deposit Rate: 6.90%',
        'Calculated Spread: 11.20% - 6.90% = 4.30%',
        'NRB Violation: Exceeds 4.00% regulatory cap by 0.30%'
      ],
      outcome: 'Bank must immediately lower interest rates on loans or raise deposit rates to restore compliance.'
    },
    commonMisconceptions: [
      {
        misconception: 'Spread is calculated simply by subtracting the lowest saving rate from the highest loan rate.',
        reality: 'Spread is calculated across the total weighted averages of all active deposits and loans in the bank\'s balance sheet, not peak nominal numbers.'
      }
    ],
    prosAndCons: {
      pros: ['Protects borrowers from monopolistic loan pricing', 'Encourages commercial bank operational efficiency', 'Supports macroeconomic investment'],
      cons: ['Compresses bank net profit margins during low-interest periods']
    },
    relatedTerms: [
      { slug: 'base-rate', name: 'Base Rate', type: 'glossary' },
      { slug: 'fixed-deposit', name: 'Fixed Deposit', type: 'glossary' },
      { slug: 'emi', name: 'EMI', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Base Rate, Premium and Bank Lending in Nepal', categorySlug: 'banking', slug: 'base-rate-premium-nepal-banks' }
    ],
    relatedGuides: [
      { title: 'Commercial Bank Loan Comparison Worksheet', slug: 'commercial-bank-loan-comparison-worksheet' }
    ],
    relatedCalculators: [
      { name: 'Loan EMI Calculator', slug: 'emi', desc: 'Simulate lending payments.' }
    ],
    faq: [
      {
        q: { en: 'What is the current maximum spread rate for commercial banks in Nepal?', np: 'हाल वाणिज्य बैंकहरूका लागि अधिकतम स्प्रेड दर कति तोकिएको छ?' },
        a: {
          en: 'Nepal Rastra Bank enforces an exact statutory cap of 4.00% for Class \'A\' commercial banks.',
          np: 'नेपाल राष्ट्र बैंकको निर्देशन अनुसार वाणिज्य बैंकहरूका लागि अधिकतम ब्याजदर स्प्रेड ४.००% कायम गरिएको छ।'
        }
      }
    ],
    references: [
      { title: 'Monetary Policy & Unified Directives', authority: 'Nepal Rastra Bank', url: 'https://nrb.org.np' }
    ]
  },

  // 4. Reducing Balance Interest
  {
    slug: 'reducing-balance-interest',
    term: 'Reducing-Balance Interest Rate',
    termNp: 'घट्दो बाँकी ब्याजदर (Reducing Balance Interest)',
    categorySlug: 'loans',
    categoryName: { en: 'Loans & Credit', np: 'कर्जा र ऋण' },
    letter: 'R',
    abbreviation: 'Reducing Rate',
    synonyms: ['Diminishing Balance Rate', 'Amortized Interest', 'घट्दो ब्याजदर', 'वास्तविक ब्याजदर'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Reducing-Balance Interest Rate calculates interest solely on the remaining outstanding principal debt each month, shrinking interest charges as you repay.',
      np: 'घट्दो बाँकी ब्याजदर (Reducing Balance) भनेको ऋणीले किस्ता तिर्दै जाँदा बाँकी रहेको ऋणको सावाँमा मात्र ब्याज हिसाब गरिने न्यायोचित र वास्तविक बैंकिङ विधि हो।'
    },
    detailedExplanation: {
      en: 'In contrast to deceptive flat-rate calculations where interest is charged on the initial full loan amount forever, a reducing-balance rate computes interest strictly on the principal balance remaining at the start of each month. When you make your regular Equated Monthly Installment (EMI), a portion pays the month\'s interest and the rest repays part of the principal. Because the principal shrinks each month, future interest charges steadily decrease while the principal repayment accelerates. Nepal Rastra Bank mandates that all formal bank consumer and home loans in Nepal must be amortized on a reducing-balance basis.',
      np: 'फ्ल्याट (Flat) ब्याजदरमा सुरुको सम्पूर्ण ऋणमा वर्षौंसम्म ब्याज हिसाब गरेर ठगिन्छ भने घट्दो बाँकी ब्याजदरमा तपाईंले तिर्न बाँकी सावाँमा मात्र ब्याज लाग्छ। मासिक किस्ता (EMI) तिर्दै जाँदा सावाँ घट्दै जान्छ, जसले गर्दा अर्को महिना ब्याजको रकम आफैं घट्छ र सावाँ तिर्ने हिस्सा बढ्दै जान्छ। नेपाल राष्ट्र बैंकले सबै बैंक तथा वित्तीय संस्थालाई कर्जामा घट्दो ब्याजदर नै अनिवार्य रूपमा लागू गर्न निर्देशन दिएको छ।'
    },
    whyItMatters: {
      en: 'An advertised "10% flat interest rate" by an auto dealership or informal lender actually equals an effective reducing rate of approximately 17.5% to 18% per year! Knowing this prevents you from being misled into expensive loans.',
      np: 'कुनै डिलर वा सहकारीले "१०% ब्याज" भन्दै फ्ल्याटमा ऋण दियो भने उसको वास्तविक घट्दो ब्याजदर करिब १७.५% देखि १८% हुन आउँछ। यसले गर्दा सर्वसाधारण दोब्बर ठगिनबाट बच्छन्।'
    },
    howItWorks: {
      summary: {
        en: 'How the monthly reducing amortization cycle works in Nepali banks:',
        np: 'घट्दो किस्ता (Amortization) कसरी चल्छ:'
      },
      steps: [
        {
          title: { en: '1. Monthly Interest Computed', np: '१. बाँकी सावाँमा ब्याज गणना' },
          desc: { en: 'Current Remaining Principal × (Annual Rate / 12) = Exact monthly interest charge.', np: 'सो महिना बाँकी रहेको सावाँलाई मासिक ब्याजदरले गुणन गरी ब्याज निकालिन्छ।' }
        },
        {
          title: { en: '2. Principal Deducted from EMI', np: '२. किस्ताबाट सावाँ कट्टी' },
          desc: { en: 'Total Fixed EMI minus calculated interest = Net principal reduction.', np: 'तपाईंले तिरेको मासिक किस्ताबाट ब्याज कटाएर बाँकी रकम सावाँमा घटाइन्छ।' }
        },
        {
          title: { en: '3. Lower Starting Balance Next Month', np: '३. अर्को महिना सावाँ घट्ने' },
          desc: { en: 'The following month\'s interest is calculated on the new, smaller loan balance.', np: 'अर्को महिना कम भएको सावाँमा मात्र ब्याज लाग्ने हुँदा ब्याज रकम घट्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['Residential home loans', 'Auto & vehicle finance', 'Personal term loans', 'Bank Base Rate loan contracts']
    },
    nepalContext: {
      en: 'NRB Consumer Protection Directives strictly prohibit licensed banks from advertising flat rates without disclosing the internal rate of return (IRR). Home loans are legally tied to Base Rate + Premium on a reducing basis.',
      np: 'राष्ट्र बैंकको निर्देशिका अनुसार बैंकहरूले फ्ल्याट दरमा ऋण दिन पाउँदैनन्। आधार दर (Base Rate) मा प्रिमियम थपेर घट्दो बाँकीका आधारमा मात्र ऋण सम्झौता गर्नुपर्छ।'
    },
    example: {
      scenario: 'NPR 1,000,000 Loan over 5 Years at 10% Annual Rate',
      calculations: [
        'Flat Rate Total Interest: 1,000,000 × 10% × 5 = NPR 500,000 (EMI = NPR 25,000)',
        'Reducing Balance Total Interest: NPR 274,823 (EMI = NPR 21,247)',
        'Net Savings with Reducing Balance: NPR 225,177 in pure interest!'
      ],
      outcome: 'Borrower saves over NPR 2.25 Lakhs by choosing reducing balance.'
    },
    commonMisconceptions: [
      {
        misconception: 'If both advertise "10% interest", the total interest paid will be identical.',
        reality: 'Completely false. A 10% flat rate charges almost double the total interest of a 10% reducing-balance loan over a 5-year tenure.'
      }
    ],
    prosAndCons: {
      pros: ['Mathematically fair to the borrower', 'Interest charges drop every month', 'Prepayments directly reduce future interest obligations'],
      cons: ['Requires an amortization formula to calculate exact monthly EMI']
    },
    relatedTerms: [
      { slug: 'emi', name: 'EMI', type: 'glossary' },
      { slug: 'base-rate', name: 'Base Rate', type: 'glossary' },
      { slug: 'dsti', name: 'DSTI', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Flat Rate vs Reducing Balance EMI in Nepal', categorySlug: 'loans', slug: 'flat-rate-vs-reducing-balance-emi' }
    ],
    relatedGuides: [
      { title: 'Commercial Bank Loan Comparison Worksheet', slug: 'commercial-bank-loan-comparison-worksheet' }
    ],
    relatedCalculators: [
      { name: 'Loan EMI Calculator', slug: 'emi', desc: 'Calculate reducing-balance EMIs and full amortization schedules.' }
    ],
    faq: [
      {
        q: { en: 'Are Nepali commercial banks allowed to charge flat interest rates?', np: 'के नेपाली वाणिज्य बैंकहरूले फ्ल्याट ब्याजदर लिन पाउँछन्?' },
        a: {
          en: 'No. Nepal Rastra Bank regulations strictly mandate that all licensed commercial banks must disburse retail loans on a diminishing reducing-balance structure.',
          np: 'पाउँदैनन्। नेपाल राष्ट्र बैंकले सबै \'क\' वर्गका वाणिज्य बैंकहरूलाई घट्दो बाँकी ब्याजदरमा मात्र कर्जा प्रवाह गर्न अनिवार्य गरेको छ।'
        }
      }
    ],
    references: [
      { title: 'Consumer Financial Protection Directives', authority: 'Nepal Rastra Bank', url: 'https://nrb.org.np' }
    ]
  },

  // 5. ConnectIPS
  {
    slug: 'connectips',
    term: 'ConnectIPS (NCHL)',
    termNp: 'कनेक्टआईपीएस (ConnectIPS)',
    categorySlug: 'digital-payments',
    categoryName: { en: 'Digital Payments', np: 'डिजिटल भुक्तानी' },
    letter: 'C',
    abbreviation: 'ConnectIPS',
    synonyms: ['Connect IPS', 'NCHL IPS', 'कनेक्ट आईपीएस', 'अन्तरबैंक भुक्तानी'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'ConnectIPS is Nepal\'s national real-time interbank payment system operated by Nepal Clearing House Limited (NCHL), enabling direct account-to-account digital fund transfers.',
      np: 'कनेक्टआईपीएस (ConnectIPS) नेपाल क्लियरिङ हाउस (NCHL) द्वारा सञ्चालित राष्ट्रिय विद्युतीय भुक्तानी प्रणाली हो, जसबाट सिधै बैंक खाताबाट अर्को बैंक खातामा तुरुन्तै रकम पठाउन सकिन्छ।'
    },
    detailedExplanation: {
      en: 'Promoted by Nepal Rastra Bank and commercial banks under Nepal Clearing House Limited (NCHL), ConnectIPS serves as the foundational payment rail of digital finance in Nepal. Rather than loading funds into a proprietary third-party digital wallet, ConnectIPS links directly to your bank account. Users can execute instant interbank transfers (up to NPR 20 Lakhs per day through the web portal), pay government income taxes and traffic fines, load NEPSE broker TMS collateral, pay C-ASBA IPO fees, and settle credit card dues with nominal transaction charges (NPR 2 to NPR 8).',
      np: 'नेपाल राष्ट्र बैंक र बैंकहरूको संयुक्त लगानीमा स्थापित NCHL द्वारा सञ्चालित कनेक्टआईपीएस नेपालको डिजिटल भुक्तानीको मेरुदण्ड हो। वालेटमा पैसा लोड नगरीकनै सिधै बैंक खाताबाट बैंक खातामै पैसा ट्रान्सफर गर्न यसको प्रयोग हुन्छ। यसबाट सरकारी राजस्व, कर, ट्राफिक जरिवाना, सेयर ब्रोकरको कोल्याटरल लोड, मेरोसेयर नवीकरण र स्कुल/कलेजको शुल्क न्यूनतम शुल्क (रु. २ देखि रु. ८) मा तिर्न सकिन्छ।'
    },
    whyItMatters: {
      en: 'ConnectIPS eliminates high wallet transaction fees and enables high-value digital settlements. It is the indispensable bridge for stock market investors depositing TMS collateral or settling share purchases.',
      np: 'यसले गर्दा ठूलो रकम (दैनिक २० लाखसम्म) सुरक्षित रूपमा सिधै बैंकबाट बैंकमा ट्रान्सफर गर्न सकिन्छ। सेयर बजारमा ब्रोकरलाई पैसा तिर्न र कोल्याटरल राख्न यो सबैभन्दा भरपर्दो माध्यम हो।'
    },
    howItWorks: {
      summary: {
        en: 'How ConnectIPS links and settles payments in Nepal:',
        np: 'कनेक्टआईपीएस जोड्ने र चलाउने प्रक्रिया:'
      },
      steps: [
        {
          title: { en: '1. Register Account', np: '१. खाता दर्ता' },
          desc: { en: 'Create credentials on connectips.com or mobile app with citizenship and mobile number.', np: 'वेबसाइट वा एपमा आफ्नो विवरण भरेर युजरनेम र पासवर्ड बनाउने।' }
        },
        {
          title: { en: '2. Link Bank Account', np: '२. बैंक खाता लिङ्क' },
          desc: { en: 'Enter account number; verify via micro-debit OTP or through mobile banking self-verification.', np: 'आफ्नो बैंक खाता नम्बर हालेर मोबाइल बैंकिङबाट अनलाइन रुजु गर्ने।' }
        },
        {
          title: { en: '3. Real-Time Settlement', np: '३. रियल-टाइम फछ्र्यौट' },
          desc: { en: 'NCHL’s core banking integration instantly debits your bank and credits the recipient.', np: 'पैसा पठाउनासाथ तुरुन्तै अर्को बैंकको खातामा रकम दाखिला हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['NEPSE broker TMS collateral loading', 'Government tax and revenue payments', 'Interbank transfers up to NPR 20 Lakhs', 'Credit card and utility payments']
    },
    nepalContext: {
      en: 'Regulated under NRB Payment Systems Department directives. Transaction fees are capped by NRB: NPR 2 for up to NPR 500, NPR 4 up to NPR 5,000, and NPR 8 above NPR 5,000.',
      np: 'राष्ट्र बैंकको नियम अनुसार शुल्क एकदमै न्यून छ: रु. ५०० सम्म रु. २, रु. ५००० सम्म रु. ४ र रु. ५००० भन्दा माथि जतिसुकै रकममा पनि अधिकतम रु. ८ मात्र लाग्छ।'
    },
    example: {
      scenario: 'Loading NPR 50,000 collateral into Broker TMS via ConnectIPS',
      calculations: [
        'Investor logs into broker TMS and clicks "Load Collateral"',
        'Selects ConnectIPS payment gateway option',
        'Logs into ConnectIPS and authorizes transfer with 6-digit OTP',
        'Fee charged: NPR 8.00'
      ],
      outcome: 'NPR 50,000 trading limit available instantly on NEPSE.'
    },
    commonMisconceptions: [
      {
        misconception: 'ConnectIPS is a digital wallet like eSewa or Khalti.',
        reality: 'ConnectIPS is not a wallet; it holds zero funds. It is an interbank payment switch connecting your actual commercial bank accounts directly.'
      }
    ],
    prosAndCons: {
      pros: ['Extremely low statutory fees (max NPR 8)', 'High transaction limits (up to NPR 20 Lakhs/day on web)', 'Direct account-to-account settlement'],
      cons: ['Requires one-time bank verification during initial account setup']
    },
    relatedTerms: [
      { slug: 'tms', name: 'TMS', type: 'glossary' },
      { slug: 'qr-payment', name: 'QR Payment', type: 'glossary' },
      { slug: 'meroshare', name: 'MeroShare', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Nepal Payment Rails: NCHL & ConnectIPS', categorySlug: 'digital-payments', slug: 'nepal-payment-rails-nchl-connectips' }
    ],
    relatedGuides: [
      { title: 'Complete Digital Payments Guide', slug: 'complete-digital-payments-guide' }
    ],
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'tax', desc: 'Calculate taxes payable via ConnectIPS.' }
    ],
    faq: [
      {
        q: { en: 'What is the daily transaction limit on ConnectIPS?', np: 'कनेक्टआईपीएसको दैनिक कारोबार सीमा कति हो?' },
        a: {
          en: 'Under NRB directives, the web portal permits up to NPR 20,00,000 (20 Lakhs) per day, while the mobile application permits up to NPR 2,00,000 per day.',
          np: 'राष्ट्र बैंकको नियम अनुसार वेब पोर्टलबाट दैनिक अधिकतम रु. २० लाख र मोबाइल एपबाट दैनिक रु. २ लाखसम्म कारोबार गर्न सकिन्छ।'
        }
      }
    ],
    references: [
      { title: 'Payment Systems Directives', authority: 'Nepal Rastra Bank', url: 'https://nrb.org.np' }
    ]
  },

  // 6. WACC
  {
    slug: 'wacc',
    term: 'WACC (Weighted Average Cost of Capital)',
    termNp: 'भारित औसत लागत (WACC)',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    letter: 'W',
    abbreviation: 'WACC',
    synonyms: ['Weighted Average Cost', 'MeroShare Purchase Cost', 'वाक', 'औसत खरिद लागत'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'WACC is the standardized weighted average purchase cost of your shares calculated in MeroShare to determine net capital gains and applicable tax when selling on NEPSE.',
      np: 'भारित औसत लागत (WACC) भनेको सेयर बिक्री गर्दा खुद नाफा र पुँजीगत लाभकर हिसाब गर्न मेरोसेयर प्रणालीमा निकालिने तपाईंको औसत सेयर खरिद मूल्य हो।'
    },
    detailedExplanation: {
      en: 'Under Section 95Ka of the Income Tax Act 2058 and CDSC regulations, every investor in Nepal must declare and verify their acquisition cost in MeroShare under "My Purchase Source" prior to transferring shares via EDIS. Because investors buy shares at various prices across IPOs, secondary purchases, rights offerings, and bonus issues, MeroShare aggregates the total capital spent (including broker commissions and transaction charges) and divides it by total units acquired. The resulting WACC is subtracted from your net secondary selling price to establish your taxable capital gain.',
      np: 'आयकर ऐन २०५८ र सिडिएससीको नियम अनुसार दोस्रो बजारमा सेयर बेचेपछि मेरोसेयरको "My Purchase Source" मा गएर आफ्नो खरिद लागत प्रमाणित गर्नैपर्छ। लगानीकर्ताले आइपिओ, दोस्रो बजार, हकप्रद र बोनस विभिन्न मिति र भाउमा पाएको हुन सक्छ। ती सबै खरिदमा लागेको कुल खर्च (ब्रोकर कमिसनसहित) लाई कुल कित्ताले भाग गरेर भारित औसत लागत (WACC) निकालिन्छ। यसैका आधारमा ५% वा ७.५% पुँजीगत लाभकर हिसाब हुन्छ।'
    },
    whyItMatters: {
      en: 'Failing to calculate and confirm your WACC in MeroShare before transferring shares causes the system to default to the statutory par value (NPR 100), artificially inflating your reported capital gains and causing you to pay massive excess tax to the government.',
      np: 'यदि मेरोसेयरमा WACC नगरेमा प्रणालीले स्वतः प्रतिकित्ता रु. १०० मा किनेको मानिदिन्छ। यसले गर्दा तपाईंले नपाएको नाफामा पनि अत्यधिक पुँजीगत लाभकर तिर्नुपर्ने हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The 4 steps to calculate and lock your WACC in MeroShare:',
        np: 'मेरोसेयरमा WACC गर्ने विधि:'
      },
      steps: [
        {
          title: { en: '1. Access My Purchase Source', np: '१. My Purchase Source खोल्ने' },
          desc: { en: 'Log into meroshare.cdsc.com.np and navigate to "My Purchase Source" tab.', np: 'मेरोसेयर लगइन गरेर बायाँपट्टिको "My Purchase Source" मा क्लिक गर्ने।' }
        },
        {
          title: { en: '2. Select Company Script', np: '२. कम्पनी छनोट' },
          desc: { en: 'Search the stock ticker of the company shares you recently sold on NEPSE.', np: 'तपाईंले भर्खरै बेच्नुभएको कम्पनीको सेयर संकेत खोजेर चयन गर्ने।' }
        },
        {
          title: { en: '3. Verify Purchase History', np: '३. खरिद विवरण रुजु' },
          desc: { en: 'Tick all holding lots. The system auto-computes the weighted average price per share.', np: 'सबै खरिद लटहरूमा टिक लगाउने; प्रणालीले स्वतः औषत मूल्य निकालिदिन्छ।' }
        },
        {
          title: { en: '4. Update & Transfer EDIS', np: '४. अपडेट गरी EDIS गर्ने' },
          desc: { en: 'Click Update to lock the WACC; proceed to My Holdings to confirm holding duration.', np: 'अपडेटमा क्लिक गरेपछि My EDIS मा गएर सेयर हस्तान्तरण सम्पन्न गर्ने।' }
        }
      ]
    },
    whereUsed: {
      en: ['MeroShare EDIS share transfer', 'Capital Gains Tax withholding calculation', 'Broker trade settlement bills']
    },
    nepalContext: {
      en: 'Under prevailing CDSC rules, bonus shares and rights shares are entered at the statutory face value of NPR 100 per unit for WACC calculation purposes.',
      np: 'सिडिएससीको नियम अनुसार बोनस सेयर र हकप्रद सेयरको खरिद मूल्य WACC गणना गर्दा प्रति कित्ता रु. १०० अंकित मूल्यमा नै कायम गरिन्छ।'
    },
    formula: {
      expression: 'WACC = Total Capital Expended on Purchases (including commissions) / Total Shares Acquired',
      variables: [
        { symbol: 'Total Capital', meaning: 'Sum of all purchase prices + broker commission + SEBON fee + DP charges' },
        { symbol: 'Total Shares', meaning: 'Aggregate sum of shares acquired across all lots' }
      ],
      exampleCalculation: '10 IPO shares at NPR 100 (NPR 1,000) + 40 secondary shares at NPR 400 (NPR 16,000) = Total NPR 17,000 / 50 shares = WACC NPR 340.00.'
    },
    example: {
      scenario: 'Selling 50 shares with calculated WACC of NPR 340 at NPR 500',
      calculations: [
        'Total Selling Proceeds (Gross): 50 × NPR 500 = NPR 25,000',
        'Selling Commission & Charges: NPR 115',
        'Net Sales Consideration: NPR 24,885',
        'Total Cost (50 × NPR 340 WACC): NPR 17,000',
        'Net Capital Gain: NPR 24,885 - NPR 17,000 = NPR 7,885'
      ],
      outcome: 'Capital Gains Tax (5% or 7.5%) is deducted strictly on the net NPR 7,885 gain.'
    },
    commonMisconceptions: [
      {
        misconception: 'I can choose to sell only my highest-priced shares first to avoid tax.',
        reality: 'MeroShare enforces weighted average cost across your entire holding; you cannot selectively pick specific lots.'
      }
    ],
    prosAndCons: {
      pros: ['Automated and standardized tax computation', 'Eliminates manual tax disputes with brokers', 'Fairly factors in transaction fees'],
      cons: ['Must be calculated manually after every sell order before EDIS deadline']
    },
    relatedTerms: [
      { slug: 'capital-gain', name: 'Capital Gain', type: 'glossary' },
      { slug: 'meroshare', name: 'MeroShare', type: 'glossary' },
      { slug: 'tms', name: 'TMS', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Capital Gains Tax on Shares and Real Estate in Nepal', categorySlug: 'taxation', slug: 'capital-gains-tax-shares-real-estate' }
    ],
    relatedGuides: [
      { title: 'Complete MeroShare Guide', slug: 'complete-meroshare-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate WACC and capital gains deductions.' }
    ],
    faq: [
      {
        q: { en: 'What is the penalty if I forget to do WACC and EDIS on time?', np: 'समयमै WACC र EDIS गर्न बिर्सिएमा कति जरिवाना लाग्छ?' },
        a: {
          en: 'If you fail to transfer sold shares via EDIS before the clearing cutoff, CDSC slaps a mandatory 20% closeout auction cash penalty on the total transaction amount.',
          np: 'यदि समयमै सेयर ट्रान्सफर नगरेमा सिडिएससीको नियम अनुसार कारोबार रकमको २०% बराबरको क्लोजआउट जरिवाना तिर्नुपर्छ।'
        }
      }
    ],
    references: [
      { title: 'Income Tax Act 2058 (Section 95Ka)', authority: 'Inland Revenue Department', url: 'https://ird.gov.np' }
    ]
  }
];

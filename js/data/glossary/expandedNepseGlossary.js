// ==============================================
// risePaisa - Expanded NEPSE & Market Infrastructure Glossary
// Comprehensive encyclopedia entries for NEPSE, SEBON, CDSC, CRN, Book Closure, Market Cap, Bull/Bear
// ==============================================

export const EXPANDED_NEPSE_GLOSSARY = [
  // 1. NEPSE
  {
    slug: 'nepse',
    term: 'NEPSE (Nepal Stock Exchange)',
    termNp: 'नेपाल स्टक एक्सचेन्ज (नेप्से)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'N',
    abbreviation: 'NEPSE',
    synonyms: ['Nepal Stock Exchange', 'Share Market Nepal', 'नेपाल स्टक एक्सचेन्ज', 'नेप्से'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Nepal Stock Exchange (NEPSE) is the sole organized securities exchange in Nepal, facilitating electronic secondary trading, price discovery, and capital formation.',
      np: 'नेपाल स्टक एक्सचेन्ज (नेप्से) नेपालको एकमात्र संगठित धितोपत्र विनिमय बजार हो, जहाँ सूचीकृत कम्पनीहरूको सेयर दोस्रो बजारमा विद्युतीय माध्यमबाट किनबेच र मूल्य निर्धारण हुन्छ।'
    },
    detailedExplanation: {
      en: 'Established under the Securities Exchange Act, NEPSE commenced trading on January 13, 1994. Owned jointly by the Government of Nepal, Nepal Rastra Bank, and financial institutions, NEPSE operates an automated continuous matching electronic engine (TMS). Trading occurs Sunday to Thursday from 11:00 AM to 3:00 PM. Listed companies encompass commercial banks, development banks, hydropower producers, insurance companies, microfinance institutions, and manufacturing industries. The benchmark NEPSE Index tracks overall market capitalization movements across all listed equities.',
      np: 'धितोपत्र विनिमय ऐन अन्तर्गत स्थापित नेप्सेले वि.सं. २०५० पुस २९ देखि कारोबार सुरु गरेको हो। नेपाल सरकार, नेपाल राष्ट्र बैंक र विभिन्न वित्तीय संस्थाहरूको स्वामित्वमा रहेको नेप्सेले पूर्ण स्वचालित विद्युतीय प्रणाली (TMS) मार्फत आइतबारदेखि बिहीबार बिहान ११:०० देखि दिउँसो ३:०० बजेसम्म कारोबार सञ्चालन गर्छ। यसमा वाणिज्य बैंक, विकास बैंक, जलविद्युत, बीमा, लघुवित्त, होटल तथा उत्पादनमूलक क्षेत्रका कम्पनीहरू सूचीकृत छन्। समग्र बजार पुँजीकरणको उतारचढावलाई नेप्से परिसूचक (NEPSE Index) ले मापन गर्दछ।'
    },
    whyItMatters: {
      en: 'NEPSE acts as the financial barometer of Nepal\'s national economy. It provides companies with equity capital for industrial expansion and offers retail citizens a regulated platform to invest savings, generate dividend income, and hedge against domestic inflation.',
      np: 'नेप्से देशको अर्थतन्त्रको ऐना हो। यसले जलविद्युत र उद्योगहरूलाई आवश्यक पुँजी संकलन गर्न मद्दत गर्छ भने सर्वसाधारण नागरिकलाई आफ्नो बचत लगानी गरी लाभांश र पुँजीगत लाभमार्फत सम्पत्ति बढाउने भरपर्दो अवसर दिन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Secondary market transactions on NEPSE function through 4 synchronized steps:',
        np: 'नेप्सेमा सेयर कारोबार निम्न ४ चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Order Entry via TMS', np: '१. टिएमएसबाट अर्डर प्रविष्टि' },
          desc: { en: 'Investors log into broker Trade Management System (TMS) portals to place Buy or Sell limit orders.', np: 'लगानीकर्ताले ब्रोकरको टिएमएसमा लगइन गरी आफूले चाहेको मूल्य र कित्तामा खरिद वा बिक्री अर्डर हाल्छन्।' }
        },
        {
          title: { en: '2. Central Order Book Matching', np: '२. केन्द्रीय अर्डर बुक मिलान' },
          desc: { en: 'NEPSE’s automated engine matches orders on strict Price-Time priority without human broker intervention.', np: 'नेप्सेको कम्प्युटर प्रणालीले मूल्य र समयको प्राथमिकताका आधारमा खरिदकर्ता र बिक्रेताको अर्डर तुरुन्त मिलान गर्छ।' }
        },
        {
          title: { en: '3. Clearing & Settlement (T+2)', np: '३. राफसाफ तथा फछ्र्यौट (T+2)' },
          desc: { en: 'CDS and Clearing Limited (CDSC) executes ownership settlement within 2 working clearing days.', np: 'धितोपत्र कारोबार भएको २ कार्यदिनभित्र सिडिएससीले सेयर र रकमको अन्तिम राफसाफ सम्पन्न गर्छ।' }
        },
        {
          title: { en: '4. Electronic Depository Credit', np: '४. डिम्याट खातामा सेयर दाखिला' },
          desc: { en: 'Purchased shares are transferred into the buyer\'s 16-digit Demat BOID via EDIS.', np: 'खरिद गरिएको सेयर क्रेताको डिम्याट खातामा र बिक्री रकम बिक्रेताको बैंक खातामा दाखिला हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['Secondary market stock valuation', 'National economic indicators', 'Broker trading platforms', 'Institutional pension fund allocations']
    },
    nepalContext: {
      en: 'Under SEBON supervision, NEPSE enforces daily price circuit limits of +/- 10% on individual stocks and market-wide circuit pauses at 4%, 5%, and 6% index movement.',
      np: 'धितोपत्र बोर्डको नियमनमा नेप्सेमा दैनिक एउटा कम्पनीको मूल्यमा +/- १०% को सीमा र समग्र बजारमा ४%, ५% र ६% को सर्किट ब्रेकर व्यवस्था लागू छ।'
    },
    formula: {
      expression: 'NEPSE Index = (Current Total Market Capitalization / Base Market Capitalization) × 100',
      variables: [
        { symbol: 'Current Market Cap', meaning: 'Aggregate market value of all listed ordinary shares today' },
        { symbol: 'Base Market Cap', meaning: 'Baseline market value set at index inception (Feb 12, 1994)' }
      ],
      exampleCalculation: 'If current market cap is NPR 3,600 Arba and base adjusted cap is NPR 120 Arba, NEPSE Index = (3600 / 120) × 100 = 3,000.00 points.'
    },
    example: {
      scenario: 'Buying 50 shares of a commercial bank on NEPSE',
      calculations: [
        'Order placed on Sunday at NPR 400 per share (Total: NPR 20,000)',
        'Trade executes at 11:45 AM on continuous matching',
        'CDSC clears transaction by Tuesday afternoon (T+2)',
        '50 shares appear in MeroShare portfolio'
      ],
      outcome: 'Investor becomes a legal equity shareholder with voting and dividend rights.'
    },
    commonMisconceptions: [
      {
        misconception: 'NEPSE guarantees fixed annual profits.',
        reality: 'Stock investing carries market risk; share prices fluctuate daily based on supply, demand, corporate earnings, and interest rates.'
      },
      {
        misconception: 'Brokers decide who gets to buy or sell shares.',
        reality: 'Trading is 100% automated by NEPSE\'s computer algorithm based on price and timestamp priority.'
      }
    ],
    prosAndCons: {
      pros: ['High liquidity compared to real estate', 'Opportunity for capital appreciation and dividends', 'Strict regulatory oversight by SEBON'],
      cons: ['Short-term market volatility', 'Risk of capital loss in poor quality companies']
    },
    relatedTerms: [
      { slug: 'sebon', name: 'SEBON', type: 'glossary' },
      { slug: 'cdsc', name: 'CDSC', type: 'glossary' },
      { slug: 'tms', name: 'TMS', type: 'glossary' },
      { slug: 'circuit-breaker', name: 'Circuit Breaker', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Introduction to Share Market', categorySlug: 'nepse', slug: 'demat-meroshare-crn-setup' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Calculate broker fees, SEBON charges, and capital gains tax.' }
    ],
    faq: [
      {
        q: { en: 'What are the official trading hours of NEPSE?', np: 'नेप्सेको कारोबार समय कति हो?' },
        a: {
          en: 'Regular continuous trading is open from 11:00 AM to 3:00 PM, Sunday through Thursday. Pre-open session runs from 10:30 AM to 10:45 AM.',
          np: 'नियमित कारोबार आइतबारदेखि बिहीबार बिहान ११:०० देखि दिउँसो ३:०० बजेसम्म हुन्छ। प्रि-ओपन सेसन बिहान १०:३० देखि १०:४५ सम्म चल्छ।'
        }
      }
    ],
    references: [
      { title: 'Securities Act 2063', authority: 'Government of Nepal / SEBON', url: 'https://sebon.gov.np' },
      { title: 'Trading By-Laws', authority: 'Nepal Stock Exchange Limited', url: 'https://nepalstock.com.np' }
    ]
  },

  // 2. SEBON
  {
    slug: 'sebon',
    term: 'SEBON (Securities Board of Nepal)',
    termNp: 'नेपाल धितोपत्र बोर्ड (SEBON)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'S',
    abbreviation: 'SEBON',
    synonyms: ['Securities Board of Nepal', 'Stock Market Regulator', 'धितोपत्र बोर्ड'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Securities Board of Nepal (SEBON) is the apex regulatory body governing the capital market, protecting investor interests and supervising stock market participants.',
      np: 'नेपाल धितोपत्र बोर्ड (SEBON) नेपालको पुँजी बजारको सर्वोच्च नियामक निकाय हो, जसले लगानीकर्ताको हित संरक्षण, सेयर निष्कासन स्वीकृति र बजारको नियमन गर्छ।'
    },
    detailedExplanation: {
      en: 'Established on June 7, 1993, under the Securities Exchange Act 1983 and restructured under the Securities Act 2063, SEBON acts as the supreme statutory watchdog of Nepal\'s securities market. Headquartered in Lalitpur, SEBON regulates public offerings (IPOs, FPOs, Rights issues, Corporate Debentures), licenses stockbrokers, depository participants, credit rating agencies, and merchant bankers, and enforces penalties against market manipulation, insider trading, and fraud.',
      np: 'धितोपत्र सम्बन्धी ऐन २०६३ अन्तर्गत स्थापित नेपाल धितोपत्र बोर्डले नेपालको समग्र सेयर बजारको नियमन, सुपरीवेक्षण र विकास गर्दछ। कम्पनीहरूलाई आइपिओ, हकप्रद र ऋणपत्र निष्कासनको स्वीकृति दिने, ब्रोकर, मर्चेन्ट बैंकर र क्रेडिट रेटिङ एजेन्सीलाई इजाजतपत्र दिने तथा भित्री कारोबार (Insider Trading) र बजार चलखेल रोक्ने जिम्मेवारी बोर्डको हो।'
    },
    whyItMatters: {
      en: 'Without a strong, impartial regulatory authority, retail investors would face fraud, unverified financial reporting, and market manipulation. SEBON enforces investor protection laws such as the mandatory 10-kitta IPO allotment policy.',
      np: 'धितोपत्र बोर्डको प्रभावकारी नियमन बिना बजारमा ठगी र चलखेल बढ्छ। साना लगानीकर्तालाई सेयर दिलाउने १० कित्ता नीति र पारदर्शी वित्तीय विवरणको बाध्यकारी नियम बोर्डले नै लागू गरेको हो।'
    },
    howItWorks: {
      summary: {
        en: 'SEBON supervises the financial market through 4 core operational pillars:',
        np: 'धितोपत्र बोर्डले निम्न ४ मुख्य स्तम्भमार्फत बजारको नियमन गर्छ:'
      },
      steps: [
        {
          title: { en: '1. Prospectus & IPO Approval', np: '१. विवरणपत्र तथा आइपिओ स्वीकृति' },
          desc: { en: 'Scrutinizes audited financial metrics before approving public issues.', np: 'कम्पनीको वित्तीय स्वास्थ्य परीक्षण गरी विवरणपत्र स्वीकृत गर्छ।' }
        },
        {
          title: { en: '2. Market Intermediary Licensing', np: '२. बजार मध्यस्थकर्ताको इजाजत' },
          desc: { en: 'Licenses brokers, merchant bankers, mutual fund asset managers, and DPs.', np: 'ब्रोकर, मर्चेन्ट बैंकर, म्युचुअल फण्ड र डिपोजिटरीहरूलाई अनुमति प्रदान गर्छ।' }
        },
        {
          title: { en: '3. Surveillance & Enforcement', np: '३. बजार सुपरीवेक्षण र कारबाही' },
          desc: { en: 'Monitors real-time trades on NEPSE to detect insider trading and market rigging.', np: 'शंकास्पद कारोबार, मूल्य चलखेल र भित्री सूचनाको दुरुपयोगमाथि कडा निगरानी गर्छ।' }
        },
        {
          title: { en: '4. Policy Formulation', np: '४. नीति निर्माण तथा निर्देशिका' },
          desc: { en: 'Drafts investor protection rules, commission caps, and C-ASBA directives.', np: 'ब्रोकर कमिसन दर, १० कित्ता बाँडफाँड नियम र लगानीकर्ता संरक्षण निर्देशिका जारी गर्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['IPO prospectus filings', 'Brokerage fee schedules', 'Mutual fund regulations', 'Corporate governance enforcement']
    },
    nepalContext: {
      en: 'SEBON reports directly to the Ministry of Finance. It enacted the historic 10-Kitta Allotment Policy in 2074 B.S. and introduced mandatory C-ASBA digital application rails.',
      np: 'बोर्ड अर्थ मन्त्रालय मातहत रहन्छ। वि.सं. २०७४ मा लागू गरिएको १० कित्ता नीति र सि-आस्वा प्रणाली धितोपत्र बोर्डका ऐतिहासिक सुधार हुन्।'
    },
    example: {
      scenario: 'A hydropower company wishes to raise NPR 1 Arba via an IPO',
      calculations: [
        'Company appoints licensed merchant banker and audits 3-year accounts',
        'Submits comprehensive draft prospectus to SEBON',
        'SEBON issues regulatory observations and compliance requirements',
        'Upon approval, public issue is announced under SEBON allotment quotas'
      ],
      outcome: 'Public funds are protected through standardized disclosure and legal accountability.'
    },
    commonMisconceptions: [
      {
        misconception: 'SEBON guarantees that any company it approves will be profitable.',
        reality: 'SEBON verifies factual compliance and disclosures in the prospectus; it does not guarantee commercial success or share price performance.'
      }
    ],
    prosAndCons: {
      pros: ['Statutory investor protection', 'Democratized public share allotments', 'Strict disclosure standards'],
      cons: ['Regulatory review delays during leadership vacancies']
    },
    relatedTerms: [
      { slug: 'nepse', name: 'NEPSE', type: 'glossary' },
      { slug: 'cdsc', name: 'CDSC', type: 'glossary' },
      { slug: 'ipo', name: 'IPO', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Key Participants in the Share Market', categorySlug: 'nepse', slug: 'broker-account-tms-navigation' }
    ],
    relatedGuides: [
      { title: 'Complete IPO Guide', slug: 'complete-ipo-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Calculate SEBON regulatory fees on trading.' }
    ],
    faq: [
      {
        q: { en: 'Where can investors submit official complaints to SEBON?', np: 'लगानीकर्ताले धितोपत्र बोर्डमा कसरी उजुरी दिन सक्छन्?' },
        a: {
          en: 'Complaints regarding broker delays, non-transfer of shares, or corporate fraud can be lodged through the official portal (sebon.gov.np) or physical grievance desk in Khumaltar, Lalitpur.',
          np: 'ब्रोकरले रकम नदिएमा, सेयर ट्रान्सफरमा ढिलाइ गरेमा वा कम्पनीले बदमासी गरेमा बोर्डको वेबसाइट (sebon.gov.np) वा खुमलटारस्थित कार्यालयमा सिधै उजुरी दिन सकिन्छ।'
        }
      }
    ],
    references: [
      { title: 'Securities Act 2063', authority: 'Government of Nepal', url: 'https://sebon.gov.np' }
    ]
  },

  // 3. CDSC
  {
    slug: 'cdsc',
    term: 'CDSC (CDS and Clearing Limited)',
    termNp: 'सिडिएस एण्ड क्लियरिङ लिमिटेड (CDSC)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'C',
    abbreviation: 'CDSC',
    synonyms: ['CDS and Clearing Limited', 'Central Depository Nepal', 'सिडिएससी', 'केन्द्रीय निक्षेप'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'CDS and Clearing Limited (CDSC) is the central depository and clearing house of Nepal, maintaining digital records of all shares and operating MeroShare.',
      np: 'सिडिएस एण्ड क्लियरिङ लिमिटेड (CDSC) नेपालको केन्द्रीय निक्षेप तथा राफसाफ गृह हो, जसले सम्पूर्ण सेयरको डिजिटल अभिलेख राख्ने र मेरोसेयर पोर्टल सञ्चालन गर्ने कार्य गर्छ।'
    },
    detailedExplanation: {
      en: 'Established on August 30, 2010, as a wholly-owned subsidiary of NEPSE, CDSC eliminated physical paper share certificates in Nepal. It operates under the Central Depository Services Regulations 2067. CDSC manages the central electronic depository ledger, issues 16-digit Beneficial Owner Identification (BOID) accounts through licensed Depository Participants (DPs), settles secondary market trades within T+2 days, and operates the national MeroShare and C-ASBA platforms.',
      np: 'नेप्सेको शतप्रतिशत स्वामित्वमा वि.सं. २०६७ मा स्थापित सिडिएससीले नेपालको सेयर बजारलाई कागजी युगबाट पूर्ण डिजिटल युगमा रूपान्तरण गरेको हो। यसले १६ अंकको डिम्याट खाता (BOID) को केन्द्रीय व्यवस्थापन, प्राथमिक सेयर भर्ने मेरोसेयर (MeroShare) पोर्टल, सि-आस्वा (C-ASBA) प्रणाली र दोस्रो बजारको विद्युतीय राफसाफ (EDIS) सञ्चालन गर्दछ।'
    },
    whyItMatters: {
      en: 'CDSC guarantees the security of your equity ownership. By centralizing digital depository books, it ensures shares cannot be forged, duplicated, stolen, or lost in physical transit.',
      np: 'सिडिएससीले तपाईंको सेयर स्वामित्वको सुरक्षा गर्छ। डिजिटल डिम्याट खाताका कारण सेयर हराउने, च्यातिने, नक्कली प्रमाणपत्र बन्ने वा चोरी हुने जोखिम पूर्ण रूपमा समाप्त भएको छ।'
    },
    howItWorks: {
      summary: {
        en: 'CDSC coordinates transactions through 4 automated infrastructure functions:',
        np: 'सिडिएससीले निम्न ४ मुख्य प्रणालीमार्फत काम गर्छ:'
      },
      steps: [
        {
          title: { en: '1. Demat Ledger Management', np: '१. डिम्याट खाताको केन्द्रीय रेकर्ड' },
          desc: { en: 'Maintains records for over 6.5 million BOID accounts across all Depository Participants.', np: 'नेपालभरका ६५ लाखभन्दा बढी डिम्याट खाताको केन्द्रीय डिजिटल हिसाब राख्छ।' }
        },
        {
          title: { en: '2. MeroShare & C-ASBA', np: '२. मेरोसेयर र सि-आस्वा' },
          desc: { en: 'Processes millions of online IPO applications and verifies bank fund blocks.', np: 'अनलाइन आइपिओ आवेदन लिने र बैंक खाताको रकम रोक्का तथा फुकुवा व्यवस्थापन गर्छ।' }
        },
        {
          title: { en: '3. EDIS Electronic Settlement', np: '३. इडिस (EDIS) मार्फत सेयर हस्तान्तरण' },
          desc: { en: 'Enables sellers to digitally transfer shares to clearing pool accounts on T+1.', np: 'बिक्री भएको सेयर बिक्रेताको खाताबाट क्रेताको खातामा विद्युतीय स्लिपमार्फत सार्छ।' }
        },
        {
          title: { en: '4. Corporate Benefit Distribution', np: '४. लाभांश तथा बोनस सेयर दाखिला' },
          desc: { en: 'Coordinates automated credit of cash dividends and bonus shares directly to accounts.', np: 'कम्पनीहरूले बाँड्ने बोनस सेयर डिम्याटमा र नगद लाभांश बैंक खातामा सिधै पठाउँछ।' }
        }
      ]
    },
    whereUsed: {
      en: ['MeroShare portal (meroshare.cdsc.com.np)', 'IPO allotment result checking', 'EDIS transfer slips', 'Annual Demat maintenance renewal']
    },
    nepalContext: {
      en: 'CDSC charges a statutory flat fee of NPR 25 per executed script trade and an annual DEMAT maintenance fee of NPR 100 plus NPR 50 for MeroShare renewal.',
      np: 'सिडिएससीले सेयर कारोबार हुँदा प्रति कम्पनी रु. २५ शुल्क लिन्छ भने डिम्याट नवीकरणका लागि वार्षिक रु. १०० र मेरोसेयरका लागि रु. ५० दस्तुर तोकिएको छ।'
    },
    commonMisconceptions: [
      {
        misconception: 'My shares are stored at my broker\'s physical office.',
        reality: 'Brokers only facilitate trading orders; all electronic share units are held safely in CDSC\'s centralized sovereign depository vaults.'
      }
    ],
    prosAndCons: {
      pros: ['Zero risk of physical certificate damage', 'Instant online IPO application via MeroShare', 'Rapid automated T+2 electronic settlement'],
      cons: ['Severe server slowdowns during massive mega-IPO closing deadlines']
    },
    relatedTerms: [
      { slug: 'demat', name: 'Demat', type: 'glossary' },
      { slug: 'meroshare', name: 'MeroShare', type: 'glossary' },
      { slug: 'crn', name: 'CRN', type: 'glossary' },
      { slug: 'nepse', name: 'NEPSE', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Understanding DEMAT, MeroShare and Trading Accounts', categorySlug: 'nepse', slug: 'demat-meroshare-crn-setup' }
    ],
    relatedGuides: [
      { title: 'Complete MeroShare Guide', slug: 'complete-meroshare-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate trading costs and CDSC DP fees.' }
    ],
    faq: [
      {
        q: { en: 'What is the official portal to check IPO allotment results in Nepal?', np: 'आइपिओको नतिजा हेर्ने आधिकारिक वेबसाइट कुन हो?' },
        a: {
          en: 'You can check results on CDSC\'s dedicated allotment portal: iporesult.cdsc.com.np by entering your 16-digit BOID.',
          np: 'सिडिएससीको आधिकारिक पोर्टल iporesult.cdsc.com.np मा आफ्नो १६ अंकको डिम्याट नम्बर हालेर नतिजा हेर्न सकिन्छ।'
        }
      }
    ],
    references: [
      { title: 'Central Depository Services Regulations 2067', authority: 'CDSC / SEBON', url: 'https://cdsc.com.np' }
    ]
  },

  // 4. CRN
  {
    slug: 'crn',
    term: 'CRN (C-ASBA Registration Number)',
    termNp: 'सि-आस्वा रजिस्ट्रेसन नम्बर (CRN)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'C',
    abbreviation: 'CRN',
    synonyms: ['C-ASBA Registration Number', 'CRN Number', 'सिआरएन', 'सि-आस्वा नम्बर'],
    difficulty: 'Beginner',
    readTime: '3 min read',
    oneLineDef: {
      en: 'A CRN (C-ASBA Registration Number) is a confidential security code issued by your bank verifying your account details and authorizing balance holds for IPO applications.',
      np: 'सिआरएन (CRN) भनेको प्राथमिक सेयर (IPO) भर्दा बैंक खाताको रकम रोक्का गर्ने अधिकार दिन बैंकले आफ्ना ग्राहकलाई उपलब्ध गराउने गोप्य प्रमाणीकरण कोड हो।'
    },
    detailedExplanation: {
      en: 'When SEBON introduced Centralized Application Supported by Blocked Amount (C-ASBA) under CDSC oversight, it created the CRN system to bridge bank accounts with MeroShare. Issued exclusively by licensed financial institutions where an investor maintains a verified Know Your Customer (KYC) account, the CRN acts as an authorization token. When you submit an IPO application on MeroShare, typing your CRN tells the bank to verify your identity and block the required application sum (typically NPR 1,000 for 10 shares) without transferring the cash out until official allotment.',
      np: 'सि-आस्वा (C-ASBA) प्रणाली लागू भएपछि बैंक खाता र मेरोसेयर खातालाई सुरक्षित रूपमा जोड्न सिआरएन नम्बरको व्यवस्था गरिएको हो। तपाईंको खाता रहेको बैंकले केवाईसी प्रमाणित गरी यो गोप्य कोड दिन्छ। मेरोसेयरबाट आइपिओ भर्दा सिआरएन नम्बर हालेपछि बैंकले तपाईंको खातामा रहेको रकम (जस्तै १० कित्ताका लागि रु. १,०००) रोक्का (Hold) गरिदिन्छ। सेयर नपरेमा सो रकम खातामै फुकुवा हुन्छ।'
    },
    whyItMatters: {
      en: 'The CRN prevents unauthorized individuals from using your Demat details to apply for IPOs with third-party bank accounts. It guarantees that funds are blocked strictly within your personal verified bank account.',
      np: 'सिआरएन नम्बरले तपाईंको डिम्याट विवरण अरूले दुरुपयोग गरी जथाभावी सेयर भर्नबाट रोक्छ। यसले गर्दा तपाईंको आफ्नै बैंक खाताबाट मात्र सुरक्षित रूपमा आइपिओ आवेदन जान्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Obtaining and using your CRN in Nepal involves 3 quick steps:',
        np: 'सिआरएन नम्बर लिने र प्रयोग गर्ने प्रक्रिया:'
      },
      steps: [
        {
          title: { en: '1. Request from Bank', np: '१. बैंकबाट सिआरएन प्राप्त गर्ने' },
          desc: { en: 'Obtain your CRN instantly through your bank\'s mobile app, internet banking, or bank counter.', np: 'आफ्नो मोबाइल बैंकिङ एप वा बैंकको शाखामा गएर तुरुन्तै सिआरएन नम्बर लिन सकिन्छ।' }
        },
        {
          title: { en: '2. Input in MeroShare "My ASBA"', np: '२. मेरोसेयरमा प्रविष्टि' },
          desc: { en: 'Select your registered bank account in MeroShare and enter your confidential CRN code.', np: 'मेरोसेयरको "My ASBA" खण्डमा बैंक छनोट गरी आफ्नो सिआरएन नम्बर टाइप गरिन्छ।' }
        },
        {
          title: { en: '3. Automated Fund Hold', np: '३. बैंक रकम रोक्का' },
          desc: { en: 'The bank\'s API verifies the CRN and locks the application amount until CDSC allotment.', np: 'बैंक प्रणालीले कोड रुजु गरी तोकिएको रकम रोक्का गर्छ र आवेदन स्वीकृत हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['MeroShare IPO/FPO applications', 'Rights issue subscription forms', 'Mutual fund primary issues']
    },
    nepalContext: {
      en: 'Most commercial banks issue CRNs free of charge via mobile banking apps. Under SEBON directives, banks charge between NPR 0 and NPR 5 per IPO application for C-ASBA verification.',
      np: 'प्रायः सबै वाणिज्य बैंकले मोबाइल बैंकिङ एपमार्फत निःशुल्क सिआरएन उपलब्ध गराउँछन्। आइपिओ भर्दा बैंकहरूले रु. ० देखि रु. ५ सम्म सेवा शुल्क लिन पाउँछन्।'
    },
    commonMisconceptions: [
      {
        misconception: 'CRN is the same as my MeroShare transaction PIN.',
        reality: 'Your 4-digit MeroShare PIN is your portal signature; your CRN is a separate alphanumeric code issued directly by your bank.'
      }
    ],
    prosAndCons: {
      pros: ['Enables 100% paperless IPO applications', 'Funds remain in your interest-bearing account until allotment', 'Zero risk of cheque bounces'],
      cons: ['Mismatched bank KYC details cause application rejections']
    },
    relatedTerms: [
      { slug: 'asba', name: 'ASBA', type: 'glossary' },
      { slug: 'meroshare', name: 'MeroShare', type: 'glossary' },
      { slug: 'demat', name: 'Demat', type: 'glossary' },
      { slug: 'ipo', name: 'IPO', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Understanding DEMAT, MeroShare and Trading Accounts', categorySlug: 'nepse', slug: 'demat-meroshare-crn-setup' }
    ],
    relatedGuides: [
      { title: 'Complete MeroShare Guide', slug: 'complete-meroshare-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate IPO allotment gains and secondary sales.' }
    ],
    faq: [
      {
        q: { en: 'Can I find my CRN number inside my mobile banking app?', np: 'के मोबाइल बैंकिङ एपबाटै सिआरएन नम्बर हेर्न सकिन्छ?' },
        a: {
          en: 'Yes. Most Nepali commercial banks (such as Global IME, Nabil, NIC Asia, Sanima) display your CRN under the "ASBA / Demat" section of their mobile banking apps.',
          np: 'सकिन्छ। अधिकांश बैंकको मोबाइल एपमा "ASBA" वा "Demat" खण्डभित्र आफ्नो सिआरएन नम्बर सजिलै हेर्न र कपी गर्न सकिन्छ।'
        }
      }
    ],
    references: [
      { title: 'C-ASBA Implementation Guidelines', authority: 'Securities Board of Nepal (SEBON)', url: 'https://sebon.gov.np' }
    ]
  },

  // 5. Book Closure
  {
    slug: 'book-closure',
    term: 'Book Closure Date',
    termNp: 'दर्ता किताब बन्द हुने मिति (Book Closure)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'B',
    abbreviation: 'BC',
    synonyms: ['Book Closure', 'Record Date', 'बुक क्लोजर', 'दर्ता बन्द मिति'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Book Closure Date is the official cutoff day when a listed company freezes its shareholder registry to determine eligibility for dividends, bonus shares, and AGM attendance.',
      np: 'दर्ता किताब बन्द (Book Closure) भनेको कम्पनीले साधारणसभामा भाग लिने, नगद लाभांश वा बोनस सेयर पाउने आधिकारिक सेयरधनीहरूको नामावली टुंगो लगाउन आफ्नो सेयर दर्ता किताब बन्द गर्ने मिति हो।'
    },
    detailedExplanation: {
      en: 'Under the Companies Act 2063 and NEPSE listing bylaws, listed companies must announce a Book Closure Date prior to their Annual General Meeting (AGM) or corporate dividend distribution. Due to NEPSE\'s T+2 rolling settlement cycle, investors must buy shares at least one trading day prior to the Book Closure Date to be registered on the company\'s official depository books. On the morning of book closure, NEPSE automatically adjusts the stock\'s market price downward to reflect the distribution of bonus shares or rights offerings.',
      np: 'कम्पनी ऐन २०६३ र नेप्सेको नियमावली अनुसार साधारणसभा वा लाभांश वितरण गर्नुअघि कम्पनीले बुक क्लोजर मिति तोक्नुपर्छ। नेप्सेमा T+2 राफसाफ चक्र लागू भएकाले लाभांश पाउन लगानीकर्ताले बुक क्लोज हुने दिनभन्दा कम्तीमा एक कारोबार दिन अगाडि नै सेयर किनिसक्नुपर्छ। बुक क्लोज भएको दिन बिहान नेप्सेले बोनस सेयरको अनुपातमा बजार मूल्य समायोजन (Price Adjustment) गर्दछ।'
    },
    whyItMatters: {
      en: 'Buying a stock on or after the Book Closure Date means you purchase at the adjusted lower price, but you forfeit the declared cash dividend or bonus shares. Understanding the date prevents costly timing mistakes.',
      np: 'बुक क्लोजको दिन वा त्यसपछि सेयर किन्नेले घोषित लाभांश पाउँदैनन्। त्यसैले लाभांश लिनका लागि बुक क्लोज मितिभन्दा अगावै सेयर खरिद गरिसक्नु अनिवार्य हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The corporate timeline around a Book Closure Date follows 4 distinct stages:',
        np: 'बुक क्लोजरसम्बन्धी मुख्य ४ वटा चरणहरू:'
      },
      steps: [
        {
          title: { en: '1. Dividend Declaration', np: '१. लाभांश घोषणा' },
          desc: { en: 'Board of Directors proposes bonus shares or cash dividend subject to regulator and AGM approval.', np: 'सञ्चालक समितिले नियामक र साधारणसभाबाट पारित गर्ने गरी लाभांश प्रस्ताव गर्छ।' }
        },
        {
          title: { en: '2. Notice of Book Closure', np: '२. बुक क्लोजर मिति सार्वजनिक' },
          desc: { en: 'Company publishes a mandatory 7-to-15 day advance public notice specifying the cutoff date.', np: 'कम्पनीले नेप्से र राष्ट्रिय पत्रिकामा कम्तीमा ७ देखि १५ दिन अगावै बुक क्लोजको सूचना निकाल्छ।' }
        },
        {
          title: { en: '3. Last Trading Day for Dividend', np: '३. लाभांश पाउने अन्तिम कारोबार दिन' },
          desc: { en: 'The trading day immediately prior to Book Closure is the final opportunity to buy and qualify.', np: 'बुक क्लोज हुनुभन्दा अघिल्लो दिन नै सेयर किन्ने व्यक्ति लाभांश पाउन योग्य हुन्छ।' }
        },
        {
          title: { en: '4. NEPSE Price Adjustment', np: '४. नेप्सेमा मूल्य समायोजन' },
          desc: { en: 'NEPSE calculates the adjusted opening price on book closure morning using regulatory formulas.', np: 'बुक क्लोजको दिन बिहान नेप्सेले बोनस अनुपात अनुसार घटेको नयाँ मूल्य निर्धारण गर्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['Annual General Meeting (AGM) notices', 'Dividend eligibility records', 'Bonus and Rights share distributions', 'NEPSE price adjustment tickers']
    },
    nepalContext: {
      en: 'NEPSE adjusts stock prices for all bonus shares and rights shares. Cash dividends are adjusted only if the cash payout exceeds 10% of the market price under prevailing bylaws.',
      np: 'नेप्सेले सबै प्रकारका बोनस र हकप्रद सेयरमा मूल्य समायोजन गर्छ। नगद लाभांशको हकमा भने बजार मूल्यको १०% भन्दा बढी भएमा मात्र मूल्य समायोजन गरिन्छ।'
    },
    formula: {
      expression: 'Adjusted Opening Price = Closing Market Price / (1 + Bonus % / 100)',
      variables: [
        { symbol: 'Closing Price', meaning: 'Stock closing price on the trading day immediately prior to book closure' },
        { symbol: 'Bonus %', meaning: 'Declared percentage of bonus shares' }
      ],
      exampleCalculation: 'If NABIL closes at NPR 600 before a 20% bonus share, Adjusted Price = 600 / (1 + 0.20) = NPR 500.00.'
    },
    example: {
      scenario: 'Investor holds 100 shares of a company declaring 25% bonus shares',
      calculations: [
        'Stock closes at NPR 500 on the day before book closure (Value: NPR 50,000)',
        'On Book Closure day, NEPSE adjusts opening price: NPR 500 / 1.25 = NPR 400',
        'Investor receives 25 additional bonus shares in Demat after AGM',
        'New holding: 125 shares × NPR 400 = NPR 50,000'
      ],
      outcome: 'Total monetary value remains identical on adjustment morning; share count expands.'
    },
    commonMisconceptions: [
      {
        misconception: 'If I buy shares on the Book Closure Date, I will receive the dividend.',
        reality: 'False. You must buy at least one trading day before Book Closure. Buying on the date itself means you buy at adjusted price without dividend rights.'
      }
    ],
    prosAndCons: {
      pros: ['Transparent shareholder qualification', 'Automated price adjustment prevents arbitrage', 'Direct electronic credit of benefits'],
      cons: ['Short-term downward price volatility on adjustment day']
    },
    relatedTerms: [
      { slug: 'bonus-share', name: 'Bonus Share', type: 'glossary' },
      { slug: 'dividend', name: 'Dividend', type: 'glossary' },
      { slug: 'rights-share', name: 'Rights Share', type: 'glossary' },
      { slug: 'nepse', name: 'NEPSE', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Lifecycle of an IPO and Shares', categorySlug: 'nepse', slug: 'dividend-yield-vs-capital-gains-nepse' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate book closure price adjustments.' }
    ],
    faq: [
      {
        q: { en: 'How long after Book Closure are bonus shares credited to my Demat account?', np: 'बुक क्लोज भएको कति समयपछि बोनस सेयर डिम्याटमा आउँछ?' },
        a: {
          en: 'Bonus shares are credited typically 1 to 2 months after the Annual General Meeting (AGM) has formally approved the distribution and NEPSE lists the new units.',
          np: 'साधारणसभाले लाभांश पारित गरी नेप्से र सिडिएससीमा सूचीकृत हुन सामान्यतया १ देखि २ महिना लाग्छ। त्यसपछि सेयर सिधै डिम्याटमा जम्मा हुन्छ।'
        }
      }
    ],
    references: [
      { title: 'Companies Act 2063 (Section 179)', authority: 'Office of Company Registrar', url: 'https://ocr.gov.np' }
    ]
  },

  // 6. Market Capitalization
  {
    slug: 'market-capitalization',
    term: 'Market Capitalization (Market Cap)',
    termNp: 'बजार पुँजीकरण (Market Cap)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'M',
    abbreviation: 'Market Cap',
    synonyms: ['Market Cap', 'Market Value', 'बजार पुँजीकरण', 'कुल बजार मूल्य'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'Market Capitalization is the total aggregate market value of a company\'s listed shares (or the entire NEPSE exchange), calculated by multiplying total shares by current price.',
      np: 'बजार पुँजीकरण (Market Cap) भनेको कुनै कम्पनीको कुल सूचीकृत सेयर संख्यालाई हालको बजार मूल्यले गुणन गर्दा आउने कुल बजार मूल्य हो।'
    },
    detailedExplanation: {
      en: 'Market Capitalization represents the actual price tag the public market assigns to an enterprise. It differentiates large, stable corporate giants from small, highly volatile companies. On NEPSE, companies are categorized into Large-Cap (major commercial banks and telecom operators with market caps above NPR 50 Arba), Mid-Cap (medium hydropower and insurance firms), and Small-Cap (smaller microfinance and newly listed hydro companies). Total NEPSE Market Capitalization measures the monetary worth of all companies listed on the exchange.',
      np: 'बजार पुँजीकरणले बजारमा कम्पनीको वास्तविक कुल मूल्य कति छ भन्ने देखाउँछ। नेप्सेमा सूचीकृत कम्पनीहरूलाई यसैका आधारमा ठूला (Large-Cap), मध्यम (Mid-Cap) र साना (Small-Cap) कम्पनीमा वर्गीकरण गरिन्छ। ५० अर्बभन्दा बढी पुँजीकरण भएका ठूला बैंक र टेलिकम स्थिर मानिन्छन् भने साना लघुवित्त र जलविद्युत कम्पनीहरूको सेयर मूल्य छिटो उतारचढाव हुन्छ।'
    },
    whyItMatters: {
      en: 'A stock with a share price of NPR 1,500 can have a much smaller market cap than a stock trading at NPR 200 if the latter has 50 times more shares outstanding. Market cap reveals true company size, liquidity, and volatility.',
      np: 'रु. १५०० पर्ने कम्पनीभन्दा रु. २०० पर्ने बैंक धेरै ठूलो हुन सक्छ, किनकि बैंकको सेयर कित्ता धेरै हुन्छ। सेयरको भाउ मात्र हेरेर कम्पनी ठूलो वा सानो भन्न सकिँदैन; वास्तविक आकार थाहा पाउन बजार पुँजीकरण हेर्नुपर्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Market Cap categorization on NEPSE informs portfolio asset allocation:',
        np: 'नेप्सेमा बजार पुँजीकरण अनुसारको लगानी रणनीति:'
      },
      steps: [
        {
          title: { en: '1. Large-Cap (Blue Chips)', np: '१. ठूला कम्पनी (Large-Cap)' },
          desc: { en: 'High liquidity, defensive balance sheets, stable dividend yields, and low volatility.', np: 'उच्च तरलता, बलियो वित्तीय आधार र नियमित लाभांश दिने सुरक्षित कम्पनीहरू।' }
        },
        {
          title: { en: '2. Mid-Cap (Growth Focus)', np: '२. मध्यम कम्पनी (Mid-Cap)' },
          desc: { en: 'Balanced blend of capital appreciation potential and moderate operational volatility.', np: 'पुँजी वृद्धि र लाभांश दुवैको सम्भावना भएका मध्यम स्तरका कम्पनीहरू।' }
        },
        {
          title: { en: '3. Small-Cap (High Beta)', np: '३. साना कम्पनी (Small-Cap)' },
          desc: { en: 'Low liquidity, prone to speculative price swings and rapid volatility.', np: 'थोरै कित्ता भएकाले कर्नरिङ र तीव्र मूल्य उतारचढावको जोखिम बढी हुने कम्पनीहरू।' }
        }
      ]
    },
    whereUsed: {
      en: ['NEPSE index weighting', 'Institutional mutual fund screening', 'Macroeconomic Market-Cap-to-GDP ratio']
    },
    nepalContext: {
      en: 'In Nepal, total NEPSE market capitalization frequently hovers between 70% and 100%+ of the country\'s Gross Domestic Product (GDP), making the stock market central to national wealth.',
      np: 'नेपालमा नेप्सेको कुल बजार पुँजीकरण देशको कुल गार्हस्थ्य उत्पादन (GDP) को करिब ७०% देखि १००% सम्म पुग्ने गरेको छ, जसले राष्ट्रिय अर्थतन्त्रमा यसको ठूलो हिस्सा देखाउँछ।'
    },
    formula: {
      expression: 'Market Capitalization = Total Outstanding Listed Shares × Current Market Price (CMP)',
      variables: [
        { symbol: 'Total Shares', meaning: 'All ordinary shares listed on NEPSE' },
        { symbol: 'CMP', meaning: 'Last traded price on NEPSE' }
      ],
      exampleCalculation: 'If a bank has 20 Crore listed shares trading at NPR 250, its Market Cap = 20,00,00,000 × 250 = NPR 50 Arba (50 Billion).'
    },
    example: {
      scenario: 'Comparing Company A (NPR 1,200/share) vs Company B (NPR 300/share)',
      calculations: [
        'Company A: 1 Crore shares × NPR 1,200 = NPR 12 Arba Market Cap',
        'Company B: 25 Crore shares × NPR 300 = NPR 75 Arba Market Cap',
        'Outcome: Company B is over 6 times larger than Company A despite lower per-share price.'
      ],
      outcome: 'Investor realizes per-share price alone does not reflect corporate valuation size.'
    },
    commonMisconceptions: [
      {
        misconception: 'A stock trading at NPR 150 is cheaper than a stock trading at NPR 800.',
        reality: 'Share price is just price per unit; valuation depends on earnings and market cap relative to book value and profits.'
      }
    ],
    prosAndCons: {
      pros: ['Accurately measures true corporate scale', 'Prevents price-per-share optical illusions', 'Essential for diversification'],
      cons: ['Can fluctuate sharply during market sentiment bubbles']
    },
    relatedTerms: [
      { slug: 'asset', name: 'Asset', type: 'glossary' },
      { slug: 'portfolio', name: 'Portfolio', type: 'glossary' },
      { slug: 'nepse', name: 'NEPSE', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'How Companies Divide Ownership into Shares', categorySlug: 'nepse', slug: 'demat-meroshare-crn-setup' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate market trades and share values.' }
    ],
    faq: [
      {
        q: { en: 'What is the Buffett Indicator in Nepal?', np: 'नेपालमा बफेट इन्डिकेटर भनेको के हो?' },
        a: {
          en: 'The Buffett Indicator is the ratio of Total Market Capitalization to GDP. In Nepal, when Market Cap exceeds 100% of GDP, the market is historically considered richly valued.',
          np: 'कुल बजार पुँजीकरणलाई कुल गार्हस्थ्य उत्पादन (GDP) ले भाग गर्दा आउने अनुपातलाई बफेट इन्डिकेटर भनिन्छ। नेपालमा यो अनुपात १००% भन्दा माथि पुग्दा बजार महँगो भएको मानिन्छ।'
        }
      }
    ],
    references: [
      { title: 'Monthly Capital Market Reports', authority: 'Securities Board of Nepal (SEBON)', url: 'https://sebon.gov.np' }
    ]
  },

  // 7. Bull and Bear Market
  {
    slug: 'bull-and-bear-market',
    term: 'Bull Market and Bear Market',
    termNp: 'बुलिस र बेयरिस बजार (Bull & Bear Market)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'B',
    abbreviation: 'Bull/Bear',
    synonyms: ['Bullish Market', 'Bearish Market', 'बुलिस बजार', 'बेयरिस बजार', 'तेजी र मन्दी'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Bull Market is a sustained financial period of rising stock prices and investor optimism; a Bear Market is a prolonged period of declining asset prices by 20% or more.',
      np: 'बुलिस बजार भनेको सेयर मूल्य निरन्तर बढ्ने र लगानीकर्तामा उत्साह छाउने समय हो भने बेयरिस बजार भनेको सेयर मूल्यमा २०% वा सोभन्दा बढी गिरावट आई मन्दी छाउने समय हो।'
    },
    detailedExplanation: {
      en: 'Stock markets move in secular macroeconomic cycles driven by banking liquidity, interest rate spreads, corporate earnings, and investor psychology. On NEPSE, a Bull Market is characterized by falling bank interest rates, expanding daily trading turnovers (e.g., reaching NPR 10 to 20 Arba per day), widespread participation, and consistent series of higher highs and higher lows. Conversely, a Bear Market occurs when banking liquidity tightens, interest rates surge, daily turnover contracts dramatically, and index values decline persistently over months or years.',
      np: 'नेप्से बजार बैंकिङ तरलता, ब्याजदर र लगानीकर्ताको मनोबलका आधारमा चक्रमा चल्छ। जब बैंकहरूमा ब्याजदर घट्छ र प्रशस्त कर्जा उपलब्ध हुन्छ, बजारमा दैनिक १० देखि २० अर्बको कारोबारसहित बुलिस (बढ्दो) ट्रेन्ड सुरु हुन्छ। यसको विपरित जब बैंकमा तरलता संकट आउँछ र ब्याजदर दोहोरो अंकमा पुग्छ, कारोबार रकम सुकेर बजार निरन्तर घट्ने बेयरिस (मन्दी) चक्रमा प्रवेश गर्छ।'
    },
    whyItMatters: {
      en: 'Understanding where NEPSE sits in its macro cycle prevents investors from aggressively buying at the peak of euphoric bull bubbles or panic-selling at the bottom of prolonged bear market capitulations.',
      np: 'बजारको चक्र बुझ्नाले बुलिस बजारको अन्तिम उन्मादमा अत्यधिक महँगोमा सेयर किन्नबाट र बेयरिस बजारको पिंधमा आत्तिएर घाटामा बेच्नबाट लगानीकर्ता जोगिन्छन्।'
    },
    howItWorks: {
      summary: {
        en: 'The 4 psychological phases of NEPSE market cycles:',
        np: 'नेप्से बजार चक्रका ४ प्रमुख मनोवैज्ञानिक चरणहरू:'
      },
      steps: [
        {
          title: { en: '1. Accumulation Phase', np: '१. सञ्चय चरण (Accumulation)' },
          desc: { en: 'Smart institutional money buys quietly at rock-bottom valuations while public sentiment remains depressed.', np: 'बेयर बजारको अन्त्यमा सबै डराइरहेका बेला चलाख लगानीकर्ताले सस्तोमा सेयर जम्मा गर्छन्।' }
        },
        {
          title: { en: '2. Bull Markup Phase', np: '२. बुलिस वृद्धि चरण (Markup)' },
          desc: { en: 'Prices break out, turnover surges, and widespread retail euphoria pushes index to new all-time highs.', np: 'ब्याजदर घट्दै जाँदा बजारमा नयाँ रेकर्ड बन्छ र सर्वसाधारणको ओइरो लाग्छ।' }
        },
        {
          title: { en: '3. Distribution Phase', np: '३. वितरण चरण (Distribution)' },
          desc: { en: 'Early institutional investors take profits and exit quietly while retail buyers continue buying the peak.', np: 'बजार उच्च विन्दुमा पुगेपछि ठूला लगानीकर्ताले नाफा सुरक्षित गर्दै सेयर छाड्छन्।' }
        },
        {
          title: { en: '4. Bear Markdown Phase', np: '४. बेयरिस मन्दी चरण (Markdown)' },
          desc: { en: 'Prices decline persistently, margins calls trigger selling, and fear grips the market.', np: 'ब्याजदर बढ्दा सेयर बेच्नेको चाप बढ्छ र लामो समयसम्म मूल्य घटिरहन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['Macroeconomic market cycle analysis', 'Asset allocation between equities and fixed deposits', 'Risk management strategies']
    },
    nepalContext: {
      en: 'Historically, NEPSE cycles are intensely tied to commercial bank liquidity and Nepal Rastra Bank monetary policies. Major historical bull runs peaked at 1,175 (2008), 1,881 (2016), and 3,198 (2021).',
      np: 'नेप्सेको इतिहासमा वि.सं. २०६५ मा ११७५, २०७३ मा १८८१ र २०७८ मा ३१९८ को ऐतिहासिक उच्च विन्दु (Peak) कायम भएका थिए। यी सबै चक्र राष्ट्र बैंकको तरलता र ब्याजदरसँग प्रत्यक्ष जोडिएका छन्।'
    },
    example: {
      scenario: 'Investor strategy during a NEPSE Bear Market',
      calculations: [
        'NEPSE drops from 3,200 to 1,800 over 18 months',
        'Panic sellers dump fundamentally strong banks at P/E under 12x',
        'Disciplined investor maintains monthly SIP and dollar-cost averages',
        'When market enters next bull cycle, accumulated low-cost units deliver 2x to 3x returns'
      ],
      outcome: 'Patience and long-term horizon convert bear market discounts into wealth creation.'
    },
    commonMisconceptions: [
      {
        misconception: 'A bull market will continue rising forever.',
        reality: 'Every financial market in the world is cyclical. Bull runs eventually end when valuations detach from earnings or monetary liquidity tightens.'
      }
    ],
    prosAndCons: {
      pros: ['Bull markets generate rapid wealth appreciation', 'Bear markets provide once-in-a-decade bargain buying opportunities'],
      cons: ['Emotional investing leads to buying at market tops and selling at market bottoms']
    },
    relatedTerms: [
      { slug: 'nepse', name: 'NEPSE', type: 'glossary' },
      { slug: 'circuit-breaker', name: 'Circuit Breaker', type: 'glossary' },
      { slug: 'portfolio', name: 'Portfolio', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Understanding Market Trends and Trend Analysis', categorySlug: 'investing', slug: 'market-psychology-down-markets' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'CAGR & Investment Growth Calculator', slug: 'cagr', desc: 'Simulate long-term returns across full market cycles.' }
    ],
    faq: [
      {
        q: { en: 'Why is it called Bull and Bear market?', np: 'बुल र बेयर नाम किन राखिएको हो?' },
        a: {
          en: 'A bull attacks by thrusting its horns upward (symbolizing rising prices), while a bear attacks by swiping its paws downward (symbolizing falling prices).',
          np: 'साँढे (Bull) ले आफ्नो सिङले तलबाट माथितर्फ प्रहार गर्छ (जसले बढ्दो मूल्य जनाउँछ) भने भालु (Bear) ले आफ्नो पञ्जाले माथिबाट तल हान्छ (जसले घट्दो मूल्य जनाउँछ)।'
        }
      }
    ],
    references: [
      { title: 'Macroeconomic & Financial Situation Reports', authority: 'Nepal Rastra Bank', url: 'https://nrb.org.np' }
    ]
  }
];

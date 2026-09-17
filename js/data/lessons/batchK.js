// BATCH K - ECONOMICS (6 lessons)
// 1. nrb-monetary-policy-explained-nepal
// 2. cd-ratio-liquidity-crisis-nepal
// 3. remittance-nepal-economic-lifeline
// 4. inr-npr-currency-peg-inflation
// 5. decoding-nepal-federal-budget-jestha-15
// 6. internal-external-debt-nepal-gdp

export const BATCH_K = {

  // ── K1. NRB MONETARY POLICY EXPLAINED ─────────────────────────────
  'nrb-monetary-policy-explained-nepal': {
    id: 'econ-nrb-monetary-policy',
    slug: 'nrb-monetary-policy-explained-nepal',
    categorySlug: 'economics',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Annual Monetary Policy & Macroeconomic Framework FY 2081/82', np: 'नेपाल राष्ट्र बैंक वार्षिक मौद्रिक नीति तथा समष्टिगत आर्थिक ढाँचा २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Basic understanding of interest rates and inflation', np: 'ब्याजदर र मूल्यवृद्धिको आधारभूत ज्ञान' },
    en: {
      title: 'NRB Monetary Policy Explained: How Central Bank Levers Control Your Wealth',
      oneLineSummary: 'Demystify Cash Reserve Ratio (CRR), Policy Rates, and the Interest Rate Corridor - and how they dictate loan EMIs and stock market rallies.',
      summaryPoints: [
        'Nepal Rastra Bank (NRB) announces the annual Monetary Policy in Shrawan, followed by quarterly reviews, to manage inflation and credit growth.',
        'The Cash Reserve Ratio (CRR) mandates commercial banks to deposit 4% of customer deposits interest-free with the central bank.',
        'The Policy Rate (Repo rate) anchors the Interest Rate Corridor, signaling whether loans will become cheaper or more expensive.',
        'When NRB loosens monetary policy, bank liquidity expands, base rates drop, borrowing surges, and the NEPSE index typically rallies.',
        'When NRB tightens policy to combat high inflation, borrowing costs climb and asset valuations compress across real estate and equities.'
      ],
      whatIsThis: 'Monetary Policy (मौद्रिक नीति) is the macroeconomic toolkit used by Nepal Rastra Bank (NRB) to regulate money supply, credit availability, interest rates, and foreign exchange stability in Nepal, balancing economic growth against consumer inflation targets.',
      whyItMatters: 'If you have a home loan or invest in the Nepali stock market, the Governor of Nepal Rastra Bank has more immediate influence over your wallet than the Finance Minister. When NRB hiked the policy rate to 8.5% in 2022, home loan EMIs skyrocketed by 35% and NEPSE plunged from 3,200 to 1,800. Understanding monetary signals tells you exactly when to prepay debt and when to invest aggressively.',
      howItWorks: [
        { step: 1, title: 'Inspect the Interest Rate Corridor (IRC)', desc: 'NRB sets three rates: the Bank Rate (ceiling for emergency borrowing), the Policy Repo Rate (middle target), and the Standing Deposit Facility (SDF floor rate).' },
        { step: 2, title: 'Adjust Bank Reserves via Cash Reserve Ratio (CRR)', desc: 'By setting CRR at 4%, NRB controls how much of every NPR 100 deposit banks can lend. Increasing CRR drains liquidity; lowering CRR injects instant lending capital.' },
        { step: 3, title: 'Deploy Open Market Operations (OMO)', desc: 'When the interbank market has excess cash, NRB issues Reverse Repos and Deposit Collection instruments. When cash is scarce, NRB injects funds via Repo and SLF auctions.' },
        { step: 4, title: 'Observe the Pass-Through to Base Rate & EMIs', desc: 'Changes in NRB policy rates filter through interbank rates to commercial bank Base Rates over a 3 to 6-month quarterly lag, directly modifying your monthly loan EMI.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'How NRB Monetary Levers Impact Your Personal Finances',
        headers: ['Monetary Action', 'Mechanism / Tool', 'Immediate Banking Effect', 'Impact on Your Money'],
        rows: [
          ['Expansionary (Dovish)', 'Lowering Policy Rate & CRR', 'Bank liquidity expands, interbank rate drops', 'Loan EMIs decrease; NEPSE stocks & land rally'],
          ['Contractionary (Hawkish)', 'Hiking Policy Rate & CRR', 'Money supply shrinks, Base Rates rise', 'Loan EMIs jump; Fixed deposit interest rates rise'],
          ['Standing Deposit Facility (SDF)', 'Floor rate to absorb excess cash', 'Puts a bottom floor on short-term rates', 'Prevents savings deposit interest from crashing to 0%'],
          ['SLF / OMO Injections', 'Emergency lending to cash-strapped BFIs', 'Relieves acute banking liquidity crunches', 'Prevents banks from freezing approved business loans']
        ]
      },
      nepalContext: 'Nepal operates under an open capital account constraint with India, where the Nepalese Rupee is pegged to the Indian Rupee (1 INR = 1.60 NPR). Consequently, NRB monetary policy must keep interest rates aligned with the Reserve Bank of India (RBI). If Nepali interest rates fall too far below Indian deposit rates, capital flees informally across the open border via cross-border trade, depleting Nepal\'s foreign exchange reserves.',
      practicalScenario: {
        persona: 'Bibek, 32, equity investor & homebuyer in Kathmandu',
        income: 'NPR 1,15,000 / month salary',
        scenarioText: 'In Shrawan, Bibek listened to news of NRB slashing the Policy Rate by 100 bps from 6.5% to 5.5% and widening credit quotas. His friends ignored the macro news as "boring central bank jargon."',
        solutionText: 'Bibek recognized the start of an expansionary monetary cycle. He anticipated that commercial bank base rates would tumble over the next 6 months. He locked in an adjustable-rate home loan and accelerated his monthly SIP allocations. Within a year, his home loan interest dropped from 12.2% to 9.1%, saving him NPR 14,000/month, while his equity portfolio gained 28% as NEPSE rallied.',
        metricHighlight: 'Anticipated interest rate easing to save NPR 14,000/mo on loan interest'
      },
      formula: {
        name: 'Theoretical Money Multiplier Formula in Nepal',
        equation: 'M = \\frac{1}{\\text{CRR} + \\text{Excess Reserves Ratio}} \\times \\Delta \\text{Monetary Base}',
        variables: [
          { symbol: '\\text{CRR}', name: 'Cash Reserve Ratio', desc: 'Statutory 4.0% interest-free reserve required by NRB.' },
          { symbol: '\\Delta \\text{Monetary Base}', name: 'Fresh High-Powered Money', desc: 'Foreign remittance inflows or central bank liquidity injections in NPR.' }
        ],
        exampleCalculation: 'With CRR at 4% (0.04) and cash drain/reserves at 6% (0.06), Multiplier = 1 / 0.10 = 10x. A fresh NPR 10 Arab remittance injection into the banking system can theoretically expand total bank credit and deposits by up to NPR 100 Arab across the economy!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Explore Macro Return Impacts'
      },
      commonMistakes: [
        { mistake: 'Assuming bank loan interest rates will drop the day after NRB cuts its policy rate.', correct: 'Understand that commercial bank Base Rates adjust quarterly with a 3 to 6-month time lag.', explanation: 'Banks compute Base Rates using the trailing 3-month average cost of funds, meaning rate cuts reflect gradually.' },
        { mistake: 'Taking fixed-rate loans at the very peak of a monetary tightening cycle.', correct: 'Opt for floating-rate loans when central bank interest rates are at cyclical highs.', explanation: 'Floating rates allow your interest cost to drop automatically as NRB cuts rates over the subsequent years.' },
        { mistake: 'Ignoring the Interest Rate Corridor floor (Standing Deposit Facility).', correct: 'Monitor the SDF floor to predict when bank fixed deposit rates will bottom out.', explanation: 'The SDF rate acts as the statutory minimum return banks can earn, preventing deposit rates from collapsing further.' }
      ],
      definitions: [
        { term: 'Monetary Policy', full: 'मौद्रिक नीति', meaning: 'The central bank\'s macroeconomic framework to control money supply, interest rates, and inflation.' },
        { term: 'CRR (Cash Reserve Ratio)', full: 'अनिवार्य नगद अनुपात', meaning: 'The minimum percentage of total customer deposits that commercial banks must maintain interest-free at NRB (4%).' },
        { term: 'Policy Rate (Repo)', full: 'नीतिगत दर', meaning: 'The key interest rate at which the central bank lends short-term funds to commercial banks against government securities.' },
        { term: 'Interest Rate Corridor (IRC)', full: 'ब्याजदर करिडोर', meaning: 'The statutory framework consisting of a ceiling (Bank Rate), target (Policy Rate), and floor (SDF) to keep interbank rates stable.' }
      ],
      faqs: [
        { q: 'When does Nepal Rastra Bank announce the Monetary Policy?', a: 'NRB typically announces the full annual Monetary Policy in the first month of the Nepali fiscal year (Shrawan / late July) and releases quarterly reviews every three months thereafter.' },
        { q: 'Why does the stock market (NEPSE) rise when NRB cuts interest rates?', a: 'Lower interest rates reduce margin loan borrowing costs, make fixed deposits less attractive, and expand banking liquidity, driving institutional and retail capital into equities.' },
        { q: 'What is the statutory Cash Reserve Ratio (CRR) in Nepal currently?', a: 'Under current NRB monetary guidelines, the statutory CRR for Class A, B, and C financial institutions is universally fixed at 4.0% of total domestic deposits.' }
      ],
      takeaways: [
        'NRB Monetary Policy controls bank interest rates, credit availability, and asset price cycles.',
        'CRR is fixed at 4.0%, dictating how much money banks can multiply into public loans.',
        'Rate cuts expand banking liquidity, lowering loan EMIs and driving stock market rallies.',
        'Base rate changes lag NRB announcements by 3 to 6 months due to quarterly averaging.',
        'Monitor monetary signals to decide between prepaying debt or investing in the stock market.'
      ]
    },
    np: {
      title: 'नेपाल राष्ट्र बैंकको मौद्रिक नीति: केन्द्रीय बैंकका औजारले तपाईंको सम्पत्ति कसरी नियन्त्रण गर्छन्?',
      oneLineSummary: 'अनिवार्य नगद अनुपात (CRR), नीतिगत दर (Repo) र ब्याजदर करिडोरको भित्री गणित बुझ्नुहोस् - जसले बैंकको किस्ता र सेयर बजारको दिशा तय गर्छन्।',
      summaryPoints: [
        'नेपाल राष्ट्र बैंकले हरेक वर्ष साउनमा वार्षिक मौद्रिक नीति र त्यसपछि त्रैमासिक समीक्षामार्फत बजारको ब्याजदर र कर्जा विस्तार नियन्त्रण गर्छ।',
        'अनिवार्य नगद अनुपात (CRR) ले बैंकहरूलाई कुल निक्षेपको ४% रकम विना ब्याज राष्ट्र बैंकमा सुरक्षित राख्न बाध्य पार्छ।',
        'नीतिगत दर (Policy Rate) ले ब्याजदर करिडोरको दिशा तय गर्छ जसले बैंक कर्जा सस्तो हुने कि महँगो हुने भन्ने पूर्वसंकेत दिन्छ।',
        'जब राष्ट्र बैंकले खुकुलो मौद्रिक नीति ल्याउँछ, बैंकमा तरलता बढ्छ, आधार दर घट्छ, कर्जा सस्तिन्छ र नेप्से परिसूचक बढ्छ।',
        'महँगी नियन्त्रण गर्न कडा नीति लिँदा ब्याजदर ह्वात्तै बढ्छ र घरजग्गा तथा सेयरको मूल्य घट्न पुग्छ।'
      ],
      whatIsThis: 'मौद्रिक नीति (Monetary Policy) भनेको नेपाल राष्ट्र बैंकले देशको आर्थिक वृद्धि हासिल गर्न, मुद्रास्फीति (महँगी) नियन्त्रणमा राख्न, र विदेशी मुद्रा सञ्चिति जोगाउन बजारमा पैसाको आपूर्ति र ब्याजदरलाई नियमन गर्ने समष्टिगत नीतिगत औजार हो।',
      whyItMatters: 'यदि तपाईंको घर कर्जा छ वा तपाईं सेयर बजारमा लगानी गर्नुहुन्छ भने अर्थमन्त्रीभन्दा बढी तपाईंको खल्तीमा राष्ट्र बैंकका गभर्नरको निर्णयले प्रभाव पार्छ। २०७९ मा राष्ट्र बैंकले नीतिगत दर बढाएर ८.५% पुर्याउँदा घर कर्जाको किस्ता ३५% ले बढेको थियो र नेप्से ३,२०० बाट घटेर १,८०० मा झरेको थियो। मौद्रिक नीतिको संकेत बुझ्दा कहिले ऋण तिर्ने र कहिले लगानी बढाउने भन्ने सही निर्णय लिन सकिन्छ।',
      howItWorks: [
        { step: 1, title: 'ब्याजदर करिडोर (Interest Rate Corridor) हेर्नुहोस्', desc: 'राष्ट्र बैंकले ३ वटा दर तोक्छ: माथिल्लो सीमा बैंक दर (संकटकालीन कर्जा), बीचको नीतिगत दर (Repo), र तल्लो सीमा स्थायी निक्षेप सुविधा (SDF दर)।' },
        { step: 2, title: 'अनिवार्य नगद अनुपात (CRR) बाट तरलता व्यवस्थापन', desc: 'CRR ४% तोकेर राष्ट्र बैंकले निक्षेपको कति पैसा बैंकले ऋण दिन पाउँछ भन्ने तय गर्छ। CRR बढाउँदा बजारबाट पैसा तानिन्छ, घटाउँदा पैसा बजारमा ओइरिन्छ।' },
        { step: 3, title: 'खुला बजार कारोबार (Open Market Operations)', desc: 'बैंकहरूमा धेरै पैसा थुप्रिँदा राष्ट्र बैंकले रिभर्स रिपो वा निक्षेप संकलन उपकरणमार्फत पैसा तान्छ; अभाव हुँदा रिपो र SLF मार्फत बजारमा पैसा पठाउँछ।' },
        { step: 4, title: 'आधार दर (Base Rate) र EMI मा प्रभाव', desc: 'राष्ट्र बैंकको नीति परिवर्तन भएको ३ देखि ६ महिनाभित्र बैंकहरूको आधार दर घटबढ हुन्छ र त्यसै अनुसार तपाईंको मासिक किस्ता परिमार्जन हुन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'राष्ट्र बैंकको मौद्रिक औजारले तपाईंको व्यक्तिगत वित्तमा पार्ने प्रत्यक्ष प्रभाव',
        headers: ['मौद्रिक कदम / नीति', 'प्रयोग गरिने औजार', 'बैंकिङ प्रणालीमा देखिने प्रभाव', 'तपाईंको पैसामा हुने असर'],
        rows: [
          ['खुकुलो नीति (Dovish)', 'नीतिगत दर र CRR घटाउँदा', 'बैंकमा पैसा थुप्रिने, अन्तरबैंक दर घट्ने', 'ऋणको किस्ता घट्छ; सेयर र घरजग्गाको भाउ बढ्छ'],
          ['कडा नीति (Hawkish)', 'नीतिगत दर र CRR बढाउँदा', 'तरलता संकुचन, आधार दर तीव्र बढ्ने', 'ऋणको किस्ता चर्को हुन्छ; मुद्दतीको ब्याज बढ्छ'],
          ['स्थायी निक्षेप सुविधा (SDF)', 'अतिरिक्त पैसा तान्ने तल्लो सीमा', 'अन्तरबैंक दरलाई शून्य हुनबाट रोक्ने', 'बचत खाताको ब्याजदर धेरै तल झर्न पाउँदैन'],
          ['रिपो / SLF सुविधाहरू', 'अभाव हुँदा बैंकलाई दिइने अल्पकालीन ऋण', 'बैंकहरूलाई कर्जा दिनबाट रोकिन नदिने', 'स्वीकृत भइसकेका व्यापारिक कर्जा रोकिँदैनन्']
        ]
      },
      nepalContext: 'नेपालको भारतीय रुपैयाँसँग स्थिर विनिमय दर (१ भारु = १.६० नेरु) भएकाले राष्ट्र बैंकको मौद्रिक नीति भारतीय केन्द्रीय बैंक (RBI) को नीतिसँग प्रत्यक्ष रूपमा बाँधिएको हुन्छ। यदि नेपालमा ब्याजदर भारतको भन्दा धेरै सस्तो भयो भने खुला सिमानाका कारण अनौपचारिक माध्यमबाट पुँजी भारत पलायन हुन्छ र नेपालको विदेशी मुद्रा सञ्चितिमा संकट आउँछ। त्यसैले राष्ट्र बैंकले भारतको ब्याजदरलाई सधैँ हेरेर आफ्ना नीतिगत दरहरू तय गर्छ।',
      practicalScenario: {
        persona: 'विवेक, ३२, काठमाडौँका सेयर लगानीकर्ता तथा घर खरिदकर्ता',
        income: 'मासिक तलब रु. १,१५,०००',
        scenarioText: 'साउनमा राष्ट्र बैंकले नीतिगत दर ६.५% बाट घटाएर ५.५% मा झारेको समाचार आयो। विवेकका साथीहरूले यसलाई "सरकारी भाषण" भन्दै बेवास्ता गरे।',
        solutionText: 'विवेकले ब्याजदर सस्तिने चक्र सुरु भएको बुझे। उनले तुरुन्तै घट्दो दरमा घर कर्जा स्वीकृत गराए र सेयरमा मासिक लगानी बढाए। आगामी वर्षमा उनको घर कर्जाको ब्याज १२.२% बाट घटेर ९.१% मा झर्यो (मासिक रु. १४,००० बचत), र नेप्से बढ्दा उनको पोर्टफोलियोले २८% नाफा कमायो।',
        metricHighlight: 'मौद्रिक नीतिको पूर्वसंकेत बुझेर मासिक १४ हजार ऋण ब्याज जोगाए'
      },
      formula: {
        name: 'नेपालमा सैद्धान्तिक मुद्रा गुणक (Money Multiplier) सूत्र',
        equation: 'M = \\frac{1}{\\text{CRR} + \\text{Excess Reserves Ratio}} \\times \\Delta \\text{Monetary Base}',
        variables: [
          { symbol: '\\text{CRR}', name: 'अनिवार्य नगद अनुपात', desc: 'नेपाल राष्ट्र बैंकले तोकेको स्थिर ४.०% विना ब्याजको मौज्दात।' },
          { symbol: '\\Delta \\text{Monetary Base}', name: 'नयाँ भित्रिएको प्राथमिक पुँजी', desc: 'रेमिट्यान्स वा केन्द्रीय बैंकले बजारमा पठाएको नयाँ नगद।' }
        ],
        exampleCalculation: 'यदि CRR ४% (०.०४) र अन्य मौज्दात ६% (०.०६) छ भने गुणक = १ / ०.१० = १० गुणा। देशमा नयाँ भित्रिएको रु. १० अर्ब रेमिट्यान्सले बैंकिङ प्रणालीमार्फत अर्थतन्त्रमा कुल रु. १०० अर्ब बराबरको कर्जा र निक्षेप सिर्जना गर्न सक्छ!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'ब्याजदर प्रभाव हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'राष्ट्र बैंकले दर घटाएकै भोलिपल्ट बैंकले मेरो ऋणको ब्याज घटाइहाल्छ भन्ठान्नु।', correct: 'बैंकको आधार दर अघिल्लो त्रैमासको औसत लागत अनुसार ३ देखि ६ महिनाको अन्तरालमा मात्र घट्छ।', explanation: 'बैंकहरूले ३ महिनाको औसत लागत हिसाब गर्ने हुँदा नीतिगत दरको प्रभाव विस्तारै मात्र देखिन्छ।' },
        { mistake: 'ब्याजदर सबैभन्दा चर्को भएको बेला स्थिर (Fixed Rate) कर्जा सम्झौता गर्नु।', correct: 'ब्याजदर उच्च विन्दुमा पुगेको बेला सधैँ परिवर्तनशील (Floating Rate) कर्जा रोज्नुहोस्।', explanation: 'पछि केन्द्रीय बैंकले दर घटाउँदा परिवर्तनशील दर आफैं घटेर किस्ता सस्तो हुन पुग्छ।' },
        { mistake: 'ब्याजदर करिडोरको तल्लो सीमा (SDF) लाई बेवास्ता गर्नु।', correct: 'मुद्दती निक्षेपको ब्याज कहिले तल झर्न रोकिन्छ भनी बुझ्न SDF दरलाई नियमित ट्र्याक गर्नुहोस्।', explanation: 'SDF दरले बैंकहरूले पाउने न्यूनतम प्रतिफल तोक्ने भएकाले यसले बचतको तल्लो आधार तय गर्छ।' }
      ],
      definitions: [
        { term: 'मौद्रिक नीति (Monetary Policy)', full: 'केन्द्रीय बैंकको आर्थिक नीति', meaning: 'मुद्रा आपूर्ति, महँगी, र ब्याजदरलाई सन्तुलनमा राख्न नेपाल राष्ट्र बैंकले जारी गर्ने नीतिगत दस्तावेज।' },
        { term: 'अनिवार्य नगद अनुपात (CRR)', full: 'Cash Reserve Ratio', meaning: 'वाणिज्य बैंकहरूले कुल निक्षेपको अनिवार्य रूपमा राष्ट्र बैंकमा विना ब्याज राख्नुपर्ने ४% रकम।' },
        { term: 'नीतिगत दर (Policy Repo Rate)', full: 'केन्द्रीय बैंकको मुख्य ब्याजदर', meaning: 'बैंकहरूलाई सरकारी ऋणपत्र धितो राखेर राष्ट्र बैंकले अल्पकालीन ऋण दिने मुख्य ब्याजदर।' },
        { term: 'ब्याजदर करिडोर (IRC)', full: 'Interest Rate Corridor', meaning: 'अन्तरबैंक ब्याजदरलाई निश्चित दायराभित्र राख्न बैंक दर, नीतिगत दर र निक्षेप संकलन दरको संयुक्त संरचना।' }
      ],
      faqs: [
        { q: 'नेपाल राष्ट्र बैंकले मौद्रिक नीति कुन महिनामा सार्वजनिक गर्छ?', a: 'राष्ट्र बैंकले सामान्यतया नयाँ आर्थिक वर्ष सुरु भएपछि साउन महिनाको पहिलो वा दोस्रो हप्तामा पूर्ण मौद्रिक नीति र त्यसपछि हरेक तीन महिनामा त्रैमासिक समीक्षा सार्वजनिक गर्छ।' },
        { q: 'राष्ट्र बैंकले ब्याजदर घटाउँदा सेयर बजार (नेप्से) किन बढ्छ?', a: 'ब्याजदर घट्दा सेयर कर्जा सस्तो हुन्छ, बैंकको मुद्दती निक्षेपको आकर्षण घट्छ, र बैंकमा भएको अतिरिक्त पैसा नाफा खोज्दै सेयर बजारमा ओइरिन्छ।' },
        { q: 'नेपालमा हाल अनिवार्य नगद अनुपात (CRR) कति प्रतिशत तोकिएको छ?', a: 'नेपाल राष्ट्र बैंकको वर्तमान निर्देशन अनुसार क, ख र ग वर्गका सबै बैंक तथा वित्तीय संस्थाहरूका लागि CRR कुल निक्षेपको ४.०% तोकिएको छ।' }
      ],
      takeaways: [
        'राष्ट्र बैंकको मौद्रिक नीतिले बैंकको ब्याजदर, कर्जा प्रवाह, र सम्पत्तिको बजार भाउ नियन्त्रण गर्छ।',
        'CRR ४% मा स्थिर छ जसले बैंकहरूले कति गुणा कर्जा विस्तार गर्न पाउँछन् भन्ने सीमा तोक्छ।',
        'नीतिगत दर घट्दा बैंकिङ प्रणालीमा पैसा सस्तिन्छ, किस्ता घट्छ, र सेयर बजारमा तेजी आउँछ।',
        'राष्ट्र बैंकको निर्णयपछि बैंकको आधार दर घट्न ३ देखि ६ महिनाको समय लाग्छ।',
        'आर्थिक चक्र बुझेर ऋणको किस्ता घटाउने वा सेयरमा लगानी बढाउने सही निर्णय गर्नुहोस्।'
      ]
    }
  },

  // ── K2. CD RATIO & BANKING LIQUIDITY CRISIS ──────────────────────
  'cd-ratio-liquidity-crisis-nepal': {
    id: 'econ-cd-ratio-liquidity',
    slug: 'cd-ratio-liquidity-crisis-nepal',
    categorySlug: 'economics',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Unified Directives on Credit-Deposit (CD) Ratio & Capital Adequacy', np: 'नेपाल राष्ट्र बैंक कर्जा-निक्षेप अनुपात (CD Ratio) तथा पुँजी कोष निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Basic understanding of bank deposits and loans', np: 'बैंक निक्षेप र कर्जाको आधारभूत जानकारी' },
    en: {
      title: 'CD Ratio & Liquidity Crises in Nepal: Why Banks Suddenly Stop Lending',
      oneLineSummary: 'Understand the mandatory 90% Credit-to-Deposit (CD) ratio cap that triggers credit freezes and interest rate spikes in Nepal.',
      summaryPoints: [
        'Nepal Rastra Bank mandates that banks must maintain a Credit-to-Deposit (CD) Ratio of no more than 90.0%.',
        'For every NPR 100 collected in customer deposits, a commercial bank can lend a maximum of NPR 90, keeping NPR 10 as a liquidity buffer.',
        'When the CD ratio breaches 90%, banks face severe central bank penal interest and immediately freeze all new loan disbursements.',
        'Liquidity crunches in Nepal are cyclical: excessive imports drain deposits, while sluggish government spending traps cash in the treasury.',
        'Borrowers should track system CD ratios: a loosening ratio (<82%) signals imminent interest rate cuts, while a tight ratio (>88%) signals hikes.'
      ],
      whatIsThis: 'The Credit-to-Deposit (CD) Ratio (कर्जा-निक्षेप अनुपात) is a core prudential metric monitored by Nepal Rastra Bank measuring total domestic credit disbursed by a bank divided by its total domestic deposit base. By law, this ratio must not exceed 90.0%, serving as a circuit-breaker to prevent banks over-leveraging and facing bank runs.',
      whyItMatters: 'Have you ever had a bank officer approve your home or business loan, only to freeze disbursal days later claiming "sorry, head office has stopped lending due to liquidity"? The culprit is almost always the CD Ratio. When banks lend too aggressively without attracting fresh deposits, their CD ratio hits 89.9%, forcing an emergency freeze on all auto, personal, and mortgage credit across Nepal.',
      howItWorks: [
        { step: 1, title: 'Monitor the Numerator vs Denominator', desc: 'The numerator is Total Loans Disbursed; the denominator is Total Deposits (including local deposits and debentures counted under NRB exemptions).' },
        { step: 2, title: 'Approaching the 90% Danger Zone', desc: 'When system credit grows faster than remittances and deposits, bank CD ratios climb from 82% to 88%. Banks aggressively compete for deposits, hiking FD rates to 11%-12%.' },
        { step: 3, title: 'Breaching 90% Triggers NRB Penalties', desc: 'If a bank closes the month above 90%, NRB imposes statutory fines equal to the Bank Rate on the shortfall. Banks instantly slam the brakes on all new lending.' },
        { step: 4, title: 'Easing Phase & Credit Thaw', desc: 'As remittances flood in or government fiscal spending surges in the fourth quarter, deposits rise, pushing the CD ratio back down to 80%-82% and unlocking cheap loans.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'The CD Ratio Cycle in Nepal: From Credit Freeze to Easy Lending',
        headers: ['System CD Ratio Range', 'Banking Liquidity State', 'Bank Behavior & Rates', 'Recommended Personal Strategy'],
        rows: [
          ['Above 88% to 90%', 'Severe Liquidity Crunch', 'New loans frozen; FD interest spikes to 10%-12%', 'Lock long-term Fixed Deposits; postpone borrowing'],
          ['84% to 87%', 'Balanced / Neutral', 'Normal loan processing; stable base rates', 'Standard EMIs; steady SIP investing'],
          ['Below 82% (e.g. 78%-80%)', 'Extreme Excess Liquidity', 'Banks slash FD rates to 5%-6%; aggressive home loan promos', 'Take floating-rate home loans; invest heavily in equities'],
          ['Statutory Breach (> 90%)', 'Emergency Lockdown', 'NRB penalizes bank; complete halt of retail credit', 'Expect severe volatility in real estate and NEPSE']
        ]
      },
      nepalContext: 'In 2021, Nepal Rastra Bank officially retired the older Core-Capital-cum-Deposit (CCD) ratio (which had an 85% cap incorporating equity) and adopted the simpler international CD ratio with a 90% ceiling. During the 2021-2022 import boom, Nepal\'s trade deficit widened dramatically, sucking over NPR 300 Arab out of the banking system in import L/Cs, pushing several commercial banks past the 90% threshold and triggering Nepal\'s worst liquidity squeeze in modern history.',
      practicalScenario: {
        persona: 'Sushil, 39, commercial contractor in Lalitpur',
        income: 'NPR 2,50,000 / month business revenue',
        scenarioText: 'Sushil applied for an NPR 60 Lakh equipment loan when the banking system CD ratio was at 89.4%. The branch manager dragged the file for 3 months, demanding higher premiums.',
        solutionText: 'Sushil checked RisePaisa\'s weekly macro dashboard and noticed strong remittance surges pushing the national CD ratio down to 80.5%. Armed with this data, he approached a rival Class A bank offering promotional credit to deploy idle liquidity. The rival bank approved his loan in 5 days at Base Rate + 1.25%, saving him 2.5% in interest rate markup.',
        metricHighlight: 'Used national CD ratio data to negotiate a 2.5% lower loan rate'
      },
      formula: {
        name: 'Credit-to-Deposit (CD) Ratio Formula',
        equation: '\\text{CD Ratio} = \\left( \\frac{\\text{Total Domestic Credit Disbursed}}{\\text{Total Domestic Deposits} + \\text{Permitted Debentures}} \\right) \\times 100\\% \\leq 90.0\\%',
        variables: [
          { symbol: '\\text{Total Credit}', name: 'Disbursed Loans', desc: 'All outstanding loans issued to business and retail borrowers.' },
          { symbol: '\\text{Total Deposits}', name: 'Total Domestic Deposits', desc: 'Current, savings, and fixed deposits from public and institutions.' }
        ],
        exampleCalculation: 'A bank has NPR 2,00,000 Crore in deposits and NPR 1,76,000 Crore in disbursed loans. CD Ratio = (1,76,000 / 2,00,000) × 100% = 88.0%. The bank has 2.0% headroom remaining (can lend another NPR 4,000 Crore before hitting the 90% hard stop)!',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'Check Loan Affordability'
      },
      commonMistakes: [
        { mistake: 'Applying for large retail loans when the system CD ratio is hovering near 89%-90%.', correct: 'Wait for liquidity to ease or apply at banks with the lowest individual CD ratios.', explanation: 'Banks nearing 90% either reject loan files or add exorbitant 4%-5% risk premiums.' },
        { mistake: 'Failing to lock high fixed deposit rates when banks face liquidity crunches.', correct: 'Lock 1 to 2-year fixed deposits when CD ratios spike and banks offer 11%-12% teaser rates.', explanation: 'Liquidity crunches are the single best window to lock generational risk-free fixed deposit yields.' },
        { mistake: 'Assuming low CD ratios mean banks will approve bad credit files.', correct: 'Even with high liquidity, banks strictly enforce collateral valuation and CIB credit checks.', explanation: 'A low CD ratio lowers interest rates, but it does not relax regulatory underwriting standards.' }
      ],
      definitions: [
        { term: 'CD Ratio', full: 'कर्जा-निक्षेप अनुपात (Credit-to-Deposit Ratio)', meaning: 'The percentage of total collected deposits that a bank has extended as customer loans, capped at 90%.' },
        { term: 'Liquidity Crunch', full: 'तरलता संकट', meaning: 'A macroeconomic condition where loan demand severely outstrips available liquid cash in the banking system.' },
        { term: 'Excess Liquidity', full: 'अधिक तरलता', meaning: 'A condition where banks hold huge idle cash balances with low borrowing demand, driving deposit rates down.' },
        { term: 'Interbank Rate', full: 'अन्तरबैंक ब्याजदर', meaning: 'The interest rate charged on short-term loans between commercial banks to balance overnight reserve requirements.' }
      ],
      faqs: [
        { q: 'What is the maximum legal CD ratio allowed for banks in Nepal?', a: 'Under Nepal Rastra Bank directives, the maximum statutory Credit-to-Deposit (CD) ratio for all licensed Class A, B, and C financial institutions is strictly capped at 90.0%.' },
        { q: 'Why did NRB replace the old CCD ratio with the CD ratio?', a: 'The CD ratio is the international Basel III standard for monitoring loan-to-deposit proportions, simplifying accounting and removing distortions caused by core capital calculations.' },
        { q: 'Where can an ordinary citizen check the daily CD ratio of Nepali banks?', a: 'NRB publishes the updated banking liquidity, daily interbank rates, and average CD ratio on its official website homepage (nrb.org.np).' }
      ],
      takeaways: [
        'NRB legally caps the Credit-to-Deposit (CD) ratio at 90.0% to prevent banking insolvency.',
        'When CD ratios approach 90%, banks freeze loan disbursements and hike deposit interest.',
        'When CD ratios drop below 82%, banks slash deposit rates and launch aggressive loan discounts.',
        'Use liquidity crunches to lock peak fixed deposit rates (10%-12%).',
        'Track national CD ratios to time your home loan applications and negotiate lower premiums.'
      ]
    },
    np: {
      title: 'नेपालमा कर्जा-निक्षेप अनुपात (CD Ratio) र बैंकिङ तरलता संकट: बैंकहरूले किन अचानक ऋण रोक्छन्?',
      oneLineSummary: 'राष्ट्र बैंकको ९०% को कडा CD Ratio सीमा बुझ्नुहोस् - जसले बजारमा ऋण ठप्प पार्ने र ब्याजदर उकास्ने काम गर्छ।',
      summaryPoints: [
        'नेपाल राष्ट्र बैंकको नियम अनुसार सबै बैंक तथा वित्तीय संस्थाले कर्जा-निक्षेप अनुपात (CD Ratio) अधिकतम ९०.०% भित्र राख्नुपर्छ।',
        'बैंकमा रु. १०० निक्षेप जम्मा हुँदा बैंकले बढीमा रु. ९० मात्र ऋण दिन पाउँछ, बाँकी १० रुपैयाँ तरलता सुरक्षाका लागि राख्नैपर्छ।',
        'जब CD Ratio ९०% नाघ्छ, बैंकहरूलाई राष्ट्र बैंकले जरिवाना तिराउँछ र बैंकहरूले तुरुन्तै नयाँ ऋण दिन बन्द (Freeze) गर्छन्।',
        'नेपालमा तरलता संकट चक्रीय हुन्छ: तीव्र आयातले निक्षेप विदेशिन्छ भने सरकारी बजेट खर्च नहुँदा पैसा सरकारी ढुकुटीमा थन्किन्छ।',
        'CD Ratio ८२% भन्दा तल झर्दा ऋण सस्तिने र ८८% नाघ्दा ब्याजदर चर्को हुने पूर्वसंकेत मिल्छ।'
      ],
      whatIsThis: 'कर्जा-निक्षेप अनुपात (CD Ratio - Credit-to-Deposit Ratio) भनेको कुनै पनि बैंकले सर्वसाधारणबाट संकलन गरेको कुल निक्षेपको कति प्रतिशत रकम कर्जाको रूपमा लगानी गरेको छ भनी देखाउने वित्तीय सूचक हो। नेपाल राष्ट्र बैंकले यसको अधिकतम सीमा ९०.०% तोकेको छ ताकि बैंकहरूले जोखिमपूर्ण कर्जा विस्तार नगरून्।',
      whyItMatters: 'धेरै मानिसहरूले अनुभव गरेका छन्: घर वा गाडी कर्जाको सबै प्रक्रिया मिलिसकेपछि बैंक म्यानेजरले "माथिबाट तरलता अभावले गर्दा लोन रोक्नु भन्ने आदेश आयो" भन्दै पैसा दिँदैनन्। यसको मुख्य कारण बैंकको CD Ratio नै हो। जब बैंकले निक्षेप नबढाई अन्धाधुन्ध ऋण बाँड्छन्, अनुपात ९०% पुग्छ र देशभरिका शाखाहरूमा ऋण प्रवाह तुरुन्त रोकिन्छ।',
      howItWorks: [
        { step: 1, title: 'अंश र हरको हिसाब बुझ्नुहोस्', desc: 'अंशमा कुल प्रवाह भएको कर्जा (Loans) हुन्छ र हरमा सर्वसाधारणको कुल निक्षेप (Deposits) हुन्छ। यसको प्रतिशत ९० भन्दा बढी हुनुहुँदैन।' },
        { step: 2, title: '८८% नाघेपछि खतराको घण्टी', desc: 'जब बजारमा निक्षेपभन्दा कर्जाको माग धेरै हुन्छ, CD Ratio ८२% बाट बढेर ८८% पुग्छ। बैंकहरू निक्षेप तान्न मुद्दतीको ब्याजदर बढाएर ११-१२% पुर्याउँछन्।' },
        { step: 3, title: '९०% नाघ्दा राष्ट्र बैंकको कारबाही', desc: 'कुनै बैंकको CD Ratio ९०% भन्दा माथि गएमा राष्ट्र बैंकले बैंक दर बराबरको हर्जना तिराउँछ। त्यसैले बैंकहरूले तुरुन्तै सबै नयाँ ऋण रोकिदिन्छन्।' },
        { step: 4, title: 'सहज अवस्था र ऋण फुकुवा', desc: 'जब रेमिट्यान्स ओइरिन्छ वा सरकारले असारमा बजेट खर्च गर्छ, बैंकमा निक्षेप बढ्छ र CD Ratio ८०% मा झर्छ। त्यसपछि बैंकहरू सस्तो ब्याजमा ऋण बाँड्न थाल्छन्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा CD Ratio को चक्र: तरलता अभावदेखि सस्तो ऋणसम्म',
        headers: ['प्रणालीको CD Ratio दायरा', 'बैंकिङ तरलताको अवस्था', 'बैंकको व्यवहार र ब्याजदर', 'सर्वसाधारणका लागि सही रणनीति'],
        rows: [
          ['८८% देखि ९०% सम्म पुग्दा', 'चर्को तरलता संकट (Crunch)', 'नयाँ ऋण ठप्प; मुद्दती ब्याज १०%-१२% पुग्ने', 'लामो अवधिको मुद्दतीमा पैसा राख्ने; ऋण नलिने'],
          ['८४% देखि ८७% सम्म', 'सन्तुलित / सामान्य अवस्था', 'कर्जा प्रवाह सामान्य; स्थिर आधार दर', 'नियमित किस्ता तिर्ने; अनुशासित SIP गर्ने'],
          ['८२% भन्दा तल (७८%-८०%)', 'अत्यधिक तरलता (Excess)', 'मुद्दती ब्याज ५%-६% मा झर्ने; सस्तो घर कर्जा अफर', 'सस्तो ब्याजमा घर कर्जा लिने; सेयर बजारमा लगानी'],
          ['९०% भन्दा माथि पुगेमा', 'आपतकालीन लकडाउन', 'राष्ट्र बैंकको जरिवाना; पूरै रिटेल कर्जा बन्द', 'घरजग्गा र सेयर बजारमा भारी गिरावटको जोखिम']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकले २०७८ सालमा पुरानो CCD Ratio (पुँजी कोष समेत जोडेर ८५% सीमा भएको) खारेज गरी अन्तर्राष्ट्रिय अभ्यास अनुसार सिधा CD Ratio (९०% सीमा) लागू गरेको थियो। २०७८/७९ मा कोभिडपछिको तीव्र आयातका कारण नेपालबाट खर्बौं रुपैयाँ बाहिरियो। बैंकहरूको निक्षेप सुक्यो तर कर्जा भने बढिरह्यो। धेरै बैंकहरूको CD Ratio ९२% सम्म पुगेपछि नेपालले दशककै सबैभन्दा ठूलो बैंकिङ तरलता संकट भोगेको थियो।',
      practicalScenario: {
        persona: 'सुशील, ३९, ललितपुरका निर्माण व्यवसायी',
        income: 'मासिक रु. २,५०,००० व्यापारिक कारोबार',
        scenarioText: 'सुशीलले नयाँ मेसिनरी किन्न ६० लाख रुपैयाँ ऋण खोज्दा बैंकहरूको CD Ratio ८९.४% पुगेको थियो। बैंक म्यानेजरले ३ महिनासम्म फाइल अड्काएर चर्को ब्याज मागे।',
        solutionText: 'सुशीलले risePaisa को म्याक्रो ड्यासबोर्ड हेरे जहाँ रेमिट्यान्स बढेर राष्ट्रिय औसत CD Ratio ८०.५% मा झरिसकेको थियो। उनले अर्को बैंकमा सम्पर्क गरे जहाँ पैसा थुप्रिएर बैंक सस्तोमा कर्जा दिन ग्राहक खोजिरहेको थियो। नयाँ बैंकले ५ दिनमै आधार दर + १.२५% मा कर्जा पास गर्यो र सुशीलको वार्षिक २.५% ब्याज जोगियो।',
        metricHighlight: 'CD Ratio को आँकडा हेरेर बैंकसँग २.५% सस्तो ब्याजदरमा सम्झौता गरे'
      },
      formula: {
        name: 'कर्जा-निक्षेप अनुपात (CD Ratio) सूत्र',
        equation: '\\text{CD Ratio} = \\left( \\frac{\\text{Total Domestic Credit Disbursed}}{\\text{Total Domestic Deposits} + \\text{Permitted Debentures}} \\right) \\times 100\\% \\leq 90.0\\%',
        variables: [
          { symbol: '\\text{Total Credit}', name: 'कुल प्रवाह भएको कर्जा', desc: 'बैंकले ग्राहक तथा व्यापारीलाई दिएको कुल ऋण रकम।' },
          { symbol: '\\text{Total Deposits}', name: 'कुल स्वदेशी निक्षेप', desc: 'सर्वसाधारण र संस्थाले बैंकमा जम्मा गरेको बचत, मुद्दती र चल्ती खाताको रकम।' }
        ],
        exampleCalculation: 'बैंकसँग रु. २,००,००० करोड निक्षेप र रु. १,७६,००० करोड कर्जा छ। CD Ratio = (१,७६,००० / २,००,०००) × १००% = ८८.०%। बैंकसँग अझै २% सीमा बाँकी छ (९०% पुग्नुअघि बैंकले थप रु. ४,००० करोड ऋण दिन सक्छ)!',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'ऋण क्षमता जाँच्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'प्रणालीको CD Ratio ८९-९०% पुगेको बेला नयाँ घर कर्जाका लागि बैंक धाउनु।', correct: 'तरलता सहज हुन कुर्नुहोस् वा CD Ratio कम भएका बैंकहरू रोज्नुहोस्।', explanation: 'सीमा नजिक पुगेका बैंकहरूले या त कर्जा दिँदैनन् या ५% सम्म चर्को प्रिमियम असुल्छन्।' },
        { mistake: 'तरलता संकटका बेला मुद्दती निक्षेपको चर्को ब्याजदरको फाइदा लिन चुक्नु।', correct: 'CD Ratio उच्च भएको बेला बैंकहरूले ११-१२% ब्याज दिन्छन्, त्यो बेला २ वर्षे मुद्दती बुक गर्नुहोस्।', explanation: 'तरलता संकट नै जीवनभरको सबैभन्दा आकर्षक जोखिमरहित मुद्दती ब्याज हात पार्ने सुनौलो मौका हो।' },
        { mistake: 'CD Ratio सस्तो हुँदैमा कमजोर आयस्रोत भएकाले पनि सजिलै ऋण पाउँछन् सोच्नु।', correct: 'तरलता जतिसुकै भए पनि बैंकले धितो मूल्याङ्कन र CIB क्रेडिट स्कोर कडाइका साथ हेर्छ।', explanation: 'सस्तो CD Ratio ले ब्याजदर घटाउने हो, कर्जा स्वीकृति गर्ने जोखिम नियम खुकुलो बनाउने होइन।' }
      ],
      definitions: [
        { term: 'कर्जा-निक्षेप अनुपात (CD Ratio)', full: 'Credit-to-Deposit Ratio', meaning: 'बैंकले उठाएको कुल निक्षेपको कति प्रतिशतसम्म कर्जा प्रवाह गर्न पाउँछ भन्ने ९०% को कानुनी सीमा।' },
        { term: 'तरलता संकट (Liquidity Crunch)', full: 'लगानीयोग्य रकमको अभाव', meaning: 'बजारमा कर्जाको माग उच्च हुने तर बैंकहरूमा नगद निक्षेपको चरम अभाव हुने आर्थिक अवस्था।' },
        { term: 'अधिक तरलता (Excess Liquidity)', full: 'अतिरिक्त पैसाको थुप्रो', meaning: 'बैंकहरूमा खर्बौं रुपैयाँ निक्षेप थुप्रिने तर बजारमा ऋण लिने मान्छे नहुँदा ब्याजदर ह्वात्तै घट्ने अवस्था।' },
        { term: 'अन्तरबैंक ब्याजदर (Interbank Rate)', full: 'बैंकहरू बीचको ब्याजदर', meaning: 'दैनिक तरलता व्यवस्थापन गर्न एउटा बैंकले अर्को बैंकसँग अल्पकालीन ऋण लिँदा तिर्ने ब्याजदर।' }
      ],
      faqs: [
        { q: 'नेपालमा बैंकहरूले कायम गर्नुपर्ने अधिकतम CD Ratio कति हो?', a: 'नेपाल राष्ट्र बैंकको एकीकृत निर्देशिका अनुसार क, ख र ग वर्गका सबै बैंक तथा वित्तीय संस्थाहरूले अधिकतम ९०.०% सम्म मात्र CD Ratio कायम गर्न पाउँछन्।' },
        { q: 'राष्ट्र बैंकले पुरानो CCD Ratio हटाएर किन CD Ratio ल्यायो?', a: 'अन्तर्राष्ट्रिय बैंकिङ मापदण्ड (Basel III) अनुसार कर्जा र निक्षेपको वास्तविक अनुपात मापन गर्न र हिसाबकिताबलाई सरल बनाउन CD Ratio लागू गरिएको हो।' },
        { q: 'सर्वसाधारणले दैनिक बैंकिङ तरलता र CD Ratio कहाँ हेर्न सक्छन्?', a: 'नेपाल राष्ट्र बैंकको आधिकारिक वेबसाइट (nrb.org.np) को गृहपृष्ठमै दैनिक बैंकिङ तरलता, अन्तरबैंक दर र औसत CD Ratio प्रकाशित हुन्छ।' }
      ],
      takeaways: [
        'राष्ट्र बैंकले वित्तीय संकट रोक्न CD Ratio को सीमा अधिकतम ९०.०% तोकेको छ।',
        'CD Ratio ९०% नजिक पुग्दा बैंकहरूले ऋण रोक्छन् र निक्षेपको ब्याज बढाउँछन्।',
        'CD Ratio ८२% भन्दा तल झर्दा बैंकहरूमा ऋण सस्तिन्छ र सजिलै कर्जा पाइन्छ।',
        'तरलता संकटको बेला मुद्दती निक्षेपमा उच्च ब्याज (१०%-१२%) निश्चित गर्नुहोस्।',
        'राष्ट्रिय तरलताको आँकडा हेरेर मात्र घर कर्जा वा व्यापारिक कर्जाको सम्झौता गर्नुहोस्।'
      ]
    }
  },

  // ── K3. REMITTANCE: NEPAL'S ECONOMIC LIFELINE ────────────────────
  'remittance-nepal-economic-lifeline': {
    id: 'econ-remittance-lifeline',
    slug: 'remittance-nepal-economic-lifeline',
    categorySlug: 'economics',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Foreign Exchange Management Department & Balance of Payments Reports', np: 'नेपाल राष्ट्र बैंक विदेशी विनिमय व्यवस्थापन विभाग तथा शोधनान्तर स्थिति प्रतिवेदन अनुसार समीक्षित' },
    prerequisites: { en: 'Basic understanding of foreign exchange and banking transfers', np: 'विदेशी मुद्रा र बैंकिङ ट्रान्सफरको सामान्य ज्ञान' },
    en: {
      title: 'Remittance in Nepal: The Macro Lifeline & How to Maximize Its Wealth',
      oneLineSummary: 'Understand how remittance funds 25%+ of Nepal\'s GDP, and how migrant families can leverage the 10% IPO quota and extra 1% FD bonus.',
      summaryPoints: [
        'Remittance represents roughly 25% to 30% of Nepal\'s Gross Domestic Product (GDP), making it the country\'s single largest foreign exchange earner.',
        'Foreign exchange reserves generated by remittance fund Nepal\'s massive import bills for petroleum, food, vehicles, and electronics.',
        'The informal transfer channel (Hundi - हुन्डी) is strictly illegal under the Foreign Exchange Regulation Act 2019 and deprives families of legal protections.',
        'Formal banking remittances entitle migrant workers to a mandatory 10% reserved IPO quota on all new NEPSE public offerings.',
        'Commercial banks provide an additional 1.0% interest rate premium on remittance fixed deposits and remittance savings accounts.'
      ],
      whatIsThis: 'Remittance (विप्रेषण / रेमिट्यान्स) is the transfer of money by Nepali migrant workers living and laboring abroad (Gulf countries, Malaysia, South Korea, Europe, North America) back to their households and bank accounts in Nepal. It forms the core pillar of Nepal\'s Balance of Payments (BOP) and foreign currency reserves.',
      whyItMatters: 'Without remittance, Nepal would face economic collapse within months: foreign currency reserves would evaporate, preventing the import of petrol, medicine, and cooking gas. For individual families, over 70% of remittance is consumed by immediate household food, clothing, and rent. Transforming this inflow from consumption into productive wealth (IPOs, mutual funds, high-yield FDs) is the single biggest opportunity for Nepali diaspora households.',
      howItWorks: [
        { step: 1, title: 'Worker Earns in Foreign Currency (AED, QAR, KRW, USD)', desc: 'Earnings are converted through licensed money service businesses (e.g. Western Union, IME, Prabhu Money Transfer, bank wire) linked directly to Nepali banks.' },
        { step: 2, title: 'Real-Time Clearing & Forex Accrual at NRB', desc: 'The foreign currency is transferred to Nepal Rastra Bank\'s nostro accounts, expanding the national forex reserve, while the equivalent NPR is credited to the family\'s account.' },
        { step: 3, title: 'Claiming the 10% Foreign Employment IPO Quota', desc: 'Migrant workers with a valid labor permit (श्रम स्वीकृति) and Remittance Demat Account can apply for 10% reserved IPO shares on MeroShare, boasting high allotment probabilities.' },
        { step: 4, title: 'Earning the +1% Remittance Interest Bonus', desc: 'Depositing remittance into a dedicated Remittance Fixed Deposit yields an extra 100 basis points (1.0%) above regular domestic deposit interest rates.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Formal Banking Remittance vs Informal Hundi in Nepal',
        headers: ['Feature / Dimension', 'Formal Banking Rail (IME, Prabhu, Bank)', 'Illegal Hundi Network (हुन्डी)', 'Impact on Worker & Family'],
        rows: [
          ['Legal Status', '100% Legal & Regulated by NRB', 'Criminal Offence (Forex Act 2019)', 'Hundi money can be confiscated by police'],
          ['10% IPO Reserved Quota', 'Fully Eligible on MeroShare', 'ZERO Eligibility', 'Formal rails unlock guaranteed share wealth'],
          ['Bank FD Interest Rate', 'Regular Rate + 1.0% Extra Bonus', 'Standard or zero banking interest', 'Formal channels yield millions more in interest'],
          ['Credit & Home Loan Access', 'Official income proof for bank loans', 'Zero verifiable income proof', 'Hundi users are rejected for bank mortgages'],
          ['National Economic Impact', 'Builds national forex reserves for imports', 'Funds smuggling and gold laundering', 'Formal banking strengthens the nation']
        ]
      },
      nepalContext: 'Under the Foreign Exchange Regulation Act 2019, carrying or transferring money through unauthorized Hundi operators carries draconian penalties: confiscation of the entire principal plus up to 300% fines and imprisonment. To incentivize formal transfers, the Securities Board of Nepal (SEBON) introduced the landmark 10% IPO reservation for foreign-employed Nepalis in 2022. This policy has turned hundreds of thousands of migrant workers into profitable co-owners of hydropower, hotel, and industrial assets in Nepal.',
      practicalScenario: {
        persona: 'Chandra, 35, electrical technician in Doha, Qatar',
        income: 'QAR 3,200 / month (approx NPR 1,18,000)',
        scenarioText: 'Chandra previously remitted money through local Hundi agents because they offered 50 paisa higher exchange rates. His family spent the cash immediately with zero savings to show after 5 years abroad.',
        solutionText: 'Chandra switched to formal banking remittances: he opened a Remittance Bank Account and Remittance Demat on MeroShare. Over 3 years, he applied for every reserved 10% foreign employment IPO (getting allotted 10 to 50 shares in almost every issue) and placed NPR 50,000/month into a Remittance FD at 1% extra interest. His portfolio grew to NPR 28 Lakh, providing his family true financial independence.',
        metricHighlight: 'Accumulated an NPR 28 Lakh equity & FD portfolio via formal remittance'
      },
      formula: {
        name: 'Forex Reserve Import Cover Formula in Nepal',
        equation: '\\text{Import Cover Months} = \\frac{\\text{Gross Foreign Exchange Reserves (USD)}}{\\text{Average Monthly Import Outflow (USD)}} \\geq 7.0 \\text{ Months}',
        variables: [
          { symbol: '\\text{Gross Reserves}', name: 'Total Central Bank Forex', desc: 'Foreign currencies and gold held by NRB and commercial banks.' },
          { symbol: '\\text{Monthly Imports}', name: 'Monthly Bill for Goods/Services', desc: 'Average monthly trade outflow in USD.' }
        ],
        exampleCalculation: 'Gross Forex Reserves = USD 14.0 Billion. Average Monthly Import Bill = USD 1.2 Billion. Import Cover = 14.0 / 1.2 = 11.66 Months. Since 11.66 > 7.0 months (NRB minimum threshold), Nepal\'s macro economy is robust and secure against currency crises!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Plan Remittance Wealth'
      },
      commonMistakes: [
        { mistake: 'Using illegal Hundi operators for a marginally higher exchange rate (30-50 paisa).', correct: 'Always use formal banking rails; Hundi deprives you of IPO quotas and risks police seizure.', explanation: 'The wealth gained from 10% reserved IPO allotments dwarfs minor Hundi currency exchange differentials.' },
        { mistake: 'Allowing 100% of remittance to be consumed by family consumer spending.', correct: 'Divert at least 25% of each remittance installment into high-yield FDs or mutual fund SIPs.', explanation: 'Without structured savings, migrant workers return to Nepal after 10 years abroad with zero assets.' },
        { mistake: 'Failing to renew official Labor Permits (श्रम स्वीकृति) while working abroad.', correct: 'Keep your Department of Foreign Employment labor permit active to maintain IPO quota eligibility.', explanation: 'MeroShare automatically verifies labor permit validity with the government database before approving IPO bids.' }
      ],
      definitions: [
        { term: 'Remittance', full: 'विप्रेषण', meaning: 'Funds transferred by migrant workers from abroad back to their home country through banking channels.' },
        { term: 'Hundi', full: 'हुन्डी (गैरकानुनी माध्यम)', meaning: 'An illegal, underground informal money transfer system operating outside central bank regulatory oversight.' },
        { term: 'Forex Reserves', full: 'विदेशी मुद्रा सञ्चिति', meaning: 'Foreign currency assets (USD, EUR, INR) held by the central bank to pay for essential national imports.' },
        { term: 'Migrant IPO Quota', full: 'वैदेशिक रोजगारी आईपीओ कोटा', meaning: 'The mandatory 10% reservation of all new public stock issues exclusively set aside for documented Nepali migrant workers.' }
      ],
      faqs: [
        { q: 'How can a Nepali migrant worker qualify for the 10% reserved IPO quota?', a: 'You need: (1) An active valid government labor permit (श्रम स्वीकृति), (2) A designated Remittance Savings Account in a Nepali bank, (3) A linked Remittance Demat/MeroShare account with CRN, and (4) Proof of remitting funds through banking channels.' },
        { q: 'Do banks in Nepal offer higher interest rates on remittance savings?', a: 'Yes. NRB directives mandate that licensed commercial banks provide at least 1.0% (100 basis points) higher interest on Remittance Fixed Deposits and Remittance Savings accounts compared to standard domestic rates.' },
        { q: 'What happens if police catch money transferred through Hundi in Nepal?', a: 'Under the Foreign Exchange Regulation Act, the entire confiscated sum is forfeited to the state treasury, and both the sender, receiver, and agent face fines up to 3 times the amount plus imprisonment.' }
      ],
      takeaways: [
        'Remittance powers ~25%-30% of Nepal\'s GDP and finances essential national imports.',
        'Never use illegal Hundi - it carries severe criminal penalties and robs you of investment benefits.',
        'Formal bank remittances unlock the lucrative 10% reserved IPO quota on all new NEPSE listings.',
        'Banks offer an extra 1.0% interest rate bonus on remittance fixed deposits.',
        'Divert at least 25% of monthly remittance into long-term investments to build lasting family wealth.'
      ]
    },
    np: {
      title: 'नेपालमा विप्रेषण (Remittance): अर्थतन्त्रको प्राण र यसलाई पुँजीमा बदल्ने तरिका',
      oneLineSummary: 'नेपालको कुल गार्हस्थ्य उत्पादन (GDP) को २५%+ धानेको रेमिट्यान्सको शक्ति, १०% आईपीओ कोटा र १% थप मुद्दती ब्याजको फाइदा बुझ्नुहोस्।',
      summaryPoints: [
        'नेपालको कुल गार्हस्थ्य उत्पादन (GDP) को करिब २५% देखि ३०% हिस्सा विप्रेषण (रेमिट्यान्स) ले ओगटेको छ, जुन देशको मुख्य विदेशी मुद्रा स्रोत हो।',
        'रेमिट्यान्सबाट जम्मा हुने विदेशी मुद्रा सञ्चितिले नै देशमा पेट्रोल, खाद्यान्न, औषधि र गाडी आयात गर्न मद्दत गर्छ।',
        'अनौपचारिक हुन्डी (Hundi) कारोबार विदेशी विनिमय ऐन २०१९ अनुसार गैरकानुनी र दण्डनीय अपराध हो।',
        'बैंकिङ च्यानलबाट रेमिट्यान्स पठाउने श्रमिकहरूले नेप्सेका सबै प्राथमिक सेयर (IPO) मा १०% सुरक्षित कोटा पाउँछन्।',
        'नेपालका बैंकहरूले रेमिट्यान्स बचत तथा मुद्दती निक्षेपमा साधारण ग्राहकभन्दा १.०% बढी ब्याज दिन्छन्।'
      ],
      whatIsThis: 'विप्रेषण (Remittance) भनेको वैदेशिक रोजगारीमा रहेका नेपाली श्रमिकहरूले (खाडी मुलुक, मलेसिया, कोरिया, युरोप, अमेरिका आदिबाट) आफूले कमाएको विदेशी मुद्रा औपचारिक बैंकिङ प्रणालीमार्फत नेपालमा आफ्ना परिवार वा व्यक्तिगत खातामा पठाउने रकम हो।',
      whyItMatters: 'यदि रेमिट्यान्स आउन बन्द भयो भने नेपालको अर्थतन्त्र केही महिनामै टाट पल्टिन्छ: विदेशी मुद्रा सकिएर पेट्रोल र औषधि समेत आयात गर्न सकिँदैन। व्यक्तिगत तहमा, ७०% भन्दा बढी रेमिट्यान्स दैनिक उपभोग (खाना, कपडा र कोठाभाडा) मै सकिन्छ। यो पैसालाई उपभोगमा मात्र नउडाएर १०% आईपीओ कोटा, म्युचुअल फन्ड र १% बढी ब्याज दिने मुद्दतीमा लगाउनु नै आप्रवासी परिवारका लागि धनी बन्ने सबैभन्दा ठूलो अवसर हो।',
      howItWorks: [
        { step: 1, title: 'वैधानिक बैंकिङ माध्यमबाट रकम पठाउने', desc: 'आफू रहेको देशका इजाजतप्राप्त एक्सचेन्ज (जस्तै IME, प्रभु, बैंक वायर) मार्फत नेपालको बैंक खातामा सिधै पैसा पठाउनुहोस्।' },
        { step: 2, title: 'राष्ट्र बैंकमा विदेशी मुद्रा जम्मा र खातामा नेरु', desc: 'विदेशी मुद्रा राष्ट्र बैंकको खातामा जम्मा भई देशको विदेशी मुद्रा सञ्चिति बलियो बन्छ भने सो बराबरको नेपाली रुपैयाँ परिवारको खातामा जम्मा हुन्छ।' },
        { step: 3, title: '१०% वैदेशिक रोजगारी IPO कोटामा आवेदन', desc: 'श्रम स्वीकृति र रेमिट्यान्स डिम्याट खाता भएका श्रमिकहरूले मेरोसेयरबाट हरेक नयाँ कम्पनीको १०% सुरक्षित कोटामा सेयर भरेर उच्च बाँडफाँट हात पार्छन्।' },
        { step: 4, title: '१% थप ब्याजसहित रेमिट्यान्स मुद्दती खाता', desc: 'पैसालाई साधारण बचतमा नछाडी रेमिट्यान्स मुद्दती खातामा राख्नुहोस् जहाँ साधारण मुद्दतीभन्दा १.०% बढी ब्याज पाइन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'औपचारिक बैंकिङ रेमिट्यान्स बनाम गैरकानुनी हुन्डी (Hundi) को तुलना',
        headers: ['तुलनाको आधार', 'औपचारिक बैंकिङ माध्यम (IME, बैंक)', 'गैरकानुनी हुन्डी (Hundi)', 'श्रमिक र परिवारलाई हुने फाइदा'],
        rows: [
          ['कानुनी हैसियत', 'शतप्रतिशत कानुनी र सुरक्षित', 'गम्भीर अपराध (विदेशी विनिमय ऐन)', 'हुन्डीको पैसा प्रहरीले जफत गर्न सक्छ'],
          ['१०% आईपीओ कोटा', 'मेरोसेयरमा पूर्ण रूपमा योग्य', 'शून्य योग्यता (आवेदन दिनै मिल्दैन)', 'आईपीओबाटै लाखौँको पुँजी निर्माण'],
          ['मुद्दती निक्षेपको ब्याज', 'साधारणभन्दा १.०% थप ब्याज', 'सामान्य वा शून्य ब्याज', 'मुद्दतीबाट लाखौँ अतिरिक्त आम्दानी'],
          ['बैंक कर्जा र कागजात', 'आधिकारिक आयस्रोतको बलियो प्रमाण', 'आम्दानीको कुनै कानुनी प्रमाण नहुने', 'हुन्डी प्रयोगकर्ताले बैंकबाट ऋण पाउँदैनन्'],
          ['राष्ट्रिय अर्थतन्त्रमा योगदान', 'देशको ढुकुटी र आयात क्षमता बलियो हुने', 'सुन तस्करी र कालोबजारीलाई सहयोग', 'औपचारिक च्यानलले देशको विकास गर्छ']
        ]
      },
      nepalContext: 'विदेशी विनिमय (नियमित गर्ने) ऐन २०१९ अनुसार अनुमति बिना हुन्डीको कारोबार गर्ने व्यक्तिको पूरै रकम जफत गरी बिगोको ३ गुणासम्म जरिवाना र जेल सजाय हुने कडा व्यवस्था छ। औपचारिक कारोबार बढाउन नेपाल धितोपत्र बोर्ड (SEBON) ले २०७९ मा वैदेशिक रोजगारीमा रहेका नेपालीका लागि १०% आईपीओ आरक्षणको ऐतिहासिक नियम ल्यायो। यसले गर्दा खाडी र मलेसियामा पसिना बगाउने लाखौँ श्रमिकहरू नेपालका जलविद्युत र उद्योगहरूका वास्तविक सेयरधनी बन्न सफल भएका छन्।',
      practicalScenario: {
        persona: 'चन्द्र, ३५, कतारको दोहामा कार्यरत इलेक्ट्रिकल प्राविधिक',
        income: 'मासिक तलब कतारी रियाल ३,२०० (करिब रु. १,१८,०००)',
        scenarioText: 'चन्द्रले पहिले ५० पैसा बढी भाउ पाउने लोभमा हुन्डीबाट पैसा पठाउँथे। परिवारले महिना मरेपछि पूरै पैसा खर्च गर्थ्यो र विदेश बसेको ५ वर्षमा उनको बैंकमा एक रुपैयाँ बचत थिएन।',
        solutionText: 'चन्द्रले हुन्डी छाडेर बैंकमार्फत पैसा पठाउन थाले: उनले रेमिट्यान्स बचत खाता र मेरोसेयर डिम्याट खोले। ३ वर्षसम्म उनले हरेक महिना १०% कोटाबाट आईपीओ भरे (हरेक कम्पनीको १० देखि ५० कित्ता सेयर पाए) र महिनाको ५० हजार १% बढी ब्याज दिने रेमिट्यान्स मुद्दतीमा राखे। ३ वर्षमै उनको सेयर र मुद्दती जोडेर २८ लाख रुपैयाँको सम्पत्ति खडा भयो।',
        metricHighlight: 'वैधानिक रेमिट्यान्स र १०% आईपीओ कोटाबाट २८ लाखको सम्पत्ति निर्माण'
      },
      formula: {
        name: 'विदेशी मुद्रा सञ्चिति आयात धान्ने क्षमता सूत्र',
        equation: '\\text{Import Cover Months} = \\frac{\\text{Gross Foreign Exchange Reserves (USD)}}{\\text{Average Monthly Import Outflow (USD)}} \\geq 7.0 \\text{ Months}',
        variables: [
          { symbol: '\\text{Gross Reserves}', name: 'कुल विदेशी मुद्रा सञ्चिति', desc: 'राष्ट्र बैंक र बैंकहरूसँग रहेको डलर, युरो, भारु र सुन।' },
          { symbol: '\\text{Monthly Imports}', name: 'मासिक औसत आयात खर्च', desc: 'नेपालले विदेशबाट सामान किन्दा मासिक बाहिरिने डलर।' }
        ],
        exampleCalculation: 'कुल विदेशी मुद्रा = १४.० अर्ब डलर। मासिक आयात खर्च = १.२ अर्ब डलर। आयात धान्ने महिना = १४.० / १.२ = ११.६६ महिना। यो राष्ट्र बैंकको न्यूनतम ७ महिनाको सीमाभन्दा धेरै माथि भएकाले नेपालको अर्थतन्त्र आर्थिक संकटबाट पूर्ण सुरक्षित छ!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'रेमिट्यान्स लगानी योजना बनाउनुहोस्'
      },
      commonMistakes: [
        { mistake: '५० पैसा बढी भाउ पाइने लोभमा गैरकानुनी हुन्डीबाट पैसा पठाउनु।', correct: 'सधैँ बैंक वा इजाजतप्राप्त मनी ट्रान्सफर प्रयोग गर्नुहोस्; हुन्डीले १०% आईपीओ कोटा खोस्छ।', explanation: 'आईपीओबाट १० कित्ता सेयर पर्दा हुने नाफा हुन्डीको ५० पैसाको फरकभन्दा सयौँ गुणा बढी हुन्छ।' },
        { mistake: 'विदेशबाट पठाएको पूरै पैसा परिवारले दैनिक उपभोग र किनमेलमै सिध्याउनु।', correct: 'प्रत्येक महिना कम्तीमा २५% रकम अनिवार्य रूपमा मुद्दती वा म्युचुअल फन्डमा बचत गर्नुहोस्।', explanation: 'अनुशासित बचत नगरे १० वर्ष विदेशमा रगत-पसिना बगाएर नेपाल फर्किँदा हात रित्तो हुन्छ।' },
        { mistake: 'विदेशमै बस्दा श्रम स्वीकृतिको म्याद गुजारेर बस्नु।', correct: 'श्रम स्वीकृति सधैँ नवीकरण गर्नुहोस् ताकि १०% आईपीओ कोटाको सुविधा नगुमोस्।', explanation: 'श्रम स्वीकृतिको म्याद सकिएमा मेरोसेयरको वैदेशिक रोजगारी कोटाबाट आवेदन दिन मिल्दैन।' }
      ],
      definitions: [
        { term: 'विप्रेषण (Remittance)', full: 'रेमिट्यान्स', meaning: 'विदेशमा कमाएको रकम आधिकारिक बैंकिङ प्रणालीमार्फत आफ्नो देशमा पठाउने प्रक्रिया।' },
        { term: 'हुन्डी (Hundi)', full: 'गैरकानुनी मुद्रा सञ्जाल', meaning: 'केन्द्रीय बैंकको अनुमति बिना अनौपचारिक रूपमा पैसा ओसारपसार गर्ने अवैध धन्दा।' },
        { term: 'विदेशी मुद्रा सञ्चिति (Forex Reserves)', full: 'केन्द्रीय बैंकको डलर मौज्दात', meaning: 'विदेशबाट सामान र सेवा आयात गर्न राष्ट्र बैंकले सञ्चित गरी राखेको विदेशी मुद्रा।' },
        { term: 'वैदेशिक रोजगारी आईपीओ कोटा', full: '१०% सेयर आरक्षण', meaning: 'श्रम स्वीकृति लिएर विदेशमा काम गर्ने नेपाली श्रमिकका लागि प्राथमिक सेयरमा छुट्याइएको १०% कोटा।' }
      ],
      faqs: [
        { q: 'वैदेशिक रोजगारीमा रहेका नेपालीले १०% आईपीओ कोटा कसरी पाउँछन्?', a: '(१) श्रम स्वीकृति हुनुपर्छ, (२) बैंकमा रेमिट्यान्स बचत खाता खोल्नुपर्छ, (३) रेमिट्यान्स डिम्याट र CRN नम्बर लिनुपर्छ, र (४) पछिल्लो ६ महिनाभित्र विप्रेषण पठाएको हुनुपर्छ।' },
        { q: 'के नेपालका बैंकहरूले रेमिट्यान्स खातामा बढी ब्याज दिन्छन्?', a: 'दिन्छन्। नेपाल राष्ट्र बैंकको नियम अनुसार सबै बैंकहरूले साधारण निक्षेपको तुलनामा रेमिट्यान्स मुद्दती र बचत खातामा अनिवार्य रूपमा १.०% (१०० बेसिस पोइन्ट) बढी ब्याज दिनुपर्छ।' },
        { q: 'यदि हुन्डीबाट पैसा पठाएको प्रहरीले भेट्यो भने के हुन्छ?', a: 'विदेशी विनिमय ऐन अनुसार समातिएको पूरै रकम जफत हुन्छ, बिगोको ३ गुणासम्म जरिवाना तिराइन्छ र पठाउने तथा बुझ्ने दुवैलाई जेल सजाय हुन सक्छ।' }
      ],
      takeaways: [
        'रेमिट्यान्सले नेपालको GDP को २५%-३०% धानेको छ र देशको आयातको आधार हो।',
        'गैरकानुनी हुन्डी कहिल्यै प्रयोग नगर्नुहोस् - यसले जेल सजाय निम्त्याउन सक्छ।',
        'बैंकिङ च्यानलबाट पैसा पठाउँदा नेप्सेका सबै नयाँ आईपीओमा १०% सुरक्षित कोटा पाइन्छ।',
        'बैंकहरूले रेमिट्यान्स मुद्दती खातामा साधारणभन्दा १.०% थप ब्याज दिन्छन्।',
        'पठाएको पैसाको कम्तीमा २५% रकम उत्पादनमूलक लगानीमा लगाएर परिवारको भविष्य सुरक्षित गर्नुहोस्।'
      ]
    }
  },

  // ── K4. INR-NPR CURRENCY PEG & IMPORTED INFLATION ─────────────────
  'inr-npr-currency-peg-inflation': {
    id: 'econ-inr-npr-peg-inflation',
    slug: 'inr-npr-currency-peg-inflation',
    categorySlug: 'economics',
    difficulty: { en: 'Advanced', np: 'उन्नत' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Foreign Exchange Peg Directives & Bilateral Trade Balance Data', np: 'नेपाल राष्ट्र बैंक स्थिर विनिमय दर व्यवस्था तथा द्विपक्षीय व्यापार तथ्यांक अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of currency exchange rates and inflation concepts', np: 'मुद्रा विनिमय दर र मूल्यवृद्धिको आधारभूत ज्ञान' },
    en: {
      title: 'The INR-NPR Currency Peg & Imported Inflation in Nepal: The 1.60 Anchor',
      oneLineSummary: 'Understand the historical 1 INR = 1.60 NPR peg established in 1993, and why India\'s inflation dictates price levels in Kathmandu.',
      summaryPoints: [
        'Since 1993, the Nepalese Rupee has been officially pegged to the Indian Rupee at a fixed rate of 1.00 INR = 1.60 NPR.',
        'India accounts for roughly 65% of Nepal\'s total foreign merchandise trade and 100% of refined petroleum supplies (via IOC).',
        'The peg eliminates foreign currency volatility for cross-border trade, business supply chains, and consumer goods.',
        'The tradeoff is imported inflation: price hikes in Indian agriculture, manufacturing, or fuel pass directly into Nepali retail markets.',
        'The peg strips Nepal Rastra Bank of full monetary independence, compelling domestic interest rates to shadow the Reserve Bank of India (RBI).'
      ],
      whatIsThis: 'The INR-NPR Currency Peg is a fixed exchange rate arrangement where Nepal Rastra Bank permanently fixes the value of 100 Indian Rupees at exactly 160 Nepalese Rupees (1:1.60). Under this peg, the central bank commits to buying and selling unlimited quantities of Indian Rupees at this parity rate.',
      whyItMatters: 'If you buy cooking oil, ride a motorcycle, or eat rice in Nepal, your living costs are anchored to this peg. When the Indian Rupee depreciates against the US Dollar (e.g. from 75 to 84 INR per USD), the Nepalese Rupee automatically falls with it against the Dollar. While this protects cross-border trade with India, it makes electronics, overseas travel, and foreign debt repayment substantially more expensive for Nepalis.',
      howItWorks: [
        { step: 1, title: 'Historical Genesis (1993 Accord)', desc: 'Prior to 1993, the peg fluctuated between 1.35 and 1.68. In February 1993, Nepal fixed the rate at 1 INR = 1.60 NPR, where it has remained unchanged for over three decades.' },
        { step: 2, title: 'Central Bank Defense Mechanism', desc: 'To maintain the 1.60 peg, NRB must hold vast foreign reserves and convert US Dollars into Indian Rupees (selling USD to buy INR) whenever trade deficits deplete INR reserves.' },
        { step: 3, title: 'Transmission of Imported Inflation', desc: 'Because Nepal imports nearly two-thirds of its goods from India, a 6% food inflation in Uttar Pradesh or Bihar transfers directly to border customs points in Birgunj and Bhairahawa.' },
        { step: 4, title: 'Monetary Policy Shadowing (RBI Tracking)', desc: 'If the Reserve Bank of India hikes repo rates to 6.5%, NRB cannot safely keep rates at 4.5%; capital would immediately flee to higher-yielding Indian bank accounts.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Pros vs Cons of the INR-NPR Currency Peg for Nepal\'s Economy',
        headers: ['Dimension', 'Advantages of the 1.60 Peg', 'Disadvantages & Vulnerabilities'],
        rows: [
          ['Trade Stability', 'Zero foreign exchange risk with Nepal\'s largest trading partner (65% of imports)', 'Over-reliance on Indian supply chains and trade policies'],
          ['Macroeconomic Anchor', 'Prevents runaway hyperinflation and currency speculation', 'Imports Indian inflation directly into Nepali consumer baskets'],
          ['Monetary Independence', 'Builds confidence among traders and cross-border businesses', 'NRB cannot set independent interest rates detached from RBI'],
          ['Global Purchasing Power', 'Provides predictability for day-to-day cross-border commerce', 'When INR falls against USD, NPR weakens globally automatically']
        ]
      },
      nepalContext: 'Debates occasionally flare in Kathmandu about whether Nepal should "break the peg" and let the Rupee float. Economists universally warn that unpegging would trigger severe currency volatility: with Nepal\'s astronomical trade deficit (importing 10x more than it exports), a floating Rupee would experience steep depreciation, driving fuel, medicine, and food prices to unaffordable levels. The peg remains Nepal\'s critical macroeconomic anchor.',
      practicalScenario: {
        persona: 'Kamala, 44, wholesale consumer goods distributor in Birgunj',
        income: 'NPR 1,60,000 / month gross margin',
        scenarioText: 'Kamala imports packaged lentils, spices, and packaging materials from factories in Kanpur, India. Her junior partner suggested: "Let\'s lobby for floating the currency so Nepali Rupee can gain strength."',
        solutionText: 'Kamala explained that because Nepal exports very little and imports over NPR 1,000 Arab from India annually, floating the Rupee would cause the NPR to collapse against the INR, doubling procurement costs. The 1.60 peg guarantees that every 1,00,000 INR order will cost exactly 1,60,000 NPR, allowing her to sign 6-month supply contracts with zero currency hedging risk.',
        metricHighlight: 'Eliminated 100% of currency exchange volatility on cross-border supply chains'
      },
      formula: {
        name: 'Imported Inflation Pass-Through Weighting Formula',
        equation: '\\pi_{\\text{Nepal}} \\approx (w_{\\text{India}} \\times \\pi_{\\text{India}}) + (w_{\\text{Domestic}} \\times \\pi_{\\text{Domestic}})',
        variables: [
          { symbol: 'w_{\\text{India}}', name: 'Trade Weighting from India', desc: 'Typically ~0.60 to 0.65 of imported consumer goods.' },
          { symbol: '\\pi_{\\text{India}}', name: 'Indian Consumer Price Inflation', desc: 'CPI inflation published by RBI/MOSPI.' }
        ],
        exampleCalculation: 'If Indian inflation is 6.0% (weight 0.65) and domestic Nepali non-tradable inflation is 5.0% (weight 0.35): Nepali Headline Inflation ≈ (0.65 × 6.0%) + (0.35 × 5.0%) = 3.9% + 1.75% = 5.65%. Over 65% of your inflation is imported directly from across the border!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Explore Inflation Scenarios'
      },
      commonMistakes: [
        { mistake: 'Believing that unpegging the currency will automatically make the Nepali Rupee stronger.', correct: 'Because Nepal runs an overwhelming trade deficit, a floating Rupee would depreciate sharply.', explanation: 'Floating a currency requires strong export competitiveness; floating now would trigger massive imported hyperinflation.' },
        { mistake: 'Overlooking that global oil prices reach Nepal through Indian Oil Corporation (IOC) billing.', correct: 'Track crude oil and INR/USD rates to anticipate petrol and diesel price revisions at Nepal Oil Corporation (NOC).', explanation: 'NOC buys 100% of its refined fuel from IOC in Indian Rupees based on global Brent crude benchmarks.' },
        { mistake: 'Holding excessive Indian currency in cash in Nepal beyond legal limits.', correct: 'NRB permits carrying INR notes only in denominations of 100 or below; 500 INR notes are strictly restricted.', explanation: 'Possessing unauthorized large Indian currency notes carries legal forfeiture under Nepal\'s foreign exchange laws.' }
      ],
      definitions: [
        { term: 'Currency Peg', full: 'स्थिर विनिमय दर प्रणाली', meaning: 'A monetary policy where a national currency\'s exchange rate is fixed at a specific ratio to another major currency.' },
        { term: 'Imported Inflation', full: 'आयातित मुद्रास्फीति', meaning: 'A general increase in domestic consumer prices caused by rising prices of imported raw materials and consumer goods.' },
        { term: 'Reserve Bank of India (RBI)', full: 'भारतीय केन्द्रीय बैंक', meaning: 'The central monetary authority of India whose interest rate actions directly influence NRB policies.' },
        { term: 'Indian Oil Corporation (IOC)', full: 'इन्डियन आयल कर्पोरेसन', meaning: 'The sole supplier of refined petroleum, petrol, diesel, and aviation fuel to Nepal Oil Corporation.' }
      ],
      faqs: [
        { q: 'When was the 1 INR = 1.60 NPR currency peg established?', a: 'The current fixed exchange rate of 1 INR = 1.60 NPR was officially established on February 12, 1993 (Falgun 1, 2049 B.S.) under Prime Minister Girija Prasad Koirala\'s economic liberalization reforms.' },
        { q: 'Can Nepal independently decide to change the peg ratio?', a: 'Yes. The exchange rate is a sovereign policy decision of Nepal Rastra Bank and the Government of Nepal, though any revision would require extensive bilateral coordination and macroeconomic preparation.' },
        { q: 'Why is Indian currency widely accepted in Nepal\'s border towns?', a: 'Due to open borders, deep family ties, and overwhelming bilateral trade, Indian currency (100-rupee notes and below) circulates freely alongside the Nepalese Rupee in Terai border markets.' }
      ],
      takeaways: [
        'The 1 INR = 1.60 NPR currency peg has anchored Nepal\'s price stability since 1993.',
        'India provides 65% of Nepal\'s imports and 100% of refined petroleum supplies.',
        'The peg eliminates currency risk for businesses but imports Indian inflation directly into Nepal.',
        'NRB monetary policy must closely track RBI interest rate decisions to prevent capital flight.',
        'Unpegging the Rupee without strong exports would trigger massive currency depreciation.'
      ]
    },
    np: {
      title: 'नेपालमा भारु-नेरु स्थिर विनिमय दर (Peg) र आयातित महँगी: १.६० को आर्थिक आधारशिला',
      oneLineSummary: '२०४९ सालदेखि कायम १ भारु = १.६० नेरुको स्थिर दर, र भारतको महँगीले काठमाडौँको भान्सा कसरी प्रभावित हुन्छ बुझ्नुहोस्।',
      summaryPoints: [
        '२०४९ साल (१९९३) देखि नेपाली रुपैयाँलाई भारतीय रुपैयाँसँग १ भारु = १.६० नेरु (१०० भारु = १६० नेरु) मा स्थिर (Pegged) गरिएको छ।',
        'नेपालको कुल वैदेशिक व्यापारको करिब ६५% हिस्सा र सम्पूर्ण पेट्रोलियम पदार्थको आयात भारतसँग निर्भर छ।',
        'स्थिर दरले सीमापार व्यापार, सामान आपूर्ति, र उपभोक्ता बजारमा मुद्रा विनिमयको जोखिम पूर्ण रूपमा हटाएको छ।',
        'यसको नकारात्मक पक्ष आयातित महँगी (Imported Inflation) हो: भारतमा खाद्यान्न वा इन्धनको भाउ बढ्नासाथ नेपालमा स्वतः महँगी बढ्छ।',
        'स्थिर दरका कारण नेपाल राष्ट्र बैंकले भारतीय केन्द्रीय बैंक (RBI) को ब्याजदर नीतिलाई पछ्याउनै पर्ने बाध्यता छ।'
      ],
      whatIsThis: 'भारु-नेरु स्थिर विनिमय दर (Currency Peg) भनेको नेपाल राष्ट्र बैंकले भारतीय मुद्रासँग नेपाली मुद्राको भाउ सधैँका लागि १०० भारु बराबर १६० नेपाली रुपैयाँ कायम गरेको मौद्रिक व्यवस्था हो। यस व्यवस्था अन्तर्गत राष्ट्र बैंकले यो दरमा जुनसुकै बेला भारु खरिद-बिक्री गर्ने ग्यारेन्टी गर्दछ।',
      whyItMatters: 'यदि तपाईं नेपालमा खाना पकाउने तेल, चामल, औषधि वा मोटरसाइकल किन्नुहुन्छ भने त्यसको मूल्य यसै १.६० को दरमा निर्भर छ। जब भारतीय रुपैयाँ अमेरिकी डलरसँग कमजोर हुन्छ, नेपाली रुपैयाँ पनि डलरसँगै कमजोर बन्छ। यसले भारतसँगको व्यापारलाई स्थिर राखे पनि विदेशबाट आउने मोबाइल, ल्यापटप, हवाई भाडा र डलरमा लिइएको वैदेशिक ऋणलाई स्वतः महँगो बनाइदिन्छ।',
      howItWorks: [
        { step: 1, title: 'ऐतिहासिक पृष्ठभूमि (२०४९ को सम्झौता)', desc: '२०४९ अघि भारुको भाउ १.३५ देखि १.६८ सम्म घटबढ भइरहन्थ्यो। २०४९ फागुन १ मा नेपालले १ भारु = १.६० नेरु कायम गरेपछि यो दर ३ दशकदेखि स्थिर छ।' },
        { step: 2, title: 'केन्द्रीय बैंकको सञ्चिति व्यवस्थापन', desc: '१.६० को दर जोगाइराख्न राष्ट्र बैंकले अमेरिकी डलर बेचेर भारु किन्नुपर्छ ताकि भारतसँगको ठूलो व्यापार घाटा धान्न पर्याप्त भारु सञ्चिति रहोस्।' },
        { step: 3, title: 'आयातित महँगीको प्रभाव', desc: 'नेपालले उपभोग गर्ने अधिकांश वस्तु भारतबाट आउने भएकाले भारतको उत्तर प्रदेश वा बिहारमा खाद्यान्नको भाउ ६% बढ्दा वीरगन्ज भन्सार हुँदै नेपालको बजारमा पनि तुरुन्तै ६% महँगी बढ्छ।' },
        { step: 4, title: 'भारतीय ब्याजदरलाई पछ्याउने बाध्यता', desc: 'भारतीय केन्द्रीय बैंक (RBI) ले ब्याजदर बढाउँदा नेपाल राष्ट्र बैंकले पनि ब्याजदर बढाउनैपर्छ; अन्यथा नेपालको पैसा अनौपचारिक माध्यमबाट भारततिर भाग्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालको अर्थतन्त्रमा १.६० को भारु पेग (Peg) का फाइदा र जोखिमहरू',
        headers: ['तुलनाको पक्ष', 'स्थिर दर (Peg) का मुख्य फाइदाहरू', 'यसबाट सिर्जना हुने जोखिम र कमजोरीहरू'],
        rows: [
          ['व्यापारिक स्थिरता', 'सबैभन्दा ठूलो साझेदार (६५% आयात) सँग विनिमय दरको जोखिम शून्य', 'भारतीय बजार र नीतिहरूमा अत्यधिक परनिर्भरता'],
          ['समष्टिगत आर्थिक सुरक्षा', 'अत्यधिक मुद्रा अवमूल्यन र सट्टेबाजीबाट बच्न मद्दत', 'भारतको महँगी सिधै नेपाली बजारमा भित्रिने (आयातित महँगी)'],
          ['मौद्रिक स्वतन्त्रता', 'सीमावर्ती व्यापार र लगानीमा उच्च विश्वास र सहजता', 'राष्ट्र बैंकले RBI भन्दा फरक स्वतन्त्र ब्याजदर तोक्न नसक्ने'],
          ['अन्तर्राष्ट्रिय क्रयशक्ति', 'दैनिक उपभोग्य वस्तुको मूल्यमा दीर्घकालीन स्थिरता', 'डलरसँग भारु खस्कँदा विश्व बजारमा नेरु पनि आफैं खस्किने']
        ]
      },
      nepalContext: 'काठमाडौँमा बेलाबेलामा "भारुसँगको पेग हटाएर खुला बजारमा छाड्नुपर्छ" भन्ने बहस चल्छ। तर अर्थशास्त्रीहरू चेतावनी दिन्छन् कि नेपालको आयात निर्यातभन्दा १० गुणा बढी भएको अवस्थामा पेग हटाएमा नेपाली रुपैयाँको भाउ तीव्र रूपमा खस्कनेछ, जसले गर्दा तेल, नुन, औषधि र खाद्यान्नको मूल्य आकासिएर देशमा चरम संकट आउन सक्छ। त्यसैले यो स्थिर दर नेपालको अर्थतन्त्रको बलियो लंगर (Anchor) बनेको छ।',
      practicalScenario: {
        persona: 'कमला, ४४, वीरगन्जकी खाद्यान्न थोक वितरक',
        income: 'मासिक खुद नाफा रु. १,६०,०००',
        scenarioText: 'कमलाले भारतको कानपुरबाट दाल र मसला आयात गर्छिन्। उनका साझेदारले "नेपाली रुपैयाँ बलियो बनाउन भारुसँगको स्थिर दर हटाउनुपर्छ" भने।',
        solutionText: 'कमलाले सम्झाइन् कि नेपालले भारतबाट वर्षमा १० खर्बभन्दा बढीको सामान किन्छ तर बेच्न सक्दैन। यदि दर खुला छाडियो भने भारु महँगो भएर सामानको मूल्य दोब्बर हुन्छ। १.६० को स्थिर दरले गर्दा १ लाख भारुको सामान सधैँ १ लाख ६० हजार नेरुमै पाइने हुनाले ६ महिना अगावै मूल्य तय गरेर व्यापार गर्न सकिएको छ।',
        metricHighlight: 'स्थिर विनिमय दरका कारण सीमापार व्यापारमा मुद्रा जोखिम शून्य बनाएर व्यापार सुरक्षित'
      },
      formula: {
        name: 'आयातित मुद्रास्फीति भार सूत्र',
        equation: '\\pi_{\\text{Nepal}} \\approx (w_{\\text{India}} \\times \\pi_{\\text{India}}) + (w_{\\text{Domestic}} \\times \\pi_{\\text{Domestic}})',
        variables: [
          { symbol: 'w_{\\text{India}}', name: 'भारतबाट हुने आयातको भार', desc: 'उपभोग्य बजारमा करिब ०.६० देखि ०.६५ सम्म।' },
          { symbol: '\\pi_{\\text{India}}', name: 'भारतको उपभोक्ता मुद्रास्फीति', desc: 'भारतीय रिजर्भ बैंकले प्रकाशित गर्ने महँगी दर।' }
        ],
        exampleCalculation: 'यदि भारतमा महँगी ६.०% (भार ०.६५) र नेपालको स्थानीय सेवा महँगी ५.०% (भार ०.३५) छ भने: नेपालको कुल महँगी ≈ (०.६५ × ६.०%) + (०.३५ × ५.०%) = ३.९% + १.७५% = ५.६५%। अर्थात् नेपालको महँगीको ६५% भन्दा बढी हिस्सा सिधै भारतबाट आयात हुन्छ!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'महँगीको असर हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'स्थिर दर हटाउनेबित्तिकै नेपाली रुपैयाँ भारुभन्दा बलियो हुन्छ भन्ठान्नु।', correct: 'ठूलो व्यापार घाटा भएकाले दर खुला छाड्दा नेपाली रुपैयाँ झन् कमजोर भएर महँगी बढ्छ।', explanation: 'मुद्रा बलियो हुन निर्यात र उद्योग बलियो हुनुपर्छ; अन्यथा मुद्राको भाउ तीव्र गतिमा अवमूल्यन हुन्छ।' },
        { mistake: 'नेपालमा पेट्रोलियम पदार्थको भाउ विश्व बजार अनुसार सिधै तय हुन्छ सोच्नु।', correct: 'नेपालले इन्डियन आयल कर्पोरेसन (IOC) बाट भारुमै तेल किन्ने भएकाले भारु-डलर भाउले असर गर्छ।', explanation: 'नेपाल आयल निगमले सम्पूर्ण इन्धन भारु भुक्तानी गरेर भारतबाट मात्र आयात गर्दछ।' },
        { mistake: 'नेपालमा ५०० का ठूला भारतीय नोटहरू जथाभावी बोकेर हिँड्नु।', correct: 'नेपालमा १०० वा सोभन्दा साना दरका भारु नोट मात्र खुला रूपमा चलाउन पाइन्छ।', explanation: 'ठूला भारु नोटहरू बिना आधिकारिक अनुमति बोक्नु विदेशी विनिमय कानुन अनुसार गैरकानुनी मानिन्छ।' }
      ],
      definitions: [
        { term: 'स्थिर विनिमय दर (Currency Peg)', full: 'मुद्रा आबद्धता', meaning: 'आफ्नो देशको मुद्राको मूल्य अर्को देशको मुद्रासँग निश्चित अनुपातमा स्थायी रूपमा बाँध्ने मौद्रिक व्यवस्था।' },
        { term: 'आयातित मुद्रास्फीति (Imported Inflation)', full: 'विदेशी महँगीको असर', meaning: 'आयात गरिने कच्चा पदार्थ र खाद्यान्नको मूल्य विदेशमै बढेका कारण स्वदेशी बजारमा हुने मूल्यवृद्धि।' },
        { term: 'भारतीय रिजर्भ बैंक (RBI)', full: 'Reserve Bank of India', meaning: 'भारतको केन्द्रीय बैंक जसको मौद्रिक निर्णयले नेपाल राष्ट्र बैंकका नीतिहरूलाई प्रत्यक्ष प्रभाव पार्छ।' },
        { term: 'इन्डियन आयल कर्पोरेसन (IOC)', full: 'Indian Oil Corporation', meaning: 'नेपाल आयल निगमलाई सम्पूर्ण प्रशोधित पेट्रोलियम पदार्थ बिक्री गर्ने भारत सरकारको आधिकारिक कम्पनी।' }
      ],
      faqs: [
        { q: 'नेपालमा १ भारु = १.६० नेरुको दर कहिले कायम गरिएको थियो?', a: 'यो दर आधिकारिक रूपमा २०४९ साल फागुन १ गते (फेब्रुअरी १२, १९९३) मा तत्कालीन प्रधानमन्त्री गिरिजाप्रसाद कोइरालाको आर्थिक उदारीकरणको समयमा कायम गरिएको थियो।' },
        { q: 'के नेपाल आफैंले यो स्थिर दर परिवर्तन गर्न सक्छ?', a: 'सक्छ। विनिमय दर निर्धारण नेपाल राष्ट्र बैंक र नेपाल सरकारको सार्वभौम अधिकार हो, तर यसलाई हेरफेर गर्दा आउने ठूलो आर्थिक प्रभावका कारण द्विपक्षीय तयारी आवश्यक पर्छ।' },
        { q: 'नेपालका सीमावर्ती सहरहरूमा भारतीय रुपैयाँ किन सजिलै चल्छ?', a: 'खुला सिमाना, पारिवारिक सम्बन्ध, र ठूलो व्यापारिक निर्भरताका कारण तराईका बजारहरूमा १०० दरसम्मका भारतीय नोटहरू नेरु सरह कारोबारमा स्वीकार गरिन्छन्।' }
      ],
      takeaways: [
        '१ भारु = १.६० नेरुको स्थिर दरले २०४९ सालदेखि नेपालको मूल्य स्थिरतालाई धानेको छ।',
        'नेपालको ६५% आयात र शतप्रतिशत पेट्रोलियम इन्धन भारतमै निर्भर छ।',
        'स्थिर दरले मुद्राको जोखिम हटाए पनि भारतको महँगी सिधै नेपाल भित्र्याउँछ।',
        'पुँजी पलायन रोक्न नेपाल राष्ट्र बैंकले भारतीय केन्द्रीय बैंक (RBI) को नीतिलाई नजिकबाट पछ्याउनुपर्छ।',
        'निर्यात बलियो नभई विनिमय दर खुला छाड्दा नेपाली रुपैयाँ कमजोर भई चरम महँगी निम्तिन सक्छ।'
      ]
    }
  },

  // ── K5. DECODING NEPAL FEDERAL BUDGET (JESTHA 15) ─────────────────
  'decoding-nepal-federal-budget-jestha-15': {
    id: 'econ-federal-budget-jestha-15',
    slug: 'decoding-nepal-federal-budget-jestha-15',
    categorySlug: 'economics',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Constitution of Nepal (Article 119) & Ministry of Finance Budget Statements', np: 'नेपालको संविधान (धारा ११९) तथा अर्थ मन्त्रालयको बजेट वक्तव्य अनुसार समीक्षित' },
    prerequisites: { en: 'Basic understanding of government taxes and public expenditures', np: 'सरकारी कर र सार्वजनिक खर्चको सामान्य जानकारी' },
    en: {
      title: 'Decoding Nepal\'s Federal Budget on Jestha 15: The Citizen\'s Financial Guide',
      oneLineSummary: 'Understand the constitutional Jestha 15 budget: Recurrent vs Capital spending, fiscal deficit, and the annual "Asar Spree".',
      summaryPoints: [
        'Article 119 of the Constitution of Nepal mandates the Finance Minister to present the Federal Budget annually on Jestha 15.',
        'Total budget expenditure is divided into three buckets: Recurrent (चालु खर्च), Capital (पुँजीगत खर्च), and Financial Management (वित्तीय व्यवस्था).',
        'Recurrent expenditure (salaries, pensions, government administration) routinely swallows over 60% of total revenue.',
        'Capital expenditure (roads, hydro, bridges, airports) suffers chronic delays, with 40%+ spent in a chaotic rush during the final month of Asar.',
        'Tracking the Finance Bill (आर्थिक विधेयक) reveals immediate excise duty hikes, income tax bracket revisions, and customs tariffs affecting your wallet.'
      ],
      whatIsThis: 'Nepal\'s Federal Budget (संघीय बजेट) is the annual constitutional statement of estimated state revenue and expenditure presented by the Finance Minister to the Federal Parliament on Jestha 15 (late May). Accompanying the budget speech are the Appropriation Bill (खर्च विनियोजन) and the Finance Bill (आर्थिक ऐन), which enacts all tax changes.',
      whyItMatters: 'Jestha 15 instantly changes the prices of everyday goods in Nepal. If the Finance Bill hikes excise duty on electric vehicles (EVs), alcohol, or mobile phones, prices surge at midnight. Furthermore, because government capital spending injects liquidity into the banking system, understanding the budget cycle explains why interest rates and stock market liquidity tighten in winter and surge in Asar.',
      howItWorks: [
        { step: 1, title: 'Analyze the Revenue Estimates (Where Money Comes From)', desc: 'Inspect projections for customs duty (भन्सार), VAT, income tax, non-tax revenue, foreign grants, and internal/external debt financing.' },
        { step: 2, title: 'Inspect Recurrent vs Capital Allocation (Where Money Goes)', desc: 'Check the split: Healthy developing nations spend heavily on Capital expenditure (infrastructure). Nepal often allocates over 60% to Recurrent overhead (salaries & pensions).' },
        { step: 3, title: 'Evaluate the Fiscal Deficit & Debt Borrowing Target', desc: 'Calculate the gap between revenue and total expenditure. The government plugs this deficit by issuing Treasury Bills (internal debt) and taking concessional foreign loans.' },
        { step: 4, title: 'Track the "Asar Budget Spree" (असारको चटारो)', desc: 'Government ministries delay project tenders for 9 months, then frantically spend 35%-45% of their capital budget in the rainy month of Asar to prevent budget lapses, creating temporary liquidity floods.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Typical Structure of Nepal\'s Federal Budget (Hypothetical NPR 18 Kharba Outline)',
        headers: ['Budget Component', 'Statutory Purpose', 'Typical Share (%)', 'Economic Impact on Citizens'],
        rows: [
          ['Recurrent Expenditure (चालु खर्च)', 'Civil service salaries, pensions, administrative costs', '60% - 65%', 'Keeps govt running; zero direct asset creation'],
          ['Capital Expenditure (पुँजीगत खर्च)', 'Highways, bridges, transmission lines, hospitals', '18% - 24%', 'Drives job creation, GDP growth, and cement/steel sales'],
          ['Financial Management (वित्तीय व्यवस्था)', 'Repayment of domestic & foreign debt principal', '14% - 18%', 'Growing debt servicing reduces development funds'],
          ['Revenue Financing (राजस्व स्रोत)', 'VAT, Income Tax, Customs, Excise Duty', '65% - 70%', 'Tax hikes directly increase consumer prices'],
          ['Fiscal Deficit Borrowing', 'Internal T-bills & External multilateral loans', '30% - 35%', 'Excessive internal debt borrowing raises bank interest rates']
        ]
      },
      nepalContext: 'Prior to the 2015 Constitution, budgets in Nepal were perpetually delayed by political squabbling, often presented months into the fiscal year, paralyzing development. To fix this, Article 119(3) of the Constitution embedded a permanent fixed calendar date: Jestha 15. This allows 45 days of parliamentary debate before the new fiscal year begins on Shrawan 1. Despite this reform, procedural bureaucracy and land acquisition disputes still delay capital expenditure until the frantic month of Asar.',
      practicalScenario: {
        persona: 'Niraj, 29, equity research analyst in Kathmandu',
        income: 'NPR 70,000 / month salary',
        scenarioText: 'Niraj listened to the Jestha 15 budget announcement. The Finance Minister announced an NPR 18.6 Kharba budget with a 15% increase in capital spending and raised customs on imported steel.',
        solutionText: 'Niraj analyzed the Finance Bill immediately: he bought shares in domestic cement and steel companies that benefited from the import tariff protection. He also forecasted that the government\'s planned NPR 2.5 Kharba internal debt borrowing would suck liquidity from banks in the second quarter, so he locked in fixed deposit rates ahead of time.',
        metricHighlight: 'Anticipated sector winners and banking liquidity shifts from budget announcements'
      },
      formula: {
        name: 'Federal Fiscal Deficit Formula in Nepal',
        equation: '\\text{Fiscal Deficit} = (\\text{Recurrent} + \\text{Capital} + \\text{Financial Management}) - (\\text{Total Revenue} + \\text{Foreign Grants})',
        variables: [
          { symbol: '\\text{Total Revenue}', name: 'Domestic Tax & Non-Tax Receipts', desc: 'Customs, VAT, income tax, dividends from state enterprises.' },
          { symbol: '\\text{Fiscal Deficit}', name: 'Net Sovereign Borrowing Need', desc: 'Financed via Internal Debt (T-bills/Bonds) + External Concessional Debt.' }
        ],
        exampleCalculation: 'Total Budget = NPR 18,00,000 Crore. Revenue + Grants = NPR 13,00,000 Crore. Fiscal Deficit = 18,00,000 - 13,00,000 = NPR 5,00,000 Crore (NPR 5 Kharba). This NPR 5 Kharba deficit must be borrowed from banks and multilateral donors, impacting money supply!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Income Tax Slabs'
      },
      commonMistakes: [
        { mistake: 'Focusing only on the headline budget size without checking actual past expenditure execution.', correct: 'Always compare initial budget targets against the revised actual spending (संशोधित अनुमान).', explanation: 'Governments routinely announce ambitious 18 Kharba budgets but end up executing only 14-15 Kharba.' },
        { mistake: 'Ignoring the Finance Bill (आर्थिक विधेयक) which takes effect immediately on Jestha 15 midnight.', correct: 'Read the Finance Bill tables for changes to excise duties, customs, and individual tax rebates.', explanation: 'While the main budget requires parliamentary debate, tax changes in the Finance Bill take effect immediately.' },
        { mistake: 'Surprised by sudden banking liquidity floods in Asar.', correct: 'Anticipate that government departments dump unspent funds in Asar, temporarily inflating bank deposits.', explanation: 'This annual artificial liquidity surge often reverses quickly in Shrawan as the new fiscal year begins.' }
      ],
      definitions: [
        { term: 'Federal Budget', full: 'संघीय बजेट (आयव्ययको विवरण)', meaning: 'The constitutional annual statement of government revenue and expenditure presented on Jestha 15.' },
        { term: 'Recurrent Expenditure', full: 'चालु खर्च', meaning: 'Government spending on recurring administrative needs: civil servant salaries, pensions, office supplies, and social allowances.' },
        { term: 'Capital Expenditure', full: 'पुँजीगत खर्च', meaning: 'State expenditure on durable physical infrastructure that creates long-term productive assets (roads, hydro, bridges).' },
        { term: 'Asar Spree', full: 'असारको बजेट सक्ने चटारो', meaning: 'The rushed, end-of-year public spending phenomenon in the final month of the Nepali fiscal year.' }
      ],
      faqs: [
        { q: 'Why is Nepal\'s Federal Budget presented specifically on Jestha 15?', a: 'Article 119(3) of the Constitution of Nepal 2072 constitutionally fixed Jestha 15 as the permanent presentation date to ensure the budget is passed before the fiscal year begins on Shrawan 1.' },
        { q: 'What is the difference between the Appropriation Bill and the Finance Bill?', a: 'The Appropriation Bill (विनियोजन विधेयक) authorizes the government to spend money from the consolidated fund, while the Finance Bill (आर्थिक विधेयक) introduces new taxes, customs duties, and tariff changes.' },
        { q: 'Why is capital expenditure execution notoriously low in Nepal?', a: 'Structural bottlenecks include delayed budget transfers, bureaucratic procurement delays, land acquisition disputes, tree-cutting approvals from forest ministries, and contractor non-performance.' }
      ],
      takeaways: [
        'Constitutionally mandated on Jestha 15, the budget sets the economic rules for the upcoming year.',
        'Tax changes in the Finance Bill take effect immediately at midnight on budget day.',
        'Recurrent expenditure (salaries/pensions) swallows over 60% of total government revenue.',
        'Capital expenditure drives infrastructure and job creation but suffers chronic delays until Asar.',
        'A large fiscal deficit means heavy government borrowing, impacting bank liquidity and interest rates.'
      ]
    },
    np: {
      title: 'नेपालको संघीय बजेट (जेठ १५) विश्लेषण: नागरिकका लागि बजेट बुझ्ने सजिलो तरिका',
      oneLineSummary: 'नेपालको संविधान अनुसार जेठ १५ मा आउने बजेट: चालु खर्च, पुँजीगत खर्च, वित्तीय घाटा, र "असारको चटारो" को आर्थिक प्रभाव बुझ्नुहोस्।',
      summaryPoints: [
        'नेपालको संविधानको धारा ११९ अनुसार अर्थमन्त्रीले हरेक वर्ष जेठ १५ गते संघीय संसदमा वार्षिक बजेट पेश गर्नुपर्ने संवैधानिक बाध्यता छ।',
        'कुल सरकारी खर्चलाई तीन भागमा बाँडिन्छ: चालु खर्च (प्रशासनिक), पुँजीगत खर्च (पूर्वाधार), र वित्तीय व्यवस्था (ऋणको साँवा भुक्तानी)।',
        'चालु खर्च (कर्मचारी तलब, पेन्सन, कार्यालय खर्च) ले राज्यको कुल राजस्वको ६०% भन्दा बढी हिस्सा निल्ने गर्छ।',
        'पुँजीगत खर्च (सडक, पुल, जलविद्युत) समयमै खर्च हुन सक्दैन र अन्तिम महिना असारमा हतार-हतार ४०% सम्म बजेट सक्ने चटारो हुन्छ।',
        'बजेटसँगै आउने आर्थिक विधेयक (Finance Bill) ले भन्सार, अन्तःशुल्क र आयकरका दरहरू तुरुन्तै परिवर्तन गर्छ जसले बजार भाउ बढाउँछ।'
      ],
      whatIsThis: 'संघीय बजेट (Federal Budget) भनेको नेपाल सरकारको आगामी आर्थिक वर्षको अनुमानित आम्दानी (राजस्व तथा ऋण) र खर्चको संवैधानिक विवरण हो, जुन अर्थमन्त्रीले हरेक वर्षको जेठ १५ गते संघीय संसदमा पेश गर्छन्। यससँगै खर्च गर्ने अधिकार दिने "विनियोजन विधेयक" र नयाँ कर उठाउने अधिकार दिने "आर्थिक विधेयक" संसदमा पेश गरिन्छ।',
      whyItMatters: 'जेठ १५ गतेको बजेट भाषणले भोलिपल्ट बिहानैदेखि तपाईंको दैनिक जीवन र खर्चमा सिधा असर पार्छ। यदि बजेटले गाडी, रक्सी, मोबाइल वा विद्युतीय साधनमा अन्तःशुल्क बढायो भने मध्यरातदेखि नै बजार भाउ बढ्छ। साथै, सरकारको पुँजीगत खर्चले बजारमा पैसा पठाउने भएकाले हिउँदमा बैंकिङ तरलता सुक्ने र असारमा पैसा ओइरिने चक्र बुझ्न बजेटको जानकारी हुनु आवश्यक छ।',
      howItWorks: [
        { step: 1, title: 'राजस्वको स्रोत हेर्नुहोस् (पैसा कहाँबाट आउँछ)', desc: 'भन्सार महसुल, भ्याट, आयकर, अन्तःशुल्क, गैर-कर राजस्व, वैदेशिक अनुदान र नपुग रकम आन्तरिक तथा बाह्य ऋणबाट उठाउने अनुमान जाँच्नुहोस्।' },
        { step: 2, title: 'चालु र पुँजीगत खर्चको बाँडफाँट हेर्नुहोस्', desc: 'विकासशील देशमा पुँजीगत खर्च धेरै हुनुपर्छ। तर नेपालमा ६०% भन्दा बढी रकम चालु खर्च (तलब, पेन्सन, भत्ता) मै सकिन्छ र पूर्वाधारमा थोरै बजेट छुट्याइन्छ।' },
        { step: 3, title: 'वित्तीय घाटा (Fiscal Deficit) र ऋणको भार', desc: 'कुल खर्च र राजस्व बीचको अन्तर नै वित्तीय घाटा हो। यो घाटा पूर्ति गर्न सरकारले ट्रेजरी बिलमार्फत बैंकहरूबाट आन्तरिक ऋण र विदेशी दातृ निकायबाट सहुलियतपूर्ण ऋण लिन्छ।' },
        { step: 4, title: 'असारको बजेट सक्ने चटारो (Asar Spree)', desc: 'मन्त्रालयहरूले ९ महिनासम्म काम नगरी असार लागेपछि बजेट फ्रिज हुन नदिन हतार-हतार ३५-४०% बजेट खर्च गर्छन्, जसले गर्दा असारमा बैंकहरूमा अचानक तरलता बढ्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालको संघीय बजेटको सामान्य संरचना (काल्पनिक रु. १८ खर्बको बजेट ढाँचा)',
        headers: ['बजेटको मुख्य शीर्षक', 'संवैधानिक तथा कानुनी प्रयोजन', 'कुल बजेटमा सामान्य हिस्सा (%)', 'नागरिकमा पर्ने प्रत्यक्ष आर्थिक असर'],
        rows: [
          ['चालु खर्च (Recurrent)', 'कर्मचारी तलब, पेन्सन, मन्त्रालय प्रशासन खर्च', '६०% देखि ६५%', 'सरकार सञ्चालन हुन्छ तर नयाँ भौतिक सम्पत्ति बन्दैन'],
          ['पुँजीगत खर्च (Capital)', 'सडक, पुल, प्रसारण लाइन, विमानस्थल, अस्पताल', '१८% देखि २४%', 'रोजगारी सिर्जना, सिमेन्ट-छड बिक्री, र आर्थिक वृद्धि'],
          ['वित्तीय व्यवस्था (Financing)', 'विगतका आन्तरिक र बाह्य ऋणको साँवा-ब्याज फिर्ता', '१४% देखि १८%', 'ऋणको दायित्व बढ्दा विकास खर्चको बजेट खुम्चिन्छ'],
          ['राजस्व संकलन (Revenue)', 'भ्याट, भन्सार, आयकर, र अन्तःशुल्क', '६५% देखि ७०%', 'करका दरहरू बढ्दा बजारका उपभोग्य सामान महँगिन्छन्'],
          ['वित्तीय घाटा (ऋण परिचालन)', 'ट्रेजरी बिल, विकास ऋणपत्र र वैदेशिक ऋण', '३०% देखि ३५%', 'सरकारले बढी आन्तरिक ऋण उठाउँदा बैंकमा ब्याज बढ्छ']
        ]
      },
      nepalContext: '२०७२ को नयाँ संविधान आउनुअघि राजनीतिक खिचातानीका कारण असार वा साउन कटिसक्दा पनि बजेट आउँदैनथ्यो जसले गर्दा विकास निर्माण ठप्प हुन्थ्यो। यो समस्या समाधान गर्न संविधानको धारा ११९(३) मा "हरेक वर्षको जेठ १५ गते" बजेट पेश गर्नैपर्ने स्थायी संवैधानिक मिति तोकियो। यसले गर्दा साउन १ गते नयाँ आर्थिक वर्ष सुरु हुनुअघि नै संसदमा ४५ दिन छलफल गर्न पाइन्छ। तर पनि सरकारी प्रक्रियागत ढिलाइका कारण असारमै बजेट सक्ने विकृति अझै हट्न सकेको छैन।',
      practicalScenario: {
        persona: 'निरज, २९, काठमाडौँका सेयर विश्लेषक',
        income: 'मासिक तलब रु. ७०,०००',
        scenarioText: 'निरजले जेठ १५ को बजेट भाषण सुने। अर्थमन्त्रीले १८.६ खर्बको बजेट घोषणा गर्दै स्वदेशी उद्योगलाई संरक्षण गर्न विदेशी स्टिल आयातमा भन्सार बढाएको र पुँजीगत खर्च १५% बढाएको बताए।',
        solutionText: 'निरजले तत्काल आर्थिक विधेयक पढे: उनले आयातित स्टिल महँगिँदा नाफा कमाउने स्वदेशी सिमेन्ट र स्टिल कम्पनीहरूको सेयर किने। साथै सरकारले साढे २ खर्ब आन्तरिक ऋण उठाउने भएकाले बैंकमा तरलता कसिने अनुमान गरी उनले मुद्दती निक्षेपको उच्च ब्याज समयमै सुरक्षित गरे।',
        metricHighlight: 'बजेटका प्रावधानहरू विश्लेषण गरेर सेयर र मुद्दतीबाट दोहोरो फाइदा लिए'
      },
      formula: {
        name: 'संघीय बजेट वित्तीय घाटा सूत्र',
        equation: '\\text{Fiscal Deficit} = (\\text{Recurrent} + \\text{Capital} + \\text{Financial Management}) - (\\text{Total Revenue} + \\text{Foreign Grants})',
        variables: [
          { symbol: '\\text{Total Revenue}', name: 'कुल राजस्व र अनुदान', desc: 'कर, गैर-कर राजस्व र विदेशी दातृ निकायबाट आउने अनुदान।' },
          { symbol: '\\text{Fiscal Deficit}', name: 'खुद वित्तीय घाटा', desc: 'अपुग रकम जुन आन्तरिक र बाह्य ऋणमार्फत उठाइन्छ।' }
        ],
        exampleCalculation: 'कुल बजेट = रु. १८,००,००० करोड। कुल राजस्व = रु. १३,००,००० करोड। वित्तीय घाटा = १८,००,००० - १३,००,००० = रु. ५,००,००० करोड (५ खर्ब रुपैयाँ)। यो ५ खर्ब नपुग रकम सरकारले ट्रेजरी बिल र विदेशी ऋणबाट जोहो गर्नुपर्छ जसले मुद्रा आपूर्तिमा असर पार्छ!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'आयकर स्ल्याब हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'बजेटको सुरुवाती कुल आकार मात्र हेरेर वास्तविक विकास हुन्छ भन्ठान्नु।', correct: 'सधैँ सुरुवाती लक्ष्य र आर्थिक वर्षको अन्त्यमा भएको वास्तविक खर्च (संशोधित अनुमान) दाँज्नुहोस्।', explanation: 'सरकारले १८ खर्बको बजेट ल्याए पनि वर्षको अन्त्यमा १४-१५ खर्ब मात्र खर्च गर्न सक्छ।' },
        { mistake: 'जेठ १५ को मध्यरातदेखि नै लागू हुने आर्थिक विधेयकका कर परिवर्तनहरू ख्याल नगर्नु।', correct: 'बजेट भाषण लगत्तै आर्थिक विधेयक पढेर कुन-कुन सामानमा भन्सार र अन्तःशुल्क बढ्यो हेर्नुहोस्।', explanation: 'बजेट पास हुन समय लागे पनि नयाँ करका दरहरू जेठ १५ को राति १२ बजेदेखि नै लागू हुन्छन्।' },
        { mistake: 'असार महिनामा बैंकमा अचानक पैसा थुप्रिएको देखेर सधैँ यस्तै रहन्छ सोच्नु।', correct: 'असारको सरकारी खर्चले सिर्जना गरेको अस्थायी तरलता साउन लागेपछि घट्न सक्छ भनी बुझ्नुहोस्।', explanation: 'असारमा मन्त्रालयहरूले बजेट सक्न जथाभावी पैसा भुक्तानी गर्दा बैंकिङ प्रणालीमा अस्थायी बाढी आउँछ।' }
      ],
      definitions: [
        { term: 'संघीय बजेट', full: 'वार्षिक आयव्यय विवरण', meaning: 'नेपाल सरकारको वर्षभरिको आम्दानी र खर्चको संवैधानिक लेखाजोखा, जुन जेठ १५ मा संसदमा पेश हुन्छ।' },
        { term: 'चालु खर्च (Recurrent)', full: 'प्रशासनिक सञ्चालन खर्च', meaning: 'सरकार चलाउन लाग्ने नियमित खर्च: कर्मचारीको तलब, निवृत्तिभरण (पेन्सन), र दैनिक प्रशासनिक खर्च।' },
        { term: 'पुँजीगत खर्च (Capital)', full: 'विकास तथा पूर्वाधार खर्च', meaning: 'देशमा दीर्घकालीन भौतिक सम्पत्ति निर्माण गर्न गरिने खर्च: सडक, पुल, जलविद्युत र विमानस्थल।' },
        { term: 'असारको चटारो (Asar Spree)', full: 'अन्तिम महिनाको हतारको खर्च', meaning: 'आर्थिक वर्षको अन्तिम महिना असारमा बजेट फ्रिज हुन नदिन गरिने हतारको भुक्तानी प्रवृत्ति।' }
      ],
      faqs: [
        { q: 'नेपालमा संघीय बजेट जेठ १५ मै किन आउँछ?', a: 'नेपालको संविधान २०७२ को धारा ११९(३) ले जेठ १५ गतेलाई स्थायी संवैधानिक मिति तोकेको छ ताकि साउन १ गते नयाँ आर्थिक वर्ष सुरु हुनुअगावै संसदबाट बजेट पारित हुन सकोस्।' },
        { q: 'विनियोजन विधेयक र आर्थिक विधेयकमा के फरक छ?', a: 'विनियोजन विधेयक (Appropriation Bill) ले सरकारलाई विभिन्न मन्त्रालयमार्फत बजेट खर्च गर्ने अधिकार दिन्छ भने आर्थिक विधेयक (Finance Bill) ले नयाँ कर, भन्सार र महसुल उठाउने अधिकार दिन्छ।' },
        { q: 'नेपालमा पुँजीगत (विकास) खर्च किन समयमै हुन सक्दैन?', a: 'ठेक्का प्रक्रियामा ढिलाइ, जग्गा मुआब्जा विवाद, वन मन्त्रालयबाट रुख कटानको स्वीकृतिमा ढिलाइ, र निर्माण व्यवसायीहरूको ढिलासुस्तीका कारण विकास खर्च समयमै हुन सक्दैन।' }
      ],
      takeaways: [
        'संवैधानिक रूपमा जेठ १५ मा आउने बजेटले देशको आगामी वर्षको सम्पूर्ण आर्थिक दिशा तय गर्छ।',
        'आर्थिक विधेयकमा भएका कर परिवर्तनहरू जेठ १५ को मध्यरातदेखि नै तुरुन्त लागू हुन्छन्।',
        'चालु खर्च (तलब र पेन्सन) ले सरकारको कुल राजस्वको ६०% भन्दा बढी भाग खान्छ।',
        'पुँजीगत खर्चले पूर्वाधार निर्माण र रोजगारी दिन्छ तर असार महिनामा मात्र हतारमा खर्च हुने समस्या छ।',
        'ठूलो वित्तीय घाटा हुँदा सरकारले बढी ऋण उठाउँछ जसले बैंकको तरलता र ब्याजदरमा चाप पार्छ।'
      ]
    }
  },

  // ── K6. INTERNAL VS EXTERNAL SOVEREIGN DEBT ──────────────────────
  'internal-external-debt-nepal-gdp': {
    id: 'econ-internal-external-debt',
    slug: 'internal-external-debt-nepal-gdp',
    categorySlug: 'economics',
    difficulty: { en: 'Advanced', np: 'उन्नत' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Public Debt Management Office (PDMO) Annual Reports FY 2081/82', np: 'सार्वजनिक ऋण व्यवस्थापन कार्यालय (PDMO) वार्षिक प्रतिवेदन २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of GDP and sovereign borrowing', np: 'कुल गार्हस्थ्य उत्पादन (GDP) र सार्वजनिक ऋणको आधारभूत ज्ञान' },
    en: {
      title: 'Internal vs External Debt in Nepal: Is the Country Headed for a Debt Trap?',
      oneLineSummary: 'Analyze Nepal\'s ~43% Debt-to-GDP ratio - comparing domestic Treasury Bills against concessional World Bank/ADB foreign loans.',
      summaryPoints: [
        'Nepal\'s total public debt stands at roughly 42% to 45% of GDP, divided almost equally between internal and external debt.',
        'Internal debt (आन्तरिक ऋण) is raised in NPR from domestic commercial banks via Treasury Bills, Development Bonds, and Citizen Saving Bonds.',
        'External debt (बाह्य ऋण) consists almost exclusively of multilateral concessional loans (World Bank, ADB, JICA) at ultra-low interest (1%-1.5%) over 30-40 years.',
        'Nepal holds almost ZERO commercial sovereign bonds or high-interest Eurobonds, protecting it from Sri Lanka-style sovereign default crises.',
        'The real fiscal threat is debt servicing costs: repaying principal and interest now consumes over 15% of the total national budget.'
      ],
      whatIsThis: 'Public Debt (सार्वजनिक ऋण) is the cumulative total amount of money borrowed by the Government of Nepal through the Public Debt Management Office (PDMO) to finance infrastructure deficits and budget shortfalls. It is divided into Internal Debt (owed to domestic banks and citizens in NPR) and External Debt (owed to foreign governments and multilateral institutions in foreign currency).',
      whyItMatters: ' sensationalist headlines frequently claim: "Every Nepali newborn carries NPR 80,000 in national debt, Nepal will become the next Sri Lanka!" In reality, Nepal\'s external debt structure is completely different: Sri Lanka defaulted because it borrowed billions in commercial high-interest sovereign Eurobonds with short maturities. Nepal borrows at 1% interest with 30-year grace periods from the World Bank. Understanding debt composition prevents panic and reveals true fiscal realities.',
      howItWorks: [
        { step: 1, title: 'Issuance of Domestic Debt Instruments (PDMO & NRB)', desc: 'The government issues short-term Treasury Bills (91, 182, 364 days) and long-term Development Bonds (5-15 years) auctioned to domestic commercial banks at market yields.' },
        { step: 2, title: 'Mobilization of Multilateral Concessional Loans', desc: 'Agreements signed with the International Development Association (World Bank) and Asian Development Bank (ADB) disburse funds in USD/SDR at 0.75%-1.5% interest with 30 to 40-year repayment horizons.' },
        { step: 3, title: 'Debt Servicing Through the Annual Budget', desc: 'Each fiscal year, the Ministry of Finance allocates funds under "Financial Management" to service debt: paying interest to domestic banks and foreign creditors.' },
        { step: 4, title: 'Monitoring the Debt-to-GDP Sustainability Ceiling', desc: 'Economists and the IMF evaluate sustainability: keeping Debt-to-GDP below 50% ensures the sovereign balance sheet remains stable and solvent.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Structure of Nepal\'s Sovereign Public Debt (FY 2081/82)',
        headers: ['Debt Category', 'Primary Creditors / Holders', 'Currency & Interest Terms', 'Risk Profile for Nepal'],
        rows: [
          ['Internal Debt (~50% of total)', 'Nepali Commercial Banks, EPF, CIT', 'NPR currency; Market rates (4%-9%)', 'Zero currency risk; Crowds out private credit if excessive'],
          ['External Multilateral (~45%)', 'World Bank (IDA), ADB', 'USD/SDR; Concessional (1%-1.5%, 30-40 yrs)', 'High forex exchange risk if NPR depreciates; very low interest'],
          ['External Bilateral (~5%)', 'Japan (JICA), India (Exim Bank), China', 'Yen, INR, USD; Concessional terms', 'Project-tied loans with diplomatic conditionalities'],
          ['Commercial Sovereign Bonds', 'International hedge funds & Eurobonds', 'Nepal has ZERO commercial Eurobonds', 'Protected from sudden international sovereign default runs']
        ]
      },
      nepalContext: 'In 2019, the Government of Nepal unified public debt administration by establishing the independent Public Debt Management Office (PDMO - सार्वजनिक ऋण व्यवस्थापन कार्यालय). While Nepal\'s Debt-to-GDP ratio was below 25% prior to the 2015 earthquake, heavy reconstruction spending and federal governance restructuring pushed the ratio past 43% by 2024. Despite this increase, the IMF and World Bank Debt Sustainability Analysis (DSA) rate Nepal\'s risk of external debt distress as "LOW".',
      practicalScenario: {
        persona: 'Sita, 37, high school economics teacher in Pokhara',
        income: 'NPR 58,000 / month salary',
        scenarioText: 'Sita saw social media posts claiming Nepal was collapsing into bankruptcy like Sri Lanka because national debt had crossed NPR 24 Kharba. Her students were frightened about the economic future.',
        solutionText: 'Sita pulled up the official PDMO report. She demonstrated to her class that Sri Lanka crashed because 45% of its debt was high-interest commercial Eurobonds due immediately in USD, while Nepal had zero Eurobonds and paid an average of just 1.2% interest on long-term World Bank loans. She explained that while Nepal must control administrative waste, its sovereign solvency is secure.',
        metricHighlight: 'Used empirical PDMO data to debunk Sri Lanka debt-trap comparisons'
      },
      formula: {
        name: 'Sovereign Debt-to-GDP Ratio Formula',
        equation: '\\text{Debt-to-GDP Ratio} = \\left( \\frac{\\text{Internal Debt} + \\text{External Debt}}{\\text{Nominal Annual GDP}} \\right) \\times 100\\%',
        variables: [
          { symbol: '\\text{Internal Debt}', name: 'Domestic Borrowing in NPR', desc: 'T-bills + Development Bonds + Citizen Saving Bonds.' },
          { symbol: '\\text{External Debt}', name: 'Foreign Borrowing in NPR equivalent', desc: 'Multilateral & bilateral concessional loans converted at current exchange rates.' },
          { symbol: '\\text{Nominal GDP}', name: 'National Annual Economic Output', desc: 'Total market value of all goods and services produced in Nepal.' }
        ],
        exampleCalculation: 'Total Debt = NPR 24,34,000 Crore (NPR 24.34 Kharba). Nominal GDP = NPR 57,00,000 Crore (NPR 57 Kharba). Debt-to-GDP Ratio = (24.34 / 57.0) × 100% = 42.7%. This sits comfortably below the international emerging market caution ceiling of 60%!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Explore Macro Economics'
      },
      commonMistakes: [
        { mistake: 'Comparing Nepal\'s debt structure directly to Sri Lanka or Pakistan.', correct: 'Recognize that Nepal borrows almost exclusively on ultra-concessional terms from multilateral bodies.', explanation: 'Sri Lanka owed commercial bondholders at 7%-9% coupon rates; Nepal owes IDA/ADB at ~1% over 40 years.' },
        { mistake: 'Ignoring the exchange rate risk on external debt.', correct: 'Account for the fact that when the US Dollar appreciates against the NPR, our external debt burden expands automatically.', explanation: 'Even with low interest, a 10% fall in the Rupee adds tens of billions of NPR to foreign repayment principal.' },
        { mistake: 'Believing that internal debt carries zero economic cost.', correct: 'Excessive domestic borrowing by the government "crowds out" private businesses, pushing up bank loan rates.', explanation: 'When the government borrows heavily from commercial banks, less money remains available for private enterprise loans.' }
      ],
      definitions: [
        { term: 'Debt-to-GDP Ratio', full: 'ऋण र कुल गार्हस्थ्य उत्पादनको अनुपात', meaning: 'The metric comparing a country\'s total public debt to its annual economic output, indicating repayment capacity.' },
        { term: 'Concessional Loan', full: 'सहुलियतपूर्ण ऋण', meaning: 'Loans extended on terms substantially more generous than market loans, featuring below-market interest (1%) and long grace periods.' },
        { term: 'Debt Servicing', full: 'साँवा तथा ब्याज भुक्तानी', meaning: 'The annual cash required to pay back principal and interest on existing sovereign borrowings.' },
        { term: 'Crowding Out Effect', full: 'निजी कर्जा विस्थापन प्रभाव', meaning: 'When heavy government borrowing from domestic banks reduces the pool of funds available for private sector businesses.' }
      ],
      faqs: [
        { q: 'What is the current total public debt of Nepal?', a: 'As of FY 2081/82, Nepal\'s total sovereign public debt is approximately NPR 24.3 Kharba (around 42.7% of GDP), divided almost equally: ~NPR 12.0 Kharba internal and ~NPR 12.3 Kharba external.' },
        { q: 'Why is external debt in Nepal considered "safe" compared to other developing nations?', a: 'Because Nepal has never issued commercial Eurobonds. Over 88% of Nepal\'s external debt is owed to the World Bank and ADB on ultra-concessional terms with repayment schedules stretching over 30 to 40 years.' },
        { q: 'Can individual Nepali citizens buy government debt bonds?', a: 'Yes. Nepal Rastra Bank periodically issues Citizen Saving Bonds (नागरिक बचतपत्र) and Foreign Employment Saving Bonds (वैदेशिक रोजगार बचतपत्र) offering guaranteed, tax-friendly interest rates (typically 8%-10%).' }
      ],
      takeaways: [
        'Nepal\'s Debt-to-GDP ratio sits at ~43%, well within sustainable international safety benchmarks.',
        'External debt is held almost entirely as ultra-concessional loans from the World Bank and ADB at ~1% interest.',
        'Nepal has zero commercial Eurobonds, protecting it from Sri Lanka-style default crises.',
        'The main fiscal challenge is debt servicing, which consumes over 15% of the annual budget.',
        'Citizens can invest in guaranteed government Citizen Saving Bonds through NRB auctions.'
      ]
    },
    np: {
      title: 'नेपालमा आन्तरिक बनाम बाह्य सार्वजनिक ऋण: के नेपाल ऋणको पासोमा फस्दैछ?',
      oneLineSummary: 'नेपालको करिब ४३% ऋण-कुल गार्हस्थ्य उत्पादन (Debt-to-GDP) अनुपात: आन्तरिक ट्रेजरी बिल र विश्व बैंकको सहुलियतपूर्ण विदेशी ऋणको तुलना।',
      summaryPoints: [
        'नेपालको कुल सार्वजनिक ऋण देशको कुल गार्हस्थ्य उत्पादन (GDP) को करिब ४२% देखि ४५% हाराहारीमा छ, जुन आन्तरिक र बाह्य ऋणमा आधा-आधा बाँडिएको छ।',
        'आन्तरिक ऋण नेपाल सरकारले ट्रेजरी बिल र विकास ऋणपत्रमार्फत स्वदेशी बैंक तथा नागरिकहरूबाट नेपाली रुपैयाँमा उठाउँछ।',
        'बाह्य ऋण लगभग शतप्रतिशत विश्व बैंक र एसियाली विकास बैंक (ADB) बाट १% देखि १.५% को सस्तो ब्याजमा ३० देखि ४० वर्षका लागि लिइएको सहुलियतपूर्ण ऋण हो।',
        'नेपालले विदेशी बजारमा चर्को ब्याजका कमर्सियल सोभरेन बन्ड (Eurobond) जारी नगरेकाले श्रीलंका जस्तो अचानक टाट पल्टिने जोखिम छैन।',
        'मुख्य चुनौती ऋणको साँवा-ब्याज भुक्तानी (Debt Servicing) हो: जसले हाल वार्षिक बजेटको १५% भन्दा बढी रकम निलिरहेको छ।'
      ],
      whatIsThis: 'सार्वजनिक ऋण (Public Debt) भनेको नेपाल सरकारले विकास निर्माणका पूर्वाधार बनाउन र बजेटको वित्तीय घाटा पूर्ति गर्न सार्वजनिक ऋण व्यवस्थापन कार्यालय (PDMO) मार्फत लिएको कुल ऋण हो। यसलाई दुई भागमा विभाजन गरिन्छ: आन्तरिक ऋण (स्वदेशी बैंक र नागरिकसँग लिइएको) र बाह्य ऋण (विदेशी दातृ निकायसँग विदेशी मुद्रामा लिइएको)।',
      whyItMatters: 'सामाजिक सञ्जालमा प्रायः हल्ला फैलिन्छ: "नेपालमा जन्मिने हरेक बच्चाको टाउकोमा ८० हजार ऋण पुग्यो, नेपाल अब श्रीलंका जस्तै डुब्दैछ!" तर वास्तविकता धेरै फरक छ: श्रीलंका टाट पल्टिनुको कारण उसले विदेशी बजारबाट ७-९% को चर्को ब्याजमा छोटो अवधिको कमर्सियल बन्ड (Eurobond) लिएको थियो। नेपालले भने विश्व बैंकबाट १% ब्याजमा ४० वर्षका लागि सहुलियतपूर्ण ऋण लिएको छ। ऋणको सही संरचना बुझ्दा अनावश्यक त्रासबाट बच्न सकिन्छ।',
      howItWorks: [
        { step: 1, title: 'आन्तरिक ऋणको निष्कासन (ट्रेजरी बिल र ऋणपत्र)', desc: 'नेपाल सरकारले राष्ट्र बैंकमार्फत अल्पकालीन ट्रेजरी बिल (९१, १८२, ३६४ दिने) र दीर्घकालीन विकास ऋणपत्र (५-१५ वर्षे) स्वदेशी वाणिज्य बैंकहरूलाई लिलामी गर्छ।' },
        { step: 2, title: 'अन्तर्राष्ट्रिय सहुलियतपूर्ण बाह्य ऋण परिचालन', desc: 'विश्व बैंक र एसियाली विकास बैंक (ADB) सँग सम्झौता गरी ०.७५% देखि १.५% सम्मको न्यून ब्याजदरमा ३० देखि ४० वर्षे अवधिका लागि डलरमा ऋण भित्रिन्छ।' },
        { step: 3, title: 'वार्षिक बजेटबाट साँवा-ब्याज फिर्ता (Debt Servicing)', desc: 'हरेक वर्ष अर्थ मन्त्रालयले बजेटको "वित्तीय व्यवस्था" शीर्षकबाट स्वदेशी बैंकहरू र विदेशी दातृ निकायलाई नियमित रूपमा साँवा र ब्याज भुक्तानी गर्छ।' },
        { step: 4, title: 'ऋण र GDP को दिगोपन अनुगमन', desc: 'अर्थशास्त्री र अन्तर्राष्ट्रिय मुद्रा कोष (IMF) ले ऋणको अनुपात ५०-६०% भन्दा तल रहेसम्म देशको अर्थतन्त्र सुरक्षित रहेको मान्छन्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालको सार्वजनिक ऋणको वास्तविक संरचना (आव २०८१/८२)',
        headers: ['ऋणको प्रकार', 'मुख्य ऋणदाताहरू', 'मुद्रा र ब्याजका सर्तहरू', 'नेपालको अर्थतन्त्रमा जोखिम स्तर'],
        rows: [
          ['आन्तरिक ऋण (कुलको करिब ५०%)', 'नेपाली वाणिज्य बैंक, सञ्चय कोष, नागरिक', 'नेपाली रुपैयाँ; बजार दर (४%-९% ब्याज)', 'मुद्रा जोखिम शून्य; तर धेरै उठाउँदा निजी कर्जा खुम्चिने'],
          ['बहुपक्षीय बाह्य ऋण (करिब ४५%)', 'विश्व बैंक (IDA), एसियाली विकास बैंक', 'डलर/SDR; १%-१.५% सहुलियत दर (३०-४० वर्ष)', 'डलर महँगिँदा ऋणको भार बढ्ने; ब्याज एकदमै सस्तो'],
          ['द्विपक्षीय बाह्य ऋण (करिब ५%)', 'जापान (JICA), भारत (Exim), चीन', 'येन, भारु, डलर; सहुलियतपूर्ण दर', 'कूटनीतिक सर्त र निश्चित परियोजनामा मात्र सीमित'],
          ['कमर्सियल सोभरेन बन्ड', 'अन्तर्राष्ट्रिय हेज फन्ड र युरोबन्ड', 'नेपालले शून्य (०) युरोबन्ड लिएको छ', 'श्रीलंका जस्तो अन्तर्राष्ट्रिय टाट पल्टिने खतराबाट सुरक्षित']
        ]
      },
      nepalContext: 'नेपाल सरकारले २०७५ सालमा ऋणको प्रभावकारी व्यवस्थापनका लागि छुट्टै "सार्वजनिक ऋण व्यवस्थापन कार्यालय" (PDMO) स्थापना गरेको छ। २०७२ को भूकम्पअघि नेपालको ऋण-GDP अनुपात २५% भन्दा तल थियो। भूकम्पपछिको पुनर्निर्माण र संघीयता कार्यान्वयनका कारण २०८१ सम्म आइपुग्दा यो अनुपात ४२.७% पुगेको छ। यद्यपि विश्व बैंक र IMF को पछिल्लो प्रतिवेदन अनुसार नेपालको बाह्य ऋण जोखिम अझै पनि "न्यून" (Low Risk) श्रेणीमै रहेको छ।',
      practicalScenario: {
        persona: 'सीता, ३७, पोखराकी माध्यमिक तहकी अर्थशास्त्र शिक्षिका',
        income: 'मासिक तलब रु. ५८,०००',
        scenarioText: 'सीताले सामाजिक सञ्जालमा नेपालको ऋण २४ खर्ब पुगेकाले देश श्रीलंका जस्तै बन्द हुन लागेको भन्दै विद्यार्थीहरू आतंकित भएको देखिन्।',
        solutionText: 'सीताले कक्षामा सार्वजनिक ऋण व्यवस्थापन कार्यालयको आधिकारिक प्रतिवेदन प्रस्तुत गरिन्। उनले बुझाइन् कि श्रीलंकाले चर्को ब्याजमा छोटो अवधिको विदेशी ऋण लिएको थियो भने नेपालको बाह्य ऋण विश्व बैंकको १% ब्याज भएको ४० वर्षे सहुलियतपूर्ण ऋण हो। उनले भनिन्: "ऋणको सदुपयोगमा प्रश्न उठाउनुपर्छ तर देश टाट पल्टिन लागेको हल्ला पूर्णतया गलत हो।" ',
        metricHighlight: 'तथ्यांक प्रस्तुत गरेर ऋणको पासो सम्बन्धी भ्रम निवारण गरिन्'
      },
      formula: {
        name: 'सार्वजनिक ऋण र GDP अनुपात सूत्र',
        equation: '\\text{Debt-to-GDP Ratio} = \\left( \\frac{\\text{Internal Debt} + \\text{External Debt}}{\\text{Nominal Annual GDP}} \\right) \\times 100\\%',
        variables: [
          { symbol: '\\text{Internal Debt}', name: 'कुल आन्तरिक ऋण (नेरु)', desc: 'ट्रेजरी बिल + विकास ऋणपत्र + नागरिक बचतपत्र।' },
          { symbol: '\\text{External Debt}', name: 'कुल बाह्य ऋण (नेरुमा)', desc: 'विदेशी दातृ निकायबाट लिइएको ऋणको प्रचलित दरमा नेपाली मूल्य।' },
          { symbol: '\\text{Nominal GDP}', name: 'कुल गार्हस्थ्य उत्पादन', desc: 'नेपालभित्र वर्षभरि उत्पादन हुने सम्पूर्ण वस्तु तथा सेवाको बजार मूल्य।' }
        ],
        exampleCalculation: 'कुल सार्वजनिक ऋण = रु. २४,३४,००० करोड (२४.३४ खर्ब)। कुल GDP = रु. ५७,००,००० करोड (५७ खर्ब)। ऋण-GDP अनुपात = (२४.३४ / ५७.०) × १००% = ४२.७%। यो अन्तर्राष्ट्रिय जोखिम सीमा (६०%) भन्दा निकै तल छ!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'आर्थिक सूचकहरू हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'नेपालको ऋणलाई श्रीलंका वा पाकिस्तानको ऋणसँग सिधै तुलना गर्नु।', correct: 'नेपालले विश्व बैंक र ADB बाट मात्र सस्तो सहुलियत ऋण लिन्छ भन्ने तथ्य बुझ्नुहोस्।', explanation: 'श्रीलंकाले निजी विदेशी लगानीकर्तासँग ८-९% ब्याजमा युरोबन्ड लिएको थियो जुन नेपालसँग शून्य छ।' },
        { mistake: 'विदेशी ऋणमा हुने विनिमय दरको जोखिम (Currency Risk) लाई बेवास्ता गर्नु।', correct: 'अमेरिकी डलर महँगिँदा नेपालले तिर्नुपर्ने विदेशी ऋणको साँवा आफैं बढ्छ भन्ने ख्याल गर्नुहोस्।', explanation: 'ब्याज सस्तो भए पनि डलरको भाउ १०% बढ्दा अर्बौं रुपैयाँ अतिरिक्त दायित्व थपिन्छ।' },
        { mistake: 'आन्तरिक ऋणको कुनै नकारात्मक असर हुँदैन भन्ठान्नु।', correct: 'सरकारले बैंकहरूबाट धेरै ऋण उठाउँदा निजी क्षेत्रका लागि कर्जाको अभाव (Crowding Out) हुन्छ।', explanation: 'सरकारले बैंकको पैसा ऋणपत्रमा तानेपछि सर्वसाधारण र उद्योगीले महँगो ब्याज तिर्नुपर्छ।' }
      ],
      definitions: [
        { term: 'ऋण-GDP अनुपात (Debt-to-GDP)', full: 'सार्वजनिक ऋण अनुपात', meaning: 'देशको कुल ऋणलाई वार्षिक कुल आम्दानी (GDP) सँग तुलना गरेर तिर्न सक्ने क्षमता देखाउने सूचक।' },
        { term: 'सहुलियतपूर्ण ऋण (Concessional Loan)', full: 'सस्तो दीर्घकालीन ऋण', meaning: 'बजार ब्याजदरभन्दा धेरै सस्तो (१% हाराहारी) र लामो भुक्तानी अवधि (३०-४० वर्ष) भएको विदेशी ऋण।' },
        { term: 'ऋण भुक्तानी (Debt Servicing)', full: 'साँवा तथा ब्याज फिर्ता', meaning: 'विगतमा लिएको ऋणको साँवा र ब्याज तिर्न हरेक वर्ष बजेटबाट गरिने अनिवार्य भुक्तानी।' },
        { term: 'क्राउडिङ आउट (Crowding Out)', full: 'निजी कर्जा संकुचन प्रभाव', meaning: 'सरकारले बैंकबाट धेरै ऋण उठाउँदा निजी व्यवसायीले ऋण नपाउने वा महँगो ब्याज तिर्नुपर्ने अवस्था।' }
      ],
      faqs: [
        { q: 'नेपालको हालको कुल सार्वजनिक ऋण कति पुगेको छ?', a: 'आव २०८१/८२ सम्म नेपालको कुल सार्वजनिक ऋण करिब २४.३ खर्ब रुपैयाँ पुगेको छ (GDP को करिब ४२.७%), जसमा आन्तरिक ऋण करिब १२.० खर्ब र बाह्य ऋण करिब १२.३ खर्ब रहेको छ।' },
        { q: 'नेपालको बाह्य ऋण अरू देशको भन्दा किन सुरक्षित मानिन्छ?', a: 'किनभने नेपालको बाह्य ऋणमध्ये ८८% भन्दा बढी विश्व बैंक र ADB को सहुलियतपूर्ण ऋण हो जसको ब्याज १% मात्र हुन्छ र तिर्ने अवधि ३० देखि ४० वर्षसम्म तन्किएको हुन्छ।' },
        { q: 'के साधारण नेपाली नागरिकले पनि सरकारी ऋणपत्र किन्न पाउँछन्?', a: 'पाउँछन्। नेपाल राष्ट्र बैंकले समय-समयमा निष्कासन गर्ने "नागरिक बचतपत्र" र "वैदेशिक रोजगार बचतपत्र" मा सर्वसाधारणले लगानी गरेर वार्षिक ८% देखि १०% सम्मको सुरक्षित सरकारी ब्याज पाउन सक्छन्।' }
      ],
      takeaways: [
        'नेपालको ऋण-GDP अनुपात ~४३% रहेको छ, जुन अन्तर्राष्ट्रिय सुरक्षा मापदण्डभित्रै पर्छ।',
        'नेपालको बाह्य ऋण विश्व बैंक र ADB बाट १% ब्याजमा लिइएको सहुलियतपूर्ण ऋण हो।',
        'नेपालसँग शून्य कमर्सियल युरोबन्ड रहेकाले श्रीलंका जस्तो आर्थिक टाट पल्टिने संकट छैन।',
        'मुख्य चुनौती ऋणको साँवा-ब्याज भुक्तानी हो जसले वार्षिक बजेटको १५% भन्दा बढी भाग लिन्छ।',
        'सर्वसाधारण नागरिकले राष्ट्र बैंकको नागरिक बचतपत्र किनेर सुरक्षित र उच्च ब्याज कमाउन सक्छन्।'
      ]
    }
  }

};

// BATCH M - RETIREMENT PLANNING (6 lessons)
// 1. cost-of-delay-retirement-nepal
// 2. calculating-retirement-corpus-nepal
// 3. social-security-fund-ssf-pension-model
// 4. citizen-investment-trust-cit-epf-nepal
// 5. 4-percent-rule-adapted-for-nepal
// 6. swp-mutual-fund-retirement-income-nepal

export const BATCH_M = {

  // ── M1. THE SHOCKING COST OF DELAYING RETIREMENT SAVINGS ─────────
  'cost-of-delay-retirement-nepal': {
    id: 'ret-cost-of-delay',
    slug: 'cost-of-delay-retirement-nepal',
    categorySlug: 'retirement-planning',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Actuarial Compound Growth & Retirement Planning Standards', np: 'एक्चुरियल चक्रवृद्धियुक्त प्रतिफल तथा अवकाश कोष मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding basic compounding and monthly savings', np: 'चक्रवृद्धि ब्याज र मासिक बचतको आधारभूत ज्ञान' },
    en: {
      title: 'The Shocking Cost of Delaying Retirement Savings in Nepal',
      oneLineSummary: 'Starting your retirement fund at age 25 vs 35 costs millions of rupees due to the non-linear math of compound interest in Nepal.',
      summaryPoints: [
        'A 10-year delay in starting retirement investing can cut your final retirement wealth by over 60%, even if you save twice as much later.',
        'In compound interest, time in the market is vastly more powerful than the total principal amount invested.',
        'Traditional Nepali cultural reliance on children for elderly care is eroding due to mass foreign youth migration and nuclear family structures.',
        'Starting with just NPR 3,000-5,000 monthly in your twenties creates financial independence that NPR 25,000/month in your forties struggles to match.',
        'Waiting until your thirties or forties forces you into dangerously high-risk speculations to bridge an impossible retirement gap.'
      ],
      whatIsThis: 'The "Cost of Delay" is the mathematical penalty you pay for postponing retirement investments. Because compound growth accelerates exponentially in its final decades, the rupees you invest at age 22 to 28 do the heavy lifting of building multi-crore wealth, while money invested after age 40 has far fewer doubling cycles to grow.',
      whyItMatters: 'Most young Nepalis in their twenties believe retirement is 35 years away and prioritize current lifestyle consumption or waiting for a "bigger salary." However, waiting until age 35 to start saving means losing an entire 10-year compounding horizon. An early saver who invests NPR 5,000 per month for just 10 years and then stops completely will retire with significantly more money than someone who waits until age 35 and diligently invests NPR 5,000 every single month for 25 straight years.',
      howItWorks: [
        { step: 1, title: 'Harness the Early Doubling Cycles', desc: 'At a conservative 12% annualized return (NEPSE + diversified equity mutual funds), your invested corpus doubles roughly every 6 years under the Rule of 72.' },
        { step: 2, title: 'The 20s Advantage: 6 Doubling Periods', desc: 'Money invested at age 24 has six doubling cycles before age 60 (24 → 30 → 36 → 42 → 48 → 54 → 60). NPR 1 Lakh becomes NPR 64 Lakh without adding another rupee!' },
        { step: 3, title: 'The 40s Penalty: Only 3 Doubling Periods', desc: 'Money invested at age 42 doubles only 3 times before age 60 (42 → 48 → 54 → 60). That same NPR 1 Lakh only grows to NPR 8 Lakh - an 87.5% penalty purely due to lost time!' },
        { step: 4, title: 'Avoid the Panic Catch-Up Trap', desc: 'Late starters are forced to take reckless speculative bets in microcap stocks or land scams trying to make quick gains, often losing their remaining principal before retirement.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'The Lifetime Cost of a 10-Year Delay (Assuming 12% Annualized Return to Age 60)',
        headers: ['Starting Age', 'Monthly SIP', 'Total Years Invested', 'Your Out-of-Pocket Money', 'Retirement Corpus at Age 60', 'Wealth Multiple'],
        rows: [
          ['Age 20 (Early Bird)', 'NPR 5,000', '40 Years', 'NPR 24.0 Lakh', 'NPR 5.94 Crore', '24.7x your investment'],
          ['Age 25 (Standard Start)', 'NPR 5,000', '35 Years', 'NPR 21.0 Lakh', 'NPR 3.25 Crore', '15.5x your investment'],
          ['Age 30 (5-Year Delay)', 'NPR 5,000', '30 Years', 'NPR 18.0 Lakh', 'NPR 1.77 Crore', '9.8x your investment'],
          ['Age 35 (10-Year Delay)', 'NPR 5,000', '25 Years', 'NPR 15.0 Lakh', 'NPR 95.0 Lakh', '6.3x your investment'],
          ['Age 40 (15-Year Delay)', 'NPR 5,000', '20 Years', 'NPR 12.0 Lakh', 'NPR 49.9 Lakh', '4.1x your investment'],
          ['Age 40 (Catch-up Mode)', 'NPR 32,500', '20 Years', 'NPR 78.0 Lakh', 'NPR 3.25 Crore', 'Requires 6.5x monthly cash!']
        ]
      },
      nepalContext: 'In Nepal, historical social security has been the extended family: parents poured all savings into children\'s education with the tacit agreement that "छोराछोरी नै बुढेसकालको सहारा हुन्" (children will care for us in old age). In 2026, this model is under severe strain. With over 700,000 youths leaving annually on work permits and student visas to Australia, Japan, the UK, and Canada, many elderly parents in Kathmandu, Pokhara, and Chitwan find themselves living alone. Relying entirely on remittance or children\'s discretionary income creates severe vulnerability during medical emergencies. Self-funded retirement via SSF, CIT, and mutual fund SIPs is no longer optional in modern Nepal.',
      practicalScenario: {
        persona: 'Sandeep (25, civil engineer) vs. Bikash (35, project manager)',
        income: 'Both work in infrastructure consulting in Kathmandu',
        scenarioText: 'Sandeep starts an automated SIP of NPR 5,000 per month at age 25. He invests for just 10 years (until age 35), putting in NPR 6,00,000 total, and then stops new contributions entirely, letting the fund compound until age 60. Bikash waits until age 35, and then faithfully invests NPR 5,000 every single month for 25 continuous years until age 60 (putting in NPR 15,00,000 of his own cash).',
        solutionText: 'At 12% annualized return: Sandeep\'s fund, having grown to NPR 11.6 Lakh by age 35, compounds undisturbed for the next 25 years to reach NPR 1.97 Crore at age 60! Bikash, despite investing 2.5x more cash (NPR 15 Lakh vs NPR 6 Lakh) over 25 years, retires with only NPR 95 Lakh! Sandeep ends up with over NPR 1 Crore MORE simply because his money started 10 years earlier.',
        metricHighlight: 'Sandeep invested NPR 9 Lakh LESS out of pocket but retired with NPR 1.02 Crore MORE!'
      },
      formula: {
        name: 'The Cost of Delay Equation',
        equation: '\\text{Cost of Delay} = FV(\\text{Age } A) - FV(\\text{Age } A + t)',
        variables: [
          { symbol: 'FV', name: 'Future Value of Annuity', desc: 'PMT * [((1 + r/12)^(n*12) - 1) / (r/12)]' },
          { symbol: 't', name: 'Years Delayed', desc: 'Number of years postponed before starting investment' },
          { symbol: 'r', name: 'Expected Annual Return', desc: 'Long-term equity return rate (e.g. 10%-12%)' }
        ],
        exampleCalculation: 'Delaying an NPR 5,000 monthly SIP from age 25 to 35 at 12% CAGR costs: NPR 3,24,76,000 (Age 25 start) - NPR 94,97,000 (Age 35 start) = NPR 2,29,79,000 (Over 2.29 CRORE lost to hesitation)!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Cost of Delay'
      },
      commonMistakes: [
        { mistake: 'Waiting until your salary reaches NPR 80,000+ before starting retirement savings.', correct: 'Start immediately with NPR 1,000 to NPR 3,000 per month on your very first entry-level salary.', explanation: 'Developing the automatic savings habit early is 10x more important than the initial rupee amount.' },
        { mistake: 'Believing your children will cover your full retirement and medical expenses.', correct: 'Build an independent retirement corpus so your relationship with adult children is based on love, not financial dependence.', explanation: 'Medical inflation in private hospitals in Nepal exceeds 10% annually, overwhelming children\'s modest household budgets.' },
        { mistake: 'Putting retirement money in standard savings bank accounts yielding 3%-4%.', correct: 'Deploy long-term retirement capital into equity mutual funds, CIT, and SSF yielding 10%-12%.', explanation: 'Money in savings accounts losing 3% real purchasing power to inflation every year is guaranteed slow bankruptcy.' }
      ],
      definitions: [
        { term: 'Cost of Delay', full: 'बचत ढिलाइको मूल्य', meaning: 'The massive compound wealth sacrificed when you postpone investing by even 5 to 10 years.' },
        { term: 'Doubling Period (Rule of 72)', full: 'सम्पत्ति दोब्बर हुने समय', meaning: 'Dividing 72 by your annual return gives the exact number of years it takes for your investment to double.' },
        { term: 'Compound Growth Curve', full: 'चक्रवृद्धि वृद्धिको वक्ररेखा', meaning: 'A hockey-stick growth pattern where the vast majority of investment gains occur in the final 10-15 years of a multi-decade horizon.' },
        { term: 'Actuarial Longevity', full: 'औसत आयु प्रक्षेपण', meaning: 'The statistical estimate of how many years an individual will live post-retirement, requiring self-funded living expenses.' }
      ],
      faqs: [
        { q: 'I am already 38 years old and have zero retirement savings. Is it too late for me?', a: 'It is never too late, but you must act aggressively: aim to save 30%-40% of your take-home pay, eliminate bad consumer debt immediately, and maximize CIT tax deductions.' },
        { q: 'Can I rely solely on Social Security Fund (SSF) for retirement in Nepal?', a: 'SSF provides an essential base pension, but due to inflation and salary caps, it typically replaces only 30%-45% of pre-retirement lifestyle. You need supplemental mutual fund SIPs.' },
        { q: 'What if Nepal experiences prolonged political instability or stock market crashes?', a: 'Over 20-30 year horizons, political crises and bear markets create the best buying opportunities through rupee-cost averaging in disciplined monthly SIPs.' }
      ],
      takeaways: [
        'Time in the market compounds exponentially; starting at 25 vs 35 can cost over NPR 2 Crore in lost wealth.',
        'An investor who saves for 10 years early beats an investor who saves for 25 years late.',
        'Do not wait for a higher salary - automate NPR 2,000-5,000/month on your very first job.',
        'Traditional reliance on children as elderly care is fracturing due to migration; self-funded retirement is vital.',
        'At 12% CAGR, every 6 years your money doubles; never give away your early doubling cycles!'
      ]
    },
    np: {
      title: 'नेपालमा अवकाश बचत ढिलो गर्दाको डरलाग्दो लागत: १० वर्षको ढिलाइ, करोडौँको नोक्सान',
      oneLineSummary: '२५ वर्षको उमेरमा सुरु गरिएको सानो बचतले ६० वर्षमा जति सम्पत्ति बनाउँछ, ३५ वर्षपछि दोब्बर रकम बचत गर्दा पनि त्यो भेट्टाउन सकिँदैन।',
      summaryPoints: [
        'अवकाश (रिटायरमेन्ट) को बचत सुरु गर्न १० वर्ष ढिलाइ गर्दा तपाईंको अन्तिम सम्पत्ति ६०% भन्दा बढीले घट्छ, चाहे पछि तपाईंले दोब्बर रकम नै किन नजम्मा गर्नुहोस्।',
        'चक्रवृद्धि ब्याज (Compound Interest) को नियममा तपाईंले खल्तीबाट हालेको कुल रकमभन्दा लगानी बजारमा बसेको "समय" धेरै गुणा शक्तिशाली हुन्छ।',
        'नेपाली समाजमा "छोराछोरी नै बुढेसकालको सहारा" भन्ने परम्परा युवाहरूको व्यापक वैदेशिक बसाइँसराइ र एकल परिवारका कारण संकटमा पर्दै गएको छ।',
        '२० वर्षको उमेरमा मासिक ३,००० देखि ५,००० रुपैयाँबाट सुरु गरिएको लगानीले ४० वर्षको उमेरमा मासिक २५,००० बचत गर्दाभन्दा बढी आर्थिक स्वतन्त्रता दिन्छ।',
        'ढिलो बचत सुरु गर्नेहरू छिटो धनी बन्ने लोभमा कमजोर वित्तीय योजना वा जग्गा दलालीको जालमा फसेर जीवनभरको कमाइ गुमाउने जोखिममा पर्छन्।'
      ],
      whatIsThis: 'बचत ढिलाइको लागत (Cost of Delay) भनेको अवकाशका लागि गरिने लगानी पछि सार्दा तिर्नुपर्ने चर्को गणितीय जरिवाना हो। चक्रवृद्धि ब्याजको वृद्धि अन्तिम दशकहरूमा ज्यामितीय (Exponential) रूपमा बढ्ने भएकाले २२ देखि २८ वर्षको उमेरमा लगानी गरिएको १ रुपैयाँले ६० वर्ष पुग्दा करोडौँको जग बसाल्छ, तर ४० वर्षपछि गरिएको लगानीसँग दोब्बर हुने समय नै बाँकी रहँदैन।',
      whyItMatters: 'नेपालका २०-२५ वर्षका युवाहरू सोच्छन् कि रिटायर हुन अझै ३५ वर्ष बाँकी छ, अहिले त घुम्ने र रमाइलो गर्ने उमेर हो, पछि तलब बढेपछि बचत गरौँला। तर २५ वर्षमा सुरु गर्ने र ३५ वर्षसम्म पर्खने बीचको फरक आकाश-जमिनको हुन्छ। २५ वर्षको उमेरमा मासिक ५,००० बचत गरेर ३५ वर्षमा बचत गर्नै छाडिदिने व्यक्तिले ६० वर्ष पुग्दा पाउने रकम, ३५ वर्षको उमेरबाट सुरु गरेर ६० वर्षसम्म निरन्तर २५ वर्ष नै मासिक ५,००० बचत गर्ने व्यक्तिको भन्दा दोब्बर बढी हुन्छ!',
      howItWorks: [
        { step: 1, title: 'शुरुवाती दोब्बर हुने चक्र (Doubling Cycles) चिन्नुहोस्', desc: 'वार्षिक १२% को औसत चक्रवृद्धि प्रतिफलमा (Rule of 72 अनुसार) तपाईंको लगानी हरेक ६ वर्षमा दोब्बर हुन्छ।' },
        { step: 2, title: '२० वर्षको उमेरको फाइदा: ६ पटक दोब्बर हुने अवसर', desc: '२४ वर्षमा लगानी भएको १ लाख रुपैयाँ ६० वर्ष पुग्दा ६ पटक दोब्बर हुन्छ (२४ → ३० → ३६ → ४२ → ४८ → ५४ → ६०)। थप एक रुपैयाँ नहाल्दा पनि त्यो १ लाख ६४ लाख रुपैयाँ बन्छ!' },
        { step: 3, title: '४० वर्षको उमेरको जरिवाना: जम्मा ३ पटक दोब्बर', desc: '४२ वर्षमा लगानी गरिएको १ लाख रुपैयाँ ६० वर्ष पुग्दा जम्मा ३ पटक मात्र दोब्बर हुन पाउँछ। त्यही १ लाख जम्मा ८ लाख मात्र बन्छ - अर्थात् ८७.५% प्रतिफल केवल समयको अभावले गुम्छ!' },
        { step: 4, title: 'हतारमा क्षतिपूर्ति गर्ने पासोबाट जोगिनुहोस्', desc: 'ढिलो चेत खुलेका व्यक्तिहरू गुमेको समय भेट्टाउन अत्यधिक जोखिमपूर्ण सट्टेबाजी वा सहकारीमा लोभिएर भएको साँवा नै गुमाउन पुग्छन्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '१० वर्ष लगानी ढिलाइ गर्दा पर्ने वास्तविक आर्थिक असर (वार्षिक १२% चक्रवृद्धि प्रतिफलको आधारमा)',
        headers: ['सुरु गरेको उमेर', 'मासिक बचत (SIP)', 'लगानी गरेको अवधि', 'आफ्नो खल्तीबाट हालेको कुल रकम', '६० वर्षमा जम्मा हुने अवकाश कोष', 'सम्पत्तिको वृद्धि अनुपात'],
        rows: [
          ['२० वर्ष (सबैभन्दा छिटो)', 'रु ५,०००', '४० वर्ष', 'रु २४.० लाख', 'रु ५.९४ करोड', 'लगानीको २४.७ गुणा'],
          ['२५ वर्ष (उचित समय)', 'रु ५,०००', '३५ वर्ष', 'रु २१.० लाख', 'रु ३.२५ करोड', 'लगानीको १५.५ गुणा'],
          ['३० वर्ष (५ वर्ष ढिला)', 'रु ५,०००', '३० वर्ष', 'रु १८.० लाख', 'रु १.७७ करोड', 'लगानीको ९.८ गुणा'],
          ['३५ वर्ष (१० वर्ष ढिला)', 'रु ५,०००', '२५ वर्ष', 'रु १५.० लाख', 'रु ९५.० लाख', 'लगानीको ६.३ गुणा'],
          ['४० वर्ष (१५ वर्ष ढिला)', 'रु ५,०००', '२० वर्ष', 'रु १२.० लाख', 'रु ४९.९ लाख', 'लगानीको ४.१ गुणा'],
          ['४० वर्ष (अन्तर भर्न खोज्दा)', 'रु ३२,५००', '२० वर्ष', 'रु ७८.० लाख', 'रु ३.२५ करोड', '६.५ गुणा बढी मासिक पैसा चाहिन्छ!']
        ]
      },
      nepalContext: 'नेपालमा परापूर्वकालदेखि नै सामाजिक सुरक्षा भनेको सन्तान नै थिए: "छोराछोरी नै बुढेसकालको लौरो हुन्" भन्दै आमाबुवाले आफ्नो सबै कमाइ छोराछोरीको पढाइ र बिहेमा खर्चन्थे। तर वि.सं. २०८१/८२ को आजको नेपालमा यो सामाजिक संरचना भत्किँदै गएको छ। हरेक वर्ष ७ लाखभन्दा बढी नेपाली युवाहरू अध्ययन र रोजगारीका लागि अस्ट्रेलिया, क्यानडा, जापान वा खाडी मुलुक गइरहेका छन्। काठमाडौँ, पोखरा र चितवनका धेरै घरहरूमा वृद्ध आमाबुवा एक्लै बस्न बाध्य छन्। औषधोपचारको महँगी वार्षिक १०% भन्दा बढीले बढिरहेको बेला छोराछोरीको कमाइमा मात्र भर पर्नु जोखिमपूर्ण छ। त्यसैले SSF, नागरिक लगानी कोष र खुला म्युचुअल फन्डमार्फत आफ्नै खुट्टामा उभिने अवकाश कोष बनाउनु अब अनिवार्य भइसकेको छ।',
      practicalScenario: {
        persona: 'सन्दीप (२५ वर्ष, सिभिल इन्जिनियर) बनाम विकास (३५ वर्ष, प्रोजेक्ट म्यानेजर)',
        income: 'दुवै काठमाडौँको निर्माण परामर्श संस्थामा कार्यरत',
        scenarioText: 'सन्दीपले २५ वर्षको उमेरमा मासिक ५,००० रुपैयाँको खुला म्युचुअल फन्ड SIP सुरु गर्छ। उसले जम्मा १० वर्ष मात्र (३५ वर्षको उमेरसम्म) लगानी गर्छ र कुल ६ लाख रुपैयाँ जम्मा गरेपछि नयाँ रकम हाल्न बन्द गर्छ। तर पुरानो रकम ६० वर्षसम्म त्यत्तिकै बढ्न दिन्छ। विकासले भने २५ वर्षमा वास्ता गर्दैन र ३५ वर्ष पुगेपछि बल्ल मासिक ५,००० का दरले निरन्तर २५ वर्षसम्म (६० वर्षको उमेरसम्म) कुल १५ लाख रुपैयाँ खल्तीबाट हाल्छ।',
        solutionText: 'वार्षिक १२% को चक्रवृद्धि दरमा: सन्दीपको कोष ३५ वर्षको उमेरमै ११.६ लाख पुग्छ र अर्को २५ वर्ष बढेर ६० वर्षमा १.९७ करोड पुग्छ! विकासले सन्दीपको भन्दा २.५ गुणा बढी (१५ लाख रुपैयाँ) आफ्नै खल्तीबाट हालेर २५ वर्ष कुरे पनि ६० वर्षमा जम्मा ९५ लाख मात्र पाउँछ! सन्दीपले ९ लाख कम लगानी गरेर पनि विकासको भन्दा १ करोडभन्दा बढी बढी रकम हात पार्छ!',
        metricHighlight: 'सन्दीपले ९ लाख कम रकम हालेर पनि विकासको भन्दा १ करोड २ लाख रुपैयाँ बढी कमायो!'
      },
      formula: {
        name: 'बचत ढिलाइको घाटा समीकरण',
        equation: '\\text{Cost of Delay} = FV(\\text{Age } A) - FV(\\text{Age } A + t)',
        variables: [
          { symbol: 'FV', name: 'भविष्यको कुल मूल्य (Future Value)', desc: 'मासिक किस्ता र चक्रवृद्धि दरबाट प्राप्त हुने अन्तिम रकम' },
          { symbol: 't', name: 'ढिलाइ गरिएको वर्ष', desc: 'लगानी सुरु गर्न ढिलाइ गरेको वर्ष संख्या' },
          { symbol: 'r', name: 'वार्षिक चक्रवृद्धि प्रतिफल', desc: 'दीर्घकालीन इक्विटी प्रतिफल दर (१०% देखि १२%)' }
        ],
        exampleCalculation: '२५ वर्षमा मासिक ५,००० बचत सुरु गर्दा ६० वर्षमा रु ३,२४,७६,००० हुन्छ भने ३५ वर्षमा सुरु गर्दा रु ९४,९७,००० हुन्छ। ढिलाइको कुल घाटा = रु २,२९,७९,००० (२ करोड २९ लाख रुपैयाँभन्दा बढीको घाटा)!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'बचत ढिलाइको हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'मासिक तलब ८० हजारभन्दा माथि पुगेपछि मात्र अवकाशको बचत सुरु गर्छु भन्नु।', correct: 'पहिलो जागिरको पहिलो तलबबाटै कम्तीमा १ हजारदेखि ३ हजार रुपैयाँको मासिक SIP सुरु गर्नुहोस्।', explanation: 'रकम कति ठूलो छ भन्नेभन्दा पनि जतिसक्दो चाँडो बानी बसाल्नु १० गुणा बढी महत्वपूर्ण हुन्छ।' },
        { mistake: 'छोराछोरीले नै बुढेसकालमा पाल्छन् र सबै अस्पताल खर्च व्यहोर्छन् भन्नेमा ढुक्क बस्नु।', correct: 'आफ्नो स्वाभिमान र स्वतन्त्रताका लागि आफ्नै अवकाश कोष निर्माण गर्नुहोस् ताकि पारिवारिक सम्बन्ध आर्थिक तनावमुक्त रहोस्।', explanation: 'नेपालका निजी अस्पतालहरूको उपचार खर्च यति महँगो छ कि त्यसले सन्तानको आफ्नै घरखर्च धान्न नसक्ने बनाइदिन्छ।' },
        { mistake: 'अवकाशका लागि छुट्याएको पैसा साधारण बचत खातामा ३%-४% ब्याजमा सडाउनु।', correct: 'दीर्घकालीन पैसालाई १०%-१२% प्रतिफल दिने इक्विटी म्युचुअल फन्ड, CIT र SSF मा लगानी गर्नुहोस्।', explanation: 'महँगी ६% भन्दा बढी भएको देशमा ३% ब्याज पाउने बचत खातामा पैसा राख्नु भनेको बिस्तारै गरिब बन्नु हो।' }
      ],
      definitions: [
        { term: 'बचत ढिलाइको लागत (Cost of Delay)', full: 'Cost of Delay in Compounding', meaning: 'लगानी सुरु गर्न केही वर्ष ढिलाइ गर्दा चक्रवृद्धि ब्याजको अवसर गुमेर हुने करोडौँ रुपैयाँको वित्तीय नोक्सानी।' },
        { term: '७२ को नियम (Rule of 72)', full: 'Rule of 72 for Doubling', meaning: 'आफ्नो वार्षिक प्रतिफल दरले ७२ लाई भाग गर्दा लगानी कति वर्षमा दोब्बर हुन्छ भनी पत्ता लगाउने सजिलो सूत्र।' },
        { term: 'हक्की-स्टिक वृद्धि (Hockey-Stick Curve)', full: 'Exponential Compounding Curve', meaning: 'चक्रवृद्धि लगानीको यस्तो रेखाचित्र जहाँ सुरुका वर्षमा वृद्धि सुस्त देखिन्छ तर अन्तिम १०-१५ वर्षमा अचानक ठाडो भएर तीव्र गतिमा बढ्छ।' },
        { term: 'एक्चुरियल दीर्घायु (Actuarial Longevity)', full: 'Life Expectancy at Retirement', meaning: 'अवकाशपछि मानिस कति वर्ष बाँच्छ र उसलाई कति वर्षसम्म मासिक खर्च पुग्ने रकम चाहिन्छ भन्ने तथ्याङ्कीय अनुमान।' }
      ],
      faqs: [
        { q: 'मेरो उमेर अहिले ३८ वर्ष भइसक्यो र अहिलेसम्म केही बचत छैन, के मेरो लागि धेरै ढिला भइसक्यो?', a: 'ढिला त भयो, तर असम्भव छैन। अब तपाईंले आफ्नो आम्दानीको ३०% देखि ४०% रकम आक्रामक रूपमा लगानी गर्नुपर्छ, फजुल खर्च घटाउनुपर्छ र CIT को ३ लाखसम्मको कर छुट पूरा उपयोग गर्नुपर्छ।' },
        { q: 'के नेपालमा सामाजिक सुरक्षा कोष (SSF) को भर परेर मात्र ढुक्कसँग बस्न सकिन्छ?', a: 'SSF ले आधारभूत पेन्सन त दिन्छ, तर महँगीका कारण यसले अवकाशपछिको जीवनशैली धान्न ३०% देखि ४०% मात्र योगदान गर्छ। थप जीवनयापनका लागि व्यक्तिगत SIP अनिवार्य चाहिन्छ।' },
        { q: 'नेपालको राजनीतिक अस्थिरता र सेयर बजार घट्ने डरले गर्दा लगानी गर्न डर लाग्छ नि?', a: '२० देखि ३० वर्षको लामो समयमा बजारका उतारचढाव सामान्य हुन्। मासिक SIP गर्दा बजार घट्दा धेरै युनिट किन्न पाइने भएकाले लामो समयमा यसैले सबभन्दा बढी नाफा दिन्छ।' }
      ],
      takeaways: [
        'लगानीमा पैसाभन्दा समय ठूलो हो; २५ वर्षमा सुरु गर्ने र ३५ वर्षमा सुरु गर्ने बीच २ करोडभन्दा बढीको अन्तर पर्न सक्छ।',
        'थोरै समय छिटो लगानी गर्ने व्यक्तिले धेरै समय ढिलो लगानी गर्ने व्यक्तिलाई सहजै जित्छ।',
        'ठूलो तलबको प्रतीक्षा नगर्नुहोस् - पहिलो जागिरबाटै २ हजारदेखि ५ हजारको मासिक SIP सुरु गर्नुहोस्।',
        'वैदेशिक रोजगारी र एकल परिवारका कारण छोराछोरीमाथिको निर्भरता घट्दो छ; आत्मनिर्भर अवकाश कोष जीवनको अनिवार्य आवश्यकता हो।',
        '१२% को प्रतिफलमा हरेक ६ वर्षमा पैसा दोब्बर हुन्छ; आफ्नो जीवनका शुरुवाती दोब्बर हुने चक्रहरू कहिल्यै खेर नफाल्नुहोस्!'
      ]
    }
  },

  // ── M2. CALCULATING YOUR TARGET RETIREMENT CORPUS IN NEPAL ─────────
  'calculating-retirement-corpus-nepal': {
    id: 'ret-calculating-corpus',
    slug: 'calculating-retirement-corpus-nepal',
    categorySlug: 'retirement-planning',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Actuarial Financial Planning Standards & NRB CPI Models', np: 'एक्चुरियल वित्तीय योजना मापदण्ड तथा राष्ट्र बैंक मुद्रास्फीति मोडेल अनुसार समीक्षित' },
    prerequisites: { en: 'Basic understanding of inflation and household budget', np: 'मुद्रास्फीति (महँगी) र पारिवारिक मासिक खर्चको सामान्य ज्ञान' },
    en: {
      title: 'Calculating Your Target Retirement Corpus in Nepal: The Exact Math',
      oneLineSummary: 'Learn how to factor 6.5% inflation and rising healthcare costs to pinpoint your exact multi-crore retirement number in Nepal.',
      summaryPoints: [
        'A monthly household expense of NPR 50,000 today will balloon to NPR 3,00,000+ per month in 28 years due to compounding inflation.',
        'The "Rule of 25x or 30x" must be applied to your FUTURE inflated expenses, not your current lifestyle cost.',
        'Average life expectancy in Nepal has surged past 71 years, meaning post-retirement life spans 20 to 25 years without an active salary.',
        'Healthcare inflation in urban private hospitals in Nepal runs at 10%-12%, double the headline consumer price index.',
        'Your target retirement corpus must be structured across three asset buckets: cash safety, fixed income yield, and equity inflation defense.'
      ],
      whatIsThis: 'A Retirement Corpus is the total lump-sum capital pool you must accumulate by your retirement age (typically 58 or 60 in Nepal) so that investment returns and systematic withdrawals can fund 100% of your living and medical expenses until death, without running out of money.',
      whyItMatters: 'Most Nepalis estimate their retirement goal by multiplying their current expenses: "I spend NPR 6 Lakh a year, so NPR 1.5 Crore in bank fixed deposit will generate NPR 12 Lakh interest and I will live like a king." This dangerous calculation ignores compounding inflation. Over 25 years at Nepal\'s historic 6.5% inflation, the purchasing power of NPR 1 Crore collapses to just NPR 20.7 Lakh. If you do not calculate your future inflated corpus today, you will be financially destitute by age 70.',
      howItWorks: [
        { step: 1, title: 'Establish Current Baseline Living Expenses', desc: 'Identify your true annual essential expenses (excluding children\'s school fees and home loans which will be paid off before age 60).' },
        { step: 2, title: 'Project Future Expenses with 6.5% Inflation', desc: 'Use future value formula: FV = PV * (1 + i)^n, where i is Nepal\'s average CPI (6.5%) and n is years to retirement.' },
        { step: 3, title: 'Apply the 25x-30x Longevity Multiplier', desc: 'Multiply your future annual expense by 25 to 30 to account for a 25-year retirement period under a 3.5%-4% safe withdrawal framework.' },
        { step: 4, title: 'Deduct Guaranteed Inflows (SSF/CIT/EPF)', desc: 'Subtract projected SSF pensions or CIT gratuity payouts to calculate the exact personal investment gap you must fund via mutual fund SIPs.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'The Reality of Inflation: What NPR 50,000 Monthly Living Costs Will Look Like in the Future',
        headers: ['Years Until Retirement', 'Today’s Monthly Cost', 'Future Monthly Cost (6.5% Inflation)', 'Future Annual Expense', 'Target 25x Corpus Required', 'Target 30x Corpus Required'],
        rows: [
          ['10 Years Away', 'NPR 50,000', 'NPR 93,850', 'NPR 11.26 Lakh', 'NPR 2.81 Crore', 'NPR 3.38 Crore'],
          ['15 Years Away', 'NPR 50,000', 'NPR 1,28,600', 'NPR 15.43 Lakh', 'NPR 3.86 Crore', 'NPR 4.63 Crore'],
          ['20 Years Away', 'NPR 50,000', 'NPR 1,76,200', 'NPR 21.14 Lakh', 'NPR 5.28 Crore', 'NPR 6.34 Crore'],
          ['25 Years Away', 'NPR 50,000', 'NPR 2,41,500', 'NPR 28.98 Lakh', 'NPR 7.24 Crore', 'NPR 8.69 Crore'],
          ['30 Years Away', 'NPR 50,000', 'NPR 3,31,000', 'NPR 39.72 Lakh', 'NPR 9.93 Crore', 'NPR 11.92 Crore']
        ]
      },
      nepalContext: 'In Nepal, official CPI published by Nepal Rastra Bank often understates real middle-class urban inflation. While food grains and textiles may rise at 5%-6%, private hospital ICU fees in Kathmandu, specialist doctor consultations, diagnostic MRIs, and brand-name medications inflate at 10%-14% annually. Furthermore, interest on bank Fixed Deposits in Nepal is subject to a 5% final withholding tax (TDS) under Section 88 of the Income Tax Act, and interest rates regularly swing between 6% during excess liquidity and 11% during credit crunches. Relying purely on bank FD interest exposes retirees to severe reinvestment risk.',
      practicalScenario: {
        persona: 'Gita, 32, HR manager in Pokhara',
        income: 'NPR 70,000 / month salary, currently spends NPR 40,000 / month on household expenses',
        scenarioText: 'Gita plans to retire at age 58 (26 years from now). She wondered how much money she needs to accumulate to maintain her current comfortable middle-class lifestyle without depending on anyone.',
        solutionText: 'Step 1: Her current annual expense is NPR 4,80,000. Step 2: At 6.5% inflation over 26 years, her annual living cost at age 58 will be NPR 4,80,000 * (1.065)^26 = NPR 24,72,000/year (approx NPR 2,06,000/month!). Step 3: Using the 25x rule, her target retirement corpus is 25 * 24.72 Lakh = NPR 6.18 Crore! Step 4: To reach NPR 6.18 Crore in 26 years at 12% CAGR, Gita starts an automated monthly mutual fund SIP of NPR 28,000 today.',
        metricHighlight: 'Current expense: NPR 40k/mo → Future expense at 58: NPR 2.06 Lakh/mo → Target Corpus: NPR 6.18 Crore'
      },
      formula: {
        name: 'Target Retirement Corpus Equation',
        equation: '\\text{Corpus} = \\left[ \\text{Current Expense} \\times (1 + i)^n \\right] \\times \\left( \\frac{1}{\\text{SWR}} \\right)',
        variables: [
          { symbol: 'i', name: 'Annual Inflation Rate', desc: 'Average long-term CPI in Nepal (typically 6.0%-6.5%)' },
          { symbol: 'n', name: 'Years to Retirement', desc: 'Retirement Age (e.g. 58) minus Current Age' },
          { symbol: 'SWR', name: 'Safe Withdrawal Rate', desc: 'Annual withdrawal percentage (3.5% to 4.0% in Nepal)' }
        ],
        exampleCalculation: 'Current expense: NPR 50,000/mo (6 Lakh/yr). Retiring in 25 yrs at 6.5% inflation. Future expense = 6,00,000 * (1.065)^25 = NPR 28,97,000/yr. At 4% SWR (25x multiplier): Target Corpus = 28,97,000 * 25 = NPR 7,24,25,000 (NPR 7.24 Crore)!',
        shortcutCalcSlug: 'calculators/retirement',
        shortcutCalcName: 'Retirement Corpus Calculator'
      },
      commonMistakes: [
        { mistake: 'Calculating retirement corpus based on today’s expenses without inflation.', correct: 'Always inflate current expenses by 6.5% per year up to your planned retirement age.', explanation: 'Calculating with unadjusted expenses leaves you with less than one-fourth of the money you will actually need.' },
        { mistake: 'Assuming your expenses will drop by 50% after retirement.', correct: 'Budget for 80%-100% of pre-retirement expenses, as rising medical and domestic care costs replace work expenses.', explanation: 'While daily commuting and clothing costs fall, medical checkups, medications, and caregiver costs rise sharply.' },
        { mistake: 'Ignoring the 5% final tax on bank interest and 5% capital gains tax.', correct: 'Factor net post-tax returns into your long-term retirement withdrawal calculations.', explanation: 'Taxes quietly eat away hundreds of thousands of rupees from your annual retirement cash flow.' }
      ],
      definitions: [
        { term: 'Retirement Corpus', full: 'अवकाश कोष (कुल पूँजी)', meaning: 'The total financial nest egg accumulated to generate sustainable lifelong income after active salary ceases.' },
        { term: 'Rule of 25x / 30x', full: '२५ गुणा वा ३० गुणाको नियम', meaning: 'The principle that multiplying future annual living expenses by 25 to 30 yields the corpus needed for a 25-30 year retirement.' },
        { term: 'Sequence of Returns Risk', full: 'प्रतिफलको शृङ्खला जोखिम', meaning: 'The risk that market downturns early in retirement will permanently deplete your corpus if you make large withdrawals.' },
        { term: 'Reinvestment Risk', full: 'पुनर्लगानी जोखिम', meaning: 'The risk that bank fixed deposits will mature at much lower interest rates than when initially locked in.' }
      ],
      faqs: [
        { q: 'Is NPR 1 Crore enough to retire comfortably in Nepal today?', a: 'If you are already 60 years old today and spend NPR 35,000/month, NPR 1 Crore in a balanced portfolio can last 20-22 years. But if you are 30 years old today, NPR 1 Crore will be worth less than NPR 15 Lakh by the time you retire.' },
        { q: 'Should I include my primary residential house in my retirement corpus?', a: 'No. Your home provides shelter but zero monthly cash flow unless you downsize or rent out rooms. Calculate your corpus only from liquid financial assets.' },
        { q: 'What inflation rate should I use for Nepal: 5%, 6.5%, or 8%?', a: 'Use 6.5% for general lifestyle expenses and 10% for the medical portion of your retirement budget to remain safely conservative.' }
      ],
      takeaways: [
        'Compounding inflation is the biggest threat to retirement; today\'s NPR 50k expense will exceed NPR 2.5 Lakh in 25 years.',
        'Target Corpus = Future Annual Inflated Expense multiplied by 25 to 30.',
        'Never count your residential house as retirement corpus unless you plan to sell and downsize.',
        'Factor in urban healthcare inflation of 10%-12%, which outpaces general consumer prices.',
        'Start an equity mutual fund SIP today to bridge the multi-crore gap between your current savings and target corpus.'
      ]
    },
    np: {
      title: 'नेपालमा आफ्नो लक्षित अवकाश कोष (Retirement Corpus) गणना गर्ने सही विधि',
      oneLineSummary: 'वार्षिक ६.५% महँगी र औषधोपचारको खर्च जोडेर ६० वर्षको उमेरमा आफूलाई चाहिने करोडौँको वास्तविक अवकाश कोष हिसाब गर्नुहोस्।',
      summaryPoints: [
        'आज मासिक ५०,००० रुपैयाँमा चल्ने मध्यमवर्गीय परिवारलाई ६.५% महँगीका कारण २८ वर्षपछि त्यही जीवनशैली धान्न मासिक ३,००,००० भन्दा बढी चाहिन्छ।',
        'अवकाश कोषको "२५ गुणा वा ३० गुणाको नियम" (Rule of 25x/30x) आजको खर्चमा होइन, भविष्यको महँगी बढेपछिको खर्चमा लगाउनुपर्छ।',
        'नेपालमा मानिसको औसत आयु ७१ वर्ष नाघिसकेको छ, जसको अर्थ जागिर छाडेपछि पनि २० देखि २५ वर्षसम्म विना तलब जीवन धान्नुपर्छ।',
        'निजी अस्पतालहरूको औषधोपचार र औषधि खर्च वार्षिक १०% देखि १२% ले बढिरहेको छ, जुन सामान्य बजार महँगीभन्दा दोब्बर हो।',
        'अवकाश कोषलाई केवल बैंकको मुद्दती खातामा नराखी नगद सुरक्षा, ब्याज आम्दानी र सेयर बजारको सम्मिश्रण (Three-Bucket Strategy) मा बाँड्नुपर्छ।'
      ],
      whatIsThis: 'अवकाश कोष (Retirement Corpus) भनेको जागिर वा व्यापारबाट निवृत्त हुने उमेर (सामान्यतया ५८ वा ६० वर्ष) सम्ममा जम्मा गरिसक्नुपर्ने कुल एकमुष्ट वित्तीय सम्पत्ति हो, जसको प्रतिफल र योजनाबद्ध निकासी (SWP) ले जीवनभर कसैसँग हात नफैलाई सम्पूर्ण घरखर्च र उपचार खर्च धान्न सकोस्।',
      whyItMatters: 'धेरैजसो नेपालीहरू आफ्नो अवकाश कोषको हिसाब आजकै खर्च हेरेर गर्छन्: "मलाई अहिले महिनाको ५० हजार चाहिन्छ, वर्षको ६ लाख भयो, १ करोड बैंक मुद्दतीमा राखेँ भने वर्षको १० लाख ब्याज आउँछ, म मज्जाले बाँच्छु।" यो अत्यन्त खतरनाक भ्रम हो! नेपालको औसत ६.५% महँगीका कारण २५ वर्षपछि आजको १ करोडको खरिद क्षमता घटेर जम्मा २०.७ लाखमा सीमित हुन्छ। यदि तपाईंले आजै महँगी समायोजन गरेर वास्तविक कोषको हिसाब गर्नुभएन भने, ६५-७० वर्षको उमेरमा तपाईंको सबै पैसा सकिएर आर्थिक संकटमा पर्नुहुनेछ।',
      howItWorks: [
        { step: 1, title: 'हालको अनिवार्य वार्षिक खर्च पत्ता लगाउनुहोस्', desc: 'घरखर्च, बिजुली, खाना र स्वास्थ्य खर्च जोड्नुहोस् (छोराछोरीको स्कुल फि र घर कर्जाको किस्ता घटाउनुहोस् किनकि ६० वर्ष पुग्दा यी सकिन्छन्)।' },
        { step: 2, title: '६.५% महँगी जोडेर भविष्यको खर्च निकाल्नुहोस्', desc: 'भविष्यको मूल्य निकाल्ने सूत्र: FV = PV * (1 + i)^n प्रयोग गर्नुहोस्, जहाँ i = ६.५% महँगी र n = अवकाश हुन बाँकी वर्ष।' },
        { step: 3, title: '२५ देखि ३० गुणाको नियम लगाउनुहोस्', desc: 'भविष्यको वार्षिक खर्चलाई २५ देखि ३० ले गुणन गर्नुहोस् ताकि अवकाशपछिको २५-३० वर्षसम्म पैसा कहिल्यै नसकियोस्।' },
        { step: 4, title: 'SSF र उपदानबाट आउने रकम घटाउनुहोस्', desc: 'सामाजिक सुरक्षा कोष (SSF) वा नागरिक लगानी कोष (CIT) बाट आउने पेन्सन घटाएर व्यक्तिगत लगानीबाट पुर्याउनुपर्ने वास्तविक रकम निकाल्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'मुद्रास्फीति (महँगी) को वास्तविक असर: आजको रु ५०,००० मासिक खर्च भविष्यमा कति पुग्छ?',
        headers: ['अवकाश हुन बाँकी समय', 'आजको मासिक खर्च', 'भविष्यको मासिक खर्च (६.५% महँगी)', 'भविष्यको वार्षिक खर्च', '२५ गुणा अनुसार चाहिने कोष', '३० गुणा अनुसार चाहिने कोष'],
        rows: [
          ['१० वर्ष बाँकी', 'रु ५०,०००', 'रु ९३,८५०', 'रु ११.२६ लाख', 'रु २.८१ करोड', 'रु ३.३८ करोड'],
          ['१५ वर्ष बाँकी', 'रु ५०,०००', 'रु १,२८,६००', 'रु १५.४३ लाख', 'रु ३.८६ करोड', 'रु ४.६३ करोड'],
          ['२० वर्ष बाँकी', 'रु ५०,०००', 'रु १,७६,२००', 'रु २१.१४ लाख', 'रु ५.२८ करोड', 'रु ६.३४ करोड'],
          ['२५ वर्ष बाँकी', 'रु ५०,०००', 'रु २,४१,५००', 'रु २८.९८ लाख', 'रु ७.२४ करोड', 'रु ८.६९ करोड'],
          ['३० वर्ष बाँकी', 'रु ५०,०००', 'रु ३,३१,०००', 'रु ३९.७२ लाख', 'रु ९.९३ करोड', 'रु ११.९२ करोड']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकले प्रकाशन गर्ने उपभोक्ता मूल्य सूचकाङ्क (CPI) ले प्रायः मध्यमवर्गीय सहरी परिवारको वास्तविक महँगीलाई पूर्ण रूपमा समेट्न सक्दैन। चामल र नुन ५-६ प्रतिशतले बढे पनि काठमाडौँका निजी अस्पतालको आईसीयू शुल्क, डाक्टरको परामर्श, एमआरआई जाँच र विदेशी औषधिको मूल्य वार्षिक १०% देखि १४% ले बढिरहेको छ। यसबाहेक, आयकर ऐनको दफा ८८ अनुसार बैंक मुद्दतीको ब्याजमा ५% अन्तिम कर (TDS) काटिन्छ, र नेपालका बैंकहरूको मुद्दती ब्याज बजारको तरलता अनुसार ६% देखि ११% सम्म तीव्र रूपमा घटबढ भइरहन्छ। त्यसैले केवल बैंक मुद्दतीको ब्याजमा भर परेर अवकाश योजना बनाउनु ठूलो जोखिम हो।',
      practicalScenario: {
        persona: 'गीता, ३२ वर्ष, पोखरामा कार्यरत मानव संसाधन (HR) अधिकृत',
        income: 'मासिक तलब रु ७०,०००, हालको मासिक घरायसी खर्च रु ४०,०००',
        scenarioText: 'गीता ५८ वर्षको उमेरमा (अबको २६ वर्षपछि) अवकाश लिन चाहन्छिन्। उनलाई अवकाशपछि कसैको भर नपरी आजकै जस्तो आरामदायी जीवन बाँच्न कति पैसा चाहिन्छ भन्ने जान्न मन लाग्यो।',
        solutionText: 'चरण १: हालको वार्षिक खर्च = रु ४,८०,०००। चरण २: २६ वर्षमा ६.५% महँगी जोड्दा ५८ वर्षको उमेरमा उनको वार्षिक खर्च = रु ४,८०,००० * (१.०६५)^२६ = रु २४,७२,०००/वर्ष (मासिक करिब रु २,०६,०००!) पुग्छ। चरण ३: २५ गुणाको नियम लगाउँदा चाहिने कुल अवकाश कोष = २५ * २४.७२ लाख = रु ६.१८ करोड! चरण ४: यो ६.१८ करोड जम्मा गर्न गीताले आजैबाट वार्षिक १२% प्रतिफल दिने खुला म्युचुअल फन्डमा मासिक २८,००० रुपैयाँको SIP सुरु गर्नुपर्छ।',
        metricHighlight: 'हालको खर्च: रु ४० हजार/महिना → ५८ वर्षमा खर्च: रु २.०६ लाख/महिना → चाहिने कोष: रु ६.१८ करोड'
      },
      formula: {
        name: 'अवकाश कोष निर्धारण सूत्र',
        equation: '\\text{Corpus} = \\left[ \\text{Current Expense} \\times (1 + i)^n \\right] \\times \\left( \\frac{1}{\\text{SWR}} \\right)',
        variables: [
          { symbol: 'i', name: 'वार्षिक मुद्रास्फीति दर', desc: 'नेपालको औसत दीर्घकालीन महँगी दर (६.०% देखि ६.५%)' },
          { symbol: 'n', name: 'अवकाश हुन बाँकी वर्ष', desc: 'अवकाश हुने उमेर (५८ वर्ष) - हालको उमेर' },
          { symbol: 'SWR', name: 'सुरक्षित वार्षिक निकासी दर', desc: 'प्रतिवर्ष झिक्न मिल्ने सुरक्षित प्रतिशत (३.५% देखि ४.०%)' }
        ],
        exampleCalculation: 'हालको खर्च: ५०,०००/महिना (६ लाख/वर्ष)। २५ वर्षपछि अवकाश। भविष्यको खर्च = ६,००,००० * (१.०६५)^२५ = रु २८,९७,०००/वर्ष। ४% सुरक्षित निकासी (२५ गुणा) अनुसार चाहिने कुल कोष = २८,९७,००० * २५ = रु ७,२४,२५,००० (७ करोड २४ लाख रुपैयाँ)!',
        shortcutCalcSlug: 'calculators/retirement',
        shortcutCalcName: 'अवकाश कोष क्याल्कुलेटर'
      },
      commonMistakes: [
        { mistake: 'महँगी नजोडी आजकै ५० हजार खर्चको आधारमा अवकाश कोष हिसाब गर्नु।', correct: 'अवकाश हुने उमेरसम्मको हरेक वर्षमा कम्तीमा ६.५% महँगी अनिवार्य रूपमा जोड्नुहोस्।', explanation: 'महँगी नजोड्दा भविष्यमा चाहिने वास्तविक रकमको एक-चौथाइ मात्र जम्मा हुन पुग्छ र बुढेसकालमा चरम संकट हुन्छ।' },
        { mistake: 'रिटायर भएपछि त खर्च आधा घटिहाल्छ नि भनेर कम रकमको लक्ष्य राख्नु।', correct: 'अवकाशअघिको खर्चको कम्तीमा ८०% देखि १००% खर्च बजेटिङ गर्नुहोस्, किनकि बुढेसकालमा स्वास्थ्य उपचार खर्च निकै बढ्छ।', explanation: 'कार्यालय जाने खर्च र लुगाफाटोको खर्च घटे पनि नियमित औषधि, थेरापी र हेरचाह गर्ने सहयोगीको खर्च निकै धेरै हुन्छ।' },
        { mistake: 'आफू बसिरहेको आवासीय घरलाई अवकाश कोषको सम्पत्तिमा जोड्नु।', correct: 'आफ्नो बस्ने घरलाई कोषमा नजोड्नुहोस्, केवल तरल वित्तीय सम्पत्ति (Mutual Funds, FD, CIT) लाई मात्र गणना गर्नुहोस्।', explanation: 'बस्ने घरले नियमित मासिक आम्दानी दिँदैन, जबसम्म तपाईं त्यो बेचेर सानो ठाउँमा बसाइँ सर्नुहुन्न।' }
      ],
      definitions: [
        { term: 'अवकाश कोष (Retirement Corpus)', full: 'Total Retirement Nest Egg', meaning: 'जागिर छुटेपछि जीवनभर खान, बस्न र औषधोपचार गर्न पुग्ने गरी जम्मा गरिएको कुल वित्तीय सम्पत्ति।' },
        { term: '२५ गुणाको नियम (Rule of 25x)', full: 'The 25x Rule for Retirement', meaning: 'भविष्यको वार्षिक खर्चलाई २५ ले गुणन गरेर निकालिने अवकाश कोष, जसबाट वर्षको ४% झिक्दा पैसा कहिल्यै रित्तिँदैन।' },
        { term: 'प्रतिफलको शृङ्खला जोखिम (Sequence Risk)', full: 'Sequence of Returns Risk', meaning: 'अवकाश लिएकै सुरुवाती वर्षहरूमा सेयर बजार धेरै घट्यो र त्यही बेला ठूलो रकम झिक्नुपर्यो भने पूरै कोष छिट्टै सकिने खतरा।' },
        { term: 'पुनर्लगानी जोखिम (Reinvestment Risk)', full: 'Interest Rate Reinvestment Risk', meaning: 'बैंक मुद्दतीको अवधि सकिएपछि नवीकरण गर्दा बजारमा ब्याजदर निकै घटिसकेको हुनाले आम्दानी घट्ने जोखिम।' }
      ],
      faqs: [
        { q: 'के नेपालमा आजको दिनमा १ करोड रुपैयाँले ढुक्कसँग रिटायर हुन पुग्छ?', a: 'यदि तपाईं आजै ६० वर्ष पुग्नुभएको छ र मासिक खर्च ३५ हजार मात्र छ भने १ करोडलाई सन्तुलित लगानी गर्दा २० वर्ष पुग्न सक्छ। तर यदि तपाईंको उमेर अहिले ३० वर्ष हो भने, अवकाश हुँदा आजको १ करोडको भाउ १५ लाख बराबर मात्र हुनेछ।' },
        { q: 'के मैले आफ्नो बस्ने घरलाई पनि अवकाश कोषमा जोड्न मिल्छ?', a: 'मिल्दैन। आफ्नो बस्ने घरले मासिक खर्च चलाउने नगद दिँदैन। घर बेचेर सस्तो ठाउँमा सर्ने वा फ्ल्याट भाडामा लगाउने योजना भए मात्र आंशिक रूपमा गणना गर्न मिल्छ।' },
        { q: 'नेपालमा अवकाश योजना बनाउँदा कति प्रतिशत महँगी दर मान्नु सुरक्षित हुन्छ?', a: 'दैनिक घरायसी खर्चका लागि ६.५% र स्वास्थ्य तथा औषधि खर्चका लागि १०% महँगी दर मानेर हिसाब गर्नु सबैभन्दा सुरक्षित हुन्छ।' }
      ],
      takeaways: [
        'मुद्रास्फीति (महँगी) अवकाशको सबैभन्दा ठूलो शत्रु हो; आजको ५० हजार २५ वर्षमा २.५ लाखभन्दा बढी बन्छ।',
        'लक्षित अवकाश कोष = भविष्यको महँगी बढेपछिको वार्षिक खर्च गुणा २५ देखि ३०।',
        'आफू बस्ने घरलाई अवकाश कोष नमान्नुहोस्; तरल वित्तीय लगानी मात्र हिसाब गर्नुहोस्।',
        'सहरी स्वास्थ्य उपचारको महँगी वार्षिक १०%-१२% ले बढ्ने यथार्थलाई योजनामा अनिवार्य समावेश गर्नुहोस्।',
        'यो करोडौँको लक्ष्य भेट्टाउन आजैबाट खुला म्युचुअल फन्डमा अनुशासित मासिक SIP सुरु गर्नुहोस्।'
      ]
    }
  },

  // ── M3. SOCIAL SECURITY FUND (SSF) PENSION MODEL ─────────────────
  'social-security-fund-ssf-pension-model': {
    id: 'ret-ssf-pension-model',
    slug: 'social-security-fund-ssf-pension-model',
    categorySlug: 'retirement-planning',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Social Security Act 2074 & SSF Directive Standards', np: 'सामाजिक सुरक्षा ऐन २०७४ तथा कोष कार्यविधि मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'Basic knowledge of formal employment salary slips', np: 'औपचारिक रोजगारीको तलब र कट्टी विवरणको सामान्य ज्ञान' },
    en: {
      title: 'The Social Security Fund (SSF) Pension Model: How Much Will You Get in Nepal?',
      oneLineSummary: 'Deconstruct the 31% contribution, old age pension formula, divisor 160, and exact monthly pension payouts in Nepal.',
      summaryPoints: [
        'Total SSF contribution is 31% of your basic salary: 11% deducted from employee salary, 20% matched by the employer.',
        'Of the 31%, exactly 28.33% goes toward your retirement: 20% into the Old Age Pension Scheme and 8.33% into the Gratuity Scheme.',
        'Your monthly pension after age 60 is calculated using the statutory actuarial divisor: Total Accumulated Pension Corpus ÷ 160.',
        'To qualify for a lifetime monthly pension, you must contribute for at least 180 months (15 years); otherwise, you receive a lump sum.',
        'The remaining 2.67% of contributions provides live health/maternity (1%), accident/disability (1.4%), and dependent family protection (0.27%).'
      ],
      whatIsThis: 'The Social Security Fund (SSF - सामाजिक सुरक्षा कोष) is Nepal\'s national statutory contributory pension and social protection scheme established under the Social Security Act 2074. It replaces traditional lump-sum retirement with a guaranteed monthly annuity for life starting at age 60.',
      whyItMatters: 'Every formal private-sector employee in Nepal sees 11% deducted from their basic salary every month alongside a 20% employer match. Yet over 80% of workers have no idea how their future monthly pension is calculated. Understanding the exact math of the 160-factor divisor, the compounding interest credited by SSF, and the difference between the 20% pension bucket and 8.33% gratuity bucket is essential to plan whether SSF alone is enough or how much supplemental mutual fund SIP you need.',
      howItWorks: [
        { step: 1, title: 'The 31% Total Contribution Split', desc: '11% employee + 20% employer = 31% of Basic Salary deposited monthly via the online SSF SOS portal.' },
        { step: 2, title: 'The 4 Protection Scheme Allocations', desc: '1.0% Medical/Health/Maternity + 1.40% Accident/Disability + 0.27% Dependent Family + 28.33% Retirement (20% Pension + 8.33% Gratuity).' },
        { step: 3, title: 'Accumulation with Annual Profit Interest', desc: 'The 28.33% retirement portion is invested by SSF and credited with annual compound interest (typically 7%-8% based on fund performance).' },
        { step: 4, title: 'The Age 60 Pension Calculation (Divisor 160)', desc: 'At age 60 (with minimum 180 months of contributions), your 20% pension bucket balance is divided by 160 to determine your lifetime monthly pension check.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Detailed Breakdown of Nepal’s 31% Social Security Fund (SSF) Contribution',
        headers: ['Scheme Component', 'Contribution %', 'Source', 'Payout Type', 'Key Benefit / Rule'],
        rows: [
          ['Medical & Maternity', '1.00%', 'Employer', 'Reimbursement', 'Up to NPR 1 Lakh/yr IPD hospitalization, NPR 25k OPD, maternity allowance'],
          ['Accident & Disability', '1.40%', 'Employer', 'Direct Coverage', '100% treatment cost for workplace accidents; monthly disability pensions'],
          ['Dependent Family Protection', '0.27%', 'Employer', 'Monthly Annuity', '60% lifetime spouse pension + child education benefits if contributor passes away'],
          ['Old Age Pension Scheme', '20.00%', '10% Emp + 10% Emplr', 'Lifetime Monthly Pension', 'Total Corpus ÷ 160 paid monthly for life after age 60 (min 15 yrs contribution)'],
          ['Gratuity (उपदान) Scheme', '8.33%', '1% Emp + 7.33% Emplr', 'Lump Sum or Pension', 'Can be withdrawn 100% lump-sum at retirement or transferred into pension corpus'],
          ['Total Combined Mandate', '31.00%', '11% Emp + 20% Emplr', 'Comprehensive Security', 'Mandatory for all formal private sector enterprises registered in Nepal']
        ]
      },
      nepalContext: 'Prior to the Social Security Act 2074, private-sector employees received a lump-sum gratuity and provident fund at retirement, which was frequently consumed within 3 to 5 years through children’s marriages, land speculation, or unvetted cooperative deposits, leaving seniors with zero cash flow in their 70s. The SSF pension model was designed to mirror developed-nation social security annuities. Under current SSF directives, if a pensioner passes away before age 73.33 (the 160 months mark), their legal spouse receives 50% of the monthly pension for life. Contributor contributions are also eligible for tax deduction under Schedule 1 of the Income Tax Act up to NPR 5 Lakh annually (combined ceiling with EPF/CIT).',
      practicalScenario: {
        persona: 'Pradeep, 30, senior software engineer in Lalitpur',
        income: 'Basic Salary: NPR 40,000 / month (Gross salary NPR 75,000)',
        scenarioText: 'Pradeep has been contributing to SSF since age 30 and wants to know what monthly pension he will receive when he retires at age 60 after 30 years of continuous service (assuming an average basic salary of NPR 60,000 over his career and 7.5% annual return credited by SSF).',
        solutionText: 'Monthly 20% pension deposit = 20% of 60,000 = NPR 12,000/mo. Over 30 years (360 months) compounding at 7.5% annual interest, his 20% Old Age Pension bucket accumulates to approx NPR 1.63 Crore! At age 60, dividing by the statutory factor 160: Monthly Pension = 1,63,00,000 ÷ 160 = NPR 1,01,875 per month for life! In addition, his 8.33% gratuity bucket accumulates approx NPR 68 Lakh, which he can withdraw 100% tax-exempt lump sum!',
        metricHighlight: 'Accumulated Pension: NPR 1.63 Crore → Monthly Pension for life: NPR 1,01,875 + NPR 68 Lakh cash gratuity!'
      },
      formula: {
        name: 'The SSF Monthly Pension Formula',
        equation: '\\text{Monthly Pension} = \\frac{\\text{Total Accumulated 20\\% Pension Corpus (Principal + Returns)}}{160}',
        variables: [
          { symbol: '\\text{Total Corpus}', name: 'Accumulated Pension Fund', desc: 'Total 20% contributions compounded at SSF declared annual interest rates' },
          { symbol: '160', name: 'Actuarial Divisor Factor', desc: 'Statutory divisor representing 13.33 years (160 months) life expectancy post age 60' }
        ],
        exampleCalculation: 'Total accumulated pension corpus at age 60 = NPR 80,00,000. Monthly pension = 80,00,000 ÷ 160 = NPR 50,000 per month. If the retiree lives to age 85 (300 months), the pension continues paying NPR 50,000 every month for life!',
        shortcutCalcSlug: 'calculators/retirement',
        shortcutCalcName: 'SSF Pension Calculator'
      },
      commonMistakes: [
        { mistake: 'Believing your pension is based on your total gross salary rather than basic salary.', correct: 'SSF contributions and pension calculations are strictly based on Basic Salary (मूल तलब).', explanation: 'Allowances, bonuses, and overtime are not subject to the 31% SSF contribution.' },
        { mistake: 'Withdrawing your SSF balance when changing private companies.', correct: 'Keep your SSF Number permanent across employers; your fund continues compounding uninterrupted.', explanation: 'Cashing out early destroys the 180-month threshold required to qualify for a lifelong pension.' },
        { mistake: 'Assuming SSF pension stops paying out after 160 months (13.33 years).', correct: 'The monthly pension is paid for your ENTIRE lifetime, even if you live to age 95 or 100.', explanation: 'The 160 factor is solely an actuarial divisor used to determine the monthly payout size; it is NOT an expiry date.' }
      ],
      definitions: [
        { term: 'SSF (सामाजिक सुरक्षा कोष)', full: 'Social Security Fund Nepal', meaning: 'Autonomous government entity managing mandatory contributory social security and pensions for Nepali workers.' },
        { term: 'Actuarial Divisor (160)', full: '१६० को विभाजक सूत्र', meaning: 'The legal number by which your accumulated pension corpus is divided to calculate your guaranteed monthly pension.' },
        { term: '180 Months Rule', full: '१८० महिनाको योगदान सीमा', meaning: 'The requirement to contribute for at least 15 years (180 months) to qualify for a lifelong monthly pension instead of a lump-sum payout.' },
        { term: 'Dependent Pension', full: 'आश्रित परिवार पेन्सन', meaning: 'Monthly annuity paid to the surviving spouse (60% of basic) and children (40% education) if a contributing worker passes away.' }
      ],
      faqs: [
        { q: 'What happens if I contribute to SSF for only 8 years and then move abroad or retire?', a: 'If you have less than 180 months of contributions at age 60, you cannot receive a monthly pension; instead, you get back 100% of your accumulated corpus plus interest as a lump sum.' },
        { q: 'Is SSF mandatory for IT freelancers and foreign remote workers in Nepal?', a: 'Under recent amendments, informal workers, freelancers, and migrant workers can voluntarily join SSF under the Informal & Self-Employed Social Security Scheme.' },
        { q: 'Can my spouse continue receiving my SSF pension if I pass away?', a: 'Yes. If you die after retirement, your legal spouse receives 50% of your monthly pension for their entire lifetime, provided they do not remarry or have alternate government pensions.' }
      ],
      takeaways: [
        'SSF takes 31% of basic salary: 28.33% builds your retirement (20% pension + 8.33% gratuity).',
        'Monthly pension = Total 20% Accumulated Corpus ÷ 160, paid every month for life after age 60.',
        'You must complete at least 180 months (15 years) of contributions to qualify for lifetime pension.',
        'The 160 divisor is a formula factor, not an expiration date - pension continues even if you live to 100!',
        'Your 8.33% gratuity bucket can be taken as 100% tax-free lump sum at age 60 to clear loans or buy assets.'
      ]
    },
    np: {
      title: 'सामाजिक सुरक्षा कोष (SSF) को पेन्सन मोडल: ६० वर्षपछि तपाईंले मासिक कति पाउनुहुन्छ?',
      oneLineSummary: '३१% योगदानको बाँडफाँड, १६० को विभाजक सूत्र र अवकाशपछि जीवनभर पाउने मासिक पेन्सनको वास्तविक हिसाब बुझ्नुहोस्।',
      summaryPoints: [
        'सामाजिक सुरक्षा कोष (SSF) मा आधारभूत तलबको कुल ३१% रकम जम्मा हुन्छ: ११% कामदारको तलबबाट कट्टी हुन्छ र २०% रोजगारदाताले थपिदिन्छ।',
        'जम्मा भएको ३१% मध्ये ठ्याक्कै २८.३३% रकम अवकाश (रिटायरमेन्ट) का लागि छुट्याइन्छ: २०% वृद्धवस्था पेन्सन योजनामा र ८.३३% उपदान (Gratuity) मा।',
        '६० वर्ष पुगेपछि तपाईंले पाउने मासिक पेन्सनको हिसाब कानुनले तोकेको एक्चुरियल सूत्र अनुसार हुन्छ: कुल जम्मा भएको पेन्सन रकम ÷ १६०।',
        'जीवनभर मासिक पेन्सन पाउनका लागि कम्तीमा १८० महिना (१५ वर्ष) कोषमा नियमित योगदान गरेको हुनुपर्छ; अन्यथा एकमुष्ट फिर्ता पाइन्छ।',
        'बाँकी २.६७% रकमले जागिरे जीवनभर स्वास्थ्य/मातृत्व (१%), दुर्घटना/अशक्तता (१.४०%) र आश्रित परिवार सुरक्षा (०.२७%) को कभरेज दिन्छ।'
      ],
      whatIsThis: 'सामाजिक सुरक्षा कोष (SSF) भनेको योगदानमा आधारित सामाजिक सुरक्षा ऐन २०७४ अन्तर्गत स्थापना भएको नेपाल सरकारको राष्ट्रिय सामाजिक सुरक्षा तथा पेन्सन प्रणाली हो। यसले निजी क्षेत्रका औपचारिक तथा अनौपचारिक क्षेत्रका श्रमिकहरूलाई ६० वर्षको उमेरपछि आजीवन मासिक पेन्सनको ग्यारेन्टी गर्दछ।',
      whyItMatters: 'नेपालका निजी कम्पनीमा काम गर्ने हरेक कर्मचारीको तलबबाट हरेक महिना ११% कट्टा भइरहेको हुन्छ र मालिकले २०% थपेर ३१% SSF मा बुझाइरहेका हुन्छन्। तर ८०% भन्दा बढी कर्मचारीलाई आफूले ६० वर्षपछि महिनाको कति रुपैयाँ पेन्सन पाइन्छ भन्ने हिसाब नै थाहा छैन। १६० को विभाजक सूत्र, कोषले दिने वार्षिक चक्रवृद्धि ब्याज, र २०% पेन्सन तथा ८.३३% उपदानबीचको भिन्नता बुझ्नुभयो भने मात्र तपाईंले आफ्नो बुढेसकालको आर्थिक सुरक्षा ढुक्कसँग योजना गर्न सक्नुहुन्छ।',
      howItWorks: [
        { step: 1, title: '३१% कुल योगदानको बाँडफाँड', desc: 'कामदारको ११% + रोजगारदाताको २०% = आधारभूत तलब (Basic Salary) को ३१% रकम हरेक महिना SSF को अनलाइन पोर्टलमा जम्मा हुन्छ।' },
        { step: 2, title: '४ वटा सामाजिक सुरक्षा योजनामा विभाजन', desc: 'स्वास्थ्य/मातृत्व १% + दुर्घटना/अशक्तता १.४०% + आश्रित परिवार ०.२७% + अवकाश योजना २८.३३% (पेन्सन २०% + उपदान ८.३३%)।' },
        { step: 3, title: 'वार्षिक नाफासहितको चक्रवृद्धि वृद्धि', desc: 'अवकाश कोषको २८.३३% रकमलाई कोषले लगानी गर्छ र हरेक वर्ष वार्षिक चक्रवृद्धि ब्याज/प्रतिफल (सामान्यतया ७% देखि ८.५%) खातामा जोडिदिन्छ।' },
        { step: 4, title: '६० वर्षमा १६० ले भाग गरेर मासिक पेन्सन', desc: '६० वर्षको उमेर पुगेपछि (कम्तीमा १८० महिना योगदान भएको खण्डमा) तपाईंको २०% पेन्सन खाताको कुल रकमलाई १६० ले भाग गरेर जीवनभर मासिक पेन्सन दिइन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालको ३१% सामाजिक सुरक्षा कोष (SSF) योगदानको विस्तृत बाँडफाँड र सुविधाहरू',
        headers: ['सुरक्षा योजनाको नाम', 'योगदान दर (%)', 'कसले व्यहोर्ने', 'भुक्तानीको प्रकार', 'मुख्य फाइदा र कानुनी नियम'],
        rows: [
          ['औषधोपचार, स्वास्थ्य तथा मातृत्व', '१.००%', 'रोजगारदाता', 'उपचार खर्च सोधभर्ना', 'वार्षिक १ लाखसम्म अस्पताल भर्ना खर्च, २५ हजार ओपिडी, मातृत्व स्याहार खर्च'],
          ['दुर्घटना तथा अशक्तता सुरक्षा', '१.४०%', 'रोजगारदाता', 'प्रत्यक्ष कभरेज', 'कार्यस्थलको दुर्घटनामा शतप्रतिशत उपचार खर्च, अंगभंग भएमा जीवनभर मासिक अशक्तता भत्ता'],
          ['आश्रित परिवार सुरक्षा योजना', '०.२७%', 'रोजगारदाता', 'मासिक पेन्सन', 'योगदानकर्ताको मृत्यु भएमा पति/पत्नीलाई ६०% आजीवन पेन्सन, छोराछोरीलाई शैक्षिक वृत्ति'],
          ['वृद्धवस्था पेन्सन योजना (Pension)', '२०.००%', '१०% कामदार + १०% मालिक', 'आजीवन मासिक पेन्सन', 'कुल जम्मा रकम ÷ १६० गरी ६० वर्षपछि जीवनभर मासिक पेन्सन (कम्तीमा १५ वर्ष योगदान)'],
          ['उपदान (Gratuity) योजना', '८.३३%', '१% कामदार + ७.३३% मालिक', 'एकमुष्ट वा पेन्सन', 'अवकाश हुँदा १००% एकमुष्ट करमुक्त झिक्न पाइने वा चाहेमा पेन्सनमा जोड्न सकिने'],
          ['कुल संयुक्त योगदान', '३१.००%', '११% कामदार + २०% मालिक', 'पूर्ण सामाजिक सुरक्षा', 'नेपालमा दर्ता भएका सबै निजी प्रतिष्ठान तथा कम्पनीहरूका लागि अनिवार्य']
        ]
      },
      nepalContext: 'सामाजिक सुरक्षा ऐन २०७४ आउनुअघि निजी क्षेत्रका कर्मचारीहरूले अवकाश हुँदा उपदान र सञ्चय कोषको एकमुष्ट पैसा पाउँथे। त्यो पैसा छोराछोरीको बिहे, जग्गा खरिद वा सहकारीमा राखेर ३ देखि ५ वर्षमै सकिन्थ्यो र ७० वर्ष पुग्दा वृद्धवृद्धाको हातमा एक रुपैयाँ पनि नगद हुँदैनथ्यो। विकसित देशहरूको पेन्सन मोडल अनुसार SSF ल्याइएको हो। हालको कार्यविधि अनुसार यदि पेन्सन पाउँदापाउँदै १६० महिना नपुग्दै (७३.३ वर्ष नपुग्दै) पेन्सनरको मृत्यु भएमा उसको विवाहित पति वा पत्नीले जीवनभर ५०% पेन्सन पाउने व्यवस्था छ। साथै, आयकर ऐनको अनुसूची १ अनुसार SSF मा गरेको योगदानमा वार्षिक ५ लाख रुपैयाँसम्म पूर्ण कर छुट पाइन्छ।',
      practicalScenario: {
        persona: 'प्रदीप, ३० वर्ष, ललितपुरको सफ्टवेयर कम्पनीमा कार्यरत सिनियर इन्जिनियर',
        income: 'मूल तलब (Basic): रु ४०,००० / महिना (कुल तलब रु ७५,०००)',
        scenarioText: 'प्रदीपले ३० वर्षको उमेरदेखि SSF मा योगदान गरिरहेका छन्। ३० वर्षको सेवापछि (६० वर्षको उमेरमा) अवकाश लिँदा उनले महिनाको कति पेन्सन पाउँछन् भन्ने जान्न चाहे (औसत मूल तलब ६०,००० र कोषको वार्षिक ब्याजदर ७.५% मान्दा)।',
        solutionText: 'मासिक २०% पेन्सन जम्मा = ६०,००० को २०% = रु १२,०००/महिना। ३० वर्ष (३६० महिना) मा वार्षिक ७.५% चक्रवृद्धि ब्याज सहित उनको २०% पेन्सन खातामा कुल रु १.६३ करोड जम्मा हुन्छ! ६० वर्ष पुग्दा १६० ले भाग गर्दा: मासिक पेन्सन = १,६३,००,००० ÷ १६० = रु १,०१,८७५ प्रतिमहिना जीवनभर! यसबाहेक उनको ८.३३% उपदान खातामा जम्मा भएको करिब ६८ लाख रुपैयाँ उनले एकमुष्ट हात पार्छन्!',
        metricHighlight: 'जम्मा पेन्सन कोष: रु १.६३ करोड → जीवनभर पाउने पेन्सन: रु १,०१,८७५/महिना + रु ६८ लाख एकमुष्ट उपदान!'
      },
      formula: {
        name: 'SSF मासिक पेन्सन निकाल्ने कानुनी सूत्र',
        equation: '\\text{मासिक पेन्सन} = \\frac{\\text{२०\\% पेन्सन खातामा जम्मा भएको कुल रकम (साँवा + प्रतिफल)}}{१६०}',
        variables: [
          { symbol: '\\text{कुल रकम}', name: 'जम्मा भएको पेन्सन कोष', desc: '२०% का दरले जम्मा भएको र कोषले दिएको वार्षिक ब्याज सहितको कुल रकम' },
          { symbol: '१६०', name: 'एक्चुरियल विभाजक अङ्क', desc: '६० वर्षपछि मानिस औसत १३.३३ वर्ष (१६० महिना) बाँच्छ भन्ने आधारमा तय गरिएको कानुनी अङ्क' }
        ],
        exampleCalculation: '६० वर्ष पुग्दा पेन्सन खातामा कुल ८०,००,००० रुपैयाँ जम्मा भयो भने: मासिक पेन्सन = ८०,००,००० ÷ १६० = रु ५०,००० प्रतिमहिना। यदि व्यक्ति ९० वर्षसम्म (३६० महिना) बाँचे पनि कोषले जीवनभर हरेक महिना ५० हजार रुपैयाँ दिइरहन्छ!',
        shortcutCalcSlug: 'calculators/retirement',
        shortcutCalcName: 'SSF पेन्सन हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'आफ्नो सम्पूर्ण कुल तलब (Gross Salary) को आधारमा पेन्सन आउँछ भनी सोच्नु।', correct: 'SSF को ३१% कट्टी र पेन्सन हिसाब केवल आधारभूत तलब (Basic Salary) मा मात्र हुन्छ।', explanation: 'महँगी भत्ता, खाजा खर्च, ओभरटाइम र बोनसबाट SSF रकम कट्टी हुँदैन।' },
        { mistake: 'कम्पनी फेर्दा SSF को खाता बन्द गरेर पैसा झिक्न खोज्नु।', correct: 'कम्पनी फेर्दा SSF नम्बर त्यही रहन्छ, नयाँ कम्पनीलाई त्यही नम्बर दिएर योगदान निरन्तर राख्नुहोस्।', explanation: 'बिचमै पैसा झिक्दा आजीवन पेन्सन पाउन चाहिने १८० महिनाको अवधि टुट्छ।' },
        { mistake: '१६० महिना (१३.३ वर्ष) पेन्सन पाएपछि पेन्सन बन्द हुन्छ भन्ने गलत हल्लामा विश्वास गर्नु।', correct: 'पेन्सन १६० महिनापछि बन्द हुँदैन, योगदानकर्ता १०० वर्ष बाँचे पनि जीवनभर मासिक पेन्सन पाइरहन्छ।', explanation: '१६० भनेको मासिक रकम निकाल्न भाग गर्ने गणितीय अङ्क मात्र हो, पेन्सन पाउने म्याद होइन।' }
      ],
      definitions: [
        { term: 'सामाजिक सुरक्षा कोष (SSF)', full: 'Social Security Fund', meaning: 'नेपाल सरकारद्वारा सञ्चालित निजी क्षेत्रका श्रमिक तथा कर्मचारीहरूको सामाजिक सुरक्षा र पेन्सन व्यवस्थापन गर्ने स्वायत्त निकाय।' },
        { term: '१६० को सूत्र (Divisor 160)', full: 'Actuarial Divisor Factor', meaning: 'जम्मा भएको पेन्सन रकमलाई मासिक किस्तामा बदल्न प्रयोग गरिने कानुनी संख्या।' },
        { term: '१८० महिनाको नियम (180 Months Threshold)', full: 'Minimum 15-Year Contribution', meaning: 'आजीवन मासिक पेन्सन पाउनका लागि अनिवार्य रूपमा पूरा गर्नुपर्ने १५ वर्ष वा १८० महिनाको योगदान।' },
        { term: 'आश्रित परिवार पेन्सन (Dependent Pension)', full: 'Survivor Pension Benefit', meaning: 'योगदानकर्ताको असामयिक निधन भएमा उसका पति वा पत्नीले जीवनभर पाउने ६०% पेन्सन र छोराछोरीको शैक्षिक सुविधा।' }
      ],
      faqs: [
        { q: 'यदि मैले SSF मा जम्मा ८ वर्ष मात्र योगदान गरेर जागिर छाडेँ भने के हुन्छ?', a: '६० वर्ष पुग्दा १८० महिना नपुगेको खण्डमा मासिक पेन्सन पाइँदैन; तर तपाईंको खातामा जम्मा भएको सम्पूर्ण साँवा र ब्याज एकमुष्ट फिर्ता पाइन्छ।' },
        { q: 'के विदेशमा रिमोट काम गर्ने आइटी फ्रिल्यान्सरहरू SSF मा जोडिन मिल्छ?', a: 'मिल्छ। सामाजिक सुरक्षा कोषको पछिल्लो नियमावली अनुसार अनौपचारिक तथा स्वरोजगार श्रमिकहरूले आफैँ मासिक रकम जम्मा गरेर SSF का सबै सुविधा लिन सक्छन्।' },
        { q: 'पेन्सन पाइरहेको व्यक्तिको मृत्यु भएमा श्रीमान् वा श्रीमतीले पेन्सन पाउँछन् कि पाउँदैनन्?', a: 'पाउँछन्। पेन्सनरको मृत्यु भएमा विवाहित पति वा पत्नीले ५०% पेन्सन जीवनभर पाउँछन्, यदि उनीहरूको अर्को सरकारी पेन्सन छैन र पुनर्विवाह गरेका छैनन् भने।' }
      ],
      takeaways: [
        'SSF मा आधारभूत तलबको ३१% जम्मा हुन्छ: २८.३३% अवकाशका लागि (२०% पेन्सन र ८.३३% उपदान)।',
        'मासिक पेन्सन = २०% खाताको कुल जम्मा रकम ÷ १६०, जुन ६० वर्षपछि जीवनभर हरेक महिना पाइन्छ।',
        'आजीवन मासिक पेन्सनको हकदार बन्न कम्तीमा १८० महिना (१५ वर्ष) योगदान पुर्याउनुपर्छ।',
        '१६० को अङ्क मासिक रकम निकाल्ने सूत्र मात्र हो; पेन्सनर १०० वर्ष बाँचे पनि मासिक पेन्सन आइरहन्छ।',
        '८.३३% उपदानको रकम अवकाश हुँदा शतप्रतिशत करमुक्त रूपमा एकमुष्ट झिक्न सकिन्छ।'
      ]
    }
  },

  // ── M4. CIT & EPF: TAX REBATES AND YIELDS ─────────────────────────
  'citizen-investment-trust-cit-epf-nepal': {
    id: 'ret-cit-epf-nepal',
    slug: 'citizen-investment-trust-cit-epf-nepal',
    categorySlug: 'retirement-planning',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Income Tax Act 2058 (Sec 63) & EPF/CIT Acts', np: 'आयकर ऐन २०५८ को दफा ६३ तथा सञ्चय कोष/नागरिक लगानी कोष नियमावली अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding income tax slabs and payroll deductions', np: 'आयकर स्ल्याब र तलब कट्टीको आधारभूत ज्ञान' },
    en: {
      title: 'Citizen Investment Trust (CIT) & EPF in Nepal: Tax Rebates, Yields & Rules',
      oneLineSummary: 'Maximize up to NPR 3,00,000 in legal income tax deductions while earning 6.5%-7.5% guaranteed compounding interest.',
      summaryPoints: [
        'Under Section 63 of the Income Tax Act 2058, contributions to approved retirement funds (CIT/EPF) are tax-deductible up to NPR 3,00,000 or 1/3rd of taxable salary.',
        'An individual in the 30%-36% tax bracket saves up to NPR 90,000-1,08,000 in cash taxes every year simply by maxing out CIT.',
        'EPF (कर्मचारी सञ्चय कोष) is typically a mandatory 10% + 10% employer match, while CIT (नागरिक लगानी कोष) allows flexible voluntary savings schemes.',
        'Both institutions distribute annual profits/dividends on top of guaranteed interest rates, delivering a historical effective yield of 7.5%-8.5%.',
        'Both EPF and CIT provide low-interest loan facilities (Special Loans up to 80%-90% of accumulated balance) without liquidating your retirement nest egg.'
      ],
      whatIsThis: 'Employees Provident Fund (EPF / KSK) and Citizen Investment Trust (CIT / NLK) are Nepal\'s premier government-backed statutory retirement saving institutions. They combine payroll-deductible retirement accumulation with substantial income tax exemptions under the Income Tax Act 2058.',
      whyItMatters: 'Taxes are one of the single largest lifetime expenses for salaried professionals in Nepal. If your gross salary is NPR 12,00,000, you could pay substantial income tax. By channeling NPR 3,00,000 into CIT (Karmachari Bachat Briddhi Scheme or Gratuity Fund), your taxable income drops from NPR 12 Lakh to NPR 9 Lakh, instantly saving tens of thousands of rupees in hard tax cash while earning guaranteed compounding interest backed by the Government of Nepal.',
      howItWorks: [
        { step: 1, title: 'Check the 3-Way Statutory Tax Limit', desc: 'The tax deduction allowed is the LOWEST of: (a) Actual contribution, (b) 1/3rd of Assessable Income, or (c) The statutory ceiling of NPR 3,00,000 (combined CIT + EPF + SSF).' },
        { step: 2, title: 'Choose the Right CIT Scheme', desc: 'Salaried workers typically enroll in CIT Karmachari Bachat Briddhi Yojana (कर्मचारी बचत वृद्धि स्वीकृत अवकाश कोष) or Gratuity Scheme.' },
        { step: 3, title: 'Payroll Deduction or Direct connectIPS Deposit', desc: 'Your employer deducts the amount before computing TDS, or you deposit directly using your CIT Identification Number via connectIPS.' },
        { step: 4, title: 'Compound Yield + Annual Profit Share', desc: 'Interest is credited quarterly/semi-annually, plus CIT and EPF declare annual profit dividends (मुनाफा बाँडफाँड) after audited financial statements.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Comparison: Employees Provident Fund (EPF) vs Citizen Investment Trust (CIT)',
        headers: ['Feature / Parameter', 'Employees Provident Fund (EPF / KSK)', 'Citizen Investment Trust (CIT / NLK)', 'Strategic Takeaway'],
        rows: [
          ['Establishment Act', 'Karmachari Sanchaya Kosh Act 2019 BS', 'Nagarik Lagani Kosh Act 2047 BS', 'Both 100% sovereign government-backed entities'],
          ['Contribution Model', 'Mandatory 10% employee + 10% employer', 'Voluntary (any amount up to tax limits) or employer scheme', 'CIT offers unmatched voluntary flexibility for individuals'],
          ['Tax Deduction Limit', 'Lower of 1/3rd income or NPR 300,000', 'Lower of 1/3rd income or NPR 300,000', 'Ceiling of NPR 3 Lakh is shared across all approved funds'],
          ['Interest Rate Benchmark', '6.50%-7.50% per annum', '6.50%-7.50% per annum', 'Both yield higher than commercial bank savings accounts'],
          ['Annual Dividend / Profit', '0.50%-1.25% additional bonus profit', '0.50%-1.50% additional bonus profit', 'Boosts total effective return to 8%+ long term'],
          ['Loan Borrowing Facility', 'Up to 90% special loan against balance', 'Up to 80% loan against accumulated balance', 'Instant liquidity for emergency medical or education needs']
        ]
      },
      nepalContext: 'Under Section 63 and Schedule 1 of Nepal\'s Income Tax Act 2058 (amended by Finance Act 2081/82), retirement contributions are designated as "Approved Retirement Fund Deductions" (स्वीकृत अवकाश कोष). When retiring or withdrawing from EPF/CIT after completing tenure, taxation on retirement payments is governed by Section 65 and Section 88: 5% final withholding tax applies to the gain/interest component, keeping post-retirement taxes exceptionally low compared to normal income brackets.',
      practicalScenario: {
        persona: 'Sushila, 34, branch officer in a commercial bank in Biratnagar',
        income: 'Gross Taxable Salary: NPR 11,00,000 / year (Unmarried individual bracket)',
        scenarioText: 'Without any deductions, Sushila’s top income bracket falls into the 20% and 30% tax slabs, resulting in significant annual tax liability. She decides to maximize her CIT voluntary contribution.',
        solutionText: 'Sushila contributes NPR 2,50,000 per year into CIT Karmachari Bachat Briddhi. Since 2.5 Lakh is less than 1/3rd of her income (NPR 3.66 Lakh) and below the NPR 3.0 Lakh ceiling, the entire NPR 2,50,000 is deducted from her taxable income! Her taxable income drops from NPR 11,00,000 to NPR 8,50,000. She directly saves NPR 50,000 in income tax in year 1! That is an immediate guaranteed 20% "return" via tax savings, plus CIT credits 7.0% interest + 1.0% profit share on her deposit!',
        metricHighlight: 'Saved NPR 50,000 in tax cash immediately + earned 8.0% compound return on the invested capital!'
      },
      formula: {
        name: 'Approved Retirement Tax Deduction Formula',
        equation: '\\text{Eligible Tax Deduction} = \\min\\left( \\frac{1}{3} \\times \\text{Assessable Income},\\; \\text{Actual Contribution},\\; \\text{NPR } 300,000 \\right)',
        variables: [
          { symbol: '\\text{Assessable Income}', name: 'Gross Taxable Salary', desc: 'Total taxable compensation before Section 63 deductions' },
          { symbol: '\\text{Actual Contribution}', name: 'Sum of EPF + CIT + SSF', desc: 'Total rupees deposited into approved funds in that fiscal year' },
          { symbol: '300,000', name: 'Statutory Maximum Cap', desc: 'Annual ceiling defined under Income Tax Act Schedule 1' }
        ],
        exampleCalculation: 'Salary = NPR 12 Lakh. 1/3rd = NPR 4 Lakh. Actual CIT contribution = NPR 3 Lakh. Maximum cap = NPR 3 Lakh. Eligible Deduction = min(4,00,000, 3,00,000, 3,00,000) = NPR 3,00,000. Taxable income becomes NPR 9 Lakh!',
        shortcutCalcSlug: 'calculators/income-tax',
        shortcutCalcName: 'Calculate Tax Deductions'
      },
      commonMistakes: [
        { mistake: 'Contributing more than NPR 3,00,000 expecting additional tax exemption.', correct: 'Cap your tax-motivated contributions at NPR 3,00,000 per fiscal year.', explanation: 'Any contribution beyond NPR 3 Lakh receives zero tax rebate under current tax laws.' },
        { mistake: 'Treating CIT or EPF like an ATM and taking maximum loans for vacations.', correct: 'Reserve CIT/EPF loans strictly for genuine medical emergencies or home construction.', explanation: 'Taking loans reduces the principal balance that compounds towards your retirement corpus.' },
        { mistake: 'Forgetting to submit your CIT statement to your company HR/finance before Chaitra.', correct: 'Provide your official CIT deposit receipts to HR by Falgun/Chaitra so TDS is adjusted on your payroll.', explanation: 'If HR doesn\'t receive proof, full tax will be deducted at source and you must file an IRD refund claim.' }
      ],
      definitions: [
        { term: 'Citizen Investment Trust (CIT / NLK)', full: 'नागरिक लगानी कोष', meaning: 'Government-managed statutory investment trust offering voluntary retirement and gratuity schemes.' },
        { term: 'Employees Provident Fund (EPF / KSK)', full: 'कर्मचारी सञ्चय कोष', meaning: 'Autonomous government body managing mandatory retirement funds for civil servants and formal employees.' },
        { term: 'Approved Retirement Fund', full: 'स्वीकृत अवकाश कोष', meaning: 'A retirement fund officially recognized by the Inland Revenue Department (IRD) eligible for tax deductions.' },
        { term: 'Special Loan Facility', full: 'विशेष सापटी सुविधा', meaning: 'Low-interest loan granted to contributors against 80%-90% of their accumulated retirement balance.' }
      ],
      faqs: [
        { q: 'Can private sector employees open a CIT account independently?', a: 'Yes. Individuals can open an account in the CIT Karmachari Bachat Briddhi Yojana either through their employer or independently by presenting their PAN card and citizenship.' },
        { q: 'If I already contribute to SSF, can I still get tax benefits from CIT?', a: 'Under the Income Tax Act, the maximum combined tax exemption ceiling for all approved retirement funds (SSF + CIT + EPF) is NPR 5,00,000 for SSF contributors, and NPR 3,00,000 for non-SSF contributors.' },
        { q: 'How is the interest on CIT and EPF calculated and credited?', a: 'Interest is calculated on daily or monthly balances and credited to the account semi-annually or annually, compounding automatically.' }
      ],
      takeaways: [
        'Max out your CIT contributions up to NPR 3,00,000 to save up to NPR 90k-1.08 Lakh in income taxes.',
        'Section 63 limit is the lowest of: Actual deposit, 1/3rd of taxable income, or NPR 300,000.',
        'CIT and EPF yield 7.5%-8.5% effective return including annual audited profit distributions.',
        'Both funds offer instant low-interest loans up to 80%-90% of balance for emergencies.',
        'Submit your deposit proof to HR before Chaitra to ensure full TDS credit on your salary slip.'
      ]
    },
    np: {
      title: 'नागरिक लगानी कोष (CIT) र सञ्चय कोष (EPF): कर छुट, ब्याजदर र अधिकतम फाइदा लिने रणनीति',
      oneLineSummary: 'वार्षिक ३ लाख रुपैयाँसम्मको वैध आयकर छुट लिँदै ६.५% देखि ७.५% सुरक्षित चक्रवृद्धि ब्याज कमाउने पूर्ण गाइड।',
      summaryPoints: [
        'आयकर ऐन २०५८ को दफा ६३ अनुसार स्वीकृत अवकाश कोष (CIT/EPF) मा जम्मा गरिएको वार्षिक ३,००,००० रुपैयाँ वा कुल आम्दानीको १/३ भागसम्म पूर्ण कर छुट पाइन्छ।',
        '३०% देखि ३६% को उच्च कर स्ल्याबमा पर्ने जागिरेहरूले CIT मा ३ लाख जम्मा गरेर वर्षमै ९०,००० देखि १,०८,००० रुपैयाँ प्रत्यक्ष नगद कर जोगाउन सक्छन्।',
        'कर्मचारी सञ्चय कोष (EPF) सामान्यतया १०% + १०% अनिवार्य हुन्छ भने नागरिक लगानी कोष (CIT) मा व्यक्तिले आफ्नो इच्छाअनुसार ऐच्छिक रकम जम्मा गर्न पाउँछ।',
        'दुवै संस्थाले तोकिएको ब्याजका अतिरिक्त हरेक वर्ष नाफा बाँडफाँड (Dividend) वितरण गर्छन्, जसले गर्दा दीर्घकालीन औसत प्रतिफल ७.५% देखि ८.५% पुग्छ।',
        'आकस्मिक आवश्यकता पर्दा आफ्नो जम्मा रकम नझिकीकनै ८०% देखि ९०% सम्म सस्तो ब्याजदरमा विशेष सापटी (ऋण) लिन सकिन्छ।'
      ],
      whatIsThis: 'कर्मचारी सञ्चय कोष (EPF) र नागरिक लगानी कोष (CIT) नेपाल सरकारको पूर्ण स्वामित्व र प्रत्याभूति भएका दुई प्रमुख वैधानिक अवकाश बचत संस्थाहरू हुन्। यिनीहरूले तलबबाट नियमित बचत गराउँदै आयकर ऐन २०५८ अनुसार ठूलो कर छुट सुविधा प्रदान गर्छन्।',
      whyItMatters: 'नेपालका मध्यम तथा उच्च तलब खाने पेशाकर्मीहरूको कमाइको ठूलो हिस्सा आयकरमै जान्छ। यदि तपाईंको वार्षिक तलब १२ लाख रुपैयाँ छ भने तपाईंले उल्लेख्य कर तिर्नुपर्ने हुन्छ। तर यदि तपाईंले नागरिक लगानी कोषको कर्मचारी बचत वृद्धि योजनामा वर्षको ३ लाख रुपैयाँ जम्मा गरिदिनुभयो भने, सरकारले तपाईंको करयोग्य आम्दानी १२ लाखबाट घटाएर ९ लाख मात्र मान्छ! यसबाट तत्कालै दशौँ हजार रुपैयाँ नगद कर जोगिन्छ र त्यो ३ लाख रुपैयाँ सरकारी प्रत्याभूतिसहित चक्रवृद्धिका साथ बढिरहन्छ।',
      howItWorks: [
        { step: 1, title: '३ वटा कानुनी सीमा जाँच गर्नुहोस्', desc: 'कर छुट पाउन ३ मध्ये जुन सबैभन्दा कम हुन्छ, त्यही रकम मान्य हुन्छ: (क) वास्तविक जम्मा रकम, (ख) करयोग्य आम्दानीको १/३ भाग, वा (ग) अधिकतम सीमा रु ३,००,०००।' },
        { step: 2, title: 'उचित CIT योजना छनोट गर्नुहोस्', desc: 'जागिरेहरूले सामान्यतया "नागरिक लगानी कोष कर्मचारी बचत वृद्धि स्वीकृत अवकाश कोष" वा उपदान योजना रोज्छन्।' },
        { step: 3, title: 'तलब कट्टी वा सिधै connectIPS मार्फत जम्मा', desc: 'कार्यालयको लेखा शाखाबाट तलबमै कटाउन लगाउनुहोस् वा आफ्नो CIT परिचयपत्र नम्बर प्रयोग गरी connectIPS बाट सिधै जम्मा गर्नुहोस्।' },
        { step: 4, title: 'ब्याज र वार्षिक मुनाफा बाँडफाँड', desc: 'खातामा अर्धवार्षिक रूपमा ब्याज जोडिन्छ र संस्थाको लेखापरीक्षणपछि हरेक वर्ष थप नाफा लाभांश (मुनाफा) खातामै थपिन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'कर्मचारी सञ्चय कोष (EPF) बनाम नागरिक लगानी कोष (CIT) को तुलनात्मक विश्लेषण',
        headers: ['तुलनाको सूचक', 'कर्मचारी सञ्चय कोष (EPF)', 'नागरिक लगानी कोष (CIT)', 'रणनीतिक फाइदा'],
        rows: [
          ['स्थापना ऐन', 'कर्मचारी सञ्चय कोष ऐन २०१९', 'नागरिक लगानी कोष ऐन २०४७', 'दुवै शतप्रतिशत नेपाल सरकारको ग्यारेन्टी भएका संस्था'],
          ['जम्मा गर्ने तरिका', 'अनिवार्य १०% तलब + १०% रोजगारदाता', 'ऐच्छिक (व्यक्ति आफैँले जति पनि जम्मा गर्न मिल्ने)', 'CIT मा व्यक्तिले आफ्नो सुविधा अनुसार ऐच्छिक बचत गर्न पाउँछ'],
          ['आयकर छुटको सीमा', '१/३ भाग वा अधिकतम रु ३,००,०००', '१/३ भाग वा अधिकतम रु ३,००,०००', '३ लाखको वार्षिक सीमा सबै स्वीकृत कोषहरूको संयुक्त हो'],
          ['वार्षिक ब्याजदर', '६.५०% देखि ७.५०% प्रतिवर्ष', '६.५०% देखि ७.५०% प्रतिवर्ष', 'वाणिज्य बैंकको बचत खाताभन्दा धेरै बढी प्रतिफल'],
          ['थप मुनाफा लाभांश', 'वार्षिक ०.५०% देखि १.२५% थप बोनस', 'वार्षिक ०.५०% देखि १.५०% थप बोनस', 'दीर्घकालीन कुल प्रतिफल ८% भन्दा माथि पुग्छ'],
          ['सापटी (ऋण) सुविधा', 'जम्मा रकमको ९०% सम्म विशेष सापटी', 'जम्मा रकमको ८०% सम्म विशेष सापटी', 'घर बनाउन वा आपतकालीन उपचारका लागि तुरुन्तै सस्तो ऋण']
        ]
      },
      nepalContext: 'नेपालको आयकर ऐन २०५८ को दफा ६३ र अनुसूची १ (आर्थिक ऐन २०८१/८२ द्वारा संशोधित) अनुसार स्वीकृत अवकाश कोषमा जम्मा गरेको रकमलाई करयोग्य आयबाट घटाउन पाइन्छ। अवकाश हुँदा वा रकम झिक्दा आयकर ऐनको दफा ६५ र ८८ अनुसार जम्मा भएको नाफा वा ब्याज रकममा मात्र ५% अन्तिम कर (TDS) लाग्छ। यसले गर्दा अन्य साधारण लगानीको तुलनामा CIT र EPF मार्फत गरिएको अवकाश बचत अत्यन्तै करमैत्री र सुरक्षित मानिन्छ।',
      practicalScenario: {
        persona: 'सुशीला, ३४ वर्ष, विराटनगरस्थित वाणिज्य बैंककी शाखा अधिकृत',
        income: 'वार्षिक करयोग्य तलब: रु ११,००,००० (अविवाहित करदाता)',
        scenarioText: 'कुनै कर छुट नलिँदा सुशीलाको माथिल्लो तलब २०% र ३०% को कर स्ल्याबमा पर्छ, जसले गर्दा उनले वार्षिक ठूलो कर तिर्नुपर्छ। उनले CIT मार्फत कर जोगाउने निर्णय गर्छिन्।',
        solutionText: 'सुशीलाले CIT कर्मचारी बचत वृद्धि योजनामा वर्षको रु २,५०,००० जम्मा गर्छिन्। यो रकम उनको आम्दानीको १/३ (रु ३.६६ लाख) र ३ लाखको सीमाभन्दा कम भएकाले पूरै २.५ लाख करयोग्य आयबाट घट्छ! उनको कर लाग्ने आम्दानी ११ लाखबाट घटेर ८.५ लाखमा झर्छ। यसबाट उनले वर्षमै रु ५०,००० नगद कर जोगाउँछिन्! कर जोगिनु नै पहिलो वर्षमै २०% को तत्काल प्रतिफल हो, साथै CIT ले दिने ७% ब्याज र १% नाफा लाभांश रकम पनि थपिन्छ!',
        metricHighlight: 'तत्काल रु ५०,००० नगद कर बचत + जम्मा भएको रकममा वार्षिक ८% चक्रवृद्धि ब्याज!'
      },
      formula: {
        name: 'स्वीकृत अवकाश कोष कर छुट सूत्र',
        equation: '\\text{Eligible Tax Deduction} = \\min\\left( \\frac{1}{3} \\times \\text{Assessable Income},\\; \\text{Actual Contribution},\\; \\text{NPR } 300,000 \\right)',
        variables: [
          { symbol: '\\text{Assessable Income}', name: 'वार्षिक करयोग्य कुल आम्दानी', desc: 'कर छुट घटाउनुअघिको कुल तलब तथा पारिश्रमिक' },
          { symbol: '\\text{Actual Contribution}', name: 'वास्तविक जम्मा गरेको रकम', desc: 'त्यस आर्थिक वर्षमा EPF र CIT मा जम्मा गरिएको कुल रकम' },
          { symbol: '300,000', name: 'कानुनी अधिकतम सीमा', desc: 'आयकर ऐन अनुसूची १ अनुसार तोकिएको अधिकतम वार्षिक छुट सीमा' }
        ],
        exampleCalculation: 'तलब = १२ लाख। १/३ भाग = ४ लाख। CIT जम्मा = ३ लाख। अधिकतम सीमा = ३ लाख। मान्य छुट = न्यूनतम(४ लाख, ३ लाख, ३ लाख) = रु ३,००,०००। अब ९ लाखमा मात्र कर लाग्छ!',
        shortcutCalcSlug: 'calculators/income-tax',
        shortcutCalcName: 'आयकर छुट हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'थप कर छुट पाइन्छ भन्दै वर्षमा ३ लाखभन्दा बढी रकम CIT मा जम्मा गर्नु।', correct: 'कर छुटको उद्देश्यले बचत गर्दा वार्षिक ३ लाख रुपैयाँको सीमाभित्रै रहनुहोस्।', explanation: '३ लाखभन्दा बढी जम्मा गरिएको रकममा आयकर छुटको कुनै सुविधा पाइँदैन।' },
        { mistake: 'CIT वा EPF को पैसा घुमघाम वा विलासिताका सामान किन्न ऋण निकालेर खर्च गर्नु।', correct: 'सापटी सुविधालाई केवल गम्भीर स्वास्थ्य उपचार वा घर निर्माणजस्ता अनिवार्य काममा मात्र प्रयोग गर्नुहोस्।', explanation: 'ऋण निकाल्दा साँवा घट्छ र तपाईंको बुढेसकालको लागि चक्रवृद्धि ब्याज बन्ने क्रम रोकिन्छ।' },
        { mistake: 'CIT मा जम्मा गरेको भौचर कार्यालयको लेखा शाखालाई चैत महिनाभित्र बुझाउन बिर्सनु।', correct: 'फागुन वा चैतमै CIT स्टेटमेन्ट डाउनलोड गरी एचआर/लेखामा बुझाउनुहोस् ताकि तलबमा टीडीएस समायोजन होस्।', explanation: 'प्रमाण नबुझाए कार्यालयले पूरै कर काटिदिन्छ र पछि कर कार्यालयबाट फिर्ता माग्न झन्झट हुन्छ।' }
      ],
      definitions: [
        { term: 'नागरिक लगानी कोष (CIT / NLK)', full: 'Citizen Investment Trust', meaning: 'नेपाल सरकारको स्वामित्वमा रहेको सर्वसाधारण तथा कर्मचारीहरूको ऐच्छिक बचत र पुँजी परिचालन गर्ने संस्था।' },
        { term: 'कर्मचारी सञ्चय कोष (EPF / KSK)', full: 'Employees Provident Fund', meaning: 'सरकारी तथा औपचारिक क्षेत्रका कर्मचारीहरूको अनिवार्य १०%+१०% सञ्चय कोष व्यवस्थापन गर्ने निकाय।' },
        { term: 'स्वीकृत अवकाश कोष (Approved Retirement Fund)', full: 'Approved Retirement Fund by IRD', meaning: 'आन्तरिक राजस्व विभागबाट मान्यता प्राप्त कोष, जसमा जम्मा गर्दा आयकर ऐन अनुसार कर छुट पाइन्छ।' },
        { term: 'विशेष सापटी सुविधा (Special Loan)', full: 'Loan Against Fund Balance', meaning: 'आफ्नो जम्मा भएको बचत धितो राखेर ८०% देखि ९०% सम्म तुरुन्तै पाइने सस्तो कर्जा सुविधा।' }
      ],
      faqs: [
        { q: 'के निजी कम्पनीमा काम गर्ने जोसुकैले आफैँ CIT खाता खोल्न सक्छन्?', a: 'सक्छन्। आफ्नो नागरिकता र प्यान (PAN) कार्ड लिएर नागरिक लगानी कोषको कार्यालय वा अनलाइन पोर्टलबाट कर्मचारी बचत वृद्धि योजनामा खाता खोल्न सकिन्छ।' },
        { q: 'यदि मेरो कम्पनीले SSF मा पैसा काट्छ भने मैले थप CIT मा कर छुट पाउँछु?', a: 'आयकर ऐन अनुसार SSF मा आबद्ध हुनेहरूका लागि कुल अवकाश कोष छुट सीमा वार्षिक ५ लाख रुपैयाँसम्म तोकिएको छ, जबकि गैर-SSF हरूका लागि ३ लाख मात्र हो।' },
        { q: 'CIT र सञ्चय कोषको ब्याजदर कसरी निर्धारण हुन्छ?', a: 'यी संस्थाहरूको सञ्चालक समितिले बजारको तरलता र लगानीको प्रतिफल हेरेर अर्धवार्षिक रूपमा ब्याजदर पुनरावलोकन गर्छन् र नाफा हुँदा थप बोनस दिन्छन्।' }
      ],
      takeaways: [
        'CIT मा वार्षिक ३ लाखसम्म जम्मा गरेर ९० हजारदेखि १ लाख रुपैयाँसम्मको प्रत्यक्ष नगद कर जोगाउनुहोस्।',
        'दफा ६३ को छुट सीमा: वास्तविक बचत, आम्दानीको १/३ वा रु ३ लाखमध्ये जुन कम हुन्छ त्यही लागू हुन्छ।',
        'CIT र EPF ले वार्षिक नाफा लाभांशसहित दीर्घकालीन रूपमा ७.५% देखि ८.५% सम्म प्रतिफल दिन्छन्।',
        'आपतकालीन परिस्थितिमा आफ्नो कुल जम्माको ८०% देखि ९०% सम्म सस्तो सापटी लिन सकिन्छ।',
        'फागुन/चैतमै आफ्नो जम्मा भौचर कार्यालयमा बुझाएर तलबमा कर कट्टी घटाउन नबिर्सनुहोस्।'
      ]
    }
  },

  // ── M5. THE 4% SAFE WITHDRAWAL RULE (SWR) ADAPTED FOR NEPAL ───────
  '4-percent-rule-adapted-for-nepal': {
    id: 'ret-4-percent-rule-nepal',
    slug: '4-percent-rule-adapted-for-nepal',
    categorySlug: 'retirement-planning',
    difficulty: { en: 'Advanced', np: 'उच्च' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '25 min practice', np: '२५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Portfolio Withdrawal Simulation & Trinity Study Actuarial Adaptation', np: 'पोर्टफोलियो निकासी सिमुलेसन तथा ट्रिनिटी अध्ययनको नेपाली बजार अनुकूलन अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding portfolio asset allocation and inflation risk', np: 'सम्पत्ति बाँडफाँड (Asset Allocation) र महँगीको असरको ज्ञान' },
    en: {
      title: 'The 4% Rule Adapted for Nepal: Why the American Trinity Study Fails Here',
      oneLineSummary: 'Why the classic 4% retirement withdrawal rule fails in Nepal and how to use a dynamic 3.5%-4.0% guardrail strategy.',
      summaryPoints: [
        'The US 4% Trinity Study assumes low inflation (2.5%-3.0%) and access to ultra-low-cost, deep bond and index funds - conditions that do not exist in Nepal.',
        'In Nepal, historical inflation averages 6.5% while commercial bank deposit rates swing violently between 5% and 12% across monetary cycles.',
        'Blindly withdrawing 4% plus 6.5% annual inflation during a multi-year NEPSE bear market causes rapid portfolio depletion (Sequence of Returns Risk).',
        'The Nepal-Adapted Solution: A dynamic 3.5%-4.0% Safe Withdrawal Rate (SWR) paired with Guyton-Klinger spending guardrails.',
        'Retirees must implement a "Three-Bucket System": Bucket 1 (3 years cash/call deposits), Bucket 2 (5 years debentures/FDs), and Bucket 3 (10+ years equity mutual funds).'
      ],
      whatIsThis: 'The 4% Rule (originating from the 1998 US Trinity Study) states that a retiree can withdraw 4% of their initial portfolio value in Year 1, increase that dollar amount by inflation every subsequent year, and have a 95% probability of not running out of money over a 30-year horizon. Adapting it for Nepal requires accounting for 6.5% inflation, volatile NEPSE cycles, bank deposit tax, and the absence of inflation-indexed sovereign bonds.',
      whyItMatters: 'Many Nepali finance enthusiasts read Western personal finance books (like "The Simple Path to Wealth") and assume: "I have NPR 2 Crore, so I can safely withdraw 4% (NPR 8 Lakh) per year forever." In Nepal, if NEPSE enters a 3-year bear market (as it did from 3,200 down to 1,800) and you blindly withdraw 4% plus 7% inflation every year, your equity portfolio will be permanently liquidated at bottom prices, exhausting your retirement nest egg 12 years early.',
      howItWorks: [
        { step: 1, title: 'Calibrate Initial Safe Withdrawal Rate to 3.5%-4.0%', desc: 'Start with an initial withdrawal rate of 3.5% for early retirees (retiring before 55) or 4.0% for traditional retirees (age 60+).' },
        { step: 2, title: 'Establish the 3-Year Cash Buffer (Bucket 1)', desc: 'Keep 36 months of living expenses in high-interest liquid savings or recurring short-term FDs so you never sell stocks in a crash.' },
        { step: 3, title: 'Apply Guyton-Klinger Guardrails', desc: 'If NEPSE drops over 15% in a year, skip the annual inflation raise. If the market surges over 20%, reward yourself with an inflation bump.' },
        { step: 4, title: 'Replenish Buckets Only from Dividends and Bull Gains', desc: 'When equities surge, harvest profits and refill Bucket 1 and Bucket 2. During bear markets, live entirely off Bucket 1 cash reserves.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Adapting Retirement Safe Withdrawal: US Trinity Model vs Nepal Reality',
        headers: ['Parameter / Assumption', 'Classic US Trinity Study', 'Nepali Economic Reality', 'Nepal-Adapted Strategy'],
        rows: [
          ['Baseline Inflation Rate', '2.5%-3.0% long-term CPI', '6.0%-7.5% volatile CPI', 'Requires higher equity growth weighting (50%-60%)'],
          ['Safe Asset Availability', 'US Treasury Bonds (deep liquidity)', 'Bank Fixed Deposits & Corporate Debentures', 'Subject to credit cycle swings and bank reinvestment risk'],
          ['Taxes on Withdrawals', 'Favorable capital gains & 401(k) rules', '5% Final TDS on FD interest, 5% on Share CGT', 'Must calculate net post-tax withdrawal numbers'],
          ['Market Depth & Volatility', 'Global S&P 500 multinationals', 'NEPSE (domestic, retail-driven, 3-4 yr cycles)', 'Severe sequence risk requires a 3-year cash cushion'],
          ['Recommended SWR', '4.0% flat + annual inflation', '4.0% rigid will fail in extended bear market', '3.5%-4.0% Dynamic Guardrail with Cash Bucket']
        ]
      },
      nepalContext: 'In Nepal, macroeconomic liquidity swings dictate asset returns. Under NRB Monetary Policies, credit crunch years push Class A bank FD rates up to 11%-12% while stock prices collapse. Conversely, excess liquidity years crash FD rates down to 5%-6% while stocks soar. A retiree who relies purely on bank interest sees their monthly income cut in half overnight when interest rates drop from 11% to 5.5%! Conversely, relying only on shares causes panic when NEPSE drops 40%. The Nepal-adapted framework blends commercial bank debentures (yielding 8%-10% fixed for 5-7 years) with open-ended mutual funds to neutralize these monetary swings.',
      practicalScenario: {
        persona: 'Ramesh, 58, retiring government contractor in Butwal',
        income: 'Retirement nest egg: NPR 2,50,00,000 (NPR 2.5 Crore)',
        scenarioText: 'Ramesh wants to generate NPR 85,000 per month (NPR 10.2 Lakh/year) to support himself and his wife. He wants to know how to structure his NPR 2.5 Crore so it never runs out over the next 25 years.',
        solutionText: 'Initial Withdrawal Rate: NPR 10.2 Lakh / 2.5 Crore = 4.08% SWR. Ramesh sets up the 3-Bucket Framework: Bucket 1 (Immediate Cash): NPR 30.6 Lakh (3 years of expenses at NPR 10.2L/yr) in Class A savings & 1-year FDs. Bucket 2 (Fixed Income Yield): NPR 90 Lakh in 5-to-7 year bank debentures paying 8.5% annual coupon (generating NPR 7.65 Lakh interest/yr). Bucket 3 (Long-Term Growth): NPR 1.294 Crore in open-ended mutual funds and blue-chip dividend stocks. Ramesh spends strictly from Bucket 1. The debenture interest constantly tops up Bucket 1. Bucket 3 grows unhindered to fight 6.5% inflation!',
        metricHighlight: 'NPR 2.5 Crore generates NPR 85,000/month with zero risk of running out of money during market crashes!'
      },
      formula: {
        name: 'The Dynamic Guardrail Withdrawal Equation',
        equation: '\\text{Annual Withdrawal}_{t} = \\begin{cases} W_{t-1} \\times (1 + i), & \\text{if Portfolio Return} \\ge \\text{Inflation} \\\\ W_{t-1}, & \\text{if NEPSE Bear Market Drop} > 15\\% \\end{cases}',
        variables: [
          { symbol: 'W_{t-1}', name: 'Previous Year Withdrawal', desc: 'Base rupee amount withdrawn in preceding 12 months' },
          { symbol: 'i', name: 'Nepal CPI Inflation', desc: 'Annual inflation percentage rate (approx 6.0%-6.5%)' },
          { symbol: '\\text{Guardrail}', name: 'Spending Freeze Rule', desc: 'Skip inflation raise during market drawdowns to preserve portfolio capital' }
        ],
        exampleCalculation: 'Starting withdrawal at age 60: NPR 10,00,000. Year 2 inflation is 6.5%, but NEPSE drops 18%. Ramesh freezes withdrawal at NPR 10,00,000 without taking an inflation raise, protecting his portfolio units from being sold at depressed prices.',
        shortcutCalcSlug: 'calculators/retirement',
        shortcutCalcName: 'Retirement SWR Calculator'
      },
      commonMistakes: [
        { mistake: 'Putting 100% of retirement corpus into bank Fixed Deposits.', correct: 'Allocate at least 40%-50% into equity mutual funds to fight long-term inflation.', explanation: 'Fixed deposit interest rates in Nepal frequently drop below inflation after the 5% tax deduction.' },
        { mistake: 'Withdrawing a rigid 4% + inflation every single year regardless of market crashes.', correct: 'Use dynamic guardrails: freeze inflation raises during deep NEPSE bear markets.', explanation: 'Rigid withdrawals during downturns trigger rapid capital destruction through sequence of returns risk.' },
        { mistake: 'Having zero liquid cash reserves and being forced to sell shares during a crash.', correct: 'Maintain a minimum 3-year cash bucket in savings and short FDs at all times.', explanation: 'A 3-year cash cushion gives the stock market plenty of time to recover before you need to harvest gains.' }
      ],
      definitions: [
        { term: 'Safe Withdrawal Rate (SWR)', full: 'सुरक्षित वार्षिक निकासी दर', meaning: 'The maximum percentage of initial retirement wealth that can be spent annually without running out of money.' },
        { term: 'The Trinity Study', full: 'अमेरिकी ट्रिनिटी अध्ययन', meaning: 'A famous 1998 US academic study that demonstrated a 4% initial withdrawal had a 95% survival rate over 30 years.' },
        { term: 'Sequence of Returns Risk', full: 'प्रतिफलको शृङ्खला जोखिम', meaning: 'The devastating impact of experiencing negative market returns during the first 3 to 5 years of retirement.' },
        { term: 'Three-Bucket Strategy', full: 'तीन-भाँडो (Three-Bucket) लगानी विधि', meaning: 'Segmenting retirement money into short-term cash, medium-term debt, and long-term equity growth buckets.' }
      ],
      faqs: [
        { q: 'Why is 4% considered risky in Nepal compared to the United States?', a: 'Because Nepal has much higher inflation (6.5% vs 2.5%), no inflation-protected treasury bonds, volatile bank deposit rates, and a retail-driven stock market that experiences multi-year bear cycles.' },
        { q: 'How often should I rebalance my retirement buckets in Nepal?', a: 'Rebalance once a year, preferably in Shrawan or Bhadra following the announcement of NRB’s annual Monetary Policy and company fourth-quarter earnings.' },
        { q: 'Can I retire at age 45 using the 4% rule in Nepal (FIRE movement)?', a: 'For an early retirement spanning 35-45 years, 4% is too aggressive. Early retirees in Nepal should use a conservative 3.0%-3.25% safe withdrawal rate with a 50%+ equity allocation.' }
      ],
      takeaways: [
        'The US 4% Trinity rule cannot be blindly applied in Nepal due to 6.5% inflation and volatile bank rates.',
        'Adopt a dynamic 3.5%-4.0% initial withdrawal rate paired with flexible spending guardrails.',
        'Never put 100% in fixed deposits; you need equity mutual funds to beat compounding inflation.',
        'Use the Three-Bucket System: 3 years in cash, 5 years in fixed income, remainder in equity growth.',
        'Freeze your annual inflation raises during deep NEPSE bear markets to protect capital longevity.'
      ]
    },
    np: {
      title: 'नेपालका लागि ४% सुरक्षित निकासी नियम (4% Rule): अमेरिकी ट्रिनिटी मोडल यहाँ किन फेल हुन्छ?',
      oneLineSummary: 'नेपालको ६.५% महँगी र बजार उतारचढावमा अमेरिकी ४% नियम किन असफल हुन्छ र यहाँ कुन रणनीति अपनाउनुपर्छ?',
      summaryPoints: [
        'अमेरिकी ट्रिनिटी अध्ययन (Trinity Study) कम महँगी (२.५%-३.०%) र गहिरो बन्ड बजारको आधारमा बनेको हो, जुन नेपाली बजारको वास्तविकतासँग मेल खाँदैन।',
        'नेपालमा औसत महँगी दर ६.५% छ भने बैंकको मुद्दती ब्याज तरलताको चक्र अनुसार ५% देखि १२% सम्म तीव्र रूपमा घटबढ हुन्छ।',
        'नेप्से घटेको बेला (Bear Market) जथाभावी ४% का दरले पैसा झिक्दै जाँदा ३-४ वर्षमै साँवा सकिने ठूलो जोखिम (Sequence of Returns Risk) हुन्छ।',
        'नेपाली समाधान: सुरुमा ३.५% देखि ४.०% को गतिशील सुरक्षित निकासी दर (SWR) र बजार घटेको वर्ष खर्च नबढाउने नियम (Guardrails) लागू गर्नुपर्छ।',
        'अवकाशपछि "तीन-भाँडो लगानी विधि" (Three-Bucket System) अनिवार्य चाहिन्छ: भाँडो १ (३ वर्षको खर्च नगदमै), भाँडो २ (५ वर्षको खर्च डिबेन्चरमा), र भाँडो ३ (दीर्घकालीन इक्विटी फन्ड)।'
      ],
      whatIsThis: '४% को नियम (4% Safe Withdrawal Rule) भनेको अमेरिकी ट्रिनिटी अध्ययनबाट आएको अवकाश सूत्र हो। यस अनुसार अवकाशको पहिलो वर्ष आफ्नो कुल सम्पत्तिको ४% रकम झिक्ने र त्यसपछिका वर्षहरूमा त्यसमा महँगी दर जोडेर खर्च गर्दै जाँदा ३० वर्षसम्म पैसा नसकिने ९५% सम्भावना हुन्छ। तर नेपालमा ६.५% महँगी र नेप्सेको अस्थिरताका कारण यसलाई परिमार्जन गरेर मात्र प्रयोग गर्न सकिन्छ।',
      whyItMatters: 'धेरै नेपालीहरू विदेशी पुस्तकहरू पढेर सोच्छन्: "मसँग २ करोडको सम्पत्ति छ, अब म वर्षको ४% (८ लाख रुपैयाँ) झिकेर जीवनभर ढुक्कले खान सक्छु।" तर यदि तपाईंले अवकाश लिएकै वर्ष नेप्से ३,२०० बाट १८०० मा झर्‍यो र तपाईंले मुद्दती वा सेयरबाट निरन्तर पैसा झिक्नुभयो भने, सस्तो मूल्यमा सेयर काटिन्छ र तपाईंको २ करोड रुपैयाँ १२-१५ वर्षमै रित्तिन सक्छ। नेपालको आर्थिक उतारचढाव बुझेर मात्र निकासी दर तय गर्नुपर्छ।',
      howItWorks: [
        { step: 1, title: 'सुरुवाती निकासी दर ३.५% देखि ४.०% तय गर्नुहोस्', desc: 'छिटो अवकाश लिनेहरूले ३.५% र ६० वर्ष पुगेर अवकाश लिनेहरूले अधिकतम ४.०% बाट निकासी सुरु गर्नुहोस्।' },
        { step: 2, title: '३ वर्षको खर्च नगद खातामा राख्नुहोस् (भाँडो १)', desc: '३६ महिनाको घरखर्च उच्च ब्याज दिने बचत खाता वा १ वर्षे मुद्दतीमा राख्नुहोस् ताकि सेयर बजार घट्दा सेयर बेच्नै नपरोस्।' },
        { step: 3, title: 'संरक्षण नियम (Guardrails) लागू गर्नुहोस्', desc: 'यदि नेप्से बजार वर्षमा १५% भन्दा बढी घट्यो भने त्यो वर्ष आफ्नो वार्षिक खर्चमा महँगी भत्ता नथप्नुहोस् (खर्च स्थिर राख्नुहोस्)।' },
        { step: 4, title: 'बजार बढेको बेला मात्र भाँडो १ र २ भर्नुहोस्', desc: 'बजार निकै बढेको वर्ष सेयरको नाफा बुक गरेर नगद भाँडो भर्नुहोस्; मन्दी आएको वर्ष केवल भाँडो १ को नगदबाट मात्र गुजारा चलाउनुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'अवकाश निकासी नियमको तुलना: अमेरिकी ट्रिनिटी मोडल बनाम नेपाली बजारको यथार्थ',
        headers: ['तुलनाको सूचक', 'अमेरिकी ट्रिनिटी मोडल (Classic)', 'नेपालको आर्थिक यथार्थ', 'नेपालका लागि परिमार्जित रणनीति'],
        rows: [
          ['दीर्घकालीन महँगी दर', 'वार्षिक २.५% देखि ३.०%', 'वार्षिक ६.०% देखि ७.५%', 'महँगी जित्न कम्तीमा ५०% पैसा इक्विटी म्युचुअल फन्डमा राख्नैपर्छ'],
          ['सुरक्षित ऋणपत्रको उपलब्धता', 'अमेरिकी ट्रेजरी बन्ड (गहिरो बजार)', 'बैंक मुद्दती तथा कर्पोरेट डिबेन्चर', 'ब्याजदरको तीव्र उतारचढाव र ५% करको प्रभाव'],
          ['निकासीपछिको कर प्रभाव', 'करमैत्री पेन्सन खाताहरू', 'मुद्दती ब्याजमा ५% र सेयर नाफामा ५% कर', 'कर कट्टीपछिको खुद (Net) रकम मात्र हिसाब गर्नुपर्छ'],
          ['बजारको गहिराइ र जोखिम', 'विश्वभर फैलिएका बहुराष्ट्रिय कम्पनी', 'नेप्से (सानो बजार, ३-४ वर्षे चक्र)', 'शुरुवाती वर्षको गिरावटबाट जोगिन ३ वर्षको नगद बफर अनिवार्य'],
          ['सिफारिस गरिएको सुरक्षित दर', 'कडा ४.०% + हरेक वर्ष महँगी थप', 'कडा नियमले मन्दीको बेला कोष रित्त्याउँछ', '३.५% देखि ४.०% गतिशील निकासी + ३-भाँडो प्रणाली']
        ]
      },
      nepalContext: 'नेपालमा राष्ट्र बैंकको मौद्रिक नीति र तरलताले सबै सम्पत्तिको प्रतिफल निर्धारण गर्छ। तरलता अभाव भएको वर्ष बैंक मुद्दतीको ब्याज ११-१२ प्रतिशत पुग्छ र सेयर बजार घट्छ। तर तरलता बढी भएको वर्ष मुद्दतीको ब्याज घटेर ५-६ प्रतिशतमा झर्छ र सेयर बजार उकालो लाग्छ। यदि कुनै अवकाशप्राप्त व्यक्ति केवल बैंक मुद्दतीको भर पर्छ भने ब्याज ११% बाट ५.५% मा झर्दा उसको मासिक आम्दानी रातारात आधा घट्छ! अर्कोतर्फ सेयरमा मात्र पैसा राख्दा बजार ४०% घट्दा आत्तिनुपर्छ। त्यसैले नेपालमा बैंक डिबेन्चर (जसले ५ देखि ७ वर्षसम्म स्थिर ८-९% ब्याज दिन्छ) र खुला म्युचुअल फन्डको मिश्रण नै अवकाशको सबैभन्दा सुरक्षित उपाय हो।',
      practicalScenario: {
        persona: 'रमेश, ५८ वर्ष, बुटवलका निवृत्त सरकारी ठेकेदार',
        income: 'कुल अवकाश कोष: रु २,५०,००,००० (२.५ करोड रुपैयाँ)',
        scenarioText: 'रमेशलाई आफ्नो र श्रीमतीको जीवन चलाउन मासिक ८५,००० रुपैयाँ (वार्षिक १०.२ लाख) चाहिन्छ। उनले आफ्नो २.५ करोड रुपैयाँलाई कसरी व्यवस्थापन गर्ने ताकि २५ वर्षसम्म पैसा कहिल्यै नसकियोस्?',
        solutionText: 'सुरुवाती निकासी दर: १०.२ लाख ÷ २.५ करोड = ४.०८%। रमेशले तीन-भाँडो प्रणाली अपनाउँछन्: भाँडो १ (तुरुन्त चाहिने नगद): रु ३०.६ लाख (३ वर्षको खर्च) क वर्गको बैंक बचत र १ वर्षे मुद्दतीमा। भाँडो २ (स्थिर ब्याज): रु ९० लाख बैंक डिबेन्चरमा (वार्षिक ८.५% ब्याजले वर्षको ७.६५ लाख आम्दानी दिन्छ)। भाँडो ३ (दीर्घकालीन वृद्धि): बाँकी रु १.२९४ करोड खुला म्युचुअल फन्ड र राम्रा वाणिज्य बैंकको सेयरमा। रमेशले खर्च केवल भाँडो १ बाट गर्छन्। डिबेन्चरको ब्याजले भाँडो १ लाई भरिरहन्छ। र भाँडो ३ ले महँगीलाई जित्दै कोष बढाउँछ!',
        metricHighlight: '२.५ करोडबाट मासिक रु ८५,००० ढुक्कसँग प्राप्त, बजार जति नै घटे पनि पैसा सकिने जोखिम शून्य!'
      },
      formula: {
        name: 'गतिशील संरक्षण निकासी सूत्र (Dynamic Guardrails)',
        equation: '\\text{Annual Withdrawal}_{t} = \\begin{cases} W_{t-1} \\times (1 + i), & \\text{if Portfolio Return} \\ge \\text{Inflation} \\\\ W_{t-1}, & \\text{if NEPSE Bear Market Drop} > 15\\% \\end{cases}',
        variables: [
          { symbol: 'W_{t-1}', name: 'अघिल्लो वर्षको खर्च रकम', desc: 'गत १२ महिनामा जीवनयापनका लागि झिकिएको आधारभूत रकम' },
          { symbol: 'i', name: 'नेपालको औसत महँगी दर', desc: 'वार्षिक मुद्रास्फीति प्रतिशत (करिब ६.०% देखि ६.५%)' },
          { symbol: '\\text{Guardrail}', name: 'खर्च स्थिर राख्ने नियम', desc: 'बजार धेरै घटेको वर्ष महँगी भत्ता नथपी खर्च पुरानै स्तरमा राख्ने' }
        ],
        exampleCalculation: '६० वर्षमा सुरुवाती निकासी = रु १०,००,०००। अर्को वर्ष महँगी ६.५% बढ्यो तर नेप्से बजार १८% ले घट्यो। रमेशले आफ्नो खर्च १० लाखमै स्थिर राख्छन् र महँगी भत्ता थप्दैनन्, जसले गर्दा सस्तो भाउमा सम्पत्ति बेच्नु पर्दैन।',
        shortcutCalcSlug: 'calculators/retirement',
        shortcutCalcName: 'अवकाश निकासी हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'अवकाश कोषको शतप्रतिशत पैसा बैंकको मुद्दती निक्षेपमा मात्र थुपार्नु।', correct: 'दीर्घकालीन महँगी जित्न कम्तीमा ४०% देखि ५०% रकम इक्विटी म्युचुअल फन्डमा राख्नुहोस्।', explanation: '५% कर काटेपछि मुद्दतीको वास्तविक ब्याजदर प्रायः देशको महँगीभन्दा कम हुन पुग्छ।' },
        { mistake: 'बजार जतिसुकै घटे पनि हरेक वर्ष जिद्दी गरेर ४% मा महँगी जोडेर पैसा झिक्नु।', correct: 'लचिलो नियम अपनाउनुहोस्: सेयर बजार धेरै घटेको वर्ष आफ्नो खर्च पुरानै सीमामा सीमित राख्नुहोस्।', explanation: 'मन्दीको बेला जबर्जस्ती धेरै पैसा झिक्दा सम्पत्तिको साँवा तीव्र गतिमा नष्ट हुन्छ।' },
        { mistake: 'नगद सञ्चितिको भाँडो नराखी सबै पैसा सेयरमा राख्नु र आपत पर्दा घाटामा सेयर बेच्नु।', correct: 'कम्तीमा ३ वर्षको घरखर्च जहिले पनि बैंक बचत र मुद्दती निक्षेपको सुरक्षित भाँडोमा राख्नुहोस्।', explanation: '३ वर्षको नगद भएपछि सेयर बजार जति नै घटे पनि बजार नउठुन्जेल पर्खन सकिन्छ।' }
      ],
      definitions: [
        { term: 'सुरक्षित निकासी दर (SWR)', full: 'Safe Withdrawal Rate', meaning: 'अवकाशपछि साँवा नसकिने गरी आफ्नो कुल सम्पत्तिबाट प्रतिवर्ष झिक्न मिल्ने सुरक्षित प्रतिशत।' },
        { term: 'ट्रिनिटी अध्ययन (Trinity Study)', full: 'The US Trinity Study 1998', meaning: '४% को दरले रकम झिक्दा ३० वर्षसम्म पैसा टिक्ने देखाएको प्रख्यात अमेरिकी अनुसन्धान।' },
        { term: 'प्रतिफलको शृङ्खला जोखिम (Sequence Risk)', full: 'Sequence of Returns Risk', meaning: 'अवकाश लिएका सुरुका वर्षहरूमै सेयर बजारमा ठूलो मन्दी आउँदा पर्ने गम्भीर आर्थिक असर।' },
        { term: 'तीन-भाँडो लगानी विधि (Three-Bucket Strategy)', full: 'Three-Bucket Retirement Framework', meaning: 'पैसालाई तत्कालको नगद, मध्यम अवधिको ऋणपत्र र दीर्घकालीन सेयर लगानी गरी तीन भागमा बाँड्ने तरिका।' }
      ],
      faqs: [
        { q: 'अमेरिकामा ४% सुरक्षित मानिन्छ भने नेपालमा यो किन जोखिमपूर्ण भयो?', a: 'किनकि नेपालमा महँगी अमेरिकाभन्दा दोब्बर (६.५%) छ, बैंक ब्याजदर तीव्र रूपमा घटबढ हुन्छ र नेप्से बजार ३-४ वर्षसम्म लगातार घट्ने चक्रबाट गुज्रिन्छ।' },
        { q: 'अवकाशपछिको लगानीका भाँडाहरू वर्षमा कति पटक मिलाउनु (Rebalance) पर्छ?', a: 'वर्षको एक पटक, विशेष गरी साउन वा भदौ महिनामा राष्ट्र बैंकको मौद्रिक नीति आएपछि र कम्पनीहरूको वार्षिक वित्तीय विवरण हेरेपछि पुनरावलोकन गर्नु उपयुक्त हुन्छ।' },
        { q: 'के नेपालमा ४५ वर्षमै अवकाश लिएर ४% नियम प्रयोग गर्न सकिन्छ (FIRE Movement)?', a: '४५ वर्षमा अवकाश लिँदा जीवन अझै ३५-४० वर्ष बाँकी हुन्छ। त्यसैले ४% को सट्टा अझ सुरक्षित ३.०% देखि ३.२५% को निकासी दर अपनाउनुपर्छ र कम्तीमा ६०% लगानी सेयरमा हुनुपर्छ।' }
      ],
      takeaways: [
        'अमेरिकी ४% ट्रिनिटी नियमलाई नेपालमा आँखा चिम्लेर लागू गर्दा ६.५% महँगीका कारण असफल हुन सक्छ।',
        'नेपालमा सुरुवाती ३.५% देखि ४.०% को गतिशील निकासी दर र संरक्षण नियम (Guardrails) अपनाउनुहोस्।',
        'सबै पैसा मुद्दतीमा नराख्नुहोस्; महँगी जित्न कम्तीमा ४०%-५०% रकम इक्विटी म्युचुअल फन्डमा चाहिन्छ।',
        'तीन-भाँडो विधि प्रयोग गर्नुहोस्: ३ वर्षको नगद, ५ वर्षको स्थिर डिबेन्चर, र बाँकी दीर्घकालीन सेयर।',
        'सेयर बजार मन्दीमा गएको वर्ष खर्चमा महँगी भत्ता नथपी पुरानै सीमामा रहनुहोस् ताकि पूँजी सुरक्षित रहोस्।'
      ]
    }
  },

  // ── M6. MUTUAL FUND SWP FOR RETIREMENT PENSION INCOME ─────────────
  'swp-mutual-fund-retirement-income-nepal': {
    id: 'ret-swp-mutual-fund',
    slug: 'swp-mutual-fund-retirement-income-nepal',
    categorySlug: 'retirement-planning',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'SEBON Mutual Fund Regulations & Tax Withholding Directives', np: 'धितोपत्र बोर्ड म्युचुअल फन्ड नियमावली तथा आयकर स्रोतमा कर कट्टी निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding open-ended mutual funds and connectIPS transfers', np: 'खुलामुखी म्युचुअल फन्ड र connectIPS रकमान्तरको सामान्य ज्ञान' },
    en: {
      title: 'Creating an Automated Monthly Pension with Mutual Fund SWP in Nepal',
      oneLineSummary: 'Turn your lump-sum retirement money into an inflation-beating, tax-efficient monthly pension using open-ended mutual funds.',
      summaryPoints: [
        'A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed cash amount from an open-ended mutual fund directly into your bank account every month.',
        'Unlike bank fixed deposits where the principal stays static and gets crushed by inflation, an SWP allows the remaining fund units to keep growing with NEPSE.',
        'SWP is vastly more tax-efficient than bank FD interest: only the net capital gain portion of redeemed units is taxed at 5%, not the entire withdrawal.',
        'Open-ended mutual funds in Nepal (e.g. NIBL Sahabhagita Fund, Siddhartha Systematic Investment Scheme) offer seamless automated SWP mandates.',
        'A sustainable SWP withdrawal rate of 6%-7% provides regular monthly cash flow while keeping the underlying corpus growing over decades.'
      ],
      whatIsThis: 'A Systematic Withdrawal Plan (SWP - योजनाबद्ध निकासी योजना) is the reverse of an SIP. Instead of depositing money monthly, you invest a lump sum into an open-ended mutual fund scheme and instruct the fund manager to redeem a fixed rupee amount on a specific date each month and transfer the cash directly into your bank account.',
      whyItMatters: 'Retirees in Nepal traditionally lock their lump-sum gratuity or retirement bonus into bank Fixed Deposits (FDs). But bank FD interest has three major flaws: (1) When interest rates collapse from 11% to 5.5%, your monthly living income gets halved; (2) The 5% TDS is charged on every single rupee of interest; and (3) Your original principal never grows, meaning inflation quietly erodes your purchasing power over 15 years. A mutual fund SWP solves all three problems by combining monthly cash liquidity with compound capital growth.',
      howItWorks: [
        { step: 1, title: 'Invest Lump Sum into an Open-Ended Mutual Fund', desc: 'Deploy your retirement corpus across top-performing open-ended mutual funds registered with SEBON.' },
        { step: 2, title: 'Register an Automated SWP Mandate', desc: 'Submit an SWP application through the fund manager\'s online portal specifying the monthly payout date (e.g. 5th of every month) and amount.' },
        { step: 3, title: 'Automated Unit Redemption at Current NAV', desc: 'Each month, the fund manager redeems the exact number of units needed to generate your payout at that day\'s Net Asset Value (NAV).' },
        { step: 4, title: 'Direct Bank Credit via connectIPS', desc: 'The proceeds are transferred directly into your commercial bank savings account, providing a seamless "monthly pension salary"!' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Monthly Pension Comparison: Bank Fixed Deposit (FD) vs Mutual Fund SWP',
        headers: ['Financial Parameter', 'Traditional Bank Fixed Deposit (FD)', 'Open-Ended Mutual Fund SWP', 'Why SWP Wins for Retirees'],
        rows: [
          ['Monthly Cash Flow Stability', 'Fluctuates wildly when interest rates reset (5%-12%)', 'Fixed predictable rupee amount chosen by you', 'Budgeting peace of mind'],
          ['Inflation Protection of Corpus', 'ZERO: Principal remains completely flat and loses purchasing power', 'YES: Remaining units compound with NEPSE growth', 'Protects purchasing power over 20+ years'],
          ['Tax Efficiency (TDS)', '5% flat tax on 100% of all interest earned', '5% CGT applies ONLY to the profit portion of redeemed units', 'Significantly lower effective tax paid'],
          ['Liquidity & Flexibility', 'Breaking FD early triggers interest penalties', 'Can pause, increase, decrease, or stop SWP anytime', 'Zero lock-in friction after standard holding'],
          ['Estate / Inheritance Value', 'Depleted by inflation when passed to heirs', 'Appreciated unit value creates lasting generational wealth', 'Higher terminal legacy corpus']
        ]
      },
      nepalContext: 'In Nepal, SEBON Mutual Fund Regulations 2067 govern open-ended schemes. Unlike close-ended schemes which have a fixed 7-to-10 year maturity and trade on NEPSE TMS, open-ended schemes operate continuously with direct transactions between investor and fund manager at daily published NAV. Capital Gains Tax on mutual fund redemptions for individual Nepali residents is a final withholding of 5% (for units held over 365 days) under Section 92 of the Income Tax Act. When units are redeemed under an SWP, the return of your original cost basis is completely tax-free; tax is calculated exclusively on the gain fraction.',
      practicalScenario: {
        persona: 'Hari Narayan, 62, retired high-school principal in Dharan',
        income: 'Retirement lump sum: NPR 60,00,000 (NPR 60 Lakh)',
        scenarioText: 'Hari Narayan received NPR 60 Lakh from his pension gratuity. He needs NPR 35,000 per month (NPR 4.2 Lakh/year) to cover all household bills. He considered putting it all in a bank FD at 7%, which would yield NPR 35,000 before tax, but worried that his principal would never grow.',
        solutionText: 'Hari Narayan invests the NPR 60 Lakh into an open-ended mutual fund and sets up an automated SWP of NPR 35,000 per month (a 7.0% annual withdrawal rate). Over the next 10 years, assuming the mutual fund achieves an average 11% annualized total return: Hari Narayan receives his NPR 35,000 every single month like clockwork (collecting NPR 42,00,000 in total pension cash over 10 years). Meanwhile, because the fund earned 11% while he withdrew 7%, his remaining invested corpus GREW from NPR 60 Lakh to over NPR 88 Lakh! His pension paid his bills AND his wealth increased!',
        metricHighlight: 'Collected NPR 42 Lakh in monthly pension + remaining corpus GREW from NPR 60L to NPR 88 Lakh!'
      },
      formula: {
        name: 'The SWP Monthly Units Redemption Formula',
        equation: '\\text{Units Redeemed} = \\frac{\\text{Target Monthly Pension Amount}}{\\text{Current Scheme NAV}}',
        variables: [
          { symbol: '\\text{Units Redeemed}', name: 'Units Liquidated', desc: 'Number of mutual fund units sold this month to fund the payout' },
          { symbol: '\\text{Target Amount}', name: 'Monthly Cash Needed', desc: 'Fixed rupee payout instructed in your SWP mandate' },
          { symbol: '\\text{Current NAV}', name: 'Net Asset Value', desc: 'Prevailing net asset value per unit published by the fund manager' }
        ],
        exampleCalculation: 'Target monthly pension: NPR 35,000. Current fund NAV: NPR 14.20 per unit. Units redeemed this month = 35,000 ÷ 14.20 = 2,464.79 units. The remaining units stay invested and continue earning dividends and market appreciation!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate SWP Cash Flows'
      },
      commonMistakes: [
        { mistake: 'Setting an unrealistically high SWP withdrawal rate (e.g. 12%-15% per year).', correct: 'Limit your annual SWP withdrawal rate to 6%-7% of your initial corpus.', explanation: 'Withdrawing faster than the fund can grow will deplete your units during market downturns.' },
        { mistake: 'Panicking and canceling your SWP when NEPSE experiences a temporary drop.', correct: 'Let the automated SWP continue running; unit redemptions naturally balance out over market cycles.', explanation: 'Pausing your SWP cuts off your living expenses and forces you to scramble for expensive loans.' },
        { mistake: 'Investing in close-ended mutual funds expecting SWP functionality.', correct: 'SWP is available ONLY in open-ended mutual funds (खुलामुखी म्युचुअल फन्ड).', explanation: 'Close-ended funds trade on NEPSE TMS and do not provide automated monthly redemption mandates.' }
      ],
      definitions: [
        { term: 'Systematic Withdrawal Plan (SWP)', full: 'योजनाबद्ध निकासी योजना', meaning: 'An automated facility where a mutual fund redeems units monthly to transfer a fixed cash pension into your bank.' },
        { term: 'Open-Ended Mutual Fund', full: 'खुलामुखी म्युचुअल फन्ड', meaning: 'Mutual funds with no fixed maturity date where units are bought and sold directly through the fund manager at NAV.' },
        { term: 'Net Asset Value (NAV)', full: 'खुद सम्पत्ति मूल्य', meaning: 'The per-unit market value of all underlying shares, bonds, and cash held by the mutual fund scheme.' },
        { term: 'Capital Gain Fraction', full: 'पूँजीगत लाभ अनुपात', meaning: 'The portion of an SWP redemption that represents profit, which is the only part subject to 5% tax.' }
      ],
      faqs: [
        { q: 'Which open-ended mutual funds in Nepal currently offer an automated SWP facility?', a: 'Leading fund managers like NIBL Ace Capital (NIBL Sahabhagita Fund), Siddhartha Capital (Siddhartha Systematic Investment Scheme), and Sanima Capital provide online SWP mandate registration.' },
        { q: 'How is tax deducted when I receive an SWP payment in my bank account?', a: 'The fund manager automatically calculates the Capital Gains Tax (5% for holdings > 365 days) on the gain portion and deducts it at source, crediting the net amount to your bank.' },
        { q: 'Can I change my monthly SWP withdrawal amount if my living expenses increase?', a: 'Yes. You can submit an online amendment request to increase or decrease your monthly withdrawal amount at any time without penalties.' }
      ],
      takeaways: [
        'An open-ended mutual fund SWP creates an automated monthly pension directly credited to your bank account.',
        'Unlike bank fixed deposits, an SWP allows your remaining retirement corpus to beat inflation.',
        'SWP is highly tax-efficient: 5% tax applies only to the capital gain portion, not the entire withdrawal.',
        'A sustainable withdrawal rate of 6%-7% preserves and grows your principal over multi-decade horizons.',
        'Ensure you invest strictly in open-ended mutual funds, as close-ended funds do not support SWP mandates.'
      ]
    },
    np: {
      title: 'नेपालमा खुला म्युचुअल फन्ड SWP मार्फत स्वचालित मासिक पेन्सन सिर्जना गर्ने तरिका',
      oneLineSummary: 'आफ्नो एकमुष्ट अवकाश कोषलाई खुलामुखी म्युचुअल फन्डको SWP मार्फत महँगी जित्ने र करमैत्री मासिक पेन्सनमा बदल्नुहोस्।',
      summaryPoints: [
        'सिस्टम्याटिक विथड्रअल प्लान (SWP) भनेको खुलामुखी म्युचुअल फन्डबाट हरेक महिना तोकिएको निश्चित रकम सिधै आफ्नो बैंक खातामा झिक्ने स्वचालित सुविधा हो।',
        'बैंक मुद्दतीमा साँवा रकम त्यत्तिकै रहँदा महँगीले खाएर रित्तिन्छ, तर SWP मा बाँकी रहेका फन्डका युनिटहरू सेयर बजारसँगै बढिरहन्छन्।',
        'SWP बैंक मुद्दतीको ब्याजभन्दा करको दृष्टिकोणले निकै फाइदाजनक छ: झिकेको कुल रकममा होइन, केवल नाफा भएको अंशमा मात्र ५% पुँजीगत लाभकर लाग्छ।',
        'नेपालमा सञ्चालित खुलामुखी म्युचुअल फन्डहरू (जस्तै: NIBL सहभागिता फन्ड, सिद्धार्थ सिस्टेमेटिक स्किम) ले अनलाइनमार्फत सजिलै SWP सुविधा दिन्छन्।',
        'वार्षिक ६% देखि ७% सम्मको दिगो SWP निकासी दर राख्दा नियमित मासिक पेन्सन पनि पाइन्छ र लगानी गरिएको मूल साँवा पनि दशकौँसम्म बढिरहन्छ।'
      ],
      whatIsThis: 'सिस्टम्याटिक विथड्रअल प्लान (SWP - योजनाबद्ध निकासी योजना) भनेको SIP को ठ्याक्कै उल्टो प्रक्रिया हो। SIP मा हरेक महिना निश्चित रकम जम्मा गरिन्छ भने, SWP मा एकमुष्ट रकम खुला म्युचुअल फन्डमा लगानी गरेर हरेक महिनाको तोकिएको गते निश्चित रकम आफ्नो बैंक खातामा पठाउन फन्ड म्यानेजरलाई निर्देशन दिइन्छ।',
      whyItMatters: 'नेपालमा अवकाश पाएका व्यक्तिहरू आफ्नो उपदान वा सञ्चय कोषको एकमुष्ट रकम बैंकको मुद्दती निक्षेप (FD) मा राख्छन्। तर बैंक मुद्दतीका ३ वटा ठूला कमजोरी छन्: (१) बजारमा ब्याजदर ११% बाट घटेर ५.५% मा झर्दा मासिक खर्च चलाउने आम्दानी रातारात आधा घट्छ; (२) पुरै ब्याज रकममा ५% कर काटिन्छ; र (३) मूल साँवा कहिल्यै नबढ्ने हुँदा १५ वर्षपछि महँगीले पैसाको मूल्य खाइदिन्छ। खुला म्युचुअल फन्डको SWP ले मासिक पेन्सन पनि दिन्छ र बाँकी रकम बढाएर महँगीबाट पनि बचाउँछ।',
      howItWorks: [
        { step: 1, title: 'खुलामुखी म्युचुअल फन्डमा एकमुष्ट लगानी गर्नुहोस्', desc: 'धितोपत्र बोर्ड (SEBON) मा दर्ता भएका राम्रा खुलामुखी म्युचुअल फन्डहरूमा आफ्नो अवकाशको रकम एकमुष्ट लगानी गर्नुहोस्।' },
        { step: 2, title: 'अनलाइन SWP फारम भर्नुहोस्', desc: 'फन्ड म्यानेजरको वेबसाइटबाट हरेक महिना कति रुपैयाँ (जस्तै: महिनाको ३० हजार) र कुन गते (जस्तै: हरेक महिनाको ५ गते) झिक्ने हो, तय गर्नुहोस्।' },
        { step: 3, title: 'त्यस दिनको NAV अनुसार युनिट कट्टी', desc: 'तोकिएको रकम पुर्याउन त्यस दिनको खुद सम्पत्ति मूल्य (NAV) अनुसार जति युनिट चाहिन्छ, फन्ड म्यानेजरले त्यति मात्र युनिट बिक्री गर्छ।' },
        { step: 4, title: 'connectIPS मार्फत सिधै बैंक खातामा पैसा जम्मा', desc: 'बिक्री भएको रकम कर कट्टी गरी सिधै तपाईंको बैंक बचत खातामा जम्मा हुन्छ र तपाईंले जागिर खाँदा जस्तै नियमित "मासिक तलब" पाउनुहुन्छ!' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'मासिक पेन्सन आम्दानीको तुलना: बैंक मुद्दती निक्षेप (FD) बनाम खुला म्युचुअल फन्ड SWP',
        headers: ['वित्तीय सूचक', 'परम्परागत बैंक मुद्दती निक्षेप (FD)', 'खुला म्युचुअल फन्ड SWP', 'पेन्सनरका लागि SWP किन जित्छ?'],
        rows: [
          ['मासिक आम्दानीको स्थिरता', 'ब्याजदर घटबढ हुँदा (५%-१२%) आम्दानी अस्थिर हुन्छ', 'तपाईंले आफैँ तोकेको स्थिर मासिक रकम पाइन्छ', 'नियमित खर्च चलाउन पूर्ण मानसिक शान्ति'],
          ['साँवाको महँगी सुरक्षा', 'शून्य: साँवा रकम कहिल्यै बढ्दैन र महँगीले खाइदिन्छ', 'हुन्छ: बाँकी रहेका युनिटहरू सेयर बजारसँगै बढिरहन्छन्', '२० वर्षपछि पनि पैसाको क्रयशक्ति जोगिन्छ'],
          ['करको भार (TDS)', 'आएको कुल ब्याजको शतप्रतिशत रकममै ५% कर लाग्छ', 'झिकिएको रकमको नाफा (Capital Gain) अंशमा मात्र ५% कर', 'वास्तविक कर निकै कम तिर्नुपर्छ'],
          ['तरलता र लचिलोपन', 'समयअगावै तोड्दा जरिवाना र ब्याज नोक्सान हुन्छ', 'जहिलेसुकै रकम बढाउन, घटाउन वा रोक्न सकिन्छ', 'कुनै झन्झट वा जरिवाना छैन'],
          ['सन्ततिलाई छाड्ने सम्पत्ति', 'महँगीका कारण मूल्य घटेको साँवा मात्र बाँकी रहन्छ', 'युनिटको भाउ बढेर छोराछोरीलाई ठूलो सम्पत्ति छाड्न सकिन्छ', 'सम्पत्तिको अन्तिम मूल्य निकै धेरै हुन्छ']
        ]
      },
      nepalContext: 'नेपालमा सामूहिक लगानी कोष नियमावली २०६७ अनुसार खुलामुखी योजनाहरू सञ्चालन हुन्छन्। बन्दमुखी (Close-ended) स्किमहरूको ७ देखि १० वर्षको निश्चित अवधि हुन्छ र नेप्सेमा दोस्रो बजारमार्फत मात्र किनबेच हुन्छ। तर खुलामुखी योजनाको कुनै परिपक्व हुने अवधि हुँदैन र सिधै क्यापिटलबाट दैनिक प्रकाशित हुने NAV मा कारोबार हुन्छ। आयकर ऐनको दफा ९२ अनुसार व्यक्तिगत लगानीकर्ताले ३६५ दिनभन्दा बढी राखेको म्युचुअल फन्ड युनिटमा ५% मात्र अन्तिम पुँजीगत लाभकर (CGT) लाग्छ। SWP गर्दा आफ्नो पुरानो लगानीको साँवा फिर्ता आउँदा कर लाग्दैन, केवल नाफा भएको अंशमा मात्र ५% कर काटिन्छ।',
      practicalScenario: {
        persona: 'हरिनारायण, ६२ वर्ष, धरानका निवृत्त माध्यमिक विद्यालय प्रधानाध्यापक',
        income: 'अवकाश उपदान रकम: रु ६०,००,००० (६० लाख रुपैयाँ)',
        scenarioText: 'हरिनारायणले विद्यालयबाट ६० लाख रुपैयाँ उपदान पाए। उनलाई आफ्नो घरखर्च चलाउन मासिक ३५,००० रुपैयाँ (वार्षिक ४.२ लाख) चाहिन्छ। उनले सुरुमा ७% ब्याज दिने बैंक मुद्दतीमा राख्ने सोचेका थिए, तर साँवा कहिल्यै नबढ्ने चिन्ता भयो।',
        solutionText: 'हरिनारायणले त्यो ६० लाख रुपैयाँ एउटा खुला म्युचुअल फन्डमा लगानी गरे र मासिक ३५,००० रुपैयाँको SWP सुरु गरे (वार्षिक ७.०% निकासी दर)। अर्को १० वर्षमा फन्डले औसत ११% वार्षिक प्रतिफल दियो: हरिनारायणले १० वर्षमा हरेक महिना ३५ हजारका दरले कुल ४२ लाख रुपैयाँ पेन्सन हात पारे। यसका बाबजुद, फन्डले ११% कमाएको र उनले ७% मात्र झिकेकाले, उनको बाँकी रहेको साँवा ६० लाखबाट बढेर ८८ लाख रुपैयाँभन्दा बढी पुग्यो!',
        metricHighlight: '१० वर्षमा ४२ लाख पेन्सन पनि बुझे + बाँकी रहेको कोष ६० लाखबाट बढेर ८८ लाख पुग्यो!'
      },
      formula: {
        name: 'SWP मासिक युनिट कट्टी सूत्र',
        equation: '\\text{Units Redeemed} = \\frac{\\text{मासिक चाहिने पेन्सन रकम}}{\\text{त्यस दिनको फन्ड NAV}}',
        variables: [
          { symbol: '\\text{Units Redeemed}', name: 'बिक्री हुने युनिट संख्या', desc: 'पेन्सन दिनका लागि त्यस महिना फन्डबाट काटिने युनिटहरू' },
          { symbol: '\\text{Target Amount}', name: 'मासिक पेन्सन रकम', desc: 'तपाईंले आफ्नो खातामा आउन चाहेको निश्चित रकम' },
          { symbol: '\\text{Current NAV}', name: 'त्यस दिनको खुद सम्पत्ति मूल्य', desc: 'क्यापिटलले दैनिक प्रकाशन गर्ने प्रति युनिट बजार मूल्य' }
        ],
        exampleCalculation: 'मासिक पेन्सन चाहिने = रु ३५,०००। त्यस दिनको NAV = रु १४.२०। त्यस महिना कट्टी हुने युनिट = ३५,००० ÷ १४.२० = २,४६४.७९ युनिट। बाँकी रहेका सबै युनिटहरू फन्डमै रहेर नाफा कमाइरहन्छन्!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'SWP पेन्सन हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'धेरै लोभ गरेर वर्षमै १२% देखि १५% सम्मको उच्च SWP रकम झिक्न खोज्नु।', correct: 'वार्षिक SWP निकासी दर आफ्नो कुल लगानीको ६% देखि ७% भित्र मात्र सीमित राख्नुहोस्।', explanation: 'फन्डको कमाइभन्दा बढी दरमा पैसा झिक्दा सेयर बजार घटेको बेला युनिटहरू छिट्टै सकिन्छन्।' },
        { mistake: 'नेप्से बजार घटेको देखेर आत्तिएर आफ्नो नियमित SWP बन्द गरिदिनु।', correct: 'SWP लाई निरन्तर चल्न दिनुहोस्; बजार चक्रमा घटेको र बढेको युनिट मूल्य आफैँ सन्तुलन हुन्छ।', explanation: 'SWP रोक्दा तपाईंको नियमित घरखर्च रोकिन्छ र तपाईं महँगो कर्जा लिन बाध्य हुनुपर्छ।' },
        { mistake: 'बन्दमुखी (Close-ended) म्युचुअल फन्ड किनेर SWP सुविधा खोज्नु।', correct: 'SWP सुविधा केवल खुलामुखी म्युचुअल फन्ड (Open-ended Mutual Funds) मा मात्र उपलब्ध हुन्छ।', explanation: 'बन्दमुखी फन्ड नेप्से दोस्रो बजारमा कारोबार हुने भएकाले त्यसमा स्वचालित मासिक निकासी सुविधा हुँदैन।' }
      ],
      definitions: [
        { term: 'सिस्टम्याटिक विथड्रअल प्लान (SWP)', full: 'Systematic Withdrawal Plan', meaning: 'म्युचुअल फन्डबाट नियमित रूपमा निश्चित रकम सिधै बैंक खातामा झिक्ने स्वचालित सुविधा।' },
        { term: 'खुलामुखी म्युचुअल फन्ड (Open-ended)', full: 'Open-ended Mutual Fund Scheme', meaning: 'कुनै निश्चित अवधि नभएको र क्यापिटलबाटै सिधै जुनसुकै बेला NAV मा किनबेच गर्न सकिने फन्ड।' },
        { term: 'खुद सम्पत्ति मूल्य (NAV)', full: 'Net Asset Value', meaning: 'म्युचुअल फन्डले लगानी गरेको कुल सम्पत्तिबाट दायित्व घटाएर प्रति युनिट निकालिने वास्तविक बजार मूल्य।' },
        { term: 'पुँजीगत लाभ अनुपात (Capital Gain Fraction)', full: 'Capital Gain Ratio in SWP', meaning: 'झिकिएको रकममध्ये नाफा मात्र भएको हिस्सा, जसमा ५% अन्तिम कर काटिन्छ।' }
      ],
      faqs: [
        { q: 'नेपालमा कुन-कुन खुलामुखी म्युचुअल फन्डले हाल अनलाइन SWP सुविधा दिएका छन्?', a: 'एनआईबिएल एस क्यापिटल (NIBL सहभागिता फन्ड), सिद्धार्थ क्यापिटल (सिद्धार्थ सिस्टेमेटिक इन्भेस्टमेन्ट स्किम) र सानिमा क्यापिटलले अनलाइन पोर्टलबाटै SWP दर्ता सुविधा उपलब्ध गराएका छन्।' },
        { q: 'SWP मार्फत बैंकमा पैसा आउँदा कर कसरी काटिन्छ?', a: 'फन्ड म्यानेजरले युनिट बिक्री हुँदा भएको नाफा रकम हिसाब गरी त्यसमा लाग्ने ५% पुँजीगत लाभकर स्रोतमा कट्टी (TDS) गरेर बाँकी खुद रकम बैंकमा पठाइदिन्छ।' },
        { q: 'के पछि घरखर्च बढ्यो भने मैले मासिक SWP रकम बढाउन सक्छु?', a: 'सक्नुहुन्छ। फन्ड म्यानेजरको अनलाइन पोर्टलमा गएर कुनै पनि महिना आफ्नो पेन्सन रकम बढाउन वा घटाउन कुनै अतिरिक्त शुल्क विना सहजै सकिन्छ।' }
      ],
      takeaways: [
        'खुलामुखी म्युचुअल फन्ड SWP ले मासिक पेन्सन सिधै तपाईंको बैंक खातामा पठाउँछ।',
        'बैंक मुद्दतीको विपरीत, SWP ले बाँकी रहेको पूँजीलाई बढाएर महँगी जित्न मद्दत गर्छ।',
        'SWP अत्यधिक करमैत्री छ: ५% कर कुल रकममा होइन, नाफा भएको अंशमा मात्र लाग्छ।',
        'वार्षिक ६%-७% को दिगो निकासी दर राख्दा साँवा पनि सुरक्षित रहन्छ र जीवनभर पेन्सन पनि पाइन्छ।',
        'यो सुविधा लिन केवल खुलामुखी (Open-ended) म्युचुअल फन्डमै लगानी गर्नुपर्छ।'
      ]
    }
  }

};

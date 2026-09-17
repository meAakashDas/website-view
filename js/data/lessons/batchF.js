// BATCH F - INSURANCE (5 lessons)
// Category: insurance

export const BATCH_F = {

  // ── F1. CALCULATING LIFE COVER & SUM ASSURED ──────────────────────
  'calculating-life-cover-sum-assured': {
    id: 'ins-life-cover-calc',
    slug: 'calculating-life-cover-sum-assured',
    categorySlug: 'insurance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min family cover calculation', np: '२० मिनेट जीवन बिमा हिसाब' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Nepal Insurance Authority (Nepal Beema Pradhikaran) Guidelines', np: 'नेपाल बिमा प्राधिकरण जीवन बिमा मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'Term Life vs Endowment in Nepal', np: 'म्यादी बिमा र सावधिक बिमा' },
    en: {
      title: 'How Much Life Insurance (Sum Assured) Do You Really Need in Nepal?',
      oneLineSummary: 'Calculate your exact Human Life Value (HLV) - why an expensive NPR 5 Lakh endowment policy leaves your family broke, and how to secure NPR 1 Crore cover.',
      summaryPoints: [
        'Most insured Nepalis are severely under-insured, holding tiny NPR 3 Lakh to NPR 5 Lakh endowment policies that cannot support a family for even two years.',
        'Life insurance exists to replace the economic value of the breadwinner\'s future income if they pass away prematurely.',
        'The Human Life Value (HLV) / Needs Method requires a sum assured of 10 to 15 times your annual family living expenses plus all outstanding bank debts.',
        'Pure Term Life Insurance provides 10x to 20x higher coverage for the exact same annual premium compared to traditional endowment/money-back policies.',
        'Single individuals with zero financial dependents (no dependent parents, spouse, or children) do not need significant life insurance.'
      ],
      whatIsThis: 'Sum Assured (Bimāṅka Rakam) is the guaranteed financial payout that your life insurance company pays to your nominated beneficiaries if you pass away during the policy term. Calculating your required coverage is a mathematical assessment based on Human Life Value (HLV) that ensures your family can clear debts, maintain their current lifestyle, and fund children\'s higher education without the primary earner\'s salary.',
      whyItMatters: 'Insurance agents in Nepal earn 15% to 25% commissions selling traditional endowment (Sāwadhik) policies. Consequently, they convince families to buy NPR 5 Lakh policies with hefty NPR 40,000 annual premiums. If the breadwinner dies, an NPR 5 Lakh payout will be completely exhausted within 12 to 18 months in Kathmandu or Pokhara. For that same NPR 40,000 annual premium, a pure Term Life policy secures NPR 1 Crore to 1.5 Crore in coverage, protecting the family for two decades.',
      howItWorks: [
        { step: 1, title: 'Calculate Annual Household Expenses', desc: 'Isolate what your family strictly needs to survive each year without your personal discretionary expenses: rent/maintenance, groceries, children\'s schooling, utilities, and healthcare (e.g., NPR 5,00,000/year).' },
        { step: 2, title: 'Apply the 15x Income Multiplier', desc: 'Multiply annual living expenses by 15. At a 7% bank fixed deposit yield, an invested corpus of 15x expenses generates the required annual family living cash flow indefinitely without touching the principal.' },
        { step: 3, title: 'Add All Liabilities & Major Future Goals', desc: 'Add total outstanding debts (home loan, auto loan, personal debt) plus future non-negotiable milestones (e.g., college tuition NPR 15 Lakh per child).' },
        { step: 4, title: 'Subtract Existing Liquid Assets', desc: 'Deduct existing productive assets (bank savings, mutual funds, shares, existing policies). The resulting balance is your true required Sum Assured.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'The Under-Insurance Trap in Nepal: Traditional Endowment vs Pure Term Life',
        headers: ['Parameter', 'Traditional Endowment Policy (Agent Pushed)', 'Pure Term Life Policy (Financial Blueprint)'],
        rows: [
          ['Annual Premium Paid', 'NPR 45,000 / year', 'NPR 45,000 / year (or less)'],
          ['Guaranteed Sum Assured (Cover)', 'NPR 7,50,000 (Grossly Inadequate)', 'NPR 1,25,00,000 (1.25 Crore Full Security)'],
          ['Family Lifeline If Breadwinner Dies', 'Exhausted in 18 months in Kathmandu', 'Yields NPR 85,000/mo interest in bank FD indefinitely'],
          ['Maturity Payout If You Survive', 'NPR 7.5L + modest bonus (4%-5% return)', 'Zero maturity payout (Pure risk protection)'],
          ['Wealth Building Mechanism', 'Sub-inflation returns locked for 20 years', 'Invest saved difference in mutual fund SIP for real wealth']
        ]
      },
      nepalContext: 'Under regulations from the Nepal Insurance Authority (Nepal Beema Pradhikaran), licensed life insurers (such as Nepal Life, National Life, LIC Nepal, and Himalayan Life) offer term life plans. However, retail term adoption remains low because agents actively conceal term plans due to minimal commissions. Savvy consumers specifically ask for "Myadi Jeevan Beema" (Pure Term Life) to buy adequate multi-crore protection affordably.',
      practicalScenario: {
        persona: 'Sunil, 33, private company branch manager in Butwal',
        income: 'NPR 70,000 / month salary (Family expenses NPR 45,000/month)',
        scenarioText: 'Sunil was paying NPR 52,000/year for an endowment policy with a sum assured of NPR 8 Lakh. He had a home loan of NPR 35 Lakh and two young children aged 3 and 6.',
        solutionText: 'He calculated his real vulnerability: if he passed away, his NPR 8 Lakh insurance wouldn\'t even pay a quarter of his NPR 35 Lakh home loan, leaving his family bankrupt. He bought a 25-year pure Term Life policy with a Sum Assured of NPR 1 Crore for an annual premium of NPR 28,000. He used the remaining NPR 24,000 to start an open-ended mutual fund SIP.',
        metricHighlight: 'Increased life cover from NPR 8 Lakh to NPR 1 Crore while saving NPR 24,000/year'
      },
      formula: {
        name: 'Human Life Value (HLV) Needs Method Formula',
        equation: '\\text{Sum Assured} = (E_{\\text{annual}} \\times 15) + \\text{Total Liabilities} + \\text{Future Milestones} - \\text{Liquid Assets}',
        variables: [
          { symbol: 'E_annual', name: 'Annual Family Living Expense', desc: 'Annual cost required to maintain your family\'s standard of living.' },
          { symbol: '15', name: 'Capitalization Multiplier', desc: 'Multiplier ensuring a 7% bank deposit yield produces replacement income.' },
          { symbol: 'Total Liabilities', name: 'Outstanding Debt', desc: 'Total home loan, auto loan, and personal bank liabilities.' },
          { symbol: 'Liquid Assets', name: 'Existing Productive Capital', desc: 'Current savings, FDs, mutual funds, and shares available immediately.' }
        ],
        exampleCalculation: 'Annual family expenses = NPR 6,00,000. 15x multiplier = NPR 90,00,000. Home loan balance = NPR 30,00,000. Children higher education fund = NPR 20,00,000. Existing savings = NPR 15,00,000. Required Sum Assured = 90,00,000 + 30,00,000 + 20,00,000 - 15,00,000 = NPR 1,25,00,000 (1.25 Crore).',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Tax Deduction on Premium'
      },
      commonMistakes: [
        { mistake: 'Buying life insurance for children who earn zero income.', correct: 'Only insure income earners whose death causes catastrophic financial loss to dependents.', explanation: 'Insurance replaces economic earning power; children have no income to replace.' },
        { mistake: 'Treating life insurance primarily as a savings or investment product.', correct: 'Separate insurance from investment: buy pure term life for protection, invest in SIPs for wealth.', explanation: 'Endowment policies deliver poor 4%-5% annual returns that fail to beat Nepal\'s 7% inflation.' },
        { mistake: 'Failing to increase coverage when taking a massive new home loan.', correct: 'Ensure your sum assured covers your total mortgage balance so your family doesn\'t lose the home.', explanation: 'Banks will foreclose on the house if the breadwinner dies and life insurance cannot clear the mortgage.' }
      ],
      definitions: [
        { term: 'Sum Assured', full: 'Bimanka Rakam', meaning: 'The guaranteed fixed amount of money that an insurance policy pays to beneficiaries upon the death of the insured.' },
        { term: 'Pure Term Insurance', full: 'Myadi Jeevan Beema', meaning: 'Life insurance that provides high financial cover for a fixed term with zero savings component and lowest premium.' },
        { term: 'Endowment Policy', full: 'Sawadhik Jeevan Beema', meaning: 'A bundled insurance-plus-savings product paying a modest sum on survival or death, but with expensive premiums.' },
        { term: 'Human Life Value (HLV)', full: 'Manaviya Jiwan Mulya', meaning: 'The capitalized monetary value of an individual\'s future earnings dedicated to supporting family dependents.' }
      ],
      faqs: [
        { q: 'What happens if I survive a 25-year pure term life policy?', a: 'You receive no payout. Just like vehicle insurance or health insurance, term life is pure risk protection. You survive safely, and the money you saved on lower premiums compounded in your SIP.' },
        { q: 'Is medical examination mandatory for NPR 1 Crore term cover in Nepal?', a: 'Yes. For high sum assured policies (typically above NPR 25 Lakh or age 35+), insurance companies require routine medical diagnostics (blood sugar, ECG, lipid profile) paid by the insurer.' },
        { q: 'Can my insurance payout be claimed by bank creditors?', a: 'If you purchase a policy under the Married Women\'s Property Act (or assign clear family nominations), the death claim payout belongs 100% to your wife/children and cannot be attached by bank creditors.' }
      ],
      takeaways: [
        'Calculate coverage using the HLV rule: 15x annual family expenses plus all debts.',
        'Never rely on tiny NPR 5 Lakh endowment policies - they leave your family broke within 2 years.',
        'Buy Pure Term Life Insurance ("Myadi Beema") to secure NPR 1 Crore+ protection at low cost.',
        'Separate insurance from investment: protect with term life, build wealth with mutual fund SIPs.',
        'Insure only the earning breadwinners of the family; never purchase life insurance for children.'
      ]
    },
    np: {
      title: 'नेपालमा कति रकमको जीवन बिमा (Sum Assured) चाहिन्छ? वास्तविक हिसाब',
      oneLineSummary: 'Human Life Value (HLV) सूत्रबाट सही बिमांक रकम निकाल्ने तरिका - महँगो रु. ५ लाखको सावधिक बिमाको भ्रम र रु. १ करोडको म्यादी बिमाको शक्ति।',
      summaryPoints: [
        'नेपालमा अधिकांश बिमित व्यक्तिहरू खतरनाक रूपमा न्यून-बिमा (Under-insured) को शिकार छन्; रु. ३ देखि ५ लाखको बिमाले परिवारलाई २ वर्ष पनि धान्न सक्दैन।',
        'जीवन बिमाको मुख्य उद्देश्य परिवारको मुख्य कमाउने व्यक्तिको असामयिक निधन हुँदा उसको भविष्यको आर्थिक आम्दानीको क्षतिपूर्ति गर्नु हो।',
        'Human Life Value (HLV) विधि अनुसार परिवारको वार्षिक खर्चको कम्तीमा १० देखि १५ गुणा रकम र बाँकी सम्पूर्ण बैंक ऋण जोडेर बिमांक रकम तोक्नुपर्छ।',
        'शुद्ध म्यादी जीवन बिमा (Pure Term Life) ले परम्परागत सावधिक बिमाको बराबर प्रिमियममै १० देखि २० गुणा बढी बिमा सुरक्षा दिन्छ।',
        'कुनै पनि आर्थिक आश्रित (आमाबुबा, श्रीमती, छोराछोरी) नभएका एकल व्यक्तिले ठूलो जीवन बिमा लिनु अनावश्यक हुन्छ।'
      ],
      whatIsThis: 'बिमांक रकम (Sum Assured) भनेको बिमा अवधिभित्र बिमित व्यक्तिको मृत्यु भएमा बिमा कम्पनीले निजको हकवाला (परिवार) लाई एकमुष्ट भुक्तानी दिने ग्यारेन्टी गरिएको रकम हो। सही बिमांक रकम भनेको परिवारको मासिक खर्च, बैंकको ऋण र बालबच्चाको उच्च शिक्षा सुरक्षित राख्ने वैज्ञानिक आर्थिक हिसाब हो।',
      whyItMatters: 'नेपालमा बिमा एजेन्टहरूले धेरै कमिसन आउने लोभमा मानिसहरूलाई महँगो सावधिक (Endowment) बिमा बेच्छन्। वर्षमा रु. ४०,००० प्रिमियम तिरेर जम्मा रु. ५ लाखको बिमा गराइन्छ। यदि भोलि मुख्य कमाउने व्यक्तिको मृत्यु भयो भने काठमाडौँ वा पोखरामा रु. ५ लाखले परिवारलाई १ वर्ष पनि पुग्दैन। तर त्यही रु. ४०,००० प्रिमियममा शुद्ध म्यादी बिमा (Term Life) गर्दा रु. १ करोडदेखि १.५ करोडसम्मको पूर्ण सुरक्षा पाइन्छ।',
      howItWorks: [
        { step: 1, title: 'परिवारको वार्षिक अनिवार्य खर्च हिसाब गर्नुहोस्', desc: 'आफ्नो व्यक्तिगत खर्च कटाएर परिवार बाँच्न वर्षमा कति चाहिन्छ (भाडा, किराना, बालबच्चाको स्कुल शुल्क, बिजुली-पानी र स्वास्थ्य): जस्तै वार्षिक रु. ५,००,०००।' },
        { step: 2, title: '१५ गुणाको नियम (15x Rule) लगाउनुहोस्', desc: 'वार्षिक खर्चलाई १५ ले गुणन गर्नुहोस् (रु. ५ लाख * १५ = रु. ७५ लाख)। यो रकम बैंक मुद्दतीमा ७% मा राख्दा आउने ब्याजले नै परिवारको खर्च मूलधन नघटाई सधैँ धान्न सक्छ।' },
        { step: 3, title: 'घरकर्जा र ठूला भविष्यका लक्ष्य जोड्नुहोस्', desc: 'आफ्नो नाममा रहेको बाँकी घरकर्जा वा गाडी ऋण (जस्तै रु. २५ लाख) र बालबच्चाको उच्च शिक्षाको अनुमानित खर्च (रु. १५ लाख) जोड्नुहोस्।' },
        { step: 4, title: 'हालको तरल सम्पत्ति घटाउनुहोस्', desc: 'आफूसँग पहिले नै भएको बैंक मौज्दात, सेयर वा पुरानो बिमा घटाउनुहोस्। बाँकी आउने रकम नै तपाईंको परिवारका लागि चाहिने वास्तविक बिमांक रकम हो।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा परम्परागत सावधिक बिमा भर्सेस शुद्ध म्यादी बिमा (Term Life) को तुलना',
        headers: ['तुलनाको विषय', 'परम्परागत सावधिक बिमा (एजेन्टले बेच्ने)', 'शुद्ध म्यादी बिमा (Term Life)'],
        rows: [
          ['वार्षिक तिर्नुपर्ने प्रिमियम', 'रु. ४५,००० प्रति वर्ष', 'रु. ४५,००० प्रति वर्ष (वा कम)'],
          ['ग्यारेन्टी बिमांक रकम (सुरक्षा)', 'रु. ७,५०,००० (परिवारका लागि अपर्याप्त)', 'रु. १,२५,००,००० (१ करोड २५ लाख पूर्ण सुरक्षा)'],
          ['कमाउने व्यक्तिको मृत्यु भएमा', 'काठमाडौँमा १८ महिनामै पैसा सकिन्छ', 'बैंक मुद्दतीमा राख्दा महिनाकै रु. ७०,०००+ ब्याज'],
          ['अवधिभर जीवित रहेमा फिर्ता', 'रु. ७.५ लाख + सानो बोनस (४-५% प्रतिफल)', 'कुनै फिर्ता हुँदैन (शुद्ध जोखिम सुरक्षा)'],
          ['सम्पत्ति निर्माणको माध्यम', '७% महँगी पनि नजित्ने कमजोर बचत', 'बचेको प्रिमियम रकम मासिक SIP मा हाल्दा करोडौँ बन्ने']
        ]
      },
      nepalContext: 'नेपाल बिमा प्राधिकरण (Nepal Beema Pradhikaran) बाट इजाजतप्राप्त जीवन बिमा कम्पनीहरू (नेपाल लाइफ, नेसनल लाइफ, एलआइसी नेपाल, हिमालयन लाइफ आदि) सँग म्यादी बिमा (Term Life) योजना उपलब्ध छन्। तर एजेन्टहरूले कमिसन कम हुने भएकाले ग्राहकलाई म्यादी बिमाको जानकारी नै दिँदैनन्। सचेत नागरिकले बिमा कम्पनीको शाखामा गएर सिधै "म्यादी जीवन बिमा" माग गर्नुपर्छ।',
      practicalScenario: {
        persona: 'सुनिल, ३३, बुटवलका निजी कम्पनी शाखा प्रबन्धक',
        income: 'मासिक तलब रु. ७०,000 (पारिवारिक खर्च रु. ४५,०००)',
        scenarioText: 'सुनिलले वर्षमा रु. ५२,००० प्रिमियम तिरेर रु. ८ लाखको सावधिक बिमा गरेका थिए। उनको नाममा रु. ३५ लाखको घरकर्जा थियो र ३ र ६ वर्षका दुई साना छोराछोरी थिए।',
        solutionText: 'उनले आफ्नो जोखिम बुझे: यदि उनको निधन भयो भने रु. ८ लाखले ३५ लाखको घरकर्जाको एक चौथाइ पनि तिर्न पुग्दैनथ्यो र परिवार घरबारविहीन हुन्थ्यो। उनले २५ वर्षे अवधिको रु. १ करोडको शुद्ध म्यादी बिमा (Term Life) वार्षिक रु. २८,००० प्रिमियममा लिए। बाँकी बचेको रु. २४,००० उनले खुला-मुखी म्युचुअल फन्ड SIP मा लगाए।',
        metricHighlight: 'वार्षिक रु. २४,००० बचत गर्दै बिमा सुरक्षा रु. ८ लाखबाट बढाएर रु. १ करोड पुर्‍याए'
      },
      formula: {
        name: 'Human Life Value (HLV) आवश्यकता विधि सूत्र',
        equation: '\\text{आवश्यक बिमांक रकम} = (E_{\\text{वार्षिक खर्च}} \\times १५) + \\text{कुल ऋण} + \\text{भविष्यका लक्ष्य} - \\text{हालको सम्पत्ति}',
        variables: [
          { symbol: 'E_वार्षिक खर्च', name: 'परिवारको वार्षिक जीवनयापन खर्च', desc: 'घर चलाउन, बालबच्चा पढाउन वर्षभरिमा लाग्ने अनिवार्य खर्च।' },
          { symbol: '१५', name: 'पुँजीकरण गुणक', desc: '७% मुद्दती ब्याजले खर्च धान्न सक्ने गरी निकालिएको गुणक।' },
          { symbol: 'कुल ऋण', name: 'तिर्न बाँकी बैंक दायित्व', desc: 'घरकर्जा, गाडी कर्जा र व्यक्तिगत ऋणको कुल रकम।' },
          { symbol: 'हालको सम्पत्ति', name: 'बचत तथा लगानी', desc: 'बैंक मौज्दात, सेयर, म्युचुअल फन्ड र पुरानो बिमाको योगफल।' }
        ],
        exampleCalculation: 'वार्षिक पारिवारिक खर्च = रु. ६,००,०००। १५ गुणा गर्दा = रु. ९०,००,०००। घरकर्जा = रु. ३०,००,०००। छोराछोरीको उच्च शिक्षा = रु. २०,००,०००। हालको बचत = रु. १५,००,०००। कुल चाहिने बिमांक रकम = ९०,००,००० + ३०,००,००० + २०,००,००० - १५,००,००० = रु. १,२५,००,००० (१ करोड २५ लाख)।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'बिमा कर छुट क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'आम्दानी नै नभएका साना बालबच्चाको जीवन बिमा गरिदिनु।', correct: 'सधैँ परिवारको मुख्य कमाउने व्यक्तिको मात्र ठूलो जीवन बिमा गर्नुहोस्।', explanation: 'बिमाले व्यक्तिको कमाउने क्षमताको क्षतिपूर्ति गर्छ; बालबच्चाको कुनै आम्दानी हुँदैन।' },
        { mistake: 'जीवन बिमालाई बचत वा नाफा कमाउने लगानी सम्झनु।', correct: 'बिमा र लगानीलाई कहिल्यै नमिसानुहोस्; सुरक्षाका लागि Term Life र नाफाका लागि SIP रोज्नुहोस्।', explanation: 'सावधिक बिमाले वार्षिक जम्मा ४-५% प्रतिफल दिन्छ, जसले ७% को महँगीलाई पनि जित्न सक्दैन।' },
        { mistake: 'ठूलो घरकर्जा लिँदा जीवन बिमा नबढाउनु।', correct: 'कर्जा थपिनासाथ ऋण बराबरको थप म्यादी बिमा लिनुहोस्।', explanation: 'यदि कमाउने व्यक्तिको निधन भएमा बिमाले ऋण नतिरे बैंकले परिवारको घर लिलाम गरिदिन्छ।' }
      ],
      definitions: [
        { term: 'बिमांक रकम (Sum Assured)', full: 'सुरक्षित बिमा रकम', meaning: 'बिमितको निधन भएको खण्डमा बिमा कम्पनीले परिवारलाई भुक्तानी दिने ग्यारेन्टी गरिएको रकम।' },
        { term: 'म्यादी जीवन बिमा (Term Life)', full: 'शुद्ध जोखिम बिमा', meaning: 'न्यूनतम प्रिमियममा करोडौँको ठूलो सुरक्षा दिने, कुनै बचत नजोडिएको शुद्ध जीवन बिमा।' },
        { term: 'सावधिक जीवन बिमा (Endowment)', full: 'बचत सहितको बिमा', meaning: 'बाँचे पनि र मरे पनि पैसा पाइने भनिएको तर निकै महँगो प्रिमियम र थोरै सुरक्षा भएको बिमा।' },
        { term: 'मानवीय जीवन मूल्य (HLV)', full: 'आर्थिक कमाउने हैसियत', meaning: 'व्यक्तिको भविष्यको कमाइले परिवारलाई दिने आर्थिक योगदानको कुल वर्तमान मूल्य।' }
      ],
      faqs: [
        { q: 'यदि २५ वर्षको म्यादी बिमा अवधिभर मलाई केही भएन भने के हुन्छ?', a: 'केही पैसा फिर्ता आउँदैन। जसरी गाडी बिमा वा स्वास्थ्य बिमामा दुर्घटना नभए पैसा फिर्ता आउँदैन, म्यादी बिमा पनि शुद्ध सुरक्षा हो। तर तपाईंले सस्तो प्रिमियम तिरेर बचेको पैसा SIP मा लगाएर त्योभन्दा धेरै सम्पत्ति बनाइसक्नुभएको हुन्छ।' },
        { q: 'नेपालमा १ करोडको Term Life लिन स्वास्थ्य जाँच चाहिन्छ?', a: 'चाहिन्छ। ठूलो बिमांक रकम (प्रायः २५ लाखभन्दा माथि) मा बिमा कम्पनीले आफ्नै खर्चमा तोकिएको अस्पतालमा ल्याब परीक्षण र ईसीजी गराउँछ।' },
        { q: 'के बिमाको पैसा बैंकले ऋण असुल गर्न जफत गर्न सक्छ?', a: 'विवाहित महिला सम्पत्ति ऐन अन्तर्गत श्रीमती वा सन्तानलाई इच्छाएको व्यक्ति (Nominee) राखिएको बिमांक रकम कसैले पनि जफत गर्न पाउँदैन; त्यो शतप्रतिशत परिवारकै हुन्छ।' }
      ],
      takeaways: [
        'HLV नियम अनुसार पारिवारिक खर्चको १५ गुणा र कुल ऋण जोडेर बिमांक रकम निकाल्नुहोस्।',
        'एजेन्टको लोभमा परेर रु. ५ लाखको सावधिक बिमामा नअल्झिनुहोस् - म्यादी बिमा (Term Life) रोज्नुहोस्।',
        'थोरै प्रिमियममा रु. १ करोडभन्दा माथिको पूर्ण सुरक्षा लिनुहोस्।',
        'बिमालाई सुरक्षा र SIP लाई सम्पत्ति वृद्धिका रूपमा सधैँ अलग राख्नुहोस्।',
        'कमाउने व्यक्तिको मात्र बिमा गर्नुहोस्, साना बालबच्चाको नाममा बिमा गरेर पैसा नअल्झाउनुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Calculate tax savings up to NPR 40,000 on life insurance premium payments.' }
    ],
    downloadableResources: [
      { title: 'Human Life Value (HLV) Insurance Calculator Worksheet (Excel)', type: 'Excel Tool', format: 'XLSX File', size: '155 KB', href: 'assets/downloads/nepal-insurance-claim-checklist.html' }
    ]
  },

  // ── F2. HEALTH INSURANCE & CRITICAL ILLNESS IN NEPAL ─────────────
  'health-insurance-critical-illness-nepal': {
    id: 'ins-health-critical-illness',
    slug: 'health-insurance-critical-illness-nepal',
    categorySlug: 'insurance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min policy coverage audit', np: '१५ मिनेट स्वास्थ्य बिमा विश्लेषण' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Nepal Insurance Authority Non-Life Guidelines & Hospital Billing Standards', np: 'नेपाल बिमा प्राधिकरण निर्जीवन बिमा निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Emergency Fund Building', np: 'आपतकालीन कोष निर्माण' },
    en: {
      title: 'Health Insurance vs. Critical Illness Cover in Nepal: Closing the Medical Trap',
      oneLineSummary: 'Understand hospital indemnity limits, room-rent capping traps, and why a Critical Illness rider is mandatory to survive cancer, cardiac, and renal costs.',
      summaryPoints: [
        'Standard Health Insurance reimburses actual inpatient hospitalization bills up to your policy limit (typically NPR 1 Lakh to 10 Lakh).',
        'Critical Illness (Ghatak Rog) insurance pays a 100% lump-sum cash grant upon diagnosis of specified conditions (cancer, heart attack, kidney failure, stroke).',
        'Watch out for the "Room Rent Sub-Limit": policies capping room rent at 1.0% of sum insured will penalize ALL associated doctors and surgery charges proportionally.',
        'Most private health policies in Nepal enforce a 30-day initial waiting period and a 1-to-2-year waiting period for pre-existing diseases.',
        'Combining a base NPR 5 Lakh health insurance policy with an NPR 25 Lakh Critical Illness rider provides ironclad protection against medical bankruptcy.'
      ],
      whatIsThis: 'Health insurance policies in Nepal operate under two complementary models. Indemnity Health Insurance pays your actual medical and surgical hospital bills upon submitting receipts and discharge summaries. Critical Illness (CI) coverage is a benefit policy: upon certified diagnosis of any covered life-threatening illness (usually 11 to 20 illnesses like cancer or stroke), the insurer wires the entire Sum Assured directly to your bank in cash, regardless of actual hospital spending.',
      whyItMatters: 'A single prolonged ICU admission or cancer treatment cycle at private tertiary hospitals in Kathmandu (such as Medicity, Grande, or Norvic) easily costs NPR 15 Lakh to 30 Lakh. Families whose breadwinners suffer a stroke face two simultaneous crises: catastrophic hospital bills AND permanent loss of monthly salary. A Critical Illness lump-sum payout funds household living expenses while standard health insurance covers the hospital bed.',
      howItWorks: [
        { step: 1, title: 'Evaluate Inpatient Indemnity Coverage', desc: 'Secure a base indemnity health policy of at least NPR 5,00,000 for each family member covering room charges, ICU, surgery, anesthesia, and prescribed medicines.' },
        { step: 2, title: 'Verify the Room Rent Capping Clause', desc: 'Scrutinize the policy wording. If a policy has a 1% room cap on a NPR 2 Lakh policy (NPR 2,000/day) and you stay in a NPR 6,000/day cabin, the insurer applies "Proportionate Deduction", slashing 66% off your entire surgery and doctor bill.' },
        { step: 3, title: 'Attach a Critical Illness (CI) Rider', desc: 'Add a Critical Illness rider (minimum NPR 15 Lakh to 25 Lakh) to your life or health policy. CI covers catastrophic diagnoses: major cancer, coronary artery bypass, stroke, kidney failure, and major organ transplant.' },
        { step: 4, title: 'Observe Waiting Periods & Disclosures', desc: 'Declare all pre-existing medical conditions (hypertension, diabetes, past surgeries). A standard policy has a 30-day waiting period for illnesses and a 2-year waiting period for chronic pre-existing conditions.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Comparison: Standard Health Insurance vs Critical Illness Rider in Nepal',
        headers: ['Feature', 'Standard Health Insurance (Indemnity)', 'Critical Illness Rider (Benefit)'],
        rows: [
          ['Payout Mechanism', 'Reimbursement of actual approved hospital bills', '100% lump-sum cash paid to bank account on diagnosis'],
          ['Hospitalization Required?', 'Yes (Minimum 24 hours inpatient stay)', 'No (Only certified medical diagnostic report needed)'],
          ['Coverage Scope', 'Illnesses, minor surgeries, accidents, ICU', 'Specific list of 11 to 20 life-threatening conditions'],
          ['Use of Funds', 'Direct hospital settlement only', 'Free use: living expenses, foreign treatment, debt relief'],
          ['Impact on Policy', 'Sum insured reduces by claim amount', 'Terminates upon paying 100% lump-sum benefit'],
          ['Typical Sum Insured in Nepal', 'NPR 1,00,000 to NPR 10,00,000', 'NPR 10,00,000 to NPR 50,00,000+']
        ]
      },
      nepalContext: 'Private hospital billing in Kathmandu has inflated aggressively, with private deluxe cabins charging NPR 8,000 to 15,000 per night and ICU beds exceeding NPR 25,000 per day. Corporate employer-provided health insurance in Nepal is almost universally capped at a meager NPR 1,00,000 or 2,00,000 - which disappears within 48 hours of an ICU admission. Independent personal health and CI policies are mandatory to avoid liquidating land or taking informal loans.',
      practicalScenario: {
        persona: 'Devi, 49, homemaker in Kathmandu',
        income: 'Family business income NPR 1,20,000 / month',
        scenarioText: 'Devi\'s husband suffered a sudden heart attack requiring emergency coronary angioplasty and stenting, followed by 6 months of cardiac rehabilitation. The hospital bill totaled NPR 8,50,000, and he could not manage their shop for half a year.',
        solutionText: 'Fortunately, they had purchased a family health plan (NPR 5 Lakh sum insured) and a Critical Illness rider of NPR 20 Lakh. The health policy covered NPR 4,80,000 of the hospital surgery bill, while the CI rider paid an immediate NPR 20 Lakh lump-sum cash directly into their bank account, comfortably replacing his lost business income during recovery.',
        metricHighlight: 'Received NPR 20 Lakh cash grant + NPR 4.8 Lakh bill settlement, preventing asset liquidation'
      },
      formula: {
        name: 'Proportionate Room Rent Deduction Penalty Formula',
        equation: '\\text{Approved Claim} = \\text{Eligible Medical Expenses} \\times \\left(\\frac{\\text{Permitted Room Rent}}{\\text{Actual Room Rent Charged}}\\right)',
        variables: [
          { symbol: 'Permitted Room Rent', name: 'Policy Daily Cap', desc: 'Usually 1.0% of Sum Insured per day as specified in policy contract.' },
          { symbol: 'Actual Room Rent', name: 'Cabin Rate Charged', desc: 'Per-day room charge billed by the private hospital.' },
          { symbol: 'Eligible Medical Expenses', name: 'Associated Medical Bills', desc: 'Doctor fees, surgeon charges, operation theater costs, nursing care.' }
        ],
        exampleCalculation: 'Policy has NPR 2,00,000 sum insured with 1% room cap = NPR 2,000/day. Patient chooses a cabin costing NPR 6,000/day. Hospital bill has NPR 1,50,000 in doctor/OT charges. Proportionate deduction ratio = 2,000 / 6,000 = 0.333. The insurance company pays only 1,50,000 * 0.333 = NPR 50,000. Patient must pay NPR 1,00,000 out of pocket despite having remaining cover.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Health Tax Deductions'
      },
      commonMistakes: [
        { mistake: 'Choosing an expensive deluxe room that breaches your policy\'s 1% room cap.', correct: 'Always request a room within your daily permitted room limit upon hospital admission.', explanation: 'Breaching room caps triggers proportionate deductions across your entire medical bill.' },
        { mistake: 'Relying exclusively on your company\'s NPR 1 Lakh corporate health insurance.', correct: 'Purchase a personal top-up health plan and Critical Illness rider outside your job.', explanation: 'If you leave your job or get diagnosed with a debilitating illness, corporate cover terminates immediately.' },
        { mistake: 'Hiding past surgeries or high blood pressure on the proposal form.', correct: 'Disclose every medical diagnosis honestly; non-disclosure leads to 100% claim rejection.', explanation: 'Insurers audit medical records upon claim submission; undisclosed conditions void the contract.' }
      ],
      definitions: [
        { term: 'Indemnity Health Insurance', full: 'Aspatal Kharcha Shodhbharna', meaning: 'Insurance that reimburses actual inpatient medical and surgical bills incurred during hospitalization.' },
        { term: 'Critical Illness (CI)', full: 'Ghatak Rog Subidha', meaning: 'A benefit policy paying a 100% lump-sum cash grant immediately upon certified diagnosis of specified life-threatening diseases.' },
        { term: 'Room Rent Sub-Limit', full: 'Kotha Bhada Sima', meaning: 'A restriction capping daily hospital bed charges, which triggers proportionate cuts on other bill items if exceeded.' },
        { term: 'Waiting Period', full: 'Kurne Awadhi', meaning: 'The duration (typically 30 days for illnesses and 2 years for pre-existing conditions) before policy coverage becomes active.' }
      ],
      faqs: [
        { q: 'Does health insurance cover OPD doctor consultation visits in Nepal?', a: 'Standard basic health insurance covers only inpatient hospitalization (minimum 24 hours admission). Comprehensive policies with OPD riders are available but carry higher premiums.' },
        { q: 'Can I claim tax deduction for health insurance in Nepal?', a: 'Yes. Under Schedule 1 of the Income Tax Act 2058, individual salaried taxpayers can deduct up to NPR 20,000 in health insurance premiums from their taxable income.' },
        { q: 'What illnesses are covered under Critical Illness riders in Nepal?', a: 'Standard policies cover 11 to 20 illnesses, including Cancer of specified severity, First Heart Attack, Open Chest CABG, Kidney Failure, Major Organ Transplant, and Stroke.' }
      ],
      takeaways: [
        'Standard Health Insurance reimburses hospital bills; Critical Illness pays an immediate cash grant.',
        'Corporate employer insurance of NPR 1-2 Lakh is wholly inadequate for serious hospitalizations.',
        'Beware of Room Rent caps: exceeding your daily bed limit slashes your entire claim proportionally.',
        'Combine a base NPR 5 Lakh health policy with an NPR 20 Lakh Critical Illness rider for complete safety.',
        'Always disclose pre-existing conditions honestly to prevent claim rejections during medical crises.'
      ]
    },
    np: {
      title: 'नेपालमा स्वास्थ्य बिमा र घातक रोग (Critical Illness) बिमा: कुन किन र कसरी लिने?',
      oneLineSummary: 'अस्पतालको बिल सोधभर्ना गर्ने स्वास्थ्य बिमा, क्यान्सर वा मुटुरोग लाग्दा एकमुष्ट नगद दिने Critical Illness कभर र कोठा भाडा सिलिङको पासो बुझ्नुहोस्।',
      summaryPoints: [
        'साधारण स्वास्थ्य बिमा (Health Insurance) ले अस्पताल भर्ना हुँदा लागेको वास्तविक बिलको मात्र सोधभर्ना गर्दछ (प्रायः रु. १ लाखदेखि १० लाखसम्म)।',
        'घातक रोग बिमा (Critical Illness Cover) ले क्यान्सर, हृदयाघात, मिर्गौला फेल वा पक्षघात जस्ता रोग प्रमाणित हुनासाथ बिमांकको १००% एकमुष्ट नगद बैंक खातामा भुक्तानी गर्छ।',
        'स्वास्थ्य बिमामा "कोठा भाडा सीमा (Room Rent Sub-limit)" विशेष ध्यान दिनुपर्छ; १% को सीमा नाघेर महँगो क्याबिन बस्दा सम्पूर्ण अपरेसन र डाक्टरको बिल समानुपातिक रूपमा काटिन्छ।',
        'नेपालका स्वास्थ्य बिमामा सामान्य रोगका लागि ३० दिन र पहिलेदेखि भएका पुराना रोगहरूका लागि १ देखि २ वर्षको कुर्नुपर्ने अवधि (Waiting Period) हुन्छ।',
        'रु. ५ लाखको स्वास्थ्य बिमा र रु. २० लाखको Critical Illness कभर सँगै लिँदा औषधोपचारले परिवार कंगाल हुनबाट जोगिन्छ।'
      ],
      whatIsThis: 'नेपालमा स्वास्थ्य उपचार सुरक्षाका लागि दुईवटा बिमा औजारहरू उपलब्ध छन्। स्वास्थ्य बिमा (Health Insurance) ले अस्पतालमा २४ घण्टाभन्दा बढी भर्ना भएर उपचार गराउँदा लागेको औषधी, शल्यक्रिया, बेड र डाक्टरको खर्च बिल अनुसार भुक्तानी गर्दछ। घातक रोग बिमा (Critical Illness Rider) ले तोकिएका ११ देखि २० वटा ज्यानमारा रोगहरूमध्ये कुनै रोग लागेको प्रमाणित हुनासाथ उपचार खर्च जतिसुकै लागे पनि पूरै रकम नगदै खातामा दिन्छ।',
      whyItMatters: 'काठमाडौँका ठूला निजी अस्पतालहरू (जस्तै मेडिसिटी, ग्रान्डी, नर्भिक) मा क्यान्सर वा मुटुको जटिल शल्यक्रिया गर्दा रु. १५ लाखदेखि २५ लाखसम्म खर्च हुन्छ। यस्तो बेला परिवारको मुख्य व्यक्तिले कमाउन पनि सक्दैन र अस्पतालको बिल तिर्न घरजग्गा बेच्नुपर्ने अवस्था आउँछ। स्वास्थ्य बिमाले अस्पतालको बिल तिर्छ भने Critical Illness ले पाएको नगदले बिरामी हुँदा घरखर्च र कर्जाको किस्ता तिर्न सकिन्छ।',
      howItWorks: [
        { step: 1, title: 'अस्पताल भर्ना स्वास्थ्य बिमा (कम्तीमा ५ लाख) लिनुहोस्', desc: 'परिवारका हरेक सदस्यका लागि कम्तीमा रु. ५ लाखको व्यक्तिगत वा पारिवारिक (Floater) स्वास्थ्य बिमा लिनुहोस् जसले बेड, आइसियु र शल्यक्रिया समेटोस्।' },
        { step: 2, title: 'कोठा भाडाको सर्त (Room Rent Capping) अनिवार्य हेर्नुहोस्', desc: 'यदि रु. २ लाखको बिमामा दैनिक १% (रु. २,०००) कोठा भाडा सीमा छ र तपाईं रु. ६,००० को डिलक्स क्याबिन बस्नुभयो भने बिमा कम्पनीले डाक्टर र शल्यक्रियाको बिलमा पनि ६६% कटौती (Proportionate Deduction) गरिदिन्छ।' },
        { step: 3, title: 'घातक रोग (Critical Illness) कभर थप्नुहोस्', desc: 'आफ्नो जीवन वा स्वास्थ्य बिमामा कम्तीमा रु. १५ देखि २५ लाखको Critical Illness राइडर जोड्नुहोस्। यसले क्यान्सर, हृदयाघात, मिर्गौला फेल जस्ता रोगमा तत्कालै एकमुष्ट नगद दिन्छ।' },
        { step: 4, title: 'पहिलेका रोगहरू नढाँटी घोषणा गर्नुहोस्', desc: 'बिमा फारम भर्दा आफूलाई पहिलेदेखि भएको उच्च रक्तचाप, मधुमेह वा पहिले भएका शल्यक्रिया खुलाउनुहोस्। रोग लुकाएमा पछि दाबी गर्दा बिमा कम्पनीले १ रुपैयाँ पनि नदिई दाबी खारेज गरिदिन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा साधारण स्वास्थ्य बिमा र घातक रोग बिमा बीचको भिन्नता',
        headers: ['विशेषता', 'साधारण स्वास्थ्य बिमा (Health Insurance)', 'घातक रोग बिमा (Critical Illness Rider)'],
        rows: [
          ['भुक्तानीको तरिका', 'अस्पतालको वास्तविक बिल सोधभर्ना (Reimbursement)', 'रोग प्रमाणित हुनासाथ १००% एकमुष्ट नगद भुक्तानी'],
          ['अस्पताल भर्ना हुनुपर्ने?', 'पर्ने (न्यूनतम २४ घण्टा भर्ना हुनैपर्छ)', 'नपर्ने (अस्पतालको रिपोर्ट प्रमाणित भए पुग्छ)'],
          ['समेटिने रोगहरू', 'सबै प्रकारका सामान्य बिरामी, शल्यक्रिया, आइसियु', 'तोकिएका ११ देखि २० वटा गम्भीर ज्यानमारा रोगहरू'],
          ['रकमको प्रयोग', 'अस्पतालको बिल तिर्न मात्र', 'जहाँसुकै खर्च गर्न स्वतन्त्र: घरखर्च, विदेशमा उपचार, ऋण भुक्तानी'],
          ['दाबी गरेपछि पोलिसी', 'दाबी रकम घट्छ तर पोलिसी जारी रहन्छ', '१००% भुक्तानीपछि यो सुविधा स्वतः समाप्त हुन्छ'],
          ['नेपालमा सामान्य बिमांक', 'रु. १,००,००० देखि रु. १०,००,००० सम्म', 'रु. १०,००,००० देखि रु. ५०,००,००० सम्म']
        ]
      },
      nepalContext: 'काठमाडौँका निजी अस्पतालहरूमा क्याबिनको भाडा प्रतिदिन रु. ८,००० देखि १५,००० र आइसियुको रु. २५,००० भन्दा माथि पुगेको छ। नेपालमा अधिकांश कम्पनीहरूले आफ्ना कर्मचारीलाई दिने रु. १-२ लाखको सामूहिक बिमा गम्भीर बिरामी पर्दा ४८ घण्टामै सकिन्छ। त्यसैले आफ्नो जागिरको भरमा मात्र नपरी व्यक्तिगत रूपमा छुट्टै स्वास्थ्य र Critical Illness बिमा लिनु परिवारको सुरक्षाका लागि अपरिहार्य छ।',
      practicalScenario: {
        persona: 'देवी, ४९, काठमाडौँकी गृहिणी',
        income: 'पारिवारिक व्यवसाय आम्दानी रु. १,२०,000 / महिना',
        scenarioText: 'देवीका श्रीमानलाई अचानक हृदयाघात भयो र आकस्मिक एन्जियोप्लास्टी तथा स्टेन्ट हाल्नुपर्‍यो। अस्पतालको बिल रु. ८,५०,००० आयो र उनी ६ महिनासम्म पसल जान नसक्ने भए।',
        solutionText: 'उनीहरूले पहिले नै रु. ५ लाखको स्वास्थ्य बिमा र रु. २० लाखको Critical Illness कभर लिएका थिए। स्वास्थ्य बिमाले अस्पतालको रु. ४,८०,००० बिल सोधभर्ना गरिदियो भने Critical Illness ले तत्कालै रु. २० लाख नगद खातामा पठाइदियो। जसले गर्दा श्रीमान बिरामी हुँदा पनि पसलको भाडा र घरखर्च सहजै चल्यो र कुनै सम्पत्ति बेच्नु परेन।',
        metricHighlight: 'रु. २० लाख एकमुष्ट नगद + रु. ४.८ लाख अस्पताल सोधभर्ना प्राप्त गरी आर्थिक विपत्तिबाट सुरक्षा'
      },
      formula: {
        name: 'कोठा भाडा सीमा नाघ्दा लाग्ने समानुपातिक कटौती सूत्र',
        equation: '\\text{स्वीकृत दाबी रकम} = \\text{योग्य उपचार खर्च} \\times \\left(\\frac{\\text{तोकिएको कोठा भाडा}}{\\text{वास्तविक क्याबिन शुल्क}}\\right)',
        variables: [
          { symbol: 'तोकिएको कोठा भाडा', name: 'अनुमोदित दैनिक सीमा', desc: 'बिमांकको १% सम्म मात्र पाइने दैनिक कोठा भाडा सीमा।' },
          { symbol: 'वास्तविक क्याबिन शुल्क', name: 'अस्पतालले लिएको शुल्क', desc: 'बिरामी बसेको क्याबिनको प्रतिदिनको वास्तविक बिल।' },
          { symbol: 'योग्य उपचार खर्च', name: 'शल्यक्रिया तथा डाक्टर शुल्क', desc: 'अस्पतालको बिलमा रहेका डाक्टर, शल्यक्रिया, ल्याब र नर्सिङ खर्चहरू।' }
        ],
        exampleCalculation: 'रु. २ लाखको स्वास्थ्य बिमामा १% कोठा सीमा = रु. २,०००/दिन। बिरामी रु. ६,०००/दिनको क्याबिनमा बस्यो। अपरेसन र औषधीको बिल रु. १,५०,००० आयो। समानुपातिक अनुपात = २,००० / ६,००० = ०.३३३। बिमा कम्पनीले १,५०,००० * ०.३३३ = रु. ५०,००० मात्र तिर्छ। बाँकी रु. १,००,००० बिमितले आफ्नै खल्तीबाट तिर्नुपर्छ।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'स्वास्थ्य बिमा कर छुट'
      },
      commonMistakes: [
        { mistake: 'अस्पतालमा भर्ना हुँदा बिमाको १% कोठा सीमाभन्दा महँगो क्याबिन छान्नु।', correct: 'भर्ना हुनासाथ आफ्नो बिमाले पाउने दैनिक कोठा भाडा सीमाभित्रकै बेड माग्नुहोस्।', explanation: 'कोठा सीमा नाघ्दा अस्पतालको सम्पूर्ण बिलमा समानुपातिक कटौती हुन्छ र ठूलो रकम खल्तीबाट जान्छ।' },
        { mistake: 'कम्पनीले दिएको १ लाखको स्वास्थ्य बिमामा ढुक्क परेर बस्नु।', correct: 'व्यक्तिगत रूपमा छुट्टै कम्तीमा ५ लाखको स्वास्थ्य र २० लाखको Critical Illness लिनुहोस्।', explanation: 'जागिर छुट्दा वा ठूलो रोग लाग्दा कम्पनीको १ लाखको बिमाले आइसियुको २ दिनको खर्च पनि धान्दैन।' },
        { mistake: 'पहिलेदेखि भएको प्रेसर वा सुगरको रोग बिमा गर्दा लुकाउनु।', correct: 'आफूलाई भएका सबै पुराना रोग प्रस्ताव फारममा स्पष्ट खुलाउनुहोस्।', explanation: 'रोग लुकाएको भेटिएमा बिमा कम्पनीले उपचार खर्च दिँदैन र पोलिसी खारेज गरिदिन्छ।' }
      ],
      definitions: [
        { term: 'स्वास्थ्य बिमा (Health Insurance)', full: 'अस्पताल भर्ना सोधभर्ना बिमा', meaning: 'अस्पतालमा भर्ना भई उपचार गराउँदा लागेको बिल बापतको रकम सोधभर्ना दिने बिमा।' },
        { term: 'घातक रोग बिमा (Critical Illness)', full: 'गम्भीर रोग नगद अनुदान', meaning: 'क्यान्सर, मुटु, मिर्गौला जस्ता गम्भीर रोग लागेको प्रमाणित हुनासाथ एकमुष्ट नगद दिने विशेष सुविधा।' },
        { term: 'कोठा भाडा सीमा (Room Rent Sub-limit)', full: 'दैनिक बेड खर्च सिलिङ', meaning: 'अस्पतालको दैनिक बेड भाडामा लगाइएको अधिकतम सीमा, जसभन्दा महँगो कोठा बस्दा सबै खर्च काटिन्छ।' },
        { term: 'कुर्नुपर्ने अवधि (Waiting Period)', full: 'लागू हुन लाग्ने समय', meaning: 'बिमा सुरु भएपछि दाबी गर्न मिल्ने हुनुअगाडिको निश्चित समय (सामान्य रोगमा ३० दिन, पुराना रोगमा २ वर्ष)।' }
      ],
      faqs: [
        { q: 'के स्वास्थ्य बिमाले बहिरङ्ग (OPD) डाक्टर जाँचको खर्च बेहोर्छ?', a: 'साधारण स्वास्थ्य बिमाले कम्तीमा २४ घण्टा अस्पताल भर्ना भएको खर्च मात्र बेहोर्छ। ओपिडी खर्च समेट्ने विशेष बिमा पनि हुन्छन् तर तिनको प्रिमियम निकै महँगो हुन्छ।' },
        { q: 'स्वास्थ्य बिमामा आयकर छुट कति पाइन्छ?', a: 'आयकर ऐन २०५८ अनुसार व्यक्तिगत करदाताले स्वास्थ्य बिमा प्रिमियम बापत वार्षिक अधिकतम रु. २०,००० सम्म करयोग्य आयबाट घटाउन पाउँछन्।' },
        { q: 'नेपालमा Critical Illness अन्तर्गत कुन-कुन रोग समेटिन्छन्?', a: 'प्रायः ११ देखि २० वटा गम्भीर रोगहरू समेटिन्छन्, जसमा क्यान्सर, पहिलोपटकको हृदयाघात, ओपन हार्ट बाइपास सर्जरी, मिर्गौला विफलता र पक्षघात (Stroke) प्रमुख हुन्।' }
      ],
      takeaways: [
        'स्वास्थ्य बिमाले अस्पतालको बिल तिर्छ भने Critical Illness ले जीवन धान्न एकमुष्ट नगद दिन्छ।',
        'कम्पनीले दिएको १-२ लाखको सामूहिक बिमा ठूला रोगका लागि पर्याप्त हुँदैन।',
        'अस्पताल भर्ना हुँदा कोठा भाडा सीमा (१%) भित्रकै बेड रोजेर समानुपातिक कटौतीबाट जोगिनुहोस्।',
        'रु. ५ लाखको स्वास्थ्य बिमा र रु. २० लाखको Critical Illness कभर सँगै राख्नुहोस्।',
        'बिमा फारम भर्दा पहिलेदेखिका पुराना रोगहरू सत्यतथ्य खुलाउनुहोस् ताकि दाबी खारेज नहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Calculate tax deductions up to NPR 20,000 for health insurance premiums.' }
    ],
    downloadableResources: [
      { title: 'Critical Illness Covered Conditions & Exclusion Checklist (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '175 KB', href: 'assets/downloads/nepal-insurance-claim-checklist.html' }
    ]
  },

  // ── F3. GOVERNMENT HEALTH INSURANCE BOARD (SWASTHYA BEEMA BOARD) ─
  'government-health-insurance-board-nepal': {
    id: 'ins-gov-health-board',
    slug: 'government-health-insurance-board-nepal',
    categorySlug: 'insurance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min registration walkthrough', np: '१५ मिनेट सरकारी बिमा प्रक्रिया' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Health Insurance Board (HIB / Swasthya Beema Board) Act 2074 Rules', np: 'स्वास्थ्य बिमा बोर्ड ऐन २०७४ र नियमावली अनुसार समीक्षित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'Government Health Insurance in Nepal: The NPR 3,500 Family Scheme',
      oneLineSummary: 'How to enroll in the Swasthya Beema Board scheme - get up to NPR 1,00,000 cashless healthcare coverage for a family of five across public hospitals.',
      summaryPoints: [
        'The Government Health Insurance Board (Swasthya Beema Board - SBB) provides up to NPR 1,00,000 annual cashless coverage for a family of up to 5 members.',
        'The annual contribution is a heavily subsidized flat NPR 3,500 per household (plus NPR 700 for each additional member above 5).',
        'Senior citizens aged 70+ receive 100% free government health insurance with a separate individual NPR 1,00,000 benefit envelope.',
        'You must designate a First Point of Contact (FPOC / Pratham Sewa Bindu) - typically your local Primary Health Center or District Hospital.',
        'A mandatory 10% co-payment rule applies at government and community service hospitals to deter non-essential drug hoarding.'
      ],
      whatIsThis: 'The National Health Insurance Program (Rastriya Swasthya Beema Karyakram) is a social health protection system established under the Health Insurance Act 2074. Administered by the semi-autonomous Health Insurance Board (HIB / स्वास्थ्य बिमा बोर्ड), it pools community financial risk to guarantee equitable, affordable access to essential inpatient, outpatient, and diagnostic healthcare services across all 77 districts of Nepal.',
      whyItMatters: 'Over 60% of total healthcare spending in Nepal is paid out-of-pocket by patients at hospital cash counters, frequently forcing families to sell land, livestock, or borrow from local moneylenders at 24% interest. The government scheme ensures that for just NPR 3,500 per year (less than NPR 10 per day for an entire family), everyday illnesses, lab tests, emergency care, and essential medicines are completely covered.',
      howItWorks: [
        { step: 1, title: 'Contact Your Local Ward Enrollment Assistant', desc: 'Each municipal Ward has an official Enrollment Assistant (Darata Sahayogi). Contact your Ward office or Darata Sahayogi with citizenship cards of adults and birth certificates of children.' },
        { step: 2, title: 'Pay the Annual Family Contribution', desc: 'Pay NPR 3,500 for a family up to 5 members (add NPR 700 per person for members 6+). Extremely poor families (identified by poverty identity cards), FCHVs (50% discount), and severely disabled citizens receive fully subsidized enrollment.' },
        { step: 3, title: 'Select Your First Point of Contact (FPOC)', desc: 'Choose your primary health post, primary hospital, or district hospital as your Pratham Sewa Bindu. All routine care must originate here.' },
        { step: 4, title: 'Access Care & Referral Protocols', desc: 'Present your digital Health Insurance Card at the hospital counter. Routine care is cashless. If advanced surgery or tertiary care is needed, your FPOC issues a formal Referral Slip (Refer Purji) to specialized hospitals (e.g., Bir Hospital, TUTH Teaching Hospital).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Government Health Insurance (SBB) Contribution & Benefit Schedule',
        headers: ['Household Category', 'Annual Family Premium', 'Annual Medical Cover Limit', 'Special Subsidies & Exemptions'],
        rows: [
          ['Standard Family (Up to 5 Members)', 'NPR 3,500 / year', 'Up to NPR 1,00,000 / family', 'Covers OPD, IPD, labs & listed medicines'],
          ['Large Family (6+ Members)', 'NPR 3,500 + NPR 700 / extra person', 'Up to NPR 1,00,000 + NPR 20k / extra member (max 2L)', 'Proportional cap expansion'],
          ['Senior Citizens (Age 70+)', '100% Free (Government Paid)', 'NPR 1,00,000 (Individual cover)', 'Exclusive envelope not shared with family'],
          ['Severely Disabled / Ultra-Poor', '100% Free (Government Subsidized)', 'Up to NPR 1,00,000 / family', 'Requires Red/Blue disability or Poverty card'],
          ['Female Community Health Volunteers (FCHV)', '50% Discount (NPR 1,750 / year)', 'Up to NPR 1,00,000 / family', 'Recognized community service incentive']
        ]
      },
      nepalContext: 'While the SBB scheme is operational nationwide, users often experience administrative friction: long pharmacy queues, stock-outs of government-listed medicines forcing out-of-pocket purchases at external pharmacies, and bureaucratic referral hurdles. However, for chronic disease patients needing monthly medications (blood pressure, diabetes, thyroid) and standard diagnostics, the scheme saves tens of thousands of rupees annually.',
      practicalScenario: {
        persona: 'Hari, 58, vegetable farmer in Chitwan',
        income: 'NPR 25,000 / month farm earnings (Family of 4)',
        scenarioText: 'Hari suffered from chronic kidney stones requiring urological surgery, while his wife required daily diabetes and hypertension medications costing NPR 2,500 every month. The private hospital quoted NPR 80,000 for his surgery, which would have forced him to sell a milking buffalo.',
        solutionText: 'He enrolled his family in the Swasthya Beema Board scheme through his Ward Darata Sahayogi for NPR 3,500. His surgery at Bharatpur Government Hospital was completed completely cashless under the NPR 1,00,000 ceiling, and his wife receives her monthly diabetes and BP medications free of cost through the hospital pharmacy.',
        metricHighlight: 'Saved NPR 80,000 surgery cost + NPR 30,000/year recurring medicine expenses'
      },
      formula: {
        name: 'Government Health Insurance Premium & Coverage Math',
        equation: '\\text{Family Premium} = 3500 + \\max(0, N - 5) \\times 700 \\quad | \\quad \\text{Coverage Ceiling} = \\min(200000, 100000 + \\max(0, N - 5) \\times 20000)',
        variables: [
          { symbol: 'N', name: 'Total Family Members', desc: 'All immediate family members residing in the same household under one kitchen.' },
          { symbol: '3500', name: 'Base Household Contribution', desc: 'Flat annual government contribution for up to 5 family members.' },
          { symbol: '700', name: 'Incremental Member Fee', desc: 'Additional fee for each member beyond the base 5-member threshold.' },
          { symbol: '100000', name: 'Standard Benefit Cap', desc: 'Maximum cashless treatment limit provided per family per fiscal year.' }
        ],
        exampleCalculation: 'Family of 7 members enrolling in SBB. Annual premium = 3,500 + (7 - 5) * 700 = 3,500 + 1,400 = NPR 4,900/year. Total family coverage ceiling = 1,00,000 + (2 * 20,000) = NPR 1,40,000 in cashless healthcare benefits.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Healthcare Budgeting'
      },
      commonMistakes: [
        { mistake: 'Going directly to a central tertiary hospital in Kathmandu without a referral slip.', correct: 'Always visit your designated First Point of Contact (FPOC) first to get a formal Refer Purji.', explanation: 'Visiting central hospitals without a formal referral voids insurance coverage, requiring 100% out-of-pocket payment.' },
        { mistake: 'Forgetting to renew the policy annually before the expiry deadline.', correct: 'Renew your subscription every year during your enrollment quarter via your Darata Sahayogi or eSewa/Khalti.', explanation: 'Lapsed policies enforce a mandatory multi-month waiting period before reactivation.' },
        { mistake: 'Assuming the government card covers private corporate hospitals.', correct: 'Care is strictly restricted to designated government and contracted community hospitals.', explanation: 'Private corporate hospitals do not accept the SBB government card unless specifically empaneled.' }
      ],
      definitions: [
        { term: 'Swasthya Beema Board (SBB)', full: 'Health Insurance Board', meaning: 'The autonomous government authority managing Nepal\'s national social health insurance system.' },
        { term: 'FPOC', full: 'Pratham Sewa Bindu (First Point of Contact)', meaning: 'The local government health post or primary hospital chosen by the family where all treatments must begin.' },
        { term: 'Refer Purji', full: 'Official Medical Referral Slip', meaning: 'The authorized document issued by your primary hospital enabling you to receive cashless care at higher tertiary hospitals.' },
        { term: 'Co-Payment', full: 'Saha-Bhuktani', meaning: 'A 10% cost-sharing mechanism paid by the patient on hospital bills to encourage responsible medical utilization.' }
      ],
      faqs: [
        { q: 'Can I pay my government health insurance renewal online in Nepal?', a: 'Yes. You can renew your annual subscription digitally via digital wallets like eSewa and Khalti by entering your Health Insurance Card number.' },
        { q: 'Are pre-existing diseases covered under the government health scheme?', a: 'Yes! Unlike private insurance, the Government Health Insurance Board covers pre-existing diseases (hypertension, diabetes, heart conditions) from Day 1 without exclusion.' },
        { q: 'Can senior citizens get treatment without family members enrolling?', a: 'Yes. Any Nepali citizen aged 70+ can be enrolled individually 100% free of cost by the local ward, receiving a dedicated NPR 1,00,000 benefit card.' }
      ],
      takeaways: [
        'Pay just NPR 3,500/year for up to NPR 1,00,000 in cashless healthcare for a family of 5.',
        'Senior citizens aged 70+ receive 100% free enrollment with a separate NPR 1 Lakh cover.',
        'Pre-existing chronic conditions (diabetes, BP) are covered from Day 1 without exclusion.',
        'Always obtain a formal Referral Slip from your First Point of Contact before visiting central hospitals.',
        'Renew annually via eSewa, Khalti, or your local Ward Darata Sahayogi to maintain continuous benefits.'
      ]
    },
    np: {
      title: 'नेपालमा सरकारी स्वास्थ्य बिमा कार्यक्रम: रु. ३,५०० मा ५ जनाको परिवारको उपचार',
      oneLineSummary: 'स्वास्थ्य बिमा बोर्डको योजनामा कसरी दर्ता हुने - रु. ३,५०० प्रिमियममा सरकारी अस्पतालहरूबाट वार्षिक रु. १,००,००० सम्मको निःशुल्क उपचार पाउने तरिका।',
      summaryPoints: [
        'स्वास्थ्य बिमा बोर्ड (SBB) ले ५ जनासम्मको परिवारलाई वार्षिक रु. १,००,००० सम्मको क्यासलेस (नगदरहित) स्वास्थ्य उपचार सुविधा दिन्छ।',
        'यसका लागि वार्षिक योगदान शुल्क प्रति परिवार एकमुष्ट रु. ३,५०० मात्र हो (५ जनाभन्दा बढी सदस्य भए प्रति व्यक्ति थप रु. ७०० लाग्छ)।',
        '७० वर्ष पुगेका ज्येष्ठ नागरिकलाई सरकारले १००% निःशुल्क बिमा गरिदिन्छ र उनीहरूका लागि छुट्टै थप रु. १ लाखको सुविधा हुन्छ।',
        'उपचार सेवा लिन सुरुमा आफ्नो पायक पर्ने स्वास्थ्य चौकी वा अस्पताललाई "प्रथम सेवा बिन्दु (FPOC)" तोक्नुपर्छ।',
        'अनावश्यक औषधी थुपार्ने प्रवृत्ति रोक्न सरकारी तथा सामुदायिक अस्पतालमा १०% सह-भुक्तानी (Co-payment) को नियम लागू छ।'
      ],
      whatIsThis: 'राष्ट्रिय स्वास्थ्य बिमा कार्यक्रम भनेको स्वास्थ्य बिमा ऐन २०७४ अनुसार नेपाल सरकारले नागरिकको औषधोपचार खर्च सहज बनाउन ल्याएको सामाजिक सुरक्षा कार्यक्रम हो। स्वास्थ्य बिमा बोर्ड मातहत सञ्चालित यो कार्यक्रम नेपालका सबै ७७ वटै जिल्लामा लागू छ, जसले सामान्य नागरिकलाई उपचार खर्चकै कारण गरिबीको चपेटामा पर्नबाट जोगाउँछ।',
      whyItMatters: 'नेपालमा ६०% भन्दा बढी स्वास्थ्य खर्च नागरिकले आफ्नै खल्तीबाट नगद तिर्नुपर्ने बाध्यता छ। बिरामी पर्दा जग्गा बेच्नुपर्ने वा मिटरब्याजमा ऋण लिनुपर्ने अवस्था अन्त्य गर्न यो योजना ल्याइएको हो। वर्षमा रु. ३,५०० (दैनिक रु. १० भन्दा कम) मा सम्पूर्ण परिवारको नियमित उपचार, ल्याब परीक्षण, आकस्मिक सेवा र तोकिएका औषधीहरू निःशुल्क पाइन्छन्।',
      howItWorks: [
        { step: 1, title: 'आफ्नो वडाका दर्ता सहयोगी (Enrollment Assistant) लाई सम्पर्क गर्नुहोस्', desc: 'हरेक वडामा स्वास्थ्य बिमाका आधिकारिक "दर्ता सहयोगी" हुन्छन्। परिवारका सदस्यहरूको नागरिकता र बालबच्चाको जन्मदर्ता लिएर वडा कार्यालय वा दर्ता सहयोगीलाई भेट्नुहोस्।' },
        { step: 2, title: 'वार्षिक योगदान रकम रु. ३,५०० बुझाउनुहोस्', desc: '५ जनासम्मको परिवारका लागि रु. ३,५०० बुझाउनुहोस्। अति गरिब परिचयपत्र भएका, महिला स्वास्थ्य स्वयंसेविका (५०% छुट), र पूर्ण अपाङ्गता भएका नागरिकले निःशुल्क वा सहुलियतमा बिमा पाउँछन्।' },
        { step: 3, title: 'प्रथम सेवा बिन्दु (First Point of Contact) छान्नुहोस्', desc: 'आफ्नो नजिकको प्राथमिक स्वास्थ्य केन्द्र वा जिल्ला अस्पताललाई पहिलो सेवा लिने ठाउँका रूपमा छान्नुहोस्। सामान्य बिरामी हुँदा सुरुमा त्यहीँ जानुपर्छ।' },
        { step: 4, title: 'रेफरल पुर्जी र विशेषज्ञ उपचार सेवा', desc: 'अस्पतालमा डिजिटल बिमा कार्ड देखाएर उपचार लिनुहोस्। जटिल शल्यक्रिया वा ठूला अस्पताल जानुपरेमा पहिलो सेवा बिन्दुले आधिकारिक "रेफरल पुर्जी" बनाइदिन्छ, जसबाट टिचिङ वा वीर अस्पतालमा निःशुल्क सेवा पाइन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'स्वास्थ्य बिमा बोर्ड (SBB) योगदान रकम र सुविधाको विवरण',
        headers: ['परिवारको वर्ग', 'वार्षिक योगदान रकम (प्रिमियम)', 'वार्षिक उपचार खर्च सीमा', 'विशेष सहुलियत तथा छुट'],
        rows: [
          ['साधारण परिवार (५ जनासम्म)', 'रु. ३,५०० प्रति वर्ष', 'रु. १,००,००० प्रति परिवार', 'बहिरङ्ग, अन्तरङ्ग, ल्याब र सूचीकृत औषधी'],
          ['ठूलो परिवार (६ जना वा बढी)', 'रु. ३,५०० + प्रति व्यक्ति थप रु. ७००', 'रु. १ लाख + प्रति व्यक्ति थप रु. २० हजार (अधिकतम २ लाख)', 'परिवारको आकार अनुसार सीमा बढ्ने'],
          ['ज्येष्ठ नागरिक (७० वर्ष माथि)', '१००% निःशुल्क (सरकारले बेहोर्ने)', 'रु. १,००,००० (व्यक्तिगत छुट्टै)', 'परिवारको सीमा बाहेकको व्यक्तिगत कोटा'],
          ['पूर्ण अपाङ्ग / अति विपन्न', '१००% निःशुल्क (सरकारी अनुदान)', 'रु. १,००,००० प्रति परिवार', 'रातो/नीलो कार्ड वा गरिब परिचयपत्र आवश्यक'],
          ['महिला स्वास्थ्य स्वयंसेविका (FCHV)', '५०% छुट (रु. १,७५० प्रति वर्ष)', 'रु. १,००,००० प्रति परिवार', 'सामुदायिक सेवा बापतको सम्मान सहुलियत']
        ]
      },
      nepalContext: 'नेपालमा सरकारी स्वास्थ्य बिमा निकै प्रभावकारी भए पनि अस्पतालहरूमा लामो लाइन लाग्नुपर्ने, फार्मेसीमा सबै औषधी नपाएर बाहिर किन्नुपर्ने र रेफरल लिन झन्झट हुने जस्ता प्रशासनिक समस्याहरू अझै विद्यमान छन्। तर पनि उच्च रक्तचाप, मधुमेह, थाइराइड जस्ता दीर्घकालीन रोगका नियमित औषधी खाने र सामान्य शल्यक्रिया गराउने परिवारका लागि यो योजनाले वर्षमै हजारौँ रुपैयाँ बचत गराउँछ।',
      practicalScenario: {
        persona: 'हरि, ५८, चितवनका तरकारी किसान',
        income: 'मासिक कृषि आम्दानी रु. २५,000 (४ जनाको परिवार)',
        scenarioText: 'हरिको मिर्गौलामा पत्थरी भएर शल्यक्रिया गर्नुपर्ने भयो र उनकी श्रीमतीलाई मासिक रु. २,५०० को मधुमेह र प्रेसरको औषधी चाहिन्थ्यो। निजी अस्पतालले शल्यक्रियाको रु. ८०,००० मागेपछि उनी भैँसी बेच्ने तयारीमा थिए।',
        solutionText: 'उनले वडाका दर्ता सहयोगीमार्फत रु. ३,५०० तिरेर परिवारको स्वास्थ्य बिमा गराए। भरतपुर सरकारी अस्पतालमा उनको पत्थरीको शल्यक्रिया रु. १ लाखको बिमा सीमाभित्र पूर्ण निःशुल्क भयो र श्रीमतीले खाने नियमित औषधी पनि अस्पतालको फार्मेसीबाट बिना पैसा पाइरहेका छन्।',
        metricHighlight: 'रु. ८०,००० को शल्यक्रिया र वार्षिक रु. ३०,००० को नियमित औषधी पूर्ण निःशुल्क पाए'
      },
      formula: {
        name: 'स्वास्थ्य बिमा प्रिमियम र अधिकतम सुविधा हिसाब',
        equation: '\\text{वार्षिक प्रिमियम} = ३५०० + \\max(०, N - ५) \\times ७०० \\quad | \\quad \\text{सुविधा सीमा} = \\min(२०००००, १००००० + \\max(०, N - ५) \\times २००००)',
        variables: [
          { symbol: 'N', name: 'परिवारको कुल सदस्य संख्या', desc: 'एउटै चुल्होमा खाना खाने परिवारका कुल सदस्यहरू।' },
          { symbol: '३५००', name: 'आधारभूत परिवार शुल्क', desc: '५ जनासम्मको परिवारका लागि वार्षिक एकमुष्ट योगदान रकम।' },
          { symbol: '७००', name: 'थप सदस्य शुल्क', desc: '५ जनाभन्दा बढी हुने हरेक अतिरिक्त सदस्य बापत थपिने शुल्क।' },
          { symbol: '१०००००', name: 'आधारभूत उपचार सीमा', desc: 'एक आर्थिक वर्षमा परिवारले पाउने अधिकतम निःशुल्क उपचार रकम।' }
        ],
        exampleCalculation: '७ जनाको परिवारले स्वास्थ्य बिमा गर्दा: वार्षिक शुल्क = ३,५०० + (७ - ५) * ७०० = ३,५०० + १,४०० = रु. ४,९०० प्रति वर्ष। कुल वार्षिक उपचार सीमा = १,००,००० + (२ * २०,०००) = रु. १,४०,००० सम्मको निःशुल्क स्वास्थ्य सेवा।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'स्वास्थ्य बजेटिङ'
      },
      commonMistakes: [
        { mistake: 'रेफरल पुर्जी नलिई सीधै काठमाडौँका ठूला अस्पतालमा उपचार गराउन जानु।', correct: 'सधैँ आफ्नो प्रथम सेवा बिन्दुबाट आधिकारिक "रेफरल पुर्जी" लिएर मात्र ठूला अस्पताल जानुहोस्।', explanation: 'रेफरल बिना सीधै जाँदा बिमाले उपचार खर्च बेहोर्दैन र पूरै पैसा आफ्नै खल्तीबाट तिर्नुपर्छ।' },
        { mistake: 'वार्षिक म्याद सकिएपछि नवीकरण गर्न बिर्सिनु।', correct: 'प्रत्येक वर्ष तोकिएको समयमै eSewa, Khalti वा वडाका दर्ता सहयोगीमार्फत नवीकरण गर्नुहोस्।', explanation: 'म्याद नाघेपछि नवीकरण गर्दा फेरि केही महिना सेवा रोकिन्छ र कुर्नुपर्ने हुन्छ।' },
        { mistake: 'सरकारी बिमा कार्डले निजी महँगा अस्पतालमा पनि काम गर्छ भनी सोच्नु।', correct: 'यो सुविधा सम्झौता भएका सरकारी तथा सामुदायिक अस्पतालहरूमा मात्र लागू हुन्छ।', explanation: 'बोर्डसँग सम्झौता नभएका निजी अस्पतालहरूले सरकारी बिमा स्वीकार गर्दैनन्।' }
      ],
      definitions: [
        { term: 'स्वास्थ्य बिमा बोर्ड (SBB)', full: 'राष्ट्रिय स्वास्थ्य बिमा नियामक', meaning: 'नेपालभर सामाजिक स्वास्थ्य बिमा कार्यक्रम सञ्चालन गर्ने नेपाल सरकारको आधिकारिक निकाय।' },
        { term: 'प्रथम सेवा बिन्दु (FPOC)', full: 'पहिलो उपचार केन्द्र', meaning: 'बिरामी पर्दा सुरुमा जाँच गराउन परिवारले रोजेको स्थानीय सरकारी स्वास्थ्य संस्था।' },
        { term: 'रेफरल पुर्जी', full: 'माथिल्लो अस्पताल सिफारिस पत्र', meaning: 'स्थानीय स्वास्थ्य संस्थामा उपचार हुन नसकेपछि ठूलो अस्पताल जान दिइने आधिकारिक पत्र।' },
        { term: 'सह-भुक्तानी (Co-Payment)', full: '१०% लागत सहभागिता', meaning: 'अनावश्यक औषधी र सेवाको दुरुपयोग रोक्न बिरामीले अस्पतालको बिलमा तिर्नुपर्ने १०% सानो हिस्सा।' }
      ],
      faqs: [
        { q: 'के सरकारी स्वास्थ्य बिमाको नवीकरण अनलाइनबाट गर्न मिल्छ?', a: 'मिल्छ। आफ्नो बिमा कार्ड नम्बर प्रयोग गरेर eSewa वा Khalti जस्ता डिजिटल वालेटबाट घरमै बसेर वार्षिक नवीकरण शुल्क तिर्न सकिन्छ।' },
        { q: 'के पहिलेदेखि भएको सुगर वा प्रेसरको उपचार यसमा पाइन्छ?', a: 'पाइन्छ! निजी बिमामा जस्तो यसमा पुराना रोगहरू छुटाइँदैन; दर्ता भएको पहिलो दिनदेखि नै सुगर, प्रेसर र अन्य पुराना रोगको उपचार तथा औषधी पाइन्छ।' },
        { q: 'के ७० वर्ष पुगेका बाआमाको छुट्टै निःशुल्क बिमा गर्न मिल्छ?', a: 'मिल्छ। ७० वर्ष पुगेका ज्येष्ठ नागरिकलाई परिवारमा नजोडी वडा कार्यालयबाट सिधै १००% निःशुल्क छुट्टै रु. १ लाखको ज्येष्ठ नागरिक बिमा कार्ड बनाइदिन सकिन्छ।' }
      ],
      takeaways: [
        'वार्षिक रु. ३,५०० मा ५ जनाको सम्पूर्ण परिवारका लागि रु. १,००,००० सम्मको उपचार सुरक्षित गर्नुहोस्।',
        '७० वर्ष कटेका ज्येष्ठ नागरिकले १००% निःशुल्क छुट्टै रु. १ लाखको बिमा पाउँछन्।',
        'पुराना रोगहरू (सुगर, प्रेसर आदि) पहिलो दिनदेखि नै पूर्ण रूपमा समेटिन्छन्।',
        'ठूला अस्पताल जानुअघि आफ्नो पहिलो सेवा बिन्दुबाट अनिवार्य "रेफरल पुर्जी" लिनुहोस्।',
        'eSewa वा Khalti बाट हरेक वर्ष समयमै नवीकरण गरी सेवा निरन्तर चालू राख्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Assess family healthcare savings.' }
    ],
    downloadableResources: [
      { title: 'Government Health Insurance Board Enrolled Hospitals & Medicine List (PDF)', type: 'PDF Directory', format: 'PDF Document', size: '210 KB', href: 'assets/downloads/nepal-insurance-claim-checklist.html' }
    ]
  },

  // ── F4. HOW TO FILE INSURANCE CLAIM IN NEPAL ─────────────────────
  'how-to-file-insurance-claim-nepal': {
    id: 'ins-claim-filing-guide',
    slug: 'how-to-file-insurance-claim-nepal',
    categorySlug: 'insurance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min document audit', np: '१५ मिनेट दाबी कागजात तयारी' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Nepal Insurance Authority Claims Settlement Directives', np: 'नेपाल बिमा प्राधिकरण दाबी भुक्तानी निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Health Insurance vs Critical Illness', np: 'स्वास्थ्य बिमा र घातक रोग' },
    en: {
      title: 'Step-by-Step Insurance Claim Process in Nepal: Avoiding Rejections',
      oneLineSummary: 'From 24-hour hospitalization intimation to gathering itemized discharge summaries, lab reports, and appealing unfair insurer repudiations.',
      summaryPoints: [
        'Over 80% of insurance claim disputes in Nepal occur due to missing hospital paperwork, delayed claim intimation, or pre-existing condition non-disclosure.',
        'Intimate the insurer within 24 to 48 hours of hospital admission via email or customer care hotline to avoid immediate technical claim rejection.',
        'Never accept summarized hospital package bills: insurers strictly require original itemized pharmacy bills, diagnostic reports, and discharge summaries.',
        'Non-medical items (admission registration fees, PPE kits, hand sanitizers, deluxe toiletries) are standard non-payable exclusions deducted from payouts.',
        'If an insurer unfairly rejects or underpays a valid claim, policyholders can file a formal complaint with the Nepal Insurance Authority (Beema Pradhikaran).'
      ],
      whatIsThis: 'An insurance claim is the formal contractual request submitted by a policyholder to their insurance company demanding compensation for a covered medical hospitalization, critical illness diagnosis, property damage, or death. In Nepal, claim settlement is governed by strict regulatory timelines set by the Nepal Insurance Authority (NIA / नेपाल बिमा प्राधिकरण).',
      whyItMatters: 'Paying insurance premiums for years is pointless if your claim is rejected during a medical emergency because you lost an original pharmacy bill or reported the admission 4 days too late. Understanding the exact evidentiary checklist ensures your claim is settled smoothly within the statutory 21-to-35-day regulatory settlement window.',
      howItWorks: [
        { step: 1, title: 'Send Prompt Claim Intimation (Within 24-48 Hours)', desc: 'As soon as the patient is admitted to the hospital, email the insurance company or call their toll-free claims desk. State the patient\'s name, policy number, hospital name, and tentative diagnosis.' },
        { step: 2, title: 'Collect Original Documents at Discharge', desc: 'Collect: (1) Complete Discharge Summary (Chhutti Purji) detailing admission/discharge dates and treatment history, (2) Original itemized hospital bills with cash counter stamps, (3) Doctor\'s written prescriptions for all medicines, (4) All diagnostic reports (Blood, X-Ray, CT/MRI).' },
        { step: 3, title: 'Submit Complete Dossier Within 15-30 Days', desc: 'Fill out the official Claim Form. Attach your PAN, citizenship, and bank cheque photo for direct connectIPS settlement. Submit the complete physical packet to the insurer\'s branch and secure a stamped acknowledgment receipt.' },
        { step: 4, title: 'Review Settlement & Escalate Disputes', desc: 'The surveyor/medical officer assesses the claim. Upon approval, funds are wired to your bank. If the insurer unjustly repudiates the claim, submit a formal petition to the Complaints Department at Nepal Insurance Authority (Kupandole, Lalitpur).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Mandatory Insurance Claim Document Checklist in Nepal',
        headers: ['Required Document', 'Issuing Authority', 'Key Verification Checkpoint', 'Consequence If Missing'],
        rows: [
          ['Discharge Summary', 'Hospital Medical Records Dept', 'Doctor signature, diagnosis, admission/discharge timestamps', 'Immediate claim rejection'],
          ['Itemized Final Hospital Bill', 'Hospital Billing Counter', 'Breakdown of room, nursing, OT, surgery charges with official stamp', 'Claim halted until provided'],
          ['Original Pharmacy Cash Memos', 'Hospital / Chemist Pharmacy', 'Matches exact doctor prescription dates and dosages', 'Pharmacy expenses deducted'],
          ['Diagnostic Lab & Radiology Reports', 'Hospital Pathology / Imaging Lab', 'Signed by Pathologist/Radiologist with patient hospital ID', 'Investigation costs disallowed'],
          ['Doctor\'s Consultation Prescriptions', 'Treating Medical Consultant', 'Doctor\'s NMC registration number clearly stamped', 'Consultation fees rejected']
        ]
      },
      nepalContext: 'Under Nepal Insurance Authority Directives, once a policyholder submits all complete required documents, the insurer is legally mandated to settle or formally repudiate the claim within 35 days. If the company delays settlement beyond this window without valid regulatory cause, they are liable to pay statutory interest on the delayed claim amount.',
      practicalScenario: {
        persona: 'Laxmi, 38, high school teacher in Biratnagar',
        income: 'NPR 50,000 / month salary',
        scenarioText: 'Laxmi underwent an emergency laparoscopic gallbladder surgery costing NPR 1,60,000. She threw away her daily pharmacy receipts, submitting only the hospital\'s single-page summary invoice to her insurer, which promptly rejected her claim.',
        solutionText: 'Her insurance advisor guided her back to the hospital: the billing department reprinted duplicate itemized pharmacy bills and diagnostic reports with official hospital seals. She resubmitted the complete dossier with an explanation letter. The insurer approved NPR 1,48,000 (after deducting NPR 12,000 in non-medical PPE and admission charges) and transferred the cash via connectIPS within 18 days.',
        metricHighlight: 'Recovered NPR 1,48,000 on a rejected claim by reconstructing itemized hospital records'
      },
      formula: {
        name: 'Net Insurance Claim Reimbursement Formula',
        equation: '\\text{Net Payout} = \\text{Total Hospital Bill} - \\text{Non-Medical Items} - \\text{Co-Payment (if any)} - \\text{Room Cap Deductions}',
        variables: [
          { symbol: 'Total Hospital Bill', name: 'Gross Billed Amount', desc: 'Total invoice presented by the treating hospital in Nepalese Rupees.' },
          { symbol: 'Non-Medical Items', name: 'Excluded Sundries', desc: 'Admission charges, PPE kits, sanitizers, thermometer, deluxe food.' },
          { symbol: 'Co-Payment', name: 'Mandatory Cost Share', desc: 'Agreed policy deductible percentage (typically 10% to 15% on senior policies).' },
          { symbol: 'Room Cap Deductions', name: 'Proportionate Penalty', desc: 'Deductions applied if the selected room exceeded policy bed ceilings.' }
        ],
        exampleCalculation: 'Total bill = NPR 2,00,000. Non-medical exclusions = NPR 15,000. Eligible expenses = NPR 1,85,000. Policy has a 10% co-payment clause: Co-payment = 1,85,000 * 0.10 = NPR 18,500. Net insurance payout wired to bank = 1,85,000 - 18,500 = NPR 1,66,500.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Family Emergency Reserves'
      },
      commonMistakes: [
        { mistake: 'Throwing away individual pharmacy cash slips and submitting only a summary bill.', correct: 'Preserve every single individual medicine receipt with its corresponding doctor prescription.', explanation: 'Insurers reject bulk pharmacy amounts without itemized proof of medicine purchase.' },
        { mistake: 'Waiting 2 months after discharge before notifying the insurance company.', correct: 'Intimate the company within 48 hours of admission and submit files within 15-30 days.', explanation: 'Late intimation violates policy contract conditions and provides grounds for claim repudiation.' },
        { mistake: 'Accepting claim rejection verbally over the phone without a formal letter.', correct: 'Demand an official written claim repudiation letter citing the exact policy clause.', explanation: 'A written rejection letter is mandatory to file an appeal with the Nepal Insurance Authority.' }
      ],
      definitions: [
        { term: 'Claim Intimation', full: 'Daabi Suchana', meaning: 'The initial formal notification sent to an insurance company informing them of a hospitalization or loss event.' },
        { term: 'Discharge Summary', full: 'Chhutti Purji', meaning: 'The clinical summary issued by the hospital detailing patient diagnosis, treatment given, and recovery condition.' },
        { term: 'Non-Medical Deductions', full: 'Gair-Swasthya Kharcha', meaning: 'Hospital bill items not considered directly curative (registration, sanitizers, food) excluded from insurance payment.' },
        { term: 'Repudiation', full: 'Daabi Khareji', meaning: 'The formal legal rejection of an insurance claim by the insurer due to breach of policy conditions.' }
      ],
      faqs: [
        { q: 'Can I claim cashless hospitalization in Nepal private hospitals?', a: 'Cashless facility is available only if your insurer has a formal Third-Party Administrator (TPA) tie-up with that specific hospital. Otherwise, you pay cash and file for reimbursement.' },
        { q: 'Where do I file a complaint if my insurance claim is unfairly rejected?', a: 'Submit a formal written complaint with your policy copy and rejection letter to the Complaints Handling Division at Nepal Insurance Authority (Beema Pradhikaran), Kupandole, Lalitpur.' },
        { q: 'How long does an insurance company have to settle a claim in Nepal?', a: 'Under official Beema Pradhikaran guidelines, insurers must settle complete claims within 21 to 35 days of receiving all verified documents.' }
      ],
      takeaways: [
        'Notify your insurance company within 24-48 hours of hospital admission to protect your claim.',
        'Collect complete original discharge summaries, itemized billing breakdown, and all lab reports.',
        'Understand that non-medical items (PPE, sanitizers, registration) are standard deductions.',
        'Submit the complete claim dossier within 15 to 30 days of discharge; get a stamped receipt.',
        'Escalate unfair claim rejections directly to the Nepal Insurance Authority in Kupandole.'
      ]
    },
    np: {
      title: 'नेपालमा बिमा दाबी (Claim) गर्ने सही तरिका: दाबी खारेज हुनबाट कसरी जोगिने?',
      oneLineSummary: 'अस्पताल भर्ना भएको २४ घण्टाभित्र सूचना दिनेदेखि डिस्चार्ज समरी, औषधी बिल संकलन गर्ने र दाबी अस्वीकृत भएमा बिमा प्राधिकरणमा उजुरी गर्ने विधि।',
      summaryPoints: [
        'नेपालमा ८०% भन्दा बढी बिमा दाबी विवादहरू कागजात नपुगेर, ढिला सूचना दिएर वा पहिलेका रोगहरू लुकाएका कारण हुने गर्दछन्।',
        'अस्पताल भर्ना हुनासाथ २४ देखि ४८ घण्टाभित्र बिमा कम्पनीलाई इमेल वा फोनमार्फत दाबीको पूर्व-सूचना (Claim Intimation) दिनु अनिवार्य हुन्छ।',
        'अस्पतालको एकमुष्ट प्याकेज बिल मान्य हुँदैन; बिमा कम्पनीले औषधीको छुट्टाछुट्टै बिल, डाक्टरको प्रेस्क्रिप्सन र ल्याब रिपोर्ट माग्दछन्।',
        'गैर-उपचार खर्चहरू (जस्तै दर्ता शुल्क, पीपीई, स्यानिटाइजर, साबुन, खाना) बिमाले बेहोर्दैन र ती रकम बिलबाट कट्टी हुन्छन्।',
        'यदि कम्पनीले उचित कारण बिना दाबी अस्वीकृत गरेमा बिमितले नेपाल बिमा प्राधिकरण (कुपण्डोल) मा आधिकारिक उजुरी दिन सक्छन्।'
      ],
      whatIsThis: 'बिमा दाबी (Insurance Claim) भनेको कुनै बिरामी, दुर्घटना वा क्षति भएपछि पोलिसीको सर्त अनुसार बिमा कम्पनीसँग क्षतिपूर्ति रकम माग गर्ने औपचारिक कानुनी प्रक्रिया हो। नेपालमा बिमा दाबी भुक्तानी सम्बन्धी नियमहरू नियामक निकाय नेपाल बिमा प्राधिकरणको निर्देशिका अनुसार कडाइका साथ सञ्चालित हुन्छन्।',
      whyItMatters: 'वर्षौँसम्म प्रिमियम तिरेर पनि आकस्मिक बिरामी पर्दा सामान्य कागजी गल्ती वा समयमा खबर नगरेकै कारण दाबी खारेज भयो भने बिमा गर्नुको कुनै अर्थ रहँदैन। आवश्यक कागजातहरूको चेकलिस्ट र प्रक्रिया बुझेमा बिमा कम्पनीले तोकिएको २१ देखि ३५ दिनभित्र बिना कुनै झन्झट बैंक खातामा पैसा पठाइदिन्छ।',
      howItWorks: [
        { step: 1, title: '२४ देखि ४८ घण्टाभित्र दाबीको सूचना (Intimation) दिनुहोस्', desc: 'बिरामी अस्पताल भर्ना हुनासाथ बिमा कम्पनीको दाबी शाखामा फोन वा इमेल गर्नुहोस्। पोलिसी नम्बर, बिरामीको नाम, अस्पताल र रोगको विवरण टिपाउनुहोस्।' },
        { step: 2, title: 'डिस्चार्ज हुँदा सक्कल कागजातहरू संकलन गर्नुहोस्', desc: 'अस्पतालबाट: (१) विस्तृत डिस्चार्ज समरी (छुट पुर्जी), (२) अस्पतालको छाप लागेको विस्तृत बिल, (३) डाक्टरले लेखेका सबै प्रेस्क्रिप्सन, र (४) सबै रगत, एक्सरे, भिडियो एक्सरे र सिटी स्क्यानका रिपोर्टहरू लिनुहोस्।' },
        { step: 3, title: '१५ देखि ३० दिनभित्र दाबी फारम बुझाउनुहोस्', desc: 'कम्पनीको दाबी फारम भरेर नागरिकता, प्यान र बैंक चेकको फोटो सहित सक्कल बिलहरू शाखामा बुझाउनुहोस् र दर्ता भएको भरपाई (Acknowledgment) अनिवार्य लिनुहोस्।' },
        { step: 4, title: 'दाबी फछ्र्यौट र विवाद भए उजुरी गर्नुहोस्', desc: 'कम्पनीको डाक्टर/सर्भेयरले बिल रुजु गरी स्वीकृत रकम connectIPS बाट बैंकमा पठाउँछ। यदि अन्यायपूर्ण ढंगले दाबी अस्वीकार गरिएमा नेपाल बिमा प्राधिकरणमा उजुरी दिनुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा स्वास्थ्य बिमा दाबी गर्दा चाहिने अनिवार्य कागजातहरूको चेकलिस्ट',
        headers: ['आवश्यक कागजात', 'जारी गर्ने निकाय', 'जाँच्नुपर्ने मुख्य कुरा', 'नभएमा हुने परिणाम'],
        rows: [
          ['डिस्चार्ज समरी (छुट पुर्जी)', 'अस्पतालको मेडिकल रेकर्ड शाखा', 'डाक्टरको हस्ताक्षर, रोगको नाम, भर्ना र डिस्चार्ज मिति', 'दाबी सीधै खारेज हुने'],
          ['विस्तृत अस्पताल बिल (Itemized Bill)', 'अस्पतालको बिलिङ काउन्टर', 'बेड, नर्सिङ, अपरेसन र डाक्टर शुल्क छुट्टाछुट्टै खुलेको', 'कागजात नपुगेसम्म दाबी रोकिने'],
          ['सक्कल फार्मेसी बिलहरू', 'अस्पताल वा बाहिरको फार्मेसी', 'डाक्टरको प्रेस्क्रिप्सनसँग औषधीको नाम र मिति मिलेको', 'औषधी खर्चको रकम काटिने'],
          ['ल्याब तथा रेडियोलोजी रिपोर्टहरू', 'प्याथोलोजी / रेडियोलोजी ल्याब', 'कन्सल्ट्यान्टको हस्ताक्षर भएको सक्कल रिपोर्ट', 'जाँच खर्च भुक्तानी नहुने'],
          ['डाक्टरको प्रेस्क्रिप्सन', 'उपचारमा संलग्न चिकित्सक', 'डाक्टरको नेपाल मेडिकल काउन्सिल (NMC) नम्बर भएको', 'परामर्श शुल्क अस्वीकृत हुने']
        ]
      },
      nepalContext: 'नेपाल बिमा प्राधिकरणको निर्देशिका अनुसार बिमितले सबै कागजात पेश गरिसकेपछि बिमा कम्पनीले बढीमा ३५ दिनभित्र दाबी भुक्तानी गरिसक्नुपर्छ वा दाबी नलाग्ने भए त्यसको लिखित कानुनी कारण खुलाएर पत्र पठाउनुपर्छ। विना कारण दाबी रोकेर राखेमा कम्पनीले तोकिएको ब्याज सहित भुक्तानी गर्नुपर्ने कानुनी व्यवस्था छ।',
      practicalScenario: {
        persona: 'लक्ष्मी, ३८, विराटनगरकी मावि शिक्षिका',
        income: 'मासिक तलब रु. ५०,000',
        scenarioText: 'लक्ष्मीले पित्तथैलीको आकस्मिक शल्यक्रिया गराउँदा रु. १,६०,००० खर्च भयो। उनले औषधीका खुद्रा बिलहरू फालेर अस्पतालको एकमुष्ट बिल मात्र बुझाएपछि बिमा कम्पनीले दाबी अस्वीकृत गर्‍यो।',
        solutionText: 'उनले अस्पतालको बिलिङ शाखामा गएर छाप सहितको विस्तृत डुप्लिकेट औषधी बिल र ल्याब रिपोर्टहरू निकालिन्। उनले निवेदन सहित पुनः फाइल पेश गरिन्। बिमा कम्पनीले रु. १२,००० को गैर-औषधी खर्च कटाएर बाँकी रु. १,४८,००० रकम १८ दिनभित्रै लक्ष्मीको बैंक खातामा पठाइदियो।',
        metricHighlight: 'विस्तृत कागजात पुनः पेश गरेर अस्वीकृत भएको रु. १,४८,००० दाबी रकम फिर्ता'
      },
      formula: {
        name: 'बिमा दाबीमा पाइने खुद भुक्तानी हिसाब सूत्र',
        equation: '\\text{खुद भुक्तानी} = \\text{कुल अस्पताल बिल} - \\text{गैर-उपचार खर्च} - \\text{सह-भुक्तानी (यदि भए)} - \\text{कोठा सीमा कटौती}',
        variables: [
          { symbol: 'कुल अस्पताल बिल', name: 'अस्पतालले दिएको बिल', desc: 'उपचार, शल्यक्रिया र औषधीको कुल खर्च रकम।' },
          { symbol: 'गैर-उपचार खर्च', name: 'छुट नगरिने खर्च', desc: 'दर्ता शुल्क, पीपीई, स्यानिटाइजर, थर्मामिटर, बिरामी कुरुवाको खाना।' },
          { symbol: 'सह-भुक्तानी', name: 'आफैँले बेहोर्नुपर्ने हिस्सा', desc: 'सर्त अनुसार बिमितले बेहोर्नुपर्ने १०% वा १५% रकम।' },
          { symbol: 'कोठा सीमा कटौती', name: 'समानुपातिक जरिवाना', desc: 'तोकिएको भन्दा महँगो कोठा बस्दा काटिने रकम।' }
        ],
        exampleCalculation: 'अस्पतालको कुल बिल = रु. २,००,०००। गैर-उपचार खर्च = रु. १५,०००। बाँकी योग्य खर्च = रु. १,८५,०००। यदि पोलिसीमा १०% Co-payment सर्त भए: सह-भुक्तानी = १,८५,००० * ०.१० = रु. १८,५००। बिमा कम्पनीले बैंकमा दिने खुद रकम = १,८५,००० - १८,५०० = रु. १,६६,५००।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'आपतकालीन बजेटिङ'
      },
      commonMistakes: [
        { mistake: 'फार्मेसीको सानो-सानो बिल फालेर एकमुष्ट बिल मात्र बुझाउनु।', correct: 'हरेक औषधी खरिदको छुट्टाछुट्टै सक्कल बिल र डाक्टरको पुर्जी सुरक्षित राख्नुहोस्।', explanation: 'बिमा कम्पनीले विस्तृत बिल बिना औषधीको पैसा शोधभर्ना गर्दैन।' },
        { mistake: 'अस्पतालबाट डिस्चार्ज भएको २ महिनापछि मात्र बिमा दाबी पेश गर्नु।', correct: 'भर्ना भएको ४८ घण्टाभित्र खबर गर्नुहोस् र डिस्चार्ज भएको १५-३० दिनभित्र फाइल बुझाउनुहोस्।', explanation: 'ढिला दाबी गर्दा पोलिसीको सर्त उल्लंघन भएको भन्दै दाबी खारेज हुन सक्छ।' },
        { mistake: 'दाबी अस्वीकृत हुँदा मौखिक भरमा चित्त बुझाएर बस्नु।', correct: 'कम्पनीबाट कुन बुँदा अनुसार अस्वीकृत भएको हो, लिखित खारेजी पत्र माग्नुहोस्।', explanation: 'लिखित पत्र लिएर मात्र नेपाल बिमा प्राधिकरणमा पुनरावेदन गर्न सकिन्छ।' }
      ],
      definitions: [
        { term: 'दाबी सूचना (Claim Intimation)', full: 'प्रारम्भिक खबर', meaning: 'बिरामी भर्ना भएपछि बिमा कम्पनीलाई औपचारिक रूपमा दिइने प्रारम्भिक जानकारी।' },
        { term: 'डिस्चार्ज समरी (छुट पुर्जी)', full: 'अस्पताल मुक्ति विवरण', meaning: 'अस्पतालले जारी गर्ने बिरामीको रोग, गरिएको उपचार र स्वास्थ्य अवस्था उल्लेख भएको मुख्य कागजात।' },
        { term: 'गैर-उपचार खर्च (Non-Medical Items)', full: 'अस्वीकृत वस्तु खर्च', meaning: 'उपचारसँग प्रत्यक्ष सम्बन्ध नभएका वस्तुहरू (स्यानिटाइजर, पीपीई, दर्ता) जसको भुक्तानी बिमाले गर्दैन।' },
        { term: 'दाबी खारेजी (Repudiation)', full: 'भुक्तानी अस्वीकृति', meaning: 'सर्त पालना नभएको वा नक्कली दाबी भएको भन्दै बिमा कम्पनीले आधिकारिक रूपमा दाबी रद्द गर्ने निर्णय।' }
      ],
      faqs: [
        { q: 'के नेपालका निजी अस्पतालहरूमा क्यासलेस (Cashless) सेवा पाइन्छ?', a: 'यदि तपाईंको बिमा कम्पनीको त्यो अस्पतालसँग प्रत्यक्ष TPA सम्झौता छ भने मात्र क्यासलेस पाइन्छ। अन्यथा सुरुमा आफ्नै पैसा तिरेर पछि बिल पेश गरी शोधभर्ना लिनुपर्छ।' },
        { q: 'बिमा कम्पनीले दाबी दिन नमानेमा कहाँ उजुरी गर्ने?', a: 'नेपाल बिमा प्राधिकरणको केन्द्रीय कार्यालय (कुपण्डोल, ललितपुर) स्थित गुनासो सुनुवाइ शाखामा आफ्ना प्रमाण र कम्पनीको खारेजी पत्र सहित लिखित उजुरी दिन सकिन्छ।' },
        { q: 'कागजात बुझाएपछि कति दिनभित्र दाबीको पैसा आउँछ?', a: 'बिमा प्राधिकरणको निर्देशिका अनुसार सम्पूर्ण कागजात दुरुस्त भएको अवस्थामा कम्पनीले २१ देखि ३५ दिनभित्र दाबी भुक्तानी गरिसक्नुपर्छ।' }
      ],
      takeaways: [
        'अस्पताल भर्ना हुनासाथ २४ देखि ४८ घण्टाभित्र बिमा कम्पनीलाई फोन वा इमेलबाट अनिवार्य सूचना दिनुहोस्।',
        'अस्पतालबाट डिस्चार्ज हुँदा सक्कल छुट पुर्जी, छाप लागेको विस्तृत बिल र सबै ल्याब रिपोर्ट लिनुहोस्।',
        'दर्ता शुल्क, पीपीई, स्यानिटाइजर जस्ता गैर-उपचार खर्च बिमाले बेहोर्दैन भन्ने बुझ्नुहोस्।',
        'डिस्चार्ज भएको १५ देखि ३० दिनभित्र सबै फाइल शाखामा बुझाएर दर्ता भरपाई लिनुहोस्।',
        'बिमा कम्पनीले विना कारण दाबी अस्वीकार गरेमा नेपाल बिमा प्राधिकरणमा उजुरी दिनुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Assess family cash reserves.' }
    ],
    downloadableResources: [
      { title: 'Standard Health Insurance Claim Document Dossier Checklist (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '160 KB', href: 'assets/downloads/nepal-insurance-claim-checklist.html' }
    ]
  },

  // ── F5. TAX REBATE ON LIFE INSURANCE IN NEPAL ────────────────────
  'tax-rebate-life-insurance-nepal': {
    id: 'ins-tax-rebate-rules',
    slug: 'tax-rebate-life-insurance-nepal',
    categorySlug: 'insurance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min tax deduction computation', np: '१५ मिनेट कर कट्टी हिसाब' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Income Tax Act 2058 Schedule 1 & Nepal Insurance Authority Guidelines', np: 'आयकर ऐन २०५८ अनुसूची १ र बिमा प्राधिकरण निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Maximizing Legal Tax Deductions', np: 'कानुनी कर छुटका उपाय' },
    en: {
      title: 'Income Tax Deductions on Life & Health Insurance Premiums in Nepal',
      oneLineSummary: 'Claim up to NPR 40,000 for life insurance and NPR 20,000 for health insurance every fiscal year - reducing your taxable income legally.',
      summaryPoints: [
        'The Income Tax Act 2058 (Schedule 1) allows salaried and individual taxpayers to deduct up to NPR 40,000 paid as life insurance premium.',
        'Health insurance premiums grant a separate, independent statutory deduction of up to NPR 20,000 per fiscal year.',
        'These deductions apply as a reduction of your gross taxable income, not as a direct tax credit against computed taxes.',
        'Taxpayers in the 30% or 36% marginal tax brackets save up to NPR 14,400 in direct cash taxes by claiming the full NPR 40,000 life insurance limit.',
        'Never buy an overpriced, inadequate endowment policy merely to claim a tax deduction; always prioritize adequate term life coverage.'
      ],
      whatIsThis: 'Insurance Tax Deductions in Nepal are statutory tax relief incentives codified under Schedule 1, Clauses 12 and 16 of the Income Tax Act 2058. Designed to foster a national culture of self-funded financial resilience, they permit resident individual taxpayers to subtract life insurance and health insurance premium payments from their gross assessable employment or business income before computing progressive tax slabs.',
      whyItMatters: 'Many corporate employees in Nepal fail to declare their life and health insurance policies to their company\'s payroll department, allowing their employer to withhold excessive monthly TDS. For an employee in the 30% tax bracket, claiming both the NPR 40,000 life insurance and NPR 20,000 health insurance limits results in NPR 18,000 in immediate, risk-free annual cash tax savings - effectively subsidizing 30% of their insurance costs.',
      howItWorks: [
        { step: 1, title: 'Verify Policy Eligibility', desc: 'The policy must be an active life insurance policy on your own life or your spouse\'s life issued by a licensed Nepali insurer (e.g., Nepal Life, LIC Nepal, National Life, Himalayan Life).' },
        { step: 2, title: 'Collect Annual Premium Payment Receipts', desc: 'Download official computerized premium renewal receipts from your insurer\'s customer portal or branch. Ensure the receipt clearly states your PAN and the current fiscal year (Shrawan to Ashadh).' },
        { step: 3, title: 'Submit Declaration to HR / Accounts', desc: 'Submit the premium receipts to your employer\'s accounts department before Magh or Falgun. HR factors the deduction into your payroll system, reducing your monthly TDS deductions for the remaining months.' },
        { step: 4, title: 'Declare on Annual Tax Return (Form D-01)', desc: 'If filing your own annual return on the IRD portal, enter the actual premium paid under the "Life Insurance Premium" deduction field (system automatically caps it at NPR 40,000).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Insurance Tax Relief Across Income Slabs in Nepal (FY 2081/82)',
        headers: ['Marginal Tax Bracket', 'Life Insurance Cap', 'Health Insurance Cap', 'Combined Deductions', 'Direct Cash Tax Saved'],
        rows: [
          ['10% Bracket (NPR 5L - 7L single)', 'NPR 40,000', 'NPR 20,000', 'NPR 60,000', 'NPR 6,000 / year'],
          ['20% Bracket (NPR 7L - 10L single)', 'NPR 40,000', 'NPR 20,000', 'NPR 60,000', 'NPR 12,000 / year'],
          ['30% Bracket (NPR 10L - 20L single)', 'NPR 40,000', 'NPR 20,000', 'NPR 60,000', 'NPR 18,000 / year'],
          ['36% Bracket (NPR 20L - 50L single)', 'NPR 40,000', 'NPR 20,000', 'NPR 60,000', 'NPR 21,600 / year'],
          ['39% Bracket (Above NPR 50 Lakh)', 'NPR 40,000', 'NPR 20,000', 'NPR 60,000', 'NPR 23,400 / year']
        ]
      },
      nepalContext: 'Prior to the 2077 budget, the statutory life insurance deduction was capped at NPR 25,000. Recognizing inflation and rising living costs, the Government of Nepal enhanced the threshold to NPR 40,000. Unlike Western jurisdictions that phase out tax perks for high earners, Nepal allows all individual taxpayers across every income slab to fully claim this deduction regardless of total salary.',
      practicalScenario: {
        persona: 'Santosh, 41, bank officer in Kathmandu',
        income: 'NPR 1,10,000 / month salary (In the 30% marginal tax bracket)',
        scenarioText: 'Santosh was paying NPR 42,000/year for his life insurance policy and NPR 18,000/year for his family health policy. He never bothered submitting receipts to HR, assuming "it\'s only a few hundred rupees."',
        solutionText: 'He submitted both receipts to payroll in Poush. His taxable income was reduced by NPR 40,000 (life cap) + NPR 18,000 (actual health) = NPR 58,000 total deduction. In his 30% tax bracket, his annual tax fell by exactly NPR 17,400. His monthly take-home pay increased by NPR 2,900 for the final 6 months of the fiscal year.',
        metricHighlight: 'Saved NPR 17,400 in cold cash taxes - effectively subsidizing 29% of his total insurance costs'
      },
      formula: {
        name: 'Insurance Tax Savings Formula',
        equation: '\\text{Cash Tax Saved} = \\min(\\text{Premium}_{\\text{life}}, 40000) \\times t_{\\text{marginal}} + \\min(\\text{Premium}_{\\text{health}}, 20000) \\times t_{\\text{marginal}}',
        variables: [
          { symbol: 'Premium_life', name: 'Annual Life Premium', desc: 'Actual premium paid for life insurance in the fiscal year.' },
          { symbol: 'Premium_health', name: 'Annual Health Premium', desc: 'Actual premium paid for health insurance in the fiscal year.' },
          { symbol: 't_marginal', name: 'Marginal Tax Rate', desc: 'Your highest applicable income tax slab rate (10%, 20%, 30%, 36%, or 39%).' }
        ],
        exampleCalculation: 'Life premium = NPR 45,000 (capped at NPR 40,000). Health premium = NPR 20,000. Total deductible = NPR 60,000. Marginal tax rate = 30%. Annual cash tax saved = 60,000 * 0.30 = NPR 18,000. The government effectively finances NPR 18,000 of your family\'s insurance bill.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Calculate Insurance Tax Relief'
      },
      commonMistakes: [
        { mistake: 'Buying an expensive NPR 80,000 endowment policy just to get tax deductions.', correct: 'Deductions are strictly capped at NPR 40,000; excess premium yields zero additional tax relief.', explanation: 'Paying NPR 80,000 premium to save NPR 12,000 in tax while trapping cash in low-return policies is bad math.' },
        { mistake: 'Submitting premium receipts for policies held in parents\' names.', correct: 'Deductions apply only to policies in your own name or your legally wedded spouse\'s name.', explanation: 'Tax officers disallow life insurance deductions claimed for parents or siblings.' },
        { mistake: 'Throwing away premium receipts paid online via eSewa or connectIPS.', correct: 'Always download the official computerized receipt generated by the insurance company.', explanation: 'Digital wallet transaction screenshots are not legally valid tax audit vouchers; company receipts are required.' }
      ],
      definitions: [
        { term: 'Schedule 1 Deduction', full: 'Anusuchi 1 Katti', meaning: 'The specific section of Nepal\'s Income Tax Act detailing statutory personal exemptions for insurance and retirement.' },
        { term: 'Marginal Tax Rate', full: 'Simaanta Kar Dar', meaning: 'The highest tax bracket percentage applied to the last rupee of your taxable income.' },
        { term: 'Tax Deduction vs Credit', full: 'Kar Katti vs Kar Chhut', meaning: 'A deduction reduces taxable income before tax calculation; a credit reduces the final computed tax directly.' },
        { term: 'Combined Insurance Shield', full: 'Kul Bima Katti', meaning: 'The total potential NPR 60,000 deduction available by combining life (NPR 40k) and health (NPR 20k) policies.' }
      ],
      faqs: [
        { q: 'Can both husband and wife claim the NPR 40,000 life insurance deduction?', a: 'Yes! If both spouses are employed and earn separate incomes, each individual taxpayer can claim up to NPR 40,000 on their respective tax filings, totaling NPR 80,000 for the household.' },
        { q: 'Does home insurance offer any tax deduction in Nepal?', a: 'Yes. Under Schedule 1, Clause 17, insuring your private residential building against natural disasters (earthquake, fire) grants an additional deduction of up to NPR 5,000 per year.' },
        { q: 'What happens if I pay 2 years of insurance premiums in a single fiscal year?', a: 'The tax deduction is capped at NPR 40,000 in the fiscal year the payment occurs. Advance premiums paid for future years cannot be carried forward to claim deductions in future years.' }
      ],
      takeaways: [
        'Claim up to NPR 40,000 for life insurance and NPR 20,000 for health insurance every fiscal year.',
        'High earners in the 30% bracket save up to NPR 18,000 in cold cash taxes every single year.',
        'Submit official insurance receipts to HR before Magh/Falgun to reduce your monthly TDS immediately.',
        'Both working spouses can independently claim up to NPR 40,000 each on their own tax filings.',
        'Never buy an overpriced policy just for tax perks - cap deductions and invest surplus in mutual fund SIPs.'
      ]
    },
    np: {
      title: 'नेपालमा जीवन र स्वास्थ्य बिमामा पाइने आयकर छुटको कानुनी व्यवस्था',
      oneLineSummary: 'जीवन बिमामा वार्षिक रु. ४०,००० र स्वास्थ्य बिमामा थप रु. २०,००० सम्मको प्रिमियम करयोग्य आयबाट घटाएर कर बचत गर्ने तरिका।',
      summaryPoints: [
        'आयकर ऐन २०५८ को अनुसूची १ अनुसार व्यक्तिगत करदाताले जीवन बिमा प्रिमियम बापत वार्षिक अधिकतम रु. ४०,००० सम्म करयोग्य आयबाट घटाउन पाउँछन्।',
        'स्वास्थ्य बिमा प्रिमियम बापत थप छुट्टै अधिकतम रु. २०,००० सम्मको कर छुट पाइन्छ, जसले कुल बिमा छुट रु. ६०,००० पुग्छ।',
        'यो छुट कुल कर रकमबाट सीधै घटाउने (Tax Credit) होइन, कर लाग्नुअघिको करयोग्य आम्दानीबाट घटाउने (Tax Deduction) हो।',
        '३०% वा ३६% को उच्च कर स्ल्याबमा पर्ने व्यक्तिले रु. ४० हजारको पूरै छुट लिँदा वर्षमा रु. १२,००० देखि रु. १४,४०० सम्म नगद कर बचाउँछन्।',
        'कर छुट पाइन्छ भन्दैमा अपर्याप्त सुरक्षा भएको महँगो सावधिक बिमामा फस्नुहुँदैन; सधैँ म्यादी बिमा (Term Life) लाई प्राथमिकता दिनुपर्छ।'
      ],
      whatIsThis: 'बिमा कर छुट (Insurance Tax Deductions) भनेको नेपाल सरकारले नागरिकहरूलाई आफ्नै स्वास्थ्य र जीवनको सुरक्षा गर्न प्रोत्साहन गर्न आयकर ऐन २०५८ को अनुसूची १ (दफा १२ र १६) मा दिएको कानुनी कर सहुलियत हो। यस व्यवस्था अनुसार बिमा कम्पनीलाई बुझाएको वार्षिक प्रिमियम रकम करयोग्य तलबबाट घटाएर बाँकी रकममा मात्र स्ल्याब कर हिसाब गरिन्छ।',
      whyItMatters: 'नेपालमा धेरै जागिरेहरूले आफ्नो जीवन बिमा र स्वास्थ्य बिमाको रसिद कार्यालयको लेखा शाखामा बुझाउन अल्छी गर्छन्, जसले गर्दा हरेक महिना तलबबाट बढी TDS कर काटिन्छ। ३०% कर स्ल्याबमा रहेको कर्मचारीले जीवन बिमाको रु. ४०,००० र स्वास्थ्य बिमाको रु. २०,००० को छुट लिँदा वर्षमै रु. १८,००० नगद कर बचत हुन्छ - जसको अर्थ सरकारले नै उसको बिमा खर्चको ३०% हिस्सा बेहोरिदिए सरह हुन्छ।',
      howItWorks: [
        { step: 1, title: 'बिमा पोलिसीको योग्यता जाँच्नुहोस्', desc: 'नेपाल बिमा प्राधिकरणबाट इजाजतप्राप्त जीवन बिमा कम्पनीबाट आफ्नो वा आफ्ना दम्पती (पति/पत्नी) को नाममा जारी भएको सक्कल पोलिसी हुनुपर्छ।' },
        { step: 2, title: 'वार्षिक प्रिमियम भुक्तानीको आधिकारिक रसिद लिनुहोस्', desc: 'बिमा कम्पनीको पोर्टल वा शाखाबाट चालु आर्थिक वर्ष (साउनदेखि असार) भित्र प्रिमियम तिरेको आधिकारिक छाप भएको कम्प्युटर रसिद डाउनलोड गर्नुहोस्।' },
        { step: 3, title: 'माघ वा फागुनभित्र कार्यालयको HR/लेखा शाखामा बुझाउनुहोस्', desc: 'आफ्नो कार्यालयमा रसिद पेश गर्नुहोस्। लेखापालले मासिक तलब कर हिसाब गर्दा करयोग्य आयबाट यो रकम घटाइदिन्छ, जसले गर्दा बाँकी महिनाहरूमा हात पर्ने तलब बढ्छ।' },
        { step: 4, title: 'वार्षिक आय विवरण (D-01) मा दाबी गर्नुहोस्', desc: 'यदि आफैँ अनलाइन आय विवरण भर्दै हुनुहुन्छ भने "Life Insurance Premium" को कोठामा प्रिमियम रकम हाल्नुहोस् (प्रणालीले अधिकतम रु. ४०,००० सम्म स्वतः घटाउँछ)।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा विभिन्न कर स्ल्याबमा बिमा कर छुटबाट हुने प्रत्यक्ष नगद बचत',
        headers: ['कर स्ल्याब प्रतिशत', 'जीवन बिमा छुट सीमा', 'स्वास्थ्य बिमा छुट सीमा', 'कुल कर छुट रकम', 'वर्षमा हुने प्रत्यक्ष नगद कर बचत'],
        rows: [
          ['१०% कर स्ल्याब (एकल ५-७ लाख)', 'रु. ४०,०००', 'रु. २०,०००', 'रु. ६०,०००', 'वार्षिक रु. ६,००० नगद बचत'],
          ['२०% कर स्ल्याब (एकल ७-१० लाख)', 'रु. ४०,०००', 'रु. २०,०००', 'रु. ६०,०००', 'वार्षिक रु. १२,००० नगद बचत'],
          ['३०% कर स्ल्याब (एकल १०-२० लाख)', 'रु. ४०,०००', 'रु. २०,०००', 'रु. ६०,०००', 'वार्षिक रु. १८,००० नगद बचत'],
          ['३६% कर स्ल्याब (एकल २०-५० लाख)', 'रु. ४०,०००', 'रु. २०,०००', 'रु. ६०,०००', 'वार्षिक रु. २१,६०० नगद बचत'],
          ['३९% कर स्ल्याब (५० लाखभन्दा माथि)', 'रु. ४०,०००', 'रु. २०,०००', 'रु. ६०,०००', 'वार्षिक रु. २३,४०० नगद बचत']
        ]
      },
      nepalContext: '२०७७ सालको बजेटअघि जीवन बिमाको कर छुट सीमा वार्षिक रु. २५,००० मात्र थियो। महँगी र नागरिकको बिमा आवश्यकता बढेको महसुस गरी सरकारले यसलाई बढाएर रु. ४०,००० पुर्‍याएको हो। पश्चिमा देशहरूमा उच्च आम्दानी भएकाहरूलाई यस्तो छुट रोकिन्छ, तर नेपालमा जतिसुकै ठूलो तलब खाने व्यक्तिले पनि यो छुट पूर्ण रूपमा लिन पाउँछ।',
      practicalScenario: {
        persona: 'सन्तोष, ४१, काठमाडौँका बैंक अधिकृत',
        income: 'मासिक तलब रु. १,१०,000 (३०% को सिमान्त कर स्ल्याबमा)',
        scenarioText: 'सन्तोषले वर्षमा रु. ४२,००० जीवन बिमा र रु. १८,००० पारिवारिक स्वास्थ्य बिमा तिर्थे। थोरै पैसा त बच्ने हो नि भन्दै उनले कार्यालयमा रसिद बुझाएकै थिएनन्।',
        solutionText: 'उनले पुस महिनामा दुवै रसिद लेखा शाखामा बुझाए। उनको करयोग्य आम्दानीबाट जीवन बिमाको रु. ४०,००० (अधिकतम सीमा) र स्वास्थ्य बिमाको रु. १८,००० गरी कुल रु. ५८,००० घट्यो। ३०% कर स्ल्याबमा रहेकाले उनको वार्षिक कर सीधै रु. १७,४०० ले घट्यो र बाँकी ६ महिनासम्म उनको मासिक तलबमा रु. २,९०० थप हात पर्‍यो।',
        metricHighlight: 'रसिद बुझाएकै भरमा वर्षमै रु. १७,४०० नगद कर बचत (बिमा खर्चको २९% रकम फिर्ता)'
      },
      formula: {
        name: 'बिमा कर छुटबाट हुने नगद बचत सूत्र',
        equation: '\\text{नगद कर बचत} = \\min(\\text{जीवन प्रिमियम}, ४००००) \\times t_{\\text{स्ल्याब}} + \\min(\\text{स्वास्थ्य प्रिमियम}, २००००) \\times t_{\\text{स्ल्याब}}',
        variables: [
          { symbol: 'जीवन प्रिमियम', name: 'वार्षिक जीवन बिमा किस्ता', desc: 'आर्थिक वर्षभित्र जीवन बिमा बापत बुझाइएको वास्तविक प्रिमियम।' },
          { symbol: 'स्वास्थ्य प्रिमियम', name: 'वार्षिक स्वास्थ्य बिमा किस्ता', desc: 'स्वास्थ्य बिमा बापत बुझाइएको वास्तविक प्रिमियम।' },
          { symbol: 't_स्ल्याब', name: 'सिमान्त कर दर (Marginal Tax)', desc: 'तपाईंको अन्तिम आम्दानीमा लागू भएको उच्च कर प्रतिशत (१०%, २०%, ३०%, ३६%)।' }
        ],
        exampleCalculation: 'जीवन बिमा प्रिमियम = रु. ४५,००० (अधिकतम रु. ४०,००० मात्र छुट)। स्वास्थ्य बिमा = रु. २०,०००। कुल छुट = रु. ६०,०००। करदाता ३०% स्ल्याबमा भए: वार्षिक नगद कर बचत = ६०,००० * ०.३० = रु. १८,०००। सरकारले तपाईंको बिमाको रु. १८,००० प्रिमियम तिरिदिए सरह भयो।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'नेपाल आयकर क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'कर छुट पाइन्छ भनेर क्षमताभन्दा बाहिरको रु. ८०,००० को बिमा किन्नु।', correct: 'छुटको अधिकतम सीमा रु. ४०,००० मात्र हो; त्योभन्दा बढी प्रिमियममा थप कुनै कर छुट पाइँदैन।', explanation: 'रु. १२ हजार कर बचाउन रु. ८० हजार महँगो बिमामा फस्नु वित्तीय मूर्खता हो।' },
        { mistake: 'आमाबुबाको नाममा गरिएको बिमाको रसिद आफ्नो कर छुटका लागि पेश गर्नु।', correct: 'छुट केवल आफ्नो र आफ्ना दम्पती (पति/पत्नी) को नामको बिमामा मात्र पाइन्छ।', explanation: 'आमाबुबा वा दाजुभाइको बिमामा आयकर ऐनले कर छुट दिँदैन।' },
        { mistake: 'eSewa वा Khalti को भुक्तानी स्क्रिनसट मात्र लेखामा बुझाउनु।', correct: 'सधैँ बिमा कम्पनीको आधिकारिक छाप भएको कम्प्युटर रसिद डाउनलोड गरेर बुझाउनुहोस्।', explanation: 'डिजिटल वालेटको ट्रान्जक्सन स्क्रिनसटलाई आन्तरिक राजस्व विभागको अडिटले मान्यता दिँदैन।' }
      ],
      definitions: [
        { term: 'अनुसूची १ को छुट', full: 'आयकर ऐनको कानुनी छुट सूची', meaning: 'नेपालमा व्यक्तिगत करदातालाई बिमा र अवकाश बचतमा दिइने कर छुटका आधिकारिक व्यवस्थाहरू।' },
        { term: 'सिमान्त कर दर (Marginal Rate)', full: 'अन्तिम कर स्ल्याब', meaning: 'करदाताको कुल आम्दानीको सबैभन्दा माथिल्लो हिस्सामा लाग्ने उच्च करको प्रतिशत।' },
        { term: 'कर कट्टी भर्सेस कर छुट', full: 'Deduction vs Credit', meaning: 'Deduction ले कर लाग्ने आम्दानी घटाउँछ भने Credit ले सीधै तिर्नुपर्ने करको रकम घटाउँछ।' },
        { term: 'आवासीय घर बिमा छुट', full: 'घर बिमा कर कट्टी', meaning: 'आफ्नो निजी घरको प्राकृतिक विपद् बिमा गरे बापत वर्षमा थप रु. ५,००० सम्म पाइने कर छुट।' }
      ],
      faqs: [
        { q: 'के श्रीमान् र श्रीमती दुवैले छुट्टाछुट्टै रु. ४०,००० छुट लिन पाउँछन्?', a: 'पाउँछन्! यदि दुवैजना जागिरे हुनुहुन्छ र आ-आफ्नो कर तिर्नुहुन्छ भने दुवैले छुट्टाछुट्टै रु. ४०/४० हजार (कुल रु. ८०,०००) सम्मको कर छुट दाबी गर्न पाउनुहुन्छ।' },
        { q: 'के घरको बिमा गर्दा पनि कर छुट पाइन्छ?', a: 'पाइन्छ। आयकर ऐनको अनुसूची १ को दफा १७ अनुसार आफ्नो निजी आवासीय घरको भूकम्प वा आगलागी बिमा गरे बापत वार्षिक थप रु. ५,००० सम्म करयोग्य आयबाट घटाउन पाइन्छ।' },
        { q: 'यदि मैले एकै वर्षमा २ वर्षको बिमा प्रिमियम अग्रिम तिरेँ भने के हुन्छ?', a: 'जतिसुकै तिरे पनि जुन आर्थिक वर्षमा पैसा तिरेको हो, सोही वर्षमा अधिकतम रु. ४०,००० मात्र छुट पाइन्छ। अग्रिम तिरेको बाँकी रकम अर्को वर्ष दाबी गर्न पाइँदैन।' }
      ],
      takeaways: [
        'हरेक आर्थिक वर्ष जीवन बिमामा रु. ४०,००० र स्वास्थ्य बिमामा रु. २०,००० सम्मको कर छुट लिनुहोस्।',
        '३०% कर स्ल्याबमा रहेका जागिरेले वर्षमै रु. १८,००० सम्म प्रत्यक्ष नगद कर बचाउन सक्छन्।',
        'मासिक तलबबाट काटिने TDS तुरुन्त घटाउन माघ-फागुनभित्रै बिमा रसिद लेखा शाखामा बुझाउनुहोस्।',
        'जागिरे दम्पती दुवैले आ-आफ्नो कर विवरणमा छुट्टाछुट्टै रु. ४०/४० हजारको छुट दाबी गर्न सक्छन्।',
        'कर छुटका नाममा अनावश्यक महँगो सावधिक बिमा नकिन्नुहोस्; बचेको पैसा खुला-मुखी SIP मा लगाउनुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Simulate progressive income tax brackets with life and health insurance deduction sliders.' }
    ],
    downloadableResources: [
      { title: 'Insurance Premium Tax Relief Declaration Form for Employers (PDF)', type: 'PDF Form', format: 'PDF Document', size: '150 KB', href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html' }
    ]
  }

};

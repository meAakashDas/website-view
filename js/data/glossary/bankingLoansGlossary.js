// ==============================================
// risePaisa - Banking & Loans Glossary Module
// Production-grade financial encyclopedia entries for Nepal
// ==============================================

export const BANKING_LOANS_GLOSSARY = [
  // 1. BASE RATE
  {
    slug: 'base-rate',
    term: 'Base Rate',
    termNp: 'आधार दर (Base Rate)',
    categorySlug: 'banking',
    categoryName: { en: 'Banking', np: 'बैंकिङ' },
    letter: 'B',
    abbreviation: null,
    synonyms: ['Bank Base Rate', 'Minimum Lending Rate', 'आधार ब्याजदर', 'बैंक आधार दर'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Base Rate is the minimum benchmark interest rate determined by Nepal Rastra Bank below which commercial banks are legally prohibited from lending to borrowers.',
      np: 'आधार दर (Base Rate) भनेको नेपाल राष्ट्र बैंकको निर्देशन अनुसार बैंक तथा वित्तीय संस्थाहरूले आफ्नो सञ्चालन लागत र कोषको लागत हिसाब गरेर निकाल्ने न्यूनतम ब्याजदर हो, जसभन्दा मुनि गएर कुनै पनि ग्राहकलाई कर्जा दिन कानुनी रूपमा पाइँदैन।'
    },
    detailedExplanation: {
      en: 'Every retail and corporate loan issued by licensed banks in Nepal is priced against the institution\'s official Base Rate. Calculated monthly under strict Nepal Rastra Bank (NRB) formulas, the Base Rate incorporates four non-negotiable cost components: the bank\'s Cost of Funds (interest paid on customer deposits), the Cost of Cash Reserve Ratio (CRR), the Cost of Statutory Liquidity Ratio (SLR), and the Operating Administrative Cost. To price your loan, the bank adds a fixed "Premium / Spread" (e.g. Base Rate + 2.0%). Because the Base Rate is floating and published every month, when a bank’s cost of deposits falls, your loan EMI interest rate automatically drops.',
      np: 'नेपालका बैंक तथा वित्तीय संस्थाहरूले प्रवाह गर्ने सबै प्रकारका व्यक्तिगत तथा व्यावसायिक कर्जाहरूको ब्याजदर सम्बन्धित बैंकको आधार दर (Base Rate) सँग जोडिएको हुन्छ। नेपाल राष्ट्र बैंकको कडा नियम अनुसार हरेक महिना गणना गरिने यस दरमा चारवटा मुख्य लागतहरू समावेश हुन्छन्: निक्षेपकर्तालाई दिइने ब्याजको लागत (Cost of Funds), अनिवार्य नगद मौज्दात (CRR) को लागत, वैधानिक तरलता अनुपात (SLR) को लागत र बैंक सञ्चालन खर्च। बैंकले कर्जा दिँदा यसै आधार दरमा निश्चित जोखिम प्रिमियम (जस्तै Base Rate + २%) थपेर ब्याजदर तोक्दछ। आधार दर हरेक महिना बैंकको लागत अनुसार परिवर्तन भइरहने भएकाले बैंकको लागत घट्दा कर्जाको ब्याजदर पनि स्वतः घट्छ।'
    },
    whyItMatters: {
      en: 'Your monthly loan EMI is directly dictated by your bank\'s Base Rate. A bank with a low Base Rate (e.g. 7.5%) can offer a home loan at 9.5%, whereas a bank with an inefficient 9.5% Base Rate will charge 11.5% for the exact same loan. Over a 20-year home mortgage of NPR 8,000,000, that 2.0% Base Rate difference saves you over NPR 2,200,000 in interest payments!',
      np: 'तपाईंले बैंकलाई बुझाउने कर्जाको मासिक किस्ता (EMI) सिधै बैंकको आधार दरमा निर्भर हुन्छ। कम आधार दर (जस्तै ७.५%) भएको बैंकले ९.५% मै घरकर्जा दिन सक्छ भने महँगो आधार दर (जस्तै ९.५%) भएको बैंकले सोही कर्जालाई ११.५% लिन्छ। रु. ८० लाखको २० वर्षे घरकर्जामा यो २% को आधार दरको अन्तरले गर्दा तपाईंको झण्डै रु. २२ लाख भन्दा बढी ब्याज बचत हुन सक्छ!'
    },
    howItWorks: {
      summary: {
        en: 'The determination and loan pricing mechanism of Base Rate operates in 4 steps:',
        np: 'आधार दर निर्धारण र कर्जाको ब्याजदर तय हुने प्रक्रिया ४ चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Monthly Cost Computation', np: '१. मासिक लागत गणना' },
          desc: { en: 'At month-end, the bank computes its total interest expenses paid to depositors, CRR/SLR liquidity carrying costs, and operational staff overheads.', np: 'महिनाको अन्त्यमा बैंकले निक्षेपकर्तालाई तिरेको ब्याज, राष्ट्र बैंकमा राख्नुपर्ने अनिवार्य नगद (CRR/SLR) को लागत र कर्मचारी तथा प्रशासनिक खर्च जोड्दछ।' }
        },
        {
          title: { en: '2. Submission to Nepal Rastra Bank', np: '२. नेपाल राष्ट्र बैंकमा पेश र प्रकाशन' },
          desc: { en: 'The calculated Base Rate is submitted to NRB and published publicly on the bank’s website and national newspapers.', np: 'निकालिएको आधिकारिक आधार दर राष्ट्र बैंकमा पेश गरी बैंकको वेबसाइट र राष्ट्रिय दैनिक पत्रिकाहरूमा सर्वसाधारणका लागि प्रकाशित गरिन्छ।' }
        },
        {
          title: { en: '3. Risk Spread Addition', np: '३. जोखिम प्रिमियम (Spread) थप' },
          desc: { en: 'When issuing a loan, the bank locks in a contractual risk premium spread (e.g. +1.5% to +3.0%) that remains constant throughout the loan tenure.', np: 'कर्जा स्वीकृत गर्दा बैंकले ग्राहकको जोखिम हेरेर निश्चित प्रिमियम (जस्तै +१.५% देखि +३%) सम्झौतामा तोक्छ, जुन कर्जा अवधिभर प्रायः स्थिर रहन्छ।' }
        },
        {
          title: { en: '4. Quarterly Floating Adjustment', np: '४. त्रैमासिक ब्याजदर समायोजन' },
          desc: { en: 'Under NRB directives, floating loan rates adjust automatically every quarter based on the trailing 3-month average Base Rate.', np: 'राष्ट्र बैंकको नियम अनुसार हरेक त्रैमासमा पछिल्लो ३ महिनाको औसत आधार दरका आधारमा कर्जाको ब्याजदर स्वतः समायोजन (बढ्ने वा घट्ने) हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Pricing home loans, auto loans, and personal term loans in Nepal',
        'Corporate working capital credit lines and project financing',
        'Comparing financial efficiency across Class \'A\' Commercial Banks',
        'NRB Monthly Economic Bulletins and banking supervision reports'
      ],
      np: [
        'नेपालमा घरकर्जा, गाडी कर्जा र व्यक्तिगत आवधिक कर्जाको ब्याज तोक्दा',
        'उद्योग व्यवसायका लागि चालु पुँजी कर्जा र परियोजना कर्जा प्रवाह गर्दा',
        'क वर्गका वाणिज्य बैंकहरूको सञ्चालन कुशलता तुलना गर्न',
        'नेपाल राष्ट्र बैंकको मासिक आर्थिक बुलेटिन र वित्तीय समीक्षामा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Spread Ban and Mandatory Floating Rate Adjustments by Nepal Rastra Bank',
        np: 'नेपाल राष्ट्र बैंकद्वारा प्रिमियम बढाउन रोक र त्रैमासिक ब्याजदर समायोजनको नियम'
      },
      body: {
        en: 'In the past, commercial banks in Nepal unfairly squeezed borrowers: when interest rates rose, banks hiked loan interest immediately, but when market rates fell, banks kept loan rates high to pocket fat profits. To eliminate this exploitation, Nepal Rastra Bank enacted strict Unified Directives. First, the bank can never lend below its Base Rate (except for government-subsidized concessional loans). Second, once a loan contract is signed, the bank is legally barred from unilaterally increasing the agreed risk premium spread. Third, banks must adjust floating loan rates downward within 3 months whenever their Base Rate declines.',
        np: 'विगतमा नेपालका बैंकहरूले बजारमा ब्याजदर बढ्दा ऋणको ब्याज तुरुन्तै बढाउने तर बजारमा ब्याज सस्तिँदा पनि ऋणीको ब्याज नघटाई उच्च नाफा कमाउने प्रवृत्ति थियो। यसलाई रोक्न नेपाल राष्ट्र बैंकले कडा एकीकृत निर्देशन जारी गर्‍यो। पहिलो, कुनै पनि बैंकले आधार दरभन्दा मुनि गएर कर्जा दिन पाउँदैन (सरकारको सहुलियतपूर्ण कर्जा बाहेक)। दोस्रो, एकपटक कर्जा सम्झौता भएपछि बैंकले आफूखुसी प्रिमियम दर बढाउन कानुनी रूपमा पाउँदैन। तेस्रो, बैंकको आधार दर घट्नासाथ ३ महिनाभित्र ऋणीको कर्जाको ब्याजदर पनि स्वतः घटाउनै पर्छ।'
      },
      keyPoints: {
        en: [
          'Loan Interest Rate = Base Rate + Fixed Contractual Spread.',
          'Banks are legally prohibited from increasing the agreed spread during the loan term.',
          'Floating loan interest rates must adjust quarterly as the Base Rate changes.',
          'Publicly owned commercial banks (e.g. RBB) historically maintain the lowest base rates in Nepal.'
        ],
        np: [
          'कर्जाको ब्याजदर = आधार दर (Base Rate) + सम्झौता गरिएको निश्चित प्रिमियम।',
          'कर्जा लिइसकेपछि बैंकले सम्झौतामा उल्लेख भएको प्रिमियम बढाउन पाउँदैन।',
          'आधार दर घटबढ भए अनुसार हरेक त्रैमासमा कर्जाको ब्याज स्वतः परिवर्तन हुनुपर्छ।',
          'नेपालमा सरकारी स्वामित्वका बैंकहरू (जस्तै राष्ट्रिय वाणिज्य बैंक) को आधार दर प्रायः सबैभन्दा सस्तो हुन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Hari takes an NPR 5,000,000 home loan from a commercial bank with a Base Rate of 8.0% and an agreed fixed spread of 2.0% (Initial Interest Rate = 10.0%). Two years later, banking system liquidity surges and the bank\'s Base Rate drops to 6.5%. Under NRB directives, the bank cannot alter Hari\'s 2.0% spread: his loan interest rate automatically drops from 10.0% down to 8.5% (6.5% + 2.0%). His monthly EMI drops by nearly NPR 4,800, saving him NPR 57,600 in cash every year without needing to renegotiate with the bank manager.',
        np: 'हरिले एउटा वाणिज्य बैंकबाट रु. ५० लाखको घरकर्जा लिन्छन्। तत्कालीन समयमा बैंकको आधार दर ८.०% र सम्झौता गरिएको प्रिमियम २.०% थियो (सुरुवाती ब्याजदर = १०.०%)। दुई वर्षपछि बजारमा तरलता बढेर बैंकको आधार दर ६.५% मा झर्छ। राष्ट्र बैंकको नियम अनुसार बैंकले हरिको २.०% प्रिमियम बढाउन पाउँदैन: उनको कर्जाको ब्याजदर सिधै १०.०% बाट घटेर ८.५% (६.५% + २.०%) मा आउँछ। यसले गर्दा हरिको मासिक किस्ता (EMI) झण्डै रु. ४,८०० ले घट्छ र उनलाई वर्षको रु. ५७,६०० बचत हुन्छ।'
      },
      takeaway: {
        en: 'Always choose a bank with a proven track record of maintaining a low, stable Base Rate when taking long-term home and auto loans in Nepal.',
        np: 'नेपालमा दीर्घकालीन घर वा गाडी कर्जा लिँदा सधैं ऐतिहासिक रूपमा न्यून र स्थिर आधार दर कायम राख्ने बैंक छनोट गर्नुपर्छ।'
      }
    },
    formula: {
      equation: 'Loan Rate = Base Rate + Contractual Risk Spread',
      explanation: {
        en: 'The final floating loan interest rate charged to the borrower equals the bank\'s published Base Rate plus the fixed risk premium spread agreed upon in the loan offer letter.',
        np: 'ऋणीले तिर्नुपर्ने अन्तिम ब्याजदर भनेको बैंकको हालको आधिकारिक आधार दर (Base Rate) मा कर्जा सम्झौता पत्रमा तोकिएको निश्चित जोखिम प्रिमियम जोड्दा आउने दर हो।'
      },
      variables: [
        { symbol: 'Base Rate', label: { en: 'Bank\'s monthly Cost of Funds + CRR/SLR + Operating Cost', np: 'बैंकको मासिक कोष लागत, वैधानिक तरलता र सञ्चालन खर्च' } },
        { symbol: 'Spread', label: { en: 'Fixed risk premium percentage added by the bank (e.g. 1.5%-3%)', np: 'बैंकले तोकेको स्थिर जोखिम प्रिमियम (प्रायः १.५% देखि ३%)' } }
      ],
      example: {
        scenario: {
          en: 'A commercial bank with a 7.20% Base Rate offers a car loan with a 2.30% spread.',
          np: '७.२०% आधार दर भएको बैंकले २.३०% प्रिमियममा सवारी कर्जा स्वीकृत गर्दा।'
        },
        calculation: {
          en: 'Borrower Interest Rate = 7.20% + 2.30% = 9.50%.',
          np: 'ऋणीले तिर्नुपर्ने ब्याजदर = ७.२०% + २.३०% = ९.५०%।'
        },
        result: {
          en: '9.50% Annual Floating Interest Rate',
          np: 'वार्षिक ९.५०% परिवर्तनशील ब्याजदर'
        }
      }
    },
    advantages: {
      en: [
        'Ensures 100% transparent loan pricing across the entire Nepali banking sector',
        'Protects borrowers from arbitrary, predatory interest rate gouging by branch managers',
        'Automatically passes interest rate cuts to borrowers during times of high liquidity',
        'Provides a standardized benchmark to objectively compare loan offers between competing banks'
      ],
      np: [
        'नेपालको सम्पूर्ण बैंकिङ क्षेत्रमा कर्जाको ब्याजदरलाई पूर्ण पारदर्शी बनाउँछ',
        'बैंकका शाखा प्रबन्धकहरूले मनोमानी ढंगले ब्याज बढाएर ठग्ने प्रवृत्तिबाट जोगाउँछ',
        'बजारमा तरलता बढेर ब्याज सस्तिँदा त्यसको फाइदा स्वतः ऋणीको किस्तामा पुग्छ',
        'विभिन्न बैंकहरूका कर्जा अफरहरू निष्पक्ष रूपमा दाँजेर हेर्न सजिलो बनाउँछ'
      ]
    },
    limitations: {
      en: [
        'Floating rates expose borrowers to increasing EMIs during tight liquidity and inflation spikes',
        'A high-cost inefficient bank passes its high administrative overhead directly to borrowers',
        'Fixed-rate loans (exempt from base rate float) often carry high initial premium markups',
        'Banks can still charge prepayment and loan administrative fees up to NRB regulatory caps'
      ],
      np: [
        'बजारमा तरलता अभाव भएर आधार दर बढ्दा ऋणको मासिक किस्ता (EMI) स्वतः बढ्ने जोखिम',
        'अनावश्यक बढी खर्च हुने कमजोर बैंकको सञ्चालन खर्च पनि ऋणीकै थाप्लोमा थपिने',
        'स्थिर ब्याजदर (Fixed Rate) भएका कर्जाहरूमा सुरुमै बैंकले महँगो ब्याज तोक्ने गर्छन्',
        'प्रिमियम स्थिर भए पनि बैंकहरूले अन्य सेवा शुल्क र प्रशासनिक शुल्क लिन सक्छन्'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'You can negotiate with the bank manager to lower your loan rate below the Base Rate.',
          np: 'बैंक म्यानेजरसँग कुरा मिलाएर आधार दर (Base Rate) भन्दा कम ब्याजमा ऋण लिन सकिन्छ।'
        },
        reality: {
          en: 'Nepal Rastra Bank strictly prohibits commercial banks from lending below their Base Rate under any circumstances (except designated government interest-subsidized schemes). Lending below Base Rate invites heavy regulatory penalties.',
          np: 'नेपाल राष्ट्र बैंकको निर्देशन अनुसार कुनै पनि बैंकले आफ्नो आधार दरभन्दा मुनि गएर कर्जा दिनै पाउँदैन (सरकारको सहुलियतपूर्ण कर्जा बाहेक)। यसो गरेमा बैंकलाई राष्ट्र बैंकले कडा कारबाही गर्छ।'
        }
      },
      {
        myth: {
          en: 'When your bank\'s Base Rate increases, your loan tenure stays identical while your EMI remains unchanged.',
          np: 'बैंकको आधार दर बढ्दा मासिक किस्ता उही रहन्छ र कुनै असर पर्दैन।'
        },
        reality: {
          en: 'When Base Rate rises, the bank must either increase your monthly EMI amount or extend your total loan maturity tenure, increasing the total lifetime interest paid.',
          np: 'आधार दर बढेपछि बैंकले कि त तपाईंको मासिक किस्ता (EMI) बढाउँछ, कि त कर्जा चुक्ता गर्ने वर्षको अवधि लम्ब्याइदिन्छ, जसले गर्दा कुल ब्याज खर्च निकै बढ्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Floating Base-Rate Linked Loan vs Fixed-Rate Loan', np: 'आधार दरमा आधारित परिवर्तनशील कर्जा र स्थिर ब्याजदर (Fixed Rate) कर्जाको तुलना' },
      subtitle: { en: 'Quarterly floating adjustments vs price certainty across the mortgage tenure in Nepal', np: 'बजार अनुसार घटबढ हुने ब्याजदर र अवधिभर एउटै ब्याजदर रहने कर्जा बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Floating Loan (Base Rate + Spread)', np: 'परिवर्तनशील कर्जा (Base Rate + Spread)' },
      colB: { en: 'Fixed-Rate Loan', np: 'स्थिर ब्याजदर कर्जा (Fixed Rate)' },
      rows: [
        {
          feature: { en: 'Interest Rate Movement', np: 'ब्याजदरको अवस्था' },
          valA: { en: 'Fluctuates quarterly whenever bank Base Rate changes', np: 'बैंकको आधार दर परिवर्तन हुँदा त्रैमासिक रूपमा घटबढ हुने' },
          valB: { en: 'Remains 100% unchanged for agreed period (e.g. 5-10 years)', np: 'तोकिएको अवधिभर (जस्तै ५ देखि १० वर्ष) एक पैसा पनि घटबढ नहुने' }
        },
        {
          feature: { en: 'Initial Interest Rate', np: 'सुरुवाती ब्याजदर' },
          valA: { en: 'Lower initial pricing (typically 1.5%-2.5% cheaper)', np: 'सुरुमा तुलनात्मक रूपमा सस्तो (१.५% देखि २.५% सम्म कम)' },
          valB: { en: 'Higher initial pricing (banks add risk buffers upfront)', np: 'सुरुमै केही महँगो (बैंकले भविष्यको जोखिम जोडेर राख्ने)' }
        },
        {
          feature: { en: 'Best Economic Climate', np: 'कुन अवस्थामा उत्तम' },
          valA: { en: 'High liquidity periods when interest rates are descending', np: 'बजारमा प्रशस्त पैसा भएको र ब्याजदर घट्दो क्रममा रहेको बेला' },
          valB: { en: 'Low-rate troughs before impending inflation/credit crunches', np: 'ब्याजदर निकै सस्तो भएको बेला लामो समयका लागि लक गर्न' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'emi', name: 'EMI', type: 'glossary' },
      { slug: 'dsti', name: 'DSTI', type: 'glossary' },
      { slug: 'fixed-deposit', name: 'Fixed Deposit', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The World of Loans: Good Debt vs Bad Debt in Nepal', categorySlug: 'loans', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Home Loan & Mortgage Guide in Nepal', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'EMI Loan Calculator', slug: 'emi', desc: 'Calculate your monthly loan payments based on bank Base Rates.' }
    ],
    faqs: [
      {
        q: { en: 'Where can I find the current Base Rates of all commercial banks in Nepal?', np: 'नेपालका सबै वाणिज्य बैंकहरूको हालको आधार दर कहाँ हेर्न सकिन्छ?' },
        a: {
          en: 'Nepal Rastra Bank publishes an updated monthly comparative table of all Class \'A\', \'B\', and \'C\' financial institutions on its official website (nrb.org.np). Each bank also publishes its Base Rate under the "Interest Rates" section of its website.',
          np: 'नेपाल राष्ट्र बैंकको आधिकारिक वेबसाइट (nrb.org.np) मा हरेक महिना सबै क, ख र ग वर्गका बैंक तथा वित्तीय संस्थाहरूको आधार दर तुलनात्मक तालिकामा प्रकाशित हुन्छ। साथै सम्बन्धित बैंकको वेबसाइटमा पनि हेर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'Can my bank increase my loan interest rate if its Base Rate has not changed?', np: 'के आधार दर नबढ्दा पनि बैंकले मेरो ऋणको ब्याजदर बढाउन पाउँछ?' },
        a: {
          en: 'No. Under NRB Unified Directives, the agreed risk premium spread is legally locked for the entire tenure of personal term loans. If the Base Rate does not move, your interest rate cannot legally increase.',
          np: 'पाउँदैन। नेपाल राष्ट्र बैंकको एकीकृत निर्देशन अनुसार व्यक्तिगत आवधिक कर्जामा सम्झौता गरिएको प्रिमियम दर कर्जा अवधिभर स्थिर रहन्छ। त्यसैले आधार दर नबढिकन बैंकले ब्याज बढाउन कानुनी रूपमा पाउँदैन।'
        }
      },
      {
        q: { en: 'Why do government banks generally have lower Base Rates than private banks in Nepal?', np: 'नेपालमा निजी बैंकभन्दा सरकारी बैंकहरूको आधार दर किन सस्तो हुन्छ?' },
        a: {
          en: 'Government banks (such as Rastriya Banijya Bank) hold massive low-cost government institutional deposits, salary accounts, and vast non-interest-bearing current deposits. This keeps their Cost of Funds exceptionally low compared to private banks.',
          np: 'सरकारी बैंकहरू (जस्तै राष्ट्रिय वाणिज्य बैंक) मा सरकारी कार्यालयहरूको खाता, पेन्सन खाता र शून्य ब्याजदरका चल्ती खाताहरूको ठूलो हिस्सा हुन्छ। यसले गर्दा उनीहरूको कोषको लागत (Cost of Funds) निजी बैंकहरूको तुलनामा निकै सस्तो पर्न जान्छ।'
        }
      },
      {
        q: { en: 'How often does my loan interest rate change based on the Base Rate?', np: 'आधार दरका आधारमा मेरो ऋणको ब्याज कहिले-कहिले परिवर्तन हुन्छ?' },
        a: {
          en: 'In accordance with NRB guidelines, banks review and adjust floating retail loan rates once every quarter (typically at the start of Shrawan, Kartik, Magh, and Baisakh) based on the trailing quarter\'s average Base Rate.',
          np: 'राष्ट्र बैंकको नियम अनुसार बैंकहरूले हरेक त्रैमासमा (प्रायः साउन, कात्तिक, माघ र वैशाख महिनामा) पछिल्लो त्रैमासको औसत आधार दर हिसाब गरेर वर्षको चार पटक कर्जाको ब्याजदर समायोजन गर्छन्।'
        }
      }
    ],
    summary: {
      en: [
        'Base Rate is the statutory minimum interest rate below which banks cannot legally issue loans in Nepal.',
        'Calculated monthly based on cost of deposits, statutory liquidity requirements, and administrative overhead.',
        'Loan Interest Rate equals the bank’s floating Base Rate plus an agreed fixed risk premium spread.',
        'NRB rules prevent banks from hiking agreed spreads and mandate quarterly downward interest adjustments.'
      ],
      np: [
        'आधार दर (Base Rate) बैंकले कर्जा प्रवाह गर्न पाउने कानुनी रूपमा तोकिएको न्यूनतम ब्याजदर सीमा हो।',
        'यो दर निक्षेपको ब्याज लागत, अनिवार्य वैधानिक तरलता र सञ्चालन खर्च जोडेर मासिक रूपमा निकालिन्छ।',
        'कर्जाको ब्याजदर = बैंकको आधार दर + सम्झौता गरिएको निश्चित प्रिमियम।',
        'राष्ट्र बैंकको निर्देशन अनुसार बैंकले सम्झौता भइसकेको प्रिमियम बढाउन पाउँदैन र आधार दर घट्दा ब्याज घटाउनै पर्छ।'
      ]
    },
    whereSeen: [
      { title: 'The World of Loans', type: 'Lesson', url: '/learn/loans/what-is-investing' },
      { title: 'EMI Calculator', type: 'Calculator', url: '/calculators/emi' }
    ],
    meta: {
      title: 'What is Base Rate in Nepal? How Bank Loan Rates Work | risePaisa',
      description: 'Understand Base Rates in Nepali banking. Learn how loan interest is calculated, NRB spread freeze regulations, and how to pick the lowest rate bank.'
    }
  },

  // 2. FIXED DEPOSIT
  {
    slug: 'fixed-deposit',
    term: 'Fixed Deposit (Muddati Khata)',
    termNp: 'मुद्दती निक्षेप (Fixed Deposit)',
    categorySlug: 'banking',
    categoryName: { en: 'Banking', np: 'बैंकिङ' },
    letter: 'F',
    abbreviation: 'FD',
    synonyms: ['Term Deposit', 'Muddati Khata', 'मुद्दती निक्षेप', 'फिक्स्ड डिपोजिट'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Fixed Deposit (FD / Muddati Khata) is a secure investment offered by licensed banks where a lump sum is deposited for a predetermined tenure at a guaranteed interest rate.',
      np: 'मुद्दती निक्षेप (Fixed Deposit / मुद्दती खाता) भनेको बैंक तथा वित्तीय संस्थामा निश्चित समयावधिका लागि एकमुष्ट रकम जम्मा गरी तोकिएको निश्चित ब्याजदरमा आम्दानी प्राप्त गर्ने अत्यन्त सुरक्षित वित्तीय बचत योजना हो।'
    },
    detailedExplanation: {
      en: 'A Fixed Deposit (popularly known as Muddati Khata in Nepal) represents a contractual agreement between a saver and a licensed financial institution. You deposit a specific sum for an agreed lock-in duration-ranging from 3 months up to 10 years. In return, the bank guarantees a fixed interest rate throughout the entire term, completely immunizing your savings from stock market crashes or subsequent interest rate drops. In Nepal, interest can be paid out periodically (quarterly or monthly directly to your savings account) or compounded until maturity. Under the Deposit and Credit Guarantee Fund (DCGF), individual retail deposits in Nepal are legally insured up to NPR 500,000 per depositor per bank.',
      np: 'नेपालमा अत्यन्त लोकप्रिय मुद्दती खाता बचतकर्ता र इजाजतप्राप्त बैंक बीचको कानुनी सम्झौता हो। यसमा निश्चित रकम ३ महिनादेखि १० वर्षसम्मको तोकिएको अवधिका लागि जम्मा गरिन्छ। यसको बदलामा बैंकले अवधिभर एउटै निश्चित ब्याजदर दिने पूर्ण ग्यारेन्टी गर्दछ, जसमा सेयर बजारको गिरावट वा पछिल्लो समय बजारमा घट्ने ब्याजदरको कुनै असर पर्दैन। नेपालमा मुद्दतीको ब्याज त्रैमासिक वा मासिक रूपमा सीधै बचत खातामा लिन सकिन्छ वा अन्तिममा साँवा र ब्याज एकमुष्ट लिन सकिन्छ। निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) मार्फत प्रत्येक बैंकमा व्यक्तिगत निक्षेपकर्ताको रु. ५ लाखसम्मको रकम पूर्ण रूपमा सरकारी सुरक्षणमा रहन्छ।'
    },
    whyItMatters: {
      en: 'Fixed Deposits serve as the ultimate safe harbor for capital preservation. While stock markets deliver volatile swings, an FD guarantees 100% principal safety alongside predictable cash yields. It is the gold standard for deploying emergency funds, managing post-retirement living expenses, or parking funds for planned short-term goals (such as home purchases or business down payments).',
      np: 'मुद्दती निक्षेप पुँजी सुरक्षित राख्ने सबैभन्दा भरपर्दो आधार हो। सेयर बजारमा जस्तो जोखिम नहुने भएकाले यसमा साँवा रकम नडुब्ने शतप्रतिशत ग्यारेन्टी हुन्छ र निश्चित आम्दानी प्राप्त हुन्छ। आपतकालीन कोष राख्न, अवकाशपछिको जीवनमा मासिक खर्च चलाउन वा केही वर्षभित्र घरजग्गा किन्ने प्रयोजनका लागि रकम सुरक्षित जम्मा गर्न यो सर्वोत्तम साधन हो।'
    },
    howItWorks: {
      summary: {
        en: 'Opening and managing a Fixed Deposit in Nepal follows 4 straightforward steps:',
        np: 'नेपालमा मुद्दती निक्षेप खोल्ने र सञ्चालन गर्ने प्रक्रिया ४ चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Term & Interest Selection', np: '१. अवधि र भुक्तानी विकल्प छनोट' },
          desc: { en: 'Choose your deposit lock-in horizon (e.g. 1 year, 3 years, 5 years) and select interest payout frequency (monthly, quarterly, or on maturity).', np: 'आफ्नो आवश्यकता अनुसार अवधि (जस्तै १ वर्ष, ३ वर्ष वा ५ वर्ष) र ब्याज भुक्तानीको तरिका (मासिक, त्रैमासिक वा अवधि समाप्त भएपछि) छानिन्छ।' }
        },
        {
          title: { en: '2. Account Funding via Mobile Banking', np: '२. अनलाइन मुद्दती खाता खोल्ने' },
          desc: { en: 'Open the FD instantly through your bank\'s mobile app or counter. The lump sum is locked and an electronic FD receipt is generated.', np: 'बैंकको मोबाइल बैंकिङ एप वा शाखामा गएर बचत खाताको रकमलाई एक क्लिकमै मुद्दतीमा रूपान्तरण गरी डिजिटल प्रमाणपत्र प्राप्त गरिन्छ।' }
        },
        {
          title: { en: '3. Periodic Interest Payout', np: '३. नियमित ब्याज प्राप्ति' },
          desc: { en: 'The bank credits earned interest to your savings account, automatically withholding 5% statutory government interest tax (TDS).', np: 'बैंकले तोकिएको मितिमा ५% ब्याजकर (TDS) कट्टा गरी बाँकी खुद ब्याज सिधै तपाईंको बचत खातामा जम्मा गरिदिन्छ।' }
        },
        {
          title: { en: '4. Maturity or 90% Loan Collateral', np: '४. भुक्तानी वा ९०% कर्जा सुविधा' },
          desc: { en: 'Upon maturity, withdraw principal plus gains or roll over into a new FD. If urgent cash is needed, borrow up to 90% against your FD receipt.', np: 'अवधि पूरा भएपछि साँवा फिर्ता लिन वा नवीकरण गर्न सकिन्छ। बीचमै आपत परेमा मुद्दती नतोडीकन ९०% सम्म सस्तो ब्याजमा कर्जा लिन सकिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Commercial and development bank treasury deposit products in Nepal',
        'Parking liquid emergency funds (3-6 months of family living expenses)',
        'Securing low-interest bank loans using the FD as 90% collateral',
        'Retirement fixed income for elderly parents relying on monthly interest'
      ],
      np: [
        'नेपालका वाणिज्य तथा विकास बैंकहरूमा मुद्दती निक्षेप खाता खोल्दा',
        'पारिवारिक आपतकालीन कोष (३ देखि ६ महिनाको खर्च) सुरक्षित राख्न',
        'आकस्मिक रकम चाहँदा मुद्दती रसिद धितो राखेर ९०% सम्म सस्तो कर्जा लिन',
        'ज्येष्ठ नागरिकहरूले पेन्सन वा अवकाशको रकमबाट मासिक ब्याज आम्दानी लिन'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Deposit Insurance up to NPR 500,000 and the Individual 5% Interest TDS Rule',
        np: '५ लाखसम्मको निक्षेप सुरक्षण र ५% ब्याजकर (TDS) को कानुनी व्यवस्था'
      },
      body: {
        en: 'Safety of bank deposits in Nepal is reinforced by the Deposit and Credit Guarantee Fund (DCGF). By government decree, individual retail deposits across all commercial, development, and finance companies licensed by NRB are legally insured up to NPR 500,000 per depositor per institution. Even if a financial institution were to collapse, your funds up to NPR 500,000 are guaranteed by the government. On the taxation front, individual interest earned on bank deposits in Nepal is subject to a flat 5% final withholding tax (TDS), making it simple, transparent, and completely exempt from additional progressive income tax filing.',
        np: 'नेपालमा बैंक निक्षेपको सुरक्षा निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) मार्फत प्रत्याभूत गरिएको छ। सरकारी व्यवस्था अनुसार राष्ट्र बैंकबाट अनुमतिप्राप्त सबै "क", "ख" र "ग" वर्गका बैंक तथा वित्तीय संस्थाहरूमा प्रत्येक व्यक्तिको रु. ५ लाखसम्मको निक्षेप पूर्ण सुरक्षित (इन्स्योरेन्स) हुन्छ। यदि कुनै बैंक समस्यामा परेर डुब्यो भने पनि रु. ५ लाखसम्मको रकम सरकारले भुक्तानी दिने ग्यारेन्टी गर्दछ। साथै नेपालमा बैंक ब्याजबाट हुने आम्दानीमा ५% अन्तिम स्रोतमा कर (TDS) कट्टा हुन्छ, जसलाई व्यक्तिगत आयकरको स्ल्याबमा जोडेर थप कर तिर्नु पर्दैन।'
      },
      keyPoints: {
        en: [
          'Deposits up to NPR 500,000 are insured under the Deposit and Credit Guarantee Fund (DCGF).',
          'Interest income is subject to a flat 5% final withholding tax (TDS) for individuals.',
          'Borrow up to 90% against your FD without breaking the deposit (typically Base Rate + 1%-2%).',
          'NRB caps the spread difference between savings and fixed deposit rates to ensure fair pricing.'
        ],
        np: [
          'निक्षेप तथा कर्जा सुरक्षण कोषमार्फत रु. ५ लाखसम्मको निक्षेप पूर्ण रूपमा सरकारी सुरक्षणमा रहन्छ।',
          'प्राप्त हुने ब्याजमा व्यक्तिहरूका लागि ५% अन्तिम स्रोतमा कर (TDS) कट्टी हुन्छ।',
          'मुद्दती नतोडीकनै त्यसको ९०% सम्म रकम बैंकबाट सस्तो ब्याजमा तुरुन्त कर्जा लिन सकिन्छ।',
          'राष्ट्र बैंकले बचत र मुद्दती निक्षेपको ब्याजदर बीचको अन्तर सीमा तोकेर निक्षेपकर्ताको हित संरक्षण गर्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Gopal deposits NPR 1,000,000 into a 1-year Fixed Deposit at an \'A\' class commercial bank offering an 8.50% annual interest rate with quarterly payouts. Every quarter (3 months), Gopal earns: (1,000,000 * 8.50%) / 4 = NPR 21,250 gross interest. After deducting 5% TDS (NPR 1,062.50), the bank deposits NPR 20,187.50 directly into his savings account every three months. Over the year, Gopal collects NPR 80,750 net cash income without lifting a finger, and his original NPR 1,000,000 principal remains 100% intact.',
        np: 'गोपालले एउटा वाणिज्य बैंकको १ वर्षे मुद्दती खातामा वार्षिक ८.५०% ब्याज पाउने गरी रु. १०,००,००० जम्मा गर्छन्, जसको ब्याज त्रैमासिक रूपमा भुक्तानी हुन्छ। हरेक ३ महिनामा उनको कुल ब्याज: (१०,००,००० * ८.५०%) / ४ = रु. २१,२५० हुन्छ। यसमा ५% ब्याजकर (रु. १,०६२.५०) कट्टी भई बैंकले हरेक त्रैमासमा रु. २०,१८७.५० सिधै उनको बचत खातामा पठाइदिन्छ। वर्षभरिमा गोपालले कुनै जोखिम बिना खुद रु. ८०,७५० नगद आम्दानी पाउँछन् र उनको सुरुको १० लाख रुपैयाँ पनि जस्ताको तस्तै सुरक्षित रहन्छ।'
      },
      takeaway: {
        en: 'Fixed Deposits offer absolute capital preservation and dependable liquidity; they form the bedrock of any defensive financial strategy in Nepal.',
        np: 'मुद्दती निक्षेपले पुँजीको पूर्ण सुरक्षा र निश्चित आम्दानी दिन्छ; यो नेपालमा कुनै पनि जोखिमरहित वित्तीय योजनाको सबैभन्दा बलियो जग हो।'
      }
    },
    formula: {
      equation: 'Net Interest = Principal * (Annual Rate % / 100) * (Tenure in Years) * (1 - 0.05)',
      explanation: {
        en: 'Multiply principal by annual interest rate and time period in years, then deduct 5% statutory TDS to determine net cash interest credited.',
        np: 'साँवा रकमलाई वार्षिक ब्याजदर र वर्ष संख्याले गुणन गर्ने, र त्यसमा ५% सरकारी ब्याजकर कट्टा गरी खुद ब्याज निकाल्ने।'
      },
      variables: [
        { symbol: 'Principal', label: { en: 'Lump-sum cash deposited into the fixed account', np: 'मुद्दती खातामा जम्मा गरिएको कुल साँवा रकम' } },
        { symbol: 'Annual Rate', label: { en: 'Contracted annual interest percentage', np: 'सम्झौता गरिएको वार्षिक ब्याजदर प्रतिशत' } },
        { symbol: 'Tenure', label: { en: 'Deposit duration in years', np: 'मुद्दती निक्षेपको अवधि (वर्षमा)' } },
        { symbol: '0.05', label: { en: '5% final withholding tax (TDS) under Section 88', np: 'दफा ८८ बमोजिम ५% अग्रिम ब्याजकर' } }
      ],
      example: {
        scenario: {
          en: 'NPR 500,000 placed in an FD at 8.0% annual interest for 2 years in Nepal.',
          np: 'रु. ५,००,००० रकम ८.०% ब्याजदरमा २ वर्षका लागि मुद्दतीमा राख्दा।'
        },
        calculation: {
          en: 'Gross = 500,000 * 0.08 * 2 = NPR 80,000. Net = 80,000 * (1 - 0.05) = NPR 76,000.',
          np: 'कुल ब्याज = ५,००,००० * ०.०८ * २ = रु. ८०,०००। खुद ब्याज = ८०,००० * (१ - ०.०५) = रु. ७६,०००।'
        },
        result: {
          en: 'NPR 76,000 Net Interest Credited (Total = NPR 576,000)',
          np: 'रु. ७६,००० खुद ब्याज प्राप्त (कुल फिर्ता = रु. ५,७६,०००)'
        }
      }
    },
    advantages: {
      en: [
        'Guaranteed interest rate locked for the entire tenure regardless of market crashes',
        '100% safety of principal, backed by DCGF insurance up to NPR 500,000',
        'Instant liquidity through 90% loan facility against the FD receipt without penalty',
        'Zero investment analysis required: open in 30 seconds via mobile banking apps'
      ],
      np: [
        'बजार जतिसुकै घटे पनि अवधिभर तोकिएको ब्याजदर निश्चित रूपमा पाइने ग्यारेन्टी',
        'निक्षेप तथा कर्जा सुरक्षण कोषमार्फत रु. ५ लाखसम्म साँवा रकम पूर्ण सुरक्षित',
        'मुद्दती नतोडीकनै ९०% सम्म सस्तो कर्जा तुरुन्तै लिन सकिने उच्च तरलता',
        'कुनै जटिल अध्ययन नचाहिने: मोबाइल बैंकिङबाट ३० सेकेन्डमै घरमै बसी खोल्न सकिने'
      ]
    },
    limitations: {
      en: [
        'Returns may lag behind real inflation (6%-8%), resulting in flat or negative real wealth growth',
        'Breaking the deposit prematurely incurs interest penalty deductions and loss of gains',
        'Lacks the high compounding capital appreciation potential of equities and mutual funds',
        'Interest earnings are subject to a mandatory 5% tax deduction at source'
      ],
      np: [
        'नेपालको ६%-८% को मूल्यवृद्धिलाई जित्न नसक्दा दीर्घकालमा वास्तविक क्रयशक्ति नबढ्ने जोखिम',
        'तोकिएको अवधि नसकिँदै बीचमै मुद्दती तोडेमा बैंकले ब्याज दर घटाएर जरिवाना काट्ने',
        'सेयर वा म्युचुअल फण्डमा जस्तो पुँजी धेरै गुणा बढाउने (Capital Appreciation) सम्भावना नहुने',
        'प्राप्त हुने ब्याजमा अनिवार्य रूपमा ५% सरकारी लाभकर कट्टा हुने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'If you need emergency money, you have to break your FD and lose all your interest.',
          np: 'आपतकालीन पैसा चाहियो भने मुद्दती तोड्नै पर्छ र सबै ब्याज गुम्छ।'
        },
        reality: {
          en: 'You never need to break your FD. You can borrow up to 90% of your deposit value instantly through mobile banking at just 1% to 2% above your FD rate, keeping your original deposit intact.',
          np: 'मुद्दती तोड्नै पर्दैन। बैंकको मोबाइल एपबाटै १ मिनेटमा मुद्दतीको ९०% सम्म रकम कर्जा (Loan against FD) का रूपमा लिन सकिन्छ, जसले गर्दा मुद्दतीको ब्याज आइरहन्छ र जरिवाना पनि लाग्दैन।'
        }
      },
      {
        myth: {
          en: 'Fixed deposit interest is completely tax-free for small savers in Nepal.',
          np: 'नेपालमा साना बचतकर्ताका लागि मुद्दतीको ब्याजमा कुनै कर लाग्दैन।'
        },
        reality: {
          en: 'Under Section 88 of the Nepal Income Tax Act, banks are legally mandated to deduct a 5% final withholding tax (TDS) on all interest paid to individual depositors regardless of amount.',
          np: 'आयकर ऐनको दफा ८८ अनुसार रकम जतिसुकै सानो भए पनि बैंकले व्यक्तिलाई भुक्तानी दिने ब्याजमा अनिवार्य रूपमा ५% अन्तिम कर (TDS) कट्टा गरेर मात्र बाँकी रकम दिन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Fixed Deposit (FD) vs Recurring Deposit (RD)', np: 'मुद्दती निक्षेप (FD) र आवर्ती निक्षेप (RD) बीचको तुलना' },
      subtitle: { en: 'Single upfront lump-sum deposit vs disciplined monthly installments in Nepali banking', np: 'एकमुष्ट रकम जम्मा गर्ने र मासिक किस्ताबन्दीमा जम्मा गर्ने मुद्दती बीचको फरक' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Fixed Deposit (Muddati)', np: 'मुद्दती निक्षेप (FD)' },
      colB: { en: 'Recurring Deposit (RD)', np: 'आवर्ती निक्षेप (RD / मासिक मुद्दती)' },
      rows: [
        {
          feature: { en: 'Deposit Style', np: 'जम्मा गर्ने तरिका' },
          valA: { en: 'One-time lump-sum deposit at account opening', np: 'सुरुमै एकमुष्ट ठूलो रकम जम्मा गरिने' },
          valB: { en: 'Fixed monthly installment deducted from savings account', np: 'हरेक महिना निश्चित रकम बचत खाताबाट स्वतः जम्मा हुने' }
        },
        {
          feature: { en: 'Ideal For', np: 'कसका लागि उपयुक्त' },
          valA: { en: 'Individuals with idle capital from property/bonus windfalls', np: 'हातमा एकमुष्ट ठूलो नगद बचत वा जग्गा बेचेको पैसा भएकाहरू' },
          valB: { en: 'Salaried professionals saving a portion of monthly pay', np: 'मासिक तलबबाट नियमित बचत गरी मुद्दतीको ब्याज कमाउन खोज्नेहरू' }
        },
        {
          feature: { en: 'Interest Compounding', np: 'ब्याजको हिसाब' },
          valA: { en: 'Earns interest on the entire lump sum from Day 1', np: 'पहिलो दिनदेखि नै पूरै एकमुष्ट रकममा उच्च ब्याज सुरु हुने' },
          valB: { en: 'Earns interest incrementally as monthly deposits accumulate', np: 'महिनेपिच्छे थपिएको किस्ता अनुसार क्रमशः ब्याज गणना हुने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'base-rate', name: 'Base Rate', type: 'glossary' },
      { slug: 'inflation', name: 'Inflation', type: 'glossary' },
      { slug: 'emergency-fund', name: 'Emergency Fund', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The World of Banking: Accounts, Rates & Safety', categorySlug: 'banking', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Complete Guide to Personal Finance & Budgeting', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Fixed Deposit (FD) Return Calculator', slug: 'fixed-deposit', desc: 'Calculate exact net interest earnings on bank fixed deposits in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'What happens if a commercial bank goes bankrupt in Nepal?', np: 'नेपालमा कुनै वाणिज्य बैंक डुब्यो वा टाट पल्टियो भने मेरो निक्षेप के हुन्छ?' },
        a: {
          en: 'Individual deposits are insured up to NPR 500,000 per bank by the Deposit and Credit Guarantee Fund (DCGF). Furthermore, Nepal Rastra Bank maintains rigorous Prompt Corrective Action (PCA) frameworks and has historically merged troubled banks into healthier institutions, ensuring zero depositor losses.',
          np: 'निक्षेप तथा कर्जा सुरक्षण कोषमार्फत प्रत्येक व्यक्तिको रु. ५ लाखसम्मको निक्षेप कानुनी रूपमै पूर्ण सुरक्षित हुन्छ। साथै नेपाल राष्ट्र बैंकको कडा सुपरिवेक्षणका कारण समस्याग्रस्त बैंकहरूलाई अन्य सबल बैंकमा गाभ्ने (Merger) गरिएकाले हालसम्म सर्वसाधारण निक्षेपकर्ताको पैसा डुबेको इतिहास छैन।'
        }
      },
      {
        q: { en: 'Can I open a Fixed Deposit online without visiting the bank branch?', np: 'के बैंकको शाखामा नगईकनै अनलाइनबाट मुद्दती खाता खोल्न सकिन्छ?' },
        a: {
          en: 'Yes. If you have an active savings account with verified KYC, you can open a Fixed Deposit instantly in under 30 seconds using your bank\'s mobile banking app or internet banking portal.',
          np: 'सकिन्छ। यदि तपाईंको बैंक खाता सक्रिय छ र केवाइसी प्रमाणित छ भने बैंकको मोबाइल बैंकिङ एप खोलेर "Fixed Deposit" मा गई ३० सेकेन्डमै अनलाइन मुद्दती खोल्न सकिन्छ।'
        }
      },
      {
        q: { en: 'How do I take a loan against my Fixed Deposit in Nepal?', np: 'नेपालमा मुद्दती रसिद धितो राखेर कर्जा (Loan against FD) कसरी लिने?' },
        a: {
          en: 'You can apply instantly through your bank’s mobile app or visit the branch with your deposit receipt. Banks provide up to 90% of the deposit amount instantly at an interest rate typically set at 1.0% to 2.0% above your FD coupon rate.',
          np: 'मोबाइल बैंकिङ एपबाटै वा बैंक शाखामा गएर मुद्दती रसिद धितोमा तुरुन्त कर्जा लिन सकिन्छ। बैंकले मुद्दती रकमको ९०% सम्म रकम मुद्दतीमा पाइरहेको ब्याजभन्दा १% देखि २% मात्र बढी लिएर तुरुन्तै ऋण दिन्छन्।'
        }
      },
      {
        q: { en: 'What is the penalty if I break my Fixed Deposit prematurely?', np: 'म्याद नसकिँदै बीचमै मुद्दती तोड्दा कति जरिवाना लाग्छ?' },
        a: {
          en: 'If you break an FD before maturity, the bank typically recalculates your interest based on the lower prevailing ordinary savings account rate (or applies a 1%-2% penalty deduction from the contracted FD rate) for the duration held.',
          np: 'म्याद अगावै मुद्दती तोडेमा बैंकले सुरुमा सम्झौता गरिएको उच्च ब्याजदर दिँदैन; बरु साधारण बचत खाताको न्यून ब्याजदर अनुसार हिसाब गर्छ वा तोकिएको ब्याजमा १% देखि २% सम्म जरिवाना कट्टा गर्छ।'
        }
      }
    ],
    summary: {
      en: [
        'A Fixed Deposit (Muddati Khata) locks a lump sum for a fixed period at a guaranteed interest rate.',
        'Provides 100% principal safety backed by DCGF insurance up to NPR 500,000 per depositor per bank.',
        'Borrow up to 90% against your deposit without breaking the FD or losing interest.',
        'Interest earnings are subject to a flat 5% final withholding tax (TDS) credited to your savings account.'
      ],
      np: [
        'मुद्दती निक्षेपले तोकिएको अवधिका लागि निश्चित ब्याजदरमा रकम सुरक्षित राख्ने ग्यारेन्टी गर्दछ।',
        'निक्षेप तथा कर्जा सुरक्षण कोषमार्फत प्रति व्यक्ति रु. ५ लाखसम्म साँवा रकम पूर्ण सरकारी सुरक्षणमा रहन्छ।',
        'मुद्दती नतोडीकनै आपत परेको बेला ९०% सम्म रकम सस्तो ब्याजमा तुरुन्त कर्जा लिन सकिन्छ।',
        'प्राप्त हुने ब्याजमा ५% अन्तिम कर (TDS) कट्टा भई बाँकी रकम सिधै बैंक खातामा जम्मा हुन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The World of Banking', type: 'Lesson', url: '/learn/banking/what-is-investing' },
      { title: 'Fixed Deposit Calculator', type: 'Calculator', url: '/calculators/fixed-deposit' }
    ],
    meta: {
      title: 'Fixed Deposit (Muddati Khata) in Nepal: Rates & Rules | risePaisa',
      description: 'Complete guide to Fixed Deposits (Muddati Khata) in Nepal. Understand guaranteed interest rates, DCGF insurance up to NPR 500,000, and 90% loan facilities.'
    }
  },

  // 3. KYC
  {
    slug: 'kyc',
    term: 'KYC (Know Your Customer)',
    termNp: 'ग्राहक पहिचान फारम (KYC)',
    categorySlug: 'banking',
    categoryName: { en: 'Banking', np: 'बैंकिङ' },
    letter: 'K',
    abbreviation: 'KYC',
    synonyms: ['Know Your Customer', 'Customer Due Diligence', 'ग्राहक पहिचान', 'केवाइसी फारम'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'KYC (Know Your Customer) is a mandatory regulatory identification and verification process enforced by Nepal Rastra Bank to prevent money laundering, fraud, and financial crimes.',
      np: 'ग्राहक पहिचान (KYC) भनेको सम्पत्ति शुद्धीकरण (Money Laundering), वित्तीय ठगी र गैरकानुनी कारोबार रोक्नका लागि नेपाल राष्ट्र बैंकको निर्देशन अनुसार बैंक तथा वित्तीय संस्थाहरूले ग्राहकको वास्तविक पहिचान र आम्दानीको स्रोत प्रमाणित गर्ने अनिवार्य कानुनी प्रक्रिया हो।'
    },
    detailedExplanation: {
      en: 'Under the Asset Laundering Prevention Act 2064 and Nepal Rastra Bank (NRB) directives, every financial institution, stockbroker, payment wallet (eSewa, Khalti), and insurance provider must verify the identity and address of its clients. A standard KYC submission captures your legal name, physical residence, verified citizenship or National ID (Rastriya Parichayapatra) number, family tree lineage (three generations), occupation, expected annual transaction volume, and verified tax PAN. Additionally, institutions screen for Politically Exposed Persons (PEPs) to ensure the financial system is never misused for illicit proceeds.',
      np: 'सम्पत्ति शुद्धीकरण निवारण ऐन २०६४ र नेपाल राष्ट्र बैंकको एकीकृत निर्देशन अनुसार सबै बैंक, धितोपत्र ब्रोकर, डिजिटल वालेट र बीमा कम्पनीहरूले आफ्ना ग्राहकको वास्तविक पहिचान र ठेगाना प्रमाणित गर्नै पर्छ। केवाइसी फारममा ग्राहकको आधिकारिक नाम, स्थायी र हालको ठेगाना, नागरिकता वा राष्ट्रिय परिचयपत्र नम्बर, तीन पुस्ते पारिवारिक विवरण, पेसा, अपेक्षित वार्षिक कारोबार रकम र प्यान (PAN) नम्बर रुजु गरिन्छ। साथै उच्च पदस्थ व्यक्ति (PEP) पहिचान गरी वित्तीय प्रणालीलाई कालोधन र गैरकानुनी कारोबारबाट जोगाउने काम गरिन्छ।'
    },
    whyItMatters: {
      en: 'An unverified or outdated KYC triggers instant account freezes across Nepali banks, blocking ATM withdrawals, mobile banking, and NEPSE share sales. Completing your KYC protects you from identity theft, prevents bank account hijacking, and guarantees uninterrupted access to modern digital banking services.',
      np: 'केवाइसी अद्यावधिक नभएमा बैंकले खाता तत्काल रोक्का (Freeze) गरिदिन्छ, जसले गर्दा एटिएमबाट पैसा झिक्न, मोबाइल बैंकिङ चलाउन वा नेप्सेमा सेयर बेच्न पाइँदैन। केवाइसी प्रमाणीकरणले तपाईंको नाममा अरू कसैले फर्जी खाता खोल्ने वा वित्तीय ठगी गर्ने जोखिमबाट तपाईंलाई पूर्ण सुरक्षा दिन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The standard KYC verification lifecycle operates across 4 core operational phases:',
        np: 'केवाइसी फारम भर्ने र प्रमाणित हुने प्रक्रिया ४ वटा मुख्य चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Document Collection', np: '१. कागजात संकलन' },
          desc: { en: 'Assemble official government proof of identity: Nepali Citizenship Certificate, National ID (NID), passport-size photos, and verified utility bills.', np: 'नेपाली नागरिकताको प्रमाणपत्र, राष्ट्रिय परिचयपत्र, पासपोर्ट साइजको फोटो र बिजुली वा खानेपानीको बिल संकलन गरिन्छ।' }
        },
        {
          title: { en: '2. Profile & Source of Funds', np: '२. तीन पुस्ते र आम्दानीको स्रोत' },
          desc: { en: 'Fill in father/mother/grandfather names, physical GPS map location of residence, declared occupation, and expected annual account turnover.', np: 'तीन पुस्ते विवरण, घरको नक्सा, पेसा-व्यवसाय र वर्षभरिमा खाताबाट हुन सक्ने अनुमानित कारोबार रकम खुलाइन्छ।' }
        },
        {
          title: { en: '3. AML/CFT Database Screening', np: '३. सम्पत्ति शुद्धीकरण स्क्रिनिङ' },
          desc: { en: 'The bank\'s compliance software screens the applicant against international sanction watchlists and domestic PEP databases.', np: 'बैंकको सफ्टवेयरले ग्राहकको विवरणलाई अन्तर्राष्ट्रिय कालोसूची र राष्ट्रिय उच्च पदस्थ व्यक्तिको सूचीसँग रुजु गर्दछ।' }
        },
        {
          title: { en: '4. Biometric Approval & Risk Tagging', np: '४. बायोमेट्रिक रुजु र प्रमाणीकरण' },
          desc: { en: 'The branch or digital video KYC desk cross-verifies live biometric data and marks the account verified with a designated risk profile (Low/Medium/High).', np: 'भौतिक वा भिडियो केवाइसीमार्फत अनुहार र औंठाछाप रुजु गरी खातालाई पूर्ण सक्रिय र प्रमाणित गरिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Opening bank savings, current, and fixed deposit accounts',
        'Registering Depository Participant (Demat) accounts under CDSC',
        'Broker client registration for NEPSE TMS stock trading',
        'Digital wallet verification (eSewa, Khalti, IME Pay)'
      ],
      np: [
        'बैंकमा बचत, चल्ती तथा मुद्दती खाता खोल्दा',
        'सीडीएससी मातहत डिम्याट खाता दर्ता गर्दा',
        'नेप्से टिएमएसमा सेयर कारोबार गर्न ब्रोकर खाता खोल्दा',
        'डिजिटल वालेटहरू (इसेवा, खल्ती, आइएमई पे) मा कारोबार सीमा बढाउन'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The National ID (NID) Integration and Digital Video KYC in Nepal',
        np: 'नेपालमा राष्ट्रिय परिचयपत्र (NID) आबद्धता र भिडियो केवाइसी (vKYC)'
      },
      body: {
        en: 'Historically in Nepal, opening an account at 5 different banks required filling out 5 exhaustive 4-page physical KYC forms by hand with dozens of photocopies. To modernize the financial sector, Nepal Rastra Bank authorized digital "Video KYC (vKYC)", allowing customers to complete verification from home through a live video call. Furthermore, financial institutions are integrating directly with the Department of National ID and Civil Registration (DoNIDCR). By inputting your 10-digit National Identity Number (NIN), banks can instantly verify demographic and biometric credentials electronically, eliminating manual paperwork.',
        np: 'विगतमा ५ वटा बैंकमा खाता खोल्न ५ पटक हातले लामा-लामा फारम भर्नुपर्थ्यो र नागरिकताका दर्जनौं फोटोकपी बुझाउनुपर्थ्यो। यसलाई सहज बनाउन नेपाल राष्ट्र बैंकले "भिडियो केवाइसी (vKYC)" को कानुनी बाटो खुला गरिदिएको छ, जसबाट घरमै बसी भिडियो कलमार्फत केवाइसी प्रमाणीकरण गर्न सकिन्छ। साथै राष्ट्रिय परिचयपत्र विभागसँग बैंकहरूलाई जोडेर १० अंकको राष्ट्रिय परिचय नम्बर हाल्नासाथ जैविक तथा व्यक्तिगत विवरण स्वतः प्रमाणित हुने आधुनिक प्रणाली लागू हुँदैछ।'
      },
      keyPoints: {
        en: [
          'Mandatory under the Asset Laundering Prevention Act 2064.',
          'Digital Video KYC (vKYC) enables instant verification without branch visits.',
          'Accounts with outdated KYC are frozen under NRB compliance mandates.',
          'National ID (NID) is rapidly becoming the single digital identity anchor across banks.'
        ],
        np: [
          'सम्पत्ति शुद्धीकरण निवारण ऐन २०६४ अनुसार केवाइसी भर्नु कानुनी रूपमा अनिवार्य छ।',
          'भिडियो केवाइसी (vKYC) मार्फत बैंकको शाखामा नगईकनै अनलाइनबाटै प्रमाणीकरण गर्न सकिन्छ।',
          'केवाइसी अद्यावधिक नभएका खाताहरूलाई राष्ट्र बैंकको निर्देशनमा स्वतः रोक्का गरिन्छ।',
          'राष्ट्रिय परिचयपत्र (NID) अब सबै बैंक तथा वित्तीय संस्थामा मुख्य डिजिटल आधार बन्दैछ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Sarita opens an account at a commercial bank using her mobile phone. She uploads her citizenship photos and enters her personal details. The next morning, a bank compliance officer connects via secure Video KYC: Sarita holds up her original citizenship card to the camera and confirms her date of birth and father\'s name. Within 10 minutes, her KYC is approved. Her daily transaction limit expands from NPR 5,000 to NPR 200,000, and she can seamlessly link her bank to MeroShare C-ASBA and execute transfers without ever stepping inside a physical branch.',
        np: 'सरिताले मोबाइलबाटै एउटा वाणिज्य बैंकमा अनलाइन खाता खोल्छिन् र नागरिकताको फोटो अपलोड गर्छिन्। भोलिपल्ट बिहान बैंकका कर्मचारीले सुरक्षित भिडियो कल (vKYC) गर्छन्: सरिताले क्यामेरामा आफ्नो सक्कल नागरिकता देखाउँछिन् र जन्ममिति तथा बुबाको नाम भन्छिन्। १० मिनेटभित्र उनको केवाइसी स्वीकृत हुन्छ। यसपछि उनको दैनिक कारोबार सीमा रु. ५,००० बाट बढेर रु. २,००,००० पुग्छ र उनले कुनै बैंक शाखामा नगईकनै मेरोसेयर सी-आस्बा जोड्न र कारोबार गर्न पाउँछिन्।'
      },
      takeaway: {
        en: 'Keeping your KYC continuously updated is the single most important administrative habit to ensure uninterrupted banking and stock market access in Nepal.',
        np: 'आफ्नो केवाइसी विवरण समयमै अद्यावधिक राख्नु नै नेपालमा बैंकिङ र सेयर कारोबारलाई निर्वाध सञ्चालन गरिरहने सबैभन्दा मुख्य जिम्मेवारी हो।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Protects legitimate depositors from identity theft, unauthorized loans, and fraud',
        'Unlocks full banking features: high-value mobile banking, ATM withdrawals, and TMS trading',
        'Helps Nepal comply with global Financial Action Task Force (FATF) anti-money laundering standards',
        'Streamlined verification through digital Video KYC and National ID integration'
      ],
      np: [
        'तपाईंको नाममा अरू कसैले फर्जी खाता खोल्ने वा गैरकानुनी ऋण लिने जोखिमबाट बचाउँछ',
        'उच्च सीमाको मोबाइल बैंकिङ, एटिएम कारोबार र दोस्रो बजार सेयर किनबेचको पूर्ण पहुँच दिन्छ',
        'नेपाललाई अन्तर्राष्ट्रिय सम्पत्ति शुद्धीकरण विरोधी मापदण्ड (FATF) मा कालोसूचीबाट जोगाउँछ',
        'भिडियो केवाइसी र राष्ट्रिय परिचयपत्रमार्फत छिटो र झन्झटरहित प्रमाणीकरणको सुविधा'
      ]
    },
    limitations: {
      en: [
        'Failure to update KYC leads to abrupt freezing of bank and Demat accounts',
        'Requires periodic resubmission whenever personal address, marital status, or jobs change',
        'Can be challenging for elderly or rural citizens who lack digital literacy or updated papers',
        'Excessive documentation requests for standard low-risk domestic retail accounts'
      ],
      np: [
        'समयमा अद्यावधिक नगरेमा पूर्वसूचना बिना नै बैंक खाता र डिम्याट रोक्का हुने समस्या',
        'ठेगाना, पेसा वा वैवाहिक स्थिति परिवर्तन हुनासाथ फेरि नयाँ कागजात बुझाउनुपर्ने झन्झट',
        'डिजिटल ज्ञान नभएका गाउँघरका वृद्धवृद्धा र अशक्त नागरिकका लागि झन्झटिलो हुन सक्ने',
        'सामान्य कारोबार गर्ने साना खाताहरूका लागि पनि धेरै कागजात मागिने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'You only need to fill out a KYC form once in your entire lifetime.',
          np: 'जीवनमा एकपटक केवाइसी भरेपछि सधैंका लागि पुग्छ, फेरि कहिल्यै भर्नु पर्दैन।'
        },
        reality: {
          en: 'NRB regulations require banks to periodically refresh customer KYC every 1 to 5 years (depending on customer risk category) or whenever major personal details change.',
          np: 'राष्ट्र बैंकको नियम अनुसार ग्राहकको जोखिमका आधारमा हरेक १ देखि ५ वर्षभित्र वा व्यक्तिगत विवरण फेरिएमा केवाइसी अनिवार्य रूपमा पुनः अद्यावधिक (Refresh) गर्नुपर्छ।'
        }
      },
      {
        myth: {
          en: 'If a bank freezes your account due to KYC, the government has confiscated your money.',
          np: 'केवाइसी नमिलेर बैंक खाता फ्रिज हुनु भनेको सरकारले पैसा जफत गर्नु हो।'
        },
        reality: {
          en: 'Your money is 100% safe. Freezing is merely a compliance hold that pauses outgoing withdrawals. Submitting an updated KYC form immediately reactivates the account.',
          np: 'पैसा सुरक्षित हुन्छ, कतै जाँदैन। रोक्का हुनु भनेको कारोबारमा अस्थायी रोक मात्र हो। बैंकमा गएर वा अनलाइनबाट केवाइसी अद्यावधिक गर्नासाथ खाता तुरुन्त सुचारु हुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Traditional In-Branch KYC vs Modern Video KYC (vKYC)', np: 'परम्परागत कागजी केवाइसी र आधुनिक भिडियो केवाइसी (vKYC) को तुलना' },
      subtitle: { en: 'Physical paperwork at bank branches vs paperless biometric verification from home', np: 'शाखामा गएर फारम भर्ने र घरमै बसेर मोबाइलबाट भिडियो प्रमाणीकरण गर्ने बीचको फरक' },
      featureHeader: { en: 'Attribute', np: 'विशेषता' },
      colA: { en: 'Modern Video KYC (vKYC)', np: 'भिडियो केवाइसी (vKYC)' },
      colB: { en: 'Traditional Paper KYC', np: 'परम्परागत कागजी केवाइसी' },
      rows: [
        {
          feature: { en: 'Location Requirement', np: 'कहाँ गएर भर्ने' },
          valA: { en: '100% online from home via smartphone or PC', np: 'घरमै बसेर मोबाइल वा कम्प्युटरमार्फत' },
          valB: { en: 'Must physically visit bank branch during opening hours', np: 'बैंकको शाखा खुल्ने समयमै लाइन लाग्न पुग्नुपर्ने' }
        },
        {
          feature: { en: 'Verification Method', np: 'प्रमाणीकरणको तरिका' },
          valA: { en: 'Live video recording, facial geo-tagging, live document display', np: 'प्रत्यक्ष भिडियो कल, अनुहारको फोटो र सक्कल कागजात' },
          valB: { en: 'Physical photocopies and ink signature on paper forms', np: 'कागजी फारममा हस्ताक्षर र नागरिकताको फोटोकपी' }
        },
        {
          feature: { en: 'Processing Time', np: 'प्रमाणीकरण समय' },
          valA: { en: 'Approved within 1 to 4 hours digitally', np: '१ देखि ४ घण्टाभित्र डिजिटल स्वीकृति' },
          valB: { en: 'Takes 2 to 5 business days for branch data entry', np: 'शाखाले डाटा इन्ट्री गर्न २ देखि ५ दिन लगाउने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'pan', name: 'PAN', type: 'glossary' },
      { slug: 'demat', name: 'Demat', type: 'glossary' },
      { slug: 'asba', name: 'ASBA', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The World of Banking: Accounts, Rates & Safety', categorySlug: 'banking', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Net Worth Calculator', slug: 'net-worth', desc: 'Assess total assets verified under your financial KYC accounts.' }
    ],
    faqs: [
      {
        q: { en: 'What documents are required to complete a banking KYC in Nepal?', np: 'नेपालमा बैंक केवाइसी भर्न के-के कागजात चाहिन्छ?' },
        a: {
          en: 'You need an original copy of your Nepali Citizenship Certificate (or National ID/Passport), recent passport-size photographs, verified permanent and temporary address details, a hand-drawn location map of your residence, and your personal PAN card copy.',
          np: 'नेपाली नागरिकताको सक्कल (वा राष्ट्रिय परिचयपत्र/राहदानी), हालसालै खिचेको पासपोर्ट साइजको फोटो, स्थायी र हालको ठेगाना, घर पुग्ने बाटोको नक्सा र व्यक्तिगत प्यान (PAN) कार्डको प्रतिलिपि चाहिन्छ।'
        }
      },
      {
        q: { en: 'Why did my bank freeze my account due to KYC?', np: 'बैंकले केवाइसीको कारण देखाएर मेरो खाता किन रोक्का गर्‍यो?' },
        a: {
          en: 'Nepal Rastra Bank mandates that if a customer does not update their KYC within the prescribed regulatory period (or fails to respond to renewal notices), the bank must block debit transactions to prevent anti-money laundering non-compliance.',
          np: 'राष्ट्र बैंकको नियम अनुसार तोकिएको समयभित्र केवाइसी अद्यावधिक नगरेमा सम्पत्ति शुद्धीकरण नियमन पालना गर्न बैंकले खाताबाट पैसा झिक्न नमिल्ने गरी रोक्का गर्नैपर्ने कानुनी बाध्यता हुन्छ।'
        }
      },
      {
        q: { en: 'Can non-resident Nepalis (NRNs) complete KYC from abroad?', np: 'के विदेशमा बस्ने नेपालीहरूले उतैबाट केवाइसी भर्न मिल्छ?' },
        a: {
          en: 'Yes. Most commercial banks in Nepal offer online Video KYC (vKYC) for overseas Nepalis. You can verify your account from the Middle East, Europe, or anywhere in the world using your passport, visa, and work permit.',
          np: 'मिल्छ। नेपालका अधिकांश बैंकहरूले विदेशमा रहेका नेपालीका लागि अनलाइन भिडियो केवाइसी (vKYC) सुविधा दिएका छन्। राहदानी, भिसा र श्रम स्वीकृति देखाएर संसारको जुनसुकै ठाउँबाट पनि खाता प्रमाणित गर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'What is a PEP (Politically Exposed Person) declaration in KYC?', np: 'केवाइसीमा उच्च पदस्थ व्यक्ति (PEP) को विवरण किन सोधिन्छ?' },
        a: {
          en: 'A PEP is an individual entrusted with prominent public functions (such as ministers, MPs, high court judges, or military generals) or their close family members. International anti-corruption laws require extra due diligence to ensure state resources are not illicitly moved.',
          np: 'सरकारी उच्च ओहोदामा रहेका व्यक्तिहरू (जस्तै मन्त्री, सांसद, न्यायाधीश, उच्च सैन्य अधिकारी) वा उनीहरूका नजिकका परिवारलाई PEP भनिन्छ। राज्यको स्रोतको दुरुपयोग र भ्रष्टाचार रोक्नका लागि यस्ता खाताहरूमा विशेष निगरानी राखिन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'KYC is a mandatory customer verification process enforced by NRB under anti-money laundering laws.',
        'Captures proof of identity, address, family lineage, occupation, and tax PAN.',
        'Outdated KYC triggers automatic bank and Demat account freezes.',
        'Modern Video KYC (vKYC) allows paperless verification from home via smartphone in minutes.'
      ],
      np: [
        'केवाइसी सम्पत्ति शुद्धीकरण निवारण ऐन अनुसार राष्ट्र बैंकले अनिवार्य गरेको ग्राहक पहिचान प्रक्रिया हो।',
        'यसमा नागरिकता, ठेगाना, तीन पुस्ते विवरण, पेसा र व्यक्तिगत प्यान कार्ड प्रमाणित गरिन्छ।',
        'केवाइसी अद्यावधिक नभएमा बैंक खाता र डिम्याट स्वतः रोक्का हुन्छ।',
        'आधुनिक भिडियो केवाइसी (vKYC) मार्फत घरमै बसी केही मिनेटमै मोबाइलबाट प्रमाणीकरण गर्न सकिन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The World of Banking', type: 'Lesson', url: '/learn/banking/what-is-investing' },
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' }
    ],
    meta: {
      title: 'What is KYC in Nepal? Bank & MeroShare Guide | risePaisa',
      description: 'Complete guide to KYC (Know Your Customer) in Nepal. Learn what documents are required, how Video KYC works, and how to unfreeze your bank account.'
    }
  },

  // 4. EMI
  {
    slug: 'emi',
    term: 'EMI (Equated Monthly Installment)',
    termNp: 'समान मासिक किस्ता (EMI)',
    categorySlug: 'loans',
    categoryName: { en: 'Loans & Credit', np: 'कर्जा र ऋण' },
    letter: 'E',
    abbreviation: 'EMI',
    synonyms: ['Equated Monthly Installment', 'Monthly Loan Payment', 'मासिक किस्ता', 'ऋण किस्ता'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'An Equated Monthly Installment (EMI) is a fixed monthly payment made by a borrower to a bank on a specific date, comprising both principal repayment and interest charges to clear a loan over time.',
      np: 'समान मासिक किस्ता (EMI) भनेको ऋणीले लिएको बैंक कर्जा तोकिएको अवधिभित्र पूर्ण रूपमा चुक्ता गर्नका लागि हरेक महिना बैंकलाई बुझाउनुपर्ने निश्चित मासिक रकम हो, जसमा साँवा र ब्याज दुवै समावेश हुन्छन्।'
    },
    detailedExplanation: {
      en: 'When you take a home loan, vehicle loan, or personal term loan from a bank in Nepal, you repay the debt through structured EMIs. In the early years of a long-term loan, the bulk of each monthly EMI goes toward paying accumulated interest charges, while only a small fraction pays down the principal balance. As time passes and the principal balance decreases, the interest portion drops, and a steadily larger share of the EMI is dedicated to principal reduction. This mathematical amortization schedule ensures that the loan balance reaches exactly zero at the end of the contracted loan tenure.',
      np: 'नेपालका बैंकहरूबाट घरकर्जा, सवारी कर्जा वा व्यक्तिगत आवधिक कर्जा लिँदा ऋण भुक्तानी ईएमआई (EMI) मार्फत गरिन्छ। लामो अवधिको कर्जामा सुरुवाती वर्षहरूमा तपाईंले तिर्ने मासिक किस्ताको ठूलो हिस्सा केवल ब्याज तिर्नमै जान्छ र साँवा निकै थोरै मात्र घट्छ। तर समय बित्दै जाँदा र साँवा घट्दै जाँदा ब्याजको भार कम हुँदै जान्छ र किस्ताको अधिकांश रकम साँवा घटाउन प्रयोग हुन्छ। यसरी तोकिएको कर्जा अवधि (जस्तै १५ वा २० वर्ष) सकिँदा ऋणको कुल बाँकी रकम ठ्याक्कै शून्य पुग्छ।'
    },
    whyItMatters: {
      en: 'Understanding how EMI amortization works prevents severe financial distress. Knowing that prepaying small extra sums toward your principal in the first 5 years drastically cuts decades of future interest allows Nepali families to clear 20-year home mortgages in 10 to 12 years, saving millions of rupees in interest.',
      np: 'ईएमआई कसरी हिसाब हुन्छ भन्ने बुझ्नु व्यक्तिगत वित्तीय व्यवस्थापनका लागि निकै महत्त्वपूर्ण छ। सुरुवाती ५ वर्षभित्र थोरै-थोरै अतिरिक्त रकम साँवामा अग्रिम भुक्तानी (Prepayment) गर्दा पछाडिका वर्षहरूको लाखौं रुपैयाँ ब्याज बचत हुन्छ र २० वर्षे घरकर्जालाई १०-१२ वर्षमै सजिलै चुक्ता गर्न सकिन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The amortization mechanics of an Equated Monthly Installment follow 4 ongoing phases:',
        np: 'ईएमआई भुक्तानी र ऋण चुक्ता हुने प्रक्रिया ४ वटा चरणमा चल्दछ:'
      },
      steps: [
        {
          title: { en: '1. Mathematical Calculation', np: '१. गणितीय किस्ता निर्धारण' },
          desc: { en: 'Using the standard compounding amortization formula, the bank computes a fixed monthly payment based on principal, interest rate, and tenure.', np: 'साँवा रकम, ब्याजदर र महिना संख्याका आधारमा बैंकले गणितीय सूत्र प्रयोग गरी निश्चित मासिक किस्ता तय गर्छ।' }
        },
        {
          title: { en: '2. Interest-Heavy Initial Stage', np: '२. सुरुमा अधिक ब्याज कट्टी' },
          desc: { en: 'In the first 3 to 7 years, up to 70% of your EMI is allocated to monthly interest, while only 30% reduces your actual debt principal.', np: 'सुरुवाती वर्षहरूमा किस्ताको ७०% भन्दा बढी रकम ब्याज तिर्नमा खर्च हुन्छ र जम्मा ३०% ले मात्र वास्तविक ऋणको साँवा घट्छ।' }
        },
        {
          title: { en: '3. Amortization Crossover', np: '३. साँवा कट्टीको हिस्सा वृद्धि' },
          desc: { en: 'Past the midpoint of the loan, the interest burden shrinks, and the principal repayment share becomes the dominant fraction of each payment.', np: 'कर्जाको आधा अवधि कटेपछि बाँकी साँवा कम हुने भएकाले किस्ताको अधिकांश हिस्सा साँवा चुक्ता गर्नमै प्रयोग हुन्छ।' }
        },
        {
          title: { en: '4. Complete Loan Clearance', np: '४. पूर्ण ऋण चुक्ता' },
          desc: { en: 'Following the final scheduled EMI payment, the loan balance reaches NPR 0, and the bank releases all mortgaged land or vehicle titles.', np: 'अन्तिम किस्ता बुझाइसकेपछि ऋणको मौज्दात शून्य हुन्छ र बैंकले धितो राखेको जग्गाको लालपुर्जा वा गाडीको ब्लुबुक फुकुवा गरिदिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Home mortgages and apartment construction loans in Nepal',
        'Automobile and electric vehicle (EV) financing',
        'Personal term loans and professional education credit',
        'Calculating Debt-Service-to-Income (DSTI) limits under NRB rules'
      ],
      np: [
        'घरजग्गा तथा अपार्टमेन्ट खरिद र निर्माण कर्जामा',
        'व्यक्तिगत सवारी साधन तथा विद्युतीय गाडी (EV) कर्जामा',
        'व्यक्तिगत आवधिक कर्जा र उच्च शिक्षा कर्जामा',
        'नेपाल राष्ट्र बैंकको नियम अनुसार ५०% DSTI कर्जा सीमा गणना गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Floating Base Rate EMI Fluctuations and NRB Prepayment Guidelines',
        np: 'नेपालमा आधार दर अनुसार ईएमआई घटबढ र अग्रिम भुक्तानी (Prepayment) नियम'
      },
      body: {
        en: 'In Nepal, almost all retail loans are issued on floating interest rates tied to the bank\'s monthly Base Rate. When the Base Rate rises, the bank either increases your monthly EMI or extends your total loan tenure. Furthermore, Nepal Rastra Bank implemented a consumer-friendly directive regarding loan prepayments: for individual retail loans, banks cannot charge excessive prepayment penalty fees if the borrower makes extra principal repayments from personal savings. This enables Nepali borrowers to pay extra lumpsums (e.g. from annual festival bonuses) directly toward their principal balance, drastically slashing interest obligations.',
        np: 'नेपालमा प्रायः सबै व्यक्तिगत कर्जाहरू बैंकको आधार दर (Base Rate) सँग जोडिएका परिवर्तनशील ब्याजदरमा प्रवाह हुन्छन्। बजारमा ब्याजदर बढ्दा बैंकले कि त मासिक किस्ता बढाउँछ, कि त ऋणको अवधि लम्ब्याइदिन्छ। यसका साथै नेपाल राष्ट्र बैंकले व्यक्तिगत साना ऋणीहरूको हितमा एउटा राम्रो नियम ल्याएको छ: व्यक्तिले आफ्नो बचतबाट ऋणको साँवा अग्रिम भुक्तानी (Prepayment) गर्दा बैंकले चर्को जरिवाना शुल्क लिन पाउँदैन। यसले गर्दा नेपाली परिवारहरूले दशैं-तिहारको बोनस वा अतिरिक्त आम्दानी सिधै साँवा घटाउन प्रयोग गर्न सक्छन्।'
      },
      keyPoints: {
        en: [
          'Monthly EMI consists of both principal repayment and accrued interest.',
          'Early payments in long-term loans go overwhelmingly toward interest charges.',
          'Floating Base Rate changes cause quarterly adjustments to either EMI or tenure.',
          'Prepaying principal directly shortens loan tenure and saves massive interest.'
        ],
        np: [
          'मासिक किस्ता (EMI) भित्र साँवा फिर्ता र ब्याज दुवै जोडिएका हुन्छन्।',
          'लामो अवधिको ऋणमा सुरुवाती वर्षहरूमा किस्ताको अधिकांश हिस्सा ब्याजमै खर्च हुन्छ।',
          'आधार दर परिवर्तन हुँदा त्रैमासिक रूपमा किस्ताको रकम वा अवधि हेरफेर हुन्छ।',
          'साँवा रकम अग्रिम भुक्तानी गर्दा ऋणको अवधि छोटो भई लाखौं रुपैयाँ ब्याज जोगिन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Manish takes an NPR 6,000,000 home loan for 20 years at a 9.0% interest rate. His calculated monthly EMI is NPR 53,984. In Month 1, out of his NPR 53,984 payment, a staggering NPR 45,000 goes purely toward paying monthly interest, and only NPR 8,984 reduces his actual principal! Over the 20-year term, Manish will pay a total of NPR 12,956,160-meaning he pays NPR 6,956,160 in interest alone (more than the loan itself!). However, if Manish prepays an extra NPR 500,000 directly toward his principal at the end of Year 2, he cuts nearly 4 years off his mortgage and saves over NPR 1,250,000 in future interest.',
        np: 'मनिषले २० वर्षका लागि ९.०% ब्याजदरमा रु. ६० लाखको घरकर्जा लिन्छन्। उनको मासिक किस्ता (EMI) रु. ५३,९८४ कायम हुन्छ। पहिलो महिना उनले बुझाएको ५३,९८४ मध्ये रु. ४५,००० सिधै ब्याज तिर्नमै सकिन्छ र जम्मा रु. ८,९८४ ले मात्र साँवा घट्छ! २० वर्षभरिमा मनिषले कुल रु. १ करोड २९ लाख ५६ हजार बुझाउँछन्-अर्थात् ६० लाखको ऋणमा झण्डै ७० लाख रुपैयाँ त केवल ब्याज मात्रै तिर्छन्! तर यदि मनिषले दोस्रो वर्षको अन्त्यमा रु. ५ लाख अतिरिक्त बचत सिधै साँवामा बुझाइदिए भने उनको ऋण ४ वर्ष अगावै चुक्ता हुन्छ र झण्डै रु. १२ लाख ५० हजार ब्याज बचत हुन्छ।'
      },
      takeaway: {
        en: 'In the early years of an EMI schedule, your greatest enemy is compound interest working against you; making early principal prepayments is the ultimate wealth hack.',
        np: 'ऋणको सुरुवाती वर्षहरूमा ब्याजले तपाईंको आम्दानी खाइरहेको हुन्छ; त्यसैले सुरुमै थोरै भए पनि साँवा अग्रिम तिर्नु नै ऋणबाट छिटो मुक्ति पाउने सबैभन्दा अचुक उपाय हो।'
      }
    },
    formula: {
      equation: 'EMI = [P * r * (1 + r)^n] / [((1 + r)^n) - 1]',
      explanation: {
        en: 'Multiply principal (P) by monthly interest rate (r) and the compounding factor (1+r)^n, then divide by the compounding factor minus 1. (r = Annual Rate / 1200; n = total tenure in months).',
        np: 'साँवा रकम (P) लाई मासिक ब्याजदर (r) र चक्रवर्ती फ्याक्टरले गुणन गर्ने, र त्यसलाई चक्रवर्ती फ्याक्टर - १ ले भाग गर्ने। (r = वार्षिक दर / १२००; n = कुल महिना संख्या)।'
      },
      variables: [
        { symbol: 'P', label: { en: 'Principal loan amount borrowed', np: 'लिएको कुल कर्जाको साँवा रकम' } },
        { symbol: 'r', label: { en: 'Monthly interest rate (Annual % / 12 / 100)', np: 'मासिक ब्याजदर प्रतिशत' } },
        { symbol: 'n', label: { en: 'Loan repayment tenure in total months', np: 'कर्जा चुक्ता गर्ने कुल महिना संख्या' } }
      ],
      example: {
        scenario: {
          en: 'Borrowing NPR 1,200,000 for an auto loan over 5 years (60 months) at 10% interest in Nepal.',
          np: '१०% ब्याजदरमा ५ वर्ष (६० महिना) का लागि रु. १२,००,००० सवारी कर्जा लिँदा।'
        },
        calculation: {
          en: 'P = 1,200,000, r = 0.00833 (10/1200), n = 60. EMI = [1,200,000 * 0.00833 * (1.00833)^60] / [((1.00833)^60) - 1] = NPR 25,496.',
          np: 'P = १२,००,०००, r = ०.००८३३, n = ६०। EMI = [१२,००,००० * ०.००८३३ * (१.००८३३)^६०] / [((१.००८३३)^६०) - १] = रु. २५,४९६।'
        },
        result: {
          en: 'NPR 25,496 Monthly EMI Payment',
          np: 'रु. २५,४९६ समान मासिक किस्ता (EMI)'
        }
      }
    },
    advantages: {
      en: [
        'Structured, predictable monthly payments enable disciplined household budgeting',
        'Gradually builds equity in real estate assets without requiring 100% upfront cash',
        'Automatic bank auto-debit ensures on-time repayment and maintains a high CIB credit score',
        'Prepayment options allow financially disciplined borrowers to eliminate debt decades early'
      ],
      np: [
        'निश्चित मासिक किस्ता हुने भएकाले घरायसी बजेट र खर्च व्यवस्थापन गर्न सजिलो हुन्छ',
        'सुरुमै एकमुष्ट करोडौं रुपैयाँ नभए पनि घरजग्गाको स्वामित्व जोड्न मद्दत गर्छ',
        'बैंक खाताबाट स्वतः किस्ता काटिने भएकाले कर्जा सूचना केन्द्र (CIB) मा राम्रो क्रेडिट स्कोर बन्छ',
        'अतिरिक्त बचत हुँदा साँवा अग्रिम भुक्तानी गरेर वर्षौं अगाडि नै ऋणमुक्त हुन सकिने सुविधा'
      ]
    },
    limitations: {
      en: [
        'Total interest paid over a 20-year loan often exceeds the original principal borrowed',
        'Rising bank Base Rates automatically increase your monthly payment burden',
        'Defaulting on consecutive EMIs damages credit scores and risks auction of collateral',
        'Front-loaded interest amortization means early exits yield minimal principal reduction'
      ],
      np: [
        '२० वर्षे कर्जामा कुल तिरिने ब्याज रकम सुरुमा लिएको साँवा भन्दा पनि धेरै हुन जान्छ',
        'बजारमा आधार दर बढ्दा मासिक किस्ताको भार थपिएर पारिवारिक बजेट बिथोलिन सक्ने',
        'लगातार किस्ता तिर्न नसकेमा कर्जा सूचना केन्द्रको कालोसूचीमा परिने र धितो लिलाम हुने जोखिम',
        'सुरुवाती वर्षहरूमा धेरैजसो रकम ब्याजमै सकिने हुनाले साँवा निकै सुस्त गतिमा मात्र घट्ने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Your monthly EMI is split 50/50 between principal and interest from day one.',
          np: 'पहिलो महिनादेखि नै ईएमआईको आधा रकम साँवा र आधा रकम ब्याजमा जान्छ।'
        },
        reality: {
          en: 'In the first few years of a long-term loan, up to 80% of your EMI goes toward interest. Only in the later years does the principal repayment share become dominant.',
          np: 'ऋणको सुरुवाती वर्षहरूमा किस्ताको ८०% सम्म रकम ब्याज तिर्नमै जान्छ। कर्जाको धेरै वर्ष बितिसकेपछि मात्र साँवा तिर्ने हिस्सा ठूलो हुन थाल्छ।'
        }
      },
      {
        myth: {
          en: 'Prepaying an extra installment on your loan just reduces your next month\'s payment.',
          np: 'कर्जामा थप रकम अग्रिम तिर्दा त्यसले अर्को महिनाको किस्ता मात्र घटाउँछ।'
        },
        reality: {
          en: 'When properly designated as a "Principal Prepayment", every single rupee directly reduces the outstanding core principal balance, eliminating years of future compound interest.',
          np: 'यदि बैंकलाई स्पष्ट भनेर "साँवा भुक्तानी" (Principal Prepayment) गरियो भने त्यसले ऋणको मूल साँवा घटाउँछ, जसले गर्दा बाँकी सम्पूर्ण वर्षहरूको ब्याज स्वतः घट्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'EMI (Equated Monthly Installment) vs Flat Interest Rate', np: 'ईएमआई (घट्दो ब्याज) र फ्ल्याट ब्याजदर बीचको भिन्नता' },
      subtitle: { en: 'Reducing balance amortization vs deceptive flat interest rates used by unorganized lenders', np: 'घट्दो साँवामा लाग्ने वास्तविक ब्याज र देख्दा सस्तो तर भित्र महँगो हुने फ्ल्याट ब्याज' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'EMI (Diminishing / Reducing Balance)', np: 'ईएमआई (घट्दो साँवा प्रणाली)' },
      colB: { en: 'Flat Interest Rate (Often in Hire Purchase)', np: 'फ्ल्याट ब्याजदर (Flat Rate)' },
      rows: [
        {
          feature: { en: 'Interest Calculation Base', np: 'ब्याज हिसाब हुने आधार' },
          valA: { en: 'Calculated strictly on the remaining unpaid principal', np: 'बाँकी रहेको खुद साँवामा मात्र ब्याज हिसाब हुने' },
          valB: { en: 'Calculated on the full original principal throughout entire tenure', np: 'ऋण तिरिसक्दा पनि सुरुको पूरै रकममा ब्याज हिसाब भइरहने' }
        },
        {
          feature: { en: 'True Effective Cost', np: 'वास्तविक ब्याज लागत' },
          valA: { en: 'Stated rate equals true effective interest rate (e.g. 10% = 10%)', np: 'भनिएको ब्याजदर नै वास्तविक लागत हुन्छ (१०% भनेको १०% नै)' },
          valB: { en: 'True effective rate is nearly double the advertised flat rate (7% flat ≈ 13% effective!)', np: 'वास्तविक ब्याज भनिएको भन्दा झण्डै दोब्बर हुन्छ (७% फ्ल्याट ≈ १३% वास्तविक!)' }
        },
        {
          feature: { en: 'Prepayment Benefit', np: 'अग्रिम भुक्तानीको लाभ' },
          valA: { en: 'Immediate interest savings on every rupee paid early', np: 'साँवा तिर्नासाथ सोही दिनदेखि ब्याज बचत सुरु' },
          valB: { en: 'Minimal or zero interest savings upon early settlement', np: 'अगाडि नै तिरे पनि पूरै अवधिको ब्याज तिर्नुपर्ने बाध्यता' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'base-rate', name: 'Base Rate', type: 'glossary' },
      { slug: 'dsti', name: 'DSTI', type: 'glossary' },
      { slug: 'budget', name: 'Budget', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The World of Loans: Good Debt vs Bad Debt in Nepal', categorySlug: 'loans', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Home Loan & Mortgage Guide in Nepal', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'EMI Loan Repayment Calculator', slug: 'emi', desc: 'Calculate your exact monthly EMI and amortization schedule in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'How does an increase in the bank\'s Base Rate impact my EMI?', np: 'बैंकको आधार दर (Base Rate) बढ्दा मेरो ईएमआईमा के असर पर्छ?' },
        a: {
          en: 'Because retail loans are floating, a rise in Base Rate increases your borrowing cost. The bank will either increase your monthly installment amount to maintain your original tenure, or lengthen your total loan term so your monthly payment stays constant.',
          np: 'कर्जाको ब्याज परिवर्तनशील हुने भएकाले आधार दर बढ्दा बैंकले कि त मासिक किस्ताको रकम बढाइदिन्छ, कि त किस्ता उही राखेर ऋण तिर्ने वर्षको समयावधि लम्ब्याइदिन्छ।'
        }
      },
      {
        q: { en: 'What is a Loan Amortization Schedule?', np: 'ऋणको परिशोधन तालिका (Amortization Schedule) भनेको के हो?' },
        a: {
          en: 'An Amortization Schedule is a detailed monthly table provided by the bank displaying the breakdown of every single EMI payment into its exact interest component, principal component, and the remaining loan balance over the entire tenure.',
          np: 'यो बैंकले दिने विस्तृत तालिका हो, जसमा हरेक महिना बुझाइने किस्तामध्ये कति रकम ब्याजमा गयो, कति साँवा घट्यो र अब तिर्न कति बाँकी छ भनी महिना-महिनाको स्पष्ट हिसाब देखाइएको हुन्छ।'
        }
      },
      {
        q: { en: 'Can I pay off my home loan early in Nepal without massive penalty fees?', np: 'के नेपालमा कुनै चर्को जरिवाना बिना नै घरकर्जा समय अगावै चुक्ता गर्न मिल्छ?' },
        a: {
          en: 'Yes. Nepal Rastra Bank regulations prohibit commercial banks from charging exorbitant prepayment fees on individual retail term loans if settled from genuine personal income sources. Prepayment fees generally cannot exceed 0.15% to 0.50%.',
          np: 'मिल्छ। नेपाल राष्ट्र बैंकको निर्देशन अनुसार व्यक्तिगत ग्राहकले आफ्नै बचत वा आम्दानीबाट कर्जा समय अगावै चुक्ता गर्दा बैंकहरूले चर्को शुल्क लिन पाउँदैनन्। यस्तो अग्रिम भुक्तानी शुल्क प्रायः ०.१५% देखि ०.५०% भन्दा बढी हुन पाउँदैन।'
        }
      },
      {
        q: { en: 'What happens if I miss my EMI payment date in Nepal?', np: 'नेपालमा ईएमआई तिर्ने मिति गुज्रिएमा के हुन्छ?' },
        a: {
          en: 'Missing your payment date triggers penal interest (typically 2% above your contracted rate on the overdue portion) and late fees. If a payment remains unpaid for 30, 60, or 90 days, your loan is classified as a Non-Performing Loan (NPL), and the bank initiates blacklisting with the Credit Information Bureau (CIB).',
          np: 'भाका नाघेमा बैंकले अतिरिक्त हर्जना ब्याज (प्रायः २% थप) र जरिवाना शुल्क काट्छ। ३०, ६० वा ९० दिनसम्म पनि किस्ता नबुझाएमा कर्जा खराब कर्जा (NPL) मा परिणत हुन्छ र बैंकले कर्जा सूचना केन्द्रमार्फत कालोसूचीमा राख्ने प्रक्रिया सुरु गर्छ।'
        }
      }
    ],
    summary: {
      en: [
        'An EMI is a fixed monthly payment combining principal repayment and accrued interest to clear a loan over time.',
        'Early payments in long-term loans are overwhelmingly dominated by interest charges.',
        'Making extra principal prepayments in the first 5 years saves massive interest and shortens tenure.',
        'Floating Base Rate adjustments cause quarterly changes to your EMI or total loan maturity.'
      ],
      np: [
        'ईएमआई भनेको ऋण चुक्ता गर्न हरेक महिना बुझाइने निश्चित किस्ता हो, जसमा साँवा र ब्याज दुवै हुन्छन्।',
        'लामो अवधिको ऋणमा सुरुवाती वर्षहरूमा किस्ताको ठूलो हिस्सा ब्याज तिर्नमै खर्च हुन्छ।',
        'सुरुका ५ वर्षभित्र थोरै भए पनि साँवा अग्रिम भुक्तानी गर्दा लाखौं रुपैयाँ ब्याज बचत हुन्छ।',
        'बैंकको आधार दर घटबढ भए अनुसार त्रैमासिक रूपमा किस्ता वा ऋणको अवधि समायोजन हुन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The World of Loans', type: 'Lesson', url: '/learn/loans/what-is-investing' },
      { title: 'EMI Calculator', type: 'Calculator', url: '/calculators/emi' }
    ],
    meta: {
      title: 'What is EMI (Equated Monthly Installment) in Nepal? Formula & Guide | risePaisa',
      description: 'Master EMI calculations in Nepal. Learn how principal and interest amortization works, how to save millions through early prepayments, and avoid penalties.'
    }
  },

  // 5. DSTI
  {
    slug: 'dsti',
    term: 'DSTI (Debt-Service-to-Income Ratio)',
    termNp: 'ऋण भुक्तानी र आम्दानी अनुपात (DSTI)',
    categorySlug: 'loans',
    categoryName: { en: 'Loans & Credit', np: 'कर्जा र ऋण' },
    letter: 'D',
    abbreviation: 'DSTI',
    synonyms: ['Debt Service to Income', 'DTI', 'कर्जा भुक्तानी अनुपात', 'ऋण-आम्दानी अनुपात'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Debt-Service-to-Income (DSTI) ratio measures the percentage of your gross verified monthly income that goes toward paying monthly debt obligations, capped by Nepal Rastra Bank at a maximum of 50%.',
      np: 'ऋण भुक्तानी र आम्दानी अनुपात (DSTI) भनेको तपाईंको प्रमाणित मासिक कुल आम्दानीको कति प्रतिशत हिस्सा ऋणको किस्ता (EMI) तिर्नमा खर्च हुन्छ भनी नाप्ने वित्तीय अनुपात हो, जसलाई नेपाल राष्ट्र बैंकले बढीमा ५०% मा सीमित गरेको छ।'
    },
    detailedExplanation: {
      en: 'Before approving any retail loan (home loan, auto loan, or personal loan), commercial banks in Nepal are legally mandated by Nepal Rastra Bank to assess the borrower’s Debt-Service-to-Income (DSTI) ratio. DSTI is calculated by dividing your total monthly debt payments across all financial institutions by your total verified gross monthly income (supported by salary certificates, bank statements, or tax clearance receipts). If an applicant earns NPR 100,000 monthly, their combined monthly EMIs cannot exceed NPR 50,000 under the statutory 50% ceiling. This macroprudential regulation protects households from debt traps and prevents systemic banking defaults.',
      np: 'नेपालमा घरकर्जा, सवारी कर्जा वा व्यक्तिगत कर्जा स्वीकृत गर्नुअघि बैंकहरूले ग्राहकको ऋण तिर्न सक्ने क्षमता जाँच्न अनिवार्य रूपमा DSTI अनुपात हिसाब गर्नुपर्छ। यसमा ग्राहकले विभिन्न बैंक तथा वित्तीय संस्थामा तिरिरहेका सबै कर्जाको कुल मासिक किस्तालाई उसको प्रमाणित मासिक आम्दानी (तलब विवरण वा कर चुक्ता प्रमाणपत्र) ले भाग गरेर प्रतिशत निकालिन्छ। यदि कसैको मासिक आम्दानी रु. १ लाख छ भने उसको सबै कर्जाको कुल किस्ता महिनाको रु. ५०,००० भन्दा बढी हुन पाउँदैन। राष्ट्र बैंकको यो नियमले परिवारहरूलाई ऋणको दलदलमा फस्नबाट र बैंकलाई खराब कर्जाबाट जोगाउँछ।'
    },
    whyItMatters: {
      en: 'DSTI directly determines the maximum loan amount a bank will grant you. If your DSTI is already near 50% due to an existing car loan or credit card debt, the bank will flatly reject your home loan application or slash your approved borrowing limit. Lowering existing EMIs before applying for a home mortgage is critical to qualifying for the property you desire.',
      np: 'DSTI ले तपाईंले बैंकबाट कतिसम्म ऋण पाउन सक्नुहुन्छ भन्ने अधिकतम सीमा निर्धारण गर्छ। यदि तपाईंले पहिले नै गाडी कर्जा वा अन्य ऋण लिएर DSTI ५०% को नजिक पुगिसकेको छ भने बैंकले तपाईंको घरकर्जाको आवेदन सिधै अस्वीकृत गरिदिन्छ वा रकम घटाएर मात्र स्वीकृत गर्छ। त्यसैले नयाँ ठूलो कर्जा लिनुअघि पुराना साना कर्जाहरू चुक्ता गर्नु आवश्यक हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The bank underwriting process for evaluating DSTI follows 4 mandatory steps:',
        np: 'बैंकले DSTI मूल्याङ्कन गरी कर्जा स्वीकृत गर्ने प्रक्रिया ४ चरणमा चल्दछ:'
      },
      steps: [
        {
          title: { en: '1. Verified Income Tally', np: '१. प्रमाणित आम्दानीको गणना' },
          desc: { en: 'The bank reviews official taxable salary slips, audited corporate accounts, or formal house rental contracts (verified via tax receipts).', np: 'बैंकले ग्राहकको तलब विवरण, कर चुक्ता प्रमाणपत्र वा घरभाडा सम्झौता (कर तिरेको रसिदसहित) बाट मासिक प्रमाणित आम्दानी निकाल्छ।' }
        },
        {
          title: { en: '2. Existing Debt Bureau Search', np: '२. पुराना ऋणको कर्जा सूचना खोज' },
          desc: { en: 'The bank pulls your Credit Information Bureau (CIB) report to uncover all active vehicle loans, personal loans, and credit card minimum dues.', np: 'कर्जा सूचना केन्द्र (CIB) बाट रिपोर्ट निकालेर ग्राहकले अन्य कुनै पनि बैंकमा तिरिरहेका पुराना गाडी, व्यक्तिगत वा क्रेडिट कार्डका किस्ताहरू हेरिन्छ।' }
        },
        {
          title: { en: '3. Proposed EMI Addition', np: '३. नयाँ किस्ता थप र अनुपात गणना' },
          desc: { en: 'The proposed new loan EMI is added to existing debt commitments and divided by verified gross monthly income.', np: 'नयाँ लिन खोजेको कर्जाको मासिक किस्ता र पुराना सबै किस्ताहरू जोडेर कुल मासिक आम्दानीले भाग गरिन्छ।' }
        },
        {
          title: { en: '4. NRB 50% Compliance Check', np: '४. ५०% कानुनी सीमा परीक्षण' },
          desc: { en: 'If the total debt service ratio sits at or below 50.0%, the loan passes credit underwriting. If above 50%, the loan must be downsized or rejected.', np: 'यदि कुल अनुपात ५०% वा सोभन्दा कम भएमा मात्र कर्जा स्वीकृत हुन्छ। ५०% भन्दा बढी भएमा ऋणको रकम घटाउनुपर्छ वा आवेदन अस्वीकृत हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Commercial bank credit appraisal for retail residential home loans',
        'Auto loan and electric vehicle (EV) credit evaluations in Nepal',
        'Nepal Rastra Bank Unified Directives on Macroprudential Regulation',
        'Personal financial health audits and debt management planning'
      ],
      np: [
        'वाणिज्य बैंकहरूले व्यक्तिगत आवासीय घरकर्जा स्वीकृत गर्दा',
        'सवारी साधन तथा विद्युतीय गाडी (EV) कर्जाको योग्यता जाँच्दा',
        'नेपाल राष्ट्र बैंकको एकीकृत निर्देशन र वित्तीय स्थायित्व नियमनमा',
        'व्यक्तिगत वित्तीय स्वास्थ्य परीक्षण र ऋण व्यवस्थापन योजना बनाउँदा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The NRB 50% Ceiling and Verified Tax Documents in Nepal',
        np: 'नेपाल राष्ट्र बैंकको ५०% DSTI सीमा र कर चुक्ता कागजातको अनिवार्यता'
      },
      body: {
        en: 'To prevent runaway real estate speculative bubbles, Nepal Rastra Bank enforced a strict regulatory ceiling: the Debt-Service-to-Income (DSTI) ratio for personal residential home loans and auto loans cannot exceed 50% (extended up to 60% only for select subsidized social housing programs). Crucially, NRB mandates that banks can only consider "tax-verified" income. Informal cash earnings, undeclared side businesses, or verbal promises of family support cannot be counted. Borrowers must submit official salary bank statements or audited business income tax clearance certificates (PAN tax receipts) to establish their legal borrowing power.',
        np: 'घरजग्गामा अत्यधिक सट्टेबाजी रोक्न र बैंकलाई सुरक्षित राख्न नेपाल राष्ट्र बैंकले व्यक्तिगत आवासीय घरकर्जा र गाडी कर्जामा DSTI को अधिकतम सीमा ५०% तोकेको छ (सहुलियतपूर्ण विशेष कर्जामा बाहेक)। यसमा सबैभन्दा महत्त्वपूर्ण कुरा के छ भने बैंकले केवल "कर प्रणालीमा दर्ता भएको प्रमाणित आम्दानी" लाई मात्र मान्यता दिन पाउँछ। अनौपचारिक नगद कमाइ वा बिना दर्ताको व्यवसायको आम्दानीलाई बैंकले जोड्न पाउँदैन। आम्दानी प्रमाणित गर्न बैंक स्टेटमेन्ट, तलब स्लिप वा आन्तरिक राजस्व कार्यालयको प्यान कर चुक्ता प्रमाणपत्र अनिवार्य चाहिन्छ।'
      },
      keyPoints: {
        en: [
          'Statutory maximum DSTI limit in Nepal is 50% for personal retail loans.',
          'Income must be officially verified via tax clearance or payroll bank statements.',
          'All existing loan EMIs across all banks are detected via CIB credit reports.',
          'Spouse income can be combined into a joint application to expand borrowing capacity.'
        ],
        np: [
          'नेपालमा व्यक्तिगत कर्जाका लागि DSTI को कानुनी अधिकतम सीमा ५०% हो।',
          'आम्दानी अनिवार्य रूपमा बैंक स्टेटमेन्ट वा कर चुक्ता कागजातबाट प्रमाणित हुनुपर्छ।',
          'अन्य कुनै पनि बैंकमा भएका पुराना ऋणहरू कर्जा सूचना केन्द्र (CIB) ले तुरुन्त देखाइदिन्छ।',
          'कर्जाको सीमा बढाउनका लागि श्रीमान्-श्रीमती दुवैको आम्दानी जोडेर संयुक्त (Joint) आवेदन दिन सकिन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Bikram earns a gross verified salary of NPR 80,000 monthly as an IT engineer in Lalitpur. He currently pays an NPR 15,000 monthly EMI for an existing motorcycle loan. Bikram applies for a home loan that requires an NPR 30,000 monthly EMI. The bank calculates his total debt obligations: Existing EMI (15,000) + New Home EMI (30,000) = NPR 45,000. DSTI Ratio = (45,000 / 80,000) * 100 = 56.25%. Because 56.25% breaches the NRB 50% ceiling, the bank informs Bikram his loan cannot be approved. Bikram uses his savings to completely pay off the remaining NPR 60,000 motorcycle loan balance. His debt obligations drop to NPR 30,000. His new DSTI is 37.5% (30,000 / 80,000), and his home loan is approved immediately.',
        np: 'ललितपुरका आईटी इन्जिनियर बिक्रमको मासिक प्रमाणित तलब रु. ८०,००० छ। उनले पहिलेदेखि नै मोटरसाइकलको मासिक रु. १५,००० किस्ता तिरिरहेका छन्। अब उनले मासिक रु. ३०,००० किस्ता पर्ने गरी नयाँ घरकर्जाका लागि आवेदन दिन्छन्। बैंकले हिसाब गर्छ: पुरानो किस्ता (१५,०००) + नयाँ किस्ता (३०,०००) = कुल रु. ४५,०००। DSTI अनुपात = (४५,००० / ८०,०००) * १०० = ५६.२५%। यो राष्ट्र बैंकको ५०% को कानुनी सीमाभन्दा बढी भएकाले बैंकले ऋण अस्वीकृत गर्छ। त्यसपछि बिक्रमले आफ्नो बचतबाट मोटरसाइकलको बाँकी ६० हजार ऋण चुक्ता गरिदिन्छन्। अब उनको किस्ता जम्मा ३०,००० मात्र हुन्छ र DSTI ३७.५% मा झरेपछि घरकर्जा तुरुन्त स्वीकृत हुन्छ।'
      },
      takeaway: {
        en: 'Eliminating existing high-interest personal or auto debts before applying for a home mortgage restores your DSTI ratio below 50%, unlocking maximum bank financing.',
        np: 'नयाँ घरकर्जा लिनुअघि पुराना साना कर्जाहरू चुक्ता गर्दा DSTI अनुपात ५०% भन्दा तल झर्छ र बैंकबाट सजिलै ठूलो कर्जा पाउन सकिन्छ।'
      }
    },
    formula: {
      equation: 'DSTI Ratio (%) = (Total Monthly Debt Repayments / Gross Verified Monthly Income) * 100',
      explanation: {
        en: 'Sum all monthly debt commitments (existing loans, credit card minimums, proposed new loan EMI), divide by total gross verified monthly household income, and multiply by 100. Must be <= 50% in Nepal.',
        np: 'सबै बैंकका पुराना कर्जाको किस्ता र नयाँ लिन खोजेको किस्ता जोड्ने, त्यसलाई कुल प्रमाणित मासिक आम्दानीले भाग गर्ने र १०० ले गुणन गर्ने। यो नेपालमा बढीमा ५०% हुनुपर्छ।'
      },
      variables: [
        { symbol: 'Total Debt Payments', label: { en: 'Sum of all monthly loan EMIs across all banks', np: 'सबै बैंकमा तिर्नुपर्ने मासिक किस्ताहरूको कुल जोड' } },
        { symbol: 'Gross Monthly Income', label: { en: 'Verified official taxable monthly income', np: 'कर प्रणालीमा प्रमाणित कुल मासिक आम्दानी' } }
      ],
      example: {
        scenario: {
          en: 'Total monthly loan commitments of NPR 35,000 on a verified monthly salary of NPR 100,000.',
          np: 'मासिक रु. १,००,००० प्रमाणित तलब भएको व्यक्तिको कुल मासिक किस्ता रु. ३५,००० हुँदा।'
        },
        calculation: {
          en: 'DSTI = (35,000 / 100,000) * 100 = 0.35 * 100 = 35.0%.',
          np: 'DSTI = (३५,००० / १,००,०००) * १०० = ०.३५ * १०० = ३५.०%।'
        },
        result: {
          en: '35.0% DSTI (Compliant with NRB 50% limit; eligible for loan)',
          np: '३५.०% DSTI (राष्ट्र बैंकको ५०% सीमाभित्र; कर्जा पाउन योग्य)'
        }
      }
    },
    advantages: {
      en: [
        'Prevents borrowers from taking on unsustainable debt loads that cause personal bankruptcy',
        'Protects the Nepali banking system against widespread mortgage defaults during downturns',
        'Encourages households to maintain an adequate 50% buffer for daily living and emergencies',
        'Provides an objective, mathematically transparent underwriting standard across all banks'
      ],
      np: [
        'ऋणीहरूलाई आफ्नो औकातभन्दा बढी ऋणको भार बोकेर टाट पल्टिनबाट जोगाउँछ',
        'आर्थिक मन्दीका बेला बैंकिङ प्रणालीमा सामूहिक कर्जा डिफल्ट हुनबाट बचाउँछ',
        'परिवारहरूलाई दैनिक जीवनयापन र आपतकालीन खर्चका लागि कम्तीमा ५०% आम्दानी बचत राख्न सिकाउँछ',
        'सबै बैंकहरूमा कर्जा मूल्याङ्कनको एउटै पारदर्शी र निष्पक्ष मापदण्ड कायम गर्छ'
      ]
    },
    limitations: {
      en: [
        'Strict 50% ceiling excludes informal cash earners and freelancers with unverified tax receipts',
        'Rising interest rates can push an existing borrower’s DSTI past 50% post-disbursement',
        'Can limit homeownership access for young professionals with high earning growth potential',
        'Requires extensive documentation: tax clearance certificates, salary vouchers, and bank statements'
      ],
      np: [
        'अनौपचारिक नगद कमाइ हुने वा कर चुक्ता नभएका साना व्यवसायीले ऋण पाउन नसक्ने समस्या',
        'कर्जा लिइसकेपछि बजारमा ब्याजदर बढ्दा किस्ता बढेर DSTI आफैं ५०% भन्दा माथि पुग्न सक्ने',
        'भविष्यमा आम्दानी बढ्ने सम्भावना भएका युवाहरूलाई पनि सुरुमा ठूलो घर किन्न बाधा पुर्‍याउने',
        'कर चुक्ता, तलब विवरण र बैंक स्टेटमेन्टजस्ता धेरै कागजी प्रमाण जुटाउनुपर्ने झन्झट'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'You can hide loans taken from other banks so they won\'t count against your DSTI.',
          np: 'अन्य बैंकबाट लिएको पुरानो ऋणको विवरण लुकाएर DSTI कम देखाउन सकिन्छ।'
        },
        reality: {
          en: 'Every licensed bank in Nepal is interconnected through the Credit Information Bureau (CIB). Every active loan, credit card, and guarantee is uncovered instantly upon inquiry.',
          np: 'नेपालका सबै बैंकहरू कर्जा सूचना केन्द्र (CIB) सँग प्रत्यक्ष जोडिएका हुन्छन्। तपाईंको नागरिकता नम्बर हाल्नासाथ देशका कुनै पनि बैंकमा भएका सबै ऋण र क्रेडिट कार्ड तुरुन्तै देखिन्छन्।'
        }
      },
      {
        myth: {
          en: 'A bank can make an exception and approve a 70% DSTI if you bring a strong political recommendation.',
          np: 'पहुँच वा भनसुनका आधारमा बैंकले नियम मिचेर ७०% DSTI मा पनि ऋण दिन सक्छ।'
        },
        reality: {
          en: 'The 50% DSTI limit is a statutory regulatory directive from Nepal Rastra Bank. Violating it exposes the bank to direct regulatory penalties and forced provisioning during annual central bank audits.',
          np: '५०% को DSTI सीमा नेपाल राष्ट्र बैंकको कडा कानुनी निर्देशन हो। यो नियम उल्लङ्घन गरेर कर्जा दिएमा बैंकलाई राष्ट्र बैंकको केन्द्रीय अडिटले सिधै कारबाही र जरिवाना गर्दछ।'
        }
      }
    ],
    comparison: {
      title: { en: 'DSTI (Debt-Service-to-Income) vs LTV (Loan-to-Value)', np: 'DSTI अनुपात र LTV (धितो मूल्याङ्कन अनुपात) बीचको तुलना' },
      subtitle: { en: 'Borrower cash-flow repayment capacity vs physical collateral security valuation', np: 'ऋणीको मासिक कमाइको आधार र धितो राखिएको जग्गाको मूल्य बीचको फरक' },
      featureHeader: { en: 'Parameter', np: 'मापदण्ड' },
      colA: { en: 'DSTI (Debt Service Ratio)', np: 'DSTI (ऋण-आम्दानी अनुपात)' },
      colB: { en: 'LTV (Loan to Value Ratio)', np: 'LTV (धितो मूल्याङ्कन अनुपात)' },
      rows: [
        {
          feature: { en: 'What It Evaluates', np: 'के मूल्याङ्कन गर्छ' },
          valA: { en: 'Borrower’s monthly cash flow and salary repayment ability', np: 'ऋणीको मासिक आम्दानी र किस्ता तिर्न सक्ने नगद क्षमता' },
          valB: { en: 'Physical market/fair valuation of the mortgaged real estate', np: 'धितो राखिएको घरजग्गा वा गाडीको वास्तविक बजार मूल्याङ्कन' }
        },
        {
          feature: { en: 'NRB Statutory Cap', np: 'राष्ट्र बैंकको कानुनी सीमा' },
          valA: { en: 'Max 50% of verified gross monthly income', np: 'प्रमाणित मासिक आम्दानीको बढीमा ५०%' },
          valB: { en: 'Max 50% inside Kathmandu Valley; 60% outside Valley for real estate', np: 'काठमाडौं उपत्यकाभित्र बढीमा ५०%; उपत्यका बाहिर बढीमा ६०%' }
        },
        {
          feature: { en: 'Approval Prerequisite', np: 'कर्जा स्वीकृतिको नियम' },
          valA: { en: 'Both DSTI and LTV must pass simultaneously for loan approval', np: 'कर्जा स्वीकृत हुनका लागि DSTI र LTV दुवै सीमाभित्र हुनै पर्छ' },
          valB: { en: 'Both DSTI and LTV must pass simultaneously for loan approval', np: 'कर्जा स्वीकृत हुनका लागि DSTI र LTV दुवै सीमाभित्र हुनै पर्छ' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'emi', name: 'EMI', type: 'glossary' },
      { slug: 'base-rate', name: 'Base Rate', type: 'glossary' },
      { slug: 'budget', name: 'Budget', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The World of Loans: Good Debt vs Bad Debt in Nepal', categorySlug: 'loans', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Home Loan & Mortgage Guide in Nepal', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'EMI Loan Calculator', slug: 'emi', desc: 'Calculate your monthly EMI to check against the 50% DSTI ceiling.' }
    ],
    faqs: [
      {
        q: { en: 'How can I increase my borrowing capacity if my DSTI exceeds 50%?', np: 'यदि मेरो DSTI ५०% नाघ्यो भने कर्जाको सीमा बढाउन के गर्न सकिन्छ?' },
        a: {
          en: 'You can increase borrowing capacity by: 1) Applying jointly with your employed spouse to combine household incomes; 2) Prepaying existing vehicle or personal loans to reduce existing debt; or 3) Extending the loan tenure from 15 years to 20 years to lower the monthly EMI.',
          np: 'कर्जाको क्षमता बढाउन: १) कमाइ हुने श्रीमान् वा श्रीमतीलाई संयुक्त ऋणी बनाएर कुल आम्दानी बढाउने; २) पुराना साना कर्जाहरू चुक्ता गरेर मासिक किस्ताको भार घटाउने; वा ३) कर्जाको अवधि १५ वर्षबाट बढाएर २० वर्ष गरी मासिक किस्ता घटाउने।'
        }
      },
      {
        q: { en: 'Does rental income from physical land or housing count toward DSTI in Nepal?', np: 'के घरभाडाको आम्दानीलाई बैंकले DSTI का लागि आम्दानी मान्छ?' },
        a: {
          en: 'Yes, but only if supported by a formal registered rent agreement, bank deposit history showing regular rent credits, and official local municipal rental tax payment receipts.',
          np: 'मान्छ, तर त्यसका लागि औपचारिक घरभाडा सम्झौता, बैंक खातामा भाडा जम्मा भएको विवरण र स्थानीय वडा कार्यालयमा १०% बहाल कर बुझाएको रसिद अनिवार्य चाहिन्छ।'
        }
      },
      {
        q: { en: 'What is the difference between DSTI and LTV in Nepal?', np: 'नेपालमा DSTI र LTV बीच के भिन्नता छ?' },
        a: {
          en: 'DSTI assesses your cash income (whether you earn enough monthly to afford the EMI), while LTV (Loan-to-Value) assesses your collateral (whether the property is worth enough to cover the loan if you default). Both must comply with NRB caps.',
          np: 'DSTI ले तपाईंको मासिक कमाइले किस्ता धान्छ कि धान्दैन भनी जाँच्छ भने LTV ले धितो राखिएको सम्पत्तिको मूल्यले कर्जा धान्छ कि धान्दैन भनी जाँच्छ। दुवै नियम पूरा भएपछि मात्र कर्जा पाइन्छ।'
        }
      },
      {
        q: { en: 'Does a credit card minimum payment count toward my DSTI calculation?', np: 'के क्रेडिट कार्डको मासिक रकम पनि DSTI हिसाब गर्दा जोडिन्छ?' },
        a: {
          en: 'Yes. Under NRB rules, the monthly minimum repayment obligation on active credit cards (or a deemed percentage of the sanctioned credit card limit) is factored into your monthly debt obligations.',
          np: 'जोडिन्छ। राष्ट्र बैंकको नियम अनुसार तपाईंसँग भएको क्रेडिट कार्डको मासिक न्यूनतम तिर्नुपर्ने रकमलाई पनि मासिक ऋण दायित्वभित्र जोडेर मात्र DSTI निकालिन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'DSTI measures total monthly debt repayments as a percentage of verified gross monthly income.',
        'Nepal Rastra Bank enforces a mandatory maximum ceiling of 50% on personal retail loans.',
        'Income must be officially verified via taxable salary slips, bank statements, or tax clearance receipts.',
        'Paying off existing small loans or applying jointly with a spouse lowers DSTI, unlocking higher mortgages.'
      ],
      np: [
        'DSTI ले कुल मासिक ऋणको किस्ता प्रमाणित कुल मासिक आम्दानीको कति प्रतिशत छ भनी नाप्दछ।',
        'नेपाल राष्ट्र बैंकले व्यक्तिगत कर्जाका लागि यसको अधिकतम कानुनी सीमा ५०% तोकेको छ।',
        'आम्दानी अनिवार्य रूपमा तलब स्लिप, बैंक स्टेटमेन्ट वा कर चुक्ता कागजातबाट प्रमाणित हुनुपर्छ।',
        'पुराना साना कर्जाहरू चुक्ता गर्दा वा श्रीमान्-श्रीमती मिलेर संयुक्त फारम भर्दा DSTI घटेर ठूलो कर्जा पाइन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The World of Loans', type: 'Lesson', url: '/learn/loans/what-is-investing' },
      { title: 'EMI Calculator', type: 'Calculator', url: '/calculators/emi' }
    ],
    meta: {
      title: 'What is DSTI Ratio in Nepal? 50% NRB Rule Explained | risePaisa',
      description: 'Master the Debt-Service-to-Income (DSTI) ratio in Nepal. Understand NRB\'s 50% regulatory ceiling, verified tax rules, and how to maximize your home loan limit.'
    }
  }
];

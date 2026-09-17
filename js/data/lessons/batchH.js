// BATCH H - MUTUAL FUNDS (5 lessons)
// 1. open-ended-vs-close-ended-schemes-nepal
// 2. how-nav-is-calculated-nepal
// 3. starting-online-sip-connectips-nepal
// 4. dividend-reinvestment-plan-drep-nepal
// 5. systematic-withdrawal-plan-swp-pension

export const BATCH_H = {

  // ── H1. OPEN-ENDED VS CLOSE-ENDED SCHEMES ────────────────────────
  'open-ended-vs-close-ended-schemes-nepal': {
    id: 'mf-open-vs-close-ended',
    slug: 'open-ended-vs-close-ended-schemes-nepal',
    categorySlug: 'mutual-funds',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against SEBON Mutual Fund Regulations 2067 & Merchant Banking Directives', np: 'धितोपत्र बोर्ड (SEBON) सामूहिक लगानी कोष नियमावली २०६७ अनुसार समीक्षित' },
    prerequisites: { en: 'Basic knowledge of stocks and mutual funds', np: 'सेयर र सामूहिक लगानी कोषको सामान्य जानकारी' },
    en: {
      title: 'Open-Ended vs Close-Ended Mutual Funds in Nepal: Complete Guide',
      oneLineSummary: 'Understand the fundamental differences between NEPSE-listed close-ended schemes and flexible open-ended SIP funds.',
      summaryPoints: [
        'Close-ended schemes have a fixed unit size, fixed maturity (5-10 years), and trade on NEPSE secondary market via broker TMS.',
        'Open-ended schemes have unlimited units, no maturity date, and are bought/sold directly through the fund manager (AMC) at daily NAV.',
        'Close-ended funds frequently trade at a 10%-25% discount to their Net Asset Value (NAV) on NEPSE.',
        'Open-ended funds are the only schemes that support Systematic Investment Plans (SIP) and Dividend Reinvestment (DREP) in Nepal.',
        'Liquidity in close-ended funds depends on secondary market buyers, while open-ended funds guarantee redemption directly from the AMC.'
      ],
      whatIsThis: 'Mutual funds in Nepal come in two distinct regulatory structures: close-ended schemes and open-ended schemes. Close-ended funds raise a fixed corpus during an initial public issue (NFO), list on NEPSE, and mature after a set tenure (typically 7 to 10 years). Open-ended funds continuously issue and redeem units at the official daily Net Asset Value (NAV), offering unlimited entry and exit without needing a stock broker.',
      whyItMatters: 'Many retail investors in Nepal buy close-ended mutual funds on NEPSE expecting easy liquidity, only to discover poor trading volume or steep discounts where an NAV of NPR 12 trades at only NPR 9.50 on TMS. Conversely, investors wanting to build long-term wealth through monthly SIPs often do not realize that open-ended funds allow automated monthly investing from as low as NPR 1,000 without brokerage costs.',
      howItWorks: [
        { step: 1, title: 'Check the Listing & Trading Mechanism', desc: 'Close-ended funds trade on NEPSE just like ordinary equity shares through your broker TMS account. Open-ended funds do not trade on NEPSE; you transact directly via the capital manager\'s digital portal.' },
        { step: 2, title: 'Compare Pricing: Market Price vs Daily NAV', desc: 'Close-ended fund prices are set by supply and demand on NEPSE, often trading at a discount or premium to actual asset backing. Open-ended fund units are always transacted at the calculated daily NAV.' },
        { step: 3, title: 'Evaluate Investment Flexibility (Lump Sum vs SIP)', desc: 'Close-ended funds require lump-sum purchases in round lots of 100 units on the secondary market. Open-ended schemes allow automated monthly SIPs, unit additions, and partial withdrawals anytime.' },
        { step: 4, title: 'Understand Maturity and Redemption', desc: 'When a close-ended fund reaches its 7-10 year term, the fund liquidates all assets and distributes cash to unit-holders. Open-ended schemes operate perpetually, allowing you to stay invested for decades.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Detailed Comparison: Open-Ended vs Close-Ended Schemes in Nepal',
        headers: ['Feature', 'Open-Ended Scheme (e.g. NIBL Sahabhagita)', 'Close-Ended Scheme (e.g. NMBHF, SEF)', 'Investor Recommendation'],
        rows: [
          ['Trading Platform', 'Direct with AMC Portal / Counter', 'NEPSE Secondary Market (TMS)', 'Open-ended avoids broker commissions'],
          ['Unit Price', 'Exact Daily NAV (e.g. NPR 11.45)', 'Market Demand/Supply (Often Discounted)', 'Close-ended can offer deep discount value'],
          ['SIP & DREP Support', 'Full automated SIP & DREP available', 'Not supported (Lump-sum only)', 'Open-ended is superior for monthly savers'],
          ['Maturity Term', 'Perpetual (No expiry date)', 'Fixed (5, 7, or 10 Years)', 'Open-ended for multi-decade compounding'],
          ['Liquidity / Exit', 'AMC buys back units at NAV minus exit load', 'Dependent on finding a buyer on NEPSE TMS', 'Open-ended offers guaranteed liquidity']
        ]
      },
      nepalContext: 'Under SEBON\'s Mutual Fund Regulations 2067, close-ended funds dominated Nepal for decades. However, since the launch of Nepal\'s first open-ended fund (NIBL Sahabhagita Fund in 2019), open-ended schemes managed by capital houses like Siddhartha Capital, NMB Capital, Sanima Capital, and NIC Asia Capital have surged. Close-ended funds in Nepal historically trade at an average discount of 12% to 20% to NAV due to retail investor preference for volatile speculative stocks over defensive mutual funds.',
      practicalScenario: {
        persona: 'Aruna, 29, secondary school teacher in Hetauda',
        income: 'NPR 48,000 / month salary',
        scenarioText: 'Aruna wanted to invest NPR 5,000 every month into the Nepali market. A broker suggested she buy 500 units of a close-ended mutual fund on NEPSE each month.',
        solutionText: 'She realized that buying close-ended funds on NEPSE incurred minimum broker commissions, DP fees, and odd-lot hassles every single month. Instead, she registered for an online SIP in an open-ended mutual fund via connectIPS. Now, NPR 5,000 is auto-debited each month at zero brokerage, fully compounded via DREP.',
        metricHighlight: 'Saved thousands in broker fees and automated monthly compounding'
      },
      formula: {
        name: 'Mutual Fund Discount / Premium Formula',
        equation: '\\text{Discount / Premium \\%} = \\left( \\frac{\\text{Market Price} - \\text{NAV}}{\\text{NAV}} \\right) \\times 100\\%',
        variables: [
          { symbol: '\\text{Market Price}', name: 'NEPSE Trading Price', desc: 'Current market price quoted on TMS.' },
          { symbol: '\\text{NAV}', name: 'Net Asset Value', desc: 'Audited net asset value per unit published by AMC.' }
        ],
        exampleCalculation: 'If a close-ended fund has NAV = NPR 12.00, but trades at NPR 9.60 on NEPSE: Discount = [(9.60 - 12.00) / 12.00] × 100% = -20.0%. Buying at a 20% discount means acquiring NPR 100 worth of portfolio assets for just NPR 80!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Explore Mutual Fund SIP Growth'
      },
      commonMistakes: [
        { mistake: 'Trying to start a monthly SIP in a close-ended mutual fund on NEPSE.', correct: 'SIP is only possible in open-ended mutual funds directly through capital merchant bankers.', explanation: 'Close-ended funds have a fixed unit supply and cannot generate fractional or recurring monthly units on demand.' },
        { mistake: 'Selling close-ended fund units at massive distress discounts on NEPSE when maturity is near.', correct: 'Hold until maturity if the fund is within 1-2 years of expiration to redeem at 100% NAV value.', explanation: 'At fund maturity, the scheme is liquidated and cash is distributed at full NAV, erasing the market discount.' },
        { mistake: 'Believing open-ended funds guarantee fixed interest returns like a bank FD.', correct: 'Mutual funds invest in market equities and debt; returns fluctuate with market performance.', explanation: 'Mutual funds are market-linked instruments subject to equity price swings, not guaranteed deposits.' }
      ],
      definitions: [
        { term: 'Open-Ended Scheme', full: 'खुलामुखी सामूहिक लगानी कोष', meaning: 'A mutual fund scheme that offers units for purchase and redemption continuously at daily NAV without a fixed maturity.' },
        { term: 'Close-Ended Scheme', full: 'बन्दमुखी सामूहिक लगानी कोष', meaning: 'A mutual fund with a fixed number of units and fixed maturity tenure traded on the secondary stock exchange (NEPSE).' },
        { term: 'Asset Management Company (AMC)', full: 'योजना व्यवस्थापक (मर्चेन्ट बैंक)', meaning: 'SEBON-licensed merchant banks (e.g., NIBL Ace, Siddhartha, NMB) responsible for managing mutual fund portfolios.' },
        { term: 'Exit Load', full: 'बहिर्गमन शुल्क', meaning: 'A small percentage deduction (usually 0.5%-1.5%) charged by open-ended funds if units are redeemed within a short lock-in window.' }
      ],
      faqs: [
        { q: 'Can I sell my open-ended mutual fund units anytime in Nepal?', a: 'Yes. You can place a redemption order on the fund manager\'s online portal on any working business day. The funds are credited directly to your bank account via connectIPS within 2 to 4 working days.' },
        { q: 'Why do close-ended funds trade at a discount on NEPSE?', a: 'Because retail investors on NEPSE prefer volatile individual stocks with high speculative potential. The lack of active buying interest creates discounts where funds trade below their true liquidation value.' },
        { q: 'Do open-ended mutual funds distribute cash dividends in Nepal?', a: 'Yes. Fund managers declare annual dividends based on realized portfolio profits. Investors can choose to receive cash or enroll in DREP to receive additional units.' }
      ],
      takeaways: [
        'Open-ended funds allow continuous SIPs and direct redemptions at NAV without stock brokers.',
        'Close-ended funds trade on NEPSE, often at 10%-25% discounts to their actual asset value.',
        'For disciplined monthly savings, open-ended funds with automated connectIPS mandates are ideal.',
        'Close-ended funds near maturity offer lucrative value by closing the gap between discount price and NAV.',
        'Open-ended funds provide daily liquidity guaranteed by the fund manager.'
      ]
    },
    np: {
      title: 'नेपालमा खुलामुखी (Open-Ended) बनाम बन्दमुखी (Close-Ended) म्युचुअल फन्ड: सम्पूर्ण तुलना',
      oneLineSummary: 'नेप्सेमा सूचीकृत बन्दमुखी कोष र लचिलो खुलामुखी एसआइपी (SIP) योजना बीचको आधारभूत भिन्नता बुझ्नुहोस्।',
      summaryPoints: [
        'बन्दमुखी योजनाको निश्चित अवधि (५-१० वर्ष) हुन्छ र यो नेप्सेको दोस्रो बजारमा ब्रोकरमार्फत किनबेच हुन्छ।',
        'खुलामुखी योजनाको कुनै परिपक्वता अवधि हुँदैन र यसका इकाईहरू सिधै योजना व्यवस्थापकबाट दैनिक NAV मा किनबेच हुन्छन्।',
        'नेप्सेमा बन्दमुखी योजनाहरू प्रायः आफ्नो वास्तविक प्रतिइकाई खुद सम्पत्ति मूल्य (NAV) भन्दा १०% देखि २५% सम्म सस्तो (Discount) मा पाइन्छन्।',
        'नेपालमा व्यवस्थित लगानी योजना (SIP) र लाभांश पुनः लगानी (DREP) खुलामुखी योजनामा मात्र सम्भव छ।',
        'बन्दमुखीमा तरलता नेप्सेको खरिदकर्तामा निर्भर हुन्छ भने खुलामुखीमा क्यापिटलले नै इकाई फिर्ता किन्ने ग्यारेन्टी गर्छ।'
      ],
      whatIsThis: 'नेपालमा सामूहिक लगानी कोष (म्युचुअल फन्ड) दुई संरचनामा सञ्चालन हुन्छन्: बन्दमुखी (Close-Ended) र खुलामुखी (Open-Ended)। बन्दमुखी कोषले सुरुमा सर्वसाधारणलाई निश्चित इकाई बिक्री गरेपछि नेप्सेमा सूचीकृत हुन्छ र ५ देखि १० वर्षपछि खारेज हुन्छ। खुलामुखी कोष भने कुनै निश्चित म्याद विना सञ्चालन हुन्छ र लगानीकर्ताले सिधै क्यापिटलबाट दैनिक NAV का आधारमा जहिले पनि इकाई किन्न वा बेच्न सक्छन्।',
      whyItMatters: 'धेरै नयाँ लगानीकर्ताले नेप्सेमा बन्दमुखी फन्ड किन्छन् तर पछि बेच्न खोज्दा किन्ने मान्छे नपाउने वा १२ रुपैयाँ NAV भएको फन्ड ९.५० मा मात्र बिक्ने समस्या भोग्छन्। अर्कोतर्फ, मासिक रूपमा थोरै-थोरै बचत गर्न चाहनेहरूलाई खुलामुखी फन्डमा बिना ब्रोकर कमिसन मासिक रु. १,००० बाटै SIP गर्न सकिन्छ भन्ने थाहा नहुँदा ठूलो अवसर छुटिरहेको हुन्छ।',
      howItWorks: [
        { step: 1, title: 'किनबेच हुने माध्यम हेर्नुहोस्', desc: 'बन्दमुखी योजना नेप्सेको दोस्रो बजारमा साधारण सेयर जस्तै ब्रोकरको TMS बाट किनबेच हुन्छ। खुलामुखी योजना नेप्सेमा हुँदैन, यो क्यापिटलको आफ्नै अनलाइन पोर्टलबाट कारोबार हुन्छ।' },
        { step: 2, title: 'मूल्य निर्धारण विधि बुझ्नुहोस्', desc: 'बन्दमुखीको मूल्य नेप्सेको माग र आपूर्तिले तय गर्छ (प्रायः NAV भन्दा सस्तो)। खुलामुखीको मूल्य भने दैनिक रूपमा हिसाब गरिने आधिकारिक खुद सम्पत्ति मूल्य (NAV) मै आधारित हुन्छ।' },
        { step: 3, title: 'लगानीको तरिका (एकमुष्ट vs SIP) रोज्नुहोस्', desc: 'बन्दमुखीमा नेप्सेबाट १०० कित्ताको गुणनमा एकमुष्ट किन्नुपर्छ। खुलामुखीमा मासिक रूपमा निश्चित रकम (SIP) स्वतः खाताबाट काटिने गरी लगानी गर्न सकिन्छ।' },
        { step: 4, title: 'अवधि र फिर्ता भुक्तानी बुझ्नुहोस्', desc: 'बन्दमुखी कोष तोकिएको अवधि (जस्तै ७ वर्ष) पुगेपछि खारेज भई सबै पैसा लगानीकर्तालाई फिर्ता गरिन्छ। खुलामुखी कोष अनन्तकालसम्म चलिरहन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'विस्तृत तुलना: नेपालमा खुलामुखी बनाम बन्दमुखी म्युचुअल फन्ड',
        headers: ['विशेषता / सूचक', 'खुलामुखी योजना (जस्तै: NIBL सहभागिता)', 'बन्दमुखी योजना (जस्तै: NMBHF, SEF)', 'लगानीकर्ताका लागि सुझाव'],
        rows: [
          ['कारोबार हुने ठाउँ', 'क्यापिटलको अनलाइन पोर्टल / काउन्टर', 'नेप्से दोस्रो बजार (ब्रोकर TMS)', 'खुलामुखीमा ब्रोकर शुल्क लाग्दैन'],
          ['इकाई खरिद मूल्य', 'दैनिक वास्तविक NAV (जस्तै: रु. ११.४५)', 'नेप्सेको बजार मूल्य (प्रायः सस्तो दरमा)', 'बन्दमुखी भारी छुट (Discount) मा पाइन्छ'],
          ['SIP र DREP सुविधा', 'पूर्ण रूपमा उपलब्ध (अटो-डेबिट सहित)', 'उपलब्ध छैन (एकमुष्ट मात्र)', 'मासिक बचतकर्ताका लागि खुलामुखी उत्तम'],
          ['परिपक्वता अवधि', 'असीमित (कुनै म्याद नहुने)', 'निश्चित (५, ७ वा १० वर्ष)', 'दीर्घकालीन चक्रवृद्धिका लागि खुलामुखी'],
          ['तरलता / नगद फिर्ता', 'क्यापिटल आफैंले इकाई फिर्ता किन्ने', 'नेप्सेमा अर्को खरिदकर्ता भेटिनुपर्ने', 'खुलामुखीमा तत्काल नगद पाइने ग्यारेन्टी']
        ]
      },
      nepalContext: 'धितोपत्र बोर्ड (SEBON) को सामूहिक लगानी कोष नियमावली २०६७ अनुसार नेपालमा लामो समय बन्दमुखी फन्ड मात्रै चलेका थिए। तर २०७६ मा पहिलो पटक खुलामुखी "एनआईबिएल सहभागिता फन्ड" आएपछि सिद्धार्थ, एनएमबि, सानिमा, र एनआइसी एसिया क्यापिटलले पनि खुलामुखी योजना ल्याए। नेपालको बजारमा सर्वसाधारण लगानीकर्ताले म्युचुअल फन्ड भन्दा सट्टेबाजी सेयर मन पराउने भएकाले नेप्सेमा बन्दमुखी फन्डहरू आफ्नो NAV भन्दा १२% देखि २०% सम्म सस्तोमा किनबेच हुने गर्छन्।',
      practicalScenario: {
        persona: 'अरुणा, २९, हेटौंडाकी माध्यमिक शिक्षिका',
        income: 'मासिक तलब रु. ४८,०००',
        scenarioText: 'अरुणालाई बजारमा महिनाको रु. ५,००० लगानी गर्न मन थियो। एक ब्रोकरले उनलाई प्रत्येक महिना नेप्सेबाट ५०० कित्ता बन्दमुखी म्युचुअल फन्ड किन्न सल्लाह दिए।',
        solutionText: 'उनले हिसाब गर्दा हरेक महिना ब्रोकर कमिसन र DP शुल्क तिर्दा झन्झट हुने देखिन्। त्यसपछि उनले खुलामुखी म्युचुअल फन्डमा अनलाइन SIP दर्ता गरी connectIPS जोडिन्। अब उनको खाताबाट प्रत्येक महिना बिना कुनै ब्रोकर शुल्क रु. ५,००० काटिन्छ र लाभांश पनि DREP मार्फत आफैं नयाँ कित्तामा परिणत हुन्छ।',
        metricHighlight: 'ब्रोकर शुल्क जोगाउँदै मासिक बचतलाई चक्रवर्ती वृद्धिमा जोडिन्'
      },
      formula: {
        name: 'म्युचुअल फन्ड छुट / प्रिमियम निकाल्ने सूत्र',
        equation: '\\text{Discount / Premium \\%} = \\left( \\frac{\\text{Market Price} - \\text{NAV}}{\\text{NAV}} \\right) \\times 100\\%',
        variables: [
          { symbol: '\\text{Market Price}', name: 'नेप्सेको बजार मूल्य', desc: 'ब्रोकर TMS मा कारोबार भएको मूल्य।' },
          { symbol: '\\text{NAV}', name: 'खुद सम्पत्ति मूल्य', desc: 'क्यापिटलले प्रकाशित गरेको प्रतिइकाई वास्तविक मूल्य।' }
        ],
        exampleCalculation: 'यदि बन्दमुखी फन्डको NAV रु. १२.०० छ तर नेप्सेमा रु. ९.६० मा पाइन्छ भने: छुट = [(९.६० - १२.००) / १२.००] × १००% = -२०%। अर्थात् रु. १०० को सम्पत्ति बजारमा जम्मा रु. ८० मै किन्न पाइयो!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'म्युचुअल फन्ड SIP को प्रतिफल हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'नेप्सेमा सूचीकृत बन्दमुखी फन्डमा मासिक SIP गर्न खोज्नु।', correct: 'SIP गर्नका लागि मर्चेन्ट बैंकको खुलामुखी म्युचुअल फन्ड नै रोज्नुपर्छ।', explanation: 'बन्दमुखीमा निश्चित इकाई मात्र हुने भएकाले नियमित मासिक रूपमा नयाँ इकाई सिर्जना गर्न सकिँदैन।' },
        { mistake: 'म्याद सकिन लागेको बन्दमुखी फन्ड नेप्सेमा भारी घाटा खाएर बेच्नु।', correct: 'यदि फन्डको म्याद सकिन १-२ वर्ष मात्र बाँकी छ भने खारेजीसम्म पर्खेर पूरै NAV मूल्य लिनुहोस्।', explanation: 'फन्ड खारेज हुँदा सम्पत्ति बेचेर पूरै NAV बराबरको नगद खातामा पठाइन्छ र बजारको छुट समाप्त हुन्छ।' },
        { mistake: 'म्युचुअल फन्डले बैंकको मुद्दती जस्तै निश्चित ब्याज दिन्छ भन्ठान्नु।', correct: 'म्युचुअल फन्डको प्रतिफल सेयर बजारको उतारचढावमा आधारित हुन्छ।', explanation: 'यो बजारमा आधारित लगानी भएकाले यसमा बजार अनुसार प्रतिफल घटबढ हुन सक्छ।' }
      ],
      definitions: [
        { term: 'खुलामुखी योजना (Open-Ended)', full: 'असीमित अवधिको सामूहिक कोष', meaning: 'कुनै परिपक्वता मिति नभएको र क्यापिटलबाट दैनिक NAV मा सिधै खरिद-बिक्री गर्न सकिने कोष।' },
        { term: 'बन्दमुखी योजना (Close-Ended)', full: 'निश्चित अवधिको सामूहिक कोष', meaning: 'तोकिएको परिपक्वता अवधि (५ देखि १० वर्ष) भएको र नेप्सेको दोस्रो बजारमा मात्र कारोबार हुने योजना।' },
        { term: 'योजना व्यवस्थापक (AMC)', full: 'मर्चेन्ट बैंकिङ संस्था', meaning: 'धितोपत्र बोर्डबाट इजाजतप्राप्त क्यापिटलहरू (जस्तै एनआईबिएल, सिद्धार्थ, एनएमबि) जसले कोष सञ्चालन गर्छन्।' },
        { term: 'बहिर्गमन शुल्क (Exit Load)', full: 'फिर्ता बिक्री दस्तुर', meaning: 'खुलामुखी फन्ड किनेको छोटो समयभित्रै बेच्दा लाग्ने सानो प्रतिशत (प्रायः ०.५% देखि १.५%) शुल्क।' }
      ],
      faqs: [
        { q: 'के खुलामुखी म्युचुअल फन्डको पैसा नेपालमा जहिले पनि फिर्ता पाइन्छ?', a: 'हो। कुनै पनि कार्यदिनमा क्यापिटलको अनलाइन पोर्टलबाट रिडेम्प्सन (इकाई बिक्री) अर्डर दिन सकिन्छ। २ देखि ४ कार्यदिनभित्र पैसा सिधै तपाईंको बैंक खातामा आइपुग्छ।' },
        { q: 'नेप्सेमा बन्दमुखी फन्डहरू किन NAV भन्दा सस्तोमा कारोबार हुन्छन्?', a: 'किनकि नेपाली दोस्रो बजारका लगानीकर्ताहरू तीव्र उतारचढाव हुने जोखिमयुक्त सेयरमा रमाउँछन् र म्युचुअल फन्डमा खरिद चाप कम हुँदा बजार मूल्य घट्न पुग्छ।' },
        { q: 'के खुलामुखी म्युचुअल फन्डले नगद लाभांश वितरण गर्छन्?', a: 'गर्छन्। वर्षभरिको नाफाबाट क्यापिटलले वार्षिक लाभांश घोषणा गर्छ। लगानीकर्ताले चाहेमा नगद लिन वा थप इकाई (DREP) मा बदल्न सक्छन्।' }
      ],
      takeaways: [
        'खुलामुखी फन्डले बिना ब्रोकर दैनिक NAV मा प्रत्यक्ष खरिद-बिक्री र नियमित SIP को सुविधा दिन्छ।',
        'बन्दमुखी फन्डहरू नेप्सेमा कारोबार हुन्छन् र प्रायः १०% देखि २५% सम्मको आकर्षक छुटमा पाइन्छन्।',
        'अनुशासित मासिक बचतका लागि connectIPS जोडिएको खुलामुखी SIP नै सबैभन्दा भरपर्दो माध्यम हो।',
        'म्याद सकिन लागेका बन्दमुखी फन्ड किन्दा बजार मूल्य र NAV बीचको अन्तरबाट राम्रो नाफा कमाउन सकिन्छ।',
        'खुलामुखी फन्डमा तरलताको ग्यारेन्टी स्वयं योजना व्यवस्थापक (क्यापिटल) ले लिएको हुन्छ।'
      ]
    }
  },

  // ── H2. HOW NAV IS CALCULATED IN NEPAL ───────────────────────────
  'how-nav-is-calculated-nepal': {
    id: 'mf-how-nav-calculated',
    slug: 'how-nav-is-calculated-nepal',
    categorySlug: 'mutual-funds',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against SEBON Valuation Directives & Fund Accounting Standards FY 2081/82', np: 'धितोपत्र बोर्ड मूल्याङ्कन निर्देशिका तथा कोष लेखा मापदण्ड २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of balance sheets and stock valuation', np: 'ब्यालेन्स सिट र सेयर मूल्याङ्कनको आधारभूत ज्ञान' },
    en: {
      title: 'How NAV is Calculated in Nepal: Anatomy of Mutual Fund Valuation',
      oneLineSummary: 'Demystify Net Asset Value - see how equities, bank fixed deposits, accrued dividends, and management fees determine daily unit prices.',
      summaryPoints: [
        'Net Asset Value (NAV) represents the exact per-unit net book worth of a mutual fund scheme.',
        'Total assets include listed equities marked to market at NEPSE closing prices, bank fixed deposits, debentures, and accrued dividends/interest.',
        'Total liabilities deduct accrued management fees (capped by SEBON at 1.5%), depository fees (0.2%), fund supervisor fees (0.15%), and audit fees.',
        'SEBON mandates weekly NAV publication for close-ended schemes and daily NAV calculation for open-ended schemes.',
        'A rising NAV reflects true portfolio capital appreciation and dividend accumulation, independent of stock market rumors.'
      ],
      whatIsThis: 'Net Asset Value (NAV) is the intrinsic value of one unit of a mutual fund. It is calculated by summing up the current market value of all underlying shares, bonds, debentures, and cash deposits held in the fund\'s portfolio, subtracting all operational liabilities and statutory fees, and dividing the resulting net figure by the total number of outstanding fund units.',
      whyItMatters: 'Investors often treat mutual fund NAV like a stock price, mistakenly thinking a fund with an NAV of NPR 10 is "cheap" while one with an NAV of NPR 18 is "expensive." In reality, NAV reflects underlying portfolio performance. Understanding how NAV is calculated protects you from buying overvalued speculative funds and helps you identify genuine undervaluation on NEPSE.',
      howItWorks: [
        { step: 1, title: 'Mark-to-Market Equity Portfolio', desc: 'Every trading day at 3:00 PM, fund accountants value all listed shares using NEPSE\'s official closing market prices. If NEPSE rallies, the equity asset portion expands immediately.' },
        { step: 2, title: 'Add Debt, FDs & Accrued Incomes', desc: 'Add capital invested in Class A commercial bank fixed deposits (earning 7%-9%), corporate debentures, call money balances, and declared but unpaid stock dividends.' },
        { step: 3, title: 'Deduct Accrued Fund Expenses & Liabilities', desc: 'Subtract daily accrued statutory expenses: AMC management fee (max 1.5% p.a.), depository fee (0.2%), supervisor fee (0.15%), SEBON regulatory levy, and audit provisions.' },
        { step: 4, title: 'Divide Net Assets by Total Units', desc: 'Take Total Assets minus Total Liabilities, and divide by total issued units to determine the official NAV per unit down to two decimal places.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Hypothetical Fund Balance Sheet: NPR 100 Crore Mutual Fund Scheme',
        headers: ['Portfolio Asset / Liability Item', 'Accounting Valuation Method', 'Balance Sheet Value', 'Contribution per Unit'],
        rows: [
          ['Listed NEPSE Shares', 'Closing market price on NEPSE', 'NPR 72,50,00,000', 'NPR 7.25'],
          ['Bank Fixed Deposits (Class A)', 'Principal + accrued interest', 'NPR 18,00,00,000', 'NPR 1.80'],
          ['Corporate Debentures', 'Amortized cost / clean price', 'NPR 8,50,00,000', 'NPR 0.85'],
          ['Cash, Call Accounts & Dividends', 'Liquid bank balance & receivables', 'NPR 3,20,00,000', 'NPR 0.32'],
          ['Total Assets (A)', 'Sum of all investments & cash', 'NPR 1,02,20,00,000', 'NPR 10.22'],
          ['Accrued Fees & Liabilities (B)', 'AMC, Depository, Audit provisions', 'NPR 1,80,00,000', 'NPR 0.18'],
          ['Net Asset Value (A - B)', 'Net Portfolio Value (10 Cr units)', 'NPR 1,00,40,00,000', 'NPR 10.04 Per Unit']
        ]
      },
      nepalContext: 'Under SEBON Mutual Fund Regulations 2067, fund managers in Nepal are required to keep between 60% and 80% of assets in listed securities, while maintaining safe allocations in bank fixed deposits and risk-free government securities. Furthermore, fund management fees are strictly capped: maximum 1.5% for fund management, 0.2% for depository services, and 0.15% for independent fund supervisors (typically respected civil society members or chartered accountants). This fee cap ensures that AMC overhead does not erode retail investor gains.',
      practicalScenario: {
        persona: 'Prakash, 31, corporate accountant in Pokhara',
        income: 'NPR 65,000 / month',
        scenarioText: 'Prakash noticed that Scheme A had an NAV of NPR 10.20, while Scheme B had an NAV of NPR 15.60. A friend advised him: "Buy Scheme A, it is near par value (NPR 10) so it has more room to grow double."',
        solutionText: 'Prakash examined the portfolio disclosure reports. Scheme A was near NPR 10 because it had suffered heavy losses in speculative hydro stocks. Scheme B was at NPR 15.60 because it held top-tier commercial banks and lucrative debentures compounding steadily for 4 years. He invested in Scheme B, which grew another 14% that year, while Scheme A dropped below par.',
        metricHighlight: 'Learned that lower NAV does not equal cheaper valuation'
      },
      formula: {
        name: 'Mutual Fund Net Asset Value (NAV) Formula',
        equation: '\\text{NAV} = \\frac{\\text{Total Market Value of Assets} - \\text{Total Liabilities}}{\\text{Total Outstanding Fund Units}}',
        variables: [
          { symbol: '\\text{Assets}', name: 'Total Portfolio Assets', desc: 'Market value of equities + fixed deposits + bonds + cash + receivables.' },
          { symbol: '\\text{Liabilities}', name: 'Total Scheme Liabilities', desc: 'Accrued management fees, custodian charges, audit provisions.' },
          { symbol: '\\text{Units}', name: 'Outstanding Units', desc: 'Total units held by all investors.' }
        ],
        exampleCalculation: 'Total Assets = NPR 1,25,00,00,000. Total Liabilities = NPR 2,50,00,000. Outstanding Units = 10,00,00,000 (10 Crore units). Net Assets = NPR 1,22,50,00,000. NAV = 1,22,50,00,000 / 10,00,00,000 = NPR 12.25 per unit.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Investment Value'
      },
      commonMistakes: [
        { mistake: 'Treating a NPR 10 NAV fund as "cheap" and an NPR 18 NAV fund as "expensive".', correct: 'NAV is not a stock price; evaluate portfolio asset quality and historical performance instead.', explanation: 'A fund with NPR 18 NAV simply reflects compounding over time; NPR 10,000 invested in either grows at the portfolio\'s percentage return.' },
        { mistake: 'Believing that declared mutual fund dividends are "free money" on top of NAV.', correct: 'When a fund pays an NPR 1 dividend, the NAV automatically drops by exactly NPR 1 on the book closure date.', explanation: 'Dividends are paid out of the fund\'s net assets, immediately reducing the remaining asset pool.' },
        { mistake: 'Ignoring monthly portfolio disclosure reports published by merchant banks.', correct: 'Review top 10 stock holdings, sector diversification, and fixed deposit allocations monthly.', explanation: 'SEBON mandates monthly portfolio publication so unit-holders can inspect credit risk and asset quality.' }
      ],
      definitions: [
        { term: 'Net Asset Value (NAV)', full: 'प्रतिइकाई खुद सम्पत्ति मूल्य', meaning: 'The intrinsic monetary worth of a single unit of a mutual fund based on net portfolio holdings.' },
        { term: 'Mark-to-Market (MTM)', full: 'बजार मूल्यमा मूल्याङ्कन', meaning: 'The daily accounting practice of adjusting asset values to reflect prevailing stock market closing prices.' },
        { term: 'Fund Supervisor', full: 'कोष सुपरभाइजर', meaning: 'An independent regulatory board appointed to oversee fund managers and protect unit-holder rights.' },
        { term: 'Par Value', full: 'अंकित मूल्य', meaning: 'The initial launch price of a mutual fund unit, universally fixed at NPR 10 per unit in Nepal.' }
      ],
      faqs: [
        { q: 'How often is NAV updated and published in Nepal?', a: 'Under SEBON directives, open-ended mutual funds update and publish NAV daily on their websites. Close-ended funds calculate NAV weekly and publish a comprehensive audited monthly report by the end of each Nepali month.' },
        { q: 'Can a mutual fund NAV fall below the initial NPR 10 par value?', a: 'Yes. If the NEPSE index enters a severe bear market and stock prices plummet, the fund\'s equity assets lose value, driving NAV below NPR 10 (e.g., NPR 8.50 or NPR 9.20).' },
        { q: 'Where can I check the official daily NAV of Nepali mutual funds?', a: 'On the respective merchant bank websites (e.g., niblcapital.com, siddharthacapital.com), financial portals (Sharesansar, Merolagani), and SEBON\'s official portal.' }
      ],
      takeaways: [
        'NAV reflects the true per-unit book value of all underlying assets minus statutory liabilities.',
        'Equities are marked to market daily at NEPSE closing prices, while bank FDs accrue steady interest.',
        'SEBON strictly caps AMC management and depository fees, protecting unit-holder capital.',
        'A lower NAV does not mean a fund is cheaper - evaluate portfolio quality and past track record.',
        'When a mutual fund distributes cash dividends, its NAV drops by the exact dividend amount.'
      ]
    },
    np: {
      title: 'नेपालमा म्युचुअल फन्डको NAV कसरी हिसाब गरिन्छ: कोष मूल्याङ्कनको भित्री रहस्य',
      oneLineSummary: 'खुद सम्पत्ति मूल्य (NAV) को गणित बुझ्नुहोस् - सेयर, बैंक मुद्दती निक्षेप, लाभांश र व्यवस्थापन शुल्कले कसरी दैनिक इकाई मूल्य तय गर्छन्।',
      summaryPoints: [
        'खुद सम्पत्ति मूल्य (NAV) ले म्युचुअल फन्डको प्रतिइकाई वास्तविक किताबी मूल्य (Book Value) लाई जनाउँछ।',
        'कुल सम्पत्तिमा नेप्सेको अन्तिम मूल्यमा आधारित सेयर, वाणिज्य बैंकका मुद्दती निक्षेप, ऋणपत्र, र पाउन बाँकी लाभांश जोडिन्छ।',
        'कुल दायित्वमा व्यवस्थापन शुल्क (धितोपत्र बोर्डद्वारा अधिकतम १.५% मा सीमित), डिपोजिटरी शुल्क (०.२%), र लेखापरीक्षण खर्च घटाइन्छ।',
        'धितोपत्र बोर्डको नियम अनुसार बन्दमुखी फन्डको साप्ताहिक तथा मासिक र खुलामुखी फन्डको दैनिक NAV प्रकाशन गर्नुपर्छ।',
        'बढ्दो NAV ले बजारका हल्ला होइन, फन्डको पोर्टफोलियोको वास्तविक पुँजीगत वृद्धि र आम्दानीलाई प्रतिविम्बित गर्छ।'
      ],
      whatIsThis: 'प्रतिइकाई खुद सम्पत्ति मूल्य (NAV - Net Asset Value) भनेको म्युचुअल फन्डको एउटा इकाईको वास्तविक मूल्य हो। फन्डले लगानी गरेको सबै कम्पनीको सेयर, बैंकको मुद्दती निक्षेप, ऋणपत्र, र नगदको बजार भाउ जोडेर त्यसमा लाग्ने प्रशासनिक तथा कानुनी खर्चहरू घटाएपछि बाँकी रहेको खुद रकमलाई कुल इकाई संख्याले भाग गरेर NAV निकालिन्छ।',
      whyItMatters: 'धेरै नेपाली लगानीकर्ताले NAV लाई सेयरको मूल्य जस्तै सम्झन्छन् र १० रुपैयाँ NAV भएको फन्डलाई "सस्तो" तथा १८ रुपैयाँ भएकोलाई "महँगो" ठानेर झुक्किन्छन्। वास्तवमा NAV ले फन्डको कार्यसम्पादन देखाउँछ। NAV को हिसाब बुझ्दा नेप्सेमा दोस्रो बजारमा अन्धाधुन्ध लगानी नगरी वास्तविक नाफामा रहेका फन्ड पहिचान गर्न सकिन्छ।',
      howItWorks: [
        { step: 1, title: 'सेयर पोर्टफोलियोको दैनिक बजार मूल्याङ्कन (MTM)', desc: 'प्रत्येक कारोबार दिन दिउँसो ३ बजे नेप्से बन्द भएपछि फन्डका एकाउन्टेन्टहरूले सूचीकृत सेयरको अन्तिम कारोबार मूल्य अनुसार कुल सम्पत्ति हिसाब गर्छन्।' },
        { step: 2, title: 'मुद्दती निक्षेप, ऋणपत्र र ब्याज आम्दानी जोड्नुहोस्', desc: 'वाणिज्य बैंकमा राखिएको मुद्दती निक्षेप (वार्षिक ७-९% ब्याज), विभिन्न ऋणपत्रको साँवा-ब्याज, र घोषणा भई पाउन बाँकी लाभांश रकम जोडिन्छ।' },
        { step: 3, title: 'सञ्चालन खर्च र दायित्वहरू घटाउनुहोस्', desc: 'दैनिक रूपमा लाग्ने खर्चहरू: क्यापिटलको व्यवस्थापन शुल्क (अधिकतम १.५%), डिपोजिटरी शुल्क (०.२%), सुपरभाइजर शुल्क (०.१५%), र बोर्ड दस्तुर कट्टा गरिन्छ।' },
        { step: 4, title: 'खुद सम्पत्तिलाई कुल इकाई संख्याले भाग गर्नुहोस्', desc: 'कुल सम्पत्तिबाट दायित्व घटाएर बाँकी रहेको रकमलाई कुल इकाईले भाग गर्दा दशमलव पछिको दुई अंकसम्मको आधिकारिक NAV प्राप्त हुन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'काल्पनिक पोर्टफोलियो ब्यालेन्स सिट: रु. १०० करोडको म्युचुअल फन्ड योजना',
        headers: ['सम्पत्ति तथा दायित्व शीर्षक', 'मूल्याङ्कन गर्ने लेखा विधि', 'ब्यालेन्स सिटमा कायम रकम', 'प्रतिइकाई योगदान'],
        rows: [
          ['नेप्सेमा सूचीकृत सेयर', 'नेप्सेको अन्तिम कारोबार मूल्य', 'रु. ७२,५०,००,०००', 'रु. ७.२५'],
          ['वाणिज्य बैंकको मुद्दती निक्षेप', 'साँवा तथा आर्जित ब्याज', 'रु. १८,००,००,०००', 'रु. १.८०'],
          ['कम्पनीहरूका ऋणपत्र (Debentures)', 'परिपक्वता मूल्य / लागत', 'रु. ८,५०,००,०००', 'रु. ०.८५'],
          ['नगद, कल खाता र पाउनुपर्ने लाभांश', 'बैंक मौज्दात र प्राप्य रकम', 'रु. ३,२०,००,०००', 'रु. ०.३२'],
          ['कुल सम्पत्ति (क)', 'सबै लगानी र नगदको योगफल', 'रु. १,०२,२०,००,०००', 'रु. १०.२२'],
          ['खर्च तथा दायित्व व्यवस्था (ख)', 'क्यापिटल, अडिट र कानुनी प्रोभिजन', 'रु. १,८०,००,०००', 'रु. ०.१८'],
          ['खुद सम्पत्ति मूल्य (क - ख)', '१० करोड इकाईको खुद मूल्य', 'रु. १,००,४०,००,०००', 'रु. १०.०४ प्रतिइकाई']
        ]
      },
      nepalContext: 'धितोपत्र बोर्डको सामूहिक लगानी कोष नियमावली २०६७ अनुसार योजना व्यवस्थापकहरूले कुल कोषको कम्तीमा ६०% देखि ८०% रकम धितोपत्र बजारमा लगानी गर्नुपर्ने र बाँकी रकम जोखिमरहित सरकारी ऋणपत्र तथा बैंक मुद्दती निक्षेपमा राख्नुपर्ने नियम छ। साथै, व्यवस्थापन शुल्क अधिकतम १.५%, डिपोजिटरी शुल्क ०.२% र कोष सुपरभाइजर शुल्क ०.१५% भन्दा बढी लिन नपाइने गरी सीमा तोकिएको छ जसले गर्दा लगानीकर्ताको पुँजी सुरक्षित रहन्छ।',
      practicalScenario: {
        persona: 'प्रकाश, ३१, पोखराका कर्पोरेट एकाउन्टेन्ट',
        income: 'मासिक तलब रु. ६५,०००',
        scenarioText: 'प्रकाशले योजना ‘क’ को NAV रु. १०.२० र योजना ‘ख’ को NAV रु. १५.६० देखे। उनका साथीले "१० रुपैयाँ भएको योजना किन, सस्तो छ, दोब्बर हुन सजिलो हुन्छ" भने।',
        solutionText: 'प्रकाशले दुवै योजनाको मासिक वित्तीय विवरण अध्ययन गरे। योजना ‘क’ ले कमजोर हाइड्रोपावर सेयरमा घाटा खाएर NAV १० मा झरेको थियो, जबकि योजना ‘ख’ ले उत्कृष्ट बैंक र ऋणपत्रमा ४ वर्षदेखि नाफा कमाएर १५.६० पुर्याएको थियो। उनले योजना ‘ख’ रोजे, जसले त्यस वर्ष थप १४% प्रतिफल दियो भने योजना ‘क’ को मूल्य अझ घट्यो।',
        metricHighlight: 'कम NAV हुनु नै सस्तो हुनु होइन भन्ने वित्तीय सत्य बुझे'
      },
      formula: {
        name: 'म्युचुअल फन्ड खुद सम्पत्ति मूल्य (NAV) सूत्र',
        equation: '\\text{NAV} = \\frac{\\text{Total Market Value of Assets} - \\text{Total Liabilities}}{\\text{Total Outstanding Fund Units}}',
        variables: [
          { symbol: '\\text{Assets}', name: 'कुल पोर्टफोलियो सम्पत्ति', desc: 'सेयरको बजार मूल्य + मुद्दती निक्षेप + ऋणपत्र + नगद मौज्दात।' },
          { symbol: '\\text{Liabilities}', name: 'कुल तिर्नुपर्ने दायित्व', desc: 'व्यवस्थापन शुल्क, कस्टोडियन शुल्क, र अडिट खर्च।' },
          { symbol: '\\text{Units}', name: 'कुल कायम इकाई संख्या', desc: 'लगानीकर्ताहरूले खरिद गरेका कुल इकाई।' }
        ],
        exampleCalculation: 'कुल सम्पत्ति = रु. १,२५,००,००,०००। कुल दायित्व = रु. २,५०,००,०००। कुल इकाई = १०,००,००,००० (१० करोड इकाई)। खुद सम्पत्ति = रु. १,२२,५०,००,०००। NAV = १,२२,५०,००,००० / १०,००,००,००० = रु. १२.२५ प्रतिइकाई।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'लगानीको सम्भावित मूल्य निकाल्नुहोस्'
      },
      commonMistakes: [
        { mistake: '१० रुपैयाँको NAV लाई सस्तो र १८ रुपैयाँको NAV लाई महँगो मान्नु।', correct: 'NAV सेयरको भाउ होइन; पोर्टफोलियोको गुणस्तर र विगतको प्रतिफल हेर्नुहोस्।', explanation: '१८ रुपैयाँ पुगेको फन्डले राम्रो नाफा कमाएको प्रमाण हो; १० हजार दुवैमा लगानी गर्दा प्रतिशतका आधारमा समान वृद्धि हुन्छ।' },
        { mistake: 'म्युचुअल फन्डले बाँडेको लाभांशलाई NAV बाहेकको सित्तैको पैसा ठान्नु।', correct: 'फन्डले प्रतिइकाई १ रुपैयाँ लाभांश बाँडेमा बुक क्लोजको दिन NAV ठ्याक्कै १ रुपैयाँ घट्छ।', explanation: 'लाभांश कोषको सम्पत्तिबाटै झिकेर दिइने भएकाले बाँकी सम्पत्तिको मूल्य सोही अनुपातमा घट्छ।' },
        { mistake: 'क्यापिटलहरूले हरेक महिना निकाल्ने वित्तीय प्रतिवेदन नहेरी बस्नु।', correct: 'मासिक विवरणमा फन्डले कुन-कुन सेयर र कति मुद्दती निक्षेपमा पैसा राखेको छ अध्ययन गर्नुहोस्।', explanation: 'धितोपत्र बोर्डले लगानीकर्ताको पारदर्शिताका लागि शीर्ष १० सेयर र जोखिम अवस्था मासिक रूपमा छाप्न अनिवार्य गरेको छ।' }
      ],
      definitions: [
        { term: 'खुद सम्पत्ति मूल्य (NAV)', full: 'Net Asset Value', meaning: 'म्युचुअल फन्डको कुल सम्पत्तिबाट सम्पूर्ण खर्च कटाएर बाँकी रहेको प्रतिइकाई वास्तविक वित्तीय मूल्य।' },
        { term: 'मार्क-टु-मार्केट (MTM)', full: 'दैनिक बजार मूल्याङ्कन', meaning: 'धितोपत्र बजारमा कायम अन्तिम कारोबार मूल्य अनुसार पोर्टफोलियोको मूल्य समायोजन गर्ने लेखा विधि।' },
        { term: 'कोष सुपरभाइजर (Fund Supervisor)', full: 'स्वतन्त्र संरक्षक मण्डल', meaning: 'क्यापिटलले नियम अनुसार काम गरे-नगरेको अनुगमन गरी लगानीकर्ताको हकहित रक्षा गर्ने विज्ञ समूह।' },
        { term: 'अंकित मूल्य (Par Value)', full: 'सुरुवाती मूल्य', meaning: 'म्युचुअल फन्ड सार्वजनिक निष्कासन गर्दा तोकिने आधारभूत मूल्य, जुन नेपालमा रु. १० कायम गरिएको छ।' }
      ],
      faqs: [
        { q: 'नेपालमा म्युचुअल फन्डको NAV कति समयमा प्रकाशित हुन्छ?', a: 'धितोपत्र बोर्डको नियम अनुसार खुलामुखी योजनाको NAV प्रत्येक दिन क्यापिटलको वेबसाइटमा प्रकाशित हुन्छ। बन्दमुखी योजनाको NAV हरेक साता र विस्तृत मासिक प्रतिवेदन महिना सकिएपछि प्रकाशित हुन्छ।' },
        { q: 'के म्युचुअल फन्डको NAV सुरुवाती १० रुपैयाँभन्दा तल झर्न सक्छ?', a: 'सक्छ। यदि नेप्से परिसूचक लगातार घट्यो र फन्डले किनेका सेयरहरूको मूल्य घट्यो भने NAV १० रुपैयाँभन्दा तल (जस्तै रु. ८.५० वा रु. ९.००) झर्न सक्छ।' },
        { q: 'नेपाली म्युचुअल फन्डहरूको आधिकारिक NAV कहाँ हेर्न सकिन्छ?', a: 'सम्बन्धित क्यापिटलको वेबसाइट (जस्तै niblcapital.com, siddharthacapital.com), सेयर बजारका अनलाइन पोर्टलहरू, र धितोपत्र बोर्डको वेबसाइटमा हेर्न सकिन्छ।' }
      ],
      takeaways: [
        'NAV ले फन्डको कुल सम्पत्तिबाट खर्च कटाएपछिको प्रतिइकाई वास्तविक मूल्यलाई जनाउँछ।',
        'सेयर पोर्टफोलियो नेप्सेको अन्तिम मूल्यमा दैनिक समायोजन हुन्छ भने बैंक मुद्दतीबाट स्थिर ब्याज जोडिन्छ।',
        'धितोपत्र बोर्डले व्यवस्थापन शुल्कमा कडा सीमा लगाएर लगानीकर्ताको पुँजीलाई सुरक्षित बनाएको छ।',
        'कम NAV हुँदैमा फन्ड राम्रो हुँदैन; पोर्टफोलियोमा रहेका कम्पनीहरूको गुणस्तर जाँच्नुपर्छ।',
        'फन्डले लाभांश वितरण गरेपछि वितरण गरिएको बराबर रकमले NAV घट्छ।'
      ]
    }
  },

  // ── H3. STARTING ONLINE SIP VIA CONNECTIPS ────────────────────────
  'starting-online-sip-connectips-nepal': {
    id: 'mf-online-sip-connectips',
    slug: 'starting-online-sip-connectips-nepal',
    categorySlug: 'mutual-funds',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NCHL connectIPS E-Mandate Standards & Merchant Banking Portals', np: 'NCHL connectIPS ई-म्यान्डेट मापदण्ड तथा क्यापिटल पोर्टल कार्यविधि अनुसार समीक्षित' },
    prerequisites: { en: 'Active bank account, Demat (BOID) number, and connectIPS account', np: 'सक्रिय बैंक खाता, डिम्याट (BOID) नम्बर र connectIPS खाता' },
    en: {
      title: 'How to Start an Online Mutual Fund SIP in Nepal via connectIPS',
      oneLineSummary: 'A complete step-by-step guide to setting up automated monthly SIP investing with zero broker visits and zero recurring effort.',
      summaryPoints: [
        'Systematic Investment Plan (SIP) lets you invest a fixed sum (from NPR 1,000/month) into open-ended mutual funds automatically.',
        'Prerequisites are minimal: an active Demat (BOID) number, MeroShare, and a verified connectIPS account.',
        'NCHL connectIPS e-Mandate allows your bank account to be debited automatically on your chosen date (e.g., 1st to 10th of every Nepali month).',
        'Enrolling in Dividend Reinvestment Plan (DREP) during registration ensures all future dividends purchase more units automatically.',
        'Online SIP eliminates emotion, market timing errors, and manual bank transfer friction.'
      ],
      whatIsThis: 'Online Systematic Investment Plan (SIP) in Nepal is a fully automated wealth-building mechanism where an investor authorizes a recurring monthly debit from their bank account via connectIPS to purchase units of an open-ended mutual fund scheme at prevailing NAV. The process is completely paperless and bypasses secondary market stock brokers entirely.',
      whyItMatters: 'Most people fail at investing because of two friction points: emotional hesitation ("is NEPSE going to drop tomorrow?") and operational laziness ("I forgot to transfer money this month"). Automated SIP solves both. By auto-debiting NPR 5,000 on the 2nd of each month right after salary day, you practice rupee-cost averaging - automatically buying more units when NEPSE is down and fewer units when it is up.',
      howItWorks: [
        { step: 1, title: 'Gather Prerequisites (BOID & connectIPS)', desc: 'Ensure you have your 16-digit Demat BOID from your bank/broker and an active connectIPS username linked to your primary salary savings account.' },
        { step: 2, title: 'Register on the Open-Ended Fund Portal', desc: 'Visit the open-ended portal of your chosen merchant bank (e.g., NIBL Ace Capital, Siddhartha Capital, NMB Capital, Sanima Capital). Click "SIP Registration" and input your BOID and personal KYC details.' },
        { step: 3, title: 'Configure SIP Amount, Date & DREP', desc: 'Set your monthly installment (minimum NPR 1,000), choose an installment date (e.g., 5th of every Nepali month), set tenure (e.g., 5, 10, or 20 years), and tick the checkbox for DREP (Dividend Reinvestment).' },
        { step: 4, title: 'Set up connectIPS e-Mandate for Auto-Debit', desc: 'Authenticate with connectIPS. Choose "e-Mandate / Recurring Payment Authorization". Verify with OTP. Your bank account is now linked for automatic hands-off monthly wealth creation!' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '5-Year Wealth Accumulation: Monthly NPR 5,000 SIP at 13% CAGR in Nepal',
        headers: ['Year Completed', 'Total Out-of-Pocket Invested', 'Estimated Portfolio Value (13% CAGR)', 'Wealth Created (Gains)'],
        rows: [
          ['End of Year 1', 'NPR 60,000', 'NPR 64,400', '+NPR 4,400 (Habit established)'],
          ['End of Year 2', 'NPR 1,20,000', 'NPR 1,37,200', '+NPR 17,200'],
          ['End of Year 3', 'NPR 1,80,000', 'NPR 2,20,500', '+NPR 40,500 (Compounding kicks in)'],
          ['End of Year 5', 'NPR 3,00,000', 'NPR 4,20,700', '+NPR 1,20,700 pure profit'],
          ['End of Year 10', 'NPR 6,00,000', 'NPR 12,32,000', '+NPR 6,32,000 (More than double!)']
        ]
      },
      nepalContext: 'Digital financial infrastructure in Nepal transformed in recent years thanks to Nepal Clearing House Limited (NCHL). Prior to connectIPS e-Mandate integration, retail investors had to physically visit merchant bank offices in Naxal or Thapathali to deposit bank cheques each month. Today, all open-ended funds approved by SEBON integrate directly with connectIPS e-Mandate, enabling true friction-free salary deductions for citizens across all 77 districts.',
      practicalScenario: {
        persona: 'Manish, 26, civil engineer in Biratnagar',
        income: 'NPR 52,000 / month salary',
        scenarioText: 'Manish wanted to invest in shares but had no time during working hours (11 AM-3 PM) to watch NEPSE TMS or contact brokers. His monthly savings sat idle in a 3.5% savings account.',
        solutionText: 'Manish opened the NIBL Ace Capital online portal on his smartphone, registered for an SIP in NIBL Sahabhagita Fund with NPR 6,000/month, and authorized an e-Mandate via connectIPS for the 5th of each Nepali month. Now, 10% of his salary is invested like clockwork without touching TMS once.',
        metricHighlight: 'Automated 100% of his monthly equity investing in under 10 minutes'
      },
      formula: {
        name: 'Future Value of Monthly SIP Formula',
        equation: '\\text{FV} = P \\times \\left[ \\frac{(1 + r)^n - 1}{r} \\right] \\times (1 + r)',
        variables: [
          { symbol: 'P', name: 'Monthly Installment Amount', desc: 'E.g., NPR 5,000 per month.' },
          { symbol: 'r', name: 'Periodic Monthly Rate', desc: 'Annual expected return divided by 12 (e.g., 12% / 12 = 0.01).' },
          { symbol: 'n', name: 'Total Number of Months', desc: 'Tenure in years × 12 (e.g., 10 years = 120 months).' }
        ],
        exampleCalculation: 'P = NPR 5,000, Annual Return = 12% (r = 0.01), Tenure = 10 Years (n = 120). FV = 5,000 × [(1.01^120 - 1) / 0.01] × 1.01 = NPR 11,61,695. Total invested = NPR 6,00,000. Net gain = NPR 5,61,695!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Your Monthly SIP Return'
      },
      commonMistakes: [
        { mistake: 'Stopping SIP contributions whenever the NEPSE index enters a bear market.', correct: 'Continue investing aggressively during market crashes to acquire maximum units at discounted NAV.', explanation: 'Market downturns are when SIP builds maximum wealth through rupee-cost averaging.' },
        { mistake: 'Forgetting to link connectIPS e-Mandate and relying on manual monthly transfers.', correct: 'Set up automated e-Mandate so the debit occurs without relying on memory or willpower.', explanation: 'Manual SIPs suffer from an 80%+ drop-out rate within the first 6 months due to forgetfulness.' },
        { mistake: 'Skipping the DREP (Dividend Reinvestment) option during registration.', correct: 'Always select DREP to automatically reinvest cash dividends into new units.', explanation: 'Uninvested cash dividends end up spent on discretionary shopping rather than compounding.' }
      ],
      definitions: [
        { term: 'SIP (Systematic Investment Plan)', full: 'व्यवस्थित लगानी योजना', meaning: 'A disciplined investment approach where a fixed amount of money is invested at regular intervals into a mutual fund.' },
        { term: 'e-Mandate', full: 'विद्युतीय भुक्तानी स्वीकृति', meaning: 'A standing electronic authorization given via connectIPS allowing automated recurring bank debits for SIP installments.' },
        { term: 'Rupee-Cost Averaging', full: 'औसत लागत न्यूनीकरण', meaning: 'The mathematical benefit of buying more units when prices are low and fewer units when prices are high, lowering average purchase cost.' },
        { term: 'Demat (BOID)', full: 'Beneficiary Owner Identification', meaning: 'A 16-digit unique electronic account number used to hold mutual fund units and shares in Nepal.' }
      ],
      faqs: [
        { q: 'What happens if my bank account does not have sufficient balance on the SIP date?', a: 'The automated connectIPS debit will simply fail for that month. Neither the bank nor the capital manager will cancel your SIP or charge a penalty; the debit will resume automatically the next month.' },
        { q: 'Can I increase or decrease my monthly SIP installment later?', a: 'Yes. You can log in to the fund manager\'s online portal anytime to modify your monthly installment amount, pause the SIP temporarily, or cancel it without penalty.' },
        { q: 'What is the minimum monthly amount required to start an SIP in Nepal?', a: 'Most open-ended mutual funds in Nepal permit starting an SIP with as little as NPR 1,000 per month, making it accessible to students and entry-level earners.' }
      ],
      takeaways: [
        'Online SIP automates disciplined wealth accumulation from as low as NPR 1,000 per month.',
        'Linking connectIPS e-Mandate ensures recurring investments happen hands-off right after salary day.',
        'Rupee-cost averaging turns NEPSE market volatility into an advantage for long-term investors.',
        'Always check the DREP option to compound all future dividend payouts into new units.',
        'Never stop your SIP during market dips - bear markets are where your largest future gains are born.'
      ]
    },
    np: {
      title: 'नेपालमा connectIPS मार्फत अनलाइन म्युचुअल फन्ड SIP सुरु गर्ने सजिलो तरिका',
      oneLineSummary: 'ब्रोकर कार्यालय नधाई र कुनै झन्झट विना घरैबाट मासिक रूपमा स्वचालित लगानी (SIP) सुरु गर्ने सम्पूर्ण व्यावहारिक निर्देशिका।',
      summaryPoints: [
        'व्यवस्थित लगानी योजना (SIP) ले खुलामुखी म्युचुअल फन्डमा मासिक न्यूनतम रु. १,००० बाट स्वचालित लगानी गर्ने सुविधा दिन्छ।',
        'आवश्यक पूर्वसर्तहरू एकदमै सामान्य छन्: १६ अंकको डिम्याट (BOID), मेरोसेयर र प्रमाणीकरण भएको connectIPS खाता।',
        'NCHL को connectIPS ई-म्यान्डेटले हरेक महिना तोकिएको गते (जस्तै १ देखि १० गते) बैंक खाताबाट स्वतः रकम काट्ने सुविधा दिन्छ।',
        'दर्ता गर्दा लाभांश पुनः लगानी योजना (DREP) रोज्दा भविष्यमा आउने लाभांशबाट आफैं नयाँ इकाईहरू थपिन्छन्।',
        'अनलाइन SIP ले बजार घट्ने-बढ्ने मानसिक चिन्ता र म्यानुअल पैसा पठाउने झन्झटलाई सधैँका लागि अन्त्य गर्छ।'
      ],
      whatIsThis: 'नेपालमा अनलाइन व्यवस्थित लगानी योजना (Online SIP) भनेको यस्तो स्वचालित प्रविधि हो जहाँ लगानीकर्ताले connectIPS मार्फत आफ्नो बैंक खाताबाट प्रत्येक महिना निश्चित रकम काटेर खुलामुखी म्युचुअल फन्डका इकाईहरू किन्न अनुमति दिन्छन्। यसमा कुनै सेयर ब्रोकर वा कागजी फारमको आवश्यकता पर्दैन।',
      whyItMatters: 'धेरै मानिसहरू दुई कारणले लगानी गर्न सक्दैनन्: डर ("कतै भोलि नेप्से घट्ने त होइन?") र अल्छीपन ("यो महिना क्यापिटलमा पैसा पठाउनै बिर्सिएँ")। स्वचालित SIP ले यी दुवै समस्या समाधान गर्छ। तलब आउनेबित्तिकै महिनाको २ वा ५ गते स्वतः रु. ५,००० काटिँदा बजार घटेको बेला धेरै कित्ता र बढेको बेला थोरै कित्ता किनिन्छ, जसले औसत लागत घटाउँछ।',
      howItWorks: [
        { step: 1, title: 'आवश्यक कागजात तयार गर्नुहोस्', desc: 'आफ्नो १६ अंकको डिम्याट नम्बर (BOID) र तलब आउने बैंक खाता जोडिएको सक्रिय connectIPS युजरनेम तयार राख्नुहोस्।' },
        { step: 2, title: 'क्यापिटलको खुलामुखी पोर्टलमा जानुहोस्', desc: 'आफूले रोजेको मर्चेन्ट बैंकको अनलाइन पोर्टल (जस्तै: NIBL एस क्यापिटल, सिद्धार्थ, एनएमबि वा सानिमा) मा गएर "New SIP Registration" मा क्लिक गर्नुहोस् र डिम्याट नम्बर प्रविष्ट गर्नुहोस्।' },
        { step: 3, title: 'रकम, गते र DREP छनोट गर्नुहोस्', desc: 'मासिक लगानी रकम (न्यूनतम रु. १,०००), किस्ता काटिने गते (जस्तै हरेक महिनाको ५ गते), अवधि, र लाभांश पुनः लगानी (DREP) को बक्समा टिक लगाउनुहोस्।' },
        { step: 4, title: 'connectIPS ई-म्यान्डेट (e-Mandate) स्वीकृत गर्नुहोस्', desc: 'connectIPS मा लगइन गरी अटो-डेबिटको अनुमति (e-Mandate) दिनुहोस् र OTP मार्फत प्रमाणीकरण गर्नुहोस्। अब मासिक लगानी पूर्ण स्वचालित भयो!' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '५ वर्षे सम्पत्ति निर्माण: मासिक रु. ५,००० SIP, १३% वार्षिक औसत प्रतिफलमा',
        headers: ['अवधि (वर्ष)', 'आफ्नो खल्तीबाट लगानी भएको रकम', 'अनुमानित पोर्टफोलियो मूल्य (१३% CAGR)', 'सिर्जना भएको कुल नाफा'],
        rows: [
          ['वर्ष १ को अन्त्य', 'रु. ६०,००,०००', 'रु. ६४,४००', '+रु. ४,४०० (बचतको बानी बस्यो)'],
          ['वर्ष २ को अन्त्य', 'रु. १,२०,०००', 'रु. १,३७,२००', '+रु. १७,२००'],
          ['वर्ष ३ को अन्त्य', 'रु. १,८०,०००', 'रु. २,२०,५००', '+रु. ४०,५०० (चक्रवृद्धि सुरु भयो)'],
          ['वर्ष ५ को अन्त्य', 'रु. ३,००,०००', 'रु. ४,२०,७००', '+रु. १,२०,७०० खुद नाफा'],
          ['वर्ष १० को अन्त्य', 'रु. ६,००,०००', 'रु. १२,३२,०००', '+रु. ६,३२,००० (साँवाभन्दा नाफा बढी!)']
        ]
      },
      nepalContext: 'नेपाल क्लेयरिङ हाउस (NCHL) को connectIPS आएपछि नेपालको डिजिटल लगानीमा क्रान्ति नै आएको छ। विगतमा मासिक SIP गर्न नक्साल वा थापाथलीस्थित क्यापिटलको काउन्टरमै पुगेर बैंक भौचर वा चेक बुझाउनुपर्ने बाध्यता थियो। आज धितोपत्र बोर्डबाट अनुमतिप्राप्त सबै खुलामुखी फन्डहरू connectIPS को e-Mandate सँग जोडिएका छन्, जसले गर्दा कर्णालीदेखि काठमाडौँसम्मका नागरिकले मोबाइलबाटै सजिलै लगानी गर्न सक्छन्।',
      practicalScenario: {
        persona: 'मनिष, २६, विराटनगरका सिभिल इन्जिनियर',
        income: 'मासिक तलब रु. ५२,०००',
        scenarioText: 'मनिषलाई सेयर बजारमा लगानी गर्न मन थियो तर दिनभर साइटमा खटिनुपर्ने भएकाले ११ देखि ३ बजेसम्म नेप्सेको TMS हेर्ने वा ब्रोकरलाई फोन गर्ने फुर्सद थिएन। उनको पैसा बैंकमा ३.५% ब्याजमा थन्किएको थियो।',
        solutionText: 'मनिषले मोबाइलबाटै NIBL एस क्यापिटलको वेबसाइटमा गएर एनआईबिएल सहभागिता फन्डमा मासिक रु. ६,००० को अनलाइन SIP दर्ता गरे र connectIPS ई-म्यान्डेट जोडे। अब हरेक महिनाको ५ गते उनको तलबबाट ६ हजार रुपैयाँ स्वतः लगानी हुन्छ।',
        metricHighlight: '१० मिनेटमै आफ्नो मासिक सेयर लगानीलाई शतप्रतिशत स्वचालित बनाए'
      },
      formula: {
        name: 'मासिक SIP को भविष्यको मूल्य निकाल्ने सूत्र',
        equation: '\\text{FV} = P \\times \\left[ \\frac{(1 + r)^n - 1}{r} \\right] \\times (1 + r)',
        variables: [
          { symbol: 'P', name: 'मासिक किस्ता रकम', desc: 'जस्तै: प्रतिमहिना रु. ५,०००।' },
          { symbol: 'r', name: 'मासिक ब्याजदर', desc: 'वार्षिक अनुमानित दरलाई १२ ले भाग गर्दा आउने दर (जस्तै: १२% / १२ = ०.०१)।' },
          { symbol: 'n', name: 'कुल किस्ता संख्या (महिना)', desc: 'वर्ष × १२ (जस्तै: १० वर्ष = १२० महिना)।' }
        ],
        exampleCalculation: 'P = रु. ५,०००, वार्षिक १२% (r = ०.०१), अवधि = १० वर्ष (n = १२०)। FV = ५,००० × [(१.०१^१२० - १) / ०.०१] × १.०१ = रु. ११,६१,६९५। कुल लगानी = रु. ६ लाख, खुद नाफा = रु. ५,६१,६९५!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'आफ्नो SIP को सम्भावित प्रतिफल निकाल्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'नेप्से परिसूचक घट्न थालेपछि अत्तालिएर मासिक SIP किस्ता रोकिदिनु।', correct: 'बजार घटेको बेला नै SIP को वास्तविक फाइदा हुन्छ किनकि सस्तो NAV मा धेरै इकाई पाइन्छ।', explanation: 'मन्दीको बेला सस्तोमा किनेका इकाईहरूले नै बजार बढ्दा अत्यधिक सम्पत्ति निर्माण गर्छन्।' },
        { mistake: 'connectIPS e-Mandate नजोडी हरेक महिना आफैं पैसा ट्रान्सफर गर्छु भन्नु।', correct: 'अनिवार्य रूपमा ई-म्यान्डेट जोड्नुहोस् ताकि तलब आएकै दिन विना झन्झट पैसा काटोस्।', explanation: 'म्यानुअल रूपमा पैसा पठाउने ८०% भन्दा बढी मानिसहरूले अल्छीपनका कारण ६ महिनाभित्र लगानी छाड्छन्।' },
        { mistake: 'दर्ता गर्दा लाभांश पुनः लगानी योजना (DREP) को विकल्प छाडिदिनु।', correct: 'सधैँ DREP रोज्नुहोस् ताकि नगद लाभांश हातमा आएर खर्च हुनुको साटो नयाँ इकाईमा बदलियोस्।', explanation: 'लाभांश खातामा आउँदा दैनिक खर्चमा सकिन्छ तर DREP मा बस्दा त्यो चक्रवर्ती वृद्धिमा जोडिन्छ।' }
      ],
      definitions: [
        { term: 'व्यवस्थित लगानी योजना (SIP)', full: 'Systematic Investment Plan', meaning: 'नियमित अन्तराल (मासिक वा त्रैमासिक) मा निश्चित रकम म्युचुअल फन्डमा अनुशासित रूपमा लगानी गर्ने विधि।' },
        { term: 'ई-म्यान्डेट (e-Mandate)', full: 'विद्युतीय भुक्तानी म्यान्डेट', meaning: 'बैंक खाताबाट तोकिएको मितिमा स्वचालित रूपमा रकम कट्टा गर्न connectIPS मार्फत दिइने स्थायी स्वीकृति।' },
        { term: 'औसत लागत न्यूनीकरण (Rupee-Cost Averaging)', full: 'लागत औसत गर्ने सिद्धान्त', meaning: 'बजार घट्दा धेरै इकाई र बढ्दा थोरै इकाई खरिद भई समग्रमा खरिद लागत सस्तो हुने गणितीय फाइदा।' },
        { term: 'डिम्याट खाता (BOID)', full: 'Beneficiary Owner ID', meaning: 'सेयर तथा म्युचुअल फन्डका इकाईहरू डिजिटल रूपमा सुरक्षित राख्न प्रयोग गरिने १६ अंकको व्यक्तिगत खाता।' }
      ],
      faqs: [
        { q: 'यदि कुनै महिना खातामा पैसा नभएर SIP किस्ता काटिएन भने के जरिवाना लाग्छ?', a: 'कुनै जरिवाना लाग्दैन र SIP खाता पनि बन्द हुँदैन। त्यो महिनाको कारोबार रद्द हुन्छ र अर्को महिना खातामा पैसा भएपछि स्वतः नियमित रूपमा किस्ता काटिन थाल्छ।' },
        { q: 'के पछि गएर SIP को मासिक रकम बढाउन वा घटाउन मिल्छ?', a: 'मज्जाले मिल्छ। तपाईंले जुनसुकै बेला क्यापिटलको अनलाइन पोर्टलमा लगइन गरेर मासिक रकम थपघट गर्न, केही समयका लागि रोक्न वा बन्द गर्न सक्नुहुन्छ।' },
        { q: 'नेपालमा SIP सुरु गर्न न्यूनतम कति पैसा चाहिन्छ?', a: 'नेपालका अधिकांश खुलामुखी फन्डहरूमा मासिक न्यूनतम रु. १,००० बाटै SIP सुरु गर्न सकिन्छ, जसले गर्दा विद्यार्थी तथा नयाँ जागिरेहरूले पनि सजिलै लगानी गर्न सक्छन्।' }
      ],
      takeaways: [
        'अनलाइन SIP ले मासिक न्यूनतम रु. १,००० बाटै अनुशासित सम्पत्ति निर्माणको जग बसाल्छ।',
        'connectIPS ई-म्यान्डेटले तलब आउनेबित्तिकै मानवीय हस्तक्षेप बिना स्वचालित लगानी सुनिश्चित गर्छ।',
        'औसत लागत न्यूनीकरणले नेप्सेको उतारचढावलाई दीर्घकालीन लगानीकर्ताको फाइदामा बदलिदिन्छ।',
        'लाभांशलाई चक्रवर्ती बनाउन दर्ता गर्दा DREP विकल्प अनिवार्य रूपमा छनोट गर्नुहोस्।',
        'बजार घटेको बेला कहिल्यै SIP नरोक्नुहोस् - मन्दी नै सबैभन्दा ठूलो सम्पत्ति बनाउने अवसर हो।'
      ]
    }
  },

  // ── H4. DIVIDEND REINVESTMENT PLAN (DREP) ─────────────────────────
  'dividend-reinvestment-plan-drep-nepal': {
    id: 'mf-drep-compounding',
    slug: 'dividend-reinvestment-plan-drep-nepal',
    categorySlug: 'mutual-funds',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against SEBON Mutual Fund Dividend Distribution Directives FY 2081/82', np: 'धितोपत्र बोर्ड लाभांश वितरण तथा पुनः लगानी मापदण्ड २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of open-ended mutual funds and cash dividends', np: 'खुलामुखी म्युचुअल फन्ड र नगद लाभांशको आधारभूत जानकारी' },
    en: {
      title: 'Dividend Reinvestment Plan (DREP) in Nepal: The Compounding Supercharger',
      oneLineSummary: 'Convert cash dividends directly into additional mutual fund units at zero fee to turn linear returns into an exponential wealth snowball.',
      summaryPoints: [
        'Dividend Reinvestment Plan (DREP) automatically channels your mutual fund cash dividends into buying new fund units at prevailing NAV.',
        'Units acquired through DREP carry zero entry load, zero broker commission, and zero transaction fees.',
        'Cash dividends deposited into savings accounts are typically frittered away on impulse purchases; DREP keeps capital compounding.',
        'Over a 15-year period, reinvesting dividends can increase your total terminal wealth by 40% to 65% compared to taking cash payouts.',
        'DREP is exclusively available on open-ended mutual fund schemes in Nepal.'
      ],
      whatIsThis: 'A Dividend Reinvestment Plan (DREP - लाभांश पुनः लगानी योजना) is an option offered by open-ended mutual funds in Nepal where your annual cash dividends are automatically used to purchase additional units of the same fund on the allotment date at official NAV, rather than being credited to your bank account as liquid cash.',
      whyItMatters: 'When an investor receives an NPR 15,000 cash dividend from a mutual fund, it lands in a checking account and is almost always spent on groceries, dining, or shopping within days. The compounding cycle is broken. With DREP, that NPR 15,000 buys ~1,250 new units at NAV NPR 12. Next year, those additional units also earn dividends. Over 15-20 years, DREP transforms modest savings into life-changing multi-million rupee wealth.',
      howItWorks: [
        { step: 1, title: 'Enroll in DREP During SIP Registration or Later', desc: 'Tick the DREP box when creating your SIP or submit an online DREP conversion form through the capital manager\'s website anytime.' },
        { step: 2, title: 'Fund Declares Annual Realized Dividends', desc: 'At the end of the fiscal year, the mutual fund board declares a dividend (e.g., 10% cash dividend based on realized portfolio profits).' },
        { step: 3, title: 'Net Dividend Computation After 5% TDS', desc: 'The fund deducts 5% statutory dividend tax for resident individuals. The remaining net dividend is your eligible reinvestment capital.' },
        { step: 4, title: 'Automatic Unit Allotment at Book Closure NAV', desc: 'The net dividend is divided by the official NAV on the allotment date, and the newly generated units are credited directly to your Demat (BOID) with zero fees.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '15-Year Wealth Comparison: NPR 10,000 Monthly SIP With DREP vs Without DREP (12% Return)',
        headers: ['Strategy', 'Total Invested Out-of-Pocket', 'Cumulative Cash Withdrawn', 'Ending Portfolio Value (Yr 15)'],
        rows: [
          ['Without DREP (Cash Dividends Taken)', 'NPR 18,00,000', 'NPR 8,50,000 (spent away)', 'NPR 38,20,000'],
          ['With DREP (100% Reinvested)', 'NPR 18,00,000', 'NPR 0 (reinvested)', 'NPR 50,45,000'],
          ['The DREP Advantage', 'Exact same capital invested', 'Zero lifestyle leakage', '+NPR 12,25,000 Pure Extra Wealth']
        ]
      },
      nepalContext: 'Prior to the introduction of open-ended mutual funds in Nepal, unit-holders in close-ended funds had no legal mechanism to reinvest dividends; cash was mandatorily sent to bank accounts via IPS. Open-ended schemes managed by NIBL Ace Capital, Siddhartha Capital, NMB Capital, and others pioneered DREP under SEBON regulations. Today, over 65% of disciplined SIP investors in Nepal opt for DREP to maximize long-term retirement and child education corpora.',
      practicalScenario: {
        persona: 'Sarita, 35, head nurse in Chitwan',
        income: 'NPR 60,000 / month',
        scenarioText: 'Sarita started an SIP of NPR 8,000/month 4 years ago. Every year, she received an NPR 12,000-18,000 dividend in her bank account during Dashain, which she routinely spent on festival shopping.',
        solutionText: 'Her financial advisor showed her that taking cash dividends was robbing her retirement fund of compounding fuel. She logged into her capital portal and switched her SIP status to DREP. In the next 3 years, her reinvested dividends added 4,200 extra units to her portfolio without spending an extra rupee from her salary.',
        metricHighlight: 'Added 4,200 units for free via automated dividend reinvestment'
      },
      formula: {
        name: 'DREP Additional Units Allotment Formula',
        equation: '\\text{New Units Added} = \\frac{\\text{Gross Dividend} - \\text{5\\% TDS}}{\\text{NAV on Allotment Date}}',
        variables: [
          { symbol: '\\text{Gross Dividend}', name: 'Total Dividend Payable', desc: '\\text{Current Units} \\times \\text{Par Value (NPR 10)} \\times \\text{Dividend \\%}.' },
          { symbol: '\\text{5\\% TDS}', name: 'Statutory Dividend Withholding Tax', desc: '5% flat tax for individual Nepali residents.' },
          { symbol: '\\text{NAV}', name: 'Net Asset Value on Allotment Date', desc: 'Official unit price applied for reinvestment.' }
        ],
        exampleCalculation: 'Holding 20,000 units. Dividend declared = 12% (NPR 1.20/unit). Gross dividend = NPR 24,000. Less 5% TDS (NPR 1,200) = NPR 22,800 net. If NAV on allotment date is NPR 11.40: New Units = 22,800 / 11.40 = 2,000 units added to Demat completely free!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'See Compounding Growth'
      },
      commonMistakes: [
        { mistake: 'Treating cash dividends as "passive income" during wealth accumulation years.', correct: 'Unless you are retired, always choose DREP to let dividends buy more income-producing assets.', explanation: 'Spending dividends in your 20s and 30s dramatically stunts long-term compound growth.' },
        { mistake: 'Assuming DREP incurs entry loads or broker commissions.', correct: 'DREP units are issued directly by the fund manager with zero purchase or brokerage fees.', explanation: 'SEBON regulations prohibit charging fees on units allotted under dividend reinvestment.' },
        { mistake: 'Believing DREP units are not eligible for future dividends.', correct: 'DREP units become full-fledged units immediately, earning their own dividends in subsequent years.', explanation: 'This creates the true "dividend on dividend" compounding snowball effect.' }
      ],
      definitions: [
        { term: 'DREP (Dividend Reinvestment Plan)', full: 'लाभांश पुनः लगानी योजना', meaning: 'A contractual mutual fund facility where declared dividends are automatically converted into new units.' },
        { term: 'Compounding Snowball', full: 'चक्रवर्ती प्रभाव', meaning: 'The exponential growth achieved when investment returns themselves begin generating additional returns.' },
        { term: 'Dividend TDS', full: 'लाभांशमा स्रोतमा कट्टी हुने कर', meaning: 'The mandatory 5% tax deducted at source by the fund manager on dividend distributions to individuals.' },
        { term: 'Book Closure Date', full: 'दर्ता किताब बन्द मिति', meaning: 'The cutoff date established by the fund to determine which unit-holders are entitled to the declared dividend.' }
      ],
      faqs: [
        { q: 'Can I switch from DREP back to cash payout if I need money later?', a: 'Yes. You can submit an online request through the fund manager\'s portal to switch your dividend preference from DREP to Cash Dividend anytime before the fiscal year-end book closure.' },
        { q: 'Do DREP units appear automatically in my MeroShare account?', a: 'Yes. Once the capital manager completes the allotment, the new units are directly deposited into your Demat account and become visible in MeroShare "My Holdings".' },
        { q: 'Is DREP available on close-ended mutual funds listed on NEPSE?', a: 'No. Close-ended funds have a fixed unit capital and cannot legally create new units for DREP; all close-ended dividends must be paid out in cash.' }
      ],
      takeaways: [
        'DREP automatically turns cash dividends into additional units at prevailing NAV with zero fees.',
        'Reinvesting dividends boosts 15-year wealth accumulation by over 40% compared to cash payouts.',
        'It eliminates the human temptation to spend dividend windfalls on temporary lifestyle items.',
        'Newly allotted DREP units immediately begin generating their own future dividends.',
        'DREP is exclusively available on open-ended mutual funds in Nepal.'
      ]
    },
    np: {
      title: 'नेपालमा लाभांश पुनः लगानी योजना (DREP): पुँजीलाई चक्रवर्ती गति दिने अस्त्र',
      oneLineSummary: 'नगद लाभांशलाई विना कुनै शुल्क सिधै नयाँ म्युचुअल फन्ड इकाईमा परिणत गरी आफ्नो सम्पत्तिलाई जादुई चक्रवर्ती गति दिनुहोस्।',
      summaryPoints: [
        'लाभांश पुनः लगानी योजना (DREP) ले म्युचुअल फन्डबाट प्राप्त हुने नगद लाभांशलाई सिधै नयाँ इकाई खरिदमा लगाइदिन्छ।',
        'DREP मार्फत प्राप्त हुने नयाँ इकाईहरूमा कुनै पनि इन्ट्री लोड, ब्रोकर कमिसन वा सेवा शुल्क लाग्दैन।',
        'बचत खातामा आउने नगद लाभांश प्रायः अनाहकका दैनिक खर्चमा सकिन्छ; DREP ले त्यसलाई निरन्तर लगानीमै राखिराख्छ।',
        '१५ वर्षको अवधिमा लाभांश पुनः लगानी गर्दा नगद झिक्नेको तुलनामा कुल सम्पत्ति ४०% देखि ६५% सम्म धेरै बन्न पुग्छ।',
        'नेपालमा DREP सुविधा केवल खुलामुखी (Open-Ended) म्युचुअल फन्डहरूमा मात्र उपलब्ध छ।'
      ],
      whatIsThis: 'लाभांश पुनः लगानी योजना (DREP - Dividend Reinvestment Plan) भनेको खुलामुखी म्युचुअल फन्डहरूले दिने यस्तो सुविधा हो जहाँ वार्षिक रूपमा घोषणा हुने नगद लाभांश लगानीकर्ताको बैंक खातामा पठाउनुको साटो सोही रकम बराबरको थप इकाईहरू प्रचलित NAV मूल्यमा किनेर डिम्याट खातामा जम्मा गरिदिइन्छ।',
      whyItMatters: 'जब लगानीकर्ताले १५ हजार रुपैयाँ नगद लाभांश पाउँछ, त्यो बैंक खातामा आउनेबित्तिकै किनमेल वा खानपिनमा केही दिनमै सकिन्छ। चक्रवर्ती वृद्धिको चक्र त्यहीँ टुट्छ। तर DREP रोज्दा त्यो १५ हजारले १२ रुपैयाँ NAV मा करिब १,२५० कित्ता नयाँ इकाई थपिन्छ। अर्को वर्ष ती नयाँ कित्ताले पनि थप लाभांश कमाउँछन्। १५-२० वर्षमा यसले लाखौँ रुपैयाँको अतिरिक्त सम्पत्ति खडा गर्छ।',
      howItWorks: [
        { step: 1, title: 'SIP दर्ता गर्दा वा पछि DREP रोज्नुहोस्', desc: 'नयाँ SIP सुरु गर्दा DREP को बक्समा टिक लगाउनुहोस् वा पछि क्यापिटलको वेबसाइटबाट अनलाइन फारम भरेर DREP मा परिवर्तन गर्नुहोस्।' },
        { step: 2, title: 'फन्डले वार्षिक नाफाबाट लाभांश घोषणा गर्छ', desc: 'आर्थिक वर्ष सकिएपछि म्युचुअल फन्ड सञ्चालक समितिले नाफाको आधारमा लाभांश (जस्तै १०% नगद लाभांश) घोषणा गर्छ।' },
        { step: 3, title: '५% आयकर कट्टा गरी खुद लाभांश निर्धारण', desc: 'व्यक्तिगत लगानीकर्ताको हकमा लाग्ने ५% लाभांश कर (TDS) कट्टा गरेपछि बाँकी रहेको रकम पुनः लगानीका लागि योग्य हुन्छ।' },
        { step: 4, title: 'बुक क्लोजको NAV मा स्वतः इकाई बाँडफाँट', desc: 'खुद लाभांशलाई बाँडफाँट मितिको आधिकारिक NAV ले भाग गरी नयाँ इकाईहरू निःशुल्क रूपमा सिधै तपाईंको डिम्याट खातामा पठाइन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '१५ वर्षे सम्पत्ति तुलना: मासिक रु. १०,००० SIP, DREP सहित vs DREP बिना (१२% वार्षिक प्रतिफल)',
        headers: ['रणनीति / विधि', 'आफ्नो खल्तीबाट लगानी भएको रकम', 'हातमा झिकिएको कुल नगद लाभांश', '१५ वर्षपछिको अन्तिम पोर्टफोलियो मूल्य'],
        rows: [
          ['DREP बिना (नगद लाभांश खर्च गर्दा)', 'रु. १८,००,०००', 'रु. ८,५०,००० (खर्च भयो)', 'रु. ३८,२०,०००'],
          ['DREP सहित (१००% पुनः लगानी गर्दा)', 'रु. १८,००,०००', 'रु. ० (पूरै पुँजी वृद्धिमा)', 'रु. ५०,४५,०००'],
          ['DREP बाट भएको वास्तविक फाइदा', 'उही सुरुवाती लगानी रकम', 'पैसा बाहिर चुहावट भएन', '+रु. १२,२५,००० अतिरिक्त खुद सम्पत्ति']
        ]
      },
      nepalContext: 'नेपालमा खुलामुखी म्युचुअल फन्ड आउनुअघि बन्दमुखी फन्डका लगानीकर्तालाई लाभांश पुनः लगानी गर्ने कुनै कानुनी बाटो थिएन; अनिवार्य रूपमा बैंक खातामै पैसा पठाउनुपर्थ्यो। एनआईबिएल एस क्यापिटल, सिद्धार्थ, एनएमबि लगायतका क्यापिटलहरूले खुलामुखी फन्डमार्फत DREP सुरु गरे। आज नेपालमा नियमित SIP गर्ने ६५% भन्दा बढी सचेत लगानीकर्ताहरूले अवकाश र बालबच्चाको भविष्यका लागि DREP नै रोज्ने गरेका छन्।',
      practicalScenario: {
        persona: 'सरिता, ३५, चितवनकी सिनियर स्टाफ नर्स',
        income: 'मासिक तलब रु. ६०,०००',
        scenarioText: 'सरिताले ४ वर्ष अघिदेखि महिनाको रु. ८,००० SIP गर्दै आएकी थिइन्। हरेक वर्ष दसैँको बेला उनको खातामा १२ देखि १८ हजार लाभांश आउँथ्यो, जुन दसैँको किनमेलमै सकिन्थ्यो।',
        solutionText: 'वित्तीय सल्लाहकारले उनलाई नगद लाभांश खर्च गर्दा दीर्घकालीन सम्पत्ति आधा घट्ने कुरा सम्झाए। उनले क्यापिटलको पोर्टलमा गएर DREP रोजिन्। त्यसपछिका ३ वर्षमा पुनः लगानी भएको लाभांशबाटै उनको खातामा तलबबाट एक रुपैयाँ थप नगरी ४,२०० कित्ता नयाँ इकाई थपिए।',
        metricHighlight: 'लाभांश पुनः लगानी गरेर बिना अतिरिक्त लगानी ४,२०० इकाई निःशुल्क थपिन्'
      },
      formula: {
        name: 'DREP थप इकाई बाँडफाँट सूत्र',
        equation: '\\text{New Units Added} = \\frac{\\text{Gross Dividend} - \\text{5\\% TDS}}{\\text{NAV on Allotment Date}}',
        variables: [
          { symbol: '\\text{Gross Dividend}', name: 'कुल लाभांश रकम', desc: '\\text{कायम कित्ता} \\times \\text{अंकित मूल्य (रु. १०)} \\times \\text{लाभांश \\%}।' },
          { symbol: '\\text{5\\% TDS}', name: 'स्रोतमा कट्टी हुने लाभांश कर', desc: 'नेपाली नागरिकका लागि लाग्ने ५% स्थिर कर।' },
          { symbol: '\\text{NAV}', name: 'बाँडफाँट मितिको खुद सम्पत्ति मूल्य', desc: 'नयाँ इकाई जारी गर्न प्रयोग गरिने दर।' }
        ],
        exampleCalculation: '२०,००० इकाई भएको अवस्थामा १२% (प्रतिइकाई रु. १.२०) लाभांश घोषणा भयो। कुल लाभांश = रु. २४,०००। ५% TDS (रु. १,२००) कटाउँदा = रु. २२,८०० खुद। यदि NAV रु. ११.४० छ भने: नयाँ थप कित्ता = २२,८०० / ११.४० = २,००० कित्ता निःशुल्क डिम्याटमा थपियो!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'चक्रवर्ती वृद्धि हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'सम्पत्ति कमाउने उमेर (२०-४० वर्ष) मै लाभांशलाई खर्च गर्ने आम्दानी सम्झनु।', correct: 'अवकाश नहुन्जेल सधैँ DREP रोजेर लाभांशबाट थप सम्पत्ति सिर्जना गर्न दिनुहोस्।', explanation: 'सुरुवाती वर्षहरूमा लाभांश खर्च गर्दा दीर्घकालीन पुँजी वृद्धिमा ठूलो धक्का लाग्छ।' },
        { mistake: 'DREP मार्फत आउने इकाईमा ब्रोकर शुल्क वा इन्ट्री लोड लाग्छ भन्ठान्नु।', correct: 'DREP का इकाईहरू शतप्रतिशत निःशुल्क रूपमा क्यापिटलले जारी गर्दछ।', explanation: 'धितोपत्र बोर्डको नियमावलीले लाभांश पुनः लगानी गर्दा कुनै पनि शुल्क लिन निषेध गरेको छ।' },
        { mistake: 'DREP बाट थपिएका नयाँ कित्ताले भविष्यमा लाभांश पाउँदैनन् सोच्नु।', correct: 'नयाँ इकाईहरू खातामा आउनासाथ पूर्ण इकाई सरह हुन्छन् र अर्को वर्ष आफ्नै लाभांश कमाउँछन्।', explanation: 'यसले "लाभांशमाथि लाभांश" थपिने वास्तविक चक्रवर्ती जादु सिर्जना गर्छ।' }
      ],
      definitions: [
        { term: 'लाभांश पुनः लगानी (DREP)', full: 'Dividend Reinvestment Plan', meaning: 'म्युचुअल फन्डले बाँडेको नगद लाभांशबाट स्वतः थप इकाई खरिद गरी पोर्टफोलियो बढाउने योजना।' },
        { term: 'चक्रवर्ती प्रभाव (Compounding)', full: 'नाफामाथि थप नाफा', meaning: 'लगानीबाट आएको प्रतिफल पुनः लगानी हुँदा समयसँगै सम्पत्ति गुणात्मक गतिमा बढ्ने प्रक्रिया।' },
        { term: 'लाभांश कर (Dividend TDS)', full: 'स्रोतमा कट्टा हुने अग्रिम कर', meaning: 'फन्डले लाभांश बाँड्दा नेपाल सरकारको नियम अनुसार अग्रिम रूपमा काट्ने ५% कर।' },
        { term: 'बुक क्लोज मिति (Book Closure)', full: 'दर्ता किताब बन्द हुने दिन', meaning: 'घोषित लाभांश पाउनका लागि योग्य इकाईधनीहरूको अन्तिम नामावली कायम गर्ने आधिकारिक मिति।' }
      ],
      faqs: [
        { q: 'के पछि पैसा आवश्यक परेमा DREP बाट फेरि नगद लाभांशमा फर्कन मिल्छ?', a: 'मज्जाले मिल्छ। आर्थिक वर्षको बुक क्लोज हुनुअघि क्यापिटलको अनलाइन पोर्टलमा गएर जुनसुकै बेला DREP हटाएर Cash Dividend रोज्न सकिन्छ।' },
        { q: 'DREP बाट थपिएका नयाँ इकाईहरू मेरोसेयर (MeroShare) मा देखिन्छन्?', a: 'हो। क्यापिटलले बाँडफाँट प्रक्रिया पूरा गरेपछि नयाँ इकाईहरू सिधै तपाईंको डिम्याट खातामा जम्मा हुन्छन् र मेरोसेयरको "My Holdings" मा देखिन्छन्।' },
        { q: 'के नेप्सेमा कारोबार हुने बन्दमुखी फन्डहरूमा पनि DREP सुविधा पाइन्छ?', a: 'पाइँदैन। बन्दमुखी फन्डको पुँजी निश्चित हुने भएकाले नयाँ इकाई थप्न कानुनी रूपमा मिल्दैन; त्यसैले यसको लाभांश अनिवार्य रूपमा नगद नै लिनुपर्छ।' }
      ],
      takeaways: [
        'DREP ले नगद लाभांशलाई विना कुनै शुल्क प्रचलित NAV मा थप इकाईमा बदलिदिन्छ।',
        'लाभांश पुनः लगानी गर्दा १५ वर्षको अवधिमा कुल सम्पत्ति ४०% भन्दा बढीले वृद्धि हुन्छ।',
        'यसले हातमा आएको लाभांश अनावश्यक खर्चमा खेर जाने मानवीय कमजोरीलाई रोक्छ।',
        'DREP बाट थपिएका इकाईहरूले अर्को वर्षदेखि आफ्नै नयाँ लाभांश कमाउन थाल्छन्।',
        'यो सुविधा नेपालमा केवल खुलामुखी (Open-Ended) म्युचुअल फन्डहरूमा मात्र उपलब्ध छ।'
      ]
    }
  },

  // ── H5. SYSTEMATIC WITHDRAWAL PLAN (SWP) ─────────────────────────
  'systematic-withdrawal-plan-swp-pension': {
    id: 'mf-swp-retirement',
    slug: 'systematic-withdrawal-plan-swp-pension',
    categorySlug: 'mutual-funds',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against SEBON Mutual Fund Redemption Guidelines & Retirement Planning Models', np: 'धितोपत्र बोर्ड इकाई फिर्ता निर्देशिका तथा अवकाश योजना मापदण्ड २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of mutual fund NAV and retirement planning concepts', np: 'म्युचुअल फन्ड NAV र अवकाश योजनाको आधारभूत अवधारणा' },
    en: {
      title: 'Systematic Withdrawal Plan (SWP) in Nepal: Create Your Own Monthly Pension',
      oneLineSummary: 'Turn your accumulated mutual fund corpus into a guaranteed, tax-efficient monthly paycheck while the remaining capital keeps growing.',
      summaryPoints: [
        'Systematic Withdrawal Plan (SWP) is the exact reverse of an SIP: it automatically redeems a fixed amount each month to provide reliable cash flow.',
        'Unlike bank fixed deposits where the principal sits idle and loses purchasing power to inflation, SWP keeps remaining capital invested in a growth portfolio.',
        'A conservative 6% to 7% annual SWP withdrawal rate allows your principal corpus to remain intact or even expand over a 20-year retirement.',
        'Capital gains tax (5% or 7.5%) applies only on the realized profit portion of each monthly withdrawal, making SWP far more tax-efficient than FD interest.',
        'SWP gives private-sector and self-employed professionals a predictable, self-funded monthly pension in Nepal.'
      ],
      whatIsThis: 'A Systematic Withdrawal Plan (SWP) is an automated redemption facility in open-ended mutual funds that redeems a fixed monetary sum (e.g., NPR 30,000 per month) from your accumulated corpus on a chosen date and deposits it directly into your bank account, while leaving the remaining balance invested to generate market returns.',
      whyItMatters: 'Retirees in Nepal traditionally dump their entire gratuity, provident fund (EPF), and life insurance payouts into bank fixed deposits (FDs). When interest rates crash from 11% to 6% (as happened in 2023-2024), their monthly income collapses by nearly half while inflation drives grocery bills up. SWP solves this by pairing steady cash flow with market-linked asset growth, protecting retirees from both interest rate volatility and inflation.',
      howItWorks: [
        { step: 1, title: 'Accumulate or Deposit a Lump-Sum Corpus', desc: 'Build an open-ended mutual fund corpus through 15-20 years of SIP or deposit a lump-sum retirement payout (e.g., NPR 50 Lakh to 1 Crore).' },
        { step: 2, title: 'Determine a Sustainable Withdrawal Rate (SWR)', desc: 'Adopt a conservative 6%-7% annual withdrawal rate. On an NPR 60 Lakh corpus, withdrawing 6% equals NPR 30,000 per month (NPR 3,60,000/year).' },
        { step: 3, title: 'Configure Automated Monthly SWP Mandate', desc: 'Submit an SWP mandate on the capital manager\'s portal: specify the monthly withdrawal amount, bank account details, and execution date (e.g., 1st of every month).' },
        { step: 4, title: 'Automatic Monthly Credit with Remaining Growth', desc: 'Each month, the AMC redeems the exact number of units needed to generate NPR 30,000 at prevailing NAV. If the portfolio earns 10%-12% and you withdraw 6%, your corpus continues growing!' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '20-Year Retirement Simulation: NPR 50 Lakh Corpus Withdrawing NPR 25,000/mo (6% SWP) at 10% Portfolio CAGR',
        headers: ['Retirement Milestone', 'Monthly Cash Received', 'Cumulative Cash Received', 'Remaining Corpus Balance'],
        rows: [
          ['Year 1', 'NPR 25,000 / month', 'NPR 3,00,000', 'NPR 51,80,000 (Corpus grew!)'],
          ['Year 5', 'NPR 25,000 / month', 'NPR 15,00,000', 'NPR 60,40,000'],
          ['Year 10', 'NPR 25,000 / month', 'NPR 30,00,000', 'NPR 76,80,000'],
          ['Year 15', 'NPR 25,000 / month', 'NPR 45,00,000', 'NPR 1,03,50,000 (Doubled!)'],
          ['Year 20', 'NPR 25,000 / month', 'NPR 60,00,000 Total Cash', 'NPR 1,46,00,000 Left for Heirs']
        ]
      },
      nepalContext: 'In Nepal, government employees receive state-backed pensions, but private-sector professionals, business owners, and gig economy workers have no guaranteed lifelong income after retirement. While the Social Security Fund (SSF) provides an annuity model, open-ended mutual fund SWPs provide total liquidity control: unlike annuities where the principal is forfeited upon death, an SWP preserves the entire underlying corpus for your children and legal heirs.',
      practicalScenario: {
        persona: 'Kul Prasad, 59, retiring bank officer in Butwal',
        income: 'Received NPR 70 Lakh retirement gratuity & EPF',
        scenarioText: 'Kul Prasad was about to place all NPR 70 Lakh into commercial bank fixed deposits at 7% interest (giving NPR 40,800/month before tax). He worried that if bank FD rates dropped to 5.5%, his household expenses would outstrip his interest.',
        solutionText: 'He kept NPR 15 Lakh in bank FDs for short-term liquidity and invested NPR 55 Lakh in an open-ended mutual fund with an SWP mandate of NPR 30,000/month (6.5% annual withdrawal). Over the next 4 years, he received NPR 30,000 like clockwork every single month, while his remaining mutual fund corpus grew to NPR 63 Lakh.',
        metricHighlight: 'Generated steady monthly income while growing principal by NPR 8 Lakh'
      },
      formula: {
        name: 'Sustainable Monthly SWP Formula',
        equation: '\\text{Monthly Pension} = \\frac{\\text{Total Corpus} \\times \\text{SWR}}{12}',
        variables: [
          { symbol: '\\text{Total Corpus}', name: 'Retirement Capital', desc: 'Accumulated balance in open-ended mutual fund.' },
          { symbol: '\\text{SWR}', name: 'Sustainable Withdrawal Rate', desc: 'Recommended 5% to 7% per year to preserve capital forever.' }
        ],
        exampleCalculation: 'Corpus = NPR 60,00,000. Safe SWR = 6.0% (0.06). Annual Withdrawal = 60,00,000 × 0.06 = NPR 3,60,000. Monthly Pension = 3,60,000 / 12 = NPR 30,00,000 / 100 = NPR 30,000 per month. If the fund earns 10% CAGR, your net growth is 4% (NPR 2.4 Lakh added each year)!',
        shortcutCalcSlug: 'calculators/swp',
        shortcutCalcName: 'Simulate Monthly SWP Cash Flow'
      },
      commonMistakes: [
        { mistake: 'Withdrawing an aggressive rate like 12% to 15% annually during early retirement.', correct: 'Cap withdrawal rate at 6%-7% to withstand prolonged NEPSE bear markets.', explanation: 'High withdrawal rates during a down market deplete units too rapidly, causing premature portfolio exhaustion.' },
        { mistake: 'Relying 100% on bank fixed deposits and suffering severe interest rate cuts.', correct: 'Blend bank FDs for 2 years of immediate cash needs with an SWP mutual fund for long-term growth.', explanation: 'Bank FD rates fluctuate widely in Nepal; an SWP portfolio combats long-term inflation.' },
        { mistake: 'Ignoring Capital Gains Tax holding periods on redeemed units.', correct: 'Ensure units redeemed have been held for more than 365 days to pay the lower 5% CGT rather than 7.5%.', explanation: 'Redeeming long-term units saves 33% on capital gains tax.' }
      ],
      definitions: [
        { term: 'SWP (Systematic Withdrawal Plan)', full: 'व्यवस्थित फिर्ता योजना', meaning: 'An automated facility to withdraw a predetermined sum regularly from a mutual fund while leaving the rest invested.' },
        { term: 'Sustainable Withdrawal Rate (SWR)', full: 'दिगो फिर्ता दर', meaning: 'The percentage of retirement savings that can be withdrawn each year without running out of money before death.' },
        { term: 'Capital Exhaustion', full: 'पुँजी रित्तिने जोखिम', meaning: 'The danger of completely running out of invested capital due to excessive withdrawals or poor investment returns.' },
        { term: 'Annuity Alternative', full: 'पेन्सन विकल्प', meaning: 'Using an investment withdrawal plan to generate recurring income while maintaining full ownership of the principal.' }
      ],
      faqs: [
        { q: 'Can I stop, increase, or pause my monthly SWP in Nepal?', a: 'Yes. You retain 100% control over your funds. You can log into the capital portal to change the monthly amount, pause withdrawals if you receive other income, or withdraw a larger emergency lump sum anytime.' },
        { q: 'What happens to my SWP mutual fund corpus after my death?', a: 'The entire remaining corpus passes seamlessly to your designated nominee (इच्छापत्र / हकवाला) registered in your Demat account, unlike insurance annuities where principal is often lost.' },
        { q: 'How is SWP taxed compared to Bank Fixed Deposit interest in Nepal?', a: 'Bank FD interest is taxed at 5% on the entire interest amount every quarter. In SWP, only the net capital gain portion of the redeemed units is taxed at 5% (long-term), making SWP significantly more tax-efficient.' }
      ],
      takeaways: [
        'SWP transforms your mutual fund wealth into a reliable, automated monthly pension.',
        'A conservative 6% to 7% withdrawal rate allows your principal to keep growing throughout retirement.',
        'Unlike bank fixed deposits, SWP beats inflation by keeping capital invested in productive equities and debt.',
        'You retain 100% ownership of your principal corpus, which passes to your family heirs upon death.',
        'SWP is the ultimate financial freedom tool for private-sector workers and self-employed professionals in Nepal.'
      ]
    },
    np: {
      title: 'नेपालमा व्यवस्थित फिर्ता योजना (SWP): आफ्नै मासिक पेन्सन आफैं बनाउने तरिका',
      oneLineSummary: 'आफ्नो जम्मा भएको म्युचुअल फन्ड पुँजीबाट हरेक महिना ग्यारेन्टी पेन्सन लिनुहोस् र बाँकी रकमलाई बजारमा निरन्तर बढ्न दिनुहोस्।',
      summaryPoints: [
        'व्यवस्थित फिर्ता योजना (SWP) ठीक SIP को उल्टो हो: यसले हरेक महिना निश्चित रकम झिकेर नियमित आम्दानी (पेन्सन) दिन्छ।',
        'बैंकको मुद्दती निक्षेप जस्तो यसमा साँवा थन्किएर महँगीले घट्दैन; बाँकी पुँजी बजारमा लगानी भई निरन्तर वृद्धि भइरहन्छ।',
        'वार्षिक ६% देखि ७% को सुरक्षित फिर्ता दर (SWR) अपनाउँदा २० वर्षे अवकाश जीवनभर साँवा सुरक्षित रहनुका साथै अझ बढ्न सक्छ।',
        'पुँजीगत लाभकर (५% वा ७.५%) प्रत्येक महिना झिकिएको नाफाको अंशमा मात्र लाग्ने हुँदा यो मुद्दतीको ब्याजभन्दा धेरै कर-मैत्री हुन्छ।',
        'निजी क्षेत्रका जागिरे र व्यवसायीहरूका लागि SWP आफ्नै बलबुतामा मासिक पेन्सन सिर्जना गर्ने अचुक उपाय हो।'
      ],
      whatIsThis: 'व्यवस्थित फिर्ता योजना (SWP - Systematic Withdrawal Plan) भनेको खुलामुखी म्युचुअल फन्डहरूले दिने यस्तो स्वचालित सुविधा हो जसले तपाईंको जम्मा भएको कुल पुँजीबाट प्रत्येक महिना तोकिएको रकम (जस्तै रु. ३०,०००) झिकेर बैंक खातामा पठाइदिन्छ र बाँकी पूरै रकमलाई कोषमै बढेर बस्न दिन्छ।',
      whyItMatters: 'नेपालमा अवकाश पाएका नागरिकहरूले उपदान र सञ्चय कोषको पूरै पैसा बैंकको मुद्दती निक्षेपमा राख्ने गर्छन्। जब बैंकको ब्याजदर ११% बाट घटेर ६% मा झर्छ (जस्तै २०८०/८१ मा भयो), उनीहरूको मासिक आम्दानी आधा घट्छ तर बजारको महँगी उस्तै रहन्छ। SWP ले यो समस्यालाई सदाका लागि हल गर्छ - यसले मासिक स्थिर खर्च पनि दिन्छ र बाँकी पैसा सेयर बजारमा बढेर महँगीलाई जित्छ।',
      howItWorks: [
        { step: 1, title: 'एकमुष्ट पुँजी जम्मा वा लगानी गर्नुहोस्', desc: '१५-२० वर्ष SIP गरेर कोष तयार गर्नुहोस् वा अवकाशपछि पाएको उपदान/सञ्चय कोषको रकम (जस्तै रु. ५० लाख देखि १ करोड) खुलामुखी फन्डमा राख्नुहोस्।' },
        { step: 2, title: 'दिगो फिर्ता दर (Safe SWR) तय गर्नुहोस्', desc: 'वार्षिक ६% देखि ७% को सुरक्षित फिर्ता दर रोज्नुहोस्। ६० लाखको पुँजीमा ६% भनेको वार्षिक रु. ३,६०,००० अर्थात् मासिक रु. ३०,००० हुन आउँछ।' },
        { step: 3, title: 'क्यापिटलको पोर्टलबाट SWP म्यान्डेट भर्नुहोस्', desc: 'अनलाइन पोर्टलमा मासिक झिक्ने रकम (रु. ३०,०००), पैसा आउने बैंक खाता र महिनाको कुन गते (जस्तै १ गते) पैसा चाहिने हो उल्लेख गर्नुहोस्।' },
        { step: 4, title: 'मासिक पेन्सन र साँवा वृद्धि सँगसँगै', desc: 'प्रत्येक महिना क्यापिटलले रु. ३०,००० बराबरको इकाई प्रचलित NAV मा बिक्री गरी बैंक खातामा पठाइदिन्छ। यदि फन्डले १०-१२% कमाउँछ र तपाईंले ६% झिक्नुहुन्छ भने साँवा निरन्तर बढिरहन्छ!' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '२० वर्षे अवकाश जीवन: रु. ५० लाख पुँजीबाट मासिक रु. २५,००० (६% SWP) झिक्दा (१०% वार्षिक पोर्टफोलियो प्रतिफल)',
        headers: ['अवकाश कोसेढुङ्गा', 'मासिक प्राप्त नगद रकम', 'हात परिसकेको कुल पेन्सन रकम', 'फन्डमा बाँकी रहेको साँवा पुँजी'],
        rows: [
          ['वर्ष १ को अन्त्य', 'रु. २५,००० / महिना', 'रु. ३,००,०००', 'रु. ५१,८०,००० (साँवा उल्टै बढ्यो!)'],
          ['वर्ष ५ को अन्त्य', 'रु. २५,००० / महिना', 'रु. १५,००,०००', 'रु. ६०,४०,०००'],
          ['वर्ष १० को अन्त्य', 'रु. २५,००० / महिना', 'रु. ३०,००,०००', 'रु. ७६,८०,०००'],
          ['वर्ष १५ को अन्त्य', 'रु. २५,००० / महिना', 'रु. ४५,००,०००', 'रु. १,०३,५०,००० (पुँजी दोब्बर!)'],
          ['वर्ष २० को अन्त्य', 'रु. २५,००० / महिना', 'रु. ६०,००,००० कुल पेन्सन', 'रु. १,४६,००,००० छोराछोरीका लागि बाँकी']
        ]
      },
      nepalContext: 'नेपालमा निजामती कर्मचारीले सरकारी पेन्सन पाउँछन् तर निजी क्षेत्र, गैरसरकारी संस्था, वैदेशिक रोजगारी र व्यापार गर्ने नागरिकका लागि राज्यले आजीवन पेन्सन दिने ग्यारेन्टी छैन। सामाजिक सुरक्षा कोष (SSF) को निश्चित ढाँचा भए पनि खुलामुखी म्युचुअल फन्डको SWP ले पूरै स्वतन्त्रता दिन्छ: पेन्सन योजनामा मृत्युपछि साँवा जफत हुने डर हुन्छ तर SWP मा बाँकी रहेको सम्पूर्ण करोडौँको सम्पत्ति आफ्ना सन्तान वा हकवालाले पाउँछन्।',
      practicalScenario: {
        persona: 'कुलप्रसाद, ५९, बुटवलका अवकाशप्राप्त बैंक अधिकृत',
        income: 'अवकाशमा उपदान र सञ्चय कोषबाट रु. ७० लाख प्राप्त',
        scenarioText: 'कुलप्रसादले ७० लाख नै बैंक मुद्दतीमा ७% ब्याजमा (कर कटाएर मासिक करिब रु. ३८,०००) राख्ने सोचेका थिए। तर भोलि बैंकको ब्याज घटेर ५% मा झर्यो भने घरखर्च धान्न गाह्रो हुने चिन्ता उनलाई थियो।',
        solutionText: 'उनले आपतकालीन खर्चका लागि १५ लाख मुद्दतीमै राखे र बाँकी ५५ लाख खुलामुखी फन्डमा राखेर मासिक रु. ३०,००० को SWP म्यान्डेट दिए। विगत ४ वर्षमा उनले हरेक महिना रु. ३०,००० पेन्सन जस्तै पाए भने उनको ५५ लाख बढेर ६३ लाख पुग्यो।',
        metricHighlight: 'मासिक पेन्सन पनि पाए र मूल पुँजी ८ लाख रुपैयाँले बढाए'
      },
      formula: {
        name: 'दिगो मासिक पेन्सन (SWP) सूत्र',
        equation: '\\text{Monthly Pension} = \\frac{\\text{Total Corpus} \\times \\text{SWR}}{12}',
        variables: [
          { symbol: '\\text{Total Corpus}', name: 'जम्मा भएको कुल अवकाश पुँजी', desc: 'खुलामुखी म्युचुअल फन्डमा रहेको मौज्दात रकम।' },
          { symbol: '\\text{SWR}', name: 'दिगो फिर्ता दर (Safe Rate)', desc: 'साँवा सधैँ जोगाइराख्न वार्षिक ५% देखि ७% को सीमा।' }
        ],
        exampleCalculation: 'कुल पुँजी = रु. ६०,००,०००। सुरक्षित दर = ६% (०.०६)। वार्षिक झिक्ने रकम = ६०,००,००० × ०.०६ = रु. ३,६०,०००। मासिक पेन्सन = ३,६०,००० / १२ = रु. ३०,००० प्रतिमहिना। यदि फन्डले वार्षिक १०% कमाएमा खर्च कटाएर पनि हरेक वर्ष ४% (रु. २.४ लाख) ले साँवा बढ्छ!',
        shortcutCalcSlug: 'calculators/swp',
        shortcutCalcName: 'आफ्नो मासिक SWP पेन्सन हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'सुरुवाती वर्षहरूमै वार्षिक १२% देखि १५% जस्तो चर्को दरमा पैसा झिक्न थाल्नु।', correct: 'नेप्सेको मन्दीबाट जोगिन वार्षिक ६% देखि ७% भन्दा बढी रकम नझिक्नुहोस्।', explanation: 'बजार घटेको बेला धेरै पैसा झिक्दा इकाईहरू तीव्र गतिमा घट्छन् र पुँजी चाँडै रित्तिने जोखिम हुन्छ।' },
        { mistake: 'मुद्दती निक्षेपको ब्याजदरको उतारचढावलाई बेवास्ता गरी सबै पैसा बैंकमा थन्क्याउनु।', correct: '२ वर्षको खर्च बैंक मुद्दतीमा र बाँकी दीर्घकालीन पुँजी SWP म्युचुअल फन्डमा सन्तुलन मिलाउनुहोस्।', explanation: 'मुद्दतीको ब्याज घट्दा आम्दानी घट्छ तर म्युचुअल फन्डले महँगीलाई जितेर दीर्घकालीन सुरक्षा दिन्छ।' },
        { mistake: 'इकाई बिक्री गर्दा लाग्ने पुँजीगत लाभकर (CGT) को समयसीमा ख्याल नगर्नु।', correct: '१ वर्षभन्दा बढी समय राखिएका इकाईहरू झिकेर ७.५% को साटो सस्तो ५% लाभकर तिर्नुहोस्।', explanation: 'दीर्घकालीन इकाई बिक्री गर्दा करमा सोझै ३३% बचत हुन्छ।' }
      ],
      definitions: [
        { term: 'व्यवस्थित फिर्ता योजना (SWP)', full: 'Systematic Withdrawal Plan', meaning: 'म्युचुअल फन्डमा बाँकी रकम लगानीमै राखेर नियमित रूपमा तोकिएको रकम पेन्सन सरह झिक्ने सुविधा।' },
        { term: 'दिगो फिर्ता दर (SWR)', full: 'Sustainable Withdrawal Rate', meaning: 'आफ्नो जीवनकालभर साँवा नसकिने गरी वार्षिक रूपमा सुरक्षित रूपमा झिक्न सकिने प्रतिशत।' },
        { term: 'पुँजी रित्तिने जोखिम (Capital Depletion)', full: 'Corpus Exhaustion Risk', meaning: 'अत्यधिक खर्च वा बजार घाटाका कारण अवकाशको पुँजी समयभन्दा अगावै समाप्त हुने खतरा।' },
        { term: 'पेन्सन विकल्प (Annuity Alternative)', full: 'स्वनिर्मित पेन्सन प्रणाली', meaning: 'साँवाको स्वामित्व आफ्नै हातमा राख्दै आजीवन मासिक आम्दानी प्राप्त गर्ने आधुनिक वित्तीय विधि।' }
      ],
      faqs: [
        { q: 'के नेपालमा SWP को मासिक रकम पछि बढाउन वा रोक्न मिल्छ?', a: 'मज्जाले मिल्छ। पैसा तपाईंको आफ्नै नियन्त्रणमा हुने भएकाले जुनसुकै बेला मासिक रकम थपघट गर्न, रोक्न वा चाहेको बेला पूरै एकमुष्ट रकम फिर्ता लिन सकिन्छ।' },
        { q: 'लगानीकर्ताको निधन भएमा SWP को बाँकी पैसा के हुन्छ?', a: 'इन्स्योरेन्सको पेन्सन जस्तो साँवा जफत हुँदैन; डिम्याट खातामा तोकिएको आधिकारिक हकवाला वा परिवारले बाँकी रहेको सम्पूर्ण रकम कानुनी रूपमा पाउँछन्।' },
        { q: 'नेपालमा मुद्दतीको ब्याज र SWP मा कुनमा कम कर लाग्छ?', a: 'मुद्दतीमा बैंकले पूरै ब्याज रकममा ५% कर काट्छ। SWP मा भने झिकिएको साँवामा कर लाग्दैन, केवल त्यसमा भएको खुद नाफाको अंशमा मात्र ५% लाभकर लाग्ने हुँदा यो धेरै कर-मैत्री हुन्छ।' }
      ],
      takeaways: [
        'SWP ले तपाईंको म्युचुअल फन्डको बचतलाई भरपर्दो मासिक पेन्सनमा रूपान्तरण गरिदिन्छ।',
        'वार्षिक ६% देखि ७% सम्म झिक्दा बाँकी पुँजी बजारमा निरन्तर वृद्धि भइरहन्छ।',
        'बैंक मुद्दतीको तुलनामा यसले महँगीलाई जितेर दीर्घकालीन आर्थिक सुरक्षा दिन्छ।',
        'साँवाको शतप्रतिशत स्वामित्व आफ्नै हातमा रहन्छ र मृत्युपछि सन्तानमा सुरक्षित हस्तान्तरण हुन्छ।',
        'निजी क्षेत्रका कर्मचारी, व्यवसायी र स्वरोजगारका लागि यो आर्थिक स्वतन्त्रताको सर्वोत्तम औजार हो।'
      ]
    }
  }

};

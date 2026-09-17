// BATCH B - INVESTING (3 lessons)
// Category: investing

export const BATCH_B = {

  // ── B1. OPEN VS CLOSE ENDED MUTUAL FUNDS ─────────────────────────
  'open-ended-vs-close-ended-funds': {
    id: 'inv-open-vs-close',
    slug: 'open-ended-vs-close-ended-funds',
    categorySlug: 'investing',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min analysis', np: '१५ मिनेट विश्लेषण' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'SEBON Mutual Fund Regulations 2067 & Fund Manager Disclosures', np: 'धितोपत्र बोर्ड सामूहिक लगानी कोष नियमावली २०६७ अनुसार समीक्षित' },
    prerequisites: { en: 'What is a Mutual Fund?', np: 'म्युचुअल फन्ड के हो?' },
    en: {
      title: 'Open-Ended vs. Close-Ended Mutual Funds in Nepal: Which Should You Buy?',
      oneLineSummary: 'Understand how open-ended funds buy back your units daily at NAV while close-ended funds trade on NEPSE at market-driven discounts or premiums.',
      summaryPoints: [
        'Close-ended funds have a fixed tenure (usually 7 to 10 years), a fixed number of units, and trade on the NEPSE secondary market like ordinary shares.',
        'Open-ended funds have no maturity date, issue unlimited units based on demand, and are bought or sold directly through the fund manager (AMC).',
        'Close-ended funds often trade at a 10%-25% discount to their Net Asset Value (NAV) on NEPSE, creating bargain buying opportunities.',
        'Open-ended funds are required for running automated Systematic Investment Plans (SIPs) in Nepal via connectIPS.',
        'Redeeming open-ended funds before 6-24 months may incur an exit load (0.5%-1.5%), whereas selling close-ended funds incurs broker commission and SEBON fees.'
      ],
      whatIsThis: 'In Nepal\'s capital market, mutual funds operate under two distinct structural models regulated by SEBON. A close-ended fund raises capital once through an IPO, lists on NEPSE with a fixed maturity period (e.g., 7 or 10 years), and trades between buyers and sellers. An open-ended fund operates continuously without a maturity date: you buy units directly from the fund manager at today\'s published NAV, and when you want your money back, the fund manager repurchases your units.',
      whyItMatters: 'Many retail investors in Nepal purchase close-ended mutual funds on NEPSE without realizing they cannot be redeemed on demand with the fund house - they must find a buyer on TMS. Conversely, investors wanting a monthly SIP often do not know that only open-ended schemes (like NIBL Sahabhagita Fund or Siddhartha Systematic Investment Scheme) support recurring automated debits.',
      howItWorks: [
        { step: 1, title: 'Choose Your Investment Method', desc: 'If you want disciplined monthly investing from your bank account, choose an open-ended scheme. If you have lump-sum cash and want to buy assets at a discount to intrinsic value on NEPSE, analyze close-ended funds.' },
        { step: 2, title: 'Evaluate NAV vs. Market Price', desc: 'For close-ended funds, compare the NEPSE market price against the weekly/monthly NAV published by the AMC. If the NAV is NPR 12.50 but the stock trades at NPR 10.00, it trades at a 20% discount.' },
        { step: 3, title: 'Execution Mechanics', desc: 'Open-ended units are purchased via the fund manager\'s online portal or distributor bank counters using connectIPS. Close-ended units are purchased through your broker TMS using ticker symbols like NBF2, SEF, or CMF2.' },
        { step: 4, title: 'Redemption or Maturity Payout', desc: 'Open-ended units are redeemed anytime at prevailing NAV minus exit load directly into your bank account within 2-4 business days. Close-ended funds distribute total accumulated net assets to unitholders upon completing their 7-10 year term.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Structural Comparison: Open-Ended vs Close-Ended Funds in Nepal',
        headers: ['Feature', 'Open-Ended Scheme', 'Close-Ended Scheme'],
        rows: [
          ['Trading Platform', 'Direct with Fund Manager (AMC portal/counters)', 'NEPSE Secondary Market (via Broker TMS)'],
          ['Maturity Period', 'Perpetual (No expiry date)', 'Fixed Term (Typically 7 to 10 years)'],
          ['Pricing Mechanism', 'Always bought/sold at exact NAV', 'Market demand/supply (frequently at discount to NAV)'],
          ['Liquidity Provider', 'Fund Manager guarantees redemption buyback', 'Other market participants on NEPSE'],
          ['SIP Compatibility', 'Fully supported (Monthly auto-debit)', 'Not possible for automated recurring SIPs'],
          ['Exit Costs', 'Exit load (0% to 1.5% depending on holding period)', 'Brokerage (0.27%-0.40%) + SEBON fee (0.015%) + DP fee']
        ]
      },
      nepalContext: 'Close-ended schemes historically dominate NEPSE, but open-ended funds have surged in popularity since SEBON approved schemes like NIBL Sahabhagita Fund, Siddhartha Systematic Investment Scheme, and NIC Asia Dynamic Debt Fund. An enduring anomaly in Nepal is that close-ended funds frequently trade at a 15%-25% discount to NAV because retail traders prioritize speculative hydro stocks over stable mutual fund units. Value investors often accumulate these discounted units to collect high cash dividend yields.',
      practicalScenario: {
        persona: 'Nisha, 31, staff nurse in Biratnagar',
        income: 'NPR 48,000 / month salary',
        scenarioText: 'Nisha wanted to invest NPR 5,000 every month without watching stock charts every day. A colleague suggested buying close-ended units on TMS, but she found placing monthly broker buy orders stressful and irregular.',
        solutionText: 'She switched to an open-ended mutual fund (NIBL Sahabhagita Fund) and registered an e-mandate SIP through connectIPS. Every month on the 5th, NPR 5,000 is automatically debited and converted into units at that day\'s NAV. Over 3 years, she accumulated 2,140 units worth NPR 32,500 in gains without placing a single manual trade.',
        metricHighlight: 'NPR 1,80,000 invested automatically over 36 months without broker involvement'
      },
      formula: {
        name: 'Mutual Fund Discount / Exit Load Formula',
        equation: '\\text{Discount\\%} = \\frac{\\text{NAV} - \\text{Market Price}}{\\text{NAV}} \\times 100 \\quad | \\quad \\text{Redemption Value} = U \\times \\text{NAV} \\times (1 - \\text{Exit Load})',
        variables: [
          { symbol: 'NAV', name: 'Net Asset Value', desc: 'Per-unit value of underlying assets calculated and published by AMC.' },
          { symbol: 'Market Price', name: 'NEPSE Trading Price', desc: 'The price at which close-ended units trade on the secondary stock exchange.' },
          { symbol: 'Exit Load', name: 'Redemption Fee', desc: 'Fee charged by open-ended funds for selling within minimum holding windows (typically 0.5% - 1.5%).' },
          { symbol: 'U', name: 'Number of Units', desc: 'The total mutual fund units being redeemed.' }
        ],
        exampleCalculation: 'Close-ended scheme NAV = NPR 12.00, NEPSE price = NPR 9.60. Discount = ((12.00 - 9.60) / 12.00) * 100 = 20% discount. For open-ended: redeeming 1,000 units at NAV NPR 14 with 1% exit load = 1,000 * 14 * 0.99 = NPR 13,860 net payout.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Compare SIP vs Lump Sum'
      },
      commonMistakes: [
        { mistake: 'Trying to set up a monthly SIP on NEPSE with close-ended units.', correct: 'SIP requires open-ended schemes where new units are created dynamically at current NAV.', explanation: 'Close-ended funds have a fixed unit supply; you cannot create new units each month, and brokers do not support automated micro-SIP debits.' },
        { mistake: 'Panicking when close-ended fund price falls below NAV.', correct: 'Trading at a discount is normal in NEPSE. As the fund nears its 7-10 year maturity, market price naturally converges toward NAV.', explanation: 'At maturity, the fund liquidates all shares and pays unitholders the full underlying NAV, closing the discount gap.' },
        { mistake: 'Ignoring exit load when withdrawing open-ended funds within 6 months.', correct: 'Hold open-ended equity units for at least 12-24 months so the exit load drops to 0%.', explanation: 'Exit loads penalize short-term traders to protect long-term unitholders from sudden liquidity drains.' }
      ],
      definitions: [
        { term: 'Open-Ended Scheme', full: 'Khula-Mukhi Samuhik Lagani Kosh', meaning: 'A mutual fund scheme with no fixed maturity date that buys and sells units directly to the public at daily NAV.' },
        { term: 'Close-Ended Scheme', full: 'Banda-Mukhi Samuhik Lagani Kosh', meaning: 'A mutual fund scheme with fixed capital and tenure that trades on NEPSE like equity shares.' },
        { term: 'Discount to NAV', full: 'Market Undervaluation Gap', meaning: 'When the market trading price of a close-ended fund on NEPSE is lower than the actual per-unit book value of its portfolio.' },
        { term: 'Exit Load', full: 'Niskasan Shulka', meaning: 'A percentage fee deducted by open-ended funds if units are redeemed before a specified duration.' }
      ],
      faqs: [
        { q: 'Can I sell my open-ended mutual fund units anytime?', a: 'Yes. You submit a redemption request through the fund manager\'s online portal. Payment is deposited directly into your linked bank account via connectIPS within 2 to 4 working days.' },
        { q: 'Why do close-ended funds trade at a discount in Nepal?', a: 'Because retail NEPSE investors favor high-beta speculative stocks over diversified mutual funds. This low secondary market demand keeps fund share prices below their underlying portfolio value.' },
        { q: 'Which is better for beginners: open-ended or close-ended?', a: 'Open-ended funds are significantly better for beginners because they enable automated monthly SIPs, eliminate the stress of stock market timing, and guarantee redemptions at fair intrinsic NAV.' }
      ],
      takeaways: [
        'Open-ended funds = continuous liquidity at NAV, best for automated monthly SIP wealth creation.',
        'Close-ended funds = trade on NEPSE at fixed supply, often offering attractive discount opportunities for lump sums.',
        'Look for discounts of 15%+ on solid close-ended schemes with high dividend payout histories.',
        'Always verify whether an exit load applies before redeeming open-ended units in under 12 months.',
        'Never confuse market price volatility with underlying portfolio health; track the fund\'s published monthly factsheet.'
      ]
    },
    np: {
      title: 'नेपालमा खुला-मुखी र बन्द-मुखी म्युचुअल फन्ड: कुन छान्ने?',
      oneLineSummary: 'दैनिक NAV मा युनिट खरिद-बिक्री हुने खुला-मुखी र नेप्सेमा छुट मूल्यमा कारोबार हुने बन्द-मुखी फन्ड बीचको भिन्नता बुझ्नुहोस्।',
      summaryPoints: [
        'बन्द-मुखी (Close-ended) फन्डको निश्चित अवधि (७ देखि १० वर्ष) हुन्छ र साधारण सेयर जस्तै नेप्सेमा ब्रोकरमार्फत कारोबार हुन्छ।',
        'खुला-मुखी (Open-ended) फन्डको कुनै परिपक्व अवधि हुँदैन; यसको युनिट सिधै फन्ड म्यानेजर (AMC) बाट NAV मूल्यमा किनबेच हुन्छ।',
        'नेप्सेमा बन्द-मुखी फन्डहरू प्रायः आफ्नो वास्तविक प्रतिइकाई सम्पत्ति मूल्य (NAV) भन्दा १०% देखि २५% सम्मको छुट (Discount) मा पाइन्छन्।',
        'नेपालमा मासिक स्वचालित SIP (Systematic Investment Plan) चलाउन खुला-मुखी योजना नै छनोट गर्नुपर्छ।',
        'खुला-मुखी फन्ड ६-२४ महिना अघि फिर्ता गर्दा Exit Load लाग्न सक्छ भने बन्द-मुखी बेच्दा ब्रोकर र नेप्से शुल्क लाग्छ।'
      ],
      whatIsThis: 'नेपालको पुँजी बजारमा धितोपत्र बोर्ड (SEBON) अन्तर्गत दुई प्रकारका म्युचुअल फन्ड सञ्चालनमा छन्। बन्द-मुखी फन्डले IPO मार्फत एकपटक पुँजी संकलन गरी निश्चित अवधिका लागि नेप्सेमा सूचीकृत भई कारोबार गर्छ। खुला-मुखी फन्डको कुनै म्याद हुँदैन; लगानीकर्ताले फन्ड व्यवस्थापकबाट सीधै दैनिक प्रकाशित NAV मा इकाई किन्ने र आवश्यक पर्दा फन्डलाई नै फिर्ता बेच्ने गर्दछन्।',
      whyItMatters: 'धेरै नयाँ लगानीकर्ताले नेप्सेमा बन्द-मुखी फन्ड किनेपछि फन्ड हाउसबाट सीधै पैसा फिर्ता माग्न सकिन्छ भन्ने सोच्छन्, जुन सम्भव हुँदैन (ब्रोकरमार्फत बेच्नुपर्छ)। अर्कोतर्फ, मासिक नियमित लगानी गर्न चाहनेहरूलाई खुला-मुखी योजना (जस्तै NIBL सहभागिता फन्ड वा सिद्धार्थ सिष्टेमेटिक इन्भेष्टमेन्ट स्किम) ले मात्र स्वचालित खाता कट्टी सुविधा दिन्छ भन्ने जानकारी हुँदैन।',
      howItWorks: [
        { step: 1, title: 'आफ्नो लगानी उद्देश्य निर्धारण गर्नुहोस्', desc: 'यदि मासिक तलबबाट अनुशासित रूपमा थोरै-थोरै लगानी गर्ने हो भने खुला-मुखी छान्नुहोस्। एकमुष्ट रकमलाई नेप्सेमा छुट मूल्यमा लगानी गर्ने हो भने बन्द-मुखी योजना हेर्नुहोस्।' },
        { step: 2, title: 'NAV र बजार मूल्यको तुलना गर्नुहोस्', desc: 'बन्द-मुखी फन्डको साप्ताहिक वा मासिक NAV हेर्नुहोस्। यदि NAV रु. १२.५० छ तर नेप्सेमा रु. १० मा कारोबार भइरहेको छ भने यो २०% छुटमा उपलब्ध छ।' },
        { step: 3, title: 'खरिद प्रक्रिया', desc: 'खुला-मुखी इकाइहरू फन्ड म्यानेजरको वेभसाइट वा वितरक बैंक काउन्टरबाट connectIPS प्रयोग गरी खरिद गरिन्छ। बन्द-मुखी इकाइहरू ब्रोकर TMS बाट टिकर (NBF2, SEF, CMF2 आदि) मार्फत किनबेच हुन्छ।' },
        { step: 4, title: 'फिर्ता (Redemption) वा परिपक्वता भुक्तानी', desc: 'खुला-मुखी फन्ड जुनसुकै बेला फिर्ता फारम भरेर २ देखि ४ कार्यदिनभित्र बैंक खातामा रकम प्राप्त हुन्छ। बन्द-मुखी फन्डको ७-१० वर्षको अवधि सकिएपछि सम्पूर्ण सम्पत्ति बिक्री गरी लगानीकर्तालाई समानुपातिक भुक्तानी गरिन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा खुला-मुखी र बन्द-मुखी फन्डको तुलनात्मक विवरण',
        headers: ['विशेषता', 'खुला-मुखी फन्ड (Open-Ended)', 'बन्द-मुखी फन्ड (Close-Ended)'],
        rows: [
          ['कारोबार हुने ठाउँ', 'फन्ड म्यानेजर (AMC) सँग सीधै', 'नेप्से दोस्रो बजार (ब्रोकर TMS मार्फत)'],
          ['परिपक्व हुने अवधि', 'असीमित (कुनै निश्चित म्याद नहुने)', 'निश्चित (प्रायः ७ देखि १० वर्ष)'],
          ['मूल्य निर्धारण', 'सधैँ वास्तविक NAV अनुसार', 'बजारको माग र आपूर्ति अनुसार (प्रायः NAV भन्दा सस्तो)'],
          ['तरलताको ग्यारेन्टी', 'फन्ड म्यानेजर आफैँले इकाइ फिर्ता किन्ने', 'नेप्सेमा अर्को खरिदकर्ता भेटिनुपर्ने'],
          ['मासिक SIP सम्भावना', 'पूर्ण रूपमा सम्भव (connectIPS बाट स्वचालित)', 'स्वचालित मासिक SIP सम्भव छैन'],
          ['बिक्री गर्दा लाग्ने शुल्क', 'Exit Load (होल्डिङ अवधि अनुसार ०% देखि १.५%)', 'ब्रोकर कमिसन (०.२७-०.४०%) + SEBON शुल्क + DP शुल्क']
        ]
      },
      nepalContext: 'नेपालमा विगत लामो समयदेखि बन्द-मुखी फन्डहरूको बाहुल्यता रहे पनि पछिल्ला वर्षहरूमा खुला-मुखी फन्डहरू निकै लोकप्रिय बनेका छन्। नेप्सेमा अधिकांश बन्द-मुखी फन्डहरू आफ्नो वास्तविक NAV भन्दा १५% देखि २५% सम्मको सस्तो मूल्य (Discount) मा कारोबार भइरहेका भेटिन्छन्, किनकि नेपाली साना लगानीकर्ताहरू म्युचुअल फन्डभन्दा हाइड्रोपावर जस्ता तीव्र उतारचढाव हुने सेयर रुचाउँछन्। सचेत लगानीकर्ताका लागि यो राम्रो लाभांश कमाउने अवसर बन्छ।',
      practicalScenario: {
        persona: 'निशा, ३१, विराटनगरमा कार्यरत स्टाफ नर्स',
        income: 'मासिक तलब रु. ४८,000',
        scenarioText: 'निशा दैनिक सेयर बजारको चार्ट नहेरी मासिक रु. ५,000 बचत लगानी गर्न चाहन्थिन्। साथीको सल्लाहमा ब्रोकरबाट बन्द-मुखी फन्ड किन्न खोज्दा हरेक महिना ब्रोकरलाई फोन गर्ने झन्झट भयो।',
        solutionText: 'उनले खुला-मुखी म्युचुअल फन्ड (NIBL सहभागिता फन्ड) रोजेर connectIPS मार्फत ई-म्यान्डेट SIP दर्ता गरिन्। हरेक महिनाको ५ गते स्वतः रु. ५,000 कट्टी भएर इकाइ जम्मा भयो। ३ वर्षमा उनले बिना कुनै ब्रोकर झन्झट रु. १,८०,000 लगानी गरी रु. ३२,५00 नाफा कमाइन्।',
        metricHighlight: '३६ महिनामा रु. १,८०,000 बिना ब्रोकर स्वतः लगानी'
      },
      formula: {
        name: 'फन्ड छुट प्रतिशत र रिडेम्प्सन हिसाब',
        equation: '\\text{Discount\\%} = \\frac{\\text{NAV} - \\text{बजार मूल्य}}{\\text{NAV}} \\times 100 \\quad | \\quad \\text{भुक्तानी रकम} = U \\times \\text{NAV} \\times (1 - \\text{Exit Load})',
        variables: [
          { symbol: 'NAV', name: 'प्रति इकाई खुद सम्पत्ति मूल्य', desc: 'फन्ड म्यानेजरले प्रकाशित गरेको वास्तविक सम्पत्ति मूल्य।' },
          { symbol: 'बजार मूल्य', name: 'नेप्सेको कारोबार मूल्य', desc: 'नेप्से दोस्रो बजारमा चलेको प्रतिइकाइ खरिदबिक्री दर।' },
          { symbol: 'Exit Load', name: 'बिक्री शुल्क', desc: 'तोकिएको समयभन्दा अगाडि खुला-मुखी इकाइ बेच्दा लाग्ने प्रतिशत शुल्क।' },
          { symbol: 'U', name: 'कुल इकाइ संख्या', desc: 'लगानीकर्ताले फिर्ता गर्न चाहेको कुल फन्ड युनिट।' }
        ],
        exampleCalculation: 'NAV रु. १२.०० भएको फन्ड नेप्सेमा रु. ९.६० मा पाइएमा: ((१२.०० - ९.६०) / १२.००) * १०० = २०% छुट। खुला-मुखीमा १,००० इकाइ NAV रु. १४ मा १% Exit Load सहित फिर्ता गर्दा: १,००० * १४ * ०.९९ = रु. १३,८६० खातामा आउँछ।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'SIP वृद्धि क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'नेप्सेमा बन्द-मुखी फन्डमा मासिक स्वचालित SIP गर्न खोज्नु।', correct: 'SIP का लागि सधैँ खुला-मुखी योजना नै रोज्नुपर्छ जहाँ नयाँ इकाइ सिर्जना हुन्छ।', explanation: 'बन्द-मुखीमा इकाइ संख्या सीमित हुन्छ र ब्रोकर प्रणालीले स्वचालित मासिक रकम कट्टी समर्थन गर्दैन।' },
        { mistake: 'बन्द-मुखी फन्डको बजार मूल्य NAV भन्दा तल जाँदा आत्तिनु।', correct: 'नेप्सेमा डिस्काउन्ट हुनु सामान्य हो; परिपक्व हुने मिति नजिकिँदै जाँदा बजार मूल्य NAV तर्फ नै पुग्छ।', explanation: 'फन्डको म्याद सकिँदा सबै सेयर बेचेर पूरै NAV रकम फिर्ता दिइने हुनाले छुटको अन्तर समाप्त हुन्छ।' },
        { mistake: 'खुला-मुखी फन्ड किनेको केही महिनामै बेचेर Exit Load तिर्नु।', correct: 'कम्तीमा १ देखि २ वर्ष होल्ड गर्नुहोस् ताकि Exit Load शून्य प्रतिशत बनोस्।', explanation: 'अल्पकालीन सट्टेबाजी निरुत्साहित गर्न फन्डहरूले सुरुवाती महिनाहरूमा ०.५% देखि १.५% सम्म शुल्क लिन्छन्।' }
      ],
      definitions: [
        { term: 'खुला-मुखी योजना (Open-Ended)', full: 'असीमित अवधिको सामूहिक लगानी कोष', meaning: 'परिपक्व मिति नभएको, दैनिक NAV मा फन्ड म्यानेजरसँग सीधै खरिद-बिक्री गर्न सकिने योजना।' },
        { term: 'बन्द-मुखी योजना (Close-Ended)', full: 'निश्चित अवधिको सामूहिक लगानी कोष', meaning: 'निश्चित अवधि (७-१० वर्ष) रहने र नेप्सेमा सेयर जस्तै किनबेच हुने योजना।' },
        { term: 'Discount to NAV', full: 'NAV भन्दा सस्तो दर', meaning: 'फन्डको वास्तविक प्रतिइकाइ सम्पत्ति मूल्यभन्दा नेप्से बजार मूल्य कम भएको अवस्था।' },
        { term: 'Exit Load', full: 'निस्कासन शुल्क', meaning: 'तोकिएको अवधि नपुगी खुला-मुखी फन्डबाट बाहिरिँदा काटिने जरिवाना शुल्क।' }
      ],
      faqs: [
        { q: 'खुला-मुखी फन्डको पैसा फिर्ता लिन कति दिन लाग्छ?', a: 'फन्ड म्यानेजरको अनलाइन पोर्टल वा वितरक शाखामा रिडेम्प्सन फारम पेश गरेपछि २ देखि ४ कार्यदिनभित्र connectIPS मार्फत बैंक खातामा पैसा आइपुग्छ।' },
        { q: 'नेपालमा बन्द-मुखी फन्ड किन NAV भन्दा सस्तोमा पाइन्छ?', a: 'नेपाली दोस्रो बजारका साना लगानीकर्ताहरू छिटो मूल्य बढ्ने हाइड्रो वा फाइनान्स सेयर मन पराउँछन्। म्युचुअल फन्डमा माग कम भएकाले सधैँ छुटमा कारोबार हुन्छ।' },
        { q: 'नयाँ लगानीकर्ताका लागि कुन राम्रो?', a: 'नयाँ लगानीकर्ताका लागि खुला-मुखी योजना उत्तम हुन्छ किनभने यसमा मासिक थोरै रकमबाटै स्वचालित SIP सुरु गर्न सकिन्छ र बजारको डर हुँदैन।' }
      ],
      takeaways: [
        'मासिक नियमित बचत र SIP का लागि खुला-मुखी (Open-ended) फन्ड नै पहिलो रोजाइ हो।',
        'एकमुष्ट रकम लगानी गर्नेहरूले नेप्सेमा १५-२०% छुटमा पाइने राम्रा बन्द-मुखी फन्डबाट फाइदा लिन सक्छन्।',
        'बन्द-मुखी फन्डको अवधि सकिँदा फन्डले वास्तविक NAV कै आधारमा सम्पूर्ण रकम फिर्ता गर्दछ।',
        'खुला-मुखी फन्डबाट पैसा निकाल्दा लाग्ने Exit Load को नियम पहिले नै बुझ्नुहोस्।',
        'दैनिक बजारको हल्लाभन्दा फन्ड म्यानेजरले प्रकाशित गर्ने मासिक वित्तीय विवरण (Factsheet) लाई आधार मान्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate the long-term compounding growth of monthly mutual fund investments.' }
    ],
    downloadableResources: [
      { title: 'SEBON Licensed Mutual Fund Schemes Guide (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '210 KB', href: 'assets/downloads/nepal-sip-mutual-fund-checklist.html' }
    ]
  },

  // ── B2. AGE BASED ASSET ALLOCATION ───────────────────────────────
  'age-based-asset-allocation-nepal': {
    id: 'inv-age-asset-alloc',
    slug: 'age-based-asset-allocation-nepal',
    categorySlug: 'investing',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min portfolio audit', np: '२० मिनेट पोर्टफोलियो समीक्षा' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Modern Portfolio Theory & Nepal Inflation Realities', np: 'आधुनिक पोर्टफोलियो सिद्धान्त र नेपालको मुद्रास्फीति तथ्यांक अनुसार समीक्षित' },
    prerequisites: { en: 'Compounding Engine & Inflation vs Savings', np: 'चक्रवृद्धि ब्याज र मुद्रास्फीति' },
    en: {
      title: 'Age-Based Asset Allocation in Nepal: The "110 Minus Age" Blueprint',
      oneLineSummary: 'Align your investment split between volatile NEPSE equities and guaranteed fixed income based on your exact decade of life and retirement horizon.',
      summaryPoints: [
        'Asset allocation accounts for over 90% of long-term investment return variance - far more than individual stock picking.',
        'The classical "100 Minus Age" rule should be updated to "110 Minus Age" in Nepal to combat 6%-8% persistent developing-nation inflation.',
        'A 25-year-old in Nepal should allocate 85% to growth assets (equities/mutual funds) and 15% to safety (cash/FD).',
        'A 55-year-old preparing for retirement should hold 55% in fixed instruments (CIT, Debentures, FD) and 45% in dividend-paying blue chips.',
        'Rebalance your portfolio once a year (e.g., every Shrawan after the fiscal year ends) to lock in gains and maintain target risk percentages.'
      ],
      whatIsThis: 'Age-based asset allocation is a systematic investment strategy that adjusts the percentage of high-risk/high-growth assets (stocks, equity mutual funds, business equity) versus low-risk/capital-preservation assets (fixed deposits, debentures, government treasury bonds, Citizen Investment Trust) according to your age. As you grow older and your remaining working years shrink, your portfolio shifts smoothly from wealth accumulation toward capital protection.',
      whyItMatters: 'In Nepal, young professionals in their 20s often hold 100% of their savings in 4% bank savings accounts - losing purchasing power to inflation every day. Meanwhile, retirees in their 60s frequently risk their lifetime gratuity in speculative NEPSE micro-cap stocks, risking financial disaster. Matching your portfolio risk to your life stage prevents both catastrophic loss and destructive inflation erosion.',
      howItWorks: [
        { step: 1, title: 'Determine Your Equity Percentage', desc: 'Subtract your current age from 110. For example, at age 30: 110 - 30 = 80%. This means 80% of your investable portfolio belongs in growth assets (equity mutual funds, blue-chip NEPSE stocks, systematic SIPs).' },
        { step: 2, title: 'Allocate the Debt/Safety Percentage', desc: 'The remaining percentage (30% for a 30-year-old) goes into fixed income: commercial bank fixed deposits, debentures yielding 8%-10%, EPF/CIT retirement contributions, and a high-yield emergency fund.' },
        { step: 3, title: 'Select High-Quality Nepal Instruments', desc: 'Do not gamble the equity portion on speculative promoter shares. Use diversified open-ended mutual funds, commercial banks with CAR above 12%, and dividend-paying blue chips. For debt, use Class A bank FDs or corporate debentures with strong ratings.' },
        { step: 4, title: 'Annual Rebalancing Ritual', desc: 'Every year in Shrawan, calculate the total value of each bucket. If a NEPSE bull run increased your equities to 90%, sell 10% and transfer the profits into Fixed Deposits or Debentures to restore your target ratio.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Life-Stage Asset Allocation Matrix for Nepal (110 Minus Age Model)',
        headers: ['Age Decade', 'Life Stage', 'Equities / Growth %', 'Fixed Income / Debt %', 'Recommended Nepal Vehicles'],
        rows: [
          ['20s (Age 20-29)', 'Early Career & Wealth Accumulation', '80% - 90%', '10% - 20%', 'Open-ended SIPs, Growth NEPSE stocks, Emergency Fund in Class A Savings'],
          ['30s (Age 30-39)', 'Family Building & Peak Earnings', '70% - 80%', '20% - 30%', 'Diversified Equity Portfolio, CIT/SSF contributions, 6-Month Emergency FD'],
          ['40s (Age 40-49)', 'Pre-Retirement & Asset Consolidation', '60% - 70%', '30% - 40%', 'Blue-chip Dividend Stocks, Bank Debentures (8-10%), CIT Gratuity Fund'],
          ['50s (Age 50-59)', 'Retirement Transition', '50% - 60%', '40% - 50%', 'High-Dividend NEPSE shares, Fixed Deposits, Treasury Bills, CIT Pension'],
          ['60s+ (Retiree)', 'Capital Preservation & Cash Flow', '30% - 40%', '60% - 70%', 'Class A Bank FD Ladder, Mutual Fund SWP, Monthly Interest Accounts']
        ]
      },
      nepalContext: 'Traditional Western financial advice suggests the "100 minus age" rule, meaning a 60-year-old should hold only 40% stocks. However, in Nepal, where official inflation averages 6%-7% and healthcare costs inflate at 10% annually, holding too much in fixed deposits guarantees real capital loss over a 20-year retirement. Nepalis must maintain at least 30%-40% in dividend-paying equities even during retirement to keep pace with Kathmandu and Terai living costs.',
      practicalScenario: {
        persona: 'Gopal, 52, secondary school teacher in Chitwan',
        income: 'NPR 65,000 / month salary + NPR 25 Lakh gratuity approaching',
        scenarioText: 'Gopal had all his savings in a single cooperative fixed deposit. When the cooperative delayed withdrawals, he panicked and considered moving everything into speculative hydro stocks he heard about at a local tea shop.',
        solutionText: 'He adopted the 110-Age rule: 110 - 52 = 58% in growth/dividend assets, 42% in guaranteed debt. He placed NPR 10 Lakh in Class A bank FDs across two separate commercial banks, NPR 5 Lakh in an 8.5% Nabil Bank debenture, and invested NPR 10 Lakh across an open-ended mutual fund and 3 high-dividend commercial banks.',
        metricHighlight: 'Restored security with 8.5% guaranteed income + inflation-beating dividend growth'
      },
      formula: {
        name: 'Nepal Adapted Asset Allocation Formula',
        equation: '\\text{Equity\\%} = 110 - \\text{Age} \\quad | \\quad \\text{Debt / Cash\\%} = 100 - \\text{Equity\\%}',
        variables: [
          { symbol: 'Age', name: 'Current Age', desc: 'Your chronological age in completed solar years.' },
          { symbol: '110', name: 'Developing Economy Constant', desc: 'Adjusted upward from 100 to offset Nepal\'s persistent 6-8% structural inflation.' },
          { symbol: 'Equity%', name: 'Growth Allocation', desc: 'Percentage invested in NEPSE shares, equity mutual funds, and business growth.' },
          { symbol: 'Debt%', name: 'Preservation Allocation', desc: 'Percentage held in Fixed Deposits, Debentures, CIT, EPF, and cash.' }
        ],
        exampleCalculation: 'For a 35-year-old Nepali: Equity% = 110 - 35 = 75%. Debt% = 100 - 75 = 25%. With a portfolio of NPR 20 Lakh: NPR 15 Lakh in equity funds/stocks and NPR 5 Lakh in fixed deposits/debentures.',
        shortcutCalcSlug: 'calculators/retirement',
        shortcutCalcName: 'Retirement Corpus Planner'
      },
      commonMistakes: [
        { mistake: 'Staying 100% in fixed deposits in your 20s and 30s because "stocks are gambling."', correct: 'At age 25, inflation is your biggest financial enemy. A 7% FD after 5% tax barely matches 6% inflation.', explanation: 'Young investors have decades to ride out NEPSE cycles; keeping all cash in bank deposits guarantees zero real wealth growth.' },
        { mistake: 'Gambling retirement gratuity money into high-beta speculative stocks.', correct: 'Never allocate more than 30%-40% to equities past age 60, and restrict that to fundamentally solid dividend payers.', explanation: 'Retirees do not have 10 years of working salary to recover from a 50% NEPSE bear market downturn.' },
        { mistake: 'Failing to rebalance after a massive NEPSE bull market.', correct: 'When a bull market doubles your equity value, sell some shares and lock profits into fixed deposits.', explanation: 'Without rebalancing, your portfolio silently becomes 95% equity right at the peak of market valuation.' }
      ],
      definitions: [
        { term: 'Asset Allocation', full: 'Sampatti Phailyawat', meaning: 'The strategic division of an investment portfolio among different asset categories such as equities, fixed income, and cash.' },
        { term: 'Rebalancing', full: 'Puna-Santulan', meaning: 'The process of realigning the weightings of a portfolio of assets by periodically buying or selling assets to maintain target risk levels.' },
        { term: 'Capital Preservation', full: 'Poonji Samrakshan', meaning: 'An investment strategy focused on preventing loss of principal capital rather than maximizing capital gains.' },
        { term: 'Debenture', full: 'Rinpatra', meaning: 'A long-term debt instrument issued by commercial banks in Nepal paying fixed semi-annual interest (typically 8%-10.5%).' }
      ],
      faqs: [
        { q: 'Should I include my primary residential house in asset allocation?', a: 'No. Your personal home provides shelter, not liquid investment cash flow. Treat only investable liquid assets (shares, mutual funds, FDs, debentures, CIT) in your allocation formula.' },
        { q: 'How often should I rebalance my investments in Nepal?', a: 'Once per year is optimal. A great time is during Shrawan/Bhadra, when listed companies announce their annual dividends and the government announces the new fiscal budget.' },
        { q: 'What if NEPSE is crashing right when my rule says I should buy stocks?', a: 'That is precisely when rebalancing works magic. If equities dropped below your target percentage, you rebalance by buying quality assets at discounted bear-market prices.' }
      ],
      takeaways: [
        'Asset allocation matters far more than picking the next hot speculative stock.',
        'Use the "110 Minus Age" formula in Nepal to protect your long-term wealth from 7% inflation.',
        'Young investors (20s-30s) must lean heavily into equities and SIPs; retirees must prioritize guaranteed cash flow.',
        'Rebalance your portfolio annually to automatically sell high and buy low without emotional guessing.',
        'Diversify your debt allocation across multiple Class A commercial banks and rated corporate debentures.'
      ]
    },
    np: {
      title: 'नेपालमा उमेर अनुसार सम्पत्ति बाँडफाँड: "११० माइनस उमेर" मोडेल',
      oneLineSummary: 'आफ्नो उमेर र अवकाशको समय अनुसार नेप्से सेयर र सुरक्षित मुद्दती बचत बीच सही प्रतिशत सन्तुलन मिलाउनुहोस्।',
      summaryPoints: [
        'दीर्घकालीन लगानीको ९०% भन्दा बढी प्रतिफल व्यक्तिगत सेयर छनोटले होइन, सम्पत्ति बाँडफाँड (Asset Allocation) ले निर्धारण गर्छ।',
        'नेपालको ६% देखि ८% सम्मको उच्च मुद्रास्फीतिसँग जुध्न परम्परागत "१०० माइनस उमेर" को सट्टा "११० माइनस उमेर" सूत्र उपयुक्त हुन्छ।',
        '२५ वर्षको युवाले आफ्नो लगानीको ८५% वृद्धि दिने क्षेत्र (सेयर/म्युचुअल फन्ड) र १५% सुरक्षित बचतमा राख्नुपर्छ।',
        '५५ वर्षका सेवा निवृत्त हुन लागेका व्यक्तिले ५५% सुरक्षित औजार (CIT, ऋणपत्र, FD) र ४५% बलिया लाभांश दिने सेयरमा राख्नुपर्छ।',
        'हरेक वर्ष साउन महिनामा आफ्नो पोर्टफोलियो पुनःसन्तुलन (Rebalancing) गरी तोकिएको जोखिम अनुपात कायम राख्नुहोस्।'
      ],
      whatIsThis: 'उमेर अनुसार सम्पत्ति बाँडफाँड भनेको आफ्नो उमेर बढ्दै जाँदा जोखिमयुक्त तर उच्च प्रतिफल दिने क्षेत्र (सेयर बजार, इक्विटी म्युचुअल फन्ड) र न्यून जोखिमयुक्त सुरक्षित क्षेत्र (बैंक मुद्दती, ऋणपत्र, नागरिक लगानी कोष, बचत पत्र) बीचको अनुपात समायोजन गर्ने वैज्ञानिक लगानी पद्धति हो।',
      whyItMatters: 'नेपालमा २०-२५ वर्षका युवाहरूले आफ्नो सम्पूर्ण पैसा ४% ब्याज आउने बचत खातामै सडाएर मुद्रास्फीतिबाट मूल्य गुमाइरहेका हुन्छन्। अर्कोतर्फ, ६० वर्षका वृद्धहरूले अवकाशको उपदान रकम नेप्सेका कमजोर हाइड्रो सेयरमा हालेर डुबाउने गर्छन्। उमेर अनुसार सही सम्पत्ति विभाजनले पुँजीको सुरक्षा र दीर्घकालीन सम्पत्ति निर्माण दुवै सुनिश्चित गर्छ।',
      howItWorks: [
        { step: 1, title: 'सेयर लगानीको प्रतिशत निकाल्नुहोस्', desc: '११० बाट आफ्नो उमेर घटाउनुहोस्। उदाहरणका लागि ३० वर्षको उमेरमा: ११० - ३० = ८०%। यसको अर्थ तपाईंको लगानीयोग्य रकमको ८०% सेयर वा म्युचुअल फन्डमा हुनुपर्छ।' },
        { step: 2, title: 'सुरक्षित बचतको प्रतिशत निर्धारण गर्नुहोस्', desc: 'बाँकी रहेको रकम (३० वर्षको व्यक्तिका लागि २०%) मुद्दती निक्षेप, बैंक ऋणपत्र (Debenture), नागरिक लगानी कोष (CIT) वा आपतकालीन कोषमा राख्नुहोस्।' },
        { step: 3, title: 'नेपालका गुणस्तरीय वित्तीय साधन छान्नुहोस्', desc: 'सेयरतर्फ राम्रा वाणिज्य बैंक, उत्पादनमूलक र खुला-मुखी म्युचुअल फन्ड रोज्नुहोस्। सुरक्षिततर्फ "क" वर्गका वाणिज्य बैंकका ८-१०% ब्याज दिने ऋणपत्र वा मुद्दती छान्नुहोस्।' },
        { step: 4, title: 'वार्षिक पुनःसन्तुलन (Annual Rebalancing)', desc: 'प्रत्येक वर्ष साउन महिनामा आफ्नो कुल सम्पत्तिको हिसाब गर्नुहोस्। यदि सेयर बजार बढेर सेयरको हिस्सा ९०% पुगेको छ भने १०% सेयर बेचेर मुद्दती खातामा सारी तोकिएको अनुपात कायम गर्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालका लागि उमेर अनुसार सम्पत्ति बाँडफाँड तालिका (११० माइनस उमेर मोडेल)',
        headers: ['उमेर समूह', 'जीवनको चरण', 'सेयर / वृद्धि %', 'मुद्दती / ऋणपत्र %', 'सिफारिस गरिएका लगानी साधन'],
        rows: [
          ['२० को दशक (२०-२९)', 'करियरको सुरुवाती र पुँजी निर्माण', '८०% - ९०%', '१०% - २०%', 'खुला-मुखी SIP, बलिया नेप्से सेयर, "क" वर्गको बचतमा आपतकालीन कोष'],
          ['३० को दशक (३०-३९)', 'पारिवारिक जिम्मेवारी र उच्च आम्दानी', '७०% - ८०%', '२०% - ३०%', 'विविधीकृत सेयर पोर्टफोलियो, CIT/SSF, ६ महिनाको मुद्दती कोष'],
          ['४० को दशक (४०-४९)', 'अवकाशपूर्वको सम्पत्ति सुदृढीकरण', '६०% - ७०%', '३०% - ४०%', 'नियमित लाभांश दिने सेयर, बैंक डिबेन्चर (८-१०%), नागरिक लगानी कोष'],
          ['५० को दशक (५०-५९)', 'अवकाश उन्मुख संक्रमणकाल', '५०% - ६०%', '४०% - ५०%', 'उच्च लाभांश दिने बैंक सेयर, वाणिज्य बैंक मुद्दती, ट्रेजरी बिल'],
          ['६० भन्दा माथि', 'पुँजी संरक्षण र मासिक पेन्सन आम्दानी', '३०% - ४०%', '६०% - ७०%', '"क" वर्गका बैंकको मुद्दती, म्युचुअल फन्ड SWP, मासिक ब्याज खाता']
        ]
      },
      nepalContext: 'पश्चिमा देशहरूमा "१०० माइनस उमेर" को नियम चल्छ, जस अनुसार ६० वर्षको मानिसले ४०% मात्र सेयरमा राख्छ। तर नेपालमा खाद्यान्न र स्वास्थ्य क्षेत्रको मूल्यवृद्धि वार्षिक ७-१०% रहने भएकाले ६० वर्ष कटेका व्यक्तिले पनि कम्तीमा ३०-४०% रकम लाभांश दिने राम्रा सेयरमा नराखे मुद्दतीको ब्याजले महँगी धान्न सक्दैन।',
      practicalScenario: {
        persona: 'गोपाल, ५२, चितवनका मावि शिक्षक',
        income: 'मासिक तलब रु. ६५,000 + केही महिनामा आउने उपदान रु. २५ लाख',
        scenarioText: 'गोपालले आफ्नो सबै बचत एउटै सहकारीको मुद्दतीमा राखेका थिए। सहकारी समस्यामा परेपछि आत्तिएर उनले चियापसलको हल्ला सुनेर सबै पैसा नेप्सेको speculative हाइड्रो सेयरमा हाल्ने विचार गरे।',
        solutionText: 'उनले ११० - ५२ = ५८% सेयर र ४२% सुरक्षित ऋणपत्र मोडल अपनाए। उनले रु. १० लाख दुईवटा वाणिज्य बैंकको मुद्दतीमा, रु. ५ लाख ८.५% ब्याज दिने नबिल बैंकको डिबेन्चरमा, र बाँकी रु. १० लाख खुला-मुखी म्युचुअल फन्ड र उच्च लाभांश दिने बैंकको सेयरमा बाँडे।',
        metricHighlight: '८.५% ग्यारेन्टी ब्याज + महँगी जित्ने लाभांश वृद्धिबाट पूर्ण आर्थिक सुरक्षा'
      },
      formula: {
        name: 'नेपाल-अनुकूलित सम्पत्ति बाँडफाँड सूत्र',
        equation: '\\text{सेयर\\%} = ११० - \\text{उमेर} \\quad | \\quad \\text{मुद्दती/ऋणपत्र\\%} = १०० - \\text{सेयर\\%}',
        variables: [
          { symbol: 'उमेर', name: 'वर्तमान उमेर', desc: 'लगानीकर्ताको हालको पूरा भएको उमेर।' },
          { symbol: '११०', name: 'विकासशील अर्थतन्त्र स्थिरांक', desc: 'नेपालको ७% महँगी दरलाई जित्न पश्चिमा १०० को सट्टा ११० राखिएको।' },
          { symbol: 'सेयर%', name: 'वृद्धि सम्पत्ति प्रतिशत', desc: 'नेप्से सेयर, म्युचुअल फन्ड र व्यवसायमा लगाइने हिस्सा।' },
          { symbol: 'मुद्दती%', name: 'संरक्षण सम्पत्ति प्रतिशत', desc: 'मुद्दती निक्षेप, डिबेन्चर, CIT, र सरकारी बचतपत्रमा राखिने हिस्सा।' }
        ],
        exampleCalculation: '३५ वर्षको नेपालीका लागि: सेयर हिस्सा = ११० - ३५ = ७५%। सुरक्षित हिस्सा = १०० - ७५ = २५%। यदि कुल बचत रु. २० लाख भए: रु. १५ लाख सेयर/फन्डमा र रु. ५ लाख बैंक मुद्दती/डिबेन्चरमा।',
        shortcutCalcSlug: 'calculators/retirement',
        shortcutCalcName: 'अवकाश योजना क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: '२० र ३० वर्षको उमेरमा सेयरलाई जुवा ठानेर १००% पैसा बचत खातामै सडाउनु।', correct: 'युवा उमेरमा महँगी नै सबैभन्दा ठूलो शत्रु हो। ७% मुद्दतीले ६-७% महँगीलाई बल्लतल्ल धान्छ, वास्तविक नाफा शून्य हुन्छ।', explanation: 'युवाहरूसँग बजारको गिरावट झेल्न दशकौँ समय हुन्छ; उनीहरूले सेयरबाटै सम्पत्ति बढाउनुपर्छ।' },
        { mistake: 'अवकाशपछिको पेन्सन वा उपदान रकम कमजोर कम्पनीको सेयरमा हाल्नु।', correct: '६० वर्ष नाघेपछि ३०-४०% भन्दा बढी सेयरमा नराख्नुहोस् र त्यो पनि भरपर्दा ब्लुचिप कम्पनीमा मात्र।', explanation: 'वृद्धावस्थामा बजार ५०% घट्यो भने नोक्सानी उठाउन जागिर वा नयाँ आम्दानी हुँदैन।' },
        { mistake: 'बजार आकाशिएर सेयरको अनुपात बढेपछि नाफा सुरक्षित नगर्नु।', correct: 'बुल मार्केटमा सेयर बढेर ९०% पुग्यो भने केही नाफा बुक गरी मुद्दती वा ऋणपत्रमा सार्नुहोस्।', explanation: 'पुनःसन्तुलन नगर्दा बजारको चरम बिन्दुमा तपाईंको सम्पूर्ण लगानी उच्च जोखिममा पर्छ।' }
      ],
      definitions: [
        { term: 'सम्पत्ति बाँडफाँड (Asset Allocation)', full: 'जोखिम अनुसार लगानी विभाजन', meaning: 'आफ्नो कुल लगानीलाई सेयर, मुद्दती निक्षेप, ऋणपत्र र नगद बीच सन्तुलित ढंगले बाँड्ने रणनीति।' },
        { term: 'पुनःसन्तुलन (Rebalancing)', full: 'पोर्टफोलियो मिलान', meaning: 'समय-समयमा नाफा भएको सम्पत्ति बेचेर घटेको सम्पत्ति किन्दै पुरानै लक्ष्य अनुपात कायम गर्ने कार्य।' },
        { term: 'पुँजी संरक्षण (Capital Preservation)', full: 'मूलधनको सुरक्षा', meaning: 'अत्यधिक नाफा खोज्नुभन्दा आफ्नो मुख्य पुँजी कुनै हालतमा नघटोस् भन्ने उद्देश्यले गरिने सुरक्षित लगानी।' },
        { term: 'ऋणपत्र (Debenture)', full: 'बैंकको ऋणपत्र औजार', meaning: 'वाणिज्य बैंकहरूले जारी गर्ने दीर्घकालीन ऋणपत्र जसले अर्धवार्षिक रूपमा निश्चित ब्याज (८-१०.५%) प्रदान गर्दछ।' }
      ],
      faqs: [
        { q: 'के आफू बस्ने घरलाई पनि यस बाँडफाँडमा जोड्नुपर्छ?', a: 'होइन। आफू बस्ने घरले बास दिन्छ तर यसले नियमित लगानी तरलता दिँदैन। केवल तरल लगानीयोग्य रकम (सेयर, फन्ड, मुद्दती, डिबेन्चर) लाई मात्र यस सूत्रमा राख्नुहोस्।' },
        { q: 'नेपालमा पोर्टफोलियो कति समयमा Rebalance गर्नुपर्छ?', a: 'वर्षको एकपटक गरे पुग्छ। साउन वा भदौ महिना सबैभन्दा उत्तम समय हो किनभने कम्पनीहरूले लाभांश घोषणा गरिसकेका हुन्छन् र नयाँ बजेट आइसकेको हुन्छ।' },
        { q: 'नेप्से बजार घटेको बेला मेरो सूत्रले सेयर किन्न भन्यो भने के गर्ने?', a: 'त्यही नै यस रणनीतिको मुख्य शक्ति हो। बजार घट्दा सेयरको हिस्सा घटेको हुन्छ, त्यसैले मुद्दतीको ब्याज वा बचत रकमबाट सस्तो दरमा राम्रा सेयर थप्न सकिन्छ।' }
      ],
      takeaways: [
        'हल्लाको भरमा सेयर छान्नुभन्दा उमेर अनुसार सम्पत्ति बाँडफाँड गर्नु १० गुणा बढी महत्वपूर्ण छ।',
        'नेपालको ७% महँगीबाट बच्न "११० माइनस उमेर" सूत्र प्रयोग गर्नुहोस्।',
        'युवाहरूले सेयर र SIP मा जोड दिनुपर्छ भने वृद्धहरूले निश्चित ब्याज र नियमित नगद प्रवाहलाई प्राथमिकता दिनुपर्छ।',
        'वर्षको एकपटक साउनमा पोर्टफोलियो रिब्यालेन्स गरी स्वचालित रूपमा "महँगोमा बेच्ने र सस्तोमा किन्ने" बानी बसाल्नुहोस्।',
        'आफ्नो सुरक्षित पुँजीलाई एउटै संस्थामा नराखी "क" वर्गका वाणिज्य बैंक र ऋणपत्रहरूमा विविधीकरण गर्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Retirement Calculator', slug: 'calculators/retirement', key: 'retirement', desc: 'Calculate your target retirement corpus and required monthly investment.' },
      { name: 'FD Calculator', slug: 'calculators/fd', key: 'fd', desc: 'Estimate guaranteed interest returns from bank fixed deposits.' }
    ],
    downloadableResources: [
      { title: 'Annual Portfolio Rebalancing Spreadsheet (Excel)', type: 'Excel Template', format: 'XLSX File', size: '145 KB', href: 'assets/downloads/nepal-sip-mutual-fund-checklist.html' }
    ]
  },

  // ── B3. MARKET PSYCHOLOGY & DOWN MARKETS ─────────────────────────
  'market-psychology-down-markets': {
    id: 'inv-market-psychology',
    slug: 'market-psychology-down-markets',
    categorySlug: 'investing',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min reflection', np: '१५ मिनेट मनन' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Behavioral Finance & NEPSE Historical Cycles (2008-2026)', np: 'व्यवहारवादी वित्त र नेप्सेका ऐतिहासिक चक्रहरू (२०६५-२०८१) अनुसार समीक्षित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिंदैन' },
    en: {
      title: 'The Psychology of Down Markets: Surviving & Profiting in a NEPSE Bear Run',
      oneLineSummary: 'Master behavioral biases, stop panic-selling at the bottom, and understand why fortunes on NEPSE are made during bear markets and only collected in bull runs.',
      summaryPoints: [
        'NEPSE has historically moved in extreme 3-to-5-year boom-and-bust cycles: 1175 to 292 (2008-2011), 1881 to 1100 (2016-2019), and 3200 to 1800 (2021-2023).',
        'Loss aversion causes humans to feel the emotional pain of a financial loss twice as intensely as the pleasure of an equivalent gain.',
        'Selling fundamentally strong companies at a 40% loss during market crashes turns paper fluctuations into permanent destruction of capital.',
        'Stopping your monthly SIP when NEPSE is crashing is the single costliest mistake retail investors make in Nepal.',
        'Bear markets represent the only time when productive Nepali businesses are sold on deep discount; wealth is accumulated when sentiment is bleakest.'
      ],
      whatIsThis: 'Market psychology examines how cognitive biases, emotional impulses (fear and greed), and herd behavior drive stock prices far below or far above their true fundamental value. In a down market (bear market), pessimism becomes self-reinforcing: negative headlines, social media panic, and dropping portfolio values terrify investors into selling their shares at the exact moment prices are cheapest.',
      whyItMatters: 'Between August 2021 and June 2022, NEPSE crashed from an all-time peak of 3,227 down to 1,807 - wiping out hundreds of billions of rupees in paper wealth. Thousands of first-time retail investors who joined during the bull run sold their shares near the bottom in panic and abandoned the stock market forever. Investors who understand market psychology do not panic; they continue their SIPs and purchase quality assets at generational discounts.',
      howItWorks: [
        { step: 1, title: 'Recognize the Emotional Cycle of Investing', desc: 'Markets rotate through Optimism → Euphoria (top) → Anxiety → Denial → Panic → Despondency (bottom) → Hope → Relief. The bottom occurs when nobody wants to talk about stocks and tea-shop discussions go silent.' },
        { step: 2, title: 'Differentiate Price Volatility from Permanent Loss', desc: 'A share price dropping from NPR 600 to NPR 400 is an unrealized temporary decline, provided the company\'s underlying earnings and cash flows remain healthy. It only becomes a permanent loss the moment you press "Sell" on TMS.' },
        { step: 3, title: 'Never Stop Your Rupee-Cost Averaging', desc: 'If your monthly SIP of NPR 5,000 bought 50 units at NPR 100 during the bull market, that same NPR 5,000 buys 100 units when the market crashes to NPR 50. Bear markets accumulate double the assets for the same rupee.' },
        { step: 4, title: 'Limit Noise and Disconnect from Screen Watching', desc: 'Delete real-time TMS watchlist apps during bear markets. Watching live 1-minute candlestick charts activates the amygdala (fear center of the brain), compelling irrational panic sales.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'NEPSE Historical Cycles & The Cost of Panic Selling',
        headers: ['Market Cycle', 'Bull Peak (Index)', 'Bear Bottom (Index)', 'Percentage Decline', 'What Happened to Patient Investors?'],
        rows: [
          ['Cycle 1 (2008-2011)', '1,175 (Aug 2008)', '292 (Jun 2011)', '-75.1%', 'Patient accumulators gained 540% as index surged to 1,881 by 2016.'],
          ['Cycle 2 (2016-2019)', '1,881 (Jul 2016)', '1,100 (Mar 2019)', '-41.5%', 'Accumulators during the 1100-1200 lull made generational wealth in the 2020-2021 run.'],
          ['Cycle 3 (2021-2023)', '3,227 (Aug 2021)', '1,807 (Jun 2022)', '-44.0%', 'High-dividend commercial banks and blue chips traded at historically cheap single-digit P/E ratios.']
        ]
      },
      nepalContext: 'In Nepal, market sentiment is exacerbated by rumors on Telegram channels, Facebook groups, and physical brokerage trading floors. Because the free-float market cap of NEPSE is relatively small, cartels and cornering groups often propagate panic rumors to scoop up cheap shares from retail investors who trade on margin loans. Understanding that NRB monetary policy liquidity cycles (tight CD ratio vs loose liquidity) drive NEPSE swings protects you from becoming exit liquidity.',
      practicalScenario: {
        persona: 'Pradeep, 29, software engineer in Kathmandu',
        income: 'NPR 85,000 / month salary',
        scenarioText: 'Pradeep started investing when NEPSE crossed 3,000 in 2021. When the index crashed to 1,900 in 2022, his NPR 6 Lakh portfolio dropped to NPR 3.8 Lakh. Terrified of losing everything, he was about to sell all his shares on TMS.',
        solutionText: 'He reviewed company fundamentals: his holdings (Nabil Bank, Citizen Investment Trust, and an open-ended mutual fund) were all profitable and paying regular cash/bonus dividends. Instead of selling, he doubled down on his monthly SIP, investing NPR 15,000/month throughout the 1800-2000 index range. When NEPSE recovered, his portfolio surged past NPR 9.2 Lakh.',
        metricHighlight: 'Turned a 36% paper loss into NPR 9.2 Lakh wealth by accumulating at the bottom'
      },
      formula: {
        name: 'The True Cost of Panic Selling Formula',
        equation: '\\text{Panic Cost} = (\\text{Recovery Price} - \\text{Panic Sale Price}) \\times \\text{Shares Sold} + \\text{Lost Dividends}',
        variables: [
          { symbol: 'Recovery Price', name: 'Normalized Market Value', desc: 'The price the fundamentally sound company reaches when the market cycle normalizes.' },
          { symbol: 'Panic Sale Price', name: 'Bottom Exit Price', desc: 'The depressed price at which an emotional investor sold during the crash.' },
          { symbol: 'Shares Sold', name: 'Volume of Shares', desc: 'Total units dumped during the market panic.' },
          { symbol: 'Lost Dividends', name: 'Foregone Cash Flows', desc: 'Cash and bonus dividends the company distributed during the holding period.' }
        ],
        exampleCalculation: 'Sold 500 shares of a commercial bank at bottom price NPR 220 during market fear. Two years later, the price recovers to NPR 420 after paying NPR 30/share in cumulative dividends. Panic Cost = (420 - 220) * 500 + (30 * 500) = NPR 1,00,000 + NPR 15,000 = NPR 1,15,000 permanent destruction of wealth.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'See Rupee-Cost Averaging Math'
      },
      commonMistakes: [
        { mistake: 'Stopping your monthly SIP when NEPSE enters a red bear market.', correct: 'Bear markets are when SIP units are cheapest; pausing defeats the entire compounding purpose.', explanation: 'Stopping your SIP at the bottom locks in high average purchase costs from the bull market and misses the cheap unit accumulation phase.' },
        { mistake: 'Checking TMS portfolio value 5 times every trading day.', correct: 'If you are a long-term investor, check your portfolio once a month or quarter.', explanation: 'Hyper-monitoring causes cortisol spikes and short-term emotional trading decisions.' },
        { mistake: 'Assuming that because a stock was once NPR 1,000, it must return to NPR 1,000.', correct: 'Differentiate between fundamentally solid companies and speculative bubbles.', explanation: 'Speculative companies with zero earnings may never see their bull-market highs again; always check quarterly earnings.' }
      ],
      definitions: [
        { term: 'Loss Aversion', full: 'Noksani Darr', meaning: 'The psychological tendency to feel pain from financial losses roughly twice as intensely as equivalent gains.' },
        { term: 'Bear Market', full: 'Manda Bajar', meaning: 'A prolonged period of falling stock prices, typically marked by a decline of 20% or more from recent peaks accompanied by widespread pessimism.' },
        { term: 'Rupee-Cost Averaging', full: 'Lagani Ausat Garne Bidhi', meaning: 'Investing a fixed amount of rupees at regular intervals regardless of share price, buying more units when prices are low and fewer when high.' },
        { term: 'Unrealized Loss', full: 'Kagaji Noksan', meaning: 'A decrease in the market value of an unsold asset that only becomes a real loss when the asset is sold.' }
      ],
      faqs: [
        { q: 'How do I know if NEPSE has hit the bottom?', a: 'Nobody can predict the exact bottom. The bottom is usually reached when turnover drops sharply, trading floors are empty, media coverage is purely negative, and quality stocks trade at single-digit P/E ratios.' },
        { q: 'Should I buy more stocks when the market is crashing?', a: 'Yes, if you have surplus long-term cash and you are investing in companies with strong balance sheets, high return on equity (ROE), and reliable dividend histories.' },
        { q: 'What if a company I own goes bankrupt in Nepal?', a: 'In Nepal, Class A commercial banks and regulated financial institutions are closely monitored by NRB with strict capital adequacy rules, making outright bankruptcy extremely rare compared to unregulated cooperatives.' }
      ],
      takeaways: [
        'Bear markets are not financial disasters; they are the clearance sales where long-term wealth is built.',
        'Never sell solid, dividend-paying companies in panic just because the overall index is red.',
        'Keep your automated SIP running without interruption - bear markets are when you acquire the most units.',
        'Tune out the panic on Facebook groups, Telegram forums, and clubhouse discussions.',
        'Wealth is accumulated in bear markets through patient discipline and only harvested during bull runs.'
      ]
    },
    np: {
      title: 'घट्दो बजारको मनोविज्ञान: नेप्से मन्दी (Bear Market) मा कसरी टिक्ने र कमाउने?',
      oneLineSummary: 'लगानीकर्ताको डर र लोभको मनोविज्ञान बुझ्नुहोस्, बजारको तल्लो बिन्दुमा सेयर बेच्ने गल्ती रोक्नुहोस् र मन्दीबाट सम्पत्ति बनाउन सिक्नुहोस्।',
      summaryPoints: [
        'नेप्सेको इतिहास ३ देखि ५ वर्षको तीव्र चक्रमा घुम्छ: १,१७५ बाट २९२ (२०६५-२०६८), १,८८१ बाट १,१०० (२०७३-२०७६), र ३,२२७ बाट १,८०७ (२०७८-२०७९)।',
        'मानव मनोविज्ञानमा नोक्सानीको डर (Loss Aversion) नाफाको खुसीभन्दा दोब्बर पीडादायी महसुस हुन्छ।',
        'बजार घट्दा राम्रा कम्पनीको सेयर ४०% घाटामा बेच्नु भनेको अस्थायी मूल्य गिरावटलाई सधैँका लागि वास्तविक नोक्सानीमा बदल्नु हो।',
        'नेप्से घटिरहेको बेला मासिक SIP रोक्नु नेपाली साना लगानीकर्ताले गर्ने सबैभन्दा ठूलो र महँगो गल्ती हो।',
        'मन्दीको बजार नै यस्तो समय हो जब नेपालका नाफामूलक कम्पनीहरू निकै सस्तो छुट मूल्यमा पाइन्छन्; सम्पत्ति यही बेला जम्मा हुन्छ र बुलमा मात्र देखिन्छ।'
      ],
      whatIsThis: 'बजार मनोविज्ञान भनेको लगानीकर्ताको भावना (डर र लोभ), हल्ला, र भीडको व्यवहारले सेयरको मूल्यलाई उसको वास्तविक वित्तीय हैसियतभन्दा निकै माथि वा निकै तल पुर्‍याउने प्रक्रियाको अध्ययन हो। घट्दो बजार (Bear Market) मा नकारात्मक समाचार र पोर्टफोलियो घटेको देखेर आत्तिएका मानिसहरू सस्तो मूल्यमा सेयर फाल्न थाल्छन्।',
      whyItMatters: '२०७८ भदौमा ३,२२७ पुगेको नेप्से २०७९ असारसम्म घटेर १,८०७ मा झर्दा लाखौँ लगानीकर्ताको अर्बौं रुपैयाँ कागजी सम्पत्ति घट्यो। बुल बजारमा आएका हजारौँ नयाँ लगानीकर्ताले डरको मारेर तल्लो बिन्दुमा सेयर बेचे र बजार छाडे। बजारको मनोविज्ञान बुझ्ने मानिसहरू यस बेला आत्तिँदैनन्, बरु नियमित SIP चलाएर सस्तोमा इकाइ जम्मा गर्छन्।',
      howItWorks: [
        { step: 1, title: 'लगानीको भावनात्मक चक्र बुझ्नुहोस्', desc: 'बजार आशा → अत्यधिक उत्साह (शिखर) → चिन्ता → अस्वीकार → त्रास (Panic) → चरम निराशा (तल्लो बिन्दु) → पुनः आशा हुँदै घुम्छ। जब चिया पसलमा सेयरको कुरा हुन छाड्छ, त्यही नै बजारको तल्लो बिन्दु नजिक हुन्छ।' },
        { step: 2, title: 'मूल्यको उतारचढाव र स्थायी नोक्सानी बीचको फरक चिन्नुहोस्', desc: 'रु. ६०० को सेयर घटेर रु. ४०० हुनु अस्थायी कागजी गिरावट हो यदि कम्पनीको नाफा र व्यवसाय सुरक्षित छ भने। तर तपाईंले TMS मा "Sell" थिचेको क्षण त्यो स्थायी नोक्सानीमा परिणत हुन्छ।' },
        { step: 3, title: 'Rupee-Cost Averaging (SIP) कहिल्यै नरोक्नुहोस्', desc: 'यदि बुल मार्केटमा रु. ५,००० ले रु. १०० दरका ५० इकाइ आउँथ्यो भने मन्दीमा त्यही रु. ५,००० ले रु. ५० दरका १०० इकाइ आउँछ। घट्दो बजारले तपाईंलाई दोब्बर सम्पत्ति जोड्ने मौका दिन्छ।' },
        { step: 4, title: 'दैनिक स्क्रिन हेर्ने बानी बन्द गर्नुहोस्', desc: 'मन्दीको बेला दैनिक TMS एप खोलेर १-१ मिनेटको क्यान्डलस्टिक हेर्ने बानीले दिमागको डर पैदा गर्ने भागलाई सक्रिय बनाउँछ र गलत निर्णय गराउँछ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेप्सेका ऐतिहासिक मन्दी चक्रहरू र धैर्यवान लगानीकर्ताको नतिजा',
        headers: ['बजार चक्र', 'शिखर बिन्दु (Index)', 'तल्लो बिन्दु (Index)', 'गिरावट प्रतिशत', 'धैर्यवान लगानीकर्तालाई के भयो?'],
        rows: [
          ['चक्र १ (२०६५-२०६८)', '१,१७५ (२०६५ भदौ)', '२९२ (२०६८ असार)', '-७५.१%', 'तल्लो बिन्दुमा धैर्यपूर्वक सेयर किन्नेले २०७३ सम्ममा ५४०% सम्मको ऐतिहासिक नाफा कमाए।'],
          ['चक्र २ (२०७३-२०७६)', '१,८८१ (२०७३ साउन)', '१,१०० (२०७५ फागुन)', '-४१.५%', '११००-१२०० को मन्दीमा नियमित सेयर किन्नेहरूले २०७८ को ३२०० को बुलमा जीवन बदल्ने सम्पत्ति बनाए।'],
          ['चक्र ३ (२०७८-२०८०)', '३,२२७ (२०७८ भदौ)', '१,८०७ (२०७९ असार)', '-४४.०%', 'वाणिज्य बैंक र बलिया कम्पनीका सेयर इतिहासमै सस्तो एकल अंकको P/E रेसियोमा उपलब्ध भए।']
        ]
      },
      nepalContext: 'नेपालमा टेलिग्राम ग्रुप, फेसबुक पेज र ब्रोकर कार्यालयको चिया गफले बजारको डरलाई अत्यधिक बढाइदिन्छ। नेप्सेको बजार आकार सानो भएकाले कतिपय समूहले जानाजानी नकारात्मक हल्ला फैलाएर साना लगानीकर्ताको सेयर सस्तोमा हडप्ने गर्छन्। राष्ट्र बैंकको मौद्रिक नीति, तरलता (CD Ratio) र ब्याजदरको चक्र बुझ्ने लगानीकर्ता यस्ता हल्लाको पछि लाग्दैनन्।',
      practicalScenario: {
        persona: 'प्रदीप, २९, काठमाडौँका सफ्टवेयर इन्जिनियर',
        income: 'मासिक तलब रु. ८५,000',
        scenarioText: 'प्रदीपले २०७८ मा नेप्से ३००० माथि हुँदा ६ लाख लगानी सुरु गरे। २०७९ मा बजार १९०० मा झर्दा उनको पोर्टफोलियो घटेर ३.८ लाख भयो। पूरै डुब्ने डरले उनले सबै सेयर घाटामा बेच्ने निर्णय गर्न लागेका थिए।',
        solutionText: 'उनले कम्पनीहरूको वित्तीय विवरण हेरे: नबिल बैंक, नागरिक लगानी कोष र म्युचुअल फन्ड सबै नाफामा थिए र लाभांश दिइरहेका थिए। उनले बेच्नुको साटो १८००-२००० को बजारमा मासिक १५ हजारको SIP थपे। पछि बजार पुनरुत्थान हुँदा उनको कुल पोर्टफोलियो ९.२ लाख नाघ्यो।',
        metricHighlight: '३६% कागजी घाटालाई धैर्य र मन्दीको लगानीबाट रु. ९.२ लाखको सम्पत्तिमा रूपान्तरण'
      },
      formula: {
        name: 'डरमा सेयर बेच्दा हुने वास्तविक नोक्सानीको हिसाब',
        equation: '\\text{वास्तविक नोक्सानी} = (\\text{पुनरुत्थान मूल्य} - \\text{डरमा बेचेको मूल्य}) \\times \\text{कित्ता} + \\text{गुमेको लाभांश}',
        variables: [
          { symbol: 'पुनरुत्थान मूल्य', name: 'सामान्य अवस्थाको सेयर दर', desc: 'कम्पनीको बजार चक्र सामान्य हुँदा पुग्ने उचित मूल्य।' },
          { symbol: 'डरमा बेचेको मूल्य', name: 'घटेको बेलाको बिक्री दर', desc: 'आत्तिएर लगानीकर्ताले मन्दीको तल्लो बिन्दुमा बेचेको दर।' },
          { symbol: 'कित्ता', name: 'बिक्री गरिएको सेयर संख्या', desc: 'डरको बेला बजारमा फालिएको कुल सेयर कित्ता।' },
          { symbol: 'गुमेको लाभांश', name: 'नपाएको नगद र बोनस', desc: 'सेयर होल्ड गर्दा पाइने नियमित लाभांश आम्दानी।' }
        ],
        exampleCalculation: 'मन्दीमा आत्तिएर वाणिज्य बैंकको ५०० कित्ता रु. २२० मा बेचियो। २ वर्षपछि बजार सम्हालिएर रु. ४२० पुग्यो र यसबीच प्रति कित्ता रु. ३० लाभांश दियो। डरको नोक्सानी = (४२० - २२०) * ५०० + (३० * ५००) = रु. १,००,००० + रु. १५,००० = रु. १,१५,००० स्थायी सम्पत्ति नोक्सान।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'SIP कम्पाउन्डिङ क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'नेप्से रातो भएर बजार घट्दा मासिक SIP रोक्नु।', correct: 'मन्दी भनेको SIP का लागि सबैभन्दा धेरै इकाइ सस्तोमा किन्ने सुनौलो अवसर हो।', explanation: 'घटेको बेला SIP रोक्दा तपाईंले महँगोमा मात्र इकाइ किनेको ठहरिन्छ र औसत लागत घटाउने मौका गुम्छ।' },
        { mistake: 'दिनभरि TMS अगाडि बसेर रातो क्यान्डल हेर्दै तनाव लिनु।', correct: 'दीर्घकालीन लगानीकर्ता हुनुहुन्छ भने महिनामा वा त्रैमासमा एकपटक मात्र पोर्टफोलियो हेर्नुहोस्।', explanation: 'अत्यधिक स्क्रिन हेर्दा दिमागले डरको हर्मोन निकाल्छ र गलत निर्णय गराउँछ।' },
        { mistake: 'जुनसुकै घटेको सेयर पनि फेरि पुरानै मूल्यमा फर्किन्छ भन्ने सोच्नु।', correct: 'कम्पनीको वास्तविक नाफा र व्यापार हेरेर मात्र होल्ड गर्नुहोस्।', explanation: 'कुनै व्यवसाय नै नभएका speculative कम्पनीहरू बुल सकिएपछि कहिल्यै पुरानो मूल्यमा फर्कंदैनन्।' }
      ],
      definitions: [
        { term: 'Loss Aversion', full: 'नोक्सानीको डर', meaning: 'समान रकमको नाफाबाट हुने खुसीभन्दा नोक्सानीबाट हुने मानसिक पीडा दोब्बर बढी हुने मनोवैज्ञानिक अवस्था।' },
        { term: 'Bear Market (मन्दी बजार)', full: 'घट्दो सेयर बजार', meaning: 'बजारको उच्चतम बिन्दुबाट २०% भन्दा बढी गिरावट आई लामो समयसम्म निराशा छाउने अवस्था।' },
        { term: 'Rupee-Cost Averaging', full: 'लागत औसत गर्ने विधि', meaning: 'बजारको मूल्य जति भए पनि नियमित रूपमा निश्चित रकम लगानी गरी औसत लागत कम गर्ने पद्धति।' },
        { term: 'Unrealized Loss (कागजी घाटा)', full: 'नबेचेसम्मको घाटा', meaning: 'सेयरको बजार मूल्य घट्दा देखिने घाटा, जुन सेयर नबेचेसम्म वास्तविक नोक्सानी बन्दैन।' }
      ],
      faqs: [
        { q: 'नेप्सेको तल्लो बिन्दु (Bottom) कसरी थाहा पाउने?', a: 'कसैले पनि ठ्याक्कै तल्लो बिन्दु ठोकुवा गर्न सक्दैन। तर दैनिक कारोबार रकम (Turnover) निकै सुक्नु, चारैतिर चरम निराशा हुनु र राम्रा कम्पनी एकल अंकको P/E मा आउनु तल्लो बिन्दुको लक्षण हो।' },
        { q: 'बजार घट्दा थप सेयर किन्नु ठीक हो?', a: 'हो, यदि तपाईंसँग कम्तीमा ३ देखि ५ वर्ष नचाहिने बचत रकम छ र तपाईंले बलिया वाणिज्य बैंक वा नियमित लाभांश दिने कम्पनी छान्नुभएको छ भने यो उत्तम समय हो।' },
        { q: 'के नेपालका कम्पनीहरू डुब्ने सम्भावना हुन्छ?', a: 'नेपाल राष्ट्र बैंकले नियमन गर्ने "क" वर्गका वाणिज्य बैंकहरूमा कडा पुँजी पर्याप्तता नियम लागू हुने भएकाले सहकारी जस्तो एकाएक डुब्ने जोखिम निकै न्यून हुन्छ।' }
      ],
      takeaways: [
        'घट्दो बजार लगानीकर्ताका लागि विपत्ति होइन, छुट मूल्यमा सम्पत्ति किन्ने अवसर हो।',
        'बजार घटेकै कारणले मात्र राम्रा र लाभांश दिने कम्पनीहरूको सेयर डरमा नफाल्नुहोस्।',
        'आफ्नो स्वचालित SIP लाई मन्दीमा निरन्तरता दिनुहोस् - यही बेला सबैभन्दा धेरै युनिट जम्मा हुन्छन्।',
        'फेसबुक, टेलिग्राम र सामाजिक सञ्जालमा फैलाइने बजारको अनावश्यक हल्लाबाट टाढै रहनुहोस्।',
        'सम्पत्ति सधैँ मन्दीको बजारमा धैर्यपूर्वक जोडिन्छ र बुल मार्केटमा मात्र त्यसको वास्तविक फल देखिन्छ।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Simulate how continuing SIP through down markets boosts long-term returns.' },
      { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'See how inflation erodes uninvested cash during bear markets.' }
    ],
    downloadableResources: [
      { title: 'NEPSE Market Cycle Survival Checklist (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '175 KB', href: 'assets/downloads/nepse-first-time-investor-checklist.html' }
    ]
  }

};

// BATCH D - BANKING (5 lessons)
// Category: banking

export const BATCH_D = {

  // ── D1. DEPOSIT TYPES & FIXED DEPOSIT ─────────────────────────────
  'deposit-types-fixed-deposit-nepal': {
    id: 'bank-deposit-types',
    slug: 'deposit-types-fixed-deposit-nepal',
    categorySlug: 'banking',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min rate comparison', np: '१५ मिनेट ब्याजदर विश्लेषण' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'NRB Directive 15 & Commercial Bank Interest Rate Disclosures', np: 'नेपाल राष्ट्र बैंक निर्देशन १५ र वाणिज्य बैंक ब्याजदर मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'Bank Classes in Nepal (NRB Tiers)', np: 'नेपालमा बैंकका वर्गहरू' },
    en: {
      title: 'Savings vs. Current vs. Fixed Deposit (FD) in Nepal: The Complete Yield Guide',
      oneLineSummary: 'Compare everyday liquid savings, non-interest current accounts, and compound-interest fixed deposits - including NRB senior citizen and remittance bonus rates.',
      summaryPoints: [
        'Current Accounts (Chalu Khata) are designed for business transaction volume and earn 0% interest under NRB regulations.',
        'Savings Accounts (Bachat Khata) provide daily liquidity with interest calculated on daily minimum balances and credited quarterly.',
        'Fixed Deposits (Muddati Khata) lock funds for 3 months to 10 years in exchange for guaranteed higher compounding interest rates.',
        'NRB mandates a minimum +1.0% higher interest rate on fixed deposits opened using verified foreign employment remittance inflows.',
        'Breaking a fixed deposit prematurely triggers a penalty (typically 1.0%-1.5% interest reduction or forfeiture of recent accrued interest).'
      ],
      whatIsThis: 'Commercial banks and financial institutions in Nepal offer three foundational deposit categories: Current accounts for high-velocity business transactions, Savings accounts for liquid emergency funds and day-to-day spending, and Fixed Deposits (FD / Term Deposits) for locking capital to earn guaranteed compound interest over a predetermined maturity timeline.',
      whyItMatters: 'Millions of Nepalis leave large cash sums (NPR 5 Lakh to 20 Lakh) sitting idle in ordinary savings accounts yielding 3%-4%, while official inflation runs at 6%-7%. Over 5 years, this purchasing power loss exceeds tens of thousands of rupees. Conversely, locking money needed next month into a 3-year FD results in steep penalty charges when broken early. Matching cash needs to the correct deposit instrument preserves liquidity while maximizing yields.',
      howItWorks: [
        { step: 1, title: 'Analyze Your Liquidity Horizon', desc: 'Money needed within 30 days belongs in high-interest liquid savings. Money earmarked for goals 6 months to 5 years away (e.g., child tuition, house down payment) belongs in a Fixed Deposit.' },
        { step: 2, title: 'Compare Published Monthly Interest Slabs', desc: 'On the 1st of every Nepali month, all Class A banks publish unified interest rates in national dailies. Compare quarterly compounding vs monthly payout options.' },
        { step: 3, title: 'Leverage Remittance & Senior Citizen Perks', desc: 'If a family member remits funds from the Gulf, Korea, or abroad, request a specialized "Remittance Fixed Deposit" for an automatic +1.0% bonus yield. Seniors (60+) often qualify for an additional +0.5% premium.' },
        { step: 4, title: 'Select Payout Option (Cumulative vs Periodic)', desc: 'Choose "Cumulative" (reinvesting quarterly interest) to maximize compound growth. If you need monthly cash flow for retirement living, select "Monthly Interest Credit".' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Comparison of Primary Bank Deposit Accounts in Nepal',
        headers: ['Feature', 'Current Account (Chalu)', 'Savings Account (Bachat)', 'Fixed Deposit (Muddati)'],
        rows: [
          ['Target User', 'Businesses, Pvt Ltd, Traders', 'Salaried individuals, Students', 'Long-term savers, Retirees'],
          ['Interest Rate', '0% (Mandated by NRB)', '2.5% - 4.5% per annum', '6.5% - 9.5% (higher for remittance)'],
          ['Withdrawal Restrictions', 'Unlimited transactions & cheque leaves', 'ATM limits (NPR 1 Lakh/day)', 'Locked until agreed maturity date'],
          ['Tax on Interest', 'Not applicable (Zero interest)', '5% Final Withholding Tax', '5% Final Withholding Tax'],
          ['Premature Exit', 'Free anytime', 'Free anytime', 'Penalty fee: 1.0% - 1.5% interest reduction']
        ]
      },
      nepalContext: 'In Nepal, NRB guidelines require banks to calculate savings account interest on the minimum daily ledger balance and credit it to the customer at the end of each Nepali quarter (Ashwin, Poush, Chaitra, Ashadh). Furthermore, banks must publish their deposit rates for the upcoming month on the last day of the current month. Since rate competition is active, a saver who compares monthly publications across Class A banks can lock in higher rates for 1 to 3 years.',
      practicalScenario: {
        persona: 'Anuj, 55, retired civil servant in Birgunj',
        income: 'NPR 18 Lakh retirement gratuity lump-sum',
        scenarioText: 'Anuj kept NPR 18 Lakh in an ordinary savings account earning 3.25% interest for 14 months because he didn\'t want to commit to a lengthy bank contract. He earned only NPR 68,000 in interest while food inflation jumped 8%.',
        solutionText: 'He structured an FD ladder: NPR 3 Lakh in a high-yield liquid savings account for emergencies, and NPR 15 Lakh split across three separate FDs (1-year, 2-year, and 3-year) at an average rate of 8.25% with quarterly compounding. His annual interest jumped from NPR 58,500 to NPR 1,23,750 - more than doubling his passive retirement income.',
        metricHighlight: 'Increased annual interest earnings from NPR 58,500 to NPR 1,23,750'
      },
      formula: {
        name: 'Quarterly Compound Interest on Fixed Deposits',
        equation: 'A = P \\left(1 + \\frac{r}{4}\\right)^{4t} \\quad | \\quad \\text{Net Interest} = (A - P) \\times (1 - 0.05)',
        variables: [
          { symbol: 'P', name: 'Principal Amount', desc: 'Initial deposit in Nepalese Rupees.' },
          { symbol: 'r', name: 'Annual Interest Rate', desc: 'Nominal annual interest rate in decimal form (e.g., 0.08 for 8%).' },
          { symbol: '4', name: 'Quarterly Compounding Frequency', desc: 'NRB standard compounding 4 times per year.' },
          { symbol: 't', name: 'Tenure in Years', desc: 'Duration of the fixed deposit in completed years.' },
          { symbol: '0.05', name: 'Nepal Withholding Tax', desc: 'Flat 5.0% government withholding tax deducted automatically from earned interest.' }
        ],
        exampleCalculation: 'Deposit NPR 10,00,000 in a 2-year FD at 8.0% interest. Maturity value before tax: A = 10,00,000 * (1 + 0.08/4)^(4*2) = NPR 11,71,659. Total gross interest = NPR 1,71,659. Net after 5% tax = 1,71,659 * 0.95 = NPR 1,63,076 net profit.',
        shortcutCalcSlug: 'calculators/fd',
        shortcutCalcName: 'Calculate Fixed Deposit Interest'
      },
      commonMistakes: [
        { mistake: 'Putting emergency fund cash into a 3-year fixed deposit.', correct: 'Keep 3 to 6 months of living expenses in an accessible high-yield savings account.', explanation: 'Breaking an FD early to pay emergency medical bills incurs penalty charges and forfeits high returns.' },
        { mistake: 'Depositing remittance cash into a regular FD without declaring foreign employment.', correct: 'Provide foreign employment visa / passport stamp to claim the mandatory +1.0% NRB remittance bonus rate.', explanation: 'Banks only apply the premium remittance interest rate when remittance origin is formally verified.' },
        { mistake: 'Letting an expired FD sit in non-renewing limbo.', correct: 'Enable "Auto-Renewal" (Swachālit Navikaran) with principal plus interest on the FD application form.', explanation: 'Unrenewed expired FDs are converted into standard savings accounts earning minimal interest.' }
      ],
      definitions: [
        { term: 'Fixed Deposit (FD)', full: 'Muddati Khata', meaning: 'A bank deposit where a fixed sum is locked for a predetermined duration at a guaranteed contracted interest rate.' },
        { term: 'Remittance FD', full: 'Bipreshan Muddati Khata', meaning: 'A high-interest fixed deposit account reserved for unitholders depositing funds received directly from foreign employment.' },
        { term: 'Quarterly Compounding', full: 'Traimasik Chakrabriddhi Byaj', meaning: 'Interest calculation where accrued interest is added to the principal balance every three months, generating interest on interest.' },
        { term: 'Premature Liquidation', full: 'Muddati Khata Awadhi Pugnu Aghi Toḍnu', meaning: 'Withdrawing funds from a fixed deposit before its maturity date, subject to bank penalty fees.' }
      ],
      faqs: [
        { q: 'Can I take a bank loan against my Fixed Deposit in Nepal?', a: 'Yes. Under NRB directives, you can borrow up to 90% of your FD value instantly at an interest rate typically 1.0% to 2.0% above your FD rate, without breaking the deposit.' },
        { q: 'Is the interest earned from Fixed Deposits taxable in Nepal?', a: 'Yes. The bank automatically deducts a flat 5.0% final withholding tax from your interest payout on behalf of the Inland Revenue Department (IRD).' },
        { q: 'What is an FD Ladder?', a: 'An FD ladder divides your capital across multiple maturity periods (e.g., 1-year, 2-year, 3-year). Each year, one FD matures, providing liquidity or the opportunity to reinvest at higher rates.' }
      ],
      takeaways: [
        'Match cash to horizons: Current for business, Savings for 30-day needs, FD for 6+ month goals.',
        'Always check for the NRB-mandated +1.0% remittance premium if receiving money from abroad.',
        'Use an FD ladder (staggered 1, 2, and 3-year maturities) to maintain annual liquidity.',
        'You can take a 90% loan against your FD in emergencies instead of paying early-break penalties.',
        'Verify that your FD is set to Auto-Renewal with principal plus compounding interest.'
      ]
    },
    np: {
      title: 'नेपालमा बचत, चल्ती र मुद्दती निक्षेपको तुलना: अधिकतम ब्याज कमाउने तरिका',
      oneLineSummary: 'दैनिक चल्ने तरल बचत, ब्याज नआउने चल्ती र चक्रवृद्धि ब्याज दिने मुद्दती खाता बीचको भिन्नता, ज्येष्ठ नागरिक र रेमिट्यान्स थप ब्याज सुविधा बुझ्नुहोस्।',
      summaryPoints: [
        'चल्ती खाता (Current Account) व्यापारिक प्रयोजनका लागि हो; राष्ट्र बैंकको नियम अनुसार यसमा ०% ब्याज हुन्छ।',
        'बचत खाता (Savings Account) ले दैनिक तरलता दिन्छ; यसमा दैनिक मौज्दातमा ब्याज हिसाब भई त्रैमासिक रूपमा जम्मा हुन्छ।',
        'मुद्दती निक्षेप (Fixed Deposit) मा ३ महिनादेखि १० वर्षसम्म रकम रोक्का राखे बापत उच्च र ग्यारेन्टी गरिएको चक्रवृद्धि ब्याज पाइन्छ।',
        'वैदेशिक रोजगारीबाट आएको रेमिट्यान्स रकम मुद्दतीमा राख्दा राष्ट्र बैंकको निर्देशन अनुसार कम्तीमा +१.०% अतिरिक्त ब्याज अनिवार्य पाइन्छ।',
        'म्याद पुग्नुअगावै मुद्दती तोड्दा बैंकहरूले १.०% देखि १.५% सम्म जरिवाना (ब्याज कट्टी) गर्दछन्।'
      ],
      whatIsThis: 'नेपालका वाणिज्य बैंक तथा वित्तीय संस्थाहरूले ग्राहकका आवश्यकता अनुसार तीन प्रमुख खाता उपलब्ध गराउँछन्: व्यापारिक कारोबारका लागि चल्ती खाता, दैनिक खर्च र आपतकालीन सुरक्षाका लागि बचत खाता, र निश्चित अवधिका लागि रकम राखेर उच्च चक्रवृद्धि ब्याज कमाउन मुद्दती निक्षेप।',
      whyItMatters: 'लाखौँ नेपालीले रु. ५ लाखदेखि २० लाखसम्मको ठूलो रकम ३% मात्र ब्याज दिने साधारण बचत खातामै वर्षौँसम्म छाडिदिन्छन्, जबकि महँगी वार्षिक ७% ले बढिरहेको हुन्छ। यसले गर्दा पैसाको क्रयशक्ति दिनानुदिन घट्छ। अर्कोतर्फ, अर्को महिना चाहिने पैसा ३ वर्षे मुद्दतीमा हाल्दा आकस्मिक रूपमा तोड्नुपर्दा भारी जरिवाना तिर्नुपर्छ। सही रकम सही खातामा राख्दा तरलता र उच्च आम्दानी दुवै मिल्छ।',
      howItWorks: [
        { step: 1, title: 'आफ्नो रकम चाहिने समय (Horizon) निर्धारण गर्नुहोस्', desc: 'आगामी ३० दिनभित्र चाहिने खर्च तरल बचत खातामै राख्नुहोस्। ६ महिनादेखि ५ वर्षसम्म नचाहिने रकम (जस्तै छोराछोरीको पढाइ, घरको डाउनपेमेन्ट) मुद्दती निक्षेपमा राख्नुहोस्।' },
        { step: 2, title: 'बैंकहरूले प्रकाशित गर्ने मासिक ब्याजदर तुलना गर्नुहोस्', desc: 'प्रत्येक नेपाली महिनाको १ गते सबै वाणिज्य बैंकहरूले राष्ट्रिय पत्रिकामा नयाँ ब्याजदर प्रकाशित गर्छन्। त्रैमासिक चक्रवृद्धि ब्याज दिने बैंक छान्नुहोस्।' },
        { step: 3, title: 'रेमिट्यान्स र ज्येष्ठ नागरिक सुविधा लिनुहोस्', desc: 'यदि विदेश (खाडी, कोरिया, युरोप आदि) बाट रेमिट्यान्स आएको पैसा हो भने +१.०% बढी ब्याज पाउने "रेमिट्यान्स मुद्दती" माग्नुहोस्। ६० वर्ष नाघेका ज्येष्ठ नागरिकले थप +०.५% ब्याज पाउँछन्।' },
        { step: 4, title: 'ब्याज भुक्तानी विकल्प (पुनःलगानी वा मासिक) रोज्नुहोस्', desc: 'सम्पत्ति बढाउन "चक्रवृद्धि (Cumulative)" रोज्नुहोस् जहाँ ब्याज पनि साँवामा जोडिन्छ। मासिक खर्च चलाउन चाहने वृद्धवृद्धाले "मासिक ब्याज भुक्तानी" रोज्न सक्छन्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालका प्रमुख बैंक खाताहरूको तुलनात्मक विवरण',
        headers: ['विशेषता', 'चल्ती खाता (Current)', 'बचत खाता (Savings)', 'मुद्दती निक्षेप (Fixed Deposit)'],
        rows: [
          ['लक्षित ग्राहक', 'व्यवसायी, फर्म, कम्पनीहरू', 'तलब पाउने व्यक्ति, विद्यार्थी', 'दीर्घकालीन बचतकर्ता, सेवानिवृत्त'],
          ['ब्याजदर', '०% (राष्ट्र बैंकको निर्देशन अनुसार)', '२.५% - ४.५% वार्षिक', '६.५% - ९.५% (रेमिट्यान्समा अझ बढी)'],
          ['पैसा झिक्ने सुविधा', 'असीमित कारोबार र चेक जारी गर्न मिल्ने', 'ATM सीमा (दैनिक रु. १ लाख)', 'तोकिएको अवधि नपुगी झिक्न नपाइने'],
          ['ब्याजमा सरकारी कर', 'लागू नहुने (ब्याज नै नहुने)', '५% अन्तिम स्रोतमा कट्टी हुने कर', '५% अन्तिम स्रोतमा कट्टी हुने कर'],
          ['समयअगावै झिक्दा', 'कुनै शुल्क लाग्दैन', 'कुनै शुल्क लाग्दैन', 'जरिवाना: १.०% देखि १.५% ब्याज कट्टी']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकको निर्देशन अनुसार बैंकहरूले बचत खाताको ब्याज दैनिक न्यूनतम मौज्दात (Daily Minimum Balance) मा हिसाब गर्नुपर्छ र हरेक त्रैमास (असोज, पुस, चैत, असार मसान्त) मा खातामा जम्मा गरिदिनुपर्छ। महिना सकिनु अघिल्लो दिन बैंकहरूले अर्को महिनाको ब्याजदर सार्वजनिक गर्ने भएकाले सचेत बचतकर्ताले बैंकहरूबीच तुलना गरेर राम्रो दरमा मुद्दती बाँध्न सक्छन्।',
      practicalScenario: {
        persona: 'अनुज, ५५, वीरगञ्जका अवकाशप्राप्त निजामती कर्मचारी',
        income: 'उपदान बापत पाएको एकमुष्ट रु. १८ लाख',
        scenarioText: 'अनुजले मुद्दतीको झन्झट मान्दै १८ लाख रुपैयाँ साधारण बचत खातामै ३.२५% ब्याजमा १४ महिनासम्म राखे। महँगी ८% ले बढ्दा उनले वर्षभरिमा जम्मा रु. ६८,००० मात्र ब्याज पाए।',
        solutionText: 'उनले FD Ladder रणनीति अपनाए: रु. ३ लाख आकस्मिक खर्चका लागि बचत खातामै राखे, र बाँकी रु. १५ लाखलाई १ वर्ष, २ वर्ष र ३ वर्षे मुद्दतीमा औसत ८.२५% ब्याजमा बाँडे। उनको वार्षिक खुद ब्याज आम्दानी रु. ५८,५०० बाट बढेर रु. १,२३,७५० पुग्यो - ब्याज आम्दानी दोब्बरभन्दा बढी भयो।',
        metricHighlight: 'वार्षिक ब्याज आम्दानी रु. ५८,५०० बाट बढाएर रु. १,२३,७५० पुर्‍याए'
      },
      formula: {
        name: 'मुद्दती निक्षेपको त्रैमासिक चक्रवृद्धि ब्याज सूत्र',
        equation: 'A = P \\left(१ + \\frac{r}{४}\\right)^{४t} \\quad | \\quad \\text{खुद ब्याज} = (A - P) \\times (१ - ०.०५)',
        variables: [
          { symbol: 'P', name: 'साँवा रकम', desc: 'मुद्दती खातामा जम्मा गरिएको प्रारम्भिक रकम।' },
          { symbol: 'r', name: 'वार्षिक ब्याजदर', desc: 'दशमलवमा व्यक्त वार्षिक ब्याजदर (जस्तै ८% का लागि ०.०८)।' },
          { symbol: '४', name: 'त्रैमासिक चक्रवृद्धि चक्र', desc: 'नेपालमा वर्षमा ४ पटक (हरेक ३ महिनामा) ब्याज साँवामा जोडिन्छ।' },
          { symbol: 't', name: 'अवधि (वर्ष)', desc: 'मुद्दती निक्षेपको कुल वर्ष।' },
          { symbol: '०.०५', name: 'सरकारी लाभकर', desc: 'ब्याज आम्दानीमा बैंकले काट्ने ५.०% अन्तिम कर।' }
        ],
        exampleCalculation: 'रु. १० लाख २ वर्षे मुद्दतीमा ८.०% ब्याजमा राख्दा: कर अघिको परिपक्व रकम: A = १०,००,००० * (१ + ०.०८/४)^(४*२) = रु. ११,७१,६५९। कुल ब्याज = रु. १,७१,६५९। ५% कर कटाउँदा = १,७१,६५९ * ०.९५ = रु. १,६३,०७६ खुद नाफा।',
        shortcutCalcSlug: 'calculators/fd',
        shortcutCalcName: 'मुद्दती ब्याज क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'आपतकालीन कोषको सम्पूर्ण पैसा ३ वर्षे मुद्दतीमा हाल्नु।', correct: 'कम्तीमा ३ देखि ६ महिनाको खर्च तरल बचत खातामै राख्नुहोस्।', explanation: 'बिरामी पर्दा वा आकस्मिक खर्च आउँदा मुद्दती तोड्नुपर्छ र जरिवानाले ब्याज गुम्छ।' },
        { mistake: 'विदेशबाट आएको पैसा मुद्दतीमा राख्दा रेमिट्यान्स खाता नखोल्नु।', correct: 'राहदानी र भिसा पेश गरी +१.०% अतिरिक्त रेमिट्यान्स ब्याज दाबी गर्नुहोस्।', explanation: 'प्रमाण पेश नगरे बैंकले साधारण मुद्दतीको दर मात्र दिन्छ र अतिरिक्त १% गुम्छ।' },
        { mistake: 'मुद्दतीको म्याद सकिएपछि नवीकरण नगरी बचतमा सड्न दिनु।', correct: 'फारम भर्दा नै "स्वतः नवीकरण (Auto-Renewal)" विकल्प छान्नुहोस्।', explanation: 'म्याद सकिएपछि नवीकरण नभएको मुद्दती स्वतः न्यून ब्याज आउने साधारण बचतमा परिणत हुन्छ।' }
      ],
      definitions: [
        { term: 'मुद्दती निक्षेप (Fixed Deposit)', full: 'मियादी बचत खाता', meaning: 'निश्चित अवधिका लागि रकम रोक्का राखेर तोकिएको ग्यारेन्टी ब्याज प्राप्त गरिने बैंक खाता।' },
        { term: 'रेमिट्यान्स मुद्दती', full: 'विप्रेषण मुद्दती निक्षेप', meaning: 'वैदेशिक रोजगारीबाट आएको रकममा राष्ट्र बैंकको नियम अनुसार सामान्यभन्दा १% बढी ब्याज दिइने विशेष मुद्दती।' },
        { term: 'त्रैमासिक चक्रवृद्धि', full: 'ब्याजको पनि ब्याज पाउने विधि', meaning: 'हरेक ३ महिनामा पाकेको ब्याज साँवामा थपिँदै नयाँ साँवामा थप ब्याज गणना हुने वैज्ञानिक पद्धति।' },
        { term: 'अकास्मिक मुद्दती फिर्ता (Premature Break)', full: 'म्याद अगावै मुद्दती तोड्नु', meaning: 'तोकिएको अवधि नपुग्दै पैसा झिक्नु, जसमा बैंकले १% देखि १.५% सम्म ब्याज जरिवाना काट्छ।' }
      ],
      faqs: [
        { q: 'के नेपालमा मुद्दती निक्षेप धितो राखेर ऋण लिन मिल्छ?', a: 'मिल्छ। राष्ट्र बैंकको नियम अनुसार मुद्दती निक्षेपको ९०% सम्म रकम मुद्दतीको ब्याजभन्दा १-२% बढी दरमा तत्कालै बिना धितो झन्झट ऋण पाइन्छ।' },
        { q: 'मुद्दतीको ब्याजमा कर कति लाग्छ?', a: 'व्यक्तिगत निक्षेपकर्ताका लागि ब्याज आम्दानीमा ५.०% अन्तिम कर (Final Withholding Tax) बैंकले स्वतः काटेर आन्तरिक राजस्व विभागमा बुझाउँछ।' },
        { q: 'FD Ladder भनेको के हो?', a: 'आफ्नो रकमलाई १ वर्ष, २ वर्ष र ३ वर्ष गरी फरक-फरक अवधिको मुद्दतीमा बाँड्ने तरिका हो, जसले गर्दा हरेक वर्ष एउटा मुद्दती पाक्छ र तरलता पनि कायम रहन्छ।' }
      ],
      takeaways: [
        '३० दिनभित्र चाहिने पैसा बचतमा र ६ महिनाभन्दा बढी नचाहिने पैसा मुद्दतीमा राख्नुहोस्।',
        'विदेशबाट पैसा आएको भए अनिवार्य रूपमा +१% बढी ब्याज दिने रेमिट्यान्स मुद्दती लिनुहोस्।',
        'एकमुष्ट पैसा एउटै मुद्दतीमा नराखी FD Ladder (१, २, ३ वर्षे) बनाएर हरेक वर्ष तरलता कायम राख्नुहोस्।',
        'आकस्मिक पैसा चाहिएमा मुद्दती तोड्नुको साटो मुद्दती धितोमा ९०% सम्म सस्तो ऋण लिन सकिन्छ।',
        'मुद्दती खोल्दा सधैँ साँवा र ब्याज दुवै स्वतः नवीकरण (Auto-Renewal) हुने विकल्प छान्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'FD Calculator', slug: 'calculators/fd', key: 'fd', desc: 'Calculate quarterly compound interest returns on bank fixed deposits in Nepal.' },
      { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'Compare bank deposit yields against real inflation purchasing power loss.' }
    ],
    downloadableResources: [
      { title: 'Class A Bank FD Rate Tracker & Laddering Tool (Excel)', type: 'Excel Tool', format: 'XLSX File', size: '150 KB', href: 'assets/downloads/nepal-bank-rates-debenture-guide.html' }
    ]
  },

  // ── D2. BASE RATE & PREMIUM IN NEPAL BANKS ───────────────────────
  'base-rate-premium-nepal-banks': {
    id: 'bank-base-rate-spread',
    slug: 'base-rate-premium-nepal-banks',
    categorySlug: 'banking',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min loan rate audit', np: '२० मिनेट कर्जा ब्याज विश्लेषण' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'NRB Unified Directives on Base Rate & Interest Rate Spread', np: 'नेपाल राष्ट्र बैंक आधार दर तथा ब्याजदर स्प्रेड सम्बन्धी एकीकृत निर्देशन अनुसार समीक्षित' },
    prerequisites: { en: 'Bank Classes in Nepal (NRB Tiers)', np: 'बैंकका वर्गहरू' },
    en: {
      title: 'How Base Rate and Premium Determine Your Loan Interest in Nepal',
      oneLineSummary: 'Demystify why your loan EMI changes every quarter - understand the NRB Base Rate formula, fixed vs variable premiums, and how to negotiate a lower spread.',
      summaryPoints: [
        'Commercial banks in Nepal cannot issue commercial loans below their published Base Rate (Aadhaar Dar).',
        'Your floating loan interest rate strictly equals the Bank\'s Base Rate plus your negotiated Risk Premium (e.g., Base Rate 7.5% + Premium 2.5% = 10.0%).',
        'While the Base Rate fluctuates every quarter based on the bank\'s cost of funds, your Premium percentage is legally fixed for the entire loan tenure.',
        'NRB mandates that commercial banks must maintain an interest rate spread (difference between average lending rate and deposit rate) under 4.00%.',
        'Choosing a bank with a structurally low Cost of Funds (e.g., 5.0% vs 7.0%) saves you lakhs of rupees in interest over a 15-year home mortgage.'
      ],
      whatIsThis: 'The Base Rate is the internal benchmark lending rate determined by each bank according to Nepal Rastra Bank\'s standardized formula. It reflects the true cost of funds, administrative overhead, statutory reserve costs, and a permitted return on assets (0.75%). Banks add a customer-specific "Premium" (e.g., 1.5% to 4.0%) to this Base Rate to arrive at your final borrowing interest rate.',
      whyItMatters: 'Borrowers in Nepal are often shocked when their home loan interest jumps from 9% to 13% over two years, inflating their monthly EMI by thousands of rupees. This occurs not because the bank changed your contract arbitrarily, but because banking liquidity tightened, raising the bank\'s Cost of Funds and Base Rate. Understanding Base Rate mechanics allows you to choose low-cost lenders and lock in advantageous premium spreads.',
      howItWorks: [
        { step: 1, title: 'Understand the Base Rate Components', desc: 'Base Rate = Cost of Funds + Cash Reserve Ratio (CRR) Cost + Statutory Liquidity Ratio (SLR) Cost + Cost of Operation + Return on Assets (0.75%). It is audited and published every quarter.' },
        { step: 2, title: 'Negotiate the Premium (Your Only Negotiable Lever)', desc: 'You cannot negotiate the bank\'s Base Rate, but you CAN negotiate the Premium spread. A borrower with clean credit (CIB score), strong salary, and collateral can negotiate a 1.5% premium instead of the standard 3.5%.' },
        { step: 3, title: 'Enforce the "Fixed Premium" Rule', desc: 'Under NRB directives, once your loan agreement is signed, the bank CANNOT unilaterally increase your agreed premium spread during the tenure of the retail loan.' },
        { step: 4, title: 'Review Quarterly Rate Adjustments', desc: 'At the end of Ashwin, Poush, Chaitra, and Ashadh, check the bank\'s published quarterly Base Rate. If the Base Rate fell from 8.5% to 7.2%, your loan interest must automatically fall from 11.0% to 9.7%.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'How Loan Rates Adjust Automatically Across Quarterly Cycles (Example)',
        headers: ['Quarter / Timeline', 'Bank Base Rate', 'Agreed Premium Spread', 'Final Borrowing Rate', 'Impact on NPR 50L 20-Yr Home Loan EMI'],
        rows: [
          ['Q1 (High Liquidity Period)', '6.80%', '+ 2.20% (Fixed in Contract)', '9.00%', 'EMI = NPR 44,986 / month'],
          ['Q2 (Liquidity Tightens)', '8.10%', '+ 2.20% (Cannot be changed)', '10.30%', 'EMI = NPR 49,190 / month (+NPR 4,204)'],
          ['Q3 (Peak Rate Tightening)', '9.50%', '+ 2.20% (Cannot be changed)', '11.70%', 'EMI = NPR 53,912 / month (+NPR 8,926)'],
          ['Q4 (Liquidity Eases)', '7.40%', '+ 2.20% (Cannot be changed)', '9.60%', 'EMI = NPR 46,918 / month (Automatically falls)']
        ]
      },
      nepalContext: 'In Nepal, government and older commercial banks (such as Rastriya Banijya Bank, Nepal Bank, and Standard Chartered Bank) historically maintain significantly lower Base Rates (often 1.5% to 2.5% below aggressive private sector banks) because they possess massive low-cost current and savings account (CASA) deposit bases. Choosing a bank with a historically low Base Rate is far more impactful than looking for promotional first-year teaser rates.',
      practicalScenario: {
        persona: 'Priya, 32, pharmacist in Kathmandu',
        income: 'NPR 75,000 / month pharmacy income',
        scenarioText: 'Priya took a NPR 60 Lakh home loan from a private bank offering a "promotional" 8.99% rate. One year later, her interest jumped to 13.5%, increasing her monthly EMI by NPR 14,800 and causing severe financial strain.',
        solutionText: 'She audited her loan statement: the bank\'s Base Rate was 9.5% with an exorbitant 4.0% premium. She approached a Class A bank with a strong CASA ratio whose Base Rate was 7.2%, negotiated a 2.0% premium, and refinanced (swapped) her loan to 9.20%. Her monthly EMI dropped from NPR 72,400 to NPR 54,800, saving NPR 17,600 every month.',
        metricHighlight: 'Saved NPR 17,600 / month (NPR 42.2 Lakh over 20 years) by refinancing to a lower Base Rate bank'
      },
      formula: {
        name: 'Floating Lending Rate & Quarterly EMI Adjustment Formula',
        equation: 'R_{\\text{loan}} = \\text{Base Rate}_{\\text{quarter}} + \\text{Premium}_{\\text{contract}} \\quad | \\quad \\text{Spread} = R_{\\text{avg loan}} - R_{\\text{avg deposit}} \\leq 4.00\\%',
        variables: [
          { symbol: 'R_loan', name: 'Final Borrowing Interest Rate', desc: 'The actual percentage rate applied to your monthly loan statement.' },
          { symbol: 'Base Rate_quarter', name: 'Quarterly Audited Base Rate', desc: 'Published by the bank every quarter based on its actual cost of funds.' },
          { symbol: 'Premium_contract', name: 'Agreed Risk Spread', desc: 'Customer-specific margin fixed in your formal loan offer letter.' },
          { symbol: 'Spread', name: 'Interest Rate Spread', desc: 'Bank-wide lending minus deposit margin capped at 4.00% by NRB.' }
        ],
        exampleCalculation: 'Bank A Base Rate = 7.30%, negotiated premium = 1.90%. Borrowing Rate = 7.30% + 1.90% = 9.20%. On a NPR 40 Lakh 15-year loan, monthly EMI is NPR 41,048. If the bank\'s cost of funds drops and Base Rate becomes 6.50%, the new rate becomes 6.50% + 1.90% = 8.40%, and EMI automatically recalculates to NPR 39,180.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Budget Flexibility'
      },
      commonMistakes: [
        { mistake: 'Focusing only on the initial promotional interest rate instead of the Base Rate.', correct: 'Always ask: "What is your current Base Rate, and what is the exact fixed Premium?"', explanation: 'A promotional rate of 9% that conceals a 4.5% premium will skyrocket the moment the promotional period ends.' },
        { mistake: 'Allowing the bank to increase your Premium spread midway through the loan.', correct: 'Check your quarterly interest rate advice against your original loan contract.', explanation: 'NRB rules strictly forbid banks from increasing the agreed premium spread on retail loans during the loan tenure.' },
        { mistake: 'Failing to refinance when peer banks have 2% lower Base Rates.', correct: 'Compare Base Rates across Class A banks annually; if the gap exceeds 1.5%, consider loan swapping.', explanation: 'Refinancing fees (0.25% - 0.50%) are trivial compared to saving 2% interest on a 15-year mortgage.' }
      ],
      definitions: [
        { term: 'Base Rate', full: 'Aadhaar Dar', meaning: 'The minimum cost-reflective benchmark interest rate below which banks cannot legally issue commercial loans in Nepal.' },
        { term: 'Risk Premium', full: 'Jokhim Byaj Premiyam', meaning: 'The fixed markup percentage added by the bank to the Base Rate based on the borrower\'s creditworthiness and collateral quality.' },
        { term: 'Interest Rate Spread', full: 'Byajdar Antar', meaning: 'The difference between the average lending rate and average deposit rate of a bank, legally capped at 4.00% by NRB.' },
        { term: 'CASA Ratio', full: 'Current and Savings Account Ratio', meaning: 'The proportion of low-cost current and savings deposits in a bank\'s total deposit base, determining how cheap its Base Rate will be.' }
      ],
      faqs: [
        { q: 'Can my loan interest rate be lower than the bank\'s Base Rate?', a: 'No. NRB strictly prohibits banks from lending below their Base Rate, except for specific government-subsidized concessional loan programs.' },
        { q: 'How often does my home loan EMI change in Nepal?', a: 'Under NRB guidelines, banks adjust loan interest rates quarterly based on the average Base Rate of the previous quarter.' },
        { q: 'What is the difference between Fixed Rate and Floating Rate loans in Nepal?', a: 'Fixed Rate loans maintain the exact same interest rate for 5-10 years regardless of market conditions (usually priced higher). Floating Rate loans fluctuate quarterly with the bank\'s Base Rate.' }
      ],
      takeaways: [
        'Your loan interest rate = Bank\'s Base Rate + Your Fixed Contracted Premium.',
        'The Base Rate fluctuates with the economy, but the bank CANNOT legally increase your Premium spread.',
        'Choose banks with high CASA deposit ratios (like Rastriya Banijya Bank or Standard Chartered) for structurally lower Base Rates.',
        'Always negotiate the Premium spread aggressively before signing the loan offer letter.',
        'If your bank\'s Base Rate is consistently 2% higher than peer institutions, refinance your loan to a cheaper bank.'
      ]
    },
    np: {
      title: 'नेपालका बैंकमा आधार दर (Base Rate) र प्रिमियमले कर्जाको ब्याज कसरी तोक्छ?',
      oneLineSummary: 'घरकर्जा वा व्यवसायिक कर्जाको किस्ता (EMI) हरेक त्रैमासमा किन घटबढ हुन्छ - राष्ट्र बैंकको Base Rate सूत्र, प्रिमियम र स्प्रेडको यथार्थ बुझ्नुहोस्।',
      summaryPoints: [
        'नेपाल राष्ट्र बैंकको निर्देशन अनुसार कुनै पनि वाणिज्य बैंकले आफ्नो आधार दर (Base Rate) भन्दा सस्तो ब्याजमा कर्जा दिन पाउँदैन।',
        'तपाईंको कर्जाको ब्याजदर बैंकको आधार दर र सम्झौता गरिएको जोखिम प्रिमियमको योगफल बराबर हुन्छ (जस्तै: Base Rate ७.५% + प्रिमियम २.५% = १०.०%)।',
        'बैंकको निक्षेप लागत अनुसार आधार दर हरेक त्रैमासमा घटबढ भए पनि सम्झौता गरिएको प्रिमियम दर कर्जा अवधिभर परिवर्तन गर्न पाइँदैन।',
        'वाणिज्य बैंकहरूले कर्जा र निक्षेपको औसत ब्याजदर अन्तर (Interest Rate Spread) ४.००% भन्दा तल राख्नुपर्ने कानुनी व्यवस्था छ।',
        'सस्तो निक्षेप (CASA) भएका सरकारी वा पुराना बैंक रोज्दा १५ वर्षे घरकर्जामा लाखौँ रुपैयाँ ब्याज बचत हुन्छ।'
      ],
      whatIsThis: 'आधार दर (Base Rate) भनेको राष्ट्र बैंकले तोकेको कडा गणितीय सूत्र अनुसार बैंकहरूले हरेक त्रैमासमा निकाल्ने न्यूनतम लागत दर हो। यसमा निक्षेपको लागत (Cost of Funds), अनिवार्य नगद मौज्दात (CRR) को लागत, वैधानिक तरलता (SLR) को लागत, सञ्चालन खर्च र ०.७५% सम्पत्ति प्रतिफल जोडिएको हुन्छ। बैंकले यसै आधार दरमा ग्राहकको जोखिम अनुसार "प्रिमियम" (जस्तै १.५% देखि ३.५%) थपेर कर्जाको अन्तिम ब्याजदर तय गर्छ।',
      whyItMatters: 'नेपालमा घरकर्जा लिने धेरै मानिसहरू सुरुमा ९% मा लिएको ऋण २ वर्षपछि एकाएक १३% पुग्दा र मासिक EMI हजारौँ रुपैयाँले बढ्दा तनावमा पर्छन्। उनीहरूलाई बैंकले मनपरी ब्याज बढायो भन्ने लाग्छ, तर वास्तवमा बजारमा तरलता अभाव भएर बैंकको Base Rate बढेको हुन्छ। Base Rate को नियम बुझ्ने व्यक्तिले सस्तो आधार दर भएको बैंक रोज्छ र प्रिमियम दर घटाउन कडा मोलमोलाइ गर्छ।',
      howItWorks: [
        { step: 1, title: 'आधार दरका ५ वटा अंग बुझ्नुहोस्', desc: 'Base Rate = निक्षेप संकलन लागत (Cost of Funds) + CRR लागत + SLR लागत + प्रशासनिक खर्च + ०.७५% मुनाफा। यो दर हरेक त्रैमासपछि राष्ट्रिय पत्रिकामा सार्वजनिक गरिन्छ।' },
        { step: 2, title: 'प्रिमियममा कडा मोलमोलाइ गर्नुहोस्', desc: 'बैंकको आधार दर घटाउन सकिँदैन तर प्रिमियम (Premium) घटाउन सकिन्छ। राम्रो आम्दानी, सफा CIB क्रेडिट स्कोर र बलियो धितो देखाएर ३.५% प्रिमियमलाई घटाएर १.५% देखि २.०% मा सम्झौता गर्न सकिन्छ।' },
        { step: 3, title: 'सम्झौतामा "Fixed Premium" नियम लागू गर्नुहोस्', desc: 'राष्ट्र बैंकको एकीकृत निर्देशन अनुसार कर्जा सम्झौता भइसकेपछि बैंकले व्यक्तिगत प्रकृतिको कर्जामा ग्राहकको प्रिमियम दर आफूखुसी बढाउन पाउँदैन।' },
        { step: 4, title: 'त्रैमासिक ब्याज समायोजन निगरानी गर्नुहोस्', desc: 'असोज, पुस, चैत र असार मसान्तपछि बैंकले नयाँ आधार दर निकाल्छ। यदि बैंकको Base Rate ८.५% बाट घटेर ७.२% भयो भने तपाईंको कर्जाको ब्याज स्वतः ११.०% बाट घटेर ९.७% हुनुपर्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'त्रैमासिक आधार दर परिवर्तनले घरकर्जाको किस्ता (EMI) मा पार्ने प्रभाव',
        headers: ['त्रैमास / समय', 'बैंकको आधार दर (Base Rate)', 'सम्झौता गरिएको प्रिमियम', 'कर्जाको अन्तिम ब्याज', 'रु. ५० लाख २० वर्षे घरकर्जाको मासिक किस्ता'],
        rows: [
          ['पहिलो त्रैमास (तरलता सहज हुँदा)', '६.८०%', '+ २.२०% (सम्झौतामा निश्चित)', '९.००%', 'मासिक EMI = रु. ४४,९८६'],
          ['दोस्रो त्रैमास (तरलता कसिलो हुँदा)', '८.१०%', '+ २.२०% (बढाउन नपाइने)', '१०.३०%', 'मासिक EMI = रु. ४९,१९० (रु. ४,२०४ ले बढ्यो)'],
          ['तेस्रो त्रैमास (चरम ब्याजदर बिन्दु)', '९.५०%', '+ २.२०% (बढाउन नपाइने)', '११.७०%', 'मासिक EMI = रु. ५३,९१२ (रु. ८,९२६ ले बढ्यो)'],
          ['चौथो त्रैमास (ब्याजदर घट्दा)', '७.४०%', '+ २.२०% (बढाउन नपाइने)', '९.६०%', 'मासिक EMI = रु. ४६,९१८ (स्वतः घट्यो)']
        ]
      },
      nepalContext: 'नेपालमा राष्ट्रिय वाणिज्य बैंक, नेपाल बैंक जस्ता सरकारी बैंक तथा स्ट्यान्डर्ड चार्टर्ड बैंकसँग ठूलो मात्रामा शून्य वा न्यून ब्याजदरको चल्ती र बचत निक्षेप (CASA) हुने भएकाले यिनीहरूको आधार दर आक्रामक निजी बैंकहरूको तुलनामा १.५% देखि २.५% सम्म सस्तो हुने गर्दछ। पहिलो वर्षको आकर्षक प्रचारभन्दा बैंकको ऐतिहासिक Base Rate कति सस्तो छ भन्ने हेर्नु बुद्धिमानी हुन्छ।',
      practicalScenario: {
        persona: 'प्रिया, ३२, काठमाडौँकी फार्मेसी सञ्चालक',
        income: 'मासिक व्यवसाय नाफा रु. ७५,000',
        scenarioText: 'प्रियाले एउटा निजी बैंकबाट ८.९९% को प्रचार हेरेर रु. ६० लाख घरकर्जा लिइन्। एक वर्षपछि ब्याज बढेर १३.५% पुग्यो र मासिक किस्ता रु. १४,८०० ले बढेर उनको बजेट नै भताभुङ्ग भयो।',
        solutionText: 'उनले लोन स्टेटमेन्ट जाँच्दा बैंकको Base Rate ९.५% र प्रिमियम ४.०% रहेको पाइन्। उनले ७.२% Base Rate भएको अर्को वाणिज्य बैंकमा सम्पर्क गरी २.०% प्रिमियममा कर्जा स्वाप (Refinance) गरिन्। उनको नयाँ ब्याज ९.२०% मा झर्‍यो र मासिक EMI रु. ७२,४०० बाट घटेर रु. ५४,८०० भयो - मासिक रु. १७,६०० सीधै बचत भयो।',
        metricHighlight: 'कम Base Rate भएको बैंकमा कर्जा सार्दा मासिक रु. १७,६०० बचत (२० वर्षमा रु. ४२.२ लाख)'
      },
      formula: {
        name: 'कर्जा ब्याजदर र स्प्रेड गणना सूत्र',
        equation: 'R_{\\text{कर्जा ब्याज}} = \\text{Base Rate}_{\\text{त्रैमासिक}} + \\text{प्रिमियम}_{\\text{निश्चित}} \\quad | \\quad \\text{स्प्रेड} = R_{\\text{कर्जा औसत}} - R_{\\text{निक्षेप औसत}} \\leq ४.००\\%',
        variables: [
          { symbol: 'R_कर्जा ब्याज', name: 'अन्तिम कर्जा ब्याजदर', desc: 'ऋणीले बैंकलाई तिर्नुपर्ने वास्तविक वार्षिक ब्याजदर प्रतिशत।' },
          { symbol: 'Base Rate_त्रैमासिक', name: 'बैंकको त्रैमासिक आधार दर', desc: 'बैंकले हरेक तीन महिनामा प्रकाशित गर्ने न्यूनतम लागत दर।' },
          { symbol: 'प्रिमियम_निश्चित', name: 'सम्झौता गरिएको जोखिम मार्जिन', desc: 'कर्जा सम्झौता पत्रमा उल्लेख गरिएको निश्चित प्रिमियम प्रतिशत।' },
          { symbol: 'स्प्रेड', name: 'ब्याजदर अन्तर', desc: 'बैंकको कुल कर्जा र कुल निक्षेपको औसत ब्याजदर अन्तर (अधिकतम ४%)।' }
        ],
        exampleCalculation: 'बैंकको Base Rate = ७.३०%, सम्झौता गरिएको प्रिमियम = १.९०%। कर्जाको ब्याज = ७.३०% + १.९०% = ९.२०%। रु. ४० लाख १५ वर्षे कर्जामा मासिक EMI रु. ४१,०४८ हुन्छ। बजारमा तरलता बढेर Base Rate ६.५०% भएमा नयाँ ब्याज ६.५०% + १.९०% = ८.४०% हुन्छ र EMI स्वतः घटेर रु. ३९,१८० मा झर्छ।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'बजेट योजना क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'सुरुको १ वर्षको सस्तो प्रचार हेरेर प्रिमियम कति छ नसोधी कर्जा लिनु।', correct: 'सधैँ सोध्नुहोस्: "बैंकको हालको Base Rate कति हो र प्रिमियम कति प्रतिशत निश्चित गरिएको छ?"', explanation: '४.५% प्रिमियम भएको कर्जा अफर अवधि सकिने बित्तिकै चर्को महँगो बन्दछ।' },
        { mistake: 'बैंकले सम्झौता बीचमै प्रिमियम बढाउँदा चुपचाप सहेर बस्नु।', correct: 'कर्जा स्टेटमेन्टमा प्रिमियम बढेको देखिएमा राष्ट्र बैंकको निर्देशिका देखाएर तुरुन्त उजुरी गर्नुहोस्।', explanation: 'व्यक्तिगत कर्जामा सम्झौतापछि प्रिमियम बढाउन राष्ट्र बैंकको नियमले पूर्ण रोक लगाएको छ।' },
        { mistake: 'अरू बैंकको Base Rate २% सस्तो हुँदा पनि कर्जा स्वाप (Refinance) नगर्नु।', correct: 'यदि अन्य बैंकको Base Rate धेरै सस्तो छ भने केही प्रशासनिक शुल्क तिरेर सस्तो बैंकमा कर्जा सार्नुहोस्।', explanation: 'दीर्घकालीन १५-२० वर्षे कर्जामा १-२% ब्याजको अन्तरले लाखौँ रुपैयाँ फरक पार्छ।' }
      ],
      definitions: [
        { term: 'आधार दर (Base Rate)', full: 'न्यूनतम लागत दर', meaning: 'नेपाल राष्ट्र बैंकको सूत्र अनुसार बैंकको सञ्चालन र निक्षेप लागतका आधारमा तय गरिने न्यूनतम ब्याजदर।' },
        { term: 'जोखिम प्रिमियम (Premium)', full: 'थप ब्याज मार्जिन', meaning: 'ग्राहकको वित्तीय हैसियत, धितो र जोखिम हेरेर आधार दरमा थपिने निश्चित प्रतिशत।' },
        { term: 'ब्याजदर स्प्रेड (Interest Rate Spread)', full: 'कर्जा र निक्षेपको ब्याज अन्तर', meaning: 'बैंकले कर्जामा लिने र निक्षेपमा दिने औसत ब्याजदर बीचको नाफा अन्तर (अधिकतम ४%)।' },
        { term: 'CASA अनुपात', full: 'चल्ती र बचत निक्षेप अनुपात', meaning: 'बैंकको कुल निक्षेपमा सस्तो चल्ती र बचतको हिस्सा, जसले बैंकको Base Rate कति सस्तो हुन्छ भन्ने निर्धारण गर्छ।' }
      ],
      faqs: [
        { q: 'के मेरो कर्जाको ब्याज बैंकको Base Rate भन्दा सस्तो हुन सक्छ?', a: 'सक्दैन। नेपाल राष्ट्र बैंकले कुनै पनि बैंकलाई आफ्नो आधार दरभन्दा कम ब्याजमा कर्जा प्रवाह गर्न कानुनी रूपमा पूर्ण बन्देज लगाएको छ (सहुलियतपूर्ण सरकारी कर्जा बाहेक)।' },
        { q: 'नेपालमा घरकर्जाको किस्ता कति समयमा परिवर्तन हुन्छ?', a: 'राष्ट्र बैंकको नियम अनुसार बैंकहरूले हरेक त्रैमासमा प्रकाशित हुने अघिल्लो त्रैमासको औसत आधार दरका आधारमा कर्जाको ब्याजदर त्रैमासिक रूपमा समायोजन गर्दछन्।' },
        { q: 'Fixed Rate र Floating Rate कर्जामा के फरक छ?', a: 'Fixed Rate मा कर्जा अवधिभर (५-१० वर्ष) ब्याजदर निश्चित रहन्छ र बजार बढे पनि बढ्दैन। Floating Rate मा बैंकको आधार दर अनुसार हरेक त्रैमासमा ब्याज घटबढ भइरहन्छ।' }
      ],
      takeaways: [
        'कर्जाको ब्याजदर = बैंकको त्रैमासिक Base Rate + तपाईंको निश्चित सम्झौता प्रिमियम।',
        'आधार दर बजार अनुसार घटबढ भए पनि बैंकले सम्झौता गरिएको प्रिमियम आफूखुसी बढाउन पाउँदैन।',
        'सस्तो आधार दर भएका पुराना तथा सरकारी वाणिज्य बैंकहरू दीर्घकालीन घरकर्जाका लागि सधैँ किफायती हुन्छन्।',
        'ऋण सम्झौता गर्नुअघि प्रिमियम दरलाई अधिकतम घटाउन बैंकसँग कडा मोलमोलाइ गर्नुहोस्।',
        'आफ्नो बैंकको आधार दर अन्य बैंकभन्दा लगातार महँगो भइरहेमा कर्जा अर्को सस्तो बैंकमा स्वाप गर्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Calculate post-tax monthly cash flow to plan affordable loan EMIs.' }
    ],
    downloadableResources: [
      { title: 'Commercial Banks Base Rate & Spread Comparison Table (PDF)', type: 'PDF Document', format: 'PDF Document', size: '175 KB', href: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv' }
    ]
  },

  // ── D3. DEPOSIT GUARANTEE FUND IN NEPAL ───────────────────────────
  'deposit-guarantee-fund-nepal': {
    id: 'bank-deposit-guarantee',
    slug: 'deposit-guarantee-fund-nepal',
    categorySlug: 'banking',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '10 min risk check', np: '१० मिनेट सुरक्षा जाँच' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Deposit and Credit Guarantee Fund (DCGF) Act & NRB Directives', np: 'निक्षेप तथा कर्जा सुरक्षण कोष ऐन अनुसार समीक्षित' },
    prerequisites: { en: 'Bank Classes in Nepal (NRB Tiers)', np: 'बैंकका वर्गहरू' },
    en: {
      title: 'Deposit Protection in Nepal: The NPR 500,000 Safety Net Explained',
      oneLineSummary: 'How the Deposit and Credit Guarantee Fund (DCGF) protects your bank savings up to NPR 5 Lakh - and why unregulated cooperatives offer zero deposit insurance.',
      summaryPoints: [
        'Individual retail deposits in all NRB-licensed Class A, B, and C financial institutions are insured up to NPR 5,00,000 per depositor.',
        'Deposit insurance is administered by the government-backed Deposit and Credit Guarantee Fund (DCGF / Nikshep Tatha Karja Surakshyan Kosh).',
        'Cooperatives (Sahakari) are NOT regulated by NRB and have ZERO protection under the Deposit and Credit Guarantee Fund.',
        'The NPR 5 Lakh limit applies per individual per banking institution - spanning both savings and fixed deposit accounts combined.',
        'If you hold NPR 15 Lakh in liquid savings, splitting it across three separate commercial banks ensures 100% deposit insurance coverage.'
      ],
      whatIsThis: 'Deposit Insurance in Nepal is a statutory consumer protection system that guarantees the safety of public savings up to NPR 5,00,000 against bank liquidation, bankruptcy, or license revocation. Managed by the Deposit and Credit Guarantee Fund (DCGF) - an autonomous entity owned jointly by Nepal Rastra Bank and the Ministry of Finance - it ensures retail depositors receive their money back even if a licensed financial institution collapses.',
      whyItMatters: 'Over the past decade, hundreds of unregulated savings and credit cooperatives across Nepal collapsed, freezing over NPR 50 Billion in middle-class life savings with zero government safety nets. Many victims falsely believed that all institutions calling themselves "banks" or "saving societies" carry government insurance. Understanding DCGF rules guarantees your principal is never wiped out in a systemic financial crisis.',
      howItWorks: [
        { step: 1, title: 'Verify NRB Licensing (A, B, or C Class)', desc: 'Ensure your institution holds a formal banking license from Nepal Rastra Bank (Class A Commercial, Class B Development, or Class C Finance). Unregulated cooperatives and microfinances do not qualify for DCGF retail deposit insurance.' },
        { step: 2, title: 'Calculate Combined Balances per Institution', desc: 'The DCGF ceiling applies to the sum of all your accounts within the same bank. If you hold NPR 3 Lakh in savings and NPR 4 Lakh in fixed deposit at Bank X, your total is NPR 7 Lakh - meaning NPR 5 Lakh is insured and NPR 2 Lakh is uninsured.' },
        { step: 3, title: 'Deploy the "Multi-Bank Diversification" Strategy', desc: 'If your total liquid wealth exceeds NPR 5 Lakh, distribute it across multiple Class A institutions (e.g., NPR 5 Lakh in Nabil Bank, NPR 5 Lakh in Nepal Bank, NPR 5 Lakh in Sanima Bank). This grants you NPR 15 Lakh in 100% legally insured safety.' },
        { step: 4, title: 'Claims & Payout Process in Liquidation', desc: 'If NRB liquidates a troubled bank, DCGF steps in as liquidator and reimburses all insured unitholders up to NPR 500,000 through a designated payout bank within 90 days.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Deposit Insurance Coverage Matrix: NRB Banks vs Cooperatives in Nepal',
        headers: ['Institution Type', 'Regulatory Authority', 'DCGF Deposit Insurance?', 'Maximum Insured Limit', 'Historical Safety Record'],
        rows: [
          ['Class A Commercial Banks', 'Nepal Rastra Bank (NRB)', 'Yes (Mandatory by Law)', 'NPR 5,00,000 per depositor', 'Zero retail deposit losses in modern history'],
          ['Class B Development Banks', 'Nepal Rastra Bank (NRB)', 'Yes (Mandatory by Law)', 'NPR 5,00,000 per depositor', 'High safety with prompt corrective action'],
          ['Class C Finance Companies', 'Nepal Rastra Bank (NRB)', 'Yes (Mandatory by Law)', 'NPR 5,00,000 per depositor', 'Regulated with DCGF coverage'],
          ['Savings & Credit Cooperatives', 'Department of Cooperatives / Local Govt', 'NO (Zero DCGF Insurance)', 'NPR 0 (Zero Protection)', 'Severe crisis; tens of thousands of trapped depositors']
        ]
      },
      nepalContext: 'Nepal originally instituted deposit insurance at NPR 2,00,000, raised it to NPR 3,00,000, and recently enhanced it to NPR 5,00,000 in line with economic expansion and inflation. Over 98% of individual bank accounts in Nepal have balances below NPR 5 Lakh, meaning the DCGF fully protects the vast majority of ordinary citizens. The premium for this insurance is paid entirely by the banks (0.16% per year); retail depositors pay zero fees.',
      practicalScenario: {
        persona: 'Sarita, 61, widow in Pokhara',
        income: 'NPR 12 Lakh family savings',
        scenarioText: 'Sarita kept her entire life savings of NPR 12 Lakh in a local neighborhood cooperative that promised a 14% interest rate. When the cooperative locked its doors and directors fled, her life savings were completely frozen.',
        solutionText: 'Her son helped recover a portion of the funds through legal channels and immediately relocated the money into the formal banking system. They split NPR 12 Lakh across three separate Class A commercial banks (NPR 4 Lakh each) in senior citizen fixed deposits. Her money was now 100% insured by DCGF while earning steady, guaranteed interest.',
        metricHighlight: 'Transferred savings from 0% protection to 100% DCGF-insured banking safety'
      },
      formula: {
        name: 'Insured Deposit Coverage Formula',
        equation: '\\text{Insured Amount} = \\min\\left(\\sum_{i=1}^{k} B_i, \\; \\text{NPR } 5,00,000\\right) \\quad \\text{(per bank)}',
        variables: [
          { symbol: 'B_i', name: 'Account Balance', desc: 'Balance in account i (savings, fixed deposit, call) within the same banking institution.' },
          { symbol: '5,00,000', name: 'DCGF Statutory Limit', desc: 'Current legal deposit guarantee ceiling enacted by the Government of Nepal.' },
          { symbol: 'k', name: 'Number of Accounts', desc: 'Total accounts held under the same citizenship number at one bank.' }
        ],
        exampleCalculation: 'Saver holds NPR 3,50,000 in savings and NPR 4,00,000 in a fixed deposit at the same bank. Total balance = NPR 7,50,000. Insured coverage = min(7,50,000, 5,00,000) = NPR 5,00,000 insured. Uninsured exposure = NPR 2,50,000. If split as NPR 3,75,000 in Bank A and NPR 3,75,000 in Bank B, insured coverage = NPR 7,50,000 (100% insured).',
        shortcutCalcSlug: 'calculators/fd',
        shortcutCalcName: 'Plan Safe Fixed Deposits'
      },
      commonMistakes: [
        { mistake: 'Believing that opening three accounts in the same bank multiplies your insurance.', correct: 'The NPR 500,000 limit applies to the sum of all accounts under your name within that one bank.', explanation: 'Opening a savings and two FDs at the same bank does not create three separate NPR 5 Lakh coverage limits.' },
        { mistake: 'Assuming cooperatives carry government deposit insurance.', correct: 'Cooperatives are completely excluded from DCGF protection; deposits carry 100% default risk.', explanation: 'Only institutions with direct NRB Class A, B, or C banking licenses are covered by DCGF.' },
        { mistake: 'Keeping more than NPR 5 Lakh in a single struggling financial institution.', correct: 'Distribute sums above NPR 5 Lakh across multiple top-tier commercial banks.', explanation: 'Spreading funds ensures every single rupee remains within the fully protected DCGF threshold.' }
      ],
      definitions: [
        { term: 'DCGF', full: 'Nikshep Tatha Karja Surakshyan Kosh', meaning: 'The state-backed deposit insurance corporation of Nepal guaranteeing individual bank deposits up to NPR 5 Lakh.' },
        { term: 'Deposit Insurance', full: 'Nikshep Bima', meaning: 'A protection system ensuring depositors do not lose their money up to a legal limit if their bank fails.' },
        { term: 'Prompt Corrective Action (PCA)', full: 'Shighra Sudharatmak Kadam', meaning: 'NRB regulatory intervention when a bank shows signs of distress, protecting depositor interests before insolvency.' },
        { term: 'Cooperative (Sahakari)', full: 'Bachat Tatha Rin Sahakari Sanstha', meaning: 'Member-owned micro-entities governed by local or provincial cooperative laws without NRB supervision or DCGF insurance.' }
      ],
      faqs: [
        { q: 'Do depositors pay any fee for DCGF deposit insurance?', a: 'No. The insurance premium (0.16% annually) is paid entirely by the licensed banks to DCGF. It is 100% free for individual retail depositors.' },
        { q: 'Are business current accounts covered under DCGF?', a: 'No. DCGF deposit insurance is strictly limited to natural individual depositors (savings and fixed deposits). Corporate institutional balances are excluded.' },
        { q: 'Has any Class A commercial bank depositor ever lost money in Nepal?', a: 'No. In Nepal\'s modern banking history, NRB has either resolved troubled commercial banks through management intervention or merger, resulting in zero depositor losses.' }
      ],
      takeaways: [
        'All individual savings and FDs in Class A, B, and C banks are insured up to NPR 5,00,000.',
        'Cooperatives are NOT insured by DCGF; high cooperative interest rates reflect extreme risk.',
        'The NPR 5 Lakh ceiling applies to your total combined balance across all accounts at the same bank.',
        'Distribute cash exceeding NPR 5 Lakh across multiple commercial banks to maintain 100% insured safety.',
        'Deposit insurance is funded entirely by the banking system - depositors pay zero fees.'
      ]
    },
    np: {
      title: 'नेपालमा निक्षेप सुरक्षा: रु. ५,००,००० सम्मको सरकारी सुरक्षण कोषको यथार्थ',
      oneLineSummary: 'निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) ले बैंकमा रहेको रु. ५ लाखसम्मको बचत कसरी सुरक्षित गर्छ - र सहकारीमा किन शून्य बिमा सुरक्षा हुन्छ?',
      summaryPoints: [
        'नेपाल राष्ट्र बैंकबाट इजाजतप्राप्त सबै "क", "ख" र "ग" वर्गका बैंक तथा वित्तीय संस्थामा सर्वसाधारणको रु. ५,००,००० सम्मको निक्षेप स्वतः बिमा गरिएको हुन्छ।',
        'यो निक्षेप सुरक्षण नेपाल सरकार र राष्ट्र बैंकको स्वामित्वमा रहेको "निक्षेप तथा कर्जा सुरक्षण कोष (DCGF)" ले व्यवस्थापन गर्दछ।',
        'बचत तथा ऋण सहकारी संस्थाहरू राष्ट्र बैंकको दायरामा पर्दैनन् र सहकारीमा राखिएको बचतमा DCGF को शून्य सुरक्षा हुन्छ।',
        'रु. ५ लाखको बिमा सीमा एउटा बैंकमा रहेका सबै खाताहरू (बचत र मुद्दती) को कुल जोडमा प्रति व्यक्ति लागू हुन्छ।',
        'यदि तपाईंसँग रु. १५ लाख नगद छ भने ३ वटा फरक वाणिज्य बैंकमा रु. ५/५ लाख बाँडेर राख्दा सम्पूर्ण रकम १००% सरकारी सुरक्षामा रहन्छ।'
      ],
      whatIsThis: 'निक्षेप सुरक्षण (Deposit Insurance) भनेको सर्वसाधारण नागरिकले बैंकमा जम्मा गरेको पसिनाको कमाइ बैंक डुबेमा वा खारेजीमा गए पनि फिर्ता पाउने कानुनी ग्यारेन्टी हो। नेपालमा निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) ऐन अन्तर्गत राष्ट्र बैंकबाट लाइसेन्सप्राप्त बैंकहरूमा प्रति निक्षेपकर्ता रु. ५ लाखसम्मको रकम पूर्ण सुरक्षित गरिएको हुन्छ।',
      whyItMatters: 'विगत केही वर्षमा नेपालभर सयौँ बचत तथा ऋण सहकारीहरू एकाएक बन्द हुँदा सर्वसाधारणको रु. ५० अर्बभन्दा बढी बचत डुब्यो। धेरैलाई "बचत" लेखिएका सबै संस्थामा सरकारले सुरक्षा दिन्छ भन्ने भ्रम थियो। राष्ट्र बैंकको नियमन र DCGF को रु. ५ लाखको सुरक्षा दायरा बुझ्दा आफ्नो जीवनभरको कमाइ सधैँ सुरक्षित राख्न सकिन्छ।',
      howItWorks: [
        { step: 1, title: 'राष्ट्र बैंकको इजाजत ("क", "ख", "ग" वर्ग) यकिन गर्नुहोस्', desc: 'आफ्नो पैसा वाणिज्य बैंक, विकास बैंक वा फाइनान्स कम्पनीमा मात्र राख्नुहोस्। सहकारी वा गैर-बैंकिङ संस्थाहरूमा DCGF को सुरक्षा हुँदैन।' },
        { step: 2, title: 'एउटै बैंकको कुल मौज्दात हिसाब गर्नुहोस्', desc: 'रु. ५ लाखको सीमा एउटै बैंकका सबै खाता जोडेर निकालिन्छ। यदि एउटै बैंकमा रु. ३ लाख बचत र रु. ४ लाख मुद्दती छ भने कुल रु. ७ लाखमध्ये रु. ५ लाख मात्र बिमा सुरक्षित हुन्छ, रु. २ लाख जोखिममा रहन्छ।' },
        { step: 3, title: 'धेरै बैंकमा रकम विविधीकरण (Diversification) गर्नुहोस्', desc: 'यदि रु. ५ लाखभन्दा धेरै रकम छ भने फरक-फरक वाणिज्य बैंकहरू (जस्तै रु. ५ लाख नबिल, रु. ५ लाख नेपाल बैंक, रु. ५ लाख सानिमा) मा बाँड्नुहोस्। यसले रु. १५ लाख नै १००% कानुनी सुरक्षणमा रहन्छ।' },
        { step: 4, title: 'बैंक समस्यामा परेमा भुक्तानी प्रक्रिया', desc: 'यदि कुनै बैंक खारेजीमा गएमा DCGF ले ९० दिनभित्र तोकिएको अर्को बैंकमार्फत रु. ५ लाखसम्मको निक्षेप दाबी भुक्तानी गर्दछ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'निक्षेप सुरक्षा तुलना: राष्ट्र बैंकका बैंकहरू भर्सेस सहकारी संस्थाहरू',
        headers: ['संस्थाको प्रकार', 'नियमनकारी निकाय', 'DCGF निक्षेप बिमा छ?', 'अधिकतम सुरक्षित सीमा', 'ऐतिहासिक सुरक्षा रेकर्ड'],
        rows: [
          ['"क" वर्गका वाणिज्य बैंकहरू', 'नेपाल राष्ट्र बैंक (NRB)', 'छ (कानुनतः अनिवार्य)', 'प्रति व्यक्ति रु. ५,००,०००', 'इतिहासमा कुनै पनि सर्वसाधारणको निक्षेप नडुबेको'],
          ['"ख" वर्गका विकास बैंकहरू', 'नेपाल राष्ट्र बैंक (NRB)', 'छ (कानुनतः अनिवार्य)', 'प्रति व्यक्ति रु. ५,००,०००', 'कडा नियमन र सुरक्षित'],
          ['"ग" वर्गका फाइनान्स कम्पनीहरू', 'नेपाल राष्ट्र बैंक (NRB)', 'छ (कानुनतः अनिवार्य)', 'प्रति व्यक्ति रु. ५,००,०००', 'नियमनभित्र DCGF सुरक्षा'],
          ['बचत तथा ऋण सहकारीहरू', 'सहकारी विभाग / स्थानीय तह', 'छैन (शून्य बिमा)', 'रु. ० (कुनै सुरक्षा छैन)', 'अत्यधिक संकट; हजारौँ बचतकर्ताको पैसा फसेको']
        ]
      },
      nepalContext: 'नेपालमा सुरुमा निक्षेप सुरक्षण सीमा रु. २ लाख थियो, पछि रु. ३ लाख र हाल यसलाई बढाएर रु. ५ लाख पुर्‍याइएको छ। नेपालका ९८% भन्दा बढी व्यक्तिगत बैंक खातामा रु. ५ लाखभन्दा कम रकम हुने भएकाले अधिकांश नागरिकको सम्पूर्ण बचत यस कोषले पूर्ण सुरक्षित गर्छ। यस बिमा बापतको वार्षिक शुल्क (०.१६%) बैंकहरू आफैँले कोषलाई बुझाउँछन्; ग्राहकले कुनै शुल्क तिर्नुपर्दैन।',
      practicalScenario: {
        persona: 'सरिता, ६१, पोखराकी एकल महिला',
        income: 'श्रीमानको पेन्सन र बचत रु. १२ लाख',
        scenarioText: 'सरिताले टोलकै एउटा सहकारीले १४% ब्याज दिने भनेपछि आफ्नो सम्पूर्ण रु. १२ लाख बचत त्यहीँ राखिन्। सहकारीका सञ्चालक भागेपछि उनको जीवनभरको कमाइ एकाएक रोक्का भयो।',
        solutionText: 'छोराको सहयोगमा कानुनी प्रक्रियाबाट केही रकम फिर्ता पाएपछि उनले सहकारीबाट सबै पैसा निकालिन्। उनीहरूले रु. १२ लाखलाई ३ वटा फरक वाणिज्य बैंकमा रु. ४/४ लाख मुद्दती बनाएर राखे। उनको सम्पूर्ण पैसा DCGF बाट १००% सुरक्षित भयो र नियमित सुरक्षित ब्याज आउन थाल्यो।',
        metricHighlight: 'शून्य सुरक्षा भएको सहकारीबाट १००% DCGF सुरक्षित वाणिज्य बैंकमा रकम स्थानान्तरण'
      },
      formula: {
        name: 'सुरक्षित निक्षेप गणना सूत्र',
        equation: '\\text{सुरक्षित रकम} = \\min\\left(\\sum_{i=१}^{k} B_i, \\; \\text{रु. } ५,००,०००\\right) \\quad \\text{(प्रति बैंक)}',
        variables: [
          { symbol: 'B_i', name: 'खाताको मौज्दात', desc: 'एउटै बैंकमा रहेका विभिन्न खाताहरूको रकम।' },
          { symbol: '५,००,०००', name: 'DCGF कानुनी सीमा', desc: 'नेपाल सरकारले तोकेको प्रति व्यक्ति प्रति बैंक अधिकतम सुरक्षण रकम।' },
          { symbol: 'k', name: 'खाता संख्या', desc: 'एउटै नागरिकताबाट एउटै बैंकमा खोलिएका कुल खाताहरू।' }
        ],
        exampleCalculation: 'एउटै बैंकमा बचतमा रु. ३.५ लाख र मुद्दतीमा रु. ४ लाख छ = कुल रु. ७.५ लाख। सुरक्षित रकम = min(७.५ लाख, ५ लाख) = रु. ५ लाख मात्र सुरक्षित (रु. २.५ लाख असुरक्षित)। तर यही रकम दुईवटा फरक बैंकमा रु. ३.७५ लाखका दरले राखेमा: कुल रु. ७.५ लाख नै १००% सुरक्षित हुन्छ।',
        shortcutCalcSlug: 'calculators/fd',
        shortcutCalcName: 'सुरक्षित मुद्दती योजना'
      },
      commonMistakes: [
        { mistake: 'एउटै बैंकमा ३ वटा खाता खोलेर तीनवटैमा रु. ५ लाख सुरक्षा पाइन्छ भन्ने सोच्नु।', correct: 'रु. ५ लाखको सीमा एउटै बैंकभित्रका सबै खाताको कुल जोडमा लागू हुन्छ।', explanation: 'एउटै बैंकमा बचत र मुद्दती दुवै भए पनि अधिकतम ५ लाख मात्र सुरक्षित हुन्छ।' },
        { mistake: 'सहकारीमा पनि सरकारी निक्षेप बिमा हुन्छ भनी ढुक्क पर्नु।', correct: 'सहकारी संस्थाहरू DCGF को सुरक्षणमा पर्दैनन्; सहकारीमा शतप्रतिशत जोखिम हुन्छ।', explanation: 'राष्ट्र बैंकको इजाजतप्राप्त "क", "ख", "ग" वर्गका बैंक मात्र यस कोषमा आबद्ध छन्।' },
        { mistake: 'कमजोर वित्तीय संस्थामा रु. ५ लाखभन्दा बढी रकम राख्नु।', correct: 'ठूलो रकमलाई धेरै वाणिज्य बैंकहरूमा बाँडेर सधैँ ५ लाखको सीमाभित्र राख्नुहोस्।', explanation: 'विविधीकरण गर्दा जतिसुकै ठूलो रकम पनि पूर्ण सरकारी सुरक्षामा रहन्छ।' }
      ],
      definitions: [
        { term: 'DCGF', full: 'निक्षेप तथा कर्जा सुरक्षण कोष', meaning: 'बैंक तथा वित्तीय संस्था डुबेमा सर्वसाधारणको रु. ५ लाखसम्मको निक्षेप फिर्ता दिने नेपाल सरकारको आधिकारिक संस्था।' },
        { term: 'निक्षेप सुरक्षण (Deposit Insurance)', full: 'बचतको सरकारी बिमा', meaning: 'बैंकको विफलताबाट साना निक्षेपकर्ताको पुँजी जोगाउन राज्यले बनाएको कानुनी सुरक्षा प्रणाली।' },
        { term: 'शीघ्र सुधारात्मक कदम (PCA)', full: 'राष्ट्र बैंकको हस्तक्षेप', meaning: 'कुनै बैंकमा समस्या देखिनासाथ निक्षेपकर्ताको पैसा जोगाउन राष्ट्र बैंकले गर्ने विशेष व्यवस्थापकीय नियन्त्रण।' },
        { term: 'बचत तथा ऋण सहकारी', full: 'समुदायमा आधारित संस्था', meaning: 'स्थानीय कानुन अनुसार चल्ने संस्था, जहाँ राष्ट्र बैंकको नियमन र DCGF को बिमा सुरक्षा हुँदैन।' }
      ],
      faqs: [
        { q: 'के निक्षेप बिमा बापत निक्षेपकर्ताले कुनै शुल्क तिर्नुपर्छ?', a: 'पर्दैन। वार्षिक ०.१६% को बिमा शुल्क बैंकहरू आफैँले कोषमा बुझाउँछन्। सर्वसाधारण नागरिकका लागि यो सेवा पूर्णतः निःशुल्क हुन्छ।' },
        { q: 'के कम्पनीहरूको चल्ती खाता पनि यस कोषमा सुरक्षित हुन्छ?', a: 'हुँदैन। DCGF निक्षेप सुरक्षा केवल प्राकृतिक व्यक्ति (सर्वसाधारण नागरिक) को बचत र मुद्दती खातामा मात्र लागू हुन्छ। संस्थागत निक्षेप यसमा पर्दैन।' },
        { q: 'नेपालमा अहिलेसम्म कुनै वाणिज्य बैंकका निक्षेपकर्ताको पैसा डुबेको छ?', a: 'छैन। आधुनिक बैंकिङ इतिहासमा राष्ट्र बैंकले समस्याग्रस्त बैंकहरूलाई आफैँ सुधार गरेर वा गाभेर (Merger) निक्षेपकर्ताको पैसा १००% सुरक्षित राखेको छ।' }
      ],
      takeaways: [
        '"क", "ख" र "ग" वर्गका सबै बैंकमा रु. ५,००,००० सम्मको निक्षेप कानुनी रूपमा सुरक्षित हुन्छ।',
        'सहकारीमा कुनै सरकारी बिमा सुरक्षा हुँदैन; सहकारीको चर्को ब्याज उच्च जोखिमको संकेत हो।',
        'रु. ५ लाखको सीमा एउटै बैंकका सबै खाताहरूको कुल योगफलमा लागू हुन्छ।',
        'रु. ५ लाखभन्दा धेरै रकम भएमा फरक-फरक वाणिज्य बैंकहरूमा बाँडेर १००% सुरक्षा प्राप्त गर्नुहोस्।',
        'निक्षेप सुरक्षाको सम्पूर्ण खर्च बैंकहरूले बेहोर्छन्, बचतकर्तालाई कुनै अतिरिक्त भार पर्दैन।'
      ]
    },
    relatedCalculators: [
      { name: 'FD Calculator', slug: 'calculators/fd', key: 'fd', desc: 'Calculate safe compound interest returns across multiple banks.' }
    ],
    downloadableResources: [
      { title: 'DCGF Deposit Guarantee Rules & Claim Guidelines (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '165 KB', href: 'assets/downloads/nepal-bank-rates-debenture-guide.html' }
    ]
  },

  // ── D4. CREDIT CARDS VS DEBIT CARDS IN NEPAL ─────────────────────
  'credit-vs-debit-cards-nepal': {
    id: 'bank-credit-vs-debit',
    slug: 'credit-vs-debit-cards-nepal',
    categorySlug: 'banking',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min statement audit', np: '१५ मिनेट हिसाब मिलान' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'NRB Payment Systems Department & Commercial Bank Card Bylaws', np: 'नेपाल राष्ट्र बैंक भुक्तानी प्रणाली विभाग र कार्ड विनियमावली अनुसार समीक्षित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'Credit Cards vs. Debit Cards in Nepal: Avoid the 28% APR Trap',
      oneLineSummary: 'Harness 45 days of interest-free bank credit, build an impeccable CIB score, and avoid the devastating compound interest of "Minimum Amount Due".',
      summaryPoints: [
        'A Debit Card directly deducts your own pre-existing bank balance with zero credit or debt involvement.',
        'A Credit Card provides an unsecured revolving line of credit from the bank with a 15-to-45 day grace period where 0% interest is charged.',
        'Paying only the "Minimum Amount Due" (usually 5% or 10%) triggers brutal compound finance charges of 24%-30% APR applied retroactively.',
        'Using a credit card responsibly and paying 100% of the statement balance builds a clean Credit Information Bureau (CIB) score for future home loans.',
        'Never withdraw physical cash from an ATM using a credit card in Nepal - a cash advance fee (NPR 500+) and immediate daily interest apply from Day 1.'
      ],
      whatIsThis: 'Payment cards issued by commercial banks in Nepal operate on two opposing financial principles. A Debit Card is an electronic access key to your own checking or savings account. A Credit Card is an unsecured short-term revolving loan facility: the bank pays merchants on your behalf, and you receive a monthly statement detailing your purchases, billing cycle, and payment due date.',
      whyItMatters: 'Credit card adoption is accelerating in urban Nepal, but financial literacy has lagged. Thousands of young professionals treat credit card limits as "extra income", paying only the 5% minimum due each month. Because Nepali banks charge 24% to 28% annual interest plus late fees and VAT, an unpaid NPR 50,000 balance can compound into a debt trap that triggers blacklisting at the Credit Information Bureau (Karja Suchana Kendra).',
      howItWorks: [
        { step: 1, title: 'Understand the Billing Cycle & Grace Period', desc: 'Your billing cycle runs for 30 days, followed by a 15-day payment window. Purchases made on Day 1 of the cycle enjoy up to 45 days of 100% free interest-free borrowing, provided the full statement balance is cleared by the due date.' },
        { step: 2, title: 'Always Pay "Total Amount Due" (Never Minimum)', desc: 'The credit card statement highlights "Minimum Due" (5%-10%) to tempt you into debt. If you pay even NPR 100 less than the "Total Amount Due", the entire 45-day interest-free grace period is voided retroactively.' },
        { step: 3, title: 'Keep Credit Utilization Under 30%', desc: 'If your credit limit is NPR 1,00,000, keep your monthly spending under NPR 30,000. Consistently maxing out your limit damages your internal bank credit profile.' },
        { step: 4, title: 'Never Use Credit Cards for ATM Cash Withdrawals', desc: 'ATM withdrawals on credit cards do NOT receive a grace period. Banks charge an immediate cash advance fee (NPR 400-NPR 600) plus 2% monthly interest starting the exact minute cash dispenses.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Debit Card vs Credit Card Mechanics in Nepal',
        headers: ['Feature', 'Debit Card', 'Credit Card'],
        rows: [
          ['Source of Money', 'Your own bank savings balance', 'Bank\'s short-term revolving loan limit'],
          ['Interest Charged', 'Zero (You earn savings interest)', '0% if paid in full; 24%-28% APR if rolling balance'],
          ['Grace Period', 'Not applicable', '15 to 45 days interest-free period'],
          ['ATM Cash Withdrawal', 'Free or nominal interbank fee (NPR 15)', 'Heavy fee (NPR 500+) + immediate daily interest from Day 1'],
          ['Impact on CIB Credit Score', 'Zero impact', 'Builds strong credit score (or triggers blacklisting)'],
          ['Annual Card Fee', 'NPR 350 - NPR 500 / year', 'NPR 1,000 - NPR 2,500 / year (waivable on spend)']
        ]
      },
      nepalContext: 'In Nepal, credit cards are issued under Visa or Mastercard networks by Class A commercial banks. NRB limits domestic credit card limits to a maximum of NPR 5,00,000 for standard retail customers without collateral (backed by salary certification). Furthermore, NRB permits holders to obtain a separate Dollar Prepaid Card loaded up to USD $500 per fiscal year for international digital subscriptions (Coursera, ChatGPT, AWS).',
      practicalScenario: {
        persona: 'Raju, 25, junior software engineer in Lalitpur',
        income: 'NPR 45,000 / month salary',
        scenarioText: 'Raju received a credit card with an NPR 80,000 limit. He bought a new smartphone for NPR 60,000 and paid only the minimum due of NPR 3,000 each month, believing he was smartly managing his cash flow.',
        solutionText: 'Within 6 months, finance charges at 2.2% per month (26.4% APR) plus late fees ballooned his remaining debt to NPR 64,200 despite having paid NPR 18,000 in cash. He borrowed from his emergency fund to clear the entire balance at once, destroyed the revolving habit, and automated 100% full statement payments via connectIPS.',
        metricHighlight: 'Halted NPR 1,400/month in compounding finance charges by paying full statement balance'
      },
      formula: {
        name: 'Credit Card Revolving Finance Charge Formula',
        equation: '\\text{Finance Charge} = \\text{Unpaid Balance} \\times \\left(\\frac{\\text{APR}}{365}\\right) \\times \\text{Days} + \\text{Late Fee} + \\text{VAT (13\\%)}',
        variables: [
          { symbol: 'Unpaid Balance', name: 'Carried Forward Debt', desc: 'Remaining balance after partial or minimum payment.' },
          { symbol: 'APR', name: 'Annual Percentage Rate', desc: 'Standard 24% to 28% annual interest charged by Nepali commercial banks.' },
          { symbol: 'Days', name: 'Days from Transaction Date', desc: 'Interest is charged retroactively from the transaction date, not the bill date.' },
          { symbol: 'Late Fee', name: 'Penalty Charge', desc: 'Flat NPR 500 to NPR 1,000 charged for missing the due date.' }
        ],
        exampleCalculation: 'Unpaid balance of NPR 50,000 carried for 30 days at 26% APR. Monthly interest = 50,000 * (0.26 / 365) * 30 = NPR 1,068. Add late fee NPR 600 + 13% VAT = NPR 1,746 monthly penalty for carrying debt.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Opportunity Cost'
      },
      commonMistakes: [
        { mistake: 'Paying only the "Minimum Amount Due" shown on the monthly bill.', correct: 'Always pay 100% of the "Total Amount Due" before the payment due date.', explanation: 'Paying only the minimum forfeits the entire 45-day interest-free grace period, triggering 26% APR on all transactions.' },
        { mistake: 'Using a credit card to withdraw paper currency from an ATM.', correct: 'Only use Debit Cards at ATMs; credit cards incur immediate cash advance fees and interest.', explanation: 'Cash advances have zero grace period and charge immediate interest from the exact second cash is dispensed.' },
        { mistake: 'Ignoring credit card late notices until blacklisted at CIB.', correct: 'Set up an automated direct debit from your salary account to pay your credit card in full.', explanation: 'Overdue credit card payments past 90 days trigger Karja Suchana Kendra blacklisting, blocking future home and auto loans.' }
      ],
      definitions: [
        { term: 'Grace Period', full: 'Nirbyaj Awadhi', meaning: 'The 15 to 45-day window where credit card purchases incur 0% interest, provided the statement balance is paid in full.' },
        { term: 'Minimum Due', full: 'Nyunatam Bhuktani', meaning: 'The smallest amount (usually 5%) you must pay to avoid late penalty fees, while remaining debt compounds at 26%+ APR.' },
        { term: 'CIB Score', full: 'Karja Suchana Kendra Record', meaning: 'The credit history tracking file maintained by the Credit Information Bureau of Nepal monitoring debt repayment track records.' },
        { term: 'Cash Advance Fee', full: 'Nakar Nikas Shulka', meaning: 'A flat fee (NPR 400-600) charged immediately when using a credit card at an ATM.' }
      ],
      faqs: [
        { q: 'How do I get a credit card in Nepal without a business?', a: 'Salaried employees can submit 3 months of salary bank statements, employer salary certification letter, PAN, citizenship, and passport photo to any commercial bank.' },
        { q: 'What is a Nepal Dollar Prepaid Card?', a: 'NRB allows banks to issue a USD $500/year prepaid card linked to your PAN. It is used for international online purchases (software, exams, subscriptions) without requiring foreign currency permits.' },
        { q: 'Does a credit card help me get a home loan later?', a: 'Yes. An unbroken track record of paying your credit card in full for 2 years gives you a flawless CIB score, allowing you to negotiate lower loan premium spreads.' }
      ],
      takeaways: [
        'A credit card is a payment tool, not free money. Always pay 100% of the Total Amount Due.',
        'Never pay only the "Minimum Due" - it triggers 26%+ compounding interest traps.',
        'Enjoy up to 45 days of free short-term liquidity by timing purchases to your billing cycle.',
        'Never withdraw ATM cash using a credit card; keep debit cards for all cash needs.',
        'Responsible credit card usage builds an impeccable CIB score for future home mortgages.'
      ]
    },
    np: {
      title: 'नेपालमा क्रेडिट कार्ड र डेबिट कार्डको तुलना: २८% सम्मको चर्को ब्याजबाट कसरी बच्ने?',
      oneLineSummary: '४५ दिनसम्म बिना ब्याज बैंकको पैसा चलाउने तरिका, राम्रो CIB क्रेडिट स्कोर बनाउने विधि र "Minimum Due" को ऋण पासोबाट बच्ने उपाय।',
      summaryPoints: [
        'डेबिट कार्ड (Debit Card) ले तपाईंको आफ्नै बैंक खातामा रहेको रकम तत्कालै कट्टी गर्छ; यसमा कुनै ऋण वा ब्याज हुँदैन।',
        'क्रेडिट कार्ड (Credit Card) बैंकले दिने छोटो अवधिको बिना धितो ऋण हो, जसमा १५ देखि ४५ दिनसम्म ०% ब्याजमा पैसा चलाउन पाइन्छ।',
        'मासिक बिलको "Minimum Amount Due" (५% वा १०%) मात्र तिर्दा बाँकी रकममा २४% देखि २८% सम्मको चर्को वार्षिक ब्याज लाग्छ।',
        'क्रेडिट कार्डको सम्पूर्ण रकम समयमै तिर्दा कर्जा सूचना केन्द्र (CIB) मा उत्कृष्ट क्रेडिट स्कोर बन्छ, जसले पछि सस्तोमा घरकर्जा पाउन मद्दत गर्छ।',
        'क्रेडिट कार्डबाट ATM मा गएर नगद कहिल्यै नझिक्नुहोस् - नगद झिक्दा सोही क्षणदेखि भारी शुल्क र दैनिक ब्याज लाग्छ।'
      ],
      whatIsThis: 'नेपालका वाणिज्य बैंकहरूले जारी गर्ने दुई मुख्य कार्डहरू हुन् डेबिट कार्ड र क्रेडिट कार्ड। डेबिट कार्ड भनेको आफ्नै बचत खातामा भएको पैसा झिक्ने वा POS/अनलाइनमा खर्च गर्ने डिजिटल साँचो हो। क्रेडिट कार्ड भनेको बैंकले तपाईंको आम्दानी हेरेर दिने निश्चित सीमा (जस्तै रु. १ लाख) भएको सापटी सुविधा हो, जसको बिल हरेक महिना आउँछ।',
      whyItMatters: 'नेपालका सहरहरूमा युवाहरूले क्रेडिट कार्डलाई "अतिरिक्त आम्दानी" ठानेर जथाभावी खर्च गर्ने र महिना मसान्तमा ५% मात्र मिनिमम ड्यु तिर्ने गर्छन्। बैंकहरूले बाँकी रकममा मासिक २% भन्दा बढी (वार्षिक २४-२८%) ब्याज, विलम्ब शुल्क र भ्याट जोड्दा रु. ५०,००० को ऋण केही महिनामै दोब्बर हुन पुग्छ र मानिस कर्जा सूचना केन्द्र (CIB) को कालोसूचीमा पर्छन्।',
      howItWorks: [
        { step: 1, title: 'बिलिङ साइकल र बिना ब्याजको अवधि (Grace Period) बुझ्नुहोस्', desc: 'क्रेडिट कार्डको बिल महिनाको निश्चित दिन (जस्तै १ गते) बन्छ र तिर्न १५ दिनको समय पाइन्छ। बिल बनेको भोलिपल्ट गरिएको खर्चमा पूरा ४५ दिनसम्म कुनै ब्याज लाग्दैन यदि बिलको सम्पूर्ण रकम समयमै तिरियो भने।' },
        { step: 2, title: 'सधैँ "Total Amount Due" तिर्नुहोस् (Minimum Due होइन)', desc: 'बैंकले बिलमा ५% मात्र तिरे पुग्ने "Minimum Due" देखाएर लोभ्याउँछ। यदि रु. १०० मात्र पनि बाँकी राख्नुभयो भने सम्पूर्ण ४५ दिनको सुविधा खारेज भई कारोबार भएकै मितिदेखि २४-२८% ब्याज लाग्छ।' },
        { step: 3, title: 'क्रेडिट सीमाको ३०% भन्दा बढी खर्च नगर्नुहोस्', desc: 'यदि क्रेडिट सीमा रु. १ लाख छ भने महिनामा रु. ३०,००० भन्दा धेरै खर्च नगर्नुहोस्। सीमा पूरै सक्ने बानीले बैंकको नजरमा तपाईंलाई आर्थिक दबाबमा रहेको देखाउँछ।' },
        { step: 4, title: 'ATM बाट नगद कहिल्यै नझिक्नुहोस्', desc: 'क्रेडिट कार्डबाट नगद झिक्दा कुनै ग्रेस पिरियड हुँदैन। झिक्ने बित्तिकै रु. ५०० सम्म सेवा शुल्क र सोही दिनदेखि दैनिक ब्याज लाग्न सुरु हुन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा डेबिट कार्ड र क्रेडिट कार्ड बीचको मुख्य भिन्नता',
        headers: ['विशेषता', 'डेबिट कार्ड (Debit Card)', 'क्रेडिट कार्ड (Credit Card)'],
        rows: [
          ['पैसाको स्रोत', 'तपाईंको आफ्नै बैंक बचत खाता', 'बैंकले दिएको छोटो अवधिको ऋण सीमा'],
          ['ब्याजदर', '०% (उल्टै बचतको ब्याज पाइने)', 'पूरा तिरे ०%; बाँकी राखे २४%-२८% वार्षिक'],
          ['बिना ब्याज सुविधा', 'लागू हुँदैन', '१५ देखि ४५ दिनसम्म पूर्ण निःशुल्क'],
          ['ATM बाट नगद झिक्दा', 'निःशुल्क वा सानो अन्तरबैंक शुल्क (रु. १५)', 'भारी शुल्क (रु. ५००+) + तत्कालैदेखि दैनिक ब्याज'],
          ['CIB क्रेडिट स्कोरमा असर', 'कुनै असर पर्दैन', 'राम्रोसँग चलाए उत्कृष्ट स्कोर; नतिरे कालोसूची'],
          ['वार्षिक नवीकरण शुल्क', 'रु. ३५० - रु. ५०० प्रति वर्ष', 'रु. १,००० - रु. २,५०० (खर्च धेरै गरे मिनाहा हुने)']
        ]
      },
      nepalContext: 'नेपालमा भिसा (Visa) र मास्टरकार्ड (Mastercard) नेटवर्क मार्फत "क" वर्गका वाणिज्य बैंकहरूले क्रेडिट कार्ड जारी गर्छन्। राष्ट्र बैंकको नियम अनुसार सामान्य व्यक्तिगत ग्राहकलाई तलब प्रमाणीकरणका आधारमा बढीमा रु. ५ लाखसम्म बिना धितो क्रेडिट कार्ड दिन सकिन्छ। यसका साथै विदेशबाट अनलाइन सामान, सफ्टवेयर वा परीक्षा शुल्क तिर्न वार्षिक ५०० अमेरिकी डलर बराबरको डलर प्रिपेड कार्ड लिन सकिन्छ।',
      practicalScenario: {
        persona: 'राजु, २५, ललितपुरका जुनियर सफ्टवेयर इन्जिनियर',
        income: 'मासिक तलब रु. ४५,000',
        scenarioText: 'राजुले रु. ८०,००० सीमा भएको क्रेडिट कार्डबाट रु. ६०,००० को नयाँ फोन किने। उनले हरेक महिना न्यूनतम रु. ३,००० मात्र तिर्दै गए र आफूले निकै स्मार्ट तरिकाले खर्च व्यवस्थापन गरेको ठाने।',
        solutionText: '६ महिनापछि मासिक २.२% ब्याज र जरिवाना थपिँदा रु. १८,००० नगद तिरिसक्दा पनि उनको ऋण अझै रु. ६४,२०० बाँकी देखियो। उनले आपतकालीन कोषबाट पैसा निकालेर सम्पूर्ण ऋण एकमुष्ट चुक्ता गरे र अब उप्रान्त बिल आउनासाथ १००% रकम connectIPS बाट तिर्ने नियम बनाए।',
        metricHighlight: 'एकमुष्ट पूरै बिल तिरेर मासिक रु. १,४०० को चक्रवर्ती ब्याजको ऋण पासोबाट मुक्ति'
      },
      formula: {
        name: 'क्रेडिट कार्डको बाँकी ऋणमा लाग्ने ब्याज हिसाब',
        equation: '\\text{ब्याज शुल्क} = \\text{बाँकी ऋण} \\times \\left(\\frac{\\text{वार्षिक दर}}{३६५}\\right) \\times \\text{दिन} + \\text{विलम्ब शुल्क} + \\text{भ्याट (१३\\%)}',
        variables: [
          { symbol: 'बाँकी ऋण', name: 'नतिरी छाडिएको रकम', desc: 'बिलको कुल रकमबाट केही मात्र तिरेर बाँकी रहेको कर्जा।' },
          { symbol: 'वार्षिक दर', name: 'APR ब्याजदर', desc: 'नेपालका बैंकहरूले लिने वार्षिक २४% देखि २८% सम्मको ब्याजदर।' },
          { symbol: 'दिन', name: 'कारोबार मितिदेखिका दिन', desc: 'ब्याज बिल आएको दिनबाट होइन, सामान किनेकै दिनदेखि हिसाब हुन्छ।' },
          { symbol: 'विलम्ब शुल्क', name: 'समयमा नतिर्दाको जरिवाना', desc: 'तोकिएको मिति नाघ्दा लाग्ने एकमुष्ट रु. ५०० देखि रु. १,०००।' }
        ],
        exampleCalculation: 'रु. ५०,००० बाँकी रकम ३० दिनसम्म नतिर्दा २६% ब्याजदरमा: मासिक ब्याज = ५०,००० * (०.२६ / ३६५) * ३० = रु. १,०६८। त्यसमा विलम्ब शुल्क रु. ६०० र १३% भ्याट जोड्दा महिनामै रु. १,७४६ जरिवाना लाग्छ।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'अवसर लागत क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'मासिक बिलको "Minimum Due" मात्र तिरेर ढुक्क हुनु।', correct: 'सधैँ बिलको "Total Amount Due" (पूरा रकम) म्यादभित्र तिर्नुहोस्।', explanation: 'न्यूनतम रकम मात्र तिर्दा बाँकी सबै रकममा किनेकै दिनदेखि २६% सम्म चर्को ब्याज जोडिन्छ।' },
        { mistake: 'क्रेडिट कार्डबाट ATM मा गएर पैसा झिक्नु।', correct: 'नगद झिक्न सधैँ डेबिट कार्ड मात्र प्रयोग गर्नुहोस्।', explanation: 'क्रेडिट कार्डबाट नगद निकाल्दा भारी सेवा शुल्क र सोही क्षणदेखि दैनिक ब्याज लाग्छ।' },
        { mistake: 'क्रेडिट कार्डको बिल नतिरी ९० दिन कटाउनु।', correct: 'तलब खाताबाट क्रेडिट कार्डको बिल स्वतः पूरै काटिने (Auto-Debit) बनाउनुहोस्।', explanation: '९० दिन कटेपछि कर्जा सूचना केन्द्र (CIB) ले कालोसूचीमा राख्छ र पछि घरकर्जा वा गाडी कर्जा पाइँदैन।' }
      ],
      definitions: [
        { term: 'ग्रेस पिरियड (Grace Period)', full: 'ब्याज छुट अवधि', meaning: 'सामान किनेको दिनदेखि बिल तिर्ने दिनसम्म पाइने १५ देखि ४५ दिनको बिना ब्याज सुविधा।' },
        { term: 'न्यूनतम भुक्तानी (Minimum Due)', full: 'जरिवानाबाट जोगिने सानो किस्ता', meaning: 'कालोसूचीबाट बच्न तिर्नुपर्ने कुल बिलको ५-१०% रकम, जसमा बाँकी रकममा चर्को ब्याज लाग्छ।' },
        { term: 'CIB स्कोर', full: 'कर्जा सूचना केन्द्रको रेकर्ड', meaning: 'नेपालमा ऋणीले समयमै ऋण तिरेको छ वा छैन भनी बैंकहरूले हेर्ने आधिकारिक क्रेडिट ट्र्याक रेकर्ड।' },
        { term: 'नगद पेस्की शुल्क (Cash Advance Fee)', full: 'ATM नगद झिक्दाको शुल्क', meaning: 'क्रेडिट कार्डबाट ATM मा पैसा झिक्दा लाग्ने एकमुष्ट रु. ४०० देखि रु. ६०० को अतिरिक्त शुल्क।' }
      ],
      faqs: [
        { q: 'नेपालमा जागिरे व्यक्तिले क्रेडिट कार्ड कसरी पाउँछन्?', a: 'आफ्नो ३ महिनाको तलब बैंक स्टेटमेन्ट, रोजगारदाताको तलब सिफारिस पत्र, नागरिकता, प्यान कार्ड र फोटो लिएर वाणिज्य बैंकमा आवेदन दिन सकिन्छ।' },
        { q: 'नेपालको ५०० डलर प्रिपेड कार्ड के हो?', a: 'नेपाल राष्ट्र बैंकले नेपाली नागरिकलाई अन्तर्राष्ट्रिय अनलाइन सेवा (सफ्टवेयर, नेटफ्लिक्स, परीक्षा शुल्क) तिर्न वर्षमा ५०० डलरसम्मको प्रिपेड डलर कार्ड लिन छुट दिएको छ।' },
        { q: 'के क्रेडिट कार्ड चलाउँदा पछि घरकर्जा पाउन सजिलो हुन्छ?', a: 'हुन्छ। २ वर्षसम्म क्रेडिट कार्डको बिल समयमै १००% तिरेको सफा रेकर्ड भएमा बैंकले तपाईंलाई भरपर्दो ग्राहक मान्छ र सस्तो प्रिमियममा घरकर्जा दिन्छ।' }
      ],
      takeaways: [
        'क्रेडिट कार्ड भुक्तानीको साधन हो, सित्तैको पैसा होइन; सधैँ १००% पूरै बिल तिर्नुहोस्।',
        'कहिले पनि "Minimum Due" मात्र नतिर्नुहोस् - यसले २४-२८% को डरलाग्दो चक्रवर्ती ऋणमा फसाउँछ।',
        'बिलिङ साइकल मिलाएर खर्च गर्दा ४५ दिनसम्म बैंकको पैसा सित्तैमा चलाउन सकिन्छ।',
        'ATM बाट नगद झिक्न सधैँ डेबिट कार्ड मात्र प्रयोग गर्नुहोस्।',
        'अनुशासित रूपमा क्रेडिट कार्ड चलाएर भविष्यको घरकर्जाका लागि उत्कृष्ट CIB क्रेडिट स्कोर बनाउनुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Review monthly take-home income to set safe credit card spending limits.' }
    ],
    downloadableResources: [
      { title: 'Credit Card Payoff & Interest Trap Calculator (Excel)', type: 'Excel Tool', format: 'XLSX File', size: '155 KB', href: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv' }
    ]
  },

  // ── D5. CHEQUE BOUNCE & BANKING OFFENCE ACT IN NEPAL ──────────────
  'cheque-bounce-banking-offence-nepal': {
    id: 'bank-cheque-bounce',
    slug: 'cheque-bounce-banking-offence-nepal',
    categorySlug: 'banking',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min legal compliance check', np: '१५ मिनेट कानुनी प्रक्रिया अध्ययन' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Banking Offence and Punishment Act 2064 & Negotiable Instruments Act 2034', np: 'बैंकिङ कसूर तथा सजाय ऐन २०६४ र विनिमय अधिकारपत्र ऐन २०३४ अनुसार समीक्षित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'Cheque Bounce Laws in Nepal: The Banking Offence Act & Blacklisting',
      oneLineSummary: 'Navigate the legal consequences of dishonoured cheques - the 3-bounce rule, CIB blacklisting, asset freezing, and prison sentences under Nepali law.',
      summaryPoints: [
        'Issuing a bank cheque knowing your account has insufficient funds is a severe criminal offense under the Banking Offence and Punishment Act 2064.',
        'Victims have two legal avenues in Nepal: the fast criminal route via Police/High Court (Banking Offence Act) or the civil recovery route (Negotiable Instruments Act 2034).',
        'To initiate a criminal Banking Offence FIR, the bank must issue three consecutive Cheque Return Memos with the reason "Insufficient Funds".',
        'Convicted issuers face full recovery of the cheque face value, a fine up to the cheque amount, and imprisonment from 1 month to several years depending on the amount.',
        'Being blacklisted by the Credit Information Bureau (CIB) freezes all your bank accounts, cancels debit/credit cards, and bars you from holding corporate directorships.'
      ],
      whatIsThis: 'A cheque bounce (dishonour) occurs when a payee presents a cheque for payment at a commercial bank, and the bank rejects it due to insufficient funds, account closure, signature mismatch, or stop-payment instructions. In Nepal, deliberately writing a cheque without funds is strictly prosecuted under the Banking Offence and Punishment Act 2064 (बैंकिङ कसूर तथा सजाय ऐन २०६४).',
      whyItMatters: 'Informal business transactions in Nepal heavily rely on post-dated cheques for trade credit, property deals, and personal loans. Many business owners casually issue cheques hoping future receivables will clear before presentation. When the cheque bounces, issuers are stunned to face police arrest warrants, asset freezes, passport impoundment, and public blacklisting at the Credit Information Bureau.',
      howItWorks: [
        { step: 1, title: 'Cheque Presentation & First Return Memo', desc: 'The payee presents the cheque within its 6-month validity window. If funds are lacking, the bank stamps the cheque and issues an official "Cheque Return Memo" stating "Insufficient Balance".' },
        { step: 2, title: 'Complete the "Three Return Memos" Protocol', desc: 'For prosecution under the Banking Offence Act, the payee presents the cheque three times on different dates, obtaining three separate bank return slips proving chronic non-payment.' },
        { step: 3, title: 'Send 7-Day Formal Legal Notice', desc: 'The payee serves a formal written legal notice giving the drawer 7 business days to settle the funds via cash or bank transfer. If ignored, the criminal offense is formally established.' },
        { step: 4, title: 'Police FIR & High Court Prosecution', desc: 'The payee files an FIR with the Metropolitan Police Crime Division or local police station within 1 year of the offense. The case is prosecuted by government attorneys at the Commercial Bench of the High Court (Uchha Adalat).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Legal Remedies for Cheque Bounce in Nepal: Criminal vs Civil Routes',
        headers: ['Legal Parameter', 'Banking Offence Act 2064 (Criminal Route)', 'Negotiable Instruments Act 2034 (Civil Route)'],
        rows: [
          ['Filing Authority', 'Nepal Police Crime Branch / High Court', 'District Court (Jilla Adalat)'],
          ['Burden of Proof', '3 Bank Return Memos proving deliberate fraud', 'Single bank bounce slip within 6-month validity'],
          ['Remedy to Payee', 'Full recovery of cheque amount from offender', 'Cheque amount + 10% annual interest from bounce date'],
          ['Penalties to Issuer', 'Equivalent fine + imprisonment up to 3+ years', 'Fine up to NPR 3,000 or up to 3 months imprisonment'],
          ['CIB Blacklisting', 'Mandatory blacklisting via Nepal Rastra Bank', 'Only upon non-execution of civil court judgment'],
          ['Speed of Resolution', 'Faster (Police detention & state prosecution)', 'Slow (Years of district court civil litigation)']
        ]
      },
      nepalContext: 'Under NRB Directives and CIB rules, once a bank issues three bounce memos, the bank is legally obligated to initiate blacklisting procedures against the account holder if requested by the victim. Once blacklisted: the individual cannot open new bank accounts, existing cheques are voided, loans are recalled, foreign currency exchange permits are denied, and their name is published on the public CIB blacklist registry.',
      practicalScenario: {
        persona: 'Prabha, 43, civil contractor in Kathmandu',
        income: 'NPR 1,50,000 / month contracting revenue',
        scenarioText: 'Prabha supplied building materials to a subcontractor who issued an NPR 12 Lakh post-dated cheque. When presented at the bank, the cheque bounced due to insufficient funds. The subcontractor made empty verbal promises for 4 months.',
        solutionText: 'Prabha acted decisively: she presented the cheque three times to obtain three official bank return slips, served a 7-day formal legal notice through an advocate, and filed an FIR under the Banking Offence Act. Facing immediate police detention and CIB blacklisting, the subcontractor settled the full NPR 12 Lakh within 10 days.',
        metricHighlight: 'Recovered NPR 12 Lakh within 10 days by following the formal 3-bounce legal protocol'
      },
      formula: {
        name: 'Cheque Bounce Statutory Penalty & Timeline Equation',
        equation: '\\text{Total Penalty Liability} = \\text{Cheque Face Value} + \\text{Fine (Up to 100\\%)} + \\text{Imprisonment Tenure}',
        variables: [
          { symbol: 'Cheque Face Value', name: 'Original Principal', desc: 'The exact figure written on the dishonoured cheque in Nepalese Rupees.' },
          { symbol: 'Fine', name: 'Court Imposed Fine', desc: 'Financial penalty equal to the cheque amount credited to the state.' },
          { symbol: 'Imprisonment Tenure', name: 'Prison Sentence', desc: 'Under Banking Offence Act: up to NPR 10L = 1-3 mos; NPR 10L-50L = 1-2 yrs; NPR 50L-1Cr = 2-3 yrs; Above 1Cr = 3-5 yrs.' }
        ],
        exampleCalculation: 'Bounced cheque of NPR 15,00,000 prosecuted under Banking Offence Act. Court sentence: (1) Pay NPR 15,00,000 back to the victim, (2) Pay an additional fine of NPR 15,00,000 to the government, and (3) Serve 1 to 2 years in prison.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Legal Budget Contingency'
      },
      commonMistakes: [
        { mistake: 'Letting the 6-month cheque validity period expire while listening to verbal promises.', correct: 'A cheque is only valid for 6 months from the written date; present it at the bank immediately.', explanation: 'Once 6 months elapse, the cheque becomes "stale" and cannot be processed by banks or courts.' },
        { mistake: 'Issuing a blank signed "security cheque" to informal lenders or contractors.', correct: 'Never hand over signed blank cheques; specify the exact payee name and exact amount.', explanation: 'Predatory lenders fill in inflated amounts and file criminal cheque bounce FIRs against you.' },
        { mistake: 'Accepting cash settlements without getting a signed legal withdrawal receipt.', correct: 'If settling a bounced cheque, execute a formal deed in front of witnesses or police.', explanation: 'Without formal documentation, a dishonest payee can still proceed with criminal complaints.' }
      ],
      definitions: [
        { term: 'Cheque Bounce', full: 'Cheque Anadar (Dishonour)', meaning: 'Refusal by a bank to pay a presented cheque due to inadequate balance, signature defect, or stop order.' },
        { term: 'Banking Offence Act', full: 'Banking Kasur Tatha Sajaye Ain 2064', meaning: 'The stringent criminal law of Nepal punishing financial fraud, unauthorized lending, and bad cheques.' },
        { term: 'CIB Blacklist', full: 'Kalo Suchi (Karja Suchana Kendra)', meaning: 'Official blacklist of individuals and corporations barred from accessing banking services due to defaults.' },
        { term: 'Cheque Return Memo', full: 'Bank Firta Purji', meaning: 'The official certified receipt issued by a bank detailing the exact reason why a cheque was rejected.' }
      ],
      faqs: [
        { q: 'How long is a bank cheque valid in Nepal?', a: 'A standard bank cheque in Nepal is valid for exactly 6 months from the date written on the top-right corner of the cheque.' },
        { q: 'Can I stop payment on a cheque if I had a business dispute?', a: 'You can issue a "Stop Payment" order to your bank, but if you do so maliciously to avoid a genuine debt, the payee can still prosecute you under the Banking Offence Act.' },
        { q: 'What happens to someone who is blacklisted by CIB in Nepal?', a: 'Their bank accounts are frozen, existing cheques are voided, debit/credit cards are canceled, they cannot take any loans, and their passport can be seized.' }
      ],
      takeaways: [
        'Never write a cheque unless the funds are already cleared and sitting in your bank account.',
        'A bounced cheque in Nepal is a serious criminal offense carrying prison time and heavy fines.',
        'Follow the 3-bounce protocol: obtain three consecutive bank return memos to establish an FIR.',
        'Present cheques well before their 6-month expiry date; verbal promises have zero legal standing.',
        'Never hand over blank signed security cheques to anyone under any circumstances.'
      ]
    },
    np: {
      title: 'नेपालमा चेक बाउन्स सम्बन्धी कानुन: बैंकिङ कसूर ऐन र कालोसूचीको व्यवस्था',
      oneLineSummary: 'खातामा पैसा नभई चेक काट्दा हुने कानुनी परिणाम - ३ पटक बाउन्सको नियम, प्रहरी हिरासत, जेल सजाय र कर्जा सूचना केन्द्र (CIB) को कालोसूची बुझ्नुहोस्।',
      summaryPoints: [
        'खातामा पर्याप्त रकम छैन भन्ने जानी-जानी चेक जारी गर्नु बैंकिङ कसूर तथा सजाय ऐन २०६४ अन्तर्गत गम्भीर फौजदारी अपराध हो।',
        'चेक बाउन्स भएमा पीडितसँग दुईवटा बाटो हुन्छन्: प्रहरी/उच्च अदालत जाने फौजदारी बाटो (बैंकिङ कसूर) वा जिल्ला अदालत जाने देवानी बाटो।',
        'प्रहरीमा बैंकिङ कसूरको जाहेरी (FIR) दर्ता गर्न बैंकबाट "पर्याप्त रकम नभएको" कारण खुलाई ३ पटक चेक बाउन्स भएको प्रमाण (Return Memo) लिनुपर्छ।',
        'दोषी ठहरिएमा चेकको बिगो रकम फिर्ता, बिगो बराबरको जरिवाना र १ महिनादेखि ५ वर्षसम्मको जेल सजाय हुन सक्छ।',
        'कर्जा सूचना केन्द्र (CIB) बाट कालोसूचीमा परेपछि सबै बैंक खाता रोक्का हुन्छन्, कार्ड खारेज हुन्छन् र कुनै पनि कम्पनीको सञ्चालक बन्न पाइँदैन।'
      ],
      whatIsThis: 'चेक बाउन्स (Cheque Dishonour) भनेको कसैले दिएको चेक बैंकमा भुक्तानीका लागि पेश गर्दा खातामा पैसा नभएर, खाता बन्द भएर वा हस्ताक्षर नमिलेर बैंकले भुक्तानी नगरी फिर्ता पठाउने अवस्था हो। नेपालमा रकम नभएको चेक काट्नुलाई बैंकिङ कसूर तथा सजाय ऐन २०६४ अन्तर्गत राज्यले नै गम्भीर अपराध मानेर कारबाही गर्दछ।',
      whyItMatters: 'नेपालको व्यापार, जग्गा कारोबार र व्यक्तिगत लेनदेनमा पोस्ट-डेटेड (पछिको मिति राखिएको) चेक व्यापक प्रयोग हुन्छ। धेरैले भोलि पैसा आइहाल्छ नि भन्ने सोचेर अन्धाधुन्ध चेक काटिदिन्छन्। पछि चेक बाउन्स हुँदा प्रहरीको पक्राउ पुर्जी जारी हुने, जेल जानुपर्ने, बैंक खाता रोक्का हुने र जीवनभरका लागि कालोसूचीमा परिने अवस्था आउँछ।',
      howItWorks: [
        { step: 1, title: 'चेक बैंकमा पेश गरी पहिलो फिर्ता पुर्जी (Memo) लिनुहोस्', desc: 'चेक जारी भएको मितिले ६ महिनाभित्र बैंकमा पेश गर्नुहोस्। पैसा नभए बैंकले चेक फिर्ता गरी "Insufficient Balance" लेखिएको आधिकारिक Return Memo दिन्छ।' },
        { step: 2, title: '३ पटक चेक बाउन्स गराउने प्रक्रिया पूरा गर्नुहोस्', desc: 'बैंकिङ कसूरमा जानका लागि केही दिनको अन्तरालमा ३ पटक चेक पेश गरी ३ वटा छुट्टाछुट्टै बैंक फिर्ता स्लिप (Return Slip) लिनु अनिवार्य हुन्छ।' },
        { step: 3, title: '७ दिने कानुनी सूचना (Notice) पठाउनुहोस्', desc: 'चेक काट्ने व्यक्तिलाई कानुन व्यवसायीमार्फत ७ दिनभित्र रकम भुक्तानी गर्न लिखित सूचना पठाउनुहोस् वा मौखिक जानकारी दिनुहोस्।' },
        { step: 4, title: 'प्रहरीमा जाहेरी (FIR) र उच्च अदालतमा मुद्दा दर्ता', desc: 'कसूर भएको १ वर्षभित्र सम्बन्धित जिल्ला प्रहरी कार्यालय वा काठमाडौँ उपत्यका अपराध अनुसन्धान कार्यालयमा जाहेरी दिनुहोस्। सरकारी वकिलले उच्च अदालतको वाणिज्य इजलासमा मुद्दा दायर गर्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा चेक बाउन्सका दुई कानुनी उपचार: फौजदारी भर्सेस देवानी मार्ग',
        headers: ['कानुनी आधार', 'बैंकिङ कसूर ऐन २०६४ (फौजदारी मार्ग)', 'विनिमय अधिकारपत्र ऐन २०३४ (देवानी मार्ग)'],
        rows: [
          ['मुद्दा जाने निकाय', 'नेपाल प्रहरी / उच्च अदालत (वाणिज्य इजलास)', 'सम्बन्धित जिल्ला अदालत'],
          ['आवश्यक प्रमाण', '३ पटक बैंक बाउन्स भएको आधिकारिक स्लिप', '६ महिनाभित्र १ पटक बाउन्स भएको स्लिप'],
          ['पीडितले पाउने राहत', 'चेकको बिगो रकम तुरुन्त असुलउपर', 'बिगो रकम + बाउन्स मितिदेखि १०% वार्षिक ब्याज'],
          ['चेक काट्नेलाई सजाय', 'बिगो बराबर जरिवाना + १ महिनादेखि वर्षौँ जेल', 'रु. ३,००० सम्म जरिवाना वा ३ महिना कैद'],
          ['CIB कालोसूची', 'राष्ट्र बैंकमार्फत अनिवार्य कालोसूचीमा राखिने', 'अदालतको फैसला कार्यान्वयन नभए मात्र'],
          ['मुद्दाको गति', 'छिटो (प्रहरीले पक्राउ गरी थुनामा राख्ने)', 'ढिलो (वर्षौँसम्म जिल्ला अदालतमा तारिख धाउनुपर्ने)']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकको निर्देशन अनुसार ३ पटक चेक बाउन्स भएपछि पीडितले निवेदन दिएमा बैंकले सम्बन्धित खातावालालाई कर्जा सूचना केन्द्र (CIB) को कालोसूचीमा राख्न पत्राचार गर्नैपर्छ। कालोसूचीमा परेपछि: नयाँ बैंक खाता खोल्न पाइँदैन, पुराना चेक निष्प्रभावी हुन्छन्, ऋण तुरुन्त असुल गरिन्छ, राहदानी रोक्का हुन सक्छ र कुनै पनि पब्लिक वा प्राइभेट कम्पनीमा सञ्चालक बस्न कानुनी अयोग्यता लाग्छ।',
      practicalScenario: {
        persona: 'प्रभा, ४३, काठमाडौँकी निर्माण व्यवसायी (ठेकेदार)',
        income: 'मासिक व्यवसाय आम्दानी रु. १,५०,000',
        scenarioText: 'प्रभाले एक सब-कन्ट्रयाक्टरलाई निर्माण सामग्री दिए बापत रु. १२ लाखको चेक पाएकी थिइन्। बैंकमा पेश गर्दा खातामा पैसा नभएर चेक बाउन्स भयो। सब-कन्ट्रयाक्टरले ४ महिनासम्म "भोलि-पर्सि" भन्दै झुलायो।',
        solutionText: 'प्रभाले कानुनी प्रक्रिया अपनाइन्: उनले ३ पटक बैंकमा पेश गरी ३ वटा रिर्टन मेमो लिइन्, वकिलमार्फत ७ दिने अल्टिमेटम दिइन् र प्रहरीमा बैंकिङ कसूर अन्तर्गत जाहेरी दिइन्। प्रहरीले पक्राउ गर्ने र कालोसूचीमा पर्ने डरले सब-कन्ट्रयाक्टरले १० दिनभित्रै रु. १२ लाख नगद जोहो गरेर चुक्ता गर्‍यो।',
        metricHighlight: '३ पटक बाउन्सको कानुनी प्रक्रिया पूरा गरी १० दिनभित्र रु. १२ लाख असुल'
      },
      formula: {
        name: 'बैंकिङ कसूरमा बिगो र जरिवाना दायित्व हिसाब',
        equation: '\\text{कुल कानुनी दायित्व} = \\text{चेकको बिगो रकम} + \\text{बिगो बराबर जरिवाना} + \\text{कैद सजाय}',
        variables: [
          { symbol: 'बिगो रकम', name: 'चेकको वास्तविक रकम', desc: 'बाउन्स भएको चेकमा उल्लेख गरिएको कुल रुपैयाँ।' },
          { symbol: 'जरिवाना', name: 'अदालतले तोक्ने दण्ड', desc: 'सरकारको राजस्वमा दाखिला गर्नुपर्ने बिगो बराबरको रकम।' },
          { symbol: 'कैद सजाय', name: 'जेल बस्नुपर्ने अवधि', desc: 'रु. १० लाखसम्म: १-३ महिना; रु. १०-५० लाख: १-२ वर्ष; रु. ५० लाख-१ करोड: २-३ वर्ष; १ करोडमाथि: ३-५ वर्ष।' }
        ],
        exampleCalculation: 'रु. १५ लाखको चेक बाउन्स भएको मुद्दामा उच्च अदालतको फैसला: (१) पीडितलाई रु. १५ लाख बिगो भराउने, (२) सरकारलाई रु. १५ लाख जरिवाना तिराउने, र (३) दोषीलाई १ देखि २ वर्ष कैद सजाय गर्ने। कुल आर्थिक दायित्व = रु. ३० लाख + जेल।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'आर्थिक योजना क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'चेकको ६ महिनाको म्याद मौखिक आश्वासन सुनेर खेर फाल्नु।', correct: 'चेक जारी भएको मितिले ६ महिनाभित्र बैंकमा पेश गरी अनिवार्य बाउन्स गराउनुहोस्।', explanation: '६ महिना कटेपछि चेक कानुनी रूपमा म्याद नाघेको (Stale) हुन्छ र अदालतमा प्रमाण लाग्दैन।' },
        { mistake: 'सुरक्षा (Security) का नाममा खाली हस्ताक्षर गरिएको चेक अरूलाई दिनु।', correct: 'कहिल्यै पनि खाली चेकमा हस्ताक्षर नगर्नुहोस्; सधैँ मिति, नाम र रकम तोक्नुहोस्।', explanation: 'खराब नियत भएका व्यक्तिले खाली चेकमा मनपरी रकम भरेर बैंकिङ कसूरमा फसाउन सक्छन्।' },
        { mistake: 'पैसा तिरिसकेपछि पुरानो बाउन्स भएको चेक फिर्ता नलिई कागज मात्र गर्नु।', correct: 'रकम चुक्ता गर्नासाथ बैंकबाट बाउन्स भएको सक्कल चेक र फिर्ता पुर्जी अनिवार्य फिर्ता लिनुहोस्।', explanation: 'सक्कल चेक अरूसँग रहिरहेमा पछि फेरि दुरुपयोग हुने वा मुद्दा चल्ने जोखिम रहन्छ।' }
      ],
      definitions: [
        { term: 'चेक अनादर (Cheque Bounce)', full: 'चेक अनादर हुनु', meaning: 'खातामा पर्याप्त रकम नभएर वा अन्य कैफियतले गर्दा बैंकले चेकको भुक्तानी अस्वीकार गर्ने कार्य।' },
        { term: 'बैंकिङ कसूर ऐन २०६४', full: 'बैंकिङ अपराध नियन्त्रण कानुन', meaning: 'चेक बाउन्स, नक्कली कारोबार र वित्तीय ठगीलाई कडा फौजदारी सजाय गर्ने नेपालको विशेष कानुन।' },
        { term: 'CIB कालोसूची (Blacklist)', full: 'कर्जा सूचना केन्द्रको सूची', meaning: 'चेक बाउन्स गर्ने वा ऋण नतिर्ने व्यक्तिहरूलाई सम्पूर्ण बैंकिङ सुविधाबाट वञ्चित गर्ने आधिकारिक सूची।' },
        { term: 'फिर्ता पुर्जी (Return Memo)', full: 'बैंकको आधिकारिक अस्वीकृति पत्र', meaning: 'कुन कारणले चेक भुक्तानी भएन भनी बैंकले छाप हानेर जारी गर्ने कानुनी प्रमाण।' }
      ],
      faqs: [
        { q: 'नेपालमा बैंक चेक कति समयसम्म मान्य हुन्छ?', a: 'नेपालमा काटिएको चेकमा उल्लेख गरिएको मितिदेखि ठ्याक्कै ६ महिनासम्म मात्र बैंकमा भुक्तानीका लागि मान्य हुन्छ।' },
        { q: 'के कारोबारको विवाद हुँदा आफैँ चेक रोक्का (Stop Payment) गर्न मिल्छ?', a: 'मिल्छ, तर वास्तविक लेनदेन छल्नका लागि बदनियतपूर्वक Stop Payment गरेमा पनि पीडितले बैंकिङ कसूरमा जाहेरी दिन सक्छ।' },
        { q: 'CIB कालोसूचीमा परेपछि के-के सुविधा रोकिन्छ?', a: 'नयाँ बैंक खाता खोल्न पाइँदैन, पुरानो खाताको चेक चल्दैन, ATM/क्रेडिट कार्ड रद्द हुन्छ, कुनै बैंकबाट ऋण पाइँदैन र सरकारी सुविधाबाट वञ्चित हुनुपर्छ।' }
      ],
      takeaways: [
        'खातामा पर्याप्त पैसा नभएसम्म कसैलाई पनि चेक काटेर दिने गल्ती कहिल्यै नगर्नुहोस्।',
        'नेपालमा चेक बाउन्स हुनु देवानी विवाद मात्र होइन, जेल सजाय हुने गम्भीर फौजदारी अपराध हो।',
        'चेक बाउन्स भएमा बैंकबाट ३ पटक आधिकारिक Return Memo लिएर मात्र कानुनी प्रक्रिया सुरु गर्नुहोस्।',
        'चेकको ६ महिनाको म्याद नाघ्न नदिनुहोस्; मौखिक गफको कुनै कानुनी मूल्य हुँदैन।',
        'सुरक्षाका नाममा कसैलाई पनि खाली हस्ताक्षर गरिएको चेक कहिल्यै नदिनुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Assess business cash flows to prevent deficit liquidity and dishonoured cheques.' }
    ],
    downloadableResources: [
      { title: 'Cheque Bounce FIR & Legal Notice Draft Templates (Word/PDF)', type: 'Legal Template', format: 'PDF Document', size: '180 KB', href: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv' }
    ]
  }

};

// BATCH L - PRODUCTIVITY (6 lessons)
// 1. why-detailed-budgeting-fails
// 2. notion-spreadsheet-money-systems
// 3. 30-minute-monthly-financial-checkin
// 4. organizing-tax-receipts-banking-documents
// 5. preventing-lifestyle-inflation-nepal
// 6. annual-net-worth-audit-goal-setting

export const BATCH_L = {

  // ── L1. WHY DETAILED BUDGETING FAILS ─────────────────────────────
  'why-detailed-budgeting-fails': {
    id: 'prod-why-budgeting-fails',
    slug: 'why-detailed-budgeting-fails',
    categorySlug: 'productivity',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Behavioral Finance Research & Personal Cash Flow Systems', np: 'व्यवहारपरक वित्तीय अनुसन्धान तथा व्यक्तिगत नगद प्रवाह मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'Basic experience trying to track daily expenses', np: 'दैनिक खर्च टिप्न खोजेको सामान्य अनुभव' },
    en: {
      title: 'Why Detailed Budgeting Fails in Nepal: The Anti-Budget Solution',
      oneLineSummary: 'Stop recording every NPR 25 cup of tea - replace tedious line-item spreadsheets with automated macro cash-flow buckets.',
      summaryPoints: [
        'Line-item micro-budgeting suffers an over 85% abandonment rate within 30 days due to decision fatigue.',
        'Logging every street food snack or auto-rickshaw fare creates guilt and friction rather than real financial progress.',
        'The Anti-Budget ("Pay Yourself First") inverts the formula: automate your savings on salary day and spend whatever remains guilt-free.',
        'Nepali cash-flow reality involves irregular festival gifts, communal dining, and mixed cash/QR channels that break traditional budgeting apps.',
        'Financial success is driven by 3 macro decisions (rent, vehicle, automated savings rate), not obsessing over minor daily expenses.'
      ],
      whatIsThis: 'Detailed line-item budgeting is the traditional method of categorizing and recording every single transaction down to the rupee. The "Anti-Budget" (or Pay-Yourself-First system) replaces this micro-accounting by automating your savings target the moment income arrives, allowing the remaining bank balance to be spent freely across needs and wants without manual tracking.',
      whyItMatters: 'Most Nepalis download an expense tracking app on January 1st or Baisakh 1st, diligently record tea and samosas for 10 days, miss recording a weekend wedding dinner, feel guilty, and delete the app by day 20. This failure is psychological, not moral. You do not get rich by saving NPR 25 on tea; you build wealth by automating an NPR 10,000 monthly mutual fund SIP before your lifestyle has a chance to touch it.',
      howItWorks: [
        { step: 1, title: 'Acknowledge Decision Fatigue & Cognitive Load', desc: 'Making 15 micro-decisions daily about whether an expense was a "need" or "want" drains mental willpower. Humans naturally abandon high-friction tracking systems.' },
        { step: 2, title: 'Invert the Formula (Income - Savings = Spending)', desc: 'Traditional budgeting says: Income - Expenses = Savings (whatever is left over). The Anti-Budget says: Income - Automated Savings = Guilt-Free Spending.' },
        { step: 3, title: 'Set Up Automated Bank & SIP Mandates', desc: 'Configure connectIPS or bank standing instructions to deduct 20%-25% of your salary into SIPs and debt prepayments on the 2nd of each month.' },
        { step: 4, title: 'Spend the Remaining Balance with Zero Guilt', desc: 'Whatever remains in your salary account pays fixed rent and daily living. If your account balance hits zero at month-end, it is completely fine - your savings are already locked away compounding!' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Traditional Line-Item Budgeting vs The RisePaisa Anti-Budget',
        headers: ['System Parameter', 'Traditional Micro-Budgeting', 'The RisePaisa Anti-Budget', 'Why Anti-Budget Wins'],
        rows: [
          ['Daily Time Investment', '15-20 minutes every evening', 'ZERO minutes daily', 'Zero operational friction'],
          ['Failure & Dropout Rate', '85%+ quit within 30 days', '< 5% dropout over 5 years', 'Runs on autopilot'],
          ['Psychological Feeling', 'Guilt, restriction & shame over small buys', 'Total peace of mind & guilt-free spending', 'Sustainable for decades'],
          ['Tracking Tool Required', 'Complex spreadsheet or mobile app', 'Single bank account balance check', 'Anyone can execute today'],
          ['Wealth Accumulation', 'Dependent on leftover willpower', 'Guaranteed by automated salary deductions', 'Wealth grows before spending starts']
        ]
      },
      nepalContext: 'In Nepal, daily cash flow is inherently fluid: you might pay NPR 20 for tea in cash, scan a Fonepay QR for NPR 450 at a grocery shop, lend NPR 2,000 informally to a cousin, and receive Dashain Dakshina from relatives. Foreign apps (Mint, YNAB) fail completely because they cannot parse Nepali bank SMS or reconcile informal cash. The Anti-Budget thrives in Nepal because it operates at the top of the funnel, ignoring messy micro-transactions completely.',
      practicalScenario: {
        persona: 'Anish, 25, digital marketing executive in Kathmandu',
        income: 'NPR 45,000 / month salary',
        scenarioText: 'Anish tried 4 different budgeting apps over 2 years. Every time he went out with friends to Jhamsikhel or attended a cousin\'s wedding, his budget derailed. He felt like a financial failure and stopped saving altogether.',
        solutionText: 'Anish adopted the Anti-Budget: on the 2nd of every month, an automated connectIPS mandate transfers NPR 9,000 (20%) directly into an open-ended mutual fund SIP. He pays NPR 16,000 rent immediately. The remaining NPR 20,000 is his spending money. He deleted all expense-tracking apps and accumulated NPR 1,08,000 in his SIP in his very first year.',
        metricHighlight: 'Saved NPR 1.08 Lakh in 12 months with zero daily expense tracking'
      },
      formula: {
        name: 'The Anti-Budget Wealth Equation',
        equation: '\\text{Guilt-Free Spending Balance} = \\text{Net Take-Home Pay} - \\text{Automated Savings (\\ge 20\\%)} - \\text{Fixed Overhead}',
        variables: [
          { symbol: '\\text{Net Take-Home}', name: 'Monthly Credited Salary', desc: 'Salary hitting bank account after tax and SSF.' },
          { symbol: '\\text{Automated Savings}', name: 'Non-Negotiable Investment', desc: 'Auto-debited on salary day via connectIPS e-mandate.' },
          { symbol: '\\text{Fixed Overhead}', name: 'Mandatory Fixed Bills', desc: 'Rent + WiFi + electricity + loan EMIs.' }
        ],
        exampleCalculation: 'Salary = NPR 50,000. Automated SIP (20%) = NPR 10,000. Fixed Rent + Utilities = NPR 18,000. Guilt-Free Spending = 50,000 - 10,000 - 18,000 = NPR 22,000. Spend that NPR 22,000 on food, travel, and clothes with 100% peace of mind!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Automated Savings'
      },
      commonMistakes: [
        { mistake: 'Obsessing over saving NPR 30 on daily tea while ignoring a high-rent apartment.', correct: 'Focus 90% of your energy on the Big 3: housing rent, vehicle choice, and savings rate.', explanation: 'Cutting a NPR 20,000 rent down to NPR 14,000 saves more in one month than skipping 200 cups of tea.' },
        { mistake: 'Trying to track every rupee spent during festivals like Dashain and Tihar.', correct: 'Set a lump-sum festival cash budget in advance and spend it freely without micro-logging.', explanation: 'Festival micro-tracking creates marital and family tension while failing to curb impulse buying.' },
        { mistake: 'Leaving savings in your everyday checking account hoping not to spend it.', correct: 'Transfer savings out of sight on salary day to a separate investment account.', explanation: 'Money visible in your primary account will inevitably be spent due to Parkinson\'s Law of Money.' }
      ],
      definitions: [
        { term: 'The Anti-Budget', full: 'विपरीत बजेटिङ प्रणाली', meaning: 'A money system where you automate savings first, then spend whatever remains without tracking individual receipts.' },
        { term: 'Decision Fatigue', full: 'निर्णयको थकान', meaning: 'The deteriorating quality of decisions made by an individual after a long session of making repetitive choices.' },
        { term: 'Parkinson\'s Law of Money', full: 'खर्च विस्तारको नियम', meaning: 'The behavioral economic reality that expenses rise to equal income unless strict structural barriers are created.' },
        { term: 'Pay Yourself First', full: 'पहिले आफूलाई भुक्तानी सिद्धान्त', meaning: 'Routing money directly to your future self (investments) before paying landlords, merchants, and utilities.' }
      ],
      faqs: [
        { q: 'Doesn\'t the Anti-Budget lead to overspending on luxury items?', a: 'No, because your luxury spending is naturally capped by what remains in your account after your 20% savings and fixed bills are deducted. You cannot overspend beyond your remaining balance.' },
        { q: 'How do I handle unexpected emergency expenses under the Anti-Budget?', a: 'Emergency expenses are funded by your dedicated 6-month Emergency Fund held in a separate bank, not by dipping into your daily spending account.' },
        { q: 'Is the Anti-Budget suitable for freelancers with irregular monthly income in Nepal?', a: 'Yes. For irregular income, calculate your average baseline expenses and transfer a fixed percentage (e.g. 20% of every incoming client invoice) immediately to investments upon receipt.' }
      ],
      takeaways: [
        'Line-item micro-budgeting fails because human willpower cannot sustain tracking every minor expense.',
        'Invert your money formula: Income - Automated Savings = Guilt-Free Spending.',
        'Automate 20%+ of your salary into mutual fund SIPs on the 2nd of every month via connectIPS.',
        'Focus on big macroeconomic levers (rent, vehicle, savings rate) rather than minor cups of tea.',
        'Spend your remaining balance with zero guilt - your future wealth is already locked away compounding.'
      ]
    },
    np: {
      title: 'नेपालमा विस्तृत बजेटिङ किन असफल हुन्छ: एन्टि-बजेट (Anti-Budget) समाधान',
      oneLineSummary: '२५ रुपैयाँको चियाको हिसाब टिप्न छाड्नुहोस् - झन्झटिलो दैनिक खर्चको साटो स्वचालित "पहिले बचत" प्रणाली अपनाउनुहोस्।',
      summaryPoints: [
        'दैनिक एक-एक रुपैयाँको हिसाब राख्ने परम्परागत बजेट प्रणाली ८५% भन्दा बढी मानिसले ३० दिनभित्रै दिक्क भएर छाड्छन्।',
        'खाजा, चिया र गाडी भाडाको हिसाब टिप्दा मानसिक थकान (Decision Fatigue) र अपराधबोध मात्र सिर्जना हुन्छ।',
        'एन्टि-बजेट ("पहिले आफूलाई भुक्तानी") ले नियम उल्ट्याइदिन्छ: तलब आएकै दिन बचत स्वचालित रूपमा काटिन्छ र बाँकी पैसा विना चिन्ता खर्च गरिन्छ।',
        'नेपाली समाजमा चल्ने नगद, दक्षिणा, साथीभाइसँगको खाजा र क्युआर भुक्तानीका कारण विदेशी बजेट एपहरू कामै नलाग्ने हुन्छन्।',
        'धनी बन्न चिया खर्च घटाएर होइन, कोठाभाडा, सवारी साधन र स्वचालित बचत दर जस्ता ३ वटा ठूला निर्णय मिलाएर सम्भव हुन्छ।'
      ],
      whatIsThis: 'विस्तृत बजेटिङ (Line-Item Budgeting) भनेको दिनभरि भएको प्रत्येक सानोतिनो खर्च कापी वा मोबाइल एपमा टिप्ने परम्परागत तरिका हो। यसको सट्टा "एन्टि-बजेट" (Anti-Budget / Pay Yourself First) ले महिनाको सुरुमै तलब आउनासाथ तोकिएको बचत रकम सिधै लगानीमा पठाइदिन्छ र बाँकी पैसालाई कुनै पनि हिसाब नराखी ढुक्कसँग खर्च गर्ने स्वतन्त्रता दिन्छ।',
      whyItMatters: 'अधिकांश नेपालीहरूले नयाँ वर्ष वा वैशाख १ गते खर्च टिप्ने एप डाउनलोड गर्छन्, १० दिनसम्म चिया-समोसाको हिसाब टिप्छन्, कुनै बिहे वा भोजमा हिसाब छुट्छ, अपराधबोध हुन्छ र २० औँ दिनमा एप डिलिट गरिदिन्छन्। २५ रुपैयाँको चिया जोगाएर कोही करोडपति बन्दैन; तलब आउनासाथ महिनाको १० हजार रुपैयाँ सिधै म्युचुअल फन्ड SIP मा स्वचालित लगानी गरेर मात्र वास्तविक सम्पत्ति बन्छ।',
      howItWorks: [
        { step: 1, title: 'निर्णयको थकान (Cognitive Fatigue) स्वीकार्नुहोस्', desc: 'दिनमा १५ पटक "यो खर्च आवश्यकता हो कि विलासिता" भन्दै सोच्दा दिमाग थाक्छ। मानवीय स्वभावले नै धेरै झन्झटिलो काम लामो समयसम्म गर्न सक्दैन।' },
        { step: 2, title: 'बचतको सूत्र उल्ट्याउनुहोस्', desc: 'पुरानो नियम: आम्दानी - खर्च = बचत (बाँकी रहे मात्र)। नयाँ एन्टि-बजेट नियम: आम्दानी - स्वचालित बचत = विना चिन्ता गरिने खर्च।' },
        { step: 3, title: 'तलब आएकै दिन अटो-डेबिट जोड्नुहोस्', desc: 'connectIPS मार्फत हरेक महिनाको २ वा ५ गते तलबको २०% देखि २५% रकम सिधै म्युचुअल फन्ड वा ऋणको साँवा कट्टामा काटिने बनाउनुहोस्।' },
        { step: 4, title: 'बाँकी रकम शून्य नहुन्जेल ढुक्कले खर्च गर्नुहोस्', desc: 'बचत काटिएपछि बाँकी रहेको पैसाले भाडा तिर्नुहोस् र रमाइलो गर्नुहोस्। महिनाको अन्त्यमा खाताको ब्यालेन्स शून्य भए पनि केही फरक पर्दैन - किनकि तपाईंको बचत त पहिले नै लगानी भइसक्यो!' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'परम्परागत खर्च टिप्ने बजेट बनाम risePaisa को एन्टि-बजेट प्रणाली',
        headers: ['प्रणालीको सूचक', 'परम्परागत विस्तृत बजेट (Micro)', 'risePaisa एन्टि-बजेट (Macro)', 'एन्टि-बजेट किन जित्छ?'],
        rows: [
          ['दैनिक लाग्ने समय', 'हरेक साँझ १५-२० मिनेट हिसाब टिप्ने', 'दैनिक शून्य (०) मिनेट', 'कुनै झन्झट वा मानसिक तनाव छैन'],
          ['असफल हुने दर', '८५% ले १ महिनामै छाडिदिने', '५ वर्षसम्म पनि ९५% सफल रहने', 'सबै काम स्वचालित प्रणालीले गर्छ'],
          ['मानसिक अनुभूति', 'सानो खर्च गर्दा पनि गल्ती गरे जस्तो लाग्ने', 'पूर्ण मानसिक शान्ति र ढुक्कको जीवनशैली', 'जीवनभर दिगो रूपमा अपनाउन सकिने'],
          ['चाहिने औजार', 'जटिल एक्सेल सिट वा मोबाइल एप', 'एउटै बैंक खाताको ब्यालेन्स हेरे पुग्ने', 'आजै १ मिनेटमा सुरु गर्न सकिने'],
          ['सम्पत्ति निर्माण', 'महिनाको अन्त्यमा पैसा बाँचे मात्र', 'तलब आउनेबित्तिकै अनिवार्य लगानी', 'खर्च हुनुअगावै सम्पत्ति निर्माण सुरु']
        ]
      },
      nepalContext: 'नेपालमा दैनिक नगद प्रवाह एकदमै अनौपचारिक हुन्छ: कहिले चिया पसलमा २० रुपैयाँ नगद तिरिन्छ, कहिले किरानामा फोनपे क्युआरबाट ४५० तिर्छौँ, कहिले साथीलाई २ हजार सापटी दिन्छौँ त कहिले दसैँमा दक्षिणा आउँछ। विदेशी एपहरूले नेपाली बैंकका एसएमएस पढ्न नसक्ने र नगद हिसाब मिलाउन नसक्ने भएकाले फेल हुन्छन्। एन्टि-बजेटले यस्ता खुद्रा खर्चलाई पूर्ण बेवास्ता गरी मूल मुहानमै बचत काटिदिने हुँदा नेपालमा शतप्रतिशत सफल हुन्छ।',
      practicalScenario: {
        persona: 'अनिश, २५, काठमाडौँका डिजिटल मार्केटिङ अधिकृत',
        income: 'मासिक तलब रु. ४५,०००',
        scenarioText: 'अनिशले २ वर्षमा ४ वटा बजेट एप चलाए। जब-जब उनी साथीहरूसँग झम्सिखेलमा कफी खान्थे वा आफन्तको बिहेमा जान्थे, उनको बजेट भताभुङ्ग हुन्थ्यो। उनी निराश भएर हिसाब टिप्नै छाडिदिए।',
        solutionText: 'उनले एन्टि-बजेट अपनाए: महिनाको २ गते तलब आउनासाथ connectIPS ले रु. ९,००० (२०%) सिधै खुलामुखी म्युचुअल फन्ड SIP मा काटिदिने बनाए। रु. १६,००० कोठाभाडा तिरे। बाँकी २० हजार उनले कुनै हिसाब नराखी खर्च गरे। उनले पहिलो वर्षमै १ लाख ८ हजार रुपैयाँ बचत गर्न सफल भए।',
        metricHighlight: 'दैनिक खर्च नटिपीकन १ वर्षमा १ लाख ८ हजार रुपैयाँ बचत गरे'
      },
      formula: {
        name: 'एन्टि-बजेट खर्च योग्य रकम सूत्र',
        equation: '\\text{Guilt-Free Spending Balance} = \\text{Net Take-Home Pay} - \\text{Automated Savings (\\ge 20\\%)} - \\text{Fixed Overhead}',
        variables: [
          { symbol: '\\text{Net Take-Home}', name: 'खातामा आएको खुद तलब', desc: 'कर र SSF कटाएर हात परेको रकम।' },
          { symbol: '\\text{Automated Savings}', name: 'स्वचालित बचत र लगानी', desc: 'तलब आएकै दिन connectIPS बाट काटिने रकम (न्यूनतम २०%)।' },
          { symbol: '\\text{Fixed Overhead}', name: 'स्थिर अनिवार्य खर्च', desc: 'कोठाभाडा + इन्टरनेट + बत्तीको बिल + ऋणको किस्ता।' }
        ],
        exampleCalculation: 'तलब = रु. ५०,०००। स्वचालित SIP (२०%) = रु. १०,०००। स्थिर भाडा र बिल = रु. १८,०००। विना चिन्ता खर्च गर्ने रकम = ५०,००० - १०,००० - १८,००० = रु. २२,०००। अब यो २२ हजार खानपिन, लुगाफाटा र घुमघाममा पूर्ण मानसिक शान्तिका साथ खर्च गर्नुहोस्!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'स्वचालित बचत हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'कोठाभाडा महँगो तिरेर दैनिक २० रुपैयाँको चियामा लोभ गर्नु।', correct: 'आफ्नो ९०% ध्यान ठूला ३ कुरामा दिनुहोस्: घरभाडा, गाडी छनोट र बचत दर।', explanation: '२० हजारको फ्ल्याट छाडेर १४ हजारको कोठामा सर्दा जोगिने ६ हजार चिया खर्चभन्दा सयौँ गुणा ठूलो हुन्छ।' },
        { mistake: 'दसैँ-तिहार जस्ता चाडपर्वमा एक-एक रुपैयाँको हिसाब टिपेर तनाव लिनु।', correct: 'चाडपर्वका लागि पहिले नै निश्चित एकमुष्ट बजेट छुट्याउनुहोस् र ढुक्कले खर्च गर्नुहोस्।', explanation: 'चाडपर्वमा कचकच गर्दा पारिवारिक सम्बन्ध बिग्रन्छ तर खर्च भने रोकिँदैन।' },
        { mistake: 'पैसा बचत खातामै राखेर "म यस महिना खर्च गर्दिनँ" भनी मनको भर पर्नु।', correct: 'तलब आएकै दिन बचतको पैसा आँखाले नदेख्ने गरी अर्कै लगानी खातामा पठाइदिनुहोस्।', explanation: 'पार्किन्सनको नियम अनुसार बैंक खातामा पैसा देखिरहेसम्म त्यो कुनै न कुनै बहानामा खर्च भई नै हाल्छ।' }
      ],
      definitions: [
        { term: 'एन्टि-बजेट (Anti-Budget)', full: 'विपरीत बजेटिङ', meaning: 'दैनिक खर्चको हिसाब नराखी महिनाको सुरुमै बचत लगानी गरेर बाँकी पैसा स्वतन्त्र रूपमा खर्च गर्ने विधि।' },
        { term: 'निर्णयको थकान (Decision Fatigue)', full: 'मानसिक ऊर्जाको ह्रास', meaning: 'दिनभर धेरै सानातिना निर्णयहरू गर्दा दिमाग थाकेर अन्ततः गलत वित्तीय निर्णय लिने मनोवैज्ञानिक अवस्था।' },
        { term: 'पार्किन्सनको नियम (Parkinson\'s Law)', full: 'खर्च फैलिने नियम', meaning: 'जति धेरै पैसा हातमा देखिन्छ, आवश्यकता पनि त्यति नै बढेर पैसा सकिने मानवीय प्रवृत्ति।' },
        { term: 'पहिले आफूलाई भुक्तानी', full: 'Pay Yourself First', meaning: 'घरबेटी, पसले र रेस्टुरेन्टलाई पैसा बाँड्नुअघि आफ्नो भविष्यका लागि पहिले लगानी छुट्याउने बानी।' }
      ],
      faqs: [
        { q: 'के एन्टि-बजेटले मानिसलाई फजुल खर्च गर्न उक्साउँदैन?', a: 'उक्साउँदैन, किनकि तपाईंको फजुल खर्च बचत र घरभाडा काटिएपछि बाँकी रहेको सीमित रकमभित्र मात्र हुन्छ। बचत त महिनाको सुरुमै लगानी भइसकेको हुन्छ।' },
        { q: 'यदि अचानक ठूलो आपतकालीन खर्च आइपर्यो भने के गर्ने?', a: 'त्यसका लागि ६ महिनाको खर्च बराबरको छुट्टै "आपतकालीन कोष" प्रयोग गर्नुपर्छ, दैनिक खर्च गर्ने खाताबाट चलाउनु हुँदैन।' },
        { q: 'के अनियमित कमाइ हुने फ्रिलान्सर वा व्यवसायीले पनि यो नियम अपनाउन सक्छन्?', a: 'सक्छन्। ग्राहकबाट जब-जब पैसा खातामा आउँछ, आउनासाथ त्यसको २०% रकम तुरुन्तै लगानी खाता वा मुद्दतीमा सारेर बाँकी पैसा मात्र चलाउनुहोस्।' }
      ],
      takeaways: [
        'दैनिक खुद्रा खर्च टिप्ने प्रणाली असफल हुन्छ किनकि मानवीय दिमागले धेरै झन्झट धान्न सक्दैन।',
        'आफ्नो आर्थिक सूत्र बदल्नुहोस्: आम्दानी - स्वचालित बचत = ढुक्कको खर्च।',
        'तलब आएकै दिन connectIPS मार्फत २०%+ रकम म्युचुअल फन्ड वा मुद्दतीमा अटो-डेबिट गर्नुहोस्।',
        'चिया खर्च होइन, घरभाडा र सवारी साधन जस्ता ठूला वित्तीय निर्णयहरू मिलाउनुहोस्।',
        'बाँकी रहेको पैसा विना कुनै अपराधबोध खर्च गर्नुहोस् - तपाईंको भविष्य सुरक्षित भइसकेको छ।'
      ]
    }
  },

  // ── L2. NOTION & SPREADSHEET MONEY SYSTEMS ───────────────────────
  'notion-spreadsheet-money-systems': {
    id: 'prod-notion-spreadsheets',
    slug: 'notion-spreadsheet-money-systems',
    categorySlug: 'productivity',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Digital Productivity Systems & Financial Dashboard Standards', np: 'डिजिटल वित्तीय ड्यासबोर्ड तथा स्प्रेडसिट कार्यविधि अनुसार समीक्षित' },
    prerequisites: { en: 'Basic familiarity with Google Sheets or Notion', np: 'गुगल सिट्स वा नोसनको सामान्य प्रयोग' },
    en: {
      title: 'Building a Low-Friction Notion & Spreadsheet Money System for Nepal',
      oneLineSummary: 'Design a clean 4-tab Google Sheet or Notion dashboard that consolidates your banks, NEPSE portfolio, and net worth in 10 minutes a month.',
      summaryPoints: [
        'A functional financial dashboard requires only 4 core tabs: Cash Flow, Portfolio Holdings, Debt Amortization, and Annual Net Worth.',
        'Avoid over-engineered templates with 50 complex formulas that break whenever you update an entry.',
        'Batch your updates: spend exactly 10 minutes on the 1st of each month logging high-level bank balances rather than daily receipts.',
        'Incorporate Nepal-specific asset classes: SSF/CIT retirement balances, gold (Tola), MeroShare equity values, and land holdings.',
        'A single visual view of rising net worth provides powerful psychological momentum to maintain high savings rates.'
      ],
      whatIsThis: 'A personal finance dashboard in Google Sheets or Notion is a consolidated, minimalist digital command center where an individual tracks cash flow, stock portfolios, bank fixed deposits, and total net worth in one unified place without sharing bank passwords with third-party apps.',
      whyItMatters: 'In Nepal, your wealth is scattered: bank account at Nabil, salary account at Global IME, demat at Broker 45, mutual fund SIP at NIBL Ace, SSF portal login, and family gold in a locker. Without a single dashboard, you have zero clarity on your true financial progress, leading to anxiety and fragmented decision-making.',
      howItWorks: [
        { step: 1, title: 'Tab 1: Monthly Cash Flow Snapshot', desc: 'Record 3 numbers on salary day: Gross Salary Inflow, Automated Savings Outflow, and Fixed Overhead Bills. No micro-categories needed.' },
        { step: 2, title: 'Tab 2: Liquid & Fixed Assets (MeroShare & Banks)', desc: 'List your bank savings balances, fixed deposit maturity dates, current NEPSE stock value (from MeroShare "My Holdings"), and mutual fund units.' },
        { step: 3, title: 'Tab 3: Liabilities & Debt Payoff Tracker', desc: 'Track your home loan, education loan, or credit card balances with remaining tenure months and current base rate interest.' },
        { step: 4, title: 'Tab 4: Net Worth Summary & Annual Growth', desc: 'The formula: Total Assets - Total Liabilities = Real Net Worth. Update once a month on the 1st to visualize your upward trajectory.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'The 4-Tab RisePaisa Minimalist Financial Spreadsheet Structure',
        headers: ['Tab Name', 'Core Purpose', 'Data Inputs Required', 'Update Frequency'],
        rows: [
          ['1. Cash Flow', 'Monitors monthly savings rate (%)', 'Take-home salary, fixed bills, automated SIP', 'Monthly on Salary Day (3 mins)'],
          ['2. Portfolio Tracker', 'Consolidates equity, mutual funds & FDs', 'MeroShare portfolio value, Bank FD balances', 'Monthly on the 1st (3 mins)'],
          ['3. Debt Tracker', 'Tracks outstanding principal & loan tenure', 'Bank loan statement balance, current interest', 'Quarterly when Base Rate changes'],
          ['4. Net Worth Audit', 'Measures true long-term wealth creation', 'Total Assets minus Total Liabilities', 'Once a month on the 1st (4 mins)']
        ]
      },
      nepalContext: 'Because Nepal lacks open-banking API integration (meaning third-party apps cannot legally auto-fetch your live bank balances via open APIs), automated Western financial trackers like Mint or Copilot are useless. A custom Google Sheet or Notion template updated manually for 10 minutes on salary day is the most secure, privacy-friendly, and reliable system for Nepali citizens.',
      practicalScenario: {
        persona: 'Shruti, 28, UI/UX product designer in Patan',
        income: 'NPR 85,000 / month salary & design retainers',
        scenarioText: 'Shruti had money in 3 different commercial banks, an eSewa wallet, an SSF retirement portal, and 2 brokerage accounts. She constantly felt broke despite earning well because she had no consolidated overview.',
        solutionText: 'Shruti set up the RisePaisa 4-tab Google Sheet. On the 1st of each month, she spends exactly 10 minutes updating her balances. She discovered her true net worth was already NPR 14.5 Lakh (bolstered by her growing SSF balance and mutual fund units). The clarity eliminated her financial anxiety completely.',
        metricHighlight: 'Consolidated 6 scattered financial accounts into a 10-minute monthly routine'
      },
      formula: {
        name: 'Spreadsheet Net Worth Automation Formula',
        equation: '\\text{Net Worth} = \\sum \\text{Assets (Cash + Bank + NEPSE + Real Estate + Gold)} - \\sum \\text{Liabilities (Loans + Cards)}',
        variables: [
          { symbol: '\\text{Assets}', name: 'Total Owned Property', desc: 'Liquid bank balances + market value of stocks + conservative land/gold value.' },
          { symbol: '\\text{Liabilities}', name: 'Total Owed Debts', desc: 'Outstanding principal on home loans, auto loans, and short-term credit.' }
        ],
        exampleCalculation: 'Bank Balance = NPR 2,50,000. NEPSE Stocks = NPR 6,00,000. SSF Balance = NPR 3,00,000. Gold (4 Tola) = NPR 5,50,000. Total Assets = NPR 17,00,000. Less Home Loan Balance = NPR 8,00,000. Real Net Worth = 17,00,000 - 8,00,000 = NPR 9,00,000.',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'Track Net Worth Growth'
      },
      commonMistakes: [
        { mistake: 'Creating a monstrous sheet with 25 tabs and 100 complex nested formulas.', correct: 'Keep it minimalist: 4 tabs and simple SUM formulas that never break.', explanation: 'Over-complicated spreadsheets create cognitive friction, causing you to abandon them within 2 months.' },
        { mistake: 'Giving third-party budgeting apps access to your bank SMS and passwords.', correct: 'Use offline private spreadsheets; never enter banking passwords into unofficial apps.', explanation: 'Third-party scrapers violate bank terms of service and expose your credentials to data leaks.' },
        { mistake: 'Checking stock and crypto portfolio values 10 times a day in your sheet.', correct: 'Update portfolio valuation strictly once a month on the 1st.', explanation: 'Daily micro-checking induces panic selling and emotional trading on NEPSE.' }
      ],
      definitions: [
        { term: 'Financial Dashboard', full: 'एकीकृत वित्तीय ड्यासबोर्ड', meaning: 'A consolidated digital visual overview of your personal financial accounts, assets, debts, and performance.' },
        { term: 'Batch Processing', full: 'एकमुष्ट मासिक अद्यावधिक', meaning: 'The productivity habit of performing all financial data entry in a single concentrated 10-minute session once a month.' },
        { term: 'Open-Banking API', full: 'खुला बैंकिङ प्राविधिक द्वार', meaning: 'Secure software interfaces allowing apps to fetch bank balances automatically, currently restricted in Nepal.' },
        { term: 'Net Worth Tracker', full: 'खुद सम्पत्ति मापन प्रणाली', meaning: 'A historical record showing the monthly progression of your total assets minus total debts over time.' }
      ],
      faqs: [
        { q: 'Is Google Sheets or Notion better for personal money tracking?', a: 'Google Sheets is superior for automated math, calculations, and net worth charts. Notion is superior if you like rich journaling, goal tracking, and linking financial receipts to notes. Both can be linked seamlessly.' },
        { q: 'How should I value ancestral real estate in my personal spreadsheet?', a: 'Value real estate conservatively at Government (Malpot) rate or 70% of distressed market value to avoid inflating your paper net worth with illiquid land.' },
        { q: 'Can I share the spreadsheet with my spouse?', a: 'Yes. Google Sheets allows real-time family sharing, enabling couples to manage joint household goals, debt payoff plans, and vacation budgets together.' }
      ],
      takeaways: [
        'A clean 4-tab spreadsheet consolidates all scattered Nepali accounts into one view.',
        'Spend exactly 10 minutes on the 1st of each month batch-updating your balances.',
        'Avoid over-engineered templates with complex formulas that break easily.',
        'Manual spreadsheet entry is 100% private and eliminates bank credential security risks.',
        'Tracking rising net worth monthly provides psychological motivation to keep investing.'
      ]
    },
    np: {
      title: 'नेपालमा नोसन (Notion) र स्प्रेडसिट वित्तीय प्रणाली: १० मिनेटमा सम्पत्ति ट्र्याक गर्ने तरिका',
      oneLineSummary: '४ वटा पाना (Tabs) भएको गुगल सिट वा नोसन ड्यासबोर्ड बनाएर बैंक, सेयर, ऋण र कुल सम्पत्तिको मासिक हिसाब राख्नुहोस्।',
      summaryPoints: [
        'प्रभावकारी वित्तीय ड्यासबोर्डका लागि जम्मा ४ वटा पाना (Tabs) चाहिन्छ: नगद प्रवाह, पोर्टफोलियो, ऋण, र कुल सम्पत्ति।',
        '५० वटा जटिल सूत्र भएका र चलाउन गाह्रो हुने विदेशी टेम्प्लेटहरूको पछि नलाग्नुहोस्।',
        'दैनिक हिसाब टिप्नुको साटो हरेक महिनाको १ गते ठ्याक्कै १० मिनेट समय दिएर एकमुष्ट ब्यालेन्स अद्यावधिक गर्नुहोस्।',
        'नेपाली सम्पत्तिहरू जोड्नुहोस्: मेरोसेयरको सेयर, बैंक मुद्दती, सामाजिक सुरक्षा कोष (SSF/CIT), सुन (तोला), र जग्गा।',
        'आफ्नो कुल खुद सम्पत्ति (Net Worth) निरन्तर बढेको देख्दा थप बचत र लगानी गर्ने आत्मविश्वास जाग्छ।'
      ],
      whatIsThis: 'स्प्रेडसिट वा नोसन (Notion) वित्तीय प्रणाली भनेको कुनै पनि तेस्रो पक्षीय एपलाई बैंकको पासवर्ड नदिई गुगल सिटमा आफ्ना सबै बैंक खाता, नेप्से सेयर, मुद्दती निक्षेप र ऋणको विवरण एउटै स्क्रिनमा राख्ने सरल र सुरक्षित व्यक्तिगत ड्यासबोर्ड हो।',
      whyItMatters: 'नेपालमा मानिसको सम्पत्ति छरिएर रहेको हुन्छ: नबिल बैंकमा एउटा खाता, ग्लोबल आइएमईमा तलब खाता, ब्रोकरमा डिम्याट, क्यापिटलमा म्युचुअल फन्ड, अनि सामाजिक सुरक्षा कोषमा पेन्सन। एउटै ड्यासबोर्ड नहुँदा आफूसँग वास्तविक रूपमा कति सम्पत्ति छ भन्ने थाहा हुँदैन र सधैँ आर्थिक तनाव भइरहन्छ।',
      howItWorks: [
        { step: 1, title: 'पाना १: मासिक नगद प्रवाह (Cash Flow)', desc: 'तलब आएको दिन ३ वटा अंक मात्र लेख्नुहोस्: हात परेको तलब, लगानीमा गएको रकम, र स्थिर घरभाडा-बिल खर्च।' },
        { step: 2, title: 'पाना २: लगानी पोर्टफोलियो (MeroShare र बैंक)', desc: 'बैंकको मौज्दात, मुद्दती निक्षेप, मेरोसेयरको "My Holdings" बाट आएको कुल सेयर मूल्य, र म्युचुअल फन्डको इकाइ संख्या टिप्नुहोस्।' },
        { step: 3, title: 'पाना ३: ऋण तथा दायित्व (Debt Tracker)', desc: 'घर कर्जा, सवारी कर्जा, वा व्यक्तिगत ऋणको बाँकी साँवा र हालको बैंक ब्याजदर दर्ता गर्नुहोस्।' },
        { step: 4, title: 'पाना ४: कुल खुद सम्पत्ति (Net Worth)', desc: 'सूत्र: कुल सम्पत्ति - कुल ऋण = वास्तविक खुद सम्पत्ति। महिनाको १ गते यो हिसाब हेर्दा आफ्नो प्रगति छर्लङ्ग देखिन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'risePaisa को ४-पाने न्यूनतम वित्तीय स्प्रेडसिट संरचना',
        headers: ['पानाको नाम (Tab)', 'मुख्य उद्देश्य', 'प्रविष्ट गर्नुपर्ने तथ्यांक', 'अद्यावधिक गर्ने समय'],
        rows: [
          ['१. नगद प्रवाह (Cash Flow)', 'मासिक बचत दर (%) मापन गर्ने', 'तलब, अनिवार्य घरभाडा, र काटिएको SIP', 'महिनाको सुरुमा तलब आउनासाथ (३ मिनेट)'],
          ['२. पोर्टफोलियो (Portfolio)', 'सेयर, मुद्दती र म्युचुअल फन्ड एकीकृत गर्ने', 'मेरोसेयरको कुल पोर्टफोलियो, बैंक मुद्दती', 'हरेक महिनाको १ गते (३ मिनेट)'],
          ['३. ऋण ट्र्याकर (Debt)', 'बाँकी साँवा र ऋण अवधि ट्र्याक गर्ने', 'बैंक स्टेटमेन्टको बाँकी ऋण, आधार दर', 'त्रैमासिक रूपमा आधार दर फेरिँदा'],
          ['४. खुद सम्पत्ति (Net Worth)', 'वास्तविक दीर्घकालीन पुँजी वृद्धि हेर्ने', 'कुल सम्पत्तिबाट कुल ऋण घटाउने सूत्र', 'महिनामा एकपटक १ गते (४ मिनेट)']
        ]
      },
      nepalContext: 'नेपालमा विदेशी मुलुकमा जस्तो ओपन-बैंकिङ (Open-Banking API) कानुन नभएकाले एपहरूले स्वतः बैंकको ब्यालेन्स तानेर देखाउन पाउँदैनन्। त्यसैले विदेशी एपहरू नेपालमा चल्दैनन्। गुगल सिट वा नोसनमा आफैंले महिनाको एकपटक १० मिनेट खर्च गरेर हिसाब राख्नु नै नेपाली नागरिकका लागि सबैभन्दा सुरक्षित, गोप्य र भरपर्दो उपाय हो।',
      practicalScenario: {
        persona: 'श्रुति, २८, पाटनकी युआई/युएक्स प्रडक्ट डिजाइनर',
        income: 'मासिक रु. ८५,००० तलब तथा फ्रिलान्सिङ',
        scenarioText: 'श्रुतिको पैसा ३ वटा फरक बैंक, इसेवा, सामाजिक सुरक्षा कोष र २ वटा ब्रोकर खातामा छरिएको थियो। राम्रो कमाइ भए पनि कता कति पैसा छ थाहा नहुँदा उनी सधैँ आत्तिन्थिन्।',
        solutionText: 'श्रुतिले risePaisa को ४-पाने गुगल सिट तयार पारिन्। हरेक महिनाको १ गते १० मिनेट समय दिएर सबै खाताको ब्यालेन्स अपडेट गरिन्। उनले थाहा पाइन् कि उनको कुल खुद सम्पत्ति त पहिले नै १४.५ लाख रुपैयाँ पुगिसकेको रहेछ (SSF र म्युचुअल फन्ड जोड्दा)। यो स्पष्टताले उनको मनको सबै डर हटाइदियो।',
        metricHighlight: '६ ठाउँमा छरिएका वित्तीय खातालाई मासिक १० मिनेटको प्रणालीमा बाँधिन्'
      },
      formula: {
        name: 'स्प्रेडसिट खुद सम्पत्ति (Net Worth) सूत्र',
        equation: '\\text{Net Worth} = \\sum \\text{Assets (Cash + Bank + NEPSE + Real Estate + Gold)} - \\sum \\text{Liabilities (Loans + Cards)}',
        variables: [
          { symbol: '\\text{Assets}', name: 'आफ्नो स्वामित्वमा रहेको कुल सम्पत्ति', desc: 'बैंक मौज्दात + सेयरको बजार मूल्य + सुन र जग्गाको सुरक्षित मूल्याङ्कन।' },
          { symbol: '\\text{Liabilities}', name: 'तिर्न बाँकी कुल ऋण', desc: 'घर कर्जा, सवारी कर्जा र व्यक्तिगत ऋणको बाँकी साँवा।' }
        ],
        exampleCalculation: 'बैंक मौज्दात = रु. २,५०,०००। नेप्से सेयर = रु. ६,००,०००। SSF मौज्दात = रु. ३,००,०००। सुन (४ तोला) = रु. ५,५०,०००। कुल सम्पत्ति = रु. १७,००,०००। बाँकी घर कर्जा = रु. ८,००,०००। वास्तविक खुद सम्पत्ति = १७,००,००० - ८,००,००० = रु. ९,००,०००।',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'सम्पत्ति वृद्धि ट्र्याक गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: '२५ वटा पाना र १०० वटा जटिल सूत्र राखेर सिटलाई चलाउनै नसक्ने बनाउनु।', correct: 'सिटलाई एकदमै सरल राख्नुहोस्: ४ वटा पाना र सामान्य जोड-घटाउ मात्र।', explanation: 'जटिल सिट बनाउँदा डाटा भर्न अल्छी लाग्छ र २ महिनामै प्रणाली छाडिन्छ।' },
        { mistake: 'अनाधिकृत मोबाइल एपहरूलाई आफ्नो बैंकको एसएमएस र पासवर्ड पढ्ने अनुमति दिनु।', correct: 'आफ्नै निजी गुगल सिट चलाउनुहोस्; बैंकको गोप्य विवरण कुनै पनि एपमा नहाल्नुहोस्।', explanation: 'तेस्रो पक्षीय एपहरूले डाटा चोरी गरेर बैंक खाता जोखिममा पार्न सक्छन्।' },
        { mistake: 'दिनमै १० पटक सेयर र क्रिप्टोको भाउ स्प्रेडसिटमा हेरेर अत्तालिनु।', correct: 'सिटमा पोर्टफोलियोको मूल्याङ्कन महिनाको १ गते मात्र एकपटक अपडेट गर्नुहोस्।', explanation: 'दैनिक मूल्य हेर्दा नेप्सेको उतारचढावबाट डराएर घाटामा सेयर बेच्ने गल्ती हुन सक्छ।' }
      ],
      definitions: [
        { term: 'वित्तीय ड्यासबोर्ड', full: 'Financial Dashboard', meaning: 'आफ्नो सम्पूर्ण नगद, लगानी, ऋण र सम्पत्तिलाई एउटै डिजिटल पानामा देखाउने एकीकृत प्रणाली।' },
        { term: 'ब्याच प्रोसेसिङ (Batch Update)', full: 'एकमुष्ट मासिक काम', meaning: 'दैनिक अल्झिनुको साटो महिनाको १ गते एकैपटक १० मिनेट निकालेर सबै हिसाब पूरा गर्ने बानी।' },
        { term: 'ओपन-बैंकिङ (Open-Banking)', full: 'स्वचालित बैंकिङ डाटा प्रणाली', meaning: 'बैंक खाताबाट एपमा सिधै ब्यालेन्स तान्ने प्रविधि, जुन नेपालमा हाल कानुनी रूपमा खुला गरिएको छैन।' },
        { term: 'खुद सम्पत्ति ट्र्याकर', full: 'Net Worth Tracker', meaning: 'सम्पत्तिबाट ऋण घटाएपछिको वास्तविक पुँजी महिनापिच्छे कसरी बढिरहेको छ देखाउने अभिलेख।' }
      ],
      faqs: [
        { q: 'पैसाको हिसाब राख्न गुगल सिट्स राम्रो कि नोसन (Notion)?', a: 'हिसाबकिताब, सूत्र र ग्राफका लागि गुगल सिट्स (Google Sheets) उत्कृष्ट छ। लक्ष्य लेख्न, योजना बनाउन र रसिदहरू सुरक्षित राख्न नोसन (Notion) राम्रो हुन्छ। दुवैलाई सँगै जोडेर पनि चलाउन सकिन्छ।' },
        { q: 'स्प्रेडसिटमा आफ्नो पैतृक जग्गाको भाउ कसरी राख्ने?', a: 'जग्गाको भाउ राख्दा बजारको उच्च मूल्य नराखी सरकारी मालपोत दर वा बजार भाउको ७०% मात्र सुरक्षित भाउ राख्नुहोस् ताकि कागजमा मात्र धनी नदेखियोस्।' },
        { q: 'के यो स्प्रेडसिट श्रीमान-श्रीमती मिलेर चलाउन मिल्छ?', a: 'मज्जाले मिल्छ। गुगल सिटमा पारिवारिक सेयरिङ गरेर दुवैले घरखर्च, ऋण चुक्ता योजना र भविष्यको लगानी सँगै मिलेर हेर्न सकिन्छ।' }
      ],
      takeaways: [
        'सरल ४-पाने स्प्रेडसिटले नेपालका सबै छरिएका खाताहरूलाई एउटै नियन्त्रण कक्षमा जोड्छ।',
        'हरेक महिनाको १ गते ठ्याक्कै १० मिनेट समय दिएर ब्यालेन्स अद्यावधिक गर्नुहोस्।',
        'धेरै जटिल सूत्र भएका सिट नबनाउनुहोस्; सरल प्रणाली नै सधैँ दिगो हुन्छ।',
        'गुगल सिटमा आफैं हिसाब राख्दा बैंकिङ डाटा पूर्ण रूपमा गोप्य र सुरक्षित रहन्छ।',
        'मासिक रूपमा बढ्दै गएको खुद सम्पत्ति देख्दा थप बचत र लगानी गर्ने ऊर्जा मिल्छ।'
      ]
    }
  },

  // ── L3. 30-MINUTE MONTHLY FINANCIAL CHECK-IN ─────────────────────
  '30-minute-monthly-financial-checkin': {
    id: 'prod-monthly-checkin',
    slug: '30-minute-monthly-financial-checkin',
    categorySlug: 'productivity',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Financial Health Routines & Behavioral Cashflow Systems', np: 'वित्तीय स्वास्थ्य दिनचर्या तथा व्यवहारपरक नगद प्रवाह मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'Basic bank accounts and active monthly income', np: 'बैंक खाता र मासिक नियमित आम्दानी' },
    en: {
      title: 'The 30-Minute Monthly Financial Check-In: Your Non-Negotiable Routine',
      oneLineSummary: 'Execute a structured 4-step monthly review on the 1st of each month to keep your money automated, aligned, and growing.',
      summaryPoints: [
        'Conducting a structured 30-minute "Money Date" once a month replaces daily financial anxiety with total operational control.',
        'Step 1 (5 mins): Reconcile all bank and digital wallet balances against salary inflows.',
        'Step 2 (10 mins): Verify that automated connectIPS SIP debits and loan EMI deductions cleared successfully.',
        'Step 3 (5 mins): Check emergency fund integrity - replenish any withdrawals made during the previous month.',
        'Step 4 (10 mins): Preview upcoming irregular expenses for the next 30-60 days (Dashain shopping, weddings, vehicle insurance).'
      ],
      whatIsThis: 'The 30-Minute Monthly Financial Check-In is a recurring, non-negotiable personal finance ritual scheduled on the 1st or 2nd of each month (right after salary day) where an individual or couple reviews bank balances, verifies automated investment execution, reconciles debt reductions, and plans upcoming irregular cash-flow needs.',
      whyItMatters: 'Most financial disasters in Nepal do not happen overnight; they happen through gradual neglect. A missed connectIPS mandate halts your SIP compounding; an unmonitored bank fee chips away at your savings; an unexpected cousin\'s wedding in Falgun forces you into expensive debt because you failed to plan 30 days ahead. Dedicating just 30 minutes a month prevents 100% of these avoidable crises.',
      howItWorks: [
        { step: 1, title: 'Schedule a Recurring Calendar Block', desc: 'Set a permanent Google Calendar or phone reminder for 8:00 PM on the 1st of every month: "Monthly Money Review - 30 Minutes."' },
        { step: 2, title: 'Run the 4-Step Operational Checklist', desc: 'Log into your accounts. Step 1: Check bank & wallet balances. Step 2: Confirm SIP and EMI transfers. Step 3: Verify emergency fund. Step 4: Preview upcoming month\'s festival/travel costs.' },
        { step: 3, title: 'Resolve Transaction Anomalies Immediately', desc: 'If an SIP installment failed due to an expired connectIPS mandate or a bank levied an incorrect SMS alert fee, address it immediately via your banking app.' },
        { step: 4, title: 'Celebrate Milestone Achievements', desc: 'Acknowledge progress: celebrate crossing your first NPR 1 Lakh in mutual funds or paying down your loan principal. Positive reinforcement makes financial discipline permanent.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'The 30-Minute Monthly Financial Check-In Agenda',
        headers: ['Time Slot', 'Check-In Phase', 'Key Action Items', 'Success Outcome'],
        rows: [
          ['00:00 - 05:00', 'Account Balance Audit', 'Log in to primary bank & digital wallets', 'Confirm salary credited & no unauthorized charges'],
          ['05:00 - 15:00', 'Automated Investment Verification', 'Verify connectIPS SIP & Loan EMI clearance', 'Confirm 20%+ savings safely locked in mutual funds'],
          ['15:00 - 20:00', 'Emergency Fund Health Check', 'Check 6-month liquid reserve status', 'Ensure safety net is 100% intact'],
          ['20:00 - 30:00', 'Next Month Expense Preview', 'Forecast festival gifts, insurance premiums, trips', 'Pre-allocate cash; prevent emergency borrowing']
        ]
      },
      nepalContext: 'In Nepal, financial planning is heavily communal. Couples often argue about money because one partner spends informally on extended family obligations without discussing it. Running this 30-minute monthly check-in together as a couple eliminates secrecy and aligns both partners behind shared goals - like buying an electric car, completing a house in Imadol, or funding children\'s education.',
      practicalScenario: {
        persona: 'Pradeep & Ritu, 33, married couple in Koteshwar',
        income: 'Combined income NPR 1,30,000 / month',
        scenarioText: 'Pradeep and Ritu frequently argued about money at month-end. Pradeep would discover Ritu had spent on her brother\'s college fees, while Ritu found Pradeep had bought an expensive phone on EMI. Neither knew where their combined salary went.',
        solutionText: 'They instituted a mandatory "Money Date" on the 1st of every month with tea and snacks. Over 30 minutes, they reviewed their joint Google Sheet, verified their automated NPR 25,000 SIPs, and planned the upcoming month\'s social expenses. Financial arguments vanished, and they saved NPR 3,00,000 in their joint investment portfolio within their first year.',
        metricHighlight: 'Eliminated money arguments and saved NPR 3 Lakh in 1 year'
      },
      formula: {
        name: 'Monthly Savings Execution Ratio Formula',
        equation: '\\text{Execution Ratio} = \\left( \\frac{\\text{Actual Savings Disbursed}}{\\text{Targeted Planned Savings}} \\right) \\times 100\\% \\geq 100\\%',
        variables: [
          { symbol: '\\text{Actual Savings}', name: 'Real Money Sent to Investments', desc: 'Total cash moved to SIPs, FDs, and principal prepayment this month.' },
          { symbol: '\\text{Planned Savings}', name: 'Budgeted Monthly Target', desc: 'E.g., 20% of net monthly income.' }
        ],
        exampleCalculation: 'Planned Target = NPR 20,000 (20% of NPR 1 Lakh salary). Actual automated transfers completed = NPR 20,000. Execution Ratio = (20,000 / 20,000) × 100% = 100%. If ratio drops below 100%, diagnose the leak during the check-in!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'Check Emergency Reserve'
      },
      commonMistakes: [
        { mistake: 'Skipping the check-in because "nothing changed this month."', correct: 'Never skip; the ritual reinforces psychological discipline and detects bank errors early.', explanation: 'Even quiet months require checking for unauthorized subscription renewals and SIP mandate health.' },
        { mistake: 'Turning the monthly check-in into a blame-session with your spouse.', correct: 'Focus on future solutions, shared dreams, and automated systems rather than past spending mistakes.', explanation: 'Criticism and shame cause partners to hide cash transactions, destroying financial trust.' },
        { mistake: 'Letting the meeting drag on for 2 hours until you feel exhausted.', correct: 'Enforce a strict 30-minute timer; resolve unresolved items in the next month\'s session.', explanation: 'Long, exhausting reviews breed dread, leading to abandonment within 3 months.' }
      ],
      definitions: [
        { term: 'Money Date', full: 'मासिक वित्तीय छलफल', meaning: 'A scheduled, positive monthly meeting where an individual or couple reviews their finances and sets goals.' },
        { term: 'Savings Execution Ratio', full: 'बचत कार्यान्वयन अनुपात', meaning: 'The percentage of your planned monthly savings target that was actually deposited into investments.' },
        { term: 'Expense Preview', full: 'आगामी खर्चको पूर्वअनुमान', meaning: 'The habit of identifying and budgeting for large non-monthly expenses expected in the next 30-60 days.' },
        { term: 'Lien Check', full: 'अटो-डेबिट रुजु', meaning: 'Verifying that automated payment mandates cleared without bouncing or incurring central bank penalties.' }
      ],
      faqs: [
        { q: 'What is the best time of the month to conduct the 30-minute check-in?', a: 'The 1st or 2nd of each month (within 48 hours of salary arrival) is ideal, when accounts are flush with cash and automated debits are processing.' },
        { q: 'Should I track every single restaurant meal during this check-in?', a: 'No! The check-in is macro-focused: check overall account balances, verify automated SIPs, and preview next month. Do not review individual micro-receipts.' },
        { q: 'What should we do if an automated SIP failed during the check-in?', a: 'Log into the merchant capital portal immediately, identify why the connectIPS mandate failed (e.g. insufficient funds on the debit date), and place a manual top-up order.' }
      ],
      takeaways: [
        'A non-negotiable 30-minute review on the 1st of each month eliminates daily money anxiety.',
        'Follow the 4-step checklist: balance audit, SIP verification, emergency fund check, and expense preview.',
        'Previewing upcoming weddings and festivals 30-60 days in advance prevents emergency borrowing.',
        'Couples who hold monthly money reviews eliminate financial conflict and build wealth 2x faster.',
        'Enforce a strict 30-minute timer to keep the check-in energetic, positive, and sustainable.'
      ]
    },
    np: {
      title: 'नेपालमा ३० मिनेटको मासिक वित्तीय समीक्षा: कहिल्यै छुटाउन नहुने महत्वपूर्ण दिनचर्या',
      oneLineSummary: 'हरेक महिनाको १ गते ठ्याक्कै ३० मिनेटको ४-चरणीय समीक्षा गर्नुहोस् र आफ्नो पैसा, लगानी र भविष्यलाई सधैँ सही बाटोमा राख्नुहोस्।',
      summaryPoints: [
        'महिनामा एकपटक ३० मिनेटको "वित्तीय समीक्षा" गर्दा दिनहुँ हुने आर्थिक चिन्ता र तनाव सधैँका लागि हट्छ।',
        'चरण १ (५ मिनेट): बैंक खाता र डिजिटल वालेटमा तलब आएको र कुनै गलत शुल्क नकाटिएको यकिन गर्नुहोस्।',
        'चरण २ (१० मिनेट): connectIPS मार्फत काटिनुपर्ने म्युचुअल फन्ड SIP र ऋणको किस्ता समयमै काटियो कि काटेन जाँच्नुहोस्।',
        'चरण ३ (५ मिनेट): आपतकालीन कोष सुरक्षित छ कि छैन हेर्नुहोस् - अघिल्लो महिना केही खर्च भएको भए पूर्ति गर्नुहोस्।',
        'चरण ४ (१० मिनेट): आगामी ३० देखि ६० दिनभित्र आउने चाडबाड, बिहे वा गाडी नवीकरण खर्चको पूर्वतयारी गर्नुहोस्।'
      ],
      whatIsThis: '३० मिनेटको मासिक वित्तीय समीक्षा (Monthly Financial Check-In) भनेको हरेक महिनाको १ वा २ गते (तलब आउनासाथ) व्यक्ति वा दम्पतीले बसेर बैंक मौज्दात, स्वचालित लगानीको अवस्था, ऋणको किस्ता र आगामी महिनाका ठूला खर्चहरूको योजना बनाउने एउटा अनुशासित र सकारात्मक बानी हो।',
      whyItMatters: 'नेपालमा आर्थिक संकट अचानक आइपर्दैन; यो बेवास्ताका कारण बिस्तारै सुरु हुन्छ। connectIPS को म्यान्डेट फेल भएर SIP रोकिएको पत्तो नहुनु; बैंकले नचाहिँदो एसएमएस शुल्क काटिरहनु; वा फागुनमा साथीको बिहे आउँदा पहिले नै योजना नबनाएर ऋण काढ्नुपर्ने अवस्था आउनु यसका उदाहरण हुन्। महिनाको ३० मिनेट मात्र समय दिँदा यस्ता सबै समस्या सुरुमै रोकिन्छन्।',
      howItWorks: [
        { step: 1, title: 'मोबाइलमा स्थायी रिमाइन्डर राख्नुहोस्', desc: 'हरेक महिनाको १ गते साँझ ८:०० बजेका लागि मोबाइल क्यालेन्डरमा रिमाइन्डर राख्नुहोस्: "मासिक वित्तीय समीक्षा - ३० मिनेट।"' },
        { step: 2, title: '४-चरणीय चेकलिस्ट पालना गर्नुहोस्', desc: 'एप खोल्नुहोस्। चरण १: बैंक मौज्दात हेर्ने। चरण २: SIP र किस्ता काटिएको रुजु गर्ने। चरण ३: आपतकालीन कोष जाँच्ने। चरण ४: आगामी महिनाको खर्च अनुमान गर्ने।' },
        { step: 3, title: 'समस्या देखिए तत्काल समाधान गर्नुहोस्', desc: 'यदि कुनै SIP किस्ता काटिएन वा बैंकले बढी शुल्क काटेको देखियो भने भोलिपल्टै बैंक वा क्यापिटलमा फोन गरेर मिलाउनुहोस्।' },
        { step: 4, title: 'सफलताको खुसीयाली मनाउनुहोस्', desc: 'आफ्नो प्रगतिको प्रशंसा गर्नुहोस्: म्युचुअल फन्डमा १ लाख पुगेको वा ऋण घटेको खुसीयालीमा चिया-खाजा खाँदै एक-अर्कालाई धन्यवाद दिनुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '३० मिनेटको मासिक वित्तीय समीक्षा कार्यतालिका (Agenda)',
        headers: ['समय सीमा', 'समीक्षाको चरण', 'गर्नुपर्ने मुख्य कामहरू', 'प्राप्त हुने नतिजा'],
        rows: [
          ['००:०० - ०५:००', 'बैंक मौज्दात रुजु', 'मुख्य बैंक र वालेटमा लगइन गर्ने', 'तलब आयो-आएन र गलत शुल्क काटिएन भनी यकिन'],
          ['०५:०० - १५:००', 'स्वचालित लगानी परीक्षण', 'connectIPS SIP र ऋणको EMI रुजु गर्ने', '२०%+ बचत सुरक्षित रूपमा लगानी भइसकेको पुष्टि'],
          ['१५:०० - २०:००', 'आपतकालीन कोष निरीक्षण', '६ महिनाको सुरक्षा कोषको अवस्था जाँच्ने', 'आपतकालीन सुरक्षा कवच १००% तयारी अवस्थामा'],
          ['२०:०० - ३०:००', 'आगामी खर्चको पूर्वतयारी', 'आउने महिनाको बिहे, चाडपर्व, बिमा शुल्क हेर्ने', 'अग्रिम बजेट छुट्याएर आपतकालीन ऋणबाट बच्ने']
        ]
      },
      nepalContext: 'नेपाली समाजमा पारिवारिक खर्च धेरै हुन्छ। दम्पतीहरू बीच प्रायः महिनाको अन्त्यमा पैसाकै विषयमा झगडा पर्ने गर्छ किनभने एकले अर्कालाई नभनी आफन्तलाई पैसा दिने वा विलासितामा खर्च गर्ने गर्छन्। महिनाको १ गते सँगै बसेर चिया खाँदै यो ३० मिनेटको समीक्षा गर्दा सबै कुरा पारदर्शी हुन्छ र झगडा हटेर घर बनाउने वा गाडी किन्ने साझा सपना पूरा गर्न सजिलो हुन्छ।',
      practicalScenario: {
        persona: 'प्रदीप र रितु, ३३, कोटेश्वरका विवाहित दम्पती',
        income: 'संयुक्त मासिक कमाइ रु. १,३०,०००',
        scenarioText: 'प्रदीप र रितुको महिना मरेपछि सधैँ पैसाकै विषयमा विवाद हुन्थ्यो। प्रदीपले रितुले भाइको कलेज फी तिरिदिएको थाहा पाउँथे भने रितुले प्रदीपले नयाँ मोबाइल किस्तामा किनेको देख्थिन्। संयुक्त कमाइ कहाँ सकियो कसैलाई थाहा हुन्नथ्यो।',
        solutionText: 'उनीहरूले महिनाको १ गते अनिवार्य "मनि डेट" (Money Date) सुरु गरे। ३० मिनेट बसेर संयुक्त सिट हेरे, महिनाको २५ हजार SIP मा गएको यकिन गरे, र आगामी महिनाका खर्च बाँडे। झगडा सधैँका लागि अन्त्य भयो र १ वर्षमै उनीहरूले संयुक्त रूपमा ३ लाख रुपैयाँ बचत गरे।',
        metricHighlight: 'आर्थिक विवाद सधैँका लागि हटाएर १ वर्षमा ३ लाख रुपैयाँ बचत'
      },
      formula: {
        name: 'मासिक बचत कार्यान्वयन अनुपात सूत्र',
        equation: '\\text{Execution Ratio} = \\left( \\frac{\\text{Actual Savings Disbursed}}{\\text{Targeted Planned Savings}} \\right) \\times 100\\% \\geq 100\\%',
        variables: [
          { symbol: '\\text{Actual Savings}', name: 'वास्तविक लगानी भएको रकम', desc: 'यो महिना SIP, मुद्दती र ऋणको साँवामा गएको कुल पैसा।' },
          { symbol: '\\text{Planned Savings}', name: 'योजना गरिएको मासिक बचत', desc: 'मासिक तलबको कम्तीमा २०% लक्ष्य।' }
        ],
        exampleCalculation: 'मासिक लक्ष्य = रु. २०,००० (१ लाख तलबको २०%)। वास्तविक रूपमा लगानी भएको रकम = रु. २०,०००। कार्यान्वयन अनुपात = (२०,००० / २०,०००) × १००% = १००%। यदि यो अनुपात १००% भन्दा कम भएमा बैठकमा कारण पत्ता लगाउनुहोस्!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'आपतकालीन कोष जाँच्नुहोस्'
      },
      commonMistakes: [
        { mistake: '"यो महिना केही नयाँ भएकै छैन" भन्दै मासिक समीक्षा छाडिदिनु।', correct: 'कहिले पनि नछाड्नुहोस्; यसले अनुशासन कायम राख्छ र बैंकका गल्ती तुरुन्तै पत्ता लगाउँछ।', explanation: 'शान्त महिनामा पनि नचाहिँदो अटो-रिन्युवल र प्रणालीगत कमजोरी जाँच्नु आवश्यक हुन्छ।' },
        { mistake: 'मासिक समीक्षालाई श्रीमान वा श्रीमतीसँग झगडा गर्ने बहाना बनाउनु।', correct: 'विगतका गल्तीमा गाली गर्नुको साटो भविष्यको समाधान र साझा सपनामा ध्यान दिनुहोस्।', explanation: 'दोषारोपण गर्दा साझेदारले खर्च लुकाउन थाल्छ र वित्तीय विश्वास पूर्ण रूपमा टुट्छ।' },
        { mistake: 'बैठकलाई २ घण्टा लम्ब्याएर दिक्क लाग्दो बनाउनु।', correct: 'ठ्याक्कै ३० मिनेटको घडी राख्नुहोस्; बाँकी रहेका कुरा अर्को महिनाको बैठकमा सार्नुहोस्।', explanation: 'लामो र पट्यारलाग्दो बैठकले दिक्दारी बढाउँछ र मानिसले २-३ महिनामै बानी छाडिदिन्छन्।' }
      ],
      definitions: [
        { term: 'मनि डेट (Money Date)', full: 'मासिक वित्तीय छलफल', meaning: 'दम्पती वा व्यक्तिले महिनामा एकपटक सकारात्मक वातावरणमा बसेर पैसाको अवस्था जाँच्ने निश्चित समय।' },
        { term: 'बचत कार्यान्वयन अनुपात', full: 'Savings Execution Ratio', meaning: 'योजना गरिएको मासिक बचत कति प्रतिशत वास्तविक लगानीमा परिणत भयो भनी देखाउने सूचक।' },
        { term: 'खर्चको पूर्वअनुमान (Expense Preview)', full: 'आगामी खर्च प्रक्षेपण', meaning: 'आगामी ३० देखि ६० दिनभित्र आउन सक्ने ठूला गैर-मासिक खर्चहरूको पहिचान गरी अग्रिम व्यवस्था गर्ने बानी।' },
        { term: 'अटो-डेबिट रुजु', full: 'Lien Check', meaning: 'बैंक वा connectIPS मार्फत काटिनुपर्ने किस्ता विना कुनै अवरोध काटियो कि काटेन भनी जाँच्ने काम।' }
      ],
      faqs: [
        { q: 'महिनाको कुन समयमा यो ३० मिनेटको समीक्षा गर्नु सबैभन्दा राम्रो हुन्छ?', a: 'हरेक महिनाको १ वा २ गते (तलब खातामा जम्मा भएको २४ देखि ४८ घण्टाभित्र) गर्नु सबैभन्दा उत्तम हुन्छ जब खातामा पैसा हुन्छ र अटो-डेबिटहरू चल्दै हुन्छन्।' },
        { q: 'के यो समीक्षामा दिनभरि खाएको चिया-खाजाको हिसाब पनि हेर्नुपर्छ?', a: 'पर्दैन! यो समीक्षा ठूला कुरामा केन्द्रित हुन्छ: कुल मौज्दात हेर्ने, SIP काटिएको यकिन गर्ने र आगामी महिनाको योजना बनाउने। खुद्रा बिल हेर्ने काम यसमा गरिँदैन।' },
        { q: 'यदि समीक्षा गर्दा कुनै महिना SIP काटिएको देखिएन भने के गर्ने?', a: 'तुरुन्त क्यापिटलको अनलाइन पोर्टलमा लगइन गर्नुहोस्, connectIPS म्यान्डेट किन फेल भयो हेर्नुहोस् (जस्तै खातामा पैसा नपुगेर), र म्यानुअल रूपमा त्यो महिनाको पैसा तुरुन्तै ट्रान्सफर गर्नुहोस्।' }
      ],
      takeaways: [
        'हरेक महिनाको १ गते ३० मिनेटको समीक्षा गर्दा दिनहुँ हुने आर्थिक चिन्ता सधैँका लागि हट्छ।',
        '४-चरणीय चेकलिस्ट पालना गर्नुहोस्: मौज्दात रुजु, SIP परीक्षण, सुरक्षा कोष, र आगामी खर्च।',
        'आगामी चाडबाड र बिहे खर्च ३०-६० दिन अगावै अनुमान गर्दा आपतकालीन ऋण लिनु पर्दैन।',
        'सँगै बसेर पैसाको समीक्षा गर्ने दम्पतीहरूमा आर्थिक विवाद हुँदैन र उनीहरू छिटो धनी बन्छन्।',
        'बैठकलाई ऊर्जावान र दिगो बनाउन ठ्याक्कै ३० मिनेटको समयसीमा कडाइका साथ पालना गर्नुहोस्।'
      ]
    }
  },

  // ── L4. ORGANIZING TAX RECEIPTS & BANKING DOCUMENTS ──────────────
  'organizing-tax-receipts-banking-documents': {
    id: 'prod-organizing-tax-docs',
    slug: 'organizing-tax-receipts-banking-documents',
    categorySlug: 'productivity',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against IRD Document Retention Directives & Land Revenue Office Legal Procedures', np: 'आन्तरिक राजस्व विभाग कागजात अभिलेख निर्देशिका तथा मालपोत कार्यविधि अनुसार समीक्षित' },
    prerequisites: { en: 'Possession of personal ID, bank, and property papers', np: 'व्यक्तिगत परिचयपत्र, बैंक र घरजग्गा कागजातको सामान्य ज्ञान' },
    en: {
      title: 'Organizing Tax Receipts & Banking Documents in Nepal: The 4-Folder System',
      oneLineSummary: 'Build an ironclad physical and encrypted cloud filing system for your Lalpurja, PAN receipts, insurance policies, and loan contracts.',
      summaryPoints: [
        'Nepali bureaucracy requires original physical paper documents alongside digital copies for all major property, tax, and bank transactions.',
        'Adopt the 4-Folder System: (1) Identity & Tax, (2) Property & Collateral, (3) Banking & Investments, and (4) Insurance & Medical.',
        'Municipal land tax receipts (तिरो तिरेको रसिद) must be preserved continuously; losing them creates immense hurdles during property sales and bank mortgages.',
        'Maintain an encrypted cloud backup (Google Drive / OneDrive with 2FA) containing PDF scans of all vital records accessible anywhere.',
        'Target under 3 minutes of retrieval latency: you should be able to produce any financial document instantly when requested by a bank or ward office.'
      ],
      whatIsThis: 'Personal Financial Document Organization is the structured management of all legal, banking, property, and tax paperwork generated throughout your life. It combines a fireproof physical filing box for original deeds with an organized, encrypted cloud repository for digital instant retrieval.',
      whyItMatters: 'In Nepal, losing a physical Land Ownership Certificate (Lalpurja) or an un-registered municipal building permit (Nirman Sampanna) can take 6 months of grueling bureaucracy, public newspaper notices, and tens of thousands of rupees in administrative friction to replace. When applying for a visa, home loan, or tax clearance, having every receipt cataloged saves weeks of anxiety.',
      howItWorks: [
        { step: 1, title: 'Assemble a Physical 4-Folder File Box', desc: 'Purchase a multi-pocket expanding accordion file or 4 distinct colored plastic binders: Blue for Identity/Tax, Green for Property, Red for Banking/Loans, and Yellow for Insurance.' },
        { step: 2, title: 'Folder 1: Identity & Tax Dossier', desc: 'Store original citizenship cards, passport, driver\'s license, marriage certificate, personal/business PAN cards, annual tax clearance certificates, and IRD login credentials.' },
        { step: 3, title: 'Folder 2: Property & Real Estate Collateral', desc: 'Safeguard original Lalpurja (लालपुर्जा), ward-certified Char-killa, survey trace map (ब्लुप्रिन्ट), municipal building approval and completion certificates, and trailing 5 years of local land tax receipts (तिरो रसिद).' },
        { step: 4, title: 'Folder 3 & 4: Banking, Investments & Insurance', desc: 'File bank account sanction letters, chequebooks, connectIPS user details, Demat/MeroShare CRN numbers, life insurance policy bonds, and health insurance claim cards.' },
        { step: 5, title: 'Create the Encrypted Cloud Mirror', desc: 'Scan every single document using your smartphone. Upload to an encrypted Google Drive folder protected by 2FA, sharing emergency access with your spouse or trusted legal nominee.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'The RisePaisa 4-Folder Financial Archiving Architecture',
        headers: ['Folder / Category', 'Physical Color', 'Crucial Documents to Store', 'Legal Retention Mandate'],
        rows: [
          ['1. Identity & Tax', 'Blue Folder', 'Citizenship, PAN card, Tax Clearance, IRD logins', 'Lifetime / Permanent'],
          ['2. Property & Collateral', 'Green Folder', 'Lalpurja, Char-killa, Trace Map, Nirman Sampanna, Tiro receipts', 'Permanent (Never discard land tax receipts)'],
          ['3. Banking & Loans', 'Red Folder', 'Loan sanction letters, Mortgages, Chequebooks, CRN forms', 'Duration of loan + 6 years after closure'],
          ['4. Insurance & Medical', 'Yellow Folder', 'Policy contracts, Premium receipts, Hospital discharge summaries', 'Active policy term + 3 years post-claim'],
          ['Encrypted Cloud Mirror', 'Google Drive / 2FA', 'High-res PDF scans of Folders 1-4 organized by year', 'Lifetime digital redundancy']
        ]
      },
      nepalContext: 'Nepal\'s government offices (Malpot, Inland Revenue, Municipal Wards) are transitioning to digital databases, but in legal disputes and bank loan sanctions, the original physical paper document remains supreme. Local wards strictly require showing original municipal tax receipts for the current fiscal year before issuing property valuation or citizenship recommendation letters.',
      practicalScenario: {
        persona: 'Mohan, 52, retired civil engineer in Dharan',
        income: 'Pensions & rental income NPR 75,000 / month',
        scenarioText: 'Mohan agreed to sell a commercial plot in Itahari. The buyer\'s bank demanded the last 3 years of municipal land tax receipts (Tiro tireko rasid) and the original trace map. Mohan had stuffed all receipts randomly inside an old steel trunk and could not find them.',
        solutionText: 'Mohan spent 3 exhausting weeks visiting ward offices and land revenue counters paying penalty fees to regenerate duplicate records, nearly causing the buyer to cancel the deal. Afterward, he adopted the 4-Folder System: every land receipt, PAN certificate, and insurance bond was filed in labeled folders and scanned to cloud storage. Now, any document can be retrieved in under 2 minutes.',
        metricHighlight: 'Eliminated weeks of bureaucratic friction with a 2-minute document retrieval system'
      },
      formula: {
        name: 'Document Retrieval Latency Formula',
        equation: '\\text{Retrieval Latency} = \\text{Time Elapsed from Search Request to Physical/Digital Document in Hand} \\leq 3.0 \\text{ Minutes}',
        variables: [
          { symbol: '\\text{Retrieval Latency}', name: 'Search Efficiency Metric', desc: 'Gold standard: Any financial paper located within 3 minutes.' }
        ],
        exampleCalculation: 'Bank requests your last year Tax Clearance Certificate. With the 4-Folder Cloud System: Open phone Drive app -> Search "Tax Clearance 2080-81" -> Download PDF -> Send via email. Elapsed time = 45 seconds. Compliant and stress-free!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'Review Document System'
      },
      commonMistakes: [
        { mistake: 'Discarding annual municipal land tax receipts (Tiro rasid) after the year ends.', correct: 'Never discard land tax receipts; staple them chronologically inside your Green Property folder.', explanation: 'Malpot and banks require historic tax receipts to verify continuous ownership and clear municipal liens.' },
        { mistake: 'Storing all your original documents in a single unsecured cardboard box vulnerable to moisture or fire.', correct: 'Use a fire-resistant, water-resistant lockbox or high-quality plastic expanding accordion file.', explanation: 'Water damage or termite infestation on land title deeds causes enormous bureaucratic headaches in Nepal.' },
        { mistake: 'Keeping digital scans on a phone without cloud backup.', correct: 'Sync scans to an encrypted cloud folder (Google Drive / OneDrive) protected by Two-Factor Authentication.', explanation: 'If you lose or damage your phone, your local scans are lost with it.' }
      ],
      definitions: [
        { term: 'Lalpurja', full: 'जग्गाधनी प्रमाणपुर्जा', meaning: 'The official land ownership title deed certificate issued by the Land Revenue Office (Malpot) in Nepal.' },
        { term: 'Tiro Rasid', full: 'मालपोत तिरो तिरेको रसिद', meaning: 'The municipal tax receipt proving that annual property and land taxes have been fully settled with the local government.' },
        { term: 'Char-Killa', full: 'चारकिल्ला प्रमाणित पत्र', meaning: 'The official ward document establishing the exact geographical boundaries and adjacent properties of a land plot.' },
        { term: 'Nirman Sampanna', full: 'भवन निर्माण सम्पन्न प्रमाणपत्र', meaning: 'The municipal building completion certificate verifying that a house was constructed adhering to local building codes.' }
      ],
      faqs: [
        { q: 'How long must I keep tax-related documents in Nepal?', a: 'Under the Nepal Income Tax Act 2058, taxpayers and registered businesses must legally retain all books of accounts, invoices, TDS vouchers, and tax clearance certificates for a minimum of 5 years from the end of the fiscal year.' },
        { q: 'What should I do if my original Lalpurja is lost or damaged in Nepal?', a: 'You must: (1) Publish a 35-day notice in a national daily newspaper, (2) Obtain a police report, (3) Secure a ward recommendation, and (4) Apply to the District Land Revenue Office (Malpot) for a duplicate certificate (प्रतिलिपि पुर्जा).' },
        { q: 'Can I show digital scans of documents on my phone at government offices in Nepal?', a: 'For preliminary inquiries and bank applications, digital scans are widely accepted. However, for final property registration (Rokka), passport renewal, and court transactions, physical original documents are mandatory.' }
      ],
      takeaways: [
        'Nepali bureaucracy requires original paper documents alongside instant digital backups.',
        'Organize your financial life into 4 folders: Identity/Tax, Property, Banking, and Insurance.',
        'Never throw away municipal land tax receipts (तिरो रसिद); keep them permanently.',
        'Maintain a 2FA-secured cloud mirror on Google Drive for instant mobile document retrieval.',
        'Aim for a document retrieval latency of under 3 minutes for any financial record.'
      ]
    },
    np: {
      title: 'नेपालमा कर रसिद र बैंकिङ कागजात व्यवस्थापन: ४-फोल्डर (4-Folder) सुरक्षित प्रणाली',
      oneLineSummary: 'लालपुर्जा, प्यान रसिद, बिमा पोलिसी, र ऋण सम्झौतालाई आगलागीबाट सुरक्षित र मोबाइलबाट ३ मिनेटमै भेटिने बनाउने तरिका।',
      summaryPoints: [
        'नेपाली सरकारी कार्यालयहरूमा जुनसुकै ठूलो काम गर्दा डिजिटल कपीसँगै सक्कली कागजात देखाउनै पर्ने बाध्यता छ।',
        '४-फोल्डर प्रणाली अपनाउनुहोस्: (१) परिचय तथा कर, (२) घरजग्गा तथा धितो, (३) बैंकिङ तथा लगानी, र (४) बिमा तथा स्वास्थ्य।',
        'स्थानीय वडामा तिरो तिरेको रसिद कहिल्यै नफाल्नुहोस्; जग्गा बेच्दा वा बैंकमा धितो राख्दा पुरानो तिरो रसिद अनिवार्य चाहिन्छ।',
        'सबै कागजातहरूलाई स्क्यान गरी टु-फ्याक्टर (2FA) पासवर्ड राखिएको गुगल ड्राइभ वा क्लाउडमा सुरक्षित राख्नुहोस्।',
        '३ मिनेटको मापदण्ड: बैंक वा वडा कार्यालयले माग्दा जुनसुकै कागजात ३ मिनेटभित्र हातमा निकाल्न सक्ने हुनुपर्छ।'
      ],
      whatIsThis: 'व्यक्तिगत वित्तीय कागजात व्यवस्थापन भनेको आफ्नो जीवनभर आर्जन गरेका कानुनी, बैंकिङ, कर, र घरजग्गा सम्बन्धी सम्पूर्ण कागजातहरूलाई सुरक्षित रूपमा सुरक्षित राख्ने विधि हो। यसमा सक्कली कागजातलाई सुरक्षित प्लास्टिक फोल्डरमा र डिजिटल कपीलाई सुरक्षित क्लाउडमा राख्ने काम हुन्छ।',
      whyItMatters: 'नेपालमा जग्गाको लालपुर्जा वा घरको निर्माण सम्पन्न प्रमाणपत्र हरायो भने राष्ट्रिय पत्रिकामा ३५ दिने सूचना निकाल्नुपर्छ, मालपोत र वडा धाउनुपर्छ र महिनौँको समय र हजारौँ रुपैयाँ बर्बाद हुन्छ। भिसा आवेदन गर्दा, बैंकबाट ऋण लिँदा वा कर चुक्ता लिँदा सबै कागजात मिलाएर राखेको भए केही मिनेटमै काम बन्छ।',
      howItWorks: [
        { step: 1, title: '४ वटा फरक रङका फोल्डर तयार गर्नुहोस्', desc: 'बजारबाट ४ वटा प्लास्टिक फोल्डर किन्नुहोस्: नीलो (परिचय/कर), हरियो (घरजग्गा), रातो (बैंकिङ/ऋण), र पहेंलो (बिमा/उपचार)।' },
        { step: 2, title: 'फोल्डर १: परिचय तथा कर कागजात (नीलो)', desc: 'सक्कली नागरिकता, राहदानी, सवारी चालक अनुमतिपत्र, विवाह दर्ता, व्यक्तिगत प्यान कार्ड, कर चुक्ता प्रमाणपत्र र कर कार्यालयको लगइन पासवर्ड राख्नुहोस्।' },
        { step: 3, title: 'फोल्डर २: घरजग्गा तथा धितो (हरियो)', desc: 'सक्कली लालपुर्जा, वडाको चारकिल्ला, नापीको ब्लुप्रिन्ट/ट्रेस, घरको नक्सा पास र निर्माण सम्पन्न प्रमाणपत्र, र ५ वर्षयताका सबै मालपोत तिरो रसिदहरू राख्नुहोस्।' },
        { step: 4, title: 'फोल्डर ३ र ४: बैंकिङ र बिमा (रातो र पहेंलो)', desc: 'बैंकको ऋण सम्झौता पत्र, चेकबुक, मेरोसेयर CRN फारम, जीवन बिमा पोलिसी बन्ड र स्वास्थ्य बिमा दाबी कार्डहरू सुरक्षित राख्नुहोस्।' },
        { step: 5, title: 'मोबाइलबाट स्क्यान गरी गुगल ड्राइभमा सुरक्षित राख्नुहोस्', desc: 'सबै कागजातलाई क्यामस्क्यानरबाट स्क्यान गरी वर्ष अनुसार फोल्डर बनाएर २-फ्याक्टर सुरक्षा भएको गुगल ड्राइभमा अपलोड गर्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'risePaisa को ४-फोल्डर वित्तीय अभिलेख संरचना',
        headers: ['फोल्डरको शीर्षक', 'सिफारिस गरिएको रङ', 'राख्नुपर्ने मुख्य कागजातहरू', 'कानुनी रूपमा सुरक्षित राख्नुपर्ने समय'],
        rows: [
          ['१. परिचय तथा कर', 'नीलो फोल्डर (Blue)', 'नागरिकता, प्यान, कर चुक्ता, जन्मदर्ता', 'आजीवन / स्थायी रूपमा'],
          ['२. घरजग्गा तथा धितो', 'हरियो फोल्डर (Green)', 'लालपुर्जा, चारकिल्ला, ट्रेस, निर्माण सम्पन्न, तिरो रसिद', 'स्थायी (तिरो रसिद कहिल्यै नफाल्ने)'],
          ['३. बैंकिङ तथा ऋण', 'रातो फोल्डर (Red)', 'कर्जा सम्झौता पत्र, धितो पत्र, चेकबुक, CRN फारम', 'ऋण चुक्ता भएको ६ वर्ष पछिसम्म'],
          ['४. बिमा तथा स्वास्थ्य', 'पहेंलो फोल्डर (Yellow)', 'बिमा पोलिसी बन्ड, प्रिमियम रसिद, अस्पताल डिस्चार्ज समरी', 'पोलिसी अवधिभर + दाबी भुक्तानी पछिसम्म'],
          ['सुरक्षित क्लाउड ब्याकअप', 'गुगल ड्राइभ (2FA)', 'माथिका सबै कागजातहरूको उच्च गुणस्तरको PDF स्क्यान', 'आजीवन डिजिटल ब्याकअप']
        ]
      },
      nepalContext: 'नेपालका सरकारी कार्यालयहरू (मालपोत, आन्तरिक राजस्व, स्थानीय वडा) विस्तारै डिजिटल प्रणालीमा जाँदैछन्, तर कानुनी विवाद, जग्गा किनबेच वा बैंक धितोमा अझै पनि सक्कली कागजी प्रमाण नै सर्वोपरि मानिन्छ। स्थानीय तहहरूले घरजग्गाको मूल्याङ्कन वा सिफारिस पत्र दिनुअघि चालू आर्थिक वर्षको सक्कली तिरो तिरेको रसिद हेर्नैपर्ने कडा नियम लागू गरेका छन्।',
      practicalScenario: {
        persona: 'मोहन, ५२, धरानका अवकाशप्राप्त इन्जिनियर',
        income: 'पेन्सन तथा घरभाडा मासिक रु. ७५,०००',
        scenarioText: 'मोहनले इटहरीको एउटा घडेरी बेच्ने बैना गरे। खरिदकर्ताको बैंकले पछिल्लो ३ वर्षको वडाको तिरो रसिद र नापीको ट्रेस नक्सा माग्यो। मोहनले सबै रसिद पुरानो टिनको बाकसमा जथाभावी राखेकाले भेट्टाउनै सकेनन्।',
        solutionText: 'मोहनले ३ हप्तासम्म वडा र मालपोत धाएर जरिवाना तिरी प्रतिलिपि रसिद निकाले जसले गर्दा जग्गा बिक्री नै रद्द हुन लागेको थियो। त्यसपछि उनले ४-फोल्डर प्रणाली अपनाए: हरेक जग्गाको रसिद, प्यान प्रमाणपत्र र बिमा बन्ड छुट्टाछुट्टै फोल्डरमा राखेर मोबाइलमा स्क्यान गरे। अब जुनसुकै कागजात २ मिनेटभित्र निकाल्न सकिन्छ।',
        metricHighlight: 'कागजात व्यवस्थापन गरेर महिनौँको प्रशासनिक झन्झटलाई २ मिनेटमा झारे'
      },
      formula: {
        name: 'कागजात खोजी समय (Retrieval Latency) सूत्र',
        equation: '\\text{Retrieval Latency} = \\text{कागजात खोज्न थालेदेखि हातमा निकाल्न लागेको समय} \\leq ३.० \\text{ मिनेट}',
        variables: [
          { symbol: '\\text{Retrieval Latency}', name: 'खोज कार्यक्षमता', desc: 'उत्कृष्ट मापदण्ड: जुनसुकै कागजात ३ मिनेटभित्र फेला पर्नुपर्छ।' }
        ],
        exampleCalculation: 'बैंकले पछिल्लो वर्षको कर चुक्ता प्रमाणपत्र माग्यो। ४-फोल्डर क्लाउड प्रणालीबाट: मोबाइलमा ड्राइभ खोलेर "Tax Clearance" सर्च गरियो -> PDF डाउनलोड -> बैंकलाई इमेल। जम्मा समय = ४५ सेकेन्ड। विना कुनै तनाव काम सम्पन्न!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'कागजात चेकलिस्ट हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'आर्थिक वर्ष सकिएपछि वडामा तिरो तिरेको पुरानो रसिद रद्दीको टोकरीमा फाल्नु।', correct: 'तिरो रसिद कहिल्यै नफाल्नुहोस्; हरियो घरजग्गा फोल्डरमा मिति अनुसार सुरक्षित नत्थी गर्नुहोस्।', explanation: 'मालपोत कार्यालय र बैंकले विगत वर्षहरूमा कुनै कर बक्यौता नरहेको यकिन गर्न पुराना रसिद माग्छन्।' },
        { mistake: 'सबै सक्कली कागजात एउटै पुरानो कार्टुन वा ओसिलो ठाउँमा राख्नु।', correct: 'पानी र आगोबाट सुरक्षित रहने राम्रो प्लास्टिक फाइल वा लकरमा कागजात राख्नुहोस्।', explanation: 'ओस वा किराले लालपुर्जा खाएमा नेपालका मालपोत कार्यालयबाट नयाँ पुर्जा लिन महिनौँ लाग्छ।' },
        { mistake: 'कागजातको फोटो खिचेर मोबाइलको ग्यालरीमा मात्र राख्नु र क्लाउड ब्याकअप नहुनु।', correct: 'टु-फ्याक्टर सेक्युरिटी भएको गुगल ड्राइभ वा वानड्राइभमा अनिवार्य सिंक गर्नुहोस्।', explanation: 'मोबाइल हराएमा वा बिग्रिएमा ग्यालरीमा भएका सबै कागजातका फोटोहरू सधैँका लागि नष्ट हुन्छन्।' }
      ],
      definitions: [
        { term: 'लालपुर्जा', full: 'जग्गाधनी दर्ता प्रमाणपुर्जा', meaning: 'मालपोत कार्यालयले जग्गाको आधिकारिक कानुनी स्वामित्व प्रमाणित गर्न जारी गरेको मुख्य प्रमाणपत्र।' },
        { term: 'तिरो रसिद', full: 'मालपोत कर बुझाएको रसिद', meaning: 'स्थानीय वडा वा पालिकालाई सम्पत्ति तथा भूमिकर पूर्ण रूपमा बुझाइसकेको आधिकारिक प्रमाण।' },
        { term: 'चारकिल्ला (Char-Killa)', full: 'सिमाना प्रमाणित पत्र', meaning: 'जग्गाको पूर्व, पश्चिम, उत्तर, दक्षिणमा कस-कसको जग्गा वा बाटो छ भनी वडाले प्रमाणित गरिदिएको पत्र।' },
        { term: 'निर्माण सम्पन्न (Nirman Sampanna)', full: 'भवन निर्माण सम्पन्न प्रमाणपत्र', meaning: 'घर मापदण्ड अनुसार सम्पन्न भएको प्रमाणित गर्न स्थानीय नगरपालिका वा वडाले जारी गर्ने प्रमाणपत्र।' }
      ],
      faqs: [
        { q: 'नेपालमा कर सम्बन्धी कागजातहरू कति वर्षसम्म सुरक्षित राख्नुपर्छ?', a: 'आयकर ऐन २०५८ अनुसार दर्ता भएका व्यवसाय र करदाताहरूले सम्पूर्ण लेखा खाता, बिल, भौचर र कर चुक्ता प्रमाणपत्र कम्तीमा ५ वर्षसम्म सुरक्षित राख्नुपर्ने कानुनी व्यवस्था छ।' },
        { q: 'यदि सक्कली लालपुर्जा हरायो वा च्यातियो भने के गर्ने?', a: '(१) राष्ट्रिय पत्रिकामा ३५ दिने सूचना छाप्ने, (२) प्रहरी प्रतिवेदन लिने, (३) वडा कार्यालयको सिफारिस लिने, र (४) मालपोत कार्यालयमा निवेदन दिएर प्रतिलिपि पुर्जा निकाल्ने।' },
        { q: 'के सरकारी कार्यालयमा मोबाइलमा भएको कागजातको फोटो देखाउँदा काम बन्छ?', a: 'प्रारम्भिक सोधपुछ वा बैंक आवेदनका लागि मोबाइलको स्क्यान कपी चल्छ, तर मालपोतमा रोक्का गर्दा, राहदानी बनाउँदा वा अदालतमा भने सक्कली कागजात नै अनिवार्य चाहिन्छ।' }
      ],
      takeaways: [
        'नेपालमा डिजिटल कपीसँगै सक्कली कागजातको उत्तिकै ठूलो कानुनी महत्व हुन्छ।',
        '४ वटा फोल्डर बनाउनुहोस्: परिचय/कर, घरजग्गा, बैंकिङ, र बिमा कागजात।',
        'स्थानीय तहमा तिरो तिरेको रसिद स्थायी सम्पत्ति जस्तै हो, यसलाई कहिल्यै नफाल्नुहोस्।',
        'गुगल ड्राइभमा २-फ्याक्टर सुरक्षा राखेर सबै कागजातको डिजिटल ब्याकअप तयार गर्नुहोस्।',
        'कुनै पनि वित्तीय कागजात ३ मिनेटभित्रै हातमा निकाल्न सक्ने व्यवस्था मिलाउनुहोस्।'
      ]
    }
  },

  // ── L5. PREVENTING LIFESTYLE INFLATION IN NEPAL ───────────────────
  'preventing-lifestyle-inflation-nepal': {
    id: 'prod-lifestyle-inflation',
    slug: 'preventing-lifestyle-inflation-nepal',
    categorySlug: 'productivity',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Behavioral Economics & Personal Wealth Trajectory Models', np: 'व्यवहारपरक अर्थशास्त्र तथा व्यक्तिगत पुँजी वृद्धि ढाँचा अनुसार समीक्षित' },
    prerequisites: { en: 'Experience receiving a salary hike or increased earnings', np: 'तलब वृद्धि वा आम्दानी बढेको सामान्य अनुभव' },
    en: {
      title: 'Preventing Lifestyle Inflation in Nepal: The 50% Increment Rule',
      oneLineSummary: 'Break the cycle of earning more but saving nothing - master the golden rule of capturing salary raises before lifestyle creep consumes them.',
      summaryPoints: [
        'Lifestyle Inflation (जीवनशैली मुद्रास्फीति) is the tendency for spending to expand in exact lockstep with income increases.',
        'When Nepalis get promoted from NPR 40,000 to NPR 90,000, they often upgrade apartments, buy cars on EMI, and end up saving zero.',
        'The 50% Increment Rule: Whenever income increases, allocate at least 50% of the raise to automated investments before touching the rest.',
        'Beware the "Kathmandu Status Trap": dining at overpriced cafes, buying the latest iPhone on 0% EMI, and keeping up appearances.',
        'True wealth is what you do not see: unspent money invested in compounding assets, granting independence and calm.'
      ],
      whatIsThis: 'Lifestyle Inflation (also known as Lifestyle Creep) is a behavioral economic phenomenon where an individual increases their discretionary consumption in exact proportion to an increase in their income, keeping their net savings rate stagnant regardless of how much money they earn.',
      whyItMatters: 'Many professionals in Kathmandu who earned NPR 35,000 five years ago thought: "If only I earned NPR 1,00,000, I would save NPR 50,000 every month easily." Today, they earn NPR 1,20,000 and have NPR 3,000 left in their bank account before salary day. Upgrading your car, clothes, and restaurants in lockstep with income turns you into a high-income wage slave living paycheck to paycheck.',
      howItWorks: [
        { step: 1, title: 'Recognize the Hedonic Treadmill', desc: 'Psychology proves that the joy of a new car, larger apartment, or luxury gadget fades within 60 days, resetting your baseline happiness while permanently inflating your fixed monthly bills.' },
        { step: 2, title: 'Apply the 50% Increment Rule on Day 1', desc: 'When you receive a salary raise of NPR 20,000, immediately increase your automated mutual fund SIP by NPR 10,000 (50%). The remaining NPR 10,000 upgrades your living standards guilt-free.' },
        { step: 3, title: 'Avoid Long-Term Consumer Debt Traps', desc: 'Refuse 24-month consumer EMIs for depreciating smartphones, smartwatches, and luxury leisure. If you cannot pay cash for consumer gadgets, you cannot afford them.' },
        { step: 4, title: 'Redefine Social Status in Nepal', desc: 'Shift status from visible consumption (expensive car, branded watches) to invisible security (a 6-month emergency reserve, paid-off mortgage, and multi-lakh stock portfolio).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '10-Year Wealth Trajectory: Standard Lifestyle Creep vs The 50% Increment Rule',
        headers: ['Income Milestone', 'Monthly Salary', 'Standard Lifestyle Creep (Savings)', '50% Increment Rule (Savings)', '10-Year Portfolio Difference'],
        rows: [
          ['Year 1 (Entry Level)', 'NPR 40,000', 'NPR 4,000 / mo (10%)', 'NPR 8,000 / mo (20%)', 'Baseline start'],
          ['Year 4 (Promotion 1)', 'NPR 70,000', 'NPR 5,000 / mo (7%)', 'NPR 23,000 / mo (33%)', '+NPR 8.2 Lakh ahead'],
          ['Year 7 (Senior Level)', 'NPR 1,10,000', 'NPR 6,000 / mo (5%)', 'NPR 43,000 / mo (39%)', '+NPR 28.5 Lakh ahead'],
          ['Year 10 (Director Level)', 'NPR 1,60,000', 'NPR 8,000 / mo (5%)', 'NPR 68,000 / mo (42%)', '+NPR 68.4 Lakh ahead!'],
          ['Terminal 10-Yr Wealth', 'Total Career Growth', 'NPR 14.8 Lakh Net Worth', 'NPR 83.2 Lakh Net Worth', 'A difference of NPR 68 Lakh!']
        ]
      },
      nepalContext: 'In urban Nepal, social pressure to display wealth is intense: weddings in Kathmandu now cost upwards of NPR 25-40 Lakh, dining at upscale Jhamsikhel or Baluwatar cafes costs NPR 3,000 per evening, and luxury SUVs are purchased on 8-year auto loans simply to maintain prestige. Resisting this pressure and quietly accumulating commercial bank debentures and NEPSE equities is how generational wealth is built in Nepal.',
      practicalScenario: {
        persona: 'Samip, 31, senior banking officer in Butwal',
        income: 'Promoted from NPR 55,000 to NPR 95,000 / month',
        scenarioText: 'When Samip got promoted with an NPR 40,000 salary bump, his colleagues bought new motorbikes and rented upscale luxury apartments. Samip felt tempted to upgrade his car.',
        solutionText: 'Instead, Samip applied the 50% Increment Rule: he increased his automated monthly mutual fund SIP by NPR 20,000 (50% of the raise) to NPR 30,000/month. He used the other NPR 20,000 to move into a slightly nicer flat and take his family on vacation. Within 4 years, his SIP crossed NPR 22 Lakh, while his colleagues were struggling to service vehicle EMIs.',
        metricHighlight: 'Saved NPR 22 Lakh in 4 years by capturing 50% of every salary raise'
      },
      formula: {
        name: 'The 50% Increment Allocation Formula',
        equation: '\\Delta \\text{SIP} = 0.50 \\times (\\text{New Take-Home} - \\text{Old Take-Home})',
        variables: [
          { symbol: '\\Delta \\text{SIP}', name: 'Mandatory SIP Increase', desc: 'Additional monthly investment auto-debited from the raise.' },
          { symbol: '\\text{New Take-Home}', name: 'Post-Increment Salary', desc: 'Updated take-home salary after raise.' }
        ],
        exampleCalculation: 'Old Salary = NPR 60,000. New Salary = NPR 80,000 (Increment = NPR 20,000). Mandatory SIP Increase = 0.50 × 20,000 = NPR 10,000. If your old SIP was NPR 8,000, your new SIP becomes NPR 18,000 immediately! The remaining NPR 10,000 is your lifestyle upgrade.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Long-Term Portfolio'
      },
      commonMistakes: [
        { mistake: 'Buying luxury electronics (latest iPhone) on 12-month or 18-month EMIs.', correct: 'Save up cash in advance; never finance rapidly depreciating gadgets with debt.', explanation: 'Gadget EMIs commit your future salary before you even earn it, locking you into lifestyle inflation.' },
        { mistake: 'Believing that you must wait until you earn NPR 1 Lakh to start saving substantially.', correct: 'Savings rate is a habit, not an income level; build the muscle on whatever you earn today.', explanation: 'Someone who saves 0% on NPR 40,000 will almost certainly save 0% on NPR 1,50,000.' },
        { mistake: 'Equating social status in Nepal with expensive restaurant checks and imported cars.', correct: 'Real status is financial independence: the freedom to take a sabbatical or retire at 45.', explanation: 'Visible luxury often masks crippling personal bank debt and zero emergency savings.' }
      ],
      definitions: [
        { term: 'Lifestyle Creep', full: 'जीवनशैली मुद्रास्फीति', meaning: 'The subtle, gradual escalation of non-essential living costs that occurs as income rises over time.' },
        { term: 'Hedonic Treadmill', full: 'आनन्दको चक्रव्यूह', meaning: 'The psychological tendency of humans to quickly return to a baseline level of happiness despite major positive life changes.' },
        { term: '50% Increment Rule', full: '५०% वृद्धि लगानी नियम', meaning: 'The rule that half of every salary raise must be diverted to investments before lifestyle upgrades.' },
        { term: 'Phantom Wealth', full: 'देखावटी सम्पत्ति', meaning: 'High visible spending on leased cars, dining, and gadgets backed by heavy personal debt with near-zero real net worth.' }
      ],
      faqs: [
        { q: 'Does preventing lifestyle inflation mean living like a miser forever?', a: 'Not at all! The 50% Increment Rule allows you to spend 50% of every raise on higher living standards, vacations, and dining completely guilt-free. You enjoy life today while securing tomorrow.' },
        { q: 'What if inflation in Nepal has raised the cost of groceries and rent?', a: 'Account for real living cost increases in your budget first; the 50% rule applies to discretionary real raises above statutory inflation adjustments.' },
        { q: 'How do I handle pressure from relatives to spend extravagantly during festivals?', a: 'Establish a dedicated annual festival savings sinking fund. Once the cash in that fund is spent, politely set boundaries without taking high-interest personal loans.' }
      ],
      takeaways: [
        'Lifestyle inflation turns high-earning professionals into stressed paycheck-to-paycheck workers.',
        'The 50% Increment Rule: invest 50% of every salary raise before upgrading your lifestyle.',
        'The psychological thrill of luxury purchases fades in 60 days; compounding wealth lasts forever.',
        'Never finance depreciating gadgets and consumer luxury with long-term bank EMIs.',
        'True wealth is financial freedom, peace of mind, and the ability to say "no" to toxic work.'
      ]
    },
    np: {
      title: 'नेपालमा जीवनशैली मुद्रास्फीति (Lifestyle Creep) नियन्त्रण: ५०% तलब वृद्धि नियम',
      oneLineSummary: 'कमाइ बढ्दै जाने तर बचत सधैँ शून्य हुने पासो तोड्नुहोस् - तलब बढ्नेबित्तिकै त्यसको आधा हिस्सा लगानीमा बाँध्ने अचुक नियम।',
      summaryPoints: [
        'जीवनशैली मुद्रास्फीति (Lifestyle Inflation) भनेको आम्दानी बढेसँगै खर्च पनि सोही अनुपातमा बढाउँदै लैजाने मानवीय कमजोरी हो।',
        'तलब ४० हजारबाट बढेर ९० हजार पुग्दा पनि मानिसहरू महँगो फ्ल्याट र किस्तामा गाडी किनेर महिनाको अन्त्यमा रित्तै हुन्छन्।',
        '५०% वृद्धि नियम: जहिले पनि तलब बढ्दा बढेको रकमको कम्तीमा ५०% तुरुन्तै स्वचालित SIP वा लगानीमा पठाउनुहोस्।',
        'काठमाडौँको "देखावटी रवाफ": महँगो क्याफे, ०% ब्याजको नाममा किस्तामा आइफोन, र हैसियत देखाउने होडबाजीबाट जोगिनुहोस्।',
        'वास्तविक सम्पत्ति बाहिर देखिने गाडी होइन; बैंक र सेयर बजारमा चक्रवर्ती गतिमा बढिरहेको अदृश्य पुँजी हो।'
      ],
      whatIsThis: 'जीवनशैली मुद्रास्फीति (Lifestyle Inflation / Lifestyle Creep) भनेको यस्तो व्यवहारपरक आर्थिक समस्या हो जहाँ मानिसको तलब वा व्यापारिक आम्दानी जति बढ्छ, उसको फजुल खर्च पनि ठ्याक्कै त्यति नै बढेर बचत दर सधैँ शून्य वा न्यून नै रहन्छ।',
      whyItMatters: 'धेरैले ५ वर्षअघि महिनाको ३५ हजार कमाउँदा सोच्थे: "मैले १ लाख कमाएको भए त महिनाको ५० हजार सजिलै बचाउँथेँ।" आज उनीहरू १ लाख २० हजार कमाउँछन् तर महिना सकिनुअघि खातामा ३ हजार पनि बाँकी हुँदैन। आम्दानीसँगै गाडी, रेस्टुरेन्ट र लुगाको स्तर बढाउँदै जाँदा मानिस लाखौँ कमाउने तर महिना मरेपछि हात बाँध्नुपर्ने आधुनिक दास बन्न पुग्छ।',
      howItWorks: [
        { step: 1, title: 'आनन्दको चक्रव्यूह (Hedonic Treadmill) बुझ्नुहोस्', desc: 'मनोविज्ञान अनुसार नयाँ गाडी, ठूलो कोठा वा ब्रान्डेड कपडाको खुसी बढीमा ६० दिन मात्र टिक्छ, त्यसपछि मानिस पुरानै अवस्थामा फर्किन्छ तर मासिक खर्च भने सधैँका लागि बढ्छ।' },
        { step: 2, title: 'पहिलो दिनमै ५०% वृद्धि नियम लागू गर्नुहोस्', desc: 'यदि तलब २० हजारले बढ्यो भने १० हजार (५०%) तुरुन्तै म्युचुअल फन्ड SIP मा थपिदिनुहोस्। बाँकी १० हजारले जीवनस्तर सुधार्न ढुक्कले खर्च गर्नुहोस्।' },
        { step: 3, title: 'उपभोग्य सामानको किस्ता (EMI) को पासोबाट बच्नुहोस्', desc: 'मोबाइल, घडी वा घुमघामका लागि २४ महिने किस्तामा ऋण कहिल्यै नकाढ्नुहोस्। यदि नगद तिरेर किन्न सकिँदैन भने त्यो सामान किन्ने हैसियत पुगेको छैन भनी बुझ्नुहोस्।' },
        { step: 4, title: 'सामाजिक प्रतिष्ठाको परिभाषा बदल्नुहोस्', desc: 'देखावटी उपभोग (महँगो घडी, नयाँ गाडी) छाडेर अदृश्य सुरक्षा (६ महिनाको आपतकालीन कोष, ऋणमुक्त घर, र लाखौँको सेयर पोर्टफोलियो) लाई वास्तविक प्रतिष्ठा मान्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '१० वर्षे पुँजीको यात्रा: परम्परागत जीवनशैली पासो बनाम ५०% वृद्धि नियम',
        headers: ['करियर चरण', 'मासिक तलब', 'सामान्य जीवनशैली पासो (बचत)', '५०% वृद्धि नियम अनुसार बचत', '१० वर्षमा हुने कुल सम्पत्ति अन्तर'],
        rows: [
          ['वर्ष १ (सुरुवाती जागिर)', 'रु. ४०,०००', 'रु. ४,००० / महिना (१०%)', 'रु. ८,००० / महिना (२०%)', 'सुरुवाती आधार'],
          ['वर्ष ४ (पहिलो पदोन्नति)', 'रु. ७०,०००', 'रु. ५,००० / महिना (७%)', 'रु. २३,००० / महिना (३३%)', '+रु. ८.२ लाख अगाडि'],
          ['वर्ष ७ (सिनियर तह)', 'रु. १,१०,०००', 'रु. ६,००० / महिना (५%)', 'रु. ४३,००० / महिना (३९%)', '+रु. २८.५ लाख अगाडि'],
          ['वर्ष १० (व्यवस्थापक तह)', 'रु. १,६०,०००', 'रु. ८,००० / महिना (५%)', 'रु. ६८,००० / महिना (४२%)', '+रु. ६८.४ लाख अगाडि!'],
          ['१० वर्षपछिको कुल पुँजी', 'करियरभरिको नतिजा', 'जम्मा रु. १४.८ लाख खुद सम्पत्ति', 'रु. ८३.२ लाख खुद सम्पत्ति', 'सोझै रु. ६८ लाखको विशाल अन्तर!']
        ]
      },
      nepalContext: 'काठमाडौँ लगायतका सहरी क्षेत्रमा देखावटी रवाफको सामाजिक दबाब चर्को छ: सामान्य बिहेमा २५ देखि ४० लाख खर्च गरिन्छ, झम्सिखेल वा बालुवाटारका क्याफेमा एक साँझ बस्दा ३ हजार सकिन्छ, र हैसियत देखाउनकै लागि ८ वर्षे ऋणमा गाडी किनिन्छ। यो सामाजिक दबाबलाई बेवास्ता गर्दै चुपचाप बैंकको ऋणपत्र र नेप्सेको गुणस्तरीय सेयरमा पैसा लगाउनेहरू नै नेपालमा वास्तविक पुँजीपति बन्न सफल भएका छन्।',
      practicalScenario: {
        persona: 'समीप, ३१, बुटवलका सिनियर बैंक अधिकृत',
        income: 'तलब रु. ५५,००० बाट बढेर रु. ९५,००० पुगेको',
        scenarioText: 'समीपको तलब एकैपटक ४० हजार बढ्दा उनका साथीहरूले नयाँ मोटरसाइकल फेरे र महँगो अपार्टमेन्टमा सरे। समीपलाई पनि नयाँ गाडी किस्तामा निकाल्न मन लाग्यो।',
        solutionText: 'समीपले ५०% वृद्धि नियम लगाए: बढेको ४० हजारमध्ये २० हजार (५०%) उनले म्युचुअल फन्ड SIP मा थपेर मासिक ३० हजार लगानी पुर्याए। बाँकी २० हजारले उनले राम्रो फ्ल्याट लिए र परिवारलाई घुमाए। ४ वर्षमा उनको लगानी बढेर २२ लाख रुपैयाँ पुग्यो, जबकि साथीहरू अझै गाडीको किस्ता तिर्न धौ-धौमा थिए।',
        metricHighlight: 'तलब वृद्धिको ५०% बचाएर ४ वर्षमै २२ लाखको पोर्टफोलियो खडा गरे'
      },
      formula: {
        name: '५०% वृद्धि लगानी बाँडफाँट सूत्र',
        equation: '\\Delta \\text{SIP} = 0.50 \\times (\\text{New Take-Home} - \\text{Old Take-Home})',
        variables: [
          { symbol: '\\Delta \\text{SIP}', name: 'थप गर्नुपर्ने मासिक SIP', desc: 'तलब बढेपछि लगानीमा थपिने अनिवार्य रकम।' },
          { symbol: '\\text{New Take-Home}', name: 'वृद्धिपछिको नयाँ तलब', desc: 'बढेर हात परेको नयाँ खुद तलब रकम।' }
        ],
        exampleCalculation: 'पुरानो तलब = रु. ६०,०००। नयाँ तलब = रु. ८०,००० (वृद्धि = रु. २०,०००)। थपिने SIP = ०.५० × २०,००० = रु. १०,०००। यदि पुरानो SIP ८ हजार थियो भने अब १८ हजार पुग्छ! बाँकी १० हजारले जीवनशैली सुधार्न ढुक्कले खर्च गर्नुहोस्।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'दीर्घकालीन सम्पत्ति हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'नयाँ आइफोन वा ग्याजेटहरू १२ देखि १८ महिनाको किस्तामा किन्ने बानी बसाल्नु।', correct: 'ग्याजेटका लागि पहिले नगद बचत गर्नुहोस्; अवमूल्यन हुने सामान ऋणमा कहिल्यै नकिन्नुहोस्।', explanation: 'किस्ताले तपाईंको भविष्यको कमाइलाई पहिले नै बन्धक बनाइदिन्छ जसले आर्थिक स्वतन्त्रता खोस्छ।' },
        { mistake: 'महिनाको १ लाख कमाएपछि मात्र बचत गर्न सुरु गर्छु भन्दै पर्खेर बस्नु।', correct: 'बचत आम्दानीको स्तर होइन, बानी हो; आजैबाट जति कमाइन्छ त्यसैमा बचतको अभ्यास गर्नुहोस्।', explanation: '४० हजारमा बचत नगर्ने मान्छेले १ लाख ५० हजार कमाउँदा पनि शून्य नै बचत गर्छ।' },
        { mistake: 'नेपालमा सामाजिक रवाफ र महँगो रेस्टुरेन्टलाई नै सफलताको मापक मान्नु।', correct: 'वास्तविक सफलता भनेको आर्थिक स्वतन्त्रता हो: मानसिक शान्ति र तनावमुक्त जीवन।', explanation: 'बाहिर महँगो गाडी चढे पनि भित्र चर्को बैंक ऋणको तनावमा बाँच्नु वास्तविक गरिबी हो।' }
      ],
      definitions: [
        { term: 'जीवनशैली मुद्रास्फीति (Lifestyle Creep)', full: 'विलासिता खर्चको विस्तार', meaning: 'आम्दानी बढेसँगै अनावश्यक खर्चहरू पनि विस्तारै बढ्दै जाने मानवीय वित्तीय कमजोरी।' },
        { term: 'आनन्दको चक्रव्यूह (Hedonic Treadmill)', full: 'क्षणिक सन्तुष्टि चक्र', meaning: 'भौतिक सामान किन्दा सुरुमा धेरै खुसी लागे पनि केही दिनमै त्यो खुसी हराएर फेरि नयाँ सामान चाहिने मनोविज्ञान।' },
        { term: '५०% वृद्धि नियम', full: '50% Increment Rule', meaning: 'तलब वा आम्दानीमा भएको कुनै पनि वृद्धिको आधा हिस्सा अनिवार्य रूपमा दीर्घकालीन लगानीमा बाँध्ने सिद्धान्त।' },
        { term: 'देखावटी सम्पत्ति (Phantom Wealth)', full: 'ऋणमा टिकेको विलासिता', meaning: 'बाहिर धनी देखिए पनि भित्र बैंकको चर्को ऋणले गर्दा वास्तविक खुद सम्पत्ति शून्य भएको अवस्था।' }
      ],
      faqs: [
        { q: 'के यो नियमले मानिसलाई कंजुस भएर बाँच्न बाध्य पार्छ?', a: 'पार्दैन! ५०% वृद्धि नियमले तपाईंलाई बढेको कमाइको आधा हिस्सा विना कुनै अपराधबोध आफ्नो जीवनशैली सुधार्न र घुमघाम गर्न खर्च गर्ने पूर्ण छुट दिन्छ।' },
        { q: 'यदि बजारमा महँगी बढेर कोठाभाडा र रासन महँगिएको छ भने के गर्ने?', a: 'पहिले महँगी अनुसारको वास्तविक खर्च मिलाउनुहोस्; यो ५०% को नियम वास्तविक तलब वृद्धिमा मात्र लागू हुन्छ।' },
        { q: 'चाडपर्व र सामाजिक भोजभतेरमा आफन्तको दबाबलाई कसरी व्यवस्थापन गर्ने?', a: 'चाडपर्वका लागि वर्षभरि थोरै-थोरै पैसा जम्मा गरी छुट्टै कोष बनाउनुहोस्। त्यो कोषको पैसा सकिएपछि ऋण नकाढी नम्रतापूर्वक "नाइँ" भन्न सिक्नुहोस्।' }
      ],
      takeaways: [
        'जीवनशैली मुद्रास्फीतिले धेरै कमाउनेलाई पनि सधैँ आर्थिक तनावमा राखिराख्छ।',
        '५०% वृद्धि नियम: जहिले पनि तलब बढ्दा आधा हिस्सा लगानीमा पठाउनुहोस्।',
        'भौतिक सामानको खुसी ६० दिनमा हराउँछ तर चक्रवर्ती लगानी जीवनभर रहन्छ।',
        'ग्याजेट र उपभोग्य सामान किस्ता (EMI) मा कहिल्यै नकिन्नुहोस्।',
        'वास्तविक सम्पत्ति देखावटी विलासिता होइन, ऋणमुक्त जीवन र मानसिक स्वतन्त्रता हो।'
      ]
    }
  },

  // ── L6. ANNUAL NET WORTH AUDIT & GOAL SETTING ────────────────────
  'annual-net-worth-audit-goal-setting': {
    id: 'prod-annual-net-worth-audit',
    slug: 'annual-net-worth-audit-goal-setting',
    categorySlug: 'productivity',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Comprehensive Wealth Auditing Standards & Financial Goal Milestones', np: 'समग्र पुँजी परीक्षण तथा वित्तीय लक्ष्य मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of assets, liabilities, and net worth concepts', np: 'सम्पत्ति, दायित्व र खुद सम्पत्तिको आधारभूत ज्ञान' },
    en: {
      title: 'Annual Net Worth Audit & Goal Setting in Nepal: The Year-End Financial Physical',
      oneLineSummary: 'Conduct a comprehensive annual balance sheet audit at Ashad end or Baisakh 1 to track real wealth growth against inflation.',
      summaryPoints: [
        'Your Net Worth (Total Assets minus Total Liabilities) is the single true scorecard of your financial health, not your monthly salary.',
        'Conduct this audit once a year: either at the close of the Nepali fiscal year (Ashad end) or on Nepali New Year (Baisakh 1).',
        'Asset valuation must be realistic: use conservative Malpot rates for real estate and 24K market spot rates for gold.',
        'Subtract all liabilities: home mortgage balance, vehicle EMIs, education loans, and short-term informal debts.',
        'Set 3 SMART financial milestones for the upcoming year: target savings rate, debt paydown target, and emergency fund buffer.'
      ],
      whatIsThis: 'An Annual Net Worth Audit is a comprehensive year-end financial check-up where an individual or household catalogs every asset owned (cash, bank deposits, NEPSE shares, mutual funds, SSF/CIT balances, gold, real estate) and subtracts every outstanding debt owed to determine their true economic net worth and rate of real wealth creation over the trailing 12 months.',
      whyItMatters: 'Salary is just cash flow; net worth is true wealth. A doctor earning NPR 2,50,000/month with NPR 1.8 Crore in luxury debt has a negative net worth. A schoolteacher earning NPR 55,000/month with a debt-free plot of land and NPR 30 Lakh in mutual funds has a high net worth. Calculating this once a year ensures that 12 months of daily labor actually translated into permanent financial security.',
      howItWorks: [
        { step: 1, title: 'Schedule Your Annual Audit Date', desc: 'Choose a fixed milestone date: Ashad 31 (Nepali fiscal year end) or Baisakh 1 (Nepali New Year). Dedicate 2 uninterrupted hours to review your finances.' },
        { step: 2, title: 'Compile Asset Column with Conservative Valuations', desc: 'Category A: Liquid Cash & Bank FDs. Category B: Equity (MeroShare market value & mutual funds). Category C: Retirement (SSF, CIT, EPF). Category D: Real Assets (Gold at market price, land at 75% market value).' },
        { step: 3, title: 'Compile Liabilities Column Down to the Rupee', desc: 'Fetch latest bank loan statements: Home loan principal, auto loan balance, credit card debt, and any informal family borrowings.' },
        { step: 4, title: 'Calculate Real Net Worth & Set 3 Upcoming Goals', desc: 'Subtract Liabilities from Assets. Compare against last year\'s figure. Set 3 actionable goals for the upcoming year (e.g. increase net worth by 15%, prepay NPR 3 Lakh loan principal, max out SSF/CIT tax deduction).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Annual Net Worth Audit Template: A 36-Year-Old Nepali Household (Ashad End)',
        headers: ['Asset & Liability Item', 'Valuation Basis / Source', 'Current Balance (NPR)', 'Net Contribution'],
        rows: [
          ['Liquid Cash & Bank FDs', 'Passbooks & online banking balances', 'NPR 6,50,00,00', 'Liquid buffer'],
          ['NEPSE Equities & Mutual Funds', 'MeroShare portfolio current value', 'NPR 14,20,000', 'Growth assets'],
          ['SSF & CIT Retirement Funds', 'Official portal account statements', 'NPR 7,80,000', 'Protected retirement'],
          ['Gold (5 Tola Hallmark 24K)', 'Spot rate minus 5% making margin', 'NPR 7,25,000', 'Store of value'],
          ['Residential Land (4 Aana)', 'Conservative 75% market valuation', 'NPR 65,00,000', 'Fixed asset core'],
          ['Total Household Assets (A)', 'Sum of all economic resources', 'NPR 1,00,75,000', 'Gross Wealth: 1.0 Crore'],
          ['Remaining Home Mortgage (B)', 'Bank loan outstanding principal statement', 'NPR 34,50,000', 'Collateral liability'],
          ['Personal / Auto Loan (C)', 'Vehicle loan outstanding balance', 'NPR 6,25,000', 'Consumer liability'],
          ['REAL NET WORTH (A - B - C)', 'True Economic Scorecard', 'NPR 60,00,000 Net Worth', '+NPR 8.5 Lakh YoY Growth']
        ]
      },
      nepalContext: 'In Nepal, cultural tradition often keeps financial balance sheets opaque: heads of households hide land deeds, wives keep secret gold stashes, and young earners keep their stock portfolios private. Conducting a transparent, unified household net worth audit aligns the entire family, prevents panic during economic slowdowns, and ensures that succession planning and nominee registrations are kept updated.',
      practicalScenario: {
        persona: 'Sabina, 36, retail pharmacy business owner in Pokhara',
        income: 'NPR 1,35,000 / month net profit',
        scenarioText: 'Sabina worked 12 hours a day for 5 years. She felt exhausted and worried: "I earn good money, but where does it all go? Am I actually moving forward or running on a treadmill?"',
        solutionText: 'Sabina conducted her first formal Net Worth Audit on Ashad 31. When she aggregated her pharmacy inventory, paid-down shop mortgage, mutual fund SIPs, and CIT balance, her net worth was NPR 52 Lakh - up NPR 7.5 Lakh from her estimated starting point. Seeing the empirical proof of her wealth building restored her motivation and eliminated burnout.',
        metricHighlight: 'Discovered NPR 52 Lakh in real net worth, eliminating career burnout'
      },
      formula: {
        name: 'Real Net Worth Growth Rate Formula',
        equation: '\\text{Real Growth Rate} = \\left( \\frac{\\text{Net Worth}_{t} - \\text{Net Worth}_{t-1}}{\\text{Net Worth}_{t-1}} \\times 100\\% \\right) - \\pi_{\\text{Inflation}}',
        variables: [
          { symbol: '\\text{Net Worth}_{t}', name: 'Current Year Net Worth', desc: 'Total assets minus total liabilities at end of current fiscal year.' },
          { symbol: '\\text{Net Worth}_{t-1}', name: 'Previous Year Net Worth', desc: 'Net worth audited exactly 12 months prior.' },
          { symbol: '\\pi_{\\text{Inflation}}', name: 'Annual Headline Inflation', desc: 'Average annual inflation rate published by NRB (typically 5%-7%).' }
        ],
        exampleCalculation: 'Last Year Net Worth = NPR 40,00,000. Current Net Worth = NPR 48,00,000 (Nominal gain = NPR 8,00,000 or 20.0%). Annual Inflation = 6.0%. Real Net Worth Growth Rate = 20.0% - 6.0% = 14.0% real purchasing power expansion!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Wealth Milestones'
      },
      commonMistakes: [
        { mistake: 'Valuing land at speculative peak broker asking prices.', correct: 'Use a conservative 70%-75% of local market price or municipal valuation.', explanation: 'Overvaluing real estate creates paper illusions of wealth that disappear during market downturns.' },
        { mistake: 'Counting personal vehicles (cars/motorcycles) as appreciating assets.', correct: 'Exclude personal vehicles or depreciate them by 15% annually to zero.', explanation: 'Vehicles consume fuel, insurance, and maintenance while depreciating steadily over time.' },
        { mistake: 'Failing to track retirement funds like SSF, CIT, and EPF.', correct: 'Log into your official retirement portals and include your accumulated balances.', explanation: 'Many Nepalis forget they have lakhs of rupees compounding in mandatory state retirement funds.' }
      ],
      definitions: [
        { term: 'Net Worth', full: 'खुद सम्पत्ति', meaning: 'The total value of everything you own (assets) minus everything you owe (liabilities).' },
        { term: 'Real Growth Rate', full: 'वास्तविक पुँजी वृद्धि दर', meaning: 'The percentage expansion of your wealth after subtracting the eroding effect of inflation.' },
        { term: 'Sinking Fund', full: 'विशिष्ट बचत कोष', meaning: 'A designated savings pool created by setting aside money regularly for a specific planned capital expense.' },
        { term: 'SMART Financial Goal', full: 'विशिष्ट तथा मापनयोग्य लक्ष्य', meaning: 'A goal that is Specific, Measurable, Achievable, Relevant, and Time-bound (e.g. Save NPR 2L by Ashad).' }
      ],
      faqs: [
        { q: 'Should I include household furniture and electronics in my net worth?', a: 'No. Discard consumer electronics, furniture, and clothing from your net worth audit. They have almost zero secondary market resale value and clutter your balance sheet.' },
        { q: 'What is a healthy annual Net Worth growth rate in Nepal?', a: 'A real net worth growth rate of 10% to 15% above inflation is outstanding. During wealth accumulation years (ages 25-45), consistent savings can double net worth every 5 to 6 years.' },
        { q: 'What should I do if my Net Worth calculation turns out negative?', a: 'Do not panic. A negative net worth is normal for young professionals with education or home loans. Focus 100% on aggressive debt repayment and building a 3-month emergency fund.' }
      ],
      takeaways: [
        'Net Worth (Assets minus Liabilities) is the single true measure of your financial success.',
        'Conduct a formal audit once a year at Ashad end or Baisakh 1 to track real progress.',
        'Use conservative valuations: discount real estate and exclude depreciating consumer gadgets.',
        'Remember to include official retirement balances in SSF, CIT, and EPF portals.',
        'Set 3 SMART financial milestones each year to maintain long-term compounding momentum.'
      ]
    },
    np: {
      title: 'नेपालमा वार्षिक खुद सम्पत्ति (Net Worth) परीक्षण र लक्ष्य निर्धारण: वर्षान्तको वित्तीय स्वास्थ्य जाँच',
      oneLineSummary: 'असार मसान्त वा वैशाख १ मा कुल सम्पत्तिबाट ऋण घटाएर आफ्नो वास्तविक सम्पत्ति र महँगी कटाएर भएको पुँजी वृद्धि जाँच्ने तरिका।',
      summaryPoints: [
        'मासिक तलब होइन, तपाईंको खुद सम्पत्ति (कुल सम्पत्ति - कुल ऋण) नै तपाईंको वास्तविक आर्थिक स्वास्थ्यको एकमात्र सही मापदण्ड हो।',
        'यो परीक्षण वर्षमा एकपटक गर्नुहोस्: आर्थिक वर्षको अन्त्य (असार मसान्त) मा वा नयाँ वर्ष (वैशाख १) मा।',
        'सम्पत्तिको मूल्याङ्कन यथार्थपरक हुनुपर्छ: जग्गाको सुरक्षित मालपोत दर र सुनको बजार मूल्य प्रयोग गर्नुहोस्।',
        'सबै दायित्व घटाउनुहोस्: घर कर्जाको बाँकी साँवा, गाडीको किस्ता, शैक्षिक ऋण र व्यक्तिगत सापटी।',
        'आगामी वर्षका लागि ३ वटा स्पष्ट (SMART) लक्ष्य तोक्नुहोस्: बचत दर बढाउने, ऋणको साँवा घटाउने, र आपतकालीन कोष बलियो बनाउने।'
      ],
      whatIsThis: 'वार्षिक खुद सम्पत्ति परीक्षण (Annual Net Worth Audit) भनेको वर्षको अन्त्यमा बसेर आफूसँग भएका सम्पूर्ण सम्पत्तिहरू (नगद, बैंक मुद्दती, नेप्से सेयर, म्युचुअल फन्ड, SSF/CIT मौज्दात, सुन, घरजग्गा) जोड्ने र तिर्न बाँकी सम्पूर्ण ऋणहरू घटाएर आफ्नो वास्तविक आर्थिक हैसियत पत्ता लगाउने प्रक्रिया हो।',
      whyItMatters: 'तलब नगद प्रवाह मात्र हो; खुद सम्पत्ति नै वास्तविक पुँजी हो। महिनाको साढे २ लाख कमाउने डाक्टरको १ करोड ८० लाख ऋण छ भने उसको खुद सम्पत्ति ऋणात्मक हुन सक्छ। तर महिनाको ५५ हजार कमाउने शिक्षकको ऋणमुक्त घडेरी र ३० लाखको सेयर छ भने उनी वास्तविक धनी हुन्। वर्षमा एकपटक यो हिसाब गर्दा वर्षभरिको मिहिनेतले वास्तविक रूपमा सम्पत्ति बनायो कि बनाएन प्रष्ट हुन्छ।',
      howItWorks: [
        { step: 1, title: 'परीक्षणको मिति तय गर्नुहोस्', desc: 'हरेक वर्षको असार ३१ वा वैशाख १ गते २ घण्टाको समय छुट्टाएर शान्त वातावरणमा आफ्नो आर्थिक हिसाबकिताब अगाडि राख्नुहोस्।' },
        { step: 2, title: 'सम्पत्तिको यथार्थपरक सूची बनाउनुहोस्', desc: 'समूह क: बैंक मौज्दात र मुद्दती। समूह ख: मेरोसेयरको बजार मूल्य र म्युचुअल फन्ड। समूह ग: पेन्सन कोष (SSF, CIT, सञ्चय कोष)। समूह घ: सुन र घरजग्गा (बजार भाउको ७५%)।' },
        { step: 3, title: 'तिर्न बाँकी सम्पूर्ण ऋणहरू घटाउनुहोस्', desc: 'बैंकबाट स्टेटमेन्ट मागेर घर कर्जाको बाँकी साँवा, गाडी कर्जाको बाँकी रकम, र व्यक्तिगत सापटी एक-एक रुपैयाँ जोड्नुहोस्।' },
        { step: 4, title: 'खुद सम्पत्ति निकाल्नुहोस् र ३ नयाँ लक्ष्य तोक्नुहोस्', desc: 'सम्पत्तिबाट ऋण घटाउनुहोस्। अघिल्लो वर्षसँग दाँज्नुहोस्। आगामी वर्षका लागि ३ वटा ठोस लक्ष्य राख्नुहोस् (जस्तै: खुद सम्पत्ति १५% ले बढाउने, ३ लाख ऋण तिर्ने)।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'वार्षिक खुद सम्पत्ति परीक्षण उदाहरण: ३६ वर्षीय नेपाली परिवार (असार मसान्त)',
        headers: ['सम्पत्ति तथा दायित्व शीर्षक', 'मूल्याङ्कनको कानुनी आधार', 'हाल कायम रकम (रु.)', 'सम्पत्तिमा योगदान'],
        rows: [
          ['नगद तथा बैंक मुद्दती निक्षेप', 'पासबुक तथा अनलाइन बैंकिङ मौज्दात', 'रु. ६,५०,०००', 'तत्काल चलाउन मिल्ने तरलता'],
          ['नेप्से सेयर तथा म्युचुअल फन्ड', 'मेरोसेयर पोर्टफोलियोको बजार मूल्य', 'रु. १४,२०,०००', 'बढ्दो पुँजीगत सम्पत्ति'],
          ['SSF तथा नागरिक लगानी कोष (CIT)', 'आधिकारिक पोर्टलको मौज्दात स्टेटमेन्ट', 'रु. ७,८०,०००', 'सुरक्षित अवकाश कोष'],
          ['सुन (५ तोला छापावाल २४ क्यारेट)', 'चालू बजार मूल्य (५% ज्याला कटाएर)', 'रु. ७,२५,०००', 'सदावहार सुरक्षित धातु'],
          ['आवासीय घडेरी (४ आना जग्गा)', 'बजार भाउको ७५% सुरक्षित मूल्याङ्कन', 'रु. ६५,००,०००', 'स्थिर अचल सम्पत्ति'],
          ['कुल पारिवारिक सम्पत्ति (क)', 'सबै आर्थिक स्रोतहरूको योगफल', 'रु. १,००,७५,०००', 'कुल सम्पत्ति: १ करोड माथि'],
          ['बाँकी घर कर्जा साँवा (ख)', 'बैंकको कर्जा स्टेटमेन्ट अनुसार', 'रु. ३४,५०,०००', 'धितो कर्जा दायित्व'],
          ['सवारी तथा व्यक्तिगत कर्जा (ग)', 'गाडीको तिर्न बाँकी किस्ता रकम', 'रु. ६,२५,०००', 'उपभोग्य ऋण दायित्व'],
          ['वास्तविक खुद सम्पत्ति (क - ख - ग)', 'वास्तविक आर्थिक स्कोरकार्ड', 'रु. ६०,००,००० खुद सम्पत्ति', 'अघिल्लो वर्षभन्दा रु. ८.५ लाख वृद्धि']
        ]
      },
      nepalContext: 'नेपाली समाजमा पारिवारिक सम्पत्ति प्रायः अपारदर्शी हुन्छ: घरमूलीले जग्गाको कागज लुकाउने, महिलाहरूले गोप्य सुन राख्ने, र युवाहरूले सेयरको हिसाब नबताउने गरिन्छ। वर्षमा एकपटक पारदर्शी पारिवारिक अडिट गर्दा परिवारका सबै सदस्यहरू एउटै लक्ष्यमा जोडिन्छन्, आर्थिक मन्दी आउँदा त्रास हुँदैन र बैंक खातामा हकवाला (Nominee) दर्ता अद्यावधिक रहन्छ।',
      practicalScenario: {
        persona: 'सबिना, ३६, पोखराकी फार्मेसी व्यवसायी',
        income: 'मासिक खुद नाफा रु. १,३५,०००',
        scenarioText: 'सबिनाले ५ वर्षदेखि दैनिक १२ घण्टा पसलमा खटिन्। उनी थकित भएर सोच्थिन्: "म यत्रो मिहिनेत गर्छु, कमाउँछु पनि, तर पैसा कहाँ जान्छ? म अगाडि बढेकी छु कि एकै ठाउँमा दौडिरहेकी छु?" ',
        solutionText: 'सबिनाले असार ३१ मा आफ्नो पहिलो औपचारिक खुद सम्पत्ति परीक्षण गरिन्। जब उनले फार्मेसीको स्टक, घटेको सटर कर्जा, म्युचुअल फन्ड SIP र CIT को मौज्दात जोडिन्, उनको खुद सम्पत्ति ५२ लाख रुपैयाँ पुगेको देखियो - जुन अघिल्लो वर्षभन्दा साढे ७ लाख बढी थियो। आफ्नै आँखाले सम्पत्ति बढेको प्रमाण देखेपछि उनको मानसिक थकान हट्यो।',
        metricHighlight: '५२ लाखको वास्तविक सम्पत्ति पहिचान गरेर मानसिक तनाव हटाइन्'
      },
      formula: {
        name: 'वास्तविक खुद सम्पत्ति वृद्धि दर सूत्र',
        equation: '\\text{Real Growth Rate} = \\left( \\frac{\\text{Net Worth}_{t} - \\text{Net Worth}_{t-1}}{\\text{Net Worth}_{t-1}} \\times 100\\% \\right) - \\pi_{\\text{Inflation}}',
        variables: [
          { symbol: '\\text{Net Worth}_{t}', name: 'चालू वर्षको खुद सम्पत्ति', desc: 'चालू आर्थिक वर्षको अन्त्यमा सम्पत्तिबाट ऋण कटाएर बाँकी रकम।' },
          { symbol: '\\text{Net Worth}_{t-1}', name: 'अघिल्लो वर्षको खुद सम्पत्ति', desc: 'ठ्याक्कै १२ महिना अघि गरिएको परीक्षणको नतिजा।' },
          { symbol: '\\pi_{\\text{Inflation}}', name: 'वार्षिक उपभोक्ता मुद्रास्फीति', desc: 'राष्ट्र बैंकले प्रकाशित गरेको औसत वार्षिक महँगी दर (प्रायः ५%-७%)।' }
        ],
        exampleCalculation: 'अघिल्लो वर्ष खुद सम्पत्ति = रु. ४०,००,०००। चालू वर्ष = रु. ४८,००,००० (नाफा = रु. ८ लाख वा २०%)। वार्षिक महँगी = ६.०%। वास्तविक पुँजी वृद्धि दर = २०.०% - ६.०% = १४.०% वास्तविक क्रयशक्ति वृद्धि भयो!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'सम्पत्ति लक्ष्य हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'जग्गाको भाउ दलालले भनेको उच्च बजार दरमा राखेर आफूलाई धनी सम्झनु।', correct: 'बजार भाउको ७०%-७५% वा सुरक्षित मालपोत दर मात्र प्रयोग गर्नुहोस्।', explanation: 'जग्गाको भाउ घटाएर हिसाब गर्दा बजार घट्दा पनि मानसिक रूपमा सुरक्षित रहिन्छ।' },
        { mistake: 'व्यक्तिगत गाडी र मोटरसाइकललाई पनि सम्पत्तिमा जोडेर हिसाब गर्नु।', correct: 'गाडीलाई सम्पत्तिबाट हटाउनुहोस् वा वार्षिक १५% मूल्य घटाउँदै (Depreciate) लैजानुहोस्।', explanation: 'सवारी साधनले पेट्रोल र मर्मत खर्च मात्र बढाउँछन्, यसले कुनै वित्तीय आम्दानी दिँदैन।' },
        { mistake: 'सामाजिक सुरक्षा कोष (SSF), CIT र सञ्चय कोषमा जम्मा भएको पैसा जोड्न बिर्सनु।', correct: 'आधिकारिक सरकारी पोर्टलमा लगइन गरेर वर्षभरि जम्मा भएको सम्पूर्ण रकम सम्पत्तिमा जोड्नुहोस्।', explanation: 'धेरैलाई थाहा हुन्न कि उनीहरूको तलबबाट काटिएको लाखौँ रुपैयाँ सरकारी कोषमा चक्रवर्ती ब्याज कमाइरहेको हुन्छ।' }
      ],
      definitions: [
        { term: 'खुद सम्पत्ति (Net Worth)', full: 'वास्तविक व्यक्तिगत पुँजी', meaning: 'आफ्नो नाममा भएका सम्पूर्ण सम्पत्तिहरूको मूल्यबाट तिर्न बाँकी सबै ऋण घटाएपछिको खुद रकम।' },
        { term: 'वास्तविक वृद्धि दर (Real Growth)', full: 'महँगी कटाएर भएको वृद्धि', meaning: 'बजारको मुद्रास्फीति घटाएपछि वास्तविक क्रयशक्तिमा भएको खुद प्रतिशत वृद्धि।' },
        { term: 'सिङ्किङ फन्ड (Sinking Fund)', full: 'विशेष उद्देश्यीय बचत कोष', meaning: 'भविष्यमा आउने निश्चित ठूला खर्चहरू (जस्तै कर, बिमा, मर्मत) का लागि नियमित रूपमा छुट्याइने कोष।' },
        { term: 'स्मार्ट वित्तीय लक्ष्य (SMART Goal)', full: 'मापनयोग्य आर्थिक योजना', meaning: 'स्पष्ट, मापन गर्न सकिने, प्राप्त गर्न सकिने, सान्दर्भिक र निश्चित समयसीमा तोकिएको लक्ष्य।' }
      ],
      faqs: [
        { q: 'के घरका फर्निचर र मोबाइल-ल्यापटपलाई पनि सम्पत्तिमा जोड्नुपर्छ?', a: 'पर्दैन। घरायसी सामान, लुगाफाटा र इलेक्ट्रोनिक्सको दोस्रो बजारमा पुनःबिक्री मूल्य नगण्य हुने भएकाले यसलाई हिसाबबाट हटाउनु नै राम्रो हुन्छ।' },
        { q: 'नेपालमा वार्षिक खुद सम्पत्ति वृद्धि कति प्रतिशत हुनुलाई राम्रो मानिन्छ?', a: 'महँगी दर कटाएर वार्षिक १०% देखि १५% को वास्तविक वृद्धि हुनु निकै उत्कृष्ट मानिन्छ। सम्पत्ति कमाउने उमेरमा (२५ देखि ४५ वर्ष) अनुशासित बचतले हरेक ५-६ वर्षमा पुँजी दोब्बर बनाउँछ।' },
        { q: 'यदि हिसाब गर्दा खुद सम्पत्ति माइनस (ऋणात्मक) देखियो भने के गर्ने?', a: 'आत्तिनु पर्दैन। नयाँ घर किन्दा वा शैक्षिक ऋण लिएका युवाहरूको नेटवर्थ सुरुमा ऋणात्मक हुनु सामान्य हो। अबको १-२ वर्ष फजुल खर्च रोकेर ऋणको साँवा घटाउन केन्द्रित हुनुहोस्।' }
      ],
      takeaways: [
        'मासिक तलब होइन, खुद सम्पत्ति (सम्पत्ति - ऋण) नै तपाईंको वास्तविक आर्थिक सफलताको ऐना हो।',
        'असार मसान्त वा वैशाख १ मा वर्षको एकपटक सम्पूर्ण परिवारको वित्तीय अडिट गर्नुहोस्।',
        'जग्गाको भाउ घटाएर सुरक्षित मूल्याङ्कन गर्नुहोस् र मोटरसाइकललाई सम्पत्तिमा नजोड्नुहोस्।',
        'SSF, CIT र सञ्चय कोषमा जम्मा भएको लाखौँ रुपैयाँ सम्पत्तिमा जोड्न नबिर्सनुहोस्।',
        'प्रत्येक वर्ष ३ वटा स्पष्ट लक्ष्य राखेर आफ्नो सम्पत्तिलाई निरन्तर चक्रवर्ती गति दिनुहोस्।'
      ]
    }
  }

};

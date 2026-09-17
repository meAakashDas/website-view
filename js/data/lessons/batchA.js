// BATCH A - PERSONAL FINANCE (4 lessons)
// BATCH B - INVESTING (3 lessons)
// BATCH C - NEPSE (5 lessons)

export const BATCH_A = {

  // ── A1. 50-30-20 BUDGET ──────────────────────────────────────────
  '50-30-20-budget-nepal': {
    id: 'pf-50-30-20',
    slug: '50-30-20-budget-nepal',
    categorySlug: 'personal-finance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '10 min practice', np: '१० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Nepal salary and expense data, FY 2081/82', np: 'नेपाल तलब र खर्च तथ्यांक, आव २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'The 50-30-20 Budget Rule for Nepal: Make Every Rupee Count',
      oneLineSummary: 'Split your take-home salary into three buckets - 50% needs, 30% wants, 20% savings - and you will never run out of money before month-end again.',
      summaryPoints: [
        'The 50-30-20 rule divides after-tax income: 50% for essential needs, 30% for discretionary wants, 20% for savings and investments.',
        'In Nepal, "needs" include rent, food, transport, utility bills, EMIs, and insurance premiums.',
        '"Wants" cover dining out, subscriptions, shopping, entertainment, and festival gifts.',
        'The 20% savings bucket should go first - not whatever is left over at month-end.',
        'The rule is a starting framework. It should be adjusted for Nepal\'s income reality: high-rent cities may shift to 60-20-20.'
      ],
      whatIsThis: 'The 50-30-20 budget rule is a percentage-based money management framework that divides your monthly after-tax income into three categories: 50% for needs (non-negotiable essentials), 30% for wants (discretionary spending), and 20% for savings and debt repayment. Unlike detailed line-item budgets that require hours of tracking, the 50-30-20 rule works with three numbers - making it easy to start today without any financial background.',
      whyItMatters: 'Most Nepalis run out of money 5-8 days before their next salary without knowing exactly where it went. The problem is not low income - it is unstructured spending. A household earning NPR 60,000/month can save NPR 12,000 (20%) consistently with this framework. Over 10 years, that NPR 12,000/month at 12% CAGR in a mutual fund SIP becomes NPR 27.9 Lakh - from a habit, not a windfall.',
      howItWorks: [
        { step: 1, title: 'Calculate Your After-Tax Take-Home Pay', desc: 'Your budget starts with what actually arrives in your bank account, not your gross salary. If your gross salary is NPR 70,000 and your employer deducts TDS and SSF, your actual take-home might be NPR 58,000-62,000. Use that number - not the gross - as your 100%.' },
        { step: 2, title: 'Identify Your 50% Needs', desc: 'List every non-negotiable monthly expense: rent or home loan EMI, groceries, cooking gas, electricity and water bills, internet, transport (bus/fuel), mobile recharge, children\'s school fees, loan EMIs, and health/life insurance premiums. If this total exceeds 50% of take-home, you are either overspending on rent or have too much debt - both fixable over time.' },
        { step: 3, title: 'Claim Your 30% Wants', desc: 'Everything that makes life enjoyable but is not strictly essential: restaurant meals, clothing beyond basics, streaming services, gym membership, weekend trips, festival gifts, hobby expenses. This is not guilt money - it is planned enjoyment. Without this bucket, budgets fail within 3 months.' },
        { step: 4, title: 'Automate Your 20% Savings First', desc: 'Set up a bank standing order or connectIPS mandate to automatically transfer 20% of take-home to a separate savings account or SIP on salary day. Pay yourself first. Whatever remains in your main account is your spending money for needs and wants. This single habit separates those who build wealth from those who intend to.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '50-30-20 Budget in Action - Monthly NPR 60,000 Take-Home (Kathmandu)',
        headers: ['Category', 'Percentage', 'Monthly Amount', 'What It Covers'],
        rows: [
          ['Needs', '50%', 'NPR 30,000', 'Rent NPR 15K + Groceries NPR 7K + Transport NPR 3K + Utilities NPR 3K + Insurance NPR 2K'],
          ['Wants', '30%', 'NPR 18,000', 'Dining out NPR 5K + Shopping NPR 5K + Entertainment NPR 3K + Misc NPR 5K'],
          ['Savings & Investment', '20%', 'NPR 12,000', 'SIP NPR 8K + Emergency Fund NPR 3K + Short-term goal NPR 1K'],
          ['Total', '100%', 'NPR 60,000', 'Full salary accounted for - zero leftover mystery money']
        ]
      },
      nepalContext: 'Kathmandu rent has risen sharply - a single room in Koteshwar or Imadol now costs NPR 12,000-18,000, often pushing "needs" above 50% for entry-level salaries. If your city pushes needs above 55%, shift to 60-20-20 temporarily. Outside Kathmandu (Pokhara, Biratnagar, Butwal), rent is lower - 50-30-20 often produces a larger savings bucket. Festival months (Dashain, Tihar, Chhath) typically spike "wants" by 150-200%. The rule: save for festivals from the 30% bucket during non-festival months, not by touching the 20% savings.',
      practicalScenario: {
        persona: 'Sanjay, 27, schoolteacher in Dharan',
        income: 'NPR 55,000 / month take-home',
        scenarioText: 'Sanjay never had enough money at month-end despite a stable government job. He spent whatever was in his account - no structure, no savings. He had tried Excel budgets twice but gave up within 2 weeks.',
        solutionText: 'He applied 50-30-20: Needs NPR 27,500 (rent NPR 10K, food NPR 8K, transport NPR 4K, utilities + phone NPR 5.5K). Wants NPR 16,500 (dining, clothes, weekend travel). Savings NPR 11,000 - set up a SIP mandate via NIBL Ace Capital on the 1st of each month. Result: in 8 months he had accumulated NPR 88,000 in his SIP - the first time he had ever seen his savings grow.',
        metricHighlight: 'NPR 88,000 saved in 8 months - first time savings grew consistently'
      },
      formula: {
        name: '50-30-20 Budget Formula',
        equation: '\\text{Needs} \\leq 0.50 \\times I \\quad | \\quad \\text{Wants} \\leq 0.30 \\times I \\quad | \\quad \\text{Savings} \\geq 0.20 \\times I',
        variables: [
          { symbol: 'I', name: 'After-Tax Take-Home Income', desc: 'The actual salary credited to your bank account after all employer deductions (TDS, SSF, etc.).' },
          { symbol: '0.50', name: 'Needs cap', desc: 'Maximum 50% on non-negotiable essentials. Exceeding this signals a rent or debt problem.' },
          { symbol: '0.20', name: 'Savings floor', desc: 'Minimum 20% for savings and investments - treated as a non-negotiable bill to yourself.' }
        ],
        exampleCalculation: 'Take-home NPR 55,000. Needs target: NPR 27,500 (≤50%). Wants target: NPR 16,500 (≤30%). Savings target: NPR 11,000 (≥20%). Monthly SIP of NPR 11,000 at 12% over 10 years = NPR 25.4 Lakh.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'See Your SIP Growth'
      },
      commonMistakes: [
        { mistake: 'Budgeting with gross salary instead of take-home pay.', correct: 'Always calculate 50-30-20 on the amount that actually hits your account. Gross salary includes TDS and SSF that never touch your wallet.', explanation: 'Using gross salary makes all three buckets appear larger than they are, leading to overspending in the needs and wants categories.' },
        { mistake: 'Saving whatever is "left over" at month-end instead of paying yourself first.', correct: 'Transfer savings on salary day - before spending anything. What remains is your spending budget.', explanation: 'Leftover savings average near zero for most people because spending expands to fill available cash.' },
        { mistake: 'Treating festival months as exceptions where the rule doesn\'t apply.', correct: 'Save for festivals by underspending the 30% wants bucket in the 2-3 months before Dashain and Tihar.', explanation: 'Treating every festival as an exception to budget rules destroys the entire system within the first year.' }
      ],
      definitions: [
        { term: 'Take-Home Pay', full: 'Net Income After Deductions', meaning: 'Your salary after employer deductions: TDS, SSF contribution, EPF/CIT, and any other statutory deductions. This is what you budget with.' },
        { term: 'Fixed Expenses', full: 'Non-Negotiable Monthly Costs', meaning: 'Costs that are the same every month and cannot easily be eliminated: rent, loan EMIs, insurance premiums, school fees.' },
        { term: 'Discretionary Spending', full: 'Wants / Variable Expenses', meaning: 'Money spent on things you enjoy but do not strictly need. These are the first expenses to cut if income drops.' },
        { term: 'Pay Yourself First', full: 'Pre-Commitment Savings Strategy', meaning: 'Automatically transferring your savings target before spending anything else - converting savings from an intention to a guaranteed habit.' }
      ],
      faqs: [
        { q: 'My rent alone takes 40% of my salary. How do I apply 50-30-20?', a: 'If rent is 40%, you only have 10% left for all other needs - which is impossible. Your options: (1) Find a flatmate to split rent, (2) Move to a cheaper area, (3) Shift temporarily to a 60-20-20 split where needs can go up to 60% but savings minimum stays at 20%. Never compress savings below 15% to cover rent.' },
        { q: 'Should loan EMIs go under "needs" or "savings"?', a: 'EMI on necessary loans (home loan, education loan) goes under "needs." EMI on discretionary loans (personal loan for a phone, consumer goods on EMI) goes under "wants." The key is whether the loan funded a need or a want.' },
        { q: 'Is 20% savings realistic in Nepal where salaries are low?', a: 'Even NPR 2,000/month of savings invested in a SIP at 12% for 20 years = NPR 18.6 Lakh. Start with whatever percentage is possible - even 5% - and increase by 1% every 3 months. A SIP mandate of NPR 500/month makes saving automatic even on low incomes.' }
      ],
      takeaways: [
        'Budget on take-home pay, not gross salary. Only the money in your account is real.',
        '50% for needs, 30% for wants, 20% for savings - in that priority order. But pay savings first.',
        'If Kathmandu rent pushes needs above 55%, use 60-20-20 until income or rent changes.',
        'Festival spending comes from the 30% wants bucket - save for it in advance, never borrow.',
        'NPR 11,000/month saved at 12% CAGR for 10 years = NPR 25.4 Lakh. Habits, not windfalls.'
      ]
    },
    np: {
      title: 'नेपालमा ५०-३०-२० बजेट नियम: प्रत्येक रुपैयाँ सार्थक बनाउनुहोस्',
      oneLineSummary: 'तलबलाई तीन भागमा बाँड्नुहोस् - ५०% आवश्यकता, ३०% इच्छा, २०% बचत - र महिना सकिनुअघि पैसा सकिने समस्या सदाका लागि हटाउनुहोस्।',
      summaryPoints: [
        '५०-३०-२० नियम: कर पछिको आम्दानीको ५०% अनिवार्य आवश्यकता, ३०% इच्छामूलक खर्च, २०% बचत र लगानी।',
        'नेपालमा "आवश्यकता"मा भाडा, खाना, यातायात, बिजुली-पानी, EMI, र बीमा प्रिमियम।',
        '"इच्छा"मा बाहिर खाना खानु, किनमेल, मनोरञ्जन, र चाडपर्वमा उपहार।',
        '२०% बचत पहिले छुट्याउनुहोस् - महिनाको अन्तमा बाँकी भए मात्र होइन।',
        'काठमाडौँमा भाडाले ५०% नाघे ६०-२०-२० मा सार्नुहोस् - बचत २०% भन्दा कम नगर्नुहोस्।'
      ],
      whatIsThis: '५०-३०-२० बजेट नियम कर पछिको मासिक आम्दानीलाई तीन भागमा बाँड्ने प्रतिशत-आधारित ढाँचा हो: ५०% आवश्यकता, ३०% इच्छा, र २०% बचत। लामो Excel ट्र्याकिङको सट्टा केवल तीन संख्याले काम गर्छ - आज नै सुरु गर्न सकिन्छ।',
      whyItMatters: 'अधिकांश नेपाली अर्को तलब आउनुभन्दा ५-८ दिन अघि नै सकिन्छ - कारण थाहा हुँदैन। समस्या कम आम्दानी होइन, संरचनाको अभाव हो। रु. ६०,000/महिना कमाउने परिवारले यो ढाँचाले रु. १२,000 (२०%) नियमित बचत गर्न सक्छ। १० वर्षमा रु. १२,000/महिना, १२% CAGR = रु. २७.९ लाख।',
      howItWorks: [
        { step: 1, title: 'कर-पछिको वास्तविक तलब गणना गर्नुहोस्', desc: 'बजेट बनाउँदा बैंक खातामा आएको रकम (Take-home) प्रयोग गर्नुहोस् - Gross तलब होइन। TDS र SSF काटिसकेपछि रु. ७०,000 Gross ≈ रु. ५८,000-६२,000 Take-home।' },
        { step: 2, title: '५०% आवश्यकता पहिचान गर्नुहोस्', desc: 'सबै अनिवार्य मासिक खर्च: भाडा वा गृहकर्जा EMI, किराना, खाना पकाउने ग्यास, बिजुली-पानी, इन्टरनेट, यातायात, मोबाइल, बच्चाको स्कुल शुल्क, ऋण EMI, र बीमा प्रिमियम।' },
        { step: 3, title: '३०% इच्छा क्षेत्र निर्धारण गर्नुहोस्', desc: 'जीवनलाई आनन्दमय बनाउने तर अनिवार्य नभएका खर्च: रेस्टुरेन्ट, लुगाकपडा, Streaming, जिम, सप्ताहान्त यात्रा, चाड उपहार। यो दोषी पैसा होइन - योजनाबद्ध आनन्द हो।' },
        { step: 4, title: '२०% बचत तलब दिनमा नै स्वचालित गर्नुहोस्', desc: 'तलब जम्मा भएकै दिन SIP म्यान्डेट वा बैंक Standing Order बाट २०% छुट्टै खातामा पठाउनुहोस्। बाँकी रकम मात्र खर्च गर्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: '५०-३०-२० बजेट व्यवहारमा - मासिक रु. ६०,000 Take-home (काठमाडौँ)',
        headers: ['श्रेणी', 'प्रतिशत', 'मासिक रकम', 'के समेटिन्छ'],
        rows: [
          ['आवश्यकता', '५०%', 'रु. ३०,000', 'भाडा रु. १५K + किराना रु. ७K + यातायात रु. ३K + सेवा रु. ३K + बीमा रु. २K'],
          ['इच्छा', '३०%', 'रु. १८,000', 'बाहिर खाना रु. ५K + किनमेल रु. ५K + मनोरञ्जन रु. ३K + विविध रु. ५K'],
          ['बचत र लगानी', '२०%', 'रु. १२,000', 'SIP रु. ८K + आपतकालीन कोष रु. ३K + अल्पकालीन लक्ष्य रु. १K'],
          ['जम्मा', '१००%', 'रु. ६०,000', 'सम्पूर्ण तलब हिसाब - अज्ञात खर्च शून्य']
        ]
      },
      nepalContext: 'काठमाडौँमा कोठा भाडा बढेको छ - कोटेश्वर वा इमाडोलमा एक कोठा रु. १२,000-१८,000 पर्छ, जसले प्रवेश-स्तरको तलबमा "आवश्यकता" ५०% नाघ्छ। यदि ५५% भन्दा बढी नाघ्छ भने ६०-२०-२० मा सार्नुहोस्। पोखरा, बिराटनगर, बुटवलमा भाडा कम - ५०-३०-२० ले ठूलो बचत देखाउँछ। दशैँ, तिहार, छठ महिनामा "इच्छा" खर्च १५०-२०० % बढ्न सक्छ - चाडको खर्च ३०% इच्छा बकेटबाट गैर-चाड महिनामा बचत गरेर।',
      practicalScenario: {
        persona: 'सञ्जय, २७ वर्ष, धरानमा सरकारी शिक्षक',
        income: 'मासिक रु. ५५,000 Take-home',
        scenarioText: 'सञ्जयको स्थिर सरकारी जागिर भए पनि महिनाको अन्त्यमा पैसा सकिन्थ्यो। संरचना थिएन, बचत थिएन। दुईपटक Excel बजेट बनाए तर २ हप्तामा छोडे।',
        solutionText: '५०-३०-२० लागू: आवश्यकता रु. २७,500 (भाडा रु. १०K, खाना रु. ८K, यातायात रु. ४K, सेवाहरू रु. ५.५K)। इच्छा रु. १६,500। बचत रु. ११,000 - महिनाको १ गते NIBL Ace Capital मा SIP म्यान्डेट। ८ महिनामा SIP मा रु. ८८,000 जम्मा - पहिलो पटक बचत वृद्धि भयो।',
        metricHighlight: '८ महिनामा रु. ८८,000 बचत - पहिलो पटक नियमित बचत'
      },
      formula: {
        name: '५०-३०-२० बजेट सूत्र',
        equation: '\\text{आवश्यकता} \\leq 0.50 \\times I \\quad | \\quad \\text{इच्छा} \\leq 0.30 \\times I \\quad | \\quad \\text{बचत} \\geq 0.20 \\times I',
        variables: [
          { symbol: 'I', name: 'कर पछिको Take-home आम्दानी', desc: 'TDS, SSF आदि काटिसकेपछि बैंकमा आउने वास्तविक रकम।' },
          { symbol: '0.50', name: 'आवश्यकता सीमा', desc: 'अनिवार्य खर्च अधिकतम ५०%। यो नाघे भाडा वा ऋणको समस्या।' },
          { symbol: '0.20', name: 'बचत न्यूनतम', desc: 'बचत र लगानीका लागि कम्तीमा २०% - आफैँलाई तिर्ने अनिवार्य बिल।' }
        ],
        exampleCalculation: 'Take-home रु. ५५,000। आवश्यकता लक्ष्य: रु. २७,500 (≤५०%)। इच्छा लक्ष्य: रु. १६,500 (≤३०%)। बचत लक्ष्य: रु. ११,000 (≥२०%)। मासिक SIP रु. ११,000, १२%, १० वर्ष = रु. २५.४ लाख।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'SIP वृद्धि हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'Gross तलबमा बजेट बनाउनु।', correct: 'सधैँ Take-home (बैंकमा आएको) रकममा बजेट। TDS र SSF कहिल्यै तपाईँको खातामा आउँदैन।', explanation: 'Gross मा बजेट बनाउँदा सबै तीन बकेट ठूला देखिन्छन् - यसले आवश्यकता र इच्छा बकेटमा बढी खर्च हुन्छ।' },
        { mistake: 'महिनाको अन्तमा "बाँकी" भए मात्र बचत गर्नु।', correct: 'तलब दिनमा नै बचत पठाउनुहोस् - बाँकी खर्च गर्नुहोस्।', explanation: 'बाँकी बचत प्रायः शून्य हुन्छ किनभने खर्च उपलब्ध पैसासम्म फैलिन्छ।' },
        { mistake: 'चाड-पर्वलाई नियमको अपवाद मान्नु।', correct: '३०% इच्छा बकेटबाट चाडको लागि गैर-चाड महिनामा बचत गर्नुहोस्।', explanation: 'हर चाडलाई अपवाद मान्दा पूरै बजेट प्रणाली पहिलो वर्षमै भत्किन्छ।' }
      ],
      definitions: [
        { term: 'Take-Home Pay', full: 'कर काटिसकेपछिको खुद आम्दानी', meaning: 'TDS, SSF, EPF/CIT काटिसकेपछि बैंकमा जम्मा हुने रकम। यसमा मात्र बजेट।' },
        { term: 'स्थिर खर्च', full: 'Fixed Expenses', meaning: 'हर महिना उस्तै हुने, हटाउन नसकिने खर्च: भाडा, ऋण EMI, बीमा प्रिमियम, स्कुल शुल्क।' },
        { term: 'इच्छामूलक खर्च', full: 'Discretionary Spending', meaning: 'रमाइलाका लागि खर्च जो काट्न सकिन्छ: बाहिर खाना, किनमेल, मनोरञ्जन।' },
        { term: 'आफैँलाई पहिले तिर्नुहोस्', full: 'Pay Yourself First', meaning: 'तलब दिनमा नै बचत स्वचालित रूपमा छुट्याउने रणनीति - बचत अभिप्रायबाट बानीमा रूपान्तरण।' }
      ],
      faqs: [
        { q: 'मेरो भाडाले मात्र ४०% लैजान्छ। ५०-३०-२० कसरी लागू गर्ने?', a: 'भाडा ४०% भए बाँकी आवश्यकताका लागि केवल १०% - असम्भव। विकल्प: (१) फ्ल्याटमेट राख्नुहोस्, (२) सस्तो क्षेत्रमा सर्नुहोस्, (३) ६०-२०-२० मा सर्नुहोस् - तर बचत २०% भन्दा कम नगर्नुहोस्।' },
        { q: 'ऋण EMI "आवश्यकता" कि "इच्छा"मा राख्ने?', a: 'आवश्यक ऋण (गृहकर्जा, शिक्षा ऋण) EMI = आवश्यकता। इच्छामूलक ऋण (फोन, उपभोग्य वस्तु) EMI = इच्छा।' },
        { q: 'नेपालमा कम तलबमा २०% बचत सम्भव छ?', a: 'रु. २,000/महिना बचत, १२%, २० वर्ष = रु. १८.६ लाख। जो सम्भव छ त्यसबाट सुरु गर्नुहोस् - ५% देखि पनि। हर ३ महिनामा १% थप्नुहोस्।' }
      ],
      takeaways: [
        'Take-home तलबमा बजेट बनाउनुहोस् - Gross मा होइन। बैंकमा आएको रकम मात्र वास्तविक।',
        '५०% आवश्यकता, ३०% इच्छा, २०% बचत - बचत पहिले छुट्याउनुहोस्।',
        'काठमाडौँ भाडाले ५५% नाघे ६०-२०-२० - बचत २०% कहिल्यै नघटाउनुहोस्।',
        'चाड खर्च ३०% इच्छाबाट अग्रिम बचत गरेर - ऋण लिएर होइन।',
        'रु. ११,000/महिना, १२% CAGR, १० वर्ष = रु. २५.४ लाख। बानीले बनाउने धन।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'See how your 20% monthly savings compounds into wealth over time.' }
    ],
    downloadableResources: [
      { title: 'Nepal Monthly Budget Worksheet (PDF)', type: 'PDF Template', format: 'PDF Document', size: '200 KB', href: 'assets/downloads/nepal-personal-budget-planner.csv' }
    ]
  },

  // ── A2. FESTIVAL EXPENSES ────────────────────────────────────────
  'festival-expenses-nepal': {
    id: 'pf-festival-expenses',
    slug: 'festival-expenses-nepal',
    categorySlug: 'personal-finance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '7 min read', np: '७ मिनेट पढाइ' },
    masteryTime: { en: '10 min practice', np: '१० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Based on Nepal household spending surveys and festival borrowing patterns', np: 'नेपाल गार्हस्थ्य खर्च सर्वेक्षण र चाड ऋण अनुसन्धानमा आधारित' },
    prerequisites: { en: 'Basic understanding of monthly budgeting', np: 'मासिक बजेटको आधारभूत ज्ञान' },
    en: {
      title: 'Managing Festival Expenses in Nepal: Dashain, Tihar & Beyond Without Debt',
      oneLineSummary: 'Nepal\'s festivals are a financial stress test for most households. Here is the exact system to enjoy Dashain and Tihar fully - without borrowing or wiping out savings.',
      summaryPoints: [
        'Dashain, Tihar, and Chhath together cost the average Kathmandu household NPR 40,000-80,000 in under 6 weeks.',
        'Most Nepalis fund festivals with salary advances, informal loans, or credit - paying 24-36% annual interest.',
        'The fix: a dedicated Festival Fund - save a fixed monthly amount from April to September, spend guilt-free in October-November.',
        'Calculate your festival budget in June. Divide by months remaining. Set up a recurring bank transfer.',
        'Overspending on gifts and clothes is social pressure, not obligation. A pre-committed budget protects against it.'
      ],
      whatIsThis: 'Festival expenses in Nepal are a predictable annual event that most families treat as a financial surprise. Dashain falls in Ashwin/Kartik (September-October), Tihar two weeks later, and Chhath shortly after. Together, they concentrate 2-4 months of discretionary spending into 6 weeks. The financial challenge is not the spending itself - it is the lack of preparation. A festival fund is a simple savings system that spreads this predictable cost across 10-12 months, eliminating the debt that most families carry into November.',
      whyItMatters: 'According to Nepal household surveys, over 60% of urban households borrow money for Dashain - from employers (salary advance), relatives, or informal moneylenders at 24-36% annual interest. A family borrowing NPR 30,000 for Dashain at 3% monthly interest and repaying over 4 months pays NPR 31,800 - spending NPR 1,800 extra for the same celebration. Over 10 years of Dashain borrowing, this habit costs NPR 18,000 in pure interest. A festival fund costs nothing extra.',
      howItWorks: [
        { step: 1, title: 'Budget Your Festival Total in Advance', desc: 'In July (3 months before Dashain), list every expected expense: gifts for elders (dakshina), new clothes for children, ritual items (flower garlands, oil lamps, puja materials), meat and sweets, travel to hometown, and a buffer for unplanned costs. Be specific and honest - this is not a wish list, it is a plan.' },
        { step: 2, title: 'Calculate Your Monthly Festival Saving', desc: 'Divide your total festival budget by the number of months until Dashain. If your total is NPR 48,000 and you start saving in April (6 months before), you need NPR 8,000/month. This goes into a separate savings account - not your emergency fund, not your investment account.' },
        { step: 3, title: 'Open a Dedicated Festival Account', desc: 'At your bank, open a separate savings account labeled "Festival Fund." Set up a standing instruction to transfer your festival amount automatically every month on salary day. Do not touch this account before Dashain. The separation removes the temptation to "borrow" from it.' },
        { step: 4, title: 'Spend Guilt-Free Within Budget During Festival', desc: 'When Dashain arrives, you have a full festival budget already saved. Spend it completely and without guilt - this is money you earned and saved deliberately. The rule: once the festival account is empty, spending stops. No top-ups from salary, savings, or credit.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Nepal Festival Expense Calendar - Savings Plan (NPR 48,000 Target)',
        headers: ['Month (BS)', 'Action', 'Monthly Save', 'Running Total'],
        rows: [
          ['Baishakh (Apr)', 'Open Festival Account, set standing order', 'NPR 8,000', 'NPR 8,000'],
          ['Jestha (May)', 'Automatic transfer', 'NPR 8,000', 'NPR 16,000'],
          ['Ashadh (Jun)', 'Automatic transfer', 'NPR 8,000', 'NPR 24,000'],
          ['Shrawan (Jul)', 'Automatic transfer', 'NPR 8,000', 'NPR 32,000'],
          ['Bhadra (Aug)', 'Automatic transfer', 'NPR 8,000', 'NPR 40,000'],
          ['Ashwin (Sep)', 'Automatic transfer', 'NPR 8,000', 'NPR 48,000 ✅ Ready for Dashain']
        ]
      },
      nepalContext: 'In Nepal, festival social obligations are real and vary by family, region, and caste. Dakshina (cash gift to elders) ranges from NPR 100 to NPR 2,000+ per person. Naya kapada (new clothes for all children) costs NPR 3,000-8,000 per child. Meat expenses (mutton, goat) cost NPR 1,500-3,000/kg in festival season - 30-50% more than non-festival prices. Tihar costs include oil lamps, flowers, sweets, and new clothes again. Many Kathmandu residents also travel to their gaun (hometown), adding NPR 5,000-15,000 in bus or flight costs. All of this is predictable - and therefore plannable.',
      practicalScenario: {
        persona: 'Kamala, 45, housewife managing family finances in Kathmandu',
        income: 'Husband\'s salary NPR 80,000/month',
        scenarioText: 'Every year, Kamala would scramble for money in September. They\'d take a salary advance of NPR 30,000 from her husband\'s employer, borrow NPR 20,000 from a brother-in-law, and still end up with unfinished festival shopping. The repayment stretched into February, affecting monthly savings.',
        solutionText: 'In Baishakh (April), Kamala listed the family\'s festival needs: dakshina NPR 8,000, clothes for 3 children NPR 18,000, puja items NPR 5,000, meat and sweets NPR 10,000, hometown travel NPR 7,000 = total NPR 48,000. Monthly saving: NPR 8,000 from the "wants" portion of her 50-30-20 budget. By Ashwin, the festival account had the full amount. Zero borrowing - first time in 12 years.',
        metricHighlight: 'Zero borrowing for festival - first time in 12 years of marriage'
      },
      formula: {
        name: 'Festival Monthly Saving Formula',
        equation: '\\text{Monthly Festival Save} = \\frac{\\text{Total Festival Budget}}{\\text{Months Until Dashain}}',
        variables: [
          { symbol: 'Total Festival Budget', name: 'All planned festival expenses', desc: 'Gifts + Clothes + Food/Meat + Puja materials + Travel + 10% buffer.' },
          { symbol: 'Months Until Dashain', name: 'Savings horizon', desc: 'Number of months from when you start saving to Dashain month. Starting in April gives 6 months.' }
        ],
        exampleCalculation: 'Total budget NPR 48,000. Start saving in April (6 months). Monthly save = 48,000 ÷ 6 = NPR 8,000/month. No borrowing, no interest.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Your Savings Plan'
      },
      commonMistakes: [
        { mistake: 'Funding festivals with salary advances or informal loans.', correct: 'Build a festival fund from April to September. Salary advances cost you salary continuity; informal loans cost 24-36% annual interest.', explanation: 'A family paying NPR 1,800 extra on a NPR 30,000 festival loan every year for 10 years wastes NPR 18,000 in interest alone.' },
        { mistake: 'Not having a specific festival budget before shopping starts.', correct: 'Write down every expense in July and commit to that number. Unplanned festival shopping expands to fill available cash.', explanation: 'Without a pre-set number, social pressure and peer comparison push spending far beyond income.' },
        { mistake: 'Using the emergency fund or investment SIP to cover festival shortfalls.', correct: 'Keep the festival fund completely separate from emergency fund and investments.', explanation: 'Touching investments for predictable annual expenses breaks the compounding cycle and signals financial planning failure.' }
      ],
      definitions: [
        { term: 'Festival Fund', full: 'Dedicated Seasonal Savings Account', meaning: 'A separate savings account used exclusively to accumulate money for predictable annual festival expenses. Kept separate to prevent cross-contamination with daily spending or emergency fund.' },
        { term: 'Dakshina', full: 'Cash Gift to Elders (दक्षिणा)', meaning: 'A traditional monetary gift given to elders, priests, and respected family members during Dashain. Amounts vary by family tradition and relationship.' },
        { term: 'Salary Advance', full: 'Pre-Salary Borrowing from Employer', meaning: 'Receiving next month\'s salary early. Effectively depletes the following month\'s income, creating a recurring deficit that many families never recover from.' },
        { term: 'Sinking Fund', full: 'Savings Set Aside for a Known Future Expense', meaning: 'Any savings account created for a specific, predictable future expense. A festival fund is a type of sinking fund.' }
      ],
      faqs: [
        { q: 'What if I can\'t save NPR 8,000/month - my income is too low?', a: 'Reduce the festival budget, not the savings habit. A NPR 20,000 festival budget needs only NPR 3,333/month saved from April. The discipline of planning matters more than the amount. Even a small festival fund prevents borrowing.' },
        { q: 'Should I put festival savings in a fixed deposit for higher interest?', a: 'A regular savings account is fine - the interest difference on 6 months is small. The more important goal is keeping festival money completely separate and accessible when needed. An FD with a premature withdrawal penalty can create friction.' },
        { q: 'How do I handle relatives who expect more than my festival budget allows?', a: 'The amount of your festival spending is not your relatives\' financial decision. Dakshina amounts are personal. Politely giving NPR 500 instead of NPR 2,000 and not borrowing to do it is far better than impressing for one day and repaying for four months.' }
      ],
      takeaways: [
        'Dashain + Tihar + Chhath can cost NPR 40,000-80,000 in 6 weeks. Plan, don\'t panic.',
        'Start a Festival Fund in April. Save monthly. Spend only from this account in festival months.',
        'Monthly save = Total Festival Budget ÷ Months until Dashain. Simple and effective.',
        'Never fund festivals with salary advances or informal loans - they cost 24-36% annual interest.',
        'Zero borrowing is possible. The 12% you don\'t pay in interest is worth more than a bigger celebration.'
      ]
    },
    np: {
      title: 'नेपालमा चाडपर्वको खर्च व्यवस्थापन: ऋण बिना दशैँ, तिहार र छठ मनाउने तरिका',
      oneLineSummary: 'दशैँ र तिहार नेपाली घरपरिवारको आर्थिक परीक्षण हो। ऋण नलिइ र बचत नोक्सान नगरी चाड पूर्ण रूपमा मनाउने सटिक प्रणाली।',
      summaryPoints: [
        'दशैँ, तिहार र छठले ६ हप्तामा काठमाडौँ परिवारलाई औसत रु. ४०,000-८०,000 खर्च गराउँछ।',
        'अधिकांश नेपाली तलब अग्रिम, अनौपचारिक ऋण वा उधारोमा चाड मनाउँछन् - वार्षिक २४-३६% ब्याज।',
        'समाधान: चाड कोष - अप्रिलदेखि सेप्टेम्बरसम्म मासिक बचत गर्नुहोस्, अक्टोबर-नोभेम्बरमा निर्विघ्न खर्च।',
        'जुनमा चाड बजेट बनाउनुहोस्, बाँकी महिनाले भाग्दा मासिक बचत रकम।',
        'उपहार र लुगाको अतिरिक्त खर्च सामाजिक दबाब हो - पूर्व-तय बजेटले यसबाट जोगाउँछ।'
      ],
      whatIsThis: 'नेपालमा चाडपर्वको खर्च वार्षिक नियमित घटना हो जसलाई अधिकांश परिवार आर्थिक आश्चर्यको रूपमा लिन्छन्। दशैँ असोज/कार्तिकमा, तिहार दुई हप्तापछि, र छठ त्यसपछि - मिलेर ६ हप्तामा २-४ महिनाको विवेकाधीन खर्च केन्द्रित हुन्छ। चाड कोष यो अनुमानित खर्चलाई १०-१२ महिनामा फैलाउने सरल बचत प्रणाली हो।',
      whyItMatters: 'नेपाल गार्हस्थ्य सर्वेक्षण अनुसार ६०% भन्दा बढी शहरी परिवार दशैँका लागि ऋण लिन्छन् - नियोक्ताबाट तलब अग्रिम, आफन्तबाट, वा अनौपचारिक साहूबाट। रु. ३०,000 दशैँ ऋण, ३% मासिक ब्याज, ४ महिना = रु. ३१,800 खर्च - रु. १,800 अतिरिक्त उही चाडका लागि। १० वर्षको दशैँ ऋणमा रु. १८,000 शुद्ध ब्याज। चाड कोषमा अतिरिक्त खर्च शून्य।',
      howItWorks: [
        { step: 1, title: 'अग्रिम चाड बजेट बनाउनुहोस्', desc: 'जुलाई (दशैँभन्दा ३ महिना अघि) मा सबै अपेक्षित खर्च सूचीबद्ध: दक्षिणा, बच्चाहरूको नयाँ लुगा, पूजा सामग्री, मासु र मिठाई, गाउँ यात्रा, र अनियोजित खर्चको बफर। इमानदार रहनुहोस् - यो इच्छा सूची होइन, योजना हो।' },
        { step: 2, title: 'मासिक चाड बचत गणना गर्नुहोस्', desc: 'कुल चाड बजेटलाई दशैँसम्मको महिना संख्याले भाग्नुहोस्। अप्रिलदेखि बचत सुरु गरे (६ महिना), कुल रु. ४८,000 = मासिक रु. ८,000। छुट्टै बचत खातामा - आपतकालीन कोष वा लगानी खातामा होइन।' },
        { step: 3, title: 'समर्पित चाड खाता खोल्नुहोस्', desc: 'बैंकमा छुट्टै बचत खाता खोल्नुहोस् - "चाड कोष" नाम राख्नुहोस्। तलब दिनमा स्वचालित हस्तान्तरण। दशैँ नआउँदासम्म नछुनुहोस्।' },
        { step: 4, title: 'चाडमा बजेट भित्र निर्विघ्न खर्च गर्नुहोस्', desc: 'दशैँमा पूरा जम्मा भएको रकम अपराधबोध बिना खर्च गर्नुहोस् - यो आफैँले कमाएर राखेको हो। चाड खाता रित्तिएपछि खर्च बन्द। तलब, बचत वा उधारोबाट थप होइन।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपाल चाड खर्च क्यालेन्डर - बचत योजना (लक्ष्य रु. ४८,000)',
        headers: ['महिना (बिसं)', 'कार्य', 'मासिक बचत', 'जम्मा'],
        rows: [
          ['बैशाख (अप्रिल)', 'चाड खाता खोल्नुहोस्, Standing Order', 'रु. ८,000', 'रु. ८,000'],
          ['जेठ (मे)', 'स्वचालित हस्तान्तरण', 'रु. ८,000', 'रु. १६,000'],
          ['असाढ (जुन)', 'स्वचालित हस्तान्तरण', 'रु. ८,000', 'रु. २४,000'],
          ['साउन (जुलाई)', 'स्वचालित हस्तान्तरण', 'रु. ८,000', 'रु. ३२,000'],
          ['भदौ (अगस्ट)', 'स्वचालित हस्तान्तरण', 'रु. ८,000', 'रु. ४०,000'],
          ['असोज (सेप्टेम्बर)', 'स्वचालित हस्तान्तरण', 'रु. ८,000', 'रु. ४८,000 ✅ दशैँका लागि तयार']
        ]
      },
      nepalContext: 'नेपालमा चाडपर्वको सामाजिक दायित्व वास्तविक हो। दक्षिणा: रु. १००-२,000+ प्रति व्यक्ति। बच्चाहरूको नयाँ लुगा: रु. ३,000-८,000 प्रति बच्चा। मासु (खसी/बोका): चाडमा रु. १,500-३,000/kg (सामान्यभन्दा ३०-५०% महँगो)। तिहारमा दीयो, फूल, मिठाई र फेरि लुगा। काठमाडौँका धेरैले गाउँ यात्रा गर्छन् - बस/हवाईजहाज रु. ५,000-१५,000। सबै अनुमानयोग्य - र योजनायोग्य।',
      practicalScenario: {
        persona: 'कमला, ४५ वर्ष, काठमाडौँमा परिवारको वित्त व्यवस्थापन गर्ने गृहिणी',
        income: 'पतिको तलब मासिक रु. ८०,000',
        scenarioText: 'हर वर्ष सेप्टेम्बरमा कमलालाई पैसाको तनाव हुन्थ्यो। पतिको कार्यालयबाट रु. ३०,000 तलब अग्रिम, देवरबाट रु. २०,000 उधारो - अनि पनि किनमेल अधुरो। फर्काउने क्रम फेब्रुअरीसम्म चल्थ्यो।',
        solutionText: 'बैशाखमा कमलाले परिवारको चाड आवश्यकता सूचीबद्ध गरिन्: दक्षिणा रु. ८,000, ३ बच्चाको लुगा रु. १८,000, पूजा सामग्री रु. ५,000, मासु-मिठाई रु. १०,000, गाउँ यात्रा रु. ७,000 = जम्मा रु. ४८,000। ५०-३०-२० को "इच्छा" बकेटबाट मासिक रु. ८,000। असोजमा पूरा रकम तयार। १२ वर्षमा पहिलो पटक शून्य ऋण।',
        metricHighlight: 'शून्य ऋण चाडमा - विवाहका १२ वर्षमा पहिलो पटक'
      },
      formula: {
        name: 'चाड मासिक बचत सूत्र',
        equation: '\\text{मासिक चाड बचत} = \\frac{\\text{कुल चाड बजेट}}{\\text{दशैँसम्मको महिना}}',
        variables: [
          { symbol: 'कुल चाड बजेट', name: 'सबै योजनाबद्ध चाड खर्च', desc: 'उपहार + लुगा + खाना/मासु + पूजा + यात्रा + १०% बफर।' },
          { symbol: 'दशैँसम्मको महिना', name: 'बचत अवधि', desc: 'बचत सुरु गरेको महिनादेखि दशैँसम्मको महिना संख्या।' }
        ],
        exampleCalculation: 'कुल बजेट रु. ४८,000। अप्रिलदेखि बचत (६ महिना)। मासिक बचत = ४८,000 ÷ ६ = रु. ८,000। शून्य ऋण, शून्य ब्याज।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'बचत योजना गणना गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'तलब अग्रिम वा अनौपचारिक ऋणले चाड मनाउनु।', correct: 'अप्रिलदेखि चाड कोष बनाउनुहोस्। तलब अग्रिमले आगामी महिनाको आम्दानी घटाउँछ।', explanation: 'रु. ३०,000 चाड ऋणमा हर वर्ष रु. १,800 ब्याज = १० वर्षमा रु. १८,000 शुद्ध नोक्सान।' },
        { mistake: 'किनमेल सुरु गर्नुअघि विशेष बजेट नबनाउनु।', correct: 'जुलाईमा नै प्रत्येक खर्च सूचीबद्ध गर्नुहोस् र त्यो रकममा प्रतिबद्ध।', explanation: 'पूर्व-निर्धारित रकम नभई किनमेल गर्दा सामाजिक दबाबले खर्च धेरै बढाउँछ।' },
        { mistake: 'आपतकालीन कोष वा SIP बाट चाड खर्च गर्नु।', correct: 'चाड कोष आपतकालीन कोष र लगानीबाट सधैँ छुट्टै राख्नुहोस्।', explanation: 'अनुमानयोग्य वार्षिक खर्चका लागि लगानी छुनु चक्रवृद्धि चक्र तोड्छ।' }
      ],
      definitions: [
        { term: 'चाड कोष', full: 'Festival Fund', meaning: 'चाडपर्वको अनुमानित वार्षिक खर्चका लागि मात्र राखिएको छुट्टै बचत खाता।' },
        { term: 'दक्षिणा', full: 'Cash Gift to Elders', meaning: 'दशैँमा ज्येष्ठ, गुरु, र आदरणीय परिवारलाई दिइने परम्परागत नगद उपहार।' },
        { term: 'तलब अग्रिम', full: 'Salary Advance', meaning: 'आगामी महिनाको तलब अग्रिम लिनु। यसले अर्को महिनाको आम्दानी घटाउँछ - दोहोरो घाटाको चक्र।' },
        { term: 'Sinking Fund', full: 'पूर्व-निर्धारित खर्च बचत', meaning: 'कुनै ज्ञात भावी खर्चका लागि अग्रिम बचत गरिएको खाता। चाड कोष एक प्रकारको Sinking Fund।' }
      ],
      faqs: [
        { q: 'रु. ८,000/महिना बचत गर्न सकिँदैन - आम्दानी कम छ।', a: 'चाड बजेट घटाउनुहोस् - बचत बानी नभत्काउनुहोस्। रु. २०,000 चाड बजेटलाई अप्रिलदेखि ६ महिनामा मासिक केवल रु. ३,333 चाहिन्छ।' },
        { q: 'चाड बचत FD मा राख्दा बढी ब्याज पाइन्छ?', a: 'साधारण बचत खाता पनि ठीक छ - ६ महिनाको ब्याज अन्तर न्यून। बढी महत्त्वपूर्ण: चाड पैसा पूर्ण छुट्टै र पहुँचयोग्य राख्नु। समयपूर्व झिक्दा जरिमाना लाग्ने FD अवरोध बन्न सक्छ।' },
        { q: 'आफन्तले धेरै दक्षिणा अपेक्षा गर्छन् - के गर्ने?', a: 'तपाईँको चाड खर्च आफन्तको निर्णय होइन। रु. ५०० दक्षिणा दिएर ऋण नलिनु, रु. २,000 दिएर ४ महिना फर्काउनुभन्दा राम्रो।' }
      ],
      takeaways: [
        'दशैँ + तिहार + छठ = ६ हप्तामा रु. ४०,000-८०,000। योजना बनाउनुहोस् - आत्तिनुहोस् नाई।',
        'अप्रिलमा चाड कोष खोल्नुहोस्। मासिक बचत। चाड महिनामा यही खाताबाट मात्र खर्च।',
        'मासिक बचत = कुल चाड बजेट ÷ दशैँसम्मको महिना।',
        'तलब अग्रिम वा ऋणले चाड मनाउनु ≈ २४-३६% ब्याज - शून्य लाभ।',
        'शून्य ऋण सम्भव छ। ब्याजमा नतिरेको १२% ठूलो चाडभन्दा बढी मूल्यवान।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate how small monthly festival savings compound when invested after the festival.' }
    ],
    downloadableResources: [
      { title: 'Nepal Festival Budget Planner (PDF)', type: 'PDF Template', format: 'PDF Document', size: '180 KB', href: 'assets/downloads/nepal-personal-budget-planner.csv' }
    ]
  },

  // ── A3. PAY YOURSELF FIRST ───────────────────────────────────────
  'pay-yourself-first-nepal': {
    id: 'pf-pay-yourself-first',
    slug: 'pay-yourself-first-nepal',
    categorySlug: 'personal-finance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '7 min read', np: '७ मिनेट पढाइ' },
    masteryTime: { en: '10 min to set up autopay', np: '१० मिनेट Auto-Pay सेटअप' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Based on behavioral economics research and Nepal salary patterns', np: 'व्यवहारिक अर्थशास्त्र अनुसन्धान र नेपाल तलब ढाँचामा आधारित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'Pay Yourself First: Nepal\'s Most Powerful Savings Habit',
      oneLineSummary: 'Instead of saving what is left after spending, spend only what is left after saving. This one reversal builds more wealth than any investment tip.',
      summaryPoints: [
        'Pay Yourself First means automatically moving your savings target on salary day - before spending anything else.',
        'Behavioral research shows that money not seen is money not spent. Automation makes saving effortless.',
        'Even NPR 2,000/month saved from a first salary at 22 becomes NPR 90 Lakh by age 55 at 12% CAGR.',
        'The method works regardless of income level - it is a percentage, not a rupee amount.',
        'Set up a connectIPS SIP mandate or bank standing order on your salary date for guaranteed execution.'
      ],
      whatIsThis: 'Pay Yourself First (PYF) is a savings strategy where you treat your personal savings as the first and most important expense of the month - paid automatically on salary day, before groceries, rent, or anything else. The standard alternative - saving whatever is "left over" - fails because there is almost never anything left. PYF removes willpower from the equation entirely by automating the savings transfer.',
      whyItMatters: 'Willpower is unreliable. Studies show that people with automatic savings contributions build 3-4× more wealth over 20 years than people with the same income who save manually. In Nepal, where most people intend to save but never do, the PYF habit is the single most impactful financial change any salaried person can make. It converts a savings intention into a guaranteed outcome.',
      howItWorks: [
        { step: 1, title: 'Decide Your Savings Percentage', desc: 'Choose a savings rate - ideally 20% of take-home pay as per the 50-30-20 rule. If 20% feels too high right now, start with 5% or even 2%. The percentage matters less than the habit. Increase by 1% every 3 months until you reach 20%.' },
        { step: 2, title: 'Choose Where the Money Goes', desc: 'For long-term wealth: set up a mutual fund SIP via connectIPS mandate (NIBL Ace Capital, Nabil Investment Banking, etc.). For medium-term goals: a separate bank account. For both: split the savings between a SIP and a savings account. The key is that it leaves your main salary account automatically.' },
        { step: 3, title: 'Set Up the Automation on Salary Day', desc: 'Contact your fund manager (online) or bank (branch or app) to set up a standing order or SIP mandate on your salary credit date (or 1-2 days after to ensure salary has arrived). Once set up, this requires zero effort every month. Your savings happen whether you think about them or not.' },
        { step: 4, title: 'Live on What Remains', desc: 'After your savings leave, your account balance is your actual spending money. This becomes your reference point for all expenses. The discomfort of a smaller-looking balance is the point - it naturally reduces frivolous spending without needing to track every expense.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Manual Saving vs Pay Yourself First - 10-Year Outcome Comparison (NPR 65,000 Take-Home)',
        headers: ['Approach', 'Monthly Amount Saved', '10-Year Total Saved', '10-Year Corpus at 12%', 'Result'],
        rows: [
          ['Save what\'s left (traditional)', 'NPR 2,000 average (varies widely)', 'NPR 2,40,000', 'NPR 4,64,000', 'Inconsistent, low wealth'],
          ['Pay Yourself First - 10%', 'NPR 6,500 (automatic)', 'NPR 7,80,000', 'NPR 15,09,000', 'Consistent, 3× more wealth'],
          ['Pay Yourself First - 20%', 'NPR 13,000 (automatic)', 'NPR 15,60,000', 'NPR 30,18,000', 'On track for financial freedom']
        ]
      },
      nepalContext: 'In Nepal, most private sector employees receive salary on the last working day of the Nepali month. Set your SIP mandate or bank standing order to trigger on the 1st or 2nd of each month (1-2 days after typical salary credit). Government employees (government salary credited by the 25th of BS month) should set automation for the 26th or 27th. If your salary is irregular (freelance, consulting), set a weekly trigger: every Monday, transfer a fixed small amount to your savings. The automation principle works for any income pattern.',
      practicalScenario: {
        persona: 'Kritika, 23, first salary at a BPO in Butwal',
        income: 'NPR 28,000 / month take-home',
        scenarioText: 'Kritika received her first salary of NPR 28,000 and spent most of it within 2 weeks - new clothes, dining with friends, and sending money home. She intended to "save next month." Three months later, she had no savings.',
        solutionText: 'She set up a SIP mandate for NPR 2,000/month (about 7% of take-home) via NIBL Ace Capital\'s app on the 2nd of every month. Her account auto-deducted before she could spend. She initially felt short but adjusted her spending. 2 years later: NPR 54,000 invested, portfolio NPR 62,400. She then increased to NPR 3,000/month. "I stopped thinking about it and it just happened," she said.',
        metricHighlight: 'NPR 62,400 portfolio after 2 years - by not thinking about saving'
      },
      formula: {
        name: 'Pay Yourself First Savings Target',
        equation: '\\text{PYF Amount} = \\text{Take-Home Pay} \\times \\text{Target Savings Rate}',
        variables: [
          { symbol: 'Take-Home Pay', name: 'After-tax salary in bank', desc: 'The actual amount credited to your account after TDS and SSF.' },
          { symbol: 'Target Savings Rate', name: 'Your chosen percentage (5%-20%+)', desc: 'Start with what is comfortable, not what is ideal. 5% is infinitely better than 0%.' }
        ],
        exampleCalculation: 'Take-home NPR 28,000 × 7% = NPR 1,960 ≈ NPR 2,000/month. At 12% CAGR over 30 years: NPR 69.9 Lakh from NPR 2,000/month - from a first salary habit maintained.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Long-Term Growth'
      },
      commonMistakes: [
        { mistake: 'Waiting until income is "higher" to start saving.', correct: 'Start with any percentage now - even 2%. The habit formed early is more valuable than the amount.', explanation: 'NPR 2,000/month from age 22 at 12% CAGR = NPR 90 Lakh at 55. Starting at 32 with NPR 2,000/month = NPR 27 Lakh at 55. The 10-year delay costs NPR 63 Lakh.' },
        { mistake: 'Saving into the same account used for daily spending.', correct: 'Move savings to a completely separate account or SIP. If you can see and access it easily, you will spend it.', explanation: 'Money in the same account as spending money is mentally already spent - even if you intend to save it.' },
        { mistake: 'Pausing the SIP when money feels tight.', correct: 'Reduce the SIP amount if necessary, but never pause it completely. Even NPR 500/month keeps the habit alive.', explanation: 'Pausing creates the mental permission to pause again. Reducing is always better than stopping.' }
      ],
      definitions: [
        { term: 'Pay Yourself First', full: 'Pre-Commitment Savings Automation', meaning: 'Treating personal savings as the highest-priority expense - paid automatically before any other spending occurs.' },
        { term: 'Standing Order', full: 'Recurring Bank Transfer Instruction', meaning: 'A permanent instruction to your bank to transfer a fixed amount on a specific date each month - no action required after setup.' },
        { term: 'SIP Mandate', full: 'Systematic Investment Plan Auto-Debit', meaning: 'An instruction to your mutual fund manager to debit a fixed amount from your bank on a specific date each month via connectIPS.' },
        { term: 'Savings Rate', full: 'Percentage of Income Saved', meaning: 'The fraction of take-home pay that is saved or invested. A 20% savings rate over a career is sufficient to build retirement wealth independently.' }
      ],
      faqs: [
        { q: 'What if my salary comes late - will my SIP still debit?', a: 'Most fund managers allow you to set a "mandate debit date" 2-3 days after your typical salary date. If your account lacks funds on debit day, the SIP is simply skipped that month - no penalty. Set the date conservatively (3-5 days after salary credit) to avoid misses.' },
        { q: 'Should I PYF into a savings account or directly into a SIP?', a: 'For money you will not need for 5+ years: direct SIP is better - it starts compounding immediately. For goals under 5 years (emergency fund, car, house down payment): a savings account or fixed deposit. Many people split: 60% to SIP, 40% to savings account.' },
        { q: 'My expenses genuinely leave nothing to save. What then?', a: 'Audit every expense for one month - write down every rupee spent. Almost everyone discovers NPR 3,000-8,000/month of spending they cannot explain. Even cutting one restaurant visit or one unnecessary subscription creates a PYF starting point.' }
      ],
      takeaways: [
        'Save first, spend what\'s left - not the other way around. This reversal changes everything.',
        'PYF Amount = Take-Home × Your Rate. Start at 5%. Increase 1% every 3 months.',
        'Automate via SIP mandate or bank standing order on salary day. Remove willpower from the equation.',
        'NPR 2,000/month from age 22 at 12% CAGR = NPR 90 Lakh at 55. Start now, not when income rises.',
        'Never stop the SIP - reduce if needed, but never pause. The habit is the asset.'
      ]
    },
    np: {
      title: 'पहिले आफैँलाई तिर्नुहोस्: नेपालको सबैभन्दा शक्तिशाली बचत बानी',
      oneLineSummary: 'खर्च गरेपछि बाँकी बचाउने सट्टा - बचाएपछि बाँकी खर्च गर्नुहोस्। यो एउटा उल्टाइले जुनसुकै लगानी सुझावभन्दा बढी धन बनाउँछ।',
      summaryPoints: [
        'Pay Yourself First: तलब दिनमा नै बचत लक्ष्य स्वचालित रूपमा छुट्याउनु - अरू केही खर्च गर्नुअघि।',
        'मनोवैज्ञानिक अनुसन्धान: नदेखिने पैसा खर्च हुँदैन। स्वचालन बचतलाई सहज बनाउँछ।',
        '२२ वर्षमा पहिलो तलबबाट रु. २,000/महिना SIP, १२% CAGR, ५५ वर्षसम्म = रु. ९० लाख।',
        'आम्दानीको स्तर जेसुकै होस् - यो प्रतिशतमा काम गर्छ, रुपैयाँमा होइन।',
        'connectIPS SIP म्यान्डेट वा बैंक Standing Order - तलब मितिमा नै सेटअप।'
      ],
      whatIsThis: 'Pay Yourself First (PYF) एक बचत रणनीति हो जहाँ व्यक्तिगत बचतलाई महिनाको पहिलो र सबैभन्दा महत्त्वपूर्ण खर्चको रूपमा लिइन्छ - तलब दिनमा स्वचालित, किराना वा भाडाभन्दा पहिले। "बाँकी बचाउने" परम्परागत तरिका असफल हुन्छ - बाँकी प्रायः केही हुँदैन। PYF ले इच्छाशक्तिलाई समीकरणबाट हटाउँछ।',
      whyItMatters: 'इच्छाशक्ति अविश्वसनीय छ। अनुसन्धान देखाउँछ: स्वचालित बचत गर्ने मानिसहरूले उस्तै आम्दानीमा म्यानुअल बचत गर्नेभन्दा २० वर्षमा ३-४ गुणा बढी धन बनाउँछन्। नेपालमा, जहाँ अधिकांशले बचत गर्ने मनसाय राख्छन् तर गर्दैनन्, PYF बानी सबैभन्दा प्रभावशाली आर्थिक परिवर्तन हो।',
      howItWorks: [
        { step: 1, title: 'बचत प्रतिशत निर्धारण गर्नुहोस्', desc: 'बचत दर छान्नुहोस् - आदर्श: ५०-३०-२० नियमअनुसार Take-home को २०%। अहिले धेरै लाग्छ भने ५% वा २% बाट सुरु। प्रतिशत रकमभन्दा बढी महत्त्वपूर्ण। हर ३ महिनामा १% थप्नुहोस्।' },
        { step: 2, title: 'पैसा कहाँ जाने निर्णय गर्नुहोस्', desc: 'दीर्घकालीन धन: connectIPS SIP म्यान्डेट (NIBL Ace Capital, Nabil Investment Banking)। मध्यकालीन: छुट्टै बैंक खाता। दुवैका लागि: SIP र बचत खाताबीच विभाजन। मुख्य तलब खाताबाट स्वचालित बाहिर जाने - यही सिद्धान्त।' },
        { step: 3, title: 'तलब दिनमा स्वचालन सेटअप गर्नुहोस्', desc: 'Fund Manager (अनलाइन) वा बैंक (शाखा वा App) मा Standing Order वा SIP म्यान्डेट तलब जम्मा हुने मितिमा (वा १-२ दिन पछि) सेटअप गर्नुहोस्। सेटअप भएपछि हर महिना शून्य प्रयास।' },
        { step: 4, title: 'बाँकीमा जीवन बिताउनुहोस्', desc: 'बचत गएपछि बाँकी ब्यालेन्स तपाईँको वास्तविक खर्च रकम। यो सन्दर्भ बिन्दु हो। सानो देखिने ब्यालेन्सको असुविधा नै उद्देश्य हो - यसले स्वाभाविक रूपमा फजुल खर्च घटाउँछ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'म्यानुअल बनाम Pay Yourself First - १० वर्ष परिणाम (रु. ६५,000 Take-home)',
        headers: ['तरिका', 'मासिक बचत', '१० वर्षको कुल बचत', '१२% मा १० वर्षको कोष', 'परिणाम'],
        rows: [
          ['बाँकी बचाउने (परम्परागत)', 'रु. २,000 औसत (अनियमित)', 'रु. २,४०,000', 'रु. ४,६४,000', 'अनियमित, कम धन'],
          ['Pay Yourself First - १०%', 'रु. ६,500 (स्वचालित)', 'रु. ७,८०,000', 'रु. १५,०९,000', 'नियमित, ३× बढी धन'],
          ['Pay Yourself First - २०%', 'रु. १३,000 (स्वचालित)', 'रु. १५,६०,000', 'रु. ३०,१८,000', 'आर्थिक स्वतन्त्रतातर्फ']
        ]
      },
      nepalContext: 'नेपालमा अधिकांश निजी क्षेत्रका कर्मचारीले नेपाली महिनाको अन्तिम कार्यदिनमा तलब पाउँछन्। SIP म्यान्डेट वा Standing Order महिनाको १ वा २ गते (तलब जम्मा भएको १-२ दिनपछि) राख्नुहोस्। सरकारी कर्मचारी (बिसं महिनाको २५ गतेसम्म तलब) ले २६ वा २७ गते राख्नुहोस्। फ्रिल्यान्स वा अनियमित आम्दानीका लागि: हर सोमबार निश्चित सानो रकम स्वचालित। स्वचालनको सिद्धान्त जुनसुकै आम्दानी ढाँचामा काम गर्छ।',
      practicalScenario: {
        persona: 'कृतिका, २३ वर्ष, बुटवलमा BPO मा पहिलो तलब',
        income: 'मासिक रु. २८,000 Take-home',
        scenarioText: 'कृतिकाले पहिलो तलब रु. २८,000 पाइन् र २ हप्तामा अधिकांश सकिन् - नयाँ लुगा, साथीसँग खाना, घर पठाइएको। "अर्को महिना बचाउँछु।" ३ महिनापछि बचत शून्य।',
        solutionText: 'NIBL Ace Capital App मा रु. २,000/महिना (Take-home को ७%) SIP म्यान्डेट महिनाको २ गते सेटअप। खाताबाट सोचे बिना नै काटियो। सुरुमा कम लाग्यो तर खर्च मिलाइन्। २ वर्षपछि: रु. ५४,000 लगानी, पोर्टफोलियो रु. ६२,400। त्यसपछि रु. ३,000 मा बढाइन्।',
        metricHighlight: 'रु. ६२,400 पोर्टफोलियो २ वर्षमा - बचतबारे नसोचेरै'
      },
      formula: {
        name: 'Pay Yourself First बचत लक्ष्य',
        equation: '\\text{PYF रकम} = \\text{Take-Home तलब} \\times \\text{लक्षित बचत दर}',
        variables: [
          { symbol: 'Take-Home तलब', name: 'कर काटिसकेको बैंक रकम', desc: 'TDS र SSF काटिसकेपछि खातामा आउने वास्तविक रकम।' },
          { symbol: 'लक्षित बचत दर', name: 'तपाईँले छानेको प्रतिशत (५%-२०%+)', desc: 'आदर्शमा होइन, सहजमा सुरु गर्नुहोस्। ५% शून्यभन्दा अनन्त गुणा राम्रो।' }
        ],
        exampleCalculation: 'Take-home रु. २८,000 × ७% = रु. १,960 ≈ रु. २,000/महिना। १२% CAGR, ३० वर्ष = रु. ६९.९ लाख - पहिलो तलबको बानीबाट।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'दीर्घकालीन वृद्धि गणना'
      },
      commonMistakes: [
        { mistake: 'आम्दानी "बढेपछि" बचत सुरु गर्ने।', correct: 'अहिले जुनसुकै प्रतिशत सुरु - २% भए पनि। सुरुको बानी रकमभन्दा बढी मूल्यवान।', explanation: '२२ वर्षमा रु. २,000/महिना, १२%, ५५ वर्षसम्म = रु. ९० लाख। ३२ वर्षमा सुरु गरे = रु. २७ लाख। १० वर्षको ढिलाइले रु. ६३ लाख गुम्छ।' },
        { mistake: 'दैनिक खर्च खातामा नै बचत राख्नु।', correct: 'बचत पूर्ण छुट्टै खाता वा SIP मा। सहजै देखिने र पहुँचयोग्य भए खर्च हुन्छ।', explanation: 'उही खातामा राखिएको पैसा मानसिक रूपमा "खर्च भइसकेको" ठानिन्छ - मनसाय भए पनि।' },
        { mistake: 'पैसा कम भए SIP बन्द गर्नु।', correct: 'आवश्यक भए रकम घटाउनुहोस् - कहिल्यै बन्द नगर्नुहोस्। रु. ५०० भए पनि बानी जीवित।', explanation: 'बन्द गर्दा फेरि बन्द गर्ने मानसिक अनुमति मिल्छ। घटाउनु सधैँ रोक्नुभन्दा राम्रो।' }
      ],
      definitions: [
        { term: 'Pay Yourself First', full: 'पूर्व-प्रतिबद्धता बचत स्वचालन', meaning: 'व्यक्तिगत बचतलाई सर्वोच्च प्राथमिकताको खर्च मान्ने - अरू कुनै खर्च हुनुभन्दा अघि स्वचालित।' },
        { term: 'Standing Order', full: 'बारम्बार बैंक हस्तान्तरण निर्देश', meaning: 'हर महिना निश्चित मितिमा निश्चित रकम स्थानान्तरण गर्ने स्थायी बैंक निर्देश - सेटअप पछि शून्य प्रयास।' },
        { term: 'SIP Mandate', full: 'Systematic Investment Plan Auto-Debit', meaning: 'connectIPS मार्फत हर महिना निश्चित मितिमा Mutual Fund मा निश्चित रकम स्वचालित लगानी।' },
        { term: 'बचत दर', full: 'Savings Rate', meaning: 'Take-home आम्दानीको कति अंश बचत/लगानी हुन्छ। करियरभरि २०% बचत दर स्वतन्त्र रिटायरमेन्टका लागि पर्याप्त।' }
      ],
      faqs: [
        { q: 'तलब ढिलो आयो भने SIP काटिन्छ?', a: 'अधिकांश Fund Manager ले तलब मिति भन्दा २-३ दिन पछि "Mandate Debit Date" राख्न दिन्छन्। खातामा रकम नभए त्यो महिना SIP Skip - कुनै जरिमाना छैन। तलब जम्मा हुने मितिभन्दा ३-५ दिन पछि राख्नुहोस्।' },
        { q: 'बचत खातामा PYF गर्ने कि SIP मा?', a: '५+ वर्षका लागि: SIP - चक्रवृद्धि तुरुन्त सुरु। ५ वर्षभन्दा कम लक्ष्य (आपतकालीन, गाडी, डाउन पेमेन्ट): बचत खाता वा FD। धेरैजसो: ६०% SIP + ४०% बचत खाता।' },
        { q: 'खर्च गरेपछि साँच्चै केही बाँकी छैन - अब?', a: 'एक महिना हरेक रुपैयाँ लेख्नुहोस्। लगभग सबैले रु. ३,000-८,000 अज्ञात खर्च पत्ता लगाउँछन्। एउटा रेस्टुरेन्ट वा एउटा Subscription काट्दा PYF शुरु।' }
      ],
      takeaways: [
        'पहिले बचाउनुहोस्, बाँकी खर्च गर्नुहोस् - यो उल्टाइले सबै कुरा बदलिन्छ।',
        'PYF रकम = Take-Home × तपाईँको दर। ५% बाट सुरु। हर ३ महिनामा १% थप।',
        'तलब दिनमा SIP म्यान्डेट वा Standing Order - इच्छाशक्तिलाई समीकरणबाट हटाउनुहोस्।',
        '२२ वर्षमा रु. २,000/महिना, १२%, ५५ वर्ष = रु. ९० लाख। अहिले सुरु - आम्दानी बढेपछि होइन।',
        'SIP कहिल्यै नरोक्नुहोस् - घटाउनुहोस्, तर बन्द नगर्नुहोस्। बानी नै सम्पत्ति हो।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'See how small automatic monthly savings grow into major wealth over decades.' }
    ],
    downloadableResources: [
      { title: 'Pay Yourself First Setup Guide (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '160 KB', href: 'assets/downloads/nepal-cash-flow-tracker.csv' }
    ]
  },

  // ── A4. NET WORTH TRACKING ───────────────────────────────────────
  'net-worth-tracking-nepal': {
    id: 'pf-net-worth',
    slug: 'net-worth-tracking-nepal',
    categorySlug: 'personal-finance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '20 min annual review', np: '२० मिनेट वार्षिक समीक्षा' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Consistent with NRB household financial data standards', np: 'NRB गार्हस्थ्य वित्त तथ्यांक मानकसँग सुसंगत' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'How to Calculate and Track Your Net Worth in Nepal',
      oneLineSummary: 'Net Worth = Assets − Liabilities. This single number tells you more about your financial health than your salary, your bank balance, or anything else.',
      summaryPoints: [
        'Net worth is the sum of everything you own (assets) minus everything you owe (liabilities).',
        'A rising net worth is the only true measure of financial progress - not income, not savings rate alone.',
        'Many Nepalis with high incomes have low or negative net worth due to gold loans, vehicle loans, and consumer debt.',
        'Calculate once a year on Dashain or New Year (Baishakh 1) - takes 20 minutes.',
        'The goal is consistent net worth growth, not a specific number. A 10% annual increase in net worth is excellent.'
      ],
      whatIsThis: 'Net worth is a financial snapshot of your total wealth at a specific moment in time. It is calculated by listing everything of monetary value that you own (your assets) and subtracting everything you owe (your liabilities). A positive net worth means your assets exceed your debts. A negative net worth means you owe more than you own - common early in life when student or vehicle loans dominate. The number itself matters less than the direction: a net worth that grows by 10-15% per year indicates healthy financial behavior.',
      whyItMatters: 'Monthly income and bank balance give you a daily view of money. Net worth gives you the lifetime view. A government officer earning NPR 60,000/month with a paid-off home, no loans, and NPR 10 Lakh in mutual funds has a much stronger financial position than a private sector professional earning NPR 1.5 Lakh/month with a NPR 80 Lakh home loan, NPR 5 Lakh vehicle loan, and NPR 2 Lakh personal loan - even though the second person earns 2.5× more. Net worth reveals the truth that income hides.',
      howItWorks: [
        { step: 1, title: 'List All Your Assets', desc: 'Assets include: cash in all bank accounts, mutual fund portfolio value (at current NAV), NEPSE shares (at current market price), fixed deposits (principal + accrued interest), gold jewelry (at current gold price × weight in tola), vehicle current resale value (not original price), property (conservative market estimate), life insurance surrender value (if surrendered), and provident fund/EPF/CIT balance.' },
        { step: 2, title: 'List All Your Liabilities', desc: 'Liabilities include: all loan outstanding balances (home loan, vehicle loan, personal loan, gold loan, education loan), credit card outstanding balance, informal loans owed to family or friends (often forgotten - include them), and any outstanding tax dues.' },
        { step: 3, title: 'Calculate Net Worth', desc: 'Net Worth = Total Assets − Total Liabilities. If positive: your wealth exceeds your debts. If negative: you owe more than you own - common but improvable. Record the number and the date. Repeat annually.' },
        { step: 4, title: 'Track Annual Growth Rate', desc: 'Net Worth Growth Rate = (This Year\'s NW − Last Year\'s NW) ÷ Last Year\'s NW × 100%. A 10-20% annual growth is healthy for working-age adults. If net worth is shrinking despite earning income, your debt repayment or lifestyle inflation is eating faster than you are growing.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Sample Net Worth Calculation - Ramesh, 38, Government Officer, Pokhara',
        headers: ['Category', 'Item', 'Value (NPR)'],
        rows: [
          ['ASSETS', 'Bank accounts (savings + FD)', '4,80,000'],
          ['ASSETS', 'Mutual fund portfolio (NAV)', '3,20,000'],
          ['ASSETS', 'NEPSE shares (market value)', '1,50,000'],
          ['ASSETS', 'Gold jewelry (24 tola × NPR 1,05,000)', '25,20,000'],
          ['ASSETS', 'Property estimate (conservative)', '60,00,000'],
          ['ASSETS', 'EPF/CIT balance', '8,50,000'],
          ['TOTAL ASSETS', '', '1,03,20,000'],
          ['LIABILITIES', 'Home loan outstanding', '38,00,000'],
          ['LIABILITIES', 'Vehicle loan outstanding', '4,50,000'],
          ['TOTAL LIABILITIES', '', '42,50,000'],
          ['NET WORTH', 'Assets − Liabilities', '60,70,000']
        ]
      },
      nepalContext: 'In Nepal, the largest asset for most families is real estate - land and house. Be conservative when estimating property value: use 70-80% of what a similar property actually sold for nearby (not what sellers are asking). Gold is a significant asset in Nepali households: one tola = 11.66 grams, and gold price is tracked on goldpricenepal.com and at Nepal Gold and Silver Dealers Association (NEGOSIDA). For NEPSE shares, use current market price on nepse.com.np. For mutual funds, use current NAV from sebon.gov.np or the fund manager portal.',
      practicalScenario: {
        persona: 'Ramesh, 38, government officer in Pokhara',
        income: 'NPR 75,000 / month',
        scenarioText: 'Ramesh had never calculated his net worth. He felt financially stable because of his government salary and home ownership. But he also had a home loan, a motorcycle loan, and had borrowed NPR 5 Lakh from his brother-in-law 3 years ago that he rarely thought about.',
        solutionText: 'He listed everything: assets NPR 1,03,20,000 (property, gold, savings, EPF, shares). Liabilities: home loan NPR 38,00,000 + vehicle loan NPR 4,50,000 + family loan NPR 5,00,000 = NPR 47,50,000. Net worth: NPR 55,70,000. He was surprised - positive but lower than expected. The family loan was dragging his net worth and he hadn\'t tracked it. He made a plan to repay it within 18 months.',
        metricHighlight: 'Discovered NPR 5L untracked liability - net worth NPR 55.7 Lakh, clear repayment plan set'
      },
      formula: {
        name: 'Net Worth Formula',
        equation: '\\text{Net Worth} = \\sum \\text{All Assets} - \\sum \\text{All Liabilities}',
        variables: [
          { symbol: 'All Assets', name: 'Everything of monetary value you own', desc: 'Bank accounts, investments, gold, property, vehicles (resale), provident fund.' },
          { symbol: 'All Liabilities', name: 'Everything you legally owe', desc: 'All loan balances, credit card dues, informal family loans, tax arrears.' }
        ],
        exampleCalculation: 'Assets: NPR 1,03,20,000. Liabilities: NPR 42,50,000. Net Worth = 1,03,20,000 − 42,50,000 = NPR 60,70,000. Target: 10% growth per year = NPR 66,77,000 by next year.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Investment Growth'
      },
      commonMistakes: [
        { mistake: 'Counting property at asking/market price rather than conservative resale value.', correct: 'Use 70-80% of comparable recent sale prices in your area for property valuation - not what you would ask, but what you would likely receive.', explanation: 'Overvaluing property inflates net worth on paper and leads to overconfidence about financial health.' },
        { mistake: 'Forgetting informal family loans in liabilities.', correct: 'Include all money owed - even to relatives. A NPR 5 Lakh family loan is a real liability.', explanation: 'Many Nepalis have borrowed money from relatives they mentally "don\'t count." These are real obligations affecting actual net worth.' },
        { mistake: 'Equating high income with high net worth.', correct: 'Track the number. A high income with high spending and high debt produces low or negative net worth.', explanation: 'Net worth reveals what income hides. The goal is growing net worth, not just growing income.' }
      ],
      definitions: [
        { term: 'Asset', full: 'Anything of Monetary Value You Own', meaning: 'Items that hold or grow in value: bank deposits, investments, property, gold, provident fund, vehicles (at resale value).' },
        { term: 'Liability', full: 'Money You Legally Owe', meaning: 'All outstanding debt: bank loans, credit card balances, informal family loans, tax arrears. Includes any obligation that must eventually be paid.' },
        { term: 'Net Worth', full: 'Total Wealth Snapshot', meaning: 'Assets minus liabilities. A single number summarizing your entire financial position at a moment in time.' },
        { term: 'Tola', full: 'Nepal Standard Gold Weight Unit', meaning: 'One tola = 11.664 grams. Standard unit for gold pricing and trading in Nepal. Gold price in NPR per tola is quoted daily by NEGOSIDA.' }
      ],
      faqs: [
        { q: 'My net worth is negative - should I be worried?', a: 'Not necessarily. Young professionals with student loans or people who recently took a home loan commonly have negative or low net worth. The key question is: is it improving each year? A negative net worth that grows by NPR 5-10 Lakh per year is healthy progress.' },
        { q: 'Should I include my future pension (EPF/CIT/SSF) in net worth?', a: 'Yes - include your current accumulated EPF, CIT, or SSF balance (the amount you have already contributed plus interest). Do not include projected future pension payouts, as those are uncertain and not yet yours.' },
        { q: 'How do I value my gold jewelry - market price or melt value?', a: 'Use melt value - the current gold price per tola (from NEGOSIDA) multiplied by the gold weight (in tola) of the jewelry. Making charges and design premiums are not recoverable on resale, so do not include them.' }
      ],
      takeaways: [
        'Net Worth = All Assets − All Liabilities. Calculate once a year. The direction matters more than the number.',
        'High income ≠ high net worth. Debt and lifestyle inflation destroy wealth silently.',
        'In Nepal: property and gold are the biggest assets. Include them at conservative values - 70-80% of market.',
        'Include ALL liabilities - especially informal family loans you\'ve mentally ignored.',
        'Target 10-20% net worth growth per year. If it\'s shrinking despite income, debt is winning.'
      ]
    },
    np: {
      title: 'नेपालमा Net Worth गणना र ट्र्याकिङ',
      oneLineSummary: 'Net Worth = सम्पत्ति − दायित्व। यो एकल संख्या तलब, बैंक ब्यालेन्स वा अरू कुनै पनि भन्दा तपाईँको आर्थिक स्वास्थ्यबारे बढी बताउँछ।',
      summaryPoints: [
        'Net Worth भनेको तपाईँका सबै सम्पत्तिको जोड घटाउँदा सबै दायित्व।',
        'बढ्दो Net Worth मात्र वास्तविक आर्थिक प्रगतिको मापन - तलब वा बचत दर मात्र होइन।',
        'उच्च आम्दानीका धेरै नेपालीको Net Worth कम वा नकारात्मक छ - सुन ऋण, सवारी ऋण, र उपभोग्य ऋणका कारण।',
        'वर्षमा एकपटक - दशैँमा वा बैशाख १ मा - २० मिनेट काफी।',
        'लक्ष्य: निरन्तर Net Worth वृद्धि - विशेष संख्या होइन। वार्षिक १०% वृद्धि उत्कृष्ट।'
      ],
      whatIsThis: 'Net Worth एक निश्चित समयमा तपाईँको कुल धनको वित्तीय स्नापसट हो। तपाईँसँग भएका आर्थिक मूल्यका सबै वस्तु (सम्पत्ति) सूचीबद्ध गरेर, तपाईँले तिर्नुपर्ने सबै रकम (दायित्व) घटाउँदा Net Worth पाइन्छ। संख्याभन्दा महत्त्वपूर्ण दिशा: वार्षिक १०-१५% Net Worth वृद्धि स्वस्थ आर्थिक व्यवहार दर्शाउँछ।',
      whyItMatters: 'मासिक आम्दानी र बैंक ब्यालेन्स दैनिक दृष्टिकोण। Net Worth जीवनकालको दृष्टिकोण। रु. ६०,000/महिना कमाउने सरकारी अधिकृत, तिरेको घर, शून्य ऋण, र रु. १० लाख Mutual Fund - रु. १.५ लाख/महिना निजी क्षेत्रको कर्मचारी, रु. ८० लाख गृहकर्जा, रु. ५ लाख सवारी ऋण, रु. २ लाख व्यक्तिगत ऋणभन्दा धेरै मजबूत छ। Net Worth त्यो सत्य देखाउँछ जुन आम्दानीले लुकाउँछ।',
      howItWorks: [
        { step: 1, title: 'सबै सम्पत्ति सूचीबद्ध गर्नुहोस्', desc: 'सम्पत्ति: बैंक खातामा नगद, Mutual Fund पोर्टफोलियो (चालू NAV), NEPSE सेयर (चालू बजार मूल्य), FD (मूलधन + ब्याज), सुन गहना (चालू सुन मूल्य × तोला), सवारी साधन पुनर्विक्रय मूल्य, सम्पत्ति रूढिवादी अनुमान, EPF/CIT/SSF ब्यालेन्स।' },
        { step: 2, title: 'सबै दायित्व सूचीबद्ध गर्नुहोस्', desc: 'दायित्व: सबै ऋणको बाँकी रकम (गृहकर्जा, सवारी, व्यक्तिगत, सुन, शिक्षा), क्रेडिट कार्ड बाँकी, परिवार/साथीसँग अनौपचारिक ऋण (अक्सर बिर्सिन्छ - सामेल गर्नुहोस्), बाँकी कर दायित्व।' },
        { step: 3, title: 'Net Worth गणना गर्नुहोस्', desc: 'Net Worth = कुल सम्पत्ति − कुल दायित्व। धनात्मक: सम्पत्ति दायित्वभन्दा बढी। ऋणात्मक: दायित्व सम्पत्तिभन्दा बढी - सामान्य तर सुधार्न सकिन्छ। संख्या र मिति रेकर्ड। वार्षिक दोहोर्याउनुहोस्।' },
        { step: 4, title: 'वार्षिक वृद्धि दर ट्र्याक गर्नुहोस्', desc: 'Net Worth वृद्धि दर = (यस वर्ष NW − गत वर्ष NW) ÷ गत वर्ष NW × १००%। कामकाजी उमेरमा १०-२०% वार्षिक वृद्धि स्वस्थ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नमुना Net Worth गणना - रमेश, ३८ वर्ष, पोखरामा सरकारी अधिकृत',
        headers: ['श्रेणी', 'वस्तु', 'मूल्य (रु.)'],
        rows: [
          ['सम्पत्ति', 'बैंक खाता (बचत + FD)', '४,८०,000'],
          ['सम्पत्ति', 'Mutual Fund पोर्टफोलियो (NAV)', '३,२०,000'],
          ['सम्पत्ति', 'NEPSE सेयर (बजार मूल्य)', '१,५०,000'],
          ['सम्पत्ति', 'सुन गहना (२४ तोला × रु. १,०५,000)', '२५,२०,000'],
          ['सम्पत्ति', 'सम्पत्ति अनुमान (रूढिवादी)', '६०,००,000'],
          ['सम्पत्ति', 'EPF/CIT ब्यालेन्स', '८,५०,000'],
          ['कुल सम्पत्ति', '', '१,०३,२०,000'],
          ['दायित्व', 'गृहकर्जा बाँकी', '३८,००,000'],
          ['दायित्व', 'सवारी ऋण बाँकी', '४,५०,000'],
          ['कुल दायित्व', '', '४२,५०,000'],
          ['NET WORTH', 'सम्पत्ति − दायित्व', '६०,७०,000']
        ]
      },
      nepalContext: 'नेपालमा अधिकांश परिवारको सबैभन्दा ठूलो सम्पत्ति: घर-जग्गा। सम्पत्ति मूल्यांकनमा रूढिवादी हुनुहोस् - नजिकको हालै बिकेको समान सम्पत्तिको ७०-८०% प्रयोग गर्नुहोस्। सुन: एक तोला = ११.६६ ग्राम। मूल्य goldpricenepal.com वा NEGOSIDA बाट। NEPSE सेयर: nepse.com.np मा चालू बजार मूल्य। Mutual Fund NAV: sebon.gov.np वा Fund Manager पोर्टल।',
      practicalScenario: {
        persona: 'रमेश, ३८ वर्ष, पोखरामा सरकारी अधिकृत',
        income: 'मासिक रु. ७५,000',
        scenarioText: 'रमेशले कहिल्यै Net Worth गणना गरेका थिएनन्। सरकारी तलब र घर स्वामित्वले आर्थिक सुरक्षा महसुस गरे। तर गृहकर्जा, मोटरसाइकल ऋण, र ३ वर्ष अघि भाइज्यूबाट लिएको रु. ५ लाख पनि थियो जुन उनले प्रायः भुल्थे।',
        solutionText: 'सबै सूचीबद्ध: सम्पत्ति रु. १,०३,२०,000 (सम्पत्ति, सुन, बचत, EPF, सेयर)। दायित्व: गृहकर्जा रु. ३८ लाख + सवारी रु. ४.५ लाख + परिवार ऋण रु. ५ लाख = रु. ४७.५ लाख। Net Worth: रु. ५५.७ लाख। धनात्मक तर अपेक्षाभन्दा कम। परिवार ऋण खिच्दो भइरहेको थियो। १८ महिनामा फिर्ता गर्ने योजना बनाए।',
        metricHighlight: 'रु. ५ लाख अनट्र्याक्ड दायित्व पत्ता - Net Worth रु. ५५.७ लाख, स्पष्ट फिर्ता योजना'
      },
      formula: {
        name: 'Net Worth सूत्र',
        equation: '\\text{Net Worth} = \\sum \\text{सबै सम्पत्ति} - \\sum \\text{सबै दायित्व}',
        variables: [
          { symbol: 'सबै सम्पत्ति', name: 'तपाईँका सबै आर्थिक मूल्यका वस्तु', desc: 'बैंक खाता, लगानी, सुन, सम्पत्ति, सवारी (पुनर्विक्रय मूल्य), EPF।' },
          { symbol: 'सबै दायित्व', name: 'तपाईँले कानुनी रूपमा तिर्नुपर्ने सबै', desc: 'सबै ऋणको बाँकी, क्रेडिट कार्ड, अनौपचारिक ऋण, बाँकी कर।' }
        ],
        exampleCalculation: 'सम्पत्ति रु. १,०३,२०,000। दायित्व रु. ४२,५०,000। Net Worth = रु. ६०,७०,000। लक्ष्य: वार्षिक १०% वृद्धि = अर्को वर्ष रु. ६६,७७,000।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'लगानी वृद्धि गणना'
      },
      commonMistakes: [
        { mistake: 'सम्पत्ति बजार/माग मूल्यमा गणना गर्नु।', correct: 'नजिकको हालैको बिक्री मूल्यको ७०-८०% प्रयोग गर्नुहोस् - तपाईँले माग गर्नुभन्दा पाउनुहुने रकम।', explanation: 'सम्पत्ति ओभरभ्यालु गर्दा कागजमा Net Worth बढ्छ तर आर्थिक स्वास्थ्यमा गलत आत्मविश्वास।' },
        { mistake: 'परिवार/साथीसँगको अनौपचारिक ऋण बिर्सनु।', correct: 'सबै ऋण - आफन्तलाई पनि - दायित्वमा सामेल गर्नुहोस्।', explanation: 'धेरै नेपालीले आफन्तसँगको ऋण "नगन्ने" ठान्छन् - तर त्यो वास्तविक दायित्व हो।' },
        { mistake: 'उच्च आम्दानी = उच्च Net Worth भन्ने सोच।', correct: 'संख्या ट्र्याक गर्नुहोस्। उच्च आम्दानी + उच्च खर्च + उच्च ऋण = कम वा ऋणात्मक Net Worth।', explanation: 'Net Worth ले आम्दानीले लुकाएको सत्य देखाउँछ।' }
      ],
      definitions: [
        { term: 'सम्पत्ति (Asset)', full: 'आर्थिक मूल्यका वस्तु जो तपाईँका हुन्', meaning: 'बैंक जम्मा, लगानी, सम्पत्ति, सुन, EPF, सवारी (पुनर्विक्रय मूल्यमा)।' },
        { term: 'दायित्व (Liability)', full: 'तपाईँले कानुनी रूपमा तिर्नुपर्ने', meaning: 'सबै बाँकी ऋण: बैंक ऋण, क्रेडिट कार्ड, अनौपचारिक परिवार ऋण, कर बाँकी।' },
        { term: 'Net Worth', full: 'कुल धन स्नापसट', meaning: 'सम्पत्ति घटाउँदा दायित्व। एकल संख्यामा सम्पूर्ण आर्थिक अवस्था।' },
        { term: 'तोला', full: 'नेपाली सुन तौल इकाई', meaning: 'एक तोला = ११.६६४ ग्राम। NEGOSIDA ले दैनिक NPR प्रति तोला सुन मूल्य प्रकाशित गर्छ।' }
      ],
      faqs: [
        { q: 'मेरो Net Worth ऋणात्मक छ - चिन्ता गर्नुपर्छ?', a: 'जरुरी छैन। शैक्षिक वा सवारी ऋण लिएका युवाको ऋणात्मक Net Worth सामान्य। मुख्य प्रश्न: हर वर्ष सुधर्दैछ? वार्षिक रु. ५-१० लाख Net Worth वृद्धि स्वस्थ प्रगति।' },
        { q: 'भविष्यको पेन्सन (EPF/CIT/SSF) Net Worth मा सामेल गर्ने?', a: 'हो - तर केवल अहिलेसम्म जम्मा भएको ब्यालेन्स (योगदान + ब्याज)। भविष्यको प्रक्षेपित पेन्सन नसामेल गर्नुहोस् - अनिश्चित र अझै तपाईँको छैन।' },
        { q: 'सुन गहनाको मूल्यांकन बजार मूल्यमा कि Melt Value मा?', a: 'Melt Value प्रयोग गर्नुहोस् - चालू सुन मूल्य (NEGOSIDA बाट) × गहनाको सुन तौल (तोलामा)। बनाउने शुल्क र डिजाइन प्रिमियम पुनर्विक्रयमा फिर्ता नहुने - सामेल नगर्नुहोस्।' }
      ],
      takeaways: [
        'Net Worth = सबै सम्पत्ति − सबै दायित्व। वर्षमा एकपटक गणना। दिशा संख्याभन्दा बढी महत्त्वपूर्ण।',
        'उच्च आम्दानी ≠ उच्च Net Worth। ऋण र Lifestyle Inflation सम्पत्ति मौनतापूर्वक नष्ट गर्छन्।',
        'नेपालमा: सम्पत्ति र सुन सबैभन्दा ठूला सम्पत्ति। रूढिवादी मूल्यमा सामेल - बजारको ७०-८०%।',
        'सबै दायित्व सामेल गर्नुहोस् - अनौपचारिक परिवार ऋण पनि जसलाई मानसिक रूपमा बेवास्ता गरिन्छ।',
        'वार्षिक १०-२०% Net Worth वृद्धिको लक्ष्य। घट्दैछ भने ऋण जित्दैछ।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Project how your investments contribute to net worth growth over time.' }
    ],
    downloadableResources: [
      { title: 'Nepal Net Worth Tracker Template (PDF)', type: 'PDF Template', format: 'PDF Document', size: '210 KB', href: 'assets/downloads/nepal-cash-flow-tracker.csv' }
    ]
  }
};

// export const BATCH_A

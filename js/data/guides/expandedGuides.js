// ==============================================
// risePaisa - Expanded Flagship Guides for Nepal
// Elevated Publications: Budgeting, Business Registration, Digital Payments, and SIP
// ==============================================

export const EXPANDED_GUIDES = {
  // ── 1. Complete Budgeting Guide ───────────────────
  'complete-budgeting-guide': {
    id: 'complete-budgeting-guide',
    slug: 'complete-budgeting-guide',
    categorySlug: 'personal-finance',
    categoryName: { en: 'Personal Finance', np: 'व्यक्तिगत वित्त' },
    title: {
      en: 'Complete Nepal Personal Budgeting & Cash Flow Guide',
      np: 'नेपालमा व्यक्तिगत बजेट र नगद प्रवाहको पूर्ण गाइड'
    },
    oneLineSummary: {
      en: 'Master personal cash flow in Nepal: net take-home equations, stopping QR and chiya micro-leakages, adapting 50/30/20 to Kathmandu rents, Dashain sinking funds, and the 6-month emergency buffer.',
      np: 'नेपालको परिवेशमा Cash Flow व्यवस्थापन: ५०/३०/२० बजेट नियम, डिजिटल वालेटका सानातिना खर्च नियन्त्रण, चाडपर्व बचत कोष र ६ महिनाको आपतकालीन बफर निर्माणको सम्पूर्ण विधि।'
    },
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '12 min read', np: '१२ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: {
      en: 'Verified for Nepal Urban Living & Banking Accuracy',
      np: 'नेपाली जीवनयापन तथा बैंकिङ व्यवहार अनुसार प्रमाणित'
    },
    prerequisites: [
      { title: 'Knowledge of Net Monthly Take-Home Income', type: 'Prerequisite' },
      { title: 'Bank Account with Mobile Banking', type: 'Prerequisite' },
      { title: 'Statement of Past 3 Months Expenses', type: 'Document' }
    ],
    en: {
      intro: 'A budget is not a financial punishment or a tedious spreadsheet; it is an active monthly spending plan that gives every rupee a dedicated job before the month begins. In urban Nepal-where inflation on groceries and school fees persistently runs between 6% and 8%, and where cultural obligations like Dashain, Tihar, and wedding seasons introduce massive periodic liquidity shocks-relying on "saving whatever is left at the end of the month" virtually guarantees zero wealth accumulation. When salaries hit commercial bank accounts on the 1st of the Nepali month, unallocated money evaporates through invisible digital QR leakages, social outings, and impulse purchases. By mastering the net income equation, adapting the 50/30/20 rule to Kathmandu living realities, creating dedicated sinking funds, and automating transfers, you gain complete command over your financial destiny.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-net-income-equation',
          title: 'The Net Income Equation & Identifying Digital QR Leakages',
          content: 'The first rule of budgeting is calculating your True Net Take-Home Pay. In Nepal, your gross salary is not what you have to spend. By law, employers deduct 11% for Social Security Fund (SSF) or Employee Provident Fund (EPF), plus Section 87 TDS income tax withholding. If your offer letter states NPR 50,000 gross, your actual bank deposit may be approximately NPR 41,500. Budgeting against the gross NPR 50,000 figure instantly creates a 17% deficit. Once you know your net number, audit your invisible micro-leakages: scanning Fonepay QR codes for NPR 35 chiya, NPR 120 afternoon samosas, and NPR 400 delivery app lunches. Three QR scans a day totaling NPR 350 equals NPR 10,500 per month-over 25% of an average starter salary vanishing without a conscious decision.',
          callout: {
            type: 'important',
            title: 'Always Budget from the Net Bank Deposit',
            text: 'Never use gross annual package numbers or expected annual performance bonuses when setting your baseline monthly budget. Build your lifestyle strictly around guaranteed net take-home pay.'
          }
        },
        {
          num: 2,
          id: 'chap-2-adapting-50-30-20-urban-nepal',
          title: 'Adapting the 50/30/20 Framework for Kathmandu & Urban Nepal',
          content: 'The traditional Western 50/30/20 framework (50% Needs, 30% Wants, 20% Savings) requires pragmatic adjustment in urban Nepal. In Kathmandu, Lalitpur, and Pokhara, housing costs have surged: renting a standard 2BHK apartment often consumes NPR 20,000 to NPR 28,000, which alone exceeds 50% of a young professional’s NPR 40,000 net income. For urban Nepal, we recommend the 55/25/20 Realistic Adjustment: (1) 55% Non-Negotiable Needs: Rent, groceries, commuting (petrol/bus), internet, electricity, water, and basic healthcare. (2) 25% Guilt-Free Lifestyle & Wants: Dining out, weekend gatherings, clothing, streaming subscriptions, and hobbies. (3) 20% Compounding Wealth & Debt Paydown: Emergency fund allocation, SIP mutual funds, recurring deposits, or direct NEPSE share investments.',
          callout: {
            type: 'tip',
            title: 'What If Rent Exceeds 35% of Income?',
            text: 'If high rent consumes 40% of your earnings, temporarily reduce your Wants allocation to 15%-20%, rather than cutting your 20% investment habit. Wealth creation requires protecting the investment core at all costs.'
          }
        },
        {
          num: 3,
          id: 'chap-3-dashain-sinking-funds',
          title: 'Handling Dashain, Tihar, Chhath & Wedding Sinking Funds',
          content: 'Every year in Ashwin and Kartik (September/October), millions of Nepali families experience severe financial stress. Purchasing new festival clothing, traveling to ancestral villages, buying sacrificial livestock, and distributing Dakshina to elders and nieces/nephews easily costs NPR 50,000 to NPR 1,50,000 in a single fortnight. Those who fail to plan rely on high-interest credit card debt (24%-36% APR) or emergency loans from relatives. The mathematical solution is a Festival Sinking Fund: calculate your total anticipated festival and wedding gift expenses for the entire year (e.g., NPR 60,000), divide by 12 (NPR 5,000 per month), and transfer that sum every single month into a dedicated sub-savings account. When Dashain arrives, you celebrate with full cash reserves without touching your emergency fund or taking debt.',
          callout: {
            type: 'tip',
            title: 'The 1/12th Sinking Fund Formula',
            text: 'Formula: Monthly Sinking Allocation = Expected Annual Cultural Expense ÷ 12. Automate this transfer on the 1st of every Nepali month into a separate bank account.'
          }
        },
        {
          num: 4,
          id: 'chap-4-emergency-fund-buffer',
          title: 'Building a 6-Month Untouchable Emergency Buffer',
          content: 'Before investing in high-risk NEPSE equities or real estate, you must establish an ironclad liquidity wall. An emergency fund protects you against sudden private hospital admissions, unexpected job termination, or urgent household repairs. In Nepal, where public medical safety nets are limited, a single earner requires a minimum of 6 months of basic living expenses (Needs + Debt EMIs). If your monthly baseline survival cost is NPR 28,000, your target buffer is NPR 1,68,000. Do not hold this entire balance in cash under a mattress where inflation erodes it, nor lock it in a 3-year fixed deposit where premature withdrawal incurs penalties. The optimal Nepal allocation is: 30% in a high-yield Class A commercial bank savings account (instant ATM/mobile banking liquidity), and 70% in a 3-month or 6-month Sweep / Recurring Fixed Deposit.',
          callout: {
            type: 'warning',
            title: 'What Does NOT Qualify as an Emergency',
            text: 'Buying the latest iPhone, funding a sudden vacation to Pokhara, or buying speculative IPOs during market rallies are NOT emergencies. Tampering with your emergency fund leaves your family exposed to catastrophic debt.'
          }
        },
        {
          num: 5,
          id: 'chap-5-defeating-lifestyle-creep',
          title: 'Defeating Lifestyle Creep: The Half-Raise Rule on Nepali Salaries',
          content: 'Lifestyle inflation (or lifestyle creep) is the silent killer of wealth. When an employee receives a salary increment from NPR 45,000 to NPR 60,000, they instantly upgrade their apartment, buy a more expensive motorcycle, and start frequenting upscale cafes. Within three months, they are living paycheck-to-paycheck just as before, despite earning NPR 15,000 more every month. To break this trap, implement the Half-Raise Rule: whenever you receive an annual increment or promotion, immediately allocate exactly 50% of the net raise (e.g., NPR 7,500) toward increasing your automated SIP or debt prepayment. Use the remaining 50% (NPR 7,500) to genuinely improve your standard of living. By doing this, you reward yourself today while guaranteeing accelerated financial independence tomorrow.',
          callout: {
            type: 'tip',
            title: 'Automate Before You See It',
            text: 'Set up standing instructions in your mobile banking app so the extra investment amount is siphoned off on the exact day your increased salary arrives, before you adapt to having more cash.'
          }
        },
        {
          num: 6,
          id: 'chap-6-anti-budget-and-review',
          title: 'The 30-Minute Monthly Review Routine & The Anti-Budgeting System',
          content: 'Tracking every single cup of tea in a manual spreadsheet leads to psychological fatigue, causing 90% of people to abandon budgeting within 60 days. Instead, use the automated Anti-Budget (Pay Yourself First) system: (1) On the day your salary lands in Bank Account A (Income Account), automated standing instructions immediately transfer 20% to Bank Account B (Investments/SIP) and 10% to Bank Account C (Sinking Funds). (2) The remaining 70% left in Bank Account A is your free operating cash. Pay fixed rent and bills, and spend the rest guilt-free knowing your future is already fully funded. Finally, conduct a 30-minute monthly financial review on the final Saturday of the Nepali month: check your net savings rate, verify that no unexpected subscription charges occurred, and adjust for the upcoming month’s calendar.',
          callout: {
            type: 'tip',
            title: 'The Three-Account Architecture',
            text: 'Maintain Account 1: Salary & Operations (Daily spending), Account 2: Emergency & Sinking Funds (Separate bank without debit card in wallet), Account 3: Demat / TMS linked trading account.'
          }
        }
      ],
      nepalContext: 'In Nepal, consumer banking and digital payment guidelines are issued by Nepal Rastra Bank (NRB). With the massive expansion of QR payment rails (Fonepay, NepalPay) and digital wallets (eSewa, Khalti), transaction friction has collapsed, making impulse micro-spending effortless. Implementing strict account separation and monthly standing instructions via connectIPS is the single most effective barrier against urban inflation and unmonitored digital capital erosion.',
      comparisonTable: {
        title: '50/30/20 Budgeting Rule vs Realities of Living in Kathmandu',
        caption: 'Comparison between Western budgeting benchmarks and Kathmandu urban cost realities',
        headers: ['Category', '50/30/20 Rule', 'Kathmandu Living Reality', 'Recommended RisePaisa Action'],
        rows: [
          ['Needs (आवश्यकता)', '50% of Net Income', '55% - 65% (High room rent & food costs)', 'Cap rent <= 25% salary; cook meals at home'],
          ['Wants (चाहना)', '30% of Net Income', '15% - 20% (Discretionary spend)', 'Audit cafe QR payments; avoid impulsive EMI buys'],
          ['Savings & Investments (बचत)', '20% of Net Income', '20% - 25% (Non-negotiable)', 'Automate SIP & emergency fund right on payday'],
          ['Dashain / Festival Buffer', 'Absent in Western models', 'Requires 8.3% monthly sinking fund', 'Save 1 month salary divided across 12 installments']
        ]
      },
      practicalScenario: {
        persona: 'Prashant, 27, Marketing Executive in Kathmandu',
        challenge: 'Earning NPR 45,000 net monthly, Prashant lived paycheck-to-paycheck. He spent NPR 22,000 on rent and utilities, NPR 14,000 on dining out and cafe QR payments, and had zero savings after two years of working. When Dashain arrived, he was forced to borrow NPR 35,000 from a colleague at 2% monthly interest.',
        solution: 'Prashant adopted the 55/25/20 framework: capping needs at NPR 24,750, lifestyle at NPR 11,250, and automating NPR 9,000 into monthly savings (NPR 5,000 into an SIP and NPR 4,000 into a Dashain Sinking Fund). By auditing his mobile banking statement, he discovered he was spending NPR 8,200 monthly on afternoon cafe snacks, which he replaced with office-provided tea. Within 10 months, he had built a NPR 60,000 emergency buffer, funded Dashain completely in cash without borrowing, and accumulated over NPR 55,000 in mutual fund units.'
      },
      calculatorShortcut: {
        slug: 'inflation',
        name: 'Nepal Inflation & Purchasing Power Calculator',
        desc: 'Calculate how Nepal’s 6-8% inflation erodes your idle cash savings and see the exact returns needed to grow your wealth.'
      },
      downloadableResources: [
        {
          title: 'Nepal Monthly Budget & Cash Flow Planner (Excel / Sheets)',
          type: 'Spreadsheet Template',
          size: '420 KB',
          href: 'assets/downloads/nepal-personal-budget-planner.csv'
        }
      ],
      faqs: [
        {
          q: 'What should I do if my room rent takes up more than 30% of my salary?',
          a: 'In Kathmandu, high rents are common for starter incomes. If your rent takes 40% of income, do not eliminate your savings; instead, compress your lifestyle/dining-out budget from 25% down to 10%-15%, consider sharing an apartment with a roommate, or negotiate utility inclusions with your landlord.'
        },
        {
          q: 'How much money should I leave in my digital wallets (eSewa/Khalti)?',
          a: 'Keep no more than NPR 2,000 to NPR 5,000 in your mobile wallet at any time-just enough for 3 to 4 days of small retail payments. Keeping large balances invites impulsive QR scanning and exposes you to total loss in case of phone theft or social engineering scams.'
        },
        {
          q: 'How can I save for Dashain if my monthly income is irregular or freelanced?',
          a: 'Calculate your average monthly net earnings over the past 6 months. Treat the lowest earning month as your baseline living budget. Whenever you experience a windfall or high-earning project, immediately divert 50% of the surplus into your festival sinking fund and tax reserve.'
        },
        {
          q: 'Is it better to pay off high-interest loans first or build an emergency fund?',
          a: 'Build a small initial starter buffer (e.g., NPR 25,000) first to handle immediate doctor visits without borrowing more. Once that starter buffer exists, aggressively channel every surplus rupee into eradicating high-interest debt (such as credit card balances or informal 24%+ loans).'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'The 50/30/20 Rule: A Realistic Guide for Nepali Earners',
          slug: '50-30-20-budget-rule',
          categorySlug: 'personal-finance',
          readTime: '12 min read'
        },
        nextGuide: {
          title: 'Complete Banking Guide for Smart Earners',
          slug: 'complete-banking-guide',
          readTime: '15 min read'
        },
        nextCalculator: {
          title: 'Nepal Inflation & Purchasing Power Calculator',
          slug: 'inflation-nepal'
        },
        nextGlossary: {
          title: 'Emergency Fund',
          term: 'Emergency Fund (आकस्मिक कोष)',
          def: 'Liquid cash reserve covering 3 to 6 months of living expenses kept safely in high-yield savings.'
        }
      }
    },
    np: {
      intro: 'बजेट भनेको आफ्नो रहर मार्ने वा कडा यातना दिने कुनै जटिल तालिका होइन; यो त महिना सुरु हुनुअगावै आफ्नो मिहिनेतको कमाइलाई सही ठाउँमा परिचालन गर्ने एक योजनाबद्ध खाका हो। सहरी नेपालमा जहाँ खाद्यान्न, कोठा भाडा र छोराछोरीको पढाइ खर्च वार्षिक ६% देखि ८% ले बढिरहेको छ, र जहाँ दशैँ, तिहार, छठ र बिहेको मौसममा एक्कासी ठूलो खर्च आइपर्छ-त्यहाँ "महिनाको अन्त्यमा जे बच्छ त्यही बचत गरौँला" भन्नु कहिल्यै धनी नहुने निश्चित बाटो हो। हरेक महिनाको १ गते बैंकमा तलब आएपछि यदि स्पष्ट योजना छैन भने, Fonepay QR को सानातिना खर्च, खाजा र बाहिरी रमाइलोमै पैसा कता बिलाउँछ पत्तै हुँदैन। आफ्नो खुद आम्दानीको हिसाब बुझेर, काठमाडौँको यथार्थ अनुसार ५०/३०/२० नियम लागू गरी चाडपर्वका लागि छुट्टै बचत कोष बनाउन सकेमा मात्र आर्थिक स्वतन्त्रता हासिल गर्न सकिन्छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-net-income-equation',
          title: 'खुद आम्दानीको हिसाब र डिजिटल QR को अदृश्य चुहावट',
          content: 'बजेट बनाउँदा सबैभन्दा पहिलो काम आफ्नो हातमा पर्ने खुद तलब (Net Take-Home Pay) पत्ता लगाउनु हो। नेपालको कानुन अनुसार रोजगारदाताले आधारभूत तलबबाट ११% सामाजिक सुरक्षा कोष (SSF) वा सञ्चय कोष र धारा ८७ अनुसार आयकर (TDS) काटेर मात्र बैंकमा रकम पठाउँछन्। यदि तपाईंको नियुक्ति पत्रमा तलब रु. ५०,००० लेखिएको छ भने बैंकमा करिब रु. ४१,५०० मात्र आउँछ। रु. ५०,००० नै खर्च गर्न पाइन्छ भन्ने सोच्दा पहिलो दिनमै १७% घाटा सुरु हुन्छ। यसका साथै, डिजिटल QR का साना खर्चहरू चिन्नुहोस्: दैनिक रु. ३५ को चिया, रु. १२० को दिउँसोको खाजा र अनलाइनबाट मगाइने खाना। दैनिक रु. ३५० का दरले QR स्क्यान गर्दा महिनामा रु. १०,५०० खर्च हुन्छ-जुन सुरुवाती तलबको २५% भन्दा बढी अदृश्य रूपमा खेर जानु हो।',
          callout: {
            type: 'important',
            title: 'बैंकमा जम्मा हुने खुद रकमबाट मात्र बजेट बनाउनुहोस्',
            text: 'वार्षिक कुल तलब (Gross Salary) वा वर्षको अन्त्यमा आउने अनिश्चित बोनसलाई आधार मानेर कहिल्यै बजेट नबनाउनुहोस्। हरेक महिना बैंकमा आउने वास्तविक रकमलाई मात्र १००% मानेर खर्च योजना बनाउनुपर्छ।'
          }
        },
        {
          num: 2,
          id: 'chap-2-adapting-50-30-20-urban-nepal',
          title: 'काठमाडौँ र सहरी नेपालका लागि ५०/३०/२० बजेट नियम',
          content: 'पश्चिमा देशहरूको ५०/३०/२० नियम (५०% आवश्यकता, ३०% चाहना, २०% बचत) लाई नेपालको सहरी जीवनमा केही परिमार्जन गर्नुपर्छ। काठमाडौँ, ललितपुर र पोखरामा घरभाडा निकै महँगो छ; एउटा २BHK फ्ल्याटको भाडा नै रु. २०,००० देखि रु. २८,००० सम्म पर्छ, जसले रु. ४०,००० तलब हुने युवाको आधाभन्दा बढी आम्दानी खान्छ। त्यसैले सहरी नेपालका लागि ५५/२५/२० को व्यावहारिक सूत्र अपनाउनुहोस्: (१) ५५% अनिवार्य आवश्यकता: घरभाडा, दाल-चामल-तरकारी, गाडी भाडा/पेट्रोल, इन्टरनेट, बिजुली, पानी र सामान्य औषधि। (२) २५% जीवनशैली र रमाइलो: साथीभाइसँग बाहिर खाना, लुगाफाटा, घुमघाम र व्यक्तिगत सोख। (३) २०% भविष्यको लगानी र बचत: आपतकालीन कोष, SIP म्युचुअल फण्ड, मुद्दती निक्षेप वा सेयर लगानी।',
          callout: {
            type: 'tip',
            title: 'यदि घरभाडाले ३५% भन्दा बढी खायो भने के गर्ने?',
            text: 'यदि महँगो घरभाडाले आम्दानीको ४०% खायो भने, आफ्नो २०% लगानीको हिस्सा नकाट्नुहोस्; बरु बाहिर खाने र घुमघाम गर्ने २५% को बजेटलाई घटाएर १५% मा झार्नुहोस्।'
          }
        },
        {
          num: 3,
          id: 'chap-3-dashain-sinking-funds',
          title: 'दशैँ, तिहार, छठ र बिहे खर्चका लागि सिङ्किङ फण्ड (Sinking Fund)',
          content: 'हरेक वर्ष असोज र कात्तिक महिनामा नेपाली परिवारहरूमा ठूलो आर्थिक दबाब पर्छ। नयाँ लुगा किन्ने, गाउँ जाने गाडी भाडा, खसी-बोकाको खर्च, र मान्यजन तथा भान्जा-भान्जीलाई दक्षिणा दिँदा १५ दिनमै रु. ५०,००० देखि रु. १,५०,००० सम्म खर्च हुन्छ। पूर्वतयारी नहुँदा मानिसहरू क्रेडिट कार्डको चर्को ब्याज (२४% देखि ३६%) वा आफन्तसँग ऋण लिन बाध्य हुन्छन्। यसको अचुक समाधान हो सिङ्किङ फण्ड: वर्षभरिको चाडपर्व र बिहे खर्चको अनुमान गर्नुहोस् (जस्तै: रु. ६०,०००), त्यसलाई १२ ले भाग गर्नुहोस् (मासिक रु. ५,०००), र हरेक महिना १ गते सो रकम छुट्टै बचत खातामा जम्मा गर्नुहोस्। दशैँ आउँदा तपाईंको खातामा पूरै पैसा तयार हुन्छ, र कसैसँग ऋण माग्नुपर्दैन।',
          callout: {
            type: 'tip',
            title: '१/१२ औँ भाग बचत गर्ने सूत्र',
            text: 'सूत्र: मासिक चाडपर्व बचत = वर्षभरिको सम्भावित चाडपर्व खर्च ÷ १२। यो रकम महिनाको १ गते तलब आउनासाथ अटोमेटिक ट्रान्सफर हुने गरी सेट गर्नुहोस्।'
          }
        },
        {
          num: 4,
          id: 'chap-4-emergency-fund-buffer',
          title: '६ महिनाको अभेद्य आपतकालीन कोष (Emergency Fund) निर्माण',
          content: 'जोखिमपूर्ण सेयर बजार वा जग्गामा लगानी गर्नुअघि तपाईंको अगाडि एउटा बलियो आर्थिक पर्खाल हुनुपर्छ। अचानक परिवारमा कसैलाई अस्पताल भर्ना गर्नुपर्दा, जागिर छुट्दा वा घरमा ठूलो मर्मत आइपर्दा यो कोषले बचाउँछ। नेपालमा सरकारी स्वास्थ्य सुरक्षा सीमित भएकाले परिवारको मुख्य कमाउने व्यक्तिका लागि कम्तीमा ६ महिनाको आधारभूत खर्च (Needs + ऋणको किस्ता) बराबरको कोष अनिवार्य हुन्छ। यदि तपाईंको मासिक आधारभूत खर्च रु. २८,००० छ भने, तपाईंको आपतकालीन कोष रु. १,६८,००० हुनुपर्छ। यो पूरै रकम दराजमा नगद राख्नु हुँदैन (महँगीले मूल्य घट्छ), न त ३ वर्षे मुद्दतीमा बन्दक राख्नुपर्छ। उत्तम उपाय: ३०% रकम वाणिज्य बैंकको बचत खातामा (तुरुन्तै ATM बाट झिक्न मिल्ने) र ७०% रकम ३ वा ६ महिने मुद्दती निक्षेपमा राख्नुपर्छ।',
          callout: {
            type: 'warning',
            title: 'के कुरा आपतकालीन खर्च होइन?',
            text: 'नयाँ आइफोन किन्ने, साथीहरूसँग अचानक पोखरा घुम्न जाने वा सेयर बजार बढेका बेला लगानी गर्ने कुराहरू आपतकालीन होइनन्। यस्ता कुरामा यो कोष चलाउनु भनेको परिवारलाई जोखिममा पार्नु हो।'
          }
        },
        {
          num: 5,
          id: 'chap-5-defeating-lifestyle-creep',
          title: 'बढ्दो विलासिता नियन्त्रण: नेपाली तलबमा आधा वृद्धिको नियम',
          content: 'जीवनशैलीको महँगी (Lifestyle Creep) धन सम्पत्ति सिध्याउने सबैभन्दा ठूलो अदृश्य शत्रु हो। जब कुनै कर्मचारीको तलब रु. ४५,००० बाट बढेर रु. ६०,००० पुग्छ, उसले तुरुन्तै महँगो कोठा सर्छ, महँगो बाइक किन्छ र ठूला रेस्टुरेन्ट धाउन थाल्छ। तीन महिनाभित्रै, महिनामा रु. १५,००० बढी कमाउँदा पनि उसको अवस्था फेरि उस्तै महिनाको अन्त्यमा पैसा नपुग्ने बन्दछ। यसबाट बच्न आधा वृद्धिको नियम (Half-Raise Rule) अपनाउनुहोस्: तलब जति बढ्छ, त्यसको ठीक ५०% रकम (रु. ७,५००) सीधै आफ्नो मासिक SIP वा कर्जा भुक्तानीमा थप्नुहोस्। बाँकी रहेको ५०% (रु. ७,५००) ले आफ्नो जीवनस्तर सुधार्नुहोस्। यसो गर्दा आज पनि खुसी भइन्छ र भविष्य पनि छिट्टै सुरक्षित बन्दछ।',
          callout: {
            type: 'tip',
            title: 'पैसा हातमा पर्नुअघि नै लगानीमा पठाउनुहोस्',
            text: 'बढेको तलब बैंकमा आएकै दिन अतिरिक्त रकम स्वतः लगानी खातामा जाने गरी स्थायी निर्देशन (Standing Instruction) मिलाउनुहोस् ताकि धेरै पैसा देख्नै नपरोस्।'
          }
        },
        {
          num: 6,
          id: 'chap-6-anti-budget-and-review',
          title: '३० मिनेटको मासिक समीक्षा र एन्टी-बजेटिङ (Anti-Budget) प्रणाली',
          content: 'दैनिक खाएको हरेक कप चिया कापीमा टिपेर राख्दा मानसिक तनाव हुन्छ र ९०% मानिसहरूले २ महिनामै बजेट बनाउन छाडिदिन्छन्। यसको सट्टा एन्टी-बजेट (पहिले आफूलाई भुक्तानी गर्नुहोस्) विधि अपनाउनुहोस्: (१) बैंक खाता १ मा तलब आएकै दिन, अटोमेटिक निर्देशनबाट २०% रकम खाता २ (लगानी र SIP) मा र १०% रकम खाता ३ (चाडपर्व र आपतकालीन) मा जान्छ। (२) अब खाता १ मा बाँकी रहेको ७०% रकम तपाईंको खर्च गर्ने पैसा हो। यसबाट ढुक्कसँग घरभाडा तिर्नुहोस्, खाजा खानुहोस् र रमाइलो गर्नुहोस्-किनकि तपाईंको बचत सुरुमै सुरक्षित भइसकेको छ। अनि महिनाको अन्तिम शनिबार ३० मिनेट बसेर समीक्षा गर्नुहोस्: बचत दर ठीक छ कि छैन जाँच्नुहोस् र अर्को महिनाको तयारी गर्नुहोस्।',
          callout: {
            type: 'tip',
            title: 'तीनवटा बैंक खाताको रणनीति',
            text: 'खाता १: तलब र दैनिक खर्च (ATM कार्ड भएको), खाता २: आपतकालीन र चाडपर्व कोष (पर्समा कार्ड नराख्ने), खाता ३: सेयर र TMS जोडिएको खाता।'
          }
        }
      ],
      nepalContext: 'नेपालमा व्यक्तिगत बैंकिङ र डिजिटल भुक्तानी प्रणाली नेपाल राष्ट्र बैंक (NRB) को एकीकृत निर्देशन अनुसार सञ्चालित छ। Fonepay, NepalPay र eSewa/Khalti जस्ता भुक्तानी सेवा प्रदायकहरूको विस्तारले गर्दा पैसा खर्च गर्न निकै सजिलो भएको छ, जसले गर्दा अनावश्यक खर्च नियन्त्रण गर्न बैंक खाता विभाजन (Account Separation) र connectIPS मार्फत स्वचालित मासिक बचत गर्नु सहरी नेपालीहरूका लागि अनिवार्य भइसकेको छ।',
      comparisonTable: {
        title: '५०/३०/२० बजेट नियम र काठमाडौँको जीवनशैली तुलना',
        caption: 'अन्तर्राष्ट्रिय ५०/३०/२० ढाँचा र काठमाडौँ उपत्यकाको वास्तविक खर्च संरचनाबीच तुलना',
        headers: ['वर्ग', '५०/३०/२० मानक नियम', 'काठमाडौँको वास्तविक खर्च', 'risePaisa व्यावहारिक सुझाव'],
        rows: [
          ['आधारभूत आवश्यकता (Needs)', 'खुद आम्दानीको ५०%', '५५% देखि ६५% (महँगो कोठा भाडा र रासन)', 'कोठा भाडा २५% भन्दा बढी नराख्ने; घरमै खाना बनाउने'],
          ['व्यक्तिगत चाहना (Wants)', 'खुद आम्दानीको ३०%', '१५% देखि २०% (सीमित खर्च)', 'क्याफे र रेस्टुरेन्ट QR खर्च घटाउने; ऋणमा सामान नकिन्ने'],
          ['बचत तथा लगानी (Savings)', 'खुद आम्दानीको २०%', '२०% देखि २५% (अनिवार्य बचत)', 'तलब आएकै दिन अटोमेटिक SIP र आपतकालीन कोषमा पठाउने'],
          ['दशैँ तथा चाडपर्व कोष', 'पश्चिमा मोडेलमा नभएको', 'मासिक ८.३% थप बजेट चाहिन्छ', '१ महिनाको खर्च बराबरको रकम १२ महिनामा बाँडेर जम्मा गर्ने']
        ]
      },
      practicalScenario: {
        persona: 'प्रशान्त, २७, मार्केटिङ अधिकृत (काठमाडौँ)',
        challenge: 'मासिक खुद रु. ४५,००० कमाउने प्रशान्तको महिनाको अन्त्यमा हात रित्तो हुन्थ्यो। कोठा भाडामा रु. २२,०००, बाहिर खाना र चिया-खाजामा रु. १४,००० खर्च हुन्थ्यो। दुई वर्ष जागिर खाँदा पनि एक रुपैयाँ बचत थिएन। दशैँ आउँदा उनले सहकर्मीसँग महिनाको २% ब्याजमा रु. ३५,००० ऋण लिनुपरेको थियो।',
        solution: 'प्रशान्तले ५५/२५/२० नियम लागू गरे: आवश्यकतामा रु. २४,७५०, रमाइलोमा रु. ११,२५० सीमा तोके, र महिनाको रु. ९,००० (रु. ५,००० SIP मा र रु. ४,००० दशैँ कोषमा) तलब आउनासाथ अटोमेटिक बचत गरे। मोबाइल बैंकिङको स्टेटमेन्ट हेर्दा उनले दिउँसोको खाजामा मात्रै महिनाको रु. ८,२०० खर्च गरिरहेको पत्ता लगाए, जसलाई घटाएर अफिसकै चिया खान थाले। १० महिनाभित्र उनको आपतकालीन कोषमा रु. ६०,००० जम्मा भयो, दशैँ बिनाकुनै ऋण आफ्नै बचतबाट मनाए, र म्युचुअल फण्डमा रु. ५५,००० भन्दा बढीको इकाइ जोड्न सफल भए।'
      },
      calculatorShortcut: {
        slug: 'inflation',
        name: 'नेपाल मुद्रास्फीति तथा क्रयशक्ति क्याल्कुलेटर',
        desc: 'नेपालमा ६-८% को महँगीले बैंकमा थन्किएको पैसाको मूल्य कसरी घटाउँछ र त्यसलाई जित्न कति प्रतिफल चाहिन्छ हिसाब गर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'नेपाल मासिक बजेट तथा नगद प्रवाह योजनाकार (एक्सेल / सिट्स)',
          type: 'स्प्रेडसिट टेम्प्लेट',
          size: '४२० KB',
          href: 'assets/downloads/nepal-personal-budget-planner.csv'
        }
      ],
      faqs: [
        {
          q: 'यदि मेरो कोठा भाडाले नै तलबको ३०% भन्दा बढी खायो भने के गर्ने?',
          a: 'काठमाडौँमा सुरुवाती तलब भएकाहरूका लागि भाडा महँगो हुनु सामान्य हो। यदि भाडाले ४०% खायो भने बचतको २०% नकाट्नुहोस्; बरु बाहिर खाने र घुमघाम गर्ने २५% को बजेटलाई १०% देखि १५% मा झार्नुहोस् वा साथीसँग फ्ल्याट सेयर गर्नुहोस्।'
        },
        {
          q: 'डिजिटल वालेट (eSewa/Khalti) मा कति रकम राख्नु उपयुक्त हुन्छ?',
          a: 'वालेटमा एकपटकमा रु. २,००० देखि रु. ५,००० भन्दा बढी नराख्नुहोस्-जुन ३-४ दिनको खुद्रा भुक्तानीका लागि पर्याप्त हुन्छ। धेरै पैसा वालेटमा राख्दा QR स्क्यान गरेर अनावश्यक खर्च गर्ने बानी बढ्छ र फोन हराउँदा जोखिम पनि हुन्छ।'
        },
        {
          q: 'यदि मेरो आम्दानी मासिक रूपमा घटबढ भइरहन्छ (Freelance) भने दशैँका लागि कसरी बचत गर्ने?',
          a: 'पछिल्लो ६ महिनाको औसत कमाइ हिसाब गर्नुहोस् र सबैभन्दा कम भएको महिनालाई आधार बनाएर खर्च योजना बनाउनुहोस्। कुनै महिना धेरै आम्दानी हुँदा, त्यो अतिरिक्त रकमको ५०% सीधै चाडपर्व कोष र कर कोषमा जम्मा गर्नुहोस्।'
        },
        {
          q: 'के पहिले महँगो ब्याजको ऋण तिर्ने कि आपतकालीन कोष बनाउने?',
          a: 'सुरुमा कम्तीमा रु. २५,००० जतिको सानो आपतकालीन बफर बनाउनुहोस् ताकि डाक्टरकहाँ जान फेरि ऋण लिनु नपरोस्। त्यसपछि भने बाँकी सबै बचत २४% भन्दा बढी ब्याज भएका क्रेडिट कार्ड वा व्यक्तिगत ऋण तिर्नमा लगाउनुहोस्।'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: '५०/३०/२० बजेट नियम: नेपाली कमाउनेहरूका लागि व्यावहारिक गाइड',
          slug: '50-30-20-budget-rule',
          categorySlug: 'personal-finance',
          readTime: '१२ मिनेट पढाइ'
        },
        nextGuide: {
          title: 'सचेत नागरिकका लागि बैंकिङको पूर्ण गाइड',
          slug: 'complete-banking-guide',
          readTime: '१५ मिनेट पढाइ'
        },
        nextCalculator: {
          title: 'नेपाल मुद्रास्फीति तथा क्रयशक्ति क्याल्कुलेटर',
          slug: 'inflation-nepal'
        },
        nextGlossary: {
          title: 'आकस्मिक कोष',
          term: 'इमर्जेन्सी फन्ड',
          def: 'अप्रत्याशित संकटको सामना गर्न ३ देखि ६ महिनाको खर्च बराबर बचत खातामा राखिने तरल रकम।'
        }
      }
    }
  },

  // ── 2. Complete Business Registration & Tax Guide ──
  'complete-business-guide': {
    id: 'complete-business-guide',
    slug: 'complete-business-guide',
    categorySlug: 'business',
    categoryName: { en: 'Business & Entrepreneurship', np: 'व्यवसाय तथा उद्यमशीलता' },
    title: {
      en: 'Complete Nepal Business Registration & Corporate Tax Guide',
      np: 'नेपालमा कम्पनी दर्ता र व्यावसायिक करको पूर्ण गाइड'
    },
    oneLineSummary: {
      en: 'The definitive entrepreneur’s handbook in Nepal: Sole Proprietorship vs Pvt Ltd, online registration at OCR, Ward trade licensing, Business PAN vs VAT (13%), mandatory SSF compliance, and corporate tax audits.',
      np: 'नेपालमा व्यवसाय दर्ताको सम्पूर्ण व्यावहारिक विधि: प्रालि भर्सेस एकलौटी फर्म, OCR मा अनलाइन कम्पनी दर्ता, वडा इजाजत, Business PAN र VAT (१३%), अनिवार्य SSF अनुपालन र संस्थागत कर अडिट।'
    },
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '16 min read', np: '१६ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: {
      en: 'Verified for Nepal Corporate & Tax Law (Companies Act 2063 & Income Tax Act 2058)',
      np: 'कम्पनी ऐन २०६३ तथा आयकर ऐन २०५८ अनुसार प्रमाणित'
    },
    prerequisites: [
      { title: 'Proposed Company Name & Objectives', type: 'Prerequisite' },
      { title: 'Promoter Citizenship Scans & Digital Signatures', type: 'Document' },
      { title: 'Draft MOA (प्रबन्धपत्र) & AOA (नियमावली)', type: 'Document' },
      { title: 'Registered Office Lease Agreement with Ward Details', type: 'Document' }
    ],
    en: {
      intro: 'Starting and running a formal enterprise in Nepal has historically been viewed as an intimidating bureaucratic labyrinth involving document brokers, municipal queues, and opaque tax compliance. Today, sweeping legislative modernization under the Companies Act 2063 and digital governance reforms at the Office of the Company Registrar (OCR) have streamlined the process significantly. Furthermore, government initiatives have waived statutory registration fees and capital-increase fees for startup private limited companies, making formal incorporation more accessible than ever. However, registering the company is merely Day 1: maintaining statutory corporate compliance across local Ward offices, the Inland Revenue Department (IRD) for VAT and withholding tax (TDS), the Social Security Fund (SSF) under the Labor Act 2074, and annual ROC filings under Chapter 51 is what separates thriving, bankable businesses from heavily penalized operations.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-entity-selection',
          title: 'Entity Selection: Sole Proprietorship vs Partnership vs Private Limited (Pvt Ltd)',
          content: 'Choosing the correct business vehicle determines your legal liability, tax burden, and fundraising capability. In Nepal, businesses operate under three common structures: (1) Sole Proprietorship (एकलौटी फर्म): Registered under the Department of Commerce or local municipal ward. It has zero corporate separation-the owner bears 100% unlimited personal liability. If the business defaults on a loan, banks can seize personal ancestral property. Net profits are taxed at progressive individual slabs (up to 39%). (2) Partnership (साझेदारी): Governed by the Partnership Act 2020, where two or more individuals share joint and unlimited liability. (3) Private Limited Company (Pvt Ltd - प्राइभेट लिमिटेड): Governed by the Companies Act 2063. A Pvt Ltd is an independent legal entity separate from its shareholders, providing absolute Limited Liability protection. Personal assets are completely safe. It can raise equity, issue shares, and is taxed at a flat corporate tax rate (typically 25%, or 20% for manufacturing).',
          callout: {
            type: 'important',
            title: 'Always Default to Private Limited for Growth',
            text: 'If you plan to raise angel investment, secure commercial bank financing, or hire employees, incorporate as a Private Limited company. Banks and institutional investors will rarely finance a sole proprietorship.'
          }
        },
        {
          num: 2,
          id: 'chap-2-ocr-step-by-step',
          title: 'Step-by-Step Online Company Registration at OCR (ocr.gov.np)',
          content: 'Company registration is 100% digital via the OCR web portal: (1) Name Approval: Create an account on ocr.gov.np, submit your proposed English and Nepali company name. Ensure it is unique and reflects your core objective (approval takes 24 to 48 hours). (2) Drafting MOA & AOA: Draft your Memorandum of Association (प्रबन्धपत्र) detailing objectives and authorized/issued/paid-up capital, and Articles of Association (नियमावली) detailing internal governance. Standard templates are available on OCR. (3) Document Upload: Upload citizenship scans of all promoters, the signed MOA/AOA, and witness signatures. (4) OCR Scrutiny & Approval: OCR legal officers inspect the clauses. Once cleared, the digital Certificate of Incorporation (दर्ता प्रमाणपत्र) is issued online with a unique corporate registration number. Government registration fees for startup private limited companies have been fully waived by national fiscal policy.',
          callout: {
            type: 'tip',
            title: 'Paid-Up Capital Strategy',
            text: 'Startups often state NPR 10,00,000 or NPR 50,00,000 as authorized capital. Since government registration fees are currently waived, you can choose a realistic authorized capital without paying heavy statutory stamp duties.'
          }
        },
        {
          num: 3,
          id: 'chap-3-ward-registration',
          title: 'Ward Business Registration & Local Municipal Business Tax',
          content: 'A common entrepreneur mistake is assuming an OCR certificate allows you to begin operations immediately. It does not. You must register your physical commercial establishment at your local Municipal Ward Office (वडा कार्यालय) within 30 days of incorporation. To register, submit: your OCR certificate, MOA/AOA, formal rental agreement with the property owner (घरबहाल सम्झौता), house owner’s property tax receipt (सम्पत्ति कर रसिद), and citizenship copies of promoters. The ward assesses an annual Business Tax (व्यवसाय कर) based on the nature and capital of your trade (ranging between NPR 2,000 and NPR 15,000 annually) and issues your official Ward Business Registration Certificate (व्यवसाय दर्ता प्रमाणपत्र) and Signboard License.',
          callout: {
            type: 'warning',
            title: 'Ward Inspection & Fine Penalties',
            text: 'Operating without ward registration can result in local municipal authorities locking and sealing your physical premises and levying back-dated penalty fines of up to 100% of the annual business tax.'
          }
        },
        {
          num: 4,
          id: 'chap-4-pan-vs-vat',
          title: 'Business PAN vs Value Added Tax (VAT - 13%) Thresholds',
          content: 'Every newly registered enterprise must visit the nearest Taxpayer Service Office (TSO - करदाता सेवा कार्यालय) to obtain a Business PAN (Permanent Account Number). However, whether you must register for 13% Value Added Tax (VAT) depends on statutory turnover thresholds defined in the Value Added Tax Act 2052: (1) Goods Trade: Mandatory VAT registration if annual sales turnover exceeds NPR 50 Lakhs (5 Million). (2) Service & Consultancy Trade: Mandatory VAT registration if annual turnover exceeds NPR 20 Lakhs (2 Million). (3) Mixed Trade: Mandatory VAT registration if turnover exceeds NPR 10 Lakhs. (4) Statutory Mandatory Businesses: Hardware, sanitaryware, automobiles, electronic goods, software distribution, and liquor trading must register in VAT regardless of turnover from Day 1. VAT-registered businesses must file monthly or bi-monthly VAT returns on the IRD portal by the 25th day of the following Nepali month.',
          callout: {
            type: 'important',
            title: 'Filing Zero Returns (शून्य विवरण)',
            text: 'Even if your business had zero transactions or sales in a given month, you MUST log in to the IRD portal and file a "Zero Return" before the 25th. Failing to file incurs a strict penalty of NPR 1,000 per month for PAN and NPR 0.1% of turnover or NPR 1,000 per month for VAT.'
          }
        },
        {
          num: 5,
          id: 'chap-5-ssf-and-labor-act',
          title: 'Social Security Fund (SSF) & Labor Act 2074 Compliance',
          content: 'Under the Labor Act 2074 and the Social Security Act 2075, formal enrollment in the Social Security Fund (SSF) is legally mandatory for all registered private enterprises from the day they hire their first formal employee. Contributions total 31% of the employee’s basic monthly salary: 20% contributed by the employer and 11% deducted from the employee. This fund finances four statutory security schemes: (1) Medical & Maternity Protection (1%), (2) Accident & Disability Insurance (1.4%), (3) Dependent Family Support (0.27%), and (4) Old-Age Pension & Gratuity Scheme (28.33%). Furthermore, under the Labor Act, employers must provide statutory public holidays (13 days), annual home leave (1 day per 20 worked), sick leave (12 days with half/full pay), and execute written employment contracts. Complying with SSF protects your company from wrongful termination lawsuits and labor court penalties.',
          callout: {
            type: 'tip',
            title: 'Tax Deductibility of SSF Contributions',
            text: 'The 20% employer contribution to SSF is 100% tax-deductible as an allowable business operating expense under Section 13 of the Income Tax Act 2058.'
          }
        },
        {
          num: 6,
          id: 'chap-6-corporate-tax-and-annual-filings',
          title: 'Corporate Tax Slabs, Vendor TDS & Chapter 51 OCR Filings',
          content: 'Corporate tax in Nepal is generally flat: 25% of net adjusted corporate profits for standard service, trading, and tech companies, and a concessionary 20% for domestic manufacturing and production enterprises. Banks and financial institutions face 30%. In addition, companies act as withholding agents: whenever you pay external consultants (15% TDS), office rent (10% TDS), or goods suppliers with VAT bills exceeding NPR 50,000 (1.5% TDS), you must deduct and deposit this tax to the government treasury by the 25th of the following month (E-TDS). Finally, every Private Limited company must hold an Annual General Meeting (AGM) within 6 months of fiscal year close and submit Chapter 51 filings to the OCR: audited balance sheets, auditor appointment reports, and shareholder register updates. Late filings trigger heavy compounding fines at the OCR.',
          callout: {
            type: 'important',
            title: 'Auditor Appointment Deadline',
            text: 'You must formally appoint an ICAN-licensed Registered Auditor within 3 months of incorporation and report the appointment to OCR via the online portal to maintain active compliance.'
          }
        }
      ],
      nepalContext: 'Corporate oversight in Nepal is shared by three primary regulators: the Office of the Company Registrar (OCR) under the Ministry of Industry, the Inland Revenue Department (IRD) under the Ministry of Finance, and local Municipal Ward offices under federal local government governance. Operating a business in Nepal requires harmonizing company registration, tax compliance, and labor standards to remain eligible for public procurement bids, bank loans, and foreign direct investment (FDI).',
      comparisonTable: {
        title: 'Sole Proprietorship vs Private Limited Company in Nepal',
        caption: 'Statutory comparison under the Company Act 2063 and Income Tax Act 2058',
        headers: ['Factor', 'Sole Proprietorship (एकलौटी फर्म)', 'Private Limited Company (प्राइभेट लिमिटेड)'],
        rows: [
          ['Registration Authority', 'Local Ward Office / Department of Commerce', 'Office of Company Registrar (OCR)'],
          ['Liability Protection', 'Unlimited (Personal property at full risk)', 'Limited strictly to invested share capital'],
          ['Initial Government Fee', 'NPR 1,000 - NPR 5,000 based on capital', 'NPR 0 (Govt waived OCR fee) + local taxes'],
          ['Statutory Audits', 'Optional for small turnover (< NPR 1 Crore)', 'Mandatory every year by licensed ICAN auditor'],
          ['Corporate Income Tax', 'Individual progressive slabs (up to 39%)', 'Flat 25% standard (20% for manufacturing)'],
          ['Foreign Investment (FDI)', 'Not permitted under foreign investment laws', 'Permitted through Department of Industry / NRB']
        ]
      },
      practicalScenario: {
        persona: 'Nabin & Smriti, 28 & 26, Tech Entrepreneurs in Kathmandu',
        challenge: 'Nabin and Smriti started a custom software development agency. They operated for 14 months under Nabin’s personal PAN, accepting payments into a personal savings account. When an international corporate client demanded a formal VAT invoice and a corporate tax clearance certificate to release a NPR 18,00,000 contract, they faced severe panic and potential tax audit penalties.',
        solution: 'Guided by RisePaisa, they registered a Private Limited company on ocr.gov.np within 4 business days at zero registration fees. They registered at their local Ward office, obtained a Business PAN with 13% VAT registration, enrolled both founders and their two junior developers in the Social Security Fund (SSF), and opened a corporate current account. Within 20 days, they issued a compliant VAT invoice, remitted the 1.5% and 15% TDS deductions cleanly, and secured an official Tax Clearance Certificate that allowed them to expand into overseas contract exports.'
      },
      calculatorShortcut: {
        slug: 'nepal-income-tax',
        name: 'Nepal Income Tax & TDS Calculator',
        desc: 'Calculate corporate income tax, employee SSF contributions, and vendor withholding tax (TDS) accurately.'
      },
      downloadableResources: [
        {
          title: 'Nepal Company Registration & Annual Compliance Checklist (PDF)',
          type: 'PDF Guide',
          size: '1.6 MB',
          href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html'
        }
      ],
      faqs: [
        {
          q: 'How much minimum paid-up capital is required to register a Private Limited company in Nepal?',
          a: 'Under the Companies Act 2063, there is no statutory minimum paid-up capital requirement for ordinary private limited companies (unlike public limited companies which require NPR 1 Crore). You can incorporate with any reasonable capital, such as NPR 1,00,000 or NPR 10,00,000.'
        },
        {
          q: 'What happens if a company fails to file annual returns to the OCR for multiple years?',
          a: 'The OCR levies progressive compounding fines under Section 81 of the Companies Act. If non-compliance persists past 3 years, the company is placed on the blacklisted defunct registry, promoters are barred from registering new entities, and reviving the company requires paying substantial penalty fees.'
        },
        {
          q: 'Can a single individual register a Private Limited company in Nepal?',
          a: 'Yes. The Companies Act explicitly permits Single-Person Companies (एकल व्यक्ति कम्पनी). You can be the 100% sole shareholder and Managing Director, retaining full corporate limited liability protection.'
        },
        {
          q: 'Is it mandatory to hire a full-time in-house accountant?',
          a: 'No. Small businesses and startups can outsource their bookkeeping and monthly VAT/TDS return filings to certified accounting firms or freelance registered auditors, which typically costs NPR 5,000 to NPR 15,000 per month.'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'Sole Proprietorship vs. Private Limited (Pvt Ltd) in Nepal',
          slug: 'business-structures-nepal',
          categorySlug: 'business',
          readTime: '15 min read'
        },
        nextGuide: {
          title: 'Complete Personal & Corporate Tax Guide',
          slug: 'complete-income-tax-guide',
          readTime: '16 min read'
        },
        nextCalculator: {
          title: 'Nepal Income Tax & TDS Calculator',
          slug: 'nepal-income-tax'
        },
        nextGlossary: {
          title: 'Value Added Tax (VAT)',
          term: 'VAT (१३% मूल्य अभिवृद्धि कर)',
          def: 'Mandatory indirect sales tax of 13% levied on goods and services above statutory registration thresholds.'
        }
      }
    },
    np: {
      intro: 'नेपालमा व्यवसाय वा कम्पनी दर्ता गर्नु विगतमा दलाल खोज्नुपर्ने, सरकारी कार्यालयहरूमा हप्तौँ धाउनुपर्ने र कर कार्यालयको डर हुने एउटा निकै झन्झटिलो काम मानिन्थ्यो। तर कम्पनी ऐन २०६३ मा भएका सुधार र कम्पनी रजिष्ट्रारको कार्यालय (OCR) को पूर्ण अनलाइन प्रणालीका कारण आज घरमै बसेर कम्प्युटरबाट प्राइभेट लिमिटेड कम्पनी दर्ता गर्न सकिन्छ। सरकारले स्टार्टअप र साना कम्पनीहरूका लागि दर्ता शुल्क तथा पुँजी वृद्धि शुल्क पूर्ण रूपमा निःशुल्क (Zero Fee) गरिदिएको छ। तर कम्पनी दर्ता गर्नु भनेको सुरुआत मात्र हो: स्थानीय वडा कार्यालयबाट व्यवसाय इजाजत लिने, आन्तरिक राजस्व कार्यालयबाट व्यावसायिक PAN र VAT (१३%) दर्ता गर्ने, श्रम ऐन अनुसार सामाजिक सुरक्षा कोष (SSF) मा आबद्ध हुने, र हरेक वर्ष कम्पनी रजिष्ट्रारमा विवरण बुझाउने (Chapter 51 Compliance) नियम नबुझेमा व्यवसायमा ठूलो कानुनी जरिवाना लाग्ने जोखिम हुन्छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-entity-selection',
          title: 'व्यवसायको स्वरूप छनोट: प्राइभेट लिमिटेड, एकलौटी फर्म कि साझेदारी?',
          content: 'व्यवसाय सुरु गर्नुअघि कुन कानुनी ढाँचा छनोट गर्ने भन्ने निर्णयले तपाईंको दायित्व, कर र भविष्यमा लगानी पाउने सम्भावना निर्धारण गर्छ। नेपालमा तीनवटा प्रमुख ढाँचा छन्: (१) एकलौटी फर्म (Sole Proprietorship): वाणिज्य विभाग वा वडा कार्यालयमा दर्ता हुन्छ। यसमा मालिक र व्यवसाय एउटै मानिन्छ-अर्थात् असीमित व्यक्तिगत दायित्व (Unlimited Liability) हुन्छ। भोलि व्यवसायमा घाटा भएमा वा ऋण तिर्न नसकेमा बैंकले तपाईंको व्यक्तिगत पैतृक सम्पत्ति लिलाम गर्न सक्छ। यसको नाफामा व्यक्तिगत स्ल्याब अनुसार ३९% सम्म कर लाग्छ। (२) साझेदारी (Partnership): दुई वा सोभन्दा बढी व्यक्ति मिलेर गरिने व्यवसाय, जहाँ सबै साझेदारको असीमित दायित्व हुन्छ। (३) प्राइभेट लिमिटेड (Pvt Ltd): कम्पनी ऐन २०६३ अनुसार दर्ता हुने छुट्टै कानुनी व्यक्ति। यसमा सीमित दायित्व (Limited Liability) हुन्छ; कम्पनी डुबे पनि सेयरधनीको व्यक्तिगत घर-जग्गा पूर्ण सुरक्षित रहन्छ। यसमा सपाट २५% (उत्पादनमूलक भए २०%) संस्थागत कर लाग्छ।',
          callout: {
            type: 'important',
            title: 'भविष्यमा व्यवसाय बढाउने हो भने प्रालि नै उत्तम',
            text: 'यदि भविष्यमा बैंकबाट व्यावसायिक ऋण लिने, नयाँ लगानीकर्ता भित्र्याउने वा कर्मचारी राख्ने योजना छ भने सिधै प्राइभेट लिमिटेड कम्पनी दर्ता गर्नुहोस्। बैंक र ठूला कम्पनीहरूले एकलौटी फर्मलाई पत्याउँदैनन्।'
          }
        },
        {
          num: 2,
          id: 'chap-2-ocr-step-by-step',
          title: 'OCR को वेबसाइट (ocr.gov.np) बाट अनलाइन कम्पनी दर्ता गर्ने चरणबद्ध विधि',
          content: 'कम्पनी रजिष्ट्रारको कार्यालयमा दर्ता प्रक्रिया १००% डिजिटल छ: (१) नाम स्वीकृत (Name Approval): ocr.gov.np मा खाता खोली आफ्नो प्रस्तावित कम्पनीको नेपाली र अंग्रेजी नाम पठाउनुहोस् (२४ देखि ४८ घण्टाभित्र स्वीकृत हुन्छ)। (२) प्रबन्धपत्र (MOA) र नियमावली (AOA) तयार गर्ने: कम्पनीको उद्देश्य, अधिकृत तथा चुक्ता पुँजी र सञ्चालकहरूको अधिकार उल्लेख भएको दस्ताबेज तयार गर्नुहोस्। यसको ढाँचा OCR कै वेबसाइटमा पाइन्छ। (३) कागजात अपलोड: संस्थापकहरूको नागरिकताको स्क्यान कपी, हस्ताक्षर र साक्षीको विवरण अपलोड गर्नुहोस्। (४) प्रमाणीकरण र दर्ता प्रमाणपत्र: अधिकृतहरूले कागजात जाँच गरेपछि अनलाइनबाटै डिजिटल दर्ता प्रमाणपत्र (Certificate of Incorporation) जारी हुन्छ। हाल सरकारले प्रालि दर्ता शुल्क पूर्ण रूपमा निःशुल्क गरेको छ।',
          callout: {
            type: 'tip',
            title: 'चुक्ता पुँजीको स्मार्ट रणनीति',
            text: 'सुरुवाती कम्पनीका लागि अधिकृत पुँजी रु. १० लाख वा रु. ५० लाख राख्नु उपयुक्त हुन्छ। सरकारी दर्ता दस्तुर निःशुल्क भएकाले पुँजी धेरै राख्दा पनि कुनै अतिरिक्त शुल्क तिर्नुपर्दैन।'
          }
        },
        {
          num: 3,
          id: 'chap-3-ward-registration',
          title: 'स्थानीय वडा कार्यालयमा व्यवसाय दर्ता र व्यवसाय कर',
          content: 'धेरै नयाँ उद्यमीहरूले कम्पनी रजिष्ट्रारको प्रमाणपत्र हात परेपछि व्यवसाय सुरु गर्न पाइयो भनी सोच्छन्। तर त्यो अधुरो हो। कम्पनी दर्ता भएको ३० दिनभित्र आफ्नो कार्यालय रहेको स्थानीय वडा कार्यालयमा व्यवसाय दर्ता गराउनु अनिवार्य छ। यसका लागि आवश्यक कागजात: कम्पनी दर्ता प्रमाणपत्र, प्रबन्धपत्र/नियमावली, घरबेटीसँग गरिएको घरबहाल सम्झौता, घरबेटीको चालु आर्थिक वर्षको सम्पत्ति कर तिरेको रसिद, र संस्थापकहरूको नागरिकता। वडा कार्यालयले पुँजी र प्रकृतिका आधारमा वार्षिक व्यवसाय कर (सामान्यतया रु. २,००० देखि रु. १५,००० सम्म) लिई व्यवसाय दर्ता प्रमाणपत्र र साइनबोर्ड इजाजत प्रदान गर्दछ।',
          callout: {
            type: 'warning',
            title: 'वडा दर्ता नगर्दा लाग्ने जरिवाना',
            text: 'वडा दर्ता नगरी व्यवसाय सञ्चालन गरेमा स्थानीय नगर प्रहरीले कार्यालयमा तालाबन्दी गर्न सक्छ र १००% सम्म जरिवाना तिराउन सक्छ।'
          }
        },
        {
          num: 4,
          id: 'chap-4-pan-vs-vat',
          title: 'व्यावसायिक PAN र मूल्य अभिवृद्धि कर (VAT - १३%) को सीमा',
          content: 'कम्पनी दर्ता भएपछि नजिकको आन्तरिक राजस्व कार्यालय (करदाता सेवा कार्यालय) मा गई व्यावसायिक PAN लिनुपर्छ। तर १३% मूल्य अभिवृद्धि कर (VAT) मा दर्ता हुने कि नहुने भन्ने कुरा कारोबारको वार्षिक सीमामा भर पर्छ: (१) वस्तुको कारोबार (सामान किनबेच): वार्षिक कारोबार रु. ५० लाखभन्दा बढी भएमा अनिवार्य भ्याट दर्ता। (२) सेवा तथा परामर्श (Services & Consulting): वार्षिक कारोबार रु. २० लाखभन्दा बढी भएमा अनिवार्य भ्याट दर्ता। (३) मिश्रित कारोबार: वार्षिक रु. १० लाखभन्दा बढी भएमा अनिवार्य भ्याट। (४) विशेष व्यवसाय: हार्डवेयर, सेनेटरी, गाडी, मदिरा, सफ्टवेयर बिक्री जस्ता व्यवसायले कारोबार जतिसुकै भए पनि पहिलो दिनमै भ्याट दर्ता गर्नुपर्छ। भ्याटमा दर्ता भएकाले हरेक महिनाको २५ गतेभित्र IRD को पोर्टलमा भ्याट विवरण बुझाउनुपर्छ।',
          callout: {
            type: 'important',
            title: 'कारोबार नभए पनि शून्य विवरण (Zero Return) बुझाउनैपर्ने नियम',
            text: 'यदि कुनै महिना कम्पनीको १ रुपैयाँ पनि कारोबार भएन भने पनि २५ गतेभित्र अनलाइनबाट "शून्य विवरण" बुझाउनैपर्छ। विवरण नबुझाएमा प्रति महिना रु. १,००० का दरले जरिवाना लाग्छ।'
          }
        },
        {
          num: 5,
          id: 'chap-5-ssf-and-labor-act',
          title: 'सामाजिक सुरक्षा कोष (SSF) र श्रम ऐन २०७४ को बाध्यात्मक अनुपालन',
          content: 'श्रम ऐन २०७४ र सामाजिक सुरक्षा ऐन २०७५ अनुसार, कुनै पनि निजी कम्पनीले कर्मचारी राख्नासाथ सामाजिक सुरक्षा कोष (SSF) मा सूचीकृत हुनु कानुनी रूपमा अनिवार्य छ। यसमा कर्मचारीको आधारभूत तलबको कुल ३१% रकम जम्मा हुन्छ: २०% रोजगारदाता कम्पनीले थपिदिने र ११% कर्मचारीको तलबबाट कट्टी हुने। यसले कर्मचारीलाई ४ वटा सुविधा दिन्छ: (१) औषधि उपचार तथा मातृत्व सुरक्षा (१%), (२) दुर्घटना तथा अशक्तता (१.४%), (३) आश्रित परिवार सुरक्षा (०.२७%), र (४) अवकाश तथा पेन्सन योजना (२८.३३%)। साथै श्रम ऐन अनुसार वर्षमा १३ दिन सार्वजनिक बिदा, घर बिदा, बिरामी बिदा र अनिवार्य लिखित नियुक्ति पत्र दिनुपर्छ। SSF पालना गर्दा कम्पनी भविष्यमा श्रम अदालतको मुद्दा र विवादबाट जोगिन्छ।',
          callout: {
            type: 'tip',
            title: 'कम्पनीले थपिदिएको २०% SSF खर्च करमा कट्टी हुन्छ',
            text: 'कम्पनीले कर्मचारीका लागि हालिदिएको २०% SSF रकमलाई आयकर ऐन अनुसार शतप्रतिशत व्यावसायिक खर्च (Operating Expense) का रूपमा कट्टी गर्न पाइन्छ, जसले कम्पनीको खुद नाफा घटाएर कर बचत गर्छ।'
          }
        },
        {
          num: 6,
          id: 'chap-6-corporate-tax-and-annual-filings',
          title: 'संस्थागत कर (Corporate Tax), अग्रिम कर कट्टी (TDS) र वार्षिक अडिट',
          content: 'नेपालमा कम्पनीको खुद नाफामा सामान्यतया २५% संस्थागत कर लाग्छ (उत्पादनमूलक उद्योग भए २०% र बैंक तथा वित्तीय संस्था भए ३०%)। यसका साथै, कम्पनीले भुक्तानी गर्दा अग्रिम कर कट्टी (TDS) गर्नुपर्छ: बाहिरी कन्सल्टेन्टलाई भुक्तानी गर्दा १५%, कार्यालय भाडामा १०%, र रु. ५०,००० भन्दा माथिका भ्याट बिल भएका सामान खरिदमा १.५% TDS काटेर अर्को महिनाको २५ गतेभित्र सरकारी खातामा दाखिला (E-TDS) गर्नुपर्छ। आर्थिक वर्ष सकिएको ६ महिनाभित्र साधारण सभा (AGM) गरी इजाजतप्राप्त चार्टर्ड एकाउन्टेन्ट वा दर्तावाला लेखापरीक्षकबाट अडिट गराउनुपर्छ र कम्पनी रजिष्ट्रारमा दफा ५१ अनुसार वार्षिक प्रतिवेदन (Balance Sheet, Audit Report) बुझाउनुपर्छ। विवरण नबुझाएमा OCR ले ठूलो जरिवाना लगाउँछ।',
          callout: {
            type: 'important',
            title: 'लेखापरीक्षक (Auditor) नियुक्ति गर्ने समयसीमा',
            text: 'कम्पनी दर्ता भएको ३ महिनाभित्र आधिकारिक लेखापरीक्षक नियुक्त गरी सोको जानकारी अनलाइन पोर्टल मार्फत कम्पनी रजिष्ट्रारको कार्यालयमा पेश गर्नुपर्छ।'
          }
        }
      ],
      nepalContext: 'नेपालमा व्यावसायिक अनुपालन मुख्यतया तीनवटा निकायसँग सम्बन्धित छ: उद्योग मन्त्रालय मातहतको कम्पनी रजिष्ट्रारको कार्यालय (OCR), अर्थ मन्त्रालय मातहतको आन्तरिक राजस्व विभाग (IRD), र स्थानीय तह मातहतका वडा कार्यालयहरू। यी तीनवटै निकायको नियम पालना गरेर पारदर्शी रूपमा सञ्चालन गरिएका कम्पनीहरूले मात्र बैंकबाट सहुलियतपूर्ण कर्जा लिन, सरकारी टेन्डरमा भाग लिन र विदेशी लगानी (FDI) भित्र्याउन सक्दछन्।',
      comparisonTable: {
        title: 'नेपालमा व्यक्तिगत फर्म र प्राइभेट लिमिटेड कम्पनीको कानुनी तुलना',
        caption: 'कम्पनी ऐन २०६३ र आयकर ऐन २०५८ बमोजिमका मुख्य भिन्नताहरू',
        headers: ['मापदण्ड', 'व्यक्तिगत/एकलौटी फर्म', 'प्राइभेट लिमिटेड कम्पनी'],
        rows: [
          ['दर्ता गर्ने निकाय', 'स्थानीय वडा कार्यालय / वाणिज्य विभाग', 'कम्पनी रजिष्ट्रारको कार्यालय (OCR)'],
          ['दायित्व (Liability)', 'असीमित (व्यवसाय डुबेमा व्यक्तिगत घरजग्गा रोक्का)', 'सीमित (लगानी गरेको सेयर पुँजीसम्म मात्र जोखिम)'],
          ['सुरुवाती सरकारी दस्तुर', 'पुँजी अनुसार रु. १,००० देखि रु. ५,०००', 'रु. ० (सरकारले OCR दस्तुर छुट दिएको)'],
          ['वार्षिक लेखापरीक्षण (Audit)', 'सानो कारोबारमा ऐच्छिक (रु. १ करोडमुनि)', 'ICAN दर्तावाल अडिटरबाट हरेक वर्ष अनिवार्य'],
          ['लाग्ने करको दर', 'व्यक्तिगत प्रगतिशील दर (अधिकतम ३९% सम्म)', 'फ्ल्याट २५% (उत्पादनमूलक उद्योगलाई २०%)'],
          ['विदेशी लगानी (FDI)', 'कानुनी रूपमा विदेशी लगानी ल्याउन नमिल्ने', 'उद्योग विभाग र राष्ट्र बैंकको स्वीकृतिमा ल्याउन मिल्ने']
        ]
      },
      practicalScenario: {
        persona: 'नबिन र स्मृति, २८ र २६, प्रविधि उद्यमी (काठमाडौँ)',
        challenge: 'नबिन र स्मृतिले सफ्टवेयर डेभलपमेन्टको काम सुरु गरे। १४ महिनासम्म उनीहरूले नबिनको व्यक्तिगत PAN र व्यक्तिगत बचत खाताबाटै कारोबार चलाए। जब एउटा ठूलो विदेशी कम्पनीले रु. १८,००,००० को प्रोजेक्ट दिन आधिकारिक भ्याट बिल र कर चुक्ता प्रमाणपत्र माग्यो, उनीहरू व्यक्तिगत खातामा यत्रो रकम लिँदा कर अनुसन्धानको फन्दामा पर्ने डरले आत्तिए।',
        solution: 'risePaisa को बिजनेस गाइड अनुसार उनीहरूले ocr.gov.np बाट ४ दिनमै निःशुल्क प्रालि कम्पनी दर्ता गरे। वडा कार्यालयमा व्यवसाय दर्ता गरी १३% भ्याटसहितको व्यावसायिक PAN लिए, दुवै संस्थापक र २ जना डेभलपरलाई SSF मा जोडे र बैंकमा चालू खाता (Current Account) खोले। २० दिनभित्र उनीहरूले आधिकारिक भ्याट बिल जारी गरी १.५% र १५% TDS सही समयमा तिरे, र पहिलो वर्षमै कर चुक्ता प्रमाणपत्र लिएर ठूला अन्तर्राष्ट्रिय प्रोजेक्टहरू सुरक्षित गरे।'
      },
      calculatorShortcut: {
        slug: 'nepal-income-tax',
        name: 'नेपाल आयकर तथा TDS क्याल्कुलेटर',
        desc: 'कम्पनीको संस्थागत कर, कर्मचारीको SSF रकम र भेन्डरहरूलाई भुक्तानी गर्दा काट्नुपर्ने TDS को सही हिसाब गर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'नेपाल कम्पनी दर्ता तथा वार्षिक अनुपालन चेकलिस्ट (PDF)',
          type: 'PDF गाइड',
          size: '१.६ MB',
          href: 'assets/downloads/nepal-company-registration-compliance-checklist.html'
        }
      ],
      faqs: [
        {
          q: 'नेपालमा प्राइभेट लिमिटेड कम्पनी खोल्न न्यूनतम कति पुँजी चाहिन्छ?',
          a: 'कम्पनी ऐन २०६३ अनुसार साधारण प्रालि कम्पनी दर्ता गर्न कुनै न्यूनतम चुक्ता पुँजी तोकिएको छैन। तपाईंले रु. १ लाख वा रु. १० लाख जतिसुकै पुँजी राखेर पनि कम्पनी दर्ता गर्न सक्नुहुन्छ।'
        },
        {
          q: 'यदि कम्पनीले वर्षौँसम्म कम्पनी रजिष्ट्रार (OCR) मा विवरण बुझाएन भने के हुन्छ?',
          a: 'दफा ८१ अनुसार कम्पनी रजिष्ट्रारले वार्षिक रूपमा जरिवाना जोड्दै जान्छ। ३ वर्षभन्दा बढी विवरण नबुझाएमा कम्पनीलाई निष्कृय (Defunct) कालोसूचीमा राखिन्छ, सञ्चालकहरूले अर्को नयाँ कम्पनी खोल्न पाउँदैनन्, र कम्पनी ब्युँताउन लाखौँ जरिवाना तिर्नुपर्छ।'
        },
        {
          q: 'के एकजना मात्र व्यक्तिले प्राइभेट लिमिटेड कम्पनी दर्ता गर्न पाउँछ?',
          a: 'पाउँछ। कम्पनी ऐनले "एकल व्यक्ति कम्पनी" (Single-Person Company) को पूर्ण कानुनी मान्यता दिएको छ। तपाईं एक्लै १००% सेयरधनी र प्रबन्ध सञ्चालक बनेर प्रालि कम्पनीका सम्पूर्ण सीमित दायित्व सुविधाहरू लिन सक्नुहुन्छ।'
        },
        {
          q: 'के कम्पनी दर्ता गर्नासाथ पूर्णकालीन एकाउन्टेन्ट राख्नैपर्छ?',
          a: 'पर्दैन। साना कम्पनी र स्टार्टअपहरूले बाहिरका एकाउन्टिङ फर्म वा दर्तावाला लेखापरीक्षकहरूलाई आउटसोर्स गरी मासिक रु. ५,००० देखि रु. १५,००० मा भ्याट, TDS र अडिटको सम्पूर्ण काम गराउन सक्छन्।'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'नेपालमा व्यक्तिगत फर्म र प्राइभेट लिमिटेड (Pvt Ltd) बीचको भिन्नता',
          slug: 'business-structures-nepal',
          categorySlug: 'business',
          readTime: '१५ मिनेट पढाइ'
        },
        nextGuide: {
          title: 'नेपालमा व्यक्तिगत तथा व्यावसायिक आयकरको पूर्ण गाइड',
          slug: 'complete-income-tax-guide',
          readTime: '१६ मिनेट पढाइ'
        },
        nextCalculator: {
          title: 'नेपाल आयकर तथा टीडीएस क्याल्कुलेटर',
          slug: 'nepal-income-tax'
        },
        nextGlossary: {
          title: 'मूल्य अभिवृद्धि कर (भ्याट)',
          term: 'भ्याट (१३%)',
          def: 'वस्तु तथा सेवाको उत्पादन तथा बिक्री वितरणका प्रत्येक चरणमा लाग्ने १३% अप्रत्यक्ष कर।'
        }
      }
    }
  },

  // ── 3. Complete Digital Payments Guide ─────────────
  'complete-digital-payments-guide': {
    id: 'complete-digital-payments-guide',
    slug: 'complete-digital-payments-guide',
    categorySlug: 'digital-payments',
    categoryName: { en: 'Digital Payments & FinTech', np: 'डिजिटल भुक्तानी तथा फिन्टेक' },
    title: {
      en: 'Complete Nepal Digital Payments & FinTech Guide',
      np: 'नेपालमा डिजिटल भुक्तानी र फिन्टेकको पूर्ण गाइड'
    },
    oneLineSummary: {
      en: 'The definitive handbook to digital financial rails in Nepal: connectIPS, Fonepay vs NepalPay QR interoperability, NRB transaction limits, reversing accidental transfers, and defending against OTP cyber scams.',
      np: 'नेपालमा डिजिटल भुक्तानीको सम्पूर्ण व्यावहारिक गाइड: connectIPS, Fonepay र NepalPay QR नेटवर्क, राष्ट्र बैंकको कारोबार सीमा, गल्तीले अर्कै नम्बरमा गएको पैसा फिर्ता ल्याउने तरिका र साइबर ठगीबाट बच्ने उपाय।'
    },
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '13 min read', np: '१३ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: {
      en: 'Verified for NRB Payment Systems Department Directives',
      np: 'नेपाल राष्ट्र बैंक भुक्तानी प्रणाली विभागको निर्देशन अनुसार प्रमाणित'
    },
    prerequisites: [
      { title: 'Bank Account with Active Mobile Banking', type: 'Prerequisite' },
      { title: 'Registered Mobile Number Tied to Citizenship', type: 'Document' },
      { title: 'connectIPS Linked & Verified Account', type: 'Prerequisite' }
    ],
    en: {
      intro: 'Digital payments in Nepal have undergone an exponential revolution over the past decade. Governed strictly by Nepal Rastra Bank (NRB) under the Payment and Settlement Act 2075 and Payment Systems Directives, cash is rapidly becoming secondary to instant electronic rails. Today, daily vegetable purchases, municipal tax payments, government revenue stamps, and multi-lakh interbank settlements occur in seconds. However, the ecosystem is comprised of multiple distinct layers-national clearing switches (NCHL connectIPS, RTGS, NPI), private payment service operators (Fonepay, SmartChoice), licensed digital wallets (eSewa, Khalti, IME Pay), and commercial banking apps. Knowing which rail minimizes transfer fees, understanding daily transaction limits, knowing how to recover money sent to the wrong account, and recognizing social engineering scams are vital digital survival skills for modern Nepalis.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-payment-rails',
          title: 'The Core Payment Rails: connectIPS vs Digital Wallets vs Mobile Apps',
          content: 'Every digital transaction in Nepal travels across one of three primary architectures: (1) National Payment Switch & connectIPS: Operated by Nepal Clearing House Limited (NCHL - owned by NRB and commercial banks). connectIPS links directly to your core bank account without holding money in an intermediary wallet. It powers government tax payments, customs duty, C-ASBA stock refunds, and high-value interbank fund transfers at lowest regulated fees (NPR 2 to NPR 8). (2) Digital Wallets (eSewa, Khalti, IME Pay): Licensed as Payment Service Providers (PSPs). Wallets act as semi-closed digital reserves where you load funds via mobile banking or cash agents. They excel at micro-payments: movie tickets, mobile top-ups, internet renewals, and airline ticketing. (3) Bank Mobile Banking Apps: Built on white-label banking engines (like F1Soft) integrated with Fonepay switches, allowing direct peer-to-peer and QR merchant debits.',
          callout: {
            type: 'tip',
            title: 'Fee Optimization Rule',
            text: 'For transferring NPR 50,000 or NPR 1,00,000 between different banks, always use connectIPS directly instead of mobile wallets. connectIPS charges a flat NPR 8, whereas wallet-to-bank cashouts often incur substantial percentage fees.'
          }
        },
        {
          num: 2,
          id: 'chap-2-qr-interoperability',
          title: 'QR Payments & National Interoperability (Fonepay & NepalPay)',
          content: 'The widespread adoption of QR codes has digitized millions of micro-merchants across Nepal, from high-end department stores to local fruit carts. The infrastructure is dominated by two national QR frameworks: (1) Fonepay: Operated by F1Soft, Fonepay connects over 60+ BFIs and wallets. When you scan a Fonepay QR at a merchant, your bank app debits your savings account in real time. (2) NepalPay QR: Introduced by NCHL as part of the National Payment Switch (NPS) to enforce national interoperability, allowing any bank app or wallet to scan any certified merchant QR code regardless of issuing bank. Under NRB directives, retail QR transactions for personal goods and services carry zero Merchant Discount Rate (MDR) or consumer fees, ensuring fee-free payments for ordinary shoppers.',
          callout: {
            type: 'important',
            title: 'Static vs Dynamic QR Security',
            text: 'Static QR stickers glued to merchant counters can be tampered with or covered by fraudulent stickers. Always verify that the recipient business name displayed on your phone screen matches the shop name before entering your transaction PIN.'
          }
        },
        {
          num: 3,
          id: 'chap-3-nrb-transaction-limits',
          title: 'NRB Digital Transaction Limits & Tier Caps',
          content: 'To prevent money laundering, combat terror financing, and mitigate consumer losses from compromised credentials, Nepal Rastra Bank enforces strict digital transaction caps across all payment rails: (1) Mobile Banking Apps (QR & P2P): Standard daily transfer limit is capped at NPR 2,00,000 per day (with per-transaction caps of NPR 1,00,000) and monthly caps up to NPR 10,00,000 for standard biometric-verified accounts. (2) Digital Wallets (eSewa/Khalti): Wallet-to-wallet transfer is capped at NPR 25,000 per transaction, NPR 1,00,000 per day, and NPR 5,00,000 per month. Overnight wallet balance hold is legally capped at NPR 50,000. (3) connectIPS: Supports higher daily limits-up to NPR 20,00,000 per day via web portal and NPR 10,00,000 per day via mobile app.',
          callout: {
            type: 'tip',
            title: 'Temporarily Raising Limits for Large Purchases',
            text: 'If you need to pay for a vehicle or hospital bill exceeding standard digital limits, you can request an instant limit increase through your commercial bank branch or use the Real Time Gross Settlement (RTGS) system for multi-million transfers.'
          }
        },
        {
          num: 4,
          id: 'chap-4-cyber-security-scams',
          title: 'Cyber Security: Defending Against OTP Phishing, Social Engineering & SIM Swaps',
          content: 'Financial fraud in Nepal rarely occurs through hacking bank core servers; instead, over 95% of fraud involves Social Engineering targeting human psychology. The three most prevalent cyber scams in Nepal are: (1) Fake Lottery / Parcel Scam: Fraudsters contact victims via WhatsApp/Viber claiming they have won NPR 25 Lakhs from a lottery or an overseas parcel, instructing them to transfer "customs fees" via eSewa. (2) OTP Phishing: Impersonators posing as bank customer support or telecommunications staff claim your mobile banking is expiring and ask you to read back the 6-digit SMS verification code. (3) Fake Screenshot Fraud: Scammers show a fake fabricated mobile banking payment screenshot to storekeepers without funds actually transferring. Never disclose your OTP or MPIN to anyone, including bank managers.',
          callout: {
            type: 'warning',
            title: 'The Golden Rule of OTP',
            text: 'No commercial bank, wallet provider, or police officer in Nepal will ever ask for your 6-digit SMS OTP. The moment someone asks for an OTP, they are actively attempting to steal your money.'
          }
        },
        {
          num: 5,
          id: 'chap-5-accidental-transfers-recovery',
          title: 'What to Do If You Send Money to the Wrong Account or Number',
          content: 'Mistyping a single digit in a mobile number or bank account is a common panic-inducing mistake. Under NRB Payment Systems regulations, banks and wallet providers cannot unilaterally reverse a transaction without the recipient’s legal consent, as funds become property of the receiving account. However, follow this immediate 4-step recovery protocol: (1) Instant Freeze Request: Contact your bank or wallet support within 15 minutes with the Transaction Reference ID and request a formal hold on the transaction. (2) Reach Out Professionally: Call the unintended recipient politely, explain the honest clerical error, and offer to provide bank verification receipts. (3) Formal Bank Grievance: If the recipient refuses to return the money, file a formal complaint at your bank’s Grievance Department under Section 19 of the Payment and Settlement Act. (4) Cyber Bureau & Ward Police: If the recipient unethically withdraws or transfers your funds, file an immediate complaint with the Nepal Police Cyber Bureau (Bhotahiti, Kathmandu) for unlawful enrichment under the Electronic Transactions Act 2063.',
          callout: {
            type: 'important',
            title: 'Withholding Accidental Funds Is a Criminal Offense',
            text: 'Under Nepali civil law, retaining money deposited by mistake constitutes unlawful enrichment (अनुचित लाभ). The recipient is legally obligated to return it and can face banking offence prosecution if they deliberately withdraw it.'
          }
        },
        {
          num: 6,
          id: 'chap-6-usd-prepaid-travel-cards',
          title: 'Cross-Border Digital Payments: NRB USD 500 Prepaid Online Cards',
          content: 'Due to strict capital control regulations under the Foreign Exchange Regulation Act 2019, Nepali citizens cannot freely make international card payments. However, to facilitate legitimate digital consumption (such as purchasing Coursera courses, domain names, Canva subscriptions, or international exam fees), NRB introduced the USD 500 Prepaid Dollar Card facility through commercial and development banks. Any citizen holding a Personal PAN and an active bank account can obtain a prepaid card loaded with up to USD 500 per fiscal year. Issuance fees range between NPR 500 and NPR 1,500, and users must declare that the card will not be used for gambling, cryptocurrency, or forex trading-activities punishable under Nepali law.',
          callout: {
            type: 'tip',
            title: 'PAN Linking Is Mandatory for Dollar Cards',
            text: 'Your USD 500 spending is tracked in NRB’s central reporting system against your PAN. Spending across multiple cards from different banks in the same fiscal year is automatically flagged by NRB.'
          }
        }
      ],
      nepalContext: 'Digital payments in Nepal are governed by Nepal Rastra Bank’s Payment Systems Department (भुक्तानी प्रणाली विभाग) under the Payment and Settlement Act 2075. Commercial banks, licensed PSPs (wallets), and PSOs (switches) are subject to regular cybersecurity audits, ISO 27001 compliance standards, and mandatory grievance redressal mechanisms to guarantee consumer financial safety.',
      comparisonTable: {
        title: 'Nepal Digital Payment Rails Comparison',
        caption: 'Operational limits and fee structures governed by NRB Payment Systems Directives',
        headers: ['Payment Channel', 'Operator / Backbone', 'Transfer Charges', 'Daily Limit', 'Best Financial Use'],
        rows: [
          ['Digital Wallets (eSewa, Khalti)', 'Licensed PSPs', 'Free wallet-to-wallet; bank pull NPR 0 - 10', 'NPR 50,000 - NPR 1,00,000 / day', 'Mobile recharges, merchant retail QR, utilities'],
          ['Mobile Banking (Fonepay/NepalPay)', 'Commercial Banks / Switches', 'NPR 10 - 11 interbank transfer', 'NPR 2,00,000 - NPR 3,00,000 / day', 'Merchant QR payments, room rent, salary credit'],
          ['connectIPS', 'National Clearing House (NCHL)', 'NPR 2 to NPR 8 per transaction', 'NPR 20,00,000 / day (Web)', 'Large fund transfers, tax, mutual fund SIPs, broker dues'],
          ['RTGS', 'Nepal Rastra Bank (NRB)', 'Minimal / Free for wholesale', 'Above NPR 2,00,000 (No upper cap)', 'Real estate settlements, institutional transfers']
        ]
      },
      practicalScenario: {
        persona: 'Aayush, 24, University Student and Freelancer in Pokhara',
        challenge: 'Aayush earned small freelance income in Pokhara. He kept NPR 48,000 in his mobile wallet. One afternoon, he received a phone call from someone claiming to be from "eSewa Customer Care" asking for his OTP to upgrade his account to avoid a permanent account ban. Panicked, Aayush almost shared the code before stopping.',
        solution: 'Remembering RisePaisa’s cyber security rule that banks never ask for OTPs, Aayush hung up immediately and called official customer support. He discovered his account credentials had been targeted in a phishing attempt. He promptly updated his MPIN, enabled biometric fingerprint login, and transferred NPR 45,000 of his idle wallet funds into a Class A bank savings account earning 5.5% interest, keeping only NPR 3,000 in his wallet for daily expenses.'
      },
      calculatorShortcut: {
        slug: 'inflation',
        name: 'Nepal Cash Drag & Inflation Calculator',
        desc: 'See how keeping excessive non-interest-earning balances in digital wallets loses purchasing power over time.'
      },
      downloadableResources: [
        {
          title: 'Nepal Cyber Safety & Digital Payment Protocol Guide (PDF)',
          type: 'PDF Guide',
          size: '1.3 MB',
          href: 'assets/downloads/nepal-digital-payment-safety-guide.html'
        }
      ],
      faqs: [
        {
          q: 'Can I reverse an accidental digital transfer sent to the wrong mobile number?',
          a: 'Not automatically with a single click. You must immediately inform your bank/wallet with the transaction ID. Under NRB rules, the bank contacts the recipient’s bank to request a voluntary reversal. If the recipient refuses, you can file a complaint with the Nepal Police Cyber Bureau for unlawful retention of funds.'
        },
        {
          q: 'Are there fees for scanning Fonepay or NepalPay QR codes at grocery stores in Nepal?',
          a: 'No. Retail QR payments for personal purchases of goods and services are 100% free of charge for consumers. The merchant receives the full payment amount.'
        },
        {
          q: 'What is the safest way to transfer large sums (e.g. NPR 5,00,000) between banks in Nepal?',
          a: 'The safest, fastest, and cheapest method is connectIPS (web portal or mobile app), which charges a flat NPR 8 for high-value transfers. For amounts exceeding NPR 20 Lakhs, use your bank’s RTGS (Real Time Gross Settlement) counter service.'
        },
        {
          q: 'What should I do immediately if I realize I gave away my mobile banking OTP to a scammer?',
          a: 'Call your bank’s emergency card/digital support hotline immediately (available 24/7) and request an instant digital freeze on your account. Then log into your mobile app from a secure device if still accessible and change your password and MPIN immediately.'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'NCHL Infrastructure: connectIPS, NPI & RTGS Demystified',
          slug: 'nchl-digital-payment-infrastructure',
          categorySlug: 'digital-payments',
          readTime: '14 min read'
        },
        nextGuide: {
          title: 'Complete Banking Guide in Nepal',
          slug: 'complete-banking-guide',
          readTime: '15 min read'
        },
        nextCalculator: {
          title: 'Fixed Deposit & Compound Interest Calculator',
          slug: 'fixed-deposit'
        },
        nextGlossary: {
          title: 'Two-Factor Authentication (2FA) & OTP',
          term: '2FA / OTP Security',
          def: 'Mandatory secondary verification token required for authorizing digital bank and wallet transactions.'
        }
      }
    },
    np: {
      intro: 'नेपालमा डिजिटल भुक्तानी प्रणालीले पछिल्लो एक दशकमा ठूलो फड्को मारेको छ। नेपाल राष्ट्र बैंकको भुक्तानी प्रणाली विभाग तथा भुक्तानी तथा फछ्र्यौट ऐन २०७५ अन्तर्गत सञ्चालित यो प्रणालीले गर्दा आज नगद बोक्ने झन्झट लगभग हटेको छ। तरकारी पसलमा रु. ५० को किनमेलदेखि लिएर सरकारी राजस्व, ट्राफिक जरिवाना र लाखौँको अन्तरबैंक कारोबार सेकेन्डमै मोबाइलबाट सम्पन्न हुन्छ। तर यो प्रणालीभित्र विभिन्न संरचनाहरू छन्-राष्ट्रिय स्विचिङ प्रणाली (NCHL connectIPS, RTGS), निजी नेटवर्क (Fonepay), डिजिटल वालेट (eSewa, Khalti) र वाणिज्य बैंकहरूका मोबाइल एप। कुन माध्यम प्रयोग गर्दा सेवा शुल्क कम लाग्छ, राष्ट्र बैंकको दैनिक कारोबार सीमा कति हो, गल्तीले अर्कैको खातामा पैसा गएमा कसरी फिर्ता ल्याउने, र OTP ठगीबाट कसरी बच्ने भन्ने व्यावहारिक ज्ञान हरेक नेपालीका लागि अनिवार्य भइसकेको छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-payment-rails',
          title: 'मूल डिजिटल सञ्जाल: connectIPS, डिजिटल वालेट र मोबाइल बैंकिङको भिन्नता',
          content: 'नेपालमा हुने हरेक डिजिटल कारोबार तीनवटा प्रमुख सञ्जालमार्फत हुन्छ: (१) राष्ट्रिय भुक्तानी प्रणाली र connectIPS: नेपाल राष्ट्र बैंक र वाणिज्य बैंकहरूको स्वामित्व रहेको नेपाल क्लियरिङ हाउस (NCHL) ले सञ्चालन गर्छ। यसले सिधै तपाईंको बैंक खाता जोड्छ। सरकारी कर, राजस्व, भन्सार, IPO को रकम फिर्ता र ठूला अन्तरबैंक कारोबार न्यून शुल्कमा (रु. २ देखि रु. ८) गर्न यो उत्तम माध्यम हो। (२) डिजिटल वालेटहरू (eSewa, Khalti, IME Pay): राष्ट्र बैंकबाट इजाजतप्राप्त भुक्तानी सेवा प्रदायक (PSP) हुन्। यसमा बैंकबाट पैसा लोड गरी सानातिना खर्च (मोबाइल रिचार्ज, बिजुली-पानीको बिल, सिनेमा टिकट, हवाई टिकट) तिर्न निकै सजिलो हुन्छ। (३) मोबाइल बैंकिङ एप: बैंकहरूले Fonepay जस्ता स्विचिङ नेटवर्कसँग जोडेर आफ्ना ग्राहकलाई दिने एप, जसबाट सिधै खाताबाट खातामा रकम पठाउन र QR स्क्यान गर्न सकिन्छ।',
          callout: {
            type: 'tip',
            title: 'शुल्क बचाउने स्मार्ट उपाय',
            text: 'एउटा बैंकबाट अर्को बैंकमा रु. ५०,००० वा रु. १,००,००० पठाउँदा वालेटबाट होइन, सिधै connectIPS बाट पठाउनुहोस्। connectIPS मा जम्मा रु. ८ मात्र शुल्क लाग्छ, जब कि वालेटबाट बैंकमा ट्रान्सफर गर्दा प्रतिशतका आधारमा धेरै शुल्क काटिन सक्छ।'
          }
        },
        {
          num: 2,
          id: 'chap-2-qr-interoperability',
          title: 'QR भुक्तानी र अन्तर-सञ्चालनशीलता (Fonepay र NepalPay QR)',
          content: 'नेपालभरका साना-ठूला पसलहरूमा QR कोडको व्यापक विस्तार भएको छ। यसमा दुईवटा मुख्य नेटवर्क छन्: (१) Fonepay QR: ६० भन्दा बढी बैंक तथा वालेटहरूलाई जोड्ने निजी नेटवर्क। तपाईंले पसलमा Fonepay QR स्क्यान गर्दा तपाईंको बैंक खाताबाट तुरुन्तै रकम व्यापारीको खातामा जम्मा हुन्छ। (२) NepalPay QR: नेपाल क्लियरिङ हाउसले राष्ट्रिय भुक्तानी स्विच (NPS) अन्तर्गत ल्याएको साझा प्रणाली, जसले जुनसुकै बैंक वा वालेटको एपबाट जुनसुकै QR स्क्यान गर्न मिल्ने (Interoperable) सुविधा दिन्छ। राष्ट्र बैंकको निर्देशन अनुसार सर्वसाधारण ग्राहकले पसलमा सामान किनेर QR भुक्तानी गर्दा कुनै पनि अतिरिक्त शुल्क (MDR) तिर्नुपर्दैन; यो सेवा ग्राहकका लागि पूर्ण रूपमा निःशुल्क छ।',
          callout: {
            type: 'important',
            title: 'पसलको QR स्क्यान गर्दा नाम रुजु गर्ने बानी',
            text: 'पसलको काउन्टरमा टाँसिएका स्टिकरहरूमाथि ठगहरूले आफ्नो नक्कली QR टाँसिदिएका घटनाहरू भेटिएका छन्। त्यसैले भुक्तानी गर्नुअघि आफ्नो मोबाइल स्क्रिनमा देखिने पसलको नाम वास्तविक पसलसँग मिलेको छ कि छैन निश्चित गरेर मात्र PIN हान्नुहोस्।'
          }
        },
        {
          num: 3,
          id: 'chap-3-nrb-transaction-limits',
          title: 'नेपाल राष्ट्र बैंकको डिजिटल कारोबार सीमा (Transaction Limits)',
          content: 'सम्पत्ति शुद्धीकरण नियन्त्रण गर्न र ग्राहकको सुरक्षाका लागि नेपाल राष्ट्र बैंकले डिजिटल कारोबारमा कडा सीमा तोकेको छ: (१) मोबाइल बैंकिङ एप (QR तथा खाता ट्रान्सफर): प्रति कारोबार रु. १,००,०००, दैनिक रु. २,००,०००, र मासिक रु. १०,००,००० सम्मको सीमा तोकिएको छ। (२) डिजिटल वालेटहरू (eSewa/Khalti): वालेटबाट अर्को वालेटमा प्रति कारोबार रु. २५,०००, दैनिक रु. १,००,०००, र मासिक रु. ५,००,००० सम्म। वालेटमा रातभर मौज्दात राख्न पाउने अधिकतम सीमा रु. ५०,००० मात्र हो। (३) connectIPS: ठूला कारोबारका लागि connectIPS वेब पोर्टलबाट दैनिक रु. २०,००,००० सम्म र मोबाइल एपबाट दैनिक रु. १०,००,००० सम्म रकमान्तर गर्न सकिन्छ।',
          callout: {
            type: 'tip',
            title: 'ठूलो रकम भुक्तानी गर्नुपर्दा के गर्ने?',
            text: 'गाडी किन्न वा अस्पतालको ठूलो बिल तिर्न दैनिक सीमाभन्दा बढी रकम चाहिएमा आफ्नो बैंक शाखामा सम्पर्क गरी सीमा बढाउन सकिन्छ वा बैंक काउन्टरबाट RTGS सेवा प्रयोग गर्न सकिन्छ।'
          }
        },
        {
          num: 4,
          id: 'chap-4-cyber-security-scams',
          title: 'साइबर सुरक्षा: OTP चोरी, चिठ्ठाको प्रलोभन र सामाजिक इन्जिनियरिङ',
          content: 'नेपालमा बैंकको सर्भर ह्याक भएर पैसा चोरी हुने घटना विरलै हुन्छन्; ९५% भन्दा बढी ठगी मानिसहरूलाई झुक्याएर (Social Engineering) गरिन्छ। नेपालमा हुने तीन प्रमुख ठगीहरू: (१) चिठ्ठा र पार्सल ठगी: ह्वाट्सएप वा भाइबरमा फोन गरेर "तपाईंलाई २५ लाखको चिठ्ठा पर्यो" वा "विदेशबाट महँगो पार्सल आयो, भन्सार छुटाउन यति पैसा पठाउनुहोस्" भनी पैसा माग्ने। (२) OTP चोरी: बैंक वा टेलिकमको कर्मचारी बनेर "तपाईंको खाता बन्द हुँदैछ, सुचारु गर्न मोबाइलमा आएको ६ अङ्कको कोड भन्नुहोस्" भनी पासवर्ड चोर्ने। (३) नक्कली स्क्रिनसट ठगी: पसलमा सामान किनेर नक्कली मोबाइल बैंकिङ एपबाट पैसा पठाएको जस्तो देखिने फोटो देखाउने तर वास्तविक पैसा नपठाउने। आफ्नो OTP र MPIN कसैलाई पनि नदिनुहोस्।',
          callout: {
            type: 'warning',
            title: 'OTP सम्बन्धी अकाट्य नियम',
            text: 'नेपालको कुनै पनि बैंक, वालेट कम्पनी वा प्रहरीले ग्राहकसँग फोनमा ६ अङ्कको OTP कोड कहिल्यै माग्दैनन्। फोनमा कसैले OTP माग्यो भने त्यो १००% तपाईंको पैसा लुट्न खोज्ने ठग हो भन्ने बुझ्नुहोस्।'
          }
        },
        {
          num: 5,
          id: 'chap-5-accidental-transfers-recovery',
          title: 'गल्तीले अर्कैको नम्बर वा खातामा पैसा गएमा के गर्ने?',
          content: 'मोबाइल नम्बर वा खाता नम्बरको एउटा अङ्क झुक्किँदा अर्कै व्यक्तिकहाँ पैसा पुग्ने समस्या धेरैलाई पर्छ। राष्ट्र बैंकको नियम अनुसार बैंक वा वालेटले सम्बन्धित व्यक्तिको सहमतिबिना खाताबाट पैसा फिर्ता तान्न पाउँदैनन्। तर यस्तो भएमा तुरुन्तै यी ४ काम गर्नुहोस्: (१) तत्काल बैंक/वालेटमा खबर: कारोबार भएको १५ मिनेटभित्र ट्रान्जिक्सन आईडीसहित आफ्नो बैंक वा वालेटको हेल्पलाइनमा फोन गरी रकम रोक्का गर्न अनुरोध गर्नुहोस्। (२) भद्र कुराकानी: पैसा पाएको व्यक्तिलाई फोन गरेर आफ्नो भुल प्रष्ट पार्नुहोस् र प्रमाण पठाएर रकम फिर्ता माग्नुहोस्। (३) बैंकमा लिखित निवेदन: यदि व्यक्तिले पैसा फिर्ता गर्न मानेन भने आफ्नो बैंकको गुनासो शाखामा लिखित उजुरी दर्ता गर्नुहोस्। (४) साइबर ब्युरोमा उजुरी: यदि अर्को व्यक्तिले बदमासी गरेर तपाईंको पैसा झिक्यो वा अन्यत्र पठायो भने नेपाल प्रहरीको साइबर ब्युरो (भोटाहिटी, काठमाडौँ) मा गैरकानुनी सम्पत्ति आर्जनको मुद्दा हाल्नुहोस्।',
          callout: {
            type: 'important',
            title: 'भुलवश आएको पैसा नफर्काउनु फौजदारी अपराध हो',
            text: 'मुलुकी देवानी संहिता अनुसार गल्तीले खातामा आएको पैसा पचाउन खोज्नु अनुचित लाभ (Unlawful Enrichment) मानिन्छ। पैसा फिर्ता नगर्ने व्यक्तिमाथि बैंकिङ कसुर अन्तर्गत कानुनी कारबाही र जेल सजाय हुन सक्छ।'
          }
        },
        {
          num: 6,
          id: 'chap-6-usd-prepaid-travel-cards',
          title: 'अन्तर्राष्ट्रिय भुक्तानी: नेपाल राष्ट्र बैंकको USD ५०० प्रिपेड डलर कार्ड',
          content: 'विदेशी विनिमय नियमित गर्ने ऐन २०१९ अनुसार नेपाली नागरिकहरूले विदेशमा सिधै नेपाली रुपैयाँमा भुक्तानी गर्न पाउँदैनन्। तर अन्तर्राष्ट्रिय सफ्टवेयर खरिद, अनलाइन पढाइ (Coursera, Udemy), क्यान्भा सब्स्क्रिप्सन वा परीक्षा शुल्क तिर्न सहज होस् भनेर नेपाल राष्ट्र बैंकले वार्षिक अधिकतम ५०० अमेरिकी डलर (USD 500) बराबरको प्रिपेड डलर कार्डको व्यवस्था गरेको छ। व्यक्तिगत PAN र बैंक खाता भएका जुनसुकै नागरिकले वाणिज्य बैंकबाट यो कार्ड लिन सक्छन्। यसको जारी शुल्क रु. ५०० देखि रु. १,५०० सम्म लाग्छ। यो कार्डबाट अनलाइन जुवा खेल्न, क्रिप्टोकरेन्सी किन्न वा विदेशी मुद्रा सट्टेबाजी गर्न पाइँदैन; यसो गरेमा विदेशी विनिमय अपचलनको मुद्दा लाग्छ।',
          callout: {
            type: 'tip',
            title: 'डलर कार्डमा PAN नम्बर अनिवार्य',
            text: 'तपाईंले डलर कार्डबाट गरेको हरेक डलरको खर्च राष्ट्र बैंकको केन्द्रीय प्रणालीमा तपाईंको PAN सँग जोडिएको हुन्छ। फरक बैंकबाट धेरै कार्ड लिएर ५०० डलरभन्दा बढी खर्च गर्न खोजेमा प्रणालीले तुरुन्तै पत्ता लगाउँछ।'
          }
        }
      ],
      nepalContext: 'नेपालमा डिजिटल भुक्तानी प्रणालीको नियमन तथा सुपरिवेक्षण नेपाल राष्ट्र बैंकको भुक्तानी प्रणाली विभागले भुक्तानी तथा फछ्र्यौट ऐन २०७५ बमोजिम गर्दछ। बैंक, वालेट तथा भुक्तानी नेटवर्कहरूले सूचना प्रविधि सुरक्षा अडिट, ISO २७००१ मापदण्ड र २४ घण्टे ग्राहक गुनासो निवारण संयन्त्र सञ्चालन गर्नु कानुनी रूपमा अनिवार्य छ, जसले गर्दा उपभोक्ताको वित्तीय कारोबार सुरक्षित रहन्छ।',
      comparisonTable: {
        title: 'नेपालका डिजिटल भुक्तानी प्रणालीहरूको तुलना',
        caption: 'नेपाल राष्ट्र बैंकको भुक्तानी प्रणाली निर्देशिका बमोजिमको शुल्क र सीमा विवरण',
        headers: ['भुक्तानी माध्यम', 'सञ्चालक / पूर्वाधार', 'कारोबार शुल्क', 'दैनिक अधिकतम सीमा', 'उपयुक्त प्रयोग'],
        rows: [
          ['डिजिटल वालेट (eSewa, Khalti)', 'इजाजतप्राप्त भुक्तानी सेवा प्रदायक (PSP)', 'वालेट-वालेट निःशुल्क; बैंक लोड रु. ०-१०', 'रु. ५०,००० देखि १,००,००० / दिन', 'मोबाइल टपअप, खुद्रा QR, बिजुली/इन्टरनेट महसुल'],
          ['मोबाइल बैंकिङ (Fonepay/NepalPay)', 'वाणिज्य बैंकहरू तथा स्विच', 'अन्तरबैंक ट्रान्सफर रु. १०-११', 'रु. २,००,००० देखि ३,००,००० / दिन', 'दैनिक पसल QR, कोठा भाडा भुक्तानी, तलब'],
          ['connectIPS', 'नेपाल क्लियरिङ हाउस (NCHL)', 'प्रति कारोबार रु. २ देखि रु. ८', 'रु. २०,००,००० / दिन (वेबबाट)', 'ठूलो रकम ट्रान्सफर, राजस्व कर, SIP र ब्रोकर भुक्तानी'],
          ['RTGS प्रणाली', 'नेपाल राष्ट्र बैंक (NRB)', 'थोक कारोबारमा न्यून / निःशुल्क', 'रु. २,००,००० भन्दा माथि (कुनै सीमा छैन)', 'घरजग्गा किनबेच, ठूला व्यावसायिक कारोबार']
        ]
      },
      practicalScenario: {
        persona: 'आयुष, २४, विश्वविद्यालयका विद्यार्थी तथा फ्रिलान्सर (पोखरा)',
        challenge: 'पोखरामा अनलाइन काम गर्ने आयुषको वालेटमा रु. ४८,००० मौज्दात थियो। एक दिउँसो उनलाई "eSewa हेड अफिस" बाट फोन आयो, जहाँ फोन गर्ने व्यक्तिले उनको खाता बन्द हुन लागेको र बचाउनका लागि म्यासेजमा आएको कोड भन्न दबाब दियो। आत्तिएका आयुष कोड भन्नै लागेका थिए।',
        solution: 'risePaisa को वित्तीय सचेतना नियम सम्झेर उनले फोन तुरुन्तै काटे र आधिकारिक हेल्पलाइनमा फोन गरे। उनलाई ठगहरूले फसाउन खोजेको पुष्टि भयो। आयुषले तुरुन्तै आफ्नो MPIN परिवर्तन गरे, बायोमेट्रिक फिंगरप्रिन्ट लक अन गरे, र वालेटमा धेरै पैसा राख्दा जोखिम हुने बुझेर रु. ४५,००० रकम ५.५% ब्याज आउने बैंकको बचत खातामा सारे। दैनिक खाजा र चिया खर्चका लागि वालेटमा रु. ३,००० मात्र राख्ने नियम बनाए।'
      },
      calculatorShortcut: {
        slug: 'inflation',
        name: 'नेपाल मुद्रास्फीति तथा क्रयशक्ति क्याल्कुलेटर',
        desc: 'डिजिटल वालेटमा शून्य ब्याजमा धेरै रकम थन्क्याएर राख्दा महँगीले कसरी मूल्य घटाउँछ हिसाब गर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'नेपाल डिजिटल भुक्तानी सुरक्षा तथा साइबर प्रोटोकल गाइड (PDF)',
          type: 'PDF गाइड',
          size: '१.३ MB',
          href: 'assets/downloads/nepal-digital-payment-safety-guide.html'
        }
      ],
      faqs: [
        {
          q: 'के गल्तीले अर्कै मोबाइल नम्बरमा गएको पैसा आफैँ फिर्ता तान्न मिल्छ?',
          a: 'अनलाइनबाट एक क्लिकमा फिर्ता तान्न मिल्दैन। तुरुन्तै ट्रान्जिक्सन कोडसहित बैंक वा वालेटमा खबर गर्नुपर्छ। बैंकले अर्को पक्षसँग समन्वय गरी रकम फिर्ता गराउने प्रक्रिया सुरु गर्छ। यदि अर्को व्यक्तिले पैसा फिर्ता गर्न मानेन भने साइबर ब्युरोमा उजुरी दिन सकिन्छ।'
        },
        {
          q: 'पसलमा Fonepay वा NepalPay QR स्क्यान गरेर सामान किन्दा केही अतिरिक्त शुल्क लाग्छ?',
          a: 'लाग्दैन। नेपाल राष्ट्र बैंकको नियम अनुसार सर्वसाधारण उपभोक्ताले पसलमा सामान किन्दा QR भुक्तानी गर्दा कुनै पनि शुल्क लाग्दैन। यो पूर्ण रूपमा निःशुल्क सेवा हो।'
        },
        {
          q: 'नेपालमा बैंकबाट अर्को बैंकमा ठूलो रकम (जस्तै: रु. ५ लाख) पठाउने सबैभन्दा सुरक्षित माध्यम कुन हो?',
          a: 'सबैभन्दा सुरक्षित, छिटो र सस्तो माध्यम connectIPS हो, जहाँ ठूलो रकम पठाउँदा पनि जम्मा रु. ८ मात्र शुल्क लाग्छ। यदि रु. २० लाखभन्दा बढी पठाउनुपर्ने छ भने बैंक शाखाबाट RTGS सेवा प्रयोग गर्नुपर्छ।'
        },
        {
          q: 'यदि मैले झुक्किएर ठगलाई मोबाइल बैंकिङको OTP दिएँ भने तुरुन्तै के गर्ने?',
          a: 'तुरुन्तै आफ्नो बैंकको २४ घण्टे इमरजेन्सी हेल्पलाइनमा फोन गरेर मोबाइल बैंकिङ र खाता तुरुन्तै रोक्का (Freeze) गर्न लगाउनुहोस्। त्यसपछि सुरक्षित कम्प्युटरबाट पासवर्ड र MPIN परिवर्तन गर्नुहोस् र नजिकको बैंक शाखामा सम्पर्क गर्नुहोस्।'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'नेपालका डिजिटल भुक्तानी पूर्वाधार: connectIPS, NPI र RTGS को विश्लेषण',
          slug: 'nchl-digital-payment-infrastructure',
          categorySlug: 'digital-payments',
          readTime: '१४ मिनेट पढाइ'
        },
        nextGuide: {
          title: 'नेपालमा आधुनिक बैंकिङको पूर्ण गाइड',
          slug: 'complete-banking-guide',
          readTime: '१५ मिनेट पढाइ'
        },
        nextCalculator: {
          title: 'मुद्दती निक्षेप तथा चक्रवृद्धिकरण क्याल्कुलेटर',
          slug: 'fixed-deposit'
        },
        nextGlossary: {
          title: 'दुई-तह प्रमाणीकरण (2FA)',
          term: '२-एफए / ओटीपी',
          def: 'डिजिटल वित्तीय कारोबार सुरक्षित राख्न एसएमएस वा इमेलमा पठाइने एकपटक प्रयोग हुने कोड।'
        }
      }
    }
  },

  // ── 4. Complete SIP Guide ─────────────────────────
  'complete-sip-guide': {
    id: 'complete-sip-guide',
    slug: 'complete-sip-guide',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    title: {
      en: 'Complete Systematic Investment Plan (SIP) Guide for Nepal',
      np: 'नेपालमा Systematic Investment Plan (SIP) को पूर्ण कर्नरस्टोन गाइड'
    },
    oneLineSummary: {
      en: 'The definitive guide to open-ended mutual funds in Nepal: rupee-cost averaging mathematics, Dividend Reinvestment Plans (DRIP), automated connectIPS e-mandates, top performing schemes, and tax-efficient wealth accumulation.',
      np: 'नेपालमा खुलामुखी Mutual Fund मा नियमित मासिक लगानी: Rupee-Cost Averaging को गणित, लाभांश पुनःलगानी (DRIP), connectIPS बाट अटो-डेबिट, उत्कृष्ट फण्डहरूको विश्लेषण र कर छुटको सम्पूर्ण विधि।'
    },
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '13 min read', np: '१३ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: {
      en: 'Verified for SEBON Mutual Fund Regulations 2067',
      np: 'धितोपत्र बोर्ड (SEBON) सामूहिक लगानी कोष नियमावली २०६७ अनुसार प्रमाणित'
    },
    prerequisites: [
      { title: 'Demat Account & 16-Digit BOID', type: 'Document' },
      { title: 'Active Bank Account with Mobile Banking / connectIPS', type: 'Prerequisite' },
      { title: 'Commitment of Min. NPR 1,000 Monthly Surplus', type: 'Capital' }
    ],
    en: {
      intro: 'A Systematic Investment Plan (SIP) is not a separate financial asset; it is a disciplined, automated investment method through which you commit a fixed sum of money (starting from as low as NPR 1,000) at regular monthly intervals into an Open-Ended Mutual Fund scheme regulated by the Securities Board of Nepal (SEBON). For the average salaried professional in Nepal, trying to beat seasoned full-time speculators on NEPSE by timing stock price highs and lows is a recipe for chronic emotional exhaustion and capital erosion. SIP eliminates market timing completely. By leveraging the mathematical engine of Rupee-Cost Averaging, you accumulate more fund units when market valuations are depressed and fewer units when prices rally. Combined with an automated Dividend Reinvestment Plan (DRIP), a modest monthly SIP of NPR 5,000 can compound into generational wealth exceeding NPR 35 to 45 Lakhs over a 15-year horizon.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-open-vs-closed-funds',
          title: 'Open-Ended vs Closed-Ended Mutual Funds in Nepal',
          content: 'Understanding mutual fund classification in Nepal is essential before enrolling in an SIP. Closed-ended schemes operate with fixed maturities (typically 5, 7, or 10 years) and trade like ordinary shares on the secondary market of NEPSE, where market price often trades at a deep 15% to 25% discount to their audited Net Asset Value (NAV). Conversely, SIPs operate exclusively on Open-Ended Mutual Funds. Open-ended schemes have no maturity date, no fixed share capital, and do not trade on the NEPSE floor. Instead, you purchase and redeem units directly with the Asset Management Company (Fund Manager) at the scheme’s daily calculated Net Asset Value (NAV). You can enter, expand, or exit your investment at any time without waiting for a counterparty buyer on TMS.',
          callout: {
            type: 'important',
            title: 'SIPs Require Open-Ended Funds',
            text: 'You cannot run a direct monthly SIP in closed-ended mutual funds listed on NEPSE. Always confirm that the scheme is explicitly classified as an Open-Ended Mutual Fund (खुलामुखी सामूहिक लगानी कोष).'
          }
        },
        {
          num: 2,
          id: 'chap-2-rupee-cost-averaging-math',
          title: 'The Mathematical Power of Rupee-Cost Averaging',
          content: 'Rupee-Cost Averaging turns stock market volatility from an emotional enemy into an asset-building ally. Consider a practical scenario where you invest NPR 5,000 every month for 4 months: In Month 1, the fund NAV is NPR 10; your NPR 5,000 purchases 500 units. In Month 2, NEPSE experiences a brutal bear correction, and NAV plunges 20% to NPR 8; your NPR 5,000 automatically buys 625 units. In Month 3, the market crashes further to NPR 6.25 NAV; your NPR 5,000 buys 800 units. In Month 4, the market recovers to NPR 10; your NPR 5,000 buys 500 units. In total, you invested NPR 20,000 and accumulated 2,425 units. Your average cost per unit was: NPR 20,000 / 2,425 = NPR 8.25! Because the current NAV is NPR 10, your portfolio is worth NPR 24,250-a net profit of 21.25%, even though the market merely rebounded back to its initial price!',
          callout: {
            type: 'tip',
            title: 'Bear Markets Are an SIP Investor’s Paradise',
            text: 'When headlines declare that NEPSE is crashing, inexperienced investors panic and cancel their SIPs. Disciplined investors celebrate because their monthly NPR 5,000 is scooping up premium corporate assets at heavy discounts.'
          }
        },
        {
          num: 3,
          id: 'chap-3-top-schemes-track-records',
          title: 'Top Open-Ended Schemes & Evaluating AMC Track Records in Nepal',
          content: 'SEBON regulates over a dozen licensed Asset Management Companies (Merchant Banks) operating open-ended mutual funds. Flagship schemes include: NIBL Sahabhagita Fund (Nepal’s pioneer open-ended scheme managed by NIMB Ace Capital), Siddhartha Systematic Investment Scheme (managed by Siddhartha Capital), NIC Asia Dynamic Debt Fund, and Nabil Flexi Cap Fund. When evaluating which fund to choose, review: (1) 3-Year to 5-Year Annualized CAGR Returns against the NEPSE benchmark index; (2) Expense Ratio: SEBON caps annual fund management fees between 1.0% and 1.5% of total asset size (lower expense ratios leave more compounding cash in your pocket); (3) Portfolio Composition: Check whether the fund manager is heavily concentrated in volatile speculative hydro stocks or diversified across defensive commercial banks, manufacturing, and fixed-income debentures.',
          callout: {
            type: 'tip',
            title: 'Check Weekly and Monthly NAV Disclosures',
            text: 'Under SEBON rules, fund managers must publish their audited Net Asset Value (NAV) on a weekly and monthly basis in national daily newspapers and on their digital portals.'
          }
        },
        {
          num: 4,
          id: 'chap-4-drip-compounding-accelerator',
          title: 'Dividend Reinvestment Plan (DRIP / DREP) - The Compounding Accelerator',
          content: 'When an open-ended mutual fund earns corporate profits, its board of directors announces annual dividends. Investors are given two choices: take a cash dividend payout directly to their bank account, or enroll in a Dividend Reinvestment Plan (DRIP / DREP). Choosing cash interrupts compound interest: receiving a small NPR 2,500 cash dividend often gets spent on coffee or groceries. Under DRIP, the entire dividend sum is automatically converted into additional fund units credited to your Demat account at the prevailing NAV on the book-closure date, without paying any entry fees or brokerage commissions. Over 15 to 20 years, an investor enrolled in DRIP accumulates nearly double the total units of an investor who took annual cash payouts.',
          callout: {
            type: 'important',
            title: 'Always Check the DRIP Box During Registration',
            text: 'When filling your online SIP registration form, always tick the "Dividend Reinvestment Plan (DREP)" option. It automates exponential compounding without requiring manual intervention.'
          }
        },
        {
          num: 5,
          id: 'chap-5-online-registration-connectips',
          title: 'Step-by-Step Online SIP Registration via ConnectIPS & AMC Portals',
          content: 'You can start a SIP entirely online from home without visiting a bank branch: (1) Select your chosen open-ended fund manager’s website (e.g., nimbacecapital.com, siddharthacapital.com, nabilinvest.com.np). (2) Click on "Online SIP Registration". (3) Enter your 16-digit Demat BOID and verify your name and citizenship details. (4) Set your SIP Parameters: choose your monthly installment amount (e.g., NPR 2,000, NPR 5,000), select your monthly debit date (e.g., the 5th or 10th of every Nepali month, matching your salary cycle), and choose an investment tenure (e.g., 5 years, 10 years, or unlimited). (5) Check the Dividend Reinvestment (DRIP) option. (6) Set Up Payment Mandate: link your connectIPS account to establish an automated e-mandate. Your bank account will now automatically invest your designated sum every month seamlessly.',
          callout: {
            type: 'tip',
            title: 'Align SIP Date with Salary Date',
            text: 'Always schedule your automated monthly SIP debit date 3 to 5 days after your regular salary deposit date (e.g., the 7th of the month) to ensure sufficient balance and prevent failed transaction penalties.'
          }
        },
        {
          num: 6,
          id: 'chap-6-taxes-and-exit-loads',
          title: 'Tax Efficiency, Capital Gains & Exit Loads on Nepali Mutual Funds',
          content: 'Mutual funds in Nepal enjoy unique statutory tax and operational advantages: (1) Capital Gains Tax: Individual retail investors pay a flat 5% CGT if units are held for more than 365 days, and 7.5% if held for 365 days or less. The fund manager calculates and withholds this tax directly at the time of redemption as a final withholding tax. (2) Dividend Tax: Cash dividends are subject to a final 5% withholding tax under the Income Tax Act 2058. (3) Exit Loads (निकासी शुल्क): To discourage speculative day-trading, open-ended funds charge an Exit Load if you redeem units prematurely-typically 1.5% if redeemed within 6 months, 1.0% between 6 and 12 months, 0.5% between 12 and 24 months, and exactly 0.0% (Zero Exit Load) after 2 years of holding.',
          callout: {
            type: 'important',
            title: 'Zero Entry Load in Nepal',
            text: 'Under SEBON regulations, open-ended mutual funds in Nepal are prohibited from charging Entry Loads. 100% of your invested money goes directly toward purchasing fund units at the clean NAV.'
          }
        }
      ],
      nepalContext: 'Mutual funds in Nepal operate under the Mutual Fund Regulations 2067 and the Mutual Fund Guidelines 2069, supervised by the Securities Board of Nepal (SEBON). Funds are structured as trusts where independent Fund Supervisors (comprising eminent chartered accountants, economists, and legal scholars) ensure that the Asset Management Company manages retail public capital strictly within statutory risk and diversification limits.',
      comparisonTable: {
        title: 'Systematic Investment Plan (SIP) vs Fixed Deposit (FD) vs Real Estate in Nepal',
        caption: 'Long-term risk-adjusted wealth creation metrics across Nepali asset classes',
        headers: ['Investment Metric', 'Mutual Fund SIP', 'Bank Fixed Deposit (FD)', 'Land / Real Estate'],
        rows: [
          ['Minimum Starting Capital', 'NPR 1,000 / month', 'NPR 25,000 lump sum', 'High (Min. NPR 15 - 30 Lakhs)'],
          ['Long-Term Annualized Return', '12% - 15% (Equities + Debentures)', '6% - 10% (Interest rate cycle)', '10% - 14% (Land capital appreciation)'],
          ['Liquidity & Redemption', 'High (T+3 cash credit to bank)', 'Low (Penalty on premature breakage)', 'Extremely Low (Takes months to sell)'],
          ['Power of Compounding', 'Exponential (Automatic NAV dividend reinvestment)', 'Linear / Quarterly (TDS deducted)', 'Lump-sum illiquid growth'],
          ['Tax Treatment on Gains', '5% individual CGT on net profit', '5% final withholding TDS on 100% interest', '5% or 7.5% CGT on land transfers'],
          ['Volatility & Drawdowns', 'Moderate (Market-linked NAV fluctuations)', 'Zero nominal risk (Protected up to NPR 5 Lakhs)', 'Market illiquidity and boundary disputes']
        ]
      },
      practicalScenario: {
        persona: 'Sunita, 26, School Teacher in Bhaktapur',
        challenge: 'Earning NPR 32,000 monthly, Sunita wanted to invest for her long-term financial security. However, she knew nothing about reading corporate balance sheets, could not monitor NEPSE prices during school hours, and was terrified of losing money in stock market crashes.',
        solution: 'Sunita set up an automated online SIP of NPR 3,000 per month into an open-ended mutual fund through NIMB Ace Capital, linking it to her connectIPS account and enrolling in DRIP. Over 4 years, while NEPSE fluctuated wildly between 1,800 and 3,000 index points, she never checked daily market charts. Her disciplined NPR 3,000 monthly contributions accumulated 19,400 units, which grew to a total portfolio valuation of over NPR 2,42,000-delivering an annualized return of 14.8% without a single minute of trading stress.'
      },
      calculatorShortcut: {
        slug: 'sip',
        name: 'Nepal SIP Wealth Compounding Calculator',
        desc: 'Calculate the projected maturity corpus of your monthly SIP over 5, 10, 15, and 20 years with realistic Nepal inflation adjustments.'
      },
      downloadableResources: [
        {
          title: 'Nepal Open-Ended Mutual Fund & SIP Comparison Checklist (PDF)',
          type: 'PDF Guide',
          size: '1.1 MB',
          href: 'assets/downloads/nepal-sip-mutual-fund-checklist.html'
        }
      ],
      faqs: [
        {
          q: 'What is the minimum monthly amount to start a SIP in Nepal?',
          a: 'Most open-ended mutual fund schemes in Nepal allow you to start with as little as NPR 1,000 per month. You can increase this amount at any time as your income grows.'
        },
        {
          q: 'Can I pause or stop my SIP if I face a temporary financial crisis?',
          a: 'Yes. SIPs in Nepal are completely flexible and non-binding. If you lose your job or face an emergency, you can pause or cancel your monthly installment online with zero penalties. The units you already accumulated remain safe in your Demat account and continue earning dividends.'
        },
        {
          q: 'How do I withdraw (redeem) my money from an open-ended mutual fund?',
          a: 'Log into your fund manager’s online portal or visit their branch, enter the number of units you wish to sell, and submit a Redemption Request. The units are sold at that day’s published NAV, and the cash is deposited directly into your bank account within 2 to 4 business days.'
        },
        {
          q: 'Is my invested capital guaranteed by the Government of Nepal?',
          a: 'No. Mutual funds invest in diversified baskets of equity shares, debentures, and bank fixed deposits; therefore, returns fluctuate with market conditions. However, because funds are professionally diversified across 30 to 50+ blue-chip corporations, the risk of total capital loss is virtually zero compared to betting on individual speculative stocks.'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'Systematic Investment Plans (SIP) in Nepal',
          slug: 'sip-investing-nepal',
          categorySlug: 'mutual-funds',
          readTime: '14 min read'
        },
        nextGuide: {
          title: 'Complete Mutual Fund Guide',
          slug: 'complete-mutual-fund-guide',
          readTime: '16 min read'
        },
        nextCalculator: {
          title: 'SIP Wealth Compounding Calculator',
          slug: 'sip'
        },
        nextGlossary: {
          title: 'Net Asset Value (NAV)',
          term: 'NAV (खुद सम्पत्ति मूल्य)',
          def: 'Per-unit market valuation of a mutual fund scheme published daily after deducting liabilities.'
        }
      }
    },
    np: {
      intro: 'Systematic Investment Plan (SIP) कुनै छुट्टै वित्तीय सम्पत्ति होइन; यो त नेपाल धितोपत्र बोर्ड (SEBON) द्वारा नियमन गरिएका खुलामुखी सामूहिक लगानी कोष (Open-Ended Mutual Funds) मा हरेक महिना एउटा निश्चित रकम (कम्तीमा रु. १,००० बाट सुरु गर्न मिल्ने) नियमित र अनुशासित रूपमा लगानी गर्ने एक आधुनिक प्रणाली हो। नियमित जागिर वा पेसामा रहेका सामान्य नेपाली नागरिकहरूका लागि दोस्रो बजारको उतारचढाव हेरेर कुन सेयर कहिले किन्ने र कहिले बेच्ने भनी अनुमान लगाउनु निकै जोखिमपूर्ण र तनावपूर्ण काम हो। SIP ले बजारको घटबढको चिन्तालाई सधैँका लागि अन्त्य गरिदिन्छ। Rupee-Cost Averaging को गणितीय शक्तिका कारण बजार घट्दा धेरै इकाइ (Units) र बजार बढ्दा थोरै इकाइ स्वतः जम्मा हुन्छन्। लाभांश पुनःलगानी (DRIP) सुविधासँग जोड्दा, मासिक रु. ५,००० को सानो लगानी १५ वर्षको अवधिमा कम्पाउन्ड भएर रु. ३५ देखि ४५ लाखभन्दा बढीको विशाल सम्पत्तिमा परिणत हुन सक्छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-open-vs-closed-funds',
          title: 'खुलामुखी (Open-Ended) र बन्दमुखी (Close-Ended) फण्डको भिन्नता',
          content: 'नेपालमा SIP सुरु गर्नुअघि Mutual Fund का दुईवटा स्वरूप बुझ्न आवश्यक छ। बन्दमुखी फण्डहरू निश्चित अवधिका लागि (५, ७ वा १० वर्ष) आउँछन् र तिनका इकाइहरू NEPSE मा सामान्य सेयर जस्तै किनबेच हुन्छन्, जहाँ बजार मूल्य प्रायः तिनको वास्तविक नेटवर्थ (NAV) भन्दा १५% देखि २५% सम्म सस्तो (Discount) मा कारोबार भइरहेको हुन्छ। यसको विपरीत, SIP केवल खुलामुखी (Open-Ended) फण्डमा मात्र गर्न सकिन्छ। खुलामुखी फण्डको कुनै निश्चित म्याद हुँदैन र यिनीहरू NEPSE को दोस्रो बजारमा किनबेच हुँदैनन्। यसका इकाइहरू सिधै फण्ड म्यानेजर (क्यापिटल) बाट दैनिक रूपमा हिसाब हुने खुद सम्पत्ति मूल्य (NAV) मा खरिद र बिक्री (Redeem) गरिन्छ। तपाईंले चाहेको बेला लगानी सुरु गर्न, थप्न वा पैसा झिक्न सक्नुहुन्छ।',
          callout: {
            type: 'important',
            title: 'SIP खुलामुखी फण्डमा मात्र चल्छ',
            text: 'NEPSE मा सूचीकृत बन्दमुखी म्युचुअल फण्डमा मासिक SIP गर्न मिल्दैन। लगानी गर्नुअघि योजनाको नाम अगाडि "खुलामुखी सामूहिक लगानी कोष" (Open-Ended Scheme) लेखिएको छ कि छैन पक्का गर्नुहोस्।'
          }
        },
        {
          num: 2,
          id: 'chap-2-rupee-cost-averaging-math',
          title: 'Rupee-Cost Averaging को गणितीय जादु र फाइदा',
          content: 'Rupee-Cost Averaging ले बजारको घटबढलाई लगानीकर्ताको फाइदामा परिणत गरिदिन्छ। मानौँ तपाईंले ४ महिनासम्म हरेक महिना रु. ५,००० लगानी गर्नुभयो: पहिलो महिना NAV रु. १० थियो; तपाईंले ५०० इकाइ पाउनुभयो। दोस्रो महिना बजार घट्यो र NAV रु. ८ मा झर्यो; रु. ५,००० ले ६२५ इकाइ आयो। तेस्रो महिना बजार अझै घटेर NAV रु. ६.२५ पुग्यो; रु. ५,००० ले ८०० इकाइ आयो। चौथो महिना बजार फेरि बढेर पुरानै रु. १० को NAV मा फर्कियो; रु. ५,००० ले ५०० इकाइ आयो। कुल ४ महिनामा तपाईंको लगानी रु. २०,००० भयो तर इकाइ २,४२५ वटा जम्मा भयो। तपाईंको प्रति इकाइ औसत लागत जम्मा रु. ८.२५ मात्र पर्यो! आजको NAV रु. १० भएकाले तपाईंको कुल सम्पत्ति रु. २४,२५० पुग्यो-अर्थात् बजार नबढेर पुरानै ठाउँमा फर्किँदा पनि तपाईंलाई २१.२५% को शुद्ध नाफा भयो!',
          callout: {
            type: 'tip',
            title: 'मन्दीको बजार SIP लगानीकर्ताका लागि अवसर हो',
            text: 'जब NEPSE घट्छ, सामान्य मानिसहरू डराउँछन् तर SIP लगानीकर्ता खुसी हुन्छन् किनकि उनीहरूको मासिक रु. ५,००० ले सस्तो मूल्यमा धेरै इकाइहरू किनिरहेको हुन्छ।'
          }
        },
        {
          num: 3,
          id: 'chap-3-top-schemes-track-records',
          title: 'नेपालका उत्कृष्ट खुलामुखी योजनाहरू र क्यापिटलको इतिहास',
          content: 'धितोपत्र बोर्डबाट इजाजतप्राप्त धेरै मर्चेन्ट बैंकहरूले हाल खुलामुखी फण्डहरू सञ्चालन गरिरहेका छन्। प्रमुख योजनाहरूमा: एनआईएमबि एस क्यापिटलको NIBL सहभागिता फण्ड (नेपालको पहिलो खुलामुखी योजना), सिद्धार्थ क्यापिटलको सिद्धार्थ सिस्टेमेटिक इन्भेष्टमेन्ट स्किम, एनआइसी एसिया डाइनामिक डेब्ट फण्ड, र नबिल फ्लेक्सी क्याप फण्ड पर्दछन्। फण्ड छनोट गर्दा ध्यान दिनुपर्ने कुराहरू: (१) पछिल्लो ३ देखि ५ वर्षमा NEPSE को तुलनामा फण्डले दिएको वार्षिक औसत प्रतिफल (CAGR); (२) व्यवस्थापन खर्च (Expense Ratio): धितोपत्र बोर्डले फण्ड व्यवस्थापन शुल्क अधिकतम १% देखि १.५% सम्म मात्र लिन पाउने सीमा तोकेको छ (खर्च जति कम भयो लगानीकर्तालाई उति बढी नाफा हुन्छ); (३) लगानी विविधीकरण: फण्डले जोखिमयुक्त कमजोर कम्पनीमा लगानी गरेको छ कि बलिया बैंक र उत्पादनमूलक कम्पनीमा बाँडेको छ भन्ने हेर्नुपर्छ।',
          callout: {
            type: 'tip',
            title: 'साप्ताहिक र मासिक NAV सार्वजनिक हुने नियम',
            text: 'धितोपत्र बोर्डको नियम अनुसार फण्ड म्यानेजरहरूले हरेक हप्ता र महिनाको अन्त्यमा आफ्नो फण्डको प्रति इकाइ खुद सम्पत्ति मूल्य (NAV) राष्ट्रिय पत्रिका र आफ्नो वेबसाइटमा सार्वजनिक गर्नुपर्छ।'
          }
        },
        {
          num: 4,
          id: 'chap-4-drip-compounding-accelerator',
          title: 'लाभांश पुनःलगानी योजना (DRIP) - चक्रवृद्धिको इन्जिन',
          content: 'जब म्युचुअल फण्डले नाफा कमाउँछ, उसले वार्षिक लाभांश घोषणा गर्छ। लगानीकर्तासँग दुई विकल्प हुन्छन्: नगद लाभांश बैंक खातामा लिने, वा लाभांश पुनःलगानी योजना (DRIP / DREP) रोज्ने। नगद लाभांश लिँदा कम्पाउन्डिङको जादु रोकिन्छ; हातमा परेको रु. २,५०० चिया-खाजामै सकिन्छ। तर DRIP रोज्दा, लाभांशको पूरै रकमबाट सोही दिनको NAV अनुसार स्वतः थप इकाइहरू किनिन्छ र तपाईंको डिम्याट खातामा जोडिन्छ-यसमा कुनै ब्रोकर शुल्क वा अतिरिक्त चार्ज लाग्दैन। १५ देखि २० वर्षको अन्तरालमा, DRIP रोज्ने लगानीकर्तासँग नगद लाभांश लिनेको तुलनामा झण्डै दोब्बर इकाइ जम्मा भइसकेको हुन्छ।',
          callout: {
            type: 'important',
            title: 'फारम भर्दा सधैँ DRIP मा टिक लगाउनुहोस्',
            text: 'अनलाइन SIP फारम भर्दा सधैँ "Dividend Reinvestment Plan (DREP)" भन्ने विकल्प छनोट गर्नुहोस्। यसले तपाईंको सानो लगानीलाई ठूलो पुँजी बनाउन मद्दत गर्छ।'
          }
        },
        {
          num: 5,
          id: 'chap-5-online-registration-connectips',
          title: 'connectIPS मार्फत घरमै बसेर अनलाइन SIP सुरु गर्ने तरिका',
          content: 'बैंक धाउनै नपरी ५ मिनेटमा अनलाइनबाटै SIP दर्ता गर्न सकिन्छ: (१) आफूले रोजेको क्यापिटलको वेबसाइटमा जानुहोस् (जस्तै: nimbacecapital.com, siddharthacapital.com, nabilinvest.com.np)। (२) "Online SIP Registration" मा क्लिक गर्नुहोस्। (३) आफ्नो १६ अङ्कको डिम्याट नम्बर (BOID) हाल्नुहोस्; तपाईंको नाम र विवरण स्वतः देखिनेछ। (४) SIP का सर्तहरू छान्नुहोस्: मासिक लगानी रकम (रु. १,०००, रु. ५,०००), हरेक महिना पैसा काटिने मिति (जस्तै: तलब आउने दिन मिलाएर हरेक महिनाको ५ वा १० गते), र लगानीको अवधि (५ वर्ष, १० वर्ष वा अनिश्चितकालीन)। (५) Dividend Reinvestment (DREP) मा टिक लगाउनुहोस्। (६) भुक्तानी म्यान्डेट: आफ्नो connectIPS खाता जोड्नुहोस् जसले गर्दा हरेक महिना तोकिएको मितिमा बैंक खाताबाट पैसा स्वतः लगानी भइरहोस्।',
          callout: {
            type: 'tip',
            title: 'तलब आउने दिनसँग SIP मिति मिलाउनुहोस्',
            text: 'आफ्नो बैंकमा तलब आउने दिनभन्दा ३-४ दिनपछिको मिति (जस्तै: महिनाको ७ वा ८ गते) SIP को मिति तोक्नुहोस् ताकि खातामा पैसा नपुगेर किस्ता रोकिने समस्या नहोस्।'
          }
        },
        {
          num: 6,
          id: 'chap-6-taxes-and-exit-loads',
          title: 'कर छुटको व्यवस्था, पुँजीगत लाभकर र निकासी शुल्क (Exit Load)',
          content: 'नेपालमा म्युचुअल फण्डमा लगानी गर्दा कानुनी रूपमा धेरै कर छुट र फाइदाहरू छन्: (१) पुँजीगत लाभकर (CGT): इकाइ बेच्दा भएको नाफामा ३६५ दिनभन्दा बढी होल्ड गरेमा ५% र ३६५ दिन वा सोभन्दा कममा बेचेमा ७.५% मात्र अन्तिम कर (Final Withholding Tax) लाग्छ। यो कर क्यापिटलले नै काटेर सरकारलाई बुझाइदिन्छ। (२) लाभांश कर: नगद लाभांशमा ५% अन्तिम कर लाग्छ। (३) निकासी शुल्क (Exit Load): अल्पकालीन सट्टेबाजी रोक्न निश्चित समयअगावै पैसा झिक्दा क्यापिटलले सानो निकासी शुल्क लिन्छ-जस्तै: ६ महिनाभित्र झिके १.५%, ६ देखि १२ महिनामा १.०%, १२ देखि २४ महिनामा ०.५%, र २ वर्षपछि झिक्दा ०.०% (कुनै निकासी शुल्क लाग्दैन)।',
          callout: {
            type: 'important',
            title: 'नेपालमा कुनै प्रवेश शुल्क (Entry Load) लाग्दैन',
            text: 'धितोपत्र बोर्डको नियम अनुसार नेपालका खुलामुखी फण्डहरूले कुनै प्रवेश शुल्क लिन पाउँदैनन्। तपाईंले लगानी गरेको शतप्रतिशत रकमको नै सिधै इकाइ खरिद हुन्छ।'
          }
        }
      ],
      nepalContext: 'नेपालमा म्युचुअल फण्डहरूको सञ्चालन सामूहिक लगानी कोष नियमावली २०६७ र सामूहिक लगानी कोष निर्देशिका २०६९ बमोजिम नेपाल धितोपत्र बोर्ड (SEBON) को प्रत्यक्ष नियमनमा हुन्छ। फण्डको रेखदेखका लागि वरिष्ठ चार्टर्ड एकाउन्टेन्ट, अर्थशास्त्री र कानुनविद्हरू सम्मिलित स्वतन्त्र फण्ड सुपरभाइजर (Fund Supervisors) को बोर्ड रहने भएकाले सर्वसाधारणको लगानी पूर्ण रूपमा सुरक्षित र कानुनसम्मत हुन्छ।',
      comparisonTable: {
        title: 'नेपालमा SIP, मुद्दती निक्षेप (FD) र घरजग्गा लगानीको तुलना',
        caption: 'नेपाली लगानीकर्ताहरूका लागि प्रमुख सम्पत्ति वर्गहरूको प्रतिफल, जोखिम र करको तुलना',
        headers: ['मापदण्ड', 'म्युचुअल फण्ड SIP', 'बैंक मुद्दती निक्षेप (FD)', 'जग्गा / घरजग्गा लगानी'],
        rows: [
          ['न्यूनतम लगानी रकम', 'मासिक रु. १,००० बाट सुरु', 'मुस्किलले रु. २५,००० एकमुष्ट', 'उच्च (कम्तीमा रु. १५ देखि ३० लाख)'],
          ['दीर्घकालीन वार्षिक प्रतिफल', '१२% देखि १५% (सेयर र ऋणपत्र)', '६% देखि १०% (ब्याजदरको चक्र अनुसार)', '१०% देखि १४% (दीर्घकालीन जग्गा वृद्धि)'],
          ['तरलता (पैसा झिक्ने सुविधा)', 'उच्च (T+3 दिनभित्र बैंक खातामा पैसा)', 'न्यून (म्यादअगावै तोड्दा ब्याजमा जरिवाना)', 'अति न्यून (बेच्न महिनौँ ग्राहक खोज्नुपर्ने)'],
          ['चक्रवृद्धि शक्ति (Compounding)', 'तीव्र (लाभांशबाट थप इकाइ खरिद हुने)', 'सामान्य (हरेक ३ महिनामा कर काटिने)', 'एकमुष्ट तर बजार अनुसार घटबढ हुने'],
          ['लाग्ने कर (Tax)', 'खुद नाफामा मात्र ५% पुँजीगत लाभकर', 'कुल ब्याज रकममा ५% अन्तिम TDS कट्टी', 'जग्गा बिक्रीमा ५% वा ७.५% पुँजीगत लाभकर'],
          ['जोखिम र उतारचढाव', 'मध्यम (बजार अनुसार NAV तलमाथि हुने)', 'शून्य नाममात्र जोखिम (रु. ५ लाखसम्म बिमा)', 'अतरलता, नापी विवाद र बाटोको जोखिम']
        ]
      },
      practicalScenario: {
        persona: 'सुनिता, २६, शिक्षिका (भक्तपुर)',
        challenge: 'मासिक रु. ३२,००० तलब पाउने सुनिता भविष्यका लागि बचत गर्न चाहन्थिन्। तर उनलाई सेयर बजारको प्राविधिक विश्लेषण आउँदैनथ्यो, स्कुल समयमा सेयर हेर्न सम्भव थिएन, र बजार घट्दा पैसा डुब्ने ठूलो डर थियो।',
        solution: 'सुनिताले NIMB एस क्यापिटलको खुलामुखी योजनामा मासिक रु. ३,००० को अनलाइन SIP सुरु गरिन्, connectIPS जोडिन् र DRIP विकल्प रोजिन्। ४ वर्षको अवधिमा NEPSE १८०० देखि ३००० सम्म उतारचढाव भइरहँदा पनि उनले बजारको कुनै चिन्ता लिइनन्। उनको नियमित रु. ३,००० बचतले १९,४०० इकाइहरू जम्मा भए, जसको कुल सम्पत्ति बढेर रु. २,४२,००० भन्दा बढी पुग्यो-र उनले कुनै तनावबिना वार्षिक १४.८% को चक्रवृद्दि प्रतिफल हासिल गरिन्।'
      },
      calculatorShortcut: {
        slug: 'sip',
        name: 'नेपाल SIP चक्रवृद्दि सम्पत्ति क्याल्कुलेटर',
        desc: 'मासिक रु. १,०००, रु. ३,००० वा रु. ५,००० लगानी गर्दा ५, १० र १५ वर्षमा कति सम्पत्ति बन्छ महँगी समायोजनसहित हिसाब गर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'नेपाल खुलामुखी म्युचुअल फण्ड तथा SIP तुलना चेकलिस्ट (PDF)',
          type: 'PDF गाइड',
          size: '१.१ MB',
          href: 'assets/downloads/nepal-sip-mutual-fund-checklist.html'
        }
      ],
      faqs: [
        {
          q: 'नेपालमा SIP सुरु गर्न न्यूनतम कति रुपैयाँ चाहिन्छ?',
          a: 'नेपालका अधिकांश खुलामुखी योजनाहरूमा मासिक कम्तीमा रु. १,००० बाटै SIP सुरु गर्न सकिन्छ। आम्दानी बढ्दै गएपछि मासिक रकम जति पनि बढाउन सकिन्छ।'
        },
        {
          q: 'यदि कुनै महिना आर्थिक समस्या पर्यो भने के SIP रोक्न मिल्छ?',
          a: 'मिल्छ। नेपालमा SIP पूर्ण रूपमा लचिलो हुन्छ; यसमा कुनै बाध्यात्मक जरिवाना हुँदैन। यदि समस्या पर्यो भने अनलाइनबाटै केही महिनाका लागि SIP रोक्न (Pause) वा बन्द गर्न सकिन्छ। तपाईंले पहिले किनिसकेका इकाइहरू सुरक्षित रहन्छन् र लाभांश आइरहन्छ।'
        },
        {
          q: 'खुलामुखी म्युचुअल फण्डबाट आफ्नो पैसा कसरी फिर्ता झिक्ने (Redemption)?',
          a: 'सम्बन्धित क्यापिटलको अनलाइन पोर्टलमा लगइन गरी कति इकाइ बेच्ने हो उल्लेख गरेर "Redeem" अनुरोध पठाउनुहोस्। सो दिनको NAV अनुसार इकाइ बिक्री हुन्छ र २ देखि ४ कार्यदिनभित्र पैसा सिधै तपाईंको बैंक खातामा जम्मा हुन्छ।'
        },
        {
          q: 'के SIP मा लगानी गरेको सावाँ रकम नेपाल सरकारले ग्यारेन्टी गर्छ?',
          a: 'गर्दैन। म्युचुअल फण्डले संकलित रकम सेयर, डिबेन्चर र मुद्दती निक्षेपमा लगानी गर्ने भएकाले प्रतिफल बजार अनुसार घटबढ हुन्छ। तर फण्डले ३०-४० भन्दा बढी बलिया कम्पनीहरूमा पैसा विविधीकरण गर्ने भएकाले व्यक्तिगत सेयरमा जस्तो पूरै पैसा डुब्ने जोखिम भने हुँदैन।'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'नेपालमा सिस्टेमेटिक इन्भेस्टमेन्ट प्लान (SIP)',
          slug: 'sip-investing-nepal',
          categorySlug: 'mutual-funds',
          readTime: '१४ मिनेट पढाइ'
        },
        nextGuide: {
          title: 'म्युचुअल फन्डको सम्पूर्ण गाइड',
          slug: 'complete-mutual-fund-guide',
          readTime: '१६ मिनेट पढाइ'
        },
        nextCalculator: {
          title: 'एसआईपी चक्रवृद्धिकरण क्याल्कुलेटर',
          slug: 'sip'
        },
        nextGlossary: {
          title: 'खुद सम्पत्ति मूल्य (NAV)',
          term: 'एनएभी (NAV)',
          def: 'म्युचुअल फन्ड योजनाको कुल सम्पत्तिबाट दायित्व घटाएर प्रति इकाइ निकालिने दैनिक बजार मूल्य।'
        }
      }
    }
  }
};

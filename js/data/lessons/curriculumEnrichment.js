import { ENRICHMENT_PART1 } from './curriculumEnrichmentPart1.js';
import { ENRICHMENT_PART2 } from './curriculumEnrichmentPart2.js';
import { ENRICHMENT_PART3 } from './curriculumEnrichmentPart3.js';
import { ENRICHMENT_PART4 } from './curriculumEnrichmentPart4.js';

// ==============================================
// risePaisa - Curriculum Pedagogical Enrichment
// Measurable Learning Objectives (Understand, Explain, Calculate, Compare, Apply)
// and Actionable Practical Exercises across all Lessons (13 Pathways)
// ==============================================

const BASE_OBJECTIVES = {
  "cash-flow-equation-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how net cash flow dictates whether your financial position compounds wealth or accumulates debt in Nepal.",
        "Explain the vital distinction between fixed living overheads and variable discretionary leaks in urban Nepali households.",
        "Calculate your exact monthly cash surplus or deficit using your verified bank account inflows and outflows.",
        "Compare a positive cash flow reinvestment trajectory against chronic revolving cooperative borrowing or credit card interest.",
        "Apply automated month-end cash flow sweeps to transfer your surplus into high-yield savings or mutual fund SIPs."
      ],
      "practicalExercise": {
        "task": "Calculate your personal monthly net cash flow equation",
        "instruction": "Download or review your primary bank statement from the last calendar month. Add all incoming income sources, then subtract all fixed necessities (rent, groceries, electricity, internet) and discretionary expenses. Identify your exact monthly net surplus or deficit in Rupees."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालमा खुद नगद प्रवाह (Net Cash Flow) ले कसरी सम्पत्ति वृद्धि गर्छ वा ऋणको दलदलमा फसाउँछ।",
        "व्याख्या गर्नुहोस् (Explain): काठमाडौँ र अन्य शहरहरूमा घरभाडा, खाद्यान्न जस्ता अनिवार्य खर्च र इच्छामूलक खर्च बीचको भिन्नता।",
        "हिसाब गर्नुहोस् (Calculate): आफ्नो वास्तविक बैंक खाताको विवरण हेरेर मासिक खुद बचत वा घाटाको यथार्थ हिसाब।",
        "तुलना गर्नुहोस् (Compare): सकारात्मक नगद प्रवाहबाट हुने सम्पत्ति वृद्धि र महँगो सहकारी कर्जाको जोखिम बीचको फरक।",
        "लागू गर्नुहोस् (Apply): महिनाको अन्त्यमा बचेको अतिरिक्त रकम तुरुन्तै छुट्टै बचत खाता वा मासिक SIP मा जम्मा गर्ने बानी।"
      ],
      "practicalExercise": {
        "task": "आफ्नो व्यक्तिगत मासिक खुद नगद प्रवाह हिसाब गर्नुहोस्",
        "instruction": "पछिल्लो महिनाको मोबाइल बैंकिङ वा बैंक स्टेटमेन्ट हेर्नुहोस्। कुल आम्दानीबाट कोठा भाडा, खाद्यान्न, बिजुली, यातायात र अन्य सबै खर्च घटाउनुहोस्। महिनामा तपाईं कति बचत गर्न सफल हुनुभयो पत्ता लगाउनुहोस्।"
      }
    }
  },
  "50-30-20-budget-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how the 50/30/20 rule categorizes after-tax income into fixed needs, flexible wants, and future wealth.",
        "Explain the critical boundary between survival necessities and lifestyle wants in modern urban Nepali life.",
        "Calculate your precise Rupee budget limits for needs (50%), wants (30%), and savings (20%) on your current take-home salary.",
        "Compare the classic 50/30/20 framework against realistic urban modifications like 60/20/20 for high-rent areas like Kathmandu.",
        "Apply automated Standing Instructions (SI) in mobile banking to transfer your 20% savings the moment salary arrives."
      ],
      "practicalExercise": {
        "task": "Formulate your personal 50/30/20 monthly budget breakdown",
        "instruction": "Take your verified monthly net salary. Multiply by 0.50 to calculate your maximum monthly Needs ceiling, by 0.30 for your Wants ceiling, and by 0.20 for your minimum Savings target. Compare these three numbers against your actual spending over the last 30 days."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): ५०/३०/२० नियमले करपछिको आम्दानीलाई कसरी अनिवार्य आवश्यकता, चाहना र भविष्यको बचतमा बाँड्छ।",
        "व्याख्या गर्नुहोस् (Explain): नेपालको शहरी परिवेशमा वास्तविक आवश्यकता र विलासिताका इच्छाहरू बीचको भिन्नता।",
        "हिसाब गर्नुहोस् (Calculate): आफ्नो मासिक तलबमा आवश्यकता (५०%), चाहना (३०%) र बचत (२०%) को यथार्थ रकम।",
        "तुलना गर्नुहोस् (Compare): काठमाडौँ र पोखरा जस्ता महँगा शहरका लागि ५०/३०/२० र ६०/२०/२० ढाँचा बीचको फरक।",
        "लागू गर्नुहोस् (Apply): तलब बैंक खातामा जम्मा हुनेबित्तिकै २०% रकम स्वचालित रूपमा बचत खाता वा SIP मा पठाउने तरिका।"
      ],
      "practicalExercise": {
        "task": "आफ्नो व्यक्तिगत ५०/३०/२० मासिक बजेट हिसाब गर्नुहोस्",
        "instruction": "आफ्नो पछिल्लो महिनाको खुद तलब लिनुहोस्। त्यसलाई ०.५० ले गुणन गरी आवश्यकताको अधिकतम सीमा, ०.३० ले गुणन गरी चाहनाको सीमा र ०.२० ले गुणन गरी न्यूनतम मासिक बचत हिसाब गर्नुहोस्। यसलाई आफ्नो वास्तविक बैंक स्टेटमेन्टसँग तुलना गर्नुहोस्।"
      }
    }
  },
  "emergency-fund-building": {
    "en": {
      "summaryPoints": [
        "Understand the role of a 3-to-6 month emergency fund in preventing catastrophic debt during medical crises or job loss in Nepal.",
        "Explain why emergency capital must be kept entirely separate from everyday spending and volatile stock trading accounts.",
        "Calculate your required emergency buffer by multiplying your essential baseline monthly expenses by 6.",
        "Compare the risk, liquidity, and return of Class A bank savings accounts against short-term fixed deposits and liquid funds.",
        "Apply a systematic phase-in strategy to build your emergency buffer within 12 months without disrupting your lifestyle."
      ],
      "practicalExercise": {
        "task": "Calculate your exact 6-month emergency fund target and identify the storage account",
        "instruction": "Add your essential monthly living costs (rent, groceries, basic utilities, insurance, loan EMIs). Multiply this total by 6 to determine your emergency fund goal. Designate a separate Class A bank account or high-liquidity instrument to hold these funds."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): स्वास्थ्य संकट वा रोजगारी गुम्दा ६ महिनाको आपतकालीन कोषले ऋणको भारीबाट कसरी जोगाउँछ।",
        "व्याख्या गर्नुहोस् (Explain): आपतकालीन रकमलाई दैनिक खर्च गर्ने खाता र जोखिमपूर्ण सेयर बजारबाट किन अलग राख्नुपर्छ।",
        "हिसाब गर्नुहोस् (Calculate): आफ्नो परिवारको न्यूनतम अनिवार्य मासिक खर्चलाई ६ ले गुणन गरी आपतकालीन कोषको लक्ष्य।",
        "तुलना गर्नुहोस् (Compare): ‘क’ वर्गका वाणिज्य बैंकको बचत खाता, मुद्दती निक्षेप र लिक्विड फन्डको तरलता र सुरक्षा।",
        "लागू गर्नुहोस् (Apply): १२ महिनाभित्र आफ्नो आपतकालीन कोष खडा गर्न मासिक निश्चित रकम बचत गर्ने स्वचालित योजना।"
      ],
      "practicalExercise": {
        "task": "आफ्नो ६ महिनाको आपतकालीन कोषको लक्ष्य हिसाब गर्नुहोस्",
        "instruction": "आफ्नो परिवारको मासिक आधारभूत खर्च (कोठा भाडा, दाल-चामल, बिजुली, औषधि, ऋणको किस्ता) जोड्नुहोस्। त्यसलाई ६ ले गुणन गर्नुहोस्। सो रकम सुरक्षित राख्न छुट्टै वाणिज्य बैंक खाता छान्नुहोस्।"
      }
    }
  },
  "festival-expenses-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the compounding danger of financing Dashain, Tihar, and Chhath expenses through high-interest personal loans or informal borrowing.",
        "Explain how a 12-month sinking fund eliminates holiday financial anxiety by converting lump-sum expenses into manageable monthly installments.",
        "Calculate the precise monthly contribution required to fully fund your annual festival and travel budget.",
        "Compare the long-term wealth impact of festival debt with a prepaid festival sinking fund earning bank interest.",
        "Apply automated monthly recurring transfers into a dedicated digital sub-account or short-term recurring deposit (RD)."
      ],
      "practicalExercise": {
        "task": "Design an annual Dashain and festival sinking fund plan",
        "instruction": "Estimate your total festival spending from last year (Dakshina, travel tickets, clothing, food, gifts). Divide this total by 12 to find your monthly sinking fund savings requirement. Set up a dedicated sub-ledger or separate savings account today."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): दशैँ, तिहार र छठ जस्ता चाडपर्वमा ऋण काढेर खर्च गर्दा पारिवारिक बजेटमा पर्ने दीर्घकालीन असर।",
        "व्याख्या गर्नुहोस् (Explain): १२ महिने सिङ्किङ फन्ड (Sinking Fund) ले चाडपर्वको एकमुष्ठ खर्चलाई कसरी सहज बनाउँछ।",
        "हिसाब गर्नुहोस् (Calculate): वार्षिक चाडपर्व खर्चलाई १२ ले भाग गरी मासिक रूपमा छुट्याउनुपर्ने निश्चित रकम।",
        "तुलना गर्नुहोस् (Compare): महँगो ब्याजमा कर्जा लिएर चाडपर्व मनाउनु र पहिल्यै बचत गरी ब्याज कमाउँदै खर्च गर्नु बीचको फरक।",
        "लागू गर्नुहोस् (Apply): मोबाइल बैंकिङ वा रिकरिङ डिपोजिट (RD) मार्फत हरेक महिना चाडपर्व कोषमा स्वचालित रकम जम्मा गर्ने विधि।"
      ],
      "practicalExercise": {
        "task": "आफ्नो वार्षिक चाडपर्व सिङ्किङ फन्ड योजना बनाउनुहोस्",
        "instruction": "गत वर्ष दशैँ-तिहारमा भएको कुल खर्च (दक्षिणा, नयाँ लुगा, घर जाने भाडा, खानपिन) को हिसाब गर्नुहोस्। सो रकमलाई १२ ले भाग गर्नुहोस् र आउँदो चाडपर्वका लागि हरेक महिना कति छुट्याउनुपर्छ हिसाब निकाल्नुहोस्।"
      }
    }
  },
  "pay-yourself-first-nepal": {
    "en": {
      "summaryPoints": [
        "Understand why traditional willpower-based budgeting fails and why automated pre-commitment guarantees financial accumulation.",
        "Explain how the \"Pay Yourself First\" principle transforms savings from an uncertain month-end remainder into an untouchable fixed expense.",
        "Calculate your optimal monthly pre-commitment amount based on your baseline income stability and financial commitments.",
        "Compare the 10-year wealth trajectories of savers who automate on salary day versus those who save whatever is left over.",
        "Apply Standing Instructions (SI) or automated connectIPS mandates to transfer your savings within 24 hours of payroll deposit."
      ],
      "practicalExercise": {
        "task": "Set up an automated \"Pay Yourself First\" transfer rule",
        "instruction": "Determine a realistic savings percentage (e.g., 15% to 20% of your take-home pay). Log into your mobile banking app or visit your bank branch to schedule a recurring Standing Instruction that executes 1 day after your regular monthly salary credit date."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): महिनाको अन्त्यमा बाँकी रहेको रकम बचत गर्ने बानी किन प्रायः असफल हुन्छ।",
        "व्याख्या गर्नुहोस् (Explain): \"पहिले आफैलाई भुक्तान गर्नुहोस्\" (Pay Yourself First) सिद्धान्तले बचतलाई कसरी अनिवार्य बनाउँछ।",
        "हिसाब गर्नुहोस् (Calculate): आफ्नो मासिक आम्दानीको आधारमा तलब आएकै दिन बचत गर्न सकिने यथार्थ रकम (१५%-२०%)।",
        "तुलना गर्नुहोस् (Compare): तलब आएकै दिन स्वचालित बचत गर्ने र महिनाभरि खर्च गरेर बचेको रकम जोगाउन खोज्ने व्यक्तिको १० वर्षे सम्पत्ति।",
        "लागू गर्नुहोस् (Apply): आफ्नो बैंकमा स्थायी निर्देशन (Standing Instruction) वा connectIPS मार्फत तलब आएको भोलिपल्टै बचत हुने व्यवस्था मिलाउने।"
      ],
      "practicalExercise": {
        "task": "तलब आएकै दिन बचत हुने स्वचालित नियम लागू गर्नुहोस्",
        "instruction": "आफ्नो मासिक तलबको कम्तीमा १५% रकम निर्धारण गर्नुहोस्। मोबाइल बैंकिङ एप खोलेर तलब आउने मितिको भोलिपल्ट स्वतः अर्को बचत खाता वा SIP मा रकम ट्रान्सफर हुने Standing Instruction सेट गर्नुहोस्।"
      }
    }
  },
  "net-worth-tracking-nepal": {
    "en": {
      "summaryPoints": [
        "Understand why personal net worth is the ultimate objective scorecard of lifelong financial health, rather than gross salary.",
        "Explain the crucial difference between depreciating personal possessions and true productive assets in Nepal.",
        "Calculate your personal net worth by subtracting all outstanding debts from the fair market value of all verified assets.",
        "Compare conservative net worth accounting (excluding ancestral land and family gold) against debt-inflated paper wealth.",
        "Apply an annual or quarterly net worth audit routine to track your progress toward long-term financial independence."
      ],
      "practicalExercise": {
        "task": "Construct your comprehensive personal balance sheet and net worth baseline",
        "instruction": "Create two columns on paper or a spreadsheet: Assets (cash, bank balances, mutual funds, NEPSE shares, PF/CIT balances, vehicle resale value) and Liabilities (home loan, auto loan, credit card balance, cooperative debt). Subtract total liabilities from total assets to determine your current net worth."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): केवल ठूलो तलब होइन, वास्तविक वित्तीय सफलताको मापन खुद सम्पत्ति (Net Worth) ले मात्र गर्छ।",
        "व्याख्या गर्नुहोस् (Explain): मूल्य घट्ने विलासिताका सामान र आम्दानी दिने वास्तविक सम्पत्ति (Productive Assets) बीचको अन्तर।",
        "हिसाब गर्नुहोस् (Calculate): आफ्ना सम्पूर्ण सम्पत्तिहरूको बजार मूल्यबाट तिर्न बाँकी सबै ऋण घटाएर खुद सम्पत्तिको हिसाब।",
        "तुलना गर्नुहोस् (Compare): पैतृक जग्गाको काल्पनिक मूल्य र हातमा रहेको तरल तथा उत्पादक खुद सम्पत्ति बीचको फरक।",
        "लागू गर्नुहोस् (Apply): हरेक ६ महिना वा वर्षको अन्त्यमा आफ्नो सम्पूर्ण सम्पत्ति र ऋणको अडिट गर्ने व्यवस्थित प्रणाली।"
      ],
      "practicalExercise": {
        "task": "आफ्नो व्यक्तिगत ब्यालेन्स सिट बनाई खुद सम्पत्ति पत्ता लगाउनुहोस्",
        "instruction": "एउटा पानामा दुईवटा महल बनाउनुहोस्: सम्पत्ति (बैंक मौज्दात, सेयर, Mutual Fund, सञ्चय कोष/CIT) र दायित्व (बैंक ऋण, क्रेडिट कार्ड, सहकारी ऋण)। कुल सम्पत्तिबाट कुल ऋण घटाएर आफ्नो वास्तविक Net Worth निकाल्नुहोस्।"
      }
    }
  },
  "inflation-vs-savings-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how annual Consumer Price Index (CPI) inflation silently erodes the real purchasing power of cash in Nepal.",
        "Explain why keeping long-term capital in basic savings accounts guarantees a real negative return after taxes and inflation.",
        "Calculate the inflation-adjusted future purchasing power of your money using historical Nepal inflation rates (6% to 7%).",
        "Compare the nominal interest rates advertised by commercial banks with the net real after-tax return on fixed deposits.",
        "Apply growth-oriented asset allocation strategies to ensure your investment returns outpace domestic inflation."
      ],
      "practicalExercise": {
        "task": "Calculate the real inflation-adjusted purchasing power of your bank savings",
        "instruction": "Take your current savings account balance and current interest rate. Deduct 5% tax from the interest, then subtract Nepal’s annual inflation rate (approx 6.5%). Calculate how much real purchasing power your money gains or loses over 1, 5, and 10 years."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालमा उपभोक्ता मूल्य वृद्धि (Inflation) ले बैंकमा राखेको पैसाको क्रयशक्ति कसरी सुस्तरी घटाउँछ।",
        "व्याख्या गर्नुहोस् (Explain): साधारण बचत खातामा लामो समय पैसा राख्दा कर र महँगी कटाएपछि वास्तविक प्रतिफल किन ऋणात्मक हुन्छ।",
        "हिसाब गर्नुहोस् (Calculate): नेपालको औषत ६.५% महँगी दरलाई आधार मानेर ५ र १० वर्षपछि आफ्नो रकमको वास्तविक मूल्य।",
        "तुलना गर्नुहोस् (Compare): बैंकले दिने देखिने ब्याजदर (Nominal Rate) र महँगी कटाएपछिको वास्तविक प्रतिफल (Real Return) बीचको अन्तर।",
        "लागू गर्नुहोस् (Apply): महँगीलाई जितेर वास्तविक सम्पत्ति बढाउन सेयर, डिबेन्चर र इक्विटी फन्डमा सन्तुलित लगानी गर्ने रणनीति।"
      ],
      "practicalExercise": {
        "task": "आफ्नो बचत खाताको वास्तविक क्रयशक्ति ह्रास हिसाब गर्नुहोस्",
        "instruction": "आफ्नो बैंक खाताको मौज्दात र ब्याजदर हेर्नुहोस्। ब्याजबाट ५% कर कट्टा गरी त्यसमा ६.५% महँगी दर घटाउनुहोस्। १ वर्ष र ५ वर्षपछि तपाईंको पैसाले आजको तुलनामा कति कम सामान किन्न सक्छ हिसाब गर्नुहोस्।"
      }
    }
  },
  "compounding-engine-wealth": {
    "en": {
      "summaryPoints": [
        "Understand the mathematical law of compounding where reinvested earnings generate exponential wealth over multi-year horizons.",
        "Explain the dominant impact of time and starting early compared to sheer investment capital in Nepal.",
        "Calculate your projected portfolio size using the compound interest formula across 5, 10, 15, and 20-year horizons.",
        "Compare the final wealth accumulation of an investor starting at age 22 versus another starting at age 32 with identical monthly savings.",
        "Apply disciplined dividend and return reinvestment mechanisms rather than withdrawing short-term annual profits."
      ],
      "practicalExercise": {
        "task": "Simulate a 15-year compounding trajectory with systematic monthly contributions",
        "instruction": "Choose a monthly investment amount you can afford today (e.g., NPR 3,000 or NPR 5,000). Use the RisePaisa Compound Interest Calculator to simulate growth at an expected 12% annualized return over 5, 10, and 15 years. Note the exact point where compounding earnings exceed your total principal."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): चक्रवृद्धि ब्याज (Compounding) को गणितीय नियम, जहाँ प्रतिफलले थप प्रतिफल जन्माउँछ।",
        "व्याख्या गर्नुहोस् (Explain): लगानीको रकमभन्दा लगानी गरिएको समय (अवधि) ले अन्तिम प्रतिफलमा किन धेरै ठूलो फरक पार्छ।",
        "हिसाब गर्नुहोस् (Calculate): वार्षिक १०% देखि १२% प्रतिफलका आधारमा ५, १० र १५ वर्षमा पुग्ने कुल पुँजीको हिसाब।",
        "तुलना गर्नुहोस् (Compare): २२ वर्षको उमेरमा लगानी सुरु गर्ने र ३२ वर्षमा सुरु गर्ने व्यक्तिको ६० वर्ष पुग्दाको सम्पत्ति।",
        "लागू गर्नुहोस् (Apply): प्राप्त भएको लाभांश वा प्रतिफल खर्च नगरी पुनः लगानी (Reinvest) गरी चक्रवृद्धि चक्रलाई निरन्तरता दिने।"
      ],
      "practicalExercise": {
        "task": "१५ वर्षे कम्पाउन्डिङ वृद्धिको हिसाब गर्नुहोस्",
        "instruction": "तपाईंले मासिक लगानी गर्न सक्ने रकम (जस्तै रु. ३,००० वा ५,०००) लिनुहोस्। risePaisa Calculator प्रयोग गरी १२% अनुमानित वार्षिक प्रतिफलमा ५, १० र १५ वर्षपछिको कुल रकम हिसाब गर्नुहोस् र कम्पाउन्डिङको शक्ति हेर्नुहोस्।"
      }
    }
  },
  "open-ended-vs-close-ended-funds": {
    "en": {
      "summaryPoints": [
        "Understand the operational, regulatory, and pricing differences between open-ended mutual funds and close-ended schemes in Nepal.",
        "Explain why close-ended funds frequently trade at a steep discount to their Net Asset Value (NAV) on the NEPSE secondary market.",
        "Calculate the true redemption value of open-ended units after accounting for exit loads and capital gains withholding tax.",
        "Compare the liquidity profile of purchasing units directly through asset managers versus executing buy orders via TMS brokers.",
        "Apply an optimal fund selection strategy based on your investment horizon and systematic investment capability."
      ],
      "practicalExercise": {
        "task": "Compare an open-ended mutual fund against a close-ended scheme in Nepal",
        "instruction": "Pick one open-ended fund (e.g., NIBL Sahabhagita Fund) and one listed close-ended fund on NEPSE. Check their published NAVs on Merolagani or Sharesansar. Compare the close-ended fund’s current market price against its NAV to determine if it is trading at a discount or premium."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालमा खुलामुखी (Open-Ended) र बन्दमुखी (Close-Ended) Mutual Fund बीचको कानुनी र सञ्चालन भिन्नता।",
        "व्याख्या गर्नुहोस् (Explain): NEPSE मा कारोबार हुने बन्दमुखी फन्डहरू आफ्नो वास्तविक NAV भन्दा सस्तो (Discount) मा किन किनबेच हुन्छन्।",
        "हिसाब गर्नुहोस् (Calculate): खुलामुखी फन्ड बिक्री गर्दा लाग्ने Exit Load र पुँजीगत लाभकर (CGT) कटाएपछिको खुद रकम।",
        "तुलना गर्नुहोस् (Compare): फन्ड म्यानेजरबाट सिधै एकाइ किन्ने सुविधा र ब्रोकर TMS मार्फत सेयर बजारबाट किन्ने प्रक्रियाको तरलता।",
        "लागू गर्नुहोस् (Apply): मासिक नियमित लगानी (SIP) का लागि उपयुक्त खुलामुखी योजना छनोट गरी खाता सुरु गर्ने तरिका।"
      ],
      "practicalExercise": {
        "task": "खुलामुखी र बन्दमुखी Mutual Fund को तुलनात्मक अध्ययन गर्नुहोस्",
        "instruction": "नेपालमा सञ्चालित एउटा खुलामुखी फन्ड र एउटा NEPSE मा सूचीकृत बन्दमुखी फन्ड छान्नुहोस्। दुवैको प्रति एकाइ खुद सम्पत्ति मूल्य (NAV) हेर्नुहोस्। बन्दमुखी फन्डको बजार मूल्य NAV भन्दा कति प्रतिशत सस्तो छ हिसाब गर्नुहोस्।"
      }
    }
  },
  "how-to-start-monthly-sip-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how Systematic Investment Plans (SIP) enforce automated dollar-cost averaging in Nepali mutual funds.",
        "Explain how buying units during market downturns lowers your average acquisition cost and supercharges long-term gains.",
        "Calculate your projected future corpus based on disciplined monthly contributions and historical equity fund benchmarks.",
        "Compare manual ad-hoc lump-sum investing against automated recurring connectIPS e-mandate deductions.",
        "Apply the complete step-by-step registration workflow from KYC submission to online SIP mandate activation."
      ],
      "practicalExercise": {
        "task": "Initiate or simulate an online SIP setup with a licensed Nepali fund manager",
        "instruction": "Visit the web portal of a SEBON-licensed fund manager (e.g., Siddhartha Capital, NIBL Capital, NMB Capital). Open the SIP portal, select an open-ended fund, enter NPR 1,000 as your test monthly installment, and review the connectIPS payment mandate requirements."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): व्यवस्थित लगानी योजना (SIP) ले कसरी बजारको उतारचढावलाई अवसरमा बदलेर औषत लागत कम गर्छ।",
        "व्याख्या गर्नुहोस् (Explain): बजार घट्दा धेरै एकाइ र बढ्दा थोरै एकाइ किनिने (Rupee Cost Averaging) सिद्धान्त।",
        "हिसाब गर्नुहोस् (Calculate): मासिक रु. १,००० देखि ५,००० सम्मको नियमित SIP बाट १० वर्षमा बन्न सक्ने सम्भावित पुँजी।",
        "तुलना गर्नुहोस् (Compare): बजारको समय अनुमान गरी एकमुष्ठ लगानी गर्नु र हरेक महिना connectIPS बाट स्वचालित लगानी गर्नुको परिणाम।",
        "लागू गर्नुहोस् (Apply): अनलाइन पोर्टलबाट KYC फारम भरी, योजना छनोट गरी connectIPS e-mandate मार्फत SIP सुरु गर्ने तरिका।"
      ],
      "practicalExercise": {
        "task": "अनलाइन SIP दर्ता प्रक्रियाको अभ्यास गर्नुहोस्",
        "instruction": "SEBON बाट मान्यताप्राप्त कुनै पनि मर्चेन्ट बैंकको अनलाइन SIP पोर्टल खोल्नुहोस्। आफ्नो मासिक बचत क्षमता अनुसार न्यूनतम रु. १,००० को मासिक किस्ता छान्नुहोस् र connectIPS जोडेर स्वचालित भुक्तानी गर्ने चरणहरू बुझ्नुहोस्।"
      }
    }
  },
  "age-based-asset-allocation-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how your investment risk capacity dynamically evolves across different life stages in Nepal.",
        "Explain the rationale behind balancing volatile growth equities against stable fixed-income debt securities.",
        "Calculate your personal equity-to-debt target percentage using the Nepal-adapted \"110 minus Age\" rule.",
        "Compare aggressive capital accumulation portfolios suitable for younger workers with capital preservation allocations for retirees.",
        "Apply an annual rebalancing workflow to realign your portfolio when market swings skew your asset weights."
      ],
      "practicalExercise": {
        "task": "Calculate your target age-based asset allocation model",
        "instruction": "Subtract your current age from 110. The resulting number is your recommended target percentage for growth assets (NEPSE equities and equity mutual funds); the remainder should be allocated to capital-preserving instruments (fixed deposits, debentures, government treasury bonds). Compare this to your actual current holdings."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): उमेर बढ्दै जाँदा जोखिम बहन गर्ने क्षमता र लगानीको प्राथमिकता कसरी परिवर्तन हुन्छ।",
        "व्याख्या गर्नुहोस् (Explain): जोखिमपूर्ण सेयर बजार र सुरक्षित मुद्दती निक्षेप/ऋणपत्र बीच सन्तुलन कायम राख्नुको महत्त्व।",
        "हिसाब गर्नुहोस् (Calculate): \"११० - उमेर\" को नियम प्रयोग गरी आफ्नो उमेर अनुसार सेयर र सुरक्षित ऋणपत्रको प्रतिशत।",
        "तुलना गर्नुहोस् (Compare): २०-३० वर्षको युवाको वृद्धिमुखी (Aggressive) पोर्टफोलियो र अवकाश नजिकिएका व्यक्तिको सुरक्षित पोर्टफोलियो।",
        "लागू गर्नुहोस् (Apply): बजारको उतारचढावले गर्दा सेयरको अंश धेरै बढेमा वर्षमा एकपटक नाफा सुरक्षित गरी ऋणपत्रमा सार्ने विधि।"
      ],
      "practicalExercise": {
        "task": "आफ्नो उमेर अनुसारको सम्पत्ति बाँडफाँड (Asset Allocation) हिसाब गर्नुहोस्",
        "instruction": "११० बाट आफ्नो वर्तमान उमेर घटाउनुहोस्। आएको संख्या बराबरको प्रतिशत सेयर तथा इक्विटी फन्डमा र बाँकी प्रतिशत बैंक मुद्दती, डिबेन्चर वा सरकारी बचतपत्रमा राख्ने लक्ष्य बनाउनुहोस्। आफ्नो हालको लगानीसँग तुलना गर्नुहोस्।"
      }
    }
  },
  "market-psychology-down-markets": {
    "en": {
      "summaryPoints": [
        "Understand the cognitive biases (loss aversion, herd mentality) that trigger irrational retail panic selling during NEPSE bear markets.",
        "Explain why market corrections and cyclical bear runs are normal and historically healthy wealth-transfer events.",
        "Calculate the permanent financial loss caused by panic-selling quality companies at cyclical market bottoms.",
        "Compare the long-term compounding outcomes of disciplined accumulators versus emotional momentum traders.",
        "Apply strict written Investment Policy Statements (IPS) and automated SIP rules to insulate decisions from emotional distress."
      ],
      "practicalExercise": {
        "task": "Formulate your personal Bear Market Defense Plan",
        "instruction": "Write a 3-rule personal commitment protocol: 1) Never sell fundamentally sound dividend-paying stocks during a market dip; 2) Maintain 6 months of living expenses in cash so you never become a forced seller; 3) Continue automated SIP contributions uninterrupted during market drops."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): बजार घट्दा सर्वसाधारण लगानीकर्ता किन आत्तिएर घाटामा सेयर बेच्छन् (Loss Aversion र मनोवैज्ञानिक प्रभाव)।",
        "व्याख्या गर्नुहोस् (Explain): बजारमा आउने मन्दी (Bear Market) स्वाभाविक चक्र हो र यसले सस्तो मूल्यमा गुणस्तरीय सेयर किन्ने अवसर दिन्छ।",
        "हिसाब गर्नुहोस् (Calculate): बजारको तल्लो विन्दुमा आत्तिएर बिक्री गर्दा हुने स्थायी आर्थिक नोक्सानीको हिसाब।",
        "तुलना गर्नुहोस् (Compare): बजार घट्दा संयमित भई थप खरिद गर्ने धैर्यवान् लगानीकर्ता र हल्लाको भरमा किनबेच गर्ने व्यक्तिको प्रतिफल।",
        "लागू गर्नुहोस् (Apply): बजार घट्दा आत्तिनबाट जोगिन लिखित लगानी नियम (IPS) बनाउने र बजारको दैनिक उतारचढाव नहेरी अनुशासित बस्ने।"
      ],
      "practicalExercise": {
        "task": "मन्दीको समयमा मानसिक नियन्त्रणका लागि लिखित रणनीति बनाउनुहोस्",
        "instruction": "आफ्नो लागि ३ वटा स्पष्ट नियम लेख्नुहोस्: १) बजार घटेको बेला राम्रा कम्पनीको सेयर घाटामा नबेच्ने; २) दैनिक खर्चका लागि सेयर बेच्नु नपरोस् भनेर आपतकालीन कोष सुरक्षित राख्ने; ३) बजार घट्दा पनि नियमित मासिक SIP नरोक्ने।"
      }
    }
  },
  "demat-meroshare-crn-setup": {
    "en": {
      "summaryPoints": [
        "Understand the operational relationship between your Bank Account, Demat Account, Beneficiary Owner ID (BOID), and MeroShare.",
        "Explain why a C-ASBA Registration Number (CRN) issued by your bank is legally required to verify and block funds for IPO applications.",
        "Calculate the annual recurring maintenance fees for Demat (NPR 100) and MeroShare (NPR 50) and identify renewal deadlines.",
        "Compare the features, service quality, and DP reliability of commercial bank merchant arms versus independent stock brokerage firms.",
        "Apply the sequential registration process to set up your complete digital investing infrastructure in Nepal without visiting a branch."
      ],
      "practicalExercise": {
        "task": "Audit your Demat and MeroShare credentials and check expiry dates",
        "instruction": "Log into your MeroShare account. Navigate to your Profile section. Verify your 16-digit BOID, linked bank account number, and C-ASBA status. Check your Demat and MeroShare expiry dates to ensure renewal through eSewa or Khalti before Ashad end."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): बैंक खाता, डिम्याट (Demat) खाता, BOID नम्बर र मेरोसेयर (MeroShare) बीचको सम्बन्ध र कार्यप्रणाली।",
        "व्याख्या गर्नुहोस् (Explain): प्राथमिक सेयर (IPO) भर्दा बैंकबाट C-ASBA प्रमाणीकरण नम्बर (CRN) लिनु किन अनिवार्य हुन्छ।",
        "हिसाब गर्नुहोस् (Calculate): डिम्याटको वार्षिक नवीकरण शुल्क (रु. १००) र मेरोसेयर शुल्क (रु. ५०) तथा असार मसान्तभित्र नवीकरण नगर्दाको जोखिम।",
        "तुलना गर्नुहोस् (Compare): वाणिज्य बैंकका सहायक कम्पनी (DP) र ब्रोकर कार्यालयबाट डिम्याट खोल्दा पाइने सेवा सुविधाको फरक।",
        "लागू गर्नुहोस् (Apply): नागरिक एप, बैंकको अनलाइन पोर्टल वा शाखाबाट डिम्याट, मेरोसेयर र CRN लिने चरणबद्ध विधि।"
      ],
      "practicalExercise": {
        "task": "आफ्नो मेरोसेयर र डिम्याट विवरणको अडिट गर्नुहोस्",
        "instruction": "मेरोसेयर पोर्टलमा लग-इन गरी Profile मा जानुहोस्। आफ्नो १६ अंकको BOID, बैंक खाता, र CRN प्रमाणित भए/नभएको जाँच्नुहोस्। असार मसान्तमा नवीकरण म्याद सकिने भएकाले eSewa वा Khalti बाट शुल्क तिर्ने तरिका हेर्नुहोस्।"
      }
    }
  },
  "analyzing-applying-ipo-meroshare": {
    "en": {
      "summaryPoints": [
        "Understand how Initial Public Offerings (IPOs) are priced at face value (NPR 100) and regulated by SEBON in Nepal.",
        "Explain how to evaluate an IPO prospectus by scrutinizing EPS, Net Worth per Share, Credit Rating (ICRA/CARE), and Payback Period.",
        "Calculate your allotment probability in oversubscribed retail issues based on the 10-kitta lottery allotment system.",
        "Compare high-quality commercial bank or manufacturing IPOs against capital-intensive, highly leveraged hydropower projects.",
        "Apply the error-free MeroShare application process including bank selection, kitta entry, and 4-digit transaction PIN confirmation."
      ],
      "practicalExercise": {
        "task": "Evaluate an ongoing or upcoming IPO prospectus using core metrics",
        "instruction": "Download the offer letter (Awhan Patra) of an upcoming IPO from SEBON or Merolagani. Extract four key data points: 1) Credit Rating (e.g., CARE-NP BBB); 2) Net Worth per Share; 3) Earnings Per Share (EPS); 4) Debt-to-Equity ratio. Determine whether the company fundamentally justifies an investment."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालमा प्राथमिक सेयर (IPO) साधारणतया अंकित मूल्य रु. १०० मा कसरी जारी हुन्छ र SEBON ले कसरी नियमन गर्छ।",
        "व्याख्या गर्नुहोस् (Explain): कम्पनीको आह्वानपत्रमा उल्लेखित प्रतिसेयर आम्दानी (EPS), नेटवर्थ र क्रेडिट रेटिङ कसरी विश्लेषण गर्ने।",
        "हिसाब गर्नुहोस् (Calculate): १० कित्ता वितरण नियम (Lottery System) अनुसार धेरै आवेदन पर्दा सेयर पाउने सम्भावनाको हिसाब।",
        "तुलना गर्नुहोस् (Compare): नाफामा रहेका बलिया कम्पनीहरू र चर्को ऋण भएका कमजोर जलविद्युत आयोजनाका प्राथमिक सेयर बीचको जोखिम।",
        "लागू गर्नुहोस् (Apply): मेरोसेयरको C-ASBA मेनु प्रयोग गरी बैंक छान्ने, कित्ता भर्ने र ४ अंकको ट्रान्ज्याक्सन पिन हानेर आवेदन दिने तरिका।"
      ],
      "practicalExercise": {
        "task": "कुनै पनि नयाँ IPO को आह्वानपत्र विश्लेषण गर्नुहोस्",
        "instruction": "हाल निष्कासन भइरहेको वा आउन लागेको कुनै कम्पनीको आह्वानपत्र डाउनलोड गर्नुहोस्। कम्पनीको १) क्रेडिट रेटिङ, २) प्रतिसेयर नेटवर्थ, ३) विगतको प्रतिसेयर आम्दानी (EPS) र ४) आयोजनाको लागत हेरेर कम्पनी कत्तिको बलियो छ मूल्यांकन गर्नुहोस्।"
      }
    }
  },
  "broker-account-tms-navigation": {
    "en": {
      "summaryPoints": [
        "Understand the operational role of licensed Stock Brokerage firms and the NEPSE Trade Management System (TMS).",
        "Explain why pre-trade collateral deposit and post-trade settlement (EDIS & Fund Transfer) are mandatory within the T+2 window.",
        "Calculate your buying power based on deposited cash collateral and regulatory leverage limits (1:1 or 1:4).",
        "Compare Limit Orders, Market Orders, and Stop-Loss Orders to control execution prices during volatile trading sessions.",
        "Apply the step-by-step procedure to link connectIPS with your TMS account to deposit collateral and settle purchase dues seamlessly."
      ],
      "practicalExercise": {
        "task": "Audit your TMS trading setup and calculate collateral buying capacity",
        "instruction": "Log into your registered Broker TMS portal. Navigate to the Collateral Management tab. Check your available non-cash and cash collateral balance. Calculate your maximum share purchase limit and review your linked connectIPS bank settlement mapping."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल स्टक एक्सचेन्ज (NEPSE) का इजाजतप्राप्त ब्रोकर र अनलाइन ट्रेड म्यानेजमेन्ट सिस्टम (TMS) को भूमिका।",
        "व्याख्या गर्नुहोस् (Explain): सेयर किन्नुअघि कोल्याटरल (Collateral) राख्ने र सेयर किनिसकेपछि T+2 भित्र EDIS मार्फत सेयर ट्रान्सफर गर्ने नियम।",
        "हिसाब गर्नुहोस् (Calculate): कोल्याटरलमा जम्मा गरेको रकमका आधारमा सेयर खरिद गर्न सकिने अधिकतम क्षमता (Buying Power)।",
        "तुलना गर्नुहोस् (Compare): तोकिएको मूल्यमा खरिद गर्ने Limit Order र बजारको चल्ती मूल्यमा खरिद हुने Market Order बीचको भिन्नता।",
        "लागू गर्नुहोस् (Apply): connectIPS मार्फत ब्रोकर TMS मा सजिलै कोल्याटरल लोड गर्ने र खरिद गरेको सेयरको भुक्तानी गर्ने तरिका।"
      ],
      "practicalExercise": {
        "task": "आफ्नो ब्रोकर TMS खाताको कोल्याटरल र सेटिङ जाँच्नुहोस्",
        "instruction": "आफ्नो ब्रोकरको TMS पोर्टल खोल्नुहोस्। Collateral Management मा गएर उपलब्ध कोल्याटरल हेर्नुहोस्। connectIPS जोडेर न्यूनतम रु. १,००० कोल्याटरल लोड गर्ने प्रक्रिया र सेयर किनिसकेपछि EDIS गर्ने तरिका समीक्षा गर्नुहोस्।"
      }
    }
  },
  "broker-commissions-sebon-fees-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the complete fee structure governing secondary NEPSE transactions under SEBON regulations.",
        "Explain each constituent cost item: tiered Broker Commission (0.24% to 0.36%), SEBON Regulatory Fee (0.015%), and DP Charge (NPR 25).",
        "Calculate your exact breakeven selling price per share to cover all round-trip transaction costs and taxes.",
        "Compare the total trading friction of frequent intraday flipping versus long-term dividend buy-and-hold investing.",
        "Apply pre-trade cost estimations using the RisePaisa NEPSE Stock Calculator before executing buy or sell orders."
      ],
      "practicalExercise": {
        "task": "Calculate the total transaction costs and breakeven exit price for a NEPSE trade",
        "instruction": "Assume you buy 100 shares of a company at NPR 400 each (Total: NPR 40,000). Calculate the broker commission (0.36%), SEBON fee (0.015%), and DP fee (NPR 25). Determine the exact minimum price you must sell at to break completely even after paying round-trip fees."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): NEPSE मा सेयर खरिदबिक्री गर्दा लाग्ने सबै प्रकारका सरकारी शुल्क, कमिसन र करहरूको संरचना।",
        "व्याख्या गर्नुहोस् (Explain): ब्रोकर कमिसन (०.२४% देखि ०.३६%), धितोपत्र बोर्ड शुल्क (०.०१५%) र DP शुल्क (रु. २५) को हिसाब।",
        "हिसाब गर्नुहोस् (Calculate): सेयर किन्दा र बेच्दा लाग्ने दुवैतर्फको शुल्क जोडेर नाफामा निस्कन आवश्यक न्यूनतम बिक्री मूल्य (Breakeven Price)।",
        "तुलना गर्नुहोस् (Compare): छोटो समयमा छिनछिनमै सेयर किनबेच गर्दा लाग्ने चर्को शुल्क र दीर्घकालीन लगानी गर्दा जोगिने खर्च।",
        "लागू गर्नुहोस् (Apply): सेयर किन्नुअघि risePaisa Calculator प्रयोग गरेर लाग्ने कुल खर्च र लाभकर पहिल्यै हिसाब गर्ने अभ्यास।"
      ],
      "practicalExercise": {
        "task": "सेयर कारोबारको कुल शुल्क र Breakeven बिक्री मूल्य हिसाब गर्नुहोस्",
        "instruction": "मानौँ तपाईंले रु. ४०० का दरले १०० कित्ता सेयर किन्नुभयो (रु. ४०,०००)। त्यसमा लाग्ने ब्रोकर कमिसन, SEBON शुल्क र DP शुल्क जोड्नुहोस्। बेच्दा पनि सोही शुल्क लाग्ने हुँदा घाटा नहुनका लागि न्यूनतम कतिमा बेच्नुपर्छ हिसाब निकाल्नुहोस्।"
      }
    }
  },
  "how-to-read-quarterly-report-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how to locate and interpret mandatory quarterly financial statements (Q1, Q2, Q3, Q4) published by listed companies.",
        "Explain the core performance indicators: Earnings Per Share (EPS), Book Value Per Share (BVPS), Non-Performing Loans (NPL), and PE Ratio.",
        "Calculate annualized EPS and Price-to-Earnings (P/E) ratios to determine if a NEPSE stock is undervalued or speculative.",
        "Compare quarterly balance sheet health across peers in commercial banking, microfinance, insurance, and hydropower sectors.",
        "Apply a quick 5-minute financial screening checklist before making any secondary market investment decision."
      ],
      "practicalExercise": {
        "task": "Analyze the latest quarterly report of a listed NEPSE commercial bank",
        "instruction": "Download the latest quarterly financial report (Q2 or Q3) of any commercial bank from NEPSE or the bank’s website. Extract four key metrics: 1) Annualized EPS; 2) Net Worth per Share (BVPS); 3) NPL (Non-Performing Loan %); 4) Distributable Profit. Check if the NPL is safely below the NRB caution threshold of 4%."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): NEPSE मा सूचीकृत कम्पनीहरूले हरेक त्रैमासमा सार्वजनिक गर्ने वित्तीय विवरण कसरी हेर्ने र बुझ्ने।",
        "व्याख्या गर्नुहोस् (Explain): प्रतिसेयर आम्दानी (EPS), प्रतिसेयर नेटवर्थ (BVPS), खराब कर्जा (NPL) र मूल्य-आम्दानी अनुपात (P/E Ratio) को अर्थ।",
        "हिसाब गर्नुहोस् (Calculate): त्रैमासिक आम्दानीलाई चार गुणा गरी वार्षिक प्रतिसेयर आम्दानी (Annualized EPS) र P/E Ratio को हिसाब।",
        "तुलना गर्नुहोस् (Compare): एउटै क्षेत्रका दुई वाणिज्य बैंक वा जलविद्युत कम्पनीहरूको वित्तीय विवरण दाँजेर कुन बलियो छ पत्ता लगाउने।",
        "लागू गर्नुहोस् (Apply): सेयर किन्नुअघि ५ मिनेट दिएर कम्पनीको खराब कर्जा, नाफा र जगेडा कोष जाँच्ने बानी।"
      ],
      "practicalExercise": {
        "task": "कुनै एक बैंकको त्रैमासिक वित्तीय विवरण विश्लेषण गर्नुहोस्",
        "instruction": "कुनै वाणिज्य बैंकको पछिल्लो त्रैमासिक विवरण डाउनलोड गर्नुहोस्। १) वार्षिक EPS, २) नेटवर्थ, ३) खराब कर्जा (NPL %), र ४) वितरणयोग्य नाफा टिप्नुहोस्। राष्ट्र बैंकको मापदण्ड अनुसार बैंकको खराब कर्जा ४% भन्दा कम छ कि छैन जाँच्नुहोस्।"
      }
    }
  },
  "dividend-yield-vs-capital-gains-nepse": {
    "en": {
      "summaryPoints": [
        "Understand the two fundamental wealth mechanisms in equity investing: periodic Cash/Bonus Dividends versus Capital Appreciation.",
        "Explain why companies issue Bonus Shares (capitalization of reserves) versus Cash Dividends, and their impact on book value.",
        "Calculate the Dividend Yield percentage based on the prevailing secondary market price rather than par value.",
        "Compare the long-term compounding stability of consistent high-dividend payers against high-beta speculative growth stocks.",
        "Apply a total return framework to select stocks that balance capital growth with reliable cash payouts."
      ],
      "practicalExercise": {
        "task": "Calculate and compare the dividend yields of two dividend-paying NEPSE stocks",
        "instruction": "Select two high-dividend companies (e.g., a commercial bank and an infrastructure/telecom firm). Find their declared cash dividend per share from the previous fiscal year and divide each by their current market trading price. Multiply by 100 to compare their annual dividend yield against bank fixed deposit rates."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): सेयर बजारबाट आम्दानी हुने दुई मुख्य माध्यम: वार्षिक लाभांश (Dividend) र सेयरको मूल्य वृद्धि (Capital Gain)।",
        "व्याख्या गर्नुहोस् (Explain): कम्पनीले दिने नगद लाभांश (Cash Dividend) र बोनस सेयर (Bonus Share) बीचको कानुनी तथा वित्तीय फरक।",
        "हिसाब गर्नुहोस् (Calculate): बजारको वर्तमान सेयर मूल्यका आधारमा वास्तविक लाभांश प्रतिफल (Dividend Yield %) को हिसाब।",
        "तुलना गर्नुहोस् (Compare): वर्षैपिच्छे स्थिर लाभांश दिने कम्पनी र लाभांश नदिई केवल मूल्य मात्र उतारचढाव हुने कम्पनी बीचको जोखिम।",
        "लागू गर्नुहोस् (Apply): अवकाश कोष वा नियमित आम्दानीका लागि उच्च Dividend Yield भएका बलिया कम्पनीहरूको पोर्टफोलियो बनाउने।"
      ],
      "practicalExercise": {
        "task": "दुईवटा कम्पनीको Dividend Yield हिसाब गरी तुलना गर्नुहोस्",
        "instruction": "NEPSE मा सूचीकृत दुईवटा राम्रा लाभांश दिने कम्पनी छान्नुहोस्। गत वर्ष उनीहरूले दिएको प्रतिसेयर नगद लाभांशलाई आजको बजार मूल्यले भाग गरी १०० ले गुणन गर्नुहोस्। कुन कम्पनीको लाभांश बैंकको ब्याजभन्दा आकर्षक छ हेर्नुहोस्।"
      }
    }
  },
  "bank-classes-nepal-nrb": {
    "en": {
      "summaryPoints": [
        "Understand the Nepal Rastra Bank (NRB) regulatory classification framework dividing institutions into Class A, B, C, and D.",
        "Explain the capital adequacy, branch reach, foreign exchange powers, and statutory reserve requirements for each tier.",
        "Calculate statutory risk metrics and verify if your chosen institution meets NRB minimum paid-up capital requirements.",
        "Compare commercial banks (Class A) with development banks (Class B), finance companies (Class C), and unregulated cooperatives.",
        "Apply safety criteria to decide where to deposit emergency cash, operating capital, and long-term funds."
      ],
      "practicalExercise": {
        "task": "Classify and audit your existing banking institutions under NRB guidelines",
        "instruction": "Make a list of every bank or cooperative where you currently keep money. Check the official NRB list to confirm whether each is Class A, B, C, or an unregistered cooperative. Reallocate any excessive balances above safety limits into regulated Class A institutions."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल राष्ट्र बैंक (NRB) ले वित्तीय संस्थाहरूलाई गरेको ‘क’, ‘ख’, ‘ग’ र ‘घ’ वर्गको विभाजन र नियमन।",
        "व्याख्या गर्नुहोस् (Explain): वाणिज्य बैंक, विकास बैंक, फाइनान्स कम्पनी र लघुवित्तको पुँजी, कार्यक्षेत्र र सेवा प्रवाहको भिन्नता।",
        "हिसाब गर्नुहोस् (Calculate): राष्ट्र बैंकले तोकेको न्यूनतम चुक्ता पुँजी (वाणिज्य बैंकका लागि रु. ८ अर्ब) र सुरक्षा अनुपात।",
        "तुलना गर्नुहोस् (Compare): राष्ट्र बैंकको कडा नियमनमा रहेका बैंकहरू र गैर-नियमनकारी सहकारी संस्थामा पैसा राख्दाको जोखिम।",
        "लागू गर्नुहोस् (Apply): आफ्नो आपतकालीन र मुख्य पुँजीलाई ‘क’ वर्गका सुरक्षित वाणिज्य बैंकहरूमा मात्र राख्ने निर्णय।"
      ],
      "practicalExercise": {
        "task": "आफ्नो पैसा कुन वर्गको संस्थामा छ जाँच्नुहोस्",
        "instruction": "तपाईंको खाता रहेका सम्पूर्ण बैंक तथा वित्तीय संस्थाहरूको सूची बनाउनुहोस्। राष्ट्र बैंकको वर्गीकरण अनुसार ती ‘क’, ‘ख’, ‘ग’ वा सहकारी के हुन् पहिचान गर्नुहोस्। सहकारीमा धेरै रकम भए सुरक्षित वाणिज्य बैंकमा सार्ने योजना बनाउनुहोस्।"
      }
    }
  },
  "deposit-types-fixed-deposit-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the legal and operational differences between Current Accounts, Savings Accounts, and Fixed Deposits (FD) in Nepal.",
        "Explain how fixed deposits lock interest rates to protect your capital from falling bank interest cycles.",
        "Calculate the precise net maturity payout on a fixed deposit after compound interest and the mandatory 5% withholding tax.",
        "Compare the liquidity trade-offs and premature liquidation penalties of fixed deposits versus high-yield savings accounts.",
        "Apply an FD Laddering strategy to maintain quarterly liquidity while capturing the highest available long-term interest rates."
      ],
      "practicalExercise": {
        "task": "Design a 4-tier Fixed Deposit ladder for your medium-term savings",
        "instruction": "Take a lump sum of money you do not need immediately (e.g., NPR 2,00,000). Instead of placing it into one 1-year FD, divide it into four equal parts of NPR 50,000 across 3-month, 6-month, 9-month, and 12-month FDs. Notice how this provides liquidity every 90 days while earning maximum interest."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): चल्ती (Current), बचत (Savings) र मुद्दती (Fixed Deposit) खाता बीचको कानुनी तथा ब्याज भिन्नता।",
        "व्याख्या गर्नुहोस् (Explain): मुद्दती निक्षेपले तोकिएको अवधिसम्म ब्याजदर स्थिर राखेर बजारमा ब्याज घट्दा कसरी सुरक्षा दिन्छ।",
        "हिसाब गर्नुहोस् (Calculate): मुद्दती निक्षेपमा प्राप्त हुने त्रैमासिक चक्रवृद्धि ब्याज र ५% आयकर (TDS) कटाएपछिको खुद रकम।",
        "तुलना गर्नुहोस् (Compare): मुद्दती तोड्दा लाग्ने जरिवाना र बचत खातामा पैसा राख्दा हुने ब्याजको नोक्सानी बीचको सन्तुलन।",
        "लागू गर्नुहोस् (Apply): FD Laddering विधि (रकमलाई ३, ६, ९ र १२ महिनामा विभाजन गर्ने) प्रयोग गरी तरलता र उच्च ब्याज दुवै प्राप्त गर्ने।"
      ],
      "practicalExercise": {
        "task": "FD Laddering विधिको खाका बनाउनुहोस्",
        "instruction": "मानौँ तपाईंसँग रु. २,००,००० बचत छ। त्यसलाई एकमुष्ठ १ वर्षका लागि नराखी रु. ५०,००० का दरले क्रमशः ३ महिना, ६ महिना, ९ महिना र १ वर्षको मुद्दतीमा बाँड्नुहोस्। यसले हरेक ३ महिनामा नगद फिर्ता दिन्छ र उच्च ब्याज पनि जोगाउँछ।"
      }
    }
  },
  "base-rate-premium-nepal-banks": {
    "en": {
      "summaryPoints": [
        "Understand the mechanics of Nepal Rastra Bank’s Base Rate system that sets the legal floor for all bank lending rates.",
        "Explain how the bank calculates your final interest rate by adding an agreed Risk Premium to its fluctuating quarterly Base Rate.",
        "Calculate the monthly payment impact on your loan EMI when the bank adjusts its Base Rate upward or downward.",
        "Compare the lending base rates and loan spreads published monthly across various commercial banks.",
        "Apply negotiation tactics during annual loan reviews to lock in lower premium spreads or request a swap."
      ],
      "practicalExercise": {
        "task": "Calculate your effective borrowing rate using your bank’s latest Base Rate",
        "instruction": "Find your bank’s published Base Rate from their latest quarterly report or website. Add the contractual premium specified in your loan agreement letter (e.g., Base Rate 8.25% + Premium 2.0% = 10.25%). Verify that this matches your actual monthly loan statement."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल राष्ट्र बैंकको आधार दर (Base Rate) प्रणाली, जसभन्दा तल गएर बैंकले कसैलाई पनि कर्जा दिन पाउँदैन।",
        "व्याख्या गर्नुहोस् (Explain): बैंकले आफ्नो Base Rate मा निश्चित प्रिमियम (Premium %) थपेर कसरी कर्जाको अन्तिम ब्याजदर तय गर्छ।",
        "हिसाब गर्नुहोस् (Calculate): बैंकको Base Rate १% ले घटबढ हुँदा आफ्नो मासिक किस्ता (EMI) वा ऋणको अवधिमा पर्ने असर।",
        "तुलना गर्नुहोस् (Compare): विभिन्न वाणिज्य बैंकहरूले हरेक महिना प्रकाशित गर्ने Base Rate र उनीहरूले लिने प्रिमियमको अन्तर।",
        "लागू गर्नुहोस् (Apply): बैंकसँग छलफल गरी आफ्नो कर्जाको प्रिमियम घटाउन वा सस्तो Base Rate भएको बैंकमा कर्जा सार्ने (SWAP) प्रक्रिया।"
      ],
      "practicalExercise": {
        "task": "आफ्नो कर्जाको वास्तविक ब्याजदर हिसाब गर्नुहोस्",
        "instruction": "आफ्नो बैंकको पछिल्लो महिनाको Base Rate वेबसाइटबाट हेर्नुहोस्। तपाईंको ऋण सम्झौता पत्रमा उल्लेख भएको प्रिमियम (जस्तै Base Rate + २%) जोड्नुहोस्। बैंकले हिसाब गरेको ब्याजदर नियमसंगत छ कि छैन आफ्नो स्टेटमेन्टसँग भिडान गर्नुहोस्।"
      }
    }
  },
  "deposit-guarantee-fund-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the legal protection provided by the Deposit and Credit Guarantee Fund (DCGF) to retail bank depositors in Nepal.",
        "Explain how the mandatory statutory guarantee insures individual savings and fixed deposits up to NPR 5,00,000 per institution.",
        "Calculate your total insured versus uninsured exposure across multiple commercial banks and account types.",
        "Compare institutional insolvency risks between licensed Class A/B/C banks covered by DCGF and cooperatives which are completely excluded.",
        "Apply the multi-bank distribution strategy to legally ensure that 100% of large cash holdings remain under full government insurance."
      ],
      "practicalExercise": {
        "task": "Audit your total family savings to ensure 100% DCGF coverage",
        "instruction": "Check your total deposits (savings + FDs) in each single bank. If your total deposit in any single bank exceeds NPR 5,00,000, plan to split the excess into another regulated Class A bank so that every Rupee is fully protected by the DCGF NPR 5 Lakh government safety net."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) ले नेपाली बैंकका सर्वसाधारण निक्षेपकर्तालाई दिने कानुनी सुरक्षा।",
        "व्याख्या गर्नुहोस् (Explain): बैंक समस्यामा परे वा डुबेमा प्रति व्यक्ति प्रति संस्था रु. ५,००,००० सम्मको निक्षेप सरकारद्वारा कसरी सुरक्षित हुन्छ।",
        "हिसाब गर्नुहोस् (Calculate): एउटै बैंकमा रु. ५ लाखभन्दा बढी रकम हुँदा कति रकम सुरक्षित र कति रकम असुरक्षित हुन्छ भन्ने हिसाब।",
        "तुलना गर्नुहोस् (Compare): DCGF ले सुरक्षण गरेका ‘क’, ‘ख’, ‘ग’ वर्गका बैंकहरू र कुनै पनि सरकारी सुरक्षण नभएका सहकारी संस्थाहरू।",
        "लागू गर्नुहोस् (Apply): ठूलो रकम सुरक्षित राख्न फरक-फरक वाणिज्य बैंकहरूमा खाता खोली सम्पूर्ण रकमलाई ५ लाखको सरकारी ग्यारेन्टीभित्र राख्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो निक्षेप DCGF को रु. ५ लाखको सुरक्षा सीमाभित्र छ कि छैन जाँच्नुहोस्",
        "instruction": "एउटै बैंकमा रहेको आफ्नो सम्पूर्ण बचत र मुद्दती निक्षेप जोड्नुहोस्। यदि सो रकम रु. ५,००,००० भन्दा बढी छ भने, जोखिम कम गर्न बढी भएको रकम अर्को ‘क’ वर्गको बैंकमा खाता खोलेर सार्ने योजना बनाउनुहोस्।"
      }
    }
  },
  "credit-vs-debit-cards-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the crucial distinction between spending your own money (Debit Card) and borrowing bank funds on a revolving credit line (Credit Card).",
        "Explain the grace period mechanics (up to 45 days interest-free) and the devastating compounding cost of carrying unpaid credit card balances (up to 24% APR).",
        "Calculate your Credit Utilization Ratio and keep it safely below the 30% threshold to build a strong credit profile.",
        "Compare the fraud protection, cashback/discounts, and annual fees of Nepali Visa/Mastercard credit cards versus standard ATM debit cards.",
        "Apply automatic full-balance monthly auto-debit to guarantee you never incur high interest charges or late payment penalties."
      ],
      "practicalExercise": {
        "task": "Calculate your Credit Utilization Ratio and set up auto-pay",
        "instruction": "If you use a credit card, take your current balance and divide it by your total approved credit limit. Multiply by 100 to find your utilization ratio. If it exceeds 30%, make an immediate interim payment and configure 100% full-balance automatic monthly deductions."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): आफ्नै खाताको पैसा खर्च गर्ने डेबिट कार्ड (Debit Card) र बैंकको सापटी चलाउने क्रेडिट कार्ड (Credit Card) बीचको भिन्नता।",
        "व्याख्या गर्नुहोस् (Explain): क्रेडिट कार्डको ४५ दिने नि:शुल्क भुक्तानी सुविधा र समयमा नतिर्दा लाग्ने चर्को ब्याज (वार्षिक २४% सम्म)।",
        "हिसाब गर्नुहोस् (Calculate): क्रेडिट कार्डको स्वीकृत सीमाको ३०% भन्दा कम मात्र चलाएर (Credit Utilization) सुरक्षित रहने हिसाब।",
        "तुलना गर्नुहोस् (Compare): क्रेडिट कार्डले दिने छुट, सुरक्षा र रिवार्ड तथा त्यसको वार्षिक नवीकरण शुल्क बीचको लाभ-हानी।",
        "लागू गर्नुहोस् (Apply): कहिल्यै जरिवाना र चर्को ब्याज तिर्न नपरोस् भनेर हरेक महिना बैंक खाताबाट स्वतः १००% रकम चुक्ता हुने Auto-Debit सेट गर्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो क्रेडिट कार्डको उपयोगिता अनुपात (Credit Utilization) हिसाब गर्नुहोस्",
        "instruction": "आफ्नो क्रेडिट कार्डको खर्च रकमलाई कुल सीमा (Credit Limit) ले भाग गरी १०० ले गुणन गर्नुहोस्। यदि यो ३०% भन्दा माथि छ भने तुरुन्तै भुक्तानी गर्नुहोस् र महिनाको अन्त्यमा स्वतः पूरै रकम तिर्ने Auto-Debit सुविधा सक्रिय गर्नुहोस्।"
      }
    }
  },
  "cheque-bounce-banking-offence-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the strict criminal and civil legal consequences of issuing an unfunded check under Nepal’s Banking Offence and Punishment Act 2064.",
        "Explain the formal legal process: 3 consecutive bank dishonor memos, 7-day formal legal notice, and blacklisting with the Credit Information Bureau (CIB).",
        "Calculate the financial penalties and interest compensations mandated by law on dishonored check amounts.",
        "Compare the fast-track Negotiable Instruments Act route with the criminal police FIR route under the Banking Offence Act.",
        "Apply disciplined verification procedures to guarantee sufficient cleared funds exist before issuing or signing any commercial check."
      ],
      "practicalExercise": {
        "task": "Review your check-issuing workflow and understand CIB blacklisting consequences",
        "instruction": "Review all issued post-dated checks (PDCs) currently outstanding for rent, loans, or business. Verify that each matches expected cash inflows with a 3-day buffer. Familiarize yourself with the Karja Suchana Kendra (CIB) blacklisting rules to protect your personal and corporate credit standing."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): बैंकिङ कसूर तथा सजाय ऐन २०६४ अनुसार खातामा पैसा नभई चेक काट्दा (Cheque Bounce) हुने फौजदारी र देवानी कारबाही।",
        "व्याख्या गर्नुहोस् (Explain): बैंकको तीन पटकको बाउन्स पत्र, ७ दिने कानुनी सूचना र कर्जा सूचना केन्द्र (CIB) को कालोसूचीमा पर्ने प्रक्रिया।",
        "हिसाब गर्नुहोस् (Calculate): बाउन्स भएको चेक रकममा तिर्नुपर्ने बिगो, बिगो बमोजिमको जरिवाना र कानुनी ब्याजको हिसाब।",
        "तुलना गर्नुहोस् (Compare): विनिमय अधिकार पत्र ऐन २०३४ (सिभिल मुद्दा) र बैंकिङ कसूर ऐन (प्रहरी पक्राउ र जेल सजाय) बीचको भिन्नता।",
        "लागू गर्नुहोस् (Apply): कुनै पनि चेक काट्नुअघि खातामा पर्याप्त रकम भएको सुनिश्चित गर्ने र शंकास्पद पार्टीसँग अकाउन्ट पेयी चेक मात्र लिने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो चेक जारी गर्ने प्रणालीको समीक्षा गर्नुहोस्",
        "instruction": "तपाईंले अरूलाई दिएका अग्रिम मितिका (Post-dated) चेकहरूको विवरण हेर्नुहोस्। ती चेक साटिने मितिमा खातामा पर्याप्त रकम मौज्दात रहने निश्चित गर्नुहोस्। चेक बाउन्स भएमा बैंक खाता रोक्का र कालोसूचीमा परिने कानुनी व्यवस्था मनन गर्नुहोस्।"
      }
    }
  },
  "nepal-income-tax-slabs-salary": {
    "en": {
      "summaryPoints": [
        "Understand the progressive marginal income tax brackets for resident individuals and married couples under the Nepal Finance Act.",
        "Explain how the 1% Social Security Tax is levied on the first tax slab and who is legally exempt under the Social Security Fund (SSF).",
        "Calculate your progressive tax liability across the 1%, 10%, 20%, 30%, and 36% (plus 39% super-tax) marginal income tiers.",
        "Compare the tax liability of filing as an Individual versus Married couple to legally optimize household tax savings.",
        "Apply statutory deductions before tax computation to ensure your employer withholds only the legally required TDS."
      ],
      "practicalExercise": {
        "task": "Calculate your annual personal income tax liability and monthly TDS withholding",
        "instruction": "Take your annual gross salary. Deduct allowable SSF/EPF contributions. Apply the progressive tax brackets for your filing status (Unmarried or Married) using the RisePaisa Nepal Income Tax Calculator. Divide the annual tax by 12 to verify your employer’s monthly payroll TDS deduction."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): आर्थिक ऐन अनुसार नेपालमा व्यक्तिगत र दम्पतीका लागि तोकिएका प्रगतिशील आयकरका स्ल्याबहरू (Slabs)।",
        "व्याख्या गर्नुहोस् (Explain): पहिलो स्ल्याबमा लाग्ने १% सामाजिक सुरक्षा कर र योगदानमा आधारित सामाजिक सुरक्षा कोष (SSF) मा आबद्ध हुनेलाई हुने छुट।",
        "हिसाब गर्नुहोस् (Calculate): १%, १०%, २०%, ३०% र ३६% (साथै ३९% सम्म) को विभिन्न स्ल्याबमा लाग्ने वास्तविक कर दायित्वको हिसाब।",
        "तुलना गर्नुहोस् (Compare): व्यक्तिगत (Single) र दम्पती (Couple) हैसियतमा कर विवरण बुझाउँदा हुने कर बचतको तुलना।",
        "लागू गर्नुहोस् (Apply): करयोग्य आय गणना गर्नुअघि कानुनी रूपमा पाइने सम्पूर्ण छुटहरू कट्टा गरी सही TDS मात्र कट्टा गराउने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो वार्षिक आयकर र मासिक TDS हिसाब गर्नुहोस्",
        "instruction": "आफ्नो वार्षिक कुल तलब लिनुहोस्। त्यसमा SSF वा नागरिक लगानी कोष कट्टी घटाउनुहोस्। बाँकी रकममा आफ्नो हैसियत (अविवाहित वा विवाहित) अनुसार स्ल्याब लगाएर वार्षिक कर निकाल्नुहोस्। सो रकमलाई १२ ले भाग गरी आफ्नो मासिक तलबबाट काटिने TDS सँग भिडान गर्नुहोस्।"
      }
    }
  },
  "ssf-cit-insurance-tax-deductions": {
    "en": {
      "summaryPoints": [
        "Understand the approved statutory retirement deduction limits under Section 63 of the Nepal Income Tax Act 2058.",
        "Explain the statutory caps: one-third of assessable income, actual contribution, or maximum NPR 5,00,000 for SSF/CIT/EPF combined.",
        "Calculate the exact tax savings generated by maximizing your contributions to SSF, CIT, EPF, and Life Insurance (up to NPR 40,000).",
        "Compare the immediate tax relief of retirement contributions against their long-term compound growth and withdrawal rules.",
        "Apply payroll investment declarations to your employer’s accounts department before the end of Poush to reduce monthly TDS deductions."
      ],
      "practicalExercise": {
        "task": "Calculate your maximum allowable tax deductions and annual tax savings",
        "instruction": "Calculate 1/3rd of your annual assessable income. Compare it against NPR 5,00,000. Take the lower figure as your maximum retirement contribution limit (SSF/CIT/EPF). Add up to NPR 40,000 for life insurance and NPR 20,000 for medical insurance. Multiply the total deductions by your top marginal tax rate to see your exact tax savings."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): आयकर ऐन २०५८ को दफा ६३ बमोजिम स्वीकृत अवकाश कोषमा योगदान गर्दा पाइने कानुनी कर छुटका सीमाहरू।",
        "व्याख्या गर्नुहोस् (Explain): कुल आयको एक-तिहाइ (१/३), वास्तविक योगदान, वा अधिकतम रु. ५,००,००० मध्ये जुन कम हुन्छ सोही रकम छुट पाइने नियम।",
        "हिसाब गर्नुहोस् (Calculate): SSF, CIT, सञ्चय कोष र जीवन बीमा (रु. ४०,००० सम्म) मा रकम छुट्याउँदा जोगिने वास्तविक कर रकम।",
        "तुलना गर्नुहोस् (Compare): सामान्य खातामा पैसा राख्दा तिर्नुपर्ने कर र कर छुट पाउने अवकाश कोषमा जम्मा गर्दा हुने दोहोरो फाइदा।",
        "लागू गर्नुहोस् (Apply): हरेक वर्ष पुस मसान्तअघि आफ्नो कार्यालयको लेखा शाखामा CIT र बीमा प्रिमियम रसिद बुझाई मासिक तलबमा कर कटाउन लगाउने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो अधिकतम कर छुट र बचत हुने रकम हिसाब गर्नुहोस्",
        "instruction": "आफ्नो वार्षिक आयको १/३ भाग निकाल्नुहोस्। त्यसलाई रु. ५,००,००० सँग तुलना गर्नुहोस् र जुन कम छ त्यो लिनुहोस्। त्यसमा जीवन बीमाको रु. ४०,००० थप्नुहोस्। यो कुल छुट रकमलाई आफ्नो कर स्ल्याब (जस्तै २०% वा ३०%) ले गुणन गरी वर्षमा कति कर जोगिन्छ हिसाब निकाल्नुहोस्।"
      }
    }
  },
  "tds-rates-nepal-salaried-freelance": {
    "en": {
      "summaryPoints": [
        "Understand how Tax Deducted at Source (TDS) acts as an advance tax collection mechanism regulated by the Inland Revenue Department (IRD).",
        "Explain the statutory withholding rates: 15% on freelance consulting, 10% on house rent, 5% on bank interest, and 1.5% on VAT-registered goods.",
        "Calculate net payments receivable after mandatory withholding and reconcile your withholding tax with your annual tax return.",
        "Compare final withholding taxes (where TDS is non-adjustable) with advance withholding taxes that can be credited against your total tax bill.",
        "Apply the IRD tax portal login to verify that clients and employers have deposited withheld TDS against your personal PAN."
      ],
      "practicalExercise": {
        "task": "Audit your PAN withholding ledger on the IRD portal",
        "instruction": "Log into the Inland Revenue Department (IRD) Taxpayer Portal using your PAN. Navigate to the Taxpayer Portal TDS Search section. Enter the current fiscal year to verify that all employers and freelance clients who deducted TDS have officially deposited it into the government treasury under your PAN."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): आन्तरिक राजस्व विभाग (IRD) को नियम अनुसार स्रोतमा कर कट्टी (TDS) कसरी अग्रिम करका रूपमा काटिन्छ।",
        "व्याख्या गर्नुहोस् (Explain): परामर्श सेवामा १५%, घरभाडामा १०%, बैंक ब्याजमा ५% र सामान खरिदमा १.५% TDS लाग्ने कानुनी दरहरू।",
        "हिसाब गर्नुहोस् (Calculate): सेवा शुल्क वा बिल रकमबाट TDS कट्टा गरेपछि भुक्तानी पाउने खुद रकम र वार्षिक करमा मिलान हुने हिसाब।",
        "तुलना गर्नुहोस् (Compare): अन्तिम कर कट्टी (जुन पछि मिलान हुँदैन, जस्तै बैंक ब्याज) र अग्रिम कर कट्टी (जुन वार्षिक करमा समायोजन हुन्छ) बीचको फरक।",
        "लागू गर्नुहोस् (Apply): IRD को अनलाइन पोर्टलमा आफ्नो PAN नम्बर लग-इन गरी सेवाग्राहीले TDS राजस्वमा दाखिला गरे/नगरेको अनलाइन रुजु गर्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो PAN मा दाखिला भएको TDS अनलाइन रुजु गर्नुहोस्",
        "instruction": "आन्तरिक राजस्व विभाग (ird.gov.np) को Taxpayer Portal मा जानुहोस्। आफ्नो PAN र पासवर्ड प्रयोग गरी लग-इन गर्नुहोस्। TDS Search मा गएर चालू आर्थिक वर्षमा रोजगारदाता वा ग्राहकले काटेको TDS सरकारी खातामा जम्मा भएको छ कि छैन जाँच गर्नुहोस्।"
      }
    }
  },
  "capital-gains-tax-shares-real-estate": {
    "en": {
      "summaryPoints": [
        "Understand how Capital Gains Tax (CGT) is levied on the profitable sale of secondary market NEPSE shares and real estate in Nepal.",
        "Explain the holding period distinction for shares: 5% CGT for long-term holders (>365 days) versus 7.5% for short-term traders (<=365 days).",
        "Calculate your net capital gain after deducting purchase price, broker commission, SEBON fees, and allowable transfer costs.",
        "Compare the 5% versus 7.5% share CGT rates, and the 5% (holding >5 years) versus 7.5% (holding <=5 years) property land tax rules.",
        "Apply the weighted average cost method (WACC) on MeroShare to accurately declare your acquisition cost before executing a trade."
      ],
      "practicalExercise": {
        "task": "Calculate your Capital Gains Tax on a simulated stock sale using WACC",
        "instruction": "Assume you purchased 200 shares of a stock at NPR 300 two years ago and are selling them today at NPR 500. Calculate the gross profit (NPR 40,000). Deduct buying and selling broker commissions. Apply the long-term 5% CGT rate (held over 365 days) to calculate your exact tax payable to SEBON/IRD."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): NEPSE मा सेयर तथा घरजग्गा नाफामा बिक्री गर्दा सरकारलाई बुझाउनुपर्ने पुँजीगत लाभकर (CGT) को कानुनी व्यवस्था।",
        "व्याख्या गर्नुहोस् (Explain): ३६५ दिनभन्दा बढी सेयर होल्ड गर्दा ५% र ३६५ दिन वा सोभन्दा कम होल्ड गर्दा ७.५% लाभकर लाग्ने नियम।",
        "हिसाब गर्नुहोस् (Calculate): खरिद मूल्य, ब्रोकर कमिसन र DP शुल्क घटाएर खुद पुँजीगत नाफा र त्यसमा लाग्ने लाभकरको हिसाब।",
        "तुलना गर्नुहोस् (Compare): ५ वर्षभन्दा बढी जग्गा राखेर बेच्दा लाग्ने ५% कर र ५ वर्षभित्रै बेच्दा लाग्ने ७.५% लाभकरको भिन्नता।",
        "लागू गर्नुहोस् (Apply): सेयर बेच्नुअघि मेरोसेयरमा गएर भारित औषत लागत (WACC) र होल्डिङ पिरियड (My Holding) सही घोषणा गर्ने तरिका।"
      ],
      "practicalExercise": {
        "task": "सेयर बिक्रीमा लाग्ने पुँजीगत लाभकर (CGT) हिसाब गर्नुहोस्",
        "instruction": "मानौँ तपाईंले १ वर्षअघि रु. ३०० मा किनेको २०० कित्ता सेयर आज रु. ५०० मा बेच्नुभयो (खुद नाफा रु. ४०,०००)। ३६५ दिन नाघेकाले दीर्घकालीन ५% CGT लाग्छ। किनबेच शुल्क घटाएर सरकारलाई तिर्नुपर्ने वास्तविक लाभकर कति हुन्छ हिसाब निकाल्नुहोस्।"
      }
    }
  },
  "how-to-get-personal-pan-nepal": {
    "en": {
      "summaryPoints": [
        "Understand why a Permanent Account Number (PAN) is legally mandatory for all salaried employees, investors, and business operators in Nepal.",
        "Explain the verification requirements: Citizenship certificate (Nagarita), digital passport photo, mobile number, and local ward address.",
        "Calculate your financial loss from working without a PAN, including non-adjustable maximum withholding and inability to claim tax credits.",
        "Compare applying online via the Nagarik App versus the Inland Revenue Department (IRD) web portal versus in-person branch registration.",
        "Apply the step-by-step digital process to register, submit biometric details, and download your verified digital PAN card in minutes."
      ],
      "practicalExercise": {
        "task": "Register for or verify your Personal PAN via the Nagarik App or IRD portal",
        "instruction": "Download the Nagarik App on your mobile device. Link your verified Nepali citizenship number and mobile SIM. Navigate to the PAN section to instantly generate your 9-digit Personal PAN, or verify your existing PAN registration status on ird.gov.np."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालमा जागिर, सेयर कारोबार, बैंक खाता वा व्यवसाय गर्न स्थायी लेखा नम्बर (PAN) किन कानुनी रूपमा अनिवार्य छ।",
        "व्याख्या गर्नुहोस् (Explain): व्यक्तिगत प्यान लिन चाहिने आवश्यक कागजात: नेपाली नागरिकता, पासपोर्ट साइजको फोटो र मोबाइल नम्बर।",
        "हिसाब गर्नुहोस् (Calculate): प्यान नहुँदा लाग्ने उच्च TDS र सरकारबाट पाउनुपर्ने कर फिर्ता वा समायोजन गुम्दा हुने आर्थिक नोक्सानी।",
        "तुलना गर्नुहोस् (Compare): नागरिक एप (Nagarik App) मार्फत मिनेटमै अनलाइन प्यान लिने विधि र आन्तरिक राजस्व कार्यालय धाउने प्रक्रियाको सहजता।",
        "लागू गर्नुहोस् (Apply): नागरिक एप वा IRD को वेबसाइटबाट फारम भरी आफ्नो ९ अंकको डिजिटल प्यान कार्ड डाउनलोड गर्ने तरिका।"
      ],
      "practicalExercise": {
        "task": "नागरिक एप वा IRD पोर्टलबाट आफ्नो व्यक्तिगत PAN प्राप्त वा प्रमाणीकरण गर्नुहोस्",
        "instruction": "आफ्नो मोबाइलमा नागरिक एप खोल्नुहोस्। नागरिकता नम्बर रुजु गर्नुहोस् र PAN सेक्सनमा जानुहोस्। यदि प्यान छैन भने मिनेटमै आवेदन दिनुहोस्, वा पहिल्यै भए आफ्नो ९ अंकको प्यान कार्ड सुरक्षित रूपमा डाउनलोड गर्नुहोस्।"
      }
    }
  },
  "filing-annual-returns-tax-clearance": {
    "en": {
      "summaryPoints": [
        "Understand the legal obligation to file annual tax returns and obtain an official Tax Clearance Certificate (Kar Chukti Pramanpatra) in Nepal.",
        "Explain the filing categories: D-01 (income up to NPR 40 Lakhs from single salary) versus detailed D-02 / D-03 returns for multi-income earners.",
        "Calculate the statutory late filing penalties and interest under Sections 117, 118, and 119 of the Income Tax Act for missed Ashwin deadlines.",
        "Compare self-assessed tax filing with employer-certified tax clearance for single-source salaried professionals.",
        "Apply the online return submission process on the IRD portal to download your official Tax Clearance Certificate digitally."
      ],
      "practicalExercise": {
        "task": "Determine your applicable tax return form and filing requirements for the fiscal year",
        "instruction": "Review your total annual income sources (salary, freelance, bank interest, capital gains, rental). If your only income was salary under NPR 40 Lakhs with full employer TDS, verify if your employer filed D-01. If you had multiple income streams, prepare a draft D-02 return on the IRD portal."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): हरेक आर्थिक वर्ष सकिएपछि आन्तरिक राजस्व विभागमा वार्षिक कर विवरण (Income Tax Return) बुझाउने कानुनी दायित्व।",
        "व्याख्या गर्नुहोस् (Explain): एकल तलब आम्दानी भएकालाई D-01 फारम र अन्य स्रोत वा व्यवसायिक आम्दानी भएकालाई D-02/D-03 फारमको व्यवस्था।",
        "हिसाब गर्नुहोस् (Calculate): असोज मसान्तभित्र कर विवरण नबुझाउँदा आयकर ऐनको दफा ११७, ११८ र ११९ बमोजिम लाग्ने जरिवाना र ब्याजको हिसाब।",
        "तुलना गर्नुहोस् (Compare): केवल रोजगारदाताले कर काटेको प्रमाण र आन्तरिक राजस्व कार्यालयबाट आधिकारिक कर चुक्ता प्रमाणपत्र (Tax Clearance) लिनुको फरक।",
        "लागू गर्नुहोस् (Apply): IRD पोर्टलमा अनलाइन विवरण दाखिला गरी बैंक वा अनलाइनबाट बाँकी कर तिरेर डिजिटल कर चुक्ता प्रमाणपत्र डाउनलोड गर्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो लागि कुन कर विवरण फारम (D-01 वा D-02) लागू हुन्छ पहिचान गर्नुहोस्",
        "instruction": "आफ्नो वर्षभरिको आम्दानीका स्रोतहरू हेर्नुहोस्। यदि एउटै कम्पनीको तलब मात्र छ र ४० लाखभन्दा कम छ भने D-01, तर सेयरको नाफा, घरभाडा वा कन्सल्टिङ आम्दानी पनि छ भने D-02 भर्नुपर्छ। IRD पोर्टलमा लग-इन गरी आफ्नो स्थिति यकिन गर्नुहोस्।"
      }
    }
  },
  "term-life-vs-endowment-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the core structural differences between pure risk protection (Term Life) and hybrid investment-insurance (Endowment) policies.",
        "Explain why endowment policies offer dangerously inadequate life cover while delivering sub-par investment returns (4% to 6%) after high agent commissions.",
        "Calculate how much life cover you can purchase for the same premium: NPR 1 Crore Term Life versus only NPR 10 Lakh Endowment for the same NPR 40,000 annual premium.",
        "Compare the classic \"Buy Term and Invest the Difference\" (BTID) strategy in mutual funds against a standard 20-year money-back endowment policy.",
        "Apply disciplined policy selection to ensure your dependent family has adequate financial protection without subsidizing insurance company overhead."
      ],
      "practicalExercise": {
        "task": "Compare a Term Life quote against an Endowment policy for your age",
        "instruction": "Contact or visit the website of a licensed Nepal life insurer (e.g., Nepal Life, LIC Nepal, Sanima Reliance). Request two quotes for an NPR 25 Lakh sum assured: 1) A 25-year pure Term Life policy; 2) A 25-year Endowment policy. Calculate the annual premium difference and simulate investing that difference in an open-ended SIP."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): विशुद्ध जीवन सुरक्षा दिने म्यादी जीवन बीमा (Term Life) र बचत मिश्रित सावधिक बीमा (Endowment) बीचको आधारभूत भिन्नता।",
        "व्याख्या गर्नुहोस् (Explain): सावधिक बीमाले चर्को प्रिमियम लिएर पनि परिवारलाई पर्याप्त सुरक्षा नदिने र बैंक मुद्दतीभन्दा कम प्रतिफल (४%-६%) दिने वास्तविकता।",
        "हिसाब गर्नुहोस् (Calculate): वार्षिक रु. ४०,००० प्रिमियममा सावधिक बीमाले रु. १० लाख सुरक्षा दिँदा Term Life ले रु. १ करोडसम्मको कभर दिने हिसाब।",
        "तुलना गर्नुहोस् (Compare): \"सस्तोमा Term Life किन्ने र बाँकी पैसा Mutual Fund मा लगानी गर्ने\" (BTID) रणनीति र परम्परागत सावधिक बीमाको २० वर्षे प्रतिफल।",
        "लागू गर्नुहोस् (Apply): एजेन्टको दबाबमा नपरी आफ्नो परिवारको आर्थिक सुरक्षालाई पहिलो प्राथमिकता दिएर सही बीमा योजना छान्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो उमेर अनुसार Term Life र सावधिक बीमाको प्रिमियम तुलना गर्नुहोस्",
        "instruction": "कुनै नेपाली जीवन बीमा कम्पनीको वेबसाइटमा जानुहोस्। रु. ५० लाखको कभरका लागि १) Term Life को प्रिमियम र २) सावधिक (Endowment) बीमाको प्रिमियम हेर्नुहोस्। दुई बीचको प्रिमियम फरकलाई मासिक SIP मा लगानी गर्दा २० वर्षमा कति करोड बन्छ हिसाब गर्नुहोस्।"
      }
    }
  },
  "calculating-life-cover-sum-assured": {
    "en": {
      "summaryPoints": [
        "Understand the Human Life Value (HLV) concept that determines the economic loss your dependents would face in your absence.",
        "Explain why arbitrary insurance coverage (e.g., NPR 5 Lakh or 10 Lakh) leaves middle-class families severely vulnerable in urban Nepal.",
        "Calculate your scientific Sum Assured requirement using the DIME formula: Debt + Income replacement (10x to 15x annual expenses) + Mortgage + Education funding.",
        "Compare your existing combined life insurance coverage against your calculated Human Life Value to uncover any dangerous protection gap.",
        "Apply an affordable Term Life policy to bridge your protection shortfall immediately without straining your monthly budget."
      ],
      "practicalExercise": {
        "task": "Calculate your exact Human Life Value and insurance protection gap",
        "instruction": "Add: 1) Total outstanding debts (home loan, auto loan, personal loans); 2) 10 times your annual household expenses; 3) Future higher education fund for children. Subtract your existing liquid investments and current life cover. The resulting figure is your net required Sum Assured."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): मानव जीवन मूल्य (Human Life Value - HLV) को सिद्धान्त, जसले तपाईंको अनुपस्थितिमा परिवारलाई चाहिने आर्थिक सुरक्षाको मापन गर्छ।",
        "व्याख्या गर्नुहोस् (Explain): काठमाडौँ जस्तो शहरमा रु. ५-१० लाखको सानो बीमाले परिवारको दीर्घकालीन खर्च र बालबच्चाको पढाइ धान्न किन सक्दैन।",
        "हिसाब गर्नुहोस् (Calculate): DIME सूत्र (ऋण + वार्षिक खर्चको १० गुणा + घर कर्जा + बालबच्चाको शिक्षा कोष) प्रयोग गरी आवश्यक बीमांकको हिसाब।",
        "तुलना गर्नुहोस् (Compare): आफ्नो हालको बीमा रकम र परिवारलाई वास्तवमै चाहिने रकम बीचको जोखिमपूर्ण खाडल (Protection Gap)।",
        "लागू गर्नुहोस् (Apply): सानो प्रिमियममा ठूलो कभर दिने Term Insurance लिएर आफ्नो परिवारको सुरक्षा सुनिश्चित गर्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो वास्तविक जीवन बीमा आवश्यकता (Sum Assured) हिसाब गर्नुहोस्",
        "instruction": "१) तिर्न बाँकी कुल ऋण, २) परिवारको वार्षिक खर्चलाई १० ले गुणन गरेको रकम, र ३) बालबच्चाको उच्च शिक्षाका लागि लाग्ने रकम जोड्नुहोस्। त्यसमा आफ्नो हालको बैंक बचत र पुरानो बीमांक घटाउनुहोस्। बाँकी रकम नै तपाईंको वास्तविक आवश्यक बीमा रकम हो।"
      }
    }
  },
  "health-insurance-critical-illness-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how commercial indemnity Health Insurance and Critical Illness (CI) benefit policies protect your accumulated wealth from hospital bills.",
        "Explain the vital difference between indemnity hospital expense reimbursement and lump-sum cash payouts upon diagnosis of critical illnesses (cancer, stroke, kidney failure).",
        "Calculate your out-of-pocket exposure after policy sub-limits, deductible percentages, room rent caps (usually 1% to 2% of sum insured), and co-payments.",
        "Compare individual standalone medical policies with family floater plans and employer-provided group health covers in Nepal.",
        "Apply careful pre-existing condition declarations and scrutinize the 30-day initial and 2-to-4 year pre-existing disease waiting periods."
      ],
      "practicalExercise": {
        "task": "Review your health insurance policy sub-limits and exclusions",
        "instruction": "Take your existing medical insurance policy or employee health booklet. Identify three critical clauses: 1) Daily hospital room rent limit; 2) List of covered critical illnesses; 3) Exclusions (cosmetic, dental, pre-existing diseases). Calculate how much you would have to pay out-of-pocket for an NPR 3,00,000 hospital stay."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): स्वास्थ्य बीमा (Health Insurance) र घातक रोग सुरक्षा (Critical Illness Cover) ले बचत र सम्पत्तिलाई अस्पतालको खर्चबाट कसरी जोगाउँछ।",
        "व्याख्या गर्नुहोस् (Explain): अस्पतालको वास्तविक बिल भुक्तानी गर्ने स्वास्थ्य बीमा र क्यान्सर वा किड्नी फेल हुँदा एकमुष्ठ रकम दिने Critical Illness बीमाको अन्तर।",
        "हिसाब गर्नुहोस् (Calculate): कोठा भाडाको सीमा (Room Rent Cap), कटौती योग्य रकम (Deductible) र सह-भुक्तानी (Co-pay) कटाएपछि आफूले तिर्नुपर्ने रकम।",
        "तुलना गर्नुहोस् (Compare): व्यक्तिगत स्वास्थ्य बीमा र सम्पूर्ण परिवारलाई एउटै छानामुनि समेट्ने फेमिली फ्लोटर (Family Floater) योजना बीचको लागत।",
        "लागू गर्नुहोस् (Apply): बीमा गर्दा पहिल्यै भएका पुराना रोगहरू (Pre-existing diseases) नलुकाई सही विवरण भरेर दाबी खारेज हुनबाट जोगिने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो स्वास्थ्य बीमाको कोठा भाडा सीमा र शर्तहरू जाँच्नुहोस्",
        "instruction": "आफ्नो वा कार्यालयले दिएको स्वास्थ्य बीमा पोलिसी हेर्नुहोस्। १) दैनिक कोठा भाडाको अधिकतम सीमा (सामान्यतया कुल बीमांकको १%), २) दाबी नपाउने रोगहरूको सूची, र ३) पुरानो रोगका लागि कुर्नुपर्ने अवधि (Waiting Period) अध्ययन गर्नुहोस्।"
      }
    }
  },
  "government-health-insurance-board-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the operational structure of the Government Health Insurance Program administered by the Swasthya Beema Board (SBB) across all 77 districts.",
        "Explain the annual premium framework: flat NPR 3,500 for a family of up to 5 members providing up to NPR 1,00,000 in comprehensive medical coverage.",
        "Calculate the contribution rules for additional members (NPR 700 per person adding NPR 20,000 cover up to a maximum of NPR 2,00,000).",
        "Compare government primary healthcare coverage (first point of service at public hospitals/PHCs) with expensive private hospital treatments.",
        "Apply the enrollment and annual renewal cycle through your local ward’s female community health volunteer (Darta Sahayogi) or online portal."
      ],
      "practicalExercise": {
        "task": "Enroll your household or verify registration in the Government Health Insurance Scheme",
        "instruction": "Identify your local ward’s Health Insurance Enrollment Assistant (Darta Sahayogi). Prepare your family’s citizenship certificates, birth certificates for minors, and NPR 3,500. Calculate your family size and confirm your designated first point of service (Pratham Sewa Bindu) government hospital."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): स्वास्थ्य बीमा बोर्डद्वारा देशका ७७ वटै जिल्लामा सञ्चालित सरकारी स्वास्थ्य बीमा कार्यक्रमको कार्यप्रणाली।",
        "व्याख्या गर्नुहोस् (Explain): ५ जनासम्मको परिवारका लागि वार्षिक मात्र रु. ३,५०० प्रिमियम तिर्दा रु. १,००,००० सम्मको औषधि उपचार सेवा पाइने नियम।",
        "हिसाब गर्नुहोस् (Calculate): ५ जनाभन्दा बढी सदस्य भएमा प्रति सदस्य थप रु. ७०० तिरेर रु. २०,००० का दरले अधिकतम रु. २ लाखसम्म कभर बढाउने हिसाब।",
        "तुलना गर्नुहोस् (Compare): सरकारी स्वास्थ्य चौकी र अस्पताललाई प्रथम सेवा विन्दु मानेर पाइने नि:शुल्क उपचार र निजी अस्पतालको महँगो खर्च।",
        "लागू गर्नुहोस् (Apply): आफ्नो वडाका दर्ता सहयोगीमार्फत वा अनलाइनबाट परिवारका सबै सदस्यको नाम दर्ता गरी स्वास्थ्य बीमा परिचयपत्र लिने विधि।"
      ],
      "practicalExercise": {
        "task": "सरकारी स्वास्थ्य बीमामा परिवारको दर्ता प्रक्रिया पूरा गर्नुहोस्",
        "instruction": "आफ्नो वडाका स्वास्थ्य बीमा दर्ता सहयोगीलाई सम्पर्क गर्नुहोस्। परिवारका सदस्यहरूको नागरिकता र बालबच्चाको जन्मदर्ता तयार पार्नुहोस्। रु. ३,५०० बुझाएर आफ्नो प्रथम सेवा विन्दु (सरकारी अस्पताल वा प्राथमिक स्वास्थ्य केन्द्र) छनोट गरी दर्ता गर्नुहोस्।"
      }
    }
  },
  "how-to-file-insurance-claim-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the mandatory legal and procedural protocols required to successfully claim life, health, or motor insurance payouts in Nepal.",
        "Explain why intimate notification within statutory deadlines (24 to 48 hours for motor/theft, immediate for health) is critical to prevent claim denial.",
        "Calculate your net claim settlement after insurer deductions, salvage value deductions, depreciations, and policy excess limits.",
        "Compare Cashless hospitalization at network hospitals with direct Reimbursement claim processing at non-network institutions.",
        "Apply an organized document submission protocol: discharge summary, itemized pharmacy bills with doctor prescriptions, lab reports, and claim forms."
      ],
      "practicalExercise": {
        "task": "Create a pre-hospitalization Insurance Claim Document Checklist",
        "instruction": "Create a dedicated physical and digital folder containing: 1) Original insurance policy certificate; 2) Copies of all insured members’ citizenship cards; 3) Blank claim forms downloaded from your insurer; 4) A checklist of required hospital paperwork (discharge voucher, original pharmacy bills stamped by hospital pharmacy, doctor prescription slips)."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालमा स्वास्थ्य, दुर्घटना वा जीवन बीमाको दाबी (Claim) गर्दा पूरा गर्नुपर्ने कानुनी तथा प्राविधिक प्रक्रिया।",
        "व्याख्या गर्नुहोस् (Explain): घटना भएको निश्चित समयभित्र (अस्पताल भर्ना वा दुर्घटना भएको २४ देखि ४८ घण्टाभित्र) कम्पनीलाई जानकारी गराउनु किन अनिवार्य हुन्छ।",
        "हिसाब गर्नुहोस् (Calculate): अस्पतालको कुल बिलबाट नन-मेडिकल खर्च, को-पेमेन्ट र डिडक्टिबल कटाएपछि कम्पनीले दिने वास्तविक दाबी रकम।",
        "तुलना गर्नुहोस् (Compare): सूचीकृत अस्पतालमा परिचयपत्र देखाएर पाइने क्यासलेस (Cashless) सेवा र पछि बिल बुझाएर लिइने प्रतिपूर्ति (Reimbursement)।",
        "लागू गर्नुहोस् (Apply): डिस्चार्ज स्लिप, चिकित्सकको प्रेस्क्रिप्सन, औषधि पसलको भ्याट बिल र ल्याब रिपोर्टहरू क्रमबद्ध मिलाएर दाबी पेश गर्ने तरिका।"
      ],
      "practicalExercise": {
        "task": "बीमा दाबीका लागि आवश्यक कागजातको पूर्व-तयारी फाइल बनाउनुहोस्",
        "instruction": "एउटा छुट्टै फाइल बनाउनुहोस् जसमा: १) बीमा पोलिसीको प्रतिलिपि, २) परिवारका सदस्यहरूको नागरिकता प्रतिलिपि, ३) बीमा कम्पनीको दाबी फारम, र ४) अस्पतालबाट लिनुपर्ने आवश्यक कागजातहरूको चेकलिस्ट (डिस्चार्ज समरी, ओरिजिनल भ्याट बिल, डाक्टरको प्रेस्क्रिप्सन) राख्नुहोस्।"
      }
    }
  },
  "tax-rebate-life-insurance-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the statutory tax rebate benefits granted on premium payments under Schedule 1 of the Nepal Income Tax Act 2058.",
        "Explain the annual deduction ceiling: actual life insurance premium paid or maximum NPR 40,000 per fiscal year (plus NPR 20,000 for health insurance).",
        "Calculate your exact tax savings by multiplying your eligible insurance deduction by your applicable marginal tax bracket (up to 36%).",
        "Compare the after-tax net cost of an insurance policy when fully utilizing the government tax deduction versus purchasing without a PAN declaration.",
        "Apply the premium payment receipt submission process to your employer before the annual tax reconciliation cut-off date in Jestha/Ashad."
      ],
      "practicalExercise": {
        "task": "Calculate the net after-tax cost of your life insurance premium",
        "instruction": "Take your annual life insurance premium (up to NPR 40,000 maximum allowable deduction). Multiply this figure by your top personal tax bracket (e.g., 20% or 30%). Subtract this tax savings from your premium to discover the true net cost of your family’s insurance protection."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): आयकर ऐन २०५८ को अनुसूची १ बमोजिम जीवन बीमाको प्रिमियम तिर्दा पाइने वार्षिक कर छुट सुविधा।",
        "व्याख्या गर्नुहोस् (Explain): जीवन बीमा प्रिमियममा वार्षिक अधिकतम रु. ४०,००० सम्म र स्वास्थ्य बीमामा रु. २०,००० सम्मको आम्दानीमा कर छुट पाउने नियम।",
        "हिसाब गर्नुहोस् (Calculate): आफ्नो करको स्ल्याब (१०%, २०% वा ३०%) अनुसार रु. ४०,००० को बीमा गर्दा जोगिने वास्तविक कर रकम (रु. १२,००० सम्म बचत)।",
        "तुलना गर्नुहोस् (Compare): कर छुट नलिई बीमा प्रिमियम तिर्नु र कर छुट दाबी गर्दा बीमाको वास्तविक लागत कति सस्तो पर्न जान्छ भन्ने हिसाब।",
        "लागू गर्नुहोस् (Apply): हरेक वर्ष बीमा कम्पनीले दिएको प्रिमियम भुक्तानी रसिद आफ्नो रोजगारदातालाई बुझाएर तलबमा कर छुट समायोजन गराउने।"
      ],
      "practicalExercise": {
        "task": "बीमा प्रिमियमबाट हुने खुद कर बचत हिसाब गर्नुहोस्",
        "instruction": "आफ्नो वार्षिक जीवन बीमा प्रिमियम (अधिकतम रु. ४०,००० सम्म) लिनुहोस्। त्यसलाई आफ्नो कर स्ल्याब (जस्तै २०% वा ३०%) ले गुणन गर्नुहोस्। सो बराबरको रकम तपाईंले सरकारलाई कर तिर्नबाट जोगिन्छ, जसले तपाईंको बीमाको वास्तविक लागत निकै घटाउँछ।"
      }
    }
  },
  "good-debt-vs-bad-debt-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the fundamental economic distinction between debt used to finance cash-flow producing assets versus consumption liabilities.",
        "Explain why borrowing for depreciating consumer goods (gadgets, expensive weddings, festival banquets) destroys household financial stability in Nepal.",
        "Calculate the true compounded cost of servicing bad consumer debt versus the projected return generated by productive capital borrowing.",
        "Compare formal commercial bank mortgage/business loan interest rates with extortionate informal cooperative or loan-shark financing.",
        "Apply a strict Debt Elimination Protocol (Debt Avalanche or Snowball) to liquidate all high-interest consumer loans immediately."
      ],
      "practicalExercise": {
        "task": "Classify your existing personal debts into Good, Neutral, and Bad debt",
        "instruction": "List every outstanding debt you currently owe, including bank loans, credit cards, family borrowings, and cooperative loans. Next to each, record the interest rate and note whether the borrowed money created an asset that appreciates/produces income, or paid for consumed goods. Formulate an elimination target for all Bad debts."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): सम्पत्ति र आम्दानी बढाउन लिइने असल ऋण (Good Debt) र उपभोगमा सकिने खराब ऋण (Bad Debt) बीचको तात्विक अन्तर।",
        "व्याख्या गर्नुहोस् (Explain): विलासिताका सामान, महँगो मोबाइल, बिहे-भोज र चाडपर्वका लागि ऋण काड्दा पारिवारिक बजेट किन संकटमा पर्छ।",
        "हिसाब गर्नुहोस् (Calculate): खराब कर्जाको चर्को ब्याजले १० वर्षमा गुमाउने पुँजी र सोही रकम लगानी गर्दा हुन सक्ने सम्भावित आम्दानी।",
        "तुलना गर्नुहोस् (Compare): वाणिज्य बैंकबाट पाइने सस्तो घर/व्यवसाय कर्जा र स्थानीय साहु वा सहकारीबाट लिइने चर्को मिटरब्याजी कर्जाको जोखिम।",
        "लागू गर्नुहोस् (Apply): उच्च ब्याज भएका खराब कर्जाहरूलाई प्राथमिकताका साथ सबैभन्दा पहिले चुक्ता गर्ने (Debt Avalanche) रणनीति।"
      ],
      "practicalExercise": {
        "task": "आफ्ना सबै ऋणहरूलाई असल र खराब ऋणमा वर्गीकरण गर्नुहोस्",
        "instruction": "तपाईंले तिर्न बाँकी सबै ऋणको सूची बनाउनुहोस् (बैंक कर्जा, क्रेडिट कार्ड, सहकारी, साथीभाइको सापटी)। प्रत्येकको ब्याजदर लेख्नुहोस् र त्यो ऋणले सम्पत्ति बढायो कि खर्च मात्र भयो छुट्ट्याउनुहोस्। सबैभन्दा बढी ब्याज भएको ऋण पहिला तिर्ने योजना बनाउनुहोस्।"
      }
    }
  },
  "flat-rate-vs-reducing-balance-emi": {
    "en": {
      "summaryPoints": [
        "Understand the deceptive mathematical trap of \"Flat Rate\" interest frequently advertised by unregulated cooperatives and auto dealerships in Nepal.",
        "Explain how Flat Rate charges interest on the original principal throughout the entire loan tenure, doubling the true Effective Annual Rate (EAR).",
        "Calculate the true APR equivalent of a flat rate: a seemingly cheap \"10% Flat Rate\" is mathematically equivalent to approximately 18.5% reducing balance.",
        "Compare monthly repayment schedules and total cumulative interest costs between flat-rate cooperative loans and reducing-balance bank loans.",
        "Apply the RisePaisa EMI Calculator to verify whether any advertised loan quote uses reducing balance or hidden flat calculations."
      ],
      "practicalExercise": {
        "task": "Expose the true effective interest rate of a Flat Rate loan quote",
        "instruction": "Take an advertised loan quote offering an NPR 5,00,000 loan at \"9% Flat Rate\" for 5 years. Calculate the flat interest: NPR 45,000 per year × 5 years = NPR 2,25,000. Now compare this with an official reducing-balance loan at 9% where total interest is only about NPR 1,22,000. Note the hidden NPR 1,03,000 extra cost."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): सहकारी र अटोमोबाइल डिलरहरूले प्रचार गर्ने फ्ल्याट ब्याजदर (Flat Rate) पछाडिको महँगो वित्तीय भ्रम।",
        "व्याख्या गर्नुहोस् (Explain): फ्ल्याट दरमा साँवा घट्दै गए पनि सुरुवाती पूरै रकममा ब्याज हिसाब गरिन्छ, जसले गर्दा वास्तविक ब्याजदर करिब दोब्बर हुन्छ।",
        "हिसाब गर्नुहोस् (Calculate): देख्दा सस्तो लाग्ने \"१०% Flat Rate\" को वास्तविक घट्दो ब्याजदर (Reducing Balance) करिब १८.५% हुन आउने गणित।",
        "तुलना गर्नुहोस् (Compare): वाणिज्य बैंकको घट्दो किस्ता (Reducing EMI) र सहकारीको फ्ल्याट कर्जामा तिरिने कुल ब्याजको अन्तर।",
        "लागू गर्नुहोस् (Apply): कुनै पनि ऋण लिनुअघि बैंक वा संस्थालाई \"यो Reducing Balance हो कि Flat Rate?\" भनी सोध्ने र risePaisa मा जाँच्ने बानी।"
      ],
      "practicalExercise": {
        "task": "फ्ल्याट ब्याजदरको वास्तविक लुकेको ब्याजदर हिसाब गर्नुहोस्",
        "instruction": "मानौँ कसैले रु. ५,००,००० कर्जा ५ वर्षका लागि \"१०% Flat\" मा दिँदैछ। फ्ल्याट हिसाबमा कुल ब्याज रु. २,५०,००० पुग्छ। तर वाणिज्य बैंकको १०% Reducing मा कुल ब्याज रु. १,३७,००० मात्र हुन्छ। फ्ल्याट दरमा लाग्ने १ लाखभन्दा बढीको अतिरिक्त लागत आफै हिसाब गर्नुहोस्।"
      }
    }
  },
  "home-loan-eligibility-debt-to-income": {
    "en": {
      "summaryPoints": [
        "Understand the strict Debt-to-Income (DTI) and Debt Service Coverage Ratio (DSCR) regulations mandated by Nepal Rastra Bank.",
        "Explain the mandatory 50% DTI ceiling: your total monthly debt payments across all institutions cannot exceed 50% of your verified tax-cleared income.",
        "Calculate your maximum borrowing capacity and maximum allowable monthly EMI based on your formal salary slips and tax clearance certificates.",
        "Compare the borrowing limits of a single applicant versus joint family co-borrowing structures.",
        "Apply pre-application income optimization to ensure your verified bank statements and tax filings qualify for the required loan quantum."
      ],
      "practicalExercise": {
        "task": "Calculate your maximum Home Loan EMI eligibility under NRB’s 50% DTI rule",
        "instruction": "Take your verified gross monthly salary after tax (e.g., NPR 80,000). Multiply by 0.50 to find your total monthly debt ceiling (NPR 40,000). Deduct any existing monthly EMIs you currently pay (e.g., NPR 10,000 auto loan). The remaining amount (NPR 30,000) is your absolute maximum allowable new home loan EMI."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल राष्ट्र बैंकले घर कर्जामा तोकेको कडा आम्दानी र किस्ताको अनुपात (Debt-to-Income / DTI सीमा)।",
        "व्याख्या गर्नुहोस् (Explain): ५०% DTI को नियम: तपाईंको मासिक सम्पूर्ण कर्जाको किस्ता प्रमाणित कर चुक्ता भएको आम्दानीको ५०% भन्दा बढी हुन पाउँदैन।",
        "हिसाब गर्नुहोस् (Calculate): आफ्नो मासिक तलब र कर चुक्ता प्रमाणपत्रका आधारमा बैंकबाट पाउन सकिने अधिकतम कर्जा रकम र किस्ताको सीमा।",
        "तुलना गर्नुहोस् (Compare): एकल व्यक्तिको आम्दानीमा पाइने कर्जा सीमा र पति-पत्नीको संयुक्त आम्दानी जोडेर पाइने थप कर्जा सुविधा।",
        "लागू गर्नुहोस् (Apply): बैंकमा कर्जा आवेदन दिनुअघि आफ्नो कर चुक्ता प्रमाणपत्र र बैंक स्टेटमेन्ट दुरुस्त बनाएर अधिकतम कर्जा स्वीकृत गराउने।"
      ],
      "practicalExercise": {
        "task": "राष्ट्र बैंकको ५०% DTI नियम अनुसार आफ्नो कर्जा योग्यता हिसाब गर्नुहोस्",
        "instruction": "आफ्नो करपछिको मासिक खुद आम्दानी लिनुहोस् (जस्तै रु. १,००,०००)। त्यसलाई ०.५० ले गुणन गर्दा अधिकतम मासिक किस्ता सीमा रु. ५०,००० आउँछ। यदि पहिल्यै कुनै अन्य किस्ता तिर्दै हुनुहुन्छ भने त्यो घटाउनुहोस्। बाँकी रकम नै तपाईंले नयाँ घर कर्जामा तिर्न पाउने अधिकतम EMI हो।"
      }
    }
  },
  "property-valuation-mortgage-process": {
    "en": {
      "summaryPoints": [
        "Understand the independent property valuation process mandated by commercial banks before approving any mortgage in Nepal.",
        "Explain the critical disparity between government minimum valuation (Sarkari Mulyankan) and commercial fair market valuation (Chalti Mulyankan).",
        "Calculate the Loan-to-Value (LTV) ratio and distress value haircut (usually 60% to 80% of fair market value) that dictates your approved loan amount.",
        "Compare all mandatory bank closing fees: valuation fee, legal opinion fee, loan processing fee (capped at 0.75% by NRB), and land revenue mortgage registration (Dristibandhak) charges.",
        "Apply a comprehensive step-by-step checklist to prepare all land ownership certificates (Lalpurja, Tiro Tireko Rashid, Charkilla, Naksa Pass) before valuation."
      ],
      "practicalExercise": {
        "task": "Estimate the net loan proceeds from a property valuation scenario",
        "instruction": "Assume a plot of land with a fair market value of NPR 1 Crore in Kathmandu. Apply the bank engineer’s distress valuation haircut of 80% (NPR 80 Lakhs). Apply the NRB residential mortgage LTV ceiling of 50% for Kathmandu Valley. Calculate the final approved loan amount (NPR 40 Lakhs) and account for 0.75% bank processing fees."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): घर कर्जा लिनुअघि बैंकले खटाउने स्वतन्त्र इन्जिनियरद्वारा गरिने धितो मूल्यांकन (Property Valuation) प्रक्रिया।",
        "व्याख्या गर्नुहोस् (Explain): मालपोतको सरकारी मूल्यांकन र बजारको वास्तविक चल्ती मूल्यांकन बीचको भिन्नता र बैंकले लिने औसत मूल्यांकन।",
        "हिसाब गर्नुहोस् (Calculate): राष्ट्र बैंकले तोकेको Loan-to-Value (LTV) सीमा (काठमाडौँ उपत्यकामा ५०% र बाहिर ६०%) अनुसार स्वीकृत हुने कर्जा रकम।",
        "तुलना गर्नुहोस् (Compare): बैंकको कर्जा प्रक्रिया शुल्क (अधिकतम ०.७५%), इन्जिनियरिङ मूल्यांकन शुल्क, रोक्का दस्तुर र दृष्टिबन्धक खर्च।",
        "लागू गर्नुहोस् (Apply): मूल्यांकन हुनुअघि लालपुर्जा, तिरो तिरेको रसिद, चारकिल्ला, बाटोको सिफारिस र नक्सापास कागजात दुरुस्त राख्ने।"
      ],
      "practicalExercise": {
        "task": "धितो मूल्यांकन र स्वीकृत हुने सम्भावित कर्जा हिसाब गर्नुहोस्",
        "instruction": "आफ्नो जग्गाको बजार मूल्य मानौँ रु. १ करोड छ। बैंकको इन्जिनियरले सामान्यतया बजार र सरकारी मूल्यको आधारमा मूल्यांकन गर्छन्। यदि काठमाडौँमा ५०% LTV सीमा लागू हुन्छ भने तपाईंले अधिकतम कति ऋण पाउनुहुन्छ र ०.७५% सेवा शुल्क कति लाग्छ हिसाब निकाल्नुहोस्।"
      }
    }
  },
  "loan-prepayment-math-savings": {
    "en": {
      "summaryPoints": [
        "Understand the disproportionate front-loaded interest amortization schedule of standard 20-year reducing balance bank loans.",
        "Explain how paying just a fraction of extra principal in the early years bypasses decades of compounding bank interest.",
        "Calculate the dramatic tenure reduction and Rupee savings achieved by paying just one extra EMI per calendar year.",
        "Compare making small monthly principal top-ups versus making periodic lump-sum prepayments after festival bonuses.",
        "Apply online mobile banking loan repayment portals to tag extra payments specifically toward \"Principal Reduction\" rather than advance interest."
      ],
      "practicalExercise": {
        "task": "Calculate the interest saved and years eliminated by making 1 extra EMI payment per year",
        "instruction": "Use the RisePaisa Loan Repayment Calculator for an NPR 40 Lakh loan at 10% for 20 years. Model the effect of paying 1 extra EMI (NPR 38,600) every year in Dashain. Discover how this single habit cuts your loan duration by over 4.5 years and saves over NPR 8 Lakhs in pure interest."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): २० वर्षे बैंक कर्जामा सुरुवाती वर्षहरूमा तिरिने किस्ताको अधिकांश भाग साँवा नभई केवल ब्याजमा जाने वास्तविकता।",
        "व्याख्या गर्नुहोस् (Explain): सुरुवाती वर्षहरूमा थोरै मात्र अतिरिक्त साँवा अग्रिम भुक्तानी (Prepayment) गर्दा कसरी लाखौँ ब्याज जोगिन्छ।",
        "हिसाब गर्नुहोस् (Calculate): वर्षमा केवल १ किस्ता (EMI) बराबरको अतिरिक्त साँवा तिर्दा २० वर्षे कर्जा कसरी १५ वर्षमै सकिन्छ।",
        "तुलना गर्नुहोस् (Compare): नियमित किस्ता मात्र तिर्दै जाने व्यक्ति र दशैँको बोनसबाट हरेक वर्ष अतिरिक्त साँवा घटाउने व्यक्तिको कुल ब्याज खर्च।",
        "लागू गर्नुहोस् (Apply): बैंकमा अतिरिक्त रकम बुझाउँदा त्यसलाई अग्रिम ब्याज नभई \"साँवा कट्टा\" (Principal Reduction) मा लेखांकन गराउने।"
      ],
      "practicalExercise": {
        "task": "वर्षमा १ अतिरिक्त किस्ता तिर्दा जोगिने ब्याज र समय हिसाब गर्नुहोस्",
        "instruction": "मानौँ तपाईंसँग रु. ४० लाखको २० वर्षे घर कर्जा छ। risePaisa Loan Calculator प्रयोग गर्नुहोस्। हरेक वर्ष दशैँमा १ अतिरिक्त किस्ता (करिब रु. ३८,०००) साँवामा बुझाउँदा कर्जाको अवधि कति वर्ष घट्छ र कति लाख रुपैयाँ ब्याज जोगिन्छ हिसाब हेर्नुहोस्।"
      }
    }
  },
  "prepayment-penalties-nrb-rules": {
    "en": {
      "summaryPoints": [
        "Understand the consumer protection directives issued by Nepal Rastra Bank restricting unfair pre-closure penalties on retail loans.",
        "Explain the regulatory mandate: commercial banks cannot charge prepayment penalties on individual retail home loans after 2 to 5 years, or caps them strictly under 0.15% to 0.5%.",
        "Calculate the total financial benefit of refinancing (SWAP) your mortgage to a competing bank with a lower Base Rate spread.",
        "Compare the administrative transfer costs (mortgage release, new legal opinion, processing fees) against the total multi-year interest savings of switching banks.",
        "Apply the formal 30-day loan redemption notice procedure with your existing bank to request an interest adjustment or obtain a No Objection Certificate (NOC)."
      ],
      "practicalExercise": {
        "task": "Evaluate the financial feasibility of switching your home loan to a lower-rate bank",
        "instruction": "Check your current loan rate (e.g., 10.5%). Find a competing bank offering Base Rate + Spread of 8.5%. Calculate the 2% interest difference on your remaining balance. Deduct the new bank’s 0.75% processing fee and valuation costs. Determine how many months it takes for the interest savings to completely pay back the transfer costs."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल राष्ट्र बैंकले व्यक्तिगत कर्जा समयअगावै चुक्ता गर्दा लाग्ने पूर्वभुक्तानी शुल्क (Prepayment Penalty) मा लगाएको कानुनी सीमा।",
        "व्याख्या गर्नुहोस् (Explain): राष्ट्र बैंकको निर्देशन अनुसार व्यक्तिगत घर कर्जामा बैंकहरूले चर्को जरिवाना लिन नपाउने र २ वर्षपछि निकै न्यून वा शून्य हुने व्यवस्था।",
        "हिसाब गर्नुहोस् (Calculate): महँगो ब्याजदर भएको बैंकबाट सस्तो Base Rate भएको अर्को बैंकमा कर्जा सार्दा (Loan SWAP) हुने खुद नाफा।",
        "तुलना गर्नुहोस् (Compare): कर्जा सार्दा लाग्ने नयाँ रोक्का, मूल्यांकन र सेवा शुल्क तथा अर्को बैंकले दिने सस्तो ब्याजदर बीचको लाभ-लागत विश्लेषण।",
        "लागू गर्नुहोस् (Apply): हालको बैंकलाई ब्याजदर घटाउन औपचारिक पत्र लेख्ने र नघटाएमा अर्को बैंकमा कर्जा सार्न No Objection Letter (NOC) माग्ने प्रक्रिया।"
      ],
      "practicalExercise": {
        "task": "आफ्नो कर्जा अर्को बैंकमा सार्दा (SWAP) फाइदा हुन्छ कि हुँदैन हिसाब गर्नुहोस्",
        "instruction": "आफ्नो हालको कर्जाको ब्याजदर (मानौँ १०.५%) र अर्को बैंकले अफर गरेको सस्तो दर (मानौँ ८.५%) हेर्नुहोस्। बाँकी साँवामा वार्षिक २% ले जोगिने ब्याज हिसाब गर्नुहोस्। नयाँ बैंकको सेवा शुल्क कटाएर कति महिनाभित्रै सरेको फाइदा देखिन थाल्छ हिसाब निकाल्नुहोस्।"
      }
    }
  },
  "what-is-mutual-fund-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how licensed Asset Management Companies (AMCs) pool capital from retail investors under SEBON’s Mutual Fund Regulations 2067.",
        "Explain the legal tripartite structure separating the Fund Sponsor, Independent Fund Supervisors, and the licensed Asset Manager.",
        "Calculate your unit allotment by dividing your invested capital by the fund’s Net Asset Value (NAV) per unit.",
        "Compare the instant sector diversification of a mutual fund against the concentration risk of holding 2 or 3 individual NEPSE stocks.",
        "Apply the minimum investment threshold (just NPR 1,000) to begin investing in professionally managed portfolios without secondary market trading stress."
      ],
      "practicalExercise": {
        "task": "Inspect the monthly portfolio disclosure report of a SEBON-regulated mutual fund",
        "instruction": "Download the latest monthly portfolio disclosure (Monthly Factsheet) of any mutual fund from SEBON or the AMC website. Identify the fund’s top 5 stock holdings, its total asset size, and its asset allocation breakdown across Equities, Fixed Deposits, and Corporate Debentures."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): सामूहिक लगानी कोष नियमावली २०६७ अनुसार साना लगानीकर्ताको पुँजी एकीकृत गरी व्यावसायिक लगानी गरिने संयन्त्र।",
        "व्याख्या गर्नुहोस् (Explain): कोष प्रवर्द्धक (Sponsor), स्वतन्त्र कोष सुपरिवेक्षक (Supervisors) र योजना व्यवस्थापक (AMC) बीचको कानुनी नियन्त्रण प्रणाली।",
        "हिसाब गर्नुहोस् (Calculate): लगानी गरेको रकमलाई फन्डको प्रति एकाइ खुद सम्पत्ति मूल्य (NAV) ले भाग गरी प्राप्त हुने एकाइको हिसाब।",
        "तुलना गर्नुहोस् (Compare): एउटा वा दुईवटा कम्पनीको सेयर किन्दा हुने जोखिम र Mutual Fund ले दिने २०-३० कम्पनीको सुरक्षित विविधता।",
        "लागू गर्नुहोस् (Apply): मासिक मात्र रु. १,००० बाटै व्यावसायिक व्यवस्थापकको निगरानीमा रहेको खुलामुखी फन्डमा लगानी सुरु गर्ने तरिका।"
      ],
      "practicalExercise": {
        "task": "कुनै एक Mutual Fund को मासिक पोर्टफोलियो विवरण अध्ययन गर्नुहोस्",
        "instruction": "नेपालको कुनै पनि मर्चेन्ट बैंकको वेबसाइटबाट Mutual Fund को पछिल्लो Monthly Factsheet डाउनलोड गर्नुहोस्। फन्डले कुन-कुन ५ वटा ठूला कम्पनीको सेयरमा लगानी गरेको छ र कति प्रतिशत रकम बैंक मुद्दती तथा ऋणपत्रमा सुरक्षित राखेको छ हेर्नुहोस्।"
      }
    }
  },
  "open-ended-vs-close-ended-schemes-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the operational mechanics distinguishing open-ended funds (continuous issuance and redemption) from close-ended funds (fixed maturity, traded on NEPSE).",
        "Explain why close-ended funds trade based on market supply and demand, often at a 10% to 25% discount to their true underlying NAV.",
        "Calculate the exact NAV discount percentage on a listed close-ended fund to spot potential arbitrage opportunities.",
        "Compare the exit load fees of open-ended funds (usually 0.25% to 1.5% if redeemed within 1-2 years) against broker commissions on NEPSE.",
        "Apply the systematic monthly investment advantage of open-ended schemes to automate dollar-cost averaging effortlessly."
      ],
      "practicalExercise": {
        "task": "Calculate the discount to NAV of three listed close-ended mutual funds on NEPSE",
        "instruction": "Check the weekly NAV disclosures of three close-ended mutual funds published on Sharesansar or Merolagani. Check their current trading market prices on NEPSE TMS. Use the formula: Discount % = ((NAV - Market Price) / NAV) × 100. Identify which fund offers the greatest margin of safety."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): निरन्तर किनबेच गर्न सकिने खुलामुखी (Open-Ended) र निश्चित अवधिका लागि NEPSE मा सूचीकृत हुने बन्दमुखी (Close-Ended) फन्ड बीचको भिन्नता।",
        "व्याख्या गर्नुहोस् (Explain): दोस्रो बजारमा माग र आपूर्तिका कारण बन्दमुखी फन्डहरू आफ्नो वास्तविक NAV भन्दा १०% देखि २५% सम्म सस्तो (Discount) मा किन पाइन्छन्।",
        "हिसाब गर्नुहोस् (Calculate): बन्दमुखी फन्डको बजार मूल्य र वास्तविक NAV बीचको छुट प्रतिशत (Discount %) को हिसाब।",
        "तुलना गर्नुहोस् (Compare): खुलामुखी फन्डमा लाग्ने Exit Load (समयअगावै बेच्दा लाग्ने शुल्क) र बन्दमुखी फन्ड बेच्दा लाग्ने ब्रोकर कमिसन।",
        "लागू गर्नुहोस् (Apply): नियमित मासिक बचत (SIP) का लागि खुलामुखी योजना र एकमुष्ठ सस्तोमा किन्नका लागि डिस्काउन्टमा रहेका बन्दमुखी योजना छान्ने।"
      ],
      "practicalExercise": {
        "task": "NEPSE मा सूचीकृत तीनवटा बन्दमुखी फन्डको Discount प्रतिशत हिसाब गर्नुहोस्",
        "instruction": "Sharesansar वा Merolagani मा गएर ३ वटा बन्दमुखी फन्डको पछिल्लो NAV हेर्नुहोस्। त्यसपछि बजारमा उनीहरूको सेयर मूल्य कति छ टिप्नुहोस्। सूत्र: [(NAV - बजार मूल्य) / NAV] × १०० प्रयोग गरी कुन फन्ड वास्तविक सम्पत्तिभन्दा कति सस्तोमा पाइँदैछ हिसाब निकाल्नुहोस्।"
      }
    }
  },
  "how-nav-is-calculated-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how Net Asset Value (NAV) serves as the true fair book value per unit of a mutual fund scheme in Nepal.",
        "Explain the daily marked-to-market accounting method required by SEBON for equity holdings, accrued interest, and statutory fund management liabilities.",
        "Calculate the NAV of a scheme by dividing Total Net Assets (Assets minus Liabilities) by the Total Number of Outstanding Units.",
        "Compare weekly published NAVs versus month-end comprehensive audited NAV reports to assess genuine portfolio performance.",
        "Apply NAV tracking metrics to measure an AMC fund manager’s performance against the broader NEPSE benchmark index."
      ],
      "practicalExercise": {
        "task": "Calculate a mutual fund’s Net Asset Value from a balance sheet snapshot",
        "instruction": "Take a fund’s total listed equity valuation at today’s closing prices (e.g., NPR 80 Crore), add fixed deposits and accrued interest (NPR 20 Crore), subtract management and supervisor fee payables (NPR 2 Crore) to find Net Assets (NPR 98 Crore). Divide by 8 Crore outstanding units to find the exact NAV: NPR 12.25 per unit."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): प्रति एकाइ खुद सम्पत्ति मूल्य (NAV) ले Mutual Fund को एक एकाइको वास्तविक किताबी मूल्य कसरी जनाउँछ।",
        "व्याख्या गर्नुहोस् (Explain): धितोपत्र बोर्डको नियम अनुसार हरेक दिन सेयर बजारको अन्तिम मूल्यमा आधारित भएर गरिने Marked-to-Market हिसाब प्रणाली।",
        "हिसाब गर्नुहोस् (Calculate): फन्डको कुल सम्पत्तिबाट दायित्व घटाएर बाँकी रकमलाई कुल एकाइ संख्याले भाग गरी NAV निकाल्ने तरिका।",
        "तुलना गर्नुहोस् (Compare): साप्ताहिक रूपमा प्रकाशित हुने अनुमानित NAV र महिनाको अन्त्यमा आउने विस्तृत अडिट रिपोर्ट बीचको शुद्धता।",
        "लागू गर्नुहोस् (Apply): NAV को वृद्धिदरलाई NEPSE परिसूचकको उतारचढावसँग दाँजेर कुन फन्ड म्यानेजरले बजारभन्दा राम्रो काम गरिरहेको छ पत्ता लगाउने।"
      ],
      "practicalExercise": {
        "task": "Mutual Fund को NAV निकाल्ने गणितीय अभ्यास गर्नुहोस्",
        "instruction": "मानौँ एउटा फन्डको कुल सेयर लगानी रु. ८० करोड, मुद्दती निक्षेप रु. २० करोड र तिर्नुपर्ने व्यवस्थापन खर्च रु. २ करोड छ भने खुद सम्पत्ति रु. ९८ करोड हुन्छ। यदि फन्डको कुल एकाइ ८ करोड छ भने प्रति एकाइ NAV रु. १२.२५ कसरी आउँछ हिसाब बुझ्नुहोस्।"
      }
    }
  },
  "starting-online-sip-connectips-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the mechanics of setting up a paperless Systematic Investment Plan (SIP) in Nepal using verified digital banking rails.",
        "Explain how connectIPS e-mandate functionality authorizes recurring automated bank debits on a chosen calendar day every month.",
        "Calculate the long-term wealth difference between manual ad-hoc payments (frequently skipped) versus automated recurring SIP debits.",
        "Compare flexible SIP options (monthly, quarterly, step-up SIPs) across various SEBON-licensed fund managers.",
        "Apply the sequential online registration process: selecting scheme, entering BOID, setting installment, and authorizing e-mandate."
      ],
      "practicalExercise": {
        "task": "Set up an automated monthly SIP mandate using connectIPS",
        "instruction": "Log into an open-ended mutual fund portal (e.g., NIBL Sahabhagita, Siddhartha Systematic, or NMB Saral Bachat). Select \"New SIP Registration\", input your 16-digit BOID, enter your monthly installment amount (e.g., NPR 2,000), choose the deduction day (e.g., 5th of every month), and authenticate the recurring e-mandate via your connectIPS account."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालमा बैंक शाखा नधाई घरमै बसेर डिजिटल माध्यमबाट व्यवस्थित लगानी योजना (SIP) सुरु गर्ने विधि।",
        "व्याख्या गर्नुहोस् (Explain): connectIPS को e-mandate प्रणालीले हरेक महिना तोकिएको गते बैंक खाताबाट स्वतः रकम कट्टा गरी SIP मा जम्मा गर्ने तरिका।",
        "हिसाब गर्नुहोस् (Calculate): समय बिर्सेर छुट्ने म्यानुअल भुक्तानी र हरेक महिना नियमपूर्वक काटिने स्वचालित SIP बीचको १० वर्षे प्रतिफल।",
        "तुलना गर्नुहोस् (Compare): मासिक, त्रैमासिक र वार्षिक आधारमा गरिने SIP तथा आम्दानी बढेसँगै किस्ता बढाउने (Step-up SIP) विकल्प।",
        "लागू गर्नुहोस् (Apply): अनलाइन पोर्टलमा योजना छान्ने, १६ अंकको BOID नम्बर हाल्ने, किस्ता रकम तोक्ने र connectIPS प्रमाणीकरण गर्ने चरणबद्ध प्रक्रिया।"
      ],
      "practicalExercise": {
        "task": "connectIPS मार्फत स्वचालित मासिक SIP म्यान्डेट सेट गर्नुहोस्",
        "instruction": "कुनै खुलामुखी Mutual Fund को अनलाइन पोर्टलमा जानुहोस्। \"New SIP Registration\" मा क्लिक गर्नुहोस्। आफ्नो १६ अंकको BOID हाल्नुहोस्, मासिक किस्ता रकम (जस्तै रु. २,०००) र महिनाको कुन गते पैसा काट्ने हो रोज्नुहोस्। connectIPS मार्फत e-mandate प्रमाणित गर्नुहोस्।"
      }
    }
  },
  "dividend-reinvestment-plan-drep-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how Dividend Reinvestment Plans (DREP) supercharge compounding by automatically converting cash dividends into additional fund units.",
        "Explain why taking annual cash dividends breaks the compounding curve and subjects your earnings to premature consumption or low-yield idle bank balances.",
        "Calculate your total accumulated units and future portfolio value under 100% DREP enrollment versus cash payout withdrawal.",
        "Compare the tax efficiency and transaction cost savings of automatic unit allotment versus manual secondary market purchases.",
        "Apply the DREP enrollment option during initial SIP registration or update your investor mandate on the AMC investor portal."
      ],
      "practicalExercise": {
        "task": "Calculate the compounding power of DREP versus Cash Dividend payout over 10 years",
        "instruction": "Model an initial investment of NPR 1,00,000 earning an average annual dividend return of 10%. Calculate the 10-year outcome if you withdraw NPR 10,000 in cash each year (Total cash: NPR 1,00,000, portfolio: NPR 1,00,000) versus reinvesting via DREP where the portfolio compounds to over NPR 2,59,000."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): लाभांश पुनः लगानी योजना (DREP) ले नगद लाभांशलाई सिधै थप एकाइमा बदलेर चक्रवृद्धि प्रतिफल कसरी गुणात्मक बनाउँछ।",
        "व्याख्या गर्नुहोस् (Explain): हरेक वर्ष आउने सानो नगद लाभांश खर्च गर्दा कम्पाउन्डिङ चक्र कसरी टुट्छ र दीर्घकालीन सम्पत्तिमा कस्तो असर पर्छ।",
        "हिसाब गर्नुहोस् (Calculate): १० वर्षसम्म लाभांश नगद झिक्दा र DREP मार्फत स्वतः पुनः लगानी गर्दा अन्तिम पुँजीमा देखिने ठूलो भिन्नता।",
        "तुलना गर्नुहोस् (Compare): DREP बाट विना कुनै शुल्क नयाँ एकाइ प्राप्त गर्ने सुविधा र बजारबाट आफै सेयर किन्दा लाग्ने ब्रोकर कमिसन र झन्झट।",
        "लागू गर्नुहोस् (Apply): आफ्नो खुलामुखी Mutual Fund को अनलाइन प्रोफाइलमा गएर Dividend Option मा \"DREP\" छनोट गरी स्वचालित कम्पाउन्डिङ सुरु गर्ने।"
      ],
      "practicalExercise": {
        "task": "DREP र नगद लाभांश बीचको १० वर्षे प्रतिफल तुलना गर्नुहोस्",
        "instruction": "मानौँ तपाईंसँग रु. १,००,००० को फन्ड छ र वार्षिक १०% लाभांश पाइन्छ। यदि हरेक वर्ष रु. १०,००० नगद झिक्नुभयो भने १० वर्षपछि पनि साँवा रु. १ लाख नै रहन्छ। तर DREP मा स्वतः पुनः लगानी भएमा सो रकम रु. २,५९,००० भन्दा बढी पुग्छ। कम्पाउन्डिङको हिसाब बुझ्नुहोस्।"
      }
    }
  },
  "systematic-withdrawal-plan-swp-pension": {
    "en": {
      "summaryPoints": [
        "Understand how Systematic Withdrawal Plans (SWP) transform accumulated mutual fund capital into predictable, automated monthly pension income in Nepal.",
        "Explain the capital preservation mechanics: redeeming only a fraction of growth units each month so your remaining capital continues compounding.",
        "Calculate your safe monthly withdrawal amount based on a conservative 4% to 6% annual withdrawal rate to ensure lifetime capital longevity.",
        "Compare SWP monthly cash flows against traditional bank fixed deposit interest, highlighting capital growth and tax efficiency.",
        "Apply the step-by-step setup to instruct your asset manager to transfer an exact monthly rupee sum directly into your bank account on a fixed date."
      ],
      "practicalExercise": {
        "task": "Design a monthly retirement pension payout using an SWP model",
        "instruction": "Assume a retirement nest egg of NPR 60 Lakhs in an open-ended mutual fund generating an average 9% annualized return. Model a monthly SWP withdrawal of NPR 30,000 (NPR 3,60,000/year = 6% withdrawal rate). Verify that because the fund generates 9% while you withdraw 6%, your principal balance continues to grow while providing steady monthly pension."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): व्यवस्थित निकासी योजना (SWP) ले जम्मा भएको पुँजीबाट हरेक महिना बैंक खातामा स्वचालित पेन्सन कसरी उपलब्ध गराउँछ।",
        "व्याख्या गर्नुहोस् (Explain): मूलधन सुरक्षित राखी बढेको प्रतिफलको केही अंश मात्र हरेक महिना झिकेर जीवनभर आम्दानी सुनिश्चित गर्ने विधि।",
        "हिसाब गर्नुहोस् (Calculate): कुल कोषको वार्षिक ४% देखि ६% सम्म मात्र सुरक्षित निकासी दर (Safe Withdrawal Rate) तोकेर मासिक पेन्सनको हिसाब।",
        "तुलना गर्नुहोस् (Compare): बैंक मुद्दतीको ब्याजमा मात्र भर पर्नु र Mutual Fund SWP बाट मुद्रास्फीति समायोजन हुने पेन्सन पाउनु बीचको भिन्नता।",
        "लागू गर्नुहोस् (Apply): फन्ड म्यानेजरलाई निर्देशन दिएर हरेक महिनाको १ वा ५ गते तोकिएको रकम सिधै आफ्नो बैंक खातामा आउने व्यवस्था मिलाउने।"
      ],
      "practicalExercise": {
        "task": "SWP मार्फत मासिक पेन्सन योजनाको खाका बनाउनुहोस्",
        "instruction": "मानौँ अवकाश कोषमा रु. ६० लाख जम्मा भएको छ र फन्डले वार्षिक औसत ९% प्रतिफल दिन्छ। यदि तपाईंले महिनाको रु. ३०,००० (वर्षको रु. ३,६०,००० अर्थात् ६%) SWP मार्फत झिक्नुभयो भने, बाँकी रकम ३% ले वृद्धि भइरहन्छ र पेन्सन पनि निरन्तर आइरहन्छ भन्ने हिसाब प्रमाणित गर्नुहोस्।"
      }
    }
  },
  "nepal-payment-rails-nchl-connectips": {
    "en": {
      "summaryPoints": [
        "Understand the core national clearing infrastructure operated by Nepal Clearing House Limited (NCHL) and licensed by Nepal Rastra Bank.",
        "Explain the architectural differences between batch-cleared Interbank Payment System (NCHL-IPS), instant real-time retail rails (connectIPS / National Payment Interface - NPI), and large-value Real-Time Gross Settlement (RTGS).",
        "Calculate transaction processing fees across connectIPS tiers (NPR 2 to NPR 8 per transfer) versus traditional over-the-counter bank draft charges.",
        "Compare settlement speeds, daily transaction caps, and operating hours across RTGS, connectIPS, and NCHL-IPS rails.",
        "Apply direct account-to-account bank transfers via connectIPS to settle high-value bills, government tax dues, and broker collateral with zero intermediary risk."
      ],
      "practicalExercise": {
        "task": "Execute a verified interbank transfer using connectIPS and verify the settlement rail",
        "instruction": "Log into your connectIPS app or web portal. Initiate a transfer of NPR 100 to another bank account. Observe the real-time API response, check the exact transaction fee charged (e.g., NPR 2 to NPR 4), and note the transaction reference number on your bank statement."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल क्लियरिङ हाउस लिमिटेड (NCHL) ले सञ्चालन गर्ने राष्ट्रिय भुक्तानी पूर्वाधार र नेपाल राष्ट्र बैंकको नियमन।",
        "व्याख्या गर्नुहोस् (Explain): ब्याच क्लियरिङ हुने NCHL-IPS, तुरुन्तै खातामा पुग्ने connectIPS/NPI र ठूला कारोबारका लागि प्रयोग हुने RTGS बीचको भिन्नता।",
        "हिसाब गर्नुहोस् (Calculate): connectIPS मा रकम अनुसार लाग्ने न्यूनतम शुल्क (रु. २ देखि रु. ८ सम्म) र बैंकको काउन्टरमा लाग्ने खर्चको बचत।",
        "तुलना गर्नुहोस् (Compare): RTGS को तत्काल फछ्र्यौट, connectIPS को २४/७ खुद्रा भुक्तानी र NCHL-IPS को समय तालिकाको अन्तर।",
        "लागू गर्नुहोस् (Apply): सरकारी राजस्व, कर, सेयर ब्रोकर र ठूलो रकमको कारोबार विना झन्झट सिधै बैंक खाताबाट connectIPS मार्फत भुक्तानी गर्ने।"
      ],
      "practicalExercise": {
        "task": "connectIPS मार्फत अन्तर-बैंक रकमान्तर गरी शुल्क र प्रणाली जाँच्नुहोस्",
        "instruction": "आफ्नो connectIPS खाता लग-इन गर्नुहोस्। अर्को कुनै बैंक खातामा रु. १०० ट्रान्सफर गर्नुहोस्। रकम तुरुन्तै खातामा पुगेको समय, काटिएको न्यूनतम सेवा शुल्क (रु. २ देखि ४) र कारोबार नम्बर (UTR) बैंक स्टेटमेन्टमा रुजु गर्नुहोस्।"
      }
    }
  },
  "esewa-vs-khalti-vs-mobile-banking": {
    "en": {
      "summaryPoints": [
        "Understand the regulatory distinction between licensed Payment Service Providers (PSPs like eSewa, Khalti) and bank-owned mobile banking apps.",
        "Explain the stored-value wallet architecture (where user funds sit in non-interest escrow accounts) versus direct bank mobile banking (funds remain in interest-earning savings).",
        "Calculate the hidden opportunity cost of parking idle cash balances in digital wallets versus interest-bearing bank accounts over a calendar year.",
        "Compare utility bill payment cashback, movie/airline ticket promotions, transfer fees, and user experience across major payment apps in Nepal.",
        "Apply the \"Transit Wallet\" rule: keep wallet balances near zero, loading only the exact Rupee amount needed immediately before checkout."
      ],
      "practicalExercise": {
        "task": "Audit your digital wallet balances and adopt the Transit Wallet model",
        "instruction": "Open all digital wallet apps on your phone (eSewa, Khalti, IME Pay). Sum up your total idle cash balances across all wallets. If you have more than NPR 1,000 sitting idle, transfer the excess back to your interest-bearing bank account via linked bank cashout."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): इजाजतप्राप्त भुक्तानी सेवा प्रदायक (PSP जस्तै eSewa, Khalti) र बैंकका आफ्नै मोबाइल बैंकिङ एप बीचको कानुनी फरक।",
        "व्याख्या गर्नुहोस् (Explain): वालेटमा पैसा राख्दा कुनै ब्याज नपाइने (Stored Value) र बैंक खातामै पैसा रहँदा दैनिक ब्याज आर्जन हुने वास्तविकता।",
        "हिसाब गर्नुहोस् (Calculate): डिजिटल वालेटमा अनावश्यक रूपमा धेरै रकम थन्क्याएर राख्दा गुम्ने वार्षिक ब्याजको नोक्सानी।",
        "तुलना गर्नुहोस् (Compare): बिजुली, खानेपानी, हवाई टिकट काट्दा पाइने क्यासब्याक, सेवा शुल्क र प्रयोगकर्ता अनुभवको तुलना।",
        "लागू गर्नुहोस् (Apply): \"ट्रान्जिट वालेट\" नियम: वालेटमा अग्रिम पैसा नराख्ने, बिल तिर्ने बेला मात्र बैंकबाट ठिक्क चाहिने रकम लोड गर्ने बानी।"
      ],
      "practicalExercise": {
        "task": "आफ्ना सबै डिजिटल वालेटको मौज्दात अडिट गर्नुहोस्",
        "instruction": "आफ्नो मोबाइलमा रहेका eSewa, Khalti वा अन्य वालेट खोल्नुहोस्। ती सबैमा विना ब्याज थन्किएर बसेको रकम जोड्नुहोस्। यदि रु. १,००० भन्दा बढी छ भने त्यसलाई ब्याज आउने आफ्नै बैंक खातामा तुरुन्तै फिर्ता (Bank Transfer) गर्नुहोस्।"
      }
    }
  },
  "fonepay-nepalpay-qr-interoperability": {
    "en": {
      "summaryPoints": [
        "Understand how interoperable Quick Response (QR) payment standards operate under Nepal Rastra Bank’s National Payment Switch guidelines.",
        "Explain the technological competition and interoperability between private Fonepay Network (F1Soft) and the government-backed NepalPay QR (NCHL).",
        "Calculate merchant transaction costs and Merchant Discount Rates (MDR) across different merchant business categories.",
        "Compare Static QR codes (printed counter stickers prone to physical sticker swapping fraud) with Dynamic QR codes (generated per POS transaction).",
        "Apply vigilant visual verification habits: scanning recipient merchant name confirmation and checking real-time SMS/app receipts before leaving counters."
      ],
      "practicalExercise": {
        "task": "Verify QR merchant details and audit QR payment security",
        "instruction": "Next time you make a merchant QR purchase, inspect the printed QR standee for signs of physical sticker tampering. After scanning, verify that the merchant business name displayed on your phone screen matches the actual storefront name before entering your transaction PIN."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल राष्ट्र बैंकको राष्ट्रिय भुक्तानी स्विच (NPS) निर्देशिका अनुसार सञ्चालित अन्तरआवद्ध (Interoperable) QR प्रणाली।",
        "व्याख्या गर्नुहोस् (Explain): निजी क्षेत्रको फोनपे (Fonepay) नेटवर्क र NCHL को सरकारी नेपालपे (NepalPay QR) बीचको प्रविधि र सहकार्य।",
        "हिसाब गर्नुहोस् (Calculate): व्यापारीहरूले डिजिटल भुक्तानी लिँदा लाग्ने सेवा शुल्क (MDR) र नगद व्यवस्थापनको तुलनात्मक खर्च।",
        "तुलना गर्नुहोस् (Compare): पसलमा टाँसिएको स्थिर (Static QR - जसमा ठगीको जोखिम हुन्छ) र बिलिङ मेसिनबाट निस्कने गतिशील (Dynamic QR)।",
        "लागू गर्नुहोस् (Apply): QR स्क्यान गरेपछि स्क्रिनमा देखिने पसलको आधिकारिक नाम यकिन गरेर मात्र भुक्तानी पिन थिच्ने सुरक्षित बानी।"
      ],
      "practicalExercise": {
        "task": "QR भुक्तानी गर्दा सुरक्षा जाँच गर्ने अभ्यास गर्नुहोस्",
        "instruction": "अर्को पटक पसलमा QR भुक्तानी गर्दा स्ट्यान्डमा कसैले अर्को नक्कली स्टिकर टाँसेको छ कि ध्यानपूर्वक हेर्नुहोस्। स्क्यान गरेपछि एपमा देखिएको पसलको नाम र वास्तविक पसलको नाम मिलेको यकिन गरी मात्र पिन हानेर भुक्तानी गर्नुहोस्।"
      }
    }
  },
  "nrb-digital-transaction-limits-fees": {
    "en": {
      "summaryPoints": [
        "Understand the unified digital payment transaction limits mandated by Nepal Rastra Bank directives for consumer and merchant protection.",
        "Explain the statutory caps: Mobile Banking (NPR 1,00,000 to 2,00,000 per day), Internet Banking (NPR 10 Lakhs to 20 Lakhs per day), and Wallet limits (NPR 25,000 per transaction, NPR 50,000 to 1,00,000 per day).",
        "Calculate the monthly cumulative limits and maximum wallet balance ceiling (NPR 50,000 for unverified, NPR 1,00,000 for verified KYC accounts).",
        "Compare domestic interbank fee caps set by NRB (maximum NPR 8 to NPR 10 per transfer) against informal cooperative agent transfer fees.",
        "Apply advance transaction planning for large payments (real estate deposits, tax dues) to avoid sudden limit rejections."
      ],
      "practicalExercise": {
        "task": "Review your mobile banking and digital wallet daily limit caps",
        "instruction": "Log into your bank’s mobile app and navigate to Settings → Transaction Limits. Record your current Per Transaction limit, Daily limit, and Monthly limit for Fonepay, connectIPS, and wallet loads. Determine what steps your bank requires to temporarily raise limits for large one-off purchases."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): ग्राहकको सुरक्षा र जोखिम न्यूनीकरणका लागि नेपाल राष्ट्र बैंकले तोकेका डिजिटल भुक्तानीका दैनिक तथा मासिक सीमाहरू।",
        "व्याख्या गर्नुहोस् (Explain): मोबाइल बैंकिङको दैनिक सीमा (१ देखि २ लाख), इन्टरनेट बैंकिङ (१० देखि २० लाख) र वालेटको सीमा (प्रति पटक २५ हजार, दैनिक १ लाख)।",
        "हिसाब गर्नुहोस् (Calculate): KYC प्रमाणीकरण नभएको वालेटमा अधिकतम रु. २५,००० र प्रमाणित खातामा रु. १,००,००० सम्म मात्र मौज्दात राख्न पाइने नियम।",
        "तुलना गर्नुहोस् (Compare): राष्ट्र बैंकले तोकेको सस्तो डिजिटल ट्रान्सफर शुल्क (अधिकतम रु. ८ देखि १०) र एजेन्टहरूले लिने महँगो अनौपचारिक कमिसन।",
        "लागू गर्नुहोस् (Apply): ठूलो रकम (जस्तै जग्गाको बैना वा भ्याट) तिर्नुअघि दैनिक सीमाले गर्दा कारोबार नरोकिओस् भनेर पूर्व-तयारी गर्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो मोबाइल बैंकिङको कारोबार सीमा (Transaction Limits) हेर्नुहोस्",
        "instruction": "आफ्नो बैंक एपको सेटिङभित्र Transaction Limits मेनुमा जानुहोस्। त्यहाँ प्रति कारोबार, दैनिक र मासिक सीमा कति तोकिएको छ टिप्नुहोस्। भविष्यमा ठूलो कारोबार गर्नुपरेमा शाखा वा अनलाइनबाट सीमा कसरी बढाउन सकिन्छ बुझ्नुहोस्।"
      }
    }
  },
  "otp-scams-phishing-defense-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the psychological manipulation tactics (social engineering, false urgency, fear of account freeze) used by financial fraudsters in Nepal.",
        "Explain the golden security rule: No legitimate commercial bank, eSewa, Khalti, or NRB official will EVER request your One-Time Password (OTP), MPIN, or password.",
        "Calculate the devastating financial vulnerability of recycling identical passwords across email, banking apps, and social media platforms.",
        "Compare sophisticated social media impersonation scams (fake Dashain lotteries, overseas remittance verification calls) with crude SMS phishing links.",
        "Apply immediate containment protocols if compromised: changing MPINs within seconds, toggling biometric locks, and calling bank hotlines to freeze accounts."
      ],
      "practicalExercise": {
        "task": "Conduct a personal digital banking security audit and enable two-factor authentication",
        "instruction": "Audit your primary mobile banking and wallet setups. Ensure that transaction SMS alerts are active. Verify that you have biometric (fingerprint/Face ID) login enabled. Write down your bank’s emergency card/account freezing hotline number in your phone contacts."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालमा ठगहरूले चिठ्ठा परेको, बैंक खाता बन्द हुने वा पार्सल आएको भन्दै फैलाउने मनोवैज्ञानिक भ्रम र जालसाजी।",
        "व्याख्या गर्नुहोस् (Explain): डिजिटल सुरक्षाको अकाट्य नियम: कुनै पनि बैंक, eSewa, Khalti वा प्रहरीले कहिल्यै पनि तपाईंको OTP वा पासवर्ड माग्दैन।",
        "हिसाब गर्नुहोस् (Calculate): एउटै पासवर्ड सबैतिर (फेसबुक, इमेल, मोबाइल बैंकिङ) राख्दा एउटा ह्याक हुँदा सम्पूर्ण वित्तीय खातामा हुने जोखिम।",
        "तुलना गर्नुहोस् (Compare): इमो/ह्वाट्सएपबाट आउने नक्कली लटरी कल र म्यासेजमा पठाइने नक्कली बैंक लिङ्क (Phishing) पहिचान गर्ने तरिका।",
        "लागू गर्नुहोस् (Apply): यदि झुक्किएर OTP कसैलाई दिइहालेमा तुरुन्तै १ मिनेटभित्र बैंकिङ एपको MPIN बदल्ने र बैंकमा फोन गरेर खाता रोक्का गर्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो मोबाइल बैंकिङको सुरक्षा अडिट गर्नुहोस्",
        "instruction": "आफ्नो मोबाइल बैंकिङ र वालेटको पासवर्ड समीक्षा गर्नुहोस्। बायोमेट्रिक (Fingerprint/Face ID) लग-इन सक्रिय गर्नुहोस्। आपतकालीन अवस्थामा खाता तुरुन्तै रोक्का गर्न आफ्ना बैंकहरूको कार्ड तथा डिजिटल बैंकिङ हेल्पलाइन नम्बर मोबाइलमा सेभ गर्नुहोस्।"
      }
    }
  },
  "reporting-digital-financial-fraud-nepal-police": {
    "en": {
      "summaryPoints": [
        "Understand the jurisdictional powers and formal legal workflow of the Nepal Police Cyber Bureau (Kathmandu/Bhotahiti) and Central Investigation Bureau (CIB).",
        "Explain the crucial first 60 minutes (\"Golden Hour\") following fraud: contacting bank nodal officers to freeze recipient transit accounts before cash is withdrawn at ATMs.",
        "Calculate the timeline for evidence preservation: capturing unedited transaction IDs, bank statements, call logs, WhatsApp chat exports, and fake payment screenshots.",
        "Compare the administrative grievance channels of Nepal Rastra Bank’s Financial Consumer Protection Department with formal police FIR criminal filings.",
        "Apply the step-by-step reporting procedure: bank account freeze → online Cyber Bureau complaint filing → physical FIR submission at the nearest district police office."
      ],
      "practicalExercise": {
        "task": "Prepare a digital fraud emergency incident response checklist",
        "instruction": "Create an emergency card on your phone containing: 1) The direct 24/7 hotline numbers of the Nepal Police Cyber Bureau (01-4219044 / cyberbureau@nepalpolice.gov.np); 2) Your primary bank’s dispute resolution email and fraud desk phone; 3) A pre-saved note template listing required incident details (time, amount, recipient bank/wallet ID, transaction reference)."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): अनलाइन ठगी हुँदा अनुसन्धान गर्ने नेपाल प्रहरीको साइबर ब्युरो (भोटाहिटी) र केन्द्रीय अनुसन्धान ब्युरो (CIB) को क्षेत्राधिकार।",
        "व्याख्या गर्नुहोस् (Explain): ठगी भएको सुरुवाती ६० मिनेट (Golden Hour): ठगले ATM बाट पैसा झिक्नुअघि नै बैंकलाई खबर गरी खाता रोक्का गराउने महत्त्व।",
        "हिसाब गर्नुहोस् (Calculate): प्रमाण जुटाउने विधि: कारोबार भएको Reference ID, बैंक स्टेटमेन्ट, फोन कल रेकर्ड र च्याटका स्क्रिनसटहरू सुरक्षित राख्ने।",
        "तुलना गर्नुहोस् (Compare): नेपाल राष्ट्र बैंकको वित्तीय ग्राहक संरक्षण महाशाखामा गरिने उजुरी र नेपाल प्रहरीमा दर्ता हुने फौजदारी जाहेरी (FIR) को भिन्नता।",
        "लागू गर्नुहोस् (Apply): ठगी भएमा तुरुन्तै: १) बैंक खाता रोक्का → २) साइबर ब्युरोमा अनलाइन उजुरी → ३) जिल्ला प्रहरी कार्यालयमा औपचारिक जाहेरी दिने प्रक्रिया।"
      ],
      "practicalExercise": {
        "task": "आपतकालीन साइबर अपराध रिपोर्टिङ सम्पर्क सूची तयार गर्नुहोस्",
        "instruction": "आफ्नो मोबाइलमा एउटा सुरक्षित नोट बनाउनुहोस् जसमा: १) नेपाल प्रहरी साइबर ब्युरोको फोन (०१-४२१९०४४) र इमेल, २) आफ्नो बैंकको Dispute/Fraud शाखाको फोन नम्बर, र ३) ठगी भइहालेमा तुरुन्तै टिप्नुपर्ने विवरणको ढाँचा सुरक्षित राख्नुहोस्।"
      }
    }
  },
  "sole-proprietorship-vs-pvt-ltd-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the core legal distinctions between an unincorporated Sole Proprietorship registered at the Department of Commerce/Ward and a Private Limited Company incorporated under the Companies Act 2063.",
        "Explain the critical concept of Limited Liability: protecting personal assets, family homes, and land from corporate creditors, vendor lawsuits, or commercial insolvency.",
        "Calculate your tax liability difference: Individual personal income tax slabs (up to 36% to 39%) versus the flat 25% corporate tax rate applicable to Pvt Ltd companies.",
        "Compare annual administrative compliance costs: basic municipal renewal for proprietorships versus mandatory annual audits, AGM minutes, and OCR filings for Pvt Ltds.",
        "Apply criteria (risk exposure, equity investment needs, co-founder structure) to select the optimal business vehicle in Nepal."
      ],
      "practicalExercise": {
        "task": "Evaluate whether your business or freelancing venture requires a Pvt Ltd incorporation",
        "instruction": "Assess your business on 3 factors: 1) Liability risk (could a vendor, client, or employee lawsuit seize your personal home?); 2) Annual profits (are profits exceeding NPR 20 Lakhs where the flat 25% corporate rate beats personal progressive slabs?); 3) Co-founder equity needs. Determine whether incorporation is legally and financially justified."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): घरेलु/वाणिज्य कार्यालय वा वडामा दर्ता हुने एकलौटी फर्म र कम्पनी रजिष्ट्रारको कार्यालयमा दर्ता हुने प्राइभेट लिमिटेड बीचको भिन्नता।",
        "व्याख्या गर्नुहोस् (Explain): सीमित दायित्व (Limited Liability) को सिद्धान्त: व्यवसाय डुबेमा वा ऋण लागेमा व्यक्तिगत घरजग्गा र सम्पत्ति कसरी जोगिन्छ।",
        "हिसाब गर्नुहोस् (Calculate): व्यक्तिगत आयकरको प्रगतिशील स्ल्याब (३६%-३९% सम्म) र कम्पनीलाई लाग्ने २५% को स्थिर संस्थागत आयकर (Corporate Tax) को फरक।",
        "तुलना गर्नुहोस् (Compare): एकलौटी फर्मको सामान्य वार्षिक नवीकरण र कम्पनीको अनिवार्य वार्षिक अडिट, साधारण सभा (AGM) र OCR मा विवरण बुझाउने झन्झट।",
        "लागू गर्नुहोस् (Apply): आफ्नो व्यवसायको जोखिम, साझेदारको आवश्यकता र भविष्यको विस्तार योजना हेरेर उपयुक्त संरचना छनोट गर्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो व्यवसायका लागि एकलौटी फर्म कि प्राइभेट लिमिटेड उपयुक्त हुन्छ विश्लेषण गर्नुहोस्",
        "instruction": "आफ्नो कामलाई ३ कोणबाट हेर्नुहोस्: १) ऋण वा कानुनी झमेला हुँदा व्यक्तिगत सम्पत्ति जोखिममा पर्छ कि पर्दैन? २) वार्षिक नाफा २० लाखभन्दा बढी भएर २५% कम्पनी कर सस्तो पर्छ कि? ३) भविष्यमा लगानीकर्ता भित्र्याउनुपर्छ कि पर्दैन? उपयुक्त संरचना छान्नुहोस्।"
      }
    }
  },
  "company-registration-ocr-step-by-step": {
    "en": {
      "summaryPoints": [
        "Understand the complete digital incorporation workflow administered by the Office of the Company Registrar (OCR) under the Ministry of Industry.",
        "Explain the sequential regulatory stages: online name reservation approval, drafting the Memorandum of Association (MOA - Prabandhapatra) and Articles of Association (AOA - Niyamawali).",
        "Calculate statutory government registration fees based on authorized share capital brackets (e.g., NPR 1,000 for capital up to NPR 10 Lakhs).",
        "Compare self-directed online registration via ocr.gov.np with hiring chartered accountants or corporate legal counsel.",
        "Apply post-incorporation statutory mandates: obtaining corporate PAN at IRD, Ward business registration, opening bank current accounts, and capital injection verification."
      ],
      "practicalExercise": {
        "task": "Simulate a company name reservation on the official OCR portal",
        "instruction": "Visit the official OCR web portal (ocr.gov.np). Navigate to the Online Company Registration system. Perform a company name search to verify if your desired business name is legally unique, non-infringing, and compliant with OCR naming guidelines."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): उद्योग मन्त्रालय मातहतको कम्पनी रजिष्ट्रारको कार्यालय (OCR) को अनलाइन प्रणालीबाट कम्पनी दर्ता गर्ने पूर्ण प्रक्रिया।",
        "व्याख्या गर्नुहोस् (Explain): कम्पनीको नाम स्वीकृत गराउने, प्रबन्धपत्र (MOA) र नियमावली (AOA) तयार पार्ने र डिजिटल हस्ताक्षर बुझाउने चरणहरू।",
        "हिसाब गर्नुहोस् (Calculate): अधिकृत पुँजी (Authorized Capital) अनुसार लाग्ने सरकारी दर्ता दस्तुर (रु. १० लाखसम्म पुँजी भएमा रु. १,००० मात्र)।",
        "तुलना गर्नुहोस् (Compare): आफै ocr.gov.np बाट अनलाइन दर्ता गर्दा जोगिने खर्च र लेखापरीक्षक वा वकिलमार्फत गराउँदा लाग्ने व्यावसायिक परामर्श शुल्क।",
        "लागू गर्नुहोस् (Apply): कम्पनी दर्ता प्रमाणपत्र पाएपछि गर्नुपर्ने काम: आन्तरिक राजस्व कार्यालयबाट व्यावसायिक PAN लिने, वडा दर्ता गर्ने र बैंकमा चल्ती खाता खोल्ने।"
      ],
      "practicalExercise": {
        "task": "कम्पनी रजिष्ट्रारको पोर्टलमा कम्पनीको नाम उपलब्ध छ कि छैन जाँच्नुहोस्",
        "instruction": "कम्पनी रजिष्ट्रारको वेबसाइट (ocr.gov.np) मा जानुहोस्। Name Reservation सेक्सनमा आफूले सोचेको कम्पनीको नाम नेपाली र अंग्रेजीमा टाइप गरी खोजी गर्नुहोस्। सो नाम अरू कसैसँग जुधेको छ कि छैन र स्वीकृति पाउन योग्य छ कि छैन परीक्षण गर्नुहोस्।"
      }
    }
  },
  "pan-vs-vat-thresholds-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the legal thresholds mandated by the Value Added Tax (VAT) Act 2052 for compulsory business registration in Nepal.",
        "Explain the annual turnover boundaries: NPR 50 Lakhs for goods trading, NPR 20 Lakhs for services/consulting, and NPR 30 Lakhs for mixed businesses.",
        "Calculate statutory penalties under Section 29 of the VAT Act for operating beyond turnover thresholds without formal VAT registration.",
        "Compare operating under simple Business PAN (turnover tax / presumptive tax) with mandatory VAT collection and monthly 13% output-input tax reconciliation.",
        "Apply quarterly and monthly turnover monitoring routines to transition your business to VAT registration before crossing statutory limits."
      ],
      "practicalExercise": {
        "task": "Calculate your trailing 12-month turnover against VAT registration thresholds",
        "instruction": "Add up your total gross business invoicing across the last 12 calendar months. Compare this total against the legal limits: NPR 50 Lakhs (if selling goods) or NPR 20 Lakhs (if providing services/consultancy). If your turnover is approaching 80% of the threshold, prepare your accounting systems for mandatory VAT registration."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): मूल्य अभिवृद्धि कर (VAT) ऐन २०५२ अनुसार व्यवसायलाई भ्याटमा दर्ता गराउनुपर्ने अनिवार्य कानुनी सीमाहरू।",
        "व्याख्या गर्नुहोस् (Explain): वार्षिक कारोबार सीमा: वस्तुको व्यापारमा रु. ५० लाख, सेवा तथा परामर्श व्यवसायमा रु. २० लाख र मिश्रित कारोबारमा रु. ३० लाख।",
        "हिसाब गर्नुहोस् (Calculate): सीमा नाघ्दा पनि भ्याटमा दर्ता नभई कारोबार गरेमा लाग्ने शतप्रतिशत जरिवाना, ब्याज र कानुनी कारबाहीको हिसाब।",
        "तुलना गर्नुहोस् (Compare): सामान्य PAN मा कारोबार गर्दा तिर्नुपर्ने वार्षिक कारोबार कर र भ्याटमा दर्ता भएपछि ग्राहकबाट १३% कर उठाई दाखिला गर्ने नियम।",
        "लागू गर्नुहोस् (Apply): हरेक महिना आफ्नो कुल बिक्री (Turnover) ट्र्याक गर्ने र सीमा नजिक पुग्नासाथ आन्तरिक राजस्व कार्यालयमा गई भ्याट नम्बर लिने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो पछिल्लो १२ महिनाको कारोबार जोडेर VAT सीमा जाँच्नुहोस्",
        "instruction": "आफ्नो व्यवसायको पछिल्लो १२ महिनाको कुल बिक्री बिल जोड्नुहोस्। यदि सेवा व्यवसाय हो भने रु. २० लाख र वस्तुको व्यापार भए रु. ५० लाखको सीमासँग तुलना गर्नुहोस्। यदि सीमाको नजिक पुग्नुभएको छ भने तुरुन्तै भ्याट दर्ताको तयारी गर्नुहोस्।"
      }
    }
  },
  "vendor-tds-withholding-audit-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the legal obligation of businesses to act as withholding tax agents for the government under Chapter 17 of the Income Tax Act.",
        "Explain statutory vendor withholding rates: 1.5% on VAT invoices for goods, 15% on non-VAT service/consultancy bills, and 10% on rental agreements.",
        "Calculate your business withholding liabilities and learn how to generate E-TDS vouchers on the IRD portal.",
        "Compare the legal consequences of failing to withhold vendor TDS: expense disallowance during corporate tax audits plus 15% annual statutory interest penalty.",
        "Apply a monthly tax calendar rule: depositing all withheld TDS into the government treasury within the 25th day of the following Nepali calendar month."
      ],
      "practicalExercise": {
        "task": "Audit a sample vendor bill and compute the exact TDS withholding amount",
        "instruction": "Take a sample vendor invoice for consulting services of NPR 1,00,000 (non-VAT). Calculate the 15% TDS withholding (NPR 15,000). Issue a net payment voucher of NPR 85,000 to the vendor. Draft the E-TDS deposit voucher to be uploaded to the IRD portal before the 25th of the following month."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): आयकर ऐनको परिच्छेद १७ अनुसार सामान वा सेवा किन्दा विक्रेताको भुक्तानीबाट स्रोतमा कर कट्टी (TDS) गर्ने कानुनी दायित्व।",
        "व्याख्या गर्नुहोस् (Explain): भ्याट बिलमा सामान खरिद गर्दा १.५%, पान बिलमा सेवा लिँदा १५% र घरभाडामा १०% TDS कट्टा गर्नुपर्ने दरहरू।",
        "हिसाब गर्नुहोस् (Calculate): विक्रेतालाई भुक्तानी दिँदा TDS कटाएर दिनुपर्ने खुद रकम र IRD को पोर्टलमा E-TDS भौचर सिर्जना गर्ने विधि।",
        "तुलना गर्नुहोस् (Compare): समयमै TDS नकाट्दा वा दाखिला नगर्दा अडिटमा सो खर्च अमान्य हुने (Disallowance) र लाग्ने वार्षिक १५% ब्याज जरिवाना।",
        "लागू गर्नुहोस् (Apply): हरेक महिना काटेको TDS अर्को महिनाको २५ गतेभित्र अनलाइन E-TDS दाखिला गरी सरकारी खातामा जम्मा गर्ने नियम।"
      ],
      "practicalExercise": {
        "task": "कुनै एक बिलको TDS कट्टी र खुद भुक्तानी हिसाब गर्नुहोस्",
        "instruction": "मानौँ तपाईंको कम्पनीले कुनै विज्ञबाट रु. ५०,००० को परामर्श सेवा लियो (पान बिल)। त्यसमा १५% का दरले रु. ७,५०० TDS कट्टा गर्नुहोस्। विज्ञलाई रु. ४२,५०० भुक्तानी दिनुहोस् र बाँकी रु. ७,५०० अर्को महिनाको २५ गतेभित्र IRD मा E-TDS दाखिला गर्ने चेकलिस्ट बनाउनुहोस्।"
      }
    }
  },
  "annual-roc-filing-agm-minutes-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the annual compliance deadlines enforced by the Office of the Company Registrar (OCR) under Chapter 51 of the Companies Act 2063.",
        "Explain the mandatory annual document filings: D-01 (Audited Balance Sheet and Profit & Loss), AGM Minutes, Shareholder Register (Share Lapsi), and Auditor Appointment.",
        "Calculate the escalating monthly fine structure under Section 81 of the Companies Act for delayed submissions past the Poush end deadline.",
        "Compare basic dormant company filings with active operational company compliance filings.",
        "Apply an annual corporate governance calendar to ensure auditors are appointed at the AGM and all digital filings are completed before Poush 30."
      ],
      "practicalExercise": {
        "task": "Construct an Annual OCR Compliance Calendar for a Private Limited Company",
        "instruction": "Map out the 4 statutory milestones for a fiscal year: 1) Appoint a registered auditor at the previous AGM; 2) Finalize audited financial statements by Ashwin 30; 3) Convene the Annual General Meeting (AGM) within 6 months of fiscal year close (Poush end); 4) Upload the signed D-01 and AGM minutes to ocr.gov.np before Poush 30."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): कम्पनी ऐन २०६३ को दफा ५१ अनुसार हरेक वर्ष कम्पनी रजिष्ट्रारको कार्यालयमा वार्षिक विवरण बुझाउने कानुनी म्याद।",
        "व्याख्या गर्नुहोस् (Explain): लेखापरीक्षण प्रतिवेदन (D-01), साधारण सभा (AGM) को माइन्युट, सेयर लगत र लेखापरीक्षक नियुक्तिको विवरण।",
        "हिसाब गर्नुहोस् (Calculate): पुस मसान्तभित्र विवरण नबुझाउँदा दफा ८१ बमोजिम अधिकृत पुँजी अनुसार महिनाकै हजारौँ रुपैयाँ लाग्ने जरिवानाको हिसाब।",
        "तुलना गर्नुहोस् (Compare): कारोबार नभएको सुतेको (Dormant) कम्पनीले बुझाउने सामान्य विवरण र नियमित कारोबार गर्ने कम्पनीको अडिट प्रतिवेदन।",
        "लागू गर्नुहोस् (Apply): हरेक वर्ष पुस मसान्तअघि नै वार्षिक साधारण सभा सम्पन्न गरी सबै माइन्युट र वित्तीय विवरण ocr.gov.np मा अनलाइन अपलोड गर्ने।"
      ],
      "practicalExercise": {
        "task": "कम्पनीको वार्षिक OCR अनुपालन चेकलिस्ट तयार गर्नुहोस्",
        "instruction": "कम्पनीको वार्षिक ४ वटा मुख्य कामको तालिका बनाउनुहोस्: १) असोज मसान्तभित्र अडिट रिपोर्ट तयार पार्ने, २) पुस मसान्तभित्र वार्षिक साधारण सभा (AGM) डाक्ने, ३) माइन्युटमा निर्णय प्रमाणित गर्ने, र ४) पुस ३० भित्र OCR पोर्टलमा D-01 र सेयर लगत अपलोड गर्ने।"
      }
    }
  },
  "hiring-ssf-labor-act-nepal": {
    "en": {
      "summaryPoints": [
        "Understand employer and employee statutory obligations under the Labor Act 2074 and the Social Security Act 2074 in Nepal.",
        "Explain the mandatory 31% Social Security Fund (SSF) contribution split: 20% employer contribution plus 11% employee deduction from basic salary.",
        "Calculate employee take-home pay after SSF deductions, basic salary versus allowance allocations, and statutory gratuity/provident fund transfers.",
        "Compare the legal risks of informal cash employment versus formal registered employment with appointment letters and SSF enrollment.",
        "Apply the SSF employer portal workflow to register new hires, upload monthly payroll contribution files, and generate submission connectIPS challans."
      ],
      "practicalExercise": {
        "task": "Calculate the total cost to company (CTC) and net take-home pay for an employee under SSF",
        "instruction": "Take an employee with a gross salary of NPR 40,000 (Basic Salary: NPR 24,000, Allowances: NPR 16,000). Calculate the employer’s 20% SSF contribution on basic (NPR 4,800) to find the Total CTC (NPR 44,800). Calculate the employee’s 11% SSF deduction (NPR 2,640) to find the net pay before income tax."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): श्रम ऐन २०७४ र योगदानमा आधारित सामाजिक सुरक्षा ऐन २०७४ अनुसार रोजगारदाता र श्रमिकका कानुनी दायित्वहरू।",
        "व्याख्या गर्नुहोस् (Explain): आधारभूत तलबमा ३१% सामाजिक सुरक्षा कोष (SSF) योगदानको विभाजन: २०% रोजगारदाताले थप्ने र ११% कर्मचारीको तलबबाट काटिने।",
        "हिसाब गर्नुहोस् (Calculate): आधारभूत तलब (Basic Salary) निर्धारण गरी कर्मचारीको हातमा पर्ने खुद तलब र रोजगारदाताको कुल लागत (CTC) को हिसाब।",
        "तुलना गर्नुहोस् (Compare): अनौपचारिक नगदमा काम लगाउँदा हुने श्रम अदालतको कानुनी कारबाही र SSF मा सूचीकृत गर्दा रोजगारदाताले पाउने दुर्घटना दायित्वबाट मुक्ति।",
        "लागू गर्नुहोस् (Apply): नयाँ कर्मचारी भर्ना गर्दा नियुक्ति पत्र दिने, SSF पोर्टलमा दर्ता गर्ने र हरेक महिना connectIPS मार्फत योगदान जम्मा गर्ने।"
      ],
      "practicalExercise": {
        "task": "कर्मचारीको ३१% SSF योगदान र हातमा पर्ने तलब हिसाब गर्नुहोस्",
        "instruction": "मानौँ एक कर्मचारीको मासिक कुल तलब रु. ४०,००० छ (आधारभूत तलब ६०% अर्थात् रु. २४,०००)। रोजगारदाताले २०% (रु. ४,८००) थपिदिनुपर्छ र कर्मचारीको तलबबाट ११% (रु. २,६४०) काटिन्छ। रोजगारदाताको कुल लागत रु. ४४,८०० र कर्मचारीको खुद तलब हिसाब गर्नुहोस्।"
      }
    }
  },
  "nrb-monetary-policy-explained-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the core objectives of Nepal Rastra Bank’s annual and quarterly Monetary Policy: maintaining price stability, external sector balance, and financial system liquidity.",
        "Explain the primary policy instruments: Cash Reserve Ratio (CRR), Statutory Liquidity Ratio (SLR), Policy Repo Rate, and Standing Liquidity Facility (SLF).",
        "Calculate how changes in policy rates directly influence commercial bank Base Rates, fixed deposit yields, and mortgage interest rates.",
        "Compare an expansionary (accommodative) monetary policy aimed at stimulating economic growth with a contractionary policy aimed at curbing runaway inflation.",
        "Apply macroeconomic insights to anticipate interest rate cycles and optimize the timing of large borrowing or fixed-income investments."
      ],
      "practicalExercise": {
        "task": "Analyze the latest NRB Monetary Policy stance and forecast interest rate directions",
        "instruction": "Review the executive summary of the latest NRB Monetary Policy or quarterly review. Check the current CRR (typically 4%), SLR (10% to 12%), and Policy Rate. If policy rates were lowered, project a downward trajectory for bank base rates over the next 6 months to guide your borrowing decisions."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल राष्ट्र बैंकले हरेक वर्ष सार्वजनिक गर्ने मौद्रिक नीति (Monetary Policy) का मुख्य उद्देश्य: मूल्य स्थिरता, बाह्य क्षेत्र सन्तुलन र तरलता व्यवस्थापन।",
        "व्याख्या गर्नुहोस् (Explain): मौद्रिक औजारहरू: अनिवार्य नगद अनुपात (CRR), वैधानिक तरलता अनुपात (SLR), नीतिगत दर (Policy Rate) र रिपो/रिभर्स रिपोको अर्थ।",
        "हिसाब गर्नुहोस् (Calculate): राष्ट्र बैंकले नीतिगत दर १% ले घटाउँदा वा बढाउँदा बैंकहरूको Base Rate र घर कर्जाको ब्याजमा पर्ने प्रत्यक्ष असर।",
        "तुलना गर्नुहोस् (Compare): बजारमा पैसा पठाउने खुकुलो (Expansionary) मौद्रिक नीति र महँगी नियन्त्रण गर्न पैसा खिच्ने कसिलो (Contractionary) नीति बीचको फरक।",
        "लागू गर्नुहोस् (Apply): मौद्रिक नीतिको समीक्षा हेरेर बैंकको ब्याजदर बढ्छ कि घट्छ भन्ने अनुमान गरी कर्जा लिने वा मुद्दती राख्ने समय तय गर्ने।"
      ],
      "practicalExercise": {
        "task": "पछिल्लो मौद्रिक नीतिका मुख्य औजारहरूको प्रभाव विश्लेषण गर्नुहोस्",
        "instruction": "नेपाल राष्ट्र बैंकको वेबसाइटबाट पछिल्लो मौद्रिक नीति वा त्रैमासिक समीक्षाको सार हेर्नुहोस्। हालको CRR (४%), SLR (१०-१२%) र नीतिगत दर कति छ टिप्नुहोस्। नीतिगत दर घटाइएको छ भने आउँदा महिनाहरूमा बैंकको कर्जाको ब्याज सस्तो हुने संकेत बुझ्नुहोस्।"
      }
    }
  },
  "cd-ratio-liquidity-crisis-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the Credit-to-Deposit (CD) Ratio regulatory ceiling (strictly set at 90% by NRB) that dictates bank lending capacity in Nepal.",
        "Explain why rapid loan disbursement without commensurate local deposit mobilization triggers severe banking liquidity crunches and interest rate spikes.",
        "Calculate a bank’s available loanable funds based on its total domestic deposit base and prevailing CD ratio.",
        "Compare the modern 90% CD Ratio framework with the abolished CCD Ratio (Credit-to-Core-Capital-cum-Deposit) system.",
        "Apply CD ratio tracking to anticipate when banks will freeze retail lending or aggressively bid up fixed deposit interest rates."
      ],
      "practicalExercise": {
        "task": "Calculate a commercial bank’s remaining lending headroom from its CD Ratio",
        "instruction": "Take a bank with total deposits of NPR 200 Billion and total loans of NPR 176 Billion. Calculate its current CD Ratio: (176 / 200) × 100 = 88%. Since the NRB maximum is 90%, calculate the remaining loanable funds: (90% of 200 Billion = 180 Billion) minus 176 Billion = NPR 4 Billion in remaining lending capacity."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल राष्ट्र बैंकले वाणिज्य बैंकहरूका लागि तोकेको ९०% को कर्जा-निक्षेप अनुपात (CD Ratio) र यसको महत्त्व।",
        "व्याख्या गर्नुहोस् (Explain): निक्षेप नबढी जथाभावी कर्जा प्रवाह गर्दा बैंकमा लगानीयोग्य रकम (तरलता) को संकट किन उत्पन्न हुन्छ।",
        "हिसाब गर्नुहोस् (Calculate): बैंकको कुल निक्षेपको आधारमा ९०% को सीमाभित्र रहेर थप कति रकम कर्जा प्रवाह गर्न मिल्छ भन्ने हिसाब।",
        "तुलना गर्नुहोस् (Compare): हालको ९०% CD Ratio प्रणाली र पहिलेको पुँजी समेत जोडेर हिसाब गरिने CCD Ratio बीचको प्राविधिक भिन्नता।",
        "लागू गर्नुहोस् (Apply): समग्र बैंकिङ प्रणालीको औसत CD Ratio ९०% नजिक पुग्दा ब्याजदर बढ्ने र कर्जा रोकिने पूर्व-अनुमान गरी योजना बनाउने।"
      ],
      "practicalExercise": {
        "task": "कुनै बैंकको CD Ratio र बाँकी कर्जा दिने क्षमता हिसाब गर्नुहोस्",
        "instruction": "मानौँ कुनै बैंकको कुल निक्षेप रु. २ खर्ब र कुल कर्जा रु. १ खर्ब ७६ अर्ब छ। CD Ratio = (१७६ / २००) × १०० = ८८% हुन्छ। राष्ट्र बैंकको अधिकतम ९०% सीमा अनुसार बैंकले अझै रु. ४ अर्ब मात्र थप कर्जा दिन सक्छ। यदि निक्षेप बढेन भने बैंकले नयाँ कर्जा रोक्ने अवस्था बुझ्नुहोस्।"
      }
    }
  },
  "remittance-nepal-economic-lifeline": {
    "en": {
      "summaryPoints": [
        "Understand the macroeconomic scale of formal worker remittances, accounting for nearly 25% to 30% of Nepal’s annual Gross Domestic Product (GDP).",
        "Explain how inbound remittances finance Nepal’s massive merchandise trade deficit and stabilize gross foreign exchange reserves at Nepal Rastra Bank.",
        "Calculate the economic leakage of informal Hundi transfers (loss of legal forex, risk of seizure under Foreign Exchange Act 2019) versus official banking channels.",
        "Compare productive wealth creation (channelling remittances into productive assets, SIPs, business equity) versus inflationary consumption.",
        "Apply the special 1% extra interest bonus mandated by NRB for formal remittance savings and fixed deposits in commercial banks."
      ],
      "practicalExercise": {
        "task": "Calculate the return advantage of legal banking remittances over informal channels",
        "instruction": "Compare sending NPR 2,00,000 through official banking channels that offer an extra 1% NRB-mandated interest rate on remittance fixed deposits, plus access to the 10% reserved IPO quota for foreign-employed Nepalis. Calculate the long-term wealth difference compared to the legal risks and zero asset accumulation of informal Hundi."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालको कुल गार्हस्थ उत्पादन (GDP) को झन्डै २५% देखि ३०% हिस्सा ओगट्ने वैदेशिक विप्रेषण (Remittance) को आर्थिक महत्त्व।",
        "व्याख्या गर्नुहोस् (Explain): रेमिट्यान्सले कसरी देशको विशाल व्यापार घाटा धान्न र राष्ट्र बैंकको विदेशी मुद्रा सञ्चिति सुरक्षित राख्न मद्दत गर्छ।",
        "हिसाब गर्नुहोस् (Calculate): गैरकानुनी हुण्डी (Hundi) मार्फत पैसा पठाउँदा हुने जोखिम, जफत हुने सम्भावना र कानुनी बैंकिङ माध्यमबाट पठाउँदा हुने लाभ।",
        "तुलना गर्नुहोस् (Compare): रेमिट्यान्सलाई विलासिताको उपभोगमा खर्च गर्नु र उत्पादनशील क्षेत्र, सेयर, र Mutual Fund SIP मा लगानी गरी दीर्घकालीन सम्पत्ति बनाउनु।",
        "लागू गर्नुहोस् (Apply): वैदेशिक रोजगारीमा रहेका नेपालीका लागि राष्ट्र बैंकले बैंक मुद्दतीमा दिने थप १% ब्याज र IPO मा छुट्याइएको १०% कोटाको फाइदा लिने।"
      ],
      "practicalExercise": {
        "task": "वैधानिक रेमिट्यान्स बचतको थप प्रतिफल हिसाब गर्नुहोस्",
        "instruction": "नेपालका वाणिज्य बैंकहरूले रेमिट्यान्स बचत तथा मुद्दती खातामा साधारण निक्षेपभन्दा १% बढी ब्याज दिन्छन्। साथै प्राथमिक सेयर (IPO) मा १०% सुरक्षित आरक्षण कोटा पाइन्छ। रु. २ लाख पठाउँदा अतिरिक्त ब्याज र IPO कोटाबाट हुने वास्तविक फाइदा हिसाब गर्नुहोस्।"
      }
    }
  },
  "inr-npr-currency-peg-inflation": {
    "en": {
      "summaryPoints": [
        "Understand the fixed exchange rate peg regime between the Nepali Rupee (NPR) and Indian Rupee (INR) established at 1 INR = 1.60 NPR.",
        "Explain how the fixed currency peg anchors macroeconomic stability with Nepal’s largest trading partner while importing Reserve Bank of India (RBI) inflation dynamics.",
        "Calculate cross-border price parity and evaluate how exchange rate stability impacts essential imports (petroleum, food, medicine, steel).",
        "Compare the benefits of currency certainty for cross-border commerce against the surrender of independent monetary policy autonomy.",
        "Apply domestic purchasing power awareness when evaluating imported goods and planning long-term investments in Nepal."
      ],
      "practicalExercise": {
        "task": "Calculate the landed NPR cost of imported goods based on the 1.60 currency peg",
        "instruction": "Take a manufactured product priced at INR 10,000 in India. Apply the official currency peg (× 1.60) to find the base NPR value (NPR 16,000). Add estimated Nepal customs tariff (e.g., 15%) and 13% VAT to understand how imported inflation directly influences domestic retail consumer prices."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाली रुपैयाँ (NPR) र भारतीय रुपैयाँ (INR) बीचको स्थिर विनिमय दर (१ भारु = १.६० नेरु) को कानुनी र आर्थिक पृष्ठभूमि।",
        "व्याख्या गर्नुहोस् (Explain): स्थिर दरले भारतसँगको व्यापारमा स्थिरता दिए पनि भारतमा हुने मूल्यवृद्धिको असर नेपालमा कसरी आयातित महँगीका रूपमा भित्रिन्छ।",
        "हिसाब गर्नुहोस् (Calculate): भारतबाट आयात हुने पेट्रोलियम पदार्थ, खाद्यान्न र औषधिको भारतीय मूल्यलाई १.६० ले गुणन गरी नेपाली मूल्यको हिसाब।",
        "तुलना गर्नुहोस् (Compare): स्थिर विनिमय दरले दिने आर्थिक अनुशासन र बजार अनुसार मूल्य छाड्दा (Floating Rate) हुन सक्ने तीव्र मुद्रा अवमूल्यनको जोखिम।",
        "लागू गर्नुहोस् (Apply): भारतीय बजारमा मूल्य बढ्दा नेपालमा कुन-कुन उपभोग्य वस्तुको भाउ बढ्छ भन्ने पूर्वानुमान गरी व्यक्तिगत खर्च व्यवस्थापन गर्ने।"
      ],
      "practicalExercise": {
        "task": "१.६० स्थिर दरका आधारमा आयातित सामानको नेपाली लागत हिसाब गर्नुहोस्",
        "instruction": "भारतमा भारु १०,००० पर्ने कुनै घरायसी सामान लिनुहोस्। त्यसलाई १.६० ले गुणन गर्दा नेरु १६,००० हुन्छ। त्यसमा भन्सार महसुल (मानौँ १५%) र १३% भ्याट जोड्दा नेपाल आइपुग्दा सामानको मूल्य किन नेरु २१,००० भन्दा बढी पर्न जान्छ हिसाब बुझ्नुहोस्।"
      }
    }
  },
  "decoding-nepal-federal-budget-jestha-15": {
    "en": {
      "summaryPoints": [
        "Understand the constitutional mandate (Article 119) requiring the Federal Budget to be presented by the Finance Minister on Jestha 15 every year.",
        "Explain the three core components of the budget: Recurrent Expenditure (Chalu Kharcha), Capital Expenditure (Pujigat Kharcha), and Financial Management (Bitiya Byabasthapan).",
        "Calculate the fiscal deficit by comparing total estimated revenue mobilization with total expenditure commitments.",
        "Compare the real economic multiplier of capital infrastructure spending against the consumption-heavy burden of recurrent administrative overhead.",
        "Apply annual budget announcements (changes in customs duties, income tax slabs, excise taxes) to strategically adjust your household and business finances."
      ],
      "practicalExercise": {
        "task": "Analyze the latest Federal Budget speech for personal finance and tax impact",
        "instruction": "Download the Budget Speech from the Ministry of Finance website (mof.gov.np). Identify 3 critical changes: 1) Any adjustments to personal income tax slabs or exemptions; 2) New customs duties on electronics or vehicles; 3) Priority infrastructure allocations in your province."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपालको संविधानको धारा ११९ बमोजिम हरेक वर्ष जेठ १५ गते अर्थमन्त्रीद्वारा संसदमा प्रस्तुत गरिने संघीय बजेटको संरचना।",
        "व्याख्या गर्नुहोस् (Explain): बजेटका तीन मुख्य खम्बा: चालु खर्च (तलब-भत्ता र प्रशासनिक), पुँजीगत खर्च (विकास निर्माण) र वित्तीय व्यवस्था (ऋणको साँवा-ब्याज)।",
        "हिसाब गर्नुहोस् (Calculate): सरकारको कुल राजस्व संकलन र कुल खर्च बीचको खाडल (बजेट घाटा) र त्यसलाई पूर्ति गर्न लिइने आन्तरिक तथा बाह्य ऋण।",
        "तुलना गर्नुहोस् (Compare): पुँजीगत विकास खर्चले देशको अर्थतन्त्रमा ल्याउने समृद्धि र अनुत्पादक चालु खर्चले बढाउने आर्थिक भारको भिन्नता।",
        "लागू गर्नुहोस् (Apply): जेठ १५ को बजेट वक्तव्य हेरेर नयाँ आर्थिक वर्षका लागि आयकर छुट, भन्सार महसुल र घरजग्गा करमा भएका परिवर्तन पहिचान गर्ने।"
      ],
      "practicalExercise": {
        "task": "बजेट भाषण हेरेर व्यक्तिगत कर र खर्चमा परेको प्रभाव टिप्नुहोस्",
        "instruction": "अर्थ मन्त्रालयको वेबसाइटबाट पछिल्लो बजेट भाषण डाउनलोड गर्नुहोस्। १) व्यक्तिगत आयकरको स्ल्याब वा छुट सीमामा भएको परिवर्तन, २) गाडी, मोबाइल वा घरायसी सामानमा बढेको/घटेको कर, र ३) निर्माण क्षेत्रमा छुट्याइएको बजेट अध्ययन गर्नुहोस्।"
      }
    }
  },
  "internal-external-debt-nepal-gdp": {
    "en": {
      "summaryPoints": [
        "Understand the composition of Nepal’s public sovereign debt across Internal borrowing (treasury bills, development bonds) and External borrowing (concessional loans from WB, ADB).",
        "Explain the Public Debt to GDP ratio and international benchmarks for sovereign debt sustainability in developing economies.",
        "Calculate the per-capita public debt burden and debt servicing costs (interest and principal repayments) allocated in the annual national budget.",
        "Compare highly concessional, low-interest (1% to 1.5%), long-maturity external loans with high-interest domestic treasury issuances.",
        "Apply sovereign macroeconomic risk assessments when evaluating domestic currency purchasing power and long-term interest rate trends."
      ],
      "practicalExercise": {
        "task": "Calculate Nepal’s Public Debt to GDP ratio and per-capita debt burden",
        "instruction": "Take Nepal’s total public debt reported by the Public Debt Management Office (PDMO) (approx NPR 24 Kharba) and divide by nominal GDP (approx NPR 57 Kharba) to calculate the Debt-to-GDP ratio (approx 42%). Divide the total debt by 3 Crore citizens to determine the approximate per-capita public debt."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नेपाल सरकारको सार्वजनिक ऋणको संरचना: आन्तरिक ऋण (ट्रेजरी बिल, विकास ऋणपत्र) र बाह्य ऋण (विश्व बैंक, ADB का सहुलियतपूर्ण ऋण)।",
        "व्याख्या गर्नुहोस् (Explain): कुल गार्हस्थ उत्पादनमा सार्वजनिक ऋणको अनुपात (Debt-to-GDP Ratio) र अन्तर्राष्ट्रिय मापदण्ड अनुसार नेपालको जोखिमको अवस्था।",
        "हिसाब गर्नुहोस् (Calculate): देशको कुल ऋणलाई कुल जनसंख्याले भाग गरेर प्रतिव्यक्ति ऋणको भार र वार्षिक बजेटबाट साँवा-ब्याज तिर्न छुट्याइने रकमको हिसाब।",
        "तुलना गर्नुहोस् (Compare): वार्षिक १% देखि १.५% ब्याजदरमा पाइने ३०-४० वर्षे बाह्य सहुलियतपूर्ण ऋण र आन्तरिक बजारबाट उठाइने महँगो ऋण।",
        "लागू गर्नुहोस् (Apply): सार्वजनिक ऋणको वृद्धिले भविष्यमा कर बढ्न सक्ने सम्भावना बुझेर आफ्नो दीर्घकालीन वित्तीय योजना निर्माण गर्ने।"
      ],
      "practicalExercise": {
        "task": "नेपालको सार्वजनिक ऋण र प्रतिव्यक्ति ऋणको भार हिसाब गर्नुहोस्",
        "instruction": "सार्वजनिक ऋण व्यवस्थापन कार्यालय (PDMO) को पछिल्लो प्रतिवेदनबाट कुल सार्वजनिक ऋण (करिब रु. २४ खर्ब) लिनुहोस्। त्यसलाई कुल GDP (करिब रु. ५७ खर्ब) ले भाग गरी Debt-to-GDP अनुपात निकाल्नुहोस् र ३ करोड जनसंख्याले भाग गरी प्रतिव्यक्ति ऋण कति पुग्यो हिसाब हेर्नुहोस्।"
      }
    }
  },
  "why-detailed-budgeting-fails": {
    "en": {
      "summaryPoints": [
        "Understand the cognitive friction and behavioral burnout that causes 90% of detailed manual expense tracking apps to be abandoned within 30 days.",
        "Explain why agonizing over micro-expenses (like a cup of chiya) provides negligible financial benefit compared to optimizing major structural fixed expenses.",
        "Calculate your Monthly High-Impact Surplus by automating savings upfront and allowing guilt-free spending on everything that remains.",
        "Compare restrictive micro-budgeting spreadsheets with the friction-free \"Anti-Budget\" (Pay Yourself First) framework.",
        "Apply an automated two-account banking system: one dedicated Bill/Savings account and one daily Discretionary debit account."
      ],
      "practicalExercise": {
        "task": "Implement the Anti-Budget 2-Account Architecture",
        "instruction": "Designate your primary salary account as \"Account A\" (Bills, EMIs, and Automated Savings). Open or designate a secondary bank account as \"Account B\" (Guilt-Free Spending). Schedule an automated transfer of a fixed weekly allowance from Account A to Account B. Spend freely from Account B without tracking individual items."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): हरेक सानो चिया-खाजाको खर्च टिप्ने परम्परागत बजेटिङ किन मानिसहरूले १ महिनाभित्रै दिक्क भएर छोड्छन् (Mental Burnout)।",
        "व्याख्या गर्नुहोस् (Explain): सानातिना खर्चमा तनाव लिनुभन्दा घरभाडा, ऋणको ब्याज र सवारी खर्च जस्ता ठूला खर्चहरू नियन्त्रण गर्दा हुने गुणात्मक बचत।",
        "हिसाब गर्नुहोस् (Calculate): तलब आएकै दिन बचत र अनिवार्य बिलहरू भुक्तानी गरिसकेपछि बाँकी रहेको रकमलाई विना तनाव खर्च गर्न मिल्ने हिसाब।",
        "तुलना गर्नुहोस् (Compare): झन्झटिलो एक्सेल सिटमा दैनिक खर्च टिप्ने तरिका र तलब आउनासाथ बचत छुट्याउने \"एन्टी-बजेट\" (Anti-Budget) विधि।",
        "लागू गर्नुहोस् (Apply): दुईवटा बैंक खाता चलाउने: एउटा अनिवार्य बिल र बचतका लागि, र अर्को कार्ड/QR बाट दैनिक रमाइलो र खर्चका लागि।"
      ],
      "practicalExercise": {
        "task": "एन्टी-बजेट (Anti-Budget) दुई-खाता प्रणाली लागू गर्नुहोस्",
        "instruction": "आफ्नो तलब आउने बैंक खाताबाट महिनाको सुरुमै बचत र अनिवार्य खर्च (कोठा भाडा, बिजुली) छुट्याउनुहोस्। बाँकी रहेको इच्छामूलक खर्चको रकम अर्को बैंक खाता वा वालेटमा ट्रान्सफर गर्नुहोस्। अब सो दोस्रो खाताबाट विना कुनै मानसिक तनाव खर्च गर्ने अभ्यास गर्नुहोस्।"
      }
    }
  },
  "notion-spreadsheet-money-systems": {
    "en": {
      "summaryPoints": [
        "Understand how centralized personal finance dashboards transform chaotic bank receipts into clear visual net worth and cash flow analytics.",
        "Explain the architectural layers of an effective money dashboard: Income Engine, Fixed Overhead Registry, Asset Tracker, and Debt Amortization Schedule.",
        "Calculate your personal savings rate percentage automatically on a monthly and annualized basis.",
        "Compare customizable Notion database setups with Google Sheets / Excel formula-driven accounting sheets.",
        "Apply the RisePaisa Financial Dashboard Template to establish a single source of financial truth updated in under 10 minutes per month."
      ],
      "practicalExercise": {
        "task": "Build or clone your unified personal finance spreadsheet dashboard",
        "instruction": "Create a Google Sheet or Notion page with 4 linked tabs: 1) Monthly Cash Flow (Income vs Outflow); 2) Net Worth Tracker (Assets minus Liabilities); 3) Emergency Fund Runway Calculator; 4) Investment Portfolio Log. Enter your verified numbers from this month to establish your baseline."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): बिख्रिएका बैंक स्टेटमेन्ट र बिलहरूलाई एउटै Notion वा Spreadsheet ड्यासबोर्डमा ल्याएर वित्तीय स्पष्टता कसरी प्राप्त गर्ने।",
        "व्याख्या गर्नुहोस् (Explain): एउटा प्रभावकारी वित्तीय ड्यासबोर्डका ४ प्रमुख स्तम्भ: आम्दानी स्रोत, स्थिर खर्च, सम्पत्ति ट्र्याकर र ऋण विवरण।",
        "हिसाब गर्नुहोस् (Calculate): आफ्नो कुल आम्दानी र बचतको अनुपात (Savings Rate %) स्वचालित रूपमा गणना गर्ने फर्मुला।",
        "तुलना गर्नुहोस् (Compare): दृश्यात्मक रूपमा आकर्षक Notion ड्यासबोर्ड र जटिल गणितीय हिसाबका लागि उपयुक्त Google Sheets बीचको भिन्नता।",
        "लागू गर्नुहोस् (Apply): महिनामा केवल १० मिनेट दिएर आफ्नो सम्पूर्ण आर्थिक स्थितिको समीक्षा गर्न मिल्ने व्यवस्थित प्रणाली बनाउने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो पहिलो Personal Finance Google Sheet ड्यासबोर्ड तयार गर्नुहोस्",
        "instruction": "Google Sheets मा एउटा नयाँ सिट खोल्नुहोस्। त्यसमा ४ वटा खण्ड बनाउनुहोस्: १) मासिक आम्दानी र खर्च, २) कुल सम्पत्ति र ऋण (Net Worth), ३) आपतकालीन कोषको मौज्दात, र ४) सेयर तथा SIP लगानीको बजार मूल्य। आफ्नो वास्तविक तथ्याङ्क भरेर सुरु गर्नुहोस्।"
      }
    }
  },
  "30-minute-monthly-financial-checkin": {
    "en": {
      "summaryPoints": [
        "Understand the high-leverage habit of conducting a structured 30-minute personal finance review on the final weekend of every month.",
        "Explain the 5-point review agenda: audit bank statements for fraudulent charges, verify SIP execution, reconcile credit card balances, track savings rate, and celebrate wins.",
        "Calculate your monthly progress toward annual financial milestones and adjust targets for upcoming seasonal expenses.",
        "Compare solo financial reviews with joint household budget conversations conducted with spouses or partners.",
        "Apply a standardized written checklist to ensure the monthly check-in is efficient, constructive, and stress-free."
      ],
      "practicalExercise": {
        "task": "Schedule and execute your first 30-Minute Monthly Money Review",
        "instruction": "Block 30 minutes on your calendar for the last Saturday morning of the month. Use a 5-step checklist: 1) Download bank statements; 2) Confirm all SIPs and loan EMIs executed correctly; 3) Check credit card balance and clear it; 4) Calculate this month’s savings rate; 5) Review upcoming large expenses for next month."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): हरेक महिनाको अन्तिम शनिबार निकालिने ३० मिनेटको समयले वर्षभरिको आर्थिक जीवन कसरी अनुशासित राख्छ।",
        "व्याख्या गर्नुहोस् (Explain): ३० मिनेटको ५ बुँदे चेकलिस्ट: बैंक स्टेटमेन्ट रुजु गर्ने, SIP काटिएको यकिन गर्ने, क्रेडिट कार्ड भुक्तानी गर्ने, बचत दर निकाल्ने र समीक्षा गर्ने।",
        "हिसाब गर्नुहोस् (Calculate): वर्षभरिका वित्तीय लक्ष्यहरू (जस्तै आपतकालीन कोष पूरा गर्ने वा ऋण घटाउने) को मासिक प्रगतिको हिसाब।",
        "तुलना गर्नुहोस् (Compare): एक्लै तनाव लिएर खर्च सोच्नु र श्रीमान्-श्रीमती मिलेर शान्त वातावरणमा मासिक बजेट समीक्षा गर्नुको सकारात्मक प्रभाव।",
        "लागू गर्नुहोस् (Apply): नियमित मासिक चेक-इनलाई पारिवारिक संस्कारका रूपमा विकास गरी पैसा सम्बन्धी चिन्ता सदाका लागि हटाउने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो पहिलो ३० मिनेटको मासिक वित्तीय समीक्षाको तालिका बनाउनुहोस्",
        "instruction": "आउँदो महिनाको अन्तिम शनिबारका लागि ३० मिनेटको समय क्यालेन्डरमा छुट्याउनुहोस्। मोबाइल बैंकिङ खोलेर १) अनावश्यक सब्सक्रिप्सन वा झुक्किएर काटिएका शुल्क छन् कि हेर्नुहोस्, २) यो महिना कति बचत भयो हिसाब गर्नुहोस्, र ३) अर्को महिना आउने ठूला खर्चहरूको पूर्व-तयारी गर्नुहोस्।"
      }
    }
  },
  "organizing-tax-receipts-banking-documents": {
    "en": {
      "summaryPoints": [
        "Understand the legal imperative to maintain organized physical and digital records of all tax, banking, and property documents for a minimum of 7 years in Nepal.",
        "Explain how lack of documentation during tax audits, property sales, or insurance claims results in heavy penalties or catastrophic financial delays.",
        "Calculate the time and financial savings of establishing an encrypted digital document repository in Google Drive or iCloud.",
        "Compare disorganized paper shoeboxes with standardized alphanumeric folder structures (e.g., \"YYYY_Category_DocumentName\").",
        "Apply scanner apps (Adobe Scan, CamScanner) to digitize every tax clearance certificate, CIT receipt, Lalpurja, and loan closure letter immediately upon issuance."
      ],
      "practicalExercise": {
        "task": "Establish a 7-Year Digital Financial Archive on Google Drive",
        "instruction": "Create a main folder in Google Drive named \"Financial Vault\". Create 5 sub-folders: 1) Tax_Clearance_and_PAN; 2) Property_Lalpurja_and_Land_Tax; 3) Insurance_Policies_and_Receipts; 4) Banking_and_Loan_Agreements; 5) Identity_Citizenship_Passports. Scan and upload at least 3 critical documents today."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): आयकर ऐन र बैंकिङ नियम अनुसार कर, जग्गा र ऋणका कागजातहरू कम्तीमा ७ वर्षसम्म सुरक्षित राख्नुपर्ने कानुनी आवश्यकता।",
        "व्याख्या गर्नुहोस् (Explain): मालपोत, कर कार्यालय वा बीमा दाबी गर्दा पुरानो रसिद नभेटिँदा हुने चर्को जरिवाना र मानसिक तनाव।",
        "हिसाब गर्नुहोस् (Calculate): डिजिटल रूपमा कागजात सुरक्षित राख्दा मालपोत र बैंकका पुराना कागजात पुनः निकाल्न लाग्ने समय र खर्चको बचत।",
        "तुलना गर्नुहोस् (Compare): धमिरा र पानीले बिग्रन सक्ने दराजका पुराना कागज र क्लाउड (Google Drive) मा सुरक्षित रहने इन्क्रिप्टेड डिजिटल फाइल।",
        "लागू गर्नुहोस् (Apply): मोबाइलको स्क्यानर एप प्रयोग गरी लालपुर्जा, कर चुक्ता, नागरिकता र बीमा पोलिसीलाई वर्ष अनुसार नाम दिएर सेभ गर्ने।"
      ],
      "practicalExercise": {
        "task": "Google Drive मा आफ्नो \"डिजिटल वित्तीय भल्ट\" बनाउनुहोस्",
        "instruction": "आफ्नो Google Drive मा \"Financial Vault\" नामको फोल्डर खोल्नुहोस्। त्यसमा ५ वटा सब-फोल्डर बनाउनुहोस्: १) कर र PAN, २) लालपुर्जा र तिरो रसिद, ३) बीमा पोलिसी र रसिद, ४) बैंक तथा ऋण सम्झौता, ५) नागरिकता र राहदानी। आजै कम्तीमा ३ वटा मुख्य कागजात स्क्यान गरी अपलोड गर्नुहोस्।"
      }
    }
  },
  "preventing-lifestyle-inflation-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the psychological trap of Lifestyle Inflation (Hedonic Adaptation), where expenses automatically expand to absorb every salary raise or promotion.",
        "Explain why professionals in Kathmandu earning NPR 1,50,000 often struggle just as much as entry-level workers earning NPR 30,000.",
        "Calculate the wealth acceleration achieved by applying the \"Half-Raise Rule\": committing 50% of every salary increase directly to automated investments.",
        "Compare upgraded lifestyle prestige purchases (luxury dining, brand apparel, expensive vehicle EMIs) with the true peace of mind of financial freedom.",
        "Apply delayed gratification protocols (such as the 72-Hour Rule for non-essential purchases) to suppress impulse consumption."
      ],
      "practicalExercise": {
        "task": "Apply the \"Half-Raise Rule\" to your next salary hike or bonus",
        "instruction": "Whenever you receive a salary raise (e.g., an extra NPR 10,000/month) or Dashain bonus, immediately increase your monthly SIP or emergency savings by exactly 50% of that raise (NPR 5,000). Enjoy the remaining 50% for guilt-free lifestyle upgrades without breaking your compounding momentum."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): जीवनशैली महँगिँदै जाने रोग (Lifestyle Inflation): तलब बढ्नेबित्तिकै खर्च पनि स्वतः बढेर बचत शून्य हुने मनोवैज्ञानिक पासो।",
        "व्याख्या गर्नुहोस् (Explain): काठमाडौँमा महिनाको १ लाख ५० हजार कमाउने व्यक्ति पनि ३० हजार कमाउने जत्तिकै महिनाको अन्त्यमा किन तनावमा रहन्छन्।",
        "हिसाब गर्नुहोस् (Calculate): \"बढेको तलबको आधा बचत\" (Half-Raise Rule) नियम लागू गरेर १० वर्षमा करोडपति बन्न सकिने यथार्थ गणित।",
        "तुलना गर्नुहोस् (Compare): अरूलाई देखाउन गरिने महँगो खर्च (नयाँ गाडी, ब्राण्डका लुगा) र बैंकमा भएको स्वतन्त्रता दिने वास्तविक पुँजी बीचको फरक।",
        "लागू गर्नुहोस् (Apply): कुनै पनि ठूलो गैर-आवश्यक सामान किन्नुअघि ७२ घण्टा पर्खिने (72-Hour Rule) नियम लगाएर आवेगपूर्ण खर्च रोक्ने।"
      ],
      "practicalExercise": {
        "task": "\"Half-Raise Rule\" लागू गरी भविष्यको बचत दर तय गर्नुहोस्",
        "instruction": "जब तपाईंको तलब बढ्छ (मानौँ मासिक रु. १०,००० ले बढ्यो), बढेको रकमको ठ्याक्कै ५०% (रु. ५,०००) तुरुन्तै आफ्नो मासिक SIP वा मुद्दतीमा थप्नुहोस्। बाँकी ५०% रकम मात्र आफ्नो जीवनशैली र रमाइलोमा खर्च गर्ने लिखित नियम बनाउनुहोस्।"
      }
    }
  },
  "annual-net-worth-audit-goal-setting": {
    "en": {
      "summaryPoints": [
        "Understand the power of conducting a comprehensive Annual Financial Audit every Poush/Magh to assess real year-over-year wealth accumulation.",
        "Explain how to measure your true Financial Health Score by comparing asset growth against total debt reduction and portfolio diversification.",
        "Calculate your year-over-year Net Worth Growth Rate: ((Net Worth End - Net Worth Start) / Net Worth Start) × 100.",
        "Compare nominal asset price inflation (such as real estate price jumps) with liquid, productive cash-flow generating investments.",
        "Apply SMART financial goal-setting methodology to establish precise Rupee targets for emergency funds, SIP investments, and debt clearance for the upcoming year."
      ],
      "practicalExercise": {
        "task": "Execute your Annual Financial Audit and set 3 SMART wealth goals",
        "instruction": "Calculate your exact net worth as of today. Compare it with your net worth from 12 months ago to find your annual growth rate. Based on this audit, write down 3 SMART financial goals for the upcoming year: 1) Debt reduction target; 2) Annual SIP contribution target; 3) Emergency buffer milestone."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): हरेक वर्ष पुस/माघमा वर्षभरिको आर्थिक स्थितिको गहिरो अडिट (Annual Financial Audit) गर्नुको महत्त्व र फाइदा।",
        "व्याख्या गर्नुहोस् (Explain): वर्षभरिमा सम्पत्ति कति बढ्यो र ऋण कति घट्यो भन्ने वास्तविक हिसाबले मात्र साँचो वित्तीय स्वास्थ्य देखाउँछ।",
        "हिसाब गर्नुहोस् (Calculate): वार्षिक खुद सम्पत्ति वृद्धिदर: [(अन्तिम खुद सम्पत्ति - सुरुवाती खुद सम्पत्ति) / सुरुवाती खुद सम्पत्ति] × १००।",
        "तुलना गर्नुहोस् (Compare): केवल कागजमा जग्गाको भाउ बढेर देखिने काल्पनिक सम्पत्ति र हातमा भएको वास्तविक तरल तथा उत्पादक लगानी।",
        "लागू गर्नुहोस् (Apply): नयाँ वर्षका लागि स्पष्ट, मापनयोग्य (SMART) तीनवटा वित्तीय लक्ष्यहरू तोक्ने (जस्तै ऋण चुक्ता, SIP रकम थप, आपतकालीन कोष)।"
      ],
      "practicalExercise": {
        "task": "आफ्नो वार्षिक वित्तीय अडिट सम्पन्न गरी ३ वटा मुख्य लक्ष्य तोक्नुहोस्",
        "instruction": "आजको मितिमा आफ्नो कुल सम्पत्तिबाट कुल ऋण घटाएर Net Worth निकाल्नुहोस्। १ वर्षअघिको स्थितिसँग तुलना गर्नुहोस्। आगामी वर्षका लागि ३ वटा स्पष्ट लक्ष्य लेख्नुहोस्: १) कति ऋण घटाउने, २) वर्षभरिमा कति रकम लगानी गर्ने, र ३) आपतकालीन कोष कति पुर्याउने।"
      }
    }
  },
  "cost-of-delay-retirement-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the compounding penalty of delaying retirement contributions in Nepal, where waiting just 10 years requires tripling your monthly savings.",
        "Explain why retirement planning must begin in your 20s or early 30s rather than relying on government gratuity or adult children.",
        "Calculate the exact Cost of Delay: comparing an investor who starts saving NPR 5,000/month at age 25 versus one starting at age 35 at a 12% return.",
        "Compare the modest required monthly contribution of an early starter against the painful sacrifice required by a late starter.",
        "Apply the immediate action principle: opening a retirement SIP account today, even with as little as NPR 1,000 per month."
      ],
      "practicalExercise": {
        "task": "Calculate your personal Cost of Delay using the RisePaisa Compounding Calculator",
        "instruction": "Model saving NPR 5,000/month at a 12% annual return until age 60. First, calculate the final wealth if you start today (e.g., at age 25 = NPR 3.24 Crore). Next, calculate the final wealth if you wait 10 years (starting at age 35 = NPR 94.9 Lakhs). Notice the shocking NPR 2.29 Crore penalty of waiting."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): अवकाश (Retirement) बचत सुरु गर्न ढिलाइ गर्दा हुने अकल्पनीय नोक्सानी (Cost of Delay)।",
        "व्याख्या गर्नुहोस् (Explain): १० वर्ष ढिला गर्दा सोही पुँजी बनाउन हरेक महिना तीन गुणा बढी रकम बचत गर्नुपर्ने गणितीय वास्तविकता।",
        "हिसाब गर्नुहोस् (Calculate): २५ वर्षको उमेरमा मासिक रु. ५,००० बचत गर्ने र ३५ वर्षमा सुरु गर्ने व्यक्तिको ६० वर्ष पुग्दाको सम्पत्तिमा पर्ने करोडौँको अन्तर।",
        "तुलना गर्नुहोस् (Compare): युवावस्थामै सानो रकमबाट सुरु गरिएको अनुशासित बचत र ढिला भएपछि भोग्नुपर्ने आर्थिक संकट।",
        "लागू गर्नुहोस् (Apply): \"भोलि गरौँला\" भन्ने सोच त्यागेर आजै मासिक रु. १,००० बाटै भए पनि आफ्नै नाममा अवकाश बचत सुरु गर्ने।"
      ],
      "practicalExercise": {
        "task": "१० वर्ष ढिला गर्दा गुम्ने पुँजीको हिसाब निकाल्नुहोस्",
        "instruction": "risePaisa Calculator मा जानुहोस्। मासिक रु. ५,००० लगानी १२% प्रतिफलमा ६० वर्षको उमेरसम्म हिसाब गर्नुहोस्। २५ वर्षमा सुरु गर्दा रु. ३ करोड २४ लाख पुग्छ भने ३५ वर्षमा सुरु गर्दा केवल रु. ९५ लाख मात्र बन्छ। १० वर्षको ढिलाइले गुमाएको रु. २ करोड २९ लाखको हिसाब हेर्नुहोस्।"
      }
    }
  },
  "calculating-retirement-corpus-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how to compute your target retirement corpus taking into account inflation, post-retirement life expectancy, and expected lifestyle.",
        "Explain why traditional rules of thumb fail without factoring in Nepal’s historical 6% to 7% inflation rate over a 25-to-30 year horizon.",
        "Calculate your projected monthly expenses at age 60 and determine your target corpus using the 25x to 30x annual expenditure rule.",
        "Compare a fully self-funded retirement nest egg against uncertain reliance on family remittances or state social security.",
        "Apply reverse-engineering math to derive the exact monthly SIP contribution needed today to hit your target corpus by retirement."
      ],
      "practicalExercise": {
        "task": "Calculate your target retirement corpus and required monthly SIP",
        "instruction": "Take your current monthly living expenses (e.g., NPR 50,000). Adjust for 6.5% inflation over the years until age 60 to find your future monthly expense. Multiply future annual expenses by 25. Use the RisePaisa SIP Calculator to find the exact monthly savings required today to accumulate that target corpus."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): अवकाशपछिको २५-३० वर्ष सम्मानजनक जीवन बाँच्नका लागि चाहिने कुल अवकाश कोष (Retirement Corpus) को हिसाब।",
        "व्याख्या गर्नुहोस् (Explain): नेपालको औषत ६.५% महँगी दरका कारण आजको रु. ५०,००० को खर्च ३० वर्षपछि महिनाकै करिब रु. ३,३०,००० पुग्ने यथार्थ।",
        "हिसाब गर्नुहोस् (Calculate): अवकाशपछिको वार्षिक खर्चलाई २५ ले गुणन गरेर (२५x नियम) चाहिने कुल अवकाश पुँजीको हिसाब।",
        "तुलना गर्नुहोस् (Compare): आफ्नै लगानीबाट आउने आत्मनिर्भर पेन्सन र छोराछोरी वा सरकारी भरमा बाँच्नुपर्ने अनिश्चितता।",
        "लागू गर्नुहोस् (Apply): कुल आवश्यक पुँजी थाहा पाएपछि आजैदेखि हरेक महिना कति रकमको SIP गर्नुपर्छ हिसाब गरी कार्यान्वयन गर्ने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो भविष्यको आवश्यक अवकाश कोष (Corpus) हिसाब गर्नुहोस्",
        "instruction": "आफ्नो परिवारको आजको मासिक खर्च लिनुहोस्। ६० वर्ष पुग्दा ६.५% महँगीले सो खर्च कति पुग्छ हिसाब गर्नुहोस्। भविष्यको वार्षिक खर्चलाई २५ ले गुणन गरी चाहिने कुल अवकाश कोष निकाल्नुहोस्। सो रकम पुर्याउन आजदेखि मासिक कति SIP गर्नुपर्छ risePaisa मा हेर्नुहोस्।"
      }
    }
  },
  "social-security-fund-ssf-pension-model": {
    "en": {
      "summaryPoints": [
        "Understand the structure of Nepal’s Social Security Fund (SSF) established under the Contribution-based Social Security Act 2074.",
        "Explain the four social security schemes: Medical/Health/Maternity (1%), Accident/Disability (1.4%), Dependent Family (0.27%), and Old-Age Pension (28.33%).",
        "Calculate your future monthly lifetime pension using the official SSF divisor formula: Total Pension Accrual divided by Factor 160.",
        "Compare the lifetime annuity model of SSF with traditional lump-sum retirement payouts from CIT or EPF.",
        "Apply the SSF online portal login to audit your monthly contributions, track interest credits, and check nominee registrations."
      ],
      "practicalExercise": {
        "task": "Calculate your projected lifetime monthly pension under the SSF formula",
        "instruction": "Assume a basic salary of NPR 30,000 contributing for 30 years (360 months). Calculate total old-age pension contributions (28.33% of basic = NPR 8,500/month). Compound at the SSF statutory return. Divide the final accumulated pension fund by the statutory divisor 160 to find your guaranteed monthly lifetime pension."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): योगदानमा आधारित सामाजिक सुरक्षा ऐन २०७४ अनुसार सञ्चालित सामाजिक सुरक्षा कोष (SSF) को पेन्सन प्रणाली।",
        "व्याख्या गर्नुहोस् (Explain): कोषका ४ वटा योजनाहरू: स्वास्थ्य तथा मातृत्व (१%), दुर्घटना तथा अशक्तता (१.४%), आश्रित परिवार (०.२७%) र वृद्धावस्था पेन्सन (२८.३३%)।",
        "हिसाब गर्नुहोस् (Calculate): अवकाशपछि जीवनभर पाइने मासिक पेन्सनको हिसाब: कुल जम्मा भएको पेन्सन कोषलाई १६० ले भाग गर्ने सूत्र।",
        "तुलना गर्नुहोस् (Compare): जीवनभर पाइने मासिक पेन्सन सुविधा र सञ्चय कोष/CIT बाट एकमुष्ठ रकम लिएर आफै व्यवस्थापन गर्नुपर्ने जोखिम।",
        "लागू गर्नुहोस् (Apply): ssf.gov.np मा आफ्नो सामाजिक सुरक्षा नम्बर (SSID) लग-इन गरी हरेक महिना रोजगारदाताले रकम दाखिला गरे/नगरेको रुजु गर्ने।"
      ],
      "practicalExercise": {
        "task": "SSF को आधिकारिक सूत्र प्रयोग गरी आफ्नो मासिक पेन्सन हिसाब गर्नुहोस्",
        "instruction": "आफ्नो आधारभूत तलबको २८.३३% हिस्सा पेन्सन योजनामा जान्छ। ३० वर्षको सेवापछि जम्मा हुने कुल रकम र त्यसमा प्राप्त हुने ब्याज जोड्नुहोस्। सो कुल पेन्सन रकमलाई राष्ट्रिय सूत्र अनुसार १६० ले भाग गरी अवकाशपछि महिनाको कति पेन्सन पाइन्छ हिसाब निकाल्नुहोस्।"
      }
    }
  },
  "citizen-investment-trust-cit-epf-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the statutory retirement savings programs governed by the Citizen Investment Trust (CIT) and Employees Provident Fund (EPF / Karmachari Sanchaya Kosh).",
        "Explain the legal tax sheltering benefits under Section 63 of the Income Tax Act: contributing up to one-third of income or maximum NPR 5,00,000 annually.",
        "Calculate your cumulative returns across CIT schemes (Investors Account Scheme, Gratuity Fund) and EPF annual interest credits and profit bonuses.",
        "Compare loan facilities against your retirement balance: EPF 80% special borrowing at concessional rates versus private personal loans.",
        "Apply voluntary additional payroll deductions into CIT to maximize your tax deduction while building a low-risk retirement safety net."
      ],
      "practicalExercise": {
        "task": "Audit your EPF / CIT statement and calculate allowable borrowing capacity",
        "instruction": "Log into your EPF (kosh.gov.np) or CIT (nlk.org.np) mobile app. Check your total accumulated balance, total interest credited last fiscal year, and calculate your 80% special loan eligibility. Check if you are fully utilizing your NPR 5,00,000 Section 63 annual tax deduction limit."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): नागरिक लगानी कोष (CIT) र कर्मचारी सञ्चय कोष (EPF) का अवकाश बचत योजनाहरू र तिनको सञ्चालन।",
        "व्याख्या गर्नुहोस् (Explain): आयकर ऐनको दफा ६३ अनुसार वार्षिक कुल आम्दानीको १/३ वा अधिकतम रु. ५,००,००० सम्म जम्मा गर्दा पाइने कर छुट।",
        "हिसाब गर्नुहोस् (Calculate): कोषले दिने वार्षिक ब्याजदर र मुनाफा लाभांश (Bonus) सहित १० देखि २० वर्षमा जम्मा हुने कुल रकम।",
        "तुलना गर्नुहोस् (Compare): आपत पर्दा आफ्नै सञ्चय कोषबाट ८०% सम्म सस्तो ब्याजमा विशेष सापटी लिने सुविधा र बैंकको महँगो कर्जा।",
        "लागू गर्नुहोस् (Apply): कर छुटको पूर्ण सदुपयोग गर्न आफ्नो तलबबाट ऐच्छिक रूपमा CIT मा थप रकम कट्टा गराउने निर्देशन दिने।"
      ],
      "practicalExercise": {
        "task": "आफ्नो सञ्चय कोष वा CIT खाताको मौज्दात र सापटी सीमा जाँच्नुहोस्",
        "instruction": "सञ्चय कोष (EPF) वा CIT को मोबाइल एप खोल्नुहोस्। आफ्नो कुल मौज्दात र गत वर्ष प्राप्त ब्याज हेर्नुहोस्। आपतकालीन अवस्थामा कति रकम सापटी (८०% सम्म) लिन सकिन्छ हिसाब गर्नुहोस् र वार्षिक ५ लाखको कर छुट सीमा पूरा भएको छ कि छैन जाँच्नुहोस्।"
      }
    }
  },
  "4-percent-rule-adapted-for-nepal": {
    "en": {
      "summaryPoints": [
        "Understand the Trinity Study’s classic 4% Safe Withdrawal Rate (SWR) rule and how it must be adapted for Nepal’s higher inflation environment.",
        "Explain why a blind 4% withdrawal rate can cause premature portfolio depletion in Nepal without dynamic guardrails (3.5% to 4.0%) and asset diversification.",
        "Calculate your annual safe initial withdrawal amount from a diversified retirement portfolio of equities, mutual funds, and debentures.",
        "Compare the traditional rigid 4% withdrawal rule against the \"3-Bucket Retirement Strategy\": Cash bucket (1-2 years), Debt bucket (3-7 years), and Equity bucket (7+ years).",
        "Apply the dynamic guardrails method: adjusting annual withdrawals down by 5% during severe NEPSE bear markets to preserve capital longevity."
      ],
      "practicalExercise": {
        "task": "Design a 3-Bucket retirement distribution plan for an NPR 1 Crore corpus",
        "instruction": "Allocate an NPR 1 Crore retirement nest egg across 3 buckets: 1) Bucket 1 (Cash/Liquid FD for 2 years of living expenses = NPR 10 Lakhs); 2) Bucket 2 (Fixed income debentures and bank FDs for years 3 to 7 = NPR 30 Lakhs); 3) Bucket 3 (Diversified NEPSE dividend stocks and mutual funds for year 8+ growth = NPR 60 Lakhs). Calculate your first year’s safe withdrawal of 3.8% (NPR 3,80,000)."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): विश्वप्रसिद्ध ४% सुरक्षित निकासी नियम (4% Safe Withdrawal Rule) र नेपालको उच्च महँगीमा यसलाई परिमार्जन गर्ने तरिका।",
        "व्याख्या गर्नुहोस् (Explain): नेपालमा ६-७% महँगी हुने भएकाले अन्धाधुन्ध ४% झिक्नुभन्दा ३.५% देखि ३.८% को सुरक्षित निकासी दर (SWR) किन भरपर्दो हुन्छ।",
        "हिसाब गर्नुहोस् (Calculate): अवकाश कोषबाट मूलधन नघटाई पहिलो वर्ष झिक्न सकिने सुरक्षित वार्षिक रकमको हिसाब।",
        "तुलना गर्नुहोस् (Compare): कठोर वार्षिक निकासी र ३-बास्केट रणनीति (नगद बास्केट, ऋणपत्र बास्केट, र इक्विटी बास्केट) बीचको दीर्घकालीन सुरक्षा।",
        "लागू गर्नुहोस् (Apply): सेयर बजार घटेको वर्षमा निकासी रकम ५% ले घटाएर आफ्नो पुँजीलाई कहिल्यै नसकिने गरी जोगाउने (Dynamic Guardrails)।"
      ],
      "practicalExercise": {
        "task": "रु. १ करोडको अवकाश कोषका लागि ३-बास्केट निकासी योजना बनाउनुहोस्",
        "instruction": "रु. १ करोडको पुँजीलाई ३ भागमा बाँड्नुहोस्: १) बास्केट १: २ वर्षको खर्च (रु. १० लाख) बैंक बचतमा; २) बास्केट २: ३ देखि ७ वर्षको खर्च (रु. ३० लाख) सुरक्षित डिबेन्चर वा मुद्दतीमा; ३) बास्केट ३: बाँकी रु. ६० लाख दीर्घकालीन वृद्धिका लागि सेयर र Mutual Fund मा। पहिलो वर्ष ३.८% (रु. ३,८०,०००) झिक्ने योजना बनाउनुहोस्।"
      }
    }
  },
  "swp-mutual-fund-retirement-income-nepal": {
    "en": {
      "summaryPoints": [
        "Understand how Systematic Withdrawal Plans (SWP) in open-ended mutual funds provide tax-efficient, inflation-adjusted monthly retirement pensions.",
        "Explain the tax efficiency: SWP redemptions are treated as capital gains (only 5% on the profit portion of redeemed units) rather than fully taxable income.",
        "Calculate your required initial fund balance to sustainably generate an NPR 40,000/month inflation-adjusted pension for 30 years.",
        "Compare mutual fund SWP cash flows against commercial bank fixed deposit interest, demonstrating real capital preservation against inflation.",
        "Apply the automated monthly connectIPS bank credit instruction with your Asset Management Company to establish a lifelong private pension."
      ],
      "practicalExercise": {
        "task": "Simulate a 20-year monthly pension using the RisePaisa SWP Calculator",
        "instruction": "Model an accumulated retirement fund of NPR 80 Lakhs in an open-ended mutual fund earning an estimated 9% annualized return. Set a monthly withdrawal of NPR 40,000 (NPR 4,80,000/year = 6% withdrawal). Run the simulation over 20 years to confirm that while withdrawing NPR 96 Lakhs in cumulative pension, your principal remains safely intact and continues to grow."
      }
    },
    "np": {
      "summaryPoints": [
        "बुझ्नुहोस् (Understand): खुलामुखी Mutual Fund मा SWP (नियमित निकासी) प्रयोग गरी हरेक महिना कर-मैत्री र भरपर्दो पेन्सन लिने आधुनिक तरिका।",
        "व्याख्या गर्नुहोस् (Explain): SWP बाट पैसा झिक्दा पूरै रकममा कर नलागी केवल नाफा भएको अंशमा मात्र ५% पुँजीगत लाभकर (CGT) लाग्ने कर लाभ।",
        "हिसाब गर्नुहोस् (Calculate): अवकाशपछि मासिक रु. ४०,००० पेन्सन पाउन सुरुमा कति रकमको कोष आवश्यक पर्छ भन्ने हिसाब।",
        "तुलना गर्नुहोस् (Compare): मुद्दती निक्षेपको ब्याजमा मात्र भर पर्दा महँगीले साँवा खिइने समस्या र Mutual Fund SWP ले साँवा बढाउँदै पेन्सन दिने क्षमता।",
        "लागू गर्नुहोस् (Apply): फन्ड म्यानेजरको पोर्टलमा SWP म्यान्डेट दर्ता गरी हरेक महिनाको १ गते सिधै आफ्नो बैंक खातामा रकम आउने व्यवस्था गर्ने।"
      ],
      "practicalExercise": {
        "task": "SWP मार्फत २० वर्षे पेन्सन र पुँजी वृद्धिको हिसाब सिमुलेट गर्नुहोस्",
        "instruction": "मानौँ अवकाश कोषमा रु. ८० लाख छ र फन्डले ९% प्रतिफल दिन्छ। मासिक रु. ४०,००० (वर्षको रु. ४,८०,००० अर्थात् ६%) SWP सेट गर्नुहोस्। २० वर्षमा कुल रु. ९६ लाख पेन्सन खाँदा पनि तपाईंको मूलधन ८० लाखबाट बढेर अझै सुरक्षित रहन्छ भन्ने risePaisa SWP हिसाबबाट प्रमाणित गर्नुहोस्।"
      }
    }
  }
};

const ALL_ENRICHMENT_PARTS = {
  ...ENRICHMENT_PART1,
  ...ENRICHMENT_PART2,
  ...ENRICHMENT_PART3,
  ...ENRICHMENT_PART4
};

export const CURRICULUM_ENRICHMENT = {};

for (const slug of Object.keys(ALL_ENRICHMENT_PARTS)) {
  const base = BASE_OBJECTIVES[slug] || {};
  const enriched = ALL_ENRICHMENT_PARTS[slug] || {};

  CURRICULUM_ENRICHMENT[slug] = {
    en: {
      summaryPoints: enriched.en?.summaryPoints || base.en?.summaryPoints || [],
      practicalExercise: enriched.en?.practicalExercise || base.en?.practicalExercise || null,
      advantages: enriched.en?.advantages || [],
      limitations: enriched.en?.limitations || [],
      targetAudience: enriched.en?.targetAudience || null,
      decisionScenario: enriched.en?.decisionScenario || null,
      faqs: enriched.en?.faqs || []
    },
    np: {
      summaryPoints: enriched.np?.summaryPoints || base.np?.summaryPoints || [],
      practicalExercise: enriched.np?.practicalExercise || base.np?.practicalExercise || null,
      advantages: enriched.np?.advantages || [],
      limitations: enriched.np?.limitations || [],
      targetAudience: enriched.np?.targetAudience || null,
      decisionScenario: enriched.np?.decisionScenario || null,
      faqs: enriched.np?.faqs || []
    }
  };
}

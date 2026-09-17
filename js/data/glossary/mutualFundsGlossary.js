// ==============================================
// risePaisa - Mutual Funds Glossary Module
// Production-grade financial encyclopedia entries for Nepal
// ==============================================

export const MUTUAL_FUNDS_GLOSSARY = [
  // 1. SIP
  {
    slug: 'sip',
    term: 'SIP (Systematic Investment Plan)',
    termNp: 'व्यवस्थित लगानी योजना (SIP)',
    categorySlug: 'mutual-funds',
    categoryName: { en: 'Mutual Funds', np: 'म्युचुअल फण्ड' },
    letter: 'S',
    abbreviation: 'SIP',
    synonyms: ['Systematic Investment Plan', 'Monthly Mutual Fund', 'एसआईपी', 'नियमित लगानी योजना'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Systematic Investment Plan (SIP) is an investment vehicle that allows an investor to contribute a fixed sum of money at regular intervals into a mutual fund scheme, harnessing rupee-cost averaging and compounding.',
      np: 'व्यवस्थित लगानी योजना (SIP) भनेको निश्चित समयावधि (प्रायः मासिक) मा तोकिएको निश्चित रकम खुलामुखी सामूहिक लगानी कोष (Open-Ended Mutual Fund) मा नियमित लगानी गर्दै औसत लागत लाभ र चक्रवर्ती वृद्धि हासिल गर्ने आधुनिक वित्तीय विधि हो।'
    },
    detailedExplanation: {
      en: 'Instead of attempting the nearly impossible task of timing the volatile swings of the stock market, an investor commits to investing a predetermined sum (such as NPR 1,000, NPR 5,000, or NPR 10,000) every month. This discipline automates the wealth-building process through "Rupee-Cost Averaging": when NEPSE falls, the fund’s Net Asset Value (NAV) drops, automatically purchasing more units with your fixed installment. When NEPSE rises, your fixed installment buys fewer units at higher valuations. Over decades, this mathematical mechanism eliminates emotional market anxiety, lowers the average acquisition cost per unit, and generates exponential compound growth.',
      np: 'सेयर बजार कहिले घट्छ र कहिले बढ्छ भनी अनुमान लगाउनुको सट्टा महिनाको तोकिएको दिन निश्चित रकम (जस्तै रु. १,०००, रु. ५,००० वा रु. १०,०००) निरन्तर खुलामुखी म्युचुअल फण्डमा लगानी गर्ने प्रक्रिया नै एसआईपी हो। यसले "औसत लागत लाभ" (Rupee-Cost Averaging) को सिद्धान्तमा काम गर्छ: जब सेयर बजार घट्छ, फण्डको प्रति इकाइ मूल्य (NAV) सस्तो भई सोही रकमबाट धेरै इकाइहरू खरिद हुन्छन्। जब बजार बढ्छ, थोरै इकाइ खरिद हुन्छन्। वर्षौंसम्म यो नियम पालना गर्दा औसत खरिद मूल्य निकै सस्तो पर्न जान्छ र चक्रवर्ती ब्याजको लाभले ठूलो पुँजी निर्माण हुन्छ।'
    },
    whyItMatters: {
      en: 'Most retail investors fail in the stock market because human psychology drives them to buy at euphoric market tops and panic-sell during bear market crashes. SIP removes human emotion and market timing entirely. By converting disciplined monthly savings into a diversified basket of Nepal\'s top businesses, an ordinary salaried individual can build a massive retirement corpus effortlessly.',
      np: 'धेरैजसो साधारण लगानीकर्ता सेयर बजारमा असफल हुनुको कारण बजार बढेको बेला लोभिएर महँगोमा किन्नु र बजार घट्दा डराएर घाटामा बेच्नु हो। एसआईपीले मानवीय भावना र बजारको अनुमानलाई पूर्ण रूपमा हटाउँछ। मासिक रूपमा सानो बचतलाई स्वचालित रूपमा लगानीमा ढालेर जोसुकै जागिरे नागरिकले पनि अवकाशका लागि करोडौंको पुँजी सजिलै बनाउन सक्छन्।'
    },
    howItWorks: {
      summary: {
        en: 'The operational mechanics of a Systematic Investment Plan follow 4 structured stages:',
        np: 'एसआईपी लगानी प्रक्रिया ४ वटा स्वचालित चरणहरूमा निरन्तर चलिरहन्छ:'
      },
      steps: [
        {
          title: { en: '1. Fund Scheme Selection', np: '१. खुलामुखी फण्ड छनोट' },
          desc: { en: 'Select a licensed open-ended mutual fund scheme in Nepal (e.g. NIBL Sahabhagita Fund, Siddhartha Systematic Investment Scheme, NIC Asia Dynamic Debt Fund).', np: 'नेपालका इजाजतप्राप्त खुलामुखी म्युचुअल फण्डहरू (जस्तै एनआईबिएल सहभागिता फण्ड, सिद्धार्थ सिस्टेमेटिक, एनआईसी एसिया डाइनामिक आदि) मध्ये कुनै एक छनोट गरिन्छ।' }
        },
        {
          title: { en: '2. Registration & Mandate Setup', np: '२. दर्ता र स्थायी निर्देशन (e-Mandate)' },
          desc: { en: 'Register online with your Demat BOID, specify monthly installment amount, choose tenure (5 to 30 years), and set up automated bank debits via ConnectIPS.', np: 'मेरोसेयर बीओआईडी प्रयोग गरी मासिक किस्ता रकम र अवधि तोकेर कनेक्टआईपीएस वा बैंक खातामार्फत स्वचालित भुक्तानीको स्थायी निर्देशन दिइन्छ।' }
        },
        {
          title: { en: '3. Automated Monthly Execution', np: '३. मासिक इकाइ खरिद' },
          desc: { en: 'On your selected date each month, the fixed installment is deducted and units are allotted at that day\'s declared closing Net Asset Value (NAV).', np: 'प्रत्येक महिना तोकिएको मितिमा बैंकबाट रकम कट्टी भई सोही दिनको खुद सम्पत्ति मूल्य (NAV) का आधारमा इकाइहरू डिम्याट खातामा दाखिला हुन्छन्।' }
        },
        {
          title: { en: '4. Dividend Reinvestment (DREP)', np: '४. लाभांश पुनःलगानी (DREP)' },
          desc: { en: 'Enrolling in the Dividend Reinvestment Plan (DREP) automatically converts annual cash dividends into bonus units, compounding capital exponentially.', np: 'लाभांश पुनःलगानी योजना (DREP) छनोट गरेमा फण्डले दिने वार्षिक लाभांशबाट स्वतः थप इकाइ खरिद भई पुँजी चक्रवर्ती रूपमा बढ्दछ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Open-ended mutual fund portals managed by merchant capitals in Nepal',
        'Long-term retirement wealth building and pension accumulation',
        'Child higher-education and marriage financial goals',
        'Automated payroll savings deductions'
      ],
      np: [
        'नेपालका क्यापिटलहरूद्वारा सञ्चालित खुलामुखी म्युचुअल फण्ड पोर्टलहरूमा',
        'दीर्घकालीन अवकाश योजना र पेन्सन कोष निर्माणमा',
        'छोराछोरीको उच्च शिक्षा र भविष्यको वित्तीय लक्ष्य पूरा गर्न',
        'मासिक तलबबाट स्वचालित रूपमा बचत गरी लगानी गर्ने बानी बसाल्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Rise of Open-Ended Mutual Funds & ConnectIPS Auto-Debits in Nepal',
        np: 'नेपालमा खुलामुखी म्युचुअल फण्ड र कनेक्टआईपीएसबाट स्वचालित एसआईपी'
      },
      body: {
        en: 'For decades, Nepal had only closed-ended mutual funds listed on NEPSE that matured and liquidated after 5 to 10 years. In 2019, SEBON modernized regulations to launch open-ended mutual funds with unlimited life horizons, introducing the SIP revolution. Today, over half a dozen open-ended schemes operate with tens of thousands of active monthly SIP registrations. Integrated with ConnectIPS and digital wallets (eSewa, Khalti), an investor can establish a completely automated monthly SIP starting from just NPR 1,000 without ever visiting a bank or signing physical paper instructions.',
        np: 'विगतमा नेपालमा नेप्सेमा सूचीकृत हुने बन्दमुखी फण्डहरू मात्र थिए, जसको अवधि ५ देखि १० वर्षमा सकिन्थ्यो। विसं २०७६ मा धितोपत्र बोर्डले खुलामुखी म्युचुअल फण्डसम्बन्धी कानुनी व्यवस्था गरेपछि नेपालमा एसआईपीको नयाँ युग सुरु भयो। आज हजारौं नेपालीहरूले मासिक रूपमा एसआईपी गरिरहेका छन्। कनेक्टआईपीएस र डिजिटल वालेटहरूसँग जोडिएकाले जोसुकैले पनि घरमै बसी मासिक मात्र रु. १,००० बाट पूर्ण स्वचालित एसआईपी सुरु गर्न सक्छन् र यसका लागि कुनै कागजी फारम भर्नु पर्दैन।'
      },
      keyPoints: {
        en: [
          'SIP is exclusively available on Open-Ended Mutual Funds in Nepal.',
          'Minimum monthly installment starts at just NPR 1,000.',
          'ConnectIPS enables 100% automated monthly bank deductions.',
          'Enrolling in DREP (Dividend Reinvestment) compounds growth tax-efficiently.'
        ],
        np: [
          'नेपालमा एसआईपी सुविधा खुलामुखी (Open-Ended) म्युचुअल फण्डहरूमा मात्र उपलब्ध छ।',
          'न्यूनतम मासिक किस्ता जम्मा रु. १,००० बाट सुरु गर्न सकिन्छ।',
          'कनेक्टआईपीएसको e-Mandate मार्फत हरेक महिना बैंकबाट स्वतः किस्ता काटिने सुविधा छ।',
          'DREP (लाभांश पुनःलगानी) छनोट गर्दा लाभांशबाट स्वतः नयाँ इकाइ थपिएर चक्रवर्ती वृद्धि हुन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Sunil, aged 25, starts an SIP of NPR 5,000 per month into an open-ended equity mutual fund scheme in Nepal. Over 20 years, his out-of-pocket investment totals NPR 1,200,000 (NPR 5,000 * 240 months). Assuming the fund delivers an annualized compound return of 13% (consistent with long-term Nepal equity market averages) and Sunil reinvests all cash dividends via DREP, his total accumulated portfolio value after 20 years surpasses NPR 5,720,000! His wealth grew by nearly NPR 4,520,000 purely through compound interest and rupee-cost averaging.',
        np: '२५ वर्षीय सुनिलले मासिक रु. ५,००० नेपालको एउटा खुलामुखी म्युचुअल फण्डमा एसआईपी सुरु गर्छन्। २० वर्षको अवधिमा उनले आफ्नो खल्तीबाट कुल रु. १२,००,००० (५,००० * २४० महिना) लगानी गर्छन्। यदि उक्त फण्डले वार्षिक १३% को औसत चक्रवर्ती प्रतिफल दियो र सुनिलले सबै लाभांश पुनःलगानी (DREP) गरे भने २० वर्षपछि उनको कोष बढेर रु. ५७,२०,००० भन्दा बढी पुग्छ! उनले हालेको १२ लाखमा झण्डै साढे ४५ लाख रुपैयाँ केवल चक्रवर्ती ब्याजको चमत्कारले थपियो।'
      },
      takeaway: {
        en: 'The true secret of SIP is not market timing or massive wealth; it is starting early, remaining disciplined through market crashes, and letting compound interest do the heavy lifting.',
        np: 'एसआईपीको वास्तविक शक्ति बजारको भाउ अनुमान गर्नुमा होइन; समयमै सानो रकमबाट सुरु गरेर बजार घट्दा पनि नआत्तिई निरन्तर लगानी गरिरहनुमा छ।'
      }
    },
    formula: {
      equation: 'FV = P * [((1 + r)^n - 1) / r] * (1 + r)',
      explanation: {
        en: 'Future Value of an Annuity formula: P is monthly installment, r is monthly interest rate (annual return / 12), and n is total number of monthly payments.',
        np: 'भविष्यको कुल मूल्य (FV) निकाल्ने सूत्र: P भनेको मासिक किस्ता, r भनेको मासिक ब्याजदर (वार्षिक दर / १२) र n भनेको कुल महिना संख्या।'
      },
      variables: [
        { symbol: 'P', label: { en: 'Monthly fixed investment installment', np: 'मासिक नियमित किस्ता रकम' } },
        { symbol: 'r', label: { en: 'Periodic monthly interest rate (Annual % / 1200)', np: 'मासिक प्रतिफल दर' } },
        { symbol: 'n', label: { en: 'Total number of monthly installments', np: 'कुल किस्ता संख्या (महिनामा)' } }
      ],
      example: {
        scenario: {
          en: 'Investing NPR 2,000 monthly for 10 years (120 months) at an assumed 12% annual return.',
          np: 'मासिक रु. २,००० का दरले १० वर्ष (१२० महिना) सम्म वार्षिक १२% प्रतिफलमा लगानी गर्दा।'
        },
        calculation: {
          en: 'P = 2,000, r = 0.01 (12%/12), n = 120. FV = 2000 * [((1.01)^120 - 1) / 0.01] * 1.01 = NPR 464,678.',
          np: 'P = २,०००, r = ०.०१, n = १२०। कुल मूल्य = २,००० * [((१.०१)^१२० - १) / ०.०१] * १.०१ = रु. ४,६४,६७८।'
        },
        result: {
          en: 'NPR 464,678 Accumulated Wealth (from NPR 240,000 invested)',
          np: 'रु. ४,६४,६७८ कुल पुँजी (लगानी जम्मा रु. २,४०,०००)'
        }
      }
    },
    advantages: {
      en: [
        'Automates disciplined savings, removing destructive human emotions from investing',
        'Rupee-cost averaging automatically acquires more fund units when market prices crash',
        'Extremely accessible: start building an investment portfolio with just NPR 1,000 monthly',
        'DREP dividend reinvestment magnifies long-term compound growth tax-efficiently'
      ],
      np: [
        'लगानीमा अनुशासन कायम गर्छ र डर तथा लोभजस्ता भावनात्मक कमजोरीहरूलाई हटाउँछ',
        'बजार घटेको बेला औसत लागत लाभ (Rupee-cost averaging) का कारण स्वतः धेरै इकाइ किन्न पाइन्छ',
        'अत्यन्तै सहज: मासिक जम्मा रु. १,००० को सानो बचतबाटै सुरु गर्न सकिने',
        'लाभांश पुनःलगानी (DREP) मार्फत चक्रवर्ती ब्याजको अधिकतम लाभ लिन सकिने'
      ]
    },
    limitations: {
      en: [
        'Equity mutual funds carry market risk; returns fluctuate with underlying NEPSE market cycles',
        'Does not generate quick overnight riches; requires 7 to 15 years of continuous patience',
        'Missing consecutive monthly auto-debits may lead to scheme pause or cancellation',
        'Exit load fees (typically 0.5%-1.5%) apply if units are redeemed within the first year'
      ],
      np: [
        'सेयरमा आधारित फण्ड भएकाले नेप्से घट्दा अल्पकालीन रूपमा पोर्टफोलियोको मूल्य घट्न सक्छ',
        'यसबाट रातारात धनी बन्न सकिँदैन; वास्तविक प्रतिफल देखिन कम्तीमा ७ देखि १५ वर्ष कुर्नुपर्छ',
        'बैंक खातामा पैसा नभएर लगातार किस्ता काटिन रोकिएमा एसआईपी स्वतः निष्क्रिय हुन सक्छ',
        'किनेको एक वर्षभित्र इकाइ फिर्ता (Redeem) गर्दा ०.५% देखि १.५% सम्म एक्जिट लोड शुल्क लाग्छ'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'You should pause or stop your SIP whenever the NEPSE stock market is crashing.',
          np: 'सेयर बजार घट्न थालेपछि घाटाबाट बच्न तुरुन्तै एसआईपी रोक्नुपर्छ।'
        },
        reality: {
          en: 'A falling market is actually the golden period for an SIP! When the market drops, your fixed installment buys units at deep discounts, which skyrocket your profits when the market recovers.',
          np: 'बजार घट्नु नै एसआईपीका लागि सबैभन्दा ठूलो अवसर हो! बजार घट्दा फण्डको एनएभी सस्तो हुन्छ र सोही किस्ताबाट धेरै इकाइ जम्मा हुन्छन्, जसले पछि बजार बढ्दा अत्यधिक नाफा दिन्छ।'
        }
      },
      {
        myth: {
          en: 'SIP is a separate company or government product with guaranteed fixed returns.',
          np: 'एसआईपी कुनै छुट्टै वित्तीय कम्पनी वा निश्चित ब्याज दिने सरकारी योजना हो।'
        },
        reality: {
          en: 'SIP is simply a regular investment method for mutual funds. The underlying fund invests in NEPSE stocks and bonds, so returns are market-linked, not guaranteed fixed interest.',
          np: 'एसआईपी भनेको खुलामुखी म्युचुअल फण्डमा किस्ताबन्दीमा लगानी गर्ने तरिका मात्र हो। यसको पैसा सेयर र ऋणपत्रमा लगानी हुने भएकाले यसको प्रतिफल बजारको कार्यसम्पादनसँग जोडिन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'SIP (Systematic Investment Plan) vs Lump-Sum Investment', np: 'एसआईपी (किस्ताबन्दी) र एकमुष्ट लगानी (Lump-Sum) को तुलना' },
      subtitle: { en: 'Disciplined periodic averaging vs single upfront capital deployment', np: 'नियमित औसत लागतमा लगानी र एकैपटक ठूलो पुँजी खन्याउने बीचको भिन्नता' },
      featureHeader: { en: 'Feature', np: 'विशेषता' },
      colA: { en: 'SIP (Systematic Plan)', np: 'एसआईपी (मासिक किस्ता)' },
      colB: { en: 'Lump-Sum Investment', np: 'एकमुष्ट लगानी (Lump-Sum)' },
      rows: [
        {
          feature: { en: 'Capital Requirement', np: 'पुँजीको आवश्यकता' },
          valA: { en: 'Small periodic savings (starts at NPR 1,000/month)', np: 'सानो नियमित बचत (मासिक रु. १,००० बाटै सुरु)' },
          valB: { en: 'Large upfront cash reserve required at once', np: 'एकैपटक ठूलो रकम (लाखौं रुपैयाँ) आवश्यक पर्ने' }
        },
        {
          feature: { en: 'Market Timing Risk', np: 'बजार अनुमानको जोखिम' },
          valA: { en: 'Zero risk; averages cost across highs and lows', np: 'शून्य जोखिम; बजार घटे पनि बढे पनि औसत लागत मिल्ने' },
          valB: { en: 'Severe risk; buying at a market peak causes huge drawdowns', np: 'उच्च जोखिम; झुक्किएर बजारको उच्च विन्दुमा किनेमा ठूलो नोक्सानी' }
        },
        {
          feature: { en: 'Ideal For', np: 'कसका लागि उत्तम' },
          valA: { en: 'Salaried professionals and beginners building wealth', np: 'नियमित मासिक तलब हुने जागिरे र नयाँ लगानीकर्ता' },
          valB: { en: 'Experienced investors with large idle windfall capital', np: 'बजारको ज्ञान भएका र हातमा ठूलो नगद भएका अनुभवीहरू' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'nav', name: 'NAV', type: 'glossary' },
      { slug: 'expense-ratio', name: 'Expense Ratio', type: 'glossary' },
      { slug: 'cagr', name: 'CAGR', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Power of Systematic Investment Plans (SIP)', categorySlug: 'mutual-funds', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Complete Mutual Funds & SIP Guide', slug: 'complete-mutual-funds-guide' }
    ],
    relatedCalculators: [
      { name: 'SIP Investment Growth Calculator', slug: 'sip', desc: 'Calculate the compound future value of your monthly SIP in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'Can I increase, decrease, or modify my monthly SIP installment amount?', np: 'के मैले आफ्नो मासिक एसआईपी रकम पछि थपघट गर्न मिल्छ?' },
        a: {
          en: 'Yes. Most open-ended mutual funds in Nepal allow you to modify your SIP amount, register top-up installments, or start an additional parallel SIP scheme online through their merchant capital portal.',
          np: 'मिल्छ। नेपालका अधिकांश खुलामुखी फण्डहरूमा आफ्नो अनलाइन पोर्टलबाटै मासिक किस्ता रकम बढाउन, घटाउन वा एकमुष्ट थप रकम (Top-up) जम्मा गर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'What happens if I miss a monthly SIP payment due to low bank balance?', np: 'बैंकमा पैसा नभएर कुनै महिना एसआईपीको किस्ता काटिएन भने के हुन्छ?' },
        a: {
          en: 'Missing an installment does not penalize you or cancel your existing units. The fund simply skips unit purchase for that month. However, missing three consecutive months may lead to automatic suspension of the SIP mandate.',
          np: 'कुनै महिना किस्ता काटिएन भन्दैमा पहिले जम्मा भइसकेको सेयर खारेज हुँदैन र कुनै जरिवाना लाग्दैन। उक्त महिना नयाँ इकाइ थपिँदैन। तर लगातार ३ महिनासम्म किस्ता नतिरेमा एसआईपी स्वतः स्थगित हुन सक्छ।'
        }
      },
      {
        q: { en: 'How do I redeem or withdraw my money from an open-ended SIP in Nepal?', np: 'नेपालमा एसआईपीबाट आफ्नो पैसा कसरी फिर्ता झिक्ने?' },
        a: {
          en: 'Log in to the mutual fund capital’s portal, navigate to "Unit Redemption", enter the number of units you wish to cash out, and submit. The fund will compute net proceeds based on that day’s NAV (deducting exit loads and CGT) and deposit funds into your bank account within T+2 to T+4 days.',
          np: 'सम्बन्धित क्यापिटलको वेबसाइटमा लगइन गरी "Unit Redemption" मा जाने, कति इकाइ बेच्ने हो उल्लेख गरी आवेदन दिने। सोही दिनको NAV अनुसार लाग्ने कर र एक्जिट लोड कटाएर २ देखि ४ दिनभित्र पैसा बैंक खातामा जम्मा हुन्छ।'
        }
      },
      {
        q: { en: 'What is Dividend Reinvestment Plan (DREP) in an SIP?', np: 'एसआईपीमा लाभांश पुनःलगानी योजना (DREP) भनेको के हो?' },
        a: {
          en: 'DREP is a feature where the annual cash dividends declared by the fund are not credited to your bank account; instead, they are automatically used to purchase additional fund units at NAV without any entry load, compounding your wealth much faster.',
          np: 'DREP भनेको फण्डले दिने नगद लाभांश बैंकमा नलिई सोही रकमबाट स्वतः थप इकाइ किनेर खातामा जोड्ने सुविधा हो। यसले कुनै अतिरिक्त शुल्क बिना नै लगानीको चक्रवर्ती वृद्धिलाई तीव्र बनाउँछ।'
        }
      }
    ],
    summary: {
      en: [
        'An SIP automates investing by putting a fixed sum of money into an open-ended fund each month.',
        'Rupee-cost averaging automatically lowers your average cost per unit during market downturns.',
        'Starts from just NPR 1,000 monthly and can be fully automated using ConnectIPS e-Mandate.',
        'Enrolling in DREP accelerates compound returns over multi-decade time horizons.'
      ],
      np: [
        'एसआईपीले हरेक महिना निश्चित रकम खुलामुखी म्युचुअल फण्डमा हालेर स्वचालित रूपमा पुँजी वृद्धि गर्छ।',
        'बजार घटेको बेला औसत लागत लाभका कारण स्वतः धेरै इकाइ खरिद भई औसत लागत सस्तो हुन्छ।',
        'मासिक मात्र रु. १,००० बाट सुरु गरी कनेक्टआईपीएसमार्फत पूर्ण स्वचालित बनाउन सकिन्छ।',
        'DREP मार्फत लाभांश पुनःलगानी गर्दा दशकौंसम्म चक्रवर्ती ब्याजको चामत्कारिक लाभ लिन सकिन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The Power of Systematic Investment Plans', type: 'Lesson', url: '/learn/mutual-funds/what-is-investing' },
      { title: 'Mutual Funds Guide', type: 'Guide', url: '/learn/guides/complete-mutual-funds-guide' }
    ],
    meta: {
      title: 'What is SIP in Nepal? Systematic Investment Plan Guide | risePaisa',
      description: 'Master SIP (Systematic Investment Plan) in Nepal. Learn how open-ended mutual funds work, ConnectIPS automation, rupee-cost averaging, and DREP compounding.'
    }
  },

  // 2. NAV
  {
    slug: 'nav',
    term: 'NAV (Net Asset Value)',
    termNp: 'प्रति इकाइ खुद सम्पत्ति मूल्य (NAV)',
    categorySlug: 'mutual-funds',
    categoryName: { en: 'Mutual Funds', np: 'म्युचुअल फण्ड' },
    letter: 'N',
    abbreviation: 'NAV',
    synonyms: ['Net Asset Value', 'Book Value per Unit', 'एनएभी', 'खुद सम्पत्ति मूल्य'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'Net Asset Value (NAV) represents the per-share intrinsic book value of a mutual fund scheme, calculated by subtracting total liabilities from total assets and dividing by the number of outstanding units.',
      np: 'प्रति इकाइ खुद सम्पत्ति मूल्य (NAV) भनेको सामूहिक लगानी कोष (Mutual Fund) को कुल सम्पत्तिबाट सम्पूर्ण दायित्व घटाएर बाँकी रहेको खुद पुँजीलाई कुल इकाइ संख्याले भाग गर्दा आउने प्रति इकाइ वास्तविक मूल्य हो।'
    },
    detailedExplanation: {
      en: 'Just as a publicly listed stock on NEPSE has a market price per share, a mutual fund has a Net Asset Value (NAV) per unit. A mutual fund scheme collects capital from thousands of investors and deploys it across a diversified portfolio of listed equities, debentures, government treasury bills, and bank fixed deposits. At the end of every trading day (for open-ended funds) or weekly/monthly (for closed-ended funds), the fund manager tallies the closing market valuation of all holdings, adds accrued interest and cash, subtracts accrued management fees and liabilities, and divides by total outstanding units to establish the exact NAV.',
      np: 'जसरी नेप्सेमा सूचीकृत कम्पनीको सेयरको बजार मूल्य हुन्छ, त्यसरी नै म्युचुअल फण्डको प्रति इकाइ वास्तविक मूल्यलाई एनएभी (NAV) भनिन्छ। फण्डले संकलन गरेको रकम विभिन्न कम्पनीका सेयर, ऋणपत्र, ट्रेजरी बिल र मुद्दती निक्षेपमा लगानी गरिएको हुन्छ। हरेक कारोबार दिनको अन्त्यमा (खुलामुखी फण्डको हकमा) वा हप्ता/महिनामा (बन्दमुखी फण्डको हकमा) फण्ड व्यवस्थापकले सबै सम्पत्तिको बजार भाउ जोडेर, त्यसमा पाउनुपर्ने ब्याज र नगद थपेर, तिर्नुपर्ने व्यवस्थापन खर्च कटाएर बाँकी रकमलाई कुल इकाइले भाग गरी आधिकारिक NAV निकाल्छन्।'
    },
    whyItMatters: {
      en: 'NAV is the transparent legal pricing mechanism for mutual fund transactions. For open-ended schemes, you buy and redeem units strictly at the declared NAV. For closed-ended schemes trading on NEPSE, comparing the secondary market price against the intrinsic NAV reveals whether a fund is trading at an attractive bargain discount or an overpriced premium.',
      np: 'म्युचुअल फण्डमा किनबेच गर्दा NAV नै सबैभन्दा भरपर्दो र कानुनी आधार मूल्य हो। खुलामुखी फण्डमा इकाइ किन्दा वा फिर्ता गर्दा सिधै NAV कै आधारमा कारोबार हुन्छ। बन्दमुखी फण्डमा भने दोस्रो बजारको भाउ र वास्तविक NAV तुलना गरेर फण्ड सस्तो (Discount) मा पाइँदैछ कि महँगो (Premium) मा छ भनी पत्ता लगाउन सकिन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The calculation and publication of Net Asset Value follows 4 standardized steps:',
        np: 'प्रति इकाइ खुद सम्पत्ति मूल्य (NAV) गणना र प्रकाशन ४ वटा चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Market Mark-to-Market (MTM)', np: '१. सम्पत्तिको बजार मूल्याङ्कन' },
          desc: { en: 'At market close (3:00 PM), every listed equity holding in the fund is revalued at NEPSE\'s official closing price.', np: 'दिउँसो ३:०० बजे बजार बन्द भएपछि फण्डसँग भएका सबै सेयरहरूलाई नेप्सेको अन्तिम कारोबार मूल्यका आधारमा मूल्याङ्कन गरिन्छ।' }
        },
        {
          title: { en: '2. Adding Accrued Income & Cash', np: '२. ब्याज, लाभांश र नगद थप' },
          desc: { en: 'Add cash held in commercial bank accounts, accrued interest from debentures/FDs, and approved receivables.', np: 'बैंकमा रहेको नगद मौज्दात, मुद्दती निक्षेप र डिबेन्चरबाट पाउनुपर्ने ब्याज तथा लाभांशलाई सम्पत्तिमा जोडिन्छ।' }
        },
        {
          title: { en: '3. Deducting Accrued Liabilities', np: '३. दायित्व र खर्च कट्टा' },
          desc: { en: 'Subtract scheme operating expenses, SEBON regulatory fees, and accrued management fees due to the asset manager and fund supervisor.', np: 'फण्ड व्यवस्थापकको शुल्क, डिपोजिटरी शुल्क, धितोपत्र बोर्ड लेभी र अन्य प्रशासनिक खर्चहरू घटाइन्छ।' }
        },
        {
          title: { en: '4. Per-Unit Division & Publication', np: '४. प्रति इकाइ विभाजन र प्रकाशन' },
          desc: { en: 'Divide the net asset balance by total issued units. Publish the verified NAV publicly on the fund manager\'s portal.', np: 'बाँकी खुद सम्पत्तिलाई कुल इकाइ संख्याले भाग गरी आएको आधिकारिक NAV वेबसाइट र राष्ट्रिय पत्रिकाहरूमा प्रकाशित गरिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Pricing open-ended mutual fund purchases and redemptions',
        'Evaluating closed-ended mutual fund discounts and premiums on NEPSE',
        'Daily and monthly performance factsheets submitted to SEBON',
        'Calculating fund manager performance incentives'
      ],
      np: [
        'खुलामुखी म्युचुअल फण्डका इकाइहरू खरिद र बिक्री गर्दा मूल्य निर्धारण गर्न',
        'नेप्सेमा बन्दमुखी फण्डहरू छुट (Discount) मा छन् कि प्रिमियममा भनी जाँच्न',
        'धितोपत्र बोर्डमा बुझाइने दैनिक तथा मासिक वित्तीय विवरणहरूमा',
        'फण्ड व्यवस्थापकहरूको कार्यसम्पादन मूल्याङ्कन गर्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Discount Phenomenon of Closed-Ended Mutual Funds on NEPSE',
        np: 'नेप्सेमा बन्दमुखी म्युचुअल फण्डहरू छुट (Discount) मा कारोबार हुने अवस्था'
      },
      body: {
        en: 'In Nepal, an intriguing market anomaly frequently occurs with closed-ended mutual funds listed on NEPSE. Many closed-ended funds with an intrinsic Net Asset Value (NAV) of NPR 12.00 to NPR 14.00 trade on the secondary stock market at a steep 15% to 25% discount-often selling for NPR 9.50 to NPR 11.00 per unit! Savvy value investors exploit this discount: by purchasing closed-ended units at NPR 10.00 when the underlying portfolio is worth NPR 12.50, they acquire high-grade commercial bank and hydropower shares at an effective 20% discount to real market prices.',
        np: 'नेपालको सेयर बजारमा बन्दमुखी म्युचुअल फण्डहरूमा एउटा अनौठो अवसर देखिने गर्छ। वास्तविक प्रति इकाइ खुद सम्पत्ति मूल्य (NAV) रु. १२ देखि रु. १४ भएका धेरै फण्डहरू नेप्सेको दोस्रो बजारमा १५% देखि २५% सम्मको भारी छुट (Discount) मा प्रति इकाइ रु. ९.५० देखि रु. ११ मा किनबेच भइरहेका हुन्छन्! चतुर लगानीकर्ताहरूले यसको फाइदा उठाउँछन्: रु. १२.५० को सम्पत्तिलाई दोस्रो बजारबाट रु. १० मा किनेर उनीहरूले देशका उत्कृष्ट कम्पनीहरूको सेयरमा २०% सस्तोमै स्वामित्व प्राप्त गर्दछन्।'
      },
      keyPoints: {
        en: [
          'Open-ended funds transact exclusively at daily declared closing NAV.',
          'Closed-ended funds trade on NEPSE, often at a 10%-25% discount to NAV.',
          'Face value of all mutual fund units in Nepal starts at NPR 10 per unit.',
          'SEBON requires open-ended funds to publish updated NAV daily.'
        ],
        np: [
          'खुलामुखी फण्डहरूमा दैनिक घोषित NAV कै आधारमा मात्र इकाइ किनबेच हुन्छ।',
          'बन्दमुखी फण्डहरू नेप्सेमा कारोबार हुन्छन् र प्रायः NAV भन्दा १०% देखि २५% सस्तोमा पाइन्छन्।',
          'नेपालमा सबै म्युचुअल फण्ड इकाइहरूको सुरुवाती अंकित मूल्य प्रति इकाइ रु. १० हुन्छ।',
          'धितोपत्र बोर्डको नियम अनुसार खुलामुखी फण्डहरूले हरेक दिन आफ्नो NAV सार्वजनिक गर्नुपर्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'An open-ended mutual fund in Nepal holds a portfolio of listed equities valued at NPR 1,200,000,000, bank fixed deposits and cash of NPR 350,000,000, and accrued interest receivables of NPR 50,000,000 (Total Assets = NPR 1,600,000,000). The fund has total operational liabilities and accrued management fees of NPR 100,000,000. Total Net Assets equal NPR 1,500,000,000. The fund has 100,000,000 outstanding units issued to investors. The calculated NAV is: NPR 1,500,000,000 / 100,000,000 = NPR 15.00 per unit. An investor redeeming 1,000 units receives exactly NPR 15,000 (minus statutory taxes and exit fees).',
        np: 'नेपालको एउटा खुलामुखी म्युचुअल फण्डसँग नेप्सेमा रु. १ अर्ब २० करोड बराबरको सेयर, बैंक मुद्दती र नगद रु. ३५ करोड, र पाउनुपर्ने ब्याज रु. ५ करोड छ (कुल सम्पत्ति = रु. १ अर्ब ६० करोड)। फण्डको तिर्नुपर्ने व्यवस्थापन खर्च र दायित्व रु. १० करोड छ। यसरी खुद सम्पत्ति रु. १ अर्ब ५० करोड कायम हुन्छ। फण्डका सर्वसाधारणमा जारी कुल इकाइ संख्या १० करोड छ। अब NAV हिसाब गर्दा: रु. १ अर्ब ५० करोड / १० करोड इकाइ = रु. १५.०० प्रति इकाइ। यदि कुनै लगानीकर्ताले १,००० इकाइ फिर्ता गर्छ भने उसले सोही दिनको १५ रुपैयाँका दरले रु. १५,००० प्राप्त गर्छ।'
      },
      takeaway: {
        en: 'NAV reflects the unvarnished mathematical reality of a fund\'s assets, providing an objective benchmark free from speculative market hype.',
        np: 'NAV ले फण्डको वास्तविक सम्पत्तिको यथार्थ गणितीय मूल्य देखाउँछ, जसले बजारको हल्ला र सट्टेबाजीभन्दा बाहिर रहेर वास्तविक मूल्य जाँच्न मद्दत गर्छ।'
      }
    },
    formula: {
      equation: 'NAV = (Total Assets - Total Liabilities) / Total Outstanding Units',
      explanation: {
        en: 'Subtract total liabilities (accrued expenses, management fees, debt) from total assets (market value of stocks, cash, receivables), then divide by total units held by investors.',
        np: 'कुल सम्पत्ति (सेयरको बजार मूल्य, नगद र पाउनुपर्ने रकम) बाट कुल दायित्व (व्यवस्थापन खर्च र तिर्नुपर्ने रकम) घटाउने, र आएको खुद रकमलाई कुल इकाइ संख्याले भाग गर्ने।'
      },
      variables: [
        { symbol: 'Assets', label: { en: 'Market value of stocks, debentures, cash, and accrued interest', np: 'सेयरको हालको बजार मूल्य, नगद र पाउनुपर्ने ब्याज' } },
        { symbol: 'Liabilities', label: { en: 'Management fees, trustee charges, and operating dues', np: 'तिर्नुपर्ने व्यवस्थापन शुल्क, डिपोजिटरी खर्च र अन्य दायित्व' } },
        { symbol: 'Units', label: { en: 'Total active units owned by all investors', np: 'लगानीकर्ताहरूसँग रहेको कुल इकाइ संख्या' } }
      ],
      example: {
        scenario: {
          en: 'A fund holds NPR 55,000,000 in assets and NPR 5,000,000 in liabilities with 4,000,000 units issued.',
          np: 'एउटा फण्डसँग रु. ५ करोड ५० लाख सम्पत्ति र रु. ५० लाख दायित्व छ भने कुल इकाइ ४० लाख छ।'
        },
        calculation: {
          en: 'NAV = (55,000,000 - 5,000,000) / 4,000,000 = 50,000,000 / 4,000,000 = NPR 12.50.',
          np: 'NAV = (५,५०,००,००० - ५०,००,०००) / ४०,००,००० = ५,००,००,००० / ४०,००,००० = रु. १२.५०।'
        },
        result: {
          en: 'NPR 12.50 Net Asset Value per Unit',
          np: 'रु. १२.५० प्रति इकाइ खुद सम्पत्ति मूल्य'
        }
      }
    },
    advantages: {
      en: [
        'Guarantees fair, transparent pricing based on verified audited market valuations',
        'Updated daily for open-ended funds, ensuring fair entry and exit for SIP investors',
        'Helps identify heavily discounted closed-ended bargain opportunities on NEPSE',
        'Audited and overseen by independent fund supervisors and trustee banks'
      ],
      np: [
        'धितोपत्र बजारको वास्तविक मूल्याङ्कनका आधारमा निष्पक्ष र पारदर्शी मूल्य निर्धारण गर्छ',
        'खुलामुखी फण्डहरूमा दैनिक अद्यावधिक हुने भएकाले एसआईपी लगानीकर्तालाई न्यायोचित मूल्य मिल्छ',
        'नेप्सेमा वास्तविक मूल्यभन्दा निकै सस्तोमा पाइएका बन्दमुखी फण्डहरू पहिचान गर्न सघाउँछ',
        'स्वतन्त्र कोष सुपरीवेक्षक (Fund Supervisors) द्वारा कडा निगरानी र अडिट हुने'
      ]
    },
    limitations: {
      en: [
        'NAV fluctuates daily in response to underlying NEPSE stock market drawdowns',
        'Does not reflect intraday price swings; computed only after market closes',
        'Closed-ended funds on NEPSE can remain stuck at heavy discounts for years',
        'Management fees and operating expenses gradually erode gross asset returns'
      ],
      np: [
        'नेप्सेमा सूचीकृत सेयरहरूको भाउ घट्दा फण्डको NAV पनि सोही अनुसार घट्ने गर्छ',
        'दिनभरको उतारचढाव देखाउँदैन; बजार बन्द भएपछि दिनको एकपटक मात्र गणना हुन्छ',
        'बन्दमुखी फण्डहरू लामो समयसम्म NAV भन्दा धेरै सस्तो छुटमै अल्झिरहन सक्ने समस्या',
        'व्यवस्थापन खर्च र शुल्कहरूले समग्र सम्पत्तिको प्रतिफललाई केही मात्रामा घटाउने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'A mutual fund with an NAV of NPR 10 is automatically "cheaper" and better than one with an NAV of NPR 20.',
          np: '१० रुपैयाँ NAV भएको म्युचुअल फण्ड २० रुपैयाँ NAV भएको भन्दा सस्तो र धेरै राम्रो हुन्छ।'
        },
        reality: {
          en: 'NAV simply reflects past asset accumulation divided by units. An NAV of NPR 20 means the fund compounded investor money successfully over years; an NAV of NPR 10 may just be a brand-new or struggling fund.',
          np: 'NAV भनेको कुल सम्पत्तिलाई इकाइले भाग गर्दा आउने गणित मात्र हो। २० रुपैयाँ NAV भएको फण्डले वर्षौंदेखि राम्रो नाफा कमाएको प्रमाण हो भने १० रुपैयाँ भएको फण्ड भर्खर सुरु भएको वा कमजोर हुन सक्छ।'
        }
      },
      {
        myth: {
          en: 'Closed-ended mutual funds always trade exactly at their NAV on NEPSE.',
          np: 'नेप्सेमा बन्दमुखी म्युचुअल फण्डको दोस्रो बजार भाउ सधैं त्यसको NAV जति नै हुन्छ।'
        },
        reality: {
          en: 'Closed-ended funds trade on supply and demand on NEPSE, frequently trading 15% to 25% below their intrinsic NAV (at a discount).',
          np: 'बन्दमुखी फण्डको भाउ बजारको माग र आपूर्तिमा भर पर्छ। नेप्सेमा यिनीहरू प्रायः आफ्नो वास्तविक NAV भन्दा १५% देखि २५% सम्म सस्तो छुटमा कारोबार भइरहेका हुन्छन्।'
        }
      }
    ],
    comparison: {
      title: { en: 'Mutual Fund NAV vs Individual Company Stock Price', np: 'म्युचुअल फण्डको NAV र साधारण सेयरको बजार मूल्य बीचको तुलना' },
      subtitle: { en: 'Book value per unit of a diversified basket vs market-traded price of a single firm', np: 'विविधीकृत सम्पत्तिको वास्तविक मूल्य र एउटा कम्पनीको सेयर मूल्य बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Mutual Fund NAV', np: 'म्युचुअल फण्डको NAV' },
      colB: { en: 'Stock Market Price', np: 'सेयरको बजार मूल्य' },
      rows: [
        {
          feature: { en: 'Calculation Basis', np: 'मूल्याङ्कनको आधार' },
          valA: { en: 'Strict mathematical book value: (Assets - Liabilities) / Units', np: 'कडा गणितीय सूत्र: (कुल सम्पत्ति - दायित्व) / इकाइ' },
          valB: { en: 'Speculative market bidding between buyers and sellers on TMS', np: 'दोस्रो बजारमा खरिदकर्ता र बिक्रेता बीचको आपसी मोलमोलाइ' }
        },
        {
          feature: { en: 'Update Frequency', np: 'मूल्य परिवर्तनको समय' },
          valA: { en: 'Calculated once per day after market close', np: 'दिनभरको बजार बन्द भएपछि दिनको एकपटक मात्र' },
          valB: { en: 'Changes every second continuously between 11:00 AM and 3:00 PM', np: 'कारोबार समयभर प्रति सेकेन्ड लगातार घटबढ हुने' }
        },
        {
          feature: { en: 'Underlying Asset', np: 'पछिल्तिरको सम्पत्ति' },
          valA: { en: 'A basket of 30 to 60 diverse companies + cash/bonds', np: '३० देखि ६० वटा कम्पनीका सेयर, ऋणपत्र र बैंक मुद्दती' },
          valB: { en: 'A single individual commercial enterprise', np: 'एउटा मात्र व्यक्तिगत व्यावसायिक कम्पनी' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'sip', name: 'SIP', type: 'glossary' },
      { slug: 'expense-ratio', name: 'Expense Ratio', type: 'glossary' },
      { slug: 'portfolio', name: 'Portfolio', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'What is a Mutual Fund? Professional Management', categorySlug: 'mutual-funds', slug: 'what-is-a-mutual-fund' }
    ],
    relatedGuides: [
      { title: 'Complete Mutual Funds & SIP Guide', slug: 'complete-mutual-funds-guide' }
    ],
    relatedCalculators: [
      { name: 'Mutual Fund Return Calculator', slug: 'cagr', desc: 'Assess NAV growth and returns on mutual funds in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'Where can I check the daily NAV of open-ended mutual funds in Nepal?', np: 'नेपालमा खुलामुखी म्युचुअल फण्डको दैनिक NAV कहाँ हेर्न सकिन्छ?' },
        a: {
          en: 'You can view daily NAV updates directly on the official websites of the respective merchant capital managers (e.g. NIMB Ace Capital, Siddhartha Capital, NIC Asia Capital) or financial news portals like Sharesansar and Merolagani.',
          np: 'सम्बन्धित क्यापिटलहरूको आधिकारिक वेबसाइट (जस्तै एनआईएमबी एस क्यापिटल, सिद्धार्थ क्यापिटल आदि) वा सेयरसंसार र मेरोलगानीजस्ता वित्तीय समाचार पोर्टलहरूमा दैनिक NAV हेर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'What does it mean when a closed-ended fund trades at a "Discount"?', np: 'बन्दमुखी फण्ड "छुट" (Discount) मा कारोबार हुनु भनेको के हो?' },
        a: {
          en: 'Trading at a discount means the market price on NEPSE is lower than the actual intrinsic NAV. For instance, if NAV is NPR 12.00 but the stock trades on TMS at NPR 10.00, it is trading at a 16.7% discount, representing a potential bargain.',
          np: 'यसको अर्थ फण्डको वास्तविक सम्पत्ति (NAV) भन्दा नेप्से दोस्रो बजारमा सस्तो मूल्यमा सेयर पाइनु हो। जस्तै, NAV रु. १२ छ तर नेप्सेमा रु. १० मै किन्न पाइन्छ भने त्यो फण्ड १६.७% छुटमा छ भन्ने बुझिन्छ।'
        }
      },
      {
        q: { en: 'How often are mutual fund accounts audited in Nepal?', np: 'नेपालमा म्युचुअल फण्डहरूको अडिट कति समयमा हुन्छ?' },
        a: {
          en: 'Mutual funds publish unaudited monthly financial statements within 15 days of month-end. At the close of each fiscal year, an independent chartered accounting firm audits all assets, valuations, and expenses under SEBON supervision.',
          np: 'म्युचुअल फण्डहरूले हरेक महिना सकिएको १५ दिनभित्र मासिक वित्तीय विवरण सार्वजनिक गर्छन्। साथै आर्थिक वर्ष सकिएपछि स्वतन्त्र चार्टर्ड एकाउन्टेन्टमार्फत धितोपत्र बोर्डको नियम अनुसार पूर्ण वार्षिक अडिट गरिन्छ।'
        }
      },
      {
        q: { en: 'Can a mutual fund’s NAV drop below its par value of NPR 10?', np: 'के म्युचुअल फण्डको NAV सुरुवाती अंकित मूल्य रु. १० भन्दा तल झर्न सक्छ?' },
        a: {
          en: 'Yes. During severe multi-year bear markets where the general NEPSE index suffers steep declines, the market value of the fund’s underlying equity holdings can drop, dragging the NAV below NPR 10 (e.g. to NPR 8.50 or NPR 9.20).',
          np: 'सक्छ। यदि सेयर बजारमा लामो समयसम्म ठूलो मन्दी आयो भने फण्डले लगानी गरेका कम्पनीहरूको भाउ घट्न गई NAV रु. १० भन्दा तल (जस्तै रु. ८.५० वा रु. ९.२० मा) झर्न सक्छ।'
        }
      }
    ],
    summary: {
      en: [
        'NAV is the intrinsic per-unit book value of a mutual fund, calculated as net assets divided by total units.',
        'Open-ended funds transact exclusively at daily declared closing NAV.',
        'Closed-ended funds on NEPSE frequently trade at 10% to 25% discounts to their intrinsic NAV.',
        'NAV provides transparent, audited proof of actual portfolio valuation free from emotional speculation.'
      ],
      np: [
        'NAV म्युचुअल फण्डको प्रति इकाइ वास्तविक मूल्य हो, जुन खुद सम्पत्तिलाई कुल इकाइले भाग गरेर निकालिन्छ।',
        'खुलामुखी फण्डहरूमा दैनिक घोषित NAV कै आधारमा मात्र नयाँ इकाइ किनबेच र फिर्ता हुन्छ।',
        'नेप्सेमा बन्दमुखी फण्डहरू प्रायः आफ्नो वास्तविक NAV भन्दा १०% देखि २५% सम्म सस्तो छुटमा पाइन्छन्।',
        'यसले बजारको हल्लाभन्दा पर रहेर फण्डको वास्तविक सम्पत्तिको पारदर्शी मूल्याङ्कन देखाउँछ।'
      ]
    },
    whereSeen: [
      { title: 'What is a Mutual Fund?', type: 'Lesson', url: '/learn/mutual-funds/what-is-a-mutual-fund' },
      { title: 'Mutual Funds Guide', type: 'Guide', url: '/learn/guides/complete-mutual-funds-guide' }
    ],
    meta: {
      title: 'What is NAV (Net Asset Value)? Formula & Guide Nepal | risePaisa',
      description: 'Understand Net Asset Value (NAV) of mutual funds in Nepal. Learn how NAV is calculated daily, open-ended vs closed-ended pricing, and discounts on NEPSE.'
    }
  },

  // 3. EXPENSE RATIO
  {
    slug: 'expense-ratio',
    term: 'Expense Ratio (TER)',
    termNp: 'कुल खर्च अनुपात (Expense Ratio)',
    categorySlug: 'mutual-funds',
    categoryName: { en: 'Mutual Funds', np: 'म्युचुअल फण्ड' },
    letter: 'E',
    abbreviation: 'TER',
    synonyms: ['Total Expense Ratio', 'TER', 'व्यवस्थापन खर्च अनुपात', 'फण्ड सञ्चालन खर्च'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Expense Ratio (Total Expense Ratio / TER) is the annual percentage of a mutual fund’s total assets dedicated to paying for administrative, management, and operational costs.',
      np: 'कुल खर्च अनुपात (Expense Ratio / TER) भनेको कुनै सामूहिक लगानी कोष (Mutual Fund) ले आफ्नो कुल सम्पत्ति व्यवस्थापन गरे बापत लिने वार्षिक प्रशासनिक, व्यवस्थापकीय र सञ्चालन खर्चको प्रतिशत हो।'
    },
    detailedExplanation: {
      en: 'Managing a mutual fund requires professional portfolio managers, research analysts, legal compliance auditors, software infrastructure, and trustee oversight. To cover these operational expenditures, the fund management company deducts an annual percentage directly from the fund\'s assets before calculating the daily Net Asset Value (NAV). In Nepal, the Securities Board of Nepal (SEBON) enforces strict statutory caps on mutual fund expense ratios (typically capping total management and supervisor fees between 1.5% and 2.0% annually). Because this fee is subtracted automatically behind the scenes, the NAV published daily is already net of all management expenses.',
      np: 'म्युचुअल फण्ड सञ्चालन गर्न अनुभवी फण्ड म्यानेजर, वित्तीय विश्लेषक, अडिटर, सफ्टवेयर र कोष सुपरीवेक्षकहरूको आवश्यकता पर्छ। यी सबै प्रशासनिक र व्यवस्थापकीय खर्चहरू धान्नका लागि क्यापिटलले फण्डको कुल सम्पत्तिबाट वार्षिक रूपमा निश्चित प्रतिशत रकम काट्दछ। नेपालमा धितोपत्र बोर्ड (SEBON) ले सामूहिक लगानी कोष नियमावली २०६७ मार्फत यस्ता खर्चहरूमा कडा कानुनी सीमा (अधिकतम १.५% देखि २.०% सम्म) तोकेको छ। यो खर्च दैनिक NAV निकाल्नुअघि नै स्वतः काटिने भएकाले प्रकाशित हुने NAV सधैं खर्च कटाइसपछिको खुद मूल्य हुन्छ।'
    },
    whyItMatters: {
      en: 'The Expense Ratio silently eats into your compound wealth over long horizons. A fund charging 2.0% annually versus an efficient fund charging 1.0% might seem like a minor 1% difference, but over a 25-year investment period, that single percentage point can confiscate over 20% to 30% of your total potential retirement wealth! Monitoring expense ratios ensures your hard-earned money compounds for you, not the fund manager.',
      np: 'व्यवस्थापन खर्चले वर्षौंसम्म थाहै नपाई तपाईंको चक्रवर्ती पुँजीलाई भित्रभित्रै खाइरहेको हुन्छ। कुनै फण्डले वार्षिक २.०% शुल्क लिन्छ र अर्कोले १.०% मात्र लिन्छ भने बाहिर हेर्दा जम्मा १% को सामान्य अन्तर देखिन्छ। तर २५ वर्षको अवधिमा यही १% को फरकले गर्दा तपाईंको कुल पाउनुपर्ने सम्पत्तिको २०% देखि ३०% सम्म रकम केवल व्यवस्थापन खर्चमै स्वाहा हुन सक्छ! त्यसैले सस्तो खर्च अनुपात भएका फण्डहरू छनोट गर्नु निकै बुद्धिमानी हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The ongoing accrual and deduction of the mutual fund expense ratio follows 4 core phases:',
        np: 'म्युचुअल फण्डको खर्च अनुपात कट्टी हुने प्रक्रिया ४ चरणमा चल्दछ:'
      },
      steps: [
        {
          title: { en: '1. Fee Allocation Under SEBON Caps', np: '१. कानुनी सीमाभित्र शुल्क बाँडफाँड' },
          desc: { en: 'The scheme prospectus legally defines fee breakdowns: Asset Management Fee (approx 1.25%-1.5%), Depository Fee (0.2%), and Fund Supervisor Fee (0.15%).', np: 'विवरणपत्रमा खर्च बाँडिन्छ: कोष व्यवस्थापक शुल्क (१.२५%-१.५%), डिपोजिटरी शुल्क (०.२%) र कोष सुपरीवेक्षक शुल्क (०.१५%)।' }
        },
        {
          title: { en: '2. Daily Amortization', np: '२. दैनिक समानुपातिक कट्टी' },
          desc: { en: 'The annual expense percentage is divided by 365 days and subtracted incrementally from the gross fund assets every single calendar day.', np: 'वार्षिक खर्च प्रतिशतलाई ३६५ दिनले भाग गरी हरेक दिन थोरै-थोरै रकम कुल सम्पत्तिबाट स्वतः कट्टा गरिन्छ।' }
        },
        {
          title: { en: '3. Net Asset Valuation', np: '३. खुद सम्पत्ति मूल्य निर्धारण' },
          desc: { en: 'The daily Net Asset Value (NAV) is published after deducting this daily operational fee slice, meaning investors never receive a separate fee bill.', np: 'यो दैनिक खर्च कटाइसकेपछि मात्र आधिकारिक NAV निकालिन्छ, जसले गर्दा लगानीकर्ताले खल्तीबाट छुट्टै बिल तिर्नु पर्दैन।' }
        },
        {
          title: { en: '4. Annual Audited Disclosure', np: '४. वार्षिक लेखापरीक्षण सार्वजनिक' },
          desc: { en: 'The fund manager publishes the audited annual Total Expense Ratio (TER) in its annual financial report submitted to SEBON and unit holders.', np: 'वर्षभरिमा कुल कति प्रतिशत खर्च भयो भनी अडिट गरिएको आधिकारिक TER विवरण वार्षिक प्रतिवेदनमार्फत सार्वजनिक गरिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Mutual fund audited annual financial statements in Nepal',
        'Comparing performance efficiency between open-ended and closed-ended schemes',
        'SEBON regulatory compliance audits of merchant banking capitals',
        'Forecasting long-term net retirement portfolio returns'
      ],
      np: [
        'नेपालका म्युचुअल फण्डहरूले प्रकाशन गर्ने वार्षिक लेखापरीक्षण विवरणमा',
        'खुलामुखी र बन्दमुखी फण्डहरूको कार्यकुशलता र सञ्चालन खर्च तुलना गर्दा',
        'धितोपत्र बोर्डले क्यापिटलहरूको नियमन र सुपरीवेक्षण गर्दा',
        'दीर्घकालीन लगानीमा खुद प्रतिफलको प्रक्षेपण गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'SEBON Mutual Fund Regulations 2067 and Statutory Expense Ceilings',
        np: 'सामूहिक लगानी कोष नियमावली २०६७ र व्यवस्थापन खर्चको कानुनी सीमा'
      },
      body: {
        en: 'To prevent merchant banking capitals from exploiting retail investors, the Securities Board of Nepal (SEBON) enacted the Mutual Fund Regulations 2067 (2010), which introduced rigid statutory caps on fund expenses. Under SEBON rules, the Fund Management Company cannot charge more than 1.5% of average weekly NAV as management fees. Depository fees are capped at 0.2%, and Fund Supervisor fees are capped at 0.15%, keeping total scheme operating expenses generally below 2.0% annually. As competition increases with new asset managers in Nepal, expense ratios are gradually compressing toward 1.2% to 1.5%, delivering higher net compound returns to Nepali retail investors.',
        np: 'क्यापिटलहरूले सर्वसाधारणको बचतबाट मनपरी खर्च नकाटून् भन्नका लागि धितोपत्र बोर्डले सामूहिक लगानी कोष नियमावली २०६७ मार्फत कडा कानुनी सीमा तोकेको छ। नियम अनुसार कोष व्यवस्थापकले औसत NAV को अधिकतम १.५% भन्दा बढी व्यवस्थापन शुल्क लिन पाउँदैन। डिपोजिटरीले ०.२% र कोष सुपरीवेक्षकले ०.१५% भन्दा बढी लिन नपाउने व्यवस्था छ, जसले कुल वार्षिक खर्चलाई प्रायः २.०% भित्रै सीमित राख्छ। हाल नयाँ क्यापिटलहरू थपिएर प्रतिस्पर्धा बढ्दै जाँदा यो खर्च अनुपात १.२% देखि १.५% सम्म झर्न थालेको छ, जसको सीधा फाइदा लगानीकर्तालाई पुग्छ।'
      },
      keyPoints: {
        en: [
          'Fund management fee is legally capped at a maximum of 1.5% by SEBON.',
          'Total annual scheme operating expenses in Nepal typically range between 1.2% and 2.0%.',
          'Fees are deducted automatically every day before publishing the NAV.',
          'Lower expense ratios leave more capital compounding in your portfolio over time.'
        ],
        np: [
          'धितोपत्र बोर्डको नियम अनुसार व्यवस्थापन शुल्क बढीमा १.५% मा सीमित गरिएको छ।',
          'नेपालमा म्युचुअल फण्डहरूको कुल वार्षिक खर्च प्रायः १.२% देखि २.०% को बीचमा हुन्छ।',
          'दैनिक NAV निकाल्नुअघि नै खर्च स्वतः काटिने हुनाले छुट्टै शुल्क बुझाउनु पर्दैन।',
          'खर्च अनुपात जति कम भयो, दीर्घकालमा लगानीकर्ताको हातमा उति नै बढी नाफा पर्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Rohan invests NPR 500,000 in Fund A (an efficient fund with a 1.2% expense ratio). Bikram invests NPR 500,000 in Fund B (a high-cost fund with a 2.2% expense ratio). Both funds achieve identical gross investment returns of 13% annually before fees over a 20-year period. After deducting expense ratios: Fund A delivers 11.8% net annual compounding, growing Rohan’s portfolio to NPR 4,690,000. Fund B delivers only 10.8% net compounding, leaving Bikram with NPR 3,920,000. That seemingly tiny 1.0% expense difference cost Bikram a staggering NPR 770,000 in lost retirement wealth!',
        np: 'रोहनले वार्षिक १.२% खर्च अनुपात भएको फण्ड "क" मा रु. ५,००,००० लगानी गर्छन्। बिक्रमले वार्षिक २.२% महँगो खर्च भएको फण्ड "ख" मा रु. ५,००,००० हाल्छन्। दुवै फण्डले सेयर बजारबाट खर्च कटाउनुअघि बर्सेनि ठ्याक्कै १३% नाफा कमाउँछन्। २० वर्षपछि: फण्ड "क" ले १.२% खर्च कटाएर खुद ११.८% चक्रवर्ती वृद्धि दिँदा रोहनको सम्पत्ति बढेर रु. ४६,९०,००० पुग्छ। तर फण्ड "ख" ले २.२% खर्च काट्दा खुद १०.८% मात्र दिन्छ र बिक्रमको हातमा रु. ३९,२०,००० मात्र पर्छ। बाहिर हेर्दा १% को सानो शुल्कले गर्दा बिक्रमलाई झण्डै रु. ७,७०,००० को ठूलो घाटा भयो!'
      },
      takeaway: {
        en: 'A lower expense ratio is an instant, guaranteed boost to your net investment returns that compounds in your favor every single day.',
        np: 'कम खर्च अनुपात हुनु भनेको कुनै जोखिम नबढाइकनै आफ्नो खुद नाफा स्वतः बढाउनु हो, जसले वर्षौंसम्म तपाईंको पक्षमा चक्रवर्ती लाभ सिर्जना गर्छ।'
      }
    },
    formula: {
      equation: 'Expense Ratio (%) = (Total Fund Operating Expenses / Average Total Assets) * 100',
      explanation: {
        en: 'Divide the total annual administrative, management, and operational expenses by the average total net assets under management (AUM), and multiply by 100.',
        np: 'वर्षभरिमा लागेको कुल प्रशासनिक तथा व्यवस्थापन खर्चलाई फण्डको औसत कुल सम्पत्ति (AUM) ले भाग गर्ने र १०० ले गुणन गरी प्रतिशत निकाल्ने।'
      },
      variables: [
        { symbol: 'Operating Expenses', label: { en: 'Annual management, depository, audit, and legal fees', np: 'वार्षिक व्यवस्थापन, अडिट, डिपोजिटरी र प्रशासनिक खर्च' } },
        { symbol: 'Average Assets', label: { en: 'Average Net Assets Under Management (AUM) during the year', np: 'वर्षभरिको औसत कुल सम्पत्ति (AUM)' } }
      ],
      example: {
        scenario: {
          en: 'A mutual fund in Nepal with average assets of NPR 1,000,000,000 incurs NPR 15,000,000 in total annual operating expenses.',
          np: 'रु. १ अर्ब औसत सम्पत्ति भएको फण्डले वर्षभरिमा रु. १ करोड ५० लाख कुल सञ्चालन खर्च बेहोर्दा।'
        },
        calculation: {
          en: 'TER = (15,000,000 / 1,000,000,000) * 100 = 0.015 * 100 = 1.50%.',
          np: 'TER = (१,५०,००,००० / १,००,००,००,०००) * १०० = ०.०१५ * १०० = १.५०%।'
        },
        result: {
          en: '1.50% Total Expense Ratio (TER)',
          np: '१.५०% कुल खर्च अनुपात'
        }
      }
    },
    advantages: {
      en: [
        'Statutory SEBON caps protect Nepali investors from predatory fee gouging',
        'Covers institutional research, professional fund management, and legal audits seamlessly',
        'Deducted automatically from NAV; zero paperwork or separate billing for investors',
        'Provides an objective metric to evaluate which fund managers run cost-effective operations'
      ],
      np: [
        'धितोपत्र बोर्डको कानुनी सीमाका कारण क्यापिटलहरूले मनोमानी अत्यधिक शुल्क लिन पाउँदैनन्',
        'यसले संस्थागत अनुसन्धान, व्यावसायिक व्यवस्थापन र कानुनी अडिटको खर्च समेट्छ',
        'दैनिक NAV बाट स्वतः कट्टा हुने भएकाले लगानीकर्ताले कुनै अतिरिक्त बिल तिर्नु पर्दैन',
        'कुन क्यापिटलले कम खर्चमा प्रभावकारी सेवा दिइरहेको छ भनी तुलना गर्न सजिलो बनाउँछ'
      ]
    },
    limitations: {
      en: [
        'Continues to be deducted daily even during bear markets when fund performance is negative',
        'Higher expense ratios quietly destroy tens of thousands of rupees in compound gains over decades',
        'Does not include exit load penalties charged if you redeem units within the first year',
        'Some funds charge maximum allowed statutory caps despite delivering mediocre performance'
      ],
      np: [
        'सेयर बजार घटेर फण्ड घाटामा गएको समयमा पनि यो दैनिक खर्च काटिन रोकिँदैन',
        'लामो समयको लगानीमा महँगो खर्च अनुपातले लाखौं रुपैयाँको सम्भावित नाफा खाइदिन्छ',
        'यसमा एक वर्षभित्र पैसा झिक्दा लाग्ने एक्जिट लोड (Exit Load) शुल्क समावेश हुँदैन',
        'कतिपय कमजोर फण्डहरूले राम्रो प्रतिफल नदिए पनि कानुनले दिएको अधिकतम शुल्क काटिरहन्छन्'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'The mutual fund sends you an annual invoice or bill to pay the expense ratio.',
          np: 'म्युचुअल फण्डको व्यवस्थापन खर्च तिर्नका लागि लगानीकर्ताको घरमा वार्षिक बिल आउँछ।'
        },
        reality: {
          en: 'The expense ratio is never billed directly. It is quietly amortized and deducted each day before calculating the official closing NAV.',
          np: 'व्यवस्थापन खर्चको कुनै बिल आउँदैन। यो हरेक दिनको NAV गणना गर्नुअघि नै कुल सम्पत्तिबाट स्वतः काटिइसकेको हुन्छ।'
        }
      },
      {
        myth: {
          en: 'A 1% difference in mutual fund expense ratios is too small to care about.',
          np: '१% खर्चको अन्तर निकै सानो कुरा हो, यसले लगानीमा खासै फरक पार्दैन।'
        },
        reality: {
          en: 'Compounded over 20 to 30 years, a 1% higher expense ratio eats away up to 25% of your final accumulated net worth. It is one of the most critical factors you can control.',
          np: '२० देखि ३० वर्षको चक्रवर्ती लगानीमा १% बढी खर्चले तपाईंको अन्तिम कुल सम्पत्तिको २५% सम्म रकम खोस्न सक्छ। त्यसैले सस्तो फण्ड छनोट गर्नु अत्यावश्यक हुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Low-Expense Fund (1.2%) vs High-Expense Fund (2.2%)', np: 'कम खर्च भएको फण्ड (१.२%) र महँगो फण्ड (२.२%) बीचको तुलना' },
      subtitle: { en: 'The staggering multi-decade wealth impact of a 1% fee difference on NPR 500,000 invested', np: '५ लाख लगानी गर्दा २० वर्षमा १% शुल्कको अन्तरले पार्ने ठूलो आर्थिक प्रभाव' },
      featureHeader: { en: 'Metric (20-Year Horizon)', np: 'मापदण्ड (२० वर्षको अवधि)' },
      colA: { en: 'Low-Expense Fund (1.2% TER)', np: 'कम खर्च फण्ड (१.२% TER)' },
      colB: { en: 'High-Expense Fund (2.2% TER)', np: 'महँगो फण्ड (२.२% TER)' },
      rows: [
        {
          feature: { en: 'Gross Annual Return', np: 'कुल वार्षिक नाफा' },
          valA: { en: '13.0% per year before fees', np: 'खर्च कटाउनुअघि वार्षिक १३.०%' },
          valB: { en: '13.0% per year before fees', np: 'खर्च कटाउनुअघि वार्षिक १३.०%' }
        },
        {
          feature: { en: 'Net Annual Compounding', np: 'खुद वार्षिक चक्रवर्ती दर' },
          valA: { en: '11.8% net compound growth', np: 'खुद ११.८% चक्रवर्ती वृद्धि' },
          valB: { en: '10.8% net compound growth', np: 'खुद १०.८% चक्रवर्ती वृद्धि' }
        },
        {
          feature: { en: 'Final Portfolio Wealth', np: 'अन्तिम कुल सम्पत्ति' },
          valA: { en: 'NPR 4,690,000 (Higher by NPR 770,000)', np: 'रु. ४६,९०,००० (रु. ७,७०,००० बढी)' },
          valB: { en: 'NPR 3,920,000 (Lost to compounding fee drag)', np: 'रु. ३९,२०,००० (शुल्कका कारण गुमेको)' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'nav', name: 'NAV', type: 'glossary' },
      { slug: 'sip', name: 'SIP', type: 'glossary' },
      { slug: 'cagr', name: 'CAGR', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'What is a Mutual Fund? Professional Management', categorySlug: 'mutual-funds', slug: 'what-is-a-mutual-fund' }
    ],
    relatedGuides: [
      { title: 'Complete Mutual Funds & SIP Guide', slug: 'complete-mutual-funds-guide' }
    ],
    relatedCalculators: [
      { name: 'Mutual Fund Return Calculator', slug: 'cagr', desc: 'Calculate the long-term impact of expense ratios in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'What is the maximum expense ratio allowed for mutual funds in Nepal?', np: 'नेपालमा म्युचुअल फण्डहरूले लिन पाउने अधिकतम खर्च कति हो?' },
        a: {
          en: 'Under SEBON Mutual Fund Regulations 2067, the annual fund management fee cannot exceed 1.5%, the depository fee cannot exceed 0.2%, and the supervisor fee cannot exceed 0.15%, keeping total scheme expenses capped near 1.85% to 2.0% annually.',
          np: 'सामूहिक लगानी कोष नियमावली २०६७ अनुसार व्यवस्थापन शुल्क बढीमा १.५%, डिपोजिटरी शुल्क ०.२% र सुपरीवेक्षक शुल्क ०.१५% तोकिएको छ, जसले गर्दा कुल खर्च वार्षिक १.८५% देखि २.०% भन्दा माथि जान पाउँदैन।'
        }
      },
      {
        q: { en: 'Is the expense ratio deducted from my bank account?', np: 'के व्यवस्थापन खर्च मेरो बैंक खाताबाट काटिन्छ?' },
        a: {
          en: 'No. The expense ratio is never debited from your personal bank account. It is deducted incrementally every day from the fund’s total assets before publishing the official Net Asset Value (NAV).',
          np: 'काटिँदैन। यो खर्च तपाईंको बैंक खाताबाट काटिने होइन। यो फण्डको कुल सम्पत्तिबाट हरेक दिन थोरै-थोरै कटाएर मात्र आधिकारिक NAV निकालिन्छ।'
        }
      },
      {
        q: { en: 'What is an Exit Load and is it part of the Expense Ratio?', np: 'एक्जिट लोड (Exit Load) के हो र के यो खर्च अनुपातभित्र पर्छ?' },
        a: {
          en: 'No. Exit load is a separate penalty fee (typically 0.5% to 1.5%) charged only if an investor redeems their units within a short initial lock-in period (usually within 6 to 12 months). It is designed to discourage short-term speculation.',
          np: 'पर्दैन। एक्जिट लोड भनेको इकाइ किनेको छोटो समय (प्रायः ६ महिनादेखि १ वर्ष) भित्रै बेच्दा लाग्ने छुट्टै जरिवाना शुल्क (०.५% देखि १.५%) हो। यसले छिटो-छिटो पैसा झिक्ने सट्टेबाजीलाई निरुत्साहित गर्छ।'
        }
      },
      {
        q: { en: 'Where can I find the audited Total Expense Ratio (TER) of a scheme in Nepal?', np: 'नेपालमा फण्डको आधिकारिक कुल खर्च अनुपात (TER) कहाँ हेर्न सकिन्छ?' },
        a: {
          en: 'You can find the audited TER in the scheme\'s Annual Financial Report published on the merchant capital\'s website at the close of each fiscal year (under the Statement of Profit and Loss and Notes to Accounts).',
          np: 'सम्बन्धित क्यापिटलको वेबसाइटमा हरेक आर्थिक वर्षको अन्त्यमा प्रकाशित हुने वार्षिक वित्तीय विवरण (Annual Report) भित्र नाफा-नोक्सान हिसाब र अनुसूचीहरूमा आधिकारिक TER हेर्न सकिन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'The Expense Ratio (TER) is the annual percentage of fund assets dedicated to operating and management costs.',
        'SEBON legally caps fund management fees at 1.5%, keeping total scheme expenses near 1.2%-2.0%.',
        'Expenses are quietly amortized daily and deducted before calculating the official closing NAV.',
        'Choosing a fund with a 1% lower expense ratio can preserve over 20% more compound wealth over decades.'
      ],
      np: [
        'कुल खर्च अनुपात (TER) भनेको फण्ड सञ्चालन र व्यवस्थापन गरे बापत सम्पत्तिबाट काटिने वार्षिक प्रतिशत हो।',
        'धितोपत्र बोर्डले व्यवस्थापन शुल्क अधिकतम १.५% मा सीमित गरेकाले कुल खर्च १.२% देखि २.०% भित्रै रहन्छ।',
        'दैनिक NAV निकाल्नुअघि नै खर्च स्वतः काटिने हुनाले लगानीकर्तालाई छुट्टै बिल तिर्नुपर्ने झन्झट हुँदैन।',
        '१% कम खर्च अनुपात भएको फण्ड छनोट गर्दा २०-३० वर्षमा २०% भन्दा बढी अतिरिक्त सम्पत्ति जोगिन्छ।'
      ]
    },
    whereSeen: [
      { title: 'What is a Mutual Fund?', type: 'Lesson', url: '/learn/mutual-funds/what-is-a-mutual-fund' },
      { title: 'Mutual Funds Guide', type: 'Guide', url: '/learn/guides/complete-mutual-funds-guide' }
    ],
    meta: {
      title: 'What is Expense Ratio (TER) in Mutual Funds? Nepal Guide | risePaisa',
      description: 'Master mutual fund expense ratios in Nepal. Learn how SEBON caps management fees, how expenses impact compound growth, and how to find low-cost funds.'
    }
  }
];

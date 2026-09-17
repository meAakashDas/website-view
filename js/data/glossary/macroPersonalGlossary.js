// ==============================================
// risePaisa - Macroeconomics, Personal Finance, Insurance & Digital Payments Glossary Module
// Production-grade financial encyclopedia entries for Nepal
// ==============================================

export const MACRO_PERSONAL_GLOSSARY = [
  // 1. INFLATION
  {
    slug: 'inflation',
    term: 'Inflation',
    termNp: 'मुद्रास्फीति (महँगी)',
    categorySlug: 'economics',
    categoryName: { en: 'Economics', np: 'अर्थतन्त्र' },
    letter: 'I',
    abbreviation: 'CPI',
    synonyms: ['Headline Inflation', 'Consumer Price Index', 'महँगी दर', 'मूल्य वृद्धि'],
    difficulty: 'Beginner',
    readTime: '5 min read',
    oneLineDef: {
      en: 'Inflation is the general, sustained rise in the prices of goods and services over time, which reduces the purchasing power of your money.',
      np: 'मुद्रास्फीति (महँगी) भनेको समयसँगै वस्तु तथा सेवाहरूको औसत मूल्यस्तरमा हुने निरन्तर वृद्धि हो, जसले गर्दा पैसाको वास्तविक खरिद क्षमता घट्दै जान्छ।'
    },
    detailedExplanation: {
      en: 'Inflation measures how much more expensive a representative "basket" of goods and services has become over a given period, typically one year. In Nepal, the central bank (Nepal Rastra Bank - NRB) publishes monthly Consumer Price Index (CPI) reports tracking price movements across food and beverage items (rice, edible oil, vegetables, meat) and non-food items (housing, education, healthcare, transportation). Inflation does not mean all prices increase at the exact same rate; rather, it reflects a broad-based weighted upward drift. When inflation is high, every rupee in your wallet buys fewer goods. Economists distinguish between "Headline Inflation" (overall basket including volatile food and energy items) and "Core Inflation" (which removes food and energy to reveal underlying structural price pressure). Because Nepal imports over 60% of its merchandise from India and pegs the Nepalese Rupee to the Indian Rupee (1 INR = 1.60 NPR), imported inflation from India heavily influences Nepal\'s domestic inflation rate.',
      np: 'मुद्रास्फीतिले कुनै निश्चित अवधिमा (विशेषगरी एक वर्षमा) दैनिक उपभोग्य वस्तु र सेवाहरूको औसत मूल्य कति प्रतिशतले बढ्यो भन्ने मापन गर्दछ। नेपालमा नेपाल राष्ट्र बैंकले हरेक महिना उपभोक्ता मूल्य सूचकांक (CPI) सार्वजनिक गर्दछ, जसमा खाद्यान्न (चामल, तेल, तरकारी, मासु) र गैर-खाद्यान्न (घरभाडा, शिक्षा, स्वास्थ्य, यातायात) का वस्तुहरूको मूल्यवृद्धिलाई भार दिएर हिसाब निकालिन्छ। महँगी बढ्नु भनेको सबै सामानको भाउ एकैनासले बढ्नु होइन, बरु समग्र मूल्यस्तर माथि जानु हो। अर्थशास्त्रमा खाद्यान्न र इन्धनसहितको समग्र महँगीलाई "हेडलाइन मुद्रास्फीति" (Headline Inflation) र ती अस्थिर वस्तुहरू हटाएर हेरिने दीर्घकालीन महँगीलाई "कोर मुद्रास्फीति" (Core Inflation) भनिन्छ। नेपालले आफ्नो आवश्यकताको ६० प्रतिशतभन्दा बढी सामान भारतबाट आयात गर्ने र नेपाली रुपैयाँ भारुसँग स्थिर विनिमय दर (१ भारु = १.६० नेरु) मा बाँधिएकाले भारतको महँगीको प्रत्यक्ष असर नेपालमा पर्दछ।'
    },
    whyItMatters: {
      en: 'Inflation is the silent wealth destroyer. If your savings account pays 3.5% annual interest while Nepal\'s CPI inflation sits at 6.5%, your "real rate of return" is negative 3.0%. Leaving cash idle in a traditional bank account slowly erodes your purchasing power, making it impossible to achieve financial independence without investing in growth assets like equities, mutual funds, or real estate that outpace inflation.',
      np: 'मुद्रास्फीतिलाई पैसाको अदृश्य चोर मानिन्छ। यदि तपाईंको बचत खाताले वार्षिक ३.५% ब्याज दिन्छ तर नेपालको महँगी दर ६.५% छ भने, तपाईंको वास्तविक प्रतिफल ऋणात्मक ३.०% हुन्छ। यसको अर्थ बैंकमा थन्किएको पैसाले आउँदा वर्षहरूमा झन् कम सामान किन्न सक्छ। त्यसैले महँगीलाई जितेर सम्पत्ति बढाउनका लागि मात्र बचत गरेर पुग्दैन, सेयर बजार, म्युचुअल फण्ड वा उत्पादनमूलक क्षेत्रमा लगानी गर्नुपर्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The measurement and economic ripple effect of inflation in Nepal operates in 4 stages:',
        np: 'नेपालमा मुद्रास्फीतिको मापन र यसको आर्थिक प्रभाव ४ चरणमा बुझ्न सकिन्छ:'
      },
      steps: [
        {
          title: { en: '1. Basket Composition & Data Collection', np: '१. उपभोग्य वस्तुको टोकरी र मूल्य संकलन' },
          desc: { en: 'Nepal Rastra Bank surveys hundreds of retail stores across mountain, hill, and Terai regions to record prices for a standardized basket of goods.', np: 'नेपाल राष्ट्र बैंकले हिमाल, पहाड र तराईका विभिन्न बजारबाट दैनिक जीवनमा नभई नहुने ४९० भन्दा बढी वस्तु तथा सेवाको खुद्रा मूल्य संकलन गर्छ।' }
        },
        {
          title: { en: '2. CPI Index Calculation', np: '२. उपभोक्ता मूल्य सूचकांक (CPI) को गणना' },
          desc: { en: 'Prices are weighted based on the National Household Survey. Food items carry approximately 40% weight, while non-food items make up 60%.', np: 'घरायसी उपभोग सर्वेक्षणका आधारमा वस्तुहरूलाई भार दिइन्छ; खाद्यान्नलाई करिब ४०% र गैर-खाद्यान्न (शिक्षा, स्वास्थ्य, भाडा) लाई ६०% भार दिएर सूचकांक निकालिन्छ।' }
        },
        {
          title: { en: '3. Year-on-Year Inflation Rate Publication', np: '३. वार्षिक बिन्दुगत महँगी दर सार्वजनिक' },
          desc: { en: 'NRB compares the current month\'s CPI index against the exact same month from the prior year to report the annual inflation rate percentage.', np: 'चालु महिनाको सूचकांकलाई गत वर्षको सोही महिनासँग तुलना गरेर वार्षिक बिन्दुगत उपभोक्ता मुद्रास्फीति प्रतिशत घोषणा गरिन्छ।' }
        },
        {
          title: { en: '4. Monetary Policy Intervention', np: '४. मौद्रिक नीतिबाट नियन्त्रणको प्रयास' },
          desc: { en: 'If inflation exceeds the central bank\'s statutory tolerance band (e.g. 6.5%), NRB hikes the policy Repo Rate and cash reserve ratios to tighten liquidity.', np: 'यदि महँगी तोकिएको सीमा (जस्तै ६.५%) भन्दा माथि गयो भने राष्ट्र बैंकले रिपो दर बढाएर र बजारको पैसा तानेर कर्जा महँगो बनाउँछ ताकि उपभोग घटोस्।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Central bank monetary policy formulation and interest rate benchmarking',
        'National wage renegotiations and government civil service dearness allowances',
        'Real rate of return calculations for fixed deposits, bonds, and pensions',
        'Corporate financial planning, inventory costing, and contract escalation clauses'
      ],
      np: [
        'नेपाल राष्ट्र बैंकको वार्षिक मौद्रिक नीति र ब्याजदर निर्धारण गर्दा',
        'कर्मचारीको तलब वृद्धि र सरकारको महँगी भत्ता समायोजन गर्दा',
        'मुद्दती निक्षेप, ऋणपत्र र पेन्सनको वास्तविक प्रतिफल हिसाब गर्दा',
        'कम्पनीहरूको बजेटिङ, निर्माण ठेक्काको मूल्य समायोजन र सामानको लागत तय गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Pegged Currency, Imported Inflation, and the NRB Inflation Target',
      np: 'भारुसँगको स्थिर विनिमय दर, आयातित महँगी र नेपाल राष्ट्र बैंकको लक्ष्य'
      },
      body: {
        en: 'Nepal operates under a fixed exchange rate arrangement with India (NPR 160 per INR 100), in place since 1993. Because Nepal imports the vast majority of its petroleum products, industrial raw materials, and packaged foods from India, domestic price levels are tightly coupled to Indian inflation. Every fiscal year, Nepal Rastra Bank outlines an inflation ceiling in its Monetary Policy (historically targeting 5.5% to 6.5%). When global crude oil prices spike, Indian transportation costs rise, immediately transmitting price shocks to Kathmandu, Pokhara, and the Terai.',
        np: 'नेपालले सन् १९९३ देखि भारतीय रुपैयाँसँग स्थिर विनिमय दर (१०० भारु बराबर १६० नेपाली रुपैयाँ) कायम राख्दै आएको छ। नेपालले आफ्नो सम्पूर्ण पेट्रोलियम पदार्थ, निर्माण सामग्री र ठूलो मात्रामा खाद्यान्न भारतबाटै आयात गर्ने भएकाले भारतमा महँगी बढ्नासाथ नेपालमा स्वतः सामानको भाउ बढ्छ। नेपाल राष्ट्र बैंकले हरेक वर्ष मौद्रिक नीतिमार्फत महँगीलाई ५.५% देखि ६.५% को सीमाभित्र राख्ने लक्ष्य तोक्छ। अन्तर्राष्ट्रिय बजारमा कच्चा तेलको मूल्य बढ्दा वा भारतमा ढुवानी भाडा बढ्दा त्यसको सिधा असर काठमाडौं र देशभरिका उपभोक्ताको भान्सामा पर्दछ।'
      },
      keyPoints: {
        en: [
          'Nepal central bank targets consumer price inflation below 6.5% annually.',
          'Food & beverages carry ~40% weight in the national CPI consumption basket.',
          'Currency peg to INR makes Nepal highly vulnerable to imported Indian inflation.',
          'Real interest rate = Bank deposit nominal rate minus official CPI inflation rate.'
        ],
        np: [
          'नेपाल राष्ट्र बैंकले वार्षिक महँगीलाई ६.५% भन्दा तल राख्ने लक्ष्य राख्दछ।',
          'नेपालको उपभोक्ता टोकरीमा खाद्यान्न र पेय पदार्थको भार करिब ४०% हुन्छ।',
          'भारुसँगको स्थिर विनिमय दरका कारण भारतको महँगी सीधै नेपालमा आयात हुन्छ।',
          'वास्तविक ब्याजदर = बैंकले दिने निक्षेप ब्याजदर - आधिकारिक महँगी दर।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'In 2014, a standard cup of milk tea at a local Kathmandu chiya pasal cost NPR 15, and a liter of petrol cost NPR 130. By 2024, the same cup of tea costs NPR 35, and petrol hovers around NPR 175. If Bikash kept NPR 5,00,000 hidden in a metal safe at home for those 10 years, his nominal cash remained NPR 5,00,000. However, with cumulative inflation averaging ~6.5% annually, his NPR 5,00,000 in 2024 can only purchase what approximately NPR 2,65,000 could buy in 2014. By keeping cash under the mattress, Bikash lost nearly half his wealth to inflation.',
        np: 'विसं २०७१ मा काठमाडौंको चिया पसलमा एक कप दुध चियाको मूल्य रु. १५ र पेट्रोल प्रतिलिटर रु. १३० थियो। विसं २०८१ सम्म आइपुग्दा त्यही चियाको मूल्य रु. ३५ र पेट्रोल रु. १७५ पुगेको छ। यदि विकासले २०७१ सालमा आफ्नो दराजमा रु. ५,००,००० नगद राखेका थिए भने, १० वर्षपछि पनि उनको हातमा रु. ५,००,००० नै रहन्छ। तर वार्षिक औसत ६.५% महँगीका कारण आजको रु. ५,००,००० ले २०७१ सालको करिब रु. २,६५,००० बराबरको मात्र सामान किन्न सक्छ। लगानी नगरी नगद थन्क्याएकै कारण विकासले आफ्नो सम्पत्तिको आधा खरिद क्षमता गुमाए।'
      },
      takeaway: {
        en: 'Cash is not risk-free; while cash avoids market volatility, it guarantees a 100% certainty of purchasing power loss due to inflation.',
        np: 'नगद पैसा जोखिममुक्त हुँदैन; सेयर बजार जस्तो मूल्य नघटे पनि महँगीका कारण यसको खरिद क्षमता हरेक वर्ष निश्चित रूपमा घट्दै जान्छ।'
      }
    },
    formula: {
      equation: 'Inflation Rate (%) = [ (CPI_current - CPI_prior) / CPI_prior ] × 100',
      variables: [
        { name: 'CPI_current', desc: { en: 'Consumer Price Index of the current period', np: 'चालु अवधिको उपभोक्ता मूल्य सूचकांक' } },
        { name: 'CPI_prior', desc: { en: 'Consumer Price Index of the previous baseline period', np: 'अघिल्लो आधार अवधिको उपभोक्ता मूल्य सूचकांक' } }
      ],
      exampleCalc: {
        en: 'If Nepal\'s CPI index was 160.0 in Shrawan 2080 and rose to 170.4 in Shrawan 2081: Inflation = [(170.4 - 160.0) / 160.0] × 100 = 6.5%.',
        np: 'यदि २०८० साउनमा नेपालको मूल्य सूचकांक १६०.० थियो र २०८१ साउनमा बढेर १७०.४ पुग्यो भने: महँगी दर = [(१७०.४ - १६०.०) / १६०.०] × १०० = ६.५% हुन्छ।'
      }
    },
    advantages: {
      en: [
        'Mild, predictable inflation (2-3%) encourages people to invest and spend rather than hoard cash',
        'Moderate inflation enables companies to gradually increase revenue and expand employment',
        'Reduces the real burden of fixed-rate debt for borrowers over multi-year horizons',
        'Serves as a vital economic signal reflecting aggregate consumer demand and productive output'
      ],
      np: [
        'सामान्य र स्थिर महँगी (२-४%) ले मानिसहरूलाई पैसा थन्क्याउनुको साटो व्यवसाय र लगानीमा लगाउन प्रेरित गर्छ',
        'व्यापारी र उद्योगीहरूले नाफा कमाएर नयाँ रोजगारी सिर्जना गर्न मद्दत पुग्छ',
        'स्थिर ब्याजदरमा ऋण लिएका ऋणीहरूका लागि समयसँगै ऋणको वास्तविक बोझ कम हुँदै जान्छ',
        'अर्थतन्त्रमा उत्पादन र माग बढिरहेको छ भन्ने सकारात्मक संकेत दिन्छ'
      ]
    },
    limitations: {
      en: [
        'Erodes the purchasing power of low-income earners, wage laborers, and fixed pensioners',
        'Creates negative real returns on conventional bank savings and fixed deposits when rates lag',
        'Increases interest rates across commercial bank loans, depressing corporate capital expenditure',
        'Generates economic uncertainty, discouraging foreign direct investment and long-term contracts'
      ],
      np: [
        'दैनिक ज्यालादारी गर्ने मजदुर, न्यून आय भएका परिवार र पेन्सनमा बाँचेका वृद्धवृद्धाको जीवन कष्टकर बनाउने',
        'बैंकको ब्याजदरभन्दा महँगी बढी हुँदा साधारण बचतकर्ताको वास्तविक बचत घट्दै जाने',
        'बैंकहरूले कर्जाको ब्याजदर बढाउन बाध्य हुने, जसले गर्दा नयाँ उद्योग र व्यापारमा लगानी घट्ने',
        'बजारमा अनिश्चितता बढ्ने र दीर्घकालीन विकास निर्माणको लागत अत्यधिक बढ्ने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Inflation means the price of every single product in Nepal went up by the reported percentage.',
          np: 'राष्ट्र बैंकले ६% महँगी भन्यो भने नेपालको हरेक सामानको भाउ ६% ले नै बढेको हुन्छ।'
        },
        reality: {
          en: 'CPI inflation is a nationwide weighted average. Fresh vegetables or cooking oil might rise by 25%, while electronics or mobile data costs may actually decrease. Your personal inflation rate depends on your individual spending habits.',
          np: 'उपभोक्ता मूल्य सूचकांक समग्र देशको भारित औसत हो। कुनै वर्ष तरकारी र तेल २५% ले महँगिन सक्छ भने मोबाइल डाटा वा लत्ताकपडा उल्टै सस्तिन सक्छ। तपाईंको व्यक्तिगत खर्च गर्ने बानी अनुसार तपाईंलाई महँगीको असर फरक पर्न सक्छ।'
        }
      },
      {
        myth: {
          en: 'Keeping your money safely in an "A" Class commercial bank savings account protects you from inflation.',
          np: 'क वर्गको वाणिज्य बैंकको बचत खातामा पैसा राखेपछि महँगीबाट पूर्ण सुरक्षित भइन्छ।'
        },
        reality: {
          en: 'Savings accounts typically pay 2.5% to 4.0% interest. When official inflation is 6.0%, your money is losing roughly 2% to 3.5% of its real purchasing power every single year.',
          np: 'वाणिज्य बैंकको साधारण बचत खाताले २.५% देखि ४% मात्र ब्याज दिन्छन्। जब देशमा महँगी ६% हुन्छ, तपाईंको पैसाले हरेक वर्ष २% देखि ३.५% खरिद क्षमता गुमाइरहेको हुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Headline Inflation vs Core Inflation', np: 'हेडलाइन मुद्रास्फीति (Headline) र कोर मुद्रास्फीति (Core) बीचको भिन्नता' },
      subtitle: { en: 'Total consumer basket vs baseline structural price trend', np: 'सम्पूर्ण उपभोग्य टोकरी र मौसमी उतारचढाव बाहेकको वास्तविक महँगी' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Headline Inflation', np: 'हेडलाइन मुद्रास्फीति (Headline)' },
      colB: { en: 'Core Inflation', np: 'कोर मुद्रास्फीति (Core)' },
      rows: [
        {
          feature: { en: 'Basket Inclusions', np: 'समावेश गरिने वस्तुहरू' },
          valA: { en: 'Includes all items: food, vegetables, petroleum, housing, healthcare', np: 'खाद्यान्न, तरकारी, पेट्रोलियम पदार्थ, आवास, स्वास्थ्य लगायत सम्पूर्ण वस्तुहरू' },
          valB: { en: 'Excludes volatile food and energy products to identify long-term trends', np: 'अत्यधिक मूल्य घटबढ हुने तरकारी, खाद्यान्न र इन्धनलाई हटाएर गणना गरिन्छ' }
        },
        {
          feature: { en: 'Volatility', np: 'मूल्यको उतारचढाव' },
          valA: { en: 'High volatility; easily skewed by monsoon floods, border blockades, or crude oil spikes', np: 'उच्च उतारचढाव; बाढीपहिरो, नाकाबन्दी वा अन्तर्राष्ट्रिय तेलको भाउले तुरुन्तै असर गर्ने' },
          valB: { en: 'Stable and smooth; reflects fundamental wage growth and systemic money supply', np: 'स्थिर र सन्तुलित; देशको तलब वृद्धि र बजारको वास्तविक पैसाको आपूर्ति झल्काउने' }
        },
        {
          feature: { en: 'Policy Use by Central Bank', np: 'केन्द्रीय बैंकको प्रयोग' },
          valA: { en: 'Reported widely to public as the primary benchmark of cost-of-living changes', np: 'जनसाधारणलाई जीवनयापन लागत बुझाउन आधिकारिक रूपमा सार्वजनिक गरिने' },
          valB: { en: 'Used internally by NRB economists to decide structural interest rate moves', np: 'राष्ट्र बैंकले दीर्घकालीन ब्याजदर र मौद्रिक नीति तय गर्न भित्री रूपमा प्रयोग गर्ने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'purchasing-power', name: 'Purchasing Power', type: 'glossary' },
      { slug: 'repo-rate', name: 'Repo Rate', type: 'glossary' },
      { slug: 'fixed-deposit', name: 'Fixed Deposit', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Silent Wealth Destroyer: Inflation in Nepal', categorySlug: 'economics', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'How to Beat Inflation in Nepal: Asset Allocation Guide', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Inflation & Purchasing Power Calculator', slug: 'sip', desc: 'Calculate the future cost of your goals adjusted for Nepal inflation.' }
    ],
    faqs: [
      {
        q: { en: 'Why is inflation usually higher in Nepal compared to many developed economies?', np: 'नेपालमा विकसित देशहरूको तुलनामा महँगी किन प्रायः बढी हुन्छ?' },
        a: {
          en: 'Nepal faces high supply-chain transport costs due to difficult mountainous terrain, structural dependence on imported oil and commodities, trade cartels, and an open border with India where domestic prices quickly equalize with Indian price levels.',
          np: 'नेपाल भूपरिवेष्ठित र पहाडी मुलुक भएकाले ढुवानी खर्च अत्यधिक हुन्छ। साथै इन्धन र खाद्यान्नमा परनिर्भरता, बजारमा बिचौलियाको सिन्डिकेट र भारतसँगको खुला सिमानाका कारण त्यहाँको महँगी तुरुन्तै नेपाल भित्रिने गर्दछ।'
        }
      },
      {
        q: { en: 'How can an individual in Nepal protect their money against inflation?', np: 'नेपालमा सामान्य नागरिकले आफ्नो पैसालाई महँगीबाट कसरी जोगाउन सक्छन्?' },
        a: {
          en: 'To beat inflation, allocate funds beyond simple savings accounts into productive assets such as NEPSE blue-chip equities, systematic investment plans (SIPs) in mutual funds, commercial real estate, or high-yield fixed deposits when deposit rates comfortably exceed CPI.',
          np: 'महँगीलाई जित्नका लागि साधारण बचत खातामा मात्र पैसा नराखी नेप्सेका राम्रा कम्पनीको सेयर, म्युचुअल फण्डको SIP, वा महँगीभन्दा बढी ब्याज दिने मुद्दती निक्षेप र उत्पादनमूलक सम्पत्तिमा नियमित लगानी गर्नुपर्छ।'
        }
      },
      {
        q: { en: 'Does deflation (falling prices) mean a healthier economy than inflation?', np: 'के मूल्य घट्नु (Deflation) महँगी बढ्नुभन्दा अर्थतन्त्रका लागि राम्रो हो?' },
        a: {
          en: 'No. Sustained deflation is dangerous because consumers postpone purchases expecting even cheaper prices tomorrow. This crushes corporate revenues, triggers job cuts, and leads to severe economic recessions. Central banks prefer a low, positive inflation rate of 2% to 5%.',
          np: 'होइन। निरन्तर मूल्य घट्नु (डिफ्लेसन) अर्थतन्त्रका लागि झन् घातक हुन्छ। भोलि अझै सस्तो होला भनेर मानिसहरूले सामान किन्न छोड्छन्, जसले गर्दा उद्योग बन्द हुन्छन्, तलब रोकिन्छ र बेरोजगारी फैलिन्छ। त्यसैले अर्थतन्त्रमा २ देखि ५ प्रतिशतको सामान्य महँगी आवश्यक मानिन्छ।'
        }
      },
      {
        q: { en: 'How does the Nepal Rastra Bank control runaway inflation?', np: 'नेपाल राष्ट्र बैंकले अत्यधिक बढेको महँगीलाई कसरी नियन्त्रण गर्छ?' },
        a: {
          en: 'NRB implements contractionary monetary policy: raising the policy Repo Rate, increasing the Cash Reserve Ratio (CRR) for commercial banks, and issuing deposit collection instruments to suck excess liquidity out of the financial system, reducing borrowing and cooled demand.',
          np: 'राष्ट्र बैंकले कसिलो मौद्रिक नीति अपनाउँछ: बैंकहरूलाई दिने कर्जाको रिपो दर बढाउँछ, बैंकहरूले राख्नुपर्ने अनिवार्य नगद अनुपात (CRR) बढाउँछ र बजारबाट पैसा तानेर ऋण लिन महँगो बनाइदिन्छ ताकि बजारमा उपभोग घटोस्।'
        }
      }
    ],
    summary: {
      en: [
        'Inflation is the gradual loss of purchasing power, measured in Nepal via the Consumer Price Index (CPI).',
        'Food & beverage items carry ~40% weight in Nepal\'s national consumption basket.',
        'Due to the 1.60 currency peg with the Indian Rupee, Nepal imports substantial inflation from India.',
        'Holding idle cash guarantees loss; beating inflation requires investing in growth assets like equities and SIPs.'
      ],
      np: [
        'मुद्रास्फीति भनेको पैसाको खरिद क्षमतामा आउने ह्रास हो, जसलाई नेपालमा उपभोक्ता मूल्य सूचकांक (CPI) बाट नापिन्छ।',
        'नेपालको उपभोग्य टोकरीमा खाद्यान्न र तरकारीको हिस्सा करिब ४०% भारसहित सबैभन्दा बढी छ।',
        'भारतीय रुपैयाँसँगको स्थिर विनिमय दरका कारण भारतको महँगी सीधै नेपालको बजारमा भित्रिन्छ।',
        'नगद पैसा थन्क्याउँदा महँगीले सम्पत्ति सिध्याउँछ; यसलाई जित्न सेयर, SIP र उत्पादनमूलक क्षेत्रमा लगानी गर्नुपर्छ।'
      ]
    },
    whereSeen: [
      { title: 'The Silent Wealth Destroyer: Inflation in Nepal', type: 'Lesson', url: '/learn/economics/what-is-investing' },
      { title: 'SIP Growth Calculator', type: 'Calculator', url: '/calculators/sip' }
    ],
    meta: {
      title: 'What is Inflation in Nepal? CPI, NRB Targets & Impact Guide | risePaisa',
      description: 'Understand how inflation erodes purchasing power in Nepal. Learn about CPI calculations, the INR peg effect, and strategies to beat rising costs.'
    }
  },

  // 2. PURCHASING POWER
  {
    slug: 'purchasing-power',
    term: 'Purchasing Power',
    termNp: 'क्रयशक्ति (पैसाको खरिद क्षमता)',
    categorySlug: 'economics',
    categoryName: { en: 'Economics', np: 'अर्थतन्त्र' },
    letter: 'P',
    abbreviation: 'PP',
    synonyms: ['Buying Power', 'Real Value of Money', 'पैसाको खरिद क्षमता', 'वास्तविक मूल्य'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'Purchasing power is the quantity of goods or services that a single unit of currency can buy at any given moment.',
      np: 'क्रयशक्ति भनेको कुनै निश्चित समयमा एक रुपैयाँ वा निश्चित रकमले बजारबाट किन्न सकिने वास्तविक वस्तु तथा सेवाको परिमाण हो।'
    },
    detailedExplanation: {
      en: 'While a currency note retains the exact same printed nominal face value forever (an NPR 1,000 note printed in 2000 still reads NPR 1,000 today), its "purchasing power" fluctuates inversely with the cost of living. When prices rise due to inflation, the real purchasing power of that NPR 1,000 declines. In economics, purchasing power is the foundational bridge between "nominal wealth" (the numerical balance in your eSewa, bank account, or wallet) and "real wealth" (the tangible food, housing, healthcare, and education that balance can afford). Tracking purchasing power is essential when negotiating salary increments, evaluating retirement pension adequacy, or planning long-term investments in Nepal. On an international scale, Purchasing Power Parity (PPP) adjusts exchange rates so that an identical basket of goods costs the exact same across different countries, demonstrating why NPR 1,00,000 affords a significantly higher standard of living in Biratnagar or Pokhara than its nominal equivalent ($750) would afford in New York or London.',
      np: 'कागजी नोटमा छापिएको अंक जहिले पनि एउटै रहन्छ (विसं २०५७ मा छापिएको रु. १,००० को नोटमा आज पनि रु. १,००० नै लेखिएको हुन्छ), तर त्यसले किन्न सक्ने सामानको परिमाण अर्थात् "क्रयशक्ति" भने बजार भाउ अनुसार निरन्तर घट्छ। महँगी बढ्दा पैसाको वास्तविक शक्ति कमजोर हुन्छ। अर्थशास्त्रमा क्रयशक्तिले "अंकमा देखिने सम्पत्ति" (बैंक वा खल्तीमा भएको पैसा) र "वास्तविक जीवनस्तर" (त्यस पैसाले किन्न सकिने चामल, दाल, औषधि, घरभाडा) बीचको भिन्नता देखाउँछ। तलब बढाउन कुरा गर्दा वा अवकाशपछिको पेन्सन योजना बनाउँदा क्रयशक्ति बुझ्नु अनिवार्य हुन्छ। अन्तर्राष्ट्रिय रूपमा क्रयशक्ति समता (PPP) ले विभिन्न देशका मुद्राको वास्तविक क्षमता तुलना गर्छ, जसले नेपालमा रु. १,००,००० ले दिने जीवनस्तर अमेरिकामा त्यसको सटही दर ($७५०) ले दिन सक्दैन भन्ने प्रमाणित गर्छ।'
    },
    whyItMatters: {
      en: 'Focusing solely on nominal monetary numbers creates a dangerous optical illusion known as "money illusion". If your monthly salary increases from NPR 40,000 to NPR 44,000 (+10%), but Kathmandu living expenses increase by 12% over the same period, your actual purchasing power has declined by 2%. You are numerically richer, but practically poorer.',
      np: 'केवल पैसाको अंक मात्र हेर्दा "मनी इल्युजन" (Money Illusion) अर्थात् भ्रम पैदा हुन्छ। यदि तपाईंको मासिक तलब रु. ४०,००० बाट बढेर रु. ४४,००० (१०% वृद्धि) पुग्यो, तर त्यही अवधिमा काठमाडौंको कोठाभाडा, खाना र यातायात १२% ले महँगियो भने तपाईंको वास्तविक खरिद क्षमता २% ले घटेको हुन्छ। तपाईंको हातमा पैसाको अंक धेरै देखिए पनि तपाईं पहिलेभन्दा गरिब हुनुभएको हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The erosion of purchasing power occurs through 4 economic phases:',
        np: 'पैसाको क्रयशक्ति घट्ने प्रक्रिया ४ चरणमा बुझ्न सकिन्छ:'
      },
      steps: [
        {
          title: { en: '1. Baseline Pricing & Consumption', np: '१. आधारभूत मूल्य र उपभोग' },
          desc: { en: 'A specific quantity of rupees buys a fixed basket of family essentials (e.g. 1 sack of rice, cooking gas, monthly internet).', np: 'सुरुवाती वर्षमा निश्चित रकमले परिवारलाई चाहिने सम्पूर्ण सामान (जस्तै १ बोरा चामल, ग्यास, इन्टरनेट) किन्न पुग्छ।' }
        },
        {
          title: { en: '2. Money Supply Expansion & Cost Push', np: '२. मुद्रा आपूर्ति र उत्पादन लागत वृद्धि' },
          desc: { en: 'Government deficit financing, raw material price hikes, or currency depreciation increase overall input costs across the economy.', np: 'इन्धनको भाउ बढ्दा, ढुवानी महँगिँदा र बजारमा पैसाको आपूर्ति धेरै हुँदा सामान उत्पादनको लागत बढ्छ।' }
        },
        {
          title: { en: '3. Retail Price Adjustment', np: '३. बजार मूल्यमा वृद्धि' },
          desc: { en: 'Merchants and service providers raise end-consumer retail prices to protect their profit margins.', np: 'व्यापारी र सेवा प्रदायकहरूले आफ्नो नाफा जोगाउन ग्राहकलाई बेच्ने अन्तिम खुद्रा मूल्य बढाइदिन्छन्।' }
        },
        {
          title: { en: '4. Purchasing Power Contraction', np: '४. खरिद क्षमतामा संकुचन' },
          desc: { en: 'The identical nominal amount of rupees now buys a visibly smaller physical quantity of goods than before.', np: 'पहिले जति नै पैसाले अब पहिलेभन्दा निकै कम परिमाणमा मात्र सामान खरिद गर्न सकिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Evaluating real salary wage hikes against inflation adjustments',
        'Calculating long-term retirement savings targets in Nepal',
        'Cross-border economic living standard comparisons (PPP)',
        'Determining required return benchmarks for investment portfolios'
      ],
      np: [
        'कर्मचारीको तलब वृद्धि महँगी अनुसार पर्याप्त छ कि छैन जाँच्न',
        'अवकाशपछि २०-३० वर्षसम्म ढुक्कले बाँच्न कति रकम चाहिन्छ हिसाब गर्न',
        'देशहरू बीचको वास्तविक जीवनस्तर तुलना गर्न (PPP आधारमा)',
        'लगानीको पोर्टफोलियोले कम्तीमा कति नाफा दिनुपर्छ लक्ष्य तोक्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Gold Prices, Land Realities, and 30 Years of Rupee Purchasing Power in Nepal',
        np: 'सुनको भाउ, जग्गाको मूल्य र विगत ३० वर्षमा नेपाली रुपैयाँको खरिद क्षमता'
      },
      body: {
        en: 'In 1995, one tola (11.66 grams) of 24-carat fine gold in Nepal traded at approximately NPR 4,800. By 2024, the exact same tola of gold crossed NPR 1,50,000. The physical gold did not change; rather, the purchasing power of the Nepalese Rupee collapsed relative to tangible scarce assets. Similarly, land in suburban Kathmandu valley that sold for NPR 50,000 per aana in the late 1990s commands over NPR 30,00,000 to 50,00,000 per aana today. For Nepali households, holding long-term wealth strictly in paper cash or low-interest bank savings has historically resulted in devastating real purchasing power destruction.',
        np: 'विसं २०५२ सालतिर नेपालमा छापावाल सुन प्रतितोला करिब रु. ४,८०० मा पाइन्थ्यो। विसं २०८१ सम्म आइपुग्दा त्यही एक तोलो सुनको मूल्य रु. १,५०,००० नाघेको छ। यहाँ सुन परिवर्तन भएको होइन; सुनको तुलनामा नेपाली रुपैयाँको खरिद क्षमता ३० गुणाभन्दा बढी घटेको हो। त्यस्तै २०५० को दशकमा काठमाडौं उपत्यकाको कान्ठ क्षेत्रमा प्रतिआना रु. ५०,००० मा पाइने जग्गा आज आनाकै ३० लाखदेखि ५० लाख रुपैयाँ पुगेको छ। यसले के प्रमाणित गर्छ भने, नेपाली परिवारले आफ्नो कमाइ केवल नगद वा न्यून ब्याज दिने बैंक खातामा मात्र राख्दा सम्पत्तिको वास्तविक मूल्य स्वाहा हुन्छ।'
      },
      keyPoints: {
        en: [
          'Purchasing power measures real goods bought, not the nominal face value of currency.',
          'Gold and real estate in Nepal demonstrate the long-term erosion of paper rupee power.',
          'Salary hikes below inflation result in an invisible real wage cut.',
          'Investments must earn a net return higher than inflation to grow purchasing power.'
        ],
        np: [
          'क्रयशक्तिले नोटको अंक होइन, त्यसले किन्न सक्ने वास्तविक सामानको परिमाण देखाउँछ।',
          'नेपालमा सुन र जग्गाको भाउ वृद्धिले नेपाली रुपैयाँको शक्ति कसरी घट्यो भन्ने स्पष्ट पार्छ।',
          'महँगी दरभन्दा कम तलब वृद्धि हुनु भनेको अप्रत्यक्ष रूपमा तलब घट्नु सरह हो।',
          'सम्पत्ति बढाउनका लागि लगानीको प्रतिफल महँगीभन्दा बढी हुनैपर्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'In 2004, Ramesh retired with an NPR 20,00,000 lump sum gratuity. At the time, that amount could purchase 2 ropanis of fertile land near Pokhara or fully fund a 4-year undergraduate degree for both of his children. Assuming he left the NPR 20,00,000 in a regular bank savings account averaging 4% interest while inflation averaged 7%, by 2024 his account balance grew numerically to NPR 43,82,000. However, in 2024, NPR 43,82,000 cannot even purchase 2 aana of that same land, nor can it cover the tuition of one child in private engineering college. Ramesh has more rupees, but less than one-third of the purchasing power he held 20 years earlier.',
        np: 'विसं २०६१ मा रमेशले अवकास पाउँदा रु. २०,००,००० उपदान पाए। त्यतिबेला उक्त रकमले पोखरा नजिकै २ रोपनी मलिलो जग्गा किन्न वा दुवै सन्तानलाई ४ वर्षे स्नातक पढाउन मज्जाले पुग्थ्यो। उनले सो रकम वार्षिक ४% ब्याज आउने साधारण खातामा राखे तर बजारमा महँगी वार्षिक ७% ले बढ्यो। २० वर्षपछि २०८१ मा उनको खातामा अंक बढेर रु. ४३,८२,००० पुग्यो। तर आज त्यति रकमले त्यही ठाउँमा २ आना जग्गा पनि आउँदैन र एउटा इन्जिनियरिङ कलेजको फी तिर्न पनि धौ-धौ पर्छ। अंकमा रमेश धनी देखिए पनि उनको वास्तविक खरिद क्षमता पहिलेको एक तिहाइमा झर्‍यो।'
      },
      takeaway: {
        en: 'Never measure wealth in nominal rupees; measure your financial health by the real basket of living essentials your assets can purchase.',
        np: 'आफ्नो धनलाई कहिल्यै बैंक खाताको अंकमा मात्र ननाप्नुहोस्; त्यो पैसाले बजारबाट कति वस्तु, सेवा र सुरक्षा किन्न सक्छ त्यसबाट मात्र वास्तविक सम्पन्नता नापिन्छ।'
      }
    },
    formula: {
      equation: 'Real Purchasing Power = Nominal Amount / (1 + i)^n',
      variables: [
        { name: 'Nominal Amount', desc: { en: 'The face value amount of rupees today', np: 'आजको दिनमा हातमा भएको नगद रकम' } },
        { name: 'i', desc: { en: 'Average annual inflation rate (as a decimal)', np: 'वार्षिक औसत मुद्रास्फीति दर (दशमलवमा)' } },
        { name: 'n', desc: { en: 'Number of years into the future', np: 'भविष्यका वर्षहरूको संख्या' } }
      ],
      exampleCalc: {
        en: 'NPR 1,00,000 in 10 years at 6.5% annual inflation: Real Value = 1,00,000 / (1 + 0.065)^10 = 1,00,000 / 1.877 = NPR 53,276. In 10 years, NPR 1 Lakh will only buy what NPR 53,276 buys today.',
        np: 'वार्षिक ६.५% महँगी हुँदा आजको रु. १,००,००० को १० वर्षपछिको वास्तविक मूल्य = १,००,००० / (१ + ०.०६५)^१० = रु. ५३,२७६ हुन्छ। अर्थात् १० वर्षपछिको १ लाखले आजको ५३ हजार बराबरको मात्र सामान किन्न सक्छ।'
      }
    },
    advantages: {
      en: [
        'Provides an honest, unvarnished measure of true economic prosperity and living standards',
        'Helps individuals negotiate realistic inflation-indexed salary revisions with employers',
        'Guides prudent long-term retirement planning by preventing severe capital shortfalls',
        'Allows meaningful cross-border comparisons of real living costs through PPP metrics'
      ],
      np: [
        'व्यक्तिको वास्तविक जीवनस्तर र सम्पन्नताको सही र यथार्थ तस्बिर देखाउँछ',
        'कर्मचारीहरूलाई महँगी अनुसार जायज तलब वृद्धिको माग गर्न सघाउँछ',
        'अवकाशपछिको जीवनमा पैसा नपुग्ने डरबाट बच्न यथार्थपरक योजना बनाउन मद्दत गर्छ',
        'विश्वभरका विभिन्न देशहरू बीचको जीवनयापन खर्च तुलना गर्न सजिलो बनाउँछ'
      ]
    },
    limitations: {
      en: [
        'Challenging to calculate precisely for individuals due to personal spending variations',
        'Official government CPI calculations often underestimate the real cost pressures in major cities',
        'Requires sophisticated financial literacy to grasp beyond simple nominal money balances',
        'High inflation makes long-term purchasing power projections inherently volatile'
      ],
      np: [
        'हरेक व्यक्तिको खर्च गर्ने तरिका फरक हुने भएकाले व्यक्तिगत क्रयशक्ति ठ्याक्कै निकाल्न कठिन हुने',
        'सरकारको आधिकारिक मूल्य सूचकांकले काठमाडौं जस्ता ठूला सहरको वास्तविक महँगीलाई पूर्ण रूपमा नसमेट्न सक्ने',
        'साधारण नागरिकले अंकको भ्रम (Money Illusion) बुझ्न नसक्दा यसलाई बेवास्ता गर्ने सम्भावना',
        'भविष्यको महँगी अनिश्चित हुने भएकाले २०-३० वर्षपछिको क्रयशक्ति अनुमान गर्न चुनौतीपूर्ण हुने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'If you have NPR 1 Crore in a bank, you are guaranteed to be financially wealthy for life.',
          np: 'बैंकमा १ करोड रुपैयाँ हुनु भनेको जीवनभरका लागि ढुक्कसँग धनी हुनु हो।'
        },
        reality: {
          en: 'At 7% inflation, NPR 1 Crore loses over 50% of its purchasing power in roughly 10 years. In 30 years, that 1 Crore will only buy what roughly NPR 13 Lakhs buys today.',
          np: 'वार्षिक ७% महँगी हुँदा १ करोड रुपैयाँको खरिद क्षमता १० वर्षमै आधा घट्छ। ३० वर्षपछि त्यो १ करोडले आजको जम्मा १३ लाख रुपैयाँ बराबरको मात्र सामान किन्न सक्छ।'
        }
      },
      {
        myth: {
          en: 'Purchasing power is only a concern for poor people struggling with groceries.',
          np: 'क्रयशक्ति दैनिक दालचामल किन्न नसक्ने गरिब परिवारका लागि मात्र चासोको विषय हो।'
        },
        reality: {
          en: 'Purchasing power affects high-net-worth investors even more severely because capital taxation and inflation combine to eat massive nominal gains on fixed-income investments.',
          np: 'क्रयशक्ति ठूला लगानीकर्ताका लागि झन् महत्वपूर्ण हुन्छ किनकि कर र महँगीले उनीहरूको करोडौंको स्थिर निक्षेपको वास्तविक मूल्यलाई निरन्तर खाइरहेको हुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Nominal Value vs Real Purchasing Power', np: 'अंकित मूल्य (Nominal) र वास्तविक क्रयशक्ति (Real) बीचको तुलना' },
      subtitle: { en: 'Face value printed on currency vs actual goods it can buy', np: 'नोटमा छापिएको अंक र त्यसले किन्न सक्ने सामान बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Nominal Value', np: 'अंकित मूल्य (Nominal Value)' },
      colB: { en: 'Real Purchasing Power', np: 'वास्तविक क्रयशक्ति (Real Value)' },
      rows: [
        {
          feature: { en: 'Definition', np: 'परिभाषा' },
          valA: { en: 'The face value of money printed on paper or displayed in bank apps', np: 'कागजी नोटमा छापिएको वा बैंक खातामा अंकमा देखिने रकम' },
          valB: { en: 'The physical basket of goods and services that amount can actually purchase', np: 'त्यस रकमले बजारबाट प्रत्यक्ष रूपमा खरिद गर्न सकिने वस्तु र सेवा' }
        },
        {
          feature: { en: 'Time Sensitivity', np: 'समयको प्रभाव' },
          valA: { en: 'Constant over time; an NPR 500 note is always an NPR 500 note', np: 'समयसँगै कहिल्यै बदलिँदैन; रु. ५०० को नोट सधैं रु. ५०० नै रहन्छ' },
          valB: { en: 'Decreases continuously whenever inflation is positive', np: 'बजारमा महँगी बढ्दै जाँदा निरन्तर घट्दै जान्छ' }
        },
        {
          feature: { en: 'Financial Target Relevance', np: 'वित्तीय योजनामा महत्व' },
          valA: { en: 'Misleading; creates the dangerous "money illusion"', np: 'भ्रामक; मानिसलाई धनी भएको झुटो महसुस गराउने' },
          valB: { en: 'The true benchmark for retirement planning, education funds, and investments', np: 'अवकाश योजना, सन्तानको उच्च शिक्षा र वास्तविक सम्पत्ति निर्माणको मुख्य आधार' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'inflation', name: 'Inflation', type: 'glossary' },
      { slug: 'cagr', name: 'CAGR', type: 'glossary' },
      { slug: 'fixed-deposit', name: 'Fixed Deposit', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Silent Wealth Destroyer: Inflation in Nepal', categorySlug: 'economics', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'How to Protect Your Savings from Rupee Depreciation', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'SIP Compounding Calculator', slug: 'sip', desc: 'Calculate how compounding investments preserve and expand your purchasing power.' }
    ],
    faqs: [
      {
        q: { en: 'What is the Big Mac Index and how does it relate to Nepal\'s purchasing power?', np: 'बिग म्याक इन्डेक्स के हो र यसले क्रयशक्तिसँग कस्तो सम्बन्ध राख्छ?' },
        a: {
          en: 'Created by The Economist, the Big Mac Index compares the price of a McDonald\'s burger across countries to test Purchasing Power Parity. While Nepal does not have McDonald\'s, comparing the local price of a standard plate of momo across South Asian cities serves an identical domestic purchasing power comparison.',
          np: 'द इकोनोमिस्ट म्यागजिनले बनाएको बिग म्याक इन्डेक्सले विभिन्न देशमा एउटा बर्गरको मूल्य दाँजेर मुद्राको क्रयशक्ति तुलना गर्छ। नेपालमा म्याकडोनाल्ड नभए पनि एक प्लेट ममको भाउलाई विभिन्न सहरमा तुलना गरेर क्रयशक्ति बुझ्न सकिन्छ।'
        }
      },
      {
        q: { en: 'Can investing in NEPSE stocks protect my purchasing power over decades?', np: 'के नेप्सेमा सेयर लगानी गर्दा दशकौंसम्म मेरो खरिद क्षमता सुरक्षित हुन्छ?' },
        a: {
          en: 'Historically, broad stock indices compound at 12% to 15% annually over 10-20 year horizons, which comfortably outpaces Nepal\'s 6-7% inflation rate. High-quality businesses expand their revenues with inflation, protecting equity shareholders\' purchasing power.',
          np: 'विगतको इतिहास हेर्दा दीर्घकालमा राम्रा कम्पनीहरूको सेयरले वार्षिक १२ देखि १५ प्रतिशतसम्म प्रतिफल दिने गरेका छन्, जसले नेपालको ६-७% महँगीलाई सजिलै जित्छ। कम्पनीहरूले पनि महँगी अनुसार सामानको भाउ बढाउने भएकाले सेयरधनीको क्रयशक्ति जोगिन्छ।'
        }
      },
      {
        q: { en: 'Why does currency depreciation reduce purchasing power for international goods?', np: 'मुद्राको अवमूल्यन हुँदा विदेशी सामान किन्न क्रयशक्ति किन घट्छ?' },
        a: {
          en: 'When the Nepalese Rupee weakens against the US Dollar (e.g. from NPR 100/USD to NPR 135/USD), importing laptops, petroleum, or foreign education requires 35% more rupees for the exact same foreign goods, instantly reducing domestic purchasing power on imported items.',
          np: 'जब अमेरिकी डलरको तुलनामा नेपाली रुपैयाँ कमजोर हुन्छ (जस्तै १ डलर = १०० बाट बढेर १३५ पुग्दा), विदेशबाट ल्याइने ल्यापटप, तेल वा विदेशी कलेजको शुल्क तिर्न ३५% बढी रुपैयाँ चाहिन्छ। यसले गर्दा आयातित सामानमा नेपालीको खरिद क्षमता तुरुन्तै घट्छ।'
        }
      },
      {
        q: { en: 'How should I adjust my monthly budget to protect against falling purchasing power?', np: 'घट्दो क्रयशक्तिबाट बच्न मैले आफ्नो मासिक बजेटलाई कसरी समायोजन गर्ने?' },
        a: {
          en: 'Audit recurring discretionary subscriptions, trim non-essential wants, and divert at least 20% of income directly into disciplined equity SIPs or mutual funds before spending, ensuring your surplus capital compounds faster than living expenses rise.',
          np: 'अनावश्यक फजुल खर्च र देखावटी बानी कटौती गर्नुहोस् र हरेक महिना तलब आउनासाथ कम्तीमा २०% रकम खर्च गर्नुअघि नै सिधै सेयर वा म्युचुअल फण्डको SIP मा लगानी गर्नुहोस् ताकि तपाईंको बचत महँगीभन्दा छिटो बढ्न सकोस्।'
        }
      }
    ],
    summary: {
      en: [
        'Purchasing power measures the tangible basket of goods a rupee can purchase, not its printed nominal face value.',
        'Inflation relentlessly shrinks purchasing power; NPR 1 Lakh today will buy half as much in 10-12 years.',
        'Relying solely on paper cash or low-rate bank savings guarantees severe long-term financial impoverishment.',
        'Preserving purchasing power requires compounding investments in equities, mutual funds, or productive real estate.'
      ],
      np: [
        'क्रयशक्ति भनेको नोटमा छापिएको अंक होइन, बजारबाट त्यसले किन्न सक्ने वास्तविक सामानको परिमाण हो।',
        'महँगीले पैसाको खरिद क्षमता निरन्तर घटाउँछ; आजको १ लाखले १०-१२ वर्षपछि आधा सामान मात्र किन्न सक्छ।',
        'केवल नगद पैसा वा साधारण बचत खातामा मात्र भर पर्दा भविष्यमा आर्थिक रूपमा ठूलो संकट आइपर्छ।',
        'आफ्नो खरिद क्षमता जोगाउन र बढाउन सेयर, SIP र उत्पादनमूलक क्षेत्रमा नियमित लगानी गर्नैपर्छ।'
      ]
    },
    whereSeen: [
      { title: 'The Silent Wealth Destroyer: Inflation in Nepal', type: 'Lesson', url: '/learn/economics/what-is-investing' },
      { title: 'Goal-Based SIP Calculator', type: 'Calculator', url: '/calculators/sip' }
    ],
    meta: {
      title: 'What is Purchasing Power in Nepal? Real Wealth vs Money Illusion | risePaisa',
      description: 'Discover what purchasing power means for your wallet in Nepal. Learn how inflation degrades money value and how to preserve real wealth with smart investing.'
    }
  },

  // 3. REPO RATE
  {
    slug: 'repo-rate',
    term: 'Repo Rate',
    termNp: 'नीतिगत रिपो दर (Repo Rate)',
    categorySlug: 'economics',
    categoryName: { en: 'Economics', np: 'अर्थतन्त्र' },
    letter: 'R',
    abbreviation: 'Repo',
    synonyms: ['Policy Repo Rate', 'Repurchase Agreement Rate', 'NRB Policy Rate', 'ब्याजदर करिडोर', 'नीतिगत दर'],
    difficulty: 'Intermediate',
    readTime: '5 min read',
    oneLineDef: {
      en: 'The Repo Rate is the benchmark policy interest rate at which Nepal Rastra Bank lends short-term funds to commercial banks against government securities.',
      np: 'नीतिगत रिपो दर (Repo Rate) भनेको नेपाल राष्ट्र बैंकले सरकारी ऋणपत्र धितो राखेर वाणिज्य बैंकहरूलाई अल्पकालीन कर्जा दिने आधिकारिक ब्याजदर हो।'
    },
    detailedExplanation: {
      en: 'The term "Repo" is short for "Repurchase Agreement". When commercial banks in Nepal experience temporary liquidity shortages to meet statutory reserve requirements or loan disbursements, they borrow short-term funds (typically for 7 to 14 days) from the central bank, pledging government Treasury Bills and Development Bonds with an agreement to repurchase them at a predetermined future date. The Repo Rate serves as the central anchor of Nepal Rastra Bank\'s "Interest Rate Corridor" (IRC). Below the Repo Rate sits the Deposit Collection rate (the floor of the corridor), and above it sits the Standing Liquidity Facility (SLF) rate or Bank Rate (the ceiling). By shifting the policy Repo Rate in its quarterly monetary policy reviews, Nepal Rastra Bank regulates the cost of funds across the entire banking ecosystem. When NRB raises the Repo Rate, commercial bank borrowing costs rise, leading to higher Base Rates and more expensive home, auto, and business loans. Conversely, when NRB lowers the Repo Rate to stimulate economic activity, bank deposit and lending rates drop.',
      np: 'रिपो (Repo) भनेको "Repurchase Agreement" अर्थात् पुनः खरिद सम्झौताको संक्षिप्त रूप हो। जब नेपालका वाणिज्य बैंकहरूमा कर्जा दिन वा दैनिक तरलता व्यवस्थापन गर्न पैसाको अभाव हुन्छ, उनीहरूले सरकारी ट्रेजरी बिल वा विकास ऋणपत्र राष्ट्र बैंकमा धितो राखेर अल्पकालीन (प्रायः ७ देखि १४ दिनका लागि) ऋण लिन्छन्। यही ऋणमा राष्ट्र बैंकले लिने ब्याजदरलाई "रिपो दर" भनिन्छ। यो दर नेपाल राष्ट्र बैंकको "ब्याजदर करिडोर" (Interest Rate Corridor) को केन्द्रमा रहन्छ। यसको माथिल्लो सीमामा स्थायी तरलता सुविधा (SLF) वा बैंक दर हुन्छ भने तल्लो सीमामा निक्षेप संकलन दर हुन्छ। राष्ट्र बैंकले हरेक तीन-तीन महिनामा मौद्रिक नीतिको समीक्षामार्फत रिपो दर हेरफेर गर्छ। जब राष्ट्र बैंकले रिपो दर बढाउँछ, बैंकहरूलाई पैसा लिन महँगो पर्छ, जसले गर्दा बैंकहरूको बेस रेट (Base Rate) बढ्छ र सर्वसाधारणले लिने घरकर्जा, सेयर कर्जा र व्यापारिक ऋणको ब्याजदर स्वतः बढ्छ। उता रिपो दर घटाउँदा बजारमा ब्याजदर सस्तिन्छ।'
    },
    whyItMatters: {
      en: 'The Repo Rate directly influences every retail financial product in Nepal. If you have an adjustable-rate home loan or auto loan tied to your commercial bank\'s Base Rate, an increase in the NRB Repo Rate will eventually push up your monthly EMI payments. For stock market investors, rising repo rates tighten system liquidity, encouraging funds to flow out of NEPSE equities and into safe high-yield bank fixed deposits.',
      np: 'रिपो दरले नेपालको सम्पूर्ण वित्तीय बजार र तपाईंको व्यक्तिगत खल्तीमा प्रत्यक्ष असर गर्छ। यदि तपाईंले बैंकबाट घरकर्जा, गाडी कर्जा वा व्यक्तिगत ऋण लिनुभएको छ भने राष्ट्र बैंकले रिपो दर बढाउनासाथ केही महिनाभित्र तपाईंको मासिक किस्ता (EMI) बढ्छ। त्यस्तै सेयर बजारका लगानीकर्ताका लागि रिपो दर बढ्नु भनेको बजारबाट पैसा घट्नु हो, जसले गर्दा सेयरको भाउ घट्ने र मुद्दती निक्षेपको ब्याजदर बढ्ने सम्भावना रहन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The operational implementation and market transmission of the Repo Rate operates in 4 steps:',
        np: 'रिपो दर कसरी कार्यान्वयन हुन्छ र यसले बजारमा कसरी असर गर्छ भन्ने प्रक्रिया ४ चरणमा बुझ्न सकिन्छ:'
      },
      steps: [
        {
          title: { en: '1. Macro Assessment & Corridor Fixation', np: '१. आर्थिक समीक्षा र करिडोर निर्धारण' },
          desc: { en: 'NRB evaluates inflation targets, balance of payments (BOP), and foreign exchange reserves to set the policy Repo Rate.', np: 'नेपाल राष्ट्र बैंकले देशको महँगी, शोधनान्तर स्थिति र विदेशी मुद्रा सञ्चितिको विश्लेषण गरी मौद्रिक नीतिमार्फत रिपो दर तोक्छ।' }
        },
        {
          title: { en: '2. Liquidity Auction Bidding', np: '२. तरलता लिलामी र बैंकहरूको सहभागिता' },
          desc: { en: 'When the banking system faces a liquidity squeeze, NRB floats a Repo tender. Commercial banks submit bids offering government bonds as collateral.', np: 'बजारमा लगानीयोग्य पुँजीको अभाव हुँदा राष्ट्र बैंकले रिपो जारी गर्छ र बैंकहरूले सरकारी ऋणपत्र धितो राखेर रकमका लागि बोलकबोल गर्छन्।' }
        },
        {
          title: { en: '3. Transmission to Interbank & Cost of Funds', np: '३. अन्तरबैंक दर र लागतमा प्रभाव' },
          desc: { en: 'The repo cash injects liquidity into commercial banks, establishing the baseline for interbank lending and the banking industry\'s cost of funds.', np: 'राष्ट्र बैंकबाट प्राप्त रकमले बैंकहरूलाई तत्काल राहत दिन्छ र यसले अन्तरबैंक ब्याजदर तथा बैंकहरूको पुँजी संकलन लागत तय गर्छ।' }
        },
        {
          title: { en: '4. Retail Lending and Deposit Adjustments', np: '४. बेस रेट र सर्वसाधारणको ब्याजदर परिवर्तन' },
          desc: { en: 'Banks recalculate their monthly Base Rate, directly altering the interest charged on floating-rate loans and paid on new fixed deposits.', np: 'बैंकहरूले हरेक महिना आफ्नो बेस रेट पुनः हिसाब गर्छन्, जसले गर्दा सर्वसाधारणको ऋणको किस्ता (EMI) र निक्षेपको ब्याजदर घटबढ हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Central bank monetary policy announcements and macro liquidity steering',
        'Determining commercial banks\' marginal cost of borrowing and monthly Base Rates',
        'Forecasting interest rate cycles for home loans, vehicle loans, and corporate credit',
        'Macro sentiment analysis for NEPSE stock market valuations and debt yields'
      ],
      np: [
        'नेपाल राष्ट्र बैंकको मौद्रिक नीति घोषणा र बजारको तरलता व्यवस्थापन गर्दा',
        'वाणिज्य बैंकहरूको पुँजी संकलन लागत र मासिक आधार दर (Base Rate) निर्धारण गर्न',
        'घरकर्जा, गाडी कर्जा र व्यापारिक ऋणको ब्याजदर घट्छ कि बढ्छ अनुमान गर्न',
        'नेप्से सेयर बजारको दिशा र ऋणपत्रहरूको प्रतिफल विश्लेषण गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The NRB Interest Rate Corridor and Monetary Policy Transmission in Nepal',
        np: 'नेपाल राष्ट्र बैंकको ब्याजदर करिडोर र बजारमा मौद्रिक नीतिको प्रभाव'
      },
      body: {
        en: 'In 2017, Nepal Rastra Bank formally adopted the "Interest Rate Corridor" to minimize excessive volatility in short-term money market rates. In Nepal\'s financial structure, the policy Repo Rate sits in the middle. When the economy faces liquidity crunches (as seen in 2021-2022 when imports surged and credit-to-deposit ratios touched statutory ceilings), NRB maintains a higher repo rate to cool down non-essential import credit. When domestic consumption slumps and commercial banks sit on trillions of unlent liquidity (as observed in 2023-2024), NRB systematically cuts the policy Repo Rate to push bank loan rates down, encouraging business expansion and capital investment.',
        np: 'विसं २०७४ मा नेपाल राष्ट्र बैंकले अल्पकालीन ब्याजदरमा हुने अत्यधिक उतारचढाव रोक्न औपचारिक रूपमा "ब्याजदर करिडोर" प्रणाली लागू गर्‍यो। नेपालमा नीतिगत रिपो दर यस करिडोरको मुख्य केन्द्रबिन्दु हो। जब बजारमा चरम तरलता अभाव हुन्छ (जस्तै २०७८-२०७९ मा आयात अत्यधिक बढ्दा र सीडी रेसियो सीमामा पुग्दा), राष्ट्र बैंकले आयात घटाउन र कर्जा नियन्त्रण गर्न रिपो दर बढाउँछ। उता जब बजार सुस्त हुन्छ र बैंकहरूमा खर्बौं रुपैयाँ लगानी नभएर थुप्रिन्छ (जस्तै २०८०-२०८१ मा), राष्ट्र बैंकले रिपो दर घटाएर बैंकहरूलाई सस्तोमा ऋण दिन र आर्थिक गतिविधिलाई चलायमान बनाउन प्रेरित गर्छ।'
      },
      keyPoints: {
        en: [
          'Repo Rate is the rate at which NRB lends short-term funds to banks against government paper.',
          'Anchors the NRB Interest Rate Corridor between the SLF ceiling and deposit collection floor.',
          'Hikes in Repo Rate increase commercial bank Base Rates, pushing up borrowing EMIs.',
          'Cuts in Repo Rate inject liquidity and lower borrowing costs to stimulate economic growth.'
        ],
        np: [
          'रिपो दर राष्ट्र बैंकले सरकारी ऋणपत्र धितो राखेर वाणिज्य बैंकहरूलाई सापटी दिने दर हो।',
          'यसले ब्याजदर करिडोरको केन्द्रमा रहेर समग्र वित्तीय प्रणालीको ब्याजदरलाई डोर्‍याउँछ।',
          'रिपो दर बढ्दा बैंकहरूको आधार दर (Base Rate) बढ्छ र ऋणको किस्ता महँगो हुन्छ।',
          'रिपो दर घट्दा बजारमा तरलता बढ्छ, कर्जा सस्तिन्छ र आर्थिक क्रियाकलाप बढ्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Pradeep takes an NPR 60,00,000 variable-rate home loan from a commercial bank in Kathmandu at a formula of "Base Rate + 2.0%". At origination, the bank\'s Base Rate is 7.5%, resulting in an active loan rate of 9.5% and a monthly EMI of NPR 55,900. Six months later, high imported inflation prompts Nepal Rastra Bank to raise the policy Repo Rate by 150 basis points (1.50%). The bank\'s cost of funds climbs, and its Base Rate increases to 9.0%. Pradeep\'s loan rate immediately adjusts upward to 11.0% (9.0% + 2.0%), causing his monthly EMI to jump to approximately NPR 61,900. An NRB Repo Rate decision added NPR 6,000 to Pradeep\'s monthly family expenses.',
        np: 'प्रदीपले काठमाडौंको एउटा वाणिज्य बैंकबाट "बेस रेट + २.०%" को सर्तमा रु. ६०,००,००० को घरकर्जा लिएका छन्। सुरुमा बैंकको बेस रेट ७.५% हुँदा उनको ऋणको ब्याजदर ९.५% र मासिक किस्ता (EMI) रु. ५५,९०० थियो। छ महिनापछि महँगी बढेका कारण नेपाल राष्ट्र बैंकले रिपो दर १.५०% ले बढाइदियो। बैंकको पुँजी संकलन लागत बढेर बेस रेट ९.०% पुग्यो। प्रदीपको ऋणको ब्याजदर स्वतः बढेर ११.०% (९.०% + २.०%) भयो र मासिक किस्ता बढेर करिब रु. ६१,९०० पुग्यो। राष्ट्र बैंकको एउटै नीतिगत निर्णयले प्रदीपको घरायसी खर्चमा हरेक महिना ६ हजार रुपैयाँ थपिदियो।'
      },
      takeaway: {
        en: 'Macro policy decisions by the central bank directly alter individual household budgets; tracking the Repo Rate allows borrowers to anticipate upcoming interest rate changes.',
        np: 'केन्द्रीय बैंकको एउटै नीतिगत निर्णयले तपाईंको व्यक्तिगत घरायसी बजेटलाई सिधै प्रभावित गर्छ; रिपो दरको विश्लेषण गर्दा भविष्यमा ऋणको किस्ता बढ्छ कि घट्छ पहिले नै अनुमान गर्न सकिन्छ।'
      }
    },
    formula: {
      equation: 'Effective Loan Interest Rate = Commercial Bank Base Rate + Approved Premium Spread',
      variables: [
        { name: 'Base Rate', desc: { en: 'Bank internal benchmark determined by cost of funds (heavily steered by Repo Rate)', np: 'बैंकको पुँजी संकलन लागतबाट निस्कने आधार दर (जो रिपो दरबाट प्रभावित हुन्छ)' } },
        { name: 'Premium Spread', desc: { en: 'Fixed risk markup agreed in the loan sanction letter', np: 'कर्जा लिँदा सम्झौता गरिएको निश्चित नाफा प्रतिशत (प्रिमियम)' } }
      ],
      exampleCalc: {
        en: 'If NRB Repo hike pushes bank Base Rate from 8.2% to 9.4%, and your loan premium is 2.5%: Loan Rate moves from 10.7% to 11.9%.',
        np: 'यदि रिपो दर बढेर बैंकको बेस रेट ८.२% बाट ९.४% पुग्यो र तपाईंको प्रिमियम २.५% छ भने: ऋणको ब्याजदर १०.७% बाट बढेर ११.९% पुग्छ।'
      }
    },
    advantages: {
      en: [
        'Enables central bank to smoothly control excess credit expansion and stabilize domestic inflation',
        'Provides transparent, predictable boundaries for commercial banks managing daily short-term liquidity',
        'Anchors the Interest Rate Corridor, reducing chaotic spikes in interbank call money rates',
        'Acts as a clear macroeconomic barometer for corporate CFOs and financial market participants'
      ],
      np: [
        'केन्द्रीय बैंकलाई बजारमा अनियन्त्रित कर्जा प्रवाह रोक्न र महँगी नियन्त्रण गर्न भरपर्दो हतियार दिन्छ',
        'वाणिज्य बैंकहरूलाई आफ्नो दैनिक तरलता व्यवस्थापन गर्न स्पष्ट र पारदर्शी माध्यम प्रदान गर्छ',
        'अन्तरबैंक कल मनी दरमा हुने अस्वाभाविक उतारचढाव रोकेर ब्याजदर करिडोरलाई सन्तुलित राख्छ',
        'व्यावसायिक घराना र लगानीकर्ताहरूलाई देशको समग्र ब्याजदरको दिशा बुझ्न स्पष्ट सूचक दिन्छ'
      ]
    },
    limitations: {
      en: [
        'Higher repo rates intentionally cool down business growth and can dampen real estate activity',
        'Monetary transmission can be sluggish in Nepal due to structural informal economic lending',
        'Immediate negative sentiment impact on secondary equity markets (NEPSE index dips)',
        'Borrowers with tight cash flows face sudden debt servicing strain when floating loan rates jump'
      ],
      np: [
        'रिपो दर धेरै बढाउँदा व्यापार व्यवसाय सुस्त हुन सक्छ र घरजग्गा तथा औद्योगिक लगानी घट्न सक्छ',
        'नेपालमा अनौपचारिक अर्थतन्त्र ठूलो भएकाले कहिलेकाहीँ केन्द्रीय बैंकको नीतिको असर बजारमा ढिलो देखिने',
        'सेयर बजार (नेप्से) मा तुरुन्तै नकारात्मक मनोवैज्ञानिक असर पर्ने र परिसूचक घट्न सक्ने',
        'निश्चित कमाइ भएका मध्यमवर्गीय ऋणीहरूको मासिक किस्ता ह्वात्तै बढ्दा ऋण तिर्न कठिनाइ हुने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'The Repo Rate is the interest rate that ordinary citizens pay when borrowing from a bank.',
          np: 'रिपो दर भनेको सर्वसाधारण नागरिकले बैंकबाट ऋण लिँदा तिर्नुपर्ने ब्याजदर हो।'
        },
        reality: {
          en: 'The Repo Rate is strictly an institutional borrowing rate between Nepal Rastra Bank and licensed commercial banks. Ordinary consumers borrow at the bank\'s "Base Rate + Premium Spread", which is influenced by the Repo Rate.',
          np: 'रिपो दर भनेको केवल नेपाल राष्ट्र बैंक र इजाजतप्राप्त बैंकहरू बीचको सापटी दर हो। सर्वसाधारणले ऋण लिँदा तिर्ने दर "बेस रेट + प्रिमियम" हो, जो रिपो दरबाट प्रभावित मात्र भएको हुन्छ।'
        }
      },
      {
        myth: {
          en: 'A cut in the Repo Rate means your loan EMI will drop the very next morning.',
          np: 'राष्ट्र बैंकले आज रिपो दर घटायो भने भोलि बिहानैदेखि तपाईंको ऋणको किस्ता घटिहाल्छ।'
        },
        reality: {
          en: 'Monetary transmission takes 1 to 3 months. Banks recalculate their Base Rates on a monthly or quarterly basis; your floating loan rate only adjusts after the bank officially reports its revised lower Base Rate.',
          np: 'मौद्रिक नीतिको असर देखिन १ देखि ३ महिना लाग्छ। बैंकहरूले हरेक महिना वा त्रैमासमा आफ्नो बेस रेट पुनरावलोकन गर्छन्; बैंकले नयाँ बेस रेट सार्वजनिक गरेपछि मात्र तपाईंको ऋणको ब्याजदर घट्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Repo Rate vs Reverse Repo Rate (Deposit Collection)', np: 'रिपो दर (Repo) र रिभर्स रिपो दर (Reverse Repo) बीचको तुलना' },
      subtitle: { en: 'Injecting liquidity into banks vs absorbing excess liquidity from banks', np: 'बजारमा पैसा पठाउने दर र बजारबाट पैसा तान्ने दर बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Repo Rate (Liquidity Injection)', np: 'रिपो दर (Repo Rate)' },
      colB: { en: 'Reverse Repo / Deposit Collection', np: 'रिभर्स रिपो / निक्षेप संकलन दर' },
      rows: [
        {
          feature: { en: 'Cash Flow Direction', np: 'पैसाको बहाव' },
          valA: { en: 'Funds flow from central bank (NRB) into commercial banks', np: 'नेपाल राष्ट्र बैंकबाट वाणिज्य बैंकहरूतर्फ पैसा जान्छ' },
          valB: { en: 'Funds flow from commercial banks into the central bank (NRB)', np: 'वाणिज्य बैंकहरूबाट नेपाल राष्ट्र बैंकतर्फ पैसा तानिन्छ' }
        },
        {
          feature: { en: 'Market Condition', np: 'बजारको अवस्था' },
          valA: { en: 'Triggered during liquidity shortages when banks need cash', np: 'बजारमा तरलता अभाव हुँदा र बैंकहरूलाई पैसा चाहँदा प्रयोग गरिन्छ' },
          valB: { en: 'Triggered during excess liquidity when idle cash threatens interest rate collapse', np: 'बैंकहरूमा अत्यधिक रकम थुप्रिएर ब्याजदर धेरै खस्कन लाग्दा प्रयोग गरिन्छ' }
        },
        {
          feature: { en: 'Position in IRC', np: 'ब्याजदर करिडोरमा स्थान' },
          valA: { en: 'Anchors the center of the NRB Interest Rate Corridor', np: 'ब्याजदर करिडोरको मध्य भाग (नीतिगत दर) मा रहन्छ' },
          valB: { en: 'Represents the absolute bottom floor of the corridor', np: 'ब्याजदर करिडोरको सबैभन्दा तल्लो सीमा (फ्लोर) मा रहन्छ' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'base-rate', name: 'Base Rate', type: 'glossary' },
      { slug: 'inflation', name: 'Inflation', type: 'glossary' },
      { slug: 'emi', name: 'EMI', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Understanding Bank Interest Rates & Base Rates', categorySlug: 'banking', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Nepal Rastra Bank Monetary Policy Demystified', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'EMI Loan Calculator', slug: 'emi', desc: 'Simulate how Base Rate adjustments impact your monthly debt obligations.' }
    ],
    faqs: [
      {
        q: { en: 'How often does Nepal Rastra Bank review and alter the Repo Rate?', np: 'नेपाल राष्ट्र बैंकले कति-कति समयमा रिपो दर पुनरावलोकन गर्छ?' },
        a: {
          en: 'NRB announces the primary Repo Rate in its annual Monetary Policy in Shrawan (July/August) and reviews it quarterly in Kartik (Q1), Magh (Q2), and Baisakh (Q3). However, emergency adjustments can be announced at any time if macroeconomic stability demands.',
          np: 'राष्ट्र बैंकले हरेक वर्ष साउनमा मौद्रिक नीतिमार्फत आधिकारिक रिपो दर घोषणा गर्छ र हरेक त्रैमासमा (कात्तिक, माघ र वैशाख) यसको समीक्षा गर्छ। तर अर्थतन्त्रमा आकस्मिक संकट आएमा जुनसुकै बेला पनि हेरफेर गर्न सक्छ।'
        }
      },
      {
        q: { en: 'What is the relationship between the Repo Rate and the NEPSE index?', np: 'रिपो दर र नेप्से परिसूचक बीच कस्तो सम्बन्ध हुन्छ?' },
        a: {
          en: 'Historically, an inverse relationship exists. When the Repo Rate is reduced, banking liquidity expands, margin loan rates fall, and investors seek higher returns in secondary stocks. When the Repo Rate is aggressively raised, liquidity tightens, margin interest rises, and money shifts toward fixed deposits.',
          np: 'सामान्यतया यिनीहरू बीच उल्टो (विपरित) सम्बन्ध हुन्छ। रिपो दर घट्दा बजारमा पैसा सस्तिन्छ, सेयर कर्जाको ब्याज घट्छ र लगानीकर्ता नेप्सेतिर आकर्षित हुन्छन्। तर रिपो दर बढ्दा ऋण महँगो भई सेयर बजारमा दबाब पर्छ।'
        }
      },
      {
        q: { en: 'What is the Standing Liquidity Facility (SLF) compared to a standard Repo?', np: 'साधारण रिपो र स्थायी तरलता सुविधा (SLF) बीच के फरक छ?' },
        a: {
          en: 'While a standard Repo is an auction-based liquidity window initiated by NRB, the SLF is a lender-of-last-resort facility demanded on-tap by individual commercial banks at a penal ceiling interest rate (Bank Rate) for overnight liquidity crunches.',
          np: 'साधारण रिपो राष्ट्र बैंक आफैंले बजारमा पैसा पठाउन बोलकबोलमार्फत जारी गर्ने उपकरण हो। तर SLF भनेको कुनै बैंकलाई दिनको अन्त्यमा रकम अभाव हुँदा बैंक आफैंले करिडोरको सबैभन्दा महँगो दर (बैंक दर) मा लिने आकस्मिक सापटी हो।'
        }
      },
      {
        q: { en: 'Does a lower Repo Rate guarantee that commercial banks will lend more money to businesses?', np: 'के रिपो दर घट्दैमा बैंकहरूले उद्योगीहरूलाई धेरै ऋण दिन्छन् नै भन्ने ग्यारेन्टी हुन्छ?' },
        a: {
          en: 'Not necessarily. While a lower Repo Rate makes money cheaper, actual credit growth depends on business confidence, consumer demand, political stability, and banks\' risk appetite for non-performing loans (NPLs).',
          np: 'हुँदैन। रिपो दर घटाउँदा पैसा सस्तो त हुन्छ, तर कर्जा प्रवाह हुनका लागि बजारमा व्यापारको माग, राजनीतिक स्थिरता र बैंकहरूको खराब कर्जा (NPL) को जोखिम लिने क्षमता पनि राम्रो हुनुपर्छ।'
        }
      }
    ],
    summary: {
      en: [
        'The Repo Rate is the key policy interest rate at which NRB lends short-term funds to commercial banks.',
        'It serves as the center anchor of the NRB Interest Rate Corridor.',
        'Changes in the Repo Rate dictate commercial bank Base Rates, directly driving your floating loan EMIs.',
        'NRB lowers the repo rate to stimulate economic growth and raises it to curb runaway inflation.'
      ],
      np: [
        'रिपो दर नेपाल राष्ट्र बैंकले वाणिज्य बैंकहरूलाई सरकारी ऋणपत्र धितोमा दिने आधिकारिक अल्पकालीन नीतिगत दर हो।',
        'यो दर नेपालको ब्याजदर करिडोरको केन्द्रमा रहन्छ र समग्र वित्तीय प्रणालीको लागत तय गर्छ।',
        'रिपो दरमा हुने परिवर्तनले बैंकको आधार दर (Base Rate) बदल्छ र तपाईंको घरकर्जाको किस्ता (EMI) लाई प्रभावित गर्छ।',
        'महँगी नियन्त्रण गर्न राष्ट्र बैंकले रिपो दर बढाउँछ भने बजार चलायमान बनाउन यसलाई घटाउँछ।'
      ]
    },
    whereSeen: [
      { title: 'Understanding Bank Interest Rates & Base Rates', type: 'Lesson', url: '/learn/banking/what-is-investing' },
      { title: 'EMI Loan Calculator', type: 'Calculator', url: '/calculators/emi' }
    ],
    meta: {
      title: 'What is Repo Rate in Nepal? NRB Policy Rate & Interest Corridor Guide | risePaisa',
      description: 'Understand the Repo Rate in Nepal. Learn how Nepal Rastra Bank\'s policy rate influences commercial bank Base Rates, loan EMIs, and NEPSE market liquidity.'
    }
  },

  // 4. GDP (GROSS DOMESTIC PRODUCT)
  {
    slug: 'gdp',
    term: 'GDP (Gross Domestic Product)',
    termNp: 'कुल गार्हस्थ्य उत्पादन (GDP)',
    categorySlug: 'economics',
    categoryName: { en: 'Economics', np: 'अर्थतन्त्र' },
    letter: 'G',
    abbreviation: 'GDP',
    synonyms: ['Gross Domestic Product', 'National Output', 'कुल गार्हस्थ्य उत्पादन', 'आर्थिक वृद्धिदर', 'राष्ट्रिय आय'],
    difficulty: 'Intermediate',
    readTime: '5 min read',
    oneLineDef: {
      en: 'Gross Domestic Product (GDP) is the total monetary value of all finished goods and services produced within a country\'s geographic borders over a specific period.',
      np: 'कुल गार्हस्थ्य उत्पादन (GDP) भनेको कुनै निश्चित अवधिभित्र (सामान्यतया एक वर्षमा) देशको भौगोलिक सीमाभित्र उत्पादन गरिएका सम्पूर्ण अन्तिम वस्तु तथा सेवाहरूको कुल बजार मूल्य हो।'
    },
    detailedExplanation: {
      en: 'Gross Domestic Product (GDP) serves as the primary scorecard of a nation\'s economic size, health, and growth trajectory. In Nepal, the National Statistics Office (NSO, formerly the Central Bureau of Statistics - CBS) calculates national accounts, measuring output across three broad sectors: Agriculture (paddy, maize, livestock, forestry), Industry (manufacturing, hydropower construction, mining), and Services (wholesale and retail trade, tourism, banking, education, transport). Economists track two versions: "Nominal GDP" (valued at current market prices) and "Real GDP" (adjusted for inflation relative to a constant baseline year). When policymakers speak of Nepal\'s economic growth rate (e.g. 3.9% or 5.2%), they refer to the percentage change in Real GDP. In Nepal\'s macro structure, while GDP measures domestic production (~NPR 5.7+ Trillion in FY 2023/24), foreign remittance inflows (which approach nearly 26% to 30% of GDP) fuel private consumer expenditure, heavily stimulating the retail and import sectors.',
      np: 'कुल गार्हस्थ्य उत्पादन (GDP) कुनै पनि देशको अर्थतन्त्रको आकार, स्वास्थ्य र विकासको गति नाप्ने सबैभन्दा प्रमुख मापदण्ड हो। नेपालमा राष्ट्रिय तथ्याङ्क कार्यालय (पहिलेको केन्द्रीय तथ्याङ्क विभाग) ले जीडीपीको गणना गर्छ। यसलाई मुख्य तीन क्षेत्रमा बाँडिएको हुन्छ: कृषि (धान, मकै, पशुपालन, वन), उद्योग (उत्पादनमूलक उद्योग, जलविद्युत निर्माण, खानी) र सेवा क्षेत्र (होटल तथा पर्यटन, व्यापार, बैंकिङ, शिक्षा, यातायात)। जीडीपी दुई प्रकारको हुन्छ: "नोमिनल जीडीपी" (चालु बजार मूल्यमा निकालिएको) र "रियल जीडीपी" (महँगीको असर हटाएर निकालिएको वास्तविक उत्पादन)। जब नेपालको आर्थिक वृद्धिदर ३.९% वा ५.२% भनिन्छ, त्यो रियल जीडीपीको वृद्धिदर हो। नेपालको जीडीपी करिब ५७ खर्ब रुपैयाँभन्दा बढी छ। नेपालमा वैदेशिक रोजगारीबाट आउने विप्रेषण (रेमिट्यान्स) को हिस्सा जीडीपीको झन्डै २६ देखि ३० प्रतिशत बराबर छ, जसले बजारमा उपभोग र व्यापारलाई चलायमान बनाइराख्छ।'
    },
    whyItMatters: {
      en: 'A growing GDP creates formal jobs, increases corporate profitability, boosts government tax revenue to build infrastructure (schools, highways, hydropower), and raises the average citizen\'s standard of living. For personal investors, GDP trends highlight thriving industries (such as renewable hydropower and commercial banking in Nepal) while signaling whether the macroeconomic climate supports business expansion or warrants cautious asset allocation.',
      np: 'जीडीपी बढ्नु भनेको देशमा नयाँ रोजगारीका अवसर सिर्जना हुनु, कम्पनीहरूको नाफा बढ्नु, सरकारलाई सडक तथा जलविद्युत बनाउन कर उठ्नु र नागरिकको औसत जीवनस्तर उकासिनु हो। एक लगानीकर्ताका रूपमा जीडीपीको अध्ययन गर्दा कुन क्षेत्र (जस्तै नेपालमा जलविद्युत, बैंकिङ वा पर्यटन) तीव्र गतिमा फस्टाउँदैछ र आफ्नो लगानी कता सुरक्षित हुन्छ भनी सही निर्णय लिन सकिन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Under the standard Expenditure Approach, Nepal\'s GDP is calculated using 4 economic components:',
        np: 'खर्च विधिको आधारमा नेपालको जीडीपी ४ मुख्य खम्बा जोडेर हिसाब गरिन्छ:'
      },
      steps: [
        {
          title: { en: '1. Private Household Consumption (C)', np: '१. निजी घरायसी उपभोग (C)' },
          desc: { en: 'All consumer spending on food, clothing, housing, healthcare, and education-heavily buoyed in Nepal by inbound worker remittances.', np: 'नेपाली परिवारहरूले दैनिक खाना, लत्ताकपडा, घरभाडा, स्वास्थ्य र शिक्षामा गर्ने सम्पूर्ण खर्च-जसलाई रेमिट्यान्सले ठूलो आड दिएको हुन्छ।' }
        },
        {
          title: { en: '2. Gross Domestic Investment (I)', np: '२. कुल आन्तरिक पुँजीगत लगानी (I)' },
          desc: { en: 'Business capital investments in machinery, factories, commercial real estate, and private hydropower plant construction.', np: 'उद्योगी व्यवसायीहरूले कलकारखाना, मेसिनरी, जलविद्युत आयोजना र व्यावसायिक संरचना निर्माणमा गर्ने पुँजीगत लगानी।' }
        },
        {
          title: { en: '3. Government Expenditure (G)', np: '३. सरकारी विकास र चालु खर्च (G)' },
          desc: { en: 'State spending on civil service payroll, national defense, social security allowances, public bridges, airports, and transmission lines.', np: 'सरकारले कर्मचारीको तलब, सामाजिक सुरक्षा भत्ता, सडक, पुल, विमानस्थल र प्रसारण लाइन बनाउन गर्ने बजेटरी खर्च।' }
        },
        {
          title: { en: '4. Net Exports (X - M)', np: '४. खुद निर्यात (निर्यात - आयात)' },
          desc: { en: 'Total exports minus total imports. In Nepal, this is heavily negative due to the massive trade deficit, subtracting from overall GDP.', np: 'कुल निर्यातबाट कुल आयात घटाउँदा आउने अंक। नेपालमा आयात अत्यधिक र निर्यात न्यून भएकाले यो सधैं ऋणात्मक हुन्छ र यसले जीडीपी घटाउँछ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'National economic growth rate benchmarking and fiscal budget planning',
        'Sovereign credit rating assessments and multilateral loan allocations (World Bank, ADB, IMF)',
        'Sectoral asset allocation decisions for institutional mutual funds and corporate conglomerates',
        'Assessing public debt sustainability via Debt-to-GDP ratios'
      ],
      np: [
        'देशको वार्षिक आर्थिक वृद्धिदर र बजेट निर्माणको लक्ष्य निर्धारण गर्दा',
        'अन्तर्राष्ट्रिय दातृ निकायहरू (विश्व बैंक, एसियाली विकास बैंक, IMF) बाट सहुलियतपूर्ण ऋण लिँदा',
        'म्युचुअल फण्ड र ठूला लगानीकर्ताले कुन क्षेत्रमा लगानी गर्ने रणनीति बनाउँदा',
        'देशको ऋण तिर्न सक्ने क्षमता (Debt-to-GDP ratio) विश्लेषण गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Services Shift, Remittance Engine, and Hydropower Expansion in Nepal\'s Economy',
        np: 'सेवा क्षेत्रको बाहुल्यता, रेमिट्यान्सको इन्जिन र जलविद्युतबाट आर्थिक कायापलट'
      },
      body: {
        en: 'Historically an agrarian society, Nepal\'s economic structure has undergone a dramatic structural transformation over the past three decades. Today, the Services sector accounts for approximately 62% of GDP, while Agriculture has declined to roughly 24%, and Industry stands at around 13-14%. Because millions of Nepali youths work in the Gulf countries, Malaysia, and OECD nations, remittances act as the critical fuel for domestic consumption, enabling families to spend on imported goods that generate government customs duties. Recently, large-scale domestic and export-oriented hydropower generation has emerged as a high-potential driver of productive industrial GDP, shifting Nepal from a net electricity importer to an emerging clean energy exporter to India and Bangladesh.',
        np: 'कुनै समय पूर्ण रूपमा कृषिप्रधान रहेको नेपालको अर्थतन्त्र पछिल्लो तीन दशकमा नाटकीय रूपमा बदलिएको छ। आज नेपालको जीडीपीमा सेवा क्षेत्रको योगदान करिब ६२% पुगेको छ, जबकि कृषिको हिस्सा घटेर करिब २४% र उद्योगको हिस्सा करिब १३-१४% मा सीमित छ। लाखौं नेपाली युवा खाडी, मलेसिया र अन्य देशमा पसिना बगाइरहेका कारण त्यहाँबाट आउने रेमिट्यान्सले नेपालको घरायसी उपभोग धानेको छ। हालैका वर्षहरूमा तीव्र गतिमा बनिरहेका जलविद्युत आयोजनाहरूले नेपालको औद्योगिक जीडीपीलाई नयाँ उचाइ दिँदैछन्, जसले गर्दा नेपाल बिजुली आयात गर्ने देशबाट भारत र बंगलादेशमा स्वच्छ ऊर्जा निर्यात गर्ने मुलुक बन्दैछ।'
      },
      keyPoints: {
        en: [
          'Nepal\'s nominal GDP stands at approximately NPR 5.7+ Trillion (over $43 Billion USD).',
          'The Services sector dominates (~62%), followed by Agriculture (~24%) and Industry (~14%).',
          'Worker remittances (~26-30% of GDP) provide the cashflow driving private consumption.',
          'Hydropower generation is the fastest-growing industrial contributor to national value addition.'
        ],
        np: [
          'नेपालको कुल गार्हस्थ्य उत्पादन (GDP) करिब ५७ खर्ब रुपैयाँ (करिब ४३ अर्ब अमेरिकी डलर) भन्दा माथि छ।',
          'सेवा क्षेत्रको हिस्सा सबैभन्दा बढी (~६२%) छ, त्यसपछि कृषि (~२४%) र उद्योग (~१४%) आउँछन्।',
          'रेमिट्यान्सको हिस्सा जीडीपीको करिब २६ देखि ३० प्रतिशत छ, जसले आन्तरिक उपभोग धानेको छ।',
          'जलविद्युत उत्पादन नेपालको उत्पादनमूलक जीडीपी बढाउने सबैभन्दा तीव्र र सम्भावनायुक्त क्षेत्र हो।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Suppose the National Statistics Office reports that Nepal\'s Real GDP grew by 3.9% in the current fiscal year. Breaking down the figures, good monsoon rains boosted agricultural paddy yields by 4.5%, new private hydropower projects added 500 MW of generation capacity boosting industrial output, and tourist arrivals crossing 1 million stimulated hotels and airlines in Kathmandu and Pokhara. However, high interest rates and a slump in government capital expenditure slowed construction and retail cement/steel sales. An entrepreneur observing this GDP breakdown decides to invest in an eco-resort near Chitwan and buy shares in an operational river-basin hydropower project rather than launching a brick-and-mortar retail trading shop.',
        np: 'मानौं राष्ट्रिय तथ्याङ्क कार्यालयले चालु आर्थिक वर्षमा नेपालको वास्तविक जीडीपी ३.९% ले बढेको तथ्याङ्क सार्वजनिक गर्‍यो। यसको भित्री विश्लेषण हेर्दा: मनसुन राम्रो भएकाले धान उत्पादन ४.५% ले बढ्यो, नयाँ ५०० मेगावाट जलविद्युत राष्ट्रिय प्रसारण लाइनमा जोडिँदा औद्योगिक उत्पादन उकासियो, र १० लाखभन्दा बढी विदेशी पर्यटक आउँदा होटल तथा एयरलाइन्स फस्टाए। तर चर्को ब्याजदर र सरकारको पुँजीगत खर्च ढिलाइले सिमेन्ट, छड र घर निर्माण क्षेत्र सुस्त रह्यो। यो तथ्याङ्क पढेर एउटा नयाँ व्यवसायीले खुद्रा पसल खोल्नुको सट्टा चितवनमा रिसोर्ट खोल्न र जलविद्युत कम्पनीको सेयर किन्न आफ्नो पुँजी लगाउने बुद्धिमानी निर्णय गर्छ।'
      },
      takeaway: {
        en: 'GDP is not merely an abstract government statistic; sectoral GDP data reveals where real economic capital is expanding and where business opportunities lie.',
        np: 'जीडीपी केवल भाषणमा भनिने सरकारी तथ्याङ्क मात्र होइन; कुन क्षेत्रको जीडीपी बढिरहेको छ भन्ने बुझ्दा आफ्नो व्यवसाय र सेयर लगानीलाई सहि ठाउँमा केन्द्रित गर्न सकिन्छ।'
      }
    },
    formula: {
      equation: 'GDP = C + I + G + (X - M)',
      variables: [
        { name: 'C', desc: { en: 'Private Household Consumption expenditure', np: 'निजी घरायसी उपभोग खर्च' } },
        { name: 'I', desc: { en: 'Gross Domestic Business & Capital Investment', np: 'निजी क्षेत्रको कुल पुँजीगत लगानी' } },
        { name: 'G', desc: { en: 'Government Consumption and Public Infrastructure Spending', np: 'सरकारी चालु तथा विकास निर्माण खर्च' } },
        { name: 'X - M', desc: { en: 'Net Exports (Total Exports minus Total Imports)', np: 'खुद निर्यात (कुल निर्यातबाट कुल आयात घटाएर आउने रकम)' } }
      ],
      exampleCalc: {
        en: 'If Nepal\'s C = 4,800B, I = 1,400B, G = 600B, Exports (X) = 200B, and Imports (M) = 1,700B: GDP = 4,800 + 1,400 + 600 + (200 - 1,700) = 6,800 - 1,500 = NPR 5,300 Billion (5.3 Trillion).',
        np: 'यदि नेपालको C = ४,८०० अर्ब, I = १,४०० अर्ब, G = ६०० अर्ब, निर्यात = २०० अर्ब र आयात = १,७०० अर्ब भए: GDP = ४,८०० + १,४०० + ६०० + (२०० - १,७००) = रु. ५,३०० अर्ब (५.३ खर्ब) हुन्छ।'
      }
    },
    advantages: {
      en: [
        'Universally standardized indicator for measuring national economic productivity and growth',
        'Enables objective comparison of living standards and economic output across global nations',
        'Guides government policymakers on taxation, public borrowing, and social security budgets',
        'Assists institutional investors in identifying macro business cycles and sectoral tailwinds'
      ],
      np: [
        'देशको समग्र आर्थिक उत्पादन र विकासको गति नाप्ने विश्वव्यापी मान्यता प्राप्त सूचक',
        'विभिन्न देशहरू बीचको आर्थिक आकार र प्रतिव्यक्ति आय निष्पक्ष रूपमा तुलना गर्न सकिने',
        'सरकारलाई कर नीति, आन्तरिक तथा बाह्य ऋण र पूर्वाधार विकासको योजना बनाउन मद्दत गर्ने',
        'लगानीकर्ताहरूलाई देशको आर्थिक चक्र बुझेर सही क्षेत्रमा पुँजी लगाउन मार्गनिर्देशन गर्ने'
      ]
    },
    limitations: {
      en: [
        'Ignores wealth inequality; a surging GDP can mask deep economic distress among the poorest deciles',
        'Excludes the massive informal economy (shadow cash transactions, unregistered subsistence farming)',
        'Fails to capture environmental degradation, deforestation, and natural resource depletion',
        'Does not directly measure human happiness, mental health, healthcare quality, or social cohesion'
      ],
      np: [
        'धनी र गरिब बीचको असमानता देखाउँदैन; जीडीपी बढे पनि गरिब जनता झन् गरिब भइरहेका हुन सक्छन्',
        'नेपालको ठूलो अनौपचारिक अर्थतन्त्र (नगद कारोबार, दर्ता नभएका साना व्यवसाय) यसमा छुट्छ',
        'वातावरणीय विनाश, वनजङ्गल फडानी र नदीनालाको दोहनलाई यसले लागतको रूपमा घटाउँदैन',
        'नागरिकको सुख, मानसिक शान्ति, स्वास्थ्यको गुणस्तर वा सामाजिक सद्भाव यसले नाप्न सक्दैन'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'GDP includes all the foreign remittance money sent home by Nepali migrant workers.',
          np: 'विदेशमा काम गर्ने नेपालीले पठाएको सम्पूर्ण रेमिट्यान्स सीधै नेपालको जीडीपी भित्र जोडिन्छ।'
        },
        reality: {
          en: 'Gross Domestic Product measures only production within Nepal\'s geographic borders. Remittance earned abroad is captured under Gross National Income (GNI), though when families spend that remittance on food and cement in Nepal, that consumption enters the GDP.',
          np: 'जीडीपीले केवल नेपालको सीमाभित्र उत्पादन भएको मूल्य मात्र नाप्छ। विदेशमा कमाएको रेमिट्यान्स सिधै कुल राष्ट्रिय आय (GNI) मा जोडिन्छ। तर त्यो पैसा नेपालमा ल्याएर चामल वा सिमेन्ट किन्दा भने उपभोग (C) मार्फत जीडीपीमा जोडिन्छ।'
        }
      },
      {
        myth: {
          en: 'A country with a high GDP automatically guarantees a luxurious life for all its citizens.',
          np: 'उच्च जीडीपी भएको देशका सबै नागरिक स्वतः धनी र सुखी हुन्छन्।'
        },
        reality: {
          en: 'Total GDP must be divided by total population to calculate "GDP per capita". India has the world\'s 5th largest GDP, yet its GDP per capita is modest. Nepal\'s GDP per capita stands at around $1,400, reflecting substantial development work ahead.',
          np: 'सम्पन्नता बुझ्न कुल जीडीपीलाई जनसंख्याले भाग गरेर "प्रतिव्यक्ति जीडीपी" (GDP per capita) हेर्नुपर्छ। भारत विश्वको पाँचौं ठूलो अर्थतन्त्र भए पनि प्रतिव्यक्ति आय कम छ। नेपालको प्रतिव्यक्ति आय करिब १,४०० डलर छ, जसले अझै धेरै आर्थिक सुधार आवश्यक रहेको देखाउँछ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Nominal GDP vs Real GDP', np: 'नोमिनल जीडीपी (Nominal) र रियल जीडीपी (Real) बीचको तुलना' },
      subtitle: { en: 'Current market prices vs inflation-adjusted constant prices', np: 'चालु बजार मूल्य र महँगी समायोजन पछिको वास्तविक उत्पादन' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Nominal GDP', np: 'नोमिनल जीडीपी (Nominal GDP)' },
      colB: { en: 'Real GDP', np: 'रियल जीडीपी (Real GDP)' },
      rows: [
        {
          feature: { en: 'Price Level Used', np: 'प्रयोग गरिने मूल्य' },
          valA: { en: 'Calculated using current prevailing market prices of the reporting year', np: 'सम्बन्धित वर्षको चालु बजार भाउको आधारमा निकालिन्छ' },
          valB: { en: 'Calculated using constant prices of a predetermined base year (removes inflation)', np: 'एउटा निश्चित आधार वर्षको स्थिर मूल्यमा निकालिन्छ (महँगीको असर हटाइन्छ)' }
        },
        {
          feature: { en: 'Growth Cause', np: 'वृद्धि हुने कारण' },
          valA: { en: 'Can rise purely because inflation made goods more expensive, even if output stayed flat', np: 'उत्पादन नबढे पनि केवल सामानको भाउ महँगिएकै भरमा यो अंक बढ्न सक्छ' },
          valB: { en: 'Rises ONLY if physical production and services output genuinely increased', np: 'देशमा वस्तु तथा सेवाको वास्तविक उत्पादन बढेमा मात्र यो अंक बढ्छ' }
        },
        {
          feature: { en: 'Official Growth Rate', np: 'आधिकारिक वृद्धिदर' },
          valA: { en: 'Not used for official national growth rate headlines', np: 'देशको वास्तविक आर्थिक वृद्धिदर घोषणा गर्न यो प्रयोग गरिँदैन' },
          valB: { en: 'The standard benchmark for national economic growth announcements (e.g. 4.5%)', np: 'सरकार र केन्द्रीय बैंकले घोषणा गर्ने आधिकारिक आर्थिक वृद्धिदर यही हो' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'inflation', name: 'Inflation', type: 'glossary' },
      { slug: 'purchasing-power', name: 'Purchasing Power', type: 'glossary' },
      { slug: 'repo-rate', name: 'Repo Rate', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Macro Economy: GDP, Monetary Policy & Growth', categorySlug: 'economics', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Understanding Nepal\'s Economic Fundamentals', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'CAGR Growth Calculator', slug: 'cagr', desc: 'Calculate multi-year compounded economic or portfolio growth rates.' }
    ],
    faqs: [
      {
        q: { en: 'What is the difference between GDP and GNP / GNI in Nepal\'s context?', np: 'नेपालको सन्दर्भमा GDP र GNP (वा GNI) बीच के भिन्नता छ?' },
        a: {
          en: 'GDP measures what is produced geographically inside Nepal, regardless of who produces it. Gross National Income (GNI) measures the income earned by Nepali citizens globally, adding foreign remittances and net income earned abroad while subtracting profits repatriated by foreign entities.',
          np: 'जीडीपीले नेपालको भूगोलभित्र उत्पादन भएको कुल मूल्य नाप्छ, चाहे त्यो नेपालीले गरोस् वा विदेशीले। तर कुल राष्ट्रिय आय (GNI) ले संसारभरि रहेका नेपाली नागरिकको कुल कमाइ नाप्छ, जसमा विदेशबाट पठाएको रेमिट्यान्स जोडिन्छ र नेपालबाट विदेशी कम्पनीले लगेको नाफा घटाइन्छ।'
        }
      },
      {
        q: { en: 'Why is Nepal\'s massive trade deficit a structural drag on our GDP?', np: 'नेपालको ठूलो व्यापार घाटाले हाम्रो जीडीपीलाई कसरी घटाउँछ?' },
        a: {
          en: 'In the formula GDP = C + I + G + (X - M), imports (M) are subtracted. When Nepal imports NPR 17 for every NPR 1 of exports, foreign goods satisfy domestic demand rather than domestic factories, sending domestic capital abroad and dragging down the net GDP calculation.',
          np: 'जीडीपीको सूत्र GDP = C + I + G + (X - M) मा आयात (M) लाई घटाइन्छ। नेपालले १ रुपैयाँको सामान बेच्दा १७ रुपैयाँको सामान विदेशबाट किन्ने भएकाले हाम्रो पुँजी बाहिरिन्छ र स्वदेशी उत्पादन कमजोर भई जीडीपीमा ठूलो धक्का लाग्छ।'
        }
      },
      {
        q: { en: 'How does hydropower electricity export boost Nepal\'s future GDP?', np: 'जलविद्युत निर्यातले नेपालको भविष्यको जीडीपीलाई कसरी उकास्छ?' },
        a: {
          en: 'Hydropower generation boosts domestic industrial output (I), replaces expensive imported fossil fuels (reducing M), and exports surplus green power to India and Bangladesh (increasing X), transforming the net export component and driving double-digit clean GDP growth.',
          np: 'जलविद्युतले देशभित्र औद्योगिक उत्पादन (I) बढाउँछ, महँगो डिजेल-पेट्रोलको आयात (M) घटाउँछ, र भारत तथा बंगलादेशमा बिजुली बेचेर निर्यात (X) बढाउँछ, जसले गर्दा व्यापार घाटा घटेर जीडीपी तीव्र गतिमा बढ्छ।'
        }
      },
      {
        q: { en: 'What is Nepal\'s Debt-to-GDP ratio, and why does it matter?', np: 'नेपालको ऋण र जीडीपीको अनुपात (Debt-to-GDP) कति छ र यो किन महत्वपूर्ण छ?' },
        a: {
          en: 'Nepal\'s public debt-to-GDP ratio hovers around 42% to 44%, balanced between internal domestic bonds and external multilateral loans. Keeping this ratio below 50% ensures that the country remains solvent, avoids sovereign default, and preserves fiscal stability.',
          np: 'नेपालको सार्वजनिक ऋण जीडीपीको करिब ४२% देखि ४४% को हाराहारीमा छ, जसमा आन्तरिक ऋण र वैदेशिक ऋण समावेश छन्। यो अनुपात ५०% भन्दा तल रहँदासम्म देश टाट पल्टिने (Default) जोखिम हुँदैन र अर्थतन्त्र सुरक्षित मानिन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'GDP measures the total monetary value of all final goods and services produced inside Nepal.',
        'Calculated using the expenditure model: GDP = Consumption + Investment + Government + Net Exports.',
        'Nepal\'s economy is heavily service-driven (~62%), supported by inbound remittances driving domestic demand.',
        'Real GDP growth reflects genuine production increases stripped of price inflation distortions.'
      ],
      np: [
        'जीडीपी भनेको नेपालको भौगोलिक सीमाभित्र उत्पादन भएका सम्पूर्ण अन्तिम वस्तु र सेवाको कुल बजार मूल्य हो।',
        'खर्च विधिको सूत्र अनुसार: जीडीपी = उपभोग (C) + लगानी (I) + सरकारी खर्च (G) + खुद निर्यात (X - M)।',
        'नेपालको अर्थतन्त्रमा सेवा क्षेत्रको बाहुल्यता (~६२%) छ र यसलाई विदेशबाट आउने रेमिट्यान्सले ठूलो आड दिएको छ।',
        'वास्तविक आर्थिक वृद्धिदर महँगीको असर हटाएर निकालिने रियल जीडीपी (Real GDP) बाट मात्र थाहा हुन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The Macro Economy: GDP, Monetary Policy & Growth', type: 'Lesson', url: '/learn/economics/what-is-investing' },
      { title: 'CAGR Growth Calculator', type: 'Calculator', url: '/calculators/cagr' }
    ],
    meta: {
      title: 'What is GDP in Nepal? Gross Domestic Product, Remittance & Growth Guide | risePaisa',
      description: 'Everything you need to know about Nepal\'s GDP. Learn how national output is calculated, sectoral breakdowns (services vs agriculture), and economic indicators.'
    }
  },

  // 5. BUDGET (PERSONAL & NATIONAL)
  {
    slug: 'budget',
    term: 'Budget (Personal & National)',
    termNp: 'बजेट (व्यक्तिगत र राष्ट्रिय)',
    categorySlug: 'personal-finance',
    categoryName: { en: 'Personal Finance', np: 'व्यक्तिगत वित्त' },
    letter: 'B',
    abbreviation: 'Budget',
    synonyms: ['50/30/20 Budget', 'Cashflow Plan', 'मासिक बजेट', 'आय-व्यय योजना', 'वित्तीय खाका'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A budget is a forward-looking financial roadmap that allocates expected income toward essential needs, lifestyle desires, savings, and investments.',
      np: 'बजेट भनेको भविष्यमा हुने अनुमानित आम्दानीलाई अनिवार्य आवश्यकता, व्यक्तिगत इच्छा, बचत र लगानीका लागि पूर्वयोजना बनाएर बाँडफाँड गर्ने वित्तीय खाका हो।'
    },
    detailedExplanation: {
      en: 'A budget is not a restrictive financial prison; rather, it is a deliberate system that grants you permission to spend your hard-earned money intentionally without guilt or anxiety. At the personal level, a budget tracks cash inflows (salary, freelancing, business dividends, remittances) and allocates them across three primary buckets: Non-negotiable Needs (rent, dal-bhat groceries, electricity, school fees), Lifestyle Wants (dining out, festive Dashain shopping, weekend trips to Pokhara), and Future Wealth Building (emergency fund reserves, SIP mutual funds, NEPSE shares). One globally proven framework adapted for urban Nepal is the "50/30/20 Rule" (50% Needs, 30% Wants, 20% Investments). At the macroeconomic scale, the Government of Nepal presents the "National Budget" annually on Jestha 15 in Parliament, outlining anticipated revenue from customs and income taxes alongside allocations for recurring administrative civil service salaries and capital development projects (airports, highways, irrigation canals).',
      np: 'बजेट भनेको खर्चमा अनावश्यक प्रतिबन्ध लगाउने जेल होइन, बरु आफ्नो मिहिनेतको कमाइलाई बिना कुनै चिन्ता र पश्चाताप योजनाबद्ध रूपमा खर्च गर्ने अधिकार दिने प्रणाली हो। व्यक्तिगत तहमा बजेटले तपाईंको आम्दानी (तलब, व्यवसाय, परामर्श शुल्क वा रेमिट्यान्स) लाई तीन मुख्य भागमा बाँड्छ: अनिवार्य आवश्यकता (कोठाभाडा, दालचामल, बिजुली, सन्तानको स्कुल फी), व्यक्तिगत रहर (रेस्टुरेन्ट, दशैंको किनमेल, घुमघाम), र भविष्यको पुँजी निर्माण (आपतकालीन कोष, सेयर लगानी, म्युचुअल फण्डको SIP)। यसका लागि विश्वव्यापी रूपमा लोकप्रिय "५०/३०/२० को नियम" नेपालका लागि निकै उपयोगी मानिन्छ। राष्ट्रिय स्तरमा नेपाल सरकारका अर्थमन्त्रीले हरेक वर्ष जेठ १५ गते संसदमा राष्ट्रिय बजेट प्रस्तुत गर्छन्, जसमा भन्सार र करबाट उठ्ने राजस्व तथा कर्मचारीको तलब (चालु खर्च) र सडक, पुल, विमानस्थल बनाउने (पुँजीगत खर्च) को हिसाबकिताब पेश गरिन्छ।'
    },
    whyItMatters: {
      en: 'Without a budget, money evaporates through mindless micro-spending-a few thousand rupees spent on spontaneous café visits, food delivery apps, and impulse online clothing purchases. When an emergency strikes, people without a budget are forced to take high-interest cooperative loans (16-18%) or liquidate investments at unfavorable prices. A budget ensures that your money works for your future self before you spend it on short-term pleasures.',
      np: 'बजेट नबनाउँदा पैसा कता गयो पत्तै नपाई सकिन्छ-दैनिक क्याफेमा कफी, अनलाइनबाट खाना अर्डर र सामाजिक सञ्जाल हेरेर गरिने अनावश्यक किनमेलले महिनाको अन्त्यमा खल्ती रित्तिन्छ। जब कुनै आकस्मिक संकट आउँछ, बजेट नहुनेहरू सहकारीबाट चर्को ब्याज (१६-१८%) मा ऋण लिन वा घाटा खाएर सेयर बेच्न बाध्य हुन्छन्। बजेटले तपाईंको पैसालाई रहरमा उडाउनुअघि भविष्यका लागि लगानी गर्न सुनिश्चित गर्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Creating and executing an effective personal budget follows 4 practical steps:',
        np: 'प्रभावकारी व्यक्तिगत बजेट बनाउने र कार्यान्वयन गर्ने प्रक्रिया ४ चरणमा बुझ्न सकिन्छ:'
      },
      steps: [
        {
          title: { en: '1. Net Income Tally', np: '१. वास्तविक कुल आम्दानीको हिसाब' },
          desc: { en: 'Calculate your actual take-home pay after official TDS income tax and Social Security Fund (SSF) deductions.', np: 'कर (TDS) र सामाजिक सुरक्षा कोष (SSF) कट्टी भएपछि बैंक खातामा आइपुग्ने खुद तलब वा कुल आम्दानी हिसाब गर्नुहोस्।' }
        },
        {
          title: { en: '2. 50/30/20 Allocation', np: '२. ५०/३०/२० नियम अनुसार रकम बाँडफाँड' },
          desc: { en: 'Divide your net income into 50% for living needs, 30% for discretionary wants, and at least 20% for savings and investment.', np: 'आम्दानीलाई ५०% अनिवार्य खर्च (Needs), ३०% व्यक्तिगत रहर (Wants), र कम्तीमा २०% बचत तथा लगानीमा विभाजन गर्नुहोस्।' }
        },
        {
          title: { en: '3. Pay Yourself First (Automation)', np: '३. पहिले आफ्नै भविष्यलाई भुक्तानी' },
          desc: { en: 'On salary day, immediately route your 20% investment share into automated SIPs or emergency bank deposits before paying living expenses.', np: 'तलब आउनासाथ सुरुमै २०% लगानीको हिस्सा सिधै SIP वा आपतकालीन खातामा पठाइदिनुहोस्, बाँकी रहेको पैसाबाट मात्र खर्च सुरु गर्नुहोस्।' }
        },
        {
          title: { en: '4. Monthly Review & Adjustment', np: '४. महिनाको अन्त्यमा समीक्षा र सुधार' },
          desc: { en: 'Compare actual monthly bank and digital wallet outflows against budgeted limits, making minor tweaks for upcoming festive months.', np: 'महिनाको अन्त्यमा वालेट र बैंक स्टेटमेन्ट हेरी तोकिएको बजेट भित्र बसियो कि नाघ्यो समीक्षा गरी दशैंतिहार जस्ता चाडपर्व अनुसार समायोजन गर्नुहोस्।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Personal cashflow management, debt reduction, and net worth tracking',
        'National fiscal policy presented annually by the Finance Minister on Jestha 15',
        'Corporate departmental budgeting, OPEX control, and CAPEX planning',
        'Family financial preparation for major life milestones (weddings, home purchases)'
      ],
      np: [
        'व्यक्तिगत खर्च व्यवस्थापन, ऋण मुक्ति र कुल सम्पत्ति वृद्धि गर्न',
        'नेपाल सरकारले हरेक वर्ष जेठ १५ गते संसदमा देशको बजेट प्रस्तुत गर्दा',
        'कम्पनी तथा संघसंस्थाहरूले वार्षिक प्रशासनिक र पुँजीगत खर्च योजना बनाउँदा',
        'विवाह, घर निर्माण वा सन्तानको उच्च शिक्षा जस्ता ठूला पारिवारिक लक्ष्यको तयारी गर्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The 50/30/20 Rule in Nepal: Adapting to Rent Realities and Dashain Pressures',
        np: 'नेपालमा ५०/३०/२० को नियम: कोठाभाडा, संयुक्त परिवार र चाडपर्वको यथार्थ'
      },
      body: {
        en: 'In Western textbooks, the 50/30/20 rule assumes an individual living independently with single financial responsibilities. In urban Nepal, reality is nuanced: young professionals in Kathmandu often face steep room rents (averaging NPR 15,000 to 25,000), support extended parents in hometown districts, and face intense cyclical spending surges during Dashain and Tihar. Financial planners in Nepal recommend adapting the model: if Kathmandu living costs demand 60% for Needs, compress Wants to 20% and maintain the non-negotiable 20% for Savings and Investments. Furthermore, establishing a "Dashain Sinking Fund" by setting aside 5% of monthly income throughout the year prevents taking high-interest loans when festival shopping arrives in Ashoj.',
        np: 'पश्चिमा पुस्तकहरूमा लेखिएको ५०/३०/२० नियम एक्लै बस्ने व्यक्तिका लागि बनाइएको हो। तर नेपालको यथार्थ फरक छ: काठमाडौंमा बस्ने युवाहरूको कोठाभाडा नै १५ देखि २५ हजार पुग्छ, गाउँमा आमाबुवालाई पैसा पठाउनुपर्छ, र दशैं-तिहारमा अचानक ठूलो खर्च आइपर्छ। त्यसैले नेपाली वित्तीय सल्लाहकारहरू यसलाई आवश्यकता अनुसार ढाल्न सुझाउँछन्: यदि काठमाडौंको महँगीले अनिवार्य खर्च ६०% पुग्छ भने रहर (Wants) लाई २०% मा झार्नुहोस् तर बचत र लगानीको २०% हिस्सालाई कहिल्यै नघटाउनुहोस्। साथै हरेक महिना आम्दानीको ५% रकम "चाडपर्व कोष" मा छुट्याउँदा दशैंको बेला ऋण खोज्नुपर्ने बाध्यता सधैंका लागि अन्त्य हुन्छ।'
      },
      keyPoints: {
        en: [
          'The 50/30/20 framework divides take-home pay into Needs (50%), Wants (30%), and Investments (20%).',
          'Nepal\'s National Budget is mandated by the Constitution to be presented on Jestha 15.',
          'Always "Pay Yourself First" by automating investments on the day your salary is credited.',
          'Create seasonal sinking funds to absorb annual cultural spikes like Dashain and wedding seasons.'
        ],
        np: [
          '५०/३०/२० नियमले खुद आम्दानीलाई आवश्यकता (५०%), रहर (३०%) र लगानी (२०%) मा बाँड्छ।',
          'नेपालको संविधानले हरेक वर्ष जेठ १५ गते राष्ट्रिय बजेट संसदमा पेश गर्न अनिवार्य गरेको छ।',
          'तलब खातामा आउनासाथ सुरुमै लगानीको हिस्सा छुट्टाएर "पहिले आफैंलाई भुक्तानी" गर्नुहोस्।',
          'दशैंतिहार र विवाहको खर्च धान्न वर्षभरि अलि-अलि गरेर छुट्टै चाडपर्व कोष (Sinking Fund) बनाउनुहोस्।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Suman earns NPR 60,000 monthly take-home pay working in Lalitpur. Previously, he had no budget: he spent freely on eSewa restaurant orders, weekend parties, and branded clothes, finding his bank balance at zero before the 25th of every month. Suman institutes the 50/30/20 budget. He caps his Needs at NPR 30,000 (50% - NPR 16,000 apartment rent, NPR 10,000 groceries, NPR 4,000 utilities/commute). He limits his Wants to NPR 18,000 (30% - dining out, weekend movies, gym). Most importantly, on the 1st of every month, he automates NPR 12,000 (20%): NPR 7,000 routes directly into an open-ended equity SIP, and NPR 5,000 goes into an emergency fund. Within 12 months, Suman accumulates NPR 60,000 in liquid emergency cash and invests NPR 84,000 in compounding mutual fund units without sacrificing his social life.',
        np: 'ललितपुरमा काम गर्ने सुमनको मासिक खुद तलब रु. ६०,००० छ। पहिले उनको कुनै बजेट थिएन: जहाँ मन लाग्यो त्यहीँ खर्च गर्थे, अनलाइन खाना अर्डर र साथीहरूसँग पार्टी गर्दा महिनाको २५ गते नपुग्दै खाता रित्तिन्थ्यो। सुमनले ५०/३०/२० बजेटिङ सुरु गरे। उनले अनिवार्य खर्च (Needs) लाई रु. ३०,००० (५०% - कोठाभाडा १६ हजार, दालचामल १० हजार, बिजुली/यातायात ४ हजार) मा सीमित गरे। रहर (Wants) का लागि रु. १८,००० (३०% - रेस्टुरेन्ट, सिनेमा, जिम) छुट्याए। सबैभन्दा महत्वपूर्ण कुरा, तलब आएकै दिन उनले रु. १२,००० (२०%) सुरुमै कटाए: रु. ७,००० सिधै म्युचुअल फण्डको SIP मा र रु. ५,००० आपतकालीन खातामा हाले। एक वर्षमै सुमनको आपतकालीन कोषमा रु. ६०,००० जम्मा भयो र रु. ८४,००० सेयर बजारमा लगानी भयो, त्यो पनि आफ्नो रहर नमारेर।'
      },
      takeaway: {
        en: 'A budget does not stop you from enjoying life; it guarantees that you can enjoy your lifestyle today while building lifelong financial freedom.',
        np: 'बजेटले तपाईंलाई जीवनको आनन्द लिनबाट रोक्दैन; बरु यसले आजको जीवन पनि रमाइलो बनाउँदै भविष्यको आर्थिक स्वतन्त्रता सुनिश्चित गर्छ।'
      }
    },
    formula: {
      equation: 'Net Income = Needs (50%) + Wants (30%) + Wealth & Investments (20%)',
      variables: [
        { name: 'Needs (50%)', desc: { en: 'Basic survival costs: rent, groceries, transport, utility bills, debt minimums', np: 'आधारभूत बाँच्ने खर्च: कोठाभाडा, खाद्यान्न, बिजुली, यातायात र न्यूनतम ऋण किस्ता' } },
        { name: 'Wants (30%)', desc: { en: 'Discretionary lifestyle choices: dining out, vacations, gadgets, fashion', np: 'व्यक्तिगत रहर: क्याफे, घुमघाम, नयाँ ग्याजेट र फेसनका सामान' } },
        { name: 'Investments (20%)', desc: { en: 'Compounding wealth generation: SIPs, NEPSE shares, emergency buffer', np: 'भविष्यको सम्पत्ति: आपतकालीन बचत, सेयर बजार र म्युचुअल फण्डको SIP' } }
      ],
      exampleCalc: {
        en: 'For an NPR 50,000 salary: Needs = NPR 25,000 (50%), Wants = NPR 15,000 (30%), Savings/Investments = NPR 10,000 (20%).',
        np: 'रु. ५०,००० को तलबमा: आवश्यकता = रु. २५,००० (५०%), रहर = रु. १५,००० (३०%), बचत तथा लगानी = रु. १०,००० (२०%)।'
      }
    },
    advantages: {
      en: [
        'Eliminates end-of-month financial anxiety by establishing total clarity over where money goes',
        'Forces the disciplined habit of "Paying Yourself First" through automated wealth generation',
        'Prevents accumulation of toxic, high-interest consumer debt on credit cards and personal loans',
        'Empowers couples and families to align on shared long-term life goals with zero arguments'
      ],
      np: [
        'पैसा कहाँ खर्च भयो भन्ने पूर्ण पारदर्शिता दिएर महिनाको अन्त्यमा हुने तनाव सदाका लागि अन्त्य गर्छ',
        'खर्च गर्नुअघि नै भविष्यका लागि लगानी गर्ने "पहिले आफैंलाई भुक्तानी" को बानी बसाल्छ',
        'क्रेडिट कार्ड, साथीभाइ वा चर्को ब्याजको व्यक्तिगत ऋणको दलदलमा फस्नबाट जोगाउँछ',
        'परिवारमा पैसाको विषयमा हुने झगडा रोकेर साझा आर्थिक लक्ष्यहरू पूरा गर्न मद्दत गर्छ'
      ]
    },
    limitations: {
      en: [
        'Requires persistent tracking discipline during the initial 60 to 90 days of adoption',
        'Can feel overly rigid if sudden unexpected medical or family expenses occur without a sinking fund',
        'Low-income earners may struggle to keep basic survival needs below the strict 50% threshold',
        'Couples with divergent financial mindsets may encounter friction when setting category caps'
      ],
      np: [
        'सुरुका २-३ महिनासम्म दैनिक खर्च टिप्ने र अनुशासनमा बस्ने धैर्यता आवश्यक पर्ने',
        'चाडपर्व वा आकस्मिक स्वास्थ्य समस्या आउँदा पूर्वतयारी नभए बजेट बिग्रने जोखिम',
        'न्यून आय भएका परिवारका लागि अनिवार्य छाक टार्ने खर्च नै आम्दानीको ७०-८०% पुग्न सक्ने',
        'श्रीमान-श्रीमती बीच खर्च गर्ने बानी नमिल्दा सुरुवाती दिनमा मनमुटाव हुन सक्ने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Budgeting means you can never eat at nice restaurants, buy nice clothes, or have fun.',
          np: 'बजेट बनाउनु भनेको राम्रो रेस्टुरेन्टमा खान नपाउनु, नयाँ लुगा नकिन्नु र जीवनमा कुनै मज्जा नगर्नु हो।'
        },
        reality: {
          en: 'A budget specifically reserves 30% of your income purely for guilt-free fun and enjoyment. You can spend that entire 30% on whatever you love without feeling bad, because your needs and investments are already fully covered.',
          np: 'बजेटले तपाईंको आम्दानीको ३०% हिस्सा विशुद्ध मनोरञ्जन र रहरका लागि छुट्याइदिएको हुन्छ। तपाईंले त्यो पैसा बिना कुनै पश्चाताप आफ्नो मनपर्ने ठाउँमा उडाउन सक्नुहुन्छ किनकि तपाईंको आवश्यकता र भविष्यको लगानी पहिल्यै सुरक्षित भइसकेको हुन्छ।'
        }
      },
      {
        myth: {
          en: 'You only need a budget if you are deep in debt or earning a very small salary.',
          np: 'बजेट ऋणमा डुबेका वा एकदमै थोरै तलब भएका मानिसहरूलाई मात्र चाहिन्छ।'
        },
        reality: {
          en: 'High earners without budgets frequently go broke due to "lifestyle inflation"-as income rises, spending on luxury cars, expensive apartments, and lavish parties rises even faster, leaving them with zero net worth.',
          np: 'धेरै कमाउने तर बजेट नबनाउने मानिसहरू "जीवनशैली महँगी" (Lifestyle Inflation) का कारण झन् छिटो कंगाल हुन्छन्-कमाइ बढेसँगै विलासी गाडी, महँगो फ्ल्याट र पार्टीमा फजुल खर्च झन् छिटो बढ्छ।'
        }
      }
    ],
    comparison: {
      title: { en: '50/30/20 Budgeting vs Zero-Based Budgeting', np: '५०/३०/२० बजेटिङ र शून्य-आधारित बजेटिङ (Zero-Based) बीचको तुलना' },
      subtitle: { en: 'Percentage-based flexibility vs allocating every single rupee to a specific job', np: 'प्रतिशतमा आधारित लचिलोपन र हरेक रुपैयाँको पूर्वहिसाब राख्ने विधि बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: '50/30/20 Budgeting', np: '५०/३०/२० बजेटिङ (50/30/20)' },
      colB: { en: 'Zero-Based Budgeting (ZBB)', np: 'शून्य-आधारित बजेटिङ (Zero-Based)' },
      rows: [
        {
          feature: { en: 'Core Philosophy', np: 'मूल दर्शन' },
          valA: { en: 'Broad high-level buckets: 50% Needs, 30% Wants, 20% Future Wealth', np: 'तीनवटा ठूला खम्बा: ५०% आवश्यकता, ३०% रहर, २०% बचत र लगानी' },
          valB: { en: 'Every single rupee earned is assigned a specific destination (Income minus Expenses = 0)', np: 'आम्दानीको हरेक एक रुपैयाँलाई काम तोकिन्छ ताकि महिनाको अन्त्यमा बाँकी शून्य होस्' }
        },
        {
          feature: { en: 'Time & Effort Required', np: 'समय र मिहिनेत' },
          valA: { en: 'Low effort; simple to calculate, maintain, and automate on payday', np: 'एकदमै सजिलो; महिनामा एकपटक हिसाब गरेर अटोमेसनमा राख्न सकिने' },
          valB: { en: 'High effort; requires line-item logging of every single grocery bill and taxi ride', np: 'धेरै समय लाग्ने; हरेक चिया, तरकारी र ट्याक्सीको बिल दिनहुँ टिपिरहनुपर्ने' }
        },
        {
          feature: { en: 'Best Suited For', np: 'कसका लागि उपयुक्त' },
          valA: { en: 'Beginners, salaried professionals, and people who want an effortless financial life', np: 'जागिरेहरू, सुरुवाती बचतकर्ता र झन्झटमुक्त वित्तीय जीवन चाहनेहरू' },
          valB: { en: 'Individuals actively tackling aggressive debt or people with irregular freelance income', np: 'चर्को ऋण तिरिरहेकाहरू वा अनियमित आम्दानी भएका व्यवसायीहरू' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'emergency-fund', name: 'Emergency Fund', type: 'glossary' },
      { slug: 'sip', name: 'SIP', type: 'glossary' },
      { slug: 'inflation', name: 'Inflation', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Budgeting Fundamentals: The 50/30/20 Rule for Nepal', categorySlug: 'personal-finance', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'The Complete Nepali Personal Budgeting Masterclass', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: '50/30/20 Budget Calculator', slug: 'budget', desc: 'Divide your monthly salary into optimal needs, wants, and investment shares.' }
    ],
    faqs: [
      {
        q: { en: 'What should I do if my basic needs exceed 50% of my salary in Kathmandu?', np: 'काठमाडौंको महँगीले गर्दा मेरो अनिवार्य आवश्यकता नै तलबको ५०% भन्दा बढी भयो भने के गर्ने?' },
        a: {
          en: 'Adjust the ratio temporarily to 60/20/20 or 65/15/20. The non-negotiable rule is to protect the 20% investment bucket. Cut down on discretionary wants (eating out, expensive brand wear) rather than sacrificing your future wealth building.',
          np: 'सुरुवाती दिनमा यसलाई ६०/२०/२० वा ६५/१५/२० मा बदल्नुहोस्। तर लगानीको २०% हिस्सालाई सकेसम्म नघटाउनुहोस्। भविष्यको बचत काट्नुको सट्टा बाहिर खाने, महँगो ब्रान्डका लुगा किन्ने जस्ता रहर (Wants) लाई खुम्च्याउनुहोस्।'
        }
      },
      {
        q: { en: 'How should someone with variable irregular freelance income budget in Nepal?', np: 'नेपालमा अनियमित वा मासिक फरक-फरक कमाइ हुने फ्रीलान्सरले कसरी बजेट बनाउने?' },
        a: {
          en: 'Calculate your baseline monthly survival needs using your lowest-earning month of the past year. In high-earning windfall months, keep living expenses constant and route the surplus into a "buffer sinking account" that supplements lean months.',
          np: 'विगत एक वर्षको सबैभन्दा कम कमाइ भएको महिनालाई आधार बनाएर आफ्नो न्यूनतम खर्च तय गर्नुहोस्। धेरै कमाइ भएको महिनामा खर्च नबढाई बढी भएको पैसा "बफर खाता" मा जम्मा गर्नुहोस्, जसले कमाइ कम भएको महिनाको खर्च धान्न मद्दत गरोस्।'
        }
      },
      {
        q: { en: 'Is paying off high-interest loan debt considered a "Need" or an "Investment"?', np: 'चर्को ब्याजको ऋण तिर्नुलाई "आवश्यकता" मान्ने कि "लगानी"?' },
        a: {
          en: 'The minimum mandatory monthly EMI payment is a non-negotiable Need (failing to pay damages creditworthiness). However, making extra principal prepayments to eliminate a 14-16% loan early is the highest-yielding risk-free investment you can make, fitting squarely into your 20% wealth bucket.',
          np: 'ऋणको न्यूनतम मासिक किस्ता (EMI) तिर्नु अनिवार्य आवश्यकता (Need) हो। तर १४-१६% ब्याज लाग्ने महँगो ऋणलाई छिटो तिर्न थप रकम हाल्नु भनेको जोखिममुक्त उत्तम लगानी (Investment) हो, जसलाई २०% लगानीको खम्बाबाट गर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'What mobile apps can I use in Nepal to track my personal budget?', np: 'नेपालमा आफ्नो व्यक्तिगत बजेट ट्र्याक गर्न कुन-कुन मोबाइल एप उपयोगी हुन्छन्?' },
        a: {
          en: 'You can use global intuitive apps like Spendee, Money Lover, or Wallet by BudgetBakers, or maintain a clean Google Sheet. Most importantly, periodically reviewing your eSewa, Khalti, and commercial bank mobile banking statement gives 100% visibility.',
          np: 'तपाईं Spendee, Money Lover वा साधारण गुगल सिट (Google Sheet) प्रयोग गर्न सक्नुहुन्छ। साथै हप्ताको एकपटक आफ्नो इसेवा, खल्ती र मोबाइल बैंकिङको स्टेटमेन्ट हेर्ने बानी बसाल्दा खर्च तुरुन्तै नियन्त्रणमा आउँछ।'
        }
      }
    ],
    summary: {
      en: [
        'A budget is a deliberate financial plan that allocates income toward needs, wants, and wealth creation.',
        'The 50/30/20 framework offers an intuitive baseline: 50% Needs, 30% Wants, and 20% Investments.',
        'Always "Pay Yourself First" by automating investments on payday before lifestyle spending begins.',
        'Nepal\'s National Budget is constitutionally presented annually by the Finance Minister on Jestha 15.'
      ],
      np: [
        'बजेट भनेको आफ्नो कमाइलाई आवश्यकता, रहर र भविष्यको सम्पत्ति निर्माणका लागि बाँडफाँड गर्ने योजनाबद्ध खाका हो।',
        '५०/३०/२० को नियमले ५०% आवश्यकता, ३०% रहर र २०% बचत तथा लगानीको उत्कृष्ट सन्तुलन दिन्छ।',
        'तलब आएकै दिन सुरुमा लगानीको हिस्सा छुट्टाएर "पहिले आफैंलाई भुक्तानी" गर्ने बानी बसाल्नुहोस्।',
        'नेपालको राष्ट्रिय बजेट हरेक वर्ष जेठ १५ गते संसदमा अर्थमन्त्रीद्वारा प्रस्तुत गरिने संवैधानिक व्यवस्था छ।'
      ]
    },
    whereSeen: [
      { title: 'Budgeting Fundamentals: The 50/30/20 Rule for Nepal', type: 'Lesson', url: '/learn/personal-finance/what-is-investing' },
      { title: '50/30/20 Budget Calculator', type: 'Calculator', url: '/calculators/budget' }
    ],
    meta: {
      title: 'What is Budgeting in Nepal? 50/30/20 Rule & Personal Cashflow Guide | risePaisa',
      description: 'Master personal budgeting in Nepal with the 50/30/20 rule. Learn how to allocate salary, curb impulse spending, and build financial freedom effortlessly.'
    }
  },

  // 6. EMERGENCY FUND
  {
    slug: 'emergency-fund',
    term: 'Emergency Fund',
    termNp: 'आपतकालीन कोष (Emergency Fund)',
    categorySlug: 'personal-finance',
    categoryName: { en: 'Personal Finance', np: 'व्यक्तिगत वित्त' },
    letter: 'E',
    abbreviation: 'EF',
    synonyms: ['Rainy Day Fund', 'Emergency Reserve', 'आपतकालीन बचत', 'सुरक्षा कोष', 'संकटकालीन कोष'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'An emergency fund is a dedicated, highly liquid cash reserve equal to 3 to 6 months of basic living expenses, reserved exclusively for unexpected financial crises.',
      np: 'आपतकालीन कोष भनेको ३ देखि ६ महिनाको न्यूनतम पारिवारिक खर्च बराबरको छुट्टै र तुरुन्तै निकाल्न मिल्ने सुरक्षित नगद रकम हो, जो केवल आकस्मिक संकटको सामना गर्न राखिन्छ।'
    },
    detailedExplanation: {
      en: 'An emergency fund acts as your primary financial shock absorber. Life is inherently unpredictable: sudden job termination, severe medical hospitalizations, accidental motorcycle repairs, or family emergencies can occur without warning. Without an emergency buffer, individuals are forced to borrow from local loan sharks at 24-36% annual interest, swipe high-cost credit cards, borrow from reluctant relatives, or sell their NEPSE stock portfolio at the worst possible time during a market crash. An emergency fund must fulfill two golden criteria: Liquidity (the money can be withdrawn within minutes via an ATM card or mobile banking) and Capital Safety (the principal value never fluctuates with market volatility). In Nepal, the optimal instruments for housing an emergency fund are "A" Class commercial bank high-yield savings accounts or flexible 3-month to 1-year callable fixed deposits that allow instant premature closure via mobile banking.',
      np: 'आपतकालीन कोष तपाईंको सम्पूर्ण वित्तीय जीवनको सुरक्षा ढाल (Shock Absorber) हो। जीवनमा संकट बाजा बजाएर आउँदैन: अचानक जागिर छुट्नु, परिवारमा गम्भीर बिरामी भई अस्पताल भर्ना हुनुपर्नु, मोटरसाइकल दुर्घटना हुनु वा घरमा आकस्मिक समस्या आइपर्न सक्छ। यदि यस्तो बेला हातमा नगद छैन भने मानिसहरू सहकारी वा साहुबाट २४-३६% को चर्को ब्याजमा ऋण लिन, साथीभाइसँग हात पसार्न वा सेयर बजार घटेको बेला घाटा खाएर सेयर बेच्न बाध्य हुन्छन्। आपतकालीन कोषमा दुईवटा गुण हुनैपर्छ: तरलता (आवश्यक पर्दा ५ मिनेटमै एटिएम वा मोबाइल बैंकिङबाट झिक्न सकिने) र पुँजीको सुरक्षा (सेयर बजार जस्तो मूल्य घट्ने जोखिम नभएको)। नेपालमा यसका लागि क वर्गको वाणिज्य बैंकको बचत खाता वा मोबाइलबाटै तुरुन्तै तोड्न मिल्ने मुद्दती निक्षेप (Fixed Deposit) सबैभन्दा उत्तम मानिन्छ।'
    },
    whyItMatters: {
      en: 'An emergency fund protects your long-term wealth compounding engine. When a crisis occurs, having 6 months of living expenses stored safely prevents you from interrupting your monthly equity SIPs or selling appreciating shares. More than a mathematical asset, an emergency fund provides immense psychological peace of mind, allowing you to sleep peacefully at night knowing your family is financially insulated.',
      np: 'आपतकालीन कोषले तपाईंको दीर्घकालीन लगानीलाई सुरक्षित राख्छ। जब परिवारमा कुनै विपत्ति आइपर्छ, यदि तपाईंको खातामा ६ महिनाको खर्च बराबरको रकम सुरक्षित छ भने तपाईंले आफ्नो सेयर वा म्युचुअल फण्डको SIP बेच्नु पर्दैन। आर्थिक हिसाबले मात्र होइन, यसले तपाईंलाई मानसिक रूपमा ठूलो शान्ति र आत्मबल दिन्छ-जस्तोसुकै संकट आए पनि मेरो परिवार सुरक्षित छ भन्ने आत्मविश्वास पैदा हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Building and maintaining a bulletproof emergency fund in Nepal follows 4 phases:',
        np: 'नेपालमा अभेद्य आपतकालीन कोष निर्माण गर्ने प्रक्रिया ४ चरणमा बुझ्न सकिन्छ:'
      },
      steps: [
        {
          title: { en: '1. Calculate Monthly Survival Burn Rate', np: '१. मासिक न्यूनतम खर्चको हिसाब' },
          desc: { en: 'Identify strictly essential monthly survival expenses: room rent, food rations, utility bills, school fees, and existing loan EMIs.', np: 'बाँच्नका लागि नभई नहुने न्यूनतम खर्च निकाल्नुहोस्: कोठाभाडा, दालचामल, बिजुली, सन्तानको स्कुल फी र अनिवार्य ऋणको किस्ता।' }
        },
        {
          title: { en: '2. Determine Target Fund Size', np: '२. लक्ष्य रकम निर्धारण' },
          desc: { en: 'Multiply monthly essential expenses by 3 to 6 months (e.g. NPR 35,000 monthly burn rate × 6 months = NPR 2,10,000 target).', np: 'मासिक न्यूनतम खर्चलाई ३ देखि ६ महिनाले गुणन गर्नुहोस् (जस्तै मासिक ३५ हजार खर्च × ६ महिना = रु. २,१०,००० को लक्ष्य)।' }
        },
        {
          title: { en: '3. Strategic Account Separation', np: '३. छुट्टै बैंक खातामा सुरक्षित भण्डारण' },
          desc: { en: 'Open a dedicated savings account in a separate commercial bank without debit cards linked to eSewa/Khalti, preventing casual impulse spending.', np: 'दैनिक खर्च गर्ने खाताभन्दा छुट्टै बैंकमा खाता खोल्नुहोस्, जसको एटिएम वा इसेवा लिंक नगरी केवल संकटका बेला मात्र चलाउने नियम बनाउनुहोस्।' }
        },
        {
          title: { en: '4. Systematic Monthly Feeding', np: '४. नियमित रूपमा रकम जम्मा' },
          desc: { en: 'Divert 10% to 15% of your monthly salary into the emergency account until the 6-month target is fully reached, then pause contributions.', np: 'जबसम्म तोकिएको ६ महिनाको लक्ष्य पुग्दैन, हरेक महिना तलबबाट १० देखि १५ प्रतिशत रकम यस खातामा हाल्दै जानुहोस् र लक्ष्य पुगेपछि मात्र अन्य लगानी बढाउनुहोस्।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Sudden employment layoff or business cashflow disruption',
        'Urgent medical emergencies not fully settled immediately by cashless health insurance',
        'Unplanned critical household repairs (roof leaks, plumbing bursts, motorbike engine rebuilds)',
        'Family distress assistance in hometown districts during natural disasters'
      ],
      np: [
        'अचानक जागिर गुम्दा वा व्यवसायको आम्दानी ठप्प हुँदा',
        'अस्पताल भर्ना हुनुपर्दा तत्काल नगद धरौटी बुझाउन',
        'घर वा कोठामा अचानक हुने मर्मत, मोटरसाइकल बिग्रँदा लाग्ने खर्च धान्न',
        'बाढीपहिरो वा गाउँमा परिवारलाई आइपर्ने आकस्मिक विपत्तिमा सहयोग गर्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The NRB Deposit Guarantee, Cooperative Risks, and Where to Park Emergency Funds in Nepal',
        np: 'निक्षेप सुरक्षण कोष, सहकारीको जोखिम र आपतकालीन रकम राख्ने सही ठाउँ'
      },
      body: {
        en: 'In recent years, tens of thousands of Nepalis learned a bitter financial lesson when hundreds of savings and credit cooperatives (Sahakaris) suffered liquidity crises and froze member deposits. Emergency funds must NEVER be kept in local cooperatives, regardless of promises of 14% or 16% interest. In Nepal, the Deposit and Credit Guarantee Fund (DCGF) under NRB regulations legally insures individual retail deposits up to NPR 5,00,000 per depositor across licensed Class "A", "B", and "C" financial institutions. Keep your emergency buffer exclusively in an "A" Class commercial bank (such as Nabil, Global IME, Sanima, or Everest Bank) with 24/7 mobile banking and nationwide ATM access.',
        np: 'पछिल्ला वर्षहरूमा नेपालमा सयौं बचत तथा ऋण सहकारीहरू संकटग्रस्त भई बचतकर्ताको अर्बौं रुपैयाँ डुबेको तितो यथार्थ हामी सबैले देखेका छौं। सहकारीले १४% वा १६% ब्याज दिन्छ भने पनि आपतकालीन कोषको पैसा कहिल्यै पनि सहकारीमा राख्नु हुँदैन। नेपाल राष्ट्र बैंकको नियम अनुसार निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) ले बैंक तथा वित्तीय संस्था (क, ख र ग वर्ग) मा रहेको सर्वसाधारणको रु. ५,००,००० सम्मको निक्षेपलाई पूर्ण कानुनी सुरक्षा (बीमा) प्रदान गर्दछ। त्यसैले आफ्नो आपतकालीन पैसा सधैं २४ सै घण्टा एटिएम र मोबाइल बैंकिङ चल्ने प्रतिष्ठित वाणिज्य बैंकमा मात्र राख्नुपर्छ।'
      },
      keyPoints: {
        en: [
          'Target 3 to 6 months of mandatory basic living expenses, not luxurious lifestyle costs.',
          'Never place emergency reserves in high-risk cooperatives or volatile NEPSE equities.',
          'NRB deposit insurance protects bank deposits up to NPR 5,00,000 per depositor.',
          'Ensure 24/7 instant accessibility via mobile banking or debit ATM cards across Nepal.'
        ],
        np: [
          'विलासी खर्च होइन, बाँच्नका लागि चाहिने ३ देखि ६ महिनाको न्यूनतम खर्च बराबरको कोष बनाउनुहोस्।',
          'आपतकालीन पैसालाई बढी ब्याजको लोभमा सहकारी वा सेयर बजारमा कहिल्यै नफसाउनुहोस्।',
          'वाणिज्य बैंकहरूमा रहेको ५ लाख रुपैयाँसम्मको बचत नेपाल सरकारको प्रणालीबाट पूर्ण सुरक्षित हुन्छ।',
          'आपतकालीन पैसा २४ सै घण्टा मोबाइल बैंकिङ वा एटिएमबाट तुरुन्तै झिक्न सकिने हुनुपर्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Pooja works as a graphic designer in Kathmandu with monthly essential survival expenses of NPR 40,000. Over 18 months, she diligently built an NPR 2,40,000 emergency fund (6 months × NPR 40,000) housed in an "A" Class commercial bank high-yield savings account earning 5.5%. In early 2024, her employer downsized, eliminating her role. While her colleagues panicked, took high-interest loans, and begged for extensions on apartment rent, Pooja remained calm. Her NPR 2,40,000 emergency buffer paid her apartment rent, groceries, and internet for 4 full months while she comfortably upskilled, interviewed without desperation, and secured a higher-paying senior role with an NPR 75,000 salary.',
        np: 'काठमाडौंमा ग्राफिक डिजाइनरको काम गर्ने पूजाको मासिक न्यूनतम खर्च रु. ४०,००० छ। उनले १८ महिना लगाएर ५.५% ब्याज आउने वाणिज्य बैंकको खातामा ६ महिनाको खर्च बराबर रु. २,४०,००० को आपतकालीन कोष बनाइन्। विसं २०८० को अन्त्यतिर उनको कम्पनीमा घाटा लागेर उनलाई जागिरबाट हटाइयो। उनका अन्य साथीहरू आत्तिए, चर्को ब्याजमा ऋण खोज्न थाले र घरबेटीसँग हात जोडे। तर पूजा शान्त रहिन्। उनको २ लाख ४० हजारको कोषले ४ महिनासम्म कोठाभाडा, खाना र इन्टरनेटको सम्पूर्ण खर्च धान्यो। उनले कुनै हतार नगरी नयाँ सीप सिकिन्, अन्तर्वार्ता दिइन् र अन्ततः मासिक रु. ७५,००० तलब हुने सिनियर पदमा नयाँ जागिर पाइन्।'
      },
      takeaway: {
        en: 'An emergency fund transforms a catastrophic life emergency into a minor temporary inconvenience.',
        np: 'आपतकालीन कोषले जीवनमा आउने ठूलो महाविपत्तिलाई एउटा सामान्य र सजिलै पार लाग्ने झमेलामा सीमित गरिदिन्छ।'
      }
    },
    formula: {
      equation: 'Emergency Fund Target = Monthly Essential Survival Expenses × Months of Coverage (3 to 6)',
      variables: [
        { name: 'Monthly Essential Expenses', desc: { en: 'Non-negotiable monthly costs (rent + basic groceries + utilities + school fees + loan EMIs)', np: 'बाँच्नका लागि नभई नहुने खर्च (कोठाभाडा + दालचामल + बिजुली + स्कुल फी + ऋणको किस्ता)' } },
        { name: 'Months of Coverage', desc: { en: '3 months for dual-income secure jobs; 6 to 12 months for single-earner families or freelancers', np: 'दुवैको जागिर भए ३ महिना; एक्लो कमाउने व्यक्ति वा फ्रीलान्सरका लागि ६ देखि १२ महिना' } }
      ],
      exampleCalc: {
        en: 'If monthly basic expenses = NPR 35,000: 3 Months Buffer = NPR 1,05,000; 6 Months Buffer = NPR 2,10,000.',
        np: 'यदि मासिक न्यूनतम खर्च रु. ३५,००० छ भने: ३ महिनाको कोष = रु. १,०५,०००; ६ महिनाको कोष = रु. २,१०,०००।'
      }
    },
    advantages: {
      en: [
        'Prevents falling into debt traps with cooperatives, moneylenders, or high-interest credit cards',
        'Protects long-term investments by eliminating the need to sell NEPSE shares during bear markets',
        'Provides massive psychological security, reducing anxiety and improving daily decision-making',
        'Grants career independence to walk away from toxic workplaces and search for better opportunities'
      ],
      np: [
        'चर्को ब्याज लिने मिटरब्याजी, सहकारी वा क्रेडिट कार्डको ऋणको चक्रव्यूहमा फस्नबाट जोगाउँछ',
        'सेयर बजार घटेको बेला घाटा खाएर सेयर बेच्नुपर्ने बाध्यतालाई सदाका लागि अन्त्य गर्छ',
        'पारिवारिक मानसिक तनाव हटाएर आत्मबल र आत्मविश्वासका साथ जीवन जिउन सघाउँछ',
        'खराब कार्यथलो छोडेर ढुक्कसँग नयाँ र राम्रो अवसर खोज्ने स्वतन्त्रता दिन्छ'
      ]
    },
    limitations: {
      en: [
        'Earns modest bank interest rates (3-6%) that usually lag behind official inflation rates',
        'Opportunity cost: capital parked in an emergency fund cannot compound at higher NEPSE equity rates',
        'Requires strong behavioral discipline to avoid raiding the fund for casual vacations or gadgets',
        'Building a full 6-month buffer can take 12 to 24 months of persistent saving discipline'
      ],
      np: [
        'बैंकमा राख्दा साधारण ब्याज (३-६%) मात्र आउने भएकाले महँगी भन्दा अलि पछि पर्न सक्ने',
        'अवसर लागत: यस रकमलाई सेयर बजारमा हालेर १२-१५% को उच्च नाफा कमाउन नपाइने',
        'नयाँ आइफोन किन्न वा घुम्न जान मन लाग्दा यो पैसा चलाउनबाट रोक्न कडा अनुशासन चाहिने',
        '६ महिनाको ठूलो रकम जम्मा गर्न १ देखि २ वर्षसम्म धैर्यतापूर्वक बचत गर्नुपर्ने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'I have an unused credit card with an NPR 2,00,000 limit, so I don\'t need cash emergency savings.',
          np: 'मसँग २ लाखको लिमिट भएको क्रेडिट कार्ड छ, त्यसैले मलाई आपतकालीन नगद चाहिँदैन।'
        },
        reality: {
          en: 'A credit card is debt, not an asset. Credit cards charge 24% to 36% annualized interest, and many hospital or urgent cash transactions in Nepal do not accept card swipes. Debt compounds your crisis; cash resolves it.',
          np: 'क्रेडिट कार्ड भनेको ऋण हो, सम्पत्ति होइन। यसमा २४ देखि ३६ प्रतिशतसम्म चर्को ब्याज लाग्छ र नेपालका धेरै ठाउँमा कार्ड चल्दैन। ऋणले संकटलाई दोब्बर बनाउँछ, नगदले संकट टार्छ।'
        }
      },
      {
        myth: {
          en: 'My emergency fund should be invested in NEPSE shares so it can grow while waiting.',
          np: 'आपतकालीन पैसालाई पनि सेयर बजारमा हालिदियो भने बस्दाबस्दै बढ्छ।'
        },
        reality: {
          en: 'The purpose of an emergency fund is insurance and capital preservation, not profit growth. If a crisis strikes while NEPSE is down 30%, you will lock in massive financial losses.',
          np: 'आपतकालीन कोषको उद्देश्य नाफा कमाउनु होइन, पुँजीको सुरक्षा गर्नु हो। यदि सेयर बजार ३०% घटेको बेला तपाईंलाई पैसा चाहियो भने तपाईंले ठूलो घाटा खाएर सेयर बेच्नुपर्ने हुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Emergency Fund vs Regular Fixed Deposit (FD)', np: 'आपतकालीन कोष र साधारण मुद्दती निक्षेप (FD) बीचको तुलना' },
      subtitle: { en: 'Instant liquidity for crises vs locked tenure for interest yields', np: 'तुरुन्तै झिक्न मिल्ने तरलता र बढी ब्याजका लागि निश्चित अवधिसम्म बाँधिने रकम' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Emergency Fund (Savings / Callable)', np: 'आपतकालीन कोष (Savings/Callable)' },
      colB: { en: 'Regular Locked Fixed Deposit', np: 'साधारण मुद्दती निक्षेप (Fixed Deposit)' },
      rows: [
        {
          feature: { en: 'Primary Objective', np: 'मुख्य उद्देश्य' },
          valA: { en: 'Instant cash availability and zero risk of capital loss', np: 'संकटका बेला ५ मिनेटमै नगद पाउनु र पुँजी शतप्रतिशत सुरक्षित राख्नु' },
          valB: { en: 'Maximizing interest return on idle money over fixed timeframes', np: 'निश्चित समयसम्म पैसा नचलाई बढीभन्दा बढी ब्याज आम्दानी लिनु' }
        },
        {
          feature: { en: 'Liquidity & Withdrawal', np: 'निकाल्ने सुविधा' },
          valA: { en: '100% liquid; withdrawable via ATM, ConnectIPS, or mobile banking 24/7', np: 'पूर्ण तरल; एटिएम, कनेक्टआईपीएस वा मोबाइल बैंकिङबाट २४ सै घण्टा झिक्न सकिने' },
          valB: { en: 'Locked for 1 to 5 years; premature termination incurs penalties or paperwork', np: '१ देखि ५ वर्षसम्म रोक्का; अवधि नपुगी तोड्दा जरिवाना लाग्ने वा बैंक धाउनुपर्ने' }
        },
        {
          feature: { en: 'Interest Rate Yield', np: 'ब्याजदर' },
          valA: { en: 'Moderate (typically 3.0% to 5.5% in commercial bank savings)', np: 'मध्यम (वाणिज्य बैंकको साधारण बचतमा प्रायः ३.०% देखि ५.५%)' },
          valB: { en: 'Higher (typically 6.5% to 8.5% on annual fixed deposit contracts)', np: 'उच्च (वार्षिक मुद्दती निक्षेपमा प्रायः ६.५% देखि ८.५% सम्म)' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'budget', name: 'Budget', type: 'glossary' },
      { slug: 'fixed-deposit', name: 'Fixed Deposit', type: 'glossary' },
      { slug: 'sip', name: 'SIP', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Emergency Fund: Building Your Financial Fortress', categorySlug: 'personal-finance', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'The Complete Nepali Emergency Fund Blueprint', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Emergency Fund Calculator', slug: 'emergency-fund', desc: 'Calculate your exact 3 to 6-month survival buffer target.' }
    ],
    faqs: [
      {
        q: { en: 'What qualifies as a genuine emergency justifying using this fund?', np: 'कस्तो अवस्थालाई मात्र आपतकालीन कोष चलाउन मिल्ने वास्तविक संकट मान्ने?' },
        a: {
          en: 'A legitimate emergency must satisfy 3 criteria: Unexpected (not anticipated like Dashain shopping), Urgent (demands immediate financial settlement, like hospital bills), and Necessary (vital for survival or employment, like essential vehicle repairs).',
          np: 'वास्तविक संकटमा ३ वटा कुरा हुनुपर्छ: अप्रत्याशित (दशैं जस्तो पहिल्यै थाहा नभएको), जरुरी (तुरुन्तै पैसा नतिरी नहुने, जस्तै अस्पतालको बिल), र अनिवार्य (जीवन बाँच्न वा जागिर जोगाउन नभई नहुने, जस्तै बाइक मर्मत)।'
        }
      },
      {
        q: { en: 'How many months of expenses should a freelancer or business owner keep in Nepal?', np: 'नेपालमा फ्रीलान्सर वा व्यापारीले कति महिनाको आपतकालीन कोष राख्नुपर्छ?' },
        a: {
          en: 'While permanent salaried professionals can manage with 3 to 6 months, freelancers, commissioned consultants, and business owners should target 9 to 12 months of living expenses due to high revenue unpredictability in Nepal.',
          np: 'स्थायी जागिरेलाई ३ देखि ६ महिनाको खर्च पर्याप्त भए पनि फ्रीलान्सर, परामर्शदाता र व्यापारीहरूको आम्दानी अनिश्चित हुने भएकाले उनीहरूले कम्तीमा ९ देखि १२ महिनाको खर्च बराबरको कोष राख्नुपर्छ।'
        }
      },
      {
        q: { en: 'Should I pay off all my debt before starting to build an emergency fund?', np: 'के ऋण सबै तिरिसकेपछि मात्र आपतकालीन कोष बनाउन सुरु गर्ने हो?' },
        a: {
          en: 'No. First build a "Starter Emergency Fund" of at least 1 month of living expenses (e.g. NPR 35,000 to 50,000). This prevents you from borrowing new high-interest debt when minor emergencies occur while you aggressively repay existing loans.',
          np: 'होइन। पहिले कम्तीमा १ महिनाको खर्च धान्ने "सुरुवाती आपतकालीन कोष" (३५ देखि ५० हजार) बनाइहाल्नुहोस्। यसले गर्दा पुरानो ऋण तिर्दै गर्दा कुनै सानो समस्या आइपरे फेरि नयाँ ऋण लिनुपर्ने बाध्यता हुँदैन।'
        }
      },
      {
        q: { en: 'Once I use money from my emergency fund, how should I replenish it?', np: 'आपतकालीन कोषबाट पैसा खर्च भएपछि त्यसलाई कसरी फेरि भर्ने?' },
        a: {
          en: 'Treat replenishment as an urgent financial priority. Temporarily pause discretionary lifestyle spending and discretionary stock market investments, diverting all free cash flow back into the emergency account until the 6-month buffer is fully restored.',
          np: 'कोषको पैसा प्रयोग हुनासाथ यसलाई पुनः भर्नु पहिलो प्राथमिकता हुनुपर्छ। केही महिनाका लागि रहरका फजुल खर्च र सेयर लगानी रोकेर बचत भएको सम्पूर्ण रकम आपतकालीन खातामै हाल्नुहोस् ताकि कोष पहिलेकै अवस्थामा पुगोस्।'
        }
      }
    ],
    summary: {
      en: [
        'An emergency fund is a liquid cash reserve equal to 3 to 6 months of basic living costs.',
        'Never store emergency capital in volatile NEPSE shares, illiquid real estate, or risky cooperatives.',
        'Housed best in an "A" Class commercial bank high-yield savings account insured up to NPR 5 Lakh by DCGF.',
        'Provides psychological peace and protects long-term investments from untimely forced liquidation.'
      ],
      np: [
        'आपतकालीन कोष भनेको ३ देखि ६ महिनाको न्यूनतम खर्च बराबरको तुरुन्तै चलाउन मिल्ने सुरक्षित नगद हो।',
        'यसलाई बढी नाफाको लोभमा सेयर बजार, जग्गा वा जोखिमपूर्ण सहकारीमा कहिल्यै नराख्नुहोस्।',
        'क वर्गको वाणिज्य बैंकको बचत खातामा राख्नु सबैभन्दा सुरक्षित हुन्छ, जहाँ ५ लाखसम्मको सरकारी सुरक्षण हुन्छ।',
        'यसले मानसिक शान्ति दिन्छ र संकटका बेला घाटा खाएर सेयर बेच्नुपर्ने बाध्यताबाट जोगाउँछ।'
      ]
    },
    whereSeen: [
      { title: 'Emergency Fund: Building Your Financial Fortress', type: 'Lesson', url: '/learn/personal-finance/what-is-investing' },
      { title: 'Emergency Fund Calculator', type: 'Calculator', url: '/calculators/emergency-fund' }
    ],
    meta: {
      title: 'What is an Emergency Fund in Nepal? 3-6 Month Safety Net Guide | risePaisa',
      description: 'Learn how to build a bulletproof emergency fund in Nepal. Calculate your 3-6 month survival burn rate and protect your family from financial shocks.'
    }
  },

  // 7. HLV (HUMAN LIFE VALUE)
  {
    slug: 'hlv',
    term: 'HLV (Human Life Value)',
    termNp: 'मानव जीवन मूल्य (HLV)',
    categorySlug: 'insurance',
    categoryName: { en: 'Insurance', np: 'बीमा' },
    letter: 'H',
    abbreviation: 'HLV',
    synonyms: ['Human Life Value', 'Economic Value of Life', 'मानव जीवन मूल्य', 'बीमा सुरक्षण अङ्क'],
    difficulty: 'Intermediate',
    readTime: '5 min read',
    oneLineDef: {
      en: 'Human Life Value (HLV) is the quantified economic and financial value of a person\'s future net earnings that their dependents rely upon for survival.',
      np: 'मानव जीवन मूल्य (HLV) भनेको कुनै व्यक्तिको भविष्यको सम्भावित खुद कमाइको वर्तमान आर्थिक मूल्य हो, जसमा उसको परिवार र आश्रितहरू आफ्नो जीवनयापनका लागि निर्भर हुन्छन्।'
    },
    detailedExplanation: {
      en: 'Pioneered by Dr. Solomon S. Huebner, Human Life Value (HLV) provides the mathematical foundation for life insurance. Human beings are productive economic assets: over a 30 to 35-year working career, a professional generates millions of rupees in aggregate income that finances their family\'s shelter, food, healthcare, debt repayments, and children\'s higher education. If that breadwinner passes away prematurely, their emotional loss is irreplaceable, but their financial contribution vanishes overnight. HLV calculates the exact lump-sum capital required today such that, if invested in safe fixed-income assets, the interest generated precisely replaces the deceased earner\'s net take-home income for the remaining working years. In Nepal, insurance agents frequently sell arbitrary small policies (e.g. NPR 5 Lakh or 10 Lakh endowment policies) that cover less than 10% of the breadwinner\'s true HLV, leaving families severely underinsured. Calculating your true HLV establishes the precise Sum Assured you need when buying pure Term Life Insurance.',
      np: 'डा. सोलोमन एस. ह्युब्नरद्वारा प्रतिपादित मानव जीवन मूल्य (HLV) जीवन बीमाको मुख्य वैज्ञानिक आधार हो। हरेक कमाउने व्यक्ति आफ्नो परिवारका लागि एउटा ठूलो आर्थिक सम्पत्ति हो: आफ्नो ३० देखि ३५ वर्षे कामकाजी जीवनमा उसले करोडौं रुपैयाँ कमाउँछ, जसबाट परिवारको गाँस, बास, कपास, सन्तानको शिक्षा र ऋणको किस्ता चल्छ। यदि उक्त व्यक्तिको अचानक असामयिक निधन भयो भने उसको भावनात्मक क्षति त कसैले पूरा गर्न सक्दैन, तर उसको आर्थिक कमाइ एकैछिनमा शून्य हुन्छ। HLV ले के हिसाब गर्छ भने, आज त्यो व्यक्तिको नाममा कति रुपैयाँ बराबरको बीमा हुनुपर्छ ताकि त्यो पैसा सुरक्षित बैंकमा राख्दा आउने ब्याजले उसको परिवारलाई ऊ बाँचुन्जेल जस्तै सहज जीवनयापन गर्न पुगोस्। नेपालमा बीमा एजेन्टहरूले हचुवाको भरमा ५-१० लाखको सानो सावधिक बीमा गराइदिन्छन्, जसले परिवारको वास्तविक आवश्यकताको १०% पनि धान्दैन। आफ्नो वास्तविक HLV निकाल्दा आफूलाई कति रकमको म्यादी जीवन बीमा (Term Insurance) चाहिन्छ ठ्याक्कै थाहा हुन्छ।'
    },
    whyItMatters: {
      en: 'Underinsurance is a silent catastrophe in Nepal. If an earner bringing home NPR 60,000 monthly passes away holding an NPR 5,00,000 insurance policy, that money will be completely exhausted within 8 to 10 months of basic household expenses. Calculating HLV ensures that your surviving spouse and children are never forced out of their home, pull children from school, or depend on charity.',
      np: 'नेपालमा आवश्यकताभन्दा निकै कम रकमको बीमा गर्नु (Underinsurance) एउटा ठूलो समस्या हो। यदि मासिक रु. ६०,००० कमाउने घरको मुख्य व्यक्तिको निधन हुँदा उसले जम्मा ५ लाखको बीमा गरेको रहेछ भने, त्यो ५ लाखले उसको परिवारको ८ देखि १० महिनाको खर्च पनि धान्दैन। HLV को आधारमा बीमा गर्दा भोलि आफू नरहे पनि परिवारले घर छोड्नु नपरोस्, सन्तानको पढाइ नरोकियोस् र कसैसँग हात पसार्नु नपरोस् भन्ने सुनिश्चित हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The Income Replacement method for calculating Human Life Value operates in 4 steps:',
        np: 'आम्दानी प्रतिस्थापन विधिबाट मानव जीवन मूल्य (HLV) निकाल्ने प्रक्रिया ४ चरणमा बुझ्न सकिन्छ:'
      },
      steps: [
        {
          title: { en: '1. Net Annual Income Assessment', np: '१. वार्षिक खुद आम्दानीको हिसाब' },
          desc: { en: 'Tally the earner\'s total take-home income per year across salary, freelance, or business dividends after taxes.', np: 'कर कट्टी भएपछि वर्षभरिमा हातमा आउने कुल वार्षिक आम्दानी (तलब, व्यवसाय वा परामर्श) हिसाब गर्नुहोस्।' }
        },
        {
          title: { en: '2. Deduct Personal Self-Maintenance', np: '२. व्यक्तिको आफ्नै व्यक्तिगत खर्च घटाउने' },
          desc: { en: 'Subtract the earner\'s personal living expenses (typically 20% to 30% of income spent on personal fuel, clothing, hobbies).', np: 'आम्दानीबाट उक्त व्यक्तिको आफ्नै व्यक्तिगत खर्च (प्रायः २० देखि ३० प्रतिशत) घटाउनुहोस्, किनकि ऊ नरहँदा यो खर्च लाग्दैन।' }
        },
        {
          title: { en: '3. Calculate Remaining Working Horizon', np: '३. बाँकी कामकाजी उमेर पत्ता लगाउने' },
          desc: { en: 'Determine the number of productive earning years remaining until standard retirement age (typically Age 60 minus Current Age).', np: 'अवकाश हुने उमेर (प्रायः ६० वर्ष) बाट आफ्नो हालको उमेर घटाएर भविष्यमा अझै कति वर्ष काम गर्न बाँकी छ निकाल्नुहोस्।' }
        },
        {
          title: { en: '4. Present Value Discounting & Liability Addition', np: '४. दायित्व जोड्ने र वर्तमान मूल्य निकाल्ने' },
          desc: { en: 'Multiply net family income by remaining years (or discount using inflation-adjusted safe yields) and add outstanding debts (home loans).', np: 'परिवारलाई चाहिने वार्षिक खर्चलाई बाँकी वर्षले गुणन गर्नुहोस् र त्यसमा घरकर्जा जस्ता सम्पूर्ण तिर्न बाँकी ऋणहरू जोड्नुहोस्।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Determining required Term Life Insurance Sum Assured for primary family breadwinners',
        'Comprehensive family financial planning and dependent risk insulation',
        'Court assessments for wrongful death compensation claims and motor vehicle accident settlements',
        'Keyman insurance evaluations for corporate executives and business founders'
      ],
      np: [
        'परिवारको मुख्य व्यक्तिका लागि कति रकमको म्यादी जीवन बीमा (Term Insurance) चाहिन्छ तय गर्न',
        'पारिवारिक दीर्घकालीन वित्तीय योजना र आश्रितहरूको सुरक्षा व्यवस्था गर्न',
        'अदालतमा सवारी दुर्घटना वा दुर्घटनामा मृत्यु हुँदा क्षतिपूर्ति रकम निर्धारण गर्दा',
        'कम्पनीका मुख्य संस्थापक वा सिइओको किम्यान इन्स्योरेन्स (Keyman Insurance) गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Endowment Trap in Nepal and the Urgent Need for HLV-Based Term Insurance',
        np: 'नेपालमा सावधिक बीमाको भ्रम र HLV अनुसार म्यादी बीमाको आवश्यकता'
      },
      body: {
        en: 'In Nepal, the life insurance industry (regulated by the Nepal Insurance Authority - Beema Samiti) is overwhelmingly dominated by traditional "Endowment" (Sawadhik) and "Money-Back" policies. Because these products blend an inefficient investment component with a sliver of insurance, their premiums are exorbitant-an NPR 1 Crore endowment policy would cost an astronomical NPR 5,00,000+ per year in premiums. Consequently, average Nepalis buy tiny NPR 5 to 10 Lakh policies they can afford, leaving their true HLV (often NPR 1 to 2 Crores) 90% unprotected. Understanding HLV empowers Nepali families to embrace pure Term Life Insurance, where an NPR 1 Crore cover costs just NPR 12,000 to 18,000 annually, fully protecting the family’s economic future at a fraction of the cost.',
        np: 'नेपालमा बीमा प्राधिकरण (साविकको बीमा समिति) बाट इजाजतप्राप्त जीवन बीमा कम्पनीहरूले धेरैजसो "सावधिक" (Endowment) र "मनी-ब्याक" बीमा बेच्ने गर्छन्। यी पोलिसीहरूमा लगानी र बीमा मिसाइएको हुनाले प्रिमियम अत्यधिक महँगो हुन्छ-१ करोडको सावधिक बीमा गर्न वार्षिक ५ लाख रुपैयाँभन्दा बढी प्रिमियम तिर्नुपर्छ। यति धेरै पैसा तिर्न नसकेर सामान्य नेपालीले ५-१० लाखको सानो बीमा गर्छन्, जसले गर्दा उनीहरूको वास्तविक HLV (प्रायः १ देखि २ करोड) को ९०% हिस्सा असुरक्षित रहन्छ। HLV बुझेपछि मानिसहरूले विशुद्ध "म्यादी जीवन बीमा" (Term Insurance) रोज्न थाल्छन्, जहाँ वार्षिक जम्मा १२ देखि १८ हजार रुपैयाँ तिरेरै १ करोड रुपैयाँको पूर्ण सुरक्षा पाउन सकिन्छ।'
      },
      keyPoints: {
        en: [
          'HLV quantifies the monetary income loss a family experiences if a breadwinner dies.',
          'Rule of thumb: HLV equals at least 10 to 15 times your annual take-home income plus outstanding debt.',
          'Traditional endowment insurance makes adequate HLV coverage unaffordable for ordinary citizens.',
          'Pure Term Life Insurance is the only cost-effective vehicle to fully cover your complete HLV.'
        ],
        np: [
          'HLV ले घरको मुख्य मान्छेको निधन हुँदा परिवारले गुमाउने भविष्यको कुल कमाइको हिसाब निकाल्छ।',
          'सामान्य नियम: HLV तपाईंको वार्षिक खुद आम्दानीको कम्तीमा १० देखि १५ गुणा र बाँकी ऋण बराबर हुनुपर्छ।',
          'परम्परागत सावधिक बीमा अत्यधिक महँगो हुने भएकाले यसबाट HLV बराबरको बीमा गर्न असम्भव जस्तै हुन्छ।',
          'आफ्नो वास्तविक HLV बराबरको सुरक्षा लिन "म्यादी जीवन बीमा" (Term Insurance) नै एक मात्र सस्तो र उत्तम उपाय हो।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Aashish, age 32, lives in Bhaktapur with his wife and 3-year-old son. He earns NPR 75,000 monthly (NPR 9,00,000 annually) as a software developer and has an outstanding NPR 35,00,000 home loan. A traditional insurance agent tries to sell him an NPR 10,00,000 endowment policy for NPR 55,000 annual premium. Aashish calculates his true HLV instead: his personal expenses take NPR 20,000 monthly, leaving NPR 55,000 monthly (NPR 6,60,000 annually) for his family. Over his remaining 28 working years until age 60, his family requires roughly NPR 1.85 Crores to maintain their living standards, plus his NPR 35 Lakh home loan, yielding an HLV need of approximately NPR 2.2 Crores. Aashish rejects the 10 Lakh endowment policy and purchases an NPR 2 Crore Term Life Insurance policy for just NPR 26,000 annual premium, securing his family\'s complete economic future for less than half the agent\'s proposed cost.',
        np: 'भक्तपुरका ३२ वर्षीय आशिष सफ्टवेयर डेभलपर हुन् र उनकी श्रीमती तथा ३ वर्षको छोरा छन्। उनको मासिक कमाइ रु. ७५,००० (वार्षिक ९ लाख) छ र उनको ३५ लाखको घरकर्जा बाँकी छ। एक बीमा एजेन्टले उनलाई वार्षिक ५५ हजार प्रिमियम तिर्ने गरी १० लाखको सावधिक बीमा बेच्न खोज्छ। आशिषले आफ्नो वास्तविक HLV हिसाब गर्छन्: उनको आफ्नो व्यक्तिगत खर्च २० हजार कटाउँदा परिवारका लागि मासिक ५५ हजार (वार्षिक ६ लाख ६० हजार) चाहिन्छ। ६० वर्षको उमेरसम्म बाँकी २८ वर्षका लागि परिवारलाई करिब १ करोड ८५ लाख र बाँकी ३५ लाखको ऋण तिर्न कुल करिब २ करोड २० लाखको सुरक्षा चाहिन्छ। आशिषले १० लाखको बीमा अस्वीकार गरी वार्षिक जम्मा २६ हजार रुपैयाँ प्रिमियम तिरेर २ करोडको "म्यादी जीवन बीमा" (Term Insurance) किन्छन्, जसले उनको परिवारलाई पूर्ण रूपमा सुरक्षित बनाउँछ।'
      },
      takeaway: {
        en: 'Never let an agent guess your insurance needs; calculate your Human Life Value mathematically so your family is never left stranded.',
        np: 'बीमा एजेन्टको भरमा हचुवाको बीमा कहिल्यै नगर्नुहोस्; आफ्नो मानव जीवन मूल्य (HLV) आफैं हिसाब गरेर मात्र परिवारका लागि पर्याप्त सुरक्षा लिनुहोस्।'
      }
    },
    formula: {
      equation: 'HLV = [ (Annual Income - Personal Expenses) × Working Years Remaining ] + Total Outstanding Debts',
      variables: [
        { name: 'Annual Income', desc: { en: 'Total take-home earnings of the breadwinner per year', np: 'कमाउने व्यक्तिको वार्षिक खुद आम्दानी' } },
        { name: 'Personal Expenses', desc: { en: 'Portion of earnings consumed personally by the earner (20-30%)', np: 'कमाउने व्यक्तिले आफ्ना लागि गर्ने व्यक्तिगत खर्च (२०-३०%)' } },
        { name: 'Working Years Remaining', desc: { en: 'Retirement Age (typically 60) minus Current Age', np: 'अवकाश उमेर (६० वर्ष) बाट हालको उमेर घटाउँदा आउने बाँकी वर्ष' } },
        { name: 'Total Outstanding Debts', desc: { en: 'Mortgages, personal loans, and business liabilities to be cleared immediately', np: 'घरकर्जा, व्यक्तिगत ऋण लगायत तुरुन्तै तिर्नुपर्ने सम्पूर्ण दायित्व' } }
      ],
      exampleCalc: {
        en: 'Age 30, Annual Income = NPR 8,00,000, Personal Expenses = NPR 2,00,000 (Net Family Share = 6,00,000), Years to 60 = 30, Debt = NPR 20,00,000: HLV = (6,00,000 × 30) + 20,00,000 = NPR 1.80 Crores + 20 Lakhs = NPR 2.0 Crores.',
        np: '३० वर्षको उमेर, वार्षिक कमाइ = रु. ८ लाख, आफ्नै खर्च = रु. २ लाख (परिवारको भाग = ६ लाख), बाँकी वर्ष = ३०, ऋण = रु. २० लाख: HLV = (६ लाख × ३०) + २० लाख = १ करोड ८० लाख + २० लाख = रु. २.० करोड।'
      }
    },
    advantages: {
      en: [
        'Replaces arbitrary guesswork with rigorous mathematical precision for life insurance coverage',
        'Guarantees that surviving dependents can maintain their dignity and standard of living uninterrupted',
        'Ensures that outstanding home loans and debts are fully cleared without liquidating family assets',
        'Exposes the dangerous underinsurance gap created by traditional high-commission endowment policies'
      ],
      np: [
        'जीवन बीमा गर्दा हचुवाको भरमा नभई वैज्ञानिक र गणितीय आधारमा सही रकम छनोट गर्न मद्दत गर्छ',
        'परिवारको मुख्य व्यक्ति नरहे पनि आश्रितहरूको जीवनस्तर र स्वाभिमानमा कुनै आँच आउन दिँदैन',
        'घरजग्गा वा सम्पत्ति लिलाम नगरीकनै बैंकको घरकर्जा र सम्पूर्ण ऋण चुक्ता हुने सुनिश्चित गर्छ',
        'एजेन्टहरूले बेच्ने महँगो सावधिक बीमाका कारण भएको अपूर्ण सुरक्षाको पोल खोलिदिन्छ'
      ]
    },
    limitations: {
      en: [
        'A simple linear HLV formula does not account for future career salary promotions or sudden inflation',
        'Requires sophisticated discounting (Present Value) to avoid overestimating future capital needs',
        'Only applies to individuals who generate economic financial income with dependent family members',
        'Does not assign financial value to non-monetary household contributions (e.g. homemaker caregiving)'
      ],
      np: [
        'साधारण सूत्रले भविष्यमा हुने तलब वृद्धि वा उच्च महँगीलाई ठ्याक्कै समायोजन नगर्न सक्ने',
        'भविष्यको पैसाको वर्तमान मूल्य (Present Value) हिसाब नगर्दा कहिलेकाहीँ चाहिनेभन्दा बढी अंक आउन सक्ने',
        'यो केवल परिवार पाल्ने र आर्थिक कमाइ गर्ने व्यक्तिका लागि मात्र लागू हुन्छ',
        'घर सम्हाल्ने गृहिणीको अमूल्य योगदानलाई पैसाको अंकमा मापन गर्न कठिनाइ हुने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'An NPR 10,00,000 life insurance policy is more than enough for any middle-class Nepali family.',
          np: 'कुनै पनि मध्यमवर्गीय नेपाली परिवारका लागि १० लाखको जीवन बीमा एकदमै पर्याप्त हुन्छ।'
        },
        reality: {
          en: 'At current living costs in Kathmandu or Pokhara, an NPR 10 Lakh lump sum invested in an 8% fixed deposit generates just NPR 6,600 per month in interest after tax. That cannot even pay for a family\'s monthly grocery staples.',
          np: 'काठमाडौं वा पोखराको महँगीमा १० लाख रुपैयाँ बैंकको मुद्दतीमा राख्दा ८% ब्याजदरमा कर कटाएर मासिक जम्मा रु. ६,६०० आउँछ। यति पैसाले परिवारको महिनाभरिको दालचामल किन्न पनि पुग्दैन।'
        }
      },
      {
        myth: {
          en: 'Children should have life insurance policies with high HLV sums assured.',
          np: 'साना बालबच्चाको पनि ठूलो रकमको जीवन बीमा (HLV) गरिदिनुपर्छ।'
        },
        reality: {
          en: 'Children do not earn an economic income, and nobody is financially dependent on their salary. Life insurance is designed to replace lost income. Breadwinners need massive coverage; children only need health and critical illness insurance.',
          np: 'बालबच्चाले कमाउँदैनन् र उनीहरूको कमाइमा कोही आश्रित हुँदैन। जीवन बीमा भनेको गुमेको आम्दानी पूर्ति गर्न गरिने हो। त्यसैले ठूलो बीमा घरको कमाउने मान्छेको हुनुपर्छ; बालबच्चाको त केवल स्वास्थ्य बीमा भए पुग्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Human Life Value (Income Replacement) vs Needs-Based Insurance Approach', np: 'मानव जीवन मूल्य (HLV) र आवश्यकतामा आधारित बीमा (Needs-Based) बीचको तुलना' },
      subtitle: { en: 'Replacing lifetime earning power vs funding specific future milestone liabilities', np: 'जीवनभरको कमाइ प्रतिस्थापन गर्ने विधि र भविष्यका तोकिएका लक्ष्य पूरा गर्ने विधि बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Human Life Value (HLV)', np: 'मानव जीवन मूल्य (HLV Method)' },
      colB: { en: 'Needs-Based Approach', np: 'आवश्यकतामा आधारित विधि (Needs-Based)' },
      rows: [
        {
          feature: { en: 'Starting Point', np: 'सुरुवाती बिन्दु' },
          valA: { en: 'The breadwinner\'s economic earnings and productive career potential', np: 'कमाउने व्यक्तिको कुल आम्दानी क्षमता र बाँकी कामकाजी उमेर' },
          valB: { en: 'Specific anticipated future family expenses (college tuition, marriage, loan payoff)', np: 'परिवारलाई भविष्यमा आइपर्ने निश्चित खर्च (सन्तानको कलेज फी, विवाह, ऋण)' }
        },
        {
          feature: { en: 'Calculation Complexity', np: 'हिसाबको जटिलता' },
          valA: { en: 'Simpler and faster; directly indexed to income, remaining working years, and debt', np: 'एकदमै छिटो र सरल; आम्दानी, उमेर र ऋणको आधारमा तुरुन्तै निकाल्न सकिने' },
          valB: { en: 'More complex; requires forecasting individual milestones 15-20 years into future', np: 'अलि जटिल; १०-२० वर्षपछिको महँगी र सन्तानको कलेज खर्च अनुमान गर्नुपर्ने' }
        },
        {
          feature: { en: 'Best Use Case', np: 'उत्तम प्रयोग' },
          valA: { en: 'Young professionals starting careers who need an immediate, robust safety benchmark', np: 'करियर सुरु गरेका युवाहरू जसलाई तुरुन्तै आफ्नो बीमाको न्यूनतम सीमा तय गर्नु छ' },
          valB: { en: 'Mature families with specific established financial goals and complex asset estates', np: 'ठूला सन्तान भएका र विविध सम्पत्ति तथा स्पष्ट वित्तीय लक्ष्य भएका पाका परिवारहरू' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'term-insurance', name: 'Term Insurance', type: 'glossary' },
      { slug: 'emergency-fund', name: 'Emergency Fund', type: 'glossary' },
      { slug: 'budget', name: 'Budget', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Insurance Fundamentals: Protecting Your Human Life Value', categorySlug: 'insurance', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'How to Calculate Your True HLV and Buy Term Insurance in Nepal', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'HLV Insurance Calculator', slug: 'hlv', desc: 'Calculate your exact Human Life Value and recommended term life cover.' }
    ],
    faqs: [
      {
        q: { en: 'Should a homemaker spouse without a formal salary have an HLV calculated?', np: 'घर सम्हाल्ने गृहिणीको पनि मानव जीवन मूल्य (HLV) हिसाब गर्न मिल्छ?' },
        a: {
          en: 'Yes. While homemakers do not draw a corporate paycheck, replacing their economic contributions (childcare, cooking, tutoring, eldercare) would cost NPR 25,000 to 40,000 monthly in market labor. Insurance companies in Nepal increasingly offer term policies for homemakers based on replacement value.',
          np: 'मिल्छ। गृहिणीले औपचारिक तलब नपाए पनि उनले गर्ने काम (बालबच्चाको हेरचाह, खाना, घर व्यवस्थापन) बजारबाट कामदार राखेर गराउँदा मासिक २५ देखि ४० हजार खर्च हुन्छ। त्यसैले गृहिणीको पनि आर्थिक मूल्य हुन्छ र उनको पनि बीमा आवश्यक मानिन्छ।'
        }
      },
      {
        q: { en: 'Does my HLV decrease as I get older?', np: 'उमेर बढ्दै जाँदा मेरो HLV घट्दै जान्छ कि बढ्छ?' },
        a: {
          en: 'Yes. As you approach retirement, your remaining working years decrease, meaning fewer future paychecks need replacement. Simultaneously, your accumulated investments and assets grow, reducing the family\'s dependency on pure life insurance.',
          np: 'हो, उमेर बढ्दै जाँदा HLV घट्छ। अवकाश नजिकिँदै गर्दा भविष्यमा कमाउन बाँकी वर्षहरू घट्छन् र यता तपाईंको आफ्नै बचत, घरजग्गा र सेयर सम्पत्ति बढिसकेको हुनाले बीमाको आवश्यकता कम हुँदै जान्छ।'
        }
      },
      {
        q: { en: 'Can I purchase an NPR 2 Crore term policy if my current salary is only NPR 30,000?', np: 'मेरो तलब मासिक ३० हजार मात्र छ भने के मैले २ करोडको बीमा लिन पाउँछु?' },
        a: {
          en: 'No. Insurance companies enforce financial underwriting rules to prevent moral hazard. In Nepal, life insurers typically cap the maximum Sum Assured at 15 to 25 times your documented annual income verified by salary slips and IRD PAN tax returns.',
          np: 'पाउनुहुन्न। बीमा कम्पनीहरूले वित्तीय नियम कडाइका साथ लागू गर्छन्। नेपालमा कम्पनीहरूले तपाईंको प्यान कर विवरण र तलब स्लिप हेरेर वार्षिक कमाइको अधिकतम १५ देखि २५ गुणासम्म मात्र बीमाङ्क रकम (Sum Assured) स्वीकृत गर्छन्।'
        }
      },
      {
        q: { en: 'What happens to my HLV if I receive a major 50% promotion at work?', np: 'जागिरमा ५०% तलब वृद्धि भएमा मेरो HLV मा के असर पर्छ?' },
        a: {
          en: 'Your HLV expands proportionally because your family\'s standard of living and future earning trajectory have risen. You should review your insurance portfolio and purchase an additional term life rider or top-up policy to close the new protection gap.',
          np: 'तपाईंको HLV पनि स्वतः बढ्छ किनकि तपाईंको परिवारको जीवनस्तर र भविष्यको कमाइको क्षमता बढेको हुन्छ। यस्तो बेला थप अर्को सानो म्यादी बीमा पोलिसी थपेर बढेको आवश्यकतालाई सुरक्षित गरिहाल्नुपर्छ।'
        }
      }
    ],
    summary: {
      en: [
        'Human Life Value (HLV) mathematically quantifies the future earnings an earner provides to dependents.',
        'Ensures the family can clear debts and maintain their standard of living if the breadwinner dies.',
        'A reliable rule of thumb in Nepal is 10 to 15 times annual income plus all outstanding debts.',
        'Pure Term Life Insurance is the only cost-effective vehicle to secure 100% of your calculated HLV.'
      ],
      np: [
        'मानव जीवन मूल्य (HLV) ले घरको कमाउने व्यक्तिले परिवारका लागि गर्ने भविष्यको कुल कमाइको आर्थिक मापन गर्छ।',
        'यसले मुख्य मान्छे नरहे पनि परिवारले ऋण तिरेर सहजै पुरानै जीवनस्तरमा बाँच्न सक्ने ग्यारेन्टी गर्छ।',
        'नेपालमा HLV को सामान्य नियम: वार्षिक खुद कमाइको कम्तीमा १० देखि १५ गुणा र सम्पूर्ण ऋण बराबरको रकम।',
        'आफ्नो वास्तविक HLV बराबरको सुरक्षा लिन सस्तो र भरपर्दो "म्यादी जीवन बीमा" (Term Insurance) नै उत्तम विकल्प हो।'
      ]
    },
    whereSeen: [
      { title: 'Insurance Fundamentals: Protecting Your Human Life Value', type: 'Lesson', url: '/learn/insurance/what-is-investing' },
      { title: 'HLV Insurance Calculator', type: 'Calculator', url: '/calculators/hlv' }
    ],
    meta: {
      title: 'What is Human Life Value (HLV) in Nepal? Insurance Needs Calculator | risePaisa',
      description: 'Calculate your Human Life Value (HLV) in Nepal. Discover why traditional endowment policies leave you underinsured and how to calculate proper term life cover.'
    }
  },

  // 8. TERM LIFE INSURANCE
  {
    slug: 'term-insurance',
    term: 'Term Life Insurance',
    termNp: 'म्यादी जीवन बीमा (Term Insurance)',
    categorySlug: 'insurance',
    categoryName: { en: 'Insurance', np: 'बीमा' },
    letter: 'T',
    abbreviation: 'Term Life',
    synonyms: ['Pure Risk Life Insurance', 'Term Plan', 'म्यादी जीवन बीमा', 'सुरक्षा बीमा', 'शुद्ध जीवन बीमा'],
    difficulty: 'Beginner',
    readTime: '5 min read',
    oneLineDef: {
      en: 'Term life insurance is pure risk financial protection that pays a guaranteed tax-free lump sum to your family if you pass away during the policy term, with zero savings or maturity gimmick.',
      np: 'म्यादी जीवन बीमा भनेको विशुद्ध आर्थिक सुरक्षा दिने बीमा हो, जहाँ तोकिएको अवधिभित्र बीमितको निधन भएमा परिवारलाई एकमुष्ट ठूलो रकम भुक्तानी गरिन्छ तर अवधि सकिँदा कुनै बचत वा फिर्ता रकम पाइँदैन।'
    },
    detailedExplanation: {
      en: 'Term life insurance is the most fundamental, honest, and cost-effective form of life insurance in existence. Unlike traditional endowment or money-back policies that bundle an expensive, low-return investment with minimal insurance, a term plan offers 100% pure financial protection. You choose a specific period (the "term", typically 20 to 30 years until your children become financially independent and debts are paid off) and a specific coverage amount (the "Sum Assured", typically NPR 1 Crore to 2 Crores). If you pass away during this term, the insurance company pays the full Sum Assured to your nominated beneficiaries completely income-tax-free. If you survive the term, the policy simply expires and no money is returned-exactly like your vehicle or motorcycle insurance. Because the insurer does not have to pay investment bonuses, the premiums are astonishingly affordable. In Nepal, a healthy 30-year-old non-smoker can secure an NPR 1 Crore (10 Million Rupee) term life cover for approximately NPR 14,000 to 18,000 per year-equivalent to just NPR 40 to 50 per day.',
      np: 'म्यादी जीवन बीमा (Term Insurance) संसारकै सबैभन्दा सरल, इमानदार र सस्तो जीवन बीमा हो। बचत र बीमा मिसाएर महँगो प्रिमियम लिने सावधिक (Endowment) वा मनी-ब्याक पोलिसीभन्दा फरक, यसले शतप्रतिशत विशुद्ध आर्थिक सुरक्षा मात्र प्रदान गर्छ। तपाईंले निश्चित अवधि (जस्तै २० देखि ३० वर्ष, जबसम्म सन्तान आफ्नै खुट्टामा उभिँदैनन् र घरको ऋण सकिँदैन) र निश्चित सुरक्षा रकम (बीमाङ्क, जस्तै १ करोडदेखि २ करोड रुपैयाँ) छनोट गर्नुहुन्छ। यदि यस अवधिभित्र बीमितको असामयिक निधन भएमा बीमा कम्पनीले पूरै रकम हकवालालाई करमुक्त रूपमा भुक्तानी गर्छ। यदि अवधिभर बीमित सकुशल रहेमा पोलिसी सकिन्छ र कुनै पैसा फिर्ता पाइँदैन-जस्तै हामीले हरेक वर्ष गर्ने मोटरसाइकल वा गाडीको बीमा। कम्पनीले कुनै बोनस वा नाफा फिर्ता दिनु नपर्ने भएकाले यसको प्रिमियम अचम्मलाग्दो गरी सस्तो हुन्छ। नेपालमा ३० वर्षको स्वस्थ व्यक्तिले वार्षिक जम्मा १४ देखि १८ हजार रुपैयाँ (दैनिक करिब ४०-५० रुपैयाँ) तिरेरै १ करोड रुपैयाँको म्यादी जीवन बीमा पाउन सक्छ।'
    },
    whyItMatters: {
      en: 'Buying a traditional endowment policy forces you to choose between inadequate protection or financial bankruptcy. If you want an NPR 1 Crore cover with an endowment policy, you must pay over NPR 5,00,000 every single year. With term insurance, you pay just NPR 15,000 for the exact same NPR 1 Crore cover, freeing up NPR 4,85,000 every year to invest in high-compounding NEPSE equities, mutual fund SIPs, or debt reduction. This timeless financial strategy is known globally as "Buy Term and Invest the Difference".',
      np: 'परम्परागत सावधिक बीमा किन्दा मानिसहरू कि त अपूरो सुरक्षा लिन बाध्य हुन्छन् कि त प्रिमियम तिर्न नसकेर कंगाल हुन्छन्। यदि सावधिक बीमाबाट १ करोडको सुरक्षा लिन खोजियो भने हरेक वर्ष ५ लाखभन्दा बढी प्रिमियम तिर्नुपर्छ, जो सामान्य मानिसले सक्दैन। तर म्यादी बीमामा त्यही १ करोडको सुरक्षा वार्षिक जम्मा १५ हजारमा पाइन्छ। यसले गर्दा बचेको बाँकी ४ लाख ८५ हजार रुपैयाँ हरेक वर्ष सेयर बजार वा म्युचुअल फण्डको SIP मा लगानी गर्न सकिन्छ। विश्वभर वित्तीय विज्ञहरूले यसै रणनीतिलाई "म्यादी बीमा किन्नुहोस् र बाँकी रकम लगानी गर्नुहोस्" (Buy Term and Invest the Difference) भन्छन्।'
    },
    howItWorks: {
      summary: {
        en: 'Purchasing and executing a Term Life Insurance policy in Nepal operates in 4 steps:',
        np: 'नेपालमा म्यादी जीवन बीमा लिने र सञ्चालन गर्ने प्रक्रिया ४ चरणमा बुझ्न सकिन्छ:'
      },
      steps: [
        {
          title: { en: '1. Sum Assured & Tenure Selection', np: '१. बीमाङ्क रकम र अवधिको छनोट' },
          desc: { en: 'Calculate your Human Life Value (e.g. NPR 1.5 Crores) and select a coverage horizon spanning until your planned retirement (e.g. 25 years).', np: 'आफ्नो HLV हिसाब गरी चाहिने रकम (जस्तै १.५ करोड) र अवकाश हुने उमेरसम्मको अवधि (जस्तै २५ वर्ष) छनोट गर्नुहोस्।' }
        },
        {
          title: { en: '2. Medical Underwriting & PAN Submission', np: '२. स्वास्थ्य परीक्षण र कागजात पेस' },
          desc: { en: 'Complete basic diagnostic blood/urine tests paid by the insurer and submit your citizenship, PAN card, and verifiable income proofs.', np: 'बीमा कम्पनीले आफ्नै खर्चमा गराउने सामान्य स्वास्थ्य परीक्षण गर्नुहोस् र नागरिकता, प्यान कार्ड तथा आम्दानीको प्रमाण बुझाउनुहोस्।' }
        },
        {
          title: { en: '3. Fixed Annual Premium Payments', np: '३. वार्षिक स्थिर प्रिमियम भुक्तानी' },
          desc: { en: 'Pay the locked, non-increasing annual premium (e.g. NPR 16,500/year) via ConnectIPS, eSewa, or mobile banking.', np: 'वर्षौंसम्म कहिल्यै नबढ्ने गरी तय भएको वार्षिक प्रिमियम (जस्तै रु. १६,५००) कनेक्टआईपीएस वा इसेवाबाट समयमै बुझाउनुहोस्।' }
        },
        {
          title: { en: '4. Claim Settlement or Policy Expiry', np: '४. दाबी भुक्तानी वा म्याद समाप्ति' },
          desc: { en: 'If the insured dies during the term, the nominee receives the full tax-free lump sum within 15-30 days; if surviving, the term concludes cleanly.', np: 'अवधिभित्र निधन भएमा हकवालाले पूरै १ करोड करमुक्त पाउँछन्; अवधिभर सकुशल रहेमा पोलिसी बिना कुनै झन्झट स्वतः समाप्त हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Primary financial risk protection for household breadwinners with dependents',
        'Collateral security for commercial bank mortgages and large business loans',
        'Income tax deduction: up to NPR 40,000 annual premium deduction under Nepal Income Tax Act',
        'Keyman corporate insurance insuring indispensable startup founders and key partners'
      ],
      np: [
        'परिवार पाल्ने मुख्य व्यक्तिका आश्रितहरूको आर्थिक भविष्य सुरक्षित गर्न',
        'बैंकबाट ठूलो घरकर्जा वा व्यापारिक ऋण लिँदा धितो सुरक्षणका रूपमा',
        'आयकर छुट: आयकर ऐन अनुसार वार्षिक रु. ४०,००० सम्मको प्रिमियममा कर छुट पाउन',
        'कम्पनीका मुख्य संस्थापक वा साझेदारको जोखिम न्यूनीकरण गर्न (Keyman Insurance)'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Tax Benefits of Term Insurance and Why Agents Reluctantly Sell It in Nepal',
        np: 'नेपालमा म्यादी बीमामा पाइने कर छुट र एजेन्टहरूले यो बेच्न नमान्नुको कारण'
      },
      body: {
        en: 'Under the Nepal Income Tax Act 2058 (amended), taxpayers can deduct up to NPR 40,000 paid toward life insurance premiums from their taxable annual income, resulting in immediate tax savings of NPR 4,000 to 14,400 depending on your tax bracket. Despite this, insurance agents in Nepal rarely recommend Term Life Insurance. Why? Because insurance agent commissions are percentage-based: an agent earns substantially higher commission selling an expensive NPR 1,00,000 endowment policy than selling an honest NPR 15,000 term policy. As a smart consumer, you must proactively demand "Term Life Insurance" (Myadi Jeevan Beema) from licensed insurers in Nepal (such as Nepal Life, LIC Nepal, Himalayan Life, Sun Nepal, or Sanima Reliance) rather than settling for what an agent pushes.',
        np: 'नेपालको आयकर ऐन २०५८ अनुसार जीवन बीमाको प्रिमियम तिर्दा वार्षिक रु. ४०,००० सम्मको रकम आफ्नो करयोग्य आम्दानीबाट घटाउन पाइन्छ, जसले गर्दा तपाईंको कर स्ल्याब अनुसार वार्षिक रु. ४,००० देखि १४,४०० सम्मको सिधा कर बचत हुन्छ। तर यति राम्रो हुँदाहुँदै पनि नेपालका बीमा एजेन्टहरूले म्यादी जीवन बीमाको बारेमा ग्राहकलाई सितिमिति बताउँदैनन्। यसको मुख्य कारण कमिसन हो: १ लाख प्रिमियम भएको सावधिक बीमा बेच्दा एजेन्टले मोटो कमिसन पाउँछन् तर १५ हजारको म्यादी बीमा बेच्दा निकै थोरै कमिसन आउँछ। त्यसैले एक सचेत नागरिकका रूपमा तपाईं आफैंले बीमा कम्पनीहरू (जस्तै नेपाल लाइफ, एलआइसी, हिमालयन लाइफ, सूर्यज्योति आदि) मा गएर स्पष्टसँग "म्यादी जीवन बीमा" (Term Life Insurance) नै माग्नुपर्छ।'
      },
      keyPoints: {
        en: [
          'Pure risk protection: massive Sum Assured (NPR 1-2 Crores) for minimal premium (NPR 12-18k/yr).',
          'Qualifies for up to NPR 40,000 annual income tax deduction under Nepal tax laws.',
          'Zero maturity value if you survive; your money bought absolute peace of mind for decades.',
          'Always demand pure term insurance proactively; do not let commission-driven agents dissuade you.'
        ],
        np: [
          'विशुद्ध जोखिम सुरक्षा: वार्षिक थोरै प्रिमियम (१२-१८ हजार) मै १ देखि २ करोडको ठूलो सुरक्षा।',
          'नेपालको आयकर कानुन अनुसार वार्षिक रु. ४०,००० सम्मको प्रिमियममा सिधै आयकर छुट।',
          'बाँचेमा फिर्ता केही आउँदैन; तपाईंले तिरेको पैसाले परिवारलाई वर्षौंसम्म ढुक्कको सुरक्षा दियो।',
          'एजेन्टको कमिसनको लोभमा नपरी आफैं अघि सरेर म्यादी जीवन बीमा (Term Insurance) नै माग्नुहोस्।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Two colleagues in Kathmandu, Ramesh and Dipak, both aged 30, earn identical salaries of NPR 80,000 monthly. Ramesh buys a traditional 20-year endowment policy with an annual premium of NPR 1,20,000. Because the premium is so high, he can only afford an NPR 20,00,000 Sum Assured. Dipak understands financial math: he buys an NPR 1,50,00,000 (1.5 Crore) pure Term Life Insurance policy for just NPR 20,000 annual premium, and invests the remaining NPR 1,00,000 every year into an equity mutual fund SIP averaging 13% annual returns. Five years later, tragedy strikes and both pass away in an accident. Ramesh\'s family receives just NPR 20 Lakhs plus small bonuses (barely enough to survive 2 years). Dipak\'s family receives NPR 1.5 Crores tax-free immediately, clearing their home loan and guaranteeing his children complete university educations with zero financial stress.',
        np: 'काठमाडौंका दुई साथी रमेश र दीपक दुवै ३० वर्षका छन् र दुवैको मासिक तलब रु. ८०,००० छ। रमेशले वार्षिक रु. १,२०,००० प्रिमियम तिरेर २० वर्षे सावधिक बीमा गरे। प्रिमियम धेरै महँगो भएकाले उनले जम्मा २० लाखको मात्र बीमाङ्क लिन सके। तर दीपकले वित्तीय गणित बुझेका थिए: उनले वार्षिक जम्मा रु. २०,००० तिरेर १ करोड ५० लाख (१.५ करोड) को "म्यादी जीवन बीमा" लिए, र बचेको रु. १,००,००० हरेक वर्ष वार्षिक १३% प्रतिफल दिने सेयर बजारको SIP मा हाले। दुर्भाग्यवश ५ वर्षपछि एउटा सडक दुर्घटनामा दुवैको निधन भयो। रमेशको परिवारले जम्मा २० लाख र केही बोनस पाए (जसले २ वर्षको खर्च पनि धौ-धौ धान्यो)। तर दीपकको परिवारले तुरुन्तै १ करोड ५० लाख करमुक्त पाए, जसले घरको ऋण चुक्ता भयो र उनका सन्तानको उच्च शिक्षा बिना कुनै अभाव सहजै पूरा भयो।'
      },
      takeaway: {
        en: 'Never mix insurance with investment; buy pure term insurance for comprehensive family protection, and invest your surplus in real wealth-generating assets.',
        np: 'बीमा र लगानीलाई कहिल्यै नमिसाउनुहोस्; परिवारको वास्तविक सुरक्षाका लागि सस्तो म्यादी बीमा गर्नुहोस् र बचेको पैसा सेयर वा म्युचुअल फण्डमा लगानी गरेर धनी बन्नुहोस्।'
      }
    },
    formula: {
      equation: 'Total Annual Protection Cost = Base Term Premium + Optional Critical Illness / Accidental Riders',
      variables: [
        { name: 'Base Term Premium', desc: { en: 'Guaranteed locked premium for death benefit (typically NPR 1.2 to 1.8 per NPR 1,000 sum assured for age 30)', np: 'मृत्यु दाबीका लागि लाग्ने स्थिर प्रिमियम (३० वर्षको व्यक्तिका लागि प्रतिहजार रु. १.२ देखि १.८)' } },
        { name: 'Critical Illness Rider', desc: { en: 'Optional add-on paying lump-sum on diagnosis of cancer, stroke, kidney failure (up to NPR 50 Lakhs in Nepal)', np: 'क्यान्सर, हृदयघात वा मिर्गौला फेल जस्ता घातक रोग लाग्दा एकमुष्ट रकम पाउने अतिरिक्त सुविधा' } }
      ],
      exampleCalc: {
        en: 'Age 30 healthy non-smoker, NPR 1 Crore Term Life cover: Base Premium = NPR 14,500 + NPR 25 Lakh Critical Illness Rider = NPR 4,500. Total Premium = NPR 19,000 annually.',
        np: '३० वर्षको निरोगी व्यक्ति, १ करोडको म्यादी बीमा: मुख्य प्रिमियम = रु. १४,५०० + २५ लाखको घातक रोग सुविधा = रु. ४,५००। कुल वार्षिक प्रिमियम = रु. १९,००० मात्र।'
      }
    },
    advantages: {
      en: [
        'Offers the highest insurance coverage (NPR 1-2 Crores) for the lowest possible annual premium cost',
        'Separates protection from investment, allowing surplus capital to compound aggressively in equities',
        'Locked premium remains identical and never increases throughout the entire 20-30 year term',
        'Qualifies for up to NPR 40,000 annual personal income tax deduction under Nepal tax laws'
      ],
      np: [
        'सबैभन्दा सानो प्रिमियममा सबैभन्दा ठूलो बीमा सुरक्षा (१ देखि २ करोड रुपैयाँ) दिन्छ',
        'बीमा र लगानीलाई अलग राखेर बाँकी बचेको मोटो रकम सेयर वा व्यवसायमा लगानी गर्न दिन्छ',
        'एकपटक तोकिएको प्रिमियम २० देखि ३० वर्षसम्म कहिल्यै एक रुपैयाँ पनि बढ्दैन',
        'नेपाल सरकारको आयकर कानुन अनुसार वार्षिक रु. ४०,००० सम्मको प्रिमियममा कर छुट पाइन्छ'
      ]
    },
    limitations: {
      en: [
        'Zero maturity payout if you survive the term; many beginners psychologically struggle with "no return"',
        'Must be renewed or purchased early; premiums jump substantially if you apply past age 45 or develop illness',
        'Strict medical underwriting; preexisting chronic illnesses may lead to rejected applications or premium loading',
        'Insurance agents in Nepal often discourage buyers due to minimal agent commission structures'
      ],
      np: [
        'अवधिभर बाँचेमा कुनै पैसा फिर्ता पाइँदैन, जसले गर्दा धेरैलाई "मेरो पैसा खेर गयो कि" भन्ने भ्रम हुन सक्छ',
        'कम उमेरमै लिनुपर्छ; ४५ वर्ष काटेपछि वा कुनै रोग लागेपछि लिँदा प्रिमियम निकै महँगिन सक्छ',
        'स्वास्थ्य परीक्षण कडाइका साथ हुन्छ; पहिलेदेखि कुनै रोग भएमा कम्पनीले बीमा गर्न नमान्न सक्छ',
        'एजेन्टलाई कमिसन निकै थोरै आउने भएकाले उनीहरूले यो पोलिसी बेच्न आनाकानी गर्छन्'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Term insurance is a complete waste of money because you get zero rupees back if you survive.',
          np: 'म्यादी जीवन बीमा भनेको पैसाको नाश हो किनकि अवधि सकिँदा एक रुपैयाँ पनि फिर्ता आउँदैन।'
        },
        reality: {
          en: 'Do you consider your motorbike or car insurance a "waste of money" because you didn\'t get into an accident? Of course not. You pay for pure risk transfer and peace of mind. Surviving your term is the best possible outcome; the money you saved on premiums made you wealthy through investing.',
          np: 'के तपाईंले हरेक वर्ष गर्ने मोटरसाइकलको बीमामा दुर्घटना नभएर पैसा फिर्ता नआउँदा पैसा खेर गयो भन्नुहुन्छ? पक्कै भन्नुहुन्न। त्यो पैसाले तपाईंलाई मानसिक शान्ति दिएको हुन्छ। २० वर्षसम्म बाँच्नु त खुशीको कुरा हो; यता प्रिमियम जोगाएर सेयरमा लगानी गरेको पैसाले तपाईंलाई पहिल्यै करोडपति बनाइसकेको हुन्छ।'
        }
      },
      {
        myth: {
          en: 'You can buy term insurance at any age whenever you feel like you are getting old.',
          np: 'म्यादी बीमा जहिले किने पनि हुन्छ, बुढो भएपछि किन्दा पनि केही फरक पर्दैन।'
        },
        reality: {
          en: 'Term insurance should be purchased in your 20s or early 30s when you are in peak health. At age 28, an NPR 1 Crore cover costs NPR 13,000/year; at age 50 with hypertension or diabetes, the same policy may cost NPR 55,000/year or be rejected entirely.',
          np: 'म्यादी बीमा २० वा ३० वर्षको निरोगी उमेरमै गरिहाल्नुपर्छ। २८ वर्षमा १ करोडको बीमा वार्षिक १३ हजारमा पाइन्छ भने ५० वर्ष पुगेर प्रेसर वा सुगर देखिएपछि त्यही बीमाको ५५ हजार पर्न सक्छ वा कम्पनीले बीमा गर्नै अस्वीकार गर्न सक्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Term Life Insurance vs Traditional Endowment Policy (Sawadhik)', np: 'म्यादी जीवन बीमा (Term) र सावधिक जीवन बीमा (Endowment) बीचको तुलना' },
      subtitle: { en: 'Pure risk financial protection vs blended low-yield investment bundle', np: 'विशुद्ध जोखिम सुरक्षा र लगानी मिसाइएको परम्परागत बीमा बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Term Life Insurance', np: 'म्यादी जीवन बीमा (Term Insurance)' },
      colB: { en: 'Endowment Policy (Sawadhik)', np: 'सावधिक जीवन बीमा (Endowment)' },
      rows: [
        {
          feature: { en: 'Primary Purpose', np: 'मुख्य उद्देश्य' },
          valA: { en: '100% pure financial risk protection for dependent family', np: 'आश्रित परिवारका लागि शतप्रतिशत विशुद्ध आर्थिक जोखिम सुरक्षा' },
          valB: { en: 'Blended life insurance with forced low-return savings component', np: 'न्यून प्रतिफल दिने बचत र सानो बीमा मिसाइएको सम्झौता' }
        },
        {
          feature: { en: 'Annual Premium for NPR 1 Crore Cover', np: '१ करोडको बीमा गर्दा लाग्ने वार्षिक खर्च' },
          valA: { en: 'Ultra-low (approximately NPR 14,000 to 18,000 annually for age 30)', np: 'अत्यन्तै सस्तो (३० वर्षको उमेरमा वार्षिक करिब १४ देखि १८ हजार रुपैयाँ)' },
          valB: { en: 'Astronomical (exceeds NPR 5,00,000 annually for age 30)', np: 'अत्यधिक महँगो (३० वर्षको उमेरमा वार्षिक ५ लाख रुपैयाँभन्दा माथि)' }
        },
        {
          feature: { en: 'Maturity Payout', np: 'अवधि सकिँदा पाउने रकम' },
          valA: { en: 'Zero rupees; pure protection concluded with zero regrets', np: 'शून्य रुपैयाँ; फिर्ता केही आउँदैन तर वर्षौंसम्म शान्ति दिन्छ' },
          valB: { en: 'Returns Sum Assured plus accrued annual company bonuses', np: 'बीमाङ्क रकम र कम्पनीले तोकेको वार्षिक बोनस थपेर फिर्ता दिन्छ' }
        },
        {
          feature: { en: 'Investment Efficiency', np: 'लगानीको प्रभावकारिता' },
          valA: { en: 'Enables "Buy Term & Invest the Difference" in high-return SIPs (12-15%)', np: 'बचेको ४-५ लाख रकम सेयर वा SIP मा हालेर १२-१५% नाफा कमाउन सकिने' },
          valB: { en: 'Poor return; bonuses historically yield an annualized return of just 4% to 6%', np: 'कमजोर प्रतिफल; बोनसको हिसाब गर्दा वार्षिक जम्मा ४ देखि ६ प्रतिशत मात्र नाफा' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'hlv', name: 'HLV', type: 'glossary' },
      { slug: 'emergency-fund', name: 'Emergency Fund', type: 'glossary' },
      { slug: 'sip', name: 'SIP', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Insurance Fundamentals: Protecting Your Human Life Value', categorySlug: 'insurance', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'How to Buy Pure Term Life Insurance in Nepal Without Getting Tricked', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Term Insurance & HLV Calculator', slug: 'hlv', desc: 'Calculate your optimal term life coverage and compare premium quotes.' }
    ],
    faqs: [
      {
        q: { en: 'Which insurance companies sell pure Term Life Insurance in Nepal?', np: 'नेपालमा कुन-कुन कम्पनीले विशुद्ध म्यादी जीवन बीमा बेच्छन्?' },
        a: {
          en: 'Most licensed life insurers in Nepal (including Nepal Life, Himalayan Life, Life Insurance Corporation Nepal / LICN, Sun Nepal Life, Citizen Life, and Sanima Reliance) have approved term plans. You must explicitly ask for "Pure Term Life Insurance" (Myadi Jeevan Beema) without savings bonuses.',
          np: 'नेपालका लगभग सबै जीवन बीमा कम्पनीहरू (जस्तै नेपाल लाइफ, हिमालयन लाइफ, एलआइसी नेपाल, सूर्यज्योति, सिटिजन लाइफ, सानिमा रिलायन्स आदि) सँग म्यादी बीमा योजना हुन्छन्। तपाईंले कार्यालयमा गएर स्पष्टसँग बोनस नभएको "विशुद्ध म्यादी जीवन बीमा" नै माग्नुपर्छ।'
        }
      },
      {
        q: { en: 'Can an insurance company in Nepal refuse to pay a term insurance death claim?', np: 'के नेपालमा बीमा कम्पनीले म्यादी बीमाको मृत्यु दाबी भुक्तानी दिन अस्वीकार गर्न सक्छ?' },
        a: {
          en: 'A claim can only be legally rejected for non-disclosure of preexisting chronic diseases (e.g. concealing heart surgery or cancer during application), death by suicide within the initial policy year, or fraud. Under Nepal insurance regulations, after 2-3 years of active continuous policy life, claims cannot be contested for innocent non-fraudulent oversights.',
          np: 'यदि बीमितले बीमा गर्दा पहिलेदेखि भएको गम्भीर रोग (जस्तै क्यान्सर वा मुटुको अपरेशन) लुकाएको प्रमाणित भएमा वा पहिलो वर्षभित्र आत्महत्या गरेमा मात्र दाबी रोकिन सक्छ। नियमित प्रिमियम तिरेको २-३ वर्षपछि कम्पनीले सामान्य कारण देखाएर दाबी रोक्न कानुनतः पाउँदैन।'
        }
      },
      {
        q: { en: 'What optional riders should I attach to my Term Life Insurance policy in Nepal?', np: 'नेपालमा म्यादी बीमा गर्दा कुन-कुन अतिरिक्त सुविधाहरू (Riders) जोड्नु राम्रो हुन्छ?' },
        a: {
          en: 'The two most valuable riders in Nepal are: 1) Critical Illness Rider (pays a lump-sum upon diagnosis of serious diseases like cancer or stroke), and 2) Accidental Death & Permanent Total Disability Rider (doubles the payout in accident cases and waives future premiums if disabled).',
          np: 'नेपालमा दुईवटा राइडर लिनु एकदमै लाभदायक हुन्छ: १) क्रिटिकल इलनेस (क्यान्सर, हृदयघात जस्ता घातक रोग लाग्दा एकमुष्ट रकम पाइने), र २) दुर्घटना मृत्यु तथा पूर्ण अशक्तता सुविधा (दुर्घटनामा मृत्यु भए दोब्बर रकम पाइने र अपाङ्ग भए भविष्यको प्रिमियम मिनाहा हुने)।'
        }
      },
      {
        q: { en: 'What is a "Term with Return of Premium" (TROP) plan, and is it worth buying?', np: 'प्रिमियम फिर्ता हुने म्यादी बीमा (TROP) के हो र के यो लिनु फाइदाजनक छ?' },
        a: {
          en: 'TROP policies refund your paid premiums if you survive the term. However, insurers charge 2 to 3 times higher premiums for TROP compared to pure term insurance. Because that refunded money loses massive purchasing power to inflation over 25 years with zero interest, financial experts strongly recommend buying pure term and avoiding TROP.',
          np: 'TROP भनेको बाँचेमा तिरेको प्रिमियम फिर्ता दिने म्यादी बीमा हो। तर यसमा कम्पनीहरूले साधारण म्यादी बीमाभन्दा २ देखि ३ गुणा बढी प्रिमियम लिन्छन्। २५ वर्षपछि ब्याज बिना त्यही पुरानो रकम फिर्ता आउँदा महँगीले त्यसको मूल्य आधा भइसकेको हुन्छ। त्यसैले विशुद्ध म्यादी बीमा लिनु नै सधैं बुद्धिमानी हुन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'Term life insurance provides pure, honest risk protection with zero investment gimmicks or maturity bonuses.',
        'Enables securing massive coverage (NPR 1 to 2 Crores) for a tiny fraction of endowment policy costs.',
        'Embraces the proven strategy: "Buy Term and Invest the Difference" in high-compounding equities and SIPs.',
        'Deductible up to NPR 40,000 annually against personal taxable income under Nepal Income Tax regulations.'
      ],
      np: [
        'म्यादी जीवन बीमाले कुनै बचतको प्रपञ्च बिना परिवारलाई शतप्रतिशत विशुद्ध आर्थिक सुरक्षा प्रदान गर्छ।',
        'सावधिक बीमाको तुलनामा निकै थोरै खर्चमै १ देखि २ करोडको विशाल सुरक्षा लिन सकिन्छ।',
        '"म्यादी बीमा किन्नुहोस् र बाँकी रकम लगानी गर्नुहोस्" भन्ने विश्वव्यापी प्रमाणित रणनीति अपनाउनुहोस्।',
        'नेपालको आयकर ऐन अनुसार वार्षिक रु. ४०,००० सम्मको प्रिमियम भुक्तानीमा आयकर छुट प्राप्त हुन्छ।'
      ]
    },
    whereSeen: [
      { title: 'Insurance Fundamentals: Protecting Your Human Life Value', type: 'Lesson', url: '/learn/insurance/what-is-investing' },
      { title: 'Term Insurance & HLV Calculator', type: 'Calculator', url: '/calculators/hlv' }
    ],
    meta: {
      title: 'What is Term Life Insurance in Nepal? Complete Buy Term Guide | risePaisa',
      description: 'Discover how pure Term Life Insurance protects your family in Nepal. Learn why it beats traditional endowment plans and saves you lakhs in premiums.'
    }
  },

  // 9. QR PAYMENT (FONEPAY & NEPALPAY)
  {
    slug: 'qr-payment',
    term: 'QR Payment (Fonepay & NepalPay)',
    termNp: 'क्युआर भुक्तानी (Fonepay र NepalPay)',
    categorySlug: 'digital-payments',
    categoryName: { en: 'Digital Payments', np: 'डिजिटल भुक्तानी' },
    letter: 'Q',
    abbreviation: 'QR',
    synonyms: ['Fonepay QR', 'NepalPay QR', 'EMVCo Interoperable QR', 'क्युआर कोड स्क्यान', 'डिजिटल भुक्तानी'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'QR Payment is a contactless digital payment method that allows instant, real-time fund transfers between consumers and merchants by scanning a two-dimensional barcode using mobile banking apps or digital wallets.',
      np: 'क्युआर भुक्तानी भनेको मोबाइल बैंकिङ एप वा डिजिटल वालेटबाट दुई-आयामी बारकोड (QR Code) स्क्यान गरेर ग्राहक र व्यापारी बीच तुरुन्तै सुरक्षित रकम भुक्तानी गर्ने डिजिटल प्रणाली हो।'
    },
    detailedExplanation: {
      en: 'Quick Response (QR) payments have fundamentally transformed retail commerce across Nepal, dismantling the traditional reliance on physical paper cash. Operating under regulatory oversight from the Payment Systems Department of Nepal Rastra Bank (NRB), QR payment networks utilize standardized EMVCo interoperable architecture. In Nepal, the landscape is led by two major networks: Fonepay (developed by F1Soft International, integrating virtually all commercial and development banks alongside eSewa) and NepalPay QR (developed by Nepal Clearing House Limited - NCHL as part of the National Payment Switch). When a consumer scans a merchant\'s QR standee, the mobile app decodes the merchant\'s unique banking routing details, prompts for the payment amount and MPIN/biometric confirmation, and executes a real-time account-to-account credit within 2 to 3 seconds. For merchants, funds land directly into their institutional bank account with zero cash handling hassle, eliminating fake currency notes and coin change shortages. Furthermore, cross-border QR integration allows Indian tourists to pay via UPI at Fonepay merchants in Nepal and Nepali travelers to scan UPI QR in India using authorized mobile apps.',
      np: 'क्युआर (Quick Response) भुक्तानीले नेपालको खुद्रा व्यापार र दैनिक कारोबारलाई पूर्ण रूपमा डिजिटल बनाएर कागजी नोटको झन्झट अन्त्य गरिदिएको छ। नेपाल राष्ट्र बैंकको भुक्तानी प्रणाली विभागको नियमनमा सञ्चालित यो प्रणाली अन्तर्राष्ट्रिय EMVCo मापदण्डमा आधारित छ। नेपालमा यसका दुई प्रमुख नेटवर्क छन्: फोनपे (Fonepay - जसले देशका सम्पूर्ण वाणिज्य बैंक, विकास बैंक र इसेवालाई जोडेको छ) र नेपालपे (NepalPay QR - जो नेपाल क्लियरिङ हाउस लिमिटेड / NCHL ले राष्ट्रिय भुक्तानी स्वीच अन्तर्गत सञ्चालन गर्छ)। जब कुनै ग्राहकले पसलमा रहेको क्युआर स्क्यान गर्छ, उसको मोबाइल बैंकिङ एपले व्यापारीको खाता नम्बर र विवरण तुरुन्तै पत्ता लगाउँछ। ग्राहकले रकम र आफ्नो गोप्य पिन (MPIN) हाल्नासाथ २ देखि ३ सेकेन्डमै पैसा ग्राहकको खाताबाट सिधै व्यापारीको बैंक खातामा जम्मा हुन्छ। यसले गर्दा खुद्रा पैसा फिर्ता दिने, नक्कली नोट पर्ने र बैंकमा नगद बोकेर जानुपर्ने समस्या सदाका लागि हटेको छ। हाल नेपाल र भारत बीच क्रस-बोर्ड क्युआर भुक्तानी समेत सुरु भइसकेको छ।'
    },
    whyItMatters: {
      en: 'QR payments bring millions of informal micro-merchants-from street vegetable vendors in Kalimati to corner tea stalls and tempo drivers-directly into the formal banking system. By generating a transparent digital transaction history, small business owners who previously had no formal financial records can now qualify for collateral-free MSME bank loans and credit cards based on verified QR transaction turnover.',
      np: 'क्युआर भुक्तानीले कालिमाटीका तरकारी व्यापारीदेखि गल्लीका चिया पसल र टेम्पो चालकसम्मलाई औपचारिक बैंकिङ प्रणालीमा जोडिदिएको छ। पहिले कुनै कानुनी वित्तीय विवरण नभएका साना व्यवसायीहरूले अब आफ्नो क्युआरमा भएको दैनिक डिजिटल कारोबारको आधारमा बैंकबाट बिना धितो सहुलियतपूर्ण व्यावसायिक ऋण (MSME Loan) र क्रेडिट कार्ड पाउन सक्ने भएका छन्।'
    },
    howItWorks: {
      summary: {
        en: 'The technical and financial clearing of a retail QR payment in Nepal follows 4 phases:',
        np: 'नेपालमा क्युआर भुक्तानी कसरी सम्पन्न हुन्छ भन्ने प्रक्रिया ४ चरणमा बुझ्न सकिन्छ:'
      },
      steps: [
        {
          title: { en: '1. QR Code Encoding & Display', np: '१. क्युआर कोडको प्रदर्शन' },
          desc: { en: 'The merchant displays an EMVCo-standardized Static QR standee or generates a Dynamic QR code with pre-filled billing amounts on a POS terminal.', np: 'पसलमा बैंकले दिएको स्ट्याटिक क्युआर (Static QR) राखिन्छ वा बिलिङ काउन्टरमा ठ्याक्कै रकम तोकिएको डायनामिक क्युआर निकालिन्छ।' }
        },
        {
          title: { en: '2. Scan & Parsing', np: '२. क्यामेराबाट स्क्यान र विवरण पहिचान' },
          desc: { en: 'The customer opens any interoperable mobile banking app or wallet and scans the code; the app securely decrypts the merchant ID and bank routing.', np: 'ग्राहकले आफ्नो कुनै पनि बैंकको मोबाइल एप वा वालेट खोलेर स्क्यान गर्छ; एपले व्यापारीको नाम, बैंक र खाता विवरण तुरुन्तै चिन्छ।' }
        },
        {
          title: { en: '3. Two-Factor Authorization', np: '३. पिन वा बायोमेट्रिक प्रमाणीकरण' },
          desc: { en: 'The customer confirms the payable amount and authorizes the transaction via 4-digit MPIN, biometric fingerprint, or Face ID.', np: 'ग्राहकले तिर्नुपर्ने रकम रुजु गरी आफ्नो ४ अंकको गोप्य पिन (MPIN) वा फिंगरप्रिन्ट लगाएर भुक्तानी स्वीकृत गर्छ।' }
        },
        {
          title: { en: '4. Real-Time Account-to-Account Settlement', np: '४. तत्काल खातामा रकम दाखिला' },
          desc: { en: 'The payment switch debits the customer\'s bank account and instantly credits the merchant\'s account, broadcasting audio/SMS confirmations within seconds.', np: 'भुक्तानी स्वीचले ग्राहकको खाताबाट पैसा काटेर तुरुन्तै व्यापारीको खातामा हालिदिन्छ र २ सेकेन्डमै दुवैको मोबाइलमा एसएमएस र अडियो बक्समा सूचना बज्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Everyday retail shopping at grocery stores, pharmacies, restaurants, and supermarkets',
        'Public transport fares across city microbuses, electric tempos, and ride-hailing services',
        'Hospital outpatient registration fees, diagnostic labs, and medical pharmacies',
        'Government administrative service payments at traffic police desks, ward offices, and Malpot'
      ],
      np: [
        'किराना पसल, फार्मेसी, रेस्टुरेन्ट र डिपार्टमेन्टल स्टोरहरूमा दैनिक किनमेल गर्दा',
        'सार्वजनिक यातायात, सफा टेम्पो, माइक्रोबस र राइड सेयरिङको भाडा तिर्दा',
        'अस्पतालको ओपिडी टिकट, रगत परीक्षण र औषधिको बिल काउन्टरमा भुक्तानी गर्दा',
        'ट्राफिक प्रहरीको जरिवाना, वडा कार्यालयको सिफारिस र मालपोतको राजस्व तिर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The NRB Digital Payment Revolution, Audio Smart Speakers, and Cross-Border QR',
        np: 'नेपाल राष्ट्र बैंकको डिजिटल अभियान, अडियो स्मार्ट स्पिकर र नेपाल-भारत क्युआर'
      },
      body: {
        en: 'To curb the massive costs of printing physical banknotes (which cost the state billions annually in security paper and destruction), Nepal Rastra Bank launched an aggressive "Cashless Nepal" campaign. In recent years, monthly QR transaction volume in Nepal surged past NPR 40 to 50 Billion across millions of transactions. To eliminate merchant fraud where unscrupulous customers showed fake payment screenshots, payment networks deployed "Audio Smart Speakers" that verbally announce successful payments in Nepali voice (e.g. "फोनपेमा रु. २५० प्राप्त भयो") in real time. Today, the system has expanded internationally: Indian tourists visiting Pashupatinath, Pokhara, or Lumbini can scan Fonepay/NepalPay QR codes using PhonePe/Google Pay/BHIM via NIPL-UPI integration, bringing formal digital foreign currency revenue directly into Nepali commercial banks.',
        np: 'कागजी नोट छाप्दा र पुराना नोट जलाउँदा हरेक वर्ष राज्यको अर्बौं रुपैयाँ खर्च हुने भएकाले नेपाल राष्ट्र बैंकले "नगदरहित नेपाल" (Cashless Nepal) को राष्ट्रिय अभियान चलायो। आज नेपालमा हरेक महिना क्युआरबाट हुने कारोबार ४० देखि ५० अर्ब रुपैयाँभन्दा माथि पुगेको छ। ग्राहकले मोबाइलमा फेक स्क्रिनसट देखाएर झुक्याउने समस्या रोक्न बैंकहरूले पसल-पसलमा "अडियो स्मार्ट स्पिकर" (Audio Box) जडान गरिदिएका छन्, जसले पैसा आउनासाथ नेपाली भाषामै बोलेर (जस्तै "फोनपेमा रु. २५० प्राप्त भयो") सुनाउँछ। हालै नेपाल र भारत बीचको क्रस-बोर्ड क्युआर भुक्तानीले गर्दा नेपाल आउने भारतीय पर्यटकले आफ्नै UPI एपबाट सोझै नेपाली पसलमा क्युआर स्क्यान गरी पैसा तिर्न सक्ने भएका छन्, जसले विदेशी मुद्रा सोझै बैंकिङ प्रणालीमा भित्र्याउन मद्दत गरेको छ।'
      },
      keyPoints: {
        en: [
          'Monthly retail QR transactions in Nepal exceed NPR 40+ Billion across millions of payments.',
          'Zero transaction fee for consumers paying retail merchants for daily goods and services.',
          'Audio voice confirmation boxes eliminate fraudulent fake payment confirmation screenshots.',
          'Cross-border interoperability enables seamless UPI QR payments between Nepal and India.'
        ],
        np: [
          'नेपालमा हरेक महिना क्युआरमार्फत ४० अर्ब रुपैयाँभन्दा बढीको डिजिटल कारोबार हुने गरेको छ।',
          'सर्वसाधारण ग्राहकका लागि पसलमा क्युआरबाट पैसा तिर्दा कुनै पनि अतिरिक्त शुल्क लाग्दैन।',
          'अडियो बक्सले पैसा आउनासाथ बोलेर जानकारी दिने हुनाले नक्कली स्क्रिनसटको ठगी पूर्ण रूपमा रोकिएको छ।',
          'नेपाल-भारत अन्तरदेशीय क्युआरले गर्दा भारतीय पर्यटकले सिधै UPI बाट भुक्तानी गर्न सक्छन्।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Gopal runs a small fresh vegetable shop in Baneshwor, Kathmandu. In the past, he lost over an hour every morning visiting the bank to get change coins and small NPR 5/10/20 notes, and regularly lost money accepting torn bills. In early 2023, his commercial bank equipped him with an interoperable Fonepay/NepalPay QR standee and an audio voice box. Now, when Sarita buys 1 kg of tomatoes for NPR 80, she scans the QR with her mobile banking app. Within 2 seconds, the audio speaker announces "फोनपेमा रु. ८० प्राप्त भयो", and the money settles directly into Gopal\'s interest-bearing bank account. Over one year, Gopal processes over NPR 18,00,000 in transparent digital QR sales. When he applies for an NPR 5,00,000 small business loan to purchase a refrigerated pickup van, his bank approves the loan within 3 days without collateral, relying solely on his verified QR transaction turnover statement.',
        np: 'काठमाडौंको बानेश्वरमा गोपालको सानो तरकारी पसल छ। पहिले उनले हरेक बिहान खुद्रा ५, १०, २० का नोट र सिक्का साट्न बैंकमा घन्टौं लाइन बस्नुपर्थ्यो र फाटेका नोट परेर घाटा हुन्थ्यो। विसं २०७९ मा उनको बैंकले पसलमा एउटा क्युआर स्ट्यान्ड र अडियो बक्स राखिदियो। अब जब सरिताले ८० रुपैयाँको गोलभेंडा किन्छिन्, उनले मोबाइल बैंकिङबाट क्युआर स्क्यान गर्छिन्। २ सेकेन्डमै स्पिकरले "फोनपेमा रु. ८० प्राप्त भयो" भनेर बोल्छ र पैसा सिधै गोपालको बैंक खातामा जम्मा हुन्छ। एक वर्षमा गोपालको क्युआरमा १८ लाख रुपैयाँको कारोबार देखिन्छ। जब उनले तरकारी ढुवानी गर्न सानो गाडी किन्न बैंकमा ५ लाखको ऋण मागे, बैंकले उनको क्युआर स्टेटमेन्ट हेरेर बिना धितो ३ दिनमै ऋण स्वीकृत गरिदियो।'
      },
      takeaway: {
        en: 'QR payment is more than a digital convenience; it is a financial gateway that builds creditworthiness and unlocks formal banking capital for small businesses.',
        np: 'क्युआर भुक्तानी केवल सजिलो माध्यम मात्र होइन; यसले तपाईंको डिजिटल वित्तीय इतिहास निर्माण गरेर भविष्यमा बैंकबाट बिना धितो कर्जा पाउने बाटो खोलिदिन्छ।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Instant 24/7 account-to-account settlement within seconds with zero physical cash handling',
        'Completely free for consumers with zero hidden convenience fees or surcharges on retail purchases',
        'Eliminates counterfeit fake notes, torn rupee bills, and coin change shortages across merchants',
        'Generates an automated digital transaction footprint enabling collateral-free bank loans for MSMEs'
      ],
      np: [
        'कुनै कागजी नोट नछोई २४ सै घण्टा २ सेकेन्डमै खाताबाट खातामा सिधै रकम भुक्तानी हुने',
        'पसलमा किनमेल गर्दा ग्राहकका लागि पूर्ण रूपमा निःशुल्क, कुनै अतिरिक्त शुल्क नलाग्ने',
        'नक्कली नोट पर्ने, च्यातिएका नोटको झमेला र खुद्रा पैसा नहुने समस्या सदाका लागि अन्त्य',
        'डिजिटल कारोबारको आधिकारिक इतिहास बन्ने भएकाले साना व्यवसायीलाई बिना धितो ऋण पाउन सजिलो'
      ]
    },
    limitations: {
      en: [
        'Requires stable smartphone hardware, camera functionality, and active mobile data/Wi-Fi access',
        'Vulnerable to rural telecom network outages or occasional interbank payment switch downtime',
        'Older non-tech-savvy citizens may struggle with digital literacy and mobile PIN security',
        'Daily transaction limits enforced by NRB cap large single-day high-value payments'
      ],
      np: [
        'स्मार्टफोन, राम्रो क्यामेरा र इन्टरनेट वा मोबाइल डाटा अनिवार्य चाहिने',
        'गाउँघरमा इन्टरनेट नहुँदा वा कहिलेकाहीँ बैंकको सर्भर डाउन हुँदा भुक्तानी रोकिन सक्ने समस्या',
        'प्रविधि नबुझेका पाका नागरिकहरूलाई मोबाइल पिन र डिजिटल सुरक्षामा समस्या हुन सक्ने',
        'नेपाल राष्ट्र बैंकले तोकेको दैनिक कारोबारको सीमा (Limit) का कारण ठूला रकम एकैपटक तिर्न नसकिने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Customers have to pay extra transaction fees or taxes every time they scan a QR code at a store.',
          np: 'पसलमा क्युआर कोड स्क्यान गरेर पैसा तिर्दा हरेक पटक ग्राहकको अतिरिक्त शुल्क वा कर काटिन्छ।'
        },
        reality: {
          en: 'NRB regulations strictly mandate that retail merchant QR payments are 100% free for consumers. If your grocery bill is NPR 350, exactly NPR 350 is debited from your bank account-not a single paisa more.',
          np: 'नेपाल राष्ट्र बैंकको कडा नियम अनुसार खुद्रा पसलमा क्युआरबाट सामान किन्दा ग्राहकलाई कुनै शुल्क लाग्दैन। यदि सामानको बिल रु. ३५० हो भने तपाईंको खाताबाट ठ्याक्कै रु. ३५० मात्र काटिन्छ-एक पैसा पनि बढी लाग्दैन।'
        }
      },
      {
        myth: {
          en: 'Scanning a QR code gives the merchant access to withdraw money from your bank account anytime.',
          np: 'पसलेको क्युआर स्क्यान गर्नासाथ पसलेले तपाईंको बैंक खाताको पैसा जहिले पनि चोर्न सक्छ।'
        },
        reality: {
          en: 'QR payments use a secure "Push" architecture. Scanning merely reads the merchant\'s destination account number; money can NEVER leave your account without you explicitly entering your private confidential 4-digit MPIN or biometric fingerprint.',
          np: 'क्युआर भुक्तानी पूर्ण सुरक्षित प्रणालीमा चल्छ। स्क्यान गर्दा केवल व्यापारीको खाता नम्बर मात्र देखिने हो; तपाईं आफैंले आफ्नो गोप्य ४ अंकको पिन (MPIN) वा फिंगरप्रिन्ट नलगाएसम्म तपाईंको खाताबाट एक रुपैयाँ पनि बाहिर जाँदैन।'
        }
      }
    ],
    comparison: {
      title: { en: 'Static QR vs Dynamic QR', np: 'स्ट्याटिक क्युआर (Static) र डायनामिक क्युआर (Dynamic) बीचको तुलना' },
      subtitle: { en: 'Fixed printed standees vs bill-specific generated digital screens', np: 'पसलमा टाँसिने स्थायी बोर्ड र काउन्टरमा बिल अनुसार निस्कने डिजिटल क्युआर' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Static QR (Printed Standee)', np: 'स्ट्याटिक क्युआर (Static QR)' },
      colB: { en: 'Dynamic QR (POS / Screen)', np: 'डायनामिक क्युआर (Dynamic QR)' },
      rows: [
        {
          feature: { en: 'Display Format', np: 'प्रदर्शनको माध्यम' },
          valA: { en: 'Physical printed acrylic standee or sticker placed on counter', np: 'पसलको काउन्टरमा राखिएको प्लास्टिकको बोर्ड वा भित्तामा टाँसिएको स्टिकर' },
          valB: { en: 'Digitally generated on a computer screen, billing software, or POS terminal', np: 'कम्प्युटर, बिलिङ मेसिन वा पिओएस (POS) स्क्रिनमा हरेक ग्राहकका लागि छुट्टै देखिने' }
        },
        {
          feature: { en: 'Amount Entry', np: 'रकम कसले हाल्ने' },
          valA: { en: 'Customer manually types the payable amount into their mobile app', np: 'ग्राहक आफैंले आफ्नो मोबाइलमा हेरेर तिर्नुपर्ने रकम टाइप गर्नुपर्ने' },
          valB: { en: 'Pre-filled automatically by the billing system; customer cannot mistype', np: 'बिलिङ प्रणालीबाटै ठ्याक्कै रकम भरिएर आउने; ग्राहकले रकम टाइप गर्नै नपर्ने' }
        },
        {
          feature: { en: 'Best Suited For', np: 'कसका लागि उपयुक्त' },
          valA: { en: 'Small retail stores, vegetable vendors, tea stalls, and local transport', np: 'साना किराना पसल, चिया पसल, तरकारी व्यापारी र सार्वजनिक यातायात' },
          valB: { en: 'Supermarkets (Bhatbhateni), high-end restaurants, and corporate hospitals', np: 'भाटभटेनी जस्ता ठूला सुपरमार्केट, सिनेमा हल र ठूला अस्पतालका बिलिङ काउन्टर' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'kyc', name: 'KYC', type: 'glossary' },
      { slug: 'budget', name: 'Budget', type: 'glossary' },
      { slug: 'pan', name: 'PAN', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Digital Finance in Nepal: Wallets, QR & Interbank Payments', categorySlug: 'digital-payments', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'The Complete Guide to Digital Payments and QR Security in Nepal', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: '50/30/20 Budget Calculator', slug: 'budget', desc: 'Track your daily digital wallet and QR outflows within your monthly budget.' }
    ],
    faqs: [
      {
        q: { en: 'What should I do if money was deducted from my account but the merchant did not receive it?', np: 'मेरो खाताबाट पैसा काटियो तर पसलेको खातामा पुगेन भने के गर्ने?' },
        a: {
          en: 'Take a screenshot of the transaction ID / Trace ID immediately. In 99% of cases, network timeouts automatically reverse the deducted funds back into your bank account within 1 to 24 hours. You can also file an instant dispute via your mobile banking app or call your bank\'s 24/7 card/digital support helpline.',
          np: 'तुरुन्तै आफ्नो मोबाइलमा देखिएको कारोबार नम्बर (Transaction ID / Reference ID) को स्क्रिनसट लिनुहोस्। धेरैजसो अवस्थामा बैंकको सर्भर समस्याले अड्किएको पैसा २४ घण्टाभित्र आफैं फिर्ता हुन्छ। समस्या समाधान नभए आफ्नो बैंकको टोल-फ्री नम्बर वा सहायता कक्षमा फोन गरी ट्रान्जिक्सन आइडी टिपाउन सकिन्छ।'
        }
      },
      {
        q: { en: 'What are the daily transaction limits for QR payments in Nepal?', np: 'नेपालमा क्युआर भुक्तानी गर्दा दैनिक कति रुपैयाँसम्म तिर्न मिल्छ?' },
        a: {
          en: 'Under NRB circulars, standard mobile banking retail merchant QR payments are typically capped at NPR 1,00,000 to NPR 3,00,000 per day depending on the issuing bank\'s risk limits. For larger amounts, interbank ConnectIPS account transfers should be used.',
          np: 'नेपाल राष्ट्र बैंकको नियम अनुसार मोबाइल बैंकिङबाट पसलमा क्युआर गर्दा साधारणतया दैनिक १ लाखदेखि ३ लाख रुपैयाँसम्म तिर्न मिल्छ। त्योभन्दा ठूलो रकम तिर्नका लागि कनेक्टआईपीएस (ConnectIPS) प्रयोग गर्नुपर्छ।'
        }
      },
      {
        q: { en: 'How do Indian tourists make QR payments in Nepal via UPI?', np: 'भारतीय पर्यटकहरूले नेपालमा UPI मार्फत कसरी क्युआर भुक्तानी गर्छन्?' },
        a: {
          en: 'Indian visitors open their UPI-enabled apps (PhonePe, BHIM, Google Pay), scan any Fonepay merchant QR displaying the NepalPay/UPI logo, confirm the INR equivalent amount calculated at the official 1.60 peg rate, and authorize payment from their Indian bank account.',
          np: 'भारतीय पर्यटकले आफ्नो मोबाइलमा भएको UPI एप (PhonePe, BHIM आदि) खोलेर नेपालका फोनपे मर्चेन्ट क्युआर स्क्यान गर्छन्। १ भारु = १.६० नेरु को आधिकारिक दरमा हिसाब भई उनीहरूको भारतीय बैंक खाताबाट पैसा काटिन्छ र नेपाली पसलेको खातामा तुरुन्तै नेपाली रुपैयाँ जम्मा हुन्छ।'
        }
      },
      {
        q: { en: 'Can a small vendor get a QR code in Nepal without having a registered private limited company?', np: 'के प्राइभेट लिमिटेड कम्पनी नभएको सानो व्यापारीले पनि पसलमा क्युआर राख्न पाउँछ?' },
        a: {
          en: 'Yes. Under NRB micro-merchant guidelines, individuals operating small businesses (vegetable vendors, small tea shops, artisans) can obtain an official merchant QR standee simply by providing their verified Personal PAN, citizenship, and an individual savings bank account.',
          np: 'मज्जाले पाउँछ। नेपाल राष्ट्र बैंकको साना व्यवसायी नीति अनुसार कम्पनी दर्ता नभएका खुद्रा पसले वा तरकारी व्यापारीले पनि आफ्नो व्यक्तिगत प्यान (Personal PAN), नागरिकता र बैंक खाता पेश गरेर सजिलै आधिकारिक क्युआर स्ट्यान्ड र अडियो बक्स लिन सक्छन्।'
        }
      }
    ],
    summary: {
      en: [
        'QR payments provide instant, contactless, account-to-account retail fund settlement within 2-3 seconds.',
        'Led in Nepal by Fonepay and NepalPay under Nepal Rastra Bank regulatory oversight.',
        '100% free for consumers, eliminating fake currency notes and coin change shortages.',
        'Builds a transparent digital footprint enabling small micro-merchants to access collateral-free bank loans.'
      ],
      np: [
        'क्युआर भुक्तानीले कागजी नोट बिना २-३ सेकेन्डमै सिधै खाताबाट खातामा रकम स्थानान्तरण गर्ने सुविधा दिन्छ।',
        'नेपालमा यो प्रणाली नेपाल राष्ट्र बैंकको नियमनमा फोनपे (Fonepay) र नेपालपे (NepalPay) द्वारा सञ्चालित छ।',
        'ग्राहकका लागि पूर्ण निःशुल्क, जसले खुद्रा पैसाको अभाव र नक्कली नोटको जोखिमलाई अन्त्य गरिदिएको छ।',
        'पारदर्शी डिजिटल इतिहास बनाउने हुनाले साना व्यवसायीहरूलाई भविष्यमा बिना धितो बैंक ऋण पाउन बाटो खुल्छ।'
      ]
    },
    whereSeen: [
      { title: 'Digital Finance in Nepal: Wallets, QR & Interbank Payments', type: 'Lesson', url: '/learn/digital-payments/what-is-investing' },
      { title: '50/30/20 Budget Calculator', type: 'Calculator', url: '/calculators/budget' }
    ],
    meta: {
      title: 'What is QR Payment in Nepal? Fonepay, NepalPay & UPI Guide | risePaisa',
      description: 'Everything you need to know about QR payments in Nepal. Learn how Fonepay and NepalPay operate, cross-border UPI payments, and digital safety tips.'
    }
  }
];

// ==============================================
// risePaisa - Investing Glossary Module
// Production-grade financial encyclopedia entries for Nepal
// ==============================================

export const INVESTING_GLOSSARY = [
  // 1. ASSET
  {
    slug: 'asset',
    term: 'Asset',
    termNp: 'सम्पत्ति (Asset)',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    letter: 'A',
    abbreviation: null,
    synonyms: ['Financial Asset', 'Productive Resource', 'सम्पत्ति', 'पुँजी'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'An asset is any tangible or intangible economic resource owned by an individual or institution that produces positive cash flow or appreciates in value over time.',
      np: 'सम्पत्ति (Asset) भनेको आर्थिक मूल्य भएको त्यस्तो भौतिक वा वित्तीय साधन हो, जसले स्वामित्वकर्तालाई नियमित नगद प्रवाह दिन्छ वा समयसँगै मूल्य अभिवृद्धि गराउँछ।'
    },
    detailedExplanation: {
      en: 'In personal finance, an asset is distinguished strictly by its economic productivity: it puts money into your pocket without demanding your continuous physical labor. Productive assets generate yields such as dividends, interest, or rental revenue, and may also experience capital appreciation as the underlying business or asset grows. Conversely, possessions that consume recurring cash for maintenance, depreciation, and insurance without creating income are classified as liabilities, even if they hold nominal resale value.',
      np: 'व्यक्तिगत वित्तमा सम्पत्तिको वास्तविक परिभाषा यसको उत्पादकत्वमा निर्भर हुन्छ: यसले तपाईंको प्रत्यक्ष शारीरिक श्रम बिना नै खल्तीमा थप नगद भित्र्याउँछ। उत्पादक सम्पत्तिले लाभांश, ब्याज वा भाडाजस्ता नियमित प्रतिफल दिन्छन् र बजार मूल्य समेत बढाउँछन्। यसको विपरीत, नियमित मर्मत, कर र मूल्य ह्रासका कारण खर्च मात्र बढाउने वस्तुहरू (जस्तै व्यक्तिगत सवारी वा विलासी उपकरण) वित्तीय दृष्टिले सम्पत्ति नभई दायित्व (Liabilities) हुन्।'
    },
    whyItMatters: {
      en: 'Wealth creation does not stem from high earned income alone; it depends on converting active income from a job or business into income-generating assets. Assets work continuously regardless of your working hours, acting as the foundation for financial independence, retirement security, and protection against inflation.',
      np: 'सम्पत्ति निर्माण केवल ठूलो तलब कमाउनुमा सीमित हुँदैन; जागिर वा व्यापारबाट प्राप्त सक्रिय आम्दानीलाई नियमित आम्दानी दिने सम्पत्तिमा रूपान्तरण गर्नु नै वित्तीय स्वतन्त्रताको मुख्य आधार हो। सम्पत्तिले तपाईं सुतिरहेको बेला पनि प्रतिफल दिन्छ, जसले मुद्रास्फीतिबाट बचतको रक्षा गर्दै सुरक्षित भविष्य सुनिश्चित गर्दछ।'
    },
    howItWorks: {
      summary: {
        en: 'Assets accumulate wealth across a recurring multi-stage operational cycle:',
        np: 'सम्पत्तिले निम्न चार चरणको चक्रीय प्रक्रियामार्फत पुँजी वृद्धि गर्दछ:'
      },
      steps: [
        {
          title: { en: '1. Capital Allocation', np: '१. पुँजी परिचालन' },
          desc: { en: 'You deploy saved surplus cash to purchase a productive holding (e.g., bank fixed deposit, NEPSE stocks, or commercial land).', np: 'आफ्नो बचत रकमलाई उत्पादक साधन (जस्तै मुद्दती निक्षेप, नेप्से सेयर वा सामूहिक लगानी कोष) खरिद गर्न प्रयोग गरिन्छ।' }
        },
        {
          title: { en: '2. Yield Generation', np: '२. प्रतिफल प्राप्ति' },
          desc: { en: 'The underlying business or asset delivers periodic cash flows in the form of quarterly dividends, semi-annual interest coupons, or monthly rent.', np: 'सम्बन्धित संस्था वा साधनले नियमित रूपमा नगद लाभांश, ब्याज वा भाडाको रूपमा प्रतिफल प्रदान गर्दछ।' }
        },
        {
          title: { en: '3. Capital Compounding', np: '३. चक्रवर्ती वृद्धि' },
          desc: { en: 'Reinvesting received cash distributions purchases additional asset units, triggering exponential compound interest.', np: 'प्राप्त लाभांश वा ब्याजलाई पुनः नयाँ इकाइहरू खरिद गर्न प्रयोग गर्दा चक्रवर्ती ब्याजको लाभ सुरु हुन्छ।' }
        },
        {
          title: { en: '4. Capital Appreciation', np: '४. मूल्य अभिवृद्धि' },
          desc: { en: 'Over multi-year horizons, productive assets expand their intrinsic net worth, creating substantial unrealized capital gains.', np: 'दीर्घकालीन समयमा व्यवसायको वृद्धि र मुद्रास्फीतिको समायोजनसँगै सम्पत्तिको बजार मूल्यमा उल्लेखनीय वृद्धि हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Personal balance sheets and net worth calculation',
        'Commercial bank loan underwriting for collateral valuation',
        'Retirement planning through EPF, CIT, and Social Security Fund (SSF)',
        'Securities portfolio management on NEPSE'
      ],
      np: [
        'व्यक्तिगत कुल सम्पत्ति (Net Worth) गणना र वित्तीय योजनामा',
        'बैंक तथा वित्तीय संस्थाबाट कर्जा लिँदा धितो मूल्याङ्कन प्रयोजनमा',
        'कर्मचारी सञ्चय कोष, नागरिक लगानी कोष र सामाजिक सुरक्षा कोषमार्फत अवकाश योजनामा',
        'नेप्से दोस्रो बजारमा सेयर तथा डिबेन्चर पोर्टफोलियो व्यवस्थापनमा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Shift from Illiquid Real Estate & Gold to Liquid Financial Assets in Nepal',
        np: 'नेपालमा घरजग्गा र सुनबाट तरल वित्तीय सम्पत्तितर्फको रूपान्तरण'
      },
      body: {
        en: 'Traditionally, Nepali households locked over 85% of their accumulated wealth into physical land, real estate plots, and 24-carat gold jewelry. While culturally revered, physical land carries severe liquidity friction: converting a land parcel into cash during medical or economic emergencies often takes 6 to 18 months, accompanied by steep capital gains tax (5%-7.5%) and high municipal transfer duties. Over the last decade, regulatory modernization by SEBON and NRB has enabled over 6.5 million Nepalis to open Demat accounts, shifting wealth into fractional, dividend-yielding equities, open-ended mutual funds, and corporate debentures that can be liquidated within T+2 settlement days.',
        np: 'परम्परागत रूपमा नेपाली परिवारहरूले आफ्नो ८५% भन्दा बढी बचत भौतिक जग्गा, घडेरी र सुनका गहनामा थन्क्याउने गरेका थिए। यस्ता सम्पत्ति सुरक्षित देखिए तापनि चरम तरलता अभाव (Illiquidity) हुन्छ; आपतकालीन समयमा जग्गा बेचेर नगद बनाउन महिनौं लाग्न सक्छ र ७.५% सम्म पुँजीगत लाभकर तथा उच्च मालपोत दस्तुर तिर्नुपर्छ। धितोपत्र बोर्ड (SEBON) र नेपाल राष्ट्र बैंकको सहजीकरणमा हाल ६५ लाखभन्दा बढी डिम्याट खाता खुलिसकेका छन्, जसले नयाँ पुस्तालाई सजिलै T+2 दिनमै नगदमा परिणत गर्न सकिने तरल वित्तीय सम्पत्ति (सेयर, म्युचुअल फण्ड, डिबेन्चर) मा लगानी गर्न सक्षम बनाएको छ।'
      },
      keyPoints: {
        en: [
          'Liquid financial assets settle within T+2 clearing days on NEPSE via CDSC.',
          'Physical real estate suffers high illiquidity and transfer friction in Nepal.',
          'Commercial bank fixed deposits are insured up to NPR 500,000 under the Deposit and Credit Guarantee Fund (DCGF).',
          'NRB guidelines require balanced asset allocation across cash, fixed income, and equities.'
        ],
        np: [
          'नेप्सेमा सूचीकृत वित्तीय सम्पत्ति सीडीएससीमार्फत T+2 कार्यदिनभित्र नगदमा फर्स्यौट हुन्छन्।',
          'भौतिक घरजग्गामा किनबेच गर्दा उच्च मालपोत शुल्क, बिचौलिया कमिसन र तरलताको अभाव हुन्छ।',
          'वाणिज्य बैंकका मुद्दती निक्षेपहरू निक्षेप तथा कर्जा सुरक्षण कोषमार्फत रु. ५ लाखसम्म पूर्ण सुरक्षित हुन्छन्।',
          'नेपाल राष्ट्र बैंकको वित्तीय सिद्धान्त अनुसार सम्पत्तिलाई नगद, मुद्दती र सेयरमा सन्तुलित राख्नुपर्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Pradeep and Sushant both earn NPR 70,000 monthly in Kathmandu. Pradeep takes a personal loan to purchase an NPR 950,000 sport motorcycle, incurring NPR 11,000 monthly fuel, insurance, and maintenance costs while the bike loses 20% value annually. Sushant allocates NPR 20,000 monthly into a blend of blue-chip commercial bank shares and an open-ended equity mutual fund. After 5 years, Pradeep owns a depreciated bike worth NPR 350,000 with zero cash inflows. Sushant owns an asset portfolio valued at over NPR 1,750,000 that yields NPR 90,000 in annual dividend distributions.',
        np: 'काठमाडौंमा कार्यरत प्रदीप र सुशान्त दुवैको मासिक तलब रु. ७०,००० छ। प्रदीपले ऋण काढेर रु. ९,५०,००० को मोटरसाइकल किन्छन्, जसको किस्ता, पेट्रोल र मर्मतमा महिनाको रु. ११,००० खर्च हुन्छ र बाइकको मूल्य बर्सेनि घट्छ। अर्कोतर्फ सुशान्तले मासिक रु. २०,००० राम्रा वाणिज्य बैंकको सेयर र खुलामुखी म्युचुअल फण्डको एसआईपीमा हाल्छन्। ५ वर्षपछि प्रदीपसँग रु. ३,५०,००० मा झरेको पुरानो बाइक मात्र रहन्छ, जबकि सुशान्तसँग रु. १७,५०,००० भन्दा बढीको सम्पत्ति हुन्छ जसले बर्सेनि रु. ९०,००० नगद लाभांश दिन्छ।'
      },
      takeaway: {
        en: 'Prioritizing cash-generating assets over status-driven consumer liabilities is the single most decisive factor in building long-term financial independence in Nepal.',
        np: 'देखावटी विलासिताका दायित्वभन्दा नियमित आम्दानी दिने उत्पादक सम्पत्तिलाई प्राथमिकता दिनु नै नेपालमा दीर्घकालीन वित्तीय सुरक्षा निर्माण गर्ने मुख्य उपाय हो।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Generates recurring passive cash flow (dividends, interest, rental yields)',
        'Protects purchasing power against persistent domestic inflation (6%-8%)',
        'Provides financial collateral for securing business and mortgage credit',
        'Builds generational wealth capable of compounding exponentially'
      ],
      np: [
        'नियमित निष्क्रिय आम्दानी (लाभांश, मुद्दती ब्याज, घरभाडा) सिर्जना गर्दछ',
        'नेपालको ६% देखि ८% सम्मको मूल्यवृद्धिलाई जितेर क्रयशक्ति सुरक्षित राख्छ',
        'व्यवसाय वा घर निर्माणका लागि बैंकबाट सहुलियत दरमा धितो कर्जा लिन मद्दत गर्छ',
        'चक्रवर्ती वृद्धिमार्फत पुस्तौंपुस्ताका लागि दिगो पुँजी निर्माण गर्दछ'
      ]
    },
    limitations: {
      en: [
        'Equity and real estate assets carry market volatility and potential capital loss',
        'Physical assets (land, buildings) lack immediate liquidity during emergencies',
        'Requires analytical competence to evaluate balance sheets and avoid speculative traps',
        'Profits are subject to capital gains tax (CGT) and withholding taxes'
      ],
      np: [
        'सेयर र घरजग्गा बजारमा आउने उतारचढावले गर्दा अल्पकालीन पुँजीगत नोक्सानी हुनसक्छ',
        'भौतिक सम्पत्ति (जग्गा, घर) आपतकालीन अवस्थामा तत्काल नगदमा साट्न सकिँदैन',
        'कमसल सम्पत्ति छनोटबाट बच्न वित्तीय विवरण अध्ययन गर्ने ज्ञान आवश्यक पर्छ',
        'सम्पत्ति बिक्रीबाट हुने नाफामा ५% देखि ७.५% सम्म पुँजीगत लाभकर (CGT) लाग्दछ'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'A private residential car or high-end smartphone is an asset because you can sell it for cash.',
          np: 'आफूले चढ्ने गाडी वा महँगो मोबाइल सम्पत्ति हुन् किनकि पछि बेच्दा केही नगद फिर्ता आउँछ।'
        },
        reality: {
          en: 'A vehicle or smartphone depreciates rapidly and consumes continuous operating costs without producing revenue. In finance, it is a depreciating consumer durable, not an asset.',
          np: 'व्यक्तिगत गाडी वा ग्याजेटले समयसँगै मूल्य गुमाउँछन् र पेट्रोल तथा मर्मतमा थप खर्च बढाउँछन्। वित्तीय सिद्धान्त अनुसार यी सम्पत्ति नभई मूल्य ह्रास हुने उपभोग्य वस्तु हुन्।'
        }
      },
      {
        myth: {
          en: 'Only wealthy business owners with millions of rupees can purchase financial assets.',
          np: 'लाखौं रुपैयाँ हुने धनी व्यापारीले मात्र वित्तीय सम्पत्ति जोड्न सक्छन्।'
        },
        reality: {
          en: 'In Nepal, any citizen can begin acquiring productive assets with as little as NPR 1,000 through primary IPO allotments or monthly mutual fund SIPs.',
          np: 'नेपालमा प्राथमिक बजारको आइपिओमा रु. १,००० वा खुलामुखी म्युचुअल फण्डको एसआईपीमा रु. १,००० बाटै जोसुकैले पनि सम्पत्ति जोड्न सुरु गर्न सक्छन्।'
        }
      }
    ],
    comparison: {
      title: { en: 'Productive Assets vs Consumer Liabilities', np: 'उत्पादक सम्पत्ति र उपभोग्य दायित्व बीचको तुलना' },
      subtitle: { en: 'Understanding the operational differences between cash creators and cash drains', np: 'नगद सिर्जना गर्ने साधन र खर्च बढाउने वस्तु बीचको मुख्य भिन्नता' },
      featureHeader: { en: 'Feature', np: 'विशेषता' },
      colA: { en: 'Productive Asset (e.g. Dividend Stocks)', np: 'उत्पादक सम्पत्ति (जस्तै लाभांश दिने सेयर)' },
      colB: { en: 'Consumer Liability (e.g. Personal Car)', np: 'उपभोग्य दायित्व (जस्तै व्यक्तिगत कार)' },
      rows: [
        {
          feature: { en: 'Cash Flow Direction', np: 'नगद प्रवाहको दिशा' },
          valA: { en: 'Puts money into your bank account periodically', np: 'नियमित रूपमा बैंक खातामा रकम थप्दछ' },
          valB: { en: 'Takes recurring money out for fuel, maintenance & tax', np: 'इन्धन, कर र मर्मतका लागि खल्तीबाट रकम निकाल्छ' }
        },
        {
          feature: { en: 'Value Over Time', np: 'समयसँगै मूल्यको अवस्था' },
          valA: { en: 'Compounds and appreciates with inflation', np: 'मुद्रास्फीतिसँगै मूल्य वृद्धि र चक्रवर्ती विकास हुन्छ' },
          valB: { en: 'Depreciates by 15%-25% annually', np: 'बर्सेनि १५% देखि २५% सम्म मूल्य घट्दै जान्छ' }
        },
        {
          feature: { en: 'Emergency Liquidity', np: 'तरलता (नगद बनाउन सकिने क्षमता)' },
          valA: { en: 'Sold on NEPSE within minutes; settles in T+2', np: 'नेप्सेमा मिनेटभरमै बेचेर T+2 दिनमा नगद प्राप्त' },
          valB: { en: 'Requires private buyers; heavy bargaining loss', np: 'ग्राहक खोज्नुपर्ने र ठूलो मूल्य घटाएर मात्र बिक्री हुने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'portfolio', name: 'Portfolio', type: 'glossary' },
      { slug: 'dividend', name: 'Dividend', type: 'glossary' },
      { slug: 'cagr', name: 'CAGR', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'What is Investing? Growing Wealth in Nepal', categorySlug: 'investing', slug: 'what-is-investing' },
      { title: 'Compound Interest: The 8th Wonder of the World', categorySlug: 'investing', slug: 'compound-interest' }
    ],
    relatedGuides: [
      { title: 'Complete Guide to Personal Finance & Budgeting', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Net Worth Calculator', slug: 'net-worth', desc: 'Calculate your total financial assets minus liabilities in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'Is my self-occupied family home considered an asset in Nepal?', np: 'के आफू बसोबास गर्ने आफ्नै घरलाई वित्तीय सम्पत्ति मान्न सकिन्छ?' },
        a: {
          en: 'While your home provides emotional security and the land beneath it may appreciate over decades, it does not produce recurring cash flow and requires property taxes, utility bills, and maintenance. In strict cash-flow analysis, an owner-occupied house acts as a store of value rather than a productive cash-generating asset.',
          np: 'आफू बस्ने घरले पारिवारिक सुरक्षा र भावनात्मक सन्तुष्टि दिए तापनि यसले कुनै नियमित नगद आम्दानी दिँदैन, बरु मर्मत र मालपोत खर्च बढाउँछ। त्यसैले वित्तीय विश्लेषणमा यसलाई नगद दिने उत्पादक सम्पत्ति नभई पुँजी सुरक्षित राख्ने साधन (Store of Value) मात्र मानिन्छ।'
        }
      },
      {
        q: { en: 'What is the most liquid asset class available to Nepali retail investors?', np: 'नेपाली साना लगानीकर्ताका लागि सबैभन्दा तरल सम्पत्ति कुन हो?' },
        a: {
          en: 'Outside of cash in a high-yield \'A\' class commercial bank savings account, listed NEPSE equities and open-ended mutual fund units are the most liquid. Equities can be sold on trading days via TMS and settled directly to your bank account within T+2 days.',
          np: 'क वर्गका वाणिज्य बैंकको बचत खातामा रहेको नगदपछि नेप्सेमा सूचीकृत क वर्गका सेयर र खुलामुखी म्युचुअल फण्ड सबैभन्दा तरल सम्पत्ति हुन्। यी सेयरलाई दोस्रो बजारमा तुरुन्त बिक्री गरी T+2 दिनभित्र बैंक खातामा रकम प्राप्त गर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'How does inflation affect cash compared to productive assets in Nepal?', np: 'नेपालमा नगद बचत र उत्पादक सम्पत्तिमा मुद्रास्फीतिको असर कस्तो हुन्छ?' },
        a: {
          en: 'Cash left idle in a zero-interest or low-yield account loses approximately 5% to 7% of its purchasing power annually due to inflation. In contrast, productive assets like dividend equities and commercial real estate adjust their cash distributions and values upward, preserving real purchasing power.',
          np: 'बैंकमा त्यसै थन्किएको नगदले नेपालको ५% देखि ७% को मुद्रास्फीतिका कारण हरेक वर्ष आफ्नो क्रयशक्ति गुमाउँछ। तर सेयर र उत्पादक सम्पत्तिले आफ्नो नाफा र लाभांश बढाउँदै लैजाने भएकाले मुद्रास्फीतिको असरबाट पुँजीलाई जोगाउँछन्।'
        }
      },
      {
        q: { en: 'What is the difference between tangible and intangible assets?', np: 'भौतिक (Tangible) र वित्तीय/अमूर्त (Intangible) सम्पत्ति बीच के फरक छ?' },
        a: {
          en: 'Tangible assets have physical form, such as commercial property, machinery, and physical gold. Intangible financial assets represent contractual claims on future cash flows, such as corporate shares, government treasury bonds, and mutual fund units held electronically in your Demat account.',
          np: 'भौतिक सम्पत्ति भनेको छुन सकिने ठोस वस्तुहरू हुन्, जस्तै जग्गा, भवन र सुन। वित्तीय वा अभौतिक सम्पत्ति भनेको कानुनी अधिकार र भविष्यको नगद प्रवाहको दाबी हो, जस्तै डिम्याट खातामा रहने सेयर, ऋणपत्र र सरकारी ट्रेजरी बिल।'
        }
      }
    ],
    summary: {
      en: [
        'An asset produces positive cash flow or appreciates over time without requiring active physical labor.',
        'Assets generate wealth through capital allocation, dividend/interest yield, compounding, and capital gains.',
        'Nepali investors benefit by diversifying out of illiquid land into liquid NEPSE equities and mutual funds.',
        'Rich households focus their monthly cash flow on accumulating assets, whereas others accumulate depreciating liabilities.'
      ],
      np: [
        'सम्पत्तिले प्रत्यक्ष शारीरिक श्रम बिना नै नियमित नगद आम्दानी दिन्छ वा समयसँगै मूल्य अभिवृद्धि गराउँछ।',
        'सम्पत्तिले लाभांश, ब्याज, चक्रवर्ती नाफा र पुँजीगत लाभमार्फत दीर्घकालीन धन सिर्जना गर्दछ।',
        'तरलताको जोखिम कम गर्न नेपाली लगानीकर्ताले जग्गामा मात्र सीमित नभई सेयर र म्युचुअल फण्डमा विविधीकरण गर्नुपर्छ।',
        'सम्पन्न व्यक्तिहरूले आफ्नो आम्दानीबाट उत्पादक सम्पत्ति थप्दै जान्छन्, जबकि धेरैले खर्च बढाउने दायित्व जोड्छन्।'
      ]
    },
    whereSeen: [
      { title: 'What is Investing?', type: 'Lesson', url: '/learn/investing/what-is-investing' },
      { title: 'Net Worth Calculator', type: 'Calculator', url: '/calculators/net-worth' }
    ],
    meta: {
      title: 'What is an Asset? Productive Assets vs Liabilities in Nepal | risePaisa',
      description: 'Master the concept of assets in personal finance. Discover how liquid financial assets compare to real estate, land, and liabilities in Nepal.'
    }
  },

  // 2. PORTFOLIO
  {
    slug: 'portfolio',
    term: 'Portfolio',
    termNp: 'पोर्टफोलियो / लगानी विविधीकरण (Portfolio)',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    letter: 'P',
    abbreviation: null,
    synonyms: ['Investment Basket', 'Asset Allocation', 'लगानीको थैली', 'विविधीकरण'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A portfolio is a curated collection of diverse financial investments-such as stocks, bonds, mutual funds, cash, and gold-managed together to achieve target returns while minimizing risk.',
      np: 'पोर्टफोलियो (Portfolio) भनेको जोखिम न्यूनीकरण गर्दै अपेक्षित नाफा कमाउनका लागि एकसाथ व्यवस्थापन गरिएको सेयर, ऋणपत्र, म्युचुअल फण्ड, मुद्दती निक्षेप र सुनजस्ता विविध वित्तीय सम्पत्तिहरूको व्यवस्थित संकलन हो।'
    },
    detailedExplanation: {
      en: 'In investment science, a portfolio embodies the foundational rule: "Do not put all your eggs in one basket." Rather than betting your entire capital on a single company, sector, or asset class, an investor constructs a balanced mix. If one asset underperforms (for example, hydropower stocks fall due to a dry season), another asset class (such as commercial bank fixed deposits yielding steady interest) cushions the downside, stabilizing the overall financial net worth.',
      np: 'लगानी व्यवस्थापनमा पोर्टफोलियोको मुख्य सिद्धान्त भनेकै "आफ्ना सबै अण्डाहरू एउटै टोकरीमा नराख्नु" हो। आफ्नो सबै पुँजी एउटै कम्पनी वा एउटै क्षेत्रमा खन्याउनुको सट्टा फरक-फरक जोखिम र प्रतिफल भएका क्षेत्रहरूमा बाँडेर लगानी गरिन्छ। यदि कुनै एउटा क्षेत्र (जस्तै सुख्खायाममा जलविद्युत सेयर) मा मन्दी आए पनि अर्को स्थिर क्षेत्र (जस्तै मुद्दती निक्षेप वा सरकारी ऋणपत्र) को नियमित ब्याजले समग्र पुँजीलाई सुरक्षित राख्छ।'
    },
    whyItMatters: {
      en: 'Concentrated investments carry catastrophic risk: if a single company faces bankruptcy or regulatory sanctions, an investor can lose 100% of their principal. A professionally diversified portfolio eliminates company-specific (unsystematic) risk, allowing your net worth to grow predictably over decades.',
      np: 'एउटै कम्पनीमा सबै रकम खन्याउँदा कम्पनी डुबेमा वा समस्यामा परेमा सम्पूर्ण पुँजी सखाप हुने जोखिम रहन्छ। तर व्यवस्थित पोर्टफोलियो निर्माण गर्दा व्यक्तिगत कम्पनीको जोखिम हट्छ र बजारको उतारचढावका बीच पनि तपाईंको सम्पत्ति दीर्घकालीन रूपमा सुरक्षित गतिमा बढिरहन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Constructing and managing an effective portfolio follows a disciplined 4-step framework:',
        np: 'प्रभावकारी पोर्टफोलियो निर्माण र व्यवस्थापन ४ वटा व्यवस्थित चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Risk Profiling', np: '१. जोखिम क्षमता मूल्याङ्कन' },
          desc: { en: 'Determine your investment time horizon, monthly income stability, and emotional tolerance for market swings.', np: 'आफ्नो लगानीको समयावधि, आम्दानीको स्थिरता र बजारको गिरावट सहन सक्ने क्षमताको पहिचान गरिन्छ।' }
        },
        {
          title: { en: '2. Asset Allocation', np: '२. सम्पत्ति बाँडफाँड' },
          desc: { en: 'Divide capital across broad asset classes (e.g., 60% equities, 30% fixed deposits/debentures, 10% emergency cash).', np: 'कुल पुँजीलाई सेयर, मुद्दती निक्षेप, ऋणपत्र र आपतकालीन नगद गरी विभिन्न क्षेत्रमा प्रतिशतका आधारमा छुट्याइन्छ।' }
        },
        {
          title: { en: '3. Security Selection', np: '३. गुणस्तरीय कम्पनी छनोट' },
          desc: { en: 'Select individual fundamentally strong companies or index mutual funds across non-correlated sectors (banking, hydro, insurance, manufacturing).', np: 'फरक-फरक क्षेत्र (वाणिज्य बैंक, हाइड्रोपावर, बीमा, उत्पादन) बाट वित्तीय रूपमा बलिया कम्पनीहरू छनोट गरिन्छ।' }
        },
        {
          title: { en: '4. Periodic Rebalancing', np: '४. वार्षिक सन्तुलन (Rebalancing)' },
          desc: { en: 'Review the portfolio annually. Trim asset classes that expanded beyond target weights and redeploy gains into undervalued sectors.', np: 'वर्षमा कम्तीमा एकपटक पोर्टफोलियोको समीक्षा गरी बढेको क्षेत्रबाट नाफा सुरक्षित गर्दै कमजोर तर सम्भावना भएका क्षेत्रमा पुँजी सारिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Personal stock market trading accounts on NEPSE TMS',
        'Citizen Investment Trust (CIT) and EPF pension fund management',
        'Mutual fund asset management companies (e.g., NIBL Ace, Siddhartha Capital)',
        'Commercial bank treasury and investment desks'
      ],
      np: [
        'नेप्से टिएमएस (TMS) मार्फत व्यक्तिगत सेयर कारोबार तथा लगानीमा',
        'नागरिक लगानी कोष (CIT) र कर्मचारी सञ्चय कोष (EPF) को पेन्सन कोष व्यवस्थापनमा',
        'म्युचुअल फण्ड व्यवस्थापक कम्पनीहरू (क्यापिटलहरू) द्वारा सामूहिक लगानी व्यवस्थापनमा',
        'वाणिज्य बैंकहरूको ट्रेजरी तथा संस्थागत लगानी विभागमा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Sector Concentration Trap on the Nepal Stock Exchange (NEPSE)',
        np: 'नेप्सेमा एउटै क्षेत्र (Sector) मा मात्र लगानी गर्दाको जोखिम'
      },
      body: {
        en: 'A widespread rookie mistake in Nepal is confusing high stock count with true portfolio diversification. An investor who buys shares in 10 different hydropower companies does not have a diversified portfolio-they have a 100% hydropower-concentrated portfolio exposed to rainfall patterns, PPA tariff revisions by NEA, and seasonal river discharge drops. On NEPSE, true diversification means blending sectors with distinct drivers: commercial banks (interest margins), non-life insurance (premium underwriting), microfinance (rural credit), hydropower (energy sales), and debentures (fixed 8.5%-10.5% guaranteed interest coupons).',
        np: 'नेपालको सेयर बजारमा धेरै कम्पनीको सेयर किन्दैमा पोर्टफोलियो विविधीकरण भयो भन्ने भ्रम धेरैमा पाइन्छ। १० वटा फरक-फरक हाइड्रोपावर कम्पनीको सेयर किन्दैमा त्यो विविधीकरण हुँदैन; त्यो शतप्रतिशत जलविद्युतमा केन्द्रित जोखिम हो, जहाँ सुख्खायाम वा विद्युत प्राधिकरणको पीपीए दरमा हुने परिवर्तनले सबै १० वटै कम्पनीलाई एकसाथ असर गर्छ। नेप्सेमा वास्तविक विविधीकरण हुनका लागि वाणिज्य बैंक (ब्याज आम्दानी), निर्जीवन बीमा, लघुवित्त, जलविद्युत र निश्चित ८.५% देखि १०.५% ब्याज दिने ऋणपत्र (Debentures) बीच सन्तुलन मिलाउनुपर्छ।'
      },
      keyPoints: {
        en: [
          'Buying multiple companies within the same NEPSE sector is not true diversification.',
          'Debentures and fixed deposits provide essential non-correlated downside protection.',
          'SEBON mutual funds maintain legally mandated sector diversification limits.',
          'Annual rebalancing keeps portfolio risk aligned with your true financial goals.'
        ],
        np: [
          'एउटै क्षेत्रका धेरै कम्पनी किन्नु वास्तविक विविधीकरण होइन, त्यो क्षेत्रगत जोखिम हो।',
          'ऋणपत्र र मुद्दती निक्षेपले सेयर बजार घट्दा स्थिर आम्दानी दिएर पुँजी जोगाउँछन्।',
          'धितोपत्र बोर्डको नियम अनुसार म्युचुअल फण्डहरूले कुनै एउटा क्षेत्रमा अधिक रकम खन्याउन पाउँदैनन्।',
          'वार्षिक रूपमा पोर्टफोलियो पुनरावलोकन गर्दा अनपेक्षित जोखिमबाट बच्न सकिन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Bikash invests NPR 1,000,000 exclusively in 3 speculative hydropower stocks during a bull market. Anita invests NPR 1,000,000 across a diversified portfolio: NPR 400,000 in dividend-paying commercial banks, NPR 200,000 in hydro, NPR 200,000 in bank debentures (yielding 10%), and NPR 200,000 in an open-ended equity mutual fund. When NEPSE corrects downward by 35%, Bikash suffers an NPR 450,000 drawdown and panics. Anita\'s portfolio only drops by 14%, while her debentures and bank shares generate NPR 62,000 in guaranteed cash inflows, allowing her to stay calm and invest further.',
        np: 'विकासले बजार बढेको बेला रु. १० लाख पूरै ३ वटा नयाँ हाइड्रोपावर कम्पनीमा हाल्छन्। अनिताले सोही १० लाखलाई विविधीकरण गर्छिन्: रु. ४ लाख लाभांश दिने वाणिज्य बैंकमा, रु. २ लाख हाइड्रोमा, रु. २ लाख १०% ब्याज दिने बैंक डिबेन्चरमा र रु. २ लाख खुलामुखी म्युचुअल फण्डमा। जब नेप्से ३५% ले घट्छ, विकासको पोर्टफोलियो रु. ४ लाख ५० हजारले घटेर उनी आत्तिन्छन्। तर अनिताको पोर्टफोलियो जम्मा १४% मात्र घट्छ र उनको डिबेन्चर तथा बैंक सेयरबाट रु. ६२,००० नगद आम्दानी आइरहन्छ, जसले उनलाई ढुक्क बनाउँछ।'
      },
      takeaway: {
        en: 'A diversified portfolio sacrifices speculative single-stock windfalls in exchange for durable long-term survival and sleep-at-night peace of mind.',
        np: 'विविधीकृत पोर्टफोलियोले एउटै सेयरबाट हुने अनपेक्षित सट्टेबाजीको लोभलाई त्यागेर दीर्घकालीन पुँजी सुरक्षा र मानसिक शान्ति प्रदान गर्दछ।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Drastically reduces unsystematic company-specific risk and volatility',
        'Smooths out erratic market drawdowns across diverse economic cycles',
        'Provides both capital growth (equities) and steady cash flow (bonds/FDs)',
        'Prevents emotional panic-selling during steep market corrections'
      ],
      np: [
        'कुनै एउटा कम्पनी डुब्दा हुने ठूलो आर्थिक क्षतिबाट बचाउँछ',
        'बजारका विभिन्न उतारचढावका बीच समग्र प्रतिफललाई स्थिर राख्दछ',
        'पुँजी वृद्धि (सेयरबाट) र नियमित नगद प्रवाह (डिबेन्चर र मुद्दतीबाट) दुवै दिन्छ',
        'बजार घट्दा आत्तिएर घाटामा सेयर बेच्ने मनोवैज्ञानिक कमजोरीबाट जोगाउँछ'
      ]
    },
    limitations: {
      en: [
        'Over-diversification (holding 40+ stocks) dilutes overall portfolio returns',
        'Cannot protect against systematic macroeconomic shocks (e.g., nationwide liquidity crunches)',
        'Requires ongoing monitoring and periodic rebalancing discipline',
        'Transaction fees and broker commissions increase with frequent small trades'
      ],
      np: [
        'अनावश्यक धेरै कम्पनी (३०-४० वटा सेयर) किन्दा राम्रा कम्पनीको नाफा पनि पातलिन्छ',
        'देशको समग्र आर्थिक मन्दी वा तरलता अभाव (Systemic Risk) बाट पूर्ण रूपमा बच्न सकिँदैन',
        'वर्षेनि पोर्टफोलियोको समीक्षा र सन्तुलन मिलाउन समय र अनुशासन चाहिन्छ',
        'धेरै साना-साना कारोबार गर्दा ब्रोकर कमिसन र डीपी शुल्क बढी लाग्न सक्छ'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Holding 15 different stocks means your portfolio is automatically 100% diversified.',
          np: '१५ वटा फरक कम्पनीको सेयर किनेपछि पोर्टफोलियो आफैं पूर्ण सुरक्षित हुन्छ।'
        },
        reality: {
          en: 'If all 15 companies belong to the same sector (e.g., all finance companies), they share identical risks. Genuine diversification requires non-correlated assets.',
          np: 'यदि ती सबै १५ वटै कम्पनी एउटै क्षेत्रका हुन् भने ती सबै एकैसाथ घट्ने जोखिम हुन्छ। वास्तविक विविधीकरणका लागि फरक-फरक प्रकृतिका क्षेत्र र सम्पत्ति आवश्यक हुन्छ।'
        }
      },
      {
        myth: {
          en: 'Diversification completely eliminates all investment losses.',
          np: 'पोर्टफोलियो विविधीकरण गरेपछि कहिल्यै घाटा हुँदैन।'
        },
        reality: {
          en: 'Diversification mitigates company-specific risk, but market-wide macroeconomic downturns affect all risk assets to varying degrees.',
          np: 'विविधीकरणले कम्पनी विशेषको जोखिम घटाउँछ, तर समग्र बजारमै मन्दी आउँदा केही समयका लागि पोर्टफोलियोको मूल्य घट्न सक्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Concentrated Portfolio vs Diversified Portfolio', np: 'एक्लो लगानी (Concentrated) र विविधीकृत पोर्टफोलियोको तुलना' },
      subtitle: { en: 'Trade-offs between high volatility upside and sustained long-term capital preservation', np: 'अधिक जोखिमयुक्त नाफा र दिगो पुँजी सुरक्षा बीचको भिन्नता' },
      featureHeader: { en: 'Attribute', np: 'विशेषता' },
      colA: { en: 'Concentrated (1-2 Stocks)', np: 'एक्लो लगानी (१-२ वटा सेयर)' },
      colB: { en: 'Diversified (Multi-Asset / Multi-Sector)', np: 'विविधीकृत (विभिन्न क्षेत्र र सम्पत्ति)' },
      rows: [
        {
          feature: { en: 'Max Potential Loss', np: 'हुन सक्ने अधिकतम नोक्सानी' },
          valA: { en: 'Up to 100% if company fails', np: 'कम्पनी डुबेमा १००% सम्म गुम्न सक्ने' },
          valB: { en: 'Capped and cushioned by other holdings', np: 'अन्य स्थिर सम्पत्तिका कारण सीमित नोक्सानी' }
        },
        {
          feature: { en: 'Volatility Profile', np: 'मूल्यको उतारचढाव' },
          valA: { en: 'Extremely high; sharp emotional swings', np: 'अत्यधिक उतारचढाव; मानसिक तनाव' },
          valB: { en: 'Smoothed and stable across market cycles', np: 'बजारको उतारचढावमा पनि तुलनात्मक रूपमा शान्त' }
        },
        {
          feature: { en: 'Ideal For', np: 'कसका लागि उपयुक्त' },
          valA: { en: 'Aggressive short-term speculators', np: 'उच्च जोखिम मोल्ने अनुभवी सट्टेबाज' },
          valB: { en: 'Long-term wealth builders and families', np: 'दीर्घकालीन लगानीकर्ता र पारिवारिक बचतकर्ता' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'asset', name: 'Asset', type: 'glossary' },
      { slug: 'cagr', name: 'CAGR', type: 'glossary' },
      { slug: 'sip', name: 'SIP', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Asset Allocation Strategies in Nepal', categorySlug: 'investing', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Net Worth Calculator', slug: 'net-worth', desc: 'Assess your total portfolio value in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'How many different stocks should a retail investor hold on NEPSE?', np: 'नेप्सेमा साना लगानीकर्ताले कतिवटा कम्पनीको सेयर राख्नु उपयुक्त हुन्छ?' },
        a: {
          en: 'For most individual retail investors, holding between 6 to 12 carefully researched companies across 4 to 5 distinct sectors provides optimal diversification without creating unmanageable tracking fatigue.',
          np: 'व्यक्तिगत लगानीकर्ताका लागि ४ देखि ५ वटा फरक-फरक क्षेत्रका ६ देखि १२ वटा वित्तीय रूपमा सबल कम्पनीहरू छनोट गर्नु सबैभन्दा उत्तम मानिन्छ, जसले व्यवस्थापन गर्न पनि सजिलो बनाउँछ।'
        }
      },
      {
        q: { en: 'What is portfolio rebalancing and how often should I do it?', np: 'पोर्टफोलियो रिब्यालेन्सिङ (Rebalancing) भनेको के हो र यो कहिले गर्नुपर्छ?' },
        a: {
          en: 'Rebalancing is the practice of adjusting your asset weightings back to your target percentages (e.g., selling some equities after a massive rally to top up fixed deposits). It is best performed once every 12 months or whenever an asset class drifts more than 10% from its target allocation.',
          np: 'रिब्यालेन्सिङ भनेको बजारको वृद्धिका कारण परिवर्तन भएको सम्पत्तिको अनुपातलाई पुनः आफ्नो पूर्ववत् लक्ष्य (जस्तै ६०% सेयर र ४०% मुद्दती) मा फर्काउने प्रक्रिया हो। यसलाई वर्षको एक पटक वा कुनै क्षेत्र अत्यधिक घटबढ हुँदा गर्नु उपयुक्त हुन्छ।'
        }
      },
      {
        q: { en: 'Can mutual funds act as a complete ready-made portfolio?', np: 'के म्युचुअल फण्डलाई आफैंमा एउटा पूर्ण पोर्टफोलियो मान्न सकिन्छ?' },
        a: {
          en: 'Yes. An open-ended or closed-ended mutual fund in Nepal holds a professionally managed portfolio of 30 to 60 equities, debentures, and bank deposits, providing instant diversification for investors with limited starting capital.',
          np: 'हो। नेपालका खुलामुखी तथा बन्दमुखी म्युचुअल फण्डहरूले धितोपत्र बोर्डको नियम पालना गर्दै ३० देखि ६० वटा कम्पनीका सेयर, ऋणपत्र र मुद्दती निक्षेपमा लगानी गरेका हुन्छन्, जसले साना लगानीकर्तालाई सुरुमै पूर्ण विविधीकरणको लाभ दिन्छ।'
        }
      },
      {
        q: { en: 'What is the role of debentures in a Nepali stock portfolio?', np: 'नेपाली सेयर पोर्टफोलियोमा डिबेन्चर (ऋणपत्र) को भूमिका के हुन्छ?' },
        a: {
          en: 'Corporate debentures issued by commercial banks pay fixed semi-annual interest (typically 8.5% to 10.5%) directly to your bank account. They provide reliable cash flow that cushions your net worth when equity markets enter prolonged bear phases.',
          np: 'वाणिज्य बैंकहरूले जारी गर्ने डिबेन्चरले अर्धवार्षिक रूपमा निश्चित ब्याज (८.५% देखि १०.५%) सीधै बैंक खातामा भुक्तानी गर्छन्। सेयर बजार घटेको बेला यिनीहरूले स्थिर नगद आम्दानी दिएर पोर्टफोलियोलाई सुरक्षित राख्छन्।'
        }
      }
    ],
    summary: {
      en: [
        'A portfolio combines non-correlated investments to achieve target growth while capping downside risk.',
        'Diversification requires spreading investments across different sectors and asset classes, not just buying more stocks.',
        'Holding debentures, mutual funds, and fixed deposits alongside equities provides stability during bear markets.',
        'Annual portfolio rebalancing locks in gains from hot sectors and maintains your desired risk profile.'
      ],
      np: [
        'पोर्टफोलियोले अपेक्षित प्रतिफल प्राप्त गर्न र जोखिम नियन्त्रण गर्न विभिन्न वित्तीय साधनहरूलाई एकसाथ जोड्दछ।',
        'धेरै सेयर किन्दैमा विविधीकरण हुँदैन; फरक-फरक प्रकृतिका क्षेत्र र सम्पत्तिमा पुँजी बाँड्न आवश्यक छ।',
        'सेयरका साथमा ऋणपत्र, म्युचुअल फण्ड र मुद्दती निक्षेप राख्दा बजार घटेको समयमा पनि स्थिरता कायम रहन्छ।',
        'वर्षेनि पोर्टफोलियो पुनरावलोकन गर्दा बढेका क्षेत्रबाट नाफा सुरक्षित गर्न र जोखिम नियन्त्रणमा राख्न मद्दत पुग्छ।'
      ]
    },
    whereSeen: [
      { title: 'Asset Allocation Strategies', type: 'Lesson', url: '/learn/investing/what-is-investing' },
      { title: 'Net Worth Calculator', type: 'Calculator', url: '/calculators/net-worth' }
    ],
    meta: {
      title: 'What is an Investment Portfolio? Diversification in Nepal | risePaisa',
      description: 'Understand investment portfolios and asset diversification on NEPSE. Learn how to balance equities, debentures, and mutual funds in Nepal.'
    }
  },

  // 3. CAGR
  {
    slug: 'cagr',
    term: 'CAGR (Compound Annual Growth Rate)',
    termNp: 'चक्रवर्ती वार्षिक वृद्धि दर (CAGR)',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    letter: 'C',
    abbreviation: 'CAGR',
    synonyms: ['Compound Annual Growth Rate', 'Annualized Return', 'वार्षिक चक्रवर्ती दर', 'औसत वार्षिक प्रतिफल'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'CAGR (Compound Annual Growth Rate) represents the constant annual rate at which an investment grows over multiple years, smoothing out volatile year-to-year swings.',
      np: 'चक्रवर्ती वार्षिक वृद्धि दर (CAGR) भनेको बहुवर्षीय समयावधिमा बजारको उतारचढावलाई समेटेर लगानी प्रतिवर्ष औसत कति स्थिर दरले वृद्धि भयो भनी देखाउने मानक वित्तीय दर हो।'
    },
    detailedExplanation: {
      en: 'Real-world investments rarely deliver constant identical gains every year. One year your NEPSE portfolio might surge +40%, drop -20% the following year, and gain +15% the third year. Calculating a simple arithmetic average (+11.7%) severely overstates true wealth creation because of the geometric compounding effect of down years. CAGR calculates the exact constant annual percentage that would have taken the investment from its initial purchase value to its final ending value over that exact timeframe.',
      np: 'वास्तविक संसारमा लगानीले हरेक वर्ष ठ्याक्कै एउटै प्रतिशत नाफा दिँदैन। कुनै वर्ष तपाईंको नेप्से सेयर +४०% बढ्न सक्छ, अर्को वर्ष -२०% घट्न सक्छ, र तेस्रो वर्ष +१५% बढ्न सक्छ। यस्तो अवस्थामा सामान्य औसत (Arithmetic Average) निकाल्दा वास्तविक नाफा भन्दा बढी देखिन्छ किनकि घटेको वर्ष पुँजीको आधार नै खुम्चिएको हुन्छ। तर CAGR ले सुरुको लगानीबाट अन्तिम रकमसम्म पुग्न वास्तवमा प्रतिवर्ष कति स्थिर चक्रवर्ती दरले वृद्धि भयो भन्ने यथार्थ मापन गर्दछ।'
    },
    whyItMatters: {
      en: 'CAGR is the definitive global yardstick for comparing financial performance across totally different asset classes. It allows a Nepali investor to accurately compare a 5-year fixed deposit at a commercial bank against an equity mutual fund, a real estate land parcel, or physical gold on an apples-to-apples annualized basis.',
      np: 'फरक-फरक लगानीका साधनहरूको वास्तविक प्रतिफल निष्पक्ष रूपमा तुलना गर्न CAGR संसारभर सबैभन्दा विश्वसनीय सुचक मानिन्छ। यसको मद्दतले नेपाली लगानीकर्ताले ५ वर्षअघि किनेको जग्गा, बैंकको मुद्दती निक्षेप, सुन वा म्युचुअल फण्डको प्रतिफललाई एउटै वार्षिक मापदण्डमा राखेर कुन राम्रो थियो भनी जाँच्न सक्छन्।'
    },
    howItWorks: {
      summary: {
        en: 'CAGR calculates the geometric annualized rate through three fundamental inputs:',
        np: 'CAGR ले निम्न तीनवटा मुख्य मानहरूको आधारमा चक्रवर्ती दर पत्ता लगाउँछ:'
      },
      steps: [
        {
          title: { en: '1. Beginning Value (PV)', np: '१. प्रारम्भिक लगानी रकम' },
          desc: { en: 'Record the exact initial capital invested at the start date.', np: 'लगानी सुरु गर्दा हालिएको कुल सुरुवाती रकम टिपोट गरिन्छ।' }
        },
        {
          title: { en: '2. Ending Value (FV)', np: '२. अन्तिम बजार मूल्य' },
          desc: { en: 'Determine the total liquidated or market valuation of the asset at the end date.', np: 'तोकिएको अवधि समाप्त हुँदा उक्त लगानीको हालको कुल बजार मूल्य निकालिन्छ।' }
        },
        {
          title: { en: '3. Time Horizon (N)', np: '३. कुल वर्ष संख्या' },
          desc: { en: 'Measure the elapsed holding duration in precise years (or fractions thereof).', np: 'सुरुवाती मितिदेखि अन्तिम मितिसम्मको कुल समयावधि (वर्षमा) गणना गरिन्छ।' }
        },
        {
          title: { en: '4. Exponential Compounding', np: '४. ज्यामितीय हिसाब' },
          desc: { en: 'Divide ending value by beginning value, raise to the power of (1 / N), and subtract 1.', np: 'अन्तिम मूल्यलाई सुरुको मूल्यले भाग गरी, त्यसको घात (१/वर्ष) निकालेर १ घटाइन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Mutual fund performance factsheets published in Nepal',
        'Listed company multi-year revenue and profit growth reports',
        'Comparing real estate returns against NEPSE index performance',
        'Retirement goal planning calculations'
      ],
      np: [
        'नेपालका म्युचुअल फण्डहरूले प्रकाशित गर्ने बहुवर्षीय कार्यसम्पादन विवरणमा',
        'नेप्सेमा सूचीकृत कम्पनीहरूको ५ वा १० वर्षे नाफा र आम्दानी वृद्धिदर विश्लेषण गर्दा',
        'घरजग्गा र सेयर बजारको ऐतिहासिक प्रतिफल निष्पक्ष रूपमा तुलना गर्न',
        'दीर्घकालीन अवकाश कोष र वित्तीय लक्ष्यको योजना बनाउँदा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Using CAGR to Cut Through Exaggerated Real Estate & Stock Claims in Nepal',
        np: 'नेपालमा घरजग्गा र सेयरको बढाइचढाइ गरिएको नाफाको यथार्थ जाँच्न CAGR को प्रयोग'
      },
      body: {
        en: 'In Nepali tea-stall discussions, investors frequently boast: "I doubled my money in this plot of land!" While doubling money sounds impressive, time horizon changes everything. If NPR 2,000,000 grew to NPR 4,000,000 over 3 years, the CAGR is a remarkable 26.0%. But if that same doubling took 12 years, the CAGR drops to a modest 5.95%-which actually lagged behind commercial bank fixed deposit rates and domestic inflation! CAGR protects Nepali investors from the illusion of nominal total gains by revealing the true annualized compounding engine.',
        np: 'नेपालमा चिया गफहरूमा अक्सर सुनिन्छ: "मैले फलाना ठाउँको जग्गामा पैसा दोब्बर बनाएँ!" पैसा दोब्बर हुनु सुन्दा आकर्षक लागे पनि समयको ठूलो भूमिका हुन्छ। यदि रु. २० लाखको जग्गा ३ वर्षमै रु. ४० लाख भयो भने त्यसको CAGR वार्षिक २६.०% को उत्कृष्ट दर हुन आउँछ। तर त्यही पैसा दोब्बर हुन १२ वर्ष लागेको हो भने वार्षिक CAGR जम्मा ५.९५% मात्र हुन आउँछ-जुन वाणिज्य बैंकको मुद्दती ब्याज र मूल्यवृद्धि दरभन्दा पनि कम हो! CAGR ले लगानीकर्तालाई यस्ता भ्रमबाट बचाएर वास्तविक वार्षिक नाफा देखाउँछ।'
      },
      keyPoints: {
        en: [
          'CAGR accounts for the time value of money and geometric compounding.',
          'Doubling capital over 10 years equals a 7.18% CAGR.',
          'Always evaluate NEPSE stock gains using CAGR rather than simple cumulative percentages.',
          'Essential for assessing whether an asset actually beat domestic inflation (6%-8%).'
        ],
        np: [
          'CAGR ले समयको मूल्य र चक्रवर्ती ब्याजको यथार्थलाई पूर्ण रूपमा समेट्दछ।',
          '१० वर्षमा पैसा दोब्बर हुनु भनेको वार्षिक जम्मा ७.१८% को चक्रवर्ती दर मात्र हो।',
          'नेप्सेमा सेयर कारोबार गर्दा कुल नाफा प्रतिशत भन्दा वार्षिक CAGR हेर्नु बुद्धिमानी हुन्छ।',
          'कुनै सम्पत्तिले नेपालको ६% देखि ८% को मूल्यवृद्धिलाई जित्यो कि जितेन भनी जाँच्न यो अनिवार्य छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Santosh invested NPR 500,000 in an equity portfolio in 2019. By 2024 (5 years later), the portfolio valuation reached NPR 900,000. While his raw total gain is NPR 400,000 (an 80% total return), Santosh wants to know his true annualized compound return to compare it with an 8.5% fixed deposit. Using the CAGR formula: (900,000 / 500,000)^(1/5) - 1 = (1.80)^0.20 - 1 = 12.47%. Santosh successfully beat fixed deposits by nearly 4% annually.',
        np: 'सन्तोषले सन् २०१९ मा रु. ५,००,००० सेयर बजारमा लगानी गरे। सन् २०२४ मा (५ वर्षपछि) उनको लगानीको मूल्य रु. ९,००,००० पुग्यो। यहाँ उनको कुल नाफा रु. ४,००,००० अर्थात् ८०% देखिन्छ। तर वाणिज्य बैंकको ८.५% मुद्दती निक्षेपभन्दा यो कति राम्रो थियो भनी जाँच्न उनले CAGR निकाल्छन्: (९,००,००० / ५,००,०००)^(१/५) - १ = १२.४७%। सन्तोषको लगानीले बैंकको मुद्दतीभन्दा वार्षिक झण्डै ४% बढी चक्रवर्ती प्रतिफल दियो।'
      },
      takeaway: {
        en: 'CAGR provides an unvarnished annualized metric, allowing you to confirm whether equity risk actually compensated you above risk-free bank rates.',
        np: 'CAGR ले लगानीको वास्तविक वार्षिक चक्रवर्ती दर देखाउँछ, जसले जोखिम मोलेर गरिएको लगानीले बैंकको सुरक्षित ब्याजभन्दा बढी प्रतिफल दियो कि दिएन भन्ने स्पष्ट पार्छ।'
      }
    },
    formula: {
      equation: 'CAGR = (EV / BV)^(1 / n) - 1',
      explanation: {
        en: 'Divide the ending value (EV) by the beginning value (BV), raise the quotient to the power of 1 divided by the number of years (n), and subtract 1.',
        np: 'अन्तिम मूल्य (EV) लाई सुरुको मूल्य (BV) ले भाग गर्ने, आएको भागफलको घात (१/वर्ष) निकाल्ने र अन्त्यमा १ घटाउने।'
      },
      variables: [
        { symbol: 'EV', label: { en: 'Ending Value (final worth of investment)', np: 'अन्तिम बजार मूल्य' } },
        { symbol: 'BV', label: { en: 'Beginning Value (initial investment cost)', np: 'सुरुवाती लगानी रकम' } },
        { symbol: 'n', label: { en: 'Number of Years elapsed', np: 'लगानी गरिएको कुल वर्ष संख्या' } }
      ],
      example: {
        scenario: {
          en: 'An investment of NPR 100,000 grows to NPR 250,000 over 6 years in Nepal.',
          np: 'नेपालमा ६ वर्षको अवधिमा रु. १,००,००० को लगानी बढेर रु. २,५०,००० पुग्छ।'
        },
        calculation: {
          en: 'CAGR = (250,000 / 100,000)^(1 / 6) - 1 = (2.50)^(0.1667) - 1 = 1.165 - 1 = 0.165',
          np: 'CAGR = (२,५०,००० / १,००,०००)^(१ / ६) - १ = (२.५)^(०.१६६७) - १ = १.१६५ - १ = ०.१६५'
        },
        result: {
          en: '16.5% Annualized Compound Return',
          np: 'वार्षिक १६.५% चक्रवर्ती वृद्धि दर'
        }
      }
    },
    advantages: {
      en: [
        'Provides a single annualized metric that enables fair comparison across all asset classes',
        'Eliminates the distortion caused by volatile year-to-year swings in equity markets',
        'Accounts for the compounding effect over extended multi-decade time horizons',
        'Straightforward to calculate using standard financial calculators or spreadsheets'
      ],
      np: [
        'विभिन्न प्रकृतिका सम्पत्तिहरू बीच निष्पक्ष तुलना गर्न एउटै मानक वार्षिक दर प्रदान गर्छ',
        'सेयर बजारको उतारचढाव र घटबढले सिर्जना गर्ने भ्रमलाई हटाउँछ',
        'दीर्घकालीन लगानीमा चक्रवर्ती ब्याजको वास्तविक प्रभावलाई समेट्दछ',
        'सामान्य क्याल्कुलेटर वा एक्सेल सिटमा सजिलै गणना गर्न सकिन्छ'
      ]
    },
    limitations: {
      en: [
        'Assumes a smooth, steady growth rate every year, ignoring intermittent volatility',
        'Does not reflect intermediate cash injections or withdrawals (use XIRR for SIPs)',
        'Susceptible to start-date and end-date cherry-picking biases',
        'Measures past historical return; does not guarantee future financial performance'
      ],
      np: [
        'यसले बीचको ठूलो उतारचढावलाई बेवास्ता गर्दै वृद्धि दर हरेक वर्ष स्थिर थियो भन्ने मान्दछ',
        'नियमित थपथाप गरिने एसआईपी (SIP) वा बीचमा झिकिने रकमको गणना गर्न सक्दैन (त्यसका लागि XIRR चाहिन्छ)',
        'सुरु र अन्त्यको मिति आफू अनुकूल छान्दा नतिजामा कृत्रिम चमक देखिन सक्छ',
        'विगतको ऐतिहासिक नतिजा मात्र देखाउँछ; भविष्यमा पनि त्यस्तै प्रतिफल आउने ग्यारेन्टी गर्दैन'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'If an investment grew by 50% in Year 1 and dropped by 50% in Year 2, the average return is 0%.',
          np: 'यदि लगानी पहिलो वर्ष ५०% बढ्यो र दोस्रो वर्ष ५०% घट्यो भने औषत प्रतिफल ०% हुन्छ।'
        },
        reality: {
          en: 'In reality, NPR 100,000 becomes NPR 150,000, and then drops 50% to NPR 75,000! You lost NPR 25,000. The CAGR is -13.4% per year, proving arithmetic averages are deceitful.',
          np: 'वास्तवमा रु. १,००,००० पहिलो वर्ष ५०% बढेर १,५०,००० पुग्छ, तर दोस्रो वर्ष ५०% घट्दा ७५,००० मा झर्छ! तपाईंलाई २५,००० घाटा हुन्छ। यसको वास्तविक CAGR वार्षिक -१३.४% हुन्छ।'
        }
      },
      {
        myth: {
          en: 'CAGR can accurately measure returns for a monthly SIP (Systematic Investment Plan).',
          np: 'मासिक एसआईपी (SIP) को वास्तविक प्रतिफल नाप्न पनि CAGR नै प्रयोग गर्न सकिन्छ।'
        },
        reality: {
          en: 'CAGR only works for a single lump-sum investment. For recurring monthly SIPs where cash flows occur at different dates, XIRR (Extended Internal Rate of Return) must be used.',
          np: 'CAGR एकमुष्ट (Lump-sum) लगानीका लागि मात्र उपयुक्त हुन्छ। हरेक महिना फरक-फरक मितिमा किस्ता हालिने एसआईपीका लागि XIRR विधि प्रयोग गर्नुपर्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'CAGR vs Absolute Return vs Arithmetic Average', np: 'CAGR, कुल नाफा (Absolute Return) र सामान्य औसत बीचको तुलना' },
      subtitle: { en: 'Why annualized geometric compounding provides the only honest performance assessment', np: 'वार्षिक चक्रवर्ती दरले मात्र किन वास्तविक प्रतिफलको सही चित्रण गर्छ' },
      featureHeader: { en: 'Metric', np: 'मापन विधि' },
      colA: { en: 'CAGR (Compound Annual Growth)', np: 'CAGR (चक्रवर्ती वार्षिक दर)' },
      colB: { en: 'Absolute Return (Raw %)', np: 'कुल नाफा (Absolute Return)' },
      rows: [
        {
          feature: { en: 'Considers Holding Period', np: 'समयावधिको प्रभाव' },
          valA: { en: 'Yes; standardizes performance per year', np: 'हो; प्रतिफललाई वार्षिक दरमा ढाल्छ' },
          valB: { en: 'No; ignores whether it took 1 year or 20 years', np: 'होइन; १ वर्ष लाग्यो कि २० वर्ष, बेवास्ता गर्छ' }
        },
        {
          feature: { en: 'Mathematical Basis', np: 'गणितीय आधार' },
          valA: { en: 'Geometric Mean (accounts for compounding)', np: 'ज्यामितीय औसत (चक्रवर्ती प्रभाव समेट्छ)' },
          valB: { en: 'Simple subtraction: (EV - BV) / BV', np: 'सामान्य भाग: (अन्तिम - सुरु) / सुरु' }
        },
        {
          feature: { en: 'Best Used For', np: 'उपयुक्त प्रयोग' },
          valA: { en: 'Multi-year cross-asset performance comparison', np: 'धेरै वर्षको विभिन्न लगानी तुलना गर्न' },
          valB: { en: 'Short-term single-trade profit check (< 1 year)', np: 'एक वर्षभन्दा कम अवधिको नाफा हेर्न' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'asset', name: 'Asset', type: 'glossary' },
      { slug: 'sip', name: 'SIP', type: 'glossary' },
      { slug: 'inflation', name: 'Inflation', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Compound Interest: The 8th Wonder of the World', categorySlug: 'investing', slug: 'compound-interest' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'CAGR Calculator', slug: 'cagr', desc: 'Calculate the compound annual growth rate of your investments in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'What is considered a good CAGR for investments in Nepal?', np: 'नेपालमा लगानी गर्दा कति प्रतिशतको CAGR लाई राम्रो मानिन्छ?' },
        a: {
          en: 'A good CAGR must comfortably beat domestic inflation (approx. 6%-7%) and commercial bank fixed deposit rates (approx. 8%-9%). A long-term diversified equity or business CAGR of 12% to 16% is considered very healthy in Nepal.',
          np: 'राम्रो CAGR हुनका लागि यसले नेपालको मूल्यवृद्धि (६%-७%) र बैंकको मुद्दती ब्याज (८%-९%) लाई सजिलै जित्नुपर्छ। दीर्घकालीन रूपमा १२% देखि १६% सम्मको CAGR लाई नेपालको सन्दर्भमा निकै उत्कृष्ट मानिन्छ।'
        }
      },
      {
        q: { en: 'Can CAGR be negative?', np: 'के CAGR ऋणात्मक (Negative) पनि हुन सक्छ?' },
        a: {
          en: 'Yes. If the ending value of your investment is lower than your initial capital, the CAGR will be negative, indicating the annualized rate of capital erosion over that period.',
          np: 'सक्छ। यदि लगानीको अन्तिम मूल्य सुरुको भन्दा कम भयो भने CAGR ऋणात्मक आउँछ, जसले प्रतिवर्ष कति दरले पुँजी घटिरहेको छ भन्ने देखाउँछ।'
        }
      },
      {
        q: { en: 'Why does CAGR differ from the arithmetic average return?', np: 'सामान्य औषत र CAGR बीच किन फरक हुन्छ?' },
        a: {
          en: 'Arithmetic average simply sums all annual percentages and divides by the number of years, ignoring that a 50% drop requires a 100% gain just to break even. CAGR accounts for the compounding base, providing the true economic growth rate.',
          np: 'सामान्य औषतले सबै वर्षको प्रतिशत जोडेर वर्ष संख्याले भाग गर्छ, जसले ५०% घाटा पूर्ति गर्न अर्को वर्ष १००% नाफा चाहिन्छ भन्ने यथार्थलाई बिर्सिन्छ। CAGR ले भने पुँजीको चक्रवर्ती यथार्थलाई समेट्छ।'
        }
      },
      {
        q: { en: 'How do dividends affect the CAGR calculation of a NEPSE stock?', np: 'नेप्सेको सेयरमा प्राप्त लाभांशले CAGR गणनामा के प्रभाव पार्छ?' },
        a: {
          en: 'To calculate Total Return CAGR, all cash dividends received and bonus share additions must be reinvested into the ending value. Ignoring cash dividends significantly understates the true CAGR of quality dividend-paying stocks.',
          np: 'वास्तविक CAGR निकाल्नका लागि वर्षौंदेखि प्राप्त नगद लाभांश र बोनस सेयरलाई अन्तिम मूल्यमा जोड्नुपर्छ। लाभांशलाई नजोड्दा राम्रा लाभांश दिने कम्पनीको वास्तविक वृद्धिदर निकै कम देखिन सक्छ।'
        }
      }
    ],
    summary: {
      en: [
        'CAGR provides the standardized, smoothed annual compounding rate of an investment over multiple years.',
        'It prevents deception from arithmetic averages and accounts for the compounding impact of down years.',
        'Doubling your money over 10 years translates to an annualized CAGR of 7.18%.',
        'CAGR is best suited for lump-sum investments; use XIRR for recurring monthly SIPs.'
      ],
      np: [
        'CAGR ले धेरै वर्षको लगानी उतारचढावलाई समेटेर वार्षिक वास्तविक चक्रवर्ती वृद्धिदर देखाउँछ।',
        'यसले सामान्य औषतले दिने भ्रमलाई हटाउँदै पुँजी घटेको वर्षको वास्तविक असरलाई हिसाब गर्छ।',
        '१० वर्षमा पैसा दोब्बर हुनु भनेको वार्षिक ७.१८% को CAGR मात्र हो।',
        'एकमुष्ट लगानीका लागि CAGR उत्तम हुन्छ भने मासिक किस्ताबन्दी एसआईपीका लागि XIRR चाहिन्छ।'
      ]
    },
    whereSeen: [
      { title: 'Compound Interest Lesson', type: 'Lesson', url: '/learn/investing/compound-interest' },
      { title: 'CAGR Calculator', type: 'Calculator', url: '/calculators/cagr' }
    ],
    meta: {
      title: 'CAGR (Compound Annual Growth Rate) Calculator & Guide Nepal | risePaisa',
      description: 'Learn how to calculate CAGR in Nepal. Understand compound growth, compare NEPSE returns with fixed deposits, and cut through real estate myths.'
    }
  },

  // 4. DIVIDEND
  {
    slug: 'dividend',
    term: 'Dividend',
    termNp: 'लाभांश (Dividend)',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    letter: 'D',
    abbreviation: null,
    synonyms: ['Cash Dividend', 'Bonus Share', 'नगद लाभांश', 'कम्पनीको मुनाफा वितरण'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A dividend is the distribution of a portion of a company’s net corporate profits paid out directly to eligible shareholders, issued in Nepal as cash or bonus shares.',
      np: 'लाभांश (Dividend) भनेको कुनै कम्पनीले वर्षभरि कमाएको खुद नाफाबाट आफ्ना सेयरधनीहरूलाई वितरण गर्ने मुनाफाको हिस्सा हो, जुन नेपालमा नगद लाभांश वा बोनस सेयरको रूपमा दिइन्छ।'
    },
    detailedExplanation: {
      en: 'When a publicly listed company on NEPSE operates profitably, its board of directors decides how to utilize net earnings. A portion is retained as reserves for business expansion, and the remaining surplus is distributed to shareholders as dividends in proportion to the number of shares owned. In Nepal, companies distribute two primary dividend types: Cash Dividends (deposited directly into the shareholder\'s bank account linked with their Demat/MeroShare) and Bonus Shares / Stock Dividends (free additional shares credited to the Demat account).',
      np: 'नेप्सेमा सूचीकृत कम्पनीहरूले नाफा कमाएमा सञ्चालक समितिले उक्त नाफाको केही हिस्सा कम्पनीको भविष्य विस्तारका लागि जगेडा कोषमा राख्छ र बाँकी रकम सेयरधनीहरूलाई उनीहरूको सेयर संख्याको अनुपातमा लाभांशको रूपमा वितरण गर्छ। नेपालको सेयर बजारमा कम्पनीहरूले दुई प्रकारका लाभांश दिन्छन्: नगद लाभांश (Cash Dividend - जुन सीधै बैंक खातामा जम्मा हुन्छ) र बोनस सेयर (Bonus Share - जुन निःशुल्क थप सेयरको रूपमा डिम्याट खातामा आउँछ)।'
    },
    whyItMatters: {
      en: 'Dividends represent the only tangible, cold-hard cash return an investor receives without selling their underlying shares. They provide a predictable passive income stream and serve as a reliable acid test for business health: companies that pay dependable cash dividends for decades possess authentic, profitable business operations.',
      np: 'आफूसँग भएको सेयर नबेचीकनै प्राप्त हुने वास्तविक नगद प्रतिफल नै लाभांश हो। यसले लगानीकर्तालाई नियमित निष्क्रिय आम्दानी (Passive Income) प्रदान गर्छ र कम्पनीको वास्तविक वित्तीय स्वास्थ्य जाँच्ने कसीको रूपमा काम गर्छ: दशकौंसम्म निरन्तर नगद लाभांश दिने कम्पनीहरू वित्तीय रूपमा अत्यन्त सबल मानिन्छन्।'
    },
    howItWorks: {
      summary: {
        en: 'The corporate dividend process in Nepal follows a strict 4-stage regulatory workflow:',
        np: 'नेपालमा लाभांश वितरण प्रक्रिया ४ वटा कानुनी चरणहरू पूरा गरी सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Board of Directors Proposal', np: '१. सञ्चालक समितिको प्रस्ताव' },
          desc: { en: 'The company’s Board meets to finalize annual audited accounts and proposes a dividend percentage (e.g., 10% bonus + 5% cash).', np: 'कम्पनीको सञ्चालक समितिले वार्षिक वित्तीय विवरण पारित गरी लाभांशको दर (जस्तै १०% बोनस र ५% नगद) प्रस्ताव गर्छ।' }
        },
        {
          title: { en: '2. Regulatory Approval', np: '२. नियामक निकायको स्वीकृति' },
          desc: { en: 'The proposal is submitted to sectoral regulators (Nepal Rastra Bank for banks, Nepal Insurance Authority for insurers) for formal clearance.', np: 'उक्त प्रस्तावलाई सम्बन्धित नियामक (बैंक भए नेपाल राष्ट्र बैंक, बीमा भए नेपाल बीमा प्राधिकरण) बाट अनिवार्य स्वीकृति लिइन्छ।' }
        },
        {
          title: { en: '3. AGM Approval & Book Closure', np: '३. साधारण सभा र बुक क्लोज' },
          desc: { en: 'The Annual General Meeting (AGM) endorses the dividend, and a "Book Closure Date" is fixed. Investors holding shares before book closure qualify.', np: 'वार्षिक साधारण सभाले लाभांश अनुमोदन गर्छ र बुक क्लोज मिति तोकिन्छ। बुक क्लोज हुनुभन्दा अघिल्लो दिनसम्म सेयर किनेकाहरू मात्र लाभांश पाउन योग्य हुन्छन्।' }
        },
        {
          title: { en: '4. Electronic Distribution', np: '४. विद्युतीय भुक्तानी' },
          desc: { en: 'Cash dividends are transferred to bank accounts via IPS, while bonus shares are directly credited to Demat accounts via CDSC.', np: '५% कर कट्टी गरी नगद लाभांश सिधै बैंक खातामा र बोनस सेयर सीडीएससीमार्फत डिम्याट खातामा दाखिला हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Annual general meetings of commercial banks, insurance, and hydro companies',
        'Calculating dividend yield on NEPSE stock screeners',
        'Income tax withholding statements under Section 92 of Nepal Income Tax Act',
        'Building passive cash-flow retirement portfolios'
      ],
      np: [
        'वाणिज्य बैंक, बीमा र जलविद्युत कम्पनीहरूको वार्षिक साधारण सभा (AGM) मा',
        'नेप्सेमा लाभांश प्रतिफल (Dividend Yield) गणना गर्दा',
        'आयकर ऐनको दफा ९२ अनुसार लाभांश कर कट्टी विवरणमा',
        'पेन्सन वा नियमित निष्क्रिय आम्दानी दिने लगानी योजना बनाउँदा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Nepal 5% Dividend Tax & The Shift from Bonus Shares to Cash Dividends',
        np: 'नेपालमा ५% लाभांश कर र बोनस सेयरबाट नगद लाभांशतर्फको परिवर्तन'
      },
      body: {
        en: 'Under Section 92 of Nepal’s Income Tax Act 2058, dividends paid by resident companies to individual resident investors are subject to a 5% final withholding tax (TDS). Historically, Nepali retail investors heavily preferred Bonus Shares over Cash Dividends because they hoped the market price would stay high. However, after the massive capital expansion of commercial banks (increasing paid-up capital from NPR 2 billion to NPR 8+ billion), excess shares diluted earnings per share (EPS). Today, seasoned investors prioritize strong cash dividends from mature institutions, providing immediate liquid cash flow to reinvest into undervalued assets.',
        np: 'नेपालको आयकर ऐन २०५८ को दफा ९२ अनुसार आवासीय कम्पनीले व्यक्तिलाई दिने लाभांशमा ५% अन्तिम कर (Final TDS) लाग्दछ। विगतमा नेपाली लगानीकर्ताहरूले नगद लाभांशभन्दा बोनस सेयरलाई बढी मन पराउँथे किनकि सेयर संख्या थपिन्थ्यो। तर बैंक तथा वित्तीय संस्थाको चुक्ता पुँजी रु. २ अर्बबाट रु. ८ अर्बभन्दा बढी पुगेपछि अत्यधिक सेयर संख्याका कारण प्रतिसेयर आम्दानी (EPS) घट्न पुग्यो। हाल परिपक्व लगानीकर्ताहरू नगद लाभांश दिने कम्पनीलाई बढी प्राथमिकता दिन्छन्, जसले नियमित नगद दिन्छ।'
      },
      keyPoints: {
        en: [
          'Dividend income incurs a 5% final withholding tax (TDS) for Nepali resident individuals.',
          'To receive dividends, shares must be purchased before the official Book Closure Date.',
          'Cash dividends are credited directly via bank account validation in MeroShare.',
          'Bonus shares undergo price adjustment by NEPSE on the book closure morning.'
        ],
        np: [
          'नेपाली व्यक्तिगत लगानीकर्ताका लागि लाभांशमा ५% अन्तिम स्रोतमा कर (TDS) कट्टी हुन्छ।',
          'लाभांश पाउनका लागि तोकिएको बुक क्लोज मितिभन्दा अघिल्लो कारोबार दिनसम्म सेयर खरिद गरिसक्नुपर्छ।',
          'नगद लाभांश मेरोसेयरमा जोडिएको बैंक खातामा आईपीएस (IPS) मार्फत सिधै जम्मा हुन्छ।',
          'बोनस सेयर वितरणपछि बुक क्लोजको बिहान नेप्सेले सेयरको बजार मूल्य समायोजन (Price Adjustment) गर्दछ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Ramesh holds 1,000 shares of a leading commercial bank trading at NPR 320 per share (Face Value = NPR 100). The bank declares a 15% cash dividend and 5% bonus share for the fiscal year. For his cash dividend: 1,000 shares * NPR 100 face value * 15% = NPR 15,000. After deducting 5% dividend tax (NPR 750), NPR 14,250 is credited to his bank account. For his bonus shares: 1,000 * 5% = 50 free additional shares are credited to his Demat account, raising his total holdings to 1,050 shares.',
        np: 'रमेशसँग एउटा वाणिज्य बैंकको १,००० कित्ता सेयर छ, जसको अंकित मूल्य (Face Value) रु. १०० छ। बैंकले १५% नगद लाभांश र ५% बोनस सेयर घोषणा गर्छ। नगद लाभांश गणना: १,००० कित्ता * रु. १०० * १५% = रु. १५,०००। यसमा ५% लाभांश कर (रु. ७५०) कट्टी भएपछि रमेशको बैंक खातामा रु. १४,२५० जम्मा हुन्छ। बोनस सेयर बापत: १,००० को ५% ले हुन आउने ५० कित्ता निःशुल्क सेयर उनको डिम्याट खातामा थपिन्छ, जसले उनको कुल सेयर संख्या १,०५० पुर्‍याउँछ।'
      },
      takeaway: {
        en: 'Dividends in Nepal are calculated exclusively on the NPR 100 face value (par value) of the share, never on the prevailing market price.',
        np: 'नेपालमा लाभांशको प्रतिशत सधैं सेयरको रु. १०० अंकित मूल्य (Face Value) मा हिसाब हुन्छ, बजारमा चलिरहेको मूल्यमा होइन।'
      }
    },
    formula: {
      equation: 'Cash Dividend = Shares Owned * Par Value (NPR 100) * Dividend % * (1 - Tax Rate)',
      explanation: {
        en: 'Multiply total shares owned by par value (NPR 100), apply declared dividend percentage, and deduct the 5% statutory TDS.',
        np: 'कुल सेयर संख्यालाई अंकित मूल्य (रु. १००) ले गुणन गरी घोषित लाभांश प्रतिशत निकाल्ने र त्यसमा ५% कर कट्टी गर्ने।'
      },
      variables: [
        { symbol: 'Shares', label: { en: 'Total eligible shares held before book closure', np: 'बुक क्लोज अघि कायम कुल कित्ता संख्या' } },
        { symbol: 'Par Value', label: { en: 'Nominal face value (standard NPR 100 in Nepal)', np: 'अंकित मूल्य (नेपालमा प्रायः रु. १००)' } },
        { symbol: 'Dividend %', label: { en: 'Declared dividend payout rate', np: 'घोषित लाभांश प्रतिशत' } },
        { symbol: 'Tax', label: { en: '5% final withholding tax rate under Section 92', np: 'दफा ९२ बमोजिम ५% लाभांश कर' } }
      ],
      example: {
        scenario: {
          en: 'Calculating net payout on 500 shares receiving a 10% cash dividend in Nepal.',
          np: '५०० कित्ता सेयरमा १०% नगद लाभांश पाउँदा प्राप्त हुने खुद रकम।'
        },
        calculation: {
          en: 'Gross = 500 * 100 * 10% = NPR 5,000. Net = 5,000 * (1 - 0.05) = NPR 4,750.',
          np: 'कुल रकम = ५०० * १०० * १०% = रु. ५,०००। खुद रकम = ५,००० * (१ - ०.०५) = रु. ४,७५०।'
        },
        result: {
          en: 'NPR 4,750 Net Cash Credited to Bank',
          np: 'रु. ४,७५० खुद नगद बैंक खातामा प्राप्त'
        }
      }
    },
    advantages: {
      en: [
        'Generates recurring liquid cash flow without diluting your share ownership',
        'Enjoys a favorable flat 5% final withholding tax rate in Nepal',
        'Functions as an objective proof of verified corporate profitability',
        'Can be reinvested into additional shares to accelerate compound wealth'
      ],
      np: [
        'आफूसँग भएको सेयरको संख्या नघटाइकनै नियमित नगद आम्दानी दिन्छ',
        'नेपालमा यसमा केवल ५% अन्तिम कर (TDS) मात्र लाग्ने कानुनी सुविधा छ',
        'कम्पनी साँच्चिकै नाफामा चलेको छ भन्ने प्रमाणित गर्ने भरपर्दो आधार हो',
        'प्राप्त नगदलाई पुनः नयाँ सेयरमा लगानी गरेर चक्रवर्ती लाभ लिन सकिन्छ'
      ]
    },
    limitations: {
      en: [
        'Dividends are not legally guaranteed; boards can suspend payouts in bad years',
        'Stock price undergoes market price adjustment on book closure day',
        'High dividend payouts may indicate a mature company with limited growth reinvestment',
        'Calculating yields on market price reveals that cash yields can sometimes be below 4%'
      ],
      np: [
        'लाभांश कानुनी रूपमा अनिवार्य हुँदैन; कम्पनी घाटामा गएमा वितरण रोकिन सक्छ',
        'बुक क्लोजको दिन नेप्सेमा सेयरको बजार मूल्य लाभांश बराबर समायोजन भएर घट्छ',
        'अधिक लाभांश बाँड्ने कम्पनीसँग भविष्यमा व्यापार विस्तार गर्ने योजना नहुन पनि सक्छ',
        'बजार मूल्य महँगो भएको बेला सेयर किन्दा वास्तविक लाभांश प्रतिफल (Yield) न्यून हुन सक्छ'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'A 20% dividend means you receive 20% of the current market price of the stock.',
          np: '२०% लाभांश भनेको बजारमा चलिरहेको सेयर मूल्यको २०% नगद पाउनु हो।'
        },
        reality: {
          en: 'Dividends in Nepal are strictly calculated on the nominal face value of NPR 100. A 20% dividend yields exactly NPR 20 per share, even if the market price is NPR 1,200.',
          np: 'लाभांश सधैं रु. १०० अंकित मूल्यमा गणना हुन्छ। २०% लाभांशको अर्थ प्रति सेयर रु. २० मात्र हो, चाहे बजारमा उक्त सेयरको मूल्य रु. १,२०० नै किन नहोस्।'
        }
      },
      {
        myth: {
          en: 'You can buy a stock on book closure day and still collect the dividend.',
          np: 'बुक क्लोज भएको दिन सेयर किनेर पनि लाभांश पाउन सकिन्छ।'
        },
        reality: {
          en: 'You must buy shares at least one trading day prior to the book closure date to settle before the register closes.',
          np: 'लाभांश पाउनका लागि बुक क्लोज हुनुभन्दा कम्तीमा एक कारोबार दिन अगावै सेयर किनिसक्नुपर्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Cash Dividend vs Bonus Share (Stock Dividend)', np: 'नगद लाभांश र बोनस सेयर बीचको भिन्नता' },
      subtitle: { en: 'Understanding the operational differences between cash distribution and equity capitalization', np: 'नगद भुक्तानी र सेयर संख्या वृद्धि बीचको मुख्य फरक' },
      featureHeader: { en: 'Aspect', np: 'विशेषता' },
      colA: { en: 'Cash Dividend', np: 'नगद लाभांश (Cash Dividend)' },
      colB: { en: 'Bonus Share', np: 'बोनस सेयर (Stock Dividend)' },
      rows: [
        {
          feature: { en: 'Form of Payout', np: 'भुक्तानीको स्वरूप' },
          valA: { en: 'Liquid cash directly into bank account', np: 'बैंक खातामा सीधै आउने तरल नगद' },
          valB: { en: 'Additional free shares credited to Demat', np: 'डिम्याट खातामा थपिने नयाँ सेयर कित्ता' }
        },
        {
          feature: { en: 'Company Impact', np: 'कम्पनीमा पर्ने असर' },
          valA: { en: 'Reduces company cash reserves; paid-up capital unchanged', np: 'कम्पनीको नगद घट्छ; चुक्ता पुँजी उही रहन्छ' },
          valB: { en: 'Capitalizes reserves into paid-up capital; cash stays in firm', np: 'जगेडा कोष पुँजीकृत हुन्छ; नगद कम्पनीमै रहन्छ' }
        },
        {
          feature: { en: 'Tax Handling', np: 'करको व्यवस्था' },
          valA: { en: '5% TDS deducted directly from payout', np: 'नगदबाटै ५% कर कट्टी गरेर बाँकी दाखिला' },
          valB: { en: 'Investor must pay tax, or company pays from cash fraction', np: 'बोनस सेयरको करका लागि कम्पनीले नगद लाभांश छुट्याउनुपर्छ' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'bonus-share', name: 'Bonus Share', type: 'glossary' },
      { slug: 'capital-gain', name: 'Capital Gain', type: 'glossary' },
      { slug: 'asset', name: 'Asset', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Understanding Stock Dividends & Bonus Shares', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Dividend Yield Calculator', slug: 'dividend-yield', desc: 'Calculate your exact net dividend cash return on NEPSE.' }
    ],
    faqs: [
      {
        q: { en: 'What is Dividend Yield and why does it matter on NEPSE?', np: 'लाभांश प्रतिफल (Dividend Yield) भनेको के हो र यो किन महत्त्वपूर्ण छ?' },
        a: {
          en: 'Dividend Yield is the annual dividend per share divided by the current market price of the stock. For example, if a stock trading at NPR 400 pays an NPR 20 cash dividend, its dividend yield is 5.0%. It allows you to evaluate the cash return generated per rupee invested.',
          np: 'लाभांश प्रतिफल भनेको प्रतिसेयर लाभांशलाई हालको बजार मूल्यले भाग गर्दा आउने प्रतिशत हो। उदाहरणका लागि, रु. ४०० मा चलेको सेयरले रु. २० नगद दिन्छ भने प्रतिफल ५.०% हुन्छ। यसले बजार मूल्यको तुलनामा लगानीले कति प्रतिशत नगद दियो भन्ने देखाउँछ।'
        }
      },
      {
        q: { en: 'What happens if my bank account details in MeroShare are incorrect?', np: 'मेरोसेयरमा बैंक खाता विवरण गलत भएमा लाभांश के हुन्छ?' },
        a: {
          en: 'If your bank account number or branch code in Demat/MeroShare is outdated or mismatched, the electronic IPS transfer will bounce. You must update your Demat bank details through your DP and submit a re-credit application to the company\'s Share Registrar (Capital).',
          np: 'बैंक खाता नम्बर वा शाखा फरक परेमा लाभांश रकम खातामा नआई फिर्ता हुन्छ। यस्तो अवस्थामा आफ्नो डीपीमार्फत मेरोसेयरमा बैंक खाता सच्याई कम्पनीको सेयर रजिष्ट्रार (क्यापिटल) मा निवेदन दिएर पुनः भुक्तानी लिनुपर्छ।'
        }
      },
      {
        q: { en: 'Why did my stock price fall on NEPSE after the dividend announcement?', np: 'लाभांश पाएपछि नेप्सेमा सेयरको मूल्य किन घट्छ?' },
        a: {
          en: 'On the morning of the book closure date, NEPSE automatically adjusts the stock price downward to reflect the cash paid out or new bonus shares issued. This prevents arbitrage where someone buys the day before and sells immediately after collecting free cash.',
          np: 'बुक क्लोजको बिहान नेप्सेले सेयरबाट बाहिरिएको नगद वा थपिएका नयाँ बोनस सेयर अनुसार बजार मूल्य स्वतः समायोजन (Price Adjustment) गर्छ, ताकि कसैले लाभांश लिनासाथ तुरुन्तै बेचेर अनुचित फाइदा लिन नसकोस्।'
        }
      },
      {
        q: { en: 'Is dividend income added to my salary for progressive tax slabs in Nepal?', np: 'के नेपालमा लाभांश आम्दानीलाई तलबमा जोडेर व्यक्तिगत कर स्ल्याब अनुसार कर लाग्छ?' },
        a: {
          en: 'No. Under Section 92 of the Nepal Income Tax Act, the 5% dividend tax deducted at source is a final withholding tax (TDS). You do not need to add it to your taxable income under regular progressive slabs (1%, 10%, 20%, 30%, 36% or 39%).',
          np: 'लाग्दैन। नेपालको आयकर ऐनको दफा ९२ अनुसार लाभांशमा लाग्ने ५% कर अन्तिम कर (Final Withholding Tax) हो। यसलाई तपाईंको तलब वा व्यक्तिगत आयकरको स्ल्याबमा जोडेर थप कर तिर्नु पर्दैन।'
        }
      }
    ],
    summary: {
      en: [
        'Dividends distribute corporate net earnings directly to shareholders as cash or bonus shares.',
        'In Nepal, dividends are calculated on the NPR 100 face value, never on the volatile market price.',
        'Cash dividends incur a 5% final withholding tax (TDS) credited directly to bank accounts.',
        'Shares must be purchased prior to the official Book Closure Date to qualify for payouts.'
      ],
      np: [
        'लाभांशले कम्पनीको खुद नाफालाई सेयरधनीहरू माझ नगद वा बोनस सेयरको रूपमा वितरण गर्दछ।',
        'नेपालमा लाभांशको प्रतिशत सधैं सेयरको रु. १०० अंकित मूल्यमा हिसाब हुन्छ, बजार मूल्यमा होइन।',
        'नगद लाभांशमा ५% अन्तिम कर कट्टी भई रकम सिधै बैंक खातामा दाखिला हुन्छ।',
        'लाभांश पाउनका लागि बुक क्लोज हुनुभन्दा अघिल्लो कारोबार दिनसम्म सेयर खरिद गरिसक्नुपर्छ।'
      ]
    },
    whereSeen: [
      { title: 'Dividend Yield Calculator', type: 'Calculator', url: '/calculators/dividend-yield' },
      { title: 'Stock Dividends Lesson', type: 'Lesson', url: '/learn/nepse/what-is-investing' }
    ],
    meta: {
      title: 'What is a Dividend in Nepal? Cash vs Bonus Shares Guide | risePaisa',
      description: 'Complete guide to dividends on NEPSE. Learn how cash dividends and bonus shares work in Nepal, 5% dividend tax rates, and book closure rules.'
    }
  },

  // 5. BONUS SHARE
  {
    slug: 'bonus-share',
    term: 'Bonus Share',
    termNp: 'बोनस सेयर (Bonus Share)',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    letter: 'B',
    abbreviation: null,
    synonyms: ['Stock Dividend', 'Free Shares', 'बोनस सेयर', 'पुँजीकृत सेयर'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A bonus share is an additional free share issued by a company to its existing shareholders in proportion to their current holdings, financed by converting retained earnings into paid-up capital.',
      np: 'बोनस सेयर (Bonus Share) भनेको कुनै कम्पनीले आफ्नो जगेडा कोषमा रहेको सञ्चित नाफालाई पुँजीमा रूपान्तरण गरी विद्यमान सेयरधनीहरूलाई उनीहरूको सेयर संख्याको अनुपातमा निःशुल्क वितरण गर्ने थप सेयर हो।'
    },
    detailedExplanation: {
      en: 'In contrast to cash dividends that drain liquid cash from the company\'s bank reserves, a bonus share keeps the capital retained inside the business while increasing the total number of issued shares. The company shifts funds from its "Retained Earnings / Reserve Fund" to its "Paid-Up Capital" line on the balance sheet. While the investor receives more physical share units in their Demat account, their proportional ownership percentage of the overall company remains mathematically identical. NEPSE adjusts the market price downward on the book closure date to reflect the expanded share supply.',
      np: 'नगद लाभांशले कम्पनीबाट नगद बाहिर पठाउँछ भने बोनस सेयरले उक्त नाफालाई कम्पनीभित्रै राखेर कुल सेयर संख्या बढाउँछ। यस प्रक्रियामा कम्पनीले वासलातको जगेडा कोष (Reserves) बाट रकम झिकेर चुक्ता पुँजी (Paid-up Capital) मा थप्दछ। सेयरधनीको डिम्याट खातामा सेयरको कित्ता संख्या बढे तापनि कम्पनीमा उनको स्वामित्वको प्रतिशत भने पहिलेकै जति रहन्छ। नयाँ सेयर थपिएपछि नेप्सेले बुक क्लोजको बिहान बजार मूल्यलाई सोही अनुपातमा समायोजन (Price Adjustment) गर्दछ।'
    },
    whyItMatters: {
      en: 'Bonus shares allow growing companies to reward loyal shareholders without depleting precious liquid capital needed for infrastructure projects or business expansion. For long-term investors, accumulating bonus shares over decades compounds total share counts exponentially, magnifying future cash dividend streams.',
      np: 'बोनस सेयरले व्यापार विस्तार वा नयाँ आयोजना निर्माणका लागि आवश्यक नगद कम्पनीमै जोगाएर सेयरधनीलाई सन्तुष्ट बनाउन मद्दत गर्छ। दीर्घकालीन लगानीकर्ताका लागि दशकौंसम्म बोनस सेयर जम्मा हुँदै जाँदा सेयर संख्या चक्रवर्ती रूपमा बढ्छ, जसले भविष्यमा आउने नगद लाभांशको मात्रा धेरै गुणा ठूलो बनाउँछ।'
    },
    howItWorks: {
      summary: {
        en: 'The issuance of bonus shares follows a structured capitalization cycle:',
        np: 'बोनस सेयर निष्कासन तथा वितरण ४ वटा मुख्य चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Capitalization Proposal', np: '१. पुँजीकरण प्रस्ताव' },
          desc: { en: 'The Board of Directors proposes a bonus percentage (e.g., 20% bonus) backed by sufficient accumulated reserve funds.', np: 'सञ्चालक समितिले जगेडा कोषको क्षमता अनुसार बोनस सेयरको प्रतिशत (जस्तै २०% बोनस) प्रस्ताव गर्छ।' }
        },
        {
          title: { en: '2. Sectoral & AGM Sanction', np: '२. साधारण सभा र नियामकको स्वीकृति' },
          desc: { en: 'Regulators (NRB / SEBON / NIA) approve the paid-up capital hike, followed by shareholder approval at the company AGM.', np: 'सम्बन्धित नियामक र वार्षिक साधारण सभाले कम्पनीको चुक्ता पुँजी वृद्धि गर्ने प्रस्ताव पारित गर्छन्।' }
        },
        {
          title: { en: '3. Price Adjustment by NEPSE', np: '३. नेप्सेद्वारा मूल्य समायोजन' },
          desc: { en: 'On the morning of Book Closure, NEPSE applies the mathematical adjustment formula to lower the opening trading price.', np: 'बुक क्लोजको दिन बजार खुल्नुअघि नेप्सेले तोकिएको सूत्र प्रयोग गरी सेयरको मूल्य घटाएर समायोजन गर्छ।' }
        },
        {
          title: { en: '4. Demat Listing & Credit', np: '४. सूचीकरण र डिम्याट दाखिला' },
          desc: { en: 'Following SEBON listing clearance, new shares are deposited directly into shareholders\' Demat accounts via CDSC.', np: 'धितोपत्र बोर्ड र नेप्सेमा सूचीकृत भएपछि नयाँ सेयर सीडीएससीमार्फत सोझै डिम्याट खातामा जम्मा हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Commercial bank capital expansion mandates directed by Nepal Rastra Bank',
        'Hydropower companies reinvesting cash earnings into second-stage hydro projects',
        'NEPSE portfolio valuation updates post-book closure',
        'Long-term compounding dividend portfolios'
      ],
      np: [
        'नेपाल राष्ट्र बैंकले तोकेको चुक्ता पुँजी पुर्‍याउन बैंक तथा वित्तीय संस्थाले गर्ने पुँजी वृद्धिमा',
        'जलविद्युत कम्पनीहरूले नगद जोगाएर नयाँ आयोजनामा लगानी गर्न लाभांश दिँदा',
        'बुक क्लोजपछि नेप्सेमा सेयरको समायोजित मूल्य निर्धारण गर्दा',
        'दीर्घकालीन चक्रवर्ती लगानी योजनामा सेयर संख्या बढाउन'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The NPR 8 Billion Capital Directive and NEPSE\'s Cultural Love for Bonus Shares',
        np: '८ अर्ब चुक्ता पुँजीको निर्देशन र नेपाली बजारमा बोनस सेयरको आकर्षण'
      },
      body: {
        en: 'In 2015, Nepal Rastra Bank mandated a fourfold increase in commercial bank paid-up capital-from NPR 2 billion to NPR 8 billion. To meet this target without collecting fresh cash, banks issued massive bonus shares year after year. Nepali investors historically celebrated bonus shares as "free money," mistakenly believing their total net worth doubled. In reality, while share quantity increased, company earnings were divided across a much larger share base, causing earnings per share (EPS) to plunge and market prices to adjust downwards. Understanding price adjustment is critical to evaluating bonus shares objectively.',
        np: 'विसं २०७२ मा नेपाल राष्ट्र बैंकले क वर्गका वाणिज्य बैंकहरूको चुक्ता पुँजी रु. २ अर्बबाट चार गुणा बढाएर रु. ८ अर्ब पुर्‍याउने निर्देशन दियो। सेयरधनीबाट नयाँ पैसा नउठाई यो सीमा पुर्‍याउन बैंकहरूले बर्सेनि ठूलो मात्रामा बोनस सेयर बाँडे। नेपाली समाजमा बोनस सेयरलाई "निःशुल्क सित्तैमा आएको सम्पत्ति" ठान्ने गलत बुझाइ रह्यो। तर वास्तविकतामा सेयर संख्या बढे पनि कम्पनीको नाफा बाँडिने आधार ठूलो भएकाले प्रतिसेयर आम्दानी (EPS) घट्यो र बजार मूल्य सोही अनुपातमा घटाइयो।'
      },
      keyPoints: {
        en: [
          'NEPSE automatically adjusts the market price downwards on book closure day.',
          'Your overall wealth on day one does not change: more shares * lower price = original value.',
          'Bonus shares dilute EPS unless the company grows profits at the same percentage.',
          'Bonus share distributions require payment of 5% dividend tax on the face value.'
        ],
        np: [
          'बुक क्लोजको दिन नेप्सेले सेयरको बजार मूल्य स्वतः घटाएर समायोजन गर्दछ।',
          'बोनस पाएको पहिलो दिन कुल सम्पत्ति परिवर्तन हुँदैन: बढी कित्ता * घटेको मूल्य = उही कुल रकम।',
          'कम्पनीको नाफा सोही अनुपातमा नबढेसम्म बोनस सेयरले प्रतिसेयर आम्दानी (EPS) घटाउँछ।',
          'बोनस सेयरमा पनि अंकित मूल्य (रु. १००) को ५% लाभांश कर लाग्दछ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Aashish owns 100 shares of a bank trading at NPR 400 per share (Total investment = NPR 40,000). The bank declares a 25% bonus share. On book closure morning, NEPSE adjusts the market price: Adjusted Price = 400 / (1 + 0.25) = NPR 320. Aashish now owns 125 shares worth NPR 320 each, totaling exactly NPR 40,000. He did not become richer overnight. However, if the bank grows its business over the next 3 years and the market price climbs back from NPR 320 to NPR 400, his portfolio will be worth NPR 50,000-a gain driven by business growth, not the mechanical bonus split.',
        np: 'आशिषसँग एउटा बैंकको १०० कित्ता सेयर छ, जसको बजार मूल्य रु. ४०० छ (कुल मूल्य = रु. ४०,०००)। बैंकले २५% बोनस सेयर घोषणा गर्छ। बुक क्लोजको बिहान नेप्सेले मूल्य समायोजन गर्छ: समायोजित मूल्य = ४०० / (१ + ०.२५) = रु. ३२०। अब आशिषसँग १२५ कित्ता सेयर हुन्छ जसको भाउ रु. ३२० का दरले ठ्याक्कै रु. ४०,००० नै हुन्छ। रातारात उनको सम्पत्ति बढेको होइन। तर भविष्यमा बैंकको नाफा बढेर सेयर मूल्य फेरि रु. ३२० बाट बढेर रु. ४०० पुगेमा उनको सम्पत्ति रु. ५०,००० पुग्छ।'
      },
      takeaway: {
        en: 'A bonus share increases share units but does not create immediate wealth on day one; wealth creation only happens when the underlying company grows its future profits.',
        np: 'बोनस सेयरले कित्ता संख्या थप्छ तर पहिलो दिनमै सम्पत्ति बढाउँदैन; दीर्घकालमा कम्पनीले नाफा बढाउँदै लगेपछि मात्र वास्तविक लाभ प्राप्त हुन्छ।'
      }
    },
    formula: {
      equation: 'Adjusted Price = Market Price before Book Closure / (1 + Bonus Fraction)',
      explanation: {
        en: 'Divide the last traded market price before book closure by 1 plus the bonus share percentage expressed as a decimal.',
        np: 'बुक क्लोज हुनुभन्दा अघिल्लो दिनको अन्तिम बजार मूल्यलाई १ मा बोनस प्रतिशत (दशमलवमा) जोडेर भाग गर्ने।'
      },
      variables: [
        { symbol: 'Market Price', label: { en: 'Closing share price before book closure date', np: 'बुक क्लोज अघिको अन्तिम कारोबार मूल्य' } },
        { symbol: 'Bonus Fraction', label: { en: 'Bonus % divided by 100 (e.g. 20% = 0.20)', np: 'बोनस प्रतिशत (जस्तै २०% भए ०.२०)' } }
      ],
      example: {
        scenario: {
          en: 'A stock closes at NPR 600 before book closure with a 20% bonus share declared.',
          np: '२०% बोनस सेयर घोषणा भएको कम्पनीको बुक क्लोज अघिको मूल्य रु. ६०० छ।'
        },
        calculation: {
          en: 'Adjusted Price = 600 / (1 + 0.20) = 600 / 1.20 = NPR 500.',
          np: 'समायोजित मूल्य = ६०० / (१ + ०.२०) = ६०० / १.२० = रु. ५००।'
        },
        result: {
          en: 'NPR 500 NEPSE Opening Price',
          np: 'नेप्सेमा रु. ५०० को सुरुवाती कारोबार मूल्य'
        }
      }
    },
    advantages: {
      en: [
        'Conserves liquid cash inside the company for productive capital expansion',
        'Increases your total share units without requiring fresh capital injection',
        'Lowers market price per share, improving trading liquidity on NEPSE',
        'Compounds long-term dividend streams as future payouts apply to higher share counts'
      ],
      np: [
        'कम्पनीको नगद बाहिर जानबाट जोगाएर नयाँ आयोजनामा लगानी गर्न मद्दत गर्छ',
        'खल्तीबाट थप पैसा नहालीकनै डिम्याट खातामा सेयरको कित्ता संख्या बढ्छ',
        'सेयरको बजार मूल्य सस्तो हुन गई दोस्रो बजारमा खरिदबिक्री तरलता बढ्छ',
        'भविष्यमा आउने नगद लाभांश बढेको सेयर संख्यामा पाइने हुनाले चक्रवर्ती फाइदा हुन्छ'
      ]
    },
    limitations: {
      en: [
        'Does not generate immediate liquid cash in your bank account',
        'Dilutes Earnings Per Share (EPS) and Return on Equity (ROE) if profits stagnate',
        'Investor must pay the 5% dividend tax unless covered by a cash dividend fraction',
        'Takes several weeks to months to be credited and tradeable in Demat accounts'
      ],
      np: [
        'नगद लाभांश जस्तो बैंक खातामा तत्काल खर्च गर्न मिल्ने नगद प्राप्त हुँदैन',
        'कम्पनीको नाफा नबढेमा प्रतिसेयर आम्दानी (EPS) र पुँजीको प्रतिफल (ROE) घट्छ',
        'बोनस सेयरको ५% कर तिर्न कम्पनीले नगद नछुट्याएमा लगानीकर्ताले खल्तीबाट तिर्नुपर्छ',
        'घोषणा भएपछि डिम्याट खातामा आएर दोस्रो बजारमा बेच्न मिल्न केही हप्ता लाग्न सक्छ'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'A 50% bonus share means the company just made you 50% richer.',
          np: '५०% बोनस सेयर पाउनु भनेको लगानीकर्ताको सम्पत्ति रातारात ५०% ले बढ्नु हो।'
        },
        reality: {
          en: 'NEPSE automatically reduces the stock price by 33.3% on book closure day. The total market value of your holding remains identical immediately after adjustment.',
          np: 'बुक क्लोजको दिन नेप्सेले सेयरको मूल्य सोही अनुपातमा घटाइदिन्छ। समायोजन लगत्तै तपाईंको कुल लगानीको मूल्य ठ्याक्कै उति नै रहन्छ।'
        }
      },
      {
        myth: {
          en: 'Bonus shares are completely tax-free in Nepal.',
          np: 'नेपालमा बोनस सेयर पाउँदा कुनै पनि प्रकारको कर लाग्दैन।'
        },
        reality: {
          en: 'Bonus shares are taxable at 5% of their par value (NPR 100). Companies usually propose a small cash dividend (e.g. 0.526%) specifically to cover this tax liability.',
          np: 'बोनस सेयरको अंकित मूल्य (रु. १००) मा ५% लाभांश कर लाग्छ। कम्पनीहरूले प्रायः यो कर तिर्नका लागि थोरै नगद लाभांश (जस्तै ०.५२६%) सँगै प्रस्ताव गर्छन्।'
        }
      }
    ],
    comparison: {
      title: { en: 'Bonus Share vs Rights Share', np: 'बोनस सेयर र हकप्रद सेयर बीचको तुलना' },
      subtitle: { en: 'Free capitalization of retained earnings vs paid subscription of fresh equity', np: 'निःशुल्क प्राप्त हुने सेयर र खल्तीबाट पैसा तिरेर किनिने सेयर बीचको भिन्नता' },
      featureHeader: { en: 'Factor', np: 'आधार' },
      colA: { en: 'Bonus Share', np: 'बोनस सेयर (Bonus Share)' },
      colB: { en: 'Rights Share', np: 'हकप्रद सेयर (Rights Share)' },
      rows: [
        {
          feature: { en: 'Cost to Investor', np: 'लगानीकर्ताले तिर्नुपर्ने लागत' },
          valA: { en: '100% Free (capitalized from company reserves)', np: 'पूर्ण निःशुल्क (कम्पनीको नाफाबाट पुँजीकृत)' },
          valB: { en: 'Must pay NPR 100 per share from personal bank', np: 'प्रति सेयर रु. १०० आफ्नै बैंकबाट तिर्नुपर्ने' }
        },
        {
          feature: { en: 'Sign of Company Health', np: 'कम्पनीको वित्तीय अवस्था' },
          valA: { en: 'Indicates strong accumulated past profits and reserves', np: 'कम्पनी नाफामा चलेको र पर्याप्त जगेडा कोष भएको संकेत' },
          valB: { en: 'Company needs fresh cash; may indicate capital deficiency', np: 'कम्पनीलाई नयाँ पुँजी आवश्यक परेको वा कर्जा तिर्नुपरेको संकेत' }
        },
        {
          feature: { en: 'Obligation to Apply', np: 'आवेदन दिनुपर्ने बाध्यता' },
          valA: { en: 'Automatic deposit into Demat; no action required', np: 'स्वतः डिम्याट खातामा आउँछ; केही गर्नु पर्दैन' },
          valB: { en: 'Must actively apply via MeroShare or rights lapse', np: 'मेरोसेयरमार्फत फारम भरेर पैसा तिर्नै पर्छ' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'dividend', name: 'Dividend', type: 'glossary' },
      { slug: 'rights-share', name: 'Rights Share', type: 'glossary' },
      { slug: 'capital-gain', name: 'Capital Gain', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Understanding Stock Dividends & Bonus Shares', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Bonus Share Adjustment Calculator', slug: 'bonus-share-adjustment', desc: 'Calculate the post-bonus adjusted stock price on NEPSE.' }
    ],
    faqs: [
      {
        q: { en: 'How long does it take for bonus shares to appear in my Demat account?', np: 'घोषणा भएको बोनस सेयर डिम्याट खातामा आउन कति समय लाग्छ?' },
        a: {
          en: 'After AGM approval, the company must register the shares with SEBON, list them on NEPSE, and credit them through CDSC. This process typically takes between 1 to 3 months in Nepal.',
          np: 'साधारण सभाले पारित गरेपछि धितोपत्र बोर्डमा दर्ता, नेप्सेमा सूचीकरण र सीडीएससीमार्फत डिम्याटमा पठाउन सामान्यतया १ देखि ३ महिनासम्मको समय लाग्छ।'
        }
      },
      {
        q: { en: 'Why do companies announce odd dividend figures like "0.526% Cash Dividend"?', np: 'कम्पनीहरूले ०.५२६% जस्तो अनौठो दरमा नगद लाभांश किन घोषणा गर्छन्?' },
        a: {
          en: 'That fraction is the exact 5% dividend tax required on the bonus shares. For example, a 10% bonus share requires a 5% tax on its NPR 10 par value, which equals NPR 0.50 (or 0.50% cash). The company pays the government directly so shareholders do not face tax dues.',
          np: 'त्यो अनौठो देखिने नगद लाभांश वास्तवमा बोनस सेयरमा लाग्ने ५% कर तिर्नका लागि छुट्याइएको रकम हो। कम्पनीले सेयरधनीको तर्फबाट सिधै सरकारलाई कर तिरिदिन यस्तो नगद लाभांश घोषणा गर्छ।'
        }
      },
      {
        q: { en: 'Can a loss-making company issue bonus shares in Nepal?', np: 'के घाटामा चलेको कम्पनीले नेपालमा बोनस सेयर बाँड्न पाउँछ?' },
        a: {
          en: 'A company can only issue bonus shares if it holds sufficient distributable accumulated reserves from past profits. However, SEBON and NRB regulations strictly prohibit companies from using revaluation reserves or fictitious book values to issue bonus shares.',
          np: 'विगतका वर्षहरूको सञ्चित नाफा (Retained Earnings) सुरक्षित छ भने मात्र कम्पनीले बोनस दिन सक्छ। तर सम्पत्तिको कृत्रिम पुनर्मूल्याङ्कन (Revaluation Reserve) गरेर बोनस बाँड्न धितोपत्र बोर्ड र राष्ट्र बैंकले कडा रोक लगाएका छन्।'
        }
      },
      {
        q: { en: 'What is the base price for capital gains tax when I sell my bonus shares?', np: 'बोनस सेयर बेच्दा पुँजीगत लाभकर (CGT) का लागि लागत मूल्य कति मानिन्छ?' },
        a: {
          en: 'Under IRD rules, the base cost of bonus shares is considered NPR 100 per share (their par value). When you sell bonus shares on NEPSE, capital gains tax (5% or 7.5%) applies to the difference between your net selling price and NPR 100.',
          np: 'आन्तरिक राजस्व विभागको नियम अनुसार बोनस सेयरको लागत मूल्य प्रति कित्ता रु. १०० (अंकित मूल्य) मानिन्छ। दोस्रो बजारमा बोनस सेयर बिक्री गर्दा बिक्री मूल्यबाट रु. १०० घटाएर बाँकी नाफामा ५% वा ७.५% लाभकर लाग्दछ।'
        }
      }
    ],
    summary: {
      en: [
        'Bonus shares are free shares issued by capitalizing retained earnings into paid-up capital.',
        'NEPSE adjusts the market price downward on book closure morning, keeping day-one net worth unchanged.',
        'Bonus shares conserve cash for business expansion while increasing the investor\'s unit count.',
        'Wealth creation from bonus shares occurs over multi-year horizons as company earnings expand.'
      ],
      np: [
        'बोनस सेयर भनेको कम्पनीको सञ्चित नाफालाई पुँजीमा रूपान्तरण गरी दिइने निःशुल्क सेयर हो।',
        'बुक क्लोजको दिन नेप्सेले मूल्य घटाएर समायोजन गर्ने भएकाले पहिलो दिनमै सम्पत्ति बढ्दैन।',
        'यसले कम्पनीको नगद जोगाएर व्यापार विस्तार गर्न मद्दत गर्छ र सेयरधनीको कित्ता संख्या बढाउँछ।',
        'कम्पनीले भविष्यमा नाफा बढाउँदै लगेपछि मात्र बोनस सेयरबाट वास्तविक पुँजी वृद्धि हुन्छ।'
      ]
    },
    whereSeen: [
      { title: 'Bonus Share Adjustment Calculator', type: 'Calculator', url: '/calculators/bonus-share-adjustment' },
      { title: 'Stock Dividends Lesson', type: 'Lesson', url: '/learn/nepse/what-is-investing' }
    ],
    meta: {
      title: 'What is a Bonus Share in Nepal? Price Adjustment & Rules | risePaisa',
      description: 'Understand bonus shares on NEPSE. Learn how price adjustment works, the difference between bonus and rights shares, and taxation rules in Nepal.'
    }
  },

  // 6. RIGHTS SHARE
  {
    slug: 'rights-share',
    term: 'Rights Share',
    termNp: 'हकप्रद सेयर (Rights Share)',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    letter: 'R',
    abbreviation: null,
    synonyms: ['Rights Offering', 'Right Issue', 'हकप्रद सेयर', 'अग्राधिकार सेयर'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A rights share is an invitation to existing shareholders to purchase additional new shares of a company directly at par value (usually NPR 100), in proportion to their existing shareholdings.',
      np: 'हकप्रद सेयर (Rights Share) भनेको कुनै कम्पनीले आफ्नो पुँजी वृद्धि गर्नका लागि विद्यमान सेयरधनीहरूलाई उनीहरूको सेयर संख्याको अनुपातमा अंकित मूल्य (प्रायः रु. १००) मै थप नयाँ सेयर किन्ने अग्राधिकार दिनु हो।'
    },
    detailedExplanation: {
      en: 'When a publicly listed company requires substantial fresh cash to pay off bank loans, construct new infrastructure projects, or meet statutory regulatory capital minimums, it issues rights shares. Unlike an IPO which is open to the entire public, a rights issue is offered exclusively to current registered shareholders as a statutory right. If an investor owns 100 shares and a 1:1 (100%) rights issue is declared, they have the legal right to purchase 100 additional shares at NPR 100 each, regardless of how high the stock trades on NEPSE.',
      np: 'जब कुनै सूचीकृत कम्पनीलाई बैंकको ऋण तिर्न, नयाँ आयोजना निर्माण गर्न वा नियामकले तोकेको न्यूनतम पुँजी पुर्‍याउन नयाँ नगदको आवश्यकता पर्छ, तब उसले हकप्रद सेयर निष्कासन गर्छ। सबै सर्वसाधारणका लागि खुला हुने आइपिओ जस्तो नभई हकप्रद सेयर विद्यमान सेयरधनीहरूका लागि मात्र आरक्षित हुन्छ। यदि कुनै लगानीकर्तासँग १०० कित्ता सेयर छ र कम्पनीले १:१ (१००%) हकप्रद खुलायो भने उसले दोस्रो बजारको भाउ जतिसुकै भए पनि प्रति कित्ता रु. १०० मै थप १०० कित्ता सेयर खरिद गर्न पाउँछ।'
    },
    whyItMatters: {
      en: 'A rights issue directly impacts your investment portfolio. If you apply for your allotted rights, you acquire shares at a deep discount to the market price. However, if you ignore the offering and fail to apply, your ownership stake will be diluted and your investment value will drop due to NEPSE’s post-rights price adjustment. In Nepal, shareholders must actively decide whether to fund the rights or sell shares before book closure.',
      np: 'हकप्रद सेयरले तपाईंको लगानीमा प्रत्यक्ष प्रभाव पार्छ। यदि तपाईंले आफ्नो हक अनुसार आवेदन दिनुभयो भने बजार मूल्यभन्दा निकै सस्तो (रु. १००) मा सेयर थपिन्छ। तर यदि तपाईंले आवेदन दिनुभएन भने नेप्सेमा हुने मूल्य समायोजनका कारण तपाईंको कुल सम्पत्तिको मूल्य घट्छ र स्वामित्व पातलिन्छ (Dilution)। त्यसैले हकप्रद भर्ने पैसा नभए बुक क्लोज अगावै सेयर बेच्नुपर्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The operational mechanics of a rights offering in Nepal follow 4 mandatory steps:',
        np: 'नेपालमा हकप्रद सेयर निष्कासन प्रक्रिया ४ वटा चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Regulatory Approval & Ratio Setting', np: '१. अनुपात निर्धारण र धितोपत्र बोर्डको स्वीकृति' },
          desc: { en: 'The AGM endorses the rights ratio (e.g. 1:0.5 or 50%), followed by formal review and sanction by SEBON.', np: 'साधारण सभाले हकप्रदको अनुपात (जस्तै १:०.५ अर्थात् ५०%) पारित गर्छ र धितोपत्र बोर्ड (SEBON) बाट अन्तिम स्वीकृति लिइन्छ।' }
        },
        {
          title: { en: '2. Book Closure & Price Adjustment', np: '२. बुक क्लोज र मूल्य समायोजन' },
          desc: { en: 'A book closure date is set. On that morning, NEPSE adjusts the market price based on the blend of market value and NPR 100 par value.', np: 'बुक क्लोजको दिन नेप्सेले सेयरको बजार मूल्य र रु. १०० को अनुपात मिलाएर नयाँ समायोजित मूल्य तोक्दछ।' }
        },
        {
          title: { en: '3. Application via MeroShare', np: '३. मेरोसेयरबाट आवेदन' },
          desc: { en: 'The issue opens for approximately 21 to 35 days. Shareholders apply for their allotted quota online using MeroShare C-ASBA.', np: 'निष्कासन अवधि (प्रायः २१ देखि ३५ दिन) भर सेयरधनीहरूले मेरोसेयरको सी-आस्बा प्रणालीमार्फत आफ्ना लागि छुट्याइएको कोटा बराबरको रकम तिरेर आवेदन दिन्छन्।' }
        },
        {
          title: { en: '4. Unsubscribed Share Auction', np: '४. अवितरित सेयरको लिलामी (Auction)' },
          desc: { en: 'Rights units that shareholders failed to buy are packaged into a public auction open to all institutional and retail bidders.', np: 'सेयरधनीहरूले खरिद नगरेका बाँकी सेयरहरूलाई कम्पनीले सर्वसाधारण र संस्थागत लगानीकर्ताका लागि गोप्य शिलबन्दी लिलामी (Auction) मार्फत बिक्री गर्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Hydropower companies raising fresh equity to complete construction delays',
        'Finance and microfinance institutions meeting NRB capital adequacy norms',
        'NEPSE rights application tab on MeroShare portal',
        'Public auction bidding for unsubscribed promoter and ordinary shares'
      ],
      np: [
        'जलविद्युत आयोजनाहरूले निर्माण लागत बढेपछि बैंक ऋण तिर्न नयाँ पुँजी उठाउँदा',
        'नेपाल राष्ट्र बैंकको पुँजी कोष (Capital Adequacy) पूरा गर्न वित्तीय संस्थाहरूले जारी गर्दा',
        'मेरोसेयर पोर्टलको "Apply for Issue" भित्रको राइट्स सेयर ट्याबमा',
        'हकप्रद नभरिएका बाँकी सेयरको सार्वजनिक लिलामी (Auction) बोलकबोलमा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Hydropower Rights Wave and the Unsubscribed Auction Market in Nepal',
        np: 'नेपालमा हाइड्रोपावर कम्पनीहरूको हकप्रद लहर र लिलामी बजार'
      },
      body: {
        en: 'In recent years, SEBON permitted numerous listed hydropower companies to issue 50% to 100% rights shares specifically to pay off high-interest bank consortium loans. While this clears debt from the company\'s books, it requires shareholders to continuously pump new personal cash into the company. Many retail investors fail to monitor book closure dates or lack spare liquidity, leading thousands of rights shares to lapse unapplied. These unclaimed units are subsequently auctioned by merchant bankers, where savvy institutional and high-net-worth investors bid slightly below market price to acquire large blocks of stock.',
        np: 'पछिल्ला वर्षहरूमा धितोपत्र बोर्डले धेरै जलविद्युत कम्पनीहरूलाई बैंकको महँगो कर्जा तिर्नका लागि ५०% देखि १००% सम्मको हकप्रद सेयर निष्कासन गर्न अनुमति दिएको छ। यसले कम्पनीको ऋण घटाए तापनि सेयरधनीहरूको खल्तीबाट थप पैसा माग गर्दछ। धेरै साना लगानीकर्ताले समयमै सूचना नपाएर वा रकम अभावका कारण हकप्रद नभर्दा हजारौं कित्ता सेयर खेर जान्छ। यसरी बाँकी रहेको अवितरित सेयरलाई क्यापिटलहरूले सार्वजनिक लिलामी (Auction) मा निकाल्छन्, जहाँ अनुभवी लगानीकर्ताले बजारभन्दा केही सस्तो मूल्यमा बोलपत्र हालेर सेयर किन्ने गर्छन्।'
      },
      keyPoints: {
        en: [
          'Rights shares require you to invest fresh money at NPR 100 per share.',
          'If you don’t plan to apply, sell your shares before book closure to avoid price adjustment loss.',
          'Applications must be submitted through MeroShare C-ASBA before the closing deadline.',
          'Unsubscribed rights shares are sold via open competitive public auction.'
        ],
        np: [
          'हकप्रद सेयर भर्नका लागि प्रति कित्ता रु. १०० का दरले नयाँ पैसा लगानी गर्नै पर्छ।',
          'यदि हकप्रद भर्ने पैसा छैन भने मूल्य समायोजनको घाटाबाट बच्न बुक क्लोज अगावै सेयर बेच्नुपर्छ।',
          'आवेदन तोकिएको म्यादभित्र मेरोसेयरको सी-आस्बा प्रणालीबाट अनलाइन भर्नुपर्छ।',
          'नभरिएका अवितरित हकप्रद सेयरहरू सार्वजनिक शिलबन्दी लिलामी (Auction) बाट बिक्री गरिन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Sita owns 200 shares of a hydropower company trading on NEPSE at NPR 300 per share (Portfolio value = NPR 60,000). The company announces a 1:1 (100%) rights issue. On book closure morning, NEPSE adjusts the market price: Adjusted Price = (300 + 100) / 2 = NPR 200 per share. Sita applies for her allotted 200 rights shares via MeroShare, paying NPR 20,000 (200 * NPR 100). Her new portfolio consists of 400 shares at NPR 200 = NPR 80,000 (her original NPR 60,000 + NPR 20,000 new cash). If Sita had ignored the rights issue and failed to apply, she would still hold only 200 shares, but now valued at only NPR 200 = NPR 40,000, suffering a direct NPR 20,000 loss from dilution!',
        np: 'सीतासँग नेप्सेमा रु. ३०० मा कारोबार भइरहेको एउटा हाइड्रोपावर कम्पनीको २०० कित्ता सेयर छ (कुल मूल्य = रु. ६०,०००)। कम्पनीले १:१ (१००%) हकप्रद निष्कासन गर्छ। बुक क्लोजको बिहान नेप्सेले मूल्य समायोजन गर्छ: नयाँ मूल्य = (३०० + १००) / २ = रु. २०० प्रति कित्ता। सीताले मेरोसेयरबाट २०० कित्ता हकप्रदका लागि रु. २०,००० (२०० * रु. १००) तिरेर आवेदन दिन्छिन्। अब उनीसँग ४०० कित्ता सेयर हुन्छ जसको भाउ रु. २०० का दरले रु. ८०,००० पुग्छ (६०,००० पुरानो + २०,००० नयाँ नगद)। तर यदि सीताले हकप्रद नभरेको भए उनीसँग २०० कित्ता मात्र बाँकी रहन्थ्यो, जसको भाउ रु. २०० का दरले घटेर रु. ४०,००० मा झर्थ्यो र उनलाई सिधै रु. २०,००० को घाटा हुन्थ्यो!'
      },
      takeaway: {
        en: 'A rights issue is not an optional bonus; you must either subscribe with fresh cash to preserve your wealth or sell your holdings prior to the book closure date.',
        np: 'हकप्रद सेयर सित्तैमा पाउने बोनस होइन; आफ्नो सम्पत्तिको रक्षा गर्न कि त नयाँ पैसा हालेर हकप्रद भर्नुपर्छ, कि त बुक क्लोज हुनुअगावै सेयर बेचेर बाहिरिनुपर्छ।'
      }
    },
    formula: {
      equation: 'Adjusted Price = (Current Market Price + (Rights Ratio * Par Value)) / (1 + Rights Ratio)',
      explanation: {
        en: 'Add the market price to the product of the rights ratio and the NPR 100 par value, then divide by 1 plus the rights ratio.',
        np: 'बजार मूल्यमा हकप्रद अनुपात र रु. १०० को गुणनफल जोड्ने, र त्यसलाई १ मा हकप्रद अनुपात जोडेर भाग गर्ने।'
      },
      variables: [
        { symbol: 'Market Price', label: { en: 'Share price before book closure', np: 'बुक क्लोज अघिको बजार मूल्य' } },
        { symbol: 'Rights Ratio', label: { en: 'Offered ratio as decimal (e.g. 1:0.5 = 0.50)', np: 'हकप्रद अनुपात (जस्तै १:०.५ भए ०.५०)' } },
        { symbol: 'Par Value', label: { en: 'Subscription cost per share (NPR 100 in Nepal)', np: 'अंकित मूल्य (नेपालमा रु. १००)' } }
      ],
      example: {
        scenario: {
          en: 'A stock trading at NPR 400 issues a 1:0.5 (50%) rights share at NPR 100.',
          np: 'रु. ४०० मा चलेको सेयरले ५०% (१:०.५) हकप्रद सेयर निष्कासन गर्दा।'
        },
        calculation: {
          en: 'Adjusted Price = (400 + (0.50 * 100)) / (1 + 0.50) = (400 + 50) / 1.50 = 450 / 1.50 = NPR 300.',
          np: 'समायोजित मूल्य = (४०० + (०.५० * १००)) / (१ + ०.५०) = ४५० / १.५० = रु. ३००।'
        },
        result: {
          en: 'NPR 300 Adjusted Opening Price on NEPSE',
          np: 'नेप्सेमा रु. ३०० को सुरुवाती समायोजित मूल्य'
        }
      }
    },
    advantages: {
      en: [
        'Enables shareholders to acquire new shares at NPR 100 par value regardless of high market prices',
        'Protects existing shareholders against outside control and hostile takeovers',
        'Provides direct capital to the company without paying hefty commercial bank loan interest',
        'Zero underwriting broker fees or commissions when applying directly via C-ASBA'
      ],
      np: [
        'बजार मूल्य जतिसुकै महँगो भए पनि अंकित मूल्य (रु. १००) मै नयाँ सेयर थप्ने अवसर दिन्छ',
        'विद्यमान सेयरधनीहरूको स्वामित्वको हक बाहिरी व्यक्तिको हातमा जानबाट जोगाउँछ',
        'कम्पनीले बैंकबाट महँगो ब्याजमा ऋण लिनुको साटो आफ्नै सेयरधनीबाट सस्तो पुँजी जुटाउन पाउँछ',
        'मेरोसेयरको सी-आस्बाबाट सिधै फारम भर्दा कुनै अतिरिक्त दलाली कमिसन लाग्दैन'
      ]
    },
    limitations: {
      en: [
        'Requires shareholders to inject fresh out-of-pocket cash',
        'Failing to apply results in direct wealth destruction due to NEPSE price adjustment',
        'Substantially increases market share supply, often depressing long-term stock prices',
        'Frequently used by poorly managed companies simply to repay bad commercial debt'
      ],
      np: [
        'सेयरधनीले खल्तीबाट आफ्नै नयाँ नगद पैसा थप्नुपर्ने बाध्यता हुन्छ',
        'हकप्रद नभरेमा मूल्य समायोजनका कारण लगानीको मूल्यमा सिधै क्षति पुग्छ',
        'बजारमा सेयर संख्या धेरै थपिने हुनाले सेयर मूल्य लामो समयसम्म नबढ्ने जोखिम रहन्छ',
        'धेरैजसो कमजोर कम्पनीहरूले आफ्नो बैंक ऋण तिर्न मात्र यसको सहारा लिने गर्छन्'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Rights shares are a free gift just like bonus shares.',
          np: 'हकप्रद सेयर पनि बोनस सेयर जस्तै कम्पनीले सित्तैमा दिने उपहार हो।'
        },
        reality: {
          en: 'Rights shares are never free. You must pay NPR 100 per share from your bank account to subscribe to your quota.',
          np: 'हकप्रद सेयर कहिल्यै निःशुल्क हुँदैन। आफ्नो कोटाको सेयर लिनका लागि प्रति कित्ता रु. १०० का दरले बैंक खाताबाट रकम तिर्नै पर्छ।'
        }
      },
      {
        myth: {
          en: 'If you do not apply for your rights shares, nothing happens and you lose nothing.',
          np: 'हकप्रद सेयर नभरे पनि केही फरक पर्दैन र कुनै नोक्सानी हुँदैन।'
        },
        reality: {
          en: 'Because NEPSE adjusts the market price downward on book closure, failing to apply causes severe capital dilution. Your shares are now worth less per unit.',
          np: 'बुक क्लोजको दिन नेप्सेले बजार भाउ घटाइदिने भएकाले हकप्रद नभर्दा तपाईंको सेयरको मूल्य सिधै घट्छ र ठूलो आर्थिक नोक्सानी हुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Rights Share vs Initial Public Offering (IPO)', np: 'हकप्रद सेयर र प्राथमिक सेयर (IPO) बीचको भिन्नता' },
      subtitle: { en: 'Existing shareholder subscription vs broad public market capital raising', np: 'विद्यमान सेयरधनीका लागि निष्कासन र आम सर्वसाधारणका लागि खुला निष्कासन' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Rights Share', np: 'हकप्रद सेयर (Rights Share)' },
      colB: { en: 'Initial Public Offering (IPO)', np: 'प्राथमिक सेयर (IPO)' },
      rows: [
        {
          feature: { en: 'Target Audience', np: 'लक्षित लगानीकर्ता' },
          valA: { en: 'Existing registered shareholders only', np: 'कम्पनीका पुराना विद्यमान सेयरधनीहरू मात्र' },
          valB: { en: 'All Nepali citizens with Demat accounts', np: 'डिम्याट खाता भएका सम्पूर्ण सर्वसाधारण नागरिक' }
        },
        {
          feature: { en: 'Allotment Guarantee', np: 'सेयर पाउने ग्यारेन्टी' },
          valA: { en: '100% guaranteed up to your allotted ratio', np: 'आफ्नो अनुपात अनुसार शतप्रतिशत निश्चित पाइने' },
          valB: { en: 'Lottery based (10 kitta system) due to oversubscription', np: '१० कित्ता गोलाप्रथामा भाग्यमा भर पर्नुपर्ने' }
        },
        {
          feature: { en: 'Price Adjustment', np: 'मूल्य समायोजन' },
          valA: { en: 'Triggers official NEPSE price adjustment', np: 'नेप्सेमा पुरानो सेयरको मूल्य समायोजन हुन्छ' },
          valB: { en: 'No price adjustment; establishes new listing', np: 'नयाँ सूचीकरण हुने हुनाले मूल्य समायोजन हुँदैन' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'bonus-share', name: 'Bonus Share', type: 'glossary' },
      { slug: 'ipo', name: 'IPO', type: 'glossary' },
      { slug: 'asba', name: 'ASBA', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Understanding Stock Dividends & Bonus Shares', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Rights Share Adjustment Calculator', slug: 'rights-share-adjustment', desc: 'Calculate the post-rights adjusted share price on NEPSE.' }
    ],
    faqs: [
      {
        q: { en: 'What should I do if I cannot afford to apply for my rights shares?', np: 'यदि मसँग हकप्रद सेयर भर्ने पैसा छैन भने मैले के गर्नुपर्छ?' },
        a: {
          en: 'If you lack cash to subscribe, sell your shares on NEPSE before the announced Book Closure Date. By selling beforehand, you exit at the unadjusted higher market price, avoiding dilution losses entirely.',
          np: 'यदि हकप्रद भर्ने पैसा छैन भने तोकिएको बुक क्लोज हुनुभन्दा अघिल्लो दिन नै दोस्रो बजारमा सेयर बिक्री गर्नुहोस्। यसो गर्दा मूल्य समायोजन हुनु अगावै उच्च मूल्यमा नगद प्राप्त हुन्छ र घाटाबाट बचिन्छ।'
        }
      },
      {
        q: { en: 'Can I apply for more rights shares than my allotted quota?', np: 'के मलाई छुट्याइएको कोटाभन्दा बढी हकप्रद सेयरका लागि आवेदन दिन मिल्छ?' },
        a: {
          en: 'No. Under SEBON C-ASBA rules, MeroShare restricts your application strictly to your exact eligible rights quantity. However, you can bid for unsubscribed shares later during the public auction.',
          np: 'मिल्दैन। मेरोसेयरको प्रणालीले तपाईंका लागि तोकिएको निश्चित कोटाभन्दा बढी आवेदन दिन दिँदैन। तर पछि नबिकेको सेयरको लिलामी (Auction) खुल्दा भने जति पनि कित्ताका लागि बोलपत्र हाल्न सकिन्छ।'
        }
      },
      {
        q: { en: 'What is a rights share auction in Nepal?', np: 'नेपालमा हकप्रद सेयर लिलामी (Auction) भनेको के हो?' },
        a: {
          en: 'When existing shareholders fail to apply for their full quota, the leftover shares cannot be cancelled. The company hires an issue manager to auction them publicly. Anyone can submit sealed bids stating how many shares they want and at what price (minimum NPR 100). The highest bidders win the shares.',
          np: 'सेयरधनीहरूले नभरेका बाँकी सेयरहरूलाई क्यापिटलमार्फत सार्वजनिक रूपमा शिलबन्दी लिलामीमा निकालिन्छ। यसमा जोसुकैले न्यूनतम रु. १०० तोकेर आफूले चाहेको मूल्य र कित्ता उल्लेख गरी गोप्य बोलपत्र बुझाउन सक्छन्। सबैभन्दा बढी मूल्य तोक्नेले सेयर पाउँछन्।'
        }
      },
      {
        q: { en: 'How do I apply for rights shares on MeroShare?', np: 'मेरोसेयरबाट हकप्रद सेयर कसरी भर्ने?' },
        a: {
          en: 'Log in to MeroShare, navigate to "C-ASBA", click "Apply for Issue", locate your company\'s rights issue, select your linked bank account, enter your CRN number, verify your allotted quantity, and submit with your 4-digit transaction PIN.',
          np: 'मेरोसेयरमा लगइन गरी "C-ASBA" मा जाने, "Apply for Issue" मा गएर सम्बन्धित कम्पनीको राइट्स छनोट गर्ने, आफ्नो बैंक खाता र सीआरएन (CRN) नम्बर छानेर आफ्नो कोटा यकिन गरी ४ अंकको पिन हानेर आवेदन बुझाउने।'
        }
      }
    ],
    summary: {
      en: [
        'A rights share invites existing shareholders to buy new shares at par value (NPR 100) based on an established ratio.',
        'NEPSE adjusts the market price downward on book closure morning.',
        'Shareholders must either fund their rights application or sell their holdings before book closure to avoid capital dilution.',
        'Unclaimed rights units are sold to the public through competitive sealed-bid auctions.'
      ],
      np: [
        'हकप्रद सेयरले विद्यमान सेयरधनीहरूलाई प्रति कित्ता रु. १०० अंकित मूल्यमा थप सेयर किन्ने अग्राधिकार दिन्छ।',
        'बुक क्लोजको दिन नेप्सेले सेयरको बजार मूल्य स्वतः घटाएर समायोजन गर्दछ।',
        'सम्पत्तिको नोक्सानी हुन नदिन सेयरधनीले कि त हकप्रद भर्नुपर्छ, कि त बुक क्लोज अगावै सेयर बेच्नुपर्छ।',
        'नभरिएका अवितरित सेयरहरू सार्वजनिक शिलबन्दी लिलामी (Auction) मार्फत सर्वसाधारणलाई बिक्री गरिन्छ।'
      ]
    },
    whereSeen: [
      { title: 'Rights Share Adjustment Calculator', type: 'Calculator', url: '/calculators/rights-share-adjustment' },
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' }
    ],
    meta: {
      title: 'What is a Rights Share in Nepal? Formula & MeroShare Guide | risePaisa',
      description: 'Master rights share offerings on NEPSE. Learn how price adjustment works, step-by-step MeroShare application guide, and auction dynamics in Nepal.'
    }
  },

  // 7. CAPITAL GAIN
  {
    slug: 'capital-gain',
    term: 'Capital Gain & CGT',
    termNp: 'पुँजीगत लाभ र लाभकर (Capital Gain & CGT)',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    letter: 'C',
    abbreviation: 'CGT',
    synonyms: ['Capital Gains Tax', 'CGT', 'पुँजीगत लाभकर', 'सेयर नाफा कर'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A capital gain is the profit realized when an asset or security is sold for a higher price than its original purchase cost; in Nepal, this profit is subject to Capital Gains Tax (CGT).',
      np: 'पुँजीगत लाभ (Capital Gain) भनेको कुनै सम्पत्ति वा सेयर आफूले किनेको लागतभन्दा बढी मूल्यमा बिक्री गर्दा प्राप्त हुने खुद नाफा हो; नेपालमा यस्तो नाफामा कानुन अनुसार पुँजीगत लाभकर (CGT) तिर्नुपर्छ।'
    },
    detailedExplanation: {
      en: 'Capital gains represent the appreciation in the market value of your investments realized upon sale. In Nepal’s capital markets, capital gains are categorized into short-term and long-term gains based on how long you held the asset. The government levies Capital Gains Tax (CGT) at the source when you sell securities on NEPSE. If an investor holds a stock for less than 365 days, they are classified as a short-term investor and taxed at 7.5%. If the stock is held for 365 days or longer, they qualify as a long-term investor and enjoy a discounted tax rate of 5.0%. Institutional corporate entities pay a flat 10% CGT.',
      np: 'लगानी गरिएको सम्पत्ति बिक्री गर्दा हुने नाफा नै पुँजीगत लाभ हो। नेपालको धितोपत्र बजारमा सेयर होल्ड गरेको समयावधिको आधारमा पुँजीगत लाभलाई अल्पकालीन र दीर्घकालीन गरी दुई भागमा वर्गीकरण गरिएको छ। नेप्सेमा सेयर बेच्दा ब्रोकर टीएमएसले स्वचालित रूपमा स्रोतमा पुँजीगत लाभकर (CGT) कट्टी गर्दछ। यदि सेयर किनेको ३६५ दिन (१ वर्ष) भन्दा कम अवधिमा बेचेमा अल्पकालीन लगानीकर्ता मानिँदै ७.५% कर लाग्छ। तर ३६५ दिन वा सोभन्दा बढी अवधि राखेर बेचेमा ५.०% मात्र सहुलियत दरमा कर लाग्छ। संस्थागत कम्पनीहरूका लागि भने १०% कर तोकिएको छ।'
    },
    whyItMatters: {
      en: 'Taxes directly impact net investment returns. Understanding the 365-day holding threshold allows Nepali retail investors to save substantial money legally: holding a stock just a few days longer to cross 365 days cuts the tax burden by 33.3% (from 7.5% down to 5.0%). Accurate calculation of the Weighted Average Cost (WACC) on MeroShare ensures you are never overtaxed by tax authorities.',
      np: 'करले तपाईंको खल्तीमा आउने वास्तविक नाफा निर्धारण गर्छ। ३६५ दिने सीमा बुझ्नु नेपाली लगानीकर्ताका लागि निकै फाइदाजनक छ: कुनै सेयरलाई केही दिन थप होल्ड गरेर ३६५ दिन कटाउँदा करको भार सिधै ३३.३% ले घट्छ (७.५% बाट घटेर ५.०% मा झर्छ)। साथै मेरोसेयरमा आफ्नो भारित औसत लागत (WACC) सही हिसाब गर्दा बढी कर तिर्नुपर्ने जोखिमबाट बचिन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The calculation and deduction of Capital Gains Tax on NEPSE occurs in 4 sequential steps:',
        np: 'नेप्सेमा पुँजीगत लाभकर हिसाब र कट्टी हुने प्रक्रिया ४ चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Trade Execution', np: '१. सेयर बिक्री कारोबार' },
          desc: { en: 'You execute a sell order on NEPSE TMS at the prevailing market price.', np: 'ब्रोकर टिएमएस (TMS) मार्फत आफ्नो सेयर हालको बजार भाउमा बिक्री गरिन्छ।' }
        },
        {
          title: { en: '2. WACC Calculation in MeroShare', np: '२. मेरोसेयरमा WACC प्रमाणीकरण' },
          desc: { en: 'Log in to MeroShare, navigate to "My Purchase Source", and calculate/confirm your Weighted Average Cost (WACC) and holding duration.', np: 'मेरोसेयरको "My Purchase Source" मा गएर आफ्नो सेयरको खरिद लागत (WACC) र होल्डिङ दिन हिसाब गरी स्वीकृत गरिन्छ।' }
        },
        {
          title: { en: '3. Net Profit Determination', np: '३. खुद नाफा निर्धारण' },
          desc: { en: 'The system deducts purchase cost, broker commissions, SEBON regulatory fees (0.015%), and DP charges from the gross sales revenue.', np: 'बिक्री रकमबाट खरिद लागत, ब्रोकर कमिसन, धितोपत्र बोर्ड शुल्क (०.०१५%) र डीपी शुल्क घटाई खुद नाफा निकालिन्छ।' }
        },
        {
          title: { en: '4. Automated TDS Withholding', np: '४. स्वचालित कर कट्टी' },
          desc: { en: 'If the net result is positive, the broker withholds 5% or 7.5% CGT directly before crediting the net payout to your bank account.', np: 'नाफा भएको भए ब्रोकरले ५% वा ७.५% लाभकर कट्टी गरी बाँकी रकम मात्र लगानीकर्ताको बैंक खातामा पठाउँछ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'NEPSE stock trading settlements and broker contract notes',
        'Land Revenue Offices (Malpot) during physical property transfers (5%-7.5%)',
        'MeroShare EDIS and My Purchase Source verification',
        'Annual tax compliance and IRD asset declarations'
      ],
      np: [
        'नेप्सेमा सेयर बिक्री फर्स्यौट र ब्रोकर बिल (Contract Note) मा',
        'मालपोत कार्यालयमा जग्गा तथा घर बिक्री गर्दा पुँजीगत लाभकर बुझाउन (५%-७.५%)',
        'मेरोसेयरको ईडीआईएस (EDIS) र खरिद स्रोत (WACC) प्रमाणीकरण गर्दा',
        'आन्तरिक राजस्व विभागमा वार्षिक कर चुक्ता र सम्पत्ति विवरण पेश गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The 365-Day Short-Term vs Long-Term Rule and Real Estate Tax in Nepal',
        np: 'नेपालमा ३६५ दिने अल्पकालीन र दीर्घकालीन नियम तथा घरजग्गा लाभकर'
      },
      body: {
        en: 'In Nepal, capital gains taxation serves as an active fiscal policy tool. For shares listed on NEPSE, individual investors holding for < 365 days pay 7.5% CGT, whereas those holding for ≥ 365 days pay 5.0%. For physical real estate (land and housing), the holding horizon is 5 years: property sold within 5 years of purchase is taxed at 7.5% on capital gains, whereas property held for more than 5 years pays a reduced 5.0% CGT at the Land Revenue Office (Malpot). Under current tax guidelines for natural persons in Nepal, CGT deducted at source on listed shares is treated as a final withholding tax for regular retail investors.',
        np: 'नेपालमा पुँजीगत लाभकरलाई बजार स्थिरता कायम राख्ने औजारको रूपमा प्रयोग गरिन्छ। नेप्सेमा सूचीकृत सेयरमा ३६५ दिनभन्दा कम राख्ने व्यक्तिले ७.५% र ३६५ दिन वा सोभन्दा बढी राख्नेले ५.०% लाभकर तिर्नुपर्छ। घरजग्गाको हकमा भने ५ वर्षको नियम लागू हुन्छ: किनेको ५ वर्षभित्र जग्गा बेचेमा लाभको ७.५% र ५ वर्षभन्दा बढी होल्ड गरेर बेचेमा मालपोत कार्यालयमा ५.०% लाभकर लाग्दछ। हालको व्यवस्था अनुसार साना व्यक्तिगत लगानीकर्ताका लागि सेयरको स्रोतमा कट्टी हुने CGT नै अन्तिम कर मानिन्छ।'
      },
      keyPoints: {
        en: [
          'Short-term shareholding (< 365 days): 7.5% CGT for Nepali individuals.',
          'Long-term shareholding (≥ 365 days): 5.0% CGT for Nepali individuals.',
          'Corporate institutions pay a flat 10% CGT on NEPSE gains.',
          'Real estate incurs 7.5% (< 5 years holding) or 5% (≥ 5 years holding) at Malpot.'
        ],
        np: [
          'अल्पकालीन सेयर होल्डिङ (३६५ दिनभन्दा कम): ७.५% पुँजीगत लाभकर।',
          'दीर्घकालीन सेयर होल्डिङ (३६५ दिन वा सोभन्दा बढी): ५.०% पुँजीगत लाभकर।',
          'संस्थागत कम्पनीहरूले सेयर नाफामा १०% पुँजीगत लाभकर तिर्नुपर्छ।',
          'घरजग्गामा ५ वर्षभित्र बेचे ७.५% र ५ वर्षपछि बेचे ५% लाभकर मालपोतमा लाग्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Bijay bought 200 shares of a commercial bank at NPR 250 per share (Total cost = NPR 50,000). Two years later (730 days), he sells all 200 shares on NEPSE at NPR 450 per share (Gross revenue = NPR 90,000). Total gross profit is NPR 40,000. After broker commissions and SEBON fees of NPR 550, his net taxable capital gain is NPR 39,450. Because Bijay held the shares for over 365 days, he qualifies as a long-term investor: CGT = 39,450 * 5.0% = NPR 1,972.50. If he had sold them within 6 months, he would have paid 7.5% (NPR 2,958.75), saving NPR 986.25 purely by being patient.',
        np: 'विजयले एउटा वाणिज्य बैंकको २०० कित्ता सेयर प्रति कित्ता रु. २५० मा किने (कुल लागत = रु. ५०,०००)। दुई वर्षपछि (७३० दिनमा) उनले ती सेयर प्रति कित्ता रु. ४५० मा बिक्री गरे (कुल बिक्री = रु. ९०,०००)। यहाँ कुल नाफा रु. ४०,००० भयो। ब्रोकर कमिसन र नेप्से शुल्क बापत रु. ५५० कटाउँदा खुद करयोग्य नाफा रु. ३९,४५० रह्यो। विजयले ३६५ दिनभन्दा बढी सेयर राखेकाले उनी दीर्घकालीन लगानीकर्ता ठहरिए: लाभकर = ३९,४५० * ५% = रु. १,९७२.५०। यदि उनले ६ महिनामै बेचेको भए ७.५% (रु. २,९५८.७५) तिर्नुपर्थ्यो; धैर्य राख्दा उनलाई झण्डै रु. १,००० कर बचत भयो।'
      },
      takeaway: {
        en: 'Holding fundamentally solid assets past the 365-day mark legally lowers your tax liability by 33.3%, maximizing net compounding in Nepal.',
        np: 'राम्रा कम्पनीको सेयर ३६५ दिनभन्दा बढी होल्ड गर्दा कानुनी रूपमै करको दायित्व ३३.३% ले घट्न गई खुद बचत वृद्धि हुन्छ।'
      }
    },
    formula: {
      equation: 'Capital Gain = Net Selling Price - Total Purchase Cost (WACC)',
      explanation: {
        en: 'Subtract the total acquisition cost (WACC) and transaction expenses from the total net sales realization. Then apply 5% or 7.5% tax to positive gains.',
        np: 'बिक्री गर्दा प्राप्त खुद रकमबाट खरिद लागत (WACC) र कारोबार खर्च घटाउने। नाफा भएमा ५% वा ७.५% का दरले कर हिसाब गर्ने।'
      },
      variables: [
        { symbol: 'Selling Price', label: { en: 'Gross sell price minus broker fees & SEBON commission', np: 'बिक्री मूल्यबाट ब्रोकर कमिसन र शुल्क कटाएको खुद रकम' } },
        { symbol: 'WACC', label: { en: 'Weighted Average Cost of Capital calculated in MeroShare', np: 'मेरोसेयरमा निकालिएको भारित औसत खरिद लागत' } },
        { symbol: 'Tax Rate', label: { en: '5% (≥ 365 days) or 7.5% (< 365 days)', np: '५% (दीर्घकालीन) वा ७.५% (अल्पकालीन)' } }
      ],
      example: {
        scenario: {
          en: 'Selling 100 shares at NPR 500 with a WACC of NPR 300, held for 400 days.',
          np: 'रु. ३०० मा किनेको १०० कित्ता सेयर ४०० दिनपछि रु. ५०० मा बिक्री गर्दा।'
        },
        calculation: {
          en: 'Net Gain = (100 * 500) - (100 * 300) = 50,000 - 30,000 = NPR 20,000. CGT = 20,000 * 5% = NPR 1,000.',
          np: 'खुद नाफा = (१०० * ५००) - (१०० * ३००) = ५०,००० - ३०,००० = रु. २०,०००। लाभकर = २०,००० * ५% = रु. १,०००।'
        },
        result: {
          en: 'NPR 1,000 Capital Gains Tax Deducted at Source',
          np: 'रु. १,००० पुँजीगत लाभकर स्रोतमा कट्टी'
        }
      }
    },
    advantages: {
      en: [
        'Taxes are due only when profits are realized (selling the asset), allowing unrealized gains to compound tax-free',
        'Favorable preferential rates (5%-7.5%) compared to personal income tax slabs (up to 39%)',
        'Automated withholding by brokers and CDSC eliminates complex annual manual filing for retail traders',
        'Capital losses can be adjusted against capital gains within the same fiscal year'
      ],
      np: [
        'सेयर नबेचेसम्म कर तिर्नु पर्दैन, जसले गर्दा नाफामा चक्रवर्ती ब्याजको निर्वाध फाइदा लिन सकिन्छ',
        'व्यक्तिगत आयकरको उच्च स्ल्याब (३९% सम्म) को तुलनामा यो दर (५%-७.५%) निकै सस्तो छ',
        'ब्रोकर र सीडीएससीले स्वचालित रूपमा कर काटिदिने हुनाले साना लगानीकर्ताले झन्झट बेहोर्नु पर्दैन',
        'एउटै आर्थिक वर्षभित्र अन्य सेयरमा भएको घाटालाई नाफासँग समायोजन (Loss Adjustment) गर्न पाइन्छ'
      ]
    },
    limitations: {
      en: [
        'Frequent short-term trading triggers the higher 7.5% tax rate plus broker commissions, eroding returns',
        'Losses from previous fiscal years cannot be carried forward indefinitely for individual retail traders',
        'Mismatched WACC entries on MeroShare can lead to inaccurate tax calculations',
        'Real estate capital gains incur high municipal valuation taxes independent of actual profits'
      ],
      np: [
        'छिटो-छिटो सेयर किनबेच गर्दा ७.५% कर र ब्रोकर कमिसनका कारण धेरै नाफा खर्चमै सकिन्छ',
        'व्यक्तिगत लगानीकर्ताले अघिल्लो आर्थिक वर्षको नोक्सानीलाई चालु वर्षमा सार्न (Carry forward) पाउँदैनन्',
        'मेरोसेयरमा WACC को विवरण गलत हालेमा अनाहकमा बढी कर काटिन सक्छ',
        'घरजग्गामा वास्तविक नाफा नभए पनि सरकारी मूल्याङ्कनका आधारमा कर तिर्नुपर्ने बाध्यता हुन सक्छ'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'You have to pay capital gains tax every year even if you do not sell your shares.',
          np: 'सेयर नबेचे पनि हरेक वर्ष बढेको मूल्यमा पुँजीगत लाभकर तिर्नुपर्छ।'
        },
        reality: {
          en: 'CGT applies strictly to realized gains. Unrealized "paper gains" from holding an appreciating stock are 100% tax-free until sold.',
          np: 'पुँजीगत लाभकर सेयर बेचेर नाफा हात पारेपछि मात्र लाग्दछ। सेयर डिम्याटमै राखुन्जेल मूल्य जतिसुकै बढे पनि एक रुपैयाँ कर तिर्नु पर्दैन।'
        }
      },
      {
        myth: {
          en: 'If you sell a stock at a loss, you still have to pay capital gains tax.',
          np: 'घाटामा सेयर बेच्दा पनि सरकारलाई पुँजीगत लाभकर बुझाउनुपर्छ।'
        },
        reality: {
          en: 'CGT is levied strictly on net positive profits. If you sell at a loss, your CGT liability is exactly NPR 0.',
          np: 'पुँजीगत लाभकर नाफामा मात्र लाग्छ। यदि खरिद मूल्यभन्दा सस्तोमा घाटा खाएर बेच्नुभएको छ भने लाभकर शून्य (रु. ०) हुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Short-Term vs Long-Term Capital Gains on NEPSE', np: 'अल्पकालीन र दीर्घकालीन पुँजीगत लाभकरको तुलना' },
      subtitle: { en: 'Evaluating tax rates based on the 365-day holding period rule for Nepali individuals', np: 'नेपाली लगानीकर्ताका लागि ३६५ दिने होल्डिङ अवधिका आधारमा करको भिन्नता' },
      featureHeader: { en: 'Parameter', np: 'मापदण्ड' },
      colA: { en: 'Short-Term Holding (< 365 Days)', np: 'अल्पकालीन (३६५ दिनभन्दा कम)' },
      colB: { en: 'Long-Term Holding (≥ 365 Days)', np: 'दीर्घकालीन (३६५ दिन वा सोभन्दा बढी)' },
      rows: [
        {
          feature: { en: 'Applicable CGT Rate', np: 'लाग्ने करको दर' },
          valA: { en: '7.5% on net capital gains', np: 'खुद नाफामा ७.५% लाभकर' },
          valB: { en: '5.0% on net capital gains', np: 'खुद नाफामा ५.०% लाभकर' },
        },
        {
          feature: { en: 'Relative Tax Difference', np: 'करको अन्तर' },
          valA: { en: '50% higher tax rate than long-term', np: 'दीर्घकालीन भन्दा ५०% बढी कर' },
          valB: { en: '33.3% tax savings compared to short-term', np: 'अल्पकालीन भन्दा ३३.३% कर बचत' }
        },
        {
          feature: { en: 'Investment Style', np: 'लगानीको शैली' },
          valA: { en: 'Short-term momentum trading / swing trading', np: 'अल्पकालीन ट्रेडिङ र स्विङ कारोबार' },
          valB: { en: 'Value investing and long-term compounding', np: 'दीर्घकालीन लगानी र पुँजी निर्माण' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'dividend', name: 'Dividend', type: 'glossary' },
      { slug: 'tds', name: 'TDS', type: 'glossary' },
      { slug: 'asset', name: 'Asset', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Understanding Stock Dividends & Bonus Shares', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Share Profit / Loss Calculator', slug: 'cagr', desc: 'Calculate net capital gains and CGT deductions on NEPSE.' }
    ],
    faqs: [
      {
        q: { en: 'What is WACC in MeroShare and why must I calculate it?', np: 'मेरोसेयरमा WACC भनेको के हो र यो किन हिसाब गर्नुपर्छ?' },
        a: {
          en: 'WACC stands for Weighted Average Cost of Capital. It represents the exact average purchase price of your shares (including bonus, rights, and secondary purchases). You must verify it on MeroShare so the system knows your exact profit to deduct correct CGT.',
          np: 'WACC भनेको भारित औसत पुँजी लागत हो। यसले विभिन्न समयमा किनेको, बोनस वा हकप्रदबाट आएको सेयरको औसत खरिद मूल्य देखाउँछ। नाफा कति भयो र कर कति काट्ने भन्ने यकिन गर्न मेरोसेयरमा WACC गर्नै पर्छ।'
        }
      },
      {
        q: { en: 'Can I offset a loss from one stock against the profit of another on NEPSE?', np: 'के एउटा सेयरको घाटालाई अर्को सेयरको नाफासँग घटाएर कर कम गर्न मिल्छ?' },
        a: {
          en: 'Yes. Within the same fiscal year, if you sell Stock A at an NPR 10,000 profit and Stock B at an NPR 6,000 loss through the same broker, the broker nets your gain to NPR 4,000 and calculates CGT only on the net profit.',
          np: 'मिल्छ। एउटै आर्थिक वर्षभित्र एउटै ब्रोकरमार्फत एउटा कम्पनीमा रु. १०,००० नाफा र अर्कोमा रु. ६,००० घाटा भएको छ भने खुद नाफा रु. ४,००० मा मात्र लाभकर काटिन्छ।'
        }
      },
      {
        q: { en: 'Do non-resident Nepalis (NRNs) pay different CGT on NEPSE?', np: 'के गैरआवासीय नेपाली (NRN) ले नेप्सेमा फरक दरमा लाभकर तिर्नुपर्छ?' },
        a: {
          en: 'Currently, individual retail transactions settled via standard domestic Demat and bank accounts are treated uniformly under resident retail withholding rates (5% or 7.5%). Institutional foreign accounts follow specific Double Tax Avoidance Agreements (DTAA).',
          np: 'हाल व्यक्तिगत डिम्याट खातामार्फत दोस्रो बजारमा कारोबार गर्ने हकमा सबै नेपाली नागरिकलाई समान ५% र ७.५% को दर लागू हुन्छ।'
        }
      },
      {
        q: { en: 'Is Capital Gains Tax on NEPSE considered final tax in Nepal?', np: 'के नेपालमा सेयरको पुँजीगत लाभकर अन्तिम कर (Final Tax) हो?' },
        a: {
          en: 'For individual, non-business retail investors trading personal savings on NEPSE, the CGT withheld at source by the broker is treated as a final withholding tax under current Inland Revenue Department (IRD) directives.',
          np: 'व्यक्तिगत रूपमा आफ्नो बचत लगानी गर्ने साना सेयरधनीका लागि ब्रोकरले काट्ने पुँजीगत लाभकर नै आन्तरिक राजस्व विभागको हालको व्यवस्था अनुसार अन्तिम कर हो।'
        }
      }
    ],
    summary: {
      en: [
        'Capital gain is the net profit realized when selling an asset above its purchase cost.',
        'NEPSE charges 7.5% CGT for holdings < 365 days, and a reduced 5.0% for holdings ≥ 365 days.',
        'WACC must be confirmed on MeroShare to establish the legal purchase cost for tax purposes.',
        'Unrealized paper gains are not taxed until the asset is physically sold.'
      ],
      np: [
        'सम्पत्ति वा सेयर खरिद मूल्यभन्दा बढीमा बिक्री गर्दा प्राप्त हुने खुद नाफा नै पुँजीगत लाभ हो।',
        'नेप्सेमा ३६५ दिनभन्दा कम राख्दा ७.५% र ३६५ दिन वा सोभन्दा बढी राखेमा ५.०% लाभकर लाग्छ।',
        'कर प्रयोजनका लागि खरिद लागत प्रमाणित गर्न मेरोसेयरमा WACC गर्न अनिवार्य छ।',
        'सेयर नबेचेसम्म बढेको मूल्यमा कुनै पनि प्रकारको पुँजीगत लाभकर लाग्दैन।'
      ]
    },
    whereSeen: [
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' },
      { title: 'Understanding Stock Dividends', type: 'Lesson', url: '/learn/nepse/what-is-investing' }
    ],
    meta: {
      title: 'Capital Gains Tax (CGT) in Nepal: Rates & WACC Guide | risePaisa',
      description: 'Complete guide to Capital Gains Tax (CGT) on NEPSE. Understand the 365-day rule (5% vs 7.5%), WACC calculation on MeroShare, and real estate tax rates.'
    }
  },

  // 8. ETF
  {
    slug: 'etf',
    term: 'ETF (Exchange Traded Fund)',
    termNp: 'ईटीएफ (Exchange Traded Fund)',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    letter: 'E',
    abbreviation: 'ETF',
    synonyms: ['Exchange Traded Fund', 'Index Tracker', 'ईटीएफ', 'एक्सचेन्ज ट्रेडेड फण्ड'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'An Exchange Traded Fund (ETF) is an investment fund traded on stock exchanges like individual shares, holding a basket of assets designed to mirror the performance of a specific index.',
      np: 'एक्सचेन्ज ट्रेडेड फण्ड (ETF) भनेको सेयर बजारमा साधारण सेयर सरह किनबेच हुने सामूहिक लगानी कोष हो, जसले कुनै निश्चित सूचकांक (Index) को प्रतिफललाई पछ्याउन धेरै कम्पनीहरूको सेयर खरिद गरी राखेको हुन्छ।'
    },
    detailedExplanation: {
      en: 'An ETF pools money from thousands of investors to purchase a basket of stocks representing an index, sector, or commodity. Unlike traditional mutual funds whose Net Asset Value (NAV) is computed only once at the close of the trading day, an ETF trades continuously throughout the trading session on the stock exchange with a fluctuating market price. When you purchase one unit of an index ETF, you instantly acquire fractional exposure to dozens or hundreds of underlying companies at very low management cost.',
      np: 'ईटीएफले हजारौं लगानीकर्ताबाट रकम संकलन गरी कुनै सूचकांक, क्षेत्र वा वस्तुलाई प्रतिनिधित्व गर्ने सेयरहरूको समूह खरिद गर्छ। परम्परागत खुलामुखी म्युचुअल फण्डको मूल्य (NAV) दिनको अन्त्यमा एकपटक मात्र तोकिने भए पनि ईटीएफ भने बजार खुलेको समयभर साधारण सेयर जस्तै निरन्तर घटबढ हुने भाउमा किनबेच हुन्छ। एउटा इन्डेक्स ईटीएफको एक कित्ता किन्दा मात्रै पनि तपाईंले एकैपटक दर्जनौं कम्पनीहरूको सेयरमा न्यूनतम व्यवस्थापन खर्चमै लगानीको स्वामित्व प्राप्त गर्नुहुन्छ।'
    },
    whyItMatters: {
      en: 'ETFs represent the ultimate low-cost, passive investing revolution globally. Instead of spending hours analyzing individual balance sheets or paying high management fees to fund managers who often fail to beat the market, an investor can simply buy the entire market index through an ETF, securing the overall economic growth of the country.',
      np: 'विश्वव्यापी वित्तीय बजारमा ईटीएफले कम लागतमा निष्पक्ष लगानी गर्ने क्रान्ति ल्याएको छ। कुन कम्पनी राम्रो र कुन नराम्रो भनी घन्टौं वित्तीय विवरण केलाउनुको सट्टा वा महँगो व्यवस्थापन शुल्क लिने फण्ड म्यानेजरको भर पर्नुको सट्टा लगानीकर्ताले सिधै ईटीएफ किनेर समग्र देशको आर्थिक वृद्धिको लाभ लिन सक्छन्।'
    },
    howItWorks: {
      summary: {
        en: 'The creation and trading mechanism of an ETF follows a continuous 4-part structure:',
        np: 'ईटीएफको निष्कासन र दोस्रो बजार कारोबार ४ वटा मुख्य आधारमा चल्दछ:'
      },
      steps: [
        {
          title: { en: '1. Index Selection', np: '१. सूचकांक चयन' },
          desc: { en: 'The fund manager selects an underlying benchmark index (e.g., NEPSE 30 Index or a Banking Sector Index).', np: 'फण्ड व्यवस्थापकले कुनै निश्चित आधार सूचकांक (जस्तै नेप्से ३० वा वाणिज्य बैंक सूचकांक) छनोट गर्छ।' }
        },
        {
          title: { en: '2. Creation of Fund Units', np: '२. इकाइ सिर्जना' },
          desc: { en: 'Authorized Participants assemble the exact basket of underlying shares and deliver them to the fund in exchange for newly minted ETF units.', np: 'तोकिएका संस्थागत संस्थाहरूले सूचकांकमा रहेका ठ्याक्कै त्यही अनुपातका सेयरहरू संकलन गरी कोषमा बुझाउँछन् र ईटीएफ इकाइ प्राप्त गर्छन्।' }
        },
        {
          title: { en: '3. Real-Time Exchange Trading', np: '३. दोस्रो बजारमा प्रत्यक्ष किनबेच' },
          desc: { en: 'The ETF units are listed on the stock exchange (such as NEPSE) where retail traders buy and sell units throughout trading hours.', np: 'उक्त इकाइहरू दोस्रो बजारमा सूचीकृत हुन्छन् जहाँ आम लगानीकर्ताले साधारण सेयर सरह खरिदबिक्री गर्न सक्छन्।' }
        },
        {
          title: { en: '4. Arbitrage Alignment', np: '४. बजार मूल्य सन्तुलन (Arbitrage)' },
          desc: { en: 'Market makers buy or redeem ETF units whenever the market price deviates from the intrinsic Net Asset Value (NAV), keeping pricing fair.', np: 'ईटीएफको बजार मूल्य र यसभित्र रहेका सेयरहरूको वास्तविक मूल्य (NAV) बीच फरक आएमा ठूला संस्थाले किनबेच गरी मूल्य सन्तुलनमा राख्छन्।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Global retirement and pension accounts tracking the S&P 500 or Nifty 50',
        'SEBON policy roadmaps for modernizing the Nepal Stock Exchange',
        'Low-cost sector diversification strategies',
        'Hedging portfolio downside risk during volatile market phases'
      ],
      np: [
        'अन्तर्राष्ट्रिय बजारमा एसएन्डपी ५०० (S&P 500) वा निफ्टी ५० जस्ता सूचकांक पछ्याउने पेन्सन खाताहरूमा',
        'धितोपत्र बोर्ड (SEBON) द्वारा नेप्सेलाई आधुनिकीकरण गर्ने नीतिगत योजनाहरूमा',
        'न्यूनतम खर्चमा सिङ्गो क्षेत्र (Sector) मा विविधीकरण गर्न',
        'बजारको ठूलो उतारचढावका बेला समग्र लगानीको जोखिम न्यूनीकरण गर्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Upcoming Launch of Index ETFs and the NEPSE 30 Framework',
        np: 'नेपालमा ईटीएफको सुरुवात र नेप्से-३० (NEPSE 30) को तयारी'
      },
      body: {
        en: 'Globally, ETFs hold trillions of dollars in assets. In Nepal, the Securities Board of Nepal (SEBON) and NEPSE introduced regulations and launched the "NEPSE 30 Index"-a benchmark tracking 30 fundamentally solid, liquid, high-market-cap companies. The regulatory framework allows licensed asset management companies to launch Index ETFs tracking the NEPSE 30. Once fully operational on the NEPSE TMS, Nepali retail investors will no longer need to gamble on individual speculative stocks; they can purchase a single ETF unit to own fractional shares across Nepal’s 30 strongest commercial enterprises.',
        np: 'विश्वभर ईटीएफमा खर्बौं डलरको लगानी छ। नेपालमा पनि धितोपत्र बोर्ड (SEBON) र नेप्सेले यससम्बन्धी कानुनी कार्यविधि तयार गरी वित्तीय रूपमा सबल, बढी कारोबार हुने र ठूला ३० वटा कम्पनीहरूको "नेप्से-३० इन्डेक्स" सार्वजनिक गरिसकेका छन्। क्यापिटलहरूले यसैलाई आधार बनाएर नेप्से ३० ईटीएफ (Index ETF) ल्याउने तयारी गरेका छन्। यो पूर्ण रूपमा सञ्चालनमा आएपछि नेपाली लगानीकर्ताले जोखिम मोलेर कमजोर कम्पनीका सेयर छानिरहनु पर्दैन; एउटै ईटीएफ किनेर नेपालका ३० वटा उत्कृष्ट कम्पनीहरूमा एकैपटक लगानी गर्न सक्नेछन्।'
      },
      keyPoints: {
        en: [
          'NEPSE 30 Index was created as the benchmark foundation for future Nepal ETFs.',
          'ETFs trade continuously on stock exchanges with real-time intraday pricing.',
          'Carries drastically lower expense ratios than traditional actively managed mutual funds.',
          'Provides instant broad market diversification in a single trade on TMS.'
        ],
        np: [
          'भविष्यमा आउने ईटीएफका लागि आधार तयार गर्न नेप्सेले "नेप्से-३०" सूचकांक सुरु गरेको हो।',
          'ईटीएफ साधारण सेयर जस्तै दोस्रो बजार खुल्ने समयभर तत्कालको मूल्यमा किनबेच हुन्छ।',
          'यसको व्यवस्थापन शुल्क साधारण म्युचुअल फण्डको तुलनामा निकै कम हुन्छ।',
          'टिएमएस (TMS) मा एउटै कारोबार गरेर सिङ्गो बजारमा विविधीकरणको लाभ लिन सकिन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Kritika wants exposure to the Nepal stock market but does not have time to read annual balance sheets or track 250 individual companies. Instead of hiring an expensive stock advisor, she buys 100 units of an Index ETF tracking the NEPSE 30 at NPR 100 per unit (Total investment = NPR 10,000). Her NPR 10,000 is automatically apportioned across Nepal’s top banks, telecom, hydro, and manufacturing companies. When the Nepali economy and top 30 companies expand over the next 5 years, her ETF units appreciate in direct lockstep with the national index.',
        np: 'कृतिकालाई सेयर बजारमा लगानी गर्न मन छ तर २५० वटा कम्पनीका वित्तीय विवरण पढ्ने समय छैन। कुनै बिचौलियाको सल्लाहमा लाग्नुको सट्टा उनले नेप्से ३० इन्डेक्स पछ्याउने ईटीएफको १०० कित्ता प्रति कित्ता रु. १०० का दरले (रु. १०,००० मा) किन्छिन्। उनको यो १०,००० रुपैयाँ स्वतः नेपालका उत्कृष्ट वाणिज्य बैंक, टेलिकम, हाइड्रो र उत्पादन कम्पनीहरूमा बाँडिन्छ। आगामी ५ वर्षमा नेपाली अर्थतन्त्र र ती ३० ठूला कम्पनीहरू बढ्दा उनको ईटीएफको मूल्य पनि सोही अनुपातमा वृद्धि हुन्छ।'
      },
      takeaway: {
        en: 'ETFs democratize investing by eliminating single-company stock-picking risk, allowing anyone to earn the market\'s average return with zero complexity.',
        np: 'ईटीएफले कम्पनी छान्ने जोखिम र झन्झट हटाएर जोसुकै साधारण नागरिकलाई पनि समग्र बजारको औसत नाफा सजिलै कमाउने अवसर दिन्छ।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Instant diversification across dozens of companies in a single transaction',
        'Trades continuously during market hours with real-time liquidity on NEPSE TMS',
        'Significantly lower management expense ratios than active mutual funds',
        'Eliminates the danger of fund manager human error or stock-picking biases'
      ],
      np: [
        'एउटै कारोबारबाट एकैपटक दर्जनौं राम्रा कम्पनीहरूमा लगानी विविधीकरण हुन्छ',
        'नेप्सेमा बजार खुलेको समयभर तत्काल मूल्य हेरेर किनबेच गर्न सकिने उच्च तरलता हुन्छ',
        'अन्य म्युचुअल फण्डको तुलनामा यसको वार्षिक व्यवस्थापन खर्च निकै कम हुन्छ',
        'फण्ड म्यानेजरले गलत कम्पनी छान्दा हुने मानवीय कमजोरी र जोखिमबाट पूर्ण मुक्ति मिल्छ'
      ]
    },
    limitations: {
      en: [
        'Passive design means it will never beat the index; it delivers exact index performance',
        'Subject to market volatility-if the underlying index drops 20%, the ETF drops 20%',
        'In developing markets, low trading volume can cause temporary liquidity friction',
        'Broker commissions and SEBON fees apply on every buy and sell order'
      ],
      np: [
        'यसले सूचकांकलाई पछ्याउने भएकाले बजारभन्दा चामत्कारिक रूपमा बढी नाफा कहिल्यै दिँदैन',
        'बजारको समग्र उतारचढावको जोखिम रहन्छ-यदि सूचकांक २०% घट्यो भने ईटीएफ पनि २०% घट्छ',
        'सुरुवाती चरणमा दोस्रो बजारमा पर्याप्त खरिदबिक्री नभए तरलताको केही समस्या हुन सक्छ',
        'साधारण सेयर जस्तै किनबेच गर्दा ब्रोकर कमिसन र नेप्से कारोबार शुल्क लाग्दछ'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'An ETF is exactly identical to an ordinary mutual fund.',
          np: 'ईटीएफ र साधारण म्युचुअल फण्ड ठ्याक्कै एउटै कुरा हुन्।'
        },
        reality: {
          en: 'While both hold baskets of securities, open-ended mutual funds settle only once per day at closing NAV, whereas ETFs trade continuously with fluctuating prices on the stock exchange.',
          np: 'दुवैमा धेरै कम्पनीको सेयर समूह भए तापनि साधारण म्युचुअल फण्ड दिनको अन्त्यमा एकपटक मात्र NAV मा किनबेच हुन्छ, तर ईटीएफ भने बजार खुलेको समयभर सेयर जस्तै घटबढ हुने भाउमा किनबेच हुन्छ।'
        }
      },
      {
        myth: {
          en: 'ETFs protect you from all stock market downturns.',
          np: 'ईटीएफ किनेपछि बजार घट्दा पनि घाटा हुँदैन।'
        },
        reality: {
          en: 'An index ETF mirrors the underlying market. If the overall stock market declines during a bear cycle, the value of the ETF will decline proportionally.',
          np: 'ईटीएफले बजारको सूचकांकलाई जस्ताको तस्तै पछ्याउँछ। त्यसैले समग्र सेयर बजारमा मन्दी आएमा ईटीएफको बजार मूल्य पनि सोही अनुपातमा घट्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'ETF vs Open-Ended Mutual Fund', np: 'ईटीएफ र खुलामुखी म्युचुअल फण्ड बीचको भिन्नता' },
      subtitle: { en: 'Comparing exchange-traded flexibility against traditional end-of-day NAV fund units', np: 'दोस्रो बजारमा निरन्तर किनबेच र दिनको अन्त्यमा हुने NAV कारोबार बीचको मुख्य फरक' },
      featureHeader: { en: 'Feature', np: 'विशेषता' },
      colA: { en: 'Exchange Traded Fund (ETF)', np: 'ईटीएफ (ETF)' },
      colB: { en: 'Open-Ended Mutual Fund', np: 'खुलामुखी म्युचुअल फण्ड' },
      rows: [
        {
          feature: { en: 'Trading Venue', np: 'कारोबार हुने ठाउँ' },
          valA: { en: 'Traded on NEPSE TMS like ordinary equity shares', np: 'साधारण सेयर सरह नेप्से टिएमएसमा किनबेच' },
          valB: { en: 'Bought/redeemed via Fund Manager / Capital website', np: 'क्यापिटल वा कोष व्यवस्थापकको वेबसाइटमार्फत किनबेच' }
        },
        {
          feature: { en: 'Pricing Mechanism', np: 'मूल्य निर्धारण' },
          valA: { en: 'Real-time fluctuating market price throughout the day', np: 'बजार खुलेको समयभर प्रति सेकेन्ड घटबढ हुने भाउ' },
          valB: { en: 'Single daily closing Net Asset Value (NAV)', np: 'दिनको अन्त्यमा एकपटक मात्र गणना हुने खुद सम्पत्ति मूल्य (NAV)' }
        },
        {
          feature: { en: 'Expense Ratio', np: 'व्यवस्थापन खर्च' },
          valA: { en: 'Ultra-low (passive index replication)', np: 'निकै सस्तो (सूचकांक पछ्याउने हुनाले)' },
          valB: { en: 'Moderate to high (active fund manager salaries/research)', np: 'तुलनात्मक रूपमा बढी (सक्रिय व्यवस्थापनका कारण)' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'nav', name: 'NAV', type: 'glossary' },
      { slug: 'portfolio', name: 'Portfolio', type: 'glossary' },
      { slug: 'sip', name: 'SIP', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'What is a Mutual Fund? Professional Management', categorySlug: 'mutual-funds', slug: 'what-is-a-mutual-fund' }
    ],
    relatedGuides: [
      { title: 'Complete Mutual Funds & SIP Guide', slug: 'complete-mutual-funds-guide' }
    ],
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'sip', desc: 'Calculate the growth of index fund and ETF investments in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'What is the NEPSE 30 Index and how does it relate to ETFs?', np: 'नेप्से-३० सूचकांक के हो र यसको ईटीएफसँग के सम्बन्ध छ?' },
        a: {
          en: 'The NEPSE 30 is a rule-based index tracking 30 top-tier, financially transparent companies selected based on market cap, free-float turnover, and consistent dividend history. It serves as the primary benchmark index for prospective Nepal ETFs.',
          np: 'नेप्से-३० भनेको चुक्ता पुँजी, दैनिक कारोबार तरलता र विगतको नाफा तथा लाभांश इतिहासका आधारमा छानिएका नेपालका उत्कृष्ट ३० कम्पनीहरूको सूचकांक हो। नेपालमा आउने इन्डेक्स ईटीएफले यसैलाई आधार बनाएर लगानी गर्नेछन्।'
        }
      },
      {
        q: { en: 'How do I buy an ETF in Nepal once it is launched?', np: 'नेपालमा ईटीएफ सुरु भएपछि कसरी किन्न सकिन्छ?' },
        a: {
          en: 'You can buy ETF units exactly like ordinary company shares. Log in to your NEPSE TMS broker account, search for the ETF ticker symbol, enter the desired units and price, and submit your buy order.',
          np: 'ईटीएफलाई कुनै पनि कम्पनीको सेयर किने जस्तै गरी सजिलै किन्न सकिन्छ। आफ्नो ब्रोकर टीएमएस (TMS) मा लगइन गरी ईटीएफको नाम खोज्ने र चाहेको कित्ता तथा मूल्य हालेर खरिद आदेश दिने।'
        }
      },
      {
        q: { en: 'Do ETFs pay dividends to their unit holders?', np: 'के ईटीएफले आफ्ना इकाइधनीहरूलाई लाभांश दिन्छन्?' },
        a: {
          en: 'Yes. The underlying 30 companies regularly pay cash dividends. The ETF collects these dividends and either distributes them as annual cash dividends directly to unit holders or automatically reinvests them into more shares, raising the fund\'s NAV.',
          np: 'दिन्छन्। ईटीएफभित्र रहेका कम्पनीहरूले दिने नगद लाभांशलाई कोषले संकलन गर्दछ र इकाइधनीहरूलाई वार्षिक नगद लाभांशको रूपमा वितरण गर्छ वा पुनः थप सेयर किनेर फण्डको मूल्य बढाउँछ।'
        }
      },
      {
        q: { en: 'What is the difference between active and passive ETFs?', np: 'सक्रिय (Active) र निष्क्रिय (Passive) ईटीएफ बीच के फरक हुन्छ?' },
        a: {
          en: 'Passive ETFs track an index automatically with zero human bias and ultra-low fees. Active ETFs rely on professional portfolio managers attempting to beat the market by trading frequently, which incurs higher management costs.',
          np: 'निष्क्रिय (Passive) ईटीएफले सूचकांकलाई जस्ताको तस्तै पछ्याउँछ र यसमा कम खर्च लाग्छ। सक्रिय (Active) ईटीएफमा फण्ड म्यानेजरले बजारलाई जित्न बारम्बार कम्पनी फेरबदल गर्छन्, जसले गर्दा खर्च बढी लाग्छ।'
        }
      }
    ],
    summary: {
      en: [
        'An ETF trades continuously on stock exchanges like a stock while holding a diversified index basket.',
        'It delivers instant diversification across top-tier companies at ultra-low expense ratios.',
        'The NEPSE 30 Index provides the standardized benchmark foundation for upcoming Nepal ETFs.',
        'ETFs eliminate individual company-picking risk, securing the long-term growth of the overall economy.'
      ],
      np: [
        'ईटीएफ साधारण सेयर सरह दोस्रो बजारमा किनबेच हुने विविधीकृत सूचकांक कोष हो।',
        'यसले न्यूनतम व्यवस्थापन खर्चमै देशका उत्कृष्ट कम्पनीहरूमा एकैपटक लगानीको अवसर दिन्छ।',
        'नेपालमा आउने आगामी ईटीएफका लागि नेप्से-३० सूचकांकलाई मुख्य आधार बनाइएको छ।',
        'कम्पनी छान्ने जोखिम हटाएर समग्र अर्थतन्त्रको औसत वृद्धिदरको लाभ लिन यो सबैभन्दा उत्तम साधन हो।'
      ]
    },
    whereSeen: [
      { title: 'What is a Mutual Fund?', type: 'Lesson', url: '/learn/mutual-funds/what-is-a-mutual-fund' },
      { title: 'Mutual Funds Guide', type: 'Guide', url: '/learn/guides/complete-mutual-funds-guide' }
    ],
    meta: {
      title: 'What is an ETF (Exchange Traded Fund)? Nepal & NEPSE 30 Guide | risePaisa',
      description: 'Discover Exchange Traded Funds (ETFs) in Nepal. Learn how index tracking works, NEPSE 30 dynamics, and ETF vs mutual fund comparisons.'
    }
  }
];

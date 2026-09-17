// ==============================================
// risePaisa - NEPSE & Stock Market Glossary Module
// Production-grade financial encyclopedia entries for Nepal
// ==============================================

export const NEPSE_GLOSSARY = [
  // 1. IPO
  {
    slug: 'ipo',
    term: 'IPO (Initial Public Offering)',
    termNp: 'प्राथमिक सार्वजनिक निष्कासन (IPO)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'I',
    abbreviation: 'IPO',
    synonyms: ['Initial Public Offering', 'Primary Issue', 'आइपिओ', 'प्राथमिक सेयर'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'An Initial Public Offering (IPO) is the first time a private company sells newly created shares of stock to the general public, raising equity capital and listing on NEPSE.',
      np: 'प्राथमिक सार्वजनिक निष्कासन (IPO) भनेको कुनै निजी कम्पनीले सर्वसाधारण जनतालाई पहिलोपटक सेयर बिक्री गरी पुँजी संकलन गर्ने र नेपाल स्टक एक्सचेन्ज (NEPSE) मा सूचीकृत हुने आधिकारिक प्रक्रिया हो।'
    },
    detailedExplanation: {
      en: 'Before an IPO, a company is privately held by its founding promoters and early institutional backers. When the enterprise reaches maturity and requires major capital expansion, it transforms into a public limited company under the Companies Act 2063 and applies to the Securities Board of Nepal (SEBON) for a public offering. Retail investors apply for IPOs at the fixed nominal face value of NPR 100 per share (or at a premium approved by SEBON). Once the issue closes and shares are allotted via C-ASBA, the company lists on NEPSE, where units can be openly traded on the secondary market.',
      np: 'आइपिओ आउनुअघि कम्पनी केही संस्थापक प्रवर्द्धकहरूको स्वामित्वमा रहेको निजी कम्पनी हुन्छ। जब व्यवसाय विस्तारका लागि ठूलो पुँजी आवश्यक पर्छ, कम्पनीले पब्लिक लिमिटेडमा रूपान्तरण भई धितोपत्र बोर्ड (SEBON) बाट स्वीकृति लिएर सर्वसाधारणका लागि सेयर जारी गर्छ। नेपालमा प्रायः सबै कम्पनीका आइपिओ प्रति कित्ता रु. १०० अंकित मूल्यमा (वा प्रिमियम थपेर) निष्कासन हुन्छन्। बाँडफाँडपछि उक्त सेयर नेप्सेमा सूचीकृत भई दोस्रो बजारमा जोसुकैले किनबेच गर्न पाउँछन्।'
    },
    whyItMatters: {
      en: 'For millions of Nepali citizens, the IPO market serves as the gateway to the financial world. Buying shares at the statutory price of NPR 100 provides an accessible, low-risk entry point: opening listing prices on NEPSE typically trade at 2x to 5x above par value, delivering substantial wealth creation to retail households.',
      np: 'लाखौं नेपाली नागरिकका लागि वित्तीय बजारमा प्रवेश गर्ने पहिलो ढोका नै आइपिओ हो। प्रति कित्ता मात्र रु. १०० मा सेयर किन्न पाइने भएकाले यसमा जोखिम निकै कम हुन्छ र नेप्सेमा पहिलो कारोबार खुल्दा नै अंकित मूल्यभन्दा २ देखि ५ गुणासम्म बढी भाउ पाउने हुनाले साना लगानीकर्ताको पुँजी छोटो समयमै उल्लेखनीय वृद्धि हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The IPO journey in Nepal follows 4 rigorous regulatory and operational stages:',
        np: 'नेपालमा आइपिओ निष्कासन र बाँडफाँड प्रक्रिया ४ वटा मुख्य चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. SEBON Prospectus Approval', np: '१. धितोपत्र बोर्डबाट स्वीकृति' },
          desc: { en: 'The company appoints a licensed Merchant Banker (Issue Manager), audits its financial books, and secures formal public issue approval from SEBON.', np: 'कम्पनीले इस्यु म्यानेजर (क्यापिटल) नियुक्त गरी लेखापरीक्षण विवरणसहित धितोपत्र बोर्डमा विवरणपत्र (Prospectus) स्वीकृतिका लागि पेश गर्छ।' }
        },
        {
          title: { en: '2. Public Issue & Quota Allocation', np: '२. निष्कासन तथा कोटा विभाजन' },
          desc: { en: 'SEBON mandates strict quotas: 10% for foreign-employed Nepalis, 5% for mutual funds, 2%-5% for staff, and the remainder for the general public.', np: 'धितोपत्र बोर्डको नियम अनुसार वैदेशिक रोजगारीमा रहेका नेपालीलाई १०%, म्युचुअल फण्डलाई ५%, कर्मचारीलाई २-५% र बाँकी हिस्सा सर्वसाधारणलाई छुट्याइन्छ।' }
        },
        {
          title: { en: '3. 10-Kitta Lottery Allotment', np: '३. १० कित्ता गोलाप्रथा बाँडफाँड' },
          desc: { en: 'Under SEBON’s 10-Kitta Policy, shares are allotted in minimum blocks of 10 shares through an automated, fair public lottery system.', np: 'धितोपत्र बोर्डको १० कित्ता नीति अनुसार गोलाप्रथा (Lottery) मार्फत भाग्यमानी आवेदकहरूलाई न्यूनतम १० कित्ताका दरले सेयर बाँडफाँड गरिन्छ।' }
        },
        {
          title: { en: '4. NEPSE Listing & TMS Trading', np: '४. नेप्से सूचीकरण र दोस्रो बजार कारोबार' },
          desc: { en: 'Allotted units are credited electronically to Demat accounts. Following NEPSE listing, the stock opens trading within an established 3x range.', np: 'सेयर डिम्याट खातामा आएपछि नेप्सेमा सूचीकृत हुन्छ र पहिलो कारोबारका लागि नेटवर्थको १ देखि ३ गुणासम्मको रेन्ज तोकिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'MeroShare C-ASBA online application system',
        'Hydropower, manufacturing, and hospitality capital raising',
        'SEBON primary issue pipelines and prospectus reviews',
        'Foreign employment quota reservations for remitters abroad'
      ],
      np: [
        'मेरोसेयरको सी-आस्बा अनलाइन आवेदन प्रणालीमा',
        'जलविद्युत, उत्पादनमूलक उद्योग र होटेलहरूले पुँजी संकलन गर्दा',
        'धितोपत्र बोर्डको प्राथमिक निष्कासन पाइपलाइन र विवरणपत्रमा',
        'विदेशमा रहेका नेपालीहरूका लागि वैदेशिक रोजगार आरक्षित कोटामा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Landmark 10-Kitta Rule & The Foreign Remittance Quota in Nepal',
        np: 'नेपालको ऐतिहासिक १० कित्ता नीति र वैदेशिक रोजगारी कोटा'
      },
      body: {
        en: 'Prior to 2019, wealthy investors with deep bank accounts swallowed entire IPO issues by applying for millions of rupees, leaving ordinary citizens empty-handed. SEBON revolutionized Nepali capital markets by enforcing the "10-Kitta Directive": every single citizen who applies is guaranteed an equal chance of receiving a minimum allotment of 10 shares (NPR 1,000) through a transparent electronic lottery. Furthermore, the government introduced a mandatory 10% reserved quota for Nepalis working abroad under formal labor permits, ensuring remittance earnings flow directly into nation-building infrastructure assets.',
        np: 'विसं २०७५ भन्दा पहिले पहुँच र धेरै पैसा हुने ठूला व्यापारीले लाखौं रुपैयाँको आवेदन दिएर सबै आइपिओ कुम्ल्याउँथे र सर्वसाधारण रित्तो हात हुन्थे। धितोपत्र बोर्डले "१० कित्ता नीति" लागू गरेर बजारमा ऐतिहासिक क्रान्ति ल्यायो: जसअनुसार जम्मा रु. १,००० लगानी गर्ने जोसुकै नागरिकले पनि गोलाप्रथामार्फत न्यूनतम १० कित्ता सेयर पाउने समान अवसर पाए। यसका साथै श्रम स्वीकृति लिएर विदेशमा पसिना बगाइरहेका नेपाली श्रमिकहरूका लागि १०% कोटा सुरक्षित गरियो, जसले रेमिट्यान्सलाई देशको जलविद्युत र उद्योगमा जोडेको छ।'
      },
      keyPoints: {
        en: [
          'Minimum application is 10 shares (NPR 1,000 at par value).',
          'Allotment follows a strictly random, verified electronic lottery under SEBON supervision.',
          '10% of every public IPO is legally reserved for migrant workers abroad.',
          'Funds in your bank account are merely held in lien via C-ASBA until allotment day.'
        ],
        np: [
          'न्यूनतम आवेदन १० कित्ता (रु. १,०००) का लागि दिनुपर्छ।',
          'बाँडफाँड धितोपत्र बोर्डको प्रत्यक्ष निगरानीमा पारदर्शी गोलाप्रथाबाट हुन्छ।',
          'हरेक आइपिओमा १०% सेयर वैदेशिक रोजगारीमा रहेका नेपालीका लागि आरक्षित हुन्छ।',
          'आवेदन दिँदा पैसा काटिँदैन; बाँडफाँड नहुन्जेल बैंक खातामै रोक्का (Hold) मात्र रहन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Sujan, a university student in Pokhara, applies for 10 shares (NPR 1,000) of a newly listed hydropower company via MeroShare. Over 1,200,000 people apply for the 2,000,000 shares available, meaning 200,000 applicants win 10 shares each. Sujan wins the lottery, and his NPR 1,000 is debited from his bank account while 10 shares are deposited in his Demat account. Three weeks later, the company lists on NEPSE with an opening special range of NPR 100 to NPR 300. Market demand drives the stock to NPR 450 within a month. Sujan sells his 10 shares on TMS for NPR 4,500, quadrupling his money with zero debt risk.',
        np: 'पोखराका विद्यार्थी सुजनले एउटा जलविद्युत कम्पनीको आइपिओमा मेरोसेयरमार्फत १० कित्ता (रु. १,०००) आवेदन दिन्छन्। कुल २० लाख कित्ता सेयरका लागि १२ लाख जनाको आवेदन पर्छ, जसमध्ये २ लाख जनाले मात्र गोलाप्रथाबाट १० कित्ता पाउँछन्। सुजन भाग्यमानी ठहरिन्छन् र उनको बैंकबाट रु. १,००० काटिएर १० कित्ता सेयर डिम्याटमा आउँछ। तीन हप्तापछि नेप्सेमा सेयर सूचीकृत भई पहिलो कारोबार रु. २०० मा खुल्छ र माग बढेर रु. ४५० पुग्छ। सुजनले टिएमएसमार्फत रु. ४,५०० मा उक्त सेयर बिक्री गरी आफ्नो लगानी चार गुणा भन्दा बढी बनाउँछन्।'
      },
      takeaway: {
        en: 'IPOs provide an asymmetrical risk-reward equation: the downside is limited strictly to your NPR 1,000 investment, while the upside can multiply your principal several times over.',
        np: 'आइपिओमा जोखिम निकै कम र प्रतिफल उच्च हुन्छ: बढीमा गुम्ने भनेको रु. १,००० मात्र हो, तर फाइदा हुँदा पुँजी धेरै गुणा बढ्ने सम्भावना रहन्छ।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Accessible to every citizen with as little as NPR 1,000 starting capital',
        'Low downside risk since units are bought at the fundamental par value of NPR 100',
        'High historical listing gains (often 100% to 400% above issue price on NEPSE)',
        'Zero commission fees paid to secondary stock brokers upon allotment'
      ],
      np: [
        'जम्मा रु. १,००० को सानो बचतबाटै जोसुकै नागरिकले पनि सेयरधनी बन्ने अवसर पाउँछन्',
        'अंकित मूल्य (रु. १००) मा पाइने भएकाले बजार घट्दा पनि घाटा हुने जोखिम न्यून हुन्छ',
        'नेप्सेमा सूचीकृत हुँदा प्रायः १००% देखि ४००% सम्मको उच्च नाफा प्राप्त हुने इतिहास छ',
        'आइपिओ भर्दा दोस्रो बजारको जस्तो ब्रोकर कमिसन वा अतिरिक्त दलाली शुल्क लाग्दैन'
      ]
    },
    limitations: {
      en: [
        'Extreme oversubscription (often 15 to 25 times) makes allotment dependent entirely on luck',
        '10-kitta allotment cap means absolute rupee profits per issue are modest (NPR 2,000-NPR 6,000)',
        'Premium-priced IPOs and weak hydropower companies carry the risk of opening below par',
        'Application funds remain temporarily frozen in your bank account during verification'
      ],
      np: [
        'अत्यधिक आवेदन (१५ देखि २५ गुणा बढी) पर्ने भएकाले सेयर पर्नु पूर्णतया भाग्यमा भर पर्छ',
        '१० कित्ता मात्र पाइने हुनाले जतिसुकै भाउ बढे पनि एउटा आइपिओबाट हुने नगद नाफा सीमित हुन्छ',
        'कमजोर वित्तीय अवस्था भएका कम्पनी वा महँगो प्रिमियम आइपिओ अंकित मूल्यभन्दा तल झर्ने जोखिम हुन्छ',
        'आवेदन दिएपछि बाँडफाँड नटुंगिञ्जेल बैंक खातामा रहेको रकम अन्य काममा चलाउन मिल्दैन'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Applying for 1,000 shares increases your chances of winning an allotment in Nepal.',
          np: 'आइपिओमा १० कित्ताको सट्टा १,००० कित्ताका लागि फारम भरेमा सेयर पर्ने सम्भावना बढ्छ।'
        },
        reality: {
          en: 'Under SEBON\'s 10-Kitta Rule, when an issue is oversubscribed, every valid applicant is entered into the lottery exactly once for 10 shares. Applying for more merely freezes extra cash with zero lottery advantage.',
          np: 'धितोपत्र बोर्डको १० कित्ता नियम अनुसार मागभन्दा बढी आवेदन परेमा सबैलाई बराबर १० कित्ताका लागि मात्र गोलाप्रथामा सामेल गरिन्छ। बढी कित्ता भर्दा बैंकमा पैसा रोक्का मात्र हुन्छ, सेयर पर्ने सम्भावना रत्तिभर बढ्दैन।'
        }
      },
      {
        myth: {
          en: 'Every single IPO listed on NEPSE is guaranteed to double your money.',
          np: 'नेप्सेमा आउने हरेक आइपिओले पैसा दोब्बर बनाइदिने ग्यारेन्टी हुन्छ।'
        },
        reality: {
          en: 'While historically most ordinary IPOs perform well, companies with negative net worth, heavy debt, or overpriced premium issues can trade below their issue price upon listing.',
          np: 'विगतमा धेरै कम्पनीले राम्रो नाफा दिए तापनि ऋणमा डुबेका, नेटवर्थ ऋणात्मक भएका वा अत्यधिक प्रिमियम मूल्यमा आएका कम्पनीको सेयर सूचीकृत हुँदा घाटामा जाने जोखिम हुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'IPO vs FPO (Further Public Offering)', np: 'आइपिओ (IPO) र एफपिओ (FPO) बीचको भिन्नता' },
      subtitle: { en: 'Initial market debut vs subsequent equity issuance by an already listed company', np: 'कम्पनीको पहिलो बजार प्रवेश र पहिल्यै सूचीकृत कम्पनीले थप सेयर जारी गर्नु बीचको फरक' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Initial Public Offering (IPO)', np: 'प्राथमिक सेयर (IPO)' },
      colB: { en: 'Further Public Offering (FPO)', np: 'थप सार्वजनिक निष्कासन (FPO)' },
      rows: [
        {
          feature: { en: 'Company Status', np: 'कम्पनीको अवस्था' },
          valA: { en: 'Unlisted private firm entering stock market for the first time', np: 'पहिलोपटक बजारमा प्रवेश गर्न लागेको नयाँ कम्पनी' },
          valB: { en: 'Already listed on NEPSE; raising additional equity capital', np: 'नेप्सेमा पहिल्यै सूचीकृत भई कारोबार भइरहेको कम्पनी' }
        },
        {
          feature: { en: 'Issue Price', np: 'निष्कासन मूल्य' },
          valA: { en: 'Standard NPR 100 face value (unless approved premium)', np: 'प्रायः रु. १०० अंकित मूल्यमै निष्कासन हुने' },
          valB: { en: 'Priced at premium close to secondary market price', np: 'दोस्रो बजारको भाउसँग मिलाएर प्रिमियम मूल्य तोकिने' }
        },
        {
          feature: { en: 'Listing History', np: 'विगतको इतिहास' },
          valA: { en: 'Zero public trading history on NEPSE', np: 'नेप्सेमा दोस्रो बजारको कुनै अघिल्लो कारोबार इतिहास नहुने' },
          valB: { en: 'Established price discovery, track record, and past dividends', np: 'विगतको नाफा, लाभांश र बजार मूल्यको स्पष्ट ट्रयाक रेकर्ड हुने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'asba', name: 'ASBA', type: 'glossary' },
      { slug: 'demat', name: 'Demat', type: 'glossary' },
      { slug: 'meroshare', name: 'MeroShare', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Lifecycle of an IPO: From Prospectus to Allotment', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'IPO Allotment & Return Calculator', slug: 'cagr', desc: 'Calculate potential returns on your IPO allotments in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'Why did SEBON introduce the 10-kitta allotment system in Nepal?', np: 'धितोपत्र बोर्डले नेपालमा १० कित्ता बाँडफाँड प्रणाली किन ल्यायो?' },
        a: {
          en: 'SEBON introduced the policy in 2019 to democratize stock ownership. It prevented wealthy cartels from monopolizing primary issues, ensuring that even a student or farmer with NPR 1,000 could participate equally in Nepal’s economic growth.',
          np: 'पुँजी बजारमा सर्वसाधारणको पहुँच स्थापित गर्न धितोपत्र बोर्डले यो नियम ल्याएको हो। यसले सीमित धनी व्यक्तिहरूको एकाधिकार तोडेर गाउँघरका साना बचतकर्ता र विद्यार्थीलाई पनि सेयरधनी बन्ने समान अधिकार प्रदान गरेको छ।'
        }
      },
      {
        q: { en: 'How do I qualify for the Foreign Employment Migrant Worker IPO quota?', np: 'वैदेशिक रोजगार आरक्षित कोटामा आवेदन दिन के-के चाहिन्छ?' },
        a: {
          en: 'You must hold a valid Government Labor Permit from the Department of Foreign Employment, have a Remittance Savings Bank Account linked to C-ASBA, and have remitted at least NPR 50,000 into that bank account within the preceding six months.',
          np: 'श्रम विभागबाट जारी भएको वैध श्रम स्वीकृति, रेमिट्यान्स बचत खाता र उक्त खातामा पछिल्लो ६ महिनाभित्र कम्तीमा रु. ५०,००० रेमिट्यान्स पठाएको प्रमाण भएमा यो कोटामा आवेदन दिन पाइन्छ।'
        }
      },
      {
        q: { en: 'What does "Special Pre-Open Range" mean when an IPO lists on NEPSE?', np: 'नेप्सेमा आइपिओ सूचीकृत हुँदा "विशेष ओपनिङ रेन्ज" भनेको के हो?' },
        a: {
          en: 'NEPSE calculates the opening trading range based on the company’s audited Book Value per Share (Net Worth). The minimum opening price is 1x net worth and the maximum is 3x net worth. If net worth is NPR 120, the opening trading price range is NPR 120 to NPR 360.',
          np: 'कम्पनीको प्रतिसेयर नेटवर्थका आधारमा नेप्सेले पहिलो कारोबारको रेन्ज तोक्दछ। यो नेटवर्थको १ गुणादेखि अधिकतम ३ गुणासम्म हुन्छ। यदि नेटवर्थ रु. १२० छ भने पहिलो कारोबार रु. १२० देखि रु. ३६० को बीचमा खुल्छ।'
        }
      },
      {
        q: { en: 'What happens to my money if I do not get an IPO allotment?', np: 'आइपिओ नपरेमा मेरो पैसा के हुन्छ?' },
        a: {
          en: 'Because C-ASBA uses an account lien rather than debiting your funds, your unallotted money is automatically unblocked (unfrozen) by your bank within 1 to 3 banking days after the allotment announcement.',
          np: 'सी-आस्बा प्रणालीमा आवेदन दिँदा पैसा काटिएको नभई बैंक खातामै रोक्का मात्र रहने भएकाले नतिजा सार्वजनिक भएको १ देखि ३ कार्यदिनभित्र बैंकले स्वतः रोक्का फुकुवा (Unfreeze) गरिदिन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'An IPO is the first public sale of shares by a company transitioning from private to public on NEPSE.',
        'SEBON enforces the 10-kitta policy, giving every citizen an equal lottery chance for just NPR 1,000.',
        '10% of every public issue is reserved for Nepalis working abroad under official labor permits.',
        'Funds remain safely held in your own bank account via C-ASBA until formal allotment.'
      ],
      np: [
        'आइपिओ भनेको निजी कम्पनीले पुँजी संकलन गरी नेप्सेमा आउनका लागि पहिलोपटक सर्वसाधारणलाई सेयर बेच्ने प्रक्रिया हो।',
        'धितोपत्र बोर्डको १० कित्ता नियमले मात्र रु. १,००० मा जोसुकैलाई पनि गोलाप्रथाबाट सेयर पाउने अवसर दिएको छ।',
        'वैदेशिक रोजगारीमा रहेका श्रमिकहरूका लागि हरेक आइपिओमा १०% सेयर अनिवार्य रूपमा आरक्षित गरिएको छ।',
        'बाँडफाँड नटुंगिञ्जेल सी-आस्बामार्फत पैसा आफ्नै बैंक खातामा सुरक्षित रोक्का मात्र रहन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The Lifecycle of an IPO', type: 'Lesson', url: '/learn/nepse/what-is-investing' },
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' }
    ],
    meta: {
      title: 'What is an IPO in Nepal? 10-Kitta Rule & MeroShare Guide | risePaisa',
      description: 'Master Initial Public Offerings (IPOs) in Nepal. Understand SEBON\'s 10-kitta allotment rule, foreign remittance quotas, and C-ASBA mechanics.'
    }
  },

  // 2. DEMAT
  {
    slug: 'demat',
    term: 'Demat Account & BOID',
    termNp: 'डिम्याट खाता र बीओआईडी (Demat & BOID)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'D',
    abbreviation: 'BOID',
    synonyms: ['Beneficial Owner Identification', 'Dematerialized Account', 'BOID', 'डिम्याट खाता'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Demat (Dematerialized) account is an electronic repository that holds your stocks, bonds, debentures, and mutual fund units securely in digital format under CDSC.',
      np: 'डिम्याट (Demat) खाता भनेको सेयर, डिबेन्चर र म्युचुअल फण्डका इकाइहरूलाई भौतिक कागजी प्रमाणपत्रको सट्टा सीडीएससीको केन्द्रीय प्रणालीभित्र डिजिटल (विद्युतीय) रूपमा सुरक्षित राख्ने खाता हो।'
    },
    detailedExplanation: {
      en: 'In the past, owning shares meant storing paper share certificates in physical folders, exposing investors to risks of forgery, fire damage, theft, and agonizing postal transfer delays. CDS and Clearing Limited (CDSC), established under the ownership of NEPSE, dematerialized all physical share certificates in Nepal. When you open a Demat account through a licensed Depository Participant (DP)-such as a commercial bank or stockbroker-you are issued a unique 16-digit Beneficial Owner Identification Number (BOID). Your Demat account functions exactly like a digital bank account, but instead of storing cash rupees, it holds your financial securities.',
      np: 'विगतमा सेयरधनीसँग सेयरको कागजी प्रमाणपत्र हुन्थ्यो, जुन च्यातिने, हराउने, चोरी हुने वा नक्कली निस्कने ठूलो जोखिम रहन्थ्यो। नेपाल स्टक एक्सचेन्जको मातहतमा रहेको सिडिएस एण्ड क्लियरिङ लिमिटेड (CDSC) ले कागजी सेयरको अन्त्य गरी अभौतिकीकरण (Dematerialization) गर्‍यो। बैंक वा ब्रोकरजस्ता निक्षेप सदस्य (DP) मार्फत डिम्याट खाता खोल्दा १६ अंकको बीओआईडी (BOID) नम्बर प्राप्त हुन्छ। यो खाता ठ्याक्कै बैंक खाता जस्तै हो, तर यसमा पैसाको सट्टा तपाईंका सेयर, ऋणपत्र र म्युचुअल फण्ड डिजिटल रूपमा जम्मा हुन्छन्।'
    },
    whyItMatters: {
      en: 'A Demat account is the non-negotiable legal foundation for all investing in Nepal. Without an active Demat account and its corresponding 16-digit BOID, you cannot apply for an IPO, purchase shares on NEPSE TMS, receive bonus shares, or invest in mutual funds.',
      np: 'नेपालमा कुनै पनि प्रकारको सेयर कारोबार गर्न डिम्याट खाता पहिलो अनिवार्य सर्त हो। सक्रिय डिम्याट खाता र १६ अंकको बीओआईडी बिना आइपिओ भर्न, दोस्रो बजारमा सेयर किनबेच गर्न, बोनस सेयर प्राप्त गर्न वा म्युचुअल फण्डमा लगानी गर्न कानुनी रूपमा सम्भव छैन।'
    },
    howItWorks: {
      summary: {
        en: 'The operational workflow of Demat security transactions follows 4 core steps:',
        np: 'डिम्याट खातामा सेयर जम्मा र निष्कासन हुने प्रक्रिया ४ चरणमा चल्दछ:'
      },
      steps: [
        {
          title: { en: '1. Account Opening via DP', np: '१. डीपीमार्फत खाता खोल्ने' },
          desc: { en: 'Visit a licensed bank or broker Depository Participant (DP) with citizenship documents and photos to register your account.', np: 'कुनै वाणिज्य बैंक वा ब्रोकरको निक्षेप सदस्य (DP) मा नागरिकता, फोटो र व्यक्तिगत विवरण बुझाएर खाता खोलिन्छ।' }
        },
        {
          title: { en: '2. 16-Digit BOID Generation', np: '२. १६ अंकको बीओआईडी प्राप्ति' },
          desc: { en: 'CDSC issues a 16-digit identification number: the first 8 digits identify your DP, and the final 8 digits represent your unique client account.', np: 'सीडीएससीले १६ अंकको नम्बर दिन्छ: पहिलो ८ अंक डीपी कोड हुन्छ र पछिल्लो ८ अंक तपाईंको व्यक्तिगत ग्राहक नम्बर हुन्छ।' }
        },
        {
          title: { en: '3. Automated Credit on Purchase', np: '३. खरिद गर्दा स्वचालित जम्मा' },
          desc: { en: 'Whenever you win an IPO allotment or buy shares on NEPSE TMS, CDSC electronically credits the shares directly into your Demat account.', np: 'आइपिओ पर्दा वा दोस्रो बजारमा सेयर किन्दा फर्स्यौटका दिन सीडीएससीले स्वतः उक्त सेयर तपाईंको डिम्याटमा दाखिला गर्छ।' }
        },
        {
          title: { en: '4. Electronic Debit via EDIS', np: '४. बिक्री गर्दा ईडीआईएसमार्फत हस्तान्तरण' },
          desc: { en: 'When you sell shares on TMS, you authorize an Electronic Delivery Instruction Slip (EDIS) on MeroShare to transfer units out.', np: 'सेयर बिक्री गर्दा मेरोसेयरको ईडीआईएस (EDIS) मार्फत डिजिटल हस्ताक्षर गरी सेयर बाहिर पठाउन स्वीकृति दिइन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Central Depository Services (CDSC) electronic clearing',
        'MeroShare online application and transaction authorization',
        'Secondary market trade settlements via NEPSE brokers',
        'Pledging shares as collateral for bank margin loans'
      ],
      np: [
        'सीडीएस एण्ड क्लियरिङ लिमिटेड (CDSC) को केन्द्रीय विद्युतीय प्रणालीमा',
        'मेरोसेयरमार्फत आइपिओ आवेदन र सेयर ट्रान्सफर (EDIS) गर्दा',
        'दोस्रो बजारमा ब्रोकरमार्फत भएको सेयर किनबेच फर्स्यौट गर्दा',
        'बैंकबाट सेयर धितो कर्जा (Margin Loan) लिँदा सेयर रोक्का राख्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'CDSC Central Repository and the Annual Renewal Mandate in Nepal',
        np: 'सीडीएससी केन्द्रीय प्रणाली र डिम्याट नवीकरणको अनिवार्य नियम'
      },
      body: {
        en: 'In Nepal, all electronic securities are securely consolidated within CDS and Clearing Limited (CDSC), a fully owned subsidiary of NEPSE. Every Demat account is legally bound to an annual maintenance fee of NPR 100 (plus NPR 50 for MeroShare), payable by the end of each Nepali fiscal year (Ashadh end). If an investor fails to pay the NPR 100 renewal charge to their DP, CDSC automatically suspends the Demat account. While locked, shares remain completely safe, but the investor cannot sell shares on TMS, execute EDIS, or apply for new IPO issues until the dues are cleared.',
        np: 'नेपालमा सबै विद्युतीय सेयरहरू नेप्सेको पूर्ण स्वामित्वमा रहेको सीडीएस एण्ड क्लियरिङ लिमिटेड (CDSC) को केन्द्रीय भण्डारमा सुरक्षित रहन्छन्। प्रत्येक डिम्याट खाताको वार्षिक नवीकरण शुल्क रु. १०० (र मेरोसेयरको रु. ५०) तोकिएको छ, जुन हरेक आर्थिक वर्षको असार मसान्तभित्र सम्बन्धित डीपीलाई बुझाउनुपर्छ। नवीकरण नगरेमा सीडीएससीले खाता स्वतः फ्रिज (निलम्बन) गर्दछ। खाता फ्रिज हुँदा सेयर सुरक्षित रहे पनि नवीकरण शुल्क नतिरुन्जेल सेयर बेच्न वा नयाँ आइपिओ भर्न मिल्दैन।'
      },
      keyPoints: {
        en: [
          'Demat accounts are identified by a 16-digit unique BOID number.',
          'Annual renewal fee is NPR 100 for Demat and NPR 50 for MeroShare.',
          'An individual Nepali citizen can open a maximum of 2 Demat accounts legally.',
          'Suspended Demat accounts due to non-renewal cannot execute EDIS transfers.'
        ],
        np: [
          'डिम्याट खाताको पहिचान १६ अंकको विशेष बीओआईडी (BOID) नम्बरबाट हुन्छ।',
          'वार्षिक नवीकरण शुल्क डिम्याटको रु. १०० र मेरोसेयरको रु. ५० लाग्दछ।',
          'एकजना नेपाली नागरिकले बढीमा २ वटा मात्र डिम्याट खाता खोल्न पाउने कानुनी व्यवस्था छ।',
          'नवीकरण म्याद गुज्रेर फ्रिज भएको खाताबाट सेयर बिक्री (EDIS) गर्न पाइँदैन।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Aayush opens a Demat account at a commercial bank capital in Kathmandu. His assigned BOID is 1301050001234567 (where 13010500 is the bank’s DP code, and 01234567 is Aayush\'s unique client account). When Aayush applies for an IPO on MeroShare, he enters this BOID. After allotment, his 10 shares appear under his Demat balance. When he sells them two months later on TMS, the broker verifies his BOID, and Aayush approves the electronic transfer using EDIS. The physical shares never existed on paper, and the entire transaction completed digitally with zero paperwork.',
        np: 'काठमाडौंका आयुषले एउटा बैंक क्यापिटलमा डिम्याट खाता खोल्छन्। उनको बीओआईडी नम्बर १३०१०५०००१२३४५६७ हुन्छ (जसमा १३०१०५०० बैंकको डीपी कोड र ०१२३४५६७ आयुषको व्यक्तिगत नम्बर हो)। मेरोसेयरबाट आइपिओ भर्दा यो नम्बर आफैं जोडिन्छ र सेयर परेपछि यही डिम्याट खातामा १० कित्ता देखिन्छ। दुई महिनापछि टिएमएसमा सेयर बेच्दा आयुषले मेरोसेयरको ईडीआईएस (EDIS) मार्फत यही खाताबाट सेयर पठाउन स्वीकृति दिन्छन्। कतै कागजी फारम नबुझाईकनै सबै कारोबार डिजिटल रूपमा सुरक्षित सम्पन्न हुन्छ।'
      },
      takeaway: {
        en: 'Your 16-digit BOID is your permanent financial identity across Nepal’s capital markets; guarding your credentials protects all your wealth.',
        np: '१६ अंकको बीओआईडी नेपालको सेयर बजारमा तपाईंको स्थायी डिजिटल ठेगाना हो; यसको सुरक्षा गर्नु नै आफ्नो कुल सेयर सम्पत्ति सुरक्षित राख्नु हो।'
      }
    },
    formula: null,
    advantages: {
      en: [
        '100% immune to physical risks: theft, fire destruction, mutilation, or fake certificates',
        'Instant paperless trade settlements through electronic CDSC clearing',
        'Automatic direct credit of bonus shares and rights entitlements into your account',
        'Enables easy pledging of shares for quick bank margin loans'
      ],
      np: [
        'कागजी प्रमाणपत्र च्यातिने, हराउने, आगलागी हुने वा नक्कली पर्ने जोखिमबाट १००% मुक्त',
        'सीडीएससीको केन्द्रीय प्रणालीमार्फत तुरुन्तै कागजरहित डिजिटल फर्स्यौट',
        'कम्पनीले दिएको बोनस सेयर र हकप्रद सेयर स्वतः खातामा जम्मा हुने सुविधा',
        'आवश्यक परेको बेला बैंकबाट सहुलियत दरमा सेयर धितो कर्जा लिन सजिलो'
      ]
    },
    limitations: {
      en: [
        'Requires payment of an annual maintenance fee of NPR 100 plus NPR 50 for MeroShare',
        'Account gets suspended if annual renewal fees are overlooked, blocking TMS sales',
        'Strict legal restriction: maximum 2 Demat accounts permitted per citizen in Nepal',
        'Requires continuous KYC profile updates whenever personal details change'
      ],
      np: [
        'हरेक वर्ष डिम्याटको रु. १०० र मेरोसेयरको रु. ५० नवीकरण शुल्क तिर्नुपर्ने',
        'समयमा नवीकरण नगरेमा खाता फ्रिज भई सेयर बिक्री (EDIS) गर्न नसकिने',
        'नेपालमा एक व्यक्तिले बढीमा २ वटा भन्दा बढी डिम्याट खाता खोल्न नपाइने कानुनी सीमा',
        'ठेगाना वा बैंक खाता परिवर्तन हुँदा डीपीमा गएर केवाइसी अद्यावधिक गर्नुपर्ने झन्झट'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'If my Demat account gets suspended for non-renewal, all my shares are deleted by CDSC.',
          np: 'नवीकरण नगरेर डिम्याट खाता फ्रिज भएमा खातामा भएका सेयरहरू सबै हराउँछन् वा सरकारले जफत गर्छ।'
        },
        reality: {
          en: 'Your shares remain completely safe in the CDSC central vault indefinitely. A freeze merely halts outgoing transactions. Paying the pending renewal fee immediately restores full trading functionality.',
          np: 'तपाईंका सेयरहरू सीडीएससीको केन्द्रीय प्रणालीमा पूर्ण सुरक्षित रहन्छन्। फ्रिज हुनु भनेको कारोबार रोकिनु मात्र हो। बाँकी नवीकरण शुल्क तिर्नासाथ खाता तुरुन्त सुचारु हुन्छ र सेयर जस्ताको तस्तै पाइन्छ।'
        }
      },
      {
        myth: {
          en: 'You can open 5 or 6 Demat accounts across different banks to win more IPOs.',
          np: 'धेरै आइपिओ पार्नका लागि फरक-फरक बैंकमा गएर ५-६ वटा डिम्याट खाता खोल्न मिल्छ।'
        },
        reality: {
          en: 'SEBON and CDSC strictly limit each citizen to a maximum of 2 Demat accounts verified via citizenship/NID. Applying for the same IPO from multiple accounts leads to instant cancellation of all applications.',
          np: 'धितोपत्र बोर्डको नियम अनुसार एक व्यक्तिले बढीमा २ वटा मात्र डिम्याट खाता राख्न पाउँछ। एउटै व्यक्तिले दुईवटै खाताबाट एउटै आइपिओ भरेमा दुवै आवेदन स्वतः रद्द हुन्छन्।'
        }
      }
    ],
    comparison: {
      title: { en: 'Demat Account vs Bank Savings Account', np: 'डिम्याट खाता र बैंक बचत खाता बीचको तुलना' },
      subtitle: { en: 'Custody of financial securities vs custody of cash currency', np: 'सेयर तथा धितोपत्रको भण्डारण र नगद रुपैयाँको भण्डारण बीचको फरक' },
      featureHeader: { en: 'Feature', np: 'विशेषता' },
      colA: { en: 'Demat Account', np: 'डिम्याट खाता (Demat Account)' },
      colB: { en: 'Bank Savings Account', np: 'बैंक बचत खाता (Savings Account)' },
      rows: [
        {
          feature: { en: 'Asset Stored', np: 'जम्मा हुने सम्पत्ति' },
          valA: { en: 'Shares, debentures, and mutual fund units', np: 'सेयर, ऋणपत्र र सामूहिक लगानी कोषका इकाइहरू' },
          valB: { en: 'Cash currency (Nepalese Rupees - NPR)', np: 'नगद रुपैयाँ (नेपाली रुपैयाँ)' }
        },
        {
          feature: { en: 'Governing Body', np: 'प्रमुख नियामक' },
          valA: { en: 'CDSC and Securities Board of Nepal (SEBON)', np: 'सीडीएससी (CDSC) र धितोपत्र बोर्ड (SEBON)' },
          valB: { en: 'Nepal Rastra Bank (NRB)', np: 'नेपाल राष्ट्र बैंक (NRB)' }
        },
        {
          feature: { en: 'Identifier Number', np: 'पहिचान नम्बर' },
          valA: { en: '16-Digit Beneficial Owner ID (BOID)', np: '१६ अंकको बीओआईडी (BOID) नम्बर' },
          valB: { en: '14 to 16-digit Bank Account Number', np: '१४ देखि १६ अंकको बैंक खाता नम्बर' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'meroshare', name: 'MeroShare', type: 'glossary' },
      { slug: 'asba', name: 'ASBA', type: 'glossary' },
      { slug: 'tms', name: 'TMS', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Modern Toolkit: Demat, MeroShare & TMS', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Net Worth Calculator', slug: 'net-worth', desc: 'Assess total stock value held in your Demat account.' }
    ],
    faqs: [
      {
        q: { en: 'How do I find my 16-digit BOID number?', np: 'आफ्नो १६ अंकको बीओआईडी (BOID) नम्बर कसरी हेर्ने?' },
        a: {
          en: 'Log in to your MeroShare web portal or mobile app, click on the profile icon in the top-right corner, and select "My Profile". Your 16-digit BOID is displayed prominently at the top.',
          np: 'मेरोसेयरको वेबसाइट वा एपमा लगइन गरी माथि दायाँ कुनामा रहेको प्रोफाइलमा क्लिक गरेर "My Profile" मा हेर्दा १६ अंकको बीओआईडी नम्बर प्रस्ट देखिन्छ।'
        }
      },
      {
        q: { en: 'Can I transfer shares from one Demat account to another in Nepal?', np: 'के नेपालमा एउटा डिम्याट खाताबाट अर्को डिम्याट खातामा सेयर सार्न मिल्छ?' },
        a: {
          en: 'Yes. If both accounts belong to the same person (inter-depository transfer), you submit an account transfer form to your DP. Off-market transfers between different individuals are strictly regulated and allowed only for legal family inheritance or approved court settlements.',
          np: 'मिल्छ। यदि दुवै खाता आफ्नै नामका हुन् भने डीपीमा निवेदन दिएर सजिलै सार्न सकिन्छ। तर फरक-फरक व्यक्तिको बीचमा भने सिधै सेयर सार्न पाइँदैन; केवल कानुनी अंशबन्डा, मृत्युपछिको नामसारी वा अदालतको फैसलाबाट मात्र मिल्छ।'
        }
      },
      {
        q: { en: 'What is a Depository Participant (DP) in Nepal?', np: 'नेपालमा निक्षेप सदस्य (DP) भनेको के हो?' },
        a: {
          en: 'A DP is a licensed financial intermediary-usually a merchant banking capital, commercial bank, or registered stockbroker-authorized by CDSC to interface with investors, open Demat accounts, and manage share certificates.',
          np: 'डीपी भनेको सीडीएससीबाट अनुमति प्राप्त वित्तीय संस्था (जस्तै बैंक, क्यापिटल वा ब्रोकर) हो जसले सर्वसाधारणको डिम्याट खाता खोल्ने, केवाइसी प्रमाणीकरण गर्ने र सेयर अभौतिकीकरणको काम गर्छ।'
        }
      },
      {
        q: { en: 'How do I pay the annual Demat renewal fee online?', np: 'डिम्याटको वार्षिक नवीकरण शुल्क अनलाइन कसरी तिर्ने?' },
        a: {
          en: 'You can pay the NPR 100 renewal fee directly inside MeroShare under the profile section using digital payment wallets (eSewa, Khalti, ConnectIPS) or directly through mobile banking apps.',
          np: 'मेरोसेयरको प्रोफाइल भित्र गएर "Renew Demat" मा क्लिक गरी इसेवा, खल्ती, कनेक्टआईपीएस वा मोबाइल बैंकिङमार्फत सजिलै रु. १०० नवीकरण शुल्क भुक्तानी गर्न सकिन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'A Demat account stores your shares and financial securities securely in digital format under CDSC.',
        'Identified by a unique 16-digit BOID, it is the foundational requirement for all stock investing in Nepal.',
        'An annual renewal fee of NPR 100 must be paid each fiscal year to prevent account freezing.',
        'Each Nepali citizen is legally permitted to hold a maximum of two active Demat accounts.'
      ],
      np: [
        'डिम्याट खाताले सेयर र वित्तीय सम्पत्तिहरूलाई सीडीएससीको केन्द्रीय प्रणालीमा डिजिटल रूपमा सुरक्षित राख्छ।',
        '१६ अंकको बीओआईडीबाट चिनिने यो खाता नेपालको सेयर बजारमा लगानी गर्न पहिलो अनिवार्य आवश्यकता हो।',
        'खाता फ्रिज हुनबाट जोगाउन हरेक आर्थिक वर्षको असार मसान्तभित्र रु. १०० नवीकरण शुल्क तिर्नुपर्छ।',
        'एकजना नेपाली नागरिकले बढीमा दुईवटा मात्र डिम्याट खाता खोल्न पाउने कानुनी नियम छ।'
      ]
    },
    whereSeen: [
      { title: 'The Modern Toolkit', type: 'Lesson', url: '/learn/nepse/what-is-investing' },
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' }
    ],
    meta: {
      title: 'What is a Demat Account & BOID in Nepal? Complete Guide | risePaisa',
      description: 'Everything you need to know about Demat accounts and 16-digit BOID numbers in Nepal. Learn how CDSC works, annual renewal rules, and how to apply.'
    }
  },

  // 3. MEROSHARE
  {
    slug: 'meroshare',
    term: 'MeroShare',
    termNp: 'मेरोसेयर (MeroShare)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'M',
    abbreviation: null,
    synonyms: ['Mero Share Portal', 'CDSC MeroShare', 'मेरोसेयर अनलाइन', 'सीडीएससी पोर्टल'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'MeroShare is the centralized online web and mobile portal developed by CDS and Clearing Limited (CDSC) that allows Nepali investors to apply for IPOs, calculate WACC, authorize share transfers via EDIS, and track their portfolio.',
      np: 'मेरोसेयर (MeroShare) भनेको सिडिएस एण्ड क्लियरिङ लिमिटेड (CDSC) द्वारा सञ्चालित केन्द्रीय अनलाइन पोर्टल हो, जसको मद्दतले लगानीकर्ताले घरमै बसी आइपिओ भर्न, खरिद लागत (WACC) हिसाब गर्न, सेयर ट्रान्सफर (EDIS) गर्न र आफ्नो पोर्टफोलियो हेर्न सक्छन्।'
    },
    detailedExplanation: {
      en: 'Launched by CDSC to bring paperless efficiency to Nepal’s capital market, MeroShare transformed share investing from long bank queues into a 30-second digital task. It connects an investor’s Demat account, linked bank savings account (via C-ASBA), and secondary broker TMS account. Through MeroShare, an investor can apply for primary issues, check live allotment lottery results, compute Weighted Average Cost of Capital (WACC) for tax purposes, execute Electronic Delivery Instruction Slips (EDIS) upon selling shares, and view real-time valuation of all held assets.',
      np: 'नेपालको सेयर बजारलाई पूर्ण डिजिटल बनाउन सीडीएससीले सुरु गरेको मेरोसेयरले विगतमा घन्टौं बैंकको लाइनमा बसेर फारम भर्नुपर्ने बाध्यतालाई हटाएर ३० सेकेन्डको अनलाइन काममा सीमित गरिदिएको छ। यसले लगानीकर्ताको डिम्याट खाता, बैंक खाता (सी-आस्बा) र ब्रोकर टीएमएसलाई एकआपसमा जोड्दछ। मेरोसेयरबाट आइपिओ भर्ने, नतिजा हेर्ने, कर प्रयोजनका लागि खरिद लागत (WACC) प्रमाणित गर्ने, सेयर बिक्रीपछि ईडीआईएस (EDIS) मार्फत सेयर पठाउने र आफ्नो कुल पोर्टफोलियोको मूल्य हेर्ने कामहरू सहजै गर्न सकिन्छ।'
    },
    whyItMatters: {
      en: 'MeroShare is the single operational nerve center for over 6.5 million Nepali stock investors. Without MeroShare, you cannot transfer sold shares to your broker (leading to severe 20% auction closeout penalties) nor apply for public equity offerings.',
      np: 'मेरोसेयर नेपालका ६५ लाखभन्दा बढी सेयर लगानीकर्ताको दैनिक चलाउने मुख्य डिजिटल मञ्च हो। मेरोसेयर बिना आइपिओ भर्न सकिँदैन र दोस्रो बजारमा सेयर बेचेपछि ब्रोकरलाई सेयर हस्तान्तरण (EDIS) गर्न नमिल्दा २०% को चर्को जरिवाना (Closeout Penalty) लाग्ने जोखिम हुन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The core functionality of MeroShare is structured across 4 primary modules:',
        np: 'मेरोसेयर पोर्टल मुख्यतया ४ वटा महत्त्वपूर्ण सेवाहरूमा आधारित छ:'
      },
      steps: [
        {
          title: { en: '1. C-ASBA Primary Application', np: '१. सी-आस्बा आइपिओ आवेदन' },
          desc: { en: 'Navigate to "Apply for Issue", select active IPO/Rights/Debentures, enter bank details and CRN, and apply with your 4-digit PIN.', np: '"Apply for Issue" मा गएर खुला भएका आइपिओ वा हकप्रद छनोट गरी बैंक खाता, कित्ता र सीआरएन (CRN) नम्बर हालेर पिनमार्फत आवेदन दिइन्छ।' }
        },
        {
          title: { en: '2. Purchase Source & WACC', np: '२. खरिद स्रोत र WACC गणना' },
          desc: { en: 'After selling shares, verify the purchase cost under "My Purchase Source" to calculate legal cost base and holding period.', np: 'सेयर बिक्री गरेपछि "My Purchase Source" मा गएर आफ्नो वास्तविक खरिद लागत र सेयर होल्ड गरेको दिन हिसाब गरी प्रमाणीकरण गरिन्छ।' }
        },
        {
          title: { en: '3. EDIS Electronic Transfer', np: '३. ईडीआईएस (EDIS) सेयर ट्रान्सफर' },
          desc: { en: 'Under "My EDIS", generate and submit electronic transfer instructions before the settlement deadline to clear sold shares to the broker.', np: '"My EDIS" भित्र गएर आफूले बेचेको सेयरलाई तोकिएको समयभित्र ब्रोकरको क्लियरिङ पुल खातामा पठाउन डिजिटल स्वीकृति दिइन्छ।' }
        },
        {
          title: { en: '4. Portfolio & Dividend History', np: '४. पोर्टफोलियो र लाभांश विवरण' },
          desc: { en: 'Inspect "My Portfolio" to see latest closing valuation, profit/loss per stock, and track cash dividends deposited in your bank.', np: '"My Portfolio" मा गएर हालको बजार मूल्य अनुसार कुल सेयर सम्पत्ति र बैंकमा जम्मा भएको नगद लाभांशको विवरण हेर्न सकिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Applying for IPOs, FPOs, Rights Issues, and Mutual Funds',
        'Executing EDIS transfers following NEPSE TMS sales',
        'Calculating capital gains tax via My Purchase Source (WACC)',
        'Checking official allotment lottery results'
      ],
      np: [
        'आइपिओ, एफपिओ, हकप्रद सेयर र म्युचुअल फण्ड भर्दा',
        'नेप्से टिएमएसमा सेयर बेचेपछि ब्रोकरलाई सेयर पठाउन (EDIS)',
        'पुँजीगत लाभकर गणना गर्न खरिद लागत (WACC) प्रमाणीकरण गर्दा',
        'धितोपत्र बाँडफाँडको आधिकारिक नतिजा हेर्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Crucial T+2 EDIS Settlement Deadline and the 20% Closeout Penalty',
        np: 'मेरोसेयरको T+2 ईडीआईएस म्याद र २०% क्लोजआउट जरिवानाको जोखिम'
      },
      body: {
        en: 'A critical financial rule that every beginner in Nepal must memorize is the strict T+2 settlement cycle. When you sell shares on NEPSE TMS, you must log in to MeroShare, calculate WACC, and complete EDIS transfer before 5:00 PM on the following business day (or latest by T+2 morning). If you forget or fail to execute EDIS, you fail settlement. CDSC regulations mandate an automatic "Short-Supply Closeout Penalty" of 20% on the total trade value, deducted directly from your bank account! MeroShare is not just an application tool; it is your compliance gateway.',
        np: 'नेपालको सेयर बजारमा नयाँ लगानीकर्ताले जान्नै पर्ने सबैभन्दा संवेदनशील नियम भनेको T+2 फर्स्यौट चक्र हो। दोस्रो बजारमा सेयर बिक्री गरिसकेपछि अर्को दिन साँझ ५ बजेभित्र (वा बढीमा T+2 को बिहान) मेरोसेयरमा लगइन गरी WACC र EDIS गरिसक्नुपर्छ। यदि समयमै EDIS गर्न छुट्यो भने सीडीएससीको नियम अनुसार कारोबार रकमको २०% चर्को नगद जरिवाना (Closeout Penalty) लाग्छ र सो रकम सीधै तपाईंबाट असुल गरिन्छ! त्यसैले सेयर बेचेपछि मेरोसेयरमा गएर तुरुन्तै EDIS गर्नु अनिवार्य छ।'
      },
      keyPoints: {
        en: [
          'EDIS must be completed before the settlement deadline to avoid the 20% closeout penalty.',
          'Annual renewal fee is NPR 50, payable via digital wallets or mobile banking.',
          'Password and 4-digit transaction PIN should be kept confidential at all times.',
          'Requires an active CRN number provided by your C-ASBA verified bank.'
        ],
        np: [
          '२०% को चर्को जरिवानाबाट बच्न सेयर बेचेपछि तोकिएको समयमै EDIS गरिसक्नुपर्छ।',
          'मेरोसेयरको वार्षिक नवीकरण शुल्क रु. ५० डिजिटल वालेट वा मोबाइल बैंकिङबाट तिर्न सकिन्छ।',
          'मेरोसेयरको पासवर्ड र ४ अंकको कारोबार पिन (PIN) सधैं गोप्य राख्नुपर्छ।',
          'आइपिओ भर्नका लागि बैंकबाट प्रमाणीकरण गरिएको सीआरएन (CRN) नम्बर अनिवार्य चाहिन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Deepak sells 50 shares of a bank at NPR 600 per share on NEPSE TMS on Sunday (Total value = NPR 30,000). On Sunday evening, he logs in to MeroShare, clicks "My Purchase Source", confirms his WACC of NPR 250, and proceeds to "My EDIS". Under the "Transfer Shares" tab, he selects the settled trade, checks the box, and submits his transfer instruction. On Tuesday (T+2), CDSC clears the shares to the buyer, and the broker deposits NPR 28,250 (net of CGT and commission) into Deepak\'s bank account. Because Deepak executed EDIS immediately, his transaction settled flawlessly.',
        np: 'दीपकले आइतबार टिएमएसमार्फत एउटा बैंकको ५० कित्ता सेयर प्रति कित्ता रु. ६०० मा बेच्छन् (कुल रकम = रु. ३०,०००)। आइतबार साँझ नै उनले मेरोसेयरमा लगइन गरी "My Purchase Source" मा गएर आफ्नो खरिद लागत (WACC) रु. २५० प्रमाणीकरण गर्छन् र "My EDIS" मा जान्छन्। त्यहाँ "Transfer Shares" मा गएर बेचेको सेयर टिक लगाई सबमिट गर्छन्। मंगलबार (T+2) दिन सीडीएससीले सेयर खरिदकर्तालाई पठाउँछ र ब्रोकरले दीपकको बैंक खातामा नाफाकर र कमिसन कटाएर रु. २८,२५० जम्मा गरिदिन्छ। समयमै EDIS गरेकाले कुनै जरिवाना लागेन।'
      },
      takeaway: {
        en: 'Always complete WACC and EDIS on MeroShare immediately after selling shares on TMS to safeguard your trading profits from costly administrative penalties.',
        np: 'दोस्रो बजारमा सेयर बेच्नासाथ मेरोसेयर खोलेर तुरुन्तै WACC र EDIS गरिहाल्नुपर्छ, ताकि अञ्जानमै हुने २०% को ठूलो जरिवानाबाट जोगिन सकियोस्।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Apply for any IPO in Nepal within 30 seconds from anywhere in the world',
        'Instant paperless share transfers (EDIS) without visiting bank branches or broker offices',
        'Consolidated live portfolio tracker showing real-time market valuations',
        'Official, verified primary allotment check directly linked to CDSC database'
      ],
      np: [
        'संसारको जुनसुकै कुनाबाट पनि ३० सेकेन्डमै अनलाइनबाट आइपिओ भर्न सकिने',
        'ब्रोकर कार्यालय वा बैंकको शाखामा नगईकनै घरमै बसेर डिजिटल रूपमा सेयर हस्तान्तरण (EDIS)',
        'आफ्ना सबै सेयरहरूको हालको बजार मूल्य र कुल सम्पत्ति एकै ठाउँमा हेर्न सकिने',
        'सीडीएससीको मुख्य डाटाबेसमार्फत आइपिओ बाँडफाँडको आधिकारिक नतिजा तुरुन्त थाहा हुने'
      ]
    },
    limitations: {
      en: [
        'High web server traffic on massive IPO closing days can cause temporary login slowdowns',
        'Requires an active annual renewal fee of NPR 50 to maintain continuous access',
        'Forgetting to execute EDIS within the T+2 window triggers a severe 20% cash penalty',
        'Cannot execute secondary market trades directly (trading requires a separate broker TMS account)'
      ],
      np: [
        'धेरै आवेदन पर्ने अन्तिम दिनहरूमा अत्यधिक ट्राफिकका कारण कहिलेकाहीँ पोर्टल सुस्त हुने',
        'हरेक वर्ष रु. ५० नवीकरण शुल्क नबुझाएमा सेवा अवरुद्ध हुने',
        'T+2 दिनभित्र EDIS गर्न बिर्सिएमा कुल कारोबारको २०% चर्को जरिवाना तिर्नुपर्ने',
        'यसबाट सिधै दोस्रो बजारमा सेयर किनबेच गर्न मिल्दैन (त्यसका लागि ब्रोकरको TMS चाहिन्छ)'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'You can buy and sell secondary market shares directly inside MeroShare.',
          np: 'मेरोसेयर भित्रैबाट दोस्रो बजारमा सेयर किन्न र बेच्न मिल्छ।'
        },
        reality: {
          en: 'MeroShare is strictly a depository and settlement portal under CDSC. To buy and sell shares on the secondary market, you must use a licensed broker’s NEPSE TMS trading platform.',
          np: 'मेरोसेयर केवल डिपोजीटरी र फर्स्यौट पोर्टल हो। दोस्रो बजारमा सेयर किनबेच गर्नका लागि ब्रोकरको छुट्टै टिएमएस (TMS) प्रणाली चाहिन्छ।'
        }
      },
      {
        myth: {
          en: 'Once you sell a stock on TMS, the broker automatically pulls the shares without your permission.',
          np: 'टिएमएसमा सेयर बेचेपछि ब्रोकरले आफैं सेयर तानिहाल्छ, मेरोसेयरमा केही गर्नु पर्दैन।'
        },
        reality: {
          en: 'The broker cannot access your Demat account without your explicit digital signature. You must log in to MeroShare and authorize the transfer via EDIS yourself.',
          np: 'तपाईंको डिजिटल स्वीकृति बिना कसैले पनि डिम्याटबाट सेयर तान्न पाउँदैन। सेयर बेचेपछि लगानीकर्ता आफैंले मेरोसेयर खोलेर EDIS मार्फत सेयर हस्तान्तरण गर्नै पर्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'MeroShare Portal vs NEPSE TMS Platform', np: 'मेरोसेयर र नेप्से टिएमएस (TMS) बीचको भिन्नता' },
      subtitle: { en: 'Depository and settlement interface vs secondary market trade execution platform', np: 'सेयर भण्डारण/फर्स्यौट पोर्टल र दोस्रो बजार खरिदबिक्री मञ्चको तुलना' },
      featureHeader: { en: 'Feature', np: 'विशेषता' },
      colA: { en: 'MeroShare (CDSC)', np: 'मेरोसेयर (CDSC)' },
      colB: { en: 'NEPSE TMS (Broker)', np: 'नेप्से टिएमएस (ब्रोकर)' },
      rows: [
        {
          feature: { en: 'Primary Purpose', np: 'मुख्य उद्देश्य' },
          valA: { en: 'IPO applications, WACC, EDIS share transfer, portfolio tracking', np: 'आइपिओ भर्ने, WACC हिसाब, EDIS सेयर पठाउने र पोर्टफोलियो हेर्ने' },
          valB: { en: 'Placing live buy and sell orders on the secondary stock exchange', np: 'दोस्रो बजारमा प्रत्यक्ष रूपमा सेयर खरिद र बिक्रीको आदेश दिने' }
        },
        {
          feature: { en: 'Operating Authority', np: 'सञ्चालक निकाय' },
          valA: { en: 'CDS and Clearing Limited (CDSC)', np: 'सीडीएस एण्ड क्लियरिङ लिमिटेड (CDSC)' },
          valB: { en: 'NEPSE and your individual licensed stockbroker', np: 'नेपाल स्टक एक्सचेन्ज र सम्बन्धित सेयर ब्रोकर' }
        },
        {
          feature: { en: 'Login Credentials', np: 'लगइन विवरण' },
          valA: { en: 'DP code, Username, Password, 4-digit Transaction PIN', np: 'डीपी कोड, युजरनेम, पासवर्ड र ४ अंकको पिन' },
          valB: { en: 'Client Code, TMS Username, Password, 2FA / Captcha', np: 'क्लाइन्ट कोड, टिएमएस युजरनेम र पासवर्ड' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'demat', name: 'Demat', type: 'glossary' },
      { slug: 'asba', name: 'ASBA', type: 'glossary' },
      { slug: 'tms', name: 'TMS', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Modern Toolkit: Demat, MeroShare & TMS', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Share Profit / Loss Calculator', slug: 'cagr', desc: 'Calculate net gains before executing EDIS in MeroShare.' }
    ],
    faqs: [
      {
        q: { en: 'How do I reset my forgotten MeroShare password?', np: 'मेरोसेयरको पासवर्ड बिर्सिएमा कसरी रिसेट गर्ने?' },
        a: {
          en: 'On the MeroShare login screen, click "Forgot Your Password?", enter your DP code, username, registered email, and date of birth. A secure password reset link will be emailed to your inbox immediately.',
          np: 'मेरोसेयरको लगइन पेजमा गएर "Forgot Your Password?" मा क्लिक गर्ने, आफ्नो डीपी कोड, युजरनेम, दर्ता भएको इमेल र जन्ममिति हाल्दा इमेलमा पासवर्ड रिसेट गर्ने लिंक प्राप्त हुन्छ।'
        }
      },
      {
        q: { en: 'What is the 4-digit transaction PIN in MeroShare used for?', np: 'मेरोसेयरको ४ अंकको ट्रान्जिक्सन पिन (PIN) केका लागि प्रयोग हुन्छ?' },
        a: {
          en: 'The 4-digit PIN is a two-factor security code required every time you submit an IPO application or execute an EDIS share transfer, ensuring unauthorized individuals cannot move your assets.',
          np: 'यो ४ अंकको पिन आइपिओ फारम सबमिट गर्दा र सेयर बेचेपछि EDIS गर्दा सुरक्षाका लागि अनिवार्य हान्नुपर्ने गोप्य कोड हो, जसले अनाधिकृत व्यक्तिबाट खाता सुरक्षित राख्छ।'
        }
      },
      {
        q: { en: 'Why does MeroShare show "Insufficient Balance" when applying for an IPO?', np: 'आइपिओ भर्दा मेरोसेयरले "Insufficient Balance" किन देखाउँछ?' },
        a: {
          en: 'This error occurs when the available balance in your linked bank account is less than the total application amount (e.g. less than NPR 1,000 for 10 shares). Check your bank balance and ensure no minimum balance hold blocks the funds.',
          np: 'तपाईंको बैंक खातामा आवेदन दिन खोजेको रकम (जस्तै १० कित्ताका लागि रु. १,०००) भन्दा कम रकम मौज्दात भएमा यो समस्या देखिन्छ। बैंक खातामा पर्याप्त रकम जम्मा गरेपछि आवेदन सफल हुन्छ।'
        }
      },
      {
        q: { en: 'How do I update my expired MeroShare account?', np: 'म्याद सकिएको मेरोसेयर खाता कसरी नवीकरण गर्ने?' },
        a: {
          en: 'Log in to MeroShare, navigate to your profile in the top-right corner, click the "Renew" button, select your payment gateway (eSewa, Khalti, ConnectIPS), pay NPR 50, and your access will be extended for another fiscal year instantly.',
          np: 'मेरोसेयरको प्रोफाइलमा गएर "Renew Account" मा क्लिक गरी इसेवा, खल्ती वा कनेक्टआईपीएसमार्फत रु. ५० तिरेपछि खाता तुरुन्तै आगामी एक आर्थिक वर्षका लागि नवीकरण हुन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'MeroShare is the centralized CDSC digital hub for IPO applications, WACC calculation, and EDIS transfers.',
        'It connects an investor’s Demat account, linked bank account (C-ASBA), and broker trading platform.',
        'EDIS transfer must be authorized within T+2 after selling shares to prevent the 20% closeout penalty.',
        'Annual renewal fee is NPR 50, payable seamlessly via domestic digital payment gateways.'
      ],
      np: [
        'मेरोसेयर आइपिओ भर्न, WACC हिसाब गर्न र EDIS सेयर पठाउन प्रयोग गरिने सीडीएससीको केन्द्रीय पोर्टल हो।',
        'यसले लगानीकर्ताको डिम्याट खाता, बैंक खाता (सी-आस्बा) र ब्रोकरको टिएमएसलाई एकआपसमा जोड्दछ।',
        'सेयर बेचेपछि २०% जरिवानाबाट जोगिन तोकिएको समयभित्रै EDIS गर्नु अनिवार्य छ।',
        'यसको वार्षिक नवीकरण शुल्क रु. ५० डिजिटल वालेटबाट सजिलै तिर्न सकिन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The Modern Toolkit', type: 'Lesson', url: '/learn/nepse/what-is-investing' },
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' }
    ],
    meta: {
      title: 'MeroShare Nepal Complete Guide: IPO, WACC & EDIS | risePaisa',
      description: 'Master the CDSC MeroShare portal in Nepal. Step-by-step guide to applying for IPOs, calculating WACC, executing EDIS transfers, and avoiding the 20% penalty.'
    }
  },

  // 4. ASBA
  {
    slug: 'asba',
    term: 'C-ASBA & CRN Number',
    termNp: 'सी-आस्बा र सीआरएन नम्बर (C-ASBA & CRN)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'A',
    abbreviation: 'C-ASBA',
    synonyms: ['Centralized ASBA', 'Application Supported by Blocked Amount', 'CRN Number', 'सी-आस्बा प्रणाली'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'C-ASBA (Centralized Application Supported by Blocked Amount) is a regulatory payment mechanism that blocks your IPO application funds inside your own bank account rather than debiting them until allotment.',
      np: 'सी-आस्बा (C-ASBA) भनेको आइपिओ भर्दा आवेदन रकम सिधै नकाटी बाँडफाँड नटुंगिञ्जेल लगानीकर्ताकै बैंक खातामा रोक्का (Lien/Hold) राख्ने र सेयर परेमा मात्र रकम कट्टा गर्ने सुरक्षित बैंकिङ प्रणाली हो।'
    },
    detailedExplanation: {
      en: 'Before C-ASBA was introduced by the Securities Board of Nepal (SEBON), applying for an IPO required physically lining up at designated bank branches with paper application forms and bank drafts. Investors had to wait 3 to 6 months to receive physical refund cheques by post if they were unallotted. C-ASBA digitized and centralized this entire ecosystem. When you apply for an IPO via MeroShare, the system uses your unique C-ASBA Registration Number (CRN) to place a temporary lien (hold) on the exact application amount (e.g. NPR 1,000) inside your bank account. The money continues earning savings interest until the allotment date. If alloted, only the successful amount is debited; if unallotted, the lien is unlocked automatically.',
      np: 'धितोपत्र बोर्डले सी-आस्बा लागू गर्नुभन्दा अघि आइपिओ भर्न बैंकका शाखामा कागजी फारम र चेक बोकेर घन्टौं लाइन बस्नुपर्थ्यो। सेयर नपरेमा फिर्ता चेक लिन महिनौं कुर्नुपर्ने झन्झट थियो। सी-आस्बाले यो समस्यालाई पूर्ण रूपमा समाधान गर्‍यो। यस प्रणालीमा मेरोसेयरबाट आइपिओ भर्दा तपाईंको सीआरएन (CRN) नम्बरको मद्दतले तोकिएको रकम (जस्तै रु. १,०००) बैंक खातामै रोक्का (Hold) गरिन्छ। त्यो रकम रोक्का रहँदा पनि बैंकले बचतको ब्याज दिइरहन्छ। सेयर परेमा मात्र रकम काटिन्छ, नपरेमा बैंकले स्वतः रोक्का फुकुवा गर्छ।'
    },
    whyItMatters: {
      en: 'C-ASBA guarantees absolute safety of your capital. Your money never leaves your bank account until you are officially declared a winning shareholder. It eliminates cheque fraud, post-office delays, and lost refund drafts entirely.',
      np: 'सी-आस्बाले लगानीकर्ताको पुँजीलाई १००% सुरक्षित बनाउँछ। सेयर बाँडफाँडमा तपाईंको नाम ननिस्किएसम्म पैसा आफ्नै बैंक खातामै रहन्छ। यसले चेक हराउने, हुलाकबाट फिर्ता आउन ढिला हुने र बिचौलियाले ठगी गर्ने सबै सम्भावनालाई जरैदेखि अन्त्य गरिदिएको छ।'
    },
    howItWorks: {
      summary: {
        en: 'The C-ASBA validation and fund transfer lifecycle operates across 4 synchronized steps:',
        np: 'सी-आस्बा प्रणालीमा रकम रोक्का र बाँडफाँड हुने प्रक्रिया ४ चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. CRN Verification', np: '१. सीआरएन (CRN) प्रमाणीकरण' },
          desc: { en: 'You obtain a confidential C-ASBA Registration Number (CRN) from your bank by submitting a simple account verification form.', np: 'आफ्नो बैंक शाखामा गएर खाता रुजु गराई बैंकबाट गोप्य सीआरएन (CRN) नम्बर प्राप्त गरिन्छ।' }
        },
        {
          title: { en: '2. Application & Bank Lien Hold', np: '२. आवेदन र रकम रोक्का (Hold)' },
          desc: { en: 'When you apply on MeroShare, C-ASBA pings your bank to confirm available balance and places a mathematical lien (hold) on the funds.', np: 'मेरोसेयरबाट आवेदन दिनासाथ प्रणालीले बैंक खातामा रकम यकिन गरी आवेदन बराबरको रकम खातामै रोक्का राख्दछ।' }
        },
        {
          title: { en: '3. Automated Allotment Processing', np: '३. स्वचालित बाँडफाँड' },
          desc: { en: 'CDSC runs the transparent lottery algorithm. Winning applicants are marked for debit, while unsuccessful applicants are marked for release.', np: 'सीडीएससीले गोलाप्रथा गर्दछ। सेयर पर्नेहरूको रकम काट्न र नपर्नेहरूको रकम फुकुवा गर्न बैंकलाई विवरण पठाइन्छ।' }
        },
        {
          title: { en: '4. Debit or Instant Unfreeze', np: '४. कट्टी वा तत्काल फुकुवा' },
          desc: { en: 'The bank debits NPR 1,000 for winning allotments and transfers it to the company\'s account, instantly unfreezing all unallotted applicants.', np: 'बैंकले सेयर परेका आवेदकहरूको खाताबाट रु. १,००० काटेर कम्पनीलाई पठाउँछ र बाँकी नपरेकाहरूको रकम स्वतः फुकुवा गर्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'MeroShare online IPO, FPO, and debenture applications',
        'Commercial and development bank core banking systems (CBS)',
        'Issue manager allotment reconciliations under SEBON',
        'Foreign remittance quota verification for overseas workers'
      ],
      np: [
        'मेरोसेयरमा आइपिओ, एफपिओ र ऋणपत्रको अनलाइन आवेदन दिँदा',
        'वाणिज्य तथा विकास बैंकहरूको कोर बैंकिङ प्रणाली (CBS) मा',
        'धितोपत्र बोर्डको रोहवरमा निष्कासन व्यवस्थापकले गर्ने बाँडफाँडमा',
        'वैदेशिक रोजगारी कोटाका लागि रेमिट्यान्स खाता प्रमाणित गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'C-ASBA Fee Caps and Banking Integration across 50+ Financial Institutions in Nepal',
        np: 'नेपालमा सी-आस्बा शुल्कको सीमा र ५० भन्दा बढी बैंकहरूको आबद्धता'
      },
      body: {
        en: 'To make the primary market affordable, SEBON capped the maximum C-ASBA application processing fee that banks can charge at NPR 5 per application. In fact, many major commercial banks (such as Global IME, Nabil, NIC Asia, Rastriya Banijya Bank) charge NPR 0 (completely free C-ASBA service) to attract retail deposits. Over 50 commercial and development banks in Nepal are directly integrated into the centralized C-ASBA switch hosted by CDSC, allowing instantaneous bank balance verification for millions of simultaneous applications.',
        np: 'साना लगानीकर्तालाई राहत दिन धितोपत्र बोर्डले सी-आस्बा आवेदन शुल्कमा अधिकतम रु. ५ को सीमा तोकेको छ। अझ धेरैजसो वाणिज्य बैंकहरू (जस्तै ग्लोबल आइएमई, नबिल, एनआईसी एसिया, राष्ट्रिय वाणिज्य बैंक आदि) ले निक्षेपकर्ता आकर्षित गर्न यो सेवा पूर्ण निःशुल्क (रु. ०) दिएका छन्। नेपालका ५० भन्दा बढी बैंक तथा वित्तीय संस्थाहरू सीडीएससीको केन्द्रीय सी-आस्बा स्विचसँग प्रत्यक्ष जोडिएका छन्, जसले लाखौं नागरिकको आवेदन एकैसाथ तत्काल प्रमाणीकरण गर्दछ।'
      },
      keyPoints: {
        en: [
          'Funds stay inside your bank account and continue earning savings interest.',
          'Maximum statutory bank C-ASBA processing fee is capped at NPR 5 (many banks charge NPR 0).',
          'A unique CRN number from your bank is required to apply.',
          'Unallotted funds are unblocked automatically without requiring bank visits.'
        ],
        np: [
          'रकम आफ्नै बैंक खातामा रोक्का रहने हुनाले बचत खाताको ब्याज आइरहन्छ।',
          'बैंकले लिने अधिकतम सी-आस्बा शुल्क रु. ५ मात्र हो (धेरै बैंकहरूले निःशुल्क गरेका छन्)।',
          'आवेदन दिनका लागि आफ्नो बैंकले दिएको सीआरएन (CRN) नम्बर अनिवार्य चाहिन्छ।',
          'सेयर नपरेमा रकम फुकुवा गराउन बैंक धाइरहनु पर्दैन, स्वतः फुकुवा हुन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Binita has NPR 15,000 in her savings account earning 5% annual interest at an "A" class commercial bank. She applies for 10 shares (NPR 1,000) of an energy IPO using MeroShare C-ASBA. Her available balance immediately reflects NPR 14,000, while her total ledger balance remains NPR 15,000 (earning interest on the full NPR 15,000 during the 5-day allotment period). When the lottery concludes and she does not win shares, her bank lifts the NPR 1,000 lien hold within 24 hours. Her available balance returns to NPR 15,000 without losing a single rupee in bank fees or interest.',
        np: 'बिनिताको बैंक खातामा वार्षिक ५% ब्याज आउने गरी रु. १५,००० मौज्दात छ। उनले मेरोसेयरको सी-आस्बामार्फत एउटा हाइड्रोको आइपिओमा १० कित्ता (रु. १,०००) का लागि आवेदन दिन्छिन्। उनको चलाउन मिल्ने मौज्दात रु. १४,००० देखिन्छ तर कुल मौज्दात रु. १५,००० नै रहन्छ र ५ दिनको बाँडफाँड अवधिभर पूरै १५,००० कै ब्याज आइरहन्छ। जब नतिजा आउँछ र उनलाई सेयर पर्दैन, बैंकले २४ घण्टाभित्र रोक्का फुकुवा गरिदिन्छ। उनको खातामा पुनः पूरै १५,००० रुपैयाँ कुनै शुल्क नकटी फिर्ता उपलब्ध हुन्छ।'
      },
      takeaway: {
        en: 'C-ASBA eliminates capital loss and operational friction, allowing retail investors to safely submit IPO applications with zero financial risk.',
        np: 'सी-आस्बाले पुँजी डुब्ने जोखिम र प्रशासनिक झन्झट हटाएर जोसुकैलाई पनि ढुक्कसँग आइपिओ भर्ने वातावरण बनाइदिएको छ।'
      }
    },
    formula: null,
    advantages: {
      en: [
        '100% protection of capital: funds remain safely inside your personal bank account',
        'Earns continuous bank savings interest while funds are placed on temporary lien',
        'Completely eliminates lost refund cheques, bank queues, and physical paperwork',
        'Capped at negligible fees (NPR 0 to NPR 5 per application across Nepal)'
      ],
      np: [
        'पुँजीको पूर्ण सुरक्षा: सेयर नपर्दासम्म पैसा आफ्नै बैंक खाताभित्र सुरक्षित रहने',
        'रकम रोक्का रहेको अवधिभर पनि बैंकले दिने नियमित बचत ब्याज पाइरहने',
        'चेक हराउने, बैंकमा लाइन लाग्ने र कागजी फारम भर्नुपर्ने झन्झटको पूर्ण अन्त्य',
        'न्यूनतम वा शून्य शुल्क (नेपालका धेरै बैंकमा रु. ० देखि बढीमा रु. ५ मात्र शुल्क)'
      ]
    },
    limitations: {
      en: [
        'The blocked amount cannot be withdrawn from ATMs or transferred until allotment day',
        'Requires physical or online banking verification once to obtain the original CRN number',
        'If your bank branch changes or your account is frozen, C-ASBA applications will fail',
        'Bank servers undergoing maintenance can intermittently cause CRN verification timeouts'
      ],
      np: [
        'रोक्का रहेको रकम बाँडफाँड नटुंगिञ्जेल एटिएमबाट झिक्न वा अन्य खर्च गर्न मिल्दैन',
        'सुरुमा एकपटक सीआरएन नम्बर लिन बैंकमा प्रमाणीकरण गर्नुपर्ने बाध्यता',
        'बैंक खाता निष्क्रिय भएमा वा शाखा परिवर्तन भएमा आवेदन रद्द हुन सक्ने',
        'बैंकको सर्भर डाउन भएको बेला कहिलेकाहीँ सीआरएन प्रमाणीकरण नहुने समस्या'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'When you submit an IPO on MeroShare, the bank immediately sends the money to the issuing company.',
          np: 'मेरोसेयरबाट आइपिओ भर्नासाथ बैंकले पैसा सिधै सम्बन्धित कम्पनीको खातामा पठाइदिन्छ।'
        },
        reality: {
          en: 'The money never leaves your bank. It is simply blocked under a legal lien. Only if you win shares in the official lottery does the bank debit the funds.',
          np: 'पैसा बैंकबाट कतै जाँदैन। यो तपाईंको आफ्नै खातामा रोक्का मात्र रहने हो। गोलाप्रथाबाट सेयर परेको खण्डमा मात्र बैंकले रकम काटेर कम्पनीलाई पठाउँछ।'
        }
      },
      {
        myth: {
          en: 'You need a different CRN number for every different IPO issue you apply for.',
          np: 'हरेक पटक नयाँ आइपिओ भर्दा हरेकपटक नयाँ सीआरएन (CRN) नम्बर लिनुपर्छ।'
        },
        reality: {
          en: 'Your CRN number is permanent for that bank account. You use the exact same CRN number for every single IPO, Rights, or Debenture issue.',
          np: 'सीआरएन नम्बर बैंक खातासँग जोडिएको स्थायी नम्बर हो। एउटै सीआरएन नम्बर प्रयोग गरेर जतिवटा पनि आइपिओ, हकप्रद वा ऋणपत्र भर्न मिल्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'C-ASBA Online System vs Traditional Paper IPO System', np: 'सी-आस्बा अनलाइन प्रणाली र परम्परागत कागजी प्रणालीको तुलना' },
      subtitle: { en: 'Modern electronic fund lien vs legacy paper forms and physical refund cheques', np: 'आधुनिक डिजिटल रोक्का प्रणाली र पुरानो कागजी चेक प्रणाली बीचको भिन्नता' },
      featureHeader: { en: 'Metric', np: 'आधार' },
      colA: { en: 'C-ASBA System (Current)', np: 'सी-आस्बा प्रणाली (हालको)' },
      colB: { en: 'Legacy Paper System (Past)', np: 'पुरानो कागजी प्रणाली (विगतको)' },
      rows: [
        {
          feature: { en: 'Fund Handling', np: 'रकमको अवस्था' },
          valA: { en: 'Blocked inside your own bank account; earns interest', np: 'आफ्नै खातामा रोक्का रहने; बचत ब्याज आइरहने' },
          valB: { en: 'Debited upfront via draft/cheque to company account', np: 'सुरुमै ड्राफ्ट वा चेक काटेर कम्पनीलाई बुझाउनुपर्ने' }
        },
        {
          feature: { en: 'Refund Timeline', np: 'पैसा फिर्ताको अवधि' },
          valA: { en: 'Instant automatic unfreeze within 24-48 hours', np: 'नतिजा आएको २४ देखि ४८ घण्टाभित्र स्वतः फुकुवा' },
          valB: { en: 'Took 3 to 6 months; long queues to collect physical cheques', np: '३ देखि ६ महिना लाग्ने; हुलाकबाट चेक लिन लाइन बस्नुपर्ने' }
        },
        {
          feature: { en: 'Application Speed', np: 'आवेदनको समय' },
          valA: { en: '30 seconds via MeroShare app or web', np: 'मेरोसेयरबाट जम्मा ३० सेकेन्डमा सम्पन्न' },
          valB: { en: '3 to 5 hours standing in physical bank queues', np: 'बैंकको शाखामा ३ देखि ५ घन्टा लाइन बस्नुपर्ने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'ipo', name: 'IPO', type: 'glossary' },
      { slug: 'meroshare', name: 'MeroShare', type: 'glossary' },
      { slug: 'demat', name: 'Demat', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Modern Toolkit: Demat, MeroShare & TMS', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'IPO Allotment Calculator', slug: 'cagr', desc: 'Assess returns from C-ASBA IPO applications in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'How do I obtain my CRN number from my bank?', np: 'आफ्नो बैंकबाट सीआरएन (CRN) नम्बर कसरी लिने?' },
        a: {
          en: 'You can obtain your CRN by visiting your bank branch with your Demat confirmation slip, or instantly online through your bank’s mobile banking app or internet banking portal under the C-ASBA / Demat services tab.',
          np: 'आफ्नो बैंकको शाखामा डिम्याट नम्बर देखाएर वा बैंकको मोबाइल बैंकिङ एपभित्र "C-ASBA / Requests" मा गएर तुरुन्तै अनलाइनबाटै सीआरएन नम्बर प्राप्त गर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'What should I do if MeroShare says "CRN Verification Failed"?', np: 'मेरोसेयरमा "CRN Verification Failed" भन्यो भने के गर्ने?' },
        a: {
          en: 'This error occurs if your name, date of birth, or citizenship number in your bank account does not exactly match your Demat account, or if you entered an incorrect CRN. Contact your bank\'s C-ASBA desk to reconcile your KYC information.',
          np: 'बैंक खाता र डिम्याट खातामा नामको हिज्जे, जन्ममिति वा नागरिकता नम्बर मेल नखाएमा यस्तो समस्या आउँछ। आफ्नो बैंकमा सम्पर्क गरी केवाइसी विवरण सच्याएपछि यो समस्या समाधान हुन्छ।'
        }
      },
      {
        q: { en: 'Can I apply for an IPO using a joint bank account under C-ASBA?', np: 'के सी-आस्बामार्फत संयुक्त (Joint) बैंक खाताबाट आइपिओ भर्न मिल्छ?' },
        a: {
          en: 'Under SEBON rules, an IPO application requires a 1:1 match between the Demat owner and the bank account holder. If applying from a joint account, only the primary account holder whose name appears first can link their Demat account.',
          np: 'धितोपत्र बोर्डको नियम अनुसार डिम्याटको नाम र बैंक खाताको मुख्य नाम ठ्याक्कै एउटै हुनुपर्छ। संयुक्त खातामा जसको नाम पहिलो नम्बरमा छ, उसले मात्र आफ्नो डिम्याट जोडेर आइपिओ भर्न पाउँछ।'
        }
      },
      {
        q: { en: 'Does the bank charge me every time I apply for an IPO?', np: 'के आइपिओ भरेपिच्छे बैंकले शुल्क काट्छ?' },
        a: {
          en: 'Most major commercial banks in Nepal charge NPR 0. Some development banks or select commercial banks charge between NPR 2 to NPR 5 per application as permitted by SEBON guidelines.',
          np: 'नेपालका अधिकांश ठूला वाणिज्य बैंकहरूले कुनै शुल्क (रु. ०) लिँदैनन्। केही विकास बैंक वा सीमित बैंकहरूले मात्र धितोपत्र बोर्डले तोके बमोजिम प्रति आवेदन रु. २ देखि रु. ५ सम्म काट्न सक्छन्।'
        }
      }
    ],
    summary: {
      en: [
        'C-ASBA is an electronic payment system that blocks IPO application funds in your own bank account until allotment.',
        'Your money remains 100% safe and continues earning bank savings interest during the hold period.',
        'A confidential CRN number provided by your bank links your bank account to MeroShare.',
        'Unallotted applicants have their funds automatically unfrozen without paperwork or branch visits.'
      ],
      np: [
        'सी-आस्बा भनेको आइपिओ भर्दा रकम नकाटी बाँडफाँड नटुंगिञ्जेल आफ्नै बैंक खातामा रोक्का राख्ने सुरक्षित प्रणाली हो।',
        'रोक्का रहेको अवधिभर पनि रकम सुरक्षित रहन्छ र बैंकले दिने नियमित बचत ब्याज पाइरहन्छ।',
        'बैंकले दिने स्थायी सीआरएन (CRN) नम्बरले मेरोसेयर र बैंक खातालाई सुरक्षित जोड्ने काम गर्छ।',
        'सेयर नपरेमा कुनै कागजी झन्झट बिना स्वतः २४ देखि ४८ घण्टाभित्र रकम रोक्का फुकुवा हुन्छ।'
      ]
    },
    whereSeen: [
      { title: 'The Modern Toolkit', type: 'Lesson', url: '/learn/nepse/what-is-investing' },
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' }
    ],
    meta: {
      title: 'What is C-ASBA & CRN Number in Nepal? Complete Guide | risePaisa',
      description: 'Learn how C-ASBA works in Nepal. Understand how your funds are blocked in your bank account, how to get a CRN number, and bank fee caps.'
    }
  },

  // 5. TMS
  {
    slug: 'tms',
    term: 'NEPSE TMS (Trade Management System)',
    termNp: 'नेप्से टिएमएस (NEPSE TMS)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'T',
    abbreviation: 'TMS',
    synonyms: ['Trade Management System', 'Broker Trading Account', 'NEPSE NOTS', 'टिएमएस प्रणाली'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'NEPSE TMS (Trade Management System) is the official online trading portal provided by licensed Nepali stockbrokers that allows investors to place real-time buy and sell orders on the secondary stock exchange.',
      np: 'नेप्से टिएमएस (TMS) भनेको नेपालका इजाजतप्राप्त धितोपत्र दलाल (ब्रोकर) कम्पनीहरूले उपलब्ध गराउने अनलाइन कारोबार प्रणाली हो, जसको मद्दतले लगानीकर्ताले दोस्रो बजारमा प्रत्यक्ष रूपमा सेयर खरिद र बिक्रीको आदेश दिन सक्छन्।'
    },
    detailedExplanation: {
      en: 'The NEPSE Trade Management System (TMS), officially known as the NEPSE Online Trading System (NOTS), connects individual investors directly to the central matching engine of the Nepal Stock Exchange. Through your designated broker\'s TMS portal, you can monitor the live market order book (Depth), track real-time price fluctuations, place limit or market orders, load trading collateral via ConnectIPS, and execute secondary stock purchases and sales between 11:00 AM and 3:00 PM on trading days (Sunday through Thursday).',
      np: 'नेप्से अनलाइन ट्रेडिङ सिस्टम (NOTS) अन्तर्गत सञ्चालित टिएमएसले व्यक्तिगत लगानीकर्तालाई नेपाल स्टक एक्सचेन्जको केन्द्रीय म्याचिङ इन्जिनसँग सिधै जोड्दछ। आफ्नो ब्रोकरको टिएमएस पोर्टलमा लगइन गरेर लगानीकर्ताले प्रत्यक्ष मार्केट डेप्थ (Order Depth) हेर्न, सेयरको तात्कालिक भाउ हेर्न, खरिद वा बिक्री आदेश (Limit Order) राख्न, कनेक्टआईपीएसमार्फत कोल्याटरल (धितो) लोड गर्न र आइतबारदेखि बिहीबारसम्म बिहान ११:०० देखि दिउँसो ३:०० बजेसम्म कारोबार गर्न सक्छन्।'
    },
    whyItMatters: {
      en: 'While MeroShare handles primary IPO applications, TMS is your exclusive vehicle for active wealth creation on the secondary market. It empowers you to buy shares in fundamentally solid companies at fair valuations, sell underperforming positions, and capitalize on multi-year economic expansion in Nepal.',
      np: 'मेरोसेयरले प्राथमिक बजार (IPO) मात्र हेर्ने भए तापनि वास्तविक सम्पत्ति निर्माणको मुख्य मञ्च दोस्रो बजारको टिएमएस नै हो। यसैको मद्दतले राम्रा कम्पनीहरूको सेयर दोस्रो बजारबाट चाहेको मूल्यमा खरिद गर्न, नाफा भएको सेयर बेच्न र देशको आर्थिक वृद्धिसँगै आफ्नो पुँजी बढाउन सकिन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'Secondary market trading on NEPSE TMS operates across 4 core operational steps:',
        np: 'नेप्से टिएमएसमा दोस्रो बजार कारोबार ४ वटा मुख्य चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Account Registration & KYC', np: '१. ब्रोकर खाता र केवाइसी' },
          desc: { en: 'Register with a licensed stockbroker (Broker No. 1 to 90+), verify your citizenship, bank account, and Demat details to receive your TMS login.', np: 'इजाजतप्राप्त सेयर ब्रोकरकहाँ नागरिकता, बैंक खाता र डिम्याट रुजु गराई टिएमएस युजरनेम र पासवर्ड प्राप्त गरिन्छ।' }
        },
        {
          title: { en: '2. Collateral Deposit', np: '२. कोल्याटरल (Collateral) लोड' },
          desc: { en: 'Load trading collateral via ConnectIPS or mobile banking. Under SEBON rules, your trading limit is typically set at 4x your deposited cash collateral.', np: 'कनेक्टआईपीएसमार्फत नगद कोल्याटरल लोड गरिन्छ। धितोपत्र बोर्डको नियम अनुसार जम्मा गरेको नगदको ४ गुणा (१:४) सम्मको सेयर खरिद सीमा पाइन्छ।' }
        },
        {
          title: { en: '3. Order Placement & Matching', np: '३. खरिदबिक्री आदेश र मिलान' },
          desc: { en: 'Submit your buy or sell order specifying ticker, quantity, and limit price. When an opposing order matches on price and time priority, NEPSE executes the trade.', np: 'कम्पनीको कोड, कित्ता र आफूले चाहेको मूल्य हालेर आदेश दिइन्छ। खरिदकर्ता र बिक्रीकर्ताको मूल्य मिल्नासाथ नेप्सेले कारोबार सम्पन्न गर्छ।' }
        },
        {
          title: { en: '4. Clearing & Settlement (T+2)', np: '४. फर्स्यौट र भुक्तानी (T+2)' },
          desc: { en: 'The trade settles within T+2 working days: buyers pay net cash, sellers authorize EDIS via MeroShare, and CDSC completes share delivery.', np: 'कारोबार भएको T+2 दिनभित्र खरिदकर्ताले बाँकी रकम तिर्छन्, बिक्रीकर्ताले मेरोसेयरबाट EDIS गर्छन् र सीडीएससीले सेयर डिम्याटमा पठाइदिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Buying and selling listed equities, mutual funds, and debentures on NEPSE',
        'Monitoring the live 5-level Market Order Depth during trading hours',
        'Viewing broker contract notes, transaction ledgers, and financial balances',
        'Managing cash collateral and bank refund requests'
      ],
      np: [
        'नेप्सेमा सूचीकृत सेयर, म्युचुअल फण्ड र ऋणपत्र किनबेच गर्दा',
        'कारोबार समयमा बजारको ५ तहको माग र आपूर्ति (Market Depth) हेर्दा',
        'ब्रोकर बिल (Contract Note), कारोबार लेजर र वित्तीय विवरण हेर्न',
        'कोल्याटरल रकम लोड गर्न र नाफा भएको रकम बैंकमा फिर्ता माग्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The 1:4 Collateral Rule, Broker Expansion, and T+2 Settlement in Nepal',
        np: 'नेपालमा १:४ कोल्याटरल नियम, नयाँ ब्रोकरहरूको विस्तार र T+2 चक्र'
      },
      body: {
        en: 'Historically, Nepal operated with only 50 brokerages, forcing investors to visit physical offices. Following SEBON’s financial liberalization, over 40 new institutional stockbrokers were licensed, bringing modern digital onboarding across all 7 provinces. In Nepal, buying shares on TMS requires pre-funding collateral: depositing NPR 25,000 cash via ConnectIPS unlocks an NPR 100,000 buying limit (a 1:4 leverage ratio). All trades settle under strict T+2 rules. Buyers must settle the remaining 75% cash balance before T+2, while sellers must execute EDIS on MeroShare to avoid severe regulatory closeout penalties.',
        np: 'विगतमा नेपालमा ५० वटा मात्र ब्रोकरहरू थिए र कारोबार गर्न कार्यालयमै पुग्नुपर्थ्यो। धितोपत्र बोर्डले नयाँ ब्रोकरहरूलाई अनुमति दिएपछि हाल देशैभरि अनलाइनबाटै खाता खोल्न सकिने आधुनिक सेवा सुरु भएको छ। नेप्से टिएमएसमा सेयर खरिद गर्न कोल्याटरल अनिवार्य हुन्छ: कनेक्टआईपीएसमार्फत रु. २५,००० नगद लोड गर्दा रु. १,००,००० सम्मको सेयर किन्न सकिने सीमा (१:४ को अनुपात) पाइन्छ। सबै कारोबार T+2 दिनभित्र फर्स्यौट हुनुपर्छ। खरिदकर्ताले बाँकी ७५% रकम तिर्नुपर्छ भने बिक्रीकर्ताले मेरोसेयरबाट EDIS गर्नै पर्छ।'
      },
      keyPoints: {
        en: [
          'Trading hours on NEPSE run from 11:00 AM to 3:00 PM, Sunday through Thursday.',
          'Cash collateral provides a 1:4 purchasing limit on TMS for buying shares.',
          'Trades settle strictly on a T+2 clearing schedule via CDSC.',
          'Broker commission ranges from 0.24% to 0.36% based on transaction volume.'
        ],
        np: [
          'नेप्सेमा कारोबार आइतबारदेखि बिहीबारसम्म बिहान ११:०० देखि दिउँसो ३:०० बजेसम्म खुल्छ।',
          'लोड गरिएको नगद कोल्याटरलको आधारमा ४ गुणा (१:४) सम्मको सेयर खरिद सीमा पाइन्छ।',
          'सबै कारोबारहरू सीडीएससीको T+2 कार्यदिनको फर्स्यौट नियम अनुसार सम्पन्न हुन्छन्।',
          'कारोबार रकमको आधारमा ०.२४% देखि ०.३६% सम्म ब्रोकर कमिसन लाग्दछ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Umesh wants to buy 100 shares of a commercial bank trading around NPR 350. He logs in to his broker’s TMS, deposits NPR 10,000 cash collateral via ConnectIPS, which immediately grants him a buying power of NPR 40,000 (1:4 ratio). At 11:30 AM, he opens the Market Depth, observes sellers offering shares at NPR 352, and places a Limit Buy order for 100 shares at NPR 350. At 1:15 PM, a seller agrees to NPR 350, and the order executes for NPR 35,000. Umesh transfers the remaining NPR 25,000 plus broker commissions to the broker via bank transfer on Monday. On Tuesday (T+2), the 100 shares are safely credited to his Demat account.',
        np: 'उमेशले नेप्सेमा रु. ३५० मा कारोबार भइरहेको एउटा वाणिज्य बैंकको १०० कित्ता सेयर किन्न चाहन्छन्। उनले आफ्नो ब्रोकरको टिएमएसमा लगइन गरी कनेक्टआईपीएसमार्फत रु. १०,००० कोल्याटरल लोड गर्छन्, जसले उनलाई रु. ४०,००० सम्मको खरिद सीमा दिन्छ। बिहान ११:३० बजे उनले मार्केट डेप्थ हेरेर १०० कित्ताका लागि रु. ३५० को लिमिट अर्डर हाल्छन्। दिउँसो १:१५ बजे अर्को बिक्रेतासँग भाउ मिलेपछि रु. ३५,००० मा कारोबार सम्पन्न हुन्छ। उमेशले बाँकी रु. २५,००० र ब्रोकर कमिसन सोमबार बैंकबाट बुझाउँछन् र मंगलबार (T+2) सेयर उनको डिम्याटमा आइपुग्छ।'
      },
      takeaway: {
        en: 'TMS gives you total command over your purchase price using limit orders, ensuring you never pay more for a stock than your disciplined valuation.',
        np: 'टिएमएसले लगानीकर्तालाई लिमिट अर्डरमार्फत आफूले चाहेको निश्चित मूल्यमा मात्र सेयर किन्ने पूर्ण नियन्त्रण दिन्छ, जसले हतारमा महँगो मूल्यमा किन्नबाट जोगाउँछ।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Direct control over your investments: buy and sell at your exact chosen price',
        'Live access to the 5-level Market Order Depth showing real-time buyers and sellers',
        'Convenient instant collateral top-ups using ConnectIPS and domestic mobile banking',
        'Transparent execution backed by the official central matching engine of NEPSE'
      ],
      np: [
        'आफ्नो लगानीमा पूर्ण नियन्त्रण: आफूले चाहेको ठ्याक्कै निश्चित मूल्यमा सेयर किनबेच',
        'बजारमा वास्तविक समयमा कति खरिदकर्ता र बिक्रीकर्ता छन् भनी ५ तहको मार्केट डेप्थ हेर्ने सुविधा',
        'कनेक्टआईपीएस र मोबाइल बैंकिङमार्फत तुरुन्तै अनलाइन कोल्याटरल लोड गर्ने सुविधा',
        'नेपाल स्टक एक्सचेन्जको केन्द्रीय स्वचालित प्रणालीबाट पारदर्शी कारोबार'
      ]
    },
    limitations: {
      en: [
        'High market volatility can lead to impulsive emotional trading and short-term capital loss',
        'Broker commission, SEBON regulatory fees, and DP charges apply to every execution',
        'Requires pre-depositing cash collateral before buy orders can be placed',
        'Failing to pay remaining trade amounts by T+2 leads to broker trading account freezes'
      ],
      np: [
        'बजारको तीव्र उतारचढावका कारण भावनामा बहकिएर छिटो-छिटो किनबेच गर्दा घाटा हुने जोखिम',
        'हरेक कारोबारमा ब्रोकर कमिसन, धितोपत्र बोर्ड शुल्क र डीपी शुल्क लाग्ने',
        'सेयर किन्नुअघि अनिवार्य रूपमा बैंकबाट नगद कोल्याटरल लोड गर्नुपर्ने नियम',
        'किनेको सेयरको बाँकी रकम T+2 भित्र नबुझाएमा ब्रोकरले खाता रोक्का गरिदिने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'You can trade stocks 24/7 on NEPSE TMS whenever you want.',
          np: 'नेप्से टिएमएसमा हप्ताको सातै दिन र २४ सै घन्टा जुनसुकै बेला पनि सेयर किनबेच गर्न सकिन्छ।'
        },
        reality: {
          en: 'NEPSE secondary trading operates strictly on official working days (Sunday through Thursday) between 11:00 AM and 3:00 PM. Outside trading hours, market orders cannot be executed.',
          np: 'नेप्से दोस्रो बजार आइतबारदेखि बिहीबारसम्म बिहान ११:०० देखि दिउँसो ३:०० बजेसम्म मात्र सञ्चालन हुन्छ। सार्वजनिक बिदा र बजार बन्द भएको समयमा कारोबार हुन सक्दैन।'
        }
      },
      {
        myth: {
          en: 'Depositing collateral means your money is permanently spent and gone.',
          np: 'टिएमएसमा कोल्याटरल लोड गर्नु भनेको पैसा खर्च हुनु वा ब्रोकरले खानु हो।'
        },
        reality: {
          en: 'Collateral is simply a refundable security deposit to guarantee your trades. If you do not buy shares, you can withdraw 100% of your collateral back to your bank account anytime.',
          np: 'कोल्याटरल भनेको सेयर खरिद सीमा पाउनका लागि राखिएको धरौटी मात्र हो। यदि सेयर किन्नुभएन भने उक्त कोल्याटरल जुनसुकै बेला फिर्ता मागेर बैंक खातामा ल्याउन सकिन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Limit Order vs Market Order on NEPSE TMS', np: 'टिएमएसमा लिमिट अर्डर र मार्केट अर्डर बीचको भिन्नता' },
      subtitle: { en: 'Price certainty vs execution speed when placing trades on the stock exchange', np: 'सेयर कारोबार गर्दा निश्चित मूल्यमा खरिद गर्ने र तत्काल बजार मूल्यमा किन्ने बीचको फरक' },
      featureHeader: { en: 'Attribute', np: 'विशेषता' },
      colA: { en: 'Limit Order (Standard in Nepal)', np: 'लिमिट अर्डर (Limit Order)' },
      colB: { en: 'Market Order', np: 'मार्केट अर्डर (Market Order)' },
      rows: [
        {
          feature: { en: 'Price Control', np: 'मूल्य नियन्त्रण' },
          valA: { en: 'You set the exact maximum buy price or minimum sell price', np: 'आफूले तिर्न चाहेको अधिकतम मूल्य आफैं तोक्ने' },
          valB: { en: 'Executes immediately at whatever price is currently offered', np: 'बजारमा जो बिक्रेता छ, उसैको भाउमा तत्काल किनिने' }
        },
        {
          feature: { en: 'Execution Guarantee', np: 'कारोबार हुने सुनिश्चितता' },
          valA: { en: 'No guarantee; executes only if the market reaches your price', np: 'ग्यारेन्टी हुँदैन; बजार तपाईंको भाउमा आए मात्र कारोबार हुने' },
          valB: { en: 'Immediate execution guaranteed against available depth', np: 'तुरुन्तै कारोबार सम्पन्न हुने निश्चितता' }
        },
        {
          feature: { en: 'Best Used For', np: 'कसका लागि उपयुक्त' },
          valA: { en: 'Disciplined investors who refuse to overpay for stocks', np: 'मूल्यमा सम्झौता नगर्ने अनुशासित दीर्घकालीन लगानीकर्ता' },
          valB: { en: 'Traders needing instant liquidity regardless of price slippage', np: 'भाउ तलमाथि भए पनि तत्काल सेयर किन्न वा बेच्न हतार भएकाहरू' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'circuit-breaker', name: 'Circuit Breaker', type: 'glossary' },
      { slug: 'meroshare', name: 'MeroShare', type: 'glossary' },
      { slug: 'demat', name: 'Demat', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Modern Toolkit: Demat, MeroShare & TMS', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Broker Commission & Tax Calculator', slug: 'cagr', desc: 'Calculate total purchase cost and broker fees on NEPSE TMS.' }
    ],
    faqs: [
      {
        q: { en: 'How do I open a TMS trading account in Nepal?', np: 'नेपालमा ब्रोकर टिएमएस (TMS) खाता कसरी खोल्ने?' },
        a: {
          en: 'Choose any licensed broker (Broker No. 1 to 90+), visit their official website, click "New Registration", complete the online KYC form, upload photos of your citizenship, bank cheque, and Demat confirmation, and submit. You will receive your TMS login credentials via email within 24 to 48 hours.',
          np: 'कुनै पनि इजाजतप्राप्त ब्रोकरको वेबसाइटमा गएर "New Registration" मा क्लिक गर्ने, आफ्नो नागरिकता, चेक र डिम्याट विवरण अपलोड गरी फारम बुझाउने। २४ देखि ४८ घण्टाभित्र इमेलमा टिएमएसको युजरनेम र पासवर्ड आउँछ।'
        }
      },
      {
        q: { en: 'What is the minimum trading unit on NEPSE TMS?', np: 'नेप्से टिएमएसमा न्यूनतम कति कित्ता सेयर किनबेच गर्न मिल्छ?' },
        a: {
          en: 'On the regular secondary market, the standard trading lot size is 10 shares. For transactions below 10 shares (e.g. 1 to 9 shares resulting from bonus adjustments), trading occurs in the dedicated "Odd Lot" market session.',
          np: 'नियमित बजारमा न्यूनतम १० कित्ताको लटमा सेयर किनबेच हुन्छ। तर १० कित्ताभन्दा कम (१ देखि ९ कित्ता) सेयर किनबेच गर्नका लागि नेप्सेमा छुट्टै "अड लट" (Odd Lot) बजारको व्यवस्था गरिएको छ।'
        }
      },
      {
        q: { en: 'How do I withdraw my unused cash collateral back to my bank account?', np: 'नचलेको कोल्याटरल रकम बैंकमा फिर्ता कसरी ल्याउने?' },
        a: {
          en: 'Inside your TMS dashboard, navigate to "Fund Management" -> "Collateral Management", click "Refund Request", enter the desired amount, and submit. The broker will process the refund to your linked bank account via ConnectIPS within 1 to 2 business days.',
          np: 'टिएमएसभित्र गएर "Fund Management" -> "Collateral Management" मा गई "Refund Request" मा क्लिक गरेर चाहेको रकम हाल्ने। ब्रोकरले १-२ दिनभित्र उक्त रकम तपाईंको बैंक खातामा पठाइदिन्छ।'
        }
      },
      {
        q: { en: 'What is Market Depth in TMS and how do I read it?', np: 'टिएमएसमा मार्केट डेप्थ (Market Depth) के हो र यसलाई कसरी बुझ्ने?' },
        a: {
          en: 'Market Depth displays the top 5 highest buy bids and top 5 lowest sell offers currently pending in the market. The left column shows buyers (quantity and bid price), while the right column shows sellers (asking price and quantity). It reveals real-time supply and demand pressure.',
          np: 'मार्केट डेप्थले बजारमा हाल सबैभन्दा बढी मूल्य हालेका ५ जना खरिदकर्ता र सबैभन्दा सस्तोमा बेच्न बसेका ५ जना बिक्रेताहरूको कित्ता र भाउ देखाउँछ। देब्रेपट्टी खरिद माग र दाहिनेपट्टी बिक्री आपूर्ति देखिन्छ, जसले तत्कालको बजार माग बुझ्न मद्दत गर्छ।'
        }
      }
    ],
    summary: {
      en: [
        'NEPSE TMS is the official online trading portal for placing buy and sell orders on the secondary exchange.',
        'Operates between 11:00 AM and 3:00 PM, Sunday through Thursday.',
        'Cash collateral deposited via ConnectIPS provides an effective 1:4 buying power limit.',
        'Trades settle on a strict T+2 clearing schedule via CDSC and your linked bank account.'
      ],
      np: [
        'नेप्से टिएमएस दोस्रो बजारमा प्रत्यक्ष रूपमा सेयर किनबेच गर्ने आधिकारिक अनलाइन मञ्च हो।',
        'यो बजार आइतबारदेखि बिहीबारसम्म बिहान ११:०० देखि दिउँसो ३:०० बजेसम्म सञ्चालन हुन्छ।',
        'लोड गरिएको नगद कोल्याटरलका आधारमा ४ गुणा (१:४) सम्मको सेयर खरिद सीमा प्राप्त हुन्छ।',
        'सबै कारोबारहरू सीडीएससीमार्फत T+2 कार्यदिनभित्र बैंक र डिम्याटमा फर्स्यौट हुन्छन्।'
      ]
    },
    whereSeen: [
      { title: 'The Modern Toolkit', type: 'Lesson', url: '/learn/nepse/what-is-investing' },
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' }
    ],
    meta: {
      title: 'What is NEPSE TMS in Nepal? Online Broker Trading Guide | risePaisa',
      description: 'Master NEPSE TMS trading in Nepal. Learn how to open a broker account, load collateral via ConnectIPS, read market depth, and trade on the secondary market.'
    }
  },

  // 6. CIRCUIT BREAKER
  {
    slug: 'circuit-breaker',
    term: 'Circuit Breaker & Price Limits',
    termNp: 'सर्किट ब्रेकर र मूल्य सीमा (Circuit Breaker)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'C',
    abbreviation: null,
    synonyms: ['Trading Halt', 'Price Bands', 'नेप्से सर्किट ब्रेकर', 'मूल्य सीमा'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A circuit breaker is an automated regulatory mechanism that temporarily halts all stock trading on NEPSE during extreme market-wide price swings (4%, 5%, and 6%), preventing panic selling and systemic crashes.',
      np: 'सर्किट ब्रेकर (Circuit Breaker) भनेको सेयर बजारमा अत्यधिक तीव्र उतारचढाव (४%, ५% र ६%) आउँदा बजारलाई अनियन्त्रित हुन र लगानीकर्तालाई आत्तिएर घाटा खानबाट जोगाउन नेप्सेले स्वचालित रूपमा कारोबार केही समय वा दिनभरका लागि रोक्ने सुरक्षा संयन्त्र हो।'
    },
    detailedExplanation: {
      en: 'To protect investors from herd psychology, speculative stampedes, and algorithmic flash crashes, the Securities Board of Nepal (SEBON) and NEPSE enforce two levels of circuit breakers: Market-Wide Circuit Breakers and Individual Stock Price Bands. Market-wide circuit breakers trigger whenever the benchmark NEPSE Index moves up or down by 4% in the first hour (20-minute halt), 5% before 1:00 PM (40-minute halt), or 6% at any time during the day (trading suspended for the entire remainder of the day). Concurrently, individual company stocks are bound by a strict daily 10% upper and lower price band.',
      np: 'लगानीकर्ताको भावनामा आउने चरम डर वा लोभका कारण बजार दुर्घटनामा नपरोस् भन्नका लागि धितोपत्र बोर्ड र नेप्सेले दुई तहको सर्किट ब्रेकर लागू गरेका छन्: समग्र बजार सर्किट ब्रेकर र व्यक्तिगत सेयर मूल्य सीमा। समग्र नेप्से परिसूचक पहिलो घन्टामा ४% ले घटबढ भएमा २० मिनेट, दिउँसो १:०० बजेअघि ५% ले घटबढ भएमा ४० मिनेट र ६% ले घटबढ भएमा उक्त दिनको सम्पूर्ण बाँकी कारोबार नै स्थगित गरिन्छ। यसका साथै व्यक्तिगत कुनै पनि कम्पनीको सेयर मूल्य एक दिनमा बढीमा १०% भन्दा माथि वा तल जान पाउँदैन।'
    },
    whyItMatters: {
      en: 'Circuit breakers act as the emergency brakes of the financial system. When shocking news hits (e.g. monetary policy changes, tax policy revisions, or major political crises), human emotion can cause catastrophic market crashes. Circuit breakers force a cooling-off period, allowing market participants to absorb information rationally rather than panic-selling in a blind herd.',
      np: 'सर्किट ब्रेकरले वित्तीय प्रणालीको आपतकालीन ब्रेक (Emergency Brake) को रूपमा काम गर्छ। देशमा ठूला राजनीतिक घटना, मौद्रिक नीति वा करसम्बन्धी नीतिगत परिवर्तन आउँदा लगानीकर्तामा चरम त्रास फैलन सक्छ। यस्तो अवस्थामा सर्किट ब्रेकर लागेर कारोबार रोकिँदा लगानीकर्तालाई सोच्ने र शान्त हुने समय (Cooling-off Period) मिल्छ, जसले बजारलाई अप्रत्याशित दुर्घटनाबाट जोगाउँछ।'
    },
    howItWorks: {
      summary: {
        en: 'The 3 statutory market-wide index circuit breaker triggers on NEPSE function as follows:',
        np: 'नेप्सेमा समग्र बजार परिसूचकका आधारमा लाग्ने ३ वटा सर्किट ब्रेकरका नियमहरू यस प्रकार छन्:'
      },
      steps: [
        {
          title: { en: '1. First Breaker (4% Index Move)', np: '१. पहिलो सर्किट (४% घटबढ)' },
          desc: { en: 'If the NEPSE Index rises or drops by 4.0% during the first trading hour (before 12:00 PM), trading is completely halted for 20 minutes.', np: 'कारोबार सुरु भएको पहिलो घण्टाभित्र (दिउँसो १२:०० बजेअघि) नेप्से परिसूचक ४.०% ले बढेमा वा घटेमा २० मिनेटका लागि कारोबार रोकिन्छ।' }
        },
        {
          title: { en: '2. Second Breaker (5% Index Move)', np: '२. दोस्रो सर्किट (५% घटबढ)' },
          desc: { en: 'If the index moves by 5.0% before 1:00 PM, trading is halted for 40 minutes to allow the market to digest news.', np: 'दिउँसो १:०० बजेअघि नेप्से परिसूचक ५.०% ले घटेमा वा बढेमा बजारलाई शान्त पार्न ४० मिनेटका लागि कारोबार स्थगित हुन्छ।' }
        },
        {
          title: { en: '3. Third Breaker (6% Full Suspension)', np: '३. तेस्रो सर्किट (६% पूर्ण स्थगन)' },
          desc: { en: 'If the index moves by 6.0% at any point during trading hours, trading is shut down for the entire remainder of the day.', np: 'कारोबार समयभित्र कुनै पनि बेला नेप्से परिसूचक ६.०% ले घटबढ भएमा उक्त दिनभरका लागि बजार पूर्ण रूपमा बन्द गरिन्छ।' }
        },
        {
          title: { en: '4. 10% Individual Stock Price Band', np: '४. कम्पनीको १०% दैनिक मूल्य सीमा' },
          desc: { en: 'Regardless of index halts, an individual company cannot trade more than +10% (Upper Circuit) or -10% (Lower Circuit) from its previous close.', np: 'समग्र बजार नरोकिए पनि कुनै पनि व्यक्तिगत कम्पनीको सेयर अघिल्लो दिनको मूल्यभन्दा बढीमा +१०% (अपर सर्किट) वा -१०% (लोअर सर्किट) भन्दा बढी घटबढ हुन पाउँदैन।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Automated risk management engines of the Nepal Stock Exchange',
        'Post-budget and monetary policy market trading days in Nepal',
        'TMS order validation matching systems',
        'Protecting retail investors from pump-and-dump market cornering'
      ],
      np: [
        'नेपाल स्टक एक्सचेन्जको स्वचालित जोखिम नियन्त्रण प्रणालीमा',
        'बजेट घोषणा वा राष्ट्र बैंकको मौद्रिक नीति सार्वजनिक भएपछिका संवेदनशील दिनहरूमा',
        'ब्रोकर टिएमएसको अर्डर बुक म्याचिङ प्रणालीमा',
        'कम्पनीको सेयर कृत्रिम रूपमा बढाउने वा घटाउने गिरोहबाट साना लगानीकर्तालाई जोगाउन'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Upper vs Lower Circuits and the Historic Circuit Days of the NEPSE Bull/Bear Runs',
        np: 'नेप्सेको इतिहासमा ऐतिहासिक सर्किट दिनहरू र अपर/लोअर सर्किट'
      },
      body: {
        en: 'Nepal’s capital market has witnessed memorable circuit breaker sessions. Following favorable monetary policy announcements or political stability milestones, NEPSE has triggered 4%, 5%, and 6% Positive Circuit Breakers within the first two hours of trading, suspending trading for the entire day with millions of buyers and zero sellers! Conversely, during unexpected political crises or aggressive regulatory credit tightenings, the market has crashed 6% within minutes (Negative Circuit), locking sellers. Individual micro-cap stocks with low free-float frequently hit the 10% Upper Circuit repeatedly, underscoring the importance of understanding circuit mechanisms.',
        np: 'नेपालको सेयर बजारले इतिहासमा धेरै रोमाञ्चक र डरलाग्दा सर्किट दिनहरू देखेको छ। बजारमैत्री मौद्रिक नीति वा अनुकूल राजनीतिक निर्णय आउँदा नेप्से सुरु भएको केही मिनेटमै ४%, ५% र ६% को सकारात्मक सर्किट (Positive Circuit) लागेर दिनभरका लागि बजार बन्द भएका धेरै उदाहरण छन्, जहाँ लाखौं खरिदकर्ता हुन्थे तर बेच्ने कोही हुँदैनथे। यसको विपरीत, अनपेक्षित सरकारी निर्णय हुँदा ६% को नकारात्मक सर्किट (Negative Circuit) लागेर बजार बन्द भएको छ। व्यक्तिगत साना कम्पनीहरूमा पनि दैनिक १०% को अपर वा लोअर सर्किट लाग्ने गर्छ।'
      },
      keyPoints: {
        en: [
          'First hour: 4% index change triggers a 20-minute halt.',
          'Before 1:00 PM: 5% index change triggers a 40-minute halt.',
          'Anytime: 6% index change closes NEPSE for the entire rest of the day.',
          'Individual stocks are locked within strict +/- 10% daily price bands.'
        ],
        np: [
          'पहिलो घण्टामा: ४% परिसूचक घटबढ भएमा २० मिनेट कारोबार रोकिन्छ।',
          'दिउँसो १:०० बजेअघि: ५% परिसूचक घटबढ भएमा ४० मिनेट कारोबार रोकिन्छ।',
          'दिनभरमा कुनै पनि बेला: ६% परिसूचक घटबढ भएमा दिनभरका लागि बजार बन्द हुन्छ।',
          'कुनै पनि व्यक्तिगत कम्पनीको सेयर दैनिक बढीमा +/- १०% मात्र घटबढ हुन पाउँछ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'On a Monday morning following a major pro-market reform, NEPSE opens at 2,000 points. Massive buying surges across all sectors. By 11:45 AM (within the first hour), the index rises by 80 points (+4.0%) to 2,080. NEPSE\'s automated system instantly triggers the 1st Circuit Breaker, halting all TMS trading for 20 minutes. Trading resumes at 12:05 PM, but buying momentum continues. By 12:40 PM (before 1:00 PM), the index touches 2,100 (+5.0%), triggering the 2nd Circuit Breaker for 40 minutes. When trading resumes at 1:20 PM, a further surge pushes the index to 2,120 (+6.0%). The 3rd Circuit Breaker fires immediately, shutting down NEPSE for the remainder of Monday.',
        np: 'बजार अनुकूल निर्णय आएपछि सोमबार नेप्से परिसूचक २,००० विन्दुबाट खुल्छ। सबै क्षेत्रमा तीव्र खरिद माग आउँछ। बिहान ११:४५ बजे (पहिलो घण्टाभित्रै) सूचकांक ८० विन्दु (+४%) बढेर २,०८० पुग्छ। नेप्सेको प्रणालीले तुरुन्त पहिलो सर्किट लगाएर २० मिनेटका लागि कारोबार रोक्छ। १२:०५ मा बजार खुल्छ र फेरि बढेर १२:४० मा ५% (+१०० विन्दु) पुग्छ, जसले गर्दा दोस्रो सर्किट लागेर ४० मिनेट बजार रोकिन्छ। १:२० मा खुलेपछि पुनः बढेर ६% पुग्नासाथ तेस्रो सर्किट लाग्छ र सो दिनभरका लागि सेयर बजार पूर्ण रूपमा बन्द गरिन्छ।'
      },
      takeaway: {
        en: 'Circuit breakers provide vital pauses during extreme market mania or panic, allowing you to reflect objectively rather than making reckless trades.',
        np: 'सर्किट ब्रेकरले बजारको चरम उत्तेजना वा डरका बेला केही समय रोकेर लगानीकर्तालाई हतारमा गलत निर्णय लिनबाट जोगाउँछ।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Prevents catastrophic market-wide freefalls during sudden geopolitical or economic shocks',
        'Enforces a psychological cooling-off period, reducing herd-driven emotional panic',
        'Prevents aggressive market manipulators from artificially cornering stock prices past 10%',
        'Protects retail investors from executing orders at massively distorted flash prices'
      ],
      np: [
        'देशमा अचानक आउने ठूला संकटका बेला सेयर बजारलाई एकैदिन पूर्ण रूपमा ध्वस्त हुनबाट जोगाउँछ',
        'लगानीकर्तालाई सोच्ने र शान्त हुने समय दिएर हल्लाको पछि लागेर सेयर फाल्ने प्रवृत्ति रोक्छ',
        'बिचौलिया गिरोहलाई कुनै कम्पनीको सेयर एकैदिन १०% भन्दा बढी अस्वाभाविक उचाल्नबाट रोक्छ',
        'साना लगानीकर्तालाई अनुचित मूल्यमा सेयर किनबेच गर्नुपर्ने जोखिमबाट सुरक्षा दिन्छ'
      ]
    },
    limitations: {
      en: [
        'Artificially traps liquidity: when a stock hits 10% Lower Circuit, no buyers exist and you cannot sell',
        'Delays price discovery: market reality simply rolls over to the next trading day',
        'Can frustrate disciplined traders attempting to execute rational contrarian positions',
        'Sudden trading halts freeze pending limit orders inside the TMS system'
      ],
      np: [
        'तरलता पूर्ण रोकिन्छ: यदि कुनै सेयरमा १०% को लोअर सर्किट लाग्यो भने कोही खरिदकर्ता नहुँदा सेयर बेच्नै मिल्दैन',
        'बजारको वास्तविक मूल्य निर्धारणलाई केही समय पर मात्र सार्छ; अर्को दिन फेरि घट्न सक्छ',
        'आफ्नो योजना अनुसार कारोबार गर्न बसेका अनुशासित लगानीकर्ताको समय तालिका बिथोलिन्छ',
        'कारोबार अचानक रोकिँदा टिएमएसभित्र अड्किएका अर्डरहरू अलपत्र पर्न सक्छन्'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'A circuit breaker guarantees that you can sell your stock before it loses more money.',
          np: 'सर्किट ब्रेकर लागेपछि आफ्नो सेयर घाटाबाट जोगाउन सजिलै बेच्न सकिन्छ।'
        },
        reality: {
          en: 'When a stock hits a 10% Lower Circuit, selling pressure is so extreme that there are literally zero buyers in the market. Your sell order will simply sit unfulfilled in the queue.',
          np: 'जब कुनै सेयरमा १०% को लोअर सर्किट लाग्छ, त्यहाँ बजारमा किन्ने मान्छे शून्य हुन्छन्। त्यसैले तपाईंले बेच्न अर्डर हाले पनि सेयर बिक्दैन र खातामै अड्किरहन्छ।'
        }
      },
      {
        myth: {
          en: 'Individual stock circuits and index circuit breakers use the exact same percentage rules.',
          np: 'समग्र नेप्से परिसूचक र व्यक्तिगत कम्पनी दुवैमा एउटै प्रतिशतको सर्किट नियम लागू हुन्छ।'
        },
        reality: {
          en: 'Index circuit breakers trigger at 4%, 5%, and 6% of the broad market index with timed halts. Individual stocks are bound by a continuous +/- 10% price band from the previous close.',
          np: 'समग्र बजारमा ४%, ५% र ६% मा समय तोकेर कारोबार रोकिन्छ। तर व्यक्तिगत कम्पनीको हकमा भने अघिल्लो दिनको भाउभन्दा बढीमा +/- १०% को मूल्य सीमा मात्र हुन्छ र कारोबार रोकिँदैन।'
        }
      }
    ],
    comparison: {
      title: { en: 'Index Circuit Breaker vs Individual Stock Price Band', np: 'नेप्से परिसूचक सर्किट र व्यक्तिगत सेयर मूल्य सीमाको तुलना' },
      subtitle: { en: 'Market-wide trading suspension vs single company +/- 10% daily boundary', np: 'सिङ्गो बजार नै बन्द हुने नियम र एउटा कम्पनीको दैनिक मूल्य सीमा बीचको भिन्नता' },
      featureHeader: { en: 'Feature', np: 'विशेषता' },
      colA: { en: 'Index Circuit Breaker', np: 'नेप्से परिसूचक सर्किट ब्रेकर' },
      colB: { en: 'Individual Stock Price Band', np: 'व्यक्तिगत सेयर मूल्य सीमा (+/- १०%)' },
      rows: [
        {
          feature: { en: 'Scope of Impact', np: 'प्रभावको दायरा' },
          valA: { en: 'Halts all trading across all 250+ listed companies', np: 'नेप्सेमा सूचीकृत सबै २५० भन्दा बढी कम्पनीको कारोबार रोकिन्छ' },
          valB: { en: 'Applies strictly to that single company; rest of market trades', np: 'सम्बन्धित कम्पनीमा मात्र लागू हुन्छ; अरू बजार चलिरहन्छ' }
        },
        {
          feature: { en: 'Trigger Thresholds', np: 'लाग्ने सीमा' },
          valA: { en: '4% (20 min), 5% (40 min), 6% (rest of day)', np: '४% (२० मिनेट), ५% (४० मिनेट), ६% (दिनभरका लागि)' },
          valB: { en: 'Capped at exact +/- 10.0% of previous day close', np: 'अघिल्लो दिनको अन्तिम मूल्यको ठ्याक्कै +/- १०.०%' }
        },
        {
          feature: { en: 'Trading During Limit', np: 'सीमा पुग्दा कारोबारको अवस्था' },
          valA: { en: 'All order matching frozen; zero trading allowed', np: 'प्रणाली नै रोकिने हुनाले कुनै पनि कारोबार हुन पाउँदैन' },
          valB: { en: 'Trading continues at the 10% ceiling/floor price if counterparty exists', np: 'यदि कोही खरिदकर्ता वा बिक्रेता तयार भएमा १०% को भाउमै कारोबार भइरहन्छ' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'tms', name: 'TMS', type: 'glossary' },
      { slug: 'ipo', name: 'IPO', type: 'glossary' },
      { slug: 'cagr', name: 'CAGR', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'The Modern Toolkit: Demat, MeroShare & TMS', categorySlug: 'nepse', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Beginner Guide to NEPSE Share Market', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'Share Profit / Loss Calculator', slug: 'cagr', desc: 'Assess returns on stocks reaching circuit breaker limits.' }
    ],
    faqs: [
      {
        q: { en: 'What does "Upper Circuit" mean on NEPSE?', np: 'नेप्सेमा "अपर सर्किट" (Upper Circuit) लाग्नु भनेको के हो?' },
        a: {
          en: 'An Upper Circuit occurs when an individual stock rises by the maximum allowable +10% limit in a single day. At this price, there is immense buying demand with thousands of buy orders pending, but nobody is willing to sell.',
          np: 'कुनै कम्पनीको सेयर मूल्य एकैदिनमा कानुनले दिएको अधिकतम १०% ले बढ्नुलाई अपर सर्किट भनिन्छ। यस्तो बेला किन्न चाहने हजारौं भए पनि त्यो भाउमा बेच्न कोही तयार हुँदैनन्।'
        }
      },
      {
        q: { en: 'What does "Lower Circuit" mean on NEPSE?', np: 'नेप्सेमा "लोअर सर्किट" (Lower Circuit) लाग्नु भनेको के हो?' },
        a: {
          en: 'A Lower Circuit occurs when a stock falls by the maximum allowable -10% limit in a day. At this floor price, there is heavy panic selling with thousands of sell orders queued, but zero buyers willing to purchase.',
          np: 'कुनै कम्पनीको सेयर मूल्य एकैदिनमा अधिकतम १०% ले घट्नुलाई लोअर सर्किट भनिन्छ। यस्तो बेला आत्तिएर बेच्न खोज्नेहरूको लामो लाइन हुन्छ तर त्यो घटेको मूल्यमा पनि किन्न कोही आउँदैनन्।'
        }
      },
      {
        q: { en: 'Can a stock hit an Upper Circuit on its first day of trading on NEPSE?', np: 'के नयाँ सूचीकृत भएको पहिलो दिनमै कम्पनीमा सर्किट लाग्न सक्छ?' },
        a: {
          en: 'Yes. On the first day of listing, NEPSE establishes an initial Open Range (up to 3x book value). Once the initial trade executes within that range, the regular +/- 10% daily price band applies immediately.',
          np: 'सक्छ। सूचीकृत भएको पहिलो दिन नेप्सेले तोकेको ओपनिङ रेन्जभित्र पहिलो कारोबार भएपछि सोही मूल्यलाई आधार मानेर तुरुन्तै +/- १०% को दैनिक सर्किट सीमा लागू हुन्छ।'
        }
      },
      {
        q: { en: 'What happens to pending TMS orders when a market circuit breaker hits?', np: 'बजारमा सर्किट ब्रेकर लागेर कारोबार रोकिँदा टिएमएसमा रहेका अर्डरहरू के हुन्छन्?' },
        a: {
          en: 'When a circuit halt is triggered, pending orders remain queued in the system order book. When trading resumes after the 20 or 40-minute pause, order matching restarts automatically based on price-time priority.',
          np: 'सर्किट लागेर कारोबार रोकिँदा तपाईंले हालेका अर्डरहरू प्रणालीमै सुरक्षित लाइनमा बसिरहन्छन्। २० वा ४० मिनेटपछि बजार पुनः खुल्दा मूल्य र समयको प्राथमिकता अनुसार फेरि कारोबार सुचारु हुन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'A circuit breaker temporarily or permanently suspends NEPSE trading during extreme index fluctuations.',
        'Market halts trigger at 4% (20 min in 1st hr), 5% (40 min before 1 PM), and 6% (closed for rest of day).',
        'Individual stocks are bound by a strict daily +/- 10% price band from the previous close.',
        'Circuit breakers enforce psychological cooling periods to prevent herd panic and systemic market crashes.'
      ],
      np: [
        'सर्किट ब्रेकरले अत्यधिक उतारचढाव आएको बेला बजारलाई दुर्घटनाबाट जोगाउन केही समय वा दिनभरका लागि कारोबार रोक्छ।',
        'समग्र परिसूचक पहिलो घण्टामा ४% (२० मिनेट), १ बजेअघि ५% (४० मिनेट) र ६% (दिनभर) घटबढ भएमा सर्किट लाग्छ।',
        'व्यक्तिगत कम्पनीको सेयर एक दिनमा बढीमा +/- १०% भन्दा तलमाथि जान पाउँदैन।',
        'यसले लगानीकर्तालाई आत्तिएर गलत निर्णय लिनबाट जोगाउन शान्त हुने समय (Cooling period) प्रदान गर्दछ।'
      ]
    },
    whereSeen: [
      { title: 'The Modern Toolkit', type: 'Lesson', url: '/learn/nepse/what-is-investing' },
      { title: 'NEPSE Trading Guide', type: 'Guide', url: '/learn/guides/complete-nepse-investing-guide' }
    ],
    meta: {
      title: 'NEPSE Circuit Breakers & Price Limits Explained | risePaisa',
      description: 'Complete guide to Circuit Breakers on the Nepal Stock Exchange (NEPSE). Understand the 4%, 5%, 6% index rules and +/- 10% individual stock price bands.'
    }
  }
];

// BATCH J - BUSINESS (6 lessons)
// 1. sole-proprietorship-vs-pvt-ltd-nepal
// 2. company-registration-ocr-step-by-step
// 3. pan-vs-vat-thresholds-nepal
// 4. vendor-tds-withholding-audit-nepal
// 5. annual-roc-filing-agm-minutes-nepal
// 6. hiring-ssf-labor-act-nepal

export const BATCH_J = {

  // ── J1. SOLE PROPRIETORSHIP VS PVT LTD IN NEPAL ──────────────────
  'sole-proprietorship-vs-pvt-ltd-nepal': {
    id: 'biz-sole-prop-vs-pvt-ltd',
    slug: 'sole-proprietorship-vs-pvt-ltd-nepal',
    categorySlug: 'business',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Companies Act 2063 & Industrial Enterprises Act 2076', np: 'कम्पनी ऐन २०६३ तथा औद्योगिक व्यवसाय ऐन २०७६ अनुसार समीक्षित' },
    prerequisites: { en: 'Basic understanding of business income and personal tax', np: 'व्यापारिक आम्दानी र व्यक्तिगत करको सामान्य जानकारी' },
    en: {
      title: 'Sole Proprietorship vs Private Limited in Nepal: The Legal & Tax Reality',
      oneLineSummary: 'Compare unlimited personal liability and slab taxation against corporate limited liability and a flat 25% corporate tax rate.',
      summaryPoints: [
        'A Sole Proprietorship (एकलौटी फर्म) is legally identical to its owner; business debts can be recovered from your personal house and family land.',
        'A Private Limited Company (Pvt. Ltd.) is a separate legal entity; shareholder liability is strictly limited to unpaid share capital.',
        'Proprietorship profits are taxed at individual progressive income tax slabs (up to 39%), while Pvt. Ltd. companies pay a flat 25% corporate tax (20% for manufacturing).',
        'Pvt. Ltd. companies can issue equity to angel investors and co-founders, whereas a proprietorship cannot admit partners without restructuring.',
        'Proprietorships have simpler annual compliances, while Pvt. Ltd. entities require mandatory annual ROC filings and statutory external audits.'
      ],
      whatIsThis: 'In Nepal, entrepreneurs setting up a commercial venture must choose between registering as a Sole Proprietorship (दर्ता फर्म via Department of Commerce or local municipal ward) or incorporating as a Private Limited Company (कम्पनी रजिष्ट्रारको कार्यालय - OCR under the Companies Act 2063). This decision dictates personal legal liability, income tax brackets, borrowing capacity, and equity fundraising.',
      whyItMatters: 'Many Nepali founders start as a sole proprietorship to save NPR 15,000 in accounting costs. However, if the business takes a bank loan or faces a commercial lawsuit, creditors can legally seize the owner\'s personal ancestral home and savings. Furthermore, once business profits exceed NPR 20-30 Lakh annually, individual tax slabs (reaching 36%-39%) eat away far more wealth than the flat 25% corporate tax rate.',
      howItWorks: [
        { step: 1, title: 'Evaluate Personal Liability Exposure', desc: 'If your business involves debt, customer liabilities, physical leases, or employee contracts, a Pvt. Ltd. legally shields your personal family assets from business bankruptcy.' },
        { step: 2, title: 'Analyze Tax Arbitrage on Profits', desc: 'At low profit levels (< NPR 10 Lakh), a sole proprietorship pays modest personal slab tax. Above NPR 25 Lakh in profit, a Pvt. Ltd. paying a flat 25% corporate tax becomes significantly cheaper.' },
        { step: 3, title: 'Determine Co-Founder & Investment Needs', desc: 'If you want to grant equity to co-founders, issue employee stock options (ESOP), or raise angel capital, you MUST incorporate as a Pvt. Ltd.' },
        { step: 4, title: 'Factor in Annual Regulatory Compliance Costs', desc: 'A proprietorship only needs annual local ward/tax renewal. A Pvt. Ltd. requires a certified Auditor (CA/RA), annual AGM minutes, and ROC returns costing NPR 20,000-40,000 annually.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Structural Comparison: Sole Proprietorship vs Private Limited in Nepal',
        headers: ['Evaluation Parameter', 'Sole Proprietorship (एकलौटी फर्म)', 'Private Limited Company (Pvt. Ltd.)', 'Strategic Recommendation'],
        rows: [
          ['Legal Personality', 'No separate identity (Owner = Firm)', 'Distinct legal person under law', 'Pvt. Ltd. protects personal wealth'],
          ['Owner Liability', 'UNLIMITED (Personal assets at risk)', 'LIMITED to unpaid share capital', 'Never risk family home for business'],
          ['Tax Treatment', 'Individual Slabs (1% up to 39%)', 'Flat 25% (20% for industries)', 'Pvt. Ltd. saves tax on high profits'],
          ['Equity & Investment', 'Cannot issue shares or add partners', 'Can issue equity, ESOPs & debentures', 'Pvt. Ltd. is mandatory for startups'],
          ['Annual Compliance', 'Simple tax return & Ward renewal', 'Mandatory CA audit & ROC filings', 'Proprietorship is easier for freelancers']
        ]
      },
      nepalContext: 'Under the Industrial Enterprises Act 2076 and Companies Act 2063, Nepal made Pvt. Ltd. registration 100% digital via the OCR web portal. Previously, sole proprietorships were popular because of cumbersome company registration bureaucracy. Today, a Pvt. Ltd. can be incorporated online in 3 to 5 business days with nominal government fees (as low as NPR 5,000 for up to 10 Lakh authorized capital), rendering sole proprietorships obsolete for serious scalable enterprises.',
      practicalScenario: {
        persona: 'Binod, 30, specialty coffee roaster in Lalitpur',
        income: 'NPR 1,40,000 / month personal profit',
        scenarioText: 'Binod was running a coffee wholesale business as a sole proprietorship. His net annual profit grew to NPR 32,00,000. Under individual tax slabs, his top income slice was taxed at a painful 36% plus surcharge. He also wanted to borrow NPR 25 Lakh from a bank.',
        solutionText: 'Binod converted his business into a Private Limited company. Under the corporate structure, net profit was taxed at a flat 25% (saving NPR 2,40,000 annually in taxes). The commercial bank extended the NPR 25 Lakh loan against corporate hypothecation rather than requiring a personal mortgage on his mother\'s house.',
        metricHighlight: 'Saved NPR 2.4 Lakh in taxes and shielded family real estate from debt liability'
      },
      formula: {
        name: 'Corporate Tax Arbitrage Formula in Nepal',
        equation: '\\text{Net Corporate Tax} = \\text{Profit} \\times 25\\% \\quad \\text{vs} \\quad \\text{Individual Tax} = \\sum (\\text{Bracket Income} \\times \\text{Slab Rate})',
        variables: [
          { symbol: '\\text{Profit}', name: 'Net Annual Taxable Profit', desc: 'Gross revenue minus allowable business expenses.' },
          { symbol: '25\\%', name: 'Flat Corporate Tax Rate', desc: 'Statutory income tax for standard private limited companies in Nepal.' }
        ],
        exampleCalculation: 'At NPR 35,00,000 profit: Individual tax under unmarried slab exceeds NPR 8,85,000 (~25.3% effective rate, top marginal 36%). Corporate tax at flat 25% = NPR 8,75,000. At NPR 50 Lakh profit, individual tax reaches NPR 14.5 Lakh while corporate tax is only NPR 12.5 Lakh - saving NPR 2,00,000 every single year!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Compare Individual vs Corporate Tax'
      },
      commonMistakes: [
        { mistake: 'Operating a high-liability business (e.g. food, transport, manufacturing) as a sole proprietorship.', correct: 'Always incorporate a Pvt. Ltd. to establish limited liability protection.', explanation: 'In a proprietorship, a single customer lawsuit or loan default can result in the auction of your private family home.' },
        { mistake: 'Treating the company bank account as personal pocket money in a Pvt. Ltd.', correct: 'Pay yourself a formal monthly director salary and withdraw remaining profits as legal dividends.', explanation: 'Withdrawing corporate funds without documentation triggers unauthorized director loans and heavy IRD audit penalties.' },
        { mistake: 'Failing to file annual ROC returns because the company had no business transactions.', correct: 'Even zero-revenue companies must file annual dormant audit reports with the OCR.', explanation: 'The Office of Company Registrar levies cumulative compounding fines on delayed filings regardless of whether you made money.' }
      ],
      definitions: [
        { term: 'Limited Liability', full: 'सीमित दायित्व', meaning: 'A legal condition where shareholders are not personally liable for the debts or liabilities of the corporation.' },
        { term: 'Separate Legal Entity', full: 'छुट्टै कानुनी अस्तित्व', meaning: 'The legal principle that a corporation exists independently of its owners, capable of holding property, suing, and being sued.' },
        { term: 'Corporate Tax', full: 'संस्थागत आयकर', meaning: 'A flat tax levied by the Inland Revenue Department (IRD) on the net taxable profits of incorporated companies.' },
        { term: 'Authorized Capital', full: 'अधिकृत पुँजी', meaning: 'The maximum amount of share capital a company is legally authorized to issue to shareholders under its MOA.' }
      ],
      faqs: [
        { q: 'Can a single person register a Private Limited company in Nepal?', a: 'Yes. Under the Companies Act 2063, a Single Person Company (एकल शेयरधनी कम्पनी) is fully recognized, allowing a single founder to enjoy complete limited liability protection without needing partners.' },
        { q: 'How much does it cost to maintain a Pvt. Ltd. company annually in Nepal?', a: 'Typically NPR 25,000 to NPR 50,000 per year, covering registered auditor fees (CA/RA), annual tax return filing at IRD, and annual ROC compliance filings at the OCR.' },
        { q: 'Can I convert my existing Sole Proprietorship into a Private Limited company later?', a: 'Yes. You can incorporate a new Pvt. Ltd. company and formally purchase the assets, brand name, and goodwill of the proprietorship through a vendor asset purchase agreement.' }
      ],
      takeaways: [
        'Sole proprietorship carries unlimited personal liability - your family home is at risk.',
        'Pvt. Ltd. legally insulates personal wealth from business debts and commercial lawsuits.',
        'At profits above NPR 25 Lakh, the flat 25% corporate tax rate saves lakhs compared to individual slabs.',
        'A Pvt. Ltd. is mandatory if you intend to add co-founders, issue ESOPs, or raise investment.',
        'Budget NPR 25,000-40,000 annually for mandatory auditor fees and ROC compliance.'
      ]
    },
    np: {
      title: 'नेपालमा एकलौटी फर्म बनाम प्राइभेट लिमिटेड: कानुनी दायित्व र करको वास्तविक सत्य',
      oneLineSummary: 'असीमित व्यक्तिगत जोखिम र स्ल्याब कर प्रणाली बनाम सीमित कानुनी दायित्व र स्थिर २५% संस्थागत कर बीचको तुलना।',
      summaryPoints: [
        'एकलौटी फर्म (Sole Proprietorship) को मालिक र व्यवसाय एउटै मानिन्छ; व्यापार डुबेमा साहुले तपाईंको निजी घरजग्गा लिलाम गर्न सक्छ।',
        'प्राइभेट लिमिटेड (Pvt. Ltd.) कम्पनीको छुट्टै कानुनी अस्तित्व हुन्छ; सेयरधनीको दायित्व आफूले लगानी गरेको सेयर पुँजीमा मात्र सीमित हुन्छ।',
        'एकलौटी फर्मको नाफामा व्यक्तिगत आयकर स्ल्याब (३९% सम्म) लाग्छ भने प्राइभेट लिमिटेड कम्पनीले स्थिर २५% संस्थागत कर (उद्योग भए २०%) तिर्छ।',
        'प्राइभेट लिमिटेड कम्पनीले सह-संस्थापक राख्न र लगानीकर्तालाई सेयर दिन पाउँछ, तर एकलौटी फर्ममा साझेदार थप्न पाइँदैन।',
        'एकलौटी फर्म नवीकरण गर्न सजिलो हुन्छ भने कम्पनीमा अनिवार्य अडिट र कम्पनी रजिष्ट्रार कार्यालयमा वार्षिक विवरण बुझाउनुपर्छ।'
      ],
      whatIsThis: 'नेपालमा कुनै पनि नयाँ व्यवसाय सुरु गर्दा व्यवसायीले दुईमध्ये एउटा संरचना रोज्नुपर्छ: घरेलु तथा साना उद्योग वा वडामा एकलौटी फर्म दर्ता गर्ने, वा कम्पनी ऐन २०६३ अनुसार कम्पनी रजिष्ट्रारको कार्यालय (OCR) मा प्राइभेट लिमिटेड कम्पनी दर्ता गर्ने। यस निर्णयले तपाईंको व्यक्तिगत कानुनी जोखिम, आयकर दर, र ऋण लिने क्षमता तय गर्छ।',
      whyItMatters: 'धेरै नयाँ व्यवसायीले वार्षिक १५-२० हजार अडिट खर्च जोगाउने लोभमा एकलौटी फर्म दर्ता गर्छन्। तर भोलि व्यापारमा घाटा भएर ऋण तिर्न नसकेमा बैंक वा साहुले अदालत गएर व्यवसायीको पैतृक सम्पत्ति र व्यक्तिगत घरजग्गा जफत गर्न सक्छ। साथै, वार्षिक नाफा २५-३० लाख नाघेपछि व्यक्तिगत करको दर ३६-३९% सम्म पुग्ने हुँदा कम्पनीको २५% स्थिर कर भन्दा निकै महँगो पर्न जान्छ।',
      howItWorks: [
        { step: 1, title: 'व्यक्तिगत सम्पत्तिको जोखिम मूल्याङ्कन गर्नुहोस्', desc: 'यदि तपाईंको व्यवसायमा बैंक ऋण, पसल भाडा, वा ठूलो कारोबार छ भने प्राइभेट लिमिटेड दर्ता गर्नुहोस् ताकि व्यवसाय डुब्दा व्यक्तिगत घरजग्गा जोगियोस्।' },
        { step: 2, title: 'करको फाइदा हिसाब गर्नुहोस्', desc: 'वार्षिक नाफा १० लाखभन्दा कम हुँदा व्यक्तिगत स्ल्याब कर सस्तो हुन्छ। तर नाफा २५ लाखभन्दा माथि पुग्दा कम्पनीको २५% स्थिर करले लाखौँ रुपैयाँ जोगाउँछ।' },
        { step: 3, title: 'साझेदार र बाह्य लगानीको आवश्यकता हेर्नुहोस्', desc: 'यदि भविष्यमा साथीहरूलाई सेयर दिनु छ वा बाहिरबाट लगानी भित्र्याउनु छ भने प्राइभेट लिमिटेड कम्पनी दर्ता गर्नैपर्छ।' },
        { step: 4, title: 'वार्षिक कानुनी खर्चको हिसाब गर्नुहोस्', desc: 'एकलौटी फर्मको वडा र कर नवीकरण सस्तो हुन्छ। कम्पनी चलाउन दर्तावाला लेखापरीक्षक (CA/RA) बाट अडिट गराउन र रजिष्ट्रार कार्यालयमा विवरण बुझाउन वर्षको २५-४० हजार खर्च लाग्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा एकलौटी फर्म बनाम प्राइभेट लिमिटेड कम्पनीको संरचनात्मक तुलना',
        headers: ['मूल्याङ्कनको आधार', 'एकलौटी फर्म (Sole Proprietorship)', 'प्राइभेट लिमिटेड (Pvt. Ltd.)', 'रणनीतिक सुझाव'],
        rows: [
          ['कानुनी अस्तित्व', 'छुट्टै अस्तित्व हुँदैन (मालिक = फर्म)', 'कानुनको नजरमा छुट्टै कृत्रिम व्यक्ति', 'कम्पनीले व्यक्तिगत सम्पत्ति जोगाउँछ'],
          ['मालिकको दायित्व', 'असीमित (निजी घरजग्गा सबै जोखिममा)', 'सीमित (आफ्नो सेयर पुँजीसम्म मात्र दायित्व)', 'व्यवसायका लागि कहिल्यै निजी घर दाउमा नराख्नुहोस्'],
          ['आयकर प्रणाली', 'व्यक्तिगत स्ल्याब अनुसार (१% देखि ३९%)', 'स्थिर २५% (उत्पादनमूलक उद्योगमा २०%)', 'उच्च नाफामा कम्पनीको कर निकै सस्तो'],
          ['लगानी र सेयर जारी', 'साझेदार थप्न वा सेयर बेच्न नमिल्ने', 'नयाँ सेयरधनी थप्न र लगानी लिन मिल्ने', 'स्टार्टअपका लागि कम्पनी अनिवार्य'],
          ['वार्षिक कानुनी झन्झट', 'सामान्य कर चुक्ता र वडा नवीकरण', 'अनिवार्य अडिट र रजिष्ट्रारमा विवरण दर्ता', 'साना फ्रिलान्सरका लागि फर्म सजिलो']
        ]
      },
      nepalContext: 'औद्योगिक व्यवसाय ऐन २०७६ र कम्पनी ऐन २०६३ लागू भएपछि नेपालमा कम्पनी दर्ता प्रक्रिया शतप्रतिशत डिजिटल भएको छ। विगतमा झन्झटिलो कागजी प्रक्रियाका कारण मानिसहरू एकलौटी फर्म दर्तातर्फ लाग्थे। तर आज कम्पनी रजिष्ट्रारको वेबसाइट (ocr.gov.np) बाट ३ देखि ५ दिनभित्रै न्यूनतम सरकारी दस्तुरमै (१० लाख पुँजीसम्म रु. ५,०००) प्राइभेट लिमिटेड कम्पनी दर्ता हुने भएकाले ठूला र भविष्यमुखी व्यवसायका लागि कम्पनी नै मानक बनिसकेको छ।',
      practicalScenario: {
        persona: 'विनोद, ३०, ललितपुरका कफी रोस्टर तथा वितरक',
        income: 'मासिक रु. १,४०,००० व्यापारिक खुद नाफा',
        scenarioText: 'विनोदले एकलौटी फर्मबाट कफी व्यवसाय चलाइरहेका थिए। उनको वार्षिक खुद नाफा बढेर रु. ३२,००,००० पुग्यो। व्यक्तिगत कर स्ल्याबका कारण उनले ३६% सम्मको उच्च आयकर तिर्नुपर्यो। साथै उनलाई व्यापार बढाउन बैंकबाट २५ लाख ऋण चाहिएको थियो।',
        solutionText: 'विनोदले आफ्नो व्यवसायलाई प्राइभेट लिमिटेडमा रूपान्तरण गरे। कम्पनीको स्थिर २५% कर प्रणालीका कारण उनको वार्षिक रु. २,४०,००० कर जोगियो। साथै, बैंकले आमाको नामको जग्गा धितो नमागी कम्पनीको मौज्दात र स्टक हाइपोथिकेसन धितो राखेर २५ लाख कर्जा दियो।',
        metricHighlight: 'वार्षिक २.४ लाख कर जोगाए र परिवारको जग्गा बैंकको जोखिमबाट मुक्त राखे'
      },
      formula: {
        name: 'संस्थागत कर लाभ निकाल्ने सूत्र',
        equation: '\\text{Net Corporate Tax} = \\text{Profit} \\times 25\\% \\quad \\text{vs} \\quad \\text{Individual Tax} = \\sum (\\text{Bracket Income} \\times \\text{Slab Rate})',
        variables: [
          { symbol: '\\text{Profit}', name: 'वार्षिक खुद करयोग्य नाफा', desc: 'खर्च कटाएर बाँकी रहेको खुद व्यापारिक आम्दानी।' },
          { symbol: '25\\%', name: 'स्थिर संस्थागत कर दर', desc: 'नेपालमा प्राइभेट लिमिटेड कम्पनीहरूले तिर्ने मानक आयकर।' }
        ],
        exampleCalculation: 'रु. ३५,००,००० नाफा हुँदा: अविवाहित व्यक्तिको आयकर रु. ८,८५,००० भन्दा बढी (उच्च दर ३६%) पुग्छ। कम्पनीमा स्थिर २५% ले रु. ८,७५,००० मात्र हुन्छ। ५० लाख नाफा हुँदा व्यक्तिगत कर १४.५ लाख पुग्छ भने कम्पनीको कर १२.५ लाख मात्र हुन्छ - वर्षमै सोझै २ लाख बचत!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'व्यक्तिगत vs संस्थागत कर तुलना गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'जोखिमयुक्त व्यवसाय (जस्तै रेस्टुरेन्ट, यातायात, उद्योग) एकलौटी फर्ममा चलाउनु।', correct: 'सधैँ प्राइभेट लिमिटेड दर्ता गर्नुहोस् ताकि सीमित दायित्व (Limited Liability) को सुरक्षा मिलोस्।', explanation: 'एकलौटी फर्ममा कुनै दुर्घटना वा ऋण डिफल्ट भएमा अदालतले तपाईंको निजी घरजग्गा बेचेर असुल गर्छ।' },
        { mistake: 'प्राइभेट लिमिटेड कम्पनीको बैंक खातालाई व्यक्तिगत गोजीको पैसा जस्तै चलाउनु।', correct: 'कम्पनीबाट मासिक तलब लिनुहोस् र बाँकी नाफा आधिकारिक लाभांशका रूपमा मात्र झिक्नुहोस्।', explanation: 'कम्पनीको पैसा बिना कागजात व्यक्तिगत खर्चमा चलाउँदा कर कार्यालयले सञ्चालक कर्जा मानेर भारी जरिवाना गर्छ।' },
        { mistake: 'व्यापार भएन वा शून्य कारोबार भयो भन्दै कम्पनीको वार्षिक विवरण नबुझाई बस्नु।', correct: 'कारोबार शून्य भए पनि दर्तावाला अडिटरबाट शून्य अडिट गराएर रजिष्ट्रारमा विवरण बुझाउनुहोस्।', explanation: 'कम्पनी रजिष्ट्रारको कार्यालयले विवरण नबुझाउने कम्पनीलाई दैनिक रूपमा बढ्ने भारी जरिवाना असुल्छ।' }
      ],
      definitions: [
        { term: 'सीमित दायित्व (Limited Liability)', full: 'लगानीको सुरक्षा सीमा', meaning: 'कम्पनी डुबेको अवस्थामा सेयरधनीले आफ्नो सेयर पुँजीभन्दा बढी व्यक्तिगत सम्पत्तिबाट ऋण तिर्नु नपर्ने कानुनी अधिकार।' },
        { term: 'छुट्टै कानुनी अस्तित्व (Separate Legal Entity)', full: 'स्वायत्त संस्था', meaning: 'कम्पनी कानुनको नजरमा मालिकभन्दा छुट्टै व्यक्ति हो, जसले आफ्नै नाममा सम्पत्ति राख्न र मुद्दा हाल्न सक्छ।' },
        { term: 'संस्थागत कर (Corporate Tax)', full: 'कम्पनीको आयकर', meaning: 'प्राइभेट लिमिटेड कम्पनीहरूले वर्षभरिको खुद नाफामा नेपाल सरकारलाई बुझाउने स्थिर २५% कर।' },
        { term: 'अधिकृत पुँजी (Authorized Capital)', full: 'जारी गर्न पाउने अधिकतम पुँजी', meaning: 'कम्पनीको प्रबन्धपत्रमा उल्लेख भएको कम्पनीले सेयरधनीहरूलाई जारी गर्न पाउने अधिकतम कानुनी पुँजी।' }
      ],
      faqs: [
        { q: 'के नेपालमा एकजना मात्र व्यक्ति भएर पनि प्राइभेट लिमिटेड कम्पनी खोल्न मिल्छ?', a: 'मज्जाले मिल्छ। कम्पनी ऐन २०६३ अनुसार "एकल शेयरधनी कम्पनी" (Single Person Company) दर्ता गर्न पाइन्छ, जहाँ एकजना मात्र संस्थापक भए पनि सीमित दायित्वको पूरै सुविधा पाइन्छ।' },
        { q: 'नेपालमा प्राइभेट लिमिटेड कम्पनी चलाउन वर्षको कति खर्च लाग्छ?', a: 'वार्षिक लेखापरीक्षण (CA/RA अडिट), कर चुक्ता प्रमाणपत्र, र कम्पनी रजिष्ट्रार कार्यालयमा वार्षिक विवरण बुझाउन गरी वर्षको करिब रु. २५,००० देखि ५०,००० सम्म खर्च हुन्छ।' },
        { q: 'के पहिले दर्ता भइसकेको एकलौटी फर्मलाई पछि प्राइभेट लिमिटेडमा बदल्न मिल्छ?', a: 'मिल्छ। नयाँ प्राइभेट लिमिटेड कम्पनी दर्ता गरेर पुरानो एकलौटी फर्मको सम्पूर्ण सम्पत्ति, नाम, र गुडविल कम्पनीले खरिद गर्ने सम्झौता गरेर सजिलै रूपान्तरण गर्न सकिन्छ।' }
      ],
      takeaways: [
        'एकलौटी फर्ममा असीमित व्यक्तिगत दायित्व हुन्छ - व्यापारको ऋणले तपाईंको निजी घरजग्गा खोस्न सक्छ।',
        'प्राइभेट लिमिटेड कम्पनीले व्यापारिक नोक्सानी र ऋणबाट तपाईंको व्यक्तिगत सम्पत्तिलाई कानुनी सुरक्षा दिन्छ।',
        'वार्षिक नाफा २५ लाख नाघेपछि कम्पनीको स्थिर २५% करले व्यक्तिगत स्ल्याबको तुलनामा लाखौँ रुपैयाँ जोगाउँछ।',
        'सह-संस्थापक थप्न, कर्मचारीलाई सेयर (ESOP) दिन वा लगानी जुटाउन प्राइभेट लिमिटेड अनिवार्य हुन्छ।',
        'कम्पनी सञ्चालन गर्दा वार्षिक २५ देखि ४० हजार रुपैयाँ कानुनी अडिट र नवीकरणका लागि बजेट छुट्याउनुपर्छ।'
      ]
    }
  },

  // ── J2. COMPANY REGISTRATION AT OCR STEP-BY-STEP ─────────────────
  'company-registration-ocr-step-by-step': {
    id: 'biz-ocr-registration-steps',
    slug: 'company-registration-ocr-step-by-step',
    categorySlug: 'business',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '11 min read', np: '११ मिनेट पढाइ' },
    masteryTime: { en: '25 min practice', np: '२५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Office of Company Registrar (OCR) Digital Portal Workflows FY 2081/82', np: 'कम्पनी रजिष्ट्रारको कार्यालय (OCR) अनलाइन कार्यविधि २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Citizenship certificate, proposed company names, and capital structure', np: 'नागरिकता प्रमाणपत्र, प्रस्तावित कम्पनीको नाम र पुँजी संरचनाको जानकारी' },
    en: {
      title: 'Company Registration at OCR Nepal: Complete Step-by-Step Online Guide',
      oneLineSummary: 'Master the 6-step incorporation process at ocr.gov.np - from name approval and MOA/AOA drafting to digital certificate and PAN.',
      summaryPoints: [
        'The entire company incorporation process in Nepal is digital via the Office of Company Registrar (OCR) portal at ocr.gov.np.',
        'Step 1 requires submitting 3 distinct proposed names for official electronic name approval (नाम स्वीकृति).',
        'Memorandum of Association (MOA - प्रबन्धपत्र) and Articles of Association (AOA - नियमावली) must be drafted adhering to Companies Act 2063 schedules.',
        'Government registration fees are tiered based on authorized capital (starts at NPR 5,000 for up to NPR 10 Lakh capital).',
        'Incorporation is complete only after securing the OCR Certificate, IRD Business PAN, Ward Business Registration, and corporate bank account.'
      ],
      whatIsThis: 'Company registration at the Office of Company Registrar (OCR - कम्पनी रजिष्ट्रारको कार्यालय) is the statutory process of creating a legally recognized corporate entity in Nepal under the Companies Act 2063. The procedure is executed through OCR\'s electronic portal, producing a digital Certificate of Incorporation (दर्ता प्रमाणपत्र).',
      whyItMatters: 'Hiring traditional "dalals" (middlemen) outside Tripureshwor often costs entrepreneurs NPR 35,000 to NPR 60,000 for basic paperwork. By understanding the digital workflow yourself, you can incorporate a standard tech, service, or retail startup for just the official government fee (NPR 5,000) in under a week, retaining total control over your founding shares and corporate charter.',
      howItWorks: [
        { step: 1, title: 'Portal Signup & Name Reservation', desc: 'Create an account on ocr.gov.np. Submit your proposed company name in Nepali (Devanagari) and English. The registrar approves or rejects within 24 to 48 hours based on novelty and existing trademarks.' },
        { step: 2, title: 'Drafting MOA (प्रबन्धपत्र) & AOA (नियमावली)', desc: 'Draft the Memorandum of Association (defining business objectives and authorized/issued/paid-up capital) and Articles of Association (defining director rules, voting rights, and share transfers).' },
        { step: 3, title: 'Uploading Scanned Documents & KYC', desc: 'Upload citizenship certificates of all promoters, signed MOA/AOA, witness citizenship, and promoter agreements onto the OCR portal.' },
        { step: 4, title: 'Fee Payment & Digital Certificate Issuance', desc: 'Pay the government incorporation fee online via connectIPS. The registrar audits the application and issues the digital Certificate of Incorporation with a unique Registration Number.' },
        { step: 5, title: 'IRD Business PAN Registration', desc: 'Visit the Inland Revenue Department (IRD) portal (ird.gov.np) with your OCR certificate to generate your 9-digit Business PAN within 24 hours.' },
        { step: 6, title: 'Ward Registration & Bank Account Opening', desc: 'Register your commercial office at your local municipal ward (वडा कार्यालय) and open your corporate bank account with the board resolution.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'OCR Government Incorporation Fee Schedule (Based on Authorized Capital)',
        headers: ['Authorized Capital Bracket', 'Statutory OCR Government Fee', 'Estimated Legal/Drafting Cost', 'Total Direct Incorporation Cost'],
        rows: [
          ['Up to NPR 10,00,000 (10 Lakh)', 'NPR 5,000 flat fee', 'NPR 0 (Self) to NPR 10,000', 'NPR 5,000 to NPR 15,000'],
          ['NPR 10 Lakh to 50 Lakh', 'NPR 15,000 flat fee', 'NPR 5,000 to NPR 15,000', 'NPR 20,000 to NPR 30,000'],
          ['NPR 50 Lakh to 1 Crore', 'NPR 30,000 flat fee', 'NPR 10,000 to NPR 25,000', 'NPR 40,000 to NPR 55,000'],
          ['NPR 1 Crore to 5 Crore', 'NPR 80,000 flat fee', 'Custom legal drafting', 'NPR 95,000+'],
          ['Above NPR 5 Crore', 'NPR 80,000 + NPR 30 per Lakh', 'Full corporate counsel', 'Enterprise tier']
        ]
      },
      nepalContext: 'Under the revised Companies Act 2063 provisions, foreign nationals and non-resident Nepalis (NRNs) can also hold equity in private limited companies subject to Department of Industry (DOI) foreign direct investment (FDI) approvals. Recent reforms allow standard service and tech startups to be incorporated with zero minimum paid-up capital constraints (a company can start with nominal issued capital of NPR 1 Lakh), making entrepreneurship accessible to young professionals.',
      practicalScenario: {
        persona: 'Anisha & Roshan, 27, tech startup founders in Kathmandu',
        income: 'Bootstrapping with NPR 4,00,000 savings',
        scenarioText: 'Anisha and Roshan wanted to register an AI software development startup. A local consultant demanded NPR 45,000 to "handle everything at Tripureshwor OCR."',
        solutionText: 'Following RisePaisa\'s step-by-step roadmap, they logged into ocr.gov.np themselves. They got their company name approved in 24 hours, used standard OCR template clauses for their MOA/AOA, and paid the NPR 5,000 government fee via connectIPS. Within 4 business days, they downloaded their official Certificate of Incorporation, saving NPR 40,000 in agent markups.',
        metricHighlight: 'Incorporated their company for NPR 5,000 in 4 days, saving NPR 40,000'
      },
      formula: {
        name: 'Initial Working Capital Ratio Formula',
        equation: '\\text{Issued Capital} \\geq \\text{Initial Capital Expenditure} + (6 \\times \\text{Monthly Operating Burn})',
        variables: [
          { symbol: '\\text{Issued Capital}', name: 'Promoter Share Commitment', desc: 'The actual money founders agree to inject into the corporate bank account.' },
          { symbol: '\\text{Monthly Operating Burn}', name: 'Monthly Fixed Overhead', desc: 'Office rent + salaries + cloud hosting + utilities.' }
        ],
        exampleCalculation: 'Rent = NPR 25,000/mo, Salaries = NPR 60,000/mo, Hosting = NPR 15,000/mo (Monthly Burn = NPR 1,00,000). Initial Capex = NPR 2,00,000. Recommended Minimum Issued Capital = 2,00,000 + (6 × 1,00,000) = NPR 8,00,000. Set Authorized Capital at NPR 10 Lakh to stay within the cheapest NPR 5,000 fee tier!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Startup Tax Slabs'
      },
      commonMistakes: [
        { mistake: 'Setting an unnecessarily massive authorized capital (e.g. NPR 2 Crore) on Day 1.', correct: 'Start with NPR 10 Lakh authorized capital to pay the minimum NPR 5,000 fee, then increase later.', explanation: 'You can increase authorized capital via a special shareholder resolution whenever actual expansion requires it.' },
        { mistake: 'Copy-pasting generic MOA objective clauses without including digital or export services.', correct: 'Ensure your MOA specifically lists foreign software export, consultancy, and digital billing.', explanation: 'Banks in Nepal will not process international wire transfers (USD/EUR) if the exact activity is missing from your MOA.' },
        { mistake: 'Forgetting local Ward Business Registration after getting OCR and PAN certificates.', correct: 'Register at your local municipal ward within 30 days of office setup.', explanation: 'Municipal police frequently inspect commercial offices and impose fines for unregistered operations.' }
      ],
      definitions: [
        { term: 'MOA (Prabandhapatra)', full: 'प्रबन्धपत्र', meaning: 'The foundational constitutional document of a company defining its legal name, registered office, objects, and capital structure.' },
        { term: 'AOA (Niyamawali)', full: 'नियमावली', meaning: 'The internal operational bylaws governing director appointments, board meetings, voting rights, and share transfers.' },
        { term: 'Certificate of Incorporation', full: 'कम्पनी दर्ता प्रमाणपत्र', meaning: 'The official birth certificate of the corporation issued by OCR bearing a unique permanent registration number.' },
        { term: 'Business PAN', full: 'व्यावसायिक स्थायी लेखा नम्बर', meaning: 'A 9-digit tax identifier issued by the Inland Revenue Department (IRD) to corporations.' }
      ],
      faqs: [
        { q: 'How long does the entire company registration process take at OCR in Nepal?', a: 'Typically 3 to 6 business days: 1-2 days for name approval, 1-2 days for document review and fee clearance, and 1 day for digital certificate issuance.' },
        { q: 'Do I need to visit the OCR office physically in Tripureshwor?', a: 'No. The entire registration, payment, document submission, and certificate download is 100% online through ocr.gov.np.' },
        { q: 'What is the difference between Authorized Capital and Paid-Up Capital?', a: 'Authorized Capital is the statutory ceiling of capital your company can issue under its charter. Paid-up capital is the actual cash promoters have transferred into the corporate bank account.' }
      ],
      takeaways: [
        'Company incorporation in Nepal is 100% digital through the OCR portal at ocr.gov.np.',
        'Keep authorized capital under NPR 10 Lakh initially to qualify for the minimum NPR 5,000 fee tier.',
        'Ensure your MOA clearly includes digital services, foreign billing, and export activities.',
        'Complete registration by securing IRD Business PAN and local Ward Business License.',
        'Avoid expensive middlemen - follow the transparent 6-step online procedure yourself.'
      ]
    },
    np: {
      title: 'नेपालमा कम्पनी दर्ता (OCR) गर्ने चरणबद्ध अनलाइन तरिका: सम्पूर्ण प्रक्रिया',
      oneLineSummary: 'ocr.gov.np बाट नाम स्वीकृति, प्रबन्धपत्र/नियमावली तयारीदेखि दर्ता प्रमाणपत्र, प्यान र वडा दर्तासम्मको ६-चरणीय निर्देशिका।',
      summaryPoints: [
        'नेपालमा प्राइभेट लिमिटेड कम्पनी दर्ता गर्ने सम्पूर्ण प्रक्रिया कम्पनी रजिष्ट्रारको कार्यालय (OCR) को पोर्टल ocr.gov.np मार्फत अनलाइन हुन्छ।',
        'पहिलो चरणमा कम्पनीको नाम स्वीकृत गराउन कम्तीमा ३ वटा फरक नाम अनलाइन प्रणालीमा पेश गर्नुपर्छ।',
        'कम्पनी ऐन २०६३ को अनुसूची अनुसार प्रबन्धपत्र (MOA) र नियमावली (AOA) सही ढाँचामा तयार गर्नुपर्छ।',
        'अधिकृत पुँजीका आधारमा सरकारी दस्तुर निर्धारण हुन्छ (१० लाखसम्मको अधिकृत पुँजीमा जम्मा रु. ५,००० सरकारी दस्तुर)।',
        'कम्पनीको पूर्ण मान्यता पाउन OCR प्रमाणपत्र, आन्तरिक राजस्व कार्यालयबाट व्यावसायिक प्यान, र स्थानीय वडा दर्ता अनिवार्य हुन्छ।'
      ],
      whatIsThis: 'कम्पनी रजिष्ट्रारको कार्यालय (OCR - Office of Company Registrar) मा कम्पनी दर्ता भनेको कम्पनी ऐन २०६३ अन्तर्गत नेपालमा कुनै पनि संस्थालाई कानुनी व्यक्तिको रूपमा स्थापना गर्ने आधिकारिक प्रक्रिया हो। यो प्रक्रिया अनलाइन सम्पन्न भई डिजिटल कम्पनी दर्ता प्रमाणपत्र (Certificate of Incorporation) प्राप्त हुन्छ।',
      whyItMatters: 'त्रिपुरेश्वरस्थित कम्पनी रजिष्ट्रार कार्यालय बाहिरका बिचौलियाहरूले सामान्य कम्पनी दर्ताका लागि ३५ देखि ६० हजार रुपैयाँसम्म असुल्छन्। अनलाइन प्रक्रिया आफैं बुझ्दा युवा उद्यमीहरूले जम्मा ५ हजार सरकारी दस्तुरमै १ हप्ताभित्र आफ्नै ल्यापटपबाट कम्पनी दर्ता गर्न सक्छन् र आफ्नो सेयर स्वामित्वमा पूर्ण नियन्त्रण राख्न सक्छन्।',
      howItWorks: [
        { step: 1, title: 'पोर्टलमा खाता र नाम स्वीकृति (Name Approval)', desc: 'ocr.gov.np मा लगइन गर्नुहोस्। नेपाली र अंग्रेजीमा प्रस्तावित नाम पेश गर्नुहोस्। २४ देखि ४८ घण्टाभित्र रजिष्ट्रारले नाम स्वीकृत वा अस्वीकृत गरेको जानकारी दिन्छ।' },
        { step: 2, title: 'प्रबन्धपत्र (MOA) र नियमावली (AOA) तयारी', desc: 'कम्पनीको उद्देश्य, पुँजी र कार्यक्षेत्र खुलाइएको प्रबन्धपत्र तथा सञ्चालकहरूको काम, कर्तव्य र सेयर बाँडफाँट सम्बन्धी नियमावली तयार गर्नुहोस्।' },
        { step: 3, title: 'कागजात र नागरिकता अनलाइन अपलोड', desc: 'सबै संस्थापक सेयरधनीहरूको नागरिकता, साक्षीको नागरिकता, र हस्ताक्षर गरिएको प्रबन्धपत्र तथा नियमावली स्क्यान गरी पोर्टलमा अपलोड गर्नुहोस्।' },
        { step: 4, title: 'सरकारी दस्तुर भुक्तानी र प्रमाणपत्र प्राप्ति', desc: 'connectIPS मार्फत तोकिएको सरकारी दस्तुर तिर्नुहोस्। रजिष्ट्रार अधिकृतले रुजु गरेपछि आधिकारिक डिजिटल दर्ता प्रमाणपत्र जारी हुन्छ।' },
        { step: 5, title: 'व्यावसायिक स्थायी लेखा नम्बर (PAN) दर्ता', desc: 'आन्तरिक राजस्व विभागको वेबसाइट (ird.gov.np) मा गएर कम्पनीको प्रमाणपत्र अपलोड गरी २४ घण्टाभित्र ९ अंकको व्यावसायिक प्यान लिनुहोस्।' },
        { step: 6, title: 'स्थानीय वडा दर्ता र बैंक खाता सञ्चालन', desc: 'आफ्नो कार्यालय रहेको स्थानीय वडा कार्यालयमा व्यवसाय दर्ता गर्नुहोस् र सञ्चालक समितिको निर्णय (Resolution) सहित बैंकमा चल्ती खाता खोल्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'कम्पनी रजिष्ट्रार कार्यालयको आधिकारिक दर्ता दस्तुर तालिका (अधिकृत पुँजी अनुसार)',
        headers: ['अधिकृत पुँजीको सीमा', 'सरकारी रजिष्ट्रेसन दस्तुर', 'अनुमानित मस्यौदा खर्च', 'कुल न्यूनतम दर्ता लागत'],
        rows: [
          ['रु. १०,००,००० (१० लाख) सम्म', 'रु. ५,००० स्थिर दस्तुर', 'रु. ० (आफैं गर्दा) देखि १० हजार', 'रु. ५,००० देखि १५,०००'],
          ['रु. १० लाखदेखि ५० लाखसम्म', 'रु. १५,००० स्थिर दस्तुर', 'रु. ५,००० देखि १५,०००', 'रु. २०,००० देखि ३०,०००'],
          ['रु. ५० लाखदेखि १ करोडसम्म', 'रु. ३०,००,००० स्थिर दस्तुर', 'रु. १०,००० देखि २५,०००', 'रु. ४०,००० देखि ५५,०००'],
          ['रु. १ करोडदेखि ५ करोडसम्म', 'रु. ८०,००० स्थिर दस्तुर', 'संस्थागत कानुन व्यवसायी दर', 'रु. ९५,००० भन्दा माथि'],
          ['रु. ५ करोडभन्दा माथि', 'रु. ८० हजार + प्रतिलाख रु. ३०', 'विस्तृत कर्पोरेट मस्यौदा', 'ठूला उद्योग स्तर']
        ]
      },
      nepalContext: 'कम्पनी ऐन २०६३ को संशोधित व्यवस्था अनुसार विदेशी नागरिक र गैरआवासीय नेपाली (NRN) ले पनि उद्योग विभागको स्वीकृति लिएर प्राइभेट लिमिटेड कम्पनीमा लगानी गर्न सक्छन्। हालका वर्षहरूमा न्यूनतम चुक्ता पुँजीको कडा बन्देज हटाइएको छ; कुनै पनि नयाँ प्राविधिक वा सेवामूलक कम्पनी १ लाख रुपैयाँको जारी पुँजीमै सजिलै दर्ता गर्न सकिन्छ, जसले गर्दा युवाहरूलाई उद्यमशीलतामा लाग्न कानुनी सहजता मिलेको छ।',
      practicalScenario: {
        persona: 'अनिषा र रोशन, २७, काठमाडौँका आइटी उद्यमी',
        income: '४ लाख रुपैयाँको व्यक्तिगत बचतबाट नयाँ स्टार्टअप सुरु गर्दै',
        scenarioText: 'अनिषा र रोशनले एआई सफ्टवेयर कम्पनी दर्ता गर्न खोजे। एक बिचौलियाले "त्रिपुरेश्वरमा सबै काम मिलाइदिन्छु" भन्दै ४५ हजार रुपैयाँ माग्यो।',
        solutionText: 'उनीहरूले कसैलाई पैसा नदिई ocr.gov.np मा आफैं खाता खोले। २४ घण्टामा नाम स्वीकृत गराए, सरकारी ढाँचा अनुसार प्रबन्धपत्र तयार पारे, र connectIPS बाट ५ हजार रुपैयाँ सरकारी राजस्व तिरे। ४ कार्यदिनभित्रै उनीहरूले अनलाइनबाटै आधिकारिक कम्पनी दर्ता प्रमाणपत्र प्राप्त गरे र ४० हजार रुपैयाँ जोगाए।',
        metricHighlight: '४ दिनमै ५ हजार रुपैयाँमा कम्पनी दर्ता सम्पन्न गरी ४० हजार बचत'
      },
      formula: {
        name: 'सुरुवाती कार्यसञ्चालन पुँजी सूत्र',
        equation: '\\text{Issued Capital} \\geq \\text{Initial Capital Expenditure} + (6 \\times \\text{Monthly Operating Burn})',
        variables: [
          { symbol: '\\text{Issued Capital}', name: 'जारी सेयर पुँजी', desc: 'संस्थापकहरूले कम्पनीको खातामा जम्मा गर्ने प्रतिबद्धता गरेको वास्तविक रकम।' },
          { symbol: '\\text{Monthly Operating Burn}', name: 'मासिक स्थिर सञ्चालन खर्च', desc: 'कार्यालय भाडा + कर्मचारी तलब + सफ्टवेयर + बिजुली-इन्टरनेट।' }
        ],
        exampleCalculation: 'भाडा = २५,०००, तलब = ६०,०००, होस्टिङ/सफ्टवेयर = १५,००० (मासिक खर्च = १ लाख)। सुरुवाती कम्प्युटर खरिद = २ लाख। सिफारिस गरिएको जारी पुँजी = २,००,००० + (६ × १,००,०००) = रु. ८,००,०००। अधिकृत पुँजी १० लाख राख्दा न्यूनतम ५ हजारको दस्तुरमै काम बन्छ!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'स्टार्टअप कर स्ल्याब जाँच्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'सुरुको दिनमै अनावश्यक रूपमा ठूलो अधिकृत पुँजी (जस्तै २ करोड) राख्नु।', correct: 'सुरुमा १० लाख अधिकृत पुँजी राख्नुहोस् ताकि न्यूनतम रु. ५,००० मात्र दस्तुर लागोस्।', explanation: 'पछि कम्पनी विस्तार हुँदा साधारण सभाबाट निर्णय गरेर जुनसुकै बेला अधिकृत पुँजी बढाउन सकिन्छ।' },
        { mistake: 'प्रबन्धपत्र (MOA) मा सफ्टवेयर निर्यात र डिजिटल सेवाका बुँदा छुटाउनु।', correct: 'आफ्नो प्रबन्धपत्रको उद्देश्यमा विदेशी मुद्रा आर्जन, निर्यात, र अनलाइन सेवा स्पष्ट लेख्नुहोस्।', explanation: 'प्रबन्धपत्रमा नखुलेको कामको पैसा विदेशबाट बैंकमा आउँदा नेपाल राष्ट्र बैंकले डलर खातामा रकम रोकिदिन्छ।' },
        { mistake: 'OCR र PAN पाएपछि स्थानीय वडा कार्यालयमा व्यवसाय दर्ता गर्न बिर्सनु।', correct: 'कार्यालय स्थापना गरेको ३० दिनभित्र अनिवार्य रूपमा स्थानीय वडामा दर्ता गर्नुहोस्।', explanation: 'नगरपालिकाले अनुगमन गर्दा वडा दर्ता नभएका व्यवसायलाई शिलबन्दी गरी जरिवाना तिराउन सक्छ।' }
      ],
      definitions: [
        { term: 'प्रबन्धपत्र (MOA)', full: 'Memorandum of Association', meaning: 'कम्पनीको नाम, ठेगाना, उद्देश्य, र अधिकृत तथा जारी पुँजी उल्लेख गरिएको मूल कानुनी दस्तावेज।' },
        { term: 'नियमावली (AOA)', full: 'Articles of Association', meaning: 'कम्पनी सञ्चालन, सञ्चालकको काम-कर्तव्य, साधारण सभा, र सेयर किनबेच सम्बन्धी भित्री कार्यविधि दस्तावेज।' },
        { term: 'दर्ता प्रमाणपत्र', full: 'Certificate of Incorporation', meaning: 'कम्पनी रजिष्ट्रारको कार्यालयले जारी गर्ने कम्पनीको आधिकारिक कानुनी जन्मदर्ता प्रमाणपत्र।' },
        { term: 'व्यावसायिक प्यान (PAN)', full: 'स्थायी लेखा नम्बर', meaning: 'कर प्रयोजनका लागि आन्तरिक राजस्व कार्यालयले कम्पनीको नाममा जारी गर्ने ९ अंकको कर पहिचान नम्बर।' }
      ],
      faqs: [
        { q: 'नेपालमा कम्पनी दर्ता हुन अनलाइनबाट कति दिन लाग्छ?', a: 'सामान्यतया ३ देखि ६ कार्यदिन लाग्छ: नाम स्वीकृत हुन १-२ दिन, कागजात प्रमाणीकरण र राजस्व तिर्न १-२ दिन, र डिजिटल प्रमाणपत्र जारी हुन १ दिन।' },
        { q: 'के कम्पनी दर्ता गर्न त्रिपुरेश्वरस्थित कार्यालयमै पुग्नुपर्छ?', a: 'पर्दैन। नाम दर्ता, कागजात अपलोड, राजस्व भुक्तानी, र प्रमाणपत्र डाउनलोड गर्ने सम्पूर्ण काम घरमै बसेर ocr.gov.np बाट शतप्रतिशत अनलाइन गर्न सकिन्छ।' },
        { q: 'अधिकृत पुँजी (Authorized) र चुक्ता पुँजी (Paid-Up) मा के फरक छ?', a: 'अधिकृत पुँजी भनेको कम्पनीले जारी गर्न पाउने अधिकतम कानुनी सीमा हो। चुक्ता पुँजी भनेको संस्थापकहरूले वास्तविक रूपमा कम्पनीको बैंक खातामा जम्मा गरिसकेको रकम हो।' }
      ],
      takeaways: [
        'नेपालमा कम्पनी दर्ता प्रक्रिया ocr.gov.np मार्फत शतप्रतिशत डिजिटल भइसकेको छ।',
        'सुरुमा १० लाखसम्मको अधिकृत पुँजी राख्दा जम्मा रु. ५,००० सरकारी दस्तुरमै कम्पनी खुल्छ।',
        'प्रबन्धपत्र तयार गर्दा भविष्यमा गर्ने अनलाइन, डिजिटल र निर्यात सेवाका उद्देश्यहरू अनिवार्य खुलाउनुहोस्।',
        'कम्पनी दर्तापछि आन्तरिक राजस्वबाट प्यान र स्थानीय वडा कार्यालयबाट व्यवसाय दर्ता लिनुहोस्।',
        'बिचौलियालाई लाखौँ नबुझाई पारदर्शी अनलाइन प्रणालीबाट आफैं दर्ता गर्नुहोस्।'
      ]
    }
  },

  // ── J3. PAN VS VAT THRESHOLDS IN NEPAL ───────────────────────────
  'pan-vs-vat-thresholds-nepal': {
    id: 'biz-pan-vs-vat-thresholds',
    slug: 'pan-vs-vat-thresholds-nepal',
    categorySlug: 'business',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Value Added Tax Act 2052 & IRD Finance Act Amendments FY 2081/82', np: 'मूल्य अभिवृद्धि कर ऐन २०५२ तथा आन्तरिक राजस्व विभाग आर्थिक ऐन २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Basic understanding of sales invoices and taxation in Nepal', np: 'नेपालमा बिलिङ र कर प्रणालीको सामान्य जानकारी' },
    en: {
      title: 'PAN vs VAT Thresholds in Nepal: When is VAT Registration Legally Mandatory?',
      oneLineSummary: 'Know the exact turnover thresholds (NPR 50L goods vs NPR 20L services) that mandate 13% VAT registration under IRD law.',
      summaryPoints: [
        'All registered businesses in Nepal require a Permanent Account Number (PAN); VAT is a secondary consumption tax registration.',
        'Businesses dealing exclusively in goods must register for VAT if annual turnover exceeds NPR 50 Lakh in the preceding 12 months.',
        'Businesses providing services or mixed contracts (goods + services, consulting, restaurants) MUST register for VAT once turnover exceeds NPR 20 Lakh.',
        'Certain businesses require mandatory VAT registration on Day 1 regardless of turnover (hardware, electronics, automobiles, liquor, sanitary ware).',
        'Once VAT registered, businesses must charge 13% VAT, issue authorized tax invoices, and file monthly VAT returns (form 13) by the 25th of each month.'
      ],
      whatIsThis: 'PAN (स्थायी लेखा नम्बर) and VAT (मूल्य अभिवृद्धि कर) are the twin tax registrations administered by the Inland Revenue Department (IRD). While PAN tracks income tax, VAT registration obligates a business to collect a 13% indirect consumption tax from buyers, offset input tax paid on raw materials, and remit the net balance to the government treasury monthly.',
      whyItMatters: 'Crossing the VAT threshold without registering is a severe tax crime in Nepal. The IRD conducts market audits using banking records and billing data. If an unregistered business crosses NPR 20 Lakh in service sales, IRD tax officers will retroactively assess 13% VAT on the entire turnover, slap an immediate 25% penalty, and charge 15% annual compounding interest, easily wiping out multiple years of business profits.',
      howItWorks: [
        { step: 1, title: 'Classify Your Business Activity (Goods vs Services)', desc: 'Trading physical consumer goods falls under the NPR 50 Lakh threshold. Consulting, IT services, restaurants, events, and repairs are classified as services with a strict NPR 20 Lakh threshold.' },
        { step: 2, title: 'Check Mandatory Day-1 VAT Categories', desc: 'Under the VAT Act, retailers selling hardware, sanitary ware, electrical equipment, motor parts, jewelry, timber, or liquor must register for VAT before selling their very first item.' },
        { step: 3, title: 'Monitor Rolling 12-Month Turnover', desc: 'Track your cumulative sales over the last 365 days (not just the fiscal year). The moment trailing turnover hits NPR 20L (services) or NPR 50L (goods), apply for VAT within 30 days.' },
        { step: 4, title: 'Execute Monthly Filing & Input Credit Reconciliation', desc: 'Maintain approved Purchase and Sales registers (खरीद तथा बिक्री खाता). Every month by the 25th, file your VAT return on the IRD portal: Net VAT Payable = Output VAT Collected - Input VAT Paid.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Statutory VAT Registration Thresholds in Nepal (FY 2081/82)',
        headers: ['Business Nature', 'Annual Turnover Threshold', 'Registration Trigger', 'Filing Frequency'],
        rows: [
          ['Goods Trading Only (General Retail)', 'NPR 50,00,000 (50 Lakh)', 'When trailing 12-mo sales > 50L', 'Monthly (by 25th of next month)'],
          ['Services Only (IT, Consulting, Agency)', 'NPR 20,00,000 (20 Lakh)', 'When trailing 12-mo sales > 20L', 'Monthly (by 25th of next month)'],
          ['Mixed Goods & Services (Restaurants)', 'NPR 20,00,000 (20 Lakh)', 'Lower service threshold applies', 'Monthly (by 25th of next month)'],
          ['Mandatory Sectors (Hardware, Liquor)', 'NPR 0 (Immediate)', 'Must register before opening', 'Monthly (by 25th of next month)'],
          ['Bi-Monthly Option (Small Manufacturers)', 'Under special IRD permission', 'Turnover under specific caps', 'Every 2 months (Trimester)']
        ]
      },
      nepalContext: 'Nepal introduced the Value Added Tax Act 2052 (1997) replacing traditional sales tax, with a universal flat rate of 13%. To formalize the economy, the Inland Revenue Department integrates real-time billing via the Central Billing Monitoring System (CBMS) for large merchants. Furthermore, individual consumers paying via digital QR or cards at registered VAT merchants are legally entitled to an immediate 10% cash rebate on the VAT paid under recent Finance Act provisions.',
      practicalScenario: {
        persona: 'Rajesh, 34, hardware & sanitary retail shopkeeper in Pokhara',
        income: 'NPR 1,10,000 / month net profit',
        scenarioText: 'Rajesh operated a small hardware shop under a simple PAN for 2 years, clocking NPR 38 Lakh in annual sales. He thought: "I am below 50 Lakh, so I don\'t need VAT."',
        solutionText: 'During a market inspection, the Inland Revenue Office informed Rajesh that hardware and sanitary retail is a "Mandatory Day-1 VAT Category" regardless of turnover. To avoid a massive closure order, he immediately registered for VAT, began issuing computerized tax invoices, and claimed input tax credits on all cement and pipe supplies, stabilizing his business legally.',
        metricHighlight: 'Regularized business into VAT, avoiding retroactive 25% penalties'
      },
      formula: {
        name: 'Net VAT Payable to Government Formula',
        equation: '\\text{Net VAT Payable} = \\text{Output VAT (Sales)} - \\text{Input VAT Credit (Purchases)}',
        variables: [
          { symbol: '\\text{Output VAT}', name: '13% VAT Collected on Sales', desc: 'Tax collected from customers on commercial sales invoices.' },
          { symbol: '\\text{Input VAT}', name: '13% VAT Paid on Purchases', desc: 'Tax paid to suppliers backed by valid tax invoices.' }
        ],
        exampleCalculation: 'Monthly Sales = NPR 10,00,000 (+ NPR 1,30,000 Output VAT). Monthly Raw Material Purchases = NPR 6,00,000 (+ NPR 78,000 Input VAT). Net VAT Payable to IRD by 25th = 1,30,000 - 78,00,00 = NPR 52,000.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Calculate VAT Balances'
      },
      commonMistakes: [
        { mistake: 'Assuming service businesses have the same NPR 50 Lakh threshold as goods.', correct: 'Service businesses must register for VAT at just NPR 20 Lakh in turnover.', explanation: 'The 20 Lakh threshold applies to all consulting, software development, event management, and restaurants.' },
        { mistake: 'Failing to collect valid VAT purchase invoices from suppliers.', correct: 'Always demand VAT invoices with the supplier\'s verified PAN to claim Input Tax Credits.', explanation: 'Without an authentic VAT invoice, you cannot offset input tax, forcing you to pay the entire 13% out of pocket.' },
        { mistake: 'Missing the 25th of the month filing deadline even when sales were zero.', correct: 'Always file a zero return (शून्य विवरण) on the IRD portal if no business occurred that month.', explanation: 'Non-filing triggers automatic compounding fines of NPR 1,000 or 0.1% of turnover per day.' }
      ],
      definitions: [
        { term: 'VAT (Value Added Tax)', full: 'मूल्य अभिवृद्धि कर', meaning: 'A 13% multi-stage consumption tax levied on the value added to goods and services at each stage of production and distribution.' },
        { term: 'Input Tax Credit', full: 'खरिदमा तिरेको कर कट्टी', meaning: 'The legal right of a VAT-registered business to deduct the VAT paid on business purchases from the VAT collected on sales.' },
        { term: 'Zero Return', full: 'शून्य कर विवरण', meaning: 'A formal monthly tax filing declaring zero sales and purchases to keep the tax record compliant without penalties.' },
        { term: 'CBMS', full: 'Central Billing Monitoring System', meaning: 'IRD\'s real-time digital software system that synchronizes retail merchant sales bills directly with tax servers.' }
      ],
      faqs: [
        { q: 'Can a business register for VAT voluntarily before reaching the turnover threshold?', a: 'Yes. Any business registered in PAN can voluntarily apply for VAT registration on Day 1 to claim input tax credits on expensive equipment and build corporate credibility.' },
        { q: 'What is the penalty for not filing monthly VAT returns on time in Nepal?', a: 'Under the VAT Act, delayed filing attracts a penalty of 0.1% per day of the gross sales amount or NPR 1,000 per month (whichever is higher), plus 15% annual interest on unpaid VAT.' },
        { q: 'Are IT and software exports to foreign clients subject to 13% VAT in Nepal?', a: 'No. Export of services outside Nepal against convertible foreign currency is taxed at 0% VAT rate (शून्य दर), allowing software exporters to claim full input VAT refunds on office equipment.' }
      ],
      takeaways: [
        'Goods businesses must register for VAT at NPR 50 Lakh turnover; services at just NPR 20 Lakh.',
        'Hardware, automobiles, sanitary, and liquor retailers must register for VAT from Day 1.',
        'Input Tax Credit lets you deduct VAT paid on purchases from VAT collected on sales.',
        'File monthly VAT returns on the IRD portal by the 25th of each Nepali month without fail.',
        'Even with zero monthly sales, always file a "Zero Return" to prevent NPR 1,000+ daily penalties.'
      ]
    },
    np: {
      title: 'नेपालमा प्यान (PAN) बनाम भ्याट (VAT) को सीमा: कुन बेला भ्याट दर्ता अनिवार्य हुन्छ?',
      oneLineSummary: 'नेपालको कर कानुन अनुसार वस्तुमा ५० लाख र सेवामा २० लाखको कारोबार सीमा नाघ्दा १३% भ्याट दर्ता गर्नुपर्ने कानुनी व्यवस्था बुझ्नुहोस्।',
      summaryPoints: [
        'नेपालमा दर्ता हुने सबै व्यवसायलाई स्थायी लेखा नम्बर (PAN) अनिवार्य चाहिन्छ; भ्याट (VAT) कारोबार बढेपछि लिइने थप कर दर्ता हो।',
        'केवल वस्तुको किनबेच गर्ने व्यापारमा पछिल्लो १२ महिनामा वार्षिक कारोबार ५० लाख रुपैयाँ नाघेमा भ्याट दर्ता अनिवार्य हुन्छ।',
        'परामर्श, आइटी, रेस्टुरेन्ट, वा मर्मत जस्ता सेवामूलक व्यवसायमा वार्षिक कारोबार २० लाख रुपैयाँ नाघ्नेबित्तिकै भ्याट अनिवार्य हुन्छ।',
        'हार्डवेयर, सेनेटरी, गाडीका पार्टपुर्जा, मदिरा, र इलेक्ट्रोनिक्स जस्ता व्यवसायले कारोबार जतिसुकै भए पनि पहिलो दिनमै भ्याट लिनुपर्छ।',
        'भ्याटमा दर्ता भएपछि अनिवार्य रूपमा १३% कर जोडेर बिल काट्नुपर्छ र हरेक महिनाको २५ गतेभित्र अनलाइन विवरण बुझाउनुपर्छ।'
      ],
      whatIsThis: 'प्यान (PAN) र भ्याट (VAT) आन्तरिक राजस्व विभाग (IRD) ले सञ्चालन गर्ने दुई मुख्य कर दर्ता हुन्। प्यानले व्यवसायको आयकर हिसाब गर्छ भने भ्याटले ग्राहकसँग १३% मूल्य अभिवृद्धि कर असुल्ने, आफूले सामान किन्दा तिरेको कर कट्टा (Input Credit) गर्ने, र खुद बाँकी कर प्रत्येक महिना सरकारी ढुकुटीमा दाखिला गर्ने अधिकार र दायित्व दिन्छ।',
      whyItMatters: 'सीमा नाघेर पनि भ्याट दर्ता नगरी प्यानमै व्यापार गरिरहनु नेपालमा गम्भीर कर अपराध मानिन्छ। आन्तरिक राजस्व कार्यालयले बैंक विवरण र बिलिङ अनुगमन गर्दा २० लाख नाघेको भेटिएमा सुरुदेखिकै पूरै कारोबारमा १३% भ्याट, त्यसमा थप २५% जरिवाना, र वार्षिक १५% ब्याज असुल्छ जसले वर्षौँको नाफा एकैपटक सखाप पार्छ।',
      howItWorks: [
        { step: 1, title: 'आफ्नो व्यवसायको प्रकृति पहिचान गर्नुहोस्', desc: 'यदि केवल सामान किनेर बेच्ने हो भने ५० लाखको सीमा लागू हुन्छ। तर परामर्श, सफ्टवेयर, रेस्टुरेन्ट, वा मर्मत सेवा भएमा कडा २० लाखको सीमा लागू हुन्छ।' },
        { step: 2, title: 'पहिलो दिनमै भ्याट अनिवार्य हुने व्यवसाय जाँच्नुहोस्', desc: 'हार्डवेयर, सेनेटरी, रङ-रोगन, गाडी मर्मत, सुनचाँदी, काठ, वा मदिरा पसल खोल्दा कारोबार शून्य भए पनि पहिलो दिनमै अनिवार्य भ्याट लिनुपर्छ।' },
        { step: 3, title: 'पछिल्लो १२ महिनाको कुल बिक्री हेर्नुहोस्', desc: 'आर्थिक वर्ष मात्र होइन, पछिल्लो ३६५ दिनको कुल बिक्री जोड्नुहोस्। २० लाख (सेवा) वा ५० लाख (वस्तु) पुग्नेबित्तिकै ३० दिनभित्र भ्याटमा दर्ता हुनुहोस्।' },
        { step: 4, title: 'मासिक कर कट्टा र विवरण दाखिला', desc: 'आधिकारिक खरिद र बिक्री खाता राख्नुहोस्। हरेक महिनाको २५ गतेभित्र अनलाइन विवरण बुझाउनुहोस्: तिर्नुपर्ने खुद भ्याट = बिक्रीमा उठाएको भ्याट - खरिदमा तिरेको भ्याट।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा कानुनी भ्याट दर्ता सीमा तालिका (आव २०८१/८२)',
        headers: ['व्यवसायको प्रकृति', 'वार्षिक कारोबार सीमा', 'भ्याट दर्ता गर्नुपर्ने अवस्था', 'कर विवरण बुझाउने समय'],
        rows: [
          ['वस्तुको व्यापार मात्र (खुद पसल)', 'रु. ५०,००,००० (५० लाख)', 'पछिल्लो १२ महिनामा ५० लाख नाघ्दा', 'मासिक (अर्को महिनाको २५ गतेभित्र)'],
          ['सेवामूलक व्यवसाय (आइटी, कन्सल्टिङ)', 'रु. २०,००,००० (२० लाख)', 'पछिल्लो १२ महिनामा २० लाख नाघ्दा', 'मासिक (अर्को महिनाको २५ गतेभित्र)'],
          ['मिश्रित व्यापार (रेस्टुरेन्ट, क्याफे)', 'रु. २०,००,००० (२० लाख)', 'सेवाको २० लाख सीमा लागू हुने', 'मासिक (अर्को महिनाको २५ गतेभित्र)'],
          ['तोकिएका अनिवार्य क्षेत्र (हार्डवेयर आदि)', 'रु. ० (सुरुको दिनमै)', 'पसल खोल्नुअघि नै भ्याट अनिवार्य', 'मासिक (अर्को महिनाको २५ गतेभित्र)'],
          ['द्वैमासिक सुविधा (साना उत्पादक)', 'विशेष स्वीकृति प्राप्त भएमा', 'निश्चित उत्पादनमूलक साना उद्योग', 'प्रत्येक २ महिनामा (चौमासिक)']
        ]
      },
      nepalContext: 'नेपालमा २०५४ सालमा बिक्री करलाई विस्थापित गर्दै मूल्य अभिवृद्धि कर ऐन २०५२ लागू गरिएको थियो जसको एकल स्थिर दर १३% कायम छ। कर छली रोक्न आन्तरिक राजस्व विभागले ठूला व्यापारिक प्रतिष्ठानहरूलाई सिधै सरकारी सर्भरसँग जोड्ने सेन्ट्रल बिलिङ मोनिटरिङ सिस्टम (CBMS) लागू गरेको छ। साथै, उपभोक्ताले क्युआर वा कार्डबाट डिजिटल भुक्तानी गर्दा तिरेको भ्याटको १०% रकम सिधै उपभोक्ताको खातामा फिर्ता (Cash Rebate) हुने कानुनी व्यवस्था समेत गरिएको छ।',
      practicalScenario: {
        persona: 'राजेश, ३४, पोखराका हार्डवेयर तथा सेनेटरी पसल सञ्चालक',
        income: 'मासिक रु. १,१०,००० व्यापारिक खुद नाफा',
        scenarioText: 'राजेशले २ वर्षदेखि सामान्य प्यानमा हार्डवेयर पसल चलाइरहेका थिए जसको वार्षिक कारोबार ३८ लाख थियो। उनले सोचे: "मेरो कारोबार ५० लाख पुगेकै छैन, मलाई भ्याट चाहिँदैन।" ',
        solutionText: 'कर कार्यालयको छड्के अनुगमनमा हार्डवेयर तथा सेनेटरी व्यवसाय पहिलो दिनमै भ्याट लिनुपर्ने अनिवार्य सूचीमा रहेको थाहा पाएपछि उनलाई ठूलो जरिवानाको डर भयो। उनले तत्काल भ्याट दर्ता गरी कम्प्युटर बिलिङ सुरु गरे। सिमेन्ट र पाइप खरिद गर्दा तिरेको भ्याट कट्टी गर्न पाएपछि उनको व्यापार कानुनी रूपमा सुरक्षित भयो।',
        metricHighlight: 'अनिवार्य भ्याटमा दर्ता भई पूर्व-कारोबारमा लाग्ने २५% जरिवानाबाट जोगिए'
      },
      formula: {
        name: 'सरकारलाई बुझाउनुपर्ने खुद भ्याट सूत्र',
        equation: '\\text{Net VAT Payable} = \\text{Output VAT (Sales)} - \\text{Input VAT Credit (Purchases)}',
        variables: [
          { symbol: '\\text{Output VAT}', name: 'बिक्रीमा उठाएको १३% भ्याट', desc: 'ग्राहकलाई बिल काट्दा संकलन गरिएको कर रकम।' },
          { symbol: '\\text{Input VAT}', name: 'सामान किन्दा तिरेको १३% भ्याट', desc: 'आधिकारिक भ्याट बिल भएका सप्लायर्सलाई तिरेको कर।' }
        ],
        exampleCalculation: 'महिनाको बिक्री = रु. १०,००,००० (+ रु. १,३०,००० भ्याट उठ्यो)। महिनाको कच्चा पदार्थ खरिद = रु. ६,००,००० (+ रु. ७८,००० भ्याट तिरियो)। २५ गतेभित्र कर कार्यालयलाई बुझाउनुपर्ने खुद भ्याट = १,३०,००० - ७८,००० = रु. ५२,०००।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'भ्याट हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'सेवामूलक व्यवसायको सीमा पनि वस्तु जस्तै ५० लाख नै हुन्छ भन्ठान्नु।', correct: 'सेवा, परामर्श वा रेस्टुरेन्टको वार्षिक सीमा जम्मा २० लाख मात्र हुन्छ।', explanation: 'कन्सल्टिङ फर्म वा सफ्टवेयर कम्पनीले २० लाख नाघ्नेबित्तिकै भ्याट अनिवार्य लिनुपर्छ।' },
        { mistake: 'सामान किन्दा सप्लायरसँग भ्याट बिल नलिई कच्चा बिलमा पैसा तिर्नु।', correct: 'सधैँ आधिकारिक भ्याट बिल लिनुहोस् ताकि बिक्री गर्दा त्यो कर कट्टी (Input Credit) गर्न पाइयोस्।', explanation: 'भ्याट बिल नभएमा खरिदमा तिरेको कर दाबी गर्न पाइँदैन र पूरै १३% आफ्नै खल्तीबाट तिर्नुपर्छ।' },
        { mistake: 'कुनै महिना कारोबार शून्य भयो भनेर कर विवरण नबुझाई बस्नु।', correct: 'कारोबार नभए पनि २५ गतेभित्र अनिवार्य रूपमा अनलाइन "शून्य विवरण" (Zero Return) पेश गर्नुहोस्।', explanation: 'विवरण नबुझाएमा प्रतिमहिना १ हजार रुपैयाँ वा दैनिक ०.१% का दरले जरिवाना थपिँदै जान्छ।' }
      ],
      definitions: [
        { term: 'मूल्य अभिवृद्धि कर (VAT)', full: 'Value Added Tax', meaning: 'वस्तु तथा सेवाको उत्पादन र वितरणका प्रत्येक चरणमा थपिएको मूल्यमा लाग्ने १३% अप्रत्यक्ष उपभोग कर।' },
        { term: 'कर कट्टी (Input Tax Credit)', full: 'खरिद कर मिलान अधिकार', meaning: 'व्यापारका लागि सामान किन्दा तिरेको भ्याटलाई बिक्री गर्दा उठेको भ्याटबाट घटाउन पाउने कानुनी सुविधा।' },
        { term: 'शून्य विवरण (Zero Return)', full: 'कारोबारविहीन कर दाखिला', meaning: 'कुनै महिना बिक्री र खरिद केही नभएको अवस्थामा प्रणालीमा जरिवाना नलागोस् भनी बुझाइने शून्य रिपोर्ट।' },
        { term: 'सिबिएमएस (CBMS)', full: 'केन्द्रीय बिलिङ अनुगमन प्रणाली', meaning: 'व्यापारीको कम्प्युटर बिलिङलाई सिधै कर कार्यालयको सर्भरसँग जोडेर वास्तविक समयमा अनुगमन गर्ने सफ्टवेयर।' }
      ],
      faqs: [
        { q: 'के कारोबारको सीमा नपुग्दै स्वेच्छिक रूपमा भ्याट दर्ता गर्न पाइन्छ?', a: 'मज्जाले पाइन्छ। प्यानमा दर्ता भएको कुनै पनि व्यवसायले ठूला कर्पोरेट ग्राहकसँग काम गर्न र खरिदमा तिरेको भ्याट कट्टी गर्न पहिलो दिनमै स्वेच्छिक भ्याट दर्ता गर्न सक्छ।' },
        { q: 'समयमै मासिक भ्याट विवरण नबुझाउँदा कति जरिवाना लाग्छ?', a: 'मूल्य अभिवृद्धि कर ऐन अनुसार म्याद नाघेको प्रत्येक महिना रु. १,००० वा कुल बिक्रीको दैनिक ०.१% (जुन बढी हुन्छ) जरिवाना र बाँकी करमा वार्षिक १५% ब्याज लाग्छ।' },
        { q: 'के नेपालबाट विदेशमा सफ्टवेयर निर्यात गर्दा १३% भ्याट जोड्नुपर्छ?', a: 'पर्दैन। परिवर्त्य विदेशी मुद्रामा नेपाल बाहिर सेवा वा सफ्टवेयर निर्यात गर्दा शून्य दर (0% VAT) लागू हुन्छ र कार्यालयको सामानमा तिरेको भ्याट फिर्ता माग्न पाइन्छ।' }
      ],
      takeaways: [
        'वस्तुको व्यापारमा वार्षिक ५० लाख र सेवामूलक व्यापारमा २० लाख नाघ्दा भ्याट दर्ता अनिवार्य हुन्छ।',
        'हार्डवेयर, सेनेटरी, मदिरा र गाडीका पार्टपुर्जा पसलले पहिलो दिनमै भ्याट दर्ता गर्नुपर्छ।',
        'भ्याट बिल लिएर सामान किन्दा तिरेको कर बिक्रीको करबाट सोझै कट्टा गर्न पाइन्छ।',
        'हरेक महिनाको २५ गतेभित्र आन्तरिक राजस्वको पोर्टलमा अनिवार्य भ्याट विवरण बुझाउनुहोस्।',
        'बिक्री नभएको महिनामा पनि जरिवानाबाट जोगिन "शून्य विवरण" बुझाउन कहिल्यै नबिर्सनुहोस्।'
      ]
    }
  },

  // ── J4. VENDOR TDS & WITHHOLDING TAX AUDIT ────────────────────────
  'vendor-tds-withholding-audit-nepal': {
    id: 'biz-vendor-tds-audit',
    slug: 'vendor-tds-withholding-audit-nepal',
    categorySlug: 'business',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Nepal Income Tax Act 2058 TDS Withholding Provisions FY 2081/82', np: 'आयकर ऐन २०५८ को स्रोतमा कर कट्टी (TDS) व्यवस्था अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of commercial invoicing and tax deductions', np: 'व्यापारिक बिलिङ र अग्रिम कर कट्टीको सामान्य ज्ञान' },
    en: {
      title: 'Vendor TDS & Withholding Tax Audit in Nepal: Avoid Fatal IRD Penalties',
      oneLineSummary: 'Master the exact TDS withholding rates (10% rent, 15% consulting, 1.5% goods) and e-TDS reconciliation by the 25th of each month.',
      summaryPoints: [
        'Under Section 87, 88, and 89 of Nepal\'s Income Tax Act 2058, businesses paying vendors must deduct tax at source (TDS) before disbursing payment.',
        'House rent paid by a business is subject to a 10% rental tax (deducted and paid to the local municipality or IRD).',
        'Professional consulting and freelance services attract 15% TDS on non-VAT invoices, or 1.5% withholding on VAT invoices.',
        'Procurement of goods exceeding NPR 50,000 under contract carries a mandatory 1.5% TDS deduction.',
        'TDS deducted must be deposited into the government treasury and reconciled via the IRD e-TDS portal by the 25th of the following Nepali month.'
      ],
      whatIsThis: 'Vendor Tax Deduction at Source (TDS - स्रोतमा कर कट्टी) is a statutory withholding mechanism where a payer (company or firm) is legally mandated to deduct a specific percentage of tax from a vendor\'s payment and deposit it directly into the state revenue account on behalf of the payee.',
      whyItMatters: 'During annual tax assessments, the IRD audits your vendor expenses. If you paid NPR 10,00,000 to an IT consultant or landlord and failed to deduct TDS, the tax officer will: (1) Disallow the entire NPR 10 Lakh expense, artificially inflating your corporate profit, (2) Demand the un-deducted TDS from YOUR pocket, and (3) Impose a 15% annual compounding interest penalty plus statutory non-compliance fines.',
      howItWorks: [
        { step: 1, title: 'Verify the Vendor\'s Invoice & Tax Status', desc: 'Inspect whether the vendor submitted a VAT tax invoice or a non-VAT PAN invoice. VAT invoices for service/goods typically carry a 1.5% withholding, while non-VAT service invoices trigger 15% TDS.' },
        { step: 2, title: 'Apply the Statutory Withholding Rate', desc: 'Deduct the exact legal rate: 10% on office rent, 15% on technical/consulting fees (PAN), 1.5% on contract supplies (>NPR 50K), and 15% on website hosting/software royalties.' },
        { step: 3, title: 'Deposit Withheld Taxes by the 25th', desc: 'Generate an online revenue voucher on the IRD portal and deposit the withheld tax into the designated government bank account by the 25th of the subsequent Nepali month.' },
        { step: 4, title: 'Upload e-TDS & Issue Tax Withholding Certificates', desc: 'Log into the IRD e-TDS module, input the vendor\'s PAN, enter the gross invoice amount and tax deposited, and generate the official digital TDS verification receipt for the vendor.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Common Vendor TDS Rates in Nepal under Income Tax Act 2058 (FY 2081/82)',
        headers: ['Payment Category', 'Statutory Provision', 'Withholding TDS Rate', 'Payee Tax Credit Status'],
        rows: [
          ['Office / Commercial House Rent', 'Section 88 / Local Act', '10.0% Flat', 'Final withholding in most municipalities'],
          ['Consulting Services (Non-VAT PAN)', 'Section 88(1)', '15.0% Flat', 'Advance tax (Vendor claims against annual tax)'],
          ['Services with VAT Invoice', 'Section 88 / Directives', '1.5% Withholding', 'Advance tax on taxable service amount'],
          ['Goods Supply Contract (> NPR 50K)', 'Section 89', '1.5% Flat', 'Advance tax on gross procurement'],
          ['Transport & Freight Services (without VAT)', 'Section 88', '2.5% Flat', 'Advance tax for vehicle hiring'],
          ['Software Royalty & Overseas Cloud', 'Section 88 / Cross-border', '15.0% Flat', 'Statutory withholding on foreign remittances']
        ]
      },
      nepalContext: 'In Nepal, e-TDS has eliminated paper tax deduction certificates. When a business reconciles its monthly withholding on ird.gov.np, the tax credit is instantly populated into the vendor\'s personal PAN portal. Recent IRD directives have tightened enforcement on office house rent: municipalities (like Kathmandu Metropolitan City and Lalitpur) now enforce local collection of the 10% rental tax directly under the Local Government Operation Act 2074.',
      practicalScenario: {
        persona: 'Srijana, 36, finance manager at a design agency in Sanepa',
        income: 'NPR 80,000 / month salary',
        scenarioText: 'Srijana\'s agency hired an independent brand consultant for NPR 2,00,000. The consultant asked to be paid in full: "Just transfer 2 Lakh to my eSewa, I will pay tax myself at year-end."',
        solutionText: 'Srijana knew that paying gross would leave her agency liable for 15% unpaid TDS. She deducted 15% TDS (NPR 30,000), paid the consultant NPR 1,70,000, and deposited the NPR 30,000 to the IRD on the 22nd of the month via e-TDS. The consultant received an official IRD tax credit receipt in his PAN, and the agency safely claimed the full NPR 2 Lakh as an allowable business deduction.',
        metricHighlight: 'Safeguarded a NPR 2 Lakh corporate tax expense deduction'
      },
      formula: {
        name: 'Net Vendor Payment Calculation Formula',
        equation: '\\text{Net Vendor Payment} = \\text{Gross Invoice Amount} - (\\text{Gross Invoice Amount} \\times \\text{TDS Rate})',
        variables: [
          { symbol: '\\text{Gross Invoice Amount}', name: 'Contract Bill Value', desc: 'Pre-TDS total invoiced by vendor.' },
          { symbol: '\\text{TDS Rate}', name: 'Statutory Withholding %', desc: '10% for rent, 15% for non-VAT consulting, 1.5% for VAT services.' }
        ],
        exampleCalculation: 'Consulting bill = NPR 1,00,000 (Non-VAT PAN). TDS = 15% × 1,00,000 = NPR 15,000. Net payment to consultant = NPR 85,000. Exactly NPR 15,000 must be deposited to IRD revenue account by the 25th of the following Nepali month!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Calculate TDS Withholding'
      },
      commonMistakes: [
        { mistake: 'Paying office rent without deducting 10% rental tax because the landlord demanded "cash in hand".', correct: 'Always formalize lease agreements and withhold 10% rent tax; otherwise, you pay it out of company profit.', explanation: 'The IRD will disallow your entire annual rent expense if rent TDS is not deposited with the local government.' },
        { mistake: 'Depositing TDS at the bank but forgetting to reconcile the entries in the online e-TDS portal.', correct: 'Always complete the e-TDS entry linking the payment voucher to the vendor\'s PAN number.', explanation: 'Without online e-TDS reconciliation, the vendor receives zero tax credit, leading to audit rejections.' },
        { mistake: 'Treating 15% service TDS as a final tax for individual professionals.', correct: '15% service TDS is an advance tax; the consultant must report it on their annual D-01/D-03 return.', explanation: 'If the consultant falls in a higher 36% tax bracket, they must pay the remaining differential income tax.' }
      ],
      definitions: [
        { term: 'TDS (Withholding Tax)', full: 'स्रोतमा कर कट्टी', meaning: 'Tax deducted by the payer at the time of making specified payments and remitted directly to the government.' },
        { term: 'e-TDS', full: 'विद्युतीय स्रोतमा कर कट्टी प्रणाली', meaning: 'The IRD\'s online portal system for recording and reconciling tax deducted from individual vendor PANs.' },
        { term: 'Advance Tax', full: 'अग्रिम कर', meaning: 'TDS that is not final, serving as an advance installment against the taxpayer\'s ultimate annual tax liability.' },
        { term: 'Expense Disallowance', full: 'खर्च अस्वीकृत', meaning: 'An audit action where tax authorities reject a business expense, increasing taxable profit and taxes due.' }
      ],
      faqs: [
        { q: 'What happens if a company deposits vendor TDS after the 25th of the month?', a: 'Delayed TDS deposits incur a statutory interest penalty of 15% per annum on the unpaid tax amount, calculated on a daily pro-rata basis under Section 117/118 of the Income Tax Act.' },
        { q: 'Does a company need to deduct TDS when buying stationery under NPR 50,000?', a: 'No. Retail purchase of goods under NPR 50,000 in a single transaction from a VAT-registered seller does not require withholding under Section 89.' },
        { q: 'Where do we pay House Rent TDS: to the local Ward Office or the IRD?', a: 'Under the Local Government Operation Act 2074, individual residential/commercial house rent tax is collected by the local municipal ward (10%). However, rent paid to corporate entities is deposited via IRD.' }
      ],
      takeaways: [
        'Deduct statutory TDS on all vendor payments: 10% rent, 15% non-VAT consulting, 1.5% goods.',
        'Failing to deduct TDS causes the IRD to disallow your business expenses and fine you 15% interest.',
        'Deposit all withheld taxes and complete online e-TDS reconciliation by the 25th of every Nepali month.',
        'Ensure the vendor\'s PAN is accurately entered so they receive credit in their tax portal.',
        'House rent paid to individual landlords must be deposited with the local municipal ward.'
      ]
    },
    np: {
      title: 'नेपालमा भेन्डर TDS र अग्रिम कर कट्टी: कर कार्यालयको अडिट र जरिवानाबाट बच्ने उपाय',
      oneLineSummary: 'घरभाडामा १०%, परामर्शमा १५%, र सामानमा १.५% TDS कट्टा गरी हरेक महिनाको २५ गतेभित्र e-TDS दाखिला गर्ने सम्पूर्ण नियम।',
      summaryPoints: [
        'आयकर ऐन २०५८ को दफा ८७, ८८ र ८९ अनुसार कुनै पनि व्यवसायले सामान वा सेवा खरिद गर्दा भुक्तानी गर्नुअघि स्रोतमा कर (TDS) कट्टा गर्नैपर्छ।',
        'कम्पनीले तिर्ने कार्यालयको घरभाडामा १०% घरबहाल कर कट्टा गरी स्थानीय वडा वा कर कार्यालयमा बुझाउनुपर्छ।',
        'भ्याट बिल नभएका परामर्श वा फ्रिलान्सर सेवामा १५% र भ्याट बिल भएका सेवामा १.५% TDS कट्टा गर्नुपर्छ।',
        '५० हजार रुपैयाँभन्दा माथिका ठेक्का वा सामान खरिद सम्झौतामा १.५% अग्रिम कर कट्टा अनिवार्य हुन्छ।',
        'कट्टा गरिएको TDS रकम अर्को महिनाको २५ गतेभित्र सरकारी राजस्व खातामा जम्मा गरी अनलाइन e-TDS प्रविष्ट गर्नुपर्छ।'
      ],
      whatIsThis: 'स्रोतमा कर कट्टी (TDS - Tax Deduction at Source) भनेको कुनै पनि कम्पनी वा फर्मले कुनै व्यक्ति वा भेन्डरलाई भुक्तानी गर्दा कानुनले तोकेको निश्चित प्रतिशत कर रकम सुरुमै काटेर सम्बन्धित व्यक्तिको नाममा सिधै सरकारी खातामा दाखिला गरिदिने कानुनी प्रणाली हो।',
      whyItMatters: 'वार्षिक लेखापरीक्षण र कर कार्यालयको अडिटमा सबैभन्दा बढी जरिवाना TDS नमिलेकै कारण लाग्छ। यदि तपाईंले घरबेटीलाई वा सफ्टवेयर बनाउनेलाई १० लाख रुपैयाँ पूरै दिनुभयो र TDS काट्नुभएन भने कर अधिकृतले: (१) त्यो १० लाख खर्चलाई अमान्य (Disallow) गरिदिन्छ जसले कम्पनीको नाफा र कर बढ्छ, (२) नकाटेको TDS कम्पनीकै खल्तीबाट असुल्छ, र (३) त्यसमा वार्षिक १५% ब्याज र जरिवाना थोपर्छ।',
      howItWorks: [
        { step: 1, title: 'भेन्डरको बिल र कर प्रकृति जाँच्नुहोस्', desc: 'भेन्डरले भ्याट बिल दिएको छ कि सामान्य प्यान बिल दिएको छ हेर्नुहोस्। भ्याट बिल भएका सेवामा १.५% र भ्याट नभएका प्यान परामर्श सेवामा १५% TDS लाग्छ।' },
        { step: 2, title: 'तोकिएको कानुनी दर अनुसार TDS कट्टा गर्नुहोस्', desc: 'घरभाडामा १०%, व्यक्तिगत परामर्श सेवामा १५%, र ५० हजारभन्दा माथिको सामान खरिदमा १.५% रकम काटेर बाँकी खुद रकम मात्र भेन्डरलाई भुक्तानी गर्नुहोस्।' },
        { step: 3, title: '२५ गतेभित्र सरकारी राजस्व खातामा दाखिला', desc: 'आन्तरिक राजस्व विभागको पोर्टलमा भौचर सिर्जना गरी अर्को महिनाको २५ गतेभित्र कट्टा गरिएको कर रकम बैंकमार्फत सरकारी ढुकुटीमा जम्मा गर्नुहोस्।' },
        { step: 4, title: 'अनलाइन e-TDS प्रविष्टि र प्रमाणपत्र जारी', desc: 'ird.gov.np को e-TDS मोड्युलमा गएर भेन्डरको प्यान नम्बर, बिल रकम र दाखिला भएको भौचर प्रविष्ट गर्नुहोस् जसले गर्दा भेन्डरले आफ्नो खातामा कर कट्टीको प्रमाण पाउँछ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालको आयकर ऐन २०५८ अनुसार प्रमुख भुक्तानीहरूमा लाग्ने TDS दरहरू (आव २०८१/८२)',
        headers: ['भुक्तानीको शीर्षक', 'सम्बन्धित कानुनी दफा', 'लाग्ने TDS दर (%)', 'भेन्डरका लागि करको प्रकृति'],
        rows: [
          ['कार्यालय / व्यावसायिक घरभाडा', 'दफा ८८ / स्थानीय सरकार ऐन', '१०.०% स्थिर दर', 'अधिकांश स्थानीय तहमा अन्तिम कर'],
          ['परामर्श सेवा (भ्याट नभएको प्यान बिल)', 'दफा ८८(१)', '१५.०% स्थिर दर', 'अग्रिम कर (वार्षिक करमा मिलान हुने)'],
          ['भ्याट बिलसहितको सेवा भुक्तानी', 'दफा ८८ / निर्देशिका', '१.५% कट्टा', 'करयोग्य रकममा अग्रिम कर'],
          ['सामान आपूर्ति ठेक्का (> ५० हजार)', 'दफा ८९', '१.५% स्थिर दर', 'कुल खरिद रकममा अग्रिम कर'],
          ['ढुवानी तथा गाडी भाडा (भ्याट बिना)', 'दफा ८८', '२.५% स्थिर दर', 'सवारी साधन भाडामा अग्रिम कर'],
          ['सफ्टवेयर रोयल्टी तथा विदेशी क्लाउड', 'दफा ८८ / सीमापार भुक्तानी', '१५.०% स्थिर दर', 'विदेशी मुद्रा पठाउँदा अनिवार्य कट्टा']
        ]
      },
      nepalContext: 'नेपालमा e-TDS प्रणाली लागू भएपछि कागजी कर कट्टी प्रमाणपत्रको झन्झट हटेको छ। कम्पनीले अनलाइनबाट e-TDS प्रविष्टि गर्नासाथ भेन्डरको व्यक्तिगत प्यान पोर्टलमा कर दाखिला भएको विवरण तुरुन्तै देखिन्छ। घरभाडाको हकमा काठमाडौँ, ललितपुर लगायतका पालिकाहरूले स्थानीय सरकार सञ्चालन ऐन २०७४ अनुसार १०% बहाल कर स्थानीय वडा कार्यालयमै बुझाउनुपर्ने कडा नियम लागू गरेका छन्।',
      practicalScenario: {
        persona: 'सृजना, ३६, सानेपास्थित विज्ञापन एजेन्सीकी फाइनान्स म्यानेजर',
        income: 'मासिक तलब रु. ८०,०००',
        scenarioText: 'सृजनाको एजेन्सीले एक ब्रान्डिङ विज्ञलाई रु. २,००,००० मा काम दियो। ती विज्ञले भने: "मलाई पूरै २ लाख चाहिन्छ, मेरो कर म वर्षको अन्त्यमा आफैं तिर्छु।" ',
        solutionText: 'सृजनालाई थाहा थियो कि TDS नकाटी पूरै पैसा दिँदा कम्पनी अडिटमा फस्छ। उनले १५% TDS (रु. ३०,०००) काटेर रु. १,७०,००० मात्र भुक्तानी गरिन् र बाँकी ३० हजार २५ गतेभित्र e-TDS मार्फत कर कार्यालयमा बुझाइन्। विज्ञले आफ्नो प्यानमा ३० हजार कर दाखिला भएको आधिकारिक प्रमाण पाए र एजेन्सीले पूरै २ लाख खर्च दाबी गर्न पायो।',
        metricHighlight: '२ लाख रुपैयाँको व्यावसायिक खर्च सुरक्षित दाबी गर्न सफल'
      },
      formula: {
        name: 'भेन्डरलाई भुक्तानी गरिने खुद रकम सूत्र',
        equation: '\\text{Net Vendor Payment} = \\text{Gross Invoice Amount} - (\\text{Gross Invoice Amount} \\times \\text{TDS Rate})',
        variables: [
          { symbol: '\\text{Gross Invoice Amount}', name: 'कुल बिल रकम', desc: 'भेन्डरले पेश गरेको कुल रकम (भ्याट बाहेक)।' },
          { symbol: '\\text{TDS Rate}', name: 'कानुनी कर कट्टी प्रतिशत', desc: 'भाडामा १०%, प्यान परामर्शमा १५%, भ्याट सेवामा १.५%।' }
        ],
        exampleCalculation: 'परामर्श बिल = रु. १,००,००० (प्यान बिल)। TDS = १५% × १,००,००० = रु. १५,०००। भेन्डरलाई दिइने खुद रकम = रु. ८५,०००। बाँकी रु. १५,००० अर्को महिनाको २५ गतेभित्र सरकारी राजस्व खातामा दाखिला गर्नुपर्छ!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'स्रोतमा कर कट्टी (TDS) हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'घरबेटीले हातमा नगद मागेको बहानामा १०% घरभाडा कर नकाटी पूरै पैसा दिनु।', correct: 'सम्झौतामै १०% बहाल कर कटाएर दिने सर्त राख्नुहोस्; अन्यथा त्यो कर कम्पनीले आफ्नै खल्तीबाट तिर्नुपर्छ।', explanation: 'बहाल कर दाखिला नभएमा कर कार्यालयले वर्षभरिको पूरै घरभाडा खर्च अस्वीकृत गरिदिन्छ।' },
        { mistake: 'बैंकमा TDS राजस्व जम्मा गरे पनि अनलाइन e-TDS पोर्टलमा भेन्डरको प्यान प्रविष्ट गर्न बिर्सनु।', correct: 'राजस्व तिरेपछि अनिवार्य रूपमा e-TDS मा गएर भेन्डरको प्यान नम्बरसँग भौचर रुजु गर्नुहोस्।', explanation: 'e-TDS प्रविष्टि नगरेसम्म भेन्डरको प्यानमा कर दाखिला देखिँदैन र अडिटमा समस्या आउँछ।' },
        { mistake: 'परामर्श सेवामा काटिएको १५% TDS लाई अन्तिम कर सम्झनु।', correct: 'व्यक्तिगत परामर्शको १५% TDS अग्रिम कर मात्र हो; विज्ञले वर्षको अन्त्यमा कुल आम्दानी जोडेर कर विवरण बुझाउनुपर्छ।', explanation: 'यदि ती व्यक्तिको कुल कमाइ उच्च स्ल्याब (३६%) मा पर्छ भने उनले बाँकी कर थप बुझाउनुपर्छ।' }
      ],
      definitions: [
        { term: 'स्रोतमा कर कट्टी (TDS)', full: 'Tax Deduction at Source', meaning: 'भुक्तानी गर्ने संस्थाले कानुन बमोजिम अग्रिम रूपमा कर काटेर राज्यकोषमा जम्मा गरिदिने प्रक्रिया।' },
        { term: 'ई-टिडीएस (e-TDS)', full: 'विद्युतीय कर कट्टी प्रणाली', meaning: 'आन्तरिक राजस्व विभागको अनलाइन सफ्टवेयर जहाँ कट्टा गरिएको कर भेन्डरको प्यान नम्बरमा चढाउने काम हुन्छ।' },
        { term: 'अग्रिम कर (Advance Tax)', full: 'पेस्की कर', meaning: 'अन्तिम नभई वर्षको अन्त्यमा लाग्ने कुल आयकरमा मिलान गर्न पाइने गरी सुरुमै तिरिएको कर।' },
        { term: 'खर्च अस्वीकृत (Expense Disallowance)', full: 'कर प्रयोजनमा अमान्य खर्च', meaning: 'TDS वा प्यान बिल नपुगेका कारण कर अधिकृतले व्यापारिक खर्च नमान्दा कम्पनीको कर दायित्व बढ्ने अवस्था।' }
      ],
      faqs: [
        { q: 'यदि कम्पनीले महिनाको २५ गतेभित्र TDS रकम जम्मा गरेन भने के हुन्छ?', a: 'आयकर ऐनको दफा ११७ र ११८ अनुसार म्याद नाघेपछि दैनिक हिसाबले बाँकी कर रकममा वार्षिक १५% का दरले ब्याज र थप जरिवाना लाग्छ।' },
        { q: 'के पसलबाट ५० हजारभन्दा कमको स्टेसनरी किन्दा पनि १.५% TDS काट्नुपर्छ?', a: 'पर्दैन। भ्याटमा दर्ता भएको पसलबाट एकपटकमा ५० हजार रुपैयाँभन्दा कमको सामान खरिद गर्दा TDS काट्नु पर्दैन।' },
        { q: 'घरभाडाको १०% कर वडा कार्यालयमा बुझाउने कि आन्तरिक राजस्व कार्यालयमा?', a: 'व्यक्तिगत घरबेटीलाई भाडा तिर्दा स्थानीय सरकार सञ्चालन ऐन २०७४ अनुसार स्थानीय वडा कार्यालयमै १०% बहाल कर बुझाउनुपर्छ। तर संस्था वा कम्पनीलाई भाडा तिर्दा भने IRD मार्फत बुझाउनुपर्छ।' }
      ],
      takeaways: [
        'सबै भेन्डर भुक्तानीमा तोकिएको TDS काट्नुहोस्: भाडामा १०%, प्यान परामर्शमा १५%, सामानमा १.५%।',
        'TDS नकाटेमा कर कार्यालयले खर्च अस्वीकृत गरिदिन्छ र १५% ब्याजसहित कम्पनीसँगै असुल गर्छ।',
        'कट्टा गरिएको कर हरेक महिनाको २५ गतेभित्र सरकारी खातामा जम्मा गरी e-TDS प्रविष्टि गर्नुहोस्।',
        'भेन्डरको प्यान नम्बर सही हाल्नुहोस् ताकि उसले आफ्नो कर पोर्टलमा कर कट्टीको प्रमाण पाओस्।',
        'व्यक्तिगत घरबेटीको १०% बहाल कर स्थानीय पालिका वा वडा कार्यालयमा समयमै बुझाउनुहोस्।'
      ]
    }
  },

  // ── J5. ANNUAL ROC FILING & AGM MINUTES AT OCR ───────────────────
  'annual-roc-filing-agm-minutes-nepal': {
    id: 'biz-annual-roc-agm-filing',
    slug: 'annual-roc-filing-agm-minutes-nepal',
    categorySlug: 'business',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Companies Act 2063 Annual Compliance Sections (51, 76, 80, 111)', np: 'कम्पनी ऐन २०६३ का वार्षिक अनुपालन सम्बन्धी दफाहरू (५१, ७६, ८०, १११) अनुसार समीक्षित' },
    prerequisites: { en: 'Basic knowledge of company management and financial year', np: 'कम्पनी व्यवस्थापन र आर्थिक वर्षको सामान्य ज्ञान' },
    en: {
      title: 'Annual ROC Filing & AGM Minutes in Nepal: The Legal Compliance Checklist',
      oneLineSummary: 'Avoid compounding OCR fines by mastering the 4 mandatory annual filings: Section 51, 76, 80, and 111.',
      summaryPoints: [
        'Every incorporated Private Limited company must complete annual statutory filings with the Office of Company Registrar (OCR).',
        'Section 76 & 111 mandate holding an Annual General Meeting (AGM - वार्षिक साधारण सभा) and formally appointing an Auditor.',
        'Section 80 requires submitting audited balance sheets and financial statements within 6 months of fiscal year-end (by Poush end).',
        'Section 51 mandates filing the updated Share Register (शेयर लगत) reflecting any share transfers, additions, or director updates.',
        'Ignoring ROC compliances causes severe compounding fines (ढिलाइ दस्तुर) reaching tens of thousands of rupees, paralyzing bank loans and company sales.'
      ],
      whatIsThis: 'Annual ROC Filing is the mandatory legal obligation under Nepal\'s Companies Act 2063 requiring all registered companies to submit their audited financial accounts, annual general meeting minutes, auditor appointment details, and updated shareholder registers to the Office of Company Registrar (OCR) within 6 months of the close of each fiscal year.',
      whyItMatters: 'Hundreds of startup founders in Nepal abandon their paperwork after getting their company registered, thinking "we had zero sales, so we don\'t need to file anything." Years later, when they attempt to secure an SME bank loan, bring in an investor, or close the company, the OCR slaps them with accumulated fines of NPR 50,000 to NPR 2,00,000! Filing on time costs almost nothing and keeps your company in good corporate standing.',
      howItWorks: [
        { step: 1, title: 'Appoint a Certified Auditor & Close Accounts', desc: 'Engage a registered Chartered Accountant (CA) or Registered Auditor (RA) to audit your balance sheet and profit & loss statement after fiscal year-end (Ashad end).' },
        { step: 2, title: 'Convene Annual General Meeting (AGM) by Poush End', desc: 'Hold the AGM within 6 months of fiscal year-end (before Poush end). Approve audited financials, approve director reports, and formally appoint the auditor for the upcoming fiscal year under Section 111.' },
        { step: 3, title: 'Upload Statutory Filings to ocr.gov.np', desc: 'Log into your company profile on the OCR portal: (1) Section 51 (Share Ledger), (2) Section 80 (Audited Financials), and (3) Section 76/111 (AGM Minutes & Auditor Appointment).' },
        { step: 4, title: 'Download the Updated OCR Approval Slip', desc: 'Once the OCR officer verifies your documents, download your updated Corporate Good Standing approval slip, required by commercial banks and government tenders.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Mandatory Annual Filings under Nepal Companies Act 2063',
        headers: ['Companies Act Section', 'Statutory Filing Document', 'Statutory Deadline', 'Consequence of Delay'],
        rows: [
          ['Section 51', 'Updated Shareholder Ledger (शेयर लगत)', 'Within 30 days of AGM', 'Daily compounding fine under Section 81'],
          ['Section 76 & 111', 'AGM Minutes & Auditor Appointment', 'Within 6 months of FY end (Poush end)', 'Heavy delay fine + Auditor invalidation'],
          ['Section 80', 'Audited Balance Sheet & P&L Statement', 'Within 6 months of FY end (Poush end)', 'Company listed as non-compliant on OCR portal'],
          ['IRD Income Tax D-03', 'Annual Corporate Tax Return Filing', 'Within 3-6 months of FY end', '0.1% daily fine + Loss of Tax Clearance']
        ]
      },
      nepalContext: 'Under Companies Act 2063 Section 81, Nepal imposes strict cascading late fees (विलम्ब शुल्क). The fine starts at NPR 1,000 to 2,000 for the first month of delay and scales progressively up to NPR 10,000 to 20,000 per year based on authorized capital. Companies that fail to file for 3 consecutive years have their corporate bank accounts frozen by NRB directives, preventing directors from withdrawing funds or obtaining personal credit.',
      practicalScenario: {
        persona: 'Madhav, 41, manufacturing company director in Birgunj',
        income: 'NPR 1,75,000 / month salary & profits',
        scenarioText: 'Madhav forgot to submit OCR annual filings for his Pvt. Ltd. company for 3 years because his accountant resigned. When he applied for a working capital credit line at a commercial bank, the bank rejected him: "Your company has a non-compliant black-mark at the OCR."',
        solutionText: 'Madhav immediately hired an audit firm to compile back-dated audits for all 3 years, held a combined AGM, and uploaded the missing Section 51, 80, and 111 documents on ocr.gov.np. He paid NPR 32,000 in accumulated OCR late penalties. Once updated, his company returned to "Active Good Standing", and the bank disbursed his NPR 40 Lakh credit line.',
        metricHighlight: 'Cleared 3 years of backlog fines to unlock an NPR 40 Lakh bank facility'
      },
      formula: {
        name: 'OCR Compounding Delay Fine Formula (Section 81)',
        equation: '\\text{Total Delay Fine} = \\text{Base Statutory Penalty} + \\sum_{y=1}^{N} \\text{Annual Escalation Fee}(C_{\\text{auth}})',
        variables: [
          { symbol: 'C_{\\text{auth}}', name: 'Authorized Capital Bracket', desc: 'Penalties scale higher for companies with capital > NPR 10 Lakh, 50 Lakh, etc.' },
          { symbol: 'N', name: 'Years of Non-Compliance', desc: 'Number of overdue fiscal filing cycles.' }
        ],
        exampleCalculation: 'For a company with NPR 25 Lakh authorized capital overdue by 2 years: Base fine per year = NPR 5,000 to 10,000. Total accumulated fine = NPR 15,000-25,000. Filing on time costs NPR 0 in fines!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Corporate Due Dates'
      },
      commonMistakes: [
        { mistake: 'Assuming that submitting tax returns at IRD automatically fulfills OCR filing requirements.', correct: 'IRD (Tax) and OCR (Company Registrar) are separate entities; you must file separately with both.', explanation: 'Submitting tax returns at the IRD does not update your legal status at the Office of Company Registrar.' },
        { mistake: 'Holding the AGM after Poush without formal extension approval.', correct: 'Hold your AGM and submit audited reports before Poush end (mid-January).', explanation: 'Section 76 strictly mandates an AGM within 6 months of fiscal year close.' },
        { mistake: 'Appointing an auditor without recording the appointment in AGM minutes and Section 111.', correct: 'Ensure the auditor appointment letter is formally filed with the OCR within 15 days of AGM.', explanation: 'Unregistered auditor appointments render the financial audit legally null and void under company law.' }
      ],
      definitions: [
        { term: 'AGM (Annual General Meeting)', full: 'वार्षिक साधारण सभा', meaning: 'The mandatory annual meeting of shareholders to review company performance, approve accounts, and elect leadership.' },
        { term: 'Section 80 Filing', full: 'दफा ८० को विवरण', meaning: 'The statutory submission of audited balance sheets and auditor reports to the Office of Company Registrar.' },
        { term: 'Section 51 Filing', full: 'दफा ५१ को शेयर लगत', meaning: 'The annual filing disclosing the updated list of shareholders and their respective shareholdings.' },
        { term: 'Active Good Standing', full: 'सक्रिय कानुनी हैसियत', meaning: 'The status of a corporation that has fully complied with all annual filing duties and holds no overdue regulatory fines.' }
      ],
      faqs: [
        { q: 'Can I file OCR annual returns online myself without a lawyer?', a: 'Yes. Any company director or administrator can log into ocr.gov.np, upload the signed audit PDF, fill out the web forms for Sections 51, 80, and 111, and pay filing fees via connectIPS.' },
        { q: 'What is the absolute deadline for annual OCR filings in Nepal?', a: 'Under the Companies Act, audited financial reports must be submitted within 6 months of fiscal year close - typically by the end of Poush (mid-January).' },
        { q: 'What happens if a company does not file returns for more than 5 years?', a: 'The OCR has the legal power under Section 136 to initiate strike-off procedures (कम्पनी खारेजी), freezing director assets and barring directors from registering new companies in Nepal.' }
      ],
      takeaways: [
        'Every Pvt. Ltd. company must file annual returns with the OCR, even with zero revenue.',
        'Hold your AGM and submit Section 80 audited accounts before Poush end (mid-January).',
        'Filing tax at the IRD does NOT update the OCR - both filings must be done separately.',
        'File Section 51 (Share Register) and Section 111 (Auditor Appointment) alongside accounts.',
        'Late filings trigger compounding fines that can freeze corporate bank accounts.'
      ]
    },
    np: {
      title: 'नेपालमा कम्पनीको वार्षिक विवरण (ROC) र साधारण सभा (AGM): कानुनी अनुपालन चेकलिस्ट',
      oneLineSummary: 'कम्पनी रजिष्ट्रार कार्यालयको चर्को जरिवानाबाट जोगिन दफा ५१, ७६, ८० र १११ का अनिवार्य वार्षिक विवरण बुझाउने तरिका।',
      summaryPoints: [
        'नेपालमा दर्ता भएको प्रत्येक प्राइभेट लिमिटेड कम्पनीले आर्थिक वर्ष सकिएपछि अनिवार्य रूपमा कम्पनी रजिष्ट्रारको कार्यालय (OCR) मा विवरण बुझाउनुपर्छ।',
        'दफा ७६ र १११ अनुसार आर्थिक वर्ष सकिएको ६ महिनाभित्र (पुस मसान्तभित्र) वार्षिक साधारण सभा (AGM) गरी लेखापरीक्षक नियुक्त गर्नुपर्छ।',
        'दफा ८० अनुसार दर्तावाला अडिटरबाट प्रमाणित लेखापरीक्षण प्रतिवेदन (ब्यालेन्स सिट) पुस मसान्तभित्र रजिष्ट्रारमा पेश गर्नुपर्छ।',
        'दफा ५१ अनुसार कम्पनीको अद्यावधिक सेयर लगत र सेयरधनीको विवरण बुझाउनु अनिवार्य छ।',
        'विवरण नबुझाउँदा दैनिक रूपमा हजारौँ रुपैयाँ जरिवाना (ढिलाइ दस्तुर) थपिन्छ र बैंक खाता रोक्का हुन सक्छ।'
      ],
      whatIsThis: 'वार्षिक विवरण (Annual ROC Filing) भनेको कम्पनी ऐन २०६३ अन्तर्गत दर्ता भएका सबै कम्पनीहरूले आर्थिक वर्ष सकिएको ६ महिनाभित्र आफ्नो अडिट रिपोर्ट, साधारण सभाको निर्णय, लेखापरीक्षक नियुक्ति, र सेयरधनीको अद्यावधिक लगत कम्पनी रजिष्ट्रारको कार्यालय (ocr.gov.np) मा दर्ता गर्ने कानुनी प्रक्रिया हो।',
      whyItMatters: 'नेपालमा धेरै नयाँ उद्यमीहरू कम्पनी दर्ता गरेपछि "व्यापार नै भएको छैन, के विवरण बुझाउनु पर्यो र" भन्दै चुपचाप बस्छन्। ३-४ वर्षपछि जब बैंकबाट व्यवसाय ऋण लिन वा नयाँ लगानीकर्ता भित्र्याउन खोज्छन्, कम्पनी रजिष्ट्रार कार्यालयमा ५० हजारदेखि २ लाख रुपैयाँसम्म जरिवाना पुगिसकेको हुन्छ! समयमै विवरण बुझाउँदा शून्य जरिवानामा कम्पनी सधैँ कानुनी रूपमा सक्रिय रहन्छ।',
      howItWorks: [
        { step: 1, title: 'अडिटर नियुक्त गरी लेखापरीक्षण सम्पन्न गर्नुहोस्', desc: 'आर्थिक वर्ष (असार मसान्त) सकिएपछि दर्तावाला चार्टर्ड एकाउन्टेन्ट (CA) वा अडिटर (RA) बाट कम्पनीको ब्यालेन्स सिट र नाफा-नोक्सान हिसाब अडिट गराउनुहोस्।' },
        { step: 2, title: 'पुस मसान्तभित्र वार्षिक साधारण सभा (AGM) सम्पन्न गर्नुहोस्', desc: '६ महिनाभित्र साधारण सभा डाकेर अडिट रिपोर्ट पारित गर्नुहोस्, सञ्चालकहरूको प्रतिवेदन पास गर्नुहोस्, र दफा १११ अनुसार आगामी वर्षका लागि अडिटर नियुक्त गर्नुहोस्।' },
        { step: 3, title: 'ocr.gov.np मा विवरणहरू अनलाइन अपलोड गर्नुहोस्', desc: 'कम्पनीको पोर्टलमा लगइन गरी: (१) दफा ५१ को सेयर लगत, (२) दफा ८० को अडिट रिपोर्ट, र (३) दफा ७६/१११ को निर्णय प्रतिलिपि अपलोड गर्नुहोस्।' },
        { step: 4, title: 'अद्यावधिक स्वीकृति पत्र (Approval Slip) लिनुहोस्', desc: 'रजिष्ट्रारका अधिकृतले विवरण रुजु गरेपछि आधिकारिक अद्यावधिक पत्र जारी हुन्छ जुन बैंक, कर कार्यालय, र सरकारी टेन्डरमा अनिवार्य चाहिन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालको कम्पनी ऐन २०६३ अनुसार अनिवार्य वार्षिक विवरणहरू',
        headers: ['कम्पनी ऐनको दफा', 'बुझाउनुपर्ने कानुनी कागजात', 'कानुनी समयसीमा', 'ढिलाइ भएमा हुने असर'],
        rows: [
          ['दफा ५१', 'अद्यावधिक सेयरधनी लगत (Share Register)', 'साधारण सभा भएको ३० दिनभित्र', 'दैनिक रूपमा थपिने विलम्ब शुल्क'],
          ['दफा ७६ र १११', 'साधारण सभा निर्णय र अडिटर नियुक्ति', 'आर्थिक वर्ष सकिएको ६ महिनाभित्र', 'अडिटर नियुक्ति अमान्य र भारी जरिवाना'],
          ['दफा ८०', 'अडिट गरिएको ब्यालेन्स सिट र नाफा-नोक्सान', 'पुस मसान्तभित्र (पुस मसान्त अन्तिम)', 'कम्पनी रजिष्ट्रारमा "कालोसूची/Defaulter"'],
          ['आयकर ऐन D-03', 'वार्षिक संस्थागत आयकर विवरण', 'पुस मसान्तभित्र आन्तरिक राजस्वमा', 'दैनिक ०.१% जरिवाना र कर चुक्ता रोकिने']
        ]
      },
      nepalContext: 'कम्पनी ऐन २०६३ को दफा ८१ मा समयमै विवरण नबुझाउने कम्पनीलाई अधिकृत पुँजीका आधारमा दैनिक विलम्ब शुल्क तोकिएको छ। पहिलो महिना १ हजार जरिवाना भए पनि समय बित्दै जाँदा यो वार्षिक १० देखि २० हजारसम्म पुग्छ। लगातार ३ वर्षसम्म वार्षिक विवरण नबुझाउने कम्पनीको बैंक खाता नेपाल राष्ट्र बैंकको निर्देशनमा रोक्का गरिन्छ र सञ्चालकहरूले व्यक्तिगत रूपमा पनि बैंकबाट ऋण लिन पाउँदैनन्।',
      practicalScenario: {
        persona: 'माधव, ४१, वीरगन्जका उत्पादन उद्योगका सञ्चालक',
        income: 'मासिक तलब तथा नाफा रु. १,७५,०००',
        scenarioText: 'एकाउन्टेन्टले जागिर छाडेका कारण माधवले ३ वर्षसम्म कम्पनी रजिष्ट्रार कार्यालयमा वार्षिक विवरण बुझाउन बिर्सिए। जब उनलाई उद्योग विस्तार गर्न बैंकबाट ४० लाख चालु पुँजी कर्जा चाहियो, बैंकले "तपाईंको कम्पनी रजिष्ट्रारमा कालोसूचीमा छ" भन्दै ऋण अस्वीकृत गरिदियो।',
        solutionText: 'माधवले तुरुन्तै अडिट फर्म लगाएर ३ वर्षकै अडिट गराए, साधारण सभाको निर्णय तयार पारे र ocr.gov.np मा दफा ५१, ८०, र १११ का विवरण अपलोड गरे। उनले ३२ हजार रुपैयाँ जरिवाना तिरेर कम्पनीलाई सक्रिय बनाए। त्यसपछि बैंकले ४० लाखको कर्जा तुरुन्तै प्रवाह गर्यो।',
        metricHighlight: 'रोकिएको वार्षिक विवरण बुझाएर ४० लाखको बैंक कर्जा स्वीकृत गराए'
      },
      formula: {
        name: 'कम्पनी ऐन दफा ८१ को विलम्ब शुल्क सूत्र',
        equation: '\\text{Total Delay Fine} = \\text{Base Statutory Penalty} + \\sum_{y=1}^{N} \\text{Annual Escalation Fee}(C_{\\text{auth}})',
        variables: [
          { symbol: 'C_{\\text{auth}}', name: 'अधिकृत पुँजीको वर्ग', desc: '१० लाख, ५० लाख, वा करोडभन्दा माथि पुँजी अनुसार जरिवाना दर बढ्ने।' },
          { symbol: 'N', name: 'विवरण नबुझाई बितेको वर्ष संख्या', desc: 'बाँकी रहेका आर्थिक वर्षहरू।' }
        ],
        exampleCalculation: '२५ लाख अधिकृत पुँजी भएको कम्पनीले २ वर्षसम्म विवरण नबुझाउँदा: वार्षिक आधार जरिवाना रु. ५,००० देखि १०,०००। दुई वर्षको कुल जरिवाना = रु. १५,००० देखि २५,०००। समयमै विवरण बुझाउँदा जरिवाना रु. ० लाग्छ!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'कम्पनी कर म्याद जाँच्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'कर कार्यालयमा कर चुक्ता लिएपछि कम्पनी रजिष्ट्रारमा विवरण बुझाउनु पर्दैन भन्ठान्नु।', correct: 'कर कार्यालय (IRD) र कम्पनी रजिष्ट्रार (OCR) छुट्टाछुट्टै निकाय हुन्; दुवैमा विवरण अनिवार्य बुझाउनुपर्छ।', explanation: 'आन्तरिक राजस्वमा कर तिर्दैमा कम्पनी रजिष्ट्रार कार्यालयको कानुनी अभिलेख अद्यावधिक हुँदैन।' },
        { mistake: 'पुस मसान्त कटेपछि पनि म्याद थपको निवेदन नदिई साधारण सभा गर्न ढिलाइ गर्नु।', correct: 'पुस मसान्तभित्रै अनिवार्य रूपमा साधारण सभा सम्पन्न गरी अडिट रिपोर्ट पेश गर्नुहोस्।', explanation: 'कम्पनी ऐनको दफा ७६ ले ६ महिनाभित्र साधारण सभा सम्पन्न गर्नुपर्ने कडा कानुनी बाध्यता तोकेको छ।' },
        { mistake: 'साधारण सभाको निर्णयमा अडिटरको नाम नखुलाई विवरण बुझाउन खोज्नु।', correct: 'साधारण सभाको निर्णयमा आगामी वर्षको अडिटरको नाम र पारिश्रमिक स्पष्ट लेखेर दफा १११ दर्ता गर्नुहोस्।', explanation: 'अडिटर नियुक्तिको औपचारिक दर्ता नभएमा गरिएको लेखापरीक्षण कानुनी रूपमा खारेज हुन्छ।' }
      ],
      definitions: [
        { term: 'वार्षिक साधारण सभा (AGM)', full: 'Annual General Meeting', meaning: 'कम्पनीका सम्पूर्ण सेयरधनीहरू उपस्थित भएर वर्षभरिको हिसाबकिताब अनुमोदन गर्ने वार्षिक कानुनी बैठक।' },
        { term: 'दफा ८० को विवरण', full: 'लेखापरीक्षण प्रतिवेदन दाखिला', meaning: 'अडिट गरिएको वासलात (Balance Sheet) र नाफा-नोक्सान हिसाब कम्पनी रजिष्ट्रारमा बुझाउने प्रक्रिया।' },
        { term: 'दफा ५१ को विवरण', full: 'सेयर लगत अद्यावधिक', meaning: 'कम्पनीमा कुन-कुन सेयरधनीको कति-कति सेयर छ भनी वार्षिक रूपमा दर्ता गरिने सेयर लगत।' },
        { term: 'सक्रिय हैसियत (Good Standing)', full: 'नियमित कानुनी अवस्था', meaning: 'सबै वार्षिक विवरणहरू समयमै बुझाएको र कुनै पनि कानुनी जरिवाना बाँकी नरहेको कम्पनीको अवस्था।' }
      ],
      faqs: [
        { q: 'के वकिल बिना म आफैं अनलाइनबाट कम्पनीको वार्षिक विवरण बुझाउन सक्छु?', a: 'मज्जाले सक्नुहुन्छ। कम्पनीका सञ्चालक वा आधिकारिक व्यक्तिले ocr.gov.np मा लगइन गरी अडिटरले दिएको अडिट रिपोर्ट अपलोड गरेर connectIPS बाट राजस्व तिरी आफैं बुझाउन सकिन्छ।' },
        { q: 'नेपालमा कम्पनीको वार्षिक विवरण बुझाउने अन्तिम मिति कहिलेसम्म हुन्छ?', a: 'कम्पनी ऐन अनुसार आर्थिक वर्ष सकिएको ६ महिनाभित्र अर्थात् हरेक वर्षको पुस मसान्त (मध्य-जनवरी) सम्ममा अडिट रिपोर्ट र साधारण सभाको विवरण बुझाइसक्नुपर्छ।' },
        { q: 'यदि ५ वर्षसम्म कुनै पनि विवरण नबुझाएमा कम्पनी के हुन्छ?', a: 'कम्पनी ऐनको दफा १३६ अनुसार रजिष्ट्रारले कम्पनी खारेजी (Strike-Off) प्रक्रिया सुरु गर्न सक्छ, जसले गर्दा सञ्चालकहरूको सम्पत्ति रोक्का हुने र नयाँ कम्पनी खोल्न नपाउने कानुनी अड्चन आउँछ।' }
      ],
      takeaways: [
        'कारोबार शून्य भए पनि प्रत्येक प्राइभेट लिमिटेड कम्पनीले वर्षैपिच्छे OCR मा विवरण बुझाउनैपर्छ।',
        'पुस मसान्तभित्र साधारण सभा सम्पन्न गरी दफा ८० को अडिट रिपोर्ट अनलाइन अपलोड गर्नुहोस्।',
        'कर कार्यालयमा कर तिर्दैमा कम्पनी रजिष्ट्रारको दायित्व पूरा हुँदैन - दुवैतिर छुट्टाछुट्टै बुझाउनुपर्छ।',
        'दफा ५१ (सेयर लगत) र दफा १११ (अडिटर नियुक्ति) अडिट रिपोर्टसँगै पेश गर्न नबिर्सनुहोस्।',
        'नियमित विवरण बुझाउँदा कम्पनी सधैँ "सक्रिय" रहन्छ र बैंक ऋण तथा टेन्डरमा अवरोध आउँदैन।'
      ]
    }
  },

  // ── J6. HIRING, SSF & NEPAL LABOR ACT 2074 ───────────────────────
  'hiring-ssf-labor-act-nepal': {
    id: 'biz-ssf-labor-act-hiring',
    slug: 'hiring-ssf-labor-act-nepal',
    categorySlug: 'business',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '11 min read', np: '११ मिनेट पढाइ' },
    masteryTime: { en: '25 min practice', np: '२५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Nepal Labor Act 2074 & Social Security Act 2074 Directives FY 2081/82', np: 'श्रम ऐन २०७४ तथा सामाजिक सुरक्षा कोष (SSF) कार्यविधि २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Basic knowledge of employee compensation and payroll', np: 'कर्मचारी पारिश्रमिक र तलब गणनाको सामान्य जानकारी' },
    en: {
      title: 'Hiring, SSF & Nepal Labor Act 2074: The Employer\'s Compliance Guide',
      oneLineSummary: 'Calculate the true Cost to Company (CTC) including mandatory 31% SSF, Dashain festival allowance, and statutory paid leaves.',
      summaryPoints: [
        'Under Nepal Labor Act 2074, all formal employers must issue written employment contracts from Day 1 (casual probation capped at 6 months).',
        'Minimum monthly basic wage in Nepal is officially revised (currently NPR 17,300/month gross: NPR 10,820 basic + NPR 6,480 allowances).',
        'Social Security Fund (SSF) contribution is mandatory: 31% of basic salary (20% paid by the Employer + 11% deducted from the Employee).',
        'Mandatory benefits include 1-month basic salary Dashain festival allowance (after 1 year of service), 18 days public holidays, and 12 days paid sick leave.',
        'True Cost to Company (CTC) is roughly 25%-30% higher than the quoted nominal basic wage due to statutory contributions.'
      ],
      whatIsThis: 'Hiring compliance under the Nepal Labor Act 2074 (श्रम ऐन २०७४) and Social Security Act 2074 is the legal framework governing employment contracts, statutory minimum wages, mandatory Social Security Fund (SSF) contributions, leave entitlements, and severance protections that all registered businesses in Nepal must provide to their workforce.',
      whyItMatters: 'Many startups hire staff informally on verbal promises, thinking they are "just paying cash." When a disgruntled employee files a complaint at the Labor Office (श्रम कार्यालय), the employer is forced to retroactively pay un-contributed 31% SSF, back-dated festival allowances, overtime, and severe labor litigation damages. Structuring your employment contracts and CTC correctly from Day 1 protects your business from crippling legal liability.',
      howItWorks: [
        { step: 1, title: 'Draft a Labor Act Compliant Employment Contract', desc: 'Specify job title, working hours (max 8 hours/day, 48 hours/week), probation period (max 6 months), split between basic salary and allowances, and termination terms.' },
        { step: 2, title: 'Onboard Employee to Social Security Fund (SSF)', desc: 'Register the employer and employee on the SSF portal (sosys.ssf.gov.np). Generate the employee\'s unique Social Security Number (SSN).' },
        { step: 3, title: 'Compute Monthly Payroll & Withholding', desc: 'Deduct 11% from the employee\'s basic salary, add 20% from the employer\'s pocket, deduct applicable TDS under individual tax slabs, and disburse net pay via commercial bank transfer.' },
        { step: 4, title: 'Accrue Festival Allowance & Paid Leave Reserves', desc: 'Reserve 8.33% of basic salary monthly for the annual Dashain bonus (1 month basic pay) and track statutory paid leaves (1 day home leave per 20 days worked + 12 days sick leave).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'True Cost to Company (CTC) Breakdown: Monthly NPR 40,000 Gross Salary (Nepal)',
        headers: ['Compensation Component', 'Monthly Calculation Basis', 'Employer Cost (NPR)', 'Employee Takes Home'],
        rows: [
          ['Basic Salary (60% of Gross)', 'Statutory basic benchmark', 'NPR 24,000', 'Base for SSF & Bonus'],
          ['Dearness & Position Allowances', '40% of Gross Salary', 'NPR 16,000', 'NPR 16,000 (Cash pay)'],
          ['SSF Employer Contribution (20%)', '0.20 × NPR 24,000 Basic', 'NPR 4,800', 'Deposited directly to SSF'],
          ['SSF Employee Deduction (11%)', '0.11 × NPR 24,000 Basic', 'NPR 0 (Deducted from gross)', '-NPR 2,640 (to SSF)'],
          ['Dashain Bonus Accrual (8.33%)', '1 Month Basic / 12 Months', 'NPR 2,000', 'Paid in Ashad/Aswin lump sum'],
          ['Total True Monthly CTC to Employer', 'Gross + SSF (20%) + Bonus', 'NPR 46,800 Total CTC', 'Net Take-Home: ~NPR 36,000']
        ]
      },
      nepalContext: 'Prior to the Labor Act 2074 and SSF rollout in 2018, private-sector employees had minimal retirement security, while government civil servants enjoyed state pensions. Today, the Social Security Fund covers 4 critical safety schemes: (1) Medical and Maternity, (2) Accident and Disability, (3) Dependent Family Protection, and (4) Old Age Pension & Gratuity. Employers who register with SSF are legally exempt from maintaining separate internal gratuity and medical compensation reserves.',
      practicalScenario: {
        persona: 'Kiran, 33, retail chain founder in Chitwan',
        income: 'NPR 1,90,000 / month operating income',
        scenarioText: 'Kiran hired 4 full-time shop assistants, offering them "NPR 22,000 per month in cash." Six months later, one worker had a workplace fall, and the family demanded NPR 3 Lakh in medical bills, threatening a Labor Office complaint.',
        solutionText: 'Kiran realized that under the Labor Act, employers bear 100% medical liability if employees are not enrolled in SSF. He formally onboarded all staff onto the SSF portal. The SSF medical scheme immediately covered subsequent workplace injuries up to NPR 7 Lakh, shielding Kiran\'s business from sudden catastrophic liability while securing his employees\' health.',
        metricHighlight: 'Shielded business from NPR 7 Lakh workplace injury liabilities via SSF'
      },
      formula: {
        name: 'True Employer Cost to Company (CTC) Formula in Nepal',
        equation: '\\text{Monthly CTC} = \\text{Gross Salary} + (0.20 \\times \\text{Basic Salary}) + \\left( \\frac{\\text{Basic Salary}}{12} \\right)',
        variables: [
          { symbol: '\\text{Gross Salary}', name: 'Contractual Gross Wage', desc: 'Basic salary + all monthly cash allowances.' },
          { symbol: '0.20 \\times \\text{Basic}', name: 'Employer SSF Share', desc: 'Mandatory 20% employer contribution to Social Security Fund.' },
          { symbol: '\\frac{\\text{Basic}}{12}', name: 'Monthly Bonus Accrual', desc: 'Monthly accrual for annual 1-month Dashain festival allowance (8.33%).' }
        ],
        exampleCalculation: 'For Basic Salary = NPR 30,000 and Allowances = NPR 15,000 (Gross = NPR 45,000): Employer SSF (20%) = NPR 6,000. Monthly Dashain Accrual = 30,000 / 12 = NPR 2,500. True Monthly CTC = 45,000 + 6,000 + 2,500 = NPR 53,500 (18.8% higher than quoted gross)!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Calculate Employee CTC & Tax'
      },
      commonMistakes: [
        { mistake: 'Hiring permanent staff on perpetual "informal cash wages" without contracts.', correct: 'Issue formal written appointment letters from Day 1 to avoid severe Labor Court penalties.', explanation: 'Under Section 10 of the Labor Act, any employee working beyond the 6-month probation is deemed automatically permanent.' },
        { mistake: 'Calculating SSF contributions on the entire Gross Salary instead of Basic Salary.', correct: 'SSF 31% (20% + 11%) is legally calculated exclusively on the Basic Salary component.', explanation: 'Clearly segregating basic pay from dearness/house allowances keeps employer SSF costs accurate.' },
        { mistake: 'Withholding Dashain festival allowance from employees who have completed 1 year.', correct: 'Disburse 1 full month of basic salary as festival allowance before Dashain/Tihar.', explanation: 'The Labor Act makes the annual festival allowance a non-negotiable statutory entitlement, not a discretionary bonus.' }
      ],
      definitions: [
        { term: 'SSF (Social Security Fund)', full: 'सामाजिक सुरक्षा कोष', meaning: 'The state-run social insurance fund providing healthcare, accident compensation, and pensions to workers in Nepal.' },
        { term: 'CTC (Cost to Company)', full: 'कम्पनीको कुल कर्मचारी लागत', meaning: 'The total expenditure an employer incurs to sustain an employee, including salary, SSF, and festival allowances.' },
        { term: 'Probation Period', full: 'परीक्षण काल', meaning: 'The initial trial employment window, legally capped at a maximum of 6 months under the Nepal Labor Act 2074.' },
        { term: 'Festival Allowance', full: 'चाडपर्व खर्च (दसैँ भत्ता)', meaning: 'A statutory entitlement equal to 1 month of basic salary payable annually to employees completing 1 year of service.' }
      ],
      faqs: [
        { q: 'Is enrollment in the Social Security Fund (SSF) mandatory for private companies in Nepal?', a: 'Yes. Under the Social Security Act 2074 and Supreme Court rulings, all formal private-sector employers, NGOs, and incorporated companies must register their establishment and employees with SSF.' },
        { q: 'What is the standard working hour limit under the Nepal Labor Act 2074?', a: 'Standard working hours are maximum 8 hours per day and 48 hours per week. Any work beyond this must be compensated as overtime at 1.5 times the regular basic hourly wage.' },
        { q: 'How many days of paid leave are employees entitled to per year in Nepal?', a: 'Employees are entitled to: (1) 18 days public holidays, (2) 1 day home leave for every 20 days worked (~15-18 days), (3) 12 days fully paid sick leave, and (4) maternity/paternity leaves.' }
      ],
      takeaways: [
        'Issue written employment contracts from Day 1; probation is legally capped at 6 months.',
        'True Cost to Company (CTC) is roughly 20%-25% higher than nominal salary due to SSF and bonus.',
        'SSF requires a total 31% contribution on basic salary (20% Employer + 11% Employee).',
        'Dashain festival allowance (1 month basic pay) is a mandatory statutory entitlement after 1 year.',
        'Enrolling staff in SSF transfers catastrophic medical and accident liabilities away from the employer.'
      ]
    },
    np: {
      title: 'नेपालमा कर्मचारी भर्ना, सामाजिक सुरक्षा कोष (SSF) र श्रम ऐन २०७४: रोजगारदाता निर्देशिका',
      oneLineSummary: 'अनिवार्य ३१% SSF, दसैँ भत्ता, र कानुनी बिदासहित कर्मचारीको वास्तविक कुल लागत (CTC) हिसाब गर्ने सम्पूर्ण तरिका।',
      summaryPoints: [
        'श्रम ऐन २०७४ अनुसार काम सुरु गरेकै दिनदेखि कर्मचारीलाई अनिवार्य रूपमा लिखित नियुक्ति पत्र दिनुपर्छ (परीक्षण काल अधिकतम ६ महिना)।',
        'नेपाल सरकारले तोकेको न्यूनतम पारिश्रमिक हाल मासिक रु. १७,३०० (आधारभूत तलब रु. १०,८२० + महँगी भत्ता रु. ६,४८०) रहेको छ।',
        'सामाजिक सुरक्षा कोष (SSF) मा ३१% योगदान अनिवार्य छ (२०% रोजगारदाताले थपिदिने + ११% कर्मचारीको तलबबाट काट्ने)।',
        '१ वर्ष सेवा पूरा गरेका कर्मचारीलाई १ महिनाको आधारभूत तलब बराबर दसैँ भत्ता, १८ दिन सार्वजनिक बिदा, र १२ दिन बिरामी बिदा अनिवार्य हुन्छ।',
        'कम्पनीका लागि कर्मचारीको वास्तविक लागत (CTC) तोकिएको तलबभन्दा करिब २०% देखि २५% बढी हुन आउँछ।'
      ],
      whatIsThis: 'श्रम ऐन २०७४ र सामाजिक सुरक्षा ऐन २०७४ अन्तर्गतको रोजगार अनुपालन भनेको नेपालमा सञ्चालित सबै कम्पनी तथा व्यवसायहरूले आफ्ना कामदारलाई दिनुपर्ने न्यूनतम तलब, नियुक्ति पत्र, सामाजिक सुरक्षा कोष (SSF) मा योगदान, बिदा, र उपचार सुविधा सम्बन्धी अनिवार्य कानुनी व्यवस्था हो।',
      whyItMatters: 'नेपालका धेरै स्टार्टअप र पसलहरूले "नगद तलब दिन्छौँ" भन्दै बिना सम्झौता काममा लगाउँछन्। तर भोलि कुनै कर्मचारीले श्रम कार्यालयमा उजुरी दिएमा रोजगारदाताले सुरुदेखिको ३१% SSF, दसैँ भत्ता, ओभरटाइम, र ठूलो क्षतिपूर्ति तिर्नुपर्ने हुन्छ। पहिलो दिनमै कानुनी प्रक्रिया मिलाउँदा व्यवसाय कानुनी झमेलाबाट सुरक्षित रहन्छ।',
      howItWorks: [
        { step: 1, title: 'श्रम ऐन अनुसारको नियुक्ति पत्र तयार गर्नुहोस्', desc: 'पद, दैनिक ८ घण्टा (हप्ताको ४८ घण्टा) को कामको समय, अधिकतम ६ महिनाको परीक्षण काल, आधारभूत तलब र भत्ताको विभाजन स्पष्ट लेख्नुहोस्।' },
        { step: 2, title: 'सामाजिक सुरक्षा कोष (SSF) मा दर्ता गर्नुहोस्', desc: 'कम्पनी र कर्मचारीलाई sosys.ssf.gov.np पोर्टलमा दर्ता गर्नुहोस् र कर्मचारीको स्थायी सामाजिक सुरक्षा नम्बर (SSN) निकाल्नुहोस्।' },
        { step: 3, title: 'मासिक पेरोल र कर कट्टा हिसाब गर्नुहोस्', desc: 'आधारभूत तलबबाट ११% कट्टा गर्नुहोस्, रोजगारदाताको २०% थप्नुहोस्, व्यक्तिगत आयकर (TDS) काट्नुहोस् र बाँकी रकम सिधै बैंक खातामा पठाउनुहोस्।' },
        { step: 4, title: 'दसैँ भत्ता र बिदाको बजेट छुट्याउनुहोस्', desc: 'वर्षमा १ महिनाको आधारभूत तलब बराबर दसैँ भत्ता दिन प्रत्येक महिना ८.३३% बजेट जगेडा राख्नुहोस् र वार्षिक बिदाहरूको अभिलेख राख्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'कर्मचारीको वास्तविक लागत (CTC): मासिक रु. ४०,००० कुल तलब भएको अवस्थामा (नेपाल)',
        headers: ['तलब तथा सुविधा शीर्षक', 'हिसाब गर्ने कानुनी आधार', 'रोजगारदाताको खर्च (रु.)', 'कर्मचारीले हात पार्ने रकम'],
        rows: [
          ['आधारभूत तलब (कुल तलबको ६०%)', 'ऐन अनुसारको न्यूनतम आधार', 'रु. २४,०००', 'SSF र भत्ता निकाल्ने आधार'],
          ['महँगी तथा पद भत्ता (४०%)', 'मासिक नगद भत्ता', 'रु. १६,०००', 'रु. १६,००० (नगद भुक्तानी)'],
          ['रोजगारदाताको २०% SSF अंश', '०.२० × २४,००० आधारभूत तलब', 'रु. ४,८०० थप लागत', 'सिधै SSF खातामा जम्मा'],
          ['कर्मचारीको ११% SSF कट्टी', '०.११ × २४,००० आधारभूत तलब', 'रु. ० (तलबबाटै कट्टा)', '-रु. २,६४० (SSF मा गयो)'],
          ['मासिक दसैँ भत्ता जगेडा (८.३३%)', '१ महिनाको आधारभूत तलब / १२', 'रु. २,००० जगेडा कोष', 'दसैँको बेला एकमुष्ट पाइने'],
          ['कम्पनीको कुल मासिक लागत (CTC)', 'कुल तलब + २०% SSF + दसैँ भत्ता', 'रु. ४६,८०० कुल खर्च', 'खुद हात पर्ने तलब: ~रु. ३६,०००']
        ]
      },
      nepalContext: '२०७४ सालको नयाँ श्रम ऐन र सामाजिक सुरक्षा ऐन आउनुअघि निजी क्षेत्रका कर्मचारीहरूको भविष्य असुरक्षित थियो भने सरकारी कर्मचारीले मात्र पेन्सन पाउँथे। आज सामाजिक सुरक्षा कोष (SSF) ले ४ वटा सुविधा दिन्छ: (१) औषधि उपचार तथा मातृत्व, (२) दुर्घटना तथा अशक्तता, (३) आश्रित परिवार सुरक्षा, र (४) वृद्धावस्था पेन्सन तथा उपदान। SSF मा दर्ता भएका कम्पनीले कर्मचारी बिरामी पर्दा वा दुर्घटना हुँदा आफ्नै खल्तीबाट उपचार खर्च बेहोर्नु पर्दैन।',
      practicalScenario: {
        persona: 'किरण, ३३, चितवनका खुद्रा व्यापार व्यवसायी',
        income: 'मासिक रु. १,९०,००० व्यापारिक आम्दानी',
        scenarioText: 'किरणले ४ जना कर्मचारीलाई "महिनाको २२ हजार नगद" भन्दै काममा राखेका थिए। ६ महिनापछि एक कामदार पसलमा भर्याङबाट लडेर घाइते भए र परिवारले ३ लाख उपचार खर्च माग्दै श्रम कार्यालय जाने चेतावनी दिए।',
        solutionText: 'किरणले थाहा पाए कि SSF मा दर्ता नगरेका कर्मचारीको सम्पूर्ण उपचार खर्च रोजगारदाता आफैंले बेहोर्नुपर्छ। उनले तुरुन्तै सबैलाई SSF मा जोडे। त्यसपछिको उपचार खर्च सामाजिक सुरक्षा कोषको दुर्घटना दाबीबाट ७ लाख रुपैयाँसम्म निःशुल्क कभर भयो र किरणको व्यवसाय सम्भावित कानुनी र आर्थिक संकटबाट जोगियो।',
        metricHighlight: 'कर्मचारीलाई SSF मा जोडेर ७ लाखसम्मको दुर्घटना जोखिमबाट व्यवसायलाई सुरक्षित गरे'
      },
      formula: {
        name: 'रोजगारदाताको कुल मासिक लागत (CTC) सूत्र',
        equation: '\\text{Monthly CTC} = \\text{Gross Salary} + (0.20 \\times \\text{Basic Salary}) + \\left( \\frac{\\text{Basic Salary}}{12} \\right)',
        variables: [
          { symbol: '\\text{Gross Salary}', name: 'सम्झौता गरिएको कुल तलब', desc: 'आधारभूत तलब र मासिक नगद भत्ताहरूको योगफल।' },
          { symbol: '0.20 \\times \\text{Basic}', name: 'रोजगारदाताको २०% SSF अंश', desc: 'सामाजिक सुरक्षा कोषमा कम्पनीले थपिदिनुपर्ने अनिवार्य रकम।' },
          { symbol: '\\frac{\\text{Basic}}{12}', name: 'मासिक दसैँ भत्ता जगेडा', desc: 'वार्षिक १ महिनाको आधारभूत तलब बराबर दसैँ खर्चको मासिक अंश (८.३३%)।' }
        ],
        exampleCalculation: 'आधारभूत तलब = रु. ३०,००० र भत्ता = रु. १५,००० (कुल तलब रु. ४५,०००): रोजगारदाताको २०% SSF = रु. ६,०००। मासिक दसैँ खर्च = ३०,००० / १२ = रु. २,५००। कम्पनीको वास्तविक कुल लागत (CTC) = ४५,००० + ६,००० + २,५०० = रु. ५३,५०० प्रतिमहिना (तोकिएको तलबभन्दा १८.८% बढी)!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'कर्मचारी तलब र CTC हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'सम्झौता पत्र नदिई मौखिक भरमा लामो समयसम्म नगद तलबमा कर्मचारी राख्नु।', correct: 'पहिलो दिनमै लिखित नियुक्ति पत्र दिनुहोस्; ६ महिना नाघेपछि कामदार स्वतः स्थायी मानिन्छ।', explanation: 'श्रम ऐनको दफा १० अनुसार ६ महिनाको परीक्षण काल कटेपछि कर्मचारीलाई बिना ठोस कानुनी कारण निकाल्न पाइँदैन।' },
        { mistake: 'कुल पूरै तलबमा ३१% SSF हिसाब गरेर कम्पनीको खर्च अनावश्यक बढाउनु।', correct: 'SSF को ३१% (२०% + ११%) केवल "आधारभूत तलब" (Basic Salary) मा मात्र लाग्छ।', explanation: 'तलब संरचनामा आधारभूत तलब र भत्ता स्पष्ट छुट्याउँदा कानुनसम्मत रूपमा SSF खर्च सन्तुलित रहन्छ।' },
        { mistake: '१ वर्ष काम गरेका कर्मचारीलाई "कम्पनी घाटामा छ" भन्दै दसैँ भत्ता नदिनु।', correct: '१ वर्ष पुगेका कर्मचारीलाई १ महिनाको आधारभूत तलब बराबर दसैँ भत्ता दिनु कानुनी दायित्व हो।', explanation: 'श्रम ऐन अनुसार चाडपर्व खर्च स्वेच्छिक बोनस होइन, यो कानुनले ग्यारेन्टी गरेको अनिवार्य अधिकार हो।' }
      ],
      definitions: [
        { term: 'सामाजिक सुरक्षा कोष (SSF)', full: 'Social Security Fund', meaning: 'कामदारहरूको स्वास्थ्य उपचार, दुर्घटना बिमा, र पेन्सन व्यवस्थापन गर्ने नेपाल सरकारको आधिकारिक कोष।' },
        { term: 'कुल कर्मचारी लागत (CTC)', full: 'Cost to Company', meaning: 'कर्मचारीलाई दिइने तलब, रोजगारदाताको SSF अंश, र दसैँ भत्ता समेत जोड्दा कम्पनीलाई पर्ने कुल वास्तविक खर्च।' },
        { term: 'परीक्षण काल (Probation)', full: 'कामको मूल्यांकन अवधि', meaning: 'नयाँ कर्मचारीको काम जाँच्ने सुरुवाती समय, जुन श्रम ऐन अनुसार अधिकतम ६ महिना मात्र हुन सक्छ।' },
        { term: 'चाडपर्व खर्च (दसैँ भत्ता)', full: 'वार्षिक चाडपर्व सुविधा', meaning: '१ वर्ष सेवा पूरा गरेका कर्मचारीलाई वर्षमा एकपटक १ महिनाको आधारभूत तलब बराबर दिइने अनिवार्य कानुनी रकम।' }
      ],
      faqs: [
        { q: 'के नेपालमा साना प्राइभेट लिमिटेड कम्पनीले पनि SSF मा दर्ता हुनैपर्छ?', a: 'पर्छ। सामाजिक सुरक्षा ऐन २०७४ र सर्वोच्च अदालतको आदेश अनुसार नेपालमा दर्ता भएका सबै प्राइभेट लिमिटेड कम्पनी, गैरसरकारी संस्था र औपचारिक प्रतिष्ठानहरूले SSF मा दर्ता हुनु अनिवार्य छ।' },
        { q: 'नेपालको श्रम ऐन अनुसार हप्तामा कति घण्टा काम गराउन पाइन्छ?', a: 'दैनिक अधिकतम ८ घण्टा र हप्तामा अधिकतम ४८ घण्टा मात्र काम गराउन पाइन्छ। यसभन्दा बढी काम गराएमा नियमित दरको १.५ गुणाका दरले अतिरिक्त समय (Overtime) भत्ता दिनुपर्छ।' },
        { q: 'नेपालमा कर्मचारीले वर्षमा कति दिन तलबसहितको बिदा पाउँछन्?', a: '(१) १८ दिन सार्वजनिक बिदा, (२) काम गरेको २० दिन बराबर १ दिनका दरले घर बिदा (वर्षमा करिब १८ दिन), (३) १२ दिन पूर्ण तलबसहितको बिरामी बिदा, र सुत्केरी/क्रिया बिदा।' }
      ],
      takeaways: [
        'पहिलो दिनमै लिखित नियुक्ति पत्र दिनुहोस्; परीक्षण काल अधिकतम ६ महिना मात्र हुन्छ।',
        'कम्पनीको कुल लागत (CTC) तोकिएको तलबभन्दा २०% देखि २५% बढी पर्छ।',
        'आधारभूत तलबमा ३१% SSF योगदान (२०% कम्पनी + ११% कर्मचारी) अनिवार्य छ।',
        '१ वर्ष सेवा पूरा गरेका कर्मचारीलाई १ महिनाको आधारभूत तलब बराबर दसैँ भत्ता अनिवार्य हुन्छ।',
        'SSF मा दर्ता गर्दा कर्मचारीको ठूलो दुर्घटना तथा उपचार खर्चको जोखिमबाट कम्पनी सुरक्षित रहन्छ।'
      ]
    }
  }

};

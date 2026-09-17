// BATCH C - NEPSE (5 lessons)
// Category: nepse

export const BATCH_C = {

  // ── C1. ANALYZING & APPLYING FOR IPO ON MEROSHARE ────────────────
  'analyzing-applying-ipo-meroshare': {
    id: 'nepse-ipo-meroshare',
    slug: 'analyzing-applying-ipo-meroshare',
    categorySlug: 'nepse',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Securities Board of Nepal (SEBON) IPO Issuance Directives', np: 'धितोपत्र बोर्ड निष्कासन तथा बाँडफाँड निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Demat, MeroShare & CRN Setup', np: 'डिम्याट, मेरोसेयर र CRN' },
    en: {
      title: 'How to Analyze and Apply for an IPO on MeroShare: The 10-Kitta Guide',
      oneLineSummary: 'Cut through marketing hype, evaluate company prospectuses (ICRA credit ratings, EPS, promoter lock-in), and submit successful C-ASBA applications.',
      summaryPoints: [
        'SEBON\'s 10-kitta allotment policy means almost every ordinary retail IPO in Nepal requires exactly NPR 1,000 (10 shares at NPR 100 par value).',
        'Applying for more than 10 kitta in oversubscribed retail issues needlessly blocks excess cash in your bank account without increasing your odds.',
        'Never apply blindly: check the credit rating report (ICRA/CARE Nepal), projected Net Worth per share, and promoter lock-in period in the prospectus.',
        'C-ASBA (Centralized Application Supported by Blocked Amount) keeps money in your savings account earning daily interest until final allotment.',
        'Always verify application status under "Application Report" on MeroShare to ensure the bank shows "Verified" before the issue closes.'
      ],
      whatIsThis: 'An Initial Public Offering (IPO) in Nepal allows private companies (such as hydropower projects, manufacturing firms, hotels, and life insurers) to raise equity capital from the general public by issuing shares at par value (usually NPR 100). Retail investors apply digitally through the CDSC MeroShare portal using their bank\'s C-ASBA authorization and CRN number.',
      whyItMatters: 'Over 2.5 million Nepalis apply for IPOs, making issues oversubscribed by 10 to 40 times. While historical IPOs often double or triple in price upon secondary listing, several recently listed companies with negative net worth, heavy debt, and poor credit ratings crashed below their NPR 100 face value. Learning to read the prospectus prevents you from buying into debt-ridden shell companies.',
      howItWorks: [
        { step: 1, title: 'Read the Company Prospectus (Awhan Patra)', desc: 'Download the prospectus from the issue manager\'s website. Check 3 core numbers: (1) Credit rating (Grade 3 or above indicates average/above safety), (2) Net Worth per share (must be above NPR 100), and (3) Audited EPS for the past three years.' },
        { step: 2, title: 'Log In to MeroShare & Select Issue', desc: 'Navigate to meroshare.cdsc.com.np, go to "My ASBA" → "Apply for Issue", and locate the open IPO for the general public (Sadharan Seva).' },
        { step: 3, title: 'Submit 10 Kitta with Your CRN Number', desc: 'Select your registered bank, account number, enter "10" for applied kitta, and input your bank-issued CRN (C-ASBA Registration Number). Enter your 4-digit transaction PIN.' },
        { step: 4, title: 'Verify Bank Status & Check Allotment Result', desc: 'Check "Application Report" the next morning. If status shows "Unverified", contact your bank branch immediately. When allotment occurs (usually within 7-10 days), check results on iporesult.cdsc.com.np.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'IPO Due-Diligence Checklist: Safe vs High-Risk Prospectus Indicators',
        headers: ['Metric / Indicator', 'Safe / Healthy Indicator', 'High-Risk / Warning Indicator'],
        rows: [
          ['Credit Rating (CARE/ICRA)', 'CARE-NP IPO Grade 3 / BBB or higher (Moderate to High safety)', 'CARE-NP IPO Grade 5 / D (Default or poor fundamentals)'],
          ['Net Worth Per Share', 'Above NPR 100 (e.g., NPR 120-180+)', 'Below NPR 90 (Accumulated losses eroding capital)'],
          ['Earnings Per Share (EPS)', 'Positive and growing (NPR 12+ per share)', 'Negative or subsidized by one-off asset sales'],
          ['Promoter Share Lock-in', 'Strict 3-year SEBON lock-in from commercial operation date', 'Promoter lock-in expiring shortly after listing'],
          ['Use of IPO Proceeds', 'Capacity expansion, new turbines, or debt reduction', 'Paying off high-interest informal promoter loans']
        ]
      },
      nepalContext: 'Under SEBON regulations, every applicant must be allotted at least 10 kitta before anyone receives 20 kitta. Because almost every public IPO attracts 1.5 to 2 million applications for only 150,000 to 300,000 ten-kitta packets, allocation is decided by automated computerized lottery (Golap-Pratha). Applying for 50 or 100 kitta simply ties up your funds; application of 10 kitta (NPR 1,000) provides identical statistical odds while preserving your liquidity.',
      practicalScenario: {
        persona: 'Sunita, 21, BBS student in Lalitpur',
        income: 'NPR 12,000 / month tuition allowance',
        scenarioText: 'Sunita applied for 50 kitta (NPR 5,000) on every IPO because her relatives told her higher applications increase lottery chances. She was frustrated that her savings were repeatedly blocked for two weeks.',
        solutionText: 'She learned the SEBON 10-kitta allotment rule and started applying for strictly 10 kitta (NPR 1,000). She used the remaining NPR 4,000 to start an automated monthly open-ended mutual fund SIP. Her lottery allotment odds remained identical, but she stopped blocking large cash sums and began compounding real wealth.',
        metricHighlight: 'Saved NPR 4,000/month from idle bank blocks and redirected into growing SIP'
      },
      formula: {
        name: 'IPO Allotment Probability Formula',
        equation: 'P(\\text{Allotment}) = \\min\\left(1.0, \\frac{\\text{Total 10-Kitta Packets Available}}{\\text{Total Valid Applications}}\\right) \\times 100',
        variables: [
          { symbol: 'Total Packets', name: 'Units for General Public / 10', desc: 'Number of full 10-share allotments available for ordinary retail investors.' },
          { symbol: 'Total Valid Applications', name: 'Verified Retail Bidders', desc: 'Total eligible MeroShare applications verified by banks without duplicate disqualifications.' },
          { symbol: 'P(Allotment)', name: 'Lottery Success Probability', desc: 'Statistical percentage chance of winning 10 kitta in the computerized draw.' }
        ],
        exampleCalculation: 'Hydropower company issues 2,000,000 shares for public = 200,000 packets of 10 kitta. Total verified applicants = 1,600,000. Allotment probability = (200,000 / 1,600,000) * 100 = 12.5% (approx 1 in 8 applicants wins 10 kitta).',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Explore Long-term Investing'
      },
      commonMistakes: [
        { mistake: 'Applying for 100 kitta (NPR 10,000) thinking it increases lottery odds.', correct: 'Apply for exactly 10 kitta (NPR 1,000) in oversubscribed public issues.', explanation: 'SEBON rules mandate that 10 kitta is distributed to as many unique individuals as possible before anyone gets 20 kitta. Extra kitta are ignored.' },
        { mistake: 'Ignoring the bank status after pressing apply on MeroShare.', correct: 'Always verify that the status changes to "Verified" before the issue closes.', explanation: 'If your bank balance was insufficient or the account number had a discrepancy, the bank leaves it "Unverified", disqualifying your application.' },
        { mistake: 'Applying for family members using different banks with mismatched PAN/DOB.', correct: 'Ensure each family member has their own independent Demat, MeroShare, and linked bank account.', explanation: 'CDSC automated filters reject duplicate applications sharing identical citizen numbers or BOIDs.' }
      ],
      definitions: [
        { term: 'C-ASBA', full: 'Centralized Application Supported by Blocked Amount', meaning: 'A centralized system that blocks money in your bank account for IPOs without deducting it until shares are allotted.' },
        { term: 'CRN', full: 'C-ASBA Registration Number', meaning: 'A unique code issued by your commercial bank linking your bank account to MeroShare.' },
        { term: 'Awhan Patra (Prospectus)', full: 'Official Company Offering Document', meaning: 'The legal document disclosing the company\'s financial statements, project costs, credit ratings, and risks.' },
        { term: 'Net Worth Per Share', full: 'Book Value Per Share', meaning: 'Total shareholder equity divided by total shares, showing the real physical backing of each NPR 100 share.' }
      ],
      faqs: [
        { q: 'Why did my MeroShare status show "Rejected"?', a: 'Common causes: insufficient balance at the time of bank verification, entering an incorrect CRN, applying from a blocked account, or submitting duplicate applications.' },
        { q: 'How long does it take for unallotted money to be unblocked?', a: 'Under SEBON rules, unallotted funds must be unblocked within 3 business days following the formal allotment ceremony.' },
        { q: 'Can I sell my IPO shares immediately on listing day?', a: 'Yes, once CDSC credits the shares into your Demat account (usually 3-5 days after allotment) and the company rings the opening bell on NEPSE, you can sell them via broker TMS.' }
      ],
      takeaways: [
        'Apply for exactly 10 kitta (NPR 1,000) for standard retail public IPOs in Nepal.',
        'Check the prospectus: verify credit rating (Grade 3+) and ensure Net Worth per share exceeds NPR 100.',
        'Never let unverified status sit: log into MeroShare 24 hours after applying to confirm bank verification.',
        'Don\'t keep large sums idle for IPO lotteries - divert surplus cash into monthly mutual fund SIPs.',
        'Demat, MeroShare, and bank account must all belong to the exact same legal name and citizenship number.'
      ]
    },
    np: {
      title: 'मेरोसेयरबाट IPO विश्लेषण र आवेदन: १० कित्ताको पूर्ण निर्देशिका',
      oneLineSummary: 'कम्पनीको वित्तीय विवरण (क्रेडिट रेटिङ, प्रतिसेयर नेटवर्थ, प्रवर्द्धक लक-इन) विश्लेषण गरी सुरक्षित रूपमा C-ASBA बाट आवेदन दिन सिक्नुहोस्।',
      summaryPoints: [
        'नेपाल धितोपत्र बोर्ड (SEBON) को १० कित्ते नीतिका कारण साधारणतया हरेक सर्वसाधारण IPO मा ठ्याक्कै रु. १,००० (१० कित्ता × रु. १००) मात्र आवश्यक पर्छ।',
        'अत्यधिक माग (Oversubscribed) हुने IPO मा १० कित्ताभन्दा बढी आवेदन दिँदा बैंकमा अनावश्यक पैसा रोकिन्छ तर पर्ने सम्भावना रत्तिभर बढ्दैन।',
        'हल्लाको भरमा नभर्नुहोस्: कम्पनीको आह्वानपत्रमा क्रेडिट रेटिङ (ICRA/CARE), प्रतिसेयर नेटवर्थ रु. १०० माथि छ/छैन, र प्रवर्द्धक सेयर लक-इन अवधि हेर्नुहोस्।',
        'C-ASBA प्रणालीले सेयर बाँडफाँड नहुन्जेल तपाईंको पैसा आफ्नै बैंक खातामै रोक्का राख्छ, जसले गर्दा दैनिक ब्याज आइरहन्छ।',
        'आवेदन दिएपछि मेरोसेयरको "Application Report" मा गएर बैंकले "Verified" गर्‍यो वा गरेन अनिवार्य हेर्नुहोस्।'
      ],
      whatIsThis: 'IPO (प्राथमिक सेयर निष्कासन) भनेको कुनै पनि कम्पनीले पहिलोपटक सर्वसाधारण नागरिकबाट पुँजी जुटाउन अंकित मूल्य (सामान्यतया रु. १०० प्रति कित्ता) मा सेयर जारी गर्ने प्रक्रिया हो। नेपालमा सीडीएससीको मेरोसेयर (MeroShare) पोर्टल र बैंकको C-ASBA प्रणालीमार्फत घरमै बसी-बसी अनलाइन आवेदन दिन सकिन्छ।',
      whyItMatters: 'नेपालमा अहिले एउटै IPO मा २५ लाखभन्दा बढी मानिसले आवेदन दिन्छन्, जसले गर्दा मागभन्दा १० देखि ४० गुणा बढी आवेदन पर्छ। पहिलेका धेरै IPO हरूले दोस्रो बजारमा सूचीकृत हुँदा दोब्बर-तेब्बर नाफा दिए पनि पछिल्लो समय भारी ऋण, कमजोर वित्तीय अवस्था र ऋणात्मक नेटवर्थ भएका केही कम्पनीहरूको सेयर अंकित मूल्य रु. १०० भन्दा तल झरेका छन्। आह्वानपत्र पढ्न जान्दा यस्ता डुब्ने कम्पनीबाट बचिन्छ।',
      howItWorks: [
        { step: 1, title: 'कम्पनीको आह्वानपत्र (Prospectus) अध्ययन गर्नुहोस्', desc: 'बिक्री प्रबन्धकको वेभसाइटबाट आह्वानपत्र डाउनलोड गर्नुहोस्। ३ मुख्य कुरा हेर्नुहोस्: (१) क्रेडिट रेटिङ (Grade 3 वा BBB भन्दा माथि सुरक्षित), (२) प्रतिसेयर नेटवर्थ (रु. १०० भन्दा माथि हुनुपर्छ), र (३) विगत तीन वर्षको वास्तविक प्रतिसेयर आम्दानी (EPS)।' },
        { step: 2, title: 'मेरोसेयर लगइन गरी IPO छान्नुहोस्', desc: 'meroshare.cdsc.com.np मा जानुहोस्। "My ASBA" → "Apply for Issue" मा क्लिक गरी सर्वसाधारणका लागि खुला भएको IPO छान्नुहोस्।' },
        { step: 3, title: '१० कित्ता र CRN नम्बर प्रविष्ट गर्नुहोस्', desc: 'आफ्नो बैंक खाता छान्नुहोस्, कित्तामा "10" लेख्नुहोस् र बैंकले दिएको गोप्य CRN नम्बर प्रविष्ट गर्नुहोस्। त्यसपछि ४ अंकको ट्रान्जक्सन पिन हानेर आवेदन पेश गर्नुहोस्।' },
        { step: 4, title: 'बैंक प्रमाणीकरण (Verification) र नतिजा हेर्नुहोस्', desc: 'भोलिपल्ट मेरोसेयरको "Application Report" हेर्नुहोस्। "Unverified" देखिएमा तुरुन्त बैंकमा सम्पर्क गर्नुहोस्। बाँडफाँडपछि iporesult.cdsc.com.np मा नतिजा हेर्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'IPO लगानी पूर्वमूल्याङ्कन: सुरक्षित भर्सेस जोखिमपूर्ण कम्पनीका सूचकहरू',
        headers: ['सूचक / विवरण', 'सुरक्षित र बलियो कम्पनीको लक्षण', 'जोखिमपूर्ण र कमजोर कम्पनीको लक्षण'],
        rows: [
          ['क्रेडिट रेटिङ (CARE/ICRA)', 'IPO Grade 3 वा BBB वा माथि (औसत वा राम्रो सुरक्षा)', 'IPO Grade 5 वा D (वित्तीय अवस्था निकै कमजोर वा जोखिमपूर्ण)'],
          ['प्रतिसेयर नेटवर्थ (Net Worth)', 'रु. १०० भन्दा धेरै (जस्तै रु. १२० देखि रु. १८०+)', 'रु. ९० भन्दा कम (विगतको घाटाले पुँजी खाइसकेको अवस्था)'],
          ['प्रतिसेयर आम्दानी (EPS)', 'धनात्मक र स्थिर रूपमा बढ्दो (वार्षिक रु. १२ भन्दा माथि)', 'ऋणात्मक (घाटामा रहेको) वा एकपटकको सम्पत्ति बेचेर देखाएको'],
          ['प्रवर्द्धक सेयर लक-इन अवधि', 'व्यावसायिक उत्पादन मितिबाट ३ वर्षसम्म बिक्री निषेध', 'सूचीकृत भएको केही समयमै प्रवर्द्धकले सेयर बेच्न पाउने'],
          ['संकलित पुँजीको उपयोग', 'नयाँ परियोजना निर्माण, क्षमता विस्तार वा बैंक ऋण भुक्तानी', 'प्रवर्द्धकहरूको व्यक्तिगत महँगो ऋण तिर्न']
        ]
      },
      nepalContext: 'धितोपत्र बोर्डको नियमावली अनुसार उपलब्ध सेयर संख्याले पुगेसम्म सबै आवेदकलाई न्यूनतम १० कित्ता सेयर बाँडफाँड गर्नुपर्छ। नेपालमा सर्वसाधारणका लागि निष्कासन हुने १५ देखि ३० लाख कित्ता सेयरमा १५ देखि २० लाख आवेदक पर्ने हुँदा गोलाप्रथा (Lottery) बाट मात्र १० कित्ता पर्दछ। ५० वा १०० कित्ता भरे पनि १० कित्ता नै पर्ने भएकाले रु. १,००० मात्र आवेदन दिनु बुद्धिमानी हुन्छ।',
      practicalScenario: {
        persona: 'सुनिता, २१, ललितपुरकी बिबिएस विद्यार्थी',
        income: 'मासिक पकेट खर्च रु. १२,000',
        scenarioText: 'सुनिताले धेरै कित्ता भर्दा सेयर पर्ने सम्भावना बढ्छ भन्ने गलत हल्ला सुनेर हरेक IPO मा ५० कित्ता (रु. ५,०००) हाल्ने गर्थिन्। जसले गर्दा उनको बैंकको पैसा हप्तौँ रोक्का हुन्थ्यो र खर्चको अभाव हुन्थ्यो।',
        solutionText: 'उनले १० कित्ताको नियम बुझेर ठ्याक्कै रु. १,००० (१० कित्ता) मात्र आवेदन दिन थालिन्। बचेको रु. ४,००० उनले खुला-मुखी म्युचुअल फन्डमा मासिक SIP गर्न थालिन्। सेयर पर्ने सम्भावना उही रह्यो तर उनको बचत अनुशासित रूपमा बढ्न थाल्यो।',
        metricHighlight: 'अनावश्यक रोकिने रु. ४,००० लाई मासिक SIP मा लगानी गरी सम्पत्ति वृद्धि'
      },
      formula: {
        name: 'IPO गोलाप्रथामा सेयर पर्ने सम्भाव्यता सूत्र',
        equation: 'P(\\text{पर्ने सम्भावना}) = \\min\\left(1.0, \\frac{\\text{उपलब्ध १० कित्ते प्याकेट संख्या}}{\\text{कुल योग्य आवेदक संख्या}}\\right) \\times १००',
        variables: [
          { symbol: 'उपलब्ध प्याकेट', name: 'सर्वसाधारणका लागि कुल कित्ता / १०', desc: '१० कित्ताका दरले बाँड्न मिल्ने कुल सफल आवेदक संख्या।' },
          { symbol: 'कुल योग्य आवेदक', name: 'बैंकबाट प्रमाणित आवेदन', desc: 'रद्द नभई बैंकले प्रमाणीकरण गरेका कुल मेरोसेयर आवेदक संख्या।' },
          { symbol: 'P(पर्ने सम्भावना)', name: 'गोलाप्रथामा पर्ने प्रतिशत', desc: 'कम्प्युटर गोलाप्रथामा १० कित्ता हात पर्ने गणितीय सम्भावना।' }
        ],
        exampleCalculation: 'कम्पनीले २० लाख कित्ता सर्वसाधारणलाई छुट्यायो = २ लाख जनालाई १० कित्ता पुग्छ। कुल सदर आवेदक १६ लाख भए: (२,००,००० / १६,००,०००) * १०० = १२.५% (अर्थात प्रत्येक ८ जनामध्ये १ जनालाई १० कित्ता पर्ने सम्भावना)।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'दीर्घकालीन लगानी विकल्पहरू'
      },
      commonMistakes: [
        { mistake: 'धेरै कित्ता पर्छ भनेर ओभरसब्स्क्राइब्ड IPO मा १०० कित्ता (रु. १०,०००) हाल्नु।', correct: 'सर्वसाधारणका लागि निष्कासन हुने IPO मा ठ्याक्कै १० कित्ता (रु. १,०००) मात्र भर्नुहोस्।', explanation: '१० कित्ता नीति अनुसार सबैलाई १० कित्ता नपुगेसम्म कसैलाई २० कित्ता दिइँदैन।' },
        { mistake: 'आवेदन दिएपछि बैंक स्थिति (Verification Status) चेक नगर्नु।', correct: '२४ घण्टाभित्र "Application Report" हेरी स्थिति "Verified" भएको यकिन गर्नुहोस्।', explanation: 'खातामा पैसा नपुगे वा CRN गलत भए बैंकले Unverified छाडिदिन्छ र गोलाप्रथामा सामेल गरिँदैन।' },
        { mistake: 'एउटै व्यक्तिको फरक बैंकबाट २ वटा आवेदन हाल्नु।', correct: 'एउटा नागरिकता र डिम्याटबाट एउटा IPO मा केवल एकपटक मात्र आवेदन दिन मिल्छ।', explanation: 'दोहोरो आवेदन परेमा सीडीएससीको सफ्टवेयरले दुवै आवेदन स्वतः खारेज (Reject) गरिदिन्छ।' }
      ],
      definitions: [
        { term: 'C-ASBA', full: 'केन्द्रीकृत आस्वा प्रणाली', meaning: 'IPO को नतिजा नआएसम्म आफ्नै बैंक खातामा पैसा रोक्का राख्ने र सेयर परेपछि मात्र पैसा काट्ने डिजिटल प्रणाली।' },
        { term: 'CRN नम्बर', full: 'C-ASBA दर्ता नम्बर', meaning: 'आफ्नो बैंक खातालाई मेरोसेयरसँग जोड्न बैंकले ग्राहकलाई उपलब्ध गराउने गोप्य प्रमाणीकरण कोड।' },
        { term: 'आह्वानपत्र (Prospectus)', full: 'कम्पनीको सार्वजनिक विवरण पुस्तिका', meaning: 'कम्पनीको वित्तीय अवस्था, परियोजना लागत, आम्दानी प्रक्षेपण र जोखिम उल्लेख गरिएको आधिकारिक कानुनी दस्तावेज।' },
        { term: 'प्रतिसेयर नेटवर्थ', full: 'किताबी मूल्य (Book Value)', meaning: 'कम्पनीको कुल सम्पत्तिबाट ऋण घटाएर बाँकी रहने पुँजीलाई कुल सेयर संख्याले भाग गर्दा आउने प्रतिसेयर वास्तविक मूल्य।' }
      ],
      faqs: [
        { q: 'मेरोसेयरमा मेरो आवेदन "Rejected" किन भयो?', a: 'मुख्य कारणहरू: प्रमाणीकरण गर्दा खातामा पर्याप्त रकम नहुनु, गलत CRN हाल्नु, वा एउटै व्यक्तिको दोहोरो आवेदन पर्नु।' },
        { q: 'सेयर नपरेको पैसा कहिले फुकुवा (Unfreeze) हुन्छ?', a: 'धितोपत्र बोर्डको नियम अनुसार IPO बाँडफाँड भएको बढीमा ३ कार्यदिनभित्र बैंकले खाताको रोक्का रकम स्वतः फुकुवा गर्नुपर्छ।' },
        { q: 'परेको IPO कहिले बेच्न मिल्छ?', a: 'बाँडफाँड भएको केही दिनमा सीडीएससीले सेयर डिम्याटमा पठाइदिन्छ र कम्पनी नेप्सेमा सूचीकृत भएपछि ब्रोकर TMS मार्फत तत्कालै बेच्न सकिन्छ।' }
      ],
      takeaways: [
        'साधारण IPO मा सधैँ ठ्याक्कै १० कित्ता (रु. १,०००) मात्र आवेदन दिनुहोस्।',
        'कम्पनीको क्रेडिट रेटिङ र प्रतिसेयर नेटवर्थ रु. १०० भन्दा माथि भएको सुनिश्चित गर्नुहोस्।',
        'आवेदन दिएपछि बैंकबाट "Verified" भयो कि भएन मेरोसेयरमा अनिवार्य चेक गर्नुहोस्।',
        'गोलाप्रथामा धेरै रकम फ्रिज नगर्नुहोस्; बचेको पैसालाई मासिक SIP मा लगाई वास्तविक सम्पत्ति जोड्नुहोस्।',
        'परिवारका सदस्यहरूको नागरिकता, बैंक खाता, डिम्याट र मेरोसेयर विवरण दुरुस्त राख्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Compare unpredictable IPO lottery gains with consistent monthly SIP compounding.' }
    ],
    downloadableResources: [
      { title: 'Prospectus Reading Checklist for Nepal Investors (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '185 KB', href: 'assets/downloads/nepal-ipo-application-checklist.html' }
    ]
  },

  // ── C2. BROKER ACCOUNT & TMS NAVIGATION ──────────────────────────
  'broker-account-tms-navigation': {
    id: 'nepse-tms-navigation',
    slug: 'broker-account-tms-navigation',
    categorySlug: 'nepse',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practical order setup', np: '२० मिनेट TMS अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'NEPSE Trade Management System (TMS) Trading Protocols', np: 'नेपाल स्टक एक्सचेन्ज कारोबार प्रणाली निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Demat, MeroShare & CRN Setup', np: 'डिम्याट र मेरोसेयर' },
    en: {
      title: 'Opening a Broker Account & Mastering the NEPSE TMS Platform',
      oneLineSummary: 'From online KYC submission to setting collateral via connectIPS, placing limit orders, and completing T+2 EDIS share transfers.',
      summaryPoints: [
        'You can open a trading account completely online with any of Nepal\'s 50+ licensed brokerage firms using digital KYC.',
        'NEPSE trading runs through the Trade Management System (TMS) accessible at `tmsXX.nepsetms.com.np` where XX is your broker number.',
        'To buy shares, you must deposit collateral (minimum 25% via connectIPS); your buying power is calculated based on this collateral.',
        'Secondary market trades settle on T+2 (trading day plus two business days); sellers must complete EDIS transfer via MeroShare before 6:00 PM next day.',
        'Failing to transfer sold shares via MeroShare EDIS triggers a brutal 20% cash auction penalty on the gross trade value.'
      ],
      whatIsThis: 'A brokerage account gives retail investors direct secondary market access to buy and sell listed shares, debentures, and close-ended mutual funds on the Nepal Stock Exchange (NEPSE). Trading is executed through NEPSE\'s web-based Trade Management System (TMS), which connects your broker, commercial bank account, CDSC clearing house, and MeroShare Demat repository.',
      whyItMatters: 'Applying for IPOs is passive, but secondary market trading requires active execution. Hundreds of beginners in Nepal make severe, costly mistakes: placing market orders that execute at unfavorable spike prices, failing to upload collateral, or forgetting to execute EDIS on MeroShare after selling - incurring a mandatory 20% cash penalty payable to the buyer.',
      howItWorks: [
        { step: 1, title: 'Open Broker Account Online', desc: 'Visit the online portal of any licensed broker (e.g., tms58.nepsetms.com.np). Fill in personal details, upload citizenship photo, Demat confirmation slip, bank cheque photo, and complete video KYC.' },
        { step: 2, title: 'Deposit Collateral via connectIPS', desc: 'Log in to TMS. Go to "Fund Management" → "Collateral Management" → "Load Collateral". Select connectIPS, enter amount (e.g., NPR 25,000), and approve the payment. Your trading limit is typically 4x your loaded collateral (NPR 1,00,000 buying power).' },
        { step: 3, title: 'Place a Disciplined Limit Order', desc: 'Go to "Order Management" → "Buy/Sell". Enter company ticker (e.g., NABIL, SHIVM), order type "Limit", quantity, and your target price. Never use "Market" orders in volatile opening minutes.' },
        { step: 4, title: 'Settlement & EDIS Transfer (Crucial)', desc: 'If you buy, pay remaining 75% funds via connectIPS on T+2. If you sell, log into MeroShare within 24 hours, go to "My EDIS" → "Transfer Shares", select the sold scrip, and confirm OTP. This delivers the shares to the buyer.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'NEPSE TMS Trading Lifecycle: Buy vs Sell Workflows',
        headers: ['Stage', 'Buyer Workflow', 'Seller Workflow'],
        rows: [
          ['Pre-Trade Preparation', 'Load 25% Collateral via connectIPS into TMS', 'Ensure shares are settled and visible in MeroShare Demat'],
          ['Order Execution', 'Place Limit Buy order on TMS (e.g., 50 shares @ NPR 450)', 'Place Limit Sell order on TMS (e.g., 50 shares @ NPR 450)'],
          ['Trade Day (T+0)', 'Order matched; trade confirmation SMS/Email received', 'Order matched; trade confirmation SMS/Email received'],
          ['Day T+1', 'Receive net debit advice bill from broker', 'Log into MeroShare → My EDIS → Calculate WACC → Transfer Shares'],
          ['Settlement Day (T+2)', 'Pay remaining 75% trade amount; shares credited to Demat', 'Broker transfers net sales proceeds (minus fees & CGT) to bank account']
        ]
      },
      nepalContext: 'Nepal\'s stock market operates Sunday through Thursday, 11:00 AM to 3:00 PM. Pre-open session runs from 10:30 AM to 10:45 AM. The 20% auction penalty (Bole-Bhaag) is rigidly enforced by CDSC bylaws - if you sell shares you do not own, or if you forget to complete EDIS on MeroShare before clearing, 20% of the total transaction amount is deducted from your bank account and credited directly to the buyer as compensation.',
      practicalScenario: {
        persona: 'Aashish, 26, marketing officer in Kathmandu',
        income: 'NPR 52,000 / month salary',
        scenarioText: 'Aashish sold 100 shares of a hydropower company for NPR 50,000 on TMS. He thought the broker would automatically deduct the shares from his Demat. He forgot to check MeroShare.',
        solutionText: 'Because he did not execute "My EDIS" transfer on MeroShare before T+2 clearing, CDSC declared a "Closeout Short Delivery". Aashish was penalized 20% of the trade value (NPR 10,000), reducing his sales payout to NPR 40,000. He learned never to sell without immediately setting a calendar reminder to execute EDIS on MeroShare that same evening.',
        metricHighlight: 'Avoided future NPR 10,000 penalties by executing MeroShare EDIS on T+0 evening'
      },
      formula: {
        name: 'TMS Net Buying Power & Net Trade Equation',
        equation: '\\text{Buying Power} = \\text{Cash Collateral} \\times 4 \\quad | \\quad \\text{Net Payable} = (Q \\times P) + \\text{Commission} + \\text{SEBON Fee} + \\text{DP Fee}',
        variables: [
          { symbol: 'Cash Collateral', name: 'Loaded Margin Funds', desc: 'Amount deposited into broker TMS via connectIPS (counts 1:1).' },
          { symbol: '4', name: 'Leverage Multiplier', desc: 'Standard SEBON/broker multiplier allowing trading up to 4x cash collateral.' },
          { symbol: 'Q', name: 'Quantity of Shares', desc: 'Number of units purchased.' },
          { symbol: 'P', name: 'Execution Price', desc: 'Per-share execution price in Nepalese Rupees.' }
        ],
        exampleCalculation: 'Deposit NPR 25,000 cash collateral in TMS. Buying power = 25,000 * 4 = NPR 1,00,000. Buy 200 shares at NPR 400 = NPR 80,000 trade value. Broker commission (0.37%) = NPR 296, SEBON fee (0.015%) = NPR 12, DP fee = NPR 25. Total net payable = NPR 80,333.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Check Investment Growth'
      },
      commonMistakes: [
        { mistake: 'Forgetting to do MeroShare EDIS transfer after selling shares.', correct: 'Always log into MeroShare the same evening you sell and transfer the shares.', explanation: 'Failing to transfer leads to a non-negotiable 20% closeout penalty deducted from your sales proceeds.' },
        { mistake: 'Using "Market Orders" during volatile morning sessions.', correct: 'Always place "Limit Orders" where you specify the maximum price you are willing to pay.', explanation: 'Market orders can execute at the highest ask price on the depth chart, causing immediate slippage.' },
        { mistake: 'Trying to withdraw non-cash share collateral as bank cash.', correct: 'Only cash loaded via connectIPS can be refunded; share-based collateral cannot be withdrawn as cash.', explanation: 'TMS differentiates between cash collateral and stock pledged as margin.' }
      ],
      definitions: [
        { term: 'TMS', full: 'Trade Management System', meaning: 'The online browser-based order routing and trading platform provided by NEPSE to brokerage clients.' },
        { term: 'Collateral', full: 'Dharauti / Surakshyan', meaning: 'Margin deposit loaded into TMS via connectIPS granting buying power to execute stock purchases.' },
        { term: 'EDIS', full: 'Electronic Delivery Instruction Slip', meaning: 'The digital authorization in MeroShare by which a seller transfers sold shares from their Demat account to the clearing house.' },
        { term: 'Closeout Penalty', full: 'Short Delivery Auction Penalty', meaning: 'A 20% cash fine charged to a seller who fails to deliver sold shares to the buyer by settlement day.' }
      ],
      faqs: [
        { q: 'How do I withdraw my unused cash collateral from TMS?', a: 'Go to TMS → "Fund Management" → "Collateral Management" → "Collateral Refund". Submit a refund request. The broker processes and transfers it back to your bank account via connectIPS within 24-48 hours.' },
        { q: 'What are the official NEPSE trading hours?', a: 'Regular continuous trading is open from 11:00 AM to 3:00 PM, Sunday through Thursday. Pre-open matching occurs between 10:30 AM and 10:45 AM.' },
        { q: 'Can I change my registered broker in Nepal?', a: 'Yes. You can open accounts with multiple brokers simultaneously, or close your current broker account once all financial dues and share deliveries are settled.' }
      ],
      takeaways: [
        'Open your broker account online with digital KYC - no physical branch visit required.',
        'Always trade using Limit Orders to control your execution price and avoid bad fills.',
        'Load 25% cash collateral via connectIPS to activate full 4x intraday buying power.',
        'Executing MeroShare EDIS within 24 hours of selling is mandatory to prevent the 20% fine.',
        'Keep your connectIPS linked to your primary bank account for seamless margin loading and trade payouts.'
      ]
    },
    np: {
      title: 'ब्रोकर खाता खोल्ने र नेप्से TMS चलाउने पूर्ण तरिका',
      oneLineSummary: 'अनलाइन KYC दर्तादेखि connectIPS बाट कोल्याटरल लोड गर्ने, Limit अर्डर हाल्ने र T+2 मा MeroShare EDIS सेयर ट्रान्सफर गर्ने व्यावहारिक विधि।',
      summaryPoints: [
        'नेपालका ५० भन्दा बढी इजाजतप्राप्त ब्रोकर कम्पनीहरूबाट घरमै बसेर Digital KYC मार्फत अनलाइन कारोबार खाता खोल्न सकिन्छ।',
        'नेप्सेको अनलाइन कारोबार प्रणाली (TMS) `tmsXX.nepsetms.com.np` (जहाँ XX ब्रोकर नम्बर हो) मार्फत सञ्चालन हुन्छ।',
        'सेयर किन्नुअघि TMS मा connectIPS मार्फत कम्तीमा २५% धरौटी (Collateral) लोड गर्नुपर्छ, जसले ४ गुणासम्म खरिद क्षमता दिन्छ।',
        'दोस्रो बजारको कारोबार T+2 (कारोबार भएको दिन + २ कार्यदिन) मा राफसाफ हुन्छ; सेयर बेच्नेले भोलिपल्ट साँझ ६ बजेभित्र मेरोसेयर EDIS गर्नुपर्छ।',
        'सेयर बेचेपछि मेरोसेयरबाट EDIS नगरेमा कुल कारोबार रकमको २०% नगद जरिवाना (Closeout Penalty) तिर्नुपर्ने हुन्छ।'
      ],
      whatIsThis: 'ब्रोकर खाता भनेको नेपाल स्टक एक्सचेन्ज (NEPSE) मा सूचीकृत कम्पनीहरूको साधारण सेयर, ऋणपत्र र म्युचुअल फन्ड खरिद-बिक्री गर्नका लागि खोलिने आधिकारिक कारोबार खाता हो। यो कारोबार ब्रोकरको अनलाइन प्रणाली Trade Management System (TMS) मार्फत कम्प्युटर वा मोबाइलबाटै गरिन्छ।',
      whyItMatters: 'प्राथमिक बजार (IPO) भर्न सजिलो भए पनि दोस्रो बजारमा आफैँ सेयर किनबेच गर्दा धेरै नियमहरू पालना गर्नुपर्छ। नेपालमा धेरै नयाँ लगानीकर्ताले बजार खुल्ने बित्तिकै जथाभावी Market Order हालेर महँगोमा सेयर किन्ने, वा सेयर बेचेपछि मेरोसेयरमा गएर EDIS गर्न बिर्सिएर २०% नगद जरिवाना (रु. ५०,००० को सेयर बेच्दा रु. १०,००० जरिवाना) तिर्ने जस्ता गम्भीर गल्ती गर्छन्।',
      howItWorks: [
        { step: 1, title: 'ब्रोकर वेभसाइटबाट अनलाइन खाता खोल्नुहोस्', desc: 'कुनै पनि ब्रोकरको वेभसाइट (जस्तै tms58.nepsetms.com.np) मा गई व्यक्तिगत विवरण भर्नुहोस्। नागरिकता, डिम्याट विवरण, बैंक चेकको फोटो र भिडियो KYC अपलोड गर्नुहोस्।' },
        { step: 2, title: 'connectIPS बाट धरौटी (Collateral) लोड गर्नुहोस्', desc: 'TMS लगइन गरी "Fund Management" → "Collateral Management" → "Load Collateral" मा जानुहोस्। connectIPS बाट रकम (जस्तै रु. २५,०००) लोड गर्नुहोस्। यसले तपाईंलाई रु. १,००,००० सम्मको खरिद सीमा दिन्छ।' },
        { step: 3, title: 'अनुशासित रूपमा Limit Order राख्नुहोस्', desc: '"Order Management" → "Buy/Sell" मा जानुहोस्। कम्पनीको नाम, कित्ता र आफूले किन्न चाहेको मूल्य तोकेर Limit अर्डर हाल्नुहोस्। हतारिएर Market अर्डर कहिल्यै नहाल्नुहोस्।' },
        { step: 4, title: 'राफसाफ र MeroShare EDIS (अति महत्त्वपूर्ण)', desc: 'सेयर किनेको भए T+2 दिनभित्र बाँकी ७५% रकम तिर्नुहोस्। सेयर बेचेको भए सोही दिन मेरोसेयर लगइन गरी "My EDIS" मा गएर WACC हिसाब गरी सेयर ट्रान्सफर गर्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेप्से TMS कारोबार चक्र: खरिदकर्ता र बिक्रेताको कार्यतालिका',
        headers: ['चरण', 'खरिदकर्ताले गर्नुपर्ने काम', 'बिक्रेताले गर्नुपर्ने काम'],
        rows: [
          ['कारोबार पूर्व तयारी', 'connectIPS मार्फत TMS मा २५% कोल्याटरल लोड गर्ने', 'मेरोसेयर डिम्याटमा सेयर मौज्दात रहेको यकिन गर्ने'],
          ['अर्डर प्रविष्टि (TMS)', 'आफूले चाहेको मूल्य तोकेर Limit Buy अर्डर हाल्ने', 'आफूले चाहेको मूल्य तोकेर Limit Sell अर्डर हाल्ने'],
          ['कारोबार दिन (T+0)', 'अर्डर म्याच भएपछि SMS/इमेलमा कारोबार विवरण आउँछ', 'अर्डर म्याच भएपछि SMS/इमेलमा कारोबार विवरण आउँछ'],
          ['भोलिपल्ट (T+1)', 'ब्रोकरबाट बाँकी रकम भुक्तानीको बिल (Net Debit) प्राप्त हुन्छ', 'मेरोसेयर लगइन गरी My EDIS → WACC → सेयर ट्रान्सफर गर्ने'],
          ['राफसाफ दिन (T+2)', 'बाँकी रकम भुक्तानी गर्ने; सेयर डिम्याट खातामा जम्मा हुन्छ', 'ब्रोकरले कर र शुल्क कट्टी गरी बिक्री रकम बैंक खातामा पठाइदिन्छ']
        ]
      },
      nepalContext: 'नेपालमा सेयर बजार आइतबारदेखि बिहीबारसम्म बिहान ११:०० बजेदेखि दिउँसो ३:०० बजेसम्म खुल्छ। बिहान १०:३० देखि १०:४५ सम्म Pre-Open सेसन हुन्छ। नेपालमा २०% क्लोजआउट जरिवाना सम्बन्धी कडा नियम छ - यदि कसैले सेयर बेचेर समयमै मेरोसेयरबाट ट्रान्सफर गरेन भने कुल कारोबार रकमको २०% जरिवाना काटेर खरिदकर्तालाई क्षतिपूर्ति दिइन्छ।',
      practicalScenario: {
        persona: 'आशिष, २६, काठमाडौँका मार्केटिङ अधिकृत',
        income: 'मासिक तलब रु. ५२,000',
        scenarioText: 'आशिषले नेप्सेमा रु. ५०,००० बराबरको १०० कित्ता सेयर बेचे। ब्रोकरले आफैँ डिम्याटबाट सेयर काट्छ होला भन्ने ठानेर उनले मेरोसेयर खोल्दै खोलेनन्।',
        solutionText: 'T+2 सम्म सेयर ट्रान्सफर नगरेकाले सीडीएससीले क्लोजआउट गरी उनको बिक्री रकमबाट २०% (रु. १०,०००) जरिवाना काट्यो र उनले रु. ४०,००० मात्र पाए। त्यसपछि उनले सेयर बेचेकै साँझ मेरोसेयर खोलेर EDIS गरिहाल्ने बानी बसाले र फेरि कहिल्यै जरिवाना तिर्नु परेन।',
        metricHighlight: 'सेयर बेचेकै साँझ मेरोसेयर EDIS गर्ने बानीले रु. १०,००० को जरिवानाबाट मुक्ति'
      },
      formula: {
        name: 'TMS खरिद क्षमता र कुल कारोबार रकम हिसाब',
        equation: '\\text{खरिद क्षमता} = \\text{नगद कोल्याटरल} \\times ४ \\quad | \\quad \\text{कुल भुक्तानी} = (Q \\times P) + \\text{ब्रोकर कमिसन} + \\text{SEBON शुल्क} + \\text{DP शुल्क}',
        variables: [
          { symbol: 'नगद कोल्याटरल', name: 'जम्मा गरिएको धरौटी', desc: 'connectIPS मार्फत TMS मा हालिएको नगद धरौटी रकम।' },
          { symbol: '४', name: 'मार्जिन गुणक', desc: 'ब्रोकरले नगद धरौटीको ४ गुणासम्म सेयर किन्न दिने कानुनी सीमा।' },
          { symbol: 'Q', name: 'सेयर कित्ता संख्या', desc: 'खरिद गरिएको कुल सेयर संख्या।' },
          { symbol: 'P', name: 'कारोबार मूल्य', desc: 'नेप्सेमा सेयर म्याच भएको प्रति कित्ता दर।' }
        ],
        exampleCalculation: 'TMS मा रु. २५,००० नगद कोल्याटरल लोड गर्दा: खरिद क्षमता = २५,००० * ४ = रु. १,००,०००। प्रति कित्ता रु. ४०० का दरले २०० कित्ता किन्दा = रु. ८०,०००। ब्रोकर कमिसन (०.३७%) = रु. २९६, सेबोन शुल्क = रु. १२, डीपी शुल्क = रु. २५। कुल तिर्नुपर्ने रकम = रु. ८०,३३३।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'लगानी वृद्धि क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'सेयर बेचेपछि मेरोसेयरमा गएर EDIS गर्न बिर्सिनु।', correct: 'सेयर बिक्री भएको दिनको साँझ नै मेरोसेयर लगइन गरी EDIS ट्रान्सफर गर्नुहोस्।', explanation: 'समयमा सेयर ट्रान्सफर नगर्दा कुल बिक्री मूल्यको २०% नगद जरिवाना सिधै काटिन्छ।' },
        { mistake: 'बजार खुल्ने बित्तिकै आत्तिएर Market Order हाल्नु।', correct: 'सधैँ आफूले चाहेको निश्चित मूल्य तोकेर Limit Order मात्र प्रयोग गर्नुहोस्।', explanation: 'मार्केट अर्डरले बजारको अस्वाभाविक महँगो मूल्यमा सेयर किनाइदिन सक्छ।' },
        { mistake: 'कम्पनीको टिकर कोड नहेरी मिल्दोजुल्दो नामको गलत कम्पनी किन्नु।', correct: 'अर्डर हाल्नुअघि कम्पनीको आधिकारिक टिकर (जस्तै NABIL, SCB, HATHY) राम्रोसँग जाँच्नुहोस्।', explanation: 'कतिपय कम्पनीका नाम उस्तै सुनिने तर वित्तीय अवस्था आकाश-पाताल फरक हुन सक्छ।' }
      ],
      definitions: [
        { term: 'TMS (टिएमएस)', full: 'ट्रेड म्यानेजमेन्ट सिस्टम', meaning: 'नेप्सेले ब्रोकरहरूमार्फत लगानीकर्तालाई अनलाइन सेयर खरिद-बिक्री गर्न उपलब्ध गराएको सफ्टवेयर।' },
        { term: 'कोल्याटरल (Collateral)', full: 'कारोबार धरौटी', meaning: 'सेयर किन्नुपूर्व ब्रोकरको प्रणालीमा connectIPS मार्फत जम्मा गर्नुपर्ने सुरक्षण रकम।' },
        { term: 'EDIS (इडीआइएस)', full: 'विद्युतीय सेयर हस्तान्तरण आदेश', meaning: 'मेरोसेयर पोर्टलबाट आफूले बेचेको सेयर खरिदकर्ताको खातामा पठाउन दिइने विद्युतीय स्वीकृति।' },
        { term: 'क्लोजआउट जरिवाना (Closeout)', full: 'सेयर दाखिला नगर्दाको जरिवाना', meaning: 'सेयर बेचेर राफसाफ मितिमा हस्तान्तरण नगर्दा लाग्ने २०% अनिवार्य नगद जरिवाना।' }
      ],
      faqs: [
        { q: 'TMS मा हालेको कोल्याटरल पैसा कसरी फिर्ता लिने?', a: 'TMS को "Fund Management" → "Collateral Management" → "Collateral Refund" मा गएर फिर्ता माग गर्नुहोस्। ब्रोकरले २४ देखि ४८ घण्टाभित्र connectIPS मार्फत तपाईंको बैंकमा पठाइदिन्छ।' },
        { q: 'नेप्से बजार खुल्ने समय कुन हो?', a: 'आइतबारदेखि बिहीबारसम्म बिहान ११:०० बजेदेखि दिउँसो ३:०० बजेसम्म नियमित कारोबार हुन्छ। बिहान १०:३० देखि १०:४५ सम्म Pre-Open सत्र चल्छ।' },
        { q: 'के एउटा व्यक्तिका दुईवटा ब्रोकर खाता हुन सक्छन्?', a: 'सकिन्छ। एउटै डिम्याट नम्बर प्रयोग गरेर फरक-फरक ब्रोकर कम्पनीहरूमा छुट्टाछुट्टै TMS खाता खोल्न नेपालको कानुनले छुट दिएको छ।' }
      ],
      takeaways: [
        'अनलाइन KYC मार्फत भौतिक रूपमा ब्रोकर कार्यालय नगई घरमै बसेर खाता खोल्नुहोस्।',
        'सेयर किनबेच गर्दा सधैँ Limit Order प्रयोग गरी मूल्य नियन्त्रणमा राख्नुहोस्।',
        'connectIPS बाट २५% नगद कोल्याटरल लोड गरी ४ गुणासम्म खरिद क्षमता प्राप्त गर्नुहोस्।',
        'सेयर बेचेकै दिन साँझ मेरोसेयर EDIS ट्रान्सफर गरी २०% जरिवानाबाट जोगिनुहोस्।',
        'आफ्नो बैंक खाता र connectIPS सधैँ दुरुस्त राखी सहज वित्तीय कारोबार सुनिश्चित गर्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate how disciplined regular equity investments grow over time.' }
    ],
    downloadableResources: [
      { title: 'NEPSE TMS Beginner Trading Manual (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '240 KB', href: 'assets/downloads/nepse-first-time-investor-checklist.html' }
    ]
  },

  // ── C3. BROKER COMMISSIONS & TRANSACTION FEES ─────────────────────
  'broker-commissions-sebon-fees-nepal': {
    id: 'nepse-broker-commissions',
    slug: 'broker-commissions-sebon-fees-nepal',
    categorySlug: 'nepse',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min calculation', np: '१५ मिनेट हिसाब मिलान' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'SEBON Stock Broker Commission Rules & Finance Act 2081', np: 'धितोपत्र बोर्ड दलाल कमिसन नियमावली र आर्थिक ऐन २०८१ अनुसार समीक्षित' },
    prerequisites: { en: 'Broker Account & TMS Navigation', np: 'ब्रोकर खाता र TMS' },
    en: {
      title: 'Broker Commissions, SEBON Fees & Taxes in Nepal: The Complete Math',
      oneLineSummary: 'Calculate the exact friction cost on every NEPSE trade - tiered broker rates (0.27%-0.40%), SEBON regulatory levy, DP fee, and Capital Gains Tax.',
      summaryPoints: [
        'Stock trading in Nepal incurs four mandatory fees: Broker Commission, SEBON Regulatory Fee, DP Charge, and Capital Gains Tax (on profit).',
        'Broker commission follows a tiered slab: 0.40% for trades up to NPR 50,000, decreasing progressively to 0.27% for trades over NPR 1 Crore.',
        'SEBON charges a flat regulatory fee of 0.015% on both buy and sell transactions.',
        'DP (Depository Participant) fee is a flat NPR 25 charged per company transaction, regardless of volume.',
        'Capital Gains Tax (CGT) on shares is 5% for long-term investors (held over 365 days) and 7.5% for short-term traders (held 365 days or less).'
      ],
      whatIsThis: 'Every transaction executed on the Nepal Stock Exchange entails regulatory, intermediary, and statutory costs. When you buy shares, you pay the purchase price plus broker commission, SEBON fees, and DP charges. When you sell shares, these transaction charges plus applicable Capital Gains Tax (CGT) are deducted from your gross proceeds before the net balance hits your bank account.',
      whyItMatters: 'Frequent retail swing traders often celebrate small 2%-3% price gains without realizing that round-trip friction costs (buying fees + selling fees + DP fees + CGT) can consume 1.5% to 2.5% of the total trade. Understanding the exact fee schedule prevents you from overtrading and turning profitable moves into net losses.',
      howItWorks: [
        { step: 1, title: 'Identify Applicable Broker Commission Slab', desc: 'SEBON mandates progressive broker commission: Up to NPR 50,000: 0.40% | NPR 50,001 to 5,00,000: 0.37% | NPR 5,00,001 to 20,00,000: 0.34% | NPR 20,00,001 to 1,00,00,000: 0.30% | Above NPR 1 Crore: 0.27%.' },
        { step: 2, title: 'Calculate Fixed Regulatory Charges', desc: 'Multiply the transaction value by 0.015% (SEBON fee). Add flat NPR 25 for CDSC/DP settlement charges per company.' },
        { step: 3, title: 'Calculate Total Buying Cost', desc: 'Buying Cost = Share Price × Quantity + Broker Commission + SEBON Fee + NPR 25 DP Fee. This total becomes your official WACC (Weighted Average Cost of Capital) in MeroShare.' },
        { step: 4, title: 'Calculate Selling Deductions & CGT', desc: 'Selling Net = (Gross Sale Value) − Broker Commission − SEBON Fee − NPR 25 DP Fee − CGT. If you make a capital gain, CGT is 5% (if holding > 365 days) or 7.5% (if holding ≤ 365 days).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Official SEBON Broker Commission Tier Slabs (Equity Shares)',
        headers: ['Transaction Value Slab', 'Broker Commission Rate', 'Commission on Maximum Slab Value', 'Effective Friction Rate'],
        rows: [
          ['Up to NPR 50,000', '0.40%', 'NPR 200 (on NPR 50,000)', '~0.46% (including SEBON + DP)'],
          ['NPR 50,001 - NPR 5,00,000', '0.37%', 'NPR 1,850 (on NPR 5,00,000)', '~0.39%'],
          ['NPR 5,00,001 - NPR 20,00,000', '0.34%', 'NPR 6,800 (on NPR 20,00,000)', '~0.36%'],
          ['NPR 20,00,001 - NPR 1,00,00,000', '0.30%', 'NPR 30,000 (on NPR 1 Crore)', '~0.32%'],
          ['Above NPR 1,00,00,000 (1 Crore+)', '0.27%', 'Progressive', '~0.29%']
        ]
      },
      nepalContext: 'In Nepal, Capital Gains Tax on secondary market equity trading is treated as a final withholding tax for individual retail investors. The Finance Act divides holding periods strictly at 365 days. If you sell a share on day 364, you pay 7.5% on net profits; if you wait until day 366, your tax drops to 5% - saving 33% in tax liability. For institutional investors, CGT is 10%.',
      practicalScenario: {
        persona: 'Binita, 34, business journalist in Kathmandu',
        income: 'NPR 60,000 / month salary',
        scenarioText: 'Binita bought 100 shares of a bank at NPR 300 (total NPR 30,000) and sold them 6 months later at NPR 330 (total NPR 33,000). She expected an exact NPR 3,000 profit.',
        solutionText: 'She calculated the full friction: Buy commission (0.40% = NPR 120), SEBON buy (NPR 4.50), DP buy (NPR 25) = Total buy cost NPR 30,149.50. Sale commission (0.40% = NPR 132), SEBON sell (NPR 4.95), DP sell (NPR 25). Gross profit = NPR 2,688.55. Short-term CGT (7.5%) = NPR 201.64. Net profit credited = NPR 2,486.91.',
        metricHighlight: 'Friction fees and tax accounted for NPR 513.09 (17.1% of gross gain)'
      },
      formula: {
        name: 'Complete Round-Trip Trading Cost Formula',
        equation: '\\text{Net Profit} = (S_{\\text{gross}} - B_{\\text{gross}}) - (C_{\\text{buy}} + C_{\\text{sell}}) - (F_{\\text{sebon}} \\times 2) - 50 - \\text{CGT}',
        variables: [
          { symbol: 'S_gross', name: 'Gross Sale Proceeds', desc: 'Quantity of shares sold multiplied by selling price.' },
          { symbol: 'B_gross', name: 'Gross Purchase Cost', desc: 'Quantity of shares bought multiplied by purchase price.' },
          { symbol: 'C_buy / C_sell', name: 'Broker Commissions', desc: 'Tiered commission (0.27% to 0.40%) on purchase and sale transactions.' },
          { symbol: '50', name: 'Combined DP Charges', desc: 'NPR 25 charged on buy + NPR 25 charged on sell.' },
          { symbol: 'CGT', name: 'Capital Gains Tax', desc: '5% (holding > 365 days) or 7.5% (holding <= 365 days) applied only on net capital gain.' }
        ],
        exampleCalculation: 'Buy NPR 1,00,000, sell at NPR 1,20,000 after 400 days. Broker fees = 0.37% * 100K + 0.37% * 120K = NPR 370 + 444 = NPR 814. SEBON fees = 0.015% * 220K = NPR 33. DP fees = NPR 50. Net gain before tax = NPR 19,103. Long-term CGT (5%) = NPR 955.15. Final in bank = NPR 18,147.85.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Compare Investment Returns'
      },
      commonMistakes: [
        { mistake: 'Selling shares on Day 360 instead of waiting for Day 366.', correct: 'Holding for 366 days reduces your Capital Gains Tax from 7.5% to 5.0%.', explanation: 'Waiting just 6 more days saves 33% of your tax burden under Nepal\'s 365-day holding threshold.' },
        { mistake: 'Buying micro-lots of 10 shares across multiple transactions.', correct: 'Consolidate purchases into larger lots to minimize the impact of the flat NPR 25 DP fee.', explanation: 'Paying NPR 25 DP fee on a NPR 1,500 micro-trade adds an immediate 1.67% deadweight loss.' },
        { mistake: 'Forgetting that CGT is only charged on profitable trades.', correct: 'If you sell at a loss, your Capital Gains Tax is NPR 0; only broker, SEBON, and DP fees apply.', explanation: 'Taxes only apply to positive net capital appreciation after deducting statutory purchase costs.' }
      ],
      definitions: [
        { term: 'Broker Commission', full: 'Dalali Shulka', meaning: 'The fee charged by SEBON-licensed stockbrokers for matching buyers and sellers on the NEPSE exchange.' },
        { term: 'SEBON Fee', full: 'Dhitopatra Board Niyamak Shulka', meaning: 'A 0.015% regulatory charge levied by the Securities Board of Nepal on all exchange trades.' },
        { term: 'DP Charge', full: 'Nikshep Sadasya Shulka', meaning: 'A flat NPR 25 fee per company per transaction paid to CDSC and depository participants for electronic share movement.' },
        { term: 'Capital Gains Tax (CGT)', full: 'Poonjigat Labh Kar', meaning: 'Tax levied on the net profit realized from the sale of shares: 5% for long-term and 7.5% for short-term holdings.' }
      ],
      faqs: [
        { q: 'Is Capital Gains Tax deducted automatically by the broker?', a: 'Yes. When you calculate WACC in MeroShare and confirm your holding period, TMS automatically calculates and withholds CGT before transferring your payout.' },
        { q: 'Are there any hidden charges on NEPSE transactions?', a: 'No. The fees are strictly limited to Broker Commission, 0.015% SEBON fee, NPR 25 DP fee, and CGT on profit. No other charges can legally be levied.' },
        { q: 'What is the minimum broker commission for small trades?', a: 'Under SEBON rules, the minimum broker commission per transaction is NPR 10, even if the percentage calculation yields a lower number.' }
      ],
      takeaways: [
        'Total round-trip trading friction on NEPSE typically ranges between 0.8% and 1.5% plus CGT.',
        'Hold shares for more than 365 days to lower your Capital Gains Tax from 7.5% to 5.0%.',
        'Avoid micro-transactions where the flat NPR 25 DP fee becomes a significant percentage of trade value.',
        'Calculate WACC accurately in MeroShare before transferring shares to ensure correct CGT calculation.',
        'Day-trading small price fluctuations is difficult in Nepal due to the combined impact of commission slabs and taxes.'
      ]
    },
    np: {
      title: 'नेपालमा ब्रोकर कमिसन, SEBON शुल्क र पुँजीगत लाभकरको पूर्ण हिसाब',
      oneLineSummary: 'नेप्सेमा सेयर किनबेच गर्दा लाग्ने ब्रोकर कमिसन (०.२७%-०.४०%), सेबोन शुल्क, DP शुल्क र पुँजीगत लाभकर (CGT) को यथार्थ हिसाब बुझ्नुहोस्।',
      summaryPoints: [
        'नेपालमा सेयर किनबेच गर्दा चारवटा अनिवार्य शुल्क लाग्छन्: ब्रोकर कमिसन, धितोपत्र बोर्ड (SEBON) शुल्क, DP शुल्क र नाफा भएको खण्डमा पुँजीगत लाभकर।',
        'ब्रोकर कमिसन कारोबार रकम अनुसार तहगत (Slab) हुन्छ: रु. ५०,००० सम्म ०.४०% देखि घट्दै रु. १ करोडभन्दा माथि ०.२७% सम्म।',
        'धितोपत्र बोर्डले सेयर खरिद र बिक्री दुवैमा ०.०१५% को दरले नियमन शुल्क लिन्छ।',
        'सीडीएससी र डीपी शुल्क बापत प्रति कम्पनी कारोबार एकमुष्ट रु. २५ निश्चित शुल्क लाग्छ।',
        'पुँजीगत लाभकर (CGT): ३६५ दिनभन्दा बढी सेयर होल्ड गरेर बेच्दा ५% र ३६५ दिन वा सोभन्दा कम होल्ड गर्दा ७.५% लाग्छ।'
      ],
      whatIsThis: 'नेपाल स्टक एक्सचेन्ज (NEPSE) मा सेयर किनबेच गर्दा लाग्ने सम्पूर्ण सेवा शुल्क, नियमकीय दस्तुर र सरकारी करहरूको विवरण नै कारोबार लागत हो। सेयर किन्दा खरिद मूल्यमा ब्रोकर कमिसन, सेबोन शुल्क र DP शुल्क थपिन्छ। सेयर बेच्दा यी सम्पूर्ण शुल्कहरू र भएको नाफामा लाग्ने पुँजीगत लाभकर कट्टी गरी बाँकी रकम मात्र बैंक खातामा आउँछ।',
      whyItMatters: 'छोटो समयमा सेयर किनबेच गर्ने धेरै साना लगानीकर्ताहरू २-३% मूल्य बढ्दा नाफा भयो भनेर रमाउँछन्, तर किनबेच दुवैतर्फ लाग्ने ब्रोकर कमिसन, DP शुल्क र लाभकरले नै १.५% देखि २.५% खाइसकेको हुन्छ। सम्पूर्ण शुल्कको सही हिसाब थाहा नहुँदा नाफा सोचेको कारोबार पनि घाटामा परिणत हुन सक्छ।',
      howItWorks: [
        { step: 1, title: 'ब्रोकर कमिसनको स्ल्याब पहिचान गर्नुहोस्', desc: 'धितोपत्र बोर्डको नियम अनुसार: रु. ५०,००० सम्म: ०.४०% | रु. ५०,००१ देखि ५ लाख: ०.३७% | रु. ५ लाख १ देखि २० लाख: ०.३४% | रु. २० लाख १ देखि १ करोड: ०.३०% | रु. १ करोडभन्दा माथि: ०.२७%।' },
        { step: 2, title: 'नियमकीय र DP शुल्क जोड्नुहोस्', desc: 'कुल कारोबार रकमको ०.०१५% सेबोन शुल्क र प्रति कम्पनी एकमुष्ट रु. २५ DP शुल्क लाग्छ।' },
        { step: 3, title: 'खरिद गर्दाको कुल लागत निकाल्नुहोस्', desc: 'खरिद लागत = सेयर मूल्य + ब्रोकर कमिसन + सेबोन शुल्क + रु. २५ DP शुल्क। यो कुल रकम नै तपाईंको मेरोसेयरको आधिकारिक WACC बन्दछ।' },
        { step: 4, title: 'बिक्री गर्दाको लाभकर (CGT) हिसाब गर्नुहोस्', desc: 'यदि नाफा भएको छ भने: ३६५ दिन कटेको भए खुद नाफामा ५% र ३६५ दिन नपुगेको भए ७.५% पुँजीगत लाभकर ब्रोकरले स्वतः कट्टी गर्छ। घाटा भएमा लाभकर शून्य हुन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपाल धितोपत्र बोर्ड (SEBON) द्वारा निर्धारित ब्रोकर कमिसन स्ल्याब',
        headers: ['कारोबार रकमको दायरा', 'ब्रोकर कमिसन दर', 'अधिकतम सीमामा लाग्ने कमिसन', 'कुल प्रभावकारी लागत'],
        rows: [
          ['रु. ५०,००० सम्म', '०.४०%', 'रु. २०० (रु. ५०,००० को कारोबारमा)', '~०.४६% (SEBON र DP सहित)'],
          ['रु. ५०,००१ देखि रु. ५,००,०००', '०.३७%', 'रु. १,८५० (रु. ५ लाखको कारोबारमा)', '~०.३९%'],
          ['रु. ५,००,००१ देखि रु. २०,००,०००', '०.३४%', 'रु. ६,८०० (रु. २० लाखको कारोबारमा)', '~०.३६%'],
          ['रु. २०,००,००१ देखि रु. १,००,००,०००', '०.३०%', 'रु. ३०,००० (रु. १ करोडको कारोबारमा)', '~०.३२%'],
          ['रु. १ करोडभन्दा माथि', '०.२७%', 'प्रगतिशील दर', '~०.२९%']
        ]
      },
      nepalContext: 'नेपालमा व्यक्तिगत लगानीकर्ताका लागि सेयर कारोबारमा लाग्ने पुँजीगत लाभकर (CGT) अन्तिम कर (Final Withholding Tax) मानिन्छ। आर्थिक ऐन अनुसार ३६५ दिनको सीमा निकै महत्त्वपूर्ण छ। यदि तपाईंले ३६४ औँ दिनमा सेयर बेच्नुभयो भने ७.५% कर तिर्नुपर्छ, तर दुई दिन पर्खेर ३६६ औँ दिनमा बेच्नुभयो भने कर घटेर ५% मा झर्छ - जसले कर दायित्व ३३% ले घटाइदिन्छ। संस्थागत लगानीकर्ताका लागि यो कर १०% छ।',
      practicalScenario: {
        persona: 'बिनिता, ३४, काठमाडौँकी आर्थिक पत्रकार',
        income: 'मासिक तलब रु. ६०,000',
        scenarioText: 'बिनिताले प्रति कित्ता रु. ३०० मा १०० कित्ता सेयर किनिन् (रु. ३०,०००) र ६ महिनापछि रु. ३३० मा बेचिन (रु. ३३,०००)। उनले ठ्याक्कै रु. ३,००० नाफा हुने अपेक्षा गरेकी थिइन्।',
        solutionText: 'उनले सम्पूर्ण शुल्क हिसाब गरिन्: किन्दाको कमिसन रु. १२० + सेबोन रु. ४.५० + डीपी रु. २५ = कुल खरिद लागत रु. ३०,१४९.५०। बेच्दाको कमिसन रु. १३२ + सेबोन रु. ४.९५ + डीपी रु. २५। वास्तविक नाफा = रु. २,६८८.५५। छोटो अवधिको लाभकर (७.५%) = रु. २०१.६४। बैंकमा प्राप्त खुद रकम = रु. २,४८६.९१।',
        metricHighlight: 'शुल्क र करले कुल नाफाको रु. ५१३.०९ (१७.१%) हिस्सा लियो'
      },
      formula: {
        name: 'सेयर कारोबारको खुद नाफा हिसाब सूत्र',
        equation: '\\text{खुद नाफा} = (S_{\\text{बिक्री}} - B_{\\text{खरिद}}) - (C_{\\text{किन}} + C_{\\text{बेच}}) - (F_{\\text{सेबोन}} \\times २) - ५० - \\text{लाभकर}',
        variables: [
          { symbol: 'S_बिक्री', name: 'कुल बिक्री रकम', desc: 'बिक्री गरिएको कित्ता संख्या गुणा प्रति कित्ता बिक्री मूल्य।' },
          { symbol: 'B_खरिद', name: 'कुल खरिद रकम', desc: 'खरिद गरिएको कित्ता संख्या गुणा प्रति कित्ता खरिद मूल्य।' },
          { symbol: 'C_किन / C_बेच', name: 'ब्रोकर कमिसन', desc: 'खरिद र बिक्री दुवै पटक लाग्ने तहगत ब्रोकर कमिसन (०.२७% देखि ०.४०%)।' },
          { symbol: '५०', name: 'जम्मा DP शुल्क', desc: 'किन्दा रु. २५ र बेच्दा रु. २५ गरी कुल रु. ५० निश्चित शुल्क।' },
          { symbol: 'लाभकर', name: 'पुँजीगत लाभकर (CGT)', desc: 'खुद नाफामा मात्र लाग्ने ५% (३६५ दिन कटेको) वा ७.५% (३६५ दिन नकटेको) कर।' }
        ],
        exampleCalculation: 'रु. १ लाखमा किनेको सेयर ४०० दिनपछि रु. १ लाख २० हजारमा बेचियो। ब्रोकर शुल्क = ०.३७% * १ लाख + ०.३७% * १.२ लाख = रु. ३७० + ४४४ = रु. ८१४। सेबोन शुल्क = रु. ३३। डीपी शुल्क = रु. ५०। कर अघिको नाफा = रु. १९,१०३। ५% लाभकर = रु. ९५५.१५। बैंकमा आउने खुद नाफा = रु. १८,१४७.८५।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'लगानी प्रतिफल क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: '३६० औँ दिनमा हतारिएर सेयर बेच्नु र ७.५% कर तिर्नु।', correct: 'कम्तीमा ३६६ दिन पुर्‍याएर बेच्दा पुँजीगत लाभकर ५% मा झर्छ।', explanation: 'केही दिन मात्र पर्खिँदा सरकारी करमा सीधै ३३% बचत हुन्छ।' },
        { mistake: '१०-१० कित्ता गरी सानो-सानो कारोबार गर्नु।', correct: 'एकपटकमा कम्तीमा रु. १०,००० भन्दा माथिको कारोबार गर्नुहोस् ताकि रु. २५ को DP शुल्कको भार कम परोस्।', explanation: 'रु. १,५०० को कारोबारमा रु. २५ शुल्क लाग्नु भनेको सीधै १.६७% अनावश्यक नोक्सानी हो।' },
        { mistake: 'घाटामा सेयर बेच्दा पनि सरकारले कर काट्छ भन्ने सोच्नु।', correct: 'पुँजीगत लाभकर केवल खुद नाफा भएको अवस्थामा मात्र लाग्छ; घाटामा कर शून्य हुन्छ।', explanation: 'घाटा हुँदा ब्रोकर कमिसन र सेवा शुल्क मात्र लाग्छ, लाभकर काटिँदैन।' }
      ],
      definitions: [
        { term: 'ब्रोकर कमिसन', full: 'दलाल दस्तुर', meaning: 'नेप्सेमा सेयर किनबेचको मध्यस्थता गरे बापत इजाजतप्राप्त ब्रोकरले पाउने कानुनी शुल्क।' },
        { term: 'SEBON शुल्क', full: 'धितोपत्र बोर्ड नियमन शुल्क', meaning: 'धितोपत्र बजार नियमन बापत SEBON ले लिने कुल कारोबारको ०.०१५% शुल्क।' },
        { term: 'DP शुल्क', full: 'निक्षेप सदस्य सेवा शुल्क', meaning: 'सीडीएससी र डिम्याट खाता सञ्चालकलाई प्रति कम्पनी कारोबार बापत तिर्नुपर्ने निश्चित रु. २५ दस्तुर।' },
        { term: 'पुँजीगत लाभकर (CGT)', full: 'सम्पत्ति बिक्रीको नाफामा लाग्ने कर', meaning: 'सेयर बेचेर भएको खुद नाफामा सरकारलाई तिर्नुपर्ने ५% वा ७.५% अन्तिम कर।' }
      ],
      faqs: [
        { q: 'के ब्रोकरले पुँजीगत लाभकर सीधै काटेर राख्छ?', a: 'हो। मेरोसेयरमा WACC हिसाब गरेपछि TMS ले लाभकर स्वतः हिसाब गरी कर काटेर बाँकी रकम मात्र तपाईंको बैंक खातामा पठाउँछ।' },
        { q: 'नेप्सेमा सेयर किन्दा कुनै लुकेको शुल्क हुन्छ?', a: 'हुँदैन। ब्रोकर कमिसन, ०.०१५% सेबोन शुल्क र रु. २५ DP बाहेक कुनै पनि अतिरिक्त शुल्क लिन कानुनतः पाइँदैन।' },
        { q: 'सानो कारोबारमा न्यूनतम ब्रोकर कमिसन कति हो?', a: 'धितोपत्र बोर्डको नियम अनुसार जतिसुकै सानो कारोबार भए पनि न्यूनतम ब्रोकर कमिसन रु. १० लाग्दछ।' }
      ],
      takeaways: [
        'नेप्सेमा सेयर किनबेच गर्दा लाग्ने कुल कारोबार लागत औसत ०.८% देखि १.५% प्लस लाभकर हुन्छ।',
        '३६५ दिनभन्दा बढी होल्ड गर्दा लाभकर ७.५% बाट घटेर ५.०% मा झर्छ।',
        'अति सानो कित्तामा बारम्बार किनबेच नगर्नुहोस्, जसले गर्दा रु. २५ को DP शुल्कले नाफा नखाओस्।',
        'मेरोसेयरमा सही WACC हिसाब गरी कानुन सम्मत लाभकर मात्र तिर्नुहोस्।',
        'दैनिक २-३% को उतारचढावमा कारोबार गर्दा ब्रोकर शुल्क र करले अधिकांश नाफा समाप्त पार्न सक्छ।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate long-term post-tax compounding returns.' }
    ],
    downloadableResources: [
      { title: 'SEBON Broker Commission & Tax Slab Sheet (PDF)', type: 'PDF Sheet', format: 'PDF Document', size: '160 KB', href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html' }
    ]
  },

  // ── C4. HOW TO READ QUARTERLY REPORTS IN NEPAL ───────────────────
  'how-to-read-quarterly-report-nepal': {
    id: 'nepse-quarterly-report',
    slug: 'how-to-read-quarterly-report-nepal',
    categorySlug: 'nepse',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '11 min read', np: '११ मिनेट पढाइ' },
    masteryTime: { en: '25 min financial analysis', np: '२५ मिनेट वित्तीय विश्लेषण' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'NRB Unified Directives & NFRS Reporting Standards', np: 'नेपाल राष्ट्र बैंक एकीकृत निर्देशन र NFRS वित्तीय मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'What is Investing? & Broker Account Navigation', np: 'लगानी के हो? र ब्रोकर खाता' },
    en: {
      title: 'How to Read a Nepali Company Quarterly Financial Report (EPS, BVPS, NPL)',
      oneLineSummary: 'Decode unaudited Q1-Q4 reports published in national dailies - isolate true operational earnings from accounting adjustments and bad loans.',
      summaryPoints: [
        'Listed companies in Nepal must publish unaudited quarterly financial statements within 30 days after each quarter ends (Ashwin, Poush, Chaitra, Ashadh).',
        'Annualized Earnings Per Share (EPS) shows how many rupees of net profit the company earns per NPR 100 share over a full 12-month period.',
        'Book Value Per Share (BVPS / Net Worth) represents the liquidation equity value supporting each share; market price divided by BVPS yields the P/B ratio.',
        'Non-Performing Loans (NPL / Kharab Karja) in banks must strictly remain below NRB\'s 5.0% threshold; rising NPL forces heavy provisioning that crushes net profit.',
        'Distributable Profit (Wandanchhyam Munafe) reveals the real cash available to pay cash dividends - often very different from NFRS accounting net profit.'
      ],
      whatIsThis: 'Every quarter, all commercial banks, development banks, finance companies, microfinances, insurance companies, and hydropower firms listed on NEPSE publish unaudited financial reports in national newspapers and on their websites. These reports contain a condensed Balance Sheet, Profit & Loss Account, and key financial ratios governed by Nepal Financial Reporting Standards (NFRS).',
      whyItMatters: 'Retail investors in Nepal often buy shares based solely on rumors or rising prices, discovering too late that a company\'s bad loans spiked to 7% or that its distributable profit is negative due to heavy regulatory impairment charges. Reading the quarterly report allows you to evaluate genuine financial health before risking your hard-earned savings.',
      howItWorks: [
        { step: 1, title: 'Check Annualized EPS & PE Ratio', desc: 'Look at the bottom ratio box. For Q2 (half-year) reports, the published net profit represents 6 months. To annualize: EPS = (Net Profit / Paid-up Capital) × 2. A commercial bank with annualized EPS of NPR 22 trading at NPR 330 has a healthy P/E ratio of 15.' },
        { step: 2, title: 'Inspect Distributable Profit vs Net Profit', desc: 'Under NFRS accounting, net profit includes paper adjustments and accrued interest. Flip to the "Statement of Distributable Profit". If net profit is NPR 2 Billion but distributable profit is negative NPR 50 Crore, the bank CANNOT pay cash dividends this year.' },
        { step: 3, title: 'Examine NPL (Non-Performing Loans) & CAR', desc: 'For BFIs (Banks and Financial Institutions), check Non-Performing Loans (NPL). If NPL exceeds 4.0%-5.0%, the bank is under severe stress and must freeze dividend distributions. Capital Adequacy Ratio (CAR) must exceed NRB\'s minimum 11.0%.' },
        { step: 4, title: 'Analyze Cost of Funds & Base Rate', desc: 'Compare the Cost of Funds and Base Rate against peers. A bank with a lower Cost of Funds (e.g., 5.5% vs 7.0%) possesses a competitive edge in issuing cheaper loans while maintaining wider Net Interest Margins (NIM).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Key Financial Health Benchmarks for Nepali Commercial Banks (Quarterly Reports)',
        headers: ['Financial Indicator', 'Healthy / Strong Zone', 'Watchlist / Average Zone', 'Danger / High-Risk Zone'],
        rows: [
          ['Annualized EPS', 'NPR 18 - NPR 28+ per share', 'NPR 12 - NPR 17 per share', 'Below NPR 10 per share or negative'],
          ['Price-to-Earnings (P/E)', '12x - 18x (Fair value)', '19x - 25x', 'Above 30x (Overvalued for banking sector)'],
          ['Non-Performing Loans (NPL)', 'Under 2.0% (Clean asset quality)', '2.1% - 3.8% (Manageable stress)', 'Above 4.0% - 5.0% (Approaching NRB penalty cap)'],
          ['Capital Adequacy Ratio (CAR)', 'Above 12.5% (Strong buffer)', '11.1% - 12.4% (Compliant)', 'Below 11.0% (Breaches NRB Basel III mandate)'],
          ['Distributable Profit / Share', 'Positive (NPR 12 - NPR 20+)', 'NPR 3 - NPR 10', 'Negative (Zero dividend capacity)']
        ]
      },
      nepalContext: 'In Nepal, NFRS compliance created a significant gap between reported Accounting Net Profit and actual Cash Distributable Profit. Banks must set aside mandatory reserves: 20% to General Reserve, regulatory loan loss provisions, and defer uncollected interest into a regulatory reserve. An investor who reads only "Net Profit" is frequently shocked when the annual general meeting announces zero dividend due to negative distributable earnings.',
      practicalScenario: {
        persona: 'Rohit, 40, retail store owner in Pokhara',
        income: 'NPR 1,10,000 / month business income',
        scenarioText: 'Rohit saw a popular commercial bank report an impressive 25% increase in quarterly net profit in the newspaper. He wanted to invest NPR 3 Lakh expecting a massive 15% cash dividend.',
        solutionText: 'Before buying, he reviewed the full quarterly disclosure on the bank\'s website. He found that NPL had jumped from 1.8% to 4.2%, forcing the bank to allocate NPR 1.5 Billion to loan loss provisioning. More critically, Distributable Profit was negative NPR 12 per share. He avoided the purchase; six months later, the bank announced zero dividend and its stock price fell 18%.',
        metricHighlight: 'Saved NPR 54,000 capital loss by checking Distributable Profit before buying'
      },
      formula: {
        name: 'Quarterly Annualized EPS & Distributable Dividend Capacity',
        equation: '\\text{Annualized EPS} = \\frac{\\text{Net Profit}}{\\text{Total Shares}} \\times \\left(\\frac{4}{Q}\\right) \\quad | \\quad \\text{Dividend Capacity} = \\frac{\\text{Distributable Profit}}{\\text{Paid-Up Capital}} \\times 100',
        variables: [
          { symbol: 'Net Profit', name: 'Period Net Profit', desc: 'Unaudited net profit after tax for the reported period.' },
          { symbol: 'Q', name: 'Quarter Number', desc: '1 for Q1 (3 mos), 2 for Q2 (6 mos), 3 for Q3 (9 mos), 4 for Q4 (full year).' },
          { symbol: 'Distributable Profit', name: 'Cash Available for Unitholders', desc: 'Net profit remaining after all regulatory NFRS reserves and impairment provisions.' },
          { symbol: 'Paid-Up Capital', name: 'Total Share Capital', desc: 'Total par value of all issued ordinary shares.' }
        ],
        exampleCalculation: 'Q2 (half-year) net profit = NPR 1.2 Billion. Paid-up capital = NPR 10 Billion (10 Crore shares). Q2 EPS = NPR 12. Annualized EPS = 12 * (4 / 2) = NPR 24. Distributable profit = NPR 80 Crore. Maximum dividend capacity = (80 Crore / 10 Billion) * 100 = 8.0% dividend.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Check Fundamental Value'
      },
      commonMistakes: [
        { mistake: 'Confusing quarterly reported Net Profit with Distributable Profit.', correct: 'Always check Distributable Profit - that is the only number that pays your dividends.', explanation: 'Accounting net profit includes unrealized non-cash gains that cannot legally be paid out as cash or bonus shares.' },
        { mistake: 'Comparing Q1 or Q2 EPS directly with full-year figures without annualizing.', correct: 'Multiply Q1 EPS by 4, Q2 EPS by 2, or Q3 EPS by 1.33 to project annual performance.', explanation: 'Failing to annualize makes healthy mid-year earnings appear deceptively low.' },
        { mistake: 'Ignoring NPL in banking stocks.', correct: 'Never buy a banking stock whose NPL is climbing toward 5% without understanding its recovery plan.', explanation: 'High NPL eats directly into equity capital and prompts NRB restrictions on dividend payments.' }
      ],
      definitions: [
        { term: 'EPS', full: 'Pratishare Aamdani (Earnings Per Share)', meaning: 'A company\'s net profit divided by its total outstanding shares, representing earnings per NPR 100 share.' },
        { term: 'BVPS', full: 'Net Worth Per Share (Book Value)', meaning: 'Total assets minus total liabilities divided by shares; the tangible book value of each share.' },
        { term: 'NPL', full: 'Kharab Karja (Non-Performing Loans)', meaning: 'Loans that are in default or close to default where principal/interest payments are overdue past 90 days.' },
        { term: 'Distributable Profit', full: 'Wandanchhyam Munafe', meaning: 'The actual cash surplus remaining after setting aside mandatory regulatory reserves, legally eligible for dividend payout.' }
      ],
      faqs: [
        { q: 'Where can I find quarterly financial reports in Nepal?', a: 'Reports are published in national daily newspapers (Abhiyan, Karobar, Kantipur), on the respective company website\'s "Investor Relations" tab, and on financial portals like Sharesansar, Merolagani, and NepaliPaisa.' },
        { q: 'What does a negative distributable profit mean for shareholders?', a: 'It means the company cannot distribute any dividend (neither cash dividend nor bonus shares) for that period until the accumulated deficit is wiped out by future profits.' },
        { q: 'What is a good P/E ratio for commercial banks in Nepal?', a: 'Historically, a P/E ratio between 12x and 18x indicates fair value for stable commercial banks in NEPSE. A P/E above 25x indicates high valuation expectations.' }
      ],
      takeaways: [
        'Read quarterly reports directly - do not rely on selective newspaper headlines or forum rumors.',
        'Always check Distributable Profit: reported Net Profit does not guarantee dividend payments.',
        'Monitor Non-Performing Loans (NPL): a ratio above 4.0% signals severe loan recovery and provisioning problems.',
        'Annualize Q1, Q2, and Q3 EPS to calculate realistic forward Price-to-Earnings (P/E) valuations.',
        'High Book Value Per Share (BVPS) provides a valuation cushion during NEPSE bear markets.'
      ]
    },
    np: {
      title: 'नेपाली कम्पनीको त्रैमासिक वित्तीय विवरण (EPS, BVPS, NPL) पढ्ने तरिका',
      oneLineSummary: 'दैनिक पत्रिकामा प्रकाशित हुने अपरिष्कृत त्रैमासिक वित्तीय विवरण (Q1-Q4) विश्लेषण गरी वास्तविक नाफा, खराब कर्जा र लाभांश क्षमता जाँच्न सिक्नुहोस्।',
      summaryPoints: [
        'नेप्सेमा सूचीकृत कम्पनीहरूले प्रत्येक त्रैमास (असोज, पुस, चैत, असार) सकिएको ३० दिनभित्र अपरिष्कृत वित्तीय विवरण सार्वजनिक गर्नुपर्छ।',
        'वार्षिकीकरण गरिएको प्रतिसेयर आम्दानी (Annualized EPS) ले कम्पनीले वार्षिक रूपमा प्रति कित्ता (रु. १००) मा कति रुपैयाँ खुद नाफा कमाउँछ भन्ने देखाउँछ।',
        'प्रतिसेयर नेटवर्थ (BVPS) ले कम्पनी भोलि नै बन्द भएमा प्रति कित्ता कति किताबी सम्पत्ति प्राप्त हुन्छ भन्ने देखाउँछ।',
        'खराब कर्जा (NPL) नेपाल राष्ट्र बैंकको ५.०% को अधिकतम सीमाभन्दा निकै तल हुनुपर्छ; खराब कर्जा बढ्दा प्रोभिजनिङले नाफा खाइदिन्छ।',
        'वितरणयोग्य नाफा (Distributable Profit) ले मात्र कम्पनीले वास्तविक लाभांश (बोनस वा नगद) बाँड्न सक्ने वास्तविक हैसियत देखाउँछ।'
      ],
      whatIsThis: 'त्रैमासिक वित्तीय विवरण भनेको नेप्सेमा सूचीकृत बैंक, वित्तीय संस्था, जलविद्युत्, र बिमा कम्पनीहरूले हरेक तीन महिनामा सार्वजनिक गर्ने लेखापरीक्षण नगरिएको आर्थिक प्रगति विवरण हो। यसमा वासलात (Balance Sheet), नाफा-नोक्सान हिसाब, र नेपाल वित्तीय प्रतिवेदन मान (NFRS) अनुसारका वित्तीय सूचकहरू समावेश हुन्छन्।',
      whyItMatters: 'नेपालमा धेरै लगानीकर्ताले पत्रपत्रिकामा "कम्पनीको नाफा ५०% ले बढ्यो" भन्ने शीर्षक मात्र हेरेर सेयर किन्छन्। पछि वार्षिक साधारण सभामा लाभांश शून्य घोषणा हुँदा छाँगाबाट खसे जस्तै हुन्छन्, किनकि कम्पनीको वितरणयोग्य नाफा ऋणात्मक थियो वा खराब कर्जाले प्रोभिजनिङ बढाएको थियो। त्रैमासिक रिपोर्ट पढ्न जान्ने मानिस यस्तो भ्रममा पर्दैनन्।',
      howItWorks: [
        { step: 1, title: 'वार्षिकीकृत प्रतिसेयर आम्दानी (EPS) र P/E रेसियो हेर्नुहोस्', desc: 'दोस्रो त्रैमास (पुस मसान्त) को रिपोर्ट ६ महिनाको हुन्छ। यसलाई वार्षिकीकरण गर्न २ ले गुणन गर्नुहोस्: Annualized EPS = (६ महिनाको खुद नाफा / कुल सेयर) × २। यदि बजार मूल्य रु. ३३० र EPS रु. २२ छ भने P/E = १५ (उचित मूल्य)।' },
        { step: 2, title: 'वितरणयोग्य नाफा (Distributable Profit) अनिवार्य जाँच्नुहोस्', desc: 'NFRS नियम अनुसार खुद नाफा कागजी हुन सक्छ। त्यसैले "Statement of Distributable Profit" हेर्नुहोस्। यदि यो ऋणात्मक छ भने कम्पनीले नाफा कमाए पनि यस वर्ष लाभांश बाँड्न पाउँदैन।' },
        { step: 3, title: 'खराब कर्जा (NPL) र पुँजी पर्याप्तता (CAR) हेर्नुहोस्', desc: 'बैंक तथा वित्तीय संस्थाको खराब कर्जा ४-५% नाघेको छ भने त्यो गम्भीर संकटको संकेत हो। पुँजी पर्याप्तता अनुपात (CAR) राष्ट्र बैंकको न्यूनतम ११% को सीमाभन्दा माथि हुनुपर्छ।' },
        { step: 4, title: 'Cost of Funds र Base Rate को तुलना गर्नुहोस्', desc: 'समान प्रकृतिका अन्य बैंकहरूसँग लागत तुलना गर्नुहोस्। जसको Cost of Funds सस्तो छ, त्यसले बजारमा प्रतिस्पर्धी दरमा कर्जा प्रवाह गरी राम्रो खुद ब्याज आम्दानी (NIM) कमाउन सक्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपाली वाणिज्य बैंकहरूको त्रैमासिक वित्तीय स्वास्थ्य मापदण्ड',
        headers: ['वित्तीय सूचक', 'बलियो र सुरक्षित अवस्था', 'सामान्य / निगरानीयोग्य अवस्था', 'जोखिमपूर्ण / कमजोर अवस्था'],
        rows: [
          ['वार्षिकीकृत EPS', 'रु. १८ देखि रु. २८ भन्दा माथि', 'रु. १२ देखि रु. १७ सम्म', 'रु. १० भन्दा तल वा ऋणात्मक'],
          ['P/E अनुपात', '१२x देखि १८x सम्म (सस्तो/उचित मूल्य)', '१९x देखि २५x सम्म', '३०x भन्दा माथि (बैंकिङ क्षेत्रका लागि महँगो)'],
          ['खराब कर्जा (NPL)', '२.०% भन्दा तल (उत्कृष्ट कर्जा गुणस्तर)', '२.१% देखि ३.८% सम्म', '४.०% देखि ५.०% माथि (राष्ट्र बैंकको कारबाही सीमा नजिक)'],
          ['पुँजी पर्याप्तता अनुपात (CAR)', '१२.५% भन्दा माथि (बलियो पुँजी कोष)', '११.१% देखि १२.४% सम्म', '११.०% भन्दा कम (राष्ट्र बैंकको निर्देशन उल्लंघन)'],
          ['प्रतिसेयर वितरणयोग्य नाफा', 'धनात्मक (रु. १२ देखि रु. २०+)', 'रु. ३ देखि रु. १० सम्म', 'ऋणात्मक (लाभांश वितरण क्षमता शून्य)']
        ]
      },
      nepalContext: 'नेपालमा NFRS लागू भएपछि कम्पनीको वित्तीय विवरणमा देखिने "खुद नाफा" र शेयरधनीले हात पार्ने "लाभांश" बीच ठूलो खाडल बनेको छ। राष्ट्र बैंकको नियम अनुसार बैंकहरूले नाफाको २०% साधारण जगेडा कोषमा, सम्भावित कर्जा नोक्सानी कोषमा र उठ्न बाँकी ब्याजलाई अलग कोषमा सार्नुपर्छ। यी सबै कटाएपछि मात्र वितरणयोग्य नाफा बाँकी रहन्छ।',
      practicalScenario: {
        persona: 'रोहित, ४०, पोखराका खुद्रा व्यवसायी',
        income: 'मासिक व्यवसाय आम्दानी रु. १,१०,000',
        scenarioText: 'रोहितले पत्रिकामा एउटा वाणिज्य बैंकको नाफा २५% ले बढेको खबर पढे। १५% नगद लाभांश पाइने आशामा उनले रु. ३ लाख सेयर किन्ने तयारी गरे।',
        solutionText: 'उनले कम्पनीको पूरा त्रैमासिक विवरण डाउनलोड गरेर हेरे। खराब कर्जा १.८% बाट बढेर ४.२% पुगेको र १.५ अर्ब प्रोभिजनिङ गर्नुपरेकाले वितरणयोग्य नाफा प्रतिसेयर रु. १२ ऋणात्मक थियो। उनले सेयर किनेनन्; ६ महिनापछि बैंकले शून्य लाभांश घोषणा गर्‍यो र सेयर मूल्य १८% ले घट्यो।',
        metricHighlight: 'वितरणयोग्य नाफा हेरेर लगानी गर्दा हुनसक्ने रु. ५४,००० को नोक्सानीबाट जोगिए'
      },
      formula: {
        name: 'वार्षिकीकृत EPS र लाभांश क्षमता हिसाब',
        equation: '\\text{Annualized EPS} = \\frac{\\text{अवधिको खुद नाफा}}{\\text{कुल सेयर}} \\times \\left(\\frac{४}{Q}\\right) \\quad | \\quad \\text{लाभांश क्षमता\\%} = \\frac{\\text{वितरणयोग्य नाफा}}{\\text{चुक्ता पुँजी}} \\times १००',
        variables: [
          { symbol: 'अवधिको खुद नाफा', name: 'त्रैमासिक खुद नाफा', desc: 'प्रकाशित त्रैमासमा भएको करपछिको खुद नाफा।' },
          { symbol: 'Q', name: 'त्रैमास नम्बर', desc: 'पहिलो त्रैमासका लागि १, दोस्रोका लागि २, तेस्रोका लागि ३, चौथोका लागि ४।' },
          { symbol: 'वितरणयोग्य नाफा', name: 'लाभांश बाँड्न मिल्ने रकम', desc: 'सम्पूर्ण कानुनी जगेडा र नोक्सानी व्यवस्था कटाएर बाँकी बचेको नगद नाफा।' },
          { symbol: 'चुक्ता पुँजी', name: 'कुल जारी सेयर पुँजी', desc: 'कम्पनीको कुल चुक्ता सेयर रकम।' }
        ],
        exampleCalculation: 'दोस्रो त्रैमास (६ महिना) को खुद नाफा रु. १.२ अर्ब। चुक्ता पुँजी रु. १० अर्ब (१० करोड कित्ता)। ६ महिनाको EPS रु. १२। वार्षिकीकृत EPS = १२ * (४ / २) = रु. २४। वितरणयोग्य नाफा रु. ८० करोड भए: लाभांश क्षमता = (८० करोड / १० अर्ब) * १०० = अधिकतम ८.०% लाभांश।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'कम्पनी विश्लेषण क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'खुद नाफा बढेको देखेर वितरणयोग्य नाफा नजाँची सेयर किन्नु।', correct: 'सधैँ "Statement of Distributable Profit" हेर्नुहोस्; यसले मात्र लाभांश दिन्छ।', explanation: 'कागजी नाफा जतिसुकै भए पनि वितरणयोग्य नाफा ऋणात्मक भए लाभांश वितरण गर्न कानुनले रोक्छ।' },
        { mistake: 'पहिलो वा दोस्रो त्रैमासको EPS लाई वार्षिक EPS ठानेर झुक्किनु।', correct: 'त्रैमास अनुसार Annualize गर्नुहोस् (Q1 लाई ४ ले, Q2 लाई २ ले गुणन)।', explanation: 'वार्षिकीकरण नगर्दा कम्पनीको वास्तविक वार्षिक कमाउने क्षमता थाहा हुँदैन।' },
        { mistake: 'बैंकहरूको खराब कर्जा (NPL) बढेको बेवास्ता गर्नु।', correct: 'खराब कर्जा ५% नजिक पुगेका बैंकहरूबाट टाढै रहनुहोस्।', explanation: 'खराब कर्जा बढ्नु भनेको लगानीकर्ताको पुँजी जोखिममा पर्नु र लाभांश रोकिनु हो।' }
      ],
      definitions: [
        { term: 'EPS (प्रतिसेयर आम्दानी)', full: 'Earnings Per Share', meaning: 'कम्पनीको कर पछिको खुद नाफालाई कुल सेयर संख्याले भाग गर्दा आउने प्रति कित्ता आम्दानी।' },
        { term: 'BVPS (प्रतिसेयर नेटवर्थ)', full: 'Book Value Per Share', meaning: 'कम्पनीको कुल सम्पत्तिबाट ऋण दायित्व घटाएर बाँकी रहेको पुँजीलाई कुल सेयरले भाग गर्दा आउने किताबी मूल्य।' },
        { term: 'NPL (खराब कर्जा)', full: 'Non-Performing Loans', meaning: '९० दिनभन्दा बढी समयसम्म साँवा वा ब्याज नउठेर भाखा नाघेको कर्जाको अनुपात।' },
        { term: 'वितरणयोग्य नाफा', full: 'Distributable Profit', meaning: 'कम्पनीले राष्ट्र बैंकको सम्पूर्ण कानुनी जगेडा कटाएर आफ्ना सेयरधनीलाई लाभांशका रूपमा बाँड्न मिल्ने वास्तविक रकम।' }
      ],
      faqs: [
        { q: 'कम्पनीहरूको त्रैमासिक रिपोर्ट कहाँ हेर्न पाइन्छ?', a: 'राष्ट्रिय दैनिक पत्रिकाहरू (आर्थिक अभियान, कारोबार, कान्तिपुर), सम्बन्धित कम्पनीको वेभसाइटको "Investor Relations" सेक्सन र अनलाइन पोर्टलहरू (Sharesansar, Merolagani आदि) मा हेर्न सकिन्छ।' },
        { q: 'ऋणात्मक वितरणयोग्य नाफाको अर्थ के हो?', a: 'यसको अर्थ कम्पनीले यस वर्ष सेयरधनीलाई न नगद लाभांश दिन सक्छ, न त बोनस सेयर नै। भविष्यको नाफाबाट यो घाटा पूर्ति नभएसम्म लाभांश रोकिन्छ।' },
        { q: 'वाणिज्य बैंकहरूका लागि कस्तो P/E रेसियो राम्रो मानिन्छ?', a: 'नेप्सेमा वाणिज्य बैंकहरूका लागि १२ देखि १८ सम्मको P/E रेसियो सस्तो र उचित मानिन्छ। २५ भन्दा माथिको P/E लाई महँगो मानिन्छ।' }
      ],
      takeaways: [
        'पत्रिकाको आकर्षक हेडलाइनमा भर नपरी कम्पनीको विस्तृत वित्तीय विवरण आफैँ अध्ययन गर्नुहोस्।',
        'सधैँ वितरणयोग्य नाफा हेर्नुहोस्: खुद नाफा बढे पनि वितरणयोग्य नाफा ऋणात्मक हुन सक्छ।',
        'खराब कर्जा (NPL) ४.०% भन्दा माथि उकालो लागेको छ भने सतर्क हुनुहोस्।',
        'Q1, Q2, Q3 को EPS लाई वार्षिकीकरण गरेर मात्र कम्पनीको वास्तविक P/E अनुपात निकाल्नुहोस्।',
        'उच्च नेटवर्थ (BVPS) भएका कम्पनीहरू मन्दीको बजारमा कम जोखिमयुक्त र सुरक्षित हुन्छन्।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Simulate long-term equity compounding.' }
    ],
    downloadableResources: [
      { title: 'BFI Quarterly Report Analysis Template (Excel)', type: 'Excel Template', format: 'XLSX File', size: '190 KB', href: 'assets/downloads/nepse-first-time-investor-checklist.html' }
    ]
  },

  // ── C5. DIVIDEND YIELD VS CAPITAL GAINS IN NEPSE ─────────────────
  'dividend-yield-vs-capital-gains-nepse': {
    id: 'nepse-dividend-vs-gains',
    slug: 'dividend-yield-vs-capital-gains-nepse',
    categorySlug: 'nepse',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min dividend audit', np: '१५ मिनेट लाभांश विश्लेषण' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'NEPSE Trading Bylaws & Income Tax Act (Dividends vs CGT)', np: 'नेप्से कारोबार विनियमावली र आयकर ऐन २०५८ अनुसार समीक्षित' },
    prerequisites: { en: 'What is an IPO? & Reading Quarterly Reports', np: 'IPO के हो? र त्रैमासिक रिपोर्ट' },
    en: {
      title: 'Dividend Yield vs. Capital Gains in NEPSE: Building Sustainable Cash Flow',
      oneLineSummary: 'Understand the math of cash dividends vs bonus shares, book closure price adjustments, and how to build an inflation-beating passive income portfolio in Nepal.',
      summaryPoints: [
        'Total return on NEPSE equals Capital Gains (price appreciation) plus Dividend Yield (cash payouts and bonus shares).',
        'Dividend Yield measures the annual cash dividend returned as a percentage of your purchase price (or current market price).',
        'Bonus shares increase your total share quantity but trigger an automatic proportional price adjustment on the NEPSE book closure date.',
        'Nepali retail investors historically overvalue bonus shares due to psychological money illusion, often overlooking high cash-yielding commercial banks and debentures.',
        'Cash dividends incur a flat 5.0% final withholding tax in Nepal, whereas secondary market capital gains incur 5.0% or 7.5% CGT.'
      ],
      whatIsThis: 'In NEPSE, equity investing generates returns through two distinct mechanisms: Capital Gains (selling shares at a higher price than your purchase cost) and Dividend Yield (periodic cash or bonus share distributions declared by the board of directors from accumulated company profits).',
      whyItMatters: 'Many Nepali investors mistakenly believe that bonus shares represent "free money" from the company. When a company declares a 20% bonus share, NEPSE automatically adjusts the share price downward by approximately 16.7% on the book closure date. An investor who relies solely on speculative capital gains suffers heavy anxiety during bear markets, whereas a dividend-growth investor collects regular passive cash regardless of market swings.',
      howItWorks: [
        { step: 1, title: 'Calculate True Dividend Yield', desc: 'Divide the annual Cash Dividend per share by the current market price. If a commercial bank trades at NPR 240 and declares an NPR 18 cash dividend, its dividend yield is (18 / 240) × 100 = 7.5% - exceeding most bank fixed deposits.' },
        { step: 2, title: 'Understand Book Closure Price Adjustment', desc: 'On book closure day, NEPSE recalibrates the share price using the official formula: Adjusted Price = (Existing Market Price) / (1 + Bonus Fraction). Your net portfolio wealth on day one remains identical.' },
        { step: 3, title: 'Factor in Tax Deductions', desc: 'Cash dividends are credited directly to your bank account via connectIPS minus 5% withholding tax. For bonus shares, companies often declare a small companion cash dividend (e.g., 0.526%) specifically to cover your 5% bonus share tax.' },
        { step: 4, title: 'Reinvest Dividends for Compounding', desc: 'Take cash dividends and purchase additional shares when market prices are low during bear markets. Reinvesting cash dividends accelerates portfolio unit growth exponentially.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Comparison: Cash Dividends vs Bonus Shares in Nepal',
        headers: ['Feature', 'Cash Dividend (Nakar Laavansh)', 'Bonus Share (Stock Dividend)'],
        rows: [
          ['Immediate Cash Flow', 'Direct cash deposit into linked bank account via connectIPS', 'Zero cash flow; total shares in Demat increase'],
          ['Price Adjustment on NEPSE', 'No price adjustment if dividend is under 10% of market price', 'Mandatory proportional price drop on Book Closure Date'],
          ['Tax Treatment', '5% flat withholding tax deducted at source by bank', '5% tax on par value (NPR 100) often paid by company cash'],
          ['Impact on Company Capital', 'Reduces company cash reserves and net worth', 'Capitalizes retained earnings into permanent Paid-Up Capital'],
          ['Best Used For', 'Retirees and investors needing predictable passive income', 'Young investors seeking long-term compounding share volume']
        ]
      },
      nepalContext: 'Culturally, retail investors in Nepal exhibit an intense preference for bonus shares over cash dividends, colloquially believing that "cash is spent, but shares multiply." However, because NRB forced commercial banks to aggressively increase paid-up capital from NPR 2 Billion to NPR 8 Billion+ through bonus shares, their equity base became heavily diluted, dragging down subsequent ROE and EPS. Sophisticated investors now prioritize companies with stable 6%-9% cash dividend yields.',
      practicalScenario: {
        persona: 'Maya, 48, secondary school teacher in Bhaktapur',
        income: 'NPR 58,000 / month salary',
        scenarioText: 'Maya wanted a safe source of passive income to pay her daughter\'s college tuition. She initially bought speculative micro-cap shares hoping for quick capital gains, but the 2022 bear market trapped her portfolio in a 40% paper loss with zero dividend payouts.',
        solutionText: 'She restructured her portfolio toward high-dividend Class A commercial banks and Citizen Investment Trust (CIT). With an average purchase yield of 7.2% across a NPR 15 Lakh portfolio, she now collects approximately NPR 1,08,000 in net cash dividends every year - directly funding her daughter\'s tuition regardless of whether NEPSE goes up or down.',
        metricHighlight: 'NPR 1,08,000 annual passive cash flow generated without selling a single share'
      },
      formula: {
        name: 'Dividend Yield & NEPSE Bonus Share Price Adjustment Formula',
        equation: '\\text{Dividend Yield\\%} = \\frac{\\text{DPS}_{\\text{cash}}}{\\text{CMP}} \\times 100 \\quad | \\quad P_{\\text{adj}} = \\frac{P_{\\text{close}}}{1 + \\frac{\\text{Bonus\\%}}{100}}',
        variables: [
          { symbol: 'DPS_cash', name: 'Dividend Per Share', desc: 'Total annual cash dividend paid in Nepalese Rupees per share.' },
          { symbol: 'CMP', name: 'Current Market Price', desc: 'Market trading price of the stock on NEPSE.' },
          { symbol: 'P_adj', name: 'Adjusted Opening Price', desc: 'Official NEPSE opening benchmark on the book closure date.' },
          { symbol: 'Bonus%', name: 'Stock Dividend Percentage', desc: 'Bonus share percentage approved by the company AGM.' }
        ],
        exampleCalculation: 'Stock trades at NPR 600. Declares 20% bonus shares and NPR 10 cash dividend. Dividend Yield = (10 / 600) * 100 = 1.67%. Book Closure adjusted price = 600 / (1 + 0.20) = NPR 500. An investor with 100 shares originally had 100 * 600 = NPR 60,000. After adjustment, they own 120 shares * 500 = NPR 60,000.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Compounding Growth'
      },
      commonMistakes: [
        { mistake: 'Believing bonus shares represent free bonus wealth.', correct: 'Bonus shares divide the exact same company into more pieces; market price adjusts proportionally on book closure.', explanation: 'Holding 100 shares @ NPR 600 or 120 shares @ NPR 500 equals the exact same NPR 60,000 total capital on day one.' },
        { mistake: 'Buying stocks on Book Closure Day expecting the dividend.', correct: 'You must buy shares at least one trading day BEFORE the book closure date.', explanation: 'Only investors holding shares at the close of trading on the day preceding book closure are recorded on the company shareholder registry.' },
        { mistake: 'Ignoring cash dividend yield when bank deposit rates drop below 6%.', correct: 'High-quality blue-chip stocks often yield 7%-9% cash, providing superior income compared to savings accounts.', explanation: 'Cash dividend yield provides downside price protection during prolonged bear markets.' }
      ],
      definitions: [
        { term: 'Dividend Yield', full: 'Laavansh Pratiphal', meaning: 'The percentage of a company\'s share price that it pays out in cash dividends each year.' },
        { term: 'Bonus Share', full: 'Stock Dividend (Bonus Seva)', meaning: 'Additional free shares issued to existing unitholders by capitalizing retained company earnings.' },
        { term: 'Book Closure Date', full: 'Darta Kitab Banda Hune Miti', meaning: 'The cutoff date declared by a company to determine which registered shareholders are eligible for dividends.' },
        { term: 'Price Adjustment', full: 'Mulya Samayojan', meaning: 'The mathematical reduction of a stock\'s trading price on NEPSE to account for the dilution of bonus or right shares.' }
      ],
      faqs: [
        { q: 'How does cash dividend money arrive in my account?', a: 'Cash dividends are credited directly to your bank account linked in MeroShare via IPS/connectIPS. Ensure your bank account number and branch match in your Demat profile.' },
        { q: 'Can I choose between cash dividend and bonus shares?', a: 'No. The type and proportion of dividend is determined by the Board of Directors and approved by the company\'s Annual General Meeting (AGM).' },
        { q: 'What happens if the company adjusts price but secondary market pushes it higher?', a: 'That is where bonus shares generate wealth. If a stock adjusts from NPR 600 to NPR 500 and strong company earnings later drive the price back to NPR 600, you gain 20% pure capital appreciation on your increased share count.' }
      ],
      takeaways: [
        'Total return on NEPSE = Capital Gains + Cash Dividends + Bonus Share compounding.',
        'Bonus shares are not free gifts: NEPSE mathematically reduces the share price on Book Closure day.',
        'High cash dividend yield (6%-8%) provides defensive cash flow and beats bank savings rates.',
        'Always buy at least one day before Book Closure to be recorded on the dividend eligibility list.',
        'Reinvesting cash dividends into discounted stocks during bear markets dramatically accelerates long-term wealth.'
      ]
    },
    np: {
      title: 'नेप्सेमा लाभांश प्रतिफल (Dividend Yield) र पुँजीगत लाभ (Capital Gains): कुन उत्तम?',
      oneLineSummary: 'नगद लाभांश र बोनस सेयरको गणित, बुक क्लोजर मूल्य समायोजन र नेपालमा मुद्रास्फीति जित्ने नियमित आम्दानी बनाउने तरिका।',
      summaryPoints: [
        'नेप्सेमा कुल प्रतिफल भनेको पुँजीगत लाभ (सेयर मूल्य वृद्धि) र लाभांश प्रतिफल (नगद लाभांश र बोनस सेयर) को योगफल हो।',
        'Dividend Yield ले कम्पनीको हालको बजार मूल्यको तुलनामा वार्षिक रूपमा कति प्रतिशत नगद लाभांश हात पर्छ भन्ने नाप्छ।',
        'बोनस सेयरले तपाईंको कुल कित्ता बढाउँछ तर बुक क्लोजरको दिन नेप्सेले सोही अनुपातमा सेयर मूल्य घटाएर समायोजन गर्दछ।',
        'नेपाली लगानीकर्ताहरू मनोवैज्ञानिक रूपमा बोनस सेयरलाई निःशुल्क सम्पत्ति ठान्ने भ्रममा पर्छन् र नगद लाभांश दिने बैंकहरूलाई बेवास्ता गर्छन्।',
        'नगद लाभांशमा ५.०% अन्तिम स्रोतमा कट्टी हुने कर लाग्छ भने सेयर बिक्रीको नाफामा ५.०% वा ७.५% पुँजीगत लाभकर लाग्छ।'
      ],
      whatIsThis: 'नेप्सेमा लगानी गर्दा दुई तरिकाबाट प्रतिफल पाइन्छ: पुँजीगत लाभ (किनेको भन्दा महँगो मूल्यमा सेयर बेचेर हुने नाफा) र लाभांश प्रतिफल (कम्पनीको वार्षिक खुद नाफाबाट सञ्चालक समितिले सेयरधनीलाई बाँड्ने नगद वा बोनस सेयर)।',
      whyItMatters: 'नेपालमा धेरैलाई बोनस सेयर भनेको कम्पनीले सित्तैमा दिने उपहार हो भन्ने लाग्छ। जब कुनै कम्पनीले २०% बोनस दिन्छ, बुक क्लोजरको दिन नेप्सेले सेयर मूल्य १६.७% घटाएर समायोजन गर्छ। बजार घटेको बेला केवल सेयर मूल्य बढ्ने आशामा बस्नेहरू तनावमा पर्छन्, तर ७-८% नगद लाभांश दिने कम्पनीमा लगानी गर्नेहरूले बजार घटे पनि ढुक्कसँग नियमित पेन्सन जस्तै नगद आम्दानी पाइरहन्छन्।',
      howItWorks: [
        { step: 1, title: 'वास्तविक Dividend Yield हिसाब गर्नुहोस्', desc: 'वार्षिक प्रतिसेयर नगद लाभांशलाई हालको बजार मूल्यले भाग गर्नुहोस्। यदि रु. २४० को सेयरले रु. १८ नगद दियो भने: (१८ / २४०) * १०० = ७.५% लाभांश प्रतिफल - जुन बैंकको मुद्दती निक्षेप बराबर वा बढी हुन्छ।' },
        { step: 2, title: 'बुक क्लोजर मूल्य समायोजनको गणित बुझ्नुहोस्', desc: 'बुक क्लोजरको दिन नेप्सेले आधिकारिक सूत्रबाट नयाँ मूल्य तोक्छ: समायोजन मूल्य = अन्तिम कारोबार मूल्य / (१ + बोनस प्रतिशत)। पहिलो दिन तपाईंको कुल सम्पत्तिको मूल्यमा कुनै परिवर्तन हुँदैन।' },
        { step: 3, title: 'कर कट्टीको हिसाब गर्नुहोस्', desc: 'नगद लाभांश ५% कर कट्टी भएर सीधै बैंक खातामा जम्मा हुन्छ। बोनस सेयरको हकमा कम्पनीहरूले प्रायः ५% कर तिर्न पुग्ने सानो नगद लाभांश (जस्तै ०.५२६%) सँगै घोषणा गर्छन्।' },
        { step: 4, title: 'कम्पाउन्डिङका लागि लाभांश पुनःलगानी गर्नुहोस्', desc: 'मन्दीको बेला खातामा आएको नगद लाभांश खर्च नगरी सस्तो मूल्यमा थप सेयर किन्नुहोस्। लाभांश पुनःलगानी गर्दा दीर्घकालमा सेयर संख्या नाटकीय रूपमा बढ्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नगद लाभांश र बोनस सेयर बीचको तुलनात्मक विश्लेषण',
        headers: ['विशेषता', 'नगद लाभांश (Cash Dividend)', 'बोनस सेयर (Stock Dividend)'],
        rows: [
          ['तत्काल नगद प्रवाह', 'सीधै बैंक खातामा नगद जम्मा हुने', 'कुनै नगद नआउने; डिम्याटमा सेयर संख्या मात्र बढ्ने'],
          ['नेप्सेमा मूल्य समायोजन', '१०% भन्दा कम नगद भए मूल्य समायोजन नहुने', 'बुक क्लोजरको दिन अनिवार्य मूल्य समायोजन हुने'],
          ['कर व्यवस्था', '५% अग्रिम कर कट्टी हुने', 'अंकित मूल्य (रु. १००) मा ५% कर तिर्नुपर्ने'],
          ['कम्पनीको पुँजीमा असर', 'कम्पनीको नगद मौज्दात घट्छ', 'जगेडा कोष चुक्ता पुँजीमा रूपान्तरण हुन्छ'],
          ['कसका लागि उपयुक्त', 'नियमित खर्च चाहिने र अवकाशप्राप्त व्यक्ति', 'लामो समयसम्म सेयर संख्या बढाउन चाहने युवा']
        ]
      },
      nepalContext: 'नेपालमा सांस्कृतिक रूपमै लगानीकर्ताहरू नगद लाभांशभन्दा बोनस सेयर मन पराउँछन् - "नगद खर्च भइहाल्छ, सेयर सधैँ रहिरहन्छ" भन्ने धारणा पाइन्छ। तर राष्ट्र बैंकले बैंकहरूको चुक्ता पुँजी जबर्जस्ती २ अर्बबाट ८ अर्ब पुर्‍याउन लगाएपछि अत्यधिक बोनस सेयरका कारण पुँजी पातलिएर (Dilution) कम्पनीहरूको प्रतिसेयर आम्दानी र लाभांश क्षमता खुम्चियो। अहिले सचेत लगानीकर्ताहरू ६% देखि ९% सम्म नियमित नगद दिने कम्पनी खोज्छन्।',
      practicalScenario: {
        persona: 'माया, ४८, भक्तपुरकी मावि शिक्षिका',
        income: 'मासिक तलब रु. ५८,000',
        scenarioText: 'मायालाई छोरीको कलेज शुल्क तिर्न नियमित निष्क्रिय आम्दानी चाहिएको थियो। उनले सुरुमा मूल्य बढ्ने आशामा कमजोर कम्पनीका सेयर किनिन् तर २०७९ को मन्दीमा ४०% घाटा भयो र कुनै लाभांश आएन।',
        solutionText: 'उनले आफ्नो पोर्टफोलियो उच्च लाभांश दिने वाणिज्य बैंक र नागरिक लगानी कोष (CIT) मा सारिन्। रु. १५ लाखको लगानीमा औसत ७.२% लाभांश प्राप्त गर्दा वार्षिक रु. १,०८,००० खुद नगद लाभांश हात पर्छ, जसले बजार घटे पनि छोरीको कलेज शुल्क सहजै धान्छ।',
        metricHighlight: 'एउटा पनि सेयर नबेची वार्षिक रु. १,०८,००० नियमित निष्क्रिय नगद आम्दानी'
      },
      formula: {
        name: 'Dividend Yield र नेप्से बुक क्लोजर मूल्य समायोजन सूत्र',
        equation: '\\text{Dividend Yield\\%} = \\frac{\\text{प्रतिसेयर नगद}}{\\text{बजार मूल्य}} \\times १०० \\quad | \\quad P_{\\text{समायोजन}} = \\frac{P_{\\text{अन्तिम}}}{१ + \\frac{\\text{बोनस\\%}}{१००}}',
        variables: [
          { symbol: 'प्रतिसेयर नगद', name: 'वार्षिक नगद लाभांश', desc: 'कम्पनीले प्रति कित्ता घोषणा गरेको खुद नगद लाभांश।' },
          { symbol: 'बजार मूल्य', name: 'नेप्सेको कारोबार दर', desc: 'नेप्से दोस्रो बजारमा कायम सेयर मूल्य।' },
          { symbol: 'P_समायोजन', name: 'समायोजित प्रारम्भिक मूल्य', desc: 'बुक क्लोजरको दिन नेप्सेले निर्धारण गर्ने नयाँ कारोबार मूल्य।' },
          { symbol: 'बोनस%', name: 'बोनस सेयर प्रतिशत', desc: 'कम्पनीको साधारण सभाले पारित गरेको बोनस दर।' }
        ],
        exampleCalculation: 'रु. ६०० मा कारोबार भएको सेयरले २०% बोनस र रु. १० नगद घोषणा गर्दा: लाभांश प्रतिफल = (१० / ६००) * १०० = १.६७%। बुक क्लोजरमा समायोजन मूल्य = ६०० / (१ + ०.२०) = रु. ५००। पहिले १०० कित्ता * ६०० = रु. ६०,००० भएको लगानीकर्तासँग अब १२० कित्ता * ५०० = रु. ६०,००० नै रहन्छ।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'चक्रवृद्धि प्रतिफल क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'बोनस सेयरलाई सित्तैमा आएको अतिरिक्त सम्पत्ति सम्झनु।', correct: 'बोनस सेयरले कम्पनीलाई धेरै टुक्रामा मात्र बाँड्छ; नेप्सेले मूल्य घटाएर हिसाब बराबर गर्छ।', explanation: 'रु. ६०० का दरले १०० कित्ता हुनु र रु. ५०० का दरले १२० कित्ता हुनु दुवै रु. ६०,००० नै हो।' },
        { mistake: 'बुक क्लोजरको दिन सेयर किनेर लाभांश पाउने आशा गर्नु।', correct: 'लाभांश पाउन बुक क्लोजर हुनुभन्दा कम्तीमा एक कारोबार दिन अगाडि नै सेयर किनिसक्नुपर्छ।', explanation: 'बुक क्लोजरको दिन कम्पनीको दर्ता किताब बन्द भइसकेको हुन्छ र नयाँ खरिदकर्ताले लाभांश पाउँदैन।' },
        { mistake: 'मुद्दतीको ब्याज घट्दा पनि उच्च नगद लाभांश दिने सेयर बेवास्ता गर्नु।', correct: 'राम्रा वाणिज्य बैंकले ७-९% सम्म नगद लाभांश दिन्छन्, जुन बचत खाताभन्दा निकै फाइदाजनक हुन्छ।', explanation: 'नगद लाभांशले मन्दीको बजारमा मूल्य गिरावटबाट सुरक्षा प्रदान गर्दछ।' }
      ],
      definitions: [
        { term: 'Dividend Yield (लाभांश प्रतिफल)', full: 'प्रतिसेयर नगद लाभांश दर', meaning: 'सेयरको बजार मूल्यको तुलनामा वार्षिक रूपमा पाइने नगद लाभांशको प्रतिशत।' },
        { term: 'बोनस सेयर (Bonus Share)', full: 'पुँजीकृत लाभांश सेयर', meaning: 'कम्पनीको सञ्चित नाफालाई पुँजीमा रूपान्तरण गरी सेयरधनीलाई निःशुल्क वितरण गरिने थप सेयर।' },
        { term: 'बुक क्लोजर मिति (Book Closure)', full: 'दर्ता किताब बन्द हुने मिति', meaning: 'लाभांश वा साधारण सभाका लागि योग्य सेयरधनीहरूको नाम अन्तिम रूपमा तय गरिने मिति।' },
        { term: 'मूल्य समायोजन (Price Adjustment)', full: 'नेप्सेको प्राविधिक मूल्य मिलान', meaning: 'बोनस वा हकप्रद सेयर जारी भएपछि नेप्सेले गणितीय सूत्र प्रयोग गरी सेयरको नयाँ प्रारम्भिक मूल्य तोक्ने प्रक्रिया।' }
      ],
      faqs: [
        { q: 'नगद लाभांश मेरो खातामा कसरी आइपुग्छ?', a: 'कम्पनीले साधारण सभा सकिएपछि मेरोसेयरमा जोडिएको तपाईंको बैंक खातामा connectIPS/IPS मार्फत सीधै पैसा पठाइदिन्छ।' },
        { q: 'के म आफैँले नगद वा बोनस रोज्न पाउँछु?', a: 'पाउनुहुन्न। कम्पनीको सञ्चालक समितिले सिफारिस गरेको र साधारण सभाले अनुमोदन गरेको लाभांश नै सबैले स्वीकार गर्नुपर्छ।' },
        { q: 'मूल्य समायोजनपछि बजार बढ्यो भने के हुन्छ?', a: 'त्यही नै बोनस सेयरको मुख्य फाइदा हो। यदि रु. ५०० मा समायोजन भएको सेयर कम्पनीको नाफा राम्रो भएर फेरि रु. ६०० पुग्यो भने बढेको २० कित्तामा पनि थप नाफा हुन्छ।' }
      ],
      takeaways: [
        'नेप्सेको कुल प्रतिफल = सेयर मूल्य वृद्धि + नगद लाभांश + बोनस सेयरको प्रभाव।',
        'बोनस सेयर सित्तैको पैसा होइन: बुक क्लोजरको दिन नेप्सेले सेयर मूल्य समायोजन गर्छ।',
        'उच्च नगद लाभांश दिने कम्पनीहरूले मन्दीको बजारमा पनि सुरक्षित नगद प्रवाह प्रदान गर्छन्।',
        'लाभांश पाउनका लागि सधैँ बुक क्लोजर मितिभन्दा कम्तीमा एक दिनअगाडि नै सेयर किन्नुहोस्।',
        'हात परेको नगद लाभांशलाई मन्दीको बेला फेरि सेयर किन्न प्रयोग गरेर सम्पत्ति तीव्र गतिमा बढाउनुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate the exponential power of dividend reinvestment over 10 to 30 years.' },
      { name: 'FD Calculator', slug: 'calculators/fd', key: 'fd', desc: 'Compare stock dividend yields against guaranteed bank fixed deposits.' }
    ],
    downloadableResources: [
      { title: 'NEPSE Dividend Aristocrats Tracking Sheet (Excel)', type: 'Excel Template', format: 'XLSX File', size: '170 KB', href: 'assets/downloads/nepal-company-registration-compliance-checklist.html' }
    ]
  }

};

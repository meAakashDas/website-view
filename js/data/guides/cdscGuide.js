// ==============================================
// risePaisa - Complete Central Depository (CDSC) & Demat Guide for Nepal
// The Definitive Reference for Electronic Securities Custody, Transfers & Pledges
// ==============================================

export const CDSC_GUIDE = {
  id: 'complete-cdsc-guide',
  slug: 'complete-cdsc-guide',
  categorySlug: 'nepse',
  categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
  title: {
    en: 'Complete Central Depository (CDSC) & Demat Guide for Nepal',
    np: 'CDSC, Demat र सिडिएससी प्रणालीको पूर्ण कर्नरस्टोन गाइड'
  },
  oneLineSummary: {
    en: 'The definitive end-to-end manual for digital securities custody in Nepal: 16-digit BOID architecture, EDIS settlement rules, pledging shares for bank margin loans, annual renewal charges, and family inheritance (namasari) procedures.',
    np: 'नेपालमा डिजिटल सेयर सुरक्षणको सम्पूर्ण गाइड: १६ अङ्कको BOID संरचना, EDIS राफसाफ नियम, बैंकबाट सेयर धितो कर्जा (रोक्का र फुकुवा), वार्षिक नवीकरण शुल्क र पारिवारिक नामसारीको कानुनी प्रक्रिया।'
  },
  difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
  readTime: { en: '13 min read', np: '१३ मिनेट पढाइ' },
  sectionsCount: 6,
  updatedDate: 'FY 2083/84 / Sep 2026',
  author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
  reviewedBy: {
    en: 'Verified for Nepal Regulatory Accuracy (CDSC Bylaws 2068 & Central Depository Act 2063)',
    np: 'सिडिएससी विनियमावली २०६८ र धितोपत्र ऐन अनुसार प्रमाणित'
  },
  prerequisites: [
    { title: 'Active Demat Account & 16-Digit BOID', type: 'Document' },
    { title: 'Depository Participant (DP) Bank / Broker Profile', type: 'Prerequisite' },
    { title: 'MeroShare Portal Login Credentials', type: 'Prerequisite' },
    { title: 'Updated KYC & Biometric Verification', type: 'Compliance' }
  ],
  en: {
    intro: 'CDS and Clearing Limited (CDSC) is the foundational financial utility of Nepal’s capital market. Established in 2010 under the ownership of the Nepal Stock Exchange (NEPSE) and regulated by the Securities Board of Nepal (SEBON) under the Central Depository Act 2063, CDSC operates as the sole electronic vault and clearing house for all dematerialized financial assets in Nepal. Before CDSC introduced paperless settlement, buying or selling shares involved exchanging physical green and blue paper certificates, sending documents across the country by courier, and waiting months for corporate signature verifications-frequently plagued by forged endorsements and lost certificates. Today, every single share, debenture, and mutual fund unit you own is safely recorded as an immutable digital ledger entry under your 16-digit Beneficiary Owner Identification (BOID). Understanding how CDSC governs your digital holdings, settles trade obligations through EDIS, manages bank loan pledges (Rokka), and executes family inheritance transfers is essential to protecting your family’s generational wealth.',
    chapters: [
      {
        num: 1,
        id: 'chap-1-cdsc-infrastructure',
        title: 'The Core Architecture of CDSC: Electronic Custody & Clearing',
        content: 'CDSC functions simultaneously as a Central Securities Depository (CSD) and an automated Clearing House (CH). As a depository, CDSC holds the master registry of every listed corporation in Nepal, crediting bonus shares, right shares, and cash dividends automatically to verified accounts. As a clearing house, CDSC acts as the central settlement counterparty: when thousands of trades occur on NEPSE’s Trade Management System (TMS) daily, CDSC nets out the balances between buyers and sellers, moving shares from sellers’ accounts to buyers’ accounts and synchronizing cash transfers across clearing banks under the national T+2 settlement cycle (Transaction day plus 2 business days). All securities are stored in electronic book-entry format, completely eliminating stamp duty disputes, theft, and physical degradation.',
        callout: {
          type: 'important',
          title: 'CDSC Does Not Hold Your Money',
          text: 'CDSC solely holds digital financial securities (shares, bonds, mutual fund units). Cash settlements are processed through designated Clearing Banks (such as Global IME, Prabhu, Nabil, Siddhartha) linked to Nepal Clearing House (NCHL).'
        }
      },
      {
        num: 2,
        id: 'chap-2-boid-and-dp-structure',
        title: 'Anatomy of a Demat Account: 16-Digit BOID & Depository Participants (DP)',
        content: 'Your Demat account number is an immutable 16-digit alphanumeric code known as the BOID (Beneficiary Owner Identification). The architecture of this number is strictly standardized across Nepal: (1) First 8 Digits: The unique DP ID representing your Depository Participant (e.g., 13010900 represents a specific commercial bank DP branch or licensed brokerage firm). (2) Last 8 Digits: Your unique personal client identifier within that specific DP. Under SEBON directives, Depository Participants act as licensed intermediary custody agents-you cannot walk directly into CDSC’s central office in Putalisadak; instead, you interact exclusively through your licensed DP (commercial banks, merchant banks, or stockbrokers). An individual citizen in Nepal is legally permitted to hold a maximum of two Demat accounts across different DPs.',
        callout: {
          type: 'tip',
          title: 'The Two-Demat Legal Limit',
          text: 'SEBON limits every Nepali citizen to a maximum of two Demat accounts tied to their citizenship and PAN. If you open a third account, CDSC’s central clearing database flags the duplicate record and automatically freezes subsequent IPO applications.'
        }
      },
      {
        num: 3,
        id: 'chap-3-edis-settlement-rules',
        title: 'Electronic Disinvestment Instruction Slip (EDIS): WACC & Transfer Deadlines',
        content: 'When you execute a sell order on NEPSE through your broker’s TMS, the shares do not transfer automatically. Under CDSC bylaws, you must authorize an Electronic Disinvestment Instruction Slip (EDIS) within the statutory settlement deadline (by 10:00 AM on T+1 or T+2 morning). The EDIS process requires two mandatory steps inside MeroShare: (1) My Purchase Source (WACC): You must calculate and declare your Weighted Average Cost of Capital (WACC) so the system accurately computes your capital gains tax (5% for holdings > 365 days, 7.5% for holdings <= 365 days). (2) Transfer Shares: Navigate to "My EDIS" -> "Transfer Shares", select the settled trade contract, confirm the details, and click submit. If you fail to complete EDIS before the clearing deadline, the transaction fails ("Short Delivery"), and CDSC imposes a severe mandatory statutory penalty of 20% of the total trade value (known as the Close-Out penalty), debited directly from your bank balance.',
        callout: {
          type: 'warning',
          title: 'The 20% Close-Out Penalty Danger',
          text: 'If you sell NPR 2,00,000 worth of shares on Sunday and forget to approve EDIS by Tuesday morning, CDSC automatically fines you 20% (NPR 40,000) to compensate the buyer. Always complete your WACC and EDIS immediately after the trading bell rings at 3:00 PM.'
        }
      },
      {
        num: 4,
        id: 'chap-4-share-pledge-rokka',
        title: 'Pledging Shares (Rokka / धितो) for Bank Loans & Release Procedures',
        content: 'Under Nepal Rastra Bank (NRB) unified directives, commercial banks and financial institutions (BFIs) offer Margin Lending (सेयर धितो कर्जा) against listed blue-chip equity. To secure a loan against shares, the borrower pledges their securities via CDSC. The process follows a structured tripartite legal sequence: (1) The borrower and lending bank execute an agreement; (2) The bank sends an electronic Pledge Request to CDSC; (3) The borrower logs into MeroShare -> "Pledge" and confirms the hold (Rokka); (4) CDSC locks the designated kitta into a frozen state where the borrower retains dividend rights (bonus shares and cash dividends accrue to the borrower, though bonus shares are automatically locked under the pledge) but cannot sell or transfer the principal shares. Once the loan principal and accrued interest are fully settled, the lending bank issues an electronic unpledge instruction through CDSC, restoring the shares to free-float status within 24 to 48 hours.',
        callout: {
          type: 'important',
          title: 'NRB Margin Lending Regulatory Caps',
          text: 'NRB regulates margin loans by capping loan-to-value (LTV) at a maximum of 70% of the 180-day average market price or current market price (whichever is lower). Furthermore, NRB enforces institutional single-borrower ceilings to prevent market speculation.'
        }
      },
      {
        num: 5,
        id: 'chap-5-annual-renewal-fees',
        title: 'Annual Demat & MeroShare Maintenance Fees, Penalties, and Account Freezing',
        content: 'To maintain active custody, every Demat account holder in Nepal is subject to two annual regulatory fees prescribed by SEBON and CDSC: (1) Demat Annual Maintenance Fee: NPR 100 per year per account, payable to your Depository Participant. (2) MeroShare Annual Service Fee: NPR 50 per year per account, payable directly to CDSC. Both renewals fall due on the final day of the Nepali fiscal year (Ashadh Masanta - mid-July). If you fail to renew by the deadline, your DP places your account in a "Suspended / Frozen" status. While your existing shares remain completely safe and untouchable in CDSC’s electronic vault, you will be blocked from applying for new IPOs, right shares, or selling existing holdings on TMS. You can renew instantly via digital payment gateways (connectIPS, eSewa, Khalti, IME Pay) directly within the MeroShare portal.',
        callout: {
          type: 'tip',
          title: 'Multi-Year Advance Renewal',
          text: 'MeroShare and most bank DPs allow you to prepay your Demat and MeroShare renewal fees for up to 5 to 10 years in advance (NPR 750 for 5 years). Doing this eliminates the annual stress of Ashadh deadlines and prevents accidental account freezes during hot IPO seasons.'
        }
      },
      {
        num: 6,
        id: 'chap-6-family-inheritance-namasari',
        title: 'Family Share Transfer (Namasari), Inheritance, and Death Settlement',
        content: 'When an investor passes away or wishes to legally transfer shares to blood relatives, CDSC bylaws govern the transmission (Namasari / नामसारी) process to ensure clear title and prevent tax evasion. Direct secondary sales between private individuals outside NEPSE are strictly illegal; however, CDSC permits off-market transfers in two specific statutory categories: (1) Inheritance Transmission (मृत्युपश्चात् हक हस्तान्तरण): Upon an account holder’s demise, legal heirs must submit the original Death Certificate, Relationship Verification Certificate (नाता प्रमाणित) from the local ward office, legal heir consensus (हकदारहरूको मञ्जुरीनामा), and a national daily newspaper publication (35-day notice) to the deceased’s DP. CDSC then extinguishes the deceased’s BOID and transfers the securities directly to the heirs’ Demat accounts. (2) Blood-Relation Gift Transfer: Direct gifts are strictly permitted only between direct parents, children, and legal spouses with ward certification and IRD tax-clearance compliance.',
        callout: {
          type: 'important',
          title: 'Physical Share Dematerialization (DRF)',
          text: 'If you discover ancient physical share certificates belonging to ancestors, they cannot trade on NEPSE. You must submit a Demat Request Form (DRF) along with the physical certificates to the issuing company’s Share Registrar (RTS/RTA) for dematerialization into your CDSC BOID.'
        }
      }
    ],
    nepalContext: 'CDSC operates under the Central Depository Act 2063 and the Central Depository Services Regulations 2068, supervised by the Securities Board of Nepal (SEBON). As the national infrastructure provider, CDSC links 50+ stockbroker clearing terminals, 80+ licensed Depository Participants, and 4 major clearing commercial banks into a unified digital ecosystem. Every share balance in CDSC is legally recognized as property rights under Chapter 5 of the Civil Code 2074 (मुलुकी देवानी संहिता), ensuring full statutory protection against institutional insolvency or broker default.',
    comparisonTable: {
      title: 'Demat Custody, Trading Accounts & MeroShare Fees in Nepal',
      caption: 'Statutory fees and operational limits governed by CDSC Bylaws 2068',
      headers: ['Service Component', 'Statutory Fee / Limit', 'Governing Body', 'Annual Renewal Rule'],
      rows: [
        ['Demat Account Opening', 'NPR 50 - NPR 150 (one-time)', 'Depository Participant (DP)', 'NPR 100 every fiscal year (by Ashadh end)'],
        ['MeroShare Registration', 'NPR 50 annually', 'CDSC / DP', 'NPR 50 annual renewal (or expires)'],
        ['C-ASBA Application Fee', 'NPR 0 to NPR 5 max per IPO', 'SEBON Directives / Bank', 'Charged per submitted application'],
        ['EDIS Share Transfer', 'Free (within T+2 cycle)', 'CDSC Clearing House', 'Mandatory within 24 hours of sell order'],
        ['Share Pledge (Rokka) for Loan', 'NPR 50 per company pledged', 'CDSC / Commercial Bank', 'Released (Fukuwa) upon loan clearance']
      ]
    },
    practicalScenario: {
      persona: 'Sarita, 48, Homemaker in Pokhara',
      challenge: 'Following the sudden passing of her father, Sarita found physical share certificates of an older commercial bank and a hydropower company issued in 2065 B.S. She had no Demat account, did not know her father’s broker, and local relatives advised her that the shares had expired or were lost forever.',
      solution: 'Sarita opened her own bank account and Demat account in Pokhara. Guided by RisePaisa’s CDSC checklist, she obtained a formal Relationship Verification Certificate (नाता प्रमाणित) from her Ward Office and visited the issuing companies’ Share Registrar (RTA) in Kathmandu. The RTA verified the physical certificate signatures, published the mandatory 35-day public notice, and executed a transmission to CDSC. Within 45 days, 1,200 bonus-compounded shares worth NPR 4,80,000 were electronically credited to Sarita’s new Demat account, alongside accumulated uncollected cash dividends credited directly to her bank account.'
    },
    calculatorShortcut: {
      slug: 'nepse-share',
      name: 'NEPSE Share Profit & Loss Calculator',
      desc: 'Simulate secondary market brokerage, SEBON fees, DP costs, and capital gains tax on dematerialized shares.'
    },
    downloadableResources: [
      {
        title: 'CDSC Demat Transfer & Inheritance Transmission Checklist',
        type: 'PDF Guide',
        size: '1.2 MB',
        href: 'assets/downloads/cdsc-demat-transfer-checklist.html'
      }
    ],
    faqs: [
      {
        q: 'What should I do if my Demat account is suspended due to unpaid renewal fees?',
        a: 'Log in to meroshare.cdsc.com.np, click your profile icon in the upper right corner, and select "Renew Account". Choose your payment gateway (connectIPS, eSewa, Khalti, or IME Pay) and pay NPR 100 for Demat and NPR 50 for MeroShare. Your account will automatically reactivate within 15 minutes to 2 business hours.'
      },
      {
        q: 'Can I transfer shares from one of my Demat accounts to my other Demat account?',
        a: 'Yes, but not via an informal free-form click. You must submit a formal Inter-DP Transfer request at your bank or broker branch, providing proof that both 16-digit BOIDs belong to the identical citizenship and PAN holder. A statutory CDSC transfer fee of NPR 25 per company applies.'
      },
      {
        q: 'What is the difference between my DP and CDSC?',
        a: 'CDSC is the central government-regulated clearing corporation that operates the master vault. A DP (Depository Participant) is a licensed bank or broker that acts as your local retail branch. You open your account through a DP, but all your securities sit safely in CDSC’s central database.'
      },
      {
        q: 'What happens to my cash dividends if my Demat account is frozen?',
        a: 'Cash dividends are credited directly to your linked bank account via NCHL IPS regardless of Demat status. However, bonus shares will be held in CDSC suspense until you clear your renewal arrears with your DP.'
      }
    ],
    whereToGoNext: {
      nextLesson: {
        title: 'EDIS Clearance & Share Settlement Mechanics',
        slug: 'edis-transfer-rules',
        categorySlug: 'nepse',
        readTime: '14 min read'
      },
      nextGuide: {
        title: 'Complete NEPSE TMS Broker Guide',
        slug: 'complete-tms-guide',
        readTime: '18 min read'
      },
      nextCalculator: {
        title: 'NEPSE Stock Trading & Broker Commission Calculator',
        slug: 'nepse-share'
      },
      nextGlossary: {
        title: 'Beneficiary Owner Identification (BOID)',
        term: 'BOID (डिम्याट नम्बर)',
        def: 'Unique 16-digit depository identification assigned to Nepali share investors.'
      }
    }
  },
  np: {
    intro: 'केन्द्रीय निक्षेप सेवा तथा राफसाफ लिमिटेड (CDS and Clearing Limited - CDSC) नेपालको पुँजी बजारको मेरुदण्ड हो। नेपाल स्टक एक्सचेन्ज (NEPSE) को पूर्ण स्वामित्वमा वि.सं. २०६७ मा स्थापित र नेपाल धितोपत्र बोर्ड (SEBON) द्वारा केन्द्रीय निक्षेप सेवा ऐन २०६३ बमोजिम नियमन गरिएको CDSC ले नेपालका सम्पूर्ण डिजिटल धितोपत्रहरूको आधिकारिक भल्ट (Vault) तथा राफसाफ गृह (Clearing House) को रूपमा काम गर्दछ। CDSC आउनुअघि कागजी सेयर प्रमाणपत्र बोकेर ब्रोकर र कम्पनी धाउनुपर्ने, नामसारीका लागि महिनौँ कुर्नुपर्ने, र नक्कली हस्ताक्षर वा प्रमाणपत्र हराउने ठूलो जोखिम थियो। आज तपाईंसँग भएका सम्पूर्ण सेयर, ऋणपत्र (Debentures) र म्युचुअल फण्डका इकाइहरू तपाईंको १६ अङ्कको डिम्याट खाता (BOID) मा पूर्ण सुरक्षित र डिजिटल रूपमा अभिलेख रहन्छन्। CDSC ले सेयर कसरी सुरक्षित राख्छ, EDIS मार्फत कसरी सेयर हस्तान्तरण हुन्छ, सेयर धितो राखी बैंकबाट ऋण कसरी लिने (रोक्का र फुकुवा), र पारिवारिक नामसारी कसरी गर्ने भन्ने कानुनी प्रक्रिया बुझ्नु हरेक नागरिकका लागि अनिवार्य छ।',
    chapters: [
      {
        num: 1,
        id: 'chap-1-cdsc-infrastructure',
        title: 'CDSC को मूल संरचना: डिजिटल सेयर सुरक्षण र राफसाफ प्रणाली',
        content: 'CDSC ले मुख्यतया दुईवटा काम एकसाथ गर्दछ: केन्द्रीय निक्षेप (Depository) र राफसाफ गृह (Clearing House)। निक्षेपकर्ताको रूपमा, यसले नेपालका सम्पूर्ण सूचीकृत कम्पनीहरूको केन्द्रीय सेयर अभिलेख राख्दछ, र कम्पनीहरूले घोषणा गर्ने बोनस सेयर, हकप्रद सेयर र नगद लाभांश स्वतः लगानीकर्ताको खातामा पठाउँछ। राफसाफ गृहको रूपमा, NEPSE को TMS मा दैनिक हुने अर्बौंको सेयर किनबेचलाई हिसाब गरी T+2 चक्र (कारोबार भएको दिनबाहेक २ कार्यदिन) भित्र बिक्रेताको डिम्याटबाट सेयर काटेर खरिदकर्ताको डिम्याटमा पठाउने र बैंकमार्फत रकम राफसाफ गराउने काम CDSC ले गर्दछ। सबै सेयर डिजिटल भएकाले कागजी झन्झट, चोरी हुने वा च्यातिने डर सधैँका लागि अन्त्य भएको छ।',
        callout: {
          type: 'important',
          title: 'CDSC ले लगानीकर्ताको नगद रकम राख्दैन',
          text: 'CDSC ले केवल डिजिटल धितोपत्रहरू (सेयर, ऋणपत्र) मात्र राख्छ। सेयर किनबेचको नगद कारोबार नेपाल क्लियरिङ हाउस (NCHL) सँग जोडिएका क्लियरिङ बैंकहरू (जस्तै: ग्लोबल आइएमई, प्रभु, नबिल, सिद्धार्थ) मार्फत सम्पन्न हुन्छ।'
        }
      },
      {
        num: 2,
        id: 'chap-2-boid-and-dp-structure',
        title: 'डिम्याट खाताको संरचना: १६ अङ्कको BOID र निक्षेप सदस्य (DP)',
        content: 'तपाईंको डिम्याट खाता नम्बरलाई १६ अङ्कको BOID (Beneficiary Owner Identification) भनिन्छ। यस नम्बरको संरचना यस प्रकार छ: (१) सुरुका ८ अङ्क: यो तपाईंको निक्षेप सदस्य (DP) को कोड हो (जस्तै: कुनै वाणिज्य बैंकको शाखा वा ब्रोकर कार्यालयको विशिष्ट कोड)। (२) पछिल्ला ८ अङ्क: यो सम्बन्धित बैंक वा ब्रोकरभित्र तपाईंको व्यक्तिगत ग्राहक नम्बर हो। धितोपत्र बोर्डको नियम अनुसार, नागरिकहरू सिधै CDSC को केन्द्रीय कार्यालय पुतलीसडक जान पाउँदैनन्; इजाजतप्राप्त बैंक, क्यापिटल वा ब्रोकर (जसलाई DP भनिन्छ) मार्फत मात्र सेवा लिन सकिन्छ। नेपालमा एकजना नागरिकले बढीमा दुईवटा मात्र डिम्याट खाता खोल्न पाउने कानुनी व्यवस्था छ।',
        callout: {
          type: 'tip',
          title: 'दुईवटा डिम्याट खाताको कानुनी सीमा',
          text: 'नेपालमा एउटै नागरिकता र PAN प्रयोग गरी दुईवटा भन्दा बढी डिम्याट खाता खोल्न पाइँदैन। यदि कसैले झुक्किएर तेस्रो खाता खोलेमा CDSC को केन्द्रीय प्रणालीले खाता रोक्का गरिदिन्छ र पछिल्ला IPO हरू रद्द हुन्छन्।'
        }
      },
      {
        num: 3,
        id: 'chap-3-edis-settlement-rules',
        title: 'EDIS सेयर हस्तान्तरण, WACC हिसाब मिलान र समयसीमाको नियम',
        content: 'जब तपाईं ब्रोकरको TMS मार्फत दोस्रो बजारमा सेयर बेच्नुहुन्छ, सेयर स्वतः ब्रोकरकहाँ जाँदैन। CDSC को नियम अनुसार बिक्रेताले तोकिएको समयसीमाभित्र (T+1 वा T+2 को बिहान १०:०० बजेअगावै) MeroShare मा गएर Electronic Disinvestment Instruction Slip (EDIS) मार्फत सेयर हस्तान्तरण गर्नुपर्छ। यसका लागि दुईवटा चरण पूरा गर्नुपर्छ: (१) My Purchase Source (WACC): आफूले किनेको वास्तविक लागत हिसाब प्रमाणित गर्नुपर्छ, जसका आधारमा पुँजीगत लाभकर (३६५ दिनभन्दा बढी होल्ड गरे ५%, ३६५ दिन वा कम भए ७.५%) हिसाब हुन्छ। (२) Transfer Shares: "My EDIS" मा गएर सम्बन्धित कारोबार छनोट गरी सेयर हस्तान्तरण स्वीकृत गर्नुपर्छ। यदि तोकिएको समयमा EDIS गरिएन भने "Short Delivery" हुन्छ, र CDSC ले कुल कारोबार रकमको २०% कानुनी जरिवाना (Close-Out Penalty) काटेर खरिदकर्तालाई क्षतिपूर्ति दिन्छ।',
        callout: {
          type: 'warning',
          title: '२०% क्लोज-आउट (Close-Out) जरिवानाबाट जोगिनुहोस्',
          text: 'यदि तपाईंले आइतबार रु. २,००,००० को सेयर बेचेर मंगलबार बिहानसम्म EDIS गर्न बिर्सनुभयो भने, CDSC ले तपाईंको खाताबाट सिधै २०% (रु. ४०,०००) जरिवाना काट्नेछ। सेयर बेचेकै दिन दिउँसो ३:३० बजे WACC र EDIS गर्ने बानी बसाल्नुहोस्।'
        }
      },
      {
        num: 4,
        id: 'chap-4-share-pledge-rokka',
        title: 'सेयर धितो कर्जा: बैंकबाट ऋण लिने (रोक्का) र फुकुवा प्रक्रिया',
        content: 'नेपाल राष्ट्र बैंकको एकीकृत निर्देशन अनुसार, बैंक तथा वित्तीय संस्थाहरूले सूचीकृत कम्पनीको सेयर धितो राखेर मार्जिन कर्जा (Margin Loan) प्रवाह गर्छन्। यसका लागि सेयर धितो राख्ने (Pledge/Rokka) प्रक्रिया CDSC मार्फत गरिन्छ: (१) ऋणी र बैंकबीच कर्जा सम्झौता हुन्छ; (२) बैंकले CDSC को प्रणालीमा रोक्काको अनुरोध पठाउँछ; (३) ऋणीले MeroShare को "Pledge" मेनुमा गएर रोक्का स्वीकार गर्नुपर्छ; (४) CDSC ले ती सेयरहरूलाई रोक्का स्थितिमा राख्छ। रोक्का भएको अवधिमा सो सेयर बेच्न पाइँदैन, तर कम्पनीले दिने नगद लाभांश र बोनस सेयर ऋणीकै अधिकारमा रहन्छ (बोनस सेयर स्वतः धितोमै रोक्का हुन्छ)। जब बैंकको सावाँ र ब्याज चुक्ता हुन्छ, बैंकले अनलाइन फुकुवा (Unpledge) आदेश पठाउँछ र २४ घण्टाभित्र सेयर सामान्य अवस्थामा फर्किन्छ।',
        callout: {
          type: 'important',
          title: 'राष्ट्र बैंकको मार्जिन कर्जा सीमा (LTV)',
          text: 'नेपाल राष्ट्र बैंकले १८० दिनको औसत बजार मूल्य वा पछिल्लो बजार मूल्यमध्ये जुन कम हुन्छ, त्यसको अधिकतम ७०% सम्म मात्र बैंकले सेयर धितो कर्जा दिन पाउने नियम तोकेको छ।'
        }
      },
      {
        num: 5,
        id: 'chap-5-annual-renewal-fees',
        title: 'वार्षिक नवीकरण शुल्क, ई-पेमेन्ट र खाता रोक्का हुने जोखिम',
        content: 'आफ्नो डिम्याट खाता सक्रिय राख्नका लागि हरेक वर्ष दुईवटा शुल्क बुझाउनुपर्छ: (१) डिम्याट वार्षिक सञ्चालन शुल्क: प्रति खाता वार्षिक रु. १०० (आफ्नो DP बैंक वा ब्रोकरलाई जाने)। (२) MeroShare वार्षिक शुल्क: प्रति खाता वार्षिक रु. ५० (सिधै CDSC लाई जाने)। यो शुल्क नेपाली आर्थिक वर्षको अन्त्य अर्थात् असार मसान्तभित्र तिर्नुपर्छ। यदि समयमै नवीकरण गरिएन भने DP ले खाता रोक्का (Freeze) गरिदिन्छ। खाता रोक्का भए पनि तपाईंको सेयर CDSC मा पूर्ण सुरक्षित रहन्छ, तर नयाँ IPO भर्न वा TMS मा सेयर बेच्न पाइँदैन। MeroShare भित्रै गएर connectIPS, eSewa, Khalti वा IME Pay बाट तुरुन्तै शुल्क तिरेर खाता सुचारु गर्न सकिन्छ।',
        callout: {
          type: 'tip',
          title: 'एकैपटक धेरै वर्षको अग्रिम नवीकरण गर्नुहोस्',
          text: 'MeroShare र बैंकहरूले ५ वर्ष वा १० वर्षको शुल्क एकैपटक अग्रिम तिर्ने सुविधा दिएका छन् (५ वर्षको लागि रु. ७५०)। यसो गर्दा हरेक असारमा हुने झन्झट र IPO भर्ने बेलामा खाता रोक्का हुने जोखिमबाट सधैँका लागि मुक्ति पाइन्छ।'
        }
      },
      {
        num: 6,
        id: 'chap-6-family-inheritance-namasari',
        title: 'पारिवारिक नामसारी, अपुताली हक हस्तान्तरण र कानुनी प्रक्रिया',
        content: 'यदि कुनै सेयरधनीको मृत्यु भयो वा परिवारका नजिकका सदस्यहरूबीच सेयर नामसारी गर्नुपर्यो भने CDSC को विनियमावली अनुसार नामसारी (Transmission) गर्नुपर्छ। दोस्रो बजार बाहिर व्यक्तिगत रूपमा सेयर किनबेच गर्न कानुनले पूर्ण रोक लगाएको छ, तर दुई अवस्थामा नामसारी हुन्छ: (१) मृत्युपश्चात् हक हस्तान्तरण: सेयरधनीको मृत्यु भएमा मृत्युदर्ता प्रमाणपत्र, वडा कार्यालयबाट जारी नाता प्रमाणित प्रमाणपत्र, सबै हकदारहरूको मञ्जुरीनामा र राष्ट्रिय दैनिक पत्रिकामा ३५ दिने सार्वजनिक सूचना प्रकाशित गरी DP मार्फत CDSC मा निवेदन दिनुपर्छ। त्यसपछि मृतकको डिम्याट बन्द गरी हकदारको डिम्याटमा सेयर सारिन्छ। (२) रगतको नाताभित्र बकसपत्र/दान: बाबु, आमा, छोरा, छोरी वा पति/पत्नीबीच मात्र वडाको सिफारिस र कर चुक्ता प्रमाणपत्रका आधारमा उपहारस्वरूप सेयर नामसारी गर्न पाइन्छ।',
        callout: {
          type: 'important',
          title: 'पुराना कागजी सेयर डिम्याट गराउने तरिका (DRF)',
          text: 'यदि घरमा पुराना कागजी सेयर प्रमाणपत्र छन् भने ती सिधै बजारमा बिक्दैनन्। सम्बन्धित कम्पनीको सेयर रजिष्ट्रार (RTS) मा गएर Demat Request Form (DRF) भरी ती कागजी सेयरलाई CDSC को डिम्याट खातामा डिजिटल रूपमा रूपान्तरण गर्नुपर्छ।'
        }
      }
    ],
    nepalContext: 'CDSC केन्द्रीय निक्षेप सेवा ऐन २०६३ र केन्द्रीय निक्षेप सेवा विनियमावली २०६८ अनुसार नेपाल धितोपत्र बोर्ड (SEBON) को प्रत्यक्ष सुपरिवेक्षणमा सञ्चालित संस्था हो। यसले ५० भन्दा बढी ब्रोकर कार्यालयहरू, ८० भन्दा बढी इजाजतप्राप्त बैंक तथा क्यापिटल (DP) हरू र ४ वटा राफसाफ बैंकहरूलाई एउटै डिजिटल नेटवर्कमा जोडेको छ। CDSC मा रहेको सेयरलाई मुलुकी देवानी संहिता २०७४ को परिच्छेद ५ बमोजिम कानुनी सम्पत्ति अधिकारको पूर्ण मान्यता प्राप्त छ, जसले गर्दा बैंक वा ब्रोकर डुबे पनि नागरिकको सेयर कहिल्यै गुम्दैन।',
    comparisonTable: {
      title: 'डिम्याट खाता, मेरोसेयर र सिडिएससी शुल्क संरचना',
      caption: 'सिडिएससी विनियमावली २०६८ बमोजिम लाग्ने कानुनी शुल्कहरूको विवरण',
      headers: ['सेवा प्रकार', 'तोकिएको शुल्क / सीमा', 'नियमनकारी निकाय', 'नवीकरण सर्त'],
      rows: [
        ['डिम्याट खाता खोल्ने', 'रु. ५० - रु. १५० (एक पटक)', 'निक्षेप सदस्य (DP बैंक/ब्रोकर)', 'वार्षिक रु. १०० (प्रत्येक असार मसान्तभित्र)'],
        ['मेरोसेयर दर्ता', 'रु. ५० वार्षिक', 'सिडिएससी / डीपी', 'वार्षिक रु. ५० नवीकरण (म्याद सकिए बन्द)'],
        ['C-ASBA आवेदन शुल्क', 'रु. ० देखि अधिकतम रु. ५', 'धितोपत्र बोर्ड / सम्बन्धित बैंक', 'प्रत्येक IPO आवेदनमा सिधै कट्टी हुने'],
        ['EDIS सेयर हस्तान्तरण', 'निःशुल्क (T+2 समयभित्र)', 'सिडिएससी क्लियरिङ हाउस', 'सेयर बिक्री भएको २४ घण्टाभित्र अनिवार्य'],
        ['सेयर धितो कर्जा (रोक्का)', 'रु. ५० प्रति कम्पनी', 'सिडिएससी / वाणिज्य बैंक', 'कर्जा चुक्ता भएपछि फुकुवा हुने']
      ]
    },
    practicalScenario: {
      persona: 'सरिता, ४८, गृहिणी (पोखरा)',
      challenge: 'बुबाको देहान्तपछि सरिताले घरमा वि.सं. २०६५ सालतिर जारी भएका एउटा वाणिज्य बैंक र हाइड्रोपावर कम्पनीका कागजी सेयर प्रमाणपत्रहरू भेटाइन्। उनको आफ्नै डिम्याट खाता थिएन र आफन्तहरूले पुराना कागजी सेयरको म्याद सकिएर खेर गइसकेको बताएपछि उनी चिन्तित थिइन्।',
      solution: 'सरिताले पोखरास्थित बैंकमा आफ्नो बचत खाता र नयाँ डिम्याट खाता खोलिन्। risePaisa को CDSC चेकलिस्ट अनुसार उनले वडा कार्यालयबाट नाता प्रमाणित प्रमाणपत्र लिइन् र काठमाडौँस्थित सेयर रजिष्ट्रार (RTA) कार्यालयमा कागजी प्रमाणपत्र बुझाइन्। RTA ले कागजात जाँच गरी ३५ दिने पत्रिका सूचना निकालेपछि सो सेयर CDSC मार्फत सरिताको डिम्याट खातामा नामसारी गरिदियो। वर्षौँको बोनस सेयर जोडिएर १,२०० कित्ता पुगेको सो सेयरको बजार मूल्य रु. ४,८०,००० भन्दा बढी भयो, र जम्मा भएको नगद लाभांश पनि सिधै उनको बैंक खातामा आयो।'
    },
    calculatorShortcut: {
      slug: 'nepse-share',
      name: 'NEPSE सेयर नाफा तथा लागत क्याल्कुलेटर',
      desc: 'डिम्याट सेयर बेच्दा लाग्ने ब्रोकर कमिसन, SEBON शुल्क, DP चार्ज र पुँजीगत लाभकर हिसाब गर्नुहोस्।'
    },
    downloadableResources: [
      {
        title: 'CDSC डिम्याट नामसारी तथा हक हस्तान्तरण चेकलिस्ट',
        type: 'PDF गाइड',
        size: '१.२ MB',
        href: 'assets/downloads/cdsc-demat-transfer-checklist.html'
      }
    ],
    faqs: [
      {
        q: 'वार्षिक शुल्क नतिरेर डिम्याट खाता रोक्का भएमा कसरी खुलाउने?',
        a: 'meroshare.cdsc.com.np मा लगइन गरी दायाँ कुनाको प्रोफाइलमा गएर "Renew Account" छनोट गर्नुहोस्। connectIPS, eSewa वा Khalti मार्फत डिम्याटको रु. १०० र मेरोसेयरको रु. ५० तिर्नुहोस्। भुक्तानी भएको १५ मिनेटदेखि २ घण्टाभित्र तपाईंको खाता स्वतः सक्रिय हुन्छ।'
      },
      {
        q: 'के एउटा डिम्याट खाताबाट अर्को डिम्याट खातामा सेयर सार्न मिल्छ?',
        a: 'मिल्छ। तर यसका लागि अनलाइनबाट सिधै मिल्दैन। दुवै १६ अङ्कको डिम्याट खाता एउटै व्यक्तिको नागरिकता र PAN मा रहेको प्रमाणसहित आफ्नो DP शाखामा गई Inter-DP Transfer फारम भर्नुपर्छ। यसमा प्रति कम्पनी रु. २५ शुल्क लाग्छ।'
      },
      {
        q: 'DP (निक्षेप सदस्य) र CDSC बीच के भिन्नता छ?',
        a: 'CDSC भनेको नेपाल सरकार र NEPSE अन्तर्गतको केन्द्रीय भल्ट सञ्चालन गर्ने मुख्य संस्था हो। DP भनेको इजाजतप्राप्त बैंक वा क्यापिटल हुन् जसले स्थानीय शाखाको रूपमा ग्राहकलाई डिम्याट खाता खोलिदिन्छन्। तपाईंको सेयर DP मा होइन, CDSC को केन्द्रीय भल्टमा सुरक्षित रहन्छ।'
      },
      {
        q: 'डिम्याट खाता रोक्का हुँदा बैंक खातामा आउने नगद लाभांश रोकिन्छ कि रोकिँदैन?',
        a: 'रोकिँदैन। कम्पनीले बाँड्ने नगद लाभांश NCHL मार्फत सिधै तपाईंको बैंक खातामै जम्मा हुन्छ। तर बोनस सेयर भने नवीकरण शुल्क नतिरेसम्म CDSC ले रोकेर राख्छ र नवीकरण हुनासाथ डिम्याटमा पठाउँछ।'
      }
    ],
    whereToGoNext: {
      nextLesson: {
        title: 'इडीआईएस सेयर हस्तान्तरण र राफसाफ नियम',
        slug: 'edis-transfer-rules',
        categorySlug: 'nepse',
        readTime: '१४ मिनेट पढाइ'
      },
      nextGuide: {
        title: 'नेप्से टीएमएस ब्रोकरको सम्पूर्ण गाइड',
        slug: 'complete-tms-guide',
        readTime: '१८ मिनेट पढाइ'
      },
      nextCalculator: {
        title: 'नेप्से सेयर कारोबार तथा ब्रोकर कमिसन क्याल्कुलेटर',
        slug: 'nepse-share'
      },
      nextGlossary: {
        title: 'हितग्राही पहिचान नम्बर (BOID)',
        term: 'बीओआईडी',
        def: 'नेपालमा सेयर लगानीकर्ताको डिम्याट खाता पहिचान गर्ने १६ अंकको विशिष्ट नम्बर।'
      }
    }
  }
};

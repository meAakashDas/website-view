// ==============================================
// risePaisa - Additional Cornerstone Guides for Nepal
// Elevated Publications: Remittance & Migrant Banking, Karja Suchana Kendra (CIC) Credit Scoring,
// Bank Debentures & Bonds, and Personal Net Worth Audit System
// ==============================================

export const ADDITIONAL_GUIDES = {
  // ── 1. Complete Remittance & Foreign Employment Guide ───────────────────
  'complete-nepal-remittance-guide': {
    id: 'complete-nepal-remittance-guide',
    slug: 'complete-nepal-remittance-guide',
    categorySlug: 'economics',
    categoryName: { en: 'Economics & Remittance', np: 'अर्थतन्त्र र रेमिट्यान्स' },
    title: {
      en: 'Complete Nepal Remittance, Foreign Employment & Demat Guide',
      np: 'नेपालमा वैदेशिक रोजगारी, रेमिट्यान्स र १०% सेयर आरक्षणको पूर्ण गाइड'
    },
    oneLineSummary: {
      en: 'Master formal remittance rails in Nepal: avoiding illegal Hundi traps, claiming the 10% reserved Foreign Employment IPO quota, opening FCY convertible bank accounts, and channeling remittance into productive wealth.',
      np: 'नेपालमा वैदेशिक रोजगारीको कमाइ सुरक्षित भित्र्याउने, गैरकानुनी हुण्डीबाट बच्ने, १०% आरक्षित वैदेशिक रोजगारी IPO भर्ने र रेमिट्यान्सलाई दीर्घकालीन सम्पत्तिमा बदल्ने सम्पूर्ण विधि।'
    },
    difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
    readTime: { en: '14 min read', np: '१४ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: {
      en: 'Verified for NRB Foreign Exchange Regulations & SEBON IPO Directives',
      np: 'नेपाल राष्ट्र बैंकको विदेशी विनिमय नियम तथा धितोपत्र बोर्डको निर्देशिका अनुसार प्रमाणित'
    },
    prerequisites: [
      { title: 'Valid Nepali Passport & Foreign Employment Labor Permit (Shram Swikriti)', type: 'Document' },
      { title: 'Remittance Bank Account in a Class A Commercial Bank in Nepal', type: 'Prerequisite' },
      { title: 'Demat & MeroShare linked to Remittance Account with CRN', type: 'Prerequisite' }
    ],
    en: {
      intro: 'Remittance contributes nearly 25% to 30% of Nepal’s Gross Domestic Product (GDP), representing the financial lifeline for over four million households. Yet for decades, migrant workers in the Gulf, Malaysia, South Korea, Japan, and Europe have faced severe financial exploitation: falling victim to unregulated and illegal Hundi operators, seeing their hard-earned foreign currency consumed entirely by lifestyle inflation back home, and missing out on national wealth creation opportunities. In response, Nepal Rastra Bank (NRB) and the Securities Board of Nepal (SEBON) introduced transformative protections-including a mandatory 10% IPO reservation quota exclusively for documented migrant workers, higher interest rate premiums on remittance fixed deposits, and tax exemption under Section 11 of the Income Tax Act. Mastering these formal rails protects your family, builds compounding security, and ensures you return home with permanent wealth.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-hundi-vs-formal-banking',
          title: 'Formal Banking Rails vs. Illegal Hundi: The Hidden Legal & Financial Risks',
          content: 'Hundi is an informal, trust-based money transfer system operating entirely outside the regulated banking network. Operators in Dubai, Doha, or Kuala Lumpur take your foreign currency (AED, QAR, MYR) and instruct domestic associates in Kathmandu or Biratnagar to pay Nepali Rupees (NPR) in cash or via local bank transfers. While Hundi touts slightly higher exchange rates (NPR 1-2 more per dollar) and zero visible fees, it is strictly criminalized under the Foreign Exchange (Regulation) Act 2019 and Money Laundering Prevention Act 2064. If a local Hundi courier is intercepted by Nepal Police or the Department of Revenue Investigation (DRI), your recipient’s bank account is immediately frozen, the entire transferred sum is confiscated as illegal proceeds, and both sender and receiver face hefty fines and imprisonment. Formal remittance through Class A banks, IME, Prabhu Money Transfer, or City Express provides sovereign legal documentation, eligibility for government social security, and state-backed dispute resolution.',
          callout: {
            type: 'warning',
            title: 'Hundi Transactions Leave Zero Legal Proof',
            text: 'When you transfer money via Hundi, you hold no verifiable receipt. If the local agent refuses to deliver the money or absconds, no bank, court, or police station can recover your lost wages.'
          }
        },
        {
          num: 2,
          id: 'chap-2-foreign-employment-ipo-quota',
          title: 'The 10% Foreign Employment IPO Quota: How to Apply & Secure Allotments',
          content: 'Under SEBON’s Securities Issuance and Allotment Directive, every company issuing shares to the general public must reserve exactly 10% of its total equity issue exclusively for Nepali citizens working abroad with valid government labor approval (Shram Swikriti). Unlike general public IPOs-where 1.5 to 2 million applicants fight for 20,000 to 50,000 allotments, resulting in an allotment lottery probability under 2%-the Foreign Employment quota features an allotment probability that frequently exceeds 50% to 100%! To qualify: (1) You must hold a valid labor permit (श्रम स्वीकृति) issued by the Department of Foreign Employment (DoFE). (2) You must open a dedicated "Remittance Savings Account" in a Class A commercial bank. (3) You must remit at least NPR 50,000 through formal banking channels into that account within the preceding six months. (4) Apply online via MeroShare under the "Foreign Employment Quota" tab during the exclusive pre-opening window (typically 15 days before the public issue opens).',
          callout: {
            type: 'important',
            title: 'The NPR 50,000 Inflow Rule',
            text: 'Your bank verifies that at least NPR 50,000 was formally remitted from abroad into your remittance account within the 6 months prior to applying. Local cash deposits do NOT qualify.'
          }
        },
        {
          num: 3,
          id: 'chap-3-remittance-bank-accounts-premium-yields',
          title: 'Remittance Bank Accounts & 1% Interest Rate Premiums',
          content: 'To incentivize formal foreign exchange inflows into national reserves, Nepal Rastra Bank mandates that commercial banks offer a minimum of 100 basis points (1.0% additional interest) on Remittance Savings Accounts and Remittance Fixed Deposits compared to standard domestic deposit rates. For instance, if domestic fixed deposits yield 6.5%, a remittance FD legally yields at least 7.5%. Furthermore, workers can open Foreign Currency (FCY) Convertible Accounts (denominated in USD, EUR, GBP, or AUD) in Nepal, shielding savings from domestic Rupee depreciation while allowing authorized international withdrawals and investments upon repatriation.',
          callout: {
            type: 'tip',
            title: 'Ask for the Remittance FD Rate',
            text: 'Always ensure your account is specifically tagged as a "Remittance Account" in the bank’s Core Banking System (CBS) to automatically receive the additional 1% interest and C-ASBA verification eligibility.'
          }
        },
        {
          num: 4,
          id: 'chap-4-curbing-consumption-trap',
          title: 'Overcoming the Consumption Trap: Turning Remittance into Permanent Assets',
          content: 'Studies by the Central Bureau of Statistics indicate that over 75% of inward remittance into Nepal is consumed immediately by daily household groceries, imported electronics, and urban real estate speculation, leaving families economically vulnerable the day the overseas worker returns. To overcome this "Remittance Trap", enforce the 40-30-30 Remittance Allocation: (1) 40% Living Needs: Rent/home upkeep, school fees, and daily nutrition. (2) 30% Family Safety & Debt Elimination: Paying down informal loans borrowed to pay recruitment agents (manpower fees) and building a 6-month emergency reserve. (3) 30% Productive Wealth: Automated monthly SIPs in open-ended mutual funds, bank debentures, and applying for every reserved IPO. Within 5 years, this produces a self-sustaining asset base generating steady dividends that exceed overseas wages.',
          callout: {
            type: 'tip',
            title: 'The Overseas SIP Formula',
            text: 'Set up standing instructions connecting your remittance account to an open-ended mutual fund (like NIBL Sahabhagita Fund or Siddhartha Systematic Investment Scheme) so NPR 10,000 to NPR 20,000 is automatically invested every month.'
          }
        },
        {
          num: 5,
          id: 'chap-5-tax-exemption-and-legal-declaration',
          title: 'Tax Exemption under Section 11 and Source of Funds Proof',
          content: 'Under the Income Tax Act 2058 of Nepal, foreign inward remittances sent by individuals through legal banking channels to family members for household maintenance or investment are 100% EXEMPT from Nepali income tax. Neither the sender nor the recipient is required to pay TDS or income tax on remitted wages. However, to purchase high-value assets in Nepal (such as land registered at Malpot or commercial vehicles) or deposit amounts exceeding NPR 10 Lakh in a bank, the recipient must provide a formal "Source of Funds" declaration. Bank remittance advice slips and SWIFT transfer receipts serve as unassailable sovereign proof of legitimate income, preventing harassment by tax auditors and the Anti-Money Laundering (AML) enforcement units.',
          callout: {
            type: 'tip',
            title: 'Download SWIFT Slips Regularly',
            text: 'Save PDF copies of your digital remittance receipts, SWIFT MT103 confirmations, or IME/Prabhu transaction numbers in a secure Google Drive folder for future land registration and tax clearance.'
          }
        },
        {
          num: 6,
          id: 'chap-6-repatriation-and-ssf-informal',
          title: 'Social Security Fund (SSF) for Migrant Workers & Reintegration',
          content: 'The Government of Nepal has incorporated migrant workers into the formal Social Security Fund (SSF) under the Foreign Employment Scheme. Contributing just NPR 2,000 per month (NPR 24,000 annually) entitles overseas workers to comprehensive accident insurance (up to NPR 7 Lakh), permanent disability pensions, dependent family pensions, funeral grants (NPR 25,000), and old-age retirement pensions. Reintegration grants and soft loans (subsidized interest rates) are also available through the Foreign Employment Board (FEB) for workers who return home with verified skills to establish agricultural, manufacturing, or service businesses.',
          callout: {
            type: 'important',
            title: 'Maintain Your SSF ID',
            text: 'Keep your SSF biometric card number active throughout your overseas tenure. Even after returning to Nepal, your accumulated pension contributions remain credited to your personal account.'
          }
        }
      ],
      nepalContext: 'Nepal Rastra Bank strictly monitors cross-border foreign currency flows under the Foreign Exchange Regulation Act. With the national foreign exchange reserve requirements tightly linked to import cover (NRB targets at least 7 months of goods and services imports), remitting through formal channels directly strengthens Nepal’s macroeconomic sovereignty while giving families legal eligibility for subsidized government entrepreneurship loans.',
      comparisonTable: {
        title: 'Formal Banking Channels vs. Illegal Hundi in Nepal',
        caption: 'Detailed side-by-side risk and benefit analysis',
        headers: ['Feature', 'Formal Banking & Money Transfer', 'Illegal Hundi Network'],
        rows: [
          ['Legal Standing', '100% Legal & Approved by Nepal Rastra Bank', 'Criminal offence under Foreign Exchange Act 2019'],
          ['SEBON 10% IPO Quota', 'Fully Eligible (High allotment chance >50%)', 'Completely Ineligible (Zero official banking records)'],
          ['Bank Interest Rate', '+1.0% Additional Interest Premium on FDs', 'Standard domestic rate or unbanked cash'],
          ['Loss of Money Risk', 'Zero (Protected by Bank & NRB Insurance)', 'High (Immediate total loss if courier seized)'],
          ['Tax & Legal Proof', 'Valid Source of Funds for Land & House Purchase', 'Account freezing risk by DRI & Money Laundering Bureau']
        ]
      },
      practicalScenario: {
        persona: 'Khem, 31, working in Dubai as an HVAC technician',
        challenge: 'For four years, Khem sent AED 2,500 (approx. NPR 90,000) every month through informal Hundi agents because the local shopkeeper gave him 50 paisa higher rate per Dirham. Back home, his family spent the cash on groceries and electronics, leaving zero savings. Furthermore, when his wife tried to buy a 4-Aana land plot in Jhapa, the land revenue office (Malpot) asked for bank tax clearance, which they could not provide.',
        solution: 'Khem switched entirely to formal banking: he opened a Global IME Remittance Savings Account via the bank’s mobile app, renewed his Shram Swikriti through DoFE, and obtained a Demat/MeroShare account with C-ASBA authorization. He set up an automated monthly split: NPR 45,000 for household needs, NPR 20,000 in a 1-year Remittance FD yielding 8.25%, and applied for every upcoming IPO under the reserved 10% Foreign Employment quota. Within 18 months, he was allotted shares in four hydropower and manufacturing IPOs (worth over NPR 1,80,000 at market price) and accumulated over NPR 3,60,000 in government-verified savings with clean source-of-income documentation.'
      },
      calculatorShortcut: {
        slug: 'sip',
        name: 'Nepal Systematic Investment Plan (SIP) Calculator',
        desc: 'Calculate how investing NPR 15,000 of monthly remittance into an open-ended mutual fund compounds into over NPR 35 Lakh in 10 years.'
      },
      downloadableResources: [
        {
          title: 'Nepal Migrant Worker Financial Independence Checklist (PDF)',
          type: 'PDF Guide',
          size: '310 KB',
          href: 'assets/downloads/nepal-bank-rates-debenture-guide.html'
        }
      ],
      faqs: [
        {
          q: 'Can I apply for both the General Public IPO and the Foreign Employment Quota at the same time?',
          a: 'No. You must choose one. However, applying under the Foreign Employment Quota is dramatically more advantageous because the allotment probability is 25 to 50 times higher due to fewer total applicants competing for 10% of total shares.'
        },
        {
          q: 'How do I renew my Shram Swikriti online while working abroad?',
          a: 'You can renew your labor permit digitally through the Department of Foreign Employment FEIMS portal (fims.dofe.gov.np) without returning to Nepal, paying the foreign employment welfare fund and mandatory insurance via international card or digital wallets.'
        },
        {
          q: 'Is money sent from abroad to my parents or spouse taxed in Nepal?',
          a: 'No. Remittance sent for household maintenance and personal investments is 100% exempt from income tax in Nepal under Section 11 of the Income Tax Act.'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'Remittance: The Financial Engine of Modern Nepal',
          slug: 'remittance-nepal-economic-lifeline',
          categorySlug: 'economics',
          readTime: '22 min read'
        },
        nextGuide: {
          title: 'Complete MeroShare & CDSC Guide',
          slug: 'complete-meroshare-guide',
          readTime: '12 min read'
        },
        nextCalculator: {
          title: 'SIP Calculator',
          slug: 'sip'
        },
        nextGlossary: {
          title: 'Foreign Employment Quota',
          term: 'Foreign Employment IPO Quota (वैदेशिक रोजगार आरक्षण)',
          def: 'Mandatory 10% equity reservation in all public share offerings reserved exclusively for documented Nepali workers abroad.'
        }
      }
    },
    np: {
      intro: 'नेपालको कुल गार्हस्थ उत्पादन (GDP) मा रेमिट्यान्सको हिस्सा करिब २५% देखि ३०% रहेको छ, जसले ४० लाखभन्दा बढी घरपरिवारको दैनिक जीवन धानिरहेको छ। तर दशकौँदेखि खाडी मुलुक, मलेसिया, दक्षिण कोरिया, जापान र युरोपमा रगत-पसिना बगाउने श्रमिकहरू विभिन्न वित्तीय शोषण र जोखिममा पर्दै आएका छन्: गैरकानुनी हुण्डीको चंगुलमा फस्ने, पठाएको रकम उत्पादनहीन उपभोग र देखावटी खर्चमा सकिने, र देशको पुँजी बजारको अवसरबाट वञ्चित हुने। यी समस्या समाधान गर्न नेपाल राष्ट्र बैंक र धितोपत्र बोर्ड (SEBON) ले ऐतिहासिक व्यवस्था गरेका छन्-जसमा वैदेशिक रोजगारीमा रहेका नेपालीका लागि प्राथमिक सेयर (IPO) मा १०% अनिवार्य आरक्षण, मुद्दती निक्षेपमा १% थप अतिरिक्त ब्याज, र आयकर ऐनको दफा ११ अनुसार पूर्ण कर छुट सामेल छन्। यी कानुनी माध्यम अपनाउँदा तपाईंको कमाइ सुरक्षित हुन्छ र स्वदेश फर्किँदा स्थायी सम्पत्तिको मालिक बन्न सकिन्छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-hundi-vs-formal-banking',
          title: 'कानुनी बैंकिङ माध्यम र गैरकानुनी हुण्डी: ठूलो जोखिम र कानुनी कारबाही',
          content: 'हुण्डी भनेको नियमनकारी बैंकिङ प्रणाली बाहिरबाट गरिने अनौपचारिक रकम ओसारपसार हो। विदेशमा एजेन्टलाई पैसा दिइन्छ र नेपालमा त्यसका प्रतिनिधिले नगद वा स्थानीय खाताबाट रकम भुक्तानी गर्छन्। हुण्डीले बैंकको भन्दा प्रति डलर १-२ रुपैयाँ बढी दिने प्रलोभन देखाए पनि यो विदेशी विनिमय (नियमित गर्ने) ऐन २०१९ र सम्पत्ति शुद्धीकरण निवारण ऐन २०६४ अन्तर्गत गम्भीर फौजदारी अपराध हो। नेपाल प्रहरी वा राजस्व अनुसन्धान विभागले हुण्डीको संजाल समात्दा रकम पाउने व्यक्तिको बैंक खाता तुरुन्त रोक्का हुन्छ, सम्पूर्ण रकम जफत गरिन्छ र जेल सजाय समेत हुन सक्छ। औपचारिक बैंक वा रेमिट कम्पनीबाट पैसा पठाउँदा राज्यले पूर्ण कानुनी सुरक्षा दिन्छ र भविष्यमा सम्पत्ति खरिद गर्दा वैध आम्दानीको प्रमाण बन्छ।',
          callout: {
            type: 'warning',
            title: 'हुण्डी कारोबारमा कुनै कानुनी रसिद हुँदैन',
            text: 'हुण्डीबाट पठाएको रकम एजेन्टले बीचमै खाइदिएमा वा भागेमा कुनै पनि बैंक, अदालत वा प्रहरीले तपाईंको मिहिनेतको कमाइ फिर्ता दिलाउन सक्दैन।'
          }
        },
        {
          num: 2,
          id: 'chap-2-foreign-employment-ipo-quota',
          title: '१०% वैदेशिक रोजगारी IPO आरक्षण: आवेदन दिने र सेयर पार्ने पक्का विधि',
          content: 'धितोपत्र बोर्डको नियमावली अनुसार सर्वसाधारणलाई सेयर निष्कासन गर्ने हरेक कम्पनीले श्रम स्वीकृति लिएका वैदेशिक रोजगारमा रहेका नेपालीका लागि कुल निष्कासनको ठ्याक्कै १०% सेयर अनिवार्य रूपमा छुट्याउनुपर्छ। सामान्य सर्वसाधारणतर्फ १५-२० लाख जनाले आवेदन दिँदा सेयर पर्ने सम्भावना २% भन्दा कम हुन्छ, तर वैदेशिक रोजगारी कोटामा आवेदन दिने थोरै हुने भएकाले सेयर पर्ने सम्भावना ५०% देखि १००% सम्म हुन्छ! यसको लागि योग्यता: (१) वैदेशिक रोजगार विभागबाट जारी भएको वैध श्रम स्वीकृति हुनुपर्छ। (२) नेपालको ‘क’ वर्गको बैंकमा "रेमिट्यान्स बचत खाता" खोलेको हुनुपर्छ। (३) पछिल्लो ६ महिनाभित्र सो खातामा कम्तीमा रु. ५०,००० बैंकिङ माध्यमबाट विदेशबाटै जम्मा भएको हुनुपर्छ। (४) MeroShare मार्फत सर्वसाधारणका लागि खुल्नुभन्दा १५ दिनअघि नै खुल्ने आरक्षण कोटामा आवेदन दिनुपर्छ।',
          callout: {
            type: 'important',
            title: 'रु. ५०,००० औपचारिक रेमिट्यान्स अनिवार्य',
            text: 'आवेदन दिनुभन्दा पछिल्लो ६ महिनाभित्र कम्तीमा ५० हजार रुपैयाँ बैंकिङ माध्यमबाट खातामा आएको हुनुपर्छ। नेपालमै नगद जम्मा गरेको रकम यसमा मान्य हुँदैन।'
          }
        },
        {
          num: 3,
          id: 'chap-3-remittance-bank-accounts-premium-yields',
          title: 'रेमिट्यान्स खातामा १% थप अतिरिक्त ब्याजको फाइदा',
          content: 'नेपालमा विदेशी मुद्राको सञ्चिति बढाउन नेपाल राष्ट्र बैंकले वाणिज्य बैंकहरूलाई सामान्य मुद्दती निक्षेपको भन्दा रेमिट्यान्स मुद्दती निक्षेपमा कम्तीमा १ प्रतिशत बिन्दु (100 basis points) बढी ब्याज दिनैपर्ने अनिवार्य व्यवस्था गरेको छ। यदि सामान्य मुद्दतीमा ६.५% ब्याज छ भने रेमिट्यान्स मुद्दतीमा कम्तीमा ७.५% पाइन्छ। साथै, कामदारहरूले नेपालका बैंकहरूमा परिवर्त्य विदेशी मुद्रा खाता (FCY Account) पनि खोल्न सक्छन्, जसले नेपाली रुपैयाँ अवमूल्यन हुने जोखिमबाट जोगाउँछ।',
          callout: {
            type: 'tip',
            title: 'बैंकमा खाता "Remittance" नै भएको निश्चित गर्नुहोस्',
            text: 'आफ्नो बैंक खाता Core Banking System मा Remittance Savings Account भनेर प्रविष्ट भएको यकिन गर्नुहोस्, जसले गर्दा थप ब्याज र C-ASBA प्रमाणित हुन सजिलो हुन्छ।'
          }
        },
        {
          num: 4,
          id: 'chap-4-curbing-consumption-trap',
          title: 'रेमिट्यान्सको उपभोग पासो तोड्ने: ४०-३०-३० को सम्पत्ति निर्माण नियम',
          content: 'तथ्यांक अनुसार विदेशबाट आएको ७५% भन्दा बढी रकम दैनिक उपभोग, विलासिताका सामान र देखावटी खर्चमै सकिन्छ, जसले गर्दा स्वदेश फर्किएपछि कामदार पुनः रित्तो हात हुने गर्छन्। यसबाट बच्न ४०-३०-३० को नियम लगाउनुहोस्: (१) ४०% घर खर्च: परिवारको खाना, कोठा भाडा, औषधि र छोराछोरीको पढाइ। (२) ३०% ऋण भुक्तानी र सुरक्षा: विदेश जाँदा लागेको चर्को ब्याजको ऋण तिर्ने र ६ महिनाको आपतकालीन कोष बनाउने। (३) ३०% उत्पादनशील लगानी: खुलामुखी म्युचुअल फण्डमा मासिक SIP, बैंक डिबेन्चर र हरेक महिना आउने आरक्षण IPO भर्ने। ५ वर्ष यो नियम पालना गर्दा विदेशमा कमाउने बराबरको मासिक प्रतिफल स्वदेशमै आउन थाल्छ।',
          callout: {
            type: 'tip',
            title: 'मासिक SIP सुरु गर्नुहोस्',
            text: 'रेमिट्यान्स खाताबाट सिधै महिनाको १० देखि २० हजार रुपैयाँ खुलामुखी म्युचुअल फण्डमा SIP मार्फत स्वतः लगानी हुने व्यवस्था मिलाउनुहोस्।'
          }
        },
        {
          num: 5,
          id: 'chap-5-tax-exemption-and-legal-declaration',
          title: 'आयकर ऐनको दफा ११: पूर्ण कर छुट र कानुनी स्रोतको प्रमाण',
          content: 'नेपालको आयकर ऐन २०५८ अनुसार विदेशमा कमाएर बैंकिङ माध्यमबाट घरपरिवारलाई पठाएको रेमिट्यान्समा नेपाल सरकारले कुनै पनि आयकर वा TDS लिँदैन, यो शतप्रतिशत करमुक्त हुन्छ। तर भविष्यमा काठमाडौँ वा शहरमा जग्गा किन्दा वा मालपोतमा लिखत पारित गर्दा, वा बैंकमा १० लाखभन्दा बढी रकम राख्दा "सम्पत्तिको स्रोत" देखाउनुपर्छ। औपचारिक बैंकबाट पठाएको रेमिट्यान्स स्लिप र SWIFT भौचरले जीवनभर वैध सम्पत्तिको अकाट्य प्रमाणको काम गर्छ।',
          callout: {
            type: 'tip',
            title: 'रेमिट्यान्स स्लिपहरू सुरक्षित राख्नुहोस्',
            text: 'बैंक वा मोबाइल एपबाट पठाएको हरेक कारोबारको डिजिटल भौचर Google Drive मा सुरक्षित राख्नुहोस्, जसले भविष्यमा जग्गा पास गर्दा र कर चुक्ता लिँदा प्रमाण दिन्छ।'
          }
        },
        {
          num: 6,
          id: 'chap-6-repatriation-and-ssf-informal',
          title: 'वैदेशिक रोजगार सामाजिक सुरक्षा कोष (SSF) र पेन्सन',
          content: 'नेपाल सरकारले वैदेशिक रोजगारीमा रहेका श्रमिकहरूलाई सामाजिक सुरक्षा कोष (SSF) मा समेटेको छ। मासिक मात्र रु. २,००० योगदान गर्दा दुर्घटना तथा अशक्तता सुरक्षा, आश्रित परिवार सुविधा, काजकिरिया खर्च (रु. २५,०००) र ६० वर्ष पुगेपछि आजीवन मासिक पेन्सनको ग्यारेन्टी हुन्छ। साथै, वैदेशिक रोजगार बोर्डबाट स्वदेश फर्किएका युवाहरूलाई सीप अनुसार सहुलियतपूर्ण कर्जा र उद्यमशीलता अनुदान समेत उपलब्ध गराइन्छ।',
          callout: {
            type: 'important',
            title: 'SSF नम्बर सधैँ चालु राख्नुहोस्',
            text: 'विदेशमा रहँदा SSF मा जम्मा भएको रकम तपाईं स्वदेश फर्किएपछि पनि सुरक्षित रहन्छ र भविष्यमा नेपालमै काम गर्दा सोही खातामा थपिँदै जान्छ।'
          }
        }
      ],
      nepalContext: 'नेपाल राष्ट्र बैंकले विदेशी विनिमय ऐन मार्फत रेमिट्यान्सलाई उच्च प्राथमिकता दिएको छ। देशको विदेशी मुद्रा सञ्चितिलाई बलियो बनाउन औपचारिक माध्यमबाट पठाइएको रकमले राष्ट्रिय अर्थतन्त्रलाई टेवा पुर्‍याउनुका साथै श्रमिकको परिवारलाई कानुनी संरक्षण प्रदान गर्दछ।',
      comparisonTable: {
        title: 'औपचारिक बैंकिङ माध्यम र गैरकानुनी हुण्डीको तुलना',
        caption: 'नेपालमा रकम पठाउँदा कानुनी र अनौपचारिक माध्यम बीचको मुख्य भिन्नता',
        headers: ['सुविधा / जोखिम', 'औपचारिक बैंक तथा रेमिट', 'गैरकानुनी हुण्डी'],
        rows: [
          ['कानुनी मान्यता', '१००% वैध, राष्ट्र बैंकबाट पूर्ण ग्यारेन्टी', 'गैरकानुनी, विदेशी विनिमय ऐन अनुसार जेल सजाय'],
          ['१०% IPO आरक्षण', 'पूर्ण रूपमा योग्य (सेयर पर्ने सम्भावना >५०%)', 'अयोग्य (कुनै बैंकिङ प्रमाण नहुने)'],
          ['बैंक ब्याजदर', 'मुद्दती निक्षेपमा थप १% अतिरिक्त ब्याज', 'कुनै अतिरिक्त ब्याज नपाइने'],
          ['पैसा डुब्ने जोखिम', 'शून्य (बैंक तथा राष्ट्र बैंकको पूर्ण सुरक्षा)', 'उच्च (एजेन्ट भागेमा वा समातिएमा पूरै रकम जफत)'],
          ['जग्गा खरिदमा प्रमाण', 'सम्पत्तिको वैध स्रोतको अकाट्य प्रमाण', 'राजस्व र सम्पत्ति शुद्धीकरण अनुसन्धानको जोखिम']
        ]
      },
      practicalScenario: {
        persona: 'खेम, ३१ वर्ष, दुबईमा HVAC प्राविधिक',
        challenge: 'खेमले चार वर्षसम्म प्रति महिना AED २,५०० (करिब रु. ९०,०००) स्थानीय हुण्डी एजेन्ट मार्फत पठाए किनभने उसले प्रति दिर्हाम ५० पैसा बढी दिन्थ्यो। नेपालमा परिवारले त्यो पैसा दैनिक खर्चमै सिध्याए, बचत केही भएन। जब झापामा ४ आना घडेरी किन्न खोजे, मालपोत कार्यालयले बैंकिङ स्रोत माग्यो तर उनीहरूसँग कुनै कानुनी प्रमाण थिएन।',
        solution: 'खेमले हुण्डी पूर्ण रूपमा बन्द गरे: उनले ग्लोबल आइएमई बैंकमा अनलाइनबाट रेमिट्यान्स खाता खोले, श्रम स्वीकृति अनलाइन नवीकरण गरे र C-ASBA सहितको MeroShare लिए। उनले मासिक रु. ४५,००० घर खर्च पठाए, रु. २०,००० रेमिट्यान्स मुद्दतीमा ८.२५% ब्याजमा राखे, र १०% आरक्षण कोटाबाट आउने हरेक IPO भरे। १८ महिनाभित्र उनलाई ४ वटा जलविद्युत कम्पनीको सेयर पर्‍यो (बजार मूल्य रु. १,८०,००० भन्दा बढी) र बैंकमा रु. ३,६०,००० को कानुनी बचत जम्मा भयो।'
      },
      calculatorShortcut: {
        slug: 'sip',
        name: 'नेपाल SIP क्याल्कुलेटर',
        desc: 'मासिक रु. १५,००० रेमिट्यान्स रकम खुलामुखी म्युचुअल फण्डमा लगानी गर्दा १० वर्षमा कसरी रु. ३५ लाखभन्दा बढी बन्छ हेर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'वैदेशिक रोजगार वित्तीय स्वतन्त्रता चेकलिस्ट (PDF)',
          type: 'PDF Guide',
          size: '310 KB',
          href: 'assets/downloads/nepse-first-time-investor-checklist.html'
        }
      ],
      faqs: [
        {
          q: 'के म सर्वसाधारण कोटा र वैदेशिक रोजगार कोटा दुवैमा एकै पटक IPO भर्न सक्छु?',
          a: 'सकिँदैन। तपाईंले कुनै एउटा कोटा मात्र रोज्नुपर्छ। तर वैदेशिक रोजगार कोटामा प्रतिस्पर्धा निकै कम हुने भएकाले सेयर पर्ने सम्भावना सामान्यभन्दा धेरै गुणा बढी हुन्छ।'
        },
        {
          q: 'विदेशमै बसेर श्रम स्वीकृति अनलाइन नवीकरण गर्न सकिन्छ?',
          a: 'सकिन्छ। वैदेशिक रोजगार विभागको FEIMS पोर्टल (fims.dofe.gov.np) बाट अनलाइन फारम भरी कल्याणकारी कोष र जीवन बीमाको रकम तिरेर पुनः श्रम स्वीकृति लिन सकिन्छ।'
        },
        {
          q: 'विदेशबाट नेपाल पठाएको रकममा सरकारले आयकर काट्छ?',
          a: 'काट्दैन। आयकर ऐन २०५८ को दफा ११ अनुसार बैंकिङ माध्यमबाट परिवारलाई पठाएको रेमिट्यान्स रकममा कुनै पनि कर वा TDS लाग्दैन।'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'रेमिट्यान्स: आधुनिक नेपालको आर्थिक इन्जिन',
          slug: 'remittance-nepal-economic-lifeline',
          categorySlug: 'economics',
          readTime: '२२ मिनेट पढाइ'
        },
        nextGuide: {
          title: 'MeroShare र CDSC को पूर्ण गाइड',
          slug: 'complete-meroshare-guide',
          readTime: '१२ मिनेट पढाइ'
        },
        nextCalculator: {
          title: 'SIP Calculator',
          slug: 'sip'
        },
        nextGlossary: {
          title: 'वैदेशिक रोजगार आरक्षण कोटा',
          term: 'वैदेशिक रोजगार आरक्षण कोटा',
          def: 'वैध श्रम स्वीकृति लिएका कामदारका लागि प्राथमिक सेयर निष्कासनमा छुट्याइएको अनिवार्य १०% सेयर।'
        }
      }
    }
  },

  // ── 2. Complete CIB & Credit Score Guide ───────────────────
  'complete-cibil-credit-score-guide': {
    id: 'complete-cibil-credit-score-guide',
    slug: 'complete-cibil-credit-score-guide',
    categorySlug: 'loans',
    categoryName: { en: 'Loans & Debt', np: 'कर्जा र ऋण' },
    title: {
      en: 'Complete Karja Suchana Kendra (CIC) & Credit Score Guide for Nepal',
      np: 'नेपालमा कर्जा सूचना केन्द्र (CIB), कालोसूची र क्रेडिट स्कोरको पूर्ण गाइड'
    },
    oneLineSummary: {
      en: 'Understand how Karja Suchana Kendra (Credit Information Bureau) tracks loans, why bounced cheques trigger blacklisting, how to pull your credit report, and step-by-step credit repair.',
      np: 'कर्जा सूचना केन्द्र (CIB) ले कर्जा ट्र्याकिङ गर्ने विधि, बाउन्स चेकले कालोसूचीमा पार्ने कानुनी प्रक्रिया, क्रेडिट रिपोर्ट निकाल्ने तरिका र खराब क्रेडिट सुधार्ने सम्पूर्ण उपाय।'
    },
    difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
    readTime: { en: '13 min read', np: '१३ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: {
      en: 'Verified for Nepal Rastra Bank Unified Directives & Banking Offence Act',
      np: 'नेपाल राष्ट्र बैंकको एकीकृत निर्देशन तथा बैंकिङ कसूर ऐन अनुसार प्रमाणित'
    },
    prerequisites: [
      { title: 'National Identity Card (NID) or Nepali Citizenship', type: 'Document' },
      { title: 'Record of Past Bank Loans, Credit Cards, or Cheques Issued', type: 'Document' }
    ],
    en: {
      intro: 'In Nepal, creditworthiness is not judged by personal relationships or verbal promises; it is governed mathematically by the Credit Information Bureau of Nepal (कर्जा सूचना केन्द्र - CIB). Regulated under Nepal Rastra Bank (NRB) Directives, CIB maintains a centralized digital repository of every loan, overdraft, hire-purchase, credit card, and personal guarantee issued by Class A, B, C, and D financial institutions. Falling into default or issuing an unfunded bank cheque can result in official "Blacklisting" (कालोसूची)-a devastating financial penalty that legally freezes all your bank accounts, prevents you from traveling abroad, blocks company director appointments, and halts family property mortgages. Understanding how your credit history is compiled and repaired is essential for qualifying for home, business, and education loans.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-cib-architecture',
          title: 'How Karja Suchana Kendra (CIB) Compiles Your Financial Record',
          content: 'Every licensed bank and financial institution (BFIs) in Nepal is legally required to report all borrowers with credit facilities of NPR 5 Lakh and above (and negative records for smaller loans) to the CIB database on a monthly basis. When you apply for a home loan, vehicle loan, or credit card, the lending bank performs a mandatory "CIB Inquery". The CIB report contains: (1) Your historical loan accounts and current outstanding balances. (2) Repayment punctuality: Good (Pass), Watchlist (1-90 days overdue), Substandard (91-180 days overdue), Doubtful (181-365 days overdue), and Bad Debt/Loss (over 365 days overdue). (3) Personal guarantees you signed for friends or relatives. If someone you guaranteed defaults, your own CIB record is instantly contaminated.',
          callout: {
            type: 'important',
            title: 'Beware of Signing Personal Guarantees (जमानी)',
            text: 'When you sign as a personal guarantor (जमानीकर्ता) for a friend or relative, you assume equal legal liability. If they default, CIB blacklists YOU along with the primary borrower.'
          }
        },
        {
          num: 2,
          id: 'chap-2-blacklisting-triggers',
          title: 'The Blacklisting Mechanism: 90-Day Overdues & Cheque Bounces',
          content: 'Blacklisting is governed by NRB Unified Directives and the Banking Offence and Punishment Act 2064. You can be officially blacklisted for: (1) Non-Performing Loans: Failing to pay loan interest or principal for more than 90 days after receiving formal bank notices. (2) Cheque Bounce (Dishonor): If you issue a bank cheque without sufficient funds in your account, and the recipient presents it three times with formal return memos from the bank, the bank is legally required to initiate blacklisting proceedings against you. (3) Willful Default: Diverting bank loan funds to unauthorized speculative purposes (such as unauthorized land hoarding or stock speculation). Once blacklisted, CIB assigns you a public Blacklist Serial Number.',
          callout: {
            type: 'warning',
            title: 'Three Cheque Bounces = Automatic Blacklisting',
            text: 'Never write a cheque hoping money will arrive later. Under the Banking Offence Act, three bounce memos allow the payee to blacklist you at CIB and file a police arrest complaint.'
          }
        },
        {
          num: 3,
          id: 'chap-3-consequences-of-blacklisting',
          title: 'The Catastrophic Consequences of Being Blacklisted in Nepal',
          content: 'Being blacklisted is a severe civil and economic penalty in Nepal: (1) Banking Freeze: You cannot open new bank accounts, issue cheques, or obtain ATM/debit/credit cards in any bank. (2) Loan Ban: All existing credit facilities are recalled, and no bank in Nepal can legally lend you even a single rupee. (3) Passport & Travel Restrictions: Nepal Rastra Bank and Ministry of Home Affairs guidelines allow confiscation of passports and prevention of foreign travel for willful defaulters. (4) Land Registry Block: Land Revenue Offices (मालपोत कार्यालय) can freeze your registered property deeds. (5) Disqualification: You cannot serve as a Director of a public/private company, cooperative, or financial institution, and public sector employment is barred.',
          callout: {
            type: 'important',
            title: 'Blacklisting Affects the Entire Household',
            text: 'When a primary family member is blacklisted, banks frequently refuse mortgage loans to spouses and adult children if the collateral property is jointly owned.'
          }
        },
        {
          num: 4,
          id: 'chap-4-checking-credit-report',
          title: 'How to Pull Your Personal CIB Credit Report in Nepal',
          content: 'Every citizen has the legal right to inspect their credit report. You no longer need to visit the CIB head office at Thapathali, Kathmandu physically. To obtain your CIB Credit Report: (1) Visit any commercial bank or development bank where you maintain an active account. (2) Submit a written application: "Request for CIB Self-Inquiry Credit Report" along with a copy of your Citizenship/NID and PAN. (3) Pay the nominal statutory fee (typically NPR 250 to NPR 500). (4) The bank downloads your official multi-page CIB dossier from the secure portal within 24 to 48 hours. The report shows every active credit line, overdue days, collateral details, and whether any bounce memos are registered against your name.',
          callout: {
            type: 'tip',
            title: 'Inspect Before Applying for Big Loans',
            text: 'Always pull your self-inquiry CIB report 3 months before applying for a Home Loan. Correct any clerical errors or closed loans mistakenly listed as active.'
          }
        },
        {
          num: 5,
          id: 'chap-5-credit-repair-delisting',
          title: 'Step-by-Step Credit Repair: Settling Defaults and Delisting (फुकुवा)',
          content: 'If you have defaulted or been blacklisted, redemption is completely possible through formal legal settlement: (1) Full Principal & Interest Settlement: Negotiate with the lending bank. In many non-performing loan cases, banks offer "Interest Penalty Waivers" (हर्जाना छुट) under NRB recovery schemes if you pay the principal in a single lump-sum. (2) Obtain No Objection & Clearance Certificate (ऋण चुक्ता प्रमाणपत्र): Once settled, obtain a stamped loan clearance letter. (3) Formal Delisting Request: The bank submits a formal Delisting Notice (कालोसूची फुकुवा सिफारिस) to CIB within 3 working days. (4) CIB Status Update: CIB removes your name from the active Blacklist registry within 24 hours of receiving the bank’s certified notice, restoring your full banking rights.',
          callout: {
            type: 'tip',
            title: 'Keep Clearance Letters for 5 Years',
            text: 'Always preserve original hard copies of your bank Loan Clearance Certificate and CIB Delisting Memo. If another bank’s system shows old cached data, presenting this letter clears all doubts.'
          }
        },
        {
          num: 6,
          id: 'chap-6-building-healthy-score',
          title: 'Building an Unbreakable Credit Profile for Future Loans',
          content: 'To secure the lowest loan interest rates (Base Rate + minimum premium) in Nepal, cultivate an pristine credit discipline: (1) Pay credit card bills 5 days before the monthly statement due date-never carry rolling balances at 24% APR. (2) Maintain automated Standing Instructions (SI) for vehicle and home loan EMIs so your account is never overdrawn on the 1st of the month. (3) Never let an overdraft account exceed its approved drawing limit. (4) Maintain a Debt-to-Income (DTI) ratio below 40%-banks reject borrowers whose monthly EMI commitments exceed 50% of verified salary.',
          callout: {
            type: 'tip',
            title: 'The 3-Day Buffer Rule',
            text: 'Deposit your EMI amount into your loan repayment account at least 3 business days before the month-end deduction date to prevent holiday delays from triggering overdue marks.'
          }
        }
      ],
      nepalContext: 'In Nepal, credit reporting standards are strictly enforced under the Nepal Rastra Bank Act 2058 and the Credit Information Act. As financial digitization deepens across Nepal, commercial banks rely almost 100% on automated CIB risk scores. Having a spotless CIB history allows you to negotiate interest rate spreads down from Base Rate + 4% to as low as Base Rate + 1.25%, saving millions of rupees over a 20-year mortgage.',
      comparisonTable: {
        title: 'CIB Loan Classifications & Their Direct Impact on Borrowers',
        caption: 'Nepal Rastra Bank loan provisioning rules and credit risk rating',
        headers: ['Loan Category', 'Overdue Period', 'Bank Provisioning', 'Impact on Borrower & Credit Status'],
        rows: [
          ['Pass (असल कर्जा)', 'Up to 30 days overdue', '1.25% provision', 'Flawless credit; eligible for lowest bank interest rates'],
          ['Watchlist (सूक्ष्म निगरानी)', '31 to 90 days overdue', '5% provision', 'Warning flag; credit card limits reduced, high scrutiny'],
          ['Substandard (कमसल कर्जा)', '91 to 180 days overdue', '25% provision', 'Loan declared default; legal notice published in newspapers'],
          ['Doubtful (शंकास्पद)', '181 to 365 days overdue', '50% provision', 'Bank initiates collateral auction and CIB Blacklist notice'],
          ['Loss / Bad Debt (खराब कर्जा)', 'Over 365 days overdue', '100% provision', 'Full Blacklisting; bank account frozen, passport blocked']
        ]
      },
      practicalScenario: {
        persona: 'Sarita, 34, Boutique Owner in Lalitpur',
        challenge: 'Sarita applied for a NPR 35 Lakh home expansion loan. To her shock, the bank rejected her application within 48 hours because her CIB report showed an active "Blacklist" tag. She discovered that two years earlier, she had signed as a personal guarantor for her brother’s motorcycle loan of NPR 2,20,000, which he had stopped paying without telling her.',
        solution: 'Sarita pulled her official CIB self-inquiry report, identified the specific lending bank in Kupondole, and contacted her brother. They approached the bank’s recovery department and negotiated a full one-time settlement: paying the remaining principal of NPR 1,60,000 with a 50% waiver on accrued penalty fees. Within two days of full settlement, the bank issued a Loan Clearance Certificate and forwarded an urgent delisting recommendation to CIB. Within 72 hours, Sarita’s name was expunged from the CIB blacklist, enabling her to successfully secure her home loan.'
      },
      calculatorShortcut: {
        slug: 'emi',
        name: 'Nepal EMI & Loan Repayment Calculator',
        desc: 'Calculate your exact monthly EMI and total interest commitment to ensure your loan stays well within the safe 40% debt-to-income ratio.'
      },
      downloadableResources: [
        {
          title: 'Nepal CIB Self-Inquiry Application & Loan Clearance Checklist (PDF)',
          type: 'PDF Guide',
          size: '280 KB',
          href: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv'
        }
      ],
      faqs: [
        {
          q: 'Does a cheque bounce for a small amount (like NPR 10,000) also cause blacklisting?',
          a: 'Yes. Under the Banking Offence Act, the amount does not matter. If a cheque of even NPR 5,000 is presented and bounced three times with formal bank memos, the payee can legally initiate CIB blacklisting.'
        },
        {
          q: 'If I pay off my defaulted loan today, how long does it take for CIB to remove my name from the blacklist?',
          a: 'Once the bank receives full payment and submits the delisting letter to CIB, CIB typically delists your name within 24 to 48 working hours.'
        },
        {
          q: 'Can a bank auction my house if I miss 3 EMIs?',
          a: 'By law, banks cannot immediately auction collateral after 3 missed payments. They must first issue a 35-day notice, followed by a 15-day final auction notice published in a national daily newspaper. However, staying in contact with the bank to restructure your repayment avoids all auction proceedings.'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'Qualifying for a Home Loan in Nepal: The 50% DTI Rule',
          slug: 'home-loan-eligibility-debt-to-income',
          categorySlug: 'loans',
          readTime: '20 min read'
        },
        nextGuide: {
          title: 'Complete Nepal Home Loan & Mortgage Guide',
          slug: 'complete-home-loan-guide',
          readTime: '15 min read'
        },
        nextCalculator: {
          title: 'EMI Calculator',
          slug: 'emi'
        },
        nextGlossary: {
          title: 'Karja Suchana Kendra',
          term: 'Karja Suchana Kendra (CIB)',
          def: 'Centralized credit information bureau in Nepal tracking loans, defaults, and borrower creditworthiness.'
        }
      }
    },
    np: {
      intro: 'नेपालमा कुनै पनि व्यक्ति वा संस्थाको आर्थिक विश्वसनीयता मौखिक सम्बन्ध वा प्रतिष्ठाका आधारमा होइन, कर्जा सूचना केन्द्र (CIB - Credit Information Bureau) को तथ्यांकका आधारमा तय हुन्छ। नेपाल राष्ट्र बैंकको प्रत्यक्ष नियमनमा सञ्चालित CIB ले नेपालका सबै ‘क’, ‘ख’, ‘ग’, र ‘घ’ वर्गका बैंक तथा वित्तीय संस्थाबाट प्रवाह भएका हरेक कर्जा, ओभरड्राफ्ट, हायर पर्चेज, क्रेडिट कार्ड र व्यक्तिगत जमानीको केन्द्रीय डिजिटल अभिलेख राख्दछ। कर्जाको किस्ता समयमा नतिर्दा वा खातामा पैसा नभएको चेक काट्दा CIB ले आधिकारिक रूपमा ‘कालोसूची’ (Blacklist) मा राख्छ-जसले गर्दा बैंक खाता रोक्का हुने, विदेश जान रोक लाग्ने, कम्पनीमा सञ्चालक बन्न नपाउने र परिवारको धितो समेत बन्धक हुने जस्ता गम्भीर कानुनी संकट निम्तिन्छन्। आफ्नो क्रेडिट इतिहास कसरी सफा राख्ने र बिग्रेको क्रेडिट कसरी सुधार्ने भन्ने ज्ञान हरेक नेपालीका लागि अनिवार्य छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-cib-architecture',
          title: 'कर्जा सूचना केन्द्रले तपाईंको वित्तीय अभिलेख कसरी तयार गर्छ?',
          content: 'नेपालका सबै इजाजतपत्र प्राप्त बैंक तथा वित्तीय संस्थाहरूले रु. ५ लाख वा सोभन्दा बढीको कर्जा लिने हरेक ऋणीको मासिक विवरण अनिवार्य रूपमा CIB मा पठाउनुपर्छ (खराब कर्जाको हकमा ५ लाखभन्दा कमको पनि)। जब तपाईं घर, गाडी वा व्यक्तिगत कर्जाका लागि बैंकमा निवेदन दिनुहुन्छ, बैंकले सबैभन्दा पहिले "CIB Inquiry" गर्छ। यो रिपोर्टमा: (१) तपाईंको नाममा रहेका पुराना तथा हालका सबै कर्जा र तिर्न बाँकी रकम। (२) कर्जा भुक्तानीको नियमितता: असल (Pass), सूक्ष्म निगरानी (Watchlist), कमसल (Substandard), शंकास्पद (Doubtful) र खराब (Loss)। (३) तपाईंले अरू साथी वा नातेदारका लागि बसेको व्यक्तिगत जमानी (Guarantor)। यदि तपाईंले जमानी बसेको व्यक्तिले ऋण तिरेन भने तपाईंको आफ्नै CIB रेकर्ड तत्कालै कालोसूचीमा पुग्छ।',
          callout: {
            type: 'important',
            title: 'कसैको ऋणमा जमानी (Guarantor) बस्दा सावधान हुनुहोस्',
            text: 'बैंकमा कसैको ऋणमा जमानी बस्नु भनेको कानुनी रूपमा सो ऋण तिर्ने बराबरको दायित्व लिनु हो। ऋणी भागेमा वा नतिरेमा बैंकले तपाईंलाई पनि मुख्य ऋणी सरह कालोसूचीमा राख्छ।'
          }
        },
        {
          num: 2,
          id: 'chap-2-blacklisting-triggers',
          title: 'कालोसूचीमा पर्ने मुख्य कारण: ९० दिनको भाका र बाउन्स चेक',
          content: 'नेपाल राष्ट्र बैंकको निर्देशन र बैंकिङ कसूर तथा सजाय ऐन २०६४ अनुसार निम्न अवस्थामा व्यक्ति वा कम्पनीलाई कालोसूचीमा राखिन्छ: (१) कर्जा नतिरेमा: बैंकको कर्जा वा ब्याज ९० दिनभन्दा बढी भाका नाघेमा र बैंकको ताकेता सूचनाको बेवास्ता गरेमा। (२) चेक बाउन्स (अनादर): खातामा पर्याप्त रकम नभई चेक काटेमा र सो चेक बैंकमा ३ पटकसम्म बाउन्स भई बैंकले अनादर पत्र (Return Memo) काटेमा बैंकले सीधै CIB मा कालोसूचीका लागि सिफारिस गर्छ। (३) कर्जाको दुरुपयोग: जुन प्रयोजनका लागि ऋण लिएको हो, सो काममा नलगाई जग्गा प्लटिङ वा सेयर सट्टेबाजीमा पैसा लगाएको पाइएमा। कालोसूचीमा परेपछि CIB ले सार्वजनिक कालोसूची दर्ता नम्बर जारी गर्छ।',
          callout: {
            type: 'warning',
            title: '३ पटक चेक बाउन्स = कालोसूची र प्रहरी पक्राउ',
            text: 'पछि पैसा आउला भनेर खातामा रकम नहुँदा कहिल्यै चेक नकाट्नुहोस्। बैंकिङ कसूर ऐन अनुसार ३ पटक बाउन्स भएमा चेक पाउने व्यक्तिले CIB मा कालोसूचीमा राख्न र प्रहरीमा जाहेरी दिन सक्छ।'
          }
        },
        {
          num: 3,
          id: 'chap-3-consequences-of-blacklisting',
          title: 'नेपालमा कालोसूचीमा पर्दा हुने गम्भीर कानुनी र आर्थिक असरहरू',
          content: 'कालोसूचीमा पर्नु भनेको नागरिकको आर्थिक जीवन ठप्प हुनु हो: (१) बैंक खाता रोक्का: नेपालभरका कुनै पनि बैंकमा नयाँ खाता खोल्न, चेक काट्न वा डेबिट/क्रेडिट कार्ड लिन पाइँदैन। (२) कर्जा प्रतिबन्ध: कुनै पनि बैंक वा वित्तीय संस्थाले १ रुपैयाँ पनि ऋण दिन पाउँदैनन्। (३) राहदानी र विदेश यात्रा रोक्का: राष्ट्र बैंक र गृह मन्त्रालयको समन्वयमा कालोसूचीमा परेका व्यक्तिको राहदानी रोक्का गरी विदेश भ्रमणमा प्रतिबन्ध लगाउन सकिन्छ। (४) जग्गा रोक्का: मालपोत कार्यालयमा रहेको आफ्नो नामको घरजग्गा किनबेच वा नामसारी गर्न पाइँदैन। (५) सार्वजनिक पदबाट बर्खास्त: कुनै पनि पब्लिक वा प्राइभेट कम्पनी, सहकारी वा संघसंस्थामा सञ्चालक बन्न पाइँदैन र सरकारी सेवाबाट अयोग्य ठहरिन्छ।',
          callout: {
            type: 'important',
            title: 'कालोसूचीले पूरै परिवारलाई असर गर्छ',
            text: 'परिवारको मुख्य सदस्य कालोसूचीमा परेमा संयुक्त नाममा रहेको धितो राखेर श्रीमती वा छोराछोरीले समेत बैंकबाट नयाँ ऋण लिन पाउँदैनन्।'
          }
        },
        {
          num: 4,
          id: 'chap-4-checking-credit-report',
          title: 'आफ्नो व्यक्तिगत CIB क्रेडिट रिपोर्ट कसरी निकाल्ने?',
          content: 'हरेक नागरिकलाई आफ्नो कर्जा विवरण हेर्ने कानुनी अधिकार छ। यसका लागि काठमाडौँको थापाथलीस्थित CIB कार्यालय गइरहनु पर्दैन: (१) आफ्नो खाता रहेको कुनै पनि वाणिज्य वा विकास बैंकको शाखामा जानुहोस्। (२) "CIB Self-Inquiry Report माग सम्बन्धमा" एउटा निवेदन र नागरिकता/राष्ट्रिय परिचयपत्रको प्रतिलिपि बुझाउनुहोस्। (३) तोकिएको सरकारी दस्तुर (रु. २५० देखि रु. ५००) तिर्नुहोस्। (४) बैंकले २४ देखि ४८ घण्टाभित्र CIB को डिजिटल पोर्टलबाट तपाईंको सम्पूर्ण बहुपृष्ठ क्रेडिट रिपोर्ट प्रिन्ट गरेर दिन्छ। यो रिपोर्टमा तपाईंको नाममा रहेका सबै ऋण, बाँकी बक्यौता, र कुनै चेक बाउन्स भए/नभएको स्पष्ट देखिन्छ।',
          callout: {
            type: 'tip',
            title: 'ठूलो ऋण लिनुअघि आफ्नै रिपोर्ट जाँच्नुहोस्',
            text: 'घर कर्जा वा व्यवसाय कर्जाका लागि आवेदन दिनुभन्दा ३ महिनाअघि नै आफ्नो CIB रिपोर्ट निकालेर हेर्नुहोस्, ताकि कुनै पुरानो तिरिसकेको ऋण भूलवश नदेखियोस्।'
          }
        },
        {
          num: 5,
          id: 'chap-5-credit-repair-delisting',
          title: 'कालोसूची फुकुवा (Delisting) र ऋण चुक्ता गर्ने चरणबद्ध विधि',
          content: 'यदि भूलवश वा परिस्थितिवश कालोसूचीमा परिसक्नुभएको छ भने पनि कानुनी विधिबाट फुकुवा हुन सकिन्छ: (१) बैंकसँग सहमति र साँवा-ब्याज भुक्तानी: सम्बन्धित बैंकको असुली विभागसँग वार्ता गर्नुहोस्। धेरैजसो बैंकले एकमुष्ट साँवा तिर्दा हर्जाना र ब्याजमा ठूलो छुट दिने गर्छन्। (२) ऋण चुक्ता प्रमाणपत्र (Clearance Certificate): सम्पूर्ण रकम तिरिसकेपछि बैंकबाट आधिकारिक छाप लागेको ऋण चुक्ता पत्र लिनुहोस्। (३) बैंकद्वारा CIB मा फुकुवा सिफारिस: बैंकले ३ दिनभित्र CIB लाई आधिकारिक फुकुवा पत्र पठाउँछ। (४) कालोसूचीबाट नाम हट्ने: CIB ले बैंकको पत्र प्राप्त भएको २४ देखि ४८ घण्टाभित्र आफ्नो प्रणालीबाट तपाईंको नाम हटाई पूर्ण बैंकिङ अधिकार पुनःस्थापित गर्दछ।',
          callout: {
            type: 'tip',
            title: 'ऋण चुक्ता प्रमाणपत्र सधैँ सुरक्षित राख्नुहोस्',
            text: 'बैंकबाट लिएको ऋण चुक्ता प्रमाणपत्र (Clearance Certificate) र फुकुवा पत्रको सक्कल प्रति सधैँ सुरक्षित राख्नुहोस्, जसले भविष्यमा अन्य बैंकमा काम गर्दा तत्काल प्रमाण दिन्छ।'
          }
        },
        {
          num: 6,
          id: 'chap-6-building-healthy-score',
          title: 'उत्कृष्ट क्रेडिट प्रोफाइल बनाउने र सस्तो ब्याजदरमा ऋण लिने तरिका',
          content: 'भविष्यमा बैंकबाट सबैभन्दा सस्तो ब्याजदर (Base Rate + न्यूनतम प्रिमियम) मा ऋण पाउन निम्न वित्तीय अनुशासन पालना गर्नुहोस्: (१) क्रेडिट कार्डको बिल तोकिएको अन्तिम मितिभन्दा ५ दिनअघि नै १००% चुक्ता गर्नुहोस्- २४% को चर्को ब्याजमा नबस्नुहोस्। (२) घर वा गाडी कर्जाको EMI तिर्न बैंकमा Standing Instructions राख्नुहोस् ताकि महिनाको १ गते स्वतः किस्ता काटोस्। (३) ओभरड्राफ्ट कर्जाको सीमाभन्दा १ रुपैयाँ पनि बढी नचलाउनुहोस्। (४) आफ्नो कुल मासिक आम्दानीको ४०% भन्दा बढी ऋणको किस्ता (EMI) कहिल्यै नबनाउनुहोस्।',
          callout: {
            type: 'tip',
            title: '३ दिनअघि नै खातामा रकम राख्ने बानी',
            text: 'किस्ता काटिने दिनभन्दा कम्तीमा ३ दिनअघि नै बैंक खातामा EMI बराबरको रकम जम्मा गर्नुहोस्, ताकि सार्वजनिक बिदा वा प्राविधिक कारणले भाका ननाघोस।'
          }
        }
      ],
      nepalContext: 'नेपाल राष्ट्र बैंक ऐन २०५८ र कर्जा सूचना ऐन अनुसार CIB को कार्यप्रणाली सञ्चालन हुन्छ। आधुनिक डिजिटल बैंकिङमा कुनै पनि बैंकले ऋण स्वीकृत गर्नुअघि CIB को सफा रेकर्ड अनिवार्य रूपमा हेर्छन्। CIB रेकर्ड सफा हुँदा बैंकसँग ब्याजदरमा बार्गेनिङ गर्न सकिन्छ, जसले २० वर्षको घर कर्जामा लाखौँ रुपैयाँ बचत गराउँछ।',
      comparisonTable: {
        title: 'राष्ट्र बैंकको कर्जा वर्गीकरण र ऋणीमा पर्ने प्रत्यक्ष असर',
        caption: 'कर्जाको भाका नाघेको अवधि अनुसार बैंकको प्रोभिजन र कालोसूचीको जोखिम',
        headers: ['कर्जा वर्ग', 'भाका नाघेको अवधि', 'बैंक प्रोभिजन', 'ऋणीको साख र कानुनी असर'],
        rows: [
          ['असल (Pass)', 'भाका ननाघेको वा ३० दिनसम्म', '१.२५%', 'उत्कृष्ट क्रेडिट; सबैभन्दा सस्तो ब्याजदरमा नयाँ ऋण पाइने'],
          ['सूक्ष्म निगरानी (Watchlist)', '३१ दिनदेखि ९० दिनसम्म', '५%', 'सचेतनामूलक चेतावनी; बैंकबाट ताकेता सुरु, क्रेडिट कार्ड सीमा घट्न सक्ने'],
          ['कमसल (Substandard)', '९१ दिनदेखि १८० दिनसम्म', '२५%', 'खराब कर्जा घोषणा; राष्ट्रिय पत्रिकामा ऋणीको ३५ दिने म्याद सूचना जारी'],
          ['शंकास्पद (Doubtful)', '१८१ दिनदेखि ३६५ दिनसम्म', '५०%', 'धितो लिलामीको प्रक्रिया सुरु र कालोसूचीको अन्तिम चेतावनी'],
          ['खराब (Loss)', '३६५ दिनभन्दा बढी भाका नाघेको', '१००%', 'पूर्ण कालोसूची (Blacklist); बैंक खाता रोक्का, राहदानी जफतको सिफारिस']
        ]
      },
      practicalScenario: {
        persona: 'सरिता, ३४ वर्ष, ललितपुरमा बुटिक सञ्चालक',
        challenge: 'सरिताले आफ्नो व्यवसाय विस्तारका लागि रु. ३५ लाख घर कर्जा माग गरिन्। तर बैंकले ४८ घण्टामै उनको कर्जा अस्वीकृत गर्‍यो किनभने CIB रिपोर्टमा उनको नाम "कालोसूची" मा देखियो। अनुसन्धान गर्दा थाहा भयो कि दुई वर्षअघि उनका भाइले लिएको रु. २,२०,००० को मोटरसाइकल लोनमा उनी जमानी बसेकी थिइन् र भाइले किस्ता नतिरेपछि बैंकले सरितालाई पनि कालोसूचीमा हालेको थियो।',
        solution: 'सरिताले तत्काल CIB बाट सेल्फ-इन्क्वायरी रिपोर्ट निकालिन् र सम्बन्धित बैंकको असुली शाखामा गइन्। उनले भाइसँग सल्लाह गरी बैंकसँग एकमुष्ट सम्झौता गरिन्: बाँकी साँवा रु. १,६०,००० तिरेर थप हर्जानामा ५०% छुट पाइन्। रकम चुक्ता भएको भोलिपल्टै बैंकले ऋण चुक्ता प्रमाणपत्र दियो र CIB मा कालोसूची फुकुवा सिफारिस पठायो। ७२ घण्टाभित्र CIB बाट सरिताको नाम हट्यो र उनले आफ्नो घर कर्जा सफलतापूर्वक प्राप्त गरिन्।'
      },
      calculatorShortcut: {
        slug: 'emi',
        name: 'नेपाल EMI क्याल्कुलेटर',
        desc: 'ऋण लिनुअघि आफ्नो मासिक आम्दानीको ४०% भन्दा बढी EMI नहुने गरी सही किस्ता र कुल ब्याज हिसाब गर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'कर्जा सूचना केन्द्र (CIB) सेल्फ इन्क्वायरी निवेदन ढाँचा (PDF)',
          type: 'PDF Guide',
          size: '280 KB',
          href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html'
        }
      ],
      faqs: [
        {
          q: 'सानो रकम (जस्तै रु. १०,०००) को चेक बाउन्स हुँदा पनि कालोसूचीमा परिन्छ?',
          a: 'परिन्छ। बैंकिङ कसूर ऐन अनुसार रकम सानो वा ठूलो हुनुले फरक पार्दैन। यदि रु. ५,००० को चेक पनि ३ पटक बाउन्स भएर बैंकले अनादर पत्र काटेको छ भने कालोसूचीमा राख्न सकिन्छ।'
        },
        {
          q: 'खराब ऋण तिरिसकेपछि CIB बाट नाम हट्न कति समय लाग्छ?',
          a: 'बैंकमा सम्पूर्ण साँवा-ब्याज चुक्ता गरी बैंकले CIB लाई फुकुवा पत्र पठाएको २४ देखि ४८ घण्टाभित्र CIB ले कालोसूचीबाट नाम हटाउँछ।'
        },
        {
          q: 'के ३ वटा किस्ता छुट्ने बित्तिकै बैंकले मेरो घर लिलाम गर्न पाउँछ?',
          a: 'तत्काल पाउँदैन। कानुन अनुसार बैंकले पहिले ३५ दिने म्याद सूचना र त्यसपछि राष्ट्रिय पत्रिकामा १५ दिने लिलामी सूचना निकाल्नुपर्छ। भाका नाघ्नासाथ बैंकसँग सम्पर्क गरी किस्ता पुनर्तालिकीकरण गरेमा लिलामीबाट बच्न सकिन्छ।'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'नेपालमा घर कर्जा योग्यता: ५०% DTI नियम',
          slug: 'home-loan-eligibility-debt-to-income',
          categorySlug: 'loans',
          readTime: '२० मिनेट पढाइ'
        },
        nextGuide: {
          title: 'घर कर्जा (Home Loan) र धितोको पूर्ण गाइड',
          slug: 'complete-home-loan-guide',
          readTime: '१५ मिनेट पढाइ'
        },
        nextCalculator: {
          title: 'EMI Calculator',
          slug: 'emi'
        },
        nextGlossary: {
          title: 'कर्जा सूचना केन्द्र',
          term: 'कर्जा सूचना केन्द्र (CIB)',
          def: 'नेपालका बैंक तथा वित्तीय संस्थाको ऋण, भाका नाघेको रकम र ऋणीको साख ट्र्याक गर्ने केन्द्रीय निकाय।'
        }
      }
    }
  },

  // ── 3. Complete Bank Debentures & Corporate Bonds Guide ───────────────────
  'complete-debenture-bonds-guide': {
    id: 'complete-debenture-bonds-guide',
    slug: 'complete-debenture-bonds-guide',
    categorySlug: 'investing',
    categoryName: { en: 'Investing & Fixed Income', np: 'लगानी तथा स्थिर आम्दानी' },
    title: {
      en: 'Complete Nepal Bank Debentures & Corporate Bonds Guide',
      np: 'नेपालमा बैंक डिबेन्चर (ऋणपत्र) र कर्पोरेट बन्डको पूर्ण गाइड'
    },
    oneLineSummary: {
      en: 'Master high-yield fixed income in Nepal: 8.5% to 10.5% semi-annual coupon payments, debentures vs fixed deposits, applying via MeroShare C-ASBA, NEPSE secondary trading, and tax treatment.',
      np: 'नेपालमा डिबेन्चरबाट स्थिर आम्दानी: ८.५% देखि १०.५% सम्म अर्धवार्षिक ब्याज, मुद्दती निक्षेपसँग तुलना, MeroShare बाट आवेदन दिने तरिका, दोस्रो बजार कारोबार र ५% अन्तिम कर कट्टी।'
    },
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '12 min read', np: '१२ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: {
      en: 'Verified for Nepal Rastra Bank Capital Adequacy Framework & SEBON Directives',
      np: 'नेपाल राष्ट्र बैंकको पुँजी कोष निर्देशिका तथा धितोपत्र बोर्डको नियम अनुसार प्रमाणित'
    },
    prerequisites: [
      { title: 'Active Bank Account with C-ASBA & MeroShare Credential', type: 'Prerequisite' },
      { title: 'Demat Account (BOID) Linked with PAN', type: 'Document' }
    ],
    en: {
      intro: 'When conservative investors in Nepal think about safe, fixed-yield income, they instinctively turn to bank Fixed Deposits (FDs). Yet for informed individuals, retirees, and institutional funds, Commercial Bank Debentures (ऋणपत्र) offer a superior fixed-income instrument: paying predictable coupon interest between 8.5% and 10.5% per annum, credited directly to your bank account semi-annually (every 6 months), locked in for long durations of 7 to 10 years regardless of whether market interest rates crash. Issued by Class A commercial banks under strict Nepal Rastra Bank capital adequacy rules, debentures are listed on NEPSE, tradeable on the secondary market, and subject to a concessional 5% final withholding tax for individual investors. This guide demystifies debentures, explains how to apply online via MeroShare, and shows how to build a resilient passive income ladder.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-what-is-debenture',
          title: 'What is a Bank Debenture? The 1,000-Rupee Debt Instrument',
          content: 'A debenture is a long-term debt instrument issued by a corporation or commercial bank to raise Tier-II capital. In Nepal, bank debentures are issued at a face value of NPR 1,000 per unit (unlike equity shares which have a face value of NPR 100). When you buy a debenture, you are not buying ownership (equity); you are acting as a lender to the bank. The bank is legally contractually obligated to pay you a specified coupon rate (e.g., 9% per annum) at regular intervals (semi-annually in Poush and Ashadh) and repay the full principal of NPR 1,000 per unit at the end of the maturity period (typically 7, 8, or 10 years). Even if the bank’s profits decline or NEPSE stock prices crash, your debenture interest is an operational expense that the bank must pay before declaring any dividends to equity shareholders.',
          callout: {
            type: 'important',
            title: 'Par Value is NPR 1,000 (Not NPR 100)',
            text: 'Remember that minimum debenture applications in Nepal start at 25 units (NPR 25,000). Always check the issue prospectus for minimum allotment quantities.'
          }
        },
        {
          num: 2,
          id: 'chap-2-debenture-vs-fixed-deposit',
          title: 'Debentures vs. Fixed Deposits: Locking High Yields Against Rate Cuts',
          content: 'Why choose a debenture over a standard 1-year Fixed Deposit? (1) Rate Lock Duration: When Nepal Rastra Bank cuts interest rates and banking system liquidity surges, commercial banks slash 1-year FD rates down to 5% or 6%. If you locked a 10-year debenture at 9.5%, you continue earning 9.5% every year for a decade. (2) Semi-Annual Liquidity: FD interest is typically paid quarterly or at maturity; debentures pay guaranteed semi-annual cash flow into your bank account. (3) Premature Liquidity without Penalties: Breaking an FD prematurely incurs heavy interest forfeiture penalties from the bank. A debenture, being listed on NEPSE, can be sold on the secondary market via your stock broker without penalty.',
          callout: {
            type: 'tip',
            title: 'The Reinvestment Advantage',
            text: 'Debentures provide immune protection against falling interest rate cycles in Nepal, making them the ultimate anchor for retirement portfolios.'
          }
        },
        {
          num: 3,
          id: 'chap-3-applying-via-meroshare',
          title: 'How to Apply for Public Issue Debentures via MeroShare',
          content: 'Applying for a primary debenture issue is identical to applying for an IPO: (1) Log in to your MeroShare account (meroshare.cdsc.com.np). (2) Navigate to "Apply for Issue". (3) Look for the debenture listing (e.g., "Nabil Debenture 2088" or "Sanima Bank Debenture 2089"). (4) Click "Apply". (5) Enter the number of units (minimum is usually 25 units = NPR 25,000). (6) Select your C-ASBA bank account, enter your 4-digit transaction PIN, and submit. Because debenture public issues rarely face the extreme oversubscription seen in equity IPOs, individual retail applicants are almost 100% guaranteed full allotment of their requested units.',
          callout: {
            type: 'tip',
            title: 'Full Allotment Certainty',
            text: 'Unlike equity IPOs where retail investors are limited to 10 units, debentures allow you to invest NPR 50,000, NPR 1 Lakh, or NPR 5 Lakh and receive full allotment.'
          }
        },
        {
          num: 4,
          id: 'chap-4-nepse-secondary-trading',
          title: 'Trading Debentures on NEPSE: Broker Execution & Market Liquidity',
          content: 'Once allotted, debentures are credited to your Demat account under a dedicated ticker symbol (such as SBLD83, NBLD85, or EBLD86, indicating the bank code, debenture tag, and maturity Bikram Sambat year). You can sell them on the NEPSE secondary market using your online TMS broker account. If prevailing market interest rates drop to 6%, older debentures paying 9.5% trade at a premium (above NPR 1,000), allowing capital gains. However, secondary market liquidity for debentures on NEPSE is lower than for blue-chip shares; large bulk sales may take a few trading sessions to find matching institutional buyers (such as life insurance companies or retirement funds).',
          callout: {
            type: 'warning',
            title: 'Hold to Maturity Strategy',
            text: 'The optimal strategy for retail investors is to buy debentures with the intention of holding until maturity to collect uninterrupted semi-annual interest.'
          }
        },
        {
          num: 5,
          id: 'chap-5-taxation-on-debentures',
          title: 'Tax Treatment: Concessional 5% Final Withholding Tax',
          content: 'Under Section 88 of the Income Tax Act 2058, interest earned by individual resident citizens on debentures and bonds issued by listed entities is subject to a flat 5% final withholding tax (TDS). The issuing bank automatically deducts this 5% before crediting the net interest to your account. For example, if you invest NPR 5,00,000 in a 9% debenture, your gross annual interest is NPR 45,000. The bank withholds NPR 2,250 (5%) and deposits NPR 42,750 net directly into your bank account. Because this is a "Final Tax", you do not need to add it to your personal salary income or pay higher bracket rates (20%-36%).',
          callout: {
            type: 'tip',
            title: 'Final Tax Means Zero Extra Tax Liability',
            text: 'Individual debenture interest does not push your salary into higher tax brackets. The 5% TDS deducted by the bank is final and complete.'
          }
        },
        {
          num: 6,
          id: 'chap-6-passive-income-ladder',
          title: 'Building a Passive Income Ladder with Bank Debentures',
          content: 'To generate perpetual cash flow in retirement, construct a Debenture Ladder: invest across multiple debentures with staggered maturity dates (e.g., NPR 2 Lakh maturing in 2085, NPR 2 Lakh maturing in 2087, and NPR 2 Lakh maturing in 2089). This ensures two vital advantages: (1) Staggered Liquidity: A tranche of your principal matures every two to three years, giving you cash to reinvest at current market rates or spend on major family goals. (2) Steady Semi-Annual Inflow: By selecting banks that pay coupon interest in different months (some pay in Poush/Ashadh, others in Kartik/Baisakh), you create predictable quarterly or bi-monthly cash distributions to pay for living expenses.',
          callout: {
            type: 'tip',
            title: 'The Retirement Yield Foundation',
            text: 'Pairing bank debentures (fixed yield safety) with open-ended mutual fund SIPs (capital growth) creates an all-weather financial foundation in Nepal.'
          }
        }
      ],
      nepalContext: 'Nepal Rastra Bank enforces Basel III capital adequacy guidelines, requiring commercial banks to maintain strong supplementary capital reserves. Bank debentures carry low default risk because Class A commercial banks in Nepal are subject to rigorous statutory reserve ratios (CRR 4%, SLR 12%) and strict NRB supervision. In the entire history of Nepal’s modern banking sector, no licensed Class A commercial bank has ever defaulted on a debenture coupon or principal payment.',
      comparisonTable: {
        title: 'Bank Debentures vs. Bank Fixed Deposits (FD) in Nepal',
        caption: 'Key structural and operational differences for Nepali savers',
        headers: ['Feature', 'Bank Debentures (ऋणपत्र)', 'Fixed Deposit (मुद्दती निक्षेप)'],
        rows: [
          ['Face Value / Unit Price', 'NPR 1,000 per unit (Min. 25 units = NPR 25,000)', 'Custom amount (Starting from NPR 10,000)'],
          ['Tenure / Duration', 'Long-term: 7 to 10 years fixed rate', 'Short-term: Typically 3 months to 2 years'],
          ['Interest Payment Frequency', 'Semi-annually (Every 6 months guaranteed)', 'Quarterly or at final maturity'],
          ['Secondary Trading', 'Listed on NEPSE; can be sold via stock broker', 'Not tradeable; must break early with bank penalty'],
          ['Protection from Rate Cuts', '100% Protected (Yield locked for 7-10 years)', 'Exposed (Reinvested at lower rates when FD matures)'],
          ['Individual Tax on Interest', '5% Final Withholding Tax (Section 88 TDS)', '5% Final Withholding Tax (Natural person)']
        ]
      },
      practicalScenario: {
        persona: 'Govinda, 56, retired civil servant in Bharatpur',
        challenge: 'Govinda received a retirement gratuity lump-sum of NPR 20 Lakh. He put the entire amount in a 1-year bank FD at 9%. However, when the FD matured the following year, interest rates had plunged to 6%, cutting his annual interest income from NPR 1,80,000 down to NPR 1,20,000-a monthly loss of NPR 5,000 in living cash flow.',
        solution: 'Govinda restructured his capital: he allocated NPR 10 Lakh across two Class A bank debentures yielding 9.25% fixed for 8 years (guaranteeing NPR 92,500 gross annual interest until 2088 regardless of market rate drops). He placed NPR 5 Lakh in a 1-year FD for immediate flexibility and invested the remaining NPR 5 Lakh into an open-ended mutual fund SWP for long-term growth. His debentures now deliver steady semi-annual cash deposits of NPR 43,937 net of tax directly to his bank account every Poush and Ashadh.'
      },
      calculatorShortcut: {
        slug: 'fixed-deposit',
        name: 'Fixed Deposit & Yield Calculator',
        desc: 'Compare multi-year compound interest yields between fixed deposits, bank debentures, and systematic investment schemes.'
      },
      downloadableResources: [
        {
          title: 'Nepal Bank Debenture Master Directory & Evaluation Guide (PDF)',
          type: 'PDF Guide',
          size: '260 KB',
          href: 'assets/downloads/nepal-bank-rates-debenture-guide.html'
        }
      ],
      faqs: [
        {
          q: 'Can a bank default on its debenture payments in Nepal?',
          a: 'While all corporate debt carries theoretical credit risk, Class A commercial banks in Nepal are heavily regulated by Nepal Rastra Bank with strict capital adequacy ratios. In modern Nepali financial history, no commercial bank has ever defaulted on debenture interest or principal repayment.'
        },
        {
          q: 'How do I receive my debenture interest payments?',
          a: 'Interest is credited automatically into the bank account linked to your Demat (BOID) account via connectIPS / NCHL on the scheduled semi-annual payment dates.'
        },
        {
          q: 'Can I take a loan against debentures in Nepal?',
          a: 'Yes. Debentures listed on NEPSE can be pledged as collateral for bank loans (Debenture Pledge), typically allowing borrowing up to 70% of the face value under NRB lending guidelines.'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'Understanding Mutual Funds in Nepal',
          slug: 'what-is-mutual-fund-nepal',
          categorySlug: 'mutual-funds',
          readTime: '16 min read'
        },
        nextGuide: {
          title: 'Complete Nepal Mutual Fund Guide',
          slug: 'complete-mutual-fund-guide',
          readTime: '13 min read'
        },
        nextCalculator: {
          title: 'Fixed Deposit Calculator',
          slug: 'fixed-deposit'
        },
        nextGlossary: {
          title: 'Debenture',
          term: 'Debenture (ऋणपत्र)',
          def: 'Long-term fixed-interest debt instrument issued by banks and corporations with a face value of NPR 1,000.'
        }
      }
    },
    np: {
      intro: 'नेपालमा जब सुरक्षित र निश्चित प्रतिफल खोज्ने लगानीकर्ताको कुरा आउँछ, अधिकांशले वाणिज्य बैंकको मुद्दती निक्षेप (Fixed Deposit) मात्र सम्झन्छन्। तर जानकार लगानीकर्ता, अवकाशप्राप्त कर्मचारी र ठूला संस्थाहरूका लागि बैंक डिबेन्चर (ऋणपत्र) मुद्दती निक्षेपभन्दा धेरै गुणा फाइदाजनक स्थिर आम्दानीको माध्यम हो: जसले वार्षिक ८.५% देखि १०.५% सम्म निश्चित ब्याज दिन्छ, हरेक ६ महिनामा सीधै बैंक खातामा ब्याज जम्मा गरिदिन्छ, र ७ देखि १० वर्षसम्म बजारमा ब्याजदर जतिसुकै घटे पनि पुरानै उच्च दरमा ब्याजको ग्यारेन्टी गर्दछ। नेपाल राष्ट्र बैंकको कडा पुँजी कोष नियमावली अन्तर्गत ‘क’ वर्गका बैंकहरूले जारी गर्ने डिबेन्चर नेप्से (NEPSE) मा सूचीकृत हुन्छन्, दोस्रो बजारमा किनबेच गर्न सकिन्छ, र व्यक्तिगत लगानीकर्ताका लागि ब्याजमा मात्र ५% अन्तिम कर (TDS) लाग्छ। यो गाइडले डिबेन्चरको महत्त्व, MeroShare बाट आवेदन दिने तरिका र यसबाट नियमित पेन्सन जस्तै आम्दानी बनाउने उपाय सिकाउँछ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-what-is-debenture',
          title: 'बैंक डिबेन्चर (ऋणपत्र) भनेको के हो? रु. १,००० अंकित मूल्यको ऋण औजार',
          content: 'डिबेन्चर भनेको कुनै पनि वाणिज्य बैंक वा ठूला कम्पनीले दीर्घकालीन पुँजी जुटाउन सर्वसाधारणबाट लिने ऋणको आधिकारिक लिखत हो। नेपालमा डिबेन्चरको प्रति कित्ता अंकित मूल्य रु. १,००० हुन्छ (सेयरको जस्तो रु. १०० होइन)। जब तपाईं डिबेन्चर किन्नुहुन्छ, तपाईं कम्पनीको मालिक (हकवाला) बन्नुहुन्न, बरु बैंकलाई ऋण दिने साहु बन्नुहुन्छ। बैंकले तपाईंलाई निश्चित ब्याजदर (जस्तै वार्षिक ९%) तोकिएको समयमा (हरेक वर्ष पुस र असारमा) भुक्तानी गर्नैपर्ने कानुनी सम्झौता हुन्छ। तोकिएको अवधि (जस्तै ७, ८ वा १० वर्ष) सकिएपछि बैंकले तपाईंको साँवा रु. १,००० प्रति कित्ता फिर्ता गर्छ। बैंकको नाफा घटोस् वा सेयर बजार जतिसुकै ओरालो लागोस्, बैंकले सेयरधनीलाई लाभांश बाँड्नुभन्दा पहिले डिबेन्चरको ब्याज अनिवार्य रूपमा भुक्तानी गर्नैपर्छ।',
          callout: {
            type: 'important',
            title: 'अंकित मूल्य रु. १,००० (रु. १०० होइन)',
            text: 'नेपालमा डिबेन्चरमा न्यूनतम आवेदन २५ कित्ता (रु. २५,०००) बाट सुरु हुन्छ। आवेदन दिनुअघि आह्वानपत्रमा न्यूनतम कित्ता हेर्नुहोस्।'
          }
        },
        {
          num: 2,
          id: 'chap-2-debenture-vs-fixed-deposit',
          title: 'डिबेन्चर र मुद्दती निक्षेपको तुलना: घट्दो ब्याजदरबाट दीर्घकालीन सुरक्षा',
          content: 'मुद्दती निक्षेपको सट्टा डिबेन्चर किन रोज्ने? (१) दीर्घकालीन ब्याजदर लक: जब नेपाल राष्ट्र बैंकले ब्याजदर घटाउँछ र बैंकहरूमा अधिक तरलता हुन्छ, बैंकहरूले १ वर्षे मुद्दतीको ब्याज घटाएर ५-६% मा झार्छन्। तर यदि तपाईंले १० वर्षे डिबेन्चर ९.५% मा लिनुभएको छ भने आउँदो १० वर्षसम्म तपाईंले लगातार ९.५% नै ब्याज पाइरहनुहुन्छ। (२) अर्धवार्षिक नगद प्रवाह: मुद्दतीको ब्याज धेरैजसो अवधि सकिएपछि वा त्रैमासिक मात्र आउँछ, तर डिबेन्चरको ब्याज हरेक ६/६ महिनामा सिधै बैंक खातामा जम्मा हुन्छ। (३) जरिवाना बिना बिक्री: मुद्दती निक्षेप समयअगावै तोड्दा बैंकले ब्याजमा ठूलो हर्जाना काट्छ। तर डिबेन्चर नेप्सेमा सूचीकृत हुने भएकाले ब्रोकर मार्फत दोस्रो बजारमा जुनसुकै बेला बेच्न सकिन्छ।',
          callout: {
            type: 'tip',
            title: 'अवकाशपछिको उत्कृष्ट सुरक्षा',
            text: 'ब्याजदर घट्ने चक्रबाट सुरक्षित रहन डिबेन्चर अवकाशप्राप्त व्यक्तिका लागि नियमित मासिक वा अर्धवार्षिक खर्च धान्ने सबैभन्दा बलियो जग हो।'
          }
        },
        {
          num: 3,
          id: 'chap-3-applying-via-meroshare',
          title: 'MeroShare बाट डिबेन्चरमा आवेदन दिने सजिलो तरिका',
          content: 'प्राथमिक बजारमा डिबेन्चर भर्ने तरिका साधारण सेयर (IPO) भरे जस्तै हो: (१) MeroShare मा लगइन गर्नुहोस्। (२) "Apply for Issue" मा जानुहोस्। (३) त्यहाँ खुला रहेको डिबेन्चर छनोट गर्नुहोस् (जस्तै: नबिल डिबेन्चर वा सानिमा बैंक डिबेन्चर)। (४) "Apply" मा क्लिक गर्नुहोस्। (५) कित्ता संख्या लेख्नुहोस् (न्यूनतम २५ कित्ता = रु. २५,०००)। (६) आफ्नो बैंक खाता र C-ASBA छनोट गरी ४ अंकको PIN हानेर Submit गर्नुहोस्। डिबेन्चरमा सेयरमा जस्तो अत्यधिक भीड नहुने भएकाले जति कित्ता आवेदन दियो, लगभग सबै कित्ता पर्ने निश्चित हुन्छ।',
          callout: {
            type: 'tip',
            title: 'माग अनुसार सेयर पर्ने निश्चितता',
            text: 'साधारण सेयरमा जस्तो १० कित्ता मात्र पर्ने बाध्यता डिबेन्चरमा हुँदैन। तपाईंले रु. ५० हजार वा ५ लाखको भर्नुभयो भने पूरै कित्ता पाउने सम्भावना उच्च हुन्छ।'
          }
        },
        {
          num: 4,
          id: 'chap-4-nepse-secondary-trading',
          title: 'नेप्से दोस्रो बजारमा डिबेन्चरको कारोबार कसरी हुन्छ?',
          content: 'बाँडफाँड भएपछि डिबेन्चर तपाईंको डिम्याट खातामा बैंकको विशेष संकेत (Symbol) सहित आउँछ (जस्तै SBLD83, NBLD85, EBLD86, जहाँ अन्तिम दुई अंकले परिपक्व हुने विक्रम संवत् वर्ष बुझाउँछ)। तपाईंले आफ्नो ब्रोकरको TMS मार्फत यसलाई दोस्रो बजारमा किन्न वा बेच्न सक्नुहुन्छ। यदि बजारमा नयाँ ब्याजदर घटेर ६% मा झर्‍यो भने पुरानो ९.५% ब्याज दिने डिबेन्चर रु. १,००० भन्दा बढी मूल्यमा बिक्छ। तर नेप्सेमा डिबेन्चरको दैनिक कारोबार सेयरको तुलनामा थोरै हुने भएकाले यसलाई परिपक्व हुने अवधिसम्म राखेर नियमित ब्याज खानु नै सबैभन्दा बुद्धिमानी हुन्छ।',
          callout: {
            type: 'warning',
            title: 'परिपक्व अवधिसम्म राख्ने रणनीति',
            text: 'डिबेन्चरलाई दोस्रो बजारमा किनबेच गर्नुभन्दा ७ देखि १० वर्षसम्म राखेर नियमित ब्याज लिने उद्देश्यले लगानी गर्नु उत्तम हुन्छ।'
          }
        },
        {
          num: 5,
          id: 'chap-5-taxation-on-debentures',
          title: 'करको व्यवस्था: व्यक्तिगत लगानीकर्ताका लागि मात्र ५% अन्तिम कर',
          content: 'नेपालको आयकर ऐन २०५८ को दफा ८८ अनुसार सूचीकृत डिबेन्चरबाट प्राप्त हुने ब्याजमा प्राकृतिक व्यक्ति (Individual) का लागि मात्र ५% अन्तिम कर (Final Withholding Tax) लाग्छ। बैंकले ब्याज भुक्तानी गर्दा ५% कर कट्टा गरी बाँकी रकम खातामा पठाइदिन्छ। उदाहरणका लागि, यदि तपाईंले ९% को डिबेन्चरमा रु. ५ लाख लगानी गर्नुभएको छ भने वार्षिक कुल ब्याज रु. ४५,००० हुन्छ। बैंकले रु. २,२५० (५%) कर कट्टी गरी खुद रु. ४२,७५० तपाईंको बैंक खातामा पठाउँछ। यो अन्तिम कर भएकाले यसलाई आफ्नो तलब आम्दानीमा जोडेर थप कर तिर्नु पर्दैन।',
          callout: {
            type: 'tip',
            title: 'थप करको कुनै झन्झट छैन',
            text: 'डिबेन्चरको ब्याजमा काटिएको ५% कर नै अन्तिम कर हो। यसले तपाईंको तलब वा अन्य व्यवसायको कर स्ल्याब बढाउँदैन।'
          }
        },
        {
          num: 6,
          id: 'chap-6-passive-income-ladder',
          title: 'बैंक डिबेन्चरबाट नियमित पेन्सन आम्दानी बनाउने भर्‍याङ (Ladder) विधि',
          content: 'अवकाशपछि वा नियमित खर्च चलाउन डिबेन्चर भर्‍याङ (Laddering) विधि अपनाउनुहोस्: फरक-फरक वर्षमा परिपक्व हुने डिबेन्चरमा रकम बाँड्नुहोस् (जस्तै: रु. २ लाख २०८५ मा सकिने, रु. २ लाख २०८७ मा सकिने र रु. २ लाख २०८९ मा सकिने)। यसका दुई ठूला फाइदा छन्: (१) नियमित साँवा फिर्ता: हरेक २-३ वर्षमा केही साँवा फिर्ता आउँछ, जसलाई तत्कालीन राम्रो ब्याजदरमा फेरि लगानी गर्न वा घरको ठूलो खर्चमा प्रयोग गर्न सकिन्छ। (२) बाह्रै महिना ब्याज: फरक बैंकहरूले वर्षको फरक महिनामा ब्याज बाँड्ने भएकाले (कसैले पुस/असार, कसैले कात्तिक/वैशाख) वर्षैभरि नियमित आम्दानी भइरहन्छ।',
          callout: {
            type: 'tip',
            title: 'सम्पत्ति संरक्षणको भरपर्दो आधार',
            text: 'निश्चित आम्दानीका लागि बैंक डिबेन्चर र पुँजी वृद्धिका लागि खुलामुखी म्युचुअल फण्डको SIP मिलाएर लगानी गर्दा नेपालमा सबैभन्दा सुरक्षित पोर्टफोलियो बन्दछ।'
          }
        }
      ],
      nepalContext: 'नेपाल राष्ट्र बैंकले वाणिज्य बैंकहरूको जोखिम भारित सम्पत्ति र पुँजी कोष अनुपात कडा रूपमा अनुगमन गर्छ। नेपालको आधुनिक बैंकिङ इतिहासमा कुनै पनि ‘क’ वर्गको वाणिज्य बैंकले डिबेन्चरको साँवा वा ब्याज भुक्तानीमा डिफल्ट गरेको छैन। यसकारण डिबेन्चर नेपालको पुँजी बजारमा अत्यधिक सुरक्षित लगानी मानिन्छ।',
      comparisonTable: {
        title: 'बैंक डिबेन्चर र मुद्दती निक्षेपको तुलनात्मक विश्लेषण',
        caption: 'नेपाली बचतकर्ताका लागि दुई मुख्य स्थिर आम्दानी औजार बीचको फरक',
        headers: ['विशेषता', 'बैंक डिबेन्चर (ऋणपत्र)', 'मुद्दती निक्षेप (FD)'],
        rows: [
          ['प्रति कित्ता मूल्य', 'रु. १,००० (न्यूनतम २५ कित्ता = रु. २५,०००)', 'आफ्नो इच्छा अनुसार (न्यूनतम रु. १०,०००)'],
          ['लगानीको अवधि', 'दीर्घकालीन: ७ देखि १० वर्ष निश्चित ब्याज', 'अल्पकालीन: प्रायः ३ महिनादेखि २ वर्ष'],
          ['ब्याज भुक्तानी तालिका', 'अर्धवार्षिक (हरेक ६/६ महिनामा ग्यारेन्टी)', 'त्रैमासिक वा अवधि सकिएपछि एकमुष्ट'],
          ['दोस्रो बजारमा बिक्री', 'नेप्सेमा सूचीकृत; ब्रोकर मार्फत बेच्न सकिने', 'बिक्री गर्न नमिल्ने; तोड्दा ब्याज जरिवाना लाग्ने'],
          ['घट्दो ब्याजदरबाट सुरक्षा', '१००% सुरक्षित (१० वर्षसम्म पुरानै दर पाइने)', 'असुरक्षित (अवधि सकिएपछि घटेको दरमा नवीकरण हुने)'],
          ['ब्याजमा लाग्ने कर', '५% अन्तिम कर (दफा ८८ TDS)', '५% अन्तिम कर (प्राकृतिक व्यक्ति)']
        ]
      },
      practicalScenario: {
        persona: 'गोविन्द, ५६ वर्ष, भरतपुरमा सेवा निवृत्त निजामती कर्मचारी',
        challenge: 'गोविन्दले अवकाशपछि पाएको उपदानको रु. २० लाख १ वर्षे बैंक मुद्दतीमा ९% ब्याजमा राखे। तर अर्को वर्ष मुद्दतीको ब्याज घटेर ६% मा झर्‍यो, जसले गर्दा उनको वार्षिक ब्याज आम्दानी रु. १,८०,००० बाट घटेर रु. १,२०,००० मा सीमित भयो- मासिक रु. ५,००० को घाटा भयो।',
        solution: 'गोविन्दले आफ्नो लगानी पुनर्संरचना गरे: उनले रु. १० लाख दुईवटा ‘क’ वर्गका बैंकको ९.२५% ब्याज दिने ८ वर्षे डिबेन्चरमा राखे (जसले २०८८ सालसम्म बजार ब्याजदर जति घटे पनि वार्षिक रु. ९२,५०० ब्याज निश्चित गर्‍यो)। बाँकी रु. ५ लाख १ वर्षे मुद्दतीमा र रु. ५ लाख खुलामुखी म्युचुअल फण्डको SWP मा राखे। अब उनको डिबेन्चरबाट हरेक पुस र असारमा कर कटाएर खुद रु. ४३,९३७ सोझै बैंक खातामा जम्मा हुन्छ।'
      },
      calculatorShortcut: {
        slug: 'fixed-deposit',
        name: 'मुद्दती निक्षेप तथा डिबेन्चर क्याल्कुलेटर',
        desc: 'मुद्दती निक्षेप, बैंक डिबेन्चर र नियमित बचत योजनाबाट आउने कम्पाउन्ड प्रतिफल तुलना गर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'नेपाल बैंक डिबेन्चर निर्देशिका तथा मूल्यांकन सूची (PDF)',
          type: 'PDF Guide',
          size: '260 KB',
          href: 'assets/downloads/nepse-first-time-investor-checklist.html'
        }
      ],
      faqs: [
        {
          q: 'के नेपालमा बैंकले डिबेन्चरको पैसा नतिरी डुबाउन सक्छ?',
          a: 'सिद्धान्ततः कर्जा जोखिम भए पनि नेपालका ‘क’ वर्गका बैंकहरू नेपाल राष्ट्र बैंकको कडा नियमन र अनुगमनमा हुन्छन्। नेपालको बैंकिङ इतिहासमा कुनै पनि वाणिज्य बैंकले डिबेन्चरको साँवा-ब्याज नतिरेको रेकर्ड छैन।'
        },
        {
          q: 'डिबेन्चरको ब्याज कसरी प्राप्त हुन्छ?',
          a: 'तपाईंको डिम्याट खातासँग जोडिएको बैंक खातामा connectIPS / NCHL मार्फत तोकिएको अर्धवार्षिक मितिमा सिधै ब्याज जम्मा हुन्छ।'
        },
        {
          q: 'के डिबेन्चर धितो राखेर बैंकबाट ऋण लिन मिल्छ?',
          a: 'मिल्छ। नेप्सेमा सूचीकृत डिबेन्चरलाई बैंकमा धितो (Pledge) राखी राष्ट्र बैंकको नियम अनुसार अंकित मूल्यको ७०% सम्म कर्जा लिन सकिन्छ।'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'नेपालमा म्युचुअल फण्डको आधारभूत ज्ञान',
          slug: 'what-is-mutual-fund-nepal',
          categorySlug: 'mutual-funds',
          readTime: '१६ मिनेट पढाइ'
        },
        nextGuide: {
          title: 'नेपालका Mutual Fund हरूको पूर्ण गाइड',
          slug: 'complete-mutual-fund-guide',
          readTime: '१३ मिनेट पढाइ'
        },
        nextCalculator: {
          title: 'Fixed Deposit Calculator',
          slug: 'fixed-deposit'
        },
        nextGlossary: {
          title: 'डिबेन्चर (ऋणपत्र)',
          term: 'डिबेन्चर (ऋणपत्र)',
          def: 'वाणिज्य बैंक वा कम्पनीले रु. १,००० अंकित मूल्यमा निष्कासन गर्ने दीर्घकालीन निश्चित ब्याजदर भएको ऋणपत्र।'
        }
      }
    }
  },

  // ── 4. Complete Net Worth Audit & Records System Guide ───────────────────
  'complete-personal-net-worth-guide': {
    id: 'complete-personal-net-worth-guide',
    slug: 'complete-personal-net-worth-guide',
    categorySlug: 'productivity',
    categoryName: { en: 'Productivity & Systems', np: 'उत्पादकत्व र प्रणाली' },
    title: {
      en: 'Complete Nepal Personal Net Worth Audit & Financial Records System Guide',
      np: 'नेपालमा व्यक्तिगत खुद सम्पत्ति (Net Worth) अडिट र वित्तीय अभिलेख प्रणालीको पूर्ण गाइड'
    },
    oneLineSummary: {
      en: 'The definitive end-to-end framework for calculating real net worth in Nepal: valuing land Lalpurja, gold, Demat shares, and SSF/CIT against bank loans, plus creating an emergency family document vault.',
      np: 'नेपालमा आफ्नो वास्तविक खुद सम्पत्ति (Net Worth) निकाल्ने, लालपुर्जा, सुन, सेयर र SSF/CIT को यथार्थ मूल्यांकन गर्ने, र आपतकालीन पारिवारिक वित्तीय अभिलेख प्रणाली बनाउने सम्पूर्ण विधि।'
    },
    difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
    readTime: { en: '13 min read', np: '१३ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: {
      en: 'Verified for Nepal Personal Accounting & Legal Document Safety Standards',
      np: 'नेपाली लेखा अभ्यास तथा कानुनी कागजात सुरक्षा मापदण्ड अनुसार प्रमाणित'
    },
    prerequisites: [
      { title: 'List of all Bank Accounts, Fixed Deposits, and Wallet Balances', type: 'Prerequisite' },
      { title: 'Demat Portfolio Statement (MeroShare) & Land Lalpurja Details', type: 'Document' },
      { title: 'All Active Loan Outstanding Balances (Home, Auto, Personal, Credit Card)', type: 'Document' }
    ],
    en: {
      intro: 'In Nepali society, wealth is often confused with income or visible consumption: driving a newly financed SUV, wearing heavy gold ornaments, or having an impressive monthly salary. Yet many households earning NPR 2 Lakh a month carry a negative financial net worth because their liabilities (high-interest EMIs, informal loans, and cooperative borrowings) exceed their liquid assets. Conversely, true financial freedom is measured by one metric alone: Personal Net Worth (खुद सम्पत्ति = Total Assets minus Total Liabilities). Conducting a bi-annual Net Worth Audit strips away illusions, reveals your true wealth velocity, protects your family with an organized emergency document vault, and guarantees you are building permanent generational wealth in Nepal.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-net-worth-equation',
          title: 'The Nepal Net Worth Equation: Total Assets Minus Total Liabilities',
          content: 'The Net Worth formula is deceptively simple yet profoundly revealing: Net Worth = Total Assets (what you own) minus Total Liabilities (what you owe). In Nepal, assets are bifurcated into: (1) Liquid Financial Assets: Savings accounts, fixed deposits, Demat shares at current market value, open-ended mutual fund units, and digital wallet balances. (2) Semi-Liquid Institutional Retirement Assets: Social Security Fund (SSF) accumulated principal, Citizen Investment Trust (CIT / नागरिक लगानी कोष), and Employees Provident Fund (EPF / सञ्चय कोष). (3) Illiquid Tangible Assets: Real estate (land and residential houses), physical 24k/22k gold bullion (valued at pure gold weight without making charges), and vehicle market resale value. Liabilities encompass: Home loan balances, vehicle loans, personal/education loans, outstanding credit card balances, cooperative borrowings, and informal family debts.',
          callout: {
            type: 'important',
            title: 'Income is What You Earn; Net Worth is What You Keep',
            text: 'A high earner spending 98% of their salary on depreciating consumer goods has a lower net worth than a modest earner consistently investing in productive assets.'
          }
        },
        {
          num: 2,
          id: 'chap-2-valuing-real-estate-gold',
          title: 'Valuing Real Estate & Gold Accurately without Speculative Delusions',
          content: 'The most dangerous mistake Nepalis make during net worth audits is real estate overvaluation. Families often claim a remote ancestral plot is worth NPR 40 Lakh per Anna because an opportunistic broker quoted that figure, even though no buyer has emerged in two years. To calculate realistic net worth: (1) Land & House Valuation: Use the Conservative Distress Value-take 75% to 80% of current realistic market transactions in your neighborhood (or the bank engineer’s conservative valuation rate), NOT the speculative asking price. Deduct expected capital gains tax (5% or 7.5%) and broker commission (1-2%). (2) Gold & Silver Valuation: Calculate based on pure metal weight in Tolas/Grams multiplied by current Federation of Nepal Gold and Silver Dealers’ Association (FENEGOSIDA) bullion rates. Subtract 10% to 15% for wastage (Jarti) and making charges (Jhyal) if valuing ornamental jewelry.',
          callout: {
            type: 'tip',
            title: 'Conservative Valuations Prevent Shock',
            text: 'Underestimating your asset values by 10% ensures you make conservative financial decisions; overestimating them creates a false sense of security that leads to reckless borrowing.'
          }
        },
        {
          num: 3,
          id: 'chap-3-tracking-hidden-liabilities',
          title: 'Uncovering Hidden Liabilities: Informal Debts, Dhukuti & Guarantees',
          content: 'Many Nepali households conceal massive liabilities from their personal accounting: (1) Unofficial Family Borrowings: Money borrowed from relatives for weddings or medical emergencies with verbal interest commitments. (2) Dhukuti Schemes: Unregistered revolving savings circles where you have already taken the pot and owe future monthly installments. (3) Negative Cooperative Balances: Loans taken from local cooperatives at 14%-18% interest. (4) Contingent Liabilities: Personal guarantees signed for friends’ loans that are in default. Every single rupee of debt must be entered into your liabilities ledger with its exact interest rate, because high-interest debt compounds against you twice as fast as investments compound in your favor.',
          callout: {
            type: 'warning',
            title: 'Audit All Debts Truthfully',
            text: 'Ignoring an informal 18% loan in your audit does not make it disappear; it silently destroys your financial foundation while you celebrate false progress.'
          }
        },
        {
          num: 4,
          id: 'chap-4-emergency-document-vault',
          title: 'Building the Family Emergency Financial Document Vault',
          content: 'Every year in Nepal, hundreds of families lose access to ancestral land, bank accounts, and life insurance benefits because the primary earner passes away or suffers a medical crisis without leaving organized records. Establish a physical and digital Family Emergency Vault: (1) Physical Fireproof Folder: Original Land Ownership Certificates (लालपुर्जा), citizenship certificates, marriage certificate, life insurance policy bonds, physical share certificates, and bank cheque books. (2) Secure Digital Vault: A password-protected Google Drive folder shared with a trusted spouse or nominee containing high-resolution scans of all legal documents, along with a master sheet listing bank account numbers, Demat BOIDs, MeroShare CRN numbers, SSF ID numbers, and insurance policy numbers (without revealing sensitive login PINs or passwords).',
          callout: {
            type: 'important',
            title: 'The Master Information Sheet',
            text: 'Ensure your spouse or trusted next-of-kin knows exactly where the master document folder is located and what steps to take in an emergency.'
          }
        },
        {
          num: 5,
          id: 'chap-5-biannual-audit-routine',
          title: 'The Bi-Annual Audit Routine: Running Your Audit on Baisakh 1 & Kartik 1',
          content: 'Do not obsess over daily net worth fluctuations driven by NEPSE index swings. Instead, schedule a 45-minute Bi-Annual Financial Audit twice every year: on Baisakh 1 (Nepali New Year) and Kartik 1 (post-Dashain review). During this session: (1) Update bank savings and FD balances. (2) Check MeroShare portfolio valuation (using "My Portfolio" total market value). (3) Check SSF/CIT contribution balances online. (4) Update remaining bank loan balances from mobile banking. (5) Calculate Net Worth Change over the past 6 months. If your net worth increased by more than your total salary savings, your assets are actively compounding; if it stagnated or declined, audit discretionary spending immediately.',
          callout: {
            type: 'tip',
            title: 'Measure Wealth Velocity, Not Just Total Balance',
            text: 'Focus on your Net Worth Growth Rate year-over-year. Aim for your net worth to grow by at least 15% annually in your 20s and 30s through active savings and compounding.'
          }
        },
        {
          num: 6,
          id: 'chap-6-nominee-kyc-hygiene',
          title: 'Nominee Registrations & Bank KYC Hygiene (इच्छाएको व्यक्ति)',
          content: 'Under Nepali banking and inheritance law, if an account holder dies without an updated Nominee (इच्छाएको व्यक्ति), family members must navigate agonizing legal processes at the local ward office (सिफारिस), district court, and bank head office to claim the funds. Ensure 100% KYC and Nominee hygiene: (1) Verify that every bank account, FD, and Demat account has an updated nominee with their citizenship number and photograph on file. (2) Update your bank KYC every two years to prevent sudden account freezing by NRB compliance filters. (3) Ensure your PAN is linked across all Demat and bank accounts to guarantee seamless tax clearance.',
          callout: {
            type: 'tip',
            title: 'Update Nominees After Major Life Events',
            text: 'Whenever you get married or have children, update your bank and MeroShare nominee records immediately to ensure full protection for your dependents.'
          }
        }
      ],
      nepalContext: 'In Nepal, property rights and inheritance are governed by the National Civil Code 2074 (मुलुकी देवानी संहिता). Maintaining clear digital records, up-to-date land tax receipts (मालपोत तिरो रसिद), and registered nominees is the single most effective legal shield against protracted family litigation and administrative freezes.',
      comparisonTable: {
        title: 'Assets vs. Liabilities Ledger in Nepal',
        caption: 'Framework for calculating your personal balance sheet',
        headers: ['Asset Category (What You Own)', 'Valuation Method', 'Liability Category (What You Owe)', 'Impact on Net Worth'],
        rows: [
          ['Cash & Bank Savings', 'Current actual balance', 'Credit Card Balances', 'Direct subtraction (High 24% cost)'],
          ['Demat Shares & Mutual Funds', 'Current NEPSE market value', 'Personal & Cooperative Loans', 'Direct subtraction (12%-18% cost)'],
          ['SSF, CIT & EPF Balance', 'Current verified contribution', 'Auto / Bike Loan Outstanding', 'Direct subtraction (Depreciating asset)'],
          ['Gold & Bullion', 'Pure weight × FENEGOSIDA rate', 'Home Loan Principal Remaining', 'Direct subtraction (Offset by home asset)'],
          ['Land & House Real Estate', 'Conservative realistic market (80%)', 'Informal Family Debts / Dhukuti', 'Direct subtraction (Immediate obligation)']
        ]
      },
      practicalScenario: {
        persona: 'Anup, 38, Senior Engineer in Butwal',
        challenge: 'Anup felt wealthy: he earned NPR 1,20,000 monthly, lived in a large family home, and drove a financed crossover SUV. But whenever his family faced a medical expense, he had to scramble to borrow money. When he finally ran a comprehensive Net Worth Audit, he discovered that against assets of NPR 65 Lakh (NPR 45 Lakh house equity, NPR 12 Lakh car, NPR 8 Lakh bank/shares), he carried liabilities of NPR 52 Lakh (NPR 38 Lakh home loan, NPR 10 Lakh car loan, NPR 4 Lakh credit card and cooperative loans). His real liquid net worth was dangerously thin.',
        solution: 'Anup executed a 2-year financial cleanup: he sold the depreciating crossover SUV, paid off the NPR 10 Lakh car loan and NPR 4 Lakh high-interest credit card debt completely, and downsized to a reliable hatchback. He redirected the NPR 32,000 monthly EMI savings into automated mutual fund SIPs and an untouchable emergency buffer. Within 24 months, his net worth surged from NPR 13 Lakh to NPR 28 Lakh, and his liquid reserves reached NPR 6 Lakh, giving him total financial peace of mind.'
      },
      calculatorShortcut: {
        slug: 'cagr',
        name: 'Compound Annual Growth Rate (CAGR) Calculator',
        desc: 'Measure the annual percentage rate at which your total net worth is compounding year over year.'
      },
      downloadableResources: [
        {
          title: 'Nepal Personal Net Worth & Family Document Audit Tracker (Excel / Sheets)',
          type: 'Spreadsheet Template',
          size: '390 KB',
          href: 'assets/downloads/nepal-cash-flow-tracker.csv'
        }
      ],
      faqs: [
        {
          q: 'Should I include my family’s ancestral property (अंशबन्डा नभएको जग्गा) in my personal net worth?',
          a: 'No. Only include property where you hold individual, legally registered ownership (तपाईंको आफ्नै नामको लालपुर्जा). Including undivided ancestral property creates false estimates and leads to legal disputes.'
        },
        {
          q: 'Does a car count as an asset in net worth?',
          a: 'Yes, but strictly at its current resale market value (depreciated value), NOT what you paid when it was brand new. Remember that vehicles depreciate 10%-15% every year.'
        },
        {
          q: 'How often should I recalculate my net worth?',
          a: 'Twice a year (every 6 months) is the ideal cadence. Calculating daily or weekly creates anxiety due to market price swings, while once a year is too slow to correct spending habits.'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'Running Your Annual Financial Audit Every Poush / January',
          slug: 'annual-net-worth-audit-goal-setting',
          categorySlug: 'productivity',
          readTime: '12 min read'
        },
        nextGuide: {
          title: 'Complete Nepal Personal Budgeting Guide',
          slug: 'complete-budgeting-guide',
          readTime: '12 min read'
        },
        nextCalculator: {
          title: 'CAGR Calculator',
          slug: 'cagr'
        },
        nextGlossary: {
          title: 'Net Worth',
          term: 'Net Worth (खुद सम्पत्ति)',
          def: 'Total value of all financial and physical assets owned minus total outstanding debts and liabilities.'
        }
      }
    },
    np: {
      intro: 'नेपाली समाजमा धनी हुनु भनेको धेरैजसो आम्दानी वा बाहिरी रवाफसँग जोडेर हेरिन्छ: ऋणमा किनेको महँगो गाडी चढ्नु, ठूला सुनका गहना लगाउनु, वा मासिक राम्रो तलब हुनु। तर वास्तविकता के हो भने, महिनाको २ लाख कमाउने व्यक्तिको पनि वास्तविक खुद सम्पत्ति (Net Worth) ऋणात्मक हुन सक्छ यदि उसको टाउकोमा चर्को ब्याजको ऋण, सहकारीको कर्जा र क्रेडिट कार्डको भार धेरै छ भने। आर्थिक स्वतन्त्रताको वास्तविक मापन एउटै कुराले गर्छ: व्यक्तिगत खुद सम्पत्ति (Net Worth = कुल सम्पत्ति घटाउ कुल ऋण)। वर्षको दुई पटक आफ्नो Net Worth को अडिट गर्नाले सबै भ्रम हट्छन्, परिवारका महत्त्वपूर्ण कानुनी कागजात सुरक्षित हुन्छन्, र तपाईंले नेपालमा वास्तविक पुस्तान्तरण योग्य सम्पत्ति बनाउँदै हुनुहुन्छ भन्ने निश्चित हुन्छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-net-worth-equation',
          title: 'नेपालमा खुद सम्पत्तिको हिसाब: कुल सम्पत्ति घटाउ कुल ऋण',
          content: 'Net Worth को हिसाब एकदमै सरल तर जीवन बदल्ने खालको छ: खुद सम्पत्ति = कुल सम्पत्ति (आफ्नो स्वामित्वमा रहेको) घटाउ कुल ऋण (अरूलाई तिर्न बाँकी)। नेपालको सन्दर्भमा सम्पत्तिलाई तीन भागमा बाँडिन्छ: (१) तरल वित्तीय सम्पत्ति: बैंकको बचत खाता, मुद्दती निक्षेप, नेप्सेमा रहेका सेयरको बजार मूल्य, खुलामुखी म्युचुअल फण्ड र डिजिटल वालेटको रकम। (२) अर्ध-तरल संस्थागत अवकाश सम्पत्ति: सामाजिक सुरक्षा कोष (SSF) को बचत, नागरिक लगानी कोष (CIT), र कर्मचारी सञ्चय कोष (EPF)। (३) अचल तथा भौतिक सम्पत्ति: घरजग्गा (लालपुर्जा भएको), सुनचाँदी (गहनाको ज्याला-जर्ती कटाएर शुद्ध धातुको मूल्य), र सवारी साधनको बजार मूल्य। दायित्व (ऋण) मा: घर कर्जाको बाँकी साँवा, गाडी कर्जा, व्यक्तिगत कर्जा, क्रेडिट कार्डको बक्यौता, सहकारीको ऋण र साथीभाइसँग लिएको अनौपचारिक सापटी पर्दछन्।',
          callout: {
            type: 'important',
            title: 'आम्दानी कमाइ हो; खुद सम्पत्ति बचेको सम्पत्ति हो',
            text: 'धेरै कमाएर महिनाको अन्त्यमा ९८% खर्च गर्ने व्यक्तिको खुद सम्पत्ति थोरै कमाएर अनुशासित रूपमा उत्पादनशील सम्पत्ति किन्नेको भन्दा धेरै कम हुन्छ।'
          }
        },
        {
          num: 2,
          id: 'chap-2-valuing-real-estate-gold',
          title: 'घरजग्गा र सुनको यथार्थ मूल्यांकन: दलाली भ्रमबाट बच्ने तरिका',
          content: 'नेपालीहरूले आफ्नो सम्पत्ति हिसाब गर्दा गर्ने सबैभन्दा ठूलो गल्ती घरजग्गाको अत्यधिक मूल्यांकन हो। दलालले भनेको भरमा दुर्गम ठाउँको जग्गालाई प्रति आना ४० लाख रुपैयाँ हिसाब गरिन्छ, जबकी त्यो मूल्यमा वर्षौंसम्म ग्राहक भेटिँदैन। यथार्थ मूल्यांकनका नियम: (१) घरजग्गा: बजारमा हालै किनबेच भएको वास्तविक दरको ७५% देखि ८०% मात्र हिसाब गर्नुहोस् (वा बैंकको इन्जिनियरले गर्ने भ्यालुएसन दर मान्नुहोस्)। यसबाट ५-७.५% पुँजीगत लाभकर र दलाली कमिसन घटाएर मात्र खुद मूल्य निकाल्नुहोस्। (२) सुनचाँदी: सुनचाँदी व्यवसायी महासंघ (FENEGOSIDA) को दर अनुसार शुद्ध तोलाको हिसाब गर्नुहोस्। यदि गहना छ भने ज्याला र जर्तीको १०-१५% मूल्य घटाएर मात्र वास्तविक सुनको हिसाब गर्नुपर्छ।',
          callout: {
            type: 'tip',
            title: 'सम्पत्ति १०% घटाएर हिसाब गर्नुहोस्',
            text: 'आफ्नो सम्पत्तिको मूल्य अलि कम हिसाब गर्दा तपाईंले सोचविचार गरेर निर्णय लिनुहुन्छ; तर अस्वाभाविक बढी हिसाब गर्दा झुठो आत्मविश्वासले अनावश्यक ऋण लिन पुगिन्छ।'
          }
        },
        {
          num: 3,
          id: 'chap-3-tracking-hidden-liabilities',
          title: 'अदृश्य ऋणहरू पत्ता लगाउने: अनौपचारिक सापटी, ढुकुटी र जमानी',
          content: 'धेरै नेपाली परिवारले आफ्नो हिसाबमा ठूला दायित्व लुकाउने गर्छन्: (१) आफन्तसँग लिएको अनौपचारिक सापटी: बिहे वा बिरामी पर्दा मौखिक ब्याजमा लिएको पैसा। (२) ढुकुटीको किस्ता: ढुकुटी उचालेर अगाडि नै खर्च गरिसकेको र अब तिर्न बाँकी मासिक किस्ता। (३) सहकारीको ऋण: स्थानीय सहकारीबाट १४% देखि १८% को चर्को ब्याजमा लिएको ऋण। (४) अरूको ऋणमा बसेको जमानी: आफन्तले नतिरेर आफ्नै टाउकोमा आउन लागेको ऋण। यी सबै दायित्वलाई सही ब्याजदर सहित आफ्नो खातामा प्रविष्ट गर्नुपर्छ किनभने चर्को ब्याजको ऋणले तपाईंको सम्पत्ति दोब्बर छिटो सखाप पार्छ।',
          callout: {
            type: 'warning',
            title: 'कुनै पनि ऋण नलुकाउनुहोस्',
            text: 'हिसाब गर्दा १८% को ऋण नदेखाउँदैमा त्यो हराउँदैन; यसले भित्रभित्रै तपाईंको आर्थिक जग खोक्रो बनाइरहेको हुन्छ।'
          }
        },
        {
          num: 4,
          id: 'chap-4-emergency-document-vault',
          title: 'पारिवारिक आपतकालीन वित्तीय कागजात भल्ट (Vault) निर्माण',
          content: 'नेपालमा हरेक वर्ष मुख्य कमाउने मानिसको अकस्मात् मृत्यु हुँदा वा दुर्घटना हुँदा परिवारले बैंक खाता, बिमा रकम र जग्गाजमिनको अत्तोपत्तो नपाएर ठूलो सास्ती पाउने गर्छन्। यसका लागि एउटा सुरक्षित भल्ट बनाउनुहोस्: (१) भौतिक सुरक्षित फाइल: सक्कल लालपुर्जा, नागरिकता, विवाह दर्ता, बिमा पोलिसीको सक्कल पत्र, सेयर प्रमाणपत्र र चेकबुक। (२) सुरक्षित डिजिटल भल्ट: परिवारका विश्वासपात्र सदस्य वा श्रीमतीसँग सेयर गरिएको Google Drive फोल्डर जहाँ सबै कागजातको फोटो, बैंक खाता नम्बर, डिम्याट BOID, MeroShare CRN, SSF नम्बर र बिमा पोलिसी नम्बरको सूची राखिएको होस् (पासवर्ड र गोप्य पिन भने नलेख्नुहोस्)।',
          callout: {
            type: 'important',
            title: 'मुख्य जानकारी पत्र (Master Sheet)',
            text: 'आफ्नो परिवारको विश्वासिलो सदस्यलाई यो फाइल कहाँ छ र आपत पर्दा कुन-कुन ठाउँमा सम्पर्क गर्नुपर्छ भन्ने कुरा स्पष्ट रूपमा सिकाएर राख्नुहोस्।'
          }
        },
        {
          num: 5,
          id: 'chap-5-biannual-audit-routine',
          title: 'वर्षको दुई पटक अडिट गर्ने बानी: वैशाख १ र कात्तिक १ को समय',
          content: 'नेप्सेको दैनिक घटबढ हेरेर दिनदिनै तनाव नलिनुहोस्। वर्षको दुई पटक मात्र ४५ मिनेट निकालेर आर्थिक अडिट गर्नुहोस्: वैशाख १ गते (नयाँ वर्ष) र कात्तिक १ गते (दशैँपछिको समीक्षा)। यो समयमा: (१) बैंक बचत र मुद्दतीको मौज्दात अपडेट गर्नुहोस्। (२) MeroShare मा Portfolio हेरेर सेयरको कुल बजार मूल्य टिप्नुहोस्। (३) SSF/CIT को अनलाइन मौज्दात हेर्नुहोस्। (४) बैंक कर्जाको बाँकी साँवा टिप्नुहोस्। (५) पछिल्लो ६ महिनामा खुद सम्पत्ति कतिले बढ्यो वा घट्यो हिसाब गर्नुहोस्। यदि खुद सम्पत्ति बढेको छ भने तपाईं सही बाटोमा हुनुहुन्छ; यदि घटेको छ भने खर्च नियन्त्रण तुरुन्त सुरु गर्नुहोस्।',
          callout: {
            type: 'tip',
            title: 'सम्पत्ति वृद्धिको गति (Growth Rate) हेर्नुहोस्',
            text: 'आफ्नो २० र ३० वर्षको उमेरमा हरेक वर्ष कम्तीमा १५% ले खुद सम्पत्ति बढाउने लक्ष्य राख्नुहोस्, जसले ४५-५० वर्ष पुग्दा पूर्ण आर्थिक स्वतन्त्रता दिन्छ।'
          }
        },
        {
          num: 6,
          id: 'chap-6-nominee-kyc-hygiene',
          title: 'इच्छाएको व्यक्ति (Nominee) र बैंक KYC नियमित अद्यावधिक',
          content: 'मुलुकी देवानी संहिता अनुसार यदि खातावालाको मृत्यु हुँदा इच्छाएको व्यक्ति (Nominee) राखिएको छैन भने वडा कार्यालयको सिफारिस, अदालतको नाता प्रमाणित र बैंकको झन्झटिलो प्रक्रिया पूरा गर्न वर्षौं लाग्न सक्छ। यसबाट बच्न: (१) हरेक बैंक खाता, मुद्दती र डिम्याटमा इच्छाएको व्यक्तिको नाम, नागरिकता नम्बर र फोटो अनिवार्य राख्नुहोस्। (२) बैंक खातामा २/२ वर्षमा KYC नवीकरण गर्नुहोस् ताकि राष्ट्र बैंकको नियमले खाता रोक्का नहोस्। (३) सबै डिम्याट र बैंकमा प्यान (PAN) लिंक भएको निश्चित गर्नुहोस्।',
          callout: {
            type: 'tip',
            title: 'विवाह वा सन्तान जन्मिएपछि Nominee फेर्नुहोस्',
            text: 'विवाह भएपछि वा नयाँ सन्तान जन्मिएपछि बैंक र डिम्याटमा इच्छाएको व्यक्ति अद्यावधिक गर्नुहोस् ताकि भोलि परिवारलाई कुनै कानुनी झन्झट नपरोस्।'
          }
        }
      ],
      nepalContext: 'नेपालमा सम्पत्तिको अधिकार मुलुकी देवानी संहिता २०७४ ले सुरक्षित गरेको छ। नियमित मालपोत तिरो रसिद राख्ने, डिजिटल कपी सुरक्षित गर्ने, र बैंकमा इच्छाएको व्यक्ति स्पष्ट तोक्नाले परिवारमा सम्पत्तिको विवाद हुन दिँदैन र आर्थिक सुरक्षा प्रत्याभूत गर्दछ।',
      comparisonTable: {
        title: 'व्यक्तिगत खुद सम्पत्ति (Net Worth) हिसाब गर्ने तालिका',
        caption: 'आफ्नो कुल सम्पत्ति र कुल ऋणको वास्तविक हिसाब निकाल्ने ढाँचा',
        headers: ['सम्पत्तिको विवरण (आफूसँग भएको)', 'मूल्यांकनको आधार', 'ऋणको विवरण (तिर्न बाँकी)', 'खुद सम्पत्तिमा असर'],
        rows: [
          ['नगद तथा बैंक बचत', 'हाल खातामा भएको मौज्दात', 'क्रेडिट कार्ड बक्यौता', 'सीधै घट्ने (२४% चर्को ब्याज)'],
          ['सेयर तथा म्युचुअल फण्ड', 'हालको नेप्से बजार मूल्य', 'व्यक्तिगत तथा सहकारी ऋण', 'सीधै घट्ने (१२%-१८% ब्याज)'],
          ['SSF, CIT र सञ्चय कोष', 'जम्मा भएको कुल योगदान रकम', 'सवारी साधन कर्जा', 'सीधै घट्ने (सवारीको मूल्य घट्दै जाने)'],
          ['सुन तथा चाँदी', 'शुद्ध तौल × सुनचाँदी दर', 'घर कर्जाको बाँकी साँवा', 'सीधै घट्ने (घरको मूल्यले पूर्ति गर्ने)'],
          ['घर तथा जग्गा', 'बजारको वास्तविक दरको ८०%', 'आफन्तसँगको अनौपचारिक सापटी', 'सीधै घट्ने (तत्काल तिर्नुपर्ने दायित्व)']
        ]
      },
      practicalScenario: {
        persona: 'अनुप, ३८ वर्ष, बुटवलमा वरिष्ठ इन्जिनियर',
        challenge: 'अनुपलाई आफू निकै सम्पन्न छु भन्ने लाग्थ्यो: महिनाको रु. १,२०,००० कमाउँथे, राम्रो घरमा बस्थे र नयाँ क्रसओभर गाडी चढ्थे। तर जब घरमा कुनै आपतकालीन खर्च आइपर्थ्यो, उनले साथीहरूसँग हात फैलाउनुपर्थ्यो। जब उनले पहिलो पटक आफ्नो Net Worth अडिट गरे, उनले देखे कि रु. ६५ लाखको सम्पत्ति (रु. ४५ लाख घर, रु. १२ लाख गाडी, रु. ८ लाख बैंक/सेयर) हुँदाहुँदै पनि उनको टाउकोमा रु. ५२ लाख ऋण थियो (रु. ३८ लाख घर कर्जा, रु. १० लाख गाडी कर्जा, रु. ४ लाख क्रेडिट कार्ड र सहकारी ऋण)। उनको वास्तविक तरल खुद सम्पत्ति अत्यन्तै कमजोर थियो।',
        solution: 'अनुपले दुई वर्षे आर्थिक सुधार योजना बनाए: उनले महँगो गाडी बेचेर रु. १० लाखको गाडी कर्जा र रु. ४ लाखको क्रेडिट कार्ड ऋण तुरुन्तै चुक्ता गरे, र एउटा साधारण सेकेन्ड-ह्यान्ड गाडी चलाउन थाले। गाडीको मासिक रु. ३२,००० EMI बचतलाई उनले सिधै म्युचुअल फण्डको SIP र आपतकालीन बचतमा लगाए। २४ महिनाभित्र उनको खुद सम्पत्ति रु. १३ लाखबाट बढेर रु. २८ लाख पुग्यो र बैंकमा रु. ६ लाखको सुरक्षित आपतकालीन कोष बन्यो।'
      },
      calculatorShortcut: {
        slug: 'cagr',
        name: 'वार्षिक चक्रवृद्धिकरण (CAGR) क्याल्कुलेटर',
        desc: 'वर्षेनी तपाईंको कुल खुद सम्पत्ति कति प्रतिशतको दरले वृद्धि भइरहेको छ मापन गर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'नेपाल व्यक्तिगत Net Worth र पारिवारिक कागजात अडिट स्प्रिडसिट (Excel)',
          type: 'Spreadsheet Template',
          size: '390 KB',
          href: 'assets/downloads/nepal-cash-flow-tracker.csv'
        }
      ],
      faqs: [
        {
          q: 'के बाबुबाजेको अंशबन्डा नभएको जग्गालाई मेरो खुद सम्पत्तिमा जोड्न मिल्छ?',
          a: 'मिल्दैन। आफ्नो नाममा एकल लालपुर्जा नभएको पैतृक सम्पत्तिलाई व्यक्तिगत Net Worth मा जोड्नु हुँदैन किनभने यसले झुठो हिसाब देखाउँछ र कानुनी विवाद हुन सक्छ।'
        },
        {
          q: 'सवारी साधन (गाडी वा मोटरसाइकल) लाई सम्पत्तिमा कसरी देखाउने?',
          a: 'सवारी साधनलाई किनेको मूल्यमा होइन, आजको बजारमा बेच्दा जति आउँछ (Depreciated Resale Value) त्यति मात्र हिसाब गर्नुपर्छ किनभने सवारी साधनको मूल्य वर्षेनी १०-१५% ले घट्छ।'
        },
        {
          q: 'महिनामा कति पटक Net Worth हिसाब गर्नुपर्छ?',
          a: 'महिना-महिनामा होइन, वर्षको दुई पटक (हरेक ६ महिनामा) मात्र हिसाब गर्नु उपयुक्त हुन्छ। दिनदिनै सेयर मूल्य हेरेर हिसाब गर्दा मानसिक तनाव मात्र हुन्छ।'
        }
      ],
      whereToGoNext: {
        nextLesson: {
          title: 'पुस / जनवरीमा वार्षिक वित्तीय अडिट गर्ने तरिका',
          slug: 'annual-net-worth-audit-goal-setting',
          categorySlug: 'productivity',
          readTime: '१२ मिनेट पढाइ'
        },
        nextGuide: {
          title: 'नेपालमा व्यक्तिगत बजेट र नगद प्रवाहको पूर्ण गाइड',
          slug: 'complete-budgeting-guide',
          readTime: '१२ मिनेट पढाइ'
        },
        nextCalculator: {
          title: 'CAGR Calculator',
          slug: 'cagr'
        },
        nextGlossary: {
          title: 'खुद सम्पत्ति (Net Worth)',
          term: 'खुद सम्पत्ति (Net Worth)',
          def: 'आफ्नो स्वामित्वमा रहेका सम्पूर्ण सम्पत्तिहरूको मूल्यबाट तिर्न बाँकी ऋण र दायित्व घटाउँदा आउने वास्तविक सम्पत्ति।'
        }
      }
    }
  }
};

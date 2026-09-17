// BATCH I - DIGITAL PAYMENTS (6 lessons)
// 1. nepal-payment-rails-nchl-connectips
// 2. esewa-vs-khalti-vs-mobile-banking
// 3. fonepay-nepalpay-qr-interoperability
// 4. nrb-digital-transaction-limits-fees
// 5. otp-scams-phishing-defense-nepal
// 6. reporting-digital-financial-fraud-nepal-police

export const BATCH_I = {

  // ── I1. NEPAL PAYMENT RAILS: NCHL & CONNECTIPS ───────────────────
  'nepal-payment-rails-nchl-connectips': {
    id: 'dp-nchl-connectips',
    slug: 'nepal-payment-rails-nchl-connectips',
    categorySlug: 'digital-payments',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NCHL Operating Rules & NRB Payment Systems Department Directives', np: 'नेपाल राष्ट्र बैंक भुक्तानी प्रणाली विभाग तथा NCHL सञ्चालन नियमावली अनुसार समीक्षित' },
    prerequisites: { en: 'Basic familiarity with online bank transfers', np: 'अनलाइन बैंक ट्रान्सफरको सामान्य जानकारी' },
    en: {
      title: 'Nepal\'s Digital Payment Backbone: How NCHL, connectIPS & RTGS Move Money',
      oneLineSummary: 'Understand the underlying plumbing of Nepal\'s digital economy - from real-time interbank rails to bulk government settlements.',
      summaryPoints: [
        'Nepal Clearing House Limited (NCHL) is the national clearing and payment infrastructure operator promoted by NRB and commercial banks.',
        'connectIPS enables 24/7 instant interbank fund transfers up to NPR 20 Lakh per day on web and NPR 2 Lakh on mobile app.',
        'RTGS (Real Time Gross Settlement) handles high-value transactions (above NPR 20 Lakh) directly on the central bank\'s settlement books.',
        'NCHL-IPS manages scheduled batch clearings (such as payroll, dividends, and social security distributions) at rock-bottom fees.',
        'National Payment Interface (NPI) acts as the unified open API gateway powering government revenue, customs, and corporate payments.'
      ],
      whatIsThis: 'Nepal\'s payment rails are the secure digital highways that move funds between different banks, payment service providers (wallets), and government agencies. Operated primarily by Nepal Clearing House Limited (NCHL) under Nepal Rastra Bank regulation, these rails include connectIPS for instant retail transfers, RTGS for massive institutional settlements, and NCHL-IPS for bulk batch payments.',
      whyItMatters: 'Ten years ago, moving money from a bank in Kathmandu to an account in Pokhara required carrying paper cheques, physical clearing visits, and days of waiting. Today, understanding which payment rail to use saves you time and fees. Using connectIPS for an NPR 5 Lakh transfer costs just NPR 8 and settles in 3 seconds, whereas an improper counter transfer might cost NPR 200 and take 24 hours.',
      howItWorks: [
        { step: 1, title: 'Retail Transaction Initiated via connectIPS', desc: 'When you transfer funds on connectIPS, the system performs real-time account validation and locks the money instantly in the sender\'s bank account.' },
        { step: 2, title: 'Real-Time Clearing & Multilateral Settlement', desc: 'The transfer instruction is routed through NCHL\'s central switch, crediting the beneficiary account instantly. Net interbank settlement occurs through banks\' reserve accounts at NRB.' },
        { step: 3, title: 'Bulk Batch Clearing via NCHL-IPS', desc: 'For enterprise payrolls and stock dividends, companies upload bulk lists to CorporatePAY. NCHL-IPS processes these in structured clearing sessions throughout the day.' },
        { step: 4, title: 'High-Value Settlement via RTGS', desc: 'Transactions exceeding NPR 20 Lakh bypass retail switches and settle gross, transaction-by-transaction, directly on Nepal Rastra Bank\'s core banking books in real time.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Comparison of Nepal\'s Primary Payment Rails (FY 2081/82)',
        headers: ['Payment Rail', 'Primary Operator', 'Typical Limits', 'Speed & Settlement', 'Transaction Fee (NPR)'],
        rows: [
          ['connectIPS', 'NCHL', 'Up to NPR 20 Lakh/day (Web)', 'Instant 24/7 Real-Time', 'NPR 2 to NPR 8 flat'],
          ['RTGS', 'Nepal Rastra Bank', 'Above NPR 20 Lakh (No ceiling)', 'Real-Time Gross (Banking Hours)', 'NPR 10 to NPR 100 max'],
          ['NCHL-IPS', 'NCHL', 'No upper ceiling', 'Batch sessions (Same/Next Day)', 'NPR 2 to NPR 10 flat'],
          ['CorporatePAY', 'NCHL / Member Banks', 'Custom institutional limits', 'Instant & Scheduled Batches', 'Institutional volume tariffs'],
          ['Fonepay Switch', 'F1Soft International', 'NPR 3 Lakh/day (Mobile Banking)', 'Instant P2P & QR Merchant', 'NPR 0 (QR) / NPR 10-11 (P2P)']
        ]
      },
      nepalContext: 'Prior to NCHL\'s establishment in 2008, all cheque settlements in Nepal were performed manually by bankers physically meeting at the NRB clearing house in Thapathali. Today, NCHL processes millions of digital transactions monthly. The National Payment Interface (NPI) has unified government revenue collection: citizens now pay inland revenue taxes, vehicle renewal fees, and passport fees online with automated revenue code reconciliation directly into the government treasury.',
      practicalScenario: {
        persona: 'Sujan, 32, e-commerce store owner in Kathmandu',
        income: 'NPR 1,80,000 / month gross revenue',
        scenarioText: 'Sujan needed to pay a garment supplier in Birgunj NPR 4,50,000 urgently on a Saturday afternoon to release festive Dashain stock. His bank branch was closed until Sunday.',
        solutionText: 'Sujan logged into his connectIPS web portal, verified his token, and transferred the NPR 4,50,000 directly to the supplier\'s account at a different commercial bank. The transaction settled in 4 seconds for a fee of just NPR 8. The supplier verified receipt and dispatched the cargo that very evening.',
        metricHighlight: 'Settled an NPR 4.5 Lakh interbank supplier payment on a weekend in 4 seconds'
      },
      formula: {
        name: 'connectIPS Transaction Fee Schedule Formula',
        equation: '\\text{Fee} = \\begin{cases} \\text{NPR } 2 & \\text{if Amount} \\leq 500 \\\\ \\text{NPR } 4 & \\text{if } 500 < \\text{Amount} \\leq 5,000 \\\\ \\text{NPR } 8 & \\text{if Amount} > 5,000 \\end{cases}',
        variables: [
          { symbol: '\\text{Amount}', name: 'Transfer Principal', desc: 'Transfer amount per single transaction in NPR.' },
          { symbol: '\\text{Fee}', name: 'NCHL connectIPS Service Charge', desc: 'Flat statutory fee deducted per transaction.' }
        ],
        exampleCalculation: 'Transferring NPR 4,50,000 on connectIPS: Since Amount > 5,000, fee is strictly NPR 8.00 flat. The percentage fee is an infinitesimal 0.0017%, making it the cheapest payment rail in South Asia!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Compare Payment Rail Costs'
      },
      commonMistakes: [
        { mistake: 'Using mobile banking interbank transfer for large amounts without checking higher fees.', correct: 'Use connectIPS web for transfers up to NPR 20 Lakh to benefit from the flat NPR 8 fee cap.', explanation: 'Some mobile banking interbank transfers charge NPR 10-11 per transaction with lower per-transaction caps.' },
        { mistake: 'Attempting to send RTGS payments outside central bank clearing hours.', correct: 'Initiate RTGS transactions during banking working hours (typically 10 AM to 3 PM on weekdays).', explanation: 'Unlike connectIPS which operates 24/7/365, RTGS requires the NRB central settlement window to be open.' },
        { mistake: 'Typing the wrong account number or branch name on connectIPS.', correct: 'Double-check account number carefully; connectIPS matches name and account number against the destination core banking system before confirming.', explanation: 'Inputting an incorrect account number requires formal interbank dispute resolution that can take days to reverse.' }
      ],
      definitions: [
        { term: 'NCHL', full: 'Nepal Clearing House Limited', meaning: 'The national payment infrastructure company operating interbank clearing and electronic payment systems in Nepal.' },
        { term: 'connectIPS', full: 'Instant Payment System', meaning: 'A retail payment platform allowing direct bank-to-bank electronic fund transfers, bill payments, and government tax receipts.' },
        { term: 'RTGS', full: 'Real Time Gross Settlement', meaning: 'A specialist continuous funds settlement system for large-value transfers (> NPR 20 Lakh) on central bank books.' },
        { term: 'NPI', full: 'National Payment Interface', meaning: 'An open API architecture that links multiple banking and payment systems to government and enterprise applications.' }
      ],
      faqs: [
        { q: 'What is the daily transaction limit on connectIPS in Nepal?', a: 'Under NRB guidelines, verified users can transfer up to NPR 20,00,000 (20 Lakh) per day via the connectIPS web browser interface and up to NPR 2,00,000 (2 Lakh) per day via the connectIPS mobile application.' },
        { q: 'Is connectIPS operational on public holidays and weekends?', a: 'Yes. The connectIPS retail rail operates 24 hours a day, 7 days a week, 365 days a year, providing instant real-time settlement even on Dashain and Saturdays.' },
        { q: 'How does connectIPS link to my bank account?', a: 'You add your bank account details in your connectIPS profile and verify the mandate either online (via debit card / mobile banking OTP) or by submitting a one-time physical verification form to your branch.' }
      ],
      takeaways: [
        'connectIPS is Nepal\'s most cost-effective interbank transfer rail, capping fees at just NPR 8.',
        'RTGS is designed for institutional and high-value payments exceeding NPR 20 Lakh during banking hours.',
        'NCHL-IPS processes massive corporate payrolls and mutual fund dividends via scheduled batch sessions.',
        'The rail operates 24/7/365, enabling real-time commerce on weekends and national holidays.',
        'All government revenue, customs duties, and traffic fines can now be cleared directly via NPI rails.'
      ]
    },
    np: {
      title: 'नेपालको डिजिटल भुक्तानी पूर्वाधार: NCHL, connectIPS र RTGS ले पैसा कसरी ओसार्छन्?',
      oneLineSummary: 'नेपालको डिजिटल अर्थतन्त्रको भित्री संरचना बुझ्नुहोस् - २४सै घण्टा चल्ने अन्तरबैंक प्रणालीदेखि सरकारी ठूला भुक्तानीसम्म।',
      summaryPoints: [
        'नेपाल क्लियरिङ हाउस लिमिटेड (NCHL) नेपाल राष्ट्र बैंक र वाणिज्य बैंकहरूको संयुक्त प्रवर्द्धनमा सञ्चालित राष्ट्रिय भुक्तानी पूर्वाधार हो।',
        'connectIPS ले वेबबाट दैनिक २० लाख र मोबाइल एपबाट २ लाख रुपैयाँसम्म २४सै घण्टा तत्काल अन्तरबैंक रकम पठाउने सुविधा दिन्छ।',
        'RTGS (Real Time Gross Settlement) ले २० लाख रुपैयाँभन्दा माथिका ठूला भुक्तानीहरू राष्ट्र बैंकको खातामार्फत तत्काल राफसाफ गर्छ।',
        'NCHL-IPS ले तलब, लाभांश र सामाजिक सुरक्षा भत्ता जस्ता ठूला समूहगत भुक्तानीहरू न्यून शुल्कमा निश्चित सत्रहरूमा सम्पन्न गर्छ।',
        'नेसनल पेमेन्ट इन्टरफेस (NPI) ले नेपाल सरकारको राजस्व, भन्सार, र कर्पोरेट भुक्तानीलाई एउटै खुला प्रणालीमा जोडेको छ।'
      ],
      whatIsThis: 'नेपालको भुक्तानी पूर्वाधार (Payment Rails) भनेको विभिन्न बैंक, डिजिटल वालेट र सरकारी निकायहरू बीच सुरक्षित रूपमा पैसा ओसारपसार गर्ने डिजिटल सञ्जाल हो। नेपाल राष्ट्र बैंकको नियमनमा NCHL ले सञ्चालन गर्ने यी प्रणालीहरूमा खुद्रा कारोबारका लागि connectIPS, ठूला संस्थागत रकमका लागि RTGS, र एकमुष्ट तलब वितरणका लागि NCHL-IPS पर्दछन्।',
      whyItMatters: 'दश वर्षअघि काठमाडौँबाट पोखरा पैसा पठाउन बैंकमा चेक लिएर लाइन बस्नुपर्थ्यो र पैसा पुग्न २-३ दिन लाग्थ्यो। आज सही भुक्तानी प्रणाली रोज्दा समय र शुल्क दुवै जोगिन्छ। connectIPS मार्फत ५ लाख रुपैयाँ पठाउँदा जम्मा ८ रुपैयाँ शुल्कमा ३ सेकेन्डमै पैसा पुग्छ, जबकि बैंकको काउन्टरमा जाँदा २०० रुपैयाँसम्म शुल्क लाग्न सक्छ।',
      howItWorks: [
        { step: 1, title: 'connectIPS बाट कारोबार सुरु गरिन्छ', desc: 'तपाईंले मोबाइल वा वेबबाट रकम पठाउन खोज्दा प्रणालीले पठाउनेको खाता नम्बर रुजु गरी तत्काल रकम रोक्का गर्छ।' },
        { step: 2, title: 'तत्काल क्लियरिङ र अन्तरबैंक राफसाफ', desc: 'NCHL को केन्द्रीय स्विचमार्फत निर्देशन गइ पाउने व्यक्तिको खातामा तत्काल रकम जम्मा हुन्छ। बैंकहरू बीचको खुद हिसाब राष्ट्र बैंकमा रहेको मौज्दातबाट राफसाफ हुन्छ।' },
        { step: 3, title: 'NCHL-IPS मार्फत समूहगत भुक्तानी', desc: 'कम्पनीहरूले कर्मचारीको तलब वा सेयरको लाभांश एकैपटक हजारौँ खातामा पठाउन NCHL-IPS प्रयोग गर्छन् जुन दिनभरिका विभिन्न सत्रमा क्लियर हुन्छ।' },
        { step: 4, title: 'RTGS बाट उच्च मूल्यको कारोबार', desc: '२० लाख रुपैयाँभन्दा माथिका कारोबारहरू खुद्रा प्रणालीमा नछिरी सोझै राष्ट्र बैंकको केन्द्रीय प्रणालीबाट एक-एक गरी तत्काल राफसाफ (Gross Settlement) हुन्छन्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालका प्रमुख भुक्तानी प्रणालीहरूको तुलना (आव २०८१/८२)',
        headers: ['भुक्तानी प्रणाली', 'सञ्चालक संस्था', 'कारोबारको अधिकतम सीमा', 'गति र समय', 'लाग्ने सेवा शुल्क (रु.)'],
        rows: [
          ['connectIPS', 'NCHL', 'दैनिक रु. २० लाखसम्म (Web)', 'तत्काल २४/७ (३ सेकेन्ड)', 'रु. २ देखि रु. ८ सम्म'],
          ['RTGS', 'नेपाल राष्ट्र बैंक', 'रु. २० लाखभन्दा माथि (कुनै सीमा छैन)', 'तत्काल (बैंकिङ समयभित्र)', 'रु. १० देखि रु. १०० सम्म'],
          ['NCHL-IPS', 'NCHL', 'कुनै माथिल्लो सीमा छैन', 'निश्चित सत्र (सोही दिन/भोलिपल्ट)', 'रु. २ देखि रु. १० सम्म'],
          ['CorporatePAY', 'NCHL / सदस्य बैंक', 'संस्थागत आवश्यकता अनुसार', 'तत्काल र निर्धारित ब्याच', 'संस्थागत भोल्युम दर'],
          ['Fonepay Switch', 'F1Soft International', 'दैनिक रु. ३ लाख (मोबाईल बैंकिङ)', 'तत्काल P2P र QR भुक्तानी', 'QR निःशुल्क / P2P मा रु. १०']
        ]
      },
      nepalContext: '२०६५ सालमा NCHL स्थापना हुनुअघि नेपालका सबै बैंकका प्रतिनिधिहरू चेक बोकेर थापाथलीस्थित राष्ट्र बैंकको क्लियरिङ हलमा भेला हुनुपर्थ्यो। आज NCHL ले महिनामै करोडौँ डिजिटल कारोबार राफसाफ गर्छ। नेशनल पेमेन्ट इन्टरफेस (NPI) लागू भएपछि आन्तरिक राजस्व, सवारी कर, लोकसेवा दस्तुर, र राहदानी शुल्क नागरिकले घरमै बसेर तिर्न सक्छन् र त्यो रकम सिधै सरकारी ढुकुटीमा दाखिला हुन्छ।',
      practicalScenario: {
        persona: 'सुजन, ३२, काठमाडौँका ई-कमर्स व्यवसायी',
        income: 'मासिक रु. १,८०,००० व्यापारिक कारोबार',
        scenarioText: 'दसैँको सामान छुटाउन सुजनले शनिबार दिउँसो वीरगन्जका कपडा उत्पादकलाई रु. ४,५०,००० तुरुन्तै पठाउनुपर्ने भयो। आइतबारसम्म बैंक बन्द थियो।',
        solutionText: 'सुजनले ल्यापटपमा connectIPS खोले, ओटीपी प्रमाणित गरे र उत्पादकको खातामा ४ लाख ५० हजार रुपैयाँ ट्रान्सफर गरे। जम्मा ८ रुपैयाँ शुल्कमा ४ सेकेन्डमै पैसा पुग्यो। वीरगन्जका व्यापारीले तुरुन्तै ट्रकमा सामान लोड गरेर पठाइदिए।',
        metricHighlight: 'शनिबारको दिन ४ सेकेन्डमै ४.५ लाखको अन्तरबैंक भुक्तानी सम्पन्न'
      },
      formula: {
        name: 'connectIPS कारोबार शुल्क तालिका',
        equation: '\\text{Fee} = \\begin{cases} \\text{रु. } २ & \\text{यदि रकम} \\leq ५०० \\\\ \\text{रु. } ४ & \\text{यदि } ५०० < \\text{रकम} \\leq ५,००० \\\\ \\text{रु. } ८ & \\text{यदि रकम} > ५,००० \\end{cases}',
        variables: [
          { symbol: '\\text{रकम}', name: 'पठाइएको मूल रकम', desc: 'प्रति कारोबार रकम (रुपैयाँमा)।' },
          { symbol: '\\text{Fee}', name: 'लाग्ने सेवा शुल्क', desc: 'NCHL ले तोकेको अधिकतम स्थिर सेवा शुल्क।' }
        ],
        exampleCalculation: 'connectIPS बाट रु. ४,५०,००० पठाउँदा: रकम ५,००० भन्दा धेरै भएकाले जम्मा रु. ८.०० मात्र शुल्क लाग्छ। यो कुल रकमको ०.००१७% मात्र हो, जुन दक्षिण एसियाकै सबैभन्दा सस्तो अन्तरबैंक भुक्तानी दर हो!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'भुक्तानी लागत तुलना गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'ठूलो रकम पठाउँदा मोबाइल बैंकिङको महँगो अन्तरबैंक शुल्क ख्याल नगर्नु।', correct: 'ठूलो रकम (२० लाखसम्म) का लागि connectIPS वेब प्रयोग गर्नुहोस् जहाँ अधिकतम रु. ८ मात्र लाग्छ।', explanation: 'कतिपय मोबाइल बैंकिङ एपमा अन्तरबैंक रकम पठाउँदा प्रतिपटक रु. १०-११ लाग्छ र सीमा पनि कम हुन्छ।' },
        { mistake: 'बैंकिङ समय बाहिर RTGS मार्फत पैसा पठाउन खोज्नु।', correct: 'RTGS कारोबार बैंक खुल्ने समय (आइतबार-बिहीबार १० देखि ३ बजे) भित्र मात्र गर्नुहोस्।', explanation: 'connectIPS २४सै घण्टा चल्छ तर RTGS का लागि राष्ट्र बैंकको केन्द्रीय विन्डो खुला हुनुपर्छ।' },
        { mistake: 'connectIPS मा खाता नम्बर वा बैंक शाखा टाइप गर्दा ध्यान नदिनु।', correct: 'खाता नम्बर र नाम दोहोर्याएर जाँच्नुहोस्; गल्ती भएमा फिर्ता ल्याउन लामो कानुनी प्रक्रिया लाग्छ।', explanation: 'गलत खातामा गएको पैसा फिर्ता पाउन दुवै बैंक र राष्ट्र बैंकसम्म निवेदन दिनुपर्ने झन्झट हुन्छ।' }
      ],
      definitions: [
        { term: 'NCHL', full: 'नेपाल क्लियरिङ हाउस लिमिटेड', meaning: 'नेपालमा अन्तरबैंक चेक क्लियरिङ र विद्युतीय भुक्तानी सञ्चालन गर्ने राष्ट्रिय पूर्वाधार संस्था।' },
        { term: 'connectIPS', full: 'तत्काल भुक्तानी प्रणाली', meaning: 'सिधै बैंक खाताबाट अर्को बैंक खातामा २४सै घण्टा तत्काल रकम ट्रान्सफर गर्न सकिने प्लेटफर्म।' },
        { term: 'RTGS', full: 'रियल टाइम ग्रस सेटलमेन्ट', meaning: '२० लाखभन्दा माथिका ठूला रकम राष्ट्र बैंकको खातामार्फत तत्काल एक-एक गरी राफसाफ गर्ने प्रणाली।' },
        { term: 'NPI', full: 'नेशनल पेमेन्ट इन्टरफेस', meaning: 'सरकारी निकाय, बैंक र डिजिटल वालेटहरूलाई जोड्ने खुला प्राविधिक द्वार (Open API)।' }
      ],
      faqs: [
        { q: 'नेपालमा connectIPS बाट दैनिक कतिसम्म पैसा पठाउन मिल्छ?', a: 'नेपाल राष्ट्र बैंकको नियम अनुसार प्रमाणित खाता भएका प्रयोगकर्ताले connectIPS को वेबसाइटबाट दैनिक रु. २०,००,००० (२० लाख) र मोबाइल एपबाट दैनिक रु. २,००,००० (२ लाख) सम्म पठाउन सक्छन्।' },
        { q: 'के सार्वजनिक बिदा र शनिबार पनि connectIPS ले काम गर्छ?', a: 'गर्छ। connectIPS प्रणाली वर्षको ३६५ दिन, २४सै घण्टा सञ्चालनमा रहन्छ र शनिबार वा दसैँको टीकाको दिन पनि तुरुन्तै पैसा ट्रान्सफर हुन्छ।' },
        { q: 'connectIPS मा आफ्नो बैंक खाता कसरी जोड्ने?', a: 'तपाईंले connectIPS मा खाता विवरण भरेपछि अनलाइन (डेबिट कार्ड वा मोबाइल बैंकिङ OTP मार्फत) वा फारम डाउनलोड गरी बैंक शाखामा एकपटक प्रमाणीकरण गराएर जोड्न सक्नुहुन्छ।' }
      ],
      takeaways: [
        'connectIPS नेपालको सबैभन्दा सस्तो अन्तरबैंक भुक्तानी माध्यम हो, जहाँ अधिकतम रु. ८ मात्र शुल्क लाग्छ।',
        '२० लाखभन्दा माथिका ठूला कारोबारका लागि बैंकिङ समयमा RTGS प्रयोग गर्नुपर्छ।',
        'कर्मचारीको तलब र सेयरको लाभांश वितरण गर्न NCHL-IPS ले भरपर्दो सेवा दिन्छ।',
        'यो प्रणाली २४सै घण्टा चल्ने भएकाले शनिबार र बिदाको दिन पनि व्यापार रोकिँदैन।',
        'नेपाल सरकारको सबै किसिमको राजस्व, ट्राफिक जरिवाना र कर सिधै NPI मार्फत तिर्न सकिन्छ।'
      ]
    }
  },

  // ── I2. ESEWA VS KHALTI VS MOBILE BANKING ────────────────────────
  'esewa-vs-khalti-vs-mobile-banking': {
    id: 'dp-esewa-khalti-mobanking',
    slug: 'esewa-vs-khalti-vs-mobile-banking',
    categorySlug: 'digital-payments',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Digital Wallet Regulations & Fonepay Mobile Banking Guidelines', np: 'डिजिटल वालेट नियमावली तथा फोनपे मोबाइल बैंकिङ मापदण्ड अनुसार समीक्षित' },
    prerequisites: { en: 'Basic smartphone and banking app usage', np: 'स्मार्टफोन र बैंकिङ एपको सामान्य प्रयोग' },
    en: {
      title: 'eSewa vs Khalti vs Mobile Banking in Nepal: Which Should You Use?',
      oneLineSummary: 'Compare Nepal\'s top payment channels across cashbacks, transaction limits, merchant acceptance, and security.',
      summaryPoints: [
        'Mobile Banking (via Fonepay) debits directly from your interest-earning bank account with higher daily limits (up to NPR 3 Lakh/day).',
        'Digital Wallets (eSewa, Khalti, IME Pay) require pre-loading funds and earn zero interest on stored wallet balances.',
        'Digital Wallets offer superior utility cashbacks, airline ticketing discounts, and loyalty reward points.',
        'Mobile Banking is ideal for high-ticket merchant purchases, rent transfers, and daily QR payments at local shops.',
        'Keeping a lean wallet balance (under NPR 5,000) acts as a financial firewall protecting your main bank savings.'
      ],
      whatIsThis: 'In Nepal\'s digital ecosystem, consumers primarily transact via three channels: standalone digital wallets like eSewa and Khalti, or bank-provided Mobile Banking apps connected to the Fonepay payment network. While wallets function as pre-paid digital cash containers, mobile banking links directly to your bank checking and savings deposits.',
      whyItMatters: 'Leaving NPR 50,000 idle in a digital wallet means missing out on 3%-5% annual bank interest, earning zero return. Conversely, using mobile banking for obscure online payments can expose your life savings if your credentials are compromised. Knowing when to use a wallet for utility cashbacks vs when to use mobile banking for QR purchases maximizes both your financial safety and monetary returns.',
      howItWorks: [
        { step: 1, title: 'Understand Account Architecture', desc: 'Mobile banking debits directly from your bank balance. A digital wallet requires pre-funding via connectIPS, mobile banking, or physical cash-in agents.' },
        { step: 2, title: 'Compare Interest Earning & Opportunity Cost', desc: 'Money in your bank account earns daily compounded savings interest. Money stored in an eSewa or Khalti wallet generates zero interest for you under NRB regulations.' },
        { step: 3, title: 'Analyze Cashbacks and Reward Programs', desc: 'Wallets frequently offer 1%-3% cashback on mobile top-ups, internet renewals (WorldLink, Vianet), electricity (NEA), and flight tickets. Mobile banking apps offer fewer cashbacks but broader QR acceptance.' },
        { step: 4, title: 'Deploy the Firewall Strategy', desc: 'Maintain your main savings in your high-interest bank account. Transfer small sums (NPR 3,000-5,000) to a digital wallet for daily street purchases and online micro-transactions.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Feature Matrix: eSewa vs Khalti vs Mobile Banking in Nepal',
        headers: ['Feature / Dimension', 'Mobile Banking (Fonepay)', 'eSewa Wallet', 'Khalti Wallet'],
        rows: [
          ['Underlying Fund Source', 'Direct Bank Account (Earns 3%-5% int.)', 'Pre-loaded Wallet (0% interest)', 'Pre-loaded Wallet (0% interest)'],
          ['Daily Transfer Limit', 'NPR 3,00,000 / day', 'NPR 1,00,000 / day (KYC verified)', 'NPR 1,00,000 / day (KYC verified)'],
          ['Merchant QR Acceptance', 'Near universal (Fonepay network)', 'Extensive eSewa merchant QR', 'Rapidly expanding NepalPay/Khalti QR'],
          ['Utility Cashbacks & Offers', 'Minimal / seasonal promo codes', 'Moderate reward points & offers', 'High Khalti points & frequent cashbacks'],
          ['Movie & Domestic Airlines', 'Basic integration in some apps', 'Direct booking with reward points', 'Seamless booking with instant cashback'],
          ['Security Risk Profile', 'Exposes bank balance if compromised', 'Isolated risk (loss capped at wallet bal.)', 'Isolated risk (loss capped at wallet bal.)']
        ]
      },
      nepalContext: 'eSewa pioneered digital payments in Nepal in 2009, creating the domestic payment aggregator industry. Khalti entered in 2017, introducing modern UI and youth-focused loyalty systems. Meanwhile, F1Soft\'s Fonepay network unified commercial banks, turning individual mobile banking apps into formidable competitors. Today, NRB\'s National Payment Switch interoperability initiative ensures you can scan almost any QR code regardless of whether you use eSewa, Khalti, or a bank mobile app.',
      practicalScenario: {
        persona: 'Binita, 23, university student & content creator in Lalitpur',
        income: 'NPR 35,000 / month freelance stipend',
        scenarioText: 'Binita used to keep her entire stipend in her digital wallet. She noticed she was missing out on bank interest, yet she loved getting cashbacks when paying her mobile data pack and ISP bill.',
        solutionText: 'She adopted the "Firewall Method": she keeps NPR 30,000 in her bank savings account earning 4.5% interest. She transfers only NPR 5,000 to Khalti on the 1st of each month to pay her WorldLink internet, NTC mobile packs, and QFX movie tickets, earning over NPR 1,200 annually in cashback while keeping her core savings secure.',
        metricHighlight: 'Earned interest on 85% of her money while capturing full utility cashbacks'
      },
      formula: {
        name: 'Annual Digital Cashback & Interest Yield Formula',
        equation: '\\text{Total Financial Value} = (B_{\\text{bank}} \\times i_{\\text{bank}}) + \\sum \\text{Cashbacks} - \\sum \\text{Transaction Fees}',
        variables: [
          { symbol: 'B_{\\text{bank}}', name: 'Average Bank Savings Balance', desc: 'Funds kept in interest-bearing bank account.' },
          { symbol: 'i_{\\text{bank}}', name: 'Annual Savings Interest Rate', desc: 'Typically 3.0% to 5.0% per annum in Nepal.' },
          { symbol: '\\text{Cashbacks}', name: 'Total Wallet Cashback Rewards', desc: 'Annual sum earned from utility, ISP, and flight payments.' }
        ],
        exampleCalculation: 'Keeping NPR 40,000 in bank at 4.5% interest = NPR 1,800/yr. Spending NPR 30,000/yr on utilities via wallet at 2% average cashback = NPR 600. Total value created = NPR 2,400 per year by using both smartly!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'Calculate Savings Interest'
      },
      commonMistakes: [
        { mistake: 'Storing large savings balances (>NPR 20,000) inside digital wallets.', correct: 'Keep your primary savings in a bank account and transfer to wallets only when needed.', explanation: 'Digital wallets earn zero interest; holding large idle balances suffers 5%-7% inflation loss.' },
        { mistake: 'Using mobile banking apps on rooted or untrusted public Wi-Fi networks.', correct: 'Always use secure mobile cellular data (NTC/Ncell) or trusted home Wi-Fi when transacting.', explanation: 'Compromised public Wi-Fi networks can intercept unencrypted data packets and session cookies.' },
        { mistake: 'Paying utility bills through bank counters instead of digital channels.', correct: 'Pay NEA electricity and Khanepani bills via wallets to save time and claim rebate discounts.', explanation: 'NEA offers early-payment rebates on digital channels, saving both commute time and bill costs.' }
      ],
      definitions: [
        { term: 'Digital Wallet (PSP)', full: 'भुक्तानी सेवा प्रदायक (वालेट)', meaning: 'A licensed non-bank financial institution that provides pre-paid electronic money accounts (e.g. eSewa, Khalti).' },
        { term: 'Mobile Banking', full: 'मोबाइल बैंकिङ', meaning: 'A direct digital banking application provided by a commercial bank linked to your primary deposit accounts.' },
        { term: 'Fonepay', full: 'फोनपे भुक्तानी सञ्जाल', meaning: 'The dominant retail interbank payment network connecting commercial bank apps to QR merchants across Nepal.' },
        { term: 'Financial Firewall', full: 'सुरक्षा पर्खाल रणनीति', meaning: 'Keeping primary savings in a bank while exposing only small dispensable balances in everyday digital wallets.' }
      ],
      faqs: [
        { q: 'Is my money safe if a digital wallet company goes bankrupt in Nepal?', a: 'Under NRB regulations, all customer wallet balances must be held 100% in dedicated escrow accounts at Class A commercial banks; the wallet company cannot lend or speculate with your money.' },
        { q: 'Can I transfer money from eSewa to Khalti directly?', a: 'Direct wallet-to-wallet transfers between different providers are being integrated under the National Payment Switch (NPS). Currently, users transfer funds via connectIPS or through an intermediary bank account.' },
        { q: 'Which is better for daily grocery shopping: eSewa, Khalti, or Mobile Banking?', a: 'Mobile Banking via Fonepay QR is accepted at over 95% of grocery shops, local vendors, and supermarkets across Nepal, making it the most universal choice for physical POS purchases.' }
      ],
      takeaways: [
        'Mobile Banking is best for high-value transactions and universal Fonepay QR merchant payments.',
        'Digital wallets (eSewa, Khalti) excel at utility bill discounts, flight cashbacks, and ticketing.',
        'Never store large savings in digital wallets - they earn zero interest unlike bank savings accounts.',
        'Use the "Firewall Strategy": keep life savings in the bank and load only small sums into wallets.',
        'Interoperability under the National Payment Switch is unifying all QR codes across Nepal.'
      ]
    },
    np: {
      title: 'नेपालमा eSewa बनाम Khalti बनाम मोबाइल बैंकिङ: कुन कहिले प्रयोग गर्ने?',
      oneLineSummary: 'नेपालका प्रमुख डिजिटल भुक्तानी माध्यमहरूको क्यासब्याक, कारोबार सीमा, सुरक्षा र फाइदाहरूको तुलनात्मक अध्ययन।',
      summaryPoints: [
        'मोबाइल बैंकिङ (Fonepay) ले ब्याज दिने बैंक खाताबाट सोझै भुक्तानी गर्छ र यसको दैनिक सीमा (३ लाखसम्म) उच्च हुन्छ।',
        'डिजिटल वालेट (eSewa, Khalti, IME Pay) मा पहिले पैसा लोड गर्नुपर्छ र यसमा राखिएको ब्यालेन्समा कुनै ब्याज पाइँदैन।',
        'डिजिटल वालेटहरूले बिजुली, खानेपानी, इन्टरनेट र हवाई टिकटमा राम्रो क्यासब्याक र रिवार्ड पोइन्ट दिन्छन्।',
        'घरभाडा, ठूला किनमेल र तरकारी पसलका दैनिक QR भुक्तानीका लागि मोबाइल बैंकिङ सबैभन्दा सहज हुन्छ।',
        'वालेटमा सधैँ थोरै रकम (५ हजारभन्दा कम) राख्दा मुख्य बैंक खाता सुरक्षित रहने "सुरक्षा पर्खाल" बन्छ।'
      ],
      whatIsThis: 'नेपालको डिजिटल बजारमा मुख्यतया तीन माध्यमबाट कारोबार हुन्छ: छुट्टै डिजिटल वालेट (eSewa, Khalti), र बैंकहरूले उपलब्ध गराउने मोबाइल बैंकिङ एप (Fonepay सञ्जाल)। वालेटले डिजिटल नगदको काम गर्छ भने मोबाइल बैंकिङले सिधै तपाईंको बचत वा चल्ती खातासँग सम्बन्ध राख्छ।',
      whyItMatters: 'वालेटमा ५० हजार रुपैयाँ थन्क्याएर राख्दा बैंकले दिने वार्षिक ३% देखि ५% ब्याज खेर जान्छ। अर्कोतर्फ, जताततै शंकास्पद अनलाइन साइटमा सिधै मोबाइल बैंकिङ प्रयोग गर्दा मुख्य बैंक खाता नै जोखिममा पर्न सक्छ। कुन प्रयोजनका लागि वालेट र कुन बेला मोबाइल बैंकिङ चलाउने भन्ने थाहा पाउँदा पैसा र सुरक्षा दुवै जोगिन्छ।',
      howItWorks: [
        { step: 1, title: 'खाताको संरचना बुझ्नुहोस्', desc: 'मोबाइल बैंकिङले सिधै तपाईंको बैंक मौज्दातबाट पैसा काट्छ। डिजिटल वालेटमा भने पहिले बैंक वा एजेन्टबाट पैसा लोड (Pre-fund) गर्नुपर्छ।' },
        { step: 2, title: 'ब्याज आम्दानीको हिसाब गर्नुहोस्', desc: 'बैंक खातामा भएको पैसाले दैनिक रूपमा ब्याज कमाउँछ। तर राष्ट्र बैंकको नियम अनुसार eSewa वा Khalti मा बसेको पैसाले शून्य ब्याज दिन्छ।' },
        { step: 3, title: 'क्यासब्याक र छुटको सदुपयोग गर्नुहोस्', desc: 'मोबाइल रिचार्ज, इन्टरनेट (WorldLink, Vianet), बिजुली र हवाई टिकट काट्दा वालेटले १% देखि ३% सम्म क्यासब्याक दिन्छन् जुन मोबाइल बैंकिङमा प्रायः पाइँदैन।' },
        { step: 4, title: 'सुरक्षा पर्खाल (Firewall) विधि अपनाउनुहोस्', desc: 'मुख्य बचत बैंकमै सुरक्षित राख्नुहोस्। दैनिक चिया, खाजा र खुद्रा खर्चका लागि महिनाको ३-५ हजार मात्र वालेटमा सारेर चलाउनुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'विशेषता तुलना: नेपालमा मोबाइल बैंकिङ बनाम eSewa बनाम Khalti',
        headers: ['तुलनाको आधार / सूचक', 'मोबाइल बैंकिङ (Fonepay)', 'eSewa वालेट', 'Khalti वालेट'],
        rows: [
          ['रकम रहने मुख्य स्रोत', 'सिधै बैंक खाता (३%-५% ब्याज आउने)', 'प्रि-लोडेड वालेट (०% ब्याज)', 'प्रि-लोडेड वालेट (०% ब्याज)'],
          ['दैनिक कारोबार सीमा', 'रु. ३,००,००० / दिनसम्म', 'रु. १,००,००० / दिन (KYC प्रमाणित)', 'रु. १,००,००० / दिन (KYC प्रमाणित)'],
          ['पसलहरूमा QR स्वीकार्यता', 'सबैभन्दा व्यापक (Fonepay सञ्जाल)', 'विस्तृत eSewa मर्चेन्ट QR', 'द्रुत गतिमा विस्तार भइरहेको NepalPay'],
          ['बिल भुक्तानी क्यासब्याक', 'धेरै कम / कहिलेकाहीँ मात्र', 'मध्यम अफर र रिवार्ड पोइन्ट', 'उच्च क्यासब्याक र आकर्षक पोइन्ट'],
          ['हवाई तथा सिनेमा टिकट', 'कतिपय एपमा सामान्य सुविधा', 'विस्तृत टिकट र रिवार्ड सुविधा', 'सजिलो बुकिङ र तत्काल क्यासब्याक'],
          ['सुरक्षा जोखिम स्तर', 'ह्याक भए बैंकको पूरै बचत जोखिममा', 'वालेटको रकममा मात्र जोखिम सीमित', 'वालेटको रकममा मात्र जोखिम सीमित']
        ]
      },
      nepalContext: 'नेपालमा २०६६ सालमा eSewa ले पहिलो पटक डिजिटल वालेट सेवा सुरु गरेको थियो। २०७३ मा Khalti आएपछि आधुनिक एप डिजाइन र युवा लक्षित योजनाहरू लोकप्रिय भए। अर्कोतर्फ, F1Soft को Fonepay सञ्जालले नेपालका सबै वाणिज्य बैंकहरूलाई एउटै क्यूआर प्रणालीमा जोडेर मोबाइल बैंकिङलाई अत्यधिक शक्तिशाली बनायो। हाल नेपाल राष्ट्र बैंकको नेसनल पेमेन्ट स्विच अन्तर्गत जुनसुकै एपबाट पनि जुनसुकै क्यूआर स्क्यान गर्न सकिने अन्तरआबद्धता (Interoperability) सुरु भइसकेको छ।',
      practicalScenario: {
        persona: 'बिनिता, २३, ललितपुरकी विश्वविद्यालयकी विद्यार्थी',
        income: 'मासिक रु. ३५,००० फ्रिलान्स आम्दानी',
        scenarioText: 'बिनिताले आफ्नो पूरै कमाइ डिजिटल वालेटमै राख्ने गर्थिन्। उनले बैंकको ब्याज गुमाइरहेकी थिइन्, तर मोबाइल डाटा र इन्टरनेट तिर्दा क्यासब्याक पनि छाड्न चाहन्नथिन्।',
        solutionText: 'उनले "सुरक्षा पर्खाल विधि" अपनाइन्: रु. ३०,००० बैंकको बचत खातामै राखिन् जसले वार्षिक ४.५% ब्याज दियो। महिनाको १ गते रु. ५,००० मात्र Khalti मा सारेर इन्टरनेट, मोबाइल टपअप र फिल्मको टिकट काटिन्। यसबाट उनले वर्षमा १,२०० रुपैयाँभन्दा बढी क्यासब्याक पनि पाइन् र मूल बचत पनि सुरक्षित राखिन्।',
        metricHighlight: '८५% पैसामा बैंक ब्याज पनि कमाइन् र वालेटको पूरै क्यासब्याक पनि लिइन्'
      },
      formula: {
        name: 'डिजिटल भुक्तानी कुल प्रतिफल सूत्र',
        equation: '\\text{Total Financial Value} = (B_{\\text{bank}} \\times i_{\\text{bank}}) + \\sum \\text{Cashbacks} - \\sum \\text{Transaction Fees}',
        variables: [
          { symbol: 'B_{\\text{bank}}', name: 'बैंकमा रहेको औसत बचत मौज्दात', desc: 'ब्याज पाइने बैंक खाताको रकम।' },
          { symbol: 'i_{\\text{bank}}', name: 'वार्षिक बचत ब्याजदर', desc: 'नेपालमा हाल वार्षिक ३% देखि ५%।' },
          { symbol: '\\text{Cashbacks}', name: 'वालेटबाट प्राप्त कुल क्यासब्याक', desc: 'बिल र टपअपबाट वर्षभरि फिर्ता आएको रकम।' }
        ],
        exampleCalculation: 'बैंकमा रु. ४०,००० राख्दा ४.५% ले = रु. १,८०० ब्याज। वालेटबाट वर्षको ३० हजार बिल तिर्दा २% ले = रु. ६०० क्यासब्याक। दुवै मिलाएर चलाउँदा वर्षमा कुल रु. २,४०० खुद वित्तीय फाइदा भयो!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'बचत खाताको ब्याज हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'डिजिटल वालेटमा ठूलो रकम (२० हजारभन्दा बढी) लामो समयसम्म थन्क्याएर राख्नु।', correct: 'मुख्य पैसा बैंकमै राख्नुहोस् र चाहिएको बेला मात्र थोरै रकम वालेटमा लोड गर्नुहोस्।', explanation: 'वालेटमा पैसा राख्दा शून्य ब्याज पाइन्छ जसले गर्दा महँगीका कारण पैसाको मूल्य घट्छ।' },
        { mistake: 'फ्री वाइफाइ वा असुरक्षित नेटवर्कमा मोबाइल बैंकिङ चलाउनु।', correct: 'बैंकिङ कारोबार गर्दा सधैँ व्यक्तिगत मोबाइल डाटा (NTC/Ncell) वा सुरक्षित घरको वाइफाइ चलाउनुहोस्।', explanation: 'सार्वजनिक वाइफाइमा ह्याकरहरूले डाटा चोरेर पासवर्ड पत्ता लगाउने जोखिम हुन्छ।' },
        { mistake: 'विद्युत र खानेपानीको बिल तिर्न बैंकको काउन्टरमा लाइन बस्नु।', correct: 'वालेटबाट अनलाइन बिल तिर्नुहोस् जसले समय पनि बचाउँछ र समयमै तिर्दा छुट पनि दिन्छ।', explanation: 'विद्युत प्राधिकरणले अनलाइनबाट समयमै बिल तिर्दा २% सम्म छुट दिने व्यवस्था गरेको छ।' }
      ],
      definitions: [
        { term: 'डिजिटल वालेट (PSP)', full: 'भुक्तानी सेवा प्रदायक', meaning: 'नेपाल राष्ट्र बैंकबाट अनुमतिप्राप्त संस्था जसले अग्रिम भुक्तानी खाता (जस्तै eSewa, Khalti) सञ्चालन गर्छ।' },
        { term: 'मोबाइल बैंकिङ', full: 'प्रत्यक्ष बैंक मोबाइल एप', meaning: 'वाणिज्य बैंकहरूले आफ्ना ग्राहकलाई खाताबाट सिधै रकम चलाउन उपलब्ध गराएको आधिकारिक बैंकिङ एप।' },
        { term: 'फोनपे (Fonepay)', full: 'अन्तरबैंक भुक्तानी सञ्जाल', meaning: 'नेपालभरका बैंकहरूलाई मर्चेन्ट क्यूआर र अन्तरबैंक ट्रान्सफरमा जोड्ने सबैभन्दा ठूलो डिजिटल नेटवर्क।' },
        { term: 'सुरक्षा पर्खाल रणनीति', full: 'Financial Firewall Strategy', meaning: 'मुख्य पुँजी बैंक खातामा सुरक्षित राख्दै दैनिक सानातिना खर्चका लागि मात्र वालेट प्रयोग गर्ने स्मार्ट तरिका।' }
      ],
      faqs: [
        { q: 'यदि कुनै डिजिटल वालेट कम्पनी डुब्यो भने मेरो पैसा सुरक्षित हुन्छ?', a: 'नेपाल राष्ट्र बैंकको नियम अनुसार वालेटमा भएको ग्राहकको सम्पूर्ण पैसा "क" वर्गका वाणिज्य बैंकको एस्क्रो (Escrow) खातामा सुरक्षित राखिन्छ; वालेट कम्पनीले त्यो पैसा चलाउन पाउँदैन।' },
        { q: 'के eSewa बाट Khalti मा सिधै पैसा पठाउन मिल्छ?', a: 'नेसनल पेमेन्ट स्विच अन्तर्गत अन्तर-वालेट कारोबार विस्तार भइरहेको छ। हाल connectIPS वा आफ्नै बैंक खातामार्फत दुई वालेट बीच पैसा सार्न सकिन्छ।' },
        { q: 'दैनिक तरकारी र पसलको किनमेलका लागि कुन एप सबैभन्दा राम्रो हुन्छ?', a: 'नेपालभरका ९५% भन्दा बढी पसलहरूमा Fonepay QR हुने भएकाले कुनै पनि बैंकको मोबाइल बैंकिङ एप भौतिक किनमेलका लागि सबैभन्दा सहज र भरपर्दो हुन्छ।' }
      ],
      takeaways: [
        'ठूला रकमको कारोबार र भौतिक पसलमा क्यूआर भुक्तानीका लागि मोबाइल बैंकिङ सर्वोत्तम हो।',
        'बिल भुक्तानी, क्यासब्याक, र हवाई टिकटका लागि eSewa र Khalti जस्ता वालेटहरू उपयोगी हुन्छन्।',
        'वालेटमा धेरै रकम कहिल्यै नथन्क्याउनुहोस् किनकि यसमा बैंकको जस्तो ब्याज पाइँदैन।',
        'सुरक्षा पर्खाल विधि अपनाउनुहोस्: मूल बचत बैंकमै राख्नुहोस् र दैनिक खर्च मात्र वालेटबाट गर्नुहोस्।',
        'नेसनल पेमेन्ट स्विचले अब नेपालका सबै क्यूआर कोडहरूलाई एउटै एपबाट स्क्यान गर्न मिल्ने बनाउँदैछ।'
      ]
    }
  },

  // ── I3. FONEPAY & NEPALPAY QR INTEROPERABILITY ───────────────────
  'fonepay-nepalpay-qr-interoperability': {
    id: 'dp-qr-interoperability',
    slug: 'fonepay-nepalpay-qr-interoperability',
    categorySlug: 'digital-payments',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Nepal QR Standard Specifications & Merchant Interchange Directives', np: 'नेपाल राष्ट्र बैंक नेपाल क्यूआर मापदण्ड तथा मर्चेन्ट इन्टरचेन्ज निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Basic experience scanning QR codes for payment', np: 'क्यूआर कोड स्क्यान गरी भुक्तानी गरेको सामान्य अनुभव' },
    en: {
      title: 'Fonepay & NEPALPAY QR Interoperability: How Universal QR Works in Nepal',
      oneLineSummary: 'Understand the unified NepalQR standard that lets any mobile banking app or wallet scan any merchant standee.',
      summaryPoints: [
        'Nepal Rastra Bank mandated the "NepalQR" standard to eliminate merchant countertop clutter and enable universal scanning.',
        'Fonepay operates the largest private QR network; NEPALPAY QR is operated by national infrastructure company NCHL.',
        'Interoperability allows an eSewa user to scan a Fonepay QR, and a mobile banking user to scan a NEPALPAY QR seamlessly.',
        'Merchant Discount Rate (MDR) on QR transactions is strictly capped or zeroed on essential micro-retail by NRB directives.',
        'Dynamic QR codes (with embedded amount on payment terminals) offer superior security over faded paper counter stickers.'
      ],
      whatIsThis: 'QR Interoperability in Nepal is the technical and regulatory framework ensuring that a payment QR code displayed at any merchant counter can be scanned and paid by any mobile banking app, digital wallet, or payment card, regardless of which bank or network issued the QR standee.',
      whyItMatters: 'Just a few years ago, a grocery shop counter in Nepal had 4 to 6 different acrylic standees: one for Fonepay, one for eSewa, one for Khalti, one for IME Pay, and one for SmartQR. Customers constantly had to ask: "Do you have eSewa QR or Fonepay?" Interoperability removes this fragmentation, turning every merchant QR into a universal payment receiver and lowering settlement costs for small shopkeepers.',
      howItWorks: [
        { step: 1, title: 'Issuance of Standardized NepalQR', desc: 'A merchant receives an EMV-compliant QR code from their acquiring bank or wallet operator compliant with NRB\'s NepalQR specifications.' },
        { step: 2, title: 'Customer Scans Using Any Banking App', desc: 'The buyer opens their preferred payment app (e.g. Global IME Mobile Banking) and scans the merchant\'s QR standee (even if it was issued by Nabil Bank or eSewa).' },
        { step: 3, title: 'National Payment Switch Routes Transaction', desc: 'The central switch recognizes the merchant acquiring identifier, validates the payer\'s balance, and routes the payment instruction instantly across switches.' },
        { step: 4, title: 'Instant Confirmation & Real-Time Audio Prompt', desc: 'Both the customer app and the merchant\'s smart audio soundbox confirm: "Payment of NPR 250 received successfully," with instant bank credit.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'QR Payment Ecosystem in Nepal: Fonepay vs NEPALPAY vs Standalone Wallets',
        headers: ['Network Parameter', 'Fonepay QR (F1Soft)', 'NEPALPAY QR (NCHL)', 'Customer Impact'],
        rows: [
          ['Network Reach', 'Over 1.4 Million merchants nationwide', 'Rapidly growing across all BFIs', 'High ubiquity across 77 districts'],
          ['Supported Apps', 'All Commercial Bank Mobile Apps', 'connectIPS, BFIs & Digital Wallets', 'Scan from any app in your pocket'],
          ['Merchant Settlement', 'Real-time or daily batch credit to bank', 'Direct real-time interbank credit', 'Shopkeeper gets funds immediately'],
          ['Audio Soundbox Support', 'Fonepay Soundbox available nationwide', 'NEPALPAY Voicebox supported', 'Instant voice confirmation prevents fraud'],
          ['Consumer Transaction Fee', 'NPR 0 (100% Free for retail consumers)', 'NPR 0 (100% Free for retail consumers)', 'Never pay extra to scan a QR code']
        ]
      },
      nepalContext: 'In 2021, Nepal Rastra Bank published the pioneering "NepalQR Standard", declaring QR payments a national public utility. The central bank mandated that all licensed payment operators must make their merchant networks interoperable. This policy broke exclusive corporate monopolies, allowing small street vendors in Asan and vegetable vendors in Kalimati to display a single unified QR code and accept money from tourists, mobile banking users, and digital wallet holders without friction.',
      practicalScenario: {
        persona: 'Hari, 45, grocery retail store owner in Bhaktapur',
        income: 'NPR 85,000 / month retail profit',
        scenarioText: 'Hari had three different QR standees on his shop counter. Customers frequently complained when their specific wallet was not supported, and keeping track of money arriving in three different accounts was an accounting nightmare.',
        solutionText: 'Hari consolidated to a single standardized NepalQR standee linked to his primary business account, paired with an audio voicebox. Now, whether a customer uses eSewa, Khalti, or Nabil SmartBank, the payment enters his single bank account instantly, announced out loud in Nepali by the soundbox.',
        metricHighlight: 'Consolidated 3 separate QR accounts into 1 universal soundbox terminal'
      },
      formula: {
        name: 'Merchant Net QR Settlement Formula',
        equation: '\\text{Net Merchant Payout} = \\text{Gross QR Sales} - (\\text{Gross QR Sales} \\times \\text{MDR})',
        variables: [
          { symbol: '\\text{Gross QR Sales}', name: 'Daily QR Turnover', desc: 'Total sales collected via QR scans in NPR.' },
          { symbol: '\\text{MDR}', name: 'Merchant Discount Rate', desc: 'Regulated acquiring commission (0% for small retail, max 0.2%-0.5% for commercial tiers).' }
        ],
        exampleCalculation: 'For NPR 10,000 in micro-retail grocery sales where NRB caps retail MDR at 0%: Net Payout = 10,000 - (10,000 × 0%) = NPR 10,000. Shopkeepers keep 100% of their cash without paying credit card swipe fees!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Explore Payment Economics'
      },
      commonMistakes: [
        { mistake: 'Accepting screenshot confirmations from customers without verifying actual receipt.', correct: 'Always wait for the SMS confirmation or audio soundbox announcement before handing over goods.', explanation: 'Fraudsters frequently display spoofed fake payment animation screenshots to trick busy shopkeepers.' },
        { mistake: 'Letting merchants charge an extra 2% to 3% "card fee" for scanning a QR code.', correct: 'Refuse illegal surcharges; NRB regulations strictly prohibit passing merchant fees to consumers.', explanation: 'QR payments are designated as cash-equivalent transactions with zero consumer surcharges.' },
        { mistake: 'Displaying faded or partially damaged paper QR stickers on shop windows.', correct: 'Use UV-protected, laminated standees or digital dynamic QR payment terminals.', explanation: 'Distorted QR codes cause camera read errors and customer drop-offs during peak rush hours.' }
      ],
      definitions: [
        { term: 'NepalQR', full: 'नेपाल क्युआर राष्ट्रिय मापदण्ड', meaning: 'The standardized QR specifications published by NRB to enable unified cross-platform scanning.' },
        { term: 'Interoperability', full: 'अन्तरआबद्धता', meaning: 'The technical ability of different payment systems (e.g. Fonepay and NEPALPAY) to communicate and transact seamlessly.' },
        { term: 'Audio Soundbox', full: 'डिजिटल भुक्तानी आवाज बाकस', meaning: 'A SIM-enabled merchant device that announces incoming digital payments audibly in real time.' },
        { term: 'MDR (Merchant Discount Rate)', full: 'मर्चेन्ट छुट दर', meaning: 'The small transaction fee charged to a merchant by the acquiring bank for processing digital payments.' }
      ],
      faqs: [
        { q: 'Is there any transaction fee for consumers scanning a QR code in Nepal?', a: 'No. Scanning a QR code to pay at any merchant, restaurant, or taxi is completely free of cost for the consumer under Nepal Rastra Bank directives.' },
        { q: 'What should a merchant do if the soundbox does not announce a payment?', a: 'Check the merchant mobile app transaction history. If the transaction does not appear, do not release high-value goods until the customer provides the official transaction trace reference (Ref ID).' },
        { q: 'Can international tourists scan Nepali QR codes to pay?', a: 'Yes. Cross-border QR interoperability agreements (such as Fonepay with India\'s UPI and Alipay) now allow Indian tourists and foreign visitors to pay directly at participating Nepali QR merchants.' }
      ],
      takeaways: [
        'NepalQR standard eliminates multiple QR standees, enabling universal scanning from any app.',
        'Retail QR payments are 100% free of charge for consumers across all 77 districts.',
        'Merchants should rely on SMS or Audio Soundboxes rather than trusting customer phone screens.',
        'NRB strictly prohibits merchants from charging extra fees or surcharges on QR payments.',
        'Cross-border QR links allow international visitors to pay seamlessly at Nepali counters.'
      ]
    },
    np: {
      title: 'नेपालमा Fonepay र NEPALPAY QR अन्तरआबद्धता: एउटै क्यूआरले सबैतिर चल्ने व्यवस्था',
      oneLineSummary: 'नेपाल राष्ट्र बैंकको एकीकृत नेपाल क्युआर (NepalQR) मापदण्ड बुझ्नुहोस् - जहाँ जुनसुकै मोबाइल बैंकिङ वा वालेटबाट जुनसुकै क्यूआर स्क्यान हुन्छ।',
      summaryPoints: [
        'नेपाल राष्ट्र बैंकले काउन्टरमा धेरै क्यूआर राख्नुपर्ने झन्झट हटाउन राष्ट्रिय "NepalQR" मापदण्ड लागू गरेको छ।',
        'Fonepay ले नेपालको सबैभन्दा ठूलो निजी क्यूआर सञ्जाल चलाउँछ भने NEPALPAY QR राष्ट्रिय पूर्वाधार NCHL ले सञ्चालन गर्छ।',
        'अन्तरआबद्धता (Interoperability) ले eSewa प्रयोगकर्ताले Fonepay QR र बैंक प्रयोगकर्ताले NEPALPAY QR सजिलै स्क्यान गर्न सक्छन्।',
        'साना खुद्रा व्यापारीका लागि क्यूआर कारोबारमा लाग्ने मर्चेन्ट छुट दर (MDR) राष्ट्र बैंकले निःशुल्क वा एकदमै न्यून तोकेको छ।',
        'काउन्टरमा राखिने अडियो साउन्डबक्स (Soundbox) ले पैसा आएको तुरुन्तै बोलेर सुनाउने हुँदा ठगीबाट जोगाउँछ।'
      ],
      whatIsThis: 'क्यूआर अन्तरआबद्धता (QR Interoperability) भनेको यस्तो कानुनी र प्राविधिक व्यवस्था हो जहाँ पसलको काउन्टरमा जुनसुकै बैंक वा कम्पनीको क्यूआर कोड भए पनि ग्राहकले आफ्नो जुनसुकै मोबाइल बैंकिङ एप वा डिजिटल वालेटबाट स्क्यान गरेर सजिलै पैसा तिर्न सक्छन्।',
      whyItMatters: 'केही वर्षअघिसम्म एउटा सामान्य किराना पसलको काउन्टरमा ५-६ वटा प्लास्टिकका क्युआर स्ट्यान्ड हुन्थे: एउटा eSewa को, एउटा Khalti को, एउटा Fonepay को, अर्को SmartQR को। ग्राहकले सधैँ सोध्नुपर्थ्यो: "तपाईंकोमा इसेवा चल्छ कि फोनपे?" अन्तरआबद्धताले यो सबै झन्झट हटाएर एउटै क्युआरबाट सबै माध्यमको पैसा एउटै खातामा आउने बनाएको छ।',
      howItWorks: [
        { step: 1, title: 'मानकीकृत NepalQR जारी गरिन्छ', desc: 'बैंक वा भुक्तानी प्रदायकले राष्ट्र बैंकको मापदण्ड अनुसार व्यापारीलाई अन्तर्राष्ट्रिय EMV मापदण्डको एकीकृत क्युआर उपलब्ध गराउँछन्।' },
        { step: 2, title: 'ग्राहकले कुनै पनि एपबाट स्क्यान गर्छन्', desc: 'ग्राहकले आफ्नो बैंकको मोबाइल एप (जस्तै ग्लोबल आइएमई वा नबिल) खोलेर काउन्टरको क्युआर स्क्यान गर्छन्, चाहे त्यो जुनसुकै संस्थाको किन नहोस्।' },
        { step: 3, title: 'नेसनल पेमेन्ट स्विचबाट राफसाफ', desc: 'केन्द्रीय स्विचले व्यापारीको बैंक पहिचान गरी ग्राहकको खाताबाट रकम काटेर व्यापारीको खातामा तत्काल पठाइदिन्छ।' },
        { step: 4, title: 'साउन्डबक्सबाट तत्काल आवाजमा जानकारी', desc: 'पैसा जम्मा हुनासाथ व्यापारीको काउन्टरमा रहेको स्मार्ट साउन्डबक्सले "रु. २५० प्राप्त भयो" भनी नेपालीमा बोलेर सुनाउँछ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा क्यूआर भुक्तानी सञ्जालहरूको तुलना: Fonepay vs NEPALPAY',
        headers: ['सञ्जाल सूचक', 'Fonepay QR (F1Soft)', 'NEPALPAY QR (NCHL)', 'ग्राहक तथा व्यापारीलाई फाइदा'],
        rows: [
          ['सञ्जालको पहुँच', 'देशभर १४ लाखभन्दा बढी व्यापारी', 'सबै बैंक तथा वित्तीय संस्थामा विस्तार', '७७ वटै जिल्लामा सजिलो भुक्तानी'],
          ['समर्थित एपहरू', 'सबै वाणिज्य बैंकका मोबाइल एप', 'connectIPS, बैंक एप तथा वालेटहरू', 'खल्तीमा जुन एप छ त्यसैबाट स्क्यान'],
          ['रकम दाखिला समय', 'तत्काल वा दैनिक ब्याचमा खातामा जम्मा', 'सिधै बैंक खातामा तत्काल ट्रान्सफर', 'व्यापारीले तत्काल नगद हात पार्ने'],
          ['आवाज दिने साउन्डबक्स', 'देशभर फोनपे साउन्डबक्स उपलब्ध', 'नेपालपे भ्वाइसबक्स उपलब्ध', 'आवाज सुनेर भुक्तानी यकिन हुने'],
          ['ग्राहकलाई लाग्ने शुल्क', 'रु. ० (खुद्रा ग्राहकलाई पूर्ण निःशुल्क)', 'रु. ० (खुद्रा ग्राहकलाई पूर्ण निःशुल्क)', 'क्युआर स्क्यान गर्दा कुनै शुल्क लाग्दैन']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकले २०७८ मा "नेपाल क्युआर मापदण्ड" जारी गर्दै क्युआर भुक्तानीलाई राष्ट्रिय सार्वजनिक सेवाको रूपमा घोषणा गर्यो। राष्ट्र बैंकले सबै भुक्तानी कम्पनीहरूलाई आफ्नो सञ्जाल खुला गर्न अनिवार्य गरिदियो। यसले गर्दा असनका साना खुद्रा व्यापारीदेखि कालिमाटीका तरकारी व्यापारीसम्मले एउटै क्युआर राखेर जुनसुकै बैंक वा वालेटबाट विना झन्झट पैसा लिन पाएका छन्।',
      practicalScenario: {
        persona: 'हरि, ४५, भक्तपुरका खाद्यान्न खुद्रा पसल सञ्चालक',
        income: 'मासिक रु. ८५,००० व्यापारिक नाफा',
        scenarioText: 'हरिको काउन्टरमा ३ वटा फरक-फरक क्युआर स्ट्यान्ड थिए। ग्राहकहरूले "मेरो यो एप चलेन" भन्दै गुनासो गर्थे र ३ वटा छुट्टाछुट्टै खातामा आएको पैसा हिसाब गर्न हरिलाई दैनिक १ घण्टा लाग्थ्यो।',
        solutionText: 'हरिले सबै हटाएर एउटै आधिकारिक NepalQR स्ट्यान्ड र साउन्डबक्स राखे। अब ग्राहकले eSewa, Khalti वा बैंकको मोबाइल एप जुनसुकैबाट स्क्यान गरे पनि पैसा सिधै हरिको एउटै बैंक खातामा जम्मा हुन्छ र साउन्डबक्सले नेपालीमा बोलेर सुनाउँछ।',
        metricHighlight: '३ वटा झन्झटिला क्युआर हटाएर एउटै स्मार्ट साउन्डबक्समा कारोबार एकीकृत गरे'
      },
      formula: {
        name: 'व्यापारीको खुद क्युआर आम्दानी सूत्र',
        equation: '\\text{Net Merchant Payout} = \\text{Gross QR Sales} - (\\text{Gross QR Sales} \\times \\text{MDR})',
        variables: [
          { symbol: '\\text{Gross QR Sales}', name: 'कुल क्युआर बिक्री', desc: 'दिनभर क्युआर स्क्यानबाट संकलित कुल रकम (रु.)।' },
          { symbol: '\\text{MDR}', name: 'मर्चेन्ट छुट दर (Merchant Discount Rate)', desc: 'बैंकले लिने सेवा शुल्क (साना खुद्रा पसलमा ०% मा सीमित)।' }
        ],
        exampleCalculation: 'साना खुद्रा पसलमा रु. १०,००० को दैनिक बिक्री हुँदा राष्ट्र बैंकको नियम अनुसार MDR = ०%: खुद रकम = १०,००० - (१०,००० × ०%) = रु. १०,०००। पसलेले क्रेडिट कार्डमा जस्तो कमिसन नकाटी पूरै पैसा हात पार्छन्!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'डिजिटल भुक्तानी अर्थशास्त्र हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'ग्राहकको मोबाइलको स्क्रिनसट मात्र हेरेर सामान दिएर पठाउनु।', correct: 'आफ्नो मोबाइलमा बैंकको एसएमएस आएको वा साउन्डबक्सले बोलेको सुनेपछि मात्र सामान दिनुहोस्।', explanation: 'ह्याकरहरूले नक्कली भुक्तानी देखाउने एप बनाएर पसलेलाई झुक्याउने गरेका घटनाहरू धेरै छन्।' },
        { mistake: 'क्युआर स्क्यान गर्दा ग्राहकसँग अतिरिक्त २% वा ३% शुल्क माग्नु।', correct: 'ग्राहकबाट अतिरिक्त शुल्क लिन राष्ट्र बैंकले कडा प्रतिबन्ध लगाएको छ।', explanation: 'क्युआर भुक्तानी नगद सरह मानिने भएकाले यसमा अतिरिक्त शुल्क असुल्नु गैरकानुनी हो।' },
        { mistake: 'घामपानीले खुइलिएको वा च्यातिएको क्युआर स्टिकर काउन्टरमा टाँस्नु।', correct: 'लेमिनेसन गरिएको वा डिजिटल स्क्रिन भएको स्पष्ट क्युआर स्ट्यान्डी प्रयोग गर्नुहोस्।', explanation: 'धमिलो क्युआर क्यामेराले पढ्न नसक्दा भीडभाडको बेला ग्राहकहरू बिना किनमेल फर्किने जोखिम हुन्छ।' }
      ],
      definitions: [
        { term: 'नेपाल क्युआर (NepalQR)', full: 'राष्ट्रिय क्युआर मापदण्ड', meaning: 'सबै बैंक र वालेटबाट एउटै क्युआर स्क्यान गर्न मिल्ने गरी राष्ट्र बैंकले तोकेको प्राविधिक ढाँचा।' },
        { term: 'अन्तरआबद्धता (Interoperability)', full: 'सञ्जालहरूको अन्तरसम्बन्ध', meaning: 'फरक-फरक भुक्तानी कम्पनीहरू बीच विना अवरोध कारोबार साटासाट हुन सक्ने क्षमता।' },
        { term: 'अडियो साउन्डबक्स (Soundbox)', full: 'बोल्ने भुक्तानी बाकस', meaning: 'क्युआरबाट पैसा आउनासाथ ठूलो आवाजमा बोलेर भुक्तानी पुष्टि गर्ने सिमकार्ड जडित डिजिटल डिभाइस।' },
        { term: 'MDR (मर्चेन्ट छुट दर)', full: 'Merchant Discount Rate', meaning: 'डिजिटल कारोबार प्रक्रिया गरेबापत बैंकले व्यापारीसँग लिने सानो प्रतिशत सेवा शुल्क।' }
      ],
      faqs: [
        { q: 'के नेपालमा क्युआर स्क्यान गरेर पैसा तिर्दा ग्राहकलाई कुनै शुल्क लाग्छ?', a: 'लाग्दैन। नेपाल राष्ट्र बैंकको निर्देशन अनुसार पसल, रेस्टुरेन्ट वा ट्याक्सीमा क्युआर स्क्यान गरी भुक्तानी गर्दा ग्राहकका लागि यो सेवा शतप्रतिशत निःशुल्क हुन्छ।' },
        { q: 'यदि ग्राहकले पैसा पठाएँ भन्यो तर साउन्डबक्स बोलेन भने के गर्ने?', a: 'आफ्नो मोबाइल एपको स्टेटमेन्ट हेर्नुहोस्। यदि स्टेटमेन्टमा पैसा आएको देखिएन भने ग्राहकसँग कारोबारको आधिकारिक रिफरेन्स नम्बर (Ref ID) नलिई सामान नदिनुहोस्।' },
        { q: 'के विदेशी पर्यटकले नेपालको क्युआर स्क्यान गरेर तिर्न पाउँछन्?', a: 'पाउँछन्। फोनपे र भारतको UPI तथा चीनको Alipay बीच भएको अन्तरदेशीय सम्झौताका कारण भारतीय तथा विदेशी पर्यटकले नेपालका क्युआरमा सिधै भुक्तानी गर्न सक्छन्।' }
      ],
      takeaways: [
        'NepalQR मापदण्डले काउन्टरका धेरै क्युआर हटाएर एउटै क्युआरबाट सबै एप चल्ने बनाएको छ।',
        'खुद्रा ग्राहकका लागि क्युआर स्क्यान गरेर पैसा तिर्नु देशभर शतप्रतिशत निःशुल्क छ।',
        'व्यापारीले ग्राहकको मोबाइल स्क्रिनमा मात्र भर नपरी साउन्डबक्सको आवाज सुनेर यकिन गर्नुपर्छ।',
        'क्युआर भुक्तानीमा ग्राहकसँग अतिरिक्त शुल्क लिनु नेपाल राष्ट्र बैंकको नियम विपरीत हो।',
        'अन्तरदेशीय क्युआर सञ्जालले विदेशी पर्यटकलाई पनि नेपालका पसलमा सजिलै भुक्तानी गर्ने सुविधा दिएको छ।'
      ]
    }
  },

  // ── I4. NRB DIGITAL TRANSACTION LIMITS & FEES ────────────────────
  'nrb-digital-transaction-limits-fees': {
    id: 'dp-nrb-limits-fees',
    slug: 'nrb-digital-transaction-limits-fees',
    categorySlug: 'digital-payments',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Payment Systems Department Circulars & Unified Fee Guidelines FY 2081/82', np: 'नेपाल राष्ट्र बैंक भुक्तानी प्रणाली विभागको परिपत्र तथा शुल्क निर्देशिका २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Basic knowledge of ATM cards, wallets, and mobile banking', np: 'एटिएम कार्ड, वालेट र मोबाइल बैंकिङको आधारभूत ज्ञान' },
    en: {
      title: 'NRB Digital Transaction Limits & Fee Caps in Nepal: Complete Official Guide',
      oneLineSummary: 'Know the exact regulatory caps on mobile banking, digital wallets, connectIPS, and ATM cash withdrawals.',
      summaryPoints: [
        'NRB sets daily and monthly transaction caps to curb money laundering and protect consumers from catastrophic digital theft.',
        'Mobile banking apps allow up to NPR 3,00,000 per day for account-to-account transfers and NPR 3,00,000 per day for merchant QR payments.',
        'connectIPS allows the highest retail limit: up to NPR 20 Lakh per day via web browser and NPR 2 Lakh per day on mobile apps.',
        'Digital wallets (eSewa, Khalti) permit up to NPR 25,000 per transaction, NPR 1,00,000 per day, and NPR 5,00,000 per month for KYC-verified users.',
        'ATM cash withdrawals are capped at NPR 20,000 to NPR 25,000 per transaction and NPR 1,00,000 per day.'
      ],
      whatIsThis: 'NRB Digital Transaction Limits are mandatory regulatory thresholds established by Nepal Rastra Bank\'s Payment Systems Department governing the maximum amount of money an individual can transfer, pay, or withdraw through digital channels (mobile banking, wallets, payment gateways, ATMs) per transaction, per day, and per month.',
      whyItMatters: 'If you are purchasing land, paying hospital bills, or booking international tour packages, hitting an unexpected daily limit can freeze your transaction at a critical moment. Conversely, knowing that wallet limits cap exposure to NPR 1,00,000 per day reassures consumers that a lost phone cannot drain multi-million rupee savings accounts in one go.',
      howItWorks: [
        { step: 1, title: 'KYC Verification Activates Upper Limit Tiers', desc: 'An unverified wallet user is restricted to minimal amounts. Submitting citizenship and biometric KYC unlocks the statutory NPR 1 Lakh daily and NPR 5 Lakh monthly wallet ceilings.' },
        { step: 2, title: 'Per-Transaction vs Daily Aggregated Limits', desc: 'Systems monitor both per-click thresholds (e.g. max NPR 25,000 per transfer in a wallet) and cumulative 24-hour totals (max NPR 1,00,000 in 24 hours).' },
        { step: 3, title: 'Channel Selection for Higher Headroom', desc: 'When you need to transfer NPR 8 Lakh for a car down-payment, mobile banking will reject it (capped at 3 Lakh). Selecting connectIPS web (capped at 20 Lakh) allows smooth execution.' },
        { step: 4, title: 'Automated Fee Deduction at Source', desc: 'Transaction fees follow NRB fee ceilings: ATM cash withdrawals at other bank ATMs cost maximum NPR 15 (after 2 free transactions per month), while connectIPS caps fees at NPR 8.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Official NRB Digital Transaction Limits & Fee Schedule (FY 2081/82)',
        headers: ['Channel / Instrument', 'Per-Transaction Cap', 'Daily Maximum Limit', 'Monthly Maximum Limit', 'Permitted Service Fee'],
        rows: [
          ['Mobile Banking (P2P)', 'NPR 1,00,000 to 2,00,000', 'NPR 3,00,000 / day', 'NPR 30,00,000 / month', 'NPR 10 to NPR 11 max'],
          ['Mobile Banking (QR Pay)', 'NPR 1,00,000 to 2,00,000', 'NPR 3,00,000 / day', 'NPR 30,00,000 / month', 'NPR 0 (Free for consumers)'],
          ['connectIPS (Web Portal)', 'NPR 10,00,000 / click', 'NPR 20,00,000 / day', 'No monthly ceiling', 'NPR 2 to NPR 8 flat'],
          ['connectIPS (Mobile App)', 'NPR 1,00,000 / click', 'NPR 2,00,000 / day', 'No monthly ceiling', 'NPR 2 to NPR 8 flat'],
          ['Digital Wallets (KYC)', 'NPR 25,000 / transfer', 'NPR 1,00,000 / day', 'NPR 5,00,000 / month', 'NPR 0 to NPR 10 max'],
          ['ATM Cash Withdrawal', 'NPR 20,000 to 25,000', 'NPR 1,00,000 / day', 'Card network terms', '2 free/mo, then max NPR 15']
        ]
      },
      nepalContext: 'Nepal Rastra Bank revises digital limits annually in its Monetary Policy and Payment System circulars to encourage a cashless economy while preserving financial stability. During the 2020 pandemic, NRB doubled transaction limits to encourage contactless payments. Furthermore, NRB introduced strict fee protection rules: banks are prohibited from charging customers for internal account balance inquiries, and interbank ATM fees are legally capped at NPR 15 per transaction after two free monthly transactions.',
      practicalScenario: {
        persona: 'Dipendra, 38, construction contractor in Pokhara',
        income: 'NPR 2,20,000 / month business turnover',
        scenarioText: 'Dipendra had to pay a cement manufacturer NPR 7,50,000 before 4 PM to get delivery trucks rolling. He tried transferring the money through his mobile banking app, but the app flashed an error: "Daily limit of NPR 3,00,000 exceeded!"',
        solutionText: 'Knowing NRB\'s channel guidelines, Dipendra immediately opened his laptop, logged into the connectIPS web portal where the daily limit is NPR 20,00,000, and transferred the NPR 7,50,000 in a single transaction for an NPR 8 fee. The supplier confirmed credit within 10 seconds.',
        metricHighlight: 'Bypassed mobile banking cap using connectIPS web headroom'
      },
      formula: {
        name: 'Remaining Digital Transaction Headroom Formula',
        equation: '\\text{Headroom}_{\\text{Remaining}} = \\text{NRB Daily Cap} - \\sum_{i=1}^{k} \\text{Txn}_{i}',
        variables: [
          { symbol: '\\text{NRB Daily Cap}', name: 'Statutory Channel Ceiling', desc: 'E.g., NPR 3,00,000 for mobile banking or NPR 20,00,000 for connectIPS web.' },
          { symbol: '\\text{Txn}_{i}', name: 'Transactions Executed Today', desc: 'Sum of all payments completed within the current 24-hour cycle.' }
        ],
        exampleCalculation: 'Daily mobile banking cap = NPR 3,00,000. Transferred NPR 1,20,000 for rent and NPR 50,000 for school fees. Remaining Headroom = 3,00,000 - (1,20,000 + 50,000) = NPR 1,30,000. Any transaction above NPR 1,30,000 will be declined until midnight!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'Check Account Headroom'
      },
      commonMistakes: [
        { mistake: 'Waiting until the last minute to make large payments on mobile banking without checking caps.', correct: 'Use connectIPS web for transactions between NPR 3 Lakh and NPR 20 Lakh.', explanation: 'Mobile banking strictly enforces the NPR 3 Lakh daily ceiling, which cannot be overridden without visiting a branch.' },
        { mistake: 'Operating unverified digital wallets and wondering why transfers above NPR 5,000 fail.', correct: 'Complete digital biometric KYC verification in your wallet to unlock full statutory limits.', explanation: 'NRB anti-money laundering (AML) directives restrict unverified wallets to negligible amounts.' },
        { mistake: 'Paying high interbank ATM charges by using rival ATMs frequently.', correct: 'Plan cash withdrawals to use your own bank\'s ATMs or stay within the 2 free monthly interbank withdrawals.', explanation: 'While capped at NPR 15, frequent out-of-network ATM withdrawals accumulate unnecessary friction costs.' }
      ],
      definitions: [
        { term: 'Transaction Cap', full: 'कारोबार सीमा', meaning: 'The maximum allowable financial sum permitted per transaction, day, or month under central bank regulation.' },
        { term: 'KYC (Know Your Customer)', full: 'ग्राहक पहिचान विवरण', meaning: 'The statutory identity verification process required by NRB to prevent fraud and financial crime.' },
        { term: 'Interchange Fee', full: 'अन्तरबैंक सेवा शुल्क', meaning: 'The regulated fee paid between banks when a cardholder uses an ATM or POS machine owned by another institution.' },
        { term: 'AML (Anti-Money Laundering)', full: 'सम्पत्ति शुद्धीकरण निवारण', meaning: 'Legal regulations designed to prevent criminals from disguising illegally obtained funds as legitimate income.' }
      ],
      faqs: [
        { q: 'Can a bank increase my mobile banking daily limit above NPR 3 Lakh upon request?', a: 'Generally no for personal mobile banking retail apps, as NPR 3 Lakh is set by NRB regulation. However, banks can onboard corporate clients onto CorporatePAY where customized multi-crore institutional limits apply.' },
        { q: 'When does the daily transaction limit reset in Nepal?', a: 'Daily digital limits in Nepali banks and wallets reset at midnight (12:00 AM) Nepal Standard Time every day.' },
        { q: 'Is there a limit on how much money I can receive in my bank account digitally?', a: 'There is generally no incoming limit for legitimate personal savings deposits in commercial banks, provided the source of funds complies with tax laws and AML regulations.' }
      ],
      takeaways: [
        'Mobile banking caps daily retail transfers at NPR 3,00,000; connectIPS web allows up to NPR 20,00,000.',
        'Digital wallets (eSewa/Khalti) are capped at NPR 25,000 per transfer and NPR 1,00,000 per day.',
        'Complete full biometric KYC to unlock standard wallet transaction thresholds.',
        'Interbank ATM cash withdrawals are legally capped at maximum NPR 15 after 2 free monthly transactions.',
        'All daily limits reset automatically at midnight Nepal Standard Time.'
      ]
    },
    np: {
      title: 'नेपाल राष्ट्र बैंकको डिजिटल कारोबार सीमा र शुल्क मापदण्ड: सम्पूर्ण आधिकारिक निर्देशिका',
      oneLineSummary: 'मोबाइल बैंकिङ, डिजिटल वालेट, connectIPS र एटिएमबाट दैनिक कतिसम्म पैसा चलाउन पाइन्छ र कति शुल्क लाग्छ भन्ने सम्पूर्ण विवरण।',
      summaryPoints: [
        'सम्पत्ति शुद्धीकरण रोक्न र डिजिटल चोरीबाट सर्वसाधारणको पुँजी जोगाउन राष्ट्र बैंकले दैनिक र मासिक कारोबार सीमा तोकेको छ।',
        'मोबाइल बैंकिङ एपबाट खातामा पैसा पठाउन दैनिक ३ लाख र पसलमा क्युआर भुक्तानी गर्न दैनिक ३ लाख रुपैयाँसम्मको सीमा छ।',
        'खुद्रा कारोबारमा सबैभन्दा ठूलो सुविधा connectIPS वेबमा छ: जहाँबाट दैनिक २० लाख रुपैयाँसम्म पठाउन सकिन्छ।',
        'केवाइसी (KYC) प्रमाणित डिजिटल वालेटमा प्रतिपटक २५ हजार, दैनिक १ लाख र मासिक ५ लाख रुपैयाँसम्मको सीमा तोकिएको छ।',
        'एटिएमबाट एकपटकमा अधिकतम २० देखि २५ हजार र दिनभरिमा १ लाख रुपैयाँसम्म मात्र नगद झिक्न पाइन्छ।'
      ],
      whatIsThis: 'नेपाल राष्ट्र बैंकको डिजिटल कारोबार सीमा भनेको भुक्तानी प्रणाली विभागले नागरिक तथा संस्थाहरूलाई विभिन्न विद्युतीय माध्यमहरू (मोबाइल बैंकिङ, वालेट, connectIPS, एटिएम) बाट प्रतिपटक, दैनिक र मासिक रूपमा चलाउन पाउने गरी तोकेको अधिकतम कानुनी सीमा हो।',
      whyItMatters: 'जग्गाको बैना गर्दा, अस्पतालको बिल तिर्दा वा गाडी किन्दा ऐन मौकामा दैनिक सीमा नाघेर भुक्तानी रोकिने समस्या धेरैले भोग्छन्। अर्कोतर्फ, वालेटको दैनिक सीमा १ लाख मात्र हुन्छ भन्ने थाहा पाउँदा मोबाइल हराए पनि बैंक खाताको लाखौँ रुपैयाँ एकैदिन रित्तिनबाट जोगिन्छ भन्ने सुरक्षा भरोसा मिल्छ।',
      howItWorks: [
        { step: 1, title: 'KYC प्रमाणीकरणले सीमा खुला गर्छ', desc: 'अप्रमाणित वालेटमा थोरै रकम मात्र चलाउन पाइन्छ। नागरिकता र व्यक्तिगत विवरण भरेर KYC प्रमाणित गरेपछि मात्र दैनिक १ लाख र मासिक ५ लाखको सीमा खुल्छ।' },
        { step: 2, title: 'प्रति-कारोबार र २४ घण्टे दैनिक सीमा', desc: 'प्रणालीले प्रतिपटकको सीमा (जस्तै वालेटमा एकपटकमा २५ हजार) र दिनभरिको कुल रकम (दैनिक १ लाख) दुवैलाई स्वचालित रूपमा गणना गर्छ।' },
        { step: 3, title: 'ठूलो रकमका लागि सही माध्यम रोज्नुहोस्', desc: 'यदि गाडी किन्न ७ लाख पठाउनुपर्ने छ भने मोबाइल बैंकिङले दिँदैन (सीमा ३ लाख)। यस्तो अवस्थामा connectIPS वेब (सीमा २० लाख) प्रयोग गर्नुपर्छ।' },
        { step: 4, title: 'नियमन गरिएको सेवा शुल्क मात्र कट्टा', desc: 'अर्को बैंकको एटिएमबाट पैसा झिक्दा महिनामा २ पटक निःशुल्क र त्यसपछि अधिकतम रु. १५ मात्र लाग्छ भने connectIPS मा अधिकतम रु. ८ मात्र लाग्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपाल राष्ट्र बैंकको आधिकारिक डिजिटल कारोबार सीमा तथा शुल्क तालिका (आव २०८१/८२)',
        headers: ['माध्यम / प्रणाली', 'प्रतिपटक अधिकतम सीमा', 'दैनिक अधिकतम सीमा', 'मासिक अधिकतम सीमा', 'लाग्ने सेवा शुल्क'],
        rows: [
          ['मोबाइल बैंकिङ (P2P)', 'रु. १ लाख देखि २ लाख', 'रु. ३,००,००० / दिन', 'रु. ३०,००,००० / महिना', 'अधिकतम रु. १० देखि ११'],
          ['मोबाइल बैंकिङ (QR भुक्तानी)', 'रु. १ लाख देखि २ लाख', 'रु. ३,००,००० / दिन', 'रु. ३०,००,००० / महिना', 'रु. ० (ग्राहकलाई पूर्ण निःशुल्क)'],
          ['connectIPS (वेब पोर्टल)', 'रु. १०,००,००० / क्लिक', 'रु. २०,००,००० / दिन', 'मासिक सीमा खुला', 'रु. २ देखि रु. ८ सम्म'],
          ['connectIPS (मोबाइल एप)', 'रु. १,००,००० / क्लिक', 'रु. २,००,००० / दिन', 'मासिक सीमा खुला', 'रु. २ देखि रु. ८ सम्म'],
          ['डिजिटल वालेट (KYC सहित)', 'रु. २५,००० / पटक', 'रु. १,००,००० / दिन', 'रु. ५,००,००० / महिना', 'रु. ० देखि रु. १० सम्म'],
          ['एटिएम नगद झिक्दा', 'रु. २०,००० देखि २५,०००', 'रु. १,००,००० / दिन', 'कार्ड सम्झौता अनुसार', 'महिनामा २ पटक फ्री, पछि रु. १५']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकले नगदरहित कारोबारलाई प्रोत्साहन गर्न र वित्तीय अपराध नियन्त्रण गर्न समय-समयमा मौद्रिक नीतिमार्फत यी सीमाहरू पुनरावलोकन गर्दछ। २०७६ को कोरोना महामारीपछि राष्ट्र बैंकले डिजिटल कारोबारको सीमा दोब्बर बनाएको थियो। यसबाहेक ग्राहकको संरक्षणका लागि बैंकहरूले खातामा ब्यालेन्स सोधेको शुल्क लिन नपाउने र अर्को बैंकको एटिएम प्रयोग गर्दा महिनाको दुई पटकपछि प्रतिपटक अधिकतम १५ रुपैयाँभन्दा बढी लिन नपाउने कडा नियम बनाएको छ।',
      practicalScenario: {
        persona: 'दिपेन्द्र, ३८, पोखराका निर्माण व्यवसायी',
        income: 'मासिक रु. २,२०,००० व्यापारिक कारोबार',
        scenarioText: 'दिपेन्द्रले सामान छुटाउन सिमेन्ट उद्योगलाई दिउँसो ४ बजेभित्र रु. ७,५०,००० पठाउनुपर्ने थियो। उनले मोबाइल बैंकिङबाट पठाउन खोज्दा "दैनिक सीमा ३ लाख नाघ्यो" भनेर कारोबार रद्द भयो।',
        solutionText: 'राष्ट्र बैंकको नियम थाहा भएकाले दिपेन्द्रले तुरुन्तै ल्यापटप खोलेर connectIPS वेबमा लगइन गरे, जहाँ दैनिक सीमा २० लाख छ। उनले ७ लाख ५० हजार रुपैयाँ एकैपटक जम्मा ८ रुपैयाँ शुल्कमा ट्रान्सफर गरे र १० सेकेन्डमै उद्योगले पैसा प्राप्त गर्यो।',
        metricHighlight: 'connectIPS वेब प्रयोग गरेर मोबाइल बैंकिङको सीमा समस्या समाधान'
      },
      formula: {
        name: 'बाँकी दैनिक कारोबार सीमा निकाल्ने सूत्र',
        equation: '\\text{Headroom}_{\\text{Remaining}} = \\text{NRB Daily Cap} - \\sum_{i=1}^{k} \\text{Txn}_{i}',
        variables: [
          { symbol: '\\text{NRB Daily Cap}', name: 'राष्ट्र बैंकले तोकेको दैनिक सीमा', desc: 'जस्तै: मोबाइल बैंकिङमा ३ लाख वा connectIPS वेबमा २० लाख।' },
          { symbol: '\\text{Txn}_{i}', name: 'आज भइसकेको कारोबार रकम', desc: 'चालू २४ घण्टाभित्र सम्पन्न भइसकेका भुक्तानीहरूको योगफल।' }
        ],
        exampleCalculation: 'दैनिक मोबाइल बैंकिङ सीमा = रु. ३,००,०००। बिहान घरभाडा रु. १,२०,००० र स्कुल फी रु. ५०,००० तिरियो। बाँकी सीमा = ३,००,००० - (१,२०,००० + ५०,०००) = रु. १,३०,०००। अब राति १२ बजेसम्म १ लाख ३० हजारभन्दा बढी पठाउन पाइँदैन!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'दैनिक खर्च र सीमा जाँच्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'ठूलो रकम भुक्तानी गर्नुपर्ने बेला अन्तिम समयसम्म मोबाइल बैंकिङको भर पर्नु।', correct: '३ लाखभन्दा बढी (२० लाखसम्म) को कारोबारका लागि connectIPS वेब प्रयोग गर्नुहोस्।', explanation: 'मोबाइल बैंकिङको ३ लाखको दैनिक सीमा बैंकको शाखा नगई एपबाट बढाउन मिल्दैन।' },
        { mistake: 'वालेटमा KYC प्रमाणीकरण नगरी कारोबार गर्न खोज्नु र कारोबार रद्द हुनु।', correct: 'नागरिकता र फोटो अपलोड गरेर तुरुन्तै बायोमेट्रिक KYC प्रमाणित गर्नुहोस्।', explanation: 'सम्पत्ति शुद्धीकरण नियमका कारण अप्रमाणित वालेटमा ५ हजारभन्दा माथिको कारोबार रोकिन्छ।' },
        { mistake: 'जथाभावी अर्को बैंकको एटिएम प्रयोग गरेर अनावश्यक शुल्क तिर्नु।', correct: 'आफ्नै बैंकको एटिएम खोज्नुहोस् वा महिनामा २ पटक मात्र अर्को बैंकको एटिएम प्रयोग गर्नुहोस्।', explanation: 'महिनामा २ पटकभन्दा बढी अर्को बैंकको एटिएम चलाउँदा प्रत्येक पटक १५ रुपैयाँ काटिन्छ।' }
      ],
      definitions: [
        { term: 'कारोबार सीमा (Transaction Cap)', full: 'दैनिक तथा मासिक सीमा', meaning: 'डिजिटल सुरक्षा र वित्तीय अनुशासनका लागि केन्द्रीय बैंकले तोकेको अधिकतम रकम।' },
        { term: 'केवाइसी (KYC)', full: 'ग्राहक पहिचान विवरण (Know Your Customer)', meaning: 'गैरकानुनी सम्पत्ति रोक्न बैंक तथा वालेटले लिने आधिकारिक नागरिकता तथा बायोमेट्रिक प्रमाणीकरण।' },
        { term: 'इन्टरचेन्ज शुल्क (Interchange Fee)', full: 'अन्तरबैंक कार्ड सेवा शुल्क', meaning: 'एउटा बैंकको कार्ड अर्को बैंकको एटिएम वा पीओएस मेसिनमा चलाउँदा लाग्ने नियमन गरिएको दस्तुर।' },
        { term: 'सम्पत्ति शुद्धीकरण (AML)', full: 'Anti-Money Laundering', meaning: 'अपराधिक गतिविधिबाट आर्जित कालो धनलाई बैंकिङ प्रणालीमार्फत सेतो बनाउनबाट रोक्ने कानुनी व्यवस्था।' }
      ],
      faqs: [
        { q: 'के व्यक्तिगत मोबाइल बैंकिङको ३ लाखको सीमा बैंकमा निवेदन दिएर बढाउन मिल्छ?', a: 'व्यक्तिगत रिटेल मोबाइल बैंकिङमा ३ लाखको सीमा राष्ट्र बैंकको कडा नियम भएकाले बढाउन मिल्दैन। तर व्यावसायिक फर्मको हकमा कर्पोरेटपे (CorporatePAY) लिएर करोडौँको सीमा लिन सकिन्छ।' },
        { q: 'नेपालमा डिजिटल कारोबारको दैनिक सीमा कुन समयमा पुनः सुरु (Reset) हुन्छ?', a: 'नेपाली बैंक तथा वालेटहरूमा दैनिक कारोबार सीमा हरेक दिन राति १२:०० बजे (नेपाली समय अनुसार) स्वतः शून्य भएर नयाँ सुरु हुन्छ।' },
        { q: 'के बैंक खातामा डिजिटल माध्यमबाट पैसा प्राप्त गर्दा पनि कुनै सीमा हुन्छ?', a: 'कानुनी रूपमा कमाएको र कर चुक्ता भएको रकम बचत खातामा प्राप्त गर्दा कुनै माथिल्लो सीमा हुँदैन, तर ठूलो रकम आउँदा बैंकले स्रोतको विवरण माग्न सक्छ।' }
      ],
      takeaways: [
        'मोबाइल बैंकिङबाट दैनिक ३ लाख र connectIPS वेबबाट दैनिक २० लाखसम्म पठाउन सकिन्छ।',
        'डिजिटल वालेटमा प्रतिपटक २५ हजार र दैनिक १ लाख रुपैयाँसम्मको कानुनी सीमा छ।',
        'वालेटको पूरै सीमा चलाउन अनिवार्य रूपमा बायोमेट्रिक KYC प्रमाणीकरण गर्नुपर्छ।',
        'अर्को बैंकको एटिएमबाट पैसा झिक्दा महिनामा २ पटक निःशुल्क र त्यसपछि अधिकतम रु. १५ मात्र लाग्छ।',
        'सबै डिजिटल कारोबारका दैनिक सीमाहरू हरेक रात १२ बजे स्वतः नयाँ सुरु हुन्छन्।'
      ]
    }
  },

  // ── I5. OTP SCAMS & PHISHING DEFENSE IN NEPAL ─────────────────────
  'otp-scams-phishing-defense-nepal': {
    id: 'dp-otp-phishing-defense',
    slug: 'otp-scams-phishing-defense-nepal',
    categorySlug: 'digital-payments',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Nepal Police Cyber Bureau Advisories & NRB IT Security Directives', np: 'नेपाल प्रहरी साइबर ब्युरो सूचना तथा राष्ट्र बैंक सूचना प्रविधि सुरक्षा निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Basic smartphone and internet awareness', np: 'स्मार्टफोन र इन्टरनेट प्रयोगको सामान्य ज्ञान' },
    en: {
      title: 'OTP Scams & Phishing Defense in Nepal: Protecting Your Bank Account',
      oneLineSummary: 'Recognize the psychological traps scammers use to steal your OTPs, wallet pins, and lifetime savings.',
      summaryPoints: [
        'No bank, mobile wallet, or central bank official will ever ask for your One-Time Password (OTP) or MPIN under any circumstance.',
        'Common scams in Nepal include fake lottery calls ("You won 25 Lakh on WhatsApp/IMO"), fake bank KYC update links, and Facebook impersonation.',
        'An OTP is not a verification code to receive money; entering an OTP or MPIN exclusively authorizes money leaving your account.',
        'Fraudsters use spoofed SMS headers and cloned social media profiles of close relatives to induce emotional panic or greed.',
        'Enable biometric logins, SMS transaction alerts, and maintain a low-balance wallet to create defensive barriers.'
      ],
      whatIsThis: 'OTP (One-Time Password) scams and phishing attacks are social engineering techniques where cybercriminals manipulate victims into revealing their secret dynamic authentication codes, transaction MPINs, or banking passwords to illegally drain funds from their bank accounts and digital wallets.',
      whyItMatters: 'Digital financial crime in Nepal has exploded alongside mobile banking adoption. Victims lose their entire life savings - often hundreds of thousands of rupees - in less than 3 minutes simply because they believed a caller claiming to be a "Bank Customer Support Representative" updating their KYC. Banks cannot reverse transactions authorized with a valid OTP, making prevention your only real protection.',
      howItWorks: [
        { step: 1, title: 'The Fraudster Initiates Contact (Trigger Event)', desc: 'You receive an urgent call on WhatsApp/IMO or an SMS claiming: "Your bank account will be frozen within 2 hours unless you update your KYC" or "Congratulations! You won NPR 25 Lakh in the Dashain lottery."' },
        { step: 2, title: 'Psychological Manipulation (Fear or Greed)', desc: 'The scammer creates intense urgency, forbidding you from disconnecting the call or consulting family members, pretending to assist you with system verification.' },
        { step: 3, title: 'The Scammer Triggers a Password Reset or Fund Transfer', desc: 'Behind the scenes, the scammer enters your mobile number on a banking app or connectIPS portal, causing the genuine bank server to dispatch an OTP to your phone.' },
        { step: 4, title: 'Extracting the OTP & Siphoning Funds', desc: 'The scammer asks: "Read me the 6-digit verification code you just received to verify your identity." The moment you disclose it, your account is emptied.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Top 4 Digital Financial Scams in Nepal & How to Neutralize Them',
        headers: ['Scam Type', 'Typical Scammer Script / Hook', 'Underlying Trap', 'Immediate Defensive Action'],
        rows: [
          ['Fake Bank KYC Update', '"Your bank account is blocked. Click this link to update citizenship KYC."', 'Phishing website steals login credentials & OTP', 'Never click SMS links. Open official banking app directly.'],
          ['WhatsApp/IMO Lottery', '"You won NPR 25,00,000 from KBC/Dashain. Send NPR 15,000 tax first."', 'Advance fee fraud; prize does not exist', 'Block number immediately; report to Nepal Police Cyber Bureau.'],
          ['Facebook Impersonation', '"Urgent hospital emergency! Please transfer NPR 20,000 to this eSewa number."', 'Hacked or cloned friend profile', 'Call your friend directly on mobile phone to verify identity.'],
          ['Fake Merchant Payment', '"I sent you money via QR, enter your MPIN to accept the incoming payment."', 'Entering MPIN authorizes a DEBIT, not credit', 'Remember: Receiving money NEVER requires entering your MPIN/OTP!']
        ]
      },
      nepalContext: 'According to Nepal Police Cyber Bureau statistics, over 80% of reported cyber financial crimes involve social engineering and voluntary disclosure of OTPs rather than technical database hacking. Fraudsters frequently target migrant worker families in rural districts via IMO and WhatsApp, exploiting unfamiliarity with digital banking interfaces. Nepal Rastra Bank directives mandate that all banks issue clear SMS alerts stating: "Do NOT share this OTP with anyone, including bank staff."',
      practicalScenario: {
        persona: 'Laxmi, 48, homemaker in Kirtipur',
        income: 'Family remittance NPR 60,000 / month',
        scenarioText: 'Laxmi received a call on WhatsApp displaying the official logo of her commercial bank. The polite caller said: "Madam, your ATM card expires today. To keep it active, read me the 6-digit code just sent to your phone."',
        solutionText: 'Laxmi remembered RisePaisa\'s rule: "Banks never ask for OTP." She replied: "I will visit my branch in person" and hung up. When she checked the SMS, it was a connectIPS password reset authorization for NPR 1,20,000. Her vigilance saved her family\'s entire savings.',
        metricHighlight: 'Saved NPR 1,20,000 by refusing to disclose a 6-digit SMS code'
      },
      formula: {
        name: 'The Golden Rule of Digital Payments',
        equation: '\\text{Action} = \\begin{cases} \\text{Legitimate Debit} & \\text{if entering MPIN / OTP to SEND money} \\\\ \\text{GUARANTEED FRAUD} & \\text{if asked for OTP / MPIN to RECEIVE money} \\end{cases}',
        variables: [
          { symbol: '\\text{MPIN/OTP}', name: 'Secret Authorization Credential', desc: 'Your digital signature that unlocks funds leaving your account.' },
          { symbol: '\\text{Action}', name: 'Financial Direction', desc: 'Receiving money NEVER requires your secret pin or code.' }
        ],
        exampleCalculation: 'If someone says: "Enter your 4-digit MPIN to receive NPR 10,000 in your wallet," it is mathematically 100% a scam. Receiving funds requires only your mobile number or account number - never your PIN!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'Review Security Checklist'
      },
      commonMistakes: [
        { mistake: 'Believing that caller ID or WhatsApp profile pictures prove a caller is genuine.', correct: 'Know that scammers easily download bank logos and use VoIP spoofing to mimic bank phone numbers.', explanation: 'Profile pictures and caller display names can be fabricated in seconds by anyone with a smartphone.' },
        { mistake: 'Sharing OTPs with callers who claim to be "preventing fraud" on your account.', correct: 'Hang up immediately. No legitimate bank employee can or will ask for your OTP.', explanation: 'Real bank staff have core banking access and never need your personal OTP to block a compromised account.' },
        { mistake: 'Clicking shortened URLs (e.g. bit.ly, tinyurl) received via SMS for banking updates.', correct: 'Never click links in SMS messages; navigate directly to official bank websites or verified apps.', explanation: 'Phishing links lead to deceptive replica websites designed to capture your login credentials.' }
      ],
      definitions: [
        { term: 'OTP (One-Time Password)', full: 'एकपटक प्रयोग हुने सुरक्षा कोड', meaning: 'A dynamic, time-sensitive numeric code sent via SMS to authorize a single financial transaction.' },
        { term: 'Phishing', full: 'नक्कली वेबसाइट जालसाजी', meaning: 'The fraudulent practice of sending emails or messages mimicking legitimate organizations to steal sensitive data.' },
        { term: 'Social Engineering', full: 'मानसिक भ्रम तथा छलकपट', meaning: 'The psychological manipulation of people into performing actions or divulging confidential information.' },
        { term: 'MPIN', full: 'Mobile Personal Identification Number', meaning: 'A secret 4- or 6-digit PIN used to authorize transactions within a mobile banking application.' }
      ],
      faqs: [
        { q: 'Can my bank reverse a transfer if I accidentally gave away my OTP to a scammer?', a: 'Once an OTP is entered, the transaction is processed instantly on real-time rails. Reversing it requires freezing the scammer\'s destination account through Nepal Police Cyber Bureau, which is only possible if reported immediately before the scammer withdraws the cash.' },
        { q: 'Why did the scammer know my full name and bank branch when calling me?', a: 'Scammers obtain basic personal details from public voter lists, leaked resume databases, social media profiles, or discarded bank deposit slips.' },
        { q: 'What is the very first thing I should do if I shared an OTP by mistake?', a: 'Call your bank\'s 24/7 card/digital helpline immediately and shout: "Block my mobile banking and freeze all debit transactions right now!" Change your passwords immediately.' }
      ],
      takeaways: [
        'No bank or wallet official will EVER ask for your OTP or MPIN under any circumstance.',
        'Receiving money never requires entering an OTP or MPIN; PINs are only used to spend money.',
        'Never click on SMS links claiming your bank account or KYC is expiring.',
        'If a Facebook friend asks for urgent eSewa money, always call their personal phone to verify.',
        'If compromised, call your bank\'s 24/7 helpline within minutes to freeze debit transactions.'
      ]
    },
    np: {
      title: 'नेपालमा OTP घोटाला र फिसिङबाट बच्ने उपाय: बैंक खाता सुरक्षित राख्ने अचुक नियम',
      oneLineSummary: 'ठगहरूले कसरी मनोवैज्ञानिक जाल बुनेर तपाईंको OTP, वालेट पिन र जीवनभरको कमाइ लुट्छन् र यसबाट कसरी जोगिने बुझ्नुहोस्।',
      summaryPoints: [
        'कुनै पनि बैंक, डिजिटल वालेट वा राष्ट्र बैंकका कर्मचारीले कहिल्यै पनि तपाईंको OTP वा MPIN माग्दैनन्।',
        'नेपालमा चल्ने मुख्य ठगीमा नक्कली चिट्ठा ("ह्वाट्सएपमा २५ लाख पर्यो"), नक्कली KYC अपडेट लिङ्क, र फेसबुक म्यासेन्जर ह्याकिङ पर्छन्।',
        'OTP पैसा लिनका लागि होइन; OTP वा MPIN हाल्नुको अर्थ तपाईंको खाताबाट पैसा बाहिर पठाउनु मात्र हो।',
        'ठगहरूले बैंकको नाममा नक्कली एसएमएस पठाएर र आफन्तको प्रोफाइल बनाएर डर वा लोभ देखाई ठगी गर्छन्।',
        'बायोमेट्रिक फिंगरप्रिन्ट, तत्काल एसएमएस अलर्ट, र वालेटमा थोरै रकम राख्ने बानीले डिजिटल सुरक्षा दिन्छ।'
      ],
      whatIsThis: 'OTP घोटाला र फिसिङ (Phishing) भनेको साइबर अपराधीहरूले बैंक कर्मचारी वा आफन्त बनेर फोन वा म्यासेज गरी झुक्याएर तपाईंको गोप्य सुरक्षा कोड (OTP), पिन वा पासवर्ड मागेर खाताको सम्पूर्ण पैसा चोर्ने डिजिटल अपराध हो।',
      whyItMatters: 'नेपालमा मोबाइल बैंकिङ बढेसँगै डिजिटल ठगी डरलाग्दो रूपमा बढेको छ। "केवाइसी अपडेट नगरे खाता बन्द हुन्छ" भनेर आएको फोनमा विश्वास गरी ६ अंकको कोड दिँदा ३ मिनेटभित्र मानिसहरूको लाखौँ रुपैयाँ लुटिएको छ। आधिकारिक OTP हानेर भएको कारोबार बैंकले तुरुन्त फिर्ता गर्न नसक्ने भएकाले सचेत रहनु नै एकमात्र सुरक्षा हो।',
      howItWorks: [
        { step: 1, title: 'ठगले सम्पर्क गर्छ (डर वा लोभको पासो)', desc: 'ह्वाट्सएप वा इमोमा फोन आउँछ: "तपाईंको बैंक खाता २ घण्टामा रोक्का हुँदैछ, तुरुन्त विवरण दिनुहोस्" वा "बधाई छ! दसैँ अफरमा तपाईंलाई २५ लाखको चिट्ठा पर्यो।"' },
        { step: 2, title: 'मानसिक दबाब सिर्जना गरिन्छ', desc: 'ठगले फोन काट्न दिँदैन, अरूसँग सल्लाह गर्न दिँदैन र "म बैंकको अफिसर हुँ, म तपाईंलाई सहयोग गर्दैछु" भन्दै हतार गराउँछ।' },
        { step: 3, title: 'ठगले सिस्टमबाट OTP मगाउँछ', desc: 'फोनमा कुरा गर्दागर्दै ठगले तपाईंको नम्बर हानेर connectIPS वा मोबाइल बैंकिङमा पासवर्ड रिसेट वा पैसा ट्रान्सफरको कमान्ड दिन्छ, जसले गर्दा बैंकबाट सक्कली OTP तपाईंको मोबाइलमा आउँछ।' },
        { step: 4, title: 'OTP मागेर पैसा सफाचट गरिन्छ', desc: 'ठगले भन्छ: "तपाईंको पहिचान प्रमाणित गर्न भर्खरै मोबाइलमा आएको ६ अंकको कोड भन्नुहोस्।" तपाईंले कोड भन्नेबित्तिकै खाताको पैसा अर्को खातामा पुगिसक्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा हुने शीर्ष ४ डिजिटल वित्तीय ठगी र बच्ने उपायहरू',
        headers: ['ठगीको प्रकार', 'ठगहरूले प्रयोग गर्ने संवाद / बहाना', 'भित्री जालझेल (Trap)', 'तत्काल गर्नुपर्ने सुरक्षा कदम'],
        rows: [
          ['नक्कली बैंक KYC अपडेट', '"तपाईंको खाता ब्लक भयो, खोल्न यो लिङ्कमा गएर नागरिकता भर्नुहोस्।"', 'नक्कली वेबसाइट खोलेर पासवर्ड र OTP चोर्ने', 'एसएमएसको लिङ्क कहिल्यै नखोल्नुहोस्। बैंक एप सिधै खोल्नुहोस्।'],
          ['ह्वाट्सएप/इमो चिट्ठा', '"तपाईंलाई २५ लाखको चिट्ठा पर्यो, चिट्ठाको ट्याक्स बापत १५ हजार पठाउनुहोस्।"', 'पैसा असुल्ने अग्रिम ठगी; कुनै चिट्ठा परेको हुँदैन', 'नम्बर तुरुन्त ब्लक गर्नुहोस्; साइबर ब्युरोमा उजुरी गर्नुहोस्।'],
          ['फेसबुक आफन्त बनेर ठगी', '"म अस्पतालमा आपतमा परेँ, यो इसेवा नम्बरमा तुरुन्त २० हजार पठाइदेऊ न।"', 'साथीको फेसबुक ह्याक गरी नक्कली म्यासेज पठाएको', 'साथीको वास्तविक मोबाइल नम्बरमा सिधै फोन गरेर बुझ्नुहोस्।'],
          ['नक्कली क्युआर भुक्तानी', '"मैले तपाईंलाई पैसा पठाएँ, पैसा रिसिभ गर्न आफ्नो MPIN हान्नुहोस्।"', 'पिन हान्नेबित्तिकै तपाईंको खाताबाट पैसा काटिन्छ', 'सधैँ याद राख्नुहोस्: पैसा लिन कहिल्यै पनि पिन हान्नु पर्दैन!']
        ]
      },
      nepalContext: 'नेपाल प्रहरी साइबर ब्युरोको तथ्यांक अनुसार नेपालमा हुने ८०% भन्दा बढी डिजिटल ठगी बैंकको सिस्टम ह्याक भएर होइन, ग्राहक आफैंले फोनमा ठगलाई OTP दिएका कारण हुने गर्दछ। ग्रामीण भेगका नागरिक र वैदेशिक रोजगारीमा रहेका परिवारलाई इमो (IMO) र ह्वाट्सएपमार्फत बढी निशाना बनाइन्छ। नेपाल राष्ट्र बैंकले सबै बैंकहरूलाई एसएमएस पठाउँदा "यो गोप्य कोड बैंक कर्मचारी लगायत कसैलाई नदिनुहोस्" भनी अनिवार्य लेख्न निर्देशन दिएको छ।',
      practicalScenario: {
        persona: 'लक्ष्मी, ४८, कीर्तिपुरकी गृहिणी',
        income: 'पारिवारिक रेमिट्यान्स मासिक रु. ६०,०००',
        scenarioText: 'लक्ष्मीलाई ह्वाट्सएपमा बैंकको आधिकारिक लोगो राखिएको नम्बरबाट फोन आयो। भद्र स्वरमा बोल्ने व्यक्तिले भन्यो: "आमा, तपाईंको एटिएम कार्डको म्याद आज सकिँदैछ। कार्ड नवीकरण गर्न मोबाइलमा आएको ६ अंकको नम्बर भनिदिनुहोस्।" ',
        solutionText: 'लक्ष्मीलाई risePaisa को नियम याद आयो: "बैंकले कहिल्यै OTP माग्दैन।" उनले भनिन्: "म आफैं बैंकको शाखामा आउँछु" भन्दै फोन काटिन्। म्यासेज हेर्दा त्यो १ लाख २० हजार रुपैयाँ connectIPS बाट अर्को खातामा पठाउने पासवर्ड रिसेट कोड थियो। उनको एउटै सतर्कताले परिवारको पूरै बचत जोगियो।',
        metricHighlight: 'फोनमा ६ अंकको कोड नदिएर १ लाख २० हजार रुपैयाँ लुटिनबाट जोगाइन्'
      },
      formula: {
        name: 'डिजिटल भुक्तानी सुरक्षाको सुनौलो नियम',
        equation: '\\text{Action} = \\begin{cases} \\text{वैधानिक भुक्तानी} & \\text{यदि पैसा पठाउन MPIN / OTP हान्दै हुनुहुन्छ} \\\\ \\text{शतप्रतिशत ठगी} & \\text{यदि पैसा पाउन वा रिसिभ गर्न पिन मागिँदैछ} \\end{cases}',
        variables: [
          { symbol: '\\text{MPIN/OTP}', name: 'गोप्य प्रमाणीकरण कोड', desc: 'तपाईंको डिजिटल हस्ताक्षर जसले खाताबाट पैसा निकाल्छ।' },
          { symbol: '\\text{Action}', name: 'कारोबारको प्रकृति', desc: 'पैसा खातामा आउन कहिल्यै पनि पिन वा पासवर्ड चाहिँदैन।' }
        ],
        exampleCalculation: 'यदि कसैले "तपाईंको खातामा १० हजार पठाउँदैछु, आफ्नो ४ अंकको पिन हान्नुहोस्" भन्छ भने त्यो १००% ठगी हो। पैसा पाउनका लागि आफ्नो मोबाइल नम्बर वा खाता नम्बर दिए पुग्छ - पिन कहिल्यै दिनु पर्दैन!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'सुरक्षा चेकलिस्ट हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'ह्वाट्सएपको डीपीमा बैंकको लोगो देख्दैमा फोन गर्ने मान्छे बैंककै हो भन्ठान्नु।', correct: 'लोगो जोसुकैले इन्टरनेटबाट डाउनलोड गरेर राख्न सक्छ; बैंकले कहिल्यै सामाजिक सञ्जालबाट फोन गर्दैन।', explanation: 'ह्याकरहरूले बैंकको प्रबन्धक वा सिआइबीको लोगो राखेर मानिसहरूलाई मनोवैज्ञानिक रूपमा त्रसित बनाउँछन्।' },
        { mistake: '"खाता सुरक्षित गरिदिन्छु" भन्ने अपरिचित व्यक्तिलाई मोबाइलमा आएको कोड सुनाउनु।', correct: 'तुरुन्त फोन काट्नुहोस्। सक्कली बैंक कर्मचारीलाई तपाईंको व्यक्तिगत कोड कहिल्यै चाहिँदैन।', explanation: 'बैंकका कर्मचारीसँग सिस्टमको आफ्नै पहुँच हुन्छ, उनीहरूलाई ग्राहकको व्यक्तिगत पासवर्ड चाहिँदैन।' },
        { mistake: 'एसएमएसमा आएका छोटा लिङ्क (bit.ly, tinyurl आदि) मा क्लिक गरेर बैंक खाता खोल्नु।', correct: 'कुनै पनि एसएमएसको लिङ्क नखोल्नुहोस्; सिधै बैंकको आधिकारिक एप वा वेबसाइटमा जानुहोस्।', explanation: 'फिसिङ लिङ्कले दुरुस्तै देखिने नक्कली पेज खोलेर तपाईंको लगइन आइडी र पासवर्ड चोर्छन्।' }
      ],
      definitions: [
        { term: 'ओटीपी (OTP)', full: 'One-Time Password', meaning: 'कुनै एउटा कारोबार सम्पन्न गर्न मोबाइलमा आउने एकपटक मात्र प्रयोग हुने गोप्य सुरक्षा कोड।' },
        { term: 'फिसिङ (Phishing)', full: 'नक्कली जालसाजी', meaning: 'सक्कली बैंक जस्तै देखिने नक्कली म्यासेज वा वेबसाइट बनाएर ग्राहकको गोप्य डाटा चोर्ने अपराध।' },
        { term: 'सोसियल इन्जिनियरिङ', full: 'मनोवैज्ञानिक छलकपट', meaning: 'मानिसलाई डर, लोभ वा हतार देखाएर गोप्य वित्तीय जानकारी दिन बाध्य पार्ने कला।' },
        { term: 'एमपिन (MPIN)', full: 'Mobile Banking PIN', meaning: 'मोबाइल बैंकिङबाट कारोबार प्रमाणित गर्न प्रयोग गरिने तपाईंको व्यक्तिगत ४ वा ६ अंकको गोप्य पिन।' }
      ],
      faqs: [
        { q: 'यदि गल्तीले ठगलाई OTP दिइहालेँ भने के बैंकले मेरो पैसा फिर्ता ल्याइदिन सक्छ?', a: 'OTP दिएर भएको कारोबार तुरुन्तै राफसाफ भइसक्छ। यदि ठगले एटिएमबाट नगद झिकिसकेको छैन भने नेपाल प्रहरी साइबर ब्युरोमार्फत गन्तव्य खाता तुरुन्त रोक्का गरेर मात्र पैसा फिर्ता पाउन सकिन्छ।' },
        { q: 'ठगलाई मेरो नाम, ठेगाना र बैंक खाता कसरी थाहा भयो?', a: 'सार्वजनिक मतदाता नामावली, अनलाइन फारम, बायोडाटा, वा बैंकमा फालिएका भौचरहरूबाट ठगहरूले सामान्य व्यक्तिगत विवरण संकलन गर्छन्।' },
        { q: 'यदि झुक्किएर OTP कसैलाई दिइयो भने सबैभन्दा पहिलो काम के गर्ने?', a: 'तुरुन्तै आफ्नो बैंकको २४सै घण्टा खुल्ने कार्ड वा डिजिटल हेल्पलाइनमा फोन गरेर "मेरो मोबाइल बैंकिङ तुरुन्त ब्लक गरिदिनुहोस्" भन्नुहोस् र पासवर्ड फेर्नुहोस्।' }
      ],
      takeaways: [
        'कुनै पनि बैंक वा वालेटका कर्मचारीले कहिल्यै पनि तपाईंको OTP वा पिन माग्दैनन्।',
        'पैसा पाउनका लागि कहिल्यै पनि OTP वा MPIN हान्नु पर्दैन; पिन पैसा पठाउन मात्र चाहिन्छ।',
        'बैंक खाता वा केवाइसी बन्द हुन्छ भन्दै एसएमएसमा आउने कुनै पनि लिङ्कमा क्लिक नगर्नुहोस्।',
        'फेसबुकमा साथीले पैसा माग्यो भने पहिले उसको व्यक्तिगत फोन नम्बरमा फोन गरेर यकिन गर्नुहोस्।',
        'यदि झुक्किएर कोड दिइहाल्नुभयो भने केही मिनेटभित्रै बैंकमा फोन गरेर खाता रोक्का गराउनुहोस्।'
      ]
    }
  },

  // ── I6. REPORTING DIGITAL FRAUD TO NEPAL POLICE ───────────────────
  'reporting-digital-financial-fraud-nepal-police': {
    id: 'dp-reporting-fraud-police',
    slug: 'reporting-digital-financial-fraud-nepal-police',
    categorySlug: 'digital-payments',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Electronic Transactions Act 2063 & Nepal Police Cyber Bureau Reporting Protocols', np: 'विद्युतीय कारोबार ऐन २०६३ तथा नेपाल प्रहरी साइबर ब्युरो उजुरी कार्यविधि अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of digital banking transactions and transaction IDs', np: 'डिजिटल बैंकिङ कारोबार र ट्रान्जिक्सन आइडीको सामान्य जानकारी' },
    en: {
      title: 'Reporting Digital Financial Fraud in Nepal: Step-by-Step Police & Bank Action',
      oneLineSummary: 'Act within the critical 2-hour golden window to freeze stolen funds, lodge Cyber Bureau complaints, and recover money.',
      summaryPoints: [
        'The first 2 hours after a scam ("The Golden Window") determine whether your stolen funds can be successfully frozen before ATM cash-out.',
        'Immediate Step 1: Call your bank helpline to freeze your mobile banking and obtain the destination bank account and transaction ID (Ref ID).',
        'Immediate Step 2: Contact the destination bank / wallet operator (eSewa/Khalti) to place an emergency lien freeze on the recipient wallet.',
        'File an official complaint with Nepal Police Cyber Bureau (Bhotahity, Kathmandu) or email cyberbureau@nepalpolice.gov.np with evidence.',
        'Legal action operates under the Electronic Transactions Act 2063 (विद्युतीय कारोबार ऐन २०६३) and Banking Offence Act.'
      ],
      whatIsThis: 'Digital Financial Fraud Reporting is the formal legal and banking recovery procedure invoked when an individual is cheated of money via unauthorized online transfers, phishing, or social engineering scams. It coordinates emergency account freezing between commercial banks, digital wallet compliance teams, Nepal Police Cyber Bureau, and the central bank.',
      whyItMatters: 'Many victims in Nepal waste hours crying, posting on Facebook, or waiting for morning to visit a physical bank branch. By the time they speak to a clerk 18 hours later, the scammer has laundered the stolen money through three different digital wallets and cashed out at an ATM in Birgunj. Knowing the exact sequence of emergency reporting steps maximizes your odds of recovering 100% of your stolen funds.',
      howItWorks: [
        { step: 1, title: 'Minute 0-15: Emergency Bank Helpline Call', desc: 'Call your bank\'s 24/7 card/digital call center immediately. Request an instant freeze on your digital profile and ask the officer: "What is the destination account number, bank name, and Transaction Reference ID?"' },
        { step: 2, title: 'Minute 15-45: Freeze the Destination Wallet / Account', desc: 'Immediately call the destination bank or wallet provider (e.g. eSewa/Khalti fraud desk). Quote the Transaction ID and report the fraudulent transfer so they can place a lien hold on the recipient\'s balance.' },
        { step: 3, title: 'Hour 1-4: File Nepal Police Cyber Bureau Complaint', desc: 'Lodge a formal police complaint. If in Kathmandu Valley, visit the Cyber Bureau at Bhotahity; if outside, visit your District Police Office (DPO) or submit an online complaint via cyberbureau@nepalpolice.gov.np.' },
        { step: 4, title: 'Police Issue Official Rokka Letter & Court Order', desc: 'The Cyber Bureau issues an official legal freeze letter (रोक्का पत्र) to the destination bank. Once police charges are filed, the court authorizes the formal refund of the frozen funds back to your account.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Emergency Action Roadmap: What to Do When Scammed in Nepal',
        headers: ['Time Elapsed', 'Primary Action to Take', 'Contact Entity', 'Objective / Outcome'],
        rows: [
          ['First 15 Minutes', 'Call 24/7 Bank Helpline', 'Your Bank\'s Card/Call Center', 'Block credentials & obtain destination Ref ID'],
          ['15 to 60 Minutes', 'Contact Beneficiary Bank/Wallet', 'eSewa/Khalti/Destination Bank', 'Emergency temporary freeze on scammer balance'],
          ['Within 24 Hours', 'Submit Evidence Dossier', 'Nepal Police Cyber Bureau', 'Register official First Information Report (FIR)'],
          ['Day 2 to Day 7', 'Follow up on Police Rokka', 'Cyber Bureau Investigation Officer', 'Ensure legal freeze letter is delivered to banks'],
          ['Day 15 to 45', 'Court Clearance & Fund Return', 'District Court / Banking Tribunal', 'Formal release and refund of frozen money']
        ]
      },
      nepalContext: 'Under the Electronic Transactions Act 2063 (विद्युतीय कारोबार ऐन २०६३), unauthorized access to computer systems, data theft, and digital fraud are punishable by up to 3 to 5 years imprisonment and severe monetary fines. The Nepal Police Cyber Bureau was established in Bhotahity, Kathmandu as a specialized division equipped with forensic investigators to trace IP addresses, telecom CDRs (Call Detail Records), and interbank digital transaction trails across all 77 districts.',
      practicalScenario: {
        persona: 'Pradeep, 28, marketing executive in Biratnagar',
        income: 'NPR 55,000 / month',
        scenarioText: 'Pradeep fell for an online Facebook marketplace scam and transferred NPR 45,000 via mobile banking to an unknown scammer\'s digital wallet. Within 5 minutes, the seller blocked him on WhatsApp.',
        solutionText: 'Pradeep did not panic. Within 10 minutes, he obtained the Transaction ID from his mobile banking app and called the wallet provider\'s fraud helpline. The wallet compliance team placed an emergency hold on the scammer\'s wallet. Pradeep filed an FIR at the Morang District Police Office that afternoon. Because the funds were frozen before the scammer could cash out, Pradeep recovered all NPR 45,000 two weeks later.',
        metricHighlight: 'Recovered 100% of NPR 45,000 by acting within 15 minutes'
      },
      formula: {
        name: 'Digital Fraud Recovery Probability Curve',
        equation: 'P_{\\text{recovery}} \\approx \\frac{1}{1 + e^{0.8 \\times (t - 2)}}',
        variables: [
          { symbol: 't', name: 'Time Elapsed Since Fraud (Hours)', desc: 'The number of hours before official reporting and freezing.' },
          { symbol: 'P_{\\text{recovery}}', name: 'Probability of Fund Recovery', desc: 'Chances of successfully recovering stolen cash.' }
        ],
        exampleCalculation: 'If you act within t = 1 hour, recovery probability is ~70%. If you wait until t = 12 hours (the next morning), recovery probability plummets below 0.03% because cash has already been withdrawn at an ATM!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'Check Emergency Protocols'
      },
      commonMistakes: [
        { mistake: 'Waiting until Monday morning to visit a bank branch when scammed on a Friday evening.', correct: 'Never wait. Use 24/7 bank call centers and email the Cyber Bureau immediately.', explanation: 'Scammers operate on weekends precisely because they count on victims delaying their response.' },
        { mistake: 'Failing to take screenshots of chat logs, caller numbers, and transaction IDs.', correct: 'Immediately take full screenshots of all chat logs, phone numbers, and payment receipts before the scammer deletes them.', explanation: 'The Cyber Bureau requires concrete documentary evidence to initiate an official investigation.' },
        { mistake: 'Deleting the scammer\'s messages out of embarrassment or anger.', correct: 'Preserve all messages, voice notes, and payment links intact on your device.', explanation: 'Digital forensics officers use unedited message metadata to trace the scammer\'s device and location.' }
      ],
      definitions: [
        { term: 'Cyber Bureau', full: 'नेपाल प्रहरी साइबर ब्युरो', meaning: 'The specialized investigative wing of Nepal Police dedicated to cybercrime, hacking, and online fraud.' },
        { term: 'Golden Window', full: 'सुनौलो समय (पहिलो २ घण्टा)', meaning: 'The critical initial 2 hours after a scam before the criminal withdraws cash from ATMs or third-party agents.' },
        { term: 'Rokka Letter', full: 'खाता रोक्का पत्र', meaning: 'A formal statutory order issued by police or judicial authorities directing a bank to freeze an account.' },
        { term: 'Ref ID / Txn ID', full: 'कारोबार सन्दर्भ नम्बर', meaning: 'The unique alphanumeric tracking code generated by payment switches for every financial transaction.' }
      ],
      faqs: [
        { q: 'Where is the Nepal Police Cyber Bureau located, and how can I contact them?', a: 'The Cyber Bureau central headquarters is located at Bhotahity, Kathmandu. You can call their hotline at 01-4390850 / 01-4390851, or email your complaint directly to cyberbureau@nepalpolice.gov.np.' },
        { q: 'Can I file a cyber fraud report if I live outside Kathmandu Valley?', a: 'Yes. You can file your complaint at your local District Police Office (जिल्ला प्रहरी कार्यालय) in any of Nepal\'s 77 districts; they will coordinate directly with the Cyber Bureau in Kathmandu.' },
        { q: 'What documents must I attach when filing a digital fraud complaint?', a: 'Attach: (1) Copy of your citizenship certificate, (2) Bank statement showing the disputed debit with Transaction ID, (3) Full screenshots of WhatsApp/Facebook chats and scammer phone numbers, (4) A written application detailing the timeline of events.' }
      ],
      takeaways: [
        'Act within the 2-hour "Golden Window" to freeze stolen funds before ATM withdrawal.',
        'Call your bank\'s 24/7 helpline immediately to obtain the destination account and Ref ID.',
        'Contact the recipient wallet or bank to place an emergency lien hold on the funds.',
        'Lodge a formal complaint with Nepal Police Cyber Bureau (Bhotahity or district police).',
        'Preserve all chat screenshots, phone numbers, and transaction receipts as legal evidence.'
      ]
    },
    np: {
      title: 'नेपालमा डिजिटल वित्तीय ठगीको उजुरी गर्ने प्रक्रिया: बैंक र साइबर ब्युरोमा चाल्नुपर्ने कदम',
      oneLineSummary: 'ठगी भएको पहिलो २ घण्टाको "गोल्डेन विन्डो" भित्रै खाता रोक्का गराउने, प्रमाण जुटाउने र साइबर ब्युरोमा उजुरी गर्ने सम्पूर्ण तरिका।',
      summaryPoints: [
        'ठगी भएको पहिलो २ घण्टा ("गोल्डेन विन्डो") ले चोरिएको पैसा फिर्ता हुन सक्छ कि सक्दैन भन्ने कुराको फैसला गर्छ।',
        'पहिलो कदम: तुरुन्तै आफ्नो बैंकको २४/७ हेल्पलाइनमा फोन गरी खाता रोक्का गर्न लगाउनुहोस् र पैसा गएको खाता नम्बर तथा ट्रान्सफर आइडी (Ref ID) लिनुहोस्।',
        'दोस्रो कदम: पैसा पुगेको गन्तव्य बैंक वा वालेट (eSewa/Khalti) को फ्रड डेस्कमा फोन गरेर त्यो खाता तत्काल रोक्का (Lien Hold) गर्न लगाउनुहोस्।',
        'काठमाडौँको भोटाहिटीस्थित नेपाल प्रहरी साइबर ब्युरो वा जिल्ला प्रहरी कार्यालयमा गएर वा cyberbureau@nepalpolice.gov.np मा उजुरी दिनुहोस्।',
        'यो कानुनी प्रक्रिया विद्युतीय कारोबार ऐन २०६३ र बैंकिङ कसूर ऐन अन्तर्गत अगाडि बढ्छ।'
      ],
      whatIsThis: 'डिजिटल वित्तीय ठगी उजुरी भनेको अनलाइन बैंकिङ, वालेट वा सामाजिक सञ्जालमार्फत झुक्याएर लुटिएको पैसा रोक्का गराउन र फिर्ता पाउन चालिने औपचारिक कानुनी तथा बैंकिङ प्रक्रिया हो। यसमा बैंक, वालेट कम्पनी, नेपाल प्रहरी साइबर ब्युरो र अदालत बीच समन्वय हुन्छ।',
      whyItMatters: 'धेरै मानिसहरू ठगिएपछि आत्तिएर फेसबुकमा गुनासो लेख्दै वा भोलिपल्ट बैंक खुल्ने समय पर्खेर बस्छन्। १८ घण्टापछि बैंक पुग्दा ठगले त्यो पैसा ३ वटा फरक वालेटमा घुमाएर वीरगन्ज वा नेपालगन्जको एटिएमबाट नगद झिकिसकेको हुन्छ। तत्काल के-के कदम चाल्ने भन्ने थाहा भएमा लुटिएको शतप्रतिशत पैसा फिर्ता ल्याउन सकिन्छ।',
      howItWorks: [
        { step: 1, title: '० देखि १५ मिनेट: बैंक हेल्पलाइनमा आपतकालीन फोन', desc: 'आफ्नो बैंकको २४सै घण्टा खुल्ने कल सेन्टरमा तुरुन्त फोन गर्नुहोस्। आफ्नो मोबाइल बैंकिङ ब्लक गर्न लगाउनुहोस् र सोध्नुहोस्: "पैसा कुन बैंकको कुन खाता वा कुन वालेटमा गयो र कारोबारको Ref ID के हो?"' },
        { step: 2, title: '१५ देखि ४५ मिनेट: पैसा पुगेको खाता रोक्का गराउनुहोस्', desc: 'पैसा पुगेको बैंक वा वालेट (जस्तै eSewa वा Khalti) को कम्प्लायन्स शाखामा फोन गरेर कारोबार नम्बर टिपाउनुहोस् र ठगीको रकम भएकाले त्यो खाता तुरुन्त रोक्का (Hold) गर्न भन्नुहोस्।' },
        { step: 3, title: '१ देखि ४ घण्टा: साइबर ब्युरोमा औपचारिक उजुरी', desc: 'काठमाडौँमा भए भोटाहिटीस्थित साइबर ब्युरो र बाहिर भए जिल्ला प्रहरी कार्यालय पुग्नुहोस् वा cyberbureau@nepalpolice.gov.np मा सम्पूर्ण प्रमाणसहित लिखित निवेदन पठाउनुहोस्।' },
        { step: 4, title: 'प्रहरीको रोक्का पत्र र अदालतबाट रकम फिर्ता', desc: 'साइबर ब्युरोले बैंकलाई आधिकारिक खाता रोक्का पत्र पठाउँछ। अनुसन्धान पूरा भएपछि अदालतको आदेश अनुसार रोक्का रहेको पैसा तपाईंको खातामा फिर्ता आउँछ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'ठगी भएपछि तत्काल चाल्नुपर्ने कदमहरूको कार्यतालिका (Action Roadmap)',
        headers: ['बितेको समय', 'गर्नुपर्ने मुख्य काम', 'सम्पर्क निकाय', 'उद्देश्य तथा नतिजा'],
        rows: [
          ['पहिलो १५ मिनेटभित्र', 'बैंकको २४/७ हेल्पलाइनमा फोन', 'आफ्नो बैंकको कल सेन्टर', 'आईडी ब्लक गर्ने र पैसा गएको Ref ID लिने'],
          ['१५ देखि ६० मिनेटभित्र', 'पैसा पुगेको बैंक/वालेटमा फोन', 'eSewa/Khalti/गन्तव्य बैंक', 'ठगको खातामा भएको पैसा तुरुन्त रोक्का गराउने'],
          ['२४ घण्टाभित्र', 'प्रमाणसहित लिखित जाहेरी दर्ता', 'नेपाल प्रहरी साइबर ब्युरो', 'आधिकारिक मुद्दा (FIR) दर्ता गर्ने'],
          ['२ देखि ७ दिनभित्र', 'प्रहरी रोक्का पत्रको फलोअप', 'साइबर ब्युरोका अनुसन्धान अधिकृत', 'बैंकहरूमा आधिकारिक रोक्का पत्र पुगेको यकिन गर्ने'],
          ['१५ देखि ४५ दिनभित्र', 'अदालती प्रक्रिया र पैसा फिर्ता', 'जिल्ला अदालत / बैंकिङ इजलास', 'रोक्का रहेको पैसा वैधानिक रूपमा फिर्ता पाउने']
        ]
      },
      nepalContext: 'विद्युतीय कारोबार ऐन २०६३ अनुसार कम्प्युटर वा डिजिटल माध्यमबाट अरूको सम्पत्ति ठगी गर्नेलाई ३ देखि ५ वर्षसम्म कैद र बिगो बमोजिमको जरिवाना हुने कडा कानुनी व्यवस्था छ। नेपाल प्रहरीले साइबर अपराध र अनलाइन वित्तीय ठगीको अनुसन्धान गर्न काठमाडौँको भोटाहिटीमा विशेष प्राविधिक क्षमतायुक्त "साइबर ब्युरो" स्थापना गरेको छ जसले देशैभरका ७७ वटै जिल्लाका डिजिटल अपराधको कल डिटेल (CDR) र आईपी एड्रेस ट्र्याक गर्दछ।',
      practicalScenario: {
        persona: 'प्रदीप, २८, विराटनगरका मार्केटिङ अधिकृत',
        income: 'मासिक तलब रु. ५५,०००',
        scenarioText: 'प्रदीपले फेसबुक मार्केटप्लेसमा सामान किन्ने क्रममा मोबाइल बैंकिङबाट अपरिचित व्यक्तिको इसेवा खातामा रु. ४५,००० पठाए। पैसा पाउनेबित्तिकै ठगले उनलाई ह्वाट्सएपमा ब्लक गरिदियो।',
        solutionText: 'प्रदीप आत्तिएनन्। उनले १० मिनेटभित्र मोबाइल बैंकिङबाट कारोबार Ref ID निकालेर इसेवाको फ्रड हेल्पलाइनमा फोन गरी त्यो खाता होल्ड गराए। दिउँसो मोरङ जिल्ला प्रहरी कार्यालयमा गएर उजुरी दर्ता गरे। ठगले एटिएमबाट पैसा झिक्नुअघि नै खाता रोक्का भएकाले २ हप्तापछि प्रदीपले आफ्नो पूरै ४५ हजार रुपैयाँ फिर्ता पाए।',
        metricHighlight: '१५ मिनेटभित्र कदम चालेर लुटिएको रु. ४५,००० शतप्रतिशत फिर्ता पाए'
      },
      formula: {
        name: 'डिजिटल ठगीमा रकम फिर्ता हुने सम्भावना वक्र',
        equation: 'P_{\\text{recovery}} \\approx \\frac{1}{1 + e^{0.8 \\times (t - 2)}}',
        variables: [
          { symbol: 't', name: 'ठगी भएपछि बितेको समय (घण्टा)', desc: 'उजुरी गरी खाता रोक्का गराउन लागेको समय।' },
          { symbol: 'P_{\\text{recovery}}', name: 'रकम फिर्ता हुने सम्भाव्यता', desc: 'ठगले नगद झिक्नुअघि पैसा रोकिने सम्भावना।' }
        ],
        exampleCalculation: 'यदि ठगी भएको t = १ घण्टाभित्रै उजुरी गरियो भने रकम रोकिने सम्भावना करिब ७०% हुन्छ। तर यदि भोलिपल्ट (t = १२ घण्टापछि) सम्म पर्खियो भने सम्भावना ०.०३% मा झर्छ किनभने ठगले एटिएमबाट नगद झिकिसक्छ!',
        shortcutCalcSlug: 'calculators/emergency-fund',
        shortcutCalcName: 'आपतकालीन सुरक्षा प्रोटोकल हेर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'शुक्रबार साँझ ठगी हुँदा आइतबार बिहान बैंक खुल्ने समय पर्खेर बस्नु।', correct: 'एक मिनेट पनि नपर्खनुहोस्; बैंकको २४/७ कल सेन्टर र साइबर ब्युरोमा तुरुन्तै मेल गर्नुहोस्।', explanation: 'ठगहरूले जानीजानी शुक्रबार साँझ ठगी गर्छन् ताकि पीडितले बिदाको दिन उजुरी गर्न नसकून्।' },
        { mistake: 'ठगसँग भएका च्याट, फोन नम्बर र कारोबारको स्क्रिनसट नलिई डिलिट गर्नु।', correct: 'ठगले म्यासेज डिलिट गर्नुअघि सम्पूर्ण च्याट, फोन नम्बर र भौचरको तत्काल फुल स्क्रिनसट लिनुहोस्।', explanation: 'प्रहरीलाई अनुसन्धान सुरु गर्न र अदालतमा प्रमाण पेश गर्न डिजिटल कागजात अनिवार्य हुन्छ।' },
        { mistake: 'रिस वा लाजका कारण ठगका म्यासेजहरू फोनबाट मेटिदिनु।', correct: 'सबै भ्वाइस म्यासेज, कल रेकर्ड र एसएमएस सुरक्षित रूपमा फोनमै राख्नुहोस्।', explanation: 'प्रहरीका फोरेन्सिक विज्ञहरूले म्यासेजको भित्री मेटाडाटा जाँच गरेर ठगको मोबाइल लोकेसन पत्ता लगाउँछन्।' }
      ],
      definitions: [
        { term: 'साइबर ब्युरो (Cyber Bureau)', full: 'नेपाल प्रहरी साइबर ब्युरो', meaning: 'डिजिटल अपराध, ह्याकिङ र अनलाइन ठगीको अनुसन्धान गर्ने नेपाल प्रहरीको विशेष प्राविधिक शाखा।' },
        { term: 'गोल्डेन विन्डो (Golden Window)', full: 'पहिलो २ घण्टाको निर्णायक समय', meaning: 'ठगी भएपछिको प्रारम्भिक २ घण्टा जहाँ ठगले एटिएमबाट पैसा झिक्नुअघि नै खाता रोक्न सकिन्छ।' },
        { term: 'रोक्का पत्र (Rokka Letter)', full: 'खाता रोक्का कानुनी आदेश', meaning: 'प्रहरी वा अदालतले बैंकलाई ठगको खातामा भएको पैसा रोक्न पठाउने आधिकारिक कानुनी पत्र।' },
        { term: 'कारोबार सन्दर्भ नम्बर (Ref ID)', full: 'Transaction Reference ID', meaning: 'कुनै पनि डिजिटल कारोबारलाई पहिचान गर्न भुक्तानी प्रणालीले जारी गर्ने अद्वितीय कोड।' }
      ],
      faqs: [
        { q: 'नेपाल प्रहरी साइबर ब्युरो कहाँ छ र कसरी सम्पर्क गर्ने?', a: 'साइबर ब्युरोको केन्द्रीय कार्यालय भोटाहिटी, काठमाडौँमा छ। तपाईंले ०१-४३९०८५० वा ०१-४३९०८५१ मा फोन गर्न सक्नुहुन्छ वा cyberbureau@nepalpolice.gov.np मा सिधै उजुरी पठाउन सक्नुहुन्छ।' },
        { q: 'के काठमाडौँ बाहिर बस्नेले पनि साइबर ठगीको उजुरी गर्न पाउँछन्?', a: 'पाउँछन्। नेपालका ७७ वटै जिल्लाका जिल्ला प्रहरी कार्यालय (DPO) मा गएर उजुरी दर्ता गर्न सकिन्छ; त्यहाँबाट सिधै काठमाडौँको साइबर ब्युरोसँग समन्वय हुन्छ।' },
        { q: 'डिजिटल ठगीको उजुरी दिँदा के-के कागजात चाहिन्छ?', a: '(१) आफ्नो नागरिकताको प्रतिलिपि, (२) पैसा काटिएको बैंक स्टेटमेन्ट (Ref ID सहित), (३) ठगसँग भएका च्याट तथा फोन नम्बरको स्क्रिनसट, र (४) घटनाको सम्पूर्ण विवरण खुलाइएको लिखित निवेदन।' }
      ],
      takeaways: [
        'ठगी भएको पहिलो २ घण्टाको "गोल्डेन विन्डो" भित्रै कदम चाल्दा पैसा फिर्ता हुने सम्भावना उच्च हुन्छ।',
        'तुरुन्तै आफ्नो बैंकको २४/७ हेल्पलाइनमा फोन गरेर पैसा गएको खाता र Ref ID लिनुहोस्।',
        'पैसा पुगेको गन्तव्य बैंक वा वालेटलाई तुरुन्त फोन गरेर रकम होल्ड गर्न लगाउनुहोस्।',
        'प्रहरी साइबर ब्युरो (भोटाहिटी वा जिल्ला प्रहरी कार्यालय) मा लिखित प्रमाणसहित उजुरी दर्ता गर्नुहोस्।',
        'च्याट लग, फोन नम्बर र भुक्तानी रसिदका सम्पूर्ण स्क्रिनसटहरू कानुनी प्रमाणका रूपमा सुरक्षित राख्नुहोस्।'
      ]
    }
  }

};

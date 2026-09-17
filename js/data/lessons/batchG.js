// BATCH G - LOANS (4 lessons)
// 1. flat-rate-vs-reducing-balance-emi
// 2. property-valuation-mortgage-process
// 3. loan-prepayment-math-savings
// 4. prepayment-penalties-nrb-rules

export const BATCH_G = {

  // ── G1. FLAT RATE VS REDUCING BALANCE EMI ────────────────────────
  'flat-rate-vs-reducing-balance-emi': {
    id: 'loan-flat-vs-reducing',
    slug: 'flat-rate-vs-reducing-balance-emi',
    categorySlug: 'loans',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Lending Directives & Banking Regulations FY 2081/82', np: 'नेपाल राष्ट्र बैंक कर्जा निर्देशिका तथा बैंकिङ मापदण्ड २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Basic understanding of bank loans and monthly EMIs', np: 'बैंक कर्जा र मासिक किस्ता (EMI) को आधारभूत जानकारी' },
    en: {
      title: 'Flat Rate vs Reducing Balance EMI in Nepal: The Hidden Cost Trap',
      oneLineSummary: 'A 9% flat interest rate actually equals an effective ~16.5% reducing rate - learn the mathematical trap before signing any loan contract.',
      summaryPoints: [
        'In flat-rate lending, interest is charged on the original principal for the entire tenure, even as you repay the loan monthly.',
        'In reducing balance lending, interest is calculated only on the remaining outstanding principal balance each month.',
        'A quoted flat rate of 8% to 10% translates to an effective annual reducing APR of 15% to 18.5%.',
        'NRB directives mandate commercial banks (Class A, B, C) to quote and charge reducing balance for consumer loans, but informal financiers and auto dealers still advertise deceptive flat rates.',
        'Always demand an Amortization Schedule (किस्ता तालिका) showing monthly principal vs interest breakdown before signing.'
      ],
      whatIsThis: 'Flat rate and reducing balance are two radically different ways lenders calculate loan interest. In a flat-rate loan, interest is calculated on the full initial loan amount for the entire duration, completely ignoring the fact that your regular monthly payments are shrinking the debt. In a reducing-balance loan (standard BFI amortization), interest is calculated only on the unpaid balance remaining at the start of each monthly billing cycle.',
      whyItMatters: 'Deceptive advertising often lures borrowers in Nepal with slogans like "Auto Loan at just 8.5% Flat Rate!" An unsuspecting borrower thinks this is cheaper than a commercial bank\'s 11.5% reducing rate. In reality, an 8.5% flat rate over 5 years is mathematically equivalent to a crushing 15.6% reducing balance rate. On a 25 Lakh vehicle loan, falling into this trap costs an extra NPR 4,80,000 in unnecessary interest payments.',
      howItWorks: [
        { step: 1, title: 'Understand the Flat Rate Multiplier', desc: 'The lender takes Principal × Quoted Annual Rate × Tenure in Years. If you borrow NPR 10 Lakh at 9% flat for 5 years, total interest is fixed at NPR 4.5 Lakh regardless of your repayments.' },
        { step: 2, title: 'Analyze the Reducing Balance Reality', desc: 'In reducing balance, each monthly payment covers accrued monthly interest, and the remaining portion pays down principal. Next month, interest is charged only on the lower remaining balance.' },
        { step: 3, title: 'Convert Flat Rate to Approximate APR', desc: 'Use the standard banking thumb rule: Effective Reducing Rate ≈ Flat Rate × (2n / (n + 1)), where n is the number of installments. For a 5-year loan (60 months), multiply flat rate by roughly 1.83.' },
        { step: 4, title: 'Inspect the Sanction Letter Amortization Table', desc: 'Never accept a simple verbal quote. Demand the formal repayment schedule showing how much of each EMI goes to principal vs interest across the entire tenure.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Comparison: NPR 10,00,000 Loan for 5 Years (60 Months)',
        headers: ['Loan Metric', '9% Flat Rate (Dealer Offer)', '11.5% Reducing Rate (Bank Loan)', 'The Winner'],
        rows: [
          ['Total Interest Charged', 'NPR 4,50,000', 'NPR 3,19,947', 'Bank saves NPR 1,30,053'],
          ['Monthly EMI', 'NPR 24,167', 'NPR 21,999', 'Bank EMI is NPR 2,168 lower'],
          ['Effective Annual APR', '16.16% Effective Rate', '11.50% Base+Premium Rate', 'Bank is 4.66% cheaper'],
          ['Early Prepayment Benefit', 'Minimal or zero interest rebate', 'Direct principal reduction', 'Reducing rate saves huge interest']
        ]
      },
      nepalContext: 'Nepal Rastra Bank (NRB) Unified Directive strictly obligates all licensed Class A (Commercial), Class B (Development), and Class C (Finance) institutions to disburse loans on a reducing balance basis and disclose the Annual Percentage Rate (APR). However, unorganized auto-dealership financing, hire-purchase third parties, and informal community lenders across Nepal continue to quote misleading flat rates. Always ensure your contract states "घट्दो दर" (Reducing Rate) with explicit base-rate-linked quarterly adjustments.',
      practicalScenario: {
        persona: 'Ramesh, 34, grocery distributor in Birgunj',
        income: 'NPR 1,10,000 / month business income',
        scenarioText: 'Ramesh wanted to finance a commercial delivery pickup costing NPR 20 Lakh (loan needed: NPR 14 Lakh over 5 years). The vehicle showroom offered in-house financing at "just 9% flat interest". Meanwhile, a commercial bank offered a vehicle loan at Base Rate (8.2%) + 3.3% premium = 11.5% reducing rate.',
        solutionText: 'Ramesh was tempted by the showroom\'s "9% flat", thinking it was 2.5% cheaper. Using the RisePaisa EMI calculator, he saw that 9% flat meant NPR 6.3 Lakh total interest (NPR 33,833/mo), whereas 11.5% reducing meant NPR 4.48 Lakh total interest (NPR 30,799/mo). He chose the bank loan, saving NPR 1,82,000 in cold cash.',
        metricHighlight: 'Saved NPR 1,82,000 by rejecting deceptive flat-rate financing'
      },
      formula: {
        name: 'Effective Reducing Rate Approximation Formula',
        equation: 'r_{\\text{eff}} \\approx r_{\\text{flat}} \\times \\left( \\frac{2n}{n + 1} \\right)',
        variables: [
          { symbol: 'r_{\\text{eff}}', name: 'Effective Reducing Interest Rate', desc: 'The true equivalent APR on reducing balance.' },
          { symbol: 'r_{\\text{flat}}', name: 'Nominal Flat Interest Rate', desc: 'The advertised flat interest rate per year.' },
          { symbol: 'n', name: 'Total Number of Monthly Installments', desc: 'E.g., 5 years = 60 months.' }
        ],
        exampleCalculation: 'For 9% flat rate over 5 years (n = 60): r_eff ≈ 9% × (120 / 61) = 9% × 1.967 = 17.7% approx (exact financial IRR is 16.16%). A flat 9% is never 9% - it is over 16%!',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'Calculate Reducing Balance EMI'
      },
      commonMistakes: [
        { mistake: 'Assuming a 9% flat loan is cheaper than an 11% bank reducing loan.', correct: 'Multiply flat rate by ~1.8 to find its true reducing equivalent before comparing.', explanation: 'Because you pay down principal continuously, a flat rate charges interest on money you have already paid back months ago.' },
        { mistake: 'Looking only at the monthly installment amount without checking total interest paid.', correct: 'Always multiply EMI by total tenure months and subtract principal to see total interest.', explanation: 'Dealers stretch tenure to make monthly payments look deceptively small while multiplying total interest paid.' },
        { mistake: 'Failing to ask whether early repayment recalculates future interest.', correct: 'Ensure early repayments immediately lower the outstanding principal balance without flat-penalty traps.', explanation: 'Flat loans rarely rebate future unearned interest upon early closure unless forced by strict contractual clauses.' }
      ],
      definitions: [
        { term: 'Flat Interest Rate', full: 'Simple Fixed Rate on Initial Principal', meaning: 'A method where interest is computed on the entire original loan amount throughout the life of the loan, regardless of repayments.' },
        { term: 'Reducing Balance Rate', full: 'Diminishing Balance Amortization', meaning: 'A method where interest is calculated each month only on the remaining unpaid principal balance.' },
        { term: 'Amortization Schedule', full: 'Kista Talika (किस्ता तालिका)', meaning: 'A complete table showing every monthly installment split into principal repayment, interest cost, and outstanding balance.' },
        { term: 'Effective APR', full: 'Annual Percentage Rate', meaning: 'The true annualized cost of borrowing, incorporating compounding, repayment schedule, and loan processing fees.' }
      ],
      faqs: [
        { q: 'Why do auto dealers and non-bank lenders still quote flat interest rates in Nepal?', a: 'Because flat rates sound psychologically cheap. An 8.5% flat rate sounds far more attractive than a 15.5% reducing rate, masking the lender\'s high profit margin from uneducated borrowers.' },
        { q: 'Are Class A commercial banks allowed to issue flat-rate personal loans in Nepal?', a: 'No. NRB guidelines require licensed BFIs to disburse retail loans on reducing balance amortization linked to their quarterly Base Rate plus agreed premium.' },
        { q: 'How can I quickly check if a quote is flat or reducing on my phone?', a: 'Take Total Loan Amount × Quoted Rate × Years. Add Principal. Divide by Months. If the resulting number matches the quote given by the lender, it is a flat-rate loan!' }
      ],
      takeaways: [
        'Never compare flat rates directly against reducing balance rates; a flat rate is roughly 1.8x higher in reality.',
        'A 9% flat loan over 5 years carries an effective interest rate of over 16%.',
        'NRB mandates reducing balance for all licensed banks; beware of informal dealers quoting flat figures.',
        'Always demand an official amortization schedule (किस्ता तालिका) before signing any sanction letter.',
        'Use the RisePaisa EMI calculator to verify the true APR and total interest outlay.'
      ]
    },
    np: {
      title: 'नेपालमा फ्ल्याट ब्याजदर बनाम घट्दो दर (Reducing Balance): लुकेको आर्थिक पासो',
      oneLineSummary: '९% भनिएको फ्ल्याट ब्याजदर वास्तवमा १६.५% घट्दो दर सरह हुन्छ - कुनै पनि कर्जा सम्झौतामा हस्ताक्षर गर्नुअघि यो गणितीय पासो बुझ्नुहोस्।',
      summaryPoints: [
        'फ्ल्याट ब्याजदरमा ऋणको साँवा घट्दै गए पनि सुरुवाती पूरै रकममा अन्तिमसम्म ब्याज जोडिन्छ।',
        'घट्दो दर (Reducing Balance) मा प्रत्येक महिना तिर्न बाँकी रहेको साँवा रकममा मात्र ब्याज हिसाब गरिन्छ।',
        'विज्ञापन गरिएको ८% देखि १०% को फ्ल्याट दर वास्तवमा १५% देखि १८.५% को घट्दो वार्षिक ब्याजदर बराबर हुन आउँछ।',
        'नेपाल राष्ट्र बैंकको निर्देशन अनुसार क, ख र ग वर्गका बैंकहरूले घट्दो दरमै ऋण दिनुपर्छ, तर गाडी शोरुम र अनौपचारिक साहुहरूले अझै भ्रमपूर्ण फ्ल्याट दर प्रचार गर्छन्।',
        'ऋण सम्झौता गर्नुअघि अनिवार्य रूपमा किस्ता तालिका (Amortization Schedule) माग्नुहोस्।'
      ],
      whatIsThis: 'फ्ल्याट रेट र घट्दो दर (Reducing Balance) कर्जामा ब्याज हिसाब गर्ने दुई फरक तरिका हुन्। फ्ल्याट दरमा तपाईंले हरेक महिना किस्ता तिरिरहे पनि सुरुको कुल रकममै पूरै अवधिको ब्याज जोडिन्छ। घट्दो दरमा भने अघिल्लो महिना साँवा घटाएर बाँकी रहेको रकममा मात्र चालु महिनाको ब्याज हिसाब गरिन्छ।',
      whyItMatters: 'नेपालमा गाडी वा व्यक्तिगत कर्जा लिँदा "८.५% मै गाडी लोन" भनेर झुक्याइन्छ। ग्राहकले बैंकको ११% भन्दा यो सस्तो ठानेर लिन्छन्। तर ५ वर्षको ८.५% फ्ल्याट दर वास्तविक रूपमा १५.६% घट्दो दर बराबर हुन्छ। २५ लाखको गाडी कर्जामा यो भ्रमले गर्दा ग्राहकले अनावश्यक रूपमा झण्डै रु. ४,८०,००० बढी ब्याज बुझाउनुपर्छ।',
      howItWorks: [
        { step: 1, title: 'फ्ल्याट दरको हिसाब बुझ्नुहोस्', desc: 'साहुले कुल साँवा × वार्षिक दर × वर्ष गर्छ। रु. १० लाख ९% फ्ल्याटमा ५ वर्षको लागि लिँदा सोझै रु. ४.५ लाख ब्याज जोडेर कुल १४.५ लाख बनाइन्छ।' },
        { step: 2, title: 'घट्दो दरको वास्तविक फाइदा हेर्नुहोस्', desc: 'घट्दो दरमा तपाईंले तिरेको किस्ताबाट साँवा घट्छ। अर्को महिना बाँकी रहेको सानो रकममा मात्र ब्याज लाग्ने हुँदा कुल ब्याज निकै कम हुन्छ।' },
        { step: 3, title: 'फ्ल्याटलाई घट्दो दरमा रूपान्तरण गर्नुहोस्', desc: 'औँलाको भरमा हिसाब गर्ने सूत्र: प्रभावकारी घट्दो दर ≈ फ्ल्याट दर × १.८। यदि कसैले ९% फ्ल्याट भन्यो भने त्यो करिब १६% भन्दा बढी हुन्छ।' },
        { step: 4, title: 'किस्ता तालिका (Amortization Schedule) जाँच्नुहोस्', desc: 'मौखिक कुरामा विश्वास नगर्नुहोस्। बैंक वा वित्तीय संस्थाबाट प्रत्येक महिनाको साँवा र ब्याज छुट्टिएको तालिका माग्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'तुलना: रु. १०,००,००० ऋण, ५ वर्षे अवधि (६० महिना)',
        headers: ['कर्जा सूचक', '९% फ्ल्याट दर (शोरुम अफर)', '११.५% घट्दो दर (बैंक कर्जा)', 'फाइदा / नतिजा'],
        rows: [
          ['कुल बुझाउनुपर्ने ब्याज', 'रु. ४,५०,०००', 'रु. ३,१९,९४७', 'बैंकमा रु. १,३०,०५३ बचत'],
          ['मासिक किस्ता (EMI)', 'रु. २४,१६७', 'रु. २१,९९९', 'बैंकमा मासिक रु. २,१६८ सस्तो'],
          ['वास्तविक प्रभावकारी दर', '१६.१६% वास्तविक APR', '११.५०% आधार दर+प्रिमियम', 'बैंक कर्जा ४.६६% ले सस्तो'],
          ['छिटो ऋण चुक्ता गर्दा छुट', 'प्रायः ब्याज छुट नदिइने', 'साँवा घटेर तुरुन्त ब्याज रोकिने', 'घट्दो दरमा ठूलो बचत हुने']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकको एकीकृत निर्देशिकाले "क", "ख" र "ग" वर्गका इजाजतपत्रप्राप्त बैंक तथा वित्तीय संस्थाहरूलाई अनिवार्य रूपमा घट्दो दर (Reducing Balance) मा कर्जा प्रवाह गर्न र आधार दर (Base Rate) मा प्रिमियम जोडेर स्पष्ट रूपमा उल्लेख गर्न निर्देशन दिएको छ। तर निजी गाडी डिलर, हायर पर्चेज कम्पनी र व्यक्तिगत साहुहरूले अझै पनि "सस्तो फ्ल्याट दर" को भ्रमपूर्ण विज्ञापन गर्दछन्। सधैं ऋण सम्झौतामा "घट्दो दर" लेखिएको यकिन गर्नुहोस्।',
      practicalScenario: {
        persona: 'रमेश, ३४, वीरगन्जका खाद्यान्न वितरक',
        income: 'मासिक रु. १,१०,००० व्यापारिक आम्दानी',
        scenarioText: 'रमेशलाई सामान ओसार्न पिकअप भ्यान किन्न रु. १४ लाख ऋण चाहिएको थियो। गाडी शोरुमले "९% फ्ल्याट ब्याजदरमा तुरुन्तै लोन" दिने प्रस्ताव गर्यो। अर्कोतर्फ, एक वाणिज्य बैंकले आधार दर + ३.३% गरी ११.५% घट्दो दरमा सवारी कर्जा अफर गर्यो।',
        solutionText: 'रमेश ९% सस्तो होला भन्ठानेर शोरुमको लोन लिन आँटेका थिए। risePaisa को क्यालकुलेटरमा जाँच्दा ९% फ्ल्याटमा कुल ब्याज रु. ६,३०,००० (मासिक रु. ३३,८३३) पर्ने देखियो भने बैंकको ११.५% घट्दो दरमा कुल ब्याज रु. ४,४८,००० (मासिक रु. ३०,७९९) मात्र हुने देखियो। उनले बैंकबाटै कर्जा लिएर नगद रु. १,८२,००० बचत गरे।',
        metricHighlight: 'भ्रमपूर्ण फ्ल्याट दर बहिष्कार गरी रु. १,८२,००० नगद बचत'
      },
      formula: {
        name: 'फ्ल्याटबाट प्रभावकारी घट्दो दर निकाल्ने सूत्र',
        equation: 'r_{\\text{eff}} \\approx r_{\\text{flat}} \\times \\left( \\frac{2n}{n + 1} \\right)',
        variables: [
          { symbol: 'r_{\\text{eff}}', name: 'प्रभावकारी घट्दो ब्याजदर (Effective APR)', desc: 'घट्दो दरमा वास्तविक वार्षिक लागत।' },
          { symbol: 'r_{\\text{flat}}', name: 'प्रचार गरिएको फ्ल्याट दर', desc: 'ऋणदाताले देखाउने नाममात्रको दर।' },
          { symbol: 'n', name: 'कुल किस्ता संख्या (महिना)', desc: 'जस्तै: ५ वर्ष = ६० महिना।' }
        ],
        exampleCalculation: '५ वर्ष (६० महिना) को लागि ९% फ्ल्याट दर: r_eff ≈ ९% × (१२० / ६१) ≈ १७.७% (वास्तविक वित्तीय IRR १६.१६%)। ९% फ्ल्याट भनेको कहिल्यै ९% हुँदैन, यो १६% भन्दा बढी हुन्छ!',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'घट्दो दरमा EMI हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: '९% फ्ल्याट लोन ११% को बैंक घट्दो लोनभन्दा सस्तो हुन्छ भन्ठान्नु।', correct: 'तुलना गर्नुअघि फ्ल्याट दरलाई १.८ ले गुणन गरेर वास्तविक दर निकाल्नुहोस्।', explanation: 'तपाईंले प्रत्येक महिना साँवा तिरिरहे पनि फ्ल्याट दरमा पहिलो दिनको पूरै रकममा ब्याज तिर्नुपर्छ।' },
        { mistake: 'कुल ब्याज नहेरी केवल मासिक किस्ताको रकम मात्र हेरेर ऋण लिनु।', correct: 'मासिक किस्तालाई कुल महिनाले गुणन गरी साँवा घटाएर कुल ब्याज कति पुग्छ हिसाब गर्नुहोस्।', explanation: 'ऋण अवधि लामो बनाएर मासिक किस्ता सानो देखाइन्छ तर कुल ब्याज दोब्बर बढी असुलिन्छ।' },
        { mistake: 'अवधि अगावै ऋण तिर्दा भविष्यको ब्याज छुट हुन्छ कि हुँदैन नसोधी सम्झौता गर्नु।', correct: 'अग्रिम भुक्तानी गर्दा साँवा तुरुन्त घटेर बाँकी ब्याज मिनाहा हुने सर्त राख्नुहोस्।', explanation: 'फ्ल्याट दर दिने संस्थाहरूले अग्रिम भुक्तानीमा प्रायः ब्याज छुट दिँदैनन्।' }
      ],
      definitions: [
        { term: 'फ्ल्याट ब्याजदर (Flat Rate)', full: 'सुरुवाती साँवामा लाग्ने स्थिर ब्याज', meaning: 'किस्ता तिरेर साँवा घट्दै गए पनि सुरुको कुल ऋण रकममै पूरै अवधिको ब्याज जोड्ने तरिका।' },
        { term: 'घट्दो दर (Reducing Balance)', full: 'बाँकी साँवामा लाग्ने ब्याज प्रणाली', meaning: 'प्रत्येक महिना साँवा तिरेपछि बाँकी रहेको खुद रकममा मात्र ब्याज गणना गरिने बैंकिङ विधि।' },
        { term: 'किस्ता तालिका (Amortization)', full: 'ऋण भुक्तानी कार्यतालिका', meaning: 'प्रत्येक महिनाको किस्तामा साँवा कति, ब्याज कति र बाँकी ऋण कति छ भनी देखाउने विस्तृत विवरण।' },
        { term: 'प्रभावकारी ब्याजदर (APR)', full: 'Annual Percentage Rate', meaning: 'ऋण लिँदा लाग्ने सेवा शुल्क र वास्तविक ब्याजसहितको वास्तविक वार्षिक लागत।' }
      ],
      faqs: [
        { q: 'नेपालमा अटो डिलरहरूले किन अझै फ्ल्याट ब्याजदर प्रचार गर्छन्?', a: 'किनभने फ्ल्याट दर सुन्दा निकै सस्तो लाग्छ। १६% भन्नुभन्दा ८.५% भन्दा ग्राहक सजिलै आकर्षित हुन्छन् र डिलरले उच्च नाफा कमाउन पाउँछन्।' },
        { q: 'के नेपालका वाणिज्य बैंकहरूले फ्ल्याट दरमा व्यक्तिगत कर्जा दिन पाउँछन्?', a: 'पाउँदैनन्। नेपाल राष्ट्र बैंकको नियम अनुसार सबै बैंक तथा वित्तीय संस्थाले आधार दरमा प्रिमियम जोडेर घट्दो दरमै ऋण प्रवाह गर्नुपर्छ।' },
        { q: 'ऋण फ्ल्याट हो कि घट्दो, मोबाइलबाट कसरी तुरुन्त जाँच्ने?', a: 'ऋण रकम × ब्याजदर × वर्ष गर्नुहोस्। त्यसमा ऋण रकम जोडेर कुल महिनाले भाग गर्नुहोस्। यदि त्यो अंक डिलरले भनेको किस्तासँग दुरुस्त मिल्यो भने त्यो १००% फ्ल्याट रेट हो!' }
      ],
      takeaways: [
        'फ्ल्याट दर र घट्दो दरलाई सिधै तुलना नगर्नुहोस्; फ्ल्याट दर वास्तविक रूपमा १.८ गुणा महँगो हुन्छ।',
        '५ वर्षको लागि लिइएको ९% फ्ल्याट ऋणको वास्तविक ब्याजदर १६% भन्दा बढी पर्न जान्छ।',
        'नेपाल राष्ट्र बैंकले बैंकहरूलाई घट्दो दरमै ऋण दिन अनिवार्य गरेको छ; निजी डिलरको भ्रमबाट जोगिनुहोस्।',
        'कुनै पनि ऋण सम्झौतामा हस्ताक्षर गर्नुअघि आधिकारिक किस्ता तालिका (Amortization Schedule) माग्नुहोस्।',
        'ऋणको वास्तविक लागत पत्ता लगाउन risePaisa को EMI क्यालकुलेटर प्रयोग गर्नुहोस्।'
      ]
    }
  },

  // ── G2. PROPERTY VALUATION & MORTGAGE PROCESS ────────────────────
  'property-valuation-mortgage-process': {
    id: 'loan-mortgage-valuation',
    slug: 'property-valuation-mortgage-process',
    categorySlug: 'loans',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '11 min read', np: '११ मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Real Estate LTV Directives & Land Revenue Office (Malpot) procedures', np: 'नेपाल राष्ट्र बैंक धितो LTV मापदण्ड तथा मालपोत कार्यविधि अनुसार समीक्षित' },
    prerequisites: { en: 'Basic knowledge of land ownership documents (Lalpurja, Char-Killa) in Nepal', np: 'नेपालमा जग्गा स्वामित्व कागजात (लालपुर्जा, चारकिल्ला) को सामान्य ज्ञान' },
    en: {
      title: 'Property Valuation & Mortgage Process in Nepal: From Lalpurja to Loan Disbursal',
      oneLineSummary: 'Understand the fair market vs distress valuation math, NRB LTV limits, and the exact 8-step mortgage lien (Rokka) process.',
      summaryPoints: [
        'Banks in Nepal evaluate property using a weighted average of Government (Malpot) rate and Fair Market (Chalan-Chalti) rate.',
        'NRB caps Loan-to-Value (LTV) at 50% for real estate loans in Kathmandu Valley, 60% outside the Valley, and up to 70% for first-time home buyers up to NPR 2 Crore.',
        'Distress Sale Value (DSV), typically 80%-90% of Fair Market Value, is the actual base figure credit officers use.',
        'Essential legal prerequisites include Lalpurja, Blue-print/Trace map, Char-killa from Ward, and latest municipal tax receipts (Tiro tireko rasid).',
        'Disbursal occurs only after official mortgage lien registration (Dhitobandh Rokka) at the Land Revenue Office (Malpot Karyalaya).'
      ],
      whatIsThis: 'Property mortgage (घरजग्गा धितो कर्जा) is the legal process where a borrower pledges real estate as collateral to secure a bank loan. Before lending, the bank commissions an independent certified valuation engineer to inspect the land, access roads, boundaries, and building structures. The bank then applies strict Loan-to-Value (LTV) caps mandated by Nepal Rastra Bank to decide the maximum sanctionable loan amount.',
      whyItMatters: 'Many property owners believe that if their land sells for NPR 1 Crore in the open market, the bank will easily lend NPR 70 Lakh. In reality, because the government rate might be only NPR 30 Lakh and NRB limits LTV to 50% in Kathmandu Valley, the bank may only sanction NPR 35-42 Lakh! Understanding valuation mechanics prevents failed property deals, token money forfeitures, and loan rejection headaches.',
      howItWorks: [
        { step: 1, title: 'Document Preparation & Legal Verification', desc: 'Collect ownership certificate (Lalpurja), citizenship copy, certified trace map (Naksaha), ward-issued Char-killa, building completion certificate (Nirman Sampanna Pramanpatra if a house exists), and the latest local tax clearance receipt.' },
        { step: 2, title: 'Engineering Site Inspection & Field Valuation', desc: 'A bank-empaneled licensed engineer visits the plot to measure road width (minimum 8-10 ft motorable road required), check high-tension wires and river setbacks (khola maapdanda), and assess structure age.' },
        { step: 3, title: 'Valuation Report Calculation (Fair Market vs Govt)', desc: 'The engineer computes the Fair Market Value (FMV) and Government Value (Malpot rate). Most banks calculate Fair Value as: (2 × FMV + 1 × Govt Value) / 3 or apply a 70:30 weighting to determine Distress Sale Value.' },
        { step: 4, title: 'Bank Sanction, Malpot Rokka & Disbursal', desc: 'Credit committee approves loan under NRB LTV rules. A bank legal representative attends the Land Revenue Office (Malpot) to freeze the title (Dhitobandh Rokka), after which loan funds are disbursed.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Mortgage Valuation Breakdown: 4 Aana Land + House in Lalitpur',
        headers: ['Component', 'Engineer Assessment', 'Weighting / Policy', 'Bank Valuation Amount'],
        rows: [
          ['Commercial Fair Market Value', 'NPR 1,60,00,000', 'Current local transaction price', 'Assessed market baseline'],
          ['Government (Malpot) Valuation', 'NPR 60,00,000', 'Official land revenue registry rate', 'Statutory floor value'],
          ['Bank Assessed Fair Value', 'Weighted (70% Market + 30% Govt)', '(0.7 × 1.6 Cr) + (0.3 × 0.6 Cr)', 'NPR 1,30,00,000'],
          ['Distress Sale Value (DSV)', '85% of Bank Fair Value', 'Safety liquidation discount', 'NPR 1,10,50,000'],
          ['Maximum Loan Disbursable', '50% NRB LTV Limit (Valley)', '0.50 × NPR 1,10,50,000 DSV', 'NPR 55,25,000 Max Sanction']
        ]
      },
      nepalContext: 'Under current NRB monetary directives, real estate lending is tightly controlled to curb speculative asset bubbles. LTV for residential housing within Kathmandu Valley is capped at 50% (extended to 70% specifically for first-time home buyers with personal home loans up to NPR 2 Crore). Outside the Valley, LTV is permitted up to 60%. Furthermore, properties adjoining roads narrower than 8 feet, plots within river preservation green belts (Bagmati, Bishnumati, Dhobikhola buffer zones), or land under high-tension electrical cables are strictly unmortgageable by commercial banks.',
      practicalScenario: {
        persona: 'Sunita & Binod, 38, government officer & IT consultant in Imadol',
        income: 'Combined salary NPR 1,65,000 / month',
        scenarioText: 'They planned to take a home equity loan of NPR 80 Lakh to expand their business and finish upper floor construction on their 4-aana property. Local brokers told them: "Your house is worth 1.8 Crore, any bank will give you 1 Crore easily."',
        solutionText: 'The bank\'s engineering valuation came out to NPR 1.35 Crore (incorporating Malpot minimum valuation and 85% distress factor). Because the property is inside Kathmandu Valley, the NRB 50% LTV cap limited their maximum borrowing to NPR 67.5 Lakh. They adjusted their construction budget to NPR 65 Lakh instead of borrowing expensively from personal contacts.',
        metricHighlight: 'Avoided financing shortfall by understanding real LTV math beforehand'
      },
      formula: {
        name: 'Maximum Mortgage Loan (LTV) Formula in Nepal',
        equation: '\\text{Max Loan} = \\text{LTV}_{\\text{NRB}} \\times \\text{Distress Sale Value (DSV)}',
        variables: [
          { symbol: 'LTV_{\\text{NRB}}', name: 'NRB Mandated LTV Limit', desc: '50% in Kathmandu Valley, 60% outside Valley, or 70% for first-time home buyers (≤2 Cr).' },
          { symbol: 'DSV', name: 'Distress Sale Value', desc: 'Typically 80%-90% of weighted property valuation: [w_m(FMV) + w_g(Govt)].' }
        ],
        exampleCalculation: 'Property with DSV of NPR 1,20,00,000 in Kathmandu Valley (non-first-time): Max Loan = 50% × 1,20,00,000 = NPR 60,00,000. Even if borrower\'s salary can service 90 Lakh EMI, the bank cannot exceed 60 Lakh due to collateral LTV!',
        shortcutCalcSlug: 'calculators/home-loan',
        shortcutCalcName: 'Calculate Home Loan Eligibility'
      },
      commonMistakes: [
        { mistake: 'Assuming bank loan amount will be 70% of open market property price.', correct: 'Bank valuation blends government valuation and applies a distress haircut before applying LTV limits.', explanation: 'Banks protect against market crashes by basing calculations on Distress Sale Value rather than peak asking prices.' },
        { mistake: 'Overlooking municipal building completion certificates (Nirman Sampanna).', correct: 'Ensure building construction adheres strictly to municipal maps and possesses an updated Nirman Sampanna.', explanation: 'Unapproved extra floors or building setback violations prevent valuation engineers from valuing the house structure, counting only bare land.' },
        { mistake: 'Failing to verify road width and river setback (Khola Maapdanda) restrictions.', correct: 'Verify with Ward office that the access road is at least 8-10 feet wide and clear of municipal river setbacks.', explanation: 'Land falling within expanded river buffer zones cannot be registered under bank mortgage lien (Rokka) at Malpot.' }
      ],
      definitions: [
        { term: 'LTV (Loan-to-Value)', full: 'धितो र कर्जाको अनुपात', meaning: 'The percentage of a property\'s appraised collateral value that a bank is legally permitted to lend.' },
        { term: 'Malpot Rate', full: 'सरकारी न्यूनतम मूल्याङ्कन', meaning: 'The minimum statutory land value fixed annually by the District Land Revenue Office for tax and deed registration.' },
        { term: 'Distress Sale Value (DSV)', full: 'संकटकालीन बिक्री मूल्य', meaning: 'The discounted price a bank expects to recover if forced to auction the property rapidly under loan default.' },
        { term: 'Dhitobandh Rokka', full: 'धितोबन्ध रोक्का', meaning: 'The official legal freezing of property ownership rights at the Land Revenue Office preventing sale or transfer until the bank issues a release.' }
      ],
      faqs: [
        { q: 'Can I mortgage agricultural land (Krishi Jagga) for a home loan in Nepal?', a: 'Under the Land Use Act (Bhu-Upayog Ain), banks require land classification. Agricultural land has stricter fragmentation restrictions and lower LTV valuation compared to residential or commercial categorized plots.' },
        { q: 'How long does the mortgage valuation and loan approval process take in Nepali banks?', a: 'Typically 10 to 18 working days: 2-4 days for site engineering inspection, 3-5 days for credit risk analysis, and 2-3 days for Malpot Rokka mortgage registration.' },
        { q: 'What fees are involved during property mortgage processing?', a: 'Valuation fee (approx NPR 10,000-25,000), bank loan processing fee (0.5%-0.75% capped by NRB), Malpot mortgage registration fee (Tiro/Likhat dastoor), and CIB credit check fee.' }
      ],
      takeaways: [
        'Bank property valuation is significantly lower than open market asking price due to government rate weighting.',
        'NRB caps mortgage LTV at 50% inside Kathmandu Valley, 60% outside, and 70% for first-time buyers up to NPR 2 Cr.',
        'A house without a municipal building completion certificate (Nirman Sampanna) will only be valued as bare land.',
        'Access roads narrower than 8 feet or properties near river setbacks cannot be mortgaged.',
        'Final loan disbursal requires physical lien registration (Rokka) at the Land Revenue Office (Malpot).'
      ]
    },
    np: {
      title: 'नेपालमा घरजग्गा धितो मूल्याङ्कन र कर्जा प्रक्रिया: लालपुर्जादेखि रोक्का र ऋण भुक्तानीसम्म',
      oneLineSummary: 'बजार मूल्य बनाम सरकारी मूल्याङ्कन, राष्ट्र बैंकको LTV सीमा, र मालपोतमा धितोबन्ध रोक्का गर्ने ८-चरणीय प्रक्रिया बुझ्नुहोस्।',
      summaryPoints: [
        'नेपाली बैंकहरूले सरकारी (मालपोत) दर र बजार (चलनचल्ती) दरको भारित औसत निकालेर सम्पत्तिको मूल्याङ्कन गर्छन्।',
        'नेपाल राष्ट्र बैंकले काठमाडौँ उपत्यकाभित्र घरजग्गा कर्जामा LTV सीमा ५०%, उपत्यकाबाहिर ६०%, र पहिलो घर खरिदकर्तालाई रु. २ करोडसम्म ७०% तोकेको छ।',
        'संकटकालीन बिक्री मूल्य (Distress Sale Value), जुन बजार मूल्याङ्कनको करिब ८०% देखि ९०% हुन्छ, त्यसैलाई आधार मानेर कर्जा स्वीकृत गरिन्छ।',
        'आवश्यक कागजातमा लालपुर्जा, नापीको ट्रेस/ब्लुप्रिन्ट, वडाको चारकिल्ला, र चालू आर्थिक वर्षको तिरो तिरेको रसिद पर्छन्।',
        'मालपोत कार्यालयमा आधिकारिक धितोबन्ध रोक्का गरिसकेपछि मात्र बैंकले खातामा कर्जा रकम निकासा गर्दछ।'
      ],
      whatIsThis: 'घरजग्गा धितो कर्जा (Mortgage Loan) भनेको ऋणीले आफ्नो अचल सम्पत्ति बैंकको नाममा रोक्का राखेर ऋण लिने कानुनी प्रक्रिया हो। कर्जा दिनुअघि बैंकले आधिकारिक इन्जिनियर खटाएर जग्गा, बाटोको चौडाइ, चारकिल्ला र घरको संरचना निरीक्षण गराउँछ। त्यसपछि नेपाल राष्ट्र बैंकको LTV सीमाभित्र रहेर अधिकतम कर्जा रकम निर्धारण गरिन्छ।',
      whyItMatters: 'धेरैलाई लाग्छ कि आफ्नो जग्गा बजारमा १ करोडमा बिक्री हुन्छ भने बैंकले सोझै ७० लाख ऋण दिन्छ। तर सरकारी दर जम्मा ३०-४० लाख हुने र उपत्यकामा ५०% LTV सीमा लागु हुने हुँदा बैंकले मात्र ३५ देखि ४२ लाखसम्म मात्र कर्जा स्वीकृत गर्न सक्छ। यो नियम नबुझ्दा बैना फस्ने वा योजना अलपत्र पर्ने जोखिम हुन्छ।',
      howItWorks: [
        { step: 1, title: 'कागजात संकलन र कानुनी प्रमाणीकरण', desc: 'जग्गाधनी प्रमाणपुर्जा (लालपुर्जा), नागरिकता, नापीको ब्लुप्रिन्ट/ट्रेस, वडाको चारकिल्ला, घर भए निर्माण सम्पन्न प्रमाणपत्र, र चालू आवको मालपोत तिरो रसिद तयार गर्नुहोस्।' },
        { step: 2, title: 'इन्जिनियरिङ स्थलगत निरीक्षण', desc: 'बैंकले तोकेको भ्यालुएटर इन्जिनियरले जग्गामै पुगेर बाटोको चौडाइ (कम्तीमा ८-१० फिट), हाइटेन्सन लाइन, र खोलाको मापदण्ड जाँच गर्छन्।' },
        { step: 3, title: 'मूल्याङ्कन प्रतिवेदन (चलनचल्ती vs सरकारी दर)', desc: 'इन्जिनियरले चलनचल्ती मूल्य र सरकारी मूल्यको भारित औसत (प्रायः ७०:३०) निकालेर संकटकालीन बिक्री मूल्य (Distress Sale Value) निर्धारण गर्छन्।' },
        { step: 4, title: 'कर्जा स्वीकृति, मालपोत रोक्का र निकासा', desc: 'बैंकको जोखिम समितिले LTV हेरेर कर्जा स्वीकृत गर्छ। मालपोत कार्यालयमा गएर आधिकारिक धितोबन्ध रोक्का भएपछि रकम ऋणीको खातामा जम्मा हुन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'ललितपुरको ४ आना जग्गा र घरको धितो मूल्याङ्कन उदाहरण',
        headers: ['मूल्याङ्कन तत्व', 'इन्जिनियरको आँकडा', 'नीति / भार', 'बैंकले कायम गरेको रकम'],
        rows: [
          ['चलनचल्ती बजार मूल्य (Fair Market)', 'रु. १,६०,००,०००', 'स्थानीय किनबेचको औसत मूल्य', 'बजारको आधार रकम'],
          ['सरकारी (मालपोत) दर', 'रु. ६०,००,०००', 'रजिष्ट्रेसन प्रयोजनको सरकारी दर', 'न्यूनतम कानुनी दर'],
          ['भारित बैंक मूल्याङ्कन', '७०% बजार + ३०% सरकारी दर', '(०.७ × १.६ करोड) + (०.३ × ६० लाख)', 'रु. १,३०,००,०००'],
          ['संकटकालीन मूल्य (Distress Sale)', 'बैंक मूल्याङ्कनको ८५%', 'लिलामी सुरक्षा छुट (Haircut)', 'रु. १,१०,५०,०००'],
          ['अधिकतम कर्जा सीमा (Max Loan)', '५०% राष्ट्र बैंक LTV (उपत्यका)', '०.५० × रु. १,१०,५०,०००', 'रु. ५५,२५,००० अधिकतम कर्जा']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकको वर्तमान मौद्रिक नीति अनुसार घरजग्गा कर्जालाई कडाइका साथ नियमन गरिएको छ। काठमाडौँ उपत्यकाभित्र व्यक्तिगत आवासीय कर्जामा धितो मूल्यको अधिकतम ५०% (पहिलो पटक घर किन्नेलाई २ करोडसम्म ७०%) र उपत्यकाबाहिर ६०% सम्म मात्र ऋण दिन पाइन्छ। यसबाहेक ८ फिटभन्दा साँघुरो बाटो भएका, नदी किनाराको मापदण्ड (बगमती, विष्णुमती, धोबीखोला आदि) भित्र पर्ने वा हाइटेन्सन लाइनमुनि रहेका जग्गा बैंकमा धितो राख्न पाइँदैन।',
      practicalScenario: {
        persona: 'सुनिता र विनोद, ३८, इमाडोलका निजामती कर्मचारी र आइटी विज्ञ',
        income: 'संयुक्त मासिक तलब रु. १,६५,०००',
        scenarioText: 'उनीहरूले आफ्नो ४ आनाको घरजग्गा धितो राखेर घरको तला थप्न र व्यापार विस्तार गर्न रु. ८० लाख ऋण लिने सोचे। स्थानीय दलालले "तपाईंको घर १ करोड ८० लाखको हो, बैंकले १ करोड त सजिलै दिन्छ" भनेर उचाले।',
        solutionText: 'बैंकको इन्जिनियरले सरकारी दर र संकटकालीन छुट काटेर रु. १ करोड ३५ लाखको मूल्याङ्कन निकाल्यो। काठमाडौँ उपत्यकामा ५०% LTV सीमाका कारण बैंकले अधिकतम रु. ६७.५ लाख मात्र ऋण दिन सक्यो। उनीहरूले आफ्नो बजेट रु. ६५ लाखमा सीमित गरेर जोखिमपूर्ण व्यक्तिगत ऋण लिनबाट जोगिए।',
        metricHighlight: 'धितो मूल्याङ्कनको वास्तविक गणित बुझेर आर्थिक संकटबाट जोगिए'
      },
      formula: {
        name: 'नेपालमा अधिकतम धितो कर्जा (LTV) सूत्र',
        equation: '\\text{Max Loan} = \\text{LTV}_{\\text{NRB}} \\times \\text{Distress Sale Value (DSV)}',
        variables: [
          { symbol: 'LTV_{\\text{NRB}}', name: 'राष्ट्र बैंकको LTV सीमा', desc: 'उपत्यकामा ५०%, बाहिर ६०%, पहिलो घर कर्जामा ७०%।' },
          { symbol: 'DSV', name: 'संकटकालीन बिक्री मूल्य', desc: 'भारित मूल्याङ्कनको ८०% देखि ९०% सम्म।' }
        ],
        exampleCalculation: 'काठमाडौँ उपत्यकामा रु. १,२०,००,००० DSV भएको घरजग्गामा: अधिकतम ऋण = ५०% × १,२०,००,००० = रु. ६०,००,०००। ऋणीको तलबले ९० लाखको किस्ता धान्न सके पनि धितोको सीमाका कारण ६० लाखभन्दा बढी ऋण पाइँदैन!',
        shortcutCalcSlug: 'calculators/home-loan',
        shortcutCalcName: 'गृह कर्जा योग्यता हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'बजारमा जतिमा जग्गा किनबेच हुन्छ, त्यसको ७०% ऋण आउँछ भन्ठान्नु।', correct: 'बैंकले सरकारी दर जोडेर र संकटकालीन छुट (Distress Haircut) काटेर मात्र कर्जा निकाल्छ।', explanation: 'बजार भाउ घटे पनि बैंक सुरक्षित रहन सरकारी दर र बजार दरको भारित औसत प्रयोग गर्छ।' },
        { mistake: 'घरको निर्माण सम्पन्न प्रमाणपत्र (Nirman Sampanna) बिना पूरै ऋण पाइन्छ सोच्नु।', correct: 'नक्सा पास र निर्माण सम्पन्न नभएका घरलाई बैंकले मूल्याङ्कनमा जोड्दैन, केवल जग्गाको मात्र भाउ दिन्छ।', explanation: 'मापदण्ड मिचेर बनाएका संरचना कानुनी रूपमा अवैध मानिने हुँदा इन्जिनियरले शून्य मूल्याङ्कन गर्छन्।' },
        { mistake: 'बाटोको चौडाइ र खोलाको मापदण्ड ख्याल नगरी जग्गा धितो राख्न खोज्नु।', correct: 'वडा कार्यालयबाट बाटो कम्तीमा ८-१० फिट भएको र खोलाको मापदण्डमा नपरेको यकिन गर्नुहोस्।', explanation: 'मापदण्ड नपुगेका जग्गा मालपोत कार्यालयमा बैंकको नाममा धितोबन्ध रोक्का हुन सक्दैनन्।' }
      ],
      definitions: [
        { term: 'LTV (Loan-to-Value)', full: 'धितो कर्जा अनुपात', meaning: 'धितो राखिएको सम्पत्तिको मूल्याङ्कन गरिएको रकमको कति प्रतिशतसम्म ऋण दिन पाइन्छ भन्ने कानुनी सीमा।' },
        { term: 'मालपोत दर (Malpot Rate)', full: 'सरकारी न्यूनतम मूल्याङ्कन', meaning: 'जिल्ला मालपोत कार्यालयले रजिस्ट्रेसन र कर प्रयोजनका लागि वार्षिक रूपमा तोक्ने जग्गाको न्यूनतम दर।' },
        { term: 'संकटकालीन मूल्य (DSV)', full: 'Distress Sale Value', meaning: 'ऋणीले कर्जा नतिरेमा लिलाम बिक्री गर्दा तत्काल उठ्न सक्ने अनुमानित सुरक्षित मूल्य।' },
        { term: 'धितोबन्ध रोक्का (Rokka)', full: 'अचल सम्पत्ति रोक्का प्रक्रिया', meaning: 'मालपोत कार्यालयमा गएर ऋण चुक्ता नभएसम्म जग्गाधनीले सो सम्पत्ति अरूलाई बेच्न वा हस्तान्तरण गर्न नसक्ने गरी बैंकको नाममा रोक्ने काम।' }
      ],
      faqs: [
        { q: 'के नेपालमा कृषि जग्गा धितो राखेर घर कर्जा लिन सकिन्छ?', a: 'भू-उपयोग ऐन अनुसार जग्गाको वर्गीकरण अनिवार्य छ। आवासीय वा व्यावसायिक जग्गाको तुलनामा कृषि जग्गाको मूल्याङ्कन र कित्ताकाट नियम निकै कडा हुन्छ।' },
        { q: 'नेपाली बैंकमा जग्गा धितो राखेर ऋण पास हुन कति दिन लाग्छ?', a: 'सामान्यतया १० देखि १८ कार्यदिन लाग्छ: इन्जिनियरको निरीक्षणमा २-४ दिन, कर्जा स्वीकृतिमा ३-५ दिन र मालपोत रोक्कामा २-३ दिन।' },
        { q: 'धितो मूल्याङ्कन गर्दा के-कस्ता शुल्कहरू तिर्नुपर्छ?', a: 'इन्जिनियरिङ मूल्याङ्कन शुल्क (करिब रु. १०,०००-२५,०००), बैंक कर्जा सेवा शुल्क (०.५% देखि ०.७५%), मालपोत रोक्का दस्तुर, र कर्जा सूचना केन्द्र (CIB) शुल्क।' }
      ],
      takeaways: [
        'बैंकको मूल्याङ्कन बजार भाउभन्दा निकै कम हुन्छ किनभने यसमा सरकारी मालपोत दरलाई पनि जोडिएको हुन्छ।',
        'राष्ट्र बैंकको नियम अनुसार काठमाडौँ उपत्यकामा ५०% र बाहिर ६०% सम्म मात्र LTV कर्जा पाइन्छ।',
        'निर्माण सम्पन्न प्रमाणपत्र नभएका घरलाई बैंकले केवल खाली जग्गाको रूपमा मात्र मूल्याङ्कन गर्छ।',
        '८ फिटभन्दा साँघुरो बाटो भएका वा नदी मापदण्डभित्र परेका जग्गा बैंकमा धितो राख्न पाइँदैन।',
        'मालपोत कार्यालयमा आधिकारिक धितोबन्ध रोक्का भएपछि मात्र बैंकले खातामा पैसा पठाउँछ।'
      ]
    }
  },

  // ── G3. LOAN PREPAYMENT MATH & SAVINGS ────────────────────────────
  'loan-prepayment-math-savings': {
    id: 'loan-prepayment-math',
    slug: 'loan-prepayment-math-savings',
    categorySlug: 'loans',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against Amortization Schedules and Banking Prepayment Mathematics FY 2081/82', np: 'किस्ता तालिका तथा कर्जा अग्रिम भुक्तानी वित्तीय गणित २०८१/८२ अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of reducing balance EMI and loan principal', np: 'घट्दो दर EMI र ऋणको साँवाको आधारभूत बुझाइ' },
    en: {
      title: 'Loan Prepayment Math in Nepal: How an Extra NPR 5 Lakh Saves NPR 18 Lakh',
      oneLineSummary: 'Every single rupee of lump-sum prepayment goes 100% to reduce principal, shaving years off your mortgage and saving massive interest.',
      summaryPoints: [
        'In the early years of a 20-year home loan, up to 75%-85% of your monthly EMI pays pure interest, not principal.',
        'A lump-sum principal prepayment bypasses future interest compounding entirely, going 100% toward shrinking the debt core.',
        'Prepaying just NPR 5 Lakh on a NPR 50 Lakh 20-year loan at 11% in Year 3 cuts over 5.5 years off the tenure.',
        'The interest saved from that single NPR 5 Lakh prepayment exceeds NPR 18 Lakh over the life of the loan.',
        'Borrowers can choose between reducing their loan tenure (cutting years of debt) or reducing their monthly EMI amount.'
      ],
      whatIsThis: 'Loan prepayment (कर्जाको आंशिक अग्रिम भुक्तानी) means paying an additional lump sum directly toward your loan\'s principal balance outside your regular monthly EMI. Because commercial bank loans in Nepal use reducing balance amortization, shrinking the principal immediately reduces the base upon which all future monthly interest is calculated.',
      whyItMatters: 'On a standard NPR 50 Lakh, 20-year home loan at 11% interest, your monthly EMI is NPR 51,609. Over 20 years, you repay a staggering NPR 1.23 Crore - paying NPR 73.8 Lakh in pure interest! By making small lump-sum prepayments whenever you receive festive bonuses, savings, or business profits, you can destroy this interest burden and become debt-free a decade earlier.',
      howItWorks: [
        { step: 1, title: 'Analyze the Front-Loaded Amortization Curve', desc: 'In year 1 of your 20-year loan, of your NPR 51,609 monthly EMI, roughly NPR 45,800 is interest and only NPR 5,800 is principal. Lenders collect their interest profit first.' },
        { step: 2, title: 'Execute a Direct Principal Prepayment', desc: 'Deposit a lump sum (e.g., NPR 3-5 Lakh) into your loan account with a written instruction to the branch manager: "Credit directly to Principal Reduction (साँवा कट्टा)".' },
        { step: 3, title: 'Choose Tenure Reduction vs EMI Reduction', desc: 'Keep your monthly EMI unchanged and request the bank to shorten the loan tenure. This maximizes total interest savings compared to lowering the EMI.' },
        { step: 4, title: 'Receive the Recalculated Amortization Schedule', desc: 'Inspect your updated repayment schedule to verify that outstanding principal dropped immediately by the exact prepaid amount and remaining months shortened.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Impact of a Single NPR 5 Lakh Prepayment in Year 3 (NPR 50 Lakh Loan, 20 Yrs at 11%)',
        headers: ['Loan Metric', 'Standard Course (No Prepayment)', 'With NPR 5 Lakh Prepayment in Yr 3', 'Total Financial Benefit'],
        rows: [
          ['Original Principal', 'NPR 50,00,000', 'NPR 50,00,000', 'Same starting capital'],
          ['Total Repayment Tenure', '20 Years (240 Months)', '14 Years 4 Months (172 Months)', 'Debt-free 5 Years 8 Months sooner'],
          ['Total Interest Paid', 'NPR 73,86,160', 'NPR 55,24,300', 'Direct Interest Saved: NPR 18,61,860'],
          ['Net Return on Investment', '0%', '372% ROI on NPR 5L', 'Saved NPR 18.6L from NPR 5L invested'],
          ['Psychological Freedom', '20 years under bank lien', 'Free Lalpurja in Year 14', 'Ownership reclaimed 68 months early']
        ]
      },
      nepalContext: 'Under Nepal Rastra Bank directives, banks are barred from charging exorbitant prepayment penalties on personal residential home loans up to NPR 50 Lakh (often zero or capped at 0.15% to 0.75% after a short initial period). Many borrowers receive annual festival allowances (Dashain bonus), gratuity, or dividends from investments and leave the cash in low-interest savings accounts earning 3%-4%, while paying 10%-12% on their home loan. Funneling excess cash into loan prepayment yields a guaranteed, tax-free return equal to your loan interest rate.',
      practicalScenario: {
        persona: 'Bikash, 36, senior software engineer in Pokhara',
        income: 'NPR 1,50,000 / month',
        scenarioText: 'Bikash took an NPR 45 Lakh home loan for 15 years at 10.5% interest (EMI: NPR 49,830). In Year 2, he received a performance bonus of NPR 4 Lakh and considered buying a new motorcycle.',
        solutionText: 'Instead of buying a depreciating bike, he instructed his bank to apply the NPR 4 Lakh to his home loan principal. That single prepayment shortened his 15-year loan by 2 years and 7 months, saving him NPR 11,40,000 in future interest payments. He realized prepayment was the highest-yielding risk-free investment available in Nepal.',
        metricHighlight: 'Saved NPR 11,40,000 in interest and shaved 31 months off his loan'
      },
      formula: {
        name: 'Total Interest Savings from Principal Prepayment',
        equation: '\\text{Savings} = \\sum_{t=1}^{T_{\\text{orig}}} \\text{EMI} - \\left( \\sum_{t=1}^{T_{\\text{new}}} \\text{EMI} + P_{\\text{prep}} \\right)',
        variables: [
          { symbol: 'T_{\\text{orig}}', name: 'Original Tenure (Months)', desc: 'Initial repayment duration, e.g., 240 months.' },
          { symbol: 'T_{\\text{new}}', name: 'New Reduced Tenure (Months)', desc: 'Shortened duration after applying prepayment to principal.' },
          { symbol: 'P_{\\text{prep}}', name: 'Lump-Sum Prepayment Amount', desc: 'E.g., NPR 5,00,000 paid directly toward principal.' }
        ],
        exampleCalculation: 'Original 240 months × NPR 51,609 = NPR 1,23,86,160. New 172 months × NPR 51,609 + NPR 5,00,000 prepay = NPR 93,76,748 + NPR 5,00,000 = NPR 98,76,748. Total Interest Saved = NPR 1,23,86,160 - NPR 98,76,748 = NPR 25,09,412 (over entire term)!',
        shortcutCalcSlug: 'calculators/loan-prepayment',
        shortcutCalcName: 'Calculate Prepayment Savings'
      },
      commonMistakes: [
        { mistake: 'Choosing lower monthly EMI instead of tenure reduction when prepaying.', correct: 'Always instruct the bank to shorten the loan tenure while keeping EMI constant.', explanation: 'Shortening tenure compounds interest savings dramatically, whereas lowering EMI prolongs debt exposure.' },
        { mistake: 'Depositing cash into the savings account without an explicit letter to reduce principal.', correct: 'Submit a formal written application specifying that the funds are for "Principal Curtailment" (साँवा कट्टा).', explanation: 'Without instructions, banks may treat extra funds as advance EMIs, holding cash without stopping interest accrual.' },
        { mistake: 'Keeping large cash balances in savings at 3.5% while servicing a home loan at 11%.', correct: 'Direct excess idle savings above your 6-month emergency reserve into loan principal prepayment.', explanation: 'Paying off an 11% loan gives an instant, risk-free, 100% tax-free equivalent return of 11%.' }
      ],
      definitions: [
        { term: 'Principal Prepayment', full: 'साँवा कट्टा (अग्रिम भुक्तानी)', meaning: 'Payment made directly toward reducing the principal loan balance ahead of the agreed amortization schedule.' },
        { term: 'Amortization Front-Loading', full: 'सुरुवाती ब्याज भार', meaning: 'The banking mechanism where interest dominates early monthly installments, and principal repayment speeds up only near the end.' },
        { term: 'Tenure Curtailment', full: 'कर्जा अवधि कटौती', meaning: 'Reducing the total number of remaining monthly installments while maintaining the existing monthly EMI amount.' },
        { term: 'Risk-Free Return', full: 'जोखिमरहित प्रतिफल', meaning: 'The concept that paying off debt eliminates interest cost guaranteed, functioning like a guaranteed investment yield.' }
      ],
      faqs: [
        { q: 'Is it better to invest extra money in mutual fund SIP or prepay my home loan in Nepal?', a: 'If your home loan interest rate is high (11%-13%), prepayment provides a guaranteed 11%-13% tax-free return. If loan rates are low (8%-9%) and mutual funds yield 13%-15% long-term, split 50:50 between SIP and prepayment.' },
        { q: 'How often can I make prepayments to my bank in Nepal?', a: 'Most commercial banks allow partial prepayments once or twice a fiscal year without penalty, provided each prepayment meets a minimum threshold (typically NPR 1 Lakh to NPR 2 Lakh).' },
        { q: 'Does prepayment reduce my income tax deduction benefit in Nepal?', a: 'Under Nepal tax law, there is no direct income tax deduction for residential home loan interest (unlike India). Therefore, you gain zero tax advantage by staying in debt in Nepal!' }
      ],
      takeaways: [
        'Early monthly EMIs are mostly interest; principal prepayments bypass this compounding trap.',
        'A single NPR 5 Lakh prepayment early in a 20-year loan can save over NPR 18 Lakh in interest.',
        'Always request tenure reduction rather than lowering your monthly EMI to maximize savings.',
        'Submit a written letter specifying "Principal Reduction" (साँवा कट्टा) so funds are not held as advance EMIs.',
        'Prepaying an 11% loan provides a guaranteed, 100% tax-free return of 11%.'
      ]
    },
    np: {
      title: 'नेपालमा ऋणको अग्रिम भुक्तानी (Prepayment) को गणित: ५ लाख बढी तिर्दा १८ लाख कसरी जोगिन्छ?',
      oneLineSummary: 'ऋणको साँवा घटाउन तिरिएको एक-एक रूपैयाँले भविष्यको ब्याज पूर्ण रूपमा रोक्छ र २० वर्षे कर्जालाई वर्षौँ अगाडि चुक्ता गर्छ।',
      summaryPoints: [
        '२० वर्षे घर कर्जाको सुरुवाती वर्षहरूमा तपाईंको मासिक किस्ताको ७५% देखि ८५% सम्म रकम केवल ब्याजमै जान्छ।',
        'एकमुष्ट साँवा कट्टा गर्दा त्यो रकम सिधै ऋणको मुख्य भागबाट घट्छ र भविष्यको चक्रवर्ती ब्याजलाई रोकिदिन्छ।',
        '११% ब्याजदरको ५० लाखको कर्जामा तेस्रो वर्षमा रु. ५ लाख अग्रिम तिर्दा ऋणको अवधि ५.५ वर्षले छोटिन्छ।',
        'त्यो एउटै ५ लाखको भुक्तानीले पूरै अवधिभरमा १८ लाख रुपैयाँभन्दा बढी ब्याज बचत गराउँछ।',
        'ऋणीले मासिक किस्ता (EMI) घटाउने वा ऋणको अवधि (Tenure) छोट्याउने मध्ये एउटा रोज्न पाउँछन्।'
      ],
      whatIsThis: 'ऋणको अग्रिम भुक्तानी (Loan Prepayment / साँवा कट्टा) भनेको नियमित मासिक किस्ताबाहेक थप एकमुष्ट रकम सिधै ऋणको साँवा घटाउन बैंकमा बुझाउनु हो। नेपालका वाणिज्य बैंकहरूले घट्दो दर (Reducing Balance) मा काम गर्ने हुनाले साँवा घट्नेबित्तिकै बाँकी पूरै अवधिको ब्याज तुरुन्त घट्न पुग्छ।',
      whyItMatters: 'यदि तपाईंले ११% ब्याजदरमा २० वर्षको लागि ५० लाखको घर कर्जा लिनुभएको छ भने मासिक किस्ता रु. ५१,६०९ हुन्छ। २० वर्षमा तपाईंले कुल रु. १ करोड २३ लाख बैंकलाई बुझाउनुहुन्छ - अर्थात् रु. ७३.८ लाख त केवल ब्याज मात्र! चाडबाडको बोनस वा व्यापारिक नाफाबाट बेलाबेलामा केही लाख साँवा कट्टा गर्दा यो ब्याजको भारी आधा घटाउन सकिन्छ।',
      howItWorks: [
        { step: 1, title: 'सुरुवाती किस्ताको ब्याज भार बुझ्नुहोस्', desc: 'पहिलो वर्षमा तपाईंले तिर्ने रु. ५१,६०९ किस्तामध्ये करिब रु. ४५,८०० ब्याजमा जान्छ र मात्र रु. ५,८०० साँवा घट्छ। बैंकले सुरुमा आफ्नो ब्याज पहिले उठाउँछ।' },
        { step: 2, title: 'सिधै साँवा कट्टा (Principal Curtailment) गर्नुहोस्', desc: 'बचत भएको एकमुष्ट रकम (जस्तै ३ देखि ५ लाख) बैंकमा जम्मा गर्नुहोस् र "यो रकम सिधै साँवा कट्टामा राखिदिनुहोस्" भनी निवेदन दिनुहोस्।' },
        { step: 3, title: 'किस्ता घटाउनुको साटो अवधि छोट्याउनुहोस्', desc: 'मासिक किस्ता पुरानै कायम राख्नुहोस् र ऋणको अवधि छोट्याउन लगाउनुहोस्। यसले ब्याज बचतलाई अत्यधिक गुणात्मक बनाउँछ।' },
        { step: 4, title: 'परिमार्जित किस्ता तालिका लिनुहोस्', desc: 'बैंकबाट नयाँ किस्ता तालिका मागेर साँवा कट्टा भएको र ऋण सकिने मिति छोटिएको यकिन गर्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'तेस्रो वर्षमा रु. ५ लाख अग्रिम बुझाउँदाको प्रभाव (५० लाख ऋण, ११% ब्याज, २० वर्ष)',
        headers: ['कर्जा सूचक', 'सामान्य अवस्था (Prepayment विना)', 'वर्ष ३ मा ५ लाख साँवा कट्टा गर्दा', 'वास्तविक आर्थिक फाइदा'],
        rows: [
          ['सुरुवाती ऋण साँवा', 'रु. ५०,००,०००', 'रु. ५०,००,०००', 'सुरुवाती पुँजी बराबर'],
          ['कुल ऋण भुक्तानी अवधि', '२० वर्ष (२४० महिना)', '१४ वर्ष ४ महिना (१७२ महिना)', '५ वर्ष ८ महिना अगाडि नै ऋणमुक्त'],
          ['कुल बुझाउनुपर्ने ब्याज', 'रु. ७३,८६,१६०', 'रु. ५५,२४,३००', 'प्रत्यक्ष ब्याज बचत: रु. १८,६१,८६०'],
          ['लगानीको प्रतिफल (ROI)', '०%', '५ लाखमा ३७२% प्रतिफल', '५ लाख तिरेर १८.६ लाख ब्याज जोगियो'],
          ['मानसिक स्वतन्त्रता', '२० वर्षसम्म धितोको चिन्ता', '१४ वर्षमै लालपुर्जा हातमा', '६८ महिना अगाडि घर पूर्ण आफ्नो']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकको निर्देशिका अनुसार ५० लाख रुपैयाँसम्मको व्यक्तिगत आवासीय घर कर्जामा बैंकहरूले चर्को अग्रिम भुक्तानी शुल्क (Prepayment Penalty) लिन पाउँदैनन्। नेपाली समाजमा दसैँको बोनस, उपदान वा जग्गाको सानो अंश बिक्रीबाट आएको रकम प्रायः ३-४% ब्याज दिने बचत खातामै थन्किन्छ, जबकि घर कर्जामा १०-१२% ब्याज तिरिरहेका हुन्छन्। त्यो पैसा सिधै ऋणको साँवा कट्टा गर्दा १०-१२% को करमुक्त र जोखिमरहित प्रतिफल प्राप्त हुन्छ।',
      practicalScenario: {
        persona: 'बिकेश, ३६, पोखराका सिनियर सफ्टवेयर इन्जिनियर',
        income: 'मासिक तलब रु. १,५०,०००',
        scenarioText: 'बिकेशले १०.५% ब्याजमा १५ वर्षका लागि ४५ लाखको घर कर्जा लिएका थिए (मासिक किस्ता: रु. ४९,८३०)। दोस्रो वर्षमा उनले कम्पनीबाट रु. ४ लाख कार्यसम्पादन बोनस पाए र नयाँ मोटरसाइकल फेर्ने सोचे।',
        solutionText: 'उनले मोटरसाइकल नकिनी त्यो ४ लाख बैंकमा लगेर घर कर्जाको साँवा कट्टा गरिदिए। त्यो एउटै निर्णयले उनको १५ वर्षे ऋण २ वर्ष ७ महिना अगावै सकिने भयो र भविष्यमा तिर्नुपर्ने ब्याज रु. ११,४०,००० जोगियो।',
        metricHighlight: 'रु. ११,४०,००० ब्याज बचत र ३१ महिना अगाडि नै ऋणबाट मुक्ति'
      },
      formula: {
        name: 'अग्रिम साँवा भुक्तानीबाट हुने कुल ब्याज बचत सूत्र',
        equation: '\\text{Savings} = \\sum_{t=1}^{T_{\\text{orig}}} \\text{EMI} - \\left( \\sum_{t=1}^{T_{\\text{new}}} \\text{EMI} + P_{\\text{prep}} \\right)',
        variables: [
          { symbol: 'T_{\\text{orig}}', name: 'साविक कुल महिना', desc: 'सुरुको ऋण अवधि, जस्तै: २४० महिना।' },
          { symbol: 'T_{\\text{new}}', name: 'नयाँ छोटिएको महिना', desc: 'साँवा कट्टापछि बाँकी रहने महिना संख्या।' },
          { symbol: 'P_{\\text{prep}}', name: 'अग्रिम बुझाइएको साँवा', desc: 'जस्तै: रु. ५,००,००० एकमुष्ट भुक्तानी।' }
        ],
        exampleCalculation: 'साविक २४० महिना × रु. ५१,६०९ = रु. १,२३,८६,१६०। नयाँ १७२ महिना × रु. ५१,६०९ + रु. ५,००,००० = रु. ९८,७६,७४८। कुल ब्याज बचत = रु. १,२३,८६,१६० - रु. ९८,७६,७४८ = रु. २५,०९,४१२!',
        shortcutCalcSlug: 'calculators/loan-prepayment',
        shortcutCalcName: 'अग्रिम भुक्तानी बचत हिसाब गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'साँवा कट्टा गर्दा अवधि छोट्याउनुको साटो मासिक किस्ता (EMI) घटाउन रोज्नु।', correct: 'मासिक किस्ता पुरानै राखेर ऋणको अवधि घटाउन बैंकलाई निर्देशन दिनुहोस्।', explanation: 'अवधि घटाउँदा चक्रवर्ती ब्याजको मार तुरुन्त रोकिन्छ, तर किस्ता मात्र घटाउँदा ऋण लामो समय तन्किरहन्छ।' },
        { mistake: 'बैंकमा निवेदन नदिई सिधै बचत खातामा पैसा छाडिदिनु।', correct: 'शाखा प्रबन्धकलाई स्पष्ट पत्र लेखेर "साँवा कट्टा" प्रयोजनका लागि रकम कट्टा गर्न लगाउनुहोस्।', explanation: 'निवेदन नदिएमा बैंकले त्यसलाई अग्रिम किस्ताको रूपमा होल्ड गरिदिन्छ र साँवा घट्दैन।' },
        { mistake: '११% को घर कर्जा तिर्न बाँकी छँदै बचत खातामा ३.५% ब्याजमा लाखौँ रुपैयाँ राखिराख्नु।', correct: '६ महिनाको आपतकालीन कोष बाहेकको अतिरिक्त बचत सिधै ऋण तिर्न प्रयोग गर्नुहोस्।', explanation: '११% को ऋण तिर्नु भनेको शतप्रतिशत ग्यारेन्टीका साथ ११% करमुक्त आम्दानी गर्नु सरह हो।' }
      ],
      definitions: [
        { term: 'साँवा कट्टा (Prepayment)', full: 'अग्रिम साँवा भुक्तानी', meaning: 'तोकिएको मासिक किस्ताभन्दा बाहेक थप रकम सिधै ऋणको साँवा घटाउन बैंकमा बुझाउने प्रक्रिया।' },
        { term: 'सुरुवाती ब्याज भार (Front-Loading)', full: 'Amortization Bias', meaning: 'ऋणको सुरुवाती वर्षहरूमा मासिक किस्ताको अधिकांश हिस्सा ब्याजमा जाने बैंकिङ संरचना।' },
        { term: 'अवधि कटौती (Tenure Reduction)', full: 'ऋण समय छोट्याउने विधि', meaning: 'मासिक किस्ता नघटाई ऋण चुक्ता हुने वर्ष वा महिनाको संख्या घटाउने प्रक्रिया।' },
        { term: 'जोखिमरहित प्रतिफल (Risk-Free Return)', full: 'निश्चित वित्तीय बचत', meaning: 'ऋण चुक्ता गरेर ब्याज जोगाउनु कुनै पनि जोखिम विना प्राप्त हुने निश्चित आम्दानी सरह मानिन्छ।' }
      ],
      faqs: [
        { q: 'नेपालमा घर कर्जा छिटो तिर्नु राम्रो कि म्युचुअल फन्ड SIP मा लगानी गर्नु?', a: 'यदि कर्जाको ब्याजदर उच्च (११%-१३%) छ भने साँवा कट्टा गर्नु नै उत्तम हो किनकि यो ११%-१३% को करमुक्त ग्यारेन्टी प्रतिफल हो। ब्याजदर सस्तो (८%-९%) हुँदा भने ५०% रकम ऋण तिर्न र ५०% SIP मा लगाउन सकिन्छ।' },
        { q: 'नेपाली बैंकमा वर्षमा कति पटकसम्म अग्रिम साँवा कट्टा गर्न पाइन्छ?', a: 'अधिकांश बैंकहरूले आर्थिक वर्षमा १ देखि २ पटकसम्म विना कुनै जरिवाना न्यूनतम रु. १ देखि २ लाखसम्मको साँवा कट्टा गर्न अनुमति दिन्छन्।' },
        { q: 'के नेपालमा ऋण छिटो तिर्दा आयकर छुटमा नोक्सान हुन्छ?', a: 'नेपालको आयकर ऐन अनुसार व्यक्तिगत आवासीय घर कर्जाको ब्याजमा कुनै सिधा कर छुट पाइँदैन (भारत जस्तो होइन)। त्यसैले नेपालमा ऋण बोकिराख्दा कुनै कर फाइदा हुँदैन!' }
      ],
      takeaways: [
        'सुरुवाती किस्ताहरूमा अधिकांश रकम ब्याजमै जान्छ; साँवा कट्टाले यो पासोलाई ध्वस्त पार्छ।',
        '२० वर्षे कर्जाको सुरुवाती वर्षहरूमा ५ लाख साँवा कट्टा गर्दा १८ लाखभन्दा बढी ब्याज जोगिन्छ।',
        'बचतलाई अत्यधिक बनाउन किस्ता रकम घटाउनुको साटो ऋण अवधि (Tenure) छोट्याउनुहोस्।',
        'बैंकमा जाँदा "साँवा कट्टा" भनेर लिखित निवेदन दिन नबिर्सनुहोस्।',
        '११% को कर्जा तिर्नु भनेको जोखिम विना ११% करमुक्त प्रतिफल हात पार्नु हो।'
      ]
    }
  },

  // ── G4. PREPAYMENT PENALTIES & NRB RULES ─────────────────────────
  'prepayment-penalties-nrb-rules': {
    id: 'loan-nrb-prepayment-rules',
    slug: 'prepayment-penalties-nrb-rules',
    categorySlug: 'loans',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Reviewed against NRB Unified Directives on Fees, Penalties & Loan Swap Limits', np: 'नेपाल राष्ट्र बैंक सेवा शुल्क तथा कर्जा स्वाप सम्बन्धी एकीकृत निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'Understanding of loan prepayment and interest rates', np: 'कर्जा अग्रिम भुक्तानी र ब्याजदरको सामान्य जानकारी' },
    en: {
      title: 'Prepayment Penalties & NRB Rules in Nepal: Switching Banks Without Fees',
      oneLineSummary: 'Know your legal rights under NRB directives - banks cannot charge arbitrary penalty fees on retail loans or loan swaps.',
      summaryPoints: [
        'Nepal Rastra Bank (NRB) strictly regulates prepayment charges and loan takeover (swap) fees to protect consumers.',
        'For personal residential home loans up to NPR 50 Lakh, prepayment charges are capped (maximum 0.15% to 0.75%, or zero after 2 years).',
        'When switching a loan to a cheaper bank (Loan Swap / Takeover), the exiting bank cannot charge unreasonable punitive fees.',
        'Calculate the Break-Even Horizon: switching costs (processing fee + valuation + Malpot rokka) must be recovered by interest savings within 6-12 months.',
        'Always obtain an official No Objection Certificate (NOC) and loan statement before initiating a takeover.'
      ],
      whatIsThis: 'Prepayment penalties and loan takeover rules govern the fees a bank can charge when you pay off a loan early or transfer (swap) your loan to another financial institution offering a lower interest rate. Nepal Rastra Bank has capped these fees in its Unified Directives to prevent banks from locking borrowers into uncompetitive, high-interest contracts.',
      whyItMatters: 'During tight liquidity periods in Nepal, bank interest rates often surge from 9% to 13.5%. Later, when liquidity eases and competitor banks drop rates to 9.5%, your existing bank may stubbornly keep your rate at 11.5%. If you transfer a 50 Lakh mortgage to a cheaper bank, you save 2% annually - NPR 1,00,000 every single year! Understanding NRB fee limits ensures your existing bank doesn\'t block you with illegal penalty charges.',
      howItWorks: [
        { step: 1, title: 'Check NRB Directives on Prepayment Fees', desc: 'Verify the statutory fee cap. Under current NRB rules, personal retail loans below NPR 50 Lakh carry capped prepayment charges (between 0.15% and 0.75% depending on loan vintage, and 0% under specified conditions).' },
        { step: 2, title: 'Calculate the Total Loan Swap Switching Costs', desc: 'Sum up the new bank\'s loan processing fee (capped at 0.5%-0.75% by NRB), property re-valuation fee (~NPR 15,000), Malpot lien release and new mortgage registration charges (~NPR 10,000).' },
        { step: 3, title: 'Determine the Break-Even Horizon', desc: 'Divide total switching costs by monthly interest savings. If switching costs total NPR 50,000 and your new interest rate saves NPR 8,000/month, your break-even point is 6.25 months. Any tenure beyond 6 months is pure profit!' },
        { step: 4, title: 'Execute Bank Takeover Seamlessly', desc: 'The new bank issues a Takeover Sanction Letter and delivers a manager\'s cheque directly to the old bank. The old bank releases the property title deeds (Lalpurja) to the new bank\'s legal representative at Malpot.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Loan Swap Economics: Transferring NPR 40 Lakh Mortgage (12.0% Old Bank → 9.75% New Bank)',
        headers: ['Switching Cost Item', 'Cost / Fee Amount', 'Monthly Financial Saving', 'Break-Even Calculation'],
        rows: [
          ['Old Bank Prepayment/Exit Fee', 'NPR 10,000 (capped at 0.25%)', 'Old Interest: NPR 40,000/mo', 'Rate drops by 2.25%'],
          ['New Bank Processing Fee', 'NPR 20,000 (0.50% promo rate)', 'New Interest: NPR 32,500/mo', 'Monthly saving: NPR 7,500'],
          ['Valuation & Legal Fees', 'NPR 15,000 (re-inspection)', 'Annual saving: NPR 90,000', 'Total costs = NPR 50,000'],
          ['Malpot Registration & Rokka', 'NPR 5,000 (statutory fee)', '5-year saving: NPR 4,50,000', 'Break-even: 6.6 Months'],
          ['Total Investment to Switch', 'NPR 50,000 Total Outlay', 'Net 5-Year Gain: NPR 4,00,000', 'Huge win for the borrower']
        ]
      },
      nepalContext: 'Prior to NRB\'s regulatory clampdown, Nepali commercial banks routinely penalized borrowers 2% to 3% of the outstanding balance if they attempted to move their loan to a rival bank. NRB intervened through its Unified Directives on Consumer Protection, mandating that prepayment fees on retail loans cannot exceed statutory limits and must be zero if the prepayment occurs due to the bank hiking interest rates beyond the initial agreement. Always cite NRB Directive Circulars if a branch manager threatens unlawful penalties.',
      practicalScenario: {
        persona: 'Deepa, 42, retail distributor in Butwal',
        income: 'NPR 1,25,000 / month business income',
        scenarioText: 'Deepa had an outstanding home mortgage of NPR 35 Lakh at Bank A at an exorbitant 12.75% interest rate. A competing Class A bank offered to take over the loan at 9.75% (Base rate + 2.0%). Bank A\'s manager threatened her: "If you leave us, we will charge a 2% prepayment fine of NPR 70,000!"',
        solutionText: 'Deepa pulled up the NRB Unified Directive showing that for her personal home loan, the exit fee was capped at 0.25% (NPR 8,750). She initiated the takeover. Her total switching cost was NPR 32,000, while her monthly interest dropped by NPR 8,750. She broke even in under 4 months and saved NPR 2,80,000 over the next 3 years.',
        metricHighlight: 'Saved NPR 2,80,000 by invoking NRB prepayment rules against illegal fees'
      },
      formula: {
        name: 'Loan Swap Break-Even Horizon Formula',
        equation: '\\text{Break-Even Months} = \\frac{\\text{Exit Fee} + \\text{New Processing Fee} + \\text{Legal/Valuation Costs}}{\\text{Monthly Interest Savings}}',
        variables: [
          { symbol: '\\text{Costs}', name: 'Total Switching Expenses', desc: 'All upfront fees required to close old loan and register new mortgage.' },
          { symbol: '\\text{Savings}', name: 'Monthly Interest Savings', desc: '(\\text{Old Rate} - \\text{New Rate}) \\times \\frac{\\text{Principal}}{12}.' }
        ],
        exampleCalculation: 'Total switching cost = NPR 45,000. Loan = NPR 40 Lakh. Old rate = 12%, New rate = 10% (difference = 2%). Monthly savings = 2% × 40L / 12 = NPR 6,667/mo. Break-even = 45,000 / 6,667 = 6.75 months. In less than 7 months, the move pays for itself!',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'Compare Loan EMI Differences'
      },
      commonMistakes: [
        { mistake: 'Accepting whatever penalty fee the branch manager verbally demands.', correct: 'Ask for the written fee schedule and cross-reference with NRB Unified Directives.', explanation: 'Branch staff frequently quote commercial corporate penalty rates on retail home loans by mistake or bluff.' },
        { mistake: 'Switching banks when you plan to sell the property within 6 months.', correct: 'Only swap loans if you plan to stay in the loan longer than the break-even horizon (6-12 months).', explanation: 'If you sell the property before reaching break-even, the upfront valuation and processing fees represent a net loss.' },
        { mistake: 'Overlooking the new bank\'s base rate history.', correct: 'Check the new bank\'s historical base rate stability over the last 3 years, not just the teaser promotional rate.', explanation: 'A bank offering a teaser rate today might have a volatile base rate that jumps by 2% next quarter.' }
      ],
      definitions: [
        { term: 'Prepayment Charge', full: 'अग्रिम भुक्तानी शुल्क', meaning: 'The administrative fee levied by a lender when a borrower pays off loan balance ahead of schedule.' },
        { term: 'Loan Takeover (Swap)', full: 'कर्जा स्वाप / स्थानान्तरण', meaning: 'The transfer of an active loan from an existing bank to a new bank offering better terms and lower interest.' },
        { term: 'Break-Even Horizon', full: 'लागत उठ्ने अवधि', meaning: 'The exact number of months needed for interest savings to equal total loan switching costs.' },
        { term: 'No Objection Certificate (NOC)', full: 'सहमति पत्र', meaning: 'A formal letter from the existing bank permitting the borrower to mortgage the asset to a new lender.' }
      ],
      faqs: [
        { q: 'Can a bank charge a prepayment fee if they raised my interest rate without my consent?', a: 'Under NRB directives, if a bank increases the interest rate premium beyond the originally agreed loan contract terms, the borrower has the right to prepay or swap the loan without any prepayment penalties.' },
        { q: 'What is the maximum loan processing fee a commercial bank can charge in Nepal?', a: 'NRB regulations cap loan processing fees on retail consumer and residential home loans at 0.50% to 0.75% of the sanctioned loan amount.' },
        { q: 'Does my old bank hand me the Lalpurja when switching loans?', a: 'No. To ensure security, the old bank\'s representative physically carries the Lalpurja to the Land Revenue Office (Malpot) and hands it directly to the new bank\'s officer during the Rokka transfer.' }
      ],
      takeaways: [
        'NRB strictly caps prepayment charges on retail loans up to NPR 50 Lakh (0.15%-0.75% max).',
        'Loan swaps allow you to move high-interest mortgages to cheaper banks, saving lakhs.',
        'Always calculate the break-even horizon (typically 6-8 months) before initiating a takeover.',
        'If your bank hiked interest premiums unfairly, NRB allows you to exit with zero penalty.',
        'Verify the new bank\'s historical base rate stability before committing to a switch.'
      ]
    },
    np: {
      title: 'नेपालमा ऋणको अग्रिम भुक्तानी जरिवाना र राष्ट्र बैंकको नियम: विना शुल्क बैंक परिवर्तन गर्ने तरिका',
      oneLineSummary: 'राष्ट्र बैंकको एकीकृत निर्देशिका अनुसार आफ्नो कानुनी हक बुझ्नुहोस् - बैंकहरूले व्यक्तिगत कर्जा वा कर्जा स्वापमा मनपरी जरिवाना असुल्न पाउँदैनन्।',
      summaryPoints: [
        'नेपाल राष्ट्र बैंकले ग्राहकको संरक्षणका लागि अग्रिम भुक्तानी शुल्क र कर्जा स्वाप (Loan Takeover) शुल्कमा कडा सीमा तोकेको छ।',
        '५० लाख रुपैयाँसम्मको व्यक्तिगत आवासीय घर कर्जामा अग्रिम भुक्तानी शुल्क सीमित (अधिकतम ०.१५% देखि ०.७५%, वा निश्चित सर्तमा ०%) गरिएको छ।',
        'सस्तो ब्याजदर भएको अर्को बैंकमा ऋण सार्दा (Loan Swap) पुरानो बैंकले अनुचित वा चर्को जरिवाना लिन पाउँदैन।',
        'लागत उठ्ने अवधि (Break-Even Horizon) हिसाब गर्नुहोस्: बैंक सार्दा लाग्ने सेवा शुल्क, भ्यालुएसन र रोक्का खर्च ६ देखि १२ महिनाको ब्याज बचतबाटै उठ्नुपर्छ।',
        'कर्जा स्थानान्तरण प्रक्रिया सुरु गर्नुअघि पुरानो बैंकबाट आधिकारिक स्टेटमेन्ट र सहमति पत्र (NOC) लिनुहोस्।'
      ],
      whatIsThis: 'अग्रिम भुक्तानी जरिवाना र कर्जा स्वाप सम्बन्धी नियम भनेको अवधि नपुग्दै ऋण चुक्ता गर्दा वा सस्तो ब्याज दिने अर्को बैंकमा ऋण स्थानान्तरण गर्दा बैंकले लिन पाउने शुल्कको कानुनी दायरा हो। पुराना बैंकहरूले ग्राहकलाई बाँधेर चर्को ब्याज असुलिरहन नपाऊन् भनेर नेपाल राष्ट्र बैंकले यस्ता शुल्कहरूमा कडाइ गरेको छ।',
      whyItMatters: 'नेपालमा तरलता अभाव हुँदा बैंकहरूले ब्याजदर ९% बाट बढाएर १३.५% पुर्याउँछन्। तर पछि तरलता सहज भएर प्रतिस्पर्धी बैंकहरूले ९.५% मा झार्दा पनि पुरानो बैंकले ११.५% मै राखिरहन सक्छ। ५० लाखको घर कर्जा सस्तो बैंकमा सार्दा वार्षिक २% अर्थात् प्रत्येक वर्ष १ लाख रुपैयाँ नगद बचत हुन्छ! राष्ट्र बैंकको नियम थाहा भएमा पुरानो बैंकले अवैध जरिवाना लगाएर रोक्न सक्दैन।',
      howItWorks: [
        { step: 1, title: 'राष्ट्र बैंकको अग्रिम शुल्क निर्देशिका जाँच्नुहोस्', desc: 'नेपाल राष्ट्र बैंकको एकीकृत निर्देशिका अनुसार ५० लाखसम्मको व्यक्तिगत कर्जामा ०.१५% देखि ०.७५% भन्दा बढी अग्रिम भुक्तानी शुल्क लिन पाइँदैन।' },
        { step: 2, title: 'बैंक सार्दा लाग्ने कुल खर्च (Switching Cost) जोड्नुहोस्', desc: 'नयाँ बैंकको कर्जा प्रक्रिया शुल्क (०.५% देखि ०.७५%), धितोको पुनः मूल्याङ्कन शुल्क (करिब १५ हजार), र मालपोत फुकुवा तथा नयाँ रोक्का खर्च (करिब १० हजार) जोड्नुहोस्।' },
        { step: 3, title: 'लागत उठ्ने अवधि (Break-Even Horizon) हिसाब गर्नुहोस्', desc: 'कुल खर्चलाई मासिक ब्याज बचतले भाग गर्नुहोस्। यदि कुल खर्च रु. ५०,००० लाग्छ र नयाँ दरले मासिक रु. ८,००० बचत हुन्छ भने ६.२५ महिनामै पूरै खर्च उठ्छ। त्यसपछिको बचत शतप्रतिशत नाफा हो!' },
        { step: 4, title: 'कर्जा स्वाप प्रक्रिया सम्पन्न गर्नुहोस्', desc: 'नयाँ बैंकले टेकओभर स्वीकृति पत्र (Sanction Letter) जारी गर्छ र म्यानेजर्स चेक पुरानो बैंकलाई दिन्छ। मालपोत कार्यालयमै पुरानो रोक्का फुकुवा भई नयाँ बैंकको नाममा रोक्का हुन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'कर्जा स्वाप अर्थशास्त्र: रु. ४० लाख घर कर्जा स्थानान्तरण (१२.०% पुरानो बैंक → ९.७५% नयाँ बैंक)',
        headers: ['खर्च तथा आम्दानी शीर्षक', 'लाग्ने शुल्क / रकम', 'मासिक तथा वार्षिक बचत', 'लागत उठ्ने समय'],
        rows: [
          ['पुरानो बैंकको बहिर्गमन शुल्क', 'रु. १०,००० (०.२५% मा सीमित)', 'पुरानो ब्याज: मासिक रु. ४०,०००', 'ब्याजदर २.२५% ले घट्यो'],
          ['नयाँ बैंकको सेवा शुल्क', 'रु. २०,००० (०.५०% छुट अफर)', 'नयाँ ब्याज: मासिक रु. ३२,५००', 'मासिक बचत: रु. ७,५००'],
          ['पुनः मूल्याङ्कन र कानुनी खर्च', 'रु. १५,००० (स्थलगत निरीक्षण)', 'वार्षिक बचत: रु. ९०,०००', 'कुल खर्च = रु. ५०,०००'],
          ['मालपोत फुकुवा र नयाँ रोक्का', 'रु. ५,००० (सरकारी दस्तुर)', '५ वर्षे खुद बचत: रु. ४,००,०००', 'लागत उठ्ने समय: ६.६ महिना'],
          ['बैंक सार्न कुल सुरुवाती लगानी', 'रु. ५०,००,००० कुल खर्च', 'ऋणीलाई ५ वर्षमा ४ लाख फाइदा', 'ऋणीको लागि ठूलो जित']
        ]
      },
      nepalContext: 'विगतमा नेपालका वाणिज्य बैंकहरूले ग्राहकले अर्को बैंकमा ऋण सार्न खोजेमा बाँकी साँवाको २% देखि ३% सम्म चर्को दण्ड शुल्क लिने गर्थे। नेपाल राष्ट्र बैंकले ग्राहक हित संरक्षणका लागि हस्तक्षेप गर्दै ५० लाखसम्मका व्यक्तिगत कर्जामा यस्तो शुल्कको सीमा तोकेको छ। यदि बैंक आफैंले सुरुवाती सम्झौताभन्दा बढी प्रिमियम बढाएको कारणले ग्राहकले ऋण तिर्न वा सार्न खोजेको हो भने बैंकले कुनै पनि जरिवाना लिन नपाउने व्यवस्था छ।',
      practicalScenario: {
        persona: 'दीपा, ४२, बुटवलकी खुद्रा वितरक',
        income: 'मासिक व्यापारिक आम्दानी रु. १,२५,०००',
        scenarioText: 'दीपाको बैंक ‘क’ मा ३५ लाखको घर कर्जा थियो जसको ब्याजदर १२.७५% सम्म पुगेको थियो। अर्को एक बैंकले ९.७५% (आधार दर + २%) मा कर्जा स्वाप गरिदिने प्रस्ताव गर्यो। तर पुरानो बैंकका म्यानेजरले "हाम्रो बैंक छाड्ने भए २% जरिवाना (रु. ७०,०००) तिर्नुपर्छ" भन्दै धम्क्याए।',
        solutionText: 'दीपाले राष्ट्र बैंकको एकीकृत निर्देशिका देखाउँदै व्यक्तिगत आवासीय कर्जामा अधिकतम ०.२५% (रु. ८,७५०) मात्र शुल्क लिन पाइने नियम सुनाइन्। उनले बैंक सारिन्। कुल खर्च रु. ३२,००० लाग्यो तर मासिक ब्याज रु. ८,७५० ले घट्यो। ४ महिनामै खर्च उठ्यो र आगामी ३ वर्षमा उनको रु. २,८०,००० बचत भयो।',
        metricHighlight: 'राष्ट्र बैंकको नियम प्रयोग गरेर अवैध शुल्क रोक्दै रु. २,८०,००० बचत'
      },
      formula: {
        name: 'कर्जा स्वाप लागत उठ्ने अवधि (Break-Even) सूत्र',
        equation: '\\text{Break-Even Months} = \\frac{\\text{Exit Fee} + \\text{New Processing Fee} + \\text{Legal/Valuation Costs}}{\\text{Monthly Interest Savings}}',
        variables: [
          { symbol: '\\text{Costs}', name: 'बैंक सार्दा लाग्ने कुल खर्च', desc: 'पुरानो कर्जा बन्द गर्ने र नयाँ धितो दर्ता गर्ने सबै शुल्कहरूको योगफल।' },
          { symbol: '\\text{Savings}', name: 'मासिक ब्याज बचत', desc: '(\\text{पुरानो दर} - \\text{नयाँ दर}) \\times \\frac{\\text{साँवा}}{१२}।' }
        ],
        exampleCalculation: 'कुल खर्च = रु. ४५,०००। ऋण = रु. ४० लाख। पुरानो दर = १२%, नयाँ दर = १०% (अन्तर = २%)। मासिक बचत = २% × ४० लाख / १२ = रु. ६,६६७। लागत उठ्ने अवधि = ४५,००० / ६,६६७ = ६.७५ महिना। ७ महिना नपुग्दै बैंक सरेको फाइदा सुरु हुन्छ!',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'मासिक किस्ता अन्तर तुलना गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'बैंक म्यानेजरले मौखिक रूपमा मागेको चर्को जरिवाना शुल्क चुपचाप तिर्नु।', correct: 'लिखित शुल्क विवरण माग्नुहोस् र राष्ट्र बैंकको एकीकृत निर्देशिकासँग दाँज्नुहोस्।', explanation: 'कतिपय शाखा कर्मचारीहरूले संस्थागत कर्जाको शुल्क व्यक्तिगत घर कर्जामा दाँजेर बढी शुल्क माग्ने गर्छन्।' },
        { mistake: '६ महिनाभित्र घरजग्गा बिक्री गर्ने योजना हुँदाहुँदै बैंक स्वाप गर्नु।', correct: 'लागत उठ्ने अवधि (६ देखि १२ महिना) भन्दा लामो समय ऋण चलाउने भए मात्र बैंक सार्नुहोस्।', explanation: 'लागत उठ्नुअघि नै सम्पत्ति बेचेमा सुरुमा तिरिएको भ्यालुएसन र सेवा शुल्क खेर जान्छ।' },
        { mistake: 'नयाँ बैंकको आधार दर (Base Rate) को विगतको इतिहास नहेरी सर्नु।', correct: 'नयाँ बैंकको विगत ३ वर्षको आधार दर कति स्थिर छ, त्यो बुझेर मात्र ऋण सार्नुहोस्।', explanation: 'आज सस्तो देखाउने बैंकको आधार दर भोलि अचानक २% ले बढ्यो भने स्वाप गरेको कुनै अर्थ रहँदैन।' }
      ],
      definitions: [
        { term: 'अग्रिम भुक्तानी शुल्क (Prepayment Charge)', full: 'समय अगावै ऋण चुक्ता गर्दा लाग्ने शुल्क', meaning: 'तोकिएको अवधिभन्दा अगाडि नै ऋणको पूरै वा आंशिक रकम बुझाउँदा बैंकले लिने प्रशासनिक दस्तुर।' },
        { term: 'कर्जा स्वाप / स्थानान्तरण (Loan Swap)', full: 'Bank Takeover', meaning: 'चालु ऋणलाई सस्तो ब्याज र राम्रो सुविधा दिने अर्को बैंक वा वित्तीय संस्थामा स्थानान्तरण गर्ने प्रक्रिया।' },
        { term: 'लागत उठ्ने समय (Break-Even Horizon)', full: 'खर्च बराबर बचत हुने बिन्दु', meaning: 'बैंक सार्दा लागेका सबै प्रारम्भिक शुल्कहरू कति महिनाको ब्याज बचतबाट भरपाइ हुन्छन् भन्ने समयावधि।' },
        { term: 'सहमति पत्र (NOC)', full: 'No Objection Certificate', meaning: 'पुरानो बैंकले धितो फुकुवा गरी नयाँ बैंकमा धितो रोक्का गर्न दिने औपचारिक सहमति पत्र।' }
      ],
      faqs: [
        { q: 'बैंकले मनपरी ब्याज बढाएको अवस्थामा ऋण सार्दा जरिवाना तिर्नुपर्छ?', a: 'नेपाल राष्ट्र बैंकको नियम अनुसार यदि बैंकले सुरुमा सम्झौता गरेको प्रिमियमभन्दा बढी ब्याजदर बढाएको हो भने ऋणीले विना कुनै जरिवाना ऋण चुक्ता गर्न वा अर्को बैंकमा सार्न पाउँछन्।' },
        { q: 'नेपालमा व्यक्तिगत कर्जामा बैंकहरूले लिन पाउने अधिकतम सेवा शुल्क कति हो?', a: 'राष्ट्र बैंकको निर्देशिका अनुसार व्यक्तिगत उपभोक्ता तथा आवासीय घर कर्जामा ०.५०% देखि ०.७५% भन्दा बढी सेवा शुल्क (Loan Processing Fee) लिन पाइँदैन।' },
        { q: 'बैंक सार्दा लालपुर्जा कसको हातमा दिइन्छ?', a: 'सुरक्षाको दृष्टिकोणले पुरानो बैंकले लालपुर्जा सिधै ऋणीलाई नदिई मालपोत कार्यालयमै नयाँ बैंकका अधिकृतलाई रोक्का प्रक्रियाका क्रममा हस्तान्तरण गर्दछ।' }
      ],
      takeaways: [
        'राष्ट्र बैंकले ५० लाखसम्मका व्यक्तिगत कर्जामा ०.१५% देखि ०.७५% सम्म मात्र अग्रिम शुल्क तोकेको छ।',
        'कर्जा स्वाप (Loan Swap) गरेर चर्को ब्याज भएको पुरानो बैंकबाट सस्तो बैंकमा लाखौँ बचत गर्न सकिन्छ।',
        'बैंक सार्नुअघि सधैँ लागत उठ्ने अवधि (Break-Even Horizon) हिसाब गर्नुहोस् (प्रायः ६-८ महिना)।',
        'बैंकले सम्झौता विपरीत प्रिमियम बढाएमा विना जरिवाना बैंक छाड्ने अधिकार ऋणीलाई हुन्छ।',
        'नयाँ बैंक रोज्दा सुरुवाती अफर मात्र होइन, विगतको आधार दरको उतारचढाव पनि जाँच्नुहोस्।'
      ]
    }
  }

};

// BATCH E - TAXATION (5 lessons)
// Category: taxation

export const BATCH_E = {

  // ── E1. SSF, CIT & INSURANCE TAX DEDUCTIONS ──────────────────────
  'ssf-cit-insurance-tax-deductions': {
    id: 'tax-ssf-cit-deductions',
    slug: 'ssf-cit-insurance-tax-deductions',
    categorySlug: 'taxation',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min salary tax audit', np: '२० मिनेट तलब कर योजना' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Inland Revenue Department (IRD) Nepal Income Tax Act 2058 (FY 2081/82 Amendments)', np: 'आन्तरिक राजस्व विभाग आयकर ऐन २०५८ (आर्थिक ऐन २०८१) अनुसार समीक्षित' },
    prerequisites: { en: 'Nepal Income Tax Slabs & Salary Tax', np: 'आयकर स्ल्याब र तलब कर' },
    en: {
      title: 'Maximizing Legal Tax Deductions in Nepal: SSF, CIT & Insurance Limits',
      oneLineSummary: 'Slash your salary tax by up to NPR 1.8 Lakh annually by legally utilizing Section 63 retirement caps, life insurance, and health insurance rebates.',
      summaryPoints: [
        'The Income Tax Act 2058 permits individual taxpayers to deduct retirement contributions up to one-third of assessable income or NPR 5,00,000 (whichever is lower).',
        'Contributing to SSF (Social Security Fund), CIT (Citizen Investment Trust), or EPF (Employee Provident Fund) directly lowers your taxable income bracket.',
        'Life insurance premium payment grants an additional statutory deduction of up to NPR 40,000 per fiscal year from your gross assessable salary.',
        'Health insurance premium provides an additional separate deduction of up to NPR 20,000 per year from your taxable salary.',
        'A professional earning NPR 15 Lakh/year in the 30% tax bracket saves NPR 1,68,000 in cold cash taxes every year by maximizing these deductions.'
      ],
      whatIsThis: 'Tax deductions in Nepal are legal provisions enacted in the Income Tax Act 2058 that subtract specific approved expenditures and retirement investments from your total gross income before tax rates are applied. Under Section 63, contributions to approved retirement funds (SSF, CIT, EPF) combined with insurance premium exemptions reduce your taxable income to a much lower tax bracket.',
      whyItMatters: 'Most salaried employees in Nepal watch 10% to 36% of their monthly income vanish in TDS (Tax Deducted at Source) because they leave their tax planning to their HR department without declaring deductions. For an employee earning NPR 12,00,000, failing to use CIT and insurance deductions results in overpaying more than NPR 1,20,000 in avoidable taxes every single year.',
      howItWorks: [
        { step: 1, title: 'Calculate Your Section 63 Retirement Ceiling', desc: 'Take one-third (33.33%) of your total annual assessable salary. Compare it with the statutory cap of NPR 5,00,000 (enhanced for SSF contributors). The lower of the two figures is your maximum allowable retirement deduction.' },
        { step: 2, title: 'Maximize CIT / SSF Contributions', desc: 'If your employer contributes to SSF (31% combined), calculate the annual contribution. If you have remaining room under the NPR 5,00,000 limit, open an individual Citizen Investment Trust (CIT / Karmachari Sanchaya Kosh) voluntary account to top it up to the max.' },
        { step: 3, title: 'Submit Life & Health Insurance Receipts', desc: 'Purchase a term life policy (deduct up to NPR 40,000) and a family health insurance policy (deduct up to NPR 20,000). Submit official premium payment receipts to your employer\'s accounts department before Chaitra.' },
        { step: 4, title: 'Include Remote Area & House Insurance Rebates', desc: 'If working in remote districts (Class A to E), claim up to NPR 50,000 remote allowance exemption. If you insure your private residential home against earthquake/fire, claim up to NPR 5,000 house insurance deduction.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Statutory Tax Deductions & Exemptions in Nepal (FY 2081/82)',
        headers: ['Deduction Category', 'Governing Clause', 'Maximum Annual Limit', 'Direct Cash Tax Saved (30% Bracket)'],
        rows: [
          ['Approved Retirement (SSF/CIT/EPF)', 'Section 63', '1/3 of income or NPR 5,00,000', 'Up to NPR 1,50,000 / year'],
          ['Life Insurance Premium', 'Schedule 1, Cl. 12', 'Actual premium or NPR 40,000', 'Up to NPR 12,000 / year'],
          ['Health Insurance Premium', 'Schedule 1, Cl. 16', 'Actual premium or NPR 20,000', 'Up to NPR 6,000 / year'],
          ['Private Residential House Insurance', 'Schedule 1, Cl. 17', 'Actual premium or NPR 5,000', 'Up to NPR 1,500 / year'],
          ['Female Tax Rebate (Salaried)', 'Schedule 1', '10% rebate on final computed tax', '10% reduction of total tax liability']
        ]
      },
      nepalContext: 'Under recent Financial Acts, the Government of Nepal increased the retirement deduction ceiling from NPR 3,00,000 to NPR 5,00,000 specifically to incentivize participation in the Social Security Fund (SSF). Private-sector employees whose employers have not yet enrolled in SSF can still utilize the NPR 3,00,000 limit via Citizen Investment Trust (CIT) or Employee Provident Fund (EPF). Maximizing these deductions essentially functions as a guaranteed 20%-30% risk-free return on your investment.',
      practicalScenario: {
        persona: 'Arun, 35, senior mechanical engineer in Kathmandu',
        income: 'NPR 1,25,000 / month salary (NPR 15,00,000 annually)',
        scenarioText: 'Arun was paying NPR 2,12,500 annually in salary tax as an unmarried individual. He had zero voluntary savings and felt his salary was being aggressively eroded by taxes.',
        solutionText: 'He structured his deductions: (1) Contributed NPR 4,00,000 annually into SSF and CIT, (2) Purchased an annual term life insurance policy for NPR 40,000 premium, (3) Purchased a family health insurance policy for NPR 20,000 premium. Total deductions = NPR 4,60,000. His taxable income plummeted from NPR 15,00,000 to NPR 10,40,000, slashing his annual tax from NPR 2,12,500 to NPR 84,500.',
        metricHighlight: 'Saved NPR 1,28,000 in cash taxes while accumulating NPR 4 Lakh in retirement wealth'
      },
      formula: {
        name: 'Nepal Taxable Income & Tax Savings Equation',
        equation: '\\text{Taxable Income} = \\text{Gross Salary} - \\min\\left(\\frac{I}{3}, 500000\\right) - \\text{Life Ins} (\\le 40K) - \\text{Health Ins} (\\le 20K)',
        variables: [
          { symbol: 'Gross Salary', name: 'Assessable Employment Income', desc: 'Total salary plus allowances, bonuses, and overtime in Nepalese Rupees.' },
          { symbol: 'I / 3', name: 'One-Third Rule', desc: 'Retirement contribution deduction capped at 33.33% of assessable income.' },
          { symbol: '500000', name: 'SSF/CIT Cap', desc: 'Statutory upper ceiling of NPR 5,00,000 for approved retirement funds.' },
          { symbol: 'Tax Saved', name: 'Marginal Tax Relief', desc: 'Total Deductions multiplied by your marginal income tax bracket rate (20%, 30%, or 36%).' }
        ],
        exampleCalculation: 'Gross salary = NPR 15,00,000. Retirement contribution (SSF / Approved Retirement Fund) = NPR 4,00,000. Life insurance = NPR 40,000. Health insurance = NPR 20,000. Total deductions = NPR 4,60,000. Taxable income = 15,00,000 - 4,60,000 = NPR 10,40,000. In the 30% tax bracket, the direct tax savings = NPR 4,60,000 * ~28% average relief = NPR 1,28,000 saved.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Calculate Your Nepal Salary Tax'
      },
      commonMistakes: [
        { mistake: 'Waiting until Ashadh (fiscal year end) to submit insurance receipts.', correct: 'Submit policy receipts to HR before Magh/Falgun so TDS deductions adjust evenly.', explanation: 'Submitting in Ashadh creates administrative chaos and delays TDS adjustments into next year.' },
        { mistake: 'Contributing more than NPR 5,00,000 to CIT expecting further tax breaks.', correct: 'Cap tax-exempt retirement contributions at exactly NPR 5,00,000; invest excess in mutual funds.', explanation: 'Contributions exceeding the statutory cap are not tax-deductible and lock your capital unnecessarily.' },
        { mistake: 'Forgetting the 10% female tax rebate on salaried income.', correct: 'Female salaried employees must ensure accounts applies the 10% statutory tax rebate.', explanation: 'The Income Tax Act mandates a direct 10% rebate on the final tax liability for resident female employees.' }
      ],
      definitions: [
        { term: 'Section 63 Deduction', full: 'Sewanibritti Kosh Katti', meaning: 'The legal provision in Nepal allowing up to NPR 5 Lakh to be deducted from taxable income for contributions to SSF/CIT/EPF.' },
        { term: 'Assessable Income', full: 'Kar-Yogya Aamdani', meaning: 'Total gross income from employment, business, or investments prior to allowable statutory deductions.' },
        { term: 'TDS Adjustment', full: 'Srotma Kar Samayojan', meaning: 'The recalculation of monthly tax withholding performed by employers upon receiving proof of tax-deductible investments.' },
        { term: 'CIT (Nagarik Lagani Kosh)', full: 'Citizen Investment Trust', meaning: 'A government financial institution offering tax-deductible voluntary pension and retirement savings schemes in Nepal.' }
      ],
      faqs: [
        { q: 'Can I claim deductions for parents\' life insurance?', a: 'No. The tax deduction of up to NPR 40,000 applies strictly to life insurance policies taken on your own life or your spouse\'s life.' },
        { q: 'Is private health insurance deduction separate from life insurance?', a: 'Yes. Health insurance has its own separate limit of up to NPR 20,000 under Schedule 1, distinct from the NPR 40,000 life insurance ceiling.' },
        { q: 'What happens to the money deposited in CIT when I leave my job?', a: 'Your CIT retirement savings belong 100% to you. You can either withdraw the balance (subject to applicable 5% final retirement tax) or transfer the account to your new employer.' }
      ],
      takeaways: [
        'Deduct up to NPR 5,00,000 in approved retirement contributions (SSF/CIT/EPF) every fiscal year.',
        'Claim up to NPR 40,000 for life insurance and NPR 20,000 for health insurance every single year.',
        'High-earning salaried professionals in Nepal can slash their annual tax bill by over NPR 1.2 to 1.8 Lakh.',
        'Submit official premium and contribution receipts to HR before Chaitra to prevent excessive TDS deductions.',
        'Female salaried taxpayers are entitled to a mandatory 10% rebate on their final computed tax liability.'
      ]
    },
    np: {
      title: 'नेपालमा कानुनी कर छुटका उपाय: SSF, नागरिक लगानी कोष (CIT) र बिमाको फाइदा',
      oneLineSummary: 'दफा ६३ को अवकाश कोष सुविधा, जीवन बिमा र स्वास्थ्य बिमाबाट आफ्नो तलबमा लाग्ने कर वार्षिक रु. १.८ लाखसम्म घटाउने व्यावहारिक तरिका।',
      summaryPoints: [
        'आयकर ऐन २०५८ अनुसार व्यक्तिगत करदाताले आफ्नो आम्दानीको एक तिहाइ वा अधिकतम रु. ५,००,००० सम्म अवकाश कोषमा जम्मा गरी करयोग्य आयबाट घटाउन पाउँछन्।',
        'सामाजिक सुरक्षा कोष (SSF), नागरिक लगानी कोष (CIT) वा कर्मचारी सञ्चय कोष (EPF) मा रकम जम्मा गर्दा करको स्ल्याब सीधै तल झर्छ।',
        'जीवन बिमा गरे बापत वार्षिक थप अधिकतम रु. ४०,००० सम्मको प्रिमियम रकम करयोग्य तलबबाट घटाउन पाइन्छ।',
        'स्वास्थ्य बिमा गरे बापत वार्षिक थप अधिकतम रु. २०,००० सम्मको प्रिमियम रकम करयोग्य तलबबाट घटाउन पाइन्छ।',
        'वार्षिक १५ लाख कमाउने ३०% कर स्ल्याबको व्यक्तिले यी छुटहरू सदुपयोग गर्दा वर्षमै रु. १,६८,००० नगद कर बचत गर्न सक्छ।'
      ],
      whatIsThis: 'कर कट्टी (Tax Deductions) भनेको आयकर ऐन २०५८ ले दिएको यस्तो कानुनी अधिकार हो, जसले तपाईंको कुल आम्दानीबाट निश्चित अनुमोदित लगानी तथा बिमा खर्च घटाएर बाँकी रकममा मात्र कर लगाउन दिन्छ। ऐनको दफा ६३ अन्तर्गत अवकाश कोष (SSF/CIT/EPF) र अनुसूची १ का बिमा छुटहरूले करको भार उल्लेख्य रूपमा कम गर्छन्।',
      whyItMatters: 'नेपालमा धेरै जागिरेहरूले आफ्नो कर योजनामा ध्यान नदिँदा तलबको १०% देखि ३६% सम्मको ठूलो हिस्सा TDS करका रूपमा गुमाइरहेका हुन्छन्। वार्षिक १२ लाख तलब हुने व्यक्तिले यदि नागरिक लगानी कोष र बिमाको छुट लिएन भने उसले वर्षमै रु. १,२०,००० भन्दा बढी अनावश्यक कर तिरिरहेको हुन्छ - जुन पैसा उसको आफ्नै भविष्यका लागि बचत हुन सक्थ्यो।',
      howItWorks: [
        { step: 1, title: 'दफा ६३ को अवकाश कोष सीमा निकाल्नुहोस्', desc: 'आफ्नो वार्षिक कुल तलबको एक तिहाइ (३३.३३%) हिसाब गर्नुहोस्। यसलाई अधिकतम कानुनी सीमा रु. ५,००,००० (SSF आबद्धका लागि) सँग तुलना गर्नुहोस्। जुन कम हुन्छ, त्यति नै रकम कर छुटका लागि योग्य हुन्छ।' },
        { step: 2, title: 'नागरिक लगानी कोष (CIT) वा SSF मा लगानी गर्नुहोस्', desc: 'यदि रोजगारदाताले SSF मा ३१% योगदान गर्छ भने त्यसको हिसाब हेर्नुहोस्। यदि ५ लाखको सीमा पुगेको छैन भने नागरिक लगानी कोषमा व्यक्तिगत खाता खोलेर नपुग रकम मासिक कट्टी गराउनुहोस्।' },
        { step: 3, title: 'जीवन र स्वास्थ्य बिमाको रसिद पेश गर्नुहोस्', desc: 'म्यादी जीवन बिमा (रु. ४०,००० सम्म छुट) र स्वास्थ्य बिमा (रु. २०,००० सम्म छुट) को सक्कल भुक्तानी रसिद चैत महिनाभित्रै आफ्नो कार्यालयको लेखा शाखामा बुझाउनुहोस्।' },
        { step: 4, title: 'दुर्गम भत्ता र घर बिमाको छुट पनि लिनुहोस्', desc: 'दुर्गम जिल्लामा कार्यरत भए वर्ग अनुसार रु. ५०,००० सम्म दुर्गम भत्ता छुट र आफ्नै घरको भूकम्प/आगो बिमा गरे बापत रु. ५,००० सम्मको थप छुट दाबी गर्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा व्यक्तिगत आयकर छुट तथा कट्टीका कानुनी व्यवस्थाहरू (आव २०८१/८२)',
        headers: ['छुटको शीर्षक', 'कानुनी व्यवस्था', 'अधिकतम वार्षिक छुट सीमा', '३०% कर स्ल्याबमा हुने खुद नगद बचत'],
        rows: [
          ['स्वीकृत अवकाश कोष (SSF/CIT/EPF)', 'दफा ६३', 'आम्दानीको १/३ वा रु. ५,००,०००', 'वार्षिक रु. १,५०,००० सम्म बचत'],
          ['जीवन बिमा प्रिमियम', 'अनुसूची १, दफा १२', 'वास्तविक प्रिमियम वा रु. ४०,०००', 'वार्षिक रु. १२,००० सम्म बचत'],
          ['स्वास्थ्य बिमा प्रिमियम', 'अनुसूची १, दफा १६', 'वास्तविक प्रिमियम वा रु. २०,०००', 'वार्षिक रु. ६,००० सम्म बचत'],
          ['आवासीय घर बिमा', 'अनुसूची १, दफा १७', 'वास्तविक प्रिमियम वा रु. ५,०००', 'वार्षिक रु. १,५०० सम्म बचत'],
          ['महिला कर छुट (पारिश्रमिक)', 'अनुसूची १', 'अन्तिम कर दायित्वमा १०% छुट', 'कुल तिर्नुपर्ने करको १०% सीधै मिनाहा']
        ]
      },
      nepalContext: 'पछिल्लो समय नेपाल सरकारले योगदानमा आधारित सामाजिक सुरक्षा कोष (SSF) लाई प्रोत्साहन गर्न अवकाश कोषको कर छुट सीमा रु. ३ लाखबाट बढाएर रु. ५ लाख पुर्‍याएको छ। SSF मा नगएका निजी प्रतिष्ठानका कर्मचारीले पनि नागरिक लगानी कोष (CIT) वा कर्मचारी सञ्चय कोष मार्फत रु. ३ लाखसम्मको सीमा पूर्ण सदुपयोग गर्न सक्छन्। यो छुट प्रयोग गर्नु भनेको आफ्नो पैसा आफ्नै सुरक्षित भविष्यमा लगानी गर्दै २०-३०% तत्कालै कर बचाउनु हो।',
      practicalScenario: {
        persona: 'अरुण, ३५, काठमाडौँका मेकानिकल इन्जिनियर',
        income: 'मासिक तलब रु. १,२५,000 (वार्षिक रु. १५,००,०००)',
        scenarioText: 'अविवाहित अरुणले कुनै पनि कर छुट प्रयोग नगर्दा वर्षमा रु. २,१२,५०० पारिश्रमिक कर तिरिरहेका थिए। उच्च आम्दानी भए पनि करले तलब धेरै काटिएकोमा उनी चिन्तित थिए।',
        solutionText: 'उनले कर योजना बनाए: (१) SSF र CIT मा वार्षिक रु. ४,००,००० जम्मा गरे, (२) रु. ४०,००० प्रिमियमको टर्म लाइफ इन्स्योरेन्स लिए, (३) रु. २०,००० प्रिमियमको स्वास्थ्य बिमा लिए। कुल कर छुट रु. ४,६०,००० भयो। उनको करयोग्य आय १५ लाखबाट घटेर १० लाख ४० हजारमा झर्‍यो, जसले उनको वार्षिक कर रु. २,१२,५०० बाट घटेर जम्मा रु. ८४,५०० भयो।',
        metricHighlight: 'आफ्नै बचतमा ४ लाख थप्दै वर्षमै रु. १,२८,००० नगद कर बचत गरे'
      },
      formula: {
        name: 'नेपालमा करयोग्य आय र कर बचत सूत्र',
        equation: '\\text{करयोग्य आय} = \\text{कुल तलब} - \\min\\left(\\frac{I}{३}, ५०००००\\right) - \\text{जीवन बिमा} (\\le ४०K) - \\text{स्वास्थ्य बिमा} (\\le २०K)',
        variables: [
          { symbol: 'कुल तलब', name: 'वार्षिक कुल पारिश्रमिक आय', desc: 'तलब, भत्ता, बोनस र अतिरिक्त समयको कुल वार्षिक रकम।' },
          { symbol: 'I / ३', name: 'एक तिहाइ नियम', desc: 'अवकाश कोषको छुट कुल आम्दानीको ३३.३३% भन्दा बढी हुन नपाउने नियम।' },
          { symbol: '५०००००', name: 'अधिकतम अवकाश कोष सीमा', desc: 'SSF/CIT मा पाइने वार्षिक अधिकतम रु. ५,००,००० को सीमा।' },
          { symbol: 'कर बचत', name: 'प्रत्यक्ष नगद राहत', desc: 'कुल छुट रकम गुणा तपाईंको उच्च कर स्ल्याब प्रतिशत (२०%, ३०% वा ३६%)।' }
        ],
        exampleCalculation: 'वार्षिक तलब रु. १५,००,०००। स्वीकृत अवकाश कोष (SSF/CIT) जम्मा रु. ४,००,००० + जीवन बिमा रु. ४०,००० + स्वास्थ्य बिमा रु. २०,००० = कुल छुट रु. ४,६०,०००। करयोग्य आय = १५,००,००० - ४,६०,००० = रु. १०,४०,०००। ३०% कर स्ल्याबमा रहेकाले: ४,६०,००० मा औसत कर राहत = रु. १,२८,००० प्रत्यक्ष कर बचत।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'नेपाल आयकर क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'असार मसान्तमा मात्र बिमा र CIT को रसिद लेखा शाखामा बुझाउनु।', correct: 'माघ वा फागुनभित्रै रसिद बुझाउनुहोस् ताकि बाँकी महिनाहरूमा TDS समानुपातिक रूपमा घटोस्।', explanation: 'असारमा बुझाउँदा अत्यधिक कर पहिले नै काटिइसकेको हुन्छ र फिर्ता लिन झन्झट हुन्छ।' },
        { mistake: 'कर छुट पाइन्छ भनेर CIT मा ५ लाखभन्दा बढी रकम हाल्नु।', correct: 'अवकाश कोषमा वार्षिक ५ लाखसम्म मात्र कर छुट पाइन्छ; बढी रकम म्युचुअल फन्डमा लगाउनुहोस्।', explanation: '५ लाखभन्दा बढी रकममा कुनै कर छुट पाइँदैन र पैसा अनावश्यक रूपमा रोकिन्छ।' },
        { mistake: 'पारिश्रमिक करमा महिलाले पाउने १०% छुट लिन बिर्सनु।', correct: 'महिला कर्मचारीले आफ्नो अन्तिम कर हिसाबमा १०% छुट अनिवार्य पाएको यकिन गर्नुहोस्।', explanation: 'आयकर ऐनले महिला पारिश्रमिक करदातालाई अन्तिम कर दायित्वमा १०% सिधै छुट दिने ग्यारेन्टी गरेको छ।' }
      ],
      definitions: [
        { term: 'दफा ६३ को छुट', full: 'अवकाश कोष कट्टी', meaning: 'आयकर ऐन अनुसार SSF, CIT र EPF मा जम्मा गर्दा पाइने अधिकतम रु. ५ लाखसम्मको कर छुट।' },
        { term: 'करयोग्य आय', full: 'कर लाग्ने खुद आम्दानी', meaning: 'कुल आम्दानीबाट सम्पूर्ण कानुनी छुटहरू घटाएपछि कर स्ल्याब लागू हुने अन्तिम रकम।' },
        { term: 'TDS समायोजन', full: 'स्रोतमा कर कट्टी मिलान', meaning: 'कर्मचारीले बिमा र लगानीको प्रमाण पेश गरेपछि रोजगारदाताले मासिक काटिने कर घटाउने कार्य।' },
        { term: 'नागरिक लगानी कोष (CIT)', full: 'कर्मचारी बचत योजना', meaning: 'नेपाल सरकारको आधिकारिक संस्था जसले कर छुट सुविधा सहितको स्वेच्छिक अवकाश बचत योजना सञ्चालन गर्छ।' }
      ],
      faqs: [
        { q: 'के आमाबुबाको जीवन बिमामा पनि मैले कर छुट पाउँछु?', a: 'पाउनुहुन्न। आयकर ऐन अनुसार जीवन बिमा बापतको रु. ४०,००० सम्मको कर छुट केवल करदाताको आफ्नै वा आफ्ना दम्पती (पति/पत्नी) को नाममा गरिएको बिमामा मात्र पाइन्छ।' },
        { q: 'स्वास्थ्य बिमा र जीवन बिमाको छुट अलग-अलग हो?', a: 'हो। जीवन बिमामा अधिकतम रु. ४०,००० र स्वास्थ्य बिमामा थप छुट्टै अधिकतम रु. २०,००० सम्मको कर छुट पाइन्छ। दुवै जोड्दा रु. ६०,००० हुन्छ।' },
        { q: 'जागिर छाड्दा CIT मा जम्मा भएको पैसा के हुन्छ?', a: 'त्यो पैसा १००% तपाईंकै हो। तपाईंले ५% अन्तिम कर कटाएर पैसा झिक्न सक्नुहुन्छ वा नयाँ जागिरमा सोही खाता नम्बरमा रकम जम्मा गर्न निरन्तरता दिन सक्नुहुन्छ।' }
      ],
      takeaways: [
        'वार्षिक ५ लाखसम्म स्वीकृत अवकाश कोष (SSF/CIT/EPF) मा जम्मा गरी ठूलो कर बचत गर्नुहोस्।',
        'हरेक वर्ष जीवन बिमामा रु. ४०,००० र स्वास्थ्य बिमामा रु. २०,००० सम्मको अतिरिक्त कर छुट लिनुहोस्।',
        'उच्च आम्दानी भएका जागिरेले सही कर योजनाबाट वर्षमै १ लाखदेखि १.८ लाख रुपैयाँसम्म कर बचाउन सक्छन्।',
        'मासिक तलबबाट बढी कर काटिन नदिन माघ-फागुनभित्रै बिमा र बचतका रसिदहरू लेखा शाखामा बुझाउनुहोस्।',
        'महिला कर्मचारीहरूले आफ्नो अन्तिम कर दायित्वमा कानुनतः पाउने १०% कर छुट अनिवार्य दाबी गर्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Simulate exact income tax reductions using SSF, CIT, and insurance deduction sliders.' }
    ],
    downloadableResources: [
      { title: 'Salary Tax Deduction Declaration Worksheet for HR (Excel)', type: 'Excel Template', format: 'XLSX File', size: '165 KB', href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html' }
    ]
  },

  // ── E2. TDS RATES IN NEPAL ───────────────────────────────────────
  'tds-rates-nepal-salaried-freelance': {
    id: 'tax-tds-rates',
    slug: 'tds-rates-nepal-salaried-freelance',
    categorySlug: 'taxation',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min invoice withholding check', np: '१५ मिनेट TDS हिसाब' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Inland Revenue Department (IRD) TDS Directives & Chapter 17 Provisions', np: 'आन्तरिक राजस्व विभाग स्रोतमा कर कट्टी (TDS) निर्देशिका अनुसार समीक्षित' },
    prerequisites: { en: 'PAN Explained', np: 'प्यान (PAN) कार्ड' },
    en: {
      title: 'TDS Rates in Nepal: Salaried, House Rent, Freelancing & Interest',
      oneLineSummary: 'Demystify Tax Deducted at Source (TDS) - differentiate between final withholding (non-refundable) and adjustable withholding (claimable in annual tax returns).',
      summaryPoints: [
        'Tax Deducted at Source (TDS) is advance tax deducted by the payer before transferring money to your bank account.',
        'Final Withholding Taxes (e.g., Bank Interest at 5%, NEPSE Dividends at 5%) are settled at source and require no further income tax filing.',
        'Adjustable Withholding Taxes (e.g., Freelance Consulting at 15%, Service Contracts at 1.5% with VAT) must be reconciled in your annual D-01/D-03 tax return.',
        'House rent paid by businesses incurs a mandatory 10% House Rent Tax (Bahaal Kar) payable directly to the local municipality (Palika) or IRD.',
        'Foreign freelance income remitted via banking rails (YouTube, Upwork, IT exports) incurs a flat, highly concessional 5.0% final withholding tax.'
      ],
      whatIsThis: 'Tax Deducted at Source (TDS / Srotma Kar Katti) is a statutory tax collection mechanism under Chapter 17 of Nepal\'s Income Tax Act 2058. The entity paying for services, rent, employment, or capital returns is legally mandated to withhold a specific percentage and remit it directly to the Inland Revenue Department (IRD) under the recipient\'s Permanent Account Number (PAN).',
      whyItMatters: 'Freelancers, consultants, and landlords in Nepal frequently suffer financial confusion regarding TDS. Many consultants receive payments with 15% deducted, assuming that money is lost forever, unaware they can claim refunds if their annual net income falls below taxable thresholds. Conversely, landlords unaware of the 10% rent tax face steep municipal back-taxes and penalty audits.',
      howItWorks: [
        { step: 1, title: 'Classify Payment: Final vs Adjustable', desc: 'Identify whether the payment is "Final Withholding" (antim kar katti) or "Adjustable Withholding" (milān hune kar). Bank deposit interest (5%), mutual fund cash dividends (5%), and digital IT exports (5%) are final. Service consultancy (15%) is adjustable.' },
        { step: 2, title: 'Verify Payer Deposited TDS on Your PAN', desc: 'Log into the IRD portal (tax.ird.gov.np) with your PAN credentials. Check the "Taxpayer Portal" → "TDS Details" to ensure your client/employer formally credited the withheld tax to your PAN number.' },
        { step: 3, title: 'Apply Relevant Withholding Rate to Invoices', desc: 'When invoicing a client as a VAT-registered entity, charge 1.5% TDS on taxable supplies. If billing as a non-VAT freelance professional, the client will withhold 15% under Section 88.' },
        { step: 4, title: 'Reconcile During Annual Tax Filing', desc: 'When filing your annual tax return before Ashwin/Poush, input all adjustable TDS deducted throughout the year. If total TDS exceeds your actual slab liability, the IRD issues a formal tax credit or cash refund.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Master TDS Rate Schedule in Nepal (FY 2081/82)',
        headers: ['Income Stream / Transaction Type', 'Governing Section', 'Applicable TDS Rate', 'Classification (Final vs Adjustable)'],
        rows: [
          ['Bank Savings & Fixed Deposit Interest', 'Section 88', '5.0%', 'Final Withholding (Individual)'],
          ['Listed Company Cash Dividends', 'Section 88', '5.0%', 'Final Withholding (Individual)'],
          ['House Rent (Commercial / Residential to Entities)', 'Section 88 / Local Act', '10.0%', 'Local Municipality / Final'],
          ['Professional Consulting / Freelance (Non-VAT)', 'Section 88', '15.0%', 'Adjustable (Can claim refund / credit)'],
          ['Service Invoiced with VAT (VAT-Registered Vendor)', 'Section 89', '1.5%', 'Adjustable Withholding'],
          ['Foreign Tech / IT Exports (Upwork, YouTube, BPO)', 'Finance Act 2080/81', '5.0%', 'Final Withholding Tax'],
          ['Vehicle / Machinery Rental', 'Section 88', '10.0%', 'Adjustable Withholding']
        ]
      },
      nepalContext: 'A transformative policy in recent Nepal budgets is the 5.0% flat final withholding tax on foreign currency earned through foreign IT and business process outsourcing (BPO) exports. Programmers and digital creators receiving foreign wires through SWIFT can request their commercial bank to deduct 5% TDS at source under the foreign service code, which permanently settles their income tax liability with zero further audits.',
      practicalScenario: {
        persona: 'Meena, 28, freelance UI/UX designer in Kathmandu',
        income: 'NPR 80,000 / month consulting contracts (NPR 9,60,000 annually)',
        scenarioText: 'Meena invoiced domestic companies for web design. Clients deducted 15% TDS (NPR 1,44,000 total) from her payments. She believed the government took 15% of all her money and felt freelancing was unfairly taxed.',
        solutionText: 'She learned that consulting TDS is adjustable. When she filed her annual D-01 tax return as a single taxpayer with legitimate business expenses (laptop depreciation, internet, software subscriptions amounting to NPR 2,00,000), her actual slab tax liability was only NPR 38,000. The IRD credited the remaining NPR 1,06,000, which she carried forward against future tax liabilities.',
        metricHighlight: 'Claimed back NPR 1,06,000 in excess withheld TDS by filing annual tax reconciliation'
      },
      formula: {
        name: 'TDS Invoice Deductions & Net Payout Equation',
        equation: '\\text{Net Payout} = \\text{Gross Invoice} \\times (1 - \\text{TDS Rate}) \\quad | \\quad \\text{Tax Refund / Credit} = \\text{Total TDS Paid} - \\text{Actual Slab Tax}',
        variables: [
          { symbol: 'Gross Invoice', name: 'Billed Amount', desc: 'Agreed contract sum before statutory withholding in Nepalese Rupees.' },
          { symbol: 'TDS Rate', name: 'Statutory Withholding Percentage', desc: '15% for non-VAT consulting, 1.5% for VAT service vendors, 10% for rent.' },
          { symbol: 'Actual Slab Tax', name: 'End-of-Year Tax Liability', desc: 'Final progressive tax calculated on audited annual net income.' }
        ],
        exampleCalculation: 'Freelancer bills NPR 1,00,000 for a branding project. Client deducts 15% TDS (NPR 15,000) and deposits NPR 85,000 to the designer\'s bank account. At year-end, if the designer\'s net profit is NPR 4,50,000 (below the NPR 5,00,000 basic exemption threshold), actual slab tax is only 1% (NPR 4,500). Refund / credit due = 15,000 - 4,500 = NPR 10,500.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Calculate Net Tax Liability'
      },
      commonMistakes: [
        { mistake: 'Assuming all TDS is a permanent final loss.', correct: '15% consulting TDS is adjustable; file your annual tax return to claim refunds.', explanation: 'Only bank interest, dividends, and IT exports are final; consulting TDS can be reclaimed against business expenses.' },
        { mistake: 'Failing to collect TDS withholding certificates (Dakhila Praman) from clients.', correct: 'Ensure clients deposit TDS under your exact PAN; check the IRD online portal.', explanation: 'If a client deducts 15% but pockets the cash without depositing to the IRD, you cannot claim tax credit.' },
        { mistake: 'Paying 15% TDS on software/service invoices that have 13% VAT added.', correct: 'VAT-registered businesses should only have 1.5% TDS deducted, not 15%.', explanation: 'Section 89 explicitly sets TDS at 1.5% for services supplied by VAT-registered taxpayers.' }
      ],
      definitions: [
        { term: 'TDS', full: 'Srotma Kar Katti', meaning: 'Tax deducted at source by the paying party and deposited directly into the government treasury on behalf of the payee.' },
        { term: 'Final Withholding Tax', full: 'Antim Kar Katti', meaning: 'TDS that fulfills all legal tax obligations for that specific income without requiring annual tax filing.' },
        { term: 'Adjustable Withholding Tax', full: 'Milan Hune Kar Katti', meaning: 'Advance TDS that can be offset against total annual income tax liabilities during annual return filing.' },
        { term: 'House Rent Tax', full: 'Ghar Bahaal Kar', meaning: 'A 10% tax levied on rental income from residential or commercial premises, collected primarily by local Palikas.' }
      ],
      faqs: [
        { q: 'How do I check if my employer or client actually deposited my TDS?', a: 'Log in to tax.ird.gov.np using your PAN number and password. Click "Taxpayer Portal" → "TDS Ledger". You will see every deposit credited to your PAN in real time.' },
        { q: 'Can I get a cash refund from IRD for excess TDS in Nepal?', a: 'Yes, but the cash refund audit process can be bureaucratic. Most individual taxpayers carry forward their excess TDS credit to offset tax liabilities for subsequent fiscal years.' },
        { q: 'What is the TDS rate on YouTube and AdSense earnings in Nepal?', a: 'Under recent Financial Act amendments, personal foreign currency wire transfers from international tech platforms (YouTube, Google AdSense, Upwork) incur a flat 5.0% final withholding tax upon bank deposit.' }
      ],
      takeaways: [
        'Differentiate between Final TDS (5% bank interest, 5% dividends) and Adjustable TDS (15% consulting).',
        'Verify every month that clients and employers deposit your TDS into the IRD portal under your PAN.',
        'Freelancers paying 15% TDS can claim substantial tax credits by filing an annual D-01 tax return.',
        'VAT-registered service providers should only have 1.5% TDS withheld, not 15%.',
        'Foreign freelance tech exports remitted via banking channels enjoy a low 5% final withholding tax.'
      ]
    },
    np: {
      title: 'नेपालमा स्रोतमा कर कट्टी (TDS) दरहरू: तलब, घरभाडा, परामर्श र फ्रिलान्सिङ',
      oneLineSummary: 'अन्तिम कर कट्टी (Final Withholding) र मिलान हुने कर (Adjustable Withholding) बीचको भिन्नता, १५% कट्टी भएको रकम फिर्ता लिने तरिका बुझ्नुहोस्।',
      summaryPoints: [
        'स्रोतमा कर कट्टी (TDS) भनेको तपाईंको खातामा पैसा भुक्तानी गर्नुअघि भुक्तानी दिने पक्षले अनिवार्य रूपमा सरकारी राजस्वमा काट्ने अग्रिम कर हो।',
        'अन्तिम कर कट्टी (जस्तै बैंक ब्याजमा ५%, सेयर लाभांशमा ५%) मा फेरि कुनै वार्षिक विवरण बुझाउनु वा थप कर तिर्नु पर्दैन।',
        'मिलान हुने कर कट्टी (जस्तै कन्सल्टिङ/फ्रिलान्सिङमा १५%, भ्याट बिलमा १.५%) लाई वर्षको अन्त्यमा D-01/D-03 फारम भरेर फिर्ता वा कट्टी दाबी गर्न सकिन्छ।',
        'घरभाडामा लाग्ने १०% घरबहाल कर सम्बन्धित स्थानीय तह (नगरपालिका/गाउँपालिका) वा आन्तरिक राजस्व कार्यालयमा बुझाउनुपर्छ।',
        'विदेशबाट बैंकिङ माध्यमबाट आउने फ्रिलान्सिङ, युट्युब र IT निर्यात आम्दानीमा नेपाल सरकारले सहुलियतपूर्ण ५.०% अन्तिम कर मात्र लिन्छ।'
      ],
      whatIsThis: 'स्रोतमा कर कट्टी (TDS) भनेको आयकर ऐन २०५८ को परिच्छेद १७ अन्तर्गत लागू गरिएको कर संकलन पद्धति हो। सेवा, घरभाडा, रोजगारी वा लगानीको प्रतिफल भुक्तानी गर्ने संस्थाले सम्बन्धित व्यक्तिको स्थायी लेखा नम्बर (PAN) मा तोकिएको निश्चित प्रतिशत कर काटेर सोझै आन्तरिक राजस्व विभाग (IRD) मा दाखिला गरिदिनुपर्छ।',
      whyItMatters: 'नेपालमा कन्सल्ट्यान्ट, घरधनी र फ्रिलान्सरहरू TDS को नियम नबुझेर धेरै अन्योलमा पर्छन्। कन्सल्टिङ काम गर्दा १५% TDS काटिएपछि त्यो पैसा सधैँका लागि गुम्यो भन्ने ठानेर चुपचाप बस्छन्, जबकि वार्षिक आय विवरण बुझाएर बढी काटिएको कर फिर्ता वा अर्को वर्ष मिलान गर्न सकिन्छ। अर्कोतर्फ, घरभाडामा १०% कर नतिर्दा पछि पालिकाले जरिवाना सहित असुल गर्छ।',
      howItWorks: [
        { step: 1, title: 'अन्तिम कर हो कि मिलान हुने कर, पहिचान गर्नुहोस्', desc: 'बैंक मुद्दती ब्याज (५%), लाभांश (५%), र विदेशी IT निर्यात (५%) अन्तिम कर हुन्। परामर्श सेवा (१५%) र भ्याट बिलको १.५% अग्रिम कर हुन्, जसको वार्षिक हिसाब मिलान गर्न पाइन्छ।' },
        { step: 2, title: 'PAN मा TDS दाखिला भएको अनलाइन चेक गर्नुहोस्', desc: 'आन्तरिक राजस्व विभागको पोर्टल (tax.ird.gov.np) मा आफ्नो PAN र पासवर्ड हानेर लगइन गर्नुहोस्। "TDS Details" मा गएर ग्राहक वा रोजगारदाताले तपाईंको कर दाखिला गर्‍यो वा गरेन हेर्नुहोस्।' },
        { step: 3, title: 'बिल काट्दा सही TDS दर लागू गर्नुहोस्', desc: 'यदि भ्याटमा दर्ता हुनुहुन्छ भने १.५% मात्र TDS काट्न लगाउनुहोस्। यदि व्यक्तिगत प्यानबाट परामर्श दिनुभएको हो भने संस्थाले दफा ८८ अनुसार १५% TDS काट्दछ।' },
        { step: 4, title: 'वार्षिक आय विवरण बुझाएर कर मिलान गर्नुहोस्', desc: 'असोज वा पुस मसान्तभित्र D-01 वा D-03 फारम भर्नुहोस्। यदि वर्षभरि काटिएको कुल TDS तपाईंको वास्तविक स्ल्याब करभन्दा बढी छ भने विभागबाट कर कट्टी (Credit) वा फिर्ता पाइन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा प्रमुख TDS दरहरूको आधिकारिक तालिका (आव २०८१/८२)',
        headers: ['आम्दानीको स्रोत / कारोबारको प्रकृति', 'आयकर ऐनको दफा', 'लाग्ने TDS दर', 'करको प्रकृति (अन्तिम वा मिलान हुने)'],
        rows: [
          ['बैंक बचत तथा मुद्दती निक्षेपको ब्याज', 'दफा ८८', '५.०%', 'अन्तिम कर कट्टी (Final)'],
          ['सूचीकृत कम्पनीको नगद लाभांश', 'दफा ८८', '५.०%', 'अन्तिम कर कट्टी (Final)'],
          ['घरबहाल आम्दानी (संस्थागत भुक्तानी)', 'दफा ८८ / स्थानीय कानुन', '१०.०%', 'स्थानीय तहमा बुझाउने / अन्तिम'],
          ['परामर्श सेवा / फ्रिलान्सिङ (भ्याट बाहेक)', 'दफा ८८', '१५.०%', 'मिलान हुने अग्रिम कर (Adjustable)'],
          ['भ्याट बिल सहितको सेवा आपूर्ति', 'दफा ८९', '१.५%', 'मिलान हुने अग्रिम कर (Adjustable)'],
          ['विदेशी IT / BPO सफ्टवेयर निर्यात आम्दानी', 'आर्थिक ऐन २०८०/८१', '५.०%', 'अन्तिम कर कट्टी (Final)'],
          ['सवारी साधन वा उपकरण भाडा', 'दफा ८८', '१०.०%', 'मिलान हुने अग्रिम कर (Adjustable)']
        ]
      },
      nepalContext: 'नेपालको पछिल्लो आर्थिक ऐनले विदेशबाट सफ्टवेयर, डिजिटल सामग्री, युट्युब, वा फ्रिलान्सिङ (Upwork आदि) गरेर बैंकिङ माध्यमबाट विदेशी मुद्रा भित्र्याउनेहरूका लागि ५.०% को फ्ल्याट अन्तिम कर कट्टीको ऐतिहासिक सुविधा दिएको छ। बैंकमा विदेशी मुद्रा आउनासाथ बैंकले ५% कर काटेर दाखिला गरिदिन्छ र त्यसपछि उक्त रकममा कुनै थप आयकर वा अडिटको झन्झट हुँदैन।',
      practicalScenario: {
        persona: 'मीना, २८, काठमाडौँकी फ्रिलान्स UI/UX डिजाइनर',
        income: 'मासिक परामर्श आम्दानी रु. ८०,000 (वार्षिक रु. ९,६०,०००)',
        scenarioText: 'मीनाले विभिन्न कम्पनीलाई डिजाइन सेवा दिँदा कम्पनीहरूले १५% TDS (वर्षको रु. १,४४,०००) काटेर भुक्तानी दिन्थे। उनले सरकारले आफ्नो १५% पैसा जबर्जस्ती खोस्यो भन्ने ठानेकी थिइन्।',
        solutionText: 'उनले यो १५% मिलान हुने कर हो भन्ने बुझिन्। उनले वर्षको अन्त्यमा इन्टरनेट, ल्यापटप डिप्रिसिएसन र सफ्टवेयर खर्च (रु. २,००,०००) कटाएर D-01 आय विवरण भरिन्। उनको वास्तविक कर दायित्व जम्मा रु. ३८,००० मात्र निस्कियो। बाँकी रु. १,०६,००० रकम उनले भविष्यको कर दायित्वमा मिलान (Tax Credit) गर्न सफल भइन्।',
        metricHighlight: 'वार्षिक आय विवरण बुझाएर बढी काटिएको रु. १,०६,००० TDS कर मिलान गर्न सफल'
      },
      formula: {
        name: 'TDS भुक्तानी र कर फिर्ता हिसाब सूत्र',
        equation: '\\text{बैंकमा आउने खुद रकम} = \\text{कुल बिल रकम} \\times (१ - \\text{TDS दर}) \\quad | \\quad \\text{कर फिर्ता / क्रेडिट} = \\text{कुल TDS} - \\text{वास्तविक स्ल्याब कर}',
        variables: [
          { symbol: 'कुल बिल रकम', name: 'सम्झौता गरिएको रकम', desc: 'कर काटिनुअघि ग्राहकलाई पठाइएको कुल इन्भ्वाइस रकम।' },
          { symbol: 'TDS दर', name: 'तोकिएको कर कट्टी प्रतिशत', desc: 'परामर्शमा १५%, भ्याट बिलमा १.५%, घरभाडामा १०%।' },
          { symbol: 'वास्तविक स्ल्याब कर', name: 'वार्षिक कुल आयमा लाग्ने कर', desc: 'सम्पूर्ण खर्च कटाएर वास्तविक खुद नाफामा लाग्ने कानुनी आयकर।' }
        ],
        exampleCalculation: 'डिजाइनरले रु. १,००,००० को बिल काट्यो। ग्राहकले १५% TDS (रु. १५,०००) काटेर बैंकमा रु. ८५,००० दियो। वर्षभरिको खुद नाफा रु. ४,५०,००० (रु. ५ लाखको आधारभूत छुटभित्र) हुँदा १% सामाजिक सुरक्षा कर अनुसार वार्षिक कर जम्मा रु. ४,५०० मात्र हुन्छ। कर फिर्ता वा क्रेडिट = १५,००० - ४,५०० = रु. १०,५०० बचत।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'नेपाल पारिश्रमिक कर क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'परामर्शमा काटिएको १५% TDS सधैँका लागि गुम्यो भनी सोच्नु।', correct: 'यो अग्रिम कर हो; वर्षको अन्त्यमा D-01 भरेर बढी काटिएको कर मिलान वा फिर्ता माग्न सकिन्छ।', explanation: 'व्यक्तिगत स्ल्याब अनुसार कर हिसाब गर्दा धेरैजसो फ्रिलान्सरको कर १५% भन्दा कम निस्कन्छ।' },
        { mistake: 'ग्राहकले काटेको कर आफ्नै PAN मा दाखिला गर्‍यो वा गरेन चेक नगर्नु।', correct: 'आन्तरिक राजस्व विभागको पोर्टलमा लगइन गरी "TDS Ledger" अनिवार्य रुजु गर्नुहोस्।', explanation: 'ग्राहकले कर काटेर पनि सरकारी खातामा जम्मा नगरेको भए तपाईंले कर छुट पाउन सक्नुहुन्न।' },
        { mistake: '१३% भ्याट जोडेर बिल काट्दा पनि १५% TDS काट्न दिनु।', correct: 'भ्याटमा दर्ता भएका आपूर्तिकर्ताको सेवामा दफा ८९ अनुसार १.५% मात्र TDS काटिनुपर्छ।', explanation: 'भ्याट बिलमा १५% काटिनु कानुनी अज्ञानता हो र यसले व्यवसायको तरलता घटाउँछ।' }
      ],
      definitions: [
        { term: 'TDS (स्रोतमा कर कट्टी)', full: 'अग्रिम कर कट्टी', meaning: 'भुक्तानी दिने व्यक्ति वा संस्थाले कानुन अनुसार कर काटेर करदाताको प्यानमा जम्मा गरिदिने विधि।' },
        { term: 'अन्तिम कर कट्टी (Final TDS)', full: 'थप हिसाब नचाहिने कर', meaning: 'एकपटक काटिएपछि थप कुनै आय विवरण बुझाउनु वा कर तिर्नु नपर्ने कर (जस्तै ब्याज र लाभांश)।' },
        { term: 'मिलान हुने कर (Adjustable TDS)', full: 'अग्रिम दाखिला कर', meaning: 'वार्षिक कर विवरण भर्दा कुल कर दायित्वबाट घटाउन मिल्ने अग्रिम कर।' },
        { term: 'घरबहाल कर (House Rent Tax)', full: 'सम्पत्ति भाडा कर', meaning: 'घर, जग्गा वा पसल भाडामा लगाए बापत स्थानीय पालिकालाई बुझाउनुपर्ने १०% कर।' }
      ],
      faqs: [
        { q: 'मेरो रोजगारदाता वा ग्राहकले TDS जम्मा गर्‍यो कि गरेन कसरी थाहा पाउने?', a: 'आन्तरिक राजस्व विभागको वेभसाइट tax.ird.gov.np मा आफ्नो PAN र पासवर्ड हानेर लगइन गर्नुहोस् र "TDS Ledger" हेर्नुहोस्। त्यहाँ मिति र रकम सहित दाखिला देखिन्छ।' },
        { q: 'के नेपालमा बढी काटिएको TDS नगदै फिर्ता पाइन्छ?', a: 'कानुनतः पाइन्छ, तर नगद फिर्ता लिने अडिट प्रक्रिया झन्झटिलो हुने भएकाले अधिकांश करदाताले अर्को आर्थिक वर्षको करमा मिलान (Carried Forward) गर्दछन्।' },
        { q: 'युट्युब र अनलाइन फ्रिलान्सिङ आम्दानीमा कति कर लाग्छ?', a: 'नेपालका बैंकहरूमा विदेशबाट सिधै आउने युट्युब, गुगल एडसेन्स र अनलाइन निर्यात आम्दानीमा बैंकले ५.०% अन्तिम कर काटेर भुक्तानी दिन्छ, त्यसपछि कुनै थप कर लाग्दैन।' }
      ],
      takeaways: [
        'अन्तिम कर (५% ब्याज, ५% लाभांश) र मिलान हुने कर (१५% परामर्श) बीचको भिन्नता बुझ्नुहोस्।',
        'आन्तरिक राजस्व विभागको अनलाइन पोर्टलमा आफ्नो PAN मा दाखिला भएको TDS सधैँ रुजु गर्नुहोस्।',
        '१५% TDS काटिने फ्रिलान्सरहरूले वार्षिक D-01 विवरण बुझाएर ठूलो कर फिर्ता वा क्रेडिट दाबी गर्न सक्छन्।',
        'भ्याटमा दर्ता भएका व्यवसायीको सेवा बिलमा १.५% मात्र TDS काटिनुपर्छ।',
        'बैंकिङ च्यानलबाट विदेशी मुद्रामा आउने IT तथा डिजिटल निर्यातमा ५% सहुलियतपूर्ण अन्तिम कर लाग्छ।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Simulate progressive income tax brackets to identify excess TDS refunds.' }
    ],
    downloadableResources: [
      { title: 'IRD Official TDS Rate Chart & Filing Guide (PDF)', type: 'PDF Reference', format: 'PDF Document', size: '170 KB', href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html' }
    ]
  },

  // ── E3. CAPITAL GAINS TAX (SHARES & REAL ESTATE) ─────────────────
  'capital-gains-tax-shares-real-estate': {
    id: 'tax-capital-gains',
    slug: 'capital-gains-tax-shares-real-estate',
    categorySlug: 'taxation',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '20 min property and share CGT audit', np: '२० मिनेट लाभकर हिसाब' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Income Tax Act 2058 (Section 95Ka) & Land Revenue Directives', np: 'आयकर ऐन २०५८ (दफा ९५क) र मालपोत नियमावली अनुसार समीक्षित' },
    prerequisites: { en: 'Broker Commissions & Fees in Nepal', np: 'ब्रोकर कमिसन र शुल्क' },
    en: {
      title: 'Capital Gains Tax (CGT) in Nepal: Shares, Land & Real Estate Rules',
      oneLineSummary: 'Calculate the exact tax owed when selling NEPSE shares (5% vs 7.5%) and real estate (5% vs 7.5%) - including holding period rules and Malpot valuation traps.',
      summaryPoints: [
        'Capital Gains Tax (CGT / Poonjigat Labh Kar) is levied exclusively on the net profit realized when selling capital assets like shares and land.',
        'NEPSE shares held for more than 365 days incur 5.0% CGT, whereas shares held for 365 days or less incur 7.5% CGT for natural individual persons.',
        'Land and real estate held for more than 5 years incurs 5.0% CGT, while land held for 5 years or less incurs 7.5% CGT at the Land Revenue Office (Malpot).',
        'For individuals, Capital Gains Tax on listed shares and real estate is legally treated as a final withholding tax under Section 95Ka.',
        'Accurately documenting your purchase deed and development costs prevents the Land Revenue Office from assessing inflated taxes based on minimum valuation tables.'
      ],
      whatIsThis: 'Capital Gains Tax (CGT) is an income tax levied on the net profit realized from the disposition of capital assets, principally shares traded on the Nepal Stock Exchange and parcels of land or residential real estate transferred at the Land Revenue Office (Malpot Karyalaya). Under the Income Tax Act 2058, CGT applies only when the disposal selling price exceeds the purchase cost plus authorized improvement and transaction expenses.',
      whyItMatters: 'Selling an ancestral plot of land in Pokhara or liquidating a large stock position can trigger millions of rupees in tax liability. In Nepal, timing your sale by just one week can save you tens of thousands of rupees: selling shares on Day 366 instead of Day 364 drops your tax rate from 7.5% to 5.0% (a 33% tax reduction). Similarly, selling land after 5 completed years cuts your property capital gains tax from 7.5% to 5.0%.',
      howItWorks: [
        { step: 1, title: 'Verify Your Asset Holding Period', desc: 'For NEPSE shares, check your Demat credit date in MeroShare (threshold is 365 days). For land and property, check the registration date stamped on your Red Land Ownership Certificate (Lalpurja) (threshold is 5 years).' },
        { step: 2, title: 'Calculate Net Capital Gain for Shares', desc: 'Net Gain = Gross Sales Value − Selling Broker Fees − WACC Cost (Purchase Price + Purchase Broker Fees + DP Fees). If positive, apply 5.0% (holding > 365 days) or 7.5% (holding ≤ 365 days).' },
        { step: 3, title: 'Calculate Capital Gain for Land & Real Estate', desc: 'At the Land Revenue Office (Malpot), Capital Gain = Declared Deed Value (which must be at or above Government Minimum Valuation) − Purchase Price on Previous Deed. Apply 5.0% (> 5 years) or 7.5% (≤ 5 years).' },
        { step: 4, title: 'Obtain Official Withholding Receipt', desc: 'Your stockbroker deducts CGT automatically and files it under your PAN. For land, Malpot collects the CGT bank voucher before stamping the deed transfer (Rokka/Dakhil Kharej).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Master Capital Gains Tax (CGT) Matrix in Nepal (FY 2081/82)',
        headers: ['Asset Class', 'Holding Period Threshold', 'CGT Rate (Individual)', 'CGT Rate (Institutional / Corporate)', 'Tax Status'],
        rows: [
          ['NEPSE Listed Shares (Long-Term)', 'More than 365 Days (> 1 Year)', '5.0% on net profit', '10.0% on net profit', 'Final Withholding (Individual)'],
          ['NEPSE Listed Shares (Short-Term)', '365 Days or Less (<= 1 Year)', '7.5% on net profit', '10.0% on net profit', 'Final Withholding (Individual)'],
          ['Land & Buildings (Long-Term)', 'More than 5 Years (> 60 Months)', '5.0% on net gain', '15.0% / Corporate rate', 'Final Withholding at Malpot'],
          ['Land & Buildings (Short-Term)', '5 Years or Less (<= 60 Months)', '7.5% on net gain', '15.0% / Corporate rate', 'Final Withholding at Malpot'],
          ['Unlisted Shares (Pvt Ltd Shares)', 'Any duration', '10.0% on net gain', '15.0% on net gain', 'Advance / Adjustable Withholding']
        ]
      },
      nepalContext: 'A common structural reality in Nepal\'s land market is the divergence between "Government Minimum Valuation" (Sarkari Mulya) determined by the Land Revenue Office and actual "Market Value" (Chalan-Chalti Mulya). Historically, buyers and sellers under-reported deed values to evade CGT and registration fees. However, IRD and the Department of Land Management now cross-reference banking transactions exceeding NPR 10 Lakh, making accurate deed reporting essential to avoid future anti-money laundering audits.',
      practicalScenario: {
        persona: 'Bikash, 44, businessman in Kathmandu',
        income: 'NPR 1,80,000 / month trading and rental income',
        scenarioText: 'Bikash bought a commercial plot in Bhaktapur 4 years and 10 months ago for NPR 50 Lakh. He received an offer to sell it for NPR 90 Lakh and was preparing to sign the transfer deed immediately.',
        solutionText: 'His tax advisor pointed out that holding the land for just 2 more months would cross the 5-year statutory threshold. On a net gain of NPR 40 Lakh: selling at 4 years and 10 months incurs 7.5% CGT = NPR 3,00,000. Waiting 60 days to cross 5 years incurs 5.0% CGT = NPR 2,00,000. Bikash delayed the closing by two months, legally saving NPR 1,00,000 in cash taxes.',
        metricHighlight: 'Saved NPR 1,00,000 in cash CGT simply by waiting 60 days to cross the 5-year threshold'
      },
      formula: {
        name: 'Capital Gains Tax Calculation Formula',
        equation: '\\text{CGT} = \\left(\\text{Sale Price} - \\text{Adjusted Cost Basis}\\right) \\times \\text{Applicable Rate}',
        variables: [
          { symbol: 'Sale Price', name: 'Gross Realized Value', desc: 'Final contract sale value or deed transfer price in Nepalese Rupees.' },
          { symbol: 'Adjusted Cost Basis', name: 'Purchase Cost + Capitalized Fees', desc: 'WACC for shares; recorded purchase deed price plus legal transfer fees for real estate.' },
          { symbol: 'Applicable Rate', name: 'Holding Period Tax Rate', desc: '5% for long-term (shares > 1 yr, land > 5 yrs); 7.5% for short-term.' }
        ],
        exampleCalculation: 'Sold NEPSE stock after 420 days for NPR 5,00,000. Total WACC purchase cost = NPR 3,50,000. Net capital gain = NPR 1,50,000. Because holding > 365 days, long-term CGT rate is 5.0%. Total CGT deducted by broker = 1,50,000 * 0.05 = NPR 7,50,00. If sold on Day 300, tax would be 7.5% = NPR 11,250.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Check Long-Term Wealth'
      },
      commonMistakes: [
        { mistake: 'Selling shares on Day 360 instead of Day 366.', correct: 'Always hold fundamentally sound shares for at least 366 days to capture the lower 5.0% rate.', explanation: 'A 6-day difference saves you 33% of your tax burden under Nepal\'s 365-day statutory cut-off.' },
        { mistake: 'Losing the previous purchase deed (Lalpurja/Rajinama) when selling land.', correct: 'Maintain certified copies of your original purchase deed to establish your cost basis at Malpot.', explanation: 'Without proof of previous purchase price, Malpot may assess tax on the entire sale price.' },
        { mistake: 'Assuming that selling shares at a loss triggers tax.', correct: 'If your selling price is below your WACC, your net capital gain is zero and CGT is NPR 0.', explanation: 'CGT applies strictly to net profits; losses incur zero tax.' }
      ],
      definitions: [
        { term: 'Capital Gains Tax', full: 'Poonjigat Labh Kar', meaning: 'A tax levied on the profit made from the sale of non-inventory assets such as shares and real estate.' },
        { term: 'WACC', full: 'Weighted Average Cost of Capital', meaning: 'The official average purchase price per share calculated in MeroShare including all statutory transaction fees.' },
        { term: 'Holding Period', full: 'Dharana Awadhi', meaning: 'The duration between an asset\'s legal acquisition date and its formal sale date, determining the tax rate.' },
        { term: 'Sarkari Mulya', full: 'Government Minimum Valuation', meaning: 'The minimum threshold valuation established by district Land Revenue Offices below which deeds cannot be registered.' }
      ],
      faqs: [
        { q: 'Is Capital Gains Tax on NEPSE shares an advance tax or final tax?', a: 'For individual retail investors, Capital Gains Tax deducted by your broker is legally treated as a final withholding tax in Nepal.' },
        { q: 'Can I offset stock market losses against real estate gains?', a: 'No. Under the Income Tax Act 2058, losses from securities trading cannot be cross-offset against capital gains realized from real estate or vice versa.' },
        { q: 'Who pays the Capital Gains Tax at Malpot when land is sold?', a: 'Under Nepali law, the seller (Vikreta) is legally liable for paying the Capital Gains Tax, while the buyer (Kretā) typically pays the Land Registration Pass Fee (Likhat Dastur).' }
      ],
      takeaways: [
        'NEPSE shares: 5.0% for holding > 365 days; 7.5% for holding 365 days or less.',
        'Real estate: 5.0% for holding > 5 years; 7.5% for holding 5 years or less.',
        'Waiting just a few days or months to cross holding period thresholds saves up to 33% in cash taxes.',
        'For individuals, CGT on secondary market shares and registered land is a final withholding tax.',
        'Keep original purchase deeds, WACC statements, and bank payment vouchers safely filed for 7 years.'
      ]
    },
    np: {
      title: 'नेपालमा पुँजीगत लाभकर (CGT): सेयर र घरजग्गा बिक्रीमा लाग्ने करको यथार्थ',
      oneLineSummary: 'नेप्से सेयर (५% र ७.५%) र घरजग्गा (५% र ७.५%) बिक्री गर्दा लाग्ने लाभकरको नियम, होल्डिङ अवधि र मालपोतको मूल्यांकन विधि बुझ्नुहोस्।',
      summaryPoints: [
        'पुँजीगत लाभकर (Capital Gains Tax - CGT) सेयर वा घरजग्गा किनेको मूल्यभन्दा बढीमा बेचेर भएको खुद नाफामा मात्र लाग्ने कर हो।',
        'नेप्से सेयर ३६५ दिनभन्दा बढी होल्ड गरेर बेच्दा ५.०% र ३६५ दिन वा सोभन्दा कम होल्ड गर्दा ७.५% लाभकर लाग्छ।',
        'घरजग्गा ५ वर्षभन्दा बढी होल्ड गरेर बेच्दा ५.०% र ५ वर्ष वा सोभन्दा कम होल्ड गरेर बेच्दा ७.५% लाभकर मालपोतमा लाग्छ।',
        'व्यक्तिगत लगानीकर्ताका लागि सूचीकृत सेयर र घरजग्गामा लाग्ने पुँजीगत लाभकर आयकर ऐनको दफा ९५क अनुसार अन्तिम कर (Final Tax) हो।',
        'जग्गा किन्दाको सक्कल लिखत सुरक्षित राख्दा मालपोतमा सरकारी मूल्यांकनको आधारमा अनावश्यक चर्को कर तिर्नुपर्ने जोखिमबाट बचिन्छ।'
      ],
      whatIsThis: 'पुँजीगत लाभकर (CGT) भनेको कुनै पनि पुँजीगत सम्पत्ति (जस्तै नेपाल स्टक एक्सचेन्जमा सूचीकृत सेयर वा मालपोत कार्यालयमा दर्ता भएको घरजग्गा) बिक्री गर्दा भएको खुद नाफामा सरकारलाई बुझाउनुपर्ने आयकर हो। आयकर ऐन २०५८ अनुसार सम्पत्तिको बिक्री मूल्यबाट खरिद मूल्य, सुधार खर्च र कानुनी कारोबार दस्तुर घटाएपछि नाफा बाँकी रहेमा मात्र यो कर लाग्छ।',
      whyItMatters: 'काठमाडौँ वा पोखरामा पुर्ख्यौली जग्गा बेच्दा वा वर्षौँदेखि जोगाएको सेयर बेच्दा लाखौँ रुपैयाँ लाभकरको दायित्व आउन सक्छ। नेपालमा केही दिन वा महिनाको अन्तरले ठूलो कर बचत हुन्छ: सेयर ३६४ दिनमा बेच्दा ७.५% लाग्छ भने ३६६ औँ दिनमा बेच्दा ५.०% मा झर्छ (सीधै ३३% कर बचत)। त्यसैगरी जग्गा ५ वर्ष कटाएर बेच्दा ७.५% बाट घटेर ५.०% मा झर्छ।',
      howItWorks: [
        { step: 1, title: 'सम्पत्तिको होल्डिङ अवधि (Holding Period) जाँच्नुहोस्', desc: 'सेयरका लागि मेरोसेयरमा डिम्याट दाखिला भएको मिति हेर्नुहोस् (३६५ दिनको सीमा)। घरजग्गाका लागि लालपुर्जामा पास भएको मिति हेर्नुहोस् (५ वर्षको सीमा)।' },
        { step: 2, title: 'सेयरको खुद नाफा हिसाब गर्नुहोस्', desc: 'खुद नाफा = कुल बिक्री मूल्य − बिक्री ब्रोकर शुल्क − WACC खरिद लागत। नाफा भएको खण्डमा ३६५ दिन कटेको भए ५% र ३६५ दिन नपुगेको भए ७.५% ब्रोकरले स्वतः काट्छ।' },
        { step: 3, title: 'घरजग्गाको लाभकर मालपोतमा हिसाब गर्नुहोस्', desc: 'मालपोतमा नयाँ लिखत पारित गर्दा: खुद नाफा = थैली अंक (बिक्री मूल्य) − अघिल्लो लिखतको खरिद मूल्य। ५ वर्ष कटेको भए ५% र ५ वर्ष वा कम भए ७.५% बैंक भौचर बुझाउनुपर्छ।' },
        { step: 4, title: 'कर दाखिलाको आधिकारिक रसिद लिनुहोस्', desc: 'ब्रोकरले काटेको लाभकर प्यानमा जम्मा हुन्छ। मालपोतमा बुझाएको लाभकरको सक्कल बैंक भौचर र रसिद आफ्नो नयाँ लालपुर्जासँगै सुरक्षित राख्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा पुँजीगत लाभकर (CGT) को आधिकारिक दर तालिका (आव २०८१/८२)',
        headers: ['सम्पत्तिको प्रकार', 'होल्डिङ अवधिको सीमा', 'व्यक्तिगत लगानीकर्ता दर', 'संस्थागत / कम्पनी दर', 'करको प्रकृति'],
        rows: [
          ['नेप्से सूचीकृत सेयर (दीर्घकालीन)', '३६५ दिनभन्दा बढी (> १ वर्ष)', 'खुद नाफामा ५.०%', 'खुद नाफामा १०.०%', 'अन्तिम कर कट्टी (Final)'],
          ['नेप्से सूचीकृत सेयर (अल्पकालीन)', '३६५ दिन वा सोभन्दा कम (<= १ वर्ष)', 'खुद नाफामा ७.५%', 'खुद नाफामा १०.०%', 'अन्तिम कर कट्टी (Final)'],
          ['घर तथा जग्गा (दीर्घकालीन)', '५ वर्षभन्दा बढी (> ६० महिना)', 'खुद नाफामा ५.०%', '१५.०% / संस्थागत दर', 'मालपोतमा अन्तिम कर'],
          ['घर तथा जग्गा (अल्पकालीन)', '५ वर्ष वा सोभन्दा कम (<= ६० महिना)', 'खुद नाफामा ७.५%', '१५.०% / संस्थागत दर', 'मालपोतमा अन्तिम कर'],
          ['गैर-सूचीकृत सेयर (Pvt Ltd)', 'जतिसुकै अवधि भए पनि', 'खुद नाफामा १०.०%', 'खुद नाफामा १५.०%', 'अग्रिम कर कट्टी']
        ]
      },
      nepalContext: 'नेपालको घरजग्गा बजारमा मालपोत कार्यालयले तोक्ने "सरकारी न्यूनतम मूल्यांकन" र बजारको "चलनचल्ती मूल्य" बीच ठूलो अन्तर हुने गर्दछ। पहिले-पहिले कर छल्न कम थैली राखेर पास गर्ने चलन थियो। तर हाल राष्ट्र बैंक र राजस्व विभागले बैंकिङ माध्यमबाट हुने रु. १० लाखभन्दा माथिका सबै भुक्तानीलाई निगरानी गर्ने भएकाले वास्तविक कारोबार मूल्यमै लिखत पारित गरी कानुनी रूपमा सुरक्षित हुनुपर्छ।',
      practicalScenario: {
        persona: 'विकास, ४४, काठमाडौँका व्यापारी',
        income: 'मासिक व्यवसाय र घरभाडा आम्दानी रु. १,८०,000',
        scenarioText: 'विकासले भक्तपुरमा ४ वर्ष १० महिनाअघि रु. ५० लाखमा किनेको जग्गा रु. ९० लाखमा बेच्ने ग्राहक भेटे। उनी तत्कालै मालपोत गएर पास गरिदिन तयार थिए।',
        solutionText: 'उनका लेखापरीक्षकले जग्गा किनेको ५ वर्ष पुग्न जम्मा २ महिना बाँकी रहेको सम्झाए। रु. ४० लाखको नाफामा: अहिले नै बेच्दा ७.५% कर = रु. ३,००,००० लाग्थ्यो। २ महिना कुरेर ५ वर्ष कटाउँदा ५.०% कर = रु. २,००,००० मात्र लाग्छ। विकासले २ महिना पर्खेर बैना गरे र ५ वर्ष कटेपछि पास गर्दा सीधै रु. १,००,००० नगद कर बचत गरे।',
        metricHighlight: '५ वर्षको सीमा पार गर्न ६० दिन पर्खिएर सीधै रु. १,००,००० नगद लाभकर बचत'
      },
      formula: {
        name: 'पुँजीगत लाभकर हिसाब सूत्र',
        equation: '\\text{पुँजीगत लाभकर} = \\left(\\text{बिक्री मूल्य} - \\text{समायोजित खरिद लागत}\\right) \\times \\text{लागू हुने कर दर}',
        variables: [
          { symbol: 'बिक्री मूल्य', name: 'वास्तविक बिक्री रकम', desc: 'नेप्सेमा कारोबार भएको रकम वा मालपोतको लिखत थैली अंक।' },
          { symbol: 'समायोजित खरिद लागत', name: 'खरिद मूल्य + शुल्क', desc: 'सेयरको WACC वा जग्गाको पुरानो लिखत मूल्य र कानुनी दस्तुर।' },
          { symbol: 'लागू हुने कर दर', name: 'अवधि अनुसारको कर प्रतिशत', desc: 'दीर्घकालीनका लागि ५% (सेयर > १ वर्ष, जग्गा > ५ वर्ष); अल्पकालीनका लागि ७.५%।' }
        ],
        exampleCalculation: 'नेप्सेमा ४२० दिनपछि रु. ५,००,००० मा सेयर बेचियो। खरिदको WACC लागत रु. ३,५०,००० थियो। खुद नाफा = रु. १,५०,०००। ३६५ दिन कटेकाले ५% दर लागू हुन्छ: लाभकर = १,५०,००० * ०.०५ = रु. ७,५००। यदि ३०० दिनमै बेचेको भए ७.५% ले रु. ११,२५० तिर्नुपर्थ्यो (रु. ३,७५० बढी)।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'दीर्घकालीन सम्पत्ति क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: '३६० औँ दिनमा सेयर बेचेर ७.५% कर तिर्नु।', correct: 'बलिया कम्पनीको सेयर कम्तीमा ३६६ दिन पुर्‍याएर मात्र बेच्नुहोस् ताकि कर ५% मा झरोस्।', explanation: 'केही दिनको धैर्यले सरकारी लाभकरमा सीधै ३३% बचत गराउँछ।' },
        { mistake: 'जग्गा किनेको पुरानो लिखत (राजीनामा) हराउनु।', correct: 'आफूले किन्दाको सक्कल लिखत र मालपोत रसिद सुरक्षित राख्नुहोस्।', explanation: 'पुरानो खरिद मूल्यको प्रमाण नभए मालपोतले कुल बिक्री रकममै लाभकर लगाइदिन सक्छ।' },
        { mistake: 'घाटामा सेयर बेच्दा पनि लाभकर लाग्छ भनी डराउनु।', correct: 'बिक्री मूल्य खरिद मूल्यभन्दा कम भए लाभकर शून्य हुन्छ।', explanation: 'पुँजीगत लाभकर नाफामा मात्र लाग्छ, नोक्सानीमा कुनै कर लाग्दैन।' }
      ],
      definitions: [
        { term: 'पुँजीगत लाभकर (CGT)', full: 'सम्पत्ति नाफा कर', meaning: 'सेयर, ऋणपत्र वा घरजग्गा बिक्रीबाट भएको खुद पुँजीगत नाफामा सरकारलाई बुझाउनुपर्ने कर।' },
        { term: 'WACC', full: 'भारित औसत लागत (Weighted Average Cost)', meaning: 'मेरोसेयरमा ब्रोकर र सेवा शुल्क जोडेर निकालिने प्रति कित्ता वास्तविक खरिद लागत।' },
        { term: 'होल्डिङ अवधि', full: 'सम्पत्ति राखेको समय', meaning: 'सम्पत्ति खरिद गरेको मितिदेखि बिक्री गरेको मितिसम्मको कुल समय जसले करको दर निर्धारण गर्छ।' },
        { term: 'सरकारी न्यूनतम मूल्यांकन', full: 'मालपोत थैली अंक', meaning: 'जिल्ला दररेट निर्धारण समितिले तोकेको न्यूनतम जग्गाको मूल्य जसभन्दा कममा रजिष्ट्रेसन पास गर्न पाइँदैन।' }
      ],
      faqs: [
        { q: 'के नेप्से सेयरको पुँजीगत लाभकर अन्तिम कर हो?', a: 'हो। व्यक्तिगत सर्वसाधारण लगानीकर्ताका लागि ब्रोकरले काटेर राजस्वमा दाखिला गर्ने ५% वा ७.५% लाभकर नै अन्तिम कर मानिन्छ।' },
        { q: 'के सेयरको घाटा घरजग्गाको नाफासँग जोडेर घटाउन मिल्छ?', a: 'मिल्दैन। आयकर ऐन २०५८ अनुसार सेयर कारोबारको घाटा घरजग्गाको नाफासँग वा घरजग्गाको घाटा सेयरको नाफासँग क्रस-मिलान (Cross-offset) गर्न पाइँदैन।' },
        { q: 'जग्गा पास गर्दा पुँजीगत लाभकर कसले तिर्नुपर्छ?', a: 'नेपालको कानुन अनुसार पुँजीगत लाभकर जग्गा बेच्ने बिक्रेता (Seller) ले तिर्नुपर्छ भने लिखत रजिस्ट्रेसन दस्तुर खरिदकर्ता (Buyer) ले तिर्ने प्रचलन छ।' }
      ],
      takeaways: [
        'नेप्से सेयर: ३६५ दिन कटे ५.०%; ३६५ दिन वा कम भए ७.५% लाभकर।',
        'घरजग्गा: ५ वर्ष कटे ५.०%; ५ वर्ष वा कम भए ७.५% लाभकर।',
        'होल्डिङ अवधिको सीमा पार गर्न केही दिन वा महिना पर्खिँदा सीधै ३३% कर बचत हुन्छ।',
        'व्यक्तिगत लगानीकर्ताका लागि सेयर र घरजग्गाको लाभकर अन्तिम कर (Final Tax) हो।',
        'जग्गाको पुरानो लिखत, मेरोसेयरको WACC विवरण र बैंक भौचर सधैँ सुरक्षित राख्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Simulate long-term post-CGT equity compounding returns.' }
    ],
    downloadableResources: [
      { title: 'Capital Gains Tax Calculation Sheet (Shares & Real Estate) (PDF)', type: 'PDF Tool', format: 'PDF Document', size: '160 KB', href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html' }
    ]
  },

  // ── E4. HOW TO GET PERSONAL PAN IN NEPAL ─────────────────────────
  'how-to-get-personal-pan-nepal': {
    id: 'tax-personal-pan-setup',
    slug: 'how-to-get-personal-pan-nepal',
    categorySlug: 'taxation',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '7 min read', np: '७ मिनेट पढाइ' },
    masteryTime: { en: '10 min registration execution', np: '१० मिनेट अनलाइन दर्ता' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Inland Revenue Department (IRD) PAN Issuance System & Nagarik App Integration', np: 'आन्तरिक राजस्व विभाग स्थायी लेखा नम्बर प्रणाली र नागरिक एप अनुसार समीक्षित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'How to Get a Personal PAN Online in Nepal via Nagarik App & IRD Portal',
      oneLineSummary: 'Obtain your free 9-digit Permanent Account Number (PAN) in under 5 minutes from your smartphone - legally required for salary, Demat, and bank interest.',
      summaryPoints: [
        'A Personal PAN (Permanent Account Number / Sthayee Lekha Number) is a unique 9-digit tax identification number issued for life by the Inland Revenue Department.',
        'Under the government\'s "One Person, One PAN" policy, having a PAN is legally mandatory to receive a salary, trade in NEPSE, open a Demat account, or register a company.',
        'You can generate an official digital PAN instantly for free through the government\'s Nagarik App using your citizenship details.',
        'Alternatively, you can apply through the IRD online portal (tax.ird.gov.np) and collect a printed laminated card from your local Taxpayer Service Office (TSO).',
        'A Personal PAN does NOT mean you must pay tax if your annual income is below the national basic exemption limit (NPR 5 Lakh single / NPR 6 Lakh married).'
      ],
      whatIsThis: 'A Personal Permanent Account Number (Personal PAN / Byaktigat Sthayee Lekha Number) is a permanent 9-digit alphanumeric identifier assigned by the Inland Revenue Department (IRD) to track financial transactions, tax payments, and statutory withholding across Nepal. It remains identical for your entire lifetime across all jobs, banks, and investments.',
      whyItMatters: 'Without a Personal PAN, employers cannot legally credit your salary through banking channels under the Labor Act 2074. Stockbrokers cannot register your TMS account, banks cannot deposit investment dividends, and you cannot claim tax credit for withheld TDS. Many citizens mistakenly avoid getting a PAN fearing immediate tax bills, unaware that registering is 100% free and simply establishes your legal financial identity.',
      howItWorks: [
        { step: 1, title: 'Method A: Instant PAN via Nagarik App (Fastest)', desc: 'Download the government "Nagarik App" (नागरिक एप). Verify using your mobile number registered under your citizenship. Tap "PAN" → "Apply for PAN". Verify your auto-fetched citizenship and voter ID data, choose your nearest Inland Revenue Office (IRO), and submit. Your 9-digit digital PAN is generated instantly.' },
        { step: 2, title: 'Method B: IRD Online Portal Registration', desc: 'Visit tax.ird.gov.np. Click "Taxpayer Portal" → "Application for Registration" → select "Personal PAN". Choose your nearest Taxpayer Service Office (TSO / KarData Sewa Karyalaya), enter login username/password, and complete the personal information form.' },
        { step: 3, title: 'Upload Scanned Verification Documents', desc: 'Upload clear photos of your Citizenship Certificate (both front and back), a passport-sized digital photo, and your signature. Print the submission confirmation receipt containing your Submission Number.' },
        { step: 4, title: 'Collect Physical Laminated Card (Optional)', desc: 'Take your original citizenship and the printed submission receipt to your chosen local Taxpayer Service Office. The officer verifies your original citizenship and hands over your laminated physical PAN card within 5 minutes at zero cost.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Comparison: Nagarik App Instant PAN vs IRD Portal Registration',
        headers: ['Registration Parameter', 'Nagarik App Method (Recommended)', 'IRD Web Portal Method'],
        rows: [
          ['Time Required', 'Under 3 minutes on smartphone', '10 to 15 minutes online'],
          ['Document Verification', 'Automated via National Citizenship Database', 'Manual upload of scanned photos/documents'],
          ['Physical Office Visit', 'Zero visit needed (100% digital card in app)', 'Optional visit to collect physical card'],
          ['Government Application Fee', 'NPR 0 (Free of cost)', 'NPR 0 (Free of cost)'],
          ['Validity & Acceptance', 'Accepted by all banks, brokers & employers', 'Accepted universally across all institutions']
        ]
      },
      nepalContext: 'Prior to 2019, PAN was primarily used by businesses and high-earning consultants. However, the Government of Nepal made Personal PAN mandatory for every formal wage earner and capital market participant. Today, CDSC rules require your 9-digit PAN to be linked inside your MeroShare Demat profile; failure to link PAN leads to delays in tax clearance when selling shares or collecting bonus share allotments.',
      practicalScenario: {
        persona: 'Sita, 19, BBS first-year student in Pokhara',
        income: 'Starting her first part-time tuition job (NPR 15,000 / month)',
        scenarioText: 'Sita got hired at a local tutoring academy. The accountant told her they could not disburse her first monthly paycheck until she submitted her PAN number. Terrified of tax paperwork, she delayed for weeks.',
        solutionText: 'Her brother showed her the Nagarik App. She entered her citizenship details on her phone; within 90 seconds, her official 9-digit PAN card was displayed on screen. She sent the digital screenshot to her employer\'s accounts department, and her salary was deposited into her bank account the following morning.',
        metricHighlight: 'Obtained official government PAN in under 90 seconds from home without visiting an office'
      },
      formula: {
        name: 'Personal PAN Digit Architecture',
        equation: '\\text{PAN} = [d_1 d_2 d_3 d_4 d_5 d_6 d_7 d_8] - [c_9] \\quad \\text{(9 Unique Digits, Lifetime Identity)}',
        variables: [
          { symbol: 'd_1 to d_8', name: 'Sequential Registration Digits', desc: 'Unique sequential identifier assigned by IRD central database.' },
          { symbol: 'c_9', name: 'Modulo-11 Checksum Digit', desc: 'Mathematical verification digit preventing typos in banking systems.' },
          { symbol: 'Validity', name: 'Lifetime Permanence', desc: 'A PAN never expires and cannot be transferred or duplicated.' }
        ],
        exampleCalculation: 'Example format: 123456789. Once issued, this single 9-digit number connects your salary records, bank accounts, Demat, connectIPS, real estate purchases, and vehicle registrations across Nepal.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Income Tax Thresholds'
      },
      commonMistakes: [
        { mistake: 'Applying for a second PAN when moving to a new job or city.', correct: 'You can only have ONE PAN for life; use your existing number permanently.', explanation: 'Holding multiple PAN numbers is illegal under the Income Tax Act and triggers financial penalties.' },
        { mistake: 'Thinking that getting a PAN automatically forces you to pay income tax.', correct: 'PAN is simply your tax identity; tax is only owed if your income exceeds exemption limits.', explanation: 'If you earn under NPR 5,00,000/year (single), having a PAN does not create tax liability.' },
        { mistake: 'Paying middleman agents at tax office gates NPR 500-1,000.', correct: 'PAN registration is 100% free; use the Nagarik App or walk directly inside the office.', explanation: 'Brokers outside tax offices charge fees for a free government service that takes 2 minutes.' }
      ],
      definitions: [
        { term: 'Personal PAN', full: 'Byaktigat Sthayee Lekha Number', meaning: 'The 9-digit lifetime legal tax identity issued by the Inland Revenue Department to individuals in Nepal.' },
        { term: 'Nagarik App', full: 'Government Digital Identity App', meaning: 'The official mobile application of the Government of Nepal integrating citizen documents digitally.' },
        { term: 'TSO', full: 'KarData Sewa Karyalaya', meaning: 'Taxpayer Service Offices operating under Inland Revenue Offices providing citizen tax services locally.' },
        { term: 'One Person, One PAN', full: 'Ek Byakti, Ek PAN Niti', meaning: 'The national policy mandating that every citizen must possess exactly one tax identification number.' }
      ],
      faqs: [
        { q: 'Is there any fee to obtain a Personal PAN in Nepal?', a: 'No. The Government of Nepal and the Inland Revenue Department provide PAN registration and laminated card issuance 100% free of charge.' },
        { q: 'Can a student or unemployed person get a Personal PAN?', a: 'Yes. Any Nepali citizen who possesses an official citizenship certificate can obtain a PAN, regardless of employment or income status.' },
        { q: 'What should I do if I forget or lose my PAN number?', a: 'Log into the Nagarik App to view your card instantly, or visit your local Taxpayer Service Office with your citizenship to reprint your card.' }
      ],
      takeaways: [
        'A Personal PAN is your lifetime 9-digit financial identity in Nepal - issued 100% free.',
        'Use the Nagarik App to obtain your official digital PAN in under 3 minutes from home.',
        'Having a PAN does NOT mean paying tax if your earnings are below exemption thresholds.',
        'PAN is legally mandatory for salary deposits, opening a Demat account, and investing in NEPSE.',
        'You can only hold ONE PAN for life; never attempt to register duplicate numbers.'
      ]
    },
    np: {
      title: 'नेपालमा व्यक्तिगत प्यान (Personal PAN) अनलाइन लिने सजिलो तरिका: नागरिक एप र IRD पोर्टल',
      oneLineSummary: 'नागरिक एपबाट ५ मिनेटमै निःशुल्क ९ अंकको स्थायी लेखा नम्बर (PAN) लिने तरिका - तलब, डिम्याट खाता र सेयर कारोबारका लागि अनिवार्य कानुनी परिचय।',
      summaryPoints: [
        'व्यक्तिगत प्यान (Personal PAN) भनेको आन्तरिक राजस्व विभागले नागरिकलाई जीवनभरका लागि जारी गर्ने ९ अंकको आधिकारिक कर पहिचान नम्बर हो।',
        'सरकारको "एक व्यक्ति, एक प्यान" नीति अनुसार तलब पाउन, सेयर कारोबार गर्न, डिम्याट खोल्न र व्यवसाय गर्न प्यान अनिवार्य छ।',
        'नागरिक एप (Nagarik App) बाट नागरिकता विवरण प्रमाणित गरी घरमै बसेर १ मिनेटमै निःशुल्क डिजिटल प्यान कार्ड पाउन सकिन्छ।',
        'आन्तरिक राजस्व विभागको पोर्टल (tax.ird.gov.np) बाट अनलाइन फारम भरेर नजिकैको करदाता सेवा कार्यालयबाट ल्यामिनेट गरिएको कार्ड लिन पनि सकिन्छ।',
        'प्यान लिँदैमा कर तिर्नुपर्छ भन्ने हुँदैन; वार्षिक आम्दानी कर छुटको सीमा (एकलका लागि रु. ५ लाख / दम्पतीका लागि रु. ६ लाख) भन्दा कम भए कर लाग्दैन।'
      ],
      whatIsThis: 'व्यक्तिगत स्थायी लेखा नम्बर (Personal PAN) भनेको नेपालमा कुनै पनि नागरिकको वित्तीय कारोबार, पारिश्रमिक, लगानी र कर विवरण ट्र्याक गर्न आन्तरिक राजस्व विभागले उपलब्ध गराउने स्थायी परिचयपत्र हो। यो नम्बर जीवनभर एउटै रहन्छ र जुनसुकै जागिर वा व्यवसाय गर्दा पनि परिवर्तन हुँदैन।',
      whyItMatters: 'श्रम ऐन २०७४ अनुसार प्यान नम्बर बिना बैंक खातामा पारिश्रमिक पठाउन रोजगारदातालाई कानुनले रोकेको छ। डिम्याट खोल्न, मेरोसेयर अपडेट गर्न र सेयरको लाभांश खातामा पाउन पनि प्यान अनिवार्य छ। धेरै नेपालीहरू प्यान लिनासाथ सरकारले कर काट्छ भन्ने गलत डरले प्यान बनाउन हिचकिचाउँछन्, जबकि प्यान बनाउनु पूर्णतः निःशुल्क छ र यसले नागरिकको आधिकारिक वित्तीय पहिचान स्थापित गर्छ।',
      howItWorks: [
        { step: 1, title: 'पहिलो तरिका: नागरिक एपबाट तत्कालै प्यान लिनुहोस् (सबैभन्दा छिटो)', desc: 'मोबाइलमा "नागरिक एप (Nagarik App)" डाउनलोड गर्नुहोस्। आफ्नै नागरिकताको नाममा दर्ता भएको सिम नम्बरबाट भेरिफाइ गर्नुहोस्। "प्यान (PAN)" मा ट्याप गरी "प्यान दर्ता" रोज्नुहोस्। नागरिकता विवरण रुजु गरी आफूलाई पायक पर्ने कर कार्यालय छान्नुहोस्। १ मिनेटमै ९ अंकको डिजिटल प्यान कार्ड तयार हुन्छ।' },
        { step: 2, title: 'दोस्रो तरिका: IRD वेभ पोर्टलबाट आवेदन', desc: 'tax.ird.gov.np मा जानुहोस्। "Taxpayer Portal" → "Application for Registration" मा गई "Personal PAN" छान्नुहोस्। आफू नजिकको करदाता सेवा कार्यालय (TSO) छानी युजरनेम र पासवर्ड बनाउनुहोस्।' },
        { step: 3, title: 'कागजातहरू अनलाइन अपलोड गर्नुहोस्', desc: 'आफ्नो नागरिकताको अगाडि र पछाडिको स्पष्ट फोटो, पासपोर्ट साइजको फोटो र डिजिटल हस्ताक्षर अपलोड गर्नुहोस्। फारम सबमिट गरी Submission Number सहितको रसिद प्रिन्ट गर्नुहोस्।' },
        { step: 4, title: 'भौतिक ल्यामिनेट कार्ड लिनुहोस् (ऐच्छिक)', desc: 'नागरिक एपको डिजिटल प्यान नै सबैतिर मान्य हुन्छ। यदि भौतिक कार्ड नै चाहिएमा सक्कल नागरिकता र प्रिन्ट रसिद लिएर छानेको कर कार्यालय जानुहोस्; कर्मचारीले रुजु गरेर ५ मिनेटमै निःशुल्क कार्ड हातमा दिन्छन्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नागरिक एप र IRD वेभसाइटबाट प्यान बनाउने विधिको तुलना',
        headers: ['तुलनाको विषय', 'नागरिक एप विधि (सबैभन्दा सिफारिस गरिएको)', 'IRD वेभ पोर्टल विधि'],
        rows: [
          ['लाग्ने समय', 'मोबाइलबाट ३ मिनेटभित्र तत्कालै', 'कम्प्युटरबाट १० देखि १५ मिनेट'],
          ['कागजात प्रमाणीकरण', 'सरकारी नागरिकता डाटाबेसबाट स्वतः प्रमाणित', 'फोटो र नागरिकता स्क्यान गरी अपलोड गर्नुपर्ने'],
          ['कार्यालय धाउनुपर्ने बाध्यता', 'कतै जानु नपर्ने (एपमै पूर्ण डिजिटल कार्ड)', 'भौतिक कार्ड चाहिएमा एकपटक कार्यालय जान सकिने'],
          ['सरकारी दस्तुर', 'रु. ० (पूर्ण रूपमा निःशुल्क)', 'रु. ० (पूर्ण रूपमा निःशुल्क)'],
          ['मान्यता र स्वीकार्यता', 'सबै बैंक, ब्रोकर र कार्यालयमा १००% मान्य', 'सबै सरकारी तथा निजी निकायमा मान्य']
        ]
      },
      nepalContext: 'पहिले-पहिले प्यान ठूला व्यापारी र कन्सल्ट्यान्टले मात्र लिन्थे। तर २०७६ सालदेखि नेपाल सरकारले पारिश्रमिक पाउने सबै श्रमिक र कर्मचारीका लागि प्यान अनिवार्य गर्‍यो। सीडीएससीको नियम अनुसार हाल मेरोसेयरको डिम्याट प्रोफाइलमा पनि प्यान नम्बर लिंक हुनैपर्छ; प्यान नभए सेयर बिक्री गर्दा कर चुक्ताको प्रमाणपत्र पाउन र पुँजीगत लाभकर हिसाब गर्न समस्या हुन्छ।',
      practicalScenario: {
        persona: 'सिता, १९, पोखराकी बिबिएस प्रथम वर्षकी विद्यार्थी',
        income: 'पहिलोपटक पार्ट-टाइम ट्युसन पढाउन सुरु (मासिक रु. १५,०००)',
        scenarioText: 'सिताले एउटा ट्युसन सेन्टरमा काम सुरु गरिन्। लेखापालले प्यान नम्बर नल्याई तलब बैंकमा हाल्न मिल्दैन भने। कर कार्यालयको झन्झट सम्झेर उनी निकै डराइन्।',
        solutionText: 'उनका दाजुले नागरिक एप देखाइदिए। सिताले एपमा नागरिकता नम्बर हालिन्; ९० सेकेन्डमै उनको ९ अंकको डिजिटल प्यान कार्ड स्क्रिनमा आयो। उनले त्यसको स्क्रिनसट लेखा शाखामा पठाइन् र भोलिपल्टै पहिलो महिनाको तलब बैंक खातामा जम्मा भयो।',
        metricHighlight: 'कुनै सरकारी कार्यालय नगई घरमै बसेर ९० सेकेन्डमै प्यान कार्ड प्राप्त'
      },
      formula: {
        name: 'स्थायी लेखा नम्बर (PAN) को संरचना',
        equation: '\\text{PAN} = [d_१ d_२ d_३ d_४ d_५ d_६ d_७ d_८] - [c_९] \\quad \\text{(९ अंकको स्थायी पहिचान)}',
        variables: [
          { symbol: 'd_१ देखि d_८', name: 'क्रमबद्ध दर्ता अंकहरू', desc: 'विभागको केन्द्रीय सर्भरले दिने अद्वितीय नागरिक कर कोड।' },
          { symbol: 'c_९', name: 'चेकसम् अंक (Checksum)', desc: 'बैंक प्रणालीमा नम्बर टाइप गर्दा गल्ती नहोस् भनी जाँच्ने गणितीय अंक।' },
          { symbol: 'मान्यता', name: 'आजीवन वैधता', desc: 'प्यान कहिल्यै म्याद सकिँदैन र नवीकरण गर्नुपर्दैन।' }
        ],
        exampleCalculation: 'उदाहरण: १२३४५६७८९। यो ९ अंकको नम्बरले तपाईंको बैंक खाता, डिम्याट, connectIPS, घरजग्गा खरिदबिक्री र पारिश्रमिकलाई कानुनी रूपमा एकै ठाउँमा जोड्दछ।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'कर छुट सीमा क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'नयाँ जागिरमा जाँदा वा सहर फेरिँदा अर्को नयाँ प्यान लिन खोज्नु।', correct: 'जीवनभर एउटा मात्र प्यान नम्बर हुन्छ; सोही नम्बर सधैँ प्रयोग गर्नुहोस्।', explanation: 'दोहोरो प्यान लिनु आयकर ऐन विपरीत गैरकानुनी मानिन्छ र जरिवाना हुन सक्छ।' },
        { mistake: 'प्यान लिने बित्तिकै सरकारलाई कर तिर्नुपर्छ भनी सोच्नु।', correct: 'प्यान पहिचान मात्र हो; आम्दानी कर छुटको सीमाभन्दा धेरै भए मात्र कर लाग्छ।', explanation: 'वार्षिक ५ लाखभन्दा कम कमाउनेले प्यान लिए पनि कुनै अतिरिक्त आयकर तिर्नुपर्दैन।' },
        { mistake: 'कर कार्यालय बाहिरका बिचौलियालाई रु. ५००-१,००० तिरेर प्यान बनाउनु।', correct: 'प्यान पूर्णतः निःशुल्क सेवा हो; नागरिक एपबाट आफैँ २ मिनेटमा बनाउनुहोस्।', explanation: 'सरकारी स्तरमै निःशुल्क भएको सेवाका लागि बाहिर पैसा खेर फाल्नु अनावश्यक हो।' }
      ],
      definitions: [
        { term: 'व्यक्तिगत प्यान (Personal PAN)', full: 'स्थायी लेखा नम्बर', meaning: 'आन्तरिक राजस्व विभागले नागरिकलाई जारी गर्ने ९ अंकको आजीवन कर पहिचान नम्बर।' },
        { term: 'नागरिक एप (Nagarik App)', full: 'सरकारी डिजिटल सेवा एप', meaning: 'नेपाल सरकारले नागरिकका सम्पूर्ण सरकारी परिचयपत्रहरू एकै ठाउँमा उपलब्ध गराएको आधिकारिक मोबाइल एप।' },
        { term: 'करदाता सेवा कार्यालय (TSO)', full: 'स्थानीय कर कार्यालय', meaning: 'आन्तरिक राजस्व कार्यालय मातहत रहेर स्थानीय स्तरमा कर सेवा दिने शाखा कार्यालय।' },
        { term: 'एक व्यक्ति, एक प्यान नीति', full: 'राष्ट्रिय कर पहिचान नीति', meaning: 'कुनै पनि नागरिकसँग एउटा मात्र स्थायी कर नम्बर हुनुपर्ने सरकारी कानुनी मापदण्ड।' }
      ],
      faqs: [
        { q: 'नेपालमा व्यक्तिगत प्यान लिन कुनै शुल्क लाग्छ?', a: 'लाग्दैन। नेपाल सरकार र आन्तरिक राजस्व विभागले प्यान दर्ता र कार्ड वितरण पूर्ण रूपमा १००% निःशुल्क उपलब्ध गराउँछ।' },
        { q: 'के बेरोजगार वा विद्यार्थीले प्यान लिन पाउँछन्?', a: 'पाउँछन्। १६ वर्ष उमेर पुगेर नेपाली नागरिकता प्राप्त गरेको जुनसुकै नागरिकले रोजगारी नभए पनि प्यान कार्ड लिन पाउँछ।' },
        { q: 'यदि प्यान नम्बर बिर्सियो वा कार्ड हरायो भने के गर्ने?', a: 'नागरिक एप खोलेर तत्कालै हेर्न सकिन्छ, वा सक्कल नागरिकता बोकेर नजिकको करदाता सेवा कार्यालय गई पुनः प्रिन्ट लिन सकिन्छ।' }
      ],
      takeaways: [
        'व्यक्तिगत प्यान नेपालमा तपाईंको जीवनभरको आधिकारिक वित्तीय परिचयपत्र हो - यो पूर्णतः निःशुल्क पाइन्छ।',
        'नागरिक एप प्रयोग गरी घरमै बसेर ३ मिनेटभित्र आफ्नो आधिकारिक डिजिटल प्यान कार्ड बनाउनुहोस्।',
        'प्यान लिँदैमा कर लाग्दैन; छुट सीमाभन्दा धेरै आम्दानी भए मात्र कर तिर्नुपर्छ।',
        'बैंकमा तलब बुझ्न, डिम्याट खाता खोल्न र सेयर कारोबार गर्न प्यान कानुनी रूपमा अनिवार्य छ।',
        'जीवनभर एउटा मात्र प्यान नम्बर मान्य हुन्छ; कहिल्यै दोहोरो प्यान लिने गल्ती नगर्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Simulate progressive income tax brackets based on your personal PAN income.' }
    ],
    downloadableResources: [
      { title: 'Personal PAN Application Step-by-Step User Manual (PDF)', type: 'PDF Manual', format: 'PDF Document', size: '150 KB', href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html' }
    ]
  },

  // ── E5. FILING ANNUAL RETURNS & TAX CLEARANCE ─────────────────────
  'filing-annual-returns-tax-clearance': {
    id: 'tax-annual-returns-clearance',
    slug: 'filing-annual-returns-tax-clearance',
    categorySlug: 'taxation',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '25 min portal filing walkthrough', np: '२५ मिनेट कर दाखिला र चुक्ता' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Inland Revenue Department (IRD) Section 96 Return Directives & Section 117 Penalties', np: 'आन्तरिक राजस्व विभाग दफा ९६ विवरण दाखिला र दफा ११७ जरिवाना अनुसार समीक्षित' },
    prerequisites: { en: 'TDS Rates in Nepal & PAN Setup', np: 'TDS दरहरू र प्यान' },
    en: {
      title: 'Filing Annual Tax Returns & Getting a Tax Clearance Certificate in Nepal',
      oneLineSummary: 'Master the step-by-step IRD portal filing process (Form D-01/D-03), reconcile your TDS, avoid Section 117 penalties, and download your official Kar Chukti Pramanpatra.',
      summaryPoints: [
        'Every individual earning above NPR 40 Lakh annually, having multiple income sources, or operating a sole proprietorship must file an annual tax return under Section 96.',
        'The statutory deadline to submit annual income returns (Aamdani Bibaran) is Ashwin end (October), extendable up to Poush end (January) upon formal online request.',
        'Form D-01 is used by salaried individuals and professionals without complicated inventory; Form D-03 is for audited business balance sheets.',
        'Reconciling all advance TDS against your final slab tax liability prevents surprise tax assessments and establishes your verified legal tax credit.',
        'A formal Tax Clearance Certificate (Kar Chukti Pramanpatra) is downloadable directly from the IRD portal within 24 hours once all taxes are reconciled.'
      ],
      whatIsThis: 'Filing an Annual Tax Return (Aamdani Bibaran Dakhila) is the formal statutory declaration submitted by a taxpayer to the Inland Revenue Department (IRD) detailing all gross income earned from employment, business, and investments during the previous fiscal year (Shrawan 1 to Ashadh end). A Tax Clearance Certificate (Kar Chukti Pramanpatra) is the official government document certifying that the taxpayer owes zero outstanding tax dues to the state.',
      whyItMatters: 'A Tax Clearance Certificate is essential in Nepal: foreign embassies require it for student and tourist visa processing, commercial banks demand it for approving home and business loans, and government agencies mandate it for trade licenses and procurement tenders. Failing to file returns triggers compounding monthly fines under Section 117 (0.1% per year or NPR 100/month), freezing your tax profile.',
      howItWorks: [
        { step: 1, title: 'Gather Financial Statements & TDS Receipts', desc: 'Collect your annual employer salary statement, bank interest tax certificates, broker CGT statements, and consulting TDS deduction memos across the fiscal year.' },
        { step: 2, title: 'Log In to IRD Portal (tax.ird.gov.np)', desc: 'Navigate to "Taxpayer Portal" → "Income Tax" → "Return Submission". Select your fiscal year (e.g., 2080.2081) and choose the appropriate return form (Form D-01 for individuals/consultants).' },
        { step: 3, title: 'Input Income & Claim Allowable Deductions', desc: 'Enter total assessable income. Declare your deductions: retirement fund contributions (SSF/CIT up to NPR 5L), life insurance (up to NPR 40K), and health insurance (up to NPR 20K). Your net tax liability calculates automatically.' },
        { step: 4, title: 'Offset TDS, Pay Net Balance & Download Clearance', desc: 'Import all TDS deposited to your PAN. If tax payable is zero or fully covered by TDS, submit the return. Click "Tax Clearance" → generate your official QR-coded Kar Chukti Pramanpatra instantly.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Annual Income Tax Return Forms in Nepal (IRD Portal)',
        headers: ['Return Form', 'Target Taxpayer Category', 'Income / Turnover Threshold', 'Audit Requirement'],
        rows: [
          ['Form D-01', 'Salaried individuals with single/multiple employers, freelance consultants', 'Turnover under NPR 50 Lakh, simple income', 'No audit required; self-declaration'],
          ['Form D-02', 'Small sole proprietorships and retail traders under presumptive tax', 'Annual turnover up to NPR 30 Lakh / NPR 1 Crore', 'Presumptive flat tax; no audit'],
          ['Form D-03', 'Pvt Ltd companies, partnerships, large sole proprietorships', 'Annual turnover above NPR 50 Lakh or complex balance sheet', 'Mandatory audit by Registered Auditor (RA/CA)'],
          ['Form D-04', 'Specialized institutions (cooperatives, exempt entities)', 'Non-profit, diplomatic, or tax-exempt entities', 'Statutory audit by licensed CA']
        ]
      },
      nepalContext: 'Under Section 97 of the Income Tax Act, salaried individuals who earn income from only ONE resident employer and have zero other income sources are technically exempt from filing a separate individual return (their employer\'s annual ETDS filing acts as their deemed return). However, if you need a Tax Clearance Certificate for a foreign visa (US, UK, Australia, Schengen) or a bank loan, you MUST voluntarily submit Form D-01 on the IRD portal to generate the certificate.',
      practicalScenario: {
        persona: 'Deepak, 37, independent management consultant in Kathmandu',
        income: 'NPR 18,00,000 / year consulting fees from 4 corporate clients',
        scenarioText: 'Deepak applied for an Australian family visitor visa. The embassy requested his past three years of Tax Clearance Certificates. Deepak had never filed a return, assuming the 15% TDS deducted by his clients meant his tax duties were complete.',
        solutionText: 'He logged into the IRD portal, selected Form D-01, and input his 4 consulting contracts. He reconciled NPR 2,70,000 in TDS already sitting in his PAN ledger. His computed slab tax was NPR 2,45,000. He had an excess tax credit of NPR 25,000. Within 2 hours of submitting, he downloaded his official QR-coded Kar Chukti Pramanpatra, which satisfied the embassy requirement.',
        metricHighlight: 'Obtained official Tax Clearance Certificate in under 2 hours by reconciling TDS on Form D-01'
      },
      formula: {
        name: 'Annual Tax Reconciliation & Clearance Formula',
        equation: '\\text{Net Tax Payable / (Refund)} = \\text{Tax on Net Assessable Income} - \\sum \\text{TDS Credits} - \\text{Advance Tax}',
        variables: [
          { symbol: 'Net Assessable Income', name: 'Taxable Income', desc: 'Gross earnings minus approved Section 63 retirement and insurance deductions.' },
          { symbol: 'TDS Credits', name: 'Withholding Ledger Sum', desc: 'Total tax deducted at source deposited under your PAN during the fiscal year.' },
          { symbol: 'Advance Tax', name: 'Installment Payments', desc: 'Advance quarterly income tax installments deposited under Section 94 (Poush, Chaitra, Ashadh).' }
        ],
        exampleCalculation: 'Gross income = NPR 16,00,000. Approved deductions (CIT + Life Ins) = NPR 4,40,000. Taxable income = NPR 11,60,000. Computed tax liability = NPR 1,22,500. Total TDS already deposited by clients = NPR 1,50,000. Net Balance = 1,22,500 - 1,50,000 = NPR (27,500) refundable credit. Clearance certificate issued with zero extra payment.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Check Your Annual Tax Slabs'
      },
      commonMistakes: [
        { mistake: 'Assuming that having TDS deducted excuses you from filing an annual return.', correct: 'TDS is advance withholding; you must still file Form D-01 if you need a Tax Clearance Certificate.', explanation: 'Embassies and banks reject raw TDS slips; they require the unified Kar Chukti Pramanpatra.' },
        { mistake: 'Missing the Poush end deadline for filing income tax returns.', correct: 'Apply for a 3-month extension before Ashwin end if you cannot meet the standard deadline.', explanation: 'Filing late triggers non-waivable Section 117 financial penalties (0.1% per year or NPR 100/month).' },
        { mistake: 'Typing incorrect PAN numbers when depositing self-assessment tax at the bank.', correct: 'Always generate the official "Tax Payment Voucher (Voucher Number)" from the IRD portal.', explanation: 'Depositing cash without generating an IRD portal voucher leaves payments unlinked to your PAN.' }
      ],
      definitions: [
        { term: 'Kar Chukti Pramanpatra', full: 'Tax Clearance Certificate', meaning: 'The official certified document issued by the IRD proving a taxpayer has zero outstanding tax liabilities.' },
        { term: 'Form D-01', full: 'Individual Income Return Form', meaning: 'The simplified online income declaration form on the IRD portal used by salaried individuals and consultants.' },
        { term: 'Section 96 Return', full: 'Aamdani Bibaran Dakhila', meaning: 'The legal mandate requiring taxpayers in Nepal to submit an audited or self-declared annual statement of income.' },
        { term: 'Section 117 Fine', full: 'Bilamba Shulka (Late Penalty)', meaning: 'Statutory financial penalties levied by IRD on taxpayers who fail to submit annual tax returns on time.' }
      ],
      faqs: [
        { q: 'Can I get a Tax Clearance Certificate online without visiting the tax office?', a: 'Yes. Once your return is submitted and any outstanding dues are cleared via connectIPS or bank voucher, you can download your digitally signed, QR-coded certificate directly from the portal.' },
        { q: 'What is the standard deadline for filing annual tax returns in Nepal?', a: 'The deadline is within 3 months of the fiscal year end (Ashwin end / mid-October). Taxpayers can apply online before Ashwin end to extend the deadline to Poush end (mid-January).' },
        { q: 'Does a salaried person earning NPR 8 Lakh need to file Form D-01?', a: 'If you have only one employer, your employer\'s ETDS filing suffices for legal compliance. However, if you need a Tax Clearance Certificate for a visa or loan, you must file Form D-01 voluntarily.' }
      ],
      takeaways: [
        'File your annual return on the IRD portal before Ashwin end (or extend online to Poush end).',
        'Use Form D-01 for simple personal consulting and salary income - no auditor signature required.',
        'Reconciling your advance TDS allows you to generate a Tax Clearance Certificate with zero extra payment.',
        'A formal Tax Clearance Certificate is essential for foreign visa processing and commercial bank mortgages.',
        'Avoid Section 117 late filing penalties by submitting your returns within statutory deadlines.'
      ]
    },
    np: {
      title: 'नेपालमा वार्षिक आय विवरण (D-01/D-03) दाखिला र कर चुक्ता प्रमाणपत्र लिने तरिका',
      oneLineSummary: 'आन्तरिक राजस्व विभागको पोर्टलबाट अनलाइन आय विवरण भर्ने, TDS मिलान गर्ने, जरिवानाबाट बच्ने र आधिकारिक कर चुक्ता प्रमाणपत्र (Tax Clearance) डाउनलोड गर्ने विधि।',
      summaryPoints: [
        'वार्षिक रु. ४० लाखभन्दा बढी कमाउने, एकभन्दा बढी स्रोतबाट आय भएका वा व्यक्तिगत व्यवसाय चलाउने करदाताले दफा ९६ अनुसार वार्षिक आय विवरण बुझाउनैपर्छ।',
        'वार्षिक आय विवरण (आम्दानी विवरण) बुझाउने कानुनी म्याद असोज मसान्तसम्म हुन्छ, जसलाई अनलाइन निवेदन दिएर पुस मसान्तसम्म थप गर्न सकिन्छ।',
        'जागिरे र परामर्शदाताहरूले कुनै लेखापरीक्षक बिना आफैँ D-01 फारम भर्न सक्छन्; अडिट भएका कम्पनीहरूले D-03 फारम भर्नुपर्छ।',
        'वर्षभरि काटिएको अग्रिम TDS करलाई आफ्नो वार्षिक स्ल्याब करसँग मिलान गर्दा थप कर तिर्नु नपर्ने वा उल्टै कर फिर्ता/क्रेडिट हुने अवस्था बन्छ।',
        'कर हिसाब मिलान हुनासाथ विभागको पोर्टलबाट २४ घण्टाभित्रै आधिकारिक बारकोड/QR कोड भएको "कर चुक्ता प्रमाणपत्र" डाउनलोड गर्न सकिन्छ।'
      ],
      whatIsThis: 'वार्षिक आय विवरण दाखिला (Annual Tax Return) भनेको करदाताले अघिल्लो आर्थिक वर्षभरि (साउन १ देखि असार मसान्तसम्म) रोजगारी, व्यवसाय र लगानीबाट गरेको कुल आम्दानी, खर्च र तिरेको करको आधिकारिक फेहरिस्त आन्तरिक राजस्व विभागलाई अनलाइन बुझाउने प्रक्रिया हो। कर चुक्ता प्रमाणपत्र (Tax Clearance Certificate) भनेको राज्यलाई कुनै पनि कर तिर्न बाँकी छैन भनी सरकारले दिने आधिकारिक क्लिन चिट हो।',
      whyItMatters: 'नेपालमा विदेश भ्रमण वा अध्ययन भिसा (अमेरिका, युरोप, अस्ट्रेलिया, क्यानडा) आवेदन गर्दा दूतावासले कर चुक्ता प्रमाणपत्र अनिवार्य माग्छन्। बैंकबाट ठूलो घरकर्जा वा व्यापारिक कर्जा लिन, र सरकारी ठेक्कापट्टा लिन पनि कर चुक्ता चाहिन्छ। समयमै विवरण नबुझाउँदा दफा ११७ अनुसार मासिक ०.१% वा रु. १०० प्रति महिनाको दरले जरिवाना थपिँदै जान्छ र प्यान नै निष्प्रभावी हुन सक्छ।',
      howItWorks: [
        { step: 1, title: 'आर्थिक वर्षभरिका कागजात र TDS रसिद जम्मा गर्नुहोस्', desc: 'आफ्नो तलब विवरण, बैंकको ब्याज कर प्रमाणपत्र, सेयर बिक्रीको लाभकर र विभिन्न ठाउँबाट काटिएका TDS रसिदहरू संकलन गर्नुहोस्।' },
        { step: 2, title: 'IRD पोर्टल (tax.ird.gov.np) मा लगइन गर्नुहोस्', desc: '"Taxpayer Portal" → "Income Tax" → "Return Submission" मा जानुहोस्। आर्थिक वर्ष छान्नुहोस् (जस्तै २०८०.२०८१) र व्यक्तिका लागि D-01 फारम छान्नुहोस्।' },
        { step: 3, title: 'आम्दानी र कर छुट रकम प्रविष्ट गर्नुहोस्', desc: 'आफ्नो कुल आम्दानी प्रविष्ट गर्नुहोस्। त्यसपछि पाउने छुटहरू: अवकाश कोष (SSF/CIT अधिकतम ५ लाख), जीवन बिमा (अधिकतम ४० हजार), र स्वास्थ्य बिमा (अधिकतम २० हजार) घटाउनुहोस्। पोर्टलले कर स्वतः निकाल्छ।' },
        { step: 4, title: 'TDS मिलान गरी कर चुक्ता डाउनलोड गर्नुहोस्', desc: 'आफ्नो PAN मा जम्मा भएको कुल TDS रकम आयात (Import) गर्नुहोस्। यदि तिर्नुपर्ने कर TDS बाटै चुक्ता भइसकेको छ भने सबमिट गर्नुहोस् र "Tax Clearance" मा गएर आधिकारिक कर चुक्ता प्रमाणपत्र डाउनलोड गर्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'आन्तरिक राजस्व विभागका प्रमुख वार्षिक आय विवरण फारमहरू',
        headers: ['फारमको नाम', 'लक्षित करदाता समूह', 'आम्दानी / कारोबारको सीमा', 'लेखापरीक्षण (Audit) आवश्यकता'],
        rows: [
          ['फारम D-01', 'जागिरे व्यक्ति, परामर्शदाता, फ्रिलान्सर', 'वार्षिक रु. ५० लाखभन्दा कम कारोबार, सरल आय', 'अडिट चाहिँदैन; स्वघोषणा गरे पुग्छ'],
          ['फारम D-02', 'साना खुद्रा पसल, साना व्यवसायी (अनुमानित कर)', 'वार्षिक कारोबार रु. ३० लाख वा रु. १ करोडसम्म', 'अडिट चाहिँदैन; निश्चित रकम कर तिर्ने'],
          ['फारम D-03', 'प्राइभेट लिमिटेड कम्पनी, ठूला फर्महरू', 'वार्षिक कारोबार रु. ५० लाखभन्दा बढी वा जटिल कारोबार', 'दर्तावाला लेखापरीक्षक (RA/CA) बाट अनिवार्य अडिट'],
          ['फारम D-04', 'सहकारी, गैर-सरकारी संस्था, करमुक्त निकाय', 'मुनाफारहित वा विशेष छुट पाएका संस्थाहरू', 'सनदप्राप्त चार्टर्ड एकाउन्टेन्टबाट अडिट']
        ]
      },
      nepalContext: 'आयकर ऐनको दफा ९७ अनुसार एउटै मात्र रोजगारदाता भएको र अन्य कुनै आम्दानी नभएको सामान्य जागिरेले छुट्टै विवरण बुझाउनु कानुनी रूपमा अनिवार्य छैन (रोजगारदाताले बुझाएको विवरण नै मान्य हुन्छ)। तर यदि त्यही जागिरेलाई विदेश भिसा वा बैंक लोनका लागि आधिकारिक "कर चुक्ता प्रमाणपत्र" चाहिएमा उसले पोर्टलमा गएर D-01 भरेपछि मात्र विभागले कर चुक्ता जारी गर्दछ।',
      practicalScenario: {
        persona: 'दीपक, ३७, काठमाडौँका स्वतन्त्र व्यवस्थापन परामर्शदाता',
        income: '४ वटा कम्पनीबाट वार्षिक परामर्श आम्दानी रु. १८,००,०००',
        scenarioText: 'दीपकले अस्ट्रेलियाको पारिवारिक भिजिटर भिसा आवेदन दिए। दूतावासले पछिल्लो ३ वर्षको आधिकारिक कर चुक्ता प्रमाणपत्र माग्यो। दीपकले ग्राहकले १५% TDS काटिसकेकाले कर चुक्ता आफैँ बनिसक्यो होला भन्ने ठानेका थिए।',
        solutionText: 'उनले IRD पोर्टल खोलेर D-01 फारम भरे र ४ वटा कम्पनीबाट काटिएको रु. २,७०,००० TDS आयात गरे। स्ल्याब अनुसार उनको कर जम्मा रु. २,४५,००० निस्कियो र रु. २५,००० उल्टै कर कट्टी बाँकी रह्यो। फारम सबमिट गर्नासाथ उनले २ घण्टामै डिजिटल हस्ताक्षर भएको आधिकारिक "कर चुक्ता प्रमाणपत्र" डाउनलोड गरे र भिसा प्रक्रिया सहजै सफल भयो।',
        metricHighlight: 'D-01 फारममा TDS मिलान गरी २ घण्टामै आधिकारिक कर चुक्ता प्रमाणपत्र प्राप्त'
      },
      formula: {
        name: 'वार्षिक कर हिसाब मिलान र कर चुक्ता सूत्र',
        equation: '\\text{बाँकी तिर्नुपर्ने / (फिर्ता कर)} = \\text{करयोग्य आयमा लाग्ने कर} - \\sum \\text{PAN मा जम्मा TDS} - \\text{अग्रिम कर}',
        variables: [
          { symbol: 'करयोग्य आयमा लाग्ने कर', name: 'वार्षिक स्ल्याब कर', desc: 'सम्पूर्ण छुट र खर्च कटाएर बाँकी आम्दानीमा लाग्ने कुल कर।' },
          { symbol: 'PAN मा जम्मा TDS', name: 'कट्टी भइसकेको कर', desc: 'वर्षभरि रोजगारदाता र ग्राहकले तपाईंको प्यानमा जम्मा गरिदिएको रकम।' },
          { symbol: 'अग्रिम कर', name: 'किस्ताबन्दी कर', desc: 'दफा ९४ अनुसार पुस, चैत र असारमा दाखिला गरिएको अग्रिम किस्ता।' }
        ],
        exampleCalculation: 'वार्षिक आम्दानी = रु. १६,००,०००। स्वीकृत छुटहरू (CIT + बिमा) = रु. ४,४०,०००। करयोग्य आय = रु. ११,६०,०००। कुल कर दायित्व = रु. १,२२,५००। ग्राहकले पहिले नै काटेर जम्मा गरिदिएको TDS = रु. १,५०,०००। बाँकी हिसाब = १,२२,५०० - १,५०,००० = रु. (२७,५००) कर फिर्ता/क्रेडिट। रु. १ पनि थप नतिरी तत्काल कर चुक्ता प्रमाणपत्र जारी हुन्छ।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'आयकर स्ल्याब क्यालकुलेटर'
      },
      commonMistakes: [
        { mistake: 'TDS काटिएकै छ भनेर वार्षिक आय विवरण कहिल्यै नबुझाउनु।', correct: 'दूतावास र बैंकका लागि कर चुक्ता प्रमाणपत्र चाहिन्छ भने D-01 अनिवार्य भर्नुपर्छ।', explanation: 'TDS को रसिद मात्रले कर चुक्ता भएको प्रमाणित गर्दैन; आधिकारिक प्रमाणपत्र चाहिन्छ।' },
        { mistake: 'पुस मसान्तको म्याद नाघ्न दिएर जरिवाना तिर्नु।', correct: 'असोज मसान्तभित्र नसके अनलाइनबाटै ३ महिनाको म्याद थप गरी पुसभित्र बुझाउनुहोस्।', explanation: 'पुस कटाएमा दफा ११७ को जरिवाना कानुनतः मिनाहा हुन सक्दैन।' },
        { mistake: 'बैंकमा कर तिर्दा भौचर नम्बर नबनाई सीधै नगद बुझाउनु।', correct: 'सधैँ IRD पोर्टलबाट Tax Payment Voucher (भौचर नम्बर) निकालेर मात्र बैंकमा तिर्नुहोस्।', explanation: 'पोर्टलको भौचर बिना तिरेको पैसा तपाईंको PAN सँग स्वतः जोडिँदैन र कर बाँकी नै देखिन्छ।' }
      ],
      definitions: [
        { term: 'कर चुक्ता प्रमाणपत्र (Tax Clearance)', full: 'कर तिरेको सरकारी प्रमाण', meaning: 'आन्तरिक राजस्व विभागले करदातालाई राज्यलाई कुनै कर तिर्न बाँकी छैन भनी जारी गर्ने आधिकारिक प्रमाणपत्र।' },
        { term: 'फारम D-01', full: 'व्यक्तिगत आय विवरण फारम', meaning: 'जागिरे र परामर्शदाताले कुनै अडिट बिना आफैँ अनलाइन भर्न मिल्ने सरल आय घोषणा फारम।' },
        { term: 'दफा ९६ को विवरण', full: 'वार्षिक आय विवरण दाखिला', meaning: 'नेपालका करदाताले आर्थिक वर्ष सकिएपछि आफ्नो आम्दानीको सत्यतथ्य विवरण सरकारलाई पेश गर्नुपर्ने कानुनी व्यवस्था।' },
        { term: 'दफा ११७ को जरिवाना', full: 'विलम्ब शुल्क तथा दण्ड', meaning: 'तोकिएको समयभित्र आय विवरण नबुझाउने करदातालाई विभागले लगाउने आर्थिक जरिवाना।' }
      ],
      faqs: [
        { q: 'के कर कार्यालय नगई घरमै बसेर अनलाइन कर चुक्ता प्रमाणपत्र लिन सकिन्छ?', a: 'सकिन्छ। विवरण पेश गरी connectIPS बाट कर तिरिसकेपछि पोर्टलबाटै आधिकारिक QR-code भएको कर चुक्ता प्रमाणपत्र तत्काल डाउनलोड गर्न सकिन्छ।' },
        { q: 'नेपालमा आय विवरण बुझाउने आधिकारिक म्याद कहिलेसम्म हुन्छ?', a: 'आर्थिक वर्ष सकिएको ३ महिनाभित्र (असोज मसान्तसम्म) बुझाउनुपर्छ। असोजभित्र अनलाइन निवेदन दिएर पुस मसान्तसम्म म्याद थप गर्न सकिन्छ।' },
        { q: 'वार्षिक रु. ८ लाख तलब खाने एकल जागिरेले D-01 भर्नैपर्छ?', a: 'एउटा मात्र रोजगारदाता भए कानुनतः बाध्यकारी छैन। तर विदेश भिसा, बैंक कर्जा वा कर चुक्ता प्रमाणपत्र लिनु परेमा स्वेच्छिक रूपमा D-01 भर्नैपर्छ।' }
      ],
      takeaways: [
        'वार्षिक आय विवरण असोज मसान्तभित्र (वा म्याद थप गरी पुस मसान्तभित्र) अनलाइन बुझाउनुहोस्।',
        'जागिरे र कन्सल्ट्यान्टले कुनै लेखापरीक्षक बिना आफैँ D-01 फारम सजिलै भर्न सक्छन्।',
        'पहिले नै काटिएको TDS मिलान गर्दा कुनै अतिरिक्त पैसा नतिरी तत्काल कर चुक्ता प्रमाणपत्र पाइन्छ।',
        'विदेश भिसा आवेदन र बैंक कर्जा स्वीकृतिका लागि आधिकारिक कर चुक्ता प्रमाणपत्र अपरिहार्य छ।',
        'दफा ११७ को अनावश्यक जरिवानाबाट जोगिन समयमै विवरण पेश गर्ने बानी बसाल्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Calculate annual taxable income and reconcile tax liabilities before submitting Form D-01.' }
    ],
    downloadableResources: [
      { title: 'IRD Form D-01 Step-by-Step Online Filing Checklist (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '185 KB', href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html' }
    ]
  }

};

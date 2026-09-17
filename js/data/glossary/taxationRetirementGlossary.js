// ==============================================
// risePaisa - Taxation & Retirement Glossary Module
// Production-grade financial encyclopedia entries for Nepal
// ==============================================

export const TAXATION_RETIREMENT_GLOSSARY = [
  // 1. PAN
  {
    slug: 'pan',
    term: 'PAN (Permanent Account Number)',
    termNp: 'स्थायी लेखा नम्बर (PAN)',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    letter: 'P',
    abbreviation: 'PAN',
    synonyms: ['Permanent Account Number', 'Personal PAN', 'प्यान नम्बर', 'स्थायी कर नम्बर'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Permanent Account Number (PAN) is a unique 9-digit alphanumeric identifier issued by the Inland Revenue Department (IRD) to track tax obligations and financial transactions in Nepal.',
      np: 'स्थायी लेखा नम्बर (PAN) भनेको आन्तरिक राजस्व विभाग (IRD) ले जारी गर्ने ९ अंकको विशेष पहिचान नम्बर हो, जसले नेपालमा हुने सम्पूर्ण वित्तीय कारोबार, आम्दानी र कर भुक्तानीलाई कानुनी रूपमा ट्र्याक गर्दछ।'
    },
    detailedExplanation: {
      en: 'Administered under the Income Tax Act 2058, a Permanent Account Number is a lifetime identifier for every economic actor in Nepal. Whether you are a salaried professional, business owner, freelance consultant, or stock market investor, all your financial fingerprints link back to your PAN. In Nepal, PAN is categorized into two main types: Personal PAN (Individual PAN) and Business PAN (Enterprise PAN / VAT PAN). With the enactment of the "One Person, One PAN" policy, obtaining a Personal PAN is mandatory to receive a salary above NPR 1, open a Demat account for secondary share trading on NEPSE, purchase real estate above statutory thresholds, or clear invoices.',
      np: 'आयकर ऐन २०५८ अनुसार सञ्चालित स्थायी लेखा नम्बर नेपालमा आर्थिक कारोबार गर्ने जोसुकै व्यक्तिको जीवनभरका लागि एउटै रहने स्थायी डिजिटल पहिचान हो। चाहे तपाईं जागिरे हुनुहोस्, व्यापारी, परामर्शदाता वा सेयर लगानीकर्ता, तपाईंका सबै वित्तीय कारोबारहरू यसै प्यान नम्बरसँग जोडिन्छन्। नेपालमा प्यानलाई दुई भागमा बाँडिएको छ: व्यक्तिगत प्यान (Personal PAN) र व्यावसायिक प्यान (Business/VAT PAN)। "एक व्यक्ति, एक प्यान" को कानुनी व्यवस्था अनुसार तलब बुझ्न, सेयर बजारमा डिम्याट खाता खोल्न, घरजग्गा किनबेच गर्न वा परामर्श शुल्क लिन व्यक्तिगत प्यान अनिवार्य गरिएको छ।'
    },
    whyItMatters: {
      en: 'Without a Personal PAN in Nepal, an employer cannot legally deposit your salary into your bank account, and secondary stock brokers cannot activate your TMS trading profile. Furthermore, linking your PAN ensures that tax deducted at source (TDS) by employers, banks, and clients is credited directly to your official IRD ledger, proving your legal white-money wealth.',
      np: 'नेपालमा व्यक्तिगत प्यान बिना रोजगारदाताले बैंक खातामा तलब पठाउन पाउँदैन र ब्रोकरले सेयर कारोबार गर्न टिएमएस खाता खोल्न दिँदैन। साथै आफ्नो प्यान नम्बर दिँदा बैंक वा रोजगारदाताले काटेको अग्रिम कर (TDS) सीधै आन्तरिक राजस्व विभागको प्रणालीमा तपाईंको नाममा जम्मा हुन्छ, जसले भविष्यमा बैंकबाट ठूलो ऋण लिन वा विदेश जान आवश्यक पर्ने कर चुक्ता प्रमाणपत्र (Tax Clearance) लिन सजिलो बनाउँछ।'
    },
    howItWorks: {
      summary: {
        en: 'The registration and operational integration of PAN in Nepal follows 4 straightforward steps:',
        np: 'नेपालमा प्यान नम्बर लिने र सञ्चालन गर्ने प्रक्रिया ४ चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Online Application via Nagarik App or IRD', np: '१. नागरिक एप वा आईआरडी पोर्टलबाट अनलाइन आवेदन' },
          desc: { en: 'Apply in under 2 minutes using the Nagarik App with your verified citizenship/NID, or register via the Inland Revenue Department web portal (ird.gov.np).', np: 'नागरिक एप (Nagarik App) बाट नागरिकता वा राष्ट्रिय परिचयपत्र रुजु गरी २ मिनेटमै वा आन्तरिक राजस्व विभागको वेबसाइटबाट अनलाइन फारम भरिन्छ।' }
        },
        {
          title: { en: '2. 9-Digit Generation & Verification', np: '२. ९ अंकको प्यान नम्बर प्राप्ति' },
          desc: { en: 'The IRD system validates your citizenship details and generates your unique, lifetime 9-digit Permanent Account Number instantly.', np: 'विभागको प्रणालीले विवरण रुजु गरी तुरुन्तै जीवनभरका लागि काम लाग्ने ९ अंकको स्थायी लेखा नम्बर जारी गर्दछ।' }
        },
        {
          title: { en: '3. Institutional Financial Linking', np: '३. बैंक र कार्यस्थलमा आबद्धता' },
          desc: { en: 'Submit your PAN to your employer\'s payroll department, stockbroker, Demat DP, and commercial banks to link all financial profiles.', np: 'आफ्नो प्यान नम्बर रोजगारदाता, सेयर ब्रोकर, डिम्याट खाता र बैंकहरूमा बुझाई सबै वित्तीय विवरणहरू एकआपसमा जोडिन्छ।' }
        },
        {
          title: { en: '4. Automated Annex-10 Tax Accounting', np: '४. स्वचालित कर कट्टी अभिलेख' },
          desc: { en: 'Taxes deducted by employers or clients are deposited under your PAN and viewable in real time on the IRD Taxpayer Portal.', np: 'तपाईंको नाममा काटिएको सबै प्रकारको अग्रिम कर (TDS) आन्तरिक राजस्व विभागको करदाता पोर्टलमा लगइन गरेर आफैं हेर्न सकिन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Mandatory payroll processing for all formal employment in Nepal',
        'Demat account opening and NEPSE TMS broker trading onboarding',
        'Registering real estate land and house transfers at Malpot offices',
        'Filing annual personal income tax returns and getting tax clearance'
      ],
      np: [
        'नेपालमा सबै प्रकारको औपचारिक रोजगारीको तलब भुक्तानी गर्दा',
        'डिम्याट खाता खोल्न र नेप्से टिएमएस ब्रोकर खाता दर्ता गर्न',
        'मालपोत कार्यालयमा घरजग्गा किनबेच र नामसारी गर्दा',
        'वार्षिक आयकर विवरण बुझाउन र कर चुक्ता प्रमाणपत्र लिन'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The "One Person, One PAN" Directive and Nagarik App Instant Registration',
        np: 'नेपालमा "एक व्यक्ति, एक प्यान" नीति र नागरिक एपबाट तत्काल प्यान'
      },
      body: {
        en: 'In 2019, the Government of Nepal introduced the mandatory "One Person, One PAN" policy, establishing that no organization can book an employee salary or consultant fee as a tax-deductible expense without attaching the recipient’s Personal PAN. To eliminate the historical corruption and long queues at Inland Revenue Offices (IROs), the government integrated PAN issuance into the "Nagarik App". Today, any Nepali citizen with a verified phone number and citizenship or National ID (NID) can generate an official Personal PAN in less than 2 minutes on their smartphone for completely free.',
        np: 'विसं २०७६ मा नेपाल सरकारले "एक व्यक्ति, एक प्यान" को ऐतिहासिक नीति लागू गर्‍यो, जस अनुसार प्यान नम्बर बिना कुनै पनि संस्थाले कर्मचारीलाई तलब दिन वा खर्च देखाउन नपाउने कडा नियम बनाइयो। राजस्व कार्यालयमा हुने बिचौलिया र घन्टौंको लाइन हटाउन सरकारले नागरिक एप (Nagarik App) मार्फत तत्कालै प्यान लिने व्यवस्था मिलायो। हाल जोसुकै नेपाली नागरिकले आफ्नो मोबाइलबाट नागरिकता वा राष्ट्रिय परिचयपत्र रुजु गरी २ मिनेटमै निःशुल्क आफ्नो आधिकारिक व्यक्तिगत प्यान नम्बर पाउन सक्छन्।'
      },
      keyPoints: {
        en: [
          'A PAN consists of 9 unique numeric digits and never expires.',
          'Personal PAN can be generated for free in 2 minutes via Nagarik App.',
          'Mandatory for all salaried workers, freelancers, and NEPSE investors in Nepal.',
          'TDS deposited by third parties accumulates in your permanent IRD digital ledger.'
        ],
        np: [
          'प्यान नम्बर ९ अंकको हुन्छ र यो जीवनभर कहिल्यै म्याद सकिँदैन।',
          'नागरिक एपबाट २ मिनेटमै निःशुल्क व्यक्तिगत प्यान नम्बर निकाल्न सकिन्छ।',
          'जागिरे, परामर्शदाता र सेयर बजारका लगानीकर्ता सबैका लागि यो अनिवार्य छ।',
          'अरूले काटेको अग्रिम कर तपाईंको प्यान खातामा राजस्व विभागको प्रणालीमा सुरक्षित जम्मा हुन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Aayusha graduates from college and lands her first job at a fintech software firm in Kathmandu with an NPR 55,000 monthly salary. Before her first payday, HR requests her PAN card. Aayusha opens the Nagarik App, selects "PAN Registration", confirms her citizenship number, and receives her 9-digit PAN (e.g. 123456789) within 60 seconds. She sends the number to HR. When her salary is processed, the company deducts the mandatory 1% Social Security Tax and credits NPR 54,450 to her bank account while depositing the NPR 550 tax under her PAN. When Aayusha checks the IRD taxpayer portal a week later, her tax contribution is officially recorded under her permanent profile.',
        np: 'कलेज सकेर काठमाडौंको एउटा सफ्टवेयर कम्पनीमा मासिक रु. ५५,००० को जागिर सुरु गरेकी आयुषालाई पहिलो महिनाको तलब बुझ्नुअघि कम्पनीले प्यान नम्बर माग्छ। आयुषाले नागरिक एप खोलेर "प्यान दर्ता" मा क्लिक गरी आफ्नो नागरिकता नम्बर रुजु गर्छिन् र ६० सेकेन्डमै ९ अंकको प्यान नम्बर (जस्तै १२३४५६७८९) प्राप्त गर्छिन्। उनले त्यो नम्बर अफिसमा दिन्छिन्। अफिसले १% सामाजिक सुरक्षा कर (रु. ५५०) काटेर रु. ५४,४५० उनको बैंक खातामा हालिदिन्छ र काटेको कर सिधै उनको प्यानमा जम्मा गरिदिन्छ। एक हप्तापछि राजस्व विभागको वेबसाइटमा हेर्दा उक्त कर आयुषाको आफ्नै नाममा जम्मा भएको स्पष्ट देखिन्छ।'
      },
      takeaway: {
        en: 'Your PAN is your legal financial passport in Nepal; having a verified PAN legitimizes your income, protects your tax credits, and builds your official financial record.',
        np: 'प्यान नम्बर नेपालको वित्तीय संसारमा तपाईंको कानुनी राहदानी हो; यसले तपाईंको कमाइलाई वैध बनाउँछ, करको हिसाब पारदर्शी राख्छ र आधिकारिक वित्तीय इतिहास निर्माण गर्छ।'
      }
    },
    formula: null,
    advantages: {
      en: [
        'Required legal identifier to receive salary, trade shares on NEPSE, and buy property',
        'Generated 100% free online in under 2 minutes via Nagarik App',
        'Tracks all taxes deducted at source (TDS), ensuring you receive verified tax credits',
        'Valid for a lifetime with zero recurring renewal fees or administrative charges'
      ],
      np: [
        'तलब बुझ्न, सेयर किनबेच गर्न र घरजग्गा रजिस्ट्रेसन गर्न अनिवार्य कानुनी नम्बर',
        'नागरिक एपमार्फत घरमै बसी कुनै शुल्क नतिरी २ मिनेटमै प्राप्त गर्न सकिने',
        'विभिन्न ठाउँबाट काटिएको सबै अग्रिम कर (TDS) को आधिकारिक हिसाब एकै ठाउँमा देखिने',
        'जीवनभरका लागि मान्य हुने र कहिल्यै नवीकरण शुल्क वा अतिरिक्त खर्च नलाग्ने'
      ]
    },
    limitations: {
      en: [
        'All high-value financial assets and property transactions become visible to tax authorities',
        'Business PAN owners must file periodic VAT/Income tax returns even if transaction volume is zero',
        'Personal PAN and Business PAN cannot be interchanged for enterprise invoicing',
        'Misplacing your PAN portal login credentials requires physical or online password resets'
      ],
      np: [
        'सबै ठूला वित्तीय कारोबार र सम्पत्ति किनबेच राजस्व विभागको प्रत्यक्ष निगरानीमा आउने',
        'व्यावसायिक प्यान (Business PAN) लिएपछि कारोबार शून्य भए पनि नियमित कर विवरण बुझाउनै पर्ने',
        'व्यक्तिगत प्यानबाट व्यवसाय वा पसलको आधिकारिक बिल काट्न नमिल्ने',
        'राजस्व पोर्टलको पासवर्ड बिर्सिएमा अनलाइन वा कर कार्यालयबाट रिसेट गर्नुपर्ने झन्झट'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'Getting a Personal PAN means you have to pay taxes to the government every single month.',
          np: 'व्यक्तिगत प्यान नम्बर लिनासाथ सरकारलाई हरेक महिना अनिवार्य कर बुझाइरहनु पर्छ।'
        },
        reality: {
          en: 'PAN is simply an identification number, like your citizenship. If your income is zero or falls below the tax-exempt threshold, you pay zero tax. PAN does not create tax liability; your income does.',
          np: 'प्यान भनेको नागरिकता जस्तै व्यक्तिगत पहिचान नम्बर मात्र हो। यदि तपाईंको कमाइ छैन वा कर छुटको सीमाभित्र छ भने कुनै कर तिर्नु पर्दैन। प्यान लिँदैमा कर लाग्ने होइन; कर त कमाइ भएपछि मात्र लाग्ने हो।'
        }
      },
      {
        myth: {
          en: 'Personal PAN has an expiration date and must be renewed every year with a fee.',
          np: 'व्यक्तिगत प्यानको पनि म्याद सकिन्छ र हरेक वर्ष शुल्क तिरेर नवीकरण गर्नुपर्छ।'
        },
        reality: {
          en: 'A Personal PAN is permanent for your entire lifetime. It never expires and never requires renewal fees.',
          np: 'व्यक्तिगत प्यान जीवनभरका लागि स्थायी हुन्छ। यसको कहिल्यै म्याद सकिँदैन र कुनै पनि नवीकरण शुल्क तिर्नु पर्दैन।'
        }
      }
    ],
    comparison: {
      title: { en: 'Personal PAN vs Business PAN (Proprietorship / VAT)', np: 'व्यक्तिगत प्यान (Personal PAN) र व्यावसायिक प्यान (Business PAN) बीचको तुलना' },
      subtitle: { en: 'Individual citizen tax identification vs registered commercial enterprise invoicing', np: 'नागरिकको व्यक्तिगत पहिचान र व्यापार व्यवसाय सञ्चालन गर्ने प्यान बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Personal PAN (Individual)', np: 'व्यक्तिगत प्यान (Personal PAN)' },
      colB: { en: 'Business PAN (Enterprise / VAT)', np: 'व्यावसायिक प्यान (Business/VAT PAN)' },
      rows: [
        {
          feature: { en: 'Target User', np: 'कसका लागि' },
          valA: { en: 'Salaried employees, investors, professionals, individual citizens', np: 'जागिरे, विद्यार्थी, सेयर लगानीकर्ता र आम नागरिक' },
          valB: { en: 'Registered firms, private limited companies, retail shops, contractors', np: 'दर्ता भएका फर्म, कम्पनी, पसल र ठेकेदारहरू' }
        },
        {
          feature: { en: 'Periodic Return Filing', np: 'नियमित कर विवरण बुझाउनु पर्ने' },
          valA: { en: 'No periodic filing required if salary TDS is final', np: 'तलबबाट कर काटिएको भए कुनै मासिक विवरण बुझाउनु नपर्ने' },
          valB: { en: 'Mandatory monthly VAT/Income tax filing even with zero turnover', np: 'कारोबार नभए पनि मासिक वा चौमासिक रूपमा शून्य विवरण अनिवार्य बुझाउनुपर्ने' }
        },
        {
          feature: { en: 'Invoicing Power', np: 'बिल काट्न पाउने अधिकार' },
          valA: { en: 'Cannot issue commercial sales invoices to customers', np: 'ग्राहकलाई व्यावसायिक बिक्री बिल काट्न नमिल्ने' },
          valB: { en: 'Authorized to issue official VAT or non-VAT commercial invoices', np: 'आधिकारिक भ्याट वा प्यान बिक्री बिल जारी गर्न पाउने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'tds', name: 'TDS', type: 'glossary' },
      { slug: 'vat', name: 'VAT', type: 'glossary' },
      { slug: 'demat', name: 'Demat', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Tax Basics in Nepal: Income Tax, PAN & TDS', categorySlug: 'taxation', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Nepal Income Tax Slabs & TDS Guide', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Income Tax Calculator Nepal', slug: 'income-tax', desc: 'Calculate your annual tax liability under your personal PAN in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'Can a student without any job or income apply for a Personal PAN?', np: 'के कुनै जागिर वा कमाइ नभएको विद्यार्थीले पनि प्यान लिन सक्छ?' },
        a: {
          en: 'Yes. Any Nepali citizen holding a valid citizenship certificate or National ID can obtain a Personal PAN immediately for free via Nagarik App. It is recommended for opening Demat accounts and trading IPOs.',
          np: 'सक्छ। नागरिकता वा राष्ट्रिय परिचयपत्र भएको जोसुकै नेपालीले नागरिक एपबाट तुरुन्तै निःशुल्क व्यक्तिगत प्यान लिन सक्छन्। सेयर बजारमा आइपिओ भर्न र डिम्याट खोल्न विद्यार्थीका लागि पनि यो उपयोगी हुन्छ।'
        }
      },
      {
        q: { en: 'How do I check if my employer has actually deposited my deducted TDS?', np: 'रोजगारदाताले मेरो तलबबाट काटेको कर प्यानमा जम्मा गर्‍यो कि गरेन कसरी हेर्ने?' },
        a: {
          en: 'Visit the Inland Revenue Department portal (taxpayerportal.ird.gov.np), log in using your PAN and taxpayer password, navigate to "Taxpayer Profile" -> "TDS Verification / Annex-10", and you can view all historical tax deposits made by your employer in real time.',
          np: 'आन्तरिक राजस्व विभागको करदाता पोर्टल (taxpayerportal.ird.gov.np) मा आफ्नो प्यान नम्बरबाट लगइन गरी "TDS Verification" मा गएर अफिसले कुन महिनामा कति कर जम्मा गरिदियो भनी सबै विवरण प्रत्यक्ष हेर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'Can one person have multiple Personal PAN numbers in Nepal?', np: 'के एक व्यक्तिले नेपालमा दुई वा तीनवटा व्यक्तिगत प्यान नम्बर लिन मिल्छ?' },
        a: {
          en: 'No. The law strictly enforces "One Person, One PAN". The IRD central database links your PAN directly to your citizenship number and biometric records, preventing duplicate registrations.',
          np: 'मिल्दैन। कानुनले "एक व्यक्ति, एक प्यान" को कडा नीति लिएको छ। राजस्व विभागको प्रणाली नागरिकता र औंठाछापसँग जोडिएकाले एउटा व्यक्तिको नाममा दोस्रो प्यान बन्दैन।'
        }
      },
      {
        q: { en: 'What should I do if my PAN registration has an incorrect name spelling?', np: 'प्यान कार्डमा नामको हिज्जे गल्ती भएमा कसरी सच्याउने?' },
        a: {
          en: 'You can submit an online amendment request through the IRD Taxpayer Portal under "Taxpayer Profile Update" and upload your original citizenship card, or visit your nearest Inland Revenue Office (IRO) for immediate correction.',
          np: 'राजस्व विभागको पोर्टलमा लगइन गरेर प्रोफाइल सच्याउने अनलाइन निवेदन दिन सकिन्छ वा नजिकैको आन्तरिक राजस्व कार्यालयमा सक्कल नागरिकता बोकेर गएमा तुरुन्तै सच्याइन्छ।'
        }
      }
    ],
    summary: {
      en: [
        'A PAN is a permanent 9-digit tax identification number issued for a lifetime by the IRD.',
        'Required in Nepal to receive salary, open a Demat account, trade on NEPSE, and buy real estate.',
        'Can be obtained 100% free online in under 2 minutes using the Nagarik App.',
        'Enables transparent tracking of all withholding taxes (TDS) credited to your personal record.'
      ],
      np: [
        'प्यान आन्तरिक राजस्व विभागले जीवनभरका लागि जारी गर्ने ९ अंकको स्थायी कर पहिचान नम्बर हो।',
        'तलब बुझ्न, डिम्याट खोल्न, नेप्सेमा सेयर किनबेच गर्न र घरजग्गा किन्न यो अनिवार्य छ।',
        'नागरिक एपमार्फत घरमै बसी २ मिनेटमै पूर्ण निःशुल्क अनलाइन प्यान नम्बर निकाल्न सकिन्छ।',
        'यसले विभिन्न ठाउँबाट काटिएको सबै अग्रिम कर (TDS) लाई आफ्नै नाममा सुरक्षित अभिलेख राख्छ।'
      ]
    },
    whereSeen: [
      { title: 'Tax Basics in Nepal', type: 'Lesson', url: '/learn/taxation/what-is-investing' },
      { title: 'Income Tax Calculator', type: 'Calculator', url: '/calculators/income-tax' }
    ],
    meta: {
      title: 'What is PAN in Nepal? Personal PAN & Nagarik App Guide | risePaisa',
      description: 'Everything you need to know about Permanent Account Numbers (PAN) in Nepal. Learn how to get an instant Personal PAN via Nagarik App and check your tax records.'
    }
  },

  // 2. TDS
  {
    slug: 'tds',
    term: 'TDS (Tax Deducted at Source)',
    termNp: 'स्रोतमा कर कट्टी (TDS)',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    letter: 'T',
    abbreviation: 'TDS',
    synonyms: ['Tax Deducted at Source', 'Withholding Tax', 'अग्रिम कर कट्टी', 'स्रोतमा कर'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'Tax Deducted at Source (TDS) is a withholding tax mechanism under the Nepal Income Tax Act where the payer deducts tax directly from payments (salary, rent, interest, dividends) and remits it directly to the government on behalf of the recipient.',
      np: 'स्रोतमा कर कट्टी (TDS) भनेको आयकर ऐन अनुसार कुनै पनि व्यक्ति वा संस्थालाई भुक्तानी (तलब, घरभाडा, ब्याज, लाभांश आदि) दिँदा भुक्तानी दिने पक्षले नै कानुन अनुसारको कर रकम अग्रिम कट्टा गरी प्राप्तकर्ताको नाममा सिधै सरकारलाई बुझाइदिने प्रणाली हो।'
    },
    detailedExplanation: {
      en: 'Administered under Chapter 17 of the Nepal Income Tax Act 2058, TDS acts as the government’s frontline revenue collection engine. Instead of waiting for citizens to self-report and pay taxes at the end of the year, the law mandates that whoever makes specified payments must slice off the statutory tax percentage at the very moment of disbursement. In Nepal, TDS applies to employment salaries (Section 87), bank deposit interest (Section 88, 5%), corporate cash dividends (Section 92, 5%), physical house rent (10%), freelance consulting fees (Section 88, 15%), and contracts. Crucially, TDS is classified into two legal categories: Final Withholding Taxes (where the tax deducted is the end of your obligation) and Non-Final / Advance TDS (which can be claimed as a tax credit against your annual tax return).',
      np: 'आयकर ऐन २०५८ को परिच्छेद १७ अनुसार लागू गरिएको TDS सरकारको राजस्व संकलन गर्ने मुख्य हतियार हो। वर्षको अन्त्यमा करदाताले कर तिर्लान् भनी कुर्नुको सट्टा भुक्तानी दिने समयमै कानुन बमोजिमको कर कट्टा गरेर सरकारी कोषमा दाखिला गरिन्छ। नेपालमा जागिरको तलब (दफा ८७), बैंक मुद्दतीको ब्याज (दफा ८८ - ५%), सेयर लाभांश (दफा ९२ - ५%), घरभाडा (१०%), परामर्श सेवा शुल्क (दफा ८८ - १५%) र ठेक्कापट्टामा TDS लाग्दछ। कानुन अनुसार TDS दुई प्रकारका हुन्छन्: अन्तिम कर (Final TDS - जसमा थप कर तिर्नु पर्दैन) र अग्रिम कर (Non-Final TDS - जसलाई वर्षको अन्त्यमा आफ्नो कुल कर दायित्वसँग समायोजन वा फिर्ता दाबी गर्न पाइन्छ)।'
    },
    whyItMatters: {
      en: 'Understanding TDS protects you from being double-taxed or failing to claim legal tax credits. If a client deducts 15% TDS on your freelance consulting fee, that money is not lost-it is an advance tax payment recorded under your PAN (Annex-10) that reduces your final tax bill when you file your annual income tax return.',
      np: 'TDS सम्बन्धी नियम बुझ्दा दोहोरो कर तिर्नुपर्ने जोखिमबाट बचिन्छ र आफ्नो हकको कर समायोजन दाबी गर्न सकिन्छ। यदि कुनै कम्पनीले तपाईंको परामर्श शुल्कबाट १५% TDS काटेको छ भने त्यो पैसा खेर गएको होइन; त्यो तपाईंको प्यानमा अग्रिम करको रूपमा जम्मा हुन्छ, जसलाई वर्षको अन्त्यमा आयकर विवरण बुझाउँदा आफ्नो कुल करबाट घटाउन पाइन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The execution and reconciliation of TDS in Nepal follows a 4-part legal cycle:',
        np: 'नेपालमा स्रोतमा कर कट्टी (TDS) हुने र अभिलेख रहने प्रक्रिया ४ चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Rate Determination', np: '१. कानुनी दर निर्धारण' },
          desc: { en: 'The payer determines the statutory withholding rate under the Income Tax Act (e.g. 5% on bank interest, 15% on service contracts).', np: 'आयकर ऐन अनुसार कुन शीर्षकको भुक्तानी हो (जस्तै ब्याजमा ५%, सेवा शुल्कमा १५%) सोही अनुसारको दर यकिन गरिन्छ।' }
        },
        {
          title: { en: '2. Deduction at Disbursement', np: '२. भुक्तानी गर्दा कर कट्टी' },
          desc: { en: 'The payer deducts the exact tax sum and transfers only the net remaining balance to the recipient’s bank account.', np: 'रकम भुक्तानी दिँदा कर बराबरको रकम कटाएर बाँकी खुद रकम मात्र सम्बन्धित व्यक्तिको बैंक खातामा हालिन्छ।' }
        },
        {
          title: { en: '3. Monthly Deposit to IRD with PAN', np: '३. प्यानसहित राजस्वमा दाखिला' },
          desc: { en: 'By the 25th of the following Nepali month, the payer deposits the collected tax into the government treasury under the recipient\'s 9-digit PAN.', np: 'अर्को महिनाको २५ गतेभित्र भुक्तानी दिने संस्थाले काटेको कर सम्बन्धित व्यक्तिको ९ अंकको प्यान नम्बर उल्लेख गरी सरकारी कोषमा जम्मा गर्छ।' }
        },
        {
          title: { en: '4. Tax Credit Verification (Annex-10)', np: '४. करदाता खातामा अभिलेख' },
          desc: { en: 'The recipient logs into the IRD Taxpayer Portal and verifies the deposited tax credit under their permanent e-TDS ledger.', np: 'प्राप्तकर्ताले राजस्व विभागको अनलाइन पोर्टलमा गएर आफ्नो प्यानमा कर जम्मा भएको विवरण (Annex-10) हेर्न र कर चुक्तामा दाबी गर्न सक्छन्।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Monthly corporate payroll and employee salary slips (Section 87)',
        'Bank fixed and savings deposit interest payments (Section 88, 5%)',
        'SEBON listed company dividend distributions (Section 92, 5%)',
        'Freelance, consulting, and independent contractor service billings (15%)'
      ],
      np: [
        'मासिक तलब भुक्तानी र कर्मचारीको तलब स्लिपमा (दफा ८७)',
        'बैंक मुद्दती तथा बचत खाताको ब्याज भुक्तानीमा (दफा ८८, ५%)',
        'नेप्सेमा सूचीकृत कम्पनीहरूले लाभांश बाँड्दा (दफा ९२, ५%)',
        'परामर्शदाता, लेखक र स्वतन्त्र कामदारको सेवा शुल्क भुक्तानीमा (१५%)'
      ]
    },
    nepalContext: {
      headline: {
        en: 'Final Withholding vs Non-Final Advance Taxes in the Nepal Income Tax Act',
        np: 'नेपालको आयकर ऐनमा अन्तिम कर (Final TDS) र अग्रिम समायोजनयोग्य कर'
      },
      body: {
        en: 'A foundational concept in Nepal’s tax regime is distinguishing Final Withholding Taxes from Advance Taxes. Under Section 92, taxes deducted on bank interest (5%) and cash dividends from listed companies (5%) paid to resident natural individuals are "Final Withholding Taxes". Once that 5% is cut at the source, you never need to add that income to your salary or file additional returns on it. Conversely, the 15% TDS deducted on professional consultancy fees under Section 88 is an "Advance Tax". You must include your total consulting income in your annual tax filing, but you get a full rupee-for-rupee credit for the 15% already deducted at source.',
        np: 'नेपालको कर कानुनमा कुन कर अन्तिम हो र कुन अग्रिम हो भनी छुट्याउनु निकै महत्त्वपूर्ण छ। आयकर ऐनको दफा ९२ अनुसार व्यक्तिगत बैंक निक्षेपको ब्याज (५%) र सेयर लाभांश (५%) मा काटिने कर "अन्तिम कर" (Final TDS) हो। यो ५% कर काटिएपछि तपाईंको दायित्व सकिन्छ, यसलाई तलबमा जोडेर थप कर तिर्नु पर्दैन। तर दफा ८८ अन्तर्गत परामर्श सेवा शुल्कमा काटिने १५% कर "अग्रिम कर" (Advance Tax) हो। वर्षको अन्त्यमा आफ्नो कुल आम्दानी देखाएर वार्षिक कर हिसाब गर्दा यो १५% रकमलाई सिधै कर कट्टी (Tax Credit) को रूपमा घटाउन पाइन्छ।'
      },
      keyPoints: {
        en: [
          'Bank deposit interest TDS is 5.0% and is a final withholding tax for individuals.',
          'Cash dividend TDS on NEPSE shares is 5.0% and is also a final tax for individuals.',
          'Professional services and consultancy incur a 15% advance withholding tax.',
          'House rent paid by businesses incurs a 10% local municipal or IRD rental tax.'
        ],
        np: [
          'बैंक निक्षेपको ब्याजमा ५% TDS लाग्छ र यो व्यक्तिगत ग्राहकका लागि अन्तिम कर हो।',
          'नेप्से सेयरको नगद लाभांशमा लाग्ने ५% TDS पनि व्यक्तिहरूका लागि अन्तिम कर हो।',
          'व्यावसायिक परामर्श तथा प्राविधिक सेवामा १५% अग्रिम स्रोतमा कर कट्टी हुन्छ।',
          'संस्थाले भाडामा लिने घरको बहालमा १०% बहाल कर कट्टी गरिन्छ।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Naveen, an independent digital marketing consultant, completes a marketing campaign for a corporate client in Kathmandu and invoices them for NPR 100,000. Under Section 88 of the Nepal Income Tax Act, the client deducts 15% TDS (NPR 15,000) and transfers NPR 85,000 to Naveen\'s bank account while depositing NPR 15,000 to the IRD under Naveen\'s PAN. At the end of the fiscal year, Naveen prepares his total annual accounts. His total calculated tax liability on net profits comes to NPR 22,000. Because Naveen already has an NPR 15,000 tax credit officially recorded in his IRD portal, he only needs to pay the remaining NPR 7,000 (22,000 - 15,000) to receive his official Tax Clearance Certificate!',
        np: 'डिजिटल मार्केटिङ कन्सल्टेन्ट नविनले एउटा कम्पनीलाई रु. १,००,००० को सेवा बिल दिन्छन्। आयकर ऐनको दफा ८८ अनुसार कम्पनीले १५% TDS (रु. १५,०००) काटेर नविनको बैंक खातामा रु. ८५,००० पठाउँछ र १५,००० रुपैयाँ नविनको प्यानमा राजस्व विभागमा बुझाइदिन्छ। आर्थिक वर्षको अन्त्यमा नविनले आफ्नो वर्षभरिको आम्दानी-खर्च हिसाब गर्दा उनको कुल कर रु. २२,००० तिर्नुपर्ने देखिन्छ। तर उनको प्यानमा पहिल्यै १५,००० कर दाखिला भइसकेकाले नविनले बाँकी रु. ७,००० (२२,००० - १५,०००) मात्र तिरेर आफ्नो कर चुक्ता प्रमाणपत्र लिन सक्छन्!'
      },
      takeaway: {
        en: 'Always demand a verified e-TDS entry under your PAN whenever a client deducts tax; that deduction is your prepaid cash asset sitting with the tax office.',
        np: 'कसैले तपाईंको भुक्तानीबाट कर काट्दा सधैं आफ्नो प्यानमा इ-टीडीएस (e-TDS) दर्ता भएको यकिन गर्नुहोस्; त्यो रकम कर कार्यालयमा जम्मा भएको तपाईंको आफ्नै अग्रिम सम्पत्ति हो।'
      }
    },
    formula: {
      equation: 'Net Payment Received = Gross Invoiced Amount * (1 - Statutory TDS Rate)',
      explanation: {
        en: 'Multiply gross invoice amount by the TDS percentage to find the tax deducted, and subtract it to find the net cash received.',
        np: 'कुल बिल रकमलाई कानुनले तोकेको TDS प्रतिशतले गुणन गरी काटिने कर निकाल्ने, र कुल रकमबाट कर घटाएर हातमा पर्ने खुद रकम निकाल्ने।'
      },
      variables: [
        { symbol: 'Gross Invoice', label: { en: 'Total contractual payment amount before tax', np: 'कर कटाउनुअघिको कुल सम्झौता रकम' } },
        { symbol: 'TDS Rate', label: { en: 'Statutory withholding rate (e.g. 15% for services, 5% for interest)', np: 'कानुनी कर कट्टी दर (जस्तै सेवामा १५%, ब्याजमा ५%)' } }
      ],
      example: {
        scenario: {
          en: 'A consultant submits a bill for NPR 200,000 subject to 15% Section 88 TDS in Nepal.',
          np: 'परामर्शदाताले १५% TDS लाग्ने गरी रु. २,००,००० को बिल पेश गर्दा।'
        },
        calculation: {
          en: 'TDS = 200,000 * 0.15 = NPR 30,000. Net Cash = 200,000 - 30,000 = NPR 170,000.',
          np: 'TDS = २,००,००० * ०.१५ = रु. ३०,०००। खुद भुक्तानी = २,००,००० - ३०,००० = रु. १,७०,०००।'
        },
        result: {
          en: 'NPR 170,000 Net Cash Received + NPR 30,000 Tax Credit under PAN',
          np: 'रु. १,७०,००० खुद नगद प्राप्त + रु. ३०,००० प्यानमा अग्रिम कर जम्मा'
        }
      }
    },
    advantages: {
      en: [
        'Enables smooth, pay-as-you-earn tax compliance, preventing massive end-of-year tax shocks',
        'Accumulated advance TDS acts as an official cash credit against your final annual tax liabilities',
        'Automatic 5% final withholding on bank interest and dividends eliminates complex annual filing',
        'Deters the shadow economy by tracking transaction trails across formal business entities'
      ],
      np: [
        'कमाउँदै जाँदा किस्ताबन्दीमा कर काटिने भएकाले वर्षको अन्त्यमा एकैपटक ठूलो करको भार पर्नबाट जोगाउँछ',
        'काटिएको अग्रिम करलाई वर्षको अन्त्यमा आफ्नो वास्तविक कर दायित्वबाट सिधै घटाउन पाइन्छ',
        'बैंक ब्याज र सेयर लाभांशमा ५% काटेपछि व्यक्तिलाई थप करको कुनै झन्झट नरहने',
        'कालोधन र अनौपचारिक कारोबारलाई निरुत्साहित गरी देशको राजस्व प्रणालीलाई बलियो बनाउँछ'
      ]
    },
    limitations: {
      en: [
        'Reduces immediate cash flow: 15% of your consulting or invoice revenue is locked upfront',
        'If an unethical payer fails to deposit deducted TDS under your PAN, you lose the credit',
        'Claiming refunds for excess deducted TDS from the IRD can be an agonizing, bureaucratic process',
        'Requires continuous monitoring of the IRD Taxpayer Portal to verify third-party deposits'
      ],
      np: [
        'तत्काल हातमा आउने नगद प्रवाह घट्छ: सेवा शुल्कको १५% रकम सुरुमै रोकिने',
        'यदि भुक्तानी दिने पक्षले बदमासी गरेर तपाईंको प्यानमा कर जम्मा गरेन भने तपाईंलाई घाटा हुने',
        'बढी काटिएको कर राजस्व कार्यालयबाट नगद फिर्ता (Refund) माग्न निकै झन्झटिलो प्रशासनिक प्रक्रिया हुने',
        'आफ्नो प्यानमा कर दाखिला भयो कि भएन भनी राजस्व पोर्टलमा निरन्तर निगरानी राखिरहनु पर्ने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'TDS deducted by a client is an extra penalty fee that you permanently lose.',
          np: 'ग्राहकले काटेको १५% TDS भनेको अतिरिक्त जरिवाना हो जुन सधैंका लागि खेर जान्छ।'
        },
        reality: {
          en: 'Non-final TDS is simply your income tax paid in advance. When filing your annual tax return, you deduct that exact TDS amount from your total tax bill.',
          np: 'सेवा शुल्कमा काटिएको TDS कुनै जरिवाना होइन, तपाईंले तिर्नुपर्ने आयकर अग्रिम दाखिला भएको हो। वर्षको अन्त्यमा कर तिर्दा यो रकम कुल करबाट सिधै घटाइन्छ।'
        }
      },
      {
        myth: {
          en: 'You must pay additional progressive income tax on your bank fixed deposit interest.',
          np: 'बैंकको मुद्दती निक्षेपबाट आएको ब्याजमा पछि फेरि थप व्यक्तिगत आयकर तिर्नुपर्छ।'
        },
        reality: {
          en: 'Under Section 92, the 5% TDS deducted by banks on individual deposits is a final tax. You do not need to declare it as taxable income under higher progressive tax slabs.',
          np: 'आयकर ऐनको दफा ९२ अनुसार बैंकले काट्ने ५% कर व्यक्तिगत निक्षेपकर्ताका लागि अन्तिम कर हो। यसमा पछि कुनै पनि थप कर तिर्नु पर्दैन।'
        }
      }
    ],
    comparison: {
      title: { en: 'Final Withholding TDS vs Non-Final Advance TDS in Nepal', np: 'अन्तिम कर (Final TDS) र अग्रिम कर (Non-Final TDS) बीचको तुलना' },
      subtitle: { en: 'Payments where tax liability ends immediately vs payments requiring annual tax reconciliation', np: 'कर दायित्व तुरुन्तै समाप्त हुने भुक्तानी र पछि हिसाब मिलान गर्नुपर्ने कर बीचको फरक' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Final Withholding TDS (Section 92)', np: 'अन्तिम कर (Final Withholding TDS)' },
      colB: { en: 'Non-Final Advance TDS (Section 88)', np: 'अग्रिम कर (Advance TDS)' },
      rows: [
        {
          feature: { en: 'Common Examples', np: 'प्रमुख उदाहरणहरू' },
          valA: { en: 'Bank interest (5%), NEPSE stock dividends (5%), residential rent to individuals', np: 'बैंक मुद्दती ब्याज (५%), सेयर लाभांश (५%), व्यक्तिलाई दिइने घरभाडा' },
          valB: { en: 'Consultancy fees (15%), professional services, commercial contracts', np: 'परामर्श सेवा शुल्क (१५%), ठेक्कापट्टा, व्यावसायिक कमिसन' }
        },
        {
          feature: { en: 'Annual Tax Filing Obligation', np: 'वार्षिक कर विवरणमा देखाउनुपर्ने' },
          valA: { en: 'Not included in annual income; zero additional tax', np: 'वार्षिक करमा देखाउनु पर्दैन; थप कर शून्य' },
          valB: { en: 'Must be declared in annual gross income; credit claimed against tax', np: 'वार्षिक आम्दानीमा जोड्नै पर्छ; पहिले काटेको कर घटाउन पाइन्छ' }
        },
        {
          feature: { en: 'Tax Credit Adjustment', np: 'कर समायोजनको सुविधा' },
          valA: { en: 'No adjustment; rate is final', np: 'कुनै समायोजन हुँदैन; जति काटियो त्यही अन्तिम' },
          valB: { en: 'Full rupee-for-rupee tax credit via IRD Annex-10', np: 'काटिएको पूरै रकम राजस्व विभागको पोर्टलबाट समायोजन गर्न मिल्ने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'pan', name: 'PAN', type: 'glossary' },
      { slug: 'capital-gain', name: 'Capital Gain', type: 'glossary' },
      { slug: 'dividend', name: 'Dividend', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Tax Basics in Nepal: Income Tax, PAN & TDS', categorySlug: 'taxation', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Nepal Income Tax Slabs & TDS Guide', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Income Tax Calculator Nepal', slug: 'income-tax', desc: 'Calculate your net tax obligations and TDS credits in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'What is an Annex-10 (अनुसूची १०) in the Nepal IRD system?', np: 'नेपालको कर प्रणालीमा अनुसूची १० (Annex-10) भनेको के हो?' },
        a: {
          en: 'Annex-10 is the official computerized tax deduction statement in the IRD Taxpayer Portal that records every single rupee of TDS deposited under your PAN by third parties (employers, banks, clients). It serves as your official legal proof of prepaid taxes.',
          np: 'अनुसूची १० भनेको आन्तरिक राजस्व विभागको करदाता पोर्टलमा देखिने आधिकारिक विवरण हो, जसमा विभिन्न रोजगारदाता, बैंक वा कम्पनीहरूले तपाईंको प्यानमा जम्मा गरिदिएको सबै अग्रिम करको हिसाब सुरक्षित रहन्छ।'
        }
      },
      {
        q: { en: 'What is the TDS rate on physical residential house rent in Nepal?', np: 'नेपालमा घरभाडामा कति प्रतिशत TDS लाग्छ?' },
        a: {
          en: 'Under local government regulations, house rent paid to individual homeowners is subject to a flat 10% House Rent Tax (घरबहाल कर), payable directly to the local municipality (Nagarpalika/Gaunpalika) or deducted by corporate tenants.',
          np: 'स्थानीय सरकार सञ्चालन ऐन अनुसार व्यक्तिलाई भुक्तानी गरिने घरभाडामा १०% घरबहाल कर लाग्दछ, जुन सम्बन्धित स्थानीय तह (नगरपालिका वा गाउँपालिका) को वडा कार्यालयमा बुझाउनुपर्छ।'
        }
      },
      {
        q: { en: 'Can I get a cash refund if my total deducted TDS exceeds my annual tax liability?', np: 'यदि मेरो कुल तिर्नुपर्ने करभन्दा बढी TDS काटिएको छ भने के त्यो पैसा फिर्ता पाइन्छ?' },
        a: {
          en: 'Yes. You can file for an official tax refund (कर फिर्ता) at your registered Inland Revenue Office (IRO) after submitting your annual audited return, or carry forward the excess credit to offset next year\'s taxes.',
          np: 'पाइन्छ। आर्थिक वर्षको अन्त्यमा कर चुक्ता विवरण पेश गर्दा बढी दाखिला भएको कर राजस्व कार्यालयमा निवेदन दिएर फिर्ता लिन सकिन्छ वा अर्को वर्ष तिर्नुपर्ने करमा सार्न (Carry forward) सकिन्छ।'
        }
      },
      {
        q: { en: 'What happens if a company deducts TDS from my payment but fails to deposit it with the IRD?', np: 'कम्पनीले मेरो पैसाबाट कर काट्यो तर राजस्व कार्यालयमा जम्मा गरिदिएन भने के हुन्छ?' },
        a: {
          en: 'The payer is legally liable under Section 117-120 of the Income Tax Act for interest, severe fines, and penal damages. However, to claim your tax credit, you must show the original payment contract, invoice, and bank statement proving the deduction occurred.',
          np: 'काटेको कर समयमा नबुझाउने कम्पनीलाई आयकर ऐन अनुसार कडा जरिवाना र ब्याज लाग्छ। तर आफ्नो कर क्रेडिट प्रमाणित गर्न तपाईंसँग सम्झौता, बिल र बैंक स्टेटमेन्ट सुरक्षित हुनुपर्छ।'
        }
      }
    ],
    summary: {
      en: [
        'TDS is an upfront withholding tax deducted directly from payments and remitted to the government.',
        'Bank interest (5%) and listed company dividends (5%) are final withholding taxes for individuals.',
        'Professional services incur a 15% advance withholding tax that can be claimed as an annual tax credit.',
        'Always ensure deducted taxes are officially deposited under your 9-digit PAN into your IRD Annex-10.'
      ],
      np: [
        'स्रोतमा कर कट्टी (TDS) भनेको भुक्तानी दिने समयमै कर काटेर सरकारलाई बुझाइदिने प्रणाली हो।',
        'बैंकको ब्याज (५%) र सेयर लाभांश (५%) मा लाग्ने कर व्यक्तिहरूका लागि अन्तिम कर हो।',
        'परामर्श सेवामा लाग्ने १५% कर अग्रिम कर हो, जसलाई वर्षको अन्त्यमा कुल करबाट घटाउन पाइन्छ।',
        'काटिएको कर सधैं आफ्नो ९ अंकको प्यान नम्बरमा राजस्वको अनुसूची १० मा जम्मा भएको यकिन गर्नुपर्छ।'
      ]
    },
    whereSeen: [
      { title: 'Tax Basics in Nepal', type: 'Lesson', url: '/learn/taxation/what-is-investing' },
      { title: 'Income Tax Calculator', type: 'Calculator', url: '/calculators/income-tax' }
    ],
    meta: {
      title: 'TDS (Tax Deducted at Source) in Nepal: Rates & Rules Guide | risePaisa',
      description: 'Master TDS (Tax Deducted at Source) in Nepal. Understand 5% bank interest, 15% consulting fees, Final vs Non-Final withholding, and Annex-10 tax credits.'
    }
  },

  // 3. VAT
  {
    slug: 'vat',
    term: 'VAT (Value Added Tax)',
    termNp: 'मूल्य अभिवृद्धि कर (VAT)',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    letter: 'V',
    abbreviation: 'VAT',
    synonyms: ['Value Added Tax', '13% VAT', 'भ्याट', 'मूल्य अभिवृद्धि कर'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'Value Added Tax (VAT) is a multi-stage consumption tax levied on the value added to goods and services at each stage of the production and distribution supply chain in Nepal, charged at a standard rate of 13%.',
      np: 'मूल्य अभिवृद्धि कर (VAT) भनेको उत्पादन तथा वितरणको प्रत्येक चरणमा थपिने मूल्य (Value Added) मा लाग्ने अप्रत्यक्ष उपभोग कर हो, जुन नेपालमा सामान्यतया १३% को स्थिर दरमा संकलन गरिन्छ।'
    },
    detailedExplanation: {
      en: 'Governed by the Value Added Tax Act 2052, VAT is Nepal\'s largest domestic source of indirect tax revenue. Unlike income tax which taxes the money you earn, VAT taxes the money you spend on consumer goods and services. Businesses registered under VAT collect 13% tax from buyers on sales (Output VAT) and pay 13% tax on business purchases (Input VAT). The business remits only the net difference (Output VAT minus Input VAT) to the Inland Revenue Department (IRD). Ultimately, the entire 13% tax burden is borne by the final consumer, while basic agricultural produce, unprocessed foodstuffs, and essential medicines remain legally exempt from VAT.',
      np: 'मूल्य अभिवृद्धि कर ऐन २०५२ अनुसार सञ्चालित भ्याट नेपाल सरकारको आन्तरिक राजस्व संकलनको सबैभन्दा ठूलो स्रोत हो। आयकर कमाइमा लाग्छ भने भ्याट उपभोक्ताले वस्तु तथा सेवा खरिद गर्दा गर्ने खर्चमा लाग्दछ। भ्याटमा दर्ता भएका व्यवसायीहरूले सामान बेच्दा ग्राहकबाट १३% भ्याट (Output VAT) उठाउँछन् र आफूले सामान किन्दा तिरेको भ्याट (Input VAT) कटाएर बाँकी फरक रकम मात्र आन्तरिक राजस्व कार्यालयमा बुझाउँछन्। यस करको अन्तिम भार सर्वसाधारण उपभोक्तामाथि पर्दछ, यद्यपि आधारभूत कृषि उपज, खाद्यान्न र अत्यावश्यक औषधिमा भ्याट छुट दिइएको हुन्छ।'
    },
    whyItMatters: {
      en: 'VAT affects every household\'s cost of living and every business\'s legal compliance. For entrepreneurs and freelancers, crossing annual turnover thresholds (NPR 5,000,000 for goods or NPR 2,000,000 for services) legally mandates VAT registration. Failing to register or operating with unbilled cash sales invites severe 100% tax penalties and criminal prosecution under IRD audit squads.',
      np: 'भ्याटले हरेक नागरिकको दैनिक जीवनयापनको लागत र व्यवसायीहरूको कानुनी अस्तित्व निर्धारण गर्छ। नेपालमा वार्षिक कारोबार सीमा (वस्तु व्यापारमा रु. ५० लाख र सेवा व्यवसायमा रु. २० लाख) नाघ्नासाथ अनिवार्य रूपमा भ्याटमा दर्ता हुनै पर्छ। दर्ता नगरी वा बिल नकाटी नगदमा कारोबार गरेको पाइएमा १००% सम्म चर्को जरिवाना र कानुनी कारबाही हुने व्यवस्था छ।'
    },
    howItWorks: {
      summary: {
        en: 'The operational mechanism of Value Added Tax and input tax credit follows 4 core stages:',
        np: 'मूल्य अभिवृद्धि कर र इनपुट ट्याक्स क्रेडिट (Input Tax Credit) को चक्र ४ चरणमा सम्पन्न हुन्छ:'
      },
      steps: [
        {
          title: { en: '1. Production / Import (Raw Material)', np: '१. कच्चा पदार्थ खरिद / आयात' },
          desc: { en: 'A manufacturer imports raw materials for NPR 1,000, pays 13% VAT (NPR 130) at the customs border, and records NPR 130 as Input VAT.', np: 'उद्योगले रु. १,००० को कच्चा पदार्थ आयात गर्दा भन्सारमा १३% भ्याट (रु. १३०) तिर्छ र त्यसलाई आफ्नो इनपुट भ्याटमा चढाउँछ।' }
        },
        {
          title: { en: '2. Value Addition & Wholesale Sale', np: '२. प्रशोधन र थोक बिक्री' },
          desc: { en: 'The manufacturer processes goods and sells to a wholesaler for NPR 1,500 + 13% VAT (NPR 195). The factory remits NPR 65 (195 - 130) to the IRD.', np: 'उद्योगले सामान बनाएर थोक बिक्रेतालाई रु. १,५०० मा बेच्दा १३% भ्याट (रु. १९५) उठाउँछ। उद्योगले १९५ बाट आफूले तिरेको १३० कटाएर बाँकी रु. ६५ राजस्वमा बुझाउँछ।' }
        },
        {
          title: { en: '3. Retail Distribution', np: '३. खुद्रा बिक्री' },
          desc: { en: 'The retailer buys for NPR 1,500 + 195 VAT and sells to the end customer for NPR 2,000 + 13% VAT (NPR 260). The retailer remits NPR 65 (260 - 195).', np: 'पसलेले रु. १,५०० मा किनेर सर्वसाधारणलाई रु. २,००० मा बेच्दा १३% भ्याट (रु. २६०) उठाउँछ र पहिलेको १९५ कटाएर बाँकी रु. ६५ सरकारलाई बुझाउँछ।' }
        },
        {
          title: { en: '4. Final Consumer Consumption', np: '४. अन्तिम उपभोक्ता भुक्तानी' },
          desc: { en: 'The consumer pays NPR 2,260 total. Total VAT collected across all stages equals NPR 260 (130 + 65 + 65), perfectly matching 13% of the final retail price.', np: 'उपभोक्ताले कुल रु. २,२६० तिर्छ। सबै चरणबाट संकलन भएको कुल भ्याट ठ्याक्कै रु. २६० (१३० + ६५ + ६५) हुन्छ, जुन अन्तिम मूल्यको १३% बराबर हो।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Commercial retail invoicing for electronics, clothing, and restaurant meals',
        'Customs points during international import of raw materials and finished goods',
        'Monthly electronic VAT return filing on the IRD portal (Form 103)',
        'Government procurement and public tender contracts'
      ],
      np: [
        'इलेक्ट्रोनिक्स, लत्ताकपडा, होटल तथा रेस्टुरेन्टको व्यावसायिक बिक्री बिलमा',
        'भन्सार नाकाहरूबाट विदेशबाट कच्चा पदार्थ वा तयारी सामान आयात गर्दा',
        'आन्तरिक राजस्व विभागको पोर्टलमा मासिक भ्याट विवरण (फारम १०३) बुझाउँदा',
        'सरकारी ठेक्कापट्टा र सार्वजनिक खरिद प्रक्रियामा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The 13% Standard Rate, Mandatory Thresholds, and Electronic Invoicing in Nepal',
        np: 'नेपालमा १३% को स्थिर भ्याट दर, अनिवार्य दर्ता सीमा र ई-बिलिङ प्रणाली'
      },
      body: {
        en: 'Nepal operates a single standard VAT rate of 13.0% with zero multi-tier luxury rates. Under the Value Added Tax Act, businesses must register for VAT if their trailing 12-month turnover exceeds NPR 5,000,000 for goods, NPR 2,000,000 for service providers (such as consultancies, IT agencies, hotels), or NPR 2,000,000 for mixed goods-service enterprises. Furthermore, to combat tax evasion and fake paper billing, the Inland Revenue Department mandates real-time Electronic Billing (Central Billing Monitoring System / CBMS) for large supermarkets, department stores, and high-turnover retailers, transmitting every printed tax invoice instantly to the IRD central servers.',
        np: 'नेपालमा मूल्य अभिवृद्धि करको एउटै मात्र स्थिर दर १३.०% लागू छ। भ्याट ऐन अनुसार पछिल्लो १२ महिनामा वस्तुको कारोबार रु. ५० लाख, सेवा व्यवसाय (जस्तै कन्सल्टेन्सी, सफ्टवेयर कम्पनी, होटल) को कारोबार रु. २० लाख वा मिश्रित कारोबार रु. २० लाख नाघेमा अनिवार्य रूपमा भ्याटमा दर्ता हुनुपर्छ। नक्कली बिल र कर छली रोक्न आन्तरिक राजस्व विभागले ठूला डिपार्टमेन्ट स्टोर, अस्पताल र रेस्टुरेन्टहरूमा केन्द्रीय बिलिङ अनुगमन प्रणाली (CBMS) अनिवार्य गरेको छ, जसले कम्प्युटरबाट बिल काट्नासाथ सिधै राजस्व विभागको सर्भरमा रेकर्ड पठाउँछ।'
      },
      keyPoints: {
        en: [
          'Standard VAT rate in Nepal is a flat 13.0%.',
          'Mandatory threshold: NPR 50 Lakhs for goods; NPR 20 Lakhs for services.',
          'Registered businesses must submit monthly VAT returns by the 25th of every month.',
          'Basic rice, fresh vegetables, milk, and essential medicines are legally exempt from VAT.'
        ],
        np: [
          'नेपालमा मूल्य अभिवृद्धि करको सामान्य दर स्थिर १३.०% छ।',
          'अनिवार्य दर्ता सीमा: वस्तु व्यापारमा रु. ५० लाख र सेवा व्यवसायमा रु. २० लाख।',
          'दर्ता भएका व्यवसायीले हरेक महिनाको २५ गतेभित्र अनलाइन भ्याट विवरण बुझाइसक्नुपर्छ।',
          'चामल, हरियो तरकारी, दूध, नुन र अत्यावश्यक जीवनरक्षक औषधिमा भ्याट लाग्दैन (पूर्ण छुट)।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Suresh operates a registered computer hardware store in New Road, Kathmandu. In the month of Kartik, he purchases laptops from an importer for NPR 1,000,000 plus 13% VAT (NPR 130,000 Input VAT paid). During the same month, Suresh sells those laptops to retail customers for NPR 1,300,000 plus 13% VAT (NPR 169,000 Output VAT collected). When filing his monthly VAT return by the 25th of Mangsir on the IRD portal, Suresh claims his input credit: Net VAT Payable = 169,000 - 130,000 = NPR 39,000. Suresh remits only NPR 39,000 to the government, passing the entire net tax burden transparently down the supply chain.',
        np: 'काठमाडौंको न्युरोडमा कम्प्युटर पसल चलाउने सुरेशले कात्तिक महिनामा आयातकर्ताबाट रु. १० लाखको ल्यापटप किन्छन् र त्यसमा १३% भ्याट (रु. १,३०,००० इनपुट भ्याट) तिर्छन्। सोही महिना उनले ती ल्यापटपहरू ग्राहकलाई रु. १३ लाखमा बेच्छन् र १३% का दरले रु. १,६९,००० भ्याट (आउटपुट भ्याट) उठाउँछन्। मंसिर २५ गतेभित्र राजस्व विभागको पोर्टलमा भ्याट विवरण बुझाउँदा सुरेशले आफ्नो इनपुट कट्टी दाबी गर्छन्: सरकारलाई तिर्नुपर्ने खुद भ्याट = १,६९,००० - १,३०,००० = रु. ३९,००० मात्र। सुरेशले ३९ हजार मात्र राजस्वमा दाखिला गर्छन् र कुनै दोहोरो कर पर्दैन।'
      },
      takeaway: {
        en: 'VAT is an indirect tax collected by businesses as agents of the state; registered businesses do not bear the cost of VAT, as they claim back all taxes paid on inputs.',
        np: 'भ्याट व्यवसायीले आफ्नो खल्तीबाट तिर्ने कर होइन, यो ग्राहकबाट उठाएर सरकारलाई बुझाउने कर हो; आफूले किन्दा तिरेको भ्याट कटाउन पाइने भएकाले यसले व्यवसायलाई अतिरिक्त भार पार्दैन।'
      }
    },
    formula: {
      equation: 'Net VAT Payable = Output VAT (Sales) - Input VAT (Purchases)',
      explanation: {
        en: 'Subtract total VAT paid on business purchases and imports (Input VAT) from total VAT collected from customers on commercial sales (Output VAT).',
        np: 'ग्राहकलाई सामान बेच्दा उठाएको कुल भ्याट (Output VAT) बाट आफूले सामान किन्दा तिरेको कुल भ्याट (Input VAT) घटाएर बाँकी रकम सरकारलाई बुझाउने।'
      },
      variables: [
        { symbol: 'Output VAT', label: { en: '13% tax collected on sales to buyers', np: 'बिक्री गर्दा ग्राहकबाट संकलन गरिएको १३% भ्याट' } },
        { symbol: 'Input VAT', label: { en: '13% tax paid on legitimate business inputs/imports', np: 'कच्चा पदार्थ वा सामान किन्दा पहिले तिरेको १३% भ्याट' } }
      ],
      example: {
        scenario: {
          en: 'A store collects NPR 65,000 VAT on monthly sales and paid NPR 45,000 VAT on verified purchase invoices.',
          np: 'पसलले महिनाभरमा रु. ६५,००० भ्याट उठायो र सामान किन्दा रु. ४५,००० भ्याट तिरेको बिल छ।'
        },
        calculation: {
          en: 'Net VAT to Government = 65,000 - 45,000 = NPR 20,000.',
          np: 'सरकारलाई बुझाउनुपर्ने खुद भ्याट = ६५,००० - ४५,००० = रु. २०,०००।'
        },
        result: {
          en: 'NPR 20,000 Net VAT Payable to IRD',
          np: 'रु. २०,००० आन्तरिक राजस्व कार्यालयमा दाखिला गर्नुपर्ने खुद रकम'
        }
      }
    },
    advantages: {
      en: [
        'Eliminates cascading "tax on tax" through the input tax credit deduction mechanism',
        'Predictable, transparent flat rate (13%) simplifies financial planning for businesses',
        'Essential consumer items (food, agriculture, life-saving medicines) are 100% exempt',
        'Digital filing via IRD web portal eliminates physical paperwork and corruption'
      ],
      np: [
        'इनपुट कर कट्टी (Tax Credit) को सुविधाले गर्दा करमाथि कर (Cascading effect) लाग्न पाउँदैन',
        'स्थिर १३% को दरले गर्दा व्यापार व्यवसायमा वित्तीय योजना बनाउन निकै सजिलो हुने',
        'अत्यावश्यक खाद्यान्न, कृषि उपज र औषधिलाई पूर्ण भ्याट छुट दिएर गरिब नागरिकलाई राहत',
        'आन्तरिक राजस्व विभागको पोर्टलबाट घरमै बसेर अनलाइन भ्याट विवरण बुझाउन सकिने'
      ]
    },
    limitations: {
      en: [
        'Regressive nature means low-income families pay the same 13% tax on non-exempt goods as millionaires',
        'Registered businesses must file monthly returns by the 25th even if monthly sales are zero',
        'Failing to file monthly returns triggers steep statutory penalties (NPR 1,000/month + interest)',
        'Input tax credit claims require strict tax invoice audits and verified payment vouchers'
      ],
      np: [
        'धनी र गरिब दुवैले सामान किन्दा समान १३% कर तिर्नुपर्ने भएकाले न्यून आय भएकालाई बढी भार',
        'दर्ता भएपछि कुनै महिना कारोबार शून्य भए पनि हरेक महिनाको २५ गतेभित्र अनिवार्य शून्य विवरण बुझाउनै पर्ने',
        'समयमा विवरण नबुझाएमा प्रतिमहिना रु. १,००० जरिवाना र अतिरिक्त ब्याज लाग्ने कडा नियम',
        'इनपुट कट्टी पाउनका लागि अनिवार्य रूपमा आधिकारिक भ्याट बिल र भुक्तानी प्रमाण चाहिने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'If your business has zero sales in a given month, you do not need to file a VAT return.',
          np: 'कुनै महिना व्यापार शून्य भयो वा पसल बन्द रह्यो भने भ्याट विवरण बुझाउनु पर्दैन।'
        },
        reality: {
          en: 'Under Section 18 of the VAT Act, you must file a "Zero Return" (शून्य विवरण) on the IRD portal by the 25th. Forgetting to submit a zero return triggers a mandatory NPR 1,000 fine per month.',
          np: 'कारोबार शून्य भए पनि महिना सकिएको २५ गतेभित्र अनलाइनबाट "शून्य विवरण" (Zero Return) बुझाउनै पर्छ। नबुझाएमा प्रतिमहिना रु. १,००० का दरले जरिवाना थपिँदै जान्छ।'
        }
      },
      {
        myth: {
          en: 'Every single shop and grocery store in Nepal is required to add 13% VAT to their prices.',
          np: 'नेपालका सबै साना किराना पसल र चिया पसलले पनि सामानमा १३% भ्याट जोड्नुपर्छ।'
        },
        reality: {
          en: 'Only businesses registered under VAT can legally charge 13% VAT. Small shops registered under general PAN (below the 50 Lakh goods / 20 Lakh services threshold) cannot collect VAT.',
          np: 'भ्याटमा दर्ता भएका व्यवसायीले मात्र १३% भ्याट उठाउन पाउँछन्। वार्षिक ५० लाखभन्दा कम कारोबार भएर सामान्य प्यान (PAN) मा दर्ता भएका साना किराना पसलले ग्राहकसँग भ्याट लिन कानुनी रूपमा पाउँदैनन्।'
        }
      }
    ],
    comparison: {
      title: { en: 'General PAN Registration vs VAT Registration in Nepal', np: 'सामान्य प्यान (PAN) दर्ता र भ्याट (VAT) दर्ता बीचको भिन्नता' },
      subtitle: { en: 'Small business threshold exemption vs mandatory multi-stage 13% tax collection', np: 'साना व्यवसायीका लागि प्यान र ठूला कारोबारका लागि भ्याट बीचको मुख्य फरक' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'VAT Registration (13%)', np: 'भ्याट दर्ता (VAT)' },
      colB: { en: 'General PAN (Non-VAT)', np: 'सामान्य प्यान (Non-VAT)' },
      rows: [
        {
          feature: { en: 'Annual Turnover Threshold', np: 'वार्षिक कारोबार सीमा' },
          valA: { en: 'Mandatory if goods > NPR 50 Lakhs or services > NPR 20 Lakhs', np: 'वस्तुमा ५० लाख वा सेवामा २० लाखभन्दा बढी कारोबार भएमा' },
          valB: { en: 'Below NPR 50 Lakhs (goods) or NPR 20 Lakhs (services)', np: 'वस्तुमा ५० लाख र सेवामा २० लाखभन्दा कम कारोबार भएका साना व्यवसाय' }
        },
        {
          feature: { en: 'Charging Tax on Invoices', np: 'ग्राहकबाट कर उठाउने अधिकार' },
          valA: { en: 'Legally mandatory to add 13% VAT to customer bills', np: 'ग्राहकको बिलमा अनिवार्य रूपमा १३% भ्याट जोड्नै पर्ने' },
          valB: { en: 'Prohibited from collecting 13% VAT from customers', np: 'ग्राहकबाट १३% भ्याट उठाउन कानुनी रूपमा पूर्ण प्रतिबन्ध' }
        },
        {
          feature: { en: 'Input Tax Credit', np: 'खरिदमा तिरेको कर फिर्ता' },
          valA: { en: 'Can claim full credit for VAT paid on business purchases', np: 'आफूले सामान किन्दा तिरेको भ्याट शतप्रतिशत कट्टा गर्न पाउने' },
          valB: { en: 'Cannot claim input tax credit; purchase VAT becomes a cost', np: 'इनपुट कट्टी नपाइने; किन्दा तिरेको भ्याट खर्चमा गणना हुने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'pan', name: 'PAN', type: 'glossary' },
      { slug: 'tds', name: 'TDS', type: 'glossary' },
      { slug: 'inflation', name: 'Inflation', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Tax Basics in Nepal: Income Tax, PAN & TDS', categorySlug: 'taxation', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Nepal Income Tax Slabs & TDS Guide', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Income Tax Calculator Nepal', slug: 'income-tax', desc: 'Assess taxation frameworks and personal tax liabilities in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'What goods and services are completely exempt from VAT in Nepal?', np: 'नेपालमा कुन-कुन वस्तु तथा सेवामा भ्याट लाग्दैन (भ्याट छुट)?' },
        a: {
          en: 'Under Schedule 1 of the VAT Act, basic agricultural products (unprocessed rice, wheat, vegetables, fruits), fresh milk, livestock, public passenger transport, textbooks, and essential life-saving medicines are completely exempt from VAT.',
          np: 'भ्याट ऐनको अनुसूची १ अनुसार आधारभूत कृषि उत्पादन (धान, गहुँ, हरियो तरकारी, फलफूल), दूध, सार्वजनिक बस यातायात, पाठ्यपुस्तक र नेपाल सरकारले तोकेका जीवनरक्षक औषधिहरूमा भ्याट लाग्दैन।'
        }
      },
      {
        q: { en: 'What is the penalty for failing to file a monthly VAT return on time?', np: 'समयमा भ्याट विवरण नबुझाएमा कति जरिवाना लाग्छ?' },
        a: {
          en: 'If you fail to file by the 25th of the following Nepali month, the IRD charges a statutory penalty of NPR 1,000 per month (or 0.1% of gross sales per day, whichever is higher) plus 15% annual interest on any unpaid VAT balance.',
          np: 'महिना सकिएको २५ गतेभित्र विवरण नबुझाएमा प्रतिमहिना रु. १,००० (वा कुल बिक्रीको ०.१% प्रतिदिनमध्ये जुन बढी हुन्छ सो) जरिवाना र नतिरेको कर रकममा वार्षिक १५% का दरले ब्याज लाग्दछ।'
        }
      },
      {
        q: { en: 'How do I verify if a seller’s VAT invoice is genuine in Nepal?', np: 'बिक्रेताले दिएको भ्याट बिल सक्कली हो कि नक्कली कसरी जाँच्ने?' },
        a: {
          en: 'A legal VAT invoice must display a registered 9-digit PAN/VAT number, the official registered entity name, serial invoice number, date, and separate breakdown of taxable amount and 13% VAT. You can verify the PAN instantly on the IRD portal under "Taxpayer Search".',
          np: 'सक्कली भ्याट बिलमा ९ अंकको प्यान/भ्याट नम्बर, कम्पनीको दर्ता भएको नाम, बिल नम्बर, मिति र १३% भ्याट रकम स्पष्ट खुलाइएको हुनुपर्छ। आन्तरिक राजस्व विभागको वेबसाइटमा "Taxpayer Search" मा गएर उक्त नम्बर सक्कली हो कि होइन तुरुन्त हेर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'What is the Central Billing Monitoring System (CBMS) in Nepal?', np: 'नेपालमा केन्द्रीय बिलिङ अनुगमन प्रणाली (CBMS) भनेको के हो?' },
        a: {
          en: 'CBMS is an automated software bridge developed by the IRD that links the cash registers and billing software of large commercial businesses directly to government servers. Every time an invoice prints, a copy is logged in the IRD database instantly, eliminating fake billing.',
          np: 'CBMS आन्तरिक राजस्व विभागको केन्द्रीय सफ्टवेयर प्रणाली हो, जसले ठूला व्यापारिक प्रतिष्ठान र सुपरमार्केटको कम्प्युटर बिलिङलाई सिधै राजस्वको सर्भरसँग जोड्दछ। पसलेले बिल प्रिन्ट गर्नासाथ त्यसको रेकर्ड तुरुन्तै सरकारको खातामा पुग्छ।'
        }
      }
    ],
    summary: {
      en: [
        'VAT is a multi-stage consumption tax levied at a flat standard rate of 13% in Nepal.',
        'Businesses collect Output VAT on sales, subtract Input VAT paid on purchases, and remit the net difference.',
        'Mandatory registration applies when annual turnover exceeds NPR 50 Lakhs (goods) or NPR 20 Lakhs (services).',
        'Basic agricultural produce, essential foodstuffs, and medicines are legally exempt from VAT.'
      ],
      np: [
        'भ्याट उत्पादन र वितरणको प्रत्येक चरणमा थपिने मूल्यमा लाग्ने १३% को स्थिर उपभोग कर हो।',
        'व्यवसायीले बिक्रीमा उठाएको भ्याटबाट खरिदमा तिरेको भ्याट कटाएर बाँकी फरक रकम मात्र सरकारलाई बुझाउँछन्।',
        'वार्षिक कारोबार वस्तुमा ५० लाख वा सेवामा २० लाख नाघेपछि अनिवार्य भ्याटमा दर्ता हुनुपर्छ।',
        'दैनिक उपभोग्य कृषि उपज, खाद्यान्न र अत्यावश्यक औषधिहरूमा भ्याट पूर्ण छुट गरिएको छ।'
      ]
    },
    whereSeen: [
      { title: 'Tax Basics in Nepal', type: 'Lesson', url: '/learn/taxation/what-is-investing' },
      { title: 'Income Tax Calculator', type: 'Calculator', url: '/calculators/income-tax' }
    ],
    meta: {
      title: 'What is VAT in Nepal? 13% Value Added Tax Guide | risePaisa',
      description: 'Master Value Added Tax (VAT) in Nepal. Learn how the 13% rate works, mandatory registration thresholds, input tax credits, and exempt goods.'
    }
  },

  // 4. SSF
  {
    slug: 'ssf',
    term: 'SSF (Social Security Fund)',
    termNp: 'सामाजिक सुरक्षा कोष (SSF)',
    categorySlug: 'retirement',
    categoryName: { en: 'Retirement & Pension', np: 'अवकाश र पेन्सन' },
    letter: 'S',
    abbreviation: 'SSF',
    synonyms: ['Social Security Fund', 'Contribution Based SSF', 'सामाजिक सुरक्षा कोष', 'योगदानमा आधारित सामाजिक सुरक्षा'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Social Security Fund (SSF) is a statutory contribution-based social safety net in Nepal where formal employers and employees collectively deposit 31% of basic salary monthly to fund health, disability, and pension benefits.',
      np: 'सामाजिक सुरक्षा कोष (SSF) भनेको नेपालमा औपचारिक क्षेत्रका रोजगारदाता र श्रमिक दुवैले मासिक आधारभूत तलबको कुल ३१% रकम जम्मा गरी स्वास्थ्य उपचार, दुर्घटना, मातृत्व र आजीवन पेन्सन सुविधा प्राप्त गर्ने राज्यद्वारा सञ्चालित सामाजिक सुरक्षा प्रणाली हो।'
    },
    detailedExplanation: {
      en: 'Established under the Contribution-Based Social Security Act 2074, the Social Security Fund (SSF) guarantees lifelong social welfare for private sector employees. Every registered enterprise deposits a combined 31% of the employee’s basic monthly salary into the fund: 20% contributed by the employer and 11% deducted from the employee. This 31% pool is apportioned across four statutory protection schemes: 1) Medical Treatment, Health & Maternity Protection (1.0%); 2) Accident & Disability Protection (1.4%); 3) Dependent Family Protection / Life Cover (0.27%); and 4) Old Age Protection / Pension & Gratuity (28.33%). Upon reaching age 60 with a minimum of 180 months (15 years) of contributions, workers receive a lifelong monthly pension.',
      np: 'योगदानमा आधारित सामाजिक सुरक्षा ऐन २०७४ अनुसार स्थापना भएको सामाजिक सुरक्षा कोष (SSF) ले निजी क्षेत्रका श्रमिकहरूलाई आजीवन सामाजिक सुरक्षाको प्रत्याभूति दिन्छ। यस प्रणालीमा रोजगारदाताले २०% थपिदिने र श्रमिकको आधारभूत तलबबाट ११% कट्टा गरी कुल ३१% रकम हरेक महिना कोषमा जम्मा गरिन्छ। यो ३१% रकमलाई चारवटा मुख्य सुरक्षा योजनामा बाँडिन्छ: १) औषधि उपचार, स्वास्थ्य तथा मातृत्व सुरक्षा (१.०%); २) दुर्घटना तथा अशक्तता सुरक्षा (१.४%); ३) आश्रित परिवार सुरक्षा (०.२७%); र ४) वृद्धावस्था सुरक्षा योजना / पेन्सन तथा उपदान (२८.३३%)। ६० वर्ष उमेर पुगेपछि र कम्तीमा १८० महिना (१५ वर्ष) योगदान गरेका श्रमिकले जीवनभर मासिक पेन्सन प्राप्त गर्दछन्।'
    },
    whyItMatters: {
      en: 'Historically, private sector workers in Nepal enjoyed zero safety net; getting sick, suffering an industrial injury, or retiring meant immediate financial ruin. SSF provides private sector employees with the same gold-standard retirement pension, hospital treatment reimbursements, and survivor benefits that government civil servants have historically enjoyed.',
      np: 'विगतमा नेपालमा निजी क्षेत्रका कर्मचारीहरूको कुनै सामाजिक सुरक्षा थिएन; बिरामी पर्दा वा बूढो भएर काम गर्न नसक्दा आर्थिक विचल्ली हुने अवस्था थियो। सामाजिक सुरक्षा कोषले निजी क्षेत्रका लाखौं श्रमिकहरूलाई पनि सरकारी कर्मचारी सरह अस्पतालको उपचार खर्च, दुर्घटना बीमा र अवकाशपछि जीवनभर नियमित मासिक पेन्सनको ग्यारेन्टी गरिदिएको छ।'
    },
    howItWorks: {
      summary: {
        en: 'The 31% contribution allocation and claims structure of SSF operates in 4 steps:',
        np: 'सामाजिक सुरक्षा कोषको ३१% योगदान बाँडफाँड र सुविधा प्राप्ति ४ चरणमा चल्दछ:'
      },
      steps: [
        {
          title: { en: '1. Monthly 31% Contribution', np: '१. मासिक ३१% रकम दाखिला' },
          desc: { en: 'Employer deposits 20% and employee contributes 11% of basic salary into SSF electronically before the 15th of each Nepali month.', np: 'रोजगारदाताले २०% थपेर र श्रमिकको तलबबाट ११% कटाएर महिनाको १५ गतेभित्र अनलाइन प्रणालीमार्फत कोषमा रकम जम्मा गरिन्छ।' }
        },
        {
          title: { en: '2. Four-Tier Scheme Allocation', np: '२. चारवटा योजनामा विभाजन' },
          desc: { en: 'The 31% contribution is apportioned: 1% for Medical/Maternity, 1.4% for Accidents, 0.27% for Family Life Cover, and 28.33% for Retirement Pension.', np: 'जम्मा भएको रकम औषधि उपचारमा १%, दुर्घटनामा १.४%, आश्रित परिवारमा ०.२७% र पेन्सन तथा उपदान कोषमा २८.३३% का दरले छुट्याइन्छ।' }
        },
        {
          title: { en: '3. Immediate Health & Injury Claims', np: '३. स्वास्थ्य तथा दुर्घटना दाबी' },
          desc: { en: 'After 3 months of contributions, workers claim up to NPR 100,000 annually for OPD/hospitalization and 100% coverage for workplace injuries.', np: '३ महिना योगदान गरेपछि वार्षिक रु. १ लाखसम्मको अस्पताल उपचार खर्च र कार्यस्थलमा हुने दुर्घटनाको शतप्रतिशत उपचार खर्च दाबी गर्न सकिन्छ।' }
        },
        {
          title: { en: '4. Lifelong Retirement Pension at 60', np: '४. ६० वर्षपछि आजीवन पेन्सन' },
          desc: { en: 'Upon reaching age 60 with at least 15 years of contributions, the accumulated retirement corpus converts into a lifelong monthly pension.', np: '६० वर्ष उमेर पुगेपछि र कम्तीमा १५ वर्ष योगदान गरेपछि जम्मा भएको पुँजीबाट जीवनभरका लागि मासिक पेन्सन भुक्तानी सुरु हुन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Mandatory payroll deductions across registered private companies in Nepal',
        'Reimbursing hospital admissions and OPD medical bills for contributors',
        'Foreign employment migrant worker social protection enrollment',
        'Retirement pension and gratuity disbursements'
      ],
      np: [
        'नेपालका दर्ता भएका सबै निजी कम्पनीहरूको मासिक तलब भुक्तानीमा',
        'योगदानकर्ताको अस्पताल भर्ना र ओपिडी उपचार खर्च शोधभर्ना गर्दा',
        'वैदेशिक रोजगारीमा जाने श्रमिकहरूको अनिवार्य सामाजिक सुरक्षा आबद्धतामा',
        'अवकाशपछि मासिक पेन्सन र उपदान रकम भुक्तानी गर्दा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The 31% Split, Foreign Employment Extension, and Tax Exemptions in Nepal',
        np: 'नेपालमा ३१% योगदानको बाँडफाँड, वैदेशिक रोजगार विस्तार र कर छुट'
      },
      body: {
        en: 'The rollout of SSF represents one of the most ambitious social reforms in modern Nepal. To shield migrant workers, the government made SSF mandatory for Nepalis traveling abroad on foreign labor permits, allowing remitters to contribute NPR 2,000 to NPR 28,000 monthly to build retirement pensions back home. To incentivize domestic participation, the government provides massive tax perks: contributions to SSF are 100% tax-deductible up to NPR 500,000 or one-third of taxable income annually under Section 63 of the Income Tax Act. Furthermore, SSF contributors enjoy an extra NPR 50,000 expansion in their baseline tax-exempt threshold.',
        np: 'सामाजिक सुरक्षा कोषको सुरुवात आधुनिक नेपालको सबैभन्दा ठूलो सामाजिक रूपान्तरण हो। श्रम स्वीकृति लिएर विदेश जाने लाखौं श्रमिकहरूलाई पनि यसमा समेटिएको छ, जहाँ उनीहरूले मासिक रु. २,००० देखि २८,००० सम्म जम्मा गरेर स्वदेशमै पेन्सन सुनिश्चित गर्न सक्छन्। आन्तरिक रोजगारीलाई आकर्षित गर्न सरकारले ठूलो कर छुट दिएको छ: आयकर ऐनको दफा ६३ अनुसार एसएसएफमा जम्मा भएको वार्षिक रु. ५ लाख वा कुल आम्दानीको एक-तिहाइ रकममा एक रुपैयाँ पनि आयकर लाग्दैन। साथै योगदानकर्ताले व्यक्तिगत आयकर स्ल्याबमा थप रु. ५०,००० को अतिरिक्त कर छुट सीमा पाउँछन्।'
      },
      keyPoints: {
        en: [
          'Total 31% monthly contribution: 20% paid by employer + 11% deducted from employee.',
          'Tax deduction up to NPR 500,000 or 1/3 of taxable income under Section 63.',
          'Covers OPD/hospitalization up to NPR 100,000 annually after 3 months.',
          'Lifelong pension kicks in at age 60 after a minimum 180 monthly contributions.'
        ],
        np: [
          'कुल ३१% मासिक योगदान: २०% रोजगारदाताले थपिदिने + ११% कर्मचारीको तलबबाट काटिने।',
          'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ५ लाख वा आम्दानीको १/३ सम्म पूर्ण कर छुट।',
          '३ महिना योगदान गरेपछि वार्षिक रु. १ लाखसम्मको औषधि उपचार खर्च दाबी गर्न सकिने।',
          'कम्तीमा १८० महिना (१५ वर्ष) योगदान पुगेपछि ६० वर्ष उमेर पुगेपछि आजीवन पेन्सन सुरु हुने।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Suresh earns an NPR 40,000 basic salary at an advertising agency in Kathmandu. Each month, his company contributes 20% (NPR 8,000) and deducts 11% from Suresh (NPR 4,400), depositing a combined NPR 12,400 monthly into his SSF account. When Suresh contracts dengue fever and is hospitalized for 4 days costing NPR 65,000, SSF reimburses 80% of his hospital bills directly, saving him from draining his savings. Meanwhile, 28.33% of his contributions (NPR 11,332 monthly) compounds securely in his retirement pot, building a lifelong pension for when he turns 60.',
        np: 'काठमाडौंको एउटा विज्ञापन एजेन्सीमा काम गर्ने सुरेशको आधारभूत तलब रु. ४०,००० छ। हरेक महिना अफिसले २०% (रु. ८,०००) थपिदिन्छ र सुरेशको तलबबाट ११% (रु. ४,४००) कटाएर कुल रु. १२,४०० सामाजिक सुरक्षा कोषमा जम्मा गरिदिन्छ। जब सुरेशलाई डेंगु भएर ४ दिन अस्पताल भर्ना हुनुपर्दा रु. ६५,००० खर्च हुन्छ, एसएसएफले उनको ८०% बिल सिधै शोधभर्ना गरिदिन्छ। अर्कोतर्फ उनको मासिक रु. ११,३३२ रकम पेन्सन कोषमा सुरक्षित जम्मा भइरहन्छ, जसले उनलाई ६० वर्ष पुगेपछि जीवनभर मासिक पेन्सन दिनेछ।'
      },
      takeaway: {
        en: 'SSF transforms your employment into a comprehensive safety shield, protecting your health today while guaranteeing guaranteed monthly income in retirement.',
        np: 'एसएसएफले जागिरलाई पूर्ण सुरक्षा कवचमा ढाल्छ; यसले आज स्वास्थ्य उपचार खर्च बेहोर्छ र भोलि ६० वर्ष कटेपछि जीवनभर सम्मानजनक पेन्सनको ग्यारेन्टी गर्दछ।'
      }
    },
    formula: {
      equation: 'Total SSF Deposit = Basic Salary * 31% (Employer 20% + Employee 11%)',
      explanation: {
        en: 'Multiply the employee\'s basic monthly salary by 31%. The employer provides 20% as a company benefit, and 11% is deducted from the employee\'s gross salary.',
        np: 'कर्मचारीको आधारभूत मासिक तलबलाई ३१% ले गुणन गर्ने। जसमा २०% रोजगारदाताले थपिदिन्छ र ११% कर्मचारीको तलबबाट कट्टा गरिन्छ।'
      },
      variables: [
        { symbol: 'Basic Salary', label: { en: 'Basic salary component before allowances and overtime', np: 'भत्ता र ओभरटाइम बाहेकको आधारभूत तलब' } },
        { symbol: 'Employer 20%', label: { en: 'Statutory contribution paid directly by employer', np: 'रोजगारदाता कम्पनीले थपिदिने २०% रकम' } },
        { symbol: 'Employee 11%', label: { en: 'Contribution deducted from employee paycheck', np: 'कर्मचारीको तलबबाट काटिने ११% रकम' } }
      ],
      example: {
        scenario: {
          en: 'Employee with a basic salary of NPR 30,000 per month in Nepal.',
          np: 'मासिक रु. ३०,००० आधारभूत तलब भएको कर्मचारीको एसएसएफ गणना।'
        },
        calculation: {
          en: 'Employer (20%) = 30,000 * 0.20 = NPR 6,000. Employee (11%) = 30,000 * 0.11 = NPR 3,300. Total Deposit = NPR 9,300.',
          np: 'कम्पनीको २०% = ३०,००० * ०.२० = रु. ६,०००। कर्मचारीको ११% = ३०,००० * ०.११ = रु. ३,३००। कुल जम्मा = रु. ९,३००।'
        },
        result: {
          en: 'NPR 9,300 Deposited Monthly into SSF Profile',
          np: 'मासिक रु. ९,३०० सामाजिक सुरक्षा कोषमा दाखिला'
        }
      }
    },
    advantages: {
      en: [
        'Guaranteed lifelong monthly pension after age 60 (with at least 15 years contribution)',
        'Comprehensive health insurance: up to NPR 100,000 annual OPD and hospitalization coverage',
        '100% medical expense coverage for workplace occupational accidents and disability',
        'Massive tax shelter: contributions up to NPR 500,000 annually are 100% tax-free'
      ],
      np: [
        '६० वर्ष उमेर पुगेपछि र १५ वर्ष योगदान गरेपछि जीवनभर मासिक पेन्सनको पूर्ण ग्यारेन्टी',
        'वार्षिक रु. १ लाखसम्मको ओपिडी तथा अस्पताल भर्ना उपचार खर्चको स्वास्थ्य सुरक्षा',
        'कार्यस्थलमा हुने दुर्घटना र अशक्ततामा शतप्रतिशत उपचार खर्च कोषले बेहोर्ने',
        'ठूलो कर छुट: वार्षिक रु. ५ लाखसम्मको योगदानमा आयकर पूरै छुट हुने'
      ]
    },
    limitations: {
      en: [
        'Locked until retirement: pension corpus cannot be cashed out in a lump sum before age 60',
        'Strict contribution timeline: requires 180 months (15 years) to qualify for monthly pension',
        'Contributions apply strictly to Basic Salary, excluding house rent and performance allowances',
        'Bureaucratic verification required when submitting hospital reimbursement invoices'
      ],
      np: [
        '६० वर्ष नपुगुन्जेल पेन्सनको रकम बीचमै एकमुष्ट नगद झिक्न नपाइने कानुनी बन्देज',
        'मासिक पेन्सन पाउनका लागि कम्तीमा १८० महिना (१५ वर्ष) योगदान पुग्नुपर्ने अनिवार्य सर्त',
        'योगदान आधारभूत तलबमा मात्र हिसाब हुने हुनाले अन्य भत्ताहरू समेटिँदैनन्',
        'अस्पतालको उपचार खर्च शोधभर्ना गर्दा धेरै कागजात रुजु गराउनुपर्ने झन्झट'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'If you switch private jobs in Nepal, you lose all your past SSF contributions.',
          np: 'जागिर फेर्दा वा अर्को कम्पनीमा जाँदा पुरानो एसएसएफमा जम्मा भएको सबै पैसा गुम्छ।'
        },
        reality: {
          en: 'Your SSF Social Security Number is permanent for your entire life. When switching jobs, simply provide your SSF number to your new employer, and contributions seamlessly continue compounding in the exact same account.',
          np: 'तपाईंको सामाजिक सुरक्षा नम्बर नागरिकता जस्तै जीवनभर एउटै रहन्छ। जागिर फेर्दा नयाँ कम्पनीमा आफ्नो पुरानो एसएसएफ नम्बर दिए पुग्छ; सबै पैसा सोही खातामा निरन्तर जोडिँदै जान्छ।'
        }
      },
      {
        myth: {
          en: 'If an employee passes away before age 60, all the money deposited in SSF is lost to the state.',
          np: 'यदि कर्मचारीको ६० वर्ष नपुग्दै मृत्यु भयो भने कोषमा जम्मा भएको सबै पैसा सरकारले खान्छ।'
        },
        reality: {
          en: 'Under the Dependent Family Protection Scheme, the deceased contributor’s spouse receives a lifelong 50% monthly pension, children receive educational stipends up to age 21, and funeral grant expenses are paid immediately.',
          np: 'आश्रित परिवार सुरक्षा योजना अनुसार मृतक श्रमिकको श्रीमान् वा श्रीमतीले जीवनभर ५०% पेन्सन पाउँछन्, छोराछोरीले २१ वर्षसम्म मासिक शैक्षिक वृत्ति पाउँछन् र काजकिरिया खर्च तुरुन्त दिइन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Social Security Fund (SSF) vs Employees Provident Fund (EPF / Sanchaya Kosh)', np: 'सामाजिक सुरक्षा कोष (SSF) र कर्मचारी सञ्चय कोष (EPF) बीचको तुलना' },
      subtitle: { en: 'Lifelong monthly pension safety net vs lump-sum retirement savings with personal loan facilities', np: 'आजीवन मासिक पेन्सन दिने प्रणाली र अवकाशमा एकमुष्ट रकम तथा घरकर्जा दिने कोषको फरक' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Social Security Fund (SSF)', np: 'सामाजिक सुरक्षा कोष (SSF)' },
      colB: { en: 'Employees Provident Fund (EPF)', np: 'कर्मचारी सञ्चय कोष (EPF)' },
      rows: [
        {
          feature: { en: 'Total Contribution', np: 'कुल मासिक योगदान' },
          valA: { en: '31% of Basic Salary (20% Employer + 11% Employee)', np: 'आधारभूत तलबको ३१% (२०% रोजगारदाता + ११% श्रमिक)' },
          valB: { en: '20% of Basic Salary (10% Employer + 10% Employee)', np: 'आधारभूत तलबको २०% (१०% रोजगारदाता + १०% श्रमिक)' }
        },
        {
          feature: { en: 'Retirement Benefit Style', np: 'अवकाशपछिको सुविधा' },
          valA: { en: 'Lifelong monthly pension annuity after age 60', np: '६० वर्षपछि जीवनभर नियमित मासिक पेन्सन' },
          valB: { en: '100% lump-sum cash payout plus accumulated interest', np: 'अवकाश हुँदा साँवा र ब्याज एकमुष्ट नगद भुक्तानी' }
        },
        {
          feature: { en: 'Health & Accident Cover', np: 'स्वास्थ्य तथा दुर्घटना सुविधा' },
          valA: { en: 'Active health coverage: OPD, hospitalization, maternity, disability', np: 'ओपिडी, अस्पताल भर्ना, मातृत्व र कार्यस्थल दुर्घटनाको पूर्ण कभर' },
          valB: { en: 'Limited medical reimbursement (typically up to NPR 1 Lakh)', np: 'सीमित अस्पताल भर्ना उपचार खर्च मात्र' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'cit', name: 'CIT', type: 'glossary' },
      { slug: 'epf', name: 'EPF', type: 'glossary' },
      { slug: 'pan', name: 'PAN', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Retirement Systems in Nepal: EPF, CIT & SSF', categorySlug: 'retirement', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Complete Guide to Personal Finance & Budgeting', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'SSF Pension & Retirement Calculator', slug: 'income-tax', desc: 'Calculate your monthly SSF contributions and future pension in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'Can I take a loan from my accumulated Social Security Fund (SSF) balance?', np: 'के सामाजिक सुरक्षा कोष (SSF) मा जम्मा भएको रकमबाट ऋण लिन मिल्छ?' },
        a: {
          en: 'Yes. SSF operates a Contributor Special Loan scheme allowing verified contributors with at least 36 months of deposits to borrow up to 80% of their accumulated retirement pool at concessional interest rates for housing, education, or personal emergencies.',
          np: 'मिल्छ। कम्तीमा ३६ महिना योगदान गरेका श्रमिकहरूले आफ्नो उपदान र अवकाश कोषमा जम्मा भएको रकमको ८०% सम्म विशेष सापटी (ऋण) सहुलियत ब्याजदरमा घर निर्माण, शिक्षा वा व्यक्तिगत प्रयोजनका लागि लिन सक्छन्।'
        }
      },
      {
        q: { en: 'What medical benefits does SSF provide for pregnancy and maternity in Nepal?', np: 'सुत्केरी र मातृत्वका लागि एसएसएफले के-के सुविधा दिन्छ?' },
        a: {
          en: 'SSF covers full pre-natal checkups, hospital delivery expenses up to prescribed limits, provides an infant care allowance equal to one month’s minimum wage, and pays 60% of basic salary for 60 days of maternity leave.',
          np: 'एसएसएफले गर्भावस्थाको परीक्षण, सुत्केरी हुँदा अस्पतालको खर्च, शिशु स्याहारका लागि एक महिनाको न्यूनतम तलब बराबरको एकमुष्ट रकम र ६० दिनको सुत्केरी बिदाको ६०% तलब भुक्तानी गर्दछ।'
        }
      },
      {
        q: { en: 'What happens to my SSF pension if I permanently move abroad?', np: 'यदि म स्थायी रूपमा विदेश बसाइँ सरेँ भने मेरो एसएसएफको पेन्सन के हुन्छ?' },
        a: {
          en: 'If a contributor permanently migrates abroad or surrenders Nepali citizenship, they can submit official immigration documentation to withdraw their accumulated retirement and gratuity balance in a single lump-sum payout.',
          np: 'यदि कुनै योगदानकर्ता स्थायी रूपमा विदेश बसाइँ सर्छ वा नेपाली नागरिकता त्याग गर्छ भने उसले कानुनी प्रमाण पेश गरी आफ्नो अवकाश कोषमा जम्मा भएको सम्पूर्ण रकम एकमुष्ट फिर्ता लिन पाउँछ।'
        }
      },
      {
        q: { en: 'Can self-employed or informal workers join the Social Security Fund in Nepal?', np: 'के स्वरोजगार वा अनौपचारिक क्षेत्रमा काम गर्ने व्यक्ति पनि एसएसएफमा जोडिन पाउँछन्?' },
        a: {
          en: 'Yes. The government introduced dedicated SSF operational guidelines for self-employed individuals and informal sector workers, allowing them to register independently and contribute monthly to secure health and pension benefits.',
          np: 'पाउँछन्। सरकारले स्वरोजगार (व्यापारी, फ्रीलान्सर) र अनौपचारिक क्षेत्रका श्रमिकहरूका लागि पनि छुट्टै कार्यविधि ल्याएको छ, जसअनुसार उनीहरू आफैंले मासिक तोकिएको रकम जम्मा गरेर पेन्सन र स्वास्थ्य सुविधा लिन सक्छन्।'
        }
      }
    ],
    summary: {
      en: [
        'SSF is a statutory social safety net funded by a combined 31% monthly contribution (20% Employer + 11% Employee).',
        'Provides health coverage, maternity benefits, 100% workplace accident coverage, and lifelong pension at 60.',
        'Contributions up to NPR 500,000 annually enjoy 100% tax exemption under Section 63 of the Income Tax Act.',
        'Migrant workers abroad can contribute independently to secure state-guaranteed pensions back home.'
      ],
      np: [
        'एसएसएफ ३१% मासिक योगदान (२०% रोजगारदाता + ११% श्रमिक) मा आधारित राज्यको सामाजिक सुरक्षा प्रणाली हो।',
        'यसले स्वास्थ्य उपचार, सुत्केरी खर्च, दुर्घटना बीमा र ६० वर्षपछि जीवनभर मासिक पेन्सनको ग्यारेन्टी गर्छ।',
        'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ५ लाखसम्मको योगदानमा पूर्ण कर छुट पाइन्छ।',
        'वैदेशिक रोजगारीमा रहेका नेपाली श्रमिकहरूले पनि यसमा जोडिएर स्वदेशमा पेन्सन सुनिश्चित गर्न सक्छन्।'
      ]
    },
    whereSeen: [
      { title: 'Retirement Systems in Nepal', type: 'Lesson', url: '/learn/retirement/what-is-investing' },
      { title: 'Income Tax Calculator', type: 'Calculator', url: '/calculators/income-tax' }
    ],
    meta: {
      title: 'What is SSF (Social Security Fund) in Nepal? 31% Split Guide | risePaisa',
      description: 'Master the Social Security Fund (SSF) in Nepal. Learn how the 31% contribution split works, health & accident benefits, lifelong pensions at 60, and tax exemptions.'
    }
  },

  // 5. CIT
  {
    slug: 'cit',
    term: 'CIT (Citizen Investment Trust)',
    termNp: 'नागरिक लगानी कोष (CIT / NLK)',
    categorySlug: 'retirement',
    categoryName: { en: 'Retirement & Pension', np: 'अवकाश र पेन्सन' },
    letter: 'C',
    abbreviation: 'CIT',
    synonyms: ['Citizen Investment Trust', 'Nagarik Lagani Kosh', 'NLK', 'नागरिक लगानी कोष'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Citizen Investment Trust (CIT / Nagarik Lagani Kosh) is a government-backed statutory investment and retirement institution in Nepal that manages voluntary retirement funds, insurance schemes, and tax-exempt savings.',
      np: 'नागरिक लगानी कोष (CIT / NLK) भनेको नेपाल सरकारको स्वामित्वमा सञ्चालित एक वैधानिक वित्तीय संस्था हो, जसले सर्वसाधारण तथा कर्मचारीहरूको स्वैच्छिक अवकाश कोष, कर्मचारी बचत वृद्धि योजना, बीमा कोष र कर छुट बचतको व्यवस्थापन गर्दछ।'
    },
    detailedExplanation: {
      en: 'Established under the Citizen Investment Trust Act 2047, CIT operates as a premier capital accumulation vehicle in Nepal. Both public and private sector employees utilize CIT to build retirement wealth while slashing annual income tax. Under Section 63 of the Nepal Income Tax Act, deposits into CIT are 100% tax-deductible up to NPR 300,000 or one-third of your taxable income (whichever is lower). CIT pools these deposits into a multi-billion rupee investment portfolio spanning government treasury bonds, bank fixed deposits, infrastructure project financing (such as hydropower dams and aircraft financing), and listed NEPSE equities. Savers earn competitive annual interest (typically 6.5% to 8.5%) plus profit bonuses, and can borrow up to 80% against their account balance at low rates.',
      np: 'नागरिक लगानी कोष ऐन २०४७ अनुसार स्थापित यस संस्थाले नेपालमा पुँजी निर्माण र अवकाश बचतको मुख्य आधारको रूपमा काम गर्छ। सरकारी तथा निजी क्षेत्रका कर्मचारीहरूले आफ्नो अवकाशको पुँजी जोड्न र व्यक्तिगत आयकर घटाउन यसको व्यापक प्रयोग गर्छन्। नेपालको आयकर ऐनको दफा ६३ अनुसार नागरिक लगानी कोषमा जम्मा गरेको वार्षिक रु. ३ लाख वा कुल आम्दानीको एक-तिहाइ (जुन कम हुन्छ) रकममा एक रुपैयाँ पनि आयकर तिर्नु पर्दैन। कोषले संकलित रकमलाई सरकारी ऋणपत्र, बैंक मुद्दती, ठूला जलविद्युत आयोजना र सेयर बजारमा लगानी गर्दछ। बचतकर्ताले वार्षिक ६.५% देखि ८.५% सम्म आकर्षक ब्याज र मुनाफा बोनस पाउँछन् र आवश्यकता पर्दा आफ्नो जम्मा रकमको ८०% सम्म सस्तो ब्याजमा ऋण लिन सक्छन्।'
    },
    whyItMatters: {
      en: 'CIT is the most effective legal tax shelter available to salaried professionals in Nepal. By depositing NPR 25,000 monthly (NPR 300,000 annually) into CIT, an individual in the 36% tax bracket instantly saves NPR 108,000 in cash taxes every year while compounding wealth in a sovereign-backed fund.',
      np: 'नेपालमा जागिरे र पेशाकर्मीहरूका लागि कानुनी रूपमा आयकर बचत गर्ने सबैभन्दा शक्तिशाली साधन नै नागरिक लगानी कोष हो। महिनाको रु. २५,००० (वर्षको रु. ३ लाख) कोषमा जम्मा गर्दा ३६% करको स्ल्याबमा रहेका व्यक्तिले वर्षकै रु. १ लाख ८ हजार नगद कर बचत गर्छन् र सोही रकम सरकारी सुरक्षणमा उच्च ब्याजसहित चक्रवर्ती रूपमा बढ्दै जान्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The voluntary contribution and growth mechanism of CIT operates across 4 core phases:',
        np: 'नागरिक लगानी कोषमा रकम जम्मा हुने र प्रतिफल पाउने प्रक्रिया ४ चरणमा चल्दछ:'
      },
      steps: [
        {
          title: { en: '1. Scheme Enrollment', np: '१. योजना छनोट र खाता दर्ता' },
          desc: { en: 'Enroll in CIT schemes like the Employee Savings Growth Scheme (कर्मचारी बचत वृद्धि योजना) or Gratuity Fund through your employer or individually.', np: 'रोजगारदातामार्फत वा व्यक्तिगत रूपमा "कर्मचारी बचत वृद्धि योजना" वा उपदान कोषमा दर्ता भई परिचय नम्बर लिइन्छ।' }
        },
        {
          title: { en: '2. Monthly Payroll Deduction', np: '२. मासिक तलबबाट कट्टी' },
          desc: { en: 'A predetermined sum (e.g. NPR 5,000 to NPR 25,000) is deducted from your pre-tax salary and remitted directly to CIT via ConnectIPS.', np: 'तपाईंको मासिक तलबबाट तोकिएको रकम कट्टी गरी कर लाग्नुअगावै सिधै कनेक्टआईपीएसमार्फत कोषको खातामा दाखिला गरिन्छ।' }
        },
        {
          title: { en: '3. Guaranteed Interest & Dividend Bonus', np: '३. ब्याज र मुनाफा बोनस प्राप्ति' },
          desc: { en: 'CIT credits compounded annual interest plus operational bonus distributions to your account at fiscal year-end.', np: 'आर्थिक वर्षको अन्त्यमा कोषले वार्षिक चक्रवर्ती ब्याज र आफ्नो लगानी नाफाबाट अतिरिक्त बोनस रकम खातामा थपिदिन्छ।' }
        },
        {
          title: { en: '4. Maturity Withdrawal or 80% Loan', np: '४. अवकाशमा फिर्ता वा ८०% ऋण' },
          desc: { en: 'Upon job retirement, withdraw 100% of principal and gains as a lump sum. While active, borrow up to 80% via digital portal.', np: 'जागिर छोड्दा साँवा र ब्याज एकमुष्ट कर छुटसहित फिर्ता लिन सकिन्छ। जागिरमै छँदा आवश्यक परे ८०% सम्म सरल ऋण तुरुन्त पाइन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Voluntary retirement savings for private and public sector employees',
        'Tax deduction under Section 63 of the Nepal Income Tax Act (up to NPR 3 Lakhs)',
        'Low-interest contributor loans (housing loans, education loans, 80% special loans)',
        'Managing institutional gratuity and pension funds for Nepali corporations'
      ],
      np: [
        'निजी तथा सरकारी क्षेत्रका कर्मचारीहरूको स्वैच्छिक अवकाश बचत योजनामा',
        'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ३ लाखसम्मको कर छुट लिन',
        'योगदानकर्ताहरूलाई ८०% विशेष सापटी, घरकर्जा र शैक्षिक कर्जा प्रवाह गर्न',
        'नेपालका विभिन्न संगठित संस्थाहरूको उपदान र पेन्सन कोष व्यवस्थापनमा'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The NPR 300,000 Section 63 Tax Shield and Institutional Infrastructure Lending in Nepal',
        np: 'दफा ६३ को ३ लाख कर छुट र नेपालको पूर्वाधार विकासमा नागरिक लगानी कोष'
      },
      body: {
        en: 'Citizen Investment Trust is unique because it blends personal micro-savings with mega-scale nation-building. Under Section 63 of Nepal\'s Income Tax Act, contributions to CIT (combined with EPF) qualify for a straight deduction of up to NPR 300,000 or 1/3 of taxable income. CIT deploys these billions into foundational national projects: it provided billions in debt financing to construct the Upper Tamakoshi Hydropower Project, financed the procurement of wide-body aircraft for Nepal Airlines, and serves as a primary institutional underwriter for capital markets through its subsidiary Citizen Stock Dealer.',
        np: 'नागरिक लगानी कोषले नागरिकको सानो बचतलाई राष्ट्र निर्माणका ठूला आयोजनासँग जोड्दछ। नेपालको आयकर ऐनको दफा ६३ अनुसार कोषमा जम्मा गरेको वार्षिक रु. ३ लाखसम्मको रकम करयोग्य आम्दानीबाट सिधै घटाउन पाइन्छ। कोषले यसरी संकलन भएको खर्बौं रुपैयाँ राष्ट्रिय गौरवका आयोजनाहरूमा परिचालन गर्छ: माथिल्लो तामाकोशी जलविद्युत आयोजना निर्माणमा ठूलो ऋण लगानी, नेपाल वायुसेवा निगमको वाइडबडी जहाज खरिदमा वित्तीय लगानी र आफ्नै सहायक कम्पनी "नागरिक स्टक डिलर" मार्फत सेयर बजारमा संस्थागत लगानीकर्ताको भूमिका कोषले निर्वाह गरिरहेको छ।'
      },
      keyPoints: {
        en: [
          'Tax deduction up to NPR 300,000 or 1/3 of taxable income annually under Section 63.',
          'Earns guaranteed annual compound interest plus operational bonus distributions.',
          'Borrow up to 80% of your accumulated balance easily through the online contributor portal.',
          '100% of accumulated balance can be withdrawn as a lump sum upon job resignation/retirement.'
        ],
        np: [
          'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ३ लाख वा आम्दानीको १/३ सम्म पूर्ण कर छुट।',
          'वार्षिक चक्रवर्ती ब्याजका साथै कोषको नाफाबाट अतिरिक्त बोनस रकम प्राप्त हुने।',
          'अनलाइन पोर्टलबाटै जम्मा भएको रकमको ८०% सम्म सस्तो ब्याजमा सरल सापटी लिन सकिने।',
          'जागिर छोड्दा वा अवकाश लिँदा साँवा र ब्याज शतप्रतिशत एकमुष्ट नगद फिर्ता पाइने।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Pooja earns an annual taxable salary of NPR 1,200,000 in Kathmandu, placing her in the 20% and 30% upper tax brackets. Without tax planning, her annual tax bill is high. Pooja instructs her HR payroll department to deduct NPR 25,000 monthly and remit it to her CIT account (Total NPR 300,000 annually). Because NPR 300,000 is within the statutory 1/3 income limit, her taxable salary drops from NPR 1,200,000 down to NPR 900,000. Pooja saves over NPR 65,000 in cold-hard cash taxes in Year 1 alone! Over 10 years, her NPR 3,000,000 principal in CIT compounds with 7.5% annual interest into over NPR 4,400,000.',
        np: 'काठमाडौंमा कार्यरत पूजाको वार्षिक करयोग्य तलब रु. १२,००,००० छ, जसले गर्दा उनी २०% र ३०% को उच्च कर स्ल्याबमा पर्छिन्। कुनै योजना नबनाउँदा उनले ठूलो कर तिर्नुपर्छ। पूजाले आफ्नो अफिसलाई मासिक रु. २५,००० तलबबाट काटेर नागरिक लगानी कोष (CIT) मा जम्मा गर्न भन्छिन् (वर्षको रु. ३ लाख)। यो रकम कुल आम्दानीको १/३ को सीमाभित्र पर्ने भएकाले उनको कर लाग्ने आम्दानी १२ लाखबाट घटेर सिधै रु. ९,००,००० मा झर्छ। पूजाले पहिलो वर्षमै झण्डै रु. ६५,००० नगद कर बचत गर्छिन्! १० वर्षमा उनले जम्मा गरेको ३० लाख रुपैयाँ ७.५% चक्रवर्ती ब्याजले बढेर रु. ४४ लाख भन्दा बढी पुग्छ।'
      },
      takeaway: {
        en: 'Contributing to CIT is a guaranteed double-win: you instantly save up to 36% in legal income taxes while compounding risk-free sovereign retirement wealth.',
        np: 'नागरिक लगानी कोषमा बचत गर्नु दोहोरो फाइदा हो: यसले एकातिर ३६% सम्मको महँगो आयकर तुरुन्तै बचाउँछ भने अर्कोतिर सरकारी सुरक्षणमा ढुक्कसँग अवकाशको पुँजी बढाउँछ।'
      }
    },
    formula: {
      equation: 'Tax Deductible CIT = Minimum of [NPR 300,000, (Gross Taxable Income / 3), Actual CIT Deposit]',
      explanation: {
        en: 'Under Section 63 of the Nepal Income Tax Act, the maximum allowable tax deduction is the lowest of: NPR 300,000, one-third of total assessable income, or the actual annual deposit made into CIT/EPF.',
        np: 'नेपालको आयकर ऐनको दफा ६३ अनुसार कर छुट पाउने अधिकतम रकम: रु. ३,००,०००, कुल करयोग्य आम्दानीको एक-तिहाइ (१/३), वा कोषमा जम्मा गरिएको वास्तविक रकममध्ये जुन सबैभन्दा कम हुन्छ सोही बराबर हुन्छ।'
      },
      variables: [
        { symbol: '300,000', label: { en: 'Statutory ceiling in Nepalese Rupees per fiscal year', np: 'प्रति आर्थिक वर्ष कानुनी अधिकतम सीमा (रु. ३ लाख)' } },
        { symbol: 'Income / 3', label: { en: 'One-third of total gross assessable income', np: 'कुल करयोग्य आम्दानीको एक-तिहाइ हिस्सा' } }
      ],
      example: {
        scenario: {
          en: 'An individual earning NPR 1,500,000 annually deposits NPR 300,000 into CIT.',
          np: 'वार्षिक रु. १५ लाख कमाउने व्यक्तिले नागरिक लगानी कोषमा रु. ३ लाख जम्मा गर्दा।'
        },
        calculation: {
          en: 'Limit 1 = 300,000; Limit 2 = 1,500,000 / 3 = 500,000; Actual = 300,000. Deductible = NPR 300,000. Tax Saved at 30% bracket = 300,000 * 30% = NPR 90,000.',
          np: 'सीमा १ = ३ लाख; सीमा २ = १५ लाख / ३ = ५ लाख; वास्तविक = ३ लाख। कर छुट पाउने रकम = रु. ३ लाख। ३०% स्ल्याबमा बचत = ३ लाख * ३०% = रु. ९०,०००।'
        },
        result: {
          en: 'NPR 300,000 Full Tax Deduction (NPR 90,000 Direct Tax Saved)',
          np: 'रु. ३,००,००० पूर्ण कर छुट (रु. ९०,००० सिधै नगद कर बचत)'
        }
      }
    },
    advantages: {
      en: [
        'Instant tax rebate under Section 63 (up to NPR 300,000 tax-deductible annually)',
        'Sovereign government-backed safety; principal is 100% secure from private bankruptcy',
        'Quick access to 80% special loans against accumulated balance at concessional interest',
        'Entire balance can be cashed out in a 100% lump sum upon job resignation or retirement'
      ],
      np: [
        'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ३ लाखसम्मको तत्काल आयकर छुट सुविधा',
        'नेपाल सरकारको स्वामित्वमा रहेकाले साँवा रकम डुब्ने कुनै पनि जोखिम नहुने',
        'आपत पर्दा जम्मा भएको रकमको ८०% सम्म सस्तो ब्याजमा सजिलै ऋण लिन सकिने',
        'जागिर छोड्दा वा अवकाश हुँदा सम्पूर्ण रकम एकमुष्ट नगद फिर्ता लिन सकिने'
      ]
    },
    limitations: {
      en: [
        'Combined NPR 300,000 tax deduction cap is shared jointly between CIT and EPF',
        'Fixed interest returns (6.5%-8.5%) will not beat multi-bagger equity market bull runs',
        'Borrowing against your CIT balance reduces the net interest compounding on the borrowed sum',
        'Online portal balance updates can occasionally lag behind employer payroll remittance dates'
      ],
      np: [
        'वार्षिक रु. ३ लाखको कर छुट सीमा नागरिक लगानी कोष र सञ्चय कोष दुवैको जोडेर साझा हुन्छ',
        'निश्चित ब्याज (६.५%-८.५%) मात्र पाइने हुनाले सेयर बजारको जस्तो असाधारण नाफा नहुने',
        'आफ्नै खाताबाट ८०% ऋण लिँदा ऋण लिएको रकममा ब्याज आम्दानी रोकिने',
        'अफिसले बैंकमा पैसा बुझाएपछि अनलाइन पोर्टलमा खातामा देखिन कहिलेकाहीँ केही दिन ढिला हुने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'You can claim a separate NPR 300,000 tax deduction in CIT and another NPR 300,000 in EPF.',
          np: 'नागरिक लगानी कोषमा रु. ३ लाख र कर्मचारी सञ्चय कोषमा थप रु. ३ लाख गरी कुल ६ लाख कर छुट पाइन्छ।'
        },
        reality: {
          en: 'Under Section 63 of the Nepal Income Tax Act, the NPR 300,000 ceiling is an aggregate combined limit across CIT and EPF combined. You cannot claim more than NPR 300,000 in total across both.',
          np: 'आयकर ऐनको दफा ६३ अनुसार रु. ३ लाखको सीमा सञ्चय कोष (EPF) र नागरिक लगानी कोष (CIT) दुवैको जोडेर कुल अधिकतम सीमा हो। दुवै कोष मिलाएर वर्षमा बढीमा रु. ३ लाखभन्दा बढी कर छुट दाबी गर्न मिल्दैन।'
        }
      },
      {
        myth: {
          en: 'Only permanent civil servants and government workers can open a CIT account.',
          np: 'नागरिक लगानी कोषमा सरकारी कर्मचारीले मात्र खाता खोल्न पाउँछन्।'
        },
        reality: {
          en: 'Any private sector company employee, public corporation worker, teacher, or self-employed citizen can register and open a CIT retirement account in Nepal.',
          np: 'निजी कम्पनीका कर्मचारी, शिक्षक, बैंकका कर्मचारी वा स्वरोजगार नागरिक जोसुकैले पनि नागरिक लगानी कोषमा खाता खोलेर नियमित बचत गर्न पाउँछन्।'
        }
      }
    ],
    comparison: {
      title: { en: 'Citizen Investment Trust (CIT) vs Social Security Fund (SSF)', np: 'नागरिक लगानी कोष (CIT) र सामाजिक सुरक्षा कोष (SSF) बीचको तुलना' },
      subtitle: { en: 'Voluntary lump-sum retirement fund with loans vs mandatory lifelong pension safety net', np: 'स्वैच्छिक एकमुष्ट नगद फिर्ता हुने कोष र अनिवार्य आजीवन पेन्सन दिने प्रणालीको फरक' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Citizen Investment Trust (CIT)', np: 'नागरिक लगानी कोष (CIT)' },
      colB: { en: 'Social Security Fund (SSF)', np: 'सामाजिक सुरक्षा कोष (SSF)' },
      rows: [
        {
          feature: { en: 'Mandatory Status', np: 'अनिवार्यता' },
          valA: { en: '100% voluntary; choose any amount up to tax caps', np: 'पूर्ण स्वैच्छिक; आफ्नो इच्छा अनुसार जति पनि बचत गर्न सकिने' },
          valB: { en: 'Legally mandatory 31% contribution for formal sector', np: 'औपचारिक क्षेत्रका लागि कानुनद्वारा अनिवार्य गरिएको ३१% योगदान' },
        },
        {
          feature: { en: 'Tax Deduction Ceiling', np: 'कर छुटको अधिकतम सीमा' },
          valA: { en: 'Up to NPR 300,000 or 1/3 of taxable income (Section 63)', np: 'वार्षिक बढीमा रु. ३,००,००० वा आम्दानीको १/३ सम्म' },
          valB: { en: 'Up to NPR 500,000 or 1/3 of taxable income (Section 63)', np: 'वार्षिक बढीमा रु. ५,००,००० वा आम्दानीको १/३ सम्म' }
        },
        {
          feature: { en: 'Withdrawal at Exit', np: 'जागिर छोड्दा भुक्तानी' },
          valA: { en: '100% lump-sum cash withdrawal allowed anytime upon exit', np: 'जागिर छोड्नासाथ साँवा र ब्याज पूरै एकमुष्ट नगद झिक्न पाइने' },
          valB: { en: 'Locked until age 60; paid out as a lifelong monthly pension', np: '६० वर्ष नपुगुन्जेल रोक्का; पछि आजीवन मासिक पेन्सनको रूपमा पाइने' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'ssf', name: 'SSF', type: 'glossary' },
      { slug: 'epf', name: 'EPF', type: 'glossary' },
      { slug: 'pan', name: 'PAN', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Retirement Systems in Nepal: EPF, CIT & SSF', categorySlug: 'retirement', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Complete Guide to Personal Finance & Budgeting', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Income Tax Calculator Nepal', slug: 'income-tax', desc: 'Calculate your exact tax savings by contributing up to NPR 300,000 in CIT.' }
    ],
    faqs: [
      {
        q: { en: 'How do I check my CIT account balance online in Nepal?', np: 'नागरिक लगानी कोषमा जम्मा भएको रकम अनलाइन कसरी हेर्ने?' },
        a: {
          en: 'You can check your balance by logging into the official CIT Contributor Portal (nlk.org.np) using your CIT ID number and mobile number, or directly through the "Nagarik App" under the Citizen Investment Trust service section.',
          np: 'नागरिक लगानी कोषको आधिकारिक वेबसाइट (nlk.org.np) मा लगइन गरेर वा आफ्नो मोबाइलमा रहेको "नागरिक एप" भित्र नागरिक लगानी कोष सेवामा गएर आफ्नो कुल जम्मा रकम तुरुन्तै हेर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'How do I take an 80% special loan from my CIT account?', np: 'नागरिक लगानी कोषबाट ८०% सापटी (ऋण) कसरी लिने?' },
        a: {
          en: 'You can apply online through the CIT e-Services portal or visit the CIT central/branch office. CIT grants up to 80% of your accumulated savings within 2 to 3 working days directly into your bank account at competitive interest rates.',
          np: 'कोषको वेबसाइटको e-Services बाट अनलाइन आवेदन दिएर वा शाखा कार्यालयमा गएर फारम भर्न सकिन्छ। कोषले २-३ दिनभित्रै तपाईंको जम्मा रकमको ८०% सम्म सस्तो ब्याजदरमा बैंक खातामै कर्जा पठाइदिन्छ।'
        }
      },
      {
        q: { en: 'Is the interest earned on CIT deposits taxable in Nepal?', np: 'के नागरिक लगानी कोषमा आउने ब्याजमा कर लाग्छ?' },
        a: {
          en: 'Under Section 88 of the Nepal Income Tax Act, retirement fund interest payments are subject to a concessional flat 5% final withholding tax (TDS) upon withdrawal. It is not added to higher progressive income tax slabs.',
          np: 'आयकर ऐनको दफा ८८ अनुसार अवकाश कोषबाट रकम झिक्दा आर्जित ब्याजमा ५% अन्तिम कर (TDS) मात्र कट्टी हुन्छ। यसमा थप व्यक्तिगत आयकर तिर्नु पर्दैन।'
        }
      },
      {
        q: { en: 'Can an individual citizen open a private CIT account without an employer?', np: 'के जागिर नभएका व्यक्तिले पनि आफ्नै व्यक्तिगत नाममा सीआईटी खाता खोल्न सक्छन्?' },
        a: {
          en: 'Yes. CIT operates individual open schemes like the "Citizen Unit Scheme" (नागरिक एकाइ योजना) and pension schemes open to all Nepali citizens for direct individual investment without needing an employer intermediary.',
          np: 'सक्छन्। नागरिक लगानी कोषले आम नागरिकका लागि "नागरिक एकाइ योजना" र व्यक्तिगत पेन्सन योजना सञ्चालन गरेको छ, जसमा कुनै अफिसको सिफारिस बिना जोसुकैले सिधै व्यक्तिगत खाता खोलेर बचत गर्न पाउँछन्।'
        }
      }
    ],
    summary: {
      en: [
        'CIT is a government-owned statutory retirement and capital accumulation institution in Nepal.',
        'Provides a 100% tax deduction on contributions up to NPR 300,000 or 1/3 of income under Section 63.',
        'Earns competitive compound interest plus profit bonuses, with 80% loan borrowing facilities.',
        'Entire accumulated principal and interest can be withdrawn as a 100% lump sum upon exit.'
      ],
      np: [
        'नागरिक लगानी कोष नेपाल सरकारको स्वामित्वमा रहेको वैधानिक अवकाश तथा पुँजी निर्माण संस्था हो।',
        'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ३ लाख वा आम्दानीको १/३ सम्म पूर्ण कर छुट दिन्छ।',
        'आकर्षक चक्रवर्ती ब्याज र बोनस दिन्छ, साथै आवश्यक पर्दा ८०% सम्म सस्तो कर्जा सुविधा उपलब्ध छ।',
        'जागिर छोड्दा वा अवकाश हुँदा सम्पूर्ण साँवा र ब्याज एकमुष्ट नगद फिर्ता लिन पाइन्छ।'
      ]
    },
    whereSeen: [
      { title: 'Retirement Systems in Nepal', type: 'Lesson', url: '/learn/retirement/what-is-investing' },
      { title: 'Income Tax Calculator', type: 'Calculator', url: '/calculators/income-tax' }
    ],
    meta: {
      title: 'What is CIT (Citizen Investment Trust) in Nepal? Section 63 Guide | risePaisa',
      description: 'Complete guide to Citizen Investment Trust (CIT / NLK) in Nepal. Learn how to save up to NPR 300,000 in income tax, 80% loan rules, and retirement growth.'
    }
  },

  // 6. EPF
  {
    slug: 'epf',
    term: 'EPF (Employees Provident Fund)',
    termNp: 'कर्मचारी सञ्चय कोष (EPF / KSK)',
    categorySlug: 'retirement',
    categoryName: { en: 'Retirement & Pension', np: 'अवकाश र पेन्सन' },
    letter: 'E',
    abbreviation: 'EPF',
    synonyms: ['Employees Provident Fund', 'Karmachari Sanchaya Kosh', 'KSK', 'सञ्चय कोष'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Employees Provident Fund (EPF / Karmachari Sanchaya Kosh) is Nepal\'s oldest statutory retirement institution, managing mandatory 20% payroll contributions (10% employee + 10% employer) alongside welfare benefits.',
      np: 'कर्मचारी सञ्चय कोष (EPF / KSK) भनेको नेपालको सबैभन्दा पुरानो वैधानिक अवकाश संस्था हो, जसले सरकारी तथा संगठित क्षेत्रका कर्मचारीहरूको मासिक २०% तलब योगदान (१०% कर्मचारी + १०% रोजगारदाता) र सामाजिक कल्याणकारी सुविधाहरूको व्यवस्थापन गर्दछ।'
    },
    detailedExplanation: {
      en: 'Established under the Karmachari Sanchaya Kosh Act 2019, EPF is the historical cornerstone of formal sector retirement security in Nepal. By statutory mandate, every government employee, civil servant, public corporation worker, teacher, and participating private sector enterprise deducts 10% of the employee\'s basic monthly salary, matched with a mandatory 10% employer contribution (total 20% monthly deposit). EPF invests this massive national pool in large-scale infrastructure, sovereign securities, and high-yield commercial deposits. Depositors receive tax-deductible contributions under Section 63 (up to NPR 300,000 shared with CIT), competitive annual interest plus profit dividends, medical hospitalization grants, and extensive collateralized lending facilities (including 80% special loans, home purchase loans, and educational credit).',
      np: 'कर्मचारी सञ्चय कोष ऐन २०१९ अनुसार स्थापित यो संस्था नेपालको सबैभन्दा पुरानो र विशाल अवकाश कोष हो। कानुनी व्यवस्था अनुसार निजामती कर्मचारी, शिक्षक, सेना, प्रहरी, संस्थान र निजी प्रतिष्ठानका कर्मचारीहरूको आधारभूत तलबबाट १०% कट्टा गरी रोजगारदाताले १०% थपेर कुल २०% रकम हरेक महिना कोषमा जम्मा गरिन्छ। कोषले यस विशाल पुँजीलाई राष्ट्रिय गौरवका आयोजना, सरकारी ऋणपत्र र मुद्दती निक्षेपमा लगानी गर्दछ। सञ्चयकर्ताहरूले आयकर ऐनको दफा ६३ अनुसार कर छुट (सीआईटीसँगै कुल रु. ३ लाखसम्म), वार्षिक चक्रवर्ती ब्याज, मुनाफा बोनस, अस्पताल उपचार शोधभर्ना र सस्तो ब्याजमा विशेष सापटी (८०%), घर सापटी र शैक्षिक सापटीजस्ता बृहत् कर्जा सुविधाहरू प्राप्त गर्दछन्।'
    },
    whyItMatters: {
      en: 'For generations of Nepali workers, Sanchaya Kosh has represented the ultimate financial bedrock. It forces lifetime savings from day one of employment, guarantees 100% principal safety backed by the government of Nepal, and provides accessible credit lines to construct family homes without dealing with commercial bank red tape.',
      np: 'पुस्तौंदेखि नेपाली कर्मचारीहरूका लागि सञ्चय कोष वित्तीय सुरक्षाको सबैभन्दा भरपर्दो खम्बा रहिआएको छ। यसले जागिरको पहिलो दिनदेखि नै अनिवार्य रूपमा बचत गर्ने बानी बसाल्छ, शतप्रतिशत सरकारी सुरक्षा दिन्छ र बैंकहरूको झन्झट बिना आफ्नै जम्मा रकमका आधारमा घर बनाउन सस्तो ब्याजमा कर्जा उपलब्ध गराउँछ।'
    },
    howItWorks: {
      summary: {
        en: 'The operation and lifecycle of an Employees Provident Fund account follows 4 core stages:',
        np: 'कर्मचारी सञ्चय कोष सञ्चालन र सुविधा प्राप्ति ४ वटा मुख्य चरणमा चल्दछ:'
      },
      steps: [
        {
          title: { en: '1. Mandatory 10% + 10% Deduction', np: '१. १०% + १०% अनिवार्य तलब कट्टी' },
          desc: { en: 'Every month, the employer deducts 10% of basic salary, adds an equal 10% matching contribution, and deposits 20% to EPF via ConnectIPS.', np: 'हरेक महिना रोजगारदाताले १०% थपिदिने र कर्मचारीको तलबबाट १०% कटाएर कुल २०% रकम अनलाइनमार्फत कोषमा दाखिला गरिन्छ।' }
        },
        {
          title: { en: '2. Interest Accrual & Profit Allocation', np: '२. वार्षिक ब्याज र मुनाफा लाभांश' },
          desc: { en: 'EPF calculates daily interest, compounding it into the principal balance annually alongside operational profit bonuses.', np: 'कोषले वार्षिक रूपमा चक्रवर्ती ब्याज हिसाब गरी खातामा थप्दछ र आफ्नो नाफाबाट अतिरिक्त मुनाफा लाभांश प्रदान गर्दछ।' }
        },
        {
          title: { en: '3. Contributor Welfare & Loan Facilities', np: '३. सापटी र कल्याणकारी सुविधा' },
          desc: { en: 'While active, borrow up to 80% special loans, apply for house construction loans, and claim medical treatment hospital grants.', np: 'जागिर अवधिमै ८०% विशेष सापटी, सरल घरकर्जा र अस्पताल भर्ना हुँदा उपचार शोधभर्ना सुविधा लिन सकिन्छ।' }
        },
        {
          title: { en: '4. Complete Lump-Sum Settlement', np: '४. एकमुष्ट साँवा-ब्याज भुक्तानी' },
          desc: { en: 'Upon retirement or job resignation, withdraw 100% of accumulated principal, compound interest, and bonuses as a single lump-sum payout.', np: 'जागिरबाट राजीनामा दिँदा वा अवकाश हुँदा कोषमा जम्मा भएको सम्पूर्ण साँवा र ब्याज एकमुष्ट नगद फिर्ता पाइन्छ।' }
        }
      ]
    },
    whereUsed: {
      en: [
        'Mandatory retirement deductions for all civil servants, police, military, and public teachers',
        'Private sector companies participating in traditional provident fund schemes',
        'Contributor housing loans, education loans, and 80% special revolving credit',
        'Claiming tax deduction under Section 63 of the Nepal Income Tax Act'
      ],
      np: [
        'निजामती कर्मचारी, सेना, प्रहरी, संस्थान र स्थायी शिक्षकहरूको अनिवार्य अवकाश कोषमा',
        'परम्परागत सञ्चय कोष प्रणाली अपनाएका निजी कम्पनी तथा प्रतिष्ठानहरूमा',
        'योगदानकर्ताहरूलाई सरल घर सापटी, शैक्षिक कर्जा र ८०% विशेष सापटी लिन',
        'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ३ लाखसम्मको कर छुट दाबी गर्न'
      ]
    },
    nepalContext: {
      headline: {
        en: 'The Landmark Hydropower Financing and Contributor Loan Ecosystem in Nepal',
        np: 'नेपालका ठूला जलविद्युतमा लगानी र सञ्चयकर्ता सापटी प्रणाली'
      },
      body: {
        en: 'With over NPR 500 Billion in assets under management, Karmachari Sanchaya Kosh is one of the largest institutional financial powerhouses in Nepal. Rather than sitting idle, EPF capital drove the construction of major domestic energy projects, including the 456 MW Upper Tamakoshi Hydroelectric Project and Chilime Hydro. For individual contributors, EPF provides unrivaled credit facilities: contributors can borrow up to 80% of their total balance digitally in minutes, access subsidized Home Loans up to NPR 1 Crore, and receive up to NPR 100,000 for hospital medical treatments and NPR 10,00,000 for critical illness care.',
        np: 'रु. ५ खर्बभन्दा बढीको सम्पत्ति व्यवस्थापन गर्ने कर्मचारी सञ्चय कोष नेपालको सबैभन्दा विशाल वित्तीय शक्ति हो। यसले संकलित पुँजीलाई देशको विकासमा परिचालन गर्दै ४५६ मेगावाटको माथिल्लो तामाकोशी, चिलिमे र अन्य ठूला जलविद्युत आयोजनाहरू निर्माण गर्न मुख्य लगानी गरेको छ। आफ्ना सञ्चयकर्ताहरूका लागि कोषले निकै आकर्षक कर्जा दिएको छ: आफ्नो जम्मा रकमको ८०% सम्म तुरुन्तै डिजिटल सापटी, रु. १ करोडसम्मको सरल घर सापटी, र अस्पताल भर्ना हुँदा रु. १ लाखसम्म तथा कडा रोग लागेमा रु. १० लाखसम्मको कल्याणकारी आर्थिक सहायता प्रदान गर्दछ।'
      },
      keyPoints: {
        en: [
          'Mandatory 20% contribution: 10% paid by employer + 10% deducted from employee.',
          'Tax deduction up to NPR 300,000 or 1/3 of taxable income under Section 63 (combined with CIT).',
          'Instant 80% digital special loans available against accumulated balance.',
          'Entire accumulated corpus is paid out as a 100% lump-sum upon leaving employment.'
        ],
        np: [
          'अनिवार्य २०% मासिक योगदान: १०% रोजगारदाताले थपिदिने + १०% कर्मचारीको तलबबाट काटिने।',
          'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ३ लाख वा १/३ सम्म कर छुट (सीआईटीसँग मिलेर)।',
          'जम्मा भएको रकमको ८०% सम्म अनलाइनबाटै तुरुन्तै विशेष सापटी (ऋण) लिन सकिने।',
          'जागिर छोड्दा वा अवकाश हुँदा सम्पूर्ण साँवा र ब्याज एकमुष्ट नगद फिर्ता पाइने।'
        ]
      }
    },
    practicalExample: {
      scenario: {
        en: 'Rabin works as an officer at a public corporation in Kathmandu with a basic salary of NPR 45,000. Every month, his corporation matches his NPR 4,500 deduction with NPR 4,500, depositing NPR 9,000 monthly into his EPF account. Over 25 years of service, with salary increments and an average 7.5% annual compound interest plus bonuses, Rabin’s accumulated Sanchaya Kosh balance swells to over NPR 8,200,000! When Rabin retires at age 58, EPF hands him a single cheque for NPR 8,200,000 completely tax-advantaged, giving him instant lump-sum security to build his family home and fund his children’s higher education.',
        np: 'काठमाडौंको एउटा संस्थानमा अधिकृत रहेका रबिनको आधारभूत तलब रु. ४५,००० छ। हरेक महिना अफिसले रु. ४,५०० थपिदिन्छ र उनको तलबबाट ४,५०० कटाएर कुल रु. ९,००० सञ्चय कोषमा दाखिला हुन्छ। २५ वर्षको सेवा अवधिमा तलब वृद्धि र औसत ७.५% चक्रवर्ती ब्याज तथा बोनसका कारण रबिनको सञ्चय कोषमा रु. ८२ लाख भन्दा बढी रकम जम्मा हुन्छ! ५८ वर्षमा अवकाश लिँदा सञ्चय कोषले उनलाई पूरै रु. ८२ लाखको एकमुष्ट चेक हस्तान्तरण गर्दछ, जसले उनलाई घर बनाउन र छोराछोरी पढाउन तत्काल ठूलो आर्थिक शक्ति प्रदान गर्छ।'
      },
      takeaway: {
        en: 'EPF forces automatic, discipline-free savings from your very first paycheck, turning modest monthly contributions into multi-million rupee lump-sum retirement wealth.',
        np: 'सञ्चय कोषले जागिरको पहिलो महिनादेखि नै अनिवार्य बचत गराउँछ, जसले महिनाको सानो रकमलाई अवकाशको बेला करोडौंको एकमुष्ट पुँजीमा परिणत गरिदिन्छ।'
      }
    },
    formula: {
      equation: 'Total EPF Monthly Deposit = Basic Salary * 20% (10% Employee + 10% Employer)',
      explanation: {
        en: 'Multiply basic salary by 20%. Exactly half (10%) is contributed by the employer as a statutory benefit, and the other half (10%) is deducted from the employee.',
        np: 'कर्मचारीको आधारभूत तलबलाई २०% ले गुणन गर्ने। जसमा आधा (१०%) रोजगारदाताले थपिदिन्छ र आधा (१०%) कर्मचारीको तलबबाट कट्टा गरिन्छ।'
      },
      variables: [
        { symbol: 'Basic Salary', label: { en: 'Basic monthly salary component', np: 'आधारभूत मासिक तलब' } },
        { symbol: '10% Employee', label: { en: 'Mandatory deduction from employee salary', np: 'कर्मचारीको तलबबाट काटिने १०% रकम' } },
        { symbol: '10% Employer', label: { en: 'Mandatory matching contribution from employer', np: 'रोजगारदाताले थपिदिने १०% रकम' } }
      ],
      example: {
        scenario: {
          en: 'An employee with a basic salary of NPR 40,000 per month in Nepal.',
          np: 'मासिक रु. ४०,००० आधारभूत तलब भएको कर्मचारीको सञ्चय कोष हिसाब।'
        },
        calculation: {
          en: 'Employee (10%) = 40,000 * 0.10 = NPR 4,000. Employer (10%) = 40,000 * 0.10 = NPR 4,000. Total Monthly = NPR 8,000.',
          np: 'कर्मचारीको १०% = ४०,००० * ०.१० = रु. ४,०००। अफिसको १०% = ४०,००० * ०.१० = रु. ४,०००। कुल मासिक जम्मा = रु. ८,०००।'
        },
        result: {
          en: 'NPR 8,000 Monthly Deposit into EPF (NPR 96,000/year)',
          np: 'मासिक रु. ८,००० सञ्चय कोषमा जम्मा (वार्षिक रु. ९६,०००)'
        }
      }
    },
    advantages: {
      en: [
        'Guaranteed employer matching: an instant 100% return on your 10% contribution from day one',
        '100% lump-sum cash payout of all accumulated capital upon retirement or resignation',
        'Instant digital 80% special loans and long-term home construction loans up to NPR 1 Crore',
        'Valuable contributor welfare schemes: hospital medical reimbursements and critical illness cover'
      ],
      np: [
        'रोजगारदाताले बराबर १०% थपिदिने भएकाले आफ्नो लगानीमा पहिलो दिनमै शतप्रतिशत प्रतिफल',
        'अवकाश हुँदा वा जागिर छोड्दा जम्मा भएको सम्पूर्ण साँवा र ब्याज एकमुष्ट नगद फिर्ता पाइने',
        'अनलाइनबाटै ८०% सम्म विशेष सापटी र घर निर्माणका लागि रु. १ करोडसम्मको सरल कर्जा सुविधा',
        'सञ्चयकर्ता स्वास्थ्य सुरक्षा: अस्पताल भर्ना हुँदा उपचार खर्च र कडा रोग लागेमा विशेष आर्थिक सहायता'
      ]
    },
    limitations: {
      en: [
        'Fixed interest returns (typically 6.5%-8.0%) will lag behind long-term equity growth',
        'Lacks a monthly lifelong pension mechanism (unlike the Social Security Fund)',
        'The NPR 300,000 Section 63 tax exemption limit is shared jointly with CIT',
        'Contributions are strictly limited to 10% matching on basic salary'
      ],
      np: [
        'निश्चित ब्याजदर (६.५%-८.०%) मात्र पाइने हुनाले सेयर बजारको जस्तो उच्च पुँजी वृद्धि नहुने',
        'सामाजिक सुरक्षा कोष (SSF) मा जस्तो ६० वर्षपछि जीवनभर मासिक पेन्सनको व्यवस्था नहुने',
        'आयकर ऐनको दफा ६३ को ३ लाख कर छुट सीमा नागरिक लगानी कोष (CIT) सँग बाँड्नुपर्ने',
        'योगदान आधारभूत तलबको १०% मा मात्र सीमित हुने हुनाले थप रकम हाल्न नमिल्ने'
      ]
    },
    misconceptions: [
      {
        myth: {
          en: 'When you take an 80% special loan from EPF, the bank charges penalty interest and confiscates your savings.',
          np: 'सञ्चय कोषबाट ८०% सापटी लिँदा कोषले चर्को जरिवाना ब्याज काट्छ र बचत जफत हुन्छ।'
        },
        reality: {
          en: 'An 80% special loan is simply borrowing against your own accumulated savings at a subsidized interest rate (typically just 1.0% to 1.5% above your deposit interest rate). Your remaining balance continues compounding safely.',
          np: '८०% विशेष सापटी भनेको आफ्नै बचत धितो राखेर सस्तो ब्याजदरमा (पाएको ब्याजभन्दा १% देखि १.५% मात्र बढीमा) लिइने सरल कर्जा हो। बाँकी रकममा नियमित ब्याज आइरहन्छ।'
        }
      },
      {
        myth: {
          en: 'You can only withdraw your Sanchaya Kosh money when you reach 60 years of age.',
          np: 'सञ्चय कोषको पैसा झिक्न अनिवार्य रूपमा ६० वर्ष उमेर पुग्नै पर्छ।'
        },
        reality: {
          en: 'Unlike SSF which locks pension funds until age 60, in EPF, whenever you formally resign or leave your job, you can withdraw 100% of your accumulated principal and interest immediately in a single lump sum.',
          np: 'एसएसएफ जस्तो ६० वर्षसम्म कुर्नु पर्दैन; सञ्चय कोषमा तपाईंले जुनसुकै उमेरमा जागिर छोडे पनि वा राजीनामा स्वीकृत भएपछि आफ्नो सम्पूर्ण साँवा र ब्याज तुरुन्तै एकमुष्ट नगद झिक्न पाउनुहुन्छ।'
        }
      }
    ],
    comparison: {
      title: { en: 'Employees Provident Fund (EPF) vs Citizen Investment Trust (CIT)', np: 'कर्मचारी सञ्चय कोष (EPF) र नागरिक लगानी कोष (CIT) बीचको तुलना' },
      subtitle: { en: 'Mandatory 10%+10% payroll matching vs voluntary flexible tax-exempt savings in Nepal', np: 'अनिवार्य १०%+१०% तलब योगदान र स्वैच्छिक कर छुट बचत बीचको भिन्नता' },
      featureHeader: { en: 'Dimension', np: 'आधार' },
      colA: { en: 'Employees Provident Fund (EPF)', np: 'कर्मचारी सञ्चय कोष (EPF)' },
      colB: { en: 'Citizen Investment Trust (CIT)', np: 'नागरिक लगानी कोष (CIT)' },
      rows: [
        {
          feature: { en: 'Contribution Style', np: 'जम्मा गर्ने तरिका' },
          valA: { en: 'Mandatory 10% employee + 10% employer matching (20% total)', np: 'अनिवार्य १०% कर्मचारी + १०% रोजगारदाता थप (कुल २०%)' },
          valB: { en: 'Voluntary; employee chooses exact monthly amount up to tax limits', np: 'पूर्ण स्वैच्छिक; आफ्नो इच्छा अनुसार मासिक रकम तोक्न सकिने' }
        },
        {
          feature: { en: 'Employer Matching', np: 'रोजगारदाताको थप' },
          valA: { en: 'Mandatory 10% matched by law', np: '१०% रोजगारदाताले थपिदिनै पर्ने कानुनी बाध्यता' },
          valB: { en: 'Optional (mostly funded directly by employee)', np: 'ऐच्छिक (प्रायः कर्मचारी आफैंले मात्र जम्मा गर्ने)' }
        },
        {
          feature: { en: 'Welfare Facilities', np: 'कल्याणकारी सुविधा' },
          valA: { en: 'Extensive: Medical grants, critical illness, accidental funeral cover', np: 'बृहत्: अस्पताल भर्ना शोधभर्ना, कडा रोग उपचार खर्च, काजकिरिया खर्च' },
          valB: { en: 'Primarily an investment vehicle; limited welfare grants', np: 'मुख्यतया लगानी कोष; सीमित कल्याणकारी सुविधा' }
        }
      ]
    },
    relatedConcepts: [
      { slug: 'cit', name: 'CIT', type: 'glossary' },
      { slug: 'ssf', name: 'SSF', type: 'glossary' },
      { slug: 'pan', name: 'PAN', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Retirement Systems in Nepal: EPF, CIT & SSF', categorySlug: 'retirement', slug: 'what-is-investing' }
    ],
    relatedGuides: [
      { title: 'Complete Guide to Personal Finance & Budgeting', slug: 'complete-budgeting-guide' }
    ],
    relatedCalculators: [
      { name: 'Income Tax Calculator Nepal', slug: 'income-tax', desc: 'Calculate your annual tax deductions under EPF and CIT in Nepal.' }
    ],
    faqs: [
      {
        q: { en: 'How do I check my EPF balance online or on mobile in Nepal?', np: 'सञ्चय कोषमा कति रकम जम्मा भयो भनी मोबाइलबाट कसरी हेर्ने?' },
        a: {
          en: 'You can check your balance instantly by logging into the EPF official portal (epfnepal.com.np), downloading the EPF mobile app, or checking under the "Employees Provident Fund" section inside the government\'s "Nagarik App".',
          np: 'सञ्चय कोषको आधिकारिक वेबसाइट (epfnepal.com.np), कोषको मोबाइल एप, वा "नागरिक एप" भित्र रहेको कर्मचारी सञ्चय कोष सेवामा गएर आफ्नो कुल जम्मा रकम र ब्याज तुरुन्तै हेर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'What medical treatment coverage does EPF provide to contributors?', np: 'सञ्चय कोषले बिरामी पर्दा उपचार खर्च बापत कति रकम दिन्छ?' },
        a: {
          en: 'EPF provides up to NPR 100,000 for hospital treatment and general sickness reimbursement per year, and up to NPR 10,00,000 in direct financial assistance if a contributor is diagnosed with specified critical illnesses (cancer, kidney failure, heart attack, stroke).',
          np: 'कोषले अस्पताल भर्ना भएर उपचार गराउँदा वार्षिक बढीमा रु. १ लाखसम्म शोधभर्ना दिन्छ। साथै तोकिएका कडा रोगहरू (क्यान्सर, मिर्गौला फेल, मुटुरोग आदि) लागेमा रु. १० लाखसम्मको विशेष आर्थिक सहायता प्रदान गर्दछ।'
        }
      },
      {
        q: { en: 'Can I transfer my EPF balance to the Social Security Fund (SSF)?', np: 'के सञ्चय कोषको रकम सामाजिक सुरक्षा कोष (SSF) मा सार्न मिल्छ?' },
        a: {
          en: 'Yes. Under government transition guidelines, employees moving from organizations registered under EPF to companies under the SSF framework can legally transfer their accumulated retirement corpus to their SSF account.',
          np: 'मिल्छ। सरकारको कार्यविधि अनुसार सञ्चय कोषमा दर्ता भएका कार्यालयबाट सामाजिक सुरक्षा कोष लागू भएको कम्पनीमा जागिर सरेमा आफ्नो सञ्चय कोषको रकमलाई एसएसएफ खातामा कानुनी रूपमै स्थानान्तरण गर्न सकिन्छ।'
        }
      },
      {
        q: { en: 'Is the final lump-sum withdrawal from EPF taxable in Nepal?', np: 'के सञ्चय कोषबाट एकमुष्ट पैसा झिक्दा आयकर लाग्छ?' },
        a: {
          en: 'Under Section 88 and Section 65 of the Nepal Income Tax Act, the principal savings are completely tax-free. Only a concessional flat 5% final withholding tax (TDS) is applied to the earned interest gain portion, and zero additional tax is due.',
          np: 'आयकर ऐन अनुसार सञ्चय कोषको मूल साँवामा कुनै कर लाग्दैन। जम्मा भएको ब्याजको हिस्सामा मात्र ५% अन्तिम कर (TDS) कट्टा हुन्छ र बाँकी सम्पूर्ण रकम करमुक्त रूपमा हात पर्छ।'
        }
      }
    ],
    summary: {
      en: [
        'EPF is Nepal’s premier statutory retirement institution managing mandatory 20% payroll deposits (10% + 10%).',
        'Deposits qualify for tax deduction under Section 63 up to NPR 300,000 annually (shared with CIT).',
        'Provides instant digital 80% special loans, home purchase loans up to NPR 1 Crore, and hospital grants.',
        'Pays out 100% of accumulated principal and compound interest as a lump sum upon leaving employment.'
      ],
      np: [
        'कर्मचारी सञ्चय कोष २०% अनिवार्य तलब योगदान (१०% कर्मचारी + १०% अफिस) व्यवस्थापन गर्ने पुरानो वैधानिक संस्था हो।',
        'आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ३ लाखसम्मको कर छुट पाइन्छ (सीआईटीसँग मिलेर)।',
        'अनलाइनबाटै ८०% विशेष सापटी, १ करोडसम्मको घर सापटी र १० लाखसम्मको कडा रोग उपचार खर्च दिन्छ।',
        'जागिर छोड्दा वा अवकाश हुँदा सम्पूर्ण साँवा र चक्रवर्ती ब्याज एकमुष्ट नगद भुक्तानी गर्दछ।'
      ]
    },
    whereSeen: [
      { title: 'Retirement Systems in Nepal', type: 'Lesson', url: '/learn/retirement/what-is-investing' },
      { title: 'Income Tax Calculator', type: 'Calculator', url: '/calculators/income-tax' }
    ],
    meta: {
      title: 'What is EPF (Employees Provident Fund / Sanchaya Kosh) in Nepal? | risePaisa',
      description: 'Master the Employees Provident Fund (EPF / Sanchaya Kosh) in Nepal. Learn how the 10%+10% contribution works, Section 63 tax deductions, 80% loans, and medical benefits.'
    }
  }
];

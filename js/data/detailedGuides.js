// ==============================================
// risePaisa - Detailed Cornerstone Guides Registry
// Heavy editorial publications loaded on-demand for /learn/guides/:slug
// ==============================================

import { IPO_GUIDE } from './guides/ipoGuide.js';
import { CDSC_GUIDE } from './guides/cdscGuide.js';
import { EXPANDED_GUIDES } from './guides/expandedGuides.js';
import { ADDITIONAL_GUIDES } from './guides/additionalGuides.js';

export const DETAILED_GUIDES = {
  'complete-pan-guide': {
    id: 'complete-pan-guide',
    slug: 'complete-pan-guide',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    title: { en: 'Complete Permanent Account Number (PAN) Guide for Nepal', np: 'नेपालमा स्थायी लेखा नम्बर (PAN) लिने र व्यवस्थापन गर्ने पूर्ण गाइड' },
    oneLineSummary: {
      en: 'The definitive end-to-end manual for acquiring your personal PAN online via the Inland Revenue Department (IRD) portal, linking it to Demat & bank accounts, and preventing punitive 15% unregistered withholding taxes.',
      np: 'आन्तरिक राजस्व विभाग (IRD) को अनलाइन पोर्टलबाट व्यक्तिगत PAN लिने, Demat र बैंकमा जोड्ने र दोहोरो १५% कर कट्टीबाट बच्ने सम्पूर्ण व्यावहारिक विधि।'
    },
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'FY 2083/84 / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: { en: 'Verified for Nepal Regulatory Accuracy (Inland Revenue Department)', np: 'आन्तरिक राजस्व विभागको नियम अनुसार प्रमाणित' },
    prerequisites: [
      { title: 'Nepali Citizenship Certificate (Original Scan)', type: 'Document' },
      { title: 'Recent Passport-Sized Photo (Digital)', type: 'Document' },
      { title: 'Active Nepali Mobile Number & Email Address', type: 'Prerequisite' }
    ],
    en: {
      intro: 'A Permanent Account Number (PAN) is a unique, life-long 9-digit alphanumeric identifier issued by the Inland Revenue Department (IRD) of the Government of Nepal. Whether you are an employee drawing a monthly salary, a freelancer receiving international wire transfers, or a retail investor receiving cash dividends from NEPSE stocks, having a registered PAN is now mandatory under the Income Tax Act 2058. Without a PAN linked to your Demat and bank accounts, institutions are statutorily required to deduct withholding tax at punitive non-registered rates (up to 15% instead of the standard 5% concession).',
      chapters: [
        {
          num: 1,
          id: 'chap-1-types',
          title: 'Understanding Personal PAN vs Business PAN',
          content: 'In Nepal, PAN is broadly bifurcated into Personal PAN (व्यक्तिगत स्थायी लेखा नम्बर) and Business PAN (व्यावसायिक प्यान). Personal PAN is issued to individual citizens and is strictly non-transferable; it records personal salary deductions (Section 87 TDS), bank deposit interest taxes, and capital gains from stock trading. Business PAN, on the other hand, is tied to registered sole proprietorships, partnerships, or private limited companies registered with the Department of Industry or local municipal wards, and often includes Value Added Tax (VAT) or Excise endorsements. You should never conduct commercial business under a personal PAN, nor can an individual hold more than one personal PAN.',
          callout: {
            type: 'tip',
            title: 'One Citizen, One PAN Rule',
            text: 'Holding multiple personal PANs is illegal under Nepali tax law. If an employer created a PAN on your behalf in the past, retrieve that same 9-digit number instead of submitting a new application.'
          }
        },
        {
          num: 2,
          id: 'chap-2-online-portal',
          title: 'Step-by-Step Online Registration on the IRD Portal',
          content: 'You no longer need to stand in physical queues or pay document agents to obtain a personal PAN. The entire submission process is 100% digital on the official IRD portal (taxpayerportal.ird.gov.np). Navigate to "Taxpayer Portal" -> "Registration (PAN, VAT, Excise)" -> "Application for Registration". Fill in your basic demographics matching your citizenship certificate exactly: Full Name, Date of Birth in Bikram Sambat (B.S.), Citizenship Number, Issue District, and Issue Date. Select "Personal PAN" under registration category, and choose your nearest Taxpayer Service Office (करदाता सेवा कार्यालय - TSO) based on your permanent or current residence.',
          callout: {
            type: 'important',
            title: 'Keep Your Submission Number Safe',
            text: 'Upon completing the online application, note down your Application Submission Number and Password. You will need this reference to check approval status or print your verification receipt.'
          }
        },
        {
          num: 3,
          id: 'chap-3-verification',
          title: 'Photo Uploads & Final In-Person Verification',
          content: 'Attach clear, high-resolution scans of your Citizenship certificate (both front and back sides) and a color passport-sized photograph with a plain background. Files should be under 500 KB in JPEG or PNG format. While many Taxpayer Service Offices (TSOs) in major metropolitan areas now issue digital PANs directly via SMS/email notification, certain offices may require a brief 2-minute physical verification where you present your original citizenship document to receive the physical laminated green PAN card.',
          callout: {
            type: 'tip',
            title: 'Physical Card is Optional for Digital Use',
            text: 'Your 9-digit number is immediately active once approved in the IRD database. The physical plastic card is just a credential; bank and Demat systems only verify the 9-digit sequence against the IRD API.'
          }
        },
        {
          num: 4,
          id: 'chap-4-demat-linking',
          title: 'Linking PAN to Demat & MeroShare to Prevent Double TDS',
          content: 'Since fiscal year 2076/77, the Securities Board of Nepal (SEBON) and CDSC mandated PAN linking for all capital market participants. When you trade shares on the Nepal Stock Exchange (NEPSE) or receive cash dividends, the clearing system automatically cross-references your Demat account. If your PAN is verified in MeroShare, your capital gains tax (5% for holdings > 365 days, 7.5% for <= 365 days) is recorded as final withholding in your tax profile. If unlinked, you risk delays in share transfers and administrative audit notices.',
          callout: {
            type: 'warning',
            title: 'How to Update in MeroShare',
            text: 'Log in to MeroShare -> "My Profile" -> Check if PAN is populated. If empty, submit a PAN update request to your Depository Participant (DP) bank branch or broker.'
          }
        },
        {
          num: 5,
          id: 'chap-5-employer-tds',
          title: 'Tracking Employer TDS & Form D-01 Return Filing',
          content: 'If you are employed in an organization in Nepal, your employer deducts tax at source every month under Section 87 and deposits it directly to the Government treasury under your 9-digit PAN. You can independently verify these deposits by logging into the IRD Taxpayer Portal using your PAN and taxpayer login credentials. Reviewing your tax ledger annually ensures your employer has remitted the exact sums shown on your salary slips before filing your annual Form D-01 income tax statement.',
          callout: {
            type: 'tip',
            title: 'Tax Clearance Certificate (कर चुक्ता प्रमाणपत्र)',
            text: 'Once your annual returns are verified on the portal, you can generate a digital Tax Clearance Certificate instantly from home-a mandatory document for foreign travel visas, bank loans, and higher studies.'
          }
        },
        {
          num: 6,
          id: 'chap-6-troubleshooting',
          title: 'Resolving Duplicate PAN and Data Mismatch Errors',
          content: 'Common friction points include misspelled English names differing from citizenship transliterations, discrepancy between B.S. and A.D. birthdates, and previous automated PAN generations by past employers. If you receive an error stating "Citizenship already registered", visit your nearest Inland Revenue Office with your original citizenship certificate. The tax officer will merge duplicate profiles or reset your taxpayer portal access credentials within 10 minutes.',
          callout: {
            type: 'tip',
            title: 'Zero Government Fees',
            text: 'Personal PAN registration in Nepal is completely free of charge. Never pay any fee or tout at government offices for personal PAN creation.'
          }
        }
      ],
            comparisonTable: {
        title: 'Personal PAN vs Business PAN vs Non-PAN Status in Nepal',
        caption: 'Statutory rights, withholding rates, and obligations under Income Tax Act 2058',
        headers: ['Feature / Obligation', 'Personal PAN (व्यक्तिगत)', 'Business PAN (व्यावसायिक)', 'Without PAN (दर्ता नभएको)'],
        rows: [
          ['Who Can Apply', 'Every Nepali citizen with Nagarikta', 'Sole proprietorships, companies, NGOs', 'Unregistered individuals'],
          ['Cost of Acquisition', '100% Free at all IRD / TSO offices', 'NPR 0 at IRD (+ Ward registration charges)', 'None'],
          ['TDS on Bank Interest', '5% final withholding tax', '5% advance tax (adjusted in returns)', '15% punitive non-refundable rate'],
          ['Secondary NEPSE Trading', 'Mandatory for EDIS and broker TMS', 'Corporate broker account needed', 'Strictly prohibited by SEBON / CDSC'],
          ['Annual Filing Obligation', 'None (if salary tax is deducted at source)', 'Mandatory self-assessment returns (D-01/D-03)', 'Liable for back taxes and penalties']
        ]
      },
      nepalContext: 'Under Chapter 17 of the Income Tax Act 2058 and Finance Act directives, the Government of Nepal has aggressively integrated PAN with national infrastructure-including land registrations at Malpot offices for transactions exceeding NPR 10 Lakhs, vehicle purchases at Yatayat offices, opening fixed deposits exceeding NPR 5 Lakhs in commercial banks, and all secondary market share trading on NEPSE.',
      practicalScenario: {
        persona: 'Bikram, 28, Freelance UX Designer in Lalitpur',
        challenge: 'Bikram was receiving international consulting wire transfers of NPR 90,000/month into his commercial bank account. Without a PAN on file, his bank was withholding 15% TDS on incoming payments and he had no official tax clearance to apply for bank mortgages.',
        solution: 'Bikram applied for a personal PAN online in 15 minutes, submitted his verification number at the Lalitpur Taxpayer Service Office, and provided his 9-digit PAN to his bank. His withholding dropped to the legitimate 1% advance tax rate for export of software/services under the latest Finance Act, saving him over NPR 150,000 annually while building an unblemished tax clearance profile.'
      },
      calculatorShortcut: {
        slug: 'nepal-income-tax',
        name: 'Nepal Income Tax Calculator',
        desc: 'Calculate your exact single/married tax liability, SSF deductions, and take-home pay under the latest budget.'
      },
      downloadableResources: [
        {
          title: 'Salary Earner Legal Tax Deductions Checklist',
          type: 'PDF Checklist',
          size: '250 KB',
          href: '/resources/nepse-beginner-guide'
        },
        {
          title: 'Nepal Personal Budget & Expense Planner',
          type: 'Excel Spreadsheet',
          size: '142 KB',
          href: 'assets/downloads/nepal-personal-budget-planner.csv'
        }
      ],
      faqs: [
        {
          q: 'Is personal PAN registration free in Nepal?',
          a: 'Yes. Personal PAN registration is 100% free of charge under the Inland Revenue Department (IRD). There are zero official application or issuance fees.'
        },
        {
          q: 'Can a college student or unemployed individual apply for a PAN?',
          a: 'Yes. Any Nepali citizen holding a valid citizenship certificate can apply for a personal PAN regardless of their current employment or income status. It is essential for opening Demat accounts and investing in IPOs.'
        },
        {
          q: 'What happens if I don’t link my PAN to my Demat and MeroShare?',
          a: 'Failure to link PAN will prevent your broker from clearing secondary market share sales, and cash dividends deposited by listed companies will suffer higher unverified tax withholdings.'
        },
        {
          q: 'How long does it take for online PAN approval?',
          a: 'Online applications are typically processed within 24 to 48 business hours by your chosen Taxpayer Service Office (TSO).'
        }
      ],
      whereToGoNext: {
        nextLesson: { title: 'Legal Tax Deductions & SSF Allowances', slug: 'tax-exemptions', categorySlug: 'taxation', readTime: '12 min read' },
        nextGuide: { title: 'Complete Salary Earner Income Tax Guide', slug: 'complete-income-tax-guide', readTime: '16 min read' },
        nextCalculator: { title: 'Calculate Income Tax & SSF Rebates', slug: 'nepal-income-tax' },
        nextGlossary: { title: 'Tax Deducted at Source (TDS)', term: 'TDS (कर कट्टी)', def: 'Statutory advance tax withheld at source on salary, interest, and consultancy payments in Nepal.' }
      }
    },
    np: {
      intro: 'स्थायी लेखा नम्बर (PAN) नेपाल सरकार, आन्तरिक राजस्व विभाग (IRD) द्वारा जारी गरिने ९ अङ्कको स्थायी पहिचान नम्बर हो। चाहे तपाईं मासिक तलब पाउने कर्मचारी हुनुहोस्, अनलाइन काम गर्ने फ्रिलान्सर हुनुहोस् वा NEPSE मा साधारण सेयर (IPO) भर्ने लगानीकर्ता-आयकर ऐन २०५८ अनुसार PAN अनिवार्य गरिएको छ। बैंक वा डिम्याटमा PAN दर्ता नभएमा दोहोरो वा उच्च दरमा १५% सम्म कर कट्टी (TDS) हुन सक्छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-types',
          title: 'व्यक्तिगत PAN र व्यावसायिक PAN बीचको भिन्नता',
          content: 'नेपालमा PAN मुख्यतया दुई प्रकारका हुन्छन्: व्यक्तिगत PAN (Personal PAN) र व्यावसायिक PAN (Business PAN)। व्यक्तिगत PAN हरेक नागरिकलाई व्यक्तिगत रूपमा जारी गरिन्छ र यो जीवनभर एउटै रहन्छ। यसले पारिश्रमिक, बैंक ब्याज र सेयर कारोबारको कर अभिलेख राख्छ। व्यावसायिक PAN भने दर्ता भएका फर्म, कम्पनी वा साझेदारी संस्थाका नाममा जारी गरिन्छ जसमा VAT वा अन्तःशुल्क पनि जोडिएको हुन सक्छ। एउटा व्यक्तिले एकभन्दा बढी व्यक्तिगत PAN लिन कानुनतः पाउँदैन।',
          callout: {
            type: 'tip',
            title: 'एक नागरिक, एउटा मात्र PAN नियम',
            text: 'कुनै पनि नागरिकले दुईवटा व्यक्तिगत PAN लिन पाउँदैन। विगतमा काम गरेको कम्पनीले बनाइदिएको भए सोही ९ अङ्कको नम्बर पुनः प्रयोग गर्नुपर्छ।'
          }
        },
        {
          num: 2,
          id: 'chap-2-online-portal',
          title: 'IRD अनलाइन पोर्टलबाट फाराम भर्ने चरणबद्ध तरिका',
          content: 'अब PAN लिन कुनै लेखापढी व्यवसायीलाई पैसा तिर्नु पर्दैन वा सरकारी कार्यालयमा लाइन बस्नु पर्दैन। आन्तरिक राजस्व विभागको आधिकारिक पोर्टल (taxpayerportal.ird.gov.np) मा गई "Registration (PAN, VAT, Excise)" -> "Application for Registration" मा क्लिक गर्नुहोस्। नागरिकता अनुसार आफ्नो नाम, जन्ममिति (वि.सं.), नागरिकता नम्बर र जिल्ला भर्नुहोस्। व्यक्तिगत प्यान छनोट गरी आफ्नो पायक पर्ने करदाता सेवा कार्यालय (TSO) चयन गर्नुहोस्।',
          callout: {
            type: 'important',
            title: 'Submission Number सुरक्षित राख्नुहोस्',
            text: 'फाराम बुझाएपछि आउने Application Submission Number र Password सुरक्षित राख्नुहोस्। यही नम्बरबाट पछि आफ्नो PAN स्वीकृत भएको हेर्न सकिन्छ।'
          }
        },
        {
          num: 3,
          id: 'chap-3-verification',
          title: 'कागजात अपलोड र प्रमाणीकरण प्रक्रिया',
          content: 'नागरिकताको अगाडि र पछाडिको स्पष्ट फोटो तथा पासपोर्ट साइजको फोटो (५०० KB भन्दा कम) पोर्टलमा अपलोड गर्नुहोस्। अधिकांश करदाता सेवा कार्यालयहरूले अनलाइन नै स्वीकृत गरी मोबाइलमा SMS पठाइदिन्छन्। यदि कार्यालयले बोलाएमा सक्कल नागरिकता देखाएर तुरुन्तै हरियो लेमिनेसन गरिएको PAN कार्ड निःशुल्क प्राप्त गर्न सकिन्छ।',
          callout: {
            type: 'tip',
            title: 'कार्ड नभए पनि नम्बर तुरुन्त चल्छ',
            text: 'स्वीकृत भएपछि प्राप्त हुने ९ अङ्कको नम्बर नै आधिकारिक हो। बैंक र डिम्याटमा सोही नम्बर दर्ता गर्दा काम बन्छ।'
          }
        },
        {
          num: 4,
          id: 'chap-4-demat-linking',
          title: 'Demat र MeroShare मा PAN जोड्ने तरिका',
          content: 'धितोपत्र बोर्ड (SEBON) र CDSC को नियम अनुसार सेयर बजारमा लगानी गर्न PAN अनिवार्य छ। MeroShare को My Profile मा गएर आफ्नो PAN जोडिएको छ कि छैन जाँच्नुहोस्। यदि छैन भने आफ्नो DP बैंक वा ब्रोकरमा गई PAN अद्यावधिक गर्नुहोस्, जसले गर्दा सेयर नाफामा ५% वा ७.५% बाहेक थप झन्झट हुँदैन।',
          callout: {
            type: 'warning',
            title: 'MeroShare मा PAN अपडेट',
            text: 'PAN नजोडिएमा सेयर बिक्रीपछि EDIS गर्न र नाफाको पुँजीगत लाभकर (CGT) समायोजनमा समस्या आउन सक्छ।'
          }
        },
        {
          num: 5,
          id: 'chap-5-employer-tds',
          title: 'तलबबाट काटिएको TDS जाँच्ने र कर चुक्ता प्रमाणपत्र लिने',
          content: 'तपाईंको रोजगारदाताले महिनाको तलबबाट आयकर ऐनको धारा ८७ अनुसार कर कट्टी (TDS) गरी सरकारलाई बुझाउँछ। तपाईंले आफैँ IRD को पोर्टलमा आफ्नो PAN लगइन गरी रोजगारदाताले कर जम्मा गरिदियो कि दिएन भनेर भौचर हेर्न सक्नुहुन्छ। वर्षको अन्त्यमा D-01 विवरण भरी अनलाइनबाटै कर चुक्ता प्रमाणपत्र (Tax Clearance Certificate) लिन सकिन्छ।',
          callout: {
            type: 'tip',
            title: 'कर चुक्ता प्रमाणपत्रको फाइदा',
            text: 'बैंकबाट ऋण लिन, विदेश भ्रमण वा उच्च शिक्षाको भिसा आवेदनका लागि डिजिटल कर चुक्ता प्रमाणपत्र अनिवार्य कागजात हो।'
          }
        },
        {
          num: 6,
          id: 'chap-6-troubleshooting',
          title: 'दोहोरो PAN परेमा वा समस्या आएमा के गर्ने?',
          content: 'यदि अनलाइन फाराम भर्दा "Citizenship already registered" देखायो भने पहिले नै तपाईंको नाममा PAN बनेको हुन सक्छ। सक्कल नागरिकता लिएर नजिकको करदाता सेवा कार्यालय जानुहोस्, कर्मचारीले २ मिनेटमै पुरानो नम्बर खोजेर पोर्टलको पासवर्ड रिसेट गरिदिन्छन्।',
          callout: {
            type: 'tip',
            title: 'पूर्णतया निःशुल्क',
            text: 'नेपालमा व्यक्तिगत PAN लिन कुनै पनि सरकारी दस्तुर लाग्दैन। दलाल वा बिचौलियालाई पैसा नतिर्नुहोस्।'
          }
        }
      ],
            comparisonTable: {
        title: 'व्यक्तिगत PAN, व्यावसायिक PAN र PAN नभएको अवस्थाको तुलना',
        caption: 'आयकर ऐन २०५८ बमोजिम कर कट्टी दर र कानुनी सर्तहरूको विवरण',
        headers: ['मापदण्ड / अधिकार', 'व्यक्तिगत PAN (Personal)', 'व्यावसायिक PAN (Business)', 'PAN नभएको (Without PAN)'],
        rows: [
          ['आवेदन योग्यता', 'नागरिकता भएका हरेक नेपाली नागरिक', 'उद्योग, फर्म, कम्पनी वा संस्था', 'दर्ता नगरिएका व्यक्तिहरू'],
          ['सरकारी दस्तुर', 'सबै करदाता सेवा कार्यालयमा पूर्ण निःशुल्क', 'IRD मा निःशुल्क (वडा दर्ता दस्तुर बाहेक)', 'लागू नहुने'],
          ['बैंक ब्याजमा कर कट्टी', '५% अन्तिम कर (Final TDS)', '५% अग्रिम कर (अडिटमा मिलान हुने)', '१५% सम्म जरिवाना सहितको उच्च कर'],
          ['सेयर कारोबार (TMS/Demat)', 'Demat र ब्रोकर खाताका लागि अनिवार्य', 'संस्थागत ब्रोकर खाता आवश्यक', 'धितोपत्र बोर्डको नियमले पूर्ण रोक'],
          ['वार्षिक कर विवरण (Filing)', 'तलबमा कर कट्टी भइसकेको भए ऐच्छिक', 'हरेक वर्ष अनिवार्य D-01/D-03 विवरण दाखिला', 'बक्यौता कर र जरिवानाको कानुनी जोखिम']
        ]
      },
      nepalContext: 'नेपालको आयकर ऐन २०५८ अनुसार १० लाखभन्दा बढीको जग्गा किनबेच, सवारी साधन खरिद, ५ लाखभन्दा बढीको बैंक मुद्दती निक्षेप र NEPSE को दोस्रो बजारमा सेयर कारोबार गर्न नागरिकसँग अनिवार्य PAN हुनुपर्छ।',
      practicalScenario: {
        persona: 'बिक्रम, २८, ललितपुरका फ्रिलान्स डिजाइनर',
        challenge: 'बिक्रमले विदेशी ग्राहकबाट मासिक रु. ९०,००० बैंकमा प्राप्त गरिरहेका थिए। PAN नहुँदा बैंकले १५% सम्म अग्रिम कर काट्ने सम्भावना थियो र कुनै कर चुक्ता प्रमाणपत्र थिएन।',
        solution: 'बिक्रमले १५ मिनेटमा अनलाइनबाटै व्यक्तिगत PAN लिएर बैंकमा पेश गरे। सफ्टवेयर तथा सूचना प्रविधि सेवा निर्यात बापत लाग्ने न्यूनतम १% अग्रिम कर कट्टीको सुविधा पाए र वार्षिक १ लाख ५० हजारभन्दा बढी रकम जोगाउन सफल भए।'
      },
      calculatorShortcut: {
        slug: 'nepal-income-tax',
        name: 'नेपाल आयकर (Tax) Calculator',
        desc: 'नयाँ बजेट अनुसार आफ्नो व्यक्तिगत वा दम्पती आयकर, SSF र CIT छुटको वास्तविक हिसाब हेर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'तलबजीवी कर्मचारीका लागि कर छुट चेकलिस्ट',
          type: 'PDF Checklist',
          size: '250 KB',
          href: '/resources/nepse-beginner-guide'
        },
        {
          title: 'नेपाल व्यक्तिगत बजेट तथा खर्च प्लानर',
          type: 'Excel Spreadsheet',
          size: '142 KB',
          href: 'assets/downloads/nepal-personal-budget-planner.csv'
        }
      ],
      faqs: [
        {
          q: 'के व्यक्तिगत PAN दर्ता गर्दा पैसा लाग्छ?',
          a: 'लाग्दैन। नेपाल सरकार आन्तरिक राजस्व विभागबाट व्यक्तिगत PAN लिन कुनै पनि शुल्क लाग्दैन, यो १००% निःशुल्क छ।'
        },
        {
          q: 'विद्यार्थी वा बेरोजगारले PAN लिन मिल्छ?',
          a: 'मिल्छ। नागरिकता प्राप्त जुनसुकै नेपाली नागरिकले आम्दानी नभए पनि PAN लिन सक्छ। सेयर बजारमा IPO भर्न र बैंक खाताका लागि यो उपयोगी हुन्छ।'
        },
        {
          q: 'Demat र MeroShare मा PAN नजोडे के हुन्छ?',
          a: 'PAN नजोडिएमा सेयर बिक्रीपछि ब्रोकर मार्फत राफसाफ गर्न बाधा पर्न सक्छ र कम्पनीहरूले दिने लाभांशमा बढी कर काटिन सक्छ।'
        },
        {
          q: 'अनलाइन फाराम भरेपछि PAN कहिले स्वीकृत हुन्छ?',
          a: 'सामान्यतया कार्यदिनको २४ देखि ४८ घण्टाभित्र सम्बन्धित करदाता सेवा कार्यालयले अनलाइन विवरण स्वीकृत गर्छ।'
        }
      ],
      whereToGoNext: {
        nextLesson: { title: 'नेपालमा कर छुट र SSF सुविधाहरू', slug: 'tax-exemptions', categorySlug: 'taxation', readTime: '१२ मिनेट पढाइ' },
        nextGuide: { title: 'तलबजीवी कर्मचारीका लागि आयकरको पूर्ण गाइड', slug: 'complete-income-tax-guide', readTime: '१६ मिनेट पढाइ' },
        nextCalculator: { title: 'आयकर र SSF छुट हिसाब गर्नुहोस्', slug: 'nepal-income-tax' },
        nextGlossary: { title: 'TDS (स्रोतमा कर कट्टी)', term: 'TDS (कर कट्टी)', def: 'पारिश्रमिक वा बैंक ब्याज भुक्तानी गर्दा मुहानमै कानुनी रूपमा कट्टा गरिने अग्रिम कर।' }
      }
    }
  },

  'complete-meroshare-guide': {
    id: 'complete-meroshare-guide',
    slug: 'complete-meroshare-guide',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'Complete MeroShare & CDSC Guide for Nepal', np: 'MeroShare र CDSC को पूर्ण व्यावहारिक गाइड' },
    oneLineSummary: {
      en: 'Master primary share applications (IPO), C-ASBA bank authorizations, allotment checks, electronic share transfers (EDIS), and WACC calculations.',
      np: 'अनलाइन IPO भर्ने, C-ASBA बैंक स्वीकृति, नतिजा हेर्ने, सेयर बिक्रीपछि EDIS गर्ने र WACC हिसाब मिलान गर्ने सम्पूर्ण विधि।'
    },
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '12 min read', np: '१२ मिनेट पढाइ' },
    sectionsCount: 6,
    updatedDate: 'Recent / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: { en: 'Verified for Nepal Capital Market Compliance (CDSC/SEBON)', np: 'धितोपत्र बोर्ड र सिडिएससीको नियम अनुसार प्रमाणित' },
    prerequisites: [
      { title: 'Demat Account (16-Digit BOID) from any Bank/Broker', type: 'Prerequisite' },
      { title: 'C-ASBA Registration Number (CRN) from Bank', type: 'Prerequisite' },
      { title: 'Bank Account with minimum NPR 1,000 balance', type: 'Prerequisite' }
    ],
    en: {
      intro: 'MeroShare is the official web and mobile application developed by CDS and Clearing Limited (CDSC), a subsidiary of the Nepal Stock Exchange (NEPSE). It acts as the digital gateway for retail investors in Nepal to apply for Initial Public Offerings (IPOs), Rights Offerings, and Debentures under the Centralized Applications Supported by Blocked Amount (C-ASBA) framework. Furthermore, it allows investors to monitor their Demat portfolio holdings in real time, execute electronic transfer of securities (EDIS) when selling shares on the secondary market, and compute Weighted Average Cost of Capital (WACC).',
      chapters: [
        {
          num: 1,
          id: 'chap-1-access',
          title: 'Logging In & Initial Setup (DP, Username & PIN)',
          content: 'Access MeroShare via meroshare.cdsc.com.np or the official mobile app. Select your Depository Participant (DP) from the dropdown list (e.g., your commercial bank or broker), enter your username, and your password. On first login, you are required to set a 4-digit numeric transaction PIN and a secret password. This 4-digit PIN is strictly required every time you submit an IPO application or confirm an EDIS share transfer.',
          callout: {
            type: 'important',
            title: 'CRN is Obtained from Bank, Not MeroShare',
            text: 'Your C-ASBA Registration Number (CRN) must be obtained directly from your bank through mobile banking or branch visit. You cannot apply for IPOs without an active CRN.'
          }
        },
        {
          num: 2,
          id: 'chap-2-apply-ipo',
          title: 'Applying for IPOs via My ASBA (Step-by-Step)',
          content: 'Navigate to the "My ASBA" tab on the left sidebar. Under "Apply for Issue", you will see all active public issues categorized into Ordinary Shares, Debentures, and Mutual Funds. Click "Apply" next to the company. Select your linked bank account, enter the applied quantity (standard minimum is 10 units = NPR 1,000 for standard par value issues), enter your Bank CRN number, check the declaration box, and click Apply. Enter your 4-digit PIN to finalize. Your bank will immediately place a lien/freeze on NPR 1,000 in your account without debiting the money until allotment.',
          callout: {
            type: 'tip',
            title: '10-Kitta Rule in Nepal',
            text: 'Under SEBON allotment policy, shares are distributed at 10 units per successful applicant via lottery. Applying for more than 10 units in heavily oversubscribed IPOs wastes liquidity.'
          }
        },
        {
          num: 3,
          id: 'chap-3-application-report',
          title: 'Checking Application Status: Unverified vs Verified',
          content: 'Under "Application Report" in My ASBA, check the status column. Within a few hours, your bank will verify that your account has sufficient balance and the status changes from "Unverified" to "Verified". If your status shows "Rejected", verify whether your bank balance was below NPR 1,000 or if an incorrect CRN was submitted.',
          callout: {
            type: 'warning',
            title: 'Always Check Before Issue Closes',
            text: 'If your application stays unverified on the final day, contact your bank branch immediately to prevent disqualification from the lottery.'
          }
        },
        {
          num: 4,
          id: 'chap-4-allotment-result',
          title: 'Checking Allotment Results & Refund Release',
          content: 'Once the issue manager conducts the formal allotment lottery, results are uploaded to MeroShare, iporesult.cdsc.com.np, and the issue manager’s portal. Under My ASBA -> Application Report -> Action -> View Report, you will see either "Allotted: 10" or "Not Allotted: 0". If allotted, NPR 1,000 is debited from your bank and 10 shares appear in your Demat account within 3 to 7 business days. If unallotted, the blocked funds are automatically unfrozen by your bank within 24 to 48 hours.',
          callout: {
            type: 'tip',
            title: 'Instant Lottery Check',
            text: 'Use iporesult.cdsc.com.np by entering the 16-digit BOID to view allotment results instantly without logging in during peak server load.'
          }
        },
        {
          num: 5,
          id: 'chap-5-edis',
          title: 'Selling Shares on TMS: My Purchase Source & EDIS',
          content: 'When you sell shares on the secondary market via your broker TMS, you must deliver those shares electronically within T+1 working days. Go to MeroShare -> "My Purchase Source" -> Search for the scrip -> Update and calculate WACC. Then go to "My EDIS" -> "Transfer Shares" -> Select the sold scrip -> Confirm using your 4-digit PIN. Failure to execute EDIS on time results in a mandatory 20% cash closeout penalty charged directly to your broker ledger.',
          callout: {
            type: 'warning',
            title: 'Closeout Fine of 20%',
            text: 'If you fail to transfer shares via EDIS before the clearing deadline, SEBON regulations mandate a 20% fine on the total sale value. Always complete EDIS on the same evening of your sale.'
          }
        },
        {
          num: 6,
          id: 'chap-6-renewals',
          title: 'Annual Demat & MeroShare Online Renewals',
          content: 'Both Demat and MeroShare accounts require annual renewal. Demat costs NPR 100 per fiscal year and MeroShare costs NPR 50 per year. You can renew both online seamlessly via eSewa, Khalti, connectIPS, or IME Pay. If you forget to renew before Ashadh end, your MeroShare account will be temporarily frozen until the fee is paid.',
          callout: {
            type: 'tip',
            title: 'Multi-Year Renewal',
            text: 'You can pay for up to 5 years in advance on eSewa or Khalti to prevent accidental account suspension.'
          }
        }
      ],
            comparisonTable: {
        title: 'MeroShare C-ASBA Online Application vs Legacy Physical Bank ASBA',
        caption: 'Operational comparison for applying to primary market IPOs under SEBON directives',
        headers: ['Metric / Feature', 'MeroShare C-ASBA Online', 'Old Physical Bank ASBA'],
        rows: [
          ['Application Method', '100% Online via meroshare.cdsc.com.np', 'Physical paper form at bank branch counter'],
          ['Submission Time', 'Under 45 seconds anytime (24/7)', '2 - 3 hours waiting in bank physical queues'],
          ['C-ASBA Processing Fee', 'NPR 0 to NPR 5 max per application', 'NPR 10 to NPR 25 per application (historical)'],
          ['Balance Verification', 'Automated instant bank lien block', 'Manual bank verification & manual paper stamping'],
          ['Refund / Unblock Speed', 'Automatic instant unblock upon allotment', '3 to 7 working days manual bank unfreeze'],
          ['EDIS & WACC Integration', 'Seamless 1-click transfer to broker', 'Physical signed transfer slip needed at DP']
        ]
      },
      nepalContext: 'CDSC operates under the Central Depository Services Regulations 2067 as the national depository of Nepal. Every transaction on NEPSE is dematerialized and electronically cleared through CDSC and its network of Depository Participants across all 77 districts.',
      practicalScenario: {
        persona: 'Aarav, 22, Engineering Student in Pokhara',
        challenge: 'Aarav wanted to invest his festival cash gift of NPR 3,000 into the stock market but thought he needed lakhs of rupees and complicated paperwork.',
        solution: 'Aarav opened a free student Demat account at his commercial bank, received his CRN in 1 day, logged into MeroShare, and applied for 3 separate hydropower and manufacturing IPOs (NPR 1,000 each). He was allotted 10 shares in one company, which grew from NPR 1,000 par value to NPR 4,800 on NEPSE within 6 months.'
      },
      calculatorShortcut: {
        slug: 'nepse-share',
        name: 'NEPSE Share & CGT Calculator',
        desc: 'Calculate broker commission, SEBON fees, DP charges, and net sales receivable for your shares.'
      },
      downloadableResources: [
        {
          title: 'First-Time NEPSE Investor Checklist',
          type: 'PDF Checklist',
          size: '320 KB',
          href: '/resources/nepse-beginner-guide'
        }
      ],
      faqs: [
        {
          q: 'What is the minimum bank balance required to apply for an IPO in Nepal?',
          a: 'You only need the exact application amount (usually NPR 1,000 for 10 units at NPR 100 face value). Many banks have zero application processing fees.'
        },
        {
          q: 'Can I apply for the same IPO from two different bank accounts?',
          a: 'No. Applications are tracked by your single 16-digit Demat BOID number. Submitting multiple applications under the same Demat will disqualify all your entries.'
        },
        {
          q: 'What should I do if my IPO application status shows Rejected?',
          a: 'Check with your bank to verify if your CRN was entered correctly and ensure your account had at least NPR 1,000 in unblocked balance.'
        },
        {
          q: 'How do I transfer shares after selling on TMS?',
          a: 'Log into MeroShare -> My Purchase Source -> Update WACC -> Go to My EDIS -> Transfer Shares -> Confirm with PIN before 6:00 PM on T+1 day.'
        }
      ],
      whereToGoNext: {
        nextLesson: { title: 'What is an IPO? Primary Shares in Nepal', slug: 'what-is-an-ipo', categorySlug: 'nepse', readTime: '10 min read' },
        nextGuide: { title: 'Complete NEPSE TMS Trading Guide', slug: 'complete-tms-guide', readTime: '15 min read' },
        nextCalculator: { title: 'NEPSE Commission & Net Payout Calculator', slug: 'nepse-share' },
        nextGlossary: { title: 'MeroShare Portal & CDSC', term: 'MeroShare (मेरोसेयर)', def: 'The official digital web platform provided by CDSC for applying for IPOs, reviewing Demat, and EDIS transfer.' }
      }
    },
    np: {
      intro: 'मेरोसेयर (MeroShare) नेपाल स्टक एक्सचेन्ज (NEPSE) को सहायक कम्पनी सिडिएस एण्ड क्लियरिङ लिमिटेड (CDSC) द्वारा सञ्चालित अनलाइन पोर्टल हो। यसको माध्यमबाट नेपाली नागरिकहरूले घरमै बसीबसी साधारण सेयर (IPO), हकप्रद सेयर र ऋणपत्रमा C-ASBA मार्फत आवेदन दिन, आफ्नो डिम्याट खातामा रहेका सेयरहरू हेर्न, दोस्रो बजारमा बिक्री गरिएका सेयरहरू हस्तान्तरण (EDIS) गर्न र भारित औसत लागत (WACC) हिसाब गर्न सक्छन्।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-access',
          title: 'लगइन र प्रारम्भिक सेटअप (DP, Username र PIN)',
          content: 'meroshare.cdsc.com.np वा मोबाइल एप खोल्नुहोस्। आफ्नो DP (बैंक वा ब्रोकर) छनोट गरी बैंकबाट प्राप्त प्रयोगकर्ता नाम र पासवर्ड राख्नुहोस्। पहिलो पटक लगइन गर्दा ४ अङ्कको गोप्य ट्रान्ज्याक्सन PIN र नयाँ पासवर्ड बनाउनुपर्छ। यही ४ अङ्कको PIN हरेक पटक IPO भर्दा र सेयर बेचेपछि EDIS गर्दा चाहिन्छ।',
          callout: {
            type: 'important',
            title: 'CRN नम्बर बैंकबाट लिनुपर्छ',
            text: 'C-ASBA दर्ता नम्बर (CRN) आफ्नो बैंकको मोबाइल बैंकिङबाट वा शाखामा गएर लिनुपर्छ। CRN बिना MeroShare बाट सेयर भर्न मिल्दैन।'
          }
        },
        {
          num: 2,
          id: 'chap-2-apply-ipo',
          title: 'My ASBA बाट IPO भर्ने चरणबद्ध तरिका',
          content: 'बायाँ साइडबारमा रहेको "My ASBA" मा जानुहोस्। "Apply for Issue" मा हाल निष्कासन भइरहेका कम्पनीहरूको सूची देखिन्छ। कम्पनीको नाम छेउको "Apply" मा क्लिक गर्नुहोस्। बैंक खाता छान्नुहोस्, कित्ता संख्या (न्यूनतम १० कित्ता = रु. १,०००) लेख्नुहोस्, CRN नम्बर हाल्नुहोस् र Apply गर्नुहोस्। ४ अङ्कको PIN हानेपछि बैंक खातामा रु. १,००० रोक्का (Freeze) हुन्छ। बाँडफाँड नभएसम्म पैसा काटिँदैन।',
          callout: {
            type: 'tip',
            title: '१० कित्ता नियम',
            text: 'नेपालमा धितोपत्र बोर्डको नियम अनुसार गोलाप्रथाबाट प्रतिव्यक्ति १० कित्ता बाँडफाँड गरिन्छ। धेरै आवेदन पर्ने कम्पनीमा १० कित्ताभन्दा बढी भर्नु पैसा अड्काउनु मात्र हो।'
          }
        },
        {
          num: 3,
          id: 'chap-3-application-report',
          title: 'आवेदनको स्थिति हेर्ने: Unverified र Verified',
          content: 'My ASBA भित्र "Application Report" मा जानुहोस्। बैंकले खातामा रकम भए नभएको जाँच गरेपछि केही घण्टामा "Unverified" बाट "Verified" मा परिणत हुन्छ। यदि "Rejected" देखायो भने बैंक खातामा रकम अपुग भएको वा CRN गल्ती भएको हुन सक्छ।',
          callout: {
            type: 'warning',
            title: 'अन्तिम दिन अगावै जाँच्नुहोस्',
            text: 'म्याद सकिने दिनसम्म पनि Unverified रहेमा तत्काल बैंकमा सम्पर्क गर्नुहोस् ताकि गोलाप्रथाबाट नाम नहटोस्।'
          }
        },
        {
          num: 4,
          id: 'chap-4-allotment-result',
          title: 'IPO नतिजा हेर्ने र रकम फुकुवा',
          content: 'बाँडफाँडपछि My ASBA -> Application Report -> Action मा गई नतिजा हेर्न सकिन्छ। सेयर परेको भए "Allotted: 10" देखिन्छ र खाताबाट रु. १,००० काटिन्छ। नपरेको भए "Not Allotted: 0" देखिन्छ र रोक्का भएको रकम २४ देखि ४८ घण्टाभित्र बैंकले फुकुवा (Unfreeze) गरिदिन्छ।',
          callout: {
            type: 'tip',
            title: 'छिटो नतिजा हेर्ने तरिका',
            text: 'सर्भर व्यस्त हुँदा iporesult.cdsc.com.np मा गएर आफ्नो १६ अङ्कको BOID हानेर सिधै नतिजा हेर्न सकिन्छ।'
          }
        },
        {
          num: 5,
          id: 'chap-5-edis',
          title: 'सेयर बिक्रीपछि EDIS र WACC हिसाब',
          content: 'ब्रोकर TMS मार्फत सेयर बेचेपछि T+1 दिनभित्र सेयर हस्तान्तरण गर्नुपर्छ। MeroShare को "My Purchase Source" मा गई WACC गणना गर्नुहोस् र "My EDIS" मा गई सेयर ट्रान्सफर स्वीकृत गर्नुहोस्। समयमै EDIS नगरेमा बिक्री रकमको २०% नगद जरिवाना (Closeout Fine) तिर्नुपर्ने हुन्छ।',
          callout: {
            type: 'warning',
            title: '२०% जरिवानाबाट बच्नुहोस्',
            text: 'सेयर बेचेकै दिन साँझ MeroShare खोलेर My Purchase Source र EDIS सम्पन्न गर्नुहोस्।'
          }
        },
        {
          num: 6,
          id: 'chap-6-renewals',
          title: 'Demat र MeroShare वार्षिक नवीकरण',
          content: 'Demat को वार्षिक रु. १०० र MeroShare को वार्षिक रु. ५० शुल्क लाग्छ। eSewa, Khalti, connectIPS वा IME Pay बाट घरमै बसेर ५ वर्षसम्मको शुल्क एकैपटक तिर्न सकिन्छ। समयमा नतिरे MeroShare रोक्का हुन्छ।',
          callout: {
            type: 'tip',
            title: 'अग्रिम भुक्तानी',
            text: 'असार मसान्त अगावै eSewa वा Khalti बाट ५ वर्षको नवीकरण शुल्क एकैपटक तिर्नु उत्तम हुन्छ।'
          }
        }
      ],
            comparisonTable: {
        title: 'मेरोसेयर C-ASBA अनलाइन र पुरानो कागजी फारामबीच तुलना',
        caption: 'नेपालमा प्राथमिक सेयर (IPO) आवेदन प्रणालीको तुलनात्मक विश्लेषण',
        headers: ['मापदण्ड / सुविधा', 'MeroShare C-ASBA (अनलाइन)', 'पुरानो कागजी ASBA (काउन्टर)'],
        rows: [
          ['आवेदन प्रक्रिया', 'meroshare.cdsc.com.np बाट २४ सै घण्टा', 'बैंक काउन्टरमै पुगेर कागजी फाराम भर्नुपर्ने'],
          ['लाग्ने समय', '४५ सेकेन्डभित्र घरमै बसेर', '२ देखि ३ घण्टासम्म लामो लाइनमा बस्नुपर्ने'],
          ['बैंक सेवा शुल्क', 'रु. ० देखि अधिकतम रु. ५ प्रति आवेदन', 'प्रति आवेदन रु. १० देखि रु. २५ सम्म'],
          ['रकम रोक्का प्रक्रिया', 'सिस्टमबाट तत्काल स्वचालित रोक्का (Lien)', 'बैंक कर्मचारीबाट हस्तलिखित रुजु'],
          ['रकम फुकुवा (Unfreeze)', 'बाँडफाँड भएकै दिन स्वचालित फुकुवा', '३ देखि ७ दिनसम्म बैंक धाउनुपर्ने बाध्यता'],
          ['EDIS र WACC सुविधा', 'अनलाइनबाटै एक क्लिकमा ब्रोकरलाई सेयर', 'ब्रोकर कार्यालय पुगेर कागजी DIS बुझाउनुपर्ने']
        ]
      },
      nepalContext: 'नेपालमा सिडिएससीको केन्द्रीय निक्षेप प्रणाली मार्फत देशका ७७ वटै जिल्लाका नागरिकहरूले बैंकिङ प्रणालीबाट सेयर खरिदबिक्री र सुरक्षित अभिलेख राख्न सक्छन्।',
      practicalScenario: {
        persona: 'आरव, २२, पोखराका इन्जिनियरिङ विद्यार्थी',
        challenge: 'आरवले दशैंको दक्षिणाबाट बचेको रु. ३,००० सेयरमा लगानी गर्न चाहेका थिए तर लाखौँ रकम र कागजी झन्झट लाग्ने ठानेका थिए।',
        solution: 'आरवले बैंकमा निःशुल्क विद्यार्थी डिम्याट खोले, MeroShare लगइन लिएर ३ वटा जलविद्युत कम्पनीको IPO मा रु. १,००० का दरले भरे। एउटा कम्पनीमा १० कित्ता पर्यो र ६ महिनाभित्रै रु. १,००० को सेयर बढेर रु. ४,८०० पुग्यो।'
      },
      calculatorShortcut: {
        slug: 'nepse-share',
        name: 'NEPSE सेयर कारोबार तथा पुँजीगत लाभकर',
        desc: 'ब्रोकर कमिसन, SEBON शुल्क, DP शुल्क र ५% वा ७.५% पुँजीगत लाभकर (CGT) को विस्तृत हिसाब।'
      },
      downloadableResources: [
        {
          title: 'पहिलो पटक NEPSE मा लगानी गर्नेहरूको चेकलिस्ट',
          type: 'PDF Checklist',
          size: '320 KB',
          href: '/resources/nepse-beginner-guide'
        }
      ],
      faqs: [
        {
          q: 'नेपालमा IPO भर्न बैंक खातामा कति रकम चाहिन्छ?',
          a: '१० कित्ताका लागि रु. १,००० मात्र भए पुग्छ। अधिकांश बैंकहरूले C-ASBA शुल्क लिँदैनन्।'
        },
        {
          q: 'एउटै व्यक्तिको दुईवटा बैंकबाट एउटै IPO भर्न मिल्छ?',
          a: 'मिल्दैन। आवेदन डिम्याटको १६ अङ्कको BOID बाट ट्र्याक हुन्छ। दोहोरो आवेदन दिएमा सबै आवेदन रद्द हुन्छन्।'
        },
        {
          q: 'IPO आवेदन Rejected भएमा के गर्ने?',
          a: 'आफ्नो बैंकमा सम्पर्क गरी CRN नम्बर र खाताको मौज्दात रु. १,००० भन्दा बढी छ कि छैन जाँच्नुहोस्।'
        },
        {
          q: 'सेयर बेचेपछि कहिलेसम्म EDIS गर्नुपर्छ?',
          a: 'सेयर बेचेको भोलिपल्ट (T+1) साँझ ६ बजेभित्र MeroShare मा गई EDIS गरिसक्नुपर्छ।'
        }
      ],
      whereToGoNext: {
        nextLesson: { title: 'प्राथमिक सेयर (IPO) को पूर्ण जानकारी', slug: 'what-is-an-ipo', categorySlug: 'nepse', readTime: '१० मिनेट पढाइ' },
        nextGuide: { title: 'NEPSE अनलाइन TMS ट्रेडिङ गाइड', slug: 'complete-tms-guide', readTime: '१५ मिनेट पढाइ' },
        nextCalculator: { title: 'NEPSE ब्रोकर कमिसन र लाभकर हिसाब', slug: 'nepse-share' },
        nextGlossary: { title: 'मेरोसेयर (MeroShare)', term: 'MeroShare (मेरोसेयर)', def: 'CDSC द्वारा सञ्चालित अनलाइन पोर्टल जसबाट IPO भर्न, सेयर ट्र्याक गर्न र बिक्रीपछि EDIS गर्न सकिन्छ।' }
      }
    }
  },

  'complete-sip-guide': {
    id: 'complete-sip-guide',
    slug: 'complete-sip-guide',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    title: { en: 'Complete Systematic Investment Plan (SIP) Guide for Nepal', np: 'नेपालमा Systematic Investment Plan (SIP) को पूर्ण कर्नरस्टोन गाइड' },
    oneLineSummary: {
      en: 'How to build multi-lakh compounding wealth in Nepal through open-ended mutual funds with as little as NPR 1,000 per month without market timing stress.',
      np: 'मासिक रु. १,००० बाट खुलामुखी Mutual Fund मा नियमित लगानी गरी बजारको उतारचढावको चिन्ता नगरी दीर्घकालीन सम्पत्ति निर्माण गर्ने विधि।'
    },
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '11 min read', np: '११ मिनेट पढाइ' },
    sectionsCount: 7,
    updatedDate: 'Recent / Sep 2026',
    author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
    reviewedBy: { en: 'Verified for Nepal Mutual Fund Regulation Compliance', np: 'सामूहिक लगानी कोष नियमावली अनुसार प्रमाणित' },
    prerequisites: [
      { title: 'Demat Account with any licensed Bank or Merchant Bank', type: 'Prerequisite' },
      { title: 'connectIPS or Digital Wallet for Automated Monthly Debits', type: 'Prerequisite' }
    ],
    en: {
      intro: 'A Systematic Investment Plan (SIP) is an investment mechanism that allows retail individuals to invest a fixed sum of money at regular intervals (monthly or quarterly) into open-ended mutual fund schemes in Nepal. Instead of trying to "time the market" or needing millions of rupees to build a diversified equity portfolio, a SIP leverages the mathematical law of Rupee-Cost Averaging: purchasing more units when Net Asset Value (NAV) is low, and fewer units when prices rise. Over 5, 10, and 20 years, reinvested dividends and compound growth create substantial wealth for disciplined Nepali wage earners.',
      chapters: [
        {
          num: 1,
          id: 'chap-1-open-ended',
          title: 'Open-Ended vs Closed-Ended Mutual Funds in Nepal',
          content: 'It is essential to distinguish between closed-ended and open-ended funds. Closed-ended schemes have a fixed maturity (typically 7 to 10 years), a fixed number of units, and trade like stocks on the NEPSE floor. Open-ended schemes, however, have no maturity date and no fixed unit ceiling; you purchase and redeem units directly with the Fund Manager (Merchant Bank) at the prevailing Net Asset Value (NAV). SIPs are run exclusively on open-ended mutual fund schemes.',
          callout: {
            type: 'tip',
            title: 'No Secondary Market Broker Needed',
            text: 'You do not need a stock broker TMS account to start a SIP. You can enroll directly online via merchant bank portals (e.g., NIBL Ace Capital, Siddhartha Capital, Sanima Capital).'
          }
        },
        {
          num: 2,
          id: 'chap-2-rupee-cost-averaging',
          title: 'The Mathematical Power of Rupee-Cost Averaging',
          content: 'Consider an investor putting NPR 5,000 into a mutual fund every month. In month 1, when the NAV is NPR 10, they receive 500 units. In month 2, if the stock market drops and the NAV falls to NPR 8, their NPR 5,000 automatically buys 625 units. In month 3, if the market rallies and NAV rises to NPR 12.50, they receive 400 units. Total units accumulated: 1,525 units for NPR 15,000 invested. Average unit purchase price: NPR 9.83-lower than the average market NAV! You profit from market volatility rather than fearing it.',
          callout: {
            type: 'tip',
            title: 'Volatility is Your Friend in SIP',
            text: 'Bear markets and corrections allow your monthly contribution to scoop up more units at discounted valuations.'
          }
        },
        {
          num: 3,
          id: 'chap-3-schemes-nepal',
          title: 'Top Open-Ended Schemes in Nepal',
          content: 'Several reputed merchant banks manage licensed open-ended schemes approved by SEBON: NIBL Sahabhagita Fund, Siddhartha Systematic Investment Scheme, Sanima Growth Fund, NIC Asia Dynamic Debt Fund, and NMB Saral Bachat Fund. Review audited annual reports, fund management fees (capped at 1.5% by SEBON), portfolio asset allocations (equity vs debentures vs fixed deposits), and historic cash dividend distributions.',
          callout: {
            type: 'important',
            title: 'Expense Ratios Matter',
            text: 'Check the Total Expense Ratio (TER) in quarterly reports. Lower management fees leave more compound returns in your pocket over decades.'
          }
        },
        {
          num: 4,
          id: 'chap-4-drip',
          title: 'Dividend Reinvestment Plan (DRIP) - The Compounding Accelerator',
          content: 'When an open-ended mutual fund declares a cash dividend (e.g., 8% or 10%), you have two choices: receive the cash into your bank account, or opt into the Dividend Reinvestment Plan (DRIP). Under DRIP, your cash dividend is automatically used to purchase additional units at the current NAV without entry loads. This creates compound interest: next year, you earn dividends on your original units PLUS your reinvested units.',
          callout: {
            type: 'tip',
            title: 'Always Select DRIP for Wealth Building',
            text: 'If you do not need immediate living expenses from your portfolio, always select DRIP to let compounding multiply your unit holdings exponentially.'
          }
        },
        {
          num: 5,
          id: 'chap-5-setup',
          title: 'Step-by-Step Online SIP Registration in Nepal',
          content: '1. Visit the merchant bank website (e.g., niblcapital.com, siddharthacapital.com).\\n2. Select "SIP Registration" and enter your 16-digit Demat BOID.\\n3. Choose your scheme, monthly contribution (e.g. NPR 1,000, NPR 3,000, or NPR 10,000), and monthly deduction date (e.g., 5th of every month).\\n4. Opt in for DRIP.\\n5. Link an automatic payment mandate via connectIPS or eSewa.\\nYour SIP is now fully automated-your bank account is debited once a month without manual effort.',
          callout: {
            type: 'tip',
            title: 'Flexibility & Redemption',
            text: 'You can increase your SIP amount, pause contributions without penalty, or redeem your units back to cash at current NAV at any time.'
          }
        }
      ],
      nepalContext: 'Open-ended mutual funds operate under the Mutual Fund Regulations 2067 issued by SEBON. Mutual funds pay zero tax on their investment trades and capital gains under special statutory exemptions, giving retail investors professional fund management and tax efficiency unavailable to individual traders.',
      practicalScenario: {
        persona: 'Sunita, 26, School Teacher in Bhaktapur',
        challenge: 'Sunita could only save NPR 3,000 per month after family expenses. Bank savings was paying 3.5% interest, actively losing value to grocery and school fee inflation.',
        solution: 'Sunita started an automated SIP of NPR 3,000/month with DRIP enabled in an open-ended equity mutual fund. Assuming a conservative 12% annualized return over 15 years, her total contribution of NPR 540,000 compounds into over NPR 1,510,000-providing a massive education nest egg for her children.'
      },
      calculatorShortcut: {
        slug: 'sip',
        name: 'SIP & Compounding Calculator',
        desc: 'Calculate how NPR 1,000 to NPR 25,000 monthly compounds over 5, 10, 15, and 20 years in Nepal.'
      },
      downloadableResources: [
        {
          title: 'Nepal Personal Budget & Expense Planner',
          type: 'Excel Template',
          size: '142 KB',
          href: 'assets/downloads/nepal-personal-budget-planner.csv'
        }
      ],
      faqs: [
        {
          q: 'What is the minimum monthly amount to start a SIP in Nepal?',
          a: 'Most open-ended mutual funds in Nepal accept monthly SIP contributions starting from as low as NPR 1,000 per month.'
        },
        {
          q: 'Can I stop or pause my SIP if I face financial difficulties?',
          a: 'Yes. You can pause or cancel your SIP mandate at any time without any cancellation penalty or fee.'
        },
        {
          q: 'How do I withdraw money from my open-ended mutual fund?',
          a: 'Submit an online redemption request through the merchant bank portal. The units are redeemed at the day’s NAV, and cash is credited directly to your bank account within 2 to 3 business days.'
        }
      ],
      whereToGoNext: {
        nextLesson: { title: 'What is Investing? Foundations of Wealth Creation', slug: 'what-is-investing', categorySlug: 'investing', readTime: '8 min read' },
        nextGuide: { title: 'Complete Nepal Mutual Fund Guide', slug: 'complete-mutual-fund-guide', readTime: '13 min read' },
        nextCalculator: { title: 'Simulate Compound Returns with SIP Calculator', slug: 'sip' },
        nextGlossary: { title: 'Systematic Investment Plan (SIP)', term: 'SIP (Systematic Investment Plan)', def: 'An investment approach where a fixed rupee sum is deposited into open-ended mutual funds every month.' }
      }
    },
    np: {
      intro: 'Systematic Investment Plan (SIP) भनेको निश्चित समयको अन्तरालमा (मासिक वा त्रैमासिक) खुलामुखी म्युचुअल फण्डमा तोकिएको रकम नियमित रूपमा लगानी गर्ने विधि हो। बजार कहिले घट्छ वा कहिले बढ्छ भनेर चिन्ता लिनुको सट्टा SIP ले Rupee-Cost Averaging को गणितीय नियम अनुसार काम गर्छ: बजार घट्दा धेरै इकाई (Units) र बजार बढ्दा थोरै इकाई किनिन्छ। १० देखि २० वर्षमा चक्रवृद्धिको शक्तिले सानो मासिक बचतबाट पनि ठूलो सम्पत्ति निर्माण हुन्छ।',
      chapters: [
        {
          num: 1,
          id: 'chap-1-open-ended',
          title: 'खुलामुखी र बन्दमुखी Mutual Fund बीचको भिन्नता',
          content: 'बन्दमुखी योजना (Closed-Ended) को निश्चित ७ देखि १० वर्षको अवधि हुन्छ र सामान्य सेयर जस्तै NEPSE मा किनबेच हुन्छ। खुलामुखी योजना (Open-Ended) को कुनै निश्चित म्याद हुँदैन, यसका इकाईहरू सिधै फण्ड म्यानेजर (मर्चेन्ट बैंक) बाट हालको खुद सम्पत्ति मूल्य (NAV) मा किनबेच गरिन्छ। SIP खुलामुखी योजनामा मात्र सञ्चालन हुन्छ।',
          callout: {
            type: 'tip',
            title: 'ब्रोकर खाता चाहिँदैन',
            text: 'SIP सुरु गर्न दोस्रो बजारको ब्रोकर TMS चाहिँदैन। मर्चेन्ट बैंकको वेबसाइटबाट सिधै अनलाइन दर्ता गर्न सकिन्छ।'
          }
        },
        {
          num: 2,
          id: 'chap-2-rupee-cost-averaging',
          title: 'Rupee-Cost Averaging को गणितीय जादु',
          content: 'यदि तपाईंले मासिक रु. ५,००० लगानी गर्नुभयो: पहिलो महिना NAV रु. १० हुँदा ५०० कित्ता पाइन्छ। दोस्रो महिना बजार घटेर NAV रु. ८ हुँदा रु. ५,००० ले ६२५ कित्ता किनिन्छ। तेस्रो महिना बजार बढेर NAV रु. १२.५ हुँदा ४०० कित्ता पाइन्छ। कुल रु. १५,००० मा १,५२५ कित्ता जम्मा भयो र औसत खरिद लागत प्रति कित्ता रु. ९.८३ मात्र पर्यो। बजार घट्नु नै SIP का लागि वरदान साबित हुन्छ।',
          callout: {
            type: 'tip',
            title: 'बजार घट्दा फाइदा',
            text: 'बजार घट्दा तपाईंको मासिक रकमले सस्तो मूल्यमा धेरै कित्ता खरिद गर्छ।'
          }
        },
        {
          num: 3,
          id: 'chap-3-schemes-nepal',
          title: 'नेपालका प्रमुख खुलामुखी योजनाहरू',
          content: 'NIBL सहभागिता फण्ड, सिद्धार्थ सिस्टेमेटिक इन्भेष्टमेन्ट स्किम, सानिमा ग्रोथ फण्ड, एनआइसी एशिया डाइनामिक डेप्ट फण्ड र एनएमबि सरल बचत फण्ड नेपालमा सञ्चालित प्रमुख योजनाहरू हुन्। व्यवस्थापन शुल्क (अधिकतम १.५%), लगानी विविधीकरण र विगतको लाभांश इतिहास हेरेर योजना छनोट गर्नुपर्छ।',
          callout: {
            type: 'important',
            title: 'व्यवस्थापन शुल्क (Expense Ratio)',
            text: 'कम व्यवस्थापन खर्च भएका योजनाहरूले लामो अवधिमा लगानीकर्तालाई धेरै प्रतिफल दिन्छन्।'
          }
        },
        {
          num: 4,
          id: 'chap-4-drip',
          title: 'लाभांश पुनःलगानी योजना (DRIP)',
          content: 'फण्डले नगद लाभांश घोषणा गर्दा सो रकम बैंक खातामा लिनुको सट्टा पुनः थप इकाई किन्न प्रयोग गरिने प्रणालीलाई DRIP भनिन्छ। यसले गर्दा चक्रवृद्धिको गति तीव्र हुन्छ र अर्को वर्ष पुरानो र नयाँ थपिएका दुवै इकाईमा लाभांश प्राप्त हुन्छ।',
          callout: {
            type: 'tip',
            title: 'DRIP रोज्नुहोस्',
            text: 'यदि तत्काल पैसा खर्च गर्नुपर्ने आवश्यकता छैन भने सधैँ DRIP विकल्प रोजेर लगानी बढाउनुहोस्।'
          }
        },
        {
          num: 5,
          id: 'chap-5-setup',
          title: 'अनलाइन SIP दर्ता गर्ने तरिका',
          content: '१. मर्चेन्ट बैंकको वेबसाइट खोल्नुहोस्।\\n२. "SIP Registration" मा गई आफ्नो १६ अङ्कको Demat BOID हाल्नुहोस्।\\n३. मासिक रकम (रु. १,००० वा रु. ३,०००) र महिनाको मिति छान्नुहोस्।\\n४. DRIP विकल्पमा टिक लगाउनुहोस्।\\n५. connectIPS वा eSewa बाट अटो-पेमेन्ट म्यान्डेट स्वीकृत गर्नुहोस्।\\nअब हरेक महिना बैंकबाट तोकिएको रकम आफैँ कट्टी भई इकाईहरू थपिँदै जान्छन्।',
          callout: {
            type: 'tip',
            title: 'रकम झिक्ने सुविधा',
            text: 'आवश्यक परेको बेला कुनै पनि दिन अनलाइनबाट इकाई बिक्री गरी २-३ दिनमै बैंक खातामा पैसा फिर्ता लिन सकिन्छ।'
          }
        }
      ],
      nepalContext: 'धितोपत्र बोर्डको सामूहिक लगानी कोष नियमावली २०६७ अनुसार सञ्चालित म्युचुअल फण्डहरूले लगानीमा कर छुट पाउँछन्, जसले गर्दा सर्वसाधारणले सानो पुँजीबाट पनि व्यावसायिक व्यवस्थापनको फाइदा पाउँछन्।',
      practicalScenario: {
        persona: 'सुनिता, २६, भक्तपुरकी शिक्षिका',
        challenge: 'सुनिताले मासिक रु. ३,००० मात्र बचत गर्न सक्थिन्। बैंकको बचत खातामा ३.५% ब्याज आउँथ्यो जसले महँगी धान्न सक्दैनथ्यो।',
        solution: 'सुनिताले खुलामुखी Mutual Fund मा DRIP सहित मासिक रु. ३,००० को SIP सुरु गरिन्। वार्षिक १२% औसत प्रतिफलका आधारमा १५ वर्षमा उनको रु. ५,४०,००० लगानी बढेर रु. १५ लाख १० हजारभन्दा बढी पुग्यो।'
      },
      calculatorShortcut: {
        slug: 'sip',
        name: 'SIP & Compounding Calculator',
        desc: 'नेपालमा मासिक नियमित लगानी (SIP) र मुद्रास्फीति समायोजनपछिको कुल प्रतिफल हिसाब गर्नुहोस्।'
      },
      downloadableResources: [
        {
          title: 'नेपाल व्यक्तिगत बजेट तथा खर्च प्लानर',
          type: 'Excel Template',
          size: '142 KB',
          href: 'assets/downloads/nepal-personal-budget-planner.csv'
        }
      ],
      faqs: [
        {
          q: 'नेपालमा SIP सुरु गर्न न्यूनतम कति रकम चाहिन्छ?',
          a: 'अधिकांश खुलामुखी फण्डहरूमा मासिक न्यूनतम रु. १,००० बाटै SIP सुरु गर्न सकिन्छ।'
        },
        {
          q: 'पैसा अभाव भएमा के बीचमै SIP रोक्न मिल्छ?',
          a: 'मिल्छ। कुनै पनि जरिवाना बिना आफूले चाहेको बेला SIP रोक्न वा पुनः सुरु गर्न सकिन्छ।'
        },
        {
          q: 'आवश्यक पर्दा पैसा कसरी झिक्ने?',
          a: 'मर्चेन्ट बैंकको पोर्टलमा गई "Redemption" फाराम भरेपछि २-३ कार्यदिनभित्र सोझै बैंक खातामा पैसा जम्मा हुन्छ।'
        }
      ],
      whereToGoNext: {
        nextLesson: { title: 'लगानी के हो? सम्पत्ति निर्माणको जग', slug: 'what-is-investing', categorySlug: 'investing', readTime: '८ मिनेट पढाइ' },
        nextGuide: { title: 'नेपालका Mutual Fund हरूको पूर्ण गाइड', slug: 'complete-mutual-fund-guide', readTime: '१३ मिनेट पढाइ' },
        nextCalculator: { title: 'SIP Calculator बाट चक्रवृद्धि हिसाब हेर्नुहोस्', slug: 'sip' },
        nextGlossary: { title: 'SIP (Systematic Investment Plan)', term: 'SIP (Systematic Investment Plan)', def: 'खुलामुखी Mutual Fund मा प्रत्येक महिना तोकिएको निश्चित रकम नियमित रूपमा लगानी गर्ने विधि।' }
      }
    }
  }
,
  'complete-tms-guide': {
      "id": "complete-tms-guide",
      "slug": "complete-tms-guide",
      "categorySlug": "nepse",
      "categoryName": {
          "en": "NEPSE & Stocks",
          "np": "NEPSE तथा सेयर"
      },
      "title": {
          "en": "Complete NEPSE Online TMS Trading Guide for Nepal",
          "np": "NEPSE अनलाइन TMS ट्रेडिङको पूर्ण व्यावहारिक गाइड"
      },
      "oneLineSummary": {
          "en": "The definitive handbook for selecting a broker, online TMS KYC registration, loading collateral via connectIPS, placing limit orders, and completing T+2 settlement without closeout penalties.",
          "np": "ब्रोकर छनोट, अनलाइन TMS खाता खोल्ने, connectIPS बाट कोलेटरल लोड गर्ने, Buy/Sell अर्डर हाल्ने र २०% क्लोजआउट जरिवाना बिना T+2 राफसाफ गर्ने पूर्ण विधि।"
      },
      "difficulty": {
          "en": "Intermediate",
          "np": "मध्यम"
      },
      "readTime": {
          "en": "15 min read",
          "np": "१५ मिनेट पढाइ"
      },
      "sectionsCount": 7,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa Market Research Desk",
          "np": "risePaisa बजार अनुसन्धान टोली"
      },
      "reviewedBy": {
          "en": "Verified under SEBON Securities Trading Directives",
          "np": "नेपाल धितोपत्र बोर्ड (SEBON) को नियम अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Active Demat Account (16-digit BOID)",
              "type": "Prerequisite"
          },
          {
              "title": "Verified MeroShare Account",
              "type": "Prerequisite"
          },
          {
              "title": "connectIPS Account linked to Commercial Bank",
              "type": "Payment Method"
          },
          {
              "title": "Permanent Account Number (PAN)",
              "type": "Document"
          }
      ],
      "en": {
          "intro": "The Nepal Stock Exchange (NEPSE) Trade Management System (TMS) is the centralized web portal that connects retail investors to licensed stockbrokers (Broker 1 through Broker 90+). Prior to TMS, stock trading in Nepal required physical visits to broker offices and manual paper slips. Today, investors can deposit collateral, view live market depth, execute buy and sell orders, and manage trade settlements directly from their laptop or smartphone.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-broker-selection",
                  "title": "Selecting a Stockbroker & Online Registration",
                  "content": "Nepal currently has over 80 licensed stockbrokers regulated by the Securities Board of Nepal (SEBON). When choosing a broker, prioritize customer service responsiveness, prompt collateral refunds, and efficient payout cycles. You can apply for a new TMS account 100% online through the respective broker's portal (e.g., nepsealpha.com/tms-links). Provide your Citizenship scan, PAN, 16-digit Demat BOID, bank account details with a cancelled cheque, and an emergency contact. Upon verification (typically 24-48 business hours), your client code and temporary TMS login credentials will be emailed to you.",
                  "callout": {
                      "type": "tip",
                      "title": "Pro Tip for Faster Approval",
                      "text": "Ensure your full name, father's name, and citizenship number match exactly across your Bank, Demat, and TMS applications to prevent automated rejection."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-collateral",
                  "title": "Loading & Managing Trading Collateral via connectIPS",
                  "content": "Under SEBON regulations, brokers enforce a risk-management margin. Before placing any buy order on TMS, you must deposit collateral. Navigate to 'Fund Management' -> 'Collateral Management' -> 'Load Collateral'. Select connectIPS or bank transfer, input the desired rupee amount, and authenticate. Once approved, TMS grants you a buying power typically equal to 1:1 or up to 1:4 of your cash collateral depending on broker margin policies. Remember: Collateral is not a payment for shares; it is a security deposit that frees up buying limit.",
                  "callout": {
                      "type": "important",
                      "title": "Collateral vs Final Trade Payment",
                      "text": "Loading collateral does NOT pay for the shares you buy. After your buy order executes, you must separately settle the net purchase amount via connectIPS or fund transfer within the T+2 window."
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-market-depth",
                  "title": "Reading Market Depth & Top 5 Buy/Sell Queues",
                  "content": "On the TMS dashboard, opening the Market Depth (बजार गहिराइ) window for any listed stock reveals the top 5 buy bids and top 5 sell asks in real time. The 'Total Buy Quantity' versus 'Total Sell Quantity' ratio acts as an immediate gauge of institutional demand and retail supply. Never place an order blindly based on the Last Traded Price (LTP); always inspect the bid-ask spread to avoid overpaying during illiquid market sessions.",
                  "callout": {
                      "type": "tip",
                      "title": "Spread Awareness",
                      "text": "In thinly traded debentures or small-cap hydro stocks, the gap between the highest buyer and lowest seller can be 2-3%. Always use limit orders to control execution price."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-order-types",
                  "title": "Order Types: Limit vs Market & Validity (Day/IOC)",
                  "content": "When placing an order in TMS, you specify Order Type (Limit Order is strongly recommended, where you set your maximum buy or minimum sell price), Quantity (number of shares in multiples of 10 for regular market), and Validity (Day Order remains active until market closes at 3:00 PM; Immediate or Cancel / IOC cancels unfulfilled units immediately). During the Pre-Open Session (10:30 AM - 10:45 AM), orders determine the opening price within a +/- 5% range.",
                  "callout": {
                      "type": "warning",
                      "title": "Odd-Lot Market",
                      "text": "If you hold fewer than 10 shares (e.g., from bonus share fractional allocations), you must trade them in the dedicated Odd-Lot session between 10:30 AM and 10:45 AM or during continuous trading under Odd-Lot order selection."
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-circuit-breakers",
                  "title": "Circuit Breakers, Price Bands & Trading Halts",
                  "content": "To prevent panic selling and speculative mania, NEPSE enforces strict circuit breaker rules on both the index and individual scrips. An individual stock cannot fluctuate by more than +/- 10% from its previous day closing price. For the overall NEPSE index: a 4% movement in the first hour halts trading for 20 minutes; a 5% movement in the second hour halts for 40 minutes; and a 6% movement at any time halts trading for the remainder of the trading day.",
                  "callout": {
                      "type": "important",
                      "title": "10% Daily Stock Cap",
                      "text": "Orders outside the +/- 10% daily upper and lower price bands are automatically rejected by the NEPSE matching engine."
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-settlement-edis",
                  "title": "The T+2 Settlement Cycle & Mandatory EDIS Deadlines",
                  "content": "NEPSE operates strictly on a T+2 settlement cycle (Trade Day + 2 clearing business days). When you sell shares, the shares must be electronically transferred from your Demat account to the clearing house (CDSC) via MeroShare EDIS (Electronic Depository Information System). Log into MeroShare, navigate to 'Purchase Source' (calculate WACC and holding period), then open 'EDIS' -> 'Transfer Shares', select the sold trade batch, and confirm with your 4-digit PIN before 10:00 AM on T+1 day.",
                  "callout": {
                      "type": "warning",
                      "title": "The 20% Closeout Penalty Trap",
                      "text": "If you fail to execute EDIS on time, or if you sell shares that are locked in pledge or not in your Demat, CDSC triggers an automated Closeout. You will be penalized a non-negotiable 20% penalty on the total trade value, deducted straight from your bank payout!"
                  }
              },
              {
                  "num": 7,
                  "id": "chap-7-fees-cgt",
                  "title": "Complete Fee Breakdown: Brokerage, SEBON & CGT",
                  "content": "Every trade on NEPSE includes statutory costs. Broker commissions range on a declining tiered scale: 0.40% for trades up to NPR 50,000; 0.37% from 50k to 5 Lakhs; 0.34% from 5 Lakhs to 20 Lakhs; 0.30% from 20 Lakhs to 1 Crore; and 0.24% above 1 Crore. In addition, SEBON levies a regulatory charge of 0.015%, and DP charges NPR 25 per transaction. On profitable sales, Capital Gains Tax (CGT) is deducted: 5% for holdings held over 365 days (Long-Term), and 7.5% for holdings held for 365 days or less (Short-Term).",
                  "callout": {
                      "type": "tip",
                      "title": "Hold for 366 Days to Save Tax",
                      "text": "Selling a stock after 1 year drops your Capital Gains Tax rate by 33% (from 7.5% down to 5.0%), preserving substantial profit on long-term compounders."
                  }
              }
          ],
                  "comparisonTable": {
          "title": "NEPSE Broker Commission Slabs & Transaction Cost Structure",
          "caption": "Statutory transaction friction governed by SEBON broker fee guidelines",
          "headers": ["Transaction Amount Slab", "Broker Commission Rate", "SEBON Fee", "CDSC DP Charge"],
          "rows": [
            ["Up to NPR 50,000", "0.40% of trade value", "0.015%", "NPR 25 per sell order company"],
            ["NPR 50,001 to NPR 5,00,000", "0.37% of trade value", "0.015%", "NPR 25 per sell order company"],
            ["NPR 5,00,001 to NPR 20,00,000", "0.34% of trade value", "0.015%", "NPR 25 per sell order company"],
            ["NPR 20,00,001 to NPR 1 Crore", "0.30% of trade value", "0.015%", "NPR 25 per sell order company"],
            ["Above NPR 1 Crore", "0.24% of trade value", "0.015%", "NPR 25 per sell order company"]
          ]
        },
        "nepalContext": "Governed by the Securities Act 2063 and overseen by SEBON and NEPSE. All transactions are routed through CDSC clearing banks with connectIPS integration.",
          "practicalScenario": {
              "persona": "Saurav, 26, Software Engineer in Lalitpur",
              "challenge": "Wanted to purchase 150 units of commercial bank shares on NEPSE without overpaying or missing the settlement window.",
              "solutionText": "Saurav loaded NPR 40,000 collateral via connectIPS, placed a Limit Buy Order at NPR 245 when LTP was NPR 248, saved NPR 450 on execution, and settled his net dues via connectIPS within 24 hours."
          },
          "calculatorShortcut": {
              "slug": "nepse-share",
              "name": "NEPSE Share & CGT Calculator",
              "desc": "Calculate broker commission, SEBON fees, DP charges, WACC, and net profit after 5% or 7.5% capital gains tax."
          },
          "downloadableResources": [
              {
                  "title": "First-Time NEPSE Investor Checklist & TMS Guide",
                  "type": "PDF Guide",
                  "size": "320 KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "What happens if I miss the EDIS transfer deadline after selling shares?",
                  "a": "You enter the closeout process. CDSC auctions the shares or penalizes you 20% of the gross sale amount, which is paid to the buyer as compensation."
              },
              {
                  "q": "How long does it take for sales proceeds to arrive in my bank account?",
                  "a": "Under T+2 settlement, brokers typically disburse funds via connectIPS to your registered bank account by the afternoon of the 2nd or 3rd working day."
              },
              {
                  "q": "Can I buy and sell the same share on the same day (Intraday) in Nepal?",
                  "a": "No, intraday trading is not legally permitted on NEPSE. You must wait for shares to be credited to your Demat account (T+2) before you can sell them."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Capital Gains Tax & WACC in Nepal",
                  "slug": "cgt-taxation",
                  "categorySlug": "nepse",
                  "readTime": "10 min read"
              },
              "nextGuide": {
                  "title": "Complete MeroShare & CDSC Guide",
                  "slug": "complete-meroshare-guide",
                  "readTime": "12 min read"
              },
              "nextCalculator": {
                  "title": "NEPSE Share & CGT Calculator",
                  "slug": "nepse-share"
              },
              "nextGlossary": {
                  "title": "Capital Gain (पुँजीगत लाभ)",
                  "term": "Capital Gain (पुँजीगत लाभ)",
                  "def": "The net profit earned from selling NEPSE shares above the WACC purchase cost."
              }
          }
      },
      "np": {
          "intro": "नेपाल स्टक एक्सचेन्ज (NEPSE) को ट्रेड म्यानेजमेन्ट सिस्टम (TMS) अनलाइन सेयर किनबेच गर्ने आधिकारिक डिजिटल पोर्टल हो। यस प्रणालीमार्फत लगानीकर्ताले इजाजतपत्र प्राप्त ब्रोकरमार्फत घरमै बसी सेयर खरिदबिक्री गर्न सक्छन्।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-broker-selection",
                  "title": "ब्रोकर छनोट र अनलाइन TMS खाता दर्ता",
                  "content": "नेपालमा SEBON बाट अनुमति प्राप्त ८० भन्दा बढी ब्रोकरहरू छन्। अनलाइन फाराम भर्दा नागरिकता, PAN, १६ अंकको डिम्याट नम्बर र बैंक चेकको प्रतिलिपि बुझाएपछि २४ देखि ४८ घण्टाभित्र TMS युजरनेम र पासवर्ड प्राप्त हुन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "छिटो स्वीकृतिका लागि",
                      "text": "बैंक, डिम्याट र TMS मा आफ्नो नाम र नागरिकता नम्बर दुरुस्त मिल्नुपर्छ।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-collateral",
                  "title": "connectIPS मार्फत कोलेटरल लोड गर्ने तरिका",
                  "content": "सेयर खरिद अर्डर हाल्नुअघि कोलेटरल जम्मा गर्नुपर्छ। 'Collateral Management' मा गई connectIPS बाट रकम लोड गरेपछि ब्रोकरले १:१ वा तोकिएको सीमा बराबर Buying Limit उपलब्ध गराउँछ।",
                  "callout": {
                      "type": "important",
                      "title": "कोलेटरल रकम भुक्तानी होइन",
                      "text": "कोलेटरल धरौटी मात्र हो। सेयर खरिद भइसकेपछि त्यसको वास्तविक रकम T+2 भित्र छुट्टै भुक्तानी गर्नुपर्छ।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-market-depth",
                  "title": "मार्केट डेप्थ (Market Depth) हेर्ने तरिका",
                  "content": "मार्केट डेप्थमा शीर्ष ५ खरिदकर्ता र शीर्ष ५ बिक्रीकर्ताको मूल्य र कित्ता प्रत्यक्ष देखिन्छ। यसबाट माग र आपूर्तिको अवस्था सजिलै विश्लेषण गर्न सकिन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "लिमिट अर्डरको प्रयोग",
                      "text": "सधैँ आफ्नो योजना अनुसारको निश्चित मूल्य तोकेर मात्र Limit Order हाल्नुहोस्।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-order-types",
                  "title": "अर्डरका प्रकारहरू: Limit vs Market",
                  "content": "नियमित बजारमा कम्तीमा १० कित्ताको अर्डर हाल्नुपर्छ। १० कित्ताभन्दा कम सेयर भएमा Odd-Lot सेसनमा कारोबार गर्न सकिन्छ।",
                  "callout": {
                      "type": "warning",
                      "title": "अड-लट बजार",
                      "text": "बोनस सेयरका सानातिना कित्ता Odd-Lot सेसनमा मात्र बिक्री हुन्छन्।"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-circuit-breakers",
                  "title": "सर्किट ब्रेकर र मूल्य सीमा",
                  "content": "कुनै पनि कम्पनीको सेयर मूल्य एक दिनमा १०% भन्दा बढी घटबढ हुन पाउँदैन। समग्र नेप्से परिसूचकमा ४%, ५% र ६% को सर्किट ब्रेकर नियम लागु हुन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "१०% को दैनिक सीमा",
                      "text": "१०% भन्दा बाहिर राखिएका अर्डरहरू नेप्से प्रणालीले स्वतः अस्वीकृत गर्दछ।"
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-settlement-edis",
                  "title": "T+2 राफसाफ र MeroShare EDIS को अनिवार्य समयसीमा",
                  "content": "सेयर बिक्री गरेपछि भोलिपल्ट बिहान १० बजेभित्र मेरोसेयरमा गई WACC गणना गरी EDIS मार्फत सेयर ट्रान्सफर गर्नुपर्छ। समयमै नगरेमा २०% क्लोजआउट जरिवाना तिर्नुपर्ने हुन्छ।",
                  "callout": {
                      "type": "warning",
                      "title": "२०% क्लोजआउट जरिवानाबाट बच्नुहोस्",
                      "text": "डिम्याटमा नभएको सेयर बेच्दा वा समयमै EDIS नगर्दा कुल कारोबार रकमको २०% जरिवाना लाग्छ।"
                  }
              },
              {
                  "num": 7,
                  "id": "chap-7-fees-cgt",
                  "title": "शुल्क संरचना र पुँजीगत लाभकर (CGT)",
                  "content": "ब्रोकर कमिसन ०.२४% देखि ०.४०% सम्म लाग्छ। १ वर्षभन्दा बढी अवधि राखेर बेच्दा ५% र १ वर्ष वा सोभन्दा कम अवधिमा बेच्दा ७.५% पुँजीगत लाभकर लाग्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "दीर्घकालीन लगानीमा कर छुट",
                      "text": "३६५ दिनभन्दा बढी सेयर होल्ड गर्दा लाभकर ७.५% बाट घटेर ५% मात्र लाग्छ।"
                  }
              }
          ],
                  "comparisonTable": {
          "title": "NEPSE ब्रोकर कमिसन र सेयर कारोबार लागत संरचना",
          "caption": "धितोपत्र बोर्ड (SEBON) द्वारा निर्धारित ब्रोकर कमिसन र नियामक शुल्क विवरण",
          "headers": ["कारोबार रकमको स्ल्याब", "ब्रोकर कमिसन दर", "SEBON शुल्क", "CDSC DP शुल्क"],
          "rows": [
            ["रु. ५०,००० सम्म", "कारोबार रकमको ०.४०%", "०.०१५%", "रु. २५ प्रति कम्पनी (बिक्रीमा मात्र)"],
            ["रु. ५०,००१ देखि ५,००,००० सम्म", "कारोबार रकमको ०.३७%", "०.०१५%", "रु. २५ प्रति कम्पनी (बिक्रीमा मात्र)"],
            ["रु. ५,००,००१ देखि २०,००,००० सम्म", "कारोबार रकमको ०.३४%", "०.०१५%", "रु. २५ प्रति कम्पनी (बिक्रीमा मात्र)"],
            ["रु. २०,००,००१ देखि १ करोड सम्म", "कारोबार रकमको ०.३०%", "०.०१५%", "रु. २५ प्रति कम्पनी (बिक्रीमा मात्र)"],
            ["रु. १ करोडभन्दा माथि", "कारोबार रकमको ०.२४%", "०.०१५%", "रु. २५ प्रति कम्पनी (बिक्रीमा मात्र)"]
          ]
        },
        "nepalContext": "धितोपत्र ऐन २०६३ अन्तर्गत SEBON र NEPSE द्वारा नियमन गरिएको। सबै कारोबार CDSC र connectIPS मार्फत सुरक्षित हुन्छ।",
          "practicalScenario": {
              "persona": "सौरभ, २६, सफ्टवेयर इन्जिनियर, ललितपुर",
              "challenge": "नेप्सेमा जरिवाना विना पहिलो पटक सेयर खरिदबिक्री गर्ने तरिका सिक्न चाहन्थे।",
              "solutionText": "सौरभले connectIPS बाट कोलेटरल लोड गरी लिमिट अर्डरबाट सेयर खरिद गरे र बिक्री गर्दा सोही दिन EDIS सम्पन्न गरी सुरक्षित कारोबार गरे।"
          },
          "calculatorShortcut": {
              "slug": "nepse-share",
              "name": "NEPSE सेयर तथा CGT Calculator",
              "desc": "ब्रोकर कमिसन, SEBON शुल्क, WACC र ५% वा ७.५% पुँजीगत लाभकर हिसाब गर्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "नेप्से सुरुवाती लगानीकर्ता चेकलिस्ट",
                  "type": "PDF गाइड",
                  "size": "३२० KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "सेयर बेचेपछि EDIS गर्न छुटेमा के हुन्छ?",
                  "a": "CDSC ले क्लोजआउट प्रक्रिया सुरु गर्छ र कुल बिक्री रकमको २०% रकम जरिवाना स्वरूप कट्टा गरिन्छ।"
              },
              {
                  "q": "बिक्री गरेको सेयरको रकम कहिले बैंक खातामा आउँछ?",
                  "a": "T+2 राफसाफ नियम अनुसार कारोबार भएको २ देखि ३ कार्यदिनभित्र ब्रोकरले सिधै बैंक खातामा रकम पठाउँछ।"
              },
              {
                  "q": "नेपालमा एउटै दिनमा सेयर किनेर बेच्न (Intraday) मिल्छ?",
                  "a": "मिल्दैन। नेपालमा सेयर डिम्याट खातामा जम्मा भइसकेपछि (T+2 पछि) मात्र बेच्न सकिन्छ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "पुँजीगत लाभकर र WACC हिसाब",
                  "slug": "cgt-taxation",
                  "categorySlug": "nepse",
                  "readTime": "१० मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "MeroShare र CDSC को पूर्ण गाइड",
                  "slug": "complete-meroshare-guide",
                  "readTime": "१२ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "NEPSE सेयर तथा CGT Calculator",
                  "slug": "nepse-share"
              },
              "nextGlossary": {
                  "title": "Capital Gain (पुँजीगत लाभ)",
                  "term": "Capital Gain (पुँजीगत लाभ)",
                  "def": "सेयर खरिद लागतभन्दा बढी मूल्यमा बेच्दा प्राप्त हुने खुद नाफा।"
              }
          }
      }
  },
  'complete-mutual-fund-guide': {
      "id": "complete-mutual-fund-guide",
      "slug": "complete-mutual-fund-guide",
      "categorySlug": "investing",
      "categoryName": {
          "en": "Investing",
          "np": "लगानी"
      },
      "title": {
          "en": "Complete Nepal Mutual Fund Guide",
          "np": "नेपालका Mutual Fund हरूको पूर्ण कर्नरस्टोन गाइड"
      },
      "oneLineSummary": {
          "en": "The complete guide to open-ended vs closed-ended schemes, weekly NAV calculation, SEBON 1.5% expense ratios, cash dividends vs DRIP, and beating bank deposits.",
          "np": "खुलामुखी र बन्दमुखी योजना, साप्ताहिक NAV गणना, व्यवस्थापन शुल्क, लाभांश पुनःलगानी (DRIP) र मुद्दती निक्षेपभन्दा बढी प्रतिफल लिने विधि।"
      },
      "difficulty": {
          "en": "Beginner to Intermediate",
          "np": "सुरुवातीदेखि मध्यम"
      },
      "readTime": {
          "en": "14 min read",
          "np": "१४ मिनेट पढाइ"
      },
      "sectionsCount": 6,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa Asset Management Desk",
          "np": "risePaisa म्युचुअल फण्ड विश्लेषण टोली"
      },
      "reviewedBy": {
          "en": "Verified under SEBON Mutual Fund Regulations 2067",
          "np": "सामूहिक लगानी कोष नियमावली २०६७ अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Understanding Basic Diversification",
              "type": "Concept"
          },
          {
              "title": "Active Demat Account & Bank Account",
              "type": "Prerequisite"
          }
      ],
      "en": {
          "intro": "Mutual Funds in Nepal pool capital from thousands of retail investors to invest in a professionally managed, diversified portfolio of NEPSE equities, corporate debentures, fixed deposits, and government securities. Regulated by the Securities Board of Nepal (SEBON) under the Mutual Fund Regulation 2067, they allow individuals with as little as NPR 1,000 to achieve institutional-grade diversification without the burden of individual stock picking.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-open-vs-closed",
                  "title": "Open-Ended vs Closed-Ended Schemes in Nepal",
                  "content": "Nepal's mutual fund industry is bifurcated into two primary structures: Closed-Ended Schemes are listed and traded directly on NEPSE like ordinary shares, with fixed fund size (typically NPR 100 Crore to 150 Crore) and fixed maturity tenures (5 to 10 years). Open-Ended Schemes do NOT trade on NEPSE; instead, units are bought and sold directly through the Fund Sponsor/Merchant Bank at the scheme's prevailing Net Asset Value (NAV). Open-ended funds have perpetual life, flexible unit capital, and support monthly Systematic Investment Plans (SIP).",
                  "callout": {
                      "type": "tip",
                      "title": "Which Structure Should You Choose?",
                      "text": "For passive wealth accumulation and salary savings, Open-Ended schemes with automated monthly SIP are ideal. For bargain hunters, Closed-Ended schemes frequently trade at a 15-25% discount to their true NAV on the NEPSE floor."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-nav",
                  "title": "Decoding Net Asset Value (NAV): Calculation & Timing",
                  "content": "Net Asset Value (NAV) represents the intrinsic per-unit book value of the fund. It is calculated by summing the market value of all equities held by the fund, accrued bank interest, and cash reserves, subtracting operational liabilities, and dividing by the total outstanding units. By SEBON directive, all fund managers must publish their weekly NAV on their website and submit comprehensive monthly financial reports showing their entire stock portfolio.",
                  "callout": {
                      "type": "important",
                      "title": "Weekly vs Par Value",
                      "text": "Most mutual fund schemes start with a par value of NPR 10 per unit. An NAV of NPR 12.50 reflects a 25% cumulative net capital appreciation since launch."
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-expense-ratio",
                  "title": "Management Fees & SEBON Expense Ratio Caps",
                  "content": "Unlike unregulated investments, mutual fund fees in Nepal are strictly capped by SEBON. Fund managers (Merchant Bankers) are legally prohibited from charging more than 1.5% per annum for fund management, 0.2% for fund supervisory fees, and 0.2% for depository fees. These fees are already deducted before the NAV is published, meaning the reported NAV is 100% net of internal operating costs.",
                  "callout": {
                      "type": "tip",
                      "title": "Zero Entry Load",
                      "text": "Under current SEBON guidelines, fund managers in Nepal are barred from levying front-end entry loads. You invest 100% of your money from day one."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-drip",
                  "title": "Cash Dividends vs Dividend Reinvestment Plans (DRIP)",
                  "content": "When portfolio companies distribute dividends or book profits, the fund manager distributes scheme returns. Investors can opt for Cash Dividends directly into their bank account, or enroll in a Dividend Reinvestment Plan (DRIP). In DRIP, cash dividends are automatically converted into additional mutual fund units at NAV without fees, supercharging exponential compound interest over 10-20 year horizons.",
                  "callout": {
                      "type": "tip",
                      "title": "The Power of DRIP",
                      "text": "Over a 15-year period, reinvesting annual 8-12% dividends can more than double your final wealth compared to withdrawing cash payouts each year."
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-redemption",
                  "title": "How to Purchase & Redeem Open-Ended Units Online",
                  "content": "To buy or redeem open-ended schemes, visit the online portal of the respective merchant bank (e.g., NIBL Ace Capital, Siddhartha Capital, Sanima Capital, Nabil Invest). Connect with your Demat BOID, select the scheme, enter the desired investment amount, and pay via connectIPS or eSewa/Khalti. When you need cash, submit an online Redemption Request; the fund manager liquidates your units at the next declared NAV and transfers funds straight to your bank account within 2-3 business days.",
                  "callout": {
                      "type": "important",
                      "title": "Exit Loads on Short-Term Redemptions",
                      "text": "Most open-ended schemes charge a small exit fee (1.0% to 1.5%) if redeemed within the first 6-12 months, dropping to 0% after 1 year to encourage long-term investing."
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-taxation",
                  "title": "Tax Efficiency on Mutual Fund Returns in Nepal",
                  "content": "Under Section 88 of the Nepal Income Tax Act 2058, cash dividend returns distributed by mutual funds to individual resident investors are subject to a final withholding tax of only 5%. Capital gains on redemption of open-ended units or sale of closed-ended units on NEPSE are also taxed at standard concessional rates (5% long-term, 7.5% short-term), making mutual funds one of the most tax-efficient investment vehicles in Nepal.",
                  "callout": {
                      "type": "tip",
                      "title": "Final Withholding Status",
                      "text": "The 5% tax deducted on mutual fund dividends is treated as a final withholding tax; you do not need to add it to your personal taxable salary income."
                  }
              }
          ],
                  "comparisonTable": {
          "title": "Open-Ended vs Closed-Ended Mutual Funds in Nepal",
          "caption": "Structural and liquidity differences under SEBON Mutual Fund Regulations 2067",
          "headers": ["Key Feature", "Open-Ended Mutual Funds (खुलामुखी)", "Closed-Ended Mutual Funds (बन्दमुखी)"],
          "rows": [
            ["Maturity Tenure", "Perpetual / No maturity date", "Fixed maturity (typically 5, 7, or 10 years)"],
            ["Where to Buy / Sell", "Directly with Fund Manager (AMC)", "Traded on NEPSE secondary market floor via TMS"],
            ["Pricing Mechanism", "Transacted exactly at audited daily NAV", "Market supply/demand (often 10% - 25% discount to NAV)"],
            ["SIP Availability", "Eligible for monthly automated SIPs", "Not eligible for direct monthly SIPs"],
            ["Liquidity", "High (Fund manager must redeem at NAV)", "Dependent on NEPSE secondary trading volume"],
            ["Exit Load", "0.5% to 1.5% if exited within 2 years; 0% after", "Zero exit load (standard broker commission on sale)"]
          ]
        },
        "nepalContext": "Governed by Securities Board of Nepal (SEBON) Mutual Fund Regulations 2067. Asset Management Companies (AMCs) must maintain minimum capital reserves and independent trustee boards.",
          "practicalScenario": {
              "persona": "Anu, 29, IT Project Manager in Lalitpur",
              "challenge": "Wanted to participate in NEPSE's long-term growth but lacked the 20 hours per week needed to read balance sheets and analyze company earnings.",
              "solutionText": "Anu set up an automated monthly SIP of NPR 15,000 into two high-performing open-ended mutual funds with DRIP enabled. After 5 years, her disciplined contributions compounded to over NPR 13.8 Lakhs with zero emotional trading stress."
          },
          "calculatorShortcut": {
              "slug": "sip",
              "name": "SIP & Mutual Fund Compounding Calculator",
              "desc": "Simulate your future mutual fund returns, test different CAGR growth rates, and see the impact of automated dividend reinvestment."
          },
          "downloadableResources": [
              {
                  "title": "Nepal Mutual Fund Performance & Selection Handbook",
                  "type": "PDF Guide",
                  "size": "410 KB",
                  "href": "/resources/mutual-fund-handbook"
              }
          ],
          "faqs": [
              {
                  "q": "What is the minimum amount required to invest in a mutual fund in Nepal?",
                  "a": "For most open-ended mutual funds, you can begin investing with as little as NPR 1,000 per month through SIP."
              },
              {
                  "q": "Can mutual fund units lose money in Nepal?",
                  "a": "Yes, mutual fund NAVs fluctuate with the underlying NEPSE stock market. However, broad diversification across 30+ companies and fixed deposits significantly buffers individual company default risks."
              },
              {
                  "q": "How can I check the monthly portfolio of my mutual fund scheme?",
                  "a": "Every fund manager is statutorily required to publish monthly balance sheets on their official website listing every single stock held, cash percentage, and NAV."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "What is Investing? Foundations in Nepal",
                  "slug": "what-is-investing",
                  "categorySlug": "investing",
                  "readTime": "8 min read"
              },
              "nextGuide": {
                  "title": "Complete Systematic Investment Plan (SIP) Guide",
                  "slug": "complete-sip-guide",
                  "readTime": "11 min read"
              },
              "nextCalculator": {
                  "title": "SIP & Compounding Calculator",
                  "slug": "sip"
              },
              "nextGlossary": {
                  "title": "NAV (Net Asset Value)",
                  "term": "NAV (Net Asset Value)",
                  "def": "The per-unit market value of a mutual fund calculated by dividing net assets by total units."
              }
          }
      },
      "np": {
          "intro": "Mutual Fund ले हजारौँ साना लगानीकर्ताहरूबाट रकम सङ्कलन गरी सेयर बजार, बैंक मुद्दती र ऋणपत्रहरूमा व्यावसायिक रूपमा लगानी गर्दछ। नेपाल धितोपत्र बोर्ड (SEBON) द्वारा नियमन गरिएका यी फण्डहरूबाट मासिक रु. १,००० बाटै लगानी सुरु गर्न सकिन्छ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-open-vs-closed",
                  "title": "खुलामुखी (Open-Ended) र बन्दमुखी (Closed-Ended) योजनाहरूको फरक",
                  "content": "बन्दमुखी योजनाहरू नेप्सेमा सामान्य सेयर जस्तै किनबेच हुन्छन् र तिनको आयु ५ देखि १० वर्षको हुन्छ। खुलामुखी योजनाहरू नेप्सेमा सूचीकृत हुँदैनन्, तर मर्चेन्ट बैंकबाट सोझै NAV मूल्यमा जहिले पनि खरिदबिक्री गर्न सकिन्छ र यसमार्फत मासिक SIP गर्न सकिन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "कुन योजना छान्ने?",
                      "text": "नियमित मासिक बचतका लागि खुलामुखी योजना र बजारमा सस्तो मूल्यमा किन्न बन्दमुखी योजना उपयुक्त हुन्छन्।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-nav",
                  "title": "NAV (Net Asset Value) को हिसाब र महत्त्व",
                  "content": "NAV भनेको फण्डको प्रति इकाई खुद सम्पत्ति मूल्य हो। यसको हिसाब फण्डको कुल लगानी र बैंक मौज्दातबाट दायित्वहरू घटाई कुल इकाई संख्याले भाग गरेर निकालिन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "साप्ताहिक NAV",
                      "text": "म्युचुअल फण्डहरूले हरेक हप्ता आफ्नो नयाँ NAV र महिना मसान्तमा सम्पूर्ण पोर्टफोलियो सार्वजनिक गर्नुपर्छ।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-expense-ratio",
                  "title": "व्यवस्थापन खर्च र SEBON को नियम",
                  "content": "SEBON को नियमावली अनुसार फण्ड म्यानेजरले वार्षिक १.५% भन्दा बढी व्यवस्थापन शुल्क लिन पाउँदैनन्। यो खर्च NAV गणना गर्नुअगावै कट्टा भइसकेको हुन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "इन्ट्री लोड शून्य",
                      "text": "नेपालमा खुलामुखी योजनामा लगानी गर्दा कुनै पनि इन्ट्री लोड लाग्दैन।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-drip",
                  "title": "नगद लाभांश र लाभांश पुनःलगानी योजना (DRIP)",
                  "content": "DRIP विकल्प रोज्दा वार्षिक रूपमा प्राप्त हुने नगद लाभांश स्वतः थप म्युचुअल फण्ड इकाईमा रूपान्तरण हुन्छ, जसले दीर्घकालमा ठूलो सम्पत्ति निर्माण गर्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "DRIP को फाइदा",
                      "text": "१० देखि १५ वर्षसम्म लाभांश पुनःलगानी गर्दा चक्रवृद्धि ब्याजको पूर्ण लाभ प्राप्त हुन्छ।"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-redemption",
                  "title": "अनलाइन खरिद र पैसा फिर्ता (Redemption) लिने तरिका",
                  "content": "मर्चेन्ट बैंकको पोर्टलमा गई connectIPS मार्फत रकम भुक्तानी गरेर इकाई किन्न सकिन्छ। आवश्यक पर्दा अनलाइन Redemption फाराम भरेपछि २-३ दिनभित्र पैसा सिधै बैंक खातामा आउँछ।",
                  "callout": {
                      "type": "important",
                      "title": "एक्जिट लोड",
                      "text": "१ वर्षभन्दा अगाडि पैसा झिक्दा १% सम्म एक्जिट लोड लाग्न सक्छ, १ वर्षपछि भने कुनै शुल्क लाग्दैन।"
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-taxation",
                  "title": "कर संरचना र ५% अन्तिम TDS",
                  "content": "म्युचुअल फण्डबाट प्राप्त हुने लाभांशमा केवल ५% अग्रिम कर (TDS) कट्टा हुन्छ जुन अन्तिम कर हो र यसलाई तलब आम्दानीमा थप्नु पर्दैन।",
                  "callout": {
                      "type": "tip",
                      "title": "अन्तिम कर कट्टी",
                      "text": "५% कर कट्टा भइसकेपछि उक्त आम्दानीमा पुनः व्यक्तिगत आयकर लाग्दैन।"
                  }
              }
          ],
                  "comparisonTable": {
          "title": "नेपालमा खुलामुखी र बन्दमुखी म्युचुअल फण्डबीच तुलना",
          "caption": "सामूहिक लगानी कोष नियमावली २०६७ बमोजिमका मुख्य संरचनागत भिन्नताहरू",
          "headers": ["विशेषता / मापदण्ड", "खुलामुखी योजना (Open-Ended)", "बन्दमुखी योजना (Closed-Ended)"],
          "rows": [
            ["परिपक्व हुने अवधि", "असीमित (कुनै निश्चित म्याद हुँदैन)", "निश्चित म्याद (सामान्यतया ५, ७ वा १० वर्ष)"],
            ["किनबेच गर्ने स्थान", "सिधै योजना व्यवस्थापक (क्यापिटल) सँग", "NEPSE को दोस्रो बजारमा ब्रोकर TMS मार्फत"],
            ["मूल्य निर्धारण", "दैनिक प्रकाशित हुने खुद सम्पत्ति मूल्य (NAV) मा", "बजारको माग र आपूर्ति अनुसार (NAV भन्दा १०-२५% सस्तो)"],
            ["मासिक SIP सुविधा", "नियमित मासिक SIP गर्न मिल्ने", "सिधै SIP गर्न नमिल्ने (एकमुष्ट किन्नुपर्ने)"],
            ["पैसा फिर्ता (तरलता)", "उच्च (क्यापिटलले NAV मा अनिवार्य फिर्ता लिनुपर्ने)", "NEPSE मा खरिदकर्ता भेटिनुपर्ने बजार तरलतामा निर्भर"],
            ["निकासी शुल्क (Exit Load)", "२ वर्षभित्र झिके ०.५% देखि १.५%; २ वर्षपछि शून्य", "कुनै निकासी शुल्क लाग्दैन (ब्रोकर कमिसन लाग्ने)"]
          ]
        },
        "nepalContext": "धितोपत्र बोर्डको सामूहिक लगानी कोष नियमावली २०६७ अनुसार सञ्चालित। प्रत्येक फण्डमा स्वतन्त्र सुपरिवेक्षक मण्डल हुन्छ।",
          "practicalScenario": {
              "persona": "अनु, २९, आइटी प्रोजेक्ट म्यानेजर, ललितपुर",
              "challenge": "सेयर बजारमा समय दिन नसक्ने तर सुरक्षित रूपमा राम्रो प्रतिफल लिन चाहन्थिन्।",
              "solutionText": "अनुले दुईवटा खुलामुखी म्युचुअल फण्डमा मासिक रु. १५,००० को SIP गरिन् र ५ वर्षमा रु. १३.८ लाखभन्दा बढी पुँजी बनाउन सफल भइन्।"
          },
          "calculatorShortcut": {
              "slug": "sip",
              "name": "SIP तथा म्युचुअल फण्ड Calculator",
              "desc": "आफ्नो मासिक लगानी, सम्भावित प्रतिफल र DRIP को चक्रवृद्धि फाइदा हिसाब गर्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "नेपाल म्युचुअल फण्ड छनोट निर्देशिका",
                  "type": "PDF गाइड",
                  "size": "४१० KB",
                  "href": "/resources/mutual-fund-handbook"
              }
          ],
          "faqs": [
              {
                  "q": "नेपालमा म्युचुअल फण्डमा लगानी सुरु गर्न कति रकम चाहिन्छ?",
                  "a": "अधिकांश खुलामुखी फण्डहरूमा मासिक न्यूनतम रु. १,००० बाटै SIP सुरु गर्न सकिन्छ।"
              },
              {
                  "q": "के म्युचुअल फण्डमा घाटा हुन सक्छ?",
                  "a": "सेयर बजार घट्दा NAV पनि केही घट्न सक्छ, तर ३० भन्दा बढी कम्पनीमा विविधीकरण हुने भएकाले जोखिम निकै कम हुन्छ।"
              },
              {
                  "q": "फण्डको मासिक विवरण कसरी हेर्ने?",
                  "a": "प्रत्येक क्यापिटलको आधिकारिक वेबसाइटमा गएर कुन-कुन कम्पनीको सेयर किनेको छ भनी मासिक वित्तीय विवरण हेर्न सकिन्छ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "लगानी के हो? सम्पत्ति निर्माणको जग",
                  "slug": "what-is-investing",
                  "categorySlug": "investing",
                  "readTime": "८ मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "नेपालमा SIP को पूर्ण कर्नरस्टोन गाइड",
                  "slug": "complete-sip-guide",
                  "readTime": "११ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "SIP तथा म्युचुअल फण्ड Calculator",
                  "slug": "sip"
              },
              "nextGlossary": {
                  "title": "NAV (Net Asset Value)",
                  "term": "NAV (Net Asset Value)",
                  "def": "म्युचुअल फण्डको कुल सम्पत्तिबाट दायित्व घटाई निकालिने प्रति इकाई बजार मूल्य।"
              }
          }
      }
  },
  'complete-income-tax-guide': {
      "id": "complete-income-tax-guide",
      "slug": "complete-income-tax-guide",
      "categorySlug": "taxation",
      "categoryName": {
          "en": "Taxation & TDS",
          "np": "कर र TDS"
      },
      "title": {
          "en": "Complete Nepal Salary Earner Income Tax Guide",
          "np": "तलबजीवी कर्मचारीका लागि आयकरको पूर्ण गाइड"
      },
      "oneLineSummary": {
          "en": "The definitive handbook to Nepal tax brackets, Section 87 TDS withholding, legal exemptions (SSF, CIT, Insurance), Form D-01 e-filing, and obtaining Tax Clearance Certificates.",
          "np": "आयकर स्ल्याब, धारा ८७ TDS, SSF/CIT र बीमा कर छुटहरू, IRD पोर्टलबाट D-01 फाराम भर्ने र कर चुक्ता प्रमाणपत्र लिने सम्पूर्ण व्यावहारिक प्रक्रिया।"
      },
      "difficulty": {
          "en": "Intermediate",
          "np": "मध्यम"
      },
      "readTime": {
          "en": "16 min read",
          "np": "१६ मिनेट पढाइ"
      },
      "sectionsCount": 6,
      "updatedDate": "FY 2083/84 / Sep 2026",
      "author": {
          "en": "RisePaisa Tax & Compliance Desk",
          "np": "risePaisa कर अनुसन्धान टोली"
      },
      "reviewedBy": {
          "en": "Verified for Nepal Income Tax Act 2058 Compliance",
          "np": "आयकर ऐन २०५८ र आर्थिक ऐन अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Permanent Account Number (PAN)",
              "type": "Mandatory"
          },
          {
              "title": "Monthly Payslips / Salary Certificate",
              "type": "Document"
          }
      ],
      "en": {
          "intro": "Income tax compliance for salaried employees in Nepal is governed by the Income Tax Act 2058 and the annual Finance Act enacted by Parliament. Under Nepal's progressive slab system, tax rates scale from 1% up to 39%. Employers are legally mandated to deduct withholding tax at source (Section 87 TDS) every month. By proactively understanding permissible deductions-including Social Security Fund (SSF), Citizen Investment Trust (CIT), Life and Health Insurance premiums-salaried professionals can legally reduce their tax liability by tens of thousands of rupees annually.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-slabs",
                  "title": "Income Tax Slabs: Individual vs Married Couples",
                  "content": "Nepal assesses individual taxpayers differently based on marital status election: For an Unmarried Individual: First NPR 500,000 is taxed at 1% (Social Security Tax); Next NPR 200,000 at 10%; Next NPR 300,000 at 20%; Next NPR 1,000,000 at 30%; Next NPR 3,000,000 at 36%; and any balance above NPR 50,00,000 at 39%. For a Married Couple (joint assessment): First NPR 600,000 is taxed at 1%; Next NPR 200,000 at 10%; Next NPR 300,000 at 20%; Next NPR 900,000 at 30%; Next NPR 3,000,000 at 36%; and balance above NPR 50,00,000 at 39%.",
                  "callout": {
                      "type": "important",
                      "title": "1% SST Exemption for SSF Contributors",
                      "text": "If you contribute to the Social Security Fund (SSF), you are completely exempt from the 1% Social Security Tax on the first bracket! Your first NPR 500,000 (or NPR 600,000 married) is taxed at 0%."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-deductions-retirement",
                  "title": "Retirement Fund Deductions: SSF, CIT & EPF Caps",
                  "content": "Retirement contributions are the largest tax deduction available in Nepal. Under Section 63, contributions to approved retirement funds (SSF, CIT, Employees Provident Fund) are deductible up to a maximum of one-third (1/3) of your assessable income, capped at statutory ceilings: Up to NPR 500,000 per fiscal year for Social Security Fund (SSF) contributors, or NPR 300,000 per fiscal year for standard CIT/EPF contributors.",
                  "callout": {
                      "type": "tip",
                      "title": "Tax Savings Calculation",
                      "text": "If your highest marginal tax slab is 30%, depositing NPR 300,000 into CIT directly saves you NPR 90,000 in income tax while building guaranteed retirement savings!"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-rebates-insurance",
                  "title": "Insurance Premiums & Medical Tax Credits",
                  "content": "In addition to retirement deductions, the Finance Act permits significant annual insurance rebates: Life Insurance Premium deduction up to NPR 40,000 per annum; Health/Medical Insurance Premium deduction up to NPR 20,000 per annum; Residential Home Insurance Premium deduction up to NPR 5,000 per annum. Furthermore, under Section 51, taxpayers can claim a direct Medical Tax Credit equal to 15% of approved medical expenses incurred, up to a maximum credit of NPR 750 directly offset against payable tax.",
                  "callout": {
                      "type": "tip",
                      "title": "Submit Receipts Early",
                      "text": "Submit premium payment receipts to your HR/Finance department before Chaitra (March/April) so they can factor the deductions into your remaining monthly TDS paychecks."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-allowances-remote",
                  "title": "Remote Area Allowances & Female Tax Rebates",
                  "content": "Special tax relief applies across demographic and geographic parameters: Category A Remote Districts (e.g., Dolpa, Humla, Mugu) allow an annual deduction of NPR 50,000; Category B allows NPR 40,000; Category C allows NPR 30,000; Category D allows NPR 20,000; and Category E allows NPR 10,000. Additionally, resident female employees earning sole salary income receive an automatic 10% tax rebate on their total calculated income tax liability under the Finance Act.",
                  "callout": {
                      "type": "important",
                      "title": "10% Female Salary Rebate",
                      "text": "This rebate applies directly as a 10% discount on final tax payable, reducing effective tax burden noticeably for women in the formal workforce."
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-d01-filing",
                  "title": "Filing Form D-01 Online on the IRD Portal",
                  "content": "Salaried employees whose income exceeds NPR 40 Lakhs per annum, or who receive income from multiple employers, are legally required to file an annual income tax return (Form D-01) on the IRD portal (taxpayerportal.ird.gov.np) within three months of the fiscal year close (by Ashoj end). Log into the Taxpayer Portal with your PAN and password, open 'Income Tax Return' -> 'Form D-01', review your Section 87 TDS entries pre-populated by your employer, verify deductions, and submit.",
                  "callout": {
                      "type": "tip",
                      "title": "Automatic Withholding Reconciliation",
                      "text": "Employees earning under NPR 40 Lakhs from a single employer with final TDS deducted are considered to have satisfied filing requirements, but filing Form D-01 voluntarily is mandatory if you wish to claim a tax refund."
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-clearance-certificate",
                  "title": "Obtaining an Official Tax Clearance Certificate",
                  "content": "A Tax Clearance Certificate (कर चुक्ता प्रमाणपत्र) is frequently required for foreign visa applications, commercial bank loan underwriting, and corporate directorships. Once your employer pays all TDS and files annual returns, log into the IRD portal, navigate to 'Tax Clearance', verify your verified tax payments for the fiscal year, and click 'Print Tax Clearance Certificate'. The system issues a digitally signed QR-coded certificate valid for all statutory purposes.",
                  "callout": {
                      "type": "tip",
                      "title": "Zero Office Visits",
                      "text": "Tax Clearance Certificates for salaried employees are generated instantly online in PDF format without needing to visit the Inland Revenue Department in person."
                  }
              }
          ],
                  "comparisonTable": {
          "title": "Nepal Personal Income Tax Slabs for FY 2083/84",
          "caption": "Progressive tax rates and income thresholds under Income Tax Act 2058",
          "headers": ["Tax Slab Bracket", "Unmarried Individual Rate", "Married Couple Rate", "Tax Rate"],
          "rows": [
            ["First Bracket (Baseline Exemption)", "Up to NPR 5,00,000", "Up to NPR 6,00,000", "1% (Exempt for SSF registered)"],
            ["Next NPR 2,00,000", "NPR 5,00,001 to NPR 7,00,000", "NPR 6,00,001 to NPR 8,00,000", "10%"],
            ["Next NPR 3,00,000", "NPR 7,00,001 to NPR 10,00,000", "NPR 8,00,001 to NPR 11,00,000", "20%"],
            ["Next NPR 10,00,000", "NPR 10,00,001 to NPR 20,00,000", "NPR 11,00,001 to NPR 20,00,000", "30%"],
            ["NPR 20,00,001 to NPR 50,00,000", "NPR 20,00,001 to NPR 50,00,000", "NPR 20,00,001 to NPR 50,00,000", "36% (30% + 20% surcharge)"],
            ["Above NPR 50,00,000", "Above NPR 50,00,000", "Above NPR 50,00,000", "39% (30% + 30% super-rich surtax)"]
          ]
        },
        "nepalContext": "Supervised by the Inland Revenue Department (IRD) under the Ministry of Finance. Income Tax Act 2058 governs all provisions with annual modifications via Parliament Finance Bills.",
          "practicalScenario": {
              "persona": "Ramesh, 33, Senior Operations Manager in Kathmandu",
              "challenge": "Gross annual salary of NPR 18,00,000 facing high 30% tax bracket deductions without knowing how to optimize.",
              "solutionText": "Ramesh contributed NPR 300,000 to CIT, paid NPR 40,000 for Term Life insurance, and NPR 20,000 for Family Health insurance. By claiming NPR 360,000 in total deductions, he legally saved NPR 108,000 in taxes while building family financial security."
          },
          "calculatorShortcut": {
              "slug": "nepal-income-tax",
              "name": "Nepal Income Tax Calculator",
              "desc": "Calculate your exact monthly TDS and annual income tax under FY 2081/82 - 2083/84 slabs with married/unmarried options and all legal deductions."
          },
          "downloadableResources": [
              {
                  "title": "Salary Earner Legal Tax Deductions Checklist",
                  "type": "PDF Checklist",
                  "size": "250 KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "Does my Dashain festival bonus count towards taxable income?",
                  "a": "Yes, under Nepali tax law, all festival allowances, Dashain bonuses, and performance bonuses are added to your gross assessable salary and taxed at your applicable marginal rate."
              },
              {
                  "q": "Can both husband and wife claim the NPR 40,000 life insurance deduction?",
                  "a": "Yes, if both spouses earn separate taxable income and file individual tax returns, each individual can claim up to NPR 40,000 for their respective life insurance policies."
              },
              {
                  "q": "What happens if my employer deducts tax but doesn't deposit it with IRD?",
                  "a": "Always request your Employer Tax Deduction Certificate (धारा ८७ प्रमाणपत्र) or check your PAN ledger on the IRD portal to ensure monthly TDS has been officially credited."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Legal Tax Exemptions & Allowances in Nepal",
                  "slug": "tax-exemptions",
                  "categorySlug": "taxation",
                  "readTime": "12 min read"
              },
              "nextGuide": {
                  "title": "Complete Permanent Account Number (PAN) Guide",
                  "slug": "complete-pan-guide",
                  "readTime": "10 min read"
              },
              "nextCalculator": {
                  "title": "Nepal Income Tax Calculator",
                  "slug": "nepal-income-tax"
              },
              "nextGlossary": {
                  "title": "TDS (कर कट्टी / स्रोतमा कर)",
                  "term": "TDS (कर कट्टी / स्रोतमा कर)",
                  "def": "Tax Deducted at Source: statutory advance tax withheld on salary or interest payments in Nepal."
              }
          }
      },
      "np": {
          "intro": "नेपालमा तलबजीवी कर्मचारीहरूको आयकर आयकर ऐन २०५८ र वार्षिक आर्थिक ऐन अनुसार निर्धारण हुन्छ। यस प्रणालीमा १% देखि ३९% सम्मका विभिन्न कर स्ल्याबहरू छन्। रोजगारदाताले हरेक महिना धारा ८७ अन्तर्गत कर कट्टा (TDS) गर्दछ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-slabs",
                  "title": "आयकर स्ल्याब: अविवाहित र विवाहित जोडीको दर",
                  "content": "अविवाहित व्यक्तिका लागि: पहिलो ५ लाखमा १%, अर्को २ लाखमा १०%, अर्को ३ लाखमा २०%, अर्को १० लाखमा ३०%, अर्को ३० लाखमा ३६% र बाँकीमा ३९% कर लाग्छ। विवाहित व्यक्तिका लागि पहिलो ६ लाखमा १% लाग्छ।",
                  "callout": {
                      "type": "important",
                      "title": "SSF मा आबद्धलाई १% कर छुट",
                      "text": "सामाजिक सुरक्षा कोष (SSF) मा आबद्ध कर्मचारीले पहिलो ५ लाख (विवाहितको हकमा ६ लाख) मा १% सामाजिक सुरक्षा कर तिर्नु पर्दैन।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-deductions-retirement",
                  "title": "अवकाश कोष कर छुटहरू: SSF, CIT र EPF को सीमा",
                  "content": "आफ्नो आम्दानीको १/३ भाग वा बढीमा रु. ३ लाखसम्म (SSF को हकमा बढीमा रु. ५ लाखसम्म) अवकाश कोषमा जम्मा गर्दा उक्त रकम करयोग्य आम्दानीबाट घटाउन पाइन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "कर बचतको हिसाब",
                      "text": "यदि तपाईं ३०% कर स्ल्याबमा हुनुहुन्छ भने नागरिक लगानी कोषमा रु. ३ लाख जम्मा गर्दा सिधै रु. ९०,००० कर बचत हुन्छ।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-rebates-insurance",
                  "title": "बीमा प्रिमियम र स्वास्थ्य उपचार कर क्रेडिट",
                  "content": "जीवन बीमामा वार्षिक रु. ४०,००० सम्म, स्वास्थ्य बीमामा रु. २०,००० सम्म र घर बीमामा रु. ५,००० सम्म प्रिमियम खर्च करयोग्य आम्दानीबाट घटाउन पाइन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "रसिद समयमै बुझाउनुहोस्",
                      "text": "चैत महिनाभित्रै आफ्नो कम्पनीको लेखा शाखामा बीमा रसिद बुझाएमा मासिक तलबबाट कर कट्टा कम हुन्छ।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-allowances-remote",
                  "title": "दुर्गम भत्ता र महिला कर छुट (१०%)",
                  "content": "क वर्गको दुर्गम क्षेत्रमा वार्षिक रु. ५०,००० सम्म अतिरिक्त कर छुट पाइन्छ। पारिश्रमिक मात्र आम्दानी भएका महिला कर्मचारीले कुल लाग्ने आयकरमा थप १०% कर छुट पाउँछन्।",
                  "callout": {
                      "type": "important",
                      "title": "महिला कर्मचारीलाई १०% छुट",
                      "text": "यो छुट लाग्ने कुल कर रकमबाट सिधै १०% घटाएर हिसाब गरिन्छ।"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-d01-filing",
                  "title": "IRD पोर्टलबाट अनलाइन D-01 फाराम भर्ने तरिका",
                  "content": "वार्षिक रु. ४० लाखभन्दा बढी कमाउने वा एकभन्दा बढी ठाउँबाट तलब पाउने व्यक्तिले आश्विन मसान्तभित्र अनलाइन D-01 आय विवरण फाराम बुझाउनुपर्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "कर फिर्ता दाबी",
                      "text": "यदि रोजगारदाताले बढी कर काटेको छ भने D-01 फाराम भरेर कर फिर्ता माग्न सकिन्छ।"
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-clearance-certificate",
                  "title": "अनलाइन कर चुक्ता प्रमाणपत्र (Tax Clearance) लिने विधि",
                  "content": "विदेश भिसा, बैंक कर्जा वा व्यक्तिगत कामका लागि आवश्यक पर्ने कर चुक्ता प्रमाणपत्र आन्तरिक राजस्व विभागको वेबसाइटबाट तुरुन्तै डाउनलोड गर्न सकिन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "डिजिटल हस्ताक्षरसहितको प्रमाणपत्र",
                      "text": "QR कोडसहितको यो प्रमाणपत्र सरकारी कार्यालयमा जानु नपरी घरमै बसेर प्रिन्ट गर्न सकिन्छ।"
                  }
              }
          ],
                  "comparisonTable": {
          "title": "आ.व. २०८३/८४ का लागि व्यक्तिगत तथा दम्पती आयकर स्ल्याब",
          "caption": "आयकर ऐन २०५८ बमोजिम लाग्ने प्रगतिशील करका दर र सीमाहरू",
          "headers": ["कर लाग्ने आम्दानीको दायरा", "अविवाहित (व्यक्तिगत)", "विवाहित (दम्पती)", "लाग्ने करको दर"],
          "rows": [
            ["पहिलो स्ल्याब (आधारभूत छुट)", "रु. ५,००,००० सम्म", "रु. ६,००,००० सम्म", "१% (SSF मा आबद्ध भएमा पूर्ण छुट)"],
            ["त्यसपछिको थप २ लाख", "रु. ५,००,००१ देखि ७,००,००० सम्म", "रु. ६,००,००१ देखि ८,००,००० सम्म", "१०%"],
            ["त्यसपछिको थप ३ लाख", "रु. ७,००,००१ देखि १०,००,००० सम्म", "रु. ८,००,००१ देखि ११,००,००० सम्म", "२०%"],
            ["त्यसपछिको थप १० लाख", "रु. १०,००,००१ देखि २०,००,००० सम्म", "रु. ११,००,००१ देखि २०,००,००० सम्म", "३०%"],
            ["रु. २० लाख देखि ५० लाख सम्म", "रु. २०,००,००१ देखि ५०,००,००० सम्म", "रु. २०,००,००१ देखि ५०,००,००० सम्म", "३६% (३०% मा २०% थप सरचार्ज)"],
            ["रु. ५० लाखभन्दा माथि", "रु. ५०,००,००० भन्दा माथि", "रु. ५०,००,००० भन्दा माथि", "३९% (३०% मा ३०% थप सरचार्ज)"]
          ]
        },
        "nepalContext": "अर्थ मन्त्रालय मातहतको आन्तरिक राजस्व विभाग (IRD) द्वारा आयकर ऐन २०५८ अनुसार सञ्चालित।",
          "practicalScenario": {
              "persona": "रमेश, ३३, काठमाडौँ",
              "challenge": "वार्षिक १८ लाख आम्दानीमा उच्च ३०% कर स्ल्याबबाट कानुनी रूपमा बच्ने उपाय खोज्दै थिए।",
              "solutionText": "रमेशले CIT मा रु. ३ लाख र जीवन बीमामा रु. ४०,००० जम्मा गरेर कुल रु. ३ लाख ६० हजार कर छुट लिए, जसबाट उनको वार्षिक रु. १ लाख ८ हजार कर बचत भयो।"
          },
          "calculatorShortcut": {
              "slug": "nepal-income-tax",
              "name": "नेपाल आयकर Calculator",
              "desc": "नयाँ आयकर स्ल्याब अनुसार विवाहित र अविवाहितको मासिक TDS र वार्षिक कर हिसाब गर्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "तलबजीवी कर्मचारी कर छुट चेकलिस्ट",
                  "type": "PDF चेकलिस्ट",
                  "size": "२५० KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "के दशैं खर्च (Bonus) मा पनि कर लाग्छ?",
                  "a": "हो, दशैं भत्ता र अन्य बोनसहरू कुल तलब आम्दानीमा जोडिन्छन् र सोही अनुसार कर कट्टा हुन्छ।"
              },
              {
                  "q": "श्रीमान् र श्रीमती दुवैले ४० हजारको जीवन बीमा छुट लिन पाउँछन्?",
                  "a": "पाउँछन्। यदि दुवैको छुट्टाछुट्टै आम्दानी छ भने दुवैले आ-आफ्नो बीमामा रु. ४०,००० सम्म कर छुट दाबी गर्न सक्छन्।"
              },
              {
                  "q": "कम्पनीले मेरो कर राजस्व कार्यालयमा जम्मा गरेको कसरी थाहा पाउने?",
                  "a": "IRD को पोर्टलमा आफ्नो PAN लगइन गरेर वा कम्पनीसँग धारा ८७ को प्रमाणपत्र मागेर कर दाखिला भए नभएको जाँच्न सकिन्छ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "नेपालमा कानुनी कर छुट र सुविधाहरू",
                  "slug": "tax-exemptions",
                  "categorySlug": "taxation",
                  "readTime": "१२ मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "स्थायी लेखा नम्बर (PAN) को पूर्ण गाइड",
                  "slug": "complete-pan-guide",
                  "readTime": "१० मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "नेपाल आयकर Calculator",
                  "slug": "nepal-income-tax"
              },
              "nextGlossary": {
                  "title": "TDS (कर कट्टी / स्रोतमा कर)",
                  "term": "TDS (कर कट्टी / स्रोतमा कर)",
                  "def": "पारिश्रमिक वा ब्याज भुक्तानी गर्दा मुहानमै कानुनी रूपमा कट्टा गरिने अग्रिम कर।"
              }
          }
      }
  },
  'complete-home-loan-guide': {
      "id": "complete-home-loan-guide",
      "slug": "complete-home-loan-guide",
      "categorySlug": "loans",
      "categoryName": {
          "en": "Loans & Debt",
          "np": "कर्जा र ऋण"
      },
      "title": {
          "en": "Complete Nepal Home Loan & Mortgage Guide",
          "np": "नेपालमा घर कर्जा (Home Loan) र धितोको पूर्ण गाइड"
      },
      "oneLineSummary": {
          "en": "Master bank Base Rate spreads, fixed vs floating EMIs, NRB Loan-to-Value (LTV) limits, engineering valuations, Malpot mortgage registration, and early payoff strategies.",
          "np": "बैंक Base Rate प्रिमियम, स्थिर र परिवर्तनशील EMI, राष्ट्र बैंकको LTV सीमा, इन्जिनियर भ्यालुएसन, मालपोत रोक्का लिखत र ५ वर्ष अगावै ऋण चुक्ता गर्ने रणनीति।"
      },
      "difficulty": {
          "en": "Intermediate",
          "np": "मध्यम"
      },
      "readTime": {
          "en": "16 min read",
          "np": "१६ मिनेट पढाइ"
      },
      "sectionsCount": 6,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa Mortgage & Debt Desk",
          "np": "risePaisa घर कर्जा अनुसन्धान टोली"
      },
      "reviewedBy": {
          "en": "Verified under Nepal Rastra Bank Unified Directives",
          "np": "नेपाल राष्ट्र बैंकको एकीकृत निर्देशन अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Clear Property Ownership / Lalpurja (लालपुर्जा)",
              "type": "Document"
          },
          {
              "title": "Verifiable Proof of Income (Salary / Business Tax Clearance)",
              "type": "Document"
          },
          {
              "title": "Clean CIB Credit Report (कर्जा सूचना केन्द्र)",
              "type": "Prerequisite"
          }
      ],
      "en": {
          "intro": "Buying or constructing a home in Nepal is often the largest financial commitment of a lifetime. Commercial banks and financial institutions offer residential housing loans typically spanning 10 to 30 years. However, borrowing without understanding how the bank's Base Rate fluctuates quarterly, how premium spreads are locked, and how engineering valuations determine your net loan can cost borrowers millions of extra rupees over the loan tenure.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-how-rates-work",
                  "title": "Understanding the Base Rate + Premium Spread Formula",
                  "content": "In Nepal, floating home loan interest rates are calculated strictly as: Interest Rate = Bank Base Rate + Premium Spread. The Base Rate reflects the bank's internal cost of funds, cost of cash reserve ratio (CRR), statutory liquidity ratio (SLR), and return on assets. Every commercial bank must compute and publish its Base Rate quarterly. The Premium Spread (typically 1.0% to 3.0%) is fixed in your loan offer letter. While your spread is contractually locked, whenever the bank's Base Rate rises or falls, your overall interest rate adjusts automatically.",
                  "callout": {
                      "type": "important",
                      "title": "Spread Cannot Be Increased Unilaterally",
                      "text": "Under NRB directives, commercial banks are prohibited from unilaterally increasing your agreed premium spread during the loan tenure, providing protection against arbitrary rate hikes."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-fixed-vs-floating",
                  "title": "Fixed vs Floating Rate EMIs: Which Should You Choose?",
                  "content": "NRB mandates that commercial banks offer fixed-rate home loans alongside floating rates. Fixed-Rate Loans lock your interest rate (e.g., 9.5% or 10.5%) for 5 to 10 years, protecting your household from rising market rate cycles but usually carrying a higher initial rate. Floating-Rate Loans fluctuate with quarterly Base Rate movements. When system liquidity is high and Base Rates are trending downward, floating rates offer immediate monthly cash savings.",
                  "callout": {
                      "type": "tip",
                      "title": "Hybrid Option",
                      "text": "Many Nepali banks offer hybrid loans: fixed for the first 3-5 years, transitioning into floating (Base Rate + Spread) thereafter."
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-ltv-limits",
                  "title": "NRB Loan-to-Value (LTV) Ratios & Debt Service Caps",
                  "content": "To prevent housing bubbles, Nepal Rastra Bank enforces strict Loan-to-Value (LTV) ceilings: For residential real estate inside Kathmandu Valley, maximum LTV is capped at 50% of the property's fair valuation. Outside Kathmandu Valley, maximum LTV is 60%. For certified First-Time Home Buyers (पहिलो घर खरिदकर्ता) purchasing property up to NPR 2 Crore, NRB allows relaxed financing up to 70% LTV. Furthermore, your Debt Service to Gross Income (DSTI) ratio cannot exceed 50% of verified household income.",
                  "callout": {
                      "type": "warning",
                      "title": "Down Payment Requirement",
                      "text": "A 50% LTV cap means you must have 50% of the property's engineering valuation ready in liquid cash before the bank disburses the remaining 50%."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-valuation",
                  "title": "The Engineering Valuation: Government vs Market Rate",
                  "content": "Banks do not accept the purchase price written on your sales deed. Instead, they assign a licensed consulting engineer to inspect the land, access road width (minimum 10 to 13 feet road width is mandatory for bank financing), municipal building permits, and completion certificate (सम्पन्न प्रमाणपत्र). The engineer calculates: (a) Government Land Rate (मालपोत मूल्यांकन) and (b) Fair Market Value. The bank takes a weighted average (often 30% Govt + 70% Market, or 40/60) to arrive at the 'Fair Valuation' used for your loan ceiling.",
                  "callout": {
                      "type": "tip",
                      "title": "Road Width Matters Most",
                      "text": "Properties touching an 8-foot or narrower road face steep valuation deductions or outright bank rejection under municipal road criteria."
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-malpot",
                  "title": "Mortgage Registration & Rokka at the Land Revenue Office",
                  "content": "Once the loan is sanctioned, legal deed registration occurs at the local Land Revenue Office (मालपोत कार्यालय). The property deed (लालपुर्जा) is formally mortgaged to the bank through an official 'Rokka' (रोक्का) mandate. You must pay statutory registration charges (typically 0.15% to 0.50% depending on municipal jurisdiction) and service charges. The bank retains physical custody of your original Lalpurja in its vaults until the loan is 100% repaid.",
                  "callout": {
                      "type": "important",
                      "title": "Clear Tax Receipts",
                      "text": "Ensure your local municipal ward taxes (सम्पत्ति कर) are paid up to date before scheduling the Malpot registration date."
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-early-payoff",
                  "title": "Prepayment Strategies & NRB Penalty Regulations",
                  "content": "A 20-year home loan of NPR 50 Lakhs at 10% generates nearly NPR 65 Lakhs in interest alone! Fortunately, under NRB regulations, banks cannot charge punitive prepayment fees on individual residential housing loans (fees are capped at a nominal 0.15%-0.20%, and 0% for small principal repayments). By adopting two simple techniques-paying one extra monthly EMI per year, or increasing your monthly payment by just 5% annually as your salary grows-you can slash your 20-year mortgage to 13 years and save over NPR 20 Lakhs in interest.",
                  "callout": {
                      "type": "tip",
                      "title": "The Round-Up Method",
                      "text": "If your EMI is NPR 46,200, rounding up your monthly payment to NPR 50,000 silently retires several years of future compounding interest."
                  }
              }
          ],
                  "comparisonTable": {
          "title": "Floating Base Rate vs Fixed Rate Mortgages in Nepal",
          "caption": "NRB Unified Directive caps and interest rate transmission mechanisms",
          "headers": ["Mortgage Parameter", "Floating Rate Loan (Base Rate + Premium)", "Fixed Rate Home Mortgage"],
          "rows": [
            ["Interest Rate Calculation", "Quarterly Bank Base Rate + Fixed Premium Spread", "Fixed contractual rate locked for 5 to 10 years"],
            ["Rate Fluctuation Risk", "Borne by borrower (Rates fluctuate every quarter)", "Borne by bank (Predictable unchanged EMI)"],
            ["Prepayment Penalty (NRB)", "0% (Strictly forbidden by NRB for individual floating)", "Permitted (Typically 0.5% - 1.5% under contract terms)"],
            ["Max Debt Service Ratio (DSTI)", "50% of verified tax-paid monthly gross income", "50% of verified tax-paid monthly gross income"],
            ["Max Loan-to-Value (LTV) Cap", "70% for residential first homes; 50% for Kathmandu land", "70% for residential first homes; 50% for Kathmandu land"],
            ["Best Economic Cycle", "Declining interest rate environment (High liquidity)", "Low-rate bottom of cycle before inflation peaks"]
          ]
        },
        "nepalContext": "Governed by Nepal Rastra Bank Unified Directives for Class A, B, and C financial institutions. Mortgages are legally binding under the Muluki Civil Code 2074.",
          "practicalScenario": {
              "persona": "Bipul & Srijana, 35 & 32, Working Couple in Bhaktapur",
              "challenge": "Purchased an NPR 1.2 Crore house with an NPR 60 Lakh mortgage at Base Rate + 1.85%, worried about 20 years of compound interest payments.",
              "solutionText": "Bipul & Srijana negotiated their spread down to Base Rate + 1.50% with their primary salary bank, and committed an extra NPR 7,000 monthly toward the principal balance. This shaved 6.2 years off their loan and saved them NPR 14.2 Lakhs in net interest."
          },
          "calculatorShortcut": {
              "slug": "home-loan",
              "name": "Home Loan & EMI Amortization Calculator",
              "desc": "Calculate your monthly EMI, complete year-by-year principal vs interest amortization schedule, and simulate how extra prepayments shorten your loan."
          },
          "downloadableResources": [
              {
                  "title": "Commercial Bank Home Loan Comparison Worksheet",
                  "type": "Worksheet",
                  "size": "180 KB",
                  "href": "/resources/budget-planner-system"
              }
          ],
          "faqs": [
              {
                  "q": "What is the maximum tenure for a home loan in Nepal?",
                  "a": "Most commercial banks in Nepal offer home loans for a maximum tenure of up to 25 to 30 years, provided the borrower's age does not exceed 65 to 70 years at loan maturity."
              },
              {
                  "q": "Can my bank change my home loan interest rate after approval?",
                  "a": "On floating-rate loans, yes: if the bank's Base Rate increases, your total rate increases accordingly. However, the bank cannot increase your agreed premium spread."
              },
              {
                  "q": "What happens when my home loan is completely paid off?",
                  "a": "The bank issues an official No Objection Certificate (NOC) and loan clearance letter, unfreezes the mortgage (फुकुवा) at the Land Revenue Office (मालपोत), and returns your original Lalpurja."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Base Rate & Interest Spreads in Nepal",
                  "slug": "base-rate-spreads",
                  "categorySlug": "loans",
                  "readTime": "12 min read"
              },
              "nextGuide": {
                  "title": "Complete Nepal Commercial Banking Guide",
                  "slug": "complete-banking-guide",
                  "readTime": "12 min read"
              },
              "nextCalculator": {
                  "title": "Home Loan & EMI Calculator",
                  "slug": "home-loan"
              },
              "nextGlossary": {
                  "title": "EMI (Equated Monthly Installment)",
                  "term": "EMI (Equated Monthly Installment)",
                  "def": "The fixed monthly sum paid by a borrower to a bank consisting of principal repayment and interest."
              }
          }
      },
      "np": {
          "intro": "नेपालमा घर किन्न वा बनाउन बैंकबाट लिइने कर्जा जीवनकै सबैभन्दा ठूलो आर्थिक निर्णय हो। वाणिज्य बैंकहरूले १० देखि ३० वर्षसम्मका लागि आवास कर्जा दिन्छन्। Base Rate, प्रिमियम र इन्जिनियर भ्यालुएसन राम्रोसँग बुझेर कर्जा लिँदा लाखौँ रुपैयाँ ब्याज बचत गर्न सकिन्छ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-how-rates-work",
                  "title": "Base Rate र प्रिमियमको हिसाब कसरी हुन्छ?",
                  "content": "बैंकको ब्याजदर = Base Rate + प्रिमियम। Base Rate बैंकको लागत अनुसार हरेक ३ महिनामा परिवर्तन हुन्छ। प्रिमियम भने कर्जा लिँदा सम्झौतामा तोकिएको निश्चित दर हो।",
                  "callout": {
                      "type": "important",
                      "title": "प्रिमियम बढाउन नपाइने नियम",
                      "text": "राष्ट्र बैंकको नियम अनुसार बैंकले सम्झौता भइसकेको प्रिमियम दर एकतर्फी रूपमा बढाउन पाउँदैन।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-fixed-vs-floating",
                  "title": "स्थिर (Fixed) र परिवर्तनशील (Floating) ब्याजदरको छनोट",
                  "content": "स्थिर ब्याजदर ५ देखि १० वर्षसम्म एउटै रहन्छ, जसले गर्दा बजारमा ब्याज बढ्दा पनि सुरक्षित भइन्छ। परिवर्तनशील ब्याजदर भने Base Rate घट्दा तत्काल घट्छ र सस्तो पर्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "हाइब्रिड विकल्प",
                      "text": "सुरुको ३-५ वर्ष स्थिर र त्यसपछि फ्लोटिङ हुने कर्जा धेरै बैंकहरूले उपलब्ध गराउँछन्।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-ltv-limits",
                  "title": "LTV सीमा: काठमाडौँमा ५०% र बाहिर ६०%",
                  "content": "राष्ट्र बैंकको निर्देशन अनुसार काठमाडौँ उपत्यकाभित्र धितोको कुल मूल्यांकनको बढीमा ५०% र उपत्यका बाहिर ६०% मात्र कर्जा पाइन्छ। पहिलो पटक घर किन्नेका लागि ७०% सम्म कर्जा सुविधा छ।",
                  "callout": {
                      "type": "warning",
                      "title": "डाउन पेमेन्ट आवश्यक",
                      "text": "५०% कर्जा पाउन बाँकी ५०% रकम आफ्नै स्रोतबाट नगद व्यवस्था गर्नुपर्छ।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-valuation",
                  "title": "इन्जिनियर भ्यालुएसन र बाटोको चौडाइ",
                  "content": "बैंकको आधिकारिक इन्जिनियरले सरकारी दर र बजार दरको भारित औसत निकालेर मूल्यांकन गर्दछ। कम्तीमा १० देखि १३ फिटको बाटो भएको जग्गामा मात्र बैंकले सजिलै कर्जा स्वीकृत गर्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "बाटोको महत्त्व",
                      "text": "८ फिटभन्दा साँघुरो बाटो भएको जग्गामा बैंक कर्जा पाउन निकै कठिन हुन्छ।"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-malpot",
                  "title": "मालपोत कार्यालयमा रोक्का र धितो लिखत पारित",
                  "content": "कर्जा स्वीकृत भएपछि मालपोत कार्यालयमा गएर लालपुर्जा बैंकको नाममा रोक्का गरिन्छ। कर्जा नसकिएसम्म लालपुर्जाको सक्कल प्रति बैंकको लकरमा सुरक्षित रहन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "कर चुक्ता रसिद",
                      "text": "मालपोत जानुअघि वडा कार्यालयमा सम्पत्ति कर तिरेको रसिद अनिवार्य चाहिन्छ।"
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-early-payoff",
                  "title": "अग्रिम भुक्तानी (Prepayment) गरी चाँडै ऋणमुक्त हुने उपाय",
                  "content": "राष्ट्र बैंकको नियम अनुसार व्यक्तिगत घर कर्जामा बैंकले उच्च जरिवाना लिन पाउँदैन (०.२% सम्म मात्र)। हरेक वर्ष एउटा अतिरिक्त किस्ता तिर्दा वा मासिक किस्ता केही बढाउँदा २० वर्षको कर्जा १३-१४ वर्षमै सकिन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "राउन्ड अप विधि",
                      "text": "यदि किस्ता रु. ४६,२०० छ भने महिनाको रु. ५०,००० तिर्दा वर्षौँको ब्याज सजिलै जोगिन्छ।"
                  }
              }
          ],
                  "comparisonTable": {
          "title": "नेपालमा परिवर्तनशील (Floating) र स्थिर (Fixed) घरकर्जाको तुलना",
          "caption": "नेपाल राष्ट्र बैंकको एकीकृत निर्देशन र कर्जा सर्तहरूको तुलनात्मक विश्लेषण",
          "headers": ["कर्जा मापदण्ड / विशेषता", "Floating कर्जा (Base Rate + प्रिमियम)", "Fixed कर्जा (स्थिर ब्याजदर)"],
          "rows": [
            ["ब्याजदर गणना विधि", "त्रैमासिक बैंक Base Rate + स्थिर प्रिमियम", "५ देखि १० वर्षका लागि पूर्व-निर्धारित स्थिर दर"],
            ["ब्याजदर जोखिम", "ऋणीले ब्यहोर्ने (बैंकको आधार दर घटबढ अनुसार EMI फेरिने)", "बैंकले ब्यहोर्ने (सम्पूर्ण अवधिसम्म एउटै EMI)"],
            ["अग्रिम भुक्तानी शुल्क (Prepayment)", "०% (व्यक्तिगत Floating कर्जामा राष्ट्र बैंकले शुल्क लिन नपाउने)", "लिन पाउने (सर्त अनुसार ०.५% देखि १.५% सम्म)"],
            ["मासिक किस्ता क्षमता (DSTI)", "प्रमाणित खुद आम्दानीको अधिकतम ५०% सम्म मात्र", "प्रमाणित खुद आम्दानीको अधिकतम ५०% सम्म मात्र"],
            ["धितो मूल्यांकन सीमा (LTV)", "पहिलो आवासीय घरमा ७०%; काठमाडौँको जग्गामा ५०%", "पहिलो आवासीय घरमा ७०%; काठमाडौँको जग्गामा ५०%"],
            ["कुन समयमा लिनु फाइदा?", "ब्याजदर घट्दो क्रममा भएको समयमा", "बजारमा ब्याजदर सबैभन्दा न्यून विन्दुमा पुगेको बेला"]
          ]
        },
        "nepalContext": "नेपाल राष्ट्र बैंकको एकीकृत निर्देशन र मुलुकी देवानी संहिता २०७४ अनुसार कानुनी रूपमा सुरक्षित।",
          "practicalScenario": {
              "persona": "बिपुल र सृजना, भक्तपुर",
              "challenge": "रु. ६० लाखको घर कर्जामा २० वर्षसम्म ब्याज तिर्नुपर्ने चिन्तामा थिए।",
              "solutionText": "उनीहरूले बैंकसँग कुरा गरेर प्रिमियम घटाए र मासिक रु. ७,००० थप साँवा तिरेर कर्जा ६ वर्ष अगावै चुक्ता गरे र १४ लाखभन्दा बढी ब्याज बचत गरे।"
          },
          "calculatorShortcut": {
              "slug": "home-loan",
              "name": "घर कर्जा तथा EMI Calculator",
              "desc": "मासिक किस्ता, ब्याज र साँवाको तालिका हेर्नुहोस् र अग्रिम भुक्तानी गर्दा हुने बचत जाँच्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "वाणिज्य बैंक घर कर्जा तुलना तालिका",
                  "type": "Worksheet",
                  "size": "१८० KB",
                  "href": "/resources/budget-planner-system"
              }
          ],
          "faqs": [
              {
                  "q": "नेपालमा घर कर्जाको अधिकतम अवधि कति हुन्छ?",
                  "a": "अधिकांश बैंकहरूले अधिकतम २५ देखि ३० वर्षसम्मका लागि घर कर्जा दिन्छन्, तर कर्जा सकिँदा उमेर ६५-७० वर्षभन्दा बढी हुन पाउँदैन।"
              },
              {
                  "q": "के बैंकले कर्जा दिइसकेपछि ब्याजदर बढाउन सक्छ?",
                  "a": "फ्लोटिङ कर्जामा बेस रेट बढे अनुसार ब्याज बढ्छ, तर बैंकले तोकेको प्रिमियम भने बढाउन पाउँदैन।"
              },
              {
                  "q": "कर्जा चुक्ता भएपछि लालपुर्जा कसरी फिर्ता पाइन्छ?",
                  "a": "बैंकले फुकुवा पत्र दिन्छ र मालपोत कार्यालयमा रोक्का फुकुवा भएपछि सक्कल लालपुर्जा फिर्ता पाइन्छ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "नेपालमा बैंक Base Rate र प्रिमियम",
                  "slug": "base-rate-spreads",
                  "categorySlug": "loans",
                  "readTime": "१२ मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "नेपालको वाणिज्य बैंकिङ प्रणालीको पूर्ण गाइड",
                  "slug": "complete-banking-guide",
                  "readTime": "१२ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "घर कर्जा तथा EMI Calculator",
                  "slug": "home-loan"
              },
              "nextGlossary": {
                  "title": "EMI (Equated Monthly Installment)",
                  "term": "EMI (Equated Monthly Installment)",
                  "def": "बैंक कर्जा चुक्ता गर्न हरेक महिना तिर्नुपर्ने साँवा र ब्याज सहितको निश्चित किस्ता।"
              }
          }
      }
  },
  'complete-banking-guide': {
      "id": "complete-banking-guide",
      "slug": "complete-banking-guide",
      "categorySlug": "banking",
      "categoryName": {
          "en": "Banking",
          "np": "बैंकिङ"
      },
      "title": {
          "en": "Complete Nepal Commercial Banking Guide",
          "np": "नेपालको वाणिज्य बैंकिङ प्रणालीको पूर्ण कर्नरस्टोन गाइड"
      },
      "oneLineSummary": {
          "en": "The complete manual to Class A/B/C/D banks, NRB deposit guarantee up to NPR 500,000, daily minimum interest formulas, FD vs RD, mobile banking limits, and avoiding fraud.",
          "np": "क, ख, ग, घ वर्गका बैंक, ५ लाखसम्मको निक्षेप सुरक्षण, दैनिक न्यूनतम मौज्दात ब्याज, FD र RD, डिजिटल कारोबार सीमा र साइबर सुरक्षाको पूर्ण विधि।"
      },
      "difficulty": {
          "en": "Beginner",
          "np": "सुरुवाती"
      },
      "readTime": {
          "en": "13 min read",
          "np": "१३ मिनेट पढाइ"
      },
      "sectionsCount": 6,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa Banking Research Desk",
          "np": "risePaisa बैंकिङ अनुसन्धान टोली"
      },
      "reviewedBy": {
          "en": "Verified under Nepal Rastra Bank Banking Directives",
          "np": "नेपाल राष्ट्र बैंकको निर्देशन अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Nepali Citizenship Certificate",
              "type": "Document"
          },
          {
              "title": "Recent Passport-sized Photograph",
              "type": "Document"
          }
      ],
      "en": {
          "intro": "Banking in Nepal is strictly regulated by Nepal Rastra Bank (NRB), the central monetary authority established under the NRB Act 2058. Whether you are depositing emergency cash into savings, locking high returns in Fixed Deposits (FD), or executing real-time QR payments at retail stores, understanding how financial tiers work, how deposit insurance safeguards your capital, and how interest compounds daily is foundational to smart wealth management in Nepal.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-bank-tiers",
                  "title": "Understanding Financial Tiers: Class A, B, C & D",
                  "content": "NRB categorizes financial institutions into four tiers based on minimum paid-up capital and operational scope: Class A Commercial Banks (वाणिज्य बैंक - minimum capital NPR 8 Billion) offer full retail, corporate, foreign exchange, and letter of credit (LC) services. Class B Development Banks (विकास बैंक - national level minimum NPR 2.5 Billion) operate across provinces with strong regional presence. Class C Finance Companies (वित्त कम्पनी - minimum NPR 800 Million) focus on hire-purchase, leasing, and consumer credit. Class D Microfinance (लघुवित्त) deliver rural group lending and poverty alleviation.",
                  "callout": {
                      "type": "tip",
                      "title": "Which Tier is Safest?",
                      "text": "All Class A, B, and C banks operate under uniform regulatory reserve requirements (CRR, SLR) and liquidity monitoring by Nepal Rastra Bank."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-deposit-guarantee",
                  "title": "Deposit Safety & The NPR 500,000 Guarantee Fund",
                  "content": "A vital protection that many Nepali savers overlook is the Deposit and Credit Guarantee Fund (निक्षेप तथा कर्जा सुरक्षण कोष). Under NRB directives, retail savings and fixed deposits held by individuals in licensed Class A, B, and C banks are statutorily insured up to NPR 500,000 per depositor per institution. In the event of a bank distress or liquidation, your deposits up to NPR 500,000 are guaranteed by law.",
                  "callout": {
                      "type": "tip",
                      "title": "Multi-Bank Diversification Strategy",
                      "text": "If you hold NPR 15 Lakhs in liquid cash, splitting NPR 5 Lakhs across three different licensed commercial banks provides 100% statutory guarantee coverage on your entire capital."
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-accounts-interest",
                  "title": "Savings vs FD vs Recurring Deposits (RD)",
                  "content": "Savings Accounts provide daily liquidity with modest interest. Fixed Deposits (FD - मुद्दती निक्षेप) lock capital for 3 months to 5 years at higher interest rates. Recurring Deposits (RD) allow salary earners to auto-debit a fixed amount (e.g., NPR 5,000) every month into an FD-grade interest instrument. By NRB directive, interest on savings accounts must be computed on a Daily Minimum Balance basis and credited to customer accounts at least quarterly.",
                  "callout": {
                      "type": "important",
                      "title": "Daily Minimum Balance Rule",
                      "text": "Banks cannot calculate interest on your lowest monthly balance. Every rupee sitting in your account earns interest for the exact number of days it remains deposited."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-digital-banking",
                  "title": "Digital Banking Infrastructure: connectIPS, Mobile Apps & QR",
                  "content": "Nepal's payment ecosystem is powered by National Payment Switch (NPS) and retail payment clearing by NCHL (Nepal Clearing House Limited). connectIPS enables real-time bank-to-bank account transfers. Standard mobile banking apps support interoperable QR scanning (Fonepay, NepalPay) across merchant stores, utility bill payments (NEA electricity, Khanepani), and tax payments to the IRD without transaction fees.",
                  "callout": {
                      "type": "tip",
                      "title": "connectIPS Verification",
                      "text": "Linking your bank account directly in connectIPS allows single transactions up to NPR 10 Lakhs online, bypassing lower mobile app limits."
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-transaction-limits",
                  "title": "Transaction Limits & Fee Schedules in Nepal",
                  "content": "To balance convenience with systemic security, NRB sets standard limits: Mobile banking app transfers are typically capped at NPR 100,000 to NPR 200,000 per day. Web internet banking supports up to NPR 10 Lakhs to 20 Lakhs per day. ATM cash withdrawals are capped at NPR 25,000 per transaction and NPR 100,000 per day. Under NRB rules, using your ATM card at another bank's ATM allows up to 2 free transactions per month before nominal interbank fees apply.",
                  "callout": {
                      "type": "important",
                      "title": "2 Free Off-Us ATM Withdrawals",
                      "text": "NRB guarantees that cardholders can use any bank's ATM twice a month without interbank transaction fees."
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-fraud-prevention",
                  "title": "Preventing Digital Fraud, OTP Scams & Phishing in Nepal",
                  "content": "Financial cybercrime in Nepal has surged with increased mobile adoption. Scammers frequently call posing as bank staff, lottery officials, or digital wallet support, requesting One-Time Passwords (OTPs) or transaction PINs. Legitimate banks and Nepal Rastra Bank will NEVER call you to ask for your password, MPIN, or OTP. Never click unverified SMS links promising festival gift hampers or account unfreezing.",
                  "callout": {
                      "type": "warning",
                      "title": "Golden Rule of Cyber Safety",
                      "text": "Your OTP is your digital signature. Sharing your OTP is legally equivalent to signing away your cash."
                  }
              }
          ],
                  "comparisonTable": {
          "title": "Classification of Banking Institutions in Nepal (BAFIA 2073)",
          "caption": "Statutory mandates and operational scope across Class A, B, C, and D institutions",
          "headers": ["Institution Tier", "Minimum Paid-Up Capital", "Deposit Insurance (DCGF)", "Core Functional Scope"],
          "rows": [
            ["Class A (Commercial Banks)", "NPR 800 Crore (NPR 8 Billion)", "Insured up to NPR 5,00,000", "Full foreign exchange, LC, consortium lending, digital switches"],
            ["Class B (Development Banks)", "NPR 250 Crore (National level)", "Insured up to NPR 5,00,000", "Regional credit, agriculture, SME finance, limited FX"],
            ["Class C (Finance Companies)", "NPR 80 Crore (National level)", "Insured up to NPR 5,00,000", "Hire purchase, auto loans, term deposits, localized retail credit"],
            ["Class D (Microfinance Institutions)", "NPR 10 Crore to NPR 100 Crore", "Operate group guarantee funds", "Collateral-free group loans to rural unbanked women, capped at 15% interest"]
          ]
        },
        "nepalContext": "Supervised by Nepal Rastra Bank under the Bank and Financial Institutions Act (BAFIA) 2073. Deposits guaranteed by Deposit and Credit Guarantee Fund.",
          "practicalScenario": {
              "persona": "Pooja, 28, Small Business Owner in Butwal",
              "challenge": "Holding NPR 400,000 in a normal savings account earning only 3% interest while facing frequent digital transaction limits.",
              "solutionText": "Pooja linked her account to connectIPS for higher transfer ceilings, kept NPR 100,000 in liquid savings, and moved NPR 300,000 into a 1-year Fixed Deposit yielding 7.5%, earning an extra NPR 13,500 in passive interest annually with full NPR 500k deposit insurance protection."
          },
          "calculatorShortcut": {
              "slug": "fixed-deposit",
              "name": "Fixed Deposit & Recurring Deposit Calculator",
              "desc": "Calculate exact monthly, quarterly, and cumulative maturity returns on bank Fixed Deposits (FD) and Recurring Deposits (RD) after 5% withholding tax."
          },
          "downloadableResources": [
              {
                  "title": "Nepal Banking Security & Verification Checklist",
                  "type": "PDF Guide",
                  "size": "280 KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "How is Fixed Deposit interest taxed in Nepal?",
                  "a": "Interest earned on bank deposits by resident individuals is subject to a final withholding tax (TDS) of 5%, deducted automatically by the bank before paying you."
              },
              {
                  "q": "Can I break a Fixed Deposit before its maturity date?",
                  "a": "Yes, premature withdrawal is permitted in most banks (often called premature liquidation), though you will receive interest adjusted to the lower savings rate or face a small penalty."
              },
              {
                  "q": "Are cooperative (सहकारी) deposits protected under the NPR 500,000 guarantee?",
                  "a": "NO! The Deposit and Credit Guarantee Fund applies strictly to Class A, B, and C banks regulated by NRB. Unregulated cooperatives carry total capital loss risk."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Fixed Deposits & Term Savings in Nepal",
                  "slug": "fixed-deposit",
                  "categorySlug": "banking",
                  "readTime": "10 min read"
              },
              "nextGuide": {
                  "title": "Complete Nepal Home Loan & Mortgage Guide",
                  "slug": "complete-home-loan-guide",
                  "readTime": "16 min read"
              },
              "nextCalculator": {
                  "title": "Fixed Deposit Calculator",
                  "slug": "fixed-deposit"
              },
              "nextGlossary": {
                  "title": "Fixed Deposit / FD (मुद्दती निक्षेप)",
                  "term": "Fixed Deposit / FD (मुद्दती निक्षेप)",
                  "def": "A high-interest bank deposit locked for a set tenure yielding guaranteed periodic interest."
              }
          }
      },
      "np": {
          "intro": "नेपालको बैंकिङ प्रणाली नेपाल राष्ट्र बैंक ऐन २०५८ अनुसार राष्ट्र बैंकबाट कडा रूपमा नियमन गरिएको छ। बचत खाता, मुद्दती निक्षेप (FD), मोबाइल बैंकिङ र QR भुक्तानीको सही उपयोग गर्दा आफ्नो पैसा पूर्ण रूपमा सुरक्षित रहनुका साथै नियमित आम्दानी पनि हुन्छ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-bank-tiers",
                  "title": "बैंकका वर्गहरू: क, ख, ग र घ को फरक",
                  "content": "क वर्ग (वाणिज्य बैंक), ख वर्ग (विकास बैंक), ग वर्ग (वित्त कम्पनी) र घ वर्ग (लघुवित्त)। सबै वाणिज्य र विकास बैंकहरू राष्ट्र बैंकको कडा अनुगमनमा सञ्चालन हुन्छन्।",
                  "callout": {
                      "type": "tip",
                      "title": "कुन बैंक सुरक्षित?",
                      "text": "क, ख र ग वर्गका सबै इजाजतप्राप्त बैंकहरूमा राष्ट्र बैंकको समान सुरक्षा मापदण्ड लागु हुन्छ।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-deposit-guarantee",
                  "title": "५ लाखसम्मको निक्षेप सुरक्षण कोषको ग्यारेन्टी",
                  "content": "निक्षेप तथा कर्जा सुरक्षण कोषमार्फत बैंकमा राखिएको प्रति व्यक्ति ५ लाख रुपैयाँसम्मको बचत र मुद्दती निक्षेप कानुनी रूपमै सुरक्षित हुन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "पैसा बाँडेर राख्ने रणनीति",
                      "text": "यदि तपाईंसँग १५ लाख नगद छ भने ३ फरक-फरक बैंकमा ५-५ लाख राख्दा सम्पूर्ण रकम शतप्रतिशत सुरक्षित हुन्छ।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-accounts-interest",
                  "title": "बचत, मुद्दती (FD) र आवर्ती (RD) निक्षेप",
                  "content": "दैनिक न्यूनतम मौज्दातको आधारमा बचत खाताको ब्याज हिसाब हुन्छ। मुद्दतीमा निश्चित अवधिका लागि बढी ब्याज पाइन्छ भने RD मा हरेक महिना निश्चित रकम मुद्दती ब्याजमा जम्मा गर्न सकिन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "दैनिक ब्याज गणना",
                      "text": "बैंकहरूले खातामा पैसा बसेको हरेक दिनको न्यूनतम मौज्दातमा अनिवार्य ब्याज दिनुपर्छ।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-digital-banking",
                  "title": "डिजिटल बैंकिङ: connectIPS, मोबाइल बैंकिङ र QR",
                  "content": "connectIPS बाट ठूलो रकम सिधै बैंक खातामा पठाउन सकिन्छ। मोबाइल बैंकिङबाट बिजुली, खानेपानी, कर भुक्तानी र Fonepay/NepalPay को QR भुक्तानी सजिलै गर्न सकिन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "connectIPS को फाइदा",
                      "text": "connectIPS मा खाता प्रमाणीकरण गरेपछि दैनिक १० लाखसम्मको कारोबार अनलाइन गर्न सकिन्छ।"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-transaction-limits",
                  "title": "दैनिक कारोबार सीमा र ATM शुल्क",
                  "content": "मोबाइल बैंकिङबाट सामान्यतया १ देखि २ लाखसम्म र ATM बाट दैनिक १ लाखसम्म नगद झिक्न सकिन्छ। महिनामा २ पटक अर्को बैंकको ATM बाट निःशुल्क पैसा झिक्न पाइन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "२ पटक निःशुल्क ATM",
                      "text": "राष्ट्र बैंकको नियम अनुसार जुनसुकै बैंकको कार्डबाट महिनामा २ पटकसम्म निःशुल्क नगद झिक्न सकिन्छ।"
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-fraud-prevention",
                  "title": "डिजिटल ठगी र OTP चोरीबाट बच्ने सुरक्षा उपाय",
                  "content": "बैंक वा राष्ट्र बैंकका कर्मचारीले कहिल्यै पनि फोन गरेर पासवर्ड वा OTP माग्दैनन्। कसैलाई पनि आफ्नो मोबाइलमा आएको OTP वा पिन कोड नदिनुहोस्।",
                  "callout": {
                      "type": "warning",
                      "title": "सुनौलो नियम",
                      "text": "आफ्नो OTP अरूलाई दिनु भनेको आफ्नो चेकमा खाली हस्ताक्षर गरेर दिनु सरह हो।"
                  }
              }
          ],
                  "comparisonTable": {
          "title": "नेपालका बैंक तथा वित्तीय संस्थाहरूको वर्गीकरण (BAFIA २०७३)",
          "caption": "नेपाल राष्ट्र बैंकको ऐन बमोजिम 'क', 'ख', 'ग' र 'घ' वर्गका संस्थाहरूको तुलना",
          "headers": ["बैंकको वर्ग", "न्यूनतम चुक्ता पुँजी", "निक्षेप सुरक्षण (DCGF)", "प्रमुख कार्यक्षेत्र"],
          "rows": [
            ["'क' वर्ग (वाणिज्य बैंक)", "रु. ८ अर्ब (८०० करोड)", "रु. ५,००,००० सम्म पूर्ण बिमा", "विदेशी मुद्रा, प्रतितपत्र (LC), ठूला कन्सोर्टियम कर्जा, मोबाइल स्विच"],
            ["'ख' वर्ग (विकास बैंक)", "रु. २.५ अर्ब (राष्ट्रिय स्तर)", "रु. ५,००,००० सम्म पूर्ण बिमा", "प्रादेशिक कर्जा, कृषि, घरेलु तथा साना उद्योग कर्जा"],
            ["'ग' वर्ग (वित्त कम्पनी)", "रु. ८० करोड (राष्ट्रिय स्तर)", "रु. ५,००,००० सम्म पूर्ण बिमा", "हायर पर्चेज, सवारी साधन कर्जा, मुद्दती निक्षेप संकलन"],
            ["'घ' वर्ग (लघुवित्त वित्तीय संस्था)", "रु. १० करोड देखि १०० करोड", "समूह जमानी कोष", "विपन्न तथा ग्रामीण महिलाहरूलाई बिनाधितो सामूहिक कर्जा (ब्याजदर सीमा १५%)"]
          ]
        },
        "nepalContext": "बैंक तथा वित्तीय संस्था सम्बन्धी ऐन (बाफिया) २०७३ अन्तर्गत नेपाल राष्ट्र बैंकद्वारा नियमन गरिएको।",
          "practicalScenario": {
              "persona": "पूजा, २८, बुटवल",
              "challenge": "बचत खातामा ४ लाख रुपैयाँ कम ब्याजमा थन्किएर बसेको थियो।",
              "solutionText": "पूजाले १ लाख आपतकालीन बचतमा राखी बाँकी ३ लाख १ वर्षको मुद्दती निक्षेपमा ७.५% ब्याजमा राखिन् र वार्षिक रु. १३,५०० थप आम्दानी लिन सफल भइन्।"
          },
          "calculatorShortcut": {
              "slug": "fixed-deposit",
              "name": "मुद्दती निक्षेप (FD) Calculator",
              "desc": "मासिक वा वार्षिक मुद्दती निक्षेपको ब्याज र ५% कर कट्टा पछिको खुद रकम हिसाब गर्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "नेपाल बैंकिङ सुरक्षा चेकलिस्ट",
                  "type": "PDF गाइड",
                  "size": "२८० KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "नेपालमा मुद्दती निक्षेपको ब्याजमा कति कर लाग्छ?",
                  "a": "व्यक्तिगत निक्षेपकर्ताको हकमा मुद्दती निक्षेपबाट प्राप्त हुने ब्याजमा ५% अन्तिम कर कट्टा (TDS) हुन्छ।"
              },
              {
                  "q": "के तोकिएको समय अगावै मुद्दती निक्षेप तोड्न मिल्छ?",
                  "a": "मिल्छ। तर समय अगावै झिक्दा बचत खाता बराबरको मात्र ब्याज दिइन्छ वा सामान्य शुल्क कट्टा हुन्छ।"
              },
              {
                  "q": "सहकारीको पैसा ५ लाखको निक्षेप सुरक्षण कोषमा पर्छ?",
                  "a": "पर्दैन! ५ लाखको ग्यारेन्टी राष्ट्र बैंकबाट इजाजतप्राप्त क, ख र ग वर्गका बैंकहरूमा मात्र लागु हुन्छ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "मुद्दती निक्षेप र सुरक्षित ब्याज",
                  "slug": "fixed-deposit",
                  "categorySlug": "banking",
                  "readTime": "१० मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "नेपालमा घर कर्जा (Home Loan) को पूर्ण गाइड",
                  "slug": "complete-home-loan-guide",
                  "readTime": "१६ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "मुद्दती निक्षेप Calculator",
                  "slug": "fixed-deposit"
              },
              "nextGlossary": {
                  "title": "Fixed Deposit / FD (मुद्दती निक्षेप)",
                  "term": "Fixed Deposit / FD (मुद्दती निक्षेप)",
                  "def": "निश्चित अवधिका लागि तोकिएको ब्याजदरमा बैंकमा राखिने सुरक्षित निक्षेप।"
              }
          }
      }
  },
  'complete-insurance-guide': {
      "id": "complete-insurance-guide",
      "slug": "complete-insurance-guide",
      "categorySlug": "insurance",
      "categoryName": {
          "en": "Insurance",
          "np": "बीमा"
      },
      "title": {
          "en": "Complete Nepal Life & Health Insurance Guide",
          "np": "जीवन तथा स्वास्थ्य बीमाको पूर्ण कर्नरस्टोन गाइड"
      },
      "oneLineSummary": {
          "en": "The essential guide to Nepal Insurance Authority rules, Term Life vs Endowment bonus rates, calculating Human Life Value (HLV), health waiting periods, and seamless claim settlements.",
          "np": "नेपाल बीमा प्राधिकरणको नियम, म्यादी (Term) र सावधिक (Endowment) बीमा, बोनस दर, HLV हिसाब, स्वास्थ्य बीमाको सर्त र दाबी भुक्तानीको सम्पूर्ण प्रक्रिया।"
      },
      "difficulty": {
          "en": "Beginner to Intermediate",
          "np": "सुरुवातीदेखि मध्यम"
      },
      "readTime": {
          "en": "15 min read",
          "np": "१५ मिनेट पढाइ"
      },
      "sectionsCount": 6,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa Insurance Advisory Desk",
          "np": "risePaisa बीमा विश्लेषण टोली"
      },
      "reviewedBy": {
          "en": "Verified under Nepal Insurance Authority (NIA) Regulations",
          "np": "नेपाल बीमा प्राधिकरणको निर्देशिका अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Understanding Financial Protection vs Investment",
              "type": "Mindset"
          },
          {
              "title": "Medical History Disclosures",
              "type": "Prerequisite"
          }
      ],
      "en": {
          "intro": "Insurance is a financial contract designed to transfer catastrophic risk from an individual to a licensed insurance company. In Nepal, the insurance sector is regulated by the Nepal Insurance Authority (नेपाल बीमा प्राधिकरण - NIA). Unfortunately, widespread marketing of insurance as a high-return investment has led many families to buy expensive endowment plans with inadequate death cover. Understanding how pure term life, health waiting periods, and bonus rates work protects your family from bankruptcy in times of tragedy.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-golden-rule",
                  "title": "The Golden Rule: Insurance is Protection, Not Investment",
                  "content": "The single most critical financial principle to grasp is: Never combine insurance with investing. Insurance exists solely to replace your economic income if you pass away or suffer a critical illness. Traditional endowment (सावधिक) and money-back plans in Nepal declare modest bonus rates yielding an effective annual return of only 4% to 5.5%-lagging consumer inflation. Purchasing low-cost, high-cover Pure Term Insurance and investing the remaining savings into equities or mutual funds yields vastly superior protection and wealth.",
                  "callout": {
                      "type": "important",
                      "title": "Buy Term, Invest the Rest",
                      "text": "An annual premium of NPR 25,000 can buy an NPR 1 Crore Term Life cover for a 30-year-old, whereas the same NPR 25,000 in an endowment policy buys barely NPR 4 to 5 Lakhs of life cover!"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-hlv",
                  "title": "Calculating Your Human Life Value (HLV)",
                  "content": "Human Life Value (HLV) represents the monetary sum required to generate enough passive interest to replace your family's annual living expenses, pay off existing debts, and fund children's higher education if you pass away. Rule of thumb in Nepal: Your minimum life cover should equal 10x to 15x your annual household living expenses PLUS your outstanding bank liabilities (such as a home loan or auto loan).",
                  "callout": {
                      "type": "tip",
                      "title": "HLV Formula Example",
                      "text": "If your family spends NPR 60,000/month (NPR 7.2 Lakhs/year) and you have an NPR 30 Lakh home loan, your recommended life insurance cover is: (7.2 Lakhs x 12) + 30 Lakhs = NPR 1.16 Crores."
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-bonus-rates",
                  "title": "Decoding Endowment Bonus Rates in Nepal",
                  "content": "Endowment policies in Nepal promise a declared 'Bonus per Thousand' (प्रति हजार बोनस दर) annually, typically ranging from NPR 50 to NPR 85 per NPR 1,000 sum assured depending on policy tenure. However, this bonus is simple (non-compounding) and credited only at policy maturity or death. When evaluated on an Internal Rate of Return (IRR) basis, standard 15-20 year endowment policies yield less than bank fixed deposits.",
                  "callout": {
                      "type": "warning",
                      "title": "Bonus Rates are Not Guaranteed",
                      "text": "Bonus rates depend entirely on the insurance company's actuarial valuation and profits. They are not contractually guaranteed and can decline during economic downturns."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-health-insurance",
                  "title": "Health Insurance: Waiting Periods & Room Rent Caps",
                  "content": "Retail health insurance policies cover hospitalization, ICU care, and surgical interventions. However, policy terms contain strict exclusions: Standard 30-day initial waiting period (no illness claims allowed during the first 30 days, except accidental injury); 1 to 2-year waiting period for pre-existing conditions (e.g., hypertension, diabetes, kidney stones); and Room Rent Caps (often 1% of sum assured per day for general bed, 2% for ICU). Exceeding the room cap triggers proportionate deductions across your entire medical bill.",
                  "callout": {
                      "type": "important",
                      "title": "Watch the Room Rent Sub-Limit",
                      "text": "If your policy caps room rent at NPR 3,000/day and you choose an NPR 6,000/day cabin, the insurer may deduct 50% of your entire doctor, nursing, and surgery bill!"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-claim-settlement",
                  "title": "Filing a Claim Without Rejection: Documentation",
                  "content": "Claim rejections in Nepal almost always stem from non-disclosure of pre-existing medical history at policy inception, or missing statutory paperwork. For Death Claims: Submit original policy bond, death certificate issued by the local ward, hospital death summary, and legal relationship certificate. For Health Claims: Submit hospital discharge summary, original doctor prescriptions, itemized pharmacy bills, diagnostic lab reports, and claim form within 15 to 30 days of discharge.",
                  "callout": {
                      "type": "tip",
                      "title": "Full Medical Disclosure",
                      "text": "Always disclose smoking, past surgeries, and existing health conditions truthfully when signing the proposal form. Incontestable clauses in Nepal protect claims after 3 years, but fraud nullifies policies permanently."
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-tax-benefits",
                  "title": "Income Tax Rebates on Insurance in Nepal",
                  "content": "The Nepal Finance Act encourages insurance uptake through direct tax incentives: Deduct up to NPR 40,000 annually from your taxable salary for Life Insurance premiums paid, and up to NPR 20,000 annually for Health/Medical Insurance premiums. Furthermore, under Section 31 of the Income Tax Act, death insurance compensation payouts paid to legal nominees are 100% exempt from income tax.",
                  "callout": {
                      "type": "tip",
                      "title": "Tax Savings Synergy",
                      "text": "Combining NPR 40k life insurance and NPR 20k health insurance deductions saves up to NPR 18,000 in income tax annually for taxpayers in the 30% slab."
                  }
              }
          ],
                  "comparisonTable": {
          "title": "Term Life Insurance vs Traditional Endowment Policy in Nepal",
          "caption": "Comparative analysis of pure risk protection versus savings-linked insurance",
          "headers": ["Policy Parameter", "Pure Term Life Insurance (म्यादी जीवन बीमा)", "Traditional Endowment Policy (सावधिक जीवन बीमा)"],
          "rows": [
            ["Primary Objective", "100% Pure Financial Risk Protection for dependents", "Forced savings combined with low insurance cover"],
            ["Annual Premium for NPR 50 Lakhs Cover (Age 30)", "Approx. NPR 7,000 to NPR 12,000 / year", "Approx. NPR 2,50,000 to NPR 3,00,000 / year"],
            ["Maturity / Survival Benefit", "NPR 0 (No survival return if insured survives tenure)", "Sum Assured + Accumulated annual insurance bonus"],
            ["Death Benefit Payout", "Full NPR 50 Lakhs paid immediately to nominees", "Sum Assured + Bonus accrued up to date of death"],
            ["Income Tax Exemption (Sec 63)", "Up to NPR 40,000 deductible from taxable income", "Up to NPR 40,000 deductible from taxable income"],
            ["Best Strategy (RisePaisa)", "Buy Pure Term Insurance and invest the difference in mutual fund SIP", "Only if guaranteed forced discipline is required"]
          ]
        },
        "nepalContext": "Regulated by the Nepal Insurance Authority (नेपाल बीमा प्राधिकरण - NIA) under Insurance Act 2079. Claims disputes can be filed directly with NIA Ombudsman.",
          "practicalScenario": {
              "persona": "Subash, 34, Father of Two in Dharan",
              "challenge": "An insurance agent urged him to buy an NPR 5 Lakh endowment policy with an annual premium of NPR 80,000, leaving his family unprotected.",
              "solutionText": "Subash declined the endowment policy. Instead, he bought an NPR 1 Crore Term Life policy for just NPR 21,500/year, secured a family health insurance policy of NPR 5 Lakhs for NPR 14,000/year, and directed the remaining NPR 44,500 into monthly mutual fund SIPs."
          },
          "calculatorShortcut": {
              "slug": "retirement",
              "name": "Financial Protection & Goal Planner",
              "desc": "Calculate your family's exact Human Life Value (HLV) insurance need, simulate inflation-adjusted living costs, and stress-test emergency reserves."
          },
          "downloadableResources": [
              {
                  "title": "Nepal Insurance Policy Evaluation Checklist",
                  "type": "PDF Guide",
                  "size": "260 KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "What happens if I stop paying my insurance premium in Nepal?",
                  "a": "Under NIA rules, policies lapse after a 30-day grace period. For endowment policies, if you have paid for at least 3 full years, the policy acquires a Paid-Up Value and surrender value."
              },
              {
                  "q": "Is Term Life insurance available in Nepal?",
                  "a": "Yes! Major life insurers in Nepal (e.g., Nepal Life, LIC Nepal, Sanima Reliance, Citizen Life) offer Pure Term Insurance (म्यादी जीवन बीमा) providing high coverage at very low cost."
              },
              {
                  "q": "Are insurance claim payouts taxable in Nepal?",
                  "a": "Death claim payouts received by nominees are 100% tax-free. Maturity payouts from endowment policies are subject to capital gains rules on the net gain portion."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Emergency Fund: Safe Cash Reserves in Nepal",
                  "slug": "emergency-fund",
                  "categorySlug": "personal-finance",
                  "readTime": "8 min read"
              },
              "nextGuide": {
                  "title": "Complete Nepal Retirement Planning Guide",
                  "slug": "complete-retirement-planning-guide",
                  "readTime": "16 min read"
              },
              "nextCalculator": {
                  "title": "Retirement & Protection Planner",
                  "slug": "retirement"
              },
              "nextGlossary": {
                  "title": "HLV (Human Life Value)",
                  "term": "HLV (Human Life Value)",
                  "def": "The monetary value of an individual's future earning capacity used to determine adequate Term Life cover."
              }
          }
      },
      "np": {
          "intro": "बीमा कुनै लगानी होइन, यो विपत्तिको समयमा परिवारलाई आर्थिक संकटबाट जोगाउने सुरक्षा ढाल हो। नेपाल बीमा प्राधिकरण (NIA) को नियम, म्यादी (Term) र सावधिक (Endowment) बीमाको फरक, र स्वास्थ्य बीमाका सर्तहरू राम्ररी बुझेर मात्र बीमा योजना खरिद गर्नुपर्छ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-golden-rule",
                  "title": "सुनौलो नियम: बीमा सुरक्षा हो, लगानी होइन",
                  "content": "बीमालाई कहिल्यै नाफामूलक लगानी नसम्झनुहोस्। परम्परागत सावधिक बीमामा वार्षिक ४-५% मात्र प्रतिफल आउँछ। थोरै प्रिमियममा धेरै रकमको म्यादी (Term) बीमा लिई बाँकी रकम म्युचुअल फण्ड वा सेयरमा लगानी गर्दा वास्तविक सुरक्षा र सम्पत्ति दुवै बन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "म्यादी बीमाको फाइदा",
                      "text": "वार्षिक रु. २५,००० ले १ करोडको म्यादी बीमा पाइन्छ, तर सावधिक बीमामा २५ हजारले मुस्किलले ४-५ लाखको मात्र बीमा हुन्छ!"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-hlv",
                  "title": "HLV (Human Life Value) हिसाब गर्ने तरिका",
                  "content": "परिवारको वार्षिक खर्चको १० देखि १५ गुणा रकम र तिर्न बाँकी ऋण जोडेर आउने रकम बराबरको जीवन बीमा अनिवार्य हुनुपर्छ, जसले कमाउने व्यक्तिको अभावमा पनि परिवारलाई आर्थिक अभाव हुन दिँदैन।",
                  "callout": {
                      "type": "tip",
                      "title": "HLV को उदाहरण",
                      "text": "यदि परिवारको मासिक खर्च रु. ६०,००० छ र ३० लाख ऋण छ भने कम्तीमा रु. १ करोड भन्दा बढीको जीवन बीमा चाहिन्छ।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-bonus-rates",
                  "title": "सावधिक बीमाको बोनस दर बुझ्ने तरिका",
                  "content": "नेपालमा प्रति हजार रु. ५० देखि ८५ सम्म बोनस घोषणा गरिन्छ। तर यो साधारण ब्याज सरह हुन्छ र अवधि सकिएपछि मात्र पाइन्छ, जुन बैंकको मुद्दती निक्षेपभन्दा पनि कम प्रतिफल हुन आउँछ।",
                  "callout": {
                      "type": "warning",
                      "title": "बोनस ग्यारेन्टी हुँदैन",
                      "text": "कम्पनीको नाफा अनुसार बोनस दर हरेक वर्ष घटबढ हुन सक्छ, यो सम्झौतामा ग्यारेन्टी गरिएको हुँदैन।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-health-insurance",
                  "title": "स्वास्थ्य बीमा: Waiting Period र कोठा भाडा सीमा",
                  "content": "स्वास्थ्य बीमामा सुरुको ३० दिनसम्म दुर्घटनाबाहेक अन्य बिरामीको दाबी पाइँदैन। पुराना रोगहरूमा १ देखि २ वर्षको Waiting Period हुन्छ र अस्पतालको बेड भाडाको निश्चित सीमा (Sub-limit) तोकिएको हुन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "बेड भाडाको सीमा ध्यान दिनुहोस्",
                      "text": "यदि तोकिएको भन्दा महँगो क्याबिन रोजेमा समग्र अस्पताल बिलको ठूलो हिस्सा बीमा कम्पनीले कट्टा गर्दछ।"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-claim-settlement",
                  "title": "दाबी भुक्तानी (Claim) अस्वीकृत नहुने विधि",
                  "content": "बीमा गर्दा आफ्नो पुरानो रोग र स्वास्थ्य अवस्था लुकाउनु हुँदैन। दाबी गर्दा वडाको मृत्यु दर्ता प्रमाणपत्र, अस्पतालको डिस्चार्ज रिपोर्ट र सक्कल बिलहरू समयमै पेश गर्नुपर्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "सत्य विवरण दिनुहोस्",
                      "text": "बीमा फाराम भर्दा धुम्रपान वा पुरानो बिरामीको विवरण लुकाएमा पछि दाबी भुक्तानी रद्द हुन सक्छ।"
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-tax-benefits",
                  "title": "बीमामा आयकर छुट: वार्षिक ६०,००० सम्म",
                  "content": "जीवन बीमा प्रिमियममा वार्षिक रु. ४०,००० सम्म र स्वास्थ्य बीमामा रु. २०,००० सम्म आयकर छुट पाइन्छ। साथै, मृत्यु दाबी बापत प्राप्त हुने रकममा कुनै पनि कर लाग्दैन।",
                  "callout": {
                      "type": "tip",
                      "title": "कर बचतको लाभ",
                      "text": "दुवै बीमा गर्दा ३०% स्ल्याबमा रहेका कर्मचारीको वार्षिक रु. १८,००० सम्म कर जोगिन्छ।"
                  }
              }
          ],
                  "comparisonTable": {
          "title": "म्यादी जीवन बीमा (Term) र सावधिक जीवन बीमा (Endowment) बीच तुलना",
          "caption": "शुद्ध पारिवारिक सुरक्षा र बचतसहितको बीमा योजनाबीचको लागत र फाइदाको विश्लेषण",
          "headers": ["बीमा मापदण्ड", "म्यादी जीवन बीमा (Term Life)", "सावधिक जीवन बीमा (Endowment)"],
          "rows": [
            ["मुख्य उद्देश्य", "परिवारका आश्रित सदस्यहरूको १००% आर्थिक सुरक्षा", "जबरजस्ती बचत र न्यून बीमा सुरक्षाको सम्मिश्रण"],
            ["रु. ५० लाख बीमाङ्कको वार्षिक प्रिमियम (३० वर्ष)", "वार्षिक करिब रु. ७,००० देखि १२,००० मात्र", "वार्षिक करिब रु. २,५०,००० देखि ३,००,०००"],
            ["अवधि सकिँदा पाउने प्रतिफल (Maturity)", "शून्य (जीवित रहेमा कुनै रकम फिर्ता आउँदैन)", "बीमाङ्क रकम + प्रत्येक वर्ष थपिएको बोनस"],
            ["मृत्यु हुँदा पाउने रकम", "पूरै रु. ५० लाख रकम तुरुन्तै हकवालालाई", "बीमाङ्क रकम + मृत्यु भएको वर्षसम्मको बोनस"],
            ["आयकर छुट सुविधा (दफा ६३)", "वार्षिक रु. ४०,००० सम्मको प्रिमियम करयोग्य आयबाट घट्ने", "वार्षिक रु. ४०,००० सम्मको प्रिमियम करयोग्य आयबाट घट्ने"],
            ["उत्कृष्ट वित्तीय रणनीति", "सस्तोमा म्यादी बीमा लिने र बाँकी बचेको मोटो रकम SIP मा लगाउने", "अनुशासित बचत गर्न नसक्नेहरूका लागि मात्र उपयुक्त"]
          ]
        },
        "nepalContext": "बीमा ऐन २०७९ अन्तर्गत नेपाल बीमा प्राधिकरण (NIA) द्वारा नियमन गरिएको। विवाद भएमा प्राधिकरणमा उजुरी दिन सकिन्छ।",
          "practicalScenario": {
              "persona": "सुभाष, ३४, धरान",
              "challenge": "एजेन्टले वार्षिक रु. ८०,००० प्रिमियम पर्ने ५ लाखको सावधिक बीमा लिन दबाब दिएका थिए।",
              "solutionText": "सुभाषले सावधिक बीमा नलिई वार्षिक रु. २१,५०० मा १ करोडको म्यादी (Term) बीमा लिए, परिवारको स्वास्थ्य बीमा गरे, र बाँकी रु. ४४,५०० मासिक म्युचुअल फण्ड SIP मा लगानी गरे।"
          },
          "calculatorShortcut": {
              "slug": "retirement",
              "name": "वित्तीय सुरक्षा तथा लक्ष्य योजना Calculator",
              "desc": "आफ्नो परिवारको वास्तविक HLV आवश्यकता, सम्भावित खर्च र आपतकालीन सुरक्षा कोष हिसाब गर्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "नेपाल बीमा योजना मूल्यांकन चेकलिस्ट",
                  "type": "PDF चेकलिस्ट",
                  "size": "२६० KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "प्रिमियम तिर्न नसकेमा के हुन्छ?",
                  "a": "३० दिनको ग्रेस पिरियडपछि बीमा पोलिसी ल्याप्स हुन्छ। ३ वर्षसम्म प्रिमियम तिरिसकेको भए समर्पण मूल्य (Surrender Value) फिर्ता लिन सकिन्छ।"
              },
              {
                  "q": "के नेपालमा म्यादी (Term) बीमा पाइन्छ?",
                  "a": "पाइन्छ! नेपाल लाइफ, एलआइसी नेपाल, सानिमा रिलायन्स लगायतका प्रमुख कम्पनीहरूले सस्तो मूल्यमा उच्च सुरक्षा दिने म्यादी जीवन बीमा प्रदान गर्छन्।"
              },
              {
                  "q": "बीमा दाबी बापत पाएको रकममा कर लाग्छ?",
                  "a": "मृत्यु दाबी बापत हकवालाले पाउने रकममा कुनै पनि कर लाग्दैन, यो शतप्रतिशत करमुक्त हुन्छ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "आपतकालीन कोष: नेपालमा सुरक्षित बचत",
                  "slug": "emergency-fund",
                  "categorySlug": "personal-finance",
                  "readTime": "८ मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "नेपालमा अवकाश योजना र पेन्सनको पूर्ण गाइड",
                  "slug": "complete-retirement-planning-guide",
                  "readTime": "१६ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "अवकाश योजना Calculator",
                  "slug": "retirement"
              },
              "nextGlossary": {
                  "title": "HLV (Human Life Value)",
                  "term": "HLV (Human Life Value)",
                  "def": "व्यक्तिको भविष्यको कमाइ क्षमताको आधारमा परिवारलाई आवश्यक पर्ने वास्तविक बीमाङ्क रकम।"
              }
          }
      }
  },
  'complete-retirement-planning-guide': {
      "id": "complete-retirement-planning-guide",
      "slug": "complete-retirement-planning-guide",
      "categorySlug": "retirement-planning",
      "categoryName": {
          "en": "Retirement Planning",
          "np": "अवकाश योजना"
      },
      "title": {
          "en": "Complete Nepal Retirement Planning Guide",
          "np": "नेपालमा अवकाश योजना र पेन्सनको पूर्ण कर्नरस्टोन गाइड"
      },
      "oneLineSummary": {
          "en": "Master the three retirement pillars in Nepal: mandatory SSF pensions, voluntary CIT/EPF wealth, the 4% safe withdrawal rule adjusted for inflation, and private medical reserves.",
          "np": "नेपालका ३ अवकाश आधारहरू: SSF पेन्सन हिसाब, नागरिक लगानी कोष (CIT), मुद्रास्फीति समायोजन, ४% सुरक्षित निकासी नियम र स्वास्थ्य खर्च व्यवस्थापन।"
      },
      "difficulty": {
          "en": "Intermediate",
          "np": "मध्यम"
      },
      "readTime": {
          "en": "16 min read",
          "np": "१६ मिनेट पढाइ"
      },
      "sectionsCount": 6,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa Pension & Retirement Desk",
          "np": "risePaisa अवकाश योजना टोली"
      },
      "reviewedBy": {
          "en": "Verified for Social Security Act 2074 & CIT Regulations",
          "np": "सामाजिक सुरक्षा ऐन २०७४ र नागरिक लगानी कोष नियमावली अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Understanding Compounding & Long-Term Horizons",
              "type": "Concept"
          },
          {
              "title": "Knowledge of Monthly Household Living Costs",
              "type": "Prerequisite"
          }
      ],
      "en": {
          "intro": "Retirement planning in Nepal is undergoing a fundamental structural transition. Traditional multi-generational joint families are fragmenting into nuclear households, elderly medical costs in private hospitals are inflating at 8% to 10% annually, and relying solely on bank interest is increasingly vulnerable to fluctuating rate cycles. To retire with dignity without depending financially on children, every working Nepali needs a diversified strategy combining state-backed social security, voluntary retirement funds, and personal compounding assets.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-three-pillars",
                  "title": "The 3 Pillars of Retirement Security in Nepal",
                  "content": "A robust retirement model in Nepal rests on three distinct pillars: Pillar 1: Mandatory Social Security (SSF) which provides a lifelong indexed pension and medical care; Pillar 2: Voluntary Institutional Savings (Citizen Investment Trust - CIT and Employees Provident Fund - EPF) which accumulate lump-sum gratuities and low-risk compounding interest; and Pillar 3: Personal Wealth Creation (Open-ended mutual fund SIPs, dividend-paying NEPSE equities, and rental property) that beat inflation over decades.",
                  "callout": {
                      "type": "tip",
                      "title": "The Danger of a Single Pillar",
                      "text": "Relying on SSF alone will cover basic survival, but only Pillar 3 personal compounding protects your lifestyle against long-term inflation."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-ssf-formula",
                  "title": "Decoding Social Security Fund (SSF) Pension Math",
                  "content": "Under the Social Security Scheme, 31% of your basic monthly salary (20% contributed by the employer, 11% by the employee) is deposited into SSF. The Old Age Protection Scheme allocates 28.33% into your retirement pension pool. Upon reaching 60 years of age and completing at least 180 months (15 years) of verified contributions, you receive a lifelong monthly pension calculated as: Monthly Pension = (Total Contributed Balance + Accumulated Return) / Actuarial Conversion Factor.",
                  "callout": {
                      "type": "important",
                      "title": "Medical Facility After Retirement",
                      "text": "SSF provides ongoing healthcare benefits up to NPR 100,000 per year even after retirement for contributors who maintained active deposits."
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-cit-advantages",
                  "title": "Citizen Investment Trust (CIT): Tax Shield & Low-Risk Growth",
                  "content": "The Citizen Investment Trust (नागरिक लगानी कोष) manages voluntary retirement schemes including the Gratuity Fund, Employees Savings Scheme 80/20, and Pension Schemes. Contributing to CIT provides an immediate tax deduction up to NPR 300,000 annually (or 1/3 of salary), credits guaranteed annual interest matching commercial bank rates, and permits loans up to 80%-90% of your accumulated balance for emergency liquidity.",
                  "callout": {
                      "type": "tip",
                      "title": "CIT Loan Facility",
                      "text": "If an emergency arises, borrowing against your CIT balance at low interest prevents you from liquidating long-term equity portfolios prematurely."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-target-corpus",
                  "title": "Calculating Your Target Retirement Corpus in NPR",
                  "content": "To calculate your target corpus, factor in Nepal's long-term inflation rate (averaging 6.5%). If your household currently lives comfortably on NPR 50,000 per month, in 25 years at 6.5% inflation you will need approximately NPR 2,41,000 per month to maintain the exact same standard of living! Multiplying your inflation-adjusted annual expenses by 25 yields your target retirement nest egg (typically NPR 2.5 Crore to 4 Crore for a middle-class urban household).",
                  "callout": {
                      "type": "important",
                      "title": "The Rule of 25",
                      "text": "Target Corpus = Desired Annual Living Expenses at Retirement x 25. This ensures your capital lasts through 30+ years of retirement."
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-safe-withdrawal",
                  "title": "The 4% Safe Withdrawal Rule Adapted for Nepal",
                  "content": "The famous 4% Rule states that if you withdraw 4% of your total portfolio in the first year of retirement and adjust subsequent withdrawals for inflation, your capital has a 95% probability of lasting at least 30 years. In Nepal's emerging economy with higher inflation volatility, financial planners recommend a more conservative 3.5% initial withdrawal rate, supplemented by low-risk fixed deposit interest and mutual fund SWP dividends.",
                  "callout": {
                      "type": "tip",
                      "title": "What is an SWP?",
                      "text": "A Systematic Withdrawal Plan (SWP) automatically redeems a fixed rupee sum from your mutual funds each month, acting like a private self-funded monthly salary."
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-medical-buffer",
                  "title": "Post-Retirement Private Healthcare Inflation Reserves",
                  "content": "Medical inflation in Nepal runs nearly double the consumer price index. Standard retail health insurance policies often terminate at age 65 or become prohibitively expensive due to age-related risk loading. Every sound retirement plan must earmark a separate 'Medical Emergency Sinking Fund' of at least NPR 15 to 25 Lakhs invested in safe bank FDs and liquid funds to cover treatments and surgeries without depleting monthly living cash flow.",
                  "callout": {
                      "type": "warning",
                      "title": "Don't Neglect Healthcare Reserves",
                      "text": "A single major cardiac surgery or ICU stay in a private hospital in Kathmandu can cost NPR 8 to 15 Lakhs. Protecting your retirement requires a dedicated medical buffer."
                  }
              }
          ],
                  "comparisonTable": {
          "title": "Nepal Three Retirement Pillars: SSF vs CIT/EPF vs Personal SIP",
          "caption": "Statutory deduction limits, employer contributions, and tax benefits across retirement vehicles",
          "headers": ["Retirement Vehicle", "Mandatory Contribution Rate", "Annual Tax Deduction Limit", "Post-Retirement Payout Structure"],
          "rows": [
            ["Social Security Fund (SSF)", "31% of Basic Salary (11% Employee + 20% Employer)", "100% Tax Exempt; 1% SST waived", "Monthly lifelong indexed pension + medical insurance buffer"],
            ["Citizen Investment Trust (CIT) / EPF", "10% to 33% voluntary contribution", "Up to 1/3 of income or max NPR 3,00,000", "Lump-sum maturity withdrawal (subject to 5% retirement TDS)"],
            ["Personal Mutual Fund SIP", "Voluntary (e.g. NPR 2,000 to NPR 25,000 / month)", "No salary tax deduction; 5% CGT on withdrawal", "Flexible Systematic Withdrawal Plan (SWP) with capital growth"],
            ["Ideal Allocation", "Mandatory primary safety floor", "Secondary fixed-income tax-deductible buffer", "Growth engine to beat 7% inflation over 25 years"]
          ]
        },
        "nepalContext": "Governed by the Social Security Act 2074 and Citizen Investment Trust Act 2047. Regulated under the Ministry of Labour, Employment and Social Security.",
          "practicalScenario": {
              "persona": "Gita, 28, Banking Officer in Chitwan",
              "challenge": "Aimed to retire early at age 52 without financial dependency, but had no idea how much money was actually needed.",
              "solutionText": "Gita calculated that maintaining her NPR 45,000 lifestyle required an inflation-adjusted corpus of NPR 2.6 Crores at age 52. By investing NPR 14,000 monthly into mutual fund SIPs alongside her mandatory SSF contributions, she is on track to hit her target with compound growth."
          },
          "calculatorShortcut": {
              "slug": "retirement",
              "name": "Retirement Goal & Corpus Calculator",
              "desc": "Calculate your exact required retirement nest egg adjusted for Nepal inflation, test monthly SIP contributions, and project your safe monthly pension payout."
          },
          "downloadableResources": [
              {
                  "title": "Nepal Retirement Timeline & Corpus Planning Worksheet",
                  "type": "Worksheet",
                  "size": "210 KB",
                  "href": "/resources/budget-planner-system"
              }
          ],
          "faqs": [
              {
                  "q": "Can self-employed individuals and freelancers join SSF in Nepal?",
                  "a": "Yes! Nepal Rastra Bank and SSF have opened registration for informal sector workers, freelancers, and foreign employment migrant workers."
              },
              {
                  "q": "What happens to my CIT balance if I resign or switch employers?",
                  "a": "Your CIT account is tied to your individual citizenship and citizen code. When changing jobs, you can transfer your account seamlessly or withdraw accumulated funds."
              },
              {
                  "q": "How does inflation affect my retirement savings?",
                  "a": "At 6.5% annual inflation, prices double every 11 years. Money kept in traditional low-interest savings loses half its purchasing power over just one decade."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Compounding Returns & Wealth Creation in Nepal",
                  "slug": "compounding-returns",
                  "categorySlug": "investing",
                  "readTime": "10 min read"
              },
              "nextGuide": {
                  "title": "Complete Systematic Investment Plan (SIP) Guide",
                  "slug": "complete-sip-guide",
                  "readTime": "11 min read"
              },
              "nextCalculator": {
                  "title": "Retirement Planner",
                  "slug": "retirement"
              },
              "nextGlossary": {
                  "title": "SIP (Systematic Investment Plan)",
                  "term": "SIP (Systematic Investment Plan)",
                  "def": "An investment approach where a fixed rupee sum is deposited into open-ended mutual funds every month."
              }
          }
      },
      "np": {
          "intro": "नेपालमा परम्परागत संयुक्त परिवार खण्डित हुँदै गएको र स्वास्थ्य उपचार खर्च अत्यधिक महँगो हुँदै गएकाले समयमै अवकाश योजना बनाउनु अनिवार्य छ। सामाजिक सुरक्षा कोष (SSF), नागरिक लगानी कोष (CIT) र व्यक्तिगत लगानीको मिश्रणले मात्र आत्मनिर्भर र सम्मानित जीवन सुनिश्चित गर्छ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-three-pillars",
                  "title": "अवकाश सुरक्षाका ३ मुख्य आधारहरू",
                  "content": "पहिलो आधार: सामाजिक सुरक्षा कोष (SSF) को आजीवन पेन्सन; दोस्रो आधार: नागरिक लगानी कोष (CIT) र सञ्चय कोषको सुरक्षित मुद्दती बचत; र तेस्रो आधार: सेयर र म्युचुअल फण्ड SIP मार्फत महँगी जित्ने व्यक्तिगत लगानी।",
                  "callout": {
                      "type": "tip",
                      "title": "तीनवटै आधारको महत्त्व",
                      "text": "SSF ले आधारभूत खर्च धान्छ, तर महँगीबाट बच्न व्यक्तिगत SIP लगानी अनिवार्य छ।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-ssf-formula",
                  "title": "सामाजिक सुरक्षा कोष (SSF) पेन्सन हिसाब",
                  "content": "आधारभूत तलबको ३१% (रोजगारदाता २०% + कर्मचारी ११%) SSF मा जम्मा हुन्छ। ६० वर्ष उमेर पुगेपछि र कम्तीमा १५ वर्ष (१८० महिना) योगदान गरेपछि आजीवन मासिक पेन्सन पाइन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "अवकाशपछि पनि स्वास्थ्य सुविधा",
                      "text": "नियमित योगदान गरेका व्यक्तिहरूले अवकाशपछि पनि वार्षिक १ लाखसम्मको औषधोपचार सुविधा पाउँछन्।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-cit-advantages",
                  "title": "नागरिक लगानी कोष (CIT) का फाइदा र ऋण सुविधा",
                  "content": "CIT मा वार्षिक रु. ३ लाखसम्म कर छुट पाइन्छ, बैंक मुद्दती बराबरको सुरक्षित ब्याज थपिन्छ र आपत पर्दा जम्मा भएको रकमको ८०-९०% सम्म सस्तो ब्याजमा ऋण लिन सकिन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "CIT सापटी सुविधा",
                      "text": "आकस्मिक पैसा चाहिएमा CIT बाट ऋण लिँदा दीर्घकालीन सेयर लगानी बेच्नु पर्दैन।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-target-corpus",
                  "title": "अवकाश कोष (Target Corpus) हिसाब गर्ने तरिका",
                  "content": "नेपालमा औसत ६.५% को महँगी दरले गर्दा अहिलेको ५० हजार खर्च २५ वर्षपछि मासिक रु. २ लाख ४० हजार बराबर हुन आउँछ। यसका लागि कम्तीमा २.५ देखि ४ करोड रुपैयाँको अवकाश कोष चाहिन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "२५ को नियम (Rule of 25)",
                      "text": "वार्षिक आवश्यक खर्चलाई २५ ले गुणन गरेर अवकाश कोषको लक्ष्य निर्धारण गर्नुहोस्।"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-safe-withdrawal",
                  "title": "४% सुरक्षित निकासी नियम र SWP",
                  "content": "अवकाशपछि आफ्नो कुल पुँजीबाट पहिलो वर्ष ४% झिक्ने र त्यसपछि महँगी अनुसार समायोजन गर्दा पैसा ३० वर्षसम्म टिक्छ। म्युचुअल फण्डको SWP बाट हरेक महिना तलब जस्तै रकम खातामा लिन सकिन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "SWP के हो?",
                      "text": "Systematic Withdrawal Plan मार्फत म्युचुअल फण्डबाट हरेक महिना निश्चित रकम बैंक खातामा स्वतः आउँछ।"
                  }
              },
              {
                  "num": 6,
                  "id": "chap-6-medical-buffer",
                  "title": "स्वास्थ्य उपचारका लागि छुट्टै आपतकालीन कोष",
                  "content": "बुढेसकालमा स्वास्थ्य बीमा नहुन वा महँगो हुन सक्छ। त्यसैले अस्पताल भर्ना र शल्यक्रियाका लागि कम्तीमा १५ देखि २५ लाख रुपैयाँको छुट्टै मुद्दती स्वास्थ्य कोष राख्नुपर्छ।",
                  "callout": {
                      "type": "warning",
                      "title": "स्वास्थ्य खर्चको जोखिम",
                      "text": "काठमाडौँका निजी अस्पतालमा एउटै ठूलो शल्यक्रियामा ८ देखि १५ लाख खर्च हुन सक्छ।"
                  }
              }
          ],
                  "comparisonTable": {
          "title": "नेपालका तीन अवकाश स्तम्भ: SSF, CIT/EPF र व्यक्तिगत SIP को तुलना",
          "caption": "सामाजिक सुरक्षा, नागरिक लगानी कोष र व्यक्तिगत लगानीबीचको कर छुट र पेन्सन संरचना",
          "headers": ["अवकाश योजना", "मासिक योगदान दर", "वार्षिक कर छुट सीमा", "अवकाशपछिको भुक्तानी संरचना"],
          "rows": [
            ["सामाजिक सुरक्षा कोष (SSF)", "आधारभूत तलबको ३१% (११% कर्मचारी + २०% रोजगारदाता)", "करयोग्य आयबाट पूरै कट्टी; १% सामाजिक सुरक्षा कर मिनाहा", "आजीवन मासिक पेन्सन + औषधोपचार तथा घातक रोग सुविधा"],
            ["नागरिक लगानी कोष (CIT) / EPF", "१०% देखि ३३% सम्म ऐच्छिक कट्टी", "कुल आम्दानीको १/३ वा अधिकतम रु. ३,००,००० सम्म", "अवकाशपछि एकमुष्ट साँवा र ब्याज भुक्तानी (५% TDS काटेर)"],
            ["व्यक्तिगत म्युचुअल फण्ड SIP", "आफ्नो क्षमता अनुसार (मासिक रु. २,००० देखि २५,०००)", "तलबमा कर छुट नहुने; इकाइ बेच्दा ५% पुँजीगत लाभकर", "नियमित मासिक रकम झिक्ने लचिलो SWP सुविधा र पुँजी वृद्धि"],
            ["सिफारिस गरिएको रणनीति", "अनिवार्य आधारभूत सामाजिक सुरक्षा जग", "दोस्रो तहको स्थिर ब्याज र कर घटाउने माध्यम", "२५ वर्षमा ७% महँगीलाई जितेर वास्तविक सम्पत्ति बनाउने इन्जिन"]
          ]
        },
        "nepalContext": "सामाजिक सुरक्षा ऐन २०७४ र नागरिक लगानी कोष ऐन २०४७ अन्तर्गत श्रम तथा रोजगार मन्त्रालय मातहत सञ्चालित।",
          "practicalScenario": {
              "persona": "गीता, २८, चितवन",
              "challenge": "५२ वर्षमै आर्थिक रूपमा स्वतन्त्र भई अवकाश लिन चाहन्थिन्।",
              "solutionText": "गीताले मासिक रु. १४,००० म्युचुअल फण्ड SIP मा लगानी गरिन् र अनिवार्य SSF सँग जोडेर ५२ वर्षमै २.६ करोडको पुँजी पुर्‍याउने सुरक्षित मार्ग तय गरिन्।"
          },
          "calculatorShortcut": {
              "slug": "retirement",
              "name": "अवकाश योजना तथा पेन्सन Calculator",
              "desc": "महँगी समायोजन गरी आवश्यक पर्ने कुल रकम, मासिक बचत र मासिक पेन्सनको हिसाब गर्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "नेपाल अवकाश समयतालिका तथा योजना वर्कसिट",
                  "type": "Worksheet",
                  "size": "२१० KB",
                  "href": "/resources/budget-planner-system"
              }
          ],
          "faqs": [
              {
                  "q": "के स्वरोजगार र अनौपचारिक क्षेत्रका व्यक्ति SSF मा जोडिन सक्छन्?",
                  "a": "सक्छन्! राष्ट्र बैंक र SSF ले अनौपचारिक क्षेत्र, स्वरोजगार र वैदेशिक रोजगारीमा रहेका श्रमिकहरूका लागि पनि खाता खोल्ने व्यवस्था गरेको छ।"
              },
              {
                  "q": "जागिर छाड्दा वा फेर्दा CIT को पैसा के हुन्छ?",
                  "a": "CIT खाता नागरिकता र सिट कोडसँग जोडिएको हुन्छ। नयाँ कम्पनीमा सोही खाता सार्न वा चाहेमा रकम झिक्न सकिन्छ।"
              },
              {
                  "q": "मुद्रास्फीति (महँगी) ले अवकाश बचतमा कस्तो असर गर्छ?",
                  "a": "वार्षिक ६.५% महँगी हुँदा हरेक ११ वर्षमा सामानको मूल्य दोब्बर हुन्छ। बचत खातामा राखेको पैसाको क्रयशक्ति आधा घट्छ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "चक्रवृद्धि ब्याज र दीर्घकालीन सम्पत्ति निर्माण",
                  "slug": "compounding-returns",
                  "categorySlug": "investing",
                  "readTime": "१० मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "नेपालमा SIP को पूर्ण कर्नरस्टोन गाइड",
                  "slug": "complete-sip-guide",
                  "readTime": "११ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "अवकाश योजना Calculator",
                  "slug": "retirement"
              },
              "nextGlossary": {
                  "title": "SIP (Systematic Investment Plan)",
                  "term": "SIP (Systematic Investment Plan)",
                  "def": "खुलामुखी Mutual Fund मा प्रत्येक महिना निश्चित रकम नियमित रूपमा लगानी गर्ने विधि।"
              }
          }
      }
  },
  'complete-budgeting-guide': {
      "id": "complete-budgeting-guide",
      "slug": "complete-budgeting-guide",
      "categorySlug": "personal-finance",
      "categoryName": {
          "en": "Personal Finance",
          "np": "व्यक्तिगत वित्त"
      },
      "title": {
          "en": "Complete Nepal Personal Budgeting & Cash Flow Guide",
          "np": "नेपालमा व्यक्तिगत बजेट र नगद प्रवाहको पूर्ण गाइड"
      },
      "oneLineSummary": {
          "en": "Master cash flow equations in Nepal, adapt the 50/30/20 rule to Kathmandu living costs, stop micro-leakages in digital wallets, and build a 6-month emergency fund.",
          "np": "नेपालको परिवेशमा Cash Flow व्यवस्थापन, ५०/३०/२० बजेट नियम, डिजिटल वालेटका सानातिना खर्च नियन्त्रण र ६ महिनाको आपतकालीन कोष बनाउने विधि।"
      },
      "difficulty": {
          "en": "Beginner",
          "np": "सुरुवाती"
      },
      "readTime": {
          "en": "11 min read",
          "np": "११ मिनेट पढाइ"
      },
      "sectionsCount": 6,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa Personal Finance Desk",
          "np": "risePaisa व्यक्तिगत वित्त टोली"
      },
      "reviewedBy": {
          "en": "Verified for Nepal Household Financial Principles",
          "np": "नेपाली पारिवारिक बजेट सिद्धान्त अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Understanding Gross vs Net Monthly Income",
              "type": "Concept"
          }
      ],
      "en": {
          "intro": "Personal budgeting is the engine of wealth creation. In urban centers like Kathmandu, Pokhara, and Biratnagar, middle-class incomes are squeezed by high room rent, steep grocery inflation, social expectations surrounding Dashain and weddings, and impulse digital spending on food delivery and online stores. This guide translates classic cash flow principles into a functional, resilient budget tailored specifically to Nepali living costs.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-cashflow-equation",
                  "title": "The Net Income Equation & Identifying Digital Leakages",
                  "content": "Your budget must be built on Take-Home Pay (Net Salary after Section 87 TDS and SSF), never on your gross CTC offer letter. Track recurring micro-leakages: daily tea and snacks, small digital wallet transfers (eSewa/Khalti/Pathao/Foodmandu) that add up to NPR 10,000 to NPR 15,000 every month unnoticed.",
                  "callout": {
                      "type": "tip",
                      "title": "The 2-Account System",
                      "text": "Maintain Account A for receiving salary and paying fixed rent/utilities, and transfer a fixed weekly allowance to Account B for discretionary spending."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-503020-nepal",
                  "title": "Adapting the 50/30/20 Framework for Urban Nepal",
                  "content": "The global 50/30/20 rule recommends 50% for Needs, 30% for Wants, and 20% for Savings. In high-rent cities like Kathmandu, adjust to 55/25/20 or 60/20/20. The critical non-negotiable rule: Always save your 20% first (Pay Yourself First) on the day your salary lands.",
                  "callout": {
                      "type": "important",
                      "title": "Automate the 20%",
                      "text": "Set up a recurring standing instruction in mobile banking to transfer your 20% savings into mutual fund SIP or high-yield term deposit on salary day."
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-festival-sinking-funds",
                  "title": "Handling Dashain, Tihar & Wedding Sinking Funds",
                  "content": "Unplanned festival expenses ruin family savings in Nepal. A Sinking Fund involves dividing your anticipated Dashain, Tihar, and clothing expenses (e.g., NPR 120,000) by 12, saving NPR 10,000 every single month into a separate bank account so you celebrate debt-free.",
                  "callout": {
                      "type": "tip",
                      "title": "Debt-Free Festivals",
                      "text": "Borrowing from credit cards or loans to celebrate Dashain destroys financial momentum. Fund festivals with monthly sinking funds."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-emergency-fund",
                  "title": "Building a 6-Month Untouchable Emergency Buffer",
                  "content": "Before investing a single rupee in NEPSE or speculative assets, build an emergency buffer covering 6 months of mandatory living expenses. Keep 1 month in a liquid savings account with ATM access, and 5 months in a short-term Fixed Deposit or liquid mutual fund.",
                  "callout": {
                      "type": "warning",
                      "title": "Never Invest Your Emergency Fund",
                      "text": "Emergency funds must stay 100% liquid and principal-protected. Never risk them in volatile stocks."
                  }
              }
          ],
          "nepalContext": "Tailored for Nepali salary cycles, joint family dynamics, and regional living costs across provinces.",
          "practicalScenario": {
              "persona": "Prashant, 27, Marketing Executive in Kathmandu",
              "challenge": "Earned NPR 65,000/month but found himself borrowing money before the 25th of every month.",
              "solutionText": "Prashant adopted the 2-account system, created a Dashain sinking fund of NPR 5,000/month, and automated NPR 13,000 (20%) into a mutual fund SIP on salary day, saving NPR 1.5 Lakhs in his first year."
          },
          "calculatorShortcut": {
              "slug": "inflation",
              "name": "Purchasing Power & Inflation Calculator",
              "desc": "Calculate how inflation erodes your monthly living costs and test your 50/30/20 budget allocations."
          },
          "downloadableResources": [
              {
                  "title": "Nepal Personal Budget Planner (Excel & Sheets)",
                  "type": "Spreadsheet",
                  "size": "142 KB",
                  "href": "/resources/budget-planner-system"
              }
          ],
          "faqs": [
              {
                  "q": "What if my room rent takes up more than 30% of my salary?",
                  "a": "Consider flat-sharing, living near public transport routes, or reducing lifestyle expenses until career income rises."
              },
              {
                  "q": "How much should I keep in my digital wallet?",
                  "a": "Never keep more than NPR 2,000 to NPR 5,000 in digital wallets to curb impulse spending."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Budgeting Basics & Cash Flow Management",
                  "slug": "budgeting-basics",
                  "categorySlug": "personal-finance",
                  "readTime": "10 min read"
              },
              "nextGuide": {
                  "title": "Complete Nepal Commercial Banking Guide",
                  "slug": "complete-banking-guide",
                  "readTime": "12 min read"
              },
              "nextCalculator": {
                  "title": "Inflation & Budget Calculator",
                  "slug": "inflation"
              },
              "nextGlossary": {
                  "title": "Budget (बजेट)",
                  "term": "Budget (बजेट)",
                  "def": "A structured plan allocating your net monthly earnings across necessities, lifestyle, and savings."
              }
          }
      },
      "np": {
          "intro": "सम्पत्ति निर्माणको सुरुवात व्यक्तिगत बजेटबाट हुन्छ। काठमाडौँ जस्ता सहरमा बढ्दो कोठा भाडा, दैनिक महँगी र चाडपर्वका खर्चहरूलाई ५०/३०/२० नियम र डिजिटल खर्च नियन्त्रणमार्फत सजिलै व्यवस्थापन गर्न सकिन्छ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-cashflow-equation",
                  "title": "खुद तलब र डिजिटल वालेटका साना खर्च नियन्त्रण",
                  "content": "बजेट सधैँ हात पर्ने खुद तलब (Net Salary) मा बनाउनुपर्छ। दैनिक चिया-खाजा र वालेटबाट हुने सानातिना अनलाइन खर्च जोड्दा महिनाको १०-१५ हजार सजिलै बाहिरिन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "२ खाताको नियम",
                      "text": "एउटा खाता तलब र स्थिर खर्चका लागि र अर्को खाता दैनिक पकेट खर्चका लागि प्रयोग गर्नुहोस्।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-503020-nepal",
                  "title": "नेपालका लागि ५०/३०/२० बजेट नियम",
                  "content": "५०% आवश्यकता (भाडा, रासन), ३०% चाहना र २०% अनिवार्य बचत। तलब आएकै दिन २०% बचत छुट्ट्याएर मात्र बाँकी रकम खर्च गर्नुहोस्।",
                  "callout": {
                      "type": "important",
                      "title": "पहिले आफूलाई बचत",
                      "text": "तलब आएको दिन मोबाइल बैंकिङबाट २०% रकम सिधै मुद्दती वा SIP मा जाने व्यवस्था गर्नुहोस्।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-festival-sinking-funds",
                  "title": "दशैं-तिहार र चाडपर्वका लागि सिङ्किङ फण्ड (Sinking Fund)",
                  "content": "दशैंको खर्चका लागि वर्षभरि हरेक महिना थोरै-थोरै रकम छुट्ट्याएर राख्दा चाडपर्वमा ऋण लिनु पर्दैन र मानसिक शान्ति रहन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "ऋणमुक्त चाडपर्व",
                      "text": "दशैं मनाउन ऋण लिनु वित्तीय प्रगतिको बाधक हो। मासिक बचतबाटै चाडपर्व कोष बनाउनुहोस्।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-emergency-fund",
                  "title": "६ महिनाको आपतकालीन बचत कोष",
                  "content": "कुनै पनि जोखिमपूर्ण लगानी गर्नुअगावै ६ महिनाको न्यूनतम खर्च धान्ने आपतकालीन कोष बैंकको मुद्दती वा सुरक्षित खातामा राख्नुपर्छ।",
                  "callout": {
                      "type": "warning",
                      "title": "आपतकालीन कोष सेयरमा नहाल्नुहोस्",
                      "text": "यो कोष जहिले पनि सुरक्षित र तुरुन्तै झिक्न मिल्ने हुनुपर्छ।"
                  }
              }
          ],
          "nepalContext": "नेपाली पारिवारिक संरचना र जीवनयापनको लागत अनुसार तयार पारिएको।",
          "practicalScenario": {
              "persona": "प्रशान्त, २७, काठमाडौँ",
              "challenge": "६५ हजार तलब हुँदा पनि महिनाको २५ गते नै पैसा सकिने समस्या थियो।",
              "solutionText": "प्रशान्तले २-खाता प्रणाली लागु गरे, चाडपर्व कोष सुरु गरे र महिनाको १३,००० (२०%) SIP मा हालेर पहिलो वर्षमै १.५ लाख बचत गरे।"
          },
          "calculatorShortcut": {
              "slug": "inflation",
              "name": "मुद्रास्फीति तथा बजेट Calculator",
              "desc": "महँगीले क्रयशक्तिमा पार्ने असर र ५०/३०/२० बजेट बाँडफाँड हिसाब गर्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "नेपाल व्यक्तिगत बजेट प्लानर (Excel/Sheets)",
                  "type": "Spreadsheet",
                  "size": "१४२ KB",
                  "href": "/resources/budget-planner-system"
              }
          ],
          "faqs": [
              {
                  "q": "कोठा भाडा धेरै भएमा के गर्ने?",
                  "a": "सकभर साथीहरूसँग फ्ल्याट सेयर गर्ने वा यातायात सुविधा भएको अलि बाहिरी क्षेत्र रोज्ने।"
              },
              {
                  "q": "वालेटमा कति पैसा राख्ने?",
                  "a": "फजुल खर्च रोक्न डिजिटल वालेटमा २ देखि ५ हजारभन्दा बढी नराख्नुहोस्।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "बजेटको आधार र नगद प्रवाह",
                  "slug": "budgeting-basics",
                  "categorySlug": "personal-finance",
                  "readTime": "१० मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "नेपालको वाणिज्य बैंकिङ प्रणालीको पूर्ण गाइड",
                  "slug": "complete-banking-guide",
                  "readTime": "१२ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "मुद्रास्फीति Calculator",
                  "slug": "inflation"
              },
              "nextGlossary": {
                  "title": "Budget (बजेट)",
                  "term": "Budget (बजेट)",
                  "def": "मासिक आम्दानीलाई आवश्यकता, चाहना र भविष्यको बचत बीच व्यवस्थित बाँडफाँड गर्ने योजना।"
              }
          }
      }
  },
  'complete-business-guide': {
      "id": "complete-business-guide",
      "slug": "complete-business-guide",
      "categorySlug": "business",
      "categoryName": {
          "en": "Business & Entrepreneurship",
          "np": "व्यवसाय तथा उद्यमशीलता"
      },
      "title": {
          "en": "Complete Nepal Business Registration & Corporate Tax Guide",
          "np": "नेपालमा कम्पनी दर्ता र व्यावसायिक करको पूर्ण गाइड"
      },
      "oneLineSummary": {
          "en": "The definitive step-by-step roadmap to Private Limited vs Sole Proprietorship registration at OCR, municipal ward licensing, Business PAN/VAT, and corporate tax compliance in Nepal.",
          "np": "कम्पनी रजिष्ट्रार कार्यालय (OCR) मा प्रालि दर्ता, वडा इजाजत, व्यावसायिक PAN/VAT, र संस्थागत कर अनुपालनको सम्पूर्ण व्यावहारिक विधि।"
      },
      "difficulty": {
          "en": "Intermediate",
          "np": "मध्यम"
      },
      "readTime": {
          "en": "16 min read",
          "np": "१६ मिनेट पढाइ"
      },
      "sectionsCount": 7,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa Corporate Advisory Desk",
          "np": "risePaisa कर्पोरेट अनुसन्धान टोली"
      },
      "reviewedBy": {
          "en": "Verified under Companies Act 2063 & Industrial Enterprises Act",
          "np": "कम्पनी ऐन २०६३ र औद्योगिक व्यवसाय ऐन अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Clear Business Identity & Company Name Ideas",
              "type": "Prerequisite"
          },
          {
              "title": "Shareholder Citizenships & MOA/AOA Drafts",
              "type": "Document"
          }
      ],
      "en": {
          "intro": "Starting a formal business in Nepal requires navigating the Office of the Company Registrar (OCR - कम्पनी रजिष्ट्रारको कार्यालय), local municipal wards, the Inland Revenue Department (IRD), and the Department of Industry. Whether you are launching a technology startup, an import/export venture, or a consulting firm, understanding legal entity types, liability protection, VAT thresholds, and annual audit requirements is essential to long-term commercial success.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-entity-types",
                  "title": "Sole Proprietorship vs Private Limited (Pvt Ltd)",
                  "content": "A Sole Proprietorship (एकलौटी फर्म) is registered with the Department of Commerce or local municipal ward; it carries unlimited personal liability, meaning personal assets can be seized for business debts. A Private Limited Company (प्राइभेट लिमिटेड - Pvt Ltd) registered at the OCR offers Limited Liability protection, separate legal personhood, perpetual succession, and the ability to issue equity shares to investors or employees.",
                  "callout": {
                      "type": "tip",
                      "title": "Single-Person Company",
                      "text": "Under the Companies Act 2063, a single individual can incorporate a 100% owned Private Limited company without needing a partner."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-ocr-registration",
                  "title": "Step-by-Step Online Registration at OCR",
                  "content": "Company registration is 100% digital via ocr.gov.np: Step 1: Submit Company Name Reservation; Step 2: Draft Memorandum of Association (MOA - प्रबन्धपत्र) and Articles of Association (AOA - नियमावली) stating authorized capital and business objectives; Step 3: Upload shareholder citizenship scans; Step 4: Pay government registration fees online. Upon electronic verification, the OCR issues your digital Certificate of Incorporation.",
                  "callout": {
                      "type": "important",
                      "title": "Zero Government Fee for Startups",
                      "text": "Recent Finance Acts waived OCR registration fees and capital expansion fees for new startups with paid-up capital up to NPR 1 Crore!"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-pan-vat",
                  "title": "Business PAN vs Value Added Tax (VAT - 13%)",
                  "content": "Within 30 days of incorporation, apply for Business PAN at your local Taxpayer Service Office (TSO). VAT registration (13%) is mandatory if your business sells goods with annual turnover exceeding NPR 50 Lakhs, or provides services with turnover exceeding NPR 20 Lakhs, or operates in mandatory VAT categories (consulting, hardware, electronics).",
                  "callout": {
                      "type": "warning",
                      "title": "Monthly VAT Filing",
                      "text": "Once registered in VAT, you must submit monthly VAT returns by the 25th of every month even if your sales are zero (Nil Return) to avoid fines."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-ward-license",
                  "title": "Local Municipal Ward Business Registration",
                  "content": "Under federal local governance laws, every business must register with its local Ward Office (वडा कार्यालय). Submit your OCR certificate, business PAN, rent agreement with property owner's citizenship, and pay the annual municipal business tax (व्यवसाय कर) to receive your ward operating license.",
                  "callout": {
                      "type": "tip",
                      "title": "Rent Agreement TDS",
                      "text": "Ensure your commercial rent agreement accounts for 10% House Rent Tax (घरबहाल कर) payable to the local municipality."
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-corporate-tax",
                  "title": "Corporate Tax Slabs & Annual Audit Compliance",
                  "content": "Standard corporate income tax for private limited companies in Nepal is 25% on net taxable profits. Special rates apply: 20% for manufacturing entities, 30% for banks and financial institutions. Every registered company must appoint a licensed Chartered Accountant (CA or RA) for an annual statutory audit and submit returns to IRD and OCR within 6 months of fiscal year-end.",
                  "callout": {
                      "type": "important",
                      "title": "Maintain Audit Receipts",
                      "text": "Always obtain formal VAT invoices for all company purchases so expenses can be legally deducted from taxable revenue."
                  }
              }
          ],
          "nepalContext": "Supervised by the Ministry of Industry, Commerce and Supplies and Inland Revenue Department under Companies Act 2063.",
          "practicalScenario": {
              "persona": "Nabin & Smriti, Tech Entrepreneurs in Kathmandu",
              "challenge": "Wanted to incorporate an IT services firm to receive international payments and hire developers legally.",
              "solutionText": "Nabin & Smriti reserved their name online at ocr.gov.np, incorporated a Pvt Ltd with zero registration fees, obtained a Business PAN with 1% export tax certification, and opened a corporate foreign currency account."
          },
          "calculatorShortcut": {
              "slug": "nepal-income-tax",
              "name": "Corporate & Income Tax Calculator",
              "desc": "Calculate business tax liabilities, simulate allowable deductions, and project net profit after tax."
          },
          "downloadableResources": [
              {
                  "title": "Nepal Business Registration & Statutory Compliance Checklist",
                  "type": "PDF Guide",
                  "size": "340 KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "How much minimum paid-up capital is required to start a Pvt Ltd?",
                  "a": "There is no minimum paid-up capital requirement for general companies in Nepal under current regulations; you can incorporate with as little as NPR 10,000."
              },
              {
                  "q": "What happens if I fail to submit annual returns to OCR?",
                  "a": "The OCR levies progressive monthly late fines on late AGM submissions and annual financial statements."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Personal PAN vs Business PAN in Nepal",
                  "slug": "pan-explained",
                  "categorySlug": "taxation",
                  "readTime": "10 min read"
              },
              "nextGuide": {
                  "title": "Complete Nepal Salary Earner Tax Guide",
                  "slug": "complete-income-tax-guide",
                  "readTime": "16 min read"
              },
              "nextCalculator": {
                  "title": "Income Tax Calculator",
                  "slug": "nepal-income-tax"
              },
              "nextGlossary": {
                  "title": "VAT (मूल्य अभिवृद्धि कर)",
                  "term": "VAT (मूल्य अभिवृद्धि कर)",
                  "def": "A standard 13% indirect consumption tax levied on goods and services in Nepal."
              }
          }
      },
      "np": {
          "intro": "नेपालमा कानुनी रूपमा व्यवसाय सुरु गर्न कम्पनी रजिष्ट्रारको कार्यालय (OCR), वडा कार्यालय र आन्तरिक राजस्व विभाग (IRD) को प्रक्रिया पूरा गर्नुपर्छ। प्रालि कम्पनी दर्ता, PAN/VAT र अडिट प्रक्रिया बुझ्दा व्यवसाय सञ्चालन सहज हुन्छ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-entity-types",
                  "title": "एकलौटी फर्म र प्राइभेट लिमिटेड (Pvt Ltd) को फरक",
                  "content": "एकलौटी फर्ममा व्यक्तिगत सम्पत्तिको जोखिम हुन्छ। प्राइभेट लिमिटेड कम्पनीमा लगानीकर्ताको दायित्व सीमित हुन्छ र कम्पनीको आफ्नै कानुनी अस्तित्व हुन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "एकल व्यक्ति कम्पनी",
                      "text": "कम्पनी ऐन २०६३ अनुसार एक जना मात्र व्यक्तिले पनि आफ्नै स्वामित्वमा प्रालि कम्पनी खोल्न सक्छ।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-ocr-registration",
                  "title": "OCR मा अनलाइन कम्पनी दर्ता प्रक्रिया",
                  "content": "ocr.gov.np बाट नाम रिजर्भ गर्ने, प्रबन्धपत्र र नियमावली तयार गरी नागरिकतासहित अनलाइन पेश गरेपछि कम्पनी दर्ता प्रमाणपत्र प्राप्त हुन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "स्टार्टअपका लागि निःशुल्क दर्ता",
                      "text": "सरकारले १ करोडसम्म पुँजी भएका नयाँ कम्पनीहरूको दर्ता र पुँजी वृद्धि शुल्क पूर्ण रूपमा निःशुल्क गरेको छ।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-pan-vat",
                  "title": "व्यावसायिक PAN र मूल्य अभिवृद्धि कर (VAT - १३%)",
                  "content": "कम्पनी दर्ता भएको ३० दिनभित्र PAN लिनुपर्छ। वार्षिक २० लाखभन्दा बढीको सेवा वा ५० लाखभन्दा बढीको सामान कारोबार भएमा अनिवार्य VAT दर्ता गर्नुपर्छ।",
                  "callout": {
                      "type": "warning",
                      "title": "मासिक भ्याट विवरण",
                      "text": "VAT मा दर्ता भएपछि कारोबार शून्य भए पनि हरेक महिनाको २५ गतेभित्र शून्य विवरण (Nil Return) बुझाउनुपर्छ।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-ward-license",
                  "title": "स्थानीय वडा कार्यालयमा व्यवसाय दर्ता",
                  "content": "कम्पनीको प्रमाणपत्र, घरबहाल सम्झौता र PAN लिएर सम्बन्धित वडा कार्यालयमा व्यवसाय कर तिरी व्यवसाय सञ्चालन इजाजत लिनुपर्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "घरबहाल कर",
                      "text": "स्थानीय तहलाई १०% घरबहाल कर तिरेको रसिद वडा दर्ताका लागि आवश्यक हुन्छ।"
                  }
              },
              {
                  "num": 5,
                  "id": "chap-5-corporate-tax",
                  "title": "संस्थागत कर (२५%) र वार्षिक अडिट",
                  "content": "सामान्य कम्पनीहरूको खुद नाफामा २५% संस्थागत कर लाग्छ। हरेक आर्थिक वर्ष सकिएपछि चार्टर्ड एकाउन्टेन्टबाट अडिट गराई IRD र OCR मा विवरण बुझाउनुपर्छ।",
                  "callout": {
                      "type": "important",
                      "title": "भ्याट बिल लिनुहोस्",
                      "text": "कम्पनीको नाममा गरिएका खर्चको आधिकारिक भ्याट बिल लिएमा मात्र त्यसलाई नाफाबाट घटाउन पाइन्छ।"
                  }
              }
          ],
          "nepalContext": "उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालय मातहत कम्पनी ऐन २०६३ अनुसार सञ्चालित।",
          "practicalScenario": {
              "persona": "नबिन र स्मृति, काठमाडौँ",
              "challenge": "विदेशी ग्राहकबाट सफ्टवेयर कामको भुक्तानी लिन प्रालि कम्पनी दर्ता गर्न चाहन्थे।",
              "solutionText": "उनीहरूले OCR मा निःशुल्क अनलाइन प्रालि दर्ता गरे, १% सफ्टवेयर निकासी कर सुविधा लिए र बैंकमा विदेशी मुद्रा खाता खोलेर काम सुरु गरे।"
          },
          "calculatorShortcut": {
              "slug": "nepal-income-tax",
              "name": "संस्थागत तथा आयकर Calculator",
              "desc": "व्यावसायिक कर दायित्व, खर्च कट्टी र खुद नाफा हिसाब गर्नुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "नेपाल व्यवसाय दर्ता चेकलिस्ट",
                  "type": "PDF गाइड",
                  "size": "३४० KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "प्रालि खोल्न कति न्यूनतम पुँजी चाहिन्छ?",
                  "a": "हालको नियम अनुसार न्यूनतम पुँजीको कुनै कडा सीमा छैन; १० हजार रुपैयाँमै पनि कम्पनी सुरु गर्न सकिन्छ।"
              },
              {
                  "q": "OCR मा वार्षिक विवरण नबुझाए के हुन्छ?",
                  "a": "समयमै वार्षिक साधारण सभा र अडिट रिपोर्ट नबुझाएमा कम्पनी रजिष्ट्रार कार्यालयले जरिवाना लगाउँछ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "व्यक्तिगत PAN र व्यावसायिक PAN को फरक",
                  "slug": "pan-explained",
                  "categorySlug": "taxation",
                  "readTime": "१० मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "तलबजीवी कर्मचारीका लागि आयकरको पूर्ण गाइड",
                  "slug": "complete-income-tax-guide",
                  "readTime": "१६ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "आयकर Calculator",
                  "slug": "nepal-income-tax"
              },
              "nextGlossary": {
                  "title": "VAT (मूल्य अभिवृद्धि कर)",
                  "term": "VAT (मूल्य अभिवृद्धि कर)",
                  "def": "नेपालमा वस्तु तथा सेवाको बिक्रीमा लाग्ने मानक १३ प्रतिशत अप्रत्यक्ष उपभोग कर।"
              }
          }
      }
  },
  'complete-digital-payments-guide': {
      "id": "complete-digital-payments-guide",
      "slug": "complete-digital-payments-guide",
      "categorySlug": "digital-payments",
      "categoryName": {
          "en": "Digital Payments & FinTech",
          "np": "डिजिटल भुक्तानी तथा फिन्टेक"
      },
      "title": {
          "en": "Complete Nepal Digital Payments & FinTech Guide",
          "np": "नेपालमा डिजिटल भुक्तानी र फिन्टेकको पूर्ण गाइड"
      },
      "oneLineSummary": {
          "en": "Master connectIPS, QR payment rails (Fonepay/NepalPay), digital wallet limits, zero-fee interbank transfers, and cyber fraud protection in Nepal.",
          "np": "connectIPS, Fonepay र NepalPay QR नेटवर्क, डिजिटल वालेट सीमा, निःशुल्क अन्तरबैंक रकमान्तर र अनलाइन वित्तीय सुरक्षाको पूर्ण गाइड।"
      },
      "difficulty": {
          "en": "Beginner",
          "np": "सुरुवाती"
      },
      "readTime": {
          "en": "12 min read",
          "np": "१२ मिनेट पढाइ"
      },
      "sectionsCount": 6,
      "updatedDate": "Recent / Sep 2026",
      "author": {
          "en": "RisePaisa FinTech Research Desk",
          "np": "risePaisa फिन्टेक अनुसन्धान टोली"
      },
      "reviewedBy": {
          "en": "Verified under NRB Payment Systems Department Directives",
          "np": "नेपाल राष्ट्र बैंक भुक्तानी प्रणाली विभागको निर्देशन अनुसार प्रमाणित"
      },
      "prerequisites": [
          {
              "title": "Active Bank Account in Nepal",
              "type": "Prerequisite"
          },
          {
              "title": "Smartphone with Registered Mobile Number",
              "type": "Prerequisite"
          }
      ],
      "en": {
          "intro": "Nepal's payment ecosystem has leapfrogged from cash and physical cheques directly into instantaneous mobile-first digital rails. Supervised by the Payment Systems Department of Nepal Rastra Bank, digital transactions via QR codes, digital wallets (eSewa, Khalti, IME Pay), and account-to-account clearing rails (connectIPS, NCHL) now clear trillions of rupees monthly. Understanding these payment rails unlocks effortless commerce, zero-fee utility payments, and robust personal cyber safety.",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-rails",
                  "title": "The Core Rails: connectIPS vs Digital Wallets vs Mobile Apps",
                  "content": "Nepal's FinTech operates on distinct layers: connectIPS is an account-to-account automated clearing house (ACH) linking bank accounts directly with flat nominal fees (NPR 2 to NPR 8) and high limits (up to NPR 10-20 Lakhs). Digital Wallets (eSewa, Khalti) are prepaid instruments that hold stored-value balances ideal for micro-payments, ride-sharing, and cinema tickets. Mobile Banking Apps combine both, embedding QR scanners and direct fund transfers into your phone.",
                  "callout": {
                      "type": "tip",
                      "title": "connectIPS Saves Money",
                      "text": "For transferring amounts above NPR 10,000, connectIPS costs only NPR 4 to NPR 8, compared to wallet withdrawal fees."
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-qr-interoperability",
                  "title": "QR Payments & Interoperability (Fonepay & NepalPay)",
                  "content": "Nepal has established interoperable retail QR standards governed by the National Payment Switch (NPS). Whether a merchant displays a Fonepay QR or a NepalPay QR, you can scan and pay directly using any licensed commercial bank mobile application without transaction fees.",
                  "callout": {
                      "type": "important",
                      "title": "Zero Consumer Surcharge",
                      "text": "Merchants in Nepal are legally barred from adding a surcharge or fee when you pay via QR code. Always report merchants attempting to levy extra charges."
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-wallet-limits",
                  "title": "NRB Wallet & Mobile Transaction Limits",
                  "content": "NRB enforces standardized security caps: Verified digital wallets support up to NPR 25,000 per transaction, NPR 100,000 per day, and NPR 500,000 per month. Direct mobile banking supports NPR 100,000 to NPR 200,000 per day. connectIPS web platform supports up to NPR 10 Lakhs to NPR 20 Lakhs per day.",
                  "callout": {
                      "type": "tip",
                      "title": "Complete Video KYC",
                      "text": "Unverified wallet accounts are capped at only NPR 5,000/month. Complete your in-app biometric or video KYC to unlock full limits."
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-cyber-safety",
                  "title": "Cyber Security: Preventing Social Engineering Scams",
                  "content": "Financial fraud in Nepal primarily occurs through social engineering: fake social media ads promising cheap iPhones, fraudulent calls asking for OTPs to 'upgrade KYC', or bogus lottery wins. Never share your OTP, transaction PIN, or login credentials with anyone.",
                  "callout": {
                      "type": "warning",
                      "title": "Immediate Action on Fraud",
                      "text": "If you suspect unauthorized access, immediately freeze your account via mobile banking or call your bank's 24/7 card/digital helpdesk."
                  }
              }
          ],
          "nepalContext": "Governed by the Payment and Settlement Act 2075 under the supervision of Nepal Rastra Bank.",
          "practicalScenario": {
              "persona": "Aayush, 24, University Student in Pokhara",
              "challenge": "Faced high wallet load fees and feared accidental payment transfers to wrong numbers.",
              "solutionText": "Aayush activated connectIPS on his student bank account for direct QR payments, set a daily transaction limit of NPR 5,000 in his banking app, and enabled biometric fingerprint authentication."
          },
          "calculatorShortcut": {
              "slug": "inflation",
              "name": "Digital Cash Flow & Budget Tool",
              "desc": "Track your monthly digital transactions and optimize interbank transfer costs."
          },
          "downloadableResources": [
              {
                  "title": "Nepal Digital Banking & Cybersecurity Best Practices",
                  "type": "PDF Guide",
                  "size": "270 KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "Can I reverse an accidental transfer sent to the wrong mobile number?",
                  "a": "Contact your bank or wallet support immediately with the transaction reference. If the receiver refuses to return funds, you can file a complaint with the Nepal Police Cyber Bureau."
              },
              {
                  "q": "Are there fees for scanning QR codes at grocery stores in Nepal?",
                  "a": "No, retail QR payments are completely free of charge for consumers."
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "Commercial Banking Systems in Nepal",
                  "slug": "fixed-deposit",
                  "categorySlug": "banking",
                  "readTime": "10 min read"
              },
              "nextGuide": {
                  "title": "Complete Nepal Commercial Banking Guide",
                  "slug": "complete-banking-guide",
                  "readTime": "12 min read"
              },
              "nextCalculator": {
                  "title": "Fixed Deposit Calculator",
                  "slug": "fixed-deposit"
              },
              "nextGlossary": {
                  "title": "QR Payment (Fonepay / NepalPay)",
                  "term": "QR Payment (Fonepay / NepalPay)",
                  "def": "Standardized QR code protocol enabling instant direct bank-to-bank retail payments in Nepal."
              }
          }
      },
      "np": {
          "intro": "नेपालमा नगद कारोबारबाट सिधै मोबाइल र QR भुक्तानीमा ठूलो फड्को मारिएको छ। नेपाल राष्ट्र बैंकको भुक्तानी प्रणाली विभाग अन्तर्गत connectIPS, वालेट (eSewa, Khalti) र Fonepay/NepalPay QR मार्फत दैनिक अर्बौँको कारोबार सुरक्षित रूपमा भइरहेको छ।",
          "chapters": [
              {
                  "num": 1,
                  "id": "chap-1-rails",
                  "title": "connectIPS, डिजिटल वालेट र मोबाइल बैंकिङको फरक",
                  "content": "connectIPS बैंक खाता जोडेर सस्तो शुल्क (रु. २ देखि ८) मा ठूलो रकम पठाउने माध्यम हो। वालेट सानातिना खर्चका लागि र मोबाइल बैंकिङ सबै सेवा एकै ठाउँबाट लिन प्रयोग हुन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "connectIPS को बचत",
                      "text": "१० हजारभन्दा बढी रकम ट्रान्सफर गर्दा connectIPS निकै सस्तो पर्छ।"
                  }
              },
              {
                  "num": 2,
                  "id": "chap-2-qr-interoperability",
                  "title": "QR भुक्तानी: Fonepay र NepalPay",
                  "content": "पसलमा जुनसुकै QR भए पनि आफ्नो बैंकको मोबाइल एपबाट सिधै स्क्यान गरी बिना कुनै अतिरिक्त शुल्क तत्काल भुक्तानी गर्न सकिन्छ।",
                  "callout": {
                      "type": "important",
                      "title": "ग्राहकलाई कुनै शुल्क लाग्दैन",
                      "text": "QR बाट भुक्तानी गर्दा पसलेले कुनै थप शुल्क लिन पाउँदैनन्।"
                  }
              },
              {
                  "num": 3,
                  "id": "chap-3-wallet-limits",
                  "title": "दैनिक कारोबार सीमा र KYC",
                  "content": "प्रमाणीकरण भएका वालेटबाट दैनिक १ लाख र मासिक ५ लाखसम्म कारोबार गर्न सकिन्छ। KYC नभएका खातामा मासिक ५ हजारको मात्र सीमा हुन्छ।",
                  "callout": {
                      "type": "tip",
                      "title": "भिडियो KYC गर्नुहोस्",
                      "text": "एपबाटै तुरुन्तै भिडियो KYC गरेर पूर्ण कारोबार सीमा खोल्नुहोस्।"
                  }
              },
              {
                  "num": 4,
                  "id": "chap-4-cyber-safety",
                  "title": "साइबर सुरक्षा: नक्कली फोन र OTP ठगीबाट बच्ने उपाय",
                  "content": "चिठ्ठा परेको वा पुरस्कार दिने बहानामा आउने फोन र म्यासेजमा कहिल्यै विश्वास नगर्नुहोस्। आफ्नो गोप्य OTP कसैलाई पनि नदिनुहोस्।",
                  "callout": {
                      "type": "warning",
                      "title": "तत्काल खाता रोक्का",
                      "text": "शंकास्पद गतिविधि देखिएमा तुरुन्तै मोबाइल बैंकिङबाट खाता रोक्का गर्नुहोस्।"
                  }
              }
          ],
          "nepalContext": "भुक्तानी तथा फछ्र्यौट ऐन २०७५ अन्तर्गत नेपाल राष्ट्र बैंकद्वारा नियमन गरिएको।",
          "practicalScenario": {
              "persona": "आयुष, २४, पोखरा",
              "challenge": "वालेटमा पैसा हाल्दा लाग्ने शुल्क र गलत नम्बरमा पैसा जाने डर थियो।",
              "solutionText": "आयुषले आफ्नो बैंक खातामा connectIPS जोडे, दैनिक ५,००० को सीमा तोके र फिंगरप्रिन्ट प्रमाणीकरण गरेर सुरक्षित भुक्तानी सुरु गरे।"
          },
          "calculatorShortcut": {
              "slug": "inflation",
              "name": "डिजिटल बजेट औजार",
              "desc": "मासिक डिजिटल कारोबार ट्र्याक गरी अन्तरबैंक रकमान्तर खर्च घटाउनुहोस्।"
          },
          "downloadableResources": [
              {
                  "title": "नेपाल डिजिटल बैंकिङ सुरक्षा निर्देशिका",
                  "type": "PDF गाइड",
                  "size": "२७० KB",
                  "href": "/resources/nepse-beginner-guide"
              }
          ],
          "faqs": [
              {
                  "q": "गलत नम्बरमा पैसा गएमा फिर्ता आउँछ?",
                  "a": "तुरुन्तै बैंक वा वालेटको ग्राहक सेवामा कारोबार नम्बर टिपाउनुहोस्। फिर्ता नदिएमा नेपाल प्रहरीको साइबर ब्युरोमा उजुरी दिन सकिन्छ।"
              },
              {
                  "q": "पसलमा QR स्क्यान गर्दा शुल्क लाग्छ?",
                  "a": "लाग्दैन, ग्राहकका लागि QR भुक्तानी पूर्ण रूपमा निःशुल्क हुन्छ।"
              }
          ],
          "whereToGoNext": {
              "nextLesson": {
                  "title": "नेपालमा वाणिज्य बैंकिङ प्रणाली",
                  "slug": "fixed-deposit",
                  "categorySlug": "banking",
                  "readTime": "१० मिनेट पढाइ"
              },
              "nextGuide": {
                  "title": "नेपालको वाणिज्य बैंकिङ प्रणालीको पूर्ण गाइड",
                  "slug": "complete-banking-guide",
                  "readTime": "१२ मिनेट पढाइ"
              },
              "nextCalculator": {
                  "title": "मुद्दती निक्षेप Calculator",
                  "slug": "fixed-deposit"
              },
              "nextGlossary": {
                  "title": "QR Payment (Fonepay / NepalPay)",
                  "term": "QR Payment (Fonepay / NepalPay)",
                  "def": "मोबाइल बैंकिङ र वालेटबाट सोझै बैंक खातामा तत्काल भुक्तानी गर्ने डिजिटल प्रणाली।"
              }
          }
      }
  },
  'complete-ipo-guide': IPO_GUIDE,
  'complete-cdsc-guide': CDSC_GUIDE,
  ...EXPANDED_GUIDES,
  ...ADDITIONAL_GUIDES,
  // Canonical aliases for internal link resilience
  get 'complete-mutual-funds-guide'() { return this['complete-mutual-fund-guide']; },
  get 'complete-nepse-investing-guide'() { return this['complete-tms-guide']; }
};

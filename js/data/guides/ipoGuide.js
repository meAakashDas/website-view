// ==============================================
// risePaisa - Complete Initial Public Offering (IPO) Guide for Nepal
// The Definitive Reference for Primary Market Issues under SEBON & CDSC
// ==============================================

export const IPO_GUIDE = {
  id: 'complete-ipo-guide',
  slug: 'complete-ipo-guide',
  categorySlug: 'nepse',
  categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
  title: {
    en: 'Complete Initial Public Offering (IPO) Guide for Nepal',
    np: 'नेपालमा प्राथमिक सेयर (IPO) को पूर्ण कर्नरस्टोन गाइड'
  },
  oneLineSummary: {
    en: 'The definitive end-to-end manual on applying for IPOs in Nepal: par value (NPR 100) vs book building, C-ASBA and CRN setup, MeroShare application workflow, 10-kitta allotment probability mathematics, and post-listing secondary market trading.',
    np: 'नेपालमा IPO भर्ने सम्पूर्ण व्यावहारिक गाइड: अंकित मूल्य रु. १०० र बुक बिल्डिङ, C-ASBA तथा CRN नम्बर, MeroShare बाट आवेदन दिने तरिका, १० कित्ता बाँडफाँडको गणित र दोस्रो बजारमा सेयर सूचीकरण।'
  },
  difficulty: { en: 'Beginner', np: 'सुरुवाती' },
  readTime: { en: '14 min read', np: '१४ मिनेट पढाइ' },
  sectionsCount: 7,
  updatedDate: 'FY 2083/84 / Sep 2026',
  author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
  reviewedBy: {
    en: 'Verified for Nepal Regulatory Accuracy (Securities Board of Nepal & CDSC Guidelines)',
    np: 'धितोपत्र बोर्ड (SEBON) र सिडिएससी नियमावली अनुसार प्रमाणित'
  },
  prerequisites: [
    { title: 'Active Bank Account with C-ASBA & CRN', type: 'Prerequisite' },
    { title: 'Demat Account & 16-Digit BOID', type: 'Document' },
    { title: 'Active MeroShare Web & Mobile Credentials', type: 'Prerequisite' },
    { title: 'Sufficient Bank Balance (Min. NPR 1,000 for 10 Kitta)', type: 'Capital' }
  ],
  en: {
    intro: 'An Initial Public Offering (IPO) is the formal mechanism through which an unlisted private company transforms into a publicly traded corporate entity on the Nepal Stock Exchange (NEPSE). Regulated strictly by the Securities Board of Nepal (SEBON) under the Securities Act 2063 and the Securities Issue and Allotment Guidelines 2074, an IPO represents the safest and most accessible entry gate for retail citizens to participate in national wealth creation. Rather than purchasing existing shares from seasoned speculators at fluctuating secondary market valuations, an IPO allows you to buy newly issued shares directly from the issuing company at baseline statutory prices-traditionally fixed at NPR 100 per share. With millions of active MeroShare accounts competing for limited share allocations, understanding the regulatory quotas, allotment mathematics, risk disclosures, and digital C-ASBA mechanics is mandatory to build an enduring investment portfolio.',
    chapters: [
      {
        num: 1,
        id: 'chap-1-types-and-pricing',
        title: 'Par Value (NPR 100), Premium Issues & The Book Building Method',
        content: 'For decades, virtually every ordinary share IPO in Nepal was issued at a standardized par value of NPR 100 per kitta, regardless of whether the company was an established commercial bank or a newly constructed run-of-the-river hydropower project. However, Nepal’s capital market has modernized into three distinct primary issue pricing models: (1) Standard Par Value (NPR 100): Common for hydropower companies and statutory public floats, where the issue price is fixed by law at face value. (2) Premium Issue: Profitable companies with strong reserve balances (e.g., manufacturing giants or insurance firms) are permitted by SEBON to add a net-worth-justified premium above NPR 100 (such as NPR 100 face value + NPR 106 premium = NPR 206 per share). (3) Book Building Method: Introduced to attract large real-sector industrial corporations, book building determines the price through Dutch auction institutional bidding within a bounded price band (e.g., NPR 350 to NPR 402.50), after which retail investors receive shares at a 10% statutory discount to the discovered cut-off price.',
        callout: {
          type: 'important',
          title: 'Not Every IPO Is Guaranteed Free Money',
          text: 'While standard NPR 100 hydropower IPOs have historically opened at premiums on NEPSE, premium and book-building IPOs carry actual downside risk. Always analyze the company’s Price-to-Earnings (P/E) ratio and Book Value Per Share (BVPS) before committing capital above face value.'
        }
      },
      {
        num: 2,
        id: 'chap-2-statutory-quotas',
        title: 'Understanding Regulatory Quotas: General Public, Local Affected & Foreign Workers',
        content: 'Under SEBON regulations, IPOs in Nepal are divided into mandatory reservation buckets to guarantee equitable economic distribution. For capital-intensive infrastructure projects like hydropower, companies must legally allocate 10% of their total equity to project-affected local residents (स्थानीय बासिन्दा), divided further into highly affected and general district resident categories. Furthermore, to incentivize formal remittance inflows and curb illegal Hundi channels, the Government of Nepal mandates that 10% of all public issue shares must be exclusively reserved for Nepali citizens employed abroad under valid government labor permits who hold dedicated remittance bank accounts. Mutual funds receive a statutory 5% institutional reservation, while employees of the issuing company receive between 2% and 5%. The remaining balance (typically 70% to 80%) is opened to the domestic General Public (सर्वसाधारण).',
        callout: {
          type: 'tip',
          title: 'Foreign Employment Quota Advantage',
          text: 'Because only certified migrant workers with remittance accounts can apply in the 10% foreign employment quota, the applicant pool is significantly smaller (approx. 50,000-80,000 applicants vs 1.4 million in general public), yielding vastly higher allotment probabilities (often 30-50 kitta guaranteed).'
        }
      },
      {
        num: 3,
        id: 'chap-3-casba-and-crn',
        title: 'C-ASBA Verification: Linking Your Bank, Demat & Obtaining Your CRN',
        content: 'Before digital reforms, applying for an IPO required physically standing in multi-kilometer queues outside issue manager bank branches with cash vouchers. Today, Nepal operates the C-ASBA (Centralized Application Supported by Blocked Amount) system, developed by CDSC. Under C-ASBA, when you apply for an IPO, your money never leaves your bank account at the time of application; instead, your bank simply "freezes" or blocks the required funds (e.g., NPR 1,000 for 10 shares) in your savings account while you continue earning daily interest on the entire balance. To use C-ASBA, you must obtain a C-ASBA Registration Number (CRN) from your depository participant bank. You visit your bank branch once (or apply via modern mobile banking apps), submit your Demat 16-digit BOID, and receive an 8-to-10-digit secret CRN string that permanently links your bank account to MeroShare.',
        callout: {
          type: 'important',
          title: 'The Name-Match Principle',
          text: 'The legal name and citizenship number on your bank account, your Demat account, and your MeroShare profile must be 100% identical. Any spelling discrepancy or nickname will cause the C-ASBA core-banking system to automatically reject your application.'
        }
      },
      {
        num: 4,
        id: 'chap-4-meroshare-application-workflow',
        title: 'Step-by-Step IPO Application Workflow on MeroShare (Web & App)',
        content: 'Once your CRN is active, applying for any active IPO takes under two minutes. Follow this exact workflow: (1) Log in to meroshare.cdsc.com.np or the official MeroShare mobile app using your DP, username, and password. (2) Navigate to "My ASBA" from the main sidebar and select the "Apply for Issue" tab. (3) Identify the active IPO listing and click "Apply". (4) Select your registered bank from the dropdown menu; your linked account number and branch will populate automatically. (5) In the "Applied Kitta" field, enter your desired quantity (the standard retail application is exactly 10 kitta). (6) Enter your confidential CRN number. (7) Check the statutory declaration box accepting that you have reviewed the prospectus. (8) Click "Submit" and enter your 4-digit transaction PIN (or biometrics). Your application status will immediately display "Unverified", shifting to "Verified" within 24 to 48 hours once your bank successfully blocks the fund balance.',
        callout: {
          type: 'tip',
          title: 'Applying on Day 1 vs Day 4 Makes Zero Difference',
          text: 'In Nepal’s 10-kitta lottery system, application timing carries zero mathematical advantage. Whether you apply five minutes after opening on Sunday or five minutes before closing on Wednesday, your lottery probability is completely identical.'
        }
      },
      {
        num: 5,
        id: 'chap-5-lottery-allotment-math',
        title: 'The 10-Kitta Allotment Rule & Real-World Probability Mathematics',
        content: 'Under Rule 30 of the Securities Issue and Allotment Guidelines 2074, SEBON enforces a strict egalitarian distribution rule: all valid applicants must be allotted a minimum lot of 10 shares before anyone can receive 20 shares. In almost all general public IPOs, issues are oversubscribed by 5x to 25x. For example, if a hydropower company issues 1,500,000 shares to the general public, exactly 150,000 applicants will receive 10 kitta each (150,000 × 10 = 1,500,000). If 1,350,000 valid retail applicants apply, the issue manager executes a computer-generated random cryptographic lottery. The mathematical probability of winning is calculated as: P = Total Available Lots / Total Valid Applicants = 150,000 / 1,350,000 = 11.11% (or roughly 1 in 9 applicants). Applying for 100 kitta or 1,000 kitta in an oversubscribed issue is completely futile-your extra capital is simply blocked for days without increasing your winning odds by a single percentage point.',
        callout: {
          type: 'tip',
          title: 'The Smart 10-Kitta Strategy',
          text: 'Unless an issue is heavily undersubscribed (rare in Nepal), always apply for exactly 10 kitta (NPR 1,000). Blocking NPR 10,000 or NPR 50,000 locks up your personal liquidity without providing any statistical edge.'
        }
      },
      {
        num: 6,
        id: 'chap-6-post-allotment-and-secondary-listing',
        title: 'Post-Allotment: Checking Results, Unfreezing Funds & Secondary Trading',
        content: 'Following the formal allotment ceremony held at the issue manager’s headquarters under SEBON oversight, results are published within hours. You can check your allotment status through four official channels: (1) iporesult.cdsc.com.np by entering the 16-digit BOID, (2) MeroShare under "Application Report", (3) the Issue Manager’s official website, or (4) the issuing company’s portal. If allotted, your bank permanently debits the blocked NPR 1,000, and the shares are credited to your Demat account within 5 to 7 business days. If not allotted, your bank receives an automated unfreeze mandate from CDSC and releases the blocked funds back into your active spending balance within 2 to 3 days. Once credited, CDSC lists the shares on NEPSE, which assigns an open trading price band (ranging between the company’s audited Book Value and 3x Book Value) for its first trading day.',
        callout: {
          type: 'important',
          title: 'First-Day Trading Price Band Formula',
          text: 'NEPSE calculates the opening price range as: Lower Limit = Net Worth Per Share, Upper Limit = 3 × Net Worth Per Share. For a company with BVPS of NPR 120, the opening trading price will sit between NPR 120 and NPR 360.'
        }
      },
      {
        num: 7,
        id: 'chap-7-common-pitfalls-and-due-diligence',
        title: 'Critical IPO Mistakes, Disqualification Triggers & Due Diligence',
        content: 'Thousands of retail applications are invalidated in every single IPO issue due to preventable compliance mistakes. The most severe error is submitting multiple applications under the same Demat account or attempting to use a minor’s Demat linked to non-compliant bank accounts; SEBON’s computerized validation algorithm detects duplicate BOIDs and rejects all associated applications without refund of processing fees. Another frequent pitfall is insufficient balance during bank verification: if your account holds NPR 995 due to an automated SMS charge when NPR 1,000 is required, your bank flags the transaction as "Insufficient Balance" and cancels your application. Finally, always inspect the credit rating assigned by ICRA Nepal, Care Ratings Nepal, or Infomerics: ratings from [ICRANP-IR] AAA (highest safety) down to BBB- reflect investment-grade issuers, while ratings in the BB, B, and C categories signify high financial distress and debt-servicing vulnerabilities.',
        callout: {
          type: 'warning',
          title: 'Beware of High-Debt Hydropower Promoters',
          text: 'Never assume every hydro company is an automatic goldmine. If construction costs have doubled to NPR 28 Crore per Megawatt and payback periods exceed 14 years, secondary market prices may plunge below the initial NPR 100 issue price.'
        }
      }
    ],
    nepalContext: 'In Nepal, primary equity markets are governed by the Securities Board of Nepal (SEBON) under the Securities Act 2063, the Securities Issue and Allotment Guidelines 2074, and the Central Depository Services Regulations 2068. All public offerings must be audited by registered chartered accountants and evaluated by a licensed credit rating agency before receiving SEBON public issuance consent. Bank charges for processing C-ASBA applications are legally capped between NPR 0 and NPR 5 per application by SEBON directives, ensuring that public wealth democratization remains affordable for every citizen across all 77 districts.',
    comparisonTable: {
      title: 'IPO Pricing & Issue Mechanism Comparison in Nepal',
      caption: 'Comparative breakdown of SEBON-regulated primary market issue models',
      headers: ['Feature', 'Standard Par Value', 'Premium Issue', 'Book Building Method'],
      rows: [
        ['Retail Issue Price', 'NPR 100 fixed face value', 'NPR 100 + Net-worth premium', '10% discount to discovered cut-off'],
        ['Typical Issuers', 'Hydropower, commercial banks, MFIs', 'Established manufacturing, life insurance', 'Large industrial & real sector companies'],
        ['Minimum Capital Needed', 'NPR 1,000 (10 kitta)', 'NPR 1,500 - NPR 3,000 (10 kitta)', 'NPR 3,500 - NPR 7,000 (10 kitta)'],
        ['Retail Downside Risk', 'Low (historic listing price > NPR 100)', 'Moderate (depends on P/E & reserves)', 'High (priced closer to fair market value)'],
        ['Retail Allocation Rule', 'Strict 10-kitta lottery model', 'Strict 10-kitta lottery model', 'Discovered retail quota allotment']
      ]
    },
    practicalScenario: {
      persona: 'Bikram, 24, Civil Engineer in Biratnagar',
      challenge: 'Earning NPR 45,000 monthly, Bikram wanted to start stock investing but was confused by coworkers applying for 50 kitta on high-premium manufacturing issues while ignoring small hydropower floats. He had NPR 20,000 in savings and feared making illegal duplicate applications or getting his funds frozen indefinitely.',
      solution: 'Bikram obtained his CRN from his local commercial bank branch, created his MeroShare login, and applied for exactly 10 kitta (NPR 1,000) across all standard NPR 100 par value issues. For a newly floated book-building issue, he reviewed the company’s prospectus, discovered that the cut-off price of NPR 410 was 45x earnings, and chose to pass. By systematically applying for 10 kitta in 18 issues over 12 months, he was allotted 4 IPOs with an initial outlay of NPR 4,000, which grew to a secondary market valuation exceeding NPR 16,800.'
    },
    calculatorShortcut: {
      slug: 'nepse-share',
      name: 'NEPSE Share Profit & Loss Calculator',
      desc: 'Calculate broker commissions, SEBON fees, DP charges, and capital gains tax on your newly allotted IPO shares.'
    },
    downloadableResources: [
      {
        title: 'Nepal IPO Application Checklist & Allotment Flowchart',
        type: 'PDF Guide',
        size: '1.4 MB',
        href: 'assets/downloads/nepal-ipo-application-checklist.html'
      }
    ],
    faqs: [
      {
        q: 'Can a minor (child below 16 years) apply for an IPO in Nepal?',
        a: 'Yes. Parents or legal guardians can open a Minor Demat account and a Minor Bank account using the child’s official Birth Certificate. The guardian’s citizenship is linked to the C-ASBA profile, allowing minors to legally participate in all general public IPO lotteries.'
      },
      {
        q: 'How many shares should I apply for in a typical general public IPO?',
        a: 'For virtually every general public issue in Nepal, you should apply for exactly 10 kitta (NPR 1,000 at face value). Because issues are overwhelmingly oversubscribed, SEBON’s 10-kitta lottery rule guarantees that applying for 20, 50, or 100 kitta provides zero additional statistical advantage.'
      },
      {
        q: 'What happens if my MeroShare status shows "Rejected" or "Unverified"?',
        a: 'If unverified, your bank has not yet processed the hold on your account balance. If marked "Rejected", the failure is almost always due to either insufficient funds at the moment the bank checked the account, or a name/citizenship mismatch between your bank account and your Demat profile. You must contact your bank branch to correct the discrepancy before the issue closes.'
      },
      {
        q: 'How long does it take for allotted IPO shares to appear in Demat and trade on NEPSE?',
        a: 'From the date of allotment, it typically takes 5 to 7 business days for the shares to be credited to your Demat account, and an additional 7 to 15 business days for NEPSE and CDSC to complete formal listing and assign a trading symbol.'
      }
    ],
    whereToGoNext: {
      nextLesson: {
        title: 'IPO Analysis: Red Flags & Prospectus Due Diligence',
        slug: 'ipo-analysis-red-flags',
        categorySlug: 'nepse',
        readTime: '15 min read'
      },
      nextGuide: {
        title: 'Complete CDSC & MeroShare Guide',
        slug: 'complete-cdsc-guide',
        readTime: '14 min read'
      },
      nextCalculator: {
        title: 'NEPSE Share Profit & CGT Calculator',
        slug: 'nepse-share'
      },
      nextGlossary: {
        title: 'C-ASBA (Centralized ASBA)',
        term: 'C-ASBA (सी-आस्बा)',
        def: 'Centralized system for issuing and blocking investor funds during IPO applications in Nepal.'
      }
    }
  },
  np: {
    intro: 'प्राथमिक सेयर निष्कासन (IPO) भनेको कुनै पनि पब्लिक वा प्राइभेट कम्पनीले सर्वसाधारण नागरिकहरूबाट पुँजी संकलन गरी नेपाल स्टक एक्सचेन्ज (NEPSE) मा सूचीकृत हुने आधिकारिक तथा कानुनी प्रक्रिया हो। नेपाल धितोपत्र बोर्ड (SEBON) को धितोपत्र निष्कासन तथा बाँडफाँड निर्देशिका २०७४ अनुसार सञ्चालित यो प्रणाली नेपाली नागरिकहरूका लागि देशको आर्थिक विकास र कर्पोरेट क्षेत्रको नाफामा हिस्सेदार बन्ने सबैभन्दा सुरक्षित र भरपर्दो आधार हो। दोस्रो बजारमा महँगो मूल्य तिरेर सेयर किन्नुको सट्टा, IPO मार्फत कम्पनीको आधारभूत अंकित मूल्य (प्रायः प्रति सेयर रु. १००) मा सेयर खरिद गर्न सकिन्छ। आज लाखौँ नागरिकहरू MeroShare मार्फत घरमै बसेर मोबाइलबाट IPO भर्न सक्छन्। तर बुक बिल्डिङ, C-ASBA प्रणाली, CRN नम्बर, आरक्षण कोटा र १० कित्ता बाँडफाँडको गणितीय नियम नबुझी लगानी गर्दा फाइदाको सट्टा पुँजी रोक्का हुने वा घाटा व्यहोर्नुपर्ने जोखिम पनि रहन्छ।',
    chapters: [
      {
        num: 1,
        id: 'chap-1-types-and-pricing',
        title: 'अंकित मूल्य (रु. १००), प्रिमियम निष्कासन र बुक बिल्डिङ विधि',
        content: 'नेपालमा लामो समयदेखि लगभग सबै कम्पनीहरूको सेयर अंकित मूल्य रु. १०० (Par Value) मै निष्कासन हुँदै आएको छ। तर हाल नेपाली सेयर बजारमा तीनवटा प्रमुख मूल्य निर्धारण विधि प्रचलनमा छन्: (१) साधारण अंकित मूल्य (रु. १००): जलविद्युत र वित्तीय क्षेत्रका अधिकांश कम्पनीहरूले कानुन अनुसार प्रति कित्ता रु. १०० मै सेयर निष्कासन गर्छन्। (२) प्रिमियम निष्कासन: विगतमा राम्रो नाफा कमाएका र जगेडा कोष बलियो भएका कम्पनीहरूले धितोपत्र बोर्डको स्वीकृति लिएर रु. १०० मा थप प्रिमियम जोडेर (जस्तै: रु. १०० अंकित मूल्य + रु. १०६ प्रिमियम = रु. २०६ प्रति कित्ता) सेयर जारी गर्न पाउँछन्। (३) बुक बिल्डिङ विधि: वास्तविक क्षेत्र (Manufacturing) का ठूला उद्योगहरूलाई बजारमा भित्र्याउन यो विधि ल्याइएको हो। यसमा संस्थागत लगानीकर्ताहरू बीच बोलकबोल (Bidding) गराएर मूल्यको सीमा (Price Band) तय गरिन्छ, र त्यसपछि सर्वसाधारणले १०% छुट पाएर सेयर भर्न पाउँछन्।',
        callout: {
          type: 'important',
          title: 'सबै IPO मा नाफा सुनिश्चित हुँदैन',
          text: 'रु. १०० दरका हाइड्रोपावर कम्पनीहरू दोस्रो बजारमा खुल्दा राम्रो नाफा दिए पनि, प्रिमियम र बुक बिल्डिङ विधिबाट महँगो मूल्यमा आएका सेयरमा बजार घट्दा घाटा हुने जोखिम रहन्छ। कम्पनीको प्रति सेयर नेटवर्थ र आम्दानी हेरेर मात्र लगानी गर्नुहोस्।'
        }
      },
      {
        num: 2,
        id: 'chap-2-statutory-quotas',
        title: 'आरक्षण कोटा: सर्वसाधारण, स्थानीय बासिन्दा र वैदेशिक रोजगारी (१०%)',
        content: 'धितोपत्र बोर्डको नियम अनुसार, नेपालमा निष्कासन हुने IPO विभिन्न वर्गका नागरिकहरूलाई न्यायोचित वितरण गर्न आरक्षण कोटामा छुट्याइएको हुन्छ। विशेषगरी जलविद्युत आयोजनाहरूमा १०% सेयर आयोजना प्रभावित स्थानीय बासिन्दा (अति प्रभावित र जिल्लावासी) का लागि अनिवार्य रूपमा छुट्याइन्छ। यसैगरी, नेपाल सरकारले वैधानिक रेमिट्यान्सलाई प्रोत्साहन गर्न श्रम स्वीकृति लिएर वैदेशिक रोजगारीमा रहेका नेपाली नागरिकहरूका लागि १०% सेयर अनिवार्य रूपमा सुरक्षित गरेको छ। यसका साथै ५% सामूहिक लगानी कोष (Mutual Funds) र २% देखि ५% कम्पनीका कर्मचारीहरूका लागि सुरक्षित गरिन्छ। बाँकी रहेको ७०% देखि ८०% सेयर सर्वसाधारण नागरिकहरूका लागि खुला गरिन्छ।',
        callout: {
          type: 'tip',
          title: 'वैदेशिक रोजगारी कोटाको ठूलो फाइदा',
          text: 'वैदेशिक रोजगारी कोटामा आवेदन दिनेहरूको संख्या सर्वसाधारणको तुलनामा निकै कम (करिब ५० हजार देखि ८० हजार मात्र) हुने भएकाले, यस कोटाबाट आवेदन दिने प्रायः सबैलाई ३० देखि ५० कित्तासम्म सेयर पर्ने उच्च सम्भावना रहन्छ।'
        }
      },
      {
        num: 3,
        id: 'chap-3-casba-and-crn',
        title: 'C-ASBA प्रणाली: बैंक, Demat र CRN नम्बर प्रमाणीकरण',
        content: 'विगतमा IPO भर्नका लागि बैंकहरूमा लाइन लागेर नगद भौचर बुझाउनु पर्थ्यो। तर अहिले CDSC ले सञ्चालन गरेको C-ASBA (Centralized Application Supported by Blocked Amount) प्रणालीले गर्दा घरमै बसेर आवेदन दिन सकिन्छ। C-ASBA को मुख्य विशेषता के हो भने, तपाईंले आवेदन दिँदा तपाईंको खाताबाट पैसा काटिँदैन, बरु सेयर नपरेसम्म आवश्यक रकम (जस्तै: १० कित्ताको लागि रु. १,०००) बैंक खातामै रोक्का (Hold) मात्र रहन्छ। त्यो अवधिभर तपाईंले सो पूरै रकममा दैनिक बचत ब्याज पाइरहनुहुन्छ। यो सुविधा लिन आफ्नो बैंकबाट C-ASBA Registration Number (CRN) लिनुपर्छ। आफ्नो Demat नम्बर लिएर बैंक जानुभयो वा मोबाइल बैंकिङ एप प्रयोग गर्नुभयो भने बैंकले तपाईंको स्थायी CRN नम्बर उपलब्ध गराउँछ।',
        callout: {
          type: 'important',
          title: 'नाम र नागरिकता विवरण दुरुस्त हुनुपर्ने नियम',
          text: 'तपाईंको बैंक खाता, डिम्याट खाता र मेरोसेयरमा तपाईंको नाम, थर र नागरिकता नम्बर अक्षरशः एउटै हुनुपर्छ। सानो हिज्जे फरक परेमा पनि बैंकको C-ASBA प्रणालीले तपाईंको आवेदन स्वतः रद्द (Reject) गरिदिन्छ।'
        }
      },
      {
        num: 4,
        id: 'chap-4-meroshare-application-workflow',
        title: 'MeroShare बाट IPO भर्ने स्क्रिन-बाइ-स्क्रिन व्यावहारिक विधि',
        content: 'CRN नम्बर लिइसकेपछि MeroShare मार्फत IPO भर्न २ मिनेट मात्र लाग्छ: (१) meroshare.cdsc.com.np मा आफ्नो DP, प्रयोगकर्ता नाम र पासवर्ड राखेर लगइन गर्नुहोस्। (२) बायाँपट्टिको मेनुबाट "My ASBA" मा जानुहोस् र "Apply for Issue" ट्याब खोल्नुहोस्। (३) हाल खुला रहेको कम्पनीको नाम अगाडि रहेको "Apply" बटन थिच्नुहोस्। (४) आफ्नो बैंक छनोट गर्नुहोस्; तपाईंको खाता नम्बर र शाखा स्वतः भरिनेछ। (५) "Applied Kitta" मा १० लेख्नुहोस् (सर्वसाधारणका लागि १० कित्ता नै उत्तम हुन्छ)। (६) आफ्नो गोप्य CRN नम्बर प्रविष्ट गर्नुहोस्। (७) सर्तहरू मञ्जुर गरेको कोठामा टिक लगाउनुहोस् र "Submit" थिच्नुहोस्। (८) आफ्नो ४ अङ्कको गोप्य ट्रान्जिक्सन पिन (PIN) हाल्नुहोस्। आवेदन दिने बित्तिकै स्थिति "Unverified" देखिन्छ, र बैंकले रकम रोक्का गरेपछि २४ घण्टाभित्र "Verified" बन्दछ।',
        callout: {
          type: 'tip',
          title: 'पहिलो दिन वा अन्तिम दिन भर्दा नतिजामा कुनै फरक पर्दैन',
          text: 'नेपालको सेयर बाँडफाँड गोलाप्रथा (Lottery) बाट हुने भएकाले आइतबार बिहान १० बजे आवेदन दिए पनि वा बुधबार साँझ ५ बजे दिए पनि सेयर पर्ने सम्भावनामा १ प्रतिशत पनि फरक पर्दैन।'
        }
      },
      {
        num: 5,
        id: 'chap-5-lottery-allotment-math',
        title: '१० कित्ता बाँडफाँडको नियम र चिठ्ठाको गणितीय यथार्थ',
        content: 'धितोपत्र निष्कासन तथा बाँडफाँड निर्देशिका २०७४ को नियम ३० अनुसार, नेपालमा सबै योग्य आवेदकहरूलाई कम्तीमा १० कित्ता सेयर पुग्ने गरी बाँडफाँड गर्नुपर्ने बाध्यात्मक व्यवस्था छ। जब मागभन्दा धेरै गुणा बढी आवेदन पर्छ, तब गोलाप्रथा (Lottery) गरिन्छ। उदाहरणका लागि, यदि कुनै कम्पनीले सर्वसाधारणका लागि १५ लाख कित्ता सेयर खुलाएको छ भने ठीक १ लाख ५० हजार जनाले मात्र १० कित्ताका दरले सेयर पाउँछन् (१,५०,००० × १० = १५,००,०००)। यदि कुल १३ लाख ५० हजार योग्य आवेदक परेका छन् भने, सेयर पर्ने सम्भावना P = १,५०,००० / १३,५०,००० = ११.११% मात्र हुन्छ (अर्थात् करिब ९ जनामा १ जनालाई मात्र सेयर पर्छ)। यस्तो अवस्थामा ५० कित्ता वा १०० कित्ता भर्नु व्यर्थ हुन्छ, किनकि तपाईंको धेरै पैसा रोक्का भए पनि सेयर पाउने सम्भावना १ प्रतिशत पनि बढ्दैन।',
        callout: {
          type: 'tip',
          title: '१० कित्ताको स्मार्ट रणनीति',
          text: 'मागभन्दा बढी आवेदन पर्ने प्रायः सबै IPO मा सर्वसाधारणले ठीक १० कित्ता (रु. १,०००) मात्र भर्नुपर्छ। धेरै कित्ता भर्दा बैंकमा पैसा मात्र बन्धक हुन्छ तर सेयर पर्ने सम्भावना बढ्दैन।'
        }
      },
      {
        num: 6,
        id: 'chap-6-post-allotment-and-secondary-listing',
        title: 'नतिजा हेर्ने, रकम फुकुवा र NEPSE मा पहिलो कारोबार',
        content: 'धितोपत्र निष्कासन प्रबन्धक (Issue Manager) ले सेयर बाँडफाँड सम्पन्न गरेपछि केही घण्टामै नतिजा सार्वजनिक हुन्छ। नतिजा हेर्न चारवटा आधिकारिक माध्यम छन्: (१) iporesult.cdsc.com.np मा आफ्नो १६ अङ्कको डिम्याट नम्बर हानेर, (२) MeroShare को "Application Report" मा गएर, (३) इस्यु म्यानेजरको वेबसाइटबाट, वा (४) सम्बन्धित कम्पनीको वेबसाइटबाट। यदि सेयर परेको छ भने बैंकले रोक्का भएको रु. १,००० काटेर सरकारी खातामा पठाउँछ र ५ देखि ७ दिनभित्र सेयर तपाईंको डिम्याट खातामा जम्मा हुन्छ। सेयर नपरेमा बैंकले २-३ दिनभित्र तपाईंको रोक्का रकम फुकुवा (Unfreeze) गर्छ। सेयर डिम्याटमा आइसकेपछि NEPSE मा सूचीकृत हुन्छ र कम्पनीको नेटवर्थ अनुसार पहिलो कारोबारको मूल्य सीमा (Open Range) तोकिन्छ।',
        callout: {
          type: 'important',
          title: 'पहिलो दिन कारोबार हुने मूल्य दायरा (Price Range)',
          text: 'NEPSE ले पहिलो कारोबारका लागि न्यूनतम मूल्य कम्पनीको अडिट भएको नेटवर्थ र अधिकतम मूल्य नेटवर्थको ३ गुणा (3x Net Worth) सम्मको सीमा तोक्छ। यदि प्रति सेयर नेटवर्थ रु. १२० छ भने पहिलो कारोबार रु. १२० देखि रु. ३६० को बीचमा हुन्छ।'
        }
      },
      {
        num: 7,
        id: 'chap-7-common-pitfalls-and-due-diligence',
        title: 'आवेदन रद्द हुने मुख्य गल्तीहरू र क्रेडिट रेटिङको विश्लेषण',
        content: 'हरेक IPO मा हजारौँ नागरिकहरूको आवेदन स-साना गल्तीका कारण रद्द (Reject) हुने गर्दछ। सबैभन्दा ठूलो गल्ती एउटै व्यक्तिले दुईवटा डिम्याटबाट दोहोरो आवेदन दिनु हो; धितोपत्र बोर्डको सफ्टवेयरले तुरुन्तै दोहोरो BOID पत्ता लगाई दुवै आवेदन खारेज गरिदिन्छ। अर्को गल्ती खातामा पर्याप्त रकम नहुनु हो; यदि खातामा रु. ९९५ मात्र छ र बैंकले रु. ५ चार्ज काटेर रु. १,००० नपुगेमा आवेदन "Insufficient Balance" भनी रद्द हुन्छ। यसका साथै, कम्पनीको क्रेडिट रेटिङ (Credit Rating) बुझ्न अनिवार्य छ। ICRA Nepal, Care Ratings Nepal वा Infomerics ले कम्पनीको वित्तीय अवस्था हेरेर रेटिङ दिन्छन्। AAA, AA, A र BBB रेटिङ भएका कम्पनी सुरक्षित मानिन्छन् भने BB, B र C रेटिङ भएका कम्पनीमा अत्यधिक ऋण र जोखिम हुन्छ।',
        callout: {
          type: 'warning',
          title: 'अत्यधिक ऋण भएका हाइड्रोपावरबाट सतर्क रहनुहोस्',
          text: 'प्रति मेगावाट लागत रु. २८ करोडभन्दा बढी पुगेका र बिजुली उत्पादनमा वर्षौँ ढिलाइ भएका कमजोर कम्पनीहरूको सेयर दोस्रो बजारमा खुल्दा रु. १०० भन्दा तल झर्ने जोखिम रहन्छ।'
        }
      }
    ],
    nepalContext: 'नेपालमा प्राथमिक बजारको नियमन नेपाल धितोपत्र बोर्ड (SEBON) ले धितोपत्र ऐन २०६३, धितोपत्र निष्कासन तथा बाँडफाँड निर्देशिका २०७४ र केन्द्रीय निक्षेप सेवा विनियमावली २०६८ बमोजिम गर्दछ। कुनै पनि कम्पनीले सर्वसाधारणमा सेयर जारी गर्नुअघि चार्टर्ड एकाउन्टेन्टबाट अडिट गराउनुका साथै क्रेडिट रेटिङ एजेन्सीबाट वित्तीय मूल्यांकन गराउनु कानुनी रूपमा अनिवार्य छ। C-ASBA मार्फत आवेदन दिँदा बैंकहरूले ग्राहकबाट प्रति आवेदन अधिकतम रु. ५ भन्दा बढी शुल्क लिन नपाउने गरी SEBON ले कडा सीमा तोकेको छ, जसले गर्दा देशका कुनाकाप्चाका साना लगानीकर्ताहरूलाई पनि प्राथमिक बजारमा सहभागी हुन सहज भएको छ।',
    comparisonTable: {
      title: 'नेपालमा प्राथमिक सेयर (IPO) का तीन विधिहरूको तुलना',
      caption: 'धितोपत्र बोर्ड (SEBON) द्वारा स्वीकृत प्राथमिक निष्कासन प्रणालीहरूको तुलनात्मक विवरण',
      headers: ['विशेषता', 'अंकित मूल्य (Par Value)', 'प्रिमियम निष्कासन (Premium)', 'बुक बिल्डिङ (Book Building)'],
      rows: [
        ['साधारण मूल्य', 'रु. १०० प्रति कित्ता (तोकिएको)', 'रु. १०० + कम्पनीको नेटवर्थ प्रिमियम', 'संस्थागत कट-अफ मूल्यमा १०% छुट'],
        ['जारी गर्ने कम्पनीहरू', 'जलविद्युत, बैंक तथा वित्तीय संस्था', 'सफल उत्पादनमूलक, बिमा कम्पनी', 'ठूला वास्तविक क्षेत्रका उद्योगहरू'],
        ['न्यूनतम लगानी (१० कित्ता)', 'रु. १,०००', 'रु. १,५०० - रु. ३,०००', 'रु. ३,५०० - रु. ७,०००'],
        ['जोखिम स्तर', 'न्यून (सामान्यतया सूचीकरणपछि नाफा)', 'मध्यम (रिजर्भ र नाफामा निर्भर)', 'उच्च (बजार मूल्य नजिकै जारी हुने)'],
        ['बाँडफाँड नियम', '१० कित्ता गोलाप्रथा (Lottery)', '१० कित्ता गोलाप्रथा (Lottery)', 'निर्धारित कोटा अनुसार बाँडफाँड']
      ]
    },
    practicalScenario: {
      persona: 'बिक्रम, २४, सिभिल इन्जिनियर (विराटनगर)',
      challenge: 'मासिक रु. ४५,००० तलब पाउने बिक्रम सेयर बजारमा लगानी सुरु गर्न चाहन्थे तर साथीहरूले प्रिमियममा आएको उत्पादनमूलक कम्पनीमा ५० कित्ता भर्न भन्दा उनी अन्योलमा परे। उनको बैंकमा रु. २०,००० बचत थियो र नियम नबुझी आवेदन दिँदा रकम फस्ने डर थियो।',
      solution: 'बिक्रमले आफ्नो बैंक शाखाबाट CRN नम्बर लिए, MeroShare खाता खोले र रु. १०० दरका सबै हाइड्रोपावर IPO हरूमा नियमित ठीक १० कित्ता (रु. १,०००) मात्र भर्न थाले। महँगो बुक बिल्डिङ IPO को वित्तीय विवरण हेर्दा कम्पनीको P/E रेसियो ४५ गुणा भएको देखेर उनले त्यसमा आवेदन दिएनन्। वर्षभरिमा १८ वटा IPO भर्दा उनलाई ४ वटा कम्पनीको ४० कित्ता सेयर पर्यो, जसको कुल लगानी रु. ४,००० थियो। दोस्रो बजारमा सो सेयरको मूल्य बढेर रु. १६,८०० भन्दा बढी पुग्यो।'
    },
    calculatorShortcut: {
      slug: 'nepse-share',
      name: 'NEPSE सेयर नाफा तथा लागत क्याल्कुलेटर',
      desc: 'तपाईंलाई परेको प्राथमिक IPO सेयर बेच्दा लाग्ने ब्रोकर कमिसन, SEBON शुल्क, DP चार्ज र पुँजीगत लाभकर हिसाब गर्नुहोस्।'
    },
    downloadableResources: [
      {
        title: 'नेपाल IPO आवेदन चेकलिस्ट तथा बाँडफाँड प्रवाह तालिका',
        type: 'PDF गाइड',
        size: '१.४ MB',
        href: 'assets/downloads/nepal-ipo-application-checklist.html'
      }
    ],
    faqs: [
      {
        q: 'के नाबालक (१६ वर्ष मुनिका बालबालिका) ले नेपालमा IPO भर्न पाउँछन्?',
        a: 'पाउँछन्। बालबालिकाको जन्मदर्ता प्रमाणपत्र प्रयोग गरी बाबु वा आमा संरक्षक (Guardian) बसेर नाबालक बैंक खाता र नाबालक डिम्याट खाता खोल्न सकिन्छ। संरक्षकको नागरिकता C-ASBA मा जोडेर बालबालिकाको नामबाट पनि नियमित १० कित्ता IPO भर्न पाइन्छ।'
      },
      {
        q: 'नेपालमा सर्वसाधारणको IPO भर्दा कति कित्ता भर्नु बुद्धिमानी हुन्छ?',
        a: 'नेपालका प्रायः सबै सर्वसाधारण IPO मा मागभन्दा धेरै गुणा बढी आवेदन पर्ने भएकाले ठीक १० कित्ता (रु. १,०००) मात्र भर्नु सबैभन्दा बुद्धिमानी हुन्छ। धितोपत्र बोर्डको १० कित्ता गोलाप्रथा नियमका कारण २० वा ५० कित्ता भर्दा पनि सेयर पर्ने सम्भावना बढ्दैन।'
      },
      {
        q: 'MeroShare मा आवेदनको स्थिति "Rejected" वा "Unverified" देखियो भने के गर्ने?',
        a: 'यदि "Unverified" छ भने बैंकले रकम रोक्का गर्न बाँकी छ भन्ने बुझ्नुपर्छ। यदि "Rejected" भयो भने बैंक खातामा आवश्यक रकम नपुगेको वा बैंक र डिम्याटमा नाम/नागरिकता नमिलेको हुन सक्छ। तुरुन्त आफ्नो बैंक शाखामा सम्पर्क गरी विवरण सच्याउनुपर्छ।'
      },
      {
        q: 'परेको IPO सेयर डिम्याटमा आउन र NEPSE मा कारोबार सुरु हुन कति समय लाग्छ?',
        a: 'बाँडफाँड भएको मितिले सामान्यतया ५ देखि ७ कार्यदिनभित्र सेयर तपाईंको डिम्याट खातामा आउँछ, र त्यसपछि थप ७ देखि १५ कार्यदिनभित्र NEPSE मा सूचीकृत भएर दोस्रो बजारमा किनबेच सुरु हुन्छ।'
      }
    ],
    whereToGoNext: {
      nextLesson: {
        title: 'आईपीओ विश्लेषण: निष्कासन विवरणपत्र र जोखिम जाँच',
        slug: 'ipo-analysis-red-flags',
        categorySlug: 'nepse',
        readTime: '१५ मिनेट पढाइ'
      },
      nextGuide: {
        title: 'सीडीएससी र मेरोसेयरको सम्पूर्ण गाइड',
        slug: 'complete-cdsc-guide',
        readTime: '१४ मिनेट पढाइ'
      },
      nextCalculator: {
        title: 'नेप्से सेयर नाफा तथा पुँजीगत लाभकर क्याल्कुलेटर',
        slug: 'nepse-share'
      },
      nextGlossary: {
        title: 'C-ASBA प्रणाली',
        term: 'सी-आस्बा',
        def: 'आईपीओ आवेदन दिँदा लगानीकर्ताको बैंक खातामा रकम रोक्का गर्ने केन्द्रीकृत प्रणाली।'
      }
    }
  }
};

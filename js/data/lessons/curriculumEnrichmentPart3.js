// ==============================================
// risePaisa - Curriculum Pedagogical Enrichment Part 3
// Digital Payments, Business, Economics, Productivity, Retirement Planning (29 Lessons)
// ==============================================

export const ENRICHMENT_PART3 = {
  "nepal-payment-rails-nchl-connectips": {
    "en": {
      "advantages": [
        "Direct account-to-account (A2A) interbank settlement regulated by NRB through Nepal Clearing House Ltd (NCHL).",
        "Empowers heavy-duty transactions: pay government taxes, vehicle revenue, customs duty, and capital market IPO/SIP payments.",
        "Vastly higher daily and monthly transaction limits compared to consumer digital wallets (eSewa/Khalti).",
        "Eliminates wallet intermediary custody risk: funds transfer directly between sovereign commercial bank accounts."
      ],
      "limitations": [
        "Initial registration requires linking your bank account and completing electronic or branch mandate verification.",
        "Transaction fees (NPR 2 to 8 per transfer) apply, whereas merchant QR payments on Fonepay are free for buyers.",
        "Requires active internet connectivity and two-factor OTP/transaction password authentication.",
        "Interbank return or reversal of erroneous account numbers requires formal NCHL clearing dispute resolution."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Business owners, traders, and accountants paying government taxes and corporate vendors.",
          "Secondary stock market investors funding broker TMS collateral and mutual fund SIPs.",
          "Anyone transferring funds exceeding NPR 25,000 between different Nepali commercial banks."
        ],
        "whoShouldAvoid": [
          "Retail shoppers paying for small micro-groceries or street food (better suited for merchant QR codes)."
        ]
      },
      "decisionScenario": {
        "title": "Manoj's Tax Payment: Paying NPR 80,000 via Wallet vs ConnectIPS Government Tax Portal",
        "goal": "Paying annual business income tax of NPR 80,000 to the Inland Revenue Department (IRD).",
        "options": [
          {
            "option": "Option A: Try paying through a digital wallet with a single transaction limit of NPR 25,000",
            "verdict": "Limit Block & High Fees",
            "recommended": false,
            "rationale": "Requires multiple wallet top-ups, incurs wallet loading charges, hits daily wallet outflow limits, and risks transaction timeouts."
          },
          {
            "option": "Option B: Pay directly through the IRD Taxpayer Portal using ConnectIPS with the official EBP Number",
            "verdict": "Direct, Instant & Recommended",
            "recommended": true,
            "rationale": "Transfers the entire NPR 80,000 directly from his bank account to the Government Treasury account for a flat NPR 8 fee, delivering an instant verified IRD tax clearance voucher."
          }
        ],
        "takeaway": "ConnectIPS is Nepal's sovereign national payment backbone. Use it for high-value transfers, tax clearance, and capital market investments."
      },
      "faqs": [
        {
          "q": "What is the maximum daily transaction limit on ConnectIPS in Nepal?",
          "a": "Under Nepal Rastra Bank directives, individuals can transfer up to NPR 20,00,000 (20 Lakhs) per day via the ConnectIPS web portal and up to NPR 2,00,000 per day via the mobile app."
        },
        {
          "q": "What is an EBP Number in Nepal government payments?",
          "a": "An Electronic Payment Bill (EBP) number is a unique transaction voucher generated on government portals (IRD, Traffic, Customs, Company Registrar) used to settle official fees via ConnectIPS."
        }
      ]
    },
    "np": {
      "advantages": [
        "नेपाल राष्ट्र बैंकद्वारा प्रवर्द्धित नेपाल क्लियरिङ हाउस (NCHL) मार्फत बैंक खाताबाट सिधै अर्को बैंक खातामा रकम ट्रान्सफर हुन्छ।",
        "सरकारी राजस्व, आयकर, सवारी कर, भन्सार महसुल र सेयर बजारको कोल्याटरल तिर्ने आधिकारिक माध्यम हो।",
        "ई-सेवा वा खल्ती जस्ता वालेटको तुलनामा दैनिक २० लाख रुपैयाँसम्मको धेरै ठूलो कारोबार सीमा पाइन्छ।",
        "वालेटमा पैसा लोड गर्ने झन्झट बिना आफ्नै बैंक खाताबाट सुरक्षित र न्यूनतम शुल्क (रु. २-८) मा काम हुन्छ।"
      ],
      "limitations": [
        "सुरुमा बैंक खाता लिंक गरेर बैंकबाट अनलाइन वा शाखा पुगेर खाता प्रमाणीकरण (Verification) गराउनुपर्छ।",
        "कारोबार गर्दा स्ल्याब अनुसार रु. २ देखि ८ सम्म सानो कारोबार शुल्क लाग्छ।",
        "इन्टरनेट, मोबाइल OTP र कारोबार पासवर्ड (Transaction Password) अनिवार्य चाहिन्छ।",
        "गलत बैंक खाता नम्बरमा पैसा पठाएमा फिर्ता ल्याउन NCHL र बैंकमार्फत कानुनी निवेदन दिनुपर्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "सरकारी कर, भन्सार, कम्पनी रजिष्ट्रारको दस्तुर र ठूला बिल तिर्ने व्यापारी तथा व्यवसायीहरू।",
          "सेयर ब्रोकरको TMS मा कोल्याटरल लोड गर्ने र म्युचुअल फन्डमा SIP लगानी गर्ने लगानीकर्ताहरू।",
          "एउटा बैंकबाट अर्को बैंकमा रु. २५ हजारभन्दा बढी रकम तुरुन्तै पठाउन चाहने आम नागरिक।"
        ],
        "whoShouldAvoid": [
          "तरकारी, चिया वा किराना पसलमा खुद्रा भुक्तानी गर्न खोज्नेहरू (जसका लागि फोनपे QR नै सजिलो हुन्छ)।"
        ]
      },
      "decisionScenario": {
        "title": "मनोजको राजस्व भुक्तानी: रु. ८०,००० आयकर वालेटबाट तिर्ने कि ConnectIPS बाट?",
        "goal": "आन्तरिक राजस्व कार्यालयलाई बुझाउनुपर्ने रु. ८०,००० आयकर बिना झन्झट कानुनी रूपमा भुक्तानी गर्नु।",
        "options": [
          {
            "option": "विकल्प क: २५ हजारको सीमा भएको डिजिटल वालेटबाट पटक-पटक गरेर तिर्न खोज्ने",
            "verdict": "सीमाले रोकिने र झन्झटिलो",
            "recommended": false,
            "rationale": "वालेटको दैनिक सीमाले गर्दा रकम रोकिन्छ, लोड गर्दा अतिरिक्त शुल्क लाग्न सक्छ र सरकारी रसिद आउन ढिलाइ हुन सक्छ।"
          },
          {
            "option": "विकल्प ख: IRD को पोर्टलमा गएर EBP नम्बर निकाली सोझै ConnectIPS बाट एकैपटक तिर्ने",
            "verdict": "सुरक्षित, आधिकारिक र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "मात्र रु. ८ शुल्कमा आफ्नै बैंक खाताबाट सोझै नेपाल सरकारको ढुकुटीमा रकम जम्मा हुन्छ र तुरुन्तै आधिकारिक कर चुक्ता भौचर हात पर्छ।"
          }
        ],
        "takeaway": "ConnectIPS नेपालको राष्ट्रिय वित्तीय मेरुदण्ड हो। ठूला कारोबार, सरकारी राजस्व र सेयर बजारको लगानीका लागि सधैँ यसैको प्रयोग गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालमा ConnectIPS बाट दैनिक कति रुपैयाँसम्म पठाउन मिल्छ?",
          "a": "नेपाल राष्ट्र बैंकको निर्देशन अनुसार व्यक्तिगत प्रयोगकर्ताले ConnectIPS को वेब पोर्टलबाट दैनिक रु. २०,००,००० (२० लाख) सम्म र मोबाइल एपबाट दैनिक रु. २,००,००० (२ लाख) सम्म कारोबार गर्न पाउँछन्।"
        },
        {
          "q": "सरकारी भुक्तानीमा EBP नम्बर भनेको के हो?",
          "a": "EBP (Electronic Payment Bill) नम्बर भनेको सरकारी कार्यालयहरूको पोर्टल (आन्तरिक राजस्व, ट्राफिक प्रहरी, कम्पनी रजिष्ट्रार) मा राजस्व हिसाब गरेपछि निस्कने विशेष बिल नम्बर हो, जसलाई ConnectIPS मा हानेर सिधै कर तिर्न सकिन्छ।"
        }
      ]
    }
  },
  "esewa-vs-khalti-vs-mobile-banking": {
    "en": {
      "advantages": [
        "Digital wallets (eSewa, Khalti) excel at micro-payments, utility bills (NEA electricity, Khanepani), and movie tickets.",
        "Mobile Banking apps (powered by Fonepay) allow instant interoperable QR scanning directly from interest-earning bank deposits.",
        "Loyalty rewards, cashback promos, and festival recharge scratch cards provide tangible consumer discounts.",
        "Reduces physical cash handling risks, theft, and counterfeit currency circulation in retail transactions."
      ],
      "limitations": [
        "Wallet balances earn legally zero interest; leaving large cash sums (NPR 50,000+) in wallets incurs severe opportunity loss.",
        "Withdrawing wallet balances back to bank accounts incurs bank transfer fees (NPR 10 to 30 per transfer).",
        "Daily and monthly transaction caps imposed by NRB limit wallet utility for large purchases.",
        "Vulnerable to phone snatching or social engineering phishing if biometric screen-lock and MPIN are compromised."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Every consumer in Nepal paying monthly household utility bills (electricity, water, ISP internet).",
          "Students and youth making daily retail purchases at restaurants, grocery shops, and cinema halls.",
          "Anyone wanting a small daily petty-cash digital buffer without exposing their primary savings account."
        ],
        "whoShouldAvoid": [
          "Individuals keeping their entire emergency fund or life savings parked inside digital wallets."
        ]
      },
      "decisionScenario": {
        "title": "Pawan's Petty Cash Strategy: Holding NPR 100,000 in Digital Wallet vs Keeping in Bank with Mobile Banking",
        "goal": "Managing daily lifestyle spending without losing interest returns or exposing funds to risk.",
        "options": [
          {
            "option": "Option A: Keep NPR 100,000 idle in an eSewa or Khalti wallet for quick QR payments",
            "verdict": "Zero Interest & Higher Risk",
            "recommended": false,
            "rationale": "Wallets pay 0% interest, losing NPR 4,000+ in annual bank savings interest. If the smartphone is hacked or lost, the entire balance is vulnerable."
          },
          {
            "option": "Option B: Keep funds in a commercial bank account earning 4-5% and scan Fonepay QR directly from Mobile Banking, maintaining max NPR 2,000 in wallet",
            "verdict": "Safe, Earns Interest & Recommended",
            "recommended": true,
            "rationale": "Every merchant QR is payable directly via Mobile Banking; money stays in an insured bank account earning interest until the exact microsecond of spending."
          }
        ],
        "takeaway": "A digital wallet is a pocket wallet, not a bank. Keep pocket change in your wallet; keep your real savings in an insured bank account using mobile banking."
      },
      "faqs": [
        {
          "q": "Do balances in digital wallets like eSewa or Khalti earn interest in Nepal?",
          "a": "No. Under Nepal Rastra Bank Payment and Settlement regulations, licensed digital wallet Payment Service Providers (PSPs) are strictly prohibited from paying interest on customer wallet balances."
        },
        {
          "q": "Are digital wallets insured under the Deposit Guarantee Fund in Nepal?",
          "a": "No. Digital wallet balances are not insured by the Deposit and Credit Guarantee Fund (DCGF). Only deposits held in licensed Class A, B, and C banks carry statutory government deposit insurance."
        }
      ]
    },
    "np": {
      "advantages": [
        "डिजिटल वालेट (eSewa, Khalti) बाट बिजुली (NEA), खानेपानी, इन्टरनेट र फिल्म टिकटको बिल घरमै बसीबसी १ मिनेटमा तिर्न सकिन्छ।",
        "बैंकको मोबाइल बैंकिङबाट फोनपे (Fonepay) वा नेपालपे (NepalPay) QR सिधै स्क्यान गर्दा ब्याज आइरहेको खाताबाटै खर्च हुन्छ।",
        "दैनिक रिचार्ज, क्यासब्याक र छुट अफरको फाइदा उठाएर घरायसी खर्चमा सानो बचत गर्न सकिन्छ।",
        "नगद पैसा बोक्नुपर्ने, खुद्रा पैसा साट्नुपर्ने र नक्कली नोटको जोखिमबाट पूर्ण मुक्ति मिल्छ।"
      ],
      "limitations": [
        "वालेटमा राखिएको पैसामा १ रुपैयाँ पनि ब्याज पाइँदैन; ठूलो रकम वालेटमा राख्दा ब्याजको नोक्सानी हुन्छ।",
        "वालेटको पैसा फेरि बैंक खातामा सार्न खोज्दा बैंक ट्रान्सफर शुल्क (रु. १० देखि ३०) काटिन्छ।",
        "राष्ट्र बैंकले वालेटबाट दैनिक र मासिक कारोबार गर्ने सीमा तोकेको हुनाले ठूलो किनमेल गर्न मिल्दैन।",
        "मोबाइल हराएमा वा पासवर्ड अरूलाई थाहा भएमा वालेटको पैसा चोरी हुने जोखिम हुन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "घरको बिजुली, खानेपानी, टिभी र इन्टरनेटको बिल आफैँ तिर्ने नेपालका सम्पूर्ण उपभोक्ता।",
          "दैनिक कलेज र खाजा खर्च डिजिटल रूपमा तिर्न चाहने विद्यार्थी तथा युवाहरू।",
          "मूल बैंक खाता सुरक्षित राखी दैनिक सानातिना खर्चका लागि सानो बफर राख्न चाहनेहरू।"
        ],
        "whoShouldAvoid": [
          "आफ्नो आपतकालीन कोष वा ५० हजारभन्दा बढी बचत रकम ब्याज नै नआउने डिजिटल वालेटमा थन्क्याएर राख्नेहरू।"
        ]
      },
      "decisionScenario": {
        "title": "पवनको नगद व्यवस्थापन: रु. १ लाख रकम वालेटमा राख्ने कि बैंक खातामै राखेर मोबाइल बैंकिङ चलाउने?",
        "goal": "दैनिक खर्च सहज बनाउँदै आफ्नो बचतमा ब्याज पनि कमाउने र सुरक्षा पनि कायम राख्नु।",
        "options": [
          {
            "option": "विकल्प क: सजिलो हुन्छ भन्दै पुरै रु. १ लाख ई-सेवा वा खल्ती वालेटमै राखिराख्ने",
            "verdict": "ब्याजको नोक्सानी र असुरक्षित",
            "recommended": false,
            "rationale": "वालेटले शून्य ब्याज दिन्छ, जसले गर्दा वर्षमा रु. ४-५ हजार बैंक ब्याज गुम्छ। साथै मोबाइल हराएमा वा ठगीमा परेमा पुरै रकम जोखिममा पर्छ।"
          },
          {
            "option": "विकल्प ख: बैंक खातामै पैसा राखी मोबाइल बैंकिङबाट सिधै QR स्क्यान गर्ने र वालेटमा रु. २ हजार मात्र बफर राख्ने",
            "verdict": "बुद्धिमानी, सुरक्षित र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "पैसा बैंकमै बसेर ब्याज कमाइरहन्छ, निक्षेप सुरक्षण कोषको सरकारी सुरक्षा पाउँछ र खर्च हुने क्षणमा मात्र खाताबाट पैसा काटिन्छ।"
          }
        ],
        "takeaway": "डिजिटल वालेट भनेको गोजीको पर्स जस्तै हो, बैंक होइन। वालेटमा खुद्रा खर्च मात्र राख्नुहोस्; आफ्नो वास्तविक बचत बैंकमै राखेर मोबाइल बैंकिङबाट कारोबार गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "के नेपालमा ई-सेवा वा खल्ती जस्ता वालेटमा राखेको पैसामा ब्याज पाइन्छ?",
          "a": "पाइँदैन। नेपाल राष्ट्र बैंकको भुक्तानी तथा फर्स्योट विनियमावली अनुसार वालेट सेवा प्रदायकहरूले ग्राहकको वालेट ब्यालेन्समा कुनै पनि प्रकारको ब्याज दिन कानुनी रूपमा पाउँदैनन्।"
        },
        {
          "q": "के डिजिटल वालेटको रकम बैंक निक्षेप जस्तै सुरक्षित हुन्छ?",
          "a": "हुँदैन। डिजिटल वालेटमा रहेको रकम निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) को रु. ५ लाखको बिमा दायराभित्र पर्दैन। यो सुरक्षा केवल 'क', 'ख' र 'ग' वर्गका बैंकमा मात्र लागू हुन्छ।"
        }
      ]
    }
  },
  "fonepay-nepalpay-qr-interoperability": {
    "en": {
      "advantages": [
        "Cross-network QR interoperability enables scanning any merchant QR code regardless of which bank app you use.",
        "NepalPay QR (NCHL) integrates government revenues, cooperatives, and national payment switches into one unified standard.",
        "Zero transaction fees for consumers making retail merchant purchases across Nepal.",
        "Instant merchant SMS/voice box confirmation reduces billing disputes at cash counters."
      ],
      "limitations": [
        "Merchant-to-Person (M2P) QR is free, but Person-to-Person (P2P) fund transfers incur interbank transfer fees.",
        "Occasional switch communication timeouts between Fonepay and NCHL rails during peak festival shopping hours.",
        "Malicious QR sticker replacement: scammers paste personal QR stickers over merchant counter displays.",
        "Dependent on stable telecom 4G/Wi-Fi signal inside basements and rural marketplace alleys."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Retail business owners, grocers, and restauranteurs accepting cashless payments in Nepal.",
          "Shoppers wanting to pay using their existing mobile banking app without downloading multiple apps.",
          "Municipalities and government offices digitizing local counter revenue collection."
        ],
        "whoShouldAvoid": [
          "Vendors operating without basic smartphone literacy or bank account linkages."
        ]
      },
      "decisionScenario": {
        "title": "Ramesh's Merchant Setup: Displaying Multiple Bank QRs vs Single Interoperable NepalPay/Fonepay Standee",
        "goal": "Accepting digital payments from customers using 20+ different banks and wallets in his Lalitpur grocery.",
        "options": [
          {
            "option": "Option A: Paste 8 different paper QR stickers from 8 different banks across his counter",
            "verdict": "Cluttered & Confusing",
            "recommended": false,
            "rationale": "Confuses customers, causes wrong account transfers, and requires checking 8 different bank apps to verify receipts."
          },
          {
            "option": "Option B: Deploy an interoperable Fonepay / NepalPay QR with an automated Voice Soundbox",
            "verdict": "Seamless & Recommended",
            "recommended": true,
            "rationale": "Any customer can scan using any commercial bank app or wallet; the soundbox speaks out the received amount instantly in Nepali, preventing customer payment fraud."
          }
        ],
        "takeaway": "Interoperability means one QR accepts all payments. Simplify your checkout counter with a single standardized QR code and instant voice verification."
      },
      "faqs": [
        {
          "q": "Can I scan a Fonepay QR using a bank app that uses NepalPay?",
          "a": "Under NRB National Payment Switch interoperability mandates, major payment rails are actively interconnecting, allowing cross-network scanning between Fonepay and NepalPay QR networks."
        },
        {
          "q": "Does a customer get charged any fee when scanning a merchant QR in Nepal?",
          "a": "No. Under NRB directives, scanning a merchant QR code for retail purchases of goods and services is 100% free of charge for the consumer."
        }
      ]
    },
    "np": {
      "advantages": [
        "अन्तरआबद्धता (Interoperability): जुनसुकै बैंकको मोबाइल एपबाट पनि जुनसुकै मर्चेन्टको QR कोड सहजै स्क्यान गर्न सकिन्छ।",
        "नेपालपे (NepalPay QR) ले सरकारी राजस्व, सहकारी र सबै बैंकहरूलाई एउटै राष्ट्रिय भुक्तानी प्रणालीमा जोडेको छ।",
        "दुकानमा सामान किन्दा वा खाजा खाँदा QR स्क्यान गर्दा ग्राहकलाई कुनै पनि अतिरिक्त शुल्क लाग्दैन।",
        "डिजिटल साउन्डबक्स (Voice Box) बाट रकम प्राप्त भएको आवाज आउने हुँदा काउन्टरमा हिसाब छिटो र पारदर्शी हुन्छ।"
      ],
      "limitations": [
        "पसलमा भुक्तानी गर्दा निःशुल्क भए पनि व्यक्तिगत खातामा QR बाट पैसा पठाउँदा (P2P) सानो अन्तरबैंक शुल्क लाग्न सक्छ।",
        "चाडपर्वको बेला अत्यधिक चाप हुँदा कहिलेकाहीँ स्विचमा समस्या आएर पैसा अड्किने प्राविधिक समस्या हुन सक्छ।",
        "पसलको आधिकारिक QR माथि ठगहरूले आफ्नो व्यक्तिगत QR टाँसिदिएर पैसा चोर्ने जोखिम हुन सक्छ।",
        "अन्डरग्राउन्ड पसल वा विकट ठाउँमा मोबाइलको इन्टरनेट (4G) नचलेमा भुक्तानी गर्न सकिँदैन।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "खुद्रा पसल, खाजाघर, फार्मेसी र व्यवसाय सञ्चालन गर्ने नेपालका सम्पूर्ण व्यापारीहरू।",
          "धेरै एप डाउनलोड नगरी आफ्नै बैंकको एउटै मोबाइल बैंकिङबाट सबै ठाउँमा भुक्तानी गर्न चाहने ग्राहकहरू।",
          "वडा कार्यालय, यातायात र मालपोतमा डिजिटल रसिद काट्ने सरकारी कर्मचारीहरू।"
        ],
        "whoShouldAvoid": [
          "बैंक खाता नभएका र पूर्ण रूपमा नगदमै कारोबार गर्न रुचाउने परम्परागत व्यापारीहरू।"
        ]
      },
      "decisionScenario": {
        "title": "रमेशको पसलको QR: काउन्टरभरि ८ वटा बैंकका स्टिकर टाँस्ने कि एउटै अन्तरआबद्ध QR राख्ने?",
        "goal": "ललितपुरको किराना पसलमा आउने विभिन्न बैंकका ग्राहकबाट बिना झन्झट पैसा संकलन गर्नु।",
        "options": [
          {
            "option": "विकल्प क: काउन्टरभरि विभिन्न ८ वटा बैंकका फरक-फरक QR स्टिकर टाँस्ने",
            "verdict": "अत्यन्त भद्रगोल र अलमलिने",
            "recommended": false,
            "rationale": "ग्राहक अलमलिन्छन्, कुन बैंकमा पैसा गयो खोज्न ८ वटा एप लगइन गर्नुपर्छ र काउन्टरमा भिडभाड बढ्छ।"
          },
          {
            "option": "विकल्प ख: एउटै अन्तरआबद्ध (Interoperable) QR र डिजिटल भ्वाइस बक्स (Soundbox) राख्ने",
            "verdict": "आधुनिक, सजिलो र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "ग्राहकले जुनसुकै बैंक वा वालेटबाट स्क्यान गर्न मिल्छ, पैसा आउनासाथ साउन्डबक्सले नेपालीमा बोलेर रकम सुनाउँछ र कुनै ठगी हुन पाउँदैन।"
          }
        ],
        "takeaway": "अन्तरआबद्धताको अर्थ एउटै QR ले सबै भुक्तानी लिन्छ। आफ्नो काउन्टरलाई सफा राख्नुहोस् र आधुनिक साउन्डबक्ससहितको मानकीकृत QR प्रयोग गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "के नेपालमा पसलमा QR स्क्यान गर्दा ग्राहकको अतिरिक्त पैसा काटिन्छ?",
          "a": "काटिँदैन। नेपाल राष्ट्र बैंकको कडा निर्देशन अनुसार कुनै पनि वस्तु वा सेवा खरिद गर्दा मर्चेन्ट QR स्क्यान गर्दा ग्राहकबाट कुनै पनि प्रकारको अतिरिक्त शुल्क लिन पाइँदैन।"
        },
        {
          "q": "QR साउन्डबक्स (Voice Box) ले कसरी काम गर्छ?",
          "a": "ग्राहकले QR स्क्यान गरी भुक्तानी गर्नासाथ बैंकको सर्भरबाट उक्त साउन्डबक्समा सिग्नल आउँछ र त्यसले तत्काल नेपाली भाषामा 'रु. ... भुक्तानी प्राप्त भयो' भनी चर्को आवाजमा सुनाउँछ, जसले नक्कली स्क्रिनसट देखाएर हुने ठगी रोक्छ।"
        }
      ]
    }
  },
  "nrb-digital-transaction-limits-fees": {
    "en": {
      "advantages": [
        "Mastering NRB circular limits prevents embarrassing payment declines during high-value retail transactions.",
        "Clear understanding of tiered transaction ceilings across Mobile Banking, Wallets, ConnectIPS, and ATMs.",
        "Prepares businesses to structure payments across compliant channels (e.g. splitting high sums into ConnectIPS web).",
        "Protects personal accounts: limits prevent catastrophic single-day drain if account credentials are breached."
      ],
      "limitations": [
        "Strict single-transaction and daily limits can frustrate large immediate equipment purchases or medical emergencies.",
        "Limits differ drastically between mobile app interfaces (lower) and desktop browser portals (higher).",
        "NRB circular revisions occur periodically, requiring ongoing awareness of regulatory updates.",
        "ATM cash withdrawal daily limits (NPR 100,000) are strictly enforced across all bank ATM switches."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Anyone conducting high-value financial transactions in Nepal (home renovations, vehicle token booking).",
          "Business owners scheduling payroll distributions via digital banking channels.",
          "Accountants ensuring corporate compliance with central bank settlement ceilings."
        ],
        "whoShouldAvoid": [
          "Consumers who only transact a few hundred Rupees per month."
        ]
      },
      "decisionScenario": {
        "title": "Bikram's Equipment Purchase: Paying NPR 500,000 via Mobile Banking App vs ConnectIPS Web",
        "goal": "Paying an NPR 500,000 supplier invoice digitally without visiting a physical bank branch.",
        "options": [
          {
            "option": "Option A: Try transferring NPR 500,000 in a single transaction via your mobile banking phone app",
            "verdict": "Declined Due to NRB App Limit",
            "recommended": false,
            "rationale": "NRB caps mobile banking app daily interbank transfers (typically at NPR 2,00,000 to 3,00,000 per day), causing an immediate system error."
          },
          {
            "option": "Option B: Log into the ConnectIPS or Bank Corporate Internet Banking web portal on a desktop browser",
            "verdict": "Approved & Recommended",
            "recommended": true,
            "rationale": "Desktop browser limits under NRB rules allow up to NPR 20,00,000 (20 Lakhs) per day, enabling smooth single-transaction settlement with complete compliance."
          }
        ],
        "takeaway": "Know your digital limits. Mobile apps are designed for everyday convenience; desktop web portals are engineered for high-value financial execution."
      },
      "faqs": [
        {
          "q": "What is the daily ATM cash withdrawal limit in Nepal?",
          "a": "Under Nepal Rastra Bank directives, the daily cash withdrawal limit from ATMs is NPR 1,00,000 per card, with a single-transaction limit of NPR 20,000 to 25,000."
        },
        {
          "q": "What is the maximum person-to-person (P2P) wallet transfer limit per day in Nepal?",
          "a": "Under current NRB regulations, wallet-to-wallet or wallet-to-bank transfers are capped at NPR 25,000 per transaction, NPR 50,000 to 100,000 per day, and NPR 5,00,000 per month for fully KYC-verified individual users."
        }
      ]
    },
    "np": {
      "advantages": [
        "नेपाल राष्ट्र बैंकले तोकेको डिजिटल कारोबारको सीमा (Limits) थाहा पाउँदा ठूलो किनमेल गर्दा भुक्तानी रोकिने समस्या हुँदैन।",
        "मोबाइल बैंकिङ, वालेट, ConnectIPS र ATM कार्डबाट दैनिक कतिसम्म कारोबार गर्न पाइन्छ भन्ने स्पष्ट जानकारी हुन्छ।",
        "ठूलो रकम भुक्तानी गर्दा कुन माध्यम (मोबाइल एप कि कम्प्युटरको वेब पोर्टल) प्रयोग गर्ने भन्ने योजना बनाउन सकिन्छ।",
        "मोबाइल हराएमा वा पासवर्ड चोरी भएमा पनि सीमा तोकिएका कारण एकैदिनमा खाताको सबै पैसा रित्तिनबाट जोगिन्छ।"
      ],
      "limitations": [
        "अस्पतालको आपतकालीन बिल वा ठूलो सामान किन्दा दैनिक सीमाले गर्दा एकैपटक भुक्तानी गर्न बाधा पर्न सक्छ।",
        "मोबाइल एपबाट कारोबार गर्दा सीमा कम हुने र ल्यापटपको वेब पोर्टलबाट बढी हुने नियम धेरैलाई थाहा नहुन सक्छ।",
        "राष्ट्र बैंकले समय-समयमा मौद्रिक नीतिमार्फत कारोबारको सीमा परिवर्तन गरिरहने हुँदा अपडेट रहनुपर्छ।",
        "ATM बाट दैनिक रु. १ लाखभन्दा बढी नगद झिक्न नपाइने कडा नियम छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "घर निर्माण, गाडी खरिद वा ठूलो व्यावसायिक सामानको डिजिटल भुक्तानी गर्ने नेपाली नागरिक।",
          "कर्मचारीलाई अनलाइनबाटै तलब वितरण गर्ने साना तथा मझौला व्यवसायीहरू।",
          "डिजिटल बैंकिङका सीमा र लाग्ने सेवा शुल्कबारे सचेत रहन चाहने जो-कोही।"
        ],
        "whoShouldAvoid": [
          "महिनामा केही सय रुपैयाँको मात्र रिचार्ज गर्ने साधारण प्रयोगकर्ताहरू।"
        ]
      },
      "decisionScenario": {
        "title": "बिक्रमको मेसिनरी भुक्तानी: मोबाइल एपबाट रु. ५ लाख पठाउने कि कम्प्युटरको वेब पोर्टलबाट?",
        "goal": "सप्लायरलाई तिर्नुपर्ने रु. ५ लाख रकम बैंक शाखा नगई घरमै बसेर डिजिटल माध्यमबाट भुक्तानी गर्नु।",
        "options": [
          {
            "option": "विकल्प क: मोबाइल बैंकिङ एप खोलेर एकैपटक रु. ५ लाख ट्रान्सफर गर्न खोज्ने",
            "verdict": "सीमा नाघेर अस्वीकृत हुने",
            "recommended": false,
            "rationale": "राष्ट्र बैंकले मोबाइल बैंकिङ एपको दैनिक अन्तरबैंक सीमा साधारणतया रु. २ देखि ३ लाख तोकेको हुनाले कारोबार तुरुन्तै फेल हुन्छ।"
          },
          {
            "option": "विकल्प ख: ल्यापटपमा कम्प्युटर खोलेर ConnectIPS वा बैंकको इन्टरनेट बैंकिङ पोर्टलबाट पठाउने",
            "verdict": "सजिलै स्वीकृत हुने र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "राष्ट्र बैंकको नियम अनुसार वेब पोर्टलबाट दैनिक रु. २० लाखसम्म पठाउन मिल्ने भएकाले रु. ५ लाख एकै मिनेटमा सुरक्षित रूपमा ट्रान्सफर हुन्छ।"
          }
        ],
        "takeaway": "डिजिटल कारोबारको सीमा बुझ्नुहोस्। मोबाइल एप दैनिक खुद्रा खर्चका लागि हो; ठूला रकमको कारोबार गर्न कम्प्युटरको इन्टरनेट बैंकिङ वा ConnectIPS पोर्टल प्रयोग गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालमा ATM कार्डबाट दैनिक कतिसम्म नगद झिक्न पाइन्छ?",
          "a": "नेपाल राष्ट्र बैंकको निर्देशन अनुसार एउटा डेबिट कार्डबाट २४ घण्टाभित्र बढीमा रु. १,००,००० (१ लाख) सम्म नगद झिक्न सकिन्छ, जसमा एक पटकमा बढीमा रु. २०,००० देखि २५,००० सम्म मात्र झिक्न मिल्छ।"
        },
        {
          "q": "डिजिटल वालेट (eSewa/Khalti) बाट दैनिक कतिसम्म कारोबार गर्न मिल्छ?",
          "a": "KYC प्रमाणीकरण भएका व्यक्तिगत प्रयोगकर्ताका लागि वालेटबाट एक पटकमा बढीमा रु. २५,०००, दैनिक बढीमा रु. १,००,००० र महिनामा बढीमा रु. ५,००,००० सम्म कारोबार गर्न पाउने राष्ट्र बैंकको नियम छ।"
        }
      ]
    }
  },
  "otp-scams-phishing-defense-nepal": {
    "en": {
      "advantages": [
        "Identifies the common social engineering tactics used by cyber-criminals in Nepal (fake lottery calls, bank KYC update SMS, WhatsApp impersonation).",
        "Instills the golden security rule: bank staff will NEVER ask for your One-Time Password (OTP), MPIN, or password.",
        "Protects against SIM swap fraud by recognizing sudden loss of cellular network reception.",
        "Provides a step-by-step emergency protocol to freeze bank accounts and cards within 5 minutes of compromised credentials."
      ],
      "limitations": [
        "Sophisticated spoofing technology can make fake SMS appear inside authentic bank alphanumeric SMS sender threads.",
        "Emotional fear tactics (e.g. 'Your account will be permanently blocked in 15 minutes') bypass rational logical skepticism.",
        "Once an unauthorized fund transfer occurs via ConnectIPS or Fonepay, recovering cash takes rigorous police investigation.",
        "Elderly and less tech-literate family members remain highly vulnerable to phone-based manipulation."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Every smartphone user and mobile banking customer in Nepal.",
          "Children protecting aging parents who hold substantial life savings in bank accounts.",
          "Retail business owners receiving fraudulent 'payment proof' screenshots from customers."
        ],
        "whoShouldAvoid": [
          "Nobody should avoid learning phishing defense; it is the non-negotiable prerequisite of modern digital life."
        ]
      },
      "decisionScenario": {
        "title": "Sarita's Urgent Call: An 'NRB Officer' Asking for OTP to Prevent Account Freeze",
        "goal": "Responding to a threatening phone call claiming her bank account is frozen for incomplete KYC.",
        "options": [
          {
            "option": "Option A: Read out the 6-digit SMS OTP to the caller to 'verify' her identity and avoid account suspension",
            "verdict": "Instant Total Account Theft",
            "recommended": false,
            "rationale": "The caller is an impersonator resetting Sarita's mobile banking password; reading the OTP allows the criminal to empty her entire account balance in 60 seconds."
          },
          {
            "option": "Option B: Hang up immediately, block the number, and call her bank's official 24/7 card helpline number",
            "verdict": "100% Secure & Recommended",
            "recommended": true,
            "rationale": "Completely neutralizes the attack. Real bank officers never ask for OTPs; Sarita's funds remain completely safe."
          }
        ],
        "takeaway": "Your OTP is the digital key to your financial locker. Never, under any circumstances, share your OTP or MPIN with anyone on the phone, even if they claim to be from the police or central bank."
      },
      "faqs": [
        {
          "q": "Will my bank or Nepal Rastra Bank ever call me asking for an OTP?",
          "a": "NEVER. No genuine bank, payment gateway, police officer, or Nepal Rastra Bank official will ever ask for your OTP, password, or PIN. Anyone asking for an OTP is 100% a fraudster."
        },
        {
          "q": "What should I do immediately if I accidentally share my OTP with a scammer in Nepal?",
          "a": "Call your bank's 24/7 card and digital banking helpline IMMEDIATELY to block your mobile banking app, freeze your debit cards, and request a temporary hold on all account debits."
        }
      ]
    },
    "np": {
      "advantages": [
        "नेपालमा भइरहेका अनलाइन ठगीहरू (चिठ्ठा पर्यो भन्दै आउने फोन, KYC अपडेटको नक्कली मेसेज, ह्वाट्सएप कल) पहिचान गर्न सकिन्छ।",
        "सुरक्षाको मुख्य नियम कण्ठ हुन्छ: बैंकका कर्मचारीले कहिल्यै पनि तपाईंको OTP कोड, पासवर्ड वा MPIN माग्दैनन्।",
        "अचानक मोबाइलको नेटवर्क गएर सिम स्वाप (SIM Swap) ठगी हुन लागेको समयमै थाहा पाउन सकिन्छ।",
        "गल्तीले पासवर्ड वा कोड अरूलाई दिएमा ५ मिनेटभित्रै बैंक खाता र कार्ड रोक्का गर्ने आपतकालीन तरिका सिकिन्छ।"
      ],
      "limitations": [
        "ठगहरूले बैंककै नाममा नक्कली मेसेज (Spoofed SMS) पठाउन सक्ने प्रविधि प्रयोग गर्दा छुट्याउन गाह्रो हुन सक्छ।",
        "'१५ मिनेटभित्र खाता बन्द हुन्छ' भन्दै डर देखाउँदा मानिसहरू आत्तिएर सोच्नै नपाई गल्ती गर्न पुग्छन्।",
        "एकपटक खाताबाट अर्को खातामा पैसा गइसकेपछि प्रहरी र बैंकमार्फत फिर्ता ल्याउन लामो अनुसन्धान लाग्छ।",
        "घरका पाका बुबाआमा र प्रविधि नबुझेका व्यक्तिहरू यस्ता फोन ठगीमा सजिलै फस्ने जोखिम हुन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "मोबाइल बैंकिङ र डिजिटल वालेट प्रयोग गर्ने नेपालका सम्पूर्ण नागरिक।",
          "आफ्ना वृद्ध बुबाआमाको जीवनभरको कमाइलाई अनलाइन ठगीबाट जोगाउन चाहने छोराछोरी।",
          "नक्कली भुक्तानी स्क्रिनसट देखाएर सामान ठग्नेहरूबाट सचेत रहन चाहने पसलेहरू।"
        ],
        "whoShouldAvoid": [
          "साइबर सुरक्षा सबैका लागि अनिवार्य छ; कसैले पनि यसलाई बेवास्ता गर्नु हुँदैन।"
        ]
      },
      "decisionScenario": {
        "title": "सरितालाई आएको धम्कीपूर्ण फोन: खाता रोक्का हुनबाट जोगाउन OTP भन्ने कि नभन्ने?",
        "goal": "'राष्ट्र बैंकको अधिकृत' भन्दै खाता बन्द गरिदिने धम्की दिएर OTP माग्ने अपरिचित कलको सामना गर्नु।",
        "options": [
          {
            "option": "विकल्प क: खाता बन्द होला भन्ने डरले मोबाइलमा आएको ६ अंकको OTP फोनमै भनिदिने",
            "verdict": "खाताको सम्पूर्ण पैसा तुरुन्तै चोरी हुने",
            "recommended": false,
            "rationale": "फोन गर्ने व्यक्ति ठग हो जसले सरिताको पासवर्ड रिसेट गर्न खोज्दैछ; OTP भन्नासाथ १ मिनेटभित्र खाताको सबै पैसा अरूको खातामा ट्रान्सफर भएर सकिन्छ।"
          },
          {
            "option": "विकल्प ख: तुरुन्तै फोन काट्ने, नम्बर ब्लक गर्ने र आफ्नो बैंकको आधिकारिक हटलाइनमा फोन गरेर बुझ्ने",
            "verdict": "शतप्रतिशत सुरक्षित र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "कुनै पनि बैंकले फोनमा OTP माग्दैन। फोन काट्नासाथ ठगीको प्रयास असफल हुन्छ र सरिताको खाताको पैसा पूर्ण सुरक्षित रहन्छ।"
          }
        ],
        "takeaway": "तपाईंको OTP तपाईंको बैंकको ढुकुटी खोल्ने साँचो हो। प्रहरी, बैंक वा राष्ट्र बैंकको गभर्नर नै भनेर फोन गरे पनि आफ्नो OTP वा पासवर्ड कसैलाई कहिल्यै नदिनुहोस्।"
      },
      "faqs": [
        {
          "q": "के बैंक वा राष्ट्र बैंकका कर्मचारीले कहिल्यै फोन गरेर OTP माग्न सक्छन्?",
          "a": "कहिल्यै माग्दैनन्। कुनै पनि बैंक, ई-सेवा, खल्ती, प्रहरी वा राष्ट्र बैंकका कर्मचारीले फोन वा मेसेजमा OTP, पिन वा पासवर्ड माग्ने कानुनी अधिकार नै छैन। यस्तो माग्ने जो-कोही १००% ठग हुन्।"
        },
        {
          "q": "यदि झुक्किएर कसैलाई OTP भनियो भने तत्काल के गर्ने?",
          "a": "तत्काल आफ्नो बैंकको २४ सै घण्टा चल्ने आधिकारिक कार्ड तथा डिजिटल बैंकिङ हेल्पलाइनमा फोन गरेर आफ्नो मोबाइल बैंकिङ र डेबिट कार्ड ब्लक गराउनुहोस् र खाताबाट पैसा बाहिरिन तुरुन्त रोक्न लगाउनुहोस्।"
        }
      ]
    }
  },
  "reporting-digital-financial-fraud-nepal-police": {
    "en": {
      "advantages": [
        "Provides an exact immediate response checklist to stop money leaving destination accounts within the 'Golden Hour'.",
        "Outlines the formal complaint filing process with the Nepal Police Cyber Bureau (भोटाहिटी/काठमाडौँ) and local DPO offices.",
        "Explains the interbank coordination mechanism between Nepal Rastra Bank, commercial banks, and police to freeze destination mule accounts.",
        "Prepares all necessary evidentiary documentation (Transaction IDs, screenshot chat trails, audio recordings, bank statements)."
      ],
      "limitations": [
        "Funds transferred out to offshore platforms, cryptocurrency, or withdrawn from ATMs within minutes are difficult to recover.",
        "Cyber Bureau investigation backlogs can lead to slow turnaround times on micro-fraud cases under NPR 10,000.",
        "Victims must file a physical complaint or verified online police report with formal identification documents.",
        "Bank staff cannot freeze a third party's destination account without an official written Nepal Police investigation letter."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Victims of unauthorized bank debits, online shopping scams, or social media financial extortion in Nepal.",
          "Individuals who suspect their compromised account was used as an unwitting 'money mule'.",
          "Business owners who delivered goods based on forged payment confirmation slips."
        ],
        "whoShouldAvoid": [
          "Civil commercial disputes or normal customer service refund disagreements (handled by Consumer Protection Department, not police)."
        ]
      },
      "decisionScenario": {
        "title": "Bibek's Emergency Response: Waiting for Bank Branches to Open Tomorrow vs Immediate Cyber Bureau Intimation",
        "goal": "Recovering NPR 50,000 lost to a phishing scam at 8:00 PM on a Friday evening.",
        "options": [
          {
            "option": "Option A: Wait until Sunday morning at 10:00 AM to visit his local bank branch in person",
            "verdict": "Money Permanently Lost",
            "recommended": false,
            "rationale": "By Sunday morning, the scammer has already routed the funds through multiple mule accounts and withdrawn cash from physical ATMs, making recovery impossible."
          },
          {
            "option": "Option B: Call the bank's 24/7 hotline to freeze his account, get the Destination Account details, and immediately email cyberbureau@nepalpolice.gov.np and visit the nearest police post",
            "verdict": "Golden Hour Action & Recommended",
            "recommended": true,
            "rationale": "Within minutes, the bank issues an interbank freeze request to the recipient bank, locking the stolen funds inside the destination account before cash withdrawal."
          }
        ],
        "takeaway": "In financial cyber-crime, the first 60 minutes are everything. Act immediately to freeze accounts; delays allow fraudsters to vanish with your cash."
      },
      "faqs": [
        {
          "q": "Where is the Nepal Police Cyber Bureau located and how do I contact them?",
          "a": "The Nepal Police Cyber Bureau headquarters is located at Bhotahiti, Kathmandu. You can contact them via phone at 01-4241088, mobile/Viber at 9851286770, or email your complaint to cyberbureau@nepalpolice.gov.np."
        },
        {
          "q": "Can my bank reverse an unauthorized fraudulent transfer on its own?",
          "a": "A bank cannot arbitrarily reverse funds from another person's account without either the recipient's consent or a formal directive/letter issued by the Nepal Police or court under the Banking Offence and Cyber Crime laws."
        }
      ]
    },
    "np": {
      "advantages": [
        "ठगी भएको पहिलो 'गोल्डेन आवर' (Golden Hour) भित्रै पैसा निकालिनबाट रोक्ने तत्काल चाल्नुपर्ने कदम थाहा हुन्छ।",
        "नेपाल प्रहरीको साइबर ब्युरो (भोटाहिटी/काठमाडौँ) र जिल्ला प्रहरी कार्यालयमा आधिकारिक उजुरी गर्ने प्रक्रिया बुझिन्छ।",
        "राष्ट्र बैंक, सम्बन्धित बैंक र प्रहरी मिलेर ठगको बैंक खाता तुरुन्तै रोक्का (Freeze) गराउने कानुनी बाटो प्रयोग गर्न सकिन्छ।",
        "उजुरीका लागि चाहिने प्रमाणहरू (कारोबारको ट्रान्ज्याक्सन ID, च्याटको स्क्रिनसट, कल रेकर्ड र स्टेटमेन्ट) सही तरिकाले जुटाउन सकिन्छ।"
      ],
      "limitations": [
        "यदि ठगले पैसा पाउनेबित्तिकै ATM बाट नगद झिकिसकेको छ भने पैसा फिर्ता ल्याउन निकै गाह्रो हुन्छ।",
        "साइबर ब्युरोमा धेरै उजुरीको चाप हुने भएकाले सानातिना रकमको अनुसन्धानमा केही समय लाग्न सक्छ।",
        "आधिकारिक छानबिनका लागि नागरिकताको प्रमाणपत्रसहित लिखित उजुरी दर्ता गर्नैपर्छ।",
        "प्रहरीको आधिकारिक पत्र बिना कुनै पनि बैंकले अर्काको खाताको पैसा रोक्का गर्न वा फिर्ता दिन पाउँदैन।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "अनलाइन ठगी, नक्कली चिठ्ठा वा खाताबाट अनाधिकृत पैसा काटिएर पीडित बनेका नागरिक।",
          "नक्कली बैंक ट्रान्सफर स्क्रिनसट देखाएर सामान ठगिएका अनलाइन तथा खुद्रा व्यापारीहरू।",
          "आफ्नो बैंक खाता दुरुपयोग भएको आशंका लागेका व्यक्तिहरू।"
        ],
        "whoShouldAvoid": [
          "व्यापारिक लेनदेनको सामान्य विवाद वा सामान फिर्ता नभएको घरायसी समस्या (जसका लागि उपभोक्ता संरक्षण विभाग जानुपर्छ)।"
        ]
      },
      "decisionScenario": {
        "title": "विवेकको आपतकालीन कदम: आइतबार बैंक खुल्ने बेला पर्खने कि तत्काल साइबर ब्युरोमा खबर गर्ने?",
        "goal": "शुक्रबार राति ८ बजे अनलाइन ठगीमा परेर खाताबाट गुमेको रु. ५०,००० फिर्ता ल्याउने प्रयास गर्नु।",
        "options": [
          {
            "option": "विकल्प क: आइतबार बिहान १० बजे बैंक खुलेपछि शाखामा गएर निवेदन दिने",
            "verdict": "पैसा सदाका लागि गुम्ने",
            "recommended": false,
            "rationale": "आइतबारसम्ममा ठगले विभिन्न बैंक खाता घुमाएर ATM बाट पैसा झिकिसक्छ र पैसा फिर्ता आउने सम्भावना शून्य हुन्छ।"
          },
          {
            "option": "विकल्प ख: तत्काल बैंकको २४ सै घण्टा हटलाइनमा फोन गरी खाताको विवरण लिने र साइबर ब्युरो (cyberbureau@nepalpolice.gov.np) मा तुरुन्त उजुरी गर्ने",
            "verdict": "गोल्डेन आवरको सही कदम र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "बैंकले तत्काल उक्त पैसा गएको अर्को बैंकलाई रोक्का गर्न पत्राचार गर्छ, प्रहरीको समन्वयमा ठगको खाता रोकिन्छ र नगद झिक्नुअघि नै रकम सुरक्षित हुन्छ।"
          }
        ],
        "takeaway": "वित्तीय साइबर अपराधमा पहिलो ६० मिनेट सबैभन्दा महत्वपूर्ण हुन्छ। एक मिनेट पनि ढिला नगरी बैंक र नेपाल प्रहरीको साइबर ब्युरोमा तुरुन्त सम्पर्क गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपाल प्रहरीको साइबर ब्युरो कहाँ छ र कसरी सम्पर्क गर्ने?",
          "a": "नेपाल प्रहरीको साइबर ब्युरोको केन्द्रीय कार्यालय भोटाहिटी, काठमाडौँमा रहेको छ। तपाईंले फोन नम्बर ०१-४२४१०८८, मोबाइल/भाइबर ९८५१२८६७७० मा सम्पर्क गर्न सक्नुहुन्छ वा cyberbureau@nepalpolice.gov.np मा सिधै इमेल उजुरी पठाउन सक्नुहुन्छ।"
        },
        {
          "q": "के बैंकले आफ्नो खाताबाट ठगिएको पैसा आफैँ फिर्ता ल्याइदिन सक्छ?",
          "a": "सक्दैन। बैंकले अर्काको खातामा पुगिसकेको पैसा आफैँ तानेर फिर्ता दिन कानुनतः मिल्दैन। यसका लागि नेपाल प्रहरीको साइबर ब्युरोको आधिकारिक पत्र वा अदालतको आदेश अनिवार्य चाहिन्छ।"
        }
      ]
    }
  },
  "sole-proprietorship-vs-pvt-ltd-nepal": {
    "en": {
      "advantages": [
        "Compares the legal structures: Sole Proprietorship (unlimited personal liability) vs Private Limited Company (limited liability shield).",
        "Limited liability protects your personal home, ancestral land, and family savings if the business goes bankrupt or faces lawsuits.",
        "Private Limited companies issue formal equity shares, allowing co-founders, angel investors, and venture capital dilution.",
        "Corporate perpetuity: a Pvt Ltd company continues existing legally even if a shareholder or founder passes away."
      ],
      "limitations": [
        "Private Limited companies carry higher annual compliance overheads (statutory audit, ROC AGM filing, corporate tax).",
        "Sole proprietorships cannot sell equity shares or bring in equity partners without re-registering or liquidating.",
        "Withdrawing profits from a Pvt Ltd requires formal board dividend distributions subject to 5% corporate dividend withholding tax.",
        "Dissolving and striking off a Private Limited company at the Office of the Company Registrar (OCR) is complex and takes months."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Entrepreneurs launching high-growth tech startups, manufacturing plants, or capital-intensive ventures in Nepal.",
          "Co-founders pooling unequal capital contributions and defining formal shareholding agreements.",
          "Small merchants transitioning from local informal shops to professional corporate entities."
        ],
        "whoShouldAvoid": [
          "Single-person micro freelancers with zero debt or employee liabilities (who can comfortably operate under Sole Proprietorship)."
        ]
      },
      "decisionScenario": {
        "title": "Ankit's Restaurant Venture: Sole Proprietorship vs Private Limited Registration",
        "goal": "Opening a multi-branch cafe in Kathmandu with an initial capital investment of NPR 40,00,000 and 2 partners.",
        "options": [
          {
            "option": "Option A: Register as an individual Sole Proprietorship at the Department of Commerce or Ward Office",
            "verdict": "Extreme Personal Risk & No Legal Partner Shares",
            "recommended": false,
            "rationale": "Partners cannot have legal share certificates. If the restaurant defaults on bank debt or vendor food contracts, Ankit's personal ancestral home can be confiscated by creditors."
          },
          {
            "option": "Option B: Incorporate as a Private Limited Company at the Office of the Company Registrar (OCR)",
            "verdict": "Shielded & Recommended",
            "recommended": true,
            "rationale": "Legally distributes shares among partners, shields all personal assets behind corporate limited liability, and establishes the formal corporate chassis needed for franchise growth."
          }
        ],
        "takeaway": "Never take on commercial debt, partners, or serious operational liabilities under a Sole Proprietorship. Use a Private Limited company to build a fortress around your family assets."
      },
      "faqs": [
        {
          "q": "What is the primary legal difference between a Proprietorship and a Pvt Ltd in Nepal?",
          "a": "A Sole Proprietorship has unlimited personal liability (creditors can seize personal assets), whereas a Private Limited Company is a separate legal entity where shareholder liability is strictly limited to their unpaid share capital."
        },
        {
          "q": "How many shareholders are required to register a Private Limited company in Nepal?",
          "a": "Under the Companies Act 2063, a Private Limited company can be registered with as few as 1 shareholder (Single Person Company) up to a maximum of 101 shareholders."
        }
      ]
    },
    "np": {
      "advantages": [
        "एकलौटी फर्म (असीमित व्यक्तिगत दायित्व) र प्राइभेट लिमिटेड कम्पनी (सिमित दायित्व) बीचको कानुनी भिन्नता स्पष्ट बुझिन्छ।",
        "सिमित दायित्व (Limited Liability): व्यवसाय डुबेमा वा ऋण लागेमा पनि तपाईंको व्यक्तिगत घर, जग्गा र पारिवारिक सम्पत्ति सुरक्षित रहन्छ।",
        "कम्पनीमा सेयर कित्ता विभाजन हुने भएकाले साथीहरूसँग मिलेर लगानी गर्न र नयाँ लगानीकर्ता भित्र्याउन सहज हुन्छ।",
        "कम्पनीको आफ्नै कानुनी अस्तित्व (Perpetual Succession) हुने भएकाले संस्थापकको मृत्यु भए पनि व्यवसाय निरन्तर चलिरहन्छ।"
      ],
      "limitations": [
        "प्राइभेट लिमिटेडमा वार्षिक अडिट गराउनुपर्ने, कम्पनी रजिष्ट्रारमा विवरण बुझाउनुपर्ने जस्ता कानुनी खर्च र झन्झट बढी हुन्छ।",
        "एकलौटी फर्ममा सेयर बाँड्न वा नयाँ साझेदार थप्न कानुनी रूपमा मिल्दैन।",
        "कम्पनीबाट नाफा झिक्दा ५% लाभांश कर (Dividend Tax) काटेर मात्र व्यक्तिगत खातामा लिन पाइन्छ।",
        "व्यवसाय बन्द गर्नुपरेमा कम्पनी खारेजी (Company Strike-off) को प्रक्रिया निकै लामो र जटिल हुन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "साथीहरूसँग मिलेर लगानी गर्ने, स्टार्टअप सुरु गर्ने वा ठूलो व्यवसाय खोल्न लागेका उद्यमीहरू।",
          "ऋण लिएर वा धेरै कर्मचारी राखेर जोखिमपूर्ण व्यवसाय सञ्चालन गर्न लागेका व्यवसायी।",
          "भविष्यमा ब्रान्ड बनाएर शाखा विस्तार गर्ने सोच भएका दूरदर्शी संस्थापकहरू।"
        ],
        "whoShouldAvoid": [
          "कुनै कर्मचारी र ऋण नभएका एक्लै सानो खुद्रा पसल वा व्यक्तिगत परामर्श दिने व्यक्तिहरू (जसका लागि एकलौटी फर्म नै सहज हुन्छ)।"
        ]
      },
      "decisionScenario": {
        "title": "अंकितको क्याफे व्यवसाय: वडामा एकलौटी फर्म दर्ता गर्ने कि कम्पनी रजिष्ट्रारमा प्राइभेट लिमिटेड?",
        "goal": "काठमाडौँमा ३ जना साथी मिलेर रु. ४० लाख लगानीमा नयाँ रेस्टुरेन्ट सुरु गर्दा कानुनी संरचना रोज्नु।",
        "options": [
          {
            "option": "विकल्प क: झन्झट नहोस् भनेर अंकित एक्लैको नाममा घरेलु वा वडामा एकलौटी फर्म खोल्ने",
            "verdict": "अत्यन्त घातक व्यक्तिगत जोखिम",
            "recommended": false,
            "rationale": "अरू साथीहरूको लगानीको कुनै कानुनी सेयर प्रमाणपत्र हुँदैन। भोलि रेस्टुरेन्ट घाटामा गएर ऋण लाग्यो भने साहुहरूले अंकितको व्यक्तिगत घर र जग्गा लिलाम गराइदिन सक्छन्।"
          },
          {
            "option": "विकल्प ख: कम्पनी रजिष्ट्रारको कार्यालय (OCR) मा प्राइभेट लिमिटेड कम्पनी दर्ता गर्ने",
            "verdict": "कानुनी रूपमा सुरक्षित र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "तीनै जना साथीहरूले लगानी अनुसार आधिकारिक सेयर पाउँछन्, दायित्व कम्पनीको नाममा मात्र सीमित हुन्छ र सबैको व्यक्तिगत सम्पत्ति पूर्ण सुरक्षित रहन्छ।"
          }
        ],
        "takeaway": "साझेदार र बैंक ऋण भएको व्यवसाय कहिल्यै एकलौटी फर्ममा नगर्नुहोस्। प्राइभेट लिमिटेड कम्पनी दर्ता गरेर आफ्नो पारिवारिक सम्पत्तिलाई कानुनी पर्खालले सुरक्षित राख्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालमा एकलौटी फर्म र प्राइभेट लिमिटेड बीचको मुख्य भिन्नता के हो?",
          "a": "एकलौटी फर्ममा मालिक र व्यवसाय एउटै मानिन्छ, ऋण लागेमा मालिकको व्यक्तिगत सम्पत्ति जफत हुन सक्छ। प्राइभेट लिमिटेड भनेको कानुनले जन्माएको छुट्टै व्यक्ति हो, जहाँ सेयरधनीको दायित्व उसले लगानी गरेको सेयर पुँजीमा मात्र सीमित हुन्छ।"
        },
        {
          "q": "नेपालमा प्राइभेट लिमिटेड कम्पनी दर्ता गर्न कम्तीमा कतिजना सेयरधनी चाहिन्छ?",
          "a": "कम्पनी ऐन २०६३ अनुसार नेपालमा १ जना मात्र व्यक्ति भए पनि (एकल सेयरधनी कम्पनी) वा बढीमा १०१ जनासम्म सेयरधनी मिलेर प्राइभेट लिमिटेड कम्पनी दर्ता गर्न सकिन्छ।"
        }
      ]
    }
  },
  "company-registration-ocr-step-by-step": {
    "en": {
      "advantages": [
        "100% online company name reservation and document submission through the OCR portal (ocr.gov.np).",
        "Abolished government registration fees: starting a private company now incurs zero registration charges under recent budget reforms.",
        "Clear workflow: Name Approval -> Memorandum & Articles of Association (MOA/AOA) -> Digital Signing -> Certificate Generation.",
        "Empowers founders to incorporate without paying exorbitant legal consultancy middleman fees."
      ],
      "limitations": [
        "Strict company name reservation guidelines: proposed names cannot conflict with existing trademarks or generic phrases.",
        "Complex legal drafting required for the Objectives (उद्देश्य) clause in the Memorandum of Association.",
        "Digital signatures and biometrics may still require physical presence during bank account opening and local Ward registration.",
        "Mandatory requirement to obtain a Business PAN from the IRD within 30 days of OCR incorporation."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Founders, startups, and innovators incorporating a new commercial enterprise in Nepal.",
          "Professionals formalizing existing partnership agreements into registered corporate structures.",
          "Anyone wanting to understand the exact procedural timeline of the Office of the Company Registrar."
        ],
        "whoShouldAvoid": [
          "NGOs, clubs, or social welfare organizations (registered under District Administration Offices, not OCR)."
        ]
      },
      "decisionScenario": {
        "title": "Sujan's Startup Incorporation: Paying Legal Middlemen NPR 35,000 vs Direct OCR Portal Filing",
        "goal": "Incorporating an IT services private company with NPR 10,00,000 authorized capital.",
        "options": [
          {
            "option": "Option A: Hand over all documents to an unregistered broker demanding NPR 35,000 upfront",
            "verdict": "Expensive & Risky",
            "recommended": false,
            "rationale": "Since the government abolished company registration fees, paying NPR 35,000 for standard template documents is an enormous waste of early startup capital."
          },
          {
            "option": "Option B: Use OCR's official online portal (ocr.gov.np) with standard MOA/AOA templates and pay zero government registration fees",
            "verdict": "Empowered, Free & Recommended",
            "recommended": true,
            "rationale": "Completed in 3 to 5 business days, zero official government registration fees, and ensures founders understand every single clause in their corporate charter."
          }
        ],
        "takeaway": "Company registration in Nepal is completely digitized and legally free of government fees. Use the OCR online portal directly and keep your capital for your business."
      },
      "faqs": [
        {
          "q": "Are company registration fees still charged by the Office of the Company Registrar (OCR) in Nepal?",
          "a": "Under the latest Finance Act reforms, the Government of Nepal has completely waived statutory registration fees for incorporating new private limited companies."
        },
        {
          "q": "What must a company do immediately after receiving its OCR incorporation certificate?",
          "a": "Within 30 days, the company must register its Business PAN/VAT at the local Inland Revenue Office (IRO), register at the local Ward Office, and open a corporate bank account."
        }
      ]
    },
    "np": {
      "advantages": [
        "कम्पनी रजिष्ट्रारको अनलाइन पोर्टल (ocr.gov.np) बाट घरमै बसीबसी नाम सिफारिस र कागजात पेश गर्न सकिन्छ।",
        "सरकारले कम्पनी दर्ता दस्तुर पूर्ण रूपमा निःशुल्क (शून्य) गरेकाले दर्ता गर्दा सरकारी शुल्क लाग्दैन।",
        "कम्पनीको प्रबन्धपत्र (MOA) र नियमावली (AOA) को स्पष्ट कानुनी ढाँचा र चरणबद्ध प्रक्रिया बुझ्न सकिन्छ।",
        "बिचौलिया र दलाललाई हजारौँ रुपैयाँ नबुझाई आफैँ कम्पनी दर्ता गर्न सक्ने आत्मविश्वास मिल्छ।"
      ],
      "limitations": [
        "कम्पनीको नाम छान्दा पहिले दर्ता भइसकेका कम्पनीको नाम वा ट्रेडमार्कसँग जुध्न नहुने कडा नियम छ।",
        "प्रबन्धपत्रमा कम्पनीको मुख्य उद्देश्य लेख्दा सम्बन्धित निकायको ऐन कानुनसँग बाझिनु हुँदैन।",
        "कम्पनीको प्रमाणपत्र आएपछि पनि वडा कार्यालय र बैंकमा खाता खोल्न भौतिक रूपमै पुग्नुपर्छ।",
        "कम्पनी दर्ता भएको ३० दिनभित्र आन्तरिक राजस्व कार्यालयबाट व्यावसायिक प्यान/भ्याट अनिवार्य लिनुपर्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "नयाँ व्यवसाय वा स्टार्टअप सुरु गर्न कम्पनी दर्ता गर्न लागेका नेपाली उद्यमीहरू।",
          "अनौपचारिक रूपमा सञ्चालन भइरहेको व्यापारलाई कानुनी कम्पनीको रूप दिन चाहने व्यवसायीहरू।",
          "कम्पनी रजिष्ट्रार कार्यालयको डिजिटल प्रक्रिया बुझ्न चाहने जो-कोही।"
        ],
        "whoShouldAvoid": [
          "गैरनाफामूलक सामाजिक संस्था, क्लब वा गुठी खोल्न चाहनेहरू (जो जिल्ला प्रशासन कार्यालयमा दर्ता हुनुपर्छ)।"
        ]
      },
      "decisionScenario": {
        "title": "सुजनको कम्पनी दर्ता: बिचौलियालाई रु. ३५,००० दिने कि अनलाइन पोर्टलबाट आफैँ गर्ने?",
        "goal": "रु. १० लाख अधिकृत पुँजी भएको नयाँ सफ्टवेयर कम्पनी ५ दिनभित्र दर्ता गर्नु।",
        "options": [
          {
            "option": "विकल्प क: 'काम छिटो गरिदिन्छु' भन्ने दलाललाई रु. ३५,००० बुझाउने",
            "verdict": "पैसा खेर / अनावश्यक खर्च",
            "recommended": false,
            "rationale": "सरकारले कम्पनी दर्ताको सरकारी दस्तुर नै निःशुल्क गरिसकेको अवस्थामा सामान्य फारम भर्नका लागि रु. ३५,००० फ्याँक्नु नयाँ व्यवसायका लागि ठूलो घाटा हो।"
          },
          {
            "option": "विकल्प ख: OCR को आधिकारिक पोर्टल (ocr.gov.np) मा लगइन गरी नमुना प्रबन्धपत्र भरेर आफैँ दर्ता गर्ने",
            "verdict": "सस्तो, आधुनिक र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "३ देखि ५ दिनभित्र दर्ता प्रमाणपत्र आउँछ, सरकारी दस्तुर शून्य लाग्छ र आफ्ना सम्पूर्ण सेयरधनीका अधिकार आफैँलाई स्पष्ट थाहा हुन्छ।"
          }
        ],
        "takeaway": "नेपालमा कम्पनी दर्ता प्रक्रिया पूर्ण डिजिटल र सरकारी दस्तुरमुक्त भइसकेको छ। आफ्नै हातले ocr.gov.np प्रयोग गर्नुहोस् र अनावश्यक खर्च जोगाउनुहोस्।"
      },
      "faqs": [
        {
          "q": "के नेपालमा कम्पनी दर्ता गर्दा सरकारी शुल्क लाग्छ?",
          "a": "पछिल्लो आर्थिक ऐनको व्यवस्था अनुसार नेपाल सरकारले नयाँ प्राइभेट लिमिटेड कम्पनी दर्ता गर्दा लाग्ने सबै प्रकारका सरकारी दर्ता दस्तुरहरू पूर्ण रूपमा मिनाहा (निःशुल्क) गरिदिएको छ।"
        },
        {
          "q": "कम्पनीको प्रमाणपत्र आउनासाथ तुरुन्त के गर्नुपर्छ?",
          "a": "प्रमाणपत्र प्राप्त भएको ३० दिनभित्र सम्बन्धित आन्तरिक राजस्व कार्यालयबाट व्यावसायिक प्यान वा भ्याट (PAN/VAT) प्रमाणपत्र लिनुपर्छ र वडा कार्यालयमा व्यवसाय दर्ता गरी बैंक खाता खोल्नुपर्छ।"
        }
      ]
    }
  },
  "pan-vs-vat-thresholds-nepal": {
    "en": {
      "advantages": [
        "Clarifies mandatory statutory Value Added Tax (VAT) turnover thresholds under Nepal's VAT Act 2052.",
        "Differentiates Goods (Threshold: NPR 50 Lakhs) vs Services/Consultancy (Threshold: NPR 20 Lakhs) vs Mixed (NPR 20 Lakhs).",
        "Explains input tax credit: claiming back 13% VAT paid on business inputs to offset output VAT collected.",
        "Prevents severe retrospective tax assessments, 100% penalties, and shop seals by the Inland Revenue Department."
      ],
      "limitations": [
        "Operating under VAT mandates strict monthly or bi-monthly VAT return filing, even if sales in that month were zero.",
        "Failing to file a VAT return on time triggers a recurring monthly non-filing penalty (Section 19).",
        "Certain designated retail sectors (hardware, sanitary, electronics, restaurants with liquor) require mandatory VAT regardless of turnover.",
        "Input tax credit claims require formal computer billing or verified tax invoices with seller PAN."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Small business owners, shopkeepers, and service providers nearing the statutory sales threshold.",
          "Entrepreneurs deciding whether to register under standard PAN or voluntary VAT.",
          "Accountants ensuring monthly VAT filing compliance for enterprise clients."
        ],
        "whoShouldAvoid": [
          "Salaried employees and individuals with zero commercial business sales."
        ]
      },
      "decisionScenario": {
        "title": "Dipen's Retail Store Expansion: Annual Turnover Reaching NPR 55 Lakhs",
        "goal": "Deciding whether to stay under normal PAN or transition to mandatory Value Added Tax (VAT).",
        "options": [
          {
            "option": "Option A: Hide the extra NPR 5 Lakhs in cash and stay under PAN to 'avoid the headache of VAT'",
            "verdict": "Illegal Tax Evasion & High Penalty",
            "recommended": false,
            "rationale": "Violates the statutory NPR 50 Lakh goods threshold. When IRD audits bank QR flows or vendor purchases, Dipen faces 100% fines, back taxes, and criminal charges."
          },
          {
            "option": "Option B: Apply for VAT registration at his local IRO, issue formal 13% VAT invoices, and claim input tax credit",
            "verdict": "Fully Compliant & Recommended",
            "recommended": true,
            "rationale": "100% legal compliance. Dipen offsets all the VAT paid to wholesale distributors against his retail sales, unlocking institutional B2B corporate contracts."
          }
        ],
        "takeaway": "Crossing the statutory turnover threshold is a sign of business growth, not a tax curse. Transition into VAT transparently and claim your input tax credits."
      },
      "faqs": [
        {
          "q": "What are the mandatory VAT registration turnover thresholds in Nepal?",
          "a": "Under the Value Added Tax Act, businesses selling Goods must register in VAT if annual turnover exceeds NPR 50,00,000 (50 Lakhs); for Services or mixed transactions, the threshold is NPR 20,00,000 (20 Lakhs)."
        },
        {
          "q": "Can a small business voluntarily register in VAT before hitting the threshold in Nepal?",
          "a": "Yes. Any registered business can voluntarily apply for VAT registration at any time, allowing them to issue VAT bills and claim 13% input tax credits on their business purchases."
        }
      ]
    },
    "np": {
      "advantages": [
        "मूल्य अभिवृद्धि कर (VAT) ऐन २०५२ अनुसार कुन अवस्थामा भ्याटमा दर्ता हुनैपर्छ भन्ने कानुनी सीमा स्पष्ट बुझिन्छ।",
        "वस्तु बिक्रीमा वार्षिक रु. ५० लाख र सेवा/परामर्शमा वार्षिक रु. २० लाखभन्दा बढी कारोबार भएमा भ्याट अनिवार्य हुन्छ।",
        "आफूले सामान किन्दा तिरेको १३% भ्याटलाई ग्राहकबाट उठाएको भ्याटसँग मिलान (Input Tax Credit) गर्न पाइन्छ।",
        "आन्तरिक राजस्व कार्यालयको अनुगमनमा परी दोब्बर जरिवाना तिर्नुपर्ने वा पसल सिलबन्दी हुने जोखिमबाट बच्न सकिन्छ।"
      ],
      "limitations": [
        "भ्याटमा दर्ता भएपछि कारोबार शून्य भए पनि हरेक महिनाको २५ गतेभित्र अनिवार्य रूपमा भ्याट विवरण बुझाउनैपर्छ।",
        "समयमा भ्याट विवरण नबुझाएमा मासिक जरिवाना र ब्याज जोडिँदै जान्छ।",
        "हार्डवेयर, सेनेटरी, मदिरा बेच्ने रेस्टुरेन्ट जस्ता तोकिएका व्यवसायले कारोबार जतिसुकै कम भए पनि सुरुमै भ्याटमा जानुपर्छ।",
        "भ्याट छुट दाबी गर्न खरिद गर्दा अनिवार्य रूपमा आधिकारिक भ्याट बिल लिनैपर्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "व्यापार बढेर वार्षिक २० लाख वा ५० लाखको सीमा नजिक पुगेका नेपाली साना व्यवसायीहरू।",
          "ठूला कर्पोरेट वा सरकारी निकायलाई सामान बेच्न भ्याट बिल जारी गर्नुपर्ने उद्यमीहरू।",
          "व्यावसायिक प्यान र भ्याटको भिन्नता बुझ्न चाहने जो-कोही।"
        ],
        "whoShouldAvoid": [
          "कुनै व्यापार नगर्ने र तलब मात्र बुझ्ने जागिरेहरू।"
        ]
      },
      "decisionScenario": {
        "title": "दिपेनको व्यापार विस्तार: वार्षिक कारोबार रु. ५५ लाख पुगेपछि के गर्ने?",
        "goal": "वस्तु बिक्रीको कारोबार ५० लाखको सीमा नाघेपछि कानुनी कर प्रणालीमा सुरक्षित रहने बाटो रोज्नु।",
        "options": [
          {
            "option": "विकल्प क: ५ लाखको कारोबार लुकाएर पुरानै प्यानमा मात्र बसिरहने",
            "verdict": "गैरकानुनी कर छली / गम्भीर दण्ड",
            "recommended": false,
            "rationale": "राष्ट्र बैंकको QR र बैंक स्टेटमेन्टबाट कर कार्यालयले सजिलै पत्ता लगाउँछ। समातिएमा विगतको सबै भ्याट, २५% ब्याज र शतप्रतिशत जरिवाना तिर्नुपर्छ।"
          },
          {
            "option": "विकल्प ख: आन्तरिक राजस्व कार्यालयमा गएर भ्याट प्रमाणपत्र लिने र ग्राहकलाई १३% भ्याट बिल जारी गर्ने",
            "verdict": "कानुनी रूपमा सुरक्षित र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "दिपेनको व्यवसाय पूर्ण कानुनी हुन्छ, थोक बिक्रेतालाई तिरेको भ्याट फिर्ता मिलान हुन्छ र ठूला संस्थागत ग्राहकलाई सामान बेच्ने अवसर खुल्छ।"
          }
        ],
        "takeaway": "कारोबारको सीमा नाघ्नु व्यवसाय फस्टाएको प्रमाण हो, कुनै डर होइन। समयमै भ्याटमा रूपान्तरण हुनुहोस् र इनपुट कर छुटको लाभ लिनुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालमा भ्याटमा दर्ता हुनुपर्ने अनिवार्य सीमा कति हो?",
          "a": "मूल्य अभिवृद्धि कर ऐन अनुसार वस्तु (Goods) को व्यापारमा विगत १२ महिनाको कारोबार रु. ५० लाख नाघेमा र सेवा (Services) वा मिश्रित व्यापारमा रु. २० लाख नाघेमा अनिवार्य रूपमा भ्याटमा दर्ता हुनुपर्छ।"
        },
        {
          "q": "के सीमा नपुगेको सानो व्यवसायले पनि स्वेच्छिक रूपमा भ्याट दर्ता गर्न सक्छ?",
          "a": "सक्छ। जुनसुकै दर्तावाला फर्म वा कम्पनीले चाहेमा कारोबार सीमा नपुगे पनि सुरुवातमै स्वेच्छिक भ्याट दर्ता गरी भ्याट बिल काट्न र इनपुट कर छुट लिन सक्छ।"
        }
      ]
    }
  },
  "vendor-tds-withholding-audit-nepal": {
    "en": {
      "advantages": [
        "Mastering withholding tax compliance under Sections 87, 88, and 89 of the Income Tax Act 2058.",
        "Correctly withholds 1.5% on VAT procurement bills, 10% on house rent, and 15% on non-VAT service invoices.",
        "Protects the enterprise from non-withholding penalties (Section 119 interest and disallowance of business expenses).",
        "Deposits TDS electronically via IRD portals within 25 days of the succeeding month to maintain a spotless audit trail."
      ],
      "limitations": [
        "Failing to withhold TDS makes the business entity legally liable to pay the unpaid tax directly out of company funds.",
        "Vendors often resist TDS deductions, demanding full cash payments without tax withholding.",
        "Expenses without compliant TDS cannot be deducted as income tax deductible expenses during annual audits.",
        "Strict monthly reconciliation deadlines (must be deposited by the 25th of the subsequent Nepali month)."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Business owners, operations managers, and accountants paying external suppliers and contractors.",
          "Enterprises undergoing annual statutory audits by registered Chartered Accountants (CAs).",
          "Organizations leasing commercial office spaces or warehouses."
        ],
        "whoShouldAvoid": [
          "Retail individual consumers buying personal groceries at neighborhood retail shops."
        ]
      },
      "decisionScenario": {
        "title": "Sunil's Office Lease Payment: Paying Full Rent in Cash vs Withholding 10% House Rent Tax",
        "goal": "Paying monthly commercial office rent of NPR 50,000 in Kathmandu compliant with tax laws.",
        "options": [
          {
            "option": "Option A: Pay NPR 50,000 in cash without TDS because the landlord refuses tax documentation",
            "verdict": "Disallowed Expense & Severe Audit Fine",
            "recommended": false,
            "rationale": "During annual audit, the entire NPR 600,000 annual rent is disallowed as a business expense. Sunil's company pays 25% corporate tax on it PLUS 15% interest penalty."
          },
          {
            "option": "Option B: Sign a formal lease contract, withhold 10% (NPR 5,000) for the local municipality, pay NPR 45,000 via bank transfer",
            "verdict": "100% Auditable & Recommended",
            "recommended": true,
            "rationale": "The entire NPR 50,000 monthly rent is fully tax-deductible against company revenues, saving NPR 150,000 in corporate taxes while fulfilling all local tax duties."
          }
        ],
        "takeaway": "If you don't withhold TDS from your vendor, the tax officer will collect it from your own company's pocket. Never disburse commercial payments without deducting statutory TDS."
      },
      "faqs": [
        {
          "q": "What is the TDS rate on goods purchased under a VAT bill in Nepal?",
          "a": "Under Section 89 of the Income Tax Act, public entities and formal registered entities purchasing goods or contracting services exceeding statutory thresholds under a VAT bill withhold 1.5% procurement TDS."
        },
        {
          "q": "What happens if a company fails to withhold TDS in Nepal?",
          "a": "The company itself becomes legally liable to pay the unwithheld tax amount to the IRD, plus 15% annual interest under Section 119, and the underlying expense is disallowed from income tax deductions."
        }
      ]
    },
    "np": {
      "advantages": [
        "आयकर ऐन २०५८ को दफा ८७, ८८ र ८९ अनुसार सप्लायर र भेन्डरलाई भुक्तानी गर्दा काट्नुपर्ने TDS को स्पष्ट नियम बुझिन्छ।",
        "भ्याट बिलमा १.५%, घरभाडामा १०% र व्यक्तिगत परामर्शमा १५% अग्रिम कर सही तरिकाले कट्टा गर्न सकिन्छ।",
        "कर नकाटी भुक्तानी गर्दा पछि अडिटमा खर्च अमान्य हुने र दोब्बर जरिवाना तिर्नुपर्ने जोखिमबाट कम्पनी जोगिन्छ।",
        "महिना सकिएको २५ गतेभित्र अनलाइनबाटै TDS दाखिला गरी कर कार्यालयको कडा अडिटमा कम्पनीलाई सफा राख्न सकिन्छ।"
      ],
      "limitations": [
        "यदि तपाईंले भेन्डरको पैसाबाट TDS काट्न बिर्सिनुभयो भने त्यो कर कम्पनी आफ्नै गोजीबाट तिर्नुपर्ने हुन्छ।",
        "धेरैजसो सप्लायर वा घरधनीले 'मलाई पुरै नगद चाहिन्छ, कर नकाट्नुस्' भन्दै विवाद गर्न सक्छन्।",
        "TDS नकाटी गरिएको खर्चलाई चार्टर्ड एकाउन्टेन्ट र कर अधिकृतले कम्पनीको खर्च मान्न अस्वीकार गर्छन्।",
        "हरेक महिनाको २५ गतेभित्र अनलाइन भौचर काटेर बैंकमार्फत कर बुझाइसक्नुपर्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "सप्लायर, घरधनी र कामदारलाई व्यावसायिक भुक्तानी गर्ने कम्पनी सञ्चालक र लेखापालहरू।",
          "वार्षिक लेखापरीक्षण (Audit) गराउने प्राइभेट लिमिटेड कम्पनी र दर्तावाला फर्महरू।",
          "कार्यालय वा गोदाम भाडामा लिएर व्यवसाय सञ्चालन गर्ने उद्यमीहरू।"
        ],
        "whoShouldAvoid": [
          "व्यक्तिगत घरायसी सामान किन्ने सामान्य उपभोक्ताहरू।"
        ]
      },
      "decisionScenario": {
        "title": "सुनिलको कार्यालय भाडा भुक्तानी: घरधनीलाई पुरै नगद दिने कि १०% कर काटेर बैंकिङ गर्ने?",
        "goal": "काठमाडौँमा मासिक रु. ५०,००० कार्यालय भाडा तिर्दा कम्पनीको खर्च कानुनी रूपमा प्रमाणित गर्नु।",
        "options": [
          {
            "option": "विकल्प क: घरधनीले कर नकाट भन्यो भन्दै पुरै रु. ५०,००० नगद बुझाउने र कुनै कर नकटाउने",
            "verdict": "अडिटमा खर्च खारेज र जरिवाना",
            "recommended": false,
            "rationale": "वार्षिक रु. ६ लाख भाडा कम्पनीको खर्चमा जोड्न पाइँदैन। कम्पनीले त्यसमा २५% कर्पोरेट कर (रु. १,५०,०००) उल्टै तिर्नुपर्छ र १५% ब्याज जरिवाना पनि लाग्छ।"
          },
          {
            "option": "विकल्प ख: लिखित भाडा सम्झौता गरी १०% (रु. ५,०००) वडामा बुझाउने र बाँकी रु. ४५,००० बैंक चेकमार्फत दिने",
            "verdict": "कानुनी रूपमा सुरक्षित र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "सम्पूर्ण रु. ६ लाख भाडा कम्पनीको खर्चमा कटाउन पाइन्छ, जसले गर्दा कम्पनीको रु. १,५०,००० नाफा कर जोगिन्छ र कुनै कानुनी विवाद आउँदैन।"
          }
        ],
        "takeaway": "यदि तपाईंले सप्लायरबाट TDS काट्नुभएन भने कर अधिकृतले त्यो कर तपाईंको कम्पनीकै खाताबाट असुल गर्छ। व्यावसायिक भुक्तानीमा कानुन बमोजिम TDS अनिवार्य काट्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालमा भ्याट बिल जारी भएको सामान खरिदमा कति प्रतिशत TDS काटिन्छ?",
          "a": "आयकर ऐनको दफा ८९ अनुसार औपचारिक दर्तावाला संस्था वा सरकारी निकायले भ्याट बिल अन्तर्गत वस्तु खरिद गर्दा कुल रकमको १.५% अग्रिम खरिद कर (Procurement TDS) कट्टा गर्नुपर्छ।"
        },
        {
          "q": "यदि कुनै कम्पनीले भेन्डरलाई भुक्तानी गर्दा TDS काटेन भने के हुन्छ?",
          "a": "आयकर ऐन अनुसार नकाटिएको कर बापतको रकम सोही कम्पनीबाट असुल गरिन्छ, दफा ११९ अनुसार वार्षिक १५% ब्याज र जरिवाना लाग्छ र उक्त खर्च कम्पनीको आयकर हिसाब गर्दा खर्चको रूपमा दाबी गर्न पाइँदैन।"
        }
      ]
    }
  },
  "annual-roc-filing-agm-minutes-nepal": {
    "en": {
      "advantages": [
        "Mastering mandatory Office of the Company Registrar (OCR) statutory filings under the Companies Act 2063.",
        "Prepares Section 51 (Shareholder & Capital Details), Section 80 (Auditor's Report), and Section 76 (AGM Minutes).",
        "Avoids compounding OCR late-filing penalty fines (which double and quadruple over delayed years).",
        "Ensures continuous 'Active' status on the OCR portal, enabling corporate banking, tax clearance, and tenders."
      ],
      "limitations": [
        "Requires hiring a registered statutory auditor (CA or Registered Auditor) to sign the balance sheet.",
        "Strict statutory deadline: Annual General Meeting (AGM) and filings must occur within 6 months of fiscal year-end (by Poush end).",
        "Prolonged non-filing (3+ years) causes company blacklisting and legal proceedings against directors' personal assets.",
        "Late fines accumulate on a progressive monthly basis and cannot be easily waived."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Directors and shareholders of all Private Limited companies registered in Nepal.",
          "Managing directors ensuring corporate good standing and regulatory compliance.",
          "Company secretaries preparing annual board minutes and shareholder resolutions."
        ],
        "whoShouldAvoid": [
          "Sole proprietorships registered at Ward offices (they don't file at OCR)."
        ]
      },
      "decisionScenario": {
        "title": "Pradeep's ROC Compliance: Filing by Poush End vs Delaying for 2 Years",
        "goal": "Managing the annual statutory compliance of an active IT private company.",
        "options": [
          {
            "option": "Option A: Ignore OCR filings for 2 years because the company had modest revenue",
            "verdict": "Severe Penalties & Inactive Status",
            "recommended": false,
            "rationale": "OCR automated system slaps progressive late fines exceeding NPR 40,000, freezes bank account operations, and blocks all shareholding transfers."
          },
          {
            "option": "Option B: Complete annual audit by Mangsir, hold the AGM, and upload Sections 51 and 80 by Poush end",
            "verdict": "100% Compliant & Recommended",
            "recommended": true,
            "rationale": "Zero penalty fines, maintains clean company records, keeps corporate banking lines open, and allows instant issuance of company status certificates."
          }
        ],
        "takeaway": "Incorporating a company is easy; keeping it compliant is what separates serious entrepreneurs from amateur businesses. File your ROC returns before Poush end every single year."
      },
      "faqs": [
        {
          "q": "What is the statutory deadline for holding the Annual General Meeting (AGM) and filing at OCR in Nepal?",
          "a": "Under the Companies Act 2063, a private limited company must hold its AGM and submit audited financial statements and shareholder records to the Office of the Company Registrar within 6 months of fiscal year-end (i.e. by Poush end / mid-January)."
        },
        {
          "q": "What are the key forms filed annually at the Office of the Company Registrar?",
          "a": "The mandatory annual filings include: Section 51 (Shareholding and capital status), Section 76 (AGM decisions and minutes), and Section 80 (Auditor's report and balance sheet)."
        }
      ]
    },
    "np": {
      "advantages": [
        "कम्पनी ऐन २०६३ अनुसार कम्पनी रजिष्ट्रारको कार्यालय (OCR) मा हरेक वर्ष बुझाउनुपर्ने कानुनी विवरणहरूको स्पष्ट जानकारी हुन्छ।",
        "दफा ५१ (सेयर लगत), दफा ७६ (साधारण सभाको निर्णय) र दफा ८० (लेखापरीक्षकको प्रतिवेदन) समयमै बुझाउन सकिन्छ।",
        "समय नाघेपछि महिना-महिनामा दोब्बर हुने कम्पनी रजिष्ट्रारको चर्को जरिवाना (Penalty) बाट कम्पनीलाई जोगाउँछ।",
        "कम्पनी रजिष्ट्रारको प्रणालीमा कम्पनी सधैँ 'सक्रिय' (Active) रहँदा बैंक खाता चल्ने, कर चुक्ता पाउने र सरकारी टेन्डर हाल्न सहज हुन्छ।"
      ],
      "limitations": [
        "आधिकारिक चार्टर्ड एकाउन्टेन्ट (CA) वा दर्तावाला लेखापरीक्षकबाट अडिट गराउनुपर्ने खर्च लाग्छ।",
        "आर्थिक वर्ष सकिएको ६ महिनाभित्र (पुस मसान्तभित्र) साधारण सभा गरी विवरण बुझाइसक्नुपर्छ।",
        "लगातार ३ वर्षसम्म विवरण नबुझाएमा कम्पनी खारेजीको प्रक्रियामा जान्छ र सञ्चालकहरूको अन्य कारोबार पनि रोकिन्छ।",
        "ढिला भएपछि लाग्ने जरिवाना कुनै पनि मन्त्री वा अधिकृतले मिनाहा गर्न सक्दैनन्।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "नेपालमा दर्ता भएका सम्पूर्ण प्राइभेट लिमिटेड कम्पनीका सञ्चालक (Directors) र सेयरधनीहरू।",
          "कम्पनीको कानुनी हैसियत सफा राख्न चाहने प्रबन्ध सञ्चालक तथा म्यानेजरहरू।",
          "वार्षिक साधारण सभा (AGM) को माइन्युट तयार गर्ने कम्पनी सचिवहरू।"
        ],
        "whoShouldAvoid": [
          "वडा कार्यालय वा घरेलुमा दर्ता भएका व्यक्तिगत एकलौटी फर्महरू (उनीहरूले कम्पनी रजिष्ट्रारमा विवरण बुझाउनु पर्दैन)।"
        ]
      },
      "decisionScenario": {
        "title": "प्रदीपको कम्पनी नवीकरण: पुस मसान्तभित्र विवरण बुझाउने कि २ वर्षसम्म बेवास्ता गर्ने?",
        "goal": "आफ्नो सफ्टवेयर कम्पनीलाई कुनै जरिवाना बिना कानुनी रूपमा पूर्ण चुस्त राख्नु।",
        "options": [
          {
            "option": "विकल्प क: कारोबार थोरै छ भन्दै २ वर्षसम्म कम्पनी रजिष्ट्रारमा विवरण नबुझाई बस्ने",
            "verdict": "हजारौँ जरिवाना र कम्पनी निष्क्रिय हुने",
            "recommended": false,
            "rationale": "कम्पनी रजिष्ट्रारको सफ्टवेयरले स्वतः दैनिक जरिवाना जोड्छ, २ वर्षमा जरिवाना नै रु. ४०,००० नाघ्छ, बैंक खाता रोक्का हुन सक्छ र सेयर बिक्री गर्न मिल्दैन।"
          },
          {
            "option": "विकल्प ख: मंसिरभित्र अडिट गराई पुस मसान्त अगावै साधारण सभाको माइन्युट र दफा ५१, ८० को विवरण अनलाइन अपलोड गर्ने",
            "verdict": "शून्य जरिवाना र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "कुनै पनि जरिवाना लाग्दैन, कम्पनी सधैँ सक्रिय रहन्छ, बैंकबाट ऋण लिन र कर चुक्ता प्रमाणपत्र निकाल्न कुनै बाधा पर्दैन।"
          }
        ],
        "takeaway": "कम्पनी दर्ता गर्नु सजिलो छ; तर हरेक वर्ष नियम अनुसार विवरण बुझाएर यसलाई जीवित राख्नु असल उद्यमीको पहिचान हो। हरेक वर्ष पुस मसान्तभित्र कम्पनी रजिष्ट्रारमा विवरण अनिवार्य बुझाउनुहोस्।"
      },
      "faqs": [
        {
          "q": "कम्पनी रजिष्ट्रारको कार्यालयमा वार्षिक साधारण सभाको विवरण बुझाउने अन्तिम म्याद कहिले हो?",
          "a": "कम्पनी ऐन २०६३ अनुसार आर्थिक वर्ष समाप्त भएको ६ महिनाभित्र (अर्थात् पुस मसान्तसम्म) प्राइभेट लिमिटेड कम्पनीले आफ्नो साधारण सभा सम्पन्न गरी लेखापरीक्षकको प्रतिवेदन र सेयर विवरण कम्पनी रजिष्ट्रारमा पेश गरिसक्नुपर्छ।"
        },
        {
          "q": "कम्पनी रजिष्ट्रारमा हरेक वर्ष बुझाउनुपर्ने मुख्य फारमहरू के-के हुन्?",
          "a": "मुख्य फारमहरूमा: दफा ५१ (सेयर लगत र पुँजीको अवस्था), दफा ७६ (वार्षिक साधारण सभाको निर्णय/माइन्युट) र दफा ८० (लेखापरीक्षकको प्रतिवेदन र वासलात) पर्दछन्।"
        }
      ]
    }
  },
  "hiring-ssf-labor-act-nepal": {
    "en": {
      "advantages": [
        "Demystifies mandatory Labor Act 2074 rules: minimum wage, provident fund, gratuity, and overtime entitlements.",
        "Explains the 31% Social Security Fund (SSF) contribution formula: 20% Employer contribution + 11% Employee deduction.",
        "Grants comprehensive employee protections (medical treatment, health insurance, accident disability, dependent family pension).",
        "Protects enterprise management from union disputes, labor department lawsuits, and severe non-compliance penalties."
      ],
      "limitations": [
        "The 20% employer SSF contribution increases the enterprise's gross cost-to-company (CTC) payroll burden.",
        "Employees on low salaries often resist the 11% deduction, desiring maximum cash in hand.",
        "Strict statutory termination guidelines: hiring on regular contracts requires formal due process before severance.",
        "Administrative overhead of running monthly SSF biometric portal payroll submissions."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Business owners, founders, and HR executives hiring formal employees in Nepal.",
          "Employees evaluating their total Cost-to-Company (CTC) vs take-home salary breakdown.",
          "Legal advisors structuring compliant employment contracts under the Labor Act."
        ],
        "whoShouldAvoid": [
          "Freelance independent contractors operating under commercial B2B consulting service contracts."
        ]
      },
      "decisionScenario": {
        "title": "Manish's Hiring Strategy: Paying Cash-in-Hand Off the Books vs Formal SSF Enrollment",
        "goal": "Hiring 5 permanent office staff at an agreed gross salary of NPR 35,000 each.",
        "options": [
          {
            "option": "Option A: Pay all salary in cash without formal contracts or SSF to 'save' the 20% employer contribution",
            "verdict": "Illegal & Catastrophic Liability Risk",
            "recommended": false,
            "rationale": "If an employee experiences a workplace accident, Manish is personally liable for all lifetime medical bills and compensation under the Labor Act, plus faces Labor Department fines."
          },
          {
            "option": "Option B: Structure compliant appointments: Register the enterprise at SSF, contribute 20% employer + 11% employee",
            "verdict": "100% Protected & Recommended",
            "recommended": true,
            "rationale": "Under SSF, the state fund fully absorbs all workplace accident liability, provides free medical and disability pensions, gives employees tax exemptions, and eliminates employer risk."
          }
        ],
        "takeaway": "The Labor Act is not optional in Nepal. Contributing 20% to the Social Security Fund is not an extra tax; it is enterprise insurance that transfers all employee accident and pension liabilities to the state."
      },
      "faqs": [
        {
          "q": "What is the mandatory contribution rate for the Social Security Fund (SSF) in Nepal?",
          "a": "The total contribution is 31% of the employee's basic salary: 20% contributed by the employer and 11% deducted from the employee's monthly pay."
        },
        {
          "q": "What is the official national minimum wage in Nepal?",
          "a": "Under the latest Ministry of Labor notifications, the national minimum gross wage for formal workers in Nepal is NPR 17,300 per month (Basic NPR 10,820 + Dearness Allowance NPR 6,480)."
        }
      ]
    },
    "np": {
      "advantages": [
        "श्रम ऐन २०७४ अनुसार न्यूनतम पारिश्रमिक, सञ्चय कोष, उपदान र अतिरिक्त काम (Overtime) को कानुनी नियम बुझिन्छ।",
        "सामाजिक सुरक्षा कोष (SSF) को ३१% योगदान सूत्र: रोजगारदाताले २०% र कर्मचारीको तलबबाट ११% कट्टा गर्ने नियम प्रष्ट हुन्छ।",
        "दुर्घटना बिमा, औषधि उपचार, सुत्केरी खर्च र आश्रित परिवार पेन्सनको सम्पूर्ण दायित्व कोषले नै व्यहोर्छ।",
        "श्रम कार्यालयको अनुगमन, कर्मचारी युनियनको विवाद र कानुनी मुद्दाको झन्झटबाट व्यवसाय सुरक्षित हुन्छ।"
      ],
      "limitations": [
        "रोजगारदाताले थप २०% रकम आफ्नै खर्चबाट हाल्नुपर्ने भएकाले कम्पनीको तलब खर्च (Payroll Cost) बढ्छ।",
        "थोरै तलब भएका कर्मचारीले आफ्नो हातमा आउने नगद घट्ने भन्दै ११% कटाउन नमान्न सक्छन्।",
        "स्थायी कर्मचारीलाई कामबाट निकाल्नुपरेमा श्रम ऐन अनुसारको लामो कानुनी प्रक्रिया पूरा गर्नैपर्छ।",
        "हरेक महिना अनलाइन पोर्टलमा गएर कर्मचारीको विवरण प्रविष्ट गरी रकम जम्मा गर्नुपर्ने प्रशासनिक समय लाग्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "कर्मचारी राखेर व्यवसाय चलाउने नेपालका सम्पूर्ण उद्यमी, कम्पनी सञ्चालक र HR म्यानेजरहरू।",
          "आफ्नो तलबमा काटिएको पैसा र रोजगारदाताले थपिदिने सुविधा बुझ्न चाहने जागिरेहरू।",
          "श्रम ऐन बमोजिम कानुनी रोजगार सम्झौता बनाउन चाहने सचेत नागरिक।"
        ],
        "whoShouldAvoid": [
          "आफ्नै फर्म नभएका र परियोजना अनुसार बाहिरबाट काम गर्ने स्वतन्त्र परामर्शदाता (Freelancers)।"
        ]
      },
      "decisionScenario": {
        "title": "मनिषको कर्मचारी भर्ना: नगदमा सम्झौता बिना राख्ने कि SSF मा दर्ता गर्ने?",
        "goal": "५ जना कर्मचारीलाई मासिक रु. ३५,००० तलबमा काममा राख्दा कानुनी सुरक्षा मिलाउनु।",
        "options": [
          {
            "option": "विकल्प क: २०% बचाउन कुनै लिखित सम्झौता नगरी नगदै तलब दिएर काममा लगाउने",
            "verdict": "गैरकानुनी र अत्यधिक व्यक्तिगत जोखिम",
            "recommended": false,
            "rationale": "यदि काम गर्दा कर्मचारी दुर्घटनामा पर्यो भने श्रम ऐन अनुसार उसको जीवनभरको उपचार र क्षतिपूर्ति मनिषले व्यक्तिगत सम्पत्ति बेचेर तिर्नुपर्छ र श्रम कार्यालयले कारबाही गर्छ।"
          },
          {
            "option": "विकल्प ख: आधिकारिक नियुक्ति पत्र दिने, SSF मा दर्ता गरी २०% कम्पनीले थपेर ११% तलबबाट कट्टी गर्ने",
            "verdict": "शतप्रतिशत कानुनी र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "दुर्घटना भएमा उपचार र पेन्सनको पुरै भार कोषले बोक्छ, कर्मचारीले १% सामाजिक सुरक्षा कर छुट पाउँछन् र मनिषको व्यवसाय सधैँ विवादमुक्त रहन्छ।"
          }
        ],
        "takeaway": "श्रम ऐन पालना गर्नु ऐच्छिक होइन, कानुनी बाध्यता हो। सामाजिक सुरक्षा कोषको २०% योगदान अतिरिक्त खर्च होइन; यसले कर्मचारीको दुर्घटना र उपदानको सम्पूर्ण जोखिम सरकारलाई सुम्पिन्छ।"
      },
      "faqs": [
        {
          "q": "नेपालमा सामाजिक सुरक्षा कोष (SSF) मा कति प्रतिशत रकम जम्मा गर्नुपर्छ?",
          "a": "कर्मचारीको आधारभूत तलबको कुल ३१% रकम जम्मा गर्नुपर्छ: जसमा रोजगारदाता (कम्पनी) ले २०% थपिदिनुपर्छ र कर्मचारीको तलबबाट ११% कट्टा गरिन्छ।"
        },
        {
          "q": "नेपालमा हाल कानुनी न्यूनतम पारिश्रमिक कति तोकिएको छ?",
          "a": "श्रम मन्त्रालयको पछिल्लो सूचना अनुसार नेपालमा श्रमिकहरूको न्यूनतम मासिक पारिश्रमिक रु. १७,३०० तोकिएको छ (जसमा आधारभूत तलब रु. १०,८२० र महँगी भत्ता रु. ६,४८० पर्दछ)।"
        }
      ]
    }
  },
  "nrb-monetary-policy-explained-nepal": {
    "en": {
      "advantages": [
        "Decodes the central bank's macroeconomic steering wheel: Policy Rate, Cash Reserve Ratio (CRR), and Statutory Liquidity Ratio (SLR).",
        "Enables anticipating interest rate trends 3 to 6 months in advance for smart borrowing and investment timing.",
        "Explains how NRB controls credit expansion to curb runaway inflation and preserve foreign exchange reserves.",
        "Directs personal finance strategies: when policy tightens, lock in high FD rates; when it loosens, borrow cheap."
      ],
      "limitations": [
        "Macroeconomic transmission takes 6 to 12 months to filter down to everyday consumer bank lending rates.",
        "External global oil prices and Indian inflation can blunt the effectiveness of domestic monetary tightening.",
        "Unexpected mid-term monetary policy reviews can suddenly restrict margin lending or real estate caps.",
        "Tight monetary policy dampens economic growth and causes cyclical NEPSE market downturns."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Business owners and corporate borrowers planning major capital expenditure timing.",
          "Secondary stock market investors and mutual fund allocators tracking systemic market cycles.",
          "Home loan borrowers deciding between fixed interest rates and floating base-rate loans."
        ],
        "whoShouldAvoid": [
          "Individuals who do not engage in any banking, borrowing, or investment transactions."
        ]
      },
      "decisionScenario": {
        "title": "Rajan's Loan Timing: Borrowing During Tight Monetary Policy vs Waiting for NRB Rate Cuts",
        "goal": "Financing an NPR 60,00,000 factory expansion when NRB has raised policy rates to 8.5% and bank Base Rates sit at 11%.",
        "options": [
          {
            "option": "Option A: Take a 14% floating rate loan immediately during the peak tightening phase",
            "verdict": "Heavy Interest Burden",
            "recommended": false,
            "rationale": "High interest drains cash flow immediately, making the factory expansion financially stressed before operations even begin."
          },
          {
            "option": "Option B: Delay major borrowing by 6-9 months until inflation cools and NRB signals policy rate cuts and liquidity injections",
            "verdict": "Cost-Effective & Recommended",
            "recommended": true,
            "rationale": "As NRB cuts rates, banking liquidity expands, Base Rates decline toward 7-8%, saving Rajan over NPR 3,00,000 in annual interest costs."
          }
        ],
        "takeaway": "Never fight the central bank. When Nepal Rastra Bank tightens money supply, save and de-leverage; when it loosens and injects liquidity, expand and invest."
      },
      "faqs": [
        {
          "q": "What is the Cash Reserve Ratio (CRR) in Nepal and how does it affect me?",
          "a": "CRR is the mandatory percentage of total deposits (currently 4.0%) that commercial banks must hold in cash reserves at Nepal Rastra Bank. A lower CRR releases liquidity into the banking system, lowering loan interest rates."
        },
        {
          "q": "When does Nepal Rastra Bank announce its annual Monetary Policy?",
          "a": "NRB announces the annual Monetary Policy (मौद्रिक नीति) in the month of Shrawan (July/August), shortly after the presentation of the Federal Budget on Jestha 15."
        }
      ]
    },
    "np": {
      "advantages": [
        "नेपाल राष्ट्र बैंकको मौद्रिक नीतिका मुख्य हतियारहरू: नीतिगत दर (Policy Rate), CRR र SLR ले बजारमा पार्ने प्रभाव बुझिन्छ।",
        "बैंकहरूको ब्याजदर आगामी ३ देखि ६ महिनामा बढ्छ कि घट्छ भन्ने पूर्वअनुमान गरी ऋण लिने वा मुद्दती राख्ने सही समय छान्न सकिन्छ।",
        "राष्ट्र बैंकले महँगी नियन्त्रण गर्न र विदेशी मुद्रा सञ्चिति जोगाउन बजारको तरलता कसरी चलाउँछ भन्ने तथ्य प्रष्ट हुन्छ।",
        "नीति कडा हुँदा मुद्दतीमा बढी ब्याज खान पाइने र नीति खुकुलो हुँदा सस्तो ब्याजमा घरकर्जा पाइने रणनीति बनाउन सकिन्छ।"
      ],
      "limitations": [
        "राष्ट्र बैंकले दर परिवर्तन गरेपछि सर्वसाधारणको बैंक खातामा त्यसको असर देखिन ६ महिनादेखि १ वर्षसम्म लाग्न सक्छ।",
        "अन्तर्राष्ट्रिय बजारमा इन्धनको भाउ बढ्दा वा भारतमा महँगी बढ्दा मौद्रिक नीतिले मात्र नेपालको महँगी रोक्न गाह्रो हुन्छ।",
        "त्रैमासिक समीक्षामा राष्ट्र बैंकले सेयर कर्जा वा घरजग्गाको सीमा अचानक फेरिदिएमा बजारमा ठूलो उतारचढाव आउन सक्छ।",
        "कडा मौद्रिक नीतिले बजारमा आर्थिक मन्दी ल्याउने र सेयर बजारलाई ओरालो लगाउने जोखिम हुन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "ठूलो ऋण लिएर व्यवसाय विस्तार गर्ने सोचमा रहेका उद्योगी तथा व्यापारीहरू।",
          "नेप्सेको उतारचढाव र बजारको चक्रीय अवस्था बुझेर सेयर किन्ने लगानीकर्ताहरू।",
          "घरकर्जा लिँदा स्थिर ब्याजदर छान्ने कि घट्दो आधार दर छान्ने भनी निर्णय गर्न चाहनेहरू।"
        ],
        "whoShouldAvoid": [
          "कुनै पनि बैंक कर्जा वा लगानी नभएका सामान्य नागरिक।"
        ]
      },
      "decisionScenario": {
        "title": "राजनको ऋण लिने समय: कडा मौद्रिक नीतिमा ऋण काढ्ने कि राष्ट्र बैंकले दर घटाउने बेला पर्खने?",
        "goal": "रु. ६० लाख ऋण लिएर उद्योग विस्तार गर्दा ब्याज खर्चलाई न्यूनतम बनाउनु।",
        "options": [
          {
            "option": "विकल्प क: राष्ट्र बैंकले ब्याजदर बढाएको र बैंकको आधार दर ११% पुगेको बेला तुरुन्तै १४% मा ऋण लिने",
            "verdict": "अत्यधिक महँगो ब्याजको भार",
            "recommended": false,
            "rationale": "सुरुवातमै चर्को किस्ता तिर्नुपर्ने भएकाले उद्योग सञ्चालन हुनु अगावै नगद अभाव भएर व्यवसाय संकटमा पर्न सक्छ।"
          },
          {
            "option": "विकल्प ख: महँगी घट्न थालेको संकेत हेरी ६-९ महिना पर्खने र राष्ट्र बैंकले नीतिगत दर घटाएपछि सस्तोमा ऋण लिने",
            "verdict": "लाखौँ बचत हुने उत्तम निर्णय",
            "recommended": true,
            "rationale": "बजारमा तरलता थपिँदा बैंकहरूको आधार दर घटेर ७-८% मा झर्छ, जसले गर्दा राजनको वार्षिक रु. ३ लाखभन्दा बढी ब्याज खर्च बचत हुन्छ।"
          }
        ],
        "takeaway": "केन्द्रीय बैंकको नीतिको विपरित कहिल्यै नजानुहोस्। जब राष्ट्र बैंकले मौद्रिक नीति कडा बनाउँछ, बचत गर्नुहोस् र ऋण घटाउनुहोस्; जब नीति खुकुलो हुन्छ, सस्तो ऋण लिएर व्यवसाय विस्तार गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालमा अनिवार्य नगद मौज्दात (CRR) भनेको के हो र यसले मलाई के असर गर्छ?",
          "a": "CRR भनेको वाणिज्य बैंकहरूले आफ्नो कुल निक्षेपको निश्चित प्रतिशत (हाल ४%) रकम राष्ट्र बैंकमा नगदै राख्नुपर्ने नियम हो। CRR घट्दा बैंकहरूसँग कर्जा दिन बढी पैसा हुन्छ, जसले ब्याजदर सस्तो बनाउँछ।"
        },
        {
          "q": "नेपाल राष्ट्र बैंकले मौद्रिक नीति कहिले सार्वजनिक गर्दछ?",
          "a": "नेपाल राष्ट्र बैंकले जेठ १५ मा संघीय बजेट आएपछि त्यसलाई सहयोग पुग्ने गरी हरेक वर्षको साउन महिनामा आगामी आर्थिक वर्षको मौद्रिक नीति औपचारिक रूपमा सार्वजनिक गर्दछ।"
        }
      ]
    }
  },
  "cd-ratio-liquidity-crisis-nepal": {
    "en": {
      "advantages": [
        "Mastering the Credit-to-Deposit (CD) Ratio regulatory limit (mandated at a maximum of 90% by NRB).",
        "Explains why bank lending freezes suddenly when banking system CD ratios approach or breach the 90% ceiling.",
        "Anticipates fixed deposit rate wars: when banks lack liquidity, deposit interest rates spike dramatically to 11-13%.",
        "Protects borrowers by planning loan drawdowns and credit lines well ahead of cyclical liquidity winter cycles."
      ],
      "limitations": [
        "Individual depositors and small businesses have zero control over macro banking system liquidity trends.",
        "During peak liquidity crunches, banks refuse even fully collateralized, low-risk loan applications.",
        "High CD ratios compress bank net interest margins (NIM), impacting commercial bank quarterly profitability.",
        "Liquidity crises in Nepal are heavily driven by government spending delays and import bill spikes."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Business owners reliant on bank working capital credit limits and overdraft facilities.",
          "Home loan and mortgage borrowers scheduling property construction payments.",
          "Savers looking to lock in peak multi-year fixed deposit interest rates during liquidity squeezes."
        ],
        "whoShouldAvoid": [
          "Individuals with zero bank debt or large cash surpluses."
        ]
      },
      "decisionScenario": {
        "title": "Santosh's Loan Sanction: Applying When System CD Ratio is 89.5% vs 84%",
        "goal": "Securing an NPR 1 Crore commercial working capital line for his manufacturing plant.",
        "options": [
          {
            "option": "Option A: Apply when the banking system CD ratio is at 89.8% near the regulatory ceiling",
            "verdict": "High Rejection & Predatory Rates",
            "recommended": false,
            "rationale": "Banks have zero lending headroom under NRB rules. They will either reject the loan outright or demand maximum premium spreads exceeding 14-15%."
          },
          {
            "option": "Option B: Apply when system CD ratio cools down to 84-85% due to government fiscal spending or remittance inflows",
            "verdict": "Smooth Approval & Recommended",
            "recommended": true,
            "rationale": "Banks have surplus loanable funds, compete aggressively for quality corporate borrowers, and offer competitive premium spreads at lower base rates."
          }
        ],
        "takeaway": "The CD ratio is the banking system's fuel gauge. When it is near 90%, banks are out of gas and loans freeze; when it drops to 80-84%, money is abundant and cheap."
      },
      "faqs": [
        {
          "q": "What is the maximum statutory CD Ratio allowed in Nepal?",
          "a": "Under Nepal Rastra Bank directives, licensed commercial banks and financial institutions must maintain their Credit-to-Deposit (CD) ratio within a mandatory regulatory ceiling of 90.0%."
        },
        {
          "q": "Why does the banking system in Nepal face frequent liquidity crunches?",
          "a": "Key drivers include slow government capital budget spending (which locks treasury cash at NRB), high import expenditure draining foreign reserves, and seasonal surges in private credit demand."
        }
      ]
    },
    "np": {
      "advantages": [
        "कर्जा-निक्षेप अनुपात (CD Ratio) को राष्ट्र बैंकको अधिकतम ९०% को कानुनी सीमा बुझ्न सकिन्छ।",
        "बैंकहरूको CD रेसियो ९०% नजिक पुग्दा बजारमा कर्जा प्रवाह किन अचानक रोकिन्छ (Liquidity Freeze) भन्ने रहस्य थाहा हुन्छ।",
        "बजारमा तरलता अभाव हुँदा बैंकहरूबीच निक्षेप तान्न होडबाजी चल्छ, जसको फाइदा उठाएर मुद्दतीमा ११-१२% सम्म उच्च ब्याज सुरक्षित गर्न सकिन्छ।",
        "व्यापारीहरूले आफ्नो चालु पुँजी कर्जा र ओभरड्राफ्ट नवीकरण समयमै मिलाएर संकटबाट जोगिन सक्छन्।"
      ],
      "limitations": [
        "समग्र बैंकिङ प्रणालीको तरलतामा व्यक्तिगत बचतकर्ता वा साना व्यवसायीको कुनै नियन्त्रण हुँदैन।",
        "तरलता संकटको समयमा जग्गाको राम्रो धितो हुँदाहुँदै पनि बैंकहरूले नयाँ ऋण दिन मान्दैनन्।",
        "उच्च CD रेसियोले बैंकहरूको नाफा घटाउने हुँदा सेयर बजारमा बैंकहरूको सेयर मूल्य घट्न सक्छ।",
        "सरकारले समयमै विकास बजेट खर्च नगर्दा र आयात बढ्दा नेपालमा तरलता संकट दोहोरिरहन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "बैंकको ओभरड्राफ्ट र चालु पुँजी कर्जाको भरमा व्यापार चलाइरहेका सम्पूर्ण उद्योगी तथा व्यवसायी।",
          "घर निर्माणका लागि विभिन्न चरणमा बैंकबाट पैसा निकाल्नुपर्ने घरकर्जाका ग्राहकहरू।",
          "मुद्दती निक्षेपमा सबैभन्दा उच्च ब्याज कहिले पाइन्छ भनी पर्खिरहेका बचतकर्ताहरू।"
        ],
        "whoShouldAvoid": [
          "बैंकबाट कुनै कर्जा नलिएका र दैनिक सामान्य कारोबार मात्र गर्ने व्यक्तिहरू।"
        ]
      },
      "decisionScenario": {
        "title": "सन्तोषको कर्जा माग: बैंकिङ प्रणालीको CD रेसियो ८९.८% पुगेको बेला माग्ने कि ८४% मा?",
        "goal": "आफ्नो उद्योगका लागि रु. १ करोडको चालु पुँजी कर्जा सस्तो ब्याजदरमा सुरक्षित गर्नु।",
        "options": [
          {
            "option": "विकल्प क: बैंकहरूको CD रेसियो ९०% को सीमामा पुगेर तरलता हाहाकार भएको बेला आवेदन दिने",
            "verdict": "अस्वीकृत हुने वा निकै महँगो पर्ने",
            "recommended": false,
            "rationale": "राष्ट्र बैंकको नियमले बैंकलाई थप ऋण दिनै दिँदैन। बैंकले कि ऋण अस्वीकृत गर्छ कि १५% भन्दा बढी महँगो ब्याजदर तोकिदिन्छ।"
          },
          {
            "option": "विकल्प ख: सरकारले बजेट खर्च गरेर वा रेमिट्यान्स बढेर CD रेसियो ८४-८५% मा झरेको बेला आवेदन दिने",
            "verdict": "सजिलै स्वीकृत हुने र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "बैंकहरूमा कर्जा दिन पैसा थुप्रिएको हुन्छ, राम्रा ग्राहक तान्न बैंकहरूबीच प्रतिस्पर्धा हुन्छ र सस्तो आधार दरमा सहजै कर्जा स्वीकृत हुन्छ।"
          }
        ],
        "takeaway": "CD रेसियो भनेको बैंकिङ प्रणालीको इन्धन नाप्ने मिटर हो। जब यो ९०% पुग्छ, बैंकसँग ऋण दिने पैसा सकिन्छ; जब यो ८०-८४% मा झर्छ, ऋण पाउन सबैभन्दा सजिलो र सस्तो हुन्छ।"
      },
      "faqs": [
        {
          "q": "नेपाल राष्ट्र बैंकले तोकेको अधिकतम CD रेसियोको सीमा कति हो?",
          "a": "नेपाल राष्ट्र बैंकको एकीकृत निर्देशन अनुसार इजाजत प्राप्त बैंक तथा वित्तीय संस्थाहरूले आफ्नो कुल कर्जा र निक्षेपको अनुपात (CD Ratio) अधिकतम ९०.००% भित्र अनिवार्य कायम राख्नुपर्छ।"
        },
        {
          "q": "नेपालमा बेलाबेलामा बैंकहरूमा तरलता अभाव (पैसाको अभाव) किन हुन्छ?",
          "a": "सरकारले पुँजीगत बजेट समयमै खर्च नगरी राष्ट्र बैंकको खातामा पैसा थन्क्याउनु, विदेशबाट सामान आयात गर्दा ठूलो रकम बाहिरिनु र निक्षेपको तुलनामा कर्जाको माग ह्वात्तै बढ्नु यसका मुख्य कारण हुन्।"
        }
      ]
    }
  },
  "remittance-nepal-economic-lifeline": {
    "en": {
      "advantages": [
        "Explains how foreign remittance represents nearly 25-30% of Nepal's GDP, anchoring the country's sovereign balance of payments.",
        "Guarantees a minimum 1.0% interest rate premium on remittance bank deposit accounts under NRB circulars.",
        "Unlocks the mandatory 10% reserved public IPO quota for Nepalis working abroad with labor permits.",
        "Transforms consumer remittance flows into productive wealth compounding via formal banking and capital market channels."
      ],
      "limitations": [
        "Heavy national dependence on remittance creates severe vulnerability to Gulf/Malaysia economic downturns or geopolitical shocks.",
        "Brain drain and local agricultural/industrial labor shortages holding back domestic manufacturing growth.",
        "Over 70-80% of remittance inflows are consumed by short-term food, electronics, and clothing imports rather than capital assets.",
        "Illegal Hundi (informal hawala) operators exploit migrants, risking total capital theft and legal prosecution."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Nepalis working in the Gulf, Malaysia, Korea, Europe, and worldwide remitting money home.",
          "Families receiving monthly foreign remittances wanting to transition from spending to compounding wealth.",
          "Anyone analyzing Nepal's macroeconomic foreign exchange reserves and national liquidity."
        ],
        "whoShouldAvoid": [
          "Individuals remitting via illegal informal Hundi channels (subject to Foreign Exchange Act criminal penalties)."
        ]
      },
      "decisionScenario": {
        "title": "Ramesh's Foreign Remittance: Using Informal Hundi for +NPR 1.5 Rate vs Formal Banking Channels",
        "goal": "Remitting NPR 100,000 equivalent from Qatar to his family in Jhapa.",
        "options": [
          {
            "option": "Option A: Use an unlicensed informal Hundi agent promising a slightly higher exchange rate (+NPR 1.5)",
            "verdict": "Illegal & High Risk of Confiscation",
            "recommended": false,
            "rationale": "Violates Foreign Exchange Regulation Act 2019. If the Hundi ring is raided, Ramesh's family loses the entire NPR 100,000, faces police questioning, and receives zero government benefits."
          },
          {
            "option": "Option B: Transfer via licensed banking/remittance partner directly into a verified Remittance Savings Account",
            "verdict": "100% Legal & Recommended",
            "recommended": true,
            "rationale": "100% safe, secures the extra 1% bank interest bonus, qualifies for the 10% reserved MeroShare IPO quota, and builds formal banking credit history in Nepal."
          }
        ],
        "takeaway": "Never risk your hard-earned sweat money for a tiny Hundi spread. Remit through formal banking channels to claim your 1% interest bonus and exclusive 10% IPO quota."
      },
      "faqs": [
        {
          "q": "What is the reserved IPO quota for Nepalis in foreign employment?",
          "a": "Under SEBON regulations, all corporate entities issuing public IPOs must reserve exactly 10% of their total general public shares exclusively for Nepali citizens working abroad with valid government labor permits."
        },
        {
          "q": "Why is remitting money via Hundi illegal in Nepal?",
          "a": "Hundi operates outside the formal banking system, bypasses national foreign exchange reserves, enables black money laundering and tax evasion, and carries harsh criminal penalties under the Foreign Exchange Regulation Act 2019."
        }
      ]
    },
    "np": {
      "advantages": [
        "विप्रेषण (Remittance) ले नेपालको कुल गार्हस्थ उत्पादन (GDP) को करिब २५-३०% हिस्सा ओगट्दै देशको विदेशी मुद्रा सञ्चिति धान्छ।",
        "वैधानिक माध्यमबाट रेमिट्यान्स पठाउँदा बैंक खातामा साधारणभन्दा कम्तीमा १% अतिरिक्त ब्याज पाउने कानुनी सुविधा छ।",
        "श्रम स्वीकृति लिएर विदेशमा काम गर्ने नेपालीका लागि प्राथमिक सेयर (IPO) मा १०% छुट्टै आरक्षित कोटाको कानुनी अधिकार छ।",
        "विदेशको कमाइलाई क्षणिक विलासितामा खेर जान नदिई सेयर, म्युचुअल फन्ड र मुद्दतीमा लगानी गरी भविष्य सुरक्षित गर्न सकिन्छ।"
      ],
      "limitations": [
        "अर्थतन्त्र रेमिट्यान्समा अत्यधिक निर्भर हुँदा खाडी वा मलेसियामा संकट आउनासाथ नेपालको अर्थतन्त्र जोखिममा पर्छ।",
        "गाउँघरमा युवा जनशक्ति अभाव भई खेतीयोग्य जमिन बाँझो रहने र घरेलु उद्योगहरू संकटमा पर्ने समस्या छ।",
        "भित्रिएको रेमिट्यान्सको ७०-८०% हिस्सा उत्पादनमूलक काममा नभई आयातित सामान, कपडा र खानपानमै सकिन्छ।",
        "हुन्डीको प्रलोभनमा पर्दा पसिनाको कमाइ डुब्ने र प्रहरी प्रशासनको कानुनी कारबाहीमा पर्ने जोखिम हुन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "खाडी, मलेसिया, कोरिया, जापान, युरोप लगायत संसारभर श्रम गरिरहेका नेपाली श्रमिक दाजुभाइ दिदीबहिनीहरू।",
          "विदेशबाट आएको पैसा बुझ्ने र त्यसलाई सुरक्षित रूपमा व्यवस्थापन गर्न चाहने नेपालका परिवारजन।",
          "नेपालको अर्थतन्त्र, डलर सञ्चिति र तरलताको सम्बन्ध बुझ्न चाहने विद्यार्थी तथा लगानीकर्ता।"
        ],
        "whoShouldAvoid": [
          "अवैध हुन्डीको माध्यमबाट पैसा ओसारपसार गर्न खोज्नेहरू (जुन विदेशी विनिमय कानुन अनुसार गम्भीर अपराध हो)।"
        ]
      },
      "decisionScenario": {
        "title": "रमेशको विदेशको कमाइ: हुन्डीमा १.५ रुपैयाँ बढी पाउने लोभ गर्ने कि बैंकबाट पठाउने?",
        "goal": "कतारबाट रु. १ लाख बराबरको कमाइ झापामा रहेकी आमालाई सुरक्षित पठाउनु।",
        "options": [
          {
            "option": "विकल्प क: हुन्डीवालाले दर अलि बढी दिन्छु भन्दैमा अवैध हुन्डीबाट पैसा पठाउने",
            "verdict": "गैरकानुनी र जोखिमपूर्ण",
            "recommended": false,
            "rationale": "विदेशी विनिमय ऐन अनुसार हुन्डी गम्भीर अपराध हो। हुन्डीवाला समातिएमा पसिनाको पुरै १ लाख रुपैयाँ जफत हुन्छ र प्रहरीले कारबाही गर्छ।"
          },
          {
            "option": "विकल्प ख: इजाजत प्राप्त रेमिट वा बैंकमार्फत सोझै आमाको रेमिट्यान्स खातामा पठाउने",
            "verdict": "शतप्रतिशत सुरक्षित र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "पैसा सुरक्षित पुग्छ, बैंकले थप १% ब्याज दिन्छ, मेरोसेयरबाट १०% आरक्षित कोटामा हाइड्रोपावरको IPO पर्ने पक्का जस्तै हुन्छ र देशको डलर सञ्चिति बढ्छ।"
          }
        ],
        "takeaway": "विदेशी मुद्राको सानो लोभमा परेर आफ्नो रगत-पसिनाको कमाइ जोखिममा नपार्नुहोस्। वैधानिक बैंकिङ च्यानल प्रयोग गर्नुहोस् र १% थप ब्याज तथा १०% IPO कोटाको फाइदा लिनुहोस्।"
      },
      "faqs": [
        {
          "q": "वैदेशिक रोजगारीमा रहेका नेपालीका लागि IPO मा के सुविधा छ?",
          "a": "धितोपत्र बोर्डको नियम अनुसार नेपालमा निष्कासन हुने प्रत्येक साधारण सेयर (IPO) मा १०% सेयर अनिवार्य रूपमा श्रम स्वीकृति लिएर वैदेशिक रोजगारीमा रहेका नेपाली नागरिकहरूका लागि आरक्षित गरिएको हुन्छ।"
        },
        {
          "q": "नेपालमा हुन्डी किन गैरकानुनी मानिन्छ?",
          "a": "हुन्डीले देशको औपचारिक बैंकिङ च्यानललाई बाइपास गर्छ, राष्ट्र बैंकमा विदेशी मुद्रा जम्मा हुन दिँदैन, कालोधन र कर छलीलाई बढावा दिन्छ। त्यसैले विदेशी विनिमय नियमित गर्ने ऐन अनुसार हुन्डी गर्नु गम्भीर दण्डनीय अपराध हो।"
        }
      ]
    }
  },
  "inr-npr-currency-peg-inflation": {
    "en": {
      "advantages": [
        "Explains the fixed sovereign peg: 100 Indian Rupees (INR) = 160 Nepali Rupees (NPR) established since 1993.",
        "Provides unmatched exchange rate stability for cross-border bilateral trade, medicine, and petroleum imports from India.",
        "Prevents speculative currency attacks on the Nepali Rupee during regional emerging market crises.",
        "Clarifies imported inflation dynamics: when Indian consumer prices rise, Nepali commodity prices automatically surge."
      ],
      "limitations": [
        "Nepal surrenders sovereign control over domestic monetary autonomy; NRB must shadow Reserve Bank of India (RBI) interest rate cycles.",
        "Imported inflation: Nepal cannot insulate domestic food and fuel prices from Indian price shocks.",
        "Requires massive Indian Rupee reserves to defend the 1.60 peg, draining convertible currency reserves.",
        "An artificial peg during prolonged productivity divergence can create trade imbalances and balance of payments stress."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Importers and traders sourcing raw materials, machinery, and consumer staples from India.",
          "Macro investors analyzing the structural driver of inflation and interest rates in Nepal.",
          "Anyone wanting to understand why Nepal Rastra Bank closely follows the Reserve Bank of India."
        ],
        "whoShouldAvoid": [
          "Tourists making small casual cash conversions at the border."
        ]
      },
      "decisionScenario": {
        "title": "Hari's Inflation Outlook: Forecasting Food Inflation in Nepal based on RBI Monetary Action",
        "goal": "Planning commodity inventory purchases for his wholesale business over the next 6 months.",
        "options": [
          {
            "option": "Option A: Ignore Indian inflation trends and assume Nepal's prices depend strictly on local politics",
            "verdict": "Blind to Economic Reality",
            "recommended": false,
            "rationale": "Over 60% of Nepal's imports come from India under the 1.60 peg; ignoring Indian food and fuel price hikes leads to stockout losses and mispriced inventory."
          },
          {
            "option": "Option B: Monitor Reserve Bank of India (RBI) CPI inflation and policy rate signals to forecast Nepali prices",
            "verdict": "Economically Grounded & Recommended",
            "recommended": true,
            "rationale": "Because the peg imports Indian inflation directly, tracking RBI actions gives Hari an accurate 3-month predictive window to manage inventory and lock in favorable prices."
          }
        ],
        "takeaway": "Because of the 1:1.60 currency peg, Nepal imports India's inflation alongside its goods. To understand where Nepali interest rates and prices are heading, always watch the Reserve Bank of India."
      },
      "faqs": [
        {
          "q": "What is the fixed exchange peg between Nepali Rupee and Indian Rupee?",
          "a": "Since 1993, the exchange rate has been officially pegged by treaty at 100 Indian Rupees (INR) = 160 Nepali Rupees (NPR) (or 1 INR = 1.60 NPR)."
        },
        {
          "q": "Why doesn't Nepal float the Rupee against the Indian Rupee?",
          "a": "Floating the currency would introduce massive exchange rate volatility for food, fuel, and cross-border trade (which accounts for over 65% of Nepal's total trade), risking hyperinflation and business disruption."
        }
      ]
    },
    "np": {
      "advantages": [
        "नेपाली रुपैयाँ र भारतीय रुपैयाँ बीचको स्थिर विनिमय दर (१०० भारु = १६० नेरु) को ऐतिहासिक र आर्थिक कारण बुझिन्छ।",
        "भारतबाट हुने खाद्यान्न, औषधि र पेट्रोलियम पदार्थको आयातमा विनिमय दरको उतारचढाव नभई व्यापार स्थिर रहन्छ।",
        "अन्तर्राष्ट्रिय बजारमा डलर महँगो हुँदा पनि स्थिर विनिमय दरका कारण नेपाली रुपैयाँमा अचानक ठूलो पहिरो जानबाट जोगिन्छ।",
        "भारतमा महँगी बढ्दा नेपालमा कसरी स्वतः महँगी भित्रिन्छ (Imported Inflation) भन्ने अर्थशास्त्रीय चक्र प्रष्ट हुन्छ।"
      ],
      "limitations": [
        "स्थिर दर कायम राख्नुपर्ने भएकाले नेपाल राष्ट्र बैंकले भारतीय केन्द्रीय बैंक (RBI) को ब्याजदर र नीतिलाई पछ्याउनैपर्छ।",
        "भारतमा प्याज, चामल वा तेलको भाउ बढ्दा नेपालमा स्वतः भाउ बढ्छ, जसलाई नेपाल सरकारले चाहेर पनि रोक्न सक्दैन।",
        "१०० भारु बराबर १६० नेरुको दर जोगाइराख्न राष्ट्र बैंकले डलर बेचेर ठूलो परिमाणमा भारु सञ्चिति राखिरहनुपर्छ।",
        "नेपालको उत्पादन क्षमता कमजोर हुँदा भारतसँगको व्यापार घाटा हरेक वर्ष चुलिँदै जान्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "भारतबाट कच्चा पदार्थ, गाडी र दैनिक उपभोग्य सामान आयात गर्ने सम्पूर्ण नेपाली व्यवसायीहरू।",
          "नेपालमा महँगी र ब्याजदर किन बढिरहेको छ भनी गहिरो अध्ययन गर्न चाहने लगानीकर्ताहरू।",
          "नेपाल र भारत बीचको आर्थिक र मौद्रिक सम्बन्ध बुझ्न चाहने जो-कोही।"
        ],
        "whoShouldAvoid": [
          "सीमा क्षेत्रमा सामान्य व्यक्तिगत किनमेल मात्र गर्ने खुद्रा उपभोक्ताहरू।"
        ]
      },
      "decisionScenario": {
        "title": "हरिको व्यापार पूर्वानुमान: नेपालको महँगी बुझ्न नेपालको राजनीति हेर्ने कि भारतको बजार?",
        "goal": "आगामी ६ महिनाका लागि आफ्नो खाद्यान्न थोक व्यापारमा सामानको मूल्य र मौज्दात सही अनुमान गर्नु।",
        "options": [
          {
            "option": "विकल्प क: नेपालको स्थानीय राजनीति मात्र हेरेर सामानको भाउ निर्धारण गर्ने",
            "verdict": "आर्थिक यथार्थबाट विमुख",
            "recommended": false,
            "rationale": "नेपालको ६५% भन्दा बढी व्यापार भारतसँग निर्भर छ। भारतमा खाद्यान्नको मूल्यवृद्धि र नीति नहेर्दा घाटामा सामान बेच्नुपर्ने हुन सक्छ।"
          },
          {
            "option": "विकल्प ख: भारतीय केन्द्रीय बैंक (RBI) को मुद्रास्फीति दर र भारत सरकारको निर्यात नीति अध्ययन गर्ने",
            "verdict": "दूरदर्शी र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "स्थिर विनिमय दरका कारण भारतको मूल्यवृद्धि सिधै नेपाल भित्रिने हुँदा हरिले ३ महिना अगावै मूल्यको सही अनुमान गरी सस्तोमा सामान मौज्दात गर्न सक्छन्।"
          }
        ],
        "takeaway": "स्थिर विनिमय दर (१०० भारु = १६० नेरु) का कारण नेपालले सामानसँगै भारतको महँगी पनि आयात गर्छ। नेपालको ब्याजदर र बजार भाउ बुझ्न भारतीय केन्द्रीय बैंकका कदमहरूमा सधैँ नजर राख्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपाली र भारतीय रुपैयाँ बीचको स्थिर विनिमय दर कहिलेदेखि कायम छ?",
          "a": "नेपाल र भारतबीच सन् १९९३ (वि.सं. २०४९) देखि १०० भारतीय रुपैयाँ बराबर १६० नेपाली रुपैयाँ (१ भारु = १.६० नेरु) को स्थिर विनिमय दर (Pegged Exchange Rate) आधिकारिक रूपमा कायम रहँदै आएको छ।"
        },
        {
          "q": "नेपालले भारतीय रुपैयाँसँगको स्थिर विनिमय दर हटाएर खुला बजार दर किन बनाउँदैन?",
          "a": "यदि दर खुला छाडियो भने नेपालको ठूलो व्यापार घाटाका कारण नेपाली रुपैयाँ निरन्तर कमजोर भई भारतबाट आउने इन्धन र खाद्यान्न अत्यधिक महँगो हुन पुग्छ, जसले देशमा अनियन्त्रित महँगी निम्त्याउने जोखिम हुन्छ।"
        }
      ]
    }
  },
  "decoding-nepal-federal-budget-jestha-15": {
    "en": {
      "advantages": [
        "Constitutional literacy: Article 119 of the Constitution of Nepal mandates budget presentation on Jestha 15 every year.",
        "Decodes the three budget pillars: Recurrent Expenditure (चालु खर्च), Capital Expenditure (पुँजीगत खर्च), and Financial Management (वित्तीय व्यवस्था).",
        "Identifies new tax slab amendments, customs tariff revisions, and infrastructure allocations before they take effect on Shrawan 1.",
        "Guides sector-specific stock market investing: identifying which sectors receive tax incentives or budget subsidies."
      ],
      "limitations": [
        "Chronic low capital expenditure execution: ministries rarely spend more than 50-60% of allocated infrastructure funds.",
        "Heavy reliance on domestic and foreign borrowing to plug the massive fiscal deficit.",
        "Ambitious revenue targets often fall short, forcing mid-term budget size downsizing in Magh/Falgun.",
        "Political instability and coalition horse-trading can lead to pork-barrel allocations rather than productive investments."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Business owners, importers, and manufacturers tracking excise, customs, and corporate tax revisions.",
          "Stock market investors re-evaluating sector allocations based on fiscal incentives (EVs, Hydropower, IT exports).",
          "Every taxpayer wanting to know how public revenue is raised and spent."
        ],
        "whoShouldAvoid": [
          "Individuals with zero interest in national economics, taxation, or fiscal policies."
        ]
      },
      "decisionScenario": {
        "title": "Devendra's Vehicle Import: Buying Immediately in Baisakh vs Waiting for the Jestha 15 Budget Speech",
        "goal": "Purchasing a commercial delivery van when rumors suggest customs tax hikes on vehicle imports.",
        "options": [
          {
            "option": "Option A: Wait until Shrawan assuming government policies never change",
            "verdict": "High Risk of Price Spikes",
            "recommended": false,
            "rationale": "If the Finance Minister increases customs or excise duty in the Jestha 15 budget speech, vehicle prices jump overnight on the next morning."
          },
          {
            "option": "Option B: Analyze the Finance Ministry's pre-budget economic survey and consult auto-dealer industry forecasts before Baisakh end",
            "verdict": "Strategic & Recommended",
            "recommended": true,
            "rationale": "Allows Devendra to execute the purchase before Jestha 15 if tariff hikes are anticipated, saving lakhs in tax increases."
          }
        ],
        "takeaway": "The Jestha 15 Federal Budget changes the rules of the economic game overnight. Read the Finance Bill to spot tax changes before they hit your personal wallet on Shrawan 1."
      },
      "faqs": [
        {
          "q": "Why is the Federal Budget always presented on Jestha 15 in Nepal?",
          "a": "Article 119, Clause 3 of the Constitution of Nepal 2072 explicitly mandates that the Finance Minister must present the annual budget estimates to the Federal Parliament on Jestha 15 of the Bikram Sambat calendar."
        },
        {
          "q": "What is the difference between Recurrent Expenditure and Capital Expenditure in Nepal's budget?",
          "a": "Recurrent Expenditure (चालु खर्च) funds everyday administrative operations like government salaries, pensions, and office running costs. Capital Expenditure (पुँजीगत खर्च) builds long-term physical assets like roads, bridges, transmission lines, and airports."
        }
      ]
    },
    "np": {
      "advantages": [
        "संवैधानिक स्पष्टता: नेपालको संविधानको धारा ११९ अनुसार हरेक वर्ष जेठ १५ गते संघीय संसद्मा बजेट प्रस्तुत हुने कानुनी बाध्यता बुझिन्छ।",
        "बजेटका तीन मुख्य स्तम्भहरू: चालु खर्च (तलब, प्रशासनिक), पुँजीगत खर्च (विकास निर्माण) र वित्तीय व्यवस्था (ऋण भुक्तानी) को हिसाब थाहा हुन्छ।",
        "साउन १ गतेदेखि लागू हुने नयाँ करका दर, भन्सार महसुल र व्यक्तिगत कर छुटका स्ल्याबहरू अग्रिम थाहा पाउन सकिन्छ।",
        "सरकारले बजेटमार्फत प्राथमिकता दिएका क्षेत्रहरू (जस्तै जलविद्युत्, सूचना प्रविधि, कृषि) पहिचान गरी सेयर लगानी गर्न मद्दत गर्छ।"
      ],
      "limitations": [
        "पुँजीगत (विकास) खर्च समयमै नहुने पुरानो रोगका कारण छुट्याइएको विकास बजेटको ५०-६०% मात्र मुस्किलले खर्च हुन्छ।",
        "बजेट घाटा पूर्ति गर्न सरकारले आन्तरिक र बाह्य ऋणमा अत्यधिक भर पर्नुपर्ने अवस्था छ।",
        "राजस्व संकलनको लक्ष्य धेरै ठूलो राखिने र पछि लक्ष्य नपुगेर माघ-फागुनमा बजेटको आकार घटाउनुपर्ने बाध्यता हुन्छ।",
        "राजनीतिक दबाबका कारण आर्थिक रूपमा लाभ नदिने अनुत्पादक क्षेत्रमा बजेट छरिने समस्या रहन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "नयाँ कर, भन्सार र अन्तःशुल्कको दर परिवर्तन हेरेर व्यापार योजना बनाउने सम्पूर्ण उद्योगी तथा व्यवसायी।",
          "बजेटका नीतिगत छुट हेरेर सेयर बजारमा लगानी विविधीकरण गर्न चाहने लगानीकर्ताहरू।",
          "आफ्नो पसिनाको कर सरकारले कहाँ र कसरी खर्च गरिरहेको छ भनी हेर्न चाहने सचेत नागरिक।"
        ],
        "whoShouldAvoid": [
          "देशको अर्थतन्त्र र सरकारी नीतिमा कुनै चासो नभएका व्यक्तिहरू।"
        ]
      },
      "decisionScenario": {
        "title": "देवेन्द्रको गाडी खरिद निर्णय: वैशाखमै खरिद गर्ने कि जेठ १५ को बजेट भाषण कुरेर बस्ने?",
        "goal": "व्यापारिक डेलिभरी भ्यान खरिद गर्दा सम्भावित भन्सार महसुल वृद्धिको असरबाट जोगिनु।",
        "options": [
          {
            "option": "विकल्प क: बजेटले केही गर्दैन भन्दै जेठ १५ पछि असारसम्म पर्खने",
            "verdict": "मूल्यवृद्धिमा फस्ने जोखिम",
            "recommended": false,
            "rationale": "यदि अर्थमन्त्रीले बजेट भाषणमार्फत सवारीसाधनमा भन्सार वा अन्तःशुल्क बढाएमा भोलिपल्टै गाडीको मूल्य लाखौँ रुपैयाँ बढ्न सक्छ।"
          },
          {
            "option": "विकल्प ख: अघिल्लो वर्षको राजस्व अवस्था हेरेर कर बढ्ने संकेत देखिएमा वैशाख मसान्तभित्रै पुरानै दरमा खरिद सम्पन्न गर्ने",
            "verdict": "सचेत र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "कर वृद्धिको आर्थिक भारबाट जोगिन्छ र पुरानै सरकारी दरमा गाडी दर्ता गराएर व्यावसायिक काम सुरु गर्न सकिन्छ।"
          }
        ],
        "takeaway": "जेठ १५ को संघीय बजेटले एकै रातमा देशको आर्थिक नियम परिवर्तन गरिदिन्छ। आर्थिक विधेयकको अध्ययन गर्नुहोस् र साउन १ देखि लागू हुने नयाँ करबाट जोगिन पूर्वतयारी गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालमा हरेक वर्ष जेठ १५ गते नै बजेट किन आउँछ?",
          "a": "नेपालको संविधान २०७२ को धारा ११९ को उपधारा ३ मा नेपाल सरकारको अर्थमन्त्रीले प्रत्येक वर्षको जेठ १५ गते संघीय संसद्मा आगामी आर्थिक वर्षको राजस्व र व्ययको अनुमान (बजेट) पेश गर्नुपर्ने स्पष्ट संवैधानिक व्यवस्था गरिएको छ।"
        },
        {
          "q": "नेपालको बजेटमा चालु खर्च र पुँजीगत खर्च बीच के फरक छ?",
          "a": "चालु खर्च भनेको कर्मचारीको तलब, पेन्सन र दैनिक प्रशासनिक काम चलाउन गरिने खर्च हो, जसबाट कुनै नयाँ सम्पत्ति बन्दैन। पुँजीगत खर्च भनेको सडक, पुल, जलविद्युत् र विमानस्थल जस्ता दीर्घकालीन भौतिक विकास निर्माणमा गरिने पुँजीगत लगानी हो।"
        }
      ]
    }
  },
  "internal-external-debt-nepal-gdp": {
    "en": {
      "advantages": [
        "Tracks sovereign debt sustainability: analyzing Nepal's Total Public Debt-to-GDP ratio (currently ~42-45%).",
        "Differentiates Internal Debt (treasury bills & development bonds issued by NRB) vs External Debt (concessional multilateral loans).",
        "Explains why Nepal enjoys concessional external borrowing: low interest rates (1-2%) with 30-40 year repayment horizons.",
        "Assesses national debt risks without falling prey to alarmist media comparisons with Sri Lanka."
      ],
      "limitations": [
        "Rapidly rising domestic interest debt servicing reduces government funds available for healthcare and schools.",
        "External debt denominated in foreign currency (USD/SDR) increases when the Nepali Rupee depreciates.",
        "Productivity gap: borrowed funds channeled into recurrent overheads rather than revenue-generating infrastructure.",
        "High internal borrowing by the government can crowd out private sector commercial bank lending."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Institutional bond and debenture investors analyzing sovereign credit risk in Nepal.",
          "Economics students, researchers, and professionals evaluating fiscal sustainability.",
          "Citizens evaluating political narratives around national debt distress."
        ],
        "whoShouldAvoid": [
          "Individuals seeking personal consumer credit advice."
        ]
      },
      "decisionScenario": {
        "title": "Bipin's Risk Assessment: Media Panic About 'Nepal Becoming Sri Lanka' vs Debt Fundamentals",
        "goal": "Deciding whether to liquidate long-term NEPSE investments based on sensational news headlines.",
        "options": [
          {
            "option": "Option A: Panic and liquidate all assets into cash, fearing an imminent sovereign debt default",
            "verdict": "Ill-Informed Panic Selling",
            "recommended": false,
            "rationale": "Sri Lanka held commercial sovereign Eurobonds with high interest (>7%) and debt-to-GDP over 110%. Nepal's debt is under 45% of GDP, and external debt is almost entirely concessional from the World Bank and ADB."
          },
          {
            "option": "Option B: Check Public Debt Management Office (PDMO) reports, confirm foreign exchange reserves cover 12+ months of imports, and hold long-term assets",
            "verdict": "Data-Driven & Recommended",
            "recommended": true,
            "rationale": "Grounds decisions in hard economic data. Nepal maintains strong remittance inflows, robust central bank reserves, and zero sovereign default history on multilateral debt."
          }
        ],
        "takeaway": "Never manage your money based on sensational headlines. Nepal's sovereign debt is predominantly concessional and sustainable; base your decisions on official Public Debt Management Office data."
      },
      "faqs": [
        {
          "q": "What is Nepal's current Public Debt to GDP ratio?",
          "a": "According to the Public Debt Management Office (PDMO), Nepal's total public debt stands at approximately 42% to 45% of GDP, divided relatively equally between internal and external debt, well within international sustainability thresholds."
        },
        {
          "q": "Who provides external loans to the Government of Nepal?",
          "a": "Nepal's external debt is almost entirely multilateral concessional financing from the World Bank (IDA) and Asian Development Bank (ADB), carrying ultra-low interest rates (0.75% to 1.5%) with multi-decade repayment periods."
        }
      ]
    },
    "np": {
      "advantages": [
        "नेपालको कुल सार्वजनिक ऋण र कुल गार्हस्थ उत्पादन (GDP) को अनुपात (हाल करिब ४२-४५%) को यथार्थ अवस्था बुझिन्छ।",
        "आन्तरिक ऋण (राष्ट्र बैंकले जारी गर्ने ट्रेजरी बिल र विकास ऋणपत्र) र बाह्य ऋण (विदेशी दातृ निकायको ऋण) बीचको फरक थाहा हुन्छ।",
        "नेपालले पाउने बाह्य ऋण अत्यन्त सहुलियतपूर्ण (१% भन्दा कम ब्याज र ३०-४० वर्षको भुक्तानी अवधि) हुने भएकाले श्रीलंका जस्तो नहुने तथ्य बुझिन्छ।",
        "सामाजिक सञ्जालमा फैलिने भ्रामक हल्लाको पछि नलागी देशको वास्तविक आर्थिक स्वास्थ्य नाप्न सकिन्छ।"
      ],
      "limitations": [
        "आन्तरिक ऋणको ब्याज भुक्तानीमा हरेक वर्ष ठूलो बजेट खर्च हुने भएकाले शिक्षा र स्वास्थ्यका लागि बजेट अभाव हुन सक्छ।",
        "अमेरिकी डलर महँगो हुँदा विदेशी मुद्रामा लिएको बाह्य ऋणको दायित्व नेपाली रुपैयाँमा स्वतः बढ्छ।",
        "ऋण काढेर बनाइएका पूर्वाधार (जस्तै विमानस्थल) बाट पर्याप्त आम्दानी नहुँदा ऋण तिर्न थप ऋण लिनुपर्ने जोखिम रहन्छ।",
        "सरकारले बैंकहरूबाट धेरै आन्तरिक ऋण उठाउँदा निजी क्षेत्रका उद्योगीले कर्जा नपाउने समस्या (Crowding Out) आउन सक्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "सरकारी ऋणपत्र र विकास डिबेन्चरमा लगानी गर्ने संस्थागत तथा व्यक्तिगत लगानीकर्ता।",
          "देशको अर्थतन्त्र, बजेट घाटा र वित्तीय दिगोपना अध्ययन गर्ने विद्यार्थी तथा अर्थशास्त्रीहरू।",
          "राष्ट्रिय ऋणबारे राजनीतिक दाबी र मिडियाका हेडलाइनको यथार्थ बुझ्न चाहने नेपाली नागरिक।"
        ],
        "whoShouldAvoid": [
          "व्यक्तिगत घरायसी बजेटिङ मात्र खोजिरहेका साधारण पाठकहरू।"
        ]
      },
      "decisionScenario": {
        "title": "बिपिनको जोखिम मूल्यांकन: 'नेपाल श्रीलंका बन्दैछ' भन्ने हल्लामा सेयर बेच्ने कि तथ्यांक हेर्ने?",
        "goal": "सामाजिक सञ्जालको आतंककारी हल्लाका बीच आफ्नो दीर्घकालीन लगानी सम्हाल्नु।",
        "options": [
          {
            "option": "विकल्प क: देश डुब्दैछ भन्दै डरले आफ्नो सम्पूर्ण सेयर र सम्पत्ति सस्तोमै बेचेर नगद बस्ने",
            "verdict": "तथ्यहीन डर र ठूलो घाटा",
            "recommended": false,
            "rationale": "श्रीलंकामा कुल ऋण GDP को ११०% नाघेको थियो र महँगो व्यापारिक ऋण थियो। नेपालको ऋण ४५% भन्दा कम छ र बाह्य ऋण लगभग पुरै विश्व बैंक र ADB को सहुलियतपूर्ण ऋण हो।"
          },
          {
            "option": "विकल्प ख: सार्वजनिक ऋण व्यवस्थापन कार्यालय (PDMO) र राष्ट्र बैंकको विदेशी मुद्रा सञ्चिति हेरेर लगानी कायमै राख्ने",
            "verdict": "तथ्यांकमा आधारित र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "नेपालसँग १२ महिनाभन्दा बढीको आयात धान्न पुग्ने विदेशी मुद्रा सञ्चिति छ, रेमिट्यान्स निरन्तर आइरहेको छ र नेपालले आजसम्म कुनै पनि अन्तर्राष्ट्रिय ऋणको भाका नाघेको छैन।"
          }
        ],
        "takeaway": "मिडियाका सनसनीपूर्ण हेडलाइन हेरेर आफ्नो सम्पत्ति कहिल्यै नबेच्नुहोस्। नेपालको सार्वजनिक ऋण अन्तर्राष्ट्रिय मापदण्ड अनुसार सुरक्षित सीमाभित्रै छ; सधैँ आधिकारिक सरकारी तथ्यांकमा विश्वास गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालको कुल सार्वजनिक ऋण GDP को कति प्रतिशत छ?",
          "a": "सार्वजनिक ऋण व्यवस्थापन कार्यालय (PDMO) को पछिल्लो प्रतिवेदन अनुसार नेपालको कुल सार्वजनिक ऋण कुल गार्हस्थ उत्पादन (GDP) को करिब ४२% देखि ४५% को हाराहारीमा रहेको छ, जुन अन्तर्राष्ट्रिय दृष्टिकोणबाट सुरक्षित मानिन्छ।"
        },
        {
          "q": "नेपाललाई सबैभन्दा धेरै बाह्य ऋण कसले दिन्छ?",
          "a": "नेपालको बाह्य ऋणको ९०% भन्दा बढी हिस्सा विश्व बैंक (IDA) र एसियाली विकास बैंक (ADB) जस्ता बहुपक्षीय दातृ निकायको हो, जसको ब्याजदर अत्यन्त न्यून (०.७५% देखि १.५%) र चुक्ता गर्ने अवधि ३० देखि ४० वर्षसम्मको हुन्छ।"
        }
      ]
    }
  },
  "why-detailed-budgeting-fails": {
    "en": {
      "advantages": [
        "Frees you from tracking fatigue: eliminates logging every NPR 25 tea or micro-expense into tedious spreadsheets.",
        "Replaces restrictive willpower budgeting with automated 'Pay Yourself First' capital routing on salary day.",
        "Guarantees savings discipline: investment and emergency fund contributions transfer automatically before spending begins.",
        "Creates sustainable lifelong habits: 3 broad buckets (Fixed Costs, Wealth Building, Guilt-Free Fun) prevent burnout."
      ],
      "limitations": [
        "Requires an initial 1-2 month diagnostic audit to establish accurate baseline fixed living expenses.",
        "Not suitable for individuals in acute debt emergencies who need forensic line-by-line spending intervention.",
        "Demands banking automation discipline (standing instructions or calendar-scheduled ConnectIPS transfers).",
        "Can lead to end-of-month cash pinches if the 'Guilt-Free Spending' bucket is exhausted within the first 10 days."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Salaried professionals exhausted by complex budgeting apps and abandoned Excel spreadsheets.",
          "Middle and high-income earners who earn well but cannot explain where their money disappears each month.",
          "Couples seeking a peaceful money management system that eliminates arguments over minor daily purchases."
        ],
        "whoShouldAvoid": [
          "Individuals with severe irregular daily-wage cash flows or active credit card debt balances exceeding 20% APR."
        ]
      },
      "decisionScenario": {
        "title": "Bikash's Budgeting Burnout: 45 Line-Item Spreadsheet vs 3-Bucket Automated Allocation",
        "goal": "Establishing a sustainable personal budgeting routine on an NPR 80,000 monthly salary after abandoning three budgeting apps.",
        "options": [
          {
            "option": "Option A: Maintain a 45-category granular Excel sheet recording every cash receipt and tea cup",
            "verdict": "High Friction & High Failure Rate",
            "recommended": false,
            "rationale": "Micro-tracking causes decision fatigue within 3 weeks. Missing receipts creates guilt, leading to complete abandonment of financial tracking."
          },
          {
            "option": "Option B: Adopt 'Pay Yourself First' 3-Bucket System (50% Fixed, 20% Invested, 30% Guilt-Free)",
            "verdict": "Highly Sustainable & Recommended",
            "recommended": true,
            "rationale": "On salary day, NPR 16,000 automatically routes to SIP/CIT, NPR 40,000 moves to a bill-paying account, and NPR 24,000 stays for guilt-free living without tracking."
          },
          {
            "option": "Option C: Try to 'spend conservatively' and save whatever cash remains at the end of the month",
            "verdict": "Parkinson's Law Trap",
            "recommended": false,
            "rationale": "Expenses inevitably rise to meet income. Without upfront automated isolation, the remaining cash balance at month-end is consistently zero."
          }
        ],
        "takeaway": "Budgeting succeeds through structural automation, not daily willpower. Save first, pay essential bills second, and spend the rest without remorse."
      },
      "faqs": [
        {
          "q": "What are the ideal percentage splits for the 3-bucket budgeting system in Nepal?",
          "a": "A realistic baseline for urban Nepal is the 50/30/20 rule: 50% for Fixed Needs (rent, groceries, utilities, school fees), 30% for Guilt-Free Lifestyle Wants (dining out, gadgets, entertainment), and 20% for Wealth Building (emergency fund, SIP, CIT, EPF). If living costs are high, start with 60/25/15."
        },
        {
          "q": "How do I implement 'Pay Yourself First' using Nepali commercial banks?",
          "a": "Set up a Standing Instruction (SI) in your mobile banking app or an automated standing mandate on ConnectIPS to trigger 1 day after your monthly salary is credited, automatically transferring your savings target into an open-ended mutual fund SIP or a separate secondary savings account without an ATM card."
        }
      ]
    },
    "np": {
      "advantages": [
        "दैनिक हिसाब राख्ने झन्झट र मानसिक थकानबाट मुक्ति: हरेक रु. २५ को चिया वा स-साना खर्च एपमा टिप्नु पर्दैन।",
        "इच्छाशक्तिको भरमा गरिने कडिकडाउ बजेटको सट्टा तलब आउनासाथ 'पहिले आफूलाई भुक्तानी गर्नुहोस्' (Pay Yourself First) सिद्धान्त लागू गर्छ।",
        "बचतको निरन्तरता सुनिश्चित: खर्च सुरु हुनुअघि नै लगानी र आपत्कालीन कोषको रकम स्वचालित रूपमा अलग खातामा जान्छ।",
        "दिगो बानीको विकास: ३ वटा मुख्य बास्केट (अपरिहार्य खर्च, सम्पत्ति निर्माण, र चिन्तारहित व्यक्तिगत खर्च) ले बजेट असफल हुन दिँदैन।"
      ],
      "limitations": [
        "सुरुको १-२ महिना आफ्नो वास्तविक न्यूनतम आधारभूत खर्च पत्ता लगाउन छोटो समीक्षा आवश्यक पर्छ।",
        "गम्भीर ऋण संकटमा परेका व्यक्तिका लागि जहाँ हरेक रुपैयाँ कटौती गर्नुपर्ने हुन्छ, त्यहाँ यो सुरुमै पर्याप्त नहुन सक्छ।",
        "बैंकको अटोमेसन (स्थायी निर्देशन वा ConnectIPS शेड्युलिङ) मिलाउन सुरुमा केही प्राविधिक अनुशासन चाहिन्छ।",
        "महिनाको सुरुका १० दिनमै 'व्यक्तिगत खर्च' बास्केट रित्याएमा महिनाको अन्त्यतिर पैसाको अभाव हुन सक्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "जटिल बजेटिङ एप र अधुरा एक्सेल सिट भरेर वाक्क भएका जागिरे तथा पेसाकर्मीहरू।",
          "राम्रो आम्दानी भए पनि महिनाको अन्त्यमा पैसा कता हरायो पत्तो नपाउने मध्यम तथा उच्च आय वर्गका व्यक्तिहरू।",
          "दैनिक स-साना खर्चमा हुने पारिवारिक किचलो हटाएर शान्तिपूर्ण आर्थिक व्यवस्थापन चाहने दम्पतीहरू।"
        ],
        "whoShouldAvoid": [
          "दैनिक ज्यालादारीमा चल्ने वा २०% भन्दा बढी चर्को ब्याजको ऋण चुक्ता गर्न कडा खर्च कटौती गर्नुपर्ने व्यक्तिहरू।"
        ]
      },
      "decisionScenario": {
        "title": "विकासको बजेटिङ तनाव: ४५ वटा शीर्षकको एक्सेल सिट बनाम ३-बास्केट स्वचालित प्रणाली",
        "goal": "लगातार ३ वटा बजेट एप छोडेपछि मासिक रु. ८०,००० तलबमा दिगो र झन्झटमुक्त वित्तीय व्यवस्थापन लागू गर्ने।",
        "options": [
          {
            "option": "विकल्प क: हरेक कप चिया र स-साना नगद खर्च ४५ शीर्षकको एक्सेल सिटमा दैनिक टिप्ने",
            "verdict": "अत्यधिक झन्झटिलो र असफल हुने निश्चित",
            "recommended": false,
            "rationale": "३ हप्तामै मानसिक थकान हुन्छ। २-३ दिनको बिल छुट्नासाथ हीनताबोध हुन्छ र मानिसले हिसाब राख्नै पूर्ण रूपमा छोडिदिन्छ।"
          },
          {
            "option": "विकल्प ख: तलब आएकै दिन 'Pay Yourself First' ३-बास्केट प्रणाली (५०% आधारभूत, २०% लगानी, ३०% व्यक्तिगत खर्च) अपनाउने",
            "verdict": "अत्यन्त दिगो र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "तलब आएको भोलिपल्टै रु. १६,००० सोझै SIP/CIT मा, रु. ४०,००० घरखर्च र बिल खातामा जान्छ, र बाँकी रु. २४,००० कुनै हिसाब नराखी ढुक्कसँग खर्च गर्न पाइन्छ।"
          },
          {
            "option": "विकल्प ग: महिनाभरि 'कन्जुस्याइँ गरेर खर्च गर्ने' र महिनाको अन्त्यमा जे उब्रिन्छ त्यो बचत गर्ने",
            "verdict": "पार्किन्सन्स नियमको भ्रम",
            "recommended": false,
            "rationale": "आम्दानी जति भए पनि पैसा छेउछाउमै सकिन्छ। सुरुमै अलग नगरिए महिनाको अन्तिम दिन खातामा जहिले पनि शून्य नै बाँकी रहन्छ।"
          }
        ],
        "takeaway": "बजेटिङ दैनिक इच्छाशक्तिले होइन, खाताको संरचनात्मक अटोमेसनले सफल हुन्छ। पहिले बचत अलग गर्नुहोस्, अनि बाँकी रकम चिन्ता नगरी खर्च गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालको सहरी परिवेशमा ३-बास्केट बजेटिङको उपयुक्त अनुपात कति हुनुपर्छ?",
          "a": "सहरी नेपालका लागि ५०/३०/२० नियम उत्तम मानिन्छ: ५०% अपरिहार्य आवश्यकता (कोठा भाडा, रासन, बिजुली/इन्टरनेट, विद्यालय शुल्क), ३०% व्यक्तिगत जीवनशैली (होटल, घुमघाम, मनोरञ्जन, कपडा), र २०% सम्पत्ति निर्माण (आपत्कालीन कोष, SIP, नागरिक लगानी कोष, सञ्चय कोष)। भाडा बढी भएमा ६०/२५/१५ बाट सुरु गर्न सकिन्छ।"
        },
        {
          "q": "नेपाली वाणिज्य बैंकहरूमा 'Pay Yourself First' कसरी स्वचालित गर्ने?",
          "a": "आफ्नो मोबाइल बैंकिङ एपमा 'Standing Instruction' वा ConnectIPS मा महिनाको तलब आउने मितिको भोलिपल्टका लागि सेड्युल ट्रान्सफर राख्नुहोस्। यसले तपाईंको बचत रकम सिधै खुलामुखी म्युचुअल फन्डको SIP वा ATM कार्ड नभएको अर्को सहायक बचत खातामा स्वतः सारिदिन्छ।"
        }
      ]
    }
  },
  "notion-spreadsheet-money-systems": {
    "en": {
      "advantages": [
        "Provides a single unified dashboard connecting fragmented Nepali assets: bank accounts, digital wallets, TMS collateral, Meroshare portfolio, and CIT/EPF balances.",
        "Customizable to Nepal's unique financial ecosystem (Bikram Sambat fiscal year, TDS tracking, bonus shares, rights adjustments).",
        "Completely private and zero-cost: avoids subscription fees and keeps sensitive financial net worth data on your own Google Drive or Notion workspace.",
        "Weekly or monthly async logging prevents the daily burnout of micro-transaction mobile apps."
      ],
      "limitations": [
        "No automated bank API feeds in Nepal: requires manual data entry or monthly CSV statement copy-pasting.",
        "Setup requires initial spreadsheet or Notion database literacy (formulas, rollups, and relational databases).",
        "Risk of over-engineering: spending 10 hours designing aesthetic dashboards instead of taking actual financial actions.",
        "Data accuracy is fully dependent on your discipline in performing periodic reconciliation."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Investors managing multi-asset portfolios across NEPSE shares, mutual funds, gold, fixed deposits, and real estate.",
          "Remote tech freelancers and business owners juggling multiple bank accounts, foreign currency earnings, and local expense flows.",
          "Analytical individuals seeking a high-altitude visual breakdown of their monthly savings rate and net worth trajectory."
        ],
        "whoShouldAvoid": [
          "Beginners who get overwhelmed by software tools and would be better served by a simple two-pocket bank account system."
        ]
      },
      "decisionScenario": {
        "title": "Smriti's Money Tracking Architecture: Over-Engineered Daily Log vs 15-Minute Weekly Net Worth Dashboard",
        "goal": "Tracking multi-bank accounts, broker TMS deposits, Meroshare IPOs, and SSF balances without spending hours every week on data entry.",
        "options": [
          {
            "option": "Option A: Build an elaborate Notion database requiring manual entry of every single receipt and UPI QR payment",
            "verdict": "Over-engineered Failure",
            "recommended": false,
            "rationale": "Fails within 2 weeks due to immense data entry friction. Tracking every NPR 50 tea yields zero strategic financial value."
          },
          {
            "option": "Option B: High-Level Google Sheet tracking Net Worth & Major Asset Balances updated once every Sunday (15 mins)",
            "verdict": "Optimal & Highly Recommended",
            "recommended": true,
            "rationale": "Focuses exclusively on high-impact numbers: Total Cash, Equity Market Value, SSF/CIT balance, and Total Debt. Provides macro clarity in 15 minutes a week."
          },
          {
            "option": "Option C: Depend entirely on individual banking and Meroshare apps without any consolidated dashboard",
            "verdict": "Blind Spot Vulnerability",
            "recommended": false,
            "rationale": "Scattered across 4 bank apps, 2 wallets, and TMS, you never see your true net worth or asset allocation imbalance."
          }
        ],
        "takeaway": "Your financial dashboard should be a strategic cockpit, not an administrative prison. Track assets and liabilities at a high level, not individual cups of coffee."
      },
      "faqs": [
        {
          "q": "How can I track NEPSE portfolio stock prices dynamically in Google Sheets?",
          "a": "You can use Google Sheets' `=IMPORTXML` or `=IMPORTHTML` formulas to pull real-time closing prices directly from public financial portals (such as Nepal Stock Exchange, Merolagani, or Sharesansar) using XPath queries, automatically recalculating your portfolio valuation."
        },
        {
          "q": "Is Notion or Google Sheets better for managing personal finance in Nepal?",
          "a": "Google Sheets is vastly superior for mathematical calculations, portfolio XIRR, compounding simulations, and automated price feeds. Notion is better for documentation, goal roadmaps, financial SOPs, and logging insurance policy renewal dates. Many advanced users use both: Sheets for numbers, Notion for life goals."
        }
      ]
    },
    "np": {
      "advantages": [
        "नेपालका छरिएका वित्तीय सम्पत्तिहरूलाई एउटै ड्यासबोर्डमा जोड्छ: बैंक खाता, वालेट, ब्रोकर TMS कोल्याटरल, मेरोसेयर र CIT/EPF को एकीकृत हिसाब।",
        "नेपाली वित्तीय प्रणाली अनुसार पूर्ण अनुकूलन योग्य (विक्रम संवत् आर्थिक वर्ष, ५% TDS, बोनस सेयर र हकप्रद सेयरको हिसाब)।",
        "निःशुल्क र पूर्ण सुरक्षित: कुनै महँगो सफ्टवेयर खरिद गर्नु पर्दैन र आफ्नो गोप्य वित्तीय विवरण आफ्नै गुगल ड्राइभ वा नोसनमा सुरक्षित रहन्छ।",
        "हप्ता वा महिनामा एकपटक मात्र अपडेट गरे पुग्ने भएकाले दैनिक हिसाब राख्ने झन्झट हुँदैन।"
      ],
      "limitations": [
        "नेपालका बैंकहरूले खुला API नदिने हुँदा स्टेटमेन्टबाट महिनाको एकपटक आफैँ अंक इन्ट्री गर्नुपर्छ।",
        "सुरुमा स्प्रेडसिट वा नोसन डेटाबेस (फर्म्युला, रोलअप) बनाउन सामान्य प्राविधिक ज्ञान चाहिन्छ।",
        "अनावश्यक सजावटको जोखिम: वास्तविक वित्तीय निर्णय लिनुको सट्टा ड्यासबोर्ड रंगाउन मात्र घण्टौँ समय खेर जान सक्छ।",
        "ड्यासबोर्डको शुद्धता प्रयोगकर्ताको नियमित अपडेट गर्ने अनुशासनमा मात्र निर्भर रहन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "नेप्से सेयर, म्युचुअल फन्ड, सुन, मुद्दती निक्षेप र घरजग्गामा विविध लगानी गरेका लगानीकर्ताहरू।",
          "विभिन्न बैंक खाता, डलर कार्ड र स्थानीय खर्च व्यवस्थापन गर्नुपर्ने आईटी फ्रिलान्सर तथा उद्यमीहरू।",
          "आफ्नो कुल सम्पत्ति (Net Worth) र मासिक बचत दरलाई ग्राफ र चार्टमा स्पष्ट हेर्न चाहने व्यक्तिहरू।"
        ],
        "whoShouldAvoid": [
          "सफ्टवेयर र कम्प्युटर चलाउन झन्झट मान्ने व्यक्तिहरू, जसका लागि २ वटा बैंक खाता (एउटा खर्च र अर्को बचत) राख्नु नै पर्याप्त हुन्छ।"
        ]
      },
      "decisionScenario": {
        "title": "स्मृतिको वित्तीय प्रणाली: दैनिक खर्च टिप्ने जटिल नोसन बनाम १५ मिनेटको साप्ताहिक सम्पत्ति ड्यासबोर्ड",
        "goal": "चारवटा बैंक, ब्रोकर खाता, मेरोसेयर र नागरिक लगानी कोषको हिसाब बिना झन्झट हप्ताको १५ मिनेटमा अद्यावधिक गर्ने।",
        "options": [
          {
            "option": "विकल्प क: हरेक चिया, तरकारी र स-साना नगद खर्च टिप्नुपर्ने अति जटिल नोसन डेटाबेस बनाउने",
            "verdict": "अति जटिल र असफल हुने बाटो",
            "recommended": false,
            "rationale": "दैनिक ५ पटक एप खोलेर हिसाब भर्न अल्छी लाग्छ र २ हप्तामै डेटा इन्ट्री छुट्न थालेर प्रणाली बन्द हुन्छ।"
          },
          {
            "option": "विकल्प ख: हप्ताको एकपटक आइतबार १५ मिनेट मात्र खोलेर कुल नगद, सेयरको बजार मूल्य, र ऋणको मौज्दात अपडेट गर्ने गुगल सिट",
            "verdict": "उत्कृष्ट र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "स-साना खुद्रा खर्च छोडेर समग्र सम्पत्ति वृद्धि र लगानीको दिशामा ध्यान केन्द्रित गर्छ। १५ मिनेटमै हप्ताको पूर्ण वित्तीय चित्र स्पष्ट हुन्छ।"
          },
          {
            "option": "विकल्प ग: कुनै सिट नबनाई फरक-फरक बैंक र मेरोसेयर एप मात्र हेरेर अन्दाजमा चल्ने",
            "verdict": "दिशाहीन वित्तीय अवस्था",
            "recommended": false,
            "rationale": "आफ्नो कुल खुद सम्पत्ति (Net Worth) कति पुग्यो वा ऋणको भार कति छ भन्ने कहिल्यै यकिन हुँदैन।"
          }
        ],
        "takeaway": "तपाईंको वित्तीय ड्यासबोर्ड जहाजको ककपिट जस्तो हुनुपर्छ, जेलको प्रशासनिक खाता जस्तो होइन। दैनिक चियाको हिसाब होइन, कुल सम्पत्तिको दिशा ट्र्याक गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "गुगल सिटमा नेप्से सेयरको पछिल्लो मूल्य कसरी स्वतः अपडेट गराउने?",
          "a": "गुगल सिटको `=IMPORTXML` वा `=IMPORTHTML` फर्म्युला प्रयोग गरेर नेप्से, मेरोलगानी वा सेयरसंसार जस्ता वेबसाइटको लाइभ मूल्य तालिकाबाट सोझै सेयरको मूल्य तान्न सकिन्छ, जसले गर्दा तपाईंको पोर्टफोलियोको बजार मूल्य स्वतः परिवर्तन हुन्छ।"
        },
        {
          "q": "नेपालमा व्यक्तिगत हिसाबका लागि नोसन (Notion) राम्रो कि गुगल सिट (Google Sheets)?",
          "a": "गणितीय हिसाब, पोर्टफोलियोको XIRR नाफा, चक्रवर्ती ब्याज र लाइभ सेयर मूल्यका लागि गुगल सिट धेरै शक्तिशाली छ। बीमा पोलिसीको नवीकरण मिति, वित्तीय कागजातका नियम र दीर्घकालीन लक्ष्यहरू लेख्न नोसन राम्रो हुन्छ। दुवैलाई मिलाएर प्रयोग गर्नु सबैभन्दा उत्तम उपाय हो।"
        }
      ]
    }
  },
  "30-minute-monthly-financial-checkin": {
    "en": {
      "advantages": [
        "Institutionalizes a predictable monthly ritual on salary day (1st of the Nepali month) to align money with goals.",
        "Catches banking anomalies early: unauthorized subscription charges, incorrect loan interest calculations, or failed SIP deductions.",
        "Eliminates financial anxiety: knowing your exact bank balances, upcoming tax dates, and credit card due dates restores mental calm.",
        "Takes only 30 minutes once a month, replacing endless daily stress with an efficient scheduled audit."
      ],
      "limitations": [
        "Requires scheduling a dedicated, uninterrupted calendar slot every month without procrastination.",
        "Partners or spouses must be aligned if conducting a joint household financial check-in.",
        "Can feel uncomfortable in months where unexpected medical or vehicle repair expenses crushed the savings target.",
        "Demands logging into multiple portals (eBanking, ConnectIPS, TMS, Nagarik App) in one sitting."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Working professionals and business owners seeking an effortless monthly cadence to supervise their personal finances.",
          "Couples managing shared household expenditures, mortgage payments, and joint child education savings.",
          "Anyone who has ever forgotten a credit card bill or loan installment and paid unnecessary late penalty charges."
        ],
        "whoShouldAvoid": [
          "Individuals who do not have any active bank accounts or personal income streams."
        ]
      },
      "decisionScenario": {
        "title": "Pradeep's Financial Audit Ritual: Month-End Procrastination vs 30-Minute Check-in on the 1st",
        "goal": "Eliminating missed EMI penalties and tracking financial progress across 2 bank accounts and a credit card.",
        "options": [
          {
            "option": "Option A: Check bank balances randomly whenever money feels tight or an ATM declines",
            "verdict": "Reactive & Costly",
            "recommended": false,
            "rationale": "Guarantees missed credit card dues (3% late fee + 24% APR) and complete lack of awareness regarding investment performance."
          },
          {
            "option": "Option B: Block 30 minutes on the 1st of every Nepali month with a fixed 5-step checklist",
            "verdict": "Highly Structured & Recommended",
            "recommended": true,
            "rationale": "Step 1: Verify salary credit. Step 2: Pay credit card in full. Step 3: Confirm SIP deduction. Step 4: Check emergency buffer. Step 5: Log net worth. Total time: 25 minutes, total peace of mind."
          },
          {
            "option": "Option C: Wait until Ashar year-end to review the entire year's finances in one stressful weekend",
            "verdict": "Exhausting & Too Late",
            "recommended": false,
            "rationale": "Problems discovered 11 months later (like leaking subscriptions or wrongful bank charges) cannot be easily rectified."
          }
        ],
        "takeaway": "Financial control is not about obsessing over money every single hour; it is about paying ruthless, focused attention for 30 uninterrupted minutes once a month."
      },
      "faqs": [
        {
          "q": "What specific checklist should I follow during my 30-minute monthly financial review in Nepal?",
          "a": "Follow this 5-point checklist: 1) Reconcile salary and verify tax deduction (TDS); 2) Pay off the full statement balance of your credit card and utility bills (NEA electricity, Khanepani, Internet); 3) Confirm your automated mutual fund SIP and CIT/EPF contributions were successfully processed; 4) Check that your emergency savings account maintains at least 3-6 months of expenses; 5) Update your net worth tracker."
        },
        {
          "q": "Why is the 1st day of the Nepali month (Bikram Sambat) the best time for this check-in?",
          "a": "Most corporate and government salaries in Nepal are credited between the 25th and the final day of the Nepali month. Conducting your audit on the 1st ensures your salary has cleared, standing instructions have triggered, and utility bills for the preceding month are freshly generated for payment."
        }
      ]
    },
    "np": {
      "advantages": [
        "महिनाको १ गते तलब आउनासाथ आर्थिक स्थितिलाई लक्ष्यसँग जोड्ने निश्चित मासिक अनुशासन स्थापित गर्छ।",
        "बैंकका त्रुटिहरू तुरुन्तै पत्ता लाग्छन्: नचाहिँदो शुल्क काटिएको, ऋणको ब्याज गणना बिग्रिएको वा SIP नकटिएको तुरुन्त थाहा हुन्छ।",
        "वित्तीय चिन्ताबाट मुक्ति: बैंकको मौज्दात, आगामी कर र क्रेडिट कार्ड तिर्ने मिति स्पष्ट हुँदा मानसिक शान्ति मिल्छ।",
        "महिनामा केवल एकपटक ३० मिनेट दिए पुग्छ; दिनदिनै पैसाको तनाव लिइरहनु पर्दैन।"
      ],
      "limitations": [
        "हरेक महिना अल्छी नगरी क्यालेन्डरमा ३० मिनेटको समय सुरक्षित राख्नुपर्छ।",
        "दम्पती मिलेर संयुक्त खर्चको समीक्षा गर्दा दुवै जना समय मिलाएर सँगै बस्न सहमति चाहिन्छ।",
        "अकस्मात् बिरामी वा गाडी मर्मतले बजेट बिगारेको महिनामा समीक्षा गर्दा सुरुमा केही निराशा महसुस हुन सक्छ।",
        "एउटै बसाइमा विभिन्न पोर्टल (मोबाइल बैंकिङ, ConnectIPS, मेरोसेयर, नागरिक एप) लगइन गर्नुपर्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "आफ्नो व्यक्तिगत कमाइ र लगानीलाई व्यवस्थित राख्न सरल मासिक तालिका खोजिरहेका जागिरे तथा पेसाकर्मीहरू।",
          "घरायसी खर्च, घरकर्जाको किस्ता र छोराछोरीको पढाइ खर्च संयुक्त रूपमा चलाइरहेका दम्पतीहरू।",
          "क्रेडिट कार्ड वा ऋणको किस्ता तिर्न बिर्सेर जरिवाना र हर्जाना तिरेका अनुभव भएका जोकोही।"
        ],
        "whoShouldAvoid": [
          "कुनै पनि बैंक खाता वा नियमित आम्दानीको स्रोत नभएका व्यक्तिहरू।"
        ]
      },
      "decisionScenario": {
        "title": "प्रदीपको वित्तीय समीक्षा बानी: महिनाको अन्त्यमा टार्ने प्रवृत्ति बनाम १ गतेको ३० मिनेट समीक्षा",
        "goal": "ऋणको किस्ता तिर्न ढिलाइ हुने समस्या रोक्ने र २ वटा बैंक खाता तथा क्रेडिट कार्डको पूर्ण नियन्त्रण कायम गर्ने।",
        "options": [
          {
            "option": "विकल्प क: पैसा अभाव भएको बेला वा ATM ले कार्ड अस्वीकार गरेपछि मात्र बैंक ब्यालेन्स हेर्ने",
            "verdict": "अत्यन्त जोखिमपूर्ण र खर्चालु",
            "recommended": false,
            "rationale": "क्रेडिट कार्डको मिति छुट्छ (३% जरिवाना र २४% चर्को ब्याज लाग्छ) र लगानी कता पुग्यो पत्तो हुँदैन।"
          },
          {
            "option": "विकल्प ख: हरेक महिनाको १ गते क्यालेन्डरमा ३० मिनेट छुट्याएर ५-बुँदे चेकलिस्ट पूरा गर्ने",
            "verdict": "उच्च संरचित र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "१) तलब आयो कि आएन, २) क्रेडिट कार्ड र बिजुली/इन्टरनेट बिल चुक्ता, ३) SIP कट्यो कि नाई, ४) आपत्कालीन कोष, ५) कुल सम्पत्ति अपडेट। २५ मिनेटमै महिनाभरिको ढुक्क।"
          },
          {
            "option": "विकल्प ग: वर्षभरि केही नहेर्ने र असार मसान्तमा वर्षभरिको हिसाब एकैपटक तनाव लिएर हेर्ने",
            "verdict": "अत्यधिक तनावपूर्ण र ढिलो",
            "recommended": false,
            "rationale": "११ महिना अघि बैंकले गल्तीले काटेको शुल्क वा बिग्रिएको खर्चको बानीलाई असारमा सुधार्न सकिँदैन।"
          }
        ],
        "takeaway": "आर्थिक नियन्त्रण भनेको २४ सै घण्टा पैसाको चिन्ता गर्नु होइन; महिनामा एक पटक ३० मिनेट पूर्ण ध्यान दिएर सबै कुरा व्यवस्थित गर्नु हो।"
      },
      "faqs": [
        {
          "q": "३० मिनेटको मासिक वित्तीय समीक्षामा कुन ५-बुँदे चेकलिस्ट पछ्याउने?",
          "a": "यी ५ काम गर्नुहोस्: १) तलब र कर (TDS) कट्टी रुजु गर्ने; २) क्रेडिट कार्डको पूरा रकम र घरायसी बिलहरू (बिजुली, खानेपानी, इन्टरनेट) तिर्ने; ३) म्युचुअल फन्डको SIP र नागरिक लगानी कोष/सञ्चय कोष रकम काटियो कि जाँच्ने; ४) आपत्कालीन कोषमा ३-६ महिनाको खर्च सुरक्षित छ कि छैन हेर्ने; ५) आफ्नो कुल सम्पत्तिको अद्यावधिक गर्ने।"
        },
        {
          "q": "यो समीक्षा गर्नका लागि नेपाली महिनाको १ गते नै किन सबैभन्दा उपयुक्त हुन्छ?",
          "a": "नेपालका अधिकांश सरकारी तथा निजी कार्यालयहरूको तलब अघिल्लो महिनाको २५ गतेदेखि मसान्तभित्र खातामा आइसक्छ। १ गते समीक्षा गर्दा तलब जम्मा भइसकेको हुन्छ, नयाँ महिनाको बिजुली/इन्टरनेटको बिल आइसकेको हुन्छ र लगानीका स्थायी निर्देशनहरू कार्यान्वयन गर्न सहज हुन्छ।"
        }
      ]
    }
  },
  "organizing-tax-receipts-banking-documents": {
    "en": {
      "advantages": [
        "Ensures zero panic during critical financial milestones: bank home loan applications, IRD tax assessments, or foreign visa processing.",
        "Protects against tax disputes: IRD Section 81 requires taxpayers to maintain books and receipts for 5 full fiscal years.",
        "Accelerates bank loan processing times by days: having an organized dossier of citizenship, PAN, land ownership (Lalpurja), tax clearance, and bank statements speeds up approval.",
        "Combines physical fireproof storage with an encrypted cloud vault for bulletproof disaster recovery."
      ],
      "limitations": [
        "Requires discipline to scan or photograph paper tax receipts, revenue stamps, and bank vouchers immediately.",
        "Encrypted cloud storage (Google Drive/iCloud/OneDrive) requires strong master password hygiene and 2FA.",
        "Physical paper documents in Nepal deteriorate rapidly if stored in damp conditions without acid-free folders.",
        "Certain official processes still reject digital scans and demand certified original hard copies with red bank stamps."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Home loan and business mortgage applicants preparing documentation for commercial bank credit appraisal.",
          "Individual professionals and business owners filing annual income tax returns at the Inland Revenue Department (IRD).",
          "Students and professionals applying for foreign study or work visas requiring 6-month verified banking source-of-fund records."
        ],
        "whoShouldAvoid": [
          "Individuals with zero assets, no taxable income, and no involvement in formal banking transactions."
        ]
      },
      "decisionScenario": {
        "title": "Anju's Mortgage Application: Last-Minute Document Scramble vs 2-Folder Organized Vault",
        "goal": "Securing an NPR 75,00,000 home loan from a commercial bank without delays caused by missing tax or income documents.",
        "options": [
          {
            "option": "Option A: Search through random shoe boxes, drawers, and deleted phone galleries when the bank requests papers",
            "verdict": "High Delay & Risk of Loan Rejection",
            "recommended": false,
            "rationale": "Missing salary tax slips or Lalpurja copies delays bank credit processing by weeks and risks losing the property purchase token deposit."
          },
          {
            "option": "Option B: Establish a '2-Folder Vault' (Physical Accordion Folder for Originals + Encrypted Cloud PDF Folder)",
            "verdict": "Institutional Grade & Recommended",
            "recommended": true,
            "rationale": "Instantly produces PDF dossiers for the loan officer (Salary Certificate, PAN, 6-Month Bank Statement, Tax Clearance, Property Blueprint) within 10 minutes."
          },
          {
            "option": "Option C: Depend entirely on your employer's HR or accountant to store your personal tax documents",
            "verdict": "Dangerous Dependency",
            "recommended": false,
            "rationale": "Employers frequently misplace historic D-01 tax receipts or delay issuing tax clearance certificates during job transitions."
          }
        ],
        "takeaway": "Your ability to borrow capital or prove your wealth depends entirely on documentation. Treat your tax and banking records with the same sanctity as gold."
      },
      "faqs": [
        {
          "q": "How many years of financial documents must you retain according to Nepal tax laws?",
          "a": "Under Section 81 of the Nepal Income Tax Act 2058, every taxpayer is legally required to preserve all accounts, invoices, tax receipts, bank statements, and relevant records for a minimum of 5 years following the relevant income year for potential IRD audit inspections."
        },
        {
          "q": "What essential financial documents should every Nepali household maintain in its digital vault?",
          "a": "Maintain digitized PDFs of: 1) Citizenship Certificates (Nagrikta) & Passports; 2) PAN Cards; 3) Land Ownership Deeds (Lalpurja) & Cadastral Blueprints (Naksha); 4) Life/Health Insurance Policy bonds; 5) Official Bank Statements with seals; 6) Annual Tax Clearance Certificates from IRD; and 7) SSF/CIT account membership cards."
        }
      ]
    },
    "np": {
      "advantages": [
        "महत्वपूर्ण वित्तीय अवसरहरूमा तनावबाट मुक्ति: बैंकबाट घरकर्जा लिँदा, कर कार्यालय (IRD) को अडिट पर्दा वा भिसा प्रक्रियामा तुरुन्त कागजात उपलब्ध हुन्छ।",
        "कर विवादबाट सुरक्षा: नेपालको आयकर ऐन २०५८ को दफा ८१ अनुसार कम्तीमा ५ आर्थिक वर्षसम्मका सबै बिल, भौचर र कर तिरेको प्रमाण सुरक्षित राख्नै पर्छ।",
        "बैंक ऋण प्रक्रिया छिटो: नागरिकता, प्यान, लालपुर्जा, कर चुक्ता प्रमाणपत्र र बैंक स्टेटमेन्ट पहिले नै व्यवस्थित भएमा कर्जा स्वीकृत हुन हप्तौँ कुर्नु पर्दैन।",
        "सुरक्षित भौतिक फाइल र डिजिटल इन्क्रिप्टेड क्लाउड भल्टको संयोजनले प्राकृतिक विपत्तिमा पनि कागजात सुरक्षित राख्छ।"
      ],
      "limitations": [
        "नगद भौचर, राजस्व रसिद र कागजी बिलहरू पाउनासाथ मोबाइलबाट स्क्यान गरी सुरक्षित राख्ने तत्कालको अनुशासन चाहिन्छ।",
        "गुगल ड्राइभ वा क्लाउड भल्टमा संवेदनशील कागजात राख्दा बलियो पासवर्ड र Two-Factor Authentication (2FA) अनिवार्य हुनुपर्छ।",
        "नेपालको ओसिलो मौसममा कागजी फाइलहरूमा ढुसी लाग्न वा किराले काट्न सक्ने भएकाले वाटरप्रूफ प्लास्टिक फोल्डर प्रयोग गर्नुपर्छ।",
        "कतिपय सरकारी र बैंक प्रक्रियामा डिजिटल स्क्यान नमानेर बैंकको रातो छाप लागेकै सक्कल कपी नै अनिवार्य चाहिन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "वाणिज्य बैंकहरूमा घरकर्जा वा व्यापारिक धितो कर्जाका लागि कागजात तयार गरिरहेका ऋणीहरू।",
          "आन्तरिक राजस्व कार्यालय (IRD) मा व्यक्तिगत आयकर वा व्यवसायको विवरण बुझाउने करदाताहरू।",
          "विदेश अध्ययन वा रोजगारीको भिसाका लागि ६ महिनाको प्रमाणित बैंक स्टेटमेन्ट र आम्दानीको स्रोत देखाउनुपर्ने विद्यार्थी तथा पेसाकर्मीहरू।"
        ],
        "whoShouldAvoid": [
          "कुनै पनि बैंक कारोबार, कर वा सम्पत्ति नभएका व्यक्तिहरू।"
        ]
      },
      "decisionScenario": {
        "title": "अञ्जुको घरकर्जा आवेदन: अन्तिम समयको भागाभाग बनाम २-फोल्डर व्यवस्थित भल्ट",
        "goal": "कागजात नपुगेर कर्जा रोकिने झन्झट बिना वाणिज्य बैंकबाट रु. ७५,००,००० घरकर्जा समयमै स्वीकृत गराउने।",
        "options": [
          {
            "option": "विकल्प क: बैंकले मागेपछि मात्र घरका पुराना दराज, जुत्ताको बट्टा र मोबाइल ग्यालरीमा कागजात खोज्न थाल्ने",
            "verdict": "अत्यधिक ढिलाइ र कर्जा अस्वीकृत हुने जोखिम",
            "recommended": false,
            "rationale": "तलबको कर तिरेको रसिद वा लालपुर्जाको नक्कल नभेटिँदा बैंक प्रक्रिया २-३ हप्ता रोकिन्छ र बैना गरेको जग्गा गुम्न सक्छ।"
          },
          {
            "option": "विकल्प ख: '२-फोल्डर भल्ट' प्रणाली (सक्कल कागजातका लागि वाटरप्रूफ फाइल + फोनमा क्लाउड PDF फोल्डर) अपनाउने",
            "verdict": "संस्थागत स्तरको र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "बैंक अधिकृतले माग्नासाथ १० मिनेटभित्र सबै पीडीएफ (सैलरी स्लिप, प्यान, ६ महिनाको स्टेटमेन्ट, कर चुक्ता, लालपुर्जा) इमेलमा पठाउन सकिन्छ।"
          },
          {
            "option": "विकल्प ग: आफ्नो कर र आम्दानीको कागजात कार्यालयको लेखापाल वा HR को भरमा मात्र छोड्ने",
            "verdict": "खतरनाक परनिर्भरता",
            "recommended": false,
            "rationale": "जागिर परिवर्तन गर्दा वा पुराना वर्षहरूको कर चुक्ता प्रमाणपत्र माग्दा कार्यालयमा कागजात हराउने वा ढिलाइ हुने धेरै सम्भावना हुन्छ।"
          }
        ],
        "takeaway": "बैंकबाट सस्तो कर्जा लिने वा सम्पत्ति प्रमाणित गर्ने क्षमता कागजातको शुद्धतामा भर पर्छ। आफ्ना कर र वित्तीय कागजातलाई सुन जत्तिकै सुरक्षित राख्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालको कर कानुन अनुसार आफ्ना वित्तीय कागजातहरू कति वर्षसम्म सुरक्षित राख्नुपर्छ?",
          "a": "आयकर ऐन, २०५८ को दफा ८१ बमोजिम प्रत्येक करदाताले आफूले बुझाएको आय विवरण, कर तिरेको रसिद, बैंक स्टेटमेन्ट, अडिट रिपोर्ट र खर्चका बिल-भौचरहरू सम्बन्धित आर्थिक वर्ष समाप्त भएको कम्तीमा ५ वर्षसम्म अनिवार्य रूपमा सुरक्षित राख्नुपर्छ।"
        },
        {
          "q": "हरेक नेपाली परिवारले आफ्नो डिजिटल भल्टमा कुन-कुन महत्वपूर्ण कागजात राख्नै पर्छ?",
          "a": "यी कागजातहरूको गुणस्तरीय PDF स्क्यान सधैँ राख्नुहोस्: १) नागरिकता र राहदानी; २) प्यान कार्ड; ३) जग्गाधनी प्रमाणपुर्जा (लालपुर्जा) र ट्रेस/नक्सा; ४) जीवन तथा स्वास्थ्य बीमा पोलिसी; ५) बैंकको आधिकारिक छाप लागेको पछिल्लो स्टेटमेन्ट; ६) आन्तरिक राजस्व कार्यालयको कर चुक्ता प्रमाणपत्र; र ७) सञ्चय कोष/नागरिक लगानी कोष/सामाजिक सुरक्षा कोषको परिचयपत्र।"
        }
      ]
    }
  },
  "preventing-lifestyle-inflation-nepal": {
    "en": {
      "advantages": [
        "Defeats Parkinson's Law of Money: prevents higher income from automatically translating into higher living costs and zero wealth accumulation.",
        "Implements the '50% Rule for Raises': instantly routes half of every salary increment into automated wealth creation.",
        "Shortens financial independence timeline by years: keeping living expenses stable while income surges expands your savings rate dramatically.",
        "Protects against social posturing in urban Nepal (expensive branded cafes, luxury automobile EMIs, extravagant banquet parties)."
      ],
      "limitations": [
        "Can mistakenly lead to extreme deprivation if you never allow yourself to enjoy any quality-of-life improvements.",
        "Requires social resilience against peer comparison when colleagues upgrade to expensive vehicles on high-interest loans.",
        "Family and extended relatives in Nepal often expect higher cash gifts and wedding contributions as your professional status grows.",
        "Inflation naturally increases baseline survival costs regardless of lifestyle changes."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Young professionals experiencing rapid salary hikes, promotions, or lucrative remote software contracting roles.",
          "Foreign-returned professionals transitioning to higher-paying executive roles in Kathmandu.",
          "Anyone who earns significantly more than they did 3 years ago but still feels broke at the end of every month."
        ],
        "whoShouldAvoid": [
          "Low-income earners whose current salaries are genuinely insufficient to cover basic nutritious food, rent, and medical care."
        ]
      },
      "decisionScenario": {
        "title": "Nabin's Promotion Dilemma: Upgrading to a Luxury SUV on EMI vs The 50% Raise Allocation Rule",
        "goal": "Allocating a substantial monthly salary promotion from NPR 60,000 to NPR 1,20,000 without falling into the lifestyle inflation trap.",
        "options": [
          {
            "option": "Option A: Lease an NPR 55 Lakh luxury vehicle on a 7-year bank auto loan (NPR 45,000 monthly EMI)",
            "verdict": "Golden Handcuff Trap",
            "recommended": false,
            "rationale": "Instantly absorbs the entire NPR 60,000 salary increase through loan EMI, comprehensive insurance, servicing, and fuel. One job loss causes repossession crisis."
          },
          {
            "option": "Option B: Apply the '50% Raise Rule' (Save NPR 30,000 in SIP/CIT, upgrade lifestyle with the other NPR 30,000)",
            "verdict": "Optimal Balance & Highly Recommended",
            "recommended": true,
            "rationale": "Upgrades lifestyle meaningfully (better apartment, healthier food, fitness) while locking in an additional NPR 30,000/month compounding portfolio."
          },
          {
            "option": "Option C: Try to live on absolute zero lifestyle upgrade and save 100% of the raise",
            "verdict": "High Burnout Risk",
            "recommended": false,
            "rationale": "Extreme frugality after years of hard work causes psychological rebellion, often leading to impulsive retaliatory splurges later."
          }
        ],
        "takeaway": "True wealth is not what you spend to impress people you dislike; it is the freedom bought by the gap between what you earn and what you consume."
      },
      "faqs": [
        {
          "q": "What is the '50% Rule' for managing salary increments and bonuses?",
          "a": "Whenever you receive a salary increment, promotion, or Dashain festival bonus, automatically commit exactly 50% of the net post-tax increase to your long-term wealth building engines (mutual fund SIP, CIT, equity portfolio, or extra debt prepayment). You are completely free to spend the remaining 50% on upgrading your lifestyle, dining, travel, and personal comforts without guilt."
        },
        {
          "q": "How does lifestyle inflation specifically manifest in urban Nepal?",
          "a": "In Kathmandu, Pokhara, and other major cities, lifestyle inflation typically shows up as: 1) Upgrading from public transport/scooters to expensive cars on 7-year auto loans; 2) Shifting daily lunches from local eateries to expensive boutique cafes; 3) Upgrading to flagship smartphones on installment plans; and 4) Hosting extravagant multi-lakh marriage receptions and bratabandhas to project social prestige."
        }
      ]
    },
    "np": {
      "advantages": [
        "पार्किन्सन्स नियम (Parkinson's Law) को अन्त्य: आम्दानी बढ्दै जाँदा खर्च पनि सोही अनुपातमा बढेर बचत शून्य हुने दुष्चक्र रोक्छ।",
        "'तलब वृद्धिको ५०% नियम' लागू गर्छ: बढेको तलबको आधा रकम तुरुन्तै सम्पत्ति निर्माण र लगानीमा स्वचालित हुन्छ।",
        "आर्थिक स्वतन्त्रताको यात्रा छोट्याउँछ: खर्चलाई नियन्त्रणमा राखेर आम्दानी बढाउँदा बचत दर (Savings Rate) ह्वात्तै बढ्छ।",
        "सहरी नेपालको सामाजिक देखावटी (महँगा क्याफे, गाडीको चर्को किस्ता, भोजभतेरको तडकभडक) बाट बचाउँछ।"
      ],
      "limitations": [
        "कन्जुस्याइँको अतिमा पुगेमा जीवनको गुणस्तर सुधार गर्ने अवसरबाट आफैँ वञ्चित भइने खतरा रहन्छ।",
        "साथीभाइ र आफन्तले महँगा गाडी र ग्याजेट किन्दा देखिने सामाजिक दबाब र तुलनालाई झेल्न मानसिक दृढता चाहिन्छ।",
        "नेपाली समाजमा आम्दानी बढेको थाहा पाउनासाथ आफन्तहरूबाट सापटी र चाडपर्वमा ठूलो खर्चको अपेक्षा बढ्छ।",
        "महँगी (मुद्रास्फीति) का कारण जीवनशैली नबढाए पनि आधारभूत दाल, चामल र कोठाभाडाको खर्च स्वतः बढिरहेको हुन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "छोटो समयमै तलब वृद्धि, पदोन्नति वा विदेशी रिमोट आईटी कामबाट उच्च आम्दानी हासिल गरेका युवाहरू।",
          "विदेशबाट फर्केर नेपालमा राम्रो तलबको कार्यकारी पद सम्हालेका पेसाकर्मीहरू।",
          "३ वर्षअघि भन्दा दोब्बर कमाइ भए पनि महिनाको अन्तिममा खाता सधैँ खाली रहने समस्या भोगेका जोकोही।"
        ],
        "whoShouldAvoid": [
          "अति न्यून आम्दानी भएका परिवार, जसको कमाइले पौष्टिक खाना, कोठाभाडा र औषधोपचारको आधारभूत आवश्यकता पनि धान्न मुस्किल छ।"
        ]
      },
      "decisionScenario": {
        "title": "नबिनको पदोन्नति: गाडीको चर्को किस्ता बनाम बढेको तलबको ५०% नियम",
        "goal": "मासिक तलब रु. ६०,००० बाट बढेर रु. १,२०,००० पुग्दा जीवनशैलीको पासोमा नफसी सम्पत्ति निर्माण गर्ने।",
        "options": [
          {
            "option": "विकल्प क: बैंकबाट ७ वर्षे अटो लोन लिएर रु. ५५ लाखको नयाँ SUV गाडी किन्ने (मासिक किस्ता रु. ४५,०००)",
            "verdict": "सुनको हत्कडी (ऋणको पासो)",
            "recommended": false,
            "rationale": "बढेको ६० हजार तलब गाडीको किस्ता, फुल इन्स्योरेन्स, सर्भिसिङ र पेट्रोलमै स्वाहा हुन्छ। जागिरमा सानो धक्का लाग्नासाथ गाडी लिलामी हुने जोखिम हुन्छ।"
          },
          {
            "option": "विकल्प ख: '५०% को नियम' लागू गर्ने (रु. ३०,००० थप लगानी/SIP मा हाल्ने र बाँकी रु. ३०,००० ले जीवनस्तर उकास्ने)",
            "verdict": "उत्कृष्ट सन्तुलन र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "राम्रो अपार्टमेन्ट र पौष्टिक खाना खाएर जीवनस्तर पनि सुध्रिन्छ र महिनाको थप ३० हजार लगानी हुँदा केही वर्षमै करोडौँको सम्पत्ति बन्छ।"
          },
          {
            "option": "विकल्प ग: बढेको तलबबाट एक रुपैयाँ पनि खर्च नबढाई १००% नै बचत गर्न खोज्ने",
            "verdict": "मानसिक थकानको जोखिम",
            "recommended": false,
            "rationale": "धेरै मिहिनेतपछि पनि जीवनस्तरमा कुनै सुधार नहुँदा मानिस निराश हुन्छ र पछि गएर एकैपटक अनावश्यक वस्तुमा ठूलो फजुल खर्च गर्न पुग्छ।"
          }
        ],
        "takeaway": "सच्चा सम्पत्ति भनेको नमन पराउने मान्छेलाई देखाउन गरिने फजुल खर्च होइन; कमाइ र खर्चबीचको दूरीले किनिने स्वतन्त्रता हो।"
      },
      "faqs": [
        {
          "q": "तलब वृद्धि र बोनस व्यवस्थापनका लागि '५०% नियम' के हो?",
          "a": "जब तपाईंको तलब बढ्छ वा चाडपर्वको बोनस आउँछ, बढेको खुद रकमको ठीक ५०% तुरुन्तै दीर्घकालीन लगानी (म्युचुअल फन्ड SIP, नागरिक लगानी कोष, सेयर बजार वा पुरानो ऋण चुक्ता) मा लगाउनुहोस्। बाँकी ५०% रकमले कुनै ग्लानि बिना आफ्नो खानपिन, घुमघाम, ग्याजेट वा जीवनशैली उकास्न स्वतन्त्र रूपमा खर्च गर्नुहोस्।"
        },
        {
          "q": "नेपाली सहरहरूमा जीवनशैली महँगो हुने (Lifestyle Inflation) मुख्य लक्षणहरू के-के हुन्?",
          "a": "काठमाडौँ र पोखरा जस्ता सहरमा यो मुख्यतया चार तरिकाले देखिन्छ: १) सार्वजनिक यातायात वा पुरानो बाइक छोडेर बैंक ऋणमा महँगो गाडी किन्ने; २) सामान्य खाजा पसल छोडेर दैनिक महँगा ब्रान्डेड क्याफे धाउने; ३) किस्ताबन्दीमा महँगो फ्ल्यागसिप स्मार्टफोन फेरिरहने; र ४) समाजमा धाक देखाउन विवाह र व्रतबन्धमा लाखौँको अनावश्यक फजुल खर्च गर्ने।"
        }
      ]
    }
  },
  "annual-net-worth-audit-goal-setting": {
    "en": {
      "advantages": [
        "Reveals the ultimate financial truth: cuts through high-income illusions by measuring Assets minus Liabilities.",
        "Aligns with the Nepali fiscal calendar (Ashar-end / New Fiscal Year in Shrawan) when annual audits, taxes, and bank statements close.",
        "Detects asset allocation imbalances: alerts you if 90% of your net worth is illiquid real estate with zero liquid emergency cushion.",
        "Transforms vague resolutions into concrete quantifiable annual targets (e.g., growing net worth by NPR 8,00,000 this year)."
      ],
      "limitations": [
        "Requires honest conservative valuation of illiquid assets (land, ancestral property) rather than wishful inflated asking prices.",
        "Volatile NEPSE market corrections can make net worth drop year-over-year despite disciplined high savings.",
        "Takes 2 to 3 hours of focused annual documentation gathering (tax clearances, loan balances, insurance surrender values).",
        "Can cause emotional friction between spouses if spending habits caused net worth stagnation."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Working professionals, business owners, and families wanting to evaluate their true financial health once a year.",
          "Mid-career individuals (ages 30-50) tracking their trajectory toward financial independence and retirement readiness.",
          "Anyone who earned substantial income over the past 12 months but wants to verify how much actual wealth was retained."
        ],
        "whoShouldAvoid": [
          "Students or new graduates in their first 3 months of employment who have not yet established baseline assets or liabilities."
        ]
      },
      "decisionScenario": {
        "title": "Sunita's Financial Progress: High Annual Income Trap vs Net Worth Scorecard",
        "goal": "Evaluating true financial advancement after earning an impressive NPR 18,00,000 across the past fiscal year.",
        "options": [
          {
            "option": "Option A: Gauge financial success purely by annual gross income and active bank account balance",
            "verdict": "Deceptive Vanity Metric",
            "recommended": false,
            "rationale": "Sunita earned NPR 18 Lakhs but accumulated NPR 4 Lakhs in credit card and personal debt; her true wealth barely moved."
          },
          {
            "option": "Option B: Conduct an Ashar-End Net Worth Audit (Total Liquid & Invested Assets minus Total Liabilities)",
            "verdict": "True Reality & Highly Recommended",
            "recommended": true,
            "rationale": "Uncovers that despite high earnings, excessive vehicle EMI and discretionary spending kept net worth growth at only 4%. Sparks vital course correction for the new fiscal year."
          },
          {
            "option": "Option C: Inflate net worth by valuing ancestral land at unrealistic speculative market broker prices",
            "verdict": "Delusional Paper Wealth",
            "recommended": false,
            "rationale": "Illiquid land that cannot be sold within 90 days at that price creates a false sense of security, masking dangerous liquid cash poverty."
          }
        ],
        "takeaway": "Income is merely the fuel; Net Worth is the vehicle. Do not brag about how much cash flows through your hands; measure how much permanently sticks to your balance sheet."
      },
      "faqs": [
        {
          "q": "How do you calculate your Net Worth in Nepal accurately?",
          "a": "Use the universal balance sheet equation: Net Worth = Total Assets - Total Liabilities. Total Assets includes: 1) Cash & Savings Accounts; 2) Fixed Deposits; 3) Stock & Mutual Fund market value; 4) Retirement Funds (EPF, CIT, SSF balances); 5) Gold/Silver bullion; and 6) Conservatively valued Real Estate. Total Liabilities includes: 1) Home Loans; 2) Auto Loans; 3) Education/Personal Loans; 4) Credit card debt; and 5) Informal family borrowings."
        },
        {
          "q": "Why is Ashar-end (mid-July) the optimal time for an annual financial audit in Nepal?",
          "a": "The Nepali fiscal year officially closes on Ashar 31st. At this exact time, banks credit annual savings interest, employers calculate annual bonuses and tax adjustments, public companies report final quarterly financials, and the Inland Revenue Department opens tax filing portals for the upcoming year."
        }
      ]
    },
    "np": {
      "advantages": [
        "वित्तीय सत्यताको ऐना: कुल सम्पत्तिबाट सम्पूर्ण ऋण (दायित्व) घटाएर वास्तविक खुद सम्पत्ति (Net Worth) नाप्छ र उच्च कमाइको भ्रम चिर्छ।",
        "नेपाली आर्थिक वर्षको अन्त्य (असार मसान्त / साउन १) सँग ठ्याक्कै मेल खान्छ, जहाँ बैंकको ब्याज, कर र स्टेटमेन्ट क्लोजिङ हुन्छन्।",
        "सम्पत्ति असन्तुलन औँल्याउँछ: कुल सम्पत्तिको ९०% जग्गामा अड्किएर हातमा आपत्कालीन नगद नभएको गम्भीर जोखिम समयमै देखाउँछ।",
        "हचुवाका नयाँ वर्षका संकल्पलाई ठोस अंकमा आधारित वार्षिक लक्ष्य (जस्तै: यो वर्ष खुद सम्पत्ति रु. ८ लाखले बढाउने) मा बदल्छ।"
      ],
      "limitations": [
        "जग्गा र पैतृक सम्पत्तिको मूल्य जोड्दा बजारको हावादारी मूल्य नराखी यथार्थपरक न्यूनतम मूल्य राख्ने इमानदारी चाहिन्छ।",
        "नेप्से सेयर बजार घटेको वर्षमा राम्रो बचत गर्दागर्दै पनि खुद सम्पत्तिको कुल अंक घटेको देखिन सक्छ।",
        "सबै बैंक खाता, ऋणको मौज्दात, प्यान कर विवरण र बीमाको हिसाब संकलन गर्न वर्षमा एकपटक २-३ घण्टा समय दिनुपर्छ।",
        "परिवारमा अनावश्यक खर्चले सम्पत्ति बढ्न नसकेको देखिँदा श्रीमान्-श्रीमतीबीच केहीबेर मनमुटाव हुन सक्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "वर्षमा एकपटक आफ्नो वास्तविक आर्थिक प्रगतिको निष्पक्ष लेखाजोखा गर्न चाहने पेसाकर्मी, व्यवसायी र परिवारहरू।",
          "३० देखि ५० वर्ष उमेर समूहका व्यक्तिहरू जो अवकाश र वित्तीय स्वतन्त्रतातर्फ आफ्नो दूरी कति बाँकी छ भनेर हेर्न चाहन्छन्।",
          "वर्षभरि राम्रो कमाइ गरे पनि वास्तवमा कति सम्पत्ति जोडियो भनेर यकिन गर्न चाहने जोकोही।"
        ],
        "whoShouldAvoid": [
          "भर्खरै कलेज सकेर १-२ महिना मात्र जागिर सुरु गरेका विद्यार्थीहरू जसको कुनै सम्पत्ति वा ऋणको जग बनिसकेको छैन।"
        ]
      },
      "decisionScenario": {
        "title": "सुनिताको आर्थिक प्रगति: उच्च वार्षिक आम्दानीको भ्रम बनाम खुद सम्पत्ति (Net Worth) अडिट",
        "goal": "गएको आर्थिक वर्षमा रु. १८,००,००० को आकर्षक कमाइपछि आफ्नो वास्तविक सम्पत्ति वृद्धि पत्ता लगाउने।",
        "options": [
          {
            "option": "विकल्प क: वार्षिक कुल आम्दानी र बैंकमा देखिएको तत्कालको मौज्दात हेरेर आफू धनी भएको मान्ने",
            "verdict": "भ्रमपूर्ण र सतही मापदण्ड",
            "recommended": false,
            "rationale": "सुनिताले १८ लाख कमाए पनि गाडी र व्यक्तिगत कर्जामा ४ लाख ऋण थपिएको थियो; वास्तवमा उनको सम्पत्ति खासै बढेको थिएन।"
          },
          {
            "option": "विकल्प ख: असार मसान्तमा कुल सम्पत्तिबाट सबै ऋण घटाएर खुद सम्पत्ति (Net Worth) अडिट गर्ने",
            "verdict": "वास्तविक यथार्थ र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "उच्च आम्दानीका बाबजुद महँगो गाडीको किस्ता र फजुल खर्चले गर्दा सम्पत्ति जम्मा ४% मात्र बढेको देखियो, जसले नयाँ आर्थिक वर्षका लागि तुरुन्तै खर्च सुधार्न मद्दत गर्यो।"
          },
          {
            "option": "विकल्प ग: गाउँको पुर्ख्यौली जग्गालाई दलालले भनेको काल्पनिक चर्को मूल्यमा जोडेर आफूलाई करोडपति देखाउने",
            "verdict": "कागजी भ्रम",
            "recommended": false,
            "rationale": "तत्काल बेच्न नसकिने जग्गाको बढी मूल्य राख्दा हातमा नगदको चरम अभाव भए पनि मानिस झूटा सुरक्षाको भ्रममा बाँचिरहन्छ।"
          }
        ],
        "takeaway": "आम्दानी इन्धन मात्र हो; खुद सम्पत्ति (Net Worth) वास्तविक गाडी हो। तपाईंको हातबाट कति पैसा बग्यो भन्ने होइन, कति पैसा स्थायी सम्पत्ति बनेर बस्यो भन्ने कुराले धनी बनाउँछ।"
      },
      "faqs": [
        {
          "q": "नेपालमा आफ्नो खुद सम्पत्ति (Net Worth) को सही हिसाब कसरी निकाल्ने?",
          "a": "यो आधारभूत सूत्र प्रयोग गर्नुहोस्: खुद सम्पत्ति = कुल सम्पत्ति - कुल ऋण। कुल सम्पत्तिमा समावेश गर्नुहोस्: १) बैंक बचत र नगद; २) मुद्दती निक्षेप; ३) सेयर र म्युचुअल फन्डको बजार मूल्य; ४) अवकाश कोष (कर्मचारी सञ्चय कोष, नागरिक लगानी कोष, SSF); ५) सुन/चाँदी; र ६) घरजग्गाको यथार्थपरक न्यूनतम मूल्य। कुल ऋणमा घटाउनुहोस्: १) घरकर्जा; २) अटो लोन; ३) शैक्षिक/व्यक्तिगत कर्जा; ४) क्रेडिट कार्डको बाँकी रकम; र ५) तिर्नुपर्ने व्यक्तिगत सापटी।"
        },
        {
          "q": "नेपालमा वार्षिक वित्तीय अडिट गर्न असार मसान्त नै किन सबैभन्दा उत्तम समय हो?",
          "a": "नेपालको आर्थिक वर्ष असार मसान्तमा सकिन्छ। यही समयमा बैंकहरूले बचत खाताको वार्षिक ब्याज जम्मा गर्छन्, कार्यालयहरूले वर्षभरिको कर समायोजन र बोनस हिसाब गर्छन्, सूचीकृत कम्पनीहरूले वित्तीय विवरण सार्वजनिक गर्छन् र साउन १ देखि आन्तरिक राजस्व कार्यालयमा नयाँ कर चुक्ताको प्रक्रिया सुरु हुन्छ।"
        }
      ]
    }
  },
  "cost-of-delay-retirement-nepal": {
    "en": {
      "advantages": [
        "Demonstrates the brutal mathematics of compounding: starting at age 25 requires 75% less monthly capital than starting at age 35 to hit the same goal.",
        "Protects against Nepal's high historical inflation (6-7% average), which erodes the future purchasing power of uninvested cash.",
        "Enables taking smart equity exposure in your twenties when your risk capacity and recovery time horizon are at their peak.",
        "Reduces reliance on family or children in old age, guaranteeing sovereign dignified retirement."
      ],
      "limitations": [
        "Young professionals in Nepal face immediate competing pressures: marriage expenses, parental healthcare, and buying real estate.",
        "Compound interest feels agonizingly slow and invisible during the first 5 to 7 years.",
        "Requires high consistency through multiple political changes and economic/NEPSE bear markets.",
        "Cannot be accelerated by rushing into hyper-speculative penny stocks later to 'make up for lost time'."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Young earners in their early twenties (ages 20-28) who mistakenly believe retirement planning is only for people over 40.",
          "Mid-career professionals in their thirties needing an urgent wake-up call to start catch-up retirement contributions.",
          "Parents wanting to teach their teenage or college-going children the life-altering value of early investing."
        ],
        "whoShouldAvoid": [
          "Senior citizens already in active retirement (who must focus on capital preservation and systematic withdrawal rather than accumulation)."
        ]
      },
      "decisionScenario": {
        "title": "Manish vs Deepak: Starting an NPR 5,000 SIP at Age 23 vs Delaying to Age 33",
        "goal": "Accumulating a comfortable retirement corpus by age 55 in Nepal assuming a conservative 12% CAGR equity mutual fund return.",
        "options": [
          {
            "option": "Option A: Manish starts investing NPR 5,000/month at age 23 and stops after 10 years (total invested: NPR 6,00,000)",
            "verdict": "Compounding Triumph & Highly Recommended",
            "recommended": true,
            "rationale": "By age 55, Manish's portfolio grows to approximately NPR 1.76 Crore despite investing for only 10 years and stopping at age 33."
          },
          {
            "option": "Option B: Deepak waits until age 33 to start, investing NPR 5,000/month continuously for 22 years until age 55 (total invested: NPR 13,20,000)",
            "verdict": "Cost of Delay Penalty",
            "recommended": false,
            "rationale": "Deepak invests more than double the cash (NPR 13.2 Lakhs vs 6 Lakhs) but ends up with only ~NPR 58 Lakhs at age 55. Delaying 10 years cost him over NPR 1.1 Crore in wealth."
          },
          {
            "option": "Option C: Delay retirement investing until age 45, hoping to invest NPR 50,000/month from a peak executive salary",
            "verdict": "High Stress & Extreme Vulnerability",
            "recommended": false,
            "rationale": "Requires massive monthly cash outlays when college fees for children and parental medical bills are at their peak, leaving zero margin for error."
          }
        ],
        "takeaway": "In retirement compounding, time is vastly more powerful than capital. Ten years of early delay cannot be repaired even by doubling your monthly investments later."
      },
      "faqs": [
        {
          "q": "Why is delaying retirement planning by 10 years so devastating to your ultimate corpus?",
          "a": "Because compound interest produces the vast majority of its gains in the final decades. At a 12% annual return, your money doubles approximately every 6 years. Missing 10 years deprives your portfolio of nearly two full doubling cycles, destroying up to 60-70% of your potential terminal wealth."
        },
        {
          "q": "What is the minimum amount a 22-year-old student or fresh graduate in Nepal needs to start?",
          "a": "You can start an open-ended mutual fund Systematic Investment Plan (SIP) in Nepal with as little as NPR 1,000 per month through fund managers like NIBL Ace, Siddhartha Capital, or Sanima Capital. The habit and timeline matter far more than the initial rupee amount."
        }
      ]
    },
    "np": {
      "advantages": [
        "चक्रवर्ती ब्याजको गणितीय चमत्कार: २५ वर्षमा सुरु गर्दा ३५ वर्षमा सुरु गर्नेको तुलनामा एउटै लक्ष्य भेट्टाउन ७५% कम मासिक रकम लगानी गरे पुग्छ।",
        "नेपालको उच्च मुद्रास्फीति (औसत ६-७%) बाट बचाउँछ, जसले लगानी नगरिएको नगदको क्रयशक्ति बर्सेनि खाइदिन्छ।",
        "युवावस्थामा जोखिम वहन गर्ने क्षमता र समय धेरै हुने हुँदा सेयर बजार र म्युचुअल फन्डबाट उच्च प्रतिफल कमाउने अवसर दिन्छ।",
        "बुढ्यौलीमा छोराछोरी वा आफन्तको भर पर्नु नपर्ने गरी स्वाभिमानी र आत्मनिर्भर अवकाशको ग्यारेन्टी गर्छ।"
      ],
      "limitations": [
        "नेपालका युवाहरूमा विवाह, घरखर्च, र बाबुआमाको स्वास्थ्य जस्ता सुरुवाती आर्थिक दबाबले बचत छुट्याउन कठिन हुन सक्छ।",
        "सुरुका ५ देखि ७ वर्षसम्म चक्रवर्ती ब्याजको प्रतिफल सुस्त र आँखाले नदेखिने जस्तो लाग्छ।",
        "नेपालको राजनीतिक अस्थिरता र सेयर बजारका मन्दीहरूमा पनि नडगमगाई निरन्तर लगानी गर्ने धैर्य चाहिन्छ।",
        "पछि गएर 'छुटेको समय पूर्ति गर्न' भन्दै हावादारी र अत्यधिक जोखिमयुक्त सेयरमा फस्ने गल्ती हुन सक्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "२० देखि २८ वर्ष उमेरका युवाहरू जो 'अवकाशको योजना त ४० वर्ष कटेपछि गर्ने हो' भन्ने भ्रममा छन्।",
          "३० को दशकमा पुगेका पेसाकर्मीहरू जसलाई अब ढिला नगरी तुरुन्तै अवकाश कोष सुरु गर्नुपर्ने दबाब छ।",
          "आफ्ना कलेज पढ्ने छोराछोरीलाई सानै उमेरदेखि लगानीको शक्ति सिकाउन चाहने अभिभावकहरू।"
        ],
        "whoShouldAvoid": [
          "हाल अवकास जीवन बिताइरहेका ज्येष्ठ नागरिकहरू (जसले अब पुँजी बढाउने होइन, भएको रकम सुरक्षित राख्दै पेन्सन झिक्नुपर्छ)।"
        ]
      },
      "decisionScenario": {
        "title": "मनिष बनाम दीपक: २३ वर्षमा मासिक रु. ५,००० को SIP सुरु गर्ने कि ३३ वर्षसम्म कुर्ने?",
        "goal": "वार्षिक १२% औसत प्रतिफल दिने इक्विटी म्युचुअल फन्डबाट ५५ वर्षको उमेरमा सम्मानजनक अवकाश कोष बनाउने।",
        "options": [
          {
            "option": "विकल्प क: मनिषले २३ वर्षको उमेरमा मासिक रु. ५,००० को SIP सुरु गर्छ र १० वर्ष (३३ वर्षको उमेर) पछि लगानी बन्द गर्छ (कुल लगानी: रु. ६ लाख)",
            "verdict": "चक्रवर्ती ब्याजको जित र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "१० वर्ष मात्र लगानी गरेर छोडे पनि ५५ वर्ष पुग्दा मनिषको कोष बढेर करिब रु. १ करोड ७६ लाख पुग्छ।"
          },
          {
            "option": "विकल्प ख: दीपकले ३३ वर्षसम्म कुर्दै ५५ वर्षसम्म लगातार २२ वर्ष मासिक रु. ५,००० लगानी गर्छ (कुल लगानी: रु. १३ लाख २० हजार)",
            "verdict": "ढिलाइको ठूलो सजाय",
            "recommended": false,
            "rationale": "दीपकले मनिष भन्दा दोब्बरभन्दा बढी (१३.२ लाख) नगद खन्याए पनि ५५ वर्षमा जम्मा करिब रु. ५८ लाख मात्र जोडिन्छ। १० वर्ष ढिला गर्दा दीपकले १ करोड १८ लाख रुपैयाँ गुमायो।"
          },
          {
            "option": "विकल्प ग: ४५ वर्षसम्म केही नगर्ने र पछि ठूलो तलब भएपछि महिनाको रु. ५०,००० हाल्ने योजना बनाउने",
            "verdict": "अत्यधिक जोखिमपूर्ण र तनावपूर्ण",
            "recommended": false,
            "rationale": "त्यतिबेला छोराछोरीको उच्च शिक्षा र बाबुआमाको औषधोपचार खर्च उच्च हुन्छ, र बजारमा सानो मन्दी आउनासाथ योजना ध्वस्त हुन्छ।"
          }
        ],
        "takeaway": "अवकाशको लगानीमा रकम भन्दा समय धेरै गुणा बलियो हुन्छ। सुरुवाती १० वर्षको ढिलाइलाई पछि जतिसुकै धेरै पैसा खन्याएर पनि पूर्ति गर्न सकिँदैन।"
      },
      "faqs": [
        {
          "q": "अवकाशको योजना १० वर्ष ढिला सुरु गर्दा किन यति ठूलो नोक्सानी हुन्छ?",
          "a": "किनभने चक्रवर्ती ब्याजको वास्तविक जादु अन्तिम दशकहरूमा देखिन्छ। वार्षिक १२% प्रतिफलमा तपाईंको पैसा हरेक ६ वर्षमा दोब्बर हुन्छ। १० वर्ष ढिला गर्नु भनेको झन्डै दुईवटा दोब्बर हुने चक्र गुमाउनु हो, जसले तपाईंको अन्तिम सम्पत्तिको ६० देखि ७० प्रतिशत हिस्सा नष्ट गरिदिन्छ।"
        },
        {
          "q": "नेपालमा २२ वर्षको विद्यार्थी वा भर्खर जागिर सुरु गरेको व्यक्तिले कति रकमबाट सुरु गर्न सक्छ?",
          "a": "नेपालमा खुलामुखी म्युचुअल फन्ड (Open-ended Mutual Fund) को SIP मार्फत महिनाको जम्मा रु. १,००० बाटै लगानी सुरु गर्न सकिन्छ। रकम कति सानो छ भन्ने कुराले फरक पार्दैन; कति चाँडो सुरु गर्नुभयो भन्ने कुराले जीवन बदल्छ।"
        }
      ]
    }
  },
  "calculating-retirement-corpus-nepal": {
    "en": {
      "advantages": [
        "Replaces dangerous guesswork with an actuarial formula customized for Nepal's inflation and life expectancy.",
        "Prevents the common illusion of nominal wealth (e.g., discovering why NPR 50 Lakhs today will only buy NPR 10 Lakhs worth of goods in 25 years).",
        "Incorporates post-retirement healthcare inflation (which runs at 8-10% annually in private hospitals in Nepal).",
        "Gives you a definitive target number so you can track your exact monthly SIP funding progress."
      ],
      "limitations": [
        "Unpredictable long-term inflation in Nepal linked to Indian economic cycles and import dependence.",
        "Life expectancy projections may change as modern medical treatments advance.",
        "Requires re-evaluating calculations every 3-5 years to adjust for actual salary growth and market returns.",
        "The sheer size of the calculated future corpus (often NPR 3 to 6 Crores) can initially shock and intimidate beginners."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Individuals between ages 25 and 45 planning their long-term financial roadmap and retirement nest egg.",
          "Foreign-employed Nepalis in the Gulf, Europe, or North America planning their eventual repatriation and retirement in Nepal.",
          "Anyone who wonders: 'Exactly how many Crores do I need in the bank before I can safely quit working?'"
        ],
        "whoShouldAvoid": [
          "Individuals with immediate unmanaged emergency debt who must first eliminate short-term high-interest liabilities."
        ]
      },
      "decisionScenario": {
        "title": "Gita's Retirement Target: The NPR 50 Lakh Illusion vs Inflation-Adjusted Corpus",
        "goal": "Determining the realistic retirement corpus needed at age 55 to sustain a current monthly living expense of NPR 40,000 for 25 post-retirement years.",
        "options": [
          {
            "option": "Option A: Target an arbitrary NPR 50,00,000 corpus, assuming bank FD interest will fund retirement forever",
            "verdict": "Catastrophic Shortfall Risk",
            "recommended": false,
            "rationale": "At 6.5% inflation over 20 years, an NPR 40,000 lifestyle will cost over NPR 1,40,000/month at age 55. An NPR 50 Lakh FD will run completely dry within 3.5 years."
          },
          {
            "option": "Option B: Calculate the true inflation-adjusted corpus using the 25x Annual Expense Rule (~NPR 2.6 Crore)",
            "verdict": "Mathematically Sound & Recommended",
            "recommended": true,
            "rationale": "Future monthly expense of NPR 1,40,000 equals NPR 16.8 Lakhs annually. Multiplying by 25 gives ~NPR 2.6 Crore, which can be systematically accumulated with an NPR 15,000/month equity SIP."
          },
          {
            "option": "Option C: Assume government SSF or family ancestral land sale will automatically cover all retirement needs",
            "verdict": "High Vulnerability",
            "recommended": false,
            "rationale": "Land is illiquid and property disputes are rampant in Nepal; SSF basic pension provides a baseline safety net but cannot cover full private medical emergencies."
          }
        ],
        "takeaway": "Never plan retirement in today's rupees. Inflation is an invisible thief that cuts your purchasing power in half every 11 years in Nepal."
      },
      "faqs": [
        {
          "q": "What is the 4-step formula to calculate your retirement corpus in Nepal?",
          "a": "1) Determine your current annual living expenses; 2) Adjust for future inflation over your working years using `FV = PV * (1 + r)^n` (assume 6.5% inflation); 3) Determine your retirement duration (typically 25 years, from age 55 to 80); 4) Calculate the required corpus using a real return assumption (e.g., 2-3% net real return post-retirement), or multiply your first year's retirement expense by 25 to 30."
        },
        {
          "q": "Why must healthcare costs be calculated with a higher inflation rate in Nepal?",
          "a": "While general consumer price inflation (CPI) published by NRB averages 5-7%, medical inflation in private hospitals in Kathmandu and major cities regularly exceeds 9-11% due to imported diagnostic equipment, foreign pharmaceuticals, and rising specialist doctor fees."
        }
      ]
    },
    "np": {
      "advantages": [
        "हचुवाको भरमा होइन, नेपालको वास्तविक महँगी र औषत आयु अनुसार गणितीय सूत्रमा आधारित सही लक्ष्य दिन्छ।",
        "अंकको भ्रम चिर्छ: आजको रु. ५० लाखले २५ वर्षपछि जम्मा १० लाख बराबरको सामान मात्र किन्न सक्छ भन्ने सत्यता समयमै बुझाउँछ।",
        "अवकाशपछिको औषधोपचार महँगी (जुन निजी अस्पतालहरूमा बर्सेनि ८-१०% ले बढ्छ) लाई हिसाबमा समावेश गर्छ।",
        "तोकिएको लक्ष्य अंक प्रदान गर्छ, जसले गर्दा आजैदेखि महिनाको कति रकम SIP मा लगानी गर्नुपर्छ भन्ने स्पष्ट खाका कोरिन्छ।"
      ],
      "limitations": [
        "नेपालको दीर्घकालीन मुद्रास्फीति भारतीय अर्थतन्त्र र आयातमा निर्भर रहने हुँदा ठ्याक्कै भविष्यवाणी गर्न कठिन हुन्छ।",
        "स्वास्थ्य सेवाको विकाससँगै औषत आयु ८० वर्षभन्दा माथि पुग्न सक्ने हुँदा थप वर्षहरूको खर्च जोड्नुपर्ने हुन सक्छ।",
        "आफ्नो आम्दानी र बजारको अवस्था हेरेर हरेक ३-५ वर्षमा यो हिसाबलाई पुनर्तालिकीकरण (Recalibrate) गर्नुपर्छ।",
        "भविष्यको आवश्यक रकम (करिब ३ देखि ६ करोड रुपैयाँ) सुन्दा सुरुमा नयाँ लगानीकर्ता डराउन वा आत्तिन सक्छन्।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "२५ देखि ४५ वर्ष उमेर समूहका व्यक्तिहरू जो आफ्नो दीर्घकालीन अवकाश कोषको स्पष्ट खाका बनाउन चाहन्छन्।",
          "खाडी, युरोप वा अमेरिकामा रहेका नेपालीहरू जो भविष्यमा नेपाल फर्केर ढुक्कसँग अवकाश जीवन बिताउने योजनामा छन्।",
          "'महिनाको कति पैसा बचत गर्दा म ५५ वर्षमा कामबाट पूर्ण अवकाश लिन सक्छु?' भन्ने प्रश्नको उत्तर खोजिरहेका जोकोही।"
        ],
        "whoShouldAvoid": [
          "हाल चर्को ब्याजको व्यक्तिगत ऋणमा डुबेका व्यक्तिहरू, जसले पहिले अल्पकालीन ऋण चुक्ता गर्नुपर्छ।"
        ]
      },
      "decisionScenario": {
        "title": "गीताको अवकाश लक्ष्य: रु. ५० लाखको भ्रम बनाम महँगी समायोजन गरिएको वास्तविक कोष",
        "goal": "५५ वर्षको उमेरमा हालको मासिक रु. ४०,००० बराबरको जीवनस्तर २५ वर्षसम्म धान्न आवश्यक पर्ने सही अवकाश कोष पत्ता लगाउने।",
        "options": [
          {
            "option": "विकल्प क: हचुवामा रु. ५०,००,००० भए जिन्दगीभर बैंकको मुद्दती ब्याजले खान पुग्छ भन्ने सोच्ने",
            "verdict": "चरम आर्थिक संकटको जोखिम",
            "recommended": false,
            "rationale": "६.५% महँगीले २० वर्षपछि आजको ४० हजारको खर्च बढेर महिनाको १ लाख ४० हजार पुग्छ। ५० लाखको मुद्दती निक्षेप जम्मा ३.५ वर्षमै रित्तिन्छ।"
          },
          {
            "option": "विकल्प ख: २५ गुणाको नियम प्रयोग गरी महँगी समायोजन गरिएको वास्तविक कोष (~रु. २.६ करोड) को लक्ष्य बनाउने",
            "verdict": "गणितीय रूपमा सही र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "भविष्यको मासिक १.४ लाख खर्चलाई वर्षको १६.८ लाख हुन्छ। यसलाई २५ ले गुणन गर्दा करिब २.६ करोड चाहिन्छ, जुन आजैबाट महिनाको १५ हजारको SIP बाट सहजै जोडिन्छ।"
          },
          {
            "option": "विकल्प ग: सामाजिक सुरक्षा कोष (SSF) वा गाउँको जग्गा बेचेर अवकाश धानिएला भनेर ढुक्क बस्ने",
            "verdict": "अत्यधिक जोखिमपूर्ण परनिर्भरता",
            "recommended": false,
            "rationale": "जग्गा तुरुन्तै बिक्दैन र अंशबन्डाको विवाद हुन सक्छ; SSF को सामान्य पेन्सनले बुढ्यौलीको महँगो निजी अस्पतालको खर्च धान्न सक्दैन।"
          }
        ],
        "takeaway": "अवकाशको योजना कहिल्यै आजको मूल्यमा नबनाउनुहोस्। महँगी यस्तो अदृश्य चोर हो जसले नेपालमा हरेक ११ वर्षमा तपाईंको पैसाको क्रयशक्ति आधा घटाइदिन्छ।"
      },
      "faqs": [
        {
          "q": "नेपालमा आफ्नो अवकाश कोष निकाल्ने ४-बुँदे सूत्र के हो?",
          "a": "१) आफ्नो हालको वार्षिक आधारभूत खर्च निकाल्नुहोस्; २) भविष्यको महँगी जोडेर अवकाश हुने वर्षको खर्च निकाल्नुहोस् (`FV = PV * (1 + r)^n`, जहाँ r = ६.५%); ३) अवकाशपछिको अवधि तय गर्नुहोस् (जस्तै ५५ देखि ८० वर्षसम्म २५ वर्ष); ४) वास्तविक प्रतिफलका आधारमा २५ देखि ३० गुणाको सूत्र प्रयोग गरी कुल कोष निकाल्नुहोस्।"
        },
        {
          "q": "नेपालमा स्वास्थ्य उपचारको खर्चमा सामान्य महँगीभन्दा बढी दर किन जोड्नुपर्छ?",
          "a": "नेपाल राष्ट्र बैंकले निकाल्ने उपभोक्ता महँगी (CPI) औसत ५-७% भए पनि काठमाडौँ र ठूला सहरका निजी अस्पतालहरूको औषधोपचार महँगी बर्सेनि ९ देखि ११% ले बढिरहेको छ। आधुनिक प्रविधि, आयातित औषधि र विशेषज्ञ चिकित्सकको शुल्कका कारण स्वास्थ्य खर्च धेरै तीव्र गतिमा बढ्छ।"
        }
      ]
    }
  },
  "social-security-fund-ssf-pension-model": {
    "en": {
      "advantages": [
        "Provides statutory lifelong pension: pays monthly pension until death, with 50% continuing to spouse upon demise.",
        "Total 31% contribution: 20% funded by employer + 11% deducted from employee basic salary, creating massive forced savings.",
        "Comprehensive social safety net: includes medical treatment (up to NPR 1 Lakh/year), maternity benefit, disability pension, and accidental insurance.",
        "Significant income tax benefits: SSF contributions qualify for direct income deductions up to NPR 5,00,000 or 1/3 of taxable salary under Nepal tax laws."
      ],
      "limitations": [
        "Rigid lock-in: old-age pension funds cannot be withdrawn as a lump sum before reaching age 60.",
        "Low historic investment yields: SSF primarily deposits funds in bank fixed deposits and treasury bills, trailing secondary equity market returns.",
        "Dependent on ongoing regulatory policies and government sovereign management stability.",
        "Medical claim reimbursement at empaneled hospitals requires administrative documentation and pre-authorization."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Formal private sector salaried employees whose employers are legally mandated to register under the Social Security Act 2074.",
          "Individuals seeking guaranteed lifetime cash flow in retirement without taking stock market volatility risks.",
          "Employees prioritizing comprehensive workplace health, maternity, and disability protections for their families."
        ],
        "whoShouldAvoid": [
          "Informal contract freelancers or foreign remote workers who are not yet covered under formal employer contribution mandates."
        ]
      },
      "decisionScenario": {
        "title": "Ramesh's Job Choice: Formal SSF-Enrolled Corporate Role vs 15% Higher Cash Salary Under Informal Contract",
        "goal": "Evaluating two job offers: Company A offering NPR 70,000 gross with full SSF benefits vs Company B offering NPR 80,000 in cash with zero benefits.",
        "options": [
          {
            "option": "Option A: Choose Company B for immediate NPR 80,000 cash in hand with no SSF contribution",
            "verdict": "Short-Sighted & Risky",
            "recommended": false,
            "rationale": "Zero medical cover, zero accident compensation, zero employer retirement contribution. If injured, medical costs fall 100% on personal pocket."
          },
          {
            "option": "Option B: Choose Company A with NPR 70,000 gross + full 31% SSF contribution",
            "verdict": "Significantly Higher Total Compensation & Recommended",
            "recommended": true,
            "rationale": "The employer contributes an extra 20% (NPR 14,000) on top. Total economic value is NPR 84,000/month plus health insurance, accidental coverage, and lifetime pension."
          },
          {
            "option": "Option C: Work at Company A but request the employer to bypass SSF registration to avoid the 11% salary deduction",
            "verdict": "Illegal & Self-Defeating",
            "recommended": false,
            "rationale": "Violates the Social Security Act 2074, exposes the employer to heavy fines, and forfeits the massive 20% free employer contribution."
          }
        ],
        "takeaway": "Never look only at 'take-home cash'. An employer's 20% SSF contribution and lifelong medical/disability safety net make formal employment far more lucrative than informal cash gigs."
      },
      "faqs": [
        {
          "q": "How is the monthly pension calculated under Nepal's Social Security Fund (SSF)?",
          "a": "Under SSF's Old Age Protection Scheme, the total accumulated capital in your retirement and pension accounts (including interest and returns accrued) is divided by an actuarial factor (typically 180 or based on life expectancy tables at age 60) to determine your fixed monthly pension payable for life."
        },
        {
          "q": "Can you withdraw your SSF balance before age 60 if you resign or go abroad?",
          "a": "Under updated SSF directives, the 28.33% total old-age contribution is split into two components: the Retirement Scheme (which can be withdrawn as a lump sum upon job termination) and the Pension Scheme (which remains locked in until age 60 to guarantee monthly pension cash flows)."
        }
      ]
    },
    "np": {
      "advantages": [
        "आजीवन मासिक पेन्सनको ग्यारेन्टी: ६० वर्ष पुगेपछि मृत्युपर्यन्त पेन्सन पाइन्छ र मृत्युपछि पति/पत्नीलाई ५०% पेन्सन निरन्तर रहन्छ।",
        "कुल ३१% को विशाल योगदान: आधारभूत तलबको २०% रोजगारदाता (कम्पनी) ले थपिदिन्छ र ११% कर्मचारीको कट्टी हुन्छ।",
        "पूर्ण सामाजिक सुरक्षा: वार्षिक रु. १ लाखसम्मको औषधोपचार, सुत्केरी सुविधा, दुर्घटना बीमा र असक्तता पेन्सन सुविधा समावेश।",
        "आकर्षक आयकर छुट: आयकर ऐन अनुसार वार्षिक रु. ५,००,००० वा कुल तलबको १/३ सम्म SSF मा दाखिला गर्दा करयोग्य आम्दानीबाट सिधै घट्छ।"
      ],
      "limitations": [
        "कडा लक-इन: पेन्सन योजनामा जम्मा भएको रकम ६० वर्ष उमेर नपुगी एकमुष्ठ झिक्न पाइँदैन।",
        "कम प्रतिफल: कोषको अधिकांश रकम बैंक मुद्दती र सरकारी ऋणपत्रमा लगानी हुने हुँदा सेयर बजारको तुलनामा प्रतिफल सामान्य (८-९%) मात्र हुन्छ।",
        "सरकारी नीति र कोषको व्यवस्थापकीय स्थायित्वमा भर पर्नुपर्ने अवस्था।",
        "सूचीकृत अस्पतालहरूमा मात्र उपचार खर्च दाबी गर्न पाइने र प्रशासनिक प्रक्रिया झन्झटिलो हुन सक्ने।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "सामाजिक सुरक्षा ऐन २०७४ अनुसार अनिवार्य सूचीकृत हुनुपर्ने निजी तथा संगठित क्षेत्रका सबै तलबजीवी कर्मचारीहरू।",
          "सेयर बजारको जोखिम नलिई अवकाशपछि सरकारी कर्मचारी सरह निश्चित मासिक पेन्सन चाहने व्यक्तिहरू।",
          "आफ्नो र परिवारको स्वास्थ्य उपचार, दुर्घटना र सुत्केरी खर्चको सुरक्षा खोजिरहेका श्रमिकहरू।"
        ],
        "whoShouldAvoid": [
          "अनौपचारिक रूपमा छोटो अवधिको सम्झौतामा काम गर्ने वा विदेशी रिमोट काम गर्ने व्यक्तिहरू जहाँ रोजगारदाताको योगदान हुँदैन।"
        ]
      },
      "decisionScenario": {
        "title": "रमेशको रोजगारी छनोट: SSF सुविधासहितको कर्पोरेट जागिर बनाम १५% बढी नगद दिने अनौपचारिक काम",
        "goal": "दुईवटा जागिरको अफर: कम्पनी क मा रु. ७०,००० तलब + पूरा SSF सुविधा बनाम कम्पनी ख मा रु. ८०,००० सिधै हातमा नगद तर कुनै सुविधा नहुने।",
        "options": [
          {
            "option": "विकल्प क: हातमा तत्काल रु. ८०,००० नगद आउने लोभमा कम्पनी ख रोज्ने",
            "verdict": "अदूरदर्शी र जोखिमपूर्ण",
            "recommended": false,
            "rationale": "कुनै स्वास्थ्य बीमा छैन, दुर्घटना भए उपचार आफ्नै खल्तीबाट गर्नुपर्छ र भविष्यका लागि रोजगारदाताको कुनै योगदान थपिँदैन।"
          },
          {
            "option": "विकल्प ख: कम्पनी क रोज्ने (रु. ७०,००० तलब + रोजगारदाताको २०% अर्थात् रु. १४,००० थप SSF योगदान)",
            "verdict": "वास्तविक उच्च आम्दानी र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "रोजगारदाताको २०% थपिँदा कुल आर्थिक लाभ मासिक रु. ८४,००० पुग्छ। साथमा निःशुल्क औषधोपचार, दुर्घटना कभर र ६० वर्षपछि आजीवन पेन्सन सुनिश्चित हुन्छ।"
          },
          {
            "option": "विकल्प ग: कम्पनी क मै काम गर्ने तर ११% तलब कट्टी बचाउन रोजगारदातालाई SSF मा दर्ता नगरिदिन अनुरोध गर्ने",
            "verdict": "गैरकानुनी र आफ्नै खुट्टामा बञ्चरो",
            "recommended": false,
            "rationale": "सामाजिक सुरक्षा ऐनको उल्लंघन हुन्छ र रोजगारदाताले सित्तैमा थपिदिने २०% (रु. १४,०००) को विशाल रकम सधैँका लागि गुम्छ।"
          }
        ],
        "takeaway": "हातमा पर्ने नगद मात्र नहेर्नुहोस्। कम्पनीले थपिदिने २०% SSF रकम र निःशुल्क स्वास्थ्य/दुर्घटना सुरक्षाले औपचारिक रोजगारीलाई धेरै गुणा फाइदाजनक बनाउँछ।"
      },
      "faqs": [
        {
          "q": "नेपालको सामाजिक सुरक्षा कोष (SSF) मा मासिक पेन्सनको हिसाब कसरी गरिन्छ?",
          "a": "वृद्ध अवस्था सुरक्षा योजना अन्तर्गत तपाईंका रोजगारदाता र तपाईंको तर्फबाट जम्मा भएको कुल रकम (ब्याज र प्रतिफलसहित) लाई ६० वर्ष उमेर पुग्दाको औषत आयु तालिका (Actuarial Factor, सामान्यतया १८० महिना) ले भाग गरेर आउने रकम तपाईंलाई आजीवन मासिक पेन्सनका रूपमा भुक्तानी गरिन्छ।"
        },
        {
          "q": "के ६० वर्ष उमेर नपुग्दै जागिर छोड्दा वा विदेश जाँदा SSF को रकम झिक्न मिल्छ?",
          "a": "संशोधित कार्यविधि अनुसार २८.३३% अवकाश योगदानलाई दुई भागमा बाँडिएको छ: अवकाश योजना (Retirement Scheme) मा जम्मा भएको रकम जागिर छोड्दा एकमुष्ठ झिक्न पाइन्छ, तर पेन्सन योजना (Pension Scheme) मा रहेको रकम भने ६० वर्ष पुगेपछि मासिक पेन्सन पाउनका लागि कोषमै सुरक्षित रहन्छ।"
        }
      ]
    }
  },
  "citizen-investment-trust-cit-epf-nepal": {
    "en": {
      "advantages": [
        "Massive tax optimization: Section 63 of the Nepal Income Tax Act allows up to NPR 3,00,000 (or 1/3 of taxable income) deductible from income.",
        "Sovereign government-backed safety: funds in Karmachari Sanchaya Kosh (EPF) and Nagarik Lagani Kosh (CIT) carry statutory state backing.",
        "Access to low-interest policy loans: borrow up to 80-90% of your accumulated balance for housing or emergencies without liquidating.",
        "Includes ancillary social benefits: subsidized housing loan schemes, funeral grants, and critical illness cash assistance."
      ],
      "limitations": [
        "Moderate conservative returns: annual returns typically range between 6.5% and 8.0%, barely beating long-term inflation.",
        "Bureaucratic procedures: loan withdrawals and final settlement paperwork can involve physical branch visits and documentation queues.",
        "Contribution caps apply for tax exemptions (maximum deduction capped at NPR 3 Lakhs across combined CIT/EPF/SSF).",
        "Opportunity cost compared to disciplined equity SIP investing over 20+ year horizons."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Salaried professionals in the 20%, 30%, or 36% income tax slabs seeking maximum legal tax deductions under Section 63.",
          "Conservative savers wanting guaranteed, zero-volatility capital accumulation backed by the Government of Nepal.",
          "Homeowners planning to utilize the 80% special borrowing facility to fund land purchase or home construction."
        ],
        "whoShouldAvoid": [
          "Low-income earners below the basic tax exemption threshold (NPR 5 Lakhs single / NPR 6 Lakhs married) who gain zero tax reduction benefits."
        ]
      },
      "decisionScenario": {
        "title": "Kalpana's Tax Planning: Paying 36% Slab Tax vs Maximizing Section 63 CIT Deductions",
        "goal": "Optimizing an annual taxable salary of NPR 18,00,000 under Nepal's progressive income tax brackets.",
        "options": [
          {
            "option": "Option A: Make zero contributions to CIT or EPF, taking entire salary in bank and paying full tax to IRD",
            "verdict": "Tax Inefficient",
            "recommended": false,
            "rationale": "Subjecting the top NPR 3,00,000 of income to the 36% tax slab sends NPR 1,08,000 directly to IRD as tax."
          },
          {
            "option": "Option B: Deposit NPR 25,000/month (NPR 3,00,000/year) into Nagarik Lagani Kosh (CIT 80G Scheme)",
            "verdict": "Legally Optimized & Highly Recommended",
            "recommended": true,
            "rationale": "Directly saves up to NPR 1,08,000 in income tax annually. Your money earns 7.5% guaranteed interest while legally keeping cash away from the tax collector."
          },
          {
            "option": "Option C: Deposit NPR 6,00,000 into CIT hoping to erase all income taxes completely",
            "verdict": "Misunderstanding Tax Caps",
            "recommended": false,
            "rationale": "Section 63 strictly caps the tax deduction at NPR 3,00,000 or 1/3 of taxable income, whichever is lower. The excess NPR 3 Lakhs gets zero tax exemption."
          }
        ],
        "takeaway": "Before seeking high returns in the stock market, capture the guaranteed 20% to 36% instant return generated by maximizing Section 63 tax deductions in CIT and EPF."
      },
      "faqs": [
        {
          "q": "What is the maximum tax deduction limit under Section 63 for CIT and EPF in Nepal?",
          "a": "Under Section 63 of the Income Tax Act 2058, the maximum deduction permitted from your gross taxable income for contributions made to an approved retirement fund (CIT, EPF, or SSF) is one-third (1/3) of your total assessable income or NPR 3,00,000, whichever is lower."
        },
        {
          "q": "Can private individuals or self-employed professionals open an account in CIT (Nagarik Lagani Kosh)?",
          "a": "Yes. Self-employed individuals, doctors, lawyers, consultants, and business owners can open an individual voluntary account under CIT's 'Citizens Unit Scheme' or voluntary pension schemes by visiting any CIT branch or registering online with their PAN and citizenship certificate."
        }
      ]
    },
    "np": {
      "advantages": [
        "विशाल कर बचत: आयकर ऐनको दफा ६३ अनुसार वार्षिक रु. ३,००,००० सम्म (वा कुल करयोग्य आम्दानीको १/३) सिधै आम्दानीबाट घटाउन पाइन्छ।",
        "नेपाल सरकारको पूर्ण ग्यारेन्टी: कर्मचारी सञ्चय कोष (EPF) र नागरिक लगानी कोष (CIT) मा जम्मा भएको रकम शतप्रतिशत सुरक्षित रहन्छ।",
        "सस्तो ब्याजदरमा ८०% सम्म सापटी सुविधा: कोषको रकम नझिकीकनै घरजग्गा किन्न वा आपत्कालका लागि ८०% सम्म ऋण लिन सकिन्छ।",
        "अतिरिक्त सामाजिक सुविधाहरू: सहुलियतपूर्ण आवास कर्जा, काजकिरिया खर्च, र घातक रोग लागेमा आर्थिक सहायता उपलब्ध गराउँछ।"
      ],
      "limitations": [
        "सामान्य प्रतिफल: वार्षिक प्रतिफल ६.५% देखि ८.०% को हाराहारीमा मात्र हुने हुँदा दीर्घकालीन महँगीलाई मुस्किलले मात्र जित्छ।",
        "प्रशासनिक झन्झट: ऋण लिँदा वा अन्तिम हिसाब मिलान गर्दा भौतिक कागजात बोकेर कार्यालय धाउनुपर्ने हुन सक्छ।",
        "कर छुटको सीमा: CIT, EPF वा SSF सबै जोडेर पनि आयकर छुटको अधिकतम सीमा वार्षिक रु. ३ लाखमा मात्र सीमित छ।",
        "२० वर्षभन्दा लामो अवधिका लागि सेयर बजारको SIP को तुलनामा पुँजी वृद्धि निकै कम हुन्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "२०%, ३०% वा ३६% को उच्च करको दायरामा पर्ने जागिरेहरू जो दफा ६३ प्रयोग गरी कर घटाउन चाहन्छन्।",
          "सेयर बजारको उतारचढाव नचाहने र सरकारी ग्यारेन्टीमा सुरक्षित बचत गर्न चाहने रूढीवादी लगानीकर्ताहरू।",
          "भविष्यमा घरजग्गा किन्न वा घर बनाउन कोषबाट सस्तो ८०% सापटी प्रयोग गर्ने योजना बनाएका व्यक्तिहरू।"
        ],
        "whoShouldAvoid": [
          "न्यूनतम कर छुटको सीमा (अविवाहित रु. ५ लाख / विवाहित रु. ६ लाख) भन्दा कम कमाउने व्यक्तिहरू, जसलाई थप कर छुटको खाँचो पर्दैन।"
        ]
      },
      "decisionScenario": {
        "title": "कल्पनाको कर व्यवस्थापन: ३६% कर तिर्ने कि दफा ६३ प्रयोग गरी CIT मा रकम जम्मा गर्ने?",
        "goal": "मासिक रु. १,५०,००० (वार्षिक १८ लाख) तलबमा लाग्ने चर्को आयकरलाई कानुनी रूपमा घटाउने।",
        "options": [
          {
            "option": "विकल्प क: CIT वा सञ्चय कोषमा केही दाखिला नगरी सबै तलब बैंकमा लिने र सरकारलाई पूरा कर तिर्ने",
            "verdict": "वित्तीय रूपमा घाटा",
            "recommended": false,
            "rationale": "माथिल्लो ३ लाख आम्दानीमा ३६% को दरले कर लाग्दा रु. १,०८,००० सिधै कर कार्यालयमा जान्छ।"
          },
          {
            "option": "विकल्प ख: महिनाको रु. २५,००० (वर्षको रु. ३,००,०००) नागरिक लगानी कोष (CIT) मा दाखिला गर्ने",
            "verdict": "कानुनी रूपमा उत्कृष्ट र पूर्ण सिफारिस गरिएको",
            "recommended": true,
            "rationale": "वार्षिक रु. १,०८,००० आयकर सोझै बचत हुन्छ। आफ्नो ३ लाख सुरक्षित भएर त्यसमा ७.५% ब्याज पनि पाक्छ र कर पनि बच्छ।"
          },
          {
            "option": "विकल्प ग: सबै कर शून्य बनाउने आशमा CIT मा वर्षको रु. ६ लाख दाखिला गर्ने",
            "verdict": "कर कानुनको गलत बुझाइ",
            "recommended": false,
            "rationale": "दफा ६३ ले अधिकतम रु. ३ लाख वा १/३ सम्म मात्र छुट दिन्छ। बढी दाखिला गरेको ३ लाखमा कुनै अतिरिक्त कर छुट पाइँदैन।"
          }
        ],
        "takeaway": "सेयर बजारमा जोखिमपूर्ण नाफा खोज्नुअघि CIT र EPF मा दफा ६३ प्रयोग गरेर प्राप्त हुने २०% देखि ३६% को निश्चित कर बचत तुरुन्तै सुरक्षित गर्नुहोस्।"
      },
      "faqs": [
        {
          "q": "नेपालमा आयकर ऐनको दफा ६३ अनुसार CIT र EPF मा अधिकतम कति कर छुट पाइन्छ?",
          "a": "आयकर ऐन २०५८ को दफा ६३ बमोजिम स्वीकृत अवकाश कोष (कर्मचारी सञ्चय कोष, नागरिक लगानी कोष वा सामाजिक सुरक्षा कोष) मा योगदान गर्दा आफ्नो कुल करयोग्य आयको एक-तिहाइ (१/३) वा वार्षिक रु. ३,००,००० मध्ये जुन कम हुन्छ, सो बराबरको रकम सिधै करयोग्य आम्दानीबाट घटाउन पाइन्छ।"
        },
        {
          "q": "के निजी क्षेत्रका व्यक्ति वा व्यवसायीले पनि नागरिक लगानी कोष (CIT) मा खाता खोल्न पाउँछन्?",
          "a": "पाउँछन्। निजी व्यवसाय गर्ने, चिकित्सक, वकिल वा जोकोही नागरिकले नागरिक लगानी कोषको 'नागरिक एकाइ योजना' वा स्वैच्छिक पेन्सन योजनामा आफ्नो प्यान (PAN) र नागरिकता लिएर सजिलै व्यक्तिगत खाता खोली बचत गर्न सक्छन्।"
        }
      ]
    }
  },
  "4-percent-rule-adapted-for-nepal": {
    "en": {
      "advantages": [
        "Adapts the famous Trinity Study to Nepal's high-inflation, emerging-market economic environment.",
        "Prevents premature portfolio depletion: highlights why withdrawing 6-8% based on nominal bank FD rates leads to capital death.",
        "Establishes a safe withdrawal rate of 3.0% - 3.5% adjusted annually for Nepal's specific CPI inflation.",
        "Advocates a dynamic hybrid Systematic Withdrawal Plan (SWP): combining fixed income for baseline needs and dividend-growth equities for inflation defense."
      ],
      "limitations": [
        "Requires a larger initial retirement corpus (approx. 28x to 33x annual expenses rather than the US 25x rule).",
        "NEPSE secondary stock market lacks multi-decade historical dataset depth to backtest 50-year survival rates.",
        "Nepal does not have a deep, liquid municipal or corporate inflation-protected bond market (TIPS).",
        "Demands flexibility: you must be willing to reduce discretionary withdrawals during severe economic downturns."
      ],
      "targetAudience": {
        "whoShouldUse": [
          "Individuals aiming for early retirement (FIRE - Financial Independence, Retire Early) in Nepal in their forties or fifties.",
          "Retirees setting up a Systematic Withdrawal Plan (SWP) from mutual funds and fixed income assets.",
          "Anyone who has accumulated a lump-sum corpus and needs to know: 'Exactly how much can I safely spend each year without ever running out?'"
        ],
        "whoShouldAvoid": [
          "Young accumulators who are still in the early wealth-building phase and have not yet built their core corpus."
        ]
      },
      "decisionScenario": {
        "title": "Devendra's Retirement Withdrawal: 8% Fixed Deposit Spending vs The Nepal-Adapted 3.5% Rule",
        "goal": "Safely funding an annual living expense from an accumulated NPR 2,00,00,000 (2 Crore) retirement corpus at age 52.",
        "options": [
          {
            "option": "Option A: Put all NPR 2 Crore into Bank Fixed Deposit at 8.5% and withdraw NPR 17,00,000 (8.5%) every year",
            "verdict": "Guaranteed Capital Depletion",
            "recommended": false,
            "rationale": "When FD rates drop to 5.5% (as happens cyclically in Nepal) and inflation compounds at 6.5%, principal purchasing power collapses within 12 years."
          },
          {
            "option": "Option B: Follow the Nepal-Adapted 3.5% Rule (Withdraw NPR 7,00,000 in Year 1, adjusted for inflation, from a 60/40 Equity/Debt portfolio)",
            "verdict": "Mathematically Bulletproof & Recommended",
            "recommended": true,
            "rationale": "Equities beat inflation while the debt bucket supplies stable 3-year cash flow. Portfolio survives 35+ years without risking bankruptcy."
          },
          {
            "option": "Option C: Withdraw 10% annually assuming high-dividend hydro stocks will pay 15% dividend yields forever",
            "verdict": "High Vulnerability",
            "recommended": false,
            "rationale": "Hydropower dividends fluctuate wildly with hydrology, dry season river flow, and repair costs; an erratic dry season will force selling shares at a loss."
          }
        ],
        "takeaway": "In Nepal, nominal interest rates are an illusion. Never spend nominal returns; your safe withdrawal rate is strictly bounded by your real return after inflation and taxes."
      },
      "faqs": [
        {
          "q": "Why is the US 4% retirement rule dangerous if applied directly in Nepal without adaptation?",
          "a": "The US 4% rule assumes 2-3% historical inflation and a mature 100-year bond market. In Nepal, inflation averages 6-7%, bank interest rates swing wildly from 4% to 12%, and there are no inflation-protected securities. Withdrawing 4% to 5% during a prolonged stagflationary period in Nepal can exhaust an early retiree's portfolio within 18 to 22 years."
        },
        {
          "q": "What is the recommended Safe Withdrawal Rate (SWR) for early retirees in Nepal?",
          "a": "Financial planners recommend a conservative 3.0% to 3.5% initial withdrawal rate for early retirement (age 45-50) in Nepal, paired with a dynamic 'guardrail' strategy: if the stock market experiences a major bear market, freeze the inflation increase for that year to protect capital."
        }
      ]
    },
    "np": {
      "advantages": [
        "विश्वचर्चित 'ट्रिनिटी स्टडी' को ४% नियमलाई नेपालको उच्च महँगी र विकासशील बजार अनुसार यथार्थपरक रूपान्तरण गर्छ।",
        "पुँजी रित्तिने जोखिमबाट बचाउँछ: बैंकको मुद्दती ब्याज ८% देख्दैमा बर्सेनि ६-८% रकम झिक्दा मूलधन कसरी नष्ट हुन्छ भन्ने देखाउँछ।",
        "नेपालको मुद्रास्फीति अनुसार वार्षिक ३.०% देखि ३.५% को सुरक्षित निकासी दर (Safe Withdrawal Rate) तय गर्छ।",
        "व्यवस्थित निकासी योजना (SWP): निश्चित आम्दानी (मुद्दती/ऋणपत्र) बाट आधारभूत खर्च र सेयर लगानीबाट महँगी जित्ने दोहोरो रणनीति सिकाउँछ।"
      ],
      "limitations": [
        "नेपालमा ४% को सट्टा ३.५% नियम अपनाउँदा ठूलो अवकाश कोष (वार्षिक खर्चको करिब २८ देखि ३३ गुणा) जम्मा गर्नुपर्छ।",
        "नेप्से सेयर बजारको इतिहास अमेरिका जस्तो सय वर्ष लामो नभएकाले ५० वर्षे डाटाको कमी छ।",
        "नेपालमा महँगीबाट सुरक्षित हुने सरकारी बन्ड (TIPS जस्तो) को अभाव छ।",
        "लचिलोपन आवश्यक: बजारमा ठूलो मन्दी आउँदा विलासिताका खर्चहरू केही घटाउन तयार हुनुपर्छ।"
      ],
      "targetAudience": {
        "whoShouldUse": [
          "नेपालमै बसेर ४० वा ५० को उमेरमै चाँडै अवकाश (FIRE आन्दोलन) लिन चाहने महत्त्वाकांक्षी लगानीकर्ताहरू।",
          "म्युचुअल फन्ड र मुद्दती निक्षेपबाट व्यवस्थित मासिक पेन्सन (SWP) सुरु गर्न लागेका अवकाशप्राप्त व्यक्तिहरू।",
          "एकमुष्ठ ठूलो पुँजी भएर 'मैले वर्षको कति रुपैयाँ ढुक्कसँग खर्च गर्दा मेरो पैसा जिन्दगीभर सकिँदैन?' भनी जान्न चाहनेहरू।"
        ],
        "whoShouldAvoid": [
          "भर्खरै करियर सुरु गरेका युवाहरू जसले अझै सम्पत्ति निर्माणको आधारभूत जग बनाउन बाँकी छ।"
        ]
      },
      "decisionScenario": {
        "title": "देवेन्द्रको अवकाश निकासी: ८% मुद्दती ब्याज खर्च गर्ने कि नेपाल-अनुकूलित ३.५% नियम मान्ने?",
        "goal": "५२ वर्षको उमेरमा जम्मा भएको रु. २,००,००,००० (२ करोड) को अवकाश कोषबाट जिन्दगीभर ढुक्कसँग खर्च चलाउने।",
        "options": [
          {
            "option": "विकल्प क: सबै २ करोड बैंक मुद्दतीमा ८.५% मा राख्ने र वर्षको रु. १७ लाख (८.५%) पूरै निकालेर खर्च गर्ने",
            "verdict": "मूलधन सिद्धिने निश्चित पासो",
            "recommended": false,
            "rationale": "नेपालमा चक्रीय रूपमा मुद्दती दर ५% मा झर्दा र महँगी ६.५% ले बढ्दा १२ वर्षभित्रै पैसाको क्रयशक्ति आधाभन्दा बढी नष्ट हुन्छ र वृद्धावस्थामा चरम संकट पर्छ।"
          },
          {
            "option": "विकल्प ख: नेपाल-अनुकूलित ३.५% नियम (पहिलो वर्ष रु. ७ लाख निकाल्ने र महँगी अनुसार बढाउँदै जाने, ६०% सेयर/४०% ऋणपत्र)",
            "verdict": "गणितीय रूपमा पूर्ण सुरक्षित र सिफारिस गरिएको",
            "recommended": true,
            "rationale": "सेयरले महँगीलाई जित्छ र ऋणपत्रले ३ वर्षको खर्चको सुरक्षा दिन्छ। यो कोष ३५ वर्षभन्दा बढी समयसम्म अक्षुण्ण रहन्छ।"
          },
          {
            "option": "विकल्प ग: जलविद्युत् कम्पनीहरूले सधैँ १५% लाभांश दिन्छन् भन्ने सोचेर वार्षिक १०% रकम झिक्दै जाने",
            "verdict": "अत्यधिक जोखिमपूर्ण",
            "recommended": false,
            "rationale": "हिउँदमा नदीमा पानी घट्दा वा मर्मत खर्च बढ्दा हाइड्रोको लाभांश घट्छ, जसले गर्दा बजार घटेको बेला घाटामा सेयर बेच्न बाध्य हुनुपर्छ।"
          }
        ],
        "takeaway": "नेपालमा बैंकको बाहिरी ब्याजदर भ्रम मात्र हो। वास्तविक प्रतिफल (ब्याज - महँगी - कर) जति छ, त्यति मात्र तपाईंको सुरक्षित खर्चको सीमा हो।"
      },
      "faqs": [
        {
          "q": "अमेरिकाको ४% नियम नेपालमा जस्ताको तस्तै लागू गर्दा किन खतरनाक हुन्छ?",
          "a": "अमेरिकी ४% नियम २-३% महँगी र सय वर्षे विकसित ऋणपत्र बजारमा आधारित छ। नेपालमा महँगी औसत ६-७% हुन्छ, बैंकको ब्याजदर ४% देखि १२% सम्म तीव्र रूपमा उतारचढाव हुन्छ र महँगीबाट बचाउने सरकारी सेक्युरिटी छैनन्। यस्तो अवस्थामा सोझै ४-५% निकाल्दा १८-२२ वर्षमै अवकाश कोष रित्तिने जोखिम हुन्छ।"
        },
        {
          "q": "नेपालमा चाँडै अवकाश लिन चाहनेहरूका लागि सुरक्षित निकासी दर (SWR) कति हुनुपर्छ?",
          "a": "नेपालको आर्थिक वातावरणमा ४०-५० वर्षको उमेरमा अवकाश लिँदा सुरुवाती निकासी दर ३.०% देखि ३.५% राख्नु सबैभन्दा सुरक्षित मानिन्छ। साथमा 'गार्डरेल रणनीति' अपनाउनुपर्छ: सेयर बजारमा ठूलो मन्दी आएको वर्ष आफ्नो वार्षिक खर्च वृद्धि रोक्नुपर्छ, जसले पुँजीलाई कहिल्यै समाप्त हुन दिँदैन।"
        }
      ]
    }
  }
};

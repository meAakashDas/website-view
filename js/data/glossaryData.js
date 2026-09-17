// ==============================================
// risePaisa - Comprehensive Financial Dictionary Data Layer
// Complete, Searchable, Nepal-Focused Financial Terms & Concepts
// ==============================================

import { INVESTING_GLOSSARY } from './glossary/investingGlossary.js';
import { NEPSE_GLOSSARY } from './glossary/nepseGlossary.js';
import { MUTUAL_FUNDS_GLOSSARY } from './glossary/mutualFundsGlossary.js';
import { BANKING_LOANS_GLOSSARY } from './glossary/bankingLoansGlossary.js';
import { TAXATION_RETIREMENT_GLOSSARY } from './glossary/taxationRetirementGlossary.js';
import { MACRO_PERSONAL_GLOSSARY } from './glossary/macroPersonalGlossary.js';

export const GLOSSARY_CATEGORIES = [
  {
    slug: 'all',
    name: { en: 'All Terms', np: 'सबै शब्दावली' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    desc: { en: 'Browse our complete financial dictionary spanning all domains in Nepal.', np: 'नेपालका सम्पूर्ण वित्तीय क्षेत्र समेटिएको पूर्ण शब्दावली हेर्नुहोस्।' }
  },
  {
    slug: 'investing',
    name: { en: 'Investing', np: 'लगानी' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    desc: { en: 'Asset growth, compounding, portfolio management, and long-term wealth building.', np: 'सम्पत्ति वृद्धि, चक्रवर्ती नाफा र दीर्घकालीन पुँजी निर्माण सम्बन्धी अवधारणाहरू।' }
  },
  {
    slug: 'nepse',
    name: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    desc: { en: 'Secondary market trading, IPO allotments, broker TMS, Demat, and dividends.', np: 'दोस्रो बजार, प्राथमिक सेयर, ब्रोकर TMS, डिम्याट र लाभांश सम्बन्धी शब्दावली।' }
  },
  {
    slug: 'mutual-funds',
    name: { en: 'Mutual Funds', np: 'म्युचुअल फण्ड' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>`,
    desc: { en: 'Open-ended funds, Systematic Investment Plans (SIP), NAV, and expense ratios.', np: 'खुलामुखी सामूहिक लगानी कोष, SIP, प्रति इकाई खुद सम्पत्ति मूल्य र व्यवस्थापन खर्च।' }
  },
  {
    slug: 'taxation',
    name: { en: 'Taxation & TDS', np: 'कर र TDS' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    desc: { en: 'Inland Revenue Department rules, income tax slabs, PAN, TDS, and VAT.', np: 'आन्तरिक राजस्व विभाग, आयकर स्ल्याब, व्यक्तिगत PAN, अग्रिम कर कट्टी र भ्याट।' }
  },
  {
    slug: 'banking',
    name: { en: 'Banking', np: 'बैंकिङ' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    desc: { en: 'Commercial banks, fixed deposits, Base Rate, KYC, and NRB deposit insurance.', np: 'वाणिज्य बैंकहरू, मुद्दती निक्षेप, आधार दर, ग्राहक पहिचान र निक्षेप सुरक्षा।' }
  },
  {
    slug: 'loans',
    name: { en: 'Loans & Credit', np: 'कर्जा र ऋण' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    desc: { en: 'Home loans, EMI calculation, Debt-to-Income (DSTI) limits, and collateral.', np: 'घरकर्जा, समान मासिक किस्ता (EMI), ५०% DSTI सीमा र धितो सम्बन्धी नियम।' }
  },
  {
    slug: 'economics',
    name: { en: 'Economics', np: 'अर्थतन्त्र' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    desc: { en: 'Inflation, GDP, Nepal Rastra Bank monetary policy, and Repo Rate.', np: 'मुद्रास्फीति, कुल गार्हस्थ्य उत्पादन, मौद्रिक नीति र नीतिगत रिपो दर।' }
  },
  {
    slug: 'personal-finance',
    name: { en: 'Personal Finance', np: 'व्यक्तिगत वित्त' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    desc: { en: '50/30/20 budgeting, emergency funds, sinking funds, and net worth management.', np: '५०/३०/२० बजेटिङ, आपतकालीन कोष, कुल सम्पत्ति र दैनिक खर्च व्यवस्थापन।' }
  },
  {
    slug: 'insurance',
    name: { en: 'Insurance', np: 'बीमा' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    desc: { en: 'Term life insurance, Human Life Value (HLV), premium, and claim settlements.', np: 'म्यादी जीवन बीमा, मानव जीवन मूल्य (HLV), प्रिमियम र दाबी भुक्तानी।' }
  },
  {
    slug: 'retirement',
    name: { en: 'Retirement & Funds', np: 'अवकाश र कोष' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>`,
    desc: { en: 'Social Security Fund (SSF), CIT, EPF, and post-retirement pension planning.', np: 'सामाजिक सुरक्षा कोष (SSF), नागरिक लगानी कोष (CIT), सञ्चय कोष र पेन्सन।' }
  },
  {
    slug: 'digital-payments',
    name: { en: 'Digital Payments', np: 'डिजिटल भुक्तानी' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    desc: { en: 'Fonepay, NepalPay QR protocols, ConnectIPS interbank transfers, and digital wallets.', np: 'क्युआर भुक्तानी, कनेक्टआईपीएस, मोबाइल वालेट र डिजिटल वित्तीय कारोबार।' }
  },
  {
    slug: 'accounting',
    name: { en: 'Accounting & Business', np: 'लेखा र व्यवसाय' },
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
    desc: { en: 'Company registration, balance sheets, working capital, and profit margins.', np: 'कम्पनी दर्ता, वासलात, चालु पुँजी र नाफा नोक्सान हिसाब।' }
  }
];

// Unified, production-grade 37-term encyclopedia dictionary
export const GLOSSARY_DICTIONARY = [
  ...INVESTING_GLOSSARY,
  ...NEPSE_GLOSSARY,
  ...MUTUAL_FUNDS_GLOSSARY,
  ...BANKING_LOANS_GLOSSARY,
  ...TAXATION_RETIREMENT_GLOSSARY,
  ...MACRO_PERSONAL_GLOSSARY
];

// ── Search & Filter Functions ────────────────────────────────
export function getGlossaryTermBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = String(slug).toLowerCase().trim();
  
  // Direct slug match
  let term = GLOSSARY_DICTIONARY.find(t => t.slug === cleanSlug);
  if (term) return term;

  // Alias lookup
  const ALIAS_MAP = {
    'fd': 'fixed-deposit',
    'mudhati': 'fixed-deposit',
    'stock': 'asset',
    'shares': 'asset',
    'loan': 'emi',
    'kista': 'emi',
    'cpi': 'inflation',
    'crn': 'asba',
    'casba': 'asba',
    'boid': 'demat',
    'open-ended': 'sip',
    'term-life': 'term-insurance',
    'social-security': 'ssf',
    'qr': 'qr-payment',
    'nepse-tms': 'tms',
    'citizen-investment-trust': 'cit',
    'employees-provident-fund': 'epf',
    'gross-domestic-product': 'gdp',
    'human-life-value': 'hlv',
    'value-added-tax': 'vat',
    'tax-deducted-at-source': 'tds',
    'permanent-account-number': 'pan'
  };

  const aliasSlug = ALIAS_MAP[cleanSlug];
  if (aliasSlug) {
    return GLOSSARY_DICTIONARY.find(t => t.slug === aliasSlug) || null;
  }

  return null;
}

export function searchGlossaryTerms(query = '', categorySlug = 'all', letter = 'ALL') {
  let results = [...GLOSSARY_DICTIONARY];

  // Category filter
  if (categorySlug && categorySlug !== 'all') {
    results = results.filter(t => t.categorySlug === categorySlug);
  }

  // Letter filter
  if (letter && letter !== 'ALL') {
    const upperLetter = letter.toUpperCase();
    results = results.filter(t => t.letter === upperLetter);
  }

  // Text search (exact, partial, abbreviation, synonyms)
  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(t => {
      const matchTerm = t.term.toLowerCase().includes(q);
      const matchTermNp = t.termNp && t.termNp.toLowerCase().includes(q);
      const matchAbbr = t.abbreviation && t.abbreviation.toLowerCase().includes(q);
      const matchOneLine = (t.oneLineDef?.en && t.oneLineDef.en.toLowerCase().includes(q)) ||
                           (t.oneLineDef?.np && t.oneLineDef.np.toLowerCase().includes(q));
      const matchSynonyms = t.synonyms && t.synonyms.some(s => s.toLowerCase().includes(q) || q.includes(s));

      return matchTerm || matchTermNp || matchAbbr || matchOneLine || matchSynonyms;
    });
  }

  // Sort alphabetically by term
  return results.sort((a, b) => a.term.localeCompare(b.term));
}

export function getGlossaryAlphabetMap() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return alphabet.map(char => {
    const terms = GLOSSARY_DICTIONARY.filter(t => t.letter === char);
    return {
      letter: char,
      count: terms.length,
      active: terms.length > 0,
      terms: terms
    };
  });
}

export function getPopularGlossaryTerms() {
  const popularSlugs = ['inflation', 'sip', 'nav', 'dividend', 'pan', 'ipo', 'fixed-deposit', 'demat'];
  return popularSlugs.map(slug => getGlossaryTermBySlug(slug)).filter(Boolean);
}

// ── Finance Glossary Preview Data (Alphabetical Key Terms) ────
export const GLOSSARY_PREVIEW = [
  {
    letter: 'A',
    term: 'Asset (सम्पत्ति)',
    def: { en: 'A resource with economic value that generates passive cash flow or appreciates over time (e.g. shares, real estate).', np: 'आर्थिक मूल्य भएको साधन जसले समयसँगै नियमित आम्दानी दिन्छ वा जसको मूल्य बढ्छ (जस्तै: सेयर, बचत)।' }
  },
  {
    letter: 'B',
    term: 'Budget (बजेट)',
    def: { en: 'A structured plan allocating your net monthly earnings across necessities, lifestyle, and high-yield savings.', np: 'आफ्नो मासिक आम्दानीलाई आवश्यकता, चाहना र भविष्यको बचत बीच व्यवस्थित बाँडफाँड गर्ने वित्तीय योजना।' }
  },
  {
    letter: 'C',
    term: 'Capital Gain (पुँजीगत लाभ)',
    def: { en: 'The profit earned from selling an investment (e.g. NEPSE shares or land) higher than its purchase cost.', np: 'कुनै पनि लगानी (जस्तै: सेयर वा जग्गा) किनेको मूल्यभन्दा बढीमा बेच्दा प्राप्त हुने खुद नाफा।' }
  },
  {
    letter: 'D',
    term: 'Dividend (लाभांश)',
    def: { en: 'A portion of net company profits distributed to shareholders in cash or additional bonus shares in Nepal.', np: 'कम्पनीले वर्षभरिको नाफाबाट आफ्ना सेयरधनीहरूलाई नगद वा बोनस सेयरको रूपमा बाँड्ने प्रतिफल।' }
  },
  {
    letter: 'E',
    term: 'ETF (एक्सचेन्ज ट्रेडेड फण्ड)',
    def: { en: 'An investment fund traded on the stock exchange that holds a basket of underlying securities matching an index.', np: 'धितोपत्र बजारमा सूचीकृत भई सामान्य सेयर जस्तै किनबेच हुने सामूहिक लगानी कोष।' }
  },
  {
    letter: 'F',
    term: 'Fixed Deposit / FD (मुद्दती निक्षेप)',
    def: { en: 'A high-interest bank deposit locked for a set tenure (e.g. 1-5 years) yielding guaranteed periodic interest.', np: 'तोकिएको अवधिसम्मका लागि निश्चित ब्याजदरमा बैंकमा राखिने सुरक्षित र ग्यारेन्टीड निक्षेप।' }
  },
  {
    letter: 'G',
    term: 'GDP (कुल गार्हस्थ्य उत्पादन)',
    def: { en: 'Gross Domestic Product: the monetary measure of all final goods and services produced within Nepal annually.', np: 'एक वर्षभित्र नेपालको भौगोलिक सीमाभित्र उत्पादन हुने सम्पूर्ण अन्तिम वस्तु तथा सेवाको कुल बजार मूल्य।' }
  },
  {
    letter: 'H',
    term: 'HLV (Human Life Value)',
    def: { en: 'The economic value of an individual’s future earning capacity used to determine adequate Term Life cover.', np: 'कुनै व्यक्तिको भविष्यको कमाइ क्षमताको आधारमा परिवारलाई आवश्यक पर्ने वास्तविक बीमाङ्क रकम।' }
  },
  {
    letter: 'I',
    term: 'IPO (Initial Public Offering)',
    def: { en: 'The first time a private company sells newly issued shares to the public in Nepal at face value (NPR 100).', np: 'कुनै कम्पनीले सर्वसाधारणका लागि पहिलो पटक अंकित मूल्य (रु. १००) मा जारी गर्ने प्राथमिक सेयर।' }
  },
  {
    letter: 'K',
    term: 'KYC (Know Your Customer)',
    def: { en: 'The mandatory regulatory verification of an account holder’s identity and physical address by banks in Nepal.', np: 'बैंक, वित्तीय संस्था र ब्रोकरमा खाता खोल्दा ग्राहकको परिचय र ठेगाना पुष्टि गर्ने कानुनी विवरण।' }
  },
  {
    letter: 'M',
    term: 'MeroShare (मेरोसेयर)',
    def: { en: 'The official digital web platform provided by CDSC for applying for IPOs, reviewing Demat, and EDIS transfer.', np: 'CDSC द्वारा सञ्चालित अनलाइन पोर्टल जसबाट IPO भर्न, सेयर ट्र्याक गर्न र बिक्रीपछि EDIS गर्न सकिन्छ।' }
  },
  {
    letter: 'N',
    term: 'NAV (Net Asset Value)',
    def: { en: 'The per-unit market value of a mutual fund scheme calculated by dividing net assets by total units.', np: 'Mutual Fund को कुल सम्पत्तिबाट दायित्व घटाई कुल इकाई संख्याले भाग गर्दा आउने प्रति इकाई खुद मूल्य।' }
  },
  {
    letter: 'P',
    term: 'PAN (स्थायी लेखा नम्बर)',
    def: { en: 'Permanent Account Number issued by the Inland Revenue Department for tracking tax compliance and TDS.', np: 'आन्तरिक राजस्व विभागले जारी गर्ने स्थायी नम्बर जसले नागरिकको कर कट्टी (TDS) र आम्दानीको हिसाब राख्छ।' }
  },
  {
    letter: 'Q',
    term: 'QR Payment (Fonepay / NepalPay)',
    def: { en: 'Standardized EMVCo QR code protocol enabling instant direct bank-to-bank retail payments across Nepal.', np: 'मोबाइल बैंकिङ र वालेटबाट सोझै बैंक खातामा तत्काल शुल्क बिना भुक्तानी गर्ने डिजिटल प्रणाली।' }
  },
  {
    letter: 'R',
    term: 'Repo Rate (रिपो दर)',
    def: { en: 'The policy interest rate at which Nepal Rastra Bank lends short-term liquidity to commercial banks.', np: 'नेपाल राष्ट्र बैंकले वाणिज्य बैंकहरूलाई अल्पकालीन कर्जा दिँदा लिने नीतिगत ब्याजदर।' }
  },
  {
    letter: 'S',
    term: 'SIP (Systematic Investment Plan)',
    def: { en: 'An investment approach where a fixed rupee sum is deposited into open-ended mutual funds every single month.', np: 'खुलामुखी Mutual Fund मा प्रत्येक महिना तोकिएको निश्चित रकम नियमित रूपमा लगानी गर्ने विधि।' }
  },
  {
    letter: 'T',
    term: 'TDS (कर कट्टी / स्रोतमा कर)',
    def: { en: 'Tax Deducted at Source: statutory advance tax withheld on salary, bank interest, or freelance payments in Nepal.', np: 'पारिश्रमिक, बैंकको ब्याज वा कमिसन भुक्तानी गर्दा मुहानमै कानुनी रूपमा कट्टा गरिने अग्रिम कर।' }
  },
  {
    letter: 'V',
    term: 'VAT (मूल्य अभिवृद्धि कर)',
    def: { en: 'Value Added Tax: a standard 13% indirect consumption tax levied on goods and services in Nepal.', np: 'नेपालमा वस्तु तथा सेवाको बिक्री वितरणमा लाग्ने मानक १३ प्रतिशत अप्रत्यक्ष उपभोग कर।' }
  }
];


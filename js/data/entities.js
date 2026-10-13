// ==============================================
// risePaisa: Master Entity Source of Truth
// Canonical definitions for RisePaisa (Organization) and Aakash Das (Person)
// ==============================================

export const ENTITY_RISEPAISA = {
  name: 'RisePaisa',
  legalName: 'RisePaisa',
  type: 'Financial Education Platform',
  canonicalUrl: 'https://risepaisa.com/',
  organizationId: 'https://risepaisa.com/#organization',
  websiteId: 'https://risepaisa.com/#website',
  logoUrl: 'https://risepaisa.com/assets/images/risepaisa_logo.png',
  tagline: "Nepal's Financial Education Platform",
  description: "Nepal's independent financial education platform providing practical tools, NEPSE market analysis, personal income tax guides, and financial literacy roadmaps.",
  founder: 'Aakash Das',
  founderId: 'https://risepaisa.com/aakash-das#person',
  founderProfileUrl: 'https://risepaisa.com/aakash-das',
  areaServed: {
    type: 'Country',
    name: 'Nepal'
  },
  address: {
    locality: 'Kathmandu',
    country: 'NP'
  },
  contact: {
    whatsapp: '+9779740269317',
    email: 'itsaakashdas@gmail.com'
  },
  social: {
    youtube: 'https://www.youtube.com/@risePaisa',
    tiktok: 'https://www.tiktok.com/@risepaisa',
    instagram: 'https://www.instagram.com/risepaisa/',
    facebook: 'https://www.facebook.com/risepaisa/',
    twitter: 'https://x.com/risePaisa',
    linkedin: 'https://np.linkedin.com/company/risepaisa-nepal'
  },
  sameAs: [
    'https://www.youtube.com/@risePaisa',
    'https://www.facebook.com/risepaisa/',
    'https://www.instagram.com/risepaisa/',
    'https://x.com/risePaisa',
    'https://np.linkedin.com/company/risepaisa-nepal',
    'https://www.tiktok.com/@risepaisa'
  ]
};

export const ENTITY_AAKASH_DAS = {
  name: 'Aakash Das',
  primaryRole: 'Founder of RisePaisa',
  professionalDescription: 'Finance Educator & Content Creator',
  fullTitle: 'Founder of RisePaisa | Finance Educator & Content Creator',
  organization: 'RisePaisa',
  organizationId: 'https://risepaisa.com/#organization',
  secondaryProject: 'RiseNepse',
  location: 'Kathmandu, Nepal',
  canonicalProfile: 'https://risepaisa.com/aakash-das',
  personId: 'https://risepaisa.com/aakash-das#person',
  imageUrl: 'https://risepaisa.com/assets/images/aakash-das-founder-risepaisa.jpg',
  imageAlt: 'Aakash Das, founder of RisePaisa',
  imageCaption: 'Aakash Das, Founder of RisePaisa',
  marketFocus: 'Nepal (Financial Ecosystem)',
  shortBio: "I'm Aakash Das, founder of RisePaisa, a Nepal-focused financial education platform. I create practical educational content and digital tools that help people understand investing, banking, taxation, fintech, and personal finance.",
  educationSummary: 'Pursuing BSc Information Technology at Coventry University (via Softwarica College of IT & E-Commerce); previously pursued foundational Chartered Accountancy studies at ICAI; completed +2 Science at Sainik Awasiya Mahavidyalaya.',
  education: [
    {
      institution: 'Coventry University',
      studyLocation: 'Softwarica College of IT & E-Commerce, Kathmandu',
      degree: 'Bachelor of Science (BSc), Information Technology',
      period: 'August 2025 – August 2028',
      status: 'Currently Pursuing'
    },
    {
      institution: 'The Institute of Chartered Accountants of India (ICAI)',
      degree: 'Chartered Accountancy Studies (Accounting, Taxation, Auditing & Financial Management)',
      period: 'May 2024 – June 2025',
      status: 'Foundational Coursework (1 Year Studied)'
    },
    {
      institution: 'Sainik Awasiya Mahavidyalaya, Bhaktapur',
      degree: 'Higher Secondary Education (+2), Biology/Biological Sciences',
      period: '2022 – 2024',
      status: 'Completed'
    }
  ],
  knowsAbout: [
    'Financial education',
    'Personal finance',
    'Nepal Stock Exchange (NEPSE)',
    'Banking and interest rates',
    'Fintech and digital payments',
    'Nepal Income Tax',
    'Information Technology and web platforms'
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/aakashdas',
    youtube: 'https://www.youtube.com/@me.aakashdas',
    instagram: 'https://www.instagram.com/aakashdas_',
    facebook: 'https://www.facebook.com/AakasshDas/',
    twitter: 'https://x.com/meaakashdas',
    tiktok: 'https://www.tiktok.com/@aakashdas_'
  },
  sameAs: [
    'https://www.linkedin.com/in/aakashdas',
    'https://www.youtube.com/@me.aakashdas',
    'https://www.instagram.com/aakashdas_',
    'https://www.facebook.com/AakasshDas/',
    'https://x.com/meaakashdas',
    'https://www.tiktok.com/@aakashdas_'
  ]
};

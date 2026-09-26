// ==============================================
// risePaisa - Complete SEO & Schema.org JSON-LD Engine
// Production-grade technical SEO, social metadata, and rich structured data
// Supports Google, Bing, Applebot, and AI Search Crawlers (ChatGPT, Gemini, Claude, Perplexity)
// ==============================================

// Lazy loader for heavy learn curriculum data (prevents loading 1.2MB on home/calculator/blog pages)
let _learnDataModule = null;
async function getLearnData() {
  if (_learnDataModule) return _learnDataModule;
  try {
    _learnDataModule = await import('./data/learn.js');
    return _learnDataModule;
  } catch (err) {
    console.error('Failed to load learn data for SEO:', err);
    return null;
  }
}

function getLearnLanguage() {
  if (typeof window === 'undefined') return 'en';
  try {
    return localStorage.getItem('rp_learn_lang') || 'en';
  } catch {
    return 'en';
  }
}

import { getGlossaryTermBySlug, GLOSSARY_DICTIONARY } from './data/glossaryData.js';
import { CALCULATOR_REGISTRY } from './calculators/registry.js';
import { getAllCourses, getCourseBySlug } from './data/courses.js';
import { getResources, getResourceBySlug } from './data/resources.js';
import { getArticles, getArticleBySlug } from './data/articles.js';
import { CALCULATOR_SLUG_TO_ID } from './routes.js';
import { ENTITY_RISEPAISA, ENTITY_AAKASH_DAS } from './data/entities.js';

export const SITE_DOMAIN = 'https://risepaisa.com';
export const SITE_NAME = ENTITY_RISEPAISA.name;
export const DEFAULT_OG_IMAGE = `${SITE_DOMAIN}/assets/images/risepaisa_logo.png`;
export const TWITTER_HANDLE = '@risepaisa';


/**
 * Clean helper to strip HTML tags and normalize text whitespace
 */
function cleanText(text = '', maxLength = 160) {
  if (!text) return '';
  const cleaned = String(text)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength - 3).trim() + '...';
}

/**
 * Set or update a meta tag in document.head
 */
function setMetaTag(attrName, attrValue, content) {
  if (typeof document === 'undefined') return;
  let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content || '');
}

/**
 * Set or update a link tag in document.head
 */
function setLinkTag(rel, href, extraAttrs = {}) {
  if (typeof document === 'undefined') return;
  let selector = `link[rel="${rel}"]`;
  if (extraAttrs.hreflang) {
    selector += `[hreflang="${extraAttrs.hreflang}"]`;
  }
  let link = document.querySelector(selector);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    for (const [k, v] of Object.entries(extraAttrs)) {
      link.setAttribute(k, v);
    }
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * Build canonical URL from clean relative pathname
 */
export function buildCanonicalUrl(pathname = '/') {
  let clean = pathname.split('?')[0].split('#')[0];
  if (!clean.startsWith('/')) clean = '/' + clean;
  if (clean.length > 1 && clean.endsWith('/')) clean = clean.slice(0, -1);
  return `${SITE_DOMAIN}${clean}`;
}

/**
 * Resolve page SEO metadata and structured schemas based on URL and language
 */
export function resolvePageSEO(pathname = '/', searchParams = null, lang = 'en', learnData = null) {
  const isNp = lang === 'np' || lang === 'ne';
  const canonicalUrl = buildCanonicalUrl(pathname);
  const pathParts = pathname.replace(/^\/+|\/+$/g, '').split('/');
  const rootSection = pathParts[0] || '';

  const getAllCategories = learnData?.getAllCategories || (() => []);
  const getGuideBySlug = learnData?.getGuideBySlug || (() => null);
  const getCategoryBySlug = learnData?.getCategoryBySlug || (() => null);
  const getLessonBySlug = learnData?.getLessonBySlug || (() => null);

  // Default SEO fallback
  let seo = {
    title: `${SITE_NAME} | Nepal's Financial Education Platform`,
    description: `Nepal's premier financial education academy. Master personal finance, NEPSE stock market investing, mutual funds, taxation, banking, and practical wealth building in Nepal.`,
    keywords: `risePaisa, Nepal finance, NEPSE, financial literacy Nepal, stock market Nepal, personal finance Nepal, tax Nepal, fintech Nepal, eSewa, Khalti, MeroShare, Demat, SIP Nepal`,
    type: 'website',
    image: DEFAULT_OG_IMAGE,
    canonical: canonicalUrl,
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    breadcrumbs: [{ name: 'Home', url: SITE_DOMAIN }],
    schemas: []
  };

  // ── Global Organization & WebSite Schemas ───────
  const organizationSchema = {
    '@type': 'Organization',
    '@id': ENTITY_RISEPAISA.organizationId,
    'name': ENTITY_RISEPAISA.name,
    'legalName': ENTITY_RISEPAISA.legalName,
    'url': ENTITY_RISEPAISA.canonicalUrl,
    'logo': {
      '@type': 'ImageObject',
      'url': DEFAULT_OG_IMAGE,
      'width': 512,
      'height': 512,
      'caption': `${ENTITY_RISEPAISA.name} Logo`
    },
    'image': DEFAULT_OG_IMAGE,
    'founder': {
      '@id': ENTITY_AAKASH_DAS.personId
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': ENTITY_RISEPAISA.address.locality,
      'addressCountry': ENTITY_RISEPAISA.address.country
    },
    'areaServed': {
      '@type': ENTITY_RISEPAISA.areaServed.type,
      'name': ENTITY_RISEPAISA.areaServed.name
    },
    'knowsAbout': [
      'Personal Finance Nepal',
      'NEPSE Stock Market',
      'Mutual Funds Nepal',
      'Nepal Income Tax',
      'Demat & MeroShare',
      'Systematic Investment Plan (SIP)'
    ],
    'sameAs': ENTITY_RISEPAISA.sameAs,
    'description': ENTITY_RISEPAISA.description
  };

  const aakashDasPersonSchema = {
    '@type': 'Person',
    '@id': ENTITY_AAKASH_DAS.personId,
    'name': ENTITY_AAKASH_DAS.name,
    'url': ENTITY_AAKASH_DAS.canonicalProfile,
    'image': ENTITY_AAKASH_DAS.imageUrl,
    'jobTitle': ENTITY_AAKASH_DAS.fullTitle,
    'worksFor': {
      '@id': ENTITY_RISEPAISA.organizationId
    },
    'alumniOf': {
      '@type': 'CollegeOrUniversity',
      'name': ENTITY_AAKASH_DAS.alumniOf.name,
      'url': ENTITY_AAKASH_DAS.alumniOf.url
    },
    'description': ENTITY_AAKASH_DAS.shortBio,
    'knowsAbout': ENTITY_AAKASH_DAS.knowsAbout,
    'sameAs': ENTITY_AAKASH_DAS.sameAs
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${SITE_DOMAIN}/#website`,
    'url': SITE_DOMAIN,
    'name': SITE_NAME,
    'publisher': { '@id': `${SITE_DOMAIN}/#organization` },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${SITE_DOMAIN}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    'inLanguage': ['en-US', 'ne-NP']
  };

  // ── Route Matchers ─────────────────────────────
  if (!rootSection) {
    // 1. Home
    seo.title = `risePaisa | Nepal's Financial Education Platform`;
    seo.description = `Learn personal finance, stock market investing (NEPSE), taxation, and fintech in Nepal. Join thousands of Nepali youth building financial literacy with risePaisa.`;
  } else if (rootSection === 'learn') {
    seo.breadcrumbs.push({ name: isNp ? 'सिकाइ केन्द्र' : 'Learn Academy', url: `${SITE_DOMAIN}/learn` });

    if (pathParts.length === 1) {
      // 2. Learn Academy Hub
      seo.title = isNp
        ? `नेपालको वित्तीय शिक्षा एकेडेमी | risePaisa Learn`
        : `Financial Education Academy for Nepal | risePaisa Learn`;
      seo.description = isNp
        ? `नेपालका लागि तयार गरिएको व्यावहारिक वित्तीय शिक्षा। व्यक्तिगत वित्त, नेप्से सेयर बजार, म्युचुअल फण्ड, कर र बैंकिङ सम्बन्धी नि:शुल्क सिकाइ मार्गहरू।`
        : `Free financial education academy designed for Nepal. Structured learning roadmaps covering personal finance, NEPSE stock investing, mutual funds, tax, and banking.`;
      seo.keywords = `financial education Nepal, NEPSE tutorial, share market Nepal, learn finance Kathmandu, personal finance guide, risePaisa academy`;

      // ItemList of Categories
      const categories = getAllCategories ? getAllCategories() : [];
      if (categories.length > 0) {
        seo.schemas.push({
          '@type': 'ItemList',
          'name': 'Nepal Financial Learning Curriculums',
          'description': '12 structured financial learning domains tailored for Nepal',
          'itemListElement': categories.map((cat, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': isNp ? (cat.titleNp || cat.title) : cat.title,
            'url': `${SITE_DOMAIN}/learn/${cat.slug}`
          }))
        });
      }
    } else if (pathParts[1] === 'guides') {
      seo.breadcrumbs.push({ name: isNp ? 'निर्देशिकाहरू' : 'Guides', url: `${SITE_DOMAIN}/learn/guides` });

      if (pathParts.length === 2) {
        // 3. Guides Hub
        seo.title = isNp
          ? `नेपाल वित्तीय निर्देशिकाहरू र व्यावहारिक म्यानुअल | risePaisa`
          : `Nepal Finance Guides & Practical Manuals | risePaisa Learn`;
        seo.description = isNp
          ? `नेपालमा प्राथमिक सेयर (IPO), डिम्याट, मेरोसेयर, ब्रोकर TMS ट्रेडिङ, र कर चुक्ता सम्बन्धी विस्तृत तथा व्यावहारिक कर्नरस्टोन गाइडहरू।`
          : `In-depth practical finance guides for Nepal: IPO applications, MeroShare setup, Demat accounts, NEPSE TMS broker trading, tax filing, and retirement planning.`;
        seo.keywords = `IPO guide Nepal, MeroShare guide, Demat account Nepal, TMS broker guide, SEBON rules, CDSC guide`;
      } else {
        // 4. Guide Detail
        const guideSlug = pathParts[2];
        const guide = getGuideBySlug(guideSlug);

        if (guide) {
          const guideTitle = isNp
            ? (guide.title?.np || (typeof guide.title === 'string' ? guide.title : guide.title?.en || 'Guide'))
            : (guide.title?.en || (typeof guide.title === 'string' ? guide.title : 'Guide'));
          const guideSummary = isNp
            ? (guide.oneLineSummary?.np || guide.intro || '')
            : (guide.oneLineSummary?.en || guide.intro || '');

          seo.title = `${guideTitle} | Nepal Practical Guide | risePaisa`;
          seo.description = cleanText(guideSummary, 160) || `Comprehensive guide on ${guideTitle} for investors and learners in Nepal.`;
          seo.type = 'article';
          seo.breadcrumbs.push({ name: guideTitle, url: canonicalUrl });

          // TechArticle / Article Schema
          const articleSchema = {
            '@type': 'TechArticle',
            '@id': `${canonicalUrl}#article`,
            'isPartOf': { '@id': `${SITE_DOMAIN}/#website` },
            'headline': guideTitle,
            'description': seo.description,
            'inLanguage': isNp ? 'ne-NP' : 'en-US',
            'datePublished': '2026-01-01T00:00:00+05:45',
            'dateModified': '2026-09-01T00:00:00+05:45',
            'author': {
              '@type': 'Person',
              '@id': `${SITE_DOMAIN}/aakash-das#person`,
              'name': 'Aakash Das',
              'jobTitle': 'Founder and Finance Educator',
              'url': `${SITE_DOMAIN}/aakash-das`
            },
            'publisher': { '@id': `${SITE_DOMAIN}/#organization` },
            'isAccessibleForFree': true,
            'learningResourceType': 'Practical Guide',
            'speakable': {
              '@type': 'SpeakableSpecification',
              'cssSelector': ['.guide-hero-title', '.guide-hero-summary', '.lead-paragraph', '.guide-intro']
            }
          };
          seo.schemas.push(articleSchema);

          // HowTo schema for procedural guides
          const proceduralGuides = ['complete-ipo-guide', 'cdsc-meroshare-guide', 'demat-account-guide', 'broker-tms-guide', 'tax-filing-guide'];
          if (proceduralGuides.includes(guideSlug) || (guide.en && guide.en.chapters && guide.en.chapters.length > 0)) {
            const chapters = (isNp && guide.np?.chapters) ? guide.np.chapters : (guide.en?.chapters || []);
            if (chapters.length > 0) {
              seo.schemas.push({
                '@type': 'HowTo',
                '@id': `${canonicalUrl}#howto`,
                'name': guideTitle,
                'description': seo.description,
                'totalTime': 'PT15M',
                'step': chapters.map((chap, idx) => ({
                  '@type': 'HowToStep',
                  'position': idx + 1,
                  'name': chap.title,
                  'text': cleanText(chap.content, 200),
                  'url': `${canonicalUrl}#chap-${chap.num || idx + 1}`
                }))
              });
            }
          }

          // FAQPage schema if guide has faqs
          const faqs = (isNp && guide.np?.faqs) ? guide.np.faqs : (guide.en?.faqs || guide.faqs || []);
          if (Array.isArray(faqs) && faqs.length > 0) {
            seo.schemas.push({
              '@type': 'FAQPage',
              '@id': `${canonicalUrl}#faq`,
              'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.q || faq.question,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': cleanText(faq.a || faq.answer, 300)
                }
              }))
            });
          }
        }
      }
    } else if (pathParts[1] === 'glossary') {
      seo.breadcrumbs.push({ name: isNp ? 'शब्दावली' : 'Glossary', url: `${SITE_DOMAIN}/learn/glossary` });

      if (pathParts.length === 2) {
        // 5. Glossary Hub
        seo.title = isNp
          ? `नेपाल वित्तीय शब्दकोश र शब्दावली | risePaisa Learn`
          : `Nepal Financial Dictionary & Glossary | risePaisa Learn`;
        seo.description = isNp
          ? `नेपालको सेयर बजार (NEPSE), बैंकिङ, कर, र अर्थतन्त्र सम्बन्धी शब्दावलीको स्पष्ट, प्रामाणिक नेपाली तथा अंग्रेजी व्याख्या।`
          : `Clear, authoritative definitions of financial, stock market (NEPSE), banking, tax, and economic terms in Nepal with English and Nepali explanations.`;
        seo.keywords = `Nepal finance dictionary, NEPSE terms, Demat meaning, ASBA meaning, inflation Nepal, financial glossary Kathmandu`;

        // DefinedTermSet Schema
        seo.schemas.push({
          '@type': 'DefinedTermSet',
          '@id': `${canonicalUrl}#termset`,
          'name': 'Nepal Financial & Stock Market Dictionary',
          'description': 'Comprehensive encyclopedia of finance, NEPSE, banking, and tax terminology in Nepal.',
          'hasDefinedTerm': (GLOSSARY_DICTIONARY || []).slice(0, 30).map(t => ({
            '@type': 'DefinedTerm',
            'name': isNp ? (t.termNp || t.term) : t.term,
            'description': cleanText(isNp ? (t.oneLineDef?.np || t.oneLineDef?.en) : t.oneLineDef?.en, 150),
            'termCode': t.slug,
            'url': `${SITE_DOMAIN}/learn/glossary/${t.slug}`
          }))
        });
      } else {
        // 6. Glossary Term Detail
        const termSlug = pathParts[2];
        const term = getGlossaryTermBySlug(termSlug);

        if (term) {
          const termName = isNp ? (term.termNp || term.term) : term.term;
          const termDef = isNp
            ? (term.oneLineDef?.np || term.oneLineDef?.en || '')
            : (term.oneLineDef?.en || '');

          seo.title = `${termName} Meaning & Definition in Nepal | risePaisa Glossary`;
          seo.description = cleanText(termDef, 160) || `Learn what ${term.term} means in Nepal's financial and stock market system with risePaisa.`;
          seo.type = 'article';
          seo.breadcrumbs.push({ name: termName, url: canonicalUrl });

          // DefinedTerm Schema
          seo.schemas.push({
            '@type': 'DefinedTerm',
            '@id': `${canonicalUrl}#term`,
            'name': termName,
            'description': seo.description,
            'termCode': term.slug,
            'inDefinedTermSet': `${SITE_DOMAIN}/learn/glossary`
          });

          // TechArticle Schema
          seo.schemas.push({
            '@type': 'TechArticle',
            '@id': `${canonicalUrl}#article`,
            'headline': `What is ${term.term}? Nepal Finance Definition`,
            'description': seo.description,
            'inLanguage': isNp ? 'ne-NP' : 'en-US',
            'datePublished': '2026-01-01T00:00:00+05:45',
            'dateModified': '2026-09-01T00:00:00+05:45',
            'author': {
              '@type': 'Person',
              '@id': `${SITE_DOMAIN}/aakash-das#person`,
              'name': 'Aakash Das',
              'jobTitle': 'Founder and Finance Educator',
              'url': `${SITE_DOMAIN}/aakash-das`
            },
            'publisher': { '@id': `${SITE_DOMAIN}/#organization` },
            'isAccessibleForFree': true,
            'speakable': {
              '@type': 'SpeakableSpecification',
              'cssSelector': ['.glossary-term-title', '.glossary-lead-text', '.detailed-explanation']
            }
          });

          // FAQPage schema if term has faqs
          if (Array.isArray(term.faqs) && term.faqs.length > 0) {
            seo.schemas.push({
              '@type': 'FAQPage',
              '@id': `${canonicalUrl}#faq`,
              'mainEntity': term.faqs.map(f => ({
                '@type': 'Question',
                'name': f.q || f.question,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': cleanText(f.a || f.answer, 300)
                }
              }))
            });
          }
        }
      }
    } else if (pathParts.length === 2) {
      // 7. Category Roadmap Hub
      const catSlug = pathParts[1];
      const category = getCategoryBySlug(catSlug);

      if (category) {
        const catTitle = isNp ? (category.np?.name || category.titleNp || category.en?.name || category.title) : (category.en?.name || category.title);
        const catDesc = isNp ? (category.np?.shortDesc || category.np?.overview || category.descriptionNp || category.en?.shortDesc || category.description) : (category.en?.shortDesc || category.en?.overview || category.description);

        seo.title = `${catTitle} Curriculum & Roadmap | risePaisa Learn`;
        seo.description = cleanText(catDesc, 160) || `Complete structured curriculum for ${catTitle} in Nepal. Master fundamentals, rules, and strategies with risePaisa.`;
        seo.breadcrumbs.push({ name: catTitle, url: canonicalUrl });

        // Course Schema
        const totalLessons = (category.roadmap || []).reduce((acc, st) => acc + (st.lessons?.length || 0), 0);
        seo.schemas.push({
          '@type': 'Course',
          '@id': `${canonicalUrl}#course`,
          'name': catTitle,
          'description': seo.description,
          'provider': { '@id': `${SITE_DOMAIN}/#organization` },
          'isAccessibleForFree': true,
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'NPR',
            'category': 'Free Financial Education'
          },
          'hasCourseInstance': {
            '@type': 'CourseInstance',
            'courseMode': 'Online',
            'courseWorkload': 'PT8H'
          },
          'numberOfLessons': totalLessons,
          'educationalCredentialAwarded': 'Free Financial Literacy Certificate'
        });

        // FAQPage schema if category has FAQs
        if (Array.isArray(category.faqs) && category.faqs.length > 0) {
          seo.schemas.push({
            '@type': 'FAQPage',
            '@id': `${canonicalUrl}#faq`,
            'mainEntity': category.faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.q || faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': cleanText(faq.a || faq.answer, 300)
              }
            }))
          });
        }
      }
    } else if (pathParts.length === 3) {
      // 8. Lesson Detail Page
      const catSlug = pathParts[1];
      const lessonSlug = pathParts[2];
      const category = getCategoryBySlug(catSlug);
      const lesson = getLessonBySlug(catSlug, lessonSlug);

      if (category && lesson) {
        const catTitle = isNp ? (category.np?.name || category.titleNp || category.en?.name || category.title) : (category.en?.name || category.title);
        const lessonTitle = isNp
          ? (lesson.np?.title || lesson.title || 'Lesson')
          : (lesson.en?.title || lesson.title || 'Lesson');
        const lessonSummary = isNp
          ? (lesson.np?.summary || lesson.summary || '')
          : (lesson.en?.summary || lesson.summary || '');

        seo.title = `${lessonTitle} | ${catTitle} | risePaisa`;
        seo.description = cleanText(lessonSummary, 160) || `Learn ${lessonTitle} as part of the ${catTitle} roadmap on risePaisa.`;
        seo.type = 'article';
        seo.breadcrumbs.push({ name: catTitle, url: `${SITE_DOMAIN}/learn/${catSlug}` });
        seo.breadcrumbs.push({ name: lessonTitle, url: canonicalUrl });

        // Course Schema for Lesson Module
        seo.schemas.push({
          '@type': 'Course',
          '@id': `${canonicalUrl}#course`,
          'name': lessonTitle,
          'description': seo.description,
          'provider': { '@id': `${SITE_DOMAIN}/#organization` },
          'isAccessibleForFree': true,
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'NPR',
            'category': 'Free Financial Education'
          },
          'isPartOf': {
            '@type': 'Course',
            'name': catTitle,
            'url': `${SITE_DOMAIN}/learn/${catSlug}`
          },
          'educationalLevel': lesson.difficulty?.en || 'Beginner',
          'learningResourceType': 'Lesson'
        });

        // TechArticle Schema
        seo.schemas.push({
          '@type': 'TechArticle',
          '@id': `${canonicalUrl}#article`,
          'headline': lessonTitle,
          'description': seo.description,
          'inLanguage': isNp ? 'ne-NP' : 'en-US',
          'datePublished': '2026-01-15T00:00:00+05:45',
          'dateModified': '2026-09-01T00:00:00+05:45',
          'author': {
            '@type': 'Person',
            '@id': `${SITE_DOMAIN}/aakash-das#person`,
            'name': 'Aakash Das',
            'jobTitle': 'Founder and Finance Educator',
            'url': `${SITE_DOMAIN}/aakash-das`
          },
          'publisher': { '@id': `${SITE_DOMAIN}/#organization` },
          'isPartOf': {
            '@type': 'Course',
            'name': catTitle,
            'url': `${SITE_DOMAIN}/learn/${catSlug}`
          },
          'isAccessibleForFree': true,
          'educationalLevel': lesson.difficulty?.en || 'Beginner',
          'learningResourceType': 'Lesson',
          'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['.lesson-hero-title', '.lesson-hero-summary', '.lead-paragraph', '.lesson-heading-h2']
          }
        });

        // FAQPage schema if lesson has FAQs
        const lessonFaqs = (isNp && lesson.np?.faqs) ? lesson.np.faqs : (lesson.en?.faqs || lesson.faqs || []);
        if (Array.isArray(lessonFaqs) && lessonFaqs.length > 0) {
          seo.schemas.push({
            '@type': 'FAQPage',
            '@id': `${canonicalUrl}#faq`,
            'mainEntity': lessonFaqs.map(f => ({
              '@type': 'Question',
              'name': f.q || f.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': cleanText(f.a || f.answer, 300)
              }
            }))
          });
        }
      }
    }
  } else if (rootSection === 'calculators') {
    seo.breadcrumbs.push({ name: 'Calculators', url: `${SITE_DOMAIN}/calculators` });

    if (pathParts.length === 1) {
      // 9. Calculators Hub
      seo.title = `Financial Calculators for Nepal | SIP, EMI, Tax & Loans | risePaisa`;
      seo.description = `Free financial calculators designed for Nepal: SIP wealth compounding, loan EMIs, SWP regular income, home loans, fixed deposits, and income tax calculations.`;
      seo.keywords = `SIP calculator Nepal, EMI calculator Nepal, loan interest calculator Kathmandu, SWP calculator, home loan calculator Nepal, risePaisa calculators`;

      seo.schemas.push({
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collection`,
        'name': 'Financial Calculators for Nepal',
        'description': seo.description,
        'hasPart': CALCULATOR_REGISTRY.map(c => ({
          '@type': 'SoftwareApplication',
          'name': c.title,
          'description': c.shortDesc,
          'applicationCategory': 'FinanceApplication',
          'url': `${SITE_DOMAIN}/calculators/${c.id}`
        }))
      });
    } else {
      // 10. Calculator Detail (resolving aliases like /calculators/fixed-deposit -> fdrd)
      const rawCalcId = pathParts[1];
      const resolvedId = (CALCULATOR_SLUG_TO_ID && CALCULATOR_SLUG_TO_ID[rawCalcId]) || rawCalcId;
      const calc = CALCULATOR_REGISTRY.find(c => c.id === resolvedId || c.id === rawCalcId);

      if (calc) {
        seo.title = `${calc.title} for Nepal | Free Financial Tool | risePaisa`;
        seo.description = `${calc.shortDesc} Interactive calculator with inflation adjustment and growth visualization for Nepal.`;
        seo.breadcrumbs.push({ name: calc.title, url: canonicalUrl });

        seo.schemas.push({
          '@type': 'WebApplication',
          '@id': `${canonicalUrl}#app`,
          'name': `${calc.title} - Nepal`,
          'applicationCategory': 'FinanceApplication',
          'operatingSystem': 'All',
          'description': seo.description,
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'NPR'
          },
          'provider': { '@id': `${SITE_DOMAIN}/#organization` }
        });
      }
    }
  } else if (rootSection === 'courses') {
    seo.breadcrumbs.push({ name: 'Courses', url: `${SITE_DOMAIN}/courses` });

    if (pathParts.length === 1) {
      // 11. Courses Hub
      seo.title = `Financial Masterclasses & Courses for Nepal | risePaisa`;
      seo.description = `Structured video courses and masterclasses on wealth management, personal finance, and investing in Nepal.`;
      seo.keywords = `NEPSE masterclass, personal finance course Nepal, share market training Kathmandu, risePaisa courses`;

      const allCourses = getAllCourses ? getAllCourses() : [];
      seo.schemas.push({
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collection`,
        'name': 'Financial Masterclasses & Courses for Nepal',
        'description': seo.description,
        'hasPart': allCourses.map(c => ({
          '@type': 'Course',
          'name': c.title,
          'description': c.shortDescription,
          'provider': { '@id': `${SITE_DOMAIN}/#organization` },
          'url': `${SITE_DOMAIN}/courses/${c.slug}`
        }))
      });
    } else {
      // 12. Course Detail Page
      const courseSlug = pathParts[1];
      const course = getCourseBySlug ? getCourseBySlug(courseSlug) : null;

      if (course) {
        seo.title = `${course.title} | Nepal Financial Course | risePaisa`;
        seo.description = cleanText(course.shortDescription || course.fullDescription, 160) || `Master ${course.title} in Nepal with comprehensive modules from risePaisa.`;
        seo.keywords = `${course.title}, ${course.category || 'finance Nepal'}, stock course Nepal, risePaisa academy`;
        seo.breadcrumbs.push({ name: course.title, url: canonicalUrl });

        // Course Schema
        seo.schemas.push({
          '@type': 'Course',
          '@id': `${canonicalUrl}#course`,
          'name': course.title,
          'description': seo.description,
          'provider': { '@id': `${SITE_DOMAIN}/#organization` },
          'instructor': {
            '@type': 'Person',
            '@id': `${SITE_DOMAIN}/aakash-das#person`,
            'name': course.instructor || 'Aakash Das',
            'jobTitle': 'Founder and Finance Educator',
            'url': `${SITE_DOMAIN}/aakash-das`
          },
          'isAccessibleForFree': false,
          'offers': {
            '@type': 'Offer',
            'price': String(course.price || 0),
            'priceCurrency': course.currency || 'NPR',
            'availability': 'https://schema.org/InStock',
            'category': 'Paid Educational Course'
          },
          'hasCourseInstance': {
            '@type': 'CourseInstance',
            'courseMode': 'Online',
            'courseWorkload': 'PT10H'
          },
          'educationalCredentialAwarded': 'risePaisa Financial Literacy Certificate'
        });
      }
    }
  } else if (rootSection === 'resources') {
    seo.breadcrumbs.push({ name: 'Resources', url: `${SITE_DOMAIN}/resources` });

    if (pathParts.length === 1) {
      // 13. Resources Hub
      seo.title = `Free Financial Tools, Spreadsheets & Templates | risePaisa`;
      seo.description = `Download free financial tracking templates, Notion dashboards, and budget spreadsheets tailored for Nepali individuals.`;
      seo.keywords = `Nepal budget template, personal finance spreadsheet Nepal, Notion budget Nepal, cash flow tracker Kathmandu`;

      const allResources = getResources ? getResources() : [];
      seo.schemas.push({
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collection`,
        'name': 'Financial Templates & Digital Resources for Nepal',
        'description': seo.description,
        'hasPart': allResources.map(r => ({
          '@type': 'Product',
          'name': r.title,
          'description': r.shortDescription,
          'url': `${SITE_DOMAIN}/resources/${r.slug}`
        }))
      });
    } else {
      // 14. Resource Detail Page
      const resourceSlug = pathParts[1];
      const resource = getResourceBySlug ? getResourceBySlug(resourceSlug) : null;

      if (resource) {
        seo.title = `${resource.title} for Nepal | risePaisa Tools`;
        seo.description = cleanText(resource.shortDescription || resource.fullDescription, 160) || `Download ${resource.title} tailored for personal finance in Nepal.`;
        seo.keywords = `${resource.title}, ${resource.category || 'tools'}, Nepal spreadsheet, risePaisa template`;
        seo.breadcrumbs.push({ name: resource.title, url: canonicalUrl });
        if (resource.imageUrl) {
          seo.image = resource.imageUrl.startsWith('http') ? resource.imageUrl : `${SITE_DOMAIN}/${resource.imageUrl}`;
        }

        // Product / DigitalDocument Schema
        seo.schemas.push({
          '@type': 'Product',
          '@id': `${canonicalUrl}#product`,
          'name': resource.title,
          'description': seo.description,
          'image': seo.image,
          'category': resource.category || 'Digital Financial Tool',
          'brand': { '@id': `${SITE_DOMAIN}/#organization` },
          'offers': {
            '@type': 'Offer',
            'price': String(resource.price || 0),
            'priceCurrency': resource.currency || 'NPR',
            'availability': 'https://schema.org/InStock'
          }
        });
      }
    }
  } else if (rootSection === 'blog') {
    seo.breadcrumbs.push({ name: 'Blog', url: `${SITE_DOMAIN}/blog` });

    if (pathParts.length === 1) {
      // 15. Blog Hub
      seo.title = `Financial Blog & Market Analysis for Nepal | risePaisa`;
      seo.description = `In-depth articles and analytical perspectives on NEPSE market trends, macroeconomics, tax policies, and wealth strategies in Nepal.`;
      seo.keywords = `Nepal finance blog, NEPSE analysis, share market articles, Nepal tax blog, risePaisa insights`;

      const allArticles = getArticles ? getArticles() : [];
      seo.schemas.push({
        '@type': 'Blog',
        '@id': `${canonicalUrl}#blog`,
        'name': 'risePaisa Financial Analysis & Blog',
        'description': seo.description,
        'publisher': { '@id': `${SITE_DOMAIN}/#organization` },
        'blogPost': allArticles.map(a => ({
          '@type': 'BlogPosting',
          'headline': a.title,
          'description': a.excerpt,
          'url': `${SITE_DOMAIN}/blog/${a.slug}`
        }))
      });
    } else {
      // 16. Blog Post Detail Page
      const postSlug = pathParts[1];
      const article = getArticleBySlug ? getArticleBySlug(postSlug) : null;

      if (article) {
        seo.title = `${article.title} | risePaisa Blog`;
        seo.description = cleanText(article.excerpt || article.content, 160);
        seo.type = 'article';
        seo.breadcrumbs.push({ name: article.title, url: canonicalUrl });
        if (article.thumbnail) {
          seo.image = article.thumbnail.startsWith('http') ? article.thumbnail : `${SITE_DOMAIN}/${article.thumbnail}`;
        }
        seo.datePublished = article.date ? `${article.date}T00:00:00+05:45` : '2026-01-01T00:00:00+05:45';
        seo.dateModified = article.lastUpdated ? `${article.lastUpdated}T00:00:00+05:45` : seo.datePublished;
        seo.articleSection = article.category || 'Finance';

        const citations = Array.isArray(article.sources)
          ? article.sources.map(s => (typeof s === 'string' ? s : s.url)).filter(Boolean)
          : [];

        // BlogPosting Schema
        const blogPostingSchema = {
          '@type': 'BlogPosting',
          '@id': `${canonicalUrl}#article`,
          'isPartOf': { '@id': `${SITE_DOMAIN}/#website` },
          'headline': article.title,
          'description': seo.description,
          'image': seo.image,
          'inLanguage': 'en-US',
          'datePublished': seo.datePublished,
          'dateModified': seo.dateModified,
          'author': {
            '@type': 'Person',
            '@id': `${SITE_DOMAIN}/aakash-das#person`,
            'name': article.author || 'Aakash Das',
            'jobTitle': article.authorRole || 'Founder of RisePaisa | Finance Educator & Content Creator',
            'url': `${SITE_DOMAIN}/aakash-das`
          },
          'publisher': { '@id': `${SITE_DOMAIN}/#organization` },
          'articleSection': seo.articleSection,
          'isAccessibleForFree': true,
          'publishingPrinciples': `${SITE_DOMAIN}/editorial-policy`
        };

        if (citations.length > 0) {
          blogPostingSchema.citation = citations;
        }

        seo.schemas.push(blogPostingSchema);
      }
    }
  } else if (rootSection === 'search') {
    // 17. Search Page
    const q = searchParams ? searchParams.get('q') : '';
    seo.title = q
      ? `Search results for "${q}" | risePaisa`
      : `Search Financial Lessons, Guides & Tools | risePaisa`;
    seo.description = `Search across hundreds of financial lessons, cornerstone guides, glossary definitions, and interactive calculators in Nepal.`;
    seo.robots = 'noindex, follow'; // Prevent crawl budget waste on dynamic search queries
  } else if (rootSection === 'about') {
    // 18. About Page
    seo.title = `About risePaisa | Independent Financial Literacy for Nepal`;
    seo.description = `Learn about risePaisa's mission, founder Aakash Das, and our dedication to bringing transparent, research-backed financial literacy to Nepal.`;
    seo.breadcrumbs.push({ name: 'About', url: canonicalUrl });

    seo.schemas.push({
      '@type': 'AboutPage',
      '@id': `${canonicalUrl}#about`,
      'name': seo.title,
      'description': seo.description,
      'mainEntity': { '@id': `${SITE_DOMAIN}/#organization` }
    });
  } else if (rootSection === 'aakash-das') {
    // 18b. Aakash Das Profile Page
    seo.title = `Aakash Das — Founder of RisePaisa | Finance Educator`;
    seo.description = `Learn about Aakash Das, founder of RisePaisa and a finance educator and content creator focused on financial education in Nepal.`;
    seo.type = 'profile';
    seo.image = `${SITE_DOMAIN}/assets/images/aakash-das-founder-risepaisa.jpg`;
    seo.breadcrumbs.push({ name: 'About', url: `${SITE_DOMAIN}/about` });
    seo.breadcrumbs.push({ name: 'Aakash Das', url: canonicalUrl });

    seo.schemas.push({
      '@type': 'ProfilePage',
      '@id': `${canonicalUrl}#profilepage`,
      'url': canonicalUrl,
      'name': seo.title,
      'isPartOf': { '@id': `${SITE_DOMAIN}/#website` },
      'mainEntity': { '@id': `${SITE_DOMAIN}/aakash-das#person` }
    });
  } else if (rootSection === 'contact') {
    // 19. Contact Page
    seo.title = `Contact risePaisa | Reach Out for Financial Education`;
    seo.description = `Get in touch with the risePaisa team and founder Aakash Das for financial inquiries, partnerships, or educational feedback in Kathmandu, Nepal.`;
    seo.breadcrumbs.push({ name: 'Contact', url: canonicalUrl });

    seo.schemas.push({
      '@type': 'ContactPage',
      '@id': `${canonicalUrl}#contact`,
      'name': seo.title,
      'description': seo.description,
      'mainEntity': {
        '@type': 'ContactPoint',
        'contactType': 'Educational & General Inquiries',
        'areaServed': 'Nepal',
        'availableLanguage': ['Nepali', 'English']
      }
    });
  } else if (['privacy', 'terms', 'disclaimer', 'refund-policy', 'editorial-policy', 'faq'].includes(rootSection)) {
    // 20. Legal & Policy Pages
    const legalTitles = {
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'disclaimer': 'Financial & Investment Disclaimer',
      'refund-policy': 'Refund Policy',
      'editorial-policy': 'Editorial Policy & Fact-Checking Standards',
      'faq': 'Frequently Asked Questions'
    };
    const title = legalTitles[rootSection] || 'Legal';
    seo.title = `${title} | risePaisa`;
    seo.description = rootSection === 'editorial-policy'
      ? `Read RisePaisa's official editorial policy, primary regulatory sourcing standards, and fact-checking protocols for financial education in Nepal.`
      : `Read our official ${title.toLowerCase()} for risePaisa platform users, investors, and students in Nepal.`;
    seo.breadcrumbs.push({ name: title, url: canonicalUrl });

    seo.schemas.push({
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      'name': seo.title,
      'description': seo.description,
      'isPartOf': { '@id': `${SITE_DOMAIN}/#website` }
    });
  } else {
    // 21. 404 Not Found Fallback
    seo.title = `Page Not Found (404) | risePaisa`;
    seo.description = `The requested page could not be found. Explore our financial learning tracks, free calculators, or return to risePaisa home.`;
    seo.robots = 'noindex, nofollow';
  }

  // ── Construct BreadcrumbList Schema ─────────────
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumbs`,
    'itemListElement': seo.breadcrumbs.map((b, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': b.name,
      'item': b.url
    }))
  };

  // Compile final JSON-LD graph
  const ldJsonGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      aakashDasPersonSchema,
      websiteSchema,
      breadcrumbSchema,
      ...seo.schemas
    ]
  };

  seo.ldJson = ldJsonGraph;
  return seo;
}

/**
 * Update Document Head and Schema.org JSON-LD dynamically
 * Called on route transitions and language switch events
 */
export async function updatePageSEO(pathname = (typeof window !== 'undefined' ? window.location?.pathname || '/' : '/'), searchParams = null, explicitLang = null) {
  if (typeof document === 'undefined') return;

  const currentLang = explicitLang || getLearnLanguage();
  const pathParts = (pathname || '/').replace(/^\/+|\/+$/g, '').split('/');
  const rootSection = pathParts[0] || '';

  let learnData = null;
  if (rootSection === 'learn') {
    learnData = await getLearnData();
  }

  const seo = resolvePageSEO(pathname, searchParams, currentLang, learnData);
  const isNp = currentLang === 'np' || currentLang === 'ne';

  // 1. HTML lang attribute
  document.documentElement.setAttribute('lang', isNp ? 'ne' : 'en');

  // 2. Document Title
  document.title = seo.title;

  // 3. Meta Tags
  setMetaTag('name', 'description', seo.description);
  setMetaTag('name', 'keywords', seo.keywords);
  setMetaTag('name', 'robots', seo.robots);
  setMetaTag('name', 'googlebot', seo.robots);
  setMetaTag('name', 'bingbot', seo.robots);
  const pageAuthor = (rootSection === 'aakash-das' || seo.type === 'article') ? 'Aakash Das' : SITE_NAME;
  setMetaTag('name', 'author', pageAuthor);

  // 4. Canonical & Hreflang Tags
  setLinkTag('canonical', seo.canonical);
  setLinkTag('alternate', seo.canonical, { hreflang: 'en' });
  setLinkTag('alternate', seo.canonical, { hreflang: 'ne' });
  setLinkTag('alternate', seo.canonical, { hreflang: 'x-default' });

  // 5. Open Graph Meta Tags
  setMetaTag('property', 'og:site_name', SITE_NAME);
  setMetaTag('property', 'og:type', seo.type || 'website');
  setMetaTag('property', 'og:title', seo.title);
  setMetaTag('property', 'og:description', seo.description);
  setMetaTag('property', 'og:url', seo.canonical);
  setMetaTag('property', 'og:image', seo.image || DEFAULT_OG_IMAGE);
  setMetaTag('property', 'og:image:alt', `${seo.title} - risePaisa`);
  setMetaTag('property', 'og:locale', isNp ? 'ne_NP' : 'en_US');
  setMetaTag('property', 'og:locale:alternate', isNp ? 'en_US' : 'ne_NP');

  // 6. Twitter Card Meta Tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', seo.title);
  setMetaTag('name', 'twitter:description', seo.description);
  setMetaTag('name', 'twitter:image', seo.image || DEFAULT_OG_IMAGE);
  setMetaTag('name', 'twitter:image:alt', `${seo.title} - risePaisa`);
  setMetaTag('name', 'twitter:creator', TWITTER_HANDLE);
  setMetaTag('name', 'twitter:site', TWITTER_HANDLE);

  // 7. Article specific tags
  if (seo.type === 'article' && seo.datePublished) {
    setMetaTag('property', 'article:published_time', seo.datePublished);
    if (seo.dateModified) setMetaTag('property', 'article:modified_time', seo.dateModified);
    if (seo.articleSection) setMetaTag('property', 'article:section', seo.articleSection);
  }

  // 8. Inject / Replace Schema.org JSON-LD Script
  let scriptEl = document.getElementById('rp-ld-json');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'rp-ld-json';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(seo.ldJson, null, 2);

  return seo;
}

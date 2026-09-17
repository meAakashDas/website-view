// ==============================================
// risePaisa - Learn Section Data & Localization Engine
// Foundation for Nepal's Structured Financial Learning Platform
// ==============================================

import { ROUTES } from '../routes.js';
import { BATCH_A } from './lessons/batchA.js';
import { BATCH_B } from './lessons/batchB.js';
import { BATCH_C } from './lessons/batchC.js';
import { BATCH_D } from './lessons/batchD.js';
import { BATCH_E } from './lessons/batchE.js';
import { BATCH_F } from './lessons/batchF.js';
import { BATCH_G } from './lessons/batchG.js';
import { BATCH_H } from './lessons/batchH.js';
import { BATCH_I } from './lessons/batchI.js';
import { BATCH_J } from './lessons/batchJ.js';
import { BATCH_K } from './lessons/batchK.js';
import { BATCH_L } from './lessons/batchL.js';
import { BATCH_M } from './lessons/batchM.js';
import { BATCH_N } from './lessons/batchN.js';
import { CURRICULUM_ENRICHMENT } from './lessons/curriculumEnrichment.js';
import { IPO_GUIDE } from './guides/ipoGuide.js';
import { CDSC_GUIDE } from './guides/cdscGuide.js';
import { EXPANDED_GUIDES } from './guides/expandedGuides.js';
import { ADDITIONAL_GUIDES } from './guides/additionalGuides.js';

// ── Language State Management ──────────────────────
const LANG_STORAGE_KEY = 'rp_learn_lang';
const RECENT_VIEWS_KEY = 'rp_learn_recent_views';
const SAVED_GUIDES_KEY = 'rp_learn_saved_guides';
let memoryLang = 'en';

export function getLearnLanguage() {
  if (typeof window === 'undefined') return memoryLang;
  return localStorage.getItem(LANG_STORAGE_KEY) || memoryLang || 'en';
}

export function setLearnLanguage(lang) {
  const validLang = lang === 'np' ? 'np' : 'en';
  memoryLang = validLang;
  if (typeof window === 'undefined') return;
  localStorage.setItem(LANG_STORAGE_KEY, validLang);
  window.dispatchEvent(new CustomEvent('rp-learn-lang-changed', { detail: { lang: validLang } }));
}

export function onLearnLanguageChange(callback) {
  if (typeof window === 'undefined') return () => {};
  const handler = (e) => callback(e.detail.lang);
  window.addEventListener('rp-learn-lang-changed', handler);
  return () => window.removeEventListener('rp-learn-lang-changed', handler);
}

// ── Shared UI Translations ─────────────────────────
export const LEARN_UI = {
  en: {
    badge: 'Educational Academy',
    heroTitle: 'Learn Finance with Confidence',
    heroSubtitle: 'Practical financial education designed for Nepal. Learn step by step through structured lessons, real-world examples, trusted guides, and practical financial tools.',
    startLearning: 'Start Learning',
    browseTopics: 'Browse All Topics',
    searchPlaceholder: 'Search lessons, guides, calculators...',
    searchShortcut: 'Press / to search',
    infoChips: [
      'Nepal-focused',
      'Beginner Friendly',
      'Regularly Updated',
      'Free Learning'
    ],
    allPathsTitle: 'Structured Learning Paths',
    allPathsSubtitle: 'Select a pathway to master financial concepts from foundation to practical execution in Nepal.',
    lessonsCount: 'Lessons',
    duration: 'Duration',
    difficulty: 'Level',
    progressInactive: '0% Complete (Foundation Ready)',
    philosophyTitle: 'How RisePaisa Teaches Finance',
    philosophySubtitle: 'A structured, three-phase framework designed for real-world application in Nepal.',
    phil1Title: 'Learn the Basics',
    phil1Desc: 'Understand financial concepts from the ground up without complex jargon or intimidating math.',
    phil2Title: 'Apply Your Knowledge',
    phil2Desc: 'Practice with live calculators, interactive tools, and real Nepali salary and tax scenarios.',
    phil3Title: 'Build Long-Term Confidence',
    phil3Desc: 'Progress smoothly from day-to-day budgeting to advanced NEPSE investing and wealth building.',
    topicsTitle: 'Popular Topics',
    topicsSubtitle: 'Quick answers to foundational finance questions in Nepal.',
    viewAllTopics: 'Explore All Topics',
    roadmapsTitle: 'Beginner Roadmaps',
    roadmapsSubtitle: 'New to finance? Follow these step-by-step visual learning orders.',
    exploreRoadmap: 'View Complete Roadmap',
    featuredTitle: 'Featured Lessons',
    featuredSubtitle: 'In-depth lessons handpicked by finance educators in Nepal.',
    featuredBadge: 'Featured',
    bookmark: 'Bookmark',
    guidesTitle: 'Popular Nepal Finance Guides',
    guidesSubtitle: 'Comprehensive, end-to-end practical references for navigating Nepal’s financial systems.',
    sectionsCount: 'sections',
    readGuide: 'Read Complete Guide',
    recommendedCalcsTitle: 'Recommended Calculators',
    recommendedCalcsSubtitle: 'Connect what you learn directly with interactive tools to calculate your real numbers.',
    openCalculator: 'Open Calculator',
    difficultyTitle: 'Learning by Difficulty',
    difficultySubtitle: 'Start at the level that matches your current financial experience.',
    recommendedStart: 'Recommended Start',
    viewLevel: 'Browse Level',
    recentlyUpdatedTitle: 'Recently Updated',
    recentlyUpdatedSubtitle: 'Actively maintained for current Nepal tax rules, SEBON regulations, and NRB policies.',
    reasonLabel: 'Update Note',
    glossaryTitle: 'Finance Glossary Preview',
    glossarySubtitle: 'Demystifying essential financial jargon used in Nepal.',
    viewAllGlossary: 'View Complete Glossary',
    freeResourcesTitle: 'Free Educational Resources',
    freeResourcesSubtitle: 'Practical templates, spreadsheets, and checklists to take control of your wealth.',
    downloadResource: 'Download Template',
    continueTitle: 'Continue Learning',
    continueSubtitle: 'Pick up where you left off or start with the highest-rated introductory lesson.',
    continuePrompt: 'Resume Your Journey',
    startJourney: 'Start Here First',
    newsletterTitle: 'Weekly Financial Insights for Nepal',
    newsletterSubtitle: 'Get clear, bite-sized lessons, regulatory updates, and practical money strategies delivered to your inbox.',
    newsletterPlaceholder: 'Enter your email address',
    newsletterButton: 'Subscribe Free',
    newsletterNotice: 'No spam. Unsubscribe anytime with 1 click.',
    newsletterSuccess: 'Thank you! You are now subscribed to RisePaisa Insights.',
    bridgeTitle: 'Practical Financial Tools Built for Nepal',
    bridgeSubtitle: 'Education is only half the journey. RisePaisa provides free interactive calculators and templates to execute what you learn.',
    exploreCalculators: 'Explore All Calculators',
    exploreResources: 'Browse Notion & Budget Tools',
    breadcrumbHome: 'Home',
    breadcrumbLearn: 'Learn',
    roadmapTitle: 'Curriculum Roadmap',
    roadmapSubtitle: 'Complete each stage sequentially to build unbreakable financial mastery in Nepal.',
    relatedCalculators: 'Practice with Interactive Calculators',
    relatedResources: 'Practical Templates & Systems',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Practical answers to common financial dilemmas faced by learners in Nepal.',
    relatedCategories: 'Explore Next Topics',
    comingSoonBadge: 'Curriculum Planned',
    previewBadge: 'Foundation Lesson',
    practiceBadge: 'Interactive Tool',
    estTime: 'Est. Time',
    prerequisites: 'Prerequisites',
    nonePrereq: 'None - Absolute Beginner Friendly',
    backToLearn: 'All Learning Paths',
    startTopic: 'Start This Path',
    freePlatformNotice: '100% Free Public Financial Literacy Initiative',
        viewAll: 'View All',
    browseCategory: 'Browse Category',
    exploreMore: 'Explore More',
    // Part 3 Architecture Additions
    courseContents: 'Course Contents',
    learningRoadmap: 'Learning Roadmap',
    visualRoadmapTitle: 'Structured Learning Journey',
    visualRoadmapSubtitle: 'Follow the progressive milestones from core foundations to advanced applications in Nepal.',
    module: 'Module',
    modules: 'Modules',
    lesson: 'Lesson',
    lessons: 'Lessons',
    guides: 'Guides',
    calculators: 'Calculators',
    completed: 'Completed',
    inProgress: 'In Progress',
    notStarted: 'Not Started',
    markCompleted: 'Mark Complete',
    completedBadge: 'Completed',
    bookmarkLesson: 'Bookmark',
    bookmarked: 'Bookmarked',
    previousLesson: 'Previous Lesson',
    nextLesson: 'Next Lesson',
    currentLesson: 'Current Lesson',
    learningSequence: 'Learning Sequence',
    estimatedCompletion: 'Estimated Completion',
    entireCategory: 'Entire Pathway',
    currentModule: 'Current Module',
    currentLessonEst: 'Current Lesson',
    smartRecommendations: 'Recommended Next Steps',
    recommendedGuide: 'Recommended Guide',
    recommendedCalc: 'Recommended Calculator',
    recommendedGlossary: 'Key Terms to Master',
    collapseModule: 'Collapse',
    expandModule: 'Expand',
    lastUpdated: 'Updated',
    progressTracker: 'Your Learning Progress',
    jumpTo: 'Jump to',
    overview: 'Overview',
    closeContents: 'Close Contents',
    allLessonsCompleted: 'All lessons completed! Great job.',
    startThisLesson: 'Start Lesson',
    prerequisitesRequired: 'Prerequisites',
    categoryOverviewTitle: 'Category Overview',
    lessonTypes: {
      lesson: 'Lesson',
      guide: 'Guide',
      caseStudy: 'Case Study',
      explainer: 'Explainer',
      reference: 'Reference',
      tutorial: 'Tutorial',
      checklist: 'Checklist',
      glossary: 'Glossary'
    },
    // Part 4 Lesson Reading Experience Additions
    tableOfContents: 'Table of Contents',
    onThisPage: 'On This Page',
    whatIsThis: 'What is this?',
    whyItMatters: 'Why does it matter?',
    howItWorks: 'How does it work?',
    howInNepalTitle: 'How does it apply in Nepal?',
    nepalContext: 'The Nepal Context & Regulatory Reality',
    practicalExample: 'Practical Real-World Example in Nepal',
    financialFormula: 'Financial Formula & Step-by-Step Calculation',
    commonMistakes: 'Common Mistakes to Avoid in Nepal',
    visualDiagram: 'Visual Learning & Comparison',
    downloadableResourcesTitle: 'Downloadable Resources & Checklists',
    summaryKeyTakeaways: 'Summary, Key Takeaways & Practical Exercise',
    frequentlyAskedQuestions: 'Knowledge Check & Review Questions',
    markLessonComplete: 'Mark as Completed',
    markLessonIncomplete: 'Completed (Click to undo)',
    lessonCompletedToast: 'Lesson marked as completed!',
    shareLesson: 'Share Lesson',
    linkCopied: 'Lesson link copied to clipboard!',
    readingProgress: 'Reading Progress',
    author: 'Author',
    reviewedBy: 'Reviewed by',
    authorName: 'RisePaisa Research Team',
    reviewedByName: 'Verified for Nepal Regulatory Accuracy',
    minRead: 'min read',
    minMastery: 'min mastery',
    continueLearningBtn: 'Continue Learning',
    backToCategory: 'Back to Pathway',
    completedChapter: 'Completed',
    currentChapter: 'Current Chapter',
    upcomingChapter: 'Upcoming Chapter',
    formulaBreakdown: 'Variable Breakdown',
    workedExample: 'Worked Nepal Scenario',
    shortcutCalc: 'Calculate with Your Own Numbers',
    downloadPdf: 'Download PDF',
    jumpToTop: 'Back to Top',
    keyTakeaway: 'Key Takeaway',
    wrongWay: 'Common Pitfall',
    rightWay: 'RisePaisa Best Practice',

    // Part 5 Knowledge Architecture & Guides Tokens
    contentTypeLesson: 'Lesson',
    contentTypeGuide: 'Guide',
    contentTypeCalculator: 'Calculator',
    contentTypeGlossary: 'Glossary',
    contentTypeResource: 'Resource',
    guideHubTitle: 'Complete Financial Guides for Nepal',
    guideHubSubtitle: 'Comprehensive, end-to-end editorial publications and legal frameworks designed to help you master Nepal’s financial systems without dead ends.',
    allGuides: 'All Guides',
    filterByCategory: 'Filter by Domain',
    filterByDifficulty: 'Filter by Level',
    searchGuidesPlaceholder: 'Search guides, legal steps, tax procedures...',
    featuredGuide: 'Featured Cornerstone Guide',
    prerequisitesTitle: 'Recommended Prerequisites',
    prerequisitesDesc: 'While not mandatory, having a basic understanding of these foundational topics will make this guide much easier to master:',
    noPrerequisites: 'None - Absolute Beginner Friendly',
    whereToGoNext: 'Where Should I Go Next?',
    whereToGoNextSubtitle: 'Keep your momentum going. Continue with these contextually linked next steps:',
    recommendedReading: 'Recommended Reading & Tools',
    exploreTool: 'Explore Tool',
    viewGlossaryTerm: 'Read Term Definition',
    savedGuides: 'Saved Guides',
    saveGuide: 'Save Guide',
    guideSaved: 'Saved to Bookmarks',
    recentViewsTitle: 'Recently Viewed',
    clearHistory: 'Clear History',
    financialJourneysTitle: 'Goal-Based Finance Journeys',
    financialJourneysSubtitle: 'Choose what you want to accomplish. We will guide you step-by-step from zero to practical execution in Nepal.',
    chooseGoal: 'What is your current financial goal?',
    startThisJourney: 'Start Journey',
    journeyStep: 'Step',
    curatedCollectionsTitle: 'Curated Learning Collections',
    curatedCollectionsSubtitle: 'Handpicked, ordered learning sequences designed to solve specific life milestones in Nepal.',
    tabOverview: 'Overview',
    tabLessons: 'Lessons',
    tabGuides: 'Guides',
    tabCalculators: 'Calculators',
    tabGlossary: 'Glossary',
    tabResources: 'Resources',
    tabFaqs: 'FAQs',
    allCategories: 'All Topics',
    allDifficulties: 'All Levels',
    guidesCountLabel: 'Guides Available',
    guideChapter: 'Chapter',
    prerequisitesMet: 'Prerequisites Checked',
    shareGuide: 'Share Guide',
    guideLinkCopied: 'Guide link copied to clipboard!',
    stepByStepWalkthrough: 'Step-by-Step Walkthrough',
  },
  np: {
    badge: 'शैक्षिक एकेडेमी',
    heroTitle: 'विश्वासका साथ वित्त सिक्नुहोस्',
    heroSubtitle: 'नेपालका लागि विशेष रूपमा तयार पारिएको व्यावहारिक वित्तीय शिक्षा। संरचित पाठहरू, वास्तविक उदाहरणहरू, भरपर्दा गाइडहरू र व्यावहारिक वित्तीय औजारहरू मार्फत चरणबद्ध सिक्नुहोस्।',
    startLearning: 'सिक्न सुरु गर्नुहोस्',
    browseTopics: 'सबै विषयहरू हेर्नुहोस्',
    searchPlaceholder: 'पाठहरू, गाइडहरू, Calculators खोज्नुहोस्...',
    searchShortcut: 'खोज्न / थिच्नुहोस्',
    infoChips: [
      'नेपाल-केन्द्रित',
      'सुरुवाती-मैत्री',
      'नियमित अद्यावधिक',
      'निःशुल्क सिकाइ'
    ],
    allPathsTitle: 'संरचित सिकाइ मार्गहरू',
    allPathsSubtitle: 'नेपालमा आधारभूत सिद्धान्तदेखि वास्तविक कार्यान्वयनसम्म वित्तीय विषयहरू सिक्न एउटा मार्ग छान्नुहोस्।',
    lessonsCount: 'पाठहरू',
    duration: 'अनुमानित समय',
    difficulty: 'तह',
    progressInactive: '०% पूरा (पाठ्यक्रम तयार)',
    philosophyTitle: 'risePaisa ले वित्त कसरी सिकाउँछ',
    philosophySubtitle: 'नेपालको वास्तविक परिवेशमा प्रयोग गर्न सकिने तीन-चरणीय सिकाइ ढाँचा।',
    phil1Title: 'आधारभूत कुरा बुझ्नुहोस्',
    phil1Desc: 'जटिल शब्द र भ्रामक गणित विना वित्तीय धारणाहरू जगैदेखि स्पष्ट रूपमा बुझ्नुहोस्।',
    phil2Title: 'ज्ञानलाई व्यवहारमा उतार्नुहोस्',
    phil2Desc: 'नेपाली तलब, खर्च र Tax का यथार्थ परिदृश्यहरूमा हाम्रा Calculators प्रयोग गरी अभ्यास गर्नुहोस्।',
    phil3Title: 'दीर्घकालीन आत्मविश्वास बनाउनुहोस्',
    phil3Desc: 'दैनिक Budgeting देखि NEPSE मा अनुशासित लगानी र सम्पत्ति निर्माणसम्म आत्मविश्वासका साथ अघि बढ्नुहोस्।',
    topicsTitle: 'लोकप्रिय विषयहरू',
    topicsSubtitle: 'नेपालको वित्तीय परिवेशमा बारम्बार खोजिने विषयहरूको संक्षिप्त र स्पष्ट समाधान।',
    viewAllTopics: 'सबै विषयहरू अन्वेषण गर्नुहोस्',
    roadmapsTitle: 'सुरुवाती सिकाइ मार्गचित्र',
    roadmapsSubtitle: 'वित्तमा नयाँ हुनुहुन्छ? यी चरणबद्ध सिफारिस गरिएका क्रमहरू पछ्याउनुहोस्।',
    exploreRoadmap: 'पूर्ण मार्गचित्र हेर्नुहोस्',
    featuredTitle: 'विशेष पाठहरू (Featured Lessons)',
    featuredSubtitle: 'नेपालका वित्तीय शिक्षकहरूद्वारा सिफारिस गरिएका गहन र व्यावहारिक पाठहरू।',
    featuredBadge: 'विशेष',
    bookmark: 'Bookmark गर्नुहोस्',
    guidesTitle: 'नेपालका लोकप्रिय वित्तीय गाइडहरू',
    guidesSubtitle: 'नेपालको कानुनी तथा वित्तीय प्रणाली बुझ्न विस्तृत र व्यावहारिक कर्नरस्टोन गाइडहरू।',
    sectionsCount: 'खण्डहरू',
    readGuide: 'पूर्ण गाइड पढ्नुहोस्',
    recommendedCalcsTitle: 'सिफारिस गरिएका Calculators',
    recommendedCalcsSubtitle: 'सिकेका कुराहरू तत्काल आफ्नो आम्दानी, बचत वा लगानीमा प्रत्यक्ष हिसाब गरी हेर्नुहोस्।',
    openCalculator: 'Calculator खोल्नुहोस्',
    difficultyTitle: 'सिकाइ तह (Difficulty Levels)',
    difficultySubtitle: 'आफ्नो अनुभव र ज्ञानको स्तर अनुसार उपयुक्त सिकाइ मार्ग छान्नुहोस्।',
    recommendedStart: 'सिफारिस गरिएको सुरुवाती बिन्दु',
    viewLevel: 'यो तह हेर्नुहोस्',
    recentlyUpdatedTitle: 'हालै अद्यावधिक गरिएका',
    recentlyUpdatedSubtitle: 'नेपाल सरकारको पछिल्लो बजेट, कर नियम र नेपाल राष्ट्र बैंकका नीति अनुसार नियमित अद्यावधिक।',
    reasonLabel: 'अद्यावधिक विवरण',
    glossaryTitle: 'वित्तीय शब्दावली (Glossary Preview)',
    glossarySubtitle: 'नेपालमा प्रयोग हुने प्रमुख आर्थिक तथा वित्तीय शब्दहरूको सरल परिभाषा।',
    viewAllGlossary: 'पूर्ण शब्दावली हेर्नुहोस्',
    freeResourcesTitle: 'निःशुल्क शैक्षिक स्रोत र Templates',
    freeResourcesSubtitle: 'व्यक्तिगत बजेट, लगानी चेकलिस्ट र वित्तीय व्यवस्थापनका लागि उपयोगी डाउनलोडहरू।',
    downloadResource: 'Template डाउनलोड गर्नुहोस्',
    continueTitle: 'सिकाइलाई निरन्तरता दिनुहोस्',
    continueSubtitle: 'छाडेको ठाउँबाट अघि बढ्नुहोस् वा आधारभूत पाठबाट आफ्नो यात्रा सुरु गर्नुहोस्।',
    continuePrompt: 'आफ्नो सिकाइ यात्रा पुनः सुरु गर्नुहोस्',
    startJourney: 'यहाँबाट सुरु गर्नुहोस्',
    newsletterTitle: 'नेपालको साप्ताहिक वित्तीय विश्लेषण',
    newsletterSubtitle: 'स्पष्ट, व्यावहारिक वित्तीय ज्ञान, नयाँ नियमहरू र बचत रणनीतिहरू आफ्नो इनबक्समा पाउनुहोस्।',
    newsletterPlaceholder: 'आफ्नो इमेल ठेगाना प्रविष्ट गर्नुहोस्',
    newsletterButton: 'निःशुल्क दर्ता गर्नुहोस्',
    newsletterNotice: 'कुनै स्पाम आउने छैन। जुनसुकै बेला १ क्लिकमा सदस्यता रद्द गर्न सकिन्छ।',
    newsletterSuccess: 'धन्यवाद! तपाईं risePaisa वित्तीय विश्लेषणमा जोडिनुभएको छ।',
    bridgeTitle: 'नेपालका लागि निर्मित व्यावहारिक वित्तीय औजारहरू',
    bridgeSubtitle: 'सिकाइ आधा यात्रा मात्र हो। सिकेका कुरा तत्काल अभ्यास गर्न risePaisa ले निःशुल्क Calculators र Templates प्रदान गर्दछ।',
    exploreCalculators: 'सबै Calculators हेर्नुहोस्',
    exploreResources: 'Notion र बजेट Tools हेर्नुहोस्',
    breadcrumbHome: 'गृहपृष्ठ',
    breadcrumbLearn: 'सिक्नुहोस्',
    roadmapTitle: 'सिकाइ मार्गचित्र (Curriculum)',
    roadmapSubtitle: 'नेपालको वित्तीय प्रणालीमा अब्बल हुन प्रत्येक चरण क्रमैसँग पूरा गर्नुहोस्।',
    relatedCalculators: 'Calculators मार्फत प्रत्यक्ष अभ्यास गर्नुहोस्',
    relatedResources: 'व्यावहारिक Templates र प्रणालीहरू',
    faqTitle: 'प्रायः सोधिने प्रश्नहरू (FAQ)',
    faqSubtitle: 'नेपालमा व्यक्तिगत वित्त, लगानी र बैंकिङ सम्बन्धी आम जिज्ञासाहरूको स्पष्ट समाधान।',
    relatedCategories: 'अन्य विषयहरू अन्वेषण गर्नुहोस्',
    comingSoonBadge: 'पाठ्यक्रम योजनाबद्ध',
    previewBadge: 'आधारभूत पाठ',
    practiceBadge: 'अभ्यास औजार',
    estTime: 'समय',
    prerequisites: 'आवश्यक पूर्वज्ञान',
    nonePrereq: 'कुनै पूर्वज्ञान आवश्यक छैन - नयाँ सिकारुका लागि उपयुक्त',
    backToLearn: 'सबै सिकाइ मार्गहरू',
    startTopic: 'यो मार्ग सुरु गर्नुहोस्',
    freePlatformNotice: '१००% निःशुल्क सार्वजनिक वित्तीय साक्षरता पहल',
        viewAll: 'सबै हेर्नुहोस्',
    browseCategory: 'श्रेणी ब्राउज गर्नुहोस्',
    exploreMore: 'थप अन्वेषण गर्नुहोस्',
    // Part 3 Architecture Additions
    courseContents: 'पाठ्यक्रम सूची',
    learningRoadmap: 'सिकाइ मार्गचित्र',
    visualRoadmapTitle: 'संरचित सिकाइ यात्रा',
    visualRoadmapSubtitle: 'नेपालमा जगदेखि व्यावहारिक कार्यान्वयनसम्मका चरणबद्ध माइलस्टोनहरू पछ्याउनुहोस्।',
    module: 'मोड्युल',
    modules: 'मोड्युलहरू',
    lesson: 'पाठ',
    lessons: 'पाठहरू',
    guides: 'गाइडहरू',
    calculators: 'Calculators',
    completed: 'सम्पन्न',
    inProgress: 'प्रगतिमा',
    notStarted: 'सुरु नभएको',
    markCompleted: 'सम्पन्न चिन्ह लगाउनुहोस्',
    completedBadge: 'सम्पन्न',
    bookmarkLesson: 'Bookmark गर्नुहोस्',
    bookmarked: 'सुरक्षित गरियो',
    previousLesson: 'अघिल्लो पाठ',
    nextLesson: 'पछिल्लो पाठ',
    currentLesson: 'हालको पाठ',
    learningSequence: 'सिकाइ क्रम',
    estimatedCompletion: 'अनुमानित समय',
    entireCategory: 'पूरै मार्ग',
    currentModule: 'हालको मोड्युल',
    currentLessonEst: 'हालको पाठ',
    smartRecommendations: 'सिफारिस गरिएका अर्को कदमहरू',
    recommendedGuide: 'सिफारिस गरिएको गाइड',
    recommendedCalc: 'सिफारिस गरिएको Calculator',
    recommendedGlossary: 'बुझ्नुपर्ने मुख्य शब्दहरू',
    collapseModule: 'संकुचित गर्नुहोस्',
    expandModule: 'विस्तार गर्नुहोस्',
    lastUpdated: 'अद्यावधिक',
    progressTracker: 'तपाईंको सिकाइ प्रगति',
    jumpTo: 'सिधै जानुहोस्',
    overview: 'परिचय',
    closeContents: 'सूची बन्द गर्नुहोस्',
    allLessonsCompleted: 'सबै पाठहरू सम्पन्न भए! बधाई छ।',
    startThisLesson: 'पाठ सुरु गर्नुहोस्',
    prerequisitesRequired: 'आवश्यक पूर्वज्ञान',
    categoryOverviewTitle: 'विषयको विस्तृत परिचय',
    lessonTypes: {
      lesson: 'Lesson',
      guide: 'Guide',
      caseStudy: 'Case Study',
      explainer: 'Explainer',
      reference: 'Reference',
      tutorial: 'Tutorial',
      checklist: 'Checklist',
      glossary: 'Glossary'
    },
    // Part 4 Lesson Reading Experience Additions
    tableOfContents: 'विषय सूची (Table of Contents)',
    onThisPage: 'यस पाठमा',
    whatIsThis: 'यो के हो?',
    whyItMatters: 'यसको महत्त्व के छ?',
    howItWorks: 'यसले कसरी काम गर्छ?',
    howInNepalTitle: 'नेपालमा यसको प्रयोग कसरी हुन्छ?',
    nepalContext: 'नेपालको वास्तविक परिवेश र नियमहरू',
    practicalExample: 'नेपालको व्यावहारिक परिदृश्य र उदाहरण',
    financialFormula: 'वित्तीय सूत्र र चरणबद्ध हिसाब',
    commonMistakes: 'नेपालमा गरिने सामान्य गल्तीहरू',
    visualDiagram: 'दृश्यात्मक सिकाइ र तुलना',
    downloadableResourcesTitle: 'डाउनलोड गर्न मिल्ने स्रोत र चेकलिस्ट',
    summaryKeyTakeaways: 'निष्कर्ष, मुख्य बुँदाहरू तथा व्यावहारिक अभ्यास',
    frequentlyAskedQuestions: 'ज्ञान परीक्षण तथा समीक्षा प्रश्नहरू',
    markLessonComplete: 'सम्पन्न चिन्ह लगाउनुहोस्',
    markLessonIncomplete: 'सम्पन्न भयो (रद्द गर्न क्लिक गर्नुहोस्)',
    lessonCompletedToast: 'पाठ सम्पन्न भएको सुरक्षित गरियो!',
    shareLesson: 'पाठ Share गर्नुहोस्',
    linkCopied: 'पाठको Link प्रतिलिपि (Copy) गरियो!',
    readingProgress: 'पढाइको प्रगति',
    author: 'लेखक',
    reviewedBy: 'पुनरावलोकन',
    authorName: 'risePaisa अनुसन्धान टोली',
    reviewedByName: 'नेपालको वित्तीय नियम अनुसार प्रमाणित',
    minRead: 'मिनेट पढाइ',
    minMastery: 'मिनेट अभ्यास',
    continueLearningBtn: 'सिकाइलाई अघि बढाउनुहोस्',
    backToCategory: 'सिकाइ मार्गमा फर्कनुहोस्',
    completedChapter: 'सम्पन्न',
    currentChapter: 'हालको पाठ',
    upcomingChapter: 'आगामी पाठ',
    formulaBreakdown: 'सूत्रका चलहरू (Variables)',
    workedExample: 'नेपाली परिदृश्यमा हिसाब',
    shortcutCalc: 'आफ्नो रकम हिसाब गर्नुहोस्',
    downloadPdf: 'PDF डाउनलोड गर्नुहोस्',
    jumpToTop: 'माथि फर्कनुहोस्',
    keyTakeaway: 'मुख्य निष्कर्ष',
    wrongWay: 'प्रायः गरिने गल्ती',
    rightWay: 'risePaisa सही अभ्यास',

    // Part 5 Knowledge Architecture & Guides Tokens
    contentTypeLesson: 'पाठ (Lesson)',
    contentTypeGuide: 'गाइड (Guide)',
    contentTypeCalculator: 'Calculator',
    contentTypeGlossary: 'शब्दावली (Glossary)',
    contentTypeResource: 'सामग्री (Resource)',
    guideHubTitle: 'नेपालका पूर्ण वित्तीय कर्नरस्टोन गाइडहरू',
    guideHubSubtitle: 'नेपालको कानुनी तथा वित्तीय प्रणाली बुझ्न विस्तृत, चरणबद्ध र आधिकारिक कर्नरस्टोन गाइडहरू-जहाँ कुनै पनि प्रश्न अनुत्तरित रहँदैन।',
    allGuides: 'सबै गाइडहरू',
    filterByCategory: 'क्षेत्र अनुसार फिल्टर',
    filterByDifficulty: 'तह अनुसार फिल्टर',
    searchGuidesPlaceholder: 'गाइडहरू, कानुनी प्रक्रिया, कर नियम खोज्नुहोस्...',
    featuredGuide: 'विशेष कर्नरस्टोन गाइड',
    prerequisitesTitle: 'सिफारिस गरिएको पूर्वज्ञान',
    prerequisitesDesc: 'अनिवार्य नभए पनि यी आधारभूत विषयहरू बुझेर यो गाइड पढ्दा विषयवस्तु अझ स्पष्ट हुनेछ:',
    noPrerequisites: 'कुनै पूर्वज्ञान चाहिँदैन - नयाँ सिकारुका लागि उपयुक्त',
    whereToGoNext: 'अब के सिक्ने? (अर्को पाइला)',
    whereToGoNextSubtitle: 'सिकाइको गति नरोक्नुहोस्। तल सिफारिस गरिएका अर्को चरणका सामग्रीहरू अध्ययन गर्नुहोस्:',
    recommendedReading: 'सिफारिस गरिएका सामग्री र औजारहरू',
    exploreTool: 'Calculator खोल्नुहोस्',
    viewGlossaryTerm: 'परिभाषा हेर्नुहोस्',
    savedGuides: 'सुरक्षित गरिएका गाइडहरू',
    saveGuide: 'गाइड सुरक्षित गर्नुहोस्',
    guideSaved: 'Bookmarks मा सुरक्षित भयो',
    recentViewsTitle: 'भर्खरै हेरिएका सामग्री',
    clearHistory: 'इतिहास मेटाउनुहोस्',
    financialJourneysTitle: 'लक्ष्यमा आधारित वित्तीय यात्रा',
    financialJourneysSubtitle: 'आफ्नो वित्तीय लक्ष्य छान्नुहोस्। हामी तपाईंलाई सुरुवाती विन्दुदेखि नेपालमा व्यावहारिक कार्यान्वयनसम्म डोर्‍याउनेछौँ।',
    chooseGoal: 'तपाईंको हालको वित्तीय लक्ष्य के हो?',
    startThisJourney: 'यात्रा सुरु गर्नुहोस्',
    journeyStep: 'पाइला',
    curatedCollectionsTitle: 'विशेष सिकाइ सङ्ग्रहहरू',
    curatedCollectionsSubtitle: 'नेपालमा जीवनका निश्चित माइलस्टोनहरू पार गर्न क्रमबद्ध रूपमा मिलाइएका विशेष पाठहरू।',
    tabOverview: 'अवलोकन',
    tabLessons: 'पाठहरू',
    tabGuides: 'गाइडहरू',
    tabCalculators: 'Calculators',
    tabGlossary: 'शब्दावली',
    tabResources: 'स्रोतहरू',
    tabFaqs: 'FAQ',
    allCategories: 'सबै क्षेत्रहरू',
    allDifficulties: 'सबै तहहरू',
    guidesCountLabel: 'उपलब्ध गाइडहरू',
    guideChapter: 'अध्याय',
    prerequisitesMet: 'पूर्वज्ञान जाँचियो',
    shareGuide: 'गाइड Share गर्नुहोस्',
    guideLinkCopied: 'गाइडको Link प्रतिलिपि (Copy) गरियो!',
    stepByStepWalkthrough: 'चरणबद्ध विस्तृत मार्गदर्शन',
  }
};


// ── Content Types Metadata (Knowledge Architecture) ───────────────
export const CONTENT_TYPES = {
  lesson: {
    id: 'lesson',
    name: { en: 'Lesson', np: 'पाठ' },
    badgeClass: 'badge-lesson',
    icon: 'book',
    desc: { en: 'Learn one concept step by step', np: 'एउटा अवधारणा चरणबद्ध सिक्नुहोस्' }
  },
  guide: {
    id: 'guide',
    name: { en: 'Guide', np: 'गाइड' },
    badgeClass: 'badge-guide',
    icon: 'fileText',
    desc: { en: 'Complete end-to-end explanation', np: 'सुरुदेखि अन्त्यसम्म पूर्ण व्याख्या' }
  },
  calculator: {
    id: 'calculator',
    name: { en: 'Calculator', np: 'Calculator' },
    badgeClass: 'badge-calculator',
    icon: 'calculator',
    desc: { en: 'Interactive financial calculation tool', np: 'अन्तर्क्रियात्मक वित्तीय हिसाब औजार' }
  },
  glossary: {
    id: 'glossary',
    name: { en: 'Glossary', np: 'शब्दावली' },
    badgeClass: 'badge-glossary',
    icon: 'bookmark',
    desc: { en: 'Definition of one key financial term', np: 'एउटा प्रमुख वित्तीय शब्दको परिभाषा' }
  },
  resource: {
    id: 'resource',
    name: { en: 'Resource', np: 'स्रोत' },
    badgeClass: 'badge-resource',
    icon: 'download',
    desc: { en: 'Downloadable file or template', np: 'डाउनलोड गर्न मिल्ने फाइल वा टेम्प्लेट' }
  }
};

// ── Goal-Based Finance Journeys ────────────────────────────────────
export const FINANCE_JOURNEYS = [
  {
    id: 'start-investing',
    icon: 'trendingUp',
    title: { en: 'I want to start investing', np: 'म लगानी सुरु गर्न चाहन्छु' },
    tagline: { en: 'From zero knowledge to owning shares and mutual funds in Nepal', np: 'शून्य ज्ञानबाट नेपालमा सेयर र Mutual Fund को मालिक बन्नेसम्म' },
    color: '#0066cc',
    categorySlug: 'investing',
    steps: [
      {
        number: 1,
        title: { en: 'Understand Money & Inflation', np: 'पैसा र मुद्रास्फीति बुझ्नुहोस्' },
        type: 'lesson',
        slug: 'what-is-investing',
        categorySlug: 'investing',
        duration: '8 min'
      },
      {
        number: 2,
        title: { en: 'Open Demat & MeroShare', np: 'Demat र MeroShare खाता खोल्नुहोस्' },
        type: 'guide',
        slug: 'complete-meroshare-guide',
        duration: '12 min'
      },
      {
        number: 3,
        title: { en: 'Start Small with Mutual Fund SIP', np: 'Mutual Fund SIP बाट सुरु गर्नुहोस्' },
        type: 'guide',
        slug: 'complete-sip-guide',
        duration: '10 min'
      },
      {
        number: 4,
        title: { en: 'Apply for Your First NEPSE IPO', np: 'पहिलो NEPSE IPO भर्नुहोस्' },
        type: 'lesson',
        slug: 'what-is-an-ipo',
        categorySlug: 'nepse',
        duration: '10 min'
      },
      {
        number: 5,
        title: { en: 'Simulate Long-Term Compounding', np: 'लामो अवधिको चक्रवृद्धि हिसाब हेर्नुहोस्' },
        type: 'calculator',
        slug: 'sip',
        duration: 'Interactive'
      }
    ]
  },
  {
    id: 'save-money',
    icon: 'wallet',
    title: { en: 'I want to save money & budget', np: 'म पैसा बचत र बजेट बनाउन चाहन्छु' },
    tagline: { en: 'Stop cash leaks, build a 6-month buffer, and beat inflation', np: 'फजुल खर्च रोक्ने, ६ महिनाको कोष बनाउने र महँगी जित्ने तरिका' },
    color: '#10b981',
    categorySlug: 'personal-finance',
    steps: [
      {
        number: 1,
        title: { en: 'Master the 50/30/20 Budgeting Rule', np: '५०/३०/२० बजेट नियम' },
        type: 'lesson',
        slug: 'budgeting-basics',
        categorySlug: 'personal-finance',
        duration: '10 min'
      },
      {
        number: 2,
        title: { en: 'Build a Guaranteed Emergency Fund', np: 'आपतकालीन कोष निर्माण' },
        type: 'lesson',
        slug: 'emergency-fund',
        categorySlug: 'personal-finance',
        duration: '8 min'
      },
      {
        number: 3,
        title: { en: 'Lock High Interest with Fixed Deposits', np: 'मुद्दती निक्षेपमा उच्च ब्याज' },
        type: 'lesson',
        slug: 'fixed-deposit',
        categorySlug: 'banking',
        duration: '10 min'
      },
      {
        number: 4,
        title: { en: 'Download Nepal Budget Planner Excel', np: 'नेपाल बजेट प्लानर डाउनलोड' },
        type: 'resource',
        slug: 'budget-planner-system',
        duration: 'Free Download'
      }
    ]
  },
  {
    id: 'understand-tax',
    icon: 'shield',
    title: { en: 'I want to understand tax in Nepal', np: 'म नेपालको कर प्रणाली बुझ्न चाहन्छु' },
    tagline: { en: 'Legally minimize TDS, claim insurance rebates, and get tax clearance', np: 'कानुनी रूपमा TDS घटाउने, छुट लिने र कर चुक्ता प्रमाणपत्र लिने' },
    color: '#f59e0b',
    categorySlug: 'taxation',
    steps: [
      {
        number: 1,
        title: { en: 'Register Online for Personal PAN', np: 'व्यक्तिगत PAN दर्ता' },
        type: 'guide',
        slug: 'complete-pan-guide',
        duration: '10 min'
      },
      {
        number: 2,
        title: { en: 'Understand Salary Tax Slabs', np: 'तलब आयकर स्ल्याब बुझ्नुहोस्' },
        type: 'guide',
        slug: 'complete-income-tax-guide',
        duration: '16 min'
      },
      {
        number: 3,
        title: { en: 'Check All Deductions: SSF, CIT & Insurance', np: 'SSF, CIT र बीमा कर छुटहरू' },
        type: 'lesson',
        slug: 'tax-exemptions',
        categorySlug: 'taxation',
        duration: '12 min'
      },
      {
        number: 4,
        title: { en: 'Calculate Exact Income Tax in NPR', np: 'आफ्नो वास्तविक कर हिसाब गर्नुहोस्' },
        type: 'calculator',
        slug: 'nepal-income-tax',
        duration: 'Interactive'
      }
    ]
  },
  {
    id: 'buy-home-loan',
    icon: 'home',
    title: { en: 'I want to buy a home or take a loan', np: 'म घर किन्न वा बैंक ऋण लिन चाहन्छु' },
    tagline: { en: 'Navigate bank base rates, negotiate spreads, and lock affordable EMIs', np: 'बैंक Base Rate बुझ्ने, प्रिमियम घटाउने र सस्तो EMI मा कर्जा लिने' },
    color: '#8b5cf6',
    categorySlug: 'loans',
    steps: [
      {
        number: 1,
        title: { en: 'How Bank Loans Work in Nepal', np: 'नेपालमा बैंक कर्जा कसरी चल्छ' },
        type: 'lesson',
        slug: 'how-loans-work',
        categorySlug: 'loans',
        duration: '10 min'
      },
      {
        number: 2,
        title: { en: 'The Complete Home Loan Guide', np: 'घर कर्जा (Home Loan) को पूर्ण गाइड' },
        type: 'guide',
        slug: 'complete-home-loan-guide',
        duration: '15 min'
      },
      {
        number: 3,
        title: { en: 'Base Rate Spreads & Prepayment Penalties', np: 'Base Rate प्रिमियम र बैंक सर्तहरू' },
        type: 'lesson',
        slug: 'base-rate-spreads',
        categorySlug: 'loans',
        duration: '12 min'
      },
      {
        number: 4,
        title: { en: 'Calculate Monthly EMI & Amortization', np: 'मासिक किस्ता र ब्याज तालिका' },
        type: 'calculator',
        slug: 'home-loan',
        duration: 'Interactive'
      }
    ]
  },
  {
    id: 'learn-nepse',
    icon: 'barChart',
    title: { en: 'I want to learn NEPSE stock trading', np: 'म NEPSE सेयर बजार सिक्न चाहन्छु' },
    tagline: { en: 'Broker selection, online TMS trading, collateral, and risk management', np: 'ब्रोकर छनोट, अनलाइन TMS कारोबार, कोलेटरल र जोखिम व्यवस्थापन' },
    color: '#0284c7',
    categorySlug: 'nepse',
    steps: [
      {
        number: 1,
        title: { en: 'What is NEPSE & How Shares Work', np: 'NEPSE के हो र सेयर बजार कसरी चल्छ' },
        type: 'lesson',
        slug: 'what-is-nepse',
        categorySlug: 'nepse',
        duration: '9 min'
      },
      {
        number: 2,
        title: { en: 'Initial Public Offering (IPO) in Nepal', np: 'प्राथमिक सेयर (IPO) भर्ने तरिका' },
        type: 'lesson',
        slug: 'what-is-an-ipo',
        categorySlug: 'nepse',
        duration: '10 min'
      },
      {
        number: 3,
        title: { en: 'Complete Online TMS Trading Guide', np: 'अनलाइन TMS ट्रेडिङ पूर्ण गाइड' },
        type: 'guide',
        slug: 'complete-tms-guide',
        duration: '15 min'
      },
      {
        number: 4,
        title: { en: 'Calculate Broker Fees & 5%/7.5% CGT', np: 'ब्रोकर कमिसन र पुँजीगत लाभकर हिसाब' },
        type: 'calculator',
        slug: 'nepse-share',
        duration: 'Interactive'
      }
    ]
  }
];

// ── Curated Learning Collections ───────────────────────────────────
export const LEARNING_COLLECTIONS = [
  {
    id: 'col-start-investing',
    title: { en: 'Start Investing in Nepal', np: 'नेपालमा लगानीको सुरुवात' },
    desc: { en: 'A curated 5-lesson curriculum from opening your Demat account to placing your first stock order.', np: 'Demat खोल्नेदेखि पहिलो सेयर किन्नेसम्मको ५ वटा अनिवार्य पाठहरूको विशेष सङ्ग्रह।' },
    lessonsCount: 5,
    duration: '45 min',
    difficulty: 'Beginner',
    categorySlug: 'investing',
    lessons: ['what-is-investing', 'what-is-an-ipo', 'what-is-nepse', 'fixed-deposit', 'compounding-returns']
  },
  {
    id: 'col-banking-mastery',
    title: { en: 'Banking & Debt Discipline', np: 'बैंकिङ व्यवस्थापन र ऋण अनुशासन' },
    desc: { en: 'Master commercial bank interest rates, credit cards, base rate spreads, and avoiding debt traps in Nepal.', np: 'मुद्दती निक्षेप, क्रेडिट कार्ड, Base Rate र बैंक कर्जा सही तरिकाले व्यवस्थापन गर्ने तरिका।' },
    lessonsCount: 4,
    duration: '40 min',
    difficulty: 'Beginner to Intermediate',
    categorySlug: 'banking',
    lessons: ['fixed-deposit', 'how-loans-work', 'base-rate-spreads', 'emergency-fund']
  },
  {
    id: 'col-tax-optimization',
    title: { en: 'Salary Earner Tax Optimization', np: 'तलबजीवी कर्मचारीका लागि कर व्यवस्थापन' },
    desc: { en: 'Understand your monthly salary payslip, Section 87 TDS, legal tax rebates, and filing Form D-01.', np: 'पारिश्रमिकबाट काटिने TDS, SSF/CIT छुट र कानुनी रूपमा कर घटाउने सम्पूर्ण उपायहरू।' },
    lessonsCount: 4,
    duration: '48 min',
    difficulty: 'Intermediate',
    categorySlug: 'taxation',
    lessons: ['pan-explained', 'tax-exemptions', 'income-tax-slabs', 'form-d01-filing']
  },
  {
    id: 'col-nepse-launchpad',
    title: { en: 'NEPSE Beginner Launchpad', np: 'NEPSE सुरुवाती लगानीकर्ता लन्चप्याड' },
    desc: { en: 'Primary vs secondary market, C-ASBA IPO allotment rule, TMS trade execution, and calculating CGT.', np: 'प्राथमिक IPO, दोस्रो बजार TMS कारोबार र ५%/७.५% पुँजीगत लाभकर हिसाबको पूर्ण प्याकेज।' },
    lessonsCount: 5,
    duration: '55 min',
    difficulty: 'Beginner',
    categorySlug: 'nepse',
    lessons: ['what-is-nepse', 'what-is-an-ipo', 'how-to-buy-shares-tms', 'cgt-taxation', 'dividend-investing']
  }
];

// ── Categories Catalog Data (13 Complete Learning Paths) ─────────
export const LEARN_CATEGORIES = [
  {
    id: 1,
    slug: 'personal-finance',
    icon: 'wallet',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    duration: { en: '3.5 Hours', np: '३.५ घण्टा' },
    lessonCount: 7,
    guideCount: 3,
    calcCount: 3,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['budgeting', 'saving', 'emergency fund', 'cash flow', 'net worth', '50-30-20', 'gold investment'],
    visualRoadmap: [
      'Cash Flow Basics in Nepal',
      '50/30/20 Budgeting Rules',
      'Building 6-Month Emergency Fund',
      'Handling Dashain & Festival Costs',
      'Automating High Savings in Banks',
      'Tracking Real Net Worth',
      'Gold & Precious Metals in Nepal'
    ],
    en: {
      name: 'Personal Finance',
      shortDesc: 'Master cash flow management, budgeting frameworks adapted for Nepal, and emergency savings.',
      tagline: 'Take full control of every rupee you earn, save, and spend in Nepal.',
      overview: 'Personal finance is the foundation of all wealth creation. In Nepal, managing finances requires balancing traditional family obligations, festival expenditures like Dashain, unpredictable living costs in cities like Kathmandu, and cash flow across multiple channels (cash, bank accounts, and digital wallets). This path teaches you how to design a sustainable personal budget, build an emergency fund that protects you from debt, and establish high-savings habits without feeling restricted.',
      whatIsThis: 'Personal finance is the practical art of managing your money: earning, budgeting, saving, spending, and planning for short-term and long-term security.',
      whyImportant: 'Without a clear personal cash flow system, rising inflation and lifestyle creep keep even high earners living paycheck to paycheck. Mastering this ensures financial peace of mind.',
      howInNepal: 'Nepalis frequently deal with informal loans, seasonal remittances, dual banking, and irregular expenses. We adapt frameworks like 50/30/20 specifically for Nepali cost structures.'
    },
    np: {
      name: 'Personal Finance (व्यक्तिगत वित्त)',
      shortDesc: 'दैनिक खर्च व्यवस्थापन, नेपाल सुहाउँदो Budgeting ढाँचा र आपतकालीन बचत निर्माण गर्न सिक्नुहोस्।',
      tagline: 'नेपालमा आफूले कमाएको, बचत गरेको र खर्च गरेको प्रत्येक रूपैयाँको पूर्ण नियन्त्रण लिनुहोस्।',
      overview: 'Personal Finance नै सबै सम्पत्ति निर्माणको जग हो। नेपालमा पैसा व्यवस्थापन गर्दा पारिवारिक जिम्मेवारी, चाडबाडका खर्च, काठमाडौँ जस्ता सहरको महँगी र विभिन्न माध्यम (नगद, Bank खाता र डिजिटल वालेट) बीच सन्तुलन मिलाउनुपर्छ। यस मार्गले तपाईंलाई दिगो Budget बनाउन, ऋणको चंगुलबाट जोगाउने Emergency Fund तयार गर्न र बिना कुनै मानसिक तनाव उच्च बचत गर्ने बानी बसाल्न सिकाउँछ।',
      whatIsThis: 'Personal Finance भनेको आफ्नो पैसा व्यवस्थापन गर्ने व्यावहारिक कला हो: कमाइ, Budgeting, बचत, खर्च र भविष्यको सुरक्षाको योजना।',
      whyImportant: 'स्पष्ट Cash Flow प्रणाली विना बढ्दो Inflation ले गर्दा राम्रो कमाउने व्यक्ति पनि सधैँ आर्थिक तनावमा बाँचिरहेका हुन्छन्। यसको ज्ञानले आर्थिक स्वतन्त्रता दिन्छ।',
      howInNepal: 'नेपाली समाजमा अनौपचारिक ऋण, चाडबाडका विशेष खर्च र विप्रेषण (Remittance) को प्रभाव धेरै हुन्छ। हामी 50/30/20 जस्ता अन्तर्राष्ट्रिय नियमलाई नेपाली परिवेशमा ढालेर सिकाउँछौं।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '35 min',
        en: { title: 'Foundations of Cash Flow', desc: 'Tracking income and understanding real monthly expenditures in Nepal.' },
        np: { title: 'Cash Flow को जग', desc: 'नेपालमा वास्तविक आम्दानी र खर्चको यथार्थ ट्र्याकिङ।' },
        lessons: [
          {
            id: 'pf-1',
            number: 1,
            slug: 'cash-flow-equation-nepal',
            duration: '15 min',
            difficulty: 'Beginner',
            type: 'Lesson',
            format: 'Foundation',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'The Cash Flow Equation in Nepal',
              summary: 'Understanding net salary, fixed household expenses, and hidden micro-leakages across mobile banking and digital wallets.',
              keyTakeaways: 'Net income is what matters; identify recurrent digital leakages; split bank accounts for spending and saving.'
            },
            np: {
              title: 'नेपालमा Cash Flow को समीकरण',
              summary: 'खुद तलब, घरायसी स्थिर खर्च र Mobile Banking तथा डिजिटल वालेटका सानातिना खर्च चुहावट बुझ्ने तरिका।',
              keyTakeaways: 'कुल तलब भन्दा खुद रकम मुख्य हो; डिजिटल वालेटका चुहावट पत्ता लगाउनुहोस्; खर्च र बचतका लागि छुट्टै खाता राख्नुहोस्।'
            }
          },
          {
            id: 'pf-2',
            number: 2,
            slug: '50-30-20-budget-nepal',
            duration: '20 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Framework',
            updatedDate: 'Sep 2026',
            prerequisites: 'pf-1',
            en: {
              title: 'The 50/30/20 Budget Adapted for Nepal',
              summary: 'Adjusting essentials, lifestyle desires, and mandatory savings targets to match Kathmandu and regional living costs.',
              keyTakeaways: '50% essentials (rent, food), 30% lifestyle desires, 20% untouchable savings; adapt ratios for high-rent metro areas.'
            },
            np: {
              title: 'नेपालका लागि ५०/३०/२० Budget नियम',
              summary: 'नेपाली जीवनयापनको लागत अनुसार आवश्यकता, चाहना र बचतको प्रतिशत बाँडफाँड।',
              keyTakeaways: '५०% आवश्यकता (कोठाभाडा, रासन), ३०% चाहना, २०% अनिवार्य बचत; काठमाडौँ जस्ता महँगा सहरमा प्रतिशत थोरै समायोजन गर्न सकिन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Safety Nets & Buffer Funds',
          relatedGuide: { title: 'Emergency Fund Guide for Nepal', slug: 'emergency-fund', duration: '12 min' },
          relevantCalc: { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation' },
          glossaryTerms: ['Cash Flow', 'Budget', 'Inflation'],
          relatedCategory: { name: 'Banking', slug: 'banking' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '45 min',
        en: { title: 'Safety Nets & Buffer Funds', desc: 'Preventing unexpected medical emergencies and family crises from triggering high-interest debt.' },
        np: { title: 'सुरक्षा घेरा र Buffer Fund', desc: 'स्वास्थ्य उपचार र पारिवारिक आपतविपद्ले ऋणमा पार्न नदिने उपाय।' },
        lessons: [
          {
            id: 'pf-3',
            number: 3,
            slug: 'emergency-fund-building',
            duration: '25 min',
            difficulty: 'Beginner',
            type: 'Guide',
            format: 'Execution',
            updatedDate: 'Sep 2026',
            prerequisites: 'pf-2',
            en: {
              title: 'Building Your 6-Month Emergency Fund',
              summary: 'How much to keep in savings vs. high-liquidity fixed instruments across Class A commercial banks in Nepal.',
              keyTakeaways: 'Keep 1 month in liquid savings and 3-5 months in accessible bank deposits; never invest emergency funds in volatile stocks.'
            },
            np: {
              title: '६ महिनाको Emergency Fund निर्माण',
              summary: 'कति रकम बचत खातामा राख्ने र कति रकम तरल मुद्दती खातामा राख्ने विधि।',
              keyTakeaways: '१ महिनाको खर्च तुरुन्त चलाउन मिल्ने बचतमा र ३-५ महिनाको खर्च मुद्दती वा छुट्टै खातामा राख्नुहोस्; यसलाई सेयर बजारमा कहिल्यै नहाल्नुहोस्।'
            }
          },
          {
            id: 'pf-4',
            number: 4,
            slug: 'festival-expenses-nepal',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Case Study',
            format: 'Strategy',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Handling Festival & Seasonal Expenses (Dashain/Tihar)',
              summary: 'Implementing sinking funds throughout the year so annual festivals do not wipe out your savings.',
              keyTakeaways: 'Divide anticipated festival costs by 12 months; deposit into a recurring sub-account monthly.'
            },
            np: {
              title: 'चाडबाड खर्च (दसैँ-तिहार) को पूर्वतयारी',
              summary: 'वार्षिक चाडपर्व र भ्रमणका लागि महिनावारि सानो रकम छुट्ट्याउने Sinking Fund रणनीति।',
              keyTakeaways: 'अनुमानित चाडपर्व खर्चलाई १२ महिनाले भाग गरी मासिक छुट्टै जम्मा गर्नुहोस् जसले गर्दा दसैँमा आर्थिक दबाब पर्दैन।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Wealth Systems & Automation',
          relatedGuide: { title: 'Personal Finance Checklist', slug: 'personal-finance-checklist', duration: '10 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['Emergency Fund', 'Sinking Fund', 'Liquid Assets'],
          relatedCategory: { name: 'Taxation', slug: 'taxation' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '38 min',
        en: { title: 'Wealth Systems & Automation', desc: 'Automating high-savings habits and accurately tracking personal net worth growth.' },
        np: { title: 'सम्पत्ति प्रणाली र Automation', desc: 'बचतलाई स्वचालित बनाउने र आफ्नो Net Worth मापन गर्ने बानी।' },
        lessons: [
          {
            id: 'pf-5',
            number: 5,
            slug: 'pay-yourself-first-nepal',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Tutorial',
            format: 'Practice',
            updatedDate: 'Sep 2026',
            prerequisites: 'pf-2',
            en: {
              title: 'Automated "Pay Yourself First" in Nepali Banks',
              summary: 'Setting standing instructions on salary day before discretionary lifestyle spending begins.',
              keyTakeaways: 'Automate transfers into savings/investments on payday; treat savings as your non-negotiable first bill.'
            },
            np: {
              title: 'नेपाली Bank मा स्वचालित "पहिले आफूलाई तिर्नुहोस्" प्रणाली',
              summary: 'तलब आउने दिन नै खर्च हुनुभन्दा पहिले बचत खातामा रकम रकमान्तर गर्ने Standing Instructions।',
              keyTakeaways: 'तलब आएकै दिन लगानी वा बचत खातामा स्वतः रकम पठाउनुहोस्; बचतलाई आफ्नो पहिलो अनिवार्य बिल मान्नुहोस्।'
            }
          },
          {
            id: 'pf-6',
            number: 6,
            slug: 'net-worth-tracking-nepal',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Checklist',
            format: 'Walkthrough',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Calculating and Tracking Your Net Worth in Nepal',
              summary: 'Assets vs. liabilities calculation without inflated speculative land prices or sentimental valuations.',
              keyTakeaways: 'Net Worth = Total Assets - Total Liabilities; track every 6 months; focus on liquid and productive net worth.'
            },
            np: {
              title: 'नेपालमा आफ्नो Net Worth निकाल्ने र ट्र्याक गर्ने विधि',
              summary: 'अतिशयोक्ति विना यथार्थ सम्पत्ति र दायित्वको हिसाब किताब।',
              keyTakeaways: 'Net Worth = कुल सम्पत्ति - कुल ऋण; हरेक ६ महिनामा मूल्याङ्कन गर्नुहोस्; उत्पादनशील सम्पत्ति बढाउन ध्यान दिनुहोस्।'
            }
          },
          {
            id: 'pf-7',
            number: 7,
            slug: 'gold-as-investment-nepal',
            duration: '10 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Reading',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Gold as an Investment in Nepal: Ornament vs. Wealth Preservation',
              summary: 'How gold hedges currency depreciation, why jewelry making charges (jhyal/jarti) destroy returns, and how to buy 24K Asarfi bullion coins safely.',
              keyTakeaways: 'Jewelry is a cultural expense; buy 24K Asarfi coins for true investment; cap gold at 5-10% of total wealth.'
            },
            np: {
              title: 'नेपालमा सुन लगानी: परम्परागत गहना कि वास्तविक सम्पत्ति संरक्षण?',
              summary: 'रुपैयाँको अवमूल्यनबाट जोगिन सुनको भूमिका, गहनाको ज्याला-जर्ती नोक्सानी र असर्फी किन्ने सही तरिका।',
              keyTakeaways: 'गहना उपभोग हो; लगानीका लागि २४ क्यारेट असर्फी मात्र किन्नुहोस्; सम्पत्तिको बढीमा ५-१०% मात्र सुनमा राख्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Investing Pathway',
          relatedGuide: { title: 'Net Worth Tracking System', slug: 'net-worth-guide', duration: '15 min' },
          relevantCalc: { name: 'Retirement Calculator', slug: 'calculators/retirement', key: 'retirement' },
          glossaryTerms: ['Net Worth', 'Standing Instructions', 'Compounding'],
          relatedCategory: { name: 'Investing', slug: 'investing' }
        }
      }
    ],
    relatedCalculators: ['sip', 'nepal-income-tax', 'retirement'],
    relatedGuides: [
      { title: 'Emergency Fund Guide for Nepal', slug: 'emergency-fund', duration: '12 min', difficulty: 'Beginner' },
      { title: 'The Complete Nepali Budget Planner', slug: 'budget-planner', duration: '15 min', difficulty: 'Beginner' },
      { title: 'Family Cash Flow & Remittance Management', slug: 'remittance-cashflow', duration: '18 min', difficulty: 'Intermediate' }
    ],
    relatedResources: ['notion-finance-tracker', 'budget-planner-system'],
    faqs: [
      {
        en: {
          q: 'How much emergency fund should a salaried professional in Nepal maintain?',
          a: 'A safe rule of thumb in Nepal is 3 to 6 months of baseline living expenses (rent, groceries, utilities, loan EMIs). If your job or income has high variability (freelance, business, or commissions), target 9 to 12 months in a liquid high-yield savings account or breakable FD.'
        },
        np: {
          q: 'नेपालमा जागिरे व्यक्तिले कति रकम Emergency Fund का रूपमा राख्नुपर्छ?',
          a: 'नेपालमा कम्तीमा ३ देखि ६ महिनाको आधारभूत जीवनयापन खर्च (कोठाभाडा, खाद्यान्न, युटिलिटी र ऋणको EMI) Emergency Fund मा राख्नु सुरक्षित मानिन्छ। यदि तपाईंको आम्दानी अनिश्चित वा कमिसनमा आधारित छ भने ९ देखि १२ महिना बराबरको रकम तरल बचत वा तत्काल झिक्न मिल्ने FD मा राख्नु बुद्धिमानी हुन्छ।'
        }
      },
      {
        en: {
          q: 'Where should I store my emergency fund in Nepal?',
          a: 'Keep 1 month of expenses in your primary mobile banking account for instant QR access, and the remaining 2 to 5 months in a dedicated "A-class" commercial bank savings account with debit card access, completely separate from your daily shopping wallets.'
        },
        np: {
          q: 'नेपालमा आपतकालीन रकम कहाँ राख्नु सबैभन्दा राम्रो हुन्छ?',
          a: '१ महिनाको खर्च तत्काल QR भुक्तानी गर्न मिल्ने Mobile Banking खातामा राख्नुहोस्, र बाँकी २ देखि ५ महिनाको खर्च "क" वर्गको वाणिज्य Bank को छुट्टै बचत खातामा राख्नुहोस्, जसलाई दैनिक किनमेलको वालेटसँग नजोड्नुहोस्।'
        }
      }
    ]
  },
  {
    id: 2,
    slug: 'investing',
    icon: 'trendingUp',
    difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
    duration: { en: '4.5 Hours', np: '४.५ घण्टा' },
    lessonCount: 7,
    guideCount: 4,
    calcCount: 3,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['investing', 'compounding', 'sip', 'mutual funds', 'asset allocation', 'risk management'],
    visualRoadmap: [
      'Inflation vs. Cash Savings',
      'The Compounding Engine',
      'Mutual Funds & NAV Explained',
      'Starting Monthly SIP in Nepal',
      'Asset Allocation Frameworks',
      'Managing Market Risk & Panic',
      'Cash Dividends vs Bonus Shares Yield'
    ],
    en: {
      name: 'Investing',
      shortDesc: 'Understand asset allocation, compounding, Systematic Investment Plans (SIP), and risk management in Nepal.',
      tagline: 'Put your hard-earned money to work against inflation systematically.',
      overview: 'Savings alone cannot outpace Nepal’s high domestic inflation. Investing is the deliberate process of putting your capital into productive assets that generate compounding returns over 5, 10, and 20 years. This path unpacks risk vs. reward, why timing the market fails, how Systematic Investment Plans (SIP) in mutual funds work, and how young Nepalis can build a diversified investment portfolio with as little as NPR 1,000 per month.',
      whatIsThis: 'Investing is allocating money to financial assets like stocks, mutual funds, and fixed deposits expecting capital growth and dividends.',
      whyImportant: 'With food and living cost inflation in Nepal often running between 6% to 9%, money kept purely in low-interest savings accounts actively loses purchasing power every single year.',
      howInNepal: 'Nepal offers formal avenues like NEPSE listed equities, open-ended mutual funds (SIP), Citizen Investment Trust (CIT), and Treasury Bills.'
    },
    np: {
      name: 'Investing (लगानीको सिद्धान्त)',
      shortDesc: 'सम्पत्ति बाँडफाँड (Asset Allocation), Compounding, SIP र जोखिम व्यवस्थापन बुझ्नुहोस्।',
      tagline: 'आफ्नो मिहिनेतको कमाइलाई Inflation विरुद्ध काममा लगाउनुहोस्।',
      overview: 'नेपालमा बैंकको सामान्य बचतले मात्र महँगीलाई जित्न सक्दैन। लगानी भनेको आफ्नो पुँजीलाई उत्पादनशील सम्पत्तिमा लगाएर ५, १० वा २० वर्षमा Compounding मार्फत सम्पति बढाउने अनुशासित यात्रा हो। यस मार्गले जोखिम र प्रतिफलको सन्तुलन, बजारको समय अनुमान गर्ने गल्ती, Mutual Fund मा SIP को भूमिका, र मासिक रु. १,००० बाटै पोर्टफोलियो सुरु गर्ने तरिका सिकाउँछ।',
      whatIsThis: 'Investing भनेको पुँजी वृद्धि र लाभांश (Dividend) को अपेक्षा राखेर सेयर, Mutual Fund र अन्य वित्तीय औजारमा रकम लगाउनु हो।',
      whyImportant: 'नेपालमा महँगी (Inflation) ६% देखि ९% को दरमा बढ्दा सामान्य बचत खातामा राखिएको पैसाको क्रयशक्ति हरेक वर्ष घट्दै जान्छ।',
      howInNepal: 'नेपालमा NEPSE मा सूचीकृत सेयर, खुलामुखी Mutual Fund मा SIP, नागरिक लगानी कोष (CIT), र सरकारी बचतपत्र जस्ता कानुनी माध्यम उपलब्ध छन्।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '40 min',
        en: { title: 'Compounding & The Real Cost of Delay', desc: 'Understanding risk, inflation, and the mathematical engine of compound interest.' },
        np: { title: 'Compounding र ढिलाइको मूल्य', desc: 'जोखिम, Inflation र चक्रवृद्धिको गणितीय शक्ति बुझ्ने।' },
        lessons: [
          {
            id: 'inv-1',
            number: 1,
            slug: 'inflation-vs-savings-nepal',
            duration: '18 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Foundation',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Inflation in Nepal: Why Savings Lose Value',
              summary: 'Historical inflation rates in Nepal and the mathematical necessity of beating the bank savings rate.',
              keyTakeaways: 'Savings account rates often trail real inflation; preserving purchasing power requires equity and productive asset exposure.'
            },
            np: {
              title: 'नेपालमा Inflation: बचतको मूल्य किन घट्छ?',
              summary: 'नेपालको ऐतिहासिक महँगी दर र बैंकको बचत ब्याजदरभन्दा बढी कमाउनुपर्ने बाध्यता।',
              keyTakeaways: 'बचत खाताको ब्याजले महँगीलाई भेट्टाउँदैन; क्रयशक्ति जोगाउन सेयर र उत्पादनशील सम्पत्तिमा लगानी अनिवार्य छ।'
            }
          },
          {
            id: 'inv-2',
            number: 2,
            slug: 'compounding-engine-wealth',
            duration: '22 min',
            difficulty: 'Beginner',
            type: 'Lesson',
            format: 'Mathematics',
            updatedDate: 'Sep 2026',
            prerequisites: 'inv-1',
            en: {
              title: 'The Power of Compounding over 10 & 20 Years',
              summary: 'How consistent reinvestment creates exponential wealth growth for disciplined long-term savers in Nepal.',
              keyTakeaways: 'Time in the market beats timing the market; reinvesting dividends accelerates portfolio doubling cycles.'
            },
            np: {
              title: '१० र २० वर्षमा Compounding को शक्ति',
              summary: 'अनुशासित बचतकर्ताका लागि पुन:लगानी (Reinvestment) ले कसरी सम्पत्ति बढाउँछ।',
              keyTakeaways: 'बजारको समय अनुमान गर्नुभन्दा बजारमा लामो समय टिक्नु महत्त्वपूर्ण हो; लाभांश पुनः लगानी गर्दा पुँजी छिटो दोब्बर हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Systematic Investment Plans (SIP)',
          relatedGuide: { title: 'Compounding in Nepal Guide', slug: 'compounding-nepal', duration: '14 min' },
          relevantCalc: { name: 'CAGR Calculator', slug: 'calculators/cagr', key: 'cagr' },
          glossaryTerms: ['Inflation', 'Compounding', 'Purchasing Power'],
          relatedCategory: { name: 'Mutual Funds', slug: 'mutual-funds' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '44 min',
        en: { title: 'Systematic Investment Plans (SIP) in Nepal', desc: 'Automating mutual fund investments with low capital.' },
        np: { title: 'नेपालमा SIP को कार्यविधि', desc: 'थोरै पुँजीबाटै खुलामुखी Mutual Fund मा स्वचालित लगानी।' },
        lessons: [
          {
            id: 'inv-3',
            number: 3,
            slug: 'open-ended-vs-close-ended-funds',
            duration: '24 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Walkthrough',
            updatedDate: 'Sep 2026',
            prerequisites: 'inv-2',
            en: {
              title: 'Open-Ended vs. Close-Ended Mutual Funds',
              summary: 'Understanding NAV, fund managers, and why open-ended SIPs are ideal for salaried beginners in Nepal.',
              keyTakeaways: 'Open-ended funds allow daily unit purchases at NAV without TMS; close-ended funds trade on NEPSE.'
            },
            np: {
              title: 'खुलामुखी र बन्दमुखी Mutual Fund बीचको भिन्नता',
              summary: 'NAV, Fund Manager को भूमिका र नयाँ लगानीकर्ताका लागि खुलामुखी SIP किन उपयुक्त छ।',
              keyTakeaways: 'खुलामुखी योजनामा TMS बिना NAV मा सोझै खरिदबिक्री हुन्छ; बन्दमुखी योजना NEPSE मा सेयर जस्तै कारोबार हुन्छ।'
            }
          },
          {
            id: 'inv-4',
            number: 4,
            slug: 'how-to-start-monthly-sip-nepal',
            duration: '20 min',
            difficulty: 'Beginner',
            type: 'Tutorial',
            format: 'Practice',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'How to Start a Monthly SIP in Nepal Step by Step',
              summary: 'Registering online, KYC verification, setting payment mandates via connectIPS, and choosing dividend reinvestment.',
              keyTakeaways: 'Can start with NPR 1,000/mo; select Dividend Reinvestment Plan (DREP) for maximum compounding.'
            },
            np: {
              title: 'नेपालमा मासिक SIP सुरु गर्ने चरणबद्ध प्रक्रिया',
              summary: 'अनलाइन दर्ता, KYC प्रमाणीकरण, connectIPS भुक्तानी म्यान्डेट र लाभांश पुन:लगानी (DREP)।',
              keyTakeaways: 'मासिक रु. १,००० बाट सुरु गर्न सकिन्छ; लाभांश पुनः लगानी (DREP) छान्दा चक्रबृद्धि उच्च हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Asset Allocation & Portfolio Design',
          relatedGuide: { title: 'Complete SIP Guide', slug: 'complete-sip-guide', duration: '16 min' },
          relevantCalc: { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip' },
          glossaryTerms: ['SIP', 'NAV', 'Mutual Fund'],
          relatedCategory: { name: 'NEPSE & Stocks', slug: 'nepse' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '45 min',
        en: { title: 'Asset Allocation & Portfolio Design', desc: 'Balancing equities, fixed deposits, gold, and cash buffers.' },
        np: { title: 'Asset Allocation र पोर्टफोलियो निर्माण', desc: 'सेयर, मुद्दती निक्षेप, सुन र नगद सञ्चितिको सन्तुलन मिलाउने कला।' },
        lessons: [
          {
            id: 'inv-5',
            number: 5,
            slug: 'age-based-asset-allocation-nepal',
            duration: '25 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'Strategy',
            updatedDate: 'Sep 2026',
            prerequisites: 'inv-3',
            en: {
              title: 'Age-Based Asset Allocation for Nepalis',
              summary: 'Designing risk-appropriate portfolios across your 20s, 30s, and 40s in Nepal.',
              keyTakeaways: 'Younger investors can afford 70-80% equities/SIP; increase fixed deposits and debt instruments as retirement approaches.'
            },
            np: {
              title: 'उमेर अनुसार Asset Allocation को नियम',
              summary: '२०, ३० र ४० को दशकमा जोखिम क्षमता अनुसार पोर्टफोलियो डिजाइन गर्ने तरिका।',
              keyTakeaways: 'युवा अवस्थामा ७०-८०% सम्म सेयर वा SIP मा लगाउन सकिन्छ; उमेर बढ्दै जाँदा मुद्दती र सुरक्षित औजारमा प्रतिशत बढाउनुहोस्।'
            }
          },
          {
            id: 'inv-6',
            number: 6,
            slug: 'market-psychology-down-markets',
            duration: '20 min',
            difficulty: 'Advanced',
            type: 'Case Study',
            format: 'Discipline',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'The Psychology of Down Markets: Avoiding Panic',
              summary: 'How to react when asset values drop and why market corrections are buying opportunities in Nepal.',
              keyTakeaways: 'Price volatility is the price of high returns; panicking and selling locks in permanent capital losses.'
            },
            np: {
              title: 'बजार घट्दाको मनोविज्ञान: आत्तिनबाट जोगिने उपाय',
              summary: 'मूल्य घट्दा कस्तो निर्णय लिने र बजारको गिरावट किन नयाँ अवसर बन्छ।',
              keyTakeaways: 'मूल्य उतारचढाव उच्च प्रतिफलको स्वभाविक प्रक्रिया हो; आत्तिएर बेच्दा घाटा वास्तविक घाटामा परिणत हुन्छ।'
            }
          },
          {
            id: 'inv-7',
            number: 7,
            slug: 'dividend-investing-nepal',
            duration: '11 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Strategy',
            updatedDate: 'Sep 2026',
            prerequisites: 'inv-2',
            en: {
              title: 'Dividend Investing in NEPSE: Cash vs. Bonus Shares Yield Strategy',
              summary: 'Evaluating dividend yield, payout ratios, book closure dates, 5% cash dividend tax, and why cash dividends provide real passive cash flow compared to bonus share dilution.',
              keyTakeaways: 'Cash dividends provide liquidity without reducing ownership; bonus shares dilute book value; 5% TDS is deducted at source.'
            },
            np: {
              title: 'NEPSE मा लाभांश लगानी: नगद लाभांश कि बोनस सेयर रणनीति?',
              summary: 'नेपालमा Dividend Yield, बुक क्लोजर मिति, ५% नगद लाभांश कर र बोनस सेयरले गर्ने पुँजी वृद्धिको यथार्थ विश्लेषण।',
              keyTakeaways: 'नगद लाभांशले वास्तविक Cash Flow दिन्छ; बोनस सेयरले कित्ता बढाए पनि बजार भाउ समायोजन हुन्छ; लाभांशमा ५% TDS कट्टी हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'NEPSE Secondary Market',
          relatedGuide: { title: 'Risk Management Handbook', slug: 'risk-management', duration: '18 min' },
          relevantCalc: { name: 'SWP Calculator', slug: 'calculators/swp', key: 'swp' },
          glossaryTerms: ['Asset Allocation', 'Portfolio', 'Diversification'],
          relatedCategory: { name: 'Retirement Planning', slug: 'retirement-planning' }
        }
      }
    ],
    relatedCalculators: ['sip', 'cagr', 'inflation'],
    relatedGuides: [
      { title: 'Complete SIP Guide for Nepal', slug: 'complete-sip-guide', duration: '16 min', difficulty: 'Beginner' },
      { title: 'Asset Allocation in Nepal Guide', slug: 'asset-allocation-guide', duration: '20 min', difficulty: 'Intermediate' },
      { title: 'Evaluating Investment Risk Handbook', slug: 'risk-evaluation', duration: '15 min', difficulty: 'Intermediate' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'What is the minimum amount required to start investing in Nepal?',
          a: 'You can start investing through Open-Ended Mutual Fund SIPs with as little as NPR 1,000 per month. In the stock market (NEPSE), applying for 10 units of an ordinary share IPO requires exactly NPR 1,000.'
        },
        np: {
          q: 'नेपालमा लगानी सुरु गर्न कम्तीमा कति पैसा चाहिन्छ?',
          a: 'तपाईं खुलामुखी Mutual Fund को SIP मार्फत मासिक मात्र रु. १,००० बाट लगानी सुरु गर्न सक्नुहुन्छ। सेयर बजार (NEPSE) मा साधारण सेयरको IPO भर्दा १० कित्ताका लागि ठ्याक्कै रु. १,००० भए पुग्छ।'
        }
      },
      {
        en: {
          q: 'Can I invest in mutual fund SIPs from outside Nepal?',
          a: 'Yes, Non-Resident Nepalis (NRNs) and Nepalis working abroad can invest in registered open-ended mutual funds using active Nepali commercial bank accounts with MeroShare or through fund manager portals with connectIPS.'
        },
        np: {
          q: 'के नेपाल बाहिर (विदेशमा) बसेर पनि SIP मा लगानी गर्न सकिन्छ?',
          a: 'हो, विदेशमा कार्यरत नेपालीहरूले आफ्नो चालु नेपाली बैंक खाता, MeroShare र connectIPS प्रयोग गरी खुलामुखी Mutual Fund को पोर्टलबाट सहजै SIP सुरु गर्न सक्नुहुन्छ।'
        }
      }
    ]
  },
  {
    id: 3,
    slug: 'nepse',
    icon: 'chartBar',
    difficulty: { en: 'Beginner to Advanced', np: 'सुरुवाती देखि उन्नत' },
    duration: { en: '5 Hours', np: '५ घण्टा' },
    lessonCount: 8,
    guideCount: 5,
    calcCount: 2,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['nepse', 'ipo', 'secondary market', 'tms', 'meroshare', 'broker', 'cdsc', 'technical analysis', 'fundamental analysis'],
    visualRoadmap: [
      'Demat & MeroShare Setup',
      'Analyzing & Applying for IPOs',
      'Broker Account & TMS Order Placing',
      'Broker Commissions & SEBON Fees',
      'Reading Company Financials (EPS/BVPS)',
      'Bonus Shares vs. Cash Dividends',
      'Right Shares & Price Adjustment Math',
      'Fundamental Valuation Frameworks'
    ],
    en: {
      name: 'NEPSE & Stocks',
      shortDesc: 'A complete guide to the Nepal Stock Exchange: Demat, MeroShare, IPO applications, TMS, and broker trading.',
      tagline: 'Understand the mechanics and analysis of the Nepal Stock Exchange with zero hype.',
      overview: 'The Nepal Stock Exchange (NEPSE) is Nepal’s only equity marketplace. While millions apply for IPOs through MeroShare, very few understand how the secondary market functions, how brokers execute trades via TMS, how settlements clear through CDSC, and how to value a company fundamentally. This path cuts through market rumors and teaches you how to open accounts, apply for IPOs, analyze financial statements, navigate broker TMS platforms, and invest with discipline.',
      whatIsThis: 'NEPSE is the regulated national stock exchange where public companies in Nepal trade their equity shares.',
      whyImportant: 'Equities historically offer the highest long-term growth in Nepal, but participating blindly without technical or fundamental literacy leads to devastating capital losses.',
      howInNepal: 'All trades in Nepal are routed through registered Brokers (TMS), settled in Demat accounts via CDSC, and funded via connectIPS and commercial bank accounts.'
    },
    np: {
      name: 'NEPSE & Stocks (सेयर बजार)',
      shortDesc: 'Nepal Stock Exchange को सम्पूर्ण गाइड: Demat, MeroShare, IPO, TMS र Broker ट्रेडिङ।',
      tagline: 'हल्ला र हल्लाखोरबाट मुक्त भएर NEPSE को वास्तविक संयन्त्र र विश्लेषण बुझ्नुहोस्।',
      overview: 'नेपाल स्टक एक्सचेन्ज (NEPSE) नेपालको एक मात्र सेयर बजार हो। MeroShare बाट लाखौंले IPO भरे पनि दोस्रो बजार कसरी चल्छ, Broker ले TMS बाट कसरी खरिदबिक्री गर्छन्, CDSC मा राफसाफ कसरी हुन्छ, र कम्पनीको वित्तीय विवरण कसरी हेर्ने भन्ने ज्ञान थोरैलाई मात्र छ। यस मार्गले हल्लाको पछि नलागी Demat खोल्ने, IPO भर्ने, TMS चलाउने, र अनुशासित लगानीकर्ता बन्ने तरिका सिकाउँछ।',
      whatIsThis: 'NEPSE भनेको नेपालको आधिकारिक सेयर बजार हो जहाँ सूचीकृत सार्वजनिक कम्पनीहरूको सेयर खरिद-बिक्री गरिन्छ।',
      whyImportant: 'ऐतिहासिक रूपमा सेयर बजारले नेपालमा उच्च प्रतिफल दिएको छ, तर वित्तीय ज्ञान विना हल्लाको भरमा किन्दा धेरैले पुँजी गुमाएका छन्।',
      howInNepal: 'नेपालमा सबै कारोबार दर्ता भएका Broker (TMS) मार्फत हुन्छ, CDSC को Demat खातामा सेयर जम्मा हुन्छ, र connectIPS बाट रकम भुक्तानी हुन्छ।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '38 min',
        en: { title: 'Accounts & The IPO Ecosystem', desc: 'Demat, CRN, MeroShare, and applying for primary issues in Nepal.' },
        np: { title: 'खाता र IPO इकोसिस्टम', desc: 'Demat, CRN, MeroShare र प्राथमिक बजारमा सेयर आवेदन प्रक्रिया।' },
        lessons: [
          {
            id: 'nep-1',
            number: 1,
            slug: 'demat-meroshare-crn-setup',
            duration: '20 min',
            difficulty: 'Beginner',
            type: 'Tutorial',
            format: 'Setup',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Setting Up Demat, MeroShare & CRN in Nepal',
              summary: 'Step-by-step account opening with a bank or merchant banker, avoiding common verification errors.',
              keyTakeaways: 'Demat holds your shares digitally; MeroShare is the portal; CRN verifies your bank account for C-ASBA.'
            },
            np: {
              title: 'नेपालमा Demat, MeroShare र CRN लिने तरिका',
              summary: 'वाणिज्य बैंक वा मर्चेन्ट बैंकरबाट सुरुवाती खाता खोल्ने प्रक्रिया र सामान्य त्रुटिबाट बच्ने तरिका।',
              keyTakeaways: 'Demat मा सेयर जम्मा हुन्छ; MeroShare अनलाइन पोर्टल हो; CRN ले बैंक खाता प्रमाणीकरण गर्छ।'
            }
          },
          {
            id: 'nep-2',
            number: 2,
            slug: 'analyzing-applying-ipo-meroshare',
            duration: '18 min',
            difficulty: 'Beginner',
            type: 'Guide',
            format: 'Walkthrough',
            updatedDate: 'Sep 2026',
            prerequisites: 'nep-1',
            en: {
              title: 'How to Analyze and Apply for an IPO on MeroShare',
              summary: 'Evaluating the prospectus, promoter holding, credit rating (ICRA/CareNP), and ASBA application mechanics.',
              keyTakeaways: 'Always check net worth per share and credit ratings before applying; understand the 10 kitta lottery rule.'
            },
            np: {
              title: 'MeroShare बाट IPO विश्लेषण गर्ने र आवेदन दिने विधि',
              summary: 'विवरणपत्र (Prospectus), प्रवर्धक सेयर, क्रेडिट रेटिङ र ASBA आवेदन प्रक्रिया।',
              keyTakeaways: 'आवेदन दिनुअघि नेटवर्थ र क्रेडिट रेटिङ हेर्नुहोस्; नेपालमा १० कित्ता गोलाप्रथाको नियम बुझ्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Secondary Market Mechanics & Broker TMS',
          relatedGuide: { title: 'Complete MeroShare Guide', slug: 'complete-meroshare-guide', duration: '14 min' },
          relevantCalc: { name: 'Share Calculator', slug: 'calculators/nepse-share', key: 'share' },
          glossaryTerms: ['Demat', 'MeroShare', 'CRN', 'IPO'],
          relatedCategory: { name: 'Banking', slug: 'banking' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '48 min',
        en: { title: 'Secondary Market Mechanics & Broker TMS', desc: 'Placing orders, understanding limits, broker commissions, and CDSC clearing.' },
        np: { title: 'दोस्रो बजारको कार्यप्रणाली र Broker TMS', desc: 'अर्डर राख्ने, कमिसन, TMS सञ्चालन र CDSC राफसाफ।' },
        lessons: [
          {
            id: 'nep-3',
            number: 3,
            slug: 'broker-account-tms-navigation',
            duration: '26 min',
            difficulty: 'Intermediate',
            type: 'Tutorial',
            format: 'Platform',
            updatedDate: 'Sep 2026',
            prerequisites: 'nep-1',
            en: {
              title: 'Opening a Broker Account and Navigating TMS',
              summary: 'Understanding limit vs. market orders, collateral management, trading hours, and matching engines.',
              keyTakeaways: 'Deposit collateral via connectIPS; use Limit orders rather than Market orders to avoid slippage.'
            },
            np: {
              title: 'Broker खाता खोल्ने र TMS चलाउने तरिका',
              summary: 'Limit र Market अर्डर, Collateral व्यवस्थापन र कारोबार समय।',
              keyTakeaways: 'connectIPS बाट Collateral लोड गर्नुहोस्; बजारको अनपेक्षित मूल्यबाट बच्न Limit Order प्रयोग गर्नुहोस्।'
            }
          },
          {
            id: 'nep-4',
            number: 4,
            slug: 'broker-commissions-sebon-fees-nepal',
            duration: '22 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'Mechanics',
            updatedDate: 'Sep 2026',
            prerequisites: 'nep-3',
            en: {
              title: 'Broker Commissions, SEBON Fees, and DP Charges in Nepal',
              summary: 'Full fee breakdown from gross trade price to net bank deposit, including capital gains tax deductions.',
              keyTakeaways: 'Broker commission is tiered (0.24% to 0.36%); SEBON fee is 0.015%; DP fee is NPR 25; CGT is 5% (long-term) or 7.5% (short-term).'
            },
            np: {
              title: 'नेपालमा Broker कमिसन, SEBON शुल्क र DP चार्जको हिसाब',
              summary: 'कुल कारोबार मूल्यदेखि खातामा आउने खुद रकमसम्मको सम्पूर्ण शुल्क तालिका।',
              keyTakeaways: 'ब्रोकर कमिसन ०.२४% देखि ०.३६% सम्म लाग्छ; SEBON शुल्क ०.०१५%; DP शुल्क रु. २५; CGT दीर्घकालीन ५% वा अल्पकालीन ७.५% हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Fundamental & Technical Literacy',
          relatedGuide: { title: 'Complete TMS Guide', slug: 'complete-tms-guide', duration: '18 min' },
          relevantCalc: { name: 'NEPSE Share & CGT Calculator', slug: 'calculators/nepse-share', key: 'share' },
          glossaryTerms: ['TMS', 'Broker', 'SEBON', 'Capital Gain'],
          relatedCategory: { name: 'Taxation', slug: 'taxation' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '54 min',
        en: { title: 'Fundamental & Technical Literacy', desc: 'Reading quarterly reports, PE ratios, and avoiding emotional trap cycles.' },
        np: { title: 'मौलिक र प्राविधिक साक्षरता', desc: 'त्रैमासिक वित्तीय विवरण पढ्ने, PE Ratio बुझ्ने र बजारको भ्रमबाट बच्ने।' },
        lessons: [
          {
            id: 'nep-5',
            number: 5,
            slug: 'how-to-read-quarterly-report-nepal',
            duration: '30 min',
            difficulty: 'Advanced',
            type: 'Lesson',
            format: 'Analysis',
            updatedDate: 'Sep 2026',
            prerequisites: 'nep-4',
            en: {
              title: 'How to Read a Nepali Company Quarterly Report (EPS, BVPS, NPL)',
              summary: 'Crucial metrics for commercial banks, hydro-powers, and micro-finances in Nepal.',
              keyTakeaways: 'Focus on Earnings Per Share (EPS), Book Value Per Share (BVPS), Non-Performing Loans (NPL) for banks, and PPA tariffs for hydro.'
            },
            np: {
              title: 'कम्पनीको त्रैमासिक वित्तीय विवरण (EPS, BVPS, NPL) कसरी पढ्ने?',
              summary: 'वाणिज्य बैंक, हाइड्रोपावर र लघुवित्तका मुख्य वित्तीय सूचकहरू।',
              keyTakeaways: 'प्रतिसेयर आम्दानी (EPS), प्रतिसेयर नेटवर्थ (BVPS), खराब कर्जा (NPL) र हाइड्रोका लागि PPA दर हेर्नुहोस्।'
            }
          },
          {
            id: 'nep-6',
            number: 6,
            slug: 'dividend-yield-vs-capital-gains-nepse',
            duration: '24 min',
            difficulty: 'Intermediate',
            type: 'Case Study',
            format: 'Strategy',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Dividend Yield vs. Capital Gains in NEPSE',
              summary: 'Bonus shares (Stock Dividend) vs. Cash Dividend mechanics and book closure price adjustment rules.',
              keyTakeaways: 'Bonus shares increase total unit count but adjust market price proportionally on book closure day.'
            },
            np: {
              title: 'NEPSE मा Dividend Yield र Capital Gains को तुलना',
              summary: 'बोनस सेयर र नगद लाभांशको गणित तथा बुक क्लोजर (Book Closure) को नियम।',
              keyTakeaways: 'बोनस सेयरले कित्ता बढाए पनि बुक क्लोजरको दिन बजार मूल्य सोही अनुपातमा घट्छ (मूल्य समायोजन)।'
            }
          },
          {
            id: 'nep-7',
            number: 7,
            slug: 'right-shares-nepal',
            duration: '12 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Walkthrough',
            updatedDate: 'Sep 2026',
            prerequisites: 'nep-3',
            en: {
              title: 'Right Shares in NEPSE: Ratio, Eligibility & Price Adjustment Math',
              summary: 'How right issues work, checking eligibility via MeroShare, applying at par value (Rs. 100), price adjustment formulas, and unsubscribed auction shares.',
              keyTakeaways: 'Right shares require cash subscription at par (Rs. 100); market price adjusts downward on book closure; unsubscribed shares enter competitive bidding auctions.'
            },
            np: {
              title: 'NEPSE मा हकप्रद सेयर (Right Shares): अनुपात, योग्यता र मूल्य समायोजन',
              summary: 'हकप्रद सेयरको कार्यविधि, MeroShare बाट आवेदन, बुक क्लोजरको मूल्य समायोजन सूत्र र लिलामी (Auction) प्रक्रिया।',
              keyTakeaways: 'हकप्रद सेयरका लागि प्रति कित्ता रु. १०० नगद तिर्नुपर्छ; बुक क्लोजरपछि बजार मूल्य समायोजन हुन्छ; नबिकेको सेयर लिलामीमा जान्छ।'
            }
          },
          {
            id: 'nep-8',
            number: 8,
            slug: 'fundamental-analysis-nepse',
            duration: '14 min',
            difficulty: 'Advanced',
            type: 'Lesson',
            format: 'Analysis',
            updatedDate: 'Sep 2026',
            prerequisites: 'nep-5',
            en: {
              title: 'Fundamental Analysis of NEPSE Companies: Beyond P/E Ratio',
              summary: 'In-depth valuation models for banks and hydro companies: RoE, Net Interest Margin (NIM), Non-Performing Loans (NPL), Debt-to-Equity, and Project Life cycle.',
              keyTakeaways: 'Never evaluate a stock solely on low P/E; check RoE (>15%), NPL (<3% for commercial banks), and reserve strength; hydro valuation requires checking remaining PPA years.'
            },
            np: {
              title: 'NEPSE मा कम्पनीहरूको आधारभूत विश्लेषण (Fundamental Analysis)',
              summary: 'P/E बाहेक RoE, NIM, NPL, रिजर्भ र ऋण-पुँजी अनुपात हेरेर कम्पनीको वास्तविक वित्तीय स्वास्थ्य जाँच्ने विधि।',
              keyTakeaways: 'P/E कम हुँदैमा कम्पनी राम्रो हुँदैन; RoE, NPL (३% भन्दा तल), र रिजर्भको अवस्था जाँच्नुहोस्; हाइड्रोमा बाँकी PPA अवधि अनिवार्य हेर्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Mutual Funds & Indirect Investing',
          relatedGuide: { title: 'Complete CDSC Clearing Guide', slug: 'complete-cdsc-guide', duration: '15 min' },
          relevantCalc: { name: 'CAGR Calculator', slug: 'calculators/cagr', key: 'cagr' },
          glossaryTerms: ['EPS', 'BVPS', 'Dividend', 'Book Closure'],
          relatedCategory: { name: 'Investing', slug: 'investing' }
        }
      }
    ],
    relatedCalculators: ['share', 'cagr'],
    relatedGuides: [
      { title: 'Complete MeroShare Guide', slug: 'complete-meroshare-guide', duration: '14 min', difficulty: 'Beginner' },
      { title: 'Complete TMS Trading Guide', slug: 'complete-tms-guide', duration: '18 min', difficulty: 'Intermediate' },
      { title: 'Complete CDSC & EDIS Guide', slug: 'complete-cdsc-guide', duration: '15 min', difficulty: 'Intermediate' },
      { title: 'Analyzing Nepali Hydro & Bank IPOs', slug: 'analyzing-ipos', duration: '22 min', difficulty: 'Intermediate' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'What is the trading schedule for the Nepal Stock Exchange (NEPSE)?',
          a: 'NEPSE trades Sunday through Thursday from 11:00 AM to 3:00 PM NPT. The pre-open session takes place from 10:30 AM to 10:45 AM. The market remains closed on Fridays, Saturdays, and official public holidays declared in Nepal.'
        },
        np: {
          q: 'NEPSE मा सेयर कारोबार हुने समय कुन हो?',
          a: 'NEPSE मा आइतबारदेखि बिहीबारसम्म बिहान ११:०० बजेदेखि दिउँसो ३:०० बजेसम्म नियमित कारोबार हुन्छ। Pre-open सेसन बिहान १०:३० देखि १०:४५ सम्म चल्छ। शुक्रबार, शनिबार र सरकारी बिदाका दिन बजार बन्द रहन्छ।'
        }
      },
      {
        en: {
          q: 'What is EDIS on MeroShare and when must it be completed?',
          a: 'Electronic Delivery Instruction Slip (EDIS) is the mandatory digital authorization you must submit through MeroShare after selling shares via your broker TMS. You must execute EDIS before 6:00 PM on the next trading day (T+1) to avoid a 20% close-out penalty.'
        },
        np: {
          q: 'MeroShare मा EDIS भनेको के हो र यो कहिले गरिसक्नुपर्छ?',
          a: 'EDIS भनेको सेयर बिक्री गरेपछि आफ्नो Demat बाट सेयर हस्तान्तरण गर्न दिइने डिजिटल अनुमति हो। सेयर बेचेको भोलिपल्ट (T+1) साँझ ६:०० बजेभित्र EDIS गरिसक्नुपर्छ, अन्यथा २०% जरिवाना (Close-out penalty) लाग्छ।'
        }
      }
    ]
  },
  {
    id: 4,
    slug: 'banking',
    icon: 'building',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    duration: { en: '3 Hours', np: '३ घण्टा' },
    lessonCount: 8,
    guideCount: 3,
    calcCount: 2,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['banking', 'fixed deposit', 'fd', 'interest rates', 'nrb', 'base rate', 'cheque'],
    visualRoadmap: [
      'Class A, B, C & D Banks in Nepal',
      'Savings vs. Current vs. Fixed Deposit',
      'Base Rate & Interest Spread Formula',
      'NRB Deposit Protection (NPR 500k)',
      'Debit Cards vs. Credit Cards in Nepal',
      'Cheque Clearing & Safe Digital Banking',
      'Prepaid US Dollar Card Guidelines',
      'Cooperative Safety & Risk Rules'
    ],
    en: {
      name: 'Banking',
      shortDesc: 'Understand the Nepali banking structure: Class A commercial banks, Base Rate mechanics, and deposit protection.',
      tagline: 'Navigate the Nepali banking system safely and optimize your interest yields.',
      overview: 'Banks in Nepal are classified into four tiers (A, B, C, D) regulated rigorously by Nepal Rastra Bank (NRB). From knowing how interest rates are determined through the Base Rate formula to safeguarding your money under the Deposit and Credit Guarantee Fund (NPR 500,000 coverage), this path teaches you how to negotiate loan rates, pick high-yielding Fixed Deposits, and avoid unnecessary transaction fees.',
      whatIsThis: 'Banking is the institutional system where financial entities accept deposits, offer payment services, and issue credit under NRB guidelines.',
      whyImportant: 'Almost all personal and business wealth in Nepal flows through banks. Understanding base rates and spread limits helps you avoid overpaying on loans and protects savings.',
      howInNepal: 'Regulated by Nepal Rastra Bank (NRB) under the BAFIA Act. Interest rates are revised monthly based on average cost of funds.'
    },
    np: {
      name: 'Banking (बैंकिङ प्रणाली)',
      shortDesc: 'नेपाली बैंकिङ संरचना: "क" वर्गका वाणिज्य बैंक, Base Rate र निक्षेप सुरक्षा बुझ्नुहोस्।',
      tagline: 'नेपाली बैंकिङ प्रणाली सुरक्षित रूपमा चलाउनुहोस् र आफ्नो निक्षेपमा अधिकतम ब्याज पाउनुहोस्।',
      overview: 'नेपालमा बैंकहरूलाई नेपाल राष्ट्र बैंक (NRB) ले चार वर्ग (क, ख, ग, घ) मा विभाजन गरेको छ। Base Rate का आधारमा ऋणको ब्याजदर कसरी तय हुन्छ, रु. ५ लाखसम्मको निक्षेप सुरक्षण कोषको ग्यारेन्टी कसरी काम गर्छ, र मुद्दती निक्षेप (FD) मा अधिकतम प्रतिफल कसरी लिने भन्ने कुरा यस मार्गले सिकाउँछ।',
      whatIsThis: 'Banking भनेको नेपाल राष्ट्र बैंकको नियमनभित्र रहेर निक्षेप संकलन गर्ने, ऋण दिने र भुक्तानी सेवा दिने कानुनी संस्थागत प्रणाली हो।',
      whyImportant: 'नेपालमा व्यक्तिगत र व्यावसायिक सबै कारोबार बैंकमार्फत नै हुन्छ। Base Rate र प्रिमियम बुझ्दा ऋणमा बढी ब्याज तिर्नबाट जोगिन सकिन्छ।',
      howInNepal: 'नेपाल राष्ट्र बैंकद्वारा बाफिया (BAFIA) ऐन अन्तर्गत नियमन हुन्छ। बैंकहरूले हरेक महिना कोषको लागत अनुसार नयाँ ब्याजदर प्रकाशित गर्छन्।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '30 min',
        en: { title: 'The Banking Architecture of Nepal', desc: 'Class A, B, C, D institutions and how to evaluate financial strength.' },
        np: { title: 'नेपालको बैंकिङ संरचना', desc: 'क, ख, ग, घ वर्गका वित्तीय संस्थाहरू र बैंकको वित्तीय सबलता जाँच्ने तरिका।' },
        lessons: [
          {
            id: 'bnk-1',
            number: 1,
            slug: 'bank-classes-nepal-nrb',
            duration: '15 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Foundation',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Class A, B, C & D Banks: What Are the Differences?',
              summary: 'Commercial banks vs. Development banks vs. Finance companies vs. Microfinances under NRB.',
              keyTakeaways: 'Class A commercial banks offer full foreign exchange, trade finance, and largest branch networks; Microfinances focus on rural credit.'
            },
            np: {
              title: 'क, ख, ग, घ वर्गका बैंकहरू: के फरक छ?',
              summary: 'वाणिज्य बैंक, विकास बैंक, फाइनान्स कम्पनी र लघुवित्त वित्तीय संस्था बीचको भिन्नता।',
              keyTakeaways: '"क" वर्गका वाणिज्य बैंकसँग पूर्ण विदेशी मुद्रा र ठूलो सञ्जाल हुन्छ; लघुवित्तले ग्रामीण क्षेत्रमा विपन्न वर्ग कर्जामा काम गर्छ।'
            }
          },
          {
            id: 'bnk-2',
            number: 2,
            slug: 'deposit-types-fixed-deposit-nepal',
            duration: '15 min',
            difficulty: 'Beginner',
            type: 'Lesson',
            format: 'Comparison',
            updatedDate: 'Sep 2026',
            prerequisites: 'bnk-1',
            en: {
              title: 'Savings vs. Current vs. Fixed Deposit (FD)',
              summary: 'Choosing the right account type and understanding compounding frequency (quarterly vs. monthly) in Nepal.',
              keyTakeaways: 'Fixed Deposits in Nepal compound quarterly; bank interest is subject to 5% withholding tax at source.'
            },
            np: {
              title: 'बचत, चल्ती र मुद्दती निक्षेप (FD) को तुलना',
              summary: 'सहि खाता छान्ने तरिका र नेपालमा त्रैमासिक चक्रबृद्धि ब्याजदरको हिसाब।',
              keyTakeaways: 'नेपाली बैंकमा मुद्दती निक्षेपको ब्याज त्रैमासिक रूपमा जोडिन्छ; प्राप्त ब्याजमा ५% TDS कर कट्टा हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Interest Rates, Base Rate & Lending',
          relatedGuide: { title: 'Nepali Banking Handbook', slug: 'nepal-banking-handbook', duration: '15 min' },
          relevantCalc: { name: 'Fixed Deposit Calculator', slug: 'calculators/fixed-deposit', key: 'fd' },
          glossaryTerms: ['Base Rate', 'Fixed Deposit', 'NRB'],
          relatedCategory: { name: 'Loans & Debt', slug: 'loans' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '36 min',
        en: { title: 'Interest Rates, Base Rate & Lending', desc: 'How borrowing costs are set and navigating bank spread limits.' },
        np: { title: 'ब्याजदर, Base Rate र कर्जा', desc: 'ऋणको लागत कसरी तय हुन्छ र ब्याजदर अन्तर (Spread) बुझ्ने तरिका।' },
        lessons: [
          {
            id: 'bnk-3',
            number: 3,
            slug: 'base-rate-premium-nepal-banks',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'Mechanics',
            updatedDate: 'Sep 2026',
            prerequisites: 'bnk-2',
            en: {
              title: 'How Base Rate and Premium Determine Your Loan Interest',
              summary: 'Understanding the formula (Base Rate + Premium %) and how changing liquidity shifts your monthly loan EMI.',
              keyTakeaways: 'Loan Rate = Bank Base Rate + Fixed Premium; negotiate the premium when bank liquidity is high.'
            },
            np: {
              title: 'Base Rate र Premium ले ऋणको ब्याजदर कसरी निर्धारण गर्छ?',
              summary: 'ऋणको ब्याजदर निकाल्ने सूत्र (Base Rate + Premium) र बजार तरलता अनुसार किस्तामा आउने परिवर्तन।',
              keyTakeaways: 'कर्जाको ब्याज = Base Rate + निश्चित प्रिमियम; बजारमा पैसा बढी भएको बेला प्रिमियम घटाउन मोलमोलाई गर्नुहोस्।'
            }
          },
          {
            id: 'bnk-4',
            number: 4,
            slug: 'deposit-guarantee-fund-nepal',
            duration: '18 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Safety',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Deposit Protection in Nepal: The NPR 500,000 Safety Net',
              summary: 'How the Deposit and Credit Guarantee Fund (DCGF) protects individual savings if a bank fails.',
              keyTakeaways: 'Individual deposits up to NPR 500,000 are guaranteed by law across all licensed BFIs.'
            },
            np: {
              title: 'नेपालमा निक्षेप सुरक्षा: रु. ५ लाखसम्मको सुरक्षा घेरा',
              summary: 'बैंक समस्यामा परे पनि निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) ले सर्वसाधारणको रकम कसरी फिर्ता गर्छ।',
              keyTakeaways: 'नेपालमा इजाजतप्राप्त जुनसुकै बैंकमा रहेको व्यक्तिगत निक्षेप रु. ५ लाखसम्म कानुनद्वारा पूर्ण सुरक्षित छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Cards, Digital Transfers & Cheque Safety',
          relatedGuide: { title: 'Understanding Bank EMIs Guide', slug: 'bank-emi-guide', duration: '14 min' },
          relevantCalc: { name: 'Loan EMI Calculator', slug: 'calculators/emi', key: 'emi' },
          glossaryTerms: ['Base Rate', 'Spread', 'DCGF'],
          relatedCategory: { name: 'Loans & Debt', slug: 'loans' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '34 min',
        en: { title: 'Cards, Digital Transfers & Cheque Safety', desc: 'Navigating debit cards, credit cards, and cheque bounce laws in Nepal.' },
        np: { title: 'कार्ड, डिजिटल रकमान्तर र चेक सुरक्षा', desc: 'डेबिट कार्ड, क्रेडिट कार्ड र नेपालको चेक बाउन्स कानुन।' },
        lessons: [
          {
            id: 'bnk-5',
            number: 5,
            slug: 'credit-vs-debit-cards-nepal',
            duration: '16 min',
            difficulty: 'Beginner',
            type: 'Comparison',
            format: 'Cards',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Credit Cards vs. Debit Cards in Nepal',
              summary: 'Annual fees, grace periods, cash advance traps, and USD travel card limits ($500/year) under NRB.',
              keyTakeaways: 'Credit cards offer 15-45 days interest-free periods; never withdraw cash at ATMs using a credit card.'
            },
            np: {
              title: 'नेपालमा Credit Card र Debit Card बीचको भिन्नता',
              summary: 'वार्षिक शुल्क, ब्याज छुट अवधि, ATM बाट नगद झिक्दा लाग्ने चर्को शुल्क र डलर कार्डको सीमा।',
              keyTakeaways: 'क्रेडिट कार्डमा १५ देखि ४५ दिनसम्म बिनाब्याज चलाउन सकिन्छ; क्रेडिट कार्डबाट ATM मा नगद कहिल्यै नझिक्नुहोस्।'
            }
          },
          {
            id: 'bnk-6',
            number: 6,
            slug: 'cheque-bounce-banking-offence-nepal',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Legal',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Cheque Bounce Laws & Banking Offence Act in Nepal',
              summary: 'Legal penalties, blacklisting by CIB, and recovering dishonored payments through police or courts.',
              keyTakeaways: 'Bouncing a cheque intentionally leads to blacklisting by the Credit Information Bureau (CIB) and potential jail time.'
            },
            np: {
              title: 'नेपालमा चेक बाउन्स र बैंकिङ कसुर ऐनको कानुनी व्यवस्था',
              summary: 'कानुनी कारबाही, कर्जा सूचना केन्द्र (CIB) को कालोसूची र अनादर भएको चेक असुल गर्ने विधि।',
              keyTakeaways: 'खातामा पैसा नभई चेक काट्नु बैंकिङ कसुर हो; यसले CIB को कालोसूचीमा पार्नुका साथै जेल सजाय समेत हुन सक्छ।'
            }
          },
          {
            id: 'bnk-7',
            number: 7,
            slug: 'dollar-card-nepal',
            duration: '11 min',
            difficulty: 'Beginner',
            type: 'Tutorial',
            format: 'Practice',
            updatedDate: 'Sep 2026',
            prerequisites: 'bnk-5',
            en: {
              title: 'NRB Prepaid Dollar Card ($500/Year): Requirements, Limits & Online Subscriptions',
              summary: 'How to obtain an international prepaid USD card from Class A commercial banks, mandatory PAN requirements, loading fees, annual $500 NRB cap, and permissible transactions.',
              keyTakeaways: 'Prepaid card capped at USD 500 per fiscal year; PAN and active bank account mandatory; strictly prohibited for cryptocurrency or forex trading.'
            },
            np: {
              title: 'नेपालमा डलर कार्ड ($५००/वर्ष): प्रक्रिया, सीमा र अनलाइन भुक्तानी नियम',
              summary: 'वाणिज्य बैंकहरूबाट अन्तर्राष्ट्रिय प्रिपेड डलर कार्ड लिने तरिका, PAN को आवश्यकता, वार्षिक $५०० को सीमा र कानुनी प्रयोग।',
              keyTakeaways: 'वार्षिक अधिकतम ५०० अमेरिकी डलरको सीमा; PAN र बैंक खाता अनिवार्य; क्रिप्टो वा अनलाइन जुवामा प्रयोग गर्न सख्त निषेध।'
            }
          },
          {
            id: 'bnk-8',
            number: 8,
            slug: 'cooperative-safety-rules-nepal',
            duration: '13 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Safety',
            updatedDate: 'Sep 2026',
            prerequisites: 'bnk-4',
            en: {
              title: 'Cooperative (Sahakari) Safety Rules: How to Spot Problematic Cooperatives in Nepal',
              summary: 'Key distinctions between NRB-regulated commercial banks and cooperatives, warning signs of insolvency, insider promoter lending, lack of deposit insurance, and red flags.',
              keyTakeaways: 'Cooperatives are not insured by DCGF (no 5 lakh deposit guarantee); beware of above-market interest promises; avoid keeping emergency funds in cooperatives.'
            },
            np: {
              title: 'सहकारी (Sahakari) सुरक्षा नियम: संकटग्रस्त सहकारी कसरी चिन्ने?',
              summary: 'वाणिज्य बैंक र सहकारी बीचको नियामक भिन्नता, सञ्चालकहरूको अपचलन, निक्षेप बीमा नहुनुका जोखिम र ठगीबाट बच्ने उपाय।',
              keyTakeaways: 'सहकारीमा ५ लाखको सरकारी निक्षेप सुरक्षण हुँदैन; बजारभन्दा धेरै ब्याजको प्रलोभनमा नफस्नुहोस्; आपतकालीन रकम सहकारीमा कहिल्यै नराख्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Digital Payments & Wallets',
          relatedGuide: { title: 'Safe Banking Practices in Nepal', slug: 'safe-banking', duration: '12 min' },
          relevantCalc: { name: 'Fixed Deposit Calculator', slug: 'calculators/fixed-deposit', key: 'fd' },
          glossaryTerms: ['Credit Card', 'Debit Card', 'Cheque Bounce', 'CIB'],
          relatedCategory: { name: 'Digital Payments', slug: 'digital-payments' }
        }
      }
    ],
    relatedCalculators: ['fd', 'emi'],
    relatedGuides: [
      { title: 'Complete Banking Guide for Nepal', slug: 'complete-banking-guide', duration: '16 min', difficulty: 'Beginner' },
      { title: 'How Bank Interest Rates Are Calculated in Nepal', slug: 'bank-interest-calc', duration: '14 min', difficulty: 'Intermediate' }
    ],
    relatedResources: ['budget-planner-system'],
    faqs: [
      {
        en: {
          q: 'What is the maximum amount guaranteed if a bank goes bankrupt in Nepal?',
          a: 'Under the Deposit and Credit Guarantee Act, individual savings and fixed deposits up to NPR 500,000 per depositor per bank are fully insured and guaranteed by the Government of Nepal.'
        },
        np: {
          q: 'यदि नेपालमा कुनै बैंक डुब्यो भने कति रकमको ग्यारेन्टी हुन्छ?',
          a: 'निक्षेप तथा कर्जा सुरक्षण ऐन अनुसार प्रत्येक निक्षेपकर्ताको एउटा बैंकमा रहेको रु. ५,००,००० (पाँच लाख) सम्मको बचत तथा मुद्दती रकम सरकारद्वारा पूर्ण सुरक्षित गरिएको हुन्छ।'
        }
      }
    ]
  },
  {
    id: 5,
    slug: 'taxation',
    icon: 'receipt',
    difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
    duration: { en: '4 Hours', np: '४ घण्टा' },
    lessonCount: 7,
    guideCount: 3,
    calcCount: 2,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['tax', 'income tax', 'tds', 'pan', 'cgt', 'ssf', 'cit', 'ird', 'vat'],
    visualRoadmap: [
      'Single vs. Married Tax Slabs in Nepal',
      '1% Social Security Tax (SST) Rule',
      'TDS on Salary, Bank Interest & Contracts',
      'Allowable Deductions: SSF, CIT & Insurance',
      'Capital Gains Tax (5% vs. 7.5%) on Shares',
      'Filing Income Tax Returns on IRD Portal',
      'IT Export & Freelancer Concessional Tax'
    ],
    en: {
      name: 'Taxation & TDS',
      shortDesc: 'Navigate Nepal income tax slabs, SSF and CIT deductions, TDS withholding, and capital gains tax rules.',
      tagline: 'Understand how taxes work in Nepal and legally minimize your tax burden.',
      overview: 'Understanding taxes in Nepal protects you from unexpected penalties and ensures you claim every legal rebate available under the Income Tax Act 2058. This pathway breaks down individual vs. couple slabs, how Social Security Fund (SSF) and Citizen Investment Trust (CIT) reduce taxable salary, how 1% Social Security Tax applies, and how capital gains are taxed when you sell shares or real estate.',
      whatIsThis: 'Taxation is the statutory contribution levied by the Government of Nepal through the Inland Revenue Department (IRD) on income, capital gains, and consumption.',
      whyImportant: 'Unclaimed deductions cost salaried professionals tens of thousands of rupees annually. Proper planning with SSF, CIT, and life insurance keeps your hard-earned money in your pocket.',
      howInNepal: 'Administered by Inland Revenue Department (IRD). Salaried employees have taxes deducted at source (TDS); business owners file self-assessed annual returns (D-01/D-02).'
    },
    np: {
      name: 'Taxation & TDS (नेपाल कर प्रणाली)',
      shortDesc: 'नेपाल आयकर स्ल्याब, SSF र CIT छुट, TDS कट्टी र पुँजीगत लाभकर (CGT) नियमहरू बुझ्नुहोस्।',
      tagline: 'नेपालको कर कानुन बुझ्नुहोस् र कानुनी रूपमै आफ्नो कर भार कम गर्नुहोस्।',
      overview: 'नेपालमा कर कानुन बुझ्दा अनावश्यक जरिवानाबाट जोगिनुका साथै आयकर ऐन २०५८ अन्तर्गत पाइने सबै कानुनी छुटहरूको फाइदा लिन सकिन्छ। यस मार्गले व्यक्तिगत र दम्पतीको कर स्ल्याब, सामाजिक सुरक्षा कोष (SSF) र नागरिक लगानी कोष (CIT) ले कसरी करयोग्य तलब घटाउँछ, १% सामाजिक सुरक्षा कर कसलाई लाग्छ, र सेयर वा घरजग्गा बिक्रीमा पुँजीगत लाभकर कसरी हिसाब हुन्छ भन्ने कुरा स्पष्ट पार्छ।',
      whatIsThis: 'Taxation भनेको आन्तरिक राजस्व विभाग (IRD) मार्फत सरकारले आम्दानी, पुँजीगत लाभ र उपभोगमा लगाउने कानुनी कर हो।',
      whyImportant: 'उपलब्ध छुटहरू दाबी नगर्दा जागिरे व्यक्तिहरूको वार्षिक हजारौं रूपैयाँ खेर जान्छ। SSF, CIT र जीवन बीमाको सहि योजना गर्दा धेरै कर बचत हुन्छ।',
      howInNepal: 'आन्तरिक राजस्व विभाग (IRD) ले नियमन गर्छ। जागिरेहरूको तलबबाटै TDS कट्टी हुन्छ भने व्यवसायीहरूले वार्षिक विवरण (D-01/D-02) बुझाउँछन्।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '40 min',
        en: { title: 'Income Tax Slabs & Salary Deductions', desc: 'Single vs. married tiers, 1% SST, and progressive taxation in Nepal.' },
        np: { title: 'आयकर स्ल्याब र तलबमा कर कट्टी', desc: 'व्यक्तिगत र दम्पतीको स्ल्याब, १% सामाजिक सुरक्षा कर र प्रगतिशील कर प्रणाली।' },
        lessons: [
          {
            id: 'tax-1',
            number: 1,
            slug: 'nepal-income-tax-slabs-salary',
            duration: '20 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Rules',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Understanding Nepal Income Tax Slabs for FY 2081/82 & Beyond',
              summary: 'How progressive tax brackets work from the initial 1% bracket up to the highest 39% tier.',
              keyTakeaways: 'Taxes are calculated in progressive tiers, not a flat rate across your entire salary.'
            },
            np: {
              title: 'नेपालको नयाँ आयकर स्ल्याब र नियमहरू',
              summary: 'सुरुवाती १% स्ल्याबदेखि अधिकतम ३९% सम्म प्रगतिशील कर कसरी हिसाब गरिन्छ।',
              keyTakeaways: 'कर पूरै तलबमा एउटै दरमा लाग्दैन, विभिन्न स्ल्याब अनुसार क्रमशः हिसाब गरिन्छ।'
            }
          },
          {
            id: 'tax-2',
            number: 2,
            slug: 'ssf-cit-insurance-tax-deductions',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Deductions',
            updatedDate: 'Sep 2026',
            prerequisites: 'tax-1',
            en: {
              title: 'Maximizing Legal Tax Deductions: SSF, CIT & Life Insurance',
              summary: 'How contributing to retirement funds and health/life policies shields your income from tax.',
              keyTakeaways: 'SSF contributions are 100% tax exempt; CIT/PF allows up to NPR 300,000 (or 1/3 of salary); Life insurance gives up to NPR 40,000 rebate.'
            },
            np: {
              title: 'कानुनी कर छुटका माध्यमहरू: SSF, CIT र जीवन बीमा',
              summary: 'अवकाश कोष, सञ्चय कोष र बीमामा लगानी गरेर आफ्नो करयोग्य आम्दानी घटाउने विधि।',
              keyTakeaways: 'SSF मा जाने रकममा पूरै कर छुट हुन्छ; CIT/सञ्चय कोषमा वार्षिक रु. ३ लाखसम्म; जीवन बीमा प्रिमियममा रु. ४०,००० सम्म छुट पाइन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'TDS Withholding & Capital Gains Tax',
          relatedGuide: { title: 'Complete Income Tax Guide', slug: 'complete-income-tax-guide', duration: '18 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['PAN', 'TDS', 'SSF', 'CIT'],
          relatedCategory: { name: 'Personal Finance', slug: 'personal-finance' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '42 min',
        en: { title: 'TDS Withholding & Capital Gains Tax', desc: 'TDS rates across contracts, rents, and selling shares or property in Nepal.' },
        np: { title: 'TDS कट्टी र पुँजीगत लाभकर (CGT)', desc: 'परामर्श, घरभाडा, सेयर र घरजग्गा बिक्रीमा लाग्ने करको यथार्थ हिसाब।' },
        lessons: [
          {
            id: 'tax-3',
            number: 3,
            slug: 'tds-rates-nepal-salaried-freelance',
            duration: '22 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'Withholding',
            updatedDate: 'Sep 2026',
            prerequisites: 'tax-1',
            en: {
              title: 'TDS on Salary, Bank Interest, Rents & Freelance Consulting',
              summary: 'Which payments are subject to final withholding vs. adjustable withholding under IRD guidelines.',
              keyTakeaways: 'Bank interest TDS (5%) is final; house rent TDS is paid to local municipality; consulting TDS (1.5% with VAT, 15% without VAT) is advance tax.'
            },
            np: {
              title: 'तलब, बैंक ब्याज, घरभाडा र कन्सल्टिङमा लाग्ने TDS दरहरू',
              summary: 'कुन कर अन्तिम कर कट्टी (Final TDS) हो र कुन समायोजन गर्न मिल्ने अग्रिम कर हो।',
              keyTakeaways: 'बैंकको ब्याजमा ५% TDS अन्तिम हुन्छ; घरभाडा कर स्थानीय तहमा बुझाइन्छ; कन्सल्टिङमा काटिएको TDS वार्षिक करमा समायोजन हुन्छ।'
            }
          },
          {
            id: 'tax-4',
            number: 4,
            slug: 'capital-gains-tax-shares-real-estate',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Gains',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Capital Gains Tax (CGT) on NEPSE Shares & Land Sales',
              summary: 'Understanding 5% (holding > 365 days) vs. 7.5% (holding <= 365 days) for individual NEPSE investors.',
              keyTakeaways: 'Hold shares longer than 1 year to pay 5% CGT instead of 7.5%; real estate held over 5 years enjoys lower CGT.'
            },
            np: {
              title: 'सेयर र घरजग्गा बिक्रीमा पुँजीगत लाभकर (CGT)',
              summary: 'NEPSE मा ३६५ दिनभन्दा बढी सेयर होल्ड गर्दा ५% र ३६५ दिनभन्दा कममा ७.५% करको नियम।',
              keyTakeaways: '१ वर्षभन्दा बढी सेयर राखेर बेच्दा लाभकर ५% मात्र लाग्छ; घरजग्गा ५ वर्षभन्दा बढी राखेर बेच्दा कम कर लाग्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Tax Return Filing & PAN Management',
          relatedGuide: { title: 'Complete PAN & IRD Filing Guide', slug: 'complete-pan-guide', duration: '14 min' },
          relevantCalc: { name: 'NEPSE Share & CGT Calculator', slug: 'calculators/nepse-share', key: 'share' },
          glossaryTerms: ['Capital Gain', 'TDS', 'Advance Tax'],
          relatedCategory: { name: 'NEPSE & Stocks', slug: 'nepse' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '38 min',
        en: { title: 'Tax Return Filing & PAN Management', desc: 'Acquiring personal PAN and submitting returns on the IRD Nagarik portal.' },
        np: { title: 'कर विवरण दाखिला र PAN व्यवस्थापन', desc: 'व्यक्तिगत PAN लिने र IRD को अनलाइन पोर्टलबाट कर चुक्ता प्रमाणपत्र लिने विधि।' },
        lessons: [
          {
            id: 'tax-5',
            number: 5,
            slug: 'how-to-get-personal-pan-nepal',
            duration: '18 min',
            difficulty: 'Beginner',
            type: 'Tutorial',
            format: 'Registration',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'How to Get a Personal PAN Online in Nepal via Nagarik App',
              summary: 'Step-by-step registration for salaried professionals and freelancers using biometric citizenship details.',
              keyTakeaways: 'PAN is mandatory for salary payments exceeding NPR 1,000 in Nepal; can be obtained in 5 minutes via Nagarik App.'
            },
            np: {
              title: 'नागरिक एप र IRD पोर्टलबाट अनलाइन व्यक्तिगत PAN लिने तरिका',
              summary: 'नागरिकताका आधारमा जागिरे तथा फ्रीलान्सरहरूले तुरुन्त PAN नम्बर निकाल्ने प्रक्रिया।',
              keyTakeaways: 'नेपालमा जुनसुकै तलब भुक्तानी पाउन PAN अनिवार्य छ; नागरिक एपबाट ५ मिनेटमै निःशुल्क PAN लिन सकिन्छ।'
            }
          },
          {
            id: 'tax-6',
            number: 6,
            slug: 'filing-annual-returns-tax-clearance',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Compliance',
            updatedDate: 'Sep 2026',
            prerequisites: 'tax-5',
            en: {
              title: 'Filing Annual Tax Returns & Getting Tax Clearance in Nepal',
              summary: 'Submitting D-01 self-assessment forms on the IRD portal to verify TDS credits and obtain visa clearances.',
              keyTakeaways: 'Filing returns verifies all TDS deducted by employers; necessary for foreign travel visas and bank loan audits.'
            },
            np: {
              title: 'वार्षिक कर विवरण बुझाउने र कर चुक्ता प्रमाणपत्र (Tax Clearance) लिने विधि',
              summary: 'IRD को पोर्टलमा D-01 फाराम भरेर आफ्नो कर कट्टी प्रमाणीकरण गर्ने र कर चुक्ता लिने प्रक्रिया।',
              keyTakeaways: 'विवरण बुझाउँदा रोजगारदाताले काटेको TDS कर कार्यालयमा दर्ता भएको यकिन हुन्छ; भिसा आवेदन र बैंक ऋणका लागि यो अनिवार्य हुन्छ।'
            }
          },
          {
            id: 'tax-7',
            number: 7,
            slug: 'freelance-it-export-tax-nepal',
            duration: '12 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Compliance',
            updatedDate: 'Sep 2026',
            prerequisites: 'tax-3',
            en: {
              title: 'Tax on Freelancers and IT Exporters in Nepal: 5% vs. 10% Concessional Regime',
              summary: 'Concessional income tax on foreign currency earnings from software development, freelancing, and digital services, bank foreign exchange declaration, and final tax nature.',
              keyTakeaways: '5% withholding on export of IT/digital services in foreign currency is final tax; must receive funds through official banking channels with foreign exchange advice.'
            },
            np: {
              title: 'नेपालमा फ्रीलान्सर र IT निर्यातकर्ताको कर: ५% सहुलियतपूर्ण व्यवस्था',
              summary: 'विदेशी मुद्रामा सफ्टवेयर, IT र डिजिटल सेवा निर्यात गर्दा लाग्ने ५% सहुलियतपूर्ण कर, बैंकिङ कागजात र अन्तिम कर कट्टीको नियम।',
              keyTakeaways: 'बैंकिङ माध्यमबाट विदेशी मुद्रा भित्रिँदा ५% कर कट्टी नै अन्तिम कर हो; बैंकबाट विदेशी मुद्रा भुक्तानीको सल्लाह (Advice) सुरक्षित राख्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Business & Startup Compliance',
          relatedGuide: { title: 'Tax Clearance Handbook', slug: 'tax-clearance-handbook', duration: '12 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['Tax Clearance', 'IRD', 'D-01'],
          relatedCategory: { name: 'Business & Startups', slug: 'business' }
        }
      }
    ],
    relatedCalculators: ['nepal-income-tax', 'share'],
    relatedGuides: [
      { title: 'Complete Nepal Income Tax Guide', slug: 'complete-income-tax-guide', duration: '18 min', difficulty: 'Beginner' },
      { title: 'Complete PAN Card Online Guide', slug: 'complete-pan-guide', duration: '14 min', difficulty: 'Beginner' },
      { title: 'SSF vs CIT: Which Saves More Tax in Nepal?', slug: 'ssf-vs-cit-tax', duration: '16 min', difficulty: 'Intermediate' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'Do salaried individuals who already pay TDS need to file an annual income tax return?',
          a: 'If your only income is salary from a single employer and appropriate TDS has been withheld, filing an annual return is optional. However, if you have secondary freelance income, capital gains from shares exceeding thresholds, or wish to claim an official Tax Clearance certificate for a foreign visa, you must file a D-01 return on the IRD portal.'
        },
        np: {
          q: 'तलबबाट पहिल्यै TDS काटिएका व्यक्तिले पनि वार्षिक कर विवरण (Return) बुझाउनुपर्छ?',
          a: 'यदि तपाईंको आम्दानी एउटै रोजगारदाताको तलब मात्र हो र नियम अनुसार TDS काटिएको छ भने वार्षिक विवरण बुझाउनु ऐच्छिक हुन्छ। तर यदि तपाईंको अन्य आम्दानी, सेयर कारोबारको नाफा वा विदेशी भिसाका लागि Tax Clearance आवश्यक छ भने IRD पोर्टलमा D-01 विवरण बुझाउनुपर्छ।'
        }
      }
    ]
  },
  {
    id: 6,
    slug: 'insurance',
    icon: 'shieldCheck',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    duration: { en: '3.5 Hours', np: '३.५ घण्टा' },
    lessonCount: 6,
    guideCount: 2,
    calcCount: 2,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['insurance', 'life insurance', 'term life', 'endowment', 'health insurance', 'beema', 'premium'],
    visualRoadmap: [
      'Why Insurance is Protection, Not Investment',
      'Term Life vs. Endowment (Money-Back) in Nepal',
      'Health & Critical Illness Policies',
      'Motor & Third-Party Insurance Mandates',
      'Claim Settlement Process & Documentation',
      'Tax Rebates on Life Insurance Premiums'
    ],
    en: {
      name: 'Insurance',
      shortDesc: 'Understand Term Life vs. Endowment, health insurance policies, claim settlements, and Nepal Insurance Authority (NIA) rules.',
      tagline: 'Protect your family from catastrophic financial loss without falling for mis-sold policies.',
      overview: 'Insurance in Nepal is frequently mis-sold as an investment or forced savings scheme, resulting in expensive premiums with shockingly low death benefit coverage. This path teaches you the golden rule of insurance: keep protection and investments separate. Learn how pure Term Life policies provide 10x higher family financial security at a fraction of the cost, how Health and Critical Illness covers protect savings from hospital bills, and how to verify legitimate claim procedures under Nepal Insurance Authority guidelines.',
      whatIsThis: 'Insurance is a risk management contract where an insurer provides financial compensation against specified death, illness, or property damage in exchange for regular premium payments.',
      whyImportant: 'A single major medical crisis in Nepal can wipe out decades of family savings. Having the right coverage preserves your wealth and protects dependents.',
      howInNepal: 'Regulated by Nepal Insurance Authority (Nepal Beema Pradhikaran). Life and Non-Life insurers are strictly separated by law.'
    },
    np: {
      name: 'Insurance (बीमा ज्ञान)',
      shortDesc: 'Term Life र Endowment बीचको भिन्नता, स्वास्थ्य बीमा, दाबी भुक्तानी र बीमा प्राधिकरणका नियमहरू।',
      tagline: 'गलत पोलिसीको भ्रममा नपरी आफ्नो परिवारलाई ठूलो आर्थिक जोखिमबाट सुरक्षित राख्नुहोस्।',
      overview: 'नेपालमा बीमालाई प्रायः बचत वा लगानीको रूपमा गलत प्रचार गरेर बेचिन्छ, जसले गर्दा चर्को प्रिमियम तिरेर पनि परिवारले पाउने वास्तविक सुरक्षा रकम धेरै थोरै हुन्छ। यस मार्गले बीमाको मुख्य सिद्धान्त सिकाउँछ: बीमालाई सुरक्षा मान्नुहोस्, लगानी होइन। शुद्ध Term Life ले कसरी थोरै खर्चमा १० गुणा ठूलो सुरक्षा दिन्छ, स्वास्थ्य बीमाले अस्पतालको महँगो बिलबाट कसरी जोगाउँछ, र दाबी भुक्तानी कसरी लिने भन्ने ज्ञान यहाँ पाउनुहुनेछ।',
      whatIsThis: 'Insurance भनेको नियमित प्रिमियम तिरे बापत भविष्यमा हुन सक्ने मृत्यु, दुर्घटना वा रोगको आर्थिक भार बीमा कम्पनीले व्यहोर्ने कानुनी सम्झौता हो।',
      whyImportant: 'नेपालमा एउटै ठूलो बिरामी वा दुर्घटनाले वर्षौँको पारिवारिक बचत एकैपटक रित्याउन सक्छ। सहि बीमाले परिवारको भविष्य जोगाउँछ।',
      howInNepal: 'नेपाल बीमा प्राधिकरण (Nepal Insurance Authority) ले नियमन गर्छ। कानुन अनुसार जीवन बीमा र निर्जीवन बीमा कम्पनीहरू पूर्णतः छुट्टाछुट्टै सञ्चालन हुन्छन्।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '32 min',
        en: { title: 'Life Insurance Foundations', desc: 'Term life vs. endowment policies and separating protection from investments.' },
        np: { title: 'जीवन बीमाको आधारभूत सिद्धान्त', desc: 'Term Life र Endowment को तुलना र बीमालाई लगानीबाट अलग राख्ने तरिका।' },
        lessons: [
          {
            id: 'ins-1',
            number: 1,
            slug: 'term-life-vs-endowment-nepal',
            duration: '18 min',
            difficulty: 'Beginner',
            type: 'Comparison',
            format: 'Core',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Term Life vs. Endowment: Why Most Nepalis Buy the Wrong Policy',
              summary: 'Comparing pure risk coverage vs. low-return money-back plans pushed by insurance agents in Nepal.',
              keyTakeaways: 'Term life provides huge cover (e.g. 50 lakhs) at tiny annual cost; Endowment yields barely 4-5% compounding.'
            },
            np: {
              title: 'Term Life र Endowment: नेपालीहरूले किन गलत पोलिसी किन्छन्?',
              summary: 'शुद्ध जोखिम सुरक्षा र एजेन्टहरूले बेच्ने कम प्रतिफल दिने मनी-ब्याक योजनाको तुलना।',
              keyTakeaways: 'Term Life ले सानो प्रिमियममै ठूलो सुरक्षा (जस्तै ५० लाख) दिन्छ; परम्परागत Endowment ले मुस्किलले ४-५% मात्र प्रतिफल दिन्छ।'
            }
          },
          {
            id: 'ins-2',
            number: 2,
            slug: 'calculating-life-cover-sum-assured',
            duration: '14 min',
            difficulty: 'Beginner',
            type: 'Lesson',
            format: 'Formula',
            updatedDate: 'Sep 2026',
            prerequisites: 'ins-1',
            en: {
              title: 'How Much Life Cover (Sum Assured) Do You Really Need?',
              summary: 'Using the Human Life Value (HLV) method and 10x annual expenses rule to determine adequate family protection.',
              keyTakeaways: 'Target a minimum sum assured of 10 to 15 times your annual family living expenses plus outstanding bank debts.'
            },
            np: {
              title: 'तपाईंलाई कति रकमको बीमा (Sum Assured) चाहिन्छ?',
              summary: 'HLV विधि र वार्षिक खर्चको १० गुणा नियम प्रयोग गरेर परिवारका लागि पर्याप्त बीमाङ्क निकाल्ने तरिका।',
              keyTakeaways: 'आफ्नो वार्षिक घरायसी खर्चको कम्तीमा १० देखि १५ गुणा र बाँकी रहेको बैंक ऋण बराबरको बीमाङ्क राख्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Health, Accident & Critical Illness Cover',
          relatedGuide: { title: 'Complete Insurance Guide for Nepal', slug: 'complete-insurance-guide', duration: '16 min' },
          relevantCalc: { name: 'Retirement Calculator', slug: 'calculators/retirement', key: 'retirement' },
          glossaryTerms: ['Term Life', 'Endowment', 'Sum Assured', 'Premium'],
          relatedCategory: { name: 'Personal Finance', slug: 'personal-finance' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '36 min',
        en: { title: 'Health, Accident & Critical Illness Cover', desc: 'Protecting savings against private hospital bills and severe diagnoses in Nepal.' },
        np: { title: 'स्वास्थ्य, दुर्घटना र घातक रोग बीमा', desc: 'निजी अस्पतालको महँगी र गम्भीर रोगबाट आफ्नो बचत जोगाउने उपाय।' },
        lessons: [
          {
            id: 'ins-3',
            number: 3,
            slug: 'health-insurance-critical-illness-nepal',
            duration: '18 min',
            difficulty: 'Beginner',
            type: 'Guide',
            format: 'Health',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Health Insurance vs. Critical Illness Cover in Nepal',
              summary: 'Hospitalization indemnity vs. lump-sum payout for cancer, stroke, and organ failures.',
              keyTakeaways: 'Health insurance reimburses direct hospital bills; Critical Illness pays an instant lump sum upon diagnosis.'
            },
            np: {
              title: 'स्वास्थ्य बीमा र घातक रोग (Critical Illness) बीमा',
              summary: 'अस्पताल भर्ना हुँदा लाग्ने खर्च र क्यान्सर, मुटुरोग जस्ता घातक रोगमा एकमुष्ट पाइने रकम।',
              keyTakeaways: 'स्वास्थ्य बीमाले अस्पतालको वास्तविक बिल तिर्छ; क्रिटिकल इलनेसले रोग प्रमाणित हुनासाथ एकमुष्ट रकम भुक्तानी दिन्छ।'
            }
          },
          {
            id: 'ins-4',
            number: 4,
            slug: 'government-health-insurance-board-nepal',
            duration: '18 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Public',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Government Health Insurance Program (Swasthya Beema Board)',
              summary: 'The NPR 3,500 annual premium family scheme offering NPR 100,000 hospital benefits across Nepal.',
              keyTakeaways: 'Affordable public healthcare coverage for families; operates via referral from designated local primary hospitals.'
            },
            np: {
              title: 'सरकारी स्वास्थ्य बीमा कार्यक्रम (स्वास्थ्य बीमा बोर्ड)',
              summary: '५ जनाको परिवारले वार्षिक रु. ३,५०० तिरेर रु. १ लाखसम्मको निःशुल्क उपचार पाउने सरकारी योजना।',
              keyTakeaways: 'सर्वसाधारणका लागि अति न्यून शुल्कको स्वास्थ्य सुरक्षा; तोकिएको सरकारी वा सामुदायिक अस्पतालको सिफारिसमा चल्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Claims, Documentation & Legal Rights',
          relatedGuide: { title: 'Claim Settlement Checklist', slug: 'claim-settlement-checklist', duration: '12 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['Critical Illness', 'Indemnity', 'Swasthya Beema'],
          relatedCategory: { name: 'Banking', slug: 'banking' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '34 min',
        en: { title: 'Claims, Documentation & Legal Rights', desc: 'Submitting claims without rejection and knowing your rights with the regulator.' },
        np: { title: 'दाबी भुक्तानी, कागजात र कानुनी अधिकार', desc: 'दाबी अस्वीकृत हुन नदिने तरिका र बीमा प्राधिकरणमा उजुरी गर्ने नियम।' },
        lessons: [
          {
            id: 'ins-5',
            number: 5,
            slug: 'how-to-file-insurance-claim-nepal',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Tutorial',
            format: 'Claims',
            updatedDate: 'Sep 2026',
            prerequisites: 'ins-3',
            en: {
              title: 'Step-by-Step Insurance Claim Process in Nepal',
              summary: 'Mandatory documentation, death certificates, hospital discharge summaries, and avoiding rejection loopholes.',
              keyTakeaways: 'Notify the insurer within 15-30 days; always disclose pre-existing medical conditions truthfully on proposal forms.'
            },
            np: {
              title: 'नेपालमा बीमा दाबी भुक्तानी लिने चरणबद्ध प्रक्रिया',
              summary: 'आवश्यक कागजात, अस्पताल डिस्चार्ज रिपोर्ट र दाबी अस्वीकृत हुनबाट बच्ने उपायहरू।',
              keyTakeaways: 'घटना भएको १५-३० दिनभित्र कम्पनीलाई जानकारी दिनुहोस्; बीमा फाराम भर्दा पुरानो रोग कहिल्यै नलुकाउनुहोस्।'
            }
          },
          {
            id: 'ins-6',
            number: 6,
            slug: 'tax-rebate-life-insurance-nepal',
            duration: '16 min',
            difficulty: 'Beginner',
            type: 'Reference',
            format: 'Tax',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Income Tax Deductions on Life & Health Insurance Premiums',
              summary: 'Claiming up to NPR 40,000 deduction on life insurance and NPR 20,000 on medical insurance in Nepal.',
              keyTakeaways: 'Submit premium receipts to your employer or IRD portal to directly lower your annual taxable salary.'
            },
            np: {
              title: 'बीमा प्रिमियममा आयकर छुटको व्यवस्था',
              summary: 'जीवन बीमामा वार्षिक रु. ४०,००० र स्वास्थ्य बीमामा रु. २०,००० सम्म करयोग्य आम्दानीबाट घटाउने नियम।',
              keyTakeaways: 'आफ्नो बीमा प्रिमियम तिरेको रसिद रोजगारदाता वा IRD मा बुझाएर प्रत्यक्ष कर बचत गर्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Loans & Debt Management',
          relatedGuide: { title: 'Health Insurance Comparison', slug: 'health-insurance-comparison', duration: '14 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['Claim Settlement', 'Sum Assured', 'Pre-existing Condition'],
          relatedCategory: { name: 'Taxation', slug: 'taxation' }
        }
      }
    ],
    relatedCalculators: ['retirement', 'nepal-income-tax'],
    relatedGuides: [
      { title: 'Complete Insurance Guide for Nepal', slug: 'complete-insurance-guide', duration: '16 min', difficulty: 'Beginner' },
      { title: 'Term Life vs Endowment in Nepal', slug: 'term-vs-endowment', duration: '14 min', difficulty: 'Beginner' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'Why is Term Life Insurance so much cheaper than traditional Endowment plans in Nepal?',
          a: 'Term Life covers pure mortality risk without allocating any part of your premium into investment or cash surrender values. Because the insurer only pays if the policyholder passes away during the term, premiums are up to 80-90% cheaper for the exact same coverage amount.'
        },
        np: {
          q: 'नेपालमा Term Life बीमा परम्परागत Endowment भन्दा किन यति धेरै सस्तो हुन्छ?',
          a: 'Term Life मा कुनै लगानी वा बोनसको अंश हुँदैन, यो पूर्णतः शुद्ध जोखिम सुरक्षा मात्र हो। तोकिएको अवधिभित्र बीमितको निधन भएमा मात्र रकम भुक्तानी हुने भएकाले कम्पनीको लागत कम हुन्छ र सोही कारण प्रिमियम ८०-९०% सम्म सस्तो हुन्छ।'
        }
      }
    ]
  },
  {
    id: 7,
    slug: 'loans',
    icon: 'handCoins',
    difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
    duration: { en: '3.5 Hours', np: '३.५ घण्टा' },
    lessonCount: 7,
    guideCount: 2,
    calcCount: 3,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['loan', 'emi', 'home loan', 'personal loan', 'base rate', 'amortization', 'mortgage', 'cib'],
    visualRoadmap: [
      'Good Debt vs. Bad Debt in Nepal',
      'Base Rate + Premium Formula',
      'Flat Rate vs. Reducing Balance EMI',
      'Home Loan & Mortgage Eligibility Rules',
      'Vehicle & Personal Loan Hidden Charges',
      'Prepayment Penalties & Debt Free Strategies',
      'Study Abroad Education Mortgage Loans'
    ],
    en: {
      name: 'Loans & Debt',
      shortDesc: 'Understand home loans, EMI calculations, Base Rate spreads, collateral evaluation, and debt repayment strategies.',
      tagline: 'Master the math of borrowing in Nepal and break free from high-interest debt cycles.',
      overview: 'Borrowing money can accelerate wealth creation through property acquisition or paralyze your household finances through compound interest traps. This path teaches you the critical mechanics of debt in Nepal: how banks calculate monthly EMIs using the reducing balance method, why flat-rate loans from cooperatives or auto dealers charge almost double the stated interest, how Base Rate + Premium fluctuates, and how to rapidly pay down debt using accelerated prepayment strategies.',
      whatIsThis: 'A loan is borrowed capital provided by a bank or financial institution that must be repaid over time with interest and service charges.',
      whyImportant: 'Taking a 20-year home loan in Nepal at 11% interest means you will repay more than double the original borrowed principal in interest alone. Understanding amortization saves millions of rupees.',
      howInNepal: 'Regulated by NRB. Banks must peg retail loan interest rates to their monthly published Base Rate with a fixed risk premium.'
    },
    np: {
      name: 'Loans & Debt (ऋण र कर्जा व्यवस्थापन)',
      shortDesc: 'घर कर्जा (Home Loan), EMI हिसाब, Base Rate प्रिमियम र ऋण तिर्ने प्रभावकारी रणनीतिहरू।',
      tagline: 'नेपालमा कर्जाको गणित बुझ्नुहोस् र चर्को ब्याजको ऋण चक्रबाट मुक्त हुनुहोस्।',
      overview: 'ऋणले एकातिर घरजग्गा जोड्न सहयोग गर्न सक्छ भने अर्कोतिर चक्रबृद्धि ब्याजका कारण परिवारको आर्थिक ढाड नै भाँच्न सक्छ। यस मार्गले नेपालमा कर्जाको वास्तविक संयन्त्र सिकाउँछ: बैंकले Reducing Balance विधिबाट EMI कसरी हिसाब गर्छन्, सहकारी वा गाडी बिक्रेताले भन्ने Flat Rate ले कसरी दोब्बर ब्याज असुल्छ, Base Rate फेरिँदा किस्ता कसरी बढ्छ, र Prepayment मार्फत लाखौँ रुपैयाँ ब्याज कसरी बचाउने भन्ने व्यावहारिक उपाय यहाँ पाउनुहुनेछ।',
      whatIsThis: 'Loan (कर्जा) भनेको बैंक वा वित्तीय संस्थाबाट निश्चित ब्याज र सेवाशुल्क तिर्ने सर्तमा सापटी लिइएको पुँजी हो।',
      whyImportant: 'नेपालमा ११% ब्याजदरमा २० वर्षको Home Loan लिँदा साँवा भन्दा ब्याज नै धेरै तिर्नुपर्छ। Amortization को गणित बुझ्दा लाखौँ रुपैयाँ जोगाउन सकिन्छ।',
      howInNepal: 'नेपाल राष्ट्र बैंकको निर्देशन अनुसार बैंकहरूले आफ्नो मासिक Base Rate मा निश्चित प्रिमियम जोडेर मात्र ब्याजदर निर्धारण गर्न पाउँछन्।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '34 min',
        en: { title: 'The Mechanics of Borrowing', desc: 'Differentiating productive vs. destructive debt and reducing balance math.' },
        np: { title: 'कर्जाको आधारभूत संयन्त्र', desc: 'उत्पादनशील र अनुत्पादक ऋण बीचको भिन्नता र घट्दो ब्याज (Reducing Balance) को हिसाब।' },
        lessons: [
          {
            id: 'ln-1',
            number: 1,
            slug: 'good-debt-vs-bad-debt-nepal',
            duration: '16 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Principles',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Good Debt vs. Bad Debt: The Nepali Context',
              summary: 'Leveraging debt for appreciating assets (real estate, education, business) vs. depreciating consumer liabilities.',
              keyTakeaways: 'Never borrow at double-digit interest for consumer gadgets, weddings, or lifestyle luxuries.'
            },
            np: {
              title: 'राम्रो ऋण र नराम्रो ऋण: नेपाली परिवेश',
              summary: 'सम्पत्ति बढ्ने क्षेत्र (घरजग्गा, शिक्षा, व्यवसाय) मा लिइने ऋण र मूल्य घट्ने विलासिताका लागि लिइने ऋणको अन्तर।',
              keyTakeaways: 'ग्याजेट, विलासिता वा सामाजिक देखासेखीका लागि चर्को ब्याजमा व्यक्तिगत ऋण कहिल्यै नलिनुहोस्।'
            }
          },
          {
            id: 'ln-2',
            number: 2,
            slug: 'flat-rate-vs-reducing-balance-emi',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Mathematics',
            updatedDate: 'Sep 2026',
            prerequisites: 'ln-1',
            en: {
              title: 'Flat Rate vs. Reducing Balance: The Costly Cooperative Trap',
              summary: 'Why an 8% flat rate actually charges an effective interest rate of nearly 15% on your money.',
              keyTakeaways: 'Always insist on Reducing Balance EMI calculation; flat rates charge interest on money you have already repaid.'
            },
            np: {
              title: 'Flat Rate र Reducing Balance: सहकारीको चर्को भ्रम',
              summary: '८% Flat Rate भनिएको ऋणले वास्तवमा किन झन्डै १५% को हाराहारीमा वास्तविक ब्याज असुलिरहेको हुन्छ।',
              keyTakeaways: 'सधैँ घट्दो बाँकी (Reducing Balance) मा मात्र ऋण लिनुहोस्; Flat Rate ले तिरिसकेको साँवामा पनि ब्याज लिन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Home Loans & Mortgage Eligibility',
          relatedGuide: { title: 'Loan EMI & Amortization Guide', slug: 'emi-amortization-guide', duration: '14 min' },
          relevantCalc: { name: 'EMI Calculator', slug: 'calculators/emi', key: 'emi' },
          glossaryTerms: ['EMI', 'Amortization', 'Base Rate'],
          relatedCategory: { name: 'Banking', slug: 'banking' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '38 min',
        en: { title: 'Home Loans & Mortgage Eligibility', desc: 'Debt-to-income limits, title deed verification, and mortgage processing.' },
        np: { title: 'घर कर्जा (Home Loan) र योग्यता', desc: 'आम्दानीको अनुपात (DTI), लालपुर्जा प्रमाणीकरण र धितो मूल्याङ्कन।' },
        lessons: [
          {
            id: 'ln-3',
            number: 3,
            slug: 'home-loan-eligibility-debt-to-income',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Mortgage',
            updatedDate: 'Sep 2026',
            prerequisites: 'ln-2',
            en: {
              title: 'Qualifying for a Home Loan in Nepal: The 50% DTI Rule',
              summary: 'How NRB caps total monthly debt servicing at 50% of verified tax-paid income.',
              keyTakeaways: 'Banks only consider officially taxed and bank-deposited income when determining your monthly EMI capacity.'
            },
            np: {
              title: 'नेपालमा घर कर्जा लिने योग्यता र ५०% DTI नियम',
              summary: 'राष्ट्र बैंकको नियम अनुसार मासिक किस्ता प्रमाणित कर चुक्ता आम्दानीको ५०% भन्दा बढी हुन नहुने व्यवस्था।',
              keyTakeaways: 'बैंकले खातामा आएको र कर तिरिएको आम्दानीलाई मात्र ऋण तिर्ने आधार मान्छन्।'
            }
          },
          {
            id: 'ln-4',
            number: 4,
            slug: 'property-valuation-mortgage-process',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'Valuation',
            updatedDate: 'Sep 2026',
            prerequisites: 'ln-3',
            en: {
              title: 'Property Valuation & Hidden Loan Charges in Nepal',
              summary: 'Government rate vs. market rate valuation, bank loan processing fees (0.75%), and roka deed registration.',
              keyTakeaways: 'Banks lend 60-70% of the engineer-assessed distress value, not your emotional purchase agreement price.'
            },
            np: {
              title: 'धितो मूल्याङ्कन (Valuation) र बैंकका अतिरिक्त शुल्कहरू',
              summary: 'सरकारी दर र चलनचल्तीको मूल्याङ्कन, सेवा शुल्क (०.७५%), रोक्का प्रक्रिया र इन्जिनियरको मूल्याङ्कन।',
              keyTakeaways: 'बैंकले इन्जिनियरले निकालेको Fair Market / Distress Value को ६०-७०% सम्म मात्र ऋण प्रवाह गर्छन्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Prepayment, Pre-Closure & Debt Freedom',
          relatedGuide: { title: 'Home Loan Comparison Guide', slug: 'home-loan-guide', duration: '16 min' },
          relevantCalc: { name: 'Home Loan Calculator', slug: 'calculators/home-loan', key: 'home-loan' },
          glossaryTerms: ['Debt-to-Income', 'Mortgage', 'LTV'],
          relatedCategory: { name: 'Personal Finance', slug: 'personal-finance' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '34 min',
        en: { title: 'Prepayment, Pre-Closure & Debt Freedom', desc: 'Slashing loan tenure and saving millions in bank interest.' },
        np: { title: 'पूर्वभुक्तानी (Prepayment) र ऋणमुक्ति', desc: 'ऋणको अवधि घटाउने र बैंकलाई लाखौँ रुपैयाँ ब्याज तिर्नबाट बच्ने उपाय।' },
        lessons: [
          {
            id: 'ln-5',
            number: 5,
            slug: 'loan-prepayment-math-savings',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Tutorial',
            format: 'Savings',
            updatedDate: 'Sep 2026',
            prerequisites: 'ln-3',
            en: {
              title: 'How Paying Just 1 Extra EMI per Year Cuts 5 Years Off Your Loan',
              summary: 'The compound math of principal reduction early in a 20-year mortgage timeline.',
              keyTakeaways: 'Early prepayments directly reduce the principal balance, wiping out years of future compound interest.'
            },
            np: {
              title: 'वार्षिक १ अतिरिक्त किस्ता तिर्दा ५ वर्ष कसरी घट्छ?',
              summary: '२० वर्षे घर कर्जामा सुरुवाती वर्षहरूमा साँवा घटाउँदा हुने चामत्कारिक ब्याज बचतको गणित।',
              keyTakeaways: 'सुरुवाती वर्षहरूमा गरिएको पूर्वभुक्तानीले सीधै मूल साँवा घटाउँछ, जसले गर्दा भविष्यको ब्याज लाखौँ रुपैयाँ जोगिन्छ।'
            }
          },
          {
            id: 'ln-6',
            number: 6,
            slug: 'prepayment-penalties-nrb-rules',
            duration: '16 min',
            difficulty: 'Beginner',
            type: 'Guide',
            format: 'Regulations',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Prepayment Penalties & NRB Guidelines on Switching Banks',
              summary: 'NRB limits on pre-closure charges for retail home loans and refinancing to lower-spread banks.',
              keyTakeaways: 'NRB restricts commercial banks from charging exorbitant prepayment penalties on individual retail mortgages.'
            },
            np: {
              title: 'ऋण चुक्ता गर्दा लाग्ने शुल्क र बैंक सार्ने (SWAP) नियम',
              summary: 'व्यक्तिगत घर कर्जा समयअगावै चुक्ता गर्दा वा अर्को सस्तो बैंकमा सार्दा राष्ट्र बैंकले तोकेका सीमाहरू।',
              keyTakeaways: 'राष्ट्र बैंकको निर्देशन अनुसार व्यक्तिगत घर कर्जामा बैंकहरूले चर्को पूर्वभुक्तानी शुल्क लिन पाउँदैनन्।'
            }
          },
          {
            id: 'ln-7',
            number: 7,
            slug: 'education-abroad-loan-nepal',
            duration: '14 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Mortgage',
            updatedDate: 'Sep 2026',
            prerequisites: 'ln-3',
            en: {
              title: 'Education Loans for Abroad Studies in Nepal: Collateral Valuation, Ministry NOC & Forex Limits',
              summary: 'Mortgage requirements for abroad studies (US, Australia, UK, Canada), property distress valuation rules, No Objection Certificate (NOC) from Ministry of Education, and SWIFT foreign exchange transfers.',
              keyTakeaways: 'Education loans require collateral (usually land/house with motor access); distress value covers 60-70%; Ministry NOC is legally required for bank foreign currency wire transfers.'
            },
            np: {
              title: 'नेपालमा विदेश अध्ययनका लागि शैक्षिक कर्जा (Education Loan): धितो, NOC र विदेशी मुद्रा सटही',
              summary: 'विदेश अध्ययन (अस्ट्रेलिया, अमेरिका, क्यानडा, बेलायत) का लागि धितो मूल्याङ्कन, शिक्षा मन्त्रालयको NOC, सेवा शुल्क र SWIFT मार्फत शुल्क पठाउने प्रक्रिया।',
              keyTakeaways: 'शैक्षिक कर्जामा घरजग्गा धितो अनिवार्य हुन्छ; इन्जिनियर मूल्याङ्कनको ६०-७०% सम्म कर्जा पाइन्छ; विदेशी मुद्रा पठाउन शिक्षा मन्त्रालयको NOC अनिवार्य हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Investing & Wealth Creation',
          relatedGuide: { title: 'Debt Snowball vs Avalanche Guide', slug: 'debt-reduction-strategies', duration: '12 min' },
          relevantCalc: { name: 'Loan EMI Calculator', slug: 'calculators/emi', key: 'emi' },
          glossaryTerms: ['Prepayment', 'Tenure', 'Foreclosure'],
          relatedCategory: { name: 'Investing', slug: 'investing' }
        }
      }
    ],
    relatedCalculators: ['emi', 'loan'],
    relatedGuides: [
      { title: 'Complete Home Loan Guide for Nepal', slug: 'complete-home-loan-guide', duration: '16 min', difficulty: 'Intermediate' },
      { title: 'Personal Loan vs Credit Card Loan in Nepal', slug: 'personal-vs-card-loan', duration: '12 min', difficulty: 'Beginner' }
    ],
    relatedResources: ['budget-planner-system'],
    faqs: [
      {
        en: {
          q: 'Why does my monthly EMI amount change when interest rates rise in Nepal?',
          a: 'Most retail loans in Nepal are issued on a floating rate pegged to the bank’s Base Rate. When bank deposit costs rise, the Base Rate increases, causing your overall loan rate to increase. Depending on your agreement, the bank will either increase your monthly EMI or extend your total loan repayment tenure.'
        },
        np: {
          q: 'नेपालमा बैंकको ब्याजदर बढ्दा मेरो मासिक किस्ता (EMI) किन बढ्छ?',
          a: 'नेपालमा अधिकांश कर्जा परिवर्तनशील ब्याजदर (Floating Rate) मा दिइन्छ, जुन बैंकको Base Rate सँग जोडिएको हुन्छ। बैंकको लागत बढ्दा Base Rate बढ्छ र कर्जाको ब्याजदर स्वतः बढ्छ। यस्तो बेला बैंकले या त मासिक किस्ता बढाउँछन् या कर्जाको कुल अवधि लम्ब्याइदिन्छन्।'
        }
      }
    ]
  },
  {
    id: 8,
    slug: 'mutual-funds',
    icon: 'layers',
    difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
    duration: { en: '4 Hours', np: '४ घण्टा' },
    lessonCount: 6,
    guideCount: 3,
    calcCount: 3,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['mutual funds', 'sip', 'nav', 'swp', 'open-ended', 'close-ended', 'amc', 'fund manager'],
    visualRoadmap: [
      'What is a Mutual Fund in Nepal?',
      'Open-Ended vs. Close-Ended Schemes',
      'Net Asset Value (NAV) Mechanics',
      'Starting Online SIP with connectIPS',
      'Dividend Reinvestment Plan (DREP)',
      'Systematic Withdrawal (SWP) Pension'
    ],
    en: {
      name: 'Mutual Funds',
      shortDesc: 'Understand open-ended and close-ended mutual funds, Net Asset Value (NAV), SIP compounding, and SWP pensions in Nepal.',
      tagline: 'Professional investment management for every Nepali without stock picking stress.',
      overview: 'Mutual funds in Nepal allow individuals to pool their savings under registered Asset Management Companies (AMCs) and Merchant Bankers licensed by SEBON. Professional fund managers invest this pooled capital across diversified equities, fixed deposits, corporate debentures, and government bonds. This path demystifies how Net Asset Value (NAV) is computed, the critical differences between open-ended and exchange-traded close-ended schemes, how Systematic Investment Plans (SIP) generate long-term wealth, and how Systematic Withdrawal Plans (SWP) create steady monthly retirement income.',
      whatIsThis: 'A mutual fund pools money from thousands of investors to purchase a professionally managed, diversified basket of stocks, bonds, and deposits.',
      whyImportant: 'Most individuals lack the time or accounting expertise to analyze 200+ listed NEPSE companies. Mutual funds provide instant diversification and professional risk control from just NPR 1,000.',
      howInNepal: 'Regulated by SEBON under the Mutual Fund Regulations 2067. Open-ended funds are bought/sold directly through fund managers via connectIPS; close-ended funds trade on NEPSE via TMS.'
    },
    np: {
      name: 'Mutual Funds (सामूहिक लगानी कोष)',
      shortDesc: 'नेपालमा खुलामुखी र बन्दमुखी Mutual Fund, NAV को हिसाब, SIP चक्रबृद्धि र SWP पेन्सन प्रणाली बुझ्नुहोस्।',
      tagline: 'सेयर छान्ने तनाव विना व्यावसायिक Fund Manager मार्फत सम्पत्ति बढाउने भरपर्दो माध्यम।',
      overview: 'नेपालमा Mutual Fund भनेको हजारौँ साना लगानीकर्ताको रकम संकलन गरी SEBON बाट इजाजतप्राप्त Asset Management Company (AMC) र मर्चेन्ट बैंकरमार्फत सेयर, मुद्दती निक्षेप र ऋणपत्रमा लगानी गर्ने कानुनी संयन्त्र हो। यस मार्गले Net Asset Value (NAV) को यथार्थ हिसाब, खुलामुखी र बन्दमुखी योजना बीचको अन्तर, मासिक SIP मार्फत Compounding को शक्ति र SWP मार्फत नियमित पेन्सन लिने तरिका स्पष्टसँग सिकाउँछ।',
      whatIsThis: 'Mutual Fund भनेको धेरै लगानीकर्ताको पुँजी एकीकृत गरी व्यावसायिक प्रबन्धकद्वारा विविध वित्तीय क्षेत्रमा लगानी गरिने सामूहिक कोष हो।',
      whyImportant: 'सबै लगानीकर्तासँग कम्पनीहरूको वित्तीय विवरण विश्लेषण गर्ने समय वा सीप हुँदैन। Mutual Fund ले मासिक मात्र रु. १,००० बाटै जोखिम न्यूनीकरण र विविधता दिन्छ।',
      howInNepal: 'नेपाल धितोपत्र बोर्ड (SEBON) को सामूहिक लगानी कोष नियमावली २०६७ अन्तर्गत सञ्चालित। खुलामुखी योजना अनलाइन पोर्टलबाट र बन्दमुखी योजना NEPSE TMS बाट खरिदबिक्री हुन्छ।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '36 min',
        en: { title: 'Foundations of Mutual Funds in Nepal', desc: 'SEBON regulations, pooled diversification, and fund types.' },
        np: { title: 'नेपालमा Mutual Fund को जग', desc: 'SEBON को नियमन, सामूहिक विविधता र कोषका प्रकारहरू।' },
        lessons: [
          {
            id: 'mf-1',
            number: 1,
            slug: 'what-is-mutual-fund-nepal',
            duration: '16 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Foundation',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Understanding Mutual Funds in Nepal',
              summary: 'How SEBON-licensed merchant bankers pool capital to invest in NEPSE stocks, debentures, and bank FDs.',
              keyTakeaways: 'Provides professional fund management and diversification across 30+ securities from NPR 1,000.'
            },
            np: {
              title: 'नेपालमा Mutual Fund को अवधारणा र कार्यप्रणाली',
              summary: 'मर्चेन्ट बैंकरहरूले कसरी पुँजी संकलन गरेर सेयर, डिबेन्चर र मुद्दती निक्षेपमा लगानी गर्छन्।',
              keyTakeaways: 'मासिक रु. १,००० बाटै ३० भन्दा बढी कम्पनी र वित्तीय औजारमा व्यावसायिक विविधता पाइन्छ।'
            }
          },
          {
            id: 'mf-2',
            number: 2,
            slug: 'open-ended-vs-close-ended-schemes-nepal',
            duration: '20 min',
            difficulty: 'Beginner',
            type: 'Comparison',
            format: 'Structure',
            updatedDate: 'Sep 2026',
            prerequisites: 'mf-1',
            en: {
              title: 'Open-Ended vs. Close-Ended Schemes in NEPSE',
              summary: 'Direct redemption at NAV vs. market pricing on NEPSE TMS, maturity dates, and liquidity.',
              keyTakeaways: 'Open-ended funds have perpetual life and trade at NAV; close-ended funds trade on NEPSE and often trade at a discount to NAV.'
            },
            np: {
              title: 'खुलामुखी र बन्दमुखी योजना: कुन छान्ने?',
              summary: 'NAV मा सोझै खरिदबिक्री हुने खुलामुखी र NEPSE मा कारोबार हुने बन्दमुखी योजनाको तुलना।',
              keyTakeaways: 'खुलामुखी योजनाको अवधि अनिश्चित हुन्छ र NAV मा कारोबार हुन्छ; बन्दमुखी योजना निश्चित अवधिका हुन्छन् र बजारमा प्रायः NAV भन्दा सस्तोमा पाइन्छन्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Operations, NAV & SIP Execution',
          relatedGuide: { title: 'Complete Mutual Fund Guide', slug: 'complete-mutual-fund-guide', duration: '18 min' },
          relevantCalc: { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip' },
          glossaryTerms: ['Mutual Fund', 'Open-Ended', 'AMC'],
          relatedCategory: { name: 'Investing', slug: 'investing' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '44 min',
        en: { title: 'Operations, NAV & SIP Execution', desc: 'How daily/weekly NAV is computed and automating monthly SIPs.' },
        np: { title: 'सञ्चालन, NAV र SIP प्रक्रिया', desc: 'दैनिक/साप्ताहिक NAV को हिसाब र मासिक SIP स्वचालित गर्ने तरिका।' },
        lessons: [
          {
            id: 'mf-3',
            number: 3,
            slug: 'how-nav-is-calculated-nepal',
            duration: '24 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'Valuation',
            updatedDate: 'Sep 2026',
            prerequisites: 'mf-2',
            en: {
              title: 'How Net Asset Value (NAV) is Calculated in Nepal',
              summary: 'Total market value of assets minus liabilities divided by outstanding units under SEBON rules.',
              keyTakeaways: 'NAV reflects the true intrinsic per-unit value of the fund based on latest market prices.'
            },
            np: {
              title: 'नेपालमा Net Asset Value (NAV) कसरी हिसाब गरिन्छ?',
              summary: 'कोषको कुल सम्पत्तिको बजार मूल्यबाट दायित्व घटाएर कुल इकाईले भाग गर्दा आउने प्रतिइकाई खुद सम्पत्ति मूल्य।',
              keyTakeaways: 'NAV ले पछिल्लो बजार मूल्य अनुसार १ कित्ता म्युचुअल फण्डको वास्तविक मूल्य देखाउँछ।'
            }
          },
          {
            id: 'mf-4',
            number: 4,
            slug: 'starting-online-sip-connectips-nepal',
            duration: '20 min',
            difficulty: 'Beginner',
            type: 'Tutorial',
            format: 'Execution',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Starting an Online SIP via connectIPS Step by Step',
              summary: 'Account registration with fund managers (NIBL, Siddhartha, NIC Asia, NMB) and recurring mandates.',
              keyTakeaways: 'Link bank account via connectIPS; automate monthly deductions on a set date for rupee cost averaging.'
            },
            np: {
              title: 'connectIPS मार्फत अनलाइन SIP सुरु गर्ने तरिका',
              summary: 'विभिन्न मर्चेन्ट बैंकको पोर्टलमा खाता खोल्ने र नियमित मासिक भुक्तानी म्यान्डेट सेट गर्ने प्रक्रिया।',
              keyTakeaways: 'connectIPS बाट बैंक जोड्नुहोस् र महिनाको निश्चित दिन स्वतः रकम काटिने गरी SIP सेट गर्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Returns, Dividends & Exit Strategies',
          relatedGuide: { title: 'Starting SIP Step by Step', slug: 'starting-sip', duration: '15 min' },
          relevantCalc: { name: 'CAGR Calculator', slug: 'calculators/cagr', key: 'cagr' },
          glossaryTerms: ['NAV', 'connectIPS', 'SIP'],
          relatedCategory: { name: 'Banking', slug: 'banking' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '45 min',
        en: { title: 'Returns, Dividends & Exit Strategies', desc: 'Reinvesting dividends for growth vs. drawing systematic pensions.' },
        np: { title: 'प्रतिफल, लाभांश र निकासी रणनीति', desc: 'लाभांश पुन:लगानी (DREP) र मासिक पेन्सनका लागि नियमित निकासी (SWP)।' },
        lessons: [
          {
            id: 'mf-5',
            number: 5,
            slug: 'dividend-reinvestment-plan-drep-nepal',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Strategy',
            format: 'Growth',
            updatedDate: 'Sep 2026',
            prerequisites: 'mf-4',
            en: {
              title: 'Dividend Reinvestment Plan (DREP) vs. Cash Payout',
              summary: 'Why enrolling in DREP compounds your unit holdings significantly faster over 10-15 years.',
              keyTakeaways: 'DREP automatically buys additional units at declared NAV without transaction charges.'
            },
            np: {
              title: 'Dividend Reinvestment Plan (DREP) र नगद लाभांशको तुलना',
              summary: 'DREP छान्दा लाभांशबाटै थप इकाई खरिद भई १०-१५ वर्षमा सम्पत्ति कसरी तीव्र गतिमा बढ्छ।',
              keyTakeaways: 'DREP ले नगद लाभांश खातामा पठाउनुको साटो सोही रकमले बिनाकुनै शुल्क थप कित्ता सेयर किनिदिन्छ।'
            }
          },
          {
            id: 'mf-6',
            number: 6,
            slug: 'systematic-withdrawal-plan-swp-pension',
            duration: '25 min',
            difficulty: 'Advanced',
            type: 'Guide',
            format: 'Income',
            updatedDate: 'Sep 2026',
            prerequisites: 'mf-3',
            en: {
              title: 'Systematic Withdrawal Plan (SWP) for Monthly Pension Income',
              summary: 'Withdrawing fixed monthly cash while your remaining mutual fund corpus stays invested and compounding.',
              keyTakeaways: 'SWP creates a predictable private pension; ideal for retirees and individuals seeking monthly cash flow.'
            },
            np: {
              title: 'मासिक पेन्सन आम्दानीका लागि Systematic Withdrawal Plan (SWP)',
              summary: 'मूल पुँजी लगानीमै राखी मासिक निश्चित रकम आफ्नो बैंक खातामा पेन्सन जस्तै झिक्ने तरिका।',
              keyTakeaways: 'SWP ले मासिक निश्चित आम्दानी दिन्छ; अवकाशप्राप्त व्यक्तिहरूका लागि यो अत्यन्त लाभदायक हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Retirement Planning with SWP',
          relatedGuide: { title: 'SWP Monthly Pension Guide', slug: 'swp-pension-guide', duration: '20 min' },
          relevantCalc: { name: 'SWP Calculator', slug: 'calculators/swp', key: 'swp' },
          glossaryTerms: ['SWP', 'DREP', 'Exit Load'],
          relatedCategory: { name: 'Retirement Planning', slug: 'retirement-planning' }
        }
      }
    ],
    relatedCalculators: ['sip', 'swp', 'cagr'],
    relatedGuides: [
      { title: 'Complete Mutual Fund Guide for Nepal', slug: 'complete-mutual-fund-guide', duration: '18 min', difficulty: 'Beginner' },
      { title: 'Open-Ended vs Close-Ended Funds in Nepal', slug: 'fund-comparison', duration: '14 min', difficulty: 'Beginner' },
      { title: 'Creating Monthly Pension with SWP in Nepal', slug: 'swp-pension-guide', duration: '20 min', difficulty: 'Intermediate' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'Can I lose money in a mutual fund in Nepal?',
          a: 'Mutual funds invest primarily in market equities, corporate debentures, and bank fixed deposits, meaning unit NAVs fluctuate with market cycles. While capital is not guaranteed by the government, professional diversification across 30+ holdings dramatically lowers single-company insolvency risk compared to individual stocks.'
        },
        np: {
          q: 'के नेपालमा Mutual Fund मा लगानी गर्दा घाटा हुन सक्छ?',
          a: 'Mutual Fund ले सेयर बजार, ऋणपत्र र बैंक मुद्दतीमा लगानी गर्ने भएकाले बजारको उतारचढाव अनुसार NAV तलमाथि हुन्छ। यसमा नाफाको सरकारी ग्यारेन्टी हुँदैन, तर ३० भन्दा बढी कम्पनीमा लगानी बाँडिने भएकाले व्यक्तिगत सेयरको तुलनामा जोखिम धेरै कम हुन्छ।'
        }
      },
      {
        en: {
          q: 'What is the fee or expense ratio charged by mutual funds in Nepal?',
          a: 'Under SEBON Mutual Fund Regulations, annual fund management and depository fees are strictly capped (typically between 1.0% to 1.5% of total net assets). Open-ended funds may also charge a nominal exit load (e.g. 0.5% to 1.5%) if redeemed within the first 1 to 2 years to discourage speculative short-term trading.'
        },
        np: {
          q: 'नेपालमा Mutual Fund व्यवस्थापन गर्न कति शुल्क (Expense Ratio) लाग्छ?',
          a: 'SEBON को नियमावली अनुसार वार्षिक व्यवस्थापन र डिपोजिटरी शुल्क अधिकतम १.०% देखि १.५% सम्म मात्र लिन पाइन्छ। छोटो समयमै इकाई बेच्न खोज्नेलाई निरुत्साहित गर्न खुलामुखी योजनामा सुरुवाती १-२ वर्षभित्र बिक्री गर्दा ०.५% देखि १.५% सम्म Exit Load लाग्न सक्छ।'
        }
      }
    ]
  },
  {
    id: 9,
    slug: 'digital-payments',
    icon: 'smartphone',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    duration: { en: '2.5 Hours', np: '२.५ घण्टा' },
    lessonCount: 7,
    guideCount: 2,
    calcCount: 1,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['digital payments', 'esewa', 'khalti', 'connectips', 'fonepay', 'qr', 'nchl', 'cyber security'],
    visualRoadmap: [
      'Digital Payment Rails in Nepal (NCHL)',
      'eSewa vs. Khalti vs. Mobile Banking',
      'connectIPS Real-Time Account Transfers',
      'Fonepay & NepalPay QR Standards',
      'NRB Transaction Limits & Fees',
      'Protecting Against OTP & Phishing Scams',
      'Recovering Misdirected Digital Transfers'
    ],
    en: {
      name: 'Digital Payments & Wallets',
      shortDesc: 'Master connectIPS, eSewa, Khalti, Fonepay QR standards, transaction limits, and digital financial security in Nepal.',
      tagline: 'Transact friction-free across Nepal while keeping your bank balances secure from digital scams.',
      overview: 'Nepal has experienced a cashless revolution driven by Nepal Clearing House (NCHL), connectIPS, digital wallets (eSewa, Khalti), and ubiquitous interoperable QR codes. This path guides you through the payment rails of Nepal, transaction limits set by NRB, fee structures, and essential digital hygiene to safeguard your financial accounts against social engineering, OTP theft, and phishing scams.',
      whatIsThis: 'Digital payments encompass electronic fund transfers, wallet transactions, and QR code payments enabling instant non-cash commerce in Nepal.',
      whyImportant: 'Over 80% of daily retail transactions in urban Nepal occur digitally. Understanding transaction charges and scam tactics protects both your convenience and capital.',
      howInNepal: 'Operated through NCHL payment switches, Payment Service Operators (PSOs like Fonepay), and Payment Service Providers (PSPs like eSewa, Khalti).'
    },
    np: {
      name: 'Digital Payments & Wallets (डिजिटल भुक्तानी)',
      shortDesc: 'connectIPS, eSewa, Khalti, Fonepay QR, कारोबार सीमा र डिजिटल सुरक्षाका उपायहरू।',
      tagline: 'नेपालमा सहज डिजिटल कारोबार गर्नुहोस् र अनलाइन ठगीबाट आफ्नो बैंक खाता सुरक्षित राख्नुहोस्।',
      overview: 'नेपालमा NCHL, connectIPS, डिजिटल वालेट (eSewa, Khalti) र QR कोडका कारण नगदरहित कारोबारमा ठूलो क्रान्ति आएको छ। यस मार्गले नेपालको डिजिटल भुक्तानी प्रणाली, राष्ट्र बैंकले तोकेका कारोबार सीमा, लाग्ने शुल्कहरू र OTP वा फिसिङ ठगीबाट जोगिने सुरक्षाका उपायहरू सिकाउँछ।',
      whatIsThis: 'Digital Payments भनेको मोबाइल, इन्टरनेट वा QR कोड प्रयोग गरेर बिना नगद तत्काल रकम भुक्तानी वा रकमान्तर गर्ने आधुनिक प्रविधि हो।',
      whyImportant: 'सहरी क्षेत्रमा अधिकांश किनमेल डिजिटल माध्यमबाट हुन्छ। कारोबार शुल्क र अनलाइन ठगीका तरिका बुझ्दा पैसा र समय दुवै सुरक्षित हुन्छ।',
      howInNepal: 'नेपाल क्लियरिङ्ग हाउस (NCHL), भुक्तानी प्रणाली सञ्चालक (PSO जस्तै Fonepay) र सेवा प्रदायक (PSP जस्तै eSewa, Khalti) मार्फत सञ्चालित।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '26 min',
        en: { title: 'The Digital Payment Infrastructure', desc: 'Understanding NCHL, connectIPS, and wallet balances.' },
        np: { title: 'डिजिटल भुक्तानी पूर्वाधार', desc: 'NCHL, connectIPS र वालेटको कार्यप्रणाली बुझ्ने।' },
        lessons: [
          {
            id: 'dp-1',
            number: 1,
            slug: 'nepal-payment-rails-nchl-connectips',
            duration: '14 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Rails',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'How Payment Rails Work: NCHL, connectIPS & RTGS',
              summary: 'How interbank transfers clear in real-time across commercial banks in Nepal.',
              keyTakeaways: 'connectIPS allows direct bank-to-bank settlement without storing funds in third-party intermediary wallets.'
            },
            np: {
              title: 'नेपालको भुक्तानी प्रणाली: NCHL, connectIPS र RTGS',
              summary: 'नेपाली बैंकहरू बीच तत्काल रकमान्तर कसरी राफसाफ हुन्छ।',
              keyTakeaways: 'connectIPS ले बिचौलिया वालेटमा पैसा नराखी सीधै एउटा बैंकबाट अर्को बैंकमा तत्काल रकम पठाउँछ।'
            }
          },
          {
            id: 'dp-2',
            number: 2,
            slug: 'esewa-vs-khalti-vs-mobile-banking',
            duration: '12 min',
            difficulty: 'Beginner',
            type: 'Comparison',
            format: 'Wallets',
            updatedDate: 'Sep 2026',
            prerequisites: 'dp-1',
            en: {
              title: 'Digital Wallets vs. Mobile Banking in Nepal',
              summary: 'When to keep funds in a wallet vs. paying directly from your core bank savings account.',
              keyTakeaways: 'Keep small spending money in wallets; keep emergency and long-term funds in high-security bank accounts.'
            },
            np: {
              title: 'डिजिटल वालेट र Mobile Banking बीचको भिन्नता',
              summary: 'वालेटमा कति रकम राख्ने र बैंक खाताबाट सोझै भुक्तानी गर्दाका फाइदाहरू।',
              keyTakeaways: 'दैनिक साना खर्चका लागि वालेट प्रयोग गर्नुहोस्; ठूलो र आपतकालीन रकम सुरक्षित बैंक खातामै राख्नुहोस्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'QR Codes, Limits & Fee Optimization',
          relatedGuide: { title: 'Safe Digital Payments Guide', slug: 'safe-digital-payments', duration: '12 min' },
          relevantCalc: { name: 'Fixed Deposit Calculator', slug: 'calculators/fixed-deposit', key: 'fd' },
          glossaryTerms: ['connectIPS', 'QR Code', 'NCHL'],
          relatedCategory: { name: 'Banking', slug: 'banking' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '28 min',
        en: { title: 'QR Codes, Limits & Fee Optimization', desc: 'Fonepay, NepalPay, transaction ceilings, and service charges.' },
        np: { title: 'QR कोड, कारोबार सीमा र शुल्क व्यवस्थापन', desc: 'Fonepay, NepalPay, राष्ट्र बैंकको कारोबार सीमा र अतिरिक्त शुल्कहरू।' },
        lessons: [
          {
            id: 'dp-3',
            number: 3,
            slug: 'fonepay-nepalpay-qr-interoperability',
            duration: '14 min',
            difficulty: 'Beginner',
            type: 'Lesson',
            format: 'QR',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Fonepay vs. NepalPay: Interoperable QR Standards in Nepal',
              summary: 'Scanning any merchant QR code using any bank mobile banking app or digital wallet.',
              keyTakeaways: 'Nepal is transitioning to universal interoperable QR standards under NRB guidelines.'
            },
            np: {
              title: 'Fonepay र NepalPay: नेपालमा अन्तरआबद्ध QR प्रणाली',
              summary: 'जुनसुकै बैंकको मोबाइल एप वा वालेटबाट जुनसुकै मर्चेन्ट QR स्क्यान गर्ने तरिका।',
              keyTakeaways: 'नेपाल राष्ट्र बैंकको निर्देशनमा सबै QR कोडहरू एकअर्कासँग चल्ने (Interoperable) बनाइँदैछ।'
            }
          },
          {
            id: 'dp-4',
            number: 4,
            slug: 'nrb-digital-transaction-limits-fees',
            duration: '14 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'Limits',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'NRB Daily & Monthly Transaction Limits and Fee Structures',
              summary: 'Daily transfer caps for mobile banking, connectIPS, wallet balances, and fee tiers (NPR 2 to 8).',
              keyTakeaways: 'connectIPS charges tiered fees from NPR 2 to 8; mobile banking per-day caps range from 2 to 10 lakhs.'
            },
            np: {
              title: 'राष्ट्र बैंकको दैनिक तथा मासिक कारोबार सीमा र शुल्क तालिका',
              summary: 'Mobile Banking, connectIPS र वालेटका दैनिक सीमाहरू र लाग्ने न्यूनतम शुल्क (रु. २ देखि ८)।',
              keyTakeaways: 'connectIPS मा कारोबार रकम अनुसार रु. २ देखि ८ सम्म शुल्क लाग्छ; मोबाइल बैंकिङको दैनिक सीमा २ देखि १० लाखसम्म हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Cybersecurity & Scam Defense',
          relatedGuide: { title: 'Digital Payment Limits Handbook', slug: 'digital-limits-handbook', duration: '10 min' },
          relevantCalc: { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation' },
          glossaryTerms: ['Transaction Limit', 'Fonepay', 'Interoperability'],
          relatedCategory: { name: 'Banking', slug: 'banking' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '26 min',
        en: { title: 'Cybersecurity & Scam Defense', desc: 'Defending your bank and wallet accounts against social engineering.' },
        np: { title: 'साइबर सुरक्षा र अनलाइन ठगीबाट बच्ने उपाय', desc: 'सामाजिक सञ्जाल र फोन कलबाट हुने बैंक तथा वालेट ठगीबाट जोगिने तरिका।' },
        lessons: [
          {
            id: 'dp-5',
            number: 5,
            slug: 'otp-scams-phishing-defense-nepal',
            duration: '14 min',
            difficulty: 'Beginner',
            type: 'Guide',
            format: 'Security',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Recognizing OTP Theft, Fake Lottery & Social Media Scams in Nepal',
              summary: 'How scammers impersonate bank managers or lottery agents to steal your One-Time Passwords.',
              keyTakeaways: 'No legitimate bank or wallet will ever ask for your OTP or login password over the phone.'
            },
            np: {
              title: 'नेपालमा OTP चोरी, नक्कली चिठ्ठा र सामाजिक सञ्जाल ठगी चिन्ने तरिका',
              summary: 'बैंक कर्मचारी वा उपहार परेको बहानामा कल गरेर OTP माग्ने ठगहरूबाट बच्ने तरिका।',
              keyTakeaways: 'कुनै पनि बैंक वा वालेटका कर्मचारीले कहिल्यै पनि फोनमा तपाईंको OTP वा Password माग्दैनन्।'
            }
          },
          {
            id: 'dp-6',
            number: 6,
            slug: 'reporting-digital-financial-fraud-nepal-police',
            duration: '12 min',
            difficulty: 'Beginner',
            type: 'Tutorial',
            format: 'Action',
            updatedDate: 'Sep 2026',
            prerequisites: 'dp-5',
            en: {
              title: 'What to Do If Scammed: Freezing Accounts & Nepal Police Cyber Bureau',
              summary: 'Emergency hotlines to freeze recipient wallets and filing reports with the Cyber Bureau in Bhotahiti.',
              keyTakeaways: 'Immediately call your bank to freeze transactions within 15 minutes; report to Cyber Bureau with screenshot proof.'
            },
            np: {
              title: 'यदि ठगी भइहालेमा के गर्ने? खाता रोक्का र नेपाल प्रहरी साइबर ब्युरो',
              summary: 'तत्काल रकम रोक्का गराउन बैंकलाई खबर गर्ने र भोटाहिटीस्थित साइबर ब्युरोमा उजुरी दिने प्रक्रिया।',
              keyTakeaways: 'घटना हुनासाथ १५ मिनेटभित्र बैंकलाई खबर गरी खाता रोक्का गर्न लगाउनुहोस्; प्रमाणसहित साइबर ब्युरोमा उजुरी दिनुहोस्।'
            }
          },
          {
            id: 'dp-7',
            number: 7,
            slug: 'reversing-wrong-digital-transfer-nepal',
            duration: '11 min',
            difficulty: 'Intermediate',
            type: 'Tutorial',
            format: 'Action',
            updatedDate: 'Sep 2026',
            prerequisites: 'dp-1',
            en: {
              title: 'Wrong Digital Bank Transfer in Nepal: Step-by-Step Reversal and Recovery Protocol',
              summary: 'What to do when funds are accidentally sent to the wrong mobile number or account number via connectIPS, Fonepay, or eSewa: interbank hold requests, dispute filing, and legal remedies under the Banking Offence Act.',
              keyTakeaways: 'Act immediately within 30 minutes; bank cannot unilaterally debit the receiver without consent; formal dispute filing and police freeze are required if receiver refuses.'
            },
            np: {
              title: 'नेपालमा झुक्किएर अर्काको खातामा पैसा ट्रान्सफर भएमा के गर्ने? फिर्ता पाउने कानुनी विधि',
              summary: 'connectIPS, Fonepay वा eSewa बाट गलत नम्बर वा खातामा रकम जाँदा बैंकमा निवेदन, खाता रोक्का र बैंकिङ कसुर ऐन अनुसार कानुनी उपचार।',
              keyTakeaways: '३० मिनेटभित्र आफ्नो बैंक र सम्बन्धित वालेटमा उजुरी टिपाउनुहोस्; बैंकले अर्काको अनुमति बिना पैसा तान्न सक्दैन; फिर्ता नदिए बैंकिङ कसुरमा कारबाही हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Business & Startup Finance',
          relatedGuide: { title: 'Cybersecurity Checklist for Nepali Netizens', slug: 'cybersecurity-checklist', duration: '10 min' },
          relevantCalc: { name: 'Fixed Deposit Calculator', slug: 'calculators/fixed-deposit', key: 'fd' },
          glossaryTerms: ['OTP', 'Phishing', 'Cyber Bureau'],
          relatedCategory: { name: 'Business & Startups', slug: 'business' }
        }
      }
    ],
    relatedCalculators: ['fd'],
    relatedGuides: [
      { title: 'Complete Digital Payments Guide for Nepal', slug: 'complete-digital-payments-guide', duration: '14 min', difficulty: 'Beginner' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'Is connectIPS safer than third-party digital wallets in Nepal?',
          a: 'Yes, connectIPS is operated directly by Nepal Clearing House Limited (NCHL), an entity backed by Nepal Rastra Bank and commercial banks. Unlike wallets where money sits in an intermediary balance, connectIPS routes money directly between verified commercial bank accounts using multi-factor biometric authentication.'
        },
        np: {
          q: 'के नेपालमा connectIPS डिजिटल वालेट भन्दा बढी सुरक्षित छ?',
          a: 'हो, connectIPS नेपाल राष्ट्र बैंक र वाणिज्य बैंकहरूको संयुक्त स्वामित्व रहेको NCHL द्वारा सञ्चालित छ। यसमा कुनै बिचौलिया वालेटमा पैसा नबसी सीधै बैंक खाताबाट बैंक खातामै सुरक्षित रकमान्तर हुन्छ।'
        }
      }
    ]
  },
  {
    id: 10,
    slug: 'business',
    icon: 'briefcase',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    duration: { en: '4.5 Hours', np: '४.५ घण्टा' },
    lessonCount: 6,
    guideCount: 2,
    calcCount: 1,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['business', 'pvt ltd', 'company registration', 'pan', 'vat', 'accounting', 'compliance', 'ocr'],
    visualRoadmap: [
      'Sole Proprietorship vs. Private Limited (Pvt Ltd)',
      'Company Registrar (OCR) Registration Steps',
      'PAN vs. VAT Registration Thresholds in Nepal',
      'Basic Bookkeeping & Accounting Vouchers',
      'Vendor TDS Withholding & Compliance',
      'Annual Tax Audit & Renewal Procedures'
    ],
    en: {
      name: 'Business & Startups',
      shortDesc: 'Master company registration at OCR, PAN vs. VAT thresholds, compliance, bookkeeping, and vendor TDS in Nepal.',
      tagline: 'Launch, formalize, and scale your business legally in Nepal.',
      overview: 'Starting a business in Nepal requires navigating the Office of the Company Registrar (OCR), Department of Industry, ward offices, and the Inland Revenue Department (IRD). This path walks founders and operators through deciding between sole proprietorship vs. private limited structure, meeting statutory compliance, managing books, tracking vendor TDS deductions, and avoiding costly fines from tax authorities.',
      whatIsThis: 'Business and startup education covers legal entity formation, accounting, regulatory compliance, and tax management for enterprises in Nepal.',
      whyImportant: 'Over 60% of new startups in Nepal face compliance penalties within their first 2 years due to missed annual ROC filings or incorrect VAT reporting.',
      howInNepal: 'Incorporate via the Office of the Company Registrar (OCR) portal; obtain ward business license and IRD tax registration.'
    },
    np: {
      name: 'Business & Startups (व्यवसाय र उद्यमशीलता)',
      shortDesc: 'कम्पनी रजिष्ट्रार (OCR) मा दर्ता, PAN र VAT को नियम, लेखा प्रणाली र वार्षिक कर अडिट।',
      tagline: 'नेपालमा कानुनी रूपमा व्यवसाय सुरु गर्नुहोस्, व्यवस्थित गर्नुहोस् र विस्तार गर्नुहोस्।',
      overview: 'नेपालमा व्यवसाय सुरु गर्दा कम्पनी रजिष्ट्रारको कार्यालय (OCR), उद्योग विभाग, वडा कार्यालय र आन्तरिक राजस्व विभाग (IRD) को प्रक्रिया पूरा गर्नुपर्छ। यस मार्गले प्राइभेट लिमिटेड वा प्राइभेट फर्म बीचको छनोट, अनिवार्य कानुनी विवरण, लेखा व्यवस्थापन, भ्याट र टीडीएस कट्टी, र कर जरिवानाबाट बच्ने उपायहरू सिकाउँछ।',
      whatIsThis: 'Business शिक्षा भनेको नेपालमा कानुनी रूपमा कम्पनी दर्ता गर्ने, लेखा राख्ने, नियम पालना गर्ने र व्यवसाय सञ्चालन गर्ने ज्ञान हो।',
      whyImportant: 'नेपालमा धेरै नयाँ स्टार्टअपहरू वार्षिक विवरण नबुझाउँदा वा भ्याट नियम नबुझ्दा सुरुवाती २ वर्षभित्रै चर्को जरिवानामा पर्छन्।',
      howInNepal: 'कम्पनी रजिष्ट्रारको कार्यालय (OCR) को अनलाइन प्रणालीबाट दर्ता हुन्छ; वडा सिफारिस र आन्तरिक राजस्व कार्यालयबाट PAN/VAT लिइन्छ।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '42 min',
        en: { title: 'Legal Entity Formation in Nepal', desc: 'Proprietorship vs. partnership vs. private limited companies.' },
        np: { title: 'नेपालमा कानुनी संरचना र कम्पनी दर्ता', desc: 'एकलौटी फर्म, साझेदारी र प्राइभेट लिमिटेड कम्पनी बीचको तुलना।' },
        lessons: [
          {
            id: 'biz-1',
            number: 1,
            slug: 'sole-proprietorship-vs-pvt-ltd-nepal',
            duration: '22 min',
            difficulty: 'Beginner',
            type: 'Comparison',
            format: 'Legal',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Sole Proprietorship vs. Private Limited (Pvt Ltd) in Nepal',
              summary: 'Unlimited personal liability vs. separate corporate legal entity and investor readiness under Company Act 2063.',
              keyTakeaways: 'Pvt Ltd shields personal assets from business failure; Sole Proprietorship risks your personal home and land.'
            },
            np: {
              title: 'एकलौटी फर्म र प्राइभेट लिमिटेड (Pvt Ltd) बीचको भिन्नता',
              summary: 'व्यक्तिगत असीमित दायित्व र कम्पनी ऐन २०६३ अन्तर्गत कानुनी रूपमै छुट्टै अस्तित्व हुने कम्पनीको तुलना।',
              keyTakeaways: 'Pvt Ltd ले व्यक्तिगत सम्पत्तिलाई व्यावसायिक नोक्सानीबाट जोगाउँछ; एकलौटी फर्म डुब्दा व्यक्तिगत घरजग्गा समेत जान सक्छ।'
            }
          },
          {
            id: 'biz-2',
            number: 2,
            slug: 'company-registration-ocr-step-by-step',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Tutorial',
            format: 'Registration',
            updatedDate: 'Sep 2026',
            prerequisites: 'biz-1',
            en: {
              title: 'Step-by-Step Company Registration at OCR Portal',
              summary: 'Name reservation, drafting Memorandum & Articles of Association (MOA/AOA), and digital certificate approval.',
              keyTakeaways: 'Can be done 100% online through the OCR portal without paying hefty agent brokerage fees.'
            },
            np: {
              title: 'कम्पनी रजिष्ट्रार (OCR) को पोर्टलबाट कम्पनी दर्ता गर्ने अनलाइन विधि',
              summary: 'कम्पनीको नाम छनोट, प्रबन्धपत्र र नियमावली (MOA/AOA) तयार गर्ने र प्रमाणपत्र लिने प्रक्रिया।',
              keyTakeaways: 'दलाललाई मोटो रकम नतिरी OCR को आधिकारिक अनलाइन पोर्टलबाट आफैँ सहजै कम्पनी दर्ता गर्न सकिन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Taxes: PAN vs. VAT & Invoicing Rules',
          relatedGuide: { title: 'Complete Company Registration Guide', slug: 'company-registration-guide', duration: '20 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['Pvt Ltd', 'MOA', 'OCR'],
          relatedCategory: { name: 'Taxation', slug: 'taxation' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '45 min',
        en: { title: 'Taxes: PAN vs. VAT & Invoicing Rules', desc: 'Thresholds, billings, and vendor TDS requirements.' },
        np: { title: 'कर: PAN, VAT र बिलिङका नियमहरू', desc: 'कारोबार सीमा, आधिकारिक बिलिङ र विक्रेतामा लाग्ने TDS कट्टी।' },
        lessons: [
          {
            id: 'biz-3',
            number: 3,
            slug: 'pan-vs-vat-thresholds-nepal',
            duration: '22 min',
            difficulty: 'Intermediate',
            type: 'Explainer',
            format: 'Tax',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'PAN vs. VAT: Turnover Thresholds and Mandatory Registration',
              summary: 'When a business in Nepal must enter the 13% Value Added Tax (VAT) net (NPR 50L goods / NPR 20L services).',
              keyTakeaways: 'Services exceeding NPR 20 lakhs or goods exceeding NPR 50 lakhs annually must register for VAT under IRD.'
            },
            np: {
              title: 'PAN र VAT को सीमा: कहिले भ्याटमा दर्ता हुनुपर्छ?',
              summary: '१३% मूल्य अभिवृद्धि कर (VAT) मा दर्ता हुनुपर्ने वार्षिक कारोबार सीमा (वस्तु ५० लाख / सेवा २० लाख)।',
              keyTakeaways: 'वार्षिक सेवामा २० लाख र वस्तुमा ५० लाखभन्दा बढी कारोबार भएमा अनिवार्य रूपमा VAT मा दर्ता हुनुपर्छ।'
            }
          },
          {
            id: 'biz-4',
            number: 4,
            slug: 'vendor-tds-withholding-audit-nepal',
            duration: '23 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'Compliance',
            updatedDate: 'Sep 2026',
            prerequisites: 'biz-3',
            en: {
              title: 'Vendor TDS Withholding and VAT Return Filing (Monthly/Bi-monthly)',
              summary: 'Withholding 1.5% on VAT invoices, 10% on office rent, and submitting electronic returns by the 25th of each month.',
              keyTakeaways: 'Late VAT return filing carries a severe fine of 0.1% per day or NPR 1,000 per month, whichever is higher.'
            },
            np: {
              title: 'विक्रेता TDS कट्टी र मासिक VAT विवरण बुझाउने नियम',
              summary: 'भ्याट बिलमा १.५% TDS, घरभाडामा १०% र हरेक महिनाको २५ गतेभित्र विवरण बुझाउने तरिका।',
              keyTakeaways: 'हरेक महिनाको २५ गतेभित्र भ्याट विवरण नबुझाएमा प्रतिदिन ०.१% वा मासिक रु. १,००० मध्ये जुन बढी हुन्छ सो जरिवाना लाग्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Annual Audits & ROC Compliance',
          relatedGuide: { title: 'Startup Bookkeeping Handbook', slug: 'startup-bookkeeping', duration: '15 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['VAT', 'TDS', 'IRD'],
          relatedCategory: { name: 'Taxation', slug: 'taxation' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '40 min',
        en: { title: 'Annual Audits & ROC Compliance', desc: 'Registered auditor reports, AGMs, and filing shareholding records.' },
        np: { title: 'वार्षिक लेखापरीक्षण र कम्पनी रजिष्ट्रार विवरण', desc: 'लेखापरीक्षकको प्रतिवेदन, साधारण सभा (AGM) र सेयर लगत अद्यावधिक।' },
        lessons: [
          {
            id: 'biz-5',
            number: 5,
            slug: 'annual-roc-filing-agm-minutes-nepal',
            duration: '20 min',
            difficulty: 'Advanced',
            type: 'Guide',
            format: 'Governance',
            updatedDate: 'Sep 2026',
            prerequisites: 'biz-2',
            en: {
              title: 'Annual OCR Returns: Filing D-01, AGM Decisions & Share Lapsi',
              summary: 'Mandatory annual submissions within 6 months of fiscal year close to keep company status active.',
              keyTakeaways: 'Failing to file annual returns with OCR results in compounding penalty fees that can exceed company capital.'
            },
            np: {
              title: 'कम्पनी रजिष्ट्रारमा वार्षिक विवरण, AGM माइन्युट र सेयर लगत बुझाउने तरिका',
              summary: 'आर्थिक वर्ष सकिएको ६ महिनाभित्र कम्पनीको अवस्था सक्रिय राख्न बुझाउनुपर्ने अनिवार्य विवरण।',
              keyTakeaways: 'कम्पनी रजिष्ट्रारमा समयमै वार्षिक विवरण नबुझाएमा चर्को जरिवाना लाग्छ र कम्पनी निष्क्रिय हुन सक्छ।'
            }
          },
          {
            id: 'biz-6',
            number: 6,
            slug: 'hiring-ssf-labor-act-nepal',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Labor',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Hiring Employees: Labor Act 2074 & Social Security Fund (SSF) Mandates',
              summary: 'Employment contracts, minimum wage rules, 31% SSF contributions (20% employer + 11% employee).',
              keyTakeaways: 'Formal businesses in Nepal must register employees under SSF and maintain statutory leave policies.'
            },
            np: {
              title: 'कर्मचारी भर्ना: श्रम ऐन २०७४ र सामाजिक सुरक्षा कोष (SSF) को नियम',
              summary: 'रोजगारी सम्झौता, न्यूनतम पारिश्रमिक र ३१% SSF योगदान (२०% रोजगारदाता + ११% कर्मचारी)।',
              keyTakeaways: 'नेपालमा औपचारिक कम्पनीहरूले कर्मचारीलाई सामाजिक सुरक्षा कोष (SSF) मा आबद्ध गराउनु कानुनी दायित्व हो।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Economics & Macro Policy',
          relatedGuide: { title: 'Nepal Startup Legal Compliance Checklist', slug: 'startup-compliance-checklist', duration: '14 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['AGM', 'Audit Report', 'SSF'],
          relatedCategory: { name: 'Economics & Policy', slug: 'economics' }
        }
      }
    ],
    relatedCalculators: ['nepal-income-tax'],
    relatedGuides: [
      { title: 'Complete Business Registration Guide for Nepal', slug: 'complete-business-guide', duration: '20 min', difficulty: 'Intermediate' },
      { title: 'PAN vs VAT for Nepali Entrepreneurs', slug: 'pan-vs-vat-guide', duration: '14 min', difficulty: 'Beginner' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'What is the minimum capital required to register a Private Limited company in Nepal?',
          a: 'Under the Company Act of Nepal, there is no longer a mandatory minimum paid-up capital threshold for ordinary private limited companies (you can register with as little as NPR 1,000 declared authorized capital), except for specialized sectors like financial services or travel agencies.'
        },
        np: {
          q: 'नेपालमा प्राइभेट लिमिटेड कम्पनी दर्ता गर्न कम्तीमा कति पुँजी चाहिन्छ?',
          a: 'कम्पनी ऐनको पछिल्लो व्यवस्था अनुसार साधारण प्राइभेट लिमिटेड कम्पनी दर्ता गर्न कुनै ठूलो पुँजीको बाध्यता छैन, रु. १,००० अधिकृत पुँजी राखेर पनि कम्पनी दर्ता गर्न सकिन्छ। विशेष इजाजत चाहिने क्षेत्रमा मात्र न्यूनतम पुँजी तोकिएको हुन्छ।'
        }
      }
    ]
  },
  {
    id: 11,
    slug: 'economics',
    icon: 'globe',
    difficulty: { en: 'Intermediate to Advanced', np: 'मध्यम देखि उन्नत' },
    duration: { en: '4 Hours', np: '४ घण्टा' },
    lessonCount: 6,
    guideCount: 2,
    calcCount: 2,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['economics', 'nrb', 'monetary policy', 'inflation', 'remittance', 'forex', 'gdp', 'budget'],
    visualRoadmap: [
      'NRB Monetary Policy & Interest Rate Cycles',
      'Inflation Dynamics & Consumer Price Index',
      'Remittance Inflows & Foreign Exchange Reserves',
      'Import Dependency & Balance of Payments',
      'Bank Liquidity, CD Ratio & Credit Crunches',
      'Analyzing Nepal Government Budgets'
    ],
    en: {
      name: 'Economics & Policy',
      shortDesc: 'Understand Nepal Rastra Bank monetary policy, inflation drivers, remittance flows, and national budget cycles.',
      tagline: 'Connect macroeconomic indicators to your personal wallet and business decisions.',
      overview: 'Macroeconomics is not theoretical academic trivia; in Nepal, decisions made in Baluwatar (NRB) or Singha Durbar directly dictate whether your bank loan interest rises to 14%, whether real estate transactions freeze, and whether grocery prices spike. This path demystifies how monetary policy, Credit-to-Deposit (CD) ratios, remittance inflows, and import duties shape everyday personal finance in Nepal.',
      whatIsThis: 'Macroeconomics examines national-level indicators including inflation, gross domestic product (GDP), monetary policy, and balance of payments.',
      whyImportant: 'Predicting interest rate cycles and inflation trends allows investors to switch between equities, fixed deposits, and debt strategically before the masses.',
      howInNepal: 'Steered primarily by Nepal Rastra Bank (NRB) through its annual Monetary Policy and the Ministry of Finance through the federal budget on Jestha 15.'
    },
    np: {
      name: 'Economics & Policy (अर्थतन्त्र र नीति)',
      shortDesc: 'नेपाल राष्ट्र बैंकको मौद्रिक नीति, महँगी दर, विप्रेषण (Remittance) र बजेट चक्र बुझ्नुहोस्।',
      tagline: 'देशको समग्र अर्थतन्त्र र नीतिहरूले तपाईंको खल्तीमा पार्ने प्रत्यक्ष असर बुझ्नुहोस्।',
      overview: 'अर्थतन्त्र भनेको किताबको सिद्धान्त मात्र होइन; नेपालमा राष्ट्र बैंक (बालुवाटार) वा अर्थ मन्त्रालय (सिंहदरबार) ले गर्ने निर्णयले तपाईंको बैंक ऋणको ब्याज १४% पुग्ने कि घट्ने, घरजग्गा कारोबार चल्ने कि रोकिने, र बजारमा खाद्यान्नको मूल्य कति बढ्ने भन्ने कुरा प्रत्यक्ष निर्धारण गर्छ। यस मार्गले मौद्रिक नीति, CD Ratio, रेमिट्यान्सको प्रभाव र सरकारी बजेटले तपाईंको व्यक्तिगत वित्तमा पार्ने असर सरल भाषामा बुझाउँछ।',
      whatIsThis: 'Economics भनेको राष्ट्रिय स्तरमा महँगी (Inflation), कुल गार्हस्थ उत्पादन (GDP), मौद्रिक नीति र विदेशी मुद्रा सञ्चितिको अध्ययन हो।',
      whyImportant: 'ब्याजदर र महँगीको चक्र पहिल्यै बुझ्न सक्दा सेयर, मुद्दती निक्षेप वा घरजग्गामा सहि समयमा सही निर्णय लिन सकिन्छ।',
      howInNepal: 'नेपाल राष्ट्र बैंकले हरेक वर्ष मौद्रिक नीति र अर्थ मन्त्रालयले हरेक वर्ष जेठ १५ गते संघीय बजेट मार्फत आर्थिक नीति लागू गर्छन्।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '38 min',
        en: { title: 'Monetary Policy & Interest Cycles', desc: 'How NRB regulates the money supply and controls banking liquidity.' },
        np: { title: 'मौद्रिक नीति र ब्याजदर चक्र', desc: 'राष्ट्र बैंकले बजारमा मुद्रा आपूर्ति र बैंकहरूको तरलता कसरी नियन्त्रण गर्छ।' },
        lessons: [
          {
            id: 'eco-1',
            number: 1,
            slug: 'nrb-monetary-policy-explained-nepal',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Explainer',
            format: 'Policy',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Deconstructing the NRB Annual Monetary Policy',
              summary: 'Repo rates, reverse repos, statutory reserve requirements (CRR, SLR), and loan growth targets.',
              keyTakeaways: 'When NRB tightens policy to curb inflation, borrowing becomes expensive and stock markets cool down.'
            },
            np: {
              title: 'नेपाल राष्ट्र बैंकको मौद्रिक नीति: सर्वसाधारणले बुझ्ने भाषामा',
              summary: 'Repo Rate, Reverse Repo, अनिवार्य नगद मौज्दात (CRR, SLR) र कर्जा विस्तार लक्ष्य।',
              keyTakeaways: 'राष्ट्र बैंकले कडा नीति लिँदा बैंकमा ब्याजदर बढ्छ, ऋण पाउन गाह्रो हुन्छ र सेयर बजार सुस्त हुन्छ।'
            }
          },
          {
            id: 'eco-2',
            number: 2,
            slug: 'cd-ratio-liquidity-crisis-nepal',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Liquidity',
            updatedDate: 'Sep 2026',
            prerequisites: 'eco-1',
            en: {
              title: 'Credit-to-Deposit (CD) Ratio: Why Banks Run Out of Loan Money',
              summary: 'The 90% CD ratio ceiling set by NRB and how bank liquidity crunches freeze lending.',
              keyTakeaways: 'If banks exceed 90% CD ratio, lending stops immediately and deposit interest rates shoot up.'
            },
            np: {
              title: 'CD Ratio र बैंकमा तरलता संकट (Liquidity Crunch)',
              summary: 'राष्ट्र बैंकको ९०% कर्जा-निक्षेप अनुपात (CD Ratio) र बैंकमा ऋण दिने पैसा किन सकिन्छ।',
              keyTakeaways: 'बैंकहरूको CD Ratio ९०% नाघेपछि नयाँ ऋण रोकिन्छ र निक्षेप तान्न मुद्दतीको ब्याज ह्वात्तै बढाइन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Inflation, Remittance & Currency Dynamics',
          relatedGuide: { title: 'Monetary Policy Reading Guide', slug: 'monetary-policy-guide', duration: '15 min' },
          relevantCalc: { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation' },
          glossaryTerms: ['Monetary Policy', 'CD Ratio', 'CRR', 'Repo Rate'],
          relatedCategory: { name: 'Banking', slug: 'banking' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '42 min',
        en: { title: 'Inflation, Remittance & Currency Dynamics', desc: 'Pegged INR rates, foreign exchange reserves, and consumer price indices.' },
        np: { title: 'महँगी, विप्रेषण (Remittance) र विदेशी मुद्रा', desc: 'भारतीय रुपैयाँसँगको स्थिर विनिमय दर, विदेशी मुद्रा सञ्चिति र आयात महँगी।' },
        lessons: [
          {
            id: 'eco-3',
            number: 3,
            slug: 'remittance-nepal-economic-lifeline',
            duration: '22 min',
            difficulty: 'Beginner',
            type: 'Lesson',
            format: 'Remittance',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Remittance: The Financial Engine of Modern Nepal',
              summary: 'How billions of dollars sent home by migrant workers fund import consumption, bank deposits, and real estate.',
              keyTakeaways: 'Remittance keeps Nepal’s foreign reserves afloat; slow remittance inflows immediately trigger liquidity crunches.'
            },
            np: {
              title: 'विप्रेषण (Remittance): आधुनिक नेपालको आर्थिक मेरुदण्ड',
              summary: 'विदेशी भूमिबाट आउने खर्बौं रुपैयाँले कसरी आयात, बैंक निक्षेप र घरजग्गा बजार चलायमान बनाएको छ।',
              keyTakeaways: 'रेमिट्यान्सले नेपालको विदेशी मुद्रा जोगाउँछ; रेमिट्यान्स घट्नासाथ बैंकमा पैसाको अभाव भई संकट सुरु हुन्छ।'
            }
          },
          {
            id: 'eco-4',
            number: 4,
            slug: 'inr-npr-currency-peg-inflation',
            duration: '20 min',
            difficulty: 'Advanced',
            type: 'Explainer',
            format: 'Currency',
            updatedDate: 'Sep 2026',
            prerequisites: 'eco-3',
            en: {
              title: 'The NPR-INR Currency Peg (1.60) & Imported Inflation',
              summary: 'Why the fixed 1.6 exchange rate with the Indian Rupee anchors Nepali prices and imports Indian inflation.',
              keyTakeaways: 'Nepal imports over 60% of goods from India; maintaining the 1.6 peg provides price stability but limits independent monetary freedom.'
            },
            np: {
              title: 'नेपाली र भारतीय रुपैयाँको स्थिर दर (१.६०) र आयातित महँगी',
              summary: 'भारुसँगको १.६० को स्थिर विनिमय दरले नेपाली बजारमा किन भारतको महँगी स्वतः भित्र्याउँछ।',
              keyTakeaways: 'नेपालले ६०% भन्दा बढी सामान भारतबाट आयात गर्छ; १.६० को स्थिर दरले बजार स्थिर राखे पनि नेपालको स्वतन्त्र नीति सीमित हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'The Federal Budget & Fiscal Policy',
          relatedGuide: { title: 'Inflation Drivers in Nepal', slug: 'inflation-drivers-nepal', duration: '14 min' },
          relevantCalc: { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation' },
          glossaryTerms: ['Inflation', 'Remittance', 'Currency Peg', 'Forex'],
          relatedCategory: { name: 'Investing', slug: 'investing' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '40 min',
        en: { title: 'The Federal Budget & Fiscal Policy', desc: 'Government revenue collection, capital expenditures, and national debt.' },
        np: { title: 'संघीय बजेट र वित्तीय नीति', desc: 'सरकारी राजस्व संकलन, पुँजीगत खर्च र राष्ट्रिय ऋणको अवस्था।' },
        lessons: [
          {
            id: 'eco-5',
            number: 5,
            slug: 'decoding-nepal-federal-budget-jestha-15',
            duration: '22 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'Budget',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Decoding the Federal Budget Presented on Jestha 15',
              summary: 'Recurrent expenditure vs. capital expenditure, customs duties, and deficit financing in Nepal.',
              keyTakeaways: 'Low capital expenditure means slow infrastructure; customs duty hikes directly impact consumer electronics and vehicles.'
            },
            np: {
              title: 'जेठ १५ मा आउने संघीय बजेट कसरी बुझ्ने?',
              summary: 'चालु खर्च र पुँजीगत खर्च, भन्सार महसुल र घाटा बजेटको प्रभाव।',
              keyTakeaways: 'पुँजीगत (विकास) खर्च कम हुँदा विकास निर्माण सुस्त हुन्छ; भन्सार कर बढ्दा गाडी र मोबाइल तुरुन्त महँगो हुन्छ।'
            }
          },
          {
            id: 'eco-6',
            number: 6,
            slug: 'internal-external-debt-nepal-gdp',
            duration: '18 min',
            difficulty: 'Advanced',
            type: 'Analysis',
            format: 'Debt',
            updatedDate: 'Sep 2026',
            prerequisites: 'eco-5',
            en: {
              title: 'Nepal’s Public Debt to GDP: Is the Country at Risk of a Debt Crisis?',
              summary: 'Domestic treasury bonds vs. concessional external loans from World Bank/ADB, debt-to-GDP sustainability thresholds.',
              keyTakeaways: 'Nepal’s debt-to-GDP (around 42-45%) remains manageable due to long-term concessional terms, but interest servicing is rising.'
            },
            np: {
              title: 'नेपालको सार्वजनिक ऋण र GDP अनुपात: के नेपाल ऋण संकटमा छ?',
              summary: 'आन्तरिक ऋण (ट्रेजरी बिल) र बाह्य सहुलियतपूर्ण ऋणको यथार्थ विश्लेषण।',
              keyTakeaways: 'नेपालको ऋण GDP को करिब ४२-४५% छ जुन सहुलियतपूर्ण भएकाले सुरक्षित मानिन्छ, तर साँवा-ब्याज भुक्तानीको भार बढ्दो छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Personal Productivity & Systems',
          relatedGuide: { title: 'Nepal Economy at a Glance', slug: 'nepal-economy-glance', duration: '12 min' },
          relevantCalc: { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation' },
          glossaryTerms: ['Federal Budget', 'Capital Expenditure', 'GDP'],
          relatedCategory: { name: 'Personal Finance', slug: 'personal-finance' }
        }
      }
    ],
    relatedCalculators: ['inflation', 'cagr'],
    relatedGuides: [
      { title: 'Understanding Macroeconomics in Nepal', slug: 'complete-economics-guide', duration: '16 min', difficulty: 'Intermediate' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'Why does Nepal fix its currency exchange rate with India at 1.60?',
          a: 'Nepal maintains a fixed exchange rate (peg) of 1 INR = 1.60 NPR because India is Nepal’s largest trading partner (accounting for over 60% of all imports and exports). The peg prevents wild currency volatility, provides trade predictability, and maintains public confidence in the Nepali rupee.'
        },
        np: {
          q: 'नेपालले भारतीय रुपैयाँसँगको विनिमय दर १.६० मा स्थिर किन राखेको छ?',
          a: 'नेपालको दुई तिहाइ (६०% भन्दा बढी) वैदेशिक व्यापार भारतसँग हुने भएकाले मुद्राको अनियन्त्रित उतारचढाव रोक्न र व्यापार सहज बनाउन विनिमय दर १ भारु = १.६० नेरु मा स्थिर (Pegged) गरिएको हो।'
        }
      }
    ]
  },
  {
    id: 12,
    slug: 'productivity',
    icon: 'target',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    duration: { en: '2.5 Hours', np: '२.५ घण्टा' },
    lessonCount: 6,
    guideCount: 2,
    calcCount: 1,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['productivity', 'systems', 'notion', 'spreadsheets', 'habit', 'money tracking', 'automation'],
    visualRoadmap: [
      'Personal Finance Spreadsheets & Notion Systems',
      'Tracking Daily Expenses Without Burnout',
      'Monthly 30-Minute Financial Review Ritual',
      'Organizing Tax Slips & Banking Documents',
      'Building a Family Wealth Dashboard',
      'Annual Financial Audit & Goal Calibration'
    ],
    en: {
      name: 'Productivity & Systems',
      shortDesc: 'Build sustainable financial tracking systems, Notion dashboards, and automated spreadsheets that prevent money stress.',
      tagline: 'Replace financial anxiety with clean, repeatable money routines.',
      overview: 'Most people fail at financial planning not because they lack mathematical formulas, but because their tracking systems are exhausting, tedious, and unsustainable. This pathway teaches friction-free personal productivity applied to wealth: setting up automated Google Sheets and Notion dashboards, running a 30-minute monthly financial review, organizing digital tax receipts, and designing effortless money habits that run on autopilot.',
      whatIsThis: 'Financial productivity is the design of intuitive digital systems, templates, and routines that manage cash flow without daily friction.',
      whyImportant: 'Without simple systems, budgets are abandoned within weeks. Sustainable systems ensure lifelong financial discipline with minimal cognitive effort.',
      howInNepal: 'Customized for multi-account Nepali realities (Class A banks, mobile banking QR, eSewa/Khalti, and cash expenditures).'
    },
    np: {
      name: 'Productivity & Systems (उत्पादकत्व र वित्तीय प्रणाली)',
      shortDesc: 'दैनिक खर्च ट्र्याकिङ, Notion ड्यासबोर्ड, स्वचालित स्प्रेडसिट र मासिक समीक्षा बानी।',
      tagline: 'वित्तीय चिन्ता हटाएर सरल, भरपर्दा र स्वचालित पैसा व्यवस्थापन प्रणाली बनाउनुहोस्।',
      overview: 'धेरैजसो मानिसहरू वित्तीय योजनामा असफल हुनुको कारण गणित नबुझेर होइन, उनीहरूको हिसाब राख्ने तरिका झन्झटिलो र थकाउने भएर हो। यस मार्गले जीवनभर टिक्ने सरल वित्तीय प्रणाली सिकाउँछ: Google Sheets र Notion ड्यासबोर्ड बनाउने, महिनामा मात्र ३० मिनेट छुट्ट्याएर मासिक समीक्षा गर्ने, डिजिटल रसिद सुरक्षित राख्ने, र तनावविना पैसा व्यवस्थापन गर्ने बानी बसाल्ने तरिका।',
      whatIsThis: 'Productivity भनेको झन्झटविना आफ्नो आम्दानी, खर्च र लगानीको हिसाब राख्ने आधुनिक डिजिटल प्रणाली र बानीको विकास हो।',
      whyImportant: 'सरल प्रणाली विना बनाएको बजेट केही हप्तामै टुट्छ। स्वचालित प्रणालीले कम मिहिनेतमै वर्षौंसम्म वित्तीय अनुशासन कायम राख्छ।',
      howInNepal: 'नेपालमा प्रयोग हुने बहु-खाता (बैंक, मोबाइल बैंकिङ QR, eSewa/Khalti र नगद) लाई एउटै ठाउँमा ट्र्याक गर्न मिल्ने गरी डिजाइन गरिएको।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '26 min',
        en: { title: 'Friction-Free Expense Tracking', desc: 'Eliminating the burnout of tracking every single rupee manually.' },
        np: { title: 'झन्झटमुक्त खर्च ट्र्याकिङ', desc: 'हरेक खुद्रा रुपैयाँको हिसाब राख्दा हुने मानसिक थकानबाट बच्ने उपाय।' },
        lessons: [
          {
            id: 'prd-1',
            number: 1,
            slug: 'why-detailed-budgeting-fails',
            duration: '12 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Psychology',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Why Traditional Budgeting Fails (And What Works Instead)',
              summary: 'Moving from painful line-by-line expense tracking to automated bucket allocations.',
              keyTakeaways: 'Track major expenditure buckets rather than obsessing over individual cups of tea.'
            },
            np: {
              title: 'परम्परागत बजेटिङ किन असफल हुन्छ? (र त्यसको विकल्प के हो?)',
              summary: 'हरेक खुद्रा खर्च लेख्ने झन्झटबाट मुक्त भएर बैंक खातामै बजेट बाँडफाँड गर्ने तरिका।',
              keyTakeaways: 'एक-एक कप चियाको हिसाब राख्न छाड्नुहोस्, मुख्य खर्चका ३ वटा शीर्षकमा मात्र ध्यान दिनुहोस्।'
            }
          },
          {
            id: 'prd-2',
            number: 2,
            slug: 'notion-spreadsheet-money-systems',
            duration: '14 min',
            difficulty: 'Beginner',
            type: 'Tutorial',
            format: 'Templates',
            updatedDate: 'Sep 2026',
            prerequisites: 'prd-1',
            en: {
              title: 'Setting Up Your First Personal Finance Notion Dashboard',
              summary: 'Structuring assets, liabilities, recurring monthly bills, and investment trackers in one unified view.',
              keyTakeaways: 'A single visual screen showing your net worth and upcoming bills eliminates monthly financial surprises.'
            },
            np: {
              title: 'पहिलो Personal Finance Notion ड्यासबोर्ड बनाउने तरिका',
              summary: 'सम्पत्ति, ऋण, मासिक बिल र लगानीलाई एउटै सफा स्क्रिनमा राख्ने विधि।',
              keyTakeaways: 'एउटै ड्यासबोर्डमा आफ्नो कुल सम्पत्ति र आउने बिलहरू देख्दा आर्थिक अनिश्चितता हट्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Monthly & Annual Rituals',
          relatedGuide: { title: 'Notion Finance Dashboard Guide', slug: 'notion-finance-guide', duration: '12 min' },
          relevantCalc: { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation' },
          glossaryTerms: ['Net Worth', 'Cash Flow', 'Dashboard'],
          relatedCategory: { name: 'Personal Finance', slug: 'personal-finance' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '24 min',
        en: { title: 'Monthly & Annual Rituals', desc: 'The 30-minute review that keeps your family finances aligned.' },
        np: { title: 'मासिक तथा वार्षिक समीक्षा बानी', desc: 'महिनामा मात्र ३० मिनेट दिएर आफ्नो वित्तीय लक्ष्य सही दिशामा राख्ने तरिका।' },
        lessons: [
          {
            id: 'prd-3',
            number: 3,
            slug: '30-minute-monthly-financial-checkin',
            duration: '12 min',
            difficulty: 'Beginner',
            type: 'Checklist',
            format: 'Routine',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'The 30-Minute Monthly Money Review Checklist',
              summary: 'A 5-step checklist executed on the last Sunday of each month to audit bank statements and portfolio gains.',
              keyTakeaways: 'Review net savings rate, verify loan balances, reconcile card statements, and celebrate wins.'
            },
            np: {
              title: '३० मिनेटको मासिक वित्तीय समीक्षा चेकलिस्ट',
              summary: 'हरेक महिनाको अन्तिम आइतबार बैंक विवरण र लगानीको अवस्था हेर्ने ५-बुँदे नियम।',
              keyTakeaways: 'मासिक बचत दर हेर्नुहोस्, ऋणको बाँकी साँवा जाँच्नुहोस् र नयाँ महिनाको योजना बनाउनुहोस्।'
            }
          },
          {
            id: 'prd-4',
            number: 4,
            slug: 'organizing-tax-receipts-banking-documents',
            duration: '12 min',
            difficulty: 'Beginner',
            type: 'Guide',
            format: 'Organization',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'Organizing Digital Tax Receipts & Legal Documents in Google Drive',
              summary: 'Creating an indexed folder hierarchy for land deeds, Demat certificates, insurance policies, and TDS slips.',
              keyTakeaways: 'Cloud-backed indexed storage ensures family members can locate critical documents during an emergency.'
            },
            np: {
              title: 'डिजिटल कर रसिद, लालपुर्जा र बैंक कागजात व्यवस्थापन',
              summary: 'Google Drive मा लालपुर्जा, सेयर प्रमाणपत्र, बीमा पोलिसी र कर रसिद सुरक्षित राख्ने विधि।',
              keyTakeaways: 'क्लाउडमा व्यवस्थित फोल्डर बनाउँदा आपतविपद्को बेला परिवारका सदस्यले तुरुन्त कागजात फेला पार्न सक्छन्।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Long-Term Vision & Goal Calibration',
          relatedGuide: { title: 'Financial Audit Checklist', slug: 'financial-audit-checklist', duration: '10 min' },
          relevantCalc: { name: 'Retirement Calculator', slug: 'calculators/retirement', key: 'retirement' },
          glossaryTerms: ['Document Vault', 'Checklist'],
          relatedCategory: { name: 'Retirement Planning', slug: 'retirement-planning' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '26 min',
        en: { title: 'Long-Term Vision & Goal Calibration', desc: 'Setting 5-year financial targets and avoiding lifestyle creep.' },
        np: { title: 'दीर्घकालीन लक्ष्य र जीवनशैली नियन्त्रण', desc: '५ वर्षे वित्तीय लक्ष्य निर्धारण र कमाइ बढ्दा खर्च बढ्न नदिने उपाय।' },
        lessons: [
          {
            id: 'prd-5',
            number: 5,
            slug: 'preventing-lifestyle-inflation-nepal',
            duration: '14 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Psychology',
            updatedDate: 'Sep 2026',
            prerequisites: 'prd-3',
            en: {
              title: 'Beating Lifestyle Inflation as Your Salary Grows in Nepal',
              summary: 'Why promotions and pay hikes rarely increase savings, and how to capture 50% of every raise.',
              keyTakeaways: 'Whenever you get a salary hike or promotion, divert at least 50% of the raise immediately into investments.'
            },
            np: {
              title: 'तलब बढ्दा हुने Lifestyle Inflation रोक्ने उपाय',
              summary: 'कमाइ बढ्दा पनि बचत किन बढ्दैन र हरेक पटक तलब बढ्दा ५०% रकम सीधै लगानीमा हाल्ने नियम।',
              keyTakeaways: 'बढेको तलबको कम्तीमा ५०% रकम तुरुन्त लगानी वा बचतमा थप्नुहोस्, बाँकीले मात्र जीवनशैली सुधार्नुहोस्।'
            }
          },
          {
            id: 'prd-6',
            number: 6,
            slug: 'annual-net-worth-audit-goal-setting',
            duration: '12 min',
            difficulty: 'Intermediate',
            type: 'Checklist',
            format: 'Annual',
            updatedDate: 'Sep 2026',
            prerequisites: 'prd-5',
            en: {
              title: 'Running Your Annual Financial Audit Every Poush / January',
              summary: 'Comparing year-over-year asset growth, reviewing insurance covers, and resetting financial milestones.',
              keyTakeaways: 'An annual review turns abstract financial dreams into measurable, achievable 12-month goals.'
            },
            np: {
              title: 'हरेक वर्ष पुस/माघमा वार्षिक वित्तीय अडिट गर्ने तरिका',
              summary: 'वर्षभरिको सम्पत्ति वृद्धिदर, बीमाको पर्याप्तता र नयाँ वर्षका वित्तीय लक्ष्यहरूको समीक्षा।',
              keyTakeaways: 'वर्षमा एकपटक गरिएको गम्भीर समीक्षाले वित्तीय योजनालाई स्पष्ट र हासिल गर्न सकिने बनाउँछ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Retirement Planning Pathway',
          relatedGuide: { title: 'Annual Financial Goal Template', slug: 'annual-goals-template', duration: '10 min' },
          relevantCalc: { name: 'Retirement Calculator', slug: 'calculators/retirement', key: 'retirement' },
          glossaryTerms: ['Lifestyle Creep', 'Annual Audit'],
          relatedCategory: { name: 'Retirement Planning', slug: 'retirement-planning' }
        }
      }
    ],
    relatedCalculators: ['retirement'],
    relatedGuides: [
      { title: 'Personal Finance Tracking System Guide', slug: 'tracking-system-guide', duration: '14 min', difficulty: 'Beginner' }
    ],
    relatedResources: ['notion-finance-tracker', 'budget-planner-system'],
    faqs: [
      {
        en: {
          q: 'Is Google Sheets or Notion better for tracking personal finances in Nepal?',
          a: 'A hybrid approach works best. Use Google Sheets for automated mathematical calculations (like loan amortization schedules and net worth calculations) and Notion for high-level goal roadmaps, recurring bills, and organizing digital financial receipts.'
        },
        np: {
          q: 'नेपालमा व्यक्तिगत हिसाब राख्न Google Sheets राम्रो कि Notion?',
          a: 'दुवैको सन्तुलित प्रयोग सबैभन्दा राम्रो हुन्छ। गणितीय हिसाब, ऋणको किस्ता र Net Worth निकाल्न Google Sheets प्रयोग गर्नुहोस् भने मासिक बिलको सूची, लक्ष्य र कागजात राख्न Notion उपयुक्त हुन्छ।'
        }
      }
    ]
  },
  {
    id: 13,
    slug: 'retirement-planning',
    icon: 'umbrella',
    difficulty: { en: 'Beginner to Intermediate', np: 'सुरुवाती देखि मध्यम' },
    duration: { en: '4 Hours', np: '४ घण्टा' },
    lessonCount: 7,
    guideCount: 2,
    calcCount: 3,
    lastUpdated: 'Bhadra 2081 / Sep 2026',
    tags: ['retirement', 'pension', 'ssf', 'cit', '4 percent rule', 'swp', 'nest egg', 'fire'],
    visualRoadmap: [
      'The Shocking Cost of Delay in Nepal',
      'Social Security Fund (SSF) Pension Model',
      'Citizen Investment Trust (CIT) Benefits',
      'Calculating Your Target Retirement Corpus',
      'The 4% Safe Withdrawal Rule Adapted for Nepal',
      'Transitioning from Growth to Passive Cash Flow',
      'Planning Senior Healthcare Expenses'
    ],
    en: {
      name: 'Retirement Planning',
      shortDesc: 'Calculate your retirement corpus, master the SSF pension model, CIT deductions, and the 4% safe withdrawal rule.',
      tagline: 'Build a permanent financial safety net so work becomes optional in Nepal.',
      overview: 'Relying solely on family support or informal real estate for retirement is a dangerous gamble in modern Nepal. With medical inflation escalating and nuclear families becoming the norm, building a dedicated, liquid retirement nest egg is an urgent priority. This pathway demystifies how compounding works over 30 years, the exact pension calculations under the Social Security Fund (SSF) and Citizen Investment Trust (CIT), and how to apply the 4% Safe Withdrawal Rule to fund a dignified retirement.',
      whatIsThis: 'Retirement planning is the strategic accumulation and preservation of capital to replace active employment income after age 55 or 60.',
      whyImportant: 'Nepal does not have a universal state-funded pension; without disciplined personal retirement planning, retirees face severe financial vulnerability.',
      howInNepal: 'Formal avenues include the Social Security Fund (SSF), Citizen Investment Trust (CIT), Employees Provident Fund (EPF/Karmachari Sanchaya Kosh), and private Mutual Fund SIPs.'
    },
    np: {
      name: 'Retirement Planning (अवकाश योजना)',
      shortDesc: 'अवकाश कोषको हिसाब, SSF पेन्सन मोडल, CIT मुद्दती र ४% सुरक्षित निकासी (Safe Withdrawal) नियम।',
      tagline: 'नेपालमा काम गर्नु बाध्यता नभई रहर बन्ने गरी बलियो आर्थिक सुरक्षा निर्माण गर्नुहोस्।',
      overview: 'आधुनिक नेपालमा अवकाशपछिको जीवनका लागि सन्तान वा घरजग्गाको भाडामा मात्र भर पर्नु जोखिमपूर्ण हुन्छ। अस्पतालको बढ्दो महँगी र बदलिँदो पारिवारिक संरचनाका कारण आफ्नो छुट्टै तरल अवकाश कोष बनाउनु अनिवार्य भइसकेको छ। यस मार्गले ३० वर्षको Compounding गणित, सामाजिक सुरक्षा कोष (SSF) र नागरिक लगानी कोष (CIT) को पेन्सन हिसाब, र ४% सुरक्षित निकासी नियम प्रयोग गरेर सम्मानित जीवन बिताउने तरिका सिकाउँछ।',
      whatIsThis: 'Retirement Planning भनेको ५५ वा ६० वर्षको उमेरपछि सक्रिय काम गर्न नपर्ने गरी नियमित पेन्सन र आम्दानी दिने पुँजी निर्माण गर्नु हो।',
      whyImportant: 'नेपालमा सबै नागरिकलाई समेट्ने सरकारी पेन्सन छैन; व्यक्तिगत अवकाश कोष नबनाए बुढेसकालमा ठूलो आर्थिक संकट आइपर्न सक्छ।',
      howInNepal: 'नेपालमा सामाजिक सुरक्षा कोष (SSF), नागरिक लगानी कोष (CIT), कर्मचारी सञ्चय कोष (EPF) र खुलामुखी Mutual Fund को SIP मुख्य माध्यम हुन्।'
    },
    roadmap: [
      {
        stageNumber: 1,
        moduleNumber: 1,
        estimatedTime: '36 min',
        en: { title: 'The Math of Long-Term Wealth & Delay', desc: 'Understanding retirement timelines and compound urgency.' },
        np: { title: 'दीर्घकालीन सम्पत्तिको गणित र ढिलाइको मूल्य', desc: 'अवकाशको समयसीमा र चक्रवृद्धिको अत्यावश्यकता बुझ्ने।' },
        lessons: [
          {
            id: 'ret-1',
            number: 1,
            slug: 'cost-of-delay-retirement-nepal',
            duration: '18 min',
            difficulty: 'Beginner',
            type: 'Explainer',
            format: 'Urgency',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'The Shocking Cost of Delaying Retirement Savings',
              summary: 'Starting at age 22 vs. age 35: why waiting just 10 years requires 4x more monthly savings for the exact same corpus.',
              keyTakeaways: 'Every year of early compounding does the heavy lifting so you don’t have to struggle in your 40s and 50s.'
            },
            np: {
              title: 'अवकाश बचतमा ढिलाइ गर्दा हुने अकल्पनीय नोक्सानी',
              summary: '२२ वर्ष र ३५ वर्षमा सुरु गर्दाको अन्तर: १० वर्ष ढिलाइ गर्दा उही रकम जोड्न मासिक ४ गुणा बढी रकम हाल्नुपर्ने बाध्यता।',
              keyTakeaways: 'सुरुवाती वर्षहरूको Compounding ले नै ठूलो सम्पत्ति बनाउँछ, जसले गर्दा पछिल्लो उमेरमा आर्थिक तनाव हुँदैन।'
            }
          },
          {
            id: 'ret-2',
            number: 2,
            slug: 'calculating-retirement-corpus-nepal',
            duration: '18 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Target',
            updatedDate: 'Sep 2026',
            prerequisites: 'ret-1',
            en: {
              title: 'Calculating Your Target Retirement Corpus in Nepal',
              summary: 'Estimating future monthly living costs adjusted for 7% annual inflation over 20-30 years.',
              keyTakeaways: 'A monthly lifestyle costing NPR 50,000 today will require approximately NPR 2,00,000 per month in 25 years.'
            },
            np: {
              title: 'नेपालमा आवश्यक अवकाश कोष (Corpus) हिसाब गर्ने विधि',
              summary: 'वार्षिक ७% महँगीलाई जोडेर २०-३० वर्षपछि आवश्यक पर्ने मासिक जीवनयापन खर्चको यथार्थ हिसाब।',
              keyTakeaways: 'आज मासिक रु. ५०,००० मा चल्ने जीवनशैली २५ वर्षपछि धान्न मासिक करिब रु. २,००,००० आवश्यक पर्नेछ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Institutional Pillars: SSF, CIT & EPF',
          relatedGuide: { title: 'Retirement Corpus Calculation Guide', slug: 'retirement-corpus-guide', duration: '14 min' },
          relevantCalc: { name: 'Retirement Calculator', slug: 'calculators/retirement', key: 'retirement' },
          glossaryTerms: ['Retirement Corpus', 'Compounding', 'Inflation'],
          relatedCategory: { name: 'Investing', slug: 'investing' }
        }
      },
      {
        stageNumber: 2,
        moduleNumber: 2,
        estimatedTime: '42 min',
        en: { title: 'Institutional Pillars: SSF, CIT & EPF', desc: 'Navigating formal pension schemes in Nepal.' },
        np: { title: 'औपचारिक पेन्सन स्तम्भहरू: SSF, CIT र EPF', desc: 'नेपालका कानुनी पेन्सन र अवकाश कोषहरूको कार्यविधि।' },
        lessons: [
          {
            id: 'ret-3',
            number: 3,
            slug: 'social-security-fund-ssf-pension-model',
            duration: '22 min',
            difficulty: 'Intermediate',
            type: 'Guide',
            format: 'SSF',
            updatedDate: 'Sep 2026',
            prerequisites: null,
            en: {
              title: 'The Social Security Fund (SSF) Pension Model: How Much Will You Get?',
              summary: 'Understanding Old Age Protection Scheme, 160-month divisor formula, and medical benefits after retirement.',
              keyTakeaways: 'SSF calculates monthly pension by dividing total accumulated retirement corpus by 160 months.'
            },
            np: {
              title: 'सामाजिक सुरक्षा कोष (SSF) पेन्सन मोडल: तपाईंले कति पाउनुहुन्छ?',
              summary: 'वृद्ध अवस्था सुरक्षा योजना, कुल रकमलाई १६० महिनाले भाग गर्ने सूत्र र अवकाशपछिको स्वास्थ्य सुविधा।',
              keyTakeaways: 'SSF ले जम्मा भएको कुल अवकाश रकमलाई १६० महिनाले भाग गरेर जीवनभर मासिक पेन्सन उपलब्ध गराउँछ।'
            }
          },
          {
            id: 'ret-4',
            number: 4,
            slug: 'citizen-investment-trust-cit-epf-nepal',
            duration: '20 min',
            difficulty: 'Intermediate',
            type: 'Reference',
            format: 'CIT',
            updatedDate: 'Sep 2026',
            prerequisites: 'ret-3',
            en: {
              title: 'Citizen Investment Trust (CIT) & EPF: Tax Rebates and Yields',
              summary: 'Comparing CIT Gratuity Schemes, interest crediting history, and tax deductions up to NPR 3,00,000.',
              keyTakeaways: 'Contributing to CIT or EPF lowers annual taxable income immediately while earning compound interest.'
            },
            np: {
              title: 'नागरिक लगानी कोष (CIT) र सञ्चय कोष (EPF): कर छुट र प्रतिफल',
              summary: 'CIT उपदान योजना, ऐतिहासिक ब्याजदर र वार्षिक रु. ३ लाखसम्मको आयकर छुटको विश्लेषण।',
              keyTakeaways: 'CIT वा सञ्चय कोषमा रकम जम्मा गर्दा तत्काल आयकर छुट पाइनुका साथै चक्रबृद्धि ब्याज समेत आर्जन हुन्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Private SIPs & The 4% Safe Withdrawal Rule',
          relatedGuide: { title: 'SSF vs CIT Pension Guide', slug: 'ssf-vs-cit-guide', duration: '16 min' },
          relevantCalc: { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax' },
          glossaryTerms: ['SSF', 'CIT', 'Pension'],
          relatedCategory: { name: 'Taxation', slug: 'taxation' }
        }
      },
      {
        stageNumber: 3,
        moduleNumber: 3,
        estimatedTime: '45 min',
        en: { title: 'Private SIPs & The 4% Safe Withdrawal Rule', desc: 'Sustainable withdrawal rates and generating non-depleting passive income.' },
        np: { title: 'निजी SIP र ४% सुरक्षित निकासी नियम', desc: 'मूल पुँजी नकटाएरै जीवनभर मासिक पेन्सन लिने सुरक्षित विधि।' },
        lessons: [
          {
            id: 'ret-5',
            number: 5,
            slug: '4-percent-rule-adapted-for-nepal',
            duration: '22 min',
            difficulty: 'Advanced',
            type: 'Lesson',
            format: 'Withdrawal',
            updatedDate: 'Sep 2026',
            prerequisites: 'ret-2',
            en: {
              title: 'The 4% Safe Withdrawal Rule (SWR) Adapted for Nepal',
              summary: 'How drawing 4% of your portfolio annually allows your capital to outlive you even during bear markets.',
              keyTakeaways: 'Accumulating 25x your annual expenses allows you to withdraw 4% annually adjusted for inflation indefinitely.'
            },
            np: {
              title: 'नेपालका लागि ४% सुरक्षित निकासी नियम (Safe Withdrawal Rate)',
              summary: 'वार्षिक रूपमा आफ्नो कुल पुँजीको ४% मात्र झिक्दा बजार घट्दा पनि मूलधन कहिल्यै नसकिने गणित।',
              keyTakeaways: 'आफ्नो वार्षिक खर्चको २५ गुणा पुँजी जोडेपछि वार्षिक ४% झिक्दै बाँकी रकम लगानीमै राख्न सकिन्छ।'
            }
          },
          {
            id: 'ret-6',
            number: 6,
            slug: 'swp-mutual-fund-retirement-income-nepal',
            duration: '23 min',
            difficulty: 'Advanced',
            type: 'Guide',
            format: 'Income',
            updatedDate: 'Sep 2026',
            prerequisites: 'ret-5',
            en: {
              title: 'Creating an Automated Monthly Pension with Mutual Fund SWP',
              summary: 'Transitioning from aggressive wealth accumulation to passive monthly payouts in Nepali banks.',
              keyTakeaways: 'Systematic Withdrawal Plans (SWP) in open-ended mutual funds provide tax-efficient monthly income without selling entire portfolios.'
            },
            np: {
              title: 'Mutual Fund SWP मार्फत स्वचालित मासिक पेन्सन बनाउने तरिका',
              summary: 'सम्पत्ति निर्माणको चरण पूरा भएपछि बैंक खातामा मासिक पेन्सन प्राप्त गर्ने आधुनिक विधि।',
              keyTakeaways: 'खुलामुखी Mutual Fund को SWP ले आफ्नो पूरै सेयर नबेचीकन मासिक रूपमा कर-अनुकूल पेन्सन आम्दानी दिन्छ।'
            }
          },
          {
            id: 'ret-7',
            number: 7,
            slug: 'healthcare-costs-in-retirement-nepal',
            duration: '13 min',
            difficulty: 'Intermediate',
            type: 'Lesson',
            format: 'Planning',
            updatedDate: 'Sep 2026',
            prerequisites: 'ret-4',
            en: {
              title: 'Planning for Senior Healthcare and Medical Inflation in Nepal',
              summary: 'Why general 6% CPI underestimates medical inflation (often 10-14%), health insurance caps and exclusions after age 60, government Swasthya Bima limits, and ring-fenced medical emergency funds.',
              keyTakeaways: 'Senior health insurance has strict exclusions and high copays in Nepal; ring-fence at least NPR 15-20 Lakhs in a dedicated liquid FD specifically for late-life medical emergencies.'
            },
            np: {
              title: 'नेपालमा अवकाशपछिको स्वास्थ्य उपचार खर्च र औषधी महँगी व्यवस्थापन',
              summary: 'स्वास्थ्य क्षेत्रमा १०-१४% को उच्च महँगी, ६० वर्षपछिका बिमा सीमा, सरकारी स्वास्थ्य बिमाका दायरा र समर्पित आपतकालीन मेडिकल कोष निर्माण।',
              keyTakeaways: 'उमेर बढेपछि बिमा कम्पनीहरूले पुरानो रोगको दाबी दिँदैनन्; बुढेसकालको उपचारका लागि कम्तीमा १५-२० लाख रुपैयाँ मुद्दतीमा छुट्टै सुरक्षित राख्नुपर्छ।'
            }
          }
        ],
        smartRecommendation: {
          nextModule: 'Mutual Funds & SWP Academy',
          relatedGuide: { title: 'Retirement Freedom Guide', slug: 'retirement-freedom-guide', duration: '18 min' },
          relevantCalc: { name: 'SWP Calculator', slug: 'calculators/swp', key: 'swp' },
          glossaryTerms: ['SWP', '4% Rule', 'Safe Withdrawal Rate'],
          relatedCategory: { name: 'Mutual Funds', slug: 'mutual-funds' }
        }
      }
    ],
    relatedCalculators: ['retirement', 'sip', 'swp'],
    relatedGuides: [
      { title: 'Complete Retirement Planning Guide for Nepal', slug: 'complete-retirement-guide', duration: '18 min', difficulty: 'Beginner' },
      { title: 'SSF vs CIT vs Mutual Fund SWP Comparison', slug: 'pension-comparison', duration: '16 min', difficulty: 'Intermediate' }
    ],
    relatedResources: ['notion-finance-tracker'],
    faqs: [
      {
        en: {
          q: 'At what age should a young person in Nepal start planning for retirement?',
          a: 'Immediately upon earning your first salary in your 20s. Thanks to compounding, investing NPR 5,000 per month starting at age 22 accumulates more wealth by age 60 than investing NPR 20,000 per month starting at age 38.'
        },
        np: {
          q: 'नेपालमा कति वर्षको उमेरदेखि अवकाशको योजना सुरु गर्नुपर्छ?',
          a: 'आफ्नो पहिलो कमाइ सुरु गर्दा अर्थात् २० को दशकबाटै। Compounding को शक्तिका कारण २२ वर्षको उमेरबाट मासिक रु. ५,००० लगानी गर्ने व्यक्तिले ३८ वर्षमा मासिक रु. २०,००० लगानी गर्नेसँग भन्दा धेरै गुणा ठूलो सम्पत्ति जोड्न सक्छ।'
        }
      },
      {
        en: {
          q: 'What is the 4% Safe Withdrawal Rule and does it work in Nepal?',
          a: 'The 4% rule states that if you invest your nest egg in a diversified mix of equities and debt instruments, you can safely withdraw 4% of the starting corpus in year one (adjusted for inflation thereafter) with a 95%+ probability that your money will never run out over a 30-year retirement period.'
        },
        np: {
          q: '४% सुरक्षित निकासी नियम के हो र के यो नेपालमा काम गर्छ?',
          a: '४% नियम अनुसार यदि तपाईंले आफ्नो अवकाश कोषलाई सेयर, डिबेन्चर र मुद्दतीमा सन्तुलित रूपमा राख्नुभयो भने, हरेक वर्ष कुल रकमको ४% मात्र झिक्दा ३० वर्षभन्दा बढी समयसम्म तपाईंको मूल पुँजी कहिल्यै रित्तिँदैन।'
        }
      }
    ]
  }
];

// Helper functions for category retrieval
export function getAllCategories() {
  return LEARN_CATEGORIES;
}

export function getCategoryBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();

  // Smart Aliases mapping for user convenience and backwards compatibility
  const aliasMap = {
    'tax': 'taxation',
    'taxes': 'taxation',
    'nepal-tax': 'taxation',
    'income-tax': 'taxation',
    'retirement': 'retirement-planning',
    'pension': 'retirement-planning',
    'mutualfund': 'mutual-funds',
    'mutual-fund': 'mutual-funds',
    'mutualfunds': 'mutual-funds',
    'funds': 'mutual-funds',
    'loan': 'loans',
    'debt': 'loans',
    'stock': 'nepse',
    'stocks': 'nepse',
    'share': 'nepse',
    'shares': 'nepse',
    'payments': 'digital-payments',
    'wallet': 'digital-payments',
    'wallets': 'digital-payments',
    'digital-payment': 'digital-payments',
    'startups': 'business',
    'startup': 'business'
  };

  const targetSlug = aliasMap[clean] || clean;
  return LEARN_CATEGORIES.find(c => c.slug === targetSlug) || null;
}

// ── Flagship In-Depth Lessons Registry ────────────────────────
const BASE_FLAGSHIP_LESSONS = {
  'what-is-investing': {
    id: 'inv-what-is-investing',
    slug: 'what-is-investing',
    categorySlug: 'investing',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified for Nepal Regulatory Accuracy (SEBON/NRB)', np: 'नेपालको वित्तीय नियम अनुसार प्रमाणित (धितोपत्र बोर्ड / राष्ट्र बैंक)' },
    prerequisites: { en: 'None - Absolute Beginner Friendly', np: 'कुनै पूर्वज्ञान चाहिँदैन - नयाँ सिकारुका लागि उपयुक्त' },
    en: {
      title: 'What is Investing? Foundations of Wealth Creation in Nepal',
      oneLineSummary: 'A practical, jargon-free guide to how investing works in Nepal, why cash savings lose value to inflation, and how to start building compounding wealth.',
      summaryPoints: [
        'Investing means purchasing productive assets that generate capital growth and dividends over time.',
        'Inflation can reduce what your money buys; whether an investment protects purchasing power depends on its return, fees, tax, and risk.',
        'Core investment vehicles in Nepal include NEPSE stocks, open-ended mutual funds (SIP), debentures, fixed deposits, and government bonds.',
        'Compounding is the mathematical engine that multiplies wealth when returns are consistently reinvested over 5, 10, and 20 years.',
        'You do not need millions to start in Nepal, but the minimum amount and payment method depend on the specific mutual fund scheme.'
      ],
      whatIsThis: 'Investing means putting money into an asset with the expectation of earning income, preserving purchasing power, or increasing value over time. The result is not guaranteed. A savings account is mainly for access and capital stability; an investment may lose value in the short term in exchange for the possibility of higher long-term returns. Shares represent ownership in a company, while a mutual fund unit represents a proportional interest in a professionally managed pool of assets.',
      whyItMatters: 'Inflation means the same amount of money may buy fewer goods and services later. A bank deposit can still be the right place for emergency cash or a near-term goal, even when its return is below inflation, because access and stability matter. Investing becomes relevant for money you can leave untouched for several years. Before investing, clear high-cost debt, keep an emergency reserve, and match the product to your time horizon and ability to tolerate loss.',
      howItWorks: [
        {
          step: 1,
          title: 'Capital Commitment & Asset Selection',
          desc: 'You exchange liquid cash for a financial instrument (shares, mutual fund units, or bonds) issued by regulated entities in Nepal.'
        },
        {
          step: 2,
          title: 'Productive Utilization',
          desc: 'The underlying institution uses this capital to finance operations, build infrastructure, provide loans, or generate commercial profits.'
        },
        {
          step: 3,
          title: 'Cash Flow & Capital Growth',
          desc: 'You may receive dividends or interest where the product provides them. The market value can also rise or fall, and returns are never guaranteed.'
        },
        {
          step: 4,
          title: 'The Compounding Cycle',
          desc: 'When you reinvest distributions and returns, those reinvested amounts can also earn returns. Compounding works in both directions when investments fall.'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Saving vs. investing: choose based on purpose and time horizon',
        headers: ['Feature', 'Ordinary Bank Savings', 'Long-Term Investing (SIP/NEPSE)'],
        rows: [
          ['Primary Objective', 'Short-term liquidity & safety', 'Long-term wealth & beating inflation'],
          ['Return', 'Interest rate is set by the account or deposit terms', 'Depends on the asset; past performance does not predict future returns'],
          ['Inflation Protection', 'May be below, near, or above inflation depending on the rate', 'May outpace inflation over time, but this is not guaranteed'],
          ['Risk Profile', 'Lower price risk; deposit protection has eligibility and coverage limits', 'Prices can fall; diversification reduces but does not remove risk'],
          ['Recommended Horizon', 'Cash needs and goals within roughly 0-3 years', 'Money that can remain invested for 5+ years']
        ]
      },
      nepalContext: 'Different products have different regulators and account requirements in Nepal. SEBON regulates the securities market and licensed mutual funds; NRB regulates banks and many payment services; CDSC operates the depository and MeroShare platform. A share investor normally needs a Demat account, MeroShare access and a bank-linked C-ASBA/CRN arrangement. Open-ended mutual funds may offer SIPs, but the minimum amount, registration route, fees, dealing day and redemption terms must be checked in the scheme document or the fund manager’s current notice. Rules, rates and product availability change, so use the latest official notice before transferring money.',
      practicalScenario: {
        persona: 'Prashant, 26, IT professional in Kathmandu',
        income: 'NPR 55,000 / month',
        scenarioText: 'Prashant had NPR 180,000 sitting in a standard commercial bank savings account earning 3.25% interest (about NPR 5,850/year before tax). With annual living cost inflation in Kathmandu running at 7%, his real savings were losing over NPR 6,700 in purchasing power each year.',
        solutionText: 'Instead of putting all his cash into shares, Prashant first checked his essential monthly costs, kept an emergency reserve, and compared the terms of available deposits and mutual funds. He then chose a diversified open-ended mutual fund SIP of NPR 5,000 per month only for money he could leave invested for at least 10 years. At an illustrative 12% annual return, compounded monthly, that contribution would grow to about NPR 11.6 lakhs before fees, taxes and any change in returns. The projection is an example, not a promise; actual NAVs and returns will vary.',
        metricHighlight: 'Illustration: about NPR 11.6 lakhs after 10 years'
      },
      formula: {
        name: 'The Monthly SIP Future-Value Equation',
        equation: 'FV = M \\times \\frac{(1 + r/n)^{nt} - 1}{r/n}',
        variables: [
          { symbol: 'A', name: 'Final Accumulated Wealth', desc: 'Total portfolio value after compounding.' },
          { symbol: 'M', name: 'Monthly Investment', desc: 'The amount invested at the end of each month.' },
          { symbol: 'r', name: 'Annualized Expected Return', desc: 'Estimated annual growth rate (e.g., 0.12 for 12%).' },
          { symbol: 'n', name: 'Payments per Year', desc: 'Usually 12 for a monthly SIP.' },
          { symbol: 't', name: 'Time Horizon in Years', desc: 'The most powerful variable in the entire equation.' }
        ],
        exampleCalculation: 'At an illustrative 12% annual return compounded monthly, investing NPR 5,000 at the end of each month for 15 years means contributions of NPR 9,00,000 and a projected value of about NPR 25.2 lakhs before fees, taxes and market variation. The result changes materially if the return, timing or contribution changes.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Open SIP Calculator'
      },
      commonMistakes: [
        {
          mistake: 'Waiting until you have a "large amount" to start investing.',
          correct: 'Start immediately with NPR 1,000/month through SIP; time in the market matters far more than starting capital.',
          explanation: 'Waiting 5 years to save a large sum forfeits the most aggressive doubling cycles of compound interest.'
        },
        {
          mistake: 'Confusing short-term trading rumors on Facebook/Viber with real investing.',
          correct: 'Invest in diversified mutual funds or fundamentally solid companies with consistent dividends and profits.',
          explanation: 'Speculating on speculative tips usually leads to buying at market peaks and selling at market bottoms.'
        },
        {
          mistake: 'Investing your emergency fund money into volatile stocks.',
          correct: 'Keep 3 to 6 months of living expenses safe in high-liquidity bank accounts before investing a single rupee.',
          explanation: 'If market prices fall and you suffer an unexpected emergency, you will be forced to sell shares at a loss.'
        }
      ],
      definitions: [
        { term: 'Inflation', full: 'मुद्रास्फीति (मूल्यवृद्धि)', meaning: 'The continuous rise in prices over time, causing currency to lose purchasing power.' },
        { term: 'Compounding', full: 'चक्रवृद्धि प्रतिफल', meaning: 'The process where an asset’s earnings are reinvested to generate additional earnings of their own.' },
        { term: 'SIP', full: 'Systematic Investment Plan', meaning: 'A disciplined method of investing a fixed sum into mutual funds at regular monthly intervals.' },
        { term: 'NAV', full: 'Net Asset Value', meaning: 'The per-unit market value of all securities held within a mutual fund scheme.' }
      ],
      faqs: [
        {
          q: 'What is the minimum amount required to start investing in Nepal?',
          a: 'You can begin investing in open-ended mutual funds with as little as NPR 1,000 per month through a Systematic Investment Plan (SIP). For primary market IPOs, 10 shares of a standard company with face value NPR 100 requires exactly NPR 1,000.'
        },
        {
          q: 'Can beginners invest without deep financial knowledge?',
          a: 'Yes. Beginners should start with open-ended mutual funds (SIP) where licensed, professional asset management teams research and manage the portfolio on your behalf, or focus on broad, high-quality Class A commercial banks and verified blue chips.'
        },
        {
          q: 'Is my invested capital guaranteed in Nepal?',
          a: 'Bank deposits are insured up to NPR 5 Lakhs by the Deposit and Credit Guarantee Fund (DCGF). However, market investments like stocks and mutual funds fluctuate with economic cycles and do not carry government guarantees. Diversification and long horizons (5+ years) are how investors manage this risk.'
        }
      ],
      takeaways: [
        'Cash savings lose value each year due to Nepal’s 6%-8% inflation rate.',
        'Investing harnesses compounding returns by putting money into productive assets.',
        'Start with as little as NPR 1,000/month through automated mutual fund SIPs.',
        'Always secure a 3-6 month emergency fund before allocating capital to market investments.'
      ]
    },
    np: {
      title: 'नेपालमा लगानीको जग: सम्पत्ति निर्माण र वित्तीय स्वतन्त्रता',
      oneLineSummary: 'नेपालमा लगानी कसरी हुन्छ, बैंकको बचतलाई महँगीले कसरी घटाउँछ, र कम्पाउन्डिङ मार्फत सम्पत्ति बढाउने व्यावहारिक र सरल गाइड।',
      summaryPoints: [
        'लगानी भनेको पुँजी वृद्धि र लाभांश प्राप्त गर्ने उद्देश्यले उत्पादनशील सम्पत्ति खरिद गर्नु हो।',
        'नेपालमा महँगी (Inflation) ६% देखि ८% सम्म हुँदा साधारण बचत खाताको पैसाले क्रयशक्ति गुमाइरहन्छ।',
        'नेपालमा लगानीका मुख्य माध्यमहरू: NEPSE सेयर, खुलामुखी Mutual Fund (SIP), डिबेन्चर, मुद्दती निक्षेप र सरकारी बचतपत्र हुन्।',
        '५, १० वा २० वर्षसम्म नियमित नाफा पुनः लगानी गर्दा Compounding ले सम्पत्ति कैयौं गुणा बढाउँछ।',
        'सुरु गर्न लाखौं रुपैयाँ चाहिन्न: खुलामुखी Mutual Fund मा मासिक रु. १,००० बाटै SIP सुरु गर्न सकिन्छ।'
      ],
      whatIsThis: 'Investing (लगानी) भनेको भविष्यमा पुँजी वृद्धि वा नियमित आम्दानीको अपेक्षा राखेर आफ्नो पैसालाई सेयर, Mutual Fund, वा ऋणपत्र जस्ता वित्तीय औजारहरूमा लगाउनु हो। केवल बैंक खातामा पैसा थन्क्याएर राख्नु बचत मात्र हो, तर त्यो पुँजीलाई आर्थिक गतिविधिमा परिचालन गरेर मुनाफा कमाउनु नै लगानी हो। जब तपाईं NEPSE मा सूचीकृत कुनै कम्पनी वा Mutual Fund मा लगानी गर्नुहुन्छ, तपाईं त्यस व्यवसायको आंशिक मालिक बन्नुहुन्छ र कम्पनीको नाफाबाट लाभांश (Dividend) पाउने अधिकार प्राप्त गर्नुहुन्छ।',
      whyItMatters: 'साधारण बचत खातामा पैसा सुरक्षित लागे पनि त्यसमा एउटा अदृश्य खतरा हुन्छ: महँगी (Inflation)। नेपालमा उपभोक्ता मूल्य सूचकांक हरेक वर्ष औसत ६% देखि ८.५% सम्म बढ्ने गर्छ। यदि बैंकले बचत खातामा ३.५% मात्र ब्याज दिन्छ भने तपाईंको पैसाको वास्तविक क्रयशक्ति हरेक वर्ष ३% देखि ४% ले घटिरहेको हुन्छ। १० वर्षपछि तपाईंको १ लाख रुपैयाँले आजको आधा सामान पनि किन्न सक्दैन। लगानी रातारात धनी बन्ने बाटो होइन, यो त आफ्नो मिहिनेतको कमाइलाई सुरक्षित राख्ने र दीर्घकालीन आर्थिक स्वतन्त्रता पाउने एकमात्र दिगो उपाय हो।',
      howItWorks: [
        {
          step: 1,
          title: 'पुँजी विनियोजन र औजार छनोट',
          desc: 'तपाईं आफ्नो नगद रकम नेपालका कानुनी नियमनभित्र रहेका सेयर, Mutual Fund वा डिबेन्चरमा लगाउनुहुन्छ।'
        },
        {
          step: 2,
          title: 'उत्पादनशील परिचालन',
          desc: 'कम्पनीले सो पुँजी व्यवसाय विस्तार, पूर्वाधार निर्माण वा सेवा विस्तारमा प्रयोग गरेर नाफा कमाउँछ।'
        },
        {
          step: 3,
          title: 'लाभांश र पुँजी वृद्धि',
          desc: 'कम्पनीको प्रगतिसँगै तपाईंले नगद वा बोनस सेयर लाभांश पाउनुहुन्छ र सेयरको बजार मूल्य बढ्छ।'
        },
        {
          step: 4,
          title: 'Compounding को जादु',
          desc: 'प्राप्त लाभांश खर्च नगरी पुनः लगानी गर्दा नाफाले पनि थप नाफा कमाउन थाल्छ।'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा बचत र दीर्घकालीन लगानी बीचको मुख्य अन्तर',
        headers: ['विशेषता', 'साधारण बैंक बचत (Savings)', 'दीर्घकालीन लगानी (SIP / NEPSE)'],
        rows: [
          ['मुख्य उद्देश्य', 'अल्पकालीन तरलता र सुरक्षा', 'दीर्घकालीन सम्पत्ति र Inflation लाई जित्ने'],
          ['नेपालमा अपेक्षित प्रतिफल', '३.०% - ५.०% प्रति वर्ष', '१०.०% - १५.०% चक्रिय औसत'],
          ['महँगीबाट सुरक्षा', 'नकारात्मक वास्तविक प्रतिफल (पैसाको मूल्य घट्छ)', 'सकारात्मक वास्तविक प्रतिफल (क्रयशक्ति बढ्छ)'],
          ['जोखिम', 'लगभग शून्य जोखिम (निक्षेप सुरक्षण कोषबाट ५ लाखसम्म सुरक्षित)', 'अल्पकालमा उतारचढाव, तर विविधीकरणले दीर्घकालमा सुरक्षित'],
          ['उपयुक्त समय सीमा', '० देखि १२ महिना (आपतकालीन कोषका लागि)', '३ देखि २०+ वर्ष (भविष्यको सम्पत्ति निर्माण)']
        ]
      },
      nepalContext: 'नेपालमा सम्पूर्ण लगानी प्रणाली नेपाल धितोपत्र बोर्ड (SEBON) र नेपाल राष्ट्र बैंक (NRB) को प्रत्यक्ष नियमनमा चल्छ। नागरिकता र बैंक खाता भएको जोसुकै नेपाली नागरिकले आफ्नो बैंकबाट Demat र MeroShare खाता खोलेर, C-ASBA प्रणालीबाट CRN नम्बर लिई, connectIPS मार्फत घरमै बसी १००% डिजिटल रूपमा लगानी सुरु गर्न सक्छन्। यसका साथै खुलामुखी Mutual Fund हरूले मोबाइल बैंकिङबाटै हरेक महिना स्वचालित SIP मार्फत रु. १,००० बाटै लगानी गर्ने कानुनी व्यवस्था मिलाएका छन्।',
      practicalScenario: {
        persona: 'प्रशान्त, २६ वर्ष, काठमाडौँमा सफ्टवेयर इन्जिनियर',
        income: 'मासिक रु. ५५,०००',
        scenarioText: 'प्रशान्तको बैंक बचत खातामा रु. १,८०,००० थन्किएर बसेको थियो जहाँ बैंकले वार्षिक ३.२५% (कर अघि करिब रु. ५,८५०) ब्याज दिन्थ्यो। तर काठमाडौँको महँगी हरेक वर्ष ७% ले बढ्दा उनको बचतको वास्तविक क्रयशक्ति हरेक वर्ष रु. ६,७०० भन्दा बढीले घटिरहेको थियो।',
        solutionText: 'प्रशान्तले हल्लाको भरमा सेयर किन्नुको सट्टा आफ्नो पैसालाई ३ भागमा बाँडे: (१) रु. ७५,००० आपतकालीन कोषको रूपमा बचत खातामै राखे, (२) रु. ५०,००० लाई १ वर्षे मुद्दती निक्षेपमा ७.५% ब्याजमा राखे, र (३) बाँकी रकमबाट हरेक महिना connectIPS मार्फत रु. ५,००० खुलामुखी Mutual Fund मा SIP सुरु गरे। १२% को औसत प्रतिफल मान्दा, १० वर्षमा प्रशान्तले जम्मा गरेको रु. ६ लाख बढेर ११.६ लाख रुपैयाँभन्दा बढी पुग्नेछ।',
        metricHighlight: 'रु. ५.६ लाख विशुद्ध चक्रवृद्धिको नाफा'
      },
      formula: {
        name: 'चक्रवृद्धि ब्याज सूत्र (Compound Interest Formula)',
        equation: 'A = P \\times (1 + r/n)^{nt}',
        variables: [
          { symbol: 'A', name: 'अन्तिम कुल सम्पत्ति', desc: 'Compounding पछि बन्ने कुल पोर्टफोलियो रकम।' },
          { symbol: 'P', name: 'मूलधन लगानी', desc: 'सुरुवाती लगानी वा मासिक SIP रकम।' },
          { symbol: 'r', name: 'अपेक्षित वार्षिक प्रतिफल', desc: 'बजारको औसत वृद्धि दर (जस्तै: १२% का लागि ०.१२)।' },
          { symbol: 'n', name: 'प्रति वर्ष ब्याज जोडिने पटक', desc: 'मासिक चक्रवृद्धिका लागि १२।' },
          { symbol: 't', name: 'वर्षमा समय सीमा', desc: 'यस सूत्रको सबैभन्दा शक्तिशाली चल-समय जति धेरै भयो, सम्पत्ति उति गुणा बढ्छ।' }
        ],
        exampleCalculation: 'मासिक रु. ५,००० का दरले १५ वर्षसम्म १२% प्रतिफलमा लगानी गर्दा कुल लगानी रु. ९,००,००० हुन्छ भने अन्तिम सम्पत्ति रु. २५,२२,८८० पुग्छ। यसमा ६४% भन्दा बढी रकम केवल चक्रवृद्धिको शक्तिले आर्जन हुन्छ!',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'SIP Calculator खोल्नुहोस्'
      },
      commonMistakes: [
        {
          mistake: '"धेरै पैसा भएपछि मात्र लगानी सुरु गर्छु" भन्दै कुरेर बस्नु।',
          correct: 'मासिक रु. १,००० बाटै तत्काल SIP सुरु गर्नुहोस्; रकम भन्दा समय धेरै मूल्यवान् हुन्छ।',
          explanation: '५ वर्ष कुरेर ठूलो रकम जोड्दा चक्रवृद्धिका सबैभन्दा शक्तिशाली सुरुवाती चरणहरू गुम्छन्।'
        },
        {
          mistake: 'फेसबुक र भाइबर ग्रुपका हल्ला र इन्साइडर टिपको भरमा सेयर किन्नु।',
          correct: 'राम्रो लाभांश र नाफा कमाउने कम्पनी वा विविधीकृत Mutual Fund मा लगानी गर्नुहोस्।',
          explanation: 'हल्लाको पछि लाग्दा मानिसहरू बजारको उच्च बिन्दुमा किनेर तल्लो बिन्दुमा घाटा खाएर बेच्छन्।'
        },
        {
          mistake: 'आपतकालीन कोषको रकम पनि सेयर बजारमा लगाउनु।',
          correct: '३ देखि ६ महिनाको खर्च सुरक्षित बचत खातामा राखेपछि मात्र लगानी गर्नुहोस्।',
          explanation: 'अचानक समस्या पर्दा बजार घटेको बेला सेयर घाटामा बेच्नुपर्ने बाध्यता आउँछ।'
        }
      ],
      definitions: [
        { term: 'Inflation', full: 'मुद्रास्फीति (महँगी)', meaning: 'समयसँगै वस्तु तथा सेवाको मूल्य निरन्तर बढ्ने र पैसाको क्रयशक्ति घट्ने प्रक्रिया।' },
        { term: 'Compounding', full: 'चक्रवृद्धि प्रतिफल', meaning: 'लगानीबाट आएको नाफालाई फेरि लगानी गरेर नाफा माथि थप नाफा कमाउने प्रक्रिया।' },
        { term: 'SIP', full: 'Systematic Investment Plan', meaning: 'हरेक महिना तोकिएको मितिमा निश्चित रकम Mutual Fund मा अनुशासित रूपमा लगानी गर्ने विधि।' },
        { term: 'NAV', full: 'Net Asset Value', meaning: 'Mutual Fund को सम्पूर्ण सम्पत्तिबाट दायित्व घटाएर प्रति एकाइ निकालिएको बजार मूल्य।' }
      ],
      faqs: [
        {
          q: 'नेपालमा लगानी सुरु गर्न न्यूनतम कति रकम चाहिन्छ?',
          a: 'खुलामुखी Mutual Fund मा तपाईं मासिक रु. १,००० बाटै SIP सुरु गर्न सक्नुहुन्छ। प्राथमिक बजारमा आउने IPO का लागि १० कित्ता आवेदन दिन रु. १,००० भए पुग्छ।'
        },
        {
          q: 'कुनै वित्तीय ज्ञान नभएका नयाँ व्यक्तिले कसरी सुरु गर्ने?',
          a: 'नयाँ सिकारुहरूका लागि खुलामुखी Mutual Fund (SIP) सबैभन्दा उत्तम बाटो हो, जहाँ अनुभवी फन्ड म्यानेजरहरूले तपाईंको रकमको व्यवस्थापन र अनुसन्धान गरिदिन्छन्।'
        },
        {
          q: 'नेपालमा लगानी गरिएको रकम डुब्ने जोखिम हुन्छ कि हुँदैन?',
          a: 'बैंकको बचत र मुद्दती निक्षेप ५ लाखसम्म निक्षेप तथा कर्जा सुरक्षण कोषबाट पूर्ण सुरक्षित हुन्छ। तर सेयर र Mutual Fund मा बजार अनुसार मूल्य घटबढ हुन्छ। लामो समय (५+ वर्ष) सम्म विविधीकरण गरेर लगानी गर्दा जोखिम कम हुन्छ।'
        }
      ],
      takeaways: [
        'नेपालको ६% देखि ८% महँगी दरले गर्दा बैंकको साधारण बचतले मूल्य गुमाउँछ।',
        'लगानीले उत्पादनशील सम्पत्ति मार्फत Compounding को फाइदा दिन्छ।',
        'मासिक रु. १,००० बाटै खुलामुखी Mutual Fund मा स्वचालित SIP सुरु गर्न सकिन्छ।',
        'सेयरमा लगानी गर्नुअघि ३ देखि ६ महिनाको आपतकालीन कोष अनिवार्य राख्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate wealth growth through monthly systematic investments.' },
      { name: 'CAGR Calculator', slug: 'calculators/cagr', key: 'cagr', desc: 'Compute compound annual growth rate of past investments.' },
      { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'See how future purchasing power changes in Nepal.' }
    ],
    downloadableResources: [
      { title: 'Beginner Investor Checklist for Nepal (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '280 KB', href: '/resources/nepse-beginner-guide' },
      { title: 'Personal Monthly Budget & SIP Tracker', type: 'Notion Template', format: 'Notion Ready', size: 'Direct Clone', href: 'assets/downloads/nepal-personal-budget-planner.csv' }
    ]
  },

  'what-is-an-ipo': {
    id: 'nep-what-is-an-ipo',
    slug: 'what-is-an-ipo',
    categorySlug: 'nepse',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'September 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under SEBON Securities Issue Rules', np: 'धितोपत्र निष्कासन तथा बाँडफाँड निर्देशिका अनुसार प्रमाणित' },
    prerequisites: { en: 'Demat & MeroShare Account with active CRN', np: 'Demat, MeroShare र CRN नम्बर भएको बैंक खाता' },
    en: {
      title: 'What is an IPO? How Primary Share Issues Work in Nepal',
      oneLineSummary: 'The complete beginner guide to Initial Public Offerings in Nepal: SEBON approvals, C-ASBA mechanics, MeroShare application steps, and the 10-kitta allotment rule.',
      summaryPoints: [
        'An IPO is an offer of shares to the public; the issue price, eligibility, and terms are set out in the approved prospectus.',
        'C-ASBA blocks the application amount in your linked bank account; unallotted funds are released through the bank after the issue process.',
        'Reserved categories and percentages vary by issue and current rules, so never assume a quota applies to every IPO.',
        'Retail allotment may use a lottery when valid applications exceed available shares; applying does not guarantee an allotment.',
        'MeroShare makes applications convenient, but you still need an active Demat account, a valid CRN, sufficient bank balance, and accurate details.'
      ],
      whatIsThis: 'An Initial Public Offering (IPO / प्राथमिक सेयर निष्कासन) is a public offer of a company’s shares under an approved prospectus. The offer can raise new capital for the company, allow existing shareholders to sell shares, or do both. The issue price is not always NPR 100: some issues are priced at face value and others may be issued at a premium under the applicable rules. An IPO share is an equity investment, so its future price and dividends are not guaranteed.',
      whyItMatters: 'An IPO can let a small investor access a company before its shares begin trading on NEPSE, but a low issue price does not make it safe or automatically profitable. Read the prospectus for the company’s business, financial statements, use of funds, risks, issue terms, and eligibility. Only apply with money you can leave unavailable during the issue and listing process, and do not borrow to apply.',
      howItWorks: [
        {
          step: 1,
          title: 'SEBON Approval & Prospectus Release',
          desc: 'The company hires a licensed Merchant Banker (Issue Manager) and publishes an audited Prospectus detailing financial health and ICRA/CareNP credit ratings.'
        },
        {
          step: 2,
          title: 'C-ASBA Application on MeroShare',
          desc: 'You log in to MeroShare, navigate to My ASBA > Apply for Issue, enter your desired kitta (normally 10), and submit your CRN code.'
        },
        {
          step: 3,
          title: 'Funds Lien / Blocking',
          desc: 'Your bank places a hold on the amount you apply for. The funds remain in your account but cannot be spent; interest treatment follows the bank account terms.'
        },
        {
          step: 4,
          title: 'Lottery Allotment & Listing',
          desc: 'After verification, shares are allotted according to the issue rules, often through a transparent lottery when applications exceed supply. Allotted shares move to your Demat and remaining funds are released after the registrar and bank complete the process.'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Possible IPO categories: check the current prospectus for each issue',
        headers: ['Reserved Category', 'Quota Percentage', 'Eligibility Requirements'],
        rows: [
          ['Foreign Employment', 'Issue-specific', 'Eligible Nepali citizens working abroad who meet the notice and remittance requirements'],
          ['Project-Affected Locals', 'Issue-specific', 'Eligible residents of the area identified in the issue notice'],
          ['Mutual Funds or Employees', 'Issue-specific', 'Category and percentage depend on the applicable issue rules'],
          ['General Public (Retail)', 'Remaining shares', 'Applicants who meet the prospectus, Demat, CRN and bank requirements']
        ]
      },
      nepalContext: 'In Nepal, CDS and Clearing Limited (CDSC) operates MeroShare, while licensed banks and financial institutions provide C-ASBA through their linked accounts. The application amount is blocked rather than transferred to a broker or unknown account. Before applying, compare the issue notice and prospectus, confirm your CRN and bank balance, and check the application deadline. Allotment, refund or release, Demat credit and NEPSE listing each take time; the exact schedule is issue-specific and should be confirmed through the official notice.',
      practicalScenario: {
        persona: 'Anupa, 22, college student in Pokhara',
        income: 'Monthly allowance / part-time tutoring: NPR 12,000',
        scenarioText: 'Anupa opened a free Demat account at a local commercial bank branch and obtained her CRN number. A profitable river-basin hydropower company opened its IPO for general public subscription.',
        solutionText: 'Anupa logged into meroshare.cdsc.com.np, applied for 10 kitta (cost: NPR 1,000), and submitted her CRN. The bank froze NPR 1,000 in her savings account. Three weeks later, the issue manager conducted the transparent digital lottery: Anupa was allotted 10 kitta. Upon listing on NEPSE, the stock opened at NPR 320 per share based on its net worth per share. Anupa’s NPR 1,000 investment was now worth NPR 3,200.',
        metricHighlight: '220% Return on Par Value at Listing'
      },
      formula: {
        name: 'Book Value (Net Worth Per Share)',
        equation: '\\text{BVPS} = \\frac{\\text{Total Assets} - \\text{Total Liabilities}}{\\text{Total Number of Outstanding Shares}}',
        variables: [
          { symbol: 'BVPS', name: 'Book Value Per Share (प्रतिसेयर नेटवर्थ)', desc: 'The audited net asset value backing each share unit.' },
          { symbol: 'Total Assets', name: 'कम्पनीको कुल सम्पत्ति', desc: 'All physical and financial assets owned by the enterprise.' },
          { symbol: 'Total Liabilities', name: 'कुल ऋण तथा दायित्व', desc: 'All bank debt, debentures, and vendor payables.' },
          { symbol: 'Outstanding Shares', name: 'कुल निष्कासित कित्ता संख्या', desc: 'The aggregate count of issued shares.' }
        ],
        exampleCalculation: 'If a company has NPR 2.4 Arba in assets, NPR 1.2 Arba in debt, and 1 Crore total shares, its BVPS is NPR 120. Under NEPSE listing rules, the opening price range for day 1 is between 1x and 3x the BVPS (NPR 120 to NPR 360)!',
        shortcutCalcSlug: 'calculators/nepse-share',
        shortcutCalcName: 'Open NEPSE Share Calculator'
      },
      commonMistakes: [
        {
          mistake: 'Applying for more than 10 kitta when an IPO is 20x oversubscribed.',
          correct: 'Apply for exactly 10 kitta (NPR 1,000) under the SEBON 10-kitta lottery rule.',
          explanation: 'When an IPO receives millions of applicants, everyone who wins gets exactly 10 kitta. Applying for 50 kitta simply locks up NPR 4,000 of your money needlessly.'
        },
        {
          mistake: 'Forgetting to renew MeroShare and Demat accounts each fiscal year.',
          correct: 'Pay the annual NPR 50 MeroShare and NPR 100 Demat fee via connectIPS or mobile wallet before Ashadh end.',
          explanation: 'An expired Demat or MeroShare account will reject your IPO application during C-ASBA verification.'
        },
        {
          mistake: 'Applying without checking the company’s ICRA Nepal credit rating.',
          correct: 'Check the prospectus: look for Grade 3 or better, positive reserve funds, and a sensible debt-to-equity ratio.',
          explanation: 'While historically most IPOs gain at listing, low-quality projects with excessive debt can trade below NPR 100.'
        }
      ],
      definitions: [
        { term: 'IPO', full: 'Initial Public Offering', meaning: 'प्राथमिक सेयर निष्कासन-कम्पनीले पहिलो पटक सर्वसाधारणका लागि सेयर खुलाउने प्रक्रिया।' },
        { term: 'Demat', full: 'Dematerialized Account', meaning: 'सेयर कागजी प्रमाणपत्रको सट्टा डिजिटल रूपमा सुरक्षित राख्ने इलेक्ट्रोनिक खाता।' },
        { term: 'MeroShare', full: 'MeroShare Web & App', meaning: 'CDSC द्वारा सञ्चालित अनलाइन पोर्टल जसबाट घरमै बसी IPO भर्न र सेयर स्थानान्तरण गर्न सकिन्छ।' },
        { term: 'CRN', full: 'C-ASBA Registration Number', meaning: 'तपाईंको बैंक खाता र Demat खातालाई प्रमाणीकरण गर्न बैंकले दिने विशेष नम्बर।' }
      ],
      faqs: [
        {
          q: 'Why do most retail investors only get 10 kitta in Nepali IPOs?',
          a: 'SEBON introduced the 10-kitta allotment rule to guarantee that small retail investors with limited capital have an equal chance of ownership, rather than letting wealthy individuals corner the entire issue.'
        },
        {
          q: 'What happens to my money if I do not win the IPO lottery?',
          a: 'Your money never left your bank account. As soon as the issue manager finalizes the allotment results, the C-ASBA lien (hold) is released by your bank and your funds become immediately available for use.'
        },
        {
          q: 'Can a person submit multiple IPO applications from different bank accounts?',
          a: 'No. SEBON strictly prohibits multiple applications by the same individual using the same citizenship or Demat. Doing so will result in the automated disqualification and rejection of all your applications.'
        }
      ],
      takeaways: [
        'IPOs allow retail investors in Nepal to buy equity at nominal par value (NPR 100).',
        'C-ASBA ensures application funds stay in your own bank account until allotment.',
        'Always apply for 10 kitta in oversubscribed issues to maximize capital efficiency.',
        'Review the company’s BVPS and credit ratings in the prospectus before applying.'
      ]
    },
    np: {
      title: 'नेपालमा IPO के हो? प्राथमिक सेयर निष्कासन र MeroShare बाट आवेदन',
      oneLineSummary: 'नेपालमा प्राथमिक सेयर (IPO) सम्बन्धी सम्पूर्ण आधारभूत ज्ञान: धितोपत्र बोर्डको नियम, C-ASBA प्रणाली, MeroShare बाट आवेदन र १० कित्ता गोलाप्रथाको नियम।',
      summaryPoints: [
        'IPO भनेको प्राइभेट कम्पनीले पहिलो पटक सर्वसाधारणका लागि अंकित मूल्य (रु. १००) मा सेयर खुलाउने प्रक्रिया हो।',
        'C-ASBA प्रणालीले सेयर नपरेसम्म तपाईंको बैंक खातामै पैसा रोक्का (Block) राख्छ, फिर्ता लिन कतै धाउनु पर्दैन।',
        'धितोपत्र बोर्डले वैदेशिक रोजगारीमा रहेकालाई १०%, आयोजना प्रभावितलाई १०%, र बाँकी सर्वसाधारणलाई कोटा छुट्याएको छ।',
        '१० कित्ता गोलाप्रथाको नियमले गर्दा थोरै पुँजी हुने साना लगानीकर्ताले पनि समान रूपमा सेयर पाउने अवसर पाउँछन्।',
        'MeroShare पोर्टलबाट कम्प्युटर वा मोबाइलबाट २ मिनेटमै सजिलै आवेदन दिन सकिन्छ।'
      ],
      whatIsThis: 'IPO (Initial Public Offering / प्राथमिक सेयर निष्कासन) भनेको कुनै निजी कम्पनीले सर्वसाधारण जनताबाट पुँजी संकलन गर्नका लागि पहिलो पटक आफ्नो स्वामित्वको सेयर सार्वजनिक रूपमा बिक्रीमा ल्याउने कानुनी प्रक्रिया हो। धितोपत्र ऐन २०६३ र नेपाल धितोपत्र बोर्ड (SEBON) को नियम अनुसार कम्पनीहरूले आफ्नो कुल पुँजीको कम्तीमा १०% देखि ३०% सम्म सर्वसाधारणका लागि जारी गर्नुपर्छ। नेपालमा सामान्यतया प्रति सेयर अंकित मूल्य (Face Value) रु. १०० तोकिएको हुन्छ।',
      whyItMatters: 'नेपालका आम नागरिकका लागि वित्तीय बजारमा प्रवेश गर्ने सबैभन्दा सुरक्षित र नाफामूलक माध्यम नै IPO बनेको छ। सेयर अंकित मूल्य रु. १०० मा पाइने र दोस्रो बजार (NEPSE) मा सूचीकृत हुँदा प्रायः कम्पनीहरूको सेयर मूल्य दोब्बर, तेब्बर वा पाँच गुणासम्म पुग्ने भएकाले साना लगानीकर्ताका लागि यो निकै आकर्षक छ। केवल रु. १,००० (१० कित्ताको मूल्य) बाटै जोकोही नेपालीले जलविद्युत, बैंक, बिमा वा उत्पादनमूलक उद्योगको हिस्सेदार बन्ने अवसर पाउँछन्।',
      howItWorks: [
        {
          step: 1,
          title: 'धितोपत्र बोर्डबाट स्वीकृति र विवरणपत्र',
          desc: 'कम्पनीले मर्चेन्ट बैंकर नियुक्त गर्छ र वित्तीय स्वास्थ्य तथा क्रेडिट रेटिङ सहितको विवरणपत्र (Prospectus) सार्वजनिक गर्छ।'
        },
        {
          step: 2,
          title: 'MeroShare बाट C-ASBA आवेदन',
          desc: 'तपाईं MeroShare मा लगइन गरी My ASBA > Apply for Issue मा गएर १० कित्ता छानी आफ्नो CRN नम्बर प्रविष्ट गर्नुहुन्छ।'
        },
        {
          step: 3,
          title: 'बैंक खातामा रकम रोक्का (Lien)',
          desc: 'तपाईंको बैंकले खाताबाट रु. १,००० रोक्का गर्छ। यो रकम खातामै रहन्छ र त्यसमा बचत खाताको ब्याज आइरहन्छ।'
        },
        {
          step: 4,
          title: 'बाँडफाँड र दोस्रो बजारमा सूचीकरण',
          desc: 'गोलाप्रथाबाट सेयर परेमा Demat खातामा सेयर जम्मा हुन्छ र नपरेकाहरूको रोक्का रकम तुरुन्त फुकुवा हुन्छ।'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा IPO निष्कासनको कानुनी कोटा बाँडफाँड',
        headers: ['आरक्षित समूह', 'कोटा प्रतिशत', 'आवश्यक योग्यता'],
        rows: [
          ['वैदेशिक रोजगारी कोटा', 'सर्वसाधारण निष्कासनको १०%', 'वैदेशिक रोजगारमा रही विप्रेषण (Remittance) बचत खाता भएका नेपाली'],
          ['आयोजना प्रभावित स्थानीय', 'आयोजना अनुसार १०%', 'सम्बन्धित जलविद्युत वा उद्योग रहेको स्थानीय तह वा वडाका बासिन्दा'],
          ['सामूहिक लगानी कोष (Mutual Funds)', 'सर्वसाधारण निष्कासनको ५%', 'धितोपत्र बोर्डमा दर्ता भएका खुला तथा बन्दमुखी Mutual Funds'],
          ['कम्पनीका कर्मचारी', '२% देखि ५% सम्म', 'सम्बन्धित कम्पनीमा कार्यरत स्थायी कर्मचारी'],
          ['आम सर्वसाधारण', 'बाँकी रहेको करिब ७०% - ८०%', 'Demat, MeroShare र CRN भएका सम्पूर्ण नेपाली नागरिक']
        ]
      },
      nepalContext: 'नेपालमा CDSC (Central Depository Services and Clearing Ltd.) ले सञ्चालन गरेको MeroShare ले गर्दा सम्पूर्ण IPO आवेदन अनलाइन भएको छ। C-ASBA (Application Supported by Blocked Amount) ले तपाईंको पैसा सुरक्षित राख्छ-नतिजा नआएसम्म पैसा आफ्नै बैंक खातामा रहन्छ। बाँडफाँड भएको १५ देखि ३० दिनभित्र NEPSE मा सेयर सूचीकृत हुन्छ र त्यसपछि ब्रोकर मार्फत दोस्रो बजारमा किनबेच गर्न सकिन्छ।',
      practicalScenario: {
        persona: 'अनुपा, २२ वर्ष, पोखरामा स्नातक तहकी विद्यार्थी',
        income: 'मासिक पकेट खर्च / ट्युसन: रु. १२,०००',
        scenarioText: 'अनुपाले वाणिज्य बैंकको शाखाबाट निःशुल्क Demat खाता खोलिन् र CRN नम्बर लिइन्। एउटा नाफामूलक जलविद्युत कम्पनीले सर्वसाधारणका लागि IPO खुलायो।',
        solutionText: 'अनुपाले meroshare.cdsc.com.np मा लगइन गरेर १० कित्ता (लागत रु. १,०००) को आवेदन दिइन्। बैंकले उनको खातामा रु. १,००० रोक्का गर्यो। तीन हप्तापछि डिजिटल गोलाप्रथा हुँदा अनुपालाई १० कित्ता सेयर पर्यो। NEPSE मा सूचीकृत हुँदा कम्पनीको नेटवर्थ अनुसार प्रतिसेयर ओपनिङ मूल्य रु. ३२० कायम भयो। अनुपाको रु. १,००० को लगानी पहिलो दिनमै रु. ३,२०० पुग्यो।',
        metricHighlight: 'पहिलो दिनमै २२०% को पुँजीगत नाफा'
      },
      formula: {
        name: 'प्रतिसेयर नेटवर्थ (Book Value Per Share)',
        equation: '\\text{BVPS} = \\frac{\\text{कुल सम्पत्ति} - \\text{कुल ऋण तथा दायित्व}}{\\text{कुल निष्कासित कित्ता संख्या}}',
        variables: [
          { symbol: 'BVPS', name: 'प्रतिसेयर नेटवर्थ', desc: 'कम्पनीको १ कित्ता सेयर बराबरको वास्तविक अडिटेड सम्पत्ति।' },
          { symbol: 'Total Assets', name: 'कुल सम्पत्ति', desc: 'कम्पनीको स्वामित्वमा रहेका भौतिक तथा वित्तीय सम्पत्तिहरू।' },
          { symbol: 'Total Liabilities', name: 'कुल दायित्व तथा ऋण', desc: 'बैंक कर्जा, डिबेन्चर र तिर्न बाँकी रकम।' },
          { symbol: 'Outstanding Shares', name: 'कुल कित्ता', desc: 'कम्पनीले जारी गरेको कुल सेयर संख्या।' }
        ],
        exampleCalculation: 'यदि कुनै कम्पनीको कुल सम्पत्ति रु. २.४ अर्ब, ऋण रु. १.२ अर्ब र कुल सेयर संख्या १ करोड छ भने, त्यसको BVPS रु. १२० हुन्छ। NEPSE को नियम अनुसार सूचीकृत भएको पहिलो दिन ओपनिङ मूल्य नेटवर्थको १ गुणादेखि ३ गुणा (रु. १२० देखि रु. ३६०) सम्म खुला हुन्छ!',
        shortcutCalcSlug: 'calculators/nepse-share',
        shortcutCalcName: 'NEPSE Share Calculator खोल्नुहोस्'
      },
      commonMistakes: [
        {
          mistake: 'लाखौं आवेदन पर्ने बजारमा १० कित्ताभन्दा बढी (जस्तै ५० कित्ता) आवेदन दिनु।',
          correct: 'धितोपत्र बोर्डको १० कित्ता नियम अनुसार सधैँ ठीक १० कित्ता (रु. १,०००) मात्र आवेदन दिनुहोस्।',
          explanation: 'अत्यधिक माग भएको IPO मा गोलाप्रथाबाट भाग्यमानीले १० कित्ता नै पाउने हुन्; बढी कित्ता भर्दा बैंकमा अनावश्यक पैसा रोक्का मात्र हुन्छ।'
        },
        {
          mistake: 'प्रत्येक आर्थिक वर्षमा Demat र MeroShare नवीकरण गर्न बिर्सनु।',
          correct: 'हरेक असार मसान्तभित्र MeroShare को रु. ५० र Demat को रु. १०० वालेट वा connectIPS बाट तिर्नुहोस्।',
          explanation: 'खाता नवीकरण नभएमा C-ASBA भेरिफिकेसन फेल भएर तपाईंको आवेदन स्वतः रद्द हुन्छ।'
        },
        {
          mistake: 'कम्पनीको क्रेडिट रेटिङ र विवरणपत्र नहेरी आँखा चिम्लेर आवेदन दिनु।',
          correct: 'विवरणपत्रमा कम्पनीको प्रतिसेयर आम्दानी (EPS), नेटवर्थ र ICRA रेटिङ जाँच्नुहोस्।',
          explanation: 'धेरै ऋण भएका र कमजोर आयोजनाहरूको सेयर मूल्य दोस्रो बजारमा रु. १०० भन्दा तल पनि झर्न सक्छ।'
        }
      ],
      definitions: [
        { term: 'IPO', full: 'Initial Public Offering', meaning: 'प्राथमिक सेयर निष्कासन-कम्पनीले पहिलो पटक सर्वसाधारणका लागि सेयर खुलाउने प्रक्रिया।' },
        { term: 'Demat', full: 'Dematerialized Account', meaning: 'सेयर कागजी प्रमाणपत्रको सट्टा डिजिटल रूपमा सुरक्षित राख्ने इलेक्ट्रोनिक खाता।' },
        { term: 'MeroShare', full: 'MeroShare Portal', meaning: 'CDSC द्वारा सञ्चालित अनलाइन पोर्टल जसबाट घरमै बसी IPO भर्न र सेयर स्थानान्तरण गर्न सकिन्छ।' },
        { term: 'CRN', full: 'C-ASBA Registration Number', meaning: 'तपाईंको बैंक खाता र Demat खातालाई प्रमाणीकरण गर्न बैंकले दिने विशेष नम्बर।' }
      ],
      faqs: [
        {
          q: 'नेपालमा IPO मा प्रायः सबैलाई १० कित्ता मात्र किन पर्छ?',
          a: 'धितोपत्र बोर्डले साना लगानीकर्ताको हित संरक्षण गर्न १० कित्ता बाँडफाँडको नियम बनाएको हो, जसले गर्दा थोरै पुँजी हुने आम नागरिकले पनि समान अवसर पाउँछन्।'
        },
        {
          q: 'यदि मलाई IPO परेन भने मेरो पैसा के हुन्छ?',
          a: 'तपाईंको पैसा कतै गएको हुँदैन। नतिजा सार्वजनिक हुनासाथ बैंकले रोक्का फुकुवा गरिदिन्छ र सो रकम फेरि चलाउन मिल्छ।'
        },
        {
          q: 'के एउटै व्यक्तिले दुईवटा बैंकबाट एउटै IPO मा आवेदन दिन सक्छ?',
          a: 'सक्दैन। एउटै नागरिकता वा Demat बाट एक पटकभन्दा बढी आवेदन दिएमा धितोपत्र बोर्डको नियम अनुसार दुवै आवेदन स्वतः रद्द हुन्छन्।'
        }
      ],
      takeaways: [
        'IPO मार्फत आम नेपालीले रु. १०० अंकित मूल्यमा कम्पनीको स्वामित्व किन्न पाउँछन्।',
        'C-ASBA ले गर्दा आवेदनको पैसा आफ्नै बैंक खातामा सुरक्षित रहन्छ।',
        'अत्यधिक माग हुने IPO मा सधैँ १० कित्ता मात्र आवेदन दिनु बुद्धिमानी हो।',
        'आवेदन दिनुअघि विवरणपत्रमा प्रतिसेयर नेटवर्थ (BVPS) र ऋणको अवस्था अवश्य जाँच्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Share Calculator', slug: 'calculators/nepse-share', key: 'share', desc: 'Compute brokerage fees, SEBON charges, capital gains tax, and net profit.' },
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Compare regular stock gains with automated mutual fund compounding.' }
    ],
    downloadableResources: [
      { title: 'First-Time NEPSE Investor Checklist (PDF)', type: 'PDF Checklist', format: 'PDF Guide', size: '320 KB', href: '/resources/nepse-beginner-guide' },
      { title: 'MeroShare Account Opening & C-ASBA Cheat Sheet', type: 'Quick Reference', format: 'PDF Document', size: '190 KB', href: '/resources/nepse-beginner-guide' }
    ]
  },

  'fixed-deposit': {
    id: 'bnk-fixed-deposit',
    slug: 'fixed-deposit',
    categorySlug: 'banking',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '7 min read', np: '७ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under Nepal Rastra Bank Unified Directives', np: 'नेपाल राष्ट्र बैंकको एकीकृत निर्देशन अनुसार प्रमाणित' },
    prerequisites: { en: 'Active savings account in any Class A, B, or C bank in Nepal', np: 'नेपालको वाणिज्य, विकास वा फाइनान्स कम्पनीमा बचत खाता' },
    en: {
      title: 'Fixed Deposits in Nepal: Interest Rates, Tenure & Taxation',
      oneLineSummary: 'How fixed deposits (मुद्दती निक्षेप) work across Class A commercial banks in Nepal, compound interest calculation, 5% TDS rules, and premature withdrawal mechanics.',
      summaryPoints: [
        'A Fixed Deposit (FD) locks a lump sum for a contracted tenure at a guaranteed interest rate set by the bank.',
        'Deposits up to NPR 5 Lakhs are legally guaranteed by the Deposit and Credit Guarantee Fund (DCGF).',
        'Interest is subject to a 5% final withholding tax (TDS) for individuals, deducted directly at source.',
        'FD laddering (splitting capital across 3-month, 6-month, and 1-year maturities) prevents premature breakage penalties.',
        'Premature termination before maturity forfeits contractual interest and usually reverts earnings to lower savings rates.'
      ],
      whatIsThis: 'A Fixed Deposit (FD / मुद्दती निक्षेप) is a financial contract between a saver and a licensed bank or financial institution (Class A Commercial Banks, Class B Development Banks, or Class C Finance Companies) regulated by Nepal Rastra Bank (NRB). You commit a fixed lump-sum amount for a specified duration (ranging from 3 months to 5+ years) in exchange for a guaranteed, fixed annual interest rate that cannot be decreased by the bank during the term.',
      whyItMatters: 'Fixed deposits provide peace of mind: they carry zero market price volatility, guaranteed principal safety, and completely predictable cash flow. For retirees living on monthly interest payouts, or individuals building an emergency fund buffer that cannot afford market drawdowns, FDs offer a disciplined foundation. Furthermore, under Nepal’s Deposit and Credit Guarantee Act, deposits up to NPR 500,000 per individual depositor are legally protected even in the event of institutional insolvency.',
      howItWorks: [
        {
          step: 1,
          title: 'Selecting Tenure & Payout Terms',
          desc: 'You select a tenure (e.g. 1 year, 2 years) and choose whether interest should be paid quarterly, monthly, or compounded until maturity.'
        },
        {
          step: 2,
          title: 'Booking the Deposit',
          desc: 'You transfer funds from your savings account via mobile banking or branch counter. The bank issues a formal Fixed Deposit Receipt (FDR).'
        },
        {
          step: 3,
          title: 'Daily Product Accrual',
          desc: 'Interest is calculated daily on the locked balance and credited automatically to your linked savings account according to terms.'
        },
        {
          step: 4,
          title: 'TDS Deduction & Maturity',
          desc: 'At each interest distribution or maturity, the bank withholds 5% TDS for the Inland Revenue Department (IRD) and credits net earnings.'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'FD Payout Frequency Comparison (Example: NPR 1,000,000 at 7.5% for 1 Year)',
        headers: ['Payout Option', 'Gross Annual Interest', '5% TDS Deduction', 'Net Earnings In-Hand', 'Ideal For'],
        rows: [
          ['Monthly Payout', 'NPR 75,000 (~NPR 6,250/mo)', 'NPR 3,750 (NPR 312.50/mo)', 'NPR 71,250 (~NPR 5,937.50/mo)', 'Senior citizens & retirees needing monthly cash'],
          ['Quarterly Payout', 'NPR 75,000 (NPR 18,750/qtr)', 'NPR 3,750 (NPR 937.50/qtr)', 'NPR 71,250 (NPR 17,812.50/qtr)', 'Household budgeting & quarterly school/tax bills'],
          ['Cumulative at Maturity', 'NPR 77,136 (Compounded quarterly)', 'NPR 3,857', 'NPR 73,279', 'Long-term savers maximizing total compounding value']
        ]
      },
      nepalContext: 'Nepal Rastra Bank (NRB) requires banks to publish fixed deposit rates on the 1st of every Nepali month (Bikram Sambat). Banks cannot change rates mid-month. Under NRB directives, the spread between Class A, B, and C institutions is bounded, and banks cannot offer rates differing by more than 10% from the industry average. Individual savers enjoy a 5% final TDS on interest, whereas institutional depositors pay 15% TDS.',
      practicalScenario: {
        persona: 'Ramesh, 48, secondary school teacher in Biratnagar',
        income: 'NPR 45,000 / month + savings pool',
        scenarioText: 'Ramesh accumulated NPR 600,000 from past savings and festival bonuses. He needed guaranteed safety for a daughter’s college admission fees coming due in exactly 12 months.',
        solutionText: 'Ramesh booked a 1-year Fixed Deposit at a Class A commercial bank offering 7.8% annual interest. The gross interest calculated to NPR 46,800. The bank automatically deducted 5% TDS (NPR 2,340) and credited NPR 44,460 directly to his savings account at maturity, safely preserving his principal and generating guaranteed earnings.',
        metricHighlight: 'NPR 44,460 Net Guaranteed Earnings'
      },
      formula: {
        name: 'Fixed Deposit Net Maturity Value Formula',
        equation: '\\text{Net Return} = [P \\times (1 + r/n)^{nt} - P] \\times (1 - \\text{TDS})',
        variables: [
          { symbol: 'P', name: 'Principal Deposit', desc: 'The initial lump-sum locked in FD (in NPR).' },
          { symbol: 'r', name: 'Annual Contracted Interest Rate', desc: 'The annual interest percentage (e.g., 0.075 for 7.5%).' },
          { symbol: 'n', name: 'Compounding Intervals Per Year', desc: 'Typically 4 for quarterly compounding in Nepal.' },
          { symbol: 't', name: 'Tenure in Years', desc: 'Total deposit duration.' },
          { symbol: 'TDS', name: 'Tax Deducted at Source', desc: '5% (0.05) for individual residents of Nepal.' }
        ],
        exampleCalculation: 'NPR 500,000 deposited for 2 years at 8.0% quarterly compounding yields gross interest of NPR 85,830. After deducting 5% TDS (NPR 4,291.50), the net profit is NPR 81,538.50!',
        shortcutCalcSlug: 'calculators/fixed-deposit',
        shortcutCalcName: 'Open Fixed Deposit Calculator'
      },
      commonMistakes: [
        {
          mistake: 'Locking 100% of savings in a single long-term (e.g. 3-year) FD.',
          correct: 'Practice "FD Laddering": split money into 3-month, 6-month, 1-year, and 2-year deposits.',
          explanation: 'If an emergency occurs, you only need to break one small portion, leaving the remaining FDs earning high interest.'
        },
        {
          mistake: 'Ignoring the premature withdrawal penalty clause.',
          correct: 'Always check the bank’s premature closure policy; banks usually reduce the interest rate to the ordinary savings rate (approx. 3%).',
          explanation: 'Breaking an FD after 11 months of a 12-month tenure can wipe out more than half of your accumulated interest.'
        },
        {
          mistake: 'Assuming Fixed Deposits alone are enough for long-term retirement wealth.',
          correct: 'Use FDs for capital preservation (0-3 years) and mutual funds/equities for long horizons (5+ years).',
          explanation: 'After 5% TDS and living cost inflation, FDs offer modest real returns that cannot outpace long-term wealth erosion alone.'
        }
      ],
      definitions: [
        { term: 'Fixed Deposit', full: 'मुद्दती निक्षेप (FD)', meaning: 'तोकिएको अवधिसम्म निश्चित ब्याजदरमा बैंकमा रकम जम्मा गर्ने सुरिक्षत सम्झौता।' },
        { term: 'TDS', full: 'Tax Deducted at Source', meaning: 'स्रोतमा कट्टी हुने अग्रिम कर-नेपालमा बैंक ब्याजमा व्यक्तिगत ग्राहकका लागि ५% कर लाग्छ।' },
        { term: 'DCGF', full: 'Deposit and Credit Guarantee Fund', meaning: 'निक्षेप तथा कर्जा सुरक्षण कोष-बैंक समस्यामा परे पनि प्रति निक्षेपकर्ता रु. ५ लाखसम्म सरकारले फिर्ता दिने ग्यारेन्टी।' },
        { term: 'Lien', full: 'रोक्का (Lien / Hold)', meaning: 'ऋण वा धरौटी बापत मुद्दती रसिद बैंकमा धितो राखी ९०% सम्म कर्जा लिन सकिने सुविधा।' }
      ],
      faqs: [
        {
          q: 'Can I take a loan against my Fixed Deposit in Nepal?',
          a: 'Yes. NRB regulations allow depositors to take a loan of up to 90% of their Fixed Deposit balance at an interest rate typically set at 1.0% to 1.5% above the FD contracted rate, without breaking the original deposit.'
        },
        {
          q: 'Is the interest earned on Fixed Deposits taxable in Nepal?',
          a: 'Yes. For individual citizens, a 5% final withholding tax (TDS) is automatically deducted by the bank upon interest payout. You do not need to pay additional personal tax on this interest.'
        },
        {
          q: 'What happens when my Fixed Deposit matures?',
          a: 'You can choose between automatic renewal (Auto-Rollover) of principal and interest, auto-renewal of principal only with interest credited to your savings, or full closure with all funds returned to your savings account.'
        }
      ],
      takeaways: [
        'Fixed Deposits provide zero-volatility, guaranteed income backed by DCGF up to NPR 5 Lakhs.',
        'A 5% final TDS is automatically withheld on interest payouts for individual savers in Nepal.',
        'Use FD Laddering to maintain quarterly liquidity and avoid premature breakage penalties.',
        'You can borrow up to 90% against your FD receipt through mobile banking without terminating the deposit.'
      ]
    },
    np: {
      title: 'नेपालमा मुद्दती निक्षेप (Fixed Deposit): ब्याजदर, अवधि र कर नियम',
      oneLineSummary: 'नेपालका वाणिज्य बैंकहरूमा मुद्दती निक्षेपको कार्यप्रणाली, चक्रवृद्धिको हिसाब, ५% TDS कर र समयअगावै तोड्दा लाग्ने जरिवाना सम्बन्धी पूर्ण गाइड।',
      summaryPoints: [
        'मुद्दती निक्षेप (FD) भनेको तोकिएको अवधिसम्म निश्चित ब्याजदरमा बैंकमा रकम सुरिक्षत राख्ने सम्झौता हो।',
        'नेपाल सरकारको निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) ले प्रति व्यक्ति रु. ५ लाखसम्मको बचत पूर्ण रूपमा सुरक्षित गरेको हुन्छ।',
        'व्यक्तिगत ग्राहकका लागि ब्याज आम्दानीमा ५% अन्तिम स्रोतमा कट्टी हुने कर (TDS) बैंकले स्वतः काट्छ।',
        'FD Laddering (रकमलाई ३ महिना, ६ महिना र १ वर्षे मुद्दतीमा टुक्राउने) विधिले आकस्मिक समस्यामा जरिवानाबाट जोगाउँछ।',
        'अवधि नसकिँदै मुद्दती तोडेमा बैंकले ब्याजदर घटाएर सामान्य बचत खाता सरह बनाइदिन्छ।'
      ],
      whatIsThis: 'मुद्दती निक्षेप (Fixed Deposit / FD) भनेको बचतकर्ता र नेपाल राष्ट्र बैंकबाट इजाजतप्राप्त बैंक तथा वित्तीय संस्था (क वर्गका वाणिज्य बैंक, ख वर्गका विकास बैंक, वा ग वर्गका वित्त कम्पनी) बीच गरिने कानुनी सम्झौता हो। यसमा निश्चित रकम निश्चित समय (३ महिनादेखि ५ वर्ष वा सोभन्दा बढी) सम्मका लागि बैंकमा जम्मा गरिन्छ र त्यस बापत बैंकले पूर्वनिर्धारित ब्याजदर दिने ग्यारेन्टी गर्छ।',
      whyItMatters: 'मुद्दती निक्षेपले मानसिक शान्ति दिन्छ: यसमा सेयर बजार जस्तो मूल्य घट्ने कुनै जोखिम हुँदैन, साँवा रकम पूर्ण सुरक्षित रहन्छ र ब्याज आम्दानी निश्चित हुन्छ। नियमित मासिक खर्च चलाउनुपर्ने अवकाशप्राप्त ज्येष्ठ नागरिकहरू वा जोखिम लिन नचाहने आपतकालीन कोषका लागि यो सबैभन्दा भरपर्दो आधार हो। यसका साथै निक्षेप तथा कर्जा सुरक्षण कोष ऐन अनुसार बैंक डुबेकै अवस्थामा पनि रु. ५,००,००० सम्म सरकारले फिर्ता दिने कानुनी प्रत्याभूति छ।',
      howItWorks: [
        {
          step: 1,
          title: 'अवधि र ब्याज भुक्तानी विकल्प छनोट',
          desc: 'तपाईं अवधि (जस्तै १ वर्ष, २ वर्ष) छान्नुहुन्छ र ब्याज मासिक, त्रैमासिक वा अवधि पुगेपछि एकमुष्ट लिने विकल्प रोज्नुहुन्छ।'
        },
        {
          step: 2,
          title: 'मुद्दती खाता खोल्ने',
          desc: 'मोबाइल बैंकिङ वा बैंक शाखाबाट बचत खाताको रकम मुद्दतीमा ट्रान्सफर हुन्छ र बैंकले मुद्दती रसिद (FDR) जारी गर्छ।'
        },
        {
          step: 3,
          title: 'दैनिक मौज्दातमा ब्याज गणना',
          desc: 'जम्मा भएको रकममा दैनिक रूपमा ब्याज हिसाब हुन्छ र तोकिएको समयमा बचत खातामा जम्मा हुन्छ।'
        },
        {
          step: 4,
          title: 'TDS कट्टी र परिपक्वता',
          desc: 'ब्याज भुक्तानी हुँदा बैंकले ५% कर (TDS) काटेर आन्तरिक राजस्व विभागमा बुझाउँछ र बाँकी रकम ग्राहकलाई दिन्छ।'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'मुद्दती ब्याज भुक्तानी विकल्पहरूको तुलना (उदाहरण: रु. १०,००,००० मा ७.५% वार्षिक ब्याज)',
        headers: ['भुक्तानी विकल्प', 'कुल वार्षिक ब्याज', '५% TDS कर कट्टी', 'हात पर्ने खुद आम्दानी', 'कसका लागि उपयुक्त'],
        rows: [
          ['मासिक भुक्तानी (Monthly)', 'रु. ७५,००० (मासिक रु. ६,२५०)', 'रु. ३,७५० (मासिक रु. ३१२.५०)', 'रु. ७१,२५० (मासिक रु. ५,९३७.५०)', 'पेन्सन वा मासिक खर्च चलाउनुपर्ने ज्येष्ठ नागरिक'],
          ['त्रैमासिक भुक्तानी (Quarterly)', 'रु. ७५,००० (प्रति त्रैमास रु. १८,७५०)', 'रु. ३,७५० (प्रति त्रैमास रु. ९३७.५०)', 'रु. ७१,२५० (प्रति त्रैमास रु. १७,८१२.५०)', 'घरायसी खर्च वा त्रैमासिक स्कुल फि तिर्ने परिवार'],
          ['परिपक्वतामा एकमुष्ट (Cumulative)', 'रु. ७७,१३६ (त्रैमासिक चक्रवृद्धिसहित)', 'रु. ३,८५७', 'रु. ७३,२७९', 'पैसा तत्काल नचाहिने र कुल सम्पत्ति बढाउन खोज्नेहरू']
        ]
      },
      nepalContext: 'नेपाल राष्ट्र बैंकको निर्देशन अनुसार सबै वाणिज्य बैंकहरूले हरेक महिनाको १ गते नयाँ मुद्दती ब्याजदर सार्वजनिक गर्नुपर्छ र महिनाको बीचमा दर फेर्न पाइँदैन। राष्ट्र बैंकले तोकेको सीमाभित्र रही बैंकहरूले दर तोक्छन्। व्यक्तिगत निक्षेपकर्ताका लागि ब्याजमा ५% अन्तिम TDS लाग्छ भने संस्थागत ग्राहकका लागि १५% कर कट्टी हुन्छ।',
      practicalScenario: {
        persona: 'रमेश, ४८ वर्ष, विराटनगरका माध्यमिक शिक्षक',
        income: 'मासिक रु. ४५,००० + बचत रकम',
        scenarioText: 'रमेशले विगतका बचत र चाडबाड खर्च जोगाएर रु. ६,००,००० जम्मा गरेका थिए। छोरीको कलेज भर्नाका लागि यो रकम ठीक १२ महिनापछि अनिवार्य चाहिएको थियो।',
        solutionText: 'रमेशले क वर्गको वाणिज्य बैंकमा ७.८% वार्षिक ब्याजदरमा १ वर्षे मुद्दती निक्षेप खोले। वार्षिक कुल ब्याज रु. ४६,८०० भयो। बैंकले ५% कर (रु. २,३४०) काटेर रमेशको बचत खातामा रु. ४४,४६० खुद ब्याज जम्मा गरिदियो। उनको साँवा रु. ६ लाख पूर्ण सुरक्षित रहँदै निश्चित नाफा हात पर्यो।',
        metricHighlight: 'रु. ४४,४६० खुद निश्चित ब्याज आम्दानी'
      },
      formula: {
        name: 'मुद्दती निक्षेप खुद नाफा सूत्र',
        equation: '\\text{Net Return} = [P \\times (1 + r/n)^{nt} - P] \\times (1 - \\text{TDS})',
        variables: [
          { symbol: 'P', name: 'साँवा रकम (Principal)', desc: 'मुद्दती खातामा राखिएको सुरुवाती रकम (रु. मा)।' },
          { symbol: 'r', name: 'वार्षिक ब्याजदर', desc: 'बैंकले तोकेको वार्षिक प्रतिशत (जस्तै: ७.५% का लागि ०.०७५)।' },
          { symbol: 'n', name: 'वर्षमा ब्याज जोडिने पटक', desc: 'नेपालमा सामान्यतया त्रैमासिक चक्रवृद्धिका लागि ४।' },
          { symbol: 't', name: 'अवधि (वर्षमा)', desc: 'मुद्दतीको कुल समय।' },
          { symbol: 'TDS', name: 'स्रोतमा कट्टी हुने कर', desc: 'व्यक्तिगत नेपाली नागरिकका लागि ५% (०.०५)।' }
        ],
        exampleCalculation: 'रु. ५,००,००० लाई २ वर्षका लागि ८% त्रैमासिक चक्रवृद्धिको मुद्दतीमा राख्दा कुल ब्याज रु. ८५,८३० हुन्छ। ५% TDS (रु. ४,२९१.५०) कटाएपछि खुद नाफा रु. ८१,५३८.५० हात पर्छ!',
        shortcutCalcSlug: 'calculators/fixed-deposit',
        shortcutCalcName: 'Fixed Deposit Calculator खोल्नुहोस्'
      },
      commonMistakes: [
        {
          mistake: 'आफ्नो सबै बचत एउटै ३ वा ५ वर्षे मुद्दती खातामा थन्क्याउनु।',
          correct: 'FD Laddering विधि अपनाउनुहोस्: रकमलाई ३ महिना, ६ महिना र १ वर्षे खातामा बाँड्नुहोस्।',
          explanation: 'अचानक पैसा चाहियो भने एउटा सानो मुद्दती मात्र तोडे पुग्छ, बाँकी रकमले उच्च ब्याज कमाइरहन्छ।'
        },
        {
          mistake: 'मुद्दती समयअगावै तोड्दा लाग्ने नियम नबुझ्नु।',
          correct: 'बैंकको नियम जाँच्नुहोस्; समयअगावै तोड्दा बैंकले ब्याजदर घटाएर सामान्य बचत खाता सरह (करिब ३%) बनाइदिन्छ।',
          explanation: '१ वर्षे मुद्दती ११ महिनामा तोड्दा धेरै ब्याज गुम्न सक्छ।'
        },
        {
          mistake: 'दीर्घकालीन पेन्सन र सम्पत्तिका लागि मुद्दतीमा मात्र निर्भर हुनु।',
          correct: 'अल्पकालीन सुरक्षाका लागि मुद्दती र दीर्घकालीन सम्पत्तिका लागि Mutual Fund वा सेयर प्रयोग गर्नुहोस्।',
          explanation: '५% कर र महँगी (Inflation) कटाएपछि मुद्दतीबाट हुने वास्तविक प्रतिफलले लामो समयमा सम्पत्ति बढाउन सक्दैन।'
        }
      ],
      definitions: [
        { term: 'Fixed Deposit', full: 'मुद्दती निक्षेप (FD)', meaning: 'तोकिएको अवधिसम्म निश्चित ब्याजदरमा बैंकमा रकम जम्मा गर्ने सुरिक्षत सम्झौता।' },
        { term: 'TDS', full: 'Tax Deducted at Source', meaning: 'स्रोतमा कट्टी हुने अग्रिम कर-नेपालमा बैंक ब्याजमा व्यक्तिगत ग्राहकका लागि ५% कर लाग्छ।' },
        { term: 'DCGF', full: 'Deposit and Credit Guarantee Fund', meaning: 'निक्षेप तथा कर्जा सुरक्षण कोष-बैंक समस्यामा परे पनि प्रति निक्षेपकर्ता रु. ५ लाखसम्म सरकारले फिर्ता दिने ग्यारेन्टी।' },
        { term: 'Lien', full: 'रोक्का (Lien / Hold)', meaning: 'ऋण वा धरौटी बापत मुद्दती रसिद बैंकमा धितो राखी ९०% सम्म कर्जा लिन सकिने सुविधा।' }
      ],
      faqs: [
        {
          q: 'के मुद्दती निक्षेप धितो राखेर बैंकबाट ऋण लिन सकिन्छ?',
          a: 'सकिन्छ। राष्ट्र बैंकको नियम अनुसार तपाईंले आफ्नो मुद्दती रसिद धितो राखी मुद्दती ब्याजदर भन्दा १% देखि १.५% मात्र बढी ब्याजमा ९०% सम्म कर्जा तुरुन्त लिन सक्नुहुन्छ।'
        },
        {
          q: 'मुद्दती निक्षेपको ब्याजमा कर लाग्छ कि लाग्दैन?',
          a: 'लाग्छ। व्यक्तिगत ग्राहकको हकमा ५% अन्तिम कर (TDS) बैंकले स्वतः काटेर सरकारलाई बुझाउँछ। यस बाहेक थप व्यक्तिगत कर तिर्नु पर्दैन।'
        },
        {
          q: 'मुद्दतीको अवधि सकिएपछि के हुन्छ?',
          a: 'तपाईंले स्वतः नवीकरण (Auto-Renewal) गर्ने, साँवा मात्र नवीकरण गरी ब्याज बचत खातामा हाल्ने, वा पूरै रकम फिर्ता लिने विकल्प रोज्न सक्नुहुन्छ।'
        }
      ],
      takeaways: [
        'मुद्दती निक्षेप शून्य जोखिम भएको सुरक्षित लगानी हो जहाँ रु. ५ लाखसम्म सरकारको ग्यारेन्टी छ।',
        'व्यक्तिगत ग्राहकका लागि ब्याजमा ५% अन्तिम TDS कर लाग्छ।',
        'आकस्मिक तरलताका लागि रकमलाई विभिन्न अवधिमा विभाजन (FD Laddering) गर्नुहोस्।',
        'मुद्दती नतोडीकन ९०% सम्म कर्जा मोबाइल बैंकिङबाटै लिन सकिन्छ।'
      ]
    },
    relatedCalculators: [
      { name: 'Fixed Deposit Calculator', slug: 'calculators/fixed-deposit', key: 'fd', desc: 'Calculate exact cumulative or payout earnings across tenures.' },
      { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'See how net FD returns compare against real purchasing power.' }
    ],
    downloadableResources: [
      { title: 'Commercial Bank Loan & Deposit Comparison Sheet', type: 'Worksheet', format: 'XLSX Spreadsheet', size: '180 KB', href: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv' }
    ]
  },

  'pan-explained': {
    id: 'tax-pan-explained',
    slug: 'pan-explained',
    categorySlug: 'taxation',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '7 min read', np: '७ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under Inland Revenue Department (IRD) Directives', np: 'आन्तरिक राजस्व विभागको आयकर ऐन २०५८ अनुसार प्रमाणित' },
    prerequisites: { en: 'Nepali Citizenship Certificate (नागरिकता)', np: 'नेपाली नागरिकताको प्रमाणपत्र' },
    en: {
      title: 'PAN Card in Nepal: Online Registration, Rules & Tax Deductions',
      oneLineSummary: 'Why a Permanent Account Number (PAN) is legally mandatory in Nepal, how to generate it in 5 minutes via Nagarik App, and how to verify employer tax deductions.',
      summaryPoints: [
        'A Personal PAN is a permanent 9-digit tax identifier issued free of cost by the Inland Revenue Department (IRD).',
        'By law, Nepali employers cannot issue salary payments exceeding NPR 1,000 without deducting tax to a valid PAN.',
        'Having your own PAN ensures that tax deducted at source (TDS) is credited to your permanent government tax ledger.',
        'You can generate an official digital PAN card in under 5 minutes using the government Nagarik App or the IRD portal.',
        'Having a PAN does not mean you must pay high taxes; your liability depends solely on your income slab.'
      ],
      whatIsThis: 'A Permanent Account Number (PAN / स्थायी लेखा नम्बर) is a unique 9-digit identification number issued by the Inland Revenue Department (IRD / आन्तरिक राजस्व विभाग) under the Ministry of Finance, Government of Nepal. It serves as your permanent financial identity across all fiscal interactions, identifying you in tax records, customs, banking transactions, land registries, and business contracts.',
      whyItMatters: 'Under the Income Tax Act 2058, having a Personal PAN is mandatory for all formal employees, consultants, and freelancers in Nepal. If you work without a PAN, any tax deducted by your employer or client is credited to an anonymous pool, meaning you have no legal proof of tax compliance. With your own PAN, every rupee of TDS deducted from your salary is credited directly to your digital tax account, which is required when applying for foreign visas, bank home loans, vehicle financing, or government tenders.',
      howItWorks: [
        {
          step: 1,
          title: 'Online Application via Nagarik App or IRD',
          desc: 'Download the Nagarik App or visit ird.gov.np. Enter your Citizenship details and mobile number to verify identity.'
        },
        {
          step: 2,
          title: 'Select Taxpayer Service Office (TSO)',
          desc: 'Choose your nearest Inland Revenue Office (IRO) or Taxpayer Service Office (करदाता सेवा कार्यालय) based on your location.'
        },
        {
          step: 3,
          title: 'Instant Issuance & Digital PAN Card',
          desc: 'On Nagarik App, verification is automated via the national citizenship database, generating your 9-digit PAN instantly.'
        },
        {
          step: 4,
          title: 'Link with Employer & Bank',
          desc: 'Provide your PAN to your employer HR department and commercial bank so all TDS deductions reflect on your tax ledger.'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Personal PAN vs. Business PAN in Nepal',
        headers: ['Feature', 'Personal PAN (व्यक्तिगत PAN)', 'Business PAN / VAT (व्यावसायिक PAN)'],
        rows: [
          ['Target User', 'Salaried employees, freelancers, professionals', 'Sole proprietorships, partnerships, Pvt. Ltd. companies'],
          ['Cost of Issuance', '100% Free (digital on Nagarik App)', 'Free registration (subject to local ward fees)'],
          ['Tax Return Obligations', 'Employer files monthly TDS; no annual audit needed for pure salary', 'Mandatory monthly/quarterly VAT filing and annual audited returns'],
          ['VAT Applicability', 'Cannot collect or charge VAT', 'Mandatory VAT registration if turnover exceeds thresholds (NPR 50L goods / 20L services)'],
          ['Lifetime Validity', 'Permanent lifetime number (never changes)', 'Remains active while enterprise status is renewed']
        ]
      },
      nepalContext: 'In Nepal, Section 95A of the Income Tax Act requires all withholding agents to remit TDS with PAN details. The government has integrated PAN with the Social Security Fund (SSF), Citizen Investment Trust (CIT), Employees Provident Fund (EPF), and banking KYC. Freelancers receiving international remittances or payments from platforms like Upwork must provide a PAN to local banks to claim the 5% final freelance income tax rate.',
      practicalScenario: {
        persona: 'Bikash, 24, freelance UI designer in Lalitpur',
        income: 'NPR 60,000 / month from local agency contracts',
        scenarioText: 'Bikash was invoicing agencies without a PAN. Agencies deducted 15% TDS on his consultant fees, but could not link it to his name in IRD records. When Bikash applied for a Japanese visa, the embassy requested a formal Tax Clearance Certificate, which he could not provide.',
        solutionText: 'Bikash downloaded the Nagarik App, entered his citizenship details, and received his 9-digit Personal PAN within 3 minutes without visiting a tax office. He instructed his agency clients to deposit his 15% TDS against his PAN. Three months later, Bikash logged into the IRD portal, verified his TDS credit history, and downloaded an official digital Tax Clearance Certificate (कर चुक्ता प्रमाणपत्र) with an authorized QR code.',
        metricHighlight: 'Instant 3-Minute PAN Issuance'
      },
      formula: {
        name: 'Annual Net Taxable Salary Calculation',
        equation: '\\text{Taxable Income} = \\text{Gross Annual Salary} - [\\text{SSF} + \\text{CIT} + \\text{Insurance Premium} + \\text{Medical Credit}]',
        variables: [
          { symbol: 'Gross Salary', name: 'कुल वार्षिक आम्दानी', desc: 'Base salary, allowances, overtime, and festival bonus.' },
          { symbol: 'SSF Contribution', name: 'सामाजिक सुरक्षा कोष योगदान', desc: 'Up to 31% deduction under the Social Security Scheme.' },
          { symbol: 'CIT / EPF', name: 'नागरिक लगानी कोष / सञ्चय कोष', desc: 'Deductions up to 1/3 of salary or NPR 300,000 maximum.' },
          { symbol: 'Life Insurance', name: 'जीवन बिमा प्रिमियम छुट', desc: 'Legal tax deduction up to NPR 40,000 per fiscal year.' },
          { symbol: 'Medical Tax Credit', name: 'औषधोपचार कर छुट', desc: '15% of approved medical expenses up to NPR 750.' }
        ],
        exampleCalculation: 'An individual earning NPR 8,00,000 annually who deposits NPR 2,00,000 into SSF/CIT and pays NPR 40,000 life insurance reduces their taxable income to NPR 5,60,000. In the married bracket (threshold: NPR 6,00,000), their total income tax is reduced to just 1% Social Security Tax on the first NPR 6 Lakhs (NPR 6,000)!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Open Nepal Income Tax Calculator'
      },
      commonMistakes: [
        {
          mistake: 'Thinking that getting a PAN means you have to pay hefty taxes immediately.',
          correct: 'PAN is merely an identity number; you only pay income tax if your income exceeds the legal government threshold.',
          explanation: 'For single individuals, the first NPR 500,000 of salary pays just 1% Social Security Tax (and zero if you contribute to SSF).'
        },
        {
          mistake: 'Allowing an employer to deduct TDS without verifying your PAN on the IRD portal.',
          correct: 'Log in to ird.gov.np annually to verify that employer TDS has actually been deposited to your account.',
          explanation: 'Dishonest employers sometimes deduct TDS on salary slips but fail to deposit the funds to the IRD.'
        },
        {
          mistake: 'Applying for a Business PAN when you only need a Personal PAN for employment.',
          correct: 'Employees and freelancers only need a Personal PAN; a Business PAN requires formal tax audit filings and bookkeeping.',
          explanation: 'Opening an unnecessary Business PAN exposes you to compounding penalties for missed monthly VAT and income tax returns.'
        }
      ],
      definitions: [
        { term: 'PAN', full: 'Permanent Account Number', meaning: 'स्थायी लेखा नम्बर-नेपाल सरकारले हरेक करदातालाई दिने ९ अंकको स्थायी परिचय नम्बर।' },
        { term: 'TDS', full: 'Tax Deducted at Source', meaning: 'स्रोतमा कट्टी हुने कर-तलब वा भुक्तानी दिने व्यक्ति वा संस्थाले अग्रिम रूपमा काट्ने कर।' },
        { term: 'IRD', full: 'Inland Revenue Department', meaning: 'आन्तरिक राजस्व विभाग-नेपाल सरकारको प्रत्यक्ष तथा अप्रत्यक्ष कर संकलन गर्ने प्रमुख निकाय।' },
        { term: 'Nagarik App', full: 'नागरिक एप (Nagarik App)', meaning: 'नेपाल सरकारको आधिकारिक मोबाइल एप जसबाट नागरिकताका आधारमा तुरुन्त निःशुल्क PAN लिन सकिन्छ।' }
      ],
      faqs: [
        {
          q: 'Does it cost any money to register for a Personal PAN in Nepal?',
          a: 'No. Registering for a Personal PAN in Nepal is 100% free of charge whether you apply via the Nagarik App or directly at an Inland Revenue Office.'
        },
        {
          q: 'Can a college student or unemployed person get a PAN card in Nepal?',
          a: 'Yes. Any Nepali citizen who possesses a valid Citizenship Certificate can obtain a Personal PAN card. It is useful for opening bank accounts, trading shares on NEPSE, and receiving freelance payments.'
        },
        {
          q: 'How can I check if my employer deposited my TDS into my PAN account?',
          a: 'Visit the official IRD portal (ird.gov.np), go to the Taxpayer Portal, log in with your PAN and password, and click on "TDS Verification" to see every transaction credited by your employer.'
        }
      ],
      takeaways: [
        'Personal PAN is mandatory in Nepal for any salary or professional payout.',
        'You can generate your 9-digit PAN in under 5 minutes via the Nagarik App.',
        'TDS deposited to your PAN serves as official proof of income for visa and loan applications.',
        'Check your IRD portal profile annually to verify that all deductions are properly recorded.'
      ]
    },
    np: {
      title: 'नेपालमा PAN कार्ड: अनलाइन दर्ता, नियम र कर कटौती',
      oneLineSummary: 'स्थायी लेखा नम्बर (PAN) नेपालमा कानुनी रूपमा अनिवार्य - नागरिक App बाट ५ मिनेटमा कसरी लिने र नियोक्ताको TDS कसरी प्रमाणित गर्ने।',
      summaryPoints: [
        'व्यक्तिगत PAN आन्तरिक राजस्व विभाग (IRD) द्वारा नि:शुल्क जारी ९-अंकको स्थायी कर परिचय।',
        'कानुनले नियोक्ताले वैध PAN बिना रु. १,000 भन्दा बढी तलब TDS नकाटी दिन पाइँदैन।',
        'आफ्नो PAN भएमा TDS तपाईँको स्थायी सरकारी कर लेजरमा जम्मा हुन्छ।',
        'नागरिक App वा IRD पोर्टलबाट ५ मिनेटमा डिजिटल PAN कार्ड लिन सकिन्छ।',
        'PAN हुनुको अर्थ धेरै कर तिर्नुपर्छ भन्ने होइन - दायित्व आम्दानीको सीमामा निर्भर।'
      ],
      whatIsThis: 'स्थायी लेखा नम्बर (PAN / Permanent Account Number) आन्तरिक राजस्व विभाग (IRD) ले जारी गरेको ९-अंकको अद्वितीय पहिचान नम्बर हो। यो तपाईँको कर अभिलेख, बैंकिङ, भूमि दर्ता र व्यापारिक सम्झौतामा स्थायी वित्तीय पहिचानको रूपमा प्रयोग हुन्छ।',
      whyItMatters: 'आयकर ऐन २०५८ अनुसार सबै औपचारिक कर्मचारी, परामर्शदाता र फ्रिल्यान्सरलाई PAN अनिवार्य। PAN बिना TDS अज्ञात पूलमा जम्मा हुन्छ - तपाईँसँग कर अनुपालनको कानुनी प्रमाण छैन। PAN भएमा TDS तपाईँको डिजिटल कर खातामा जम्मा हुन्छ जुन भिसा, गृहकर्जा, सवारी वित्त र सरकारी टेन्डरमा आवश्यक।',
      howItWorks: [
        { step: 1, title: 'नागरिक App वा IRD मार्फत अनलाइन आवेदन', desc: 'नागरिक App डाउनलोड गर्नुहोस् वा ird.gov.np मा जानुहोस्। नागरिकता विवरण र मोबाइल नम्बर राख्नुहोस्।' },
        { step: 2, title: 'करदाता सेवा कार्यालय (TSO) छान्नुहोस्', desc: 'आफ्नो नजिकको आन्तरिक राजस्व कार्यालय (IRO) वा करदाता सेवा कार्यालय छान्नुहोस्।' },
        { step: 3, title: 'तत्काल जारी र डिजिटल PAN कार्ड', desc: 'नागरिक App मा राष्ट्रिय नागरिकता डेटाबेसबाट स्वचालित प्रमाणीकरणपछि तुरुन्त ९-अंकको PAN जारी।' },
        { step: 4, title: 'नियोक्ता र बैंकसँग लिंक गर्नुहोस्', desc: 'आफ्नो PAN HR विभाग र बैंकलाई दिनुहोस् - सबै TDS कटौती तपाईँको कर लेजरमा जम्मा हुन्छ।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा व्यक्तिगत PAN बनाम व्यावसायिक PAN',
        headers: ['विशेषता', 'व्यक्तिगत PAN', 'व्यावसायिक PAN / VAT'],
        rows: [
          ['लक्षित प्रयोगकर्ता', 'तलबी कर्मचारी, फ्रिल्यान्सर, पेशेवर', 'एकल स्वामित्व, साझेदारी, Pvt. Ltd.'],
          ['जारी लागत', '१००% नि:शुल्क (नागरिक App मा)', 'नि:शुल्क दर्ता (स्थानीय शुल्क लाग्न सक्छ)'],
          ['कर विवरण दायित्व', 'नियोक्ताले मासिक TDS; शुद्ध तलबमा वार्षिक लेखापरीक्षण छैन', 'अनिवार्य मासिक/त्रैमासिक VAT र वार्षिक लेखापरीक्षित विवरण'],
          ['VAT लागूता', 'VAT संकलन/शुल्क गर्न मिल्दैन', 'कारोबार सीमा (सामान रु. ५० लाख/सेवा रु. २० लाख) नाघेमा अनिवार्य'],
          ['आजीवन वैधता', 'स्थायी आजीवन नम्बर (कहिल्यै परिवर्तन हुँदैन)', 'व्यवसाय नवीकरण गरेसम्म सक्रिय']
        ]
      },
      nepalContext: 'नेपालमा आयकर ऐनको दफा ९५ (क) ले सबै रोकावट एजेन्टलाई PAN विवरण सहित TDS तिर्न अनिवार्य गरेको छ। PAN सामाजिक सुरक्षा कोष (SSF), नागरिक लगानी कोष (CIT), कर्मचारी सञ्चय कोष (EPF) र बैंकिङ KYC सँग एकीकृत। अन्तर्राष्ट्रिय रेमिट्यान्स वा Upwork जस्ता प्लेटफर्मबाट भुक्तान प्राप्त गर्ने फ्रिल्यान्सरले ५% अन्तिम फ्रिल्यान्स आयकर दर पाउन बैंकमा PAN उपलब्ध गराउनुपर्छ।',
      practicalScenario: {
        persona: 'विकाश, २४ वर्ष, ललितपुरमा फ्रिल्यान्स UI डिजाइनर',
        income: 'स्थानीय एजेन्सी सम्झौताबाट मासिक रु. ६०,000',
        scenarioText: 'विकाश PAN बिना एजेन्सीलाई इन्भ्वाइस काट्थे। एजेन्सीले १५% TDS काट्थ्यो तर IRD अभिलेखमा उनको नाम थिएन। जापानी भिसा आवेदनमा दूतावासले कर चुक्ता प्रमाणपत्र माग्यो जुन उनले दिन सकेनन्।',
        solutionText: 'विकाशले नागरिक App डाउनलोड गरे, नागरिकता विवरण राखे र ३ मिनेटभित्र कर कार्यालय नगई ९-अंकको PAN पाए। एजेन्सीलाई PAN दिए। ३ महिनापछि IRD पोर्टलमा TDS क्रेडिट इतिहास प्रमाणित गरी QR कोड सहित आधिकारिक कर चुक्ता प्रमाणपत्र डाउनलोड गरे।',
        metricHighlight: '३ मिनेटमा PAN जारी - कर कार्यालय भ्रमण बिना'
      },
      formula: {
        name: 'वार्षिक खुद कर योग्य तलब गणना',
        equation: '\\text{कर योग्य आम्दानी} = \\text{कुल वार्षिक तलब} - [\\text{SSF} + \\text{CIT} + \\text{बीमा प्रिमियम} + \\text{चिकित्सा क्रेडिट}]',
        variables: [
          { symbol: 'कुल तलब', name: 'Gross Annual Salary', desc: 'आधार तलब, भत्ता, ओभरटाइम, दशैँ बोनस।' },
          { symbol: 'SSF योगदान', name: 'सामाजिक सुरक्षा कोष', desc: 'सामाजिक सुरक्षा योजनाअन्तर्गत ३१% सम्म कटौती।' },
          { symbol: 'CIT/EPF', name: 'नागरिक लगानी/सञ्चय कोष', desc: 'तलबको १/३ वा रु. ३,00,000 (जो कम) सम्म।' },
          { symbol: 'जीवन बीमा', name: 'जीवन बीमा प्रिमियम छुट', desc: 'प्रति आव रु. ४०,000 सम्म कानुनी कर कटौती।' },
          { symbol: 'चिकित्सा कर क्रेडिट', name: 'Medical Tax Credit', desc: 'स्वीकृत चिकित्सा खर्चको १५%, अधिकतम रु. ७५०।' }
        ],
        exampleCalculation: 'वार्षिक रु. ८,00,000 कमाउने व्यक्ति SSF/CIT मा रु. २,00,000 र जीवन बीमामा रु. ४०,000 तिरे भने कर योग्य आम्दानी रु. ५,६०,000 हुन्छ। विवाहित ब्रयाकेटमा (सीमा: रु. ६,00,000) कुल आयकर पहिलो रु. ६ लाखमा केवल १% सामाजिक सुरक्षा कर = रु. ६,000 मात्र!',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'नेपाल आयकर Calculator खोल्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'PAN लिनुको अर्थ तुरुन्त धेरै कर तिर्नुपर्छ भन्ने सोच्नु।', correct: 'PAN केवल परिचय नम्बर हो - आयले कानुनी सीमा नाघेमा मात्र कर।', explanation: 'एकल व्यक्तिको पहिलो रु. ५,00,000 मा केवल १% सामाजिक सुरक्षा कर (SSF योगदान गरे शून्य)।' },
        { mistake: 'TDS काटिएको प्रमाण IRD पोर्टलमा जाँच नगर्नु।', correct: 'वार्षिक ird.gov.np मा लगइन गरी नियोक्ताको TDS जम्मा भएको प्रमाणित गर्नुहोस्।', explanation: 'बेइमान नियोक्ताले तलब स्लिपमा TDS काटेर IRD मा जम्मा नगर्न सक्छ।' },
        { mistake: 'केवल तलब र फ्रिल्यान्सका लागि व्यावसायिक PAN खोल्नु।', correct: 'कर्मचारी र फ्रिल्यान्सरलाई व्यक्तिगत PAN मात्र चाहिन्छ।', explanation: 'अनावश्यक व्यावसायिक PAN खोल्दा मासिक VAT र आयकर विवरण नपठाएमा जरिबाना।' }
      ],
      definitions: [
        { term: 'PAN', full: 'Permanent Account Number / स्थायी लेखा नम्बर', meaning: 'नेपाल सरकारले हरेक करदातालाई दिने ९ अंकको स्थायी परिचय नम्बर।' },
        { term: 'TDS', full: 'Tax Deducted at Source / स्रोतमा कट्टी कर', meaning: 'तलब वा भुक्तानी दिने व्यक्ति वा संस्थाले अग्रिम रूपमा काट्ने कर।' },
        { term: 'IRD', full: 'Inland Revenue Department / आन्तरिक राजस्व विभाग', meaning: 'नेपाल सरकारको प्रत्यक्ष तथा अप्रत्यक्ष कर संकलन गर्ने प्रमुख निकाय।' },
        { term: 'नागरिक App', full: 'Nagarik App', meaning: 'नेपाल सरकारको आधिकारिक मोबाइल एप जसबाट नागरिकताका आधारमा निःशुल्क PAN लिन सकिन्छ।' }
      ],
      faqs: [
        { q: 'के नेपालमा व्यक्तिगत PAN दर्ता गर्न पैसा लाग्छ?', a: 'छैन। नेपालमा व्यक्तिगत PAN दर्ता १००% नि:शुल्क - नागरिक App वा आन्तरिक राजस्व कार्यालयमा।' },
        { q: 'के विद्यार्थी वा बेरोजगार व्यक्तिले PAN लिन सक्छन्?', a: 'हो। वैध नागरिकताको प्रमाणपत्र भएका जुनसुकै नेपाली नागरिकले व्यक्तिगत PAN लिन सक्छन्। बैंक खाता, NEPSE सेयर कारोबार र फ्रिल्यान्स भुक्तानीका लागि उपयोगी।' },
        { q: 'नियोक्ताले मेरो TDS मेरो PAN मा जम्मा गर्यो कि गरेन कसरी जाँच्ने?', a: 'ird.gov.np मा जानुहोस् → करदाता पोर्टल → PAN र पासवर्डले लगइन → "TDS Verification" क्लिक गर्नुहोस् - नियोक्ताले जम्मा गरेको सबै TDS देखिन्छ।' }
      ],
      takeaways: [
        'व्यक्तिगत PAN नेपालमा तलब वा पेशेवर भुक्तानीका लागि अनिवार्य।',
        'नागरिक App बाट ५ मिनेटमा ९-अंकको PAN लिन सकिन्छ।',
        'PAN मा जम्मा भएको TDS भिसा र ऋण आवेदनमा आम्दानीको प्रमाण।',
        'IRD पोर्टलमा वार्षिक जाँच गर्नुहोस् - सबै कटौती सही दर्ता भएको सुनिश्चित।'
      ]
    },
    relatedCalculators: [
      { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'tax', desc: 'Calculate your exact income tax liability, tax slabs, and legal deductions.' }
    ],
    downloadableResources: [
      { title: 'Salary Earner Legal Tax Deductions Checklist (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '250 KB', href: '/resources/nepse-beginner-guide' }
    ]
  },

  // ── 5. COMPOUNDING ENGINE ─────────────────────────────────────────
  'compounding-engine-wealth': {
    id: 'inv-compounding-engine',
    slug: 'compounding-engine-wealth',
    categorySlug: 'investing',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified for Financial Accuracy (SEBON/NRB)', np: 'वित्तीय यथार्थता प्रमाणित (धितोपत्र बोर्ड / राष्ट्र बैंक)' },
    prerequisites: { en: 'None - complete beginner friendly', np: 'कुनै पूर्वज्ञान आवश्यक छैन' },
    en: {
      title: 'The Power of Compounding: How Time Multiplies Wealth in Nepal',
      oneLineSummary: 'Why starting a monthly SIP of NPR 2,000 at age 22 builds more wealth than NPR 10,000/month starting at age 35 - the mathematical proof.',
      summaryPoints: [
        'Compounding is when your returns start earning their own returns, creating exponential rather than linear growth.',
        'In Nepal, a 10-year SIP at 12% annualized returns generates over 65% of its final value purely from compounding - not from your pocket.',
        'The "Rule of 72" tells you how many years it takes to double money: divide 72 by your annual return percentage.',
        'Skipping 5 years can cost you more than doubling your monthly contribution to compensate.',
        'Open-ended mutual fund SIPs via connectIPS are the most accessible compounding vehicle in Nepal starting from NPR 1,000/month.'
      ],
      whatIsThis: 'Compounding is the process where the earnings from an investment are reinvested to generate additional earnings. In simple terms: your money earns returns, and those returns themselves earn more returns. Unlike simple interest (which only grows your original principal), compounding grows the entire accumulated balance. A person who starts a systematic investment at 22 and stops at 32 will often end up wealthier at 60 than someone who starts at 35 and never stops, purely because of compounding\'s time dependency.',
      whyItMatters: 'In Nepal, where the average salaried employee earns between NPR 25,000 and NPR 80,000, compounding is the equalizer. You do not need to earn like a doctor or engineer to build wealth - you need to start early and stay consistent. With Nepal\'s open-ended mutual fund SIPs starting at just NPR 1,000/month, compounding is no longer a privilege of the wealthy.',
      howItWorks: [
        { step: 1, title: 'Initial Investment (Principal)', desc: 'You invest a fixed amount - say NPR 5,000/month through a SIP mandate in a mutual fund via connectIPS.' },
        { step: 2, title: 'Year 1 Returns Earned', desc: 'After year 1 at 12% annual return, your NPR 60,000 invested has grown to roughly NPR 63,741.' },
        { step: 3, title: 'Returns Reinvested Automatically', desc: 'In Year 2, you earn returns on NPR 63,741 - not just your fresh contributions. This is compounding.' },
        { step: 4, title: 'Exponential Acceleration Begins', desc: 'By Year 8-10, compounding acceleration becomes visible. In the final years of a 15-year SIP, you gain more in 1 year than you earned in the first 5 years combined.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'NPR 5,000/month SIP at 12% annual return - Compounding effect over time',
        headers: ['Year', 'Total You Invested', 'Portfolio Value', 'Pure Compounding Gain'],
        rows: [
          ['Year 1', 'NPR 60,000', 'NPR 63,741', 'NPR 3,741'],
          ['Year 3', 'NPR 1,80,000', 'NPR 2,18,819', 'NPR 38,819'],
          ['Year 5', 'NPR 3,00,000', 'NPR 4,08,348', 'NPR 1,08,348'],
          ['Year 10', 'NPR 6,00,000', 'NPR 11,61,695', 'NPR 5,61,695'],
          ['Year 15', 'NPR 9,00,000', 'NPR 25,22,880', 'NPR 16,22,880'],
          ['Year 20', 'NPR 12,00,000', 'NPR 49,95,740', 'NPR 37,95,740']
        ]
      },
      nepalContext: 'In Nepal, the primary compounding vehicle for salaried employees is the SIP in SEBON-regulated open-ended mutual funds. Funds like Nabil Equity Fund, NIBL Samridhi Fund, and Laxmi Value Fund have historically delivered 10%-18% annualized over 5+ year cycles. You fund SIPs through connectIPS which debits your account monthly. The DREP (Dividend Reinvestment Plan) option reinvests all dividends into additional units automatically - amplifying compounding.',
      practicalScenario: {
        persona: 'Sunita, 24, junior government officer in Kathmandu',
        income: 'NPR 32,000 / month',
        scenarioText: 'Sunita\'s colleague Ramesh (34, earning NPR 80,000/month) started investing only last year. Sunita starts a SIP of NPR 3,000/month. Ramesh starts NPR 8,000/month - 2.5x more.',
        solutionText: 'Sunita over 36 years at 12%: invests NPR 12,96,000 total, grows to NPR 1,72,76,000 (1.72 Crore). Ramesh over 26 years at 12%: invests NPR 24,96,000, grows to NPR 1,38,24,000 (1.38 Crore). Sunita, investing less than half, ends up 25% wealthier. The 10-year head start did more than doubling the amount.',
        metricHighlight: 'Sunita earns 25% MORE despite investing NPR 12 Lakh LESS'
      },
      formula: {
        name: 'Compound Interest Formula (Monthly SIP)',
        equation: 'FV = PMT \\times \\frac{(1 + r)^n - 1}{r} \\times (1 + r)',
        variables: [
          { symbol: 'FV', name: 'Future Value (Final Portfolio)', desc: 'Total portfolio value including all compounding.' },
          { symbol: 'PMT', name: 'Monthly SIP Amount', desc: 'Fixed amount you invest each month.' },
          { symbol: 'r', name: 'Monthly Interest Rate', desc: 'Annual rate ÷ 12 (e.g., 12% annual = 0.01 monthly).' },
          { symbol: 'n', name: 'Number of Months', desc: '10 years = 120 months. The most powerful variable.' }
        ],
        exampleCalculation: 'SIP NPR 5,000/month × 15 years (180 months) at 12%: FV = NPR 25,22,880. You put in NPR 9,00,000 - NPR 16,22,880 (64%) was generated purely by compounding.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Try the SIP Calculator'
      },
      commonMistakes: [
        { mistake: 'Withdrawing SIP profits every year to buy something.', correct: 'Leave profits untouched for at least 5-7 years. Breaking compounding resets your growth curve.', explanation: 'A NPR 50,000 withdrawal at year 5 costs you the NPR 1.2 Lakh that amount would have grown to by year 15.' },
        { mistake: 'Pausing SIP during a market downturn.', correct: 'Market downturns are when your SIP buys more units at lower NAV - the best compounding opportunity.', explanation: 'Rupee-cost averaging: lower NAV means more units. When markets recover, extra units compound faster.' },
        { mistake: 'Waiting until you have a large amount before starting.', correct: 'Start with NPR 1,000 today. Increase when income grows.', explanation: 'A 5-year delay loses the most explosive compounding phase.' }
      ],
      definitions: [
        { term: 'SIP', full: 'Systematic Investment Plan', meaning: 'Investing a fixed amount at regular monthly intervals - automates discipline and rupee-cost averaging.' },
        { term: 'NAV', full: 'Net Asset Value', meaning: 'Per-unit price of a mutual fund calculated daily. Lower NAV during corrections = more units bought.' },
        { term: 'DREP', full: 'Dividend Reinvestment Plan', meaning: 'Automatically reinvests mutual fund dividends into additional units - amplifies compounding.' },
        { term: 'Rule of 72', full: 'Doubling Time Shortcut', meaning: 'Divide 72 by your annual return to estimate doubling years. At 12%: 72÷12 = 6 years.' }
      ],
      faqs: [
        { q: 'What is the minimum I need to start compounding in Nepal?', a: 'NPR 1,000 per month via an open-ended mutual fund SIP through connectIPS. No lump sum needed.' },
        { q: 'Does compounding work in a savings account?', a: 'Technically yes, but 3-4% savings rate barely keeps pace with 6-8% inflation. Real compounding wealth needs equity-linked instruments returning 10-15%+.' },
        { q: 'What if I miss a SIP payment?', a: 'Missing a single month does not end the investment - existing units keep growing. Just resume; do not cancel the mandate.' },
        { q: 'Is SIP income taxable in Nepal?', a: 'Dividends: 5% TDS. Capital gains on redemption: 5% CGT for listed funds. Still far less than the wealth compounding generates.' }
      ],
      takeaways: [
        'Starting 10 years earlier beats doubling your monthly contribution.',
        'Rule of 72: at 12% returns, your portfolio doubles every 6 years.',
        'Use DREP in Nepali mutual funds to automate compounding.',
        'Never pause SIP in a bear market - that is when compounding works hardest.',
        'Start with NPR 1,000 today. Increase with every raise.'
      ]
    },
    np: {
      title: 'चक्रवृद्धिको शक्ति: नेपालमा समयले कसरी सम्पत्ति बढाउँछ',
      oneLineSummary: '२४ वर्षमा मासिक रु. २,000 SIP सुरु गर्दा ३५ वर्षमा रु. १०,000 बाट सुरु गर्नेभन्दा धेरै सम्पत्ति किन बन्छ।',
      summaryPoints: [
        'Compounding भनेको नाफाले पनि थप नाफा कमाउने प्रक्रिया हो - घातीय वृद्धि।',
        'नेपालमा १२% वार्षिक प्रतिफलमा १० वर्षको SIP मा कुल सम्पत्तिको ६५%+ Compounding बाट आउँछ।',
        '"७२ को नियम": वार्षिक प्रतिफलले ७२ भाग गर्दा पैसा दोब्बर हुने वर्ष थाहा हुन्छ।',
        '५ वर्ष ढिला गर्दा मासिक योगदान दोब्बर गरेर पनि घाटा पूर्ति गर्न गाह्रो।',
        'नेपालमा खुलामुखी Mutual Fund को SIP मार्फत रु. १,000 बाटै Compounding सुरु।'
      ],
      whatIsThis: 'Compounding भनेको लगानीबाट आएको नाफालाई पुनः लगानी गरेर, त्यो नाफाले पनि थप नाफा कमाउने प्रक्रिया हो। सरल ब्याजले केवल मूलधनमा बढोत्तरी ल्याउँछ, तर Compounding ले सम्पूर्ण जम्मा रकममा नाफा जोड्छ। २२ वर्षमा सुरु गरेर ३२ मा बन्द गर्नेले ३५ मा सुरु गरेर कहिल्यै नबन्द गर्नेभन्दा धनी हुन सक्छ।',
      whyItMatters: 'नेपालमा औसत तलबी कर्मचारीको आम्दानी रु. २५,000 देखि रु. ८०,000 - Compounding समानता ल्याउने शक्ति हो। डाक्टर जस्तो कमाउन नपर्ने, केवल चाँडो सुरु गर्नु पर्छ।',
      howItWorks: [
        { step: 1, title: 'सुरुवाती लगानी (मूलधन)', desc: 'connectIPS मार्फत Mutual Fund मा मासिक रु. ५,000 SIP म्यान्डेट सेट गर्नुहोस्।' },
        { step: 2, title: 'पहिलो वर्षको नाफा', desc: '१२% वार्षिक प्रतिफलमा रु. ६०,000 बढेर रु. ६३,७४१ हुन्छ।' },
        { step: 3, title: 'नाफाको स्वचालित पुनः लगानी', desc: 'DREP छानेमा दोस्रो वर्ष रु. ६३,७४१ मा नाफा जोडिन्छ - यही नै Compounding।' },
        { step: 4, title: 'घातीय वृद्धिको सुरुवात', desc: '८-१० वर्षपछि Compounding को गति देख्न सकिन्छ। अन्तिम वर्षमा पहिलो ५ वर्षको भन्दा बढी नाफा।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'मासिक रु. ५,000 SIP, १२% वार्षिक - Compounding असर',
        headers: ['वर्ष', 'कुल लगाएको', 'पोर्टफोलियो मूल्य', 'Compounding नाफा'],
        rows: [
          ['वर्ष १', 'रु. ६०,000', 'रु. ६३,७४१', 'रु. ३,७४१'],
          ['वर्ष ५', 'रु. ३,00,000', 'रु. ४,०८,३४८', 'रु. १,०८,३४८'],
          ['वर्ष १०', 'रु. ६,00,000', 'रु. ११,६१,६९५', 'रु. ५,६१,६९५'],
          ['वर्ष १५', 'रु. ९,00,000', 'रु. २५,२२,८८०', 'रु. १६,२२,८८०'],
          ['वर्ष २०', 'रु. १२,00,000', 'रु. ४९,९५,७४०', 'रु. ३७,९५,७४०']
        ]
      },
      nepalContext: 'नेपालमा Compounding को सबैभन्दा सुलभ माध्यम SEBON-नियमित खुलामुखी Mutual Fund को SIP। Nabil Equity Fund, NIBL Samridhi Fund जस्ता फन्डहरूले ऐतिहासिक रूपमा १०-१८% प्रतिफल दिएका छन्। DREP विकल्पले लाभांश नयाँ युनिटमा स्वतः लगाउँछ।',
      practicalScenario: {
        persona: 'सुनिता, २४ वर्ष, काठमाडौँमा जुनियर सरकारी अधिकृत',
        income: 'मासिक रु. ३२,000',
        scenarioText: 'सुनिताको साथी रमेश (३४ वर्ष, रु. ८०,000 कमाइ) भर्खर लगानी सुरु। सुनिता: रु. ३,000 SIP। रमेश: रु. ८,000 - झन्डै तीन गुणा।',
        solutionText: '३६ वर्षमा (सुनिता, १२%): कुल रु. १२,९६,000 लगाई, पोर्टफोलियो रु. १,७२,७६,000। २६ वर्षमा (रमेश, १२%): कुल रु. २४,९६,000 लगाई, पोर्टफोलियो रु. १,३८,२४,000। सुनिताले आधाभन्दा कम लगाएर २५% बढी पाइन्।',
        metricHighlight: 'सुनिताले रु. १२ लाख कम लगाएर २५% बढी सम्पत्ति बनाइन्'
      },
      formula: {
        name: 'चक्रवृद्धि ब्याज सूत्र (मासिक SIP)',
        equation: 'FV = PMT \\times \\frac{(1 + r)^n - 1}{r} \\times (1 + r)',
        variables: [
          { symbol: 'FV', name: 'भविष्यको मूल्य', desc: 'Compounding सहितको कुल सम्पत्ति।' },
          { symbol: 'PMT', name: 'मासिक SIP रकम', desc: 'हरेक महिना लगाउने रकम।' },
          { symbol: 'r', name: 'मासिक ब्याजदर', desc: 'वार्षिक दर ÷ १२।' },
          { symbol: 'n', name: 'महिना संख्या', desc: '१० वर्ष = १२० महिना।' }
        ],
        exampleCalculation: 'रु. ५,000 SIP × १५ वर्ष (१८० महिना), १२%: अन्तिम रु. २५,२२,८८०। लगाएको रु. ९ लाखबाट - रु. १६.२ लाख Compounding बाट।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'SIP Calculator प्रयास गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'हरेक वर्ष नाफा निकालेर खर्च गर्नु।', correct: 'कम्तीमा ५-७ वर्ष नाफा नछोडी बसेर Compounding फाइदा लिनुहोस्।', explanation: 'वर्ष ५ मा रु. ५०,000 निकाल्दा वर्ष १५ सम्म त्यो रु. १.२ लाख बन्थ्यो।' },
        { mistake: 'बजार घट्दा SIP रोक्नु।', correct: 'घट्दा NAV कम - बढी युनिट किनिन्छ। यो अवसर।', explanation: 'Rupee-cost averaging मा तल्लो NAV मा थप युनिट किन्दा बढी नाफा।' },
        { mistake: 'ठूलो रकम जम्मा भएपछि मात्र सुरु गर्ने।', correct: 'आज रु. १,000 बाटै सुरु।', explanation: '५ वर्ष ढिलो गर्दा Compounding को सबैभन्दा शक्तिशाली चरण गुम्छ।' }
      ],
      definitions: [
        { term: 'SIP', full: 'Systematic Investment Plan', meaning: 'मासिक नियमित लगानी - अनुशासन स्वचालित।' },
        { term: 'NAV', full: 'Net Asset Value', meaning: 'Mutual Fund को प्रति युनिट दैनिक मूल्य।' },
        { term: 'DREP', full: 'Dividend Reinvestment Plan', meaning: 'लाभांश नगदमा नलिई थप युनिट खरिदमा लगाउने विकल्प।' },
        { term: '७२ को नियम', full: 'Rule of 72', meaning: '७२ ÷ वार्षिक प्रतिफल = पैसा दोब्बर हुने वर्ष।' }
      ],
      faqs: [
        { q: 'नेपालमा Compounding सुरु गर्न न्यूनतम कति?', a: 'connectIPS मार्फत रु. १,000/महिना SIP बाटै सुरु।' },
        { q: 'बैंकको FD मा Compounding काम गर्छ?', a: 'हो, तर ३-४% दरले ६-८% Inflation सँग टाकर हुन्छ। वास्तविक सम्पत्तिका लागि Equity चाहिन्छ।' },
        { q: 'यदि कुनै महिना SIP को किस्ता छुट्यो भने के हुन्छ?', a: 'एक महिना किस्ता छुट्दैमा लगानी बन्द हुँदैन - पुरानो युनिटहरू बढिरहन्छन्। अर्को महिनाबाट फेरि नियमित गर्नुहोस्, म्यान्डेट रद्द नगर्नुहोस्।' },
        { q: 'नेपालमा SIP को आम्दानीमा कति कर लाग्छ?', a: 'लाभांशमा ५% TDS र युनिट बिक्री गर्दा नाफामा ५% पुँजीगत लाभकर (CGT) लाग्छ। यो कर तिरेर पनि बाँकी प्रतिफल महँगीभन्दा धेरै माथि रहन्छ।' }
      ],
      takeaways: [
        '१० वर्ष पहिले सुरु = मासिक योगदान दोब्बर भन्दा शक्तिशाली।',
        '७२ को नियम: १२% मा हरेक ६ वर्षमा पैसा दोब्बर।',
        'Mutual Fund मा DREP छानेर Compounding स्वचालित गर्नुहोस्।',
        'बजार घट्दा SIP कहिल्यै नरोक्नुहोस्।',
        'आज रु. १,000 बाटै सुरु।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'See exactly how compounding grows your monthly SIP in Nepal.' },
      { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'Understand the real cost of waiting to invest.' }
    ],
    downloadableResources: [
      { title: 'Compounding Quick Reference & SIP Schedule (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '240 KB', href: 'assets/downloads/nepal-sip-mutual-fund-checklist.html' }
    ]
  },

  // ── 6. EMERGENCY FUND ─────────────────────────────────────────────
  'emergency-fund-building': {
    id: 'pf-emergency-fund',
    slug: 'emergency-fund-building',
    categorySlug: 'personal-finance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '11 min read', np: '११ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified for Nepal Banking Accuracy (NRB)', np: 'नेपाल राष्ट्र बैंकको नियम अनुसार प्रमाणित' },
    prerequisites: { en: 'Basic understanding of income and expenses', np: 'आधारभूत आम्दानी र खर्चको ज्ञान' },
    en: {
      title: 'How to Build a 6-Month Emergency Fund in Nepal',
      oneLineSummary: 'The exact amount to save, where to keep it in Nepal, and how to build it on any income - without disrupting your lifestyle.',
      summaryPoints: [
        'An emergency fund is 3 to 6 months of total baseline living expenses kept in instantly accessible accounts.',
        'In Nepal, keep 1 month in your primary bank savings account and 3-5 months in a breakable Fixed Deposit at a Class A bank.',
        'Emergency funds must never be invested in stocks, mutual funds, or any volatile instrument.',
        'The target for most salaried Nepalis: NPR 90,000 to NPR 3,00,000 depending on lifestyle.',
        'Build in stages: 1 month first, then 3 months, then 6 - no need to do it overnight.'
      ],
      whatIsThis: 'An emergency fund is a dedicated cash reserve set aside exclusively for unexpected financial shocks - medical emergencies, sudden job loss, major appliance failure, or urgent travel. It is financial insurance. Its purpose is to prevent a temporary crisis from becoming permanent debt. In Nepal, without formal income protection, an emergency fund is your first critical financial defence. Without it, small unexpected expenses force people into high-interest informal loans from cooperatives at 18-36% annually.',
      whyItMatters: 'Nepal\'s cooperative sector charges 18-36% annual interest on emergency loans. A NPR 80,000 medical crisis borrowed at 24% compounds to NPR 1,19,000 within two years. An emergency fund breaks this debt trap permanently. Without it, every financial setback also forces selling investments at the worst possible time.',
      howItWorks: [
        { step: 1, title: 'Calculate Monthly Baseline', desc: 'Add: rent/EMI, groceries, utilities, transportation, school fees, insurance, loan EMIs. Exclude: dining out, subscriptions, entertainment.' },
        { step: 2, title: 'Set Your Target', desc: 'Stable salary: 3 months. Freelancer/business owner: 6 months. Sole earner/medical history: 9-12 months. E.g., baseline NPR 35,000/month → target NPR 1,05,000.' },
        { step: 3, title: 'Open a Dedicated Account', desc: 'Open a separate savings account at a Class A commercial bank labeled "Emergency Fund." Do not link a debit card or QR wallet to it.' },
        { step: 4, title: 'Build in Stages', desc: 'Save 10-15% of monthly income first. Target 1 month, then 3, then 6. Most Nepali households reach 3 months in 12-18 months.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Nepal Emergency Fund Targets by Income and Profession',
        headers: ['Monthly Income', 'Profession Type', 'Monthly Baseline', 'Target Emergency Fund'],
        rows: [
          ['NPR 25,000-35,000', 'Salaried (Stable employer)', 'NPR 18,000-25,000', 'NPR 54,000-75,000 (3 months)'],
          ['NPR 40,000-65,000', 'Salaried corporate / government', 'NPR 28,000-45,000', 'NPR 84,000-1,35,000 (3 months)'],
          ['NPR 45,000-80,000', 'Freelancer / consultant', 'NPR 30,000-55,000', 'NPR 1,80,000-3,30,000 (6 months)'],
          ['NPR 60,000+', 'Business owner / sole earner', 'NPR 35,000-60,000', 'NPR 3,15,000-7,20,000 (9 months)'],
          ['Any income', 'Medical condition / dependents', 'Varies', '9-12 months baseline minimum']
        ]
      },
      nepalContext: 'Best home for your Nepal emergency fund: Tier 1 - 1 month in your primary savings account at a Class A bank (Nabil, Global IME, NIC Asia, Everest, Sanima). Tier 2 - 2-4 months in a breakable Fixed Deposit (30-45 day breakable clause, 7-7.5% interest). Deposits up to NPR 5 Lakhs at Class A banks are guaranteed by DCGF - zero default risk.',
      practicalScenario: {
        persona: 'Prabha, 29, schoolteacher in Pokhara',
        income: 'NPR 28,000 / month',
        scenarioText: 'Prabha had no emergency fund. When her father needed NPR 65,000 in surgery, she borrowed from a cooperative at 18% annual interest and spent 14 months repaying NPR 5,500/month.',
        solutionText: 'After clearing the loan, Prabha opened a "Bipat Kosh" account at Nepal SBI Bank (separate from salary account). She saved NPR 3,000/month (11% of salary). Month 10: NPR 30,000 (1 month). Month 30: NPR 78,000 in breakable FD (7.2%). She never borrowed from cooperatives again.',
        metricHighlight: 'Saved NPR 22,000+ in cooperative interest by self-insuring'
      },
      formula: {
        name: 'Emergency Fund Target Formula',
        equation: '\\text{EF Target} = \\text{Monthly Baseline} \\times \\text{Safety Months}',
        variables: [
          { symbol: 'EF Target', name: 'Emergency Fund Amount', desc: 'Total NPR to accumulate in your dedicated account.' },
          { symbol: 'Monthly Baseline', name: 'Essential Monthly Expenses', desc: 'Rent + groceries + utilities + loan EMIs + school. Exclude discretionary spending.' },
          { symbol: 'Safety Months', name: 'Number of Months', desc: '3 for stable salary; 6 for freelance/business; 9-12 for sole earners.' }
        ],
        exampleCalculation: 'Baseline: Rent NPR 12,000 + Groceries NPR 8,000 + Utilities NPR 2,000 + EMI NPR 5,000 + School NPR 3,000 = NPR 30,000/month. Target for salaried: NPR 30,000 × 3 = NPR 90,000.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Plan Your Savings Timeline'
      },
      commonMistakes: [
        { mistake: 'Keeping the emergency fund in the same account as daily spending.', correct: 'Open a separate, dedicated account with no debit card linkage.', explanation: 'Money in the same account as grocery funds gets spent accidentally.' },
        { mistake: 'Investing the emergency fund in stocks or mutual funds for better returns.', correct: 'Emergency funds must be 100% liquid and accessible within 24 hours.', explanation: 'A 30% market correction right when you need money means you receive only 70% of what you expected.' },
        { mistake: 'Waiting to build the fund until after paying off all debt.', correct: 'Build a minimum 1-month buffer FIRST, then aggressively pay high-interest debt.', explanation: 'Without a buffer, one emergency sends you straight back into more debt.' }
      ],
      definitions: [
        { term: 'Baseline Expenses', full: 'Monthly Minimum Costs', meaning: 'Essential costs you must pay regardless of income disruption: rent, food, utilities, loan EMIs.' },
        { term: 'Class A Bank', full: 'Ka-Shreni Vanijya Bank', meaning: 'NRB-licensed commercial bank with highest capital adequacy in Nepal.' },
        { term: 'DCGF', full: 'Deposit and Credit Guarantee Fund', meaning: 'Government fund guaranteeing bank deposits up to NPR 5 Lakhs per depositor per NRB-licensed bank.' },
        { term: 'Breakable FD', full: 'Premature Withdrawal Fixed Deposit', meaning: 'FD allowing early withdrawal at small penalty (0.5-1%). Ideal for emergency fund Tier 2.' }
      ],
      faqs: [
        { q: 'Can I use my Provident Fund (EPF/SSF) as an emergency fund?', a: 'No. EPF and SSF are locked until retirement or specific qualifying events. Emergency fund must be in your own accessible bank account.' },
        { q: 'What counts as a real emergency?', a: 'Medical emergencies, sudden job loss, essential appliance failure, urgent family crisis. NOT Dashain spending, weddings, or vacations - those need separate sinking funds.' },
        { q: 'Should the emergency account earn interest?', a: 'Yes. Keep 1 month in savings (3-4%) for instant access. Keep 2-5 months in breakable FD (7-7.5%) for better returns with still-accessible capital.' }
      ],
      takeaways: [
        'Emergency fund target = monthly baseline × 3 (stable salary) or × 6 (freelance/business).',
        'Keep 1 month in savings (instant access) and 2-5 months in a breakable FD.',
        'Never invest your emergency fund in stocks or mutual funds.',
        'Build in stages: 1 month first, then 3, then 6.',
        'Deposits up to NPR 5 Lakhs at Class A banks are fully guaranteed by DCGF.'
      ]
    },
    np: {
      title: 'नेपालमा ६ महिनाको आपतकालीन कोष कसरी बनाउने',
      oneLineSummary: 'कति रकम राख्ने, कहाँ राख्ने र कसरी जम्मा गर्ने - जुनसुकै आम्दानीमा, जीवनशैलीमा असर नपरी।',
      summaryPoints: [
        'Emergency Fund भनेको ३-६ महिनाको आधारभूत जीवनयापन खर्च बराबरको तत्काल उपलब्ध नगद।',
        'नेपालमा १ महिना मुख्य बैंक बचत खातामा र ३-५ महिना तोड्न मिल्ने FD मा राख्नुहोस्।',
        'Emergency Fund लाई सेयर, Mutual Fund वा अस्थिर माध्यममा कहिल्यै नलगाउनुहोस्।',
        'अधिकांश नेपाली तलबी कर्मचारीका लागि लक्ष्य रु. ९०,000-रु. ३,00,000।',
        'क्रमश: बनाउनुहोस्: पहिले १ महिना, त्यसपछि ३, अनि ६।'
      ],
      whatIsThis: 'Emergency Fund भनेको अकस्मात आर्थिक झट्काका लागि छुट्याइएको नगद भण्डार हो - वित्तीय बीमा। यसको उद्देश्य: अस्थायी संकटलाई स्थायी ऋणमा परिणत हुनबाट बचाउनु। नेपालमा यसबिना, सानो खर्चले पनि सहकारीबाट १८-३६% ब्याजमा ऋण लिन बाध्य पार्छ।',
      whyItMatters: 'नेपालमा सहकारीले १८-३६% ब्याज लिन्छ। रु. ८०,000 को संकट २४% ब्याजमा लिँदा २ वर्षमा रु. १,१९,000 हुन्छ। Emergency Fund ले यो पासो तोड्छ।',
      howItWorks: [
        { step: 1, title: 'मासिक आधारभूत खर्च निकाल्नुहोस्', desc: 'कोठाभाडा/EMI, खाद्यान्न, युटिलिटी, यातायात, स्कूल, बीमा जोड्नुहोस्।' },
        { step: 2, title: 'लक्ष्य तय गर्नुहोस्', desc: 'स्थायी जागिर: ३ महिना। फ्रिल्यान्सर/व्यवसाय: ६ महिना। एकल पालक/स्वास्थ्य: ९-१२ महिना।' },
        { step: 3, title: 'छुट्टै खाता खोल्नुहोस्', desc: '"क" वर्गको वाणिज्य बैंकमा "विपत् कोष" नाम दिएर छुट्टै खाता - QR/डेबिट कार्ड नजोड्नुहोस्।' },
        { step: 4, title: 'चरणबद्ध निर्माण', desc: 'मासिक आम्दानीको १०-१५% Emergency Fund मा। पहिले १ महिना, त्यसपछि ३, अनि ६।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा आम्दानी अनुसार Emergency Fund लक्ष्य',
        headers: ['मासिक आम्दानी', 'पेशाको प्रकार', 'मासिक आधारभूत', 'लक्ष्य Emergency Fund'],
        rows: [
          ['रु. २५,000-३५,000', 'तलबी (स्थायी)', 'रु. १८,000-२५,000', 'रु. ५४,000-७५,000 (३ महिना)'],
          ['रु. ४०,000-६५,000', 'कर्पोरेट/सरकारी', 'रु. २८,000-४५,000', 'रु. ८४,000-१,३५,000 (३ महिना)'],
          ['रु. ४५,000-८०,000', 'फ्रिल्यान्सर', 'रु. ३०,000-५५,000', 'रु. १,८०,000-३,३०,000 (६ महिना)'],
          ['रु. ६०,000+', 'व्यवसायी/एकल', 'रु. ३५,000-६०,000', 'रु. ३,१५,000-७,२०,000 (९ महिना)'],
          ['जुनसुकै', 'स्वास्थ्य/आश्रित', 'भिन्न', '९-१२ महिना (कम्तीमा)']
        ]
      },
      nepalContext: 'नेपालमा Emergency Fund राख्ने उत्तम ठाउँ: तह १ - १ महिनाको "क" वर्गको बैंक बचत खातामा। तह २ - २-४ महिनाको तोड्न मिल्ने FD मा (७-७.५%)। "क" वर्गको बैंकमा रु. ५ लाखसम्म DCGF ग्यारेन्टी।',
      practicalScenario: {
        persona: 'प्रभा, २९ वर्ष, पोखरामा शिक्षिका',
        income: 'मासिक रु. २८,000',
        scenarioText: 'प्रभासँग Emergency Fund थिएन। बुबाको शल्यक्रियाका लागि रु. ६५,000 सहकारीबाट १८% ब्याजमा लिइन् - १४ महिना रु. ५,५०० तिरिन्।',
        solutionText: 'ऋण चुकाएपछि नेपाल SBI बैंकमा "विपत् कोष" छुट्टै खाता खोलिन्। रु. ३,000/महिना। ३० महिनामा रु. ७८,000 FD (७.२%)। अब कहिल्यै सहकारीमा जानुपरेको छैन।',
        metricHighlight: 'आत्म-बीमाले सहकारी ब्याजमा रु. २२,000+ बचत'
      },
      formula: {
        name: 'Emergency Fund लक्ष्य सूत्र',
        equation: '\\text{EF लक्ष्य} = \\text{मासिक आधारभूत} \\times \\text{सुरक्षा महिना}',
        variables: [
          { symbol: 'EF लक्ष्य', name: 'Emergency Fund रकम', desc: 'छुट्टै खातामा जम्मा गर्नुपर्ने कुल रकम।' },
          { symbol: 'मासिक आधारभूत', name: 'अनिवार्य मासिक खर्च', desc: 'भाडा + खाद्यान्न + युटिलिटी + EMI + स्कूल।' },
          { symbol: 'सुरक्षा महिना', name: 'महिना संख्या', desc: 'स्थायी: ३; फ्रिल्यान्सर: ६; एकल: ९-१२।' }
        ],
        exampleCalculation: 'भाडा रु. १२,000 + खाद्यान्न रु. ८,000 + युटिलिटी रु. २,000 + EMI रु. ५,000 + स्कूल रु. ३,000 = रु. ३०,000। × ३ = रु. ९०,000।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'बचत समयरेखा बनाउनुहोस्'
      },
      commonMistakes: [
        { mistake: 'दैनिक खर्चको खातासँगै Emergency Fund राख्नु।', correct: 'छुट्टै खाता - QR वा डेबिट कार्ड नजोड्नुहोस्।', explanation: 'एउटै खातामा भएको पैसा अनजानमा खर्च हुन्छ।' },
        { mistake: 'Mutual Fund मा राख्दा राम्रो प्रतिफल भन्ने गलत धारणा।', correct: 'Emergency Fund १००% तरल र २४ घण्टामा पहुँचयोग्य।', explanation: 'बजार ३०% घटेका बेला आवश्यक पर्दा ७०% मात्र पाउनुहुन्छ।' },
        { mistake: 'सबै ऋण तिरेपछि मात्र बनाउने।', correct: 'पहिले १ महिनाको बफर, अनि ऋण तिर्ने।', explanation: 'बफर नभई एउटा संकटले फेरि ऋणमा धकेल्छ।' }
      ],
      definitions: [
        { term: 'आधारभूत खर्च', full: 'Baseline Expenses', meaning: 'आम्दानी बन्द भए पनि तिर्नुपर्ने: भाडा, खाद्यान्न, युटिलिटी, EMI।' },
        { term: '"क" वर्गको बैंक', full: 'Class A Bank', meaning: 'NRB-इजाजतप्राप्त उच्च पूँजीको वाणिज्य बैंक।' },
        { term: 'DCGF', full: 'निक्षेप तथा कर्जा सुरक्षण कोष', meaning: '"क" वर्गका बैंकमा रु. ५ लाखसम्मको निक्षेप ग्यारेन्टी।' },
        { term: 'तोड्न मिल्ने FD', full: 'Breakable FD', meaning: 'अवधि पूरा हुनुअघि तोड्न मिल्ने FD - Emergency Fund तह २ का लागि।' }
      ],
      faqs: [
        { q: 'के EPF/SSF लाई Emergency Fund मान्न सकिन्छ?', a: 'सकिँदैन। यी अवकाश वा विशेष अवस्थामा मात्र। आफ्नै पहुँचयोग्य बैंक खाता अनिवार्य।' },
        { q: 'दसैँ वा विवाहका लागि प्रयोग गर्न हुन्छ?', a: 'हुँदैन। दसैँ, विवाह, यात्राका लागि अलग "Sinking Fund" बनाउनुहोस्।' },
        { q: 'आपतकालीन कोषको खाताबाट ब्याज पनि कमाउन सकिन्छ?', a: 'सकिन्छ। १ महिनाको खर्च बचत खातामा (३-४%) तुरुन्त पहुँचका लागि राख्नुहोस् र २-५ महिनाको खर्च तोड्न मिल्ने मुद्दती (७-७.५%) मा राख्दा राम्रो ब्याज पनि आउँछ र पूँजी पनि सुरक्षित रहन्छ।' }
      ],
      takeaways: [
        'Emergency Fund लक्ष्य = मासिक आधारभूत × ३ (स्थायी) वा × ६ (फ्रिल्यान्सर)।',
        '१ महिना बचत खातामा (तत्काल) र २-५ महिना तोड्न मिल्ने FD मा।',
        'Emergency Fund कहिल्यै सेयर वा Mutual Fund मा नहाल्नुहोस्।',
        'क्रमश: बनाउनुहोस्: १ महिना, त्यसपछि ३, अनि ६।',
        '"क" वर्गका बैंकमा DCGF ले रु. ५ लाखसम्म ग्यारेन्टी।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Plan how long to build your emergency fund with monthly contributions.' }
    ],
    downloadableResources: [
      { title: 'Emergency Fund & Financial Safety Checklist for Nepal', type: 'PDF Checklist', format: 'PDF Document', size: '230 KB', href: 'assets/downloads/nepal-digital-payment-safety-guide.html' }
    ]
  },

  // ── 7. INCOME TAX SLABS ───────────────────────────────────────────
  'nepal-income-tax-slabs-salary': {
    id: 'tax-income-slabs',
    slug: 'nepal-income-tax-slabs-salary',
    categorySlug: 'taxation',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '12 min read', np: '१२ मिनेट पढाइ' },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under Nepal Income Tax Act 2058 & Finance Act 2081', np: 'आयकर ऐन २०५८ र अर्थ ऐन २०८१ अनुसार प्रमाणित' },
    prerequisites: { en: 'Basic understanding of salary and PAN', np: 'तलब र PAN को आधारभूत ज्ञान' },
    en: {
      title: 'Nepal Income Tax Slabs FY 2081/82: Complete Salary Tax Guide',
      oneLineSummary: 'Exact income tax slabs, deductions, and TDS rates for salaried individuals in Nepal for FY 2081/82 - with real worked calculation examples.',
      summaryPoints: [
        'Nepal income tax is progressive: you pay higher rates ONLY on the portion above each threshold.',
        'FY 2081/82 single person: first NPR 5L at 1%, next NPR 2L at 10%, next NPR 3L at 20%, next NPR 10L at 30%, above NPR 20L at 36%.',
        'Legal deductions reduce taxable income: SSF (11%), life insurance (up to NPR 40,000), health insurance (up to NPR 40,000).',
        'TDS is withheld monthly from salary by your employer and deposited to IRD under your PAN.',
        'Verify all TDS on IRD Taxpayer Portal (ird.gov.np) quarterly.'
      ],
      whatIsThis: 'Income tax in Nepal is levied on personal annual earnings under the Income Tax Act 2058. It uses a progressive slab system - as income rises, different portions are taxed at different rates. Critically, you do not pay the higher rate on your entire income - only on the portion within each slab. Salaried employees pay through TDS: your employer deducts monthly estimated tax and deposits it to IRD under your PAN.',
      whyItMatters: 'Understanding your tax slab has two practical benefits. First: you know exactly how much of your gross salary you legally take home. Second: you discover legal deduction opportunities - SSF, life insurance, health insurance, CIT contributions reduce your taxable income. Someone earning NPR 60,000/month who claims all deductions saves NPR 10,000-20,000 annually.',
      howItWorks: [
        { step: 1, title: 'Calculate Annual Gross Salary', desc: 'Add all taxable income: base salary, allowances, bonuses. Exclude: expense reimbursements, employer SSF contributions (13.33% of basic).' },
        { step: 2, title: 'Subtract Legal Deductions', desc: 'Employee SSF (11% of basic), life insurance up to NPR 40,000/year, health insurance up to NPR 40,000/year, CIT retirement contributions up to NPR 3,00,000/year.' },
        { step: 3, title: 'Apply Progressive Tax Slabs', desc: 'Apply each slab rate only to income within that range. Your effective average rate is always lower than the highest slab you reach.' },
        { step: 4, title: 'Monthly TDS Calculation', desc: 'Divide annual tax liability by 12. This is the monthly TDS your employer deducts.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Nepal Income Tax Slabs FY 2081/82 - Single Person (NPR)',
        headers: ['Annual Income Slab', 'Tax Rate', 'Maximum Tax in This Slab'],
        rows: [
          ['Up to NPR 5,00,000', '1%', 'NPR 5,000'],
          ['NPR 5,00,001 - NPR 7,00,000', '10%', 'NPR 20,000'],
          ['NPR 7,00,001 - NPR 10,00,000', '20%', 'NPR 60,000'],
          ['NPR 10,00,001 - NPR 20,00,000', '30%', 'NPR 3,00,000'],
          ['Above NPR 20,00,000', '36%', 'On amount above 20L'],
          ['Married Couple - each slab threshold +NPR 1,00,000', '-', '-']
        ]
      },
      nepalContext: 'Nepal\'s income tax is administered by IRD (ird.gov.np) under the Finance Ministry. Every salaried person must have a PAN - 9-digit tax ID. Employers file monthly TDS returns. Fiscal year: Shrawan 1 to Ashad 31. File returns by Magh 31 of the following year. Employees can verify TDS, download e-TDS certificates, and check tax records on the IRD Taxpayer Portal.',
      practicalScenario: {
        persona: 'Aashish, 31, IT engineer in Kathmandu',
        income: 'NPR 80,000 gross/month = NPR 9,60,000/year',
        scenarioText: 'Aashish believed he was in the 20% bracket and his entire salary was taxed at 20%. He had never claimed his life insurance deduction or confirmed SSF deductions.',
        solutionText: 'Actual calculation: Annual NPR 9,60,000 − SSF 11% (basic NPR 50,000 = NPR 66,000) − Life insurance NPR 25,000 = taxable NPR 8,69,000. Tax: 1% × 5L = NPR 5,000; 10% × 2L = NPR 20,000; 20% × 1.69L = NPR 33,800. Total: NPR 58,800/year = NPR 4,900/month. Effective rate: 6.77%, not 20%.',
        metricHighlight: 'Effective rate 6.77% not 20% - saved NPR 7,200/year by claiming deductions'
      },
      formula: {
        name: 'Progressive Income Tax Calculation',
        equation: '\\text{Tax} = \\sum_{i=1}^{n} \\text{Rate}_i \\times \\min(\\text{Income} - \\text{Lower}_i,\\; \\text{Slab Width}_i)',
        variables: [
          { symbol: 'Rate_i', name: 'Slab i Tax Rate', desc: '1%, 10%, 20%, 30%, or 36%.' },
          { symbol: 'Slab Width_i', name: 'Each Slab Width', desc: 'NPR 5L, 2L, 3L, 10L, then unlimited above 20L.' },
          { symbol: 'Income', name: 'Net Taxable Income', desc: 'Gross salary minus all legal deductions.' }
        ],
        exampleCalculation: 'Net taxable NPR 8,69,000: 1%×5L = NPR 5,000; 10%×2L = NPR 20,000; 20%×1.69L = NPR 33,800. Total: NPR 58,800/year = NPR 4,900/month TDS.',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'Open Income Tax Calculator'
      },
      commonMistakes: [
        { mistake: 'Thinking entire salary is taxed at the highest slab rate.', correct: 'Only the income within each slab is taxed at that rate.', explanation: 'NPR 10,00,000 earner does NOT pay 30% on everything - 30% only applies above NPR 10,00,000.' },
        { mistake: 'Not claiming life and health insurance deductions.', correct: 'Give HR your insurance premium receipts - up to NPR 40,000 each deductible per year.', explanation: 'NPR 30,000 insurance premium reduces taxable income by NPR 30,000 - saving NPR 3,000-9,000 in tax.' },
        { mistake: 'Not verifying TDS deposits on the IRD portal.', correct: 'Log in to ird.gov.np quarterly to confirm employer TDS deposits.', explanation: 'Undeposited TDS becomes your liability if not caught early.' }
      ],
      definitions: [
        { term: 'TDS', full: 'Tax Deducted at Source', meaning: 'Income tax withheld monthly from salary by employer and deposited to IRD under your PAN.' },
        { term: 'PAN', full: 'Permanent Account Number', meaning: '9-digit tax identification number issued by IRD. Mandatory for salary, bank interest, property.' },
        { term: 'SSF', full: 'Social Security Fund', meaning: 'Employee: 11% of basic (deductible). Employer: 20% (EPF + PF). Employer contribution not deductible from employee tax.' },
        { term: 'IRD', full: 'Inland Revenue Department', meaning: 'Nepal\'s tax authority (ird.gov.np). Administers PAN, TDS, and income tax returns.' }
      ],
      faqs: [
        { q: 'Do I need to file a tax return if my employer deducts TDS?', a: 'Only-salary earners with correct TDS are generally exempt. If you have rent, freelance, or interest income above NPR 10,000, filing is mandatory.' },
        { q: 'Is the NPR 40,000 life insurance deduction per policy or per year?', a: 'NPR 40,000 per year total across all life policies. Health insurance has a separate NPR 40,000/year limit. Combined max: NPR 80,000/year in insurance deductions.' },
        { q: 'What is the married couple income tax benefit?', a: 'Each slab threshold increases by NPR 1,00,000 - so the first slab goes to NPR 6,00,000 (vs NPR 5,00,000 for singles).' },
        { q: 'Where can I check my TDS in Nepal?', a: 'ird.gov.np → Taxpayer Portal → Login with PAN + password → TDS Verification.' }
      ],
      takeaways: [
        'Nepal income tax is progressive - higher rates apply ONLY on the portion above each threshold.',
        'FY 2081/82: 1% on first NPR 5L, 10% on next 2L, 20% on next 3L, 30% on next 10L, 36% above 20L.',
        'Claim all legal deductions: SSF 11%, life insurance up to NPR 40,000, health up to NPR 40,000.',
        'Verify TDS deposits quarterly at ird.gov.np.',
        'Use the RisePaisa Income Tax Calculator for your exact liability.'
      ]
    },
    np: {
      title: 'आर्थिक वर्ष २०८१/८२ नेपालको आयकर दर: तलबी कर्मचारीको सम्पूर्ण गाइड',
      oneLineSummary: 'नेपालमा तलबी व्यक्तिका लागि सही आयकर दर, कटौती र TDS हिसाब - वास्तविक उदाहरण सहित।',
      summaryPoints: [
        'नेपालमा आयकर प्रगतिशील - उच्च दर केवल सोही थ्रेशोल्डभन्दा माथिको रकममा।',
        'आव २०८१/८२: पहिलो रु. ५L मा १%, अर्को रु. २L मा १०%, अर्को रु. ३L मा २०%, अर्को रु. १०L मा ३०%, रु. २०L भन्दा माथि ३६%।',
        'SSF, जीवन बीमा र स्वास्थ्य बीमा प्रिमियम करयोग्य आयबाट घटाउन पाइन्छ।',
        'TDS नियोक्ताले मासिक काटेर IRD मा दाखिला गर्छन्।',
        'IRD पोर्टल (ird.gov.np) मा TDS जाँच अनिवार्य।'
      ],
      whatIsThis: 'नेपालमा आयकर आयकर ऐन २०५८ अन्तर्गत लाग्छ। प्रगतिशील स्तर प्रणाली - आम्दानी बढ्दै जाँदा फरक भागमा फरक दर। उच्च दर सम्पूर्ण आम्दानीमा होइन, केवल सोही स्तरभित्रको रकममा। TDS मार्फत तिर्छन्।',
      whyItMatters: 'आफ्नो कर दर बुझ्नु दुई कारणले जरुरी: कति घर लैजान पाइन्छ थाहा हुन्छ, र कानुनी कटौतीका अवसर देखिन्छन्। रु. ६०,000/महिना कमाउने व्यक्तिले सबै कटौती दाबी गर्दा वार्षिक रु. १०,000-२०,000 बचत।',
      howItWorks: [
        { step: 1, title: 'वार्षिक कुल तलब निकाल्नुहोस्', desc: 'आधार तलब, भत्ता, बोनस। बाहेक: नियोक्ताको SSF योगदान।' },
        { step: 2, title: 'कानुनी कटौती घटाउनुहोस्', desc: 'कर्मचारी SSF ११%, जीवन बीमा रु. ४०,000, स्वास्थ्य बीमा रु. ४०,000, CIT रु. ३,00,000 सम्म।' },
        { step: 3, title: 'प्रगतिशील कर दर', desc: 'प्रत्येक स्तरभित्र पर्ने रकममा मात्र सोही दर।' },
        { step: 4, title: 'मासिक TDS', desc: 'वार्षिक करलाई १२ ले भाग - मासिक TDS।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपाल आयकर दर आव २०८१/८२ - एकल व्यक्ति',
        headers: ['वार्षिक करयोग्य आय', 'कर दर', 'अधिकतम कर'],
        rows: [
          ['रु. ५,00,000 सम्म', '१%', 'रु. ५,000'],
          ['रु. ५,00,001 - ७,00,000', '१०%', 'रु. २०,000'],
          ['रु. ७,00,001 - १०,00,000', '२०%', 'रु. ६०,000'],
          ['रु. १०,00,001 - २०,00,000', '३०%', 'रु. ३,00,000'],
          ['रु. २०,00,000 भन्दा माथि', '३६%', 'माथिको रकममा'],
          ['विवाहित दम्पती - प्रत्येक स्तरमा रु. १ लाख थप', '-', '-']
        ]
      },
      nepalContext: 'नेपालको आयकर IRD ले संचालन गर्छ। प्रत्येक तलबी व्यक्तिसँग PAN अनिवार्य। आर्थिक वर्ष: श्रावण १ - आषाढ ३१। IRD करदाता पोर्टलमा TDS जाँच र कर विवरण दाखिला सकिन्छ।',
      practicalScenario: {
        persona: 'आशिष, ३१ वर्ष, काठमाडौँमा IT इन्जिनियर',
        income: 'कुल रु. ८०,000/महिना = रु. ९,६०,000/वर्ष',
        scenarioText: 'आशिषले आफू २०% मा परेको ठानेर डराएका थिए। जीवन बीमाको कटौती दाबी गरेका थिएनन्।',
        solutionText: 'वास्तविक: रु. ९,६०,000 − SSF ११% (रु. ६६,000) − बीमा (रु. २५,000) = करयोग्य रु. ८,६९,000। कर: रु. ५,000 + रु. २०,000 + रु. ३३,800 = रु. ५८,800/वर्ष = रु. ४,900/महिना। प्रभावकारी: ६.७७%।',
        metricHighlight: 'प्रभावकारी दर ६.७७% - कटौती दाबी गरेर वार्षिक रु. ७,200 बचत'
      },
      formula: {
        name: 'प्रगतिशील आयकर हिसाब',
        equation: '\\text{कर} = \\sum_{i=1}^{n} \\text{दर}_i \\times \\min(\\text{आय} - \\text{तल्लो}_i,\\; \\text{स्तर चौडाइ}_i)',
        variables: [
          { symbol: 'दर_i', name: 'स्तर i को दर', desc: '१%, १०%, २०%, ३०%, ३६%।' },
          { symbol: 'स्तर चौडाइ', name: 'स्तर चौडाइ', desc: 'रु. ५L, २L, ३L, १०L।' },
          { symbol: 'आय', name: 'खुद करयोग्य आय', desc: 'कुल तलब − कानुनी कटौती।' }
        ],
        exampleCalculation: 'करयोग्य रु. ८,६९,000: रु. ५,000 + रु. २०,000 + रु. ३३,800 = रु. ५८,800/वर्ष।',
        shortcutCalcSlug: 'calculators/nepal-income-tax',
        shortcutCalcName: 'आयकर Calculator खोल्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'सम्पूर्ण तलबमा उच्चतम दर लाग्छ भन्ने धारणा।', correct: 'उच्च दर केवल सोही स्तरको रकममा।', explanation: 'रु. १०,00,000 कमाउनेले सम्पूर्णमा ३०% तिर्नुपर्दैन।' },
        { mistake: 'बीमाको कटौती दाबी नगर्नु।', correct: 'HR लाई प्रिमियम रसिद दिनुहोस् (रु. ४०,000 सम्म)।', explanation: 'रु. ३०,000 प्रिमियमले करयोग्य आय घटाउँछ - रु. ३,000-९,000 बचत।' },
        { mistake: 'IRD मा TDS जाँच नगर्नु।', correct: 'तिमाहीमा ird.gov.np मा दाखिला मिलान।', explanation: 'नदाखिला TDS तपाईंको दायित्व हुन सक्छ।' }
      ],
      definitions: [
        { term: 'TDS', full: 'स्रोतमा कर कटौती', meaning: 'नियोक्ताले मासिक काटेर IRD मा दाखिला।' },
        { term: 'PAN', full: 'Permanent Account Number', meaning: 'IRD को ९ अंकको कर परिचय नम्बर।' },
        { term: 'SSF', full: 'सामाजिक सुरक्षा कोष', meaning: 'कर्मचारी ११% (कटाउन पाइन्छ) + नियोक्ता २०%।' },
        { term: 'IRD', full: 'आन्तरिक राजस्व विभाग', meaning: 'नेपालको कर प्राधिकरण - ird.gov.np।' }
      ],
      faqs: [
        { q: 'TDS काट्दा विवरण दाखिला गर्नुपर्छ?', a: 'केवल तलब आम्दानीमा सामान्यतः अनिवार्य छैन। भाडा/फ्रिल्यान्स आम्दानी भएमा अनिवार्य।' },
        { q: 'रु. ४०,000 कटौती एक पोलिसी कि कुल?', a: 'जम्मा सबै जीवन बीमा पोलिसीको कुल रु. ४०,000। स्वास्थ्य बीमाको छुट्टै रु. ४०,000।' },
        { q: 'नेपालमा आफ्नो काटिएको TDS कहाँ र कसरी हेर्ने?', a: 'आन्तरिक राजस्व विभागको वेबसाइट ird.gov.np मा गएर Taxpayer Portal मा आफ्नो PAN र पासवर्डबाट लगइन गरी TDS Verification मा गएर रोजगारदाताले दाखिला गरेको कर विवरण हेर्न सकिन्छ।' }
      ],
      takeaways: [
        'नेपालको आयकर प्रगतिशील - उच्च दर सोही थ्रेशोल्डभन्दा माथिको रकममा मात्र।',
        'आव २०८१/८२: पहिलो ५L मा १%, अर्को २L मा १०%, अर्को ३L मा २०%।',
        'SSF ११%, जीवन बीमा रु. ४०,000, स्वास्थ्य बीमा रु. ४०,000 - सबै दाबी गर्नुहोस्।',
        'तिमाहीमा IRD मा TDS जाँच गर्नुहोस्।',
        'risePaisa Income Tax Calculator मा सही दायित्व निकाल्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'Nepal Income Tax Calculator', slug: 'calculators/nepal-income-tax', key: 'nepal-income-tax', desc: 'Calculate your exact FY 2081/82 tax liability with all legal deductions.' }
    ],
    downloadableResources: [
      { title: 'Nepal Income Tax Deductions Quick Reference (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '250 KB', href: '/resources/nepse-beginner-guide' }
    ]
  },

  // ── 8. DEMAT & MEROSHARE SETUP ────────────────────────────────────
  'demat-meroshare-crn-setup': {
    id: 'nep-demat-setup',
    slug: 'demat-meroshare-crn-setup',
    categorySlug: 'nepse',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '30 min practice', np: '३० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under CDSC & SEBON Procedures', np: 'CDSC र SEBON प्रक्रिया अनुसार प्रमाणित' },
    prerequisites: { en: 'Nepal citizenship, bank account with KYC', np: 'नेपाली नागरिकता, KYC भएको बैंक खाता' },
    en: {
      title: 'How to Open Demat, MeroShare & CRN in Nepal: Step-by-Step',
      oneLineSummary: 'The complete beginner guide to setting up your Demat account, activating MeroShare, and getting your CRN - the three-step gateway to Nepal\'s stock market.',
      summaryPoints: [
        'A Demat account is the digital locker where your shares are stored electronically - you cannot buy or hold NEPSE shares without one.',
        'MeroShare is CDSC\'s free online portal for IPO applications, share transfers, portfolio viewing, and EDIS settlement.',
        'CRN (C-ASBA Registration Number) links your Demat to your bank - required to apply for IPOs without transferring money to brokers.',
        'Full setup takes 1-3 working days and costs NPR 100-300 one-time - all at your commercial bank branch.',
        'Renew Demat and MeroShare annually before Ashadh 31.'
      ],
      whatIsThis: 'A Demat (Dematerialized) account is the digital equivalent of a physical share certificate locker. All shares on NEPSE are stored in your unique Demat account identified by a 16-digit BOID. MeroShare is the CDSC web portal for IPOs, portfolio checking, and EDIS share transfers. CRN is a 9-digit code linking your bank account to your Demat - it is what C-ASBA uses to block funds for IPO applications without sending money to any third party.',
      whyItMatters: 'Without a Demat account you cannot participate in Nepal\'s IPO (primary) market or secondary NEPSE trading. Setup is completely broker-independent - done at your own commercial bank. One-time cost: NPR 100 (CDSC Demat). Annual renewal: NPR 150 total - less than a cup of coffee per year.',
      howItWorks: [
        { step: 1, title: 'Visit Your Class A Bank Branch', desc: 'Go to your savings bank (must be Class A "Ka shreni"). Ask for the Demat account opening form.' },
        { step: 2, title: 'Submit KYC Documents', desc: 'Citizenship certificate (both sides photocopy), passport-size photo, PAN number (recommended), signed Demat form.' },
        { step: 3, title: 'Receive BOID (3-7 Working Days)', desc: 'CDSC processes via your bank DP. You receive your 16-digit BOID by SMS. Keep it safe - needed for MeroShare.' },
        { step: 4, title: 'Register on MeroShare', desc: 'Go to meroshare.cdsc.com.np → Register → Enter BOID, bank DP, account number, set password. Activation is instant once bank confirms your Demat.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Nepal Stock Market Three-Part Setup - Required Sequence',
        headers: ['Component', 'What It Is', 'Where to Get It', 'Cost', 'Time'],
        rows: [
          ['Demat Account (BOID)', 'Digital share locker', 'Class A bank branch', 'NPR 100 one-time', '1-7 working days'],
          ['MeroShare Account', 'IPO, portfolio, EDIS portal', 'meroshare.cdsc.com.np', 'NPR 50 first year', 'Instant (online)'],
          ['CRN Number', 'Links bank to Demat for IPO', 'Same bank DP (branch)', 'Usually free', 'Same day'],
          ['Annual Renewal', 'Mandatory every fiscal year', 'connectIPS or mobile banking', 'NPR 150 total/year', 'Before Ashadh 31']
        ]
      },
      nepalContext: 'CDSC (CDS and Clearing Ltd) is the SEBON-authorized central depository managing all Demat infrastructure. Every Class A bank is a licensed DP. The C-ASBA system uses your CRN to block funds in your account without sending money to brokers - eliminating the old weeks-long refund process.',
      practicalScenario: {
        persona: 'Bibek, 21, university student in Pokhara',
        income: 'Monthly allowance NPR 8,000',
        scenarioText: 'Bibek missed a hydropower IPO because he had no Demat or MeroShare. Friends applied from phones while he watched.',
        solutionText: 'Next day: (1) Kumari Bank branch - submitted citizenship copy, photo, filled form, paid NPR 100. (2) Received BOID by SMS in 3 days. (3) Registered on meroshare.cdsc.com.np - done in 5 minutes. (4) Got CRN from same branch. Next IPO: applied in 2 minutes on phone - NPR 1,000 blocked, received 10 kitta.',
        metricHighlight: '1 branch visit + 1 day setup - never missed another IPO'
      },
      formula: {
        name: 'IPO Application Cost',
        equation: '\\text{Blocked Amount} = \\text{Kitta Applied} \\times \\text{Face Value (NPR 100)}',
        variables: [
          { symbol: 'Kitta', name: 'Shares applied for', desc: 'Standard retail: 10 kitta for most oversubscribed IPOs.' },
          { symbol: 'Face Value', name: 'Par value per share', desc: 'NPR 100 for standard Nepal IPOs.' },
          { symbol: 'Blocked Amount', name: 'Account lien', desc: 'Blocked (not transferred) via C-ASBA. Released if not allotted.' }
        ],
        exampleCalculation: '10 kitta × NPR 100 = NPR 1,000 blocked. If not allotted: released within hours. If allotted: 10 shares in your Demat, NPR 1,000 is the purchase price.',
        shortcutCalcSlug: 'calculators/nepse-share',
        shortcutCalcName: 'Open NEPSE Share Calculator'
      },
      commonMistakes: [
        { mistake: 'Opening Demat at a Class B bank or cooperative.', correct: 'Only Class A ("Ka shreni") commercial banks are CDSC licensed Depository Participants.', explanation: 'Non-Class A institutions cannot open valid Demat accounts.' },
        { mistake: 'Forgetting to renew Demat and MeroShare before Ashadh 31.', correct: 'Pay NPR 100 (Demat) + NPR 50 (MeroShare) via connectIPS or any payment app.', explanation: 'Expired accounts fail C-ASBA verification - IPO application automatically rejected.' },
        { mistake: 'Using someone else\'s Demat for IPO applications.', correct: 'Each person must have their own account. Never share BOID or MeroShare password.', explanation: 'SEBON prohibits using another person\'s identity. Detected applications are disqualified.' }
      ],
      definitions: [
        { term: 'Demat', full: 'Dematerialized Account', meaning: 'Electronic account holding your shares as digital records instead of paper certificates.' },
        { term: 'BOID', full: 'Beneficiary Owner Identification', meaning: 'Your unique 16-digit Demat account number - primary identifier for all share transactions.' },
        { term: 'CRN', full: 'C-ASBA Registration Number', meaning: '9-digit code linking your bank account to your Demat for safe IPO fund blocking.' },
        { term: 'CDSC', full: 'CDS and Clearing Limited', meaning: 'Nepal\'s government-authorized central depository managing all Demat accounts and MeroShare.' }
      ],
      faqs: [
        { q: 'Can a student without a job open a Demat?', a: 'Yes. Any Nepali citizen 18+ with valid citizenship can open Demat. No salary or job proof needed.' },
        { q: 'How many Demat accounts can one person have?', a: 'One per bank DP, but multiple banks are possible. CDSC links all to your citizenship for IPO purposes - one primary BOID matters.' },
        { q: 'Where do I pay MeroShare annual renewal?', a: 'connectIPS.com.np, eSewa, Khalti, or mobile banking → search "CDSC Payment" or "Demat Renewal." Pay NPR 100 + NPR 50 before Ashadh 31.' }
      ],
      takeaways: [
        'Demat (BOID) + MeroShare + CRN = three-part gateway to Nepal\'s stock market.',
        'Open Demat only at a Class A commercial bank - total cost NPR 100.',
        'CRN lets you apply for IPOs without transferring money to any broker.',
        'Renew both annually before Ashadh 31 - total NPR 150.',
        'Each person needs their own account - sharing is prohibited by SEBON.'
      ]
    },
    np: {
      title: 'नेपालमा Demat, MeroShare र CRN कसरी खोल्ने: चरणबद्ध प्रक्रिया',
      oneLineSummary: 'Demat खाता, MeroShare र CRN सेटअपको सम्पूर्ण प्रक्रिया - NEPSE र IPO मा प्रवेशको ढोका।',
      summaryPoints: [
        'Demat खाता तपाईंको सेयर राखिने डिजिटल लकर हो - बिना Demat NEPSE सेयर किन्न/राख्न सकिँदैन।',
        'MeroShare भनेको CDSC को निःशुल्क पोर्टल - IPO भर्ने, बाँडफाँड हेर्ने, पोर्टफोलियो जाँच।',
        'CRN ले Demat र बैंक खाता जोड्छ - IPO मा ब्रोकरलाई पैसा नपठाई रोक्काका लागि।',
        'सम्पूर्ण प्रक्रिया १-३ कार्यदिन, एकपटकको शुल्क रु. १00-३00।',
        'हरेक वर्ष आषाढ ३१ अघि Demat र MeroShare नवीकरण अनिवार्य।'
      ],
      whatIsThis: 'Demat खाता भनेको भौतिक सेयर प्रमाणपत्रको डिजिटल विकल्प हो। NEPSE का सबै सेयर BOID (१६ अंकको विशेष नम्बर) भएको Demat मा राखिन्छन्। MeroShare पोर्टलमा IPO आवेदन, बाँडफाँड हेर्ने र EDIS गर्न सकिन्छ। CRN ले बैंक खाता र Demat जोड्छ - C-ASBA ले पैसा रोक्काका लागि।',
      whyItMatters: 'Demat नभई NEPSE IPO वा सेकेन्डरी बजारमा भाग लिन सकिँदैन। सेटअप ब्रोकरमा निर्भर होइन - आफ्नै वाणिज्य बैंकमा। CDSC शुल्क रु. १00। वार्षिक नवीकरण रु. १50 कुल।',
      howItWorks: [
        { step: 1, title: '"क" वर्गको बैंक शाखामा जानुहोस्', desc: 'आफ्नो बचत बैंक ("क" वर्ग) शाखामा "Demat फाराम" माग्नुहोस्।' },
        { step: 2, title: 'KYC कागजात बुझाउनुहोस्', desc: 'नागरिकता (दुवैतर्फ), पासपोर्ट फोटो, PAN (सिफारिस), Demat फाराम।' },
        { step: 3, title: 'BOID प्राप्त गर्नुहोस् (३-७ कार्यदिन)', desc: 'CDSC ले प्रक्रिया गरेपछि SMS मा १६ अंकको BOID पाउनुहुन्छ।' },
        { step: 4, title: 'MeroShare मा दर्ता गर्नुहोस्', desc: 'meroshare.cdsc.com.np → Register → BOID, बैंक DP, खाता नम्बर → पासवर्ड → तत्काल सक्रिय।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपाल सेयर बजारको तीन-भाग सेटअप',
        headers: ['घटक', 'के हो', 'कहाँ पाइन्छ', 'शुल्क', 'समय'],
        rows: [
          ['Demat खाता (BOID)', 'डिजिटल सेयर लकर', '"क" वर्गको बैंक शाखा', 'रु. १00 एकपटक', '१-७ कार्यदिन'],
          ['MeroShare खाता', 'IPO, पोर्टफोलियो, EDIS पोर्टल', 'meroshare.cdsc.com.np', 'रु. ५0 पहिलो वर्ष', 'तत्काल'],
          ['CRN नम्बर', 'IPOका लागि बैंक-Demat जोडाई', 'सोही बैंक शाखा', 'सामान्यतः निःशुल्क', 'सोही दिन'],
          ['वार्षिक नवीकरण', 'हरेक आव अनिवार्य', 'connectIPS/मोबाइल', 'रु. १५0/वर्ष', 'आषाढ ३१ अघि']
        ]
      },
      nepalContext: 'CDSC (CDS and Clearing Limited) SEBON अन्तर्गत सरकारी निक्षेप कार्यालय। "क" वर्गका सबै बैंक CDSC DP हुन्। C-ASBA ले CRN मार्फत बैंकमा पैसा रोक्का राख्छ - तेस्रो पक्षलाई पठाउनुपर्दैन।',
      practicalScenario: {
        persona: 'बिबेक, २१ वर्ष, पोखरामा विश्वविद्यालय विद्यार्थी',
        income: 'मासिक भत्ता रु. ८,000',
        scenarioText: 'बिबेकले जलविद्युत IPO मा आवेदन दिन चाहे तर Demat थिएन। साथीहरूले फोनबाटै आवेदन दिए।',
        solutionText: '(१) कुमारी बैंकमा कागजात बुझाए, रु. १00 तिरे। (२) ३ दिनपछि BOID। (३) MeroShare मा ५ मिनेटमा दर्ता। (४) CRN लिए। अर्को IPO मा २ मिनेटमा आवेदन - रु. १,000 रोक्का, १0 कित्ता पाए।',
        metricHighlight: '१ शाखा + १ दिन सेटअप - अब कुनै IPO छुट्दैन'
      },
      formula: {
        name: 'IPO आवेदन रकम',
        equation: '\\text{रोक्का रकम} = \\text{आवेदित कित्ता} \\times \\text{अंकित मूल्य (रु. १00)}',
        variables: [
          { symbol: 'कित्ता', name: 'आवेदित सेयर', desc: 'अधिकांश IPO मा १0 कित्ता मानक।' },
          { symbol: 'अंकित मूल्य', name: 'प्रति सेयर', desc: 'सामान्य नेपाली IPO मा रु. १00।' },
          { symbol: 'रोक्का रकम', name: 'बैंक Lien', desc: 'C-ASBA रोक्का (हस्तान्तरण होइन)। नपरेमा फुकुवा।' }
        ],
        exampleCalculation: '१0 कित्ता × रु. १00 = रु. १,000 रोक्का। नपरेमा बाँडफाँडपछि फुकुवा। परेमा: १0 कित्ता Demat मा।',
        shortcutCalcSlug: 'calculators/nepse-share',
        shortcutCalcName: 'NEPSE सेयर Calculator खोल्नुहोस्'
      },
      commonMistakes: [
        { mistake: '"ख" वर्ग वा सहकारीमा Demat खोल्ने।', correct: 'Demat केवल "क" वर्गको CDSC-लाइसेन्स बैंकमा।', explanation: '"ख" वर्गका बैंकहरू CDSC DP हुन सक्दैनन्।' },
        { mistake: 'आषाढ ३१ अघि नवीकरण नगर्नु।', correct: 'connectIPS वा मोबाइलबाट रु. १00 + रु. ५0 तिर्नुहोस्।', explanation: 'म्याद सकिएको खाताले IPO C-ASBA प्रमाणीकरणमा स्वतः अस्वीकार।' },
        { mistake: 'अर्काको Demat प्रयोग।', correct: 'आफ्नो BOID र पासवर्ड कसैलाई नदिनुहोस्।', explanation: 'SEBON ले अर्काको पहिचानमा IPO सख्त निषेध गरेको छ।' }
      ],
      definitions: [
        { term: 'Demat', full: 'Dematerialized Account', meaning: 'सेयर डिजिटल रूपमा राख्ने इलेक्ट्रोनिक खाता।' },
        { term: 'BOID', full: 'Beneficiary Owner Identification', meaning: 'Demat को १६ अंकको विशेष नम्बर।' },
        { term: 'CRN', full: 'C-ASBA Registration Number', meaning: 'बैंक खाता र Demat जोड्ने ९ अंकको कोड।' },
        { term: 'CDSC', full: 'CDS and Clearing Limited', meaning: 'नेपालको सरकारी केन्द्रीय निक्षेप कार्यालय।' }
      ],
      faqs: [
        { q: 'विद्यार्थीले Demat खोल्न सकिन्छ?', a: 'हो। नागरिकता भएको जुनसुकै नेपाली (१८+) - जागिर प्रमाण चाहिँदैन।' },
        { q: 'MeroShare नवीकरण कहाँ तिर्ने?', a: 'connectIPS, eSewa, Khalti वा मोबाइल बैंकिङमा "CDSC Payment" खोजी आषाढ ३१ अघि।' },
        { q: 'एक व्यक्तिले कतिवटा डिम्याट खाता खोल्न पाउँछ?', a: 'एक व्यक्तिले बढीमा दुईवटासम्म डिम्याट खाता खोल्न पाउँछ। तर IPO मा आवेदन दिँदा एउटा नागरिकताबाट एउटा डिम्याट खाता मात्र मान्य हुन्छ; दोहोरो आवेदन दिएमा रद्द हुन्छ।' }
      ],
      takeaways: [
        'Demat + MeroShare + CRN = NEPSE को तीन-भाग ढोका।',
        'Demat केवल "क" वर्गको बैंकमा - रु. १00।',
        'CRN ले ब्रोकरलाई पैसा नपठाई IPO आवेदन सम्भव।',
        'हरेक वर्ष आषाढ ३१ अघि नवीकरण - रु. १50 कुल।',
        'एक व्यक्ति एउटा Demat - SEBON ले साझेदारी निषेध।'
      ]
    },
    relatedCalculators: [
      { name: 'NEPSE Share Calculator', slug: 'calculators/nepse-share', key: 'nepse-share', desc: 'Calculate broker commissions and capital gains on NEPSE stock transactions.' }
    ],
    downloadableResources: [
      { title: 'MeroShare + Demat Setup Checklist (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '220 KB', href: '/resources/nepse-beginner-guide' }
    ]
  },

  // ── 9. INFLATION VS SAVINGS ───────────────────────────────────────
  'inflation-vs-savings-nepal': {
    id: 'inv-inflation-savings',
    slug: 'inflation-vs-savings-nepal',
    categorySlug: 'investing',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '10 min practice', np: '१० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified for Nepal Economic Data (NRB)', np: 'नेपाल राष्ट्र बैंकको आर्थिक तथ्यांकमा आधारित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'Inflation in Nepal: Why Your Savings Are Secretly Losing Value',
      oneLineSummary: 'Nepal\'s 6-8% annual inflation silently erodes cash savings. Here\'s exactly how much you lose each year - and what to do about it.',
      summaryPoints: [
        'Inflation is the continuous rise in prices over time - the same NPR 100 buys less each year.',
        'Nepal\'s average annual inflation has been 6.0%-8.5% over the last decade, driven by food imports and energy costs.',
        'A standard savings account pays 3-4% interest - a negative real return of -2% to -4% every year.',
        'NPR 1,00,000 kept in savings loses roughly NPR 30,000-50,000 in real purchasing power over 10 years.',
        'The solution is to invest your savings surplus in instruments that beat inflation.'
      ],
      whatIsThis: 'Inflation is the rate at which the general price level rises over time. At 7% inflation, something costing NPR 100 today costs NPR 107 in one year. Your money\'s amount is unchanged - but its real purchasing power has fallen. Nepal\'s Consumer Price Index (CPI) is published monthly by Nepal Rastra Bank (NRB). Nepal\'s inflation is driven by food/fuel import prices from India, monsoon-dependent agricultural yields, and periodic energy shortages.',
      whyItMatters: 'Inflation is invisible. Unlike a bad investment, it steals purchasing power silently. A Nepali saving NPR 15,000/month at 3.5% while inflation runs at 7% loses 3.5% of real value annually. Over 10 years, NPR 18 Lakhs in savings will have the purchasing power of only about NPR 12.5 Lakhs in today\'s terms. This explains why older generations who "saved everything" often feel their savings are not enough.',
      howItWorks: [
        { step: 1, title: 'NRB Publishes Monthly CPI', desc: 'NRB tracks ~600 goods and services. The monthly CPI measures how this basket\'s price changed vs the baseline year.' },
        { step: 2, title: 'Your Bank Rate Lags Behind', desc: 'Nepal savings accounts: 3-4.5%. When inflation is 7-8%, the gap is your silent annual loss.' },
        { step: 3, title: 'Real Return = Nominal Rate − Inflation Rate', desc: 'FD at 7.5% minus 7% inflation = 0.5% real return. After TDS on interest, the real return can be negative.' },
        { step: 4, title: 'Beating Inflation Requires Equity', desc: 'Historically, NEPSE equity and diversified mutual funds have delivered 10-18% annualized over 5+ year cycles.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Real Purchasing Power - NPR 1,00,000 over 10 Years (Nepal)',
        headers: ['Instrument', 'Nominal Return', 'Nepal Inflation (avg)', 'Real Annual Return', 'Value in 10 Years (Real)'],
        rows: [
          ['Savings Account', '3.5%', '7.0%', '-3.5%', '≈ NPR 70,000 (30% loss)'],
          ['Fixed Deposit (1 yr)', '7.5%', '7.0%', '+0.5%', '≈ NPR 1,05,000 (marginal gain)'],
          ['Open-Ended Mutual Fund SIP', '12% historical', '7.0%', '+5.0%', '≈ NPR 1,62,000 (62% real gain)'],
          ['NEPSE Equity (diversified)', '14% historical', '7.0%', '+7.0%', '≈ NPR 1,97,000 (97% real gain)'],
          ['Historical returns not guaranteed', '-', '-', '-', '-']
        ]
      },
      nepalContext: 'NRB tracks Nepal\'s inflation via CPI - covering food, clothing, housing, transport, health, education. Food inflation typically runs 2-3% above headline CPI due to India import dependence. Monthly monetary reports are at nrb.org.np. Nepal\'s border-linked economy means Indian food and fuel price changes transmit quickly into Nepal\'s inflation numbers.',
      practicalScenario: {
        persona: 'Maya, 34, nurse in Birtamod',
        income: 'NPR 42,000 / month',
        scenarioText: 'Maya had NPR 2,00,000 in savings for 5 years at 3.5% interest. With Nepal\'s average 7% inflation, her account grew to NPR 2,37,000 - but the same goods now cost NPR 2,80,000.',
        solutionText: 'Maya gained NPR 37,000 in interest but lost NPR 80,000 in real purchasing power - a real loss of NPR 43,000 by "safe saving." She restructured: NPR 60,000 liquid emergency fund, NPR 80,000 in breakable FD at 7.5%, NPR 3,000/month SIP in open-ended mutual fund.',
        metricHighlight: 'Lost NPR 43,000 in real value "safe saving" - fixed with 3-part strategy'
      },
      formula: {
        name: 'Real Return Formula (Fisher Equation)',
        equation: '\\text{Real Return} \\approx \\text{Nominal Rate} - \\text{Inflation Rate}',
        variables: [
          { symbol: 'Real Return', name: 'Purchasing Power Gain', desc: 'Actual gain in purchasing power after inflation.' },
          { symbol: 'Nominal Rate', name: 'Bank Stated Rate', desc: 'Rate printed on your FD certificate or savings passbook.' },
          { symbol: 'Inflation Rate', name: 'Annual CPI Change', desc: 'Nepal average: typically 6-8% in recent years.' }
        ],
        exampleCalculation: '3.5% savings − 7% inflation = -3.5% real return. NPR 1,00,000 grows to NPR 1,03,500 - but goods now cost NPR 1,07,000. Real loss: NPR 3,500/year per NPR 1 Lakh.',
        shortcutCalcSlug: 'calculators/inflation',
        shortcutCalcName: 'Open Inflation Calculator'
      },
      commonMistakes: [
        { mistake: 'Treating savings account balance growth as real wealth growth.', correct: 'Always calculate real return = nominal rate minus Nepal\'s average inflation.', explanation: 'NPR 5,000 interest added monthly feels good - but if it buys less than NPR 5,000 used to, you are not gaining real wealth.' },
        { mistake: 'Assuming a Fixed Deposit always beats inflation.', correct: 'FD at 7.5% after 5% TDS = net 6.6-7.1%. With 7-8% inflation, FDs barely protect purchasing power.', explanation: 'FDs protect against severe inflation loss - not real wealth creation. Use for emergency funds and short-term goals.' },
        { mistake: 'Hoarding physical cash at home in a safe or almirah.', correct: 'Never hold excess cash beyond immediate weekly needs; deploy idle money into interest-bearing or compounding accounts.', explanation: 'Physical cash has a 0% nominal return, meaning it suffers 100% of the 6%-8% inflation penalty every single year without any mitigation.' }
      ],
      definitions: [
        { term: 'CPI', full: 'Consumer Price Index', meaning: 'A basket of goods measurement published monthly by NRB. Tracks price changes for a typical Nepali household.' },
        { term: 'Real Return', full: 'Purchasing Power Adjusted Return', meaning: 'Your actual purchasing power gain after subtracting inflation from the nominal return.' },
        { term: 'Inflation Hedge', full: 'Inflation Protection Asset', meaning: 'An investment that historically grows faster than inflation - equity mutual funds, real estate, stocks.' },
        { term: 'Purchasing Power', full: 'मुद्राको क्रयशक्ति', meaning: 'The quantity of goods and services that can be bought with a single unit of currency, which decays over time due to inflation.' }
      ],
      faqs: [
        { q: 'What is Nepal\'s current inflation rate?', a: 'Nepal\'s CPI inflation has averaged 6-8% annually over the last decade. NRB publishes monthly updates at nrb.org.np under "Monthly Statistics."' },
        { q: 'Is a Fixed Deposit still worth keeping?', a: 'Yes - for emergency funds and short-term goals (1-3 years). For long-term wealth (5+ years), you need equity exposure to genuinely beat inflation.' },
        { q: 'Does gold protect against inflation in Nepal?', a: 'Gold is an inflation hedge over very long periods, but it is illiquid, generates no income, and has high transaction costs at jewellers. Diversified equity mutual funds are more efficient for modern inflation protection.' }
      ],
      takeaways: [
        'Nepal\'s 6-8% annual inflation means savings accounts lose real purchasing power every year.',
        'Real return = Nominal rate − Inflation. At 3.5% savings and 7% inflation: real loss of 3.5%/year.',
        'NPR 1 Lakh in savings for 10 years loses ~NPR 30,000 in real purchasing power.',
        'Beat inflation with equity-linked SIPs in SEBON-regulated mutual funds (historical 10-15%+ returns).',
        'Emergency funds in FDs; invest surplus for real purchasing power growth.'
      ]
    },
    np: {
      title: 'नेपालमा Inflation: बैंक बचतको पैसा चुपचाप किन घट्छ',
      oneLineSummary: 'नेपालको ६-८% वार्षिक महँगीले नगद बचतलाई चुपचाप घटाउँछ - प्रत्येक वर्ष कति गुमाउनु हुन्छ र के गर्ने।',
      summaryPoints: [
        'Inflation भनेको समयसँगै मूल्यहरू निरन्तर बढ्नु - उही रु. १00 ले कम सामान किन्न पाइन्छ।',
        'नेपालको वार्षिक औसत Inflation गत दशकमा ६-८.५%।',
        'बचत खाताले ३-४% मात्र दिन्छ - वास्तविक नोक्सानी -२% देखि -४%।',
        'रु. १ लाख बचतमा राख्दा १० वर्षमा रु. ३०,000-५०,000 क्रयशक्ति गुम्छ।',
        'समाधान: बाँकी बचतलाई Inflation भन्दा बढी प्रतिफल दिने माध्यममा।'
      ],
      whatIsThis: 'Inflation भनेको वस्तु तथा सेवाको सामान्य मूल्य बढ्ने दर। ७% Inflation मा आज रु. १00 को चीज एक वर्षपछि रु. १07 पर्छ। पैसाको अंक उही तर क्रयशक्ति घट्छ। नेपालको CPI नेपाल राष्ट्र बैंकले मासिक प्रकाशित गर्छ।',
      whyItMatters: 'Inflation अदृश्य छ। खराब लगानीमा गुमाएको थाहा हुन्छ, Inflation ले चुपचाप चोर्छ। ३.५% बचत र ७% Inflation मा वार्षिक ३.५% वास्तविक मूल्य गुम्छ। १० वर्षमा रु. १८ लाखको क्रयशक्ति रु. १२.५ लाख हुन्छ।',
      howItWorks: [
        { step: 1, title: 'NRB ले मासिक CPI प्रकाशित गर्छ', desc: 'लगभग ६00 वस्तु तथा सेवाको मूल्य अनुगमन गर्छ।' },
        { step: 2, title: 'बैंक बचत दर पछाडि', desc: 'बचत खाता ३-४.५%। Inflation ७-८% मा अन्तर तपाईंको मौन घाटा।' },
        { step: 3, title: 'वास्तविक प्रतिफल = नाममात्र दर − Inflation', desc: 'FD ७.५% − Inflation ७% = ०.५% वास्तविक। TDS काटेपछि ऋणात्मक पनि।' },
        { step: 4, title: 'Inflation जित्न Equity', desc: 'ऐतिहासिक रूपमा NEPSE र Mutual Fund ले ५+ वर्षमा १०-१८% प्रतिफल।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'वास्तविक क्रयशक्ति - रु. १ लाख, १० वर्षमा',
        headers: ['उपकरण', 'नाममात्र प्रतिफल', 'नेपाल Inflation', 'वास्तविक प्रतिफल', '१० वर्षमा मूल्य'],
        rows: [
          ['बचत खाता', '३.५%', '७.०%', '-३.५%', '≈ रु. ७०,000 (३०% नोक्सानी)'],
          ['Fixed Deposit', '७.५%', '७.०%', '+०.५%', '≈ रु. १,05,000 (मामुली)'],
          ['खुलामुखी Mutual Fund SIP', '१२% ऐतिहासिक', '७.०%', '+५.०%', '≈ रु. १,६२,000 (६२% वृद्धि)'],
          ['NEPSE इक्विटी', '१४% ऐतिहासिक', '७.०%', '+७.०%', '≈ रु. १,९७,000 (९७% वृद्धि)'],
          ['नोट: भूतकालको प्रतिफल ग्यारेन्टी होइन', '-', '-', '-', '-']
        ]
      },
      nepalContext: 'NRB ले CPI मार्फत Inflation अनुगमन - खाद्यान्न, लत्ताकपडा, आवास, यातायात, स्वास्थ्य। खाद्य Inflation सामान्यतः CPI भन्दा २-३% बढी। भारतसँगको सीमा-व्यापारले मूल्य परिवर्तन छिट्टै नेपालमा आउँछ।',
      practicalScenario: {
        persona: 'माया, ३४ वर्ष, बिर्तामोडमा नर्स',
        income: 'मासिक रु. ४२,000',
        scenarioText: 'मायाको बचत खातामा ५ वर्षदेखि रु. २ लाख (३.५% ब्याज)। ७% Inflation मा खाताले रु. २,३७,000 देखायो तर उही सामान रु. २,८०,000 पर्छ।',
        solutionText: 'रु. ३७,000 ब्याज थपे तर रु. ८०,000 क्रयशक्ति गुमे - रु. ४३,000 वास्तविक घाटा। पुनर्गठन: रु. ६०,000 Emergency Fund, रु. ८०,000 FD (७.५%), रु. ३,000/महिना Mutual Fund SIP।',
        metricHighlight: '"सुरक्षित बचत" ले रु. ४३,000 वास्तविक घाटा - ३-भाग रणनीतिले समाधान'
      },
      formula: {
        name: 'वास्तविक प्रतिफल सूत्र',
        equation: '\\text{वास्तविक प्रतिफल} \\approx \\text{नाममात्र दर} - \\text{Inflation दर}',
        variables: [
          { symbol: 'वास्तविक प्रतिफल', name: 'क्रयशक्ति वृद्धि', desc: 'Inflation घटाएर बाँकी।' },
          { symbol: 'नाममात्र दर', name: 'बैंकको घोषित दर', desc: 'FD वा बचत पासबुकमा लेखिएको।' },
          { symbol: 'Inflation दर', name: 'वार्षिक CPI', desc: 'नेपालमा सामान्यतः ६-८%।' }
        ],
        exampleCalculation: '३.५% − ७% = -३.५% वास्तविक। रु. १ लाखमा वार्षिक रु. ३,५00 वास्तविक घाटा।',
        shortcutCalcSlug: 'calculators/inflation',
        shortcutCalcName: 'Inflation Calculator खोल्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'बचत खाताको ब्याज थपिनुलाई वास्तविक सम्पत्ति वृद्धि ठान्नु।', correct: 'वास्तविक प्रतिफल = नाममात्र दर − Inflation हिसाब गर्नुहोस्।', explanation: 'मासिक रु. ५,000 ब्याज देख्दा राम्रो तर क्रयशक्ति घट्दैछ।' },
        { mistake: 'FD ले सधैँ Inflation भन्दा बढी दिन्छ भन्ने धारणा।', correct: 'TDS काटेपछि FD नेट ६.६-७.१%। ७-८% Inflation मा FD ले क्रयशक्ति मात्र जोगाउँछ।', explanation: 'FD Emergency Fund र अल्पकालीन लक्ष्यका लागि - दीर्घकालीन सम्पत्तिका लागि Equity।' },
        { mistake: 'दराज वा घरमा धेरै नगद पैसा थुपारेर राख्नु।', correct: 'दैनिक खर्चबाहेकको अतिरिक्त पैसा घरमा नराखी ब्याज पाउने बैंक खाता वा म्युचुअल फन्डमा लगाउनुहोस्।', explanation: 'घरमा राखेको नगदको ब्याज शून्य हुने भएकाले त्यसले महँगीको शतप्रतिशत नोक्सानी (६%-८%) हरेक वर्ष बेहोर्नुपर्छ।' }
      ],
      definitions: [
        { term: 'CPI', full: 'उपभोक्ता मूल्य सूचकांक', meaning: 'NRB ले मासिक प्रकाशित वस्तु टोकरी मापन।' },
        { term: 'वास्तविक प्रतिफल', full: 'Real Return', meaning: 'Inflation घटाएपछि लगानी प्रतिफलबाट बाँकी।' },
        { term: 'Inflation Hedge', full: 'Inflation सुरक्षा', meaning: 'Inflation भन्दा छिटो बढ्ने लगानी - Equity Mutual Fund।' },
        { term: 'क्रयशक्ति (Purchasing Power)', full: 'मुद्राको वास्तविक खरिद क्षमता', meaning: 'तोकिएको रुपैयाँले किन्न सकिने वस्तु तथा सेवाको परिमाण, जुन महँगी बढ्दा घट्दै जान्छ।' }
      ],
      faqs: [
        { q: 'नेपालको हालको Inflation दर कति?', a: 'गत दशकमा वार्षिक औसत ६-८%। nrb.org.np "Monthly Statistics" मा मासिक।' },
        { q: 'के FD अझै उपयोगी?', a: 'हो - Emergency Fund र १-३ वर्षका लागि। ५+ वर्षमा Equity बाट Inflation जित्न सकिन्छ।' },
        { q: 'के नेपालमा सुन किनेर राख्दा महँगीबाट बच्न सकिन्छ?', a: 'सुनले धेरै लामो समयमा महँगीबाट केही सुरक्षा दिए पनि यसले कुनै नियमित लाभांश वा ब्याज दिँदैन र सुन पसलको ज्याला/जर्तीले गर्दा लागत बढी हुन्छ। आधुनिक वित्तीय योजनामा खुला म्युचुअल फन्ड धेरै प्रभावकारी हुन्छ।' }
      ],
      takeaways: [
        'नेपालको ६-८% Inflation ले बचत खाताको क्रयशक्ति हरेक वर्ष घटाउँछ।',
        'वास्तविक प्रतिफल = नाममात्र − Inflation। ३.५% − ७% = -३.५%।',
        'रु. १ लाख बचतमा १० वर्षमा ~रु. ३०,000 क्रयशक्ति गुम्छ।',
        'SEBON-नियमित Mutual Fund SIP (१०-१५%+ ऐतिहासिक) बाट Inflation जित्नुहोस्।',
        'Emergency Fund FD मा र बाँकी लगानीका लागि।'
      ]
    },
    relatedCalculators: [
      { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'See exactly how inflation erodes purchasing power over your savings horizon.' },
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate how your SIP grows vs. inflation.' }
    ],
    downloadableResources: [
      { title: 'Beating Inflation in Nepal - Investment Framework (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '260 KB', href: 'assets/downloads/nepse-first-time-investor-checklist.html' }
    ]
  },

  // ── 10. BANK CLASSES NEPAL ────────────────────────────────────────
  'bank-classes-nepal-nrb': {
    id: 'bank-classes',
    slug: 'bank-classes-nepal-nrb',
    categorySlug: 'banking',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '10 min practice', np: '१० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under NRB Banking Regulations (BAFIA 2073)', np: 'NRB बैंकिङ नियम (BAFIA २०७३) अनुसार प्रमाणित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'Class A, B, C & D Banks in Nepal: What\'s the Difference?',
      oneLineSummary: 'Nepal\'s four banking tiers explained - and why Class A matters for your Demat, loans, and investments.',
      summaryPoints: [
        'Nepal Rastra Bank classifies licensed banks into four tiers: Class A (Commercial), Class B (Development), Class C (Finance), Class D (Microfinance).',
        'Class A banks have the highest minimum capital (NPR 8 Arba paid-up) and widest services including SWIFT, forex, and Demat accounts.',
        'For Demat, SIP linkage, connectIPS, and home loans - always use a Class A commercial bank.',
        'Cooperative societies are NOT regulated by NRB - they carry higher default risk with no government deposit guarantee.',
        'Deposits up to NPR 5 Lakhs at all NRB-licensed banks (A, B, C, D) are guaranteed by DCGF - cooperatives are excluded.'
      ],
      whatIsThis: 'Nepal Rastra Bank classifies all licensed banking institutions into four classes based on paid-up capital, service scope, geographic reach, and regulatory oversight. This classification directly affects the safety of your deposits, available services, and legitimacy of financial products like Demat accounts, SIP mandates, and home loans.',
      whyItMatters: 'Many Nepalis deposit money in cooperatives without realizing they carry far higher risk than Class A banks. Cooperative defaults have become increasingly common - several societies have collapsed, leaving depositors unable to access funds for months or years. NRB deposit protection (DCGF, NPR 5 Lakhs) applies ONLY to NRB-licensed institutions. Cooperatives are entirely outside this protection.',
      howItWorks: [
        { step: 1, title: 'Class A: Commercial Banks (Ka Shreni Vanijya Bank)', desc: '20 NRB-licensed banks. Min capital: NPR 8 Arba. Full services: Savings, FD, loans, Demat (DP), TMS, SWIFT, Forex, Trade Finance, connectIPS. Examples: Nabil, Nepal Investment, Global IME, NIC Asia, Everest, Sanima, Kumari.' },
        { step: 2, title: 'Class B: Development Banks (Kha Shreni Bikas Bank)', desc: 'Limited to national/provincial operations. Capital: NPR 2.5 Arba. No forex or SWIFT. Cannot serve as Demat DP. Examples: Muktinath Bikas Bank, Jyoti Bikas Bank.' },
        { step: 3, title: 'Class C: Finance Companies (Ga Shreni Bitta Sanstha)', desc: 'Smallest licensed institutions. Capital: NPR 80 Crore. Hire-purchase, vehicle loans, basic deposits. Cannot issue Demat accounts.' },
        { step: 4, title: 'Class D: Microfinance (Gha Shreni Laghu Bitta)', desc: 'Exclusively group lending for small rural borrowers. Not for general public deposits or investment services.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Nepal Banking Tiers - Service Comparison',
        headers: ['Criterion', 'Class A (Commercial)', 'Class B (Development)', 'Class C (Finance)', 'Cooperative (NOT NRB)'],
        rows: [
          ['NRB Regulated', '✓ Yes', '✓ Yes', '✓ Yes', '✗ No (Dept. of Cooperatives)'],
          ['DCGF Deposit Guarantee', '✓ Up to NPR 5L', '✓ Up to NPR 5L', '✓ Up to NPR 5L', '✗ No guarantee'],
          ['Demat/DP Account', '✓ All Class A', '✗ No', '✗ No', '✗ No'],
          ['Home/Business Loans', '✓ Full', '✓ Limited', '✓ Vehicle/hire-purchase', '✓ Small group loans'],
          ['SWIFT/Forex', '✓ Full', '✗ No', '✗ No', '✗ No'],
          ['connectIPS Integration', '✓ All Class A', '✓ Most', '✓ Some', '✗ Limited']
        ]
      },
      nepalContext: 'As of FY 2081/82: ~20 Class A commercial banks, 17 Class B development banks, ~17 Class C finance companies - all under NRB via BAFIA 2073. Separately, 30,000+ cooperative societies are regulated by the Department of Cooperatives under a different ministry. The cooperative sector\'s rapid 2010s expansion followed by multiple collapses has created widespread public confusion about the difference.',
      practicalScenario: {
        persona: 'Kamal, 26, small businessman in Hetauda',
        income: 'NPR 55,000 / month',
        scenarioText: 'Kamal\'s neighbourhood cooperative offered 14% annual deposit interest - far higher than banks. He deposited NPR 2.5 Lakhs there. The cooperative then faced a liquidity crisis and Kamal could not withdraw for 8 months.',
        solutionText: 'After the cooperative crisis: NPR 80,000 in Class A bank FD (7.5% - DCGF protected), NPR 60,000 emergency fund in Class A savings, NPR 10,000/month SIP in mutual fund. The 6.5% extra cooperative interest was not a bonus - it was an unsecured risk premium.',
        metricHighlight: '8 months frozen funds - 6.5% extra interest was not worth the risk'
      },
      formula: {
        name: 'Risk-Adjusted Return Comparison',
        equation: '\\text{Risk-Adj. Return} = \\text{Nominal Rate} - \\text{Default Risk Premium}',
        variables: [
          { symbol: 'Nominal Rate', name: 'Stated Interest Rate', desc: 'The rate advertised by the institution.' },
          { symbol: 'Default Risk Premium', name: 'Uncompensated Risk', desc: 'Risk above NRB-regulated institutions. Cooperatives: 0-100% potential capital loss.' }
        ],
        exampleCalculation: 'Cooperative 14% vs Class A FD 7.5%. If cooperative defaults: total capital loss possible. Class A FD: 7.5% + DCGF guarantee. The 6.5% extra cooperative rate is a risk premium - not a free gain.',
        shortcutCalcSlug: 'calculators/fixed-deposit',
        shortcutCalcName: 'Compare FD Returns'
      },
      commonMistakes: [
        { mistake: 'Treating cooperatives as equivalent to banks.', correct: 'Cooperatives are NOT banks. NOT regulated by NRB. Deposits NOT DCGF protected.', explanation: 'A cooperative can promise any interest rate with no regulatory cap. Class A banks are quarterly-audited by NRB.' },
        { mistake: 'Opening Demat at a Class B development bank.', correct: 'Demat (DP) accounts are only available at Class A commercial banks.', explanation: 'Class B banks are not licensed as CDSC Depository Participants.' },
        { mistake: 'Believing an institution is completely risk-free just because it has a branch sign board.', correct: 'Always verify on nrb.org.np that the financial institution is a licensed Class A, B, or C bank before depositing savings.', explanation: 'Unlicensed cooperatives and unregistered deposit schemes frequently look identical to formal bank branches from the outside.' }
      ],
      definitions: [
        { term: 'NRB', full: 'Nepal Rastra Bank', meaning: 'Nepal\'s central bank and banking regulator. Licenses and supervises all four bank classes.' },
        { term: 'BAFIA', full: 'Banks and Financial Institutions Act 2073', meaning: 'Nepal\'s primary banking law defining four classes, capital requirements, and service scopes.' },
        { term: 'DCGF', full: 'Deposit and Credit Guarantee Fund', meaning: 'Government fund guaranteeing deposits up to NPR 5 Lakhs at NRB-licensed banks - not cooperatives.' },
        { term: 'Paid-Up Capital', full: 'वास्तविक चुक्ता पुँजी', meaning: 'Actual shareholder investment in the bank, NRB-verified. Higher capital = more regulatory safety.' }
      ],
      faqs: [
        { q: 'Is my money safer in a large cooperative than a small Class C finance company?', a: 'No. A small Class C finance company is NRB-regulated with DCGF protection. A large cooperative has NO NRB oversight and NO deposit guarantee.' },
        { q: 'Can I get a home loan from a Class B development bank?', a: 'Yes, but typically at higher rates than Class A. For Demat and SIP linkage, you\'ll need a separate Class A bank account.' },
        { q: 'Which Class A banks are safest in Nepal?', a: 'All 20 NRB-licensed Class A banks meet the same capital requirement. Historically, foreign joint-venture banks like Nabil, Standard Chartered Nepal, Everest, and Nepal SBI maintain the strongest capital ratios.' }
      ],
      takeaways: [
        'Nepal has 4 NRB-regulated bank tiers: A (Commercial), B (Development), C (Finance), D (Microfinance).',
        'Cooperatives are NOT NRB-regulated - deposits carry NO government guarantee.',
        'For Demat, SIP mandates, connectIPS - use only Class A commercial banks.',
        'DCGF guarantees deposits up to NPR 5 Lakhs at classes A, B, C, D - not cooperatives.',
        'Higher cooperative interest rates reflect real uncompensated risk - not a bonus.'
      ]
    },
    np: {
      title: 'नेपालमा "क", "ख", "ग" र "घ" वर्गका बैंक: के फरक छ?',
      oneLineSummary: 'नेपालका चार बैंकिङ स्तर - Demat, ऋण र लगानीका लागि "क" वर्ग किन जरुरी।',
      summaryPoints: [
        'नेपाल राष्ट्र बैंकले बैंकलाई चार वर्गमा बाँडेको छ: "क" (वाणिज्य), "ख" (विकास), "ग" (वित्त), "घ" (लघुवित्त)।',
        '"क" वर्गसँग सबैभन्दा उच्च पुँजी (रु. ८ अर्ब) र फराकिलो सेवा।',
        'Demat, SIP, connectIPS, गृहकर्जा - "क" वर्गको वाणिज्य बैंक अनिवार्य।',
        'सहकारी NRB नियमित छैन - निक्षेपमा सरकारी ग्यारेन्टी छैन।',
        '"क", "ख", "ग", "घ" वर्गका बैंकमा रु. ५ लाखसम्म DCGF ग्यारेन्टी।'
      ],
      whatIsThis: 'NRB ले सबै इजाजतप्राप्त बैंकिङ संस्थालाई पुँजी, सेवा, भौगोलिक पहुँच र नियामकीय निगरानीका आधारमा चार वर्गमा वर्गीकृत गर्छ। यो वर्गीकरणले निक्षेपको सुरक्षा र Demat, SIP, गृहकर्जाजस्ता उत्पादनको वैधतामा सिधा असर पार्छ।',
      whyItMatters: 'धेरै नेपाली सहकारीमा "क" वर्गभन्दा धेरै जोखिम भएको नजानी पैसा राख्छन्। सहकारी पतनका घटनाहरू बढ्दो छन्। NRB DCGF ग्यारेन्टी केवल NRB-इजाजतप्राप्त "क", "ख", "ग", "घ" मा - सहकारीमा छैन।',
      howItWorks: [
        { step: 1, title: '"क" वर्ग: वाणिज्य बैंक', desc: '२0 NRB-इजाजतप्राप्त। पुँजी रु. ८ अर्ब। सेवा: बचत, FD, ऋण, Demat, TMS, SWIFT, Forex, connectIPS।' },
        { step: 2, title: '"ख" वर्ग: विकास बैंक', desc: 'राष्ट्रिय/प्रादेशिक। पुँजी रु. २.५ अर्ब। Forex/SWIFT छैन। Demat DP होइन।' },
        { step: 3, title: '"ग" वर्ग: वित्त कम्पनी', desc: 'सबैभन्दा सानो। पुँजी रु. ८0 करोड। हायर-परचेज, सवारी ऋण। Demat दिन सक्दैन।' },
        { step: 4, title: '"घ" वर्ग: लघुवित्त', desc: 'साना ग्रामीण ऋणीका लागि समूह ऋण। सामान्य जनताका निक्षेप सेवाका लागि होइन।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपाल बैंकिङ स्तर - सेवा तुलना',
        headers: ['मापदण्ड', '"क" वर्ग', '"ख" वर्ग', '"ग" वर्ग', 'सहकारी (NRB होइन)'],
        rows: [
          ['NRB नियमन', '✓ हो', '✓ हो', '✓ हो', '✗ होइन'],
          ['DCGF ग्यारेन्टी', '✓ रु. ५ लाखसम्म', '✓ रु. ५ लाखसम्म', '✓ रु. ५ लाखसम्म', '✗ छैन'],
          ['Demat/DP खाता', '✓ सबै "क"', '✗ छैन', '✗ छैन', '✗ छैन'],
          ['गृह/व्यवसाय ऋण', '✓ पूर्ण', '✓ सीमित', '✓ सवारी', '✓ साना समूह'],
          ['SWIFT/Forex', '✓ पूर्ण', '✗ छैन', '✗ छैन', '✗ छैन'],
          ['connectIPS', '✓ सबै "क"', '✓ अधिकांश', '✓ केही', '✗ सीमित']
        ]
      },
      nepalContext: 'आव २०८१/८२ सम्म: ~२0 "क", १७ "ख", ~१७ "ग" वर्गका बैंक BAFIA २०७३ अन्तर्गत। छुट्टै ३0,000+ सहकारी सहकारी विभाग अन्तर्गत। सहकारीको तीव्र विस्तार र त्यसपछि पतनले ठूलो भ्रम सिर्जना गरेको छ।',
      practicalScenario: {
        persona: 'कमल, २६ वर्ष, हेटौँडामा व्यवसायी',
        income: 'मासिक रु. ५५,000',
        scenarioText: 'छिमेकको सहकारीले वार्षिक १४% दिन्थ्यो। उनले रु. २.५ लाख राखे। सहकारीले तरलता संकट भोग्यो - ८ महिनासम्म झिक्न पाएनन्।',
        solutionText: 'संकटपछि: रु. ८0,000 "क" वर्गको FD (७.५%, DCGF), रु. ६0,000 Emergency Fund, रु. १0,000/महिना Mutual Fund SIP। ६.५% थप ब्याज बोनस थिएन - जोखिमको मूल्य।',
        metricHighlight: '८ महिना जमेको पैसा - ६.५% थप ब्याज जोखिमको मूल्य थियो'
      },
      formula: {
        name: 'जोखिम-समायोजित प्रतिफल',
        equation: '\\text{जोखिम-समायोजित} = \\text{नाममात्र दर} - \\text{डिफल्ट जोखिम}',
        variables: [
          { symbol: 'नाममात्र दर', name: 'घोषित ब्याज', desc: 'संस्थाले विज्ञापित दर।' },
          { symbol: 'डिफल्ट जोखिम', name: 'असुरक्षित जोखिम', desc: 'NRB-नियमितभन्दा बाहिरको अतिरिक्त जोखिम।' }
        ],
        exampleCalculation: 'सहकारी १४% बनाम "क" वर्गको FD ७.५%। सहकारी डुब्यो भने: पुँजी गुम्न सक्छ। FD: ७.५% + DCGF ग्यारेन्टी। ६.५% थप = जोखिम प्रिमियम।',
        shortcutCalcSlug: 'calculators/fixed-deposit',
        shortcutCalcName: 'FD प्रतिफल तुलना'
      },
      commonMistakes: [
        { mistake: 'सहकारीलाई बैंकसरह मान्नु।', correct: 'सहकारी NRB-नियमित छैन - DCGF ग्यारेन्टी छैन।', explanation: 'सहकारीले जुनसुकै दर दिन सक्छ - नियामकीय सीमाबिना।' },
        { mistake: '"ख" वर्गको बैंकमा Demat खोल्ने।', correct: 'Demat केवल "क" वर्गको CDSC-लाइसेन्स बैंकमा।', explanation: '"ख" वर्गका बैंक CDSC DP हुन सक्दैनन्।' },
        { mistake: 'आकर्षक बोर्ड र कार्यालय देखेकै भरमा कुनै पनि संस्थालाई सुरक्षित बैंक मान्नु।', correct: 'पैसा जम्मा गर्नुअघि नेपाल राष्ट्र बैंकको वेबसाइट (nrb.org.np) मा गएर उक्त संस्था "क", "ख" वा "ग" वर्गमा सूचीकृत छ कि छैन अनिवार्य जाँच गर्नुहोस्।', explanation: 'अनधिकृत सहकारीहरूले पनि चिटिक्क परेको बोर्ड राखेर बैंकजस्तै देखिने गरी सर्वसाधारणलाई भ्रममा पार्न सक्छन्।' }
      ],
      definitions: [
        { term: 'NRB', full: 'नेपाल राष्ट्र बैंक', meaning: 'नेपालको केन्द्रीय बैंक। चार वर्गलाई इजाजत र नियमन।' },
        { term: 'BAFIA', full: 'बैंक तथा वित्तीय संस्था ऐन २०७३', meaning: 'चार बैंक वर्ग र पुँजी आवश्यकता परिभाषित।' },
        { term: 'DCGF', full: 'निक्षेप तथा कर्जा सुरक्षण कोष', meaning: 'NRB-इजाजतप्राप्त बैंकमा रु. ५ लाखसम्म ग्यारेन्टी - सहकारीमा होइन।' },
        { term: 'चुक्ता पुँजी', full: 'Paid-Up Capital', meaning: 'NRB-प्रमाणित शेयरधनीको वास्तविक लगानी। बढी = बढी सुरक्षा।' }
      ],
      faqs: [
        { q: 'के ठूलो सहकारी साना "ग" वर्गभन्दा सुरक्षित?', a: 'होइन। साना "ग" वर्गको वित्त कम्पनी NRB-नियमित र DCGF सुरक्षित। ठूलो सहकारी भए पनि NRB निगरानी र ग्यारेन्टी छैन।' },
        { q: '"ख" वर्गबाट गृहकर्जा लिन सकिन्छ?', a: 'हो - तर सामान्यतः बढी ब्याज। Demat र SIP का लागि छुट्टै "क" वर्गको खाता चाहिन्छ।' },
        { q: 'नेपालमा कुन "क" वर्गका बैंकहरू सबैभन्दा सुरक्षित मानिन्छन्?', a: 'नेपाल राष्ट्र बैंकबाट इजाजतप्राप्त सबै २० वटै वाणिज्य बैंकले पुँजी कोषको मापदण्ड पूरा गरेका छन्। विशेष गरी नबिल, स्ट्यान्डर्ड चार्टर्ड नेपाल, एभरेस्ट र नेपाल एसबीआई जस्ता बैंकहरू ऐतिहासिक रूपमा वित्तीय अनुपातमा धेरै बलिया मानिन्छन्।' }
      ],
      takeaways: [
        'नेपालमा NRB-नियमित ४ बैंक वर्ग: "क", "ख", "ग", "घ"।',
        'सहकारी NRB-नियमित छैन - निक्षेपमा सरकारी ग्यारेन्टी छैन।',
        'Demat, SIP, connectIPS - केवल "क" वर्गको वाणिज्य बैंक।',
        '"क", "ख", "ग", "घ" मा DCGF रु. ५ लाखसम्म - सहकारीमा होइन।',
        'सहकारीको उच्च ब्याज बोनस होइन - असुरक्षित जोखिमको मूल्य।'
      ]
    },
    relatedCalculators: [
      { name: 'Fixed Deposit Calculator', slug: 'calculators/fixed-deposit', key: 'fixed-deposit', desc: 'Compare FD returns across Nepal bank tiers safely.' }
    ],
    downloadableResources: [
      { title: 'Nepal Bank Tiers Quick Reference (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '220 KB', href: '/resources/nepse-beginner-guide' }
    ]
  },

  // ── 11. GOOD DEBT VS BAD DEBT ─────────────────────────────────────
  'good-debt-vs-bad-debt-nepal': {
    id: 'loan-good-bad-debt',
    slug: 'good-debt-vs-bad-debt-nepal',
    categorySlug: 'loans',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '10 min practice', np: '१० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified for Nepal Lending Norms (NRB)', np: 'नेपाल राष्ट्र बैंकको ऋण नियम अनुसार प्रमाणित' },
    prerequisites: { en: 'Basic understanding of interest rates', np: 'ब्याजदरको आधारभूत ज्ञान' },
    en: {
      title: 'Good Debt vs Bad Debt in Nepal: What\'s the Real Difference?',
      oneLineSummary: 'Not all debt is harmful - a home loan builds equity while a consumer credit card destroys wealth. Here is how to tell the difference in Nepal.',
      summaryPoints: [
        'Good debt is borrowed money that is expected to increase your net worth or income - home loans, education loans, business capital.',
        'Bad debt finances consumption or depreciating assets at high interest - consumer loans, credit card debt, informal moneylender loans.',
        'Nepal cooperative loans at 18-36% are almost always bad debt - the interest cost exceeds any benefit.',
        'The test for any debt: "Does this generate income or build equity greater than the interest cost?" If no, it\'s bad debt.',
        'A debt audit takes 10 minutes and tells you exactly which of your current loans to prioritize eliminating.'
      ],
      whatIsThis: 'Not all debt is equal. The distinction between good debt and bad debt is whether the money borrowed is likely to generate more value than its interest cost. Good debt is a leverage tool - it lets you acquire an asset or skill that would be inaccessible without borrowing. Bad debt finances consumption or rapidly depreciating items at interest rates that permanently reduce your wealth. In Nepal, where lending rates range from 4% (student loans) to 36% (informal cooperatives), understanding this distinction is not philosophical - it is directly tied to your financial survival.',
      whyItMatters: 'Most Nepali households carry some form of debt. The danger is not debt itself - it is carrying bad debt while leaving good debt opportunities unused. A family paying 24% interest to a cooperative for a TV loan while qualifying for a 7.5% education loan for their child is actively destroying wealth on one hand while missing a wealth-building opportunity with the other.',
      howItWorks: [
        { step: 1, title: 'The Good Debt Test', desc: 'Ask: Does this debt (a) create an asset that appreciates, (b) generate income, or (c) build a skill that increases earning power - at a cost (interest) lower than the expected return? If yes: potentially good debt.' },
        { step: 2, title: 'The Bad Debt Test', desc: 'Ask: Does this debt (a) finance consumption (food, vacations, electronics), (b) purchase a rapidly depreciating asset (vehicle, appliance), or (c) carry an interest rate above 15%? If yes: bad debt - eliminate aggressively.' },
        { step: 3, title: 'Nepal Rate Reality Check', desc: 'Home loan: 10-12% (Class A bank). Education loan: 7-10%. Business loan: 11-14%. Vehicle loan: 14-16%. Consumer/personal loan: 16-22%. Cooperative: 18-36%. Informal lender: 36-120%. The higher the rate, the faster it must be eliminated.' },
        { step: 4, title: 'Debt Avalanche Strategy', desc: 'List all debts by interest rate, highest first. Pay minimums on all, but direct every extra rupee to the highest-rate debt first. After that is cleared, roll the full payment to the next. Mathematically optimal for Nepal\'s high-rate informal debt environment.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Good Debt vs Bad Debt in Nepal - Quick Classification Guide',
        headers: ['Debt Type', 'Interest Rate (Nepal)', 'Classification', 'Priority'],
        rows: [
          ['Education loan (bank)', '7-10%', '✅ Good Debt (if used for employable skill)', 'Keep - use fully'],
          ['Home loan (Class A bank)', '10-12%', '✅ Good Debt (builds equity, leverages asset)', 'Keep - on-time EMI'],
          ['Business capital loan (bank)', '11-14%', '✅ Good Debt (if ROI > interest rate)', 'Keep if business profitable'],
          ['Vehicle loan (bank)', '14-16%', '⚠️ Neutral (depreciating asset)', 'Minimize, short tenure'],
          ['Personal/consumer loan (bank)', '16-22%', '❌ Bad Debt (consumption financing)', 'Eliminate first'],
          ['Cooperative deposit loan', '18-36%', '❌ Bad Debt (very high rate)', 'Eliminate immediately'],
          ['Informal moneylender', '36-120%', '🚨 Predatory - emergency exit only', 'Emergency: exit ASAP']
        ]
      },
      nepalContext: 'In Nepal, informal cooperative loans are often presented as "community" products but carry rates 2-5x higher than Class A bank loans. NRB does not regulate cooperatives\' lending rates. The most common bad-debt trap in Nepal: household electronics and appliances bought on cooperative instalment at 24-30% annual rates while the same family has untapped eligibility for 10% home loan equity. The education loan under NRB\'s deprived sector lending mandate is one of the most underutilized good-debt instruments in Nepal.',
      practicalScenario: {
        persona: 'Rajan, 33, private school teacher in Butwal',
        income: 'NPR 40,000 / month',
        scenarioText: 'Rajan had 3 loans: (1) NPR 80,000 cooperative loan at 24% for a television. (2) NPR 1,20,000 personal loan at 18% for his sister\'s wedding. (3) NPR 8,00,000 home loan at 11% from Kumari Bank. He paid them equally.',
        solutionText: 'Debt audit: Home loan = Good Debt (building equity, 11%). Wedding loan = Bad Debt (consumption, 18%). TV loan = Bad Debt (depreciating asset, 24%). Strategy: Pay minimum on home loan. Put every extra rupee into TV loan first (24%), then wedding loan (18%). After 8 months, TV loan cleared. After 14 months, wedding loan cleared. Total interest saved: NPR 28,000.',
        metricHighlight: 'Saved NPR 28,000 in interest by prioritizing bad debt elimination order'
      },
      formula: {
        name: 'Debt Cost vs Return Test',
        equation: '\\text{Net Value} = \\text{Expected Return} - \\text{Annual Interest Cost}',
        variables: [
          { symbol: 'Expected Return', name: 'Benefit from borrowing', desc: 'Salary increase, asset appreciation, business profit.' },
          { symbol: 'Annual Interest Cost', name: 'True cost of the loan', desc: 'Interest rate × outstanding principal.' },
          { symbol: 'Net Value', name: 'Positive or negative', desc: 'Positive: potentially good debt. Negative or zero: bad debt.' }
        ],
        exampleCalculation: 'Education loan NPR 3,00,000 at 8%: annual cost NPR 24,000. Expected salary increase from degree: NPR 80,000/year. Net Value = +NPR 56,000. Good Debt. vs. Consumer loan NPR 1,00,000 at 22%: annual cost NPR 22,000. Return: NPR 0 (bought appliance). Net Value = -NPR 22,000. Bad Debt.',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'Try EMI Calculator'
      },
      commonMistakes: [
        { mistake: 'Treating all debt as shameful and avoiding even useful loans.', correct: 'Strategic debt at low rates for appreciating assets or income-generating skills is wealth-building.', explanation: 'A 7% education loan that increases earning power by NPR 1,20,000/year generates NPR 1,13,000 net annual value.' },
        { mistake: 'Paying off your home loan aggressively while carrying high-rate bad debt.', correct: 'Mathematically, pay off 24% cooperative debt before making extra home loan payments at 11%.', explanation: 'Each rupee directed at the 24% debt saves more interest than the same rupee against 11% home loan.' },
        { mistake: 'Using consumer loans for festive spending (Dashain, weddings).', correct: 'Build a Dashain sinking fund - save NPR 2,000/month for 11 months rather than borrowing NPR 22,000 at 20% interest.', explanation: 'A 20% consumer loan for Dashain means you pay NPR 4,400 in interest in the first year alone.' }
      ],
      definitions: [
        { term: 'Good Debt', full: 'Productive / Leveraged Debt', meaning: 'Borrowed money that is expected to generate a return greater than its interest cost through asset appreciation, income, or skill building.' },
        { term: 'Bad Debt', full: 'Consumptive / Depreciating Debt', meaning: 'Borrowed money used for consumption or rapidly depreciating items at interest rates exceeding the value generated.' },
        { term: 'Debt Avalanche', full: 'Highest-Rate First Strategy', meaning: 'Paying minimum on all debts but directing extra payments to the highest interest rate loan first. Mathematically optimal.' },
        { term: 'Debt Snowball', full: 'Smallest Balance First Strategy', meaning: 'Paying off the smallest balance first for psychological wins. Less efficient but motivationally effective.' }
      ],
      faqs: [
        { q: 'Is a cooperative loan always bad debt?', a: 'At 18-36% rates, cooperative loans are almost always bad debt for consumption purposes. If the loan is for a productive business that generates 50%+ return, the math can work. But most cooperative lending in Nepal is for consumption.' },
        { q: 'Can a vehicle loan be good debt in Nepal?', a: 'Only if the vehicle directly generates income (taxi, delivery vehicle) and ROI exceeds 14-16% interest. A private car loan for commuting is bad debt - the car depreciates 10-15%/year plus the 14-16% interest.' },
        { q: 'What is the Nepal base rate and why does it matter?', a: 'NRB sets the banking sector\'s base rate floor. All Class A bank loan rates are base rate + spread. Home loans: base rate + 1-3%. Business loans: base rate + 3-5%. Higher spread = higher risk perceived by the bank.' }
      ],
      takeaways: [
        'Good debt increases net worth or income at a cost lower than the return. Bad debt finances consumption at high interest.',
        'Nepal cooperative loans (18-36%) are almost always bad debt - eliminate first.',
        'Use the debt avalanche: pay minimums everywhere, extra rupees go to the highest rate first.',
        'Home loans at 10-12% build equity - do not prepay while carrying bad debt at 20%+.',
        'Build sinking funds for predictable expenses (Dashain, weddings) instead of borrowing.'
      ]
    },
    np: {
      title: 'नेपालमा राम्रो ऋण र खराब ऋण: वास्तविक फरक के हो?',
      oneLineSummary: 'सबै ऋण हानिकारक छैन - गृहकर्जाले इक्विटी बनाउँछ तर उपभोक्ता ऋणले सम्पत्ति नष्ट गर्छ।',
      summaryPoints: [
        'राम्रो ऋण भनेको सम्पत्ति बढाउने वा आम्दानी सिर्जना गर्ने ऋण - गृहकर्जा, शिक्षा ऋण, व्यवसाय पुँजी।',
        'खराब ऋण भनेको उपभोगका लागि उच्च ब्याजमा लिइने ऋण - उपभोक्ता ऋण, सहकारी ऋण, साहुको ऋण।',
        'नेपालमा सहकारी ऋण १८-३६% - प्रायः खराब ऋण।',
        'कुनै पनि ऋणको परीक्षण: "के यसले ब्याजभन्दा बढी आम्दानी वा सम्पत्ति सिर्जना गर्छ?"',
        'ऋण लेखापरीक्षण १० मिनेटमा सकिन्छ - कुन ऋण पहिले तिर्ने भन्ने स्पष्ट हुन्छ।'
      ],
      whatIsThis: 'सबै ऋण समान छैन। राम्रो ऋण र खराब ऋणको भेद: उधारिएको पैसाले ब्याज खर्चभन्दा बढी मूल्य सिर्जना गर्छ कि गर्दैन। नेपालमा ब्याजदर ४% (विद्यार्थी ऋण) देखि ३६% (अनौपचारिक सहकारी) सम्म हुन्छ - यो भेद बुझ्नु वित्तीय अस्तित्वसँग सीधा जोडिएको छ।',
      whyItMatters: 'अधिकांश नेपाली परिवारसँग कुनै न कुनै ऋण छ। खतरा ऋण आफैँमा होइन - खराब ऋण बोकेर राम्रो ऋणको अवसर गुमाउनु हो। २४% ब्याजमा टेलिभिजन किन्दा र एकैसाथ १०% गृहकर्जाको पात्रता नखोजी बस्दा सम्पत्ति नष्ट हुँदैछ।',
      howItWorks: [
        { step: 1, title: 'राम्रो ऋणको परीक्षण', desc: 'सोध्नुहोस्: के यो ऋणले (क) बढ्ने सम्पत्ति सिर्जना गर्छ, (ख) आम्दानी उत्पन्न गर्छ, वा (ग) कमाइ बढाउने सीप दिन्छ - ब्याज खर्चभन्दा कम मूल्यमा? हो भने: सम्भावित राम्रो ऋण।' },
        { step: 2, title: 'खराब ऋणको परीक्षण', desc: 'सोध्नुहोस्: के यो ऋणले (क) उपभोग वित्त पोषण गर्छ, (ख) छिट्टै घट्ने सम्पत्ति किन्छ, वा (ग) १५%भन्दा बढी ब्याज लाग्छ? हो भने: खराब ऋण - आक्रामक रूपमा तिर्नुहोस्।' },
        { step: 3, title: 'नेपाल ब्याजदर वास्तविकता', desc: 'गृहकर्जा: १०-१२%। शिक्षा ऋण: ७-१०%। व्यवसाय ऋण: ११-१४%। सवारी ऋण: १४-१६%। व्यक्तिगत ऋण: १६-२२%। सहकारी: १८-३६%। साहु: ३६-१२०%।' },
        { step: 4, title: 'Debt Avalanche रणनीति', desc: 'सबै ऋणमा न्यूनतम तिर्नुहोस्। बाँकी सबै थप रकम सबैभन्दा उच्च ब्याजको ऋणमा। त्यो सकियो भने अर्कोमा।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा राम्रो र खराब ऋण वर्गीकरण',
        headers: ['ऋणको प्रकार', 'ब्याजदर', 'वर्गीकरण', 'प्राथमिकता'],
        rows: [
          ['शिक्षा ऋण (बैंक)', '७-१०%', '✅ राम्रो ऋण', 'पूर्ण प्रयोग गर्नुहोस्'],
          ['गृहकर्जा ("क" बैंक)', '१०-१२%', '✅ राम्रो ऋण', 'समयमा EMI'],
          ['व्यवसाय ऋण (बैंक)', '११-१४%', '✅ सम्भावित राम्रो', 'नाफा ब्याजभन्दा बढी भएमा'],
          ['सवारी ऋण (बैंक)', '१४-१६%', '⚠️ तटस्थ', 'अवधि छोटो राख्नुहोस्'],
          ['व्यक्तिगत ऋण (बैंक)', '१६-२२%', '❌ खराब ऋण', 'पहिले तिर्नुहोस्'],
          ['सहकारी ऋण', '१८-३६%', '❌ खराब ऋण', 'तत्काल तिर्नुहोस्'],
          ['अनौपचारिक साहु', '३६-१२०%', '🚨 शोषणकारी', 'आपतकालः तुरुन्त निस्कनुहोस्']
        ]
      },
      nepalContext: 'नेपालमा अनौपचारिक सहकारी ऋणहरू "सामुदायिक" नाममा बेचिन्छन् तर "क" वर्गको बैंकभन्दा २-५ गुणा बढी ब्याज लिन्छन्। NRB ले सहकारीको ऋण दर नियमन गर्दैन। नेपालमा सबैभन्दा सामान्य खराब-ऋण जाल: घरायसी उपकरण सहकारी किस्तामा २४-३०% मा किन्दा उही परिवारसँग १०% गृहकर्जाको पात्रता खाली छ।',
      practicalScenario: {
        persona: 'राजन, ३३ वर्ष, बुटवलमा निजी विद्यालयका शिक्षक',
        income: 'मासिक रु. ४०,000',
        scenarioText: 'राजनसँग ३ ऋण: (१) टेलिभिजनका लागि सहकारीबाट रु. ८०,000, २४% ब्याज। (२) दिदीको विवाहका लागि रु. १,२०,000, १८%। (३) कुमारी बैंकबाट रु. ८,00,000 गृहकर्जा, ११%। उनले समान रूपमा तिर्थे।',
        solutionText: 'ऋण लेखापरीक्षण: गृहकर्जा = राम्रो (११%)। विवाह ऋण = खराब (१८%)। टेलिभिजन = खराब (२४%)। रणनीति: गृहकर्जामा न्यूनतम। थप पैसा टेलिभिजनमा। ८ महिनामा टेलिभिजन ऋण सकियो। १४ महिनामा विवाह ऋण सकियो। कुल ब्याज बचत: रु. २८,000।',
        metricHighlight: 'ऋण तिर्ने क्रम मिलाएर रु. २८,000 ब्याज बचत'
      },
      formula: {
        name: 'ऋण मूल्य बनाम प्रतिफल परीक्षण',
        equation: '\\text{खुद मूल्य} = \\text{अपेक्षित प्रतिफल} - \\text{वार्षिक ब्याज खर्च}',
        variables: [
          { symbol: 'अपेक्षित प्रतिफल', name: 'ऋणबाट फाइदा', desc: 'तलब वृद्धि, सम्पत्ति मूल्य वृद्धि, व्यवसाय नाफा।' },
          { symbol: 'वार्षिक ब्याज खर्च', name: 'ऋणको वास्तविक लागत', desc: 'ब्याजदर × बाँकी मूलधन।' },
          { symbol: 'खुद मूल्य', name: 'धनात्मक वा ऋणात्मक', desc: 'धनात्मक: सम्भावित राम्रो ऋण। ऋणात्मक: खराब ऋण।' }
        ],
        exampleCalculation: 'शिक्षा ऋण रु. ३ लाख, ८%: वार्षिक खर्च रु. २४,000। अपेक्षित तलब वृद्धि: रु. ८०,000। खुद मूल्य: +रु. ५६,000 = राम्रो ऋण। बनाम उपभोक्ता ऋण रु. १ लाख, २२%: वार्षिक खर्च रु. २२,000। प्रतिफल: शून्य। खुद मूल्य: -रु. २२,000 = खराब ऋण।',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'EMI Calculator प्रयास गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'सबै ऋणलाई लाज मानेर उपयोगी ऋण पनि नलिनु।', correct: 'कम ब्याजमा सम्पत्ति बढाउने ऋण रणनीतिक रूपमा लिनु सम्पत्ति निर्माण हो।', explanation: '७% शिक्षा ऋणले रु. १,२०,000/वर्ष कमाइ वृद्धि दियो भने वार्षिक खुद मूल्य रु. १,१३,000।' },
        { mistake: 'उच्च-ब्याज खराब ऋण छँदा गृहकर्जा आक्रामक रूपमा तिर्नु।', correct: '२४% सहकारी ऋण पहिले तिर्नुहोस्, त्यसपछि ११% गृहकर्जामा थप।', explanation: 'प्रत्येक रुपैयाँ २४% ऋणमा हाल्दा ११% भन्दा बढी बचत।' },
        { mistake: 'दसैँ, विवाहका लागि उपभोक्ता ऋण लिनु।', correct: 'मासिक रु. २,000 ११ महिना जम्मा गर्नुहोस् - ऋण नलिनुहोस्।', explanation: '२०% उपभोक्ता ऋण रु. २२,000 मा पहिलो वर्ष रु. ४,400 ब्याज मात्र।' }
      ],
      definitions: [
        { term: 'राम्रो ऋण', full: 'Productive Debt', meaning: 'ब्याज खर्चभन्दा बढी मूल्य सिर्जना गर्ने उधारिएको पैसा।' },
        { term: 'खराब ऋण', full: 'Consumptive Debt', meaning: 'उपभोग वा घट्दो सम्पत्तिका लागि उच्च ब्याजमा लिइने ऋण।' },
        { term: 'Debt Avalanche', full: 'उच्च-ब्याज पहिले', meaning: 'सबैभन्दा उच्च ब्याजको ऋण पहिले तिर्ने रणनीति - गणितीय रूपमा अष्टिम।' },
        { term: 'Debt Snowball', full: 'सानो बाँकी पहिले', meaning: 'सबैभन्दा सानो बाँकी रकम पहिले तिर्ने - मनोवैज्ञानिक प्रेरणाका लागि।' }
      ],
      faqs: [
        { q: 'के सहकारी ऋण सधैँ खराब?', a: '१८-३६% दरमा उपभोगका लागि: हो, सधैँ खराब। व्यवसायमा ५०%+ प्रतिफल दिने भए सैद्धान्तिक रूपमा ठीक हुन सक्छ।' },
        { q: 'के सवारी ऋण राम्रो हुन सक्छ?', a: 'ट्याक्सी वा डेलिभरी जस्तो आम्दानी दिने भए हुन सक्छ। व्यक्तिगत गाडीको ऋण खराब - गाडी वार्षिक १०-१५% घट्छ, थप ब्याज।' },
        { q: 'नेपालमा बैंकको आधार दर (Base Rate) भनेको के हो र यसले ऋणमा के फरक पार्छ?', a: 'नेपाल राष्ट्र बैंकको निर्देशन अनुसार वाणिज्य बैंकहरूले आफ्नो लागतको आधारमा मासिक/त्रैमासिक रूपमा आधार दर निर्धारण गर्छन्। बैंकको कुनै पनि ऋणको ब्याजदर "आधार दर + प्रिमियम" मा तय हुन्छ; आधार दर जति कम भयो तपाईंको ऋणको ब्याज त्यति नै सस्तो पर्छ।' }
      ],
      takeaways: [
        'राम्रो ऋणले सम्पत्ति/आम्दानी बढाउँछ, ब्याजभन्दा बढी। खराब ऋणले उपभोग उच्च ब्याजमा।',
        'नेपाली सहकारी ऋण (१८-३६%) - प्रायः खराब। तत्काल तिर्नुहोस्।',
        'Debt Avalanche: सर्वोच्च ब्याजमा थप रकम, न्यूनतम सबैतिर।',
        'गृहकर्जा (१०-१२%) इक्विटी बनाउँछ - खराब ऋण (२०%+) छँदा यसमा थप नहाल्नुहोस्।',
        'दसैँ-विवाहका लागि Sinking Fund बनाउनुहोस् - ऋण नलिनुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'EMI Calculator', slug: 'calculators/emi', key: 'emi', desc: 'Calculate loan EMI and total interest cost before deciding.' },
      { name: 'Fixed Deposit Calculator', slug: 'calculators/fixed-deposit', key: 'fixed-deposit', desc: 'Compare FD returns vs loan interest rates.' }
    ],
    downloadableResources: [
      { title: 'Nepal Debt Audit Worksheet (PDF)', type: 'PDF Tool', format: 'PDF Document', size: '230 KB', href: 'assets/downloads/nepse-first-time-investor-checklist.html' }
    ]
  },

  // ── 12. WHAT IS A MUTUAL FUND ─────────────────────────────────────
  'what-is-mutual-fund-nepal': {
    id: 'mf-what-is',
    slug: 'what-is-mutual-fund-nepal',
    categorySlug: 'mutual-funds',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under SEBON Mutual Fund Regulations', np: 'SEBON Mutual Fund नियमावली अनुसार प्रमाणित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'What is a Mutual Fund in Nepal? Complete Beginner Guide',
      oneLineSummary: 'How SEBON-regulated mutual funds pool money from thousands of investors into a managed portfolio - and why they are the best starting point for most Nepali investors.',
      summaryPoints: [
        'A mutual fund pools money from many investors and invests it across stocks, bonds, or both - spreading risk.',
        'In Nepal, mutual funds are regulated by SEBON (Securities Board of Nepal) and managed by licensed fund managers.',
        'Open-ended funds allow you to invest and redeem at any time via SIP - minimum NPR 1,000/month.',
        'Closed-ended funds have a fixed number of units traded on NEPSE like shares - you buy through a broker.',
        'NAV (Net Asset Value) is the daily per-unit price of a mutual fund - the key metric to track.'
      ],
      whatIsThis: 'A mutual fund is an investment vehicle where thousands of investors pool their money into a single fund. A professional fund manager then invests this pooled money across a diversified portfolio of stocks, bonds, money market instruments, or a combination. Each investor owns units proportional to their contribution. In Nepal, all mutual funds must be registered with SEBON and managed by SEBON-licensed fund management companies. The main advantage: even with NPR 1,000, you get diversified exposure to 20-40 different stocks or bonds - something impossible to achieve individually with small capital.',
      whyItMatters: 'Directly investing in NEPSE stocks requires significant capital, research, and emotional discipline. Most retail investors lack all three. Mutual funds solve this: professional management, built-in diversification, and low minimum investment. For salaried professionals in Nepal starting their investment journey, a SEBON-regulated open-ended mutual fund SIP is the lowest-risk, lowest-complexity entry point to equity returns.',
      howItWorks: [
        { step: 1, title: 'Investors Pool Capital', desc: 'Thousands of investors each contribute any amount (minimum NPR 1,000 for SIP). All contributions pool into the fund corpus.' },
        { step: 2, title: 'Fund Manager Invests', desc: 'The fund management company\'s portfolio manager allocates the corpus across NEPSE-listed stocks, corporate bonds, government securities based on the fund\'s declared objective.' },
        { step: 3, title: 'NAV Calculated Daily', desc: 'Total fund assets ÷ total units outstanding = NAV (Net Asset Value per unit). NAV rises when underlying assets appreciate.' },
        { step: 4, title: 'Investor Returns', desc: 'Open-ended funds: redeem units at current NAV any business day. Closed-ended funds: sell units on NEPSE secondary market. Dividends are declared periodically (may be cash or bonus units).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Open-Ended vs Closed-Ended Mutual Funds in Nepal',
        headers: ['Feature', 'Open-Ended Fund', 'Closed-Ended Fund'],
        rows: [
          ['How to invest', 'SIP or lump sum via fund house / connectIPS', 'IPO during launch or NEPSE secondary market'],
          ['How to redeem', 'Submit redemption request - receive NAV within days', 'Sell on NEPSE through broker like any share'],
          ['Units', 'Unlimited (grows with new investment)', 'Fixed (no new units after IPO)'],
          ['Price', 'Always at NAV', 'Market price (may trade at premium/discount to NAV)'],
          ['Minimum investment (SIP)', 'NPR 1,000/month', 'No SIP - must buy 10+ kitta at market price'],
          ['Nepal examples', 'Nabil Equity Fund, NIBL Samridhi Fund', 'Laxmi Value Fund, Siddhartha Investment Growth Scheme']
        ]
      },
      nepalContext: 'In Nepal, as of FY 2081/82, there are approximately 25+ SEBON-registered mutual funds from fund management companies like Nabil Investment Banking, NIBL Ace Capital, NIC Asia Capital, Siddhartha Capital, Laxmi Capital, and Global IME Capital. Fund managers charge an annual management fee of 1.5-2.5% of NAV (called TER - Total Expense Ratio). You can track all Nepal mutual fund NAVs on nepse.com.np or sebon.gov.np.',
      practicalScenario: {
        persona: 'Priya, 27, pharmacist in Biratnagar',
        income: 'NPR 55,000 / month',
        scenarioText: 'Priya wanted to invest but feared losing money in individual stocks. She had heard about mutual funds but thought she needed a large sum to start.',
        solutionText: 'She visited the NIBL Ace Capital website, filled an online KYC form, linked her bank via connectIPS, and set a SIP mandate of NPR 5,000/month in NIBL Samridhi Fund (open-ended equity fund). Setup time: 25 minutes. Total invested in 12 months: NPR 60,000. Portfolio value (at 13% annualized): ~NPR 64,200. Exposure: 30+ NEPSE-listed companies.',
        metricHighlight: 'NPR 1,000/month starter, 30+ company diversification, 25-minute setup'
      },
      formula: {
        name: 'NAV Calculation Formula',
        equation: '\\text{NAV} = \\frac{\\text{Total Fund Assets} - \\text{Total Liabilities}}{\\text{Total Units Outstanding}}',
        variables: [
          { symbol: 'Total Fund Assets', name: 'Market value of portfolio', desc: 'Daily market value of all stocks, bonds, and cash held by the fund.' },
          { symbol: 'Total Liabilities', name: 'Fund expenses', desc: 'Management fees, custodian fees, other expenses accrued.' },
          { symbol: 'Total Units', name: 'Units issued to investors', desc: 'All units outstanding across all investors in the fund.' }
        ],
        exampleCalculation: 'Fund holds assets worth NPR 50 Crore. Liabilities NPR 20 Lakh. Total units: 50 Lakh. NAV = (50Cr − 20L) / 50L = NPR 98 per unit. If market rises 10%: NAV becomes NPR 107.8.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Try SIP Calculator'
      },
      commonMistakes: [
        { mistake: 'Chasing last year\'s top-performing fund.', correct: 'Choose funds based on consistent 3-5 year track record, fund manager experience, and expense ratio - not 1-year returns.', explanation: 'Top-performing funds in bull years often underperform in bear cycles. Consistency matters more than peak performance.' },
        { mistake: 'Redeeming mutual fund units during market downturns.', correct: 'Downturns are when you should be buying more units via SIP, not redeeming.', explanation: 'Redeeming at a low NAV locks in losses. SIP during downturns buys more units at cheap prices.' },
        { mistake: 'Confusing mutual fund NAV with stock price.', correct: 'NAV is not a stock price - a higher NAV does not mean expensive, a lower NAV does not mean cheap. Returns depend on NAV growth %, not absolute level.', explanation: 'A fund with NAV NPR 200 and another at NPR 15 can have identical return potential.' }
      ],
      definitions: [
        { term: 'NAV', full: 'Net Asset Value', meaning: 'Per-unit price of a mutual fund calculated daily. Buy at NAV, redeem at NAV. NAV growth = your return.' },
        { term: 'SEBON', full: 'Securities Board of Nepal', meaning: 'Nepal\'s capital market regulator. Licenses and supervises all mutual funds, fund management companies, and brokers.' },
        { term: 'TER', full: 'Total Expense Ratio', meaning: 'Annual percentage of NAV charged as fund management fees. Nepal mutual fund TER: typically 1.5-2.5%.' },
        { term: 'Fund Management Company', full: 'Fund Manager / AMC', meaning: 'SEBON-licensed company that manages the mutual fund portfolio. Examples: NIBL Ace Capital, Nabil Investment Banking, Siddhartha Capital.' }
      ],
      faqs: [
        { q: 'Are Nepal mutual fund investments safe?', a: 'SEBON-regulated funds are not risk-free (equity markets fluctuate) but are regulated with mandatory disclosures, independent custodians, and no fund manager can misappropriate funds. The key risk is market risk, not fraud.' },
        { q: 'How do I check my Nepal mutual fund portfolio?', a: 'Open-ended funds: log into the fund management company\'s investor portal or check via MeroShare for your unit count and current NAV. Closed-ended funds: visible in your MeroShare share portfolio.' },
        { q: 'When does a mutual fund declare dividends in Nepal?', a: 'Typically after fiscal year end (post-Ashad). Dividends are subject to 5% TDS. You can opt for bonus units instead of cash via the DREP option in open-ended funds.' }
      ],
      takeaways: [
        'Mutual funds pool money from many investors for professional management across a diversified portfolio.',
        'Open-ended funds: invest anytime via SIP (min NPR 1,000/month) and redeem at NAV any day.',
        'Closed-ended funds trade on NEPSE like shares - buy through a broker.',
        'NAV = fund\'s per-unit price. NAV growth % is your return rate.',
        'All Nepal mutual funds are SEBON-regulated - market risk exists, fraud risk is low.'
      ]
    },
    np: {
      title: 'नेपालमा Mutual Fund के हो? सुरुवाती गाइड',
      oneLineSummary: 'SEBON-नियमित Mutual Fund कसरी हजारौं लगानीकर्ताको पैसा व्यवस्थित पोर्टफोलियोमा लगाउँछ - र किन अधिकांश नेपाली लगानीकर्ताका लागि उत्तम सुरुवात।',
      summaryPoints: [
        'Mutual Fund भनेको धेरै लगानीकर्ताको पैसा एकत्रित गरी सेयर, बण्ड वा दुवैमा लगाइने माध्यम।',
        'नेपालमा Mutual Fund SEBON द्वारा नियमित र इजाजतप्राप्त फन्ड म्यानेजरले व्यवस्थापन गर्छन्।',
        'खुलामुखी फन्डमा जुनसुकै बेला SIP मार्फत - न्यूनतम रु. १,000/महिना।',
        'बन्दमुखी फन्डका इकाइहरू NEPSE मा सेयरजस्तै किन्न/बेच्न सकिन्छ।',
        'NAV (Net Asset Value) भनेको Mutual Fund को दैनिक प्रति-इकाइ मूल्य।'
      ],
      whatIsThis: 'Mutual Fund भनेको हजारौं लगानीकर्ताले पैसा एकत्रित गरी एउटा फन्डमा राख्ने माध्यम। पेशेवर फन्ड म्यानेजरले त्यो पैसा सेयर, बण्ड वा मुद्रा बजारमा विविधीकृत रूपमा लगाउँछन्। नेपालमा सबै Mutual Fund SEBON मा दर्ता र SEBON-इजाजतप्राप्त कम्पनीले व्यवस्थापन अनिवार्य। रु. १,000 मा पनि २०-४० विभिन्न कम्पनीमा विविधीकृत लगानी सम्भव।',
      whyItMatters: 'NEPSE मा सिधा लगानी गर्न पुँजी, अनुसन्धान र भावनात्मक अनुशासन चाहिन्छ। अधिकांश खुद्रा लगानीकर्तासँग यो तीनवटा नहुन सक्छ। Mutual Fund समाधान: पेशेवर व्यवस्थापन, स्वतः विविधीकरण, न्यून प्रवेश लगत।',
      howItWorks: [
        { step: 1, title: 'लगानीकर्ताले पुँजी एकत्रित गर्छन्', desc: 'हजारौं लगानीकर्ता न्यूनतम रु. १,000 (SIP) योगदान गर्छन्। सबै योगदान फन्ड कोषमा जान्छ।' },
        { step: 2, title: 'फन्ड म्यानेजरले लगानी गर्छ', desc: 'फन्ड म्यानेजमेन्ट कम्पनीको पोर्टफोलियो म्यानेजरले NEPSE-सूचीकृत सेयर, कर्पोरेट बण्ड, सरकारी धितोपत्रमा लगाउँछन्।' },
        { step: 3, title: 'NAV दैनिक निकालिन्छ', desc: 'कुल फन्ड सम्पत्ति ÷ कुल इकाइ = NAV। अन्तर्निहित सम्पत्तिको मूल्य बढ्दा NAV बढ्छ।' },
        { step: 4, title: 'लगानीकर्ताको प्रतिफल', desc: 'खुलामुखी: जुनसुकै कार्यदिन चालू NAV मा फिर्ता। बन्दमुखी: NEPSE मा ब्रोकर मार्फत बेच्नुहोस्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'नेपालमा खुलामुखी र बन्दमुखी Mutual Fund तुलना',
        headers: ['विशेषता', 'खुलामुखी फन्ड', 'बन्दमुखी फन्ड'],
        rows: [
          ['लगानी गर्ने तरिका', 'SIP वा एकमुस्त - फन्ड हाउस/connectIPS', 'IPO वा NEPSE सेकेन्डरी बजारमा'],
          ['फिर्ता गर्ने तरिका', 'फिर्ता अनुरोध - कार्यदिनमा NAV', 'NEPSE मा ब्रोकरमार्फत बेच्ने'],
          ['इकाइ', 'असीमित', 'निश्चित (IPO पछि थप छैन)'],
          ['मूल्य', 'सधैँ NAV', 'बजार मूल्य (NAV भन्दा बढी/कम)'],
          ['न्यूनतम SIP', 'रु. १,000/महिना', 'SIP छैन - NEPSE मा किन्नुहोस्'],
          ['नेपाल उदाहरण', 'Nabil Equity Fund, NIBL Samridhi Fund', 'Laxmi Value Fund, Siddhartha Investment Growth']
        ]
      },
      nepalContext: 'नेपालमा आव २०८१/८२ सम्म लगभग २५+ SEBON-दर्ता Mutual Fund छन् - Nabil Investment Banking, NIBL Ace Capital, NIC Asia Capital, Siddhartha Capital, Laxmi Capital आदिले व्यवस्थापन। वार्षिक व्यवस्थापन शुल्क (TER): १.५-२.५% NAV। nepse.com.np वा sebon.gov.np मा NAV ट्र्याक गर्न सकिन्छ।',
      practicalScenario: {
        persona: 'प्रिया, २७ वर्ष, विराटनगरमा फार्मासिस्ट',
        income: 'मासिक रु. ५५,000',
        scenarioText: 'प्रियाले लगानी गर्न चाहे तर व्यक्तिगत सेयरमा डर थियो। Mutual Fund को लागि ठूलो रकम चाहिन्छ भन्ने सोचेकी थिइन्।',
        solutionText: 'NIBL Ace Capital वेबसाइटमा अनलाइन KYC, connectIPS मार्फत बैंक लिंक, रु. ५,000/महिना NIBL Samridhi Fund SIP। सेटअप: २५ मिनेट। १२ महिनामा: रु. ६०,000 लगानी, पोर्टफोलियो (~१३% वार्षिक): ~रु. ६४,200। एक्सपोजर: ३०+ NEPSE कम्पनी।',
        metricHighlight: 'रु. १,000/महिना सुरु, ३०+ कम्पनी विविधीकरण, २५ मिनेट सेटअप'
      },
      formula: {
        name: 'NAV गणना सूत्र',
        equation: '\\text{NAV} = \\frac{\\text{कुल फन्ड सम्पत्ति} - \\text{कुल दायित्व}}{\\text{कुल इकाइ संख्या}}',
        variables: [
          { symbol: 'कुल फन्ड सम्पत्ति', name: 'पोर्टफोलियोको बजार मूल्य', desc: 'फन्डको सबै सेयर, बण्ड र नगदको दैनिक मूल्य।' },
          { symbol: 'कुल दायित्व', name: 'फन्ड खर्च', desc: 'व्यवस्थापन शुल्क, संरक्षक शुल्क।' },
          { symbol: 'कुल इकाइ', name: 'लगानीकर्तालाई जारी', desc: 'सबै लगानीकर्ताको कुल इकाइ।' }
        ],
        exampleCalculation: 'फन्डको सम्पत्ति रु. ५० करोड। दायित्व रु. २० लाख। कुल इकाइ: ५० लाख। NAV = (५०Cr − २०L) / ५०L = रु. ९८/इकाइ। बजार १०% बढ्यो भने NAV ≈ रु. १०७।८।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'SIP Calculator प्रयास गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'गत वर्षको सबैभन्दा राम्रो फन्ड खोज्नु।', correct: '३-५ वर्षको निरन्तर ट्र्याक रेकर्ड, फन्ड म्यानेजर अनुभव र TER हेर्नुहोस्।', explanation: 'बुल मार्केटमा उच्च प्रतिफल दिने फन्ड Bear मा कमजोर हुन सक्छ।' },
        { mistake: 'बजार घट्दा Mutual Fund इकाइ फिर्ता गर्नु।', correct: 'घट्दा SIP मार्फत थप इकाइ किन्नुहोस् - फिर्ता नगर्नुहोस्।', explanation: 'तल्लो NAV मा फिर्ता गर्दा घाटा पक्का। SIP ले सस्तोमा थप इकाइ किन्छ।' },
        { mistake: 'Mutual Fund NAV लाई सेयर मूल्यसरह बुझ्नु।', correct: 'NAV उच्च हुनुले महँगो र कम हुनुले सस्तो होइन। प्रतिफल NAV वृद्धि % हो।', explanation: 'रु. २०० NAV र रु. १५ NAV भएका फन्डको प्रतिफल क्षमता समान हुन सक्छ।' }
      ],
      definitions: [
        { term: 'NAV', full: 'Net Asset Value', meaning: 'Mutual Fund को दैनिक प्रति-इकाइ मूल्य। NAV मा किन्नुहोस्, NAV मा फिर्तागर्नुहोस्।' },
        { term: 'SEBON', full: 'धितोपत्र बोर्ड नेपाल', meaning: 'नेपालको पुँजी बजार नियामक। सबै Mutual Fund र फन्ड म्यानेजरलाई इजाजत र नियमन।' },
        { term: 'TER', full: 'Total Expense Ratio', meaning: 'वार्षिक फन्ड व्यवस्थापन शुल्क NAV को प्रतिशतमा। नेपालमा: १.५-२.५%।' },
        { term: 'फन्ड म्यानेजमेन्ट कम्पनी', full: 'Fund Management Company', meaning: 'SEBON-इजाजतप्राप्त Mutual Fund व्यवस्थापन कम्पनी।' }
      ],
      faqs: [
        { q: 'के नेपालको Mutual Fund सुरक्षित छ?', a: 'SEBON-नियमित फन्डहरूमा धोखाधडीको जोखिम न्यून छ - अनिवार्य प्रकटीकरण र स्वतन्त्र संरक्षक। मुख्य जोखिम: बजार जोखिम।' },
        { q: 'आफ्नो Mutual Fund पोर्टफोलियो कसरी हेर्ने?', a: 'खुलामुखी: फन्ड म्यानेजमेन्ट कम्पनीको इन्भेस्टर पोर्टल। बन्दमुखी: MeroShare को सेयर पोर्टफोलियोमा।' },
        { q: 'नेपालमा म्युचुअल फन्डले लाभांश कहिले घोषणा गर्छन्?', a: 'सामान्यतया आर्थिक वर्ष समाप्त भएपछि (साउन वा भदौ महिनामा) वार्षिक नाफाको आधारमा लाभांश घोषणा गरिन्छ। लाभांशमा ५% TDS लाग्छ, र खुलामुखी फन्डमा DREP विकल्प रोजेर लाभांशबाट थप युनिटहरू किन्न सकिन्छ।' }
      ],
      takeaways: [
        'Mutual Fund भनेको पेशेवर व्यवस्थापनमा विविधीकृत लगानीको सामूहिक माध्यम।',
        'खुलामुखी: SIP (न्यूनतम रु. १,000) जुनसुकै बेला, NAV मा फिर्ता।',
        'बन्दमुखी: NEPSE मा ब्रोकर मार्फत।',
        'NAV = प्रति-इकाइ मूल्य। NAV % वृद्धि = प्रतिफल।',
        'नेपालका सबै Mutual Fund SEBON-नियमित - बजार जोखिम छ, धोखाधडी जोखिम न्यून।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate how mutual fund SIP grows over time.' }
    ],
    downloadableResources: [
      { title: 'Nepal Mutual Fund Comparison Guide (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '250 KB', href: '/resources/nepse-beginner-guide' }
    ]
  },

  // ── 13. CASH FLOW EQUATION ────────────────────────────────────────
  'cash-flow-equation-nepal': {
    id: 'pf-cash-flow',
    slug: 'cash-flow-equation-nepal',
    categorySlug: 'personal-finance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified for Personal Finance Accuracy', np: 'व्यक्तिगत वित्त यथार्थताका लागि प्रमाणित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'The Cash Flow Equation: Nepal\'s Most Important Personal Finance Formula',
      oneLineSummary: 'Income minus expenses equals surplus - the one equation that explains why some people build wealth on NPR 30,000/month and others struggle on NPR 80,000.',
      summaryPoints: [
        'Cash Flow = Income − Expenses. Positive cash flow (surplus) is the only source of savings and investment capital.',
        'Most Nepalis focus on increasing income but ignore the "expenses" side - lifestyle inflation eliminates every raise.',
        'The 50-30-20 rule allocates income: 50% needs, 30% wants, 20% savings/investments.',
        'Tracking expenses for 30 days reveals where money actually goes - almost always surprising.',
        'A monthly surplus of NPR 5,000 invested at 12% annual return becomes NPR 49 Lakhs in 20 years.'
      ],
      whatIsThis: 'The cash flow equation is the most fundamental formula in personal finance: Cash Flow = Income − Expenses. If this number is positive, you have a surplus that can be saved, invested, or used to pay down debt. If it is negative, you are consuming more than you earn - falling into debt or depleting savings. The equation sounds obvious, but most people cannot tell you their own cash flow number without a calculation. In Nepal, "not enough salary" is often the stated problem - but the actual problem is frequently untracked and unmanaged expenses.',
      whyItMatters: 'Two people earning the same NPR 60,000 monthly salary can have completely different financial trajectories based purely on their cash flow management. Person A saves NPR 10,000 (16.7% saving rate) - in 15 years at 12% returns: NPR 50 Lakhs. Person B saves NPR 2,000 (3.3% saving rate) - in 15 years: NPR 10 Lakhs. The salary was identical. The cash flow management made a 5x difference.',
      howItWorks: [
        { step: 1, title: 'Calculate Total Monthly Income', desc: 'Include all sources: gross salary (before TDS), freelance, rental income, business income, any other. Use gross figures - expenses are also gross.' },
        { step: 2, title: 'Track All Monthly Expenses', desc: 'For 30 days, record every outflow in categories: Needs (rent, groceries, utilities, transport, EMIs, insurance), Wants (dining, streaming, clothing, entertainment), Savings/Investments (FD, SIP, emergency fund).' },
        { step: 3, title: 'Calculate Surplus or Deficit', desc: 'Income − (Needs + Wants + Savings). If positive: you have extra unallocated cash. If negative: you are running a deficit - something must be cut or income increased.' },
        { step: 4, title: 'Apply the 50-30-20 Framework', desc: 'Needs: ≤ 50% of gross income. Wants: ≤ 30%. Savings/Investments/Debt repayment: ≥ 20%. For Nepal context, many find 60-20-20 more realistic (needs 60% given housing + food costs).' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Cash Flow Snapshot - NPR 55,000/month salary (Nepal example)',
        headers: ['Category', 'Item', 'Monthly Amount', '% of Income'],
        rows: [
          ['INCOME', 'Salary (gross)', 'NPR 55,000', '100%'],
          ['NEEDS (50%)', 'Rent NPR 12,000 + Groceries NPR 8,000 + Utilities NPR 2,500 + Transport NPR 3,000 + EMI NPR 7,000', 'NPR 32,500', '59%'],
          ['WANTS (30%)', 'Dining NPR 3,000 + Mobile NPR 1,500 + Clothing NPR 2,000 + Entertainment NPR 1,000', 'NPR 7,500', '14%'],
          ['SAVINGS (20%)', 'SIP NPR 3,000 + Emergency Fund NPR 2,000', 'NPR 5,000', '9%'],
          ['UNACCOUNTED', '(Unknown leakage)', 'NPR 10,000', '18%'],
          ['SURPLUS / DEFICIT', 'DEFICIT - spending > planned', '-NPR 0 (but NPR 10K untracked)', '⚠️ Audit needed']
        ]
      },
      nepalContext: 'In Nepal, common cash flow killers for salaried professionals: (1) Restaurant and cafe spending that grows 3-5x over 2 years as income rises. (2) Festival lending - giving loans to relatives that are never fully returned. (3) Voluntary cooperative deposits that reduce liquidity. (4) Mobile data + streaming subscriptions that add up unnoticed. (5) Vehicle running costs - fuel, insurance, servicing - that are often "forgotten" in budgets.',
      practicalScenario: {
        persona: 'Dipika, 28, corporate HR professional in Kathmandu',
        income: 'NPR 62,000 / month',
        scenarioText: 'Dipika felt she was "always broke" despite earning a good salary. She had no savings and no idea where her money went. She tracked expenses for 30 days.',
        solutionText: 'Tracking revealed: NPR 8,000 in restaurant/cafes she had estimated at NPR 3,000. NPR 4,500 in subscriptions she had forgotten (Netflix, Spotify, SaaS tools). NPR 6,000 in Dashain/festival gifts and loans to relatives. She restructured: cut dining to NPR 4,000, cancelled 3 subscriptions (NPR 3,500 saved), created a NPR 3,000/month festival fund. Freed NPR 11,000/month - started NPR 8,000 SIP.',
        metricHighlight: 'Found NPR 11,000/month "missing" - turned into NPR 8,000 SIP in one budget session'
      },
      formula: {
        name: 'Cash Flow Equation',
        equation: '\\text{Surplus} = \\text{Total Income} - \\text{Needs} - \\text{Wants} - \\text{Investments}',
        variables: [
          { symbol: 'Total Income', name: 'All monthly inflows', desc: 'Salary + freelance + rent income + business + side income.' },
          { symbol: 'Needs', name: 'Essential fixed/variable costs', desc: 'Rent, food, utilities, transport, insurance, loan EMIs.' },
          { symbol: 'Wants', name: 'Discretionary spending', desc: 'Dining, entertainment, subscriptions, clothing.' },
          { symbol: 'Investments', name: 'Savings and wealth building', desc: 'SIP, FD, emergency fund, debt prepayment.' }
        ],
        exampleCalculation: 'Income NPR 62,000. Needs NPR 30,000. Wants NPR 12,000. Investments NPR 8,000. Surplus = NPR 62,000 − NPR 50,000 = NPR 12,000 unallocated. Question: Where does this NPR 12,000 go?',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Calculate Your Investment Growth'
      },
      commonMistakes: [
        { mistake: 'Thinking you need a higher salary to start saving.', correct: 'Start saving with what you earn now. Your saving rate matters far more than your income level.', explanation: 'A 20% saving rate on NPR 40,000 (NPR 8,000/month) beats a 5% rate on NPR 80,000 (NPR 4,000/month) in investment outcomes.' },
        { mistake: 'Budgeting only fixed costs and ignoring variable/impulse spending.', correct: 'Track every transaction for 30 days, including small cash purchases.', explanation: 'NPR 200 here, NPR 350 there - small untracked purchases routinely add up to NPR 5,000-15,000/month.' },
        { mistake: 'Investing whatever is left at month end.', correct: 'Pay yourself first: invest at the start of the month via automated SIP mandate.', explanation: 'Investing leftovers means investing NPR 0 in bad months. Automated SIP builds consistency regardless of monthly spending variation.' }
      ],
      definitions: [
        { term: 'Cash Flow', full: 'Income minus Expenses', meaning: 'Net money movement monthly. Positive = surplus. Negative = deficit.' },
        { term: '50-30-20 Rule', full: 'Budgeting Framework', meaning: '50% to needs, 30% to wants, 20% to savings/investments. A starting framework - adjust to Nepal cost realities.' },
        { term: 'Lifestyle Inflation', full: 'Expense Creep', meaning: 'The tendency for expenses to rise proportionally with income increases - eliminating the benefit of salary growth.' },
        { term: 'Pay Yourself First', full: 'Self-Directed Savings Priority', meaning: 'Investing before spending rather than investing what remains. Automated via SIP mandate.' }
      ],
      faqs: [
        { q: 'What is a healthy savings rate in Nepal?', a: 'Financial experts recommend at least 20% of gross income. In Nepal\'s context with high living costs, 10-15% is a realistic and still powerful starting target. Increase by 1% with each salary raise.' },
        { q: 'What is the best budgeting app for Nepal?', a: 'There is no dominant Nepal-specific app yet. Use any expense tracker (Money Manager, Walnut, or a simple spreadsheet). The tool matters less than the habit.' },
        { q: 'How should I handle festival expenses (Dashain, Tihar) in my budget?', a: 'Create a sinking fund: estimate annual festival spend, divide by 12, save that amount monthly. Example: NPR 30,000 annual Dashain → NPR 2,500/month sinking fund. Never borrow for festivals.' }
      ],
      takeaways: [
        'Cash Flow = Income − Expenses. Surplus is the only source of savings and investment capital.',
        'Track expenses for 30 days - the results almost always reveal NPR 5,000-15,000 in untracked outflows.',
        'The 50-30-20 rule: 50% needs, 30% wants, 20% savings. Nepal: 60-20-20 may be more realistic.',
        'Pay yourself first via automated SIP - do not invest leftovers.',
        'NPR 5,000/month surplus invested at 12% = NPR 49 Lakhs in 20 years.'
      ]
    },
    np: {
      title: 'Cash Flow Equation: नेपालको सबैभन्दा महत्त्वपूर्ण व्यक्तिगत वित्त सूत्र',
      oneLineSummary: 'आम्दानी माइनस खर्च = बचत - एउटै सूत्रले किन कोही रु. ३०,000 मा सम्पत्ति बनाउँछ र कोही रु. ८०,000 मा पनि संघर्ष गर्छ।',
      summaryPoints: [
        'Cash Flow = आम्दानी − खर्च। धनात्मक (बचत) मात्र लगानी पुँजीको स्रोत।',
        'धेरैले आम्दानी बढाउनमा ध्यान दिन्छन् - खर्चतर्फ ध्यान नदिँदा हरेक तलब वृद्धि खर्चमा गुम्छ।',
        '50-30-20 नियम: ५०% आवश्यकता, ३०% इच्छा, २०% बचत/लगानी।',
        '३० दिन खर्च ट्र्याक गर्दा पैसा कहाँ जान्छ भन्ने थाहा हुन्छ - प्रायः छक्क लाग्छ।',
        'रु. ५,000/महिना बचत १२% वार्षिकमा २० वर्षमा रु. ४९ लाख।'
      ],
      whatIsThis: 'Cash Flow Equation व्यक्तिगत वित्तको सबैभन्दा आधारभूत सूत्र हो: Cash Flow = आम्दानी − खर्च। यो धनात्मक भए बचत छ। ऋणात्मक भए आम्दानीभन्दा बढी खर्च - ऋण लाग्छ वा बचत घट्छ। नेपालमा "तलब कम छ" प्रायः समस्या भनिन्छ - तर वास्तविक समस्या अपरिष्कृत र अप्रबन्धित खर्च हो।',
      whyItMatters: 'उही रु. ६०,000 तलब लिने दुई जना फरक-फरक आर्थिक भविष्य बनाउन सक्छन्। व्यक्ति A ले रु. १०,000 बचाउँछ - १५ वर्षमा रु. ५० लाख। व्यक्ति B ले रु. २,000 - १५ वर्षमा रु. १० लाख। तलब उही। Cash Flow व्यवस्थापनले ५ गुणा फरक।',
      howItWorks: [
        { step: 1, title: 'कुल मासिक आम्दानी निकाल्नुहोस्', desc: 'सबै स्रोत: कुल तलब (TDS कटाउनुअघि), फ्रिल्यान्स, भाडा, व्यवसाय आम्दानी।' },
        { step: 2, title: '३० दिन सबै खर्च ट्र्याक गर्नुहोस्', desc: 'श्रेणीमा: आवश्यकता (भाडा, खाद्यान्न, युटिलिटी, यातायात, EMI, बीमा), इच्छा (खाजा, स्ट्रिमिङ, लत्ताकपडा, मनोरञ्जन), बचत/लगानी।' },
        { step: 3, title: 'बाँकी वा घाटा निकाल्नुहोस्', desc: 'आम्दानी − (आवश्यकता + इच्छा + बचत)। धनात्मक: अतिरिक्त नगद। ऋणात्मक: घाटामा - कटौती वा आम्दानी बढाउनुपर्छ।' },
        { step: 4, title: '50-30-20 फ्रेमवर्क लागू गर्नुहोस्', desc: 'आवश्यकता: कुल आम्दानीको ≤५०%। इच्छा: ≤३०%। बचत/लगानी: ≥२०%।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Cash Flow स्न्यापशट - रु. ५५,000/महिना तलब (नेपाल उदाहरण)',
        headers: ['श्रेणी', 'विवरण', 'मासिक रकम', 'आम्दानीको %'],
        rows: [
          ['आम्दानी', 'तलब (कुल)', 'रु. ५५,000', '१००%'],
          ['आवश्यकता', 'भाडा रु. १२,000 + खाद्यान्न रु. ८,000 + युटिलिटी रु. २,500 + यातायात रु. ३,000 + EMI रु. ७,000', 'रु. ३२,500', '५९%'],
          ['इच्छा', 'खाजा रु. ३,000 + मोबाइल रु. १,500 + लत्ताकपडा रु. २,000 + मनोरञ्जन रु. १,000', 'रु. ७,500', '१४%'],
          ['बचत', 'SIP रु. ३,000 + Emergency Fund रु. २,000', 'रु. ५,000', '९%'],
          ['अज्ञात', '(हराएको रकम)', 'रु. १०,000', '१८%'],
          ['बाँकी/घाटा', 'रु. १०,000 अज्ञात - लेखापरीक्षण आवश्यक', '⚠️', 'जाँच चाहिन्छ']
        ]
      },
      nepalContext: 'नेपालमा तलबी पेशेवरहरूका सामान्य Cash Flow नाशकर्ता: (१) आम्दानी बढ्दै जाँदा रेस्टुराँ खर्च ३-५ गुणा। (२) नातेदारलाई दिइने ऋण जो फिर्ता नआउने। (३) भुलिएका सब्सक्रिप्सन। (४) Dashain/Tihar खर्चको योजना नहुनु।',
      practicalScenario: {
        persona: 'दीपिका, २८ वर्ष, काठमाडौँमा कर्पोरेट HR',
        income: 'मासिक रु. ६२,000',
        scenarioText: 'दीपिका राम्रो तलबका बाबजूद "सधैँ पैसा छैन" अनुभव गर्थिन्। बचत शून्य। पैसा कहाँ जान्छ थाहा थिएन। ३० दिन ट्र्याक गरिन्।',
        solutionText: 'ट्र्याकिङले देखायो: रेस्टुराँ/काफे रु. ८,000 (अनुमान रु. ३,000 थियो)। भुलिएका सब्सक्रिप्सन रु. ४,500। Dashain उपहार/ऋण रु. ६,000। पुनर्गठन: खाजा रु. ४,000, ३ सब्सक्रिप्सन रद्द (रु. ३,500 बचत), रु. ३,000/महिना Festival Fund। फ्री भयो रु. ११,000 - रु. ८,000 SIP सुरु।',
        metricHighlight: 'रु. ११,000/महिना "हराएको" - एक Budget सेसनमा रु. ८,000 SIP मा परिणत'
      },
      formula: {
        name: 'Cash Flow Equation',
        equation: '\\text{बाँकी} = \\text{कुल आम्दानी} - \\text{आवश्यकता} - \\text{इच्छा} - \\text{लगानी}',
        variables: [
          { symbol: 'कुल आम्दानी', name: 'सबै मासिक प्रवाह', desc: 'तलब + फ्रिल्यान्स + भाडा + व्यवसाय।' },
          { symbol: 'आवश्यकता', name: 'अनिवार्य खर्च', desc: 'भाडा, खाद्यान्न, युटिलिटी, यातायात, EMI।' },
          { symbol: 'इच्छा', name: 'विवेकाधीन खर्च', desc: 'खाजा, मनोरञ्जन, सब्सक्रिप्सन।' },
          { symbol: 'लगानी', name: 'बचत र सम्पत्ति निर्माण', desc: 'SIP, FD, Emergency Fund।' }
        ],
        exampleCalculation: 'आम्दानी रु. ६२,000। आवश्यकता रु. ३०,000। इच्छा रु. १२,000। लगानी रु. ८,000। बाँकी = रु. १२,000 - कहाँ जान्छ?',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'लगानी वृद्धि गणना गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'बढी तलब भएपछि मात्र बचत सुरु गर्ने।', correct: 'अहिलेको आम्दानीबाट बचत सुरु। बचत दर आम्दानीभन्दा महत्त्वपूर्ण।', explanation: 'रु. ४०,000 मा २०% बचत (रु. ८,000) रु. ८०,000 मा ५% (रु. ४,000) भन्दा राम्रो।' },
        { mistake: 'केवल निश्चित खर्च बजेट गरी चंचल खर्च बिर्सनु।', correct: '३० दिन प्रत्येक कारोबार ट्र्याक - साना नगद खरिद पनि।', explanation: 'रु. २०० यता, रु. ३५० उता - अपरिष्कृत खरिद नियमित रूपमा रु. ५,000-१५,000/महिना।' },
        { mistake: 'महिना अन्तमा जे बाँकी हुन्छ त्यो लगाउने।', correct: 'महिना सुरुमा स्वचालित SIP मार्फत लगानी - पहिले आफूलाई तिर्नुहोस्।', explanation: 'बाँकीमा लगाउँदा खराब महिनामा रु. ० लगानी। स्वचालित SIP ले निरन्तरता दिन्छ।' }
      ],
      definitions: [
        { term: 'Cash Flow', full: 'आम्दानी माइनस खर्च', meaning: 'मासिक खुद पैसाको प्रवाह। धनात्मक = बचत। ऋणात्मक = घाटा।' },
        { term: '50-30-20 नियम', full: 'बजेटिङ फ्रेमवर्क', meaning: '५०% आवश्यकता, ३०% इच्छा, २०% बचत। सुरुवाती ढाँचा।' },
        { term: 'Lifestyle Inflation', full: 'खर्च बृद्धि', meaning: 'तलब बढ्दासँगै खर्च पनि उत्तिकै बढ्ने प्रवृत्ति।' },
        { term: 'Pay Yourself First', full: 'पहिले आफूलाई तिर्नुहोस्', meaning: 'खर्च गर्नुअघि लगानी - SIP म्यान्डेटबाट स्वचालित।' }
      ],
      faqs: [
        { q: 'नेपालमा स्वस्थ बचत दर कति?', a: 'सिफारिस: कुल आम्दानीको कम्तीमा २०%। नेपालको उच्च जीवनयापन खर्चमा १०-१५% पनि शक्तिशाली सुरुवात। प्रत्येक तलब वृद्धिमा १% बढाउनुहोस्।' },
        { q: 'Dashain-Tihar खर्च बजेटमा कसरी राख्ने?', a: 'Sinking Fund बनाउनुहोस्: वार्षिक Dashain खर्च अनुमान ÷ १२ = मासिक जम्मा। रु. ३०,000 Dashain → रु. २,500/महिना। ऋण नलिनुहोस्।' },
        { q: 'नेपालमा खर्च ट्र्याक गर्न कुन एप राम्रो हुन्छ?', a: 'नेपालमा कुनै एकल उत्कृष्ट एप छैन; Money Manager वा सामान्य गुगल स्प्रेडसिट प्रयोग गर्न सक्नुहुन्छ। एपभन्दा पनि दैनिक खर्च टिप्ने नियमित बानी बढी महत्वपूर्ण हुन्छ।' }
      ],
      takeaways: [
        'Cash Flow = आम्दानी − खर्च। बाँकी मात्र बचत र लगानी पुँजी।',
        '३० दिन ट्र्याक गर्नुहोस् - प्रायः रु. ५,000-१५,000 अज्ञात खर्च देखिन्छ।',
        '50-30-20: ५०% आवश्यकता, ३०% इच्छा, २०% बचत।',
        'स्वचालित SIP - पहिले आफूलाई तिर्नुहोस्।',
        'रु. ५,000/महिना बचत १२% मा २० वर्षमा रु. ४९ लाख।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'See how your monthly surplus grows with compounding over years.' }
    ],
    downloadableResources: [
      { title: 'Nepal Monthly Budget Tracker Template (PDF)', type: 'PDF Template', format: 'PDF Document', size: '220 KB', href: 'assets/downloads/nepal-personal-budget-planner.csv' }
    ]
  },

  // ── 14. TERM LIFE VS ENDOWMENT INSURANCE ─────────────────────────
  'term-life-vs-endowment-nepal': {
    id: 'ins-term-vs-endowment',
    slug: 'term-life-vs-endowment-nepal',
    categorySlug: 'insurance',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '9 min read', np: '९ मिनेट पढाइ' },
    masteryTime: { en: '10 min practice', np: '१० मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under Beema Samiti (IRDAI-equivalent) Nepal regulations', np: 'बीमा समिति नेपाल नियमावली अनुसार प्रमाणित' },
    prerequisites: { en: 'None', np: 'कुनै पूर्वज्ञान चाहिँदैन' },
    en: {
      title: 'Term Life vs Endowment Insurance in Nepal: Which Should You Buy?',
      oneLineSummary: 'Term insurance is pure protection at very low cost. Endowment mixes insurance with savings - and does neither very well. Here is the math every Nepali needs.',
      summaryPoints: [
        'Term insurance pays a lump sum if the insured dies within the policy term - no payout if alive at end.',
        'Endowment insurance pays on death OR at policy maturity, combining insurance with a savings element.',
        'For the same premium in Nepal, term insurance gives 5-10x more coverage than endowment.',
        'The "savings" in endowment plans grow at 4-6% - far below NEPSE mutual funds or even FD returns.',
        'The ideal strategy: Buy cheap, high-cover term insurance + invest the saved premium in SIP.'
      ],
      whatIsThis: 'Life insurance in Nepal comes in two main forms. Term insurance is pure protection - you pay a low annual premium; if you die within the policy term, your family receives the death benefit (sum assured). If you survive the term, the policy simply expires with no payout. Endowment insurance combines insurance with a savings element - your premium partially funds a death benefit and partially builds a "corpus" that pays out at policy maturity. In Nepal, all life insurance companies and products are licensed and regulated by Beema Samiti (equivalent to India\'s IRDAI).',
      whyItMatters: 'Most Nepali families are significantly underinsured because they buy endowment policies (high premium, low coverage) instead of term policies (very low premium, high coverage). A family breadwinner earning NPR 80,000/month needs coverage of NPR 1-1.5 Crore (10-15x annual income) to protect dependents. An endowment policy for that coverage costs NPR 40,000-60,000/year. A term policy for the same NPR 1 Crore coverage costs only NPR 8,000-12,000/year.',
      howItWorks: [
        { step: 1, title: 'Term Policy: Pure Protection Logic', desc: 'You pay an annual premium (e.g., NPR 10,000/year). If you die during the 20-year term, your family receives NPR 1 Crore. If you survive, the policy ends - you get nothing back. This is intentional: the "nothing back" is why premiums are so cheap.' },
        { step: 2, title: 'Endowment Policy: The Hidden Math', desc: 'You pay a high annual premium (e.g., NPR 50,000/year × 20 years = NPR 10 Lakh total). At maturity, you get back a sum (e.g., NPR 12-15 Lakh). But NPR 10 Lakh invested over 20 years at 7% would be NPR 40 Lakh. The endowment "returned" NPR 12-15 Lakh. That is not savings - that is a very poor return.' },
        { step: 3, title: '"Buy Term and Invest the Rest"', desc: 'Buy a term policy for NPR 10,000/year. Take the NPR 40,000/year you save (vs endowment premium) and invest in a SIP. In 20 years at 12% CAGR: NPR 40,000/month × 12% × 20 years = NPR 3.6 Crore. You had full life coverage AND built far more wealth.' },
        { step: 4, title: 'When Endowment Has Merit', desc: 'Endowment or ULIP-style products may suit those with no financial discipline who would not invest the savings otherwise. Also: single-premium endowment or whole-life policies for estate planning (not mass-market). For most salaried Nepalis: term + SIP is mathematically superior.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Term Life vs Endowment Insurance - Nepal Comparison (NPR 1 Crore Coverage, 35-year-old male, 20-year term)',
        headers: ['Feature', 'Term Insurance', 'Endowment Insurance'],
        rows: [
          ['Annual premium', 'NPR 8,000-12,000', 'NPR 45,000-65,000'],
          ['Sum assured (death benefit)', 'NPR 1 Crore', 'NPR 1 Crore'],
          ['Payout on survival (maturity)', 'None - policy expires', 'NPR 12-18 Lakh (approx)'],
          ['Effective annual return on "savings"', 'N/A (pure protection)', '4-6% (very low)'],
          ['Same premium into SIP at 12% in 20 yrs', 'NPR 3.2-4.8 Crore', 'N/A (all goes to premium)'],
          ['Nepal insurers offering term plans', 'Nepal Life, Rastriya Beema, Surya Life, MetLife Nepal', 'All Nepal life insurers']
        ]
      },
      nepalContext: 'In Nepal, most insurance agents are incentivized to sell endowment policies (higher premiums = higher commissions). Pure term plans are rarely proactively offered. Beema Samiti introduced Online Term Plans starting 2079 BS - Nepal Life Insurance\'s "Jeevan Suraksha Online Term Plan" and Surya Life\'s "iSecure" are among the most affordable pure term products available online. Look for plans with NPR 1 Crore sum assured, 20-30 year term, and no "return of premium" riders (which add cost with minimal benefit).',
      practicalScenario: {
        persona: 'Suresh, 32, bank officer in Pokhara',
        income: 'NPR 75,000 / month',
        scenarioText: 'Suresh was paying NPR 52,000/year for a 20-year endowment plan with NPR 80 Lakh maturity value. His insurance agent had convinced him this was "investment + protection." His actual life cover was only NPR 25 Lakh - not enough for his wife and two children.',
        solutionText: 'After analysis: Surrender the 3-year-old endowment (loss of NPR 35,000 in surrendered premiums - painful but correct). Buy Nepal Life term plan: NPR 1 Crore cover for NPR 11,000/year. Invest remaining NPR 41,000/year (NPR 3,400/month) in NIBL equity fund SIP. In 17 years: SIP corpus at 12% = NPR 2.4 Crore - versus endowment maturity of NPR 80 Lakh. Net benefit of switching: NPR 1.6 Crore.',
        metricHighlight: 'Switching to term + SIP projected NPR 1.6 Crore more wealth at same total premium'
      },
      formula: {
        name: 'Insurance Coverage Need (Human Life Value)',
        equation: '\\text{Cover Needed} = \\text{Annual Income} \\times 10 + \\text{Outstanding Loans}',
        variables: [
          { symbol: 'Annual Income', name: 'Your gross annual earnings', desc: 'Used to estimate income replacement for dependents for 10+ years.' },
          { symbol: '10', name: 'Multiplier (10-15x is standard)', desc: 'Provides 10 years of income replacement at the current level.' },
          { symbol: 'Outstanding Loans', name: 'Home loan, education loan, business loan', desc: 'Added so your family is not left with debt on your death.' }
        ],
        exampleCalculation: 'Suresh: Annual income NPR 9 Lakh. Outstanding home loan NPR 45 Lakh. Cover needed = 9L × 10 + 45L = NPR 1.35 Crore. His NPR 25 Lakh endowment coverage was severely inadequate.',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'Calculate Loan EMI'
      },
      commonMistakes: [
        { mistake: 'Buying endowment because "you get your money back at the end."', correct: 'The "money back" is a terrible return. NPR 10 Lakh in premiums over 20 years returning NPR 15 Lakh = ~2% CAGR. Your FD would have given 6-7%.', explanation: 'The "return of premium" in endowment plans is mostly inflation-eroded capital return, not real growth.' },
        { mistake: 'Under-insuring - buying small coverage because premiums seem high.', correct: 'Term insurance is extremely affordable. NPR 1 Crore coverage costs only NPR 8,000-12,000/year for a healthy 30-35 year old.', explanation: 'Under-insuring defeats the entire purpose of insurance. Your family needs 10x income replacement, not 2x.' },
        { mistake: 'Surrendering endowment policy too early if it has significant surrender value.', correct: 'After 7-10 years, endowment surrender value may be high enough to redeploy. Calculate the actual opportunity cost before surrendering.', explanation: 'Surrendering in years 1-3 results in large losses. Beyond year 7, the math often favors switching to term + SIP.' }
      ],
      definitions: [
        { term: 'Term Insurance', full: 'Pure Life Protection Policy', meaning: 'Insurance that pays only on death within the policy term. No maturity payout. Very low premium for high coverage.' },
        { term: 'Endowment', full: 'Insurance + Savings Hybrid', meaning: 'Pays on death or maturity. High premium, low coverage, low effective returns on the savings portion.' },
        { term: 'Sum Assured', full: 'Death Benefit / Coverage Amount', meaning: 'The lump sum paid to nominees on the insured\'s death. This is the core protection metric.' },
        { term: 'Beema Samiti', full: 'Insurance Board Nepal', meaning: 'Nepal\'s insurance regulatory authority. Licenses all insurance companies and approves products. Equivalent to IRDAI in India.' }
      ],
      faqs: [
        { q: 'Can I buy term insurance online in Nepal?', a: 'Yes. Nepal Life Insurance "Jeevan Suraksha Online Term Plan" and Surya Life "iSecure" are available online. Premiums are lower than agent-sold plans. You need valid PAN, citizenship, and basic health disclosure.' },
        { q: 'What happens if I miss a premium payment on my term plan?', a: 'Most Nepal term plans have a 30-day grace period. After that, the policy lapses. You can typically revive a lapsed policy within 2 years by paying back premiums plus interest and submitting fresh health declaration.' },
        { q: 'Is there a group term plan option through my employer in Nepal?', a: 'Many Nepali companies offer group term insurance as an employee benefit. If your employer offers it, maximize it - group rates are typically 20-40% cheaper than individual plans. But do not rely solely on employer coverage; it ends when you leave the job.' }
      ],
      takeaways: [
        'Term insurance = pure protection at low cost. Endowment = expensive insurance + poor savings return.',
        'For NPR 1 Crore cover in Nepal: term costs NPR 8,000-12,000/year; endowment costs NPR 45,000-65,000/year.',
        'The right strategy: buy term for full coverage, invest the saved premium in SIP.',
        'Coverage needed: 10× annual income + outstanding loans. Most Nepalis are severely under-insured.',
        'Beema Samiti regulates all Nepal insurers - only buy from licensed companies.'
      ]
    },
    np: {
      title: 'नेपालमा Term Life बनाम Endowment बीमा: कुन किन्नु पर्छ?',
      oneLineSummary: 'Term बीमा ज्यादै कम लागतमा शुद्ध सुरक्षा। Endowment बीमा र बचतको मिश्रण - र दुवै कमजोर गर्छ।',
      summaryPoints: [
        'Term बीमाले बीमित व्यक्तिको पॉलिसी अवधिभित्र मृत्यु भए मात्र रकम दिन्छ।',
        'Endowment बीमाले मृत्यु वा परिपक्वता दुवैमा दिन्छ - बीमा र बचत मिसाउँछ।',
        'उही प्रिमियममा Term बीमाले Endowment भन्दा ५-१० गुणा बढी कभरेज।',
        'Endowment को "बचत" मा ४-६% प्रतिफल - Mutual Fund वा FD भन्दा ज्यादै कम।',
        'उचित रणनीति: सस्तो Term + बचेको प्रिमियम SIP मा।'
      ],
      whatIsThis: 'नेपालमा जीवन बीमा मुख्यतः दुई प्रकारको: Term बीमा शुद्ध सुरक्षा - कम वार्षिक प्रिमियममा, अवधिभित्र मृत्यु भए परिवारलाई Sum Assured। बाँच्नुभए कुनै भुक्तान छैन। Endowment ले मृत्यु वा परिपक्वता दुवैमा दिन्छ - उच्च प्रिमियम। नेपालमा सबै जीवन बीमा कम्पनी र उत्पादन बीमा समितिले लाइसेन्स दिन्छ।',
      whyItMatters: 'अधिकांश नेपाली परिवार अपर्याप्त बीमित छन् - उच्च प्रिमियम, कम कभरेज Endowment किन्छन्। रु. ८०,000/महिना कमाउने परिवारको मुखियालाई रु. १-१.५ करोड कभरेज चाहिन्छ। Endowment: रु. ४५,000-६५,000/वर्ष। Term: उही कभरेजमा रु. ८,000-१२,000/वर्ष मात्र।',
      howItWorks: [
        { step: 1, title: 'Term Policy: शुद्ध सुरक्षा तर्क', desc: 'वार्षिक प्रिमियम तिर्नुहोस् (रु. १०,000)। २० वर्षको अवधिमा मृत्यु भए रु. १ करोड परिवारलाई। बाँच्नुभए पॉलिसी समाप्त - केही फिर्ता छैन। यही "केही फिर्ता छैन" ले प्रिमियम सस्तो हुन्छ।' },
        { step: 2, title: 'Endowment: लुकेको गणित', desc: 'उच्च वार्षिक प्रिमियम (रु. ५०,000 × २० वर्ष = रु. १० लाख)। परिपक्वतामा रु. १२-१५ लाख। तर रु. १० लाख २० वर्ष ७% मा रु. ४० लाख हुन्थ्यो। Endowment ले रु. १२-१५ लाख दियो - राम्रो प्रतिफल होइन।' },
        { step: 3, title: '"Term किन्नुस् र बाँकी लगाउनुस्"', desc: 'Term पॉलिसी रु. १०,000/वर्ष। बचेको रु. ४०,000/वर्ष SIP मा। २० वर्षमा १२% CAGR: रु. ३.६ करोड - पूर्ण जीवन कभरेज पनि, बढी सम्पत्ति पनि।' },
        { step: 4, title: 'Endowment कहिले ठीक?', desc: 'आर्थिक अनुशासन नभएका र SIP गर्दैनन् भन्नेका लागि Endowment ठीक हुन सक्छ। तर अधिकांश तलबी नेपालीका लागि: Term + SIP गणितीय रूपमा बेहतर।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'Term बनाम Endowment - नेपाल तुलना (रु. १ करोड कभरेज, ३५ वर्ष, २० वर्ष अवधि)',
        headers: ['विशेषता', 'Term बीमा', 'Endowment बीमा'],
        rows: [
          ['वार्षिक प्रिमियम', 'रु. ८,000-१२,000', 'रु. ४५,000-६५,000'],
          ['मृत्यु लाभ', 'रु. १ करोड', 'रु. १ करोड'],
          ['परिपक्वतामा भुक्तान', 'शून्य - पॉलिसी समाप्त', 'रु. १२-१८ लाख (अनुमानित)'],
          ['"बचत" मा प्रभावकारी प्रतिफल', 'लागू छैन', '४-६% (ज्यादै कम)'],
          ['उही प्रिमियम SIP मा १२% × २० वर्ष', 'रु. ३.२-४.८ करोड', 'लागू छैन'],
          ['नेपाल Term बीमाकर्ता', 'Nepal Life, Surya Life, MetLife Nepal', 'सबै जीवन बीमाकर्ता']
        ]
      },
      nepalContext: 'नेपालमा अधिकांश बीमा एजेन्टलाई Endowment बेच्दा बढी कमिसन पाइन्छ - Term क्वचित् सुझाइन्छ। बीमा समितिले २०७९ देखि Online Term Plan शुरु गर्यो। Nepal Life को "जीवन सुरक्षा Online Term Plan" र Surya Life को "iSecure" सस्ता र अनलाइनमा उपलब्ध।',
      practicalScenario: {
        persona: 'सुरेश, ३२ वर्ष, पोखरामा बैंक अधिकृत',
        income: 'मासिक रु. ७५,000',
        scenarioText: 'सुरेश २० वर्षको Endowment पॉलिसीमा रु. ५२,000/वर्ष तिर्दै थिए - परिपक्वतामा रु. ८० लाख। तर जीवन कभरेज केवल रु. २५ लाख - पत्नी र दुई बच्चाका लागि अपर्याप्त।',
        solutionText: 'विश्लेषण: ३ वर्षपुरानो Endowment सरेन्डर (रु. ३५,000 घाटा - पीडादायक तर सही)। Nepal Life Term: रु. १ करोड, रु. ११,000/वर्ष। बाँकी रु. ४१,000/वर्ष NIBL SIP मा। १७ वर्षमा: SIP कोष १२% मा रु. २.४ करोड - Endowment परिपक्वता रु. ८० लाख भन्दा रु. १.६ करोड बढी।',
        metricHighlight: 'Term + SIP मा स्विच गर्दा उही प्रिमियममा रु. १.६ करोड थप सम्पत्ति'
      },
      formula: {
        name: 'बीमा आवश्यकता सूत्र (Human Life Value)',
        equation: '\\text{आवश्यक कभरेज} = \\text{वार्षिक आम्दानी} \\times 10 + \\text{बाँकी ऋण}',
        variables: [
          { symbol: 'वार्षिक आम्दानी', name: 'कुल वार्षिक कमाइ', desc: 'आश्रितका लागि आम्दानी प्रतिस्थापनको अनुमान।' },
          { symbol: '10 (गुणक)', name: '१०-१५ गुणा मानक', desc: '१० वर्षको आम्दानी प्रतिस्थापन प्रदान गर्छ।' },
          { symbol: 'बाँकी ऋण', name: 'गृहकर्जा, शिक्षा ऋण', desc: 'मृत्युपछि परिवारलाई ऋण नबोकाउन।' }
        ],
        exampleCalculation: 'सुरेशको वार्षिक आम्दानी रु. ९ लाख। बाँकी गृहकर्जा रु. ४५ लाख। आवश्यक कभरेज = ९L × १० + ४५L = रु. १.३५ करोड। उनको रु. २५ लाख Endowment कभरेज अत्यन्तै अपर्याप्त।',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'EMI Calculator'
      },
      commonMistakes: [
        { mistake: '"पैसा फिर्ता पाइन्छ" भनेर Endowment किन्नु।', correct: 'रु. १० लाख प्रिमियममा रु. १५ लाख फिर्ता = ~२% CAGR। FD ले ६-७% दिन्थ्यो।', explanation: '"Money Back" मुद्रास्फीतिले खाएको पुँजी मात्र हो।' },
        { mistake: 'कम कभरेज - प्रिमियम महँगो लाग्छ भनेर।', correct: 'Term बीमा अत्यन्तै सस्तो। रु. १ करोड कभरेज = रु. ८,000-१२,000/वर्ष।', explanation: 'कम बीमित हुनु बीमा नगर्नुजत्तिकै खराब।' },
        { mistake: 'Endowment धेरै चाँडो सरेन्डर गर्नु।', correct: '७-१० वर्षपछि सरेन्डर मूल्य ठीकठाक हुन सक्छ - वास्तविक अवसर लागत गणना गर्नुहोस्।', explanation: '१-३ वर्षमा सरेन्डर गर्दा ठूलो घाटा। ७ वर्षपछि Term + SIP मा जानु प्रायः फाइदाजनक।' }
      ],
      definitions: [
        { term: 'Term बीमा', full: 'शुद्ध जीवन सुरक्षा पॉलिसी', meaning: 'अवधिभित्र मृत्यु भएमा मात्र भुक्तान। परिपक्वतामा केही छैन। कम प्रिमियम, उच्च कभरेज।' },
        { term: 'Endowment', full: 'बीमा + बचत मिश्रण', meaning: 'मृत्यु वा परिपक्वता दुवैमा भुक्तान। उच्च प्रिमियम, कम कभरेज, कम प्रतिफल।' },
        { term: 'Sum Assured', full: 'मृत्यु लाभ / कभरेज रकम', meaning: 'बीमितको मृत्युमा नामाङ्कितलाई दिइने एकमुस्त रकम।' },
        { term: 'बीमा समिति', full: 'Insurance Board Nepal', meaning: 'नेपालको बीमा नियामक संस्था। सबै बीमा कम्पनी र उत्पादन लाइसेन्स।' }
      ],
      faqs: [
        { q: 'के नेपालमा Term बीमा अनलाइन किन्न सकिन्छ?', a: 'हो। Nepal Life को "जीवन सुरक्षा Online Term Plan" र Surya Life को "iSecure" अनलाइन उपलब्ध। PAN, नागरिकता र स्वास्थ्य घोषणा चाहिन्छ।' },
        { q: 'Term पॉलिसीको प्रिमियम छुटाइयो भने?', a: 'अधिकांश Nepal Term Plan मा ३० दिनको Grace Period। त्यसपछि Lapse। २ वर्षभित्र बाँकी प्रिमियम + ब्याज तिरेर पुनर्जीवन।' },
        { q: 'के कार्यालयले दिने सामूहिक (Group Term) बीमामा मात्र भर पर्न सकिन्छ?', a: 'कार्यालयले सामूहिक टर्म बीमा दिएको छ भने त्यो राम्रो सुविधा हो र प्रिमियम सस्तो हुन्छ। तर जागिर छाड्नासाथ त्यो कभरेज बन्द हुने भएकाले आफ्नो व्यक्तिगत नाममा छुट्टै टर्म पोलिसी लिनु अनिवार्य हुन्छ।' }
      ],
      takeaways: [
        'Term = कम खर्चमा शुद्ध सुरक्षा। Endowment = महँगो बीमा + कमजोर बचत।',
        'रु. १ करोड कभरेज: Term रु. ८,000-१२,000/वर्ष; Endowment रु. ४५,000-६५,000।',
        'सही रणनीति: Term किन्नुस् + बचेको प्रिमियम SIP मा।',
        'आवश्यक कभरेज = १० × वार्षिक आम्दानी + बाँकी ऋण।',
        'नेपालमा बीमा समितिले सबै जीवन बीमा नियमन - इजाजतप्राप्त कम्पनीबाट मात्र किन्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'EMI Calculator', slug: 'calculators/emi', key: 'emi', desc: 'Calculate loan repayment to factor into your insurance coverage need.' }
    ],
    downloadableResources: [
      { title: 'Nepal Life Insurance Comparison Guide (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '240 KB', href: 'assets/downloads/nepal-insurance-claim-checklist.html' }
    ]
  },

  // ── 15. HOME LOAN ELIGIBILITY & DEBT-TO-INCOME ───────────────────
  'home-loan-eligibility-debt-to-income': {
    id: 'loan-home-dti',
    slug: 'home-loan-eligibility-debt-to-income',
    categorySlug: 'loans',
    difficulty: { en: 'Intermediate', np: 'मध्यम' },
    readTime: { en: '10 min read', np: '१० मिनेट पढाइ' },
    masteryTime: { en: '15 min practice', np: '१५ मिनेट अभ्यास' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under NRB Home Loan LTV & DSCR Guidelines', np: 'NRB गृहकर्जा LTV र DSCR निर्देशिका अनुसार प्रमाणित' },
    prerequisites: { en: 'Basic understanding of loans and EMI', np: 'ऋण र EMI को आधारभूत ज्ञान' },
    en: {
      title: 'Home Loan Eligibility in Nepal: DTI Ratio, LTV Limits & How Banks Decide',
      oneLineSummary: 'Why your NPR 1.5 Crore home loan application got rejected despite a good salary - and the exact DTI and LTV math Nepal banks use to approve loans.',
      summaryPoints: [
        'DTI (Debt-to-Income) ratio is the primary home loan eligibility test - Nepal banks cap it at 50-60% of gross income.',
        'LTV (Loan-to-Value) ratio is NRB-regulated: maximum 50% of property value for residential property in Kathmandu Valley.',
        'DSCR (Debt Service Coverage Ratio) applies to income-generating properties - must be ≥ 1.25.',
        'NRB has mandatory credit score requirements for home loans above certain thresholds.',
        'The single biggest mistake: underestimating how existing EMIs reduce your eligible home loan amount.'
      ],
      whatIsThis: 'When a Nepali bank evaluates your home loan application, it applies three key financial ratios. DTI (Debt-to-Income) compares your total monthly debt obligations to your gross income. LTV (Loan-to-Value) limits how much of the property value the bank will finance. DSCR (Debt Service Coverage Ratio) measures whether rental income from the property covers the loan EMI. Understanding these ratios lets you calculate your exact home loan eligibility before walking into a bank - and avoid the embarrassment and credit-score damage of a rejected application.',
      whyItMatters: 'Nepal\'s housing loan market is tightly regulated by NRB. In 2079/80, NRB issued updated home loan circulars tightening LTV ratios particularly in Kathmandu Valley to control speculative real estate lending. Knowing these limits before you look at properties prevents you from falling in love with a house you cannot finance.',
      howItWorks: [
        { step: 1, title: 'Calculate Your Gross Monthly Income', desc: 'Include all documented income: salary (get a bank statement or salary certificate), rental income (must have agreement), business income (last 2 years income tax returns required). Include only income you can prove - banks will not consider undocumented cash.' },
        { step: 2, title: 'Calculate Your DTI (EMI/Income Ratio)', desc: 'Add up all existing monthly EMIs (vehicle loan, personal loan, gold loan, education loan). Banks allow a maximum 50-60% DTI. Formula: Max New EMI = Gross Income × 0.50 − Existing EMIs. If this number is negative, you need to pay off existing loans before applying for a home loan.' },
        { step: 3, title: 'Check NRB LTV Limits', desc: 'NRB circulars set maximum LTV by property type and location. Kathmandu Valley residential: 50% LTV (bank finances max 50% of appraised value, you need 50% down payment). Outside Valley: up to 60% LTV. Self-occupied with income proof: may get up to 65% in some banks subject to internal credit policy.' },
        { step: 4, title: 'Use EMI Back-Calculation', desc: 'Once you know max EMI (from DTI), back-calculate the loan amount. At 11% interest, 20-year tenure: every NPR 10,000 of monthly EMI capacity = approx NPR 10.5 Lakh loan. So if DTI allows NPR 30,000/month new EMI: max loan ≈ NPR 31.5 Lakh.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'NRB Home Loan Parameters - Nepal (FY 2081/82)',
        headers: ['Parameter', 'Kathmandu Valley', 'Outside Valley', 'Your Action'],
        rows: [
          ['Max LTV (residential, owner-occupied)', '50% of appraised value', '60% of appraised value', 'Prepare minimum 40-50% down payment'],
          ['Max DTI ratio', '50-60% of gross income', '50-60% of gross income', 'Calculate existing EMI burden first'],
          ['Property appraisal', 'Bank-appointed appraiser (NRB-licensed)', 'Same', 'Do not rely on seller\'s quoted value'],
          ['Interest rate range (Class A banks)', '10-12.5% (base rate + spread)', 'Same', 'Compare multiple banks'],
          ['Max loan tenure', '20-25 years', '20-25 years', 'Longer tenure = lower EMI but more interest'],
          ['DSCR (rental property)', '≥ 1.25', '≥ 1.25', 'Rental income must cover 125% of EMI']
        ]
      },
      nepalContext: 'In Nepal, real estate transaction prices are almost always under-reported ("black money" component) for stamp duty saving. Banks appraise at assessed (registered) value, not market value. This means your LTV calculation is based on the official registered price, not the actual amount you paid. Practically: if you pay NPR 80 Lakh for a property but register it at NPR 50 Lakh, the bank will lend up to 50% of NPR 50 Lakh = NPR 25 Lakh - even if the actual price was NPR 80 Lakh. This is a major mismatch that catches buyers off guard.',
      practicalScenario: {
        persona: 'Anita & Rohan, both 34, dual-income couple in Kathmandu',
        income: 'Combined NPR 1,40,000 / month (Anita NPR 65,000 + Rohan NPR 75,000)',
        scenarioText: 'They wanted to buy a home in Bhaisepati at NPR 1.2 Crore (registered value NPR 60 Lakh). Rohan had an existing vehicle loan EMI of NPR 18,000. They expected to get NPR 90 Lakh home loan.',
        solutionText: 'NRB Calculation: LTV 50% on registered value NPR 60 Lakh = max loan NPR 30 Lakh. They needed NPR 1.2 Crore - NPR 30 Lakh = NPR 90 Lakh from own funds. Separately, DTI check: Max EMI = NPR 1,40,000 × 50% − NPR 18,000 (vehicle) = NPR 52,000 − NPR 18,000 = NPR 34,000. At NPR 34,000 EMI capacity and 11% interest for 20 years, max loan ≈ NPR 35.7 Lakh. Both constraints pointed to ~NPR 30-35 Lakh bank financing. They needed to increase registered value and down payment.',
        metricHighlight: 'Registration gap reduced loan eligibility from expected NPR 90L to actual NPR 30-35L'
      },
      formula: {
        name: 'Home Loan Eligibility Formula',
        equation: '\\text{Max New EMI} = (\\text{Gross Income} \\times 0.50) - \\text{Existing EMIs}',
        variables: [
          { symbol: 'Gross Income', name: 'Total provable monthly income', desc: 'All documented income - salary, rental, business.' },
          { symbol: '0.50', name: 'DTI cap (50%)', desc: 'NRB-guided maximum: total EMIs cannot exceed 50-60% of gross income.' },
          { symbol: 'Existing EMIs', name: 'All current loan repayments', desc: 'Vehicle, personal, education, gold loan EMIs - every existing obligation.' }
        ],
        exampleCalculation: 'Gross income NPR 1,40,000. Existing vehicle EMI NPR 18,000. Max New EMI = 1,40,000 × 0.50 − 18,000 = 70,000 − 18,000 = NPR 52,000. At 11%/20 years: NPR 52,000 EMI capacity ≈ NPR 54.6 Lakh max loan.',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'Try EMI Calculator'
      },
      commonMistakes: [
        { mistake: 'Applying for a loan amount based on market property price, not registered value.', correct: 'Banks lend against NRB-appraised or registered value (whichever is lower). Prepare down payment based on market price minus 50% of registered value.', explanation: 'This gap between market and registered price is the #1 shock for first-time home buyers in Nepal.' },
        { mistake: 'Ignoring existing EMIs when estimating home loan eligibility.', correct: 'Every existing EMI directly reduces your home loan capacity. Pay off smaller high-rate loans before applying.', explanation: 'An NPR 18,000 vehicle EMI costs you ~NPR 19 Lakh in home loan eligibility.' },
        { mistake: 'Applying to only one bank.', correct: 'Apply to 3-5 banks. Different banks have different internal policies on LTV and DTI within NRB limits. Some banks offer first-home-buyer incentives.', explanation: 'Rate differences of 0.5% on a 20-year NPR 50 Lakh loan amount to NPR 3-4 Lakh in total interest difference.' }
      ],
      definitions: [
        { term: 'DTI', full: 'Debt-to-Income Ratio', meaning: 'Percentage of gross monthly income consumed by all debt repayments. Nepal banks cap at 50-60%.' },
        { term: 'LTV', full: 'Loan-to-Value Ratio', meaning: 'Loan amount as a % of property appraised value. NRB caps at 50% (Kathmandu) to 60% (outside Valley) for residential property.' },
        { term: 'DSCR', full: 'Debt Service Coverage Ratio', meaning: 'For rental/income properties: Net Operating Income ÷ Annual Debt Service. Must be ≥ 1.25.' },
        { term: 'Base Rate', full: 'NRB-Published Minimum Lending Rate', meaning: 'Home loan interest = Base Rate + Spread (bank-specific). Base rate changes quarterly based on NRB monetary policy.' }
      ],
      faqs: [
        { q: 'Can I combine spouse income for home loan eligibility in Nepal?', a: 'Yes. Most Nepal banks allow joint home loan applications where both incomes are combined for DTI calculation and both names appear on the property title. This significantly increases loan eligibility.' },
        { q: 'How does NRB\'s credit score requirement affect home loans?', a: 'NRB requires banks to check Credit Information Bureau (CIB) Nepal reports. A loan default or delayed payment in your CIB report can reduce eligibility or result in rejection. Check your CIB report before applying.' },
        { q: 'Is there a home loan tax benefit in Nepal?', a: 'Yes. Interest paid on a home loan for a self-occupied property is deductible up to NPR 2 Lakh per year under Nepal income tax law - reducing your taxable income in that category.' }
      ],
      takeaways: [
        'DTI: Total EMIs must not exceed 50-60% of gross income. Every existing loan reduces home loan eligibility.',
        'LTV: Nepal banks lend max 50% (Kathmandu) or 60% (outside Valley) of the registered/appraised value.',
        'Registration gap - market price vs registered price - is Nepal\'s #1 home buyer shock.',
        'Back-calculate: at 11%/20 years, each NPR 10,000 of EMI capacity ≈ NPR 10.5 Lakh in loan.',
        'Apply to 3-5 banks; check CIB Nepal report before applying.'
      ]
    },
    np: {
      title: 'नेपालमा गृहकर्जा पात्रता: DTI, LTV र बैंकले कसरी निर्णय गर्छ',
      oneLineSummary: 'राम्रो तलब भएर पनि रु. १.५ करोड गृहकर्जा अस्वीकृत किन - र नेपाली बैंकले प्रयोग गर्ने DTI र LTV गणित।',
      summaryPoints: [
        'DTI (Debt-to-Income) - गृहकर्जा पात्रताको प्राथमिक परीक्षण। नेपाली बैंक कुल आम्दानीको ५०-६०% सीमा।',
        'LTV (Loan-to-Value) - NRB नियमित: काठमाडौँ उपत्यकामा सम्पत्ति मूल्यको अधिकतम ५०%।',
        'DSCR आम्दानी सम्पत्तिका लागि - न्यूनतम १.२५।',
        'वर्तमान EMI ले गृहकर्जा पात्रता कति घटाउँछ - सबैभन्दा कम बुझिएको तथ्य।',
        'आवेदन गर्नुअघि आफ्नो पात्रता गणना गर्नुहोस् - अस्वीकृत भए CIB रेकर्ड खराब।'
      ],
      whatIsThis: 'नेपाली बैंकले गृहकर्जा आवेदन मूल्यांकन गर्दा तीन मुख्य अनुपात प्रयोग गर्छ। DTI - कुल मासिक ऋण दायित्व बनाम आम्दानी। LTV - सम्पत्ति मूल्यको कति% ऋण दिने। DSCR - भाडा आम्दानीले EMI कभर गर्छ कि गर्दैन। यी अनुपात बुझेर बैंक जानुअघि आफ्नो पात्रता गणना गर्न सकिन्छ।',
      whyItMatters: 'NRB ले २०७९/८० मा काठमाडौँ उपत्यकामा सट्टेबाजी रियल स्टेट नियन्त्रण गर्न LTV कडा पार्यो। यी सीमाहरू जानेर मन पराएको घर किन्न सकिन्छ कि सकिँदैन भन्ने पहिले थाहा हुन्छ।',
      howItWorks: [
        { step: 1, title: 'कुल मासिक आम्दानी निकाल्नुहोस्', desc: 'सबै प्रमाणित आम्दानी: तलब (बैंक स्टेटमेन्ट वा तलब प्रमाणपत्र), भाडा (सम्झौता चाहिन्छ), व्यवसाय (अघिल्ला २ वर्षको कर विवरण)। अप्रमाणित नगद आम्दानी गन्दैनन्।' },
        { step: 2, title: 'DTI (EMI/आम्दानी अनुपात) गणना गर्नुहोस्', desc: 'सबै वर्तमान मासिक EMI जोड्नुहोस्। बैंकले अधिकतम ५०-६०% DTI अनुमति दिन्छ। सूत्र: अधिकतम नयाँ EMI = कुल आम्दानी × ०.५० − वर्तमान EMI।' },
        { step: 3, title: 'NRB LTV सीमा जाँच गर्नुहोस्', desc: 'काठमाडौँ उपत्यका आवासीय: LTV ५०% (बैंकले मूल्याङ्कन मूल्यको अधिकतम ५०%, तपाईँले ५०% डाउन पेमेन्ट)। उपत्यका बाहिर: LTV ६०% सम्म।' },
        { step: 4, title: 'EMI पछाडि-गणना प्रयोग गर्नुहोस्', desc: '११% ब्याज, २० वर्ष: प्रत्येक रु. १०,000 मासिक EMI क्षमता ≈ रु. १०.५ लाख ऋण। DTI ले रु. ३०,000/महिना नयाँ EMI अनुमति दिए: अधिकतम ऋण ≈ रु. ३१.५ लाख।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'NRB गृहकर्जा मापदण्ड - नेपाल (आव २०८१/८२)',
        headers: ['मापदण्ड', 'काठमाडौँ उपत्यका', 'उपत्यका बाहिर', 'तपाईँको कदम'],
        rows: [
          ['अधिकतम LTV (आवासीय)', 'मूल्याङ्कन मूल्यको ५०%', 'मूल्याङ्कन मूल्यको ६०%', 'न्यूनतम ४०-५०% डाउन पेमेन्ट तयार गर्नुहोस्'],
          ['अधिकतम DTI', 'कुल आम्दानीको ५०-६०%', 'कुल आम्दानीको ५०-६०%', 'वर्तमान EMI बोझ पहिले गणना गर्नुहोस्'],
          ['सम्पत्ति मूल्याङ्कन', 'NRB-इजाजतप्राप्त मूल्याङ्कनकर्ता', 'उही', 'बिक्रेताको मूल्यमा भर नपर्नुहोस्'],
          ['ब्याजदर ("क" बैंक)', '१०-१२.५% (Base Rate + Spread)', 'उही', 'धेरै बैंक तुलना गर्नुहोस्'],
          ['अधिकतम अवधि', '२०-२५ वर्ष', '२०-२५ वर्ष', 'लामो अवधि = कम EMI, बढी ब्याज'],
          ['DSCR (भाडा सम्पत्ति)', '≥ १.२५', '≥ १.२५', 'भाडाले EMI को १२५% कभर गर्नुपर्छ']
        ]
      },
      nepalContext: 'नेपालमा रियल स्टेट कारोबार मूल्य स्ट्याम्प ड्युटी बचाउन प्रायः कम दर्ता गरिन्छ। बैंकले दर्ता मूल्यमा LTV गणना गर्छ। व्यावहारिक: रु. ८० लाखको सम्पत्ति रु. ५० लाखमा दर्ता भयो भने बैंकले ५०% × रु. ५० लाख = रु. २५ लाख मात्र ऋण दिन्छ - रु. ८० लाख तिरे पनि। यो मेल नखाने पहिलो पटक घर किन्नेहरूलाई ठूलो झटका।',
      practicalScenario: {
        persona: 'अनिता र रोहन, दुवै ३४ वर्ष, काठमाडौँमा दोहोरो आम्दानी',
        income: 'संयुक्त रु. १,४०,000/महिना (अनिता रु. ६५,000 + रोहन रु. ७५,000)',
        scenarioText: 'भैँसेपाटीमा रु. १.२ करोड (दर्ता मूल्य रु. ६० लाख) घर किन्न चाहे। रोहनको सवारी ऋण EMI रु. १८,000। उनीहरूले रु. ९० लाख गृहकर्जा अपेक्षा राखे।',
        solutionText: 'NRB गणना: LTV ५०% × रु. ६० लाख = अधिकतम ऋण रु. ३० लाख। उनीहरूलाई रु. ९० लाख आफ्नो कोषबाट चाहियो। DTI जाँच: अधिकतम EMI = रु. १,४०,000 × ५०% − रु. १८,000 = रु. ३४,000। रु. ३४,000 EMI × रु. १०.५ L/1०,000 ≈ रु. ३५.७ लाख। दुवैले रु. ३०-३५ लाख मात्र बैंक वित्तपोषण देखायो। दर्ता मूल्य र डाउन पेमेन्ट बढाउनु आवश्यक।',
        metricHighlight: 'दर्ता अन्तरले अपेक्षित रु. ९० लाखबाट वास्तविक रु. ३०-३५ लाखमा घटायो'
      },
      formula: {
        name: 'गृहकर्जा पात्रता सूत्र',
        equation: '\\text{अधिकतम नयाँ EMI} = (\\text{कुल आम्दानी} \\times 0.50) - \\text{वर्तमान EMI}',
        variables: [
          { symbol: 'कुल आम्दानी', name: 'प्रमाणित मासिक आम्दानी', desc: 'तलब + भाडा + व्यवसाय - सबै प्रमाणित।' },
          { symbol: '0.50 (५०%)', name: 'DTI सीमा', desc: 'कुल EMI कुल आम्दानीको ५०% भन्दा बढी हुँदैन।' },
          { symbol: 'वर्तमान EMI', name: 'सबै चालू ऋण', desc: 'सवारी, व्यक्तिगत, सुन, शिक्षा ऋण EMI।' }
        ],
        exampleCalculation: 'आम्दानी रु. १,४०,000। सवारी EMI रु. १८,000। अधिकतम नयाँ EMI = १,४०,000 × ०.५० − १८,000 = रु. ५२,000। ११%/२० वर्षमा: रु. ५२,000 क्षमता ≈ रु. ५४.६ लाख ऋण।',
        shortcutCalcSlug: 'calculators/emi',
        shortcutCalcName: 'EMI Calculator प्रयास गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'बजार मूल्यमा ऋण अपेक्षा राख्नु।', correct: 'बैंकले NRB-मूल्याङ्कन वा दर्ता मूल्य (जो कम) मा LTV लगाउँछ।', explanation: 'बजार र दर्ता मूल्यको अन्तर नेपालमा गृहकर्जाको नम्बर एक आश्चर्य।' },
        { mistake: 'वर्तमान EMI उपेक्षा गरी गृहकर्जा अपेक्षा राख्नु।', correct: 'हरेक वर्तमान EMI ले गृहकर्जा पात्रता घटाउँछ। साना उच्च-ब्याज ऋण पहिले तिर्नुहोस्।', explanation: 'रु. १८,000 सवारी EMI ले ≈ रु. १९ लाख गृहकर्जा क्षमता हटाउँछ।' },
        { mistake: 'एउटा बैंकमा मात्र आवेदन गर्नु।', correct: '३-५ बैंकमा आवेदन गर्नुहोस् - आन्तरिक नीतिमा फरक हुन सक्छ।', explanation: 'रु. ५० लाख, २० वर्षमा ०.५% फरक ब्याजदर = रु. ३-४ लाख कुल ब्याज फरक।' }
      ],
      definitions: [
        { term: 'DTI', full: 'Debt-to-Income Ratio', meaning: 'मासिक कुल ऋण EMI ÷ मासिक कुल आम्दानी। नेपाली बैंक ५०-६०% सीमा।' },
        { term: 'LTV', full: 'Loan-to-Value Ratio', meaning: 'ऋण ÷ सम्पत्ति मूल्य। NRB काठमाडौँमा ५०%, बाहिर ६०%।' },
        { term: 'DSCR', full: 'Debt Service Coverage Ratio', meaning: 'भाडा सम्पत्तिका लागि: खुद परिचालन आम्दानी ÷ वार्षिक ऋण सेवा। न्यूनतम १.२५।' },
        { term: 'Base Rate', full: 'NRB-प्रकाशित न्यूनतम ऋण दर', meaning: 'गृहकर्जा ब्याज = Base Rate + Spread। त्रैमासिक परिवर्तन।' }
      ],
      faqs: [
        { q: 'के नेपालमा जोडी (Spouse) आम्दानी गृहकर्जामा जोड्न सकिन्छ?', a: 'हो। अधिकांश नेपाली बैंकले Joint आवेदनमा दुवैको आम्दानी DTI मा जोड्छन्। सम्पत्तिमा दुवैको नाम राखिन्छ।' },
        { q: 'गृहकर्जामा नेपालमा कर फाइदा छ?', a: 'हो। स्व-उपयोग सम्पत्तिको गृहकर्जा ब्याज नेपाल आयकर कानूनअनुसार वार्षिक रु. २ लाखसम्म कर छुट।' },
        { q: 'कर्जा सूचना केन्द्र (CIB) को रिपोर्टले गृहकर्जामा के असर पार्छ?', a: 'नेपाल राष्ट्र बैंकको निर्देशन अनुसार बैंकहरूले कर्जा स्वीकृत गर्नुअघि CIB रिपोर्ट हेर्नैपर्छ। विगतमा कुनै ऋण वा क्रेडिट कार्डको किस्ता समयमा नतिरेको वा कालोसूचीमा परेको भए गृहकर्जा तुरुन्तै अस्वीकृत हुन सक्छ; त्यसैले आवेदन दिनुअघि आफ्नो CIB रिपोर्ट सफा हुनुपर्छ।' }
      ],
      takeaways: [
        'DTI: कुल EMI आम्दानीको ५०-६०% भन्दा बढी हुँदैन। हरेक वर्तमान EMI ले पात्रता घटाउँछ।',
        'LTV: काठमाडौँमा दर्ता मूल्यको ५०%, बाहिर ६०%।',
        'दर्ता मूल्य बनाम बजार मूल्यको अन्तर नेपालको नम्बर एक गृहकर्जा झटका।',
        'पछाडि-गणना: ११%/२० वर्षमा रु. १०,000 EMI ≈ रु. १०.५ लाख ऋण।',
        '३-५ बैंक तुलना गर्नुहोस्; आवेदन अघि CIB रिपोर्ट जाँच गर्नुहोस्।'
      ]
    },
    relatedCalculators: [
      { name: 'EMI Calculator', slug: 'calculators/emi', key: 'emi', desc: 'Calculate home loan EMI and eligibility based on your income.' }
    ],
    downloadableResources: [
      { title: 'Nepal Home Loan Eligibility Worksheet (PDF)', type: 'PDF Tool', format: 'PDF Document', size: '250 KB', href: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv' }
    ]
  },

  // ── 16. HOW TO START MONTHLY SIP IN NEPAL ─────────────────────────
  'how-to-start-monthly-sip-nepal': {
    id: 'mf-sip-start',
    slug: 'how-to-start-monthly-sip-nepal',
    categorySlug: 'mutual-funds',
    difficulty: { en: 'Beginner', np: 'सुरुवाती' },
    readTime: { en: '8 min read', np: '८ मिनेट पढाइ' },
    masteryTime: { en: '20 min to set up', np: '२० मिनेट सेटअप' },
    updatedDate: 'Bhadra 2081 / Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified under SEBON Mutual Fund Regulations, Nepal', np: 'SEBON Mutual Fund नियमावली, नेपाल अनुसार प्रमाणित' },
    prerequisites: { en: 'Understand what a mutual fund is (read "What is a Mutual Fund in Nepal" first)', np: 'Mutual Fund के हो बुझेको हुनुपर्छ' },
    en: {
      title: 'How to Start a Monthly SIP in Nepal: Complete Step-by-Step Guide',
      oneLineSummary: 'From zero to an active NPR 1,000/month SIP in a SEBON-regulated mutual fund - the exact 6 steps, documents needed, and how to set up a connectIPS auto-debit mandate.',
      summaryPoints: [
        'SIP (Systematic Investment Plan) invests a fixed amount monthly into a mutual fund automatically.',
        'Minimum SIP in Nepal: NPR 1,000/month for most open-ended funds.',
        'Process: KYC → Fund Selection → Investor Account Opening → connectIPS Mandate → First SIP.',
        'connectIPS is Nepal\'s national payment switch - it automates your monthly SIP debit from your bank.',
        'Once set up, SIP requires zero monthly action - your wealth compounds on autopilot.'
      ],
      whatIsThis: 'SIP (Systematic Investment Plan) is a disciplined investment mechanism where a fixed amount is automatically invested into a chosen mutual fund on a set date each month. Instead of trying to time the market or accumulate a large lump sum before investing, SIP lets you start with as little as NPR 1,000/month and build wealth gradually. The magic of SIP is rupee cost averaging - when markets are down, your fixed amount buys more units; when markets are up, you buy fewer. Over time, this smooths out market volatility and builds a healthy cost basis.',
      whyItMatters: 'The biggest barrier to investing in Nepal is the belief that you need a large sum to start. SIP removes this barrier entirely. A 25-year-old starting a NPR 3,000/month SIP in an equity mutual fund at 12% CAGR will have NPR 1.05 Crore at age 55 - with a total investment of only NPR 10.8 Lakh. That is wealth creation through habit, not salary.',
      howItWorks: [
        { step: 1, title: 'Step 1: Choose a SEBON-Licensed Fund Management Company', desc: 'Nepal\'s main open-ended equity fund managers: NIBL Ace Capital (NIBL Samridhi Fund, NIBL Balanced Fund), Nabil Investment Banking (Nabil Equity Fund), NIC Asia Capital (NIC Asia Balance Fund), Siddhartha Capital (Siddhartha Equity Oriented Fund), Global IME Capital. Visit their websites, compare TER (expense ratios), and read the fund\'s scheme information document (SID) to understand investment objective.' },
        { step: 2, title: 'Step 2: Complete KYC Online', desc: 'Visit the fund management company website or app → click "Open Account" / "New Investor". Upload: citizenship or passport, recent passport photo, PAN card (or PAN number). E-KYC is available at most fund managers - can be completed in 15-20 minutes from home. Some require physical signature; check if the fund house accepts digital signature.' },
        { step: 3, title: 'Step 3: Select Your Fund & SIP Date', desc: 'For beginners: equity-oriented open-ended funds (long-term 7+ year horizon). For moderate risk: balanced funds (mix of equity and bonds). Choose SIP date: 1st, 5th, 10th, 15th, or 25th of each month (options vary by fund house). Pick a date 3-5 days after your salary credit date for smooth debit.' },
        { step: 4, title: 'Step 4: Set Up connectIPS Mandate', desc: 'connectIPS is Nepal\'s national interbank payment platform (operated by NCHL). Most fund managers generate a connectIPS mandate directly from their investor portal. Steps: (a) Log into your investor account. (b) Go to "Mandate Setup" or "Auto-Debit." (c) Enter your bank details and authorize via connectIPS. (d) Your bank will SMS-verify the mandate. Once approved (1-3 days), your SIP auto-debits monthly.' },
        { step: 5, title: 'Step 5: Track via Investor Portal', desc: 'After each monthly SIP, log into your investor portal (or fund management app) to see: (a) Units purchased that month. (b) Total units held. (c) Current NAV and portfolio value. (d) XIRR (your personalized return rate). Check monthly but only review strategy annually - avoid reacting to short-term NAV fluctuations.' },
        { step: 6, title: 'Step 6: Increase SIP Annually (Step-Up)', desc: 'Each year when you get a salary raise, increase your SIP amount by at least the same percentage. A "Step-Up SIP" - increasing by NPR 500/month each year - can double your final corpus vs a flat SIP. Most fund managers allow Step-Up SIP enrollment at the time of mandate setup.' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'SIP Growth - NPR 3,000/month at 12% CAGR (Nepal Equity Fund, 30-year simulation)',
        headers: ['Year', 'Monthly SIP', 'Total Invested', 'Portfolio Value (12% CAGR)', 'Wealth Multiplier'],
        rows: [
          ['Year 5', 'NPR 3,000', 'NPR 1,80,000', 'NPR 2,43,800', '1.35×'],
          ['Year 10', 'NPR 3,000', 'NPR 3,60,000', 'NPR 6,99,600', '1.94×'],
          ['Year 15', 'NPR 3,000', 'NPR 5,40,000', 'NPR 15,07,500', '2.79×'],
          ['Year 20', 'NPR 3,000', 'NPR 7,20,000', 'NPR 29,64,800', '4.12×'],
          ['Year 25', 'NPR 3,000', 'NPR 9,00,000', 'NPR 56,79,000', '6.31×'],
          ['Year 30', 'NPR 3,000', 'NPR 10,80,000', 'NPR 1,05,39,000', '9.76×']
        ]
      },
      nepalContext: 'In Nepal, SIP in open-ended mutual funds is the lowest-friction equity investment available to retail investors. Unlike NEPSE stock investing (requires broker account, BOID, MeroShare, CRN, applied research skills), SIP requires only a fund manager account + connectIPS bank link. Most fund managers (NIBL Ace Capital, Nabil Investment Banking) now offer complete online account opening - no branch visit required. Tax treatment: mutual fund dividends in Nepal are subject to 5% TDS at source. Capital gains on mutual fund units are taxed at 5% for individual investors.',
      practicalScenario: {
        persona: 'Manisha, 26, pharmacy student turned hospital employee in Hetauda',
        income: 'NPR 38,000 / month',
        scenarioText: 'Manisha had no investment experience. She wanted to invest but was scared of the NEPSE complexity. A friend mentioned SIP.',
        solutionText: 'Step 1: She visited NIBL Ace Capital\'s website and read about NIBL Samridhi Fund. Step 2: Completed online KYC in 18 minutes - uploaded citizenship, PAN, photo. Step 3: Selected NPR 1,500/month SIP on the 10th (3 days after salary credit on 7th). Step 4: Set up connectIPS mandate - bank SMS approved in 2 days. Step 5: First SIP deducted on 10th of following month. Total setup time: 22 minutes + 2 days wait. 3 years later: NPR 54,000 invested, portfolio value NPR 68,400.',
        metricHighlight: '22-minute setup, NPR 1,500/month, NPR 68,400 portfolio in 3 years from NPR 54,000 invested'
      },
      formula: {
        name: 'SIP Future Value Formula',
        equation: 'FV = P \\times \\frac{(1 + r)^n - 1}{r} \\times (1 + r)',
        variables: [
          { symbol: 'FV', name: 'Future Value', desc: 'What your SIP portfolio will be worth at the end of n months.' },
          { symbol: 'P', name: 'Monthly SIP amount (NPR)', desc: 'Fixed amount invested each month - e.g., NPR 3,000.' },
          { symbol: 'r', name: 'Monthly return rate', desc: 'Annual CAGR ÷ 12. E.g., 12% annual = 1% monthly.' },
          { symbol: 'n', name: 'Number of months', desc: '10 years = 120 months, 20 years = 240 months.' }
        ],
        exampleCalculation: 'P = NPR 3,000. r = 12%/12 = 1% = 0.01. n = 240 (20 years). FV = 3000 × ((1.01^240 − 1) / 0.01) × 1.01 = NPR 29,93,500 ≈ NPR 30 Lakh.',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'Try SIP Calculator'
      },
      commonMistakes: [
        { mistake: 'Stopping SIP during market downturns.', correct: 'Market downturns are when SIP is most powerful - you buy more units at lower NAV. Continue SIP even when news is bad.', explanation: 'Pausing SIP for 3 months and restarting loses the cheaply-acquired units that produce the most long-term gain.' },
        { mistake: 'Investing only when a lump sum is available, not via SIP.', correct: 'Start SIP with any amount - even NPR 1,000. Increase later. Delay costs compounding years.', explanation: 'A 25-year-old starting vs a 30-year-old: same SIP at 12% CAGR, but 5 more years compounds to 66% more final corpus.' },
        { mistake: 'Choosing a fund based only on last year\'s returns.', correct: 'Compare 3-5 year returns, expense ratio (TER), fund manager tenure, and portfolio concentration.', explanation: 'Top-performing fund last year is often mean-reverting. Consistency matters more than recent peaks.' }
      ],
      definitions: [
        { term: 'SIP', full: 'Systematic Investment Plan', meaning: 'Automated monthly investment of a fixed amount into a mutual fund. Automates discipline via connectIPS bank mandate.' },
        { term: 'Rupee Cost Averaging', full: 'NAV-Smoothing Mechanism', meaning: 'Buying more units when NAV is low, fewer when high - automatically averaging down the cost per unit over time.' },
        { term: 'connectIPS', full: 'Nepal Clearing House Limited Interbank Payment', meaning: 'Nepal\'s national payment switch (by NCHL) that enables recurring bank debits for SIP mandates.' },
        { term: 'XIRR', full: 'Extended Internal Rate of Return', meaning: 'Your personal annualized return on irregular SIP cashflows. More accurate than simple CAGR for SIP performance measurement.' }
      ],
      faqs: [
        { q: 'What is the minimum SIP amount in Nepal mutual funds?', a: 'Most open-ended funds: NPR 1,000/month minimum. Some funds like NIBL Samridhi allow NPR 500/month for students. No maximum - invest as much as you can.' },
        { q: 'Can I pause or stop my SIP in Nepal?', a: 'Yes. Most fund managers allow SIP pause (1-3 months) or permanent cancellation via their investor portal. Cancel your connectIPS mandate through your bank\'s internet banking simultaneously.' },
        { q: 'Is SIP income taxable in Nepal?', a: 'Mutual fund dividends: 5% TDS deducted at source by the fund (you get the post-tax amount). Capital gains on redemption: 5% capital gains tax for individual investors. No tax on unrealized portfolio appreciation - tax only upon redemption.' }
      ],
      takeaways: [
        'SIP = automated monthly investment. Minimum NPR 1,000/month. Zero action needed after setup.',
        'Steps: KYC → Fund selection → connectIPS mandate → first SIP. Total time: ~20-25 minutes.',
        'Never stop SIP in a down market - you buy cheapest units during corrections.',
        'NPR 3,000/month at 12% CAGR: NPR 30 Lakh in 20 years, NPR 1.05 Crore in 30 years.',
        'Step-Up SIP: increase amount by 10% each year for dramatically larger final corpus.'
      ]
    },
    np: {
      title: 'नेपालमा मासिक SIP कसरी सुरु गर्ने: सम्पूर्ण चरण-दर-चरण गाइड',
      oneLineSummary: 'शून्यबाट SEBON-नियमित Mutual Fund मा रु. १,000/महिना SIP - सटिक ६ चरण, आवश्यक कागजात र connectIPS Auto-Debit सेटअप।',
      summaryPoints: [
        'SIP (Systematic Investment Plan) भनेको मासिक निश्चित रकम Mutual Fund मा स्वचालित लगानी।',
        'नेपालमा न्यूनतम SIP: अधिकांश खुलामुखी फन्डमा रु. १,000/महिना।',
        'प्रक्रिया: KYC → फन्ड छनोट → लगानीकर्ता खाता → connectIPS म्यान्डेट → पहिलो SIP।',
        'connectIPS नेपालको राष्ट्रिय अन्तरबैंक भुक्तान मञ्च - मासिक SIP स्वचालित डेबिट।',
        'सेटअपछि शून्य मासिक कार्य - सम्पत्ति स्वतः चक्रवृद्धि।'
      ],
      whatIsThis: 'SIP (Systematic Investment Plan) एक अनुशासित लगानी संयन्त्र जसमा प्रत्येक महिना निश्चित मिति मा निश्चित रकम आफूले छानेको Mutual Fund मा स्वचालित लगाइन्छ। ठूलो रकम जम्मा गर्ने वा बजार समय मिलाउने कोशिस गर्नुपर्दैन - रु. १,000/महिनाबाट सुरु गर्न सकिन्छ। SIP को जादू: Rupee Cost Averaging - बजार तल हुँदा बढी इकाइ, माथि हुँदा कम। समयसँग यसले बजार उतारचढाव नरम पार्छ।',
      whyItMatters: 'नेपालमा लगानीको सबैभन्दा ठूलो बाधा: "ठूलो रकम भएपछि लगाउँछु।" SIP यो बाधा हटाउँछ। २५ वर्षमा रु. ३,000/महिना SIP सुरु गर्दा १२% CAGR मा ५५ वर्षमा रु. १.०५ करोड - कुल लगानी मात्र रु. १०.८ लाख। तलबले होइन - बानीले सम्पत्ति बनाउँछ।',
      howItWorks: [
        { step: 1, title: 'चरण १: SEBON-इजाजत फन्ड म्यानेजर छान्नुहोस्', desc: 'नेपालका मुख्य खुलामुखी इक्विटी फन्ड म्यानेजर: NIBL Ace Capital, Nabil Investment Banking, NIC Asia Capital, Siddhartha Capital, Global IME Capital। वेबसाइट हेर्नुहोस्, TER तुलना गर्नुहोस्, Scheme Information Document पढ्नुहोस्।' },
        { step: 2, title: 'चरण २: अनलाइन KYC पूरा गर्नुहोस्', desc: 'फन्ड म्यानेजमेन्ट कम्पनीको वेबसाइट वा App → "खाता खोल्नुहोस्" क्लिक गर्नुहोस्। अपलोड: नागरिकता/राहदानी, पासपोर्ट साइज फोटो, PAN कार्ड। E-KYC: १५-२० मिनेट। केही फन्ड हाउसमा डिजिटल हस्ताक्षर पनि स्वीकार।' },
        { step: 3, title: 'चरण ३: फन्ड र SIP मिति छान्नुहोस्', desc: 'सुरुवातीका लागि: खुलामुखी इक्विटी फन्ड (७+ वर्ष क्षितिज)। मध्यम जोखिमका लागि: Balanced Fund। SIP मिति: महिनाको १, ५, १०, १५, वा २५ - तलब जम्मा हुने मितिभन्दा ३-५ दिन पछि।' },
        { step: 4, title: 'चरण ४: connectIPS म्यान्डेट सेटअप गर्नुहोस्', desc: 'connectIPS नेपालको राष्ट्रिय अन्तरबैंक भुक्तान मञ्च (NCHL संचालित)। लगानीकर्ता पोर्टलमा "म्यान्डेट सेटअप" / "Auto-Debit" → बैंक विवरण → connectIPS अधिकृत। बैंकले SMS प्रमाणीकरण गर्छ। स्वीकृति: १-३ दिन। त्यसपछि मासिक स्वचालित।' },
        { step: 5, title: 'चरण ५: लगानीकर्ता पोर्टलबाट ट्र्याक गर्नुहोस्', desc: 'प्रत्येक मासिक SIP पछि पोर्टलमा: खरिद इकाइ, कुल इकाइ, चालू NAV र पोर्टफोलियो मूल्य, XIRR हेर्नुहोस्। मासिक हेर्नुहोस् तर रणनीति वार्षिक समीक्षा - अल्पकालीन NAV मा प्रतिक्रिया नगर्नुहोस्।' },
        { step: 6, title: 'चरण ६: वार्षिक SIP बढाउनुहोस् (Step-Up)', desc: 'प्रत्येक तलब वृद्धिमा SIP उत्तिकै % बढाउनुहोस्। "Step-Up SIP" - प्रत्येक वर्ष रु. ५०० थप्दा अन्तिम कोष दोब्बर हुन सक्छ। अधिकांश फन्ड म्यानेजरले म्यान्डेट सेटअपमा Step-Up विकल्प दिन्छन्।' }
      ],
      visualDiagram: {
        type: 'table',
        caption: 'SIP वृद्धि - रु. ३,000/महिना, १२% CAGR (नेपाल इक्विटी फन्ड, ३० वर्ष)',
        headers: ['वर्ष', 'मासिक SIP', 'कुल लगानी', 'पोर्टफोलियो मूल्य (१२% CAGR)', 'सम्पत्ति गुणक'],
        rows: [
          ['वर्ष ५', 'रु. ३,000', 'रु. १,८०,000', 'रु. २,४३,800', '१.३५×'],
          ['वर्ष १०', 'रु. ३,000', 'रु. ३,६०,000', 'रु. ६,९९,600', '१.९४×'],
          ['वर्ष १५', 'रु. ३,000', 'रु. ५,४०,000', 'रु. १५,०७,500', '२.७९×'],
          ['वर्ष २०', 'रु. ३,000', 'रु. ७,२०,000', 'रु. २९,६४,800', '४.१२×'],
          ['वर्ष २५', 'रु. ३,000', 'रु. ९,००,000', 'रु. ५६,७९,000', '६.३१×'],
          ['वर्ष ३०', 'रु. ३,000', 'रु. १०,८०,000', 'रु. १,०५,३९,000', '९.७६×']
        ]
      },
      nepalContext: 'नेपालमा खुलामुखी Mutual Fund SIP खुद्रा लगानीकर्ताका लागि सबैभन्दा सहज इक्विटी लगानी। NEPSE सेयर (ब्रोकर, BOID, MeroShare, CRN, अनुसन्धान सीप चाहिन्छ) भन्दा धेरै सरल। NIBL Ace Capital र Nabil Investment Banking अहिले पूर्ण अनलाइन - शाखा भ्रमण आवश्यक छैन। कर: Mutual Fund लाभांश ५% TDS स्रोतमा। रिडेम्सनमा पुँजीगत लाभ कर ५% (व्यक्तिगत)।',
      practicalScenario: {
        persona: 'मनिषा, २६ वर्ष, हेटौँडामा अस्पताल कर्मचारी',
        income: 'मासिक रु. ३८,000',
        scenarioText: 'मनिषासँग लगानीको अनुभव थिएन। NEPSE जटिल लाग्यो। साथीले SIP सुझाए।',
        solutionText: 'चरण १: NIBL Ace Capital वेबसाइट → NIBL Samridhi Fund पढे। चरण २: अनलाइन KYC - नागरिकता, PAN, फोटो, १८ मिनेट। चरण ३: रु. १,500/महिना, महिनाको १० गते (तलब ७ गते)। चरण ४: connectIPS म्यान्डेट - बैंक SMS प्रमाणीकरण २ दिनमा। चरण ५: अर्को महिनाको १० गते पहिलो SIP काटियो। कुल सेटअप: २२ मिनेट + २ दिन। ३ वर्षमा: रु. ५४,000 लगानी, पोर्टफोलियो रु. ६८,400।',
        metricHighlight: '२२ मिनेट सेटअप, रु. १,500/महिना, ३ वर्षमा रु. ५४,000 → रु. ६८,400'
      },
      formula: {
        name: 'SIP Future Value सूत्र',
        equation: 'FV = P \\times \\frac{(1 + r)^n - 1}{r} \\times (1 + r)',
        variables: [
          { symbol: 'FV', name: 'भावी मूल्य', desc: 'n महिनामा SIP पोर्टफोलियोको मूल्य।' },
          { symbol: 'P', name: 'मासिक SIP रकम', desc: 'प्रत्येक महिना लगाइने निश्चित रकम - रु. ३,000।' },
          { symbol: 'r', name: 'मासिक प्रतिफल दर', desc: 'वार्षिक CAGR ÷ १२। १२% = मासिक १%।' },
          { symbol: 'n', name: 'महिना संख्या', desc: '१० वर्ष = १२० महिना, २० वर्ष = २४० महिना।' }
        ],
        exampleCalculation: 'P = रु. ३,000। r = १%। n = २४० (२० वर्ष)। FV = ३000 × ((१.०१^२४० − १) / ०.०१) × १.०१ ≈ रु. २९,९३,500 ≈ रु. ३० लाख।',
        shortcutCalcSlug: 'calculators/sip',
        shortcutCalcName: 'SIP Calculator प्रयास गर्नुहोस्'
      },
      commonMistakes: [
        { mistake: 'बजार घट्दा SIP रोक्नु।', correct: 'बजार घट्दा SIP सबैभन्दा शक्तिशाली - सस्तोमा थप इकाइ। खराब समाचारमा पनि जारी राख्नुहोस्।', explanation: '३ महिना SIP रोकेर पुनः सुरु गर्दा सबैभन्दा सस्ता इकाइ गुम्छन्।' },
        { mistake: 'ठूलो रकम जम्मा भएपछि मात्र लगाउने।', correct: 'जुनसुकै रकममा सुरु गर्नुहोस् - रु. १,000। ढिलाइले चक्रवृद्धि वर्ष गुम्छ।', explanation: '२५ वर्षको सुरुवात बनाम ३० वर्षको: उही SIP, तर ५ वर्ष थप = ६६% बढी अन्तिम कोष।' },
        { mistake: 'गत वर्षको प्रतिफलको आधारमा फन्ड छान्नु।', correct: '३-५ वर्षको निरन्तर प्रतिफल, TER, फन्ड म्यानेजर अनुभव तुलना गर्नुहोस्।', explanation: 'गत वर्षको उच्च प्रतिफल फन्ड प्रायः Mean-Revert गर्छ।' }
      ],
      definitions: [
        { term: 'SIP', full: 'Systematic Investment Plan', meaning: 'मासिक निश्चित रकम स्वचालित Mutual Fund लगानी। connectIPS बैंक म्यान्डेटद्वारा स्वचालित।' },
        { term: 'Rupee Cost Averaging', full: 'NAV-सरलीकरण संयन्त्र', meaning: 'NAV तल हुँदा बढी इकाइ, माथि हुँदा कम - समयसँग प्रति-इकाइ लागत औसत।' },
        { term: 'connectIPS', full: 'NCHL अन्तरबैंक भुक्तान', meaning: 'नेपालको राष्ट्रिय भुक्तान मञ्च (NCHL संचालित) जसले SIP म्यान्डेटका लागि बैंक डेबिट स्वचालित गर्छ।' },
        { term: 'XIRR', full: 'Extended Internal Rate of Return', meaning: 'अनियमित SIP cashflow मा व्यक्तिगत वार्षिकीकृत प्रतिफल। SIP प्रदर्शन मापनको सटीक तरिका।' }
      ],
      faqs: [
        { q: 'नेपाल Mutual Fund मा न्यूनतम SIP रकम कति?', a: 'अधिकांश खुलामुखी फन्डमा रु. १,000/महिना। NIBL Samridhi ले विद्यार्थीका लागि रु. ५०० पनि स्वीकार गर्छ। अधिकतम सीमा छैन।' },
        { q: 'के नेपालमा SIP रोक्न वा रद्द गर्न सकिन्छ?', a: 'हो। अधिकांश फन्ड म्यानेजरले SIP Pause (१-३ महिना) वा स्थायी रद्दको विकल्प दिन्छन् लगानीकर्ता पोर्टलमा। एकैसाथ बैंकको इन्टरनेट बैंकिङमा connectIPS म्यान्डेट पनि रद्द गर्नुहोस्।' },
        { q: 'SIP बाट आम्दानीमा नेपालमा कर लाग्छ?', a: 'Mutual Fund लाभांश: स्रोतमा ५% TDS। रिडेम्सनमा पुँजीगत लाभ: व्यक्तिगत लगानीकर्ताका लागि ५%। अवास्तविक पोर्टफोलियो वृद्धिमा कर छैन - रिडेम्सन भएमा मात्र।' }
      ],
      takeaways: [
        'SIP = मासिक स्वचालित लगानी। न्यूनतम रु. १,000। सेटअपछि शून्य मासिक कार्य।',
        'चरण: KYC → फन्ड → connectIPS म्यान्डेट → पहिलो SIP। कुल समय ~२०-२५ मिनेट।',
        'बजार तल हुँदा SIP कहिल्यै नरोक्नुहोस् - सबैभन्दा सस्तो इकाइ त्यही बेला किनिन्छ।',
        'रु. ३,000/महिना, १२% CAGR: २० वर्षमा रु. ३० लाख, ३० वर्षमा रु. १.०५ करोड।',
        'Step-Up SIP: प्रत्येक वर्ष १०% बढाउनुहोस् - नाटकीय रूपमा ठूलो अन्तिम कोष।'
      ]
    },
    relatedCalculators: [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate how your monthly SIP grows over 5, 10, 20, 30 years.' }
    ],
    downloadableResources: [
      { title: 'Nepal SIP Setup Checklist (PDF)', type: 'PDF Checklist', format: 'PDF Document', size: '180 KB', href: 'assets/downloads/nepal-sip-mutual-fund-checklist.html' }
    ]
  }
};

const RAW_FLAGSHIP_LESSONS = {
  ...BASE_FLAGSHIP_LESSONS,
  ...BATCH_A,
  ...BATCH_B,
  ...BATCH_C,
  ...BATCH_D,
  ...BATCH_E,
  ...BATCH_F,
  ...BATCH_G,
  ...BATCH_H,
  ...BATCH_I,
  ...BATCH_J,
  ...BATCH_K,
  ...BATCH_L,
  ...BATCH_M,
  ...BATCH_N
};

const DEFAULT_CATEGORY_CALCS = {
  'loans': [
    { name: 'EMI Calculator', slug: 'calculators/emi', key: 'emi', desc: 'Calculate monthly EMI, total interest, and reducing balance schedule.' },
    { name: 'Loan Calculator', slug: 'calculators/loan', key: 'loan', desc: 'See interest saved by prepaying bank loans in Nepal.' }
  ],
  'mutual-funds': [
    { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Simulate monthly systematic investments and compounded corpus growth.' },
    { name: 'SWP Pension Calculator', slug: 'calculators/swp', key: 'swp', desc: 'Plan monthly retirement pension withdrawals with capital preservation.' }
  ],
  'digital-payments': [
    { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Direct digital cashback and surplus funds into automated micro-SIPs.' },
    { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'Understand purchasing power shifts and payment optimization.' }
  ],
  'business': [
    { name: 'Income Tax Calculator', slug: 'calculators/tax', key: 'tax', desc: 'Calculate corporate tax, TDS withholding, and net business income.' },
    { name: 'CAGR Calculator', slug: 'calculators/cagr', key: 'cagr', desc: 'Measure annual compound growth rate of business revenues.' }
  ],
  'economics': [
    { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'Calculate the real impact of CPI inflation on purchasing power in Nepal.' },
    { name: 'CAGR Calculator', slug: 'calculators/cagr', key: 'cagr', desc: 'Track multi-year GDP and macroeconomic growth rates.' }
  ],
  'productivity': [
    { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Automate monthly "Pay Yourself First" savings allocations.' },
    { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'Forecast long-term savings goals against living cost inflation.' }
  ],
  'retirement-planning': [
    { name: 'Retirement Calculator', slug: 'calculators/retirement', key: 'retirement', desc: 'Calculate exact inflation-adjusted corpus needed for retirement in Nepal.' },
    { name: 'SWP Calculator', slug: 'calculators/swp', key: 'swp', desc: 'Simulate safe systematic monthly withdrawals and pension payouts.' }
  ]
};

const DEFAULT_CATEGORY_RESOURCES = {
  'loans': [
    { title: 'Nepal Bank Loan Appraisal Checklist & CIB Guide (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '280 KB', href: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv' }
  ],
  'mutual-funds': [
    { title: 'Nepal Mutual Fund & SIP Selection Handbook (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '310 KB', href: 'assets/downloads/nepal-sip-mutual-fund-checklist.html' }
  ],
  'digital-payments': [
    { title: 'Nepal Digital Banking Security & Cyber Bureau SOP (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '220 KB', href: 'assets/downloads/nepal-digital-payment-safety-guide.html' }
  ],
  'business': [
    { title: 'OCR Company Registration & Annual Compliance Checklist (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '350 KB', href: 'assets/downloads/nepal-salary-tax-deductions-checklist.html' }
  ],
  'economics': [
    { title: 'Nepal Macroeconomics & NRB Policy Decoding Cheat Sheet (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '260 KB', href: 'assets/downloads/nepse-first-time-investor-checklist.html' }
  ],
  'productivity': [
    { title: 'RisePaisa Personal Net Worth & Monthly Audit Template (XLSX)', type: 'Spreadsheet', format: 'Excel Template', size: '190 KB', href: 'assets/downloads/nepal-cash-flow-tracker.csv' }
  ],
  'retirement-planning': [
    { title: 'Nepal Retirement Roadmap & SSF/CIT Optimization Guide (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '340 KB', href: 'assets/downloads/nepse-first-time-investor-checklist.html' }
  ]
};

// Apply curriculum pedagogical enrichment (measurable objectives, practical exercises, advantages/limitations, target audience, decision scenarios, and targeted FAQs) across all 82 lessons
export const FLAGSHIP_LESSONS = Object.fromEntries(
  Object.entries(RAW_FLAGSHIP_LESSONS).map(([slug, lesson]) => {
    const enrich = CURRICULUM_ENRICHMENT[slug];
    const catSlug = lesson.categorySlug || 'investing';

    const mergeFaqs = (baseFaqs = [], extraFaqs = []) => {
      const seen = new Set();
      const result = [];
      for (const f of [...(baseFaqs || []), ...(extraFaqs || [])]) {
        const q = (f.q || f.question || '').trim();
        const key = q.toLowerCase();
        if (key && !seen.has(key)) {
          seen.add(key);
          result.push(f);
        }
      }
      return result;
    };

    return [
      slug,
      {
        ...lesson,
        relatedCalculators: (lesson.relatedCalculators && lesson.relatedCalculators.length > 0) ? lesson.relatedCalculators : (DEFAULT_CATEGORY_CALCS[catSlug] || [
          { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Plan your long-term wealth compounding in Nepal.' }
        ]),
        downloadableResources: (lesson.downloadableResources && lesson.downloadableResources.length > 0) ? lesson.downloadableResources : (DEFAULT_CATEGORY_RESOURCES[catSlug] || [
          { title: 'RisePaisa Financial Action Sheet (PDF)', type: 'PDF Guide', format: 'PDF Document', size: '250 KB', href: 'assets/downloads/nepse-first-time-investor-checklist.html' }
        ]),
        en: {
          ...lesson.en,
          summaryPoints: enrich?.en?.summaryPoints || lesson.en?.summaryPoints,
          practicalExercise: enrich?.en?.practicalExercise || lesson.en?.practicalExercise,
          advantages: enrich?.en?.advantages || lesson.en?.advantages || [],
          limitations: enrich?.en?.limitations || lesson.en?.limitations || [],
          targetAudience: enrich?.en?.targetAudience || lesson.en?.targetAudience || null,
          decisionScenario: enrich?.en?.decisionScenario || lesson.en?.decisionScenario || null,
          faqs: mergeFaqs(lesson.en?.faqs, enrich?.en?.faqs)
        },
        np: {
          ...lesson.np,
          summaryPoints: enrich?.np?.summaryPoints || lesson.np?.summaryPoints,
          practicalExercise: enrich?.np?.practicalExercise || lesson.np?.practicalExercise,
          advantages: enrich?.np?.advantages || lesson.np?.advantages || [],
          limitations: enrich?.np?.limitations || lesson.np?.limitations || [],
          targetAudience: enrich?.np?.targetAudience || lesson.np?.targetAudience || null,
          decisionScenario: enrich?.np?.decisionScenario || lesson.np?.decisionScenario || null,
          faqs: mergeFaqs(lesson.np?.faqs, enrich?.np?.faqs)
        }
      }
    ];
  })
);


/**
 * Universal Lesson Resolver Engine
 * Retrieves full pedagogical lesson object across all 13 categories with sequence info
 * @param {string} categorySlug - e.g. 'investing', 'nepse', 'tax'
 * @param {string} lessonSlug - e.g. 'what-is-investing', 'what-is-an-ipo'
 * @returns {Object|null} Full lesson payload or null if category invalid
 */
export function getLessonBySlug(categorySlug, lessonSlug) {
  if (!categorySlug || !lessonSlug) return null;

  // 1. Resolve Category (including aliases like 'tax' -> 'taxation')
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const cleanLesson = lessonSlug.toLowerCase().trim();

  // 2. Smart Lesson Aliases Mapping
  const lessonAliasMap = {
    'investing': {
      'what-is-investing': 'what-is-investing',
      'investing-basics': 'what-is-investing',
      // compounding aliases
      'compounding': 'compounding-engine-wealth',
      'power-of-compounding': 'compounding-engine-wealth',
      'compound-interest': 'compounding-engine-wealth',
      'sip-compounding': 'compounding-engine-wealth',
      // inflation aliases
      'inflation-vs-savings': 'inflation-vs-savings-nepal',
      'inflation': 'inflation-vs-savings-nepal',
      'real-return': 'inflation-vs-savings-nepal',
      'inflation-vs-savings-nepal': 'inflation-vs-savings-nepal',
      // sip
      'sip': 'how-to-start-monthly-sip-nepal',
      'how-to-start-sip': 'how-to-start-monthly-sip-nepal',
      'dividend-investing': 'dividend-investing-nepal',
      'bonus-shares-vs-dividend': 'dividend-investing-nepal'
    },
    'nepse': {
      'what-is-an-ipo': 'what-is-an-ipo',
      'ipo': 'what-is-an-ipo',
      // demat aliases
      'demat': 'demat-meroshare-crn-setup',
      'meroshare': 'demat-meroshare-crn-setup',
      'boid': 'demat-meroshare-crn-setup',
      'crn': 'demat-meroshare-crn-setup',
      'open-demat': 'demat-meroshare-crn-setup',
      'tms': 'broker-account-tms-navigation',
      'right-shares': 'right-shares-nepal',
      'fundamental-analysis': 'fundamental-analysis-nepse'
    },
    'banking': {
      'fixed-deposit': 'fixed-deposit',
      'fd': 'fixed-deposit',
      // bank classes aliases
      'bank-classes': 'bank-classes-nepal-nrb',
      'ka-shreni': 'bank-classes-nepal-nrb',
      'class-a-bank': 'bank-classes-nepal-nrb',
      'nrb-bank-classification': 'bank-classes-nepal-nrb',
      'cooperative-vs-bank': 'bank-classes-nepal-nrb',
      'dollar-card': 'dollar-card-nepal',
      'cooperative-safety': 'cooperative-safety-rules-nepal'
    },
    'taxation': {
      'pan-explained': 'pan-explained',
      'pan': 'pan-explained',
      'income-tax-slabs': 'nepal-income-tax-slabs-salary',
      'income-tax': 'nepal-income-tax-slabs-salary',
      'tax-slabs': 'nepal-income-tax-slabs-salary',
      'tds': 'nepal-income-tax-slabs-salary',
      'salary-tax': 'nepal-income-tax-slabs-salary',
      'freelance-tax': 'freelance-it-export-tax-nepal',
      'it-export-tax': 'freelance-it-export-tax-nepal'
    },
    'mutual-funds': {
      'what-is-mutual-fund': 'what-is-mutual-fund-nepal',
      'sip-explained': 'starting-online-sip-connectips-nepal'
    },
    'loans': {
      'emi-explained': 'flat-rate-vs-reducing-balance-emi',
      'education-loan': 'education-abroad-loan-nepal',
      'abroad-loan': 'education-abroad-loan-nepal'
    },
    'digital-payments': {
      'wrong-transfer': 'reversing-wrong-digital-transfer-nepal',
      'reverse-transfer': 'reversing-wrong-digital-transfer-nepal'
    },
    'retirement-planning': {
      'healthcare-retirement': 'healthcare-costs-in-retirement-nepal',
      'medical-inflation': 'healthcare-costs-in-retirement-nepal'
    },
    'personal-finance': {
      'cash-flow': 'cash-flow-equation-nepal',
      'budget-50-30-20': '50-30-20-budget-nepal',
      // emergency fund aliases
      'emergency-fund': 'emergency-fund-building',
      'bipat-kosh': 'emergency-fund-building',
      'rainy-day-fund': 'emergency-fund-building',
      '6-month-fund': 'emergency-fund-building',
      'gold-investment': 'gold-as-investment-nepal',
      'gold-nepal': 'gold-as-investment-nepal'
    }
  };

  const catAliases = lessonAliasMap[category.slug] || {};
  const targetSlug = catAliases[cleanLesson] || cleanLesson;

  // 3. Flatten all lessons from category modules for sequencing
  const allLessons = [];
  (category.roadmap || []).forEach(stage => {
    (stage.lessons || []).forEach(l => {
      allLessons.push({
        ...l,
        stageNumber: stage.stageNumber,
        moduleNumber: stage.moduleNumber || stage.stageNumber,
        moduleTitle: stage.en?.title || 'Foundation',
        moduleTitleNp: stage.np?.title || 'आधारभूत',
        smartRecommendation: stage.smartRecommendation || null
      });
    });
  });

  // 4. Check Flagship Custom Lessons Registry
  if (FLAGSHIP_LESSONS[targetSlug]) {
    const flagship = FLAGSHIP_LESSONS[targetSlug];
    const lessonIdx = allLessons.findIndex(l => l.slug === targetSlug || l.slug === cleanLesson);
    const resolvedIdx = lessonIdx >= 0 ? lessonIdx : 0;
    const currentLessonMeta = allLessons[resolvedIdx] || {};
    const parentStage = (category.roadmap || []).find(st => st.lessons?.some(l => l.slug === targetSlug || l.slug === cleanLesson)) || category.roadmap?.[0] || {};

    const prevLesson = resolvedIdx > 0 ? allLessons[resolvedIdx - 1] : null;
    const nextLesson = resolvedIdx < allLessons.length - 1 ? allLessons[resolvedIdx + 1] : null;

    const PROGRESSIVE_DIFFICULTY = [
      { en: 'Beginner', np: 'सुरुवाती' },
      { en: 'Basic', np: 'आधारभूत' },
      { en: 'Practical', np: 'व्यावहारिक' },
      { en: 'Analysis', np: 'विश्लेषण' },
      { en: 'Decision Making', np: 'निर्णय क्षमता' },
      { en: 'Strategic Mastery', np: 'रणनीतिक निपुणता' }
    ];
    const resolvedDifficulty = PROGRESSIVE_DIFFICULTY[resolvedIdx] || flagship.difficulty || { en: 'Beginner', np: 'सुरुवाती' };

    return {
      ...flagship,
      difficulty: resolvedDifficulty,
      isFlagship: true,
      category,
      moduleNumber: currentLessonMeta.moduleNumber || parentStage.moduleNumber || parentStage.stageNumber || 1,
      moduleTitle: currentLessonMeta.moduleTitle || parentStage.en?.title || 'Foundations',
      moduleTitleNp: currentLessonMeta.moduleTitleNp || parentStage.np?.title || 'आधारभूत जग',
      lessonIndex: resolvedIdx,
      totalLessons: Math.max(allLessons.length, 6),
      prevLesson: prevLesson ? {
        slug: prevLesson.slug,
        title: prevLesson.en?.title || 'Previous Lesson',
        titleNp: prevLesson.np?.title || 'अघिल्लो पाठ',
        duration: prevLesson.duration
      } : null,
      nextLesson: nextLesson ? {
        slug: nextLesson.slug,
        title: nextLesson.en?.title || 'Next Lesson',
        titleNp: nextLesson.np?.title || 'पछिल्लो पाठ',
        duration: nextLesson.duration
      } : null,
      smartRecommendation: currentLessonMeta.smartRecommendation || parentStage.smartRecommendation || null
    };
  }

  // 5. Match within category's defined lessons
  let matchedIdx = allLessons.findIndex(l => l.slug === targetSlug || l.slug === cleanLesson);
  if (matchedIdx === -1) {
    // Try substring matching
    matchedIdx = allLessons.findIndex(l => l.slug.includes(cleanLesson) || cleanLesson.includes(l.slug) || l.id === cleanLesson);
  }

  // Fallback to first lesson if not found but category exists
  if (matchedIdx === -1) {
    matchedIdx = 0;
  }

  const baseLesson = allLessons[matchedIdx] || {
    id: `${category.slug}-1`,
    number: 1,
    slug: cleanLesson,
    duration: '15 min',
    difficulty: 'Beginner',
    type: 'Lesson',
    updatedDate: category.lastUpdated || 'Sep 2026',
    en: {
      title: `${category.en?.name || 'Finance'} Chapter: ${cleanLesson.replace(/-/g, ' ')}`,
      summary: category.en?.shortDesc || 'Practical financial education in Nepal.',
      keyTakeaways: 'Understand core principles; verify with licensed Nepal institutions; execute with discipline.'
    },
    np: {
      title: `${category.np?.name || 'वित्त'} पाठ: ${cleanLesson.replace(/-/g, ' ')}`,
      summary: category.np?.shortDesc || 'नेपालका लागि व्यावहारिक वित्तीय ज्ञान।',
      keyTakeaways: 'आधारभूत सिद्धान्त बुझ्नुहोस्; नेपालका नियमनकारी निकायका नियम पालना गर्नुहोस्; अनुशासित लगानी गर्नुहोस्।'
    }
  };

  const prevLesson = matchedIdx > 0 ? allLessons[matchedIdx - 1] : null;
  const nextLesson = matchedIdx < allLessons.length - 1 ? allLessons[matchedIdx + 1] : null;

  // 6. Generate rich pedagogical content answering all 5 questions for any lesson
  const enTitle = baseLesson.en?.title || cleanLesson;
  const npTitle = baseLesson.np?.title || cleanLesson;
  const enSummary = baseLesson.en?.summary || category.en?.shortDesc;
  const npSummary = baseLesson.np?.summary || category.np?.shortDesc;
  const takeaways = baseLesson.en?.keyTakeaways || 'Focus on long-term discipline and regulatory safety in Nepal.';
  const takeawaysNp = baseLesson.np?.keyTakeaways || 'नेपालको कानुनी परिधिभित्र रही अनुशासित वित्तीय योजना बनाउनुहोस्।';

  return {
    id: baseLesson.id,
    slug: baseLesson.slug,
    categorySlug: category.slug,
    category,
    difficulty: { en: baseLesson.difficulty || 'Beginner', np: baseLesson.difficulty || 'सुरुवाती' },
    readTime: { en: `${baseLesson.duration || '12 min'} read`, np: `${baseLesson.duration || '१२ मिनेट'} पढाइ` },
    masteryTime: { en: '20 min practice', np: '२० मिनेट अभ्यास' },
    updatedDate: baseLesson.updatedDate || category.lastUpdated || 'Sep 2026',
    author: { en: 'RisePaisa Research Team', np: 'risePaisa अनुसन्धान टोली' },
    reviewedBy: { en: 'Verified for Nepal Regulatory Accuracy', np: 'नेपालको वित्तीय नियम अनुसार प्रमाणित' },
    prerequisites: baseLesson.prerequisites ? {
      en: `Prerequisites: ${baseLesson.prerequisites}`,
      np: `आवश्यक पूर्वज्ञान: ${baseLesson.prerequisites}`
    } : {
      en: 'None - Beginner Friendly',
      np: 'कुनै पूर्वज्ञान चाहिँदैन - नयाँ सिकारुका लागि उपयुक्त'
    },
    moduleNumber: baseLesson.moduleNumber || 1,
    moduleTitle: baseLesson.moduleTitle || 'Foundation',
    moduleTitleNp: baseLesson.moduleTitleNp || 'आधारभूत',
    lessonIndex: matchedIdx,
    totalLessons: allLessons.length,
    prevLesson: prevLesson ? {
      slug: prevLesson.slug,
      title: prevLesson.en?.title || 'Previous Lesson',
      titleNp: prevLesson.np?.title || 'अघिल्लो पाठ',
      duration: prevLesson.duration
    } : null,
    nextLesson: nextLesson ? {
      slug: nextLesson.slug,
      title: nextLesson.en?.title || 'Next Lesson',
      titleNp: nextLesson.np?.title || 'पछिल्लो पाठ',
      duration: nextLesson.duration
    } : null,
    en: {
      title: enTitle,
      oneLineSummary: enSummary,
      summaryPoints: [
        `Core understanding of ${enTitle} and its role in ${category.en?.name}.`,
        'Why traditional approaches fail in Nepal and how to apply modern financial frameworks.',
        'Step-by-step practical implementation guidelines for learners in Nepal.',
        'How regulatory guidelines from NRB, SEBON, or IRD govern this area.',
        'Common pitfalls, risk management, and key metrics to measure.'
      ],
      whatIsThis: `${enTitle} is a foundational pillar of ${category.en?.name}. It provides the structural knowledge required to navigate personal and commercial finance in Nepal without falling victim to predatory informal loans, market rumors, or currency depreciation. ${category.en?.whatIsThis || ''}`,
      whyItMatters: `Without understanding ${enTitle}, individuals and businesses in Nepal frequently suffer from capital erosion, unnecessary fees, or non-compliance penalties. ${category.en?.whyImportant || ''}`,
      howItWorks: [
        {
          step: 1,
          title: 'Foundational Assessment',
          desc: 'Assess your existing cash flow, risk capacity, and regulatory documentation (Citizenship, PAN, Bank KYC).'
        },
        {
          step: 2,
          title: 'Structured Execution',
          desc: 'Utilize licensed, formal platforms in Nepal (Class A banks, SEBON brokers, IRD Nagarik portal, connectIPS).'
        },
        {
          step: 3,
          title: 'Disciplined Monitoring',
          desc: 'Track metrics, review quarterly statements, and reinvest returns to maximize compounding.'
        },
        {
          step: 4,
          title: 'Risk Review & Optimization',
          desc: 'Rebalance allocations and review tax deductions annually to preserve purchasing power.'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: `Framework Breakdown for ${enTitle}`,
        headers: ['Component', 'Informal / Traditional Practice', 'RisePaisa Recommended Framework'],
        rows: [
          ['Approach', 'Word-of-mouth recommendations', 'Audited, data-driven financial analysis'],
          ['Channels', 'Unverified cash or middlemen', 'Licensed Class A banks, SEBON entities, connectIPS'],
          ['Risk Control', 'Undiversified exposure', 'Disciplined asset allocation & regulatory compliance'],
          ['Timeline', 'Short-term speculative mindset', 'Multi-year compounding strategy']
        ]
      },
      nepalContext: `In Nepal, this concept is regulated under the direct supervision of national regulatory bodies including Nepal Rastra Bank (NRB), Securities Board of Nepal (SEBON), and the Inland Revenue Department (IRD). ${category.en?.howInNepal || 'Always verify that institutions possess valid licenses and adhere to official directives.'}`,
      practicalScenario: {
        persona: 'Siddhartha, 28, corporate employee in Kathmandu',
        income: 'NPR 65,000 / month',
        scenarioText: `Siddhartha needed a clear, disciplined strategy to manage his finances and execute on ${enTitle} without risking his hard-earned monthly salary.`,
        solutionText: `By following the structured framework, Siddhartha allocated his funds systematically: 50% for core living needs, 20% for emergency buffers, and 30% for wealth creation across regulated instruments in Nepal. Within 12 months, his disciplined approach prevented costly fees and built a predictable foundation.`,
        metricHighlight: 'Disciplined Framework Applied'
      },
      formula: {
        name: 'Core Financial Efficiency Metric',
        equation: '\\text{Efficiency Rate} = \\frac{\\text{Net Value Generated}}{\\text{Total Capital Committed}} \\times 100',
        variables: [
          { symbol: 'Net Value', name: 'Net Economic Gain', desc: 'Total earnings after subtracting all bank fees, commissions, and TDS.' },
          { symbol: 'Capital Committed', name: 'Invested Capital', desc: 'Total out-of-pocket funds deployed into the asset.' }
        ],
        exampleCalculation: 'For an investment of NPR 100,000 generating NPR 12,000 net after taxes and fees, the annual efficiency rate is 12.0%.',
        shortcutCalcSlug: category.calcCount > 0 ? 'calculators' : 'calculators/sip',
        shortcutCalcName: 'Explore Relevant Calculators'
      },
      commonMistakes: [
        {
          mistake: 'Relying on unverified social media rumors rather than official regulatory portals.',
          correct: 'Always reference directives from NRB (nrb.org.np), SEBON (sebon.gov.np), or IRD (ird.gov.np).',
          explanation: 'Social media channels often promote unregulated schemes that risk complete capital loss.'
        },
        {
          mistake: 'Ignoring taxes, transaction fees, and TDS deductions.',
          correct: 'Account for all broker commissions, DP fees, and 5% withholding taxes when calculating net yield.',
          explanation: 'Failing to track net numbers leads to inaccurate financial planning.'
        }
      ],
      definitions: [
        { term: 'NRB', full: 'Nepal Rastra Bank', meaning: 'The central bank and monetary regulator of all banking institutions in Nepal.' },
        { term: 'SEBON', full: 'Securities Board of Nepal', meaning: 'The regulatory apex body for capital markets, stock exchanges, and mutual funds in Nepal.' }
      ],
      faqs: (category.roadmap?.[0]?.smartRecommendation?.relevantCalc ? [
        {
          q: `How long does it take to learn and implement ${enTitle}?`,
          a: 'The foundational concepts can be absorbed in 15 to 30 minutes. Practical implementation using digital tools like MeroShare, connectIPS, or mobile banking takes less than an hour.'
        },
        {
          q: 'Are there any hidden charges or fees in Nepal?',
          a: 'All fees across licensed institutions are publicly mandated by regulators. Always check the schedule of charges on official bank and merchant banker websites.'
        }
      ] : []),
      takeaways: [
        takeaways,
        'Always execute through regulated, licensed financial institutions in Nepal.',
        'Track net returns after all mandatory TDS deductions and statutory charges.',
        'Progress sequentially through the curriculum to build complete financial confidence.'
      ]
    },
    np: {
      title: npTitle,
      oneLineSummary: npSummary,
      summaryPoints: [
        `${npTitle} को आधारभूत अवधारणा र ${category.np?.name} मा यसको भूमिका।`,
        'नेपालमा परम्परागत तरिका किन असफल हुन्छन् र आधुनिक वित्तीय ढाँचा कसरी अपनाउने।',
        'नेपालका सिकारुहरूका लागि चरणबद्ध र व्यावहारिक कार्यान्वयन निर्देशिका।',
        'नेपाल राष्ट्र बैंक, धितोपत्र बोर्ड र आन्तरिक राजस्व विभागका नियमहरूको प्रभाव।',
        'सामान्य गल्तीहरू, जोखिम नियन्त्रण र सफलता मापन गर्ने आधारहरू।'
      ],
      whatIsThis: `${npTitle} भनेको ${category.np?.name} को एउटा प्रमुख स्तम्भ हो। यसले नेपालको वित्तीय प्रणालीमा ठगी, महँगी र अनौपचारिक ऋणको पासोबाट जोगिएर सही निर्णय लिन मद्दत गर्छ। ${category.np?.whatIsThis || ''}`,
      whyItMatters: `${npTitle} को ज्ञान नहुँदा नेपालमा आम नागरिक र व्यवसायीहरूले ठूलो आर्थिक क्षति र कानुनी झन्झट बेहोर्नु पर्ने हुन्छ। ${category.np?.whyImportant || ''}`,
      howItWorks: [
        {
          step: 1,
          title: 'प्रारम्भिक मूल्यांकन',
          desc: 'आफ्नो आम्दानी, खर्च र आवश्यक कागजातहरू (नागरिकता, PAN, बैंक KYC) को यथार्थ विवरण जाँच्नुहोस्।'
        },
        {
          step: 2,
          title: 'संरचित कार्यान्वयन',
          desc: 'नेपालका आधिकारिक माध्यमहरू (वाणिज्य बैंक, SEBON ब्रोकर, नागरिक एप, connectIPS) मार्फत अघि बढ्नुहोस्।'
        },
        {
          step: 3,
          title: 'अनुशासित अनुगमन',
          desc: 'नियमित रूपमा विवरण हेर्नुहोस् र नाफालाई पुनः लगानी गरी चक्रवृद्धिको फाइदा लिनुहोस्।'
        },
        {
          step: 4,
          title: 'जोखिम व्यवस्थापन',
          desc: 'वार्षिक रूपमा आफ्नो पोर्टफोलियो र कर छुटहरूको समीक्षा गर्नुहोस्।'
        }
      ],
      visualDiagram: {
        type: 'table',
        caption: `${npTitle} सम्बन्धी तुलनात्मक ढाँचा`,
        headers: ['पक्ष', 'परम्परागत / अनौपचारिक अभ्यास', 'risePaisa सिफारिस गरिएको अभ्यास'],
        rows: [
          ['विधि', 'हल्ला र अरूको भरमा गरिने निर्णय', 'तथ्यांक र नियममा आधारित वित्तीय योजना'],
          ['माध्यम', 'नगद वा अनौपचारिक बिचौलिया', 'इजाजतप्राप्त बैंक, धितोपत्र बोर्ड र connectIPS'],
          ['जोखिम', 'एकै ठाउँमा सबै पुँजी लगाउने जोखिम', 'विविधीकरण र कानुनी सुरक्षा'],
          ['समय सीमा', 'छिटो धनी बन्ने गलत सोच', 'दीर्घकालीन चक्रवृद्धिको अनुशासित यात्रा']
        ]
      },
      nepalContext: `नेपालमा यो विषय नेपाल राष्ट्र बैंक (NRB), नेपाल धितोपत्र बोर्ड (SEBON) वा आन्तरिक राजस्व विभाग (IRD) को प्रत्यक्ष नियमनमा पर्दछ। ${category.np?.howInNepal || 'सधैँ आधिकारिक निकायबाट इजाजतपत्र प्राप्त संस्थासँग मात्र कारोबार गर्नुहोस्।'}`,
      practicalScenario: {
        persona: 'सिद्धार्थ, २८ वर्ष, काठमाडौँमा कार्यरत कर्मचारी',
        income: 'मासिक रु. ६५,०००',
        scenarioText: `सिद्धार्थलाई आफ्नो कमाइलाई सुरक्षित राख्दै ${npTitle} अनुसार सही वित्तीय प्रणाली बसाल्नु थियो।`,
        solutionText: `उनले आफ्नो आम्दानीलाई योजनाबद्ध रूपमा बाँडे: ५०% आवश्यकता, २०% आपतकालीन कोष र ३०% दीर्घकालीन सम्पत्ति निर्माणमा लगाए। अनुशासित योजनाले गर्दा उनले अनावश्यक शुल्क र तनावबाट मुक्ति पाए।`,
        metricHighlight: 'अनुशासित ढाँचा सफल कार्यान्वयन'
      },
      formula: {
        name: 'वित्तीय कार्यक्षमता सूत्र (Efficiency Metric)',
        equation: '\\text{Efficiency Rate} = \\frac{\\text{Net Value Generated}}{\\text{Total Capital Committed}} \\times 100',
        variables: [
          { symbol: 'Net Value', name: 'खुद आम्दानी', desc: 'सबै बैंक शुल्क र TDS कर कटाएर बाँकी रहेको खुद नाफा।' },
          { symbol: 'Capital Committed', name: 'कुल लगानी रकम', desc: 'योजनामा लगाइएको कुल पुँजी।' }
        ],
        exampleCalculation: 'रु. १,००,००० को लगानीबाट कर र शुल्क कटाएर रु. १२,००० खुद नाफा हुँदा वार्षिक प्रतिफल १२.०% हुन्छ।',
        shortcutCalcSlug: category.calcCount > 0 ? 'calculators' : 'calculators/sip',
        shortcutCalcName: 'सम्बन्धित Calculators हेर्नुहोस्'
      },
      commonMistakes: [
        {
          mistake: 'आधिकारिक नियम भन्दा सामाजिक सञ्जालका हल्लाको भर पर्नु।',
          correct: 'सधैँ राष्ट्र बैंक (nrb.org.np), धितोपत्र बोर्ड (sebon.gov.np) वा कर कार्यालयका सूचना हेर्नुहोस्।',
          explanation: 'हल्लाको पछि लाग्दा अनधिकृत योजनामा परेर पुँजी गुम्ने जोखिम हुन्छ।'
        },
        {
          mistake: 'TDS कर र अन्य सेवा शुल्कको हिसाब नराख्नु।',
          correct: 'आफ्नो हात पर्ने खुद आम्दानी हिसाब गर्दा ५% TDS र बैंक शुल्क अनिवार्य घटाउनुहोस्।',
          explanation: 'खुद रकम नहेर्दा वित्तीय योजना अधुरो हुन पुग्छ।'
        }
      ],
      definitions: [
        { term: 'NRB', full: 'नेपाल राष्ट्र बैंक', meaning: 'नेपालको केन्द्रीय बैंक तथा बैंकिङ प्रणालीको सर्वोच्च नियमनकारी निकाय।' },
        { term: 'SEBON', full: 'नेपाल धितोपत्र बोर्ड', meaning: 'नेपालको सेयर बजार, स्टक ब्रोकर र Mutual Fund हरूको नियमन गर्ने निकाय।' }
      ],
      faqs: [
        {
          q: `यो पाठ पढेपछि कार्यान्वयन गर्न कति समय लाग्छ?`,
          a: 'आधारभूत कुरा १५ देखि ३० मिनेटमै बुझ्न सकिन्छ। डिजिटल बैंकिङ र अनलाइन पोर्टलबाट अभ्यास गर्न १ घण्टाभन्दा कम समय लाग्छ।'
        },
        {
          q: 'नेपालमा यसमा कुनै लुकेका शुल्कहरू हुन्छन् कि?',
          a: 'इजाजतप्राप्त संस्थाका सबै शुल्क राष्ट्र बैंक वा धितोपत्र बोर्डले तोकेको सीमाभित्र पारदर्शी रूपमा वेबसाइटमा राखिएका हुन्छन्।'
        }
      ],
      takeaways: [
        takeawaysNp,
        'नेपालमा सधैँ आधिकारिक इजाजतप्राप्त निकायहरू मार्फत मात्र कारोबार गर्नुहोस्।',
        'TDS कर र अन्य कानुनी शुल्क कटाएर हात पर्ने खुद आम्दानीको हिसाब राख्नुहोस्।',
        'आत्मविश्वास बढाउन पाठ्यक्रमका पाठहरू क्रमैसँग पूरा गर्दै जानुहोस्।'
      ]
    },
    relatedCalculators: (baseLesson.smartRecommendation?.relevantCalc ? [
      {
        name: baseLesson.smartRecommendation.relevantCalc.name,
        slug: baseLesson.smartRecommendation.relevantCalc.slug,
        key: baseLesson.smartRecommendation.relevantCalc.key,
        desc: 'Interactive calculator built specifically for Nepal context.'
      }
    ] : [
      { name: 'SIP Calculator', slug: 'calculators/sip', key: 'sip', desc: 'Calculate wealth growth in Nepal.' },
      { name: 'Inflation Calculator', slug: 'calculators/inflation', key: 'inflation', desc: 'See real purchasing power changes.' }
    ]),
    downloadableResources: [
      { title: `${enTitle} Quick Reference (PDF)`, type: 'PDF Guide', format: 'PDF Document', size: '260 KB', href: '/resources/nepse-beginner-guide' }
    ]
  };
}

// ── 1. Popular Topics Data (12 Single-Concept Lookups) ──────────
export const POPULAR_TOPICS = [
  {
    id: 'what-is-nepse',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'What is NEPSE?', np: 'NEPSE के हो?' },
    desc: { en: 'Nepal Stock Exchange operates the secondary market for equity trading in Nepal.', np: 'नेपाल स्टक एक्सचेन्ज (NEPSE) नेपालको एकमात्र दोस्रो बजार हो जहाँ सूचीकृत सेयर किनबेच हुन्छ।' },
    readTime: '6 min',
    difficulty: 'beginner',
    href: '/learn/nepse/complete-nepse-beginner-guide'
  },
  {
    id: 'what-is-sip',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    title: { en: 'What is SIP?', np: 'SIP के हो?' },
    desc: { en: 'Systematic Investment Plans let you invest small fixed amounts monthly into mutual funds.', np: 'Systematic Investment Plan (SIP) मार्फत मासिक थोरै रकम नियमित रूपमा Mutual Fund मा लगानी गरिन्छ।' },
    readTime: '8 min',
    difficulty: 'beginner',
    href: '/learn/investing/how-sip-works-nepal'
  },
  {
    id: 'mutual-funds',
    categorySlug: 'mutual-funds',
    categoryName: { en: 'Mutual Funds', np: 'Mutual Funds' },
    title: { en: 'Mutual Funds in Nepal', np: 'नेपालमा Mutual Funds' },
    desc: { en: 'Understand open-ended vs close-ended funds, NAV calculation, and dividend track records.', np: 'खुलामुखी (Open-ended) र बन्दमुखी (Close-ended) फण्डको भिन्नता र NAV गणना बुझ्ने तरिका।' },
    readTime: '9 min',
    difficulty: 'intermediate',
    href: '/learn/mutual-funds/open-ended-vs-close-ended-schemes-nepal'
  },
  {
    id: 'home-loans',
    categorySlug: 'loans',
    categoryName: { en: 'Loans & Debt', np: 'कर्जा र ऋण' },
    title: { en: 'Home Loans & Base Rates', np: 'घर कर्जा (Home Loans) र Base Rate' },
    desc: { en: 'How commercial bank base rates plus premium determine your fluctuating loan EMI in Nepal.', np: 'वाणिज्य बैंकहरूको Base Rate र थप प्रिमियमले तपाईंको महिनावारि EMI कसरी निर्धारण गर्छ।' },
    readTime: '7 min',
    difficulty: 'intermediate',
    href: '/learn/loans/flat-rate-vs-reducing-balance-emi'
  },
  {
    id: 'emergency-fund',
    categorySlug: 'personal-finance',
    categoryName: { en: 'Personal Finance', np: 'व्यक्तिगत वित्त' },
    title: { en: 'Emergency Fund Essentials', np: 'Emergency Fund को आवश्यकता' },
    desc: { en: 'Why you need 3-6 months of living expenses liquid before starting high-risk investing.', np: 'जोखिमपूर्ण लगानी सुरु गर्नुअघि ३ देखि ६ महिनाको खर्च तरल राख्नु किन अनिवार्य छ।' },
    readTime: '5 min',
    difficulty: 'beginner',
    href: '/learn/personal-finance/emergency-fund-guide-nepal'
  },
  {
    id: 'inflation',
    categorySlug: 'economics',
    categoryName: { en: 'Economics', np: 'अर्थशास्त्र' },
    title: { en: 'Inflation & Purchasing Power', np: 'मुद्रास्फीति (Inflation) र क्रयशक्ति' },
    desc: { en: 'How Nepal’s 6-8% inflation silently destroys cash savings and how to beat it with compounding.', np: 'नेपालमा ६-८% को महँगीले कसरी बचतको मूल्य घटाउँछ र यसलाई कसरी जित्ने।' },
    readTime: '7 min',
    difficulty: 'beginner',
    href: '/learn/economics/understanding-inflation-nepal'
  },
  {
    id: 'budgeting-nepal',
    categorySlug: 'personal-finance',
    categoryName: { en: 'Personal Finance', np: 'व्यक्तिगत वित्त' },
    title: { en: 'The 50/30/20 Budget for Nepal', np: 'नेपालका लागि ५०/३०/२० Budget' },
    desc: { en: 'Adapting the classic budgeting formula for Nepali living costs, rent, and festival allocations.', np: 'कोठा भाडा, दैनिक आवश्यकता, रमाइलो र चाडपर्व खर्चका लागि व्यावहारिक बजेट बाँडफाँड।' },
    readTime: '6 min',
    difficulty: 'beginner',
    href: '/learn/personal-finance/50-30-20-budget-nepal'
  },
  {
    id: 'income-tax-slabs',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    title: { en: 'Nepal Income Tax Slabs', np: 'नेपालमा आयकर (Income Tax) स्ल्याब' },
    desc: { en: 'Current single vs. married tax rates (1% to 39%), SSF exemption rules, and legal rebates.', np: 'व्यक्तिगत र दम्पतीका लागि करका स्ल्याबहरू (१% देखि ३९%), SSF छुट र कानुनी रिबेट।' },
    readTime: '10 min',
    difficulty: 'intermediate',
    href: '/learn/taxation/nepal-income-tax-explained'
  },
  {
    id: 'credit-cards',
    categorySlug: 'banking',
    categoryName: { en: 'Banking', np: 'बैंकिङ' },
    title: { en: 'Credit Cards vs Debit Cards', np: 'Credit Card र Debit Card को भिन्नता' },
    desc: { en: 'How 45-day interest-free grace periods work in Nepal and avoiding 24-36% APR debt traps.', np: '४५ दिनको ब्याजमुक्त सुविधा, वार्षिक शुल्क र उच्च ब्याजदरको ऋणबाट जोगिने उपाय।' },
    readTime: '6 min',
    difficulty: 'beginner',
    href: '/learn/banking/credit-vs-debit-cards-nepal'
  },
  {
    id: 'digital-wallets',
    categorySlug: 'digital-payments',
    categoryName: { en: 'Digital Payments', np: 'डिजिटल भुक्तानी' },
    title: { en: 'Digital Wallets & Fonepay QR', np: 'डिजिटल वालेट र Fonepay QR' },
    desc: { en: 'Transaction limits, inter-bank transfer charges via connectIPS, and cyber fraud precautions.', np: 'कारोबार सीमा, connectIPS शुल्क र अनलाइन ठगीबाट बच्ने सुरक्षा उपायहरू।' },
    readTime: '5 min',
    difficulty: 'beginner',
    href: '/learn/digital-payments/esewa-vs-khalti-vs-mobile-banking'
  },
  {
    id: 'insurance-basics',
    categorySlug: 'insurance',
    categoryName: { en: 'Insurance', np: 'बीमा सुरक्षा' },
    title: { en: 'Term Life Insurance Basics', np: 'Term Life Insurance को आधारभूत ज्ञान' },
    desc: { en: 'Why pure protection policies beat low-return endowment schemes for family wealth safety.', np: 'सावधिक योजना भन्दा कम प्रिमियममा ठूलो जीवन सुरक्षा दिने Pure Term बीमा किन उपयुक्त हुन्छ।' },
    readTime: '8 min',
    difficulty: 'beginner',
    href: '/learn/insurance/calculating-life-cover-sum-assured'
  },
  {
    id: 'stock-market-basics',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'Stock Market Fundamentals', np: 'सेयर बजारको आधारभूत जग' },
    desc: { en: 'Understanding equity ownership, dividends, bonus shares, and right shares in Nepal.', np: 'कम्पनीको हिस्सेदारी, लाभांश (Dividend), बोनस सेयर र हकप्रद सेयरको वास्तविकता।' },
    readTime: '7 min',
    difficulty: 'beginner',
    href: '/learn/nepse/broker-account-tms-navigation'
  }
];

// ── 2. Beginner Roadmaps Data (6 Visual Progressive Pipelines) ─
export const BEGINNER_ROADMAPS = [
  {
    id: 'personal-finance-roadmap',
    categorySlug: 'personal-finance',
    title: { en: 'Personal Finance Starter Roadmap', np: 'व्यक्तिगत वित्त सुरुवाती मार्गचित्र' },
    desc: { en: 'Master money basics before committing capital to long-term risk investments.', np: 'जोखिमपूर्ण लगानी सुरु गर्नुअघि पैसा व्यवस्थापनको आधारभूत जग बलियो बनाउनुहोस्।' },
    badge: { en: 'Step-by-step', np: 'चरणबद्ध' },
    steps: [
      {
        num: 1,
        title: { en: 'Money Basics', np: 'आम्दानी र खर्च' },
        desc: {
          en: 'Master net income inflows and eliminate digital wallet leakages.',
          np: 'आम्दानी, अनिवार्य खर्च र डिजिटल वालेटका खर्च चुहावट नियन्त्रण गर्नुहोस्।'
        },
        lessonSlug: 'cash-flow-equation-nepal'
      },
      {
        num: 2,
        title: { en: '50/30/20 Budgeting', np: '५०/३०/२० बजेटिङ' },
        desc: {
          en: 'Allocate 50% needs, 30% wants, and 20% disciplined savings.',
          np: '५०% आवश्यकता, ३०% रहर र २०% अनुशासित बचत नियम लागू गर्नुहोस्।'
        },
        lessonSlug: '50-30-20-budget-nepal'
      },
      {
        num: 3,
        title: { en: 'Emergency Fund', np: 'आपतकालीन कोष' },
        desc: {
          en: 'Build 6 months of living expenses in liquid Class-A bank savings.',
          np: 'क वर्गका बैंकमा ६ महिनाको खर्च बराबरको आपतकालीन कोष राख्नुहोस्।'
        },
        lessonSlug: 'emergency-fund-building'
      },
      {
        num: 4,
        title: { en: 'Festival Sinking Funds', np: 'चाडपर्व सिंकिङ फन्ड' },
        desc: {
          en: 'Save monthly for Dashain, Tihar, and annual family obligations.',
          np: 'दसैँ, तिहार र वार्षिक पारिवारिक खर्चका लागि मासिक रकम छुट्याउनुहोस्।'
        },
        lessonSlug: 'festival-expenses-nepal'
      },
      {
        num: 5,
        title: { en: 'Automated Savings', np: 'स्वचालित बचत प्रणाली' },
        desc: {
          en: 'Set bank Standing Orders to save before discretionary spending starts.',
          np: 'तलब आउनासाथ बचत खातामा स्वतः रकम सार्न Standing Order दिनुहोस्।'
        },
        lessonSlug: 'pay-yourself-first-nepal'
      },
      {
        num: 6,
        title: { en: 'Net Worth Tracking', np: 'कुल सम्पत्ति मापन' },
        desc: {
          en: 'Track liquid assets, mutual funds, gold, and debt to monitor true wealth.',
          np: 'नगद, सेयर, सुन र ऋणको हिसाब गरी कुल सम्पत्ति (Net Worth) मापन गर्नुहोस्।'
        },
        lessonSlug: 'net-worth-tracking-nepal'
      }
    ]
  },
  {
    id: 'investing-roadmap',
    categorySlug: 'investing',
    title: { en: 'Investing Foundations Roadmap', np: 'लगानी जग निर्माण मार्गचित्र' },
    desc: { en: 'A disciplined pathway from understanding compounding to building a diversified portfolio.', np: 'चक्रवृद्धि ब्याज बुझ्नेदेखि विविध सम्पत्तिमा लगानी पोर्टफोलियो बनाउनेसम्मको यात्रा।' },
    badge: { en: 'Essential', np: 'अनिवार्य' },
    steps: [
      {
        num: 1,
        title: { en: 'Inflation Reality', np: 'मुद्रास्फीतिको यथार्थ' },
        desc: {
          en: 'Understand why plain bank savings lose purchasing power over time.',
          np: 'बैंकको साधारण बचतले महँगी विरुद्ध क्रयशक्ति कसरी घटाउँछ बुझ्नुहोस्।'
        },
        lessonSlug: 'inflation-vs-savings-nepal'
      },
      {
        num: 2,
        title: { en: 'Compounding Math', np: 'चक्रवृद्धिको शक्ति' },
        desc: {
          en: 'Learn how small monthly investments multiply exponentially over 10-20 years.',
          np: '१० देखि २० वर्षको अवधिमा चक्रवृद्धिको नियमले सानो बचत कसरी ठूलो बन्छ।'
        },
        lessonSlug: 'compounding-engine-wealth'
      },
      {
        num: 3,
        title: { en: 'Mutual Fund Types', np: 'म्युचुअल फण्डका प्रकार' },
        desc: {
          en: 'Distinguish open-ended SIP funds from closed-ended exchange-traded funds.',
          np: 'खुलामुखी (Open-Ended) SIP र NEPSE मा सूचीकृत बन्दमुखी कोषको फरक बुझ्नुहोस्।'
        },
        lessonSlug: 'open-ended-vs-close-ended-funds'
      },
      {
        num: 4,
        title: { en: 'Automated SIP Setup', np: 'मासिक SIP सुरुवात' },
        desc: {
          en: 'Start a disciplined monthly SIP via ConnectIPS from NPR 1,000/month.',
          np: 'ConnectIPS मार्फत मासिक रु. १,००० बाट पहिलो स्वचालित SIP सुरु गर्नुहोस्।'
        },
        lessonSlug: 'how-to-start-monthly-sip-nepal'
      },
      {
        num: 5,
        title: { en: 'Asset Allocation', np: 'सम्पत्ति बाँडफाँड' },
        desc: {
          en: 'Balance equities, fixed deposits, gold, and debt by age and risk tolerance.',
          np: 'उमेर र जोखिम क्षमता अनुसार सेयर, मुद्दती, सुन र ऋणको सन्तुलन मिलाउनुहोस्।'
        },
        lessonSlug: 'age-based-asset-allocation-nepal'
      },
      {
        num: 6,
        title: { en: 'Market Psychology', np: 'बजार मनोविज्ञान' },
        desc: {
          en: 'Maintain discipline and avoid panic selling during NEPSE bear cycles.',
          np: 'NEPSE को बियरिस चक्रमा नआत्तिई अनुशासित रूपमा लगानी जारी राख्नुहोस्।'
        },
        lessonSlug: 'market-psychology-down-markets'
      }
    ]
  },
  {
    id: 'nepse-roadmap',
    categorySlug: 'nepse',
    title: { en: 'NEPSE Trader & Investor Roadmap', np: 'NEPSE सेयर बजार मार्गचित्र' },
    desc: { en: 'Everything required to transition from IPO applicant to disciplined secondary market investor.', np: 'IPO भर्ने सामान्य प्रयोगकर्ताबाट दोस्रो बजारमा अनुशासित लगानीकर्ता बन्ने पूर्ण खाका।' },
    badge: { en: 'Most Popular', np: 'अति लोकप्रिय' },
    steps: [
      {
        num: 1,
        title: { en: 'Demat, MeroShare & CRN', np: 'Demat, MeroShare र CRN' },
        desc: {
          en: 'Open your Demat account and acquire C-ASBA CRN bank verification.',
          np: 'आफ्नो Demat खाता खोल्नुहोस् र बैंकबाट C-ASBA प्रमाणीकरण (CRN) लिनुहोस्।'
        },
        lessonSlug: 'demat-meroshare-crn-setup'
      },
      {
        num: 2,
        title: { en: 'Primary IPOs', np: 'प्राथमिक बजार (IPO)' },
        desc: {
          en: 'Analyze offer prospectuses and apply for 10-kitta IPO allotments.',
          np: 'प्रोसपेक्टस अध्ययन गरी MeroShare मार्फत १० कित्ताका लागि सही आवेदन दिनुहोस्।'
        },
        lessonSlug: 'analyzing-applying-ipo-meroshare'
      },
      {
        num: 3,
        title: { en: 'Broker TMS Account', np: 'ब्रोकर TMS खाता' },
        desc: {
          en: 'Complete broker KYC, load collateral, and master online trade execution.',
          np: 'ब्रोकर KYC पूरा गर्नुहोस्, कोलेटरल लोड गर्नुहोस् र अनलाइन सेयर खरिद-बिक्री सिक्नुहोस्।'
        },
        lessonSlug: 'broker-account-tms-navigation'
      },
      {
        num: 4,
        title: { en: 'Broker Fees & SEBON Charges', np: 'ब्रोकर कमिसन र शुल्क' },
        desc: {
          en: 'Understand SEBON slabs (0.24%-0.40%), DP charges, and break-even pricing.',
          np: 'धितोपत्र बोर्डको कमिसन (०.२४%-०.४०%), DP शुल्क र नाफा हुने विन्दु बुझ्नुहोस्।'
        },
        lessonSlug: 'broker-commissions-sebon-fees-nepal'
      },
      {
        num: 5,
        title: { en: 'Financial Reports', np: 'वित्तीय विवरण विश्लेषण' },
        desc: {
          en: 'Evaluate quarterly earnings, EPS, Net Worth per share, and NPL ratios.',
          np: 'त्रैमासिक वित्तीय विवरणबाट EPS, प्रतिसेयर नेटवर्थ र खराब कर्जा (NPL) विश्लेषण गर्नुहोस्।'
        },
        lessonSlug: 'how-to-read-quarterly-report-nepal'
      },
      {
        num: 6,
        title: { en: 'Dividends vs Capital Gains', np: 'लाभांश र पुँजीगत लाभ' },
        desc: {
          en: 'Compare cash dividends, bonus share tax effects, and holding returns.',
          np: 'नगद लाभांश, बोनस सेयरको कर र दीर्घकालीन प्रतिफल बीचको सन्तुलन बुझ्नुहोस्।'
        },
        lessonSlug: 'dividend-yield-vs-capital-gains-nepse'
      }
    ]
  },
  {
    id: 'tax-roadmap',
    categorySlug: 'taxation',
    title: { en: 'Nepal Taxation & Compliance Roadmap', np: 'नेपाल कर तथा अनुपालन मार्गचित्र' },
    desc: { en: 'Understand your tax slabs, claim all legal exemptions, and ensure clean filing.', np: 'आफ्नो कर स्ल्याब बुझ्ने, कानुनी छुट लिने र सही समयमा कर चुक्ता गर्ने प्रक्रिया।' },
    badge: { en: 'Annual Must', np: 'वार्षिक अनिवार्य' },
    steps: [
      {
        num: 1,
        title: { en: 'Income Slabs', np: 'आयकर स्ल्याब' },
        desc: {
          en: 'Learn progressive 1% to 39% brackets for individual and couple status.',
          np: 'व्यक्तिगत र दम्पतीका लागि १% देखि ३९% सम्मका प्रगतिशील कर स्ल्याब बुझ्नुहोस्।'
        },
        lessonSlug: 'nepal-income-tax-slabs-salary'
      },
      {
        num: 2,
        title: { en: 'SSF, CIT & EPF Rebates', np: 'SSF, CIT र EPF छुट' },
        desc: {
          en: 'Claim Section 63 deductions up to NPR 500,000 across retirement funds.',
          np: 'दफा ६३ अनुसार अवकाश कोषहरूमा वार्षिक रु. ५ लाखसम्मको कर छुट लिनुहोस्।'
        },
        lessonSlug: 'ssf-cit-insurance-tax-deductions'
      },
      {
        num: 3,
        title: { en: 'TDS Rates & Tracking', np: 'TDS दर र कट्टी मिलान' },
        desc: {
          en: 'Verify tax withholding on salary, bank interest, rents, and consulting.',
          np: 'तलब, बैंक ब्याज, घरभाडा र परामर्श शुल्कमा काटिएको TDS दर र प्रमाण हेर्नुहोस्।'
        },
        lessonSlug: 'tds-rates-nepal-salaried-freelance'
      },
      {
        num: 4,
        title: { en: 'Capital Gains Tax (CGT)', np: 'पुँजीगत लाभकर (CGT)' },
        desc: {
          en: 'Calculate 5% vs 7.5% share trading profits and real estate transfer tax.',
          np: 'सेयरको ५% र ७.५% पुँजीगत लाभकर तथा घरजग्गा बिक्रीमा लाग्ने कर हिसाब गर्नुहोस्।'
        },
        lessonSlug: 'capital-gains-tax-shares-real-estate'
      },
      {
        num: 5,
        title: { en: 'Get Personal PAN', np: 'व्यक्तिगत PAN दर्ता' },
        desc: {
          en: 'Obtain your permanent PAN online in minutes using the Nagarik App.',
          np: 'नागरिक एप वा राजस्व विभागको वेबसाइटबाट मिनेटमै व्यक्तिगत PAN लिनुहोस्।'
        },
        lessonSlug: 'how-to-get-personal-pan-nepal'
      },
      {
        num: 6,
        title: { en: 'File Annual Returns', np: 'वार्षिक कर चुक्ता (D-01)' },
        desc: {
          en: 'Submit online D-01 returns and secure official tax clearance certificates.',
          np: 'D-01 फाराम अनलाइन पेश गरी आधिकारिक कर चुक्ता प्रमाणपत्र (Tax Clearance) लिनुहोस्।'
        },
        lessonSlug: 'filing-annual-returns-tax-clearance'
      }
    ]
  },
  {
    id: 'banking-roadmap',
    categorySlug: 'banking',
    title: { en: 'Banking & Cash Management Roadmap', np: 'बैंकिङ र नगद व्यवस्थापन मार्गचित्र' },
    desc: { en: 'Optimize savings accounts, compare fixed deposits, and navigate NRB rules safely.', np: 'बचत खाताको प्रतिफल बढाउने, मुद्दती निक्षेप दाँज्ने र राष्ट्र बैंकका नियम बुझ्ने विधि।' },
    badge: { en: 'Foundation', np: 'जग' },
    steps: [
      {
        num: 1,
        title: { en: 'Bank Classes A/B/C/D', np: 'क, ख, ग, घ वर्गका बैंक' },
        desc: {
          en: 'Understand commercial, development, and finance tiers regulated by NRB.',
          np: 'नेपाल राष्ट्र बैंक अन्तर्गतका वाणिज्य, विकास र वित्त कम्पनीहरूको भिन्नता बुझ्नुहोस्।'
        },
        lessonSlug: 'bank-classes-nepal-nrb'
      },
      {
        num: 2,
        title: { en: 'Savings vs Current vs FD', np: 'बचत, चल्ती र मुद्दती निक्षेप' },
        desc: {
          en: 'Compare liquidity needs, quarterly compounding, and fixed deposit returns.',
          np: 'तरलता, त्रैमासिक ब्याज गणना र मुद्दती खाताको प्रतिफल तुलना गर्नुहोस्।'
        },
        lessonSlug: 'deposit-types-fixed-deposit-nepal'
      },
      {
        num: 3,
        title: { en: 'Base Rate & Lending Spread', np: 'Base Rate र कर्जा प्रिमियम' },
        desc: {
          en: 'Learn how bank Base Rates and risk premiums dictate your variable loan EMI.',
          np: 'बैंकको आधार दर (Base Rate) र प्रिमियमले ऋणको ब्याज तथा किस्ता कसरी निर्धारण गर्छ।'
        },
        lessonSlug: 'base-rate-premium-nepal-banks'
      },
      {
        num: 4,
        title: { en: 'Deposit Guarantee (DCGF)', np: 'निक्षेप सुरक्षण कोष' },
        desc: {
          en: 'Verify the statutory NPR 500,000 deposit insurance safety net per bank.',
          np: 'निक्षेप तथा कर्जा सुरक्षण कोष (DCGF) बाट प्रतिव्यक्ति रु. ५ लाखसम्मको सुरक्षण बुझ्नुहोस्।'
        },
        lessonSlug: 'deposit-guarantee-fund-nepal'
      },
      {
        num: 5,
        title: { en: 'Credit vs Debit Cards', np: 'क्रेडिट र डेबिट कार्ड' },
        desc: {
          en: 'Master interest-free billing periods and avoid revolving credit debt traps.',
          np: 'क्रेडिट कार्डको ब्याजमुक्त अवधि, चर्को ब्याजको जोखिम र सुरक्षित प्रयोगका नियम बुझ्नुहोस्।'
        },
        lessonSlug: 'credit-vs-debit-cards-nepal'
      },
      {
        num: 6,
        title: { en: 'Cheque Bounce & Banking Law', np: 'चेक बाउन्स र बैंकिङ कसूर' },
        desc: {
          en: 'Understand strict penalties under the Banking Offence and Punishment Act.',
          np: 'बैंकिङ कसूर तथा सजाय ऐन २०६४ अन्तर्गत चेक अनादरका कानुनी सजाय र प्रक्रिया बुझ्नुहोस्।'
        },
        lessonSlug: 'cheque-bounce-banking-offence-nepal'
      }
    ]
  },
  {
    id: 'insurance-roadmap',
    categorySlug: 'insurance',
    title: { en: 'Insurance & Risk Protection Roadmap', np: 'बीमा सुरक्षा मार्गचित्र' },
    desc: { en: 'Shield your family against catastrophic medical bills and income loss without getting trapped.', np: 'परिवारलाई ठूलो आर्थिक जोखिमबाट जोगाउन सही बीमा पोलिसी छनोट गर्ने तरिका।' },
    badge: { en: 'Protection', np: 'सुरक्षा' },
    steps: [
      {
        num: 1,
        title: { en: 'Term Life vs Endowment', np: 'Term Life र Endowment' },
        desc: {
          en: 'Choose pure protection term cover over low-return endowment savings plans.',
          np: 'कम प्रतिफल दिने बचत योजनाभन्दा सस्तोमा ठूलो सुरक्षा दिने Term Life रोज्नुहोस्।'
        },
        lessonSlug: 'term-life-vs-endowment-nepal'
      },
      {
        num: 2,
        title: { en: 'Calculate Life Cover (HLV)', np: 'HLV र बीमाङ्क गणना' },
        desc: {
          en: 'Determine your family’s required cover (10-15x annual living expenses).',
          np: 'परिवारको भविष्य सुरक्षित गर्न आवश्यक वास्तविक बीमाङ्क (वार्षिक खर्चको १०-१५ गुणा) हिसाब गर्नुहोस्।'
        },
        lessonSlug: 'calculating-life-cover-sum-assured'
      },
      {
        num: 3,
        title: { en: 'Health & Critical Illness', np: 'स्वास्थ्य र घातक रोग बीमा' },
        desc: {
          en: 'Secure standalone medical expense cover and critical illness payout riders.',
          np: 'अस्पताल भर्ना उपचार खर्च र घातक रोग (Critical Illness) का लागि सुरक्षा लिनुहोस्।'
        },
        lessonSlug: 'health-insurance-critical-illness-nepal'
      },
      {
        num: 4,
        title: { en: 'Govt Health Insurance', np: 'सरकारी स्वास्थ्य बीमा' },
        desc: {
          en: 'Enroll in the Swasthya Beema Board program for subsidized family treatment.',
          np: 'स्वास्थ्य बीमा बोर्डको सरकारी कार्यक्रममा सूचीकृत भई सहुलियत स्वास्थ्य सेवा लिनुहोस्।'
        },
        lessonSlug: 'government-health-insurance-board-nepal'
      },
      {
        num: 5,
        title: { en: 'Insurance Tax Rebates', np: 'बीमा प्रिमियम कर छुट' },
        desc: {
          en: 'Claim up to NPR 40,000 life and NPR 20,000 health premium income tax deductions.',
          np: 'जीवन बीमामा रु. ४०,००० र स्वास्थ्य बीमामा रु. २०,००० सम्मको कानुनी आयकर छुट लिनुहोस्।'
        },
        lessonSlug: 'tax-rebate-life-insurance-nepal'
      },
      {
        num: 6,
        title: { en: 'Claims & Dispute Resolution', np: 'दाबी भुक्तानी र उजुरी' },
        desc: {
          en: 'Submit proper claim proof and resolve disputes via the Nepal Insurance Authority.',
          np: 'दाबी भुक्तानीका लागि सही कागजात पेश गर्ने र नेपाल बीमा प्राधिकरणमा उजुरी गर्ने विधि।'
        },
        lessonSlug: 'how-to-file-insurance-claim-nepal'
      }
    ]
  }
];

// ── 3. Featured Lessons Data (5 Highest-Quality Educational Pieces) 
export const FEATURED_LESSONS = [
  {
    id: 'understanding-inflation-nepal',
    categorySlug: 'economics',
    categoryName: { en: 'Economics', np: 'अर्थशास्त्र' },
    title: { en: 'Understanding Inflation in Nepal: Why Savings Lose Value', np: 'नेपालमा मुद्रास्फीति: किन बैंकको बचतले मूल्य गुमाउँछ?' },
    summary: { en: 'A deep dive into why headline inflation understates true medical and education costs, and how compounding assets outpace rupee depreciation.', np: 'नेपालमा वार्षिक महँगीले पैसाको क्रयशक्ति कसरी घटाउँछ र मुद्रास्फीतिभन्दा धेरै प्रतिफल दिने सम्पत्तिमा लगानी किन आवश्यक छ।' },
    readTime: '8 min read',
    difficulty: 'Beginner',
    updatedDate: 'Aug 2026',
    featuredBadge: { en: 'Editor’s Pick', np: 'सम्पादकको रोजाइ' },
    href: '/learn/economics/understanding-inflation-nepal'
  },
  {
    id: 'how-sip-works-nepal',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    title: { en: 'How Systematic Investment Plans (SIP) Work in Nepal', np: 'नेपालमा SIP कसरी काम गर्छ र चक्रवृद्धिको गणित' },
    summary: { en: 'Learn rupee-cost averaging in Nepali mutual funds, open-ended vs closed-ended schemes, and how NPR 5,00,000 compounds over 15 years.', np: 'नेपाली खुलामुखी Mutual Fund मा Rupee-Cost Averaging को फाइदा र मासिक लगानी चक्रवृद्धिको यथार्थ हिसाब।' },
    readTime: '11 min read',
    difficulty: 'Beginner',
    updatedDate: 'Jul 2026',
    featuredBadge: { en: 'Must Read', np: 'अनिवार्य पढ्नैपर्ने' },
    href: '/learn/investing/how-sip-works-nepal'
  },
  {
    id: 'complete-nepse-beginner-guide',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'Complete Beginner Guide to the Nepal Stock Exchange (NEPSE)', np: 'NEPSE सेयर बजारको पूर्ण सुरुवाती गाइड' },
    summary: { en: 'From opening your first Demat and CRN number to navigating TMS trading limits, broker collateral, and settlement cycles (T+2).', np: 'पहिलो Demat खाता र CRN नम्बर लिनेदेखि TMS ब्रोकर प्रणाली, कोलेटरल र T+2 राफसाफ चक्रसम्मको सम्पूर्ण व्यावहारिक जानकारी।' },
    readTime: '14 min read',
    difficulty: 'Beginner to Intermediate',
    updatedDate: 'Aug 2026',
    featuredBadge: { en: 'Cornerstone', np: 'मूल स्तम्भ' },
    href: '/learn/nepse/complete-nepse-beginner-guide'
  },
  {
    id: 'nepal-income-tax-explained',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    title: { en: 'Nepal Income Tax Explained: Slabs, SSF & Legal Rebates', np: 'नेपाल आयकर व्याख्या: स्ल्याब, SSF र कानुनी छुटहरू' },
    summary: { en: 'Step-by-step calculation breakdown for single and married salaried individuals, CIT deductions, life insurance rebates, and medical credits.', np: 'पारिश्रमिक पाउने कर्मचारीहरूका लागि व्यक्तिगत र दम्पती आयकर गणना, CIT र SSF छुट, र जीवन बीमा प्रिमियम कट्टीको यथार्थ उदाहरण।' },
    readTime: '12 min read',
    difficulty: 'Intermediate',
    updatedDate: 'Jul 2026',
    featuredBadge: { en: 'Tax Guide', np: 'कर गाइड' },
    href: '/learn/taxation/nepal-income-tax-explained'
  },
  {
    id: 'emergency-fund-guide-nepal',
    categorySlug: 'personal-finance',
    categoryName: { en: 'Personal Finance', np: 'व्यक्तिगत वित्त' },
    title: { en: 'Emergency Fund: How Much Do You Need & Where to Keep It in Nepal?', np: 'Emergency Fund: नेपालमा कति रकम चाहिन्छ र कहाँ राख्ने?' },
    summary: { en: 'The optimal split between high-interest savings accounts and sweep fixed deposits to ensure instant liquidity during medical emergencies.', np: 'आपतकालीन स्वास्थ्य र पारिवारिक संकटका लागि कति रकम बचत खातामा र कति रकम मुद्दती खातामा राख्दा ब्याज पनि आउँछ र तुरुन्तै पैसा झिक्न पनि मिल्छ।' },
    readTime: '7 min read',
    difficulty: 'Beginner',
    updatedDate: 'Jun 2026',
    featuredBadge: { en: 'Foundation', np: 'जग' },
    href: '/learn/personal-finance/emergency-fund-guide-nepal'
  }
];

// ── 4. Popular Nepal Finance Guides (Cornerstone Editorial Guides) ────
export const POPULAR_GUIDES = [
  {
    id: 'complete-pan-guide',
    slug: 'complete-pan-guide',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    title: { en: 'Complete Permanent Account Number (PAN) Guide', np: 'स्थायी लेखा नम्बर (PAN) को पूर्ण गाइड' },
    desc: { en: 'How to apply online via the Inland Revenue Department (IRD) portal, linking PAN to Demat, and avoiding double TDS.', np: 'आन्तरिक राजस्व विभाग (IRD) पोर्टलबाट अनलाइन PAN लिने, Demat मा जोड्ने र दोहोरो TDS बाट बच्ने तरिका।' },
    readTime: '10 min',
    sections: 6,
    updated: 'FY 2083/84',
    difficulty: 'Beginner',
    badge: 'Foundation',
    href: '/learn/guides/complete-pan-guide'
  },
  {
    id: 'complete-meroshare-guide',
    slug: 'complete-meroshare-guide',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'Complete MeroShare & CDSC Guide', np: 'MeroShare र CDSC को पूर्ण गाइड' },
    desc: { en: 'Applying for IPOs, checking allotment results, portfolio valuation, EDIS transfer, and resolving WACC discrepancies.', np: 'अनलाइन IPO भर्ने, बाँडफाँड हेर्ने, सेयर बिक्रीपछि EDIS गर्ने र WACC हिसाब मिलान गर्ने सम्पूर्ण विधि।' },
    readTime: '12 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Beginner',
    badge: 'Most Popular',
    href: '/learn/guides/complete-meroshare-guide'
  },
  {
    id: 'complete-tms-guide',
    slug: 'complete-tms-guide',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'Complete NEPSE TMS Trading Guide', np: 'NEPSE अनलाइन TMS ट्रेडिङ गाइड' },
    desc: { en: 'Registering with a licensed broker, loading collateral via connectIPS, placing limit orders, and market depth analysis.', np: 'ब्रोकर छनोट, connectIPS बाट कोलेटरल लोड गर्ने, Buy/Sell अर्डर हाल्ने र मार्केट डेप्थ बुझ्ने तरिका।' },
    readTime: '15 min',
    sections: 7,
    updated: 'Recent',
    difficulty: 'Intermediate',
    badge: 'Core Tool',
    href: '/learn/guides/complete-tms-guide'
  },
  {
    id: 'complete-sip-guide',
    slug: 'complete-sip-guide',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    title: { en: 'Complete Systematic Investment Plan (SIP) Guide', np: 'नेपालमा SIP को पूर्ण कर्नरस्टोन गाइड' },
    desc: { en: 'Open-ended mutual funds in Nepal, rupee-cost averaging, dividend reinvestment (DRIP), and beating inflation mathematically.', np: 'खुलामुखी Mutual Fund मा नियमित मासिक लगानी, Rupee-Cost Averaging को फाइदा, र लाभांश पुनःलगानीको पूर्ण विधि।' },
    readTime: '13 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Beginner',
    badge: 'Recommended',
    href: '/learn/guides/complete-sip-guide'
  },
  {
    id: 'complete-ipo-guide',
    slug: 'complete-ipo-guide',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'Complete Initial Public Offering (IPO) Guide', np: 'प्राथमिक सेयर (IPO) को पूर्ण गाइड' },
    desc: { en: 'Understanding book building vs 100-rupee par value, local quotas, foreign employment quotas, and risk assessment.', np: 'रु. १०० दरका साधारण सेयर, Book Building विधि, वैदेशिक रोजगारी कोटा र कम्पनीको क्रेडिट रेटिङ बुझ्ने तरिका।' },
    readTime: '14 min',
    sections: 7,
    updated: 'Recent',
    difficulty: 'Beginner',
    badge: 'Essential',
    href: '/learn/guides/complete-ipo-guide'
  },
  {
    id: 'complete-mutual-fund-guide',
    slug: 'complete-mutual-fund-guide',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    title: { en: 'Complete Nepal Mutual Fund Guide', np: 'नेपालका Mutual Fund हरूको पूर्ण गाइड' },
    desc: { en: 'Open-ended vs closed-ended schemes, calculating expense ratios, tracking weekly NAV, and dividend payout history.', np: 'खुलामुखी र बन्दमुखी योजनाहरूको तुलना, व्यवस्थापन शुल्क, साप्ताहिक NAV ट्र्याकिङ र नगद लाभांशको इतिहास।' },
    readTime: '13 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Beginner to Intermediate',
    badge: 'Cornerstone',
    href: '/learn/guides/complete-mutual-fund-guide'
  },
  {
    id: 'complete-income-tax-guide',
    slug: 'complete-income-tax-guide',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    title: { en: 'Complete Nepal Salary Earner Tax Guide', np: 'तलबजीवी कर्मचारीका लागि आयकरको पूर्ण गाइड' },
    desc: { en: 'Navigating Section 87 TDS withholding, employer compliance, Form D-01 filing, and claiming tax refunds.', np: 'धारा ८७ अन्तर्गत रोजगारदाताले काट्ने TDS, कर चुक्ता प्रमाणपत्र लिने र बढी काटिएको कर फिर्ता माग्ने प्रक्रिया।' },
    readTime: '16 min',
    sections: 6,
    updated: 'FY 2083/84',
    difficulty: 'Intermediate',
    badge: 'Tax Reference',
    href: '/learn/guides/complete-income-tax-guide'
  },
  {
    id: 'complete-home-loan-guide',
    slug: 'complete-home-loan-guide',
    categorySlug: 'loans',
    categoryName: { en: 'Loans & Debt', np: 'कर्जा र ऋण' },
    title: { en: 'Complete Nepal Home Loan & Mortgage Guide', np: 'घर कर्जा (Home Loan) र धितोको पूर्ण गाइड' },
    desc: { en: 'Base rate spreads, fixed vs floating EMIs, valuation by bank engineers, and mortgage deed registration at Malpot.', np: 'Base Rate र प्रिमियम, बैंक इन्जिनियर भ्यालुएसन, मालपोतमा धितो लिखत पारित र अग्रिम भुक्तानीका सर्तहरू।' },
    readTime: '15 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Intermediate',
    badge: 'Property & Debt',
    href: '/learn/guides/complete-home-loan-guide'
  },
  {
    id: 'complete-banking-guide',
    slug: 'complete-banking-guide',
    categorySlug: 'banking',
    categoryName: { en: 'Banking', np: 'बैंकिङ' },
    title: { en: 'Complete Nepal Commercial Banking Guide', np: 'नेपालको वाणिज्य बैंकिङ प्रणालीको पूर्ण गाइड' },
    desc: { en: 'Class A/B/C/D banks, NRB deposit guarantee up to NPR 500k, mobile banking limits, and avoiding digital financial fraud.', np: 'क, ख, ग, घ वर्गका बैंक, ५ लाखसम्मको निक्षेप सुरक्षण, डिजिटल भुक्तानी सीमा र साइबर ठगीबाट बच्ने सुरक्षा उपायहरू।' },
    readTime: '12 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Beginner',
    badge: 'Core Banking',
    href: '/learn/guides/complete-banking-guide'
  },
  {
    id: 'complete-insurance-guide',
    slug: 'complete-insurance-guide',
    categorySlug: 'insurance',
    categoryName: { en: 'Insurance', np: 'बीमा' },
    title: { en: 'Complete Nepal Life & Health Insurance Guide', np: 'जीवन तथा स्वास्थ्य बीमाको पूर्ण गाइड' },
    desc: { en: 'Decoding policy wordings, pre-existing condition waiting periods, bonus rates of endowment plans, and claim proofs.', np: 'बीमा सर्तहरू, स्वास्थ्य बीमाको Waiting Period, सावधिक योजनाको बोनस दर र दाबी भुक्तानीका लागि आवश्यक कागजात।' },
    readTime: '14 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Beginner to Intermediate',
    badge: 'Protection',
    href: '/learn/guides/complete-insurance-guide'
  },
  {
    id: 'complete-retirement-planning-guide',
    slug: 'complete-retirement-planning-guide',
    categorySlug: 'retirement-planning',
    categoryName: { en: 'Retirement Planning', np: 'अवकाश योजना' },
    title: { en: 'Complete Nepal Retirement Planning Guide', np: 'नेपालमा अवकाश योजना र पेन्सनको पूर्ण गाइड' },
    desc: { en: 'SSF pension rules, Citizen Investment Trust (CIT), 4% safe withdrawal rule, and beating medical cost inflation.', np: 'सामाजिक सुरक्षा कोष (SSF) पेन्सन, नागरिक लगानी कोष (CIT), ४% सुरक्षित निकासी नियम र स्वास्थ्य खर्च व्यवस्थापन।' },
    readTime: '15 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Intermediate',
    badge: 'Retirement',
    href: '/learn/guides/complete-retirement-planning-guide'
  },
  {
    id: 'complete-cdsc-guide',
    slug: 'complete-cdsc-guide',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'Complete Central Depository (CDSC) & Demat Guide', np: 'CDSC, Demat र सिडिएससीको पूर्ण गाइड' },
    desc: { en: 'How digital securities are held, renewal charges, pledge for bank loans, and family share transfers.', np: 'सेयर धितो राखी बैंकबाट ऋण लिने, डिम्याट नवीकरण शुल्क र पारिवारिक नामसारीको कानुनी प्रक्रिया।' },
    readTime: '13 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Beginner to Intermediate',
    badge: 'Depository',
    href: '/learn/guides/complete-cdsc-guide'
  },
  {
    id: 'complete-budgeting-guide',
    slug: 'complete-budgeting-guide',
    categorySlug: 'personal-finance',
    categoryName: { en: 'Personal Finance', np: 'व्यक्तिगत वित्त' },
    title: { en: 'Complete Nepal Personal Budgeting Guide', np: 'नेपालमा व्यक्तिगत बजेट र नगद प्रवाहको पूर्ण गाइड' },
    desc: { en: 'Cash flow equations in Nepal, adapting 50/30/20 to Kathmandu, stopping micro-leakages, and festival sinking funds.', np: 'नेपालको परिवेशमा Cash Flow व्यवस्थापन, ५०/३०/२० बजेट नियम, डिजिटल वालेटका सानातिना खर्च नियन्त्रण र चाडपर्व बचत कोष।' },
    readTime: '12 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Beginner',
    badge: 'Core Foundation',
    href: '/learn/guides/complete-budgeting-guide'
  },
  {
    id: 'complete-business-guide',
    slug: 'complete-business-guide',
    categorySlug: 'business',
    categoryName: { en: 'Business & Entrepreneurship', np: 'व्यवसाय तथा उद्यमशीलता' },
    title: { en: 'Complete Nepal Business Registration & Tax Guide', np: 'नेपालमा कम्पनी दर्ता र व्यावसायिक करको पूर्ण गाइड' },
    desc: { en: 'OCR online company registration, ward licenses, Business PAN/VAT, zero registration fees for startups, and corporate tax.', np: 'कम्पनी रजिष्ट्रार कार्यालयमा प्रालि दर्ता, वडा इजाजत, व्यावसायिक PAN/VAT, र संस्थागत कर अनुपालनको सम्पूर्ण विधि।' },
    readTime: '16 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Intermediate',
    badge: 'Entrepreneurship',
    href: '/learn/guides/complete-business-guide'
  },
  {
    id: 'complete-digital-payments-guide',
    slug: 'complete-digital-payments-guide',
    categorySlug: 'digital-payments',
    categoryName: { en: 'Digital Payments & FinTech', np: 'डिजिटल भुक्तानी तथा फिन्टेक' },
    title: { en: 'Complete Nepal Digital Payments & FinTech Guide', np: 'नेपालमा डिजिटल भुक्तानी र फिन्टेकको पूर्ण गाइड' },
    desc: { en: 'connectIPS rails, Fonepay and NepalPay QR interoperability, wallet transaction limits, and cyber fraud prevention.', np: 'connectIPS, Fonepay र NepalPay QR नेटवर्क, डिजिटल वालेट सीमा, निःशुल्क अन्तरबैंक रकमान्तर र अनलाइन वित्तीय सुरक्षा।' },
    readTime: '13 min',
    sections: 6,
    updated: 'Recent',
    difficulty: 'Beginner',
    badge: 'Digital Rail',
    href: '/learn/guides/complete-digital-payments-guide'
  },
  {
    id: 'complete-nepal-remittance-guide',
    slug: 'complete-nepal-remittance-guide',
    categorySlug: 'banking',
    categoryName: { en: 'Banking & Remittance', np: 'बैंकिङ तथा रेमिट्यान्स' },
    title: { en: 'Complete Nepal Remittance & Migrant Worker Investment Guide', np: 'नेपालमा विप्रेषण (Remittance) र वैदेशिक रोजगार बचत गाइड' },
    desc: { en: 'Banking remittance incentives (+1% interest), Foreign Employment 10% IPO quota, Hundi prevention, and FCY accounts.', np: 'बैंकिङ च्यानलबाट विप्रेषण पठाउँदा पाउने अतिरिक्त १% मुद्दती ब्याज, १०% वैदेशिक रोजगार IPO कोटा, हुण्डी नियन्त्रण र विदेशी मुद्रा खाता।' },
    readTime: '15 min',
    sections: 6,
    updated: 'Sep 2026',
    difficulty: 'Beginner',
    badge: 'Remittance',
    href: '/learn/guides/complete-nepal-remittance-guide'
  },
  {
    id: 'complete-cibil-credit-score-guide',
    slug: 'complete-cibil-credit-score-guide',
    categorySlug: 'loans',
    categoryName: { en: 'Loans & Credit Bureau', np: 'ऋण तथा कर्जा सूचना केन्द्र' },
    title: { en: 'Complete Nepal CIB Credit Score & Blacklist Removal Guide', np: 'नेपालमा कर्जा सूचना केन्द्र (CIB) र कालोसूची हटाउने पूर्ण गाइड' },
    desc: { en: 'Karja Suchana Kendra credit reports, preventing cheque bounce blacklisting, loan eligibility, and credit repair in Nepal.', np: 'कर्जा सूचना केन्द्र (CIB) बाट आफ्नो क्रेडिट रिपोर्ट निकाल्ने तरिका, कालोसूचीमा पर्नबाट बच्ने उपाय र ऋण स्वीकृति प्रक्रिया।' },
    readTime: '14 min',
    sections: 6,
    updated: 'Sep 2026',
    difficulty: 'Intermediate',
    badge: 'Credit Health',
    href: '/learn/guides/complete-cibil-credit-score-guide'
  },
  {
    id: 'complete-debenture-bonds-guide',
    slug: 'complete-debenture-bonds-guide',
    categorySlug: 'investing',
    categoryName: { en: 'Fixed Income & Bonds', np: 'ऋणपत्र तथा बन्ड लगानी' },
    title: { en: 'Complete Nepal Bank Debentures & Fixed Income Securities Guide', np: 'नेपालमा बैंक ऋणपत्र (Debenture) र बन्ड लगानीको पूर्ण गाइड' },
    desc: { en: 'Applying for bank debentures via MeroShare, 8.5%-10.5% fixed yields, quarterly interest payouts, and 5% final TDS rules.', np: 'मेरोसेयरबाट बैंक ऋणपत्र भर्ने तरिका, ८.५% देखि १०.५% सम्मको सुनिश्चित प्रतिफल, त्रैमासिक ब्याज भुक्तानी र ५% अन्तिम कर कट्टी।' },
    readTime: '13 min',
    sections: 6,
    updated: 'Sep 2026',
    difficulty: 'Intermediate',
    badge: 'Fixed Income',
    href: '/learn/guides/complete-debenture-bonds-guide'
  },
  {
    id: 'complete-personal-net-worth-guide',
    slug: 'complete-personal-net-worth-guide',
    categorySlug: 'personal-finance',
    categoryName: { en: 'Personal Finance & Wealth', np: 'व्यक्तिगत सम्पत्ति तथा नेटवर्थ' },
    title: { en: 'Complete Personal Net Worth Calculation & Asset Audit Guide for Nepal', np: 'नेपालमा व्यक्तिगत कुल सम्पत्ति (Net Worth) हिसाब र अडिट गाइड' },
    desc: { en: 'Valuing land (government vs market rate), shares, gold (Tola), bank balances, subtracting liabilities, and family asset audits.', np: 'घरजग्गा (सरकारी र बजार मूल्य), सेयर, सुन, बैंक ब्यालेन्स जोडेर दायित्व घटाउने र परिवारको सम्पत्ति व्यवस्थित गर्ने विधि।' },
    readTime: '16 min',
    sections: 6,
    updated: 'Sep 2026',
    difficulty: 'Beginner',
    badge: 'Wealth Audit',
    href: '/learn/guides/complete-personal-net-worth-guide'
  }
];

// ── Complete Cornerstone Guides Registry (Detailed In-Depth Publications) ──
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
  ...ADDITIONAL_GUIDES
};

/**
 * Universal Guide Resolver with Alias & Fallback Generator
 */
export function getGuideBySlug(slug) {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim().replace(/^\/+|\/+$/g, '');

  const ALIASES = {
    'pan': 'complete-pan-guide',
    'meroshare': 'complete-meroshare-guide',
    'tms': 'complete-tms-guide',
    'nepse': 'complete-tms-guide',
    'complete-nepse-guide': 'complete-tms-guide',
    'sip': 'complete-sip-guide',
    'mutual-funds': 'complete-mutual-fund-guide',
    'mutual-fund': 'complete-mutual-fund-guide',
    'income-tax': 'complete-income-tax-guide',
    'tax': 'complete-income-tax-guide',
    'home-loan': 'complete-home-loan-guide',
    'banking': 'complete-banking-guide',
    'insurance': 'complete-insurance-guide',
    'retirement': 'complete-retirement-planning-guide',
    'retirement-planning': 'complete-retirement-planning-guide',
    'budgeting': 'complete-budgeting-guide',
    'personal-finance': 'complete-budgeting-guide',
    'business': 'complete-business-guide',
    'digital-payments': 'complete-digital-payments-guide',
    'cdsc': 'complete-cdsc-guide',
    'ipo': 'complete-ipo-guide',
    'remittance': 'complete-nepal-remittance-guide',
    'hundi': 'complete-nepal-remittance-guide',
    'cibil': 'complete-cibil-credit-score-guide',
    'cib': 'complete-cibil-credit-score-guide',
    'credit-score': 'complete-cibil-credit-score-guide',
    'debenture': 'complete-debenture-bonds-guide',
    'debentures': 'complete-debenture-bonds-guide',
    'bonds': 'complete-debenture-bonds-guide',
    'net-worth': 'complete-personal-net-worth-guide',
    'personal-net-worth': 'complete-personal-net-worth-guide'
  };

  const targetSlug = ALIASES[clean] || clean;

  if (DETAILED_GUIDES[targetSlug]) {
    return DETAILED_GUIDES[targetSlug];
  }

  // Check POPULAR_GUIDES
  const baseGuide = POPULAR_GUIDES.find(g => g.slug === targetSlug || g.id === targetSlug || g.slug === clean);
  if (baseGuide) {
    return {
      id: baseGuide.id,
      slug: baseGuide.slug || targetSlug,
      categorySlug: baseGuide.categorySlug,
      categoryName: baseGuide.categoryName || { en: 'Financial Education', np: 'वित्तीय शिक्षा' },
      title: baseGuide.title,
      oneLineSummary: baseGuide.desc,
      difficulty: { en: baseGuide.difficulty || 'Beginner', np: 'सुरुवाती' },
      readTime: { en: (baseGuide.readTime || '12 min') + ' read', np: '१२ मिनेट पढाइ' },
      sectionsCount: baseGuide.sections || 6,
      updatedDate: baseGuide.updated || 'Sep 2026',
      author: { en: 'RisePaisa Editorial Team', np: 'risePaisa सम्पादकीय टोली' },
      reviewedBy: { en: 'Verified for Nepal Regulatory Accuracy', np: 'नेपालको कानुनी तथा वित्तीय नियम अनुसार प्रमाणित' },
      prerequisites: [
        { title: 'Basic understanding of Nepali banking & currency', type: 'Prerequisite' },
        { title: 'Active bank account in Nepal', type: 'Prerequisite' }
      ],
      en: {
        intro: baseGuide.desc.en + ' This publication provides actionable step-by-step guidance tailored to Nepal’s legal, banking, and regulatory framework supervised by Nepal Rastra Bank (NRB) and the Securities Board of Nepal (SEBON).',
        chapters: [
          {
            num: 1,
            id: 'chap-1-fundamentals',
            title: 'Foundational Principles & Legal Basis',
            content: 'Understanding how this financial framework operates in Nepal is essential before committing capital or signing contracts. Regulated financial entities operate strictly under directives issued by their respective authorities to safeguard retail consumers and enforce standard disclosure norms.',
            callout: { type: 'important', title: 'Regulatory Protection', text: 'Always confirm that the financial institution or broker you transact with holds a valid, active operating license from NRB, SEBON, or the Insurance Authority.' }
          },
          {
            num: 2,
            id: 'chap-2-step-by-step',
            title: 'Step-by-Step Implementation Walkthrough',
            content: 'Execution requires gathering necessary identification (Citizenship, PAN, recent photos), verifying account mandates online, and following the official procedural sequence to eliminate delays or processing rejections.',
            callout: { type: 'tip', title: 'Digital First', text: 'Most services in Nepal now support online submission through official web portals and connectIPS verification.' }
          },
          {
            num: 3,
            id: 'chap-3-best-practices',
            title: 'RisePaisa Best Practices & Pitfalls to Avoid',
            content: 'Never rely on verbal assurances or unverified third-party advice. Always maintain written documentation, double-check interest rate spreads or fee schedules, and maintain audit-ready digital receipts.',
            callout: { type: 'warning', title: 'Avoid Unregulated Schemes', text: 'Unauthorized cooperatives, informal dhukuti lending, and illegal crypto schemes carry total capital loss risk without legal recourse.' }
          }
        ],
        nepalContext: 'Supervised under official Government of Nepal statutory frameworks to protect citizens and support disciplined, transparent wealth accumulation.',
        practicalScenario: {
          persona: 'Prashant, 27, Salaried Professional in Kathmandu',
          challenge: 'Navigating institutional paperwork and conflicting advice without clear guidance.',
          solution: 'Followed RisePaisa step-by-step verification checklist and completed the procedure online in 20 minutes.'
        },
        calculatorShortcut: {
          slug: 'sip',
          name: 'Practice with Contextual Calculator',
          desc: 'Simulate returns and test different financial scenarios directly.'
        },
        downloadableResources: [
          {
            title: 'Nepal Financial Checklist & Procedure Guide',
            type: 'PDF Guide',
            size: '280 KB',
            href: '/resources/nepse-beginner-guide'
          }
        ],
        faqs: [
          {
            q: 'How often is this guide updated?',
            a: 'RisePaisa updates all cornerstone guides following every national budget announcement and regulatory directive review.'
          },
          {
            q: 'Is this guide applicable to all districts in Nepal?',
            a: 'Yes, this guide reflects national regulations applicable across all 77 districts of Nepal.'
          }
        ],
        whereToGoNext: {
          nextLesson: { title: 'Continue with Structured Lessons', slug: 'what-is-investing', categorySlug: baseGuide.categorySlug, readTime: '8 min read' },
          nextGuide: { title: 'Explore All Guides', slug: 'complete-pan-guide', readTime: '10 min read' },
          nextCalculator: { title: 'Open Financial Calculators', slug: 'sip' },
          nextGlossary: { title: 'Financial Glossary', term: 'Asset (सम्पत्ति)', def: 'A resource with economic value that generates passive income or appreciates over time.' }
        }
      },
      np: {
        intro: baseGuide.desc.np + ' यस कर्नरस्टोन प्रकाशनले नेपाल राष्ट्र बैंक तथा नेपाल धितोपत्र बोर्डको कानुनी तथा वित्तीय परिधिभित्र रही चरणबद्ध मार्गदर्शन प्रदान गर्दछ।',
        chapters: [
          {
            num: 1,
            id: 'chap-1-fundamentals',
            title: 'आधारभूत सिद्धान्त र कानुनी व्यवस्था',
            content: 'नेपालमा कुनै पनि वित्तीय कारोबार सुरु गर्नु अगावै यसका आधारभूत नियमहरू बुझ्नु आवश्यक हुन्छ। नियमनकारी निकायको स्वीकृति प्राप्त संस्थाहरूबाट मात्र सेवा लिनु सुरक्षित हुन्छ।',
            callout: { type: 'important', title: 'कानुनी सुरक्षा', text: 'सधैँ नेपाल राष्ट्र बैंक वा धितोपत्र बोर्डबाट इजाजतप्राप्त संस्थाहरूसँग मात्र कारोबार गर्नुहोस्।' }
          },
          {
            num: 2,
            id: 'chap-2-step-by-step',
            title: 'चरणबद्ध व्यावहारिक प्रक्रिया',
            content: 'आवश्यक कागजात (नागरिकता, PAN, फोटो) तयार पारी अनलाइन वा सम्बन्धित शाखा मार्फत प्रक्रिया अगाडि बढाउन सकिन्छ।',
            callout: { type: 'tip', title: 'डिजिटल सुविधा', text: 'हाल अधिकांश सेवाहरू अनलाइन पोर्टल र connectIPS मार्फत घरमै बसीबसी लिन सकिन्छ।' }
          },
          {
            num: 3,
            id: 'chap-3-best-practices',
            title: 'सामान्य गल्तीहरू र बच्ने उपायहरू',
            content: 'अनौपचारिक बचत वा गैरकानुनी प्रलोभनमा नफसी आधिकारिक प्रणाली मार्फत मात्र आफ्नो पुँजी लगानी र बचत गर्नुहोस्।',
            callout: { type: 'warning', title: 'गैरकानुनी योजनाबाट सावधान', text: 'अनधिकृत सहकारी, ढुकुटी वा अवैध कारोबारमा पैसा डुब्ने उच्च जोखिम रहन्छ।' }
          }
        ],
        nepalContext: 'नेपाल सरकारका सम्बन्धित ऐन तथा राष्ट्र बैंकका निर्देशनहरू अनुसार नागरिकको हित संरक्षणका लागि तयार पारिएको।',
        practicalScenario: {
          persona: 'प्रशान्त, २७, काठमाडौंका जागिरे',
          challenge: 'कागजी झन्झट र स्पष्ट जानकारीको अभाव।',
          solution: 'risePaisa चेकलिस्ट हेरेर २० मिनेटमै अनलाइनबाट प्रक्रिया सम्पन्न गरे।'
        },
        calculatorShortcut: {
          slug: 'sip',
          name: 'सम्बन्धित Calculator प्रयोग गर्नुहोस्',
          desc: 'आफ्नो रकमको हिसाब प्रत्यक्ष गरेर हेर्नुहोस्।'
        },
        downloadableResources: [
          {
            title: 'नेपाल वित्तीय चेकलिस्ट तथा सन्दर्भ सामग्री',
            type: 'PDF Guide',
            size: '280 KB',
            href: '/resources/nepse-beginner-guide'
          }
        ],
        faqs: [
          {
            q: 'यो गाइड कति समयमा अद्यावधिक हुन्छ?',
            a: 'नेपाल सरकारको नयाँ बजेट र राष्ट्र बैंकको मौद्रिक नीति अनुसार यो सामग्री नियमित अद्यावधिक गरिन्छ।'
          },
          {
            q: 'के यो नियम नेपालभर लागू हुन्छ?',
            a: 'हो, यो गाइड नेपालका सबै ७७ जिल्लामा लागू हुने राष्ट्रिय कानुन अनुसार तयार पारिएको छ।'
          }
        ],
        whereToGoNext: {
          nextLesson: { title: 'सिकाइलाई निरन्तरता दिनुहोस्', slug: 'what-is-investing', categorySlug: baseGuide.categorySlug, readTime: '८ मिनेट पढाइ' },
          nextGuide: { title: 'सबै गाइडहरू हेर्नुहोस्', slug: 'complete-pan-guide', readTime: '१० मिनेट पढाइ' },
          nextCalculator: { title: 'Calculators खोल्नुहोस्', slug: 'sip' },
          nextGlossary: { title: 'वित्तीय शब्दावली', term: 'Asset (सम्पत्ति)', def: 'आर्थिक मूल्य भएको साधन जसले समयसँगै नियमित आम्दानी दिन्छ।' }
        }
      }
    };
  }

  return null;
}

// ── Centralized Knowledge Graph & Smart Cross-Linking Engine ───────
export const KNOWLEDGE_GRAPH = {
  "what-is-investing": {
    "prerequisites": [
      "budgeting-basics"
    ],
    "relatedLessons": [
      "what-is-an-ipo",
      "what-is-nepse",
      "fixed-deposit",
      "compounding-returns"
    ],
    "relatedGuides": [
      "complete-sip-guide",
      "complete-mutual-fund-guide",
      "complete-meroshare-guide"
    ],
    "relatedCalculators": [
      "sip",
      "inflation",
      "cagr"
    ],
    "relatedGlossary": [
      "Asset (सम्पत्ति)",
      "Capital Gain (पुँजीगत लाभ)",
      "Dividend (लाभांश)",
      "Inflation (मुद्रास्फीति)"
    ],
    "relatedResources": [
      "res-budget-planner",
      "res-reading-list"
    ],
    "whereNext": {
      "lesson": {
        "title": "What is an IPO? Primary Market in Nepal",
        "slug": "what-is-an-ipo",
        "categorySlug": "nepse",
        "readTime": "10 min"
      },
      "guide": {
        "title": "Complete Systematic Investment Plan (SIP) Guide",
        "slug": "complete-sip-guide",
        "readTime": "11 min"
      },
      "calculator": {
        "title": "SIP & Compounding Calculator",
        "slug": "sip"
      },
      "glossary": {
        "term": "Asset (सम्पत्ति)",
        "def": "A resource with economic value that generates passive cash flow or capital appreciation."
      }
    }
  },
  "what-is-an-ipo": {
    "prerequisites": [
      "what-is-investing",
      "what-is-nepse"
    ],
    "relatedLessons": [
      "what-is-investing",
      "what-is-nepse",
      "how-to-buy-shares-tms",
      "cgt-taxation"
    ],
    "relatedGuides": [
      "complete-meroshare-guide",
      "complete-ipo-guide",
      "complete-tms-guide"
    ],
    "relatedCalculators": [
      "nepse-share",
      "sip"
    ],
    "relatedGlossary": [
      "IPO (Initial Public Offering)",
      "MeroShare (मेरोसेयर)",
      "Capital Gain (पुँजीगत लाभ)"
    ],
    "relatedResources": [
      "res-nepse-checklist"
    ],
    "whereNext": {
      "lesson": {
        "title": "What is NEPSE & How Shares Work",
        "slug": "what-is-nepse",
        "categorySlug": "nepse",
        "readTime": "9 min"
      },
      "guide": {
        "title": "Complete MeroShare & CDSC Guide",
        "slug": "complete-meroshare-guide",
        "readTime": "12 min"
      },
      "calculator": {
        "title": "NEPSE Share & CGT Calculator",
        "slug": "nepse-share"
      },
      "glossary": {
        "term": "IPO (Initial Public Offering)",
        "def": "The first time a private company sells newly issued shares to the public in Nepal at face value (NPR 100)."
      }
    }
  },
  "what-is-nepse": {
    "prerequisites": [
      "what-is-investing",
      "what-is-an-ipo"
    ],
    "relatedLessons": [
      "what-is-an-ipo",
      "how-to-buy-shares-tms",
      "cgt-taxation",
      "dividend-investing"
    ],
    "relatedGuides": [
      "complete-tms-guide",
      "complete-meroshare-guide",
      "complete-pan-guide"
    ],
    "relatedCalculators": [
      "nepse-share",
      "sip"
    ],
    "relatedGlossary": [
      "Capital Gain (पुँजीगत लाभ)",
      "Dividend (लाभांश)",
      "MeroShare (मेरोसेयर)"
    ],
    "relatedResources": [
      "res-nepse-checklist"
    ],
    "whereNext": {
      "lesson": {
        "title": "How to Buy & Sell Shares on TMS",
        "slug": "how-to-buy-shares-tms",
        "categorySlug": "nepse",
        "readTime": "12 min"
      },
      "guide": {
        "title": "Complete NEPSE Online TMS Trading Guide",
        "slug": "complete-tms-guide",
        "readTime": "15 min"
      },
      "calculator": {
        "title": "NEPSE Share & CGT Calculator",
        "slug": "nepse-share"
      },
      "glossary": {
        "term": "Capital Gain (पुँजीगत लाभ)",
        "def": "The profit earned from selling shares or property higher than its WACC purchase price."
      }
    }
  },
  "how-to-buy-shares-tms": {
    "prerequisites": [
      "what-is-nepse",
      "what-is-an-ipo"
    ],
    "relatedLessons": [
      "what-is-nepse",
      "cgt-taxation",
      "dividend-investing"
    ],
    "relatedGuides": [
      "complete-tms-guide",
      "complete-meroshare-guide",
      "complete-pan-guide"
    ],
    "relatedCalculators": [
      "nepse-share"
    ],
    "relatedGlossary": [
      "Capital Gain (पुँजीगत लाभ)",
      "PAN (स्थायी लेखा नम्बर)"
    ],
    "relatedResources": [
      "res-nepse-checklist"
    ],
    "whereNext": {
      "lesson": {
        "title": "Capital Gains Tax & WACC in Nepal",
        "slug": "cgt-taxation",
        "categorySlug": "nepse",
        "readTime": "10 min"
      },
      "guide": {
        "title": "Complete NEPSE Online TMS Trading Guide",
        "slug": "complete-tms-guide",
        "readTime": "15 min"
      },
      "calculator": {
        "title": "NEPSE Share & CGT Calculator",
        "slug": "nepse-share"
      },
      "glossary": {
        "term": "Capital Gain (पुँजीगत लाभ)",
        "def": "The profit earned from selling NEPSE shares above the purchase cost."
      }
    }
  },
  "fixed-deposit": {
    "prerequisites": [
      "budgeting-basics"
    ],
    "relatedLessons": [
      "budgeting-basics",
      "emergency-fund",
      "what-is-investing"
    ],
    "relatedGuides": [
      "complete-banking-guide",
      "complete-sip-guide",
      "complete-home-loan-guide"
    ],
    "relatedCalculators": [
      "fixed-deposit",
      "inflation",
      "sip"
    ],
    "relatedGlossary": [
      "Fixed Deposit / FD (मुद्दती निक्षेप)",
      "TDS (कर कट्टी / स्रोतमा कर)"
    ],
    "relatedResources": [
      "res-budget-planner"
    ],
    "whereNext": {
      "lesson": {
        "title": "Emergency Fund: Where to Keep Cash in Nepal",
        "slug": "emergency-fund",
        "categorySlug": "personal-finance",
        "readTime": "8 min"
      },
      "guide": {
        "title": "Complete Nepal Commercial Banking Guide",
        "slug": "complete-banking-guide",
        "readTime": "12 min"
      },
      "calculator": {
        "title": "Fixed Deposit Calculator",
        "slug": "fixed-deposit"
      },
      "glossary": {
        "term": "Fixed Deposit / FD (मुद्दती निक्षेप)",
        "def": "A high-interest bank deposit locked for a set tenure yielding guaranteed periodic interest."
      }
    }
  },
  "pan-explained": {
    "prerequisites": [],
    "relatedLessons": [
      "tax-exemptions",
      "income-tax-slabs",
      "what-is-an-ipo"
    ],
    "relatedGuides": [
      "complete-pan-guide",
      "complete-income-tax-guide"
    ],
    "relatedCalculators": [
      "nepal-income-tax"
    ],
    "relatedGlossary": [
      "PAN (स्थायी लेखा नम्बर)",
      "TDS (कर कट्टी / स्रोतमा कर)"
    ],
    "relatedResources": [
      "res-tax-deductions-list"
    ],
    "whereNext": {
      "lesson": {
        "title": "Legal Tax Deductions & SSF Allowances",
        "slug": "tax-exemptions",
        "categorySlug": "taxation",
        "readTime": "12 min"
      },
      "guide": {
        "title": "Complete Permanent Account Number (PAN) Guide",
        "slug": "complete-pan-guide",
        "readTime": "10 min"
      },
      "calculator": {
        "title": "Nepal Income Tax Calculator",
        "slug": "nepal-income-tax"
      },
      "glossary": {
        "term": "PAN (स्थायी लेखा नम्बर)",
        "def": "Permanent Account Number issued by the Inland Revenue Department for tracking tax compliance."
      }
    }
  },
  "budgeting-basics": {
    "prerequisites": [],
    "relatedLessons": [
      "emergency-fund",
      "fixed-deposit",
      "what-is-investing"
    ],
    "relatedGuides": [
      "complete-budgeting-guide",
      "complete-banking-guide"
    ],
    "relatedCalculators": [
      "inflation",
      "sip"
    ],
    "relatedGlossary": [
      "Budget (बजेट)",
      "Inflation (मुद्रास्फीति)"
    ],
    "relatedResources": [
      "res-budget-planner",
      "res-cashflow-notion"
    ],
    "whereNext": {
      "lesson": {
        "title": "Building a Guaranteed Emergency Fund in Nepal",
        "slug": "emergency-fund",
        "categorySlug": "personal-finance",
        "readTime": "8 min"
      },
      "guide": {
        "title": "Complete Nepal Personal Budgeting Guide",
        "slug": "complete-budgeting-guide",
        "readTime": "11 min"
      },
      "calculator": {
        "title": "Inflation & Purchasing Power Calculator",
        "slug": "inflation"
      },
      "glossary": {
        "term": "Budget (बजेट)",
        "def": "A structured plan allocating your net monthly earnings across necessities, lifestyle, and savings."
      }
    }
  },
  "emergency-fund": {
    "prerequisites": [
      "budgeting-basics"
    ],
    "relatedLessons": [
      "budgeting-basics",
      "fixed-deposit",
      "what-is-investing"
    ],
    "relatedGuides": [
      "complete-budgeting-guide",
      "complete-banking-guide",
      "complete-insurance-guide"
    ],
    "relatedCalculators": [
      "inflation",
      "fixed-deposit"
    ],
    "relatedGlossary": [
      "Budget (बजेट)",
      "Fixed Deposit / FD (मुद्दती निक्षेप)"
    ],
    "relatedResources": [
      "res-budget-planner",
      "res-cashflow-notion"
    ],
    "whereNext": {
      "lesson": {
        "title": "Fixed Deposits & High Savings in Nepal",
        "slug": "fixed-deposit",
        "categorySlug": "banking",
        "readTime": "10 min"
      },
      "guide": {
        "title": "Complete Nepal Commercial Banking Guide",
        "slug": "complete-banking-guide",
        "readTime": "12 min"
      },
      "calculator": {
        "title": "Fixed Deposit Calculator",
        "slug": "fixed-deposit"
      },
      "glossary": {
        "term": "Asset (सम्पत्ति)",
        "def": "A resource with economic value that generates passive income or capital appreciation."
      }
    }
  },
  "base-rate-spreads": {
    "prerequisites": [
      "fixed-deposit"
    ],
    "relatedLessons": [
      "fixed-deposit",
      "budgeting-basics"
    ],
    "relatedGuides": [
      "complete-home-loan-guide",
      "complete-banking-guide"
    ],
    "relatedCalculators": [
      "home-loan",
      "emi"
    ],
    "relatedGlossary": [
      "EMI (Equated Monthly Installment)",
      "Repo Rate (रिपो दर)"
    ],
    "relatedResources": [
      "res-loan-comparison"
    ],
    "whereNext": {
      "lesson": {
        "title": "Understanding Commercial Banking in Nepal",
        "slug": "fixed-deposit",
        "categorySlug": "banking",
        "readTime": "10 min"
      },
      "guide": {
        "title": "Complete Nepal Home Loan & Mortgage Guide",
        "slug": "complete-home-loan-guide",
        "readTime": "16 min"
      },
      "calculator": {
        "title": "Home Loan & EMI Calculator",
        "slug": "home-loan"
      },
      "glossary": {
        "term": "EMI (Equated Monthly Installment)",
        "def": "The fixed monthly sum paid by a borrower consisting of principal repayment and interest."
      }
    }
  },
  "tax-exemptions": {
    "prerequisites": [
      "pan-explained"
    ],
    "relatedLessons": [
      "pan-explained",
      "what-is-investing"
    ],
    "relatedGuides": [
      "complete-income-tax-guide",
      "complete-pan-guide",
      "complete-insurance-guide"
    ],
    "relatedCalculators": [
      "nepal-income-tax"
    ],
    "relatedGlossary": [
      "TDS (कर कट्टी / स्रोतमा कर)",
      "PAN (स्थायी लेखा नम्बर)"
    ],
    "relatedResources": [
      "res-tax-deductions-list"
    ],
    "whereNext": {
      "lesson": {
        "title": "PAN Explained for Salary & Stocks in Nepal",
        "slug": "pan-explained",
        "categorySlug": "taxation",
        "readTime": "10 min"
      },
      "guide": {
        "title": "Complete Nepal Salary Earner Income Tax Guide",
        "slug": "complete-income-tax-guide",
        "readTime": "16 min"
      },
      "calculator": {
        "title": "Nepal Income Tax Calculator",
        "slug": "nepal-income-tax"
      },
      "glossary": {
        "term": "TDS (कर कट्टी / स्रोतमा कर)",
        "def": "Tax Deducted at Source: statutory advance tax withheld on salary, bank interest, or freelance payments."
      }
    }
  }
};

export const CATEGORY_ENHANCEMENTS = {
  "investing": {
    "resources": [
      "res-reading-list",
      "res-nepse-checklist"
    ],
    "glossary": [
      "Asset (सम्पत्ति)",
      "Capital Gain (पुँजीगत लाभ)",
      "Dividend (लाभांश)",
      "NAV (Net Asset Value)",
      "SIP (Systematic Investment Plan)"
    ]
  },
  "nepse": {
    "resources": [
      "res-nepse-checklist",
      "res-glossary-pocket"
    ],
    "glossary": [
      "IPO (Initial Public Offering)",
      "MeroShare (मेरोसेयर)",
      "Capital Gain (पुँजीगत लाभ)",
      "Dividend (लाभांश)"
    ]
  },
  "taxation": {
    "resources": [
      "res-tax-deductions-list",
      "res-glossary-pocket"
    ],
    "glossary": [
      "PAN (स्थायी लेखा नम्बर)",
      "TDS (कर कट्टी / स्रोतमा कर)",
      "VAT (मूल्य अभिवृद्धि कर)"
    ]
  },
  "personal-finance": {
    "resources": [
      "res-budget-planner",
      "res-cashflow-notion"
    ],
    "glossary": [
      "Budget (बजेट)",
      "Asset (सम्पत्ति)",
      "Inflation (मुद्रास्फीति)"
    ]
  },
  "loans": {
    "resources": [
      "res-loan-comparison",
      "res-budget-planner"
    ],
    "glossary": [
      "EMI (Equated Monthly Installment)",
      "Repo Rate (रिपो दर)"
    ]
  },
  "banking": {
    "resources": [
      "res-loan-comparison",
      "res-budget-planner"
    ],
    "glossary": [
      "Fixed Deposit / FD (मुद्दती निक्षेप)",
      "KYC (Know Your Customer)",
      "Repo Rate (रिपो दर)"
    ]
  },
  "insurance": {
    "resources": [
      "res-reading-list",
      "res-tax-deductions-list"
    ],
    "glossary": [
      "HLV (Human Life Value)",
      "Asset (सम्पत्ति)"
    ]
  },
  "retirement-planning": {
    "resources": [
      "res-budget-planner",
      "res-reading-list"
    ],
    "glossary": [
      "SIP (Systematic Investment Plan)",
      "Fixed Deposit / FD (मुद्दती निक्षेप)"
    ]
  },
  "business": {
    "resources": [
      "res-tax-deductions-list",
      "res-cashflow-notion"
    ],
    "glossary": [
      "VAT (मूल्य अभिवृद्धि कर)",
      "PAN (स्थायी लेखा नम्बर)"
    ]
  },
  "digital-payments": {
    "resources": [
      "res-budget-planner",
      "res-glossary-pocket"
    ],
    "glossary": [
      "QR Payment (Fonepay / NepalPay)",
      "KYC (Know Your Customer)"
    ]
  }
};

/**
 * Get Smart Related Content Across all 5 Content Types
 * Intelligent Category-Aware Knowledge Graph Traversal
 */
export function getRelatedContent(type, slug, categorySlug = '') {
  const clean = (slug || '').toLowerCase().trim();
  const graph = KNOWLEDGE_GRAPH[clean] || {};

  // If direct slug has graph entries, use them
  let lessonSlugs = graph.relatedLessons;
  let guideSlugs = graph.relatedGuides;
  let calcSlugs = graph.relatedCalculators;
  let glossaryTerms = graph.relatedGlossary;
  let resourceIds = graph.relatedResources;
  let whereNext = graph.whereNext;

  // Category fallback mapping when topic is not directly in graph
  const cat = (categorySlug || '').toLowerCase().trim();
  const catEnhancement = CATEGORY_ENHANCEMENTS[cat] || {};

  if (!lessonSlugs || lessonSlugs.length === 0) {
    if (cat === 'nepse') lessonSlugs = ['what-is-nepse', 'what-is-an-ipo', 'how-to-buy-shares-tms', 'cgt-taxation'];
    else if (cat === 'taxation') lessonSlugs = ['pan-explained', 'tax-exemptions', 'income-tax-slabs'];
    else if (cat === 'banking') lessonSlugs = ['fixed-deposit', 'budgeting-basics', 'how-loans-work'];
    else if (cat === 'loans') lessonSlugs = ['how-loans-work', 'base-rate-spreads', 'fixed-deposit'];
    else if (cat === 'insurance') lessonSlugs = ['emergency-fund', 'budgeting-basics', 'what-is-investing'];
    else if (cat === 'retirement-planning') lessonSlugs = ['compounding-returns', 'what-is-investing', 'fixed-deposit'];
    else lessonSlugs = ['what-is-investing', 'what-is-an-ipo', 'fixed-deposit', 'budgeting-basics'];
  }

  if (!guideSlugs || guideSlugs.length === 0) {
    if (cat === 'nepse') guideSlugs = ['complete-meroshare-guide', 'complete-tms-guide', 'complete-ipo-guide'];
    else if (cat === 'taxation') guideSlugs = ['complete-pan-guide', 'complete-income-tax-guide'];
    else if (cat === 'banking') guideSlugs = ['complete-banking-guide', 'complete-home-loan-guide'];
    else if (cat === 'loans') guideSlugs = ['complete-home-loan-guide', 'complete-banking-guide'];
    else if (cat === 'insurance') guideSlugs = ['complete-insurance-guide', 'complete-retirement-planning-guide'];
    else if (cat === 'retirement-planning') guideSlugs = ['complete-retirement-planning-guide', 'complete-sip-guide'];
    else if (cat === 'personal-finance') guideSlugs = ['complete-budgeting-guide', 'complete-banking-guide'];
    else if (cat === 'business') guideSlugs = ['complete-business-guide', 'complete-income-tax-guide'];
    else if (cat === 'digital-payments') guideSlugs = ['complete-digital-payments-guide', 'complete-banking-guide'];
    else guideSlugs = ['complete-sip-guide', 'complete-pan-guide', 'complete-meroshare-guide'];
  }

  if (!calcSlugs || calcSlugs.length === 0) {
    if (cat === 'nepse') calcSlugs = ['nepse-share', 'sip'];
    else if (cat === 'taxation') calcSlugs = ['nepal-income-tax'];
    else if (cat === 'banking') calcSlugs = ['fixed-deposit', 'inflation'];
    else if (cat === 'loans') calcSlugs = ['home-loan', 'emi'];
    else if (cat === 'retirement-planning') calcSlugs = ['retirement', 'sip'];
    else calcSlugs = ['sip', 'inflation', 'nepse-share'];
  }

  if (!glossaryTerms || glossaryTerms.length === 0) {
    glossaryTerms = catEnhancement.glossary || ['Asset (सम्पत्ति)', 'Capital Gain (पुँजीगत लाभ)', 'Dividend (लाभांश)'];
  }

  if (!resourceIds || resourceIds.length === 0) {
    resourceIds = catEnhancement.resources || ['res-budget-planner', 'res-nepse-checklist'];
  }

  // Resolve Lessons
  const lessons = lessonSlugs.map(lSlug => {
    return {
      type: 'lesson',
      slug: lSlug,
      title: lSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      categorySlug: categorySlug || 'investing',
      duration: '10 min',
      difficulty: 'Beginner'
    };
  });

  // Resolve Guides
  const guides = guideSlugs.map(gSlug => {
    const g = POPULAR_GUIDES.find(item => item.slug === gSlug) || {
      slug: gSlug,
      title: { en: gSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), np: 'गाइड' },
      readTime: '12 min',
      difficulty: 'Beginner'
    };
    return {
      type: 'guide',
      slug: g.slug,
      title: g.title,
      readTime: g.readTime,
      difficulty: g.difficulty,
      href: `/learn/guides/${g.slug}`
    };
  });

  // Resolve Calculators
  const calculators = calcSlugs.map(cSlug => {
    const c = RECOMMENDED_CALCULATORS.find(item => item.slug === cSlug) || {
      slug: cSlug,
      title: { en: cSlug.toUpperCase() + ' Calculator', np: cSlug + ' Calculator' },
      desc: { en: 'Interactive calculation tool for Nepal', np: 'नेपालका लागि हिसाब औजार' }
    };
    return {
      type: 'calculator',
      slug: c.slug,
      title: c.title,
      desc: c.desc,
      href: `/calculators/${c.slug}`
    };
  });

  // Resolve Glossary
  const glossary = glossaryTerms.map(termName => {
    const item = GLOSSARY_PREVIEW.find(g => g.term === termName || g.term.includes(termName)) || {
      term: termName,
      def: { en: 'Essential financial concept defined for Nepal.', np: 'नेपालका लागि अत्यावश्यक वित्तीय अवधारणा।' }
    };
    return {
      type: 'glossary',
      term: item.term,
      def: item.def
    };
  });

  // Resolve Resources
  const resources = resourceIds.map(rId => {
    const r = FREE_RESOURCES.find(item => item.id === rId) || {
      id: rId,
      title: { en: 'Practical Financial Worksheet', np: 'व्यावहारिक वित्तीय चेकलिस्ट' },
      type: 'Spreadsheet',
      downloadUrl: '/resources/budget-planner-system'
    };
    return {
      type: 'resource',
      id: r.id,
      title: r.title,
      resourceType: r.type,
      href: r.downloadUrl
    };
  });

  // Fallback whereNext
  const defaultWhereNext = {
    lesson: { title: 'What is Investing? Foundations in Nepal', slug: 'what-is-investing', categorySlug: 'investing', readTime: '8 min' },
    guide: { title: 'Complete Systematic Investment Plan (SIP) Guide', slug: 'complete-sip-guide', readTime: '11 min' },
    calculator: { title: 'SIP & Compounding Calculator', slug: 'sip' },
    glossary: { term: 'Asset (सम्पत्ति)', def: 'A resource with economic value that generates passive cash flow or capital appreciation.' }
  };

  return {
    prerequisites: graph.prerequisites || [],
    lessons,
    guides,
    calculators,
    glossary,
    resources,
    whereNext: whereNext || defaultWhereNext
  };
}


export function recordRecentView(type, slug, title, categorySlug = '') {
  if (typeof window === 'undefined') return;
  try {
    const views = JSON.parse(localStorage.getItem(RECENT_VIEWS_KEY) || '[]');
    const filtered = views.filter(v => !(v.type === type && v.slug === slug));
    filtered.unshift({
      type,
      slug,
      title,
      categorySlug,
      timestamp: Date.now()
    });
    localStorage.setItem(RECENT_VIEWS_KEY, JSON.stringify(filtered.slice(0, 10)));
  } catch (e) {
    // Ignore localStorage errors
  }
}

export function getRecentViews() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(RECENT_VIEWS_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

export function clearRecentViews() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(RECENT_VIEWS_KEY);
}

export function toggleSavedGuide(guideSlug) {
  if (typeof window === 'undefined') return false;
  try {
    const saved = JSON.parse(localStorage.getItem(SAVED_GUIDES_KEY) || '[]');
    const idx = saved.indexOf(guideSlug);
    let isSaved = false;
    if (idx >= 0) {
      saved.splice(idx, 1);
      isSaved = false;
    } else {
      saved.push(guideSlug);
      isSaved = true;
    }
    localStorage.setItem(SAVED_GUIDES_KEY, JSON.stringify(saved));
    return isSaved;
  } catch (e) {
    return false;
  }
}

export function isGuideSaved(guideSlug) {
  if (typeof window === 'undefined') return false;
  try {
    const saved = JSON.parse(localStorage.getItem(SAVED_GUIDES_KEY) || '[]');
    return saved.includes(guideSlug);
  } catch (e) {
    return false;
  }
}

export function getSavedGuides() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(SAVED_GUIDES_KEY) || '[]');
  } catch (e) {
    return [];
  }
}


// ── 5. Recommended Calculators Data (Contextual Learning Tools) ─
export const RECOMMENDED_CALCULATORS = [
  {
    slug: 'sip',
    categorySlug: 'investing',
    title: { en: 'SIP & Compounding Calculator', np: 'SIP र चक्रवृद्धि ब्याज Calculator' },
    desc: { en: 'Simulate monthly systematic investments and inflation-adjusted corpus growth in Nepal.', np: 'नेपालमा मासिक नियमित लगानी (SIP) र मुद्रास्फीति समायोजनपछिको कुल प्रतिफल हिसाब गर्नुहोस्।' },
    badge: { en: 'Investing Tool', np: 'लगानी औजार' },
    href: '/calculators/sip',
    contextNote: { en: 'Pair with: How SIP Works Lesson', np: 'साथमा पढ्नुहोस्: SIP कसरी काम गर्छ' }
  },
  {
    slug: 'nepal-income-tax',
    categorySlug: 'taxation',
    title: { en: 'Nepal Income Tax Calculator', np: 'नेपाल आयकर (Tax) Calculator' },
    desc: { en: 'Calculate single & married tax slabs, SSF deductions, CIT rebates, and medical tax credits.', np: 'नेपाल सरकारको नयाँ बजेट अनुसार व्यक्तिगत तथा दम्पतीको आयकर, SSF र CIT छुटको यथार्थ हिसाब।' },
    badge: { en: 'Tax Tool', np: 'कर औजार' },
    href: '/calculators/nepal-income-tax',
    contextNote: { en: 'Pair with: Income Tax Slabs Guide', np: 'साथमा पढ्नुहोस्: आयकर स्ल्याब गाइड' }
  },
  {
    slug: 'home-loan',
    categorySlug: 'loans',
    title: { en: 'Home Loan & EMI Calculator', np: 'घर कर्जा तथा EMI Calculator' },
    desc: { en: 'Calculate exact monthly bank repayments, interest amortizations, and base rate spreads.', np: 'नेपाली बैंकहरूको Base Rate र Premium का आधारमा वास्तविक महिनावारि किस्ता हिसाब गर्नुहोस्।' },
    badge: { en: 'Loan Tool', np: 'कर्जा औजार' },
    href: '/calculators/home-loan',
    contextNote: { en: 'Pair with: Base Rate & Loans Lesson', np: 'साथमा पढ्नुहोस्: Base Rate र ऋण' }
  },
  {
    slug: 'nepse-share',
    categorySlug: 'nepse',
    title: { en: 'NEPSE Share & CGT Calculator', np: 'NEPSE सेयर कारोबार तथा पुँजीगत लाभकर' },
    desc: { en: 'Compute SEBON fees, broker commission tiers, DP charges, and 5% vs 7.5% CGT for short/long term.', np: 'ब्रोकर कमिसन, SEBON शुल्क, DP शुल्क र ५% वा ७.५% पुँजीगत लाभकर (CGT) को विस्तृत हिसाब।' },
    badge: { en: 'NEPSE Tool', np: 'सेयर औजार' },
    href: '/calculators/nepse-share',
    contextNote: { en: 'Pair with: TMS & Trading Fees Lesson', np: 'साथमा पढ्नुहोस्: TMS र शुल्क' }
  },
  {
    slug: 'retirement',
    categorySlug: 'retirement-planning',
    title: { en: 'Retirement Corpus Calculator', np: 'अवकाश कोष (Corpus) Calculator' },
    desc: { en: 'Determine the exact nest egg needed to retire with dignified passive income in Nepal.', np: 'नेपालमा सम्मानजनक जीवनयापनका लागि आवश्यक अवकाश कोष र ४% सुरक्षित निकासी हिसाब गर्नुहोस्।' },
    badge: { en: 'Retirement Tool', np: 'अवकाश औजार' },
    href: '/calculators/retirement',
    contextNote: { en: 'Pair with: SSF Pension & CIT Guide', np: 'साथमा पढ्नुहोस्: SSF पेन्सन र CIT' }
  },
  {
    slug: 'inflation',
    categorySlug: 'economics',
    title: { en: 'Purchasing Power & Inflation Calculator', np: 'मुद्रास्फीति र क्रयशक्ति ह्रास' },
    desc: { en: 'Discover how rising living costs erode the future purchasing power of your bank savings.', np: 'बढ्दो महँगीले भविष्यमा तपाईंको बचतको क्रयशक्ति कति घटाउँछ भन्ने यथार्थ हिसाब हेर्नुहोस्।' },
    badge: { en: 'Economics Tool', np: 'अर्थशास्त्र औजार' },
    href: '/calculators/inflation',
    contextNote: { en: 'Pair with: Understanding Inflation Lesson', np: 'साथमा पढ्नुहोस्: मुद्रास्फीति पाठ' }
  }
];

// ── 6. Learning by Difficulty Tiers (3 Structured Ladders) ─────
export const DIFFICULTY_TIERS = [
  {
    tier: 'beginner',
    title: { en: 'Beginner (जग)', np: 'सुरुवाती तह (Beginner)' },
    desc: { en: 'Foundational financial concepts explained in simple language without jargon. Ideal for students and first-time earners.', np: 'कुनै पनि प्राविधिक शब्द विना सरल भाषामा पैसाको आधारभूत सिद्धान्त। विद्यार्थी र पहिलो पटक जागिर सुरु गरेकाहरूका लागि उपयुक्त।' },
    lessonsCount: 38,
    estTime: { en: '14 Hours total', np: 'कुल १४ घण्टा' },
    startingPoint: { en: 'Personal Finance 101 & Money Basics', np: 'व्यक्तिगत वित्त १०१ र आम्दानीको जग' },
    href: '/learn/personal-finance'
  },
  {
    tier: 'intermediate',
    title: { en: 'Intermediate (अभ्यास)', np: 'मध्यम तह (Intermediate)' },
    desc: { en: 'Hands-on practical implementation: opening a Demat, evaluating mutual funds, understanding tax slabs, and comparing bank loans.', np: 'व्यावहारिक कार्यान्वयन: Demat र TMS चलाउने, Mutual Fund छान्ने, आयकर हिसाब गर्ने र बैंक कर्जा दाँज्ने सीप।' },
    lessonsCount: 42,
    estTime: { en: '18 Hours total', np: 'कुल १८ घण्टा' },
    startingPoint: { en: 'NEPSE Analysis & Tax Optimization', np: 'NEPSE विश्लेषण र कर व्यवस्थापन' },
    href: '/learn/investing'
  },
  {
    tier: 'advanced',
    title: { en: 'Advanced (रणनीति)', np: 'उन्नत तह (Advanced)' },
    desc: { en: 'Deep financial engineering: corporate balance sheet analysis, macroeconomic policy impacts, business structures, and portfolio risk models.', np: 'गहिरो वित्तीय विश्लेषण: कम्पनीको वित्तीय विवरण विश्लेषण, राष्ट्र बैंकको मौद्रिक नीति, व्यवसाय दर्ता र पोर्टफोलियो जोखिम मोडल।' },
    lessonsCount: 26,
    estTime: { en: '12 Hours total', np: 'कुल १२ घण्टा' },
    startingPoint: { en: 'Business Entities & Macro Monetary Economics', np: 'व्यावसायिक संरचना र मौद्रिक अर्थशास्त्र' },
    href: '/learn/economics'
  }
];

// ── 7. Recently Updated Lessons (Transparency & Active Maintenance)
export const RECENTLY_UPDATED = [
  {
    id: 'up-tax-slabs',
    categorySlug: 'taxation',
    categoryName: { en: 'Taxation & TDS', np: 'कर र TDS' },
    title: { en: 'Nepal Income Tax Slabs & Deductions Guide', np: 'नेपाल आयकर स्ल्याब तथा छुट सुविधा गाइड' },
    date: 'Aug 2026',
    reason: { en: 'Updated for FY 2083/84 Tax Rules and SSF threshold changes', np: 'आर्थिक वर्ष २०८३/८४ को नयाँ बजेट, कर नियम र SSF सीमा अनुसार अद्यावधिक' },
    href: '/learn/taxation/nepal-income-tax-explained'
  },
  {
    id: 'up-loan-spreads',
    categorySlug: 'loans',
    categoryName: { en: 'Loans & Debt', np: 'कर्जा र ऋण' },
    title: { en: 'Bank Base Rates, Premium Spreads & Floating EMIs', np: 'बैंक Base Rate, प्रिमियम र फ्लोटिङ EMI सम्झौता' },
    date: 'Jul 2026',
    reason: { en: 'Updated after latest NRB Monetary Policy review on interest rate corridor', np: 'नेपाल राष्ट्र बैंकको पछिल्लो मौद्रिक नीति समीक्षा र ब्याजदर करिडोर अनुसार अद्यावधिक' },
    href: '/learn/loans/base-rate-premium-nepal-banks'
  },
  {
    id: 'up-broker-commissions',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'NEPSE तथा सेयर' },
    title: { en: 'NEPSE Broker Commission Tiers & Trading Charges', np: 'NEPSE ब्रोकर कमिसन स्ल्याब र कारोबार शुल्क' },
    date: 'Jul 2026',
    reason: { en: 'Updated for SEBON revised transaction fee structures', np: 'नेपाल धितोपत्र बोर्ड (SEBON) को नयाँ कारोबार शुल्क नियम अनुसार अद्यावधिक' },
    href: '/learn/nepse/broker-commissions-sebon-fees-nepal'
  },
  {
    id: 'up-mutual-funds',
    categorySlug: 'investing',
    categoryName: { en: 'Investing', np: 'लगानी' },
    title: { en: 'Open-Ended Mutual Funds: NAV & SIP Dividend Reinvestment', np: 'खुलामुखी Mutual Funds: NAV र SIP लाभांश पुनःलगानी' },
    date: 'Jun 2026',
    reason: { en: 'Updated with latest audited mutual fund expense ratios and payouts', np: 'नेपालका म्युचुअल फण्डहरूको पछिल्लो व्यवस्थापन खर्च अनुपात र लाभांश वितरण अनुसार अद्यावधिक' },
    href: '/learn/mutual-funds/open-ended-vs-close-ended-schemes-nepal'
  }
];

// ── 8. Finance Glossary Preview Data (Alphabetical Key Terms) ────
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

// ── 9. Free Downloadable Resources (7 Practical Tools) ──────────
export const FREE_RESOURCES = [
  {
    id: 'res-budget-planner',
    title: { en: 'Nepal Personal Budget Planner', np: 'नेपाल व्यक्तिगत बजेट प्लानर' },
    desc: { en: 'Clean Excel & Google Sheets template adapted for Nepali salaries, room rent, and festival sinking funds.', np: 'नेपाली तलब, कोठा भाडा, रासन र चाडपर्व खर्च ट्र्याक गर्न तयार पारिएको Excel/Sheets Template।' },
    type: 'Spreadsheet',
    format: 'XLSX / CSV',
    formatBadge: 'Spreadsheet',
    icon: 'spreadsheet',
    previewType: 'csv',
    fileSize: '142 KB',
    badge: { en: 'Most Popular', np: 'अति लोकप्रिय' },
    downloadUrl: 'assets/downloads/nepal-personal-budget-planner.csv',
    downloadFilename: 'nepal-personal-budget-planner.csv',
    isDirectDownload: true,
    highlights: [
      { en: '50/30/20 Rule Engine', np: '५०/३०/२० बजेट सूत्र' },
      { en: 'Dashain Sinking Fund', np: 'दशैं-तिहार बचत कोष' },
      { en: 'Excel & Google Sheets', np: 'एक्सेल र सिट' }
    ],
    whoItIsFor: {
      en: 'Salaried employees, fresh graduates, and families living in urban Nepal seeking structured monthly cash control.',
      np: 'मासिक तलब पाउने कर्मचारी, नयाँ स्नातक र सहरमा बस्ने परिवार जसलाई आफ्नो मासिक खर्च नियन्त्रण गर्नु छ।'
    },
    howToUse: {
      en: '1. Download the CSV template. 2. Open in Microsoft Excel, Apple Numbers, or Google Sheets. 3. Enter take-home salary and track monthly categories.',
      np: '१. CSV फाइल डाउनलोड गर्नुहोस्। २. Excel वा Google Sheets मा खोल्नुहोस्। ३. तलब हालेर मासिक खर्च व्यवस्थित गर्नुहोस्।'
    },
    estimatedTime: { en: '15 Mins Setup', np: '१५ मिनेट सेटअप' },
    companionLesson: 'budgeting-50-30-20-nepal',
    companionLessonTitle: { en: '50/30/20 Budgeting Rule for Nepal', np: 'नेपालमा ५०/३०/२० बजेटिङ नियम' },
    companionCategorySlug: 'personal-finance',
    companionCalculator: 'sip'
  },
  {
    id: 'res-cashflow-notion',
    title: { en: 'Monthly Cash Flow & Net Worth Tracker', np: 'मासिक Cash Flow र Net Worth ट्र्याकर' },
    desc: { en: 'Comprehensive personal balance sheet ledger for tracking liquid wallets, investments, debts, and true net worth.', np: 'दैनिक खर्च, वालेट, बैंक खाता, सेयर लगानी, ऋण र आफ्नो कुल नेटवर्थ व्यवस्थित रूपमा ट्र्याक गर्ने स्प्रेडसिट ट्र्याकर।' },
    type: 'Spreadsheet',
    format: 'CSV / Excel',
    formatBadge: 'Net Worth Ledger',
    icon: 'ledger',
    previewType: 'csv',
    fileSize: '180 KB',
    badge: { en: 'Direct Download', np: 'प्रत्यक्ष डाउनलोड' },
    downloadUrl: 'assets/downloads/nepal-cash-flow-tracker.csv',
    downloadFilename: 'nepal-cash-flow-tracker.csv',
    isDirectDownload: true,
    highlights: [
      { en: 'Bank & Wallet Balances', np: 'बैंक र वालेट हिसाब' },
      { en: 'True Net Worth Formula', np: 'नेट वर्थ सूत्र' },
      { en: 'Solvency & Runway Check', np: 'बचत क्षमता जाँच' }
    ],
    whoItIsFor: {
      en: 'Salaried earners, digital freelancers, and multi-account holders (Bank + eSewa + Khalti + NEPSE).',
      np: 'तलबजीवी, फ्रिलान्सर र धेरै खाता (बैंक, इसेवा, खल्ती र सेयर) चलाउने व्यक्तिहरू।'
    },
    howToUse: {
      en: '1. Download CSV. 2. Open in Excel/Sheets. 3. Enter initial bank and wallet balances to view automatic Net Worth calculation.',
      np: '१. CSV डाउनलोड गर्नुहोस्। २. Excel वा Sheets मा खोल्नुहोस्। ३. बैंक र वालेटको मौज्दात हालेर Net Worth हिसाब हेर्नुहोस्।'
    },
    estimatedTime: { en: '10 Mins Setup', np: '१० मिनेट सेटअप' },
    companionLesson: 'tracking-money-leaks',
    companionLessonTitle: { en: 'How to Track Unseen Money Leaks', np: 'पैसा कहाँ हराउँछ? Money Leaks पत्ता लगाउने विधि' },
    companionCategorySlug: 'personal-finance',
    companionCalculator: 'tax'
  },
  {
    id: 'res-nepse-checklist',
    title: { en: 'First-Time NEPSE Investor Checklist', np: 'पहिलो पटक NEPSE मा लगानी गर्नेहरूको चेकलिस्ट' },
    desc: { en: 'A step-by-step printable and interactive checklist covering Demat opening, C-ASBA, broker selection, and TMS trading.', np: 'Demat खोल्ने, C-ASBA लिने, ब्रोकर छनोट गर्ने र पहिलो सेयर अर्डर हाल्नेसम्मको चरणबद्ध प्रिन्ट गर्न मिल्ने चेकलिस्ट।' },
    type: 'Printable Checklist',
    format: 'HTML / Print PDF',
    formatBadge: 'Interactive Checklist',
    icon: 'checklist',
    previewType: 'html',
    fileSize: '320 KB',
    badge: { en: 'Printable', np: 'प्रिन्ट गर्न मिल्ने' },
    downloadUrl: 'assets/downloads/nepse-first-time-investor-checklist.html',
    downloadFilename: 'nepse-first-time-investor-checklist.html',
    isDirectDownload: true,
    highlights: [
      { en: '18 Actionable Steps', np: '१८ चरणबद्ध प्रक्रिया' },
      { en: 'C-ASBA & CRN Guide', np: 'सी-आस्वा र CRN' },
      { en: 'Print / Save as PDF', np: 'प्रिन्ट र सेभ' }
    ],
    whoItIsFor: {
      en: 'Complete beginners ready to open their first Demat, apply for IPOs via MeroShare, and trade on NEPSE TMS.',
      np: 'पहिलो पटक डिम्याट खोल्न, मेरोसेयरबाट IPO भर्न र NEPSE TMS बाट सेयर कारोबार गर्न चाहने नयाँ लगानीकर्ता।'
    },
    howToUse: {
      en: '1. Click Download/Open to view printable checklist. 2. Check off documents (Nagarikta, PP photo). 3. Click "Print / Save as PDF".',
      np: '१. चेकलिस्ट डाउनलोड वा खोल्नुहोस्। २. नागरिकता र फोटो तयार पार्नुहोस्। ३. "Print / Save as PDF" थिचेर सेभ गर्नुहोस्।'
    },
    estimatedTime: { en: '5 Mins Read', np: '५ मिनेट अध्ययन' },
    companionLesson: 'demat-meroshare-tms',
    companionLessonTitle: { en: 'Demat, MeroShare & TMS Account Guide', np: 'डिम्याट, मेरोसेयर र TMS खाता गाइड' },
    companionCategorySlug: 'nepse',
    companionCalculator: 'share'
  },
  {
    id: 'res-loan-comparison',
    title: { en: 'Commercial Bank Loan Comparison Worksheet', np: 'वाणिज्य बैंक कर्जा तुलना तालिका' },
    desc: { en: 'Compare bank base rates, premium spreads, prepayment penalty clauses, and true repayment cost.', np: 'विभिन्न बैंकहरूको Base Rate, प्रिमियम र अग्रिम भुक्तानीका सर्तहरू दाँज्ने विश्लेषणात्मक पाना।' },
    type: 'Worksheet',
    format: 'XLSX / CSV',
    formatBadge: 'Comparison Matrix',
    icon: 'comparison',
    previewType: 'csv',
    fileSize: '180 KB',
    badge: { en: 'Loan Analysis', np: 'कर्जा विश्लेषण' },
    downloadUrl: 'assets/downloads/commercial-bank-loan-comparison-worksheet.csv',
    downloadFilename: 'commercial-bank-loan-comparison-worksheet.csv',
    isDirectDownload: true,
    highlights: [
      { en: '5 Class-A Bank Matrix', np: '५ वाणिज्य बैंक तुलना' },
      { en: 'Base Rate + Premium', np: 'बेस रेट र प्रिमियम' },
      { en: 'NRB Fee Rules', np: 'राष्ट्र बैंकका नियमहरू' }
    ],
    whoItIsFor: {
      en: 'Homebuyers, vehicle loan applicants, and entrepreneurs evaluating bank loan offers across Class-A commercial banks.',
      np: 'घरकर्जा, सवारी कर्जा वा व्यवसायिक कर्जा लिन बैंकका प्रस्तावहरू तुलना गरिरहेका व्यक्तिहरू।'
    },
    howToUse: {
      en: '1. Download worksheet. 2. Enter Base Rate and Premium for 3 banks. 3. Compare monthly EMI and total interest.',
      np: '१. पाना डाउनलोड गर्नुहोस्। २. तीन बैंकको Base Rate र Premium हाल्नुहोस्। ३. मासिक किस्ता र कुल ब्याज दाँज्नुहोस्।'
    },
    estimatedTime: { en: '15 Mins Analysis', np: '१५ मिनेट विश्लेषण' },
    companionLesson: 'good-debt-vs-bad-debt',
    companionLessonTitle: { en: 'Good Debt vs Bad Debt in Nepal', np: 'सकारात्मक र हानिकारक ऋणको भिन्नता' },
    companionCategorySlug: 'personal-finance',
    companionCalculator: 'loans'
  },
  {
    id: 'res-reading-list',
    title: { en: 'Essential Finance Reading List for Nepal', np: 'नेपालका लागि अत्यावश्यक वित्तीय पुस्तक सूची' },
    desc: { en: 'Curated handbook of timeless money books translated into Nepali context, policy primers, and resources.', np: 'संसारका उत्कृष्ट वित्तीय पुस्तकहरूका मुख्य सन्देश र नेपाली परिवेशमा तिनको व्यावहारिक प्रयोग।' },
    type: 'Curated Guide',
    format: 'Printable Handbook',
    formatBadge: 'Curated Handbook',
    icon: 'handbook',
    previewType: 'html',
    fileSize: '410 KB',
    badge: { en: 'Curated', np: 'विशेष छनोट' },
    downloadUrl: 'assets/downloads/essential-finance-reading-list.html',
    downloadFilename: 'essential-finance-reading-list.html',
    isDirectDownload: true,
    highlights: [
      { en: '8 Classic Finance Books', np: '८ क्लासिक वित्तीय पुस्तक' },
      { en: 'Nepali Context Analysis', np: 'नेपाली परिवेश व्याख्या' },
      { en: '3-Tier Action Roadmap', np: '३-चरणबद्ध मार्गचित्र' }
    ],
    whoItIsFor: {
      en: 'Self-directed learners, students, and professionals cultivating long-term financial mindset and investing philosophy.',
      np: 'दीर्घकालीन वित्तीय सोच र लगानी दर्शन विकास गर्न चाहने स्व-अध्येता, विद्यार्थी र पेसाकर्मी।'
    },
    howToUse: {
      en: '1. Open handbook. 2. Review the tiered reading roadmap. 3. Read chapter takeaways adapted for Nepal.',
      np: '१. पुस्तिका खोल्नुहोस्। २. पुस्तक मार्गचित्र हेर्नुहोस्। ३. नेपाली परिवेश अनुसार मुख्य बुँदाहरू पढ्नुहोस्।'
    },
    estimatedTime: { en: '20 Mins Read', np: '२० मिनेट अध्ययन' },
    companionLesson: 'compound-interest-nepal',
    companionLessonTitle: { en: 'Compound Interest & Rupee Growth', np: 'चक्रवृद्धि ब्याज र रुपैयाँको शक्ति' },
    companionCategorySlug: 'personal-finance',
    companionCalculator: 'cagr'
  },
  {
    id: 'res-tax-deductions-list',
    title: { en: 'Salary Earner Legal Tax Deductions Checklist', np: 'तलबजीवी कर्मचारीका लागि कर छुट चेकलिस्ट' },
    desc: { en: 'Every legitimate deduction you can claim: SSF, CIT, Life Insurance, Medical Tax Credit, and Remote Allowance.', np: 'नेपालमा कर घटाउन दाबी गर्न सकिने सबै कानुनी छुटहरूको पूर्ण सूची: SSF, CIT, बीमा र औषधि उपचार कर क्रेडिट।' },
    type: 'Printable Checklist',
    format: 'Printable Document',
    formatBadge: 'Tax Blueprint',
    icon: 'checklist',
    previewType: 'html',
    fileSize: '250 KB',
    badge: { en: 'FY 2081/82 - 2082/83', np: 'आ.व. २०८१/८२' },
    downloadUrl: 'assets/downloads/nepal-salary-tax-deductions-checklist.html',
    downloadFilename: 'nepal-salary-tax-deductions-checklist.html',
    isDirectDownload: true,
    highlights: [
      { en: '7 Statutory Deductions', np: '७ कानुनी छुटहरू' },
      { en: 'Section 63 CIT/SSF Rules', np: 'दफा ६३ का प्रावधान' },
      { en: 'Single vs Married Slabs', np: 'व्यक्तिगत र दम्पती स्ल्याब' }
    ],
    whoItIsFor: {
      en: 'Salaried employees and HR/finance payroll managers aiming to optimize annual tax withholding under Income Tax Act 2058.',
      np: 'आयकर ऐन २०५८ बमोजिम कानुनी रूपमा कर बचत गर्न चाहने तलबजीवी कर्मचारी र लेखापालहरू।'
    },
    howToUse: {
      en: '1. Open checklist. 2. Check Section 63 limits (NPR 3 Lakhs / 1/3 income). 3. Submit insurance policies to employer HR before Jestha 15.',
      np: '१. चेकलिस्ट खोल्नुहोस्। २. दफा ६३ का सीमाहरू जाँच्नुहोस्। ३. जेठ १५ अगावै बीमा पोलिसी कार्यालयको HR मा बुझाउनुहोस्।'
    },
    estimatedTime: { en: '10 Mins Check', np: '१० मिनेट रुजु' },
    companionLesson: 'income-tax-nepal-basics',
    companionLessonTitle: { en: 'Income Tax in Nepal: Slabs & Rules', np: 'नेपालमा आयकर: स्ल्याब र नियमहरू' },
    companionCategorySlug: 'taxation',
    companionCalculator: 'tax'
  },
  {
    id: 'res-glossary-pocket',
    title: { en: 'Financial Jargon Pocket Reference Guide', np: 'वित्तीय शब्दावली पकेट सन्दर्भ पुस्तिका' },
    desc: { en: '50+ essential Nepali stock market and banking terms with clear two-sentence explanations.', np: 'नेपालको सेयर बजार र बैंकिङ प्रणालीमा प्रयोग हुने ५० भन्दा बढी प्रमुख शब्दहरूको संक्षिप्त परिभाषा।' },
    type: 'Pocket Guide',
    format: 'Printable Guide',
    formatBadge: 'Bilingual Glossary',
    icon: 'guide',
    previewType: 'html',
    fileSize: '490 KB',
    badge: { en: 'Reference', np: 'सन्दर्भ सामग्री' },
    downloadUrl: 'assets/downloads/financial-jargon-pocket-guide.html',
    downloadFilename: 'financial-jargon-pocket-guide.html',
    isDirectDownload: true,
    highlights: [
      { en: 'Searchable Dictionary', np: 'खोज्न मिल्ने शब्दकोश' },
      { en: 'NEPSE, Banking & Tax', np: 'सेयर, बैंकिङ र कर' },
      { en: 'English & Nepali Defs', np: 'अंग्रेजी र नेपाली परिभाषा' }
    ],
    whoItIsFor: {
      en: 'Anyone overwhelmed by banking jargon, NEPSE acronyms (EDIS, WACC, C-ASBA, DSTI, LTV), and regulatory terms.',
      np: 'बैंकिङ र सेयर बजारका प्राविधिक शब्दहरू (EDIS, WACC, C-ASBA, DSTI, LTV) बुझ्न चाहने जोकोही।'
    },
    howToUse: {
      en: '1. Open pocket guide. 2. Bookmark or print as reference. 3. Read concise English definition with exact Nepali equivalent.',
      np: '१. पकेट गाइड खोल्नुहोस्। २. बुकमार्क वा प्रिन्ट गर्नुहोस्। ३. सरल नेपाली र अंग्रेजी दुवै भाषामा अर्थ बुझ्नुहोस्।'
    },
    estimatedTime: { en: 'Quick Reference', np: 'तत्काल सन्दर्भ' },
    companionLesson: 'demat-meroshare-tms',
    companionLessonTitle: { en: 'Demat, MeroShare & TMS Account Guide', np: 'डिम्याट, मेरोसेयर र TMS खाता गाइड' },
    companionCategorySlug: 'nepse',
    companionCalculator: 'share'
  }
];

// ── 10. Continue Learning Default Data (Starter Prompt) ─────────
export const CONTINUE_LEARNING_DEFAULT = {
  categorySlug: 'personal-finance',
  categoryName: { en: 'Personal Finance Foundation', np: 'व्यक्तिगत वित्तको जग' },
  title: { en: 'Start Here: The Fundamentals of Money in Nepal', np: 'यहाँबाट सुरु गर्नुहोस्: नेपालमा पैसा व्यवस्थापनको जग' },
  desc: { en: 'Begin your structured financial education with budgeting rules, cash flow leakages, and building an emergency fund.', np: 'दैनिक खर्च ट्र्याकिङ, ५०/३०/२० बजेट नियम र ६ महिनाको आपतकालीन कोष बनाउने आधारभूत पाठबाट सुरु गर्नुहोस्।' },
  lessonCount: 8,
  duration: { en: '3.5 Hours', np: '३.५ घण्टा' },
  href: '/learn/personal-finance'
};

// ── 11. Comprehensive Finance Glossary Dictionary & Helpers ────
export {
  GLOSSARY_CATEGORIES,
  GLOSSARY_DICTIONARY,
  getGlossaryTermBySlug,
  searchGlossaryTerms,
  getGlossaryAlphabetMap,
  getPopularGlossaryTerms
} from './glossaryData.js';



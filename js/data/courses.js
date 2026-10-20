// risePaisa - Course Catalog Data
const COURSES = [
  {
    id: 1,
    slug: 'nepse-stock-market-basics',
    aliases: ['nepse-masterclass', 'share-market-full-course-nepse'],
    title: 'Share Market Full Course (NEPSE)',
    shortDescription: "A complete learning program to understand Nepal's stock market (NEPSE), from beginner basics to technical analysis, fundamental analysis, and practical stock evaluation.",
    fullDescription: `Share Market Full Course (NEPSE) is a complete learning program for anyone who wants to understand Nepal's stock market, from the basics to practical stock analysis.

You will learn how the share market works, how to open and use share market accounts in Nepal, how to read stock charts, and how to analyze companies before making investment decisions.

The course covers both technical analysis and fundamental analysis. You will also learn about trading indicators, price movements, risk management, stock selection, and the practical analysis of companies listed on NEPSE.

The course includes more than 20 hours of video lessons, learning resources such as PDFs and Excel sheets, weekly live Q&A sessions, and regular course updates. More videos will be added over time.

The goal is to help you build a strong understanding of the Nepalese share market and make more informed investment decisions.`,
    price: 2999,
    currency: 'NPR',
    instructor: 'Aakash Das',
    instructorRole: 'Founder of RisePaisa',
    instructorNote: 'This course is primarily taught by Aakash Das, Founder of RisePaisa. Selected lessons are also taught by Bikash Das.',
    category: 'NEPSE & Investing',
    level: 'Beginner to Advanced',
    duration: '20+ Hours',
    format: 'Beginner Friendly',
    compatibility: 'Mobile + Desktop',
    hideDiscount: true,
    hideLessonCount: true,
    thumbnail: null,
    priceLabels: [
      'Beginner Friendly',
      'Beginner to Advanced',
      'Mobile + Desktop'
    ],
    featuresList: [
      'Beginner Friendly',
      'Beginner to Advanced',
      '20+ Hours of Video Lessons',
      'Weekly Course Updates',
      'Weekly Live Q&A Sessions',
      'PDF and Excel Learning Resources',
      'Mobile + Desktop'
    ],
    benefitsTitle: 'What You Will Get',
    whatYouWillGet: [
      {
        title: 'Complete Fundamental Analysis',
        description: 'Learn how to evaluate companies using financial statements, business performance, and important financial ratios.'
      },
      {
        title: 'Complete Technical Analysis',
        description: 'Learn how to read stock charts, understand market trends, analyze price movements, and use technical indicators.'
      },
      {
        title: '20+ Hours of Video Lessons',
        description: 'Access structured video lessons covering the share market, technical analysis, fundamental analysis, and practical stock analysis.'
      },
      {
        title: 'Weekly Course Updates',
        description: 'Receive new educational content as the course is expanded. More videos will be added over time.'
      },
      {
        title: 'PDF Learning Resources',
        description: 'Get supporting PDF materials to help you understand and revise important concepts.'
      },
      {
        title: 'Excel Sheets and Practical Tools',
        description: 'Use relevant Excel sheets and learning tools to support your stock analysis and calculations.'
      },
      {
        title: 'Weekly Live Q&A Sessions',
        description: 'Participate in weekly live question-and-answer sessions to clarify course concepts and ask relevant questions.'
      },
      {
        title: 'Beginner-Friendly Teaching',
        description: 'Learn difficult financial concepts through simple explanations, practical examples, and structured lessons.'
      },
      {
        title: 'Beginner-to-Advanced Learning Path',
        description: 'Progress from basic share market concepts to technical analysis, fundamental analysis, risk management, and practical stock evaluation.'
      },
      {
        title: 'Mobile + Desktop Access',
        description: 'Learn using a compatible mobile device or desktop computer.'
      }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: 'MODULE 1: INTRODUCTION TO THE SHARE MARKET',
        goal: "Understand the basic concepts of Nepal's share market before investing.",
        lessons: [
          {
            rank: 1,
            title: 'What Is the Share Market?',
            videoTitle: 'What is Share Market?',
            duration: '7:41',
            shortDescription: "Introduction to Nepal's financial architecture, understanding how corporate capital formation works through NEPSE, the role of public equity ownership, and realistic financial expectations for beginners.",
            resources: [
              {
                title: 'NEPSE First-Time Investor Checklist',
                url: '/assets/downloads/nepse-first-time-investor-checklist.html',
                fileType: 'checklist'
              }
            ]
          },
          {
            rank: 2,
            title: 'Understanding the Key Participants in the Share Market',
            videoTitle: 'Important Parts of Share Market: Investor, CDSC, Broker, SEBON',
            duration: '7:10',
            shortDescription: "Deep-dive into the four regulatory and structural pillars of Nepal's capital market: SEBON (market regulator), NEPSE (exchange operator), CDSC (clearing and central depository), and licensed stockbrokers."
          },
          {
            rank: 3,
            title: 'Primary Market vs. Secondary Market',
            videoTitle: 'Primary Market Vs Secondary Market',
            duration: '8:22',
            shortDescription: "Understanding the operational mechanics dividing the primary market (IPOs/FPOs at fixed par value via C-ASBA) and the secondary market (continuous matching price discovery on NEPSE)."
          },
          {
            rank: 4,
            title: 'How Companies Divide Ownership into Shares',
            videoTitle: 'What is Dilution? How Company Divides into Share',
            duration: '3:59',
            shortDescription: "How corporate enterprises divide equity ownership into authorized, issued, and paid-up capital, how equity dilution works when issuing new shares, and calculating percentage ownership."
          }
        ]
      },
      {
        moduleNumber: 2,
        title: 'MODULE 2: SHARE MARKET ACCOUNTS AND GETTING STARTED',
        goal: 'Understand the accounts and infrastructure required to participate in NEPSE.',
        lessons: [
          {
            rank: 5,
            title: 'Understanding DEMAT, MeroShare and Trading Accounts',
            videoTitle: 'What are Demat Account, Mero Share and Trading Account?',
            duration: '1:51',
            shortDescription: "Essential infrastructure requirements for every Nepali investor: 16-digit DEMAT BOID numbers, MeroShare portal navigation, CRN verification at commercial banks, and broker TMS accounts."
          },
          {
            rank: 6,
            title: 'How to Open Share Market Accounts in Nepal',
            videoTitle: 'How to Open Share Market Accounts',
            duration: '10:17',
            shortDescription: "Step-by-step account opening walkthrough across depository participants (DPs) and stockbrokers, KYC documentation standards, avoiding name-mismatch rejections, and C-ASBA activation."
          }
        ]
      },
      {
        moduleNumber: 3,
        title: 'MODULE 3: INTRODUCTION TO TECHNICAL ANALYSIS',
        goal: 'Learn how to read stock charts and understand price movements.',
        lessons: [
          {
            rank: 7,
            title: 'Technical Analysis: The Complete Introduction',
            videoTitle: 'Technical Analysis Part 1',
            duration: '48:10',
            shortDescription: "Foundation of technical analysis: understanding auction market theory, price action reflecting aggregate supply and demand, Dow Theory principles, and why charts visualize crowd psychology."
          },
          {
            rank: 8,
            title: 'Understanding Market Trends and Trend Analysis',
            videoTitle: 'Types of Trend and Trend Analysis',
            duration: '42:50',
            shortDescription: "Market structure and trend identification: defining uptrends (higher highs & higher lows), downtrends (lower highs & lower lows), consolidation channels, and drawing multi-touch trendlines."
          }
        ]
      },
      {
        moduleNumber: 4,
        title: 'MODULE 4: CHART READING AND PRICE ACTION',
        goal: 'Learn to interpret price movements, chart formations, and market behaviour.',
        lessons: [
          {
            rank: 9,
            title: 'Understanding the Relationship Between Price and Volume',
            videoTitle: 'Relation Between Price And Volume',
            duration: '22:06',
            shortDescription: "Interpreting volume as the fuel of price action: analyzing volume expansion on breakouts, recognizing divergence between price and trading turnover, and detecting institutional accumulation vs distribution."
          },
          {
            rank: 10,
            title: 'Understanding Chart Patterns: Part 1',
            videoTitle: 'Types of Chart Patterns: Part 1',
            duration: '33:12',
            shortDescription: "Comprehensive study of classical reversal chart patterns in NEPSE: Head & Shoulders, Inverse Head & Shoulders, Double Tops, Double Bottoms, and identifying neckline breakout confirmation."
          },
          {
            rank: 11,
            title: 'Understanding Chart Patterns: Part 2',
            videoTitle: 'Types of Chart Pattern: Part 2',
            duration: '37:04',
            shortDescription: "Continuation and bilateral chart patterns: Bullish and Bearish Flags, Pennants, Symmetrical Triangles, Ascending Triangles, and measuring minimum price projection targets."
          },
          {
            rank: 12,
            title: 'Price Action Trading Strategy',
            videoTitle: 'Price Action Trading Strategy',
            duration: '55:57',
            shortDescription: "End-to-end price action trading methodology: multi-timeframe analysis (Daily and Weekly), identifying liquidity pools, entry trigger candlestick signals, and trading with the prevailing market trend."
          }
        ]
      },
      {
        moduleNumber: 5,
        title: 'MODULE 5: TECHNICAL INDICATORS AND TRADING TOOLS',
        goal: 'Understand technical indicators and how they can support chart analysis.',
        lessons: [
          {
            rank: 13,
            title: 'Moving Averages and Supertrend',
            videoTitle: 'Indicator Part 1: Simple Moving Average, Super Trend',
            duration: '22:57',
            shortDescription: "Trend-following indicators: Simple Moving Averages (20, 50, 200 SMA) and Exponential Moving Averages (EMA), Golden Cross and Death Cross signals, and dynamic support/resistance using Supertrend."
          },
          {
            rank: 14,
            title: 'Volume Indicator and Volume Analysis',
            videoTitle: 'Indicator Part 2: Volume',
            duration: '9:21',
            shortDescription: "Advanced volume analysis on NEPSE: On-Balance Volume (OBV), Volume Moving Averages, spotting climactic volume at market tops and capitulation volume at market bottoms."
          },
          {
            rank: 15,
            title: 'MACD Indicator: Understanding Momentum',
            videoTitle: 'Indicator Part 3: MACD',
            duration: '23:21',
            shortDescription: "Momentum analysis with the MACD (Moving Average Convergence Divergence): MACD line, Signal line, zero-line crossovers, histogram momentum shifts, and identifying regular and hidden divergence."
          },
          {
            rank: 16,
            title: 'Fibonacci Retracement: Identifying Potential Price Levels',
            videoTitle: 'Indicator Part 4: Fibonacci Retracement',
            duration: '17:40',
            shortDescription: "Fibonacci Retracement and Extension analysis: identifying golden ratio pullbacks (38.2%, 50%, 61.8%) during healthy NEPSE corrections, and projecting take-profit expansion levels."
          }
        ]
      },
      {
        moduleNumber: 6,
        title: 'MODULE 6: RISK MANAGEMENT AND TRADING DISCIPLINE',
        goal: 'Learn how to manage risk before applying trading strategies.',
        lessons: [
          {
            rank: 17,
            title: 'Complete Guide to Risk Management in the Share Market',
            videoTitle: 'Everything About Risk Management in the Share Market',
            duration: '1:11:27',
            shortDescription: "The mathematical foundation of capital preservation: why survival precedes profits, calculating the risk-to-reward ratio (minimum 1:2), and enforcing the 1-2% maximum portfolio risk rule."
          },
          {
            rank: 18,
            title: 'Stop-Loss: Everything You Need to Know',
            videoTitle: 'Everything You Need to Learn about the StopLoss',
            duration: '1:08:30',
            shortDescription: "Complete stop-loss masterclass: volatility-based stops (ATR), structural swing-point stops, trailing stops to lock in gains, and conquering emotional biases like loss aversion and revenge trading."
          }
        ]
      },
      {
        moduleNumber: 7,
        title: 'MODULE 7: FUNDAMENTAL ANALYSIS AND STOCK SELECTION',
        goal: 'Learn how to evaluate companies and select stocks using fundamental analysis.',
        lessons: [
          {
            rank: 19,
            title: 'How to Select Stocks Using Fundamental Analysis',
            videoTitle: 'How to Select Stock By Fundamental Analysis',
            duration: '38:00',
            shortDescription: "Fundamental analysis framework for Nepali companies: evaluating the Income Statement, Balance Sheet, and Cash Flow Statement; interpreting revenue growth, operating profit margins, and net profits."
          },
          {
            rank: 20,
            title: 'The Complete Stock Selection Process',
            videoTitle: 'Stock Selection Full Process',
            duration: '1:11:17',
            shortDescription: "Comprehensive stock selection methodology: combining valuation ratios (P/E, P/B, EPS, ROE) with banking credit quality metrics (NPL, Capital Adequacy Ratio, Net Interest Margin) to identify high-quality long-term compounders."
          }
        ]
      },
      {
        moduleNumber: 8,
        title: 'MODULE 8: PRACTICAL STOCK ANALYSIS',
        goal: 'Apply stock analysis concepts to real companies listed on NEPSE.',
        lessons: [
          {
            rank: 21,
            title: 'Fundamental Stock Analysis: Laxmi Bank',
            videoTitle: 'Complete Analysis of Laxmi Bank Stock (Past 5 Years)',
            duration: '45:53',
            shortDescription: "Case study walkthrough: historical 5-year fundamental analysis of Laxmi Bank (LBL), analyzing loan book expansion, deposit growth, non-performing loan management, and merger valuation implications."
          },
          {
            rank: 22,
            title: 'Fundamental Stock Analysis: Nabil Bank',
            videoTitle: 'Complete Analysis of Nabil Bank Stock (Past 5 Years)',
            duration: '1:08:35',
            shortDescription: "Case study walkthrough: historical 5-year fundamental analysis of Nabil Bank (NABIL), dissecting cost of funds, return on equity (ROE), capital adequacy, dividend track record, and competitive moats."
          }
        ]
      }
    ],
    disclaimerText: "This course is provided solely for educational and informational purposes. It is intended to help learners understand Nepal's share market, investment concepts, fundamental analysis, technical analysis, and risk management. Neither RisePaisa nor its instructors provide personalized investment advice, guaranteed financial returns, or portfolio management services through this course. The content should not be treated as a recommendation to buy, sell, or hold any particular security. All investment decisions are your own responsibility, and investing in the stock market involves financial risk, including the possible loss of capital. Past performance does not guarantee future results. RisePaisa and its instructors are not acting as your personal investment advisers or as SEBON-licensed investment advisers through this educational course. Consult an appropriately qualified and authorized professional where necessary.",
    targetAudience: 'Beginners and first-time investors who want to understand NEPSE; College students and young professionals seeking structured financial education; Intermediate investors looking to master chart reading and stock evaluation; Anyone who wants to analyze companies before making investment decisions in Nepal',
    previewVideoUrl: 'https://youtu.be/ziVeMxMF4e8',
    previewVideoDuration: '45 Minutes',
    featured: true,
    isPublished: true
  },
  {
    id: 2,
    slug: 'personal-finance-masterclass',
    title: 'Personal Finance Masterclass',
    shortDescription: 'Master budgeting, saving, and building an emergency fund, all tailored for life in Nepal.',
    fullDescription: `Take control of your financial future with this practical personal finance course designed specifically for Nepalis. From creating your first budget to understanding the power of compound interest, this course breaks down complex financial concepts into simple, actionable steps.\n\nYou'll learn strategies that work with Nepali salaries, expenses, and financial products. Whether you earn NPR 20,000 or NPR 200,000 a month, these principles will help you save more, spend wisely, and build lasting wealth.`,
    price: 999,
    currency: 'NPR',
    instructor: 'Aakash Das',
    category: 'Personal Finance',
    thumbnail: null,
    whatYouLearn: [
      'Create a realistic monthly budget that works',
      'Build an emergency fund (कति र कसरी)',
      'Understand the difference between good debt and bad debt',
      'Set and achieve short-term and long-term financial goals',
      'Learn the 50/30/20 budgeting rule adapted for Nepal',
      'Understand Fixed Deposits, savings accounts, and interest rates in Nepal',
      'Protect yourself from common financial scams'
    ],
    curriculum: [
      {
        title: 'Module 0: Course Introduction',
        lessons: ['What this course will help you achieve (clear financial roadmap)', 'How money actually works in Nepal (reality vs assumptions)', 'How to use this course for maximum results']
      },
      {
        title: 'Module 1: Financial Reality & Foundations',
        lessons: ['The real financial condition of Nepali households', 'How a responsible person manages money (income → expenses → investment)', 'Inflation explained (why money loses value over time)', 'Why saving in bank alone is not enough']
      },
      {
        title: 'Module 2: Emergency & Financial Stability',
        lessons: ['What is an emergency fund and why it is critical', 'How much emergency fund you actually need (Nepal context)', 'Where to keep your emergency fund safely', 'Common mistakes people make with savings']
      },
      {
        title: 'Module 3: Insurance & Family Protection',
        lessons: ['Insurance explained (life, health, term vs endowment)', 'Which insurance you actually need in Nepal', 'How insurance agents mislead you (hidden reality)', 'How to choose the right insurance plan']
      },
      {
        title: "Module 4: Securing Your Child's Future",
        lessons: ['Real cost of education in Nepal (future projection)', 'How to build long-term funds for your child', 'Insurance vs investment for child planning (what actually works)']
      },
      {
        title: 'Module 5: Loans, EMI & Debt Control',
        lessons: ['What is EMI and how loans actually work', 'EMI amortization explained simply', 'Good debt vs bad debt (Nepal examples)', 'How to use loan calculators properly']
      },
      {
        title: 'Module 6: Rent vs Buying a House',
        lessons: ['Rent vs buy: complete financial comparison', 'How much salary you need to buy a house', 'Real estate reality in Kathmandu & Nepal', 'Hidden costs of owning a house']
      },
      {
        title: 'Module 7: Investing Fundamentals',
        lessons: ['What is investing and how wealth is created', 'Types of investments available in Nepal', 'Risk vs return explained clearly', 'Why most people fail in investing']
      },
      {
        title: 'Module 8: Mutual Funds & SIP (Practical Investing)',
        lessons: ['Mutual funds explained (complete beginner guide)', 'Open-ended vs closed-ended mutual funds', 'SIP explained (how it builds wealth over time)', 'How to use SIP calculators (practical demo)']
      },
      {
        title: 'Module 9: Nepal-Specific Financial Risks',
        lessons: ['Sahakari (cooperative) system explained', 'Risks, scams, and failures in Nepal', 'How to protect your money from fraud']
      },
      {
        title: 'Module 10: Wealth Mindset & Youth Reality',
        lessons: ['Why saving alone won\'t make you rich', 'Skill vs degree (what actually creates income)', 'Who succeeds financially and why (real patterns)', 'The illusion of being "smart" without execution']
      },
      {
        title: 'Module 11: Business Basics (Advanced Level)',
        lessons: ['What is a business and how it works', 'How to start a business in Nepal (basic steps)', 'Company registration and tax basics', 'Common mistakes beginners make in business']
      }
    ],
    targetAudience: 'Anyone who wants to take full control of their finances; People dealing with loans, responsibilities, and future planning; Individuals who want to invest correctly and avoid financial mistakes; Anyone serious about building long-term wealth in Nepal',
    previewVideoUrl: 'https://youtu.be/vqKypJh0xxo',
    featured: true,
    isPublished: true
  }
];

// Runtime cache for authoritative course data saved in the admin portal or fetched via API
const _runtimeCourseCache = new Map();

/**
 * Clean course normalization helper to ensure both topics and curriculum are always mirrored
 */
function _harmonizeCourse(c) {
  if (!c || typeof c !== 'object') return null;
  const course = { ...c };

  // Harmonize description
  course.description = course.description || course.fullDescription || course.shortDescription || '';
  course.fullDescription = course.fullDescription || course.description || course.shortDescription || '';
  course.published = course.published !== undefined ? Boolean(course.published) : (course.isPublished !== false);
  course.isPublished = course.published;

  // Harmonize topics and curriculum
  if (Array.isArray(course.topics) && course.topics.length > 0) {
    if (!Array.isArray(course.curriculum) || course.curriculum.length === 0) {
      course.curriculum = course.topics.map(t => ({
        moduleNumber: t.displayOrder || 1,
        title: t.title || '',
        goal: t.shortDescription || '',
        published: t.published !== false,
        lessons: (t.lessons || []).map(l => ({
          rank: l.displayOrder || 1,
          title: l.title || '',
          duration: l.duration || '',
          shortDescription: l.shortDescription || '',
          youtubeUrl: l.youtubeUrl || null,
          isFree: Boolean(l.isFree),
          published: l.published !== false,
          resources: l.resources || []
        }))
      }));
    }
  } else if (Array.isArray(course.curriculum) && course.curriculum.length > 0) {
    if (!Array.isArray(course.topics) || course.topics.length === 0) {
      course.topics = course.curriculum.map((m, mIdx) => ({
        id: m.id || `topic-${m.moduleNumber || mIdx + 1}`,
        title: m.title || `Module ${m.moduleNumber || mIdx + 1}`,
        displayOrder: m.moduleNumber || mIdx + 1,
        shortDescription: m.goal || '',
        published: m.published !== false,
        lessons: (m.lessons || []).map((l, lIdx) => {
          if (typeof l === 'string') {
            return {
              id: `lesson-${m.moduleNumber || mIdx + 1}-${lIdx + 1}`,
              title: l,
              displayOrder: lIdx + 1,
              published: true,
              isFree: mIdx === 0 && lIdx === 0,
              resources: []
            };
          }
          return {
            id: l.id || `lesson-${l.rank || lIdx + 1}`,
            title: l.title || `Lesson ${l.rank || lIdx + 1}`,
            duration: l.duration || '',
            shortDescription: l.shortDescription || '',
            youtubeUrl: l.youtubeUrl || null,
            displayOrder: l.rank || lIdx + 1,
            published: l.published !== false,
            isFree: l.isFree !== undefined ? Boolean(l.isFree) : (mIdx === 0 && lIdx === 0),
            resources: l.resources || []
          };
        })
      }));
    }
  }

  // Derive previewVideoUrl from first lesson if set
  if (Array.isArray(course.topics) && course.topics[0]?.lessons?.[0]?.youtubeUrl) {
    course.previewVideoUrl = course.topics[0].lessons[0].youtubeUrl;
  }

  return course;
}

/**
 * Register or update a course in the active runtime cache.
 */
export function updateCourseInCache(course) {
  if (!course || typeof course !== 'object') return;
  const harmonized = _harmonizeCourse(course);
  if (!harmonized) return;

  if (harmonized.slug) {
    _runtimeCourseCache.set(harmonized.slug.toLowerCase(), harmonized);
  }
  if (harmonized.id) {
    _runtimeCourseCache.set(String(harmonized.id).toLowerCase(), harmonized);
  }
  if (Array.isArray(harmonized.aliases)) {
    for (const a of harmonized.aliases) {
      if (a) _runtimeCourseCache.set(String(a).toLowerCase(), harmonized);
    }
  }
}

/**
 * Remove a course from the active runtime cache.
 */
export function removeCourseFromCache(slugOrId) {
  if (!slugOrId) return;
  const clean = String(slugOrId).trim().toLowerCase();
  _runtimeCourseCache.delete(clean);
}

export function getAllCourses() {
  const coursesMap = new Map();

  // 1. Static baseline
  for (const c of COURSES) {
    const harmonized = _harmonizeCourse(c);
    coursesMap.set(harmonized.slug.toLowerCase(), harmonized);
  }

  // 2. Overlay localStorage in browser environment
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const knownSlugs = new Set(Array.from(coursesMap.keys()));

      // Read from rp_courses_index if saved
      const indexStr = window.localStorage.getItem('rp_courses_index');
      if (indexStr) {
        const parsedIdx = JSON.parse(indexStr);
        if (Array.isArray(parsedIdx)) {
          parsedIdx.forEach(s => s && knownSlugs.add(String(s).trim().toLowerCase()));
        }
      }

      // Also scan any localStorage keys starting with rp_course_cache_
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (key && key.startsWith('rp_course_cache_')) {
          const slugPart = key.slice('rp_course_cache_'.length).trim().toLowerCase();
          if (slugPart) knownSlugs.add(slugPart);
        }
      }

      for (const slug of knownSlugs) {
        try {
          const raw = window.localStorage.getItem(`rp_course_cache_${slug}`);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
              const harmonized = _harmonizeCourse(parsed);
              if (harmonized && harmonized.slug) {
                coursesMap.set(harmonized.slug.toLowerCase(), harmonized);
              }
            }
          }
        } catch {}
      }
    } catch {}
  }

  // 3. Overlay in-memory runtime cache
  for (const [key, course] of _runtimeCourseCache.entries()) {
    if (course && course.slug && key === course.slug.toLowerCase()) {
      coursesMap.set(course.slug.toLowerCase(), course);
    }
  }

  const result = Array.from(coursesMap.values());
  result.sort((a, b) => (Number(a.displayOrder) || 0) - (Number(b.displayOrder) || 0));
  return result;
}

export function getCourses() {
  return getAllCourses().filter(c => c.published !== false && c.isPublished !== false);
}

export function getCourseBySlug(slug) {
  if (!slug) return null;
  const clean = String(slug).trim().toLowerCase();

  // 1. Check in-memory runtime cache
  if (_runtimeCourseCache.has(clean)) {
    return _runtimeCourseCache.get(clean);
  }

  // 2. Check localStorage in browser
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const raw = window.localStorage.getItem(`rp_course_cache_${clean}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          const harmonized = _harmonizeCourse(parsed);
          if (harmonized) {
            updateCourseInCache(harmonized);
            return harmonized;
          }
        }
      }
    } catch {}
  }

  // 3. Fallback to getAllCourses() (which checks aliases and IDs)
  const all = getAllCourses();
  const match = all.find(c =>
    (c.slug && c.slug.toLowerCase() === clean) ||
    (String(c.id).toLowerCase() === clean) ||
    (Array.isArray(c.aliases) && c.aliases.map(a => String(a).toLowerCase()).includes(clean))
  );

  if (match) {
    updateCourseInCache(match);
    return match;
  }

  return null;
}

export default COURSES;

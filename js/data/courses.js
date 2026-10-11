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
            duration: '7:41'
          },
          {
            rank: 2,
            title: 'Understanding the Key Participants in the Share Market',
            videoTitle: 'Important Parts of Share Market: Investor, CDSC, Broker, SEBON',
            duration: '7:10'
          },
          {
            rank: 3,
            title: 'Primary Market vs. Secondary Market',
            videoTitle: 'Primary Market Vs Secondary Market',
            duration: '8:22'
          },
          {
            rank: 4,
            title: 'How Companies Divide Ownership into Shares',
            videoTitle: 'What is Dilution? How Company Divides into Share',
            duration: '3:59'
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
            duration: '1:51'
          },
          {
            rank: 6,
            title: 'How to Open Share Market Accounts in Nepal',
            videoTitle: 'How to Open Share Market Accounts',
            duration: '10:17'
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
            duration: '48:10'
          },
          {
            rank: 8,
            title: 'Understanding Market Trends and Trend Analysis',
            videoTitle: 'Types of Trend and Trend Analysis',
            duration: '42:50'
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
            duration: '22:06'
          },
          {
            rank: 10,
            title: 'Understanding Chart Patterns: Part 1',
            videoTitle: 'Types of Chart Patterns: Part 1',
            duration: '33:12'
          },
          {
            rank: 11,
            title: 'Understanding Chart Patterns: Part 2',
            videoTitle: 'Types of Chart Pattern: Part 2',
            duration: '37:04'
          },
          {
            rank: 12,
            title: 'Price Action Trading Strategy',
            videoTitle: 'Price Action Trading Strategy',
            duration: '55:57'
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
            duration: '22:57'
          },
          {
            rank: 14,
            title: 'Volume Indicator and Volume Analysis',
            videoTitle: 'Indicator Part 2: Volume',
            duration: '9:21'
          },
          {
            rank: 15,
            title: 'MACD Indicator: Understanding Momentum',
            videoTitle: 'Indicator Part 3: MACD',
            duration: '23:21'
          },
          {
            rank: 16,
            title: 'Fibonacci Retracement: Identifying Potential Price Levels',
            videoTitle: 'Indicator Part 4: Fibonacci Retracement',
            duration: '17:40'
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
            duration: '1:11:27'
          },
          {
            rank: 18,
            title: 'Stop-Loss: Everything You Need to Know',
            videoTitle: 'Everything You Need to Learn about the StopLoss',
            duration: '1:08:30'
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
            duration: '38:00'
          },
          {
            rank: 20,
            title: 'The Complete Stock Selection Process',
            videoTitle: 'Stock Selection Full Process',
            duration: '1:11:17'
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
            duration: '45:53'
          },
          {
            rank: 22,
            title: 'Fundamental Stock Analysis: Nabil Bank',
            videoTitle: 'Complete Analysis of Nabil Bank Stock (Past 5 Years)',
            duration: '1:08:35'
          }
        ]
      }
    ],
    disclaimerText: "This course is provided solely for educational and informational purposes. It is intended to help learners understand Nepal's share market, investment concepts, fundamental analysis, technical analysis, and risk management. Neither RisePaisa nor its instructors provide personalized investment advice, guaranteed financial returns, or portfolio management services through this course. The content should not be treated as a recommendation to buy, sell, or hold any particular security. All investment decisions are your own responsibility, and investing in the stock market involves financial risk, including the possible loss of capital. Past performance does not guarantee future results. RisePaisa and its instructors are not acting as your personal investment advisers or as SEBON-licensed investment advisers through this educational course. Consult an appropriately qualified and authorized professional where necessary.",
    targetAudience: 'Beginners and first-time investors who want to understand NEPSE; College students and young professionals seeking structured financial education; Intermediate investors looking to master chart reading and stock evaluation; Anyone who wants to analyze companies before making investment decisions in Nepal',
    previewVideoUrl: 'https://www.youtube.com/watch?v=ziVeMxMF4e8',
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

export function getCourses() {
  return COURSES.filter(c => c.isPublished !== false);
}

export function getAllCourses() {
  return COURSES;
}

export function getCourseBySlug(slug) {
  return COURSES.find(c => c.slug === slug || (c.aliases && c.aliases.includes(slug))) || null;
}

export default COURSES;

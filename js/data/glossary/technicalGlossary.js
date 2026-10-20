// ==============================================
// risePaisa - Technical Analysis Glossary Module
// Core price action and technical chart analysis encyclopedia entries (Candlestick, S&R, RSI, MA, Stop-Loss)
// ==============================================

export const TECHNICAL_GLOSSARY = [
  // 1. Candlestick
  {
    slug: 'candlestick',
    term: 'Candlestick Chart',
    termNp: 'क्यान्डलस्टिक चार्ट (Candlestick Chart)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'C',
    abbreviation: 'Candle',
    synonyms: ['Japanese Candlestick', 'Candlestick Pattern', 'क्यान्डलस्टिक', 'क्यानडल'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Candlestick Chart is a financial charting method displaying the Open, High, Low, and Close (OHLC) prices of an asset over a specific timeframe.',
      np: 'क्यान्डलस्टिक चार्ट भनेको निश्चित समयभित्र सेयरको सुरुवाती मूल्य (Open), उच्चतम मूल्य (High), न्यूनतम मूल्य (Low) र अन्तिम मूल्य (Close) देखाउने प्राविधिक चार्ट हो।'
    },
    detailedExplanation: {
      en: 'Developed in 18th-century Japan by rice trader Munehisa Homma, candlestick charts visually display market psychology, price rejection, and supply-demand battles. Each candlestick consists of a central rectangular "Real Body" and upper/lower thin lines called "Wicks" or "Shadows". A green/white candle indicates buyers were in control (Close > Open). A red/black candle indicates sellers dominated the session (Close < Open). Technical analysts on NEPSE use single and multi-candle patterns (such as Hammer, Shooting Star, and Engulfing) to anticipate price reversals or trend continuations.',
      np: '१८औं शताब्दीमा जापानबाट सुरु भएको क्यान्डलस्टिक चार्टले बजारमा खरिदकर्ता (क्रेता) र बिक्रेताबीचको शक्ति संघर्षलाई प्रस्ट देखाउँछ। यसमा मुख्य बाक्लो भागलाई बडी (Real Body) र माथि-तलका पातला धर्काहरूलाई धागो वा छायाँ (Wick/Shadow) भनिन्छ। हरियो क्यान्डलले बजार बढेको (Close > Open) र रातोले घटेको (Close < Open) जनाउँछ। नेप्सेका प्राविधिक विश्लेषकहरूले यसकै आधारमा बजारको आगामी दिशा अनुमान गर्छन्।'
    },
    whyItMatters: {
      en: 'Unlike simple line charts that show only closing prices, a candlestick reveals the complete intraday volatility and price rejection. It shows whether buyers attempted to push prices higher but were violently beaten back by sellers.',
      np: 'साधारण लाइन चार्टले अन्तिम मूल्य मात्र देखाउँछ भने क्यान्डलस्टिकले दिनभर बजारमा के भयो—कति माथि पुग्यो, कति तल झर्यो र कसको जित भयो—सम्पूर्ण भित्री अवस्था खुलाउँछ।'
    },
    howItWorks: {
      summary: {
        en: 'The 4 vital price points that construct every candlestick:',
        np: 'क्यान्डलस्टिक बनाउने ४ प्रमुख विन्दुहरू:'
      },
      steps: [
        {
          title: { en: '1. Open Price', np: '१. ओपनिङ मूल्य (Open)' },
          desc: { en: 'The very first executed trade price when the trading timeframe starts.', np: 'तोकिएको समय (दिन वा घण्टा) सुरु हुँदा भएको पहिलो सेयर कारोबार मूल्य।' }
        },
        {
          title: { en: '2. High Price', np: '२. उच्चतम मूल्य (High)' },
          desc: { en: 'The highest price reached during the entire session, forming the top wick.', np: 'सो अवधिभरमा पुगेको सबैभन्दा माथिल्लो विन्दु, जसले माथिल्लो धागो (Wick) बनाउँछ।' }
        },
        {
          title: { en: '3. Low Price', np: '३. न्यूनतम मूल्य (Low)' },
          desc: { en: 'The absolute lowest price touched during the session, forming the lower wick.', np: 'सो अवधिभरमा झरेको सबैभन्दा तल्लो विन्दु, जसले तल्लो धागो बनाउँछ।' }
        },
        {
          title: { en: '4. Close Price', np: '४. क्लोजिङ मूल्य (Close)' },
          desc: { en: 'The final traded price when the session terminates; determines the candle\'s color.', np: 'कारोबार समय सकिँदाको अन्तिम मूल्य; यसैले क्यान्डल हरियो वा रातो के हुने निर्धारण गर्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['Technical chart platforms (TradingView, NepseAlpha)', 'Support and resistance confirmation', 'Short-term swing entry triggers']
    },
    nepalContext: {
      en: 'NEPSE charts are analyzed primarily on Daily (1D) and Weekly (1W) candle intervals. Intraday 15-minute or 1-hour candles are heavily used by active TMS momentum traders.',
      np: 'नेप्सेमा लगानीकर्ताहरूले दैनिक (Daily) र साप्ताहिक (Weekly) क्यान्डल चार्ट बढी हेर्छन् भने सक्रिय ट्रेडरहरूले १ घण्टा वा १५ मिनेटको क्यान्डलबाट कारोबारको समय मिलाउँछन्।'
    },
    example: {
      scenario: 'A Hammer candlestick forms at strong support on NEPSE',
      calculations: [
        'Stock opens at NPR 400 and sellers drive price down to NPR 360',
        'Aggressive buyers step in, soaking up all supply',
        'Price surges back and closes near the day\'s high at NPR 405',
        'Result: A tiny body with a long lower shadow (2x the body length)'
      ],
      outcome: 'Signals strong downside rejection; technical traders prepare for an upward bounce.'
    },
    commonMisconceptions: [
      {
        misconception: 'A single candlestick pattern guarantees that the market will reverse.',
        reality: 'Candlestick patterns represent probabilities, not guarantees. They must always be confirmed with volume, support levels, and disciplined stop-loss rules.'
      }
    ],
    prosAndCons: {
      pros: ['Intuitive, high-information visual display', 'Instantly highlights price rejection and sentiment', 'Applicable across all liquid financial assets'],
      cons: ['Can generate false signals during low-volume sideways consolidation']
    },
    relatedTerms: [
      { slug: 'support-and-resistance', name: 'Support & Resistance', type: 'glossary' },
      { slug: 'rsi', name: 'RSI', type: 'glossary' },
      { slug: 'moving-average', name: 'Moving Average', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Technical Analysis: The Complete Introduction', categorySlug: 'nepse', slug: 'how-to-read-quarterly-report-nepal' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate trading targets and profits.' }
    ],
    faq: [
      {
        q: { en: 'What is a Doji candlestick?', np: 'डोजी (Doji) क्यान्डल भनेको के हो?' },
        a: {
          en: 'A Doji is a candlestick where the Open and Close prices are virtually identical, indicating total equilibrium and indecision between buyers and sellers.',
          np: 'डोजी भनेको ओपनिङ र क्लोजिङ मूल्य लगभग बराबर भएको क्यान्डल हो, जसले बजारमा क्रेता र बिक्रेता दुवै अन्योलमा रहेको संकेत गर्छ।'
        }
      }
    ],
    references: [
      { title: 'Japanese Candlestick Charting Techniques', authority: 'Steve Nison', url: 'https://nepalstock.com.np' }
    ]
  },

  // 2. Support and Resistance
  {
    slug: 'support-and-resistance',
    term: 'Support and Resistance',
    termNp: 'टेवा र अवरोध बिन्दु (Support & Resistance)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'S',
    abbreviation: 'S/R',
    synonyms: ['Support Level', 'Resistance Level', 'टेवा बिन्दु', 'अवरोध बिन्दु'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'Support is a price level where buying demand halts a downward trend; Resistance is a price ceiling where selling pressure halts an upward advance.',
      np: 'टेवा (Support) भनेको मूल्य घट्दा खरिदकर्ताहरू सक्रिय भई मूल्यलाई थामेर फर्काउने बिन्दु हो भने अवरोध (Resistance) भनेको मूल्य बढ्दा बिक्रेताहरूको चापले मूल्यलाई रोक्ने माथिल्लो बिन्दु हो।'
    },
    detailedExplanation: {
      en: 'Support and Resistance represent key price memory zones where institutional order flow and retail psychology collide on a price chart. When a falling stock reaches a recognized Support zone, buyers view the asset as undervalued, and demand overcomes supply, causing prices to bounce upward. Conversely, as price approaches Resistance, traders who bought earlier lock in profits, and trapped sellers seek to break even, creating a supply wall. When a Resistance level is broken decisively with strong volume, it flips and becomes future Support (the Principle of Polarity).',
      np: 'टेवा र अवरोध चार्टमा कोरिने त्यस्ता मनोवैज्ञानिक रेखाहरू हुन् जहाँ सेयर किनबेचको ठूलो चाप हुन्छ। जब मूल्य घटेर टेवा (सपोर्ट) मा पुग्छ, त्यहाँ नयाँ खरिदकर्ता आएर मूल्यलाई माथितिर धकेल्छन्। यसैगरी मूल्य बढेर अवरोध (रेजिस्टेन्स) मा पुगेपछि नाफा सुरक्षित गर्न सेयर बेच्नेको ओइरो लाग्छ र मूल्य फेरि घट्छ। यदि अवरोध रेखालाई ठूलो भोल्युमसहित बजारले तोड्यो भने पछि सोही रेखा नयाँ टेवा बन्छ।'
    },
    whyItMatters: {
      en: 'Support and resistance levels provide objective anchor points for setting disciplined entry orders, stop-losses, and profit targets. Buying near support minimizes downside risk while maximizing upside reward.',
      np: 'सपोर्ट र रेजिस्टेन्सले लगानीकर्तालाई कुन मूल्यमा सेयर किन्ने र कहाँ नाफा सुरक्षित गर्ने वा कहाँ स्टप-लस राख्ने भन्ने स्पष्ट खाका दिन्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The dynamic mechanics of Support and Resistance on NEPSE:',
        np: 'टेवा र अवरोध पहिचान गर्ने मुख्य विधि:'
      },
      steps: [
        {
          title: { en: '1. Historical Reaction Highs/Lows', np: '१. अघिल्ला उच्च र न्यून विन्दु' },
          desc: { en: 'Horizontal zones where price previously reversed multiple times with high volume.', np: 'चार्टमा पहिले जहाँबाट बजार बारम्बार फर्किएको थियो, ती मुख्य विन्दुहरू।' }
        },
        {
          title: { en: '2. Psychological Round Numbers', np: '२. मनोवैज्ञानिक अंकहरू' },
          desc: { en: 'Major round numbers (e.g., NEPSE Index 2,000, 2,500, 3,000) act as natural battlegrounds.', np: 'नेप्से परिसूचकको २,०००, २,५०० वा ३,००० जस्ता प्रमुख राउन्ड अंकहरू।' }
        },
        {
          title: { en: '3. Breakout & Polarity Shift', np: '३. ब्रेकआउट र भूमिका परिवर्तन' },
          desc: { en: 'A decisive breach of resistance converts that ceiling into a protective floor on future retests.', np: 'रेजिस्टेन्स तोडिएपछि भविष्यमा सोही मूल्य नयाँ सपोर्ट बनेर काम गर्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['Swing trading entry planning', 'Stop-loss placement below support', 'Profit target setting before major resistance']
    },
    nepalContext: {
      en: 'NEPSE index support zones often align with psychological century marks (e.g., 1,800, 2,000, 2,200 points) and 200-day simple moving average levels.',
      np: 'नेप्सेमा १८००, २०००, २२०० जस्ता राउन्ड अंकहरू र २०० दिनको मुभिङ एभरेजले निकै बलियो सपोर्ट र रेजिस्टेन्सको काम गर्ने गर्दछ।'
    },
    example: {
      scenario: 'Trading a stock oscillating between NPR 300 support and NPR 360 resistance',
      calculations: [
        'Stock tests NPR 300 support and prints a bullish rejection candle',
        'Trader buys at NPR 305 with a tight stop-loss at NPR 295 (Risk: NPR 10)',
        'Trader sets profit target just below resistance at NPR 355 (Reward: NPR 50)',
        'Risk-to-Reward Ratio: 10 to 50 = 1:5'
      ],
      outcome: 'High-probability trade execution with asymmetric upside.'
    },
    commonMisconceptions: [
      {
        misconception: 'Support is a rigid single penny line that cannot be breached.',
        reality: 'Support and resistance are price zones or bands, not exact single digits. Prices often briefly pierce a level (wicking) before reversing.'
      }
    ],
    prosAndCons: {
      pros: ['Provides concrete risk-to-reward boundaries', 'Eliminates emotional guessing of entry levels', 'Works across all timeframes'],
      cons: ['False breakouts can trigger premature stop-outs during volatile whipsaws']
    },
    relatedTerms: [
      { slug: 'candlestick', name: 'Candlestick', type: 'glossary' },
      { slug: 'stop-loss', name: 'Stop-Loss', type: 'glossary' },
      { slug: 'moving-average', name: 'Moving Average', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Chart Reading and Price Action', categorySlug: 'nepse', slug: 'how-to-read-quarterly-report-nepal' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate risk-to-reward setups.' }
    ],
    faq: [
      {
        q: { en: 'What confirms a genuine support bounce?', np: 'सपोर्टबाट बजार फर्किएको कसरी पक्का गर्ने?' },
        a: {
          en: 'A genuine bounce is confirmed when the price forms a bullish reversal candle (such as a Hammer or Bullish Engulfing) accompanied by above-average trading volume.',
          np: 'सपोर्टमा हरियो क्यान्डल (जस्तै ह्यामर) बन्नुका साथै औसतभन्दा बढी कारोबार भोल्युम आएमा बजार साँच्चिकै माथि फर्किएको पुष्टि हुन्छ।'
        }
      }
    ],
    references: [
      { title: 'Technical Analysis of the Financial Markets', authority: 'John J. Murphy', url: 'https://nepalstock.com.np' }
    ]
  },

  // 3. RSI
  {
    slug: 'rsi',
    term: 'RSI (Relative Strength Index)',
    termNp: 'रिलेटिभ स्ट्रेन्थ इन्डेक्स (RSI)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'R',
    abbreviation: 'RSI',
    synonyms: ['Relative Strength Index', 'RSI Indicator', 'आर‌एस‌आई', 'गति सूचक'],
    difficulty: 'Intermediate',
    readTime: '4 min read',
    oneLineDef: {
      en: 'The Relative Strength Index (RSI) is a momentum oscillator measuring the speed and change of price movements on a scale of 0 to 100 to identify overbought and oversold conditions.',
      np: 'रिलेटिभ स्ट्रेन्थ इन्डेक्स (RSI) ले सेयर मूल्यमा आएको वृद्धिको गतिलाई ० देखि १०० सम्मको स्केलमा नापेर सेयर अत्यधिक खरिद (Overbought) वा अत्यधिक बिक्री (Oversold) भएको देखाउँछ।'
    },
    detailedExplanation: {
      en: 'Developed by J. Welles Wilder Jr. in 1978, the RSI is one of the most widely utilized technical momentum indicators on NEPSE. Calculated over a standard 14-period lookback, the RSI oscillates between 0 and 100. Traditionally, an RSI reading above 70 indicates that an asset is "Overbought" (extended upside, ripe for a pullback or consolidation), while a reading below 30 indicates that it is "Oversold" (extended downside, potential buying opportunity). Crucially, seasoned NEPSE traders also look for "Divergence"—situations where the stock price prints a lower low but RSI prints a higher low, signaling an impending upward trend reversal.',
      np: 'सन् १९७८ मा जे. वेल्स वाइल्डरले विकास गरेको आरएसआई प्राविधिक विश्लेषणमा सबैभन्दा बढी प्रयोग हुने सूचक हो। १४ दिनको औसत मूल्य परिवर्तनका आधारमा निकालिने यो सूचक ० देखि १०० बीचमा घुम्छ। सामान्यतया ७० भन्दा माथि पुग्दा बजार बढी किनेको (Overbought) र ३० भन्दा तल झर्दा बढी बेचेको (Oversold) मानिन्छ। यसबाहेक मूल्य र आरएसआई विपरीत दिशामा हिँड्ने डाइभर्जेन्स (Divergence) ले बजारमा ठूलो ट्रेन्ड परिवर्तनको पूर्वसंकेत गर्दछ।'
    },
    whyItMatters: {
      en: 'Buying a stock when its RSI is sitting at 85 or 90 during a parabolic frenzy exposes you to high risk of an immediate correction. RSI helps you avoid chasing overextended rallies and spot exhausted downtrends.',
      np: 'आरएसआई ८० वा ९० पुगेको बेला हतारिएर सेयर किन्दा लगानीकर्ता उच्च विन्दुमा फस्ने जोखिम हुन्छ। यसले बजारको गति नापेर सही समयमा खरिद-बिक्री गर्न मद्दत गर्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The 3 primary trading signals generated by the 14-period RSI:',
        np: 'आरएसआईबाट प्राप्त हुने ३ मुख्य संकेतहरू:'
      },
      steps: [
        {
          title: { en: '1. Overbought Threshold (> 70)', np: '१. ओभरबट क्षेत्र (७० भन्दा माथि)' },
          desc: { en: 'Buying momentum has reached extreme levels; prepare for profit-taking or sideways cooling.', np: 'खरिदकर्ताको चाप अत्यधिक विन्दुमा पुगेको छ; बजारमा नाफा सुरक्षित गर्ने समय हुन सक्छ।' }
        },
        {
          title: { en: '2. Oversold Threshold (< 30)', np: '२. ओभरसोल्ड क्षेत्र (३० भन्दा तल)' },
          desc: { en: 'Selling pressure is mathematically stretched; watch for reversal candlestick confirmation.', np: 'बिक्री चाप चरम विन्दुमा पुगेको छ; सस्तो मूल्यमा नयाँ खरिदकर्ता आकर्षित हुन सक्छन्।' }
        },
        {
          title: { en: '3. Bullish/Bearish Divergence', np: '३. आरएसआई डाइभर्जेन्स' },
          desc: { en: 'Price makes a new low, but RSI makes a higher low; reveals selling momentum has evaporated.', np: 'मूल्य नयाँ न्यून विन्दुमा झरे पनि आरएसआई माथि उठ्नुले बजार फर्किन लागेको बलियो संकेत गर्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['Momentum confirmation', 'Trend exhaustion identification', 'Divergence reversal setups']
    },
    nepalContext: {
      en: 'During intense NEPSE bull runs, momentum can keep individual speculative stocks in overbought territory (RSI 75-85) for weeks. In strong trends, traders use 40 as dynamic bull support.',
      np: 'नेप्सेमा तीव्र बुलिस बजार भएको बेला आरएसआई लगातार ७५ देखि ८५ मा हप्तौंसम्म बसिरहन सक्छ। त्यसैले बलियो बजारमा ४० को विन्दुलाई नै बलियो सपोर्ट मान्ने गरिन्छ।'
    },
    formula: {
      expression: 'RSI = 100 - [100 / (1 + (Average Gain / Average Loss))]',
      variables: [
        { symbol: 'Average Gain', meaning: 'Sum of gains over 14 periods divided by 14' },
        { symbol: 'Average Loss', meaning: 'Sum of losses over 14 periods divided by 14' }
      ],
      exampleCalculation: 'If Average Gain = 2.0 and Average Loss = 1.0, RS = 2.0. RSI = 100 - [100 / (1 + 2)] = 100 - 33.33 = 66.67.'
    },
    example: {
      scenario: 'Detecting Bullish Divergence on NEPSE Index',
      calculations: [
        'NEPSE drops to 1,850 in month 1 with Daily RSI at 24',
        'Market rallies, then drops again to 1,800 in month 3 (lower price low)',
        'However, Daily RSI on the second low only drops to 32 (higher RSI low)',
        'Confirmation: Bullish Divergence detected'
      ],
      outcome: 'Sellers are exhausted; market launches a multi-month recovery rally.'
    },
    commonMisconceptions: [
      {
        misconception: 'As soon as RSI crosses above 70, you must sell immediately.',
        reality: 'In a powerful bull trend, an asset can remain overbought above 70 for extended periods while doubling in price. Always combine RSI with trend structure.'
      }
    ],
    prosAndCons: {
      pros: ['Exceptional at identifying momentum shifts and divergence', 'Objective mathematical formula', 'Universally built into all trading software'],
      cons: ['Can generate false overbought signals in runaway trending markets']
    },
    relatedTerms: [
      { slug: 'candlestick', name: 'Candlestick', type: 'glossary' },
      { slug: 'support-and-resistance', name: 'Support & Resistance', type: 'glossary' },
      { slug: 'moving-average', name: 'Moving Average', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Technical Indicators and Trading Tools', categorySlug: 'nepse', slug: 'how-to-read-quarterly-report-nepal' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate trading targets.' }
    ],
    faq: [
      {
        q: { en: 'What is the standard period setting for RSI?', np: 'आरएसआईको लागि सबैभन्दा उपयुक्त सेटिङ कुन हो?' },
        a: {
          en: 'The standard setting across virtually all professional technical analysis software is 14 periods on daily close prices.',
          np: 'विश्वभरका प्राविधिक विश्लेषकहरूले १४ दिन (14-period) को डिफल्ट सेटिङलाई नै सबैभन्दा भरपर्दो मान्छन्।'
        }
      }
    ],
    references: [
      { title: 'New Concepts in Technical Trading Systems', authority: 'J. Welles Wilder Jr.', url: 'https://nepalstock.com.np' }
    ]
  },

  // 4. Moving Average
  {
    slug: 'moving-average',
    term: 'Moving Average (SMA & EMA)',
    termNp: 'मुभिङ एभरेज (Moving Average)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'M',
    abbreviation: 'MA',
    synonyms: ['Simple Moving Average', 'Exponential Moving Average', 'SMA', 'EMA', 'मुभिङ एभरेज'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Moving Average is a technical indicator that calculates average historical closing prices over a specific period, smoothing out short-term price noise to reveal trends.',
      np: 'मुभिङ एभरेज भनेको निश्चित दिनहरूको अन्तिम सेयर मूल्यको औसत निकालेर दैनिक उतारचढावलाई हटाई बजारको वास्तविक दिशा देखाउने प्राविधिक सूचक हो।'
    },
    detailedExplanation: {
      en: 'Moving averages are the foundational building blocks of trend-following technical analysis. A Simple Moving Average (SMA) assigns equal mathematical weight to every closing price across the selected period (e.g., 20, 50, or 200 days). An Exponential Moving Average (EMA) assigns exponentially higher weight to recent trading sessions, making it react faster to recent price breakouts. On NEPSE, a stock trading comfortably above its 20-day, 50-day, and 200-day moving averages confirms a strong structural uptrend. Famous crossover signals include the "Golden Cross" (bullish) and "Death Cross" (bearish).',
      np: 'मुभिङ एभरेजले बजारको दैनिक हल्ला (Noise) लाई हटाएर मूल्य कुन दिशातर्फ गइरहेको छ भन्ने प्रस्ट पार्छ। साधारण मुभिङ एभरेज (SMA) ले सबै दिनलाई बराबर महत्व दिन्छ भने एक्सपोनेन्सियल मुभिङ एभरेज (EMA) ले हालसालैका दिनहरूलाई बढी महत्व दिने हुँदा छिटो प्रतिक्रिया दिन्छ। यदि कुनै कम्पनीको सेयर मूल्य २०, ५० र २०० दिनको औसतभन्दा माथि हिँडिरहेको छ भने सो कम्पनी बलियो बुलिस ट्रेन्डमा रहेको मानिन्छ।'
    },
    whyItMatters: {
      en: 'Moving averages eliminate daily emotional noise. When a stock price tests a rising 50-day or 200-day moving average, institutional investors in Nepal frequently step in to defend the level as dynamic support.',
      np: 'यसले लगानीकर्तालाई दैनिक उतारचढावबाट नआत्तिएर मुख्य ट्रेन्डको पछि लाग्न मद्दत गर्छ। ठूला लगानीकर्ताले ५० वा २०० दिनको औसत रेखालाई गतिशील टेवा (Dynamic Support) का रूपमा प्रयोग गर्छन्।'
    },
    howItWorks: {
      summary: {
        en: 'The 3 key benchmark moving averages used on NEPSE charts:',
        np: 'नेप्सेमा प्रयोग हुने ३ मुख्य मुभिङ एभरेजहरू:'
      },
      steps: [
        {
          title: { en: '1. 20-Day EMA (Short-Term Momentum)', np: '१. २० दिने EMA (छोटो अवधिको गति)' },
          desc: { en: 'Guides swing traders; in a strong impulse rally, price rides above the 20 EMA.', np: 'छोटो अवधिको ट्रेडरका लागि; तीव्र वृद्धि हुँदा मूल्य यसैको माथि हिँड्छ।' }
        },
        {
          title: { en: '2. 50-Day SMA (Intermediate Trend)', np: '२. ५० दिने SMA (मध्यम अवधिको ट्रेन्ड)' },
          desc: { en: 'Standard quarterly benchmark; healthy pullbacks in a bull market bounce off the 50 SMA.', np: 'मध्यम अवधिको ट्रेन्ड; बुलिस बजारमा हुने करेक्सनहरू यसै रेखामा अडिन्छन्।' }
        },
        {
          title: { en: '3. 200-Day SMA (Macro Cycle Anchor)', np: '३. २०० दिने SMA (दीर्घकालीन बजार रेखा)' },
          desc: { en: 'The ultimate dividing line between structural bull and bear markets in Nepal.', np: 'बजार समग्रमा बुलिस छ वा बेयरिस छ भनेर छुट्याउने सबैभन्दा महत्वपूर्ण रेखा।' }
        }
      ]
    },
    whereUsed: {
      en: ['Dynamic support and resistance tracking', 'Golden Cross and Death Cross strategy generation', 'Trend identification filters']
    },
    nepalContext: {
      en: 'A "Golden Cross" on the NEPSE Index occurs when the 50-day moving average crosses above the 200-day moving average, signaling the initiation of a major multi-year bull cycle.',
      np: 'नेप्सेमा जब ५० दिनको मुभिङ एभरेजले २०० दिनको रेखालाई तलबाट काटेर माथि जान्छ (Golden Cross), तब बजारमा ठूलो दीर्घकालीन तेजी सुरु भएको संकेत मानिन्छ।'
    },
    formula: {
      expression: 'SMA = (Close_1 + Close_2 + ... + Close_n) / n',
      variables: [
        { symbol: 'Close', meaning: 'Closing price of each day' },
        { symbol: 'n', meaning: 'Selected timeframe period (e.g., 20, 50, 200)' }
      ],
      exampleCalculation: 'Sum of 20 days closing prices = NPR 8,000. 20-Day SMA = 8,000 / 20 = NPR 400.00.'
    },
    example: {
      scenario: 'A commercial bank tests its rising 50-day SMA',
      calculations: [
        'Stock rallies from NPR 300 to NPR 420, then pulls back during a market correction',
        '50-day moving average sits at NPR 370',
        'Stock touches NPR 372 and forms a bullish hammer candlestick',
        'Trend trader enters at NPR 375 with stop-loss at NPR 365'
      ],
      outcome: 'Stock rebounds off the 50-day SMA dynamic support back toward NPR 450.'
    },
    commonMisconceptions: [
      {
        misconception: 'Moving averages can predict future turning points ahead of time.',
        reality: 'Moving averages are lagging indicators based on past closing prices. They confirm existing trends; they do not predict the future.'
      }
    ],
    prosAndCons: {
      pros: ['Smoothes price noise effectively', 'Identifies dominant market trend objectively', 'Provides dynamic support/resistance zones'],
      cons: ['Lags market turning points; generates whipsaws in sideways choppy markets']
    },
    relatedTerms: [
      { slug: 'candlestick', name: 'Candlestick', type: 'glossary' },
      { slug: 'support-and-resistance', name: 'Support & Resistance', type: 'glossary' },
      { slug: 'rsi', name: 'RSI', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Moving Averages and Supertrend', categorySlug: 'nepse', slug: 'how-to-read-quarterly-report-nepal' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate trading targets.' }
    ],
    faq: [
      {
        q: { en: 'What is a Death Cross?', np: 'डेथ क्रस (Death Cross) भनेको के हो?' },
        a: {
          en: 'A Death Cross occurs when the short-term 50-day moving average crosses below the long-term 200-day moving average, signaling strong bearish continuation.',
          np: 'जब ५० दिनको रेखाले २०० दिनको रेखालाई माथिबाट काटेर तल झर्छ, त्यसलाई डेथ क्रस भनिन्छ, जसले बजारमा मन्दी थप गहिरिने संकेत गर्छ।'
        }
      }
    ],
    references: [
      { title: 'Technical Analysis Explained', authority: 'Martin J. Pring', url: 'https://nepalstock.com.np' }
    ]
  },

  // 5. Stop-Loss
  {
    slug: 'stop-loss',
    term: 'Stop-Loss Order & Risk Management',
    termNp: 'स्टप-लस (Stop-Loss)',
    categorySlug: 'nepse',
    categoryName: { en: 'NEPSE & Stocks', np: 'नेप्से र सेयर' },
    letter: 'S',
    abbreviation: 'SL',
    synonyms: ['Stop Loss', 'Cut Loss', 'स्टप लस', 'नोक्सानी नियन्त्रण'],
    difficulty: 'Beginner',
    readTime: '4 min read',
    oneLineDef: {
      en: 'A Stop-Loss is an advance risk-management order or decision that automatically sells an asset if its price declines to a predetermined threshold, capping potential loss.',
      np: 'स्टप-लस (Stop-Loss) भनेको सेयर मूल्य घट्न थालेमा पूर्व-निर्धारित विन्दुमा सेयर बेचेर ठूलो आर्थिक नोक्सानी हुनबाट आफ्नो पुँजी जोगाउने अनिवार्य जोखिम व्यवस्थापन विधि हो।'
    },
    detailedExplanation: {
      en: 'In secondary stock trading, capital preservation is the absolute prerequisite to long-term profitability. A stop-loss is your emergency exit plan. When entering any trade on NEPSE, a disciplined investor determines the exact technical invalidation level where their trade thesis is proven wrong (e.g., a break below key support or the 20-day moving average). By executing a stop-loss, you take a small, controlled, mathematically survivable loss (such as 3% to 5%) rather than allowing an unmanaged position to crash by 30%, 50%, or 70%.',
      np: 'सेयर बजारमा नाफा कमाउनुभन्दा अगाडि आफ्नो पुँजी जोगाउनु सबैभन्दा पहिलो कर्तव्य हो। स्टप-लस भनेको बजार आफूले सोचेभन्दा विपरित गएमा तुरुन्तै बाहिरिने पूर्व-योजना हो। सेयर किन्नासाथ यदि मूल्य तोकिएको विन्दुभन्दा तल झर्यो भने थोरै घाटा (जस्तै ३% देखि ५%) सहेर सेयर बेचिन्छ, जसले गर्दा बजारमा ३०% वा ५०% को ठूलो पहिरो जाँदा पनि आफ्नो पुँजी सुरक्षित रहन्छ।'
    },
    whyItMatters: {
      en: 'Mathematics shows that a 50% loss requires a 100% gain just to break even; an 80% loss requires a 400% gain. A single undisciplined trade without a stop-loss can wipe out years of accumulated trading gains.',
      np: 'गणितले के देखाउँछ भने यदि सेयरमा ५०% घाटा भयो भने फेरि पहिलेकै अवस्थामा पुग्न १००% नाफा कमाउनुपर्छ। एउटै गलत निर्णयले वर्षौंदेखि कमाएको सम्पूर्ण नाफा स्वाहा पार्न सक्छ।'
    },
    howItWorks: {
      summary: {
        en: 'The 3 golden rules of disciplined Stop-Loss execution on NEPSE:',
        np: 'स्टप-लस कार्यान्वयनका ३ सुनौला नियमहरू:'
      },
      steps: [
        {
          title: { en: '1. Define SL Prior to Entry', np: '१. किन्नुअघि नै स्टप-लस तोक्ने' },
          desc: { en: 'Never buy a stock without knowing your exact exit price if the setup fails.', np: 'सेयर किन्नुभन्दा पहिले नै घाटा भए कहाँ बेच्ने भनेर निर्णय गरिसक्नुपर्छ।' }
        },
        {
          title: { en: '2. Max 1-2% Account Risk Rule', np: '२. कुल पुँजीको १-२% जोखिम नियम' },
          desc: { en: 'The monetary difference between your entry price and stop-loss should never exceed 1-2% of total portfolio.', np: 'एउटा कारोबारमा हुने बढीमा नोक्सानी कुल पुँजीको १% देखि २% भन्दा बढी हुनुहुँदैन।' }
        },
        {
          title: { en: '3. Never Move SL Downward', np: '३. स्टप-लस कहिल्यै तल नसार्ने' },
          desc: { en: 'Moving your stop-loss lower out of emotional hope is the fastest path to catastrophic account failure.', np: 'मूल्य झर्दै जाँदा स्टप-लस घटाउँदै लैजानु आत्महत्या सरह हो; अनुशासन कडाइका साथ पालना गर्नुपर्छ।' }
        }
      ]
    },
    whereUsed: {
      en: ['Position sizing formulas', 'TMS trigger order placement', 'Trading plan risk-to-reward audits']
    },
    nepalContext: {
      en: 'While some advanced international trading terminals feature automated trailing stops, NEPSE TMS users typically execute manual stop-loss sell orders or use TMS trigger order options during live hours.',
      np: 'नेप्सेको टिएमएसमा सीमित ट्रिगर अर्डर सुविधा भएकाले धेरैजसो नेपाली लगानीकर्ताले मूल्य आफ्नो स्टप-लस विन्दुमा पुग्नासाथ आफैं बिक्री अर्डर हालेर घाटा नियन्त्रण गर्छन्।'
    },
    example: {
      scenario: 'Applying the 1% risk rule on a NPR 500,000 portfolio',
      calculations: [
        'Total Portfolio Capital: NPR 500,000 → Max allowable risk (1%): NPR 5,000',
        'Stock Entry Price: NPR 400 per share',
        'Technical Support / Stop-Loss level: NPR 380 (Risk per share = NPR 20)',
        'Position Sizing: NPR 5,000 max risk / NPR 20 risk per share = 250 shares to buy'
      ],
      outcome: 'If the trade fails and hits stop-loss, the investor loses exactly NPR 5,000 (1%), preserving 99% of capital.'
    },
    commonMisconceptions: [
      {
        misconception: 'A loss is only on paper until I sell; if I hold long enough, it will always bounce back.',
        reality: 'Many fundamentally damaged companies in speculative sectors take 10+ years to recover or never return to peak prices. Holding dead capital destroys compounding.'
      }
    ],
    prosAndCons: {
      pros: ['Guarantees mathematical portfolio survival', 'Eliminates emotional panic and decision paralysis', 'Protects accumulated profits when trailing stops are used'],
      cons: ['Can be stopped out prematurely by erratic volatility spikes before the market resumes upward']
    },
    relatedTerms: [
      { slug: 'support-and-resistance', name: 'Support & Resistance', type: 'glossary' },
      { slug: 'candlestick', name: 'Candlestick', type: 'glossary' },
      { slug: 'portfolio', name: 'Portfolio', type: 'glossary' }
    ],
    relatedLessons: [
      { title: 'Stop-Loss: Everything You Need to Know', categorySlug: 'nepse', slug: 'how-to-read-quarterly-report-nepal' }
    ],
    relatedGuides: [
      { title: 'NEPSE Investing Guide', slug: 'complete-nepse-investing-guide' }
    ],
    relatedCalculators: [
      { name: 'NEPSE Share & Profit Calculator', slug: 'nepse-share', desc: 'Simulate risk-to-reward setups.' }
    ],
    faq: [
      {
        q: { en: 'What is a Trailing Stop-Loss?', np: 'ट्रेलिङ स्टप-लस (Trailing Stop-Loss) भनेको के हो?' },
        a: {
          en: 'A Trailing Stop is a stop-loss that is adjusted upward as the stock price rises, locking in accumulated paper profits while still protecting against sudden reversals.',
          np: 'सेयर मूल्य बढ्दै जाँदा स्टप-लस विन्दुलाई पनि माथि सार्दै लैजाने विधिलाई ट्रेलिङ भनिन्छ। यसले गर्दा भएको नाफा सुरक्षित रहन्छ।'
        }
      }
    ],
    references: [
      { title: 'Trading for a Living', authority: 'Dr. Alexander Elder', url: 'https://nepalstock.com.np' }
    ]
  }
];

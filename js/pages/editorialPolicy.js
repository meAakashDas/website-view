// ==============================================
// risePaisa | Editorial Policy & Research Standards
// Guidelines for financial research, statutory primary sourcing,
// fact-checking, editorial independence, and transparent corrections in Nepal.
// Governed by the Laws of Nepal:
// - Constitution of Nepal (Freedom of Expression & Right to Information)
// - Consumer Protection Act, 2075
// - Electronic Commerce Act, 2081
// - Securities Act, 2063
// ==============================================
import { setPageMeta, ICONS } from '../components.js';
import { ROUTES } from '../routes.js';

export function renderEditorialPolicyPage() {
  setPageMeta(
    'Editorial Policy & Fact-Checking Standards | RisePaisa',
    'How RisePaisa researches, verifies, and publishes unbiased financial education for Nepal, prioritizing statutory primary sources from Nepal Law Commission, NRB, SEBON, and IRD.',
    ROUTES.EDITORIAL_POLICY || '/editorial-policy'
  );

  return `
    <div class="legal-page" id="editorial-policy-page">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="${ROUTES.HOME}">Home</a><span class="separator">/</span>
        <span>Editorial Policy</span>
      </nav>

      <div class="legal-header-badge">
        <span class="badge-pulse" style="width:6px;height:6px;border-radius:50%;background:var(--color-primary);display:inline-block"></span>
        Editorial Integrity · Fact-Checking Standards
      </div>

      <h1>Editorial Policy &amp; Research Standards</h1>
      <p class="last-updated">Last verified &amp; updated: November 2026 · Governed by the Laws of Nepal</p>

      <nav class="legal-nav-strip" aria-label="Legal Documentation Navigation">
        <a href="${ROUTES.TERMS}" class="legal-nav-pill">Terms &amp; Conditions</a>
        <a href="${ROUTES.PRIVACY}" class="legal-nav-pill">Privacy Policy</a>
        <a href="${ROUTES.REFUND}" class="legal-nav-pill">Refund Policy</a>
        <a href="${ROUTES.DISCLAIMER}" class="legal-nav-pill">Disclaimer</a>
        <a href="${ROUTES.EDITORIAL_POLICY || '/editorial-policy'}" class="legal-nav-pill active">Editorial Policy</a>
        <a href="${ROUTES.FAQ}" class="legal-nav-pill">FAQ</a>
      </nav>

      <div class="legal-callout-box">
        <h4>${ICONS.shield} Core Editorial Commitment</h4>
        <p>
          RisePaisa exists to build authoritative, unbiased, and accessible financial education specifically for Nepal. We believe personal finance education must be anchored in verifiable primary statutory sources, rigorous fact-checking, and transparent authorship, free from speculative market promotion, sponsored stock tips, or artificial hype.
        </p>
      </div>

      <h2>1. Purpose &amp; Editorial Mission</h2>
      <p>
        <strong>1.1 Educational Mission:</strong> Nepal&rsquo;s economic and financial environment is shaped by distinct statutory directives, evolving tax slabs, and unique market mechanisms. From understanding progressive income tax under the <em>Income Tax Act, 2058</em> to applying for IPOs via C-ASBA and trading on the Nepal Stock Exchange (NEPSE), learners need clear, objective explanations.
      </p>
      <p>
        <strong>1.2 Educational Publishing Only:</strong> RisePaisa, founded by Aakash Das in Kathmandu, translates complex fiscal acts, monetary circulars, and capital market rules into step-by-step guides, calculators, and curriculum modules. RisePaisa operates strictly as an educational publisher, not an investment brokerage or portfolio management firm.
      </p>

      <h2>2. Hierarchy of Primary Sources &amp; Fact-Checking Standards</h2>
      <p>
        We enforce a strict hierarchy of evidence. When researching and explaining financial topics in Nepal, we prioritize authoritative government gazettes and statutory publications over secondary media reports or social media chatter:
      </p>
      <ul>
        <li>
          <strong>Nepal Law Commission (नेपाल कानून आयोग) &amp; Nepal Gazette:</strong> Official legislative statutes, gazette notifications, and ordinances, including the <em>Consumer Protection Act, 2075</em>, the <em>Electronic Commerce Act, 2081</em>, the <em>Securities Act, 2063</em>, and the <em>Individual Privacy Act, 2075</em>;
        </li>
        <li>
          <strong>Nepal Rastra Bank (NRB):</strong> Unified Directives for Class A, B, and C financial institutions, annual and mid-term Monetary Policy statements, foreign exchange regulations, Base Rate determinations, interest rate spread caps, and Payment Service Operator (PSO/PSP) regulations;
        </li>
        <li>
          <strong>Securities Board of Nepal (SEBON):</strong> Securities regulations, public issue allotment directives (C-ASBA guidelines), mutual fund guidelines, and official regulatory notices;
        </li>
        <li>
          <strong>Inland Revenue Department (IRD Nepal):</strong> The <em>Income Tax Act, 2058</em>, annual Finance Acts (Aarthik Vidheyak), progressive income tax slabs, and official Tax Deducted at Source (TDS) withholding circulars;
        </li>
        <li>
          <strong>Nepal Stock Exchange (NEPSE) &amp; CDSC:</strong> Secondary market trading by-laws, settlement and clearing rules, DEMAT operational guidelines, and MeroShare procedures;
        </li>
        <li>
          <strong>Statutory Social Security &amp; Pension Funds:</strong> Official directives from the Social Security Fund (SSF), Employee Provident Fund (EPF / Karmachari Sanchaya Kosh), Citizen Investment Trust (CIT), and Deposit and Credit Guarantee Fund (DCGF);
        </li>
        <li>
          <strong>Audited Corporate Filings:</strong> Balance sheets, profit and loss statements, and prospectuses submitted directly by listed public companies to NEPSE and SEBON.
        </li>
      </ul>

      <h2>3. Delineation of Facts, Estimates, Examples &amp; Opinions</h2>
      <p>
        To preserve reader clarity and avoid misleading financial expectations, we maintain transparent boundaries between categories of content:
      </p>
      <ul>
        <li><strong>Factual Statements:</strong> Statutory tax slabs, official NRB Base Rate formulas, regulatory filing deadlines, and statutory commission structures are verified directly against primary official circulars and presented as verifiable facts;</li>
        <li><strong>Mathematical Estimates &amp; Simulations:</strong> Projections produced by our interactive financial engines (such as SIP compounding, retirement corpus models, or reducing-balance EMI schedules) are mathematical simulations based on user-entered inputs and explicit assumptions. They are clearly identified as planning estimates, not guarantees;</li>
        <li><strong>Educational Case Studies:</strong> Historical chart patterns, corporate financial statements, and company ratios examined in our courses are academic case studies used solely to teach analytical methodologies (such as evaluating Debt-to-Equity or computing P/E ratios). They never constitute an endorsement, price target, or recommendation to trade that security;</li>
        <li><strong>Educational Commentary:</strong> Pedagogical frameworks, budgeting philosophies, and financial planning frameworks are clearly presented as educational viewpoints to assist learners in structuring their own thinking.</li>
      </ul>

      <h2>4. Editorial Independence &amp; Commercial Transparency</h2>
      <p>
        RisePaisa protects reader trust through strict editorial safeguards:
      </p>
      <ul>
        <li><strong>Zero Paid Stock Promotions:</strong> RisePaisa strictly prohibits and rejects paid promotional coverage, kickbacks, referral bounties, or equity allocations from publicly listed companies, promoters, or stock brokers seeking positive coverage or artificial share hype;</li>
        <li><strong>Separation of Free Content and Courses:</strong> Access to our core research articles, learning guides, and interactive financial calculators remains 100% free and editorially uncompromised. Paid course offerings are structured educational masterclasses and do not alter the objectivity of our public guides;</li>
        <li><strong>Commercial Disclosure:</strong> If any third-party book, software tool, or financial infrastructure provider is referenced under an affiliate relationship, clear and conspicuous disclosure is provided within that immediate context;</li>
        <li><strong>Avoidance of Misleading Claims:</strong> We strictly avoid hyperbolic promises of &ldquo;risk-free income&rdquo;, &ldquo;wealth overnight&rdquo;, or &ldquo;guaranteed stock picks&rdquo;. All financial discussions honestly convey the realities of capital market volatility.</li>
      </ul>

      <h2>5. Authorship &amp; Editorial Accountability</h2>
      <p>
        Every educational article, learning lesson, and calculator guide published on RisePaisa clearly identifies its author and editorial review status.
      </p>
      <p>
        Content on RisePaisa is authored and curated primarily by founder <a href="${ROUTES.AAKASH_DAS}">Aakash Das</a> alongside verified educators. We do not publish automated, unverified AI feeds or anonymous financial commentary. While we conduct rigorous internal research and fact-checking, we do not claim that every published educational article is independently audited by an external law firm or government agency unless specifically stated.
      </p>

      <h2>6. Regulatory Review Cycles &amp; Maintenance Schedule</h2>
      <p>
        Because financial rules, fiscal tax slabs, and monetary circulars in Nepal change regularly, we follow a proactive review schedule:
      </p>
      <ul>
        <li><strong>Annual Budget &amp; Finance Act (Jestha):</strong> Immediate review and update of individual income tax slabs, deductions, and TDS withholding rates following official publication by the Ministry of Finance and IRD;</li>
        <li><strong>Monetary Policy Announcements (Shrawan &amp; Quarterly):</strong> Review and update of commercial banking guidelines, LTV ceilings, and loan prepayment rules following Nepal Rastra Bank announcements;</li>
        <li><strong>Ongoing Regulatory Notices:</strong> Continuous tracking of SEBON IPO allotment circulars, CDSC DEMAT directives, and digital payment circulars to keep guides up to date;</li>
        <li><strong>Historical Context:</strong> Where prior fiscal years or historic rules are cited for comparison, they are explicitly labeled with their applicable fiscal year (e.g. FY 2081/82 vs. FY 2082/83) to avoid learner confusion.</li>
      </ul>

      <h2>7. Corrections &amp; Feedback Policy</h2>
      <p>
        Despite our dedication to accuracy, the evolving nature of financial regulations means that ambiguities or errors can occasionally arise. We treat every reader inquiry seriously and maintain a transparent corrections procedure.
      </p>
      <div class="legal-callout-box">
        <h4>${ICONS.mail} How to Report an Editorial Discrepancy</h4>
        <p>
          If you identify an inaccurate statutory citation, outdated tax figure, broken link, or mathematical error in any RisePaisa guide or calculator:
        </p>
        <ul style="margin-bottom:var(--space-3)">
          <li>Email our editorial desk at <a href="mailto:itsaakashdas@gmail.com"><strong>itsaakashdas@gmail.com</strong></a> with the subject: <code>Editorial Correction: [Article or Page Title]</code>;</li>
          <li>Or message our verified WhatsApp support line directly at <a href="https://wa.me/9779740269317" target="_blank" rel="noopener"><strong>+977 9740269317</strong></a>;</li>
          <li>Please include the URL of the page, the specific sentence or figure, and a citation to the primary official source (e.g. official NRB directive number or IRD notification).</li>
        </ul>
        <p style="margin:0;font-size:var(--text-xs);color:var(--color-text-muted)">
          Our editorial desk reviews reported discrepancies within <strong>48 business hours</strong>. Verified corrections are updated immediately, with an explanatory note appended where the correction is substantive.
        </p>
      </div>

      <h2>8. Associated Policies &amp; Resources</h2>
      <p>For additional details regarding our platform standards, user privacy, and legal terms, please review:</p>
      <ul>
        <li><a href="${ROUTES.DISCLAIMER}">Educational Disclaimer &amp; Risk Disclosure</a></li>
        <li><a href="${ROUTES.PRIVACY}">Privacy Policy</a></li>
        <li><a href="${ROUTES.TERMS}">Terms &amp; Conditions</a></li>
        <li><a href="${ROUTES.REFUND}">Refund &amp; Cancellation Policy</a></li>
        <li><a href="${ROUTES.FAQ}">Frequently Asked Questions</a></li>
        <li><a href="${ROUTES.AAKASH_DAS}">Aakash Das, Founder Profile</a></li>
      </ul>
    </div>
  `;
}

export function initEditorialPolicyPage() {
  // Page initialization lifecycle hook
}

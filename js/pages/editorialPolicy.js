// ==============================================
// risePaisa | Editorial Policy & Fact-Checking Standards
// Authoritative, transparent guidelines for financial research,
// primary regulatory sourcing, content review, and corrections in Nepal.
// ==============================================
import { setPageMeta, ICONS } from '../components.js';
import { ROUTES } from '../routes.js';

export function renderEditorialPolicyPage() {
  setPageMeta(
    'Editorial Policy & Fact-Checking Standards — RisePaisa',
    'Learn how RisePaisa researches, verifies, and maintains unbiased financial education for Nepal, prioritizing primary sources from NRB, SEBON, CDSC, and IRD Nepal.',
    ROUTES.EDITORIAL_POLICY || '/editorial-policy'
  );

  return `
    <div class="legal-page" id="editorial-policy-page">
      <div class="breadcrumb">
        <a href="${ROUTES.HOME}">Home</a><span class="separator">/</span>
        <span>Editorial Policy</span>
      </div>

      <h1>Editorial Policy & Research Standards</h1>
      <p class="last-updated">Last reviewed & updated: September 2026 · Editorial Desk</p>

      <div style="background:var(--color-surface);border:1px solid var(--color-border);border-left:4px solid var(--color-accent);padding:var(--space-5) var(--space-6);border-radius:var(--radius-md);margin-bottom:var(--space-8)">
        <p style="margin:0;font-size:var(--text-sm);color:var(--color-text-secondary);line-height:1.6">
          <strong style="color:var(--color-text)">Core Commitment:</strong> RisePaisa exists to build accurate, unbiased, and practical financial education tailored specifically to Nepal. We believe financial literacy must be founded on verifiable truth, statutory primary sources, and transparent authorship—never on speculative hype or sponsored stock promotion.
        </p>
      </div>

      <h2>1. Purpose & Editorial Mission</h2>
      <p>
        The financial landscape of Nepal presents unique regulatory, economic, and institutional nuances. From understanding the progressive tax slabs established by the Inland Revenue Department (IRD) to navigating initial public offerings (IPOs) governed by the Securities Board of Nepal (SEBON) and trading on the Nepal Stock Exchange (NEPSE), learners need dependable, jargon-free explanations.
      </p>
      <p>
        RisePaisa, founded by Aakash Das, is committed to translating complex monetary circulars, fiscal acts, and capital market mechanisms into clear, step-by-step guides, calculators, and educational programs accessible to every Nepali earner.
      </p>

      <h2>2. Hierarchy of Primary Sources</h2>
      <p>
        We hold a strict policy regarding the sourcing of financial and regulatory information. We prioritize official statutory publications over secondary media commentary or unverified forum discussions:
      </p>
      <ul>
        <li><strong>Nepal Rastra Bank (NRB):</strong> Unified directives, annual and mid-term monetary policy statements, foreign exchange regulations, banking interest rate limits, and payment service operator directives.</li>
        <li><strong>Securities Board of Nepal (SEBON):</strong> Securities Act provisions, mutual fund regulations, public issue allotment guidelines, and broker licensing rules.</li>
        <li><strong>Nepal Stock Exchange (NEPSE) & CDSC:</strong> By-laws on secondary market trading, C-ASBA settlement mechanisms, DEMAT accounts, and MeroShare operating procedures.</li>
        <li><strong>Inland Revenue Department (IRD Nepal):</strong> The Income Tax Act 2058, annual Finance Acts (Aarthik Vidheyak), progressive income tax slabs, and official withholding directives (TDS).</li>
        <li><strong>Credit & Social Security Authorities:</strong> Social Security Fund (SSF), Employee Provident Fund (EPF/Karmachari Sanchaya Kosh), Citizen Investment Trust (CIT), and the Deposit and Credit Guarantee Fund (DCGF).</li>
        <li><strong>Audited Company Reports:</strong> Official balance sheets, profit-and-loss statements, and prospectuses submitted directly by listed companies to NEPSE and SEBON.</li>
      </ul>

      <h2>3. Educational Content vs. Personalized Advice</h2>
      <p>
        RisePaisa operates strictly as a financial education and research publisher. We maintain an uncompromising distinction between educational analysis and personalized financial advice:
      </p>
      <ul>
        <li><strong>We do not provide individualized advice:</strong> We do not issue personalized buy/sell/hold calls or tell individuals how to allocate their private capital.</li>
        <li><strong>No guaranteed return claims:</strong> We strictly prohibit promises of "guaranteed profits", "risk-free high returns", or speculative stock tips. All financial instruments, including equities and mutual funds, carry market risk.</li>
        <li><strong>Objective evaluation:</strong> When discussing valuation methodologies (e.g., P/E, P/B, ROE, CAGR), we focus on teaching the underlying mathematical framework and historical context rather than pushing specific stocks.</li>
        <li><strong>Professional consultation:</strong> We consistently advise readers to consult licensed Chartered Accountants (CAs), SEBON-registered investment advisors, or certified tax planners before executing significant financial contracts.</li>
      </ul>

      <h2>4. Authorship & Editorial Accountability</h2>
      <p>
        Every substantive article, calculator guide, and curriculum module clearly states its author, original publication date, and last verified review date. 
      </p>
      <p>
        Content on RisePaisa is authored and curated primarily by founder <a href="${ROUTES.AAKASH_DAS}">Aakash Das</a> alongside verified financial educators. We believe that true topical authority is earned through sustained quality, transparent sourcing, and continuous factual accuracy, rather than manufactured accolades or generic AI-generated feeds.
      </p>

      <h2>5. Fact-Checking & Maintenance Cycle</h2>
      <p>
        Because financial laws and market parameters in Nepal evolve regularly (such as annual budget changes in Jestha, monetary policy announcements in Shrawan, and quarterly regulatory circulars), we enforce a systematic review process:
      </p>
      <ul>
        <li><strong>Immediate Statutory Revisions:</strong> When new tax slabs or C-ASBA allotment procedures are legislated, related guides and calculators are updated immediately to match the current fiscal year (e.g., FY 2082/83).</li>
        <li><strong>Verified Badging:</strong> Content cards feature explicit "Last Verified" timestamps indicating when the facts, calculations, and references were last manually verified against official notices.</li>
        <li><strong>Historical Context Preservation:</strong> Where previous fiscal rules or historic policies are discussed for educational perspective, they are clearly contextualized with the applicable timeframe to prevent reader confusion.</li>
      </ul>

      <h2>6. Independence & Commercial Transparency</h2>
      <p>
        Editorial integrity is paramount. To preserve reader trust:
      </p>
      <ul>
        <li><strong>Zero Paid Stock Promotions:</strong> RisePaisa does not accept compensation, kickbacks, or equity allocations from publicly listed companies, promoters, or stock brokers in exchange for positive coverage or favorable analysis.</li>
        <li><strong>Separation of Education and Commercial Tools:</strong> While RisePaisa develops interactive financial tools and offers structured premium courses, access to foundational financial articles, calculators, and educational guides remains completely free and editorially uncompromised.</li>
        <li><strong>Affiliate & Partner Disclosures:</strong> If any third-party software, books, or financial infrastructure platforms are referenced via affiliate relationships, clear and conspicuous disclosures are provided directly within the relevant context.</li>
      </ul>

      <h2>7. Corrections & Feedback Policy</h2>
      <p>
        Despite rigorous verification, the complexity and shifting nature of financial rules means errors or ambiguities can occasionally arise. We treat every reader inquiry seriously and welcome constructive accountability.
      </p>
      <div style="background:var(--color-surface);border:1px solid var(--color-border);padding:var(--space-6);border-radius:var(--radius-lg);margin:var(--space-6) 0">
        <h3 style="margin-top:0;font-size:var(--text-lg);color:var(--color-heading);display:flex;align-items:center;gap:8px">
          ${ICONS.mail} How to Report a Discrepancy or Correction
        </h3>
        <p style="font-size:var(--text-sm);color:var(--color-text-secondary);line-height:1.6">
          If you identify any factual discrepancy, outdated regulatory citation, or mathematical ambiguity in any RisePaisa article, guide, or calculator:
        </p>
        <ul style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-4)">
          <li>Email our editorial desk at <a href="mailto:itsaakashdas@gmail.com"><strong>itsaakashdas@gmail.com</strong></a> with the subject line <em>"Editorial Correction: [Article Title]"</em>.</li>
          <li>Or message our verified WhatsApp support line directly at <a href="https://wa.me/9779740269317" target="_blank" rel="noopener"><strong>+977 9740269317</strong></a>.</li>
          <li>Please include the URL of the page, the specific sentence or calculation, and a citation to the primary official source (e.g., NRB circular number or IRD gazette).</li>
        </ul>
        <p style="margin:0;font-size:var(--text-xs);color:var(--color-text-muted)">
          Our editorial team reviews reported discrepancies within 48 business hours. Verified corrections are deployed immediately, with an explanatory note appended to the article when substantial.
        </p>
      </div>

      <h2>8. Associated Policies & Resources</h2>
      <p>
        For further details regarding data privacy, platform terms, and educational disclaimers, please explore:
      </p>
      <ul>
        <li><a href="${ROUTES.DISCLAIMER}">Full Financial Disclaimer</a></li>
        <li><a href="${ROUTES.PRIVACY}">Privacy Policy</a></li>
        <li><a href="${ROUTES.TERMS}">Terms of Service</a></li>
        <li><a href="${ROUTES.AAKASH_DAS}">Aakash Das — Author & Founder Profile</a></li>
      </ul>
    </div>
  `;
}

export function initEditorialPolicyPage() {
  // Page initialization lifecycle hook
}

// ==============================================
// risePaisa | Official Legal Documentation & Policies
// Terms & Conditions, Privacy Policy, Refund Policy, Educational Disclaimer & FAQ
// Governed by the Laws of Nepal (Consumer Protection Act 2075,
// Individual Privacy Act 2075, Copyright Act 2059, Electronic Transactions Act 2063)
// ==============================================
import { setPageMeta, ICONS } from '../components.js';
import { ROUTES } from '../routes.js';

function _renderLegalNav(activeType) {
  const links = [
    { type: 'terms', label: 'Terms & Conditions', url: ROUTES.TERMS },
    { type: 'privacy', label: 'Privacy Policy', url: ROUTES.PRIVACY },
    { type: 'refund', label: 'Refund Policy', url: ROUTES.REFUND },
    { type: 'disclaimer', label: 'Disclaimer', url: ROUTES.DISCLAIMER },
    { type: 'editorial', label: 'Editorial Policy', url: ROUTES.EDITORIAL_POLICY || '/editorial-policy' },
    { type: 'faq', label: 'FAQ', url: ROUTES.FAQ },
  ];
  return `
    <nav class="legal-nav-strip" aria-label="Legal Documentation Navigation">
      ${links.map(l => `
        <a href="${l.url}" class="legal-nav-pill ${activeType === l.type ? 'active' : ''}">${l.label}</a>
      `).join('')}
    </nav>
  `;
}

const LEGAL_CONTENT = {
  // ─────────────────────────────────────────────────────────────────────────
  // 1. TERMS & CONDITIONS
  // ─────────────────────────────────────────────────────────────────────────
  terms: {
    title: 'Terms & Conditions',
    badge: 'Legal Agreement · Governing All Services',
    description: 'Terms governing enrollment, course access validity, intellectual property, payments, and limitations of liability on RisePaisa under Nepalese law.',
    lastUpdated: 'October 2026',
    content: `
      <p class="legal-lead">
        These Terms &amp; Conditions (&ldquo;<strong>Terms</strong>&rdquo;) constitute a legally binding agreement between you (&ldquo;<strong>User</strong>&rdquo;, &ldquo;<strong>Student</strong>&rdquo;, or &ldquo;<strong>You</strong>&rdquo;) and <strong>RisePaisa</strong> (&ldquo;<strong>RisePaisa</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>&rdquo;), founded by Aakash Das in Kathmandu, Nepal. These Terms govern your access to and use of our website (<a href="https://risepaisa.com">risepaisa.com</a>), online educational courses, digital templates, analytical calculators, and learning materials.
      </p>

      <div class="legal-callout-box">
        <h4>${ICONS.shield} Statutory Notice &amp; Governing Jurisdiction</h4>
        <p>
          RisePaisa operates as an independent financial education initiative in Nepal. These Terms are drafted and enforced under the laws of Nepal, including the <strong>National Civil Code (Muluki Dewani Samhita), 2074</strong>, the <strong>Electronic Transactions Act, 2063</strong>, the <strong>Copyright Act, 2059</strong>, and the <strong>Consumer Protection Act, 2075</strong>. By accessing our website, enrolling in our courses, or utilizing our digital resources, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
        </p>
      </div>

      <h2>1. User Eligibility &amp; Contractual Capacity</h2>
      <p>By accessing the platform or completing a course enrollment, you affirm that:</p>
      <ul>
        <li>You are at least <strong>16 years of age</strong>, or are accessing the platform under the active supervision and with the express consent of a parent or legal guardian;</li>
        <li>You possess the full legal competence and authority to enter into a valid, binding contract under Chapter 2 of the <em>Muluki Dewani Samhita, 2074</em>;</li>
        <li>All information provided during enrollment and communication (including your legal name, contact telephone/WhatsApp number, and email address) is accurate, current, and complete; and</li>
        <li>You are not barred from receiving digital educational services under any applicable laws or regulatory sanctions of Nepal.</li>
      </ul>

      <h2>2. Nature &amp; Scope of Educational Services</h2>
      <p>
        RisePaisa publishes structured, self-paced financial literacy courses (including the <em>Share Market Full Course (NEPSE)</em> and <em>Personal Finance Masterclass</em>), practical financial templates, financial calculators, and research articles focused on Nepal&rsquo;s economic ecosystem.
      </p>
      <p>
        <strong>Educational Purpose Only:</strong> RisePaisa operates solely as an educational and pedagogical publisher. RisePaisa, its founder Aakash Das, and its instructors are <strong>not</strong> registered as stock brokers, merchant bankers, portfolio managers (PMS), or investment advisors with the Securities Board of Nepal (SEBON) under the <em>Securities Act, 2063</em>. No service or material provided constitutes personalized financial planning, investment advice, tax counsel, or a solicitation to buy or sell securities.
      </p>

      <h2>3. Course Purchase, Fees &amp; Payment Processing</h2>
      <ul>
        <li><strong>Course Fees:</strong> All course fees and product prices are clearly indicated in Nepalese Rupees (NPR). The published fee for the <em>Share Market Full Course (NEPSE)</em> is NPR 2,999. RisePaisa reserves the right to modify prices for future enrollments at any time without prior notice; however, price changes will never affect existing, confirmed enrollments.</li>
        <li><strong>Payment Rails:</strong> Payments are processed via licensed payment service providers in Nepal, including <strong>eSewa</strong>, <strong>Khalti</strong>, <strong>connectIPS</strong>, or authorized commercial bank fund transfers. RisePaisa does not collect, record, or store sensitive banking credentials, ATM PINs, MPINs, or card CVVs.</li>
        <li><strong>Access Activation:</strong> Course access is granted only upon verified receipt of payment. Once payment is verified by our team, access instructions, credentials, or private streaming links are issued to the student.</li>
        <li><strong>Taxes:</strong> Any transaction fees imposed by your bank or wallet provider, as well as applicable statutory taxes under the <em>Income Tax Act, 2058</em>, are the responsibility of the paying student.</li>
      </ul>

      <h2>4. Course Access and Validity</h2>
      <p>
        Access to purchased courses is provided for a period of one (1) year. Course access is not lifetime access. Once the applicable access period expires, access to the course content may be discontinued.
      </p>
      <ul>
        <li><strong>4.1 Access Duration:</strong> Course access validity begins from the date payment is verified and course access credentials or links are activated, extending for exactly 365 calendar days (1 year).</li>
        <li><strong>4.2 Single-User Educational License:</strong> Course access is strictly licensed to one registered individual student. Account credentials, private streaming links, and lesson materials may not be shared, rented, pooled, or redistributed. Concurrent streaming across geographically conflicting IP addresses may trigger automated security verification.</li>
        <li><strong>4.3 Curriculum Additions &amp; Updates:</strong> During your active one-year enrollment, you receive access to any newly added lessons, updated case studies, and refreshed Excel models for your enrolled course at no additional charge.</li>
        <li><strong>4.4 Digital Downloadable Resources:</strong> Standalone downloadable study files (such as checklists, spreadsheets, and templates) downloaded to your personal device during your active access period remain available for your individual, non-commercial educational study.</li>
      </ul>

      <h2>5. Intellectual Property &amp; Copyright Protection</h2>
      <p>
        All educational content on RisePaisa, including but not limited to recorded video lessons, presentation slides, curriculum frameworks, financial modeling spreadsheets, Excel formulas, research articles, website code, graphics, and trade dress, is the exclusive intellectual property of RisePaisa and Aakash Das, protected under the <strong>Copyright Act, 2059 (प्रतिलिपि अधिकार ऐन, २०५९)</strong> and the <strong>Electronic Transactions Act, 2063</strong> of Nepal.
      </p>
      <div class="legal-callout-box warning">
        <h4>${ICONS.lock} Limited Personal License &amp; Strict Anti-Piracy Notice</h4>
        <p>
          Upon enrollment, you are granted a <strong>limited, non-exclusive, non-transferable, revocable single-user license</strong> solely for your personal, non-commercial educational study.
        </p>
        <p>
          <strong>You are strictly prohibited from:</strong>
        </p>
        <ul style="margin-bottom:0">
          <li>Sharing, leasing, lending, sublicensing, or transferring your login credentials or course links to any other individual or group;</li>
          <li>Screen-recording, ripping, downloading, streaming-ripping, or mirroring course video lessons;</li>
          <li>Uploading course videos, PDFs, or spreadsheets to Google Drive, Telegram groups, WhatsApp groups, Discord servers, Mega links, torrent networks, or social media;</li>
          <li>Organizing &ldquo;group buys&rdquo;, shared subscriptions, or screening lessons in public or commercial settings;</li>
          <li>Reselling, commercially republishing, or creating unauthorized derivative courses based on RisePaisa&rsquo;s proprietary curriculum.</li>
        </ul>
      </div>
      <p>
        <strong>Legal Enforcement:</strong> Any detected violation of our intellectual property will result in <strong>immediate, permanent termination of course access without refund</strong>, alongside civil damages claims under the <em>Muluki Dewani Samhita, 2074</em> and formal criminal complaints under Sections 25, 26, 27, and 28 of the <em>Copyright Act, 2059</em> and Section 47 of the <em>Electronic Transactions Act, 2063</em>.
      </p>

      <h2>6. Account Security &amp; Single-User Access</h2>
      <ul>
        <li>Each course enrollment is strictly for a <strong>single individual learner</strong>.</li>
        <li>You are responsible for safeguarding your access links, email, and credentials. You must notify RisePaisa immediately at <a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a> if you suspect unauthorized access to your account.</li>
        <li>Simultaneous logins from geographically conflicting IP addresses or multiple concurrent devices may trigger automated security alerts and temporary account suspension pending identity verification.</li>
      </ul>

      <h2>7. Permitted &amp; Prohibited Platform Conduct</h2>
      <p>When interacting with RisePaisa, including our live Q&amp;A sessions, student discussion channels, and contact avenues, you agree to conduct yourself professionally. You agree NOT to:</p>
      <ul>
        <li>Engage in harassment, abusive language, hate speech, or defamatory conduct towards instructors, team members, or fellow learners;</li>
        <li>Promote unauthorized commercial products, unsolicited investment schemes, multi-level marketing (MLM), or illegal financial platforms;</li>
        <li>Post speculative &ldquo;stock tips&rdquo;, pump-and-dump promotion, or market manipulation chatter;</li>
        <li>Attempt to probe, scan, or breach the security of the website or hosting infrastructure.</li>
      </ul>

      <h2>8. Curriculum Updates &amp; Course Enhancements</h2>
      <p>
        Because financial regulations, tax slabs (e.g., IRD Finance Acts), and NEPSE trading by-laws evolve regularly in Nepal, RisePaisa reserves the right to periodically update, modify, expand, or refine course lessons, worksheets, and resources to maintain pedagogical accuracy. Active students with valid enrollments receive access to all such lesson updates during their active enrollment period at no additional charge.
      </p>

      <h2>9. Technical Availability &amp; Service Maintenance</h2>
      <p>
        We make every reasonable commercial effort to ensure reliable, high-availability access to our website and video streaming servers. However:
      </p>
      <ul>
        <li>Temporary downtime may occasionally occur due to scheduled system maintenance, server upgrades, or telecommunications disruptions beyond our control;</li>
        <li>Third-party platform dependencies (such as YouTube video delivery, global CDN routing, or Nepal internet exchange latency) are subject to their respective service level agreements;</li>
        <li>If you experience prolonged technical impediments in accessing course materials, our support team will actively investigate and assist you within 24 to 48 business hours upon receiving written notice.</li>
      </ul>

      <h2>10. Refund and Cancellation Policy</h2>
      <p>
        All course purchases are final and non-refundable. Once payment has been completed and course enrollment has been processed, the amount paid will not be refunded. Please review the course information and available details carefully before making a purchase.
      </p>
      <p>
        All requests and inquiries regarding digital course access are strictly governed by these terms and our published <a href="${ROUTES.REFUND}">Refund &amp; Cancellation Policy</a>.
      </p>

      <h2>11. Educational Disclaimer &amp; Investment Risks</h2>
      <p>
        Course materials, financial calculators, and articles are provided for educational purposes only. Investing in the stock market (NEPSE) involves substantial financial risk, including the possible loss of principal. For detailed risk disclosures, please review our comprehensive <a href="${ROUTES.DISCLAIMER}">Educational Disclaimer</a>, which is incorporated into these Terms by reference.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted under applicable Nepalese law (including the <em>Consumer Protection Act, 2075</em>):
      </p>
      <ul>
        <li>RisePaisa, its founder Aakash Das, and its instructors shall <strong>not be liable</strong> for any indirect, special, incidental, punitive, or consequential damages whatsoever;</li>
        <li>RisePaisa shall <strong>not be liable</strong> for any investment losses, capital depreciation, trading deficits, lost profits, or business decisions made by you or any third party based on course content, calculators, or articles;</li>
        <li>In all circumstances where liability cannot be lawfully excluded, RisePaisa&rsquo;s maximum aggregate liability for any direct damages arising out of your enrollment or use of our services shall be strictly limited to the <strong>actual total amount paid by you</strong> for the specific course or resource in dispute.</li>
      </ul>

      <h2>13. Indemnification</h2>
      <p>
        Subject to applicable law, you agree to indemnify, defend, and hold harmless RisePaisa, Aakash Das, and its educators from and against any third-party claims, liabilities, damages, losses, or legal costs arising out of: (a) your willful breach of these Terms; (b) your unauthorized reproduction, piracy, or distribution of RisePaisa&rsquo;s intellectual property; or (c) your violation of any applicable law or rights of a third party.
      </p>

      <h2>14. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms, their interpretation, and any contractual or non-contractual disputes arising hereunder shall be governed by, construed, and enforced in accordance with the <strong>substantive laws of Nepal</strong>.
      </p>
      <p>
        <strong>Amicable Negotiation:</strong> In the event of any disagreement or dispute, the parties agree to first attempt to resolve the matter amicably through good-faith direct consultation within thirty (30) calendar days of written notice.
      </p>
      <p>
        <strong>Exclusive Jurisdiction:</strong> If the dispute cannot be resolved through amicable negotiation, the parties mutually agree that the <strong>competent courts situated in Kathmandu, Nepal</strong> shall have exclusive territorial and subject-matter jurisdiction over all legal proceedings.
      </p>

      <h2>15. Amendments &amp; Severability</h2>
      <p>
        We reserve the right to revise or update these Terms periodically to reflect evolving legal, regulatory, or operational requirements. Any revisions will be published on this page with an updated &ldquo;Last updated&rdquo; timestamp. Continued use of our platform following published modifications signifies your acceptance of the revised Terms.
      </p>
      <p>
        If any individual clause or provision of these Terms is determined by a court of competent jurisdiction to be invalid, unlawful, or unenforceable, that specific clause shall be severed or limited to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Contact Information &amp; Official Communications</h3>
        <p>If you have any questions, legal notices, or inquiries regarding these Terms &amp; Conditions, please contact us:</p>
        <div class="legal-contact-grid">
          <div class="legal-contact-item">
            <span class="legal-contact-label">Platform Founder</span>
            <span class="legal-contact-val">Aakash Das</span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Official Email</span>
            <span class="legal-contact-val"><a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">WhatsApp Helpline</span>
            <span class="legal-contact-val"><a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Location</span>
            <span class="legal-contact-val">Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. PRIVACY POLICY
  // ─────────────────────────────────────────────────────────────────────────
  privacy: {
    title: 'Privacy Policy',
    badge: 'Data Protection & Privacy · Individual Privacy Act 2075',
    description: 'How RisePaisa collects, uses, and safeguards your personal data under the Individual Privacy Act 2075 of Nepal across courses, calculators, and communications.',
    lastUpdated: 'October 2026',
    content: `
      <p class="legal-lead">
        At <strong>RisePaisa</strong> (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>&rdquo;), we take your privacy seriously. This Privacy Policy explains transparently how we collect, process, store, and protect your personal information when you visit <a href="https://risepaisa.com">risepaisa.com</a>, enroll in our courses, utilize our financial calculators, or interact with our team.
      </p>

      <div class="legal-callout-box">
        <h4>${ICONS.shield} Compliance with Nepalese Privacy Legislation</h4>
        <p>
          This policy is established in full compliance with the <strong>Individual Privacy Act, 2075 (वैयक्तिक गोपनीयता सम्बन्धी ऐन, २०७५)</strong> and the <strong>Individual Privacy Rules, 2077</strong> of Nepal. We treat all student and user data with confidentiality, integrity, and strict purpose limitation.
        </p>
      </div>

      <h2>1. Information We Actually Collect</h2>
      <p>We believe in data minimization. We collect only information that is strictly necessary to deliver high-quality financial education and support:</p>

      <h3>1.1 Information You Voluntarily Provide</h3>
      <ul>
        <li><strong>Enrollment &amp; Contact Details:</strong> When you enroll in a course or submit an inquiry, we collect your name, email address, and mobile phone / WhatsApp number;</li>
        <li><strong>Communication Data:</strong> Inquiries, feedback, questions, or clarification requests sent to us via WhatsApp, email, or our contact forms;</li>
        <li><strong>Payment Verification Data:</strong> When you complete a course purchase via eSewa, Khalti, connectIPS, or bank transfer, we collect the payment Transaction Reference ID, payment date, payer name, and payment confirmation receipt for verification and accounting.</li>
      </ul>

      <div class="legal-callout-box">
        <h4>${ICONS.lock} We Never Handle or Store Banking Credentials</h4>
        <p>
          All digital payments are executed directly within regulated third-party payment gateways (eSewa, Khalti, connectIPS) or your bank&rsquo;s secure app. RisePaisa <strong>never</strong> collects, processes, stores, or sees your bank login credentials, ATM PINs, mobile banking MPINs, or payment card CVV numbers.
        </p>
      </div>

      <h3>1.2 Automatically Collected Technical Information</h3>
      <ul>
        <li><strong>Device &amp; Browser Data:</strong> Standard server logs record IP addresses, browser types, operating systems, and referring URLs to ensure platform stability and protect against cyber abuse;</li>
        <li><strong>Local Browser Storage (LocalStorage):</strong> We use lightweight browser LocalStorage exclusively to remember your preferences (such as your chosen Dark/Light theme mode) and locally retain inputs on financial calculators for your convenience. This data stays on your local device and is never uploaded to remote tracking servers;</li>
        <li><strong>Privacy-Respecting Analytics:</strong> Aggregated, non-personally identifiable visit statistics (page views, lesson engagement metrics) to evaluate and improve curriculum clarity. We do not use third-party invasive behavioral tracking or cross-site advertising networks.</li>
      </ul>

      <h2>2. Purposes &amp; Legal Bases for Data Processing</h2>
      <p>Under Section 4 and Section 5 of the <em>Individual Privacy Act, 2075</em>, we process personal information based on the following legitimate grounds:</p>
      <ul>
        <li><strong>Contractual Performance:</strong> To verify your payment, create your enrollment record, issue your student access credentials, and deliver purchased educational courses and materials;</li>
        <li><strong>Educational Customer Support:</strong> To answer your questions, resolve technical streaming issues, and coordinate weekly live Q&amp;A sessions;</li>
        <li><strong>Legal &amp; Tax Compliance:</strong> To generate lawful invoices and maintain financial records required under the <em>Income Tax Act, 2058</em> of Nepal;</li>
        <li><strong>Platform Security &amp; Fraud Prevention:</strong> To detect duplicate payments, protect against unauthorized credential sharing, and prevent malicious attacks under the <em>Electronic Transactions Act, 2063</em>;</li>
        <li><strong>Direct Communications:</strong> To send essential course updates, lesson additions, or schedule announcements. You can opt out of non-essential announcements at any time.</li>
      </ul>

      <h2>3. Data Sharing &amp; Disclosure Restrictions</h2>
      <p>
        <strong>We do not sell, rent, lease, or monetize your personal data to any third party.</strong> Your information is never provided to marketing brokers, telemarketers, or stock brokers.
      </p>
      <p>We share personal data strictly under the following limited circumstances:</p>
      <ul>
        <li><strong>Authorized Technical Infrastructure Providers:</strong> Trusted cloud hosting providers and video delivery platforms that assist in operating our website under strict confidentiality obligations;</li>
        <li><strong>Regulated Payment Institutions:</strong> Verifying transaction reference IDs with licensed payment operators (eSewa, Khalti, NCHL connectIPS, commercial banks) strictly to confirm payment receipt;</li>
        <li><strong>Statutory Legal Mandate:</strong> Only when strictly required by a lawful court order, summons, or statutory directive issued by an authorized judicial or law enforcement authority in Nepal.</li>
      </ul>

      <h2>4. Data Retention Schedule</h2>
      <ul>
        <li><strong>Active Enrollment Records:</strong> Student enrollment records and access verification logs are retained for the duration of active platform operation plus a reasonable statutory archive period to maintain continuous student access and verify past transactions;</li>
        <li><strong>Financial &amp; Tax Records:</strong> Invoices and transaction payment records are retained for the mandatory statutory period mandated by the Inland Revenue Department (IRD Nepal) under the <em>Income Tax Act, 2058</em> (typically 5 to 7 fiscal years);</li>
        <li><strong>Inquiry &amp; Support Messages:</strong> General contact form inquiries and WhatsApp messages are retained only as long as necessary to address your inquiry or resolve ongoing support matters.</li>
      </ul>

      <h2>5. Security &amp; Safeguards</h2>
      <p>
        We employ industry-standard technical and organizational security controls to protect your personal data from unauthorized access, loss, or alteration. All web communications on <a href="https://risepaisa.com">risepaisa.com</a> are encrypted using Secure Sockets Layer / Transport Layer Security (HTTPS/TLS). Access to student contact lists and verification records is strictly restricted to authorized administrative personnel on a need-to-know basis.
      </p>

      <h2>6. Your Statutory Rights under Nepalese Law</h2>
      <p>
        In accordance with Chapter 3 of the <em>Individual Privacy Act, 2075</em>, you possess the following rights regarding your personal information:
      </p>
      <ul>
        <li><strong>Right to Access &amp; Information:</strong> You may request confirmation of the personal data we hold about you and receive a copy thereof;</li>
        <li><strong>Right to Rectification:</strong> If your name, email address, or contact phone number is inaccurate or incomplete, you may request prompt correction;</li>
        <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may request the deletion of your personal contact records, provided such retention is not required by statutory tax laws or ongoing contractual obligations;</li>
        <li><strong>Right to Withdraw Consent:</strong> You may opt out of non-essential informational broadcasts or updates at any time by replying &ldquo;STOP&rdquo; on WhatsApp or emailing our support desk.</li>
      </ul>

      <h2>7. Privacy of Minors</h2>
      <p>
        RisePaisa does not knowingly collect personal data from individuals under 16 years of age without verifiable parental or guardian consent. If we become aware that personal data of a minor has been collected without parental consent, we will take immediate steps to delete such information from our records.
      </p>

      <h2>8. Policy Updates &amp; Contact</h2>
      <p>
        We may update this Privacy Policy periodically to reflect technological developments, service enhancements, or legislative amendments in Nepal. Updated versions will be published with a revised timestamp.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Privacy Grievance Officer &amp; Inquiries</h3>
        <p>For any privacy-related requests, data corrections, or inquiries, please contact our Privacy Desk:</p>
        <div class="legal-contact-grid">
          <div class="legal-contact-item">
            <span class="legal-contact-label">Data Controller</span>
            <span class="legal-contact-val">RisePaisa (Attn: Aakash Das)</span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Privacy Email</span>
            <span class="legal-contact-val"><a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">WhatsApp Helpline</span>
            <span class="legal-contact-val"><a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Jurisdiction</span>
            <span class="legal-contact-val">Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. REFUND POLICY
  // ─────────────────────────────────────────────────────────────────────────
  refund: {
    title: 'Refund & Cancellation Policy',
    badge: 'Fair Trade & Consumer Protection · Consumer Protection Act 2075',
    description: 'Clear, fair, and transparent refund terms for online courses and digital resources on RisePaisa, respecting consumer protection laws in Nepal.',
    lastUpdated: 'October 2026',
    content: `
      <p class="legal-lead">
        At <strong>RisePaisa</strong>, we are committed to delivering the highest caliber of practical financial education for Nepal. We believe in fair dealing, absolute transparency, and mutual respect. This Refund &amp; Cancellation Policy sets out the exact terms, eligible scenarios, and administrative procedures governing refund requests for our online courses and digital resources.
      </p>

      <div class="legal-callout-box">
        <h4>${ICONS.shield} Alignment with the Consumer Protection Act, 2075</h4>
        <p>
          This policy is formulated in accordance with the principles of fair consumer trade under the <strong>Consumer Protection Act, 2075 (उपभोक्ता संरक्षण ऐन, २०७५)</strong> of Nepal. It balances statutory consumer rights regarding quality and non-defective delivery with the inherent technical realities of instantly delivered digital intellectual property.
        </p>
      </div>

      <h2>1. The Nature of Digital Educational Products</h2>
      <p>
        Unlike physical goods that can be returned in an unused, restockable condition, our courses consist of proprietary on-demand video lectures, downloadable financial modeling spreadsheets, and PDF guides. Upon access activation, these intellectual assets are immediately viewable and usable. Therefore, course fees are generally non-refundable once access credentials or streaming links have been delivered and accessed, subject to the specific eligible conditions set out below.
      </p>

      <h2>2. Eligible Circumstances for a Refund</h2>
      <p>
        RisePaisa will gladly issue a prompt, full refund under any of the following verified conditions:
      </p>
      <ol>
        <li>
          <strong>Duplicate or Accidental Excess Billing:</strong> If due to a technical error, wallet delay, or duplicate transaction you were billed more than once for the same course enrollment or product, we will refund <strong>100% of the duplicate amount</strong> immediately upon transaction verification.
        </li>
        <li>
          <strong>Technical Non-Delivery &amp; Failure to Resolve:</strong> If you have completed verified payment and our platform fails to deliver course access credentials or video streaming links, and our technical support team is <strong>unable to resolve the access impediment within 48 to 72 business hours</strong> after receiving your written notification, you are entitled to a complete, 100% refund.
        </li>
        <li>
          <strong>Pre-Activation Cancellation Request:</strong> If you enroll in a course and submit a formal cancellation request in writing <strong>before</strong> your access credentials or private course links have been generated, delivered, or activated on your account.
        </li>
        <li>
          <strong>Substantial Material Non-Conformity:</strong> If the delivered course material is fundamentally and demonstrably different from the published curriculum outline, or exhibits sustained, irreversible defects preventing learning as recognized under Section 16 of the <em>Consumer Protection Act, 2075</em>, verified following joint inspection with our team.
        </li>
      </ol>

      <h2>3. Non-Refundable Circumstances</h2>
      <p>A refund will NOT be granted under the following circumstances:</p>
      <ul>
        <li><strong>Change of Mind Post-Access:</strong> Requests made simply due to a change of personal preference or &ldquo;buyer&rsquo;s remorse&rdquo; after course credentials have been issued and video modules have been accessed or viewed;</li>
        <li><strong>Personal Time &amp; Scheduling Constraints:</strong> Inability to dedicate time to complete the course due to employment, academic, or personal schedule conflicts;</li>
        <li><strong>Stock Market Losses &amp; Trading Outcomes:</strong> Dissatisfaction arising from your personal investment decisions, trading losses on NEPSE, or broader capital market declines. RisePaisa provides financial education, not investment advice or guaranteed financial returns;</li>
        <li><strong>Violation of Terms &amp; Conditions:</strong> Accounts terminated or suspended due to copyright piracy, credential sharing, unauthorized recording, harassment, or breach of our <a href="${ROUTES.TERMS}">Terms &amp; Conditions</a>;</li>
        <li><strong>Purchases from Unauthorized Resellers:</strong> Any transaction executed through unauthorized third parties, group-buys, or fraudulent channels not authorized directly by RisePaisa.</li>
      </ul>

      <h2>4. Step-by-Step Refund Application Procedure</h2>
      <p>If you believe you meet one of the eligible refund criteria above, please follow this straightforward procedure:</p>
      <ul>
        <li><strong>Step 1: Submit Written Notice:</strong> Send an email to <a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a> or message our official WhatsApp support at <a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a> with the subject line: <code>Refund Request - [Course Name] - [Your Full Name]</code>.</li>
        <li><strong>Step 2: Provide Verification Details:</strong> Include your full name, registered mobile number/email, date of payment, exact payment amount, and the official <strong>Transaction Reference ID</strong> (from eSewa, Khalti, connectIPS, or your bank transfer receipt), along with a clear description of the issue.</li>
        <li><strong>Step 3: Review &amp; Assessment:</strong> Our team will review your application and transaction logs within <strong>3 to 5 business days</strong> and communicate an official decision in writing.</li>
        <li><strong>Step 4: Disbursement:</strong> If approved, the refund will be remitted back to your original payment source (eSewa wallet, Khalti wallet, or bank account) within <strong>5 to 7 business days</strong>. Any standard interbank transfer fees or payment gateway processing charges imposed by external switches will be handled in accordance with banking norms.</li>
      </ul>

      <h2>5. Fair Consumer Resolution &amp; Inquiries</h2>
      <p>
        We treat every student inquiry with empathy and integrity. If you face any technical difficulties with your course videos or learning materials, we strongly encourage you to contact our support team first so we can help you resolve the problem quickly.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Refund Desk &amp; Customer Support</h3>
        <p>For refund submissions, billing queries, or payment verification assistance, reach out directly:</p>
        <div class="legal-contact-grid">
          <div class="legal-contact-item">
            <span class="legal-contact-label">Billing Support Email</span>
            <span class="legal-contact-val"><a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">WhatsApp Helpline</span>
            <span class="legal-contact-val"><a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Turnaround Time</span>
            <span class="legal-contact-val">3 to 5 Business Days</span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Operating Hours</span>
            <span class="legal-contact-val">Sunday to Friday, 9:00 AM to 6:00 PM NPT</span>
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. EDUCATIONAL DISCLAIMER
  // ─────────────────────────────────────────────────────────────────────────
  disclaimer: {
    title: 'Educational Disclaimer & Risk Disclosure',
    badge: 'Regulatory Disclosure · Nepal Capital Markets',
    description: 'Statutory educational disclaimer and capital market risk disclosures regarding RisePaisa courses, calculators, and articles in Nepal.',
    lastUpdated: 'October 2026',
    content: `
      <p class="legal-lead">
        This Educational Disclaimer and Risk Disclosure (&ldquo;<strong>Disclaimer</strong>&rdquo;) governs your use of all content published by <strong>RisePaisa</strong> (<a href="https://risepaisa.com">risepaisa.com</a>), including our online video masterclasses, downloadable spreadsheets, financial calculation engines, and research articles. Please read this disclosure carefully.
      </p>

      <div class="legal-callout-box warning">
        <h4>${ICONS.shield} Educational &amp; Informational Purpose Only</h4>
        <p>
          <strong>All content published by RisePaisa is strictly for educational, informational, and financial literacy purposes.</strong> Nothing contained on this website, in our video lessons, or in our downloadable resources constitutes professional financial advice, investment advisory, portfolio management, tax counsel, or legal advice.
        </p>
      </div>

      <h2>1. Non-Licensed Status &amp; SEBON Disclosure</h2>
      <p>
        Under the <strong>Securities Act, 2063 (धितोपत्र सम्बन्धी ऐन, २०६३)</strong> of Nepal, securities brokerage, merchant banking, portfolio management services (PMS), and commercial investment advisory require specialized statutory licensing issued by the Securities Board of Nepal (SEBON).
      </p>
      <p>
        RisePaisa, its founder Aakash Das, and its instructors are <strong>NOT</strong> registered, licensed, or operating as:
      </p>
      <ul>
        <li>SEBON-licensed stock brokers or securities dealers;</li>
        <li>SEBON-licensed investment advisors or financial planners;</li>
        <li>SEBON-licensed portfolio managers (PMS) or asset management companies;</li>
        <li>SEBON-licensed merchant bankers or issue managers.</li>
      </ul>
      <p>
        We do not manage public funds, do not execute share trades on behalf of clients, and do not issue personalized buy, sell, or hold recommendations for any security listed on the Nepal Stock Exchange (NEPSE).
      </p>

      <h2>2. Not Individualized Financial, Tax, or Legal Advice</h2>
      <p>
        Every individual&rsquo;s personal financial situation, risk capacity, investment horizon, cash flow obligations, and tax liabilities are unique. The educational concepts taught by RisePaisa, such as fundamental ratio analysis, technical chart reading, progressive income tax slabs (FY 2082/83), or SIP compounding mechanics, are general pedagogical frameworks designed to foster foundational financial understanding.
      </p>
      <p>
        They do not consider your specific financial objectives, tax status, or personal risk tolerance. You should never base capital allocation decisions solely on general educational content. You are strongly advised to consult a qualified Chartered Accountant (CA), registered tax consultant, or authorized professional before making major financial commitments.
      </p>

      <h2>3. Capital Market &amp; NEPSE Investment Risks</h2>
      <p>
        Investing in equity shares, debentures, mutual funds, and other financial instruments on the Nepal Stock Exchange (NEPSE) involves substantial market risk:
      </p>
      <ul>
        <li><strong>Risk of Capital Loss:</strong> Stock prices fluctuate based on macroeconomic conditions, corporate earnings, interest rate changes enforced by Nepal Rastra Bank (NRB), market liquidity, and investor sentiment. You may lose some or all of your invested principal;</li>
        <li><strong>No Guaranteed Returns:</strong> RisePaisa strictly prohibits and disclaims any promise of &ldquo;guaranteed profits&rdquo;, &ldquo;risk-free income&rdquo;, or &ldquo;assured stock gains&rdquo;. There is no guarantee that any investment strategy will yield positive returns;</li>
        <li><strong>Liquidity &amp; Market Volatility:</strong> Secondary stock trading in Nepal is subject to market circuit breakers, liquidity constraints, and sector-specific risks. Never invest funds that you cannot afford to lose, and never invest emergency reserves or borrowed funds into equities.</li>
      </ul>

      <h2>4. Historical Case Studies &amp; Performance Disclosures</h2>
      <p>
        In our courses and articles, specific companies listed on NEPSE (such as commercial banks, hydropower companies, or manufacturing firms) and historical chart patterns are examined purely as <strong>academic case studies</strong> to teach practical analytical techniques (e.g., reading balance sheets, computing P/E ratios, understanding support and resistance).
      </p>
      <p>
        <strong>Past performance does not guarantee or indicate future results.</strong> The historical growth, past dividend payouts, or previous chart breakouts of any listed company do not guarantee that the company will perform similarly in the future. Case studies are never an endorsement or recommendation to trade that particular stock.
      </p>

      <h2>5. Accuracy &amp; Limitations of Financial Calculators</h2>
      <p>
        RisePaisa provides free interactive calculators (including SIP, EMI, Nepal Income Tax FY 2082/83, SWP, FD, Retirement Planner, and CAGR). While these tools are programmed using standard mathematical formulas and statutory tax slabs issued by the Inland Revenue Department (IRD Nepal), they are provided as <strong>simulation models for preliminary planning only</strong>.
      </p>
      <p>
        Actual banking figures may vary based on bank-specific Base Rates, compounding cycles, quarterly spread adjustments, and final IRD tax assessments. RisePaisa makes no warranty regarding the commercial suitability of calculations for formal banking or tax filing purposes.
      </p>

      <h2>6. Learner Independence &amp; Self-Responsibility</h2>
      <p>
        <strong>You are 100% solely and exclusively responsible for your own financial, investment, and trading choices.</strong> By utilizing our website, courses, or tools, you expressly acknowledge and agree that RisePaisa, Aakash Das, and its educators shall bear zero liability for any direct, indirect, or consequential financial losses, missed opportunities, or damages incurred as a result of your reliance on our educational content.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Questions Regarding this Disclaimer</h3>
        <p>If you have any questions regarding our educational scope or disclosures, please contact us:</p>
        <div class="legal-contact-grid">
          <div class="legal-contact-item">
            <span class="legal-contact-label">Inquiry Email</span>
            <span class="legal-contact-val"><a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">WhatsApp Helpline</span>
            <span class="legal-contact-val"><a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Related Policy</span>
            <span class="legal-contact-val"><a href="${ROUTES.EDITORIAL_POLICY || '/editorial-policy'}">Editorial &amp; Research Standards</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Location</span>
            <span class="legal-contact-val">Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. FREQUENTLY ASKED QUESTIONS (FAQ)
  // ─────────────────────────────────────────────────────────────────────────
  faq: {
    title: 'Frequently Asked Questions (FAQ)',
    badge: 'Knowledge Base · Common Questions Answered',
    description: 'Frequently asked questions regarding RisePaisa courses, course enrollment access, payments, calculators, and educational policies.',
    lastUpdated: 'October 2026',
    content: `
      <p class="legal-lead">
        Find clear, direct answers to common questions about RisePaisa courses, access periods, enrollment procedures, payment methods, and legal policies.
      </p>

      <h2>1. About RisePaisa &amp; Instructors</h2>

      <h3>What is RisePaisa?</h3>
      <p>
        RisePaisa is Nepal&rsquo;s dedicated financial education and research initiative founded by Aakash Das. We simplify complex Nepalese personal finance, NEPSE stock market investing, income tax regulations (IRD), and fintech tools into clear, practical courses, calculators, and research articles.
      </p>

      <h3>Who teaches the courses?</h3>
      <p>
        Our courses are created and taught primarily by founder <strong>Aakash Das</strong>, with specialized technical modules co-instructed by <strong>Bikash Das</strong>. You can review Aakash Das&rsquo;s background, educational philosophy, and experience on his <a href="${ROUTES.AAKASH_DAS}">Founder Profile</a>.
      </p>

      <h3>Is RisePaisa a stock broker or investment advisory firm?</h3>
      <p>
        No. RisePaisa is strictly an educational publishing platform. We are not a SEBON-licensed broker, merchant banker, or portfolio manager. We do not offer personalized investment advice or trade on behalf of users. Please review our <a href="${ROUTES.DISCLAIMER}">Educational Disclaimer</a> for complete details.
      </p>

      <h2>2. Course Enrollment &amp; Access Terms</h2>

      <h3>How do I enroll in a course?</h3>
      <p>
        Enrolling is fast and straightforward:
      </p>
      <ol>
        <li>Visit the course page (such as the <a href="/courses/nepse-stock-market-basics/learn?lesson=lesson-1">Share Market Full Course (NEPSE)</a>);</li>
        <li>Click the prominent <strong>&ldquo;Buy Course via WhatsApp&rdquo;</strong> button to chat directly with our official enrollment desk;</li>
        <li>Complete payment via any supported Nepali payment method (eSewa, Khalti, connectIPS, or direct bank transfer);</li>
        <li>Our team verifies your payment reference and activates your personalized course access.</li>
      </ol>

      <h3>How long do I have access to course materials?</h3>
      <p>
        Course access terms and duration are governed by our official <a href="${ROUTES.TERMS}">Terms &amp; Conditions</a>. Enrolled students receive access to watch structured video lessons and use companion learning materials during their active enrollment period. Downloadable worksheets and PDF checklists saved to your device remain in your possession for your individual educational study.
      </p>

      <h3>Can I download course videos or share my login?</h3>
      <p>
        No. Course video lessons are streamed for your individual, personal educational study. In accordance with the <em>Copyright Act, 2059</em> of Nepal, downloading, screen-recording, ripping, sharing credentials, or redistributing course content is strictly prohibited and constitutes copyright infringement. Please refer to Section 5 of our <a href="${ROUTES.TERMS}">Terms &amp; Conditions</a>.
      </p>

      <h3>Can I study on my mobile phone or computer?</h3>
      <p>
        Yes! RisePaisa is 100% responsive and optimized for smooth learning across mobile phones, tablets, laptops, and desktop computers.
      </p>

      <h2>3. Payments, Security &amp; Refunds</h2>

      <h3>What payment methods are accepted in Nepal?</h3>
      <p>
        We accept all major licensed payment channels in Nepal, including <strong>eSewa</strong>, <strong>Khalti</strong>, <strong>NCHL connectIPS</strong>, and direct commercial bank fund transfers. All prices are listed in Nepalese Rupees (NPR).
      </p>

      <h3>Does RisePaisa store my banking passwords or card PINs?</h3>
      <p>
        Never. All payments are executed directly within your bank&rsquo;s mobile app or regulated wallet interface. RisePaisa never asks for, sees, or stores your banking passwords, MPINs, or ATM PIN numbers.
      </p>

      <h3>What is your refund policy?</h3>
      <p>
        Due to the immediately accessible digital nature of our video courses and proprietary tools, course fees are generally non-refundable once access credentials or links have been delivered and accessed. However, we provide 100% refunds for duplicate transactions, technical non-delivery where access cannot be established within 48 to 72 hours, or pre-activation cancellations. Full details and procedures are available on our <a href="${ROUTES.REFUND}">Refund &amp; Cancellation Policy</a> page.
      </p>

      <h2>4. Free Calculators &amp; Learning Guides</h2>

      <h3>Are the financial calculators completely free?</h3>
      <p>
        Yes! All RisePaisa financial calculators, including SIP, EMI, Nepal Income Tax (FY 2082/83), SWP, Fixed Deposit, Loan Comparison, and Retirement Planner, are <strong>100% free</strong> with zero registration required.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Need Further Clarification?</h3>
        <p>If you have any other questions not addressed here, feel free to contact our team directly:</p>
        <div class="legal-contact-grid">
          <div class="legal-contact-item">
            <span class="legal-contact-label">General Support</span>
            <span class="legal-contact-val"><a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">WhatsApp Helpline</span>
            <span class="legal-contact-val"><a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Full Terms</span>
            <span class="legal-contact-val"><a href="${ROUTES.TERMS}">Terms &amp; Conditions</a></span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Location</span>
            <span class="legal-contact-val">Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    `
  }
};

export function renderLegalPage(type) {
  const normType = type === 'refund-policy' ? 'refund' : (type === 'editorial-policy' ? 'editorial' : type);
  const defaults = LEGAL_CONTENT[normType];
  if (!defaults) {
    setPageMeta('Page Not Found', '', ROUTES.HOME);
    return `<div class="section"><div class="container" style="text-align:center"><h1>Page Not Found</h1><a href="${ROUTES.HOME}" class="btn btn-primary" style="margin-top:var(--space-6)">Go Home</a></div></div>`;
  }

  const title = defaults.title;
  const badge = defaults.badge || 'Official Legal Documentation · Nepal';
  const lastUpdated = defaults.lastUpdated;
  const content = defaults.content;

  const pagePath = normType === 'privacy' 
    ? ROUTES.PRIVACY 
    : (normType === 'terms' 
      ? ROUTES.TERMS 
      : (normType === 'refund' 
        ? ROUTES.REFUND 
        : (normType === 'faq' 
          ? ROUTES.FAQ 
          : ROUTES.DISCLAIMER)));

  setPageMeta(title, defaults.description, pagePath);

  return `
    <div class="legal-page" id="legal-page">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="${ROUTES.HOME}">Home</a><span class="separator">/</span>
        <span>${title}</span>
      </nav>

      <div class="legal-header-badge">
        <span class="badge-pulse" style="width:6px;height:6px;border-radius:50%;background:var(--color-primary);display:inline-block"></span>
        ${badge}
      </div>

      <h1>${title}</h1>
      <p class="last-updated">Last verified &amp; updated: ${lastUpdated} · Governed by the Laws of Nepal</p>

      ${_renderLegalNav(normType)}

      <div class="legal-content-body">
        ${content}
      </div>
    </div>
  `;
}

export function initLegalPage() {
  // Smooth scroll or internal hash navigation if needed
}

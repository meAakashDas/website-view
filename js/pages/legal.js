// ==============================================
// risePaisa | Official Legal Documentation & Policies
// Terms & Conditions, Privacy Policy, Refund Policy, Educational Disclaimer & FAQ
// Governed by the Laws of Nepal:
// - Constitution of Nepal
// - National Civil Code (Muluki Dewani Samhita), 2074
// - Consumer Protection Act, 2075 (उपभोक्ता संरक्षण ऐन, २०७५)
// - Electronic Commerce Act, 2081 (विद्युतीय व्यापार ऐन, २०८१)
// - Individual Privacy Act, 2075 (वैयक्तिक गोपनीयता सम्बन्धी ऐन, २०७५) & Rules, 2077
// - Electronic Transactions Act, 2063 (विद्युतीय कारोबार ऐन, २०६३)
// - Copyright Act, 2059 (प्रतिलिपि अधिकार ऐन, २०५९)
// - Securities Act, 2063 (धितोपत्र सम्बन्धी ऐन, २०६३)
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
    description: 'Terms governing enrollment, one-year course access validity, intellectual property, payments, and limitations of liability on RisePaisa under Nepalese law.',
    lastUpdated: 'November 2026',
    content: `
      <p class="legal-lead">
        These Terms &amp; Conditions (&ldquo;<strong>Terms</strong>&rdquo;) constitute a legally binding agreement between you (&ldquo;<strong>User</strong>&rdquo;, &ldquo;<strong>Student</strong>&rdquo;, or &ldquo;<strong>You</strong>&rdquo;) and <strong>RisePaisa</strong> (&ldquo;<strong>RisePaisa</strong>&rdquo;, &ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>&rdquo;), founded by Aakash Das in Kathmandu, Nepal. These Terms govern your access to and use of our website (<a href="https://risepaisa.com">risepaisa.com</a>), online educational courses, digital learning materials, research documents, and analytical calculators.
      </p>

      <div class="legal-callout-box">
        <h4>${ICONS.shield} Statutory Notice &amp; Governing Jurisdiction</h4>
        <p>
          RisePaisa provides structured financial literacy and investor education tailored to Nepal. These Terms are formulated and enforced in strict compliance with the laws of Nepal, including the <strong>National Civil Code (Muluki Dewani Samhita), 2074</strong>, the <strong>Consumer Protection Act, 2075</strong>, the <strong>Electronic Commerce Act, 2081</strong>, the <strong>Individual Privacy Act, 2075</strong>, the <strong>Electronic Transactions Act, 2063</strong>, and the <strong>Copyright Act, 2059</strong>. By visiting our website, creating an account, or enrolling in our courses, you confirm that you have read, understood, and agreed to be bound by these Terms.
        </p>
      </div>

      <h2>1. Acceptance of Terms &amp; User Eligibility</h2>
      <p>
        <strong>1.1 Agreement upon Access or Purchase:</strong> By registering on RisePaisa, browsing our website, or completing a course enrollment, you signify your unreserved acceptance of these Terms. If you do not agree to these Terms, you must discontinue using our platform and services immediately.
      </p>
      <p>
        <strong>1.2 Continued Use:</strong> Your continued use of the platform following any published updates or revisions to these Terms confirms your ongoing acceptance of the updated terms.
      </p>
      <p>
        <strong>1.3 Contractual Capacity:</strong> In accordance with Part 5 of the <em>Muluki Dewani Samhita, 2074</em>, you affirm that you are at least sixteen (16) years of age or are accessing the platform with the informed consent and supervision of a parent or legal guardian who assumes full responsibility for your compliance.
      </p>
      <p>
        <strong>1.4 Accuracy of Registration Information:</strong> You are strictly responsible for providing true, current, and complete information during registration and enrollment (including your full legal name, valid email address, and active telephone or WhatsApp number). Providing false, misleading, or impersonated contact details constitutes a material breach of these Terms.
      </p>

      <h2>2. Nature &amp; Scope of Educational Services</h2>
      <p>
        <strong>2.1 Educational Publishing:</strong> RisePaisa develops and publishes self-paced digital educational masterclasses (such as the <em>Share Market Full Course (NEPSE)</em> and <em>Personal Finance Masterclass</em>), financial modeling spreadsheets, interactive financial calculators, and research articles focused on Nepal&rsquo;s economic ecosystem.
      </p>
      <p>
        <strong>2.2 Non-Licensed Advisory Status:</strong> RisePaisa operates exclusively as an educational publisher. RisePaisa, its founder Aakash Das, and its educators are <strong>not</strong> licensed or registered as stock brokers, merchant bankers, portfolio managers (PMS), or investment advisers with the Securities Board of Nepal (SEBON) under the <em>Securities Act, 2063</em>.
      </p>
      <p>
        <strong>2.3 No Individualized Financial Advice:</strong> Nothing contained in our video lessons, curriculum modules, downloadable templates, or calculators constitutes personalized investment advice, financial planning, portfolio recommendations, tax counsel, or legal advice. All materials are prepared strictly for general educational purposes.
      </p>

      <h2>3. Account Responsibility, Credential Protection &amp; Single-User License</h2>
      <p>
        <strong>3.1 Single-User Educational License:</strong> Each course enrollment and student account is granted solely to one (1) designated individual learner. Your enrollment represents a personal, non-exclusive, non-transferable, and revocable limited digital service licence.
      </p>
      <p>
        <strong>3.2 Protection of Login Credentials:</strong> You are solely responsible for maintaining the strict confidentiality of your account credentials, login passwords, and private course streaming links. You must not disclose, share, or transfer your login details to any other individual or entity.
      </p>
      <p>
        <strong>3.3 Strict Prohibition of Account Sharing:</strong> Sharing accounts, passwords, or course streaming links with third parties (including family members, friends, colleagues, study circles, or public internet groups) is strictly prohibited. Pooling purchases, organizing &ldquo;group buys&rdquo;, or reselling shared access violates Nepalese intellectual property and cyber law.
      </p>
      <p>
        <strong>3.4 Suspension and Termination for Breach:</strong> RisePaisa monitors concurrent sessions and abnormal traffic patterns. Detected instances of unauthorized credential sharing, simultaneous logins across conflicting geographical IP addresses, or account pooling will result in immediate suspension or permanent termination of course access without refund, alongside applicable legal remedies.
      </p>
      <p>
        <strong>3.5 Reporting Unauthorized Account Access:</strong> If you suspect or discover any unauthorized access to your account, password compromise, or security breach, you must notify RisePaisa immediately in writing at <a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a> or via our WhatsApp helpline at <a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a> so protective measures can be implemented.
      </p>

      <h2>4. Course Access and Validity</h2>
      <p>
        Access to purchased courses is provided for a period of one (1) year. Course access is not lifetime access. Once the applicable access period expires, access to the course content may be discontinued.
      </p>
      <ul>
        <li>
          <strong>4.1 Strict 365-Day Validity Period:</strong> Each purchased course provides access for <strong>ONE YEAR ONLY</strong>. Course access is valid for exactly 365 calendar days (1 year) from the recorded activation date following verified payment. The exact commencement date and expiration date are recorded in the student&rsquo;s official enrollment record.
        </li>
        <li>
          <strong>4.2 Automatic Expiration:</strong> Course access automatically expires at the conclusion of the 365-day validity period. Expired access does not continue indefinitely. Upon expiration, access to course streaming links, video lessons, and active course dashboards terminates automatically.
        </li>
        <li>
          <strong>4.3 Absolute Disclaimer of Lifetime Access:</strong> RisePaisa courses do <strong>NOT</strong> provide lifetime access. No lifetime access is promised, offered, or implied anywhere by RisePaisa. Purchasing course access does not confer permanent ownership of the course content, video assets, or platform infrastructure. The purchase represents a limited-term digital educational service licence.
        </li>
        <li>
          <strong>4.4 Extensions and Renewals:</strong> Renewal or extension of course access is available only if RisePaisa explicitly offers it in writing at its sole discretion upon payment of applicable renewal fees. RisePaisa does not promise automatic renewals or price-locked extensions.
        </li>
        <li>
          <strong>4.5 Curriculum Additions During Active Validity:</strong> During your active 365-day enrollment window, you receive access to any newly published curriculum updates, updated case studies, and refreshed Excel models added to your enrolled course at no additional charge.
        </li>
        <li>
          <strong>4.6 Downloadable Study Templates:</strong> Standalone supplementary study assets (such as Excel sheets, checklists, and PDF guides) downloaded to your personal device during your active 365-day access period remain in your possession for your individual, non-commercial educational study.
        </li>
      </ul>

      <h2>5. Intellectual Property &amp; Copyright Protection</h2>
      <p>
        <strong>5.1 Proprietary Ownership:</strong> All educational content on RisePaisa, including recorded video lectures, lesson outlines, curriculum frameworks, presentation slides, Excel financial models, mathematical formulas, research articles, PDF guides, website code, graphics, branding, and logos, is the exclusive intellectual property of RisePaisa and Aakash Das, protected under the <strong>Copyright Act, 2059 (प्रतिलिपि अधिकार ऐन, २०५९)</strong> and the <strong>Electronic Transactions Act, 2063</strong> of Nepal.
      </p>
      <div class="legal-callout-box warning">
        <h4>${ICONS.lock} Limited Personal Educational License &amp; Strict Anti-Piracy Notice</h4>
        <p>
          Purchasing course access grants you a limited, non-exclusive, non-transferable, and revocable license solely for your personal, private, non-commercial educational study. Purchasing access does <strong>not</strong> transfer copyright, title, or proprietary interest.
        </p>
        <p>
          <strong>You are strictly prohibited from:</strong>
        </p>
        <ul style="margin-bottom:0">
          <li>Screen-recording, ripping, downloading, streaming-ripping, or mirroring course video lessons;</li>
          <li>Uploading course videos, Excel templates, or PDF guides to cloud repositories, Google Drive, Telegram, WhatsApp groups, Discord, Mega, torrent networks, or file-sharing platforms;</li>
          <li>Sharing, leasing, lending, sublicensing, or transferring login credentials or course streaming links;</li>
          <li>Reselling, sub-licensing, or commercially republishing any RisePaisa content;</li>
          <li>Screening or broadcasting video lessons in public, educational, commercial, or coaching environments;</li>
          <li>Creating unauthorized derivative courses, summaries, or materials based on RisePaisa&rsquo;s proprietary curriculum.</li>
        </ul>
      </div>
      <p>
        <strong>5.2 Statutory Legal Enforcement:</strong> Any detected violation of our intellectual property will result in immediate, permanent termination of course access without refund. RisePaisa actively pursues civil damages under Chapter 2 of the <em>Muluki Dewani Samhita, 2074</em> and initiates formal criminal proceedings under Sections 25, 26, 27, and 28 of the <em>Copyright Act, 2059</em> and Section 45 and 47 of the <em>Electronic Transactions Act, 2063</em>.
      </p>

      <h2>6. Payments, Pricing &amp; Financial Disclosures</h2>
      <p>
        <strong>6.1 Transparent Pricing:</strong> All course fees and product prices are clearly indicated in Nepalese Rupees (NPR) before purchase. The published standard fee for the <em>Share Market Full Course (NEPSE)</em> is <strong>NPR 2,999</strong>. Any promotional rates, bundles, or fee revisions will be explicitly displayed prior to payment confirmation.
      </p>
      <p>
        <strong>6.2 Authorized Payment Rails:</strong> Payments must be executed through authorized, licensed Payment Service Providers (PSPs) and Payment System Operators (PSOs) in Nepal, such as <strong>eSewa</strong>, <strong>Khalti</strong>, <strong>NCHL connectIPS</strong>, or authorized commercial bank fund transfers.
      </p>
      <p>
        <strong>6.3 Security of Financial Credentials:</strong> All electronic payments are processed directly within the secure, regulated interfaces of licensed payment gateways or commercial banking applications. RisePaisa <strong>never</strong> collects, processes, views, or stores your bank login credentials, ATM PINs, mobile banking MPINs, or payment card CVVs.
      </p>
      <p>
        <strong>6.4 Access Activation upon Verification:</strong> Course access is granted only after successful, verified receipt of payment. Students are advised to retain official transaction receipts, payment screenshots, and unique Transaction Reference IDs issued by the payment operator.
      </p>
      <p>
        <strong>6.5 Duplicate Payments &amp; Failed Transactions:</strong> If your account is debited but course access is not provisioned, or if an accidental duplicate payment occurs due to gateway network lag, RisePaisa investigates the transaction logs promptly upon receiving written notice. Verified duplicate charges will be refunded in accordance with our <a href="${ROUTES.REFUND}">Refund &amp; Cancellation Policy</a>.
      </p>

      <h2>7. Platform Conduct &amp; Prohibited Activities</h2>
      <p>When interacting with RisePaisa, including our live Q&amp;A sessions, student communication channels, and support desks, you agree to conduct yourself ethically and professionally. You agree NOT to:</p>
      <ul>
        <li>Harass, abuse, defame, threaten, or demean instructors, support team members, or fellow learners;</li>
        <li>Promote unauthorized commercial products, multi-level marketing (MLM) schemes, pyramid arrangements, or illegal financial schemes;</li>
        <li>Post speculative &ldquo;stock tips&rdquo;, pump-and-dump claims, or market manipulation discussions relating to NEPSE;</li>
        <li>Probe, scan, reverse-engineer, or attempt to compromise the security, integrity, or availability of our website or server infrastructure.</li>
      </ul>

      <h2>8. Suspension and Termination of Service</h2>
      <p>
        <strong>8.1 Right to Suspend or Terminate:</strong> RisePaisa reserves the right to restrict, suspend, or permanently terminate your account and course access upon verified evidence of:
      </p>
      <ul>
        <li>Fraudulent enrollment, payment fraud, or chargeback abuse;</li>
        <li>Unauthorized sharing of account credentials, passwords, or course links;</li>
        <li>Copyright infringement, video piracy, or commercial redistribution of proprietary assets;</li>
        <li>Cybersecurity threats, malicious network behavior, or unauthorized automated scraping;</li>
        <li>Abusive, defamatory, or disruptive conduct toward platform staff or learners;</li>
        <li>Any material violation of these Terms.</li>
      </ul>
      <p>
        <strong>8.2 Proportionate Enforcement &amp; Legal Remedies:</strong> Disciplinary actions are applied proportionately following internal review. Account suspension or termination does not restrict RisePaisa from pursuing further statutory civil damages or criminal penalties under applicable Nepalese law.
      </p>

      <h2>9. Technical Availability, Compatibility &amp; Service Maintenance</h2>
      <p>
        <strong>9.1 Reasonable Commercial Efforts:</strong> We make every commercially reasonable effort to maintain high availability and uninterrupted streaming access to our educational materials.
      </p>
      <p>
        <strong>9.2 Maintenance and Third-Party Dependencies:</strong> Temporary service disruptions may occur due to scheduled infrastructure maintenance, hosting updates, or third-party service provider outages (such as global CDN routing or telecommunications exchange latency in Nepal).
      </p>
      <p>
        <strong>9.3 Support Response Commitment:</strong> If you experience persistent technical difficulties accessing purchased lessons, our support desk will investigate and provide technical guidance within <strong>24 to 48 business hours</strong> upon receiving written notification.
      </p>

      <h2>10. Refund and Cancellation Policy</h2>
      <p>
        All course purchases are final and non-refundable. Once payment has been completed and course enrollment has been processed, the amount paid will not be refunded. Please review the course information and available details carefully before making a purchase.
      </p>
      <p>
        All refund requests, duplicate payment claims, and technical non-delivery scenarios are strictly governed by these Terms and our standalone <a href="${ROUTES.REFUND}">Refund &amp; Cancellation Policy</a>. The Refund Policy provides comprehensive consumer remedies for verified duplicate billing, technical non-delivery, and material service non-conformity in strict accordance with the <em>Consumer Protection Act, 2075</em> and the <em>Electronic Commerce Act, 2081</em>.
      </p>

      <h2>11. Educational Disclaimer &amp; Capital Market Risks</h2>
      <p>
        All courses, financial models, research articles, and interactive calculators published by RisePaisa are strictly for educational and financial literacy purposes. Investing in shares, mutual funds, and debentures on the Nepal Stock Exchange (NEPSE) involves substantial market risk, including the possible loss of principal. For comprehensive disclosures, please review our published <a href="${ROUTES.DISCLAIMER}">Educational Disclaimer</a>, which is incorporated into these Terms by reference.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>
        <strong>12.1 Exclusion of Consequential Damages:</strong> To the maximum extent permitted by applicable Nepalese law, RisePaisa, its founder Aakash Das, and its educators shall not be liable for any indirect, special, incidental, punitive, or consequential damages whatsoever, including but not limited to loss of capital, trading losses on NEPSE, lost profits, business interruptions, or investment decisions made on the basis of our educational materials.
      </p>
      <p>
        <strong>12.2 Preservation of Non-Waivable Statutory Consumer Rights:</strong> Nothing in these Terms attempts to exclude, restrict, or modify any statutory consumer guarantee, warranty, or remedy that cannot lawfully be excluded under Section 3(2) and Section 16 of the <em>Consumer Protection Act, 2075</em>, or Section 9 and Section 10 of the <em>Electronic Commerce Act, 2081</em>.
      </p>
      <p>
        <strong>12.3 Aggregate Financial Cap:</strong> In all circumstances where statutory liability cannot be lawfully excluded, RisePaisa&rsquo;s total aggregate liability arising out of your enrollment or use of our services shall be strictly capped at the <strong>actual total amount paid by you</strong> for the specific course or resource in dispute.
      </p>

      <h2>13. Indemnification</h2>
      <p>
        Subject to applicable law, you agree to defend, indemnify, and hold harmless RisePaisa, its founder Aakash Das, and its team from and against any third-party claims, liabilities, damages, losses, or legal expenses arising out of: (a) your willful breach of these Terms; (b) your unauthorized copying, piracy, or distribution of RisePaisa&rsquo;s intellectual property; or (c) your violation of any statutory law or third-party rights.
      </p>

      <h2>14. Governing Law &amp; Dispute Resolution</h2>
      <p>
        <strong>14.1 Substantive Laws of Nepal:</strong> These Terms, their interpretation, and any contractual or non-contractual disputes arising hereunder shall be governed by, construed, and enforced in accordance with the <strong>substantive laws of Nepal</strong>.
      </p>
      <p>
        <strong>14.2 Good-Faith Amicable Consultation:</strong> In the event of any dispute, controversy, or claim arising between the parties, the parties agree to first attempt to resolve the matter amicably through direct, good-faith consultation within thirty (30) calendar days of written notice.
      </p>
      <p>
        <strong>14.3 Competent Jurisdiction:</strong> If the dispute cannot be settled through amicable consultation, the matter shall be submitted to the <strong>competent courts situated in Kathmandu, Nepal</strong>, which shall exercise exclusive jurisdiction.
      </p>
      <p>
        <strong>14.4 Statutory Consumer Recourse:</strong> Nothing in this dispute resolution clause precludes a consumer from exercising statutory rights to lodge formal grievances with the Department of Commerce, Supplies and Consumer Protection (वाणिज्य, आपूर्ति तथा उपभोक्ता संरक्षण विभाग) or competent consumer dispute resolution forums under the <em>Consumer Protection Act, 2075</em> and the <em>Electronic Commerce Act, 2081</em>.
      </p>

      <h2>15. Amendments &amp; Severability</h2>
      <p>
        <strong>15.1 Amendments:</strong> We reserve the right to revise or update these Terms periodically to reflect evolving legal, regulatory, or operational requirements in Nepal. Any revisions will be published on this page with an updated &ldquo;Last verified &amp; updated&rdquo; timestamp.
      </p>
      <p>
        <strong>15.2 Severability:</strong> If any specific clause or provision of these Terms is held invalid, illegal, or unenforceable by a court of competent jurisdiction, such clause shall be severed or modified to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Contact Information &amp; Official Communications</h3>
        <p>For questions, formal notices, or inquiries regarding these Terms &amp; Conditions, please reach out to our official desk:</p>
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
            <span class="legal-contact-label">Operating Location</span>
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
    description: 'How RisePaisa collects, uses, safeguards, and respects your personal data under the Individual Privacy Act 2075 of Nepal across courses, calculators, and communications.',
    lastUpdated: 'November 2026',
    content: `
      <p class="legal-lead">
        At <strong>RisePaisa</strong> (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>&rdquo;), founded by Aakash Das in Kathmandu, Nepal, we respect your privacy. This Privacy Policy transparently explains how we collect, process, store, and protect your personal information when you visit <a href="https://risepaisa.com">risepaisa.com</a>, enroll in our courses, utilize our financial calculators, or communicate with our support desk.
      </p>

      <div class="legal-callout-box">
        <h4>${ICONS.shield} Statutory Alignment with Nepalese Privacy Legislation</h4>
        <p>
          This policy is established in full compliance with the <strong>Individual Privacy Act, 2075 (वैयक्तिक गोपनीयता सम्बन्धी ऐन, २०७५)</strong> and the <strong>Individual Privacy Rules, 2077 (वैयक्तिक गोपनीयता सम्बन्धी नियमावली, २०७७)</strong> of Nepal, alongside Section 48 of the <em>Electronic Transactions Act, 2063</em>. We uphold data minimization, purpose limitation, and strict confidentiality for all student and user records.
        </p>
      </div>

      <h2>1. Information We Actually Collect</h2>
      <p>
        We believe in data minimization. We collect only information that is strictly necessary to deliver high-quality financial education, fulfill contractual course enrollments, ensure platform security, and comply with applicable laws of Nepal.
      </p>

      <h3>1.1 Information You Voluntarily Provide</h3>
      <ul>
        <li><strong>Account &amp; Registration Details:</strong> When you enroll in a course or submit an inquiry, we collect your full legal name, email address, student ID, and mobile phone / WhatsApp number;</li>
        <li><strong>Support &amp; Educational Communications:</strong> Queries, lesson questions, feedback, or verification requests submitted via email, WhatsApp, or contact forms;</li>
        <li><strong>Payment Verification References:</strong> When you complete a course purchase via eSewa, Khalti, connectIPS, or bank transfer, we collect the official Transaction Reference ID, transaction date, payer name, and payment receipt screenshot to verify enrollment and maintain statutory accounting records.</li>
      </ul>

      <div class="legal-callout-box">
        <h4>${ICONS.lock} Strict Financial Data Protection: We Never Store Banking Credentials</h4>
        <p>
          All electronic transactions are executed directly within the encrypted interfaces of licensed payment gateways (eSewa, Khalti, connectIPS) or your bank&rsquo;s official mobile banking application. RisePaisa <strong>never</strong> collects, processes, stores, or sees your bank account passwords, ATM PINs, mobile banking MPINs, or payment card CVVs.
        </p>
      </div>

      <h3>1.2 Technical Data &amp; Platform Usage Information</h3>
      <ul>
        <li><strong>Authentication Credentials:</strong> Where user authentication accounts are active, credentials and tokens are securely managed via industry-standard Firebase Authentication (Google Cloud) with encrypted tokens;</li>
        <li><strong>Server Log Data:</strong> Standard server logs record IP addresses, browser user-agents, operating systems, referring URLs, and access timestamps. This technical information is collected exclusively to diagnose system faults, detect unauthorized concurrent credential usage, and protect against cyber attacks under Section 45 and 47 of the <em>Electronic Transactions Act, 2063</em>;</li>
        <li><strong>Functional Local Browser Storage (LocalStorage):</strong> We use lightweight client-side LocalStorage exclusively to remember functional preferences (such as your chosen Dark/Light theme mode) and temporarily retain inputs on financial calculators for your convenience. This data resides solely on your personal device and is never uploaded to remote tracking servers;</li>
        <li><strong>Privacy-Enhanced Streaming:</strong> Video playback on RisePaisa uses privacy-enhanced video embeds (such as youtube-nocookie) to minimize third-party cross-site behavioral tracking. We do not deploy invasive advertising cookies or cross-site tracking pixels.</li>
      </ul>

      <h2>2. Purposes &amp; Lawful Grounds for Data Processing</h2>
      <p>
        In accordance with Sections 4 and 5 of the <em>Individual Privacy Act, 2075</em>, we process personal information exclusively under the following lawful grounds:
      </p>
      <ul>
        <li><strong>Contractual Performance &amp; Service Delivery:</strong> To verify your payment, create your enrollment record, issue your one-year course access credentials, and provide technical support during your 365-day validity period;</li>
        <li><strong>Student Support &amp; Educational Inquiries:</strong> To respond to your questions regarding course concepts, troubleshoot access issues, and coordinate educational announcements;</li>
        <li><strong>Statutory Tax &amp; Accounting Obligations:</strong> To generate lawful invoices and maintain verified financial transaction records as mandated under the <em>Income Tax Act, 2058</em> of Nepal;</li>
        <li><strong>Platform Security &amp; Anti-Piracy Protection:</strong> To detect credential sharing, prevent unauthorized account pooling, detect duplicate payments, and protect platform assets under the <em>Electronic Transactions Act, 2063</em>;</li>
        <li><strong>Informed Consent:</strong> For voluntary communications, updates, or educational announcements where you have provided express consent. You may withdraw consent for optional communications at any time.</li>
      </ul>

      <h2>3. Data Sharing, Disclosures &amp; Third-Party Services</h2>
      <p>
        <strong>We do not sell, rent, trade, or monetize your personal information to third parties.</strong> We never supply student data to telemarketers, credit bureaus, stock brokers, or advertising networks.
      </p>
      <p>We share personal data strictly under the following limited and transparent circumstances:</p>
      <ul>
        <li><strong>Authorized Cloud Infrastructure Providers:</strong> Trusted cloud hosting and database infrastructure providers (such as Google Cloud / Firebase) that operate under strict confidentiality agreements and industry-standard security certifications;</li>
        <li><strong>Regulated Payment Service Operators:</strong> Verifying transaction reference IDs with licensed payment operators (eSewa, Khalti, NCHL connectIPS, and commercial banks) solely to confirm receipt of funds;</li>
        <li><strong>Statutory Legal Directives:</strong> Disclosing records only when strictly mandated by a valid court order, summons, or lawful investigation directed by a competent law enforcement or regulatory authority in Nepal.</li>
      </ul>

      <h2>4. Data Retention Schedule</h2>
      <ul>
        <li><strong>Active Enrollment Records:</strong> Student registration details, student IDs, and access logs are retained throughout the active 365-day enrollment period plus a reasonable operational archival period (up to 3 years) to verify past enrollments, prevent credential misuse, and handle certificate or verification inquiries;</li>
        <li><strong>Statutory Financial &amp; Tax Records:</strong> Invoices, payment receipts, and transaction reference logs are retained for five (5) to seven (7) fiscal years as required by the Inland Revenue Department (IRD Nepal) under the <em>Income Tax Act, 2058</em>;</li>
        <li><strong>Customer Inquiries &amp; Support Communications:</strong> General inquiries and support messages sent via email or WhatsApp are retained only as long as necessary to resolve the inquiry and maintain continuity of support.</li>
      </ul>

      <h2>5. Security Controls &amp; Technical Safeguards</h2>
      <p>
        RisePaisa deploys appropriate technical and organizational measures to safeguard your personal data from unauthorized access, accidental loss, alteration, or disclosure:
      </p>
      <ul>
        <li>All web traffic between your device and <a href="https://risepaisa.com">risepaisa.com</a> is encrypted using Transport Layer Security (HTTPS/TLS);</li>
        <li>Administrative access to student contact details and enrollment databases is strictly restricted to authorized personnel on a need-to-know basis using role-based authentication;</li>
        <li>While we implement robust, industry-standard safeguards, no method of transmission over the internet or electronic database can be guaranteed 100% impenetrable. We commit to actively monitoring systems and promptly addressing any security incidents in accordance with applicable laws.</li>
      </ul>

      <h2>6. Your Statutory Rights Under the Individual Privacy Act, 2075</h2>
      <p>
        Under Chapter 3 of the <em>Individual Privacy Act, 2075</em> of Nepal, you possess clear statutory rights regarding your personal data:
      </p>
      <ul>
        <li><strong>Right to Access &amp; Information:</strong> You have the right to request confirmation of what personal information RisePaisa holds regarding your account and receive a copy thereof;</li>
        <li><strong>Right to Rectification:</strong> If your registered legal name, email address, or contact number is inaccurate, incomplete, or outdated, you may request prompt correction;</li>
        <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may request the deletion of your personal account data once the purpose for collection is fulfilled, provided retention is not required by statutory tax laws or ongoing contractual dispute proceedings;</li>
        <li><strong>Right to Withdraw Consent:</strong> You may opt out of non-essential announcements or updates at any time by emailing our support desk or messaging our helpline.</li>
      </ul>

      <h2>7. Privacy of Minors</h2>
      <p>
        RisePaisa does not knowingly collect personal data from individuals under sixteen (16) years of age without verified parental or legal guardian consent. If we discover that personal data of a minor has been collected without appropriate consent, we will promptly delete such information from our records.
      </p>

      <h2>8. Policy Updates &amp; Contact</h2>
      <p>
        We may update this Privacy Policy periodically to reflect technological enhancements, operational changes, or statutory amendments in Nepal. Any revisions will be published on this page with a revised verification date.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Privacy Grievance Officer &amp; Data Protection Desk</h3>
        <p>To exercise your statutory privacy rights, submit data corrections, or report privacy concerns, please contact our designated Privacy Desk:</p>
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
    description: 'Clear, transparent digital course refund policy under the Consumer Protection Act 2075 and Electronic Commerce Act 2081 of Nepal.',
    lastUpdated: 'November 2026',
    content: `
      <p class="legal-lead">
        At <strong>RisePaisa</strong>, we are committed to delivering high-caliber, practical financial education tailored for Nepal. We believe in fair trade, absolute transparency, and professional accountability. This Refund &amp; Cancellation Policy sets out the exact terms, eligible scenarios, procedural requirements, and statutory timelines governing refund requests for our online digital courses and learning materials.
      </p>

      <div class="legal-callout-box">
        <h4>${ICONS.shield} Statutory Compliance: Consumer Protection Act, 2075 &amp; Electronic Commerce Act, 2081</h4>
        <p>
          This policy is formulated in strict accordance with the <strong>Consumer Protection Act, 2075 (उपभोक्ता संरक्षण ऐन, २०७५)</strong> and the <strong>Electronic Commerce Act, 2081 (विद्युतीय व्यापार ऐन, २०८१)</strong> of Nepal. It balances consumer rights to quality, non-defective digital services with the technical characteristics of instantly delivered, self-paced digital educational content.
        </p>
      </div>

      <h2>1. The Nature of Digital Course Services</h2>
      <p>
        <strong>1.1 Instant Digital Delivery:</strong> RisePaisa courses consist of proprietary on-demand video lectures, downloadable financial modeling spreadsheets, and PDF guides. Unlike physical goods that can be physically returned in an unused, restockable condition, digital access credentials and streaming links provide immediate access to proprietary intellectual assets upon activation.
      </p>
      <p>
        <strong>1.2 Due Diligence Before Enrollment:</strong> Prospective learners are strongly encouraged to carefully review the published course description, curriculum outline, instructor background, fee structure (e.g. NPR 2,999 for the Share Market Full Course), one-year access validity period, and device requirements before completing a purchase.
      </p>
      <p>
        <strong>1.3 Inactivity Does Not Constitute Refund Entitlement:</strong> Deciding not to watch the lessons, failing to access the materials, or personal scheduling conflicts following successful access activation does not automatically create an entitlement to a refund.
      </p>

      <h2>2. No Refund for Ordinary Change of Mind</h2>
      <p>
        In accordance with standard digital commerce practice and subject to applicable consumer protection laws of Nepal, once course access credentials or streaming links have been successfully generated, delivered, and activated on your account, refunds are <strong>not provided for ordinary change of mind</strong>.
      </p>
      <p>Circumstances that do NOT qualify for a refund following access activation include:</p>
      <ul>
        <li><strong>Change of Mind or Personal Preference:</strong> Deciding you no longer wish to pursue the course or experiencing &ldquo;buyer&rsquo;s remorse&rdquo; after credentials have been issued;</li>
        <li><strong>Loss of Interest or Motivation:</strong> Losing interest or motivation to study personal finance or NEPSE share market concepts;</li>
        <li><strong>Scheduling &amp; Time Constraints:</strong> Inability to dedicate time to complete the modules due to employment, academic, or personal schedule conflicts;</li>
        <li><strong>Failure to Watch or Study:</strong> Not logging in, not watching the video lessons, or not utilizing the companion spreadsheets during the access period;</li>
        <li><strong>Subjective Relevance:</strong> Deciding after activation that the course concepts are no longer personally useful for your immediate situation;</li>
        <li><strong>Investment &amp; Trading Outcomes:</strong> Dissatisfaction arising from personal investment decisions, capital market losses on NEPSE, or broader economic volatility. RisePaisa provides financial education, not investment advice, stock tips, or guaranteed capital returns;</li>
        <li><strong>Failure to Complete Within Access Period:</strong> Inability or failure to complete the curriculum before the strict one-year (365 days) access validity period automatically expires.</li>
      </ul>
      <p>
        This policy operates strictly without prejudice to mandatory statutory consumer protections and remedies guaranteed under the laws of Nepal.
      </p>

      <h2>3. Verified Scenarios Requiring Investigation and Legitimate Remedies</h2>
      <p>
        RisePaisa clearly distinguishes ordinary change-of-mind requests from legitimate service-related issues. We investigate all genuine transaction and technical complaints promptly and provide full remedies, including a complete 100% refund, under any of the following verified circumstances:
      </p>
      <ol>
        <li>
          <strong>Duplicate or Accidental Excess Billing:</strong> If due to a technical error, wallet network delay, or duplicate transaction you were billed more than once for the same course enrollment, RisePaisa will refund <strong>100% of the duplicate amount</strong> immediately upon transaction verification.
        </li>
        <li>
          <strong>Technical Non-Delivery &amp; Failure to Resolve:</strong> If you have completed verified payment and our platform fails to deliver course access credentials or video streaming links, and our technical support team is unable to resolve the access impediment within <strong>48 to 72 business hours</strong> after receiving your written notification, you are entitled to a complete, 100% refund.
        </li>
        <li>
          <strong>Pre-Activation Cancellation Request:</strong> If you enroll in a course and submit a formal cancellation request in writing <strong>before</strong> your access credentials or private course links have been generated, dispatched, or activated on your account.
        </li>
        <li>
          <strong>Material Non-Conformity or Service Deficiency:</strong> If the delivered educational service is fundamentally and demonstrably different from the published curriculum outline, or exhibits sustained, irreversible technical defects preventing study as recognized under Section 16 of the <em>Consumer Protection Act, 2075</em> and Section 10 of the <em>Electronic Commerce Act, 2081</em>, verified following joint inspection with our team.
        </li>
        <li>
          <strong>Unauthorized Transaction:</strong> If a payment was executed fraudulently without the account holder&rsquo;s knowledge or consent, subject to formal verification with the relevant payment service operator and banking switch.
        </li>
      </ol>
      <p>
        Where a refund is legally required under Nepalese law, it will be executed without imposing unfair deductions, in accordance with applicable banking and e-commerce rules.
      </p>

      <h2>4. Step-by-Step Refund Application Procedure</h2>
      <p>If you believe you meet one of the eligible remedy criteria set forth in Section 3, please follow this straightforward procedure:</p>
      <ul>
        <li>
          <strong>Step 1: Contact Official Support:</strong> Send an email to our official billing desk at <a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a> or message our official WhatsApp helpline at <a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a> with the subject: <code>Refund Request - [Course Name] - [Your Full Name]</code>.
        </li>
        <li>
          <strong>Step 2: Provide Verification Details:</strong> Include your registered email address, student ID (if issued), mobile phone number, date of payment, exact amount paid, and the official <strong>Transaction Reference ID</strong> issued by eSewa, Khalti, connectIPS, or your commercial bank.
        </li>
        <li>
          <strong>Step 3: State the Ground Clearly:</strong> Provide a clear, detailed explanation of the issue (e.g. duplicate billing proof, access link non-delivery, or technical defect description).
        </li>
        <li>
          <strong>Step 4: Verification &amp; Investigation:</strong> RisePaisa verifies the transaction with the payment operator and checks server access logs to validate the claim.
        </li>
        <li>
          <strong>Step 5: Written Determination:</strong> You will receive a clear written determination explaining the outcome of the investigation and the applicable remedy.
        </li>
      </ul>

      <h2>5. Statutory Grievance Handling Mechanism (Electronic Commerce Act, 2081)</h2>
      <p>
        <strong>5.1 Formal Complaint Mechanism:</strong> In compliance with Section 33 (दफा ३३) of the <em>Electronic Commerce Act, 2081</em>, RisePaisa maintains a dedicated grievance handling mechanism for e-commerce consumers.
      </p>
      <p>
        <strong>5.2 Statutory 15-Day Resolution Period:</strong> All formal consumer complaints and grievances received through our official channels are registered immediately. Under Section 33(3) and 33(5) of the Act, RisePaisa will investigate the matter and deliver a formal written decision and resolution <strong>within 15 calendar days</strong> from the date of grievance registration.
      </p>
      <p>
        <strong>5.3 Consumer Redress &amp; Appeal:</strong> If a consumer is not satisfied with the grievance decision or if the complaint is not resolved within the statutory period, the consumer retains the statutory right to seek redress before the Department of Commerce, Supplies and Consumer Protection (वाणिज्य, आपूर्ति तथा उपभोक्ता संरक्षण विभाग) or competent consumer dispute resolution forums.
      </p>

      <h2>6. Refund Processing Timelines &amp; Disbursement</h2>
      <p>
        <strong>6.1 Disbursement Initiation:</strong> Where a refund is approved under Section 3 or ordered under Section 5, RisePaisa will initiate the refund within <strong>seven (7) calendar days</strong> of the approval date, in accordance with Section 10 of the <em>Electronic Commerce Act, 2081</em>.
      </p>
      <p>
        <strong>6.2 Original Payment Rail:</strong> Refunds are disbursed directly back to the original source payment instrument (your registered eSewa digital wallet, Khalti digital wallet, or bank account via connectIPS). We do not issue cash refunds or third-party transfers.
      </p>
      <p>
        <strong>6.3 Banking Clearance Periods:</strong> While RisePaisa initiates the remittance promptly, the final appearance of funds in your bank account depends on interbank clearing cycles, national switch settlement schedules (NCHL), and receiving bank processing norms.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Refund Desk &amp; Grievance Handling Office</h3>
        <p>For refund submissions, transaction inquiries, or formal grievances, contact our official desk:</p>
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
            <span class="legal-contact-label">Grievance Decision Period</span>
            <span class="legal-contact-val">Within 15 Days (Statutory)</span>
          </div>
          <div class="legal-contact-item">
            <span class="legal-contact-label">Operating Hours</span>
            <span class="legal-contact-val">Sunday to Friday, 9:00 AM – 6:00 PM NPT</span>
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
    lastUpdated: 'November 2026',
    content: `
      <p class="legal-lead">
        This Educational Disclaimer and Risk Disclosure (&ldquo;<strong>Disclaimer</strong>&rdquo;) governs your use of all content published by <strong>RisePaisa</strong> (<a href="https://risepaisa.com">risepaisa.com</a>), founded by Aakash Das in Kathmandu, Nepal. This includes our online video masterclasses, financial modeling spreadsheets, interactive calculation engines, and research articles. Please read this disclosure carefully.
      </p>

      <div class="legal-callout-box warning">
        <h4>${ICONS.shield} Educational &amp; Financial Literacy Purpose Only</h4>
        <p>
          <strong>All content published by RisePaisa is strictly for educational, informational, and financial literacy purposes.</strong> Nothing contained on this website, in our video lessons, in downloadable spreadsheets, or in our financial calculators constitutes professional investment advice, financial planning, portfolio management, tax counsel, or legal advice.
        </p>
      </div>

      <h2>1. Educational Purpose &amp; Scope of Coverage</h2>
      <p>
        RisePaisa provides structured, research-backed financial education tailored to Nepal&rsquo;s legal and economic environment. Our materials and curriculum cover:
      </p>
      <ul>
        <li><strong>Nepal Stock Exchange (NEPSE):</strong> Secondary market mechanics, fundamental financial statement analysis, technical analysis frameworks, and corporate dividend valuation;</li>
        <li><strong>Initial Public Offerings (IPOs):</strong> C-ASBA application procedures, MeroShare navigation, prospectus evaluation, and allotment mechanisms governed by SEBON;</li>
        <li><strong>Mutual Funds:</strong> Open-ended and close-ended mutual fund schemes, Net Asset Value (NAV) mechanics, and Systematic Investment Plans (SIPs);</li>
        <li><strong>Commercial Banking &amp; Loans:</strong> NRB Base Rate mechanics, reducing balance interest, EMI calculations, home loans, education loans, and prepayment rules;</li>
        <li><strong>Taxation &amp; Deductions:</strong> Progressive individual income tax slabs (FY 2082/83), SSF/EPF/CIT allowable deductions, and Capital Gains Tax (CGT) under the <em>Income Tax Act, 2058</em>;</li>
        <li><strong>Personal Finance &amp; Insurance:</strong> Emergency funds, family cash-flow budgeting, life insurance principles, and retirement planning.</li>
      </ul>

      <h2>2. Non-Licensed Status &amp; SEBON Statutory Disclosure</h2>
      <p>
        Under the <strong>Securities Act, 2063 (धितोपत्र सम्बन्धी ऐन, २०६३)</strong> of Nepal, commercial investment advisory, securities brokerage, merchant banking, and portfolio management services (PMS) require formal statutory licensing issued by the Securities Board of Nepal (SEBON).
      </p>
      <p>
        RisePaisa, its founder Aakash Das, and its educators are <strong>NOT</strong> registered, licensed, or operating as:
      </p>
      <ul>
        <li>SEBON-licensed stock brokers or securities dealers;</li>
        <li>SEBON-licensed merchant bankers or issue managers;</li>
        <li>SEBON-licensed portfolio management service (PMS) providers or asset management companies;</li>
        <li>SEBON-licensed investment advisers or certified financial planners.</li>
      </ul>
      <p>
        RisePaisa does not manage public or private capital, does not execute share trades on behalf of clients, and does not issue individualized buy, sell, or hold recommendations for any security listed on NEPSE.
      </p>

      <h2>3. No Investment Guarantees &amp; Capital Market Risks</h2>
      <p>
        Investing in equity shares, debentures, mutual funds, and other financial instruments on the Nepal Stock Exchange (NEPSE) involves substantial risk:
      </p>
      <ul>
        <li><strong>Risk of Capital Loss:</strong> Stock prices fluctuate based on corporate earnings, macroeconomic factors, interest rate cycles enforced by Nepal Rastra Bank (NRB), market liquidity, and investor sentiment. You may lose some or all of your invested principal;</li>
        <li><strong>No Guaranteed Profits:</strong> RisePaisa strictly disclaims any promise of &ldquo;guaranteed profits&rdquo;, &ldquo;risk-free income&rdquo;, or &ldquo;assured stock gains&rdquo;. No investment strategy can guarantee positive returns in fluctuating markets;</li>
        <li><strong>Past Performance Disclaimer:</strong> Past performance does not guarantee or indicate future results. Historical earnings growth, previous dividend payouts, or chart breakouts examined in academic case studies do not guarantee that a company or security will perform similarly in the future;</li>
        <li><strong>No Income or Employment Guarantee:</strong> Enrolling in or completing RisePaisa courses does not guarantee employment, career advancement, specific income levels, or investment success;</li>
        <li><strong>Prudent Capital Allocation:</strong> Never invest emergency reserves, living expenses, or borrowed funds into the stock market.</li>
      </ul>

      <h2>4. No Professional Advisory Relationship</h2>
      <p>
        Engaging with RisePaisa&rsquo;s educational content does not establish an investment advisory, financial planning, fiduciary, accounting, or legal relationship between you and RisePaisa or Aakash Das.
      </p>
      <p>
        Every individual possesses unique financial objectives, tax obligations, family responsibilities, and risk tolerance. General educational lessons cannot substitute for individualized professional advice. You are strongly advised to consult a qualified Chartered Accountant (CA), registered tax practitioner, or licensed financial professional before making significant financial commitments.
      </p>

      <h2>5. Accuracy &amp; Operational Limitations of Financial Calculators</h2>
      <p>
        RisePaisa provides free interactive simulation tools (including SIP, EMI, Nepal Income Tax FY 2082/83, SWP, Fixed Deposit, Loan Comparison, and Retirement Planners).
      </p>
      <p>
        <strong>Preliminary Simulation Only:</strong> These tools calculate estimates based on standard mathematical formulas, user-entered inputs, and statutory tax slabs issued by the Inland Revenue Department (IRD Nepal). They are provided strictly for preliminary planning.
      </p>
      <p>
        <strong>Differences from Actual Figures:</strong> Results may differ from actual calculations determined by commercial banks, cooperatives, microfinance institutions, or the IRD due to bank-specific Base Rates, compounding frequencies, quarterly premium adjustments, and individual tax assessments. RisePaisa makes no warranty regarding the official validity of calculations for formal banking or tax filing purposes.
      </p>

      <h2>6. Third-Party Information, External Sources &amp; Regulatory Changes</h2>
      <p>
        Our articles and courses frequently reference statutory bodies, regulatory publications (NRB, SEBON, IRD, NEPSE, CDSC), external websites, and market tools.
      </p>
      <p>
        Financial regulations, circulars, and tax laws in Nepal change periodically. While RisePaisa makes reasonable efforts to verify primary sources, we do not warrant the continuous accuracy, availability, or completeness of third-party information or external websites.
      </p>

      <h2>7. Learner Independence &amp; Sole Responsibility</h2>
      <p>
        <strong>You are 100% solely and exclusively responsible for your own financial, investment, and tax decisions.</strong> By using our website, courses, spreadsheets, or calculators, you expressly acknowledge and agree that RisePaisa, Aakash Das, and its educators shall bear no liability for any direct, indirect, or consequential financial losses, missed opportunities, or damages resulting from your investment actions.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Questions Regarding this Disclaimer</h3>
        <p>If you have any questions regarding our educational scope, disclosures, or regulatory status, please contact our team:</p>
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
    description: 'Frequently asked questions regarding RisePaisa courses, one-year course access validity, payments, refunds, calculators, and educational policies.',
    lastUpdated: 'November 2026',
    content: `
      <p class="legal-lead">
        Find clear, direct answers to common questions about RisePaisa courses, one-year access validity, enrollment procedures, payment methods, refund terms, and legal policies.
      </p>

      <h2>1. Course Access, Validity &amp; Accounts</h2>

      <h3>1. How long does course access last?</h3>
      <p>
        Course access lasts for <strong>strictly one (1) year (365 calendar days)</strong> from your verified activation date following payment. The exact commencement and expiry dates are officially recorded in your student record. Once the 365-day period ends, access automatically expires.
      </p>

      <h3>2. Does RisePaisa provide lifetime access?</h3>
      <p>
        <strong>No. RisePaisa courses do NOT provide lifetime access.</strong> No course offers, promises, or implies lifetime access. Purchasing a course grants a limited-term, 365-day digital educational service licence. It does not transfer permanent ownership of the course content.
      </p>

      <h3>3. Can I extend or renew my course access?</h3>
      <p>
        Renewal or extension is available only if RisePaisa explicitly offers it at its discretion upon completion of your validity period. If offered, students may renew access for an additional period by paying the applicable renewal fee. RisePaisa does not promise automatic renewal.
      </p>

      <h3>4. Can I share my account or course login with others?</h3>
      <p>
        <strong>No. Sharing accounts is strictly prohibited.</strong> Each enrollment is a single-user licence exclusively for one individual learner. Sharing credentials, passwords, or course streaming links with friends, family, or groups is a violation of our Terms and Nepalese cyber law. Concurrent logins from conflicting locations may trigger automated security suspension.
      </p>

      <h3>5. Can I download and redistribute course materials?</h3>
      <p>
        <strong>No. Course videos are streamed for individual personal study only.</strong> In accordance with the <em>Copyright Act, 2059</em> of Nepal, downloading, screen-recording, ripping, sharing, or commercially redistributing video lessons is strictly prohibited and constitutes copyright infringement. Downloadable supplementary study templates (such as Excel sheets and PDF checklists) saved to your personal device during active enrollment remain available for your individual, non-commercial study.
      </p>

      <h3>6. What happens when my one-year access expires?</h3>
      <p>
        When your 365-day access validity period concludes, your course streaming access automatically terminates and is discontinued. You will no longer be able to stream video lessons or access active student course areas unless a renewal is explicitly offered and purchased.
      </p>

      <h2>2. Payments, Pricing &amp; Refunds</h2>

      <h3>7. Can I request a refund after activating course access?</h3>
      <p>
        Because RisePaisa courses provide immediate digital access to proprietary video masterclasses and educational assets, refunds are <strong>generally not provided for ordinary change of mind</strong> once access has been activated. Reasons such as changing your mind, losing interest, lack of study time, not watching lessons, or stock market trading outcomes do not qualify for a refund. However, this policy is subject to mandatory consumer protections under Nepalese law, and legitimate remedies are provided for verified technical non-delivery, duplicate billing, and material service defects.
      </p>

      <h3>8. What happens if payment is deducted but course access is not provided?</h3>
      <p>
        If your payment is successfully deducted but access credentials or links are not delivered, contact our support team immediately with your transaction reference ID. If our technical support team is unable to resolve the access impediment within <strong>48 to 72 business hours</strong>, you are entitled to a complete <strong>100% refund</strong>.
      </p>

      <h3>9. What happens if I pay twice or get charged an excess amount?</h3>
      <p>
        If duplicate or accidental excess billing occurs due to a technical glitch, payment gateway delay, or network lag, RisePaisa will refund <strong>100% of the duplicate amount</strong> immediately upon transaction verification.
      </p>

      <h3>10. How do I contact customer support?</h3>
      <p>
        You can reach our official support desk via email at <a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a> or via our official WhatsApp helpline at <a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a>. Our regular support hours are Sunday to Friday, 9:00 AM to 6:00 PM NPT.
      </p>

      <h2>3. Legal, Disclaimers &amp; Regulatory Protection</h2>

      <h3>11. Does RisePaisa guarantee investment returns or trading profits?</h3>
      <p>
        <strong>No. RisePaisa does NOT guarantee financial returns, profits, or capital gains.</strong> All content is purely for financial education and literacy. Investments in the stock market (NEPSE) carry capital risk, including the loss of invested principal. You are solely responsible for your own investment decisions.
      </p>

      <h3>12. Are the financial calculators official tax or banking determinations?</h3>
      <p>
        No. All RisePaisa calculators (SIP, EMI, Income Tax FY 2082/83, SWP, FD, Retirement Planner, etc.) are mathematical simulation models intended for preliminary estimation only. Actual figures depend on bank-specific Base Rates, compounding cycles, and final assessments by the Inland Revenue Department (IRD Nepal).
      </p>

      <h3>13. How does RisePaisa handle and protect my personal information?</h3>
      <p>
        We handle personal data in strict compliance with the <em>Individual Privacy Act, 2075</em> of Nepal. We collect only necessary details (name, email, phone/WhatsApp, payment reference ID), never collect or store banking passwords or PINs, never sell your data, encrypt web traffic with HTTPS/TLS, and honor statutory rights to data access, correction, and erasure.
      </p>

      <h3>14. How can I submit a formal complaint or grievance?</h3>
      <p>
        In compliance with Section 33 of the <em>Electronic Commerce Act, 2081</em>, RisePaisa maintains a dedicated grievance handling mechanism. You can submit a written complaint to <a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a> or message our WhatsApp helpline. We register all complaints, investigate transaction and service records, and communicate a formal written decision and remedy <strong>within 15 calendar days</strong>. If unresolved, consumers may seek redress before the Department of Commerce, Supplies and Consumer Protection.
      </p>

      <div class="legal-contact-card">
        <h3>${ICONS.mail} Need Further Assistance?</h3>
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

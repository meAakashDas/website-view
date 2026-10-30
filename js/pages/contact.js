// ==============================================
// risePaisa | Contact Page (Dual Contact Section)
// Dynamic links from Admin → Settings → Contact Links
// ==============================================
import { ICONS, setPageMeta } from '../components.js';
import { getSettings } from '../data/settings.js';

// ── LinkedIn icon (not in shared ICONS) ──────────
const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

// ── Verified check badge icon ────────────────────
const ICON_VERIFIED_BADGE = `<svg viewBox="0 0 22 22" fill="none" class="contact-verified-badge"><circle cx="11" cy="11" r="11" fill="var(--color-accent)"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// ── External link icon ───────────────────────────
const ICON_EXTERNAL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

// ── Platform definitions (icon + display label + description fallback) ──
const PLATFORM_DEFS = {
  tiktok:    { icon: ICONS.tiktok,    label: 'TikTok' },
  instagram: { icon: ICONS.instagram, label: 'Instagram' },
  facebook:  { icon: ICONS.facebook,  label: 'Facebook' },
  youtube:   { icon: ICONS.youtube,   label: 'YouTube' },
  twitter:   { icon: ICONS.twitter,   label: 'X' },
  linkedin:  { icon: ICON_LINKEDIN,   label: 'LinkedIn' },
};

const RISEPAISA_DESCRIPTIONS = {
  tiktok:    'Daily 60-sec finance truths for Nepal',
  instagram: 'Finance visuals, carousels & case studies',
  facebook:  'Live sessions on tax, FD, stocks & mutual funds',
  youtube:   'In-depth finance breakdowns (Nepal focused)',
  twitter:   "Sharp takes on Nepal's financial system",
  linkedin:  'Nepal-focused financial literacy advocacy',
};

const AAKASH_DESCRIPTIONS = {
  tiktok:    'Educational shorts & financial breakdowns',
  instagram: 'Visual insights, economic notes & updates',
  facebook:  'Community discussions & educational posts',
  youtube:   'In-depth finance masterclasses & tutorials',
  twitter:   'Macro perspectives & market commentary',
  linkedin:  'Professional background, software & fintech',
};

// ── Build social array from stored links ─────────
function _buildSocials(links, ownerName, descriptions) {
  if (!links) return [];
  const result = [];
  for (const [key, def] of Object.entries(PLATFORM_DEFS)) {
    const url = links[key];
    // Skip if empty or just '#'
    if (!url || url === '#' || url.trim() === '') continue;
    result.push({
      platform: def.label,
      icon: def.icon,
      title: ownerName,
      desc: descriptions[key] || '',
      url: url.trim(),
    });
  }
  return result;
}

// ── Social card renderer ─────────────────────────
function renderSocialCard(social) {
  return `
    <a href="${social.url}" target="_blank" rel="noopener" class="social-link-card" id="social-${social.platform.toLowerCase()}-${social.title.replace(/\s+/g, '-').toLowerCase()}">
      <div class="social-link-card__icon">${social.icon}</div>
      <div class="social-link-card__info">
        <div class="social-link-card__title">${social.title}</div>
        <div class="social-link-card__desc">${social.desc}</div>
      </div>
      <div class="social-link-card__arrow">${ICON_EXTERNAL}</div>
    </a>
  `;
}

// ── Contact block renderer ───────────────────────
function renderContactBlock(name, description, imgSrc, socials) {
  if (socials.length === 0) return ''; // Hide entire block if no links
  return `
    <div class="contact-block">
      <div class="contact-block__header">
        <div class="contact-block__avatar">
          <img src="${imgSrc}" alt="${name}" loading="lazy" decoding="async">
        </div>
        <div class="contact-block__name-row">
          <h3 class="contact-block__name">${name} ${ICON_VERIFIED_BADGE}</h3>
        </div>
        <p class="contact-block__desc">${description}</p>
      </div>
      <div class="contact-block__socials">
        ${socials.map(s => renderSocialCard(s)).join('')}
      </div>
    </div>
  `;
}

// ── Page render ──────────────────────────────────
export function renderContactPage() {
  setPageMeta(
    'Contact RisePaisa — Support, Course Inquiries & Official Channels',
    'Official contact details, student support pathways, pre-purchase inquiries, and WhatsApp enrollment assistance for RisePaisa and founder Aakash Das.'
  );

  const settings = getSettings();
  const cl = settings.contactLinks || {};

  const risePaisaSocials = _buildSocials(cl.risepaisa, 'RisePaisa', RISEPAISA_DESCRIPTIONS);
  const aakashSocials    = _buildSocials(cl.aakash,    'Aakash Das', AAKASH_DESCRIPTIONS);

  const waPrePurchaseMsg = encodeURIComponent('Hi RisePaisa, I have a few questions about the Share Market Course (NEPSE) before enrolling.');
  const waPaymentMsg     = encodeURIComponent('Hi RisePaisa, I have sent payment of NPR 2,999 for course enrollment. Here is my transaction reference: ');
  const waStudentHelpMsg = encodeURIComponent('Hi RisePaisa, I am an enrolled student and need help accessing my course account.');

  return `
    <!-- 1. Official Social Profiles -->
    <section class="section contact-social-section" id="contact-social-section">
      <div class="container contact-container">
        <div class="section-header contact-section-header">
          <span class="section-eyebrow">PUBLIC COMMUNITIES</span>
          <h2>Official Social Profiles</h2>
          <p>Follow RisePaisa and Aakash Das.</p>
        </div>

        <div class="contact-dual-grid">
          ${renderContactBlock(
            'RisePaisa',
            'Nepal-focused financial education: curriculum, calculators, guides, and platform resources.',
            'assets/images/risepaisa.jpg',
            risePaisaSocials
          )}
          ${renderContactBlock(
            'Aakash Das',
            'Founder of RisePaisa | Finance Educator & Content Creator.',
            'assets/images/aakash-das-founder-risepaisa.jpg',
            aakashSocials
          )}
        </div>

        ${risePaisaSocials.length === 0 && aakashSocials.length === 0 ? `
          <div style="text-align:center;padding:32px 0;color:var(--color-text-muted)">
            <p style="font-size:1rem;margin-bottom:8px">No contact links configured yet.</p>
          </div>
        ` : ''}
      </div>
    </section>

    <!-- 2. Contact RisePaisa & Inquiries -->
    <section class="section section-alt contact-inquiries-section" id="contact-support-pathways">
      <div class="container contact-container">
        <div class="section-header contact-section-header">
          <span class="section-eyebrow">CONTACT &amp; SUPPORT</span>
          <h2>Contact RisePaisa</h2>
          <p>Get help with courses, payments, student access, or feedback.</p>
        </div>

        <div class="contact-inquiry-header">
          <span class="section-eyebrow">CONTACT OPTIONS</span>
          <h3>How Can We Help?</h3>
        </div>

        <div class="contact-inquiry-grid">
          
          <!-- Pathway 1: Course Inquiries -->
          <div class="contact-inquiry-card">
            <div class="contact-inquiry-card-body">
              <div class="contact-inquiry-card-top">
                <div class="contact-inquiry-icon" aria-hidden="true">
                  ${ICONS.bookOpen}
                </div>
                <h4 class="contact-inquiry-title">Course Inquiries</h4>
              </div>
              <p class="contact-inquiry-desc">
                Questions about the NEPSE course? Contact us before enrolling.
              </p>
            </div>
            <a
              href="https://wa.me/9779740269317?text=${waPrePurchaseMsg}"
              target="_blank"
              rel="noopener"
              class="btn btn-whatsapp contact-inquiry-btn"
            >
              ${ICONS.whatsapp} Ask via WhatsApp
            </a>
          </div>

          <!-- Pathway 2: Verify Payment -->
          <div class="contact-inquiry-card">
            <div class="contact-inquiry-card-body">
              <div class="contact-inquiry-card-top">
                <div class="contact-inquiry-icon" aria-hidden="true">
                  ${ICONS.receipt}
                </div>
                <h4 class="contact-inquiry-title">Verify Payment</h4>
              </div>
              <p class="contact-inquiry-desc">
                Submit your payment receipt and transaction ID.
              </p>
            </div>
            <a
              href="https://wa.me/9779740269317?text=${waPaymentMsg}"
              target="_blank"
              rel="noopener"
              class="btn btn-whatsapp contact-inquiry-btn"
            >
              ${ICONS.whatsapp} Verify via WhatsApp
            </a>
          </div>

          <!-- Pathway 3: Student Access Help -->
          <div class="contact-inquiry-card">
            <div class="contact-inquiry-card-body">
              <div class="contact-inquiry-card-top">
                <div class="contact-inquiry-icon" aria-hidden="true">
                  ${ICONS.shield}
                </div>
                <h4 class="contact-inquiry-title">Student Access Help</h4>
              </div>
              <p class="contact-inquiry-desc">
                Need help with your course or account?
              </p>
            </div>
            <a
              href="https://wa.me/9779740269317?text=${waStudentHelpMsg}"
              target="_blank"
              rel="noopener"
              class="btn btn-secondary contact-inquiry-btn"
            >
              ${ICONS.whatsapp} Student Support
            </a>
          </div>

          <!-- Pathway 4: Feedback & Media -->
          <div class="contact-inquiry-card">
            <div class="contact-inquiry-card-body">
              <div class="contact-inquiry-card-top">
                <div class="contact-inquiry-icon" aria-hidden="true">
                  ${ICONS.check}
                </div>
                <h4 class="contact-inquiry-title">Feedback &amp; Media</h4>
              </div>
              <p class="contact-inquiry-desc">
                Report errors, share feedback, or discuss partnerships.
              </p>
            </div>
            <a
              href="mailto:itsaakashdas@gmail.com?subject=RisePaisa%20Feedback%20or%20Media%20Inquiry"
              class="btn btn-secondary contact-inquiry-btn"
            >
              ${ICONS.mail} Email Editorial Desk
            </a>
          </div>

        </div>

        <!-- Verified Operational Channels Panel -->
        <div class="legal-contact-card contact-official-channels">
          <h3>${ICONS.shield} Verified Official Channels</h3>
          <p>
            Contact RisePaisa only through the official channels listed below.
          </p>
          <div class="legal-contact-grid">
            <div class="legal-contact-item">
              <span class="legal-contact-label">Official WhatsApp</span>
              <span class="legal-contact-val"><a href="https://wa.me/9779740269317" target="_blank" rel="noopener">+977 9740269317</a></span>
            </div>
            <div class="legal-contact-item">
              <span class="legal-contact-label">Official Email</span>
              <span class="legal-contact-val"><a href="mailto:itsaakashdas@gmail.com">itsaakashdas@gmail.com</a></span>
            </div>
            <div class="legal-contact-item">
              <span class="legal-contact-label">Operating Schedule</span>
              <span class="legal-contact-val">Sunday to Friday, 9:00 AM – 6:00 PM NPT</span>
            </div>
            <div class="legal-contact-item">
              <span class="legal-contact-label">Physical Location</span>
              <span class="legal-contact-val">Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

// ── Page init ────────────────────────────────────
export function initContactPage() {
  // No special interactivity needed
}

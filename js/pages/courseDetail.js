// ==============================================
// risePaisa — Course Detail Page (Auth-Aware)
// ==============================================
import { getCourseBySlug } from '../data/courses.js';
import { getSettings } from '../data/settings.js';
import { ICONS, setPageMeta, initAccordions } from '../components.js';
import { ROUTES } from '../routes.js';

// ── YouTube URL → Embed URL converter ────────────
// Accepts any YouTube format and returns embed URL, or null if invalid
function _toYouTubeEmbed(url) {
  if (!url || typeof url !== 'string') return null;
  url = url.trim();
  if (!url) return null;

  let videoId = null;

  // Format: https://www.youtube.com/embed/VIDEO_ID or youtube-nocookie.com
  const embedMatch = url.match(/youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}`;

  // Format: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) videoId = watchMatch[1];

  // Format: https://youtu.be/VIDEO_ID
  if (!videoId) {
    const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (shortMatch) videoId = shortMatch[1];
  }

  // Format: https://www.youtube.com/v/VIDEO_ID
  if (!videoId) {
    const vMatch = url.match(/youtube\.com\/v\/([a-zA-Z0-9_-]{11})/);
    if (vMatch) videoId = vMatch[1];
  }

  if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}`;
  return null;
}

export function renderCourseDetailPage(slug) {
  const course = getCourseBySlug(slug);
  if (!course) {
    setPageMeta('Course Not Found', '', ROUTES.COURSES);
    return `<div class="section"><div class="container" style="text-align:center"><h1>Course Not Found</h1><p>Sorry, we couldn't find that course.</p><a href="${ROUTES.COURSES}" class="btn btn-primary" style="margin-top:var(--space-6)">Browse Courses</a></div></div>`;
  }

  setPageMeta(course.title, course.shortDescription, ROUTES.COURSE_DETAIL(course.slug));
  const WHATSAPP_NUMBER = getSettings().whatsapp;
  const waLink    = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I want to buy the ' + course.title + ' course.')}`;
  const waAskLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I want to ask about the ' + course.title + ' course.')}`;

  const thumbMap = {
    1: 'assets/images/course-nepse.png',
    2: 'assets/images/course-finance.png',
    3: 'assets/images/course-tax.png',
    4: 'assets/images/course-mutual.png',
    5: 'assets/images/course-fintech.png',
  };

  // Calculate curriculum stats
  const totalLessons = course.curriculum.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalModules = course.curriculum.length;
  const estimatedHours = 2.5;

  // Anchor price (original price before discount)
  const anchorPrice = Math.round(course.price * 2);

  // Parse target audience into bullet points
  const audiencePoints = course.targetAudience
    .split(/,\s*(?:and\s+)?|;\s*/)
    .map(s => s.trim().replace(/^and\s+/i, ''))
    .filter(s => s.length > 0);

  // Parse fullDescription into paragraphs
  const descParagraphs = course.fullDescription.split('\n').filter(p => p.trim());

  // Sidebar CTA — different for logged-in users with access
  // Sidebar CTA
  const sidebarCTA = `
    <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg cd-cta-primary" id="buy-whatsapp-btn">
      ${ICONS.whatsapp} Buy Now via WhatsApp
    </a>
    <a href="${waAskLink}" target="_blank" rel="noopener" class="btn btn-ghost btn-lg cd-cta-secondary">
      ${ICONS.mail} Ask a Question
    </a>
  `;

  // Mobile CTA
  const mobileCTA = `
    <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp cd-mobile-buy">
      ${ICONS.whatsapp} Buy Now
    </a>
  `;

  return `
    <!-- Hero -->
    <div class="cd-hero" id="course-hero">
      <div class="container">
        <div class="cd-breadcrumb">
          <a href="${ROUTES.HOME}">Home</a><span class="cd-sep">/</span>
          <a href="${ROUTES.COURSES}">Courses</a><span class="cd-sep">/</span>
          <span>${course.title}</span>
        </div>
        <h1 class="cd-title">${course.title}</h1>
        <div class="cd-instructor">
          <div class="cd-avatar"><img src="assets/images/founder.png" alt="Aakash Das" decoding="async" /></div>
          <span>Instructor: <strong>${course.instructor}</strong></span>
        </div>
        <span class="cd-category-tag">${course.category}</span>
      </div>
    </div>

    <!-- Body -->
    <div class="cd-body">
      <div class="container">
        <div class="cd-grid">
          <!-- LEFT: Main Content -->
          <div class="cd-main">

            <!-- Preview -->
            <section class="cd-section" id="course-preview">
              <h2 class="cd-section-title">Preview</h2>
              <div class="cd-video-wrap">
                ${(() => {
                  const embedUrl = _toYouTubeEmbed(course.previewVideoUrl);
                  if (embedUrl) {
                    return `<iframe src="${embedUrl}?modestbranding=1&rel=0&controls=1&playsinline=1&origin=${encodeURIComponent(window.location.origin || '')}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0"></iframe>`;
                  }
                  return `<div class="cd-video-placeholder" style="background-image:url(${thumbMap[course.id] || thumbMap[1]})">
                      <div class="cd-play-btn">${ICONS.play}</div>
                      <span class="cd-preview-label">Preview coming soon</span>
                    </div>`;
                })()}
              </div>
              <div class="cd-meta-bar">
                <div class="cd-meta-item">
                  <span class="cd-meta-icon">${ICONS.clock}</span>
                  <span>${estimatedHours}+ hours</span>
                </div>
                <div class="cd-meta-item">
                  <span class="cd-meta-icon">${ICONS.bookOpen}</span>
                  <span>${totalLessons} lessons</span>
                </div>
                <div class="cd-meta-item">
                  <span class="cd-meta-icon">${ICONS.users}</span>
                  <span>Beginner</span>
                </div>
              </div>
            </section>

            <!-- About -->
            <section class="cd-section" id="course-description">
              <h2 class="cd-section-title">About This Course</h2>
              <div class="cd-about-text">
                ${descParagraphs.map(p => `<p>${p.trim()}</p>`).join('')}
              </div>
            </section>

            <!-- What You'll Learn -->
            <section class="cd-section" id="course-outcomes">
              <h2 class="cd-section-title">What You'll Learn</h2>
              <div class="cd-learn-grid">
                ${course.whatYouLearn.map(item => `
                  <div class="cd-learn-item">
                    <span class="cd-bullet-dot"></span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- Curriculum -->
            <section class="cd-section" id="course-curriculum">
              <h2 class="cd-section-title">Course Curriculum</h2>
              <p class="cd-curriculum-summary">${totalModules} modules · ${totalLessons} lessons · ${estimatedHours}+ hrs total</p>
              <div class="cd-accordion">
                ${course.curriculum.map((module, i) => `
                  <div class="accordion-item ${i === 0 ? 'active' : ''}">
                    <button class="accordion-header">
                      <div class="cd-acc-left">
                        <span class="cd-acc-title">${module.title}</span>
                        <span class="cd-acc-meta">${module.lessons.length} lessons</span>
                      </div>
                      <span class="chevron">${ICONS.chevronDown}</span>
                    </button>
                    <div class="accordion-content">
                      <div class="accordion-body">
                        <ul>
                          ${module.lessons.map(l => `<li>${l}</li>`).join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- Who Is This For -->
            <section class="cd-section" id="course-audience">
              <h2 class="cd-section-title">Who Is This For?</h2>
              <ul class="cd-audience-list">
                ${audiencePoints.map(point => `
                  <li class="cd-audience-item">
                    <span class="cd-bullet-dot"></span>
                    <span>${point.charAt(0).toUpperCase() + point.slice(1)}</span>
                  </li>
                `).join('')}
              </ul>
            </section>

          </div>

          <!-- RIGHT: Sticky Pricing Card -->
          <div class="cd-sidebar">
            <div class="cd-pricing-card" id="pricing-card">
              <img src="${thumbMap[course.id] || thumbMap[1]}" alt="${course.title}" class="cd-pricing-thumb" loading="lazy" decoding="async">

              <div class="cd-price-block">
                <span class="cd-price-anchor">NPR ${anchorPrice.toLocaleString()}</span>
                <span class="cd-price-current"><span class="cd-price-currency">NPR </span>${course.price.toLocaleString()}</span>
                <span class="cd-discount-badge">50% OFF</span>
              </div>

              <div class="cd-price-labels">
                <span class="cd-label-item">Beginner friendly</span>
                <span class="cd-label-item">Lifetime access</span>
                <span class="cd-label-item">Mobile + Desktop</span>

              </div>

              ${sidebarCTA}

              <div class="cd-trust-signals">
                <div class="cd-trust-item">
                  <span class="cd-trust-dot"></span>
                  <span>One-time payment</span>
                </div>
                <div class="cd-trust-item">
                  <span class="cd-trust-dot"></span>
                  <span>Instant access</span>
                </div>
                <div class="cd-trust-item">
                  <span class="cd-trust-dot"></span>
                  <span>No prior experience needed</span>
                </div>
              </div>

              <div class="cd-features-list">
                <div class="cd-feature-item">
                  <span class="cd-bullet-dot"></span>
                  <span>Full lifetime access</span>
                </div>
                <div class="cd-feature-item">
                  <span class="cd-bullet-dot"></span>
                  <span>Access on mobile and desktop</span>
                </div>

                <div class="cd-feature-item">
                  <span class="cd-bullet-dot"></span>
                  <span>Direct support from instructor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Sticky CTA -->
    <div class="cd-mobile-cta" id="mobile-cta">
      <div class="cd-mobile-cta-inner">
        <div class="cd-mobile-price">
          <span class="cd-mobile-anchor">NPR ${anchorPrice.toLocaleString()}</span>
          <span class="cd-mobile-current">NPR ${course.price.toLocaleString()}</span>
        </div>
        ${mobileCTA}
      </div>
    </div>
  `;
}

export function initCourseDetailPage() {
  initAccordions();

  // Mobile sticky CTA: show/hide based on scroll
  const mobileCta = document.getElementById('mobile-cta');
  const pricingCard = document.getElementById('pricing-card');
  if (mobileCta && pricingCard) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        mobileCta.classList.toggle('visible', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(pricingCard);
  }
}

// ==============================================================================
// risePaisa - Universal Smart Floating Control System Coordinator
// Premium Apple-Platform Inspired Ergonomics, Liquid Glass Layering & Touch Bounds
// ==============================================================================

import { ICONS, showToast, shareContent } from './components.js';

let isInitialized = false;
let footerObserver = null;
let currentDockCallbacks = null;

// Active component cleanup references
let homeBuyCleanup = null;
let courseBuyCleanup = null;
let calcFloatingCleanup = null;
let articleFloatingCleanup = null;

/**
 * Initialize global floating system coordinator.
 * Automatically handles:
 *  1. Virtual keyboard detection (viewport resize / input focus).
 *  2. Fullscreen video detection.
 *  3. Footer collision avoidance.
 *  4. Layering arbitration between bottom bars and floating tools.
 */
export function initFloatingSystem() {
  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;

  // 1. Virtual Keyboard Detection (via visualViewport API)
  if (window.visualViewport) {
    const checkKeyboard = () => {
      const isKeyboardActive = window.visualViewport.height < window.innerHeight * 0.78;
      document.body.classList.toggle('keyboard-open', isKeyboardActive);
    };
    window.visualViewport.addEventListener('resize', checkKeyboard, { passive: true });
    window.visualViewport.addEventListener('scroll', checkKeyboard, { passive: true });
  }

  // Backup Input Focus Listeners for Virtual Keyboard
  document.addEventListener('focusin', (e) => {
    if (e.target && e.target.matches && e.target.matches('input, textarea, select, [contenteditable="true"]')) {
      document.body.classList.add('keyboard-open');
    }
  }, { passive: true });

  document.addEventListener('focusout', (e) => {
    if (e.target && e.target.matches && e.target.matches('input, textarea, select, [contenteditable="true"]')) {
      setTimeout(() => {
        const active = document.activeElement;
        if (!active || !active.matches || !active.matches('input, textarea, select, [contenteditable="true"]')) {
          document.body.classList.remove('keyboard-open');
        }
      }, 150);
    }
  }, { passive: true });

  // 2. Fullscreen Video Detection
  const handleFullscreenChange = () => {
    const isFullscreen = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
    document.body.classList.toggle('is-fullscreen', isFullscreen);
  };
  document.addEventListener('fullscreenchange', handleFullscreenChange, { passive: true });
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange, { passive: true });

  // 3. Footer Collision Avoidance Observer
  setupFooterObserver();
}

/**
 * Sets up IntersectionObserver for footer collision avoidance.
 */
function setupFooterObserver() {
  if (typeof IntersectionObserver === 'undefined') return;
  if (footerObserver) {
    footerObserver.disconnect();
  }

  const footer = document.querySelector('footer.footer, footer');
  if (!footer) return;

  footerObserver = new IntersectionObserver((entries) => {
    const entry = entries[0];
    const isNearFooter = entry && entry.isIntersecting;
    document.body.classList.toggle('near-footer', isNearFooter);
  }, {
    rootMargin: '60px 0px 0px 0px',
    threshold: 0.05
  });

  footerObserver.observe(footer);
}

/**
 * Re-scans for footer when route or content changes.
 */
export function refreshFloatingContext() {
  setupFooterObserver();
}

// ==============================================================================
// 1. SMART FLOATING LEARNING DOCK (Course Lessons & Guides)
// ==============================================================================

/**
 * Renders HTML for the Smart Floating Liquid Glass Learning Dock.
 *
 * @param {Object} options
 * @param {boolean} options.isBookmarked
 * @param {boolean} options.isEn
 * @param {string} [options.title='']
 * @returns {string} HTML markup
 */
export function renderLearningDockHtml({ isBookmarked = false, isEn = true, isCourse = false } = {}) {
  if (isCourse) {
    return `
      <aside class="rp-learning-dock glass-control" id="rp-learning-dock" role="toolbar" aria-label="Course Curriculum Navigation">
        <!-- TOC Outline Trigger Button -->
        <button type="button" class="rp-dock-btn rp-dock-toc" id="dock-toc-trigger" aria-label="Table of Contents" title="Table of Contents" aria-haspopup="dialog" aria-expanded="false">
          <svg class="rp-dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          <span class="rp-dock-label">Table of Contents</span>
          <span class="rp-dock-pill-badge" id="dock-progress-readout">0%</span>
        </button>
      </aside>
    `;
  }

  return `
    <aside class="rp-learning-dock glass-control" id="rp-learning-dock" role="toolbar" aria-label="Lesson Quick Actions">
      <!-- TOC Outline Trigger Button -->
      <button type="button" class="rp-dock-btn rp-dock-toc" id="dock-toc-trigger" aria-label="Open Table of Contents outline" title="Table of Contents">
        <svg class="rp-dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
        <span class="rp-dock-label">TOC</span>
        <span class="rp-dock-pill-badge" id="dock-progress-readout">0%</span>
      </button>

      <span class="rp-dock-separator" aria-hidden="true"></span>

      <!-- Nepali / English Segmented Switch -->
      <div class="rp-dock-segmented-switch" role="group" aria-label="Language selection">
        <button type="button" class="rp-dock-seg-btn ${isEn ? 'active' : ''}" data-dock-lang="en" aria-pressed="${isEn}">EN</button>
        <button type="button" class="rp-dock-seg-btn ${!isEn ? 'active' : ''}" data-dock-lang="np" aria-pressed="${!isEn}">नेपाली</button>
      </div>

      <span class="rp-dock-separator" aria-hidden="true"></span>

      <!-- Save / Bookmark Button -->
      <button type="button" class="rp-dock-btn rp-dock-bookmark ${isBookmarked ? 'bookmarked active' : ''}" id="dock-bookmark-trigger" aria-label="${isBookmarked ? 'Saved to bookmarks' : 'Save lesson'}" title="${isBookmarked ? 'Saved to bookmarks' : 'Save lesson'}">
        <span class="rp-dock-icon rp-dock-bookmark-icon">${isBookmarked ? ICONS.bookmarkFilled : ICONS.bookmark}</span>
      </button>

      <!-- Native Share Button -->
      <button type="button" class="rp-dock-btn rp-dock-share" id="dock-share-trigger" aria-label="Share lesson link" title="Share lesson link">
        <span class="rp-dock-icon">${ICONS.share}</span>
      </button>
    </aside>
  `;
}

/**
 * Binds event listeners for the Smart Floating Learning Dock.
 *
 * @param {Object} handlers
 * @param {Function} handlers.onToggleTOC
 * @param {Function} [handlers.onLangChange]
 * @param {Function} [handlers.onToggleBookmark]
 * @param {Object} [handlers.shareData] - { title, text, url }
 */
export function bindLearningDock(handlers = {}) {
  currentDockCallbacks = handlers;
  document.body.classList.add('has-learning-dock');

  const dock = document.getElementById('rp-learning-dock');
  if (!dock) return;

  // 1. TOC Trigger
  const tocBtn = document.getElementById('dock-toc-trigger');
  if (tocBtn && handlers.onToggleTOC) {
    tocBtn.onclick = (e) => {
      e.preventDefault();
      handlers.onToggleTOC();
    };
  }

  // 2. Language Switcher Buttons (if present)
  const langBtns = dock.querySelectorAll('[data-dock-lang]');
  langBtns.forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-dock-lang');
      if (handlers.onLangChange) {
        handlers.onLangChange(targetLang);
      }
    };
  });

  // 3. Bookmark Button (if present)
  const bookmarkBtn = document.getElementById('dock-bookmark-trigger');
  if (bookmarkBtn && handlers.onToggleBookmark) {
    bookmarkBtn.onclick = (e) => {
      e.preventDefault();
      handlers.onToggleBookmark();
    };
  }

  // 4. Share Button (if present)
  const shareBtn = document.getElementById('dock-share-trigger');
  if (shareBtn) {
    shareBtn.onclick = async (e) => {
      e.preventDefault();
      const data = handlers.shareData || {
        title: document.title,
        url: window.location.href
      };
      await shareContent(data);
    };
  }
}

/**
 * Updates reading progress readout on floating dock.
 *
 * @param {number} pct - Progress percentage (0 - 100)
 */
export function updateLearningDockProgress(pct) {
  const readout = document.getElementById('dock-progress-readout');
  if (readout) {
    readout.textContent = `${pct}%`;
  }
}

/**
 * Updates bookmark button state on floating dock.
 *
 * @param {boolean} isBookmarked
 */
export function updateLearningDockBookmark(isBookmarked) {
  const btn = document.getElementById('dock-bookmark-trigger');
  if (!btn) return;

  btn.classList.toggle('bookmarked', isBookmarked);
  btn.classList.toggle('active', isBookmarked);
  btn.setAttribute('aria-label', isBookmarked ? 'Saved to bookmarks' : 'Save lesson');
  btn.setAttribute('title', isBookmarked ? 'Saved to bookmarks' : 'Save lesson');

  const iconSpan = btn.querySelector('.rp-dock-bookmark-icon');
  if (iconSpan) {
    iconSpan.innerHTML = isBookmarked ? ICONS.bookmarkFilled : ICONS.bookmark;
  }
}

/**
 * Unmounts dock and cleans up state when navigating away.
 */
export function unmountLearningDock() {
  document.body.classList.remove('has-learning-dock');
  currentDockCallbacks = null;
  const dock = document.getElementById('rp-learning-dock');
  if (dock) {
    dock.remove();
  }
}

// ==============================================================================
// 2. SMART FLOATING BUY & ENROLL BAR (Course Detail & Listings)
// ==============================================================================

/**
 * Mounts the intelligent floating purchase action for courses.
 * Appears on mobile/tablet when the in-page purchase card is out of view.
 * Automatically avoids duplicating controls when the primary purchase button is visible.
 *
 * @param {Object} options
 * @param {Object} options.course
 * @param {boolean} [options.isEnrolled=false]
 * @param {string} options.waBuyLink
 * @returns {Function} cleanup function
 */
export function initCourseFloatingBuy({ course, isEnrolled = false, waBuyLink = '' } = {}) {
  if (typeof document === 'undefined' || !course) return () => {};
  unmountCourseFloatingBuy();

  const learnUrl = `/courses/${course.slug}/learn`;
  const priceFormatted = course.price ? `NPR ${course.price.toLocaleString()}` : 'Free';

  const barHtml = `
    <aside class="rp-floating-buy-bar glass-control" id="rp-floating-buy-bar" role="complementary" aria-label="Course Purchase Action">
      ${isEnrolled ? `
        <a href="${learnUrl}" class="btn btn-primary rp-floating-buy-btn" id="floating-buy-action-btn" aria-label="Continue Learning">
          <span class="rp-btn-icon">${ICONS.play}</span>
          <span class="rp-btn-text">Continue Learning &rarr;</span>
        </a>
      ` : `
        <a href="${waBuyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp rp-floating-buy-btn" id="floating-buy-action-btn" aria-label="Buy Course — ${priceFormatted}">
          <span class="rp-btn-icon">${ICONS.whatsapp}</span>
          <span class="rp-btn-text">Buy Course — ${priceFormatted}</span>
        </a>
      `}
    </aside>
  `;

  document.body.insertAdjacentHTML('beforeend', barHtml);
  const floatingBar = document.getElementById('rp-floating-buy-bar');

  // Intelligent Intersection Visibility Observer:
  // Detects whether the original inline purchase card is currently in view.
  const inlineTarget = document.getElementById('buy-course-whatsapp-btn') || document.getElementById('purchase-card');
  let observer = null;
  let scrollHandler = null;
  let isTargetVisible = false;
  let isCurrentlyShown = false;
  let ticking = false;

  const updateVisibility = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    // Reveal once user scrolls past initial hero (> 160px) AND the inline card is not in view
    const shouldShow = scrollY > 160 && !isTargetVisible;

    if (shouldShow !== isCurrentlyShown) {
      isCurrentlyShown = shouldShow;
      floatingBar.classList.toggle('visible', shouldShow);
      document.body.classList.toggle('has-mobile-cta', shouldShow);
    }
  };

  if (inlineTarget && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver((entries) => {
      isTargetVisible = entries[0].isIntersecting;
      updateVisibility();
    }, {
      rootMargin: '0px 0px 40px 0px',
      threshold: 0.1
    });
    observer.observe(inlineTarget);
  }

  scrollHandler = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateVisibility();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
  window.addEventListener('resize', scrollHandler, { passive: true });
  updateVisibility();

  courseBuyCleanup = () => {
    if (observer) observer.disconnect();
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('resize', scrollHandler);
    document.body.classList.remove('has-mobile-cta');
    if (floatingBar) floatingBar.remove();
    courseBuyCleanup = null;
  };

  return courseBuyCleanup;
}

/**
 * Cleans up course floating buy action.
 */
export function unmountCourseFloatingBuy() {
  if (typeof courseBuyCleanup === 'function') {
    courseBuyCleanup();
  }
}

/**
 * Mounts the intelligent floating purchase action for the Home Page.
 * Appears when user has scrolled past the hero and the primary course CTAs are not in view.
 *
 * @param {Object} options
 * @param {Object} [options.course]
 * @param {boolean} [options.isEnrolled=false]
 * @param {string} [options.waBuyLink='']
 * @returns {Function} cleanup function
 */
export function initHomeFloatingBuy({ course, isEnrolled = false, waBuyLink = '' } = {}) {
  if (typeof document === 'undefined') return () => {};
  unmountHomeFloatingBuy();

  const cTitle = course?.title || 'Share Market Full Course (NEPSE)';
  const cPrice = course?.price || 2999;
  const learnUrl = course?.slug === 'nepse-stock-market-basics' || !course?.slug
    ? '/courses/nepse-stock-market-basics/learn?lesson=lesson-1'
    : `/courses/${course.slug}/learn`;
  const priceFormatted = `NPR ${cPrice.toLocaleString()}`;
  const buyLink = waBuyLink || `https://wa.me/9779740269317?text=${encodeURIComponent(`Hi RisePaisa! I want to enroll in the ${cTitle} for ${priceFormatted}.`)}`;

  const barHtml = `
    <aside class="rp-floating-buy-bar glass-control" id="rp-floating-buy-bar" role="complementary" aria-label="Course Purchase Action">
      ${isEnrolled ? `
        <a href="${learnUrl}" class="btn btn-primary rp-floating-buy-btn" id="floating-buy-action-btn" aria-label="Continue Learning">
          <span class="rp-btn-icon">${ICONS.play}</span>
          <span class="rp-btn-text">Continue Learning &rarr;</span>
        </a>
      ` : `
        <a href="${buyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp rp-floating-buy-btn" id="floating-buy-action-btn" aria-label="Buy Course — ${priceFormatted}">
          <span class="rp-btn-icon">${ICONS.whatsapp}</span>
          <span class="rp-btn-text">Buy Course — ${priceFormatted}</span>
        </a>
      `}
    </aside>
  `;

  document.body.insertAdjacentHTML('beforeend', barHtml);
  const floatingBar = document.getElementById('rp-floating-buy-bar');

  const heroCta = document.getElementById('hero-nepse-course-cta');
  const flagshipSection = document.getElementById('featured-course');

  let heroVisible = true;
  let flagshipVisible = false;
  let isCurrentlyShown = false;
  let scrollHandler = null;
  let observer = null;
  let ticking = false;

  const updateVisibility = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    // Show only when scrolled past the hero (> 360px) AND neither hero CTA nor flagship section is in view
    const shouldShow = scrollY > 360 && !heroVisible && !flagshipVisible;

    if (shouldShow !== isCurrentlyShown) {
      isCurrentlyShown = shouldShow;
      floatingBar.classList.toggle('visible', shouldShow);
      document.body.classList.toggle('has-mobile-cta', shouldShow);
    }
  };

  if (typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === heroCta) {
          heroVisible = entry.isIntersecting;
        } else if (entry.target === flagshipSection) {
          flagshipVisible = entry.isIntersecting;
        }
      });
      updateVisibility();
    }, {
      rootMargin: '0px 0px 40px 0px',
      threshold: 0.1
    });

    if (heroCta) observer.observe(heroCta);
    if (flagshipSection) observer.observe(flagshipSection);
  }

  scrollHandler = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateVisibility();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
  window.addEventListener('resize', scrollHandler, { passive: true });
  updateVisibility();

  homeBuyCleanup = () => {
    if (observer) observer.disconnect();
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('resize', scrollHandler);
    document.body.classList.remove('has-mobile-cta');
    if (floatingBar) floatingBar.remove();
    homeBuyCleanup = null;
  };

  return homeBuyCleanup;
}

/**
 * Cleans up home floating buy action.
 */
export function unmountHomeFloatingBuy() {
  if (typeof homeBuyCleanup === 'function') {
    homeBuyCleanup();
  }
}

// ==============================================================================
// 3. SMART FLOATING CALCULATOR QUICK ACTIONS
// ==============================================================================

/**
 * Mounts the intelligent floating calculator controls.
 * Floating calculator toolbar removed per UX standardization:
 * All calculations are operated directly in-page within natural content flow.
 *
 * @param {Object} [options]
 * @returns {Function} cleanup function
 */
export function initCalculatorFloatingControls({ calcTitle = 'Calculator', onRecalculate } = {}) {
  unmountCalculatorFloatingControls();
  return () => {};
}

/**
 * Cleans up calculator floating controls.
 */
export function unmountCalculatorFloatingControls() {
  if (typeof document !== 'undefined') {
    const floatBar = document.getElementById('rp-calc-floating-bar');
    if (floatBar) floatBar.remove();
  }
  if (typeof calcFloatingCleanup === 'function') {
    calcFloatingCleanup();
  }
}

// ==============================================================================
// 4. SMART FLOATING ARTICLE & RESOURCE CONTROLS
// ==============================================================================

/**
 * Mounts floating quick actions for long-form articles, cornerstone guides, and blogs.
 * Includes Share, Bookmark, and Scroll-to-Top.
 *
 * @param {Object} options
 * @param {string} options.title
 * @param {string} options.url
 * @param {boolean} [options.isBookmarked=false]
 * @param {Function} [options.onBookmark]
 * @returns {Function} cleanup function
 */
export function initArticleFloatingControls({ title = '', url = '', isBookmarked = false, onBookmark } = {}) {
  if (typeof document === 'undefined') return () => {};
  unmountArticleFloatingControls();

  const barHtml = `
    <aside class="rp-article-floating-bar glass-control" id="rp-article-floating-bar" role="toolbar" aria-label="Article Actions">
      <button type="button" class="rp-dock-btn" id="article-float-share" aria-label="Share Article" title="Share Article">
        <span class="rp-dock-icon">${ICONS.share}</span>
        <span class="rp-dock-label">Share</span>
      </button>
      <span class="rp-dock-separator" aria-hidden="true"></span>
      <button type="button" class="rp-dock-btn ${isBookmarked ? 'bookmarked active' : ''}" id="article-float-bookmark" aria-label="${isBookmarked ? 'Saved' : 'Save Article'}" title="${isBookmarked ? 'Saved' : 'Save Article'}">
        <span class="rp-dock-icon" id="article-float-bookmark-icon">${isBookmarked ? ICONS.bookmarkFilled : ICONS.bookmark}</span>
        <span class="rp-dock-label" id="article-float-bookmark-label">${isBookmarked ? 'Saved' : 'Save'}</span>
      </button>
      <span class="rp-dock-separator" aria-hidden="true"></span>
      <button type="button" class="rp-dock-btn" id="article-float-top" aria-label="Back to Top" title="Back to Top">
        <span class="rp-dock-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg></span>
        <span class="rp-dock-label">Top</span>
      </button>
    </aside>
  `;

  document.body.insertAdjacentHTML('beforeend', barHtml);
  const bar = document.getElementById('rp-article-floating-bar');

  // Share click
  const shareBtn = document.getElementById('article-float-share');
  if (shareBtn) {
    shareBtn.onclick = async (e) => {
      e.preventDefault();
      await shareContent({
        title: title || document.title,
        url: url || window.location.href
      });
    };
  }

  // Bookmark click
  const bookmarkBtn = document.getElementById('article-float-bookmark');
  if (bookmarkBtn && typeof onBookmark === 'function') {
    bookmarkBtn.onclick = async (e) => {
      e.preventDefault();
      const newStatus = await onBookmark();
      bookmarkBtn.classList.toggle('bookmarked', Boolean(newStatus));
      bookmarkBtn.classList.toggle('active', Boolean(newStatus));
      const icon = document.getElementById('article-float-bookmark-icon');
      const label = document.getElementById('article-float-bookmark-label');
      if (icon) icon.innerHTML = newStatus ? ICONS.bookmarkFilled : ICONS.bookmark;
      if (label) label.textContent = newStatus ? 'Saved' : 'Save';
    };
  }

  // Back to top click
  const topBtn = document.getElementById('article-float-top');
  if (topBtn) {
    topBtn.onclick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // Scroll visibility (shows after reading down > 400px)
  let isCurrentlyShown = false;
  let ticking = false;

  const updateVisibility = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const shouldShow = scrollY > 400;
    if (shouldShow !== isCurrentlyShown) {
      isCurrentlyShown = shouldShow;
      bar.classList.toggle('visible', shouldShow);
    }
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateVisibility();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  updateVisibility();

  articleFloatingCleanup = () => {
    window.removeEventListener('scroll', handleScroll);
    if (bar) bar.remove();
    articleFloatingCleanup = null;
  };

  return articleFloatingCleanup;
}

/**
 * Cleans up article floating controls.
 */
export function unmountArticleFloatingControls() {
  if (typeof articleFloatingCleanup === 'function') {
    articleFloatingCleanup();
  }
}

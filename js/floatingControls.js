// ==============================================================================
// risePaisa - Universal Smart Floating Control System Coordinator
// Premium Apple-Platform Inspired Ergonomics, Liquid Glass Layering & Touch Bounds
// ==============================================================================

import { ICONS, showToast, shareContent } from './components.js';

let isInitialized = false;
let footerObserver = null;
let currentDockCallbacks = null;

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

/**
 * Renders HTML for the Smart Floating Liquid Glass Learning Dock.
 *
 * @param {Object} options
 * @param {boolean} options.isBookmarked
 * @param {boolean} options.isEn
 * @param {string} [options.title='']
 * @returns {string} HTML markup
 */
export function renderLearningDockHtml({ isBookmarked = false, isEn = true } = {}) {
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
 * @param {Function} handlers.onLangChange
 * @param {Function} handlers.onToggleBookmark
 * @param {Object} handlers.shareData - { title, text, url }
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

  // 2. Language Switcher Buttons
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

  // 3. Bookmark Button
  const bookmarkBtn = document.getElementById('dock-bookmark-trigger');
  if (bookmarkBtn && handlers.onToggleBookmark) {
    bookmarkBtn.onclick = (e) => {
      e.preventDefault();
      handlers.onToggleBookmark();
    };
  }

  // 4. Share Button
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

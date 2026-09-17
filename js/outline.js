/**
 * ==============================================================================
 * risePaisa - Universal Floating Table of Contents & Reading Minimap Engine
 * ==============================================================================
 * A production-ready, zero-dependency, Notion-inspired floating outline component.
 * 
 * Key Features:
 *  1. Automatic Heading Detection: Scans h2, h3, h4 headings & auto-generates unique anchor IDs.
 *  2. Minimalist Notion-Style Minimap: Vertically centered dash track (h2 wide, h3 medium, h4 short).
 *  3. Smooth Hover Expansion: Expands into full hierarchical TOC with glassmorphic backdrop on hover.
 *  4. High-Precision ScrollSpy: IntersectionObserver + scroll tracking with RisePaisa accent highlight.
 *  5. Offset Smooth Scrolling: Precise scroll positioning accounting for sticky subnav headers.
 *  6. Responsive Mobile System: Unobtrusive Floating Action Button (FAB) + Slide-out Drawer (< 1024px).
 *  7. Dynamic Mutation Support: MutationObserver & language switch auto-refresh (EN <-> NP).
 *  8. Universal Zero-Config Injection: Automatically mounts across all current & future learning pages.
 *  9. Full Accessibility (a11y): Semantic nav, keyboard navigable, screen reader labels, reduced-motion aware.
 */

// Singleton instance tracker
let currentTOCInstance = null;

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export class FloatingTOC {
  /**
   * @param {Object} options
   * @param {string|HTMLElement} [options.contentSelector] - Selector or element containing headings
   * @param {string} [options.headingSelector='h2, h3, h4'] - Headings to scan
   * @param {number} [options.offset=90] - Sticky header offset in pixels
   * @param {string} [options.title='Table of Contents'] - Display title
   * @param {boolean} [options.autoMount=true] - Automatically mount floating widget to DOM
   */
  constructor(options = {}) {
    this.contentSelector = options.contentSelector || null;
    this.headingSelector = options.headingSelector || 'h2, h3, h4';
    this.offset = options.offset !== undefined ? options.offset : 90;
    this.customTitle = options.title || null;
    this.autoMount = options.autoMount !== false;

    // DOM Elements
    this.contentEl = null;
    this.minimapEl = null;
    this.mobileFabEl = null;
    this.mobileDrawerEl = null;
    this.mobileBackdropEl = null;

    // State
    this.headings = [];
    this.activeId = null;
    this.isClickScrolling = false;
    this.isDrawerOpen = false;
    this.scrollTimeout = null;
    this.rafId = null;
    this.mutationObserver = null;
    this.intersectionObserver = null;

    // Cached geometry for zero-reflow scroll performance
    this.cachedContentTop = 0;
    this.cachedContentHeight = 0;
    this.lastProgressPct = -1;
    this.scrollTicking = false;

    // Bound listeners for clean add/remove
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
  }

  /**
   * Cache reading content bounding offsets (run on init, resize, or DOM mutation)
   */
  updateGeometry() {
    if (!this.contentEl) return;
    const rect = this.contentEl.getBoundingClientRect();
    this.cachedContentTop = rect.top + (window.scrollY || window.pageYOffset);
    this.cachedContentHeight = rect.height;
  }

  /**
   * Detect suitable reading content container strictly for in-depth learning lessons and guides
   */
  detectContentElement() {
    if (this.contentSelector) {
      const el = typeof this.contentSelector === 'string'
        ? document.querySelector(this.contentSelector)
        : this.contentSelector;
      if (el && el.querySelectorAll(this.headingSelector).length >= 3) {
        return el;
      }
    }

    // Strictly target comprehensive learning lesson & cornerstone guide reading pages
    const readingCandidates = [
      '#lesson-main-content',
      '#guide-main-article',
      '#guide-main-content',
      '.learn-lesson-view .lesson-content-col',
      '.guide-detail-page .guide-reading-main',
      '.guide-detail-page .lesson-content-col',
      '.learn-lesson-view main',
      '.guide-detail-page main'
    ];

    for (const selector of readingCandidates) {
      const candidate = document.querySelector(selector);
      if (candidate) {
        // Only show if there is substantial learning content (3+ topic headings)
        const headingCount = candidate.querySelectorAll(this.headingSelector).length;
        if (headingCount >= 3) {
          return candidate;
        }
      }
    }

    return null;
  }

  /**
   * Initialize scanner, DOM components, observers, and listeners
   */
  init() {
    this.contentEl = this.detectContentElement();
    if (!this.contentEl) {
      this.destroy();
      return false;
    }

    // 1. Scan headings and ensure unique slug IDs
    this.headings = this.scanHeadings();
    if (this.headings.length < 3) {
      this.destroy();
      return false;
    }

    // 2. Build or update Floating Minimap and Mobile Drawer
    this.render();

    // Cache initial container geometry for zero-reflow scroll
    this.updateGeometry();

    // 3. Attach interactive click & keyboard navigation handlers
    this.bindEvents();

    // 4. Setup high-performance ScrollSpy via IntersectionObserver & Scroll Tracker
    this.setupScrollSpy();

    // 5. Watch for dynamic DOM modifications (e.g. language toggle, markdown render)
    this.setupMutationObserver();

    // 6. Listen to global language change events
    window.addEventListener('rp-learn-lang-changed', this.handleLangChange);
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.handleResize, { passive: true });
    document.addEventListener('keydown', this.handleKeyDown);

    // Initial highlight
    this.updateActiveSection();
    return true;
  }

  /**
   * Scan headings, compute hierarchical levels (1, 2, 3), and assign IDs
   */
  scanHeadings() {
    if (!this.contentEl) return [];

    const rawHeadings = Array.from(this.contentEl.querySelectorAll(this.headingSelector));
    const usedIds = new Set();

    // Collect pre-existing IDs across the entire document
    document.querySelectorAll('[id]').forEach(el => {
      if (el.id) usedIds.add(el.id);
    });

    // Find the minimum heading level present (e.g. h2 -> level 1, h3 -> level 2, h4 -> level 3)
    const minLevel = rawHeadings.reduce((min, h) => {
      const tag = h.tagName.toLowerCase();
      const l = tag === 'h2' ? 2 : tag === 'h3' ? 3 : tag === 'h4' ? 4 : 2;
      return Math.min(min, l);
    }, 2);

    return rawHeadings
      .filter(heading => {
        const isHidden = heading.hasAttribute('data-toc-ignore') ||
                         heading.hasAttribute('data-outline-ignore') ||
                         heading.hasAttribute('hidden') ||
                         heading.getAttribute('aria-hidden') === 'true' ||
                         (heading.style && heading.style.display === 'none') ||
                         heading.closest('.rp-floating-minimap') ||
                         heading.closest('.rp-mobile-toc-drawer') ||
                         heading.closest('.lesson-sequence-bar');
        return !isHidden && heading.textContent.trim().length > 0;
      })
      .map((heading, index) => {
        const tag = heading.tagName.toLowerCase();
        const rawLevel = tag === 'h2' ? 2 : tag === 'h3' ? 3 : tag === 'h4' ? 4 : 2;
        const level = Math.max(1, Math.min(3, rawLevel - minLevel + 1));

        // Generate unique URL-safe anchor ID if missing
        let id = heading.id;
        if (!id) {
          const rawText = heading.textContent.trim();
          id = this.generateSlug(rawText, index + 1, usedIds);
          heading.id = id;
          usedIds.add(id);
        }

        // Clean display text (strip leading numbers like "01. " if desired, but preserve semantic titles)
        const fullText = heading.textContent.replace(/\s+/g, ' ').trim();
        const titleAttr = heading.getAttribute('data-toc-title') ||
                          heading.getAttribute('data-outline-title') ||
                          fullText;

        return {
          element: heading,
          id,
          level,
          text: fullText,
          title: titleAttr
        };
      });
  }

  /**
   * Universal Unicode-safe slug generator
   */
  generateSlug(text, fallbackIndex, usedIds) {
    let slug = text
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // strip diacritics
      .replace(/[^\p{L}\p{N}\s_-]/gu, '') // retain unicode letters & digits
      .trim()
      .replace(/[\s_]+/g, '-')
      .replace(/^-+|-+$/g, '');

    if (!slug || slug.length < 2) {
      slug = `section-${fallbackIndex}`;
    }

    let uniqueSlug = slug;
    let counter = 1;
    while (usedIds.has(uniqueSlug) || (document.getElementById(uniqueSlug) && document.getElementById(uniqueSlug) !== this.contentEl)) {
      uniqueSlug = `${slug}-${counter++}`;
    }

    return uniqueSlug;
  }

  /**
   * Determine localized title for the TOC header
   */
  getTitle() {
    if (this.customTitle) return this.customTitle;
    const isNepali = (localStorage.getItem('rp_learn_lang') === 'np') ||
                     (localStorage.getItem('risepaisa_lang') === 'ne') ||
                     (document.documentElement.lang === 'ne');
    return isNepali ? 'विषयसूची' : 'Table of Contents';
  }

  /**
   * Render or update floating minimap & mobile drawer DOM
   */
  render() {
    const titleText = this.getTitle();

    // ── 1. Create or Update Desktop Floating Minimap ────────────
    let minimap = document.getElementById('rp-floating-minimap');
    if (!minimap) {
      minimap = document.createElement('aside');
      minimap.id = 'rp-floating-minimap';
      minimap.className = 'rp-floating-minimap';
      minimap.setAttribute('aria-label', titleText);
      document.body.appendChild(minimap);
    }
    this.minimapEl = minimap;

    const listHtml = this.headings.map(item => `
      <li class="rp-minimap-item" data-level="${item.level}">
        <a href="#${item.id}" class="rp-minimap-link" data-target="${item.id}" title="${escapeHtml(item.text)}" aria-label="${escapeHtml(item.text)}">
          <span class="rp-minimap-dash" aria-hidden="true"></span>
          <span class="rp-minimap-text">${escapeHtml(item.text)}</span>
        </a>
      </li>
    `).join('');

    this.minimapEl.innerHTML = `
      <div class="rp-minimap-panel" role="region" aria-label="${escapeHtml(titleText)}">
        <div class="rp-minimap-header">
          <div class="rp-minimap-header-title">
            <svg class="rp-minimap-header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span class="rp-minimap-title-text">${escapeHtml(titleText)}</span>
          </div>
          <span class="rp-minimap-progress-pill" id="rp-minimap-progress-pill">0%</span>
        </div>
        <nav class="rp-minimap-nav" aria-label="${escapeHtml(titleText)}">
          <ul class="rp-minimap-list">
            ${listHtml}
          </ul>
        </nav>
        <div class="rp-minimap-footer">
          <button type="button" class="rp-minimap-top-btn" aria-label="Scroll to top of page">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <span>Top</span>
          </button>
        </div>
      </div>
    `;

    // ── 2. Create or Update Mobile Floating Action Button (FAB) ──
    let mobileFab = document.getElementById('rp-mobile-toc-fab');
    if (!mobileFab) {
      mobileFab = document.createElement('button');
      mobileFab.id = 'rp-mobile-toc-fab';
      mobileFab.className = 'rp-mobile-toc-fab';
      mobileFab.type = 'button';
      mobileFab.setAttribute('aria-label', `Open ${titleText}`);
      mobileFab.setAttribute('aria-expanded', 'false');
      mobileFab.setAttribute('aria-controls', 'rp-mobile-toc-drawer');
      document.body.appendChild(mobileFab);
    }
    this.mobileFabEl = mobileFab;

    this.mobileFabEl.innerHTML = `
      <svg class="rp-mobile-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
      <span class="rp-mobile-fab-label">TOC</span>
      <span class="rp-mobile-fab-progress" id="rp-mobile-fab-progress">0%</span>
    `;

    // ── 3. Create or Update Mobile Backdrop ──────────────────────
    let backdrop = document.getElementById('rp-mobile-toc-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'rp-mobile-toc-backdrop';
      backdrop.className = 'rp-mobile-toc-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }
    this.mobileBackdropEl = backdrop;

    // ── 4. Create or Update Mobile Slide-Out Drawer ──────────────
    let drawer = document.getElementById('rp-mobile-toc-drawer');
    if (!drawer) {
      drawer = document.createElement('aside');
      drawer.id = 'rp-mobile-toc-drawer';
      drawer.className = 'rp-mobile-toc-drawer';
      drawer.setAttribute('role', 'dialog');
      drawer.setAttribute('aria-modal', 'true');
      drawer.setAttribute('aria-label', titleText);
      drawer.setAttribute('aria-hidden', 'true');
      document.body.appendChild(drawer);
    }
    this.mobileDrawerEl = drawer;

    const drawerListHtml = this.headings.map(item => `
      <li class="rp-drawer-item" data-level="${item.level}">
        <a href="#${item.id}" class="rp-drawer-link" data-target="${item.id}">
          <span class="rp-drawer-bullet" aria-hidden="true"></span>
          <span class="rp-drawer-text">${escapeHtml(item.text)}</span>
        </a>
      </li>
    `).join('');

    this.mobileDrawerEl.innerHTML = `
      <div class="rp-drawer-inner">
        <div class="rp-drawer-header">
          <div class="rp-drawer-header-left">
            <svg class="rp-drawer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <h3 class="rp-drawer-title">${escapeHtml(titleText)}</h3>
          </div>
          <button type="button" class="rp-drawer-close-btn" id="rp-drawer-close-btn" aria-label="Close Table of Contents">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav class="rp-drawer-nav" aria-label="${escapeHtml(titleText)}">
          <ul class="rp-drawer-list">
            ${drawerListHtml}
          </ul>
        </nav>
      </div>
    `;

    // Ensure elements are visible
    this.minimapEl.style.display = '';
    this.mobileFabEl.style.display = '';
  }

  /**
   * Bind click and interaction listeners
   */
  bindEvents() {
    if (!this.minimapEl) return;

    // Desktop minimap link clicks
    const minimapLinks = this.minimapEl.querySelectorAll('.rp-minimap-link');
    minimapLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        this.scrollToTarget(targetId);
      });
    });

    // Back to top button in minimap
    const topBtn = this.minimapEl.querySelector('.rp-minimap-top-btn');
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (history.pushState) {
          history.pushState(null, null, window.location.pathname);
        }
      });
    }

    // Mobile FAB click -> toggle drawer
    if (this.mobileFabEl) {
      this.mobileFabEl.onclick = () => {
        this.toggleMobileDrawer(!this.isDrawerOpen);
      };
    }

    // Mobile Drawer close button
    const closeBtn = document.getElementById('rp-drawer-close-btn');
    if (closeBtn) {
      closeBtn.onclick = () => {
        this.toggleMobileDrawer(false);
      };
    }

    // Mobile Backdrop click -> close drawer
    if (this.mobileBackdropEl) {
      this.mobileBackdropEl.onclick = () => {
        this.toggleMobileDrawer(false);
      };
    }

    // Mobile drawer link clicks -> navigate and close drawer
    if (this.mobileDrawerEl) {
      const drawerLinks = this.mobileDrawerEl.querySelectorAll('.rp-drawer-link');
      drawerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('data-target');
          this.toggleMobileDrawer(false);
          this.scrollToTarget(targetId);
        });
      });
    }
  }

  /**
   * Toggle mobile drawer open/close states
   */
  toggleMobileDrawer(open) {
    this.isDrawerOpen = !!open;

    if (this.mobileDrawerEl) {
      this.mobileDrawerEl.classList.toggle('open', this.isDrawerOpen);
      this.mobileDrawerEl.setAttribute('aria-hidden', this.isDrawerOpen ? 'false' : 'true');
    }
    if (this.mobileBackdropEl) {
      this.mobileBackdropEl.classList.toggle('active', this.isDrawerOpen);
    }
    if (this.mobileFabEl) {
      this.mobileFabEl.setAttribute('aria-expanded', this.isDrawerOpen ? 'true' : 'false');
    }

    if (this.isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first active link or close button for a11y
      requestAnimationFrame(() => {
        const activeLink = this.mobileDrawerEl?.querySelector('.rp-drawer-link.active') ||
                           this.mobileDrawerEl?.querySelector('.rp-drawer-link');
        if (activeLink) activeLink.focus();
      });
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Smoothly scroll to target section with sticky header offset
   */
  scrollToTarget(targetId) {
    if (!targetId) return;
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    this.isClickScrolling = true;
    this.setActive(targetId);

    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - this.offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });

    // Update URL hash smoothly without causing default jump
    if (history.pushState) {
      history.pushState(null, null, `#${targetId}`);
    }

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isClickScrolling = false;
    }, 850);
  }

  /**
   * Set up IntersectionObserver for performant, precise heading tracking
   */
  setupScrollSpy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }

    if (!('IntersectionObserver' in window)) return;

    const options = {
      rootMargin: `-${this.offset}px 0px -65% 0px`,
      threshold: [0, 1]
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      if (this.isClickScrolling) return;

      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the entry closest to the top offset threshold
        const topEntry = visibleEntries.reduce((prev, curr) => {
          return curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev;
        });
        if (topEntry.target && topEntry.target.id) {
          this.setActive(topEntry.target.id);
        }
      }
    }, options);

    this.headings.forEach(h => {
      if (h.element) {
        this.intersectionObserver.observe(h.element);
      }
    });
  }

  /**
   * High-efficiency scroll handler throttled via single requestAnimationFrame
   */
  handleScroll() {
    if (this.scrollTicking) return;
    this.scrollTicking = true;

    this.rafId = requestAnimationFrame(() => {
      this.updateReadingProgress();
      if (!this.isClickScrolling) {
        this.updateActiveSection();
      }
      this.scrollTicking = false;
    });
  }

  handleResize() {
    this.updateGeometry();
    this.handleScroll();
  }

  handleKeyDown(e) {
    if (e.key === 'Escape' && this.isDrawerOpen) {
      this.toggleMobileDrawer(false);
    }
  }

  handleLangChange() {
    // Re-render headings on language toggle
    requestAnimationFrame(() => {
      this.headings = this.scanHeadings();
      if (this.headings.length >= 2) {
        this.render();
        this.updateGeometry();
        this.bindEvents();
        this.setupScrollSpy();
        this.updateActiveSection();
      } else {
        this.destroy();
      }
    });
  }

  /**
   * Compute reading progress percentage with cached geometry and zero layout reflows
   */
  updateReadingProgress() {
    if (!this.contentEl) return;
    if (!this.cachedContentHeight) {
      this.updateGeometry();
    }

    const contentTop = this.cachedContentTop;
    const contentHeight = this.cachedContentHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    const totalScrollable = contentHeight - windowHeight + 120;
    let pct = 0;
    if (totalScrollable > 0) {
      const currentScroll = Math.max(0, scrollY - (contentTop - 100));
      pct = Math.min(100, Math.max(0, Math.round((currentScroll / totalScrollable) * 100)));
    }

    // Only mutate DOM if percentage integer has changed
    if (pct !== this.lastProgressPct) {
      this.lastProgressPct = pct;
      const pill = document.getElementById('rp-minimap-progress-pill');
      if (pill) {
        pill.textContent = `${pct}%`;
      }
      const mobileProgress = document.getElementById('rp-mobile-fab-progress');
      if (mobileProgress) {
        mobileProgress.textContent = `${pct}%`;
      }
    }
  }

  /**
   * High-speed boundary and active section fallback
   * (Mid-page tracking is primarily powered by IntersectionObserver without forced reflows)
   */
  updateActiveSection() {
    if (!this.headings || this.headings.length === 0) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 1. Bottom of page activation
    if (windowHeight + scrollY >= documentHeight - 60) {
      this.setActive(this.headings[this.headings.length - 1].id);
      return;
    }

    // 2. Top of page activation
    if (scrollY < 80) {
      this.setActive(this.headings[0].id);
      return;
    }
  }

  /**
   * Highlight active link in both desktop minimap and mobile drawer
   */
  setActive(id) {
    if (this.activeId === id) return;
    this.activeId = id;

    // Update Desktop Minimap Links
    if (this.minimapEl) {
      const minimapLinks = this.minimapEl.querySelectorAll('.rp-minimap-link');
      let activeMinimapLink = null;
      minimapLinks.forEach(link => {
        if (link.getAttribute('data-target') === id) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'true');
          activeMinimapLink = link;
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });

      // Auto-scroll long TOC list inside expanded panel ONLY if panel is open/hovered
      if (activeMinimapLink && this.minimapEl.matches(':hover')) {
        const nav = this.minimapEl.querySelector('.rp-minimap-nav');
        if (nav) {
          const linkRect = activeMinimapLink.getBoundingClientRect();
          const navRect = nav.getBoundingClientRect();
          if (linkRect.top < navRect.top || linkRect.bottom > navRect.bottom) {
            activeMinimapLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      }
    }

    // Update Mobile Drawer Links
    if (this.mobileDrawerEl) {
      const drawerLinks = this.mobileDrawerEl.querySelectorAll('.rp-drawer-link');
      drawerLinks.forEach(link => {
        if (link.getAttribute('data-target') === id) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'true');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  }

  /**
   * Set up MutationObserver to detect dynamically added/removed content
   */
  setupMutationObserver() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }

    if (!this.contentEl || !('MutationObserver' in window)) return;

    let debounceTimer = null;
    this.mutationObserver = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const newHeadings = this.scanHeadings();
        if (newHeadings.length !== this.headings.length || newHeadings.some((h, i) => h.id !== this.headings[i]?.id)) {
          this.headings = newHeadings;
          if (this.headings.length >= 2) {
            this.render();
            this.bindEvents();
            this.setupScrollSpy();
            this.updateActiveSection();
          } else {
            this.destroy();
          }
        }
      }, 250);
    });

    this.mutationObserver.observe(this.contentEl, {
      childList: true,
      subtree: true,
      characterData: false
    });
  }

  /**
   * Full teardown of event listeners, observers, and DOM nodes
   */
  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('rp-learn-lang-changed', this.handleLangChange);
    document.removeEventListener('keydown', this.handleKeyDown);

    if (this.rafId) cancelAnimationFrame(this.rafId);
    clearTimeout(this.scrollTimeout);

    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = null;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }

    if (this.minimapEl && this.minimapEl.parentNode) {
      this.minimapEl.parentNode.removeChild(this.minimapEl);
    }
    if (this.mobileFabEl && this.mobileFabEl.parentNode) {
      this.mobileFabEl.parentNode.removeChild(this.mobileFabEl);
    }
    if (this.mobileDrawerEl && this.mobileDrawerEl.parentNode) {
      this.mobileDrawerEl.parentNode.removeChild(this.mobileDrawerEl);
    }
    if (this.mobileBackdropEl && this.mobileBackdropEl.parentNode) {
      this.mobileBackdropEl.parentNode.removeChild(this.mobileBackdropEl);
    }

    document.body.style.overflow = '';
    this.minimapEl = null;
    this.mobileFabEl = null;
    this.mobileDrawerEl = null;
    this.mobileBackdropEl = null;
    this.headings = [];
    this.activeId = null;
  }
}

/**
 * Global Auto-Injection Coordinator
 * Scans the current page and mounts FloatingTOC if learning content is present.
 */
export function initGlobalFloatingTOC(options = {}) {
  // Clean up any stale instance from prior route
  if (currentTOCInstance) {
    currentTOCInstance.destroy();
    currentTOCInstance = null;
  }

  const toc = new FloatingTOC(options);
  const success = toc.init();
  if (success) {
    currentTOCInstance = toc;
  }
  return toc;
}

/**
 * Backward-compatible helper for existing code that imported initNotionOutline / NotionOutline
 */
export const NotionOutline = FloatingTOC;
export function initNotionOutline(options = {}) {
  return initGlobalFloatingTOC(options);
}



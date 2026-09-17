import { GLOSSARY_PREVIEW, GLOSSARY_DICTIONARY } from './data/glossaryData.js';
import { initGlobalFloatingTOC } from './outline.js';
// ==============================================
// risePaisa - Premium UI Enhancements
// Scroll animations, parallax, particles,
// cursor glow, micro-interactions
// ==============================================

// ── Scroll-Reveal Observer ────────────────────
export function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.card, .topic-card, .stat-item, .mission-card, .contact-info-card, ' +
    '.section-header, .about-teaser > *, .cta-banner, .founder-section > *, ' +
    '.accordion-item, .pricing-card, .filter-tabs'
  );

  if (!revealEls.length) return;

  let remaining = revealEls.length;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Stagger within the same parent group
        const siblings = Array.from(entry.target.parentElement?.children || [])
          .filter(el => el.classList.contains('card') ||
                        el.classList.contains('topic-card') ||
                        el.classList.contains('stat-item') ||
                        el.classList.contains('accordion-item'));
        const idx = siblings.indexOf(entry.target);
        const delay = siblings.length > 1 ? Math.min(idx * 60, 300) : 0;

        if (delay > 0) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
        } else {
          entry.target.classList.add('revealed');
        }

        observer.unobserve(entry.target);
        remaining--;
        if (remaining <= 0) {
          observer.disconnect();
        }
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ── Hero Mouse-Parallax Ambient Light (Zero Idle CPU, Cached Layout) ──
export function initHeroParallax() {
  const heroBg = document.querySelector('.hero-bg');
  const hero = document.querySelector('.hero');
  if (!heroBg || !hero) return;

  let raf = null;
  let isRunning = false;
  let targetX = 20, targetY = 55;
  let currentX = 20, currentY = 55;
  let cachedRect = null;

  function updateRect() {
    cachedRect = hero.getBoundingClientRect();
  }
  updateRect();

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    currentX = lerp(currentX, targetX, 0.05);
    currentY = lerp(currentY, targetY, 0.05);
    heroBg.style.setProperty('--gx', currentX.toFixed(1) + '%');
    heroBg.style.setProperty('--gy', currentY.toFixed(1) + '%');

    // Auto-pause loop when mouse stops and coordinates converge
    if (Math.abs(currentX - targetX) > 0.05 || Math.abs(currentY - targetY) > 0.05) {
      raf = requestAnimationFrame(animate);
    } else {
      isRunning = false;
      raf = null;
    }
  }

  function onMouseMove(e) {
    if (!cachedRect) updateRect();
    targetX = ((e.clientX - cachedRect.left) / cachedRect.width) * 100;
    targetY = ((e.clientY - cachedRect.top)  / cachedRect.height) * 100;

    if (!isRunning) {
      isRunning = true;
      raf = requestAnimationFrame(animate);
    }
  }

  hero.addEventListener('mouseenter', updateRect, { passive: true });
  window.addEventListener('resize', updateRect, { passive: true });
  hero.addEventListener('mousemove', onMouseMove, { passive: true });
  isRunning = true;
  raf = requestAnimationFrame(animate);

  // Cleanup when hero leaves viewport
  const cleanupObserver = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) {
      if (raf) cancelAnimationFrame(raf);
      isRunning = false;
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('mouseenter', updateRect);
      window.removeEventListener('resize', updateRect);
      cleanupObserver.disconnect();
    }
  }, { threshold: 0 });
  cleanupObserver.observe(hero);
}

// ── Floating Particles in Hero (Cleaned: Calm neutral canvas) ─
export function initHeroParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  // Clean up any residual particles
  hero.querySelectorAll('.hero-particle').forEach(p => p.remove());
}

// ── Stat Counter with Ease ────────────────────
export function initPremiumStatCounters() {
  const counters = document.querySelectorAll('[data-count]:not([data-counted])');
  if (!counters.length) return;

  let remaining = counters.length;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (el.dataset.counted) return;
        el.dataset.counted = '1';

        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
        remaining--;
        if (remaining <= 0) {
          observer.disconnect();
        }
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

// ── Button Press Micro-interaction ───────────
export function initButtonMicroInteractions() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transition = 'transform 80ms ease, opacity 80ms ease';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transition = '';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = '';
    });
  });
}

// ── Card Micro-Interactions (Stable Pure CSS) ─
export function initCardTilt() {
  // Rely on optimized GPU-accelerated CSS hover states (translateY(-2px) and elevation shadow)
  // to avoid JS mousemove repaints, layout shifts, or hover jitter.
}

// ── Section Heading Polish (Clean Typography) ─
export function initHeadingGlow() {
  // No-op: Removed synthetic text-shadow glow in favor of crisp typography hierarchy
}

// ── Navbar Active Link Indicator ──────────────
export function enhanceActiveNavLink() {
  // No-op: Active nav state handled via clean CSS color without neon text-shadow
}

// ── Smooth Anchor Highlight ───────────────────
export function initSmoothAnchorHighlight() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        target.style.transition = 'outline 0.2s ease';
        target.style.outline = '2px solid rgba(10, 132, 255, 0.4)';
        target.style.outlineOffset = '4px';
        setTimeout(() => { target.style.outline = 'none'; }, 1200);
      }
    });
  });
}

// ── Master Init ───────────────────────────────
export function initAllEnhancements() {
  // Run after a paint frame so DOM is fully rendered
  requestAnimationFrame(() => {
    initScrollReveal();
    initHeroParallax();
    initHeroParticles();
    initPremiumStatCounters();
    initButtonMicroInteractions();
    initCardTilt();
    initHeadingGlow();
    enhanceActiveNavLink();
    initGlossaryTooltips();
    initGlobalFloatingTOC();
  });
}


// ── Interactive Financial Glossary Tooltips System ──────────
let activeTooltipEl = null;
let tooltipHideTimeout = null;
let tooltipInitialized = false;

const TOOLTIP_LINK_MAP = {
  'sip': { url: '/tools/sip', en: 'Open SIP Calculator', np: 'SIP क्याल्कुलेटर खोल्नुहोस्' },
  'nav': { url: '/learn/guides/complete-mutual-fund-guide', en: 'Mutual Fund Guide', np: 'Mutual Fund गाइड' },
  'pan': { url: '/learn/guides/complete-pan-guide', en: 'Complete PAN Guide', np: 'PAN विस्तृत गाइड' },
  'meroshare': { url: '/learn/guides/complete-meroshare-guide', en: 'MeroShare Guide', np: 'MeroShare गाइड' },
  'tms': { url: '/learn/guides/complete-tms-guide', en: 'NEPSE TMS Guide', np: 'TMS गाइड' },
  'ipo': { url: '/learn/investing', en: 'Investing Lessons', np: 'सेयर लगानी पाठ' },
  'kyc': { url: '/learn/guides/complete-banking-guide', en: 'Banking Guide', np: 'बैंकिङ गाइड' },
  'dividend': { url: '/learn/investing', en: 'Investing Basics', np: 'लगानी आधारभूत' },
  'capital gain': { url: '/tools/income-tax', en: 'Tax Calculator', np: 'कर क्याल्कुलेटर' },
  'vat': { url: '/learn/guides/complete-income-tax-guide', en: 'Tax Guide', np: 'कर गाइड' },
  'tds': { url: '/learn/guides/complete-income-tax-guide', en: 'Tax Guide', np: 'कर गाइड' },
  'fd': { url: '/tools/fixed-deposit', en: 'FD Calculator', np: 'FD क्याल्कुलेटर' },
  'fixed deposit': { url: '/tools/fixed-deposit', en: 'FD Calculator', np: 'FD क्याल्कुलेटर' },
  'budget': { url: '/tools/budget-planner', en: 'Budget Planner', np: 'बजेट प्लानर' },
  'asset': { url: '/learn/investing', en: 'Investing Hub', np: 'लगानी हब' },
  'etf': { url: '/learn/guides/complete-nepse-guide', en: 'NEPSE Guide', np: 'नेप्से गाइड' },
  'portfolio': { url: '/learn/investing', en: 'Investing Hub', np: 'लगानी हब' }
};

const EXTRA_DEFINITIONS = {
  'portfolio': {
    term: 'Portfolio (लगानी थैली)',
    def: {
      en: 'A strategic collection of varied financial assets (shares, mutual funds, gold, fixed deposits) held to balance high growth with safety.',
      np: 'जोखिम घटाउन र स्थिर नाफा कमाउन विभिन्न क्षेत्रहरू (सेयर, म्युचुअल फण्ड, मुद्दती निक्षेप) मा गरिएको सन्तुलित लगानीको समूह।'
    }
  }
};

function getOrCreateTooltipElement() {
  let el = document.getElementById('rp-glossary-tooltip-card');
  if (!el) {
    el = document.createElement('div');
    el.id = 'rp-glossary-tooltip-card';
    el.className = 'rp-glossary-tooltip';
    el.setAttribute('role', 'tooltip');
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);

    // Keep tooltip open while hovering the tooltip card itself
    el.addEventListener('mouseenter', () => {
      if (tooltipHideTimeout) {
        clearTimeout(tooltipHideTimeout);
        tooltipHideTimeout = null;
      }
    });
    el.addEventListener('mouseleave', () => {
      hideTooltip();
    });

    // Close button click
    el.addEventListener('click', (e) => {
      if (e.target.closest('.rp-tooltip-close-btn')) {
        hideTooltip(true);
      }
    });
  }
  return el;
}

function showTooltipFor(targetEl) {
  if (!targetEl) return;
  if (tooltipHideTimeout) {
    clearTimeout(tooltipHideTimeout);
    tooltipHideTimeout = null;
  }

  const rawKey = (targetEl.dataset.term || targetEl.textContent || '').trim();
  const lowerKey = rawKey.toLowerCase();

  // 1. Lookup in comprehensive GLOSSARY_DICTIONARY first
  let termSlug = null;
  let termTitle = rawKey;
  let defText = '';

  const matchedDict = Array.isArray(GLOSSARY_DICTIONARY) ? GLOSSARY_DICTIONARY.find(d => {
    const slugMatch = d.slug === lowerKey;
    const termMatch = d.term.toLowerCase() === lowerKey;
    const abbrMatch = d.abbreviation && d.abbreviation.toLowerCase().split(/[\s/]+/).includes(lowerKey);
    const synMatch = Array.isArray(d.synonyms) && d.synonyms.some(s => s.toLowerCase() === lowerKey);
    return slugMatch || termMatch || abbrMatch || synMatch;
  }) : null;

  const isNp = (localStorage.getItem('risepaisa_lang') || document.documentElement.lang || 'en') === 'ne';

  if (matchedDict) {
    termTitle = matchedDict.term;
    termSlug = matchedDict.slug;
    defText = isNp 
      ? (matchedDict.oneLineDef?.np || matchedDict.oneLineDef?.en) 
      : (matchedDict.oneLineDef?.en || matchedDict.oneLineDef?.np);
  } else {
    // 2. Fallback to GLOSSARY_PREVIEW or EXTRA_DEFINITIONS
    let matchedItem = GLOSSARY_PREVIEW.find(g => {
      const raw = g.term.toLowerCase();
      return raw.startsWith(lowerKey) || raw.includes(lowerKey) || lowerKey.includes(raw.split(' ')[0]);
    });
    if (!matchedItem && EXTRA_DEFINITIONS[lowerKey]) {
      matchedItem = EXTRA_DEFINITIONS[lowerKey];
    }
    if (matchedItem) {
      termTitle = matchedItem.term;
      defText = isNp ? (matchedItem.def?.np || matchedItem.def?.en) : (matchedItem.def?.en || matchedItem.def?.np);
    } else {
      defText = isNp 
        ? 'नेपालमा लगानी, बैंकिङ र व्यक्तिगत वित्तीय व्यवस्थापनमा प्रयोग हुने महत्त्वपूर्ण पारिभाषिक अवधारणा।' 
        : 'A core financial concept foundational to investing, banking, and wealth-building in Nepal.';
    }
  }

  const actionUrl = termSlug ? `/learn/glossary/${termSlug}` : (TOOLTIP_LINK_MAP[lowerKey]?.url || '/learn/glossary');
  const actionText = isNp ? 'पूर्ण व्याख्या हेर्नुहोस्' : 'View Full Definition';

  const tooltip = getOrCreateTooltipElement();
  tooltip.innerHTML = `
    <div class="rp-tooltip-header">
      <span class="content-type-badge badge-glossary">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        <span>${isNp ? 'शब्दावली' : 'Glossary'}</span>
      </span>
      <button type="button" class="rp-tooltip-close-btn" aria-label="Close tooltip">×</button>
    </div>
    <h5 class="rp-tooltip-title">${termTitle}</h5>
    <p class="rp-tooltip-def">${defText}</p>
    <div class="rp-tooltip-footer">
      <a href="${actionUrl}" class="rp-tooltip-action">
        <span>${actionText}</span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
      </a>
    </div>
  `;

  tooltip.style.display = 'block';
  tooltip.style.visibility = 'hidden';
  tooltip.classList.remove('visible');

  requestAnimationFrame(() => {
    const rect = targetEl.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const padding = 12;

    let top = rect.bottom + 8;
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

    if (top + tooltipRect.height > window.innerHeight - padding) {
      top = rect.top - tooltipRect.height - 8;
    }
    if (left < padding) left = padding;
    if (left + tooltipRect.width > window.innerWidth - padding) {
      left = window.innerWidth - tooltipRect.width - padding;
    }

    tooltip.style.top = `${top + window.scrollY}px`;
    tooltip.style.left = `${left + window.scrollX}px`;
    tooltip.style.visibility = 'visible';
    tooltip.classList.add('visible');
    tooltip.setAttribute('aria-hidden', 'false');
  });

  activeTooltipEl = targetEl;
}

function hideTooltip(immediate = false) {
  if (tooltipHideTimeout) {
    clearTimeout(tooltipHideTimeout);
    tooltipHideTimeout = null;
  }
  const doHide = () => {
    const tooltip = document.getElementById('rp-glossary-tooltip-card');
    if (tooltip) {
      tooltip.classList.remove('visible');
      tooltip.setAttribute('aria-hidden', 'true');
      tooltip.style.display = 'none';
    }
    activeTooltipEl = null;
  };

  if (immediate) {
    doHide();
  } else {
    tooltipHideTimeout = setTimeout(doHide, 180);
  }
}

function autoEnrichArticleText(root) {
  if (!root || root.dataset.glossaryEnriched === '1') return;
  root.dataset.glossaryEnriched = '1';

  const terms = ['SIP', 'NAV', 'PAN', 'MeroShare', 'TMS', 'IPO', 'KYC', 'TDS', 'VAT', 'FD', 'ETF', 'Portfolio', 'Inflation', 'Dividend', 'Demat', 'EMI'];
  const testRegex = new RegExp(`\\b(${terms.join('|')})\\b`, 'i');

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName.toLowerCase();
      if (['a', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre', 'svg', 'input', 'select', 'textarea'].includes(tag)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest('.rp-glossary-term') || parent.closest('.rp-glossary-tooltip') || parent.closest('nav') || parent.closest('.where-next-panel')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodesToReplace = [];
  let currentNode;
  const termUsageCount = new Map();

  while ((currentNode = walker.nextNode())) {
    if (testRegex.test(currentNode.nodeValue)) {
      nodesToReplace.push(currentNode);
    }
  }

  const matchRegex = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');

  nodesToReplace.forEach(textNode => {
    const text = textNode.nodeValue;
    const parent = textNode.parentNode;
    if (!parent) return;

    let hasMatch = false;
    const frag = document.createDocumentFragment();
    let lastIndex = 0;

    matchRegex.lastIndex = 0;
    let match;
    while ((match = matchRegex.exec(text)) !== null) {
      const matchedWord = match[1];
      const normalizedKey = matchedWord.toLowerCase();
      const count = termUsageCount.get(normalizedKey) || 0;
      if (count >= 2) continue; // max 2 tooltips per term per section
      termUsageCount.set(normalizedKey, count + 1);

      hasMatch = true;
      if (match.index > lastIndex) {
        frag.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));
      }
      const span = document.createElement('span');
      span.className = 'rp-glossary-term';
      span.tabIndex = 0;
      span.setAttribute('role', 'button');
      span.setAttribute('aria-haspopup', 'dialog');
      span.setAttribute('data-term', matchedWord);
      span.textContent = matchedWord;
      frag.appendChild(span);
      lastIndex = matchRegex.lastIndex;
    }

    if (hasMatch) {
      if (lastIndex < text.length) {
        frag.appendChild(document.createTextNode(text.substring(lastIndex)));
      }
      parent.replaceChild(frag, textNode);
    }
  });
}

export function initGlossaryTooltips() {
  // 1. Auto enrich educational blocks across guides and lessons during browser idle time
  const containers = document.querySelectorAll(
    '.guide-chapter-block, .guide-prose-body, .lesson-section-block, ' +
    '.guide-content-grid, .lesson-reading-grid, .nepal-context-card, ' +
    '.practical-scenario-card'
  );
  if (containers.length) {
    const runEnrich = () => {
      containers.forEach(autoEnrichArticleText);
    };
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(runEnrich, { timeout: 800 });
    } else {
      setTimeout(runEnrich, 60);
    }
  }

  if (tooltipInitialized) return;
  tooltipInitialized = true;

  // 2. Global event delegation for hover & keyboard focus
  document.addEventListener('mouseover', (e) => {
    const trigger = e.target.closest('.rp-glossary-term');
    if (trigger) {
      showTooltipFor(trigger);
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const trigger = e.target.closest('.rp-glossary-term');
    if (trigger) {
      hideTooltip(false);
    }
  }, { passive: true });

  document.addEventListener('focusin', (e) => {
    const trigger = e.target.closest('.rp-glossary-term');
    if (trigger) {
      showTooltipFor(trigger);
    }
  });

  document.addEventListener('focusout', (e) => {
    const trigger = e.target.closest('.rp-glossary-term');
    if (trigger) {
      hideTooltip(false);
    }
  });

  // Tap support for mobile devices
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.rp-glossary-term');
    if (trigger) {
      if (activeTooltipEl === trigger) {
        hideTooltip(true);
      } else {
        showTooltipFor(trigger);
      }
    } else if (!e.target.closest('#rp-glossary-tooltip-card')) {
      hideTooltip(true);
    }
  });

  // ESC to dismiss
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideTooltip(true);
    }
  });

  // Dismiss on substantial scroll with RAF throttling
  let lastScrollY = window.scrollY;
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!activeTooltipEl) return;
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        if (activeTooltipEl && Math.abs(window.scrollY - lastScrollY) > 25) {
          hideTooltip(true);
          lastScrollY = window.scrollY;
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
}

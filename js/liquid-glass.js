import {
  SHADER_GLASS_PRESETS,
  initShaderGlass,
  destroyShaderGlass,
  destroyAllShaderGlass,
  getActiveShaderInstanceCount,
  loadLiquidGlassLibrary,
  initNavbarShaderGlass,
  getNavbarShaderInstance,
  initDropdownShaderGlass,
  destroyDropdownShaderGlass,
  getDropdownShaderInstance,
  initSidebarShaderGlass,
  destroySidebarShaderGlass,
  getSidebarShaderInstance
} from './shader-glass.js';

export {
  SHADER_GLASS_PRESETS,
  initShaderGlass,
  destroyShaderGlass,
  destroyAllShaderGlass,
  getActiveShaderInstanceCount,
  loadLiquidGlassLibrary,
  initNavbarShaderGlass,
  getNavbarShaderInstance,
  initDropdownShaderGlass,
  destroyDropdownShaderGlass,
  getDropdownShaderInstance,
  initSidebarShaderGlass,
  destroySidebarShaderGlass,
  getSidebarShaderInstance
};

// ==============================================
// risePaisa: Apple Liquid Glass & Interactive Controls Engine
// High-performance, browser-native Liquid Glass coordinator
// Dynamic specular reflection tracking, tactile physical range sliders,
// chromatic dispersion filters, and Apple-grade materials
// ==============================================

/**
 * Check if the current browser environment supports WebGL
 * @returns {boolean}
 */
export function isWebGLAvailable() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Check if the user prefers reduced motion
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ──────────────────────────────────────────────
// Liquid Glass Presets (Preserved for API compatibility)
// ──────────────────────────────────────────────
export const GLASS_CONFIGS = {
  HEADER: { cornerRadius: 32, blurAmount: 0.06, button: false },
  DROPDOWN: { cornerRadius: 20, blurAmount: 0.06, button: false },
  BUTTON_PRIMARY: { cornerRadius: 9999, blurAmount: 0.04, button: true },
  BUTTON_SECONDARY: { cornerRadius: 9999, blurAmount: 0.05, button: true },
  PRESET_BUTTON: { cornerRadius: 9999, blurAmount: 0.05, button: true },
  SLIDER_THUMB: { cornerRadius: 15, blurAmount: 0, button: true },
  FLOATING_CAPSULE: { cornerRadius: 9999, blurAmount: 0.04, button: true },
  CARD: { cornerRadius: 22, blurAmount: 0.08, button: false },
  MODAL: { cornerRadius: 28, blurAmount: 0.08, button: false }
};

export function getThemeConfig(baseConfig, isDark) {
  return { ...baseConfig, isDark };
}

/**
 * Format numeric value for slider display with Nepal South Asian conventions
 * @param {number|string} val
 * @param {HTMLInputElement} slider
 * @returns {string}
 */
export function formatSliderDisplay(val, slider) {
  const id = (slider?.id || '').toLowerCase();
  const labelEl = slider?.closest('.rp-field-group')?.querySelector('label');
  const labelText = (labelEl ? labelEl.textContent : '').toLowerCase();

  // 1. Percentage / Rate / Return
  if (id.includes('rate') || id.includes('return') || labelText.includes('rate') || labelText.includes('return') || labelText.includes('cagr')) {
    const num = Number(val);
    return `${num % 1 === 0 ? num.toFixed(0) : num.toFixed(2)}% p.a.`;
  }

  // 2. Tenure / Duration / Years / Months
  if (id.includes('tenure') || id.includes('years') || labelText.includes('tenure') || labelText.includes('time') || labelText.includes('duration') || labelText.includes('period')) {
    const isMonths = Boolean(
      id.includes('month') ||
      slider?.closest('.rp-field-group')?.querySelector('.rp-unit-btn.active[data-unit="months"], .active[data-unit="months"], #hl-unit-months.active, #pl-unit-months.active, #vl-unit-months.active')
    );
    const roundVal = Math.round(Number(val));
    if (isMonths) {
      return `${roundVal} ${roundVal === 1 ? 'Month' : 'Months'}`;
    }
    return `${roundVal} ${roundVal === 1 ? 'Year' : 'Years'}`;
  }

  // 3. Age
  if (id.includes('age') || labelText.includes('age')) {
    const roundVal = Math.round(Number(val));
    return `Age ${roundVal}`;
  }

  // 4. Kitta / Units / Shares
  if (id.includes('kitta') || labelText.includes('kitta') || labelText.includes('share') || labelText.includes('unit')) {
    return `${Math.round(Number(val)).toLocaleString('en-IN')} Kitta`;
  }

  // 5. Currency (Nepal NPR) with compact South Asian Lakhs/Crores
  const num = Math.round(Number(val));
  if (num >= 10000000) {
    const cr = (num / 10000000).toLocaleString('en-IN', { maximumFractionDigits: 2 });
    return `NPR ${cr} Cr`;
  }
  if (num >= 100000) {
    const lk = (num / 100000).toLocaleString('en-IN', { maximumFractionDigits: 2 });
    return `NPR ${lk} Lakh`;
  }
  return `NPR ${num.toLocaleString('en-IN')}`;
}

/**
 * Inject the Liquid Glass SVG Chromatic Dispersion and Refraction Filter
 */
function ensureSvgRefractionDefs() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('rp-liquid-glass-svg-defs')) return;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'rp-liquid-glass-svg-defs';
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;';
  svg.innerHTML = `
    <defs>
      <!-- Subtle Apple Liquid Glass Edge Refraction Filter -->
      <filter id="rp-glass-edge-refraction" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" result="displaced" />
        <feBlend in="SourceGraphic" in2="displaced" mode="screen" />
      </filter>
      <!-- Dual-Surface Specular Bevel Filter -->
      <filter id="rp-glass-specular-light" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
        <feSpecularLighting in="blur" surfaceScale="3" specularConstant="1.2" specularExponent="24" lighting-color="#ffffff" result="specLight">
          <fePointLight x="80" y="-30" z="120" />
        </feSpecularLighting>
        <feComposite in="specLight" in2="SourceAlpha" operator="in" result="specular" />
        <feComposite in="SourceGraphic" in2="specular" operator="over" />
      </filter>
    </defs>
  `;
  document.body.appendChild(svg);
}

// ──────────────────────────────────────────────
// Liquid Glass Coordinator Singleton
// ──────────────────────────────────────────────
class LiquidGlassCoordinator {
  constructor() {
    this.slots = new Map();
    this.sliderInstances = new Map();
    this._sliderUnsubscribers = [];
    this._specularListenerAttached = false;
    this.initSpecularTracking();
  }

  isDarkTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  /**
   * Initializes real-time cursor-tracking specular light reflection
   * Computes the angle and coordinates of incoming light across glass buttons & cards
   */
  initSpecularTracking() {
    if (typeof window === 'undefined' || this._specularListenerAttached) return;
    if (prefersReducedMotion()) return;

    let rafId = null;
    let pendingEvent = null;

    const onPointerMove = (e) => {
      pendingEvent = e;
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!pendingEvent) return;

        const target = pendingEvent.target.closest(
          '.btn, .btn-primary, .btn-secondary, .btn-glass, .navbar, .card, .rp-calc-controls-card, .rp-calc-results-card, .modal-dialog, .advisor-capsule-link, .rp-hub-card'
        );

        if (target) {
          const rect = target.getBoundingClientRect();
          const x = pendingEvent.clientX - rect.left;
          const y = pendingEvent.clientY - rect.top;
          const pctX = Math.round((x / rect.width) * 100);
          const pctY = Math.round((y / rect.height) * 100);

          target.style.setProperty('--glass-spec-x', `${pctX}%`);
          target.style.setProperty('--glass-spec-y', `${pctY}%`);
        }
      });
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    this._specularListenerAttached = true;
    ensureSvgRefractionDefs();
  }

  // ── 1. Header Slot ───────────────────────────
  async initHeaderGlass() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('glass-control');
      navbar.setAttribute('data-liquid-glass', 'header');
      this.slots.set('header', { element: navbar });
    }
    return null;
  }

  // ── 2. Floating Action Elements Slot ─────────
  async initFloatingGlass() {
    const waFloat = document.getElementById('whatsapp-float');
    if (waFloat) {
      waFloat.classList.remove('glass-clear');
    }
    const waLink = document.querySelector('.advisor-capsule-link');
    if (waLink) {
      waLink.setAttribute('data-liquid-glass', 'floating');
      this.slots.set('floating', { element: waLink });
    } else if (waFloat) {
      waFloat.setAttribute('data-liquid-glass', 'floating');
      this.slots.set('floating', { element: waFloat });
    }
    return null;
  }

  // ── 3. Page Actions Slot ─────────────────────
  async initPageActionsGlass(container = document) {
    const buttons = container.querySelectorAll('.btn-primary, .btn-secondary, .btn-glass, .btn-outline, .btn-dark');
    buttons.forEach(btn => {
      btn.setAttribute('data-liquid-glass', 'action');
    });
    return null;
  }

  // ── 3b. Dropdown Menus Slot ──────────────────
  async initDropdownGlass(menuElement) {
    if (!menuElement) return null;
    menuElement.classList.add('glass-control');
    menuElement.setAttribute('data-liquid-glass', 'dropdown');
    this.slots.set('dropdown', { element: menuElement });
    try {
      return await initDropdownShaderGlass(menuElement);
    } catch {
      return null;
    }
  }

  // ── 3c. Mobile Navigation Sidebar Slot ────────
  async initSidebarGlass(sidebarElement) {
    if (!sidebarElement) return null;
    sidebarElement.setAttribute('data-liquid-glass', 'sidebar');
    this.slots.set('sidebar', { element: sidebarElement });
    try {
      return await initSidebarShaderGlass(sidebarElement);
    } catch {
      return null;
    }
  }

  // ── 4. Page Controls & Tabs Slot ─────────────
  async initControlsGlass(container = document) {
    const tabBars = container.querySelectorAll(
      '.rp-calc-tabs-bar, .rp-loan-tabs-nav, .rp-marital-switch, .rp-unit-selector, .rp-preset-group, .segmented-control'
    );
    tabBars.forEach(bar => {
      bar.classList.add('glass-subtle');
      bar.setAttribute('data-liquid-glass', 'controls');
    });
    this.slots.set('controls', { count: tabBars.length });
    return null;
  }

  // ── 5. Range Sliders: Apple-Inspired Physical Interaction ───
  async initSliderGlass(container = document) {
    try {
      this.destroySliders();

      const activePane = (container.matches && container.matches('.rp-calc-pane'))
        ? container
        : (container.querySelector?.('.rp-calc-pane.active') || container);

      if (!activePane || !activePane.querySelectorAll) return;

      const sliders = Array.from(activePane.querySelectorAll('.rp-range-slider, .rp-slider'));
      if (!sliders.length) return;

      for (const slider of sliders) {
        if (!slider.isConnected) continue;

        // Ensure container has relative positioning for floating tooltip
        const parent = slider.parentElement;
        if (parent && getComputedStyle(parent).position === 'static') {
          parent.style.position = 'relative';
        }

        // Create or find dynamic glass tooltip
        let tooltip = parent ? parent.querySelector('.rp-slider-glass-tooltip') : null;
        if (!tooltip && parent) {
          tooltip = document.createElement('div');
          tooltip.className = 'rp-slider-glass-tooltip';
          tooltip.setAttribute('aria-hidden', 'true');
          parent.appendChild(tooltip);
        }

        // Sync slider fill percentage in CSS and update floating tooltip
        const updateFill = () => {
          const min = parseFloat(slider.min) || 0;
          const max = parseFloat(slider.max) || 100;
          const val = parseFloat(slider.value) || 0;
          const pct = Math.min(1, Math.max(0, (val - min) / (max - min)));
          const pctStr = `${(pct * 100).toFixed(2)}%`;
          slider.style.setProperty('--slider-fill-pct', pctStr);

          if (tooltip) {
            tooltip.textContent = formatSliderDisplay(val, slider);
            // Position tooltip dynamically above the 22px thumb
            tooltip.style.left = `calc(${pctStr} + (${11 - pct * 22}px))`;
          }
        };

        updateFill();

        const onInput = () => {
          updateFill();
        };
        slider.addEventListener('input', onInput);
        slider.addEventListener('change', onInput);

        // Tactile grab feedback with spring physics & tooltip visibility
        const startDrag = () => {
          slider.classList.add('is-dragging');
          if (tooltip) tooltip.classList.add('visible');
        };
        const endDrag = () => {
          slider.classList.remove('is-dragging');
          if (tooltip) tooltip.classList.remove('visible');
        };
        slider.addEventListener('pointerdown', startDrag);
        slider.addEventListener('pointerup', endDrag);
        slider.addEventListener('pointercancel', endDrag);

        // Bidirectional synchronization with paired numeric input in the same field group
        const fieldGroup = slider.closest('.rp-field-group');
        const numInput = fieldGroup ? fieldGroup.querySelector('input[type="number"]') : null;
        let numHandler = null;

        if (numInput) {
          numHandler = () => {
            const numVal = parseFloat(numInput.value);
            if (!isNaN(numVal)) {
              slider.value = numVal;
              updateFill();
            }
          };
          numInput.addEventListener('input', numHandler);
          numInput.addEventListener('change', numHandler);
        }

        // Quick Presets synchronization
        const presetButtons = (fieldGroup || activePane).querySelectorAll('.rp-preset-btn, .rp-unit-btn');
        const presetHandlers = [];
        presetButtons.forEach(btn => {
          const onPreset = () => {
            setTimeout(updateFill, 20);
          };
          btn.addEventListener('click', onPreset);
          presetHandlers.push({ btn, onPreset });
        });

        this.sliderInstances.set(slider, { updateFill });

        this._sliderUnsubscribers.push(() => {
          slider.removeEventListener('input', onInput);
          slider.removeEventListener('change', onInput);
          slider.removeEventListener('pointerdown', startDrag);
          slider.removeEventListener('pointerup', endDrag);
          slider.removeEventListener('pointercancel', endDrag);
          if (numInput && numHandler) {
            numInput.removeEventListener('input', numHandler);
            numInput.removeEventListener('change', numHandler);
          }
          presetHandlers.forEach(({ btn, onPreset }) => {
            btn.removeEventListener('click', onPreset);
          });
          slider.classList.remove('is-dragging');
          if (tooltip && tooltip.isConnected) {
            tooltip.remove();
          }
        });
      }
    } catch (err) {
      console.warn('[risePaisa] Slider interaction init skipped:', err.message);
    }
  }

  // ── 6. Modal Slot (Search Modal / Dialogs) ───
  async initModalGlass(modalDialog) {
    if (!modalDialog) return null;
    modalDialog.classList.add('glass-control');
    modalDialog.setAttribute('data-liquid-glass', 'modal');
    this.slots.set('modal', { element: modalDialog });
    return null;
  }

  // ── Route Glass Orchestration ─────────────────
  async initRouteGlass(pathname = '', container = document.getElementById('app') || document) {
    try {
      this.destroyPageSlots();
      await this.initHeaderGlass();
      await this.initFloatingGlass();
      await this.initPageActionsGlass(container);
      await this.initControlsGlass(container);

      if (this.sliderInstances.size === 0) {
        await this.initSliderGlass(container);
      }
    } catch (err) {
      console.warn('[risePaisa] Route glass orchestration skipped:', err.message);
    }
  }

  async initPageGlass(pathname = '') {
    const appEl = document.getElementById('app') || document;
    await this.initPageActionsGlass(appEl);
    await this.initControlsGlass(appEl);
  }

  // ── Destruction & Cleanup ─────────────────────
  destroySlot(slotKey) {
    if (slotKey === 'dropdown') {
      try { destroyDropdownShaderGlass(); } catch {}
    } else if (slotKey === 'sidebar') {
      try { destroySidebarShaderGlass(); } catch {}
    }
    this.slots.delete(slotKey);
  }

  destroySliders() {
    for (const unsub of this._sliderUnsubscribers) {
      try { unsub(); } catch {}
    }
    this._sliderUnsubscribers = [];
    this.sliderInstances.clear();
  }

  destroyPageSlots() {
    this.destroySlot('actions');
    this.destroySlot('controls');
    this.destroySlot('dropdown');
    this.destroySlot('sidebar');
    this.destroySlot('modal');
    this.destroySlot('page');
  }

  destroyPageAndSliders() {
    this.destroyPageSlots();
    this.destroySliders();
  }

  destroyAll() {
    this.slots.clear();
    this.destroySliders();
    try {
      destroyDropdownShaderGlass();
      destroySidebarShaderGlass();
      destroyAllShaderGlass();
    } catch {}
  }

  /**
   * Initialize authentic WebGL Liquid Glass shader effect on target elements
   */
  async initShaderGlass(options) {
    return initShaderGlass(options);
  }

  markChanged() {
    // Pure CSS declarative rendering with hardware-accelerated shaders needs no manual invalidation
  }

  // ── Theme Switch Synchronization ─────────────
  async handleThemeChange() {
    // Declarative CSS custom properties handle instant GPU theme switching.
    // Heavy DOM scans and element re-initializations are omitted to ensure
    // zero-delay, instantaneous theme toggling.
    return Promise.resolve();
  }

  getActiveInstanceCount() {
    return this.slots.size + this.sliderInstances.size;
  }
}

// ── Shared Lightweight Slider Fill Synchronizer ───────────
export function syncRangeSliderFill(slider) {
  if (!slider) return;
  const min = parseFloat(slider.min) || 0;
  const max = parseFloat(slider.max) || 100;
  const val = parseFloat(slider.value) || 0;
  const pct = max > min ? Math.min(100, Math.max(0, ((val - min) / (max - min)) * 100)) : 0;
  slider.style.setProperty('--slider-fill-pct', `${pct.toFixed(2)}%`);
}

export function syncAllRangeSliders(root = document) {
  if (!root || !root.querySelectorAll) return;
  const sliders = root.querySelectorAll('.rp-range-slider, .rp-slider');
  sliders.forEach(syncRangeSliderFill);
}

// Global Singleton Instance
export const LiquidGlassManager = new LiquidGlassCoordinator();

if (typeof window !== 'undefined') {
  window.LiquidGlassManager = LiquidGlassManager;
  window.syncRangeSliderFill = syncRangeSliderFill;
  window.syncAllRangeSliders = syncAllRangeSliders;

  // Immediate event delegation for any range slider input/change
  document.addEventListener('input', (e) => {
    if (e.target && (e.target.matches?.('.rp-range-slider, .rp-slider'))) {
      syncRangeSliderFill(e.target);
    }
  }, { passive: true });

  window.addEventListener('rp-theme-changed', () => {
    LiquidGlassManager.handleThemeChange();
  });
}

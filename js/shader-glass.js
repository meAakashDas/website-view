// ============================================================================
// risePaisa: Liquid Glass WebGL Shader Integration Module
// Architecture: Dynamic lazy-loading, WebGL context guarding, graceful degradation,
// and Apple-grade optical physics presets (refraction, chromatic aberration,
// Fresnel reflections, specular lighting, and rounded glass bevels).
// Package: @ybouane/liquidglass
// ============================================================================

/**
 * Check if the current browser environment supports WebGL / WebGL2
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
 * Check if the user prefers reduced motion (WCAG 2.2 AA)
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ────────────────────────────────────────────────────────────────────────────
// Optical Physics Presets for RisePaisa UI Elements
// Tuned for high-fidelity glass refraction, chromatic aberration, and specular highlights
// ────────────────────────────────────────────────────────────────────────────
export const SHADER_GLASS_PRESETS = {
  /** Hero Card / Featured Container */
  HERO_CARD: {
    refraction: 0.65,
    blurAmount: 0.08,
    chromAberration: 0.04,
    edgeHighlight: 0.12,
    specular: 0.35,
    fresnel: 1.05,
    distortion: 0.0,
    cornerRadius: 24,
    zRadius: 28,
    opacity: 0.94,
    saturation: 0.05,
    tintStrength: 0.02,
    brightness: 0.02,
    shadowOpacity: 0.25,
    shadowSpread: 16,
    shadowOffsetY: 6,
    floating: false,
    button: false,
    bevelMode: 0
  },

  /** Primary / Secondary Tactile Pill Button */
  PILL_BUTTON: {
    refraction: 0.68,
    blurAmount: 0.04,
    chromAberration: 0.05,
    edgeHighlight: 0.16,
    specular: 0.45,
    fresnel: 1.15,
    distortion: 0.0,
    cornerRadius: 9999,
    zRadius: 32,
    opacity: 0.96,
    saturation: 0.0,
    tintStrength: 0.0,
    brightness: 0.04,
    shadowOpacity: 0.22,
    shadowSpread: 10,
    shadowOffsetY: 2,
    floating: false,
    button: true,
    bevelMode: 0
  },

  /** Outer Header: Regular Liquid Glass (Clear, Refractive, Lens Physics) */
  REGULAR_GLASS: {
    refraction: 0.69,
    blurAmount: 0.0,
    chromAberration: 0.05,
    edgeHighlight: 0.05,
    specular: 0.15,
    fresnel: 1.0,
    distortion: 0.0,
    cornerRadius: 0,
    zRadius: 40,
    opacity: 1.0,
    saturation: 0.0,
    brightness: 0.0,
    shadowOpacity: 0.30,
    shadowSpread: 10,
    shadowOffsetY: 4,
    floating: false,
    button: false,
    bevelMode: 0
  },

  /** Central Capsule: Frosted Liquid Glass (Subtle Diffusion & Depth) */
  FROSTED_GLASS: {
    refraction: 0.69,
    blurAmount: 0.25,
    chromAberration: 0.05,
    edgeHighlight: 0.05,
    specular: 0.15,
    fresnel: 1.0,
    distortion: 0.0,
    cornerRadius: 40,
    zRadius: 40,
    opacity: 1.0,
    saturation: 0.0,
    brightness: 0.0,
    shadowOpacity: 0.30,
    shadowSpread: 10,
    shadowOffsetY: 4,
    floating: false,
    button: false,
    bevelMode: 0
  },

  /** Individual Navigation Buttons / Tactile Optical Feedback */
  BUTTON_MODE: {
    refraction: 0.65,
    blurAmount: 0.04,
    chromAberration: 0.05,
    edgeHighlight: 0.12,
    specular: 0.20,
    fresnel: 1.0,
    distortion: 0.0,
    cornerRadius: 24,
    zRadius: 32,
    opacity: 0.96,
    saturation: 0.0,
    brightness: 0.02,
    shadowOpacity: 0.20,
    shadowSpread: 8,
    shadowOffsetY: 2,
    floating: false,
    button: true,
    bevelMode: 0
  },

  /** Header / Navigation Bar */
  NAV_BAR: {
    refraction: 0.52,
    blurAmount: 0.09,
    chromAberration: 0.035,
    edgeHighlight: 0.16,
    specular: 0.35,
    fresnel: 1.10,
    distortion: 0.0,
    cornerRadius: 0,
    zRadius: 24,
    opacity: 0.92,
    saturation: 0.08,
    tintStrength: 0.015,
    brightness: 0.015,
    shadowOpacity: 0.16,
    shadowSpread: 14,
    shadowOffsetY: 4,
    floating: false,
    button: false,
    bevelMode: 0
  },

  /** Modal Dialogue / Command Palette */
  MODAL: {
    refraction: 0.70,
    blurAmount: 0.10,
    chromAberration: 0.06,
    edgeHighlight: 0.14,
    specular: 0.40,
    fresnel: 1.10,
    distortion: 0.0,
    cornerRadius: 28,
    zRadius: 36,
    opacity: 0.95,
    saturation: 0.05,
    tintStrength: 0.02,
    brightness: 0.02,
    shadowOpacity: 0.35,
    shadowSpread: 28,
    shadowOffsetY: 12,
    floating: false,
    button: false,
    bevelMode: 0
  },

  /** Floating Action Capsule / Learning Dock */
  FLOATING_CAPSULE: {
    refraction: 0.66,
    blurAmount: 0.06,
    chromAberration: 0.05,
    edgeHighlight: 0.15,
    specular: 0.40,
    fresnel: 1.10,
    distortion: 0.0,
    cornerRadius: 9999,
    zRadius: 26,
    opacity: 0.95,
    saturation: 0.05,
    tintStrength: 0.01,
    brightness: 0.03,
    shadowOpacity: 0.28,
    shadowSpread: 18,
    shadowOffsetY: 6,
    floating: false,
    button: true,
    bevelMode: 0
  },

  /** Segmented Control / Subtle Filter Pill */
  SUBTLE_CHIP: {
    refraction: 0.50,
    blurAmount: 0.05,
    chromAberration: 0.03,
    edgeHighlight: 0.08,
    specular: 0.25,
    fresnel: 0.85,
    distortion: 0.0,
    cornerRadius: 9999,
    zRadius: 16,
    opacity: 0.90,
    saturation: 0.0,
    tintStrength: 0.0,
    brightness: 0.0,
    shadowOpacity: 0.10,
    shadowSpread: 6,
    shadowOffsetY: 1,
    floating: false,
    button: true,
    bevelMode: 0
  },

  /** Learn / Calculators Floating Dropdown Panel */
  DROPDOWN: {
    refraction: 0.69,
    blurAmount: 0.22,
    chromAberration: 0.04,
    edgeHighlight: 0.06,
    specular: 0.12,
    fresnel: 0.85,
    distortion: 0.0,
    cornerRadius: 18,
    zRadius: 36,
    opacity: 0.94,
    saturation: 0.0,
    brightness: 0.12,
    shadowOpacity: 0.18,
    shadowSpread: 14,
    shadowOffsetY: 6,
    floating: false,
    button: false,
    bevelMode: 0
  },

  /** Mobile Navigation Slide Drawer Sheet */
  SIDEBAR: {
    refraction: 0.69,
    blurAmount: 0.24,
    chromAberration: 0.04,
    edgeHighlight: 0.08,
    specular: 0.12,
    fresnel: 0.88,
    distortion: 0.0,
    cornerRadius: 24,
    zRadius: 40,
    opacity: 0.95,
    saturation: 0.0,
    brightness: 0.10,
    shadowOpacity: 0.25,
    shadowSpread: 24,
    shadowOffsetY: 0,
    floating: false,
    button: false,
    bevelMode: 0
  }
};

// ────────────────────────────────────────────────────────────────────────────
// Lazy Loader & WebGL Lifecycle Controller
// ────────────────────────────────────────────────────────────────────────────
let _liquidGlassModulePromise = null;
const _activeShaderInstances = new Set();

/**
 * Dynamically import the Liquid Glass production ESM bundle on-demand
 * Ensures initial page loads do not download shader bundles or initialize WebGL
 * @returns {Promise<{ LiquidGlass: any, DEFAULTS: any }>}
 */
export async function loadLiquidGlassLibrary() {
  if (!_liquidGlassModulePromise) {
    _liquidGlassModulePromise = (async () => {
      // In browser runtime, load from vendor deployment directory
      if (typeof window !== 'undefined') {
        try {
          return await import('/assets/vendor/liquidglass/liquidglass.js');
        } catch {
          // Relative fallback for alternate base URLs or local test harnesses
          return await import('../assets/vendor/liquidglass/liquidglass.js');
        }
      }
      // Node.js test environment fallback
      return await import('../assets/vendor/liquidglass/liquidglass.js');
    })();
  }
  return _liquidGlassModulePromise;
}

/**
 * Initialize WebGL Liquid Glass shader effect on target elements
 * Features:
 * - WebGL availability verification with graceful fallback
 * - prefers-reduced-motion compliance
 * - Error isolation ensuring content usability
 * - Automatic tracking and lifecycle destruction
 *
 * @param {Object} options
 * @param {HTMLElement} options.root - Root container to sample background pixels from
 * @param {NodeListOf<HTMLElement>|HTMLElement[]|HTMLElement} options.glassElements - Elements to render glass onto
 * @param {Object} [options.config] - Shader configuration overrides (or SHADER_GLASS_PRESETS entry)
 * @param {boolean} [options.fallbackToCss=true] - Whether to apply CSS glass classes if WebGL is unavailable
 * @returns {Promise<{ success: boolean, instance: any|null, mode: 'shader'|'css-fallback'|'disabled' }>}
 */
export async function initShaderGlass({
  root,
  glassElements,
  config = {},
  fallbackToCss = true
} = {}) {
  // 1. Guard against non-DOM environments
  if (typeof window === 'undefined' || !root) {
    return { success: false, instance: null, mode: 'disabled', reason: 'no-dom' };
  }

  const elements = Array.isArray(glassElements)
    ? glassElements
    : (glassElements instanceof NodeList ? Array.from(glassElements) : [glassElements].filter(Boolean));

  if (!elements.length) {
    return { success: false, instance: null, mode: 'disabled', reason: 'no-elements' };
  }

  // 2. Hardware / Browser Compatibility Guard
  const webGLAvailable = isWebGLAvailable();
  if (!webGLAvailable) {
    if (fallbackToCss) {
      elements.forEach(el => el.classList?.add('glass-control'));
    }
    return {
      success: false,
      instance: null,
      mode: 'css-fallback',
      reason: 'webgl-unavailable'
    };
  }

  // 3. Accessibility / Reduced Motion Guard
  const reducedMotion = prefersReducedMotion();
  const effectiveConfig = {
    ...config,
    // Disable drag/bounce motion under prefers-reduced-motion
    floating: reducedMotion ? false : (config.floating ?? false)
  };

  try {
    // 4. Lazy-load library bundle
    const { LiquidGlass } = await loadLiquidGlassLibrary();
    if (!LiquidGlass || typeof LiquidGlass.init !== 'function') {
      throw new Error('LiquidGlass export invalid');
    }

    // 5. Initialize WebGL Shader Instance
    const instance = await LiquidGlass.init({
      root,
      glassElements: elements,
      defaults: effectiveConfig
    });

    _activeShaderInstances.add(instance);
    elements.forEach(el => el.classList?.add('has-shader-glass'));

    // Attach instance cleanup listener
    const originalDestroy = instance.destroy?.bind(instance);
    if (originalDestroy) {
      instance.destroy = () => {
        elements.forEach(el => el.classList?.remove('has-shader-glass'));
        _activeShaderInstances.delete(instance);
        originalDestroy();
      };
    }

    return {
      success: true,
      instance,
      mode: 'shader'
    };
  } catch (err) {
    console.warn('[risePaisa] Liquid Glass WebGL shader initialization skipped:', err.message);
    if (fallbackToCss) {
      elements.forEach(el => el.classList?.add('glass-control'));
    }
    return {
      success: false,
      instance: null,
      mode: 'css-fallback',
      reason: 'initialization-error',
      error: err.message
    };
  }
}

/**
 * Destroy a WebGL shader instance and clean up resources
 * @param {any} instance
 */
export function destroyShaderGlass(instance) {
  if (instance && typeof instance.destroy === 'function') {
    try {
      instance.destroy();
    } catch {}
  }
  _activeShaderInstances.delete(instance);
}

/**
 * Destroy all active WebGL shader instances across the application
 */
export function destroyAllShaderGlass() {
  for (const instance of Array.from(_activeShaderInstances)) {
    destroyShaderGlass(instance);
  }
  _activeShaderInstances.clear();
}

/**
 * Get count of active WebGL shader instances (for monitoring WebGL context limit)
 * @returns {number}
 */
export function getActiveShaderInstanceCount() {
  return _activeShaderInstances.size;
}

export const SHADER_THEME_CONFIGS = {
  LIGHT: {
    OUTER: {
      blurAmount: 0,
      refraction: 0.69,
      chromAberration: 0.035,
      edgeHighlight: 0.03,
      specular: 0.06,
      fresnel: 0.70,
      cornerRadius: 0,
      zRadius: 40,
      brightness: 0,
      saturation: 0,
      shadowOpacity: 0.12,
      shadowSpread: 8,
      opacity: 0.32,
      floating: false,
      button: false
    },
    CAPSULE: {
      blurAmount: 0.22,
      refraction: 0.69,
      chromAberration: 0.04,
      edgeHighlight: 0.05,
      specular: 0.10,
      fresnel: 0.85,
      cornerRadius: 40,
      zRadius: 40,
      brightness: 0.14,
      saturation: 0,
      shadowOpacity: 0.04,
      shadowSpread: 8,
      opacity: 0.20,
      floating: false,
      button: false
    },
    DROPDOWN: {
      blurAmount: 0.22,
      refraction: 0.69,
      chromAberration: 0.04,
      edgeHighlight: 0.06,
      specular: 0.12,
      fresnel: 0.85,
      cornerRadius: 18,
      zRadius: 36,
      brightness: 0.12,
      saturation: 0,
      shadowOpacity: 0.18,
      shadowSpread: 14,
      shadowOffsetY: 6,
      opacity: 0.94,
      floating: false,
      button: false
    },
    SIDEBAR: {
      blurAmount: 0.24,
      refraction: 0.69,
      chromAberration: 0.04,
      edgeHighlight: 0.08,
      specular: 0.12,
      fresnel: 0.88,
      cornerRadius: 24,
      zRadius: 40,
      brightness: 0.10,
      saturation: 0,
      shadowOpacity: 0.25,
      shadowSpread: 24,
      shadowOffsetY: 0,
      opacity: 0.95,
      floating: false,
      button: false
    }
  },
  DARK: {
    OUTER: {
      blurAmount: 0.03,
      refraction: 0.69,
      chromAberration: 0.04,
      edgeHighlight: 0.05,
      specular: 0.12,
      fresnel: 0.85,
      cornerRadius: 0,
      zRadius: 40,
      brightness: -0.15,
      saturation: 0.04,
      tintStrength: 0.22,
      tintColor: [0.10, 0.10, 0.12],
      shadowOpacity: 0.35,
      shadowSpread: 10,
      opacity: 0.38,
      floating: false,
      button: false
    },
    CAPSULE: {
      blurAmount: 0.22,
      refraction: 0.69,
      chromAberration: 0.045,
      edgeHighlight: 0.06,
      specular: 0.14,
      fresnel: 0.90,
      cornerRadius: 40,
      zRadius: 40,
      brightness: -0.10,
      saturation: 0.04,
      tintStrength: 0.20,
      tintColor: [0.15, 0.15, 0.18],
      shadowOpacity: 0.40,
      shadowSpread: 10,
      opacity: 0.46,
      floating: false,
      button: false
    },
    DROPDOWN: {
      blurAmount: 0.22,
      refraction: 0.69,
      chromAberration: 0.045,
      edgeHighlight: 0.06,
      specular: 0.14,
      fresnel: 0.90,
      cornerRadius: 18,
      zRadius: 36,
      brightness: -0.10,
      saturation: 0.04,
      tintStrength: 0.20,
      tintColor: [0.15, 0.15, 0.18],
      shadowOpacity: 0.40,
      shadowSpread: 16,
      shadowOffsetY: 8,
      opacity: 0.94,
      floating: false,
      button: false
    },
    SIDEBAR: {
      blurAmount: 0.24,
      refraction: 0.69,
      chromAberration: 0.045,
      edgeHighlight: 0.08,
      specular: 0.14,
      fresnel: 0.92,
      cornerRadius: 24,
      zRadius: 40,
      brightness: -0.12,
      saturation: 0.04,
      tintStrength: 0.22,
      tintColor: [0.12, 0.14, 0.18],
      shadowOpacity: 0.50,
      shadowSpread: 32,
      shadowOffsetY: 0,
      opacity: 0.95,
      floating: false,
      button: false
    }
  }
};

let _navbarShaderInstance = null;

/**
 * Specifically initialize the authentic Liquid Glass WebGL shader on the main navigation bar.
 * Deploys two distinct optical materials:
 * 1. Outer rectangular header: Regular Liquid Glass (clear refraction, lens physics, subtle Fresnel highlights)
 * 2. Central navigation capsule: Frosted Liquid Glass (subtle diffusion, frosted depth, soft surface reflections)
 * Supports zero-overhead instant theme switching via MutationObserver-tracked data-config updates.
 *
 * @returns {Promise<any|null>}
 */
export async function initNavbarShaderGlass() {
  if (typeof window === 'undefined') return null;
  if (_navbarShaderInstance) {
    const existingNav = document.getElementById('navbar');
    if (existingNav && existingNav.isConnected && existingNav.classList.contains('has-shader-glass')) {
      return _navbarShaderInstance;
    }
    try {
      _navbarShaderInstance.destroy();
    } catch {}
    _navbarShaderInstance = null;
  }

  const navbar = document.getElementById('navbar');
  const navbarContainer = document.getElementById('navbar-container');
  if (!navbar || !navbarContainer) return null;

  if (!isWebGLAvailable()) {
    return { success: false, mode: 'css-fallback', reason: 'webgl-unavailable' };
  }

  try {
    const { LiquidGlass } = await loadLiquidGlassLibrary();
    if (!LiquidGlass || typeof LiquidGlass.init !== 'function') {
      throw new Error('LiquidGlass export invalid');
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // 1. Initialize Outer Rectangular Header & Central Navigation Capsule Concurrently
    const outerConfig = isDark ? SHADER_THEME_CONFIGS.DARK.OUTER : SHADER_THEME_CONFIGS.LIGHT.OUTER;
    const outerPromise = LiquidGlass.init({
      root: navbarContainer,
      glassElements: [navbar],
      defaults: outerConfig
    });

    let capsulePromise = null;
    const navLinks = navbar.querySelector('.nav-links');
    const navbarInner = navbar.querySelector('.navbar-inner');
    if (navLinks && navbarInner) {
      const capsuleConfig = isDark ? SHADER_THEME_CONFIGS.DARK.CAPSULE : SHADER_THEME_CONFIGS.LIGHT.CAPSULE;
      capsulePromise = LiquidGlass.init({
        root: navbarInner,
        glassElements: [navLinks],
        defaults: capsuleConfig
      });
    }

    const [outerInstance, capsuleInstance] = await Promise.all([
      outerPromise,
      capsulePromise || Promise.resolve(null)
    ]);

    _activeShaderInstances.add(outerInstance);
    navbar.dataset.config = JSON.stringify(outerConfig);
    navbar.classList.add('has-shader-glass');

    if (capsuleInstance) {
      _activeShaderInstances.add(capsuleInstance);
      if (navLinks) {
        navLinks.dataset.config = JSON.stringify(isDark ? SHADER_THEME_CONFIGS.DARK.CAPSULE : SHADER_THEME_CONFIGS.LIGHT.CAPSULE);
        navLinks.classList.add('has-shader-glass');
      }
    }

    // 3. Instantaneous Theme Synchronization via data-config mutations
    const applyThemeToShaders = (theme) => {
      const dark = theme === 'dark';
      const newOuter = dark ? SHADER_THEME_CONFIGS.DARK.OUTER : SHADER_THEME_CONFIGS.LIGHT.OUTER;
      const newCapsule = dark ? SHADER_THEME_CONFIGS.DARK.CAPSULE : SHADER_THEME_CONFIGS.LIGHT.CAPSULE;

      navbar.dataset.config = JSON.stringify(newOuter);
      if (navLinks) {
        navLinks.dataset.config = JSON.stringify(newCapsule);
      }
      outerInstance?.markChanged?.();
      capsuleInstance?.markChanged?.();
    };

    const onThemeChange = (e) => {
      const t = e.detail?.theme || document.documentElement.getAttribute('data-theme') || 'light';
      applyThemeToShaders(t);
    };
    window.addEventListener('rp-theme-changed', onThemeChange);

    const themeObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'data-theme') {
          applyThemeToShaders(document.documentElement.getAttribute('data-theme') || 'light');
        }
      }
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    _navbarShaderInstance = {
      success: true,
      mode: 'shader',
      outer: outerInstance,
      capsule: capsuleInstance,
      markChanged() {
        this.outer?.markChanged?.();
        this.capsule?.markChanged?.();
      },
      destroy() {
        window.removeEventListener('rp-theme-changed', onThemeChange);
        themeObserver.disconnect();
        if (this.outer) {
          destroyShaderGlass(this.outer);
          this.outer = null;
        }
        if (this.capsule) {
          destroyShaderGlass(this.capsule);
          this.capsule = null;
        }
        navbar.classList.remove('has-shader-glass');
        if (navLinks) navLinks.classList.remove('has-shader-glass');
        _navbarShaderInstance = null;
      }
    };

    return _navbarShaderInstance;
  } catch (err) {
    console.warn('[risePaisa:ShaderGlass] Navbar shader fallback to CSS glass:', err);
    return { success: false, mode: 'css-fallback', error: err.message };
  }
}

/**
 * Get current navbar shader instance
 */
export function getNavbarShaderInstance() {
  return _navbarShaderInstance;
}

// ────────────────────────────────────────────────────────────────────────────
// Dropdown Menu Shader Glass Coordinator
// ────────────────────────────────────────────────────────────────────────────
let _dropdownShaderInstance = null;

/**
 * Initialize authentic WebGL Liquid Glass shader on the Learn/Calculators dropdown menu
 * @param {HTMLElement} menuElement
 * @returns {Promise<any|null>}
 */
export async function initDropdownShaderGlass(menuElement) {
  if (typeof window === 'undefined' || !menuElement) return null;
  if (_dropdownShaderInstance) {
    if (menuElement.isConnected && menuElement.classList.contains('has-shader-glass')) {
      _dropdownShaderInstance.markChanged?.();
      return _dropdownShaderInstance;
    }
    try {
      _dropdownShaderInstance.destroy();
    } catch {}
    _dropdownShaderInstance = null;
  }

  if (!isWebGLAvailable()) {
    menuElement.classList.add('glass-control');
    return { success: false, mode: 'css-fallback', reason: 'webgl-unavailable' };
  }

  try {
    const { LiquidGlass } = await loadLiquidGlassLibrary();
    if (!LiquidGlass || typeof LiquidGlass.init !== 'function') {
      throw new Error('LiquidGlass export invalid');
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const config = isDark ? SHADER_THEME_CONFIGS.DARK.DROPDOWN : SHADER_THEME_CONFIGS.LIGHT.DROPDOWN;
    const root = menuElement.parentElement;
    if (!root) return null;

    const instance = await LiquidGlass.init({
      root,
      glassElements: [menuElement],
      defaults: config
    });

    _activeShaderInstances.add(instance);
    menuElement.dataset.config = JSON.stringify(config);
    menuElement.classList.add('has-shader-glass');

    const canvas = menuElement.querySelector('canvas');
    if (canvas) {
      canvas.style.borderRadius = '18px';
    }

    const applyTheme = (theme) => {
      const dark = theme === 'dark';
      const newConfig = dark ? SHADER_THEME_CONFIGS.DARK.DROPDOWN : SHADER_THEME_CONFIGS.LIGHT.DROPDOWN;
      menuElement.dataset.config = JSON.stringify(newConfig);
      instance?.markChanged?.();
    };

    const onThemeChange = (e) => {
      applyTheme(e.detail?.theme || document.documentElement.getAttribute('data-theme') || 'light');
    };
    window.addEventListener('rp-theme-changed', onThemeChange);

    const themeObserver = new MutationObserver(() => {
      applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    _dropdownShaderInstance = {
      success: true,
      mode: 'shader',
      instance,
      markChanged() {
        this.instance?.markChanged?.();
      },
      destroy() {
        window.removeEventListener('rp-theme-changed', onThemeChange);
        themeObserver.disconnect();
        if (this.instance) {
          destroyShaderGlass(this.instance);
          this.instance = null;
        }
        menuElement.classList.remove('has-shader-glass');
        _dropdownShaderInstance = null;
      }
    };

    return _dropdownShaderInstance;
  } catch (err) {
    console.warn('[risePaisa:ShaderGlass] Dropdown shader fallback to CSS glass:', err);
    menuElement.classList.add('glass-control');
    return { success: false, mode: 'css-fallback', error: err.message };
  }
}

/**
 * Destroy current dropdown shader instance
 */
export function destroyDropdownShaderGlass() {
  if (_dropdownShaderInstance) {
    try {
      _dropdownShaderInstance.destroy();
    } catch {}
    _dropdownShaderInstance = null;
  }
}

/**
 * Get current dropdown shader instance
 */
export function getDropdownShaderInstance() {
  return _dropdownShaderInstance;
}

// ────────────────────────────────────────────────────────────────────────────
// Mobile Navigation Sidebar Shader Glass Coordinator
// ────────────────────────────────────────────────────────────────────────────
let _sidebarShaderInstance = null;

/**
 * Initialize authentic WebGL Liquid Glass shader on the mobile slide-out navigation sheet
 * @param {HTMLElement} sidebarElement
 * @returns {Promise<any|null>}
 */
export async function initSidebarShaderGlass(sidebarElement) {
  if (typeof window === 'undefined' || !sidebarElement) return null;
  // The mobile slide-out navigation sheet uses hardware-accelerated CSS Liquid Glass
  // (--liquid-glass-drawer-*). Using CSS glass avoids heavy WebGL canvas overhead,
  // eliminate texture capture delay / GPU readPixels stalls, and prevents initial
  // washed-out, milky white overlays and WebKit dual-filter compositor glitches.
  sidebarElement.setAttribute('data-liquid-glass', 'sidebar');
  return { success: true, mode: 'css-liquid-glass' };
}

/**
 * Destroy current sidebar shader instance
 */
export function destroySidebarShaderGlass() {
  if (_sidebarShaderInstance) {
    try {
      _sidebarShaderInstance.destroy();
    } catch {}
    _sidebarShaderInstance = null;
  }
}

/**
 * Get current sidebar shader instance
 */
export function getSidebarShaderInstance() {
  return _sidebarShaderInstance;
}

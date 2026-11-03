// ========================================================
// risePaisa — Global Branded Video Player Component
// Powered by the official Video.js v10 Architecture:
// <video-player>, <video-skin>, and <youtube-video>
// Seamless responsive skin, honest adaptive quality,
// 0.5×–2× speed controls, 10s seeking, and fullscreen support.
// ========================================================

/**
 * Official Video.js Framework Version Reference
 */
export const VIDEOJS_VERSION = '10.2.0';

/**
 * Human-readable quality labels for video resolution selector.
 */
export const QUALITY_MAP = {
  highres: '4K',
  hd2160: '4K',
  hd1440: '1440p',
  hd1080: '1080p',
  hd720: '720p',
  large: '480p',
  medium: '360p',
  small: '240p',
  tiny: '144p',
  auto: 'Auto',
  default: 'Auto'
};

/**
 * Dimensions mapping for Video.js v10 video rendition calculations.
 */
export const CODE_TO_DIM = {
  highres: { height: 4320, width: 7680 },
  hd2160: { height: 2160, width: 3840 },
  hd1440: { height: 1440, width: 2560 },
  hd1080: { height: 1080, width: 1920 },
  hd720: { height: 720, width: 1280 },
  large: { height: 480, width: 854 },
  medium: { height: 360, width: 640 },
  small: { height: 240, width: 426 },
  tiny: { height: 144, width: 256 }
};

/**
 * Resolution hierarchy from highest to lowest available stream quality.
 */
export const RESOLUTION_PRIORITY = [
  'highres',
  'hd2160',
  'hd1440',
  'hd1080',
  'hd720',
  'large',
  'medium',
  'small',
  'tiny'
];

/**
 * Identifies the genuine highest available stream resolution from an array of quality levels.
 * @param {string[]} levels
 * @returns {string}
 */
export function getHighestAvailableQualityCode(levels) {
  if (!Array.isArray(levels) || levels.length === 0) {
    return 'hd1080';
  }
  for (const rank of RESOLUTION_PRIORITY) {
    if (levels.includes(rank)) {
      return rank;
    }
  }
  const valid = levels.filter(l => l && l !== 'auto' && l !== 'default' && l !== 'unknown');
  return valid.length > 0 ? valid[0] : 'hd1080';
}

/**
 * Sanitizes plain text for safe HTML interpolation.
 */
function sanitizeText(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Extracts the 11-character YouTube video ID from a URL or string.
 * @param {string} url
 * @returns {string}
 */
export function extractYouTubeVideoId(url) {
  if (!url || typeof url !== 'string') return '';
  const m = url.match(/(?:embed\/|v=|youtu\.be\/|\/v\/|watch\?v=)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : '';
}

/**
 * Prepares a YouTube embed URL for optimal API control and fallback display.
 * Enforces controls=0, enablejsapi=1, modestbranding=1, playsinline=1, rel=0,
 * disablekb=1, and fs=0 to eliminate duplicate native YouTube controls.
 */
export function prepareYouTubeEmbedUrl(rawEmbedUrl) {
  if (!rawEmbedUrl || typeof rawEmbedUrl !== 'string') return '';
  const videoId = extractYouTubeVideoId(rawEmbedUrl);
  if (!videoId) return rawEmbedUrl;

  try {
    const url = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
    url.searchParams.set('enablejsapi', '1');
    url.searchParams.set('controls', '0');
    url.searchParams.set('disablekb', '1');
    url.searchParams.set('fs', '0');
    url.searchParams.set('modestbranding', '1');
    url.searchParams.set('rel', '0');
    url.searchParams.set('playsinline', '1');
    url.searchParams.set('iv_load_policy', '3');
    url.searchParams.set('cc_load_policy', '3');
    url.searchParams.set('showinfo', '0');
    url.searchParams.set('autohide', '1');
    url.searchParams.set('vq', 'hd1080');
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      url.searchParams.set('origin', window.location.origin);
    }
    return url.toString();
  } catch (_) {
    return `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&cc_load_policy=3&showinfo=0&autohide=1&vq=hd1080`;
  }
}

// ── SVG Icons ─────────────────────────────────────────────
const ICONS = {
  replay10: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2a9 9 0 1 0 9 9"/><polyline points="11 6 11 2 7 2"/><text x="12" y="14" font-size="7" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">10</text></svg>`,
  forward10: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2a9 9 0 1 1-9 9"/><polyline points="13 6 13 2 17 2"/><text x="12" y="14" font-size="7" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">10</text></svg>`
};

/**
 * Ensures Video.js v10 custom elements and styles are loaded in browser runtime.
 */
let _vjsModulePromise = null;
export function ensureVideoJsV10() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (customElements.get('video-player') && customElements.get('youtube-video')) {
    return Promise.resolve();
  }
  if (_vjsModulePromise) return _vjsModulePromise;

  _vjsModulePromise = (async () => {
    // Inject official Video.js v10 stylesheet if missing
    if (!document.querySelector('link[data-vjs-cdn="video.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/node_modules/@videojs/cdn/video.css';
      link.setAttribute('data-vjs-cdn', 'video.css');
      document.head.appendChild(link);
    }

    try {
      await import('/node_modules/@videojs/cdn/video.js');
      await import('/node_modules/@videojs/cdn/media/youtube-video.js');
    } catch (e) {
      console.warn('[RisePaisa Player] Video.js v10 module dynamic load notice:', e);
    }
  })();

  return _vjsModulePromise;
}

if (typeof window !== 'undefined') {
  ensureVideoJsV10();
}

/**
 * Generates the HTML markup for the RisePaisa Video.js v10 branded video player.
 *
 * @param {Object} options
 * @param {string} options.embedUrl - YouTube embed or watch URL
 * @param {string} [options.title] - Video title
 * @param {string} [options.iframeId] - Optional ID for the media element (e.g. 'cl-video-iframe')
 * @param {string} [options.containerId] - Optional ID for the outer player container
 * @param {string} [options.extraClass] - Optional CSS classes to attach to the container
 * @returns {string} Complete HTML string
 */
export function createBrandedVideoPlayer(options = {}) {
  const {
    embedUrl = '',
    title = 'RisePaisa Video Lesson',
    iframeId = 'cl-video-iframe',
    containerId = '',
    extraClass = ''
  } = options;

  const finalSrc = prepareYouTubeEmbedUrl(embedUrl);
  const safeTitle = sanitizeText(title);
  const containerIdAttr = containerId ? `id="${sanitizeText(containerId)}"` : '';
  const ytVideoId = extractYouTubeVideoId(embedUrl);

  const isDirect = Boolean(
    options.videoSrc ||
    options.videoType === 'video' ||
    (embedUrl && /\.(mp4|webm|ogg|m4v|m3u8)(?:\?.*)?$/i.test(embedUrl))
  );
  const mediaSrc = options.videoSrc || (isDirect ? embedUrl : '');
  const youtubeSrc = embedUrl || (ytVideoId ? `https://www.youtube-nocookie.com/embed/${ytVideoId}?rel=0&modestbranding=1` : '');

  const posterMarkup = ytVideoId ? `
          <img
            slot="poster"
            class="media-poster-image rp-player-poster-img"
            src="https://i.ytimg.com/vi/${ytVideoId}/hqdefault.jpg"
            srcset="https://i.ytimg.com/vi/${ytVideoId}/maxresdefault.jpg 1280w, https://i.ytimg.com/vi/${ytVideoId}/hqdefault.jpg 480w"
            sizes="(max-width: 1280px) 100vw, 1280px"
            alt="${safeTitle}"
            loading="eager"
            decoding="async"
            onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${ytVideoId}/hqdefault.jpg';"
          />
  ` : '';

  const mediaElementMarkup = isDirect ? `
        <video
          id="${sanitizeText(iframeId)}"
          class="cl-video-iframe cd-video-iframe rp-player-iframe rp-player-native-video vjs-tech"
          src="${sanitizeText(mediaSrc)}"
          title="${safeTitle}"
          playsinline
          webkit-playsinline
          preload="metadata">
        </video>
  ` : `
        <youtube-video
          id="${sanitizeText(iframeId)}"
          class="cl-video-iframe cd-video-iframe rp-player-iframe rp-vjs-youtube vjs-tech"
          src="${sanitizeText(youtubeSrc)}"
          title="${safeTitle}"
          ${ytVideoId ? `poster="https://i.ytimg.com/vi/${ytVideoId}/hqdefault.jpg"` : ''}
          playsinline
          preload="metadata"
          referrerpolicy="strict-origin-when-cross-origin">
        </youtube-video>
  `;

  return `
    <div class="rp-video-player-frame video-js vjs-default-skin vjs-risepaisa-skin vjs-paused vjs-user-inactive cs-player-frame relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group select-none ${sanitizeText(extraClass)}" ${containerIdAttr} data-rp-player="true" data-vjs-player="true" tabindex="0" role="region" aria-label="Video Player: ${safeTitle}">
      <!-- Official Video.js v10 Custom Elements Architecture -->
      <video-player class="vjs-risepaisa-player">
        <video-skin>
          ${mediaElementMarkup}
          ${posterMarkup}
        </video-skin>
      </video-player>

      <!-- 3. Professional 10-Second Seek Shortcuts Overlay -->
      <div class="rp-player-seek-overlay" aria-hidden="true">
        <button type="button" class="rp-seek-btn rp-btn-rewind rp-btn-rewind-10" aria-label="Seek backward 10 seconds" title="Rewind 10s (j / ←)">
          ${ICONS.replay10}
        </button>
        <button type="button" class="rp-seek-btn rp-btn-forward rp-btn-forward-10" aria-label="Seek forward 10 seconds" title="Forward 10s (l / →)">
          ${ICONS.forward10}
        </button>
      </div>
    </div>
  `;
}

/**
 * EventTarget-based rendition list implementing the Video.js v10 VideoRenditionListLike interface.
 */
class VideoRenditionList extends EventTarget {
  constructor(items = []) {
    super();
    this._items = items;
    this._selectedIndex = -1;
  }
  get length() {
    return this._items.length;
  }
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(index) {
    if (this._selectedIndex !== index) {
      this._selectedIndex = index;
      this._items.forEach((item, i) => {
        item.selected = (i === index);
      });
      this.dispatchEvent(new Event('change'));
    }
  }
  [Symbol.iterator]() {
    return this._items[Symbol.iterator]();
  }
  item(i) {
    return this._items[i];
  }
  setItems(newItems) {
    this._items = newItems;
    this.dispatchEvent(new Event('change'));
  }
}

/**
 * Active player controller instances registry for clean SPA navigation & teardown.
 */
const _activeControllers = new WeakMap();

/**
 * Initializes interactive controls for a branded video player container.
 * Connects Video.js v10 player runtime, YouTube media element, seeking,
 * volume, playback rate, fullscreen, and keyboard accessibility.
 *
 * @param {HTMLElement|string} target - Container element or selector
 * @param {Object} [options]
 * @returns {Object|null} Controller instance
 */
export function initBrandedVideoPlayer(target, options = {}) {
  if (typeof window === 'undefined') return null;

  const container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) return null;

  // Teardown any existing controller on this container
  if (_activeControllers.has(container)) {
    destroyBrandedVideoPlayer(container);
  }

  ensureVideoJsV10();

  const videoPlayerEl = container.querySelector('video-player');
  const videoSkinEl = container.querySelector('video-skin');
  const mediaEl = container.querySelector('youtube-video, video');
  const rewindBtn = container.querySelector('.rp-btn-rewind, .rp-btn-rewind-10');
  const forwardBtn = container.querySelector('.rp-btn-forward, .rp-btn-forward-10');

  let isDestroyed = false;
  let hideControlsTimeout = null;
  let lastVolume = 100;
  let isMuted = false;
  let currentSelectedQuality = 'auto';
  let availableQualityCodes = ['auto'];

  const getEngine = () => {
    if (!mediaEl) return null;
    return mediaEl.engine || mediaEl.target?.engine || (typeof window !== 'undefined' && window.YT && mediaEl._ytPlayer) || null;
  };

  const syncQualityLevels = () => {
    if (!mediaEl || isDestroyed) return;
    const engine = getEngine();
    let rawLevels = [];
    if (engine && typeof engine.getAvailableQualityLevels === 'function') {
      try {
        rawLevels = engine.getAvailableQualityLevels() || [];
      } catch (_) {}
    }

    if (!Array.isArray(rawLevels) || rawLevels.length === 0) {
      return;
    }

    const validCodes = rawLevels.filter(c => c && c !== 'auto' && c !== 'default' && CODE_TO_DIM[c]);
    if (validCodes.length === 0) return;

    // Sort hierarchically: highest resolution first
    validCodes.sort((a, b) => {
      const idxA = RESOLUTION_PRIORITY.indexOf(a);
      const idxB = RESOLUTION_PRIORITY.indexOf(b);
      return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
    });

    availableQualityCodes = ['auto', ...validCodes];

    const renditions = validCodes.map(code => ({
      id: code,
      height: CODE_TO_DIM[code].height,
      width: CODE_TO_DIM[code].width,
      selected: (currentSelectedQuality === code),
      active: (currentSelectedQuality === code)
    }));

    if (!mediaEl.videoRenditions) {
      mediaEl.videoRenditions = new VideoRenditionList(renditions);
      mediaEl.dispatchEvent(new Event('loadstart'));
    } else {
      mediaEl.videoRenditions.setItems(renditions);
    }

    const selIdx = (currentSelectedQuality === 'auto' || currentSelectedQuality === 'default')
      ? -1
      : validCodes.indexOf(currentSelectedQuality);
    mediaEl.videoRenditions.selectedIndex = selIdx;

    videoSkinEl?.requestUpdate?.();
  };

  const applyQuality = (qualityCode) => {
    if (!mediaEl || isDestroyed) return currentSelectedQuality;
    const targetCode = (!qualityCode || qualityCode === -1 || qualityCode === 'auto' || qualityCode === 'default') ? 'auto' : qualityCode;
    currentSelectedQuality = targetCode;

    const engine = getEngine();
    const curTime = mediaEl.currentTime || 0;
    const wasPlaying = !mediaEl.paused;

    if (engine) {
      if (targetCode === 'auto') {
        if (typeof engine.setPlaybackQuality === 'function') {
          try { engine.setPlaybackQuality('default'); } catch (_) {}
        }
      } else {
        if (typeof engine.setPlaybackQualityRange === 'function') {
          try { engine.setPlaybackQualityRange(targetCode, targetCode); } catch (_) {}
        }
        if (typeof engine.setPlaybackQuality === 'function') {
          try { engine.setPlaybackQuality(targetCode); } catch (_) {}
        }
      }
    }

    // Direct postMessage to the underlying iframe to enforce the command directly
    const iframe = mediaEl.shadowRoot?.querySelector('iframe') || mediaEl.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      try {
        if (targetCode !== 'auto') {
          iframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'setPlaybackQualityRange',
            args: [targetCode, targetCode]
          }), '*');
        }
        iframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'setPlaybackQuality',
          args: [targetCode === 'auto' ? 'default' : targetCode]
        }), '*');
      } catch (_) {}
    }

    // If direct HTML5 video source with alternate rendition streams
    if (mediaEl.tagName === 'VIDEO' && options.qualitySources && options.qualitySources[targetCode]) {
      const nextSrc = options.qualitySources[targetCode];
      if (nextSrc && mediaEl.src !== nextSrc) {
        mediaEl.src = nextSrc;
        mediaEl.load();
      }
    }

    // Sync rendition list selection
    if (mediaEl.videoRenditions) {
      const items = [...mediaEl.videoRenditions];
      const idx = targetCode === 'auto' ? -1 : items.findIndex(r => r.id === targetCode);
      mediaEl.videoRenditions.selectedIndex = idx;
    }

    // Seamlessly restore playback time and playing state
    if (curTime > 0) {
      setTimeout(() => {
        if (!isDestroyed && mediaEl) {
          if (Math.abs((mediaEl.currentTime || 0) - curTime) > 1.5) {
            try { mediaEl.currentTime = curTime; } catch (_) {}
          }
          if (wasPlaying && mediaEl.paused) {
            try { mediaEl.play(); } catch (_) {}
          }
        }
      }, 150);
    }

    videoSkinEl?.requestUpdate?.();
    return currentSelectedQuality;
  };

  // Wire selectVideoRendition on mediaEl so Video.js v10 Quality radio group calls applyQuality
  if (mediaEl) {
    mediaEl.selectVideoRendition = (val) => {
      applyQuality(val);
    };
  }

  const getFullscreenElement = () => {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      null
    );
  };

  const isCurrentlyFullscreen = () => {
    const fsEl = getFullscreenElement();
    if (fsEl) {
      return Boolean(fsEl === container || container.contains(fsEl));
    }
    const hasNativeFs = Boolean(
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
    return !hasNativeFs && container.classList.contains('is-fullscreen');
  };

  const resetHideTimer = () => {
    container.classList.remove('rp-controls-hidden', 'vjs-user-inactive');
    container.classList.add('vjs-user-active');
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
      hideControlsTimeout = null;
    }
    const isPaused = mediaEl ? mediaEl.paused : true;
    if (isPaused) return;

    hideControlsTimeout = setTimeout(() => {
      if (!isDestroyed && mediaEl && !mediaEl.paused) {
        container.classList.add('rp-controls-hidden', 'vjs-user-inactive');
        container.classList.remove('vjs-user-active');
      }
    }, 2800);
  };

  const seekRelative = (seconds) => {
    if (!mediaEl) return;
    try {
      const cur = mediaEl.currentTime || 0;
      const dur = mediaEl.duration || 999999;
      const targetTime = Math.max(0, Math.min(dur, cur + seconds));
      mediaEl.currentTime = targetTime;
      resetHideTimer();
    } catch (_) {}
  };

  // Wire 10s Rewind / Forward buttons
  if (rewindBtn) {
    rewindBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      seekRelative(-10);
    });
  }
  if (forwardBtn) {
    forwardBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      seekRelative(10);
    });
  }

  // Media Event Listeners for State Synchronization
  const onPlay = () => {
    container.classList.remove('is-paused', 'vjs-paused');
    container.classList.add('is-playing', 'vjs-playing', 'has-started', 'vjs-has-started');
    syncQualityLevels();
    resetHideTimer();
  };

  const onPause = () => {
    container.classList.remove('is-playing', 'vjs-playing', 'rp-controls-hidden', 'vjs-user-inactive');
    container.classList.add('is-paused', 'vjs-paused', 'vjs-user-active');
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
      hideControlsTimeout = null;
    }
  };

  const onVolumeChange = () => {
    if (!mediaEl) return;
    isMuted = Boolean(mediaEl.muted);
    lastVolume = Math.round((mediaEl.volume ?? 1) * 100);
    container.classList.toggle('is-muted', isMuted || lastVolume === 0);
  };

  if (mediaEl) {
    mediaEl.addEventListener('play', onPlay);
    mediaEl.addEventListener('playing', onPlay);
    mediaEl.addEventListener('pause', onPause);
    mediaEl.addEventListener('ended', onPause);
    mediaEl.addEventListener('volumechange', onVolumeChange);
    mediaEl.addEventListener('playing', syncQualityLevels);
    mediaEl.addEventListener('loadedmetadata', syncQualityLevels);
    setTimeout(syncQualityLevels, 500);
    setTimeout(syncQualityLevels, 1500);
    setTimeout(syncQualityLevels, 3000);
  }

  // Mouse / Touch interaction handlers
  const handleMouseMove = () => resetHideTimer();
  const handleTouchStart = () => resetHideTimer();
  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('touchstart', handleTouchStart, { passive: true });

  const toggleFullscreen = (request = null) => {
    const isFs = isCurrentlyFullscreen();
    const shouldEnter = request !== null ? request : !isFs;

    if (shouldEnter) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {});
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
      container.classList.add('is-fullscreen', 'vjs-fullscreen');
      document.documentElement.classList.add('rp-fullscreen-active');
      document.body.classList.add('rp-fullscreen-active');
    } else {
      if (getFullscreenElement()) {
        try {
          if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
          else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
          else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
          else if (document.msExitFullscreen) document.msExitFullscreen();
        } catch (_) {}
      }
      container.classList.remove('is-fullscreen', 'vjs-fullscreen');
      document.documentElement.classList.remove('rp-fullscreen-active');
      document.body.classList.remove('rp-fullscreen-active');
    }
    videoSkinEl?.requestUpdate?.();
    videoPlayerEl?.requestUpdate?.();
    resetHideTimer();
  };

  const onFullscreenChange = () => {
    const fsEl = getFullscreenElement();
    const isFs = Boolean(fsEl && (fsEl === container || container.contains(fsEl)));
    container.classList.toggle('is-fullscreen', isFs);
    container.classList.toggle('vjs-fullscreen', isFs);
    document.documentElement.classList.toggle('rp-fullscreen-active', isFs);
    document.body.classList.toggle('rp-fullscreen-active', isFs);

    videoSkinEl?.requestUpdate?.();
    videoPlayerEl?.requestUpdate?.();
    try {
      window.dispatchEvent(new Event('resize'));
    } catch (_) {}
  };
  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);
  document.addEventListener('mozfullscreenchange', onFullscreenChange);
  document.addEventListener('MSFullscreenChange', onFullscreenChange);

  // Intercept media-fullscreen-button clicks within Video.js skin shadow DOM in capture phase
  // so fullscreen enters/exits on container (.rp-video-player-frame) rather than unconstrained <video-skin>
  const handleFullscreenButtonClick = (e) => {
    const path = e.composedPath ? e.composedPath() : [];
    const isFsBtn = path.some(el =>
      el && (
        el.tagName === 'MEDIA-FULLSCREEN-BUTTON' ||
        (el.classList && el.classList.contains('media-fullscreen-button'))
      )
    );
    if (isFsBtn) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      toggleFullscreen();
    }
  };
  container.addEventListener('click', handleFullscreenButtonClick, true);

  // Keyboard accessibility
  const onKeyDown = (e) => {
    if (!container.contains(document.activeElement) && document.activeElement !== container) {
      return;
    }
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

    if (e.key === ' ' || e.key === 'k') {
      e.preventDefault();
      if (mediaEl) {
        if (mediaEl.paused) mediaEl.play().catch(() => {});
        else mediaEl.pause();
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'j') {
      e.preventDefault();
      seekRelative(-10);
    } else if (e.key === 'ArrowRight' || e.key === 'l') {
      e.preventDefault();
      seekRelative(10);
    } else if (e.key === 'm') {
      e.preventDefault();
      if (mediaEl) mediaEl.muted = !mediaEl.muted;
    } else if (e.key === 'Escape') {
      if (isCurrentlyFullscreen()) {
        toggleFullscreen(false);
      }
    } else if (e.key === 'f') {
      e.preventDefault();
      toggleFullscreen();
    }
  };
  window.addEventListener('keydown', onKeyDown);

  const teardown = () => {
    isDestroyed = true;
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
      hideControlsTimeout = null;
    }
    if (isCurrentlyFullscreen()) {
      try {
        if (getFullscreenElement()) {
          if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
          else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
          else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
          else if (document.msExitFullscreen) document.msExitFullscreen();
        }
      } catch (_) {}
      container.classList.remove('is-fullscreen', 'vjs-fullscreen');
      document.documentElement.classList.remove('rp-fullscreen-active');
      document.body.classList.remove('rp-fullscreen-active');
    }
    if (mediaEl) {
      mediaEl.removeEventListener('play', onPlay);
      mediaEl.removeEventListener('playing', onPlay);
      mediaEl.removeEventListener('pause', onPause);
      mediaEl.removeEventListener('ended', onPause);
      mediaEl.removeEventListener('volumechange', onVolumeChange);
      mediaEl.removeEventListener('playing', syncQualityLevels);
      mediaEl.removeEventListener('loadedmetadata', syncQualityLevels);
      try { mediaEl.pause(); } catch (_) {}
    }
    container.removeEventListener('click', handleFullscreenButtonClick, true);
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('fullscreenchange', onFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
    document.removeEventListener('mozfullscreenchange', onFullscreenChange);
    document.removeEventListener('MSFullscreenChange', onFullscreenChange);
    window.removeEventListener('keydown', onKeyDown);
    _activeControllers.delete(container);
    try { delete container.__rpController; } catch (_) {}
  };

  // Modern Controller Instance API (fully compatible with Video.js standards)
  const controller = {
    getVideoPlayer: () => videoPlayerEl,
    getVideoSkin: () => videoSkinEl,
    getPlayer: () => mediaEl,
    play: () => {
      if (mediaEl && typeof mediaEl.play === 'function') {
        return mediaEl.play().catch(() => {});
      }
    },
    pause: () => {
      if (mediaEl && typeof mediaEl.pause === 'function') {
        mediaEl.pause();
      }
    },
    paused: () => Boolean(mediaEl ? mediaEl.paused : true),
    currentTime: (time) => {
      if (time !== undefined && mediaEl) {
        mediaEl.currentTime = Number(time);
        return Number(time);
      }
      return mediaEl ? (mediaEl.currentTime || 0) : 0;
    },
    duration: () => {
      return mediaEl ? (mediaEl.duration || 0) : 0;
    },
    volume: (vol) => {
      if (vol !== undefined && mediaEl) {
        const v = Math.max(0, Math.min(100, Number(vol)));
        mediaEl.volume = v / 100;
        if (v === 0) mediaEl.muted = true;
        else if (mediaEl.muted) mediaEl.muted = false;
        return v;
      }
      return mediaEl ? Math.round((mediaEl.volume ?? 1) * 100) : 100;
    },
    muted: (m) => {
      if (m !== undefined && mediaEl) {
        mediaEl.muted = Boolean(m);
        return Boolean(m);
      }
      return mediaEl ? Boolean(mediaEl.muted) : false;
    },
    playbackRate: (rate) => {
      if (rate !== undefined && mediaEl) {
        mediaEl.playbackRate = Number(rate);
        return Number(rate);
      }
      return mediaEl ? (mediaEl.playbackRate || 1) : 1;
    },
    setPlaybackRate: (rate) => {
      if (mediaEl) mediaEl.playbackRate = Number(rate);
    },
    getPlaybackRate: () => (mediaEl ? (mediaEl.playbackRate || 1) : 1),
    // Dynamic Video Quality API:
    // Fetches and reflects the genuine resolutions available for the specific video.
    getAvailableQualityLevels: () => {
      syncQualityLevels();
      return availableQualityCodes.length > 0 ? availableQualityCodes : ['auto'];
    },
    getPlaybackQuality: () => currentSelectedQuality,
    setPlaybackQuality: (q) => applyQuality(q),
    setPlaybackQualityRange: (q1, q2) => applyQuality(q1),
    applyQuality: (q) => applyQuality(q),
    isFullscreen: () => isCurrentlyFullscreen(),
    requestFullscreen: () => toggleFullscreen(true),
    exitFullscreen: () => toggleFullscreen(false),
    destroy: () => teardown(),
    dispose: () => teardown()
  };

  _activeControllers.set(container, controller);
  try { container.__rpController = controller; } catch (_) {}
  return controller;
}

/**
 * Tears down and cleans up any active player on the given container.
 */
export function destroyBrandedVideoPlayer(target) {
  if (typeof window === 'undefined') return;
  let container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) return;
  if (!_activeControllers.has(container) && container.closest) {
    const parentContainer = container.closest('[data-rp-player]');
    if (parentContainer && _activeControllers.has(parentContainer)) {
      container = parentContainer;
    }
  }

  const controller = _activeControllers.get(container);
  if (controller && typeof controller.destroy === 'function') {
    controller.destroy();
  }
}

/**
 * Video.js v10 Compatibility Aliases
 */
export const createVideojsPlayer = createBrandedVideoPlayer;
export const initVideojsPlayer = initBrandedVideoPlayer;
export const destroyVideojsPlayer = destroyBrandedVideoPlayer;

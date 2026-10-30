// ========================================================
// risePaisa — Global Branded Video Player Component
// Clean, minimal, cinema-dark player interface with official
// YouTube IFrame API integration, subtle RisePaisa branding badge,
// responsive controls, keyboard shortcuts & fallback resilience.
// ========================================================

/**
 * Global singleton promise for loading the official YouTube IFrame API.
 */
let _ytApiPromise = null;
function loadYouTubeIframeApi() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (_ytApiPromise) return _ytApiPromise;

  _ytApiPromise = new Promise((resolve) => {
    // If tag already in DOM
    const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
    if (!existingScript) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    const previousOnReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousOnReady === 'function') {
        try { previousOnReady(); } catch (_) {}
      }
      resolve(window.YT);
    };

    // Fallback timeout in case YouTube API is blocked by firewall/adblocker
    setTimeout(() => {
      if (window.YT && window.YT.Player) {
        resolve(window.YT);
      } else {
        resolve(null);
      }
    }, 8000);
  });

  return _ytApiPromise;
}

/**
 * Format seconds into mm:ss or hh:mm:ss
 */
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const totalSec = Math.floor(seconds);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = (n) => String(n).padStart(2, '0');
  if (h > 0) {
    return `${h}:${pad(m)}:${pad(s)}`;
  }
  return `${pad(m)}:${pad(s)}`;
}

// ── SVG Icons ─────────────────────────────────────────────
const ICONS = {
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`,
  replay10: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2a9 9 0 1 0 9 9"/><polyline points="11 6 11 2 7 2"/><text x="12" y="14" font-size="7" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">10</text></svg>`,
  forward10: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2a9 9 0 1 1-9 9"/><polyline points="13 6 13 2 17 2"/><text x="12" y="14" font-size="7" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">10</text></svg>`,
  volHigh: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
  volLow: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>`,
  volMute: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`,
  fsEnter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`,
  fsExit: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><polyline points="9 18 15 12 9 6"></polyline></svg>`
};

/**
 * Human-readable quality labels for video resolution selector.
 */
export const QUALITY_MAP = {
  hd2160: '4K · 2160p',
  hd1440: 'QHD · 1440p',
  hd1080: 'FHD · 1080p',
  hd720: 'HD · 720p',
  large: '480p',
  medium: '360p',
  small: '240p',
  tiny: '144p',
  auto: 'Auto',
  default: 'Auto',
  highres: 'Original'
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
  const m = url.match(/(?:embed\/|v=|youtu\.be\/|\/v\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : '';
}

/**
 * Prepares a YouTube embed URL for optimal API control and fallback display.
 * Enforces controls=0, enablejsapi=1, modestbranding=1, playsinline=1, rel=0,
 * disablekb=1, and fs=0 to eliminate duplicate native YouTube controls.
 */
export function prepareYouTubeEmbedUrl(rawEmbedUrl) {
  if (!rawEmbedUrl || typeof rawEmbedUrl !== 'string') return '';
  try {
    const url = new URL(rawEmbedUrl, 'https://www.youtube-nocookie.com');
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
    // Default to crisp 1080p/720p HD stream without getting stuck at 360p
    url.searchParams.set('vq', 'hd1080');
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      url.searchParams.set('origin', window.location.origin);
    }
    return url.toString();
  } catch (_) {
    // If URL parsing fails, cleanly append query params
    const sep = rawEmbedUrl.includes('?') ? '&' : '?';
    return `${rawEmbedUrl}${sep}enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&cc_load_policy=3&showinfo=0&autohide=1&vq=hd1080`;
  }
}

/**
 * Generates the HTML markup for the RisePaisa branded video player.
 *
 * @param {Object} options
 * @param {string} options.embedUrl - YouTube embed URL
 * @param {string} [options.title] - Video title
 * @param {string} [options.iframeId] - Optional ID for the iframe element (e.g. 'cl-video-iframe')
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
    extraClass = '',
    supportedQualities = []
  } = options;

  const safeTitle = sanitizeText(title);
  const finalSrc = prepareYouTubeEmbedUrl(embedUrl);
  const containerIdAttr = containerId ? `id="${sanitizeText(containerId)}"` : '';
  const uniqueUid = sanitizeText(((containerId || iframeId || 'rp_player') + '_' + (embedUrl ? extractYouTubeVideoId(embedUrl) : 'vid')).replace(/[^a-zA-Z0-9_-]/g, '_'));

  // Extract YouTube 11-char ID for high-res clean poster image
  const ytVideoId = (function (url) {
    if (!url) return '';
    const m = String(url).match(/(?:embed\/|v=|youtu\.be\/|\/v\/)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : '';
  })(embedUrl);

  const posterMarkup = ytVideoId ? `
        <!-- Clean Poster Cover for Unstarted State (Prevents YouTube red button & watermarks from showing) -->
        <div class="rp-player-poster" aria-hidden="true">
          <img
            class="rp-poster-img"
            src="https://i.ytimg.com/vi/${ytVideoId}/hqdefault.jpg"
            srcset="https://i.ytimg.com/vi/${ytVideoId}/maxresdefault.jpg 1280w, https://i.ytimg.com/vi/${ytVideoId}/hqdefault.jpg 480w"
            sizes="(max-width: 1280px) 100vw, 1280px"
            alt="${safeTitle}"
            loading="eager"
            onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${ytVideoId}/hqdefault.jpg';"
          />
        </div>
  ` : '';

  const isDirect = Boolean(
    options.videoSrc ||
    options.videoType === 'video' ||
    (embedUrl && /\.(mp4|webm|ogg|m4v|m3u8)(?:\?.*)?$/i.test(embedUrl))
  );
  const mediaSrc = options.videoSrc || (isDirect ? embedUrl : '');
  const mediaElementMarkup = isDirect ? `
        <video
          id="${sanitizeText(iframeId)}"
          class="cl-video-iframe cd-video-iframe rp-player-iframe rp-player-native-video"
          src="${sanitizeText(mediaSrc)}"
          title="${safeTitle}"
          playsinline
          webkit-playsinline
          preload="metadata">
        </video>
  ` : `
        <iframe
          id="${sanitizeText(iframeId)}"
          class="cl-video-iframe cd-video-iframe rp-player-iframe csPlayer-iframe"
          src="${finalSrc}"
          title="${safeTitle}"
          width="100%"
          height="100%"
          frameborder="0"
          tabindex="-1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          loading="eager">
        </iframe>
  `;

  return `
    <div class="rp-video-player-frame cs-player-frame relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group select-none ${sanitizeText(extraClass)}" ${containerIdAttr} data-rp-player="true" tabindex="0" role="region" aria-label="Video Player: ${safeTitle}">
      <!-- 1. RisePaisa Player Top Chrome (Conceals YouTube channel name, title, and copy-link button) -->
      <div class="rp-player-header" aria-hidden="true">
        <div class="rp-player-header-left">
          <span class="rp-player-course-label">RisePaisa Course</span>
          <span class="rp-player-header-title">${safeTitle}</span>
        </div>
        <div class="rp-player-badge">
          <span class="rp-player-badge-dot"></span>
          <span class="rp-player-badge-text">RisePaisa Secure Video Player</span>
        </div>
      </div>

      <!-- 2. Video Stage & Underlying Media Element -->
      <div class="rp-player-stage csPlayer-container">
        ${mediaElementMarkup}
        <!-- Seamless Click Surface for Single Unified Interaction -->
        <div class="rp-player-click-surface" aria-hidden="true"></div>
        ${posterMarkup}
      </div>

      <!-- Buffering Loading Indicator -->
      <div class="rp-player-buffering-indicator" aria-hidden="true">
        <div class="rp-player-spinner-ring"></div>
      </div>

      <!-- 3. Center Controls Overlay (Rewind 10, Big Center Play/Pause, Forward 10) -->
      <main class="rp-player-center-controls csPlayer-controls-center" aria-label="Center playback controls">
        <button type="button" class="rp-center-btn rp-center-rewind" aria-label="Seek backward 10 seconds" title="Rewind 10s (j / ←)">
          <span class="rp-center-icon">${ICONS.replay10}</span>
        </button>

        <button type="button" class="rp-player-center-play csPlayer-play-pause-btn" aria-label="Play ${safeTitle}">
          <span class="rp-center-play-icon">${ICONS.play}</span>
          <span class="rp-center-pause-icon">${ICONS.pause}</span>
        </button>

        <button type="button" class="rp-center-btn rp-center-forward" aria-label="Seek forward 10 seconds" title="Forward 10s (l / →)">
          <span class="rp-center-icon">${ICONS.forward10}</span>
        </button>
      </main>

      <!-- 4. Cinema-Dark Bottom Controls Bar -->
      <div class="rp-player-controls csPlayer-controls-box" role="toolbar" aria-label="Video Controls">
        <!-- Scrubbable Timeline Progress Bar -->
        <div class="rp-player-timeline-wrap csPlayer-prog-wrap" role="slider" aria-label="Video Timeline" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" tabindex="0">
          <div class="rp-player-timeline-track">
            <span class="rp-player-timeline-buffer csPlayer-buf-bar"></span>
            <div class="rp-player-timeline-progress"></div>
          </div>
          <div class="rp-player-timeline-thumb"></div>
          <div class="rp-player-timeline-tooltip">00:00</div>
        </div>

        <!-- Controls Row -->
        <div class="rp-player-controls-row csPlayer-controls">
          <!-- Left Controls: Play, Replay 10, Forward 10, Volume, Time -->
          <div class="rp-player-controls-left">
            <button type="button" class="rp-ctrl-btn rp-btn-play bottom-play-btn" aria-label="Play" title="Play (k / Space)">
              <span class="rp-icon-play">${ICONS.play}</span>
              <span class="rp-icon-pause">${ICONS.pause}</span>
            </button>

            <button type="button" class="rp-ctrl-btn rp-btn-rewind" aria-label="Seek backward 10 seconds" title="Rewind 10s (j / ←)">
              ${ICONS.replay10}
            </button>

            <button type="button" class="rp-ctrl-btn rp-btn-forward" aria-label="Seek forward 10 seconds" title="Forward 10s (l / →)">
              ${ICONS.forward10}
            </button>

            <!-- Volume Controls -->
            <div class="rp-player-volume-group csPlayer-vol-wrap">
              <button type="button" class="rp-ctrl-btn rp-btn-volume bottom-volume-btn" aria-label="Mute" title="Mute (m)">
                <span class="rp-icon-vol-high">${ICONS.volHigh}</span>
                <span class="rp-icon-vol-low">${ICONS.volLow}</span>
                <span class="rp-icon-vol-muted">${ICONS.volMute}</span>
              </button>
              <div class="rp-volume-slider-wrap csPlayer-vol-slider-wrap">
                <input type="range" class="rp-volume-slider csPlayer-vol-slider" min="0" max="100" value="100" aria-label="Volume slider" />
              </div>
            </div>

            <!-- Time Display -->
            <div class="rp-player-time">
              <span class="rp-time-current csPlayer-time-cur">00:00</span>
              <span class="rp-time-divider">/</span>
              <span class="rp-time-duration csPlayer-time-dur">00:00</span>
            </div>
          </div>

          <!-- Right Controls: Settings (Speed & Quality), Fullscreen -->
          <div class="rp-player-controls-right">
            <!-- Settings Group & Menu (Speed & Quality) -->
            <div class="rp-player-settings-group rp-player-speed-group">
              <button type="button" class="rp-ctrl-btn rp-btn-settings rp-btn-speed settingsBtn" aria-label="Settings" title="Settings" aria-haspopup="true" aria-expanded="false">
                <span class="rp-icon-settings">${ICONS.settings}</span>
              </button>

              <div class="rp-settings-box rp-speed-menu csPlayer-settings-box" role="menu" hidden>
                <div class="rp-settings-header csPlayer-settings-label">
                  <span class="rp-settings-title">Playback Speed</span>
                  <b class="rp-speed-val rp-speed-label">1×</b>
                </div>
                <div class="rp-settings-items rp-speed-items csPlayer-settings-items">
                  <label class="rp-speed-opt" data-speed="0.5"><input type="radio" name="rp_spd_${uniqueUid}" value="0.5">0.5×</label>
                  <label class="rp-speed-opt" data-speed="0.75"><input type="radio" name="rp_spd_${uniqueUid}" value="0.75">0.75×</label>
                  <label class="rp-speed-opt active" data-speed="1"><input type="radio" name="rp_spd_${uniqueUid}" value="1" checked>1×</label>
                  <label class="rp-speed-opt" data-speed="1.25"><input type="radio" name="rp_spd_${uniqueUid}" value="1.25">1.25×</label>
                  <label class="rp-speed-opt" data-speed="1.5"><input type="radio" name="rp_spd_${uniqueUid}" value="1.5">1.5×</label>
                  <label class="rp-speed-opt" data-speed="1.75"><input type="radio" name="rp_spd_${uniqueUid}" value="1.75">1.75×</label>
                  <label class="rp-speed-opt" data-speed="2"><input type="radio" name="rp_spd_${uniqueUid}" value="2">2×</label>
                </div>
              </div>
            </div>

            <!-- Fullscreen -->
            <button type="button" class="rp-ctrl-btn rp-btn-fullscreen fsBtn" aria-label="Fullscreen" title="Fullscreen (f)">
              <span class="rp-icon-fs-enter">${ICONS.fsEnter}</span>
              <span class="rp-icon-fs-exit">${ICONS.fsExit}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Active player controller instances registry for clean SPA navigation & teardown.
 */
const _activeControllers = new WeakMap();

/**
 * Initializes interactive controls for a branded video player container.
 * Connects official YouTube IFrame API, progress tracking, scrubbing,
 * volume, speed, fullscreen, and keyboard accessibility.
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

  const nativeVideo = container.querySelector('video.rp-player-native-video, video');
  const iframe = !nativeVideo ? container.querySelector('iframe.rp-player-iframe, iframe.cl-video-iframe, iframe') : null;
  if (!iframe && !nativeVideo) return null;

  // DOM Elements
  const clickSurface = container.querySelector('.rp-player-click-surface');
  const poster = container.querySelector('.rp-player-poster');
  const centerPlayBtn = container.querySelector('.rp-player-center-play');
  const centerRewindBtn = container.querySelector('.rp-center-rewind');
  const centerForwardBtn = container.querySelector('.rp-center-forward');
  const playBtn = container.querySelector('.rp-btn-play');
  const rewindBtn = container.querySelector('.rp-btn-rewind');
  const forwardBtn = container.querySelector('.rp-btn-forward');
  const volumeBtn = container.querySelector('.rp-btn-volume');
  const volumeSlider = container.querySelector('.rp-volume-slider');
  const timeCurrent = container.querySelector('.rp-time-current');
  const timeDuration = container.querySelector('.rp-time-duration');
  const timelineWrap = container.querySelector('.rp-player-timeline-wrap');
  const timelineProgress = container.querySelector('.rp-player-timeline-progress');
  const timelineBuffer = container.querySelector('.rp-player-timeline-buffer');
  const timelineThumb = container.querySelector('.rp-player-timeline-thumb');
  const timelineTooltip = container.querySelector('.rp-player-timeline-tooltip');
  const settingsBtn = container.querySelector('.rp-btn-settings, .rp-btn-speed');
  const speedBtn = settingsBtn;
  const speedLabel = container.querySelector('.rp-speed-val, .rp-speed-label');
  const qualityLabel = container.querySelector('.rp-quality-val');
  const settingsBox = container.querySelector('.rp-settings-box, .rp-speed-menu');
  const speedMenu = settingsBox;
  const speedOpts = container.querySelectorAll('.rp-speed-opt');
  const speedItems = container.querySelector('.rp-speed-items');
  const qualityItems = container.querySelector('.rp-quality-items');
  const fsBtn = container.querySelector('.rp-btn-fullscreen');
  const playerUid = (container.id || (iframe && iframe.id) || (nativeVideo && nativeVideo.id) || 'rp_player').replace(/[^a-zA-Z0-9_-]/g, '_');

  let ytPlayer = null;
  let isPlaying = false;
  let isApiReady = Boolean(nativeVideo);
  let duration = 0;
  let lastVolume = 100;
  let isMuted = false;
  let currentSpeed = 1;
  let currentQuality = 'auto';
  let activeVideoId = iframe ? (extractYouTubeVideoId(iframe.src) || (options && options.videoId) || '') : '';
  let hideControlsTimeout = null;
  let progressInterval = null;
  let isDraggingTimeline = false;
  let isDraggingVolume = false;
  let isDestroyed = false;
  let isQualitySwitching = false;
  let qualitySwitchTimeout = null;
  let handleOutsideSpeedMenuClick = null;
  let handleWindowKeydown = null;
  let startFallbackTimer = null;
  let lastFullscreenChangeTime = 0;
  let lastQualityEnforceTime = 0;
  let progressTickCount = 0;

  const toYouTubeQualityCode = (val) => {
    if (!val || val === 'auto' || val === 'default') return 'default';
    const str = String(val).toLowerCase().trim();
    if (str === 'highres' || str === 'original') return 'highres';
    if (str === '2160p' || str === '4k' || str === 'hd2160') return 'hd2160';
    if (str === '1440p' || str === 'qhd' || str === 'hd1440') return 'hd1440';
    if (str === '1080p' || str === 'fhd' || str === 'hd1080') return 'hd1080';
    if (str === '720p' || str === 'hd' || str === 'hd720') return 'hd720';
    if (str === '480p' || str === 'large') return 'large';
    if (str === '360p' || str === 'medium') return 'medium';
    if (str === '240p' || str === 'small') return 'small';
    if (str === '144p' || str === 'tiny') return 'tiny';
    return val;
  };

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
    return Boolean(
      getFullscreenElement() === container ||
      container.classList.contains('is-fullscreen')
    );
  };

  // Auto-hide controls management (only during active playback)
  const resetHideTimer = () => {
    container.classList.remove('rp-controls-hidden');
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
      hideControlsTimeout = null;
    }
    if (!isPlaying) return; // Never hide controls when paused
    if (!container.classList.contains('rp-settings-open') && !container.classList.contains('rp-speed-menu-open')) {
      hideControlsTimeout = setTimeout(() => {
        if (
          isPlaying &&
          !isDraggingTimeline &&
          !isDraggingVolume &&
          !container.classList.contains('rp-settings-open') &&
          !container.classList.contains('rp-speed-menu-open') &&
          !container.classList.contains('is-starting') &&
          !container.classList.contains('is-buffering')
        ) {
          container.classList.add('rp-controls-hidden');
        }
      }, 2500);
    }
  };

  let startingPosterTimer = null;

  const markPlaybackStarted = (immediate = false) => {
    if (startFallbackTimer) {
      clearTimeout(startFallbackTimer);
      startFallbackTimer = null;
    }
    if (immediate || container.classList.contains('has-started')) {
      if (startingPosterTimer) {
        clearTimeout(startingPosterTimer);
        startingPosterTimer = null;
      }
      container.classList.add('has-started');
      container.classList.remove('is-starting');
      container.classList.remove('is-buffering');
    } else {
      if (!startingPosterTimer) {
        startingPosterTimer = setTimeout(() => {
          startingPosterTimer = null;
          if (!isDestroyed) {
            container.classList.add('has-started');
            container.classList.remove('is-starting');
            container.classList.remove('is-buffering');
          }
        }, 1200);
      }
    }
  };

  const setPlayingState = (playing) => {
    isPlaying = playing;
    container.classList.toggle('is-playing', playing);
    container.classList.toggle('is-paused', !playing);
    if (playing) {
      startProgressTracking();
      resetHideTimer();
    } else {
      stopProgressTracking();
      container.classList.remove('rp-controls-hidden');
      if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
    }
  };

  const updateProgressUi = (currentTime, totalDuration) => {
    if (isDraggingTimeline) return;
    if (timeCurrent) timeCurrent.textContent = formatTime(currentTime);
    if (timeDuration && totalDuration > 0) timeDuration.textContent = formatTime(totalDuration);

    if (totalDuration > 0 && timelineProgress) {
      const pct = Math.min(100, Math.max(0, (currentTime / totalDuration) * 100));
      timelineProgress.style.width = `${pct}%`;
      if (timelineThumb) timelineThumb.style.left = `${pct}%`;
      if (timelineWrap) timelineWrap.setAttribute('aria-valuenow', Math.round(pct));
    }
  };

  const startProgressTracking = () => {
    if (progressInterval) clearInterval(progressInterval);
    progressInterval = setInterval(() => {
      progressTickCount++;
      if (!ytPlayer || typeof ytPlayer.getCurrentTime !== 'function') return;
      try {
        const cur = ytPlayer.getCurrentTime() || 0;
        const dur = ytPlayer.getDuration() || duration;
        if (dur > 0 && dur !== duration) {
          duration = dur;
          if (timeDuration) timeDuration.textContent = formatTime(dur);
        }
        if (typeof ytPlayer.getVideoLoadedFraction === 'function' && timelineBuffer) {
          const frac = ytPlayer.getVideoLoadedFraction() || 0;
          timelineBuffer.style.width = `${frac * 100}%`;
        }
        if (!container.classList.contains('has-started') && (cur > 1.2 || isQualitySwitching)) {
          markPlaybackStarted(true);
        }
        updateProgressUi(cur, dur);

        // Periodically verify and maintain highest available stream quality during active playback
        if (progressTickCount % 8 === 0 && isPlaying) {
          try {
            if (typeof ytPlayer.getAvailableQualityLevels === 'function' && typeof ytPlayer.getPlaybackQuality === 'function') {
              const levels = ytPlayer.getAvailableQualityLevels() || [];
              if (levels.length > 0) {
                const highest = getHighestAvailableQualityCode(levels);
                const curQ = ytPlayer.getPlaybackQuality();
                if (highest && curQ && curQ !== highest) {
                  const qRank = RESOLUTION_PRIORITY.indexOf(curQ);
                  const highestRank = RESOLUTION_PRIORITY.indexOf(highest);
                  if ((qRank > highestRank || curQ === 'auto' || curQ === 'default') && Date.now() - lastQualityEnforceTime > 2500) {
                    lastQualityEnforceTime = Date.now();
                    applyQuality();
                  }
                }
              }
            }
          } catch (_) {}
        }
      } catch (_) {}
    }, 250);
  };

  const stopProgressTracking = () => {
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
  };

  const togglePlay = () => {
    if (nativeVideo) {
      if (isPlaying) {
        nativeVideo.pause();
      } else {
        nativeVideo.play().catch(() => {});
      }
      return;
    }
    if (!ytPlayer || !isApiReady) {
      // Fallback: If YouTube API hasn't resolved yet, trigger iframe focus
      if (iframe) iframe.focus();
      return;
    }
    try {
      if (isPlaying) {
        setPlayingState(false);
        ytPlayer.pauseVideo();
      } else {
        container.classList.add('is-starting');
        container.classList.add('is-buffering');
        ytPlayer.playVideo();
        if (!container.classList.contains('has-started')) {
          if (startFallbackTimer) clearTimeout(startFallbackTimer);
          startFallbackTimer = setTimeout(() => {
            if (!isDestroyed) {
              markPlaybackStarted(true);
            }
          }, 3500);
        }
      }
    } catch (e) {
      console.warn('[RisePaisa Player] Play toggle error:', e);
    }
  };

  const seekRelative = (delta) => {
    if (nativeVideo) {
      const cur = nativeVideo.currentTime || 0;
      const targetTime = Math.max(0, Math.min(nativeVideo.duration || duration || 99999, cur + delta));
      nativeVideo.currentTime = targetTime;
      updateProgressUi(targetTime, nativeVideo.duration || duration);
      resetHideTimer();
      return;
    }
    if (!ytPlayer || !isApiReady) return;
    try {
      const cur = ytPlayer.getCurrentTime() || 0;
      const targetTime = Math.max(0, Math.min(duration || 99999, cur + delta));
      ytPlayer.seekTo(targetTime, true);
      updateProgressUi(targetTime, duration);
      resetHideTimer();
    } catch (_) {}
  };

  const setVolumeLevel = (vol) => {
    const parsed = Math.max(0, Math.min(100, Number(vol)));
    if (nativeVideo) {
      nativeVideo.volume = parsed / 100;
      nativeVideo.muted = (parsed === 0);
      isMuted = (parsed === 0);
      if (parsed > 0) lastVolume = parsed;
      updateVolumeUi(parsed, isMuted);
      return;
    }
    if (!ytPlayer || !isApiReady) return;
    try {
      ytPlayer.setVolume(parsed);
      if (parsed === 0) {
        ytPlayer.mute();
        isMuted = true;
      } else {
        ytPlayer.unMute();
        isMuted = false;
        lastVolume = parsed;
      }
      updateVolumeUi(parsed, isMuted);
    } catch (_) {}
  };

  const toggleMute = () => {
    if (nativeVideo) {
      if (isMuted || nativeVideo.muted) {
        nativeVideo.muted = false;
        nativeVideo.volume = (lastVolume || 50) / 100;
        isMuted = false;
        updateVolumeUi(lastVolume || 50, false);
      } else {
        lastVolume = Math.round(nativeVideo.volume * 100) || lastVolume || 50;
        nativeVideo.muted = true;
        isMuted = true;
        updateVolumeUi(0, true);
      }
      return;
    }
    if (!ytPlayer || !isApiReady) return;
    try {
      if (isMuted) {
        ytPlayer.unMute();
        ytPlayer.setVolume(lastVolume || 50);
        isMuted = false;
        updateVolumeUi(lastVolume || 50, false);
      } else {
        lastVolume = ytPlayer.getVolume() || lastVolume || 50;
        ytPlayer.mute();
        isMuted = true;
        updateVolumeUi(0, true);
      }
    } catch (_) {}
  };

  const updateVolumeUi = (vol, muted) => {
    container.classList.toggle('is-muted', muted || vol === 0);
    container.classList.toggle('is-vol-low', !muted && vol > 0 && vol <= 50);
    container.classList.toggle('is-vol-high', !muted && vol > 50);
    if (volumeSlider) {
      volumeSlider.value = muted ? 0 : vol;
    }
  };

  const toggleFullscreen = () => {
    const fsEl = getFullscreenElement();
    lastFullscreenChangeTime = Date.now();
    const isCurrentlyFs = Boolean(fsEl === container || container.classList.contains('is-fullscreen'));

    if (!isCurrentlyFs) {
      let requestPromise = null;
      if (container.requestFullscreen) {
        requestPromise = container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        requestPromise = container.webkitRequestFullscreen();
      } else if (container.mozRequestFullScreen) {
        requestPromise = container.mozRequestFullScreen();
      } else if (container.msRequestFullscreen) {
        requestPromise = container.msRequestFullscreen();
      } else if (nativeVideo && nativeVideo.webkitEnterFullscreen) {
        nativeVideo.webkitEnterFullscreen();
      }

      if (requestPromise && typeof requestPromise.then === 'function') {
        requestPromise
          .then(() => {
            container.classList.add('is-fullscreen');
            document.documentElement.classList.add('rp-fullscreen-active');
            document.body.classList.add('rp-fullscreen-active');
            container.classList.remove('rp-controls-hidden');
            resetHideTimer();
          })
          .catch(() => {
            container.classList.add('is-fullscreen');
            document.documentElement.classList.add('rp-fullscreen-active');
            document.body.classList.add('rp-fullscreen-active');
            container.classList.remove('rp-controls-hidden');
            resetHideTimer();
          });
      } else {
        container.classList.add('is-fullscreen');
        document.documentElement.classList.add('rp-fullscreen-active');
        document.body.classList.add('rp-fullscreen-active');
        container.classList.remove('rp-controls-hidden');
        resetHideTimer();
      }

      try {
        if (screen.orientation && typeof screen.orientation.lock === 'function') {
          screen.orientation.lock('landscape').catch(() => {});
        }
      } catch (_) {}
    } else {
      if (getFullscreenElement()) {
        try {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } catch (_) {}
      }
      container.classList.remove('is-fullscreen');
      document.documentElement.classList.remove('rp-fullscreen-active');
      document.body.classList.remove('rp-fullscreen-active');

      try {
        if (screen.orientation && typeof screen.orientation.unlock === 'function') {
          screen.orientation.unlock();
        }
      } catch (_) {}

      container.classList.remove('rp-controls-hidden');
      resetHideTimer();
    }
  };

  // Wire User Interactions
  let lastControlsRevealedByTouchTime = 0;

  const handleContainerTouchOrPointerDown = (e) => {
    if (e.type === 'pointerdown' && e.pointerType !== 'touch') {
      return;
    }
    // If touch begins on interactive controls, let controls handle their own events
    if (e.target.closest('button, input, label, a, .rp-player-timeline-wrap, .rp-settings-box, .rp-speed-menu, .rp-player-controls')) {
      resetHideTimer();
      return;
    }
    // If controls were hidden at the moment touch started, remember it so synthesized click doesn't pause playback
    if (container.classList.contains('rp-controls-hidden')) {
      lastControlsRevealedByTouchTime = Date.now();
      container.classList.remove('rp-controls-hidden');
    }
    resetHideTimer();
  };

  if (poster) {
    poster.addEventListener('click', () => {
      try { container.focus(); } catch (_) {}
      togglePlay();
      resetHideTimer();
    });
  }
  if (clickSurface) {
    clickSurface.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      try { container.focus(); } catch (_) {}

      // Requirement 3: If controls were hidden when user tapped, temporarily reveal controls without pausing playback
      const wasHiddenOnTap = (Date.now() - lastControlsRevealedByTouchTime < 700) || container.classList.contains('rp-controls-hidden');
      if (wasHiddenOnTap) {
        lastControlsRevealedByTouchTime = 0;
        container.classList.remove('rp-controls-hidden');
        resetHideTimer();
        return;
      }

      // If controls were already visible: tapping video toggles play/pause
      togglePlay();
      resetHideTimer();
    });
    clickSurface.addEventListener('dblclick', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFullscreen();
    });
  }

  // Tapping the letterbox area outside clickSurface in fullscreen mode
  container.addEventListener('click', (e) => {
    if (e.target.closest('.rp-player-controls, .rp-settings-box, .rp-speed-menu, .rp-player-header, button, input')) {
      return;
    }
    if (clickSurface && (e.target === clickSurface || clickSurface.contains(e.target))) {
      return;
    }
    const wasHiddenOnTap = (Date.now() - lastControlsRevealedByTouchTime < 700) || container.classList.contains('rp-controls-hidden');
    if (wasHiddenOnTap) {
      lastControlsRevealedByTouchTime = 0;
      container.classList.remove('rp-controls-hidden');
      resetHideTimer();
      return;
    }
    togglePlay();
    resetHideTimer();
  });

  const controlsEl = container.querySelector('.rp-player-controls');
  if (controlsEl) {
    controlsEl.addEventListener('click', (e) => {
      // Intercept clicks on the controls background (including corner areas) so they never reach YouTube
      if (!e.target.closest('button, input, label, a, .rp-player-timeline-wrap')) {
        e.preventDefault();
        e.stopPropagation();
        togglePlay();
      }
      resetHideTimer();
    });
    controlsEl.addEventListener('pointerdown', resetHideTimer);
    controlsEl.addEventListener('touchstart', resetHideTimer, { passive: true });
  }
  if (centerPlayBtn) {
    centerPlayBtn.addEventListener('click', () => {
      try { container.focus(); } catch (_) {}
      togglePlay();
      resetHideTimer();
    });
  }
  if (centerRewindBtn) {
    centerRewindBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      seekRelative(-10);
      resetHideTimer();
    });
  }
  if (centerForwardBtn) {
    centerForwardBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      seekRelative(10);
      resetHideTimer();
    });
  }
  if (playBtn) playBtn.addEventListener('click', () => {
    try { container.focus(); } catch (_) {}
    togglePlay();
    resetHideTimer();
  });
  if (rewindBtn) rewindBtn.addEventListener('click', () => {
    try { container.focus(); } catch (_) {}
    seekRelative(-10);
    resetHideTimer();
  });
  if (forwardBtn) forwardBtn.addEventListener('click', () => {
    try { container.focus(); } catch (_) {}
    seekRelative(10);
    resetHideTimer();
  });
  if (volumeBtn) volumeBtn.addEventListener('click', () => {
    try { container.focus(); } catch (_) {}
    toggleMute();
    resetHideTimer();
  });

  if (volumeSlider) {
    volumeSlider.addEventListener('mousedown', () => {
      isDraggingVolume = true;
      resetHideTimer();
    });
    volumeSlider.addEventListener('touchstart', () => {
      isDraggingVolume = true;
      resetHideTimer();
    }, { passive: true });
    volumeSlider.addEventListener('input', (e) => {
      setVolumeLevel(e.target.value);
      resetHideTimer();
    });
    volumeSlider.addEventListener('change', () => {
      resetHideTimer();
    });
  }

  // Helper to show embed restrictions overlay gracefully
  const showEmbedErrorOverlay = (containerEl, videoId) => {
    if (!containerEl) return;
    const existing = containerEl.querySelector('.rp-player-error-overlay');
    if (existing) return;
    const overlay = document.createElement('div');
    overlay.className = 'rp-player-error-overlay';
    overlay.innerHTML = `
      <div class="rp-player-error-title">Video Playback Notice</div>
      <p class="rp-player-error-desc">
        This video cannot be played directly within the custom embedded player due to video provider restrictions.
      </p>
      ${videoId ? `
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer" class="rp-player-error-btn">
          Watch on YouTube
        </a>
      ` : ''}
    `;
    containerEl.appendChild(overlay);
  };

  // Settings Accordion Helper: collapse all open section item panels
  const collapseAllSections = () => {
    container.querySelectorAll('.rp-settings-items').forEach(items => {
      items.style.maxHeight = '0px';
    });
    container.querySelectorAll('.rp-settings-section').forEach(sec => {
      sec.classList.remove('is-expanded');
      const lbl = sec.querySelector('.rp-settings-label');
      if (lbl) lbl.setAttribute('aria-expanded', 'false');
    });
  };

  // Automatically enforces the highest available genuine resolution for the active video
  const applyQuality = () => {
    let targetCode = 'hd1080';
    if (ytPlayer && typeof ytPlayer.getAvailableQualityLevels === 'function') {
      try {
        const levels = ytPlayer.getAvailableQualityLevels() || [];
        targetCode = getHighestAvailableQualityCode(levels);
      } catch (_) {}
    }

    try {
      if (ytPlayer) {
        if (typeof ytPlayer.setPlaybackQualityRange === 'function') {
          try { ytPlayer.setPlaybackQualityRange(targetCode, targetCode); } catch (_) {}
        }
        if (typeof ytPlayer.setPlaybackQuality === 'function') {
          try { ytPlayer.setPlaybackQuality(targetCode); } catch (_) {}
        }
      }

      const activeIframe = (ytPlayer && typeof ytPlayer.getIframe === 'function')
        ? ytPlayer.getIframe()
        : (container.querySelector('iframe') || iframe);
      if (targetCode && activeIframe && activeIframe.contentWindow) {
        try {
          activeIframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'setPlaybackQualityRange',
            args: [targetCode, targetCode]
          }), '*');
          activeIframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'setPlaybackQuality',
            args: [targetCode]
          }), '*');
        } catch (_) {}
      }
    } catch (_) {}
  };

  // Apply selected playback speed with instant feedback
  const handleSpeedSelect = (val) => {
    const rate = parseFloat(val || '1');
    currentSpeed = rate;
    if (nativeVideo) {
      nativeVideo.playbackRate = rate;
    }
    if (ytPlayer && typeof ytPlayer.setPlaybackRate === 'function') {
      try { ytPlayer.setPlaybackRate(rate); } catch (_) {}
    }
    const activeIframe = (ytPlayer && typeof ytPlayer.getIframe === 'function')
      ? ytPlayer.getIframe()
      : (container.querySelector('iframe') || iframe);
    if (activeIframe && activeIframe.contentWindow) {
      try {
        activeIframe.contentWindow.postMessage(JSON.stringify({
          event: 'command',
          func: 'setPlaybackRate',
          args: [rate]
        }), '*');
      } catch (_) {}
    }
    if (speedLabel) speedLabel.textContent = `${rate}×`;
    container.querySelectorAll('.rp-speed-items input[type="radio"]').forEach(inp => {
      const match = parseFloat(inp.value) === rate;
      inp.checked = match;
      const lbl = inp.closest('label');
      if (lbl) lbl.classList.toggle('active', match);
    });
    resetHideTimer();
    // Auto-dismiss menu on selection (Requirement 1)
    if (settingsBox && settingsBox.classList.contains('is-open')) {
      setTimeout(() => {
        closeSettingsMenu();
      }, 120);
    }
  };

  // Speed Radio & Row Selection Listener
  if (speedItems) {
    speedItems.addEventListener('change', (e) => {
      if (e.target && e.target.type === 'radio') {
        const val = e.target.value || e.target.parentElement.textContent.replace('×', '').trim();
        handleSpeedSelect(val);
      }
    });
    speedItems.addEventListener('click', (e) => {
      const opt = e.target.closest('.rp-speed-opt, label');
      if (opt) {
        const inp = opt.querySelector('input[type="radio"]');
        const val = opt.getAttribute('data-speed') || (inp && inp.value) || opt.textContent.replace('×', '').trim();
        if (val) {
          if (inp && !inp.checked) inp.checked = true;
          handleSpeedSelect(val);
        }
      }
    });
  }

  const openSettingsMenu = () => {
    if (!settingsBox || !settingsBtn) return;
    // Highlight currently selected speed
    container.querySelectorAll('.rp-speed-items input[type="radio"]').forEach(inp => {
      const match = parseFloat(inp.value) === currentSpeed;
      inp.checked = match;
      const lbl = inp.closest('label');
      if (lbl) lbl.classList.toggle('active', match);
    });
    if (speedLabel) speedLabel.textContent = `${currentSpeed}×`;

    settingsBox.style.display = 'block';
    settingsBox.removeAttribute('hidden');
    settingsBox.hidden = false;
    settingsBox.classList.add('is-open');
    settingsBtn.setAttribute('aria-expanded', 'true');
    container.classList.add('rp-settings-open', 'rp-speed-menu-open');
    resetHideTimer();
  };

  const closeSettingsMenu = () => {
    if (!settingsBox || !settingsBtn) return;
    settingsBox.style.display = 'none';
    settingsBox.setAttribute('hidden', '');
    settingsBox.hidden = true;
    settingsBox.classList.remove('is-open');
    settingsBtn.setAttribute('aria-expanded', 'false');
    container.classList.remove('rp-settings-open', 'rp-speed-menu-open');
    resetHideTimer();
  };

  // Settings Cog Toggle, Outside Click & Keyboard Listeners
  if (settingsBtn && settingsBox) {
    settingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = settingsBox.classList.contains('is-open') || container.classList.contains('rp-settings-open');

      if (isOpen) {
        closeSettingsMenu();
      } else {
        openSettingsMenu();
      }
    });

    handleOutsideSpeedMenuClick = (e) => {
      if (!settingsBox) return;
      const isVisible = settingsBox.classList.contains('is-open') || container.classList.contains('rp-settings-open');
      if (isVisible && !settingsBox.contains(e.target) && !settingsBtn.contains(e.target)) {
        closeSettingsMenu();
      }
    };
    document.addEventListener('click', handleOutsideSpeedMenuClick);
    document.addEventListener('touchend', handleOutsideSpeedMenuClick, { passive: true });

    handleWindowKeydown = (e) => {
      if (e.key === 'Escape') {
        const isVisible = settingsBox && (settingsBox.classList.contains('is-open') || container.classList.contains('rp-settings-open'));
        if (isVisible) {
          e.preventDefault();
          e.stopPropagation();
          closeSettingsMenu();
          settingsBtn.focus();
        }
      }
    };
    window.addEventListener('keydown', handleWindowKeydown);
  }

  // Fullscreen Events
  if (fsBtn) fsBtn.addEventListener('click', () => {
    try { container.focus(); } catch (_) {}
    toggleFullscreen();
    resetHideTimer();
  });

  const handleFsChange = () => {
    const fsEl = getFullscreenElement();
    const isFs = Boolean(fsEl === container);
    lastFullscreenChangeTime = Date.now();
    if (isFs) {
      container.classList.add('is-fullscreen');
      document.documentElement.classList.add('rp-fullscreen-active');
      document.body.classList.add('rp-fullscreen-active');
    } else if (!fsEl) {
      container.classList.remove('is-fullscreen');
      document.documentElement.classList.remove('rp-fullscreen-active');
      document.body.classList.remove('rp-fullscreen-active');
      try {
        if (screen.orientation && typeof screen.orientation.unlock === 'function') {
          screen.orientation.unlock();
        }
      } catch (_) {}
    }
    container.classList.remove('rp-controls-hidden');
    resetHideTimer();
  };
  document.addEventListener('fullscreenchange', handleFsChange);
  document.addEventListener('webkitfullscreenchange', handleFsChange);
  document.addEventListener('mozfullscreenchange', handleFsChange);
  document.addEventListener('MSFullscreenChange', handleFsChange);

  const handleOrientationChange = () => {
    resetHideTimer();
  };
  window.addEventListener('orientationchange', handleOrientationChange);

  // Timeline Dragging & Scrubbing
  const handleTimelineSeek = (clientX) => {
    if (!timelineWrap) return;
    const rect = timelineWrap.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const targetTime = pos * duration;

    if (timelineProgress) timelineProgress.style.width = `${pos * 100}%`;
    if (timelineThumb) timelineThumb.style.left = `${pos * 100}%`;
    if (timeCurrent) timeCurrent.textContent = formatTime(targetTime);

    if (nativeVideo) {
      nativeVideo.currentTime = targetTime;
    } else if (ytPlayer && isApiReady) {
      try { ytPlayer.seekTo(targetTime, true); } catch (_) {}
    }
  };

  if (timelineWrap) {
    timelineWrap.addEventListener('mousedown', (e) => {
      isDraggingTimeline = true;
      container.classList.add('is-scrubbing');
      handleTimelineSeek(e.clientX);
    });

    timelineWrap.addEventListener('mousemove', (e) => {
      if (!timelineTooltip) return;
      const rect = timelineWrap.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const hoverSec = pos * (duration || 0);
      timelineTooltip.textContent = formatTime(hoverSec);
      timelineTooltip.style.left = `${pos * 100}%`;
    });

    timelineWrap.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        isDraggingTimeline = true;
        container.classList.add('is-scrubbing');
        handleTimelineSeek(e.touches[0].clientX);
      }
    }, { passive: true });
  }

  const handleGlobalMouseMove = (e) => {
    if (isDraggingTimeline) {
      handleTimelineSeek(e.clientX);
    }
    if (isCurrentlyFullscreen()) {
      resetHideTimer();
    }
  };

  const handleGlobalTouchMove = (e) => {
    if (isDraggingTimeline && e.touches && e.touches[0]) {
      handleTimelineSeek(e.touches[0].clientX);
    }
    if (isCurrentlyFullscreen()) {
      resetHideTimer();
    }
  };

  const handleGlobalMouseUp = () => {
    if (isDraggingTimeline) {
      isDraggingTimeline = false;
      container.classList.remove('is-scrubbing');
      resetHideTimer();
    }
    if (isDraggingVolume) {
      isDraggingVolume = false;
      resetHideTimer();
    }
  };

  window.addEventListener('mousemove', handleGlobalMouseMove);
  window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true });
  window.addEventListener('mouseup', handleGlobalMouseUp);
  window.addEventListener('touchend', handleGlobalMouseUp);
  window.addEventListener('touchcancel', handleGlobalMouseUp);

  // Mouse / Pointer / Touch Inactivity Listeners
  const handleContainerPointerMove = (e) => {
    // On touch devices, slight finger contact during touch shouldn't prematurely clear hidden state before click
    if (e.pointerType === 'touch') return;
    resetHideTimer();
  };

  container.addEventListener('touchstart', handleContainerTouchOrPointerDown, { passive: true });
  container.addEventListener('pointerdown', handleContainerTouchOrPointerDown, { passive: true });
  container.addEventListener('mousemove', resetHideTimer);
  container.addEventListener('pointermove', handleContainerPointerMove);
  container.addEventListener('mouseenter', resetHideTimer);
  container.addEventListener('focusin', resetHideTimer);
  const handleMouseLeave = () => {
    // Prevent immediate hide on mouseleave right after fullscreen transitions
    if (Date.now() - lastFullscreenChangeTime < 2000) {
      return;
    }
    // Only auto-hide immediately on mouseleave if not in fullscreen mode
    if (isPlaying && !isCurrentlyFullscreen() && !container.classList.contains('rp-speed-menu-open') && !container.classList.contains('rp-settings-open')) {
      container.classList.add('rp-controls-hidden');
    }
  };
  container.addEventListener('mouseleave', handleMouseLeave);

  // Keyboard Shortcuts (Space, K, J, L, M, F, Arrow keys)
  const handleKeydown = (e) => {
    // Only handle if video player is in viewport and active or focused
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) return;
    if (!container.contains(activeEl) && activeEl !== container && activeEl !== document.body) return;

    if (e.key === ' ' || e.key === 'k' || e.key === 'K') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowLeft') {
      e.preventDefault();
      seekRelative(-10);
    } else if (e.key === 'l' || e.key === 'L' || e.key === 'ArrowRight') {
      e.preventDefault();
      seekRelative(10);
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      toggleMute();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setVolumeLevel(Math.min(100, (ytPlayer ? ytPlayer.getVolume() : 100) + 5));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setVolumeLevel(Math.max(0, (ytPlayer ? ytPlayer.getVolume() : 100) - 5));
    }
  };
  container.addEventListener('keydown', handleKeydown);

  // Suppress contextmenu and dragging so YouTube branding/URL context menu can never appear
  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  container.addEventListener('contextmenu', handleContextMenu);

  if (nativeVideo) {
    nativeVideo.addEventListener('loadedmetadata', () => {
      if (isDestroyed) return;
      duration = nativeVideo.duration || 0;
      if (timeDuration && duration > 0) {
        timeDuration.textContent = formatTime(duration);
      }
      setVolumeLevel(nativeVideo.volume * 100);
      if (currentSpeed !== 1) {
        handleSpeedSelect(currentSpeed);
      }
    });
    nativeVideo.addEventListener('timeupdate', () => {
      if (isDestroyed || isDraggingTimeline) return;
      const cur = nativeVideo.currentTime || 0;
      const dur = nativeVideo.duration || duration;
      if (dur > 0 && dur !== duration) {
        duration = dur;
        if (timeDuration) timeDuration.textContent = formatTime(dur);
      }
      updateProgressUi(cur, dur);
    });
    nativeVideo.addEventListener('progress', () => {
      if (timelineBuffer && nativeVideo.buffered && nativeVideo.buffered.length > 0 && duration > 0) {
        try {
          const bufferedEnd = nativeVideo.buffered.end(nativeVideo.buffered.length - 1);
          timelineBuffer.style.width = `${Math.min(100, (bufferedEnd / duration) * 100)}%`;
        } catch (_) {}
      }
    });
    nativeVideo.addEventListener('play', () => {
      if (isDestroyed) return;
      markPlaybackStarted(true);
      setPlayingState(true);
    });
    nativeVideo.addEventListener('pause', () => {
      if (isDestroyed) return;
      setPlayingState(false);
    });
    nativeVideo.addEventListener('ended', () => {
      if (isDestroyed) return;
      setPlayingState(false);
      updateProgressUi(duration, duration);
      container.classList.remove('has-started');
    });
    nativeVideo.addEventListener('waiting', () => {
      if (isDestroyed) return;
      container.classList.add('is-buffering');
    });
    nativeVideo.addEventListener('playing', () => {
      if (isDestroyed) return;
      container.classList.remove('is-buffering');
    });
  } else if (iframe) {
    // Connect Official YouTube IFrame Player API
    loadYouTubeIframeApi().then((YT) => {
    if (isDestroyed) return;
    if (!YT || !YT.Player) {
      // API blocked or unavailable: controls stay in graceful fallback mode
      container.classList.add('yt-fallback-mode');
      return;
    }

    try {
      const videoId = extractYouTubeVideoId(iframe.src);
      const origin = (typeof window !== 'undefined' && window.location) ? window.location.origin : undefined;
      const widgetReferrer = (typeof window !== 'undefined' && window.location)
        ? `${window.location.origin}${window.location.pathname}`
        : undefined;

      ytPlayer = new YT.Player(iframe, {
        videoId: videoId || undefined,
        playerVars: {
          controls: 0,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          cc_load_policy: 3,
          showinfo: 0,
          autohide: 1,
          enablejsapi: 1,
          vq: 'hd1080',
          origin: origin,
          widget_referrer: widgetReferrer
        },
        events: {
          onReady: (event) => {
            if (isDestroyed) return;
            isApiReady = true;
            try {
              duration = ytPlayer.getDuration() || 0;
              if (timeDuration && duration > 0) {
                timeDuration.textContent = formatTime(duration);
              }
              const vol = ytPlayer.getVolume() || 100;
              isMuted = ytPlayer.isMuted ? ytPlayer.isMuted() : false;
              updateVolumeUi(vol, isMuted);
              const vd = ytPlayer.getVideoData ? ytPlayer.getVideoData() : null;
              if (vd && vd.video_id) activeVideoId = vd.video_id;
              if (currentSpeed !== 1) {
                handleSpeedSelect(currentSpeed);
              }
              applyQuality();
            } catch (_) {}
          },
          onStateChange: (event) => {
            if (isDestroyed) return;
            try {
              const vd = ytPlayer.getVideoData ? ytPlayer.getVideoData() : null;
              if (vd && vd.video_id) activeVideoId = vd.video_id;
            } catch (_) {}
            // YT.PlayerState: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
            if (event.data === YT.PlayerState.PLAYING) {
              isQualitySwitching = false;
              markPlaybackStarted();
              setPlayingState(true);
              applyQuality();
            } else if (event.data === YT.PlayerState.PAUSED) {
              container.classList.remove('is-starting');
              container.classList.remove('is-buffering');
              setPlayingState(false);
            } else if (event.data === YT.PlayerState.ENDED) {
              container.classList.remove('is-starting');
              container.classList.remove('is-buffering');
              setPlayingState(false);
              updateProgressUi(duration, duration);
              container.classList.remove('has-started');
            } else if (event.data === YT.PlayerState.BUFFERING) {
              container.classList.add('is-buffering');
              applyQuality();
            } else if (event.data === YT.PlayerState.CUED) {
              applyQuality();
            }
            if (event.data !== YT.PlayerState.BUFFERING && event.data !== -1) {
              container.classList.remove('is-buffering');
            }
          },
          onPlaybackRateChange: (event) => {
            if (isDestroyed) return;
            const rate = (typeof event === 'object' && event && event.data) ? event.data : event;
            if (rate) {
              currentSpeed = rate;
              if (speedLabel) speedLabel.textContent = `${rate}×`;
              container.querySelectorAll('.rp-speed-items input[type="radio"]').forEach(inp => {
                const match = parseFloat(inp.value) === rate;
                inp.checked = match;
                const lbl = inp.closest('label');
                if (lbl) lbl.classList.toggle('active', match);
              });
            }
          },
          onPlaybackQualityChange: (event) => {
            if (isDestroyed) return;
            const q = (typeof event === 'object' && event && event.data) ? event.data : event;
            if (q && q !== 'unknown') {
              if (ytPlayer && typeof ytPlayer.getAvailableQualityLevels === 'function') {
                const levels = ytPlayer.getAvailableQualityLevels() || [];
                if (levels.length > 0) {
                  const highest = getHighestAvailableQualityCode(levels);
                  if (highest && q !== highest) {
                    const qRank = RESOLUTION_PRIORITY.indexOf(q);
                    const highestRank = RESOLUTION_PRIORITY.indexOf(highest);
                    if ((qRank > highestRank || q === 'auto' || q === 'default') && Date.now() - lastQualityEnforceTime > 1500) {
                      lastQualityEnforceTime = Date.now();
                      applyQuality();
                    }
                  }
                }
              }
            }
          },
          onError: (err) => {
            if (isDestroyed) return;
            const errCode = (typeof err === 'object' && err && err.data !== undefined) ? err.data : err;
            console.warn('[RisePaisa Player] YouTube Player notice code:', errCode);
            if (errCode === 101 || errCode === 150 || errCode === 100 || errCode === 153) {
              container.classList.remove('is-starting', 'is-buffering');
              setPlayingState(false);
              showEmbedErrorOverlay(container, activeVideoId);
            }
          }
        }
      });
    } catch (err) {
      console.warn('[RisePaisa Player] Init error, retaining native fallback:', err);
      container.classList.add('yt-fallback-mode');
    }
  });
  }

  const controller = {
    destroy: () => {
      isDestroyed = true;
      if (startFallbackTimer) clearTimeout(startFallbackTimer);
      if (startingPosterTimer) clearTimeout(startingPosterTimer);
      if (progressInterval) clearInterval(progressInterval);
      if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      window.removeEventListener('touchcancel', handleGlobalMouseUp);
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      document.removeEventListener('mozfullscreenchange', handleFsChange);
      document.removeEventListener('MSFullscreenChange', handleFsChange);
      document.documentElement.classList.remove('rp-fullscreen-active');
      document.body.classList.remove('rp-fullscreen-active');
      window.removeEventListener('orientationchange', handleOrientationChange);
      container.removeEventListener('mousemove', resetHideTimer);
      container.removeEventListener('pointermove', handleContainerPointerMove);
      container.removeEventListener('mouseenter', resetHideTimer);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleContainerTouchOrPointerDown);
      container.removeEventListener('pointerdown', handleContainerTouchOrPointerDown);
      container.removeEventListener('focusin', resetHideTimer);
      if (handleOutsideSpeedMenuClick) {
        document.removeEventListener('click', handleOutsideSpeedMenuClick);
        document.removeEventListener('touchend', handleOutsideSpeedMenuClick);
      }
      if (handleWindowKeydown) {
        window.removeEventListener('keydown', handleWindowKeydown);
      }
      container.removeEventListener('keydown', handleKeydown);
      container.removeEventListener('contextmenu', handleContextMenu);

      if (nativeVideo) {
        try { nativeVideo.pause(); } catch (_) {}
      }
      if (ytPlayer && typeof ytPlayer.destroy === 'function') {
        try { ytPlayer.destroy(); } catch (_) {}
      }
      _activeControllers.delete(container);
      try { delete container.__rpController; } catch (_) {}
    },
    getPlayer: () => (nativeVideo || ytPlayer),
    getAvailableQualityLevels: () => {
      if (ytPlayer && typeof ytPlayer.getAvailableQualityLevels === 'function') {
        try { return ytPlayer.getAvailableQualityLevels() || []; } catch (_) {}
      }
      return [];
    },
    getPlaybackQuality: () => {
      if (ytPlayer && typeof ytPlayer.getPlaybackQuality === 'function') {
        try { return ytPlayer.getPlaybackQuality() || 'unknown'; } catch (_) {}
      }
      return 'unknown';
    },
    applyQuality: () => applyQuality(true),
    play: () => {
      if (nativeVideo) nativeVideo.play().catch(() => {});
      else if (ytPlayer) ytPlayer.playVideo();
    },
    pause: () => {
      if (nativeVideo) nativeVideo.pause();
      else if (ytPlayer) ytPlayer.pauseVideo();
    }
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

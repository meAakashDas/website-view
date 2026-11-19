// ========================================================
// risePaisa: Video.js v10 Branded Video Player Integration
// Powered by official Video.js v10 (@videojs/cdn@10.3.0).
// Modern web components (<video-player>, <video-skin>),
// custom v10 controls, uncropped 16:9 ratio, native zero-branding media.
// ========================================================

/**
 * Known local direct-stream video assets mapped by video ID or slug.
 * Retained as empty mapping for backward compatibility.
 * All playback is powered exclusively by YouTube directly inside Video.js v10.
 */
export const KNOWN_LOCAL_VIDEOS = {};

/**
 * Extracts the 11-character YouTube video ID from a URL or string.
 * @param {string} url
 * @returns {string}
 */
export function extractYouTubeVideoId(url) {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const m = trimmed.match(/(?:embed\/|v=|youtu\.be\/|\/v\/|watch\?(?:.*&)?v=|shorts\/)([a-zA-Z0-9_-]{11})/i);
  return m ? m[1] : '';
}

/**
 * Prepares a clean YouTube watch URL for Video.js playback.
 * @param {string} rawUrl
 * @returns {string}
 */
export function prepareYouTubeWatchUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return '';
  const videoId = extractYouTubeVideoId(rawUrl);
  if (!videoId) return rawUrl;
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/**
 * Prepares a clean YouTube embed URL with native controls enabled.
 * Uses youtube-nocookie.com and disables third-party related videos.
 * @param {string} rawEmbedUrl
 * @returns {string}
 */
export function prepareYouTubeEmbedUrl(rawEmbedUrl) {
  if (!rawEmbedUrl || typeof rawEmbedUrl !== 'string') return '';
  const videoId = extractYouTubeVideoId(rawEmbedUrl);
  if (!videoId) return rawEmbedUrl;
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
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

let videoJsLoaderPromise = null;

/**
 * Preconnects and pre-resolves DNS for YouTube stream and embed domains
 * to eliminate initial TLS/DNS handshake latency on video playback.
 */
export function preconnectYouTube() {
  if (typeof document === 'undefined' || !document.head) return;
  const origins = [
    'https://www.youtube.com',
    'https://www.youtube-nocookie.com',
    'https://i.ytimg.com',
    'https://img.youtube.com',
    'https://googlevideo.com'
  ];
  for (const origin of origins) {
    if (!document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      if (origin.includes('googlevideo.com') || origin.includes('ytimg.com')) {
        link.crossOrigin = '';
      }
      document.head.appendChild(link);
    }
    if (!document.querySelector(`link[rel="dns-prefetch"][href="${origin}"]`)) {
      const dnsLink = document.createElement('link');
      dnsLink.rel = 'dns-prefetch';
      dnsLink.href = origin;
      document.head.appendChild(dnsLink);
    }
  }
}

/**
 * Asynchronously loads Video.js v10 custom elements if not already registered.
 * @returns {Promise<boolean>}
 */
export function loadVideoJs() {
  if (typeof window === 'undefined') return Promise.resolve(false);
  preconnectYouTube();
  if (
    typeof customElements !== 'undefined' &&
    customElements.get('video-player') &&
    customElements.get('video-skin') &&
    customElements.get('youtube-video')
  ) {
    return Promise.resolve(true);
  }
  if (videoJsLoaderPromise) return videoJsLoaderPromise;

  videoJsLoaderPromise = (async () => {
    try {
      await import('/assets/vendor/videojs/video.js');
      try {
        await import('/assets/vendor/videojs/media/youtube-video.js');
      } catch (_) {}
      return true;
    } catch (_) {
      try {
        await import('/node_modules/@videojs/cdn/video.js');
        try {
          await import('/node_modules/@videojs/cdn/media/youtube-video.js');
        } catch (_) {}
        return true;
      } catch (err) {
        try {
          await import('https://cdn.jsdelivr.net/npm/@videojs/cdn@10.3.0/video.js');
          try {
            await import('https://cdn.jsdelivr.net/npm/@videojs/cdn@10.3.0/media/youtube-video.js');
          } catch (_) {}
          return true;
        } catch (finalErr) {
          console.warn('[Video.js v10] Could not load modules:', finalErr);
          return false;
        }
      }
    }
  })();

  return videoJsLoaderPromise;
}

/**
 * Generates the HTML markup for a clean, responsive 16:9 Video.js v10 player.
 * Loads the corresponding YouTube video directly inside the custom-designed
 * Video.js v10 player elements (<video-player>, <video-skin>, <youtube-video>).
 *
 * @param {Object} options
 * @param {string} options.embedUrl - YouTube video URL or ID
 * @param {string} [options.title] - Video title
 * @param {string} [options.playerId] - ID for the video-player element
 * @param {string} [options.containerId] - ID for container wrapper
 * @param {string} [options.extraClass] - Optional CSS classes
 * @returns {string} Complete HTML string
 */
export function createBrandedVideoPlayer(options = {}) {
  const {
    embedUrl = '',
    title = 'RisePaisa Video Lesson',
    playerId = 'cd-demo-player',
    containerId = '',
    extraClass = ''
  } = options;

  const videoId = extractYouTubeVideoId(embedUrl) || 'ziVeMxMF4e8';
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const posterUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const safeTitle = sanitizeText(title || 'RisePaisa Video Lesson');
  const safePlayerId = sanitizeText(playerId || 'cd-demo-player');
  const safeWatchUrl = sanitizeText(watchUrl);
  const safePosterUrl = sanitizeText(posterUrl);
  const containerIdAttr = containerId ? ` id="${sanitizeText(containerId)}"` : '';
  const extraClasses = extraClass ? ` ${sanitizeText(extraClass)}` : '';

  const mediaMarkup = `
          <youtube-video
            id="${safePlayerId}-media"
            src="${safeWatchUrl}"
            poster="${safePosterUrl}"
            data-video-id="${sanitizeText(videoId)}"
            aria-label="${safeTitle}">
          </youtube-video>
  `.trim();

  const fallbackEmbedUrl = sanitizeText(prepareYouTubeEmbedUrl(embedUrl || watchUrl));
  const fallbackIframeId = (containerId === 'cl-video-iframe' || playerId === 'cl-video-player')
    ? 'cl-video-iframe'
    : `${safePlayerId}-fallback-iframe`;

  return `
    <div class="rp-video-embed cd-video-wrap${extraClasses}"${containerIdAttr}>
      <video-player id="${safePlayerId}" aria-label="${safeTitle}" poster="${safePosterUrl}" tabindex="0">
        <video-skin style="display: block; width: 100%; aspect-ratio: 16 / 9;">
          ${mediaMarkup}
          <img slot="poster" src="${safePosterUrl}" alt="${safeTitle}" decoding="async" class="media-poster-image">
        </video-skin>
      </video-player>
      <noscript>
        <iframe
          id="${fallbackIframeId}"
          class="cd-video-iframe"
          src="${fallbackEmbedUrl}"
          title="${safeTitle}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy">
        </iframe>
      </noscript>
    </div>
  `.trim();
}

/**
 * Aliases for backward compatibility
 */
export const createVideoEmbed = createBrandedVideoPlayer;
export const renderYouTubeEmbed = createBrandedVideoPlayer;

/**
 * Initializes Video.js v10 on a given container or element.
 * Returns a player controller instance with standard media methods.
 *
 * @param {HTMLElement|string} target
 * @param {Object} [customOptions]
 * @returns {Promise<any>} Video.js v10 player controller
 */
export async function initBrandedVideoPlayer(target, customOptions = {}) {
  if (typeof window === 'undefined') return null;
  await loadVideoJs();

  let root = typeof target === 'string' ? document.getElementById(target) : target;
  if (!root) return null;

  // Deduplicate controller instance if already initialized on target or child
  if (root.__vjsController) {
    if (customOptions.src) root.__vjsController.src(customOptions.src);
    return root.__vjsController;
  }
  const childPlayer = root.tagName === 'VIDEO-PLAYER' ? root : root.querySelector('video-player');
  if (childPlayer && childPlayer.__vjsController) {
    if (customOptions.src) childPlayer.__vjsController.src(customOptions.src);
    return childPlayer.__vjsController;
  }

  let playerEl = root.tagName === 'VIDEO-PLAYER' ? root : root.querySelector('video-player');
  let skinEl = root.tagName === 'VIDEO-SKIN' ? root : root.querySelector('video-skin');
  let mediaEl = root.querySelector('video, youtube-video');
  if (!mediaEl && (root.tagName === 'VIDEO' || root.tagName === 'YOUTUBE-VIDEO')) {
    mediaEl = root;
  }

  // If container doesn't have custom elements yet, generate them inside
  if (!playerEl && !mediaEl) {
    const src = customOptions.src || root.getAttribute('data-youtube-src') || 'https://www.youtube.com/watch?v=ziVeMxMF4e8';
    root.innerHTML = createBrandedVideoPlayer({
      embedUrl: src,
      playerId: root.id ? `${root.id}-v10` : 'cd-demo-player'
    });
    playerEl = root.querySelector('video-player');
    skinEl = root.querySelector('video-skin');
    mediaEl = root.querySelector('video, youtube-video');
  }

  // Self-heal: If an old or static <video> tag is present, replace it with <youtube-video>
  if (mediaEl && mediaEl.tagName === 'VIDEO') {
    const rawSrc = customOptions.src || mediaEl.getAttribute('data-video-id') || mediaEl.getAttribute('src') || '';
    const id = extractYouTubeVideoId(rawSrc) || mediaEl.getAttribute('data-video-id') || 'ziVeMxMF4e8';
    const posterUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    const ytEl = document.createElement('youtube-video');
    ytEl.id = mediaEl.id;
    ytEl.setAttribute('data-video-id', id);
    ytEl.setAttribute('aria-label', mediaEl.getAttribute('aria-label') || 'RisePaisa Video Lesson');
    ytEl.setAttribute('poster', posterUrl);
    ytEl.poster = posterUrl;
    ytEl.src = `https://www.youtube.com/watch?v=${id}`;
    if (playerEl) playerEl.setAttribute('poster', posterUrl);
    mediaEl.parentNode?.replaceChild(ytEl, mediaEl);
    mediaEl = ytEl;
  } else if (customOptions.src && mediaEl) {
    const urlStr = typeof customOptions.src === 'object' ? customOptions.src.src : customOptions.src;
    const id = extractYouTubeVideoId(urlStr);
    const currentId = mediaEl.getAttribute('data-video-id') || extractYouTubeVideoId(mediaEl.src);
    if (id && id !== currentId) {
      const posterUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
      mediaEl.src = `https://www.youtube.com/watch?v=${id}`;
      mediaEl.setAttribute('data-video-id', id);
      mediaEl.setAttribute('poster', posterUrl);
      mediaEl.poster = posterUrl;
      if (playerEl) playerEl.setAttribute('poster', posterUrl);
    }
  } else if (mediaEl) {
    const existingId = mediaEl.getAttribute('data-video-id') || extractYouTubeVideoId(mediaEl.src);
    if (existingId) {
      const posterUrl = `https://img.youtube.com/vi/${existingId}/maxresdefault.jpg`;
      if (!mediaEl.getAttribute('poster')) {
        mediaEl.setAttribute('poster', posterUrl);
        mediaEl.poster = posterUrl;
      }
      if (playerEl && !playerEl.getAttribute('poster')) {
        playerEl.setAttribute('poster', posterUrl);
      }
    }
  }

  // Snappy buffering indicator dismissal: dismiss immediately when playback is ready
  if (mediaEl) {
    const dismissSpinner = () => {
      try {
        const ind = skinEl?.shadowRoot?.querySelector('media-buffering-indicator, .media-buffering-indicator')
          || playerEl?.querySelector('media-buffering-indicator, .media-buffering-indicator');
        if (ind && ind.hasAttribute('data-visible')) {
          ind.removeAttribute('data-visible');
        }
      } catch (_) {}
    };
    mediaEl.addEventListener('playing', dismissSpinner, { passive: true });
    mediaEl.addEventListener('timeupdate', () => {
      if (mediaEl.currentTime > 0) dismissSpinner();
    }, { passive: true });
    mediaEl.addEventListener('loadedmetadata', dismissSpinner, { passive: true });
  }

  const controller = {
    el: playerEl || root,
    skin: skinEl,
    media: mediaEl,
    play() {
      if (mediaEl && typeof mediaEl.play === 'function') {
        return mediaEl.play();
      }
      return Promise.resolve();
    },
    pause() {
      if (mediaEl && typeof mediaEl.pause === 'function') {
        mediaEl.pause();
      }
    },
    get paused() {
      return mediaEl ? mediaEl.paused : true;
    },
    get currentTime() {
      return mediaEl ? mediaEl.currentTime : 0;
    },
    set currentTime(seconds) {
      if (mediaEl) mediaEl.currentTime = seconds;
    },
    get duration() {
      return mediaEl ? mediaEl.duration : 0;
    },
    src(newSrc) {
      if (newSrc && mediaEl) {
        const urlStr = typeof newSrc === 'object' ? (newSrc.src || '') : String(newSrc);
        const id = extractYouTubeVideoId(urlStr);
        const currentId = mediaEl.getAttribute('data-video-id') || extractYouTubeVideoId(mediaEl.src);
        if (id) {
          if (id === currentId) {
            return mediaEl.src;
          }
          const watchUrl = `https://www.youtube.com/watch?v=${id}`;
          const posterUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
          if (mediaEl.tagName === 'VIDEO') {
            const ytEl = document.createElement('youtube-video');
            ytEl.id = mediaEl.id;
            ytEl.setAttribute('data-video-id', id);
            ytEl.setAttribute('aria-label', mediaEl.getAttribute('aria-label') || 'RisePaisa Video Lesson');
            ytEl.setAttribute('poster', posterUrl);
            ytEl.poster = posterUrl;
            ytEl.src = watchUrl;
            mediaEl.parentNode?.replaceChild(ytEl, mediaEl);
            mediaEl = ytEl;
          } else {
            mediaEl.setAttribute('poster', posterUrl);
            mediaEl.poster = posterUrl;
            mediaEl.src = watchUrl;
            mediaEl.setAttribute('data-video-id', id);
          }
          if (playerEl) playerEl.setAttribute('poster', posterUrl);
        } else {
          if (mediaEl.src !== urlStr) {
            mediaEl.src = urlStr;
          }
        }
      }
      return mediaEl ? mediaEl.src : '';
    },
    dispose() {
      // Clean teardown if needed
    }
  };

  if (root) {
    root.__vjsController = controller;
  }
  if (playerEl && playerEl !== root) {
    playerEl.__vjsController = controller;
  }

  return controller;
}

/**
 * Disposes of a player instance cleanly.
 * @param {HTMLElement|string} target
 */
export function destroyBrandedVideoPlayer(target) {
  if (typeof window === 'undefined') return;
  try {
    const root = typeof target === 'string' ? document.getElementById(target) : target;
    if (root) {
      const childPlayer = root.tagName === 'VIDEO-PLAYER' ? root : root.querySelector('video-player');
      const ctrl = root.__vjsController || childPlayer?.__vjsController;
      if (ctrl && typeof ctrl.dispose === 'function') {
        ctrl.dispose();
      }
      root.__vjsController = null;
      if (childPlayer) childPlayer.__vjsController = null;
    }
  } catch (_) {
    // Ignore cleanup errors
  }
}

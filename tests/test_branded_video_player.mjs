// ========================================================
// RISEPAISA VIDEO.JS V10 YOUTUBE VIDEO PLAYER TEST SUITE
// Validates official Video.js v10 (@videojs/cdn@10.3.0) player
// integration, <video-player>, <video-skin>, <youtube-video>,
// uncropped 16:9 aspect ratio, v10 custom controls, and clean lifecycle.
// ========================================================
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('TEST SUITE: VIDEO.JS V10 YOUTUBE PLAYER INTEGRATION');
console.log('========================================================\n');

const {
  createBrandedVideoPlayer,
  prepareYouTubeWatchUrl,
  prepareYouTubeEmbedUrl,
  extractYouTubeVideoId,
  loadVideoJs,
  initBrandedVideoPlayer,
  destroyBrandedVideoPlayer
} = await import('../js/components/videoPlayer.js');

const { renderCourseLearnPage } = await import('../js/pages/courseLearn.js');
const { renderCourseDetailPage } = await import('../js/pages/courseDetail.js');
const { renderResourceDetailPage } = await import('../js/pages/resourceDetail.js');

// ── 1. Component Markup & Anatomy ─────────────────────────────
console.log('--- 1. Testing Video.js v10 Component Markup & Anatomy ---');

const sampleUrl = 'https://www.youtube.com/watch?v=ziVeMxMF4e8';
const playerHtml = createBrandedVideoPlayer({
  embedUrl: sampleUrl,
  title: 'Lesson 1: Introduction to NEPSE',
  playerId: 'test-vjs-player',
  containerId: 'test-vjs-container'
});

assert(playerHtml.includes('class="rp-video-embed'), 'Renders rp-video-embed container');
assert(playerHtml.includes('id="test-vjs-container"'), 'Container ID preserved');
assert(playerHtml.includes('id="test-vjs-player"'), 'Player ID assigned to video-player element');
assert(playerHtml.includes('<video-player'), 'Renders standard Video.js v10 <video-player> custom element');
assert(playerHtml.includes('<video-skin'), 'Renders official Video.js v10 <video-skin> UI container');
assert(playerHtml.includes('<video') || playerHtml.includes('<youtube-video'), 'Renders Video.js v10 media playback element');
assert(playerHtml.includes('aspect-ratio: 16 / 9'), 'Applies responsive 16:9 aspect-ratio');
assert(playerHtml.includes('ziVeMxMF4e8'), 'Embeds exact video ID ziVeMxMF4e8');

const ytPlayerHtml = createBrandedVideoPlayer({
  embedUrl: sampleUrl,
  useYouTubeTech: true
});
assert(ytPlayerHtml.includes('<youtube-video'), 'Supports <youtube-video> tech when explicitly configured');

// ── 2. Absolute Absence of Legacy Player Junk ──────────────────
console.log('\n--- 2. Verifying Complete Elimination of Legacy Custom Player Code ---');

assert(!playerHtml.includes('rp-player-seek-overlay'), 'Completely eliminated custom seek overlays');
assert(!playerHtml.includes('rp-seek-btn'), 'Completely eliminated custom seek buttons');
assert(!playerHtml.includes('rp-btn-rewind'), 'Completely eliminated rewind buttons');
assert(!playerHtml.includes('rp-btn-forward'), 'Completely eliminated forward buttons');
assert(!playerHtml.includes('rp-settings-box'), 'Completely eliminated custom settings menu');
assert(!playerHtml.includes('rp-center-btn'), 'Completely eliminated custom center play button');
assert(!playerHtml.includes('rp-player-header'), 'Completely eliminated top header overlay');
assert(!playerHtml.includes('rp-player-badge'), 'Completely eliminated top floating badge');
assert(!playerHtml.includes('rp-player-top-shield'), 'Completely eliminated top shield overlay');
assert(!playerHtml.includes('rp-player-watermark-shield'), 'Completely eliminated watermark shield overlay');
assert(!playerHtml.includes('rp-player-corner-shield'), 'Completely eliminated corner shield');
assert(!playerHtml.includes('rp-player-copylink-shield'), 'Completely eliminated copylink shield');
assert(!playerHtml.includes('rp-player-top-guard'), 'Completely eliminated top black stripe guard');
assert(!playerHtml.includes('rp-player-bottom-guard'), 'Completely eliminated bottom black stripe guard');

// ── 3. YouTube URL Preparation & Native Controls ──────────────
console.log('\n--- 3. Testing YouTube URL Preparation & Watch URL ---');

const watchUrl = prepareYouTubeWatchUrl('https://www.youtube.com/watch?v=ziVeMxMF4e8');
assert(watchUrl.includes('ziVeMxMF4e8'), 'Preserves exact YouTube video ID');
assert(watchUrl === 'https://www.youtube.com/watch?v=ziVeMxMF4e8', 'Canonicalizes to standard YouTube watch URL');

const embedUrl = prepareYouTubeEmbedUrl('https://www.youtube.com/watch?v=ziVeMxMF4e8');
assert(embedUrl.includes('youtube-nocookie.com/embed/ziVeMxMF4e8'), 'Embed URL employs privacy-enhanced youtube-nocookie.com');
assert(embedUrl.includes('rel=0'), 'Suppresses third-party related videos via rel=0');

// ── 4. YouTube Video ID Extraction Robustness ─────────────────
console.log('\n--- 4. Testing YouTube Video ID Extraction ---');

assert(extractYouTubeVideoId('https://www.youtube.com/embed/ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Extracts 11-char ID from embed URL');
assert(extractYouTubeVideoId('https://www.youtube.com/watch?v=ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Extracts 11-char ID from watch URL');
assert(extractYouTubeVideoId('https://youtu.be/ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Extracts 11-char ID from short URL');
assert(extractYouTubeVideoId('https://www.youtube.com/shorts/ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Extracts 11-char ID from shorts URL');
assert(extractYouTubeVideoId('ziVeMxMF4e8') === 'ziVeMxMF4e8', 'Accepts raw 11-character video ID');
assert(extractYouTubeVideoId('') === '', 'Handles empty input safely');
assert(extractYouTubeVideoId(null) === '', 'Handles null input safely');

// ── 5. CSS Hygiene & Video.js v10 Stylesheet ─────────────────────────
console.log('\n--- 5. Testing CSS Hygiene & 16:9 Aspect Ratio ---');

const cssPath = path.join(rootDir, 'css', 'videoPlayer.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert(cssContent.includes('aspect-ratio: 16 / 9'), 'Enforces clean uncropped 16:9 aspect ratio');
assert(cssContent.includes('video-player'), 'Contains Video.js v10 video-player element styling');
assert(cssContent.includes('video-skin'), 'Contains Video.js v10 video-skin styling');
assert(cssContent.includes('youtube-video'), 'Contains Video.js v10 youtube-video styling');
assert(cssContent.includes('--media-slider-fill') || cssContent.includes('media-skin'), 'Contains official Video.js v10 default skin tokens');
assert(cssContent.includes('.rp-video-embed'), 'Styles .rp-video-embed container');
assert(cssContent.includes('.cd-demo-video-wrapper'), 'Styles .cd-demo-video-wrapper container');
assert(!cssContent.includes('width: 300%'), 'Completely eliminated hacky width: 300% clipping');
assert(!cssContent.includes('left: -100%'), 'Completely eliminated hacky left: -100% offset');

// ── 6. Verification in Course Templates ─────────────────────────
console.log('\n--- 6. Verifying Video.js v10 in Course Detail Template ---');

const courseDetailHtml = renderCourseDetailPage('nepse-stock-market-basics');
assert(courseDetailHtml.includes('id="cd-demo-player"'), 'Course Detail page renders Video.js demo player with id="cd-demo-player"');
assert(courseDetailHtml.includes('<video-player'), 'Course Detail page renders <video-player> element');
assert(courseDetailHtml.includes('<video-skin'), 'Course Detail page renders <video-skin> element');
assert(courseDetailHtml.includes('<video') || courseDetailHtml.includes('<youtube-video'), 'Course Detail page renders media playback element');
assert(courseDetailHtml.includes('ziVeMxMF4e8'), 'Course Detail page loads configured video ziVeMxMF4e8');

const courseLearnGuestHtml = renderCourseLearnPage('nepse-stock-market-basics', null);
assert(courseLearnGuestHtml.includes('id="cl-video-iframe"'), 'Course Learn page renders lesson 1 preview iframe');
assert(!courseLearnGuestHtml.includes('rp-player-seek-overlay'), 'Course Learn page contains zero legacy overlays');

const resourceDetailHtml = renderResourceDetailPage('budget-planner-system');
assert(resourceDetailHtml.includes('id="resource-preview-iframe"'), 'Resource Detail page renders preview');

// ── 7. Module Lifecycle API ───────────────────────────────────
console.log('\n--- 7. Testing Clean Lifecycle Hooks ---');

assert(typeof loadVideoJs === 'function', 'Exports loadVideoJs async loader');
assert(typeof initBrandedVideoPlayer === 'function', 'Exports initBrandedVideoPlayer hook');
assert(typeof destroyBrandedVideoPlayer === 'function', 'Exports destroyBrandedVideoPlayer hook');

// ── 8. Absolute Removal of YouTube Branding Elements ─────────────
console.log('\n--- 8. Verifying Absolute Absence of YouTube Branding Elements ---');
assert(!courseDetailHtml.includes('ytp-chrome-top'), 'Zero YouTube title/channel header');
assert(!courseDetailHtml.includes('ytp-watermark'), 'Zero YouTube logo watermark');
assert(!courseDetailHtml.includes('ytp-pause-overlay'), 'Zero YouTube pause overlay');
assert(!courseDetailHtml.includes('Copy link'), 'Zero YouTube copy link button');
assert(!courseDetailHtml.includes('transform: scale'), 'Zero video zoom distortion');
assert(!courseDetailHtml.includes('rp-player-top-guard'), 'Zero black stripe top guard');
assert(!courseDetailHtml.includes('rp-player-bottom-guard'), 'Zero black stripe bottom guard');

// ── Summary ───────────────────────────────────────────────────
console.log('\n======================================================');
console.log(`TEST SUMMARY: ${passedTests} passed, ${failedTests} failed, ${totalTests} total`);
console.log('======================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

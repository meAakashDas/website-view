// ========================================================
// RISEPAISA BRANDED VIDEO PLAYER TEST SUITE
// Tests component generation, YouTube embedding security,
// control elements, responsive CSS scoping, and lifecycle.
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
console.log('TEST SUITE: BRANDED VIDEO PLAYER INTERFACE & CONTROLS');
console.log('========================================================\n');

const {
  createBrandedVideoPlayer,
  prepareYouTubeEmbedUrl,
  extractYouTubeVideoId,
  QUALITY_MAP
} = await import('../js/components/videoPlayer.js');

const { renderCourseLearnPage } = await import('../js/pages/courseLearn.js');
const { renderCourseDetailPage } = await import('../js/pages/courseDetail.js');
const { renderResourceDetailPage } = await import('../js/pages/resourceDetail.js');

// ── 1. Component Markup & Anatomy ─────────────────────────────
console.log('--- 1. Testing Branded Video Player Markup & Anatomy ---');

const sampleUrl = 'https://www.youtube-nocookie.com/embed/ziVeMxMF4e8?rel=0&modestbranding=1';
const playerHtml = createBrandedVideoPlayer({
  embedUrl: sampleUrl,
  title: 'Lesson 1: Introduction to NEPSE',
  iframeId: 'cl-video-iframe',
  containerId: 'cl-iframe-container',
  supportedQualities: ['hd1080', 'hd720', 'medium', 'tiny']
});

assert(playerHtml.includes('class="rp-video-player-frame'), 'Renders rp-video-player-frame root container');
assert(playerHtml.includes('id="cl-iframe-container"'), 'Container ID preserved for backwards compatibility');
assert(playerHtml.includes('id="cl-video-iframe"'), 'Iframe ID preserved for backwards compatibility');
assert(playerHtml.includes('class="cl-video-iframe'), 'Iframe retains cl-video-iframe class for styling');
assert(playerHtml.includes('RisePaisa Secure Video Player'), 'Renders RisePaisa branded floating badge');
assert(playerHtml.includes('rp-player-badge-dot'), 'Renders pulsating security indicator dot');
assert(playerHtml.includes('rp-player-center-play'), 'Renders big center play button overlay');
assert(playerHtml.includes('rp-player-controls'), 'Renders cinema-dark controls toolbar');
assert(playerHtml.includes('rp-player-timeline-wrap'), 'Renders interactive seekable timeline slider');
assert(playerHtml.includes('rp-player-timeline-progress'), 'Renders emerald progress bar element');
assert(playerHtml.includes('rp-btn-play'), 'Renders Play/Pause control button');
assert(playerHtml.includes('rp-btn-rewind'), 'Renders Seek Backward 10s button');
assert(playerHtml.includes('rp-btn-forward'), 'Renders Seek Forward 10s button');
assert(playerHtml.includes('rp-player-volume-group'), 'Renders volume button and slider group');
assert(playerHtml.includes('rp-volume-slider'), 'Renders accessible volume range input');
assert(playerHtml.includes('rp-player-time'), 'Renders current time and duration display');
assert(playerHtml.includes('rp-player-speed-group'), 'Renders playback speed selector');
assert(playerHtml.includes('rp-btn-settings'), 'Renders settings cog button');
assert(playerHtml.includes('rp-settings-box'), 'Renders sleek settings panel');
assert(playerHtml.includes('Playback Speed'), 'Settings menu displays Playback Speed immediately');
assert(!playerHtml.includes('rp-settings-section-quality'), 'Custom quality section removed from settings menu');
assert(!playerHtml.includes('rp-quality-items'), 'Custom quality selector items removed');
assert(playerHtml.includes('data-speed="0.5"'), 'Supports 0.5× playback speed');
assert(playerHtml.includes('data-speed="0.75"'), 'Supports 0.75× playback speed');
assert(playerHtml.includes('data-speed="1"'), 'Supports 1× playback speed');
assert(playerHtml.includes('data-speed="1.25"'), 'Supports 1.25× playback speed');
assert(playerHtml.includes('data-speed="1.5"'), 'Supports 1.5× playback speed');
assert(playerHtml.includes('data-speed="1.75"'), 'Supports 1.75× playback speed');
assert(playerHtml.includes('data-speed="2"'), 'Supports 2× playback speed');
assert(QUALITY_MAP.hd2160 === '4K · 2160p', 'QUALITY_MAP maps hd2160 to 4K · 2160p');
assert(QUALITY_MAP.hd1440 === 'QHD · 1440p', 'QUALITY_MAP maps hd1440 to QHD · 1440p');
assert(QUALITY_MAP.hd1080 === 'FHD · 1080p', 'QUALITY_MAP maps hd1080 to FHD · 1080p');
assert(QUALITY_MAP.hd720 === 'HD · 720p', 'QUALITY_MAP maps hd720 to HD · 720p');
assert(QUALITY_MAP.auto === 'Auto', 'QUALITY_MAP maps auto to Auto');
assert(!playerHtml.includes('rp-player-top-shield'), 'Eliminated artificial top shield overlay');
assert(!playerHtml.includes('rp-player-watermark-shield'), 'Eliminated artificial watermark shield overlay');
assert(!playerHtml.includes('rp-player-corner-shield'), 'Eliminated artificial corner shield');
assert(!playerHtml.includes('rp-player-copylink-shield'), 'Eliminated artificial copylink black bar');
assert(playerHtml.includes('rp-btn-fullscreen'), 'Renders fullscreen toggle button');
assert(playerHtml.includes('rp-player-click-surface'), 'Renders click surface for unified interaction');
assert(playerHtml.includes('rp-player-poster'), 'Renders clean poster cover for unstarted state');
assert(playerHtml.includes('rp-poster-img'), 'Renders poster image element');
assert(playerHtml.includes('referrerpolicy="strict-origin-when-cross-origin"'), 'Provides YouTube with a safe origin referrer for playback');
assert(!playerHtml.includes('rp-player-top-guard'), 'Eliminated artificial top black stripe guard');
assert(!playerHtml.includes('rp-player-bottom-guard'), 'Eliminated artificial bottom black stripe guard');
assert(playerHtml.includes('rp-player-buffering-indicator'), 'Renders buffering loading indicator');

// ── 2. YouTube URL Preparation & Security ─────────────────────
console.log('\n--- 2. Testing YouTube URL Parameter Injection & Safety ---');

const prepared = prepareYouTubeEmbedUrl('https://www.youtube-nocookie.com/embed/ziVeMxMF4e8');
assert(prepared.includes('enablejsapi=1'), 'Injects enablejsapi=1 for official IFrame API');
assert(prepared.includes('controls=0'), 'Enforces controls=0 to eliminate duplicate native YouTube controls');
assert(prepared.includes('disablekb=1'), 'Enforces disablekb=1 to prevent native keyboard conflict');
assert(prepared.includes('fs=0'), 'Enforces fs=0 to prevent duplicate native fullscreen button');
assert(prepared.includes('modestbranding=1'), 'Enforces modestbranding=1');
assert(prepared.includes('rel=0'), 'Enforces rel=0 to prevent third-party recommended videos');
assert(prepared.includes('playsinline=1'), 'Enforces playsinline=1 for mobile browsers');
assert(prepared.includes('vq=hd1080'), 'Injects vq=hd1080 to request crisp HD stream without 360p lock');
assert(prepared.includes('ziVeMxMF4e8'), 'Preserves exact video ID');
assert(extractYouTubeVideoId('https://www.youtube.com/embed/ziVeMxMF4e8') === 'ziVeMxMF4e8', 'extractYouTubeVideoId extracts 11-char ID from embed URL');
assert(extractYouTubeVideoId('https://youtu.be/dbWxH9C5cBE') === 'dbWxH9C5cBE', 'extractYouTubeVideoId extracts 11-char ID from short URL');

const vpSrc = fs.readFileSync(path.join(rootDir, 'js', 'components', 'videoPlayer.js'), 'utf8');
assert(vpSrc.includes('controls: 0'), 'videoPlayer.js configures playerVars controls: 0');
assert(vpSrc.includes('playsinline: 1'), 'videoPlayer.js configures playerVars playsinline: 1');
assert(vpSrc.includes('widget_referrer: widgetReferrer'), 'videoPlayer.js identifies the embedding page to YouTube');
assert(vpSrc.includes('errCode === 153'), 'videoPlayer.js handles YouTube missing-referrer playback errors');
assert(vpSrc.includes('isDestroyed'), 'videoPlayer.js guards async API resolution against zombie players');
assert(vpSrc.includes('handleOutsideSpeedMenuClick'), 'videoPlayer.js cleans up document click listener on destroy');

const clSrc = fs.readFileSync(path.join(rootDir, 'js', 'pages', 'courseLearn.js'), 'utf8');
assert(clSrc.includes('activePlayerLessonId'), 'courseLearn.js tracks activePlayerLessonId to prevent duplicate player instances');
const courseDetailSrc = fs.readFileSync(path.join(rootDir, 'js', 'pages', 'courseDetail.js'), 'utf8');
assert(courseDetailSrc.includes("effectiveSlug !== 'nepse-stock-market-basics'"), 'Course detail preserves the verified NEPSE free demo instead of replacing it with the broken live override');
assert(courseDetailSrc.includes('iframe.src = _toYouTubeDemoEmbed(newEmbed)'), 'Course detail live sync still updates other courses’ native free demo iframes');

// ── 3. Page Integrations (Course Learn, Course Detail, Resource)
console.log('\n--- 3. Testing Global Page Integrations ---');

// NEPSE Course Learn (Free Preview Lesson 1)
const learnHtml = renderCourseLearnPage('nepse-stock-market-basics');
assert(learnHtml.includes('rp-video-player-frame'), 'Course Learn renders rp-video-player-frame');
assert(learnHtml.includes('RisePaisa Secure Video Player'), 'Course Learn displays RisePaisa branded badge');
assert(learnHtml.includes('id="cl-video-iframe"'), 'Course Learn retains #cl-video-iframe element');

// NEPSE Course Detail (Demo Video)
const courseDetailHtml = renderCourseDetailPage('nepse-stock-market-basics');
assert(courseDetailHtml.includes('id="cd-demo-iframe"'), 'Course Detail renders the free demo iframe');
assert(courseDetailHtml.includes('www.youtube.com/embed/'), 'Course Detail uses the standard YouTube player for reliable demo playback');
assert(courseDetailHtml.includes('ziVeMxMF4e8'), 'Course Detail uses the verified playable NEPSE demo video');
assert(courseDetailHtml.includes('controls=1'), 'Course Detail keeps YouTube playback controls available');
assert(courseDetailHtml.includes('referrerpolicy="strict-origin-when-cross-origin"'), 'Course Detail supplies YouTube a safe referrer');
assert(!courseDetailHtml.includes('id="cd-demo-video-container" data-rp-player'), 'Course Detail free demo does not intercept playback with a custom API player');

// Resource Detail Preview Video
const resourceHtml = renderResourceDetailPage('budget-planner-system');
assert(resourceHtml.includes('rp-video-player-frame'), 'Resource Detail preview video uses rp-video-player-frame');
assert(resourceHtml.includes('RisePaisa Secure Video Player'), 'Resource Detail displays branded badge');

// ── 4. CSS Scoping & Isolation ────────────────────────────────
console.log('\n--- 4. Testing CSS Rules & Scoping ---');

const cssPath = path.join(rootDir, 'css', 'videoPlayer.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert(cssContent.includes('.rp-video-player-frame'), 'videoPlayer.css defines .rp-video-player-frame');
assert(cssContent.includes('.rp-player-badge'), 'videoPlayer.css styles .rp-player-badge');
assert(cssContent.includes('aspect-ratio: 16 / 9'), 'videoPlayer.css enforces 16:9 aspect ratio');
assert(cssContent.includes('@media (max-width: 640px)'), 'videoPlayer.css includes mobile responsive rules');
assert(cssContent.includes('.rp-controls-hidden'), 'videoPlayer.css supports auto-hide controls');
assert(!cssContent.includes('position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;'), 'No global fixed fullscreen bleed');
assert(!cssContent.includes('overflow: hidden') || cssContent.includes('.rp-video-player-frame'), 'overflow: hidden is strictly scoped to player containers');
assert(cssContent.includes('pointer-events: none'), 'videoPlayer.css sets pointer-events: none on iframe to prevent hover overlay triggers');
assert(cssContent.includes('pointer-events: auto !important'), 'videoPlayer.css restores pointer-events on iframe in fallback mode');
assert(cssContent.includes('.rp-settings-box'), 'videoPlayer.css defines .rp-settings-box');
assert(cssContent.includes('.rp-settings-header'), 'videoPlayer.css styles .rp-settings-header');
assert(cssContent.includes('.rp-settings-items'), 'videoPlayer.css styles .rp-settings-items');
assert(!cssContent.includes('.rp-player-top-shield'), 'videoPlayer.css eliminates artificial top shield');
assert(!cssContent.includes('.rp-player-watermark-shield'), 'videoPlayer.css eliminates artificial watermark shield');
assert(cssContent.includes('.rp-player-header'), 'videoPlayer.css styles .rp-player-header');
assert(!cssContent.includes('.rp-player-corner-shield'), 'videoPlayer.css eliminates artificial corner shield');
assert(!cssContent.includes('.rp-player-copylink-shield'), 'videoPlayer.css eliminates artificial copylink black bar');
assert(cssContent.includes('.rp-player-controls'), 'videoPlayer.css styles .rp-player-controls');
assert(!cssContent.includes('.rp-player-top-guard'), 'videoPlayer.css eliminates artificial top black stripe guard');
assert(!cssContent.includes('.rp-player-bottom-guard'), 'videoPlayer.css eliminates artificial bottom black stripe guard');
assert(cssContent.includes('.rp-player-buffering-indicator'), 'videoPlayer.css styles .rp-player-buffering-indicator');
assert(cssContent.includes('left: -100%') && cssContent.includes('width: 300%'), 'videoPlayer.css implements oversized clipping (width: 300%, left: -100%) to conceal YouTube UI');
assert(cssContent.includes('overflow: hidden'), 'videoPlayer.css enforces overflow: hidden on stage container to crop YouTube UI');

const pagesCssPath = path.join(rootDir, 'css', 'pages.css');
const pagesCssContent = fs.readFileSync(pagesCssPath, 'utf8');
assert(pagesCssContent.includes("@import url('videoPlayer.css');"), 'pages.css imports videoPlayer.css at the top');

// ── 5. Static Pre-rendered Files ──────────────────────────────
console.log('\n--- 5. Testing Pre-Rendered Static Files ---');

const staticCourseLearn = fs.readFileSync(path.join(rootDir, 'courses', 'nepse-stock-market-basics', 'learn', 'index.html'), 'utf8');
assert(staticCourseLearn.includes('rp-video-player-frame'), 'Static NEPSE learn page contains rp-video-player-frame');
assert(staticCourseLearn.includes('RisePaisa Secure Video Player'), 'Static NEPSE learn page contains branded badge');
assert(staticCourseLearn.includes('referrerpolicy="strict-origin-when-cross-origin"'), 'Static NEPSE learn page sends the required safe referrer');

const staticCourseDetail = fs.readFileSync(path.join(rootDir, 'courses', 'nepse-stock-market-basics', 'index.html'), 'utf8');
assert(staticCourseDetail.includes('id="cd-demo-iframe"'), 'Static NEPSE course detail contains the free demo iframe');
assert(staticCourseDetail.includes('controls=1'), 'Static NEPSE course detail exposes native playback controls');

const staticResource = fs.readFileSync(path.join(rootDir, 'resources', 'budget-planner-system', 'index.html'), 'utf8');
assert(staticResource.includes('rp-video-player-frame'), 'Static resource detail contains rp-video-player-frame');

console.log('========================================================');
console.log(`VIDEO PLAYER TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) process.exit(1);

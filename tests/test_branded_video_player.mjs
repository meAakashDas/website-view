// ========================================================
// RISEPAISA BRANDED VIDEO PLAYER TEST SUITE
// Tests Video.js v10 component generation, YouTube embedding,
// 10s seek controls, responsive CSS scoping, and lifecycle.
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
  QUALITY_MAP,
  VIDEOJS_VERSION
} = await import('../js/components/videoPlayer.js');

const { renderCourseLearnPage } = await import('../js/pages/courseLearn.js');
const { renderCourseDetailPage } = await import('../js/pages/courseDetail.js');
const { renderResourceDetailPage } = await import('../js/pages/resourceDetail.js');

// ── 1. Component Markup & Anatomy ─────────────────────────────
console.log('--- 1. Testing Video.js v10 Branded Video Player Markup & Anatomy ---');

const sampleUrl = 'https://www.youtube-nocookie.com/embed/ziVeMxMF4e8?rel=0&modestbranding=1';
const playerHtml = createBrandedVideoPlayer({
  embedUrl: sampleUrl,
  title: 'Lesson 1: Introduction to NEPSE',
  iframeId: 'cl-video-iframe',
  containerId: 'cl-iframe-container'
});

assert(playerHtml.includes('class="rp-video-player-frame'), 'Renders rp-video-player-frame root container');
assert(playerHtml.includes('id="cl-iframe-container"'), 'Container ID preserved for backwards compatibility');
assert(playerHtml.includes('id="cl-video-iframe"'), 'Media element ID preserved for backwards compatibility');
assert(playerHtml.includes('class="cl-video-iframe'), 'Media element retains cl-video-iframe class for styling');
assert(!playerHtml.includes('rp-player-header'), 'Completely eliminated top header overlay');
assert(!playerHtml.includes('rp-player-badge'), 'Completely eliminated top branded floating badge');
assert(!playerHtml.includes('RisePaisa Secure Video Player'), 'Completely removed top badge text for unobstructed video frame');
assert(playerHtml.includes('<video-player'), 'Renders official Video.js v10 video-player element');
assert(playerHtml.includes('<video-skin'), 'Renders official Video.js v10 video-skin element');
assert(playerHtml.includes('<youtube-video'), 'Renders official Video.js v10 youtube-video element');
assert(playerHtml.includes('rp-player-seek-overlay'), 'Renders 10-second seek shortcuts overlay');
assert(playerHtml.includes('rp-btn-rewind'), 'Renders Seek Backward 10s button');
assert(playerHtml.includes('rp-btn-forward'), 'Renders Seek Forward 10s button');
assert(playerHtml.includes('rp-btn-rewind-10'), 'Supports 10s rewind shortcut');
assert(playerHtml.includes('rp-btn-forward-10'), 'Supports 10s forward shortcut');
assert(!playerHtml.includes('2160p'), 'Never hardcodes 4K/2160p in template markup');
assert(!playerHtml.includes('1440p'), 'Never hardcodes 1440p in template markup');
assert(QUALITY_MAP.hd2160 === '4K', 'QUALITY_MAP maps hd2160 to 4K');
assert(QUALITY_MAP.hd1440 === '1440p', 'QUALITY_MAP maps hd1440 to 1440p');
assert(QUALITY_MAP.hd1080 === '1080p', 'QUALITY_MAP maps hd1080 to 1080p');
assert(QUALITY_MAP.hd720 === '720p', 'QUALITY_MAP maps hd720 to 720p');
assert(QUALITY_MAP.auto === 'Auto', 'QUALITY_MAP maps auto to Auto');
assert(!playerHtml.includes('rp-player-top-shield'), 'Eliminated artificial top shield overlay');
assert(!playerHtml.includes('rp-player-watermark-shield'), 'Eliminated artificial watermark shield overlay');
assert(!playerHtml.includes('rp-player-corner-shield'), 'Eliminated artificial corner shield');
assert(!playerHtml.includes('rp-player-copylink-shield'), 'Eliminated artificial copylink black bar');
assert(playerHtml.includes('referrerpolicy="strict-origin-when-cross-origin"'), 'Provides YouTube with a safe origin referrer for playback');
assert(!playerHtml.includes('rp-player-top-guard'), 'Eliminated artificial top black stripe guard');
assert(!playerHtml.includes('rp-player-bottom-guard'), 'Eliminated artificial bottom black stripe guard');

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
assert(vpSrc.includes("VIDEOJS_VERSION = '10.2.0'"), 'videoPlayer.js references official Video.js v10');
assert(vpSrc.includes('ensureVideoJsV10'), 'videoPlayer.js implements Video.js v10 runtime bootstrapper');
assert(vpSrc.includes('isDestroyed'), 'videoPlayer.js guards async resolution against zombie players');
assert(vpSrc.includes('getAvailableQualityLevels'), 'videoPlayer.js provides quality inspection API');
assert(vpSrc.includes('getPlaybackQuality'), 'videoPlayer.js provides playback quality query API');
assert(vpSrc.includes('playbackRate'), 'videoPlayer.js provides playback rate control');

const clSrc = fs.readFileSync(path.join(rootDir, 'js', 'pages', 'courseLearn.js'), 'utf8');
assert(clSrc.includes('activePlayerLessonId'), 'courseLearn.js tracks activePlayerLessonId to prevent duplicate player instances');
const courseDetailSrc = fs.readFileSync(path.join(rootDir, 'js', 'pages', 'courseDetail.js'), 'utf8');
assert(courseDetailSrc.includes("effectiveSlug !== 'nepse-stock-market-basics'"), 'Course detail preserves the verified NEPSE free demo instead of replacing it with the broken live override');
assert(courseDetailSrc.includes('createBrandedVideoPlayer'), 'Course detail reuses createBrandedVideoPlayer for custom demo playback');
assert(courseDetailSrc.includes('initBrandedVideoPlayer'), 'Course detail initializes custom branded player controller');

// ── 3. Page Integrations (Course Learn, Course Detail, Resource)
console.log('\n--- 3. Testing Global Page Integrations ---');

// NEPSE Course Learn (Free Preview Lesson 1)
const learnHtml = renderCourseLearnPage('nepse-stock-market-basics');
assert(learnHtml.includes('rp-video-player-frame'), 'Course Learn renders rp-video-player-frame');
assert(!learnHtml.includes('rp-player-header'), 'Course Learn eliminates top header overlay');
assert(!learnHtml.includes('RisePaisa Secure Video Player'), 'Course Learn eliminates top branded badge for clear video frame');
assert(learnHtml.includes('id="cl-video-iframe"'), 'Course Learn retains #cl-video-iframe element');
assert(learnHtml.includes('video-player'), 'Course Learn uses Video.js v10 video-player element');

// NEPSE Course Detail (Demo Video)
const courseDetailHtml = renderCourseDetailPage('nepse-stock-market-basics');
assert(courseDetailHtml.includes('id="cd-demo-iframe"'), 'Course Detail renders the free demo iframe');
assert(courseDetailHtml.includes('rp-video-player-frame'), 'Course Detail renders rp-video-player-frame');
assert(!courseDetailHtml.includes('rp-player-header'), 'Course Detail eliminates top header overlay');
assert(!courseDetailHtml.includes('RisePaisa Secure Video Player'), 'Course Detail eliminates top branded badge for clear video frame');
assert(courseDetailHtml.includes('ziVeMxMF4e8'), 'Course Detail uses the verified playable NEPSE demo video');
assert(courseDetailHtml.includes('referrerpolicy="strict-origin-when-cross-origin"'), 'Course Detail supplies YouTube a safe referrer');
assert(courseDetailHtml.includes('data-rp-player="true"'), 'Course Detail free demo reuses custom branded player component');

// Resource Detail Preview Video
const resourceHtml = renderResourceDetailPage('budget-planner-system');
assert(resourceHtml.includes('rp-video-player-frame'), 'Resource Detail preview video uses rp-video-player-frame');
assert(!resourceHtml.includes('RisePaisa Secure Video Player'), 'Resource Detail eliminates branded badge for clear video frame');

// ── 4. CSS Scoping & Isolation ────────────────────────────────
console.log('\n--- 4. Testing CSS Rules & Scoping ---');

const cssPath = path.join(rootDir, 'css', 'videoPlayer.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

assert(cssContent.includes('.rp-video-player-frame'), 'videoPlayer.css defines .rp-video-player-frame');
assert(!cssContent.includes('.rp-player-badge'), 'videoPlayer.css eliminates .rp-player-badge');
assert(cssContent.includes('aspect-ratio: 16 / 9'), 'videoPlayer.css enforces 16:9 aspect ratio');
assert(cssContent.includes('@media (max-width: 640px)'), 'videoPlayer.css includes mobile responsive rules');
assert(cssContent.includes('.rp-controls-hidden'), 'videoPlayer.css supports auto-hide controls');
assert(!cssContent.includes('position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;'), 'No global fixed fullscreen bleed');
assert(!cssContent.includes('overflow: hidden') || cssContent.includes('.rp-video-player-frame'), 'overflow: hidden is strictly scoped to player containers');
assert(!cssContent.includes('.rp-player-header'), 'videoPlayer.css eliminates .rp-player-header');
assert(!cssContent.includes('.rp-player-top-shield'), 'videoPlayer.css eliminates artificial top shield');
assert(!cssContent.includes('.rp-player-watermark-shield'), 'videoPlayer.css eliminates artificial watermark shield');
assert(!cssContent.includes('.rp-player-corner-shield'), 'videoPlayer.css eliminates artificial corner shield');
assert(!cssContent.includes('.rp-player-copylink-shield'), 'videoPlayer.css eliminates artificial copylink black bar');
assert(cssContent.includes('.rp-player-seek-overlay'), 'videoPlayer.css styles .rp-player-seek-overlay');
assert(cssContent.includes('.rp-seek-btn'), 'videoPlayer.css styles .rp-seek-btn');
assert(!cssContent.includes('.rp-player-top-guard'), 'videoPlayer.css eliminates artificial top black stripe guard');
assert(!cssContent.includes('.rp-player-bottom-guard'), 'videoPlayer.css eliminates artificial bottom black stripe guard');
assert(cssContent.includes('@import url('), 'videoPlayer.css imports official Video.js v10 skin styles');

const pagesCssPath = path.join(rootDir, 'css', 'pages.css');
const pagesCssContent = fs.readFileSync(pagesCssPath, 'utf8');
assert(pagesCssContent.includes("@import url('videoPlayer.css');"), 'pages.css imports videoPlayer.css at the top');

// ── 5. Static Pre-rendered Files ──────────────────────────────
console.log('\n--- 5. Testing Pre-Rendered Static Files ---');

const staticCourseLearn = fs.readFileSync(path.join(rootDir, 'courses', 'nepse-stock-market-basics', 'learn', 'index.html'), 'utf8');
assert(staticCourseLearn.includes('rp-video-player-frame'), 'Static NEPSE learn page contains rp-video-player-frame');
assert(!staticCourseLearn.includes('RisePaisa Secure Video Player'), 'Static NEPSE learn page does not contain top badge');
assert(staticCourseLearn.includes('referrerpolicy="strict-origin-when-cross-origin"'), 'Static NEPSE learn page sends the required safe referrer');

const staticCourseDetail = fs.readFileSync(path.join(rootDir, 'courses', 'nepse-stock-market-basics', 'index.html'), 'utf8');
assert(staticCourseDetail.includes('id="cd-demo-iframe"'), 'Static NEPSE course detail contains the free demo iframe');
assert(staticCourseDetail.includes('rp-video-player-frame'), 'Static NEPSE course detail contains rp-video-player-frame');
assert(!staticCourseDetail.includes('RisePaisa Secure Video Player'), 'Static NEPSE course detail does not contain top badge');

const staticResource = fs.readFileSync(path.join(rootDir, 'resources', 'budget-planner-system', 'index.html'), 'utf8');
assert(staticResource.includes('rp-video-player-frame'), 'Static resource detail contains rp-video-player-frame');
assert(!staticResource.includes('RisePaisa Secure Video Player'), 'Static resource detail does not contain top badge');

console.log('========================================================');
console.log(`VIDEO PLAYER TEST RESULTS: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
console.log('========================================================\n');

if (failedTests > 0) process.exit(1);

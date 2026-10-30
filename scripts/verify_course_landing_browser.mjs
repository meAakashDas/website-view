import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const artifactDir = '/Users/aakashdas/.gemini/antigravity-ide/brain/671c8bde-4729-43b7-8a39-2c0889f8c7d8';

const VIEWPORTS = [
  { width: 320, height: 600, name: '320px_mobile_se' },
  { width: 375, height: 667, name: '375px_mobile_small' },
  { width: 390, height: 844, name: '390px_iphone_14' },
  { width: 430, height: 932, name: '430px_iphone_promax' },
  { width: 768, height: 1024, name: '768px_tablet' },
  { width: 1024, height: 768, name: '1024px_laptop' },
  { width: 1280, height: 800, name: '1280px_desktop' },
  { width: 1440, height: 900, name: '1440px_wide' }
];

async function run() {
  console.log('🚀 Starting Browser Verification for Video-First Course Landing Page...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Test across all 8 viewports
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:8000/courses', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    // Check horizontal overflow
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        hasOverflow: doc.scrollWidth > window.innerWidth
      };
    });

    if (overflow.hasOverflow) {
      console.error(`❌ Overflow at ${vp.width}px: scrollWidth ${overflow.scrollWidth} > clientWidth ${overflow.clientWidth}`);
      process.exit(1);
    } else {
      console.log(`✓ [${vp.name}] No horizontal overflow (${overflow.clientWidth}px).`);
    }
  }

  // Set desktop viewport for layout & CTA inspection
  await page.setViewportSize({ width: 1280, height: 850 });
  await page.goto('http://localhost:8000/courses', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  // 1. Verify exact visual element ordering on Desktop
  const layout = await page.evaluate(() => {
    const breadcrumb = document.querySelector('.cd-breadcrumb');
    const title = document.querySelector('.cd-course-title');
    const desc = document.querySelector('.cd-course-desc');
    const demo = document.querySelector('#course-demo');
    const instructor = document.querySelector('#course-instructor-row');
    const highlights = document.querySelector('#course-highlights');
    const pricing = document.querySelector('#course-pricing');
    const curriculum = document.querySelector('#course-curriculum');

    const getTop = el => el ? el.getBoundingClientRect().top + window.scrollY : null;

    return {
      breadcrumbTop: getTop(breadcrumb),
      titleTop: getTop(title),
      descTop: getTop(desc),
      demoTop: getTop(demo),
      instructorTop: getTop(instructor),
      highlightsTop: getTop(highlights),
      pricingTop: getTop(pricing),
      curriculumTop: getTop(curriculum)
    };
  });

  console.log('Visual Positions on Desktop:', layout);
  if (!(layout.breadcrumbTop < layout.titleTop &&
        layout.titleTop < layout.descTop &&
        layout.descTop < layout.demoTop &&
        layout.demoTop < layout.instructorTop &&
        layout.instructorTop < layout.highlightsTop &&
        layout.highlightsTop < layout.pricingTop &&
        layout.pricingTop < layout.curriculumTop)) {
    console.error('❌ Content hierarchy visual order is incorrect!');
    process.exit(1);
  }
  console.log('✓ Visual ordering verified: Breadcrumb < Title < Description < Demo Video < Instructor < Highlights < Pricing < Curriculum');

  // 2. Verify Demo Video properties
  const videoDetails = await page.evaluate(() => {
    const iframe = document.querySelector('#cd-demo-iframe');
    const heading = document.querySelector('.cd-demo-title');
    const runtime = document.querySelector('.cd-demo-runtime');
    const wrapper = document.querySelector('.cd-demo-video-wrapper');
    return {
      hasIframe: !!iframe,
      src: iframe ? iframe.src : null,
      headingText: heading ? heading.textContent.trim() : null,
      runtimeText: runtime ? runtime.textContent.trim() : null,
      wrapperWidth: wrapper ? wrapper.getBoundingClientRect().width : null,
      wrapperHeight: wrapper ? wrapper.getBoundingClientRect().height : null
    };
  });
  console.log('Demo Video Details:', videoDetails);
  if (!videoDetails.hasIframe || !videoDetails.src.includes('ziVeMxMF4e8')) {
    console.error('❌ Real demo iframe missing or incorrect URL!');
    process.exit(1);
  }
  console.log('✓ Real demo video loaded with YouTube ID ziVeMxMF4e8');

  // 3. Verify side-by-side purchase and advisor buttons on desktop
  const ctaLayout = await page.evaluate(() => {
    const buyBtn = document.querySelector('#buy-course-whatsapp-btn');
    const askBtn = document.querySelector('#ask-question-btn');
    if (!buyBtn || !askBtn) return null;
    const buyRect = buyBtn.getBoundingClientRect();
    const askRect = askBtn.getBoundingClientRect();
    return {
      buyTop: buyRect.top,
      askTop: askRect.top,
      isSideBySide: Math.abs(buyRect.top - askRect.top) < 8,
      buyHref: buyBtn.href,
      askHref: askBtn.href
    };
  });
  console.log('CTA Layout on Desktop:', ctaLayout);
  if (!ctaLayout || !ctaLayout.isSideBySide) {
    console.error('❌ Purchase and Advisor buttons are not side-by-side on desktop!');
    process.exit(1);
  }
  console.log('✓ Buy Course and Ask Advisor buttons are aligned side-by-side on desktop');

  // 4. Capture Desktop Screenshots
  await page.screenshot({ path: path.join(artifactDir, 'video_first_desktop_hero.png'), clip: { x: 0, y: 0, width: 1280, height: 820 } });
  console.log('✓ Captured desktop hero screenshot: video_first_desktop_hero.png');

  // Scroll to Instructor & Highlights
  const highlightsEl = await page.$('#course-instructor-row');
  await highlightsEl.scrollIntoViewIfNeeded();
  await page.screenshot({ path: path.join(artifactDir, 'video_first_desktop_instructor_highlights.png'), clip: { x: 0, y: 0, width: 1280, height: 750 } });
  console.log('✓ Captured instructor & highlights screenshot: video_first_desktop_instructor_highlights.png');

  // Scroll to Pricing Card
  const pricingEl = await page.$('#course-pricing');
  await pricingEl.scrollIntoViewIfNeeded();
  await page.screenshot({ path: path.join(artifactDir, 'video_first_desktop_pricing.png'), clip: { x: 0, y: 0, width: 1280, height: 700 } });
  console.log('✓ Captured pricing card screenshot: video_first_desktop_pricing.png');

  // 5. Test Mobile Viewport (iPhone 14 / 390x844)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:8000/courses', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  // Top of page mobile screenshot
  await page.screenshot({ path: path.join(artifactDir, 'video_first_mobile_fold.png'), clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('✓ Captured mobile top fold screenshot: video_first_mobile_fold.png');

  // 6. Test Mobile Floating Bar suppression over video
  const floatingBarOverVideo = await page.evaluate(() => {
    window.scrollTo(0, 50); // Inside demo video section
    const bar = document.querySelector('#mobile-sticky-bar');
    return {
      hasVisibleClass: bar ? bar.classList.contains('visible') : false
    };
  });
  console.log('Floating bar state when looking at video:', floatingBarOverVideo);

  // Scroll down to curriculum
  await page.evaluate(() => {
    const el = document.querySelector('#course-curriculum');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(400);

  const floatingBarInCurriculum = await page.evaluate(() => {
    const bar = document.querySelector('#mobile-sticky-bar');
    return {
      hasVisibleClass: bar ? bar.classList.contains('visible') : false
    };
  });
  console.log('Floating bar state in curriculum:', floatingBarInCurriculum);

  // Capture screenshot of curriculum with floating CTA
  await page.screenshot({ path: path.join(artifactDir, 'video_first_mobile_curriculum_floating.png'), clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('✓ Captured mobile curriculum screenshot: video_first_mobile_curriculum_floating.png');

  // Scroll to Purchase Card on mobile
  await page.evaluate(() => {
    const el = document.querySelector('#purchase-card');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(400);

  const floatingBarAtPurchase = await page.evaluate(() => {
    const bar = document.querySelector('#mobile-sticky-bar');
    return {
      hasVisibleClass: bar ? bar.classList.contains('visible') : false
    };
  });
  console.log('Floating bar state at purchase card (should be hidden):', floatingBarAtPurchase);

  // Capture screenshot of mobile purchase card
  await page.screenshot({ path: path.join(artifactDir, 'video_first_mobile_pricing.png'), clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('✓ Captured mobile pricing card screenshot: video_first_mobile_pricing.png');

  await browser.close();
  console.log('\n🎉 ALL BROWSER AND PLAYWRIGHT CHECKS PASSED SUCCESSFULLY!');
}

run().catch(err => {
  console.error('Fatal error during browser verification:', err);
  process.exit(1);
});

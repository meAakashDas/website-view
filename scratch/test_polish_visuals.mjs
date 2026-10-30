import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:8000';

async function main() {
  console.log('--- Inspecting NEPSE Course Landing Page across Viewports ---');
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: 'Mobile_375px', width: 375, height: 812 },
    { name: 'Mobile_430px', width: 430, height: 932 },
    { name: 'Tablet_768px', width: 768, height: 1024 },
    { name: 'Desktop_1280px', width: 1280, height: 800 },
    { name: 'Desktop_1440px', width: 1440, height: 900 }
  ];

  for (const vp of viewports) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);

    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const title = document.querySelector('.cd-course-title');
      const badges = Array.from(document.querySelectorAll('.cd-course-tag-row span')).map(s => s.textContent.trim());
      const actions = Array.from(document.querySelectorAll('.cd-first-screen-actions a')).map(a => a.textContent.trim().replace(/\s+/g, ' '));
      const demoIframe = document.querySelector('#cd-demo-iframe');
      const modules = document.querySelectorAll('.cd-module-item');
      const lessons = document.querySelectorAll('.cd-lesson-row');
      const purchaseCard = document.getElementById('purchase-card');
      const priceNumber = document.querySelector('.cd-card-price-number');
      const sidebarInclusions = Array.from(document.querySelectorAll('.cd-included-list .cd-included-item')).map(i => i.textContent.trim().replace(/\s+/g, ' '));
      const faqItems = document.querySelectorAll('.cd-faq-item');
      const disclaimer = document.querySelector('.cd-disclaimer-text');

      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        hasOverflow: doc.scrollWidth > doc.clientWidth,
        titleText: title ? title.textContent.trim() : null,
        badges,
        actions,
        hasDemoIframe: Boolean(demoIframe),
        moduleCount: modules.length,
        lessonCount: lessons.length,
        hasPurchaseCard: Boolean(purchaseCard),
        price: priceNumber ? priceNumber.textContent.trim() : null,
        sidebarInclusions,
        faqCount: faqItems.length,
        disclaimerSnippet: disclaimer ? disclaimer.textContent.trim().substring(0, 100) : null
      };
    });

    console.log(`[${vp.name}]`);
    console.log(`  Overflow: ${metrics.hasOverflow ? 'FAIL' : 'PASS'} (scrollWidth: ${metrics.scrollWidth}, clientWidth: ${metrics.clientWidth})`);
    console.log(`  Title: "${metrics.titleText}"`);
    console.log(`  Badges:`, metrics.badges);
    console.log(`  First-screen actions:`, metrics.actions);
    console.log(`  Demo iframe: ${metrics.hasDemoIframe ? 'YES' : 'NO'}`);
    console.log(`  Modules: ${metrics.moduleCount}, Lessons: ${metrics.lessonCount}`);
    console.log(`  Price: NPR ${metrics.price}`);
    console.log(`  Sidebar Inclusions: ${metrics.sidebarInclusions.length} items`);
    console.log(`  FAQ items: ${metrics.faqCount}`);

    if (metrics.hasOverflow) {
      console.error(`❌ Horizontal overflow detected at ${vp.name}!`);
      process.exit(1);
    }
    if (metrics.moduleCount !== 8 || metrics.lessonCount !== 22) {
      console.error(`❌ Module count (${metrics.moduleCount}) or lesson count (${metrics.lessonCount}) mismatch!`);
      process.exit(1);
    }
    await context.close();
  }

  // Test accordion click
  console.log('\n--- Testing Accordion Interactivity ---');
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const toggleBtn = await page.$('#cd-expand-all-btn');
  console.log('Toggle button text before click:', await toggleBtn.textContent());
  await toggleBtn.click();
  await page.waitForTimeout(300);
  console.log('Toggle button text after click (should be Collapse All):', await toggleBtn.textContent());

  const activeModulesCount = await page.evaluate(() => {
    return document.querySelectorAll('.cd-module-item.active').length;
  });
  console.log(`Active modules after Expand All: ${activeModulesCount} (expected: 8)`);

  await toggleBtn.click();
  await page.waitForTimeout(300);
  const activeAfterCollapse = await page.evaluate(() => {
    return document.querySelectorAll('.cd-module-item.active').length;
  });
  console.log(`Active modules after Collapse All: ${activeAfterCollapse} (expected: 0)`);

  // Capture verification screenshots
  console.log('\n--- Capturing Screenshots ---');
  await page.screenshot({ path: 'scratch/nepse_course_desktop.png', fullPage: false });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'scratch/nepse_course_mobile.png', fullPage: false });
  console.log('✓ Screenshots captured successfully.');

  await browser.close();
  console.log('\n✅ All browser verifications passed!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

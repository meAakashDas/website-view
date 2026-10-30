// ========================================================
// BROWSER TEST: FAQ ACCORDION INTERACTIVITY & RESPONSIVENESS
// Tests real DOM events, click toggles, keyboard navigation,
// single-expanded invariant, and responsive mobile rendering.
// ========================================================
import { chromium } from 'playwright';
import { spawn } from 'child_process';

async function main() {
  console.log('🚀 Starting local HTTP server on port 8000...');
  const server = spawn('python3', ['-m', 'http.server', '8000'], {
    stdio: 'ignore'
  });

  // Give server time to bind
  await new Promise(r => setTimeout(r, 600));

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1280, height: 900 }
    });
    const page = await context.newPage();

    console.log('🌐 Navigating to http://localhost:8000/courses/nepse-stock-market-basics ...');
    await page.goto('http://localhost:8000/courses/nepse-stock-market-basics', {
      waitUntil: 'domcontentloaded'
    });
    await page.waitForTimeout(400);

    // 1. Verify all 5 FAQ items collapsed by default
    console.log('--- 1. Testing Initial Collapsed State ---');
    const items = await page.$$('#course-faq-accordion .cd-faq-item');
    console.log(`Found ${items.length} FAQ items`);
    if (items.length !== 5) throw new Error(`Expected 5 FAQ items, found ${items.length}`);

    for (let i = 0; i < items.length; i++) {
      const header = await items[i].$('.cd-faq-header');
      const expanded = await header.getAttribute('aria-expanded');
      const hasActive = await items[i].evaluate(el => el.classList.contains('active'));
      const isVisible = await items[i].$('.cd-faq-collapse').then(c => c.evaluate(el => {
        const style = window.getComputedStyle(el);
        return style.maxHeight !== '0px' && style.opacity !== '0';
      }));

      if (expanded !== 'false' || hasActive || isVisible) {
        throw new Error(`Item ${i} was not collapsed initially! expanded=${expanded}, hasActive=${hasActive}, isVisible=${isVisible}`);
      }
    }
    console.log('  ✓ All 5 FAQ items are collapsed by default');

    // 2. Click Item 0 to Expand
    console.log('\n--- 2. Testing Click to Expand ---');
    const header0 = await items[0].$('.cd-faq-header');
    await header0.click();
    await page.waitForTimeout(300);

    let expanded0 = await header0.getAttribute('aria-expanded');
    let hasActive0 = await items[0].evaluate(el => el.classList.contains('active'));
    let ansHeight0 = await items[0].$('.cd-faq-collapse').then(c => c.evaluate(el => el.clientHeight));
    if (expanded0 !== 'true' || !hasActive0 || ansHeight0 <= 0) {
      throw new Error(`Item 0 failed to expand on click! expanded=${expanded0}, active=${hasActive0}, height=${ansHeight0}`);
    }
    console.log(`  ✓ Item 0 expanded successfully (height: ${ansHeight0}px, aria-expanded="true")`);

    // 3. Click Item 0 again to Collapse
    console.log('\n--- 3. Testing Click Same Question to Collapse ---');
    await header0.click();
    await page.waitForTimeout(300);

    expanded0 = await header0.getAttribute('aria-expanded');
    hasActive0 = await items[0].evaluate(el => el.classList.contains('active'));
    let ansHeight0Closed = await items[0].$('.cd-faq-collapse').then(c => c.evaluate(el => el.clientHeight));
    if (expanded0 !== 'false' || hasActive0 || ansHeight0Closed !== 0) {
      throw new Error(`Item 0 failed to collapse on second click! expanded=${expanded0}, active=${hasActive0}, height=${ansHeight0Closed}`);
    }
    console.log(`  ✓ Item 0 collapsed on second click (height: ${ansHeight0Closed}px, aria-expanded="false")`);

    // 4. Open Item 1, then Open Item 2 -> Only Item 2 should be open
    console.log('\n--- 4. Testing Single Expanded Invariant (Accordion Behavior) ---');
    const header1 = await items[1].$('.cd-faq-header');
    await header1.click();
    await page.waitForTimeout(300);

    const header2 = await items[2].$('.cd-faq-header');
    await header2.click();
    await page.waitForTimeout(300);

    const expanded1After = await header1.getAttribute('aria-expanded');
    const active1After = await items[1].evaluate(el => el.classList.contains('active'));
    const expanded2After = await header2.getAttribute('aria-expanded');
    const active2After = await items[2].evaluate(el => el.classList.contains('active'));

    if (expanded1After !== 'false' || active1After) {
      throw new Error(`Item 1 should have closed when Item 2 opened! expanded1=${expanded1After}`);
    }
    if (expanded2After !== 'true' || !active2After) {
      throw new Error(`Item 2 should be open! expanded2=${expanded2After}`);
    }
    console.log('  ✓ Opening Item 2 automatically closed Item 1 (Single expanded invariant held)');

    // 5. Test Keyboard Accessibility (Enter key on Item 3)
    console.log('\n--- 5. Testing Keyboard Accessibility ---');
    const header3 = await items[3].$('.cd-faq-header');
    await header3.focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);

    const expanded3 = await header3.getAttribute('aria-expanded');
    const active3 = await items[3].evaluate(el => el.classList.contains('active'));
    if (expanded3 !== 'true' || !active3) {
      throw new Error('Item 3 failed to open with Enter key press!');
    }
    console.log('  ✓ Item 3 opened via Enter keyboard navigation');

    // 6. Test Refund Link inside Item 3
    console.log('\n--- 6. Testing Refund Link Route ---');
    const refundLink = await items[3].$('.cd-faq-a a');
    const href = await refundLink.getAttribute('href');
    if (href !== '/refund-policy') {
      throw new Error(`Refund link destination was ${href}, expected /refund-policy`);
    }
    console.log(`  ✓ Refund Policy link href is verified: ${href}`);

    // 7. Test Mobile Viewport (iPhone 14 / 390px)
    console.log('\n--- 7. Testing Mobile Viewport (390px) ---');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(200);

    // Check horizontal overflow
    const docWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const vpWidth = await page.evaluate(() => window.innerWidth);
    if (docWidth > vpWidth) {
      throw new Error(`Horizontal overflow detected! scrollWidth=${docWidth}, innerWidth=${vpWidth}`);
    }
    console.log(`  ✓ Mobile viewport has zero horizontal overflow (scrollWidth: ${docWidth}px, innerWidth: ${vpWidth}px)`);

    // Verify item 4 click on mobile
    const header4 = await items[4].$('.cd-faq-header');
    await header4.click();
    await page.waitForTimeout(300);
    const expanded4 = await header4.getAttribute('aria-expanded');
    if (expanded4 !== 'true') {
      throw new Error('Item 4 failed to open on mobile click!');
    }
    console.log('  ✓ Item 4 expands cleanly on mobile');

    // Capture screenshot for visual verification
    await page.screenshot({ path: 'scratch/course_faq_mobile.png', fullPage: false });
    console.log('  ✓ Screenshot saved to scratch/course_faq_mobile.png');

    console.log('\n======================================================');
    console.log('ALL BROWSER FAQ TESTS PASSED SUCCESSFULLY! (7/7)');
    console.log('======================================================');
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch(err => {
  console.error('Browser Test Failed:', err);
  process.exit(1);
});


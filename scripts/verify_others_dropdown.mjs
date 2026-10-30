import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:8000';

async function testOthersDropdown() {
  console.log('======================================================');
  console.log('TESTING RISEPAISA OTHERS DROPDOWN (DESKTOP & MOBILE)');
  console.log('======================================================');

  const browser = await chromium.launch({ headless: true });
  let allPassed = true;

  const testPassed = (msg) => console.log(`  ✓ ${msg}`);
  const testFailed = (msg, err) => {
    console.error(`  ✗ FAIL: ${msg}`, err || '');
    allPassed = false;
  };

  try {
    const context = await browser.newContext();
    const page = await context.newPage();

    // ------------------------------------------------------------------------
    // 1. DESKTOP TEST (1440px)
    // ------------------------------------------------------------------------
    console.log('\n--- 1. Desktop Direct Calculators Link (1440px) ---');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(200);

    const desktopState = await page.evaluate(() => {
      const desktopNav = document.querySelector('.nav-links');
      const calcLinks = Array.from(desktopNav?.querySelectorAll('a[href="/calculators"]') || []);
      const othersTrigger = document.getElementById('nav-others-trigger');
      const othersMenu = document.getElementById('nav-others-menu');
      const allDesktopLinkTexts = Array.from(desktopNav?.querySelectorAll('a.nav-link') || []).map(a => a.textContent.trim());

      return {
        calcLinkCount: calcLinks.length,
        hasOthersTrigger: Boolean(othersTrigger),
        hasOthersMenu: Boolean(othersMenu),
        allDesktopLinkTexts,
        calcLinkText: calcLinks[0]?.textContent.trim(),
        calcLinkHref: calcLinks[0]?.getAttribute('href')
      };
    });

    console.log('Desktop navigation state:', desktopState);

    if (desktopState.calcLinkCount === 1 && desktopState.calcLinkText === 'Calculators' && desktopState.calcLinkHref === '/calculators') {
      testPassed('Desktop nav has exactly 1 direct Calculators link pointing to /calculators');
    } else {
      testFailed('Desktop nav Calculators link incorrect', desktopState);
    }

    if (!desktopState.hasOthersTrigger && !desktopState.hasOthersMenu) {
      testPassed('Desktop Others dropdown trigger and menu are completely removed');
    } else {
      testFailed('Desktop Others dropdown elements still exist in DOM', desktopState);
    }

    if (!desktopState.allDesktopLinkTexts.includes('Others')) {
      testPassed('Desktop navigation label "Others" is successfully replaced with "Calculators"');
    } else {
      testFailed('Desktop navigation still contains "Others" label');
    }

    // Test clicking Calculators direct link navigates to /calculators
    const calcLink = await page.$('.nav-links a[href="/calculators"]');
    await calcLink.click();
    await page.waitForTimeout(400);

    const onCalculators = await page.evaluate(() => window.location.pathname.startsWith('/calculators'));
    if (onCalculators) {
      testPassed('Clicking Calculators navigates directly to /calculators');
    } else {
      testFailed('Clicking Calculators did not navigate to /calculators');
    }

    // ------------------------------------------------------------------------
    // 2. MOBILE TEST (390px iPhone)
    // ------------------------------------------------------------------------
    console.log('\n--- 2. Mobile Others Dropdown (390px) ---');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(200);

    const mobileOthersBtn = await page.$('#mobile-nav-others');
    if (!mobileOthersBtn) throw new Error('#mobile-nav-others not found');

    // CRITICAL ACCEPTANCE CRITERIA: Tapping Others opens the 2-option dropdown and NEVER opens the sidebar
    await mobileOthersBtn.click();
    await page.waitForTimeout(250);

    const mobileDropdownState = await page.evaluate(() => {
      const wrapper = document.getElementById('mobile-others-wrapper');
      const trigger = document.getElementById('mobile-nav-others');
      const menu = document.getElementById('mobile-others-menu');
      const mobileDrawer = document.getElementById('mobile-menu');
      const drawerOpen = mobileDrawer?.classList.contains('open');

      const items = Array.from(menu ? menu.querySelectorAll('.nav-dropdown-item') : []);
      const itemTexts = items.map(el => el.textContent.trim());
      const itemHrefs = items.map(el => el.getAttribute('href'));
      const isVisible = menu && window.getComputedStyle(menu).visibility === 'visible' && window.getComputedStyle(menu).opacity === '1';

      return {
        isOpen: wrapper?.classList.contains('open'),
        ariaExpanded: trigger?.getAttribute('aria-expanded'),
        isVisible,
        drawerOpen,
        itemCount: items.length,
        itemTexts,
        itemHrefs
      };
    });

    // 1. Acceptance Criterion 1: Sidebar is NOT open
    if (!mobileDropdownState.drawerOpen) {
      testPassed('ACCEPTANCE CRITERIA MET: Clicking Others NEVER opens the hamburger sidebar / drawer');
    } else {
      testFailed('ACCEPTANCE CRITERIA FAILED: Clicking Others opened the mobile sidebar drawer!', mobileDropdownState);
    }

    // 2. Acceptance Criterion 2: 2-option dropdown opened directly below button
    if (mobileDropdownState.isOpen && mobileDropdownState.isVisible && mobileDropdownState.itemCount === 2) {
      testPassed(`Mobile dropdown opened with exactly 2 primary options: ${mobileDropdownState.itemTexts.join(', ')}`);
    } else {
      testFailed('Mobile dropdown failed to open with 2 items', mobileDropdownState);
    }

    if (mobileDropdownState.itemHrefs.includes('/learn') && mobileDropdownState.itemHrefs.includes('/calculators')) {
      testPassed('Mobile dropdown items point directly to /learn and /calculators');
    } else {
      testFailed('Mobile dropdown links incorrect', mobileDropdownState.itemHrefs);
    }

    // Test outside click on mobile
    await page.click('body', { position: { x: 50, y: 300 } });
    await page.waitForTimeout(350);

    const mobileClosedOnOutside = await page.evaluate(() => {
      const wrapper = document.getElementById('mobile-others-wrapper');
      return !wrapper?.classList.contains('open');
    });
    if (mobileClosedOnOutside) {
      testPassed('Mobile dropdown closes cleanly on outside tap');
    } else {
      testFailed('Mobile dropdown failed to close on outside tap');
    }

    // Test option click on mobile: navigates to /learn and closes dropdown without touching drawer
    await mobileOthersBtn.click();
    await page.waitForTimeout(250);
    const learnItem = await page.$('#mobile-others-menu a[href="/learn"]');
    await learnItem.click();
    await page.waitForTimeout(400);

    const onLearnPage = await page.evaluate(() => {
      const wrapper = document.getElementById('mobile-others-wrapper');
      const mobileDrawer = document.getElementById('mobile-menu');
      return window.location.pathname === '/learn' && !wrapper?.classList.contains('open') && !mobileDrawer?.classList.contains('open');
    });

    if (onLearnPage) {
      testPassed('Selecting Learn navigates to /learn, closes dropdown, and leaves sidebar closed');
    } else {
      testFailed('Mobile selection navigation or drawer state issue');
    }

    // ------------------------------------------------------------------------
    // 3. HAMBURGER MENU INDEPENDENCE TEST
    // ------------------------------------------------------------------------
    console.log('\n--- 3. Hamburger Menu Independence ---');
    // Click hamburger button (#nav-toggle)
    const hamburgerBtn = await page.$('#nav-toggle');
    if (!hamburgerBtn) throw new Error('#nav-toggle hamburger button not found');
    await hamburgerBtn.click();
    await page.waitForTimeout(300);

    const drawerOpened = await page.evaluate(() => {
      const mobileDrawer = document.getElementById('mobile-menu');
      const othersDropdown = document.getElementById('mobile-others-wrapper');
      return mobileDrawer?.classList.contains('open') && !othersDropdown?.classList.contains('open');
    });

    if (drawerOpened) {
      testPassed('Hamburger toggle opens the slide-out menu drawer independently (Others dropdown remains closed)');
    } else {
      testFailed('Hamburger menu drawer failed to open independently');
    }

    // Close drawer via close button
    await page.click('#mobile-menu-close');
    await page.waitForTimeout(300);

    // ------------------------------------------------------------------------
    // 4. VIEWPORT OVERFLOW CHECK (320px to 430px)
    // ------------------------------------------------------------------------
    console.log('\n--- 4. Dropdown Alignment & Overflow Check across Viewports ---');
    for (const w of [320, 360, 375, 390, 414, 430]) {
      await page.setViewportSize({ width: w, height: 750 });
      await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(100);

      // Open mobile dropdown
      await page.click('#mobile-nav-others');
      await page.waitForTimeout(200);

      const overflowCheck = await page.evaluate(() => {
        const menu = document.getElementById('mobile-others-menu');
        const rect = menu ? menu.getBoundingClientRect() : null;
        const hasHorizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;
        const fitsInViewport = rect ? (rect.left >= 0 && rect.right <= window.innerWidth + 1) : false;
        return { hasHorizontalOverflow, fitsInViewport, rect };
      });

      if (!overflowCheck.hasHorizontalOverflow && overflowCheck.fitsInViewport) {
        testPassed(`Viewport ${w}px: Dropdown positioned correctly without horizontal overflow`);
      } else {
        testFailed(`Viewport ${w}px overflow or alignment issue`, overflowCheck);
      }
    }

    console.log('\n======================================================');
    if (allPassed) {
      console.log('ALL OTHERS DROPDOWN TESTS PASSED SUCCESSFULLY!');
    } else {
      console.log('SOME OTHERS DROPDOWN TESTS FAILED.');
    }
    console.log('======================================================\n');

  } catch (err) {
    console.error('Fatal test error:', err);
    allPassed = false;
  } finally {
    await browser.close();
  }

  process.exit(allPassed ? 0 : 1);
}

testOthersDropdown();

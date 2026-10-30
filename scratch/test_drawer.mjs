import { chromium } from 'playwright';

async function testDrawer() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(async () => {
    const style = document.createElement('style');
    style.textContent = `
      .mobile-menu:not(.open) {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    const initial = {
      docScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      navScrollWidth: document.getElementById('navbar')?.scrollWidth
    };

    // Click toggle
    const toggle = document.getElementById('nav-toggle');
    toggle?.click();
    await new Promise(r => setTimeout(r, 100));

    const opened = {
      menuDisplay: window.getComputedStyle(document.getElementById('mobile-menu')).display,
      menuClass: document.getElementById('mobile-menu').className,
      menuRight: Math.round(document.getElementById('mobile-menu').getBoundingClientRect().right)
    };

    // Close menu
    const closeBtn = document.getElementById('mobile-menu-close');
    closeBtn?.click();
    await new Promise(r => setTimeout(r, 100));

    const closed = {
      menuDisplay: window.getComputedStyle(document.getElementById('mobile-menu')).display,
      navScrollWidth: document.getElementById('navbar')?.scrollWidth
    };

    return { initial, opened, closed };
  });

  console.log(JSON.stringify(res, null, 2));
  await browser.close();
}

testDrawer();

import { chromium } from 'playwright';

async function testFix320() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const applied = await page.evaluate(() => {
    // 1. Hide closed mobile menu
    const mm = document.getElementById('mobile-menu');
    if (mm) mm.style.display = 'none';

    // 2. Add narrow mobile responsive CSS adjustments
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 360px) {
        .container {
          padding-left: 10px !important;
          padding-right: 10px !important;
        }
        .rp-calc-wrapper {
          padding: 10px 8px !important;
        }
        .rp-calc-controls-card,
        .rp-calc-results-card {
          padding: 14px 10px !important;
          min-width: 0 !important;
        }
        .rp-calc-layout {
          grid-template-columns: minmax(0, 1fr) !important;
        }
        .rp-freq-switch {
          grid-template-columns: 1fr !important;
        }
        .rp-stat-card {
          padding: 14px 12px !important;
          min-width: 0 !important;
        }
      }
    `;
    document.head.appendChild(style);

    const doc = document.documentElement;
    const body = document.body;
    return {
      docScrollWidth: doc.scrollWidth,
      bodyScrollWidth: body.scrollWidth,
      clientWidth: doc.clientWidth,
      calcCardRight: Math.round(document.querySelector('#calc-pane-fdrd .rp-calc-controls-card').getBoundingClientRect().right)
    };
  });

  console.log('Result with 320px fixes applied:', applied);
  await browser.close();
}

testFix320();

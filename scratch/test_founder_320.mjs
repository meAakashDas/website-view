import { chromium } from 'playwright';

async function testFounder320() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/aakash-das`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const applied = await page.evaluate(() => {
    // 1. Hide closed mobile menu
    const mm = document.getElementById('mobile-menu');
    if (mm) mm.style.display = 'none';

    // 2. Add narrow mobile responsive CSS adjustments
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 480px) {
        .entity-fact-set {
          padding: var(--space-4) !important;
        }
        .entity-fact-list {
          grid-template-columns: 1fr !important;
          gap: 6px !important;
        }
        .entity-fact-list dt {
          font-size: 0.75rem !important;
          margin-top: 6px !important;
        }
        .entity-fact-list dt:first-child {
          margin-top: 0 !important;
        }
      }
      @media (max-width: 360px) {
        .container {
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
      }
    `;
    document.head.appendChild(style);

    const doc = document.documentElement;
    const body = document.body;
    const overflowing = [];
    document.querySelectorAll('*').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.right > 320.5) {
        overflowing.push({
          tag: el.tagName,
          id: el.id,
          cls: el.className,
          right: Math.round(r.right),
          width: Math.round(r.width)
        });
      }
    });

    return {
      docScrollWidth: doc.scrollWidth,
      bodyScrollWidth: body.scrollWidth,
      clientWidth: doc.clientWidth,
      overflowingCount: overflowing.length,
      overflowing
    };
  });

  console.log('Result for Founder Page at 320px:', applied);
  await browser.close();
}

testFounder320();

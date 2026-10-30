import { chromium } from 'playwright';

async function testSipRealtime() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://localhost:8000/calculators/sip`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);

  const res = await page.evaluate(async () => {
    const input = document.getElementById('sip-input-investment');
    const maturityEl = document.getElementById('sip-res-maturity');
    const before = maturityEl ? maturityEl.textContent.trim() : null;

    if (input) {
      input.value = '25000';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise(r => setTimeout(r, 150));
    }

    const after = maturityEl ? maturityEl.textContent.trim() : null;

    return {
      before,
      after,
      updated: before !== after
    };
  });

  console.log('SIP Realtime Recalculation Test:', res);
  await browser.close();
}

testSipRealtime();

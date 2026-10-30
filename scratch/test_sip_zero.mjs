import { chromium } from 'playwright';

async function testSipZeroInterest() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://localhost:8000/calculators/sip`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(300);

  const res = await page.evaluate(async () => {
    const rateInput = document.getElementById('sip-input-return');
    const maturityEl = document.getElementById('sip-res-maturity');
    const returnsEl = document.getElementById('sip-res-returns');

    if (rateInput) {
      rateInput.value = '0';
      rateInput.dispatchEvent(new Event('input', { bubbles: true }));
      rateInput.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise(r => setTimeout(r, 150));
    }

    return {
      maturity: maturityEl ? maturityEl.textContent.trim() : null,
      returns: returnsEl ? returnsEl.textContent.trim() : null
    };
  });

  console.log('SIP Zero Interest Result:', res);
  await browser.close();
}

testSipZeroInterest();

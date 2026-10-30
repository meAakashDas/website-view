import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:8000';

const CALCULATORS = [
  { slug: 'sip', name: 'SIP Calculator', testField: 'sip-amount-input', testVal: '15000' },
  { slug: 'emi', name: 'EMI Calculator', testField: 'emi-amount-input', testVal: '3500000' },
  { slug: 'loan', name: 'Loan Calculator', testField: 'emi-amount-input', testVal: '2000000' },
  { slug: 'home-loan', name: 'Home Loan Calculator', testField: 'emi-amount-input', testVal: '5000000' },
  { slug: 'personal-loan', name: 'Personal Loan Calculator', testField: 'emi-amount-input', testVal: '800000' },
  { slug: 'vehicle-loan', name: 'Vehicle Loan Calculator', testField: 'emi-amount-input', testVal: '2500000' },
  { slug: 'swp', name: 'SWP Calculator', testField: 'swp-investment-input', testVal: '8000000' },
  { slug: 'nepal-income-tax', name: 'Income Tax Calculator', testField: 'tax-income-input', testVal: '1800000' },
  { slug: 'nepse-share', name: 'NEPSE Share Calculator', testField: 'share-buy-price', testVal: '450' },
  { slug: 'fixed-deposit', name: 'Fixed Deposit Calculator', testField: 'fd-principal-input', testVal: '1000000' },
  { slug: 'retirement', name: 'Retirement Calculator', testField: 'ret-current-age-input', testVal: '32' },
  { slug: 'cagr', name: 'CAGR Calculator', testField: 'cagr-initial-input', testVal: '200000' },
  { slug: 'inflation', name: 'Inflation Calculator', testField: 'inf-current-amount-input', testVal: '100000' },
];

async function runDeepCalculatorAudit() {
  console.log('Starting Deep Financial Calculator Verification...\n');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const results = [];
  const errors = [];

  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  for (const calc of CALCULATORS) {
    await page.goto(`${BASE_URL}/calculators/${calc.slug}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    const calcResult = await page.evaluate(async (calc) => {
      // Find main stat values or results
      const statValues = Array.from(document.querySelectorAll('.rp-stat-value, .rp-calc-summary-val, .calc-summary-val')).map(el => el.textContent.trim());
      const hasNaN = statValues.some(v => v.includes('NaN') || v.includes('undefined'));
      
      // Test input modification if element exists
      let inputUpdated = false;
      const inputEl = document.getElementById(calc.testField) || document.querySelector(`input[name="${calc.testField}"]`);
      if (inputEl) {
        inputEl.value = calc.testVal;
        inputEl.dispatchEvent(new Event('input', { bubbles: true }));
        inputEl.dispatchEvent(new Event('change', { bubbles: true }));
        await new Promise(r => setTimeout(r, 150));
        inputUpdated = true;
      }

      const statValuesAfter = Array.from(document.querySelectorAll('.rp-stat-value, .rp-calc-summary-val, .calc-summary-val')).map(el => el.textContent.trim());
      const hasNaNAfter = statValuesAfter.some(v => v.includes('NaN') || v.includes('undefined'));

      return {
        statCount: statValues.length,
        initialValues: statValues.slice(0, 3),
        valuesAfter: statValuesAfter.slice(0, 3),
        hasNaN: hasNaN || hasNaNAfter,
        inputUpdated
      };
    }, calc);

    console.log(`✓ [${calc.name}] Stats: ${calcResult.statCount}, Updated: ${calcResult.inputUpdated}, Sample: ${JSON.stringify(calcResult.valuesAfter)}`);
    results.push({ name: calc.name, slug: calc.slug, ...calcResult });
  }

  console.log(`\nAll 13 calculator routes tested. Uncaught Errors: ${errors.length}`);
  if (errors.length > 0) {
    console.error('Errors encountered:', errors);
  }

  const anyNaN = results.filter(r => r.hasNaN);
  if (anyNaN.length > 0) {
    console.error('Calculators with NaN output:', anyNaN.map(c => c.name));
  } else {
    console.log('✓ Zero NaN or undefined values across all 13 calculators!');
  }

  await browser.close();
}

runDeepCalculatorAudit().catch(err => {
  console.error(err);
  process.exit(1);
});

import { chromium } from 'playwright';

async function testDirButtons() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://localhost:8000/calculators`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const btns = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.rp-dir-filter-btn')).map(b => ({
      cls: b.className,
      innerText: b.innerText,
      textContent: b.textContent.trim(),
      ariaLabel: b.getAttribute('aria-label')
    }));
  });

  console.log('Dir filter buttons:', btns);
  await browser.close();
}

testDirButtons();

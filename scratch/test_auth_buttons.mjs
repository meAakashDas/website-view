import { chromium } from 'playwright';

async function testAuthButtons() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://localhost:8000/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const btns = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('#rp-auth-modal button, .rp-auth-modal button')).map(b => ({
      id: b.id,
      cls: b.className,
      innerText: b.innerText,
      textContent: b.textContent.trim(),
      ariaLabel: b.getAttribute('aria-label')
    }));
  });

  console.log('Auth buttons text:', btns);
  await browser.close();
}

testAuthButtons();

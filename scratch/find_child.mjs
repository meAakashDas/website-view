import { chromium } from 'playwright';

async function findExactContainerChild() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    const activeSection = document.querySelector('.rp-calc-section-active');
    const container = activeSection ? activeSection.querySelector('.container') : null;
    if (!container) return 'No container';

    const children = Array.from(container.children).map(c => {
      const r = c.getBoundingClientRect();
      return {
        tag: c.tagName,
        cls: c.className,
        id: c.id,
        scrollWidth: c.scrollWidth,
        clientWidth: c.clientWidth,
        offsetWidth: c.offsetWidth,
        rectRight: Math.round(r.right),
        rectWidth: Math.round(r.width)
      };
    });

    return {
      containerScrollWidth: container.scrollWidth,
      containerClientWidth: container.clientWidth,
      children
    };
  });

  console.log(JSON.stringify(res, null, 2));
  await browser.close();
}

findExactContainerChild();

import { chromium } from 'playwright';

async function inspectCardStyles() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    const card = document.querySelector('.rp-calc-controls-card');
    const cs = window.getComputedStyle(card);
    const parent = card.parentElement;
    const ps = window.getComputedStyle(parent);
    return {
      card: {
        width: cs.width,
        minWidth: cs.minWidth,
        maxWidth: cs.maxWidth,
        boxSizing: cs.boxSizing,
        margin: cs.margin,
        padding: cs.padding,
        display: cs.display
      },
      parent: {
        tag: parent.tagName,
        cls: parent.className,
        width: ps.width,
        minWidth: ps.minWidth,
        display: ps.display,
        gridTemplateColumns: ps.gridTemplateColumns,
        flexDirection: ps.flexDirection
      }
    };
  });

  console.log(JSON.stringify(res, null, 2));
  await browser.close();
}

inspectCardStyles();

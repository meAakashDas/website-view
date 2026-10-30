import { chromium } from 'playwright';

async function testPresetsAndFreq() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(() => {
    const card = document.querySelector('#calc-pane-fdrd .rp-calc-controls-card');
    const freq = card.querySelector('.rp-freq-switch');
    const presets = card.querySelector('.rp-presets-row');

    function getChildren(parent) {
      if (!parent) return [];
      return Array.from(parent.children).map(c => ({
        tag: c.tagName,
        cls: c.className,
        text: c.textContent.trim(),
        width: Math.round(c.getBoundingClientRect().width),
        scrollWidth: c.scrollWidth,
        whiteSpace: window.getComputedStyle(c).whiteSpace
      }));
    }

    return {
      freq: {
        width: freq ? Math.round(freq.getBoundingClientRect().width) : null,
        scrollWidth: freq ? freq.scrollWidth : null,
        children: getChildren(freq)
      },
      presets: {
        width: presets ? Math.round(presets.getBoundingClientRect().width) : null,
        scrollWidth: presets ? presets.scrollWidth : null,
        children: getChildren(presets)
      }
    };
  });

  console.log(JSON.stringify(res, null, 2));
  await browser.close();
}

testPresetsAndFreq();

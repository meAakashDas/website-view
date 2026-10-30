import { chromium } from 'playwright';

async function inspectPlayerHTML() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const html = await page.evaluate(() => {
    const wrap = document.getElementById('cl-player-wrapper');
    return wrap ? wrap.innerHTML : 'No wrapper';
  });

  console.log('Player Wrapper HTML:\n', html.slice(0, 1000));
  await browser.close();
}

inspectPlayerHTML();

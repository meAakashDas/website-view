import { chromium } from 'playwright';

async function findSvg() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000/calculators/fixed-deposit`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const svgs = await page.evaluate(() => {
    const list = [];
    document.querySelectorAll('svg text').forEach(t => {
      const svg = t.closest('svg');
      const container = svg ? svg.parentElement : null;
      list.push({
        textContent: t.textContent,
        svgWidth: svg ? svg.getAttribute('width') : null,
        svgViewBox: svg ? svg.getAttribute('viewBox') : null,
        containerCls: container ? container.className : null,
        containerScrollWidth: container ? container.scrollWidth : null,
        containerClientWidth: container ? container.clientWidth : null,
      });
    });
    return list;
  });

  console.log('SVG Texts:', svgs);
  await browser.close();
}

findSvg();

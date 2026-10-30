import { chromium } from 'playwright';

async function testPage(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 320, height: 600 });
  await page.goto(`http://localhost:8000${url}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const data = await page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const elements = document.querySelectorAll('*');
    const overflowing = [];

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > 320.5) {
        overflowing.push({
          tag: el.tagName,
          id: el.id,
          className: (el.className || '').toString(),
          rectRight: Math.round(rect.right),
          rectWidth: Math.round(rect.width)
        });
      }
    });

    return {
      docScrollWidth: doc.scrollWidth,
      bodyScrollWidth: body.scrollWidth,
      clientWidth: doc.clientWidth,
      overflowing
    };
  });

  console.log(`URL: ${url}`);
  console.log(`docScrollWidth: ${data.docScrollWidth}, bodyScrollWidth: ${data.bodyScrollWidth}, clientWidth: ${data.clientWidth}`);
  console.log(`Overflowing elements count: ${data.overflowing.length}`);
  data.overflowing.forEach(o => {
    console.log(` - <${o.tag} id="${o.id}" class="${o.className}"> right=${o.rectRight} width=${o.rectWidth}`);
  });

  await browser.close();
}

async function run() {
  await testPage('/calculators/fixed-deposit');
  console.log('-----------------------------------');
  await testPage('/aakash-das');
}

run();

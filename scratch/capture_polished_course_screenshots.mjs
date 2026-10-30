import { chromium } from 'playwright';
import { spawn } from 'child_process';

async function main() {
  const server = spawn('python3', ['-m', 'http.server', '8000'], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 600));

  let browser;
  try {
    browser = await chromium.launch({ headless: true });

    // Desktop
    const deskContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const deskPage = await deskContext.newPage();
    await deskPage.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
    await deskPage.waitForTimeout(500);
    await deskPage.screenshot({ path: 'scratch/course_desktop_top.png', fullPage: false });

    // Scroll to curriculum & supporting
    await deskPage.evaluate(() => window.scrollTo(0, 1000));
    await deskPage.waitForTimeout(300);
    await deskPage.screenshot({ path: 'scratch/course_desktop_middle.png', fullPage: false });

    await deskPage.evaluate(() => window.scrollTo(0, 2000));
    await deskPage.waitForTimeout(300);
    await deskPage.screenshot({ path: 'scratch/course_desktop_bottom.png', fullPage: false });

    // Mobile
    const mobContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mobPage = await mobContext.newPage();
    await mobPage.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
    await mobPage.waitForTimeout(500);
    await mobPage.screenshot({ path: 'scratch/course_mobile_top.png', fullPage: false });

    await mobPage.evaluate(() => window.scrollTo(0, 1100));
    await mobPage.waitForTimeout(300);
    await mobPage.screenshot({ path: 'scratch/course_mobile_middle.png', fullPage: false });

    console.log('Screenshots captured successfully in scratch/');
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


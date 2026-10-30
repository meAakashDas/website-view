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
    await deskPage.goto('http://localhost:8000/', { waitUntil: 'domcontentloaded' });
    await deskPage.waitForTimeout(600);
    await deskPage.screenshot({ path: 'scratch/home_desktop_top.png', fullPage: false });

    // Scroll to flagship & calculators
    await deskPage.evaluate(() => window.scrollTo(0, 750));
    await deskPage.waitForTimeout(300);
    await deskPage.screenshot({ path: 'scratch/home_desktop_middle.png', fullPage: false });

    // Scroll to learn & explore and founder
    await deskPage.evaluate(() => window.scrollTo(0, 1600));
    await deskPage.waitForTimeout(300);
    await deskPage.screenshot({ path: 'scratch/home_desktop_bottom.png', fullPage: false });

    // Scroll to final CTA
    await deskPage.evaluate(() => window.scrollTo(0, 2400));
    await deskPage.waitForTimeout(300);
    await deskPage.screenshot({ path: 'scratch/home_desktop_cta.png', fullPage: false });

    // Mobile
    const mobContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mobPage = await mobContext.newPage();
    await mobPage.goto('http://localhost:8000/', { waitUntil: 'domcontentloaded' });
    await mobPage.waitForTimeout(600);
    await mobPage.screenshot({ path: 'scratch/home_mobile_top.png', fullPage: false });

    await mobPage.evaluate(() => window.scrollTo(0, 700));
    await mobPage.waitForTimeout(300);
    await mobPage.screenshot({ path: 'scratch/home_mobile_flagship.png', fullPage: false });

    await mobPage.evaluate(() => window.scrollTo(0, 1600));
    await mobPage.waitForTimeout(300);
    await mobPage.screenshot({ path: 'scratch/home_mobile_calc.png', fullPage: false });

    console.log('Screenshots successfully captured!');
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


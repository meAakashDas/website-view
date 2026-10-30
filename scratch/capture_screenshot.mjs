import { chromium } from 'playwright';
import path from 'path';

async function main() {
  const browser = await chromium.launch();
  
  // 1. Desktop viewport (1440x900)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const desktopPage = await desktopContext.newPage();
  console.log('Navigating to desktop course page...');
  await desktopPage.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
  await desktopPage.waitForTimeout(2000);
  const desktopScreenshotPath = path.resolve('/Users/aakashdas/.gemini/antigravity-ide/brain/8bced09e-db27-4c8a-ac30-3b67ca30fb85/course_detail_desktop.png');
  await desktopPage.screenshot({ path: desktopScreenshotPath, fullPage: true });
  console.log('Saved desktop screenshot:', desktopScreenshotPath);
  await desktopContext.close();

  // 2. Mobile viewport (390x844 - iPhone 12/13/14)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  console.log('Navigating to mobile course page...');
  await mobilePage.goto('http://localhost:8000/courses/nepse-stock-market-basics', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(2000);
  const mobileScreenshotPath = path.resolve('/Users/aakashdas/.gemini/antigravity-ide/brain/8bced09e-db27-4c8a-ac30-3b67ca30fb85/course_detail_mobile.png');
  await mobilePage.screenshot({ path: mobileScreenshotPath, fullPage: true });
  console.log('Saved mobile screenshot:', mobileScreenshotPath);
  await mobileContext.close();

  await browser.close();
  console.log('Screenshots captured successfully.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

import { chromium } from 'playwright';
import path from 'path';

const BASE_URL = 'http://localhost:8000';
const OUT_DIR = '/Users/aakashdas/.gemini/antigravity-ide/brain/671c8bde-4729-43b7-8a39-2c0889f8c7d8';

async function captureVerificationScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // 1. Desktop: Courses Landing Page with Others dropdown open
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/courses`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  await page.click('#nav-others-trigger');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT_DIR, 'desktop_others_dropdown_open.png'), fullPage: false });
  console.log('Saved desktop_others_dropdown_open.png');

  // Close desktop dropdown
  await page.keyboard.press('Escape');
  await page.waitForTimeout(200);

  // 2. Desktop: My Courses Dashboard
  await page.goto(`${BASE_URL}/my-courses`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(OUT_DIR, 'desktop_my_courses_page.png'), fullPage: false });
  console.log('Saved desktop_my_courses_page.png');

  // 3. Desktop: Learning Interface
  await page.goto(`${BASE_URL}/courses/nepse-stock-market-basics/learn`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(OUT_DIR, 'desktop_course_learning_interface.png'), fullPage: false });
  console.log('Saved desktop_course_learning_interface.png');

  // 4. Mobile: 3-Button Navbar with Others dropdown open (2 options: Learn & Calculators)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/courses`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  await page.click('#mobile-nav-others');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(OUT_DIR, 'mobile_others_dropdown_open.png'), fullPage: false });
  console.log('Saved mobile_others_dropdown_open.png');

  // Close mobile dropdown
  await page.click('body', { position: { x: 50, y: 300 } });
  await page.waitForTimeout(200);

  // 5. Mobile: Hamburger Drawer (independent)
  await page.click('#nav-toggle');
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(OUT_DIR, 'mobile_hamburger_drawer.png'), fullPage: false });
  console.log('Saved mobile_hamburger_drawer.png');

  await browser.close();
}

captureVerificationScreenshots();

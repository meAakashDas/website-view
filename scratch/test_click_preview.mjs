import { chromium } from 'playwright';

async function testClickPreview() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-2`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(async () => {
    const previewBtn = document.getElementById('cl-watch-preview-btn');
    if (previewBtn) {
      previewBtn.click();
      await new Promise(r => setTimeout(r, 300));
    }

    const title = document.getElementById('cl-lesson-title')?.textContent.trim();
    const iframe = document.getElementById('cl-video-iframe');

    return {
      title,
      iframeExists: !!iframe,
      isLesson1: title === 'What Is the Share Market?'
    };
  });

  console.log('Preview button test result:', res);
  await browser.close();
}

testClickPreview();

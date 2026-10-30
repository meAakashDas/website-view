import { chromium } from 'playwright';

async function testCourseLearn() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(async () => {
    const playerWrapper = document.getElementById('cl-player-wrapper');
    const iframe = document.getElementById('cl-video-iframe');
    const nextBtn = document.getElementById('cl-next-btn');
    const prevBtn = document.getElementById('cl-prev-btn');
    const sidebar = document.getElementById('cl-sidebar-card');
    const title = document.getElementById('cl-lesson-title');
    const initialLessonTitle = title ? title.textContent.trim() : null;

    // Test clicking Next Lesson
    let nextClickedSuccess = false;
    let newLessonTitle = null;
    if (nextBtn && !nextBtn.disabled) {
      nextBtn.click();
      await new Promise(r => setTimeout(r, 300));
      newLessonTitle = document.getElementById('cl-lesson-title')?.textContent.trim();
      nextClickedSuccess = newLessonTitle !== initialLessonTitle;
    }

    return {
      playerWrapperExists: !!playerWrapper,
      iframeExists: !!iframe,
      nextBtnExists: !!nextBtn,
      prevBtnExists: !!prevBtn,
      sidebarExists: !!sidebar,
      initialLessonTitle,
      newLessonTitle,
      nextClickedSuccess
    };
  });

  console.log('Course Learn page test:', res);
  await browser.close();
}

testCourseLearn();

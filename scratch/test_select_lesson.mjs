import { chromium } from 'playwright';

async function testSelectLessonFromCurriculum() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`http://localhost:8000/courses/nepse-stock-market-basics/learn?lesson=lesson-1`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);

  const res = await page.evaluate(async () => {
    const lesson2Btn = document.querySelector('[data-lesson-id="lesson-2"], #cl-lesson-btn-lesson-2, .cl-lesson-btn[data-target-id="lesson-2"]');
    const titleBefore = document.getElementById('cl-lesson-title')?.textContent.trim();

    // If lesson 2 is inside a collapsed module accordion, expand module 1 first if needed
    const mod1Toggle = document.querySelector('.cl-module-toggle');
    if (mod1Toggle && mod1Toggle.getAttribute('aria-expanded') !== 'true') {
      mod1Toggle.click();
      await new Promise(r => setTimeout(r, 100));
    }

    const allLessonBtns = document.querySelectorAll('.cl-lesson-btn');
    let clickedId = null;
    if (allLessonBtns.length > 1) {
      const targetBtn = allLessonBtns[1];
      clickedId = targetBtn.getAttribute('data-target-id') || targetBtn.getAttribute('data-lesson-id');
      targetBtn.click();
      await new Promise(r => setTimeout(r, 300));
    }

    const titleAfter = document.getElementById('cl-lesson-title')?.textContent.trim();

    return {
      allLessonBtnsCount: allLessonBtns.length,
      clickedId,
      titleBefore,
      titleAfter,
      titleChanged: titleBefore !== titleAfter
    };
  });

  console.log('Select lesson result:', res);
  await browser.close();
}

testSelectLessonFromCurriculum();

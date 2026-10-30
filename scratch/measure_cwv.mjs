import { chromium } from 'playwright';

const URLS = [
  '/',
  '/courses/nepse-stock-market-basics',
  '/courses/nepse-stock-market-basics/learn?lesson=lesson-1',
  '/calculators/sip',
  '/learn'
];

async function measurePage(page, url) {
  await page.goto(`http://localhost:8000${url}`, { waitUntil: 'load' });
  await page.waitForTimeout(500);

  const metrics = await page.evaluate(() => {
    return new Promise(resolve => {
      let clsValue = 0;
      let lcpValue = 0;

      // Performance Observer for CLS
      try {
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (_) {}

      // Performance Observer for LCP
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            lcpValue = lastEntry.renderTime || lastEntry.loadTime;
          }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (_) {}

      const navEntries = performance.getEntriesByType('navigation');
      const nav = navEntries.length > 0 ? navEntries[0] : null;

      setTimeout(() => {
        resolve({
          cls: clsValue,
          lcp: Math.round(lcpValue),
          domContentLoaded: nav ? Math.round(nav.domContentLoadedEventEnd) : null,
          loadComplete: nav ? Math.round(nav.loadEventEnd) : null
        });
      }, 300);
    });
  });

  return metrics;
}

async function run() {
  console.log('Measuring Core Web Vitals on Key Pages...\n');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  for (const u of URLS) {
    const m = await measurePage(page, u);
    console.log(`Page: ${u.padEnd(45)} | CLS: ${m.cls.toFixed(4)} | LCP: ${m.lcp}ms | DCL: ${m.domContentLoaded}ms`);
  }

  await browser.close();
}

run();

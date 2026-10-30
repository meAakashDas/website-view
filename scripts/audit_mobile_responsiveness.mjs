import { chromium } from '@playwright/test';

const VIEWPORTS = [
  { width: 320, height: 600, name: '320px (Small Smartphone)' },
  { width: 360, height: 740, name: '360px (Standard Smartphone)' },
  { width: 375, height: 667, name: '375px (iPhone SE)' },
  { width: 390, height: 844, name: '390px (iPhone Standard)' },
  { width: 414, height: 896, name: '414px (Large Smartphone)' },
  { width: 430, height: 932, name: '430px (Large Mobile Screen)' },
  { width: 600, height: 960, name: '600px (Small Tablet)' },
  { width: 768, height: 1024, name: '768px (Tablet)' },
  { width: 1024, height: 768, name: '1024px (Large Tablet)' },
  { width: 1280, height: 800, name: '1280px (Desktop)' }
];

const ROUTES_TO_AUDIT = [
  '/',
  '/about',
  '/contact',
  '/aakash-das',
  '/terms',
  '/privacy',
  '/refund-policy',
  '/disclaimer',
  '/editorial-policy',
  '/faq',
  '/courses',
  '/courses/nepse-stock-market-basics',
  '/courses/nepse-stock-market-basics/learn?lesson=lesson-1',
  '/courses/personal-finance-masterclass',
  '/courses/personal-finance-masterclass/learn?lesson=lesson-1',
  '/my-courses',
  '/calculators',
  '/calculators/sip',
  '/calculators/emi',
  '/calculators/swp',
  '/calculators/home-loan',
  '/calculators/personal-loan',
  '/calculators/vehicle-loan',
  '/calculators/fdrd',
  '/calculators/tax',
  '/calculators/share',
  '/calculators/cagr',
  '/calculators/inflation',
  '/calculators/retirement',
  '/learn',
  '/learn/guides',
  '/learn/glossary',
  '/learn/banking',
  '/learn/banking/bank-classes-nepal-nrb',
  '/resources',
  '/resources/notion-finance-tracker',
  '/blog',
  '/blog/income-tax-nepal-explained',
  '/admin/courses',
  '/admin/enrollments'
];

async function runAudit() {
  const browser = await chromium.launch({ headless: true });
  console.log('=================================================================');
  console.log(`MOBILE RESPONSIVENESS AUDIT: ${ROUTES_TO_AUDIT.length} ROUTES × ${VIEWPORTS.length} VIEWPORTS`);
  console.log('=================================================================\n');

  const issues = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      isMobile: vp.width < 768,
      hasTouch: vp.width < 768
    });
    const page = await context.newPage();

    let vpIssuesCount = 0;
    process.stdout.write(`Testing viewport ${vp.name}... `);

    for (const route of ROUTES_TO_AUDIT) {
      const url = `http://localhost:8000${route}`;
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await page.waitForTimeout(400);

        // Check for horizontal overflow
        const overflowData = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const winW = window.innerWidth;
          const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
          const hasOverflow = scrollW > winW + 1; // 1px threshold for fractional rounding

          let overflowingElements = [];
          if (hasOverflow) {
            const all = document.querySelectorAll('*');
            for (const el of all) {
              const rect = el.getBoundingClientRect();
              // Check if element extends past right edge by more than 1px
              if (rect.right > winW + 1.5 && rect.width > 0 && rect.height > 0) {
                const style = window.getComputedStyle(el);
                if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
                  overflowingElements.push({
                    tag: el.tagName.toLowerCase(),
                    id: el.id || '',
                    className: el.className && typeof el.className === 'string' ? el.className.split(' ').slice(0, 3).join('.') : '',
                    rectRight: Math.round(rect.right),
                    rectWidth: Math.round(rect.width),
                    winW
                  });
                }
              }
            }
          }

          return {
            hasOverflow,
            scrollW,
            winW,
            overflowingElements: overflowingElements.slice(0, 5) // top 5 culprits
          };
        });

        if (overflowData.hasOverflow) {
          vpIssuesCount++;
          issues.push({
            viewport: vp.width,
            route,
            scrollW: overflowData.scrollW,
            winW: overflowData.winW,
            culprits: overflowData.overflowingElements
          });
        }
      } catch (err) {
        issues.push({
          viewport: vp.width,
          route,
          error: err.message
        });
      }
    }

    if (vpIssuesCount === 0) {
      console.log(`✓ ALL ${ROUTES_TO_AUDIT.length} ROUTES CLEAN (0 OVERFLOWS)`);
    } else {
      console.log(`✗ ${vpIssuesCount} ROUTES HAVE HORIZONTAL OVERFLOW`);
    }

    await context.close();
  }

  await browser.close();

  console.log('\n=================================================================');
  console.log(`AUDIT COMPLETE: ${issues.length} TOTAL ISSUES DETECTED`);
  console.log('=================================================================\n');

  if (issues.length > 0) {
    console.log('DETAILED FINDINGS:');
    for (const issue of issues) {
      if (issue.error) {
        console.log(`[${issue.viewport}px] ${issue.route} -> ERROR: ${issue.error}`);
      } else {
        console.log(`[${issue.viewport}px] ${issue.route} -> scrollWidth: ${issue.scrollW}px > window: ${issue.winW}px`);
        for (const c of issue.culprits) {
          console.log(`   └─ <${c.tag}${c.id ? '#' + c.id : ''}${c.className ? '.' + c.className : ''}> right:${c.rectRight}px width:${c.rectWidth}px`);
        }
      }
    }
  }

  process.exit(issues.length > 0 ? 1 : 0);
}

runAudit().catch(err => {
  console.error('Audit fatal error:', err);
  process.exit(1);
});


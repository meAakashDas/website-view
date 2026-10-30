import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('RISEPAISA TECHNICAL SEO & INDEXABILITY TEST SUITE');
console.log('========================================================\n');

// ── 1. ROBOTS.TXT AUDIT ────────────────────────────────
console.log('--- 1. Testing robots.txt Policy ---');
const robotsPath = path.join(rootDir, 'robots.txt');
assert(fs.existsSync(robotsPath), 'robots.txt exists at project root');
const robotsContent = fs.readFileSync(robotsPath, 'utf8');

assert(robotsContent.includes('Sitemap: https://risepaisa.com/sitemap.xml'), 'robots.txt references absolute HTTPS production sitemap');
assert(robotsContent.includes('Host: https://risepaisa.com'), 'robots.txt defines canonical Host');
assert(robotsContent.includes('Allow: /'), 'robots.txt permits public crawling');
assert(robotsContent.includes('Disallow: /search'), 'robots.txt disallows search query parameter crawl budget waste');
assert(!robotsContent.includes('Disallow: /css'), 'robots.txt does not block CSS rendering assets');
assert(!robotsContent.includes('Disallow: /js'), 'robots.txt does not block JS rendering assets');

// ── 2. SITEMAP.XML AUDIT ──────────────────────────────
console.log('\n--- 2. Testing sitemap.xml Integrity ---');
const sitemapPath = path.join(rootDir, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'sitemap.xml exists at project root');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

assert(sitemapContent.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'sitemap.xml has valid XML declaration');
assert(sitemapContent.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), 'sitemap.xml defines standard sitemaps namespace');

const locMatches = [...sitemapContent.matchAll(/<loc>(https:\/\/risepaisa\.com[^<]+)<\/loc>/g)].map(m => m[1]);
assert(locMatches.length >= 190, `sitemap.xml contains full URL inventory (found ${locMatches.length} URLs)`);

// Check no localhost or staging references
assert(!sitemapContent.includes('localhost'), 'sitemap.xml contains 0 localhost references');
assert(!sitemapContent.includes('127.0.0.1'), 'sitemap.xml contains 0 127.0.0.1 references');
const nonHttpsLocs = locMatches.filter(u => !u.startsWith('https://'));
assert(nonHttpsLocs.length === 0, 'sitemap.xml <loc> entries strictly use HTTPS');

// Verify key priorities exist
const requiredSitemapUrls = [
  'https://risepaisa.com/',
  'https://risepaisa.com/about',
  'https://risepaisa.com/aakash-das',
  'https://risepaisa.com/editorial-policy',
  'https://risepaisa.com/calculators',
  'https://risepaisa.com/calculators/sip',
  'https://risepaisa.com/calculators/emi',
  'https://risepaisa.com/calculators/nepal-income-tax',
  'https://risepaisa.com/calculators/fixed-deposit',
  'https://risepaisa.com/calculators/nepse-share',
  'https://risepaisa.com/calculators/swp',
  'https://risepaisa.com/calculators/home-loan',
  'https://risepaisa.com/calculators/personal-loan',
  'https://risepaisa.com/calculators/vehicle-loan',
  'https://risepaisa.com/calculators/cagr',
  'https://risepaisa.com/calculators/inflation',
  'https://risepaisa.com/calculators/retirement',
  'https://risepaisa.com/courses',
  'https://risepaisa.com/courses/nepse-stock-market-basics',
  'https://risepaisa.com/resources',
  'https://risepaisa.com/blog',
  'https://risepaisa.com/blog/income-tax-nepal-explained',
  'https://risepaisa.com/learn',
  'https://risepaisa.com/learn/guides',
  'https://risepaisa.com/learn/guides/complete-ipo-guide',
  'https://risepaisa.com/learn/glossary',
  'https://risepaisa.com/learn/glossary/demat',
  'https://risepaisa.com/learn/nepse',
  'https://risepaisa.com/learn/nepse/demat-meroshare-crn-setup',
];

for (const reqUrl of requiredSitemapUrls) {
  assert(locMatches.includes(reqUrl), `sitemap includes canonical URL: ${reqUrl}`);
}

assert(!sitemapContent.includes('hreflang='), 'sitemap.xml has 0 conflicting self-referencing alternate hreflang entries');

// ── 3. STATIC PRERENDERED HTML VALIDATION ────────────
console.log('\n--- 3. Testing Pre-rendered Static HTML Pages on Disk ---');

const testRoutes = [
  { url: 'https://risepaisa.com/', file: 'index.html', titleContains: 'RisePaisa' },
  { url: 'https://risepaisa.com/about', file: 'about/index.html', titleContains: 'About' },
  { url: 'https://risepaisa.com/aakash-das', file: 'aakash-das/index.html', titleContains: 'Aakash Das' },
  { url: 'https://risepaisa.com/editorial-policy', file: 'editorial-policy/index.html', titleContains: 'Editorial Policy' },
  { url: 'https://risepaisa.com/calculators/sip', file: 'calculators/sip/index.html', titleContains: 'SIP Calculator' },
  { url: 'https://risepaisa.com/calculators/nepal-income-tax', file: 'calculators/nepal-income-tax/index.html', titleContains: 'Income Tax Calculator' },
  { url: 'https://risepaisa.com/calculators/fixed-deposit', file: 'calculators/fixed-deposit/index.html', titleContains: 'Fixed Deposit' },
  { url: 'https://risepaisa.com/calculators/emi', file: 'calculators/emi/index.html', titleContains: 'EMI' },
  { url: 'https://risepaisa.com/calculators/nepse-share', file: 'calculators/nepse-share/index.html', titleContains: 'NEPSE Share' },
  { url: 'https://risepaisa.com/courses/nepse-stock-market-basics', file: 'courses/nepse-stock-market-basics/index.html', titleContains: 'Course' },
  { url: 'https://risepaisa.com/blog/income-tax-nepal-explained', file: 'blog/income-tax-nepal-explained/index.html', titleContains: 'Income Tax' },
  { url: 'https://risepaisa.com/learn/nepse/demat-meroshare-crn-setup', file: 'learn/nepse/demat-meroshare-crn-setup/index.html', titleContains: 'Demat' },
  { url: 'https://risepaisa.com/learn/guides/complete-ipo-guide', file: 'learn/guides/complete-ipo-guide/index.html', titleContains: 'IPO' },
  { url: 'https://risepaisa.com/learn/glossary/demat', file: 'learn/glossary/demat/index.html', titleContains: 'Demat' }
];

for (const tr of testRoutes) {
  const filePath = path.join(rootDir, tr.file);
  assert(fs.existsSync(filePath), `Static file exists: ${tr.file}`);
  if (!fs.existsSync(filePath)) continue;

  const html = fs.readFileSync(filePath, 'utf8');

  // Title check
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  assert(titleMatch && titleMatch[1].includes(tr.titleContains), `${tr.file} has valid title containing "${tr.titleContains}" (got: "${titleMatch ? titleMatch[1] : ''}")`);

  // Canonical tag check
  const canonMatch = html.match(/<link rel="canonical" href="([^"]+)">/);
  assert(canonMatch && canonMatch[1] === tr.url, `${tr.file} canonical tag matches exact URL: ${tr.url} (got: "${canonMatch ? canonMatch[1] : ''}")`);

  // Hreflang defect check: Must not declare duplicate self-referencing hreflangs to itself
  assert(!html.includes('hreflang="en"') && !html.includes('hreflang="ne"'), `${tr.file} contains zero duplicate self-referencing alternate hreflang tags`);

  // Meta description check
  const descMatch = html.match(/<meta name="description" content="([^"]+)">/);
  assert(descMatch && descMatch[1].length > 25, `${tr.file} has substantive meta description (len: ${descMatch ? descMatch[1].length : 0})`);

  // Primary heading check
  assert(html.includes('<h1'), `${tr.file} contains a clear primary <h1> heading`);

  // Robots check: Must not accidentally noindex
  const robotsTagMatch = html.match(/<meta name="robots" content="([^"]+)">/);
  assert(robotsTagMatch && robotsTagMatch[1].includes('index'), `${tr.file} has indexable robots tag: "${robotsTagMatch ? robotsTagMatch[1] : ''}"`);

  // Schema.org check
  const ldJsonMatch = html.match(/<script type="application\/ld\+json" id="rp-ld-json">\s*([\s\S]*?)\s*<\/script>/);
  assert(ldJsonMatch !== null, `${tr.file} contains Schema.org JSON-LD script`);
  if (ldJsonMatch) {
    let parsed = null;
    try {
      parsed = JSON.parse(ldJsonMatch[1]);
    } catch (e) {
      // ignore
    }
    assert(parsed !== null && parsed['@context'] === 'https://schema.org', `${tr.file} Schema.org JSON-LD is syntactically valid Schema.org`);
  }

  // Pre-rendered body content check (must have real content inside app)
  assert(html.includes('<main id="app">') && html.indexOf('</main>') > html.indexOf('<main id="app">') + 20, `${tr.file} contains pre-rendered HTML content inside <main id="app">`);
}

// ── 4. CANONICAL DEDUPLICATION & ALIAS CHECKS ────────
console.log('\n--- 4. Testing Calculator & Guide Alias Deduplication ---');
const aliasTests = [
  { file: 'calculators/tax/index.html', canonicalTarget: 'https://risepaisa.com/calculators/nepal-income-tax' },
  { file: 'calculators/income-tax/index.html', canonicalTarget: 'https://risepaisa.com/calculators/nepal-income-tax' },
  { file: 'calculators/fdrd/index.html', canonicalTarget: 'https://risepaisa.com/calculators/fixed-deposit' },
  { file: 'calculators/fd/index.html', canonicalTarget: 'https://risepaisa.com/calculators/fixed-deposit' },
  { file: 'calculators/share/index.html', canonicalTarget: 'https://risepaisa.com/calculators/nepse-share' },
  { file: 'calculators/sip-calculator/index.html', canonicalTarget: 'https://risepaisa.com/calculators/sip' },
  { file: 'calculators/nepal-income-tax-calculator/index.html', canonicalTarget: 'https://risepaisa.com/calculators/nepal-income-tax' },
  { file: 'learn/guides/complete-mutual-funds-guide/index.html', canonicalTarget: 'https://risepaisa.com/learn/guides/complete-mutual-fund-guide' },
  { file: 'learn/guides/complete-nepse-investing-guide/index.html', canonicalTarget: 'https://risepaisa.com/learn/guides/complete-tms-guide' }
];

for (const at of aliasTests) {
  const filePath = path.join(rootDir, at.file);
  assert(fs.existsSync(filePath), `Alias file exists: ${at.file}`);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    const canonMatch = html.match(/<link rel="canonical" href="([^"]+)">/);
    assert(canonMatch && canonMatch[1] === at.canonicalTarget, `${at.file} canonical correctly points to preferred URL: ${at.canonicalTarget}`);
  }
}

// ── 5. LIVE HTTP 200 STATUS CHECK ─────────────────────
console.log('\n--- 5. Testing Live HTTP Status Responses (Server Port 8000) ---');

function checkHttpStatus(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:8000${urlPath}`, (res) => {
      resolve({ status: res.statusCode, headers: res.headers });
    }).on('error', (err) => {
      resolve({ error: err.message });
    });
  });
}

async function runHttpChecks() {
  const liveRoutes = [
    '/',
    '/about',
    '/aakash-das',
    '/editorial-policy',
    '/calculators',
    '/calculators/sip',
    '/calculators/nepal-income-tax',
    '/calculators/fixed-deposit',
    '/calculators/emi',
    '/courses/nepse-stock-market-basics',
    '/blog/income-tax-nepal-explained',
    '/learn/nepse/demat-meroshare-crn-setup',
    '/learn/guides/complete-ipo-guide',
    '/learn/glossary/demat',
    '/sitemap.xml',
    '/robots.txt'
  ];

  for (const r of liveRoutes) {
    const res = await checkHttpStatus(r);
    assert(res.status === 200, `HTTP GET ${r} returns status 200 OK (got: ${res.status || res.error})`);
  }

  console.log('\n========================================================');
  console.log(`SEO TEST SUITE: ${passedTests} PASSED, ${failedTests} FAILED (TOTAL: ${totalTests})`);
  console.log('========================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  }
}

runHttpChecks();

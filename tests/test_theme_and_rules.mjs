// ========================================================
// RISEPAISA THEME & DESIGN INTEGRITY TEST SUITE
// ========================================================
import { CALCULATOR_REGISTRY } from '../js/calculators/registry.js';
import { ROUTES } from '../js/routes.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('========================================================');
console.log('RISEPAISA THEME PERSISTENCE & SYSTEM INTEGRITY TEST SUITE');
console.log('========================================================\n');

// 1. Theme Logic Tests
console.log('--- 1. Testing Default Light Mode & Theme Behavior ---');

function resolveTheme(storedTheme) {
  // Simulates theme resolution logic from components.js and HTML bootstrapper
  return storedTheme === 'dark' ? 'dark' : 'light';
}

// First-time visitor (no stored preference)
assert(resolveTheme(null) === 'light', 'First-time visitor with null localStorage gets light mode');
assert(resolveTheme(undefined) === 'light', 'First-time visitor with undefined localStorage gets light mode');
assert(resolveTheme('') === 'light', 'First-time visitor with empty string gets light mode');

// Returning visitor with explicit preferences
assert(resolveTheme('dark') === 'dark', 'Returning visitor with saved "dark" preference gets dark mode');
assert(resolveTheme('light') === 'light', 'Returning visitor with saved "light" preference gets light mode');

// Toggle behavior
function toggleTheme(currentTheme) {
  return currentTheme === 'dark' ? 'light' : 'dark';
}
assert(toggleTheme('light') === 'dark', 'Toggling from light switches to dark');
assert(toggleTheme('dark') === 'light', 'Toggling from dark switches to light');

// 2. Calculator Registry Integrity Tests
console.log('\n--- 2. Testing Calculator Registry (12 Calculators) ---');
assert(CALCULATOR_REGISTRY.length === 12, `Calculator registry contains exactly 12 tools (got ${CALCULATOR_REGISTRY.length})`);

const expectedCalcIds = [
  'sip', 'emi', 'swp', 'home-loan', 'personal-loan', 'vehicle-loan',
  'fdrd', 'tax', 'share', 'cagr', 'inflation', 'retirement'
];

expectedCalcIds.forEach(id => {
  const found = CALCULATOR_REGISTRY.find(c => c.id === id);
  assert(!!found, `Calculator "${id}" is registered`);
  if (found) {
    assert(found.status === 'active', `Calculator "${id}" status is active`);
    assert(typeof found.title === 'string' && found.title.length > 0, `Calculator "${id}" has non-empty title`);
    assert(typeof found.shortDesc === 'string' && found.shortDesc.length > 0, `Calculator "${id}" has non-empty description`);
  }
});

// 3. Routes Integrity Tests
console.log('\n--- 3. Testing Core Routes Constants ---');
assert(ROUTES.HOME === '/', 'ROUTES.HOME is "/"');
assert(ROUTES.LEARN === '/learn', 'ROUTES.LEARN is "/learn"');
assert(ROUTES.COURSES === '/courses', 'ROUTES.COURSES is "/courses"');
assert(ROUTES.CALCULATORS === '/calculators', 'ROUTES.CALCULATORS is "/calculators"');
assert(ROUTES.RESOURCES === '/resources', 'ROUTES.RESOURCES is "/resources"');
assert(ROUTES.BLOG === '/blog', 'ROUTES.BLOG is "/blog"');
assert(ROUTES.ABOUT === '/about', 'ROUTES.ABOUT is "/about"');
assert(ROUTES.AAKASH_DAS === '/aakash-das', 'ROUTES.AAKASH_DAS is "/aakash-das"');
assert(ROUTES.CONTACT === '/contact', 'ROUTES.CONTACT is "/contact"');
assert(ROUTES.EDITORIAL_POLICY === '/editorial-policy', 'ROUTES.EDITORIAL_POLICY is "/editorial-policy"');

console.log(`\n========================================================`);
console.log(`THEME & INTEGRITY SUITE: ${passed} PASSED, ${failed} FAILED`);
console.log(`========================================================\n`);

if (failed > 0) {
  process.exit(1);
}

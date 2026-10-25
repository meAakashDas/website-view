// ==============================================
// risePaisa - Master Test Runner
// Runs all 25 test suites across unit, integration, and security
// ==============================================

import { readdirSync } from 'fs';
import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const testsDir = __dirname;

const testFiles = readdirSync(testsDir)
  .filter(f => f.startsWith('test_') && f.endsWith('.mjs'))
  .sort();

console.log(`\n======================================================`);
console.log(`RISEPAISA MASTER TEST RUNNER: ${testFiles.length} SUITES DISCOVERED`);
console.log(`======================================================\n`);

let passedSuites = 0;
let failedSuites = 0;
let totalPassedAssertions = 0;

for (const file of testFiles) {
  process.stdout.write(`• Running ${file.padEnd(46, ' ')} `);
  const result = spawnSync('node', [path.join(testsDir, file)], {
    encoding: 'utf8',
    env: { ...process.env, CI: 'true' }
  });

  if (result.status === 0) {
    passedSuites++;
    const assertions = (result.stdout.match(/✓/g) || []).length;
    totalPassedAssertions += assertions;
    console.log(`PASSED (${assertions} assertions)`);
  } else {
    failedSuites++;
    console.log(`FAILED (exit ${result.status})`);
    console.error(result.stdout || result.stderr);
  }
}

console.log(`\n======================================================`);
console.log(`TEST SUMMARY:`);
console.log(`  Suites:     ${passedSuites} passed, ${failedSuites} failed, ${testFiles.length} total`);
console.log(`  Assertions: ${totalPassedAssertions} passed`);
console.log(`======================================================\n`);

if (failedSuites > 0) {
  process.exit(1);
}

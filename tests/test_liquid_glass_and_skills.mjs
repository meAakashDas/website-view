// ============================================================================
// RISEPAISA: VERIFICATION SUITE FOR LIQUID GLASS & EMIL KOWALSKI SKILLS
// ============================================================================
import fs from 'fs';
import path from 'path';

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
console.log('VERIFYING LIQUID GLASS & EMIL KOWALSKI SKILLS INTEGRATION');
console.log('========================================================\n');

const repoRoot = path.resolve('.');

// ────────────────────────────────────────────────────────────────────────────
// 1. Package Installation & Dependencies
// ────────────────────────────────────────────────────────────────────────────
console.log('--- 1. Package Installation & Dependencies ---');

const packageJsonPath = path.join(repoRoot, 'package.json');
assert(fs.existsSync(packageJsonPath), 'package.json exists');
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

assert(Boolean(pkg.dependencies && pkg.dependencies['@ybouane/liquidglass']), '@ybouane/liquidglass is listed in dependencies');
const installedPkgJson = path.join(repoRoot, 'node_modules/@ybouane/liquidglass/package.json');
assert(fs.existsSync(installedPkgJson), 'node_modules/@ybouane/liquidglass/package.json exists');

if (fs.existsSync(installedPkgJson)) {
  const lgPkg = JSON.parse(fs.readFileSync(installedPkgJson, 'utf-8'));
  assert(lgPkg.version === '1.0.3', `Installed version is 1.0.3 (got: ${lgPkg.version})`);
  assert(lgPkg.license === 'MIT', `Package license is MIT (got: ${lgPkg.license})`);
  assert(lgPkg.type === 'module', 'Package type is ES module (type: module)');
}

// ────────────────────────────────────────────────────────────────────────────
// 2. Production Vendor Asset Hygiene & Bundle Impact
// ────────────────────────────────────────────────────────────────────────────
console.log('\n--- 2. Production Vendor Asset Hygiene & Bundle Impact ---');

const vendorJsPath = path.join(repoRoot, 'assets/vendor/liquidglass/liquidglass.js');
assert(fs.existsSync(vendorJsPath), 'Production ESM bundle deployed to assets/vendor/liquidglass/liquidglass.js');

if (fs.existsSync(vendorJsPath)) {
  const stat = fs.statSync(vendorJsPath);
  const sizeKb = (stat.size / 1024).toFixed(1);
  assert(stat.size < 150000, `Vendor bundle size is lightweight (< 150 KB, actual: ${sizeKb} KB)`);

  const vendorContent = fs.readFileSync(vendorJsPath, 'utf-8');
  assert(vendorContent.includes('gl_FragColor'), 'Bundle contains embedded WebGL fragment shaders');
  assert(vendorContent.includes('refraction'), 'Bundle contains refraction logic');
  assert(vendorContent.includes('chromAberration'), 'Bundle contains chromatic aberration shader uniforms');
  assert(vendorContent.includes('specular'), 'Bundle contains specular highlight shader logic');
  assert(vendorContent.includes('fresnel'), 'Bundle contains Fresnel reflection logic');

  // Verify no development or demo bloat was placed in assets/vendor/
  const vendorDirFiles = fs.readdirSync(path.join(repoRoot, 'assets/vendor/liquidglass'));
  assert(!vendorDirFiles.includes('src'), 'Vendor directory contains NO source tree (src/)');
  assert(!vendorDirFiles.includes('playground'), 'Vendor directory contains NO playground files');
  assert(!vendorDirFiles.includes('demo'), 'Vendor directory contains NO demo files');
}

// ────────────────────────────────────────────────────────────────────────────
// 3. Runtime Integration Architecture & Shader Presets
// ────────────────────────────────────────────────────────────────────────────
console.log('\n--- 3. Runtime Integration Architecture & Shader Presets ---');

const shaderModulePath = path.join(repoRoot, 'js/shader-glass.js');
assert(fs.existsSync(shaderModulePath), 'Integration module js/shader-glass.js exists');

const {
  isWebGLAvailable,
  prefersReducedMotion,
  SHADER_GLASS_PRESETS,
  initShaderGlass,
  destroyShaderGlass,
  destroyAllShaderGlass,
  getActiveShaderInstanceCount,
  loadLiquidGlassLibrary
} = await import(path.join(repoRoot, 'js/shader-glass.js'));

assert(typeof isWebGLAvailable === 'function', 'Exports isWebGLAvailable() predicate');
assert(typeof prefersReducedMotion === 'function', 'Exports prefersReducedMotion() predicate');
assert(typeof initShaderGlass === 'function', 'Exports initShaderGlass() coordinator');
assert(typeof destroyShaderGlass === 'function', 'Exports destroyShaderGlass() handler');
assert(typeof destroyAllShaderGlass === 'function', 'Exports destroyAllShaderGlass() cleanup');
assert(typeof getActiveShaderInstanceCount === 'function', 'Exports getActiveShaderInstanceCount() monitor');
assert(typeof loadLiquidGlassLibrary === 'function', 'Exports loadLiquidGlassLibrary() lazy-loader');

// Test Presets
assert(Boolean(SHADER_GLASS_PRESETS.HERO_CARD), 'Defines HERO_CARD optical preset');
assert(Boolean(SHADER_GLASS_PRESETS.PILL_BUTTON), 'Defines PILL_BUTTON optical preset');
assert(Boolean(SHADER_GLASS_PRESETS.NAV_BAR), 'Defines NAV_BAR optical preset');
assert(Boolean(SHADER_GLASS_PRESETS.MODAL), 'Defines MODAL optical preset');
assert(Boolean(SHADER_GLASS_PRESETS.FLOATING_CAPSULE), 'Defines FLOATING_CAPSULE optical preset');
assert(Boolean(SHADER_GLASS_PRESETS.SUBTLE_CHIP), 'Defines SUBTLE_CHIP optical preset');

const heroPreset = SHADER_GLASS_PRESETS.HERO_CARD;
assert(heroPreset.refraction > 0, `Hero preset has realistic refraction (${heroPreset.refraction})`);
assert(heroPreset.chromAberration > 0, `Hero preset has chromatic aberration (${heroPreset.chromAberration})`);
assert(heroPreset.specular > 0, `Hero preset has specular lighting (${heroPreset.specular})`);
assert(heroPreset.fresnel > 0, `Hero preset has Fresnel reflection (${heroPreset.fresnel})`);
assert(heroPreset.edgeHighlight > 0, `Hero preset has edge highlight (${heroPreset.edgeHighlight})`);
assert(heroPreset.cornerRadius > 0 && heroPreset.zRadius > 0, `Hero preset defines realistic rounded glass edges (${heroPreset.cornerRadius}px, zRadius: ${heroPreset.zRadius}px)`);

// Test Lazy Loading of LiquidGlass Library
const loadedLib = await loadLiquidGlassLibrary();
assert(Boolean(loadedLib.LiquidGlass), 'loadLiquidGlassLibrary() successfully resolves LiquidGlass class');
assert(Boolean(loadedLib.DEFAULTS), 'loadLiquidGlassLibrary() successfully resolves DEFAULTS');

// Test Non-DOM / Fallback Safety
const fallbackResult = await initShaderGlass({ root: null });
assert(fallbackResult.success === false, 'Safely handles missing root without unhandled exceptions');
assert(fallbackResult.mode === 'disabled', 'Returns mode: disabled when root is absent');

// ────────────────────────────────────────────────────────────────────────────
// 4. Emil Kowalski Design & Animation Skills Discovery
// ────────────────────────────────────────────────────────────────────────────
console.log('\n--- 4. Emil Kowalski Skills Discovery & Verification ---');

const skillsLockPath = path.join(repoRoot, 'skills-lock.json');
assert(fs.existsSync(skillsLockPath), 'skills-lock.json exists at repository root');
const skillsLock = JSON.parse(fs.readFileSync(skillsLockPath, 'utf-8'));

const requiredSkills = [
  'emil-design-eng',
  'animate',
  'animate-expo',
  'review-animations',
  'improve-animations',
  'find-animation-opportunities',
  'remove-animations',
  'choreograph',
  'animation-performance',
  'animation-vocabulary',
  'apple-design',
  'gestures',
  'write-swift',
  'pick-ui-library',
  'prototype',
  'mobile-native',
  'break-ui',
  'ask-sonner'
];

const agentsSkillsDir = path.join(repoRoot, '.agents/skills');
assert(fs.existsSync(agentsSkillsDir), '.agents/skills directory exists for Antigravity discovery');

for (const skillName of requiredSkills) {
  const skillDir = path.join(agentsSkillsDir, skillName);
  const skillFile = path.join(skillDir, 'SKILL.md');
  const exists = fs.existsSync(skillFile);
  assert(exists, `Skill [${skillName}] exists with SKILL.md in .agents/skills/`);

  if (exists) {
    const content = fs.readFileSync(skillFile, 'utf-8');
    assert(content.startsWith('---'), `Skill [${skillName}] begins with YAML frontmatter`);
    assert(content.includes('name:') && content.includes('description:'), `Skill [${skillName}] contains valid name and description metadata`);
  }

  assert(Boolean(skillsLock.skills && skillsLock.skills[skillName]), `Skill [${skillName}] is tracked in skills-lock.json`);
}

// Verify existing non-Emil skills were NOT removed
assert(Boolean(skillsLock.skills['frontend-design']), 'Preserved existing frontend-design skill');
assert(Boolean(skillsLock.skills['web-design-guidelines']), 'Preserved existing web-design-guidelines skill');

console.log('\n======================================================');
console.log(`VERIFICATION SUMMARY: ${passed} passed, ${failed} failed`);
console.log('======================================================\n');

if (failed > 0) {
  process.exit(1);
}

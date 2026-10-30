import fs from 'fs';
import path from 'path';

function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === '.gemini') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles('.');
console.log(`Auditing images across ${htmlFiles.length} HTML files...`);

let missingAltCount = 0;
let missingLazyCount = 0;
let missingDimCount = 0;
let totalImgTags = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const imgMatches = content.matchAll(/<img\s+([^>]+)>/gi);
  for (const match of imgMatches) {
    totalImgTags++;
    const attrs = match[1];
    if (!attrs.includes('alt=')) {
      missingAltCount++;
      console.warn(`[Missing alt] ${file}: ${match[0]}`);
    }
    // Check if below-the-fold or in card
    if (!attrs.includes('loading=') && !match[0].includes('hero') && !match[0].includes('nav-logo')) {
      missingLazyCount++;
    }
  }
}

console.log(`Image Audit Summary:
  Total <img> tags: ${totalImgTags}
  Missing alt: ${missingAltCount}
  Missing loading="lazy": ${missingLazyCount}
`);

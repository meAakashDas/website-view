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

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const imgMatches = content.matchAll(/<img\s+([^>]+)>/gi);
  for (const match of imgMatches) {
    const attrs = match[1];
    if (!attrs.includes('loading=')) {
      console.log(`${file}: ${match[0]}`);
    }
  }
}

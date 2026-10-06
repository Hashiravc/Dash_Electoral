import { mkdir, copyFile, readdir } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of await readdir('public')) await copyFile(`public/${file}`, `dist/${file}`);
console.log('Dashboard preparado en dist/');

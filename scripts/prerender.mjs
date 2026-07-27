import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distIndexPath = path.resolve(root, 'dist/index.html');

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  const appHtml = render();

  const template = fs.readFileSync(distIndexPath, 'utf-8');
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(distIndexPath, finalHtml);
  console.log('Prerendered content injected into dist/index.html');
} finally {
  await vite.close();
}

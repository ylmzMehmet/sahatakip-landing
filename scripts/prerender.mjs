import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://www.sahatakip.net';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.resolve(root, 'dist');
const distIndexPath = path.resolve(distDir, 'index.html');

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
});

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function applyMeta(template, { path: routePath, title, description }) {
  let html = template;
  const canonicalUrl = `${SITE_URL}${routePath === '/' ? '/' : routePath + '/'}`;

  if (title) {
    const safeTitle = escapeHtml(title);
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);
    html = html.replace(
      /(<meta property="og:title" content=")[\s\S]*?(" \/>)/,
      `$1${safeTitle}$2`
    );
    html = html.replace(
      /(<meta name="twitter:title" content=")[\s\S]*?(" \/>)/,
      `$1${safeTitle}$2`
    );
  }

  if (description) {
    const safeDescription = escapeHtml(description);
    html = html.replace(
      /(<meta name="description" content=")[\s\S]*?(" \/>)/,
      `$1${safeDescription}$2`
    );
    html = html.replace(
      /(<meta property="og:description" content=")[\s\S]*?(" \/>)/,
      `$1${safeDescription}$2`
    );
    html = html.replace(
      /(<meta name="twitter:description" content=")[\s\S]*?(" \/>)/,
      `$1${safeDescription}$2`
    );
  }

  html = html.replace(
    /(<link rel="canonical" href=")[\s\S]*?(" \/>)/,
    `$1${canonicalUrl}$2`
  );
  html = html.replace(
    /(<meta property="og:url" content=")[\s\S]*?(" \/>)/,
    `$1${canonicalUrl}$2`
  );

  return html;
}

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  const { blogPosts } = await vite.ssrLoadModule('/src/data/blogPosts.ts');

  const routes = [
    { path: '/', outFile: 'index.html' },
    {
      path: '/blog',
      outFile: 'blog/index.html',
      title: 'Blog | SahaTakip',
      description:
        'SahaTakip blog - saha ekibi yönetimi, saha takip ve saha satış operasyonları hakkında pratik rehberler.',
    },
    ...blogPosts.map(post => ({
      path: `/blog/${post.slug}`,
      outFile: `blog/${post.slug}/index.html`,
      title: `${post.title} | SahaTakip`,
      description: post.description,
    })),
  ];

  const template = fs.readFileSync(distIndexPath, 'utf-8');

  for (const route of routes) {
    const appHtml = render(route.path);
    let html = applyMeta(template, route);
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outPath = path.resolve(distDir, route.outFile);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    console.log(`Prerendered ${route.path} -> dist/${route.outFile}`);
  }

  const sitemapUrls = routes
    .map(route => {
      const loc = `${SITE_URL}${route.path === '/' ? '/' : route.path + '/'}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route.path === '/' ? '1.0' : '0.7'}</priority>\n  </url>`;
    })
    .join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemap);
  console.log(`Wrote dist/sitemap.xml with ${routes.length} URLs`);
} finally {
  await vite.close();
}

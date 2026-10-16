// Writes a fully rendered HTML file per route into dist/ so search engines,
// AI crawlers and link previews see real content without running JavaScript.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, ROUTES, NOT_FOUND, SITE_URL, OG_IMAGE } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function headTags(seo, routePath) {
  const url = `${SITE_URL}${routePath}`;
  const tags = [
    `<title>${escape(seo.title)}</title>`,
    `<meta name="description" content="${escape(seo.description)}">`,
  ];
  if (seo.noindex) {
    tags.push('<meta name="robots" content="noindex">');
  } else {
    tags.push(
      `<link rel="canonical" href="${url}">`,
      `<meta property="og:title" content="${escape(seo.ogTitle || seo.title)}">`,
      `<meta property="og:description" content="${escape(seo.ogDescription || seo.description)}">`,
      `<meta property="og:url" content="${url}">`,
      `<meta property="og:image" content="${OG_IMAGE}">`
    );
  }
  return tags.join('\n    ');
}

// Identical files share one content hash. The client build emits only one of
// them, but the server build may reference the other name, so point those
// URLs at the file that exists.
const assetDir = path.join(dist, 'assets');
const byHash = new Map(
  fs.readdirSync(assetDir).map((name) => [name.match(/-([\w-]{8})\.\w+$/)?.[1], name])
);
const fixAssetUrls = (html) =>
  html.replace(/\/assets\/([^"'\s)]+?)-([\w-]{8})\.(\w+)/g, (url, name, hash, ext) => {
    if (fs.existsSync(path.join(assetDir, decodeURIComponent(`${name}-${hash}.${ext}`)))) return url;
    const existing = byHash.get(hash);
    return existing ? `/assets/${encodeURI(existing)}` : url;
  });

function page(routePath, seo) {
  const html = fixAssetUrls(render(routePath));
  return template
    .replace(/<title>.*?<\/title>/s, headTags(seo, routePath))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

for (const [routePath, seo] of Object.entries(ROUTES)) {
  const file = routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), page(routePath, seo));
  console.log(`prerendered ${routePath} -> dist/${file}`);
}

// Vercel serves dist/404.html with a 404 status for unknown URLs.
fs.writeFileSync(path.join(dist, '404.html'), page('/404', NOT_FOUND));
console.log('prerendered 404 -> dist/404.html');

fs.rmSync(ssrDir, { recursive: true, force: true });

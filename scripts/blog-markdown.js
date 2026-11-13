// Vite plugin: turns src/content/blog/*.md into ready-to-render modules at
// build time, so no Markdown parser ships to the browser.
//
// A post file starts with a small header ("front matter"):
//   ---
//   title: How to choose a Montessori school in Tirupur
//   description: One or two sentences for Google and link previews.
//   date: 2026-12-01
//   updated: 2026-12-10          (optional)
//   author: kavitha               (key from AUTHORS in src/blog/posts.js)
//   cover: choosing-school.jpg    (file in src/assets/blog/)
//   coverAlt: What the cover photo shows
//   draft: true                   (optional: shown on previews, hidden on the live site)
//   ---
// followed by the post in Markdown. Images in the text use files from
// src/assets/blog/, e.g. ![Children at work](circle-time.jpg).
//
// Each file becomes: export default { data, html, cover, wordCount } (or null
// for a draft on the live site).
import { Marked } from 'marked';

const IMAGE_DIR = '/src/assets/blog/';

function parseFrontMatter(source) {
  const match = source.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: source };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z][\w-]*)\s*:\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim().replace(/^["']|["']$/g, '');
    if (value === 'true') value = true;
    else if (value === 'false') value = false;
    data[kv[1]] = value;
  }
  return { data, body: match[2] };
}

const escapeAttr = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default function blogMarkdown({ showDrafts }) {
  return {
    name: 'divyataa-blog-markdown',
    enforce: 'pre',
    transform(source, id) {
      const file = id.split('?')[0];
      if (!file.endsWith('.md') || !file.replace(/\\/g, '/').includes('/src/content/blog/')) return null;

      const { data, body } = parseFrontMatter(source);
      if (data.draft && !showDrafts) {
        return { code: 'export default null;', map: null };
      }
      if (!data.title || !data.date) {
        this.error(`${file}: front matter needs at least "title" and "date".`);
      }

      // Images become real imports so they go through the WebP pipeline and
      // get hashed URLs; the HTML holds placeholders swapped in at runtime.
      const imports = [];
      const imageRef = (src) => {
        const name = `__blogImg${imports.length}`;
        imports.push(`import ${name} from ${JSON.stringify(IMAGE_DIR + src.replace(/^\.?\/?/, ''))};`);
        return name;
      };

      const marked = new Marked({ gfm: true });
      marked.use({
        renderer: {
          image({ href, title, text }) {
            if (/^https?:\/\//.test(href)) {
              return `<img src="${escapeAttr(href)}" alt="${escapeAttr(text)}" loading="lazy" decoding="async">`;
            }
            const ref = imageRef(href);
            const caption = title ? `<figcaption>${escapeAttr(title)}</figcaption>` : '';
            return `<figure><img src="@@${ref}@@" alt="${escapeAttr(text)}" loading="lazy" decoding="async">${caption}</figure>`;
          },
          link({ href, title, tokens }) {
            const label = this.parser.parseInline(tokens);
            const external = /^https?:\/\//.test(href) && !href.includes('divyataa.in');
            const extra = external ? ' target="_blank" rel="noopener noreferrer"' : '';
            const t = title ? ` title="${escapeAttr(title)}"` : '';
            return `<a href="${escapeAttr(href)}"${t}${extra}>${label}</a>`;
          },
        },
      });

      const html = marked.parse(body);
      const coverRef = data.cover ? imageRef(data.cover) : null;
      const wordCount = body.split(/\s+/).filter(Boolean).length;

      let htmlExpr = JSON.stringify(html);
      for (let i = 0; i < imports.length; i++) {
        htmlExpr += `.replaceAll(${JSON.stringify(`@@__blogImg${i}@@`)}, __blogImg${i})`;
      }

      const code = `${imports.join('\n')}
export default {
  data: ${JSON.stringify(data)},
  html: ${htmlExpr},
  cover: ${coverRef || 'null'},
  wordCount: ${wordCount},
};`;
      return { code, map: null };
    },
  };
}

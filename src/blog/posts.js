/* global __SHOW_DRAFTS__ */
// Blog posts: every Markdown file in src/content/blog/ becomes a post at
// /blog/<file-name>. See scripts/blog-markdown.js for the file format and
// src/content/blog/HOW-TO-ADD-A-POST.txt for the steps.

export const AUTHORS = {
  kavitha: {
    name: 'Kavitha Sudakar',
    role: 'Principal and Co-Founder, Divyataa International School',
    credentials: 'M.Sc., M.Phil., NET, SLET, JRF',
    bio: 'A former university lecturer who turned to early childhood education and Montessori, Kavitha leads Divyataa as principal.',
  },
  divyataa: {
    name: 'Divyataa International School',
    role: 'Pure Montessori school in Tirupur, KG to Grade 6',
    credentials: '',
    bio: 'A pure Montessori school on Angeripalayam Main Road, Tirupur, run by the SMR Pavalammal Educational Trust.',
  },
};

const modules = import.meta.glob('../content/blog/*.md', { eager: true, import: 'default' });

export const posts = Object.entries(modules)
  .map(([path, post]) => post && { slug: path.split('/').pop().replace(/\.md$/, ''), ...post })
  .filter(Boolean)
  .filter((post) => __SHOW_DRAFTS__ || !post.data.draft)
  .sort((a, b) => String(b.data.date).localeCompare(String(a.data.date)));

export const getPost = (slug) => posts.find((post) => post.slug === slug);

export const getAuthor = (post) => AUTHORS[post.data.author] || AUTHORS.divyataa;

export const readingMinutes = (post) => Math.max(1, Math.round(post.wordCount / 200));

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

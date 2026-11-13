import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFound from './NotFound';
import { posts, getPost, getAuthor, readingMinutes, formatDate } from '../blog/posts';
import { SITE_URL } from '../seo';

// /blog/:slug: one post. The body is HTML produced from Markdown at build time.
const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  const { data } = post;
  const author = getAuthor(post);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Article data Google and AI assistants read for author, dates and topic.
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.description,
    datePublished: data.date,
    dateModified: data.updated || data.date,
    mainEntityOfPage: url,
    url,
    ...(post.cover && { image: `${SITE_URL}${post.cover}` }),
    author:
      data.author && data.author !== 'divyataa'
        ? { '@type': 'Person', name: author.name, jobTitle: author.role }
        : { '@type': 'Organization', name: author.name, url: `${SITE_URL}/` },
    publisher: { '@id': `${SITE_URL}/#school` },
    inLanguage: 'en-IN',
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: data.title, item: url },
    ],
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-purple-100">
      <Navbar />

      <article>
        <header className="pt-40 md:pt-48 pb-10 px-6">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
              <Link to="/" className="hover:text-purple-700">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link to="/blog" className="hover:text-purple-700">Blog</Link>
            </nav>
            {data.draft && (
              <p className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                Draft: visible on previews only, not on the live site
              </p>
            )}
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6">{data.title}</h1>
            {data.description && <p className="text-xl text-slate-700 leading-relaxed mb-6">{data.description}</p>}
            <p className="text-sm text-slate-600">
              By <span className="font-bold text-slate-800">{author.name}</span>
              {author.credentials && `, ${author.credentials}`} ·{' '}
              <time dateTime={data.date}>{formatDate(data.date)}</time>
              {data.updated && (
                <>
                  {' '}· Updated <time dateTime={data.updated}>{formatDate(data.updated)}</time>
                </>
              )}{' '}
              · {readingMinutes(post)} min read
            </p>
          </div>
        </header>

        {post.cover && (
          <div className="max-w-5xl mx-auto px-6 mb-12">
            <img
              src={post.cover}
              alt={data.coverAlt || ''}
              fetchPriority="high"
              className="w-full rounded-[2rem] object-cover aspect-[16/9] shadow-lg"
            />
          </div>
        )}

        <div className="px-6">
          <div className="blog-prose max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        {/* About the author */}
        <aside className="max-w-3xl mx-auto px-6 mt-14">
          <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-2">About the author</p>
            <p className="font-bold text-slate-900">
              {author.name}
              {author.credentials && <span className="font-normal text-slate-700">, {author.credentials}</span>}
            </p>
            <p className="text-slate-700">{author.role}</p>
            <p className="text-slate-700 mt-2">{author.bio}</p>
          </div>
        </aside>
      </article>

      {/* Visit call to action */}
      <section className="max-w-3xl mx-auto px-6 my-14">
        <div className="rounded-[2rem] bg-purple-700 p-8 md:p-10 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">See Montessori in practice</h2>
          <p className="text-purple-100 mb-6">
            Visit Divyataa on a working morning and watch the children at work. #76/6, Angeripalayam Main Road, Tirupur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-purple-800 hover:bg-purple-50 transition-colors"
            >
              Book a visit <ArrowRight size={18} />
            </Link>
            <Link
              to="/montessori-school-tirupur"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-3.5 font-bold text-white hover:bg-white/10 transition-colors"
            >
              About our school
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">More from the blog</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="block h-full rounded-[1.5rem] border border-slate-100 p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-lg font-serif font-bold text-slate-900 mb-2">{p.data.title}</p>
                  <p className="text-slate-700">{p.data.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!data.draft && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;

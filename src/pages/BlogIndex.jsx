import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { posts, getAuthor, readingMinutes, formatDate } from '../blog/posts';

// /blog: list of posts, newest first. Plain markup for fast first paint.
const BlogIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-purple-100">
      <Navbar />

      <header className="pt-40 md:pt-48 pb-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-6">
            Parent guides &amp; stories
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-5">
            The Divyataa Blog
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            Practical guides for parents and stories from our Montessori classrooms in Tirupur.
          </p>
        </div>
      </header>

      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-lg text-slate-700">Our first posts are on their way.</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
                  >
                    {post.cover && (
                      <img
                        src={post.cover}
                        alt={post.data.coverAlt || ''}
                        loading={index < 3 ? 'eager' : 'lazy'}
                        decoding="async"
                        className="aspect-[16/10] w-full object-cover"
                      />
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      {post.data.draft && (
                        <span className="mb-3 self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                          Draft (preview only)
                        </span>
                      )}
                      <h2 className="text-xl font-serif font-bold text-slate-900 leading-snug mb-3 group-hover:text-purple-700 transition-colors">
                        {post.data.title}
                      </h2>
                      <p className="text-slate-700 leading-relaxed mb-5 flex-1">{post.data.description}</p>
                      <p className="text-sm text-slate-600">
                        {getAuthor(post).name} · <time dateTime={post.data.date}>{formatDate(post.data.date)}</time> ·{' '}
                        {readingMinutes(post)} min read
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;

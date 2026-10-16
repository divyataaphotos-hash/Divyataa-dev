import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-[60vh] bg-white flex items-center justify-center px-6 pt-40 pb-24">
        <div className="text-center max-w-xl">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Page not found</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#7208b3] mb-6">This path leads nowhere.</h1>
          <p className="text-slate-600 mb-10">
            The page you were looking for doesn't exist. Let's take you somewhere useful.
          </p>
          <Link
            to="/"
            className="inline-block rounded-full bg-[#7208b3] px-8 py-3 text-white font-medium hover:opacity-90 transition"
          >
            Back to home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;

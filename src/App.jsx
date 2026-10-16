import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Curriculum from './pages/Curriculum';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

import ScrollToTop from './components/ScrollToTop';
import Seo from './components/Seo';

// The router comes from main.jsx (browser) or entry-server.jsx (prerender).
function App() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/campus" element={<Experience />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}


export default App;

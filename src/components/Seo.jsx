import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo, SITE_URL } from '../seo';

// The prerendered HTML already contains these tags; this keeps them in sync
// when the visitor navigates between pages without a full reload.
const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    const url = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;
    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', seo.ogTitle || seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.ogDescription || seo.description);
    setMeta('meta[property="og:url"]', 'content', url);
  }, [pathname]);

  return null;
};

export default Seo;

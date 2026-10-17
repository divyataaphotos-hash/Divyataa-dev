import { useEffect, useRef, useState } from 'react';

// Google Maps embeds pull in ~250 KB of scripts. Native loading="lazy"
// starts fetching while the map is still a few screens away, so only mount
// the iframe once the visitor scrolls close to it. Takes the same props as
// the <iframe> it renders.
const LazyMap = ({ title = 'Map', ...iframeProps }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {visible ? (
        <iframe title={title} {...iframeProps} />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-sm text-slate-500">
          Loading map…
        </div>
      )}
    </div>
  );
};

export default LazyMap;

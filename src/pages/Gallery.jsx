import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import classVideo1 from '../assets/videos/IMG_5163.mp4';
import classVideo2 from '../assets/videos/IMG_5187.mp4';
import classVideo3 from '../assets/videos/IMG_5188.mp4';
import classPoster1 from '../assets/videos/IMG_5163-poster.jpg?gallery';
import classPoster2 from '../assets/videos/IMG_5187-poster.jpg?gallery';
import classPoster3 from '../assets/videos/IMG_5188-poster.jpg?gallery';
import classImg12 from '../Website/Gallery Page/Classsroom Life/018A8914.JPG?gallery';
import classImg1 from '../Website/Gallery Page/Classsroom Life/018A8924.JPG?gallery';
import classImg2 from '../Website/Gallery Page/Classsroom Life/018A8939.JPG?gallery';
import classImg3 from '../Website/Gallery Page/Classsroom Life/018A8941.JPG?gallery';
import classImg4 from '../Website/Gallery Page/Classsroom Life/018A8943.JPG?gallery';
import classImg5 from '../Website/Gallery Page/Classsroom Life/018A8945.JPG?gallery';
import classImg6 from '../Website/Gallery Page/Classsroom Life/IMG_4910.JPG?gallery';
import classImg7 from '../Website/Gallery Page/Classsroom Life/IMG_4912.JPG?gallery';
import classImg8 from '../Website/Gallery Page/Classsroom Life/IMG_4915.JPG?gallery';
import classImg9 from '../Website/Gallery Page/Classsroom Life/IMG_4939.JPG?gallery';
import classImg10 from '../Website/Gallery Page/Classsroom Life/IMG_4952.JPG?gallery';
import classImg11 from '../Website/Gallery Page/Classsroom Life/IMG_4956.JPG?gallery';
import classImg13 from '../Website/Gallery Page/Classsroom Life/IMG_4959.JPG?gallery';
import classImg14 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h39m38s850.jpg?gallery';
import classImg15 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h41m17s460.jpg?gallery';
import classImg16 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h42m01s281.jpg?gallery';
import classImg17 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h42m56s677.jpg?gallery';
import classImg18 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h43m15s934.jpg?gallery';
import classImg19 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h46m28s932.jpg?gallery';
import classImg20 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h58m58s787.jpg?gallery';
import eventImg1 from '../Website/Gallery Page/Events & Festivals/1000016403_c81811717c98ef55c851c01faa2029fa-10_04_2026, 13_03_40.jpg?gallery';
import eventImg2 from '../Website/Gallery Page/Events & Festivals/c1435586-65a1-4296-842c-9f6c0bf5f484.jpg?gallery';
import eventImg3 from '../Website/Gallery Page/Events & Festivals/image (13).jpg?gallery';
import eventImg4 from '../Website/Gallery Page/Events & Festivals/image (14).jpg?gallery';
import eventImg5 from '../Website/Gallery Page/Events & Festivals/IMG_4317.JPG?gallery';
import eventImg6 from '../Website/Gallery Page/Events & Festivals/IMG_5213.jpg?gallery';
import eventImg18 from '../Website/Gallery Page/Events & Festivals/IMG_7231.JPG?gallery';
import eventImg19 from '../Website/Gallery Page/Events & Festivals/IMG_7235.JPG?gallery';
import eventImg20 from '../Website/Gallery Page/Events & Festivals/IMG_7301.JPG?gallery';
import eventImg21 from '../Website/Gallery Page/Events & Festivals/IMG_7303.JPG?gallery';
import campusImg1 from '../Website/Gallery Page/Campus/8f8e94c0-49a5-4fed-bdb4-d25b3a92bc38 (1).jpg?gallery';
import campusImg2 from '../Website/Gallery Page/Campus/ab76e0e4-4927-4ed0-a8ea-d8017a20d88a (2).jpg?gallery';
import campusImg3 from '../Website/Gallery Page/Campus/e6cebd15-a4b7-4d83-98e9-48e43fb47d65 (1).jpg?gallery';
import eventImg22 from '../Website/Gallery Page/Annual Day/5C7A9014.JPG?gallery';
import eventImg23 from '../Website/Gallery Page/Annual Day/5C7A9114.JPG?gallery';
import eventImg24 from '../Website/Gallery Page/Annual Day/5C7A9124.JPG?gallery';
import eventImg25 from '../Website/Gallery Page/Annual Day/5C7A9126.JPG?gallery';
import eventImg26 from '../Website/Gallery Page/Annual Day/5C7A9141.JPG?gallery';
import eventImg27 from '../Website/Gallery Page/Annual Day/5C7A9162.JPG?gallery';
import eventImg28 from '../Website/Gallery Page/Annual Day/5C7A9168.JPG?gallery';
import eventImg29 from '../Website/Gallery Page/Annual Day/5C7A9376.JPG?gallery';
import eventImg30 from '../Website/Gallery Page/Annual Day/5C7A9448.JPG?gallery';
import eventImg31 from '../Website/Gallery Page/Annual Day/5C7A9486.JPG?gallery';
import eventImg32 from '../Website/Gallery Page/Annual Day/5C7A9583.JPG?gallery';
import eventImg33 from '../Website/Gallery Page/Annual Day/5C7A9603.JPG?gallery';
import eventImg34 from '../Website/Gallery Page/Annual Day/5C7A9683.JPG?gallery';
import eventImg35 from '../Website/Gallery Page/Annual Day/5C7A9691.JPG?gallery';
import eventImg36 from '../Website/Gallery Page/Annual Day/5C7A9738.JPG?gallery';
import eventImg37 from '../Website/Gallery Page/Annual Day/5C7A9810.JPG?gallery';
import sportImg1 from '../Website/Gallery Page/Extracurricular/5C7A9283.JPG?gallery';
import sportImg2 from '../Website/Gallery Page/Extracurricular/6b35c38a-15fa-482d-b6de-32e5ca9e50c8.jpg?gallery';
import sportImg3 from '../Website/Gallery Page/Extracurricular/6db167be-7732-45d4-8c63-063152049f3b.jpg?gallery';
import sportImg4 from '../Website/Gallery Page/Extracurricular/292A1320.JPG?gallery';
import sportImg5 from '../Website/Gallery Page/Extracurricular/4382eefe-b755-42dd-866b-a098b44a8669.jpg?gallery';
import sportImg6 from '../Website/Gallery Page/Extracurricular/image (1).jpg?gallery';
import sportImg7 from '../Website/Gallery Page/Extracurricular/image (2).jpg?gallery';
import sportImg8 from '../Website/Gallery Page/Extracurricular/image (5).jpg?gallery';
import sportImg9 from '../Website/Gallery Page/Extracurricular/image (7).jpg?gallery';
import sportImg10 from '../Website/Gallery Page/Extracurricular/image (8).jpg?gallery';
import sportImg11 from '../Website/Gallery Page/Extracurricular/image (9).jpg?gallery';
import sportImg12 from '../Website/Gallery Page/Extracurricular/image (10).jpg?gallery';
import sportImg13 from '../Website/Gallery Page/Extracurricular/image (11).jpg?gallery';
import sportImg14 from '../Website/Gallery Page/Extracurricular/image (15).png?gallery';
import sportImg15 from '../Website/Gallery Page/Extracurricular/image.jpg?gallery';


const categories = [
  { id: 'all', label: 'All' },
  { id: 'classroom', label: 'Classroom Life' },
  { id: 'sports', label: 'Sports and Co-Curricular' },
  { id: 'campus', label: 'Campus and Spaces' },
  { id: 'events', label: 'Events and Annual Day' },
];

// Photos are imported with `?gallery` (see vite.config.js), so `src` is
// { src, srcset, w, h } with a small WebP for tiles and a large one for the
// lightbox. `title` is the caption shown on the tile; `alt` describes the photo for
// search engines and screen readers and is shown in the lightbox.
const galleryItems = [
  { type: 'video', category: 'events', id: 'hG-e0nbh5bM', title: "Principal's address" },
  { type: 'video', category: 'events', id: 'ysi8Zr5IpI4', title: "Convocation" },
  { type: 'video', category: 'events', id: 'KTVIJMbVOr4', title: "Bhangra dance" },
  { type: 'video', category: 'events', id: '5QPd0GmTRx0', title: "The spirit of beauty dance" },
  { type: 'video', category: 'events', id: 'GeBOLtLPHEw', title: "Devotional Dance" },
  { type: 'video', category: 'classroom', src: classVideo1, poster: classPoster1, title: "Classroom activity" },
  { type: 'video', category: 'classroom', src: classVideo2, poster: classPoster2, title: "Match the shapes" },
  { type: 'video', category: 'classroom', src: classVideo3, poster: classPoster3, title: "Shifting bowls" },
  { type: 'video', category: 'events', id: 'bNjSrTw7sLA', title: "Skit-Social Awareness" },
  { type: 'video', category: 'events', id: 'WvaN5xkkWd4', title: "Mom & Me dance" },
  { type: 'video', category: 'sports', id: 'uLw-UkgPDxQ', title: "Karate Performance" },
  { type: 'video', category: 'events', id: 'AN88vvBB4Ko', title: "Colours of nature dance" },
  { type: 'video', category: 'sports', id: 'FIIT7RBansI', title: "Yoga Performance" },
  { type: 'video', category: 'events', id: '3urrM1tUwG0', title: "A year in review" },
  { type: 'video', category: 'events', id: '3aXeIFhULLM', title: "Welcome dance" },

  // Classroom life
  { type: 'image', category: 'classroom', src: classImg12, title: "Knowledge Time", alt: "A Montessori guide leading circle time with children seated on the classroom floor" },
  { type: 'image', category: 'classroom', src: classImg1, title: "Word Maze", alt: "A child working with Montessori language materials on a floor mat beside her guide" },
  { type: 'image', category: 'classroom', src: classImg2, title: "Colour Tracks", alt: "A young child grading Montessori colour tablets on a floor mat" },
  { type: 'image', category: 'classroom', src: classImg3, title: "One-on-One Lesson", alt: "A guide giving a child an individual lesson at a low work table" },
  { type: 'image', category: 'classroom', src: classImg4, title: "Verbal Training", alt: "A guide and child reading picture cards together at a small table" },
  { type: 'image', category: 'classroom', src: classImg5, title: "Image Identification", alt: "A guide showing a child how to match picture cards on a floor mat" },
  { type: 'image', category: 'classroom', src: classImg6, title: "Hands-on Craft", alt: "A child practising cutting with scissors at a work table" },
  { type: 'image', category: 'classroom', src: classImg7, title: "Design Thinking", alt: "Two boys tracing Montessori metal insets at their tables" },
  { type: 'image', category: 'classroom', src: classImg8, title: "Arts Time", alt: "A boy tracing shapes with a pencil using geometric insets" },
  { type: 'image', category: 'classroom', src: classImg9, title: "Logical Minds", alt: "A child working with Montessori knobbed cylinders on the floor" },
  { type: 'image', category: 'classroom', src: classImg10, title: "Creative Hands", alt: "A boy concentrating on a hands-on sensorial activity" },
  { type: 'image', category: 'classroom', src: classImg11, title: "Stamp Game", alt: "A child doing place-value maths with the Montessori stamp game" },
  { type: 'image', category: 'classroom', src: classImg13, title: "Peg Board Counting", alt: "A child counting with green pegs on a Montessori peg board" },
  { type: 'image', category: 'classroom', src: classImg14, title: "Shape Fix", alt: "Two children working together on a floor activity" },
  { type: 'image', category: 'classroom', src: classImg15, title: "Golden Beads", alt: "A child building numbers with the Montessori golden bead material" },
  { type: 'image', category: 'classroom', src: classImg16, title: "Number Match", alt: "A child exploring thousand cubes from the golden bead material" },
  { type: 'image', category: 'classroom', src: classImg17, title: "Around the world", alt: "Two children exploring continents on a Montessori globe" },
  { type: 'image', category: 'classroom', src: classImg18, title: "Find the place", alt: "Children taking turns to find places on the globe" },
  { type: 'image', category: 'classroom', src: classImg19, title: "Language strength", alt: "A boy sitting quietly by the classroom shelves, ready to choose his work" },
  { type: 'image', category: 'classroom', src: classImg20, title: "Abacus Time", alt: "A child counting units, tens, hundreds and thousands on a bead frame abacus" },
  { type: 'image', category: 'classroom', src: sportImg15, title: "Story on the Big Screen", alt: "Children watching an animated story on the classroom smart screen with their teachers" },

  // Festivals and celebrations
  { type: 'image', category: 'events', src: eventImg1, title: "Wonder and Shine", alt: "Children in festive clothes in front of a Navaratri golu display" },
  { type: 'image', category: 'events', src: eventImg2, title: "Radiance", alt: "Children making a flower pookolam together on the floor" },
  { type: 'image', category: 'events', src: eventImg3, title: "Dance of Dreams", alt: "Girls dressed in colourful festive outfits for a school celebration" },
  { type: 'image', category: 'events', src: eventImg4, title: "Little Explorers", alt: "Two children role-playing an exchange at a decorated doorway" },
  { type: 'image', category: 'events', src: eventImg5, title: "The Enchanted Journey", alt: "The whole school gathered at the entrance for a group photo" },
  { type: 'image', category: 'events', src: eventImg6, title: "Dreamscape", alt: "A child holding a cardboard car model built in class" },
  { type: 'image', category: 'events', src: eventImg18, title: "Every child a star", alt: "Children in traditional clothes celebrating Pongal with sugarcane" },
  { type: 'image', category: 'events', src: eventImg19, title: "Festival of dreams", alt: "Grandparents and children performing the Pongal puja together" },
  { type: 'image', category: 'events', src: eventImg20, title: "Footprint of tomorrow", alt: "Parents and children taking part in a hoop race on sports day" },
  { type: 'image', category: 'events', src: eventImg21, title: "Beyond the Horizon", alt: "Families lined up on the track for a sports day race" },

  // Campus
  { type: 'image', category: 'campus', src: campusImg1, title: "Our New Campus", alt: "Architectural rendering of the new Divyataa school building in Tirupur" },
  { type: 'image', category: 'campus', src: campusImg2, title: "The New Building", alt: "Rendering of the front of the new Divyataa building with its columned entrance" },
  { type: 'image', category: 'campus', src: campusImg3, title: "Grounds and Entrance", alt: "Rendering of the new campus entrance, forecourt and lawn" },
  { type: 'image', category: 'campus', src: sportImg6, title: "Visiting the Building Site", alt: "Children visiting the construction site of their new school building" },
  { type: 'image', category: 'campus', src: sportImg7, title: "Watching the Builders", alt: "Children and a teacher talking with a builder at the new campus site" },

  // Annual Day (Divyotsav)
  { type: 'image', category: 'events', src: eventImg22, title: "Blooming Buds", alt: "Children singing together on stage at the Divyotsav annual day" },
  { type: 'image', category: 'events', src: eventImg23, title: "Imagine, Create, Achieve", alt: "A smiling boy greeting the audience with folded hands on stage" },
  { type: 'image', category: 'events', src: eventImg24, title: "Rainbow of Talents", alt: "A child holding a yoga pose during the annual day yoga performance" },
  { type: 'image', category: 'events', src: eventImg25, title: "Bright Beginnings", alt: "Young yoga performers in a backbend pose on stage" },
  { type: 'image', category: 'events', src: eventImg26, title: "The wonder years", alt: "Children dressed as ladybirds performing on stage" },
  { type: 'image', category: 'events', src: eventImg27, title: "Growing with grace", alt: "Children in butterfly wings performing a nature dance" },
  { type: 'image', category: 'events', src: eventImg28, title: "Sparkles and smiles", alt: "Children dressed as sunflowers dancing on stage" },
  { type: 'image', category: 'events', src: eventImg29, title: "Wings to fly", alt: "A young girl singing a solo at the microphone" },
  { type: 'image', category: 'events', src: eventImg30, title: "Celebrating young minds", alt: "Children dressed as chess pieces performing a skit" },
  { type: 'image', category: 'events', src: eventImg31, title: "Journey of Dreams", alt: "A child speaking into the microphone during the chess skit" },
  { type: 'image', category: 'events', src: eventImg32, title: "Colours of Joy", alt: "Girls in silk skirts performing a classical dance" },
  { type: 'image', category: 'events', src: eventImg33, title: "Tiny steps, Giant Leaps", alt: "Dancers performing in front of a starry night backdrop" },
  { type: 'image', category: 'events', src: eventImg34, title: "Dream, Discover, Shine", alt: "Children performing a folk dance with drums" },
  { type: 'image', category: 'events', src: eventImg35, title: "A World of Wonder", alt: "Two young performers posing with a drum on stage" },
  { type: 'image', category: 'events', src: eventImg36, title: "Little stars, big dreams", alt: "Graduating children in gowns adjusting their caps on stage" },
  { type: 'image', category: 'events', src: eventImg37, title: "The Pillars", alt: "The graduating class with their teachers on stage at Divyotsav" },

  // Sports and co-curricular
  { type: 'image', category: 'sports', src: sportImg1, title: "Karate on Stage", alt: "Children in karate uniforms performing a kata on stage" },
  { type: 'image', category: 'sports', src: sportImg2, title: "Kolli Hills Cup 2025", alt: "Divyataa's karate team with coaches and parents at the Kolli Hills Cup 2025" },
  { type: 'image', category: 'sports', src: sportImg3, title: "Kolli Hills Medallists", alt: "Young karate medallists holding trophies and certificates at the Kolli Hills Cup" },
  { type: 'image', category: 'sports', src: sportImg4, title: "Silambam Practice", alt: "Children practising silambam, the traditional Tamil stick art, in the school courtyard" },
  { type: 'image', category: 'sports', src: sportImg5, title: "Karate Championship 2024", alt: "Karate students with their trophies at the 2024 championship" },
  { type: 'image', category: 'sports', src: sportImg8, title: "Yellow Belt Grading", alt: "Students holding their new yellow karate belts with their senseis" },
  { type: 'image', category: 'sports', src: sportImg9, title: "International Karate Meet", alt: "Divyataa students with trophies and certificates at an international karate championship" },
  { type: 'image', category: 'sports', src: sportImg10, title: "Achievers", alt: "Young karate winners with the chief guests and officials" },
  { type: 'image', category: 'sports', src: sportImg11, title: "Champions Return Home", alt: "Karate champions raising their trophies beside the school bus" },
  { type: 'image', category: 'sports', src: sportImg12, title: "Watering the Garden", alt: "A child watering newly planted saplings in the school garden" },
  { type: 'image', category: 'sports', src: sportImg13, title: "Nurturing Nature", alt: "A girl planting seedlings in the school garden" },
  { type: 'image', category: 'sports', src: sportImg14, title: "Digging the Garden Beds", alt: "A boy loosening soil with a garden tool" },
];


const PAGE_SIZE = 24;
const keyOf = (item) => item.id || item.src.src || item.src;
const TILE_SIZES = '(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw';

const categoryLabel = (id) => categories.find((c) => c.id === id)?.label ?? id;

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  // Index into filteredItems of the item open in the lightbox, or null.
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const touchStartX = useRef(null);

  const filteredItems = useMemo(
    () => (activeTab === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeTab)),
    [activeTab]
  );
  const visibleItems = filteredItems.slice(0, visibleCount);
  const selectedMedia = openIndex === null ? null : filteredItems[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta) => setOpenIndex((i) => (i === null ? i : (i + delta + filteredItems.length) % filteredItems.length)),
    [filteredItems.length]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keyboard navigation and background scroll lock while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div className="bg-white min-h-screen selection:bg-purple-100">
      <Navbar />

      {/* Video Banner Hero */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Video (Muted Autoplay) */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/gallery-banner-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/gallery-banner.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/40 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight font-bold">
              Gallery
            </h1>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white font-normal leading-relaxed max-w-4xl mx-auto italic drop-shadow-md text-justify md:text-center">
              What learning looks like when children are trusted, respected, and given the right conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters/Tabs Section */}
      <section className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-6 px-6 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-2 md:gap-4 min-w-max">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setVisibleCount(PAGE_SIZE);
                }}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-purple-600 rounded-full shadow-lg shadow-purple-200"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto min-h-[600px]">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item, index) => (
              <motion.button
                type="button"
                layout
                key={keyOf(item)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                  mass: 1,
                  opacity: { duration: 0.2 }
                }}
                className="group relative block w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-square text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400"
                onClick={() => setOpenIndex(index)}
                aria-label={`${item.type === 'video' ? 'Play video' : 'View photo'}: ${item.title}`}
              >
                {/* Media Thumbnail */}
                {item.type === 'image' ? (
                  <img
                    src={item.src.src}
                    srcSet={item.src.srcset}
                    sizes={TILE_SIZES}
                    width={item.src.w}
                    height={item.src.h}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                ) : item.id ? (
                  <img
                    src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <img
                    src={item.poster.src}
                    srcSet={item.poster.srcset}
                    sizes={TILE_SIZES}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                )}

                {/* Caption: always visible on touch screens, on hover for desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-6">
                  <div className="flex items-center gap-2 mb-1">
                    {item.type === 'video' ? (
                      <VideoIcon className="text-purple-300" size={14} />
                    ) : (
                      <ImageIcon className="text-purple-300" size={14} />
                    )}
                    <span className="text-white/70 text-[9px] md:text-[10px] font-bold tracking-widest uppercase">
                      {categoryLabel(item.category)}
                    </span>
                  </div>
                  <h3 className="text-white text-sm md:text-lg font-serif leading-snug">{item.title}</h3>
                </div>

                {/* Play Button for Videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white fill-white ml-1" size={20} />
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
              className="inline-block rounded-full border border-purple-200 bg-purple-50 px-8 py-3 text-sm font-bold text-purple-700 hover:bg-purple-100 transition-colors"
            >
              Show more ({filteredItems.length - visibleCount} more)
            </button>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={selectedMedia.title}
          >
            <div
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
              onClick={close}
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-30 backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous"
                  className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-30 backdrop-blur-md"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next"
                  className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-30 backdrop-blur-md"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <motion.div
              key={keyOf(selectedMedia)}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl z-10 bg-black"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src.src}
                  srcSet={selectedMedia.src.srcset}
                  sizes="(min-width: 1100px) 1024px, 100vw"
                  alt={selectedMedia.alt || selectedMedia.title}
                  className="block w-full max-h-[70vh] object-contain bg-black"
                />
              ) : selectedMedia.id ? (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedMedia.id}?autoplay=1`}
                    title={selectedMedia.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video
                  src={selectedMedia.src}
                  poster={selectedMedia.poster.src}
                  controls
                  autoPlay
                  playsInline
                  className="block w-full max-h-[70vh] bg-black"
                />
              )}

              <div className="px-6 py-5 bg-slate-900 text-center">
                <p className="text-purple-300 text-[10px] font-bold tracking-widest uppercase mb-1">
                  {categoryLabel(selectedMedia.category)} · {openIndex + 1} / {filteredItems.length}
                </p>
                <h3 className="text-white text-xl font-serif">{selectedMedia.title}</h3>
                {selectedMedia.alt && (
                  <p className="text-white/70 text-sm mt-2 max-w-2xl mx-auto">{selectedMedia.alt}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;

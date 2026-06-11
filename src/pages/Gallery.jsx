import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Video as VideoIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import classVideo1 from '../assets/videos/IMG_5163.mp4';
import classVideo2 from '../assets/videos/IMG_5187.mp4';
import classVideo3 from '../assets/videos/IMG_5188.mp4';
import classImg12 from '../Website/Gallery Page/Classsroom Life/018A8914.JPG';
import classImg1 from '../Website/Gallery Page/Classsroom Life/018A8924.JPG';
import classImg2 from '../Website/Gallery Page/Classsroom Life/018A8939.JPG';
import classImg3 from '../Website/Gallery Page/Classsroom Life/018A8941.JPG';
import classImg4 from '../Website/Gallery Page/Classsroom Life/018A8943.JPG';
import classImg5 from '../Website/Gallery Page/Classsroom Life/018A8945.JPG';
import classImg6 from '../Website/Gallery Page/Classsroom Life/IMG_4910.JPG';
import classImg7 from '../Website/Gallery Page/Classsroom Life/IMG_4912.JPG';
import classImg8 from '../Website/Gallery Page/Classsroom Life/IMG_4915.JPG';
import classImg9 from '../Website/Gallery Page/Classsroom Life/IMG_4939.JPG';
import classImg10 from '../Website/Gallery Page/Classsroom Life/IMG_4952.JPG';
import classImg11 from '../Website/Gallery Page/Classsroom Life/IMG_4956.JPG';
import classImg13 from '../Website/Gallery Page/Classsroom Life/IMG_4959.JPG';
import classImg14 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h39m38s850.png';
import classImg15 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h41m17s460.png';
import classImg16 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h42m01s281.png';
import classImg17 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h42m56s677.png';
import classImg18 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h43m15s934.png';
import classImg19 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h46m28s932.png';
import classImg20 from '../Website/Gallery Page/Classsroom Life/vlcsnap-2026-04-04-12h58m58s787.png';
import eventImg1 from '../Website/Gallery Page/Events & Festivals/1000016403_c81811717c98ef55c851c01faa2029fa-10_04_2026, 13_03_40.jpg';
import eventImg2 from '../Website/Gallery Page/Events & Festivals/c1435586-65a1-4296-842c-9f6c0bf5f484.jpg';
import eventImg3 from '../Website/Gallery Page/Events & Festivals/image (13).png';
import eventImg4 from '../Website/Gallery Page/Events & Festivals/image (14).png';
import eventImg5 from '../Website/Gallery Page/Events & Festivals/IMG_4317.JPG';
import eventImg6 from '../Website/Gallery Page/Events & Festivals/IMG_5213.jpg';
import eventImg18 from '../Website/Gallery Page/Events & Festivals/IMG_7231.JPG';
import eventImg19 from '../Website/Gallery Page/Events & Festivals/IMG_7235.JPG';
import eventImg20 from '../Website/Gallery Page/Events & Festivals/IMG_7301.JPG';
import eventImg21 from '../Website/Gallery Page/Events & Festivals/IMG_7303.JPG';
import campusImg1 from '../Website/Gallery Page/Campus/8f8e94c0-49a5-4fed-bdb4-d25b3a92bc38 (1).jpg';
import campusImg2 from '../Website/Gallery Page/Campus/ab76e0e4-4927-4ed0-a8ea-d8017a20d88a (2).jpg';
import campusImg3 from '../Website/Gallery Page/Campus/e6cebd15-a4b7-4d83-98e9-48e43fb47d65 (1).jpg';
import eventImg22 from '../Website/Gallery Page/Annual Day/5C7A9014.JPG';
import eventImg23 from '../Website/Gallery Page/Annual Day/5C7A9114.JPG';
import eventImg24 from '../Website/Gallery Page/Annual Day/5C7A9124.JPG';
import eventImg25 from '../Website/Gallery Page/Annual Day/5C7A9126.JPG';
import eventImg26 from '../Website/Gallery Page/Annual Day/5C7A9141.JPG';
import eventImg27 from '../Website/Gallery Page/Annual Day/5C7A9162.JPG';
import eventImg28 from '../Website/Gallery Page/Annual Day/5C7A9168.JPG';
import eventImg29 from '../Website/Gallery Page/Annual Day/5C7A9376.JPG';
import eventImg30 from '../Website/Gallery Page/Annual Day/5C7A9448.JPG';
import eventImg31 from '../Website/Gallery Page/Annual Day/5C7A9486.JPG';
import eventImg32 from '../Website/Gallery Page/Annual Day/5C7A9583.JPG';
import eventImg33 from '../Website/Gallery Page/Annual Day/5C7A9603.JPG';
import eventImg34 from '../Website/Gallery Page/Annual Day/5C7A9683.JPG';
import eventImg35 from '../Website/Gallery Page/Annual Day/5C7A9691.JPG';
import eventImg36 from '../Website/Gallery Page/Annual Day/5C7A9738.JPG';
import eventImg37 from '../Website/Gallery Page/Annual Day/5C7A9810.JPG';
import sportImg1 from '../Website/Gallery Page/Extracurricular/5C7A9283.JPG';
import sportImg2 from '../Website/Gallery Page/Extracurricular/6b35c38a-15fa-482d-b6de-32e5ca9e50c8.jpg';
import sportImg3 from '../Website/Gallery Page/Extracurricular/6db167be-7732-45d4-8c63-063152049f3b.jpg';
import sportImg4 from '../Website/Gallery Page/Extracurricular/292A1320.JPG';
import sportImg5 from '../Website/Gallery Page/Extracurricular/4382eefe-b755-42dd-866b-a098b44a8669.jpg';
import sportImg6 from '../Website/Gallery Page/Extracurricular/image (1).png';
import sportImg7 from '../Website/Gallery Page/Extracurricular/image (2).png';
import sportImg8 from '../Website/Gallery Page/Extracurricular/image (5).png';
import sportImg9 from '../Website/Gallery Page/Extracurricular/image (7).png';
import sportImg10 from '../Website/Gallery Page/Extracurricular/image (8).png';
import sportImg11 from '../Website/Gallery Page/Extracurricular/image (9).png';
import sportImg12 from '../Website/Gallery Page/Extracurricular/image (10).png';
import sportImg13 from '../Website/Gallery Page/Extracurricular/image (11).png';
import sportImg14 from '../Website/Gallery Page/Extracurricular/image (15).png';
import sportImg15 from '../Website/Gallery Page/Extracurricular/image.png';


// Assets no longer used for gallery grid but keeping imports clean

const categories = [
  { id: 'all', label: 'All' },
  { id: 'classroom', label: 'Classroom Life' },
  { id: 'sports', label: 'Sports and Co-Curricular' },
  { id: 'campus', label: 'Campus and Spaces' },
  { id: 'events', label: 'Events and Annual Day' },
];

const galleryItems = [
  { type: 'video', category: 'campus', id: 'hG-e0nbh5bM', title: "Principal's address" },
  { type: 'video', category: 'campus', id: 'ysi8Zr5IpI4', title: "Convocation" },
  { type: 'video', category: 'events', id: 'KTVIJMbVOr4', title: "Bhangra dance" },
  { type: 'video', category: 'events', id: '5QPd0GmTRx0', title: "The spirit of beauty dance" },
  { type: 'video', category: 'events', id: 'GeBOLtLPHEw', title: "Devotional Dance" },
  { type: 'video', category: 'classroom', src: classVideo1, title: "Classroom activity" },
  { type: 'video', category: 'classroom', src: classVideo2, title: "Match the shapes" },
  { type: 'video', category: 'classroom', src: classVideo3, title: "Shifting bowls" },
  { type: 'video', category: 'events', id: 'bNjSrTw7sLA', title: "Skit-Social Awareness" },
  { type: 'video', category: 'events', id: 'WvaN5xkkWd4', title: "Mom & Me dance" },
  { type: 'video', category: 'events', id: 'uLw-UkgPDxQ', title: "Karate Performance" },
  { type: 'video', category: 'events', id: 'AN88vvBB4Ko', title: "Colours of nature dance" },
  { type: 'video', category: 'events', id: 'FIIT7RBansI', title: "Yoga Performance" },
  { type: 'video', category: 'sports', id: '3urrM1tUwG0', title: "A year in review" },
  { type: 'video', category: 'events', id: '3aXeIFhULLM', title: "Welcome dance" },
  { type: 'image', category: 'classroom', src: classImg12, title: "Image1"},
  { type: 'image', category: 'classroom', src: classImg1, title: "Image2"},
  { type: 'image', category: 'classroom', src: classImg2, title: "Image3"},
  { type: 'image', category: 'classroom', src: classImg3, title: "Image4"},
  { type: 'image', category: 'classroom', src: classImg4, title: "Image6"},
  { type: 'image', category: 'classroom', src: classImg5, title: "Image7"},
  { type: 'image', category: 'classroom', src: classImg6, title: "Image8"},
  { type: 'image', category: 'classroom', src: classImg7, title: "Image9"},
  { type: 'image', category: 'classroom', src: classImg8, title: "Image10"},
  { type: 'image', category: 'classroom', src: classImg9, title: "Image11"},
  { type: 'image', category: 'classroom', src: classImg10, title: "Image12"},
  { type: 'image', category: 'classroom', src: classImg11, title: "Image13"},
  { type: 'image', category: 'classroom', src: classImg13, title: "Image14"},
  { type: 'image', category: 'classroom', src: classImg14, title: "Image15"},
  { type: 'image', category: 'classroom', src: classImg15, title: "Image16"},
  { type: 'image', category: 'classroom', src: classImg16, title: "Image17"},
  { type: 'image', category: 'classroom', src: classImg17, title: "Image18"},
  { type: 'image', category: 'classroom', src: classImg18, title: "Image19"},
  { type: 'image', category: 'classroom', src: classImg19, title: "Image20"},
  { type: 'image', category: 'classroom', src: classImg20, title: "Image21"},
  { type: 'image', category: 'events', src: eventImg1, title: "Image1"},
  { type: 'image', category: 'events', src: eventImg2, title: "Image2"},
  { type: 'image', category: 'events', src: eventImg3, title: "Image3"},
  { type: 'image', category: 'events', src: eventImg4, title: "Image4"},
  { type: 'image', category: 'events', src: eventImg5, title: "Image5"},
  { type: 'image', category: 'events', src: eventImg6, title: "Image6"},
  { type: 'image', category: 'events', src: eventImg18, title: "Image18"},
  { type: 'image', category: 'events', src: eventImg19, title: "Image19"},
  { type: 'image', category: 'events', src: eventImg20, title: "Image20"},
  { type: 'image', category: 'events', src: eventImg21, title: "Image21"},
  { type: 'image', category: 'campus', src: campusImg1, title: "Image1"},
  { type: 'image', category: 'campus', src: campusImg2, title: "Image2"},
  { type: 'image', category: 'campus', src: campusImg3, title: "Image3"},
  { type: 'image', category: 'events', src: eventImg22, title: "Image22"},
  { type: 'image', category: 'events', src: eventImg23, title: "Image23"},
  { type: 'image', category: 'events', src: eventImg24, title: "Image24"},
  { type: 'image', category: 'events', src: eventImg25, title: "Image25"},
  { type: 'image', category: 'events', src: eventImg26, title: "Image26"},
  { type: 'image', category: 'events', src: eventImg27, title: "Image27"},
  { type: 'image', category: 'events', src: eventImg28, title: "Image28"},
  { type: 'image', category: 'events', src: eventImg29, title: "Image29"},
  { type: 'image', category: 'events', src: eventImg30, title: "Image30"},
  { type: 'image', category: 'events', src: eventImg31, title: "Image31"},
  { type: 'image', category: 'events', src: eventImg32, title: "Image32"},
  { type: 'image', category: 'events', src: eventImg33, title: "Image33"},
  { type: 'image', category: 'events', src: eventImg34, title: "Image34"},
  { type: 'image', category: 'events', src: eventImg35, title: "Image35"},
  { type: 'image', category: 'events', src: eventImg36, title: "Image36"},
  { type: 'image', category: 'events', src: eventImg37, title: "Image37"},
  { type: 'image', category: 'sports', src: sportImg1, title: "Image1"},
  { type: 'image', category: 'sports', src: sportImg2, title: "Image2"},
  { type: 'image', category: 'sports', src: sportImg3, title: "Image3"},
  { type: 'image', category: 'sports', src: sportImg4, title: "Image4"},
  { type: 'image', category: 'sports', src: sportImg5, title: "Image5"},
  { type: 'image', category: 'sports', src: sportImg6, title: "Image6"},
  { type: 'image', category: 'sports', src: sportImg7, title: "Image7"},
  { type: 'image', category: 'sports', src: sportImg8, title: "Image8"},
  { type: 'image', category: 'sports', src: sportImg9, title: "Image9"},
  { type: 'image', category: 'sports', src: sportImg10, title: "Image10"},
  { type: 'image', category: 'sports', src: sportImg11, title: "Image11"},
  { type: 'image', category: 'sports', src: sportImg12, title: "Image12"},
  { type: 'image', category: 'sports', src: sportImg13, title: "Image13"},
  { type: 'image', category: 'sports', src: sportImg14, title: "Image14"},
  { type: 'image', category: 'sports', src: sportImg15, title: "Image15"}

];


const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeTab));
    }
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-purple-100">
      <Navbar />

      {/* Video Banner Hero */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Video (Muted Autoplay) */}
        <div className="absolute inset-0 z-0">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
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
                onClick={() => setActiveTab(cat.id)}
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
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id || item.src}
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
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-square"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Media Thumbnail */}
                {item.type === "image" ? (
  <img
    src={item.src}
    alt={item.title}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    loading="lazy"
  />
) : item.id ? (
  <img
    src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
    alt={item.title}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    loading="lazy"
    onError={(e) => {
      e.target.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
    }}
  />
) : (
  <video muted playsInline className="w-full h-full object-cover">
    <source src={item.src} />
  </video>
)}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <VideoIcon className="text-purple-400" size={16} />
                    <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase">{item.category}</span>
                  </div>
                  <h3 className="text-white text-lg font-serif">{item.title}</h3>
                </div>

                {/* Play Button for Videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white fill-white ml-1" size={20} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
              onClick={() => setSelectedMedia(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl z-10 bg-black"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 backdrop-blur-md"
              >
                <X size={24} />
              </button>

               <div className="aspect-video">
  {selectedMedia.id ? (
    <iframe
      src={`https://www.youtube.com/embed/${selectedMedia.id}?autoplay=1`}
      title={selectedMedia.title}
      className="w-full h-full border-0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ) : (
    <video
      controls
      autoPlay
      className="w-full h-full"
    >
      <source src={selectedMedia.src} type="video/mp4" />
    </video>
  )}
</div>
              
              <div className="p-6 bg-slate-900 text-center">
                <h3 className="text-white text-xl font-serif">{selectedMedia.title}</h3>
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


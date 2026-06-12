import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import campusImg from '../Website/Gallery Page/Campus/8f8e94c0-49a5-4fed-bdb4-d25b3a92bc38 (1).jpg';
import annualImg from '../Website/Gallery Page/Annual Day/5C7A9162.JPG';
import classImg1 from '../Website/Gallery Page/Classsroom Life/018A8914.JPG';
import eventImg1 from '../Website/Gallery Page/Events & Festivals/c1435586-65a1-4296-842c-9f6c0bf5f484.jpg';
import fieldImg from '../assets/fieldtrip1.jpg';
import extraImg from '../assets/extracurr1.jpg';
import eventImg from '../assets/image (13).png';

const ImageSection = () => {
  const images = [
    campusImg,
    annualImg,
    classImg1,
    eventImg1,
    fieldImg,
    extraImg,
    eventImg,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-8 md:py-12 px-5 overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">

        <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl h-[250px] md:h-[400px] lg:h-[500px]">

          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt="Divyataa School"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          {/* Navigation Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImageSection;
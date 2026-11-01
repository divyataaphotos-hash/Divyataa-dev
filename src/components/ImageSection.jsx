import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import campusImg from '../assets/campus/divyataa-campus-building-dusk-front-view.jpg';
import annualImg from '../Website/Gallery Page/Annual Day/children-butterfly-wings-performing-nature-dance.jpg';
import classImg1 from '../Website/Gallery Page/Classsroom Life/montessori-guide-leading-circle-time-children.jpg';
import eventImg1 from '../Website/Gallery Page/Events & Festivals/children-making-flower-pookolam-together-floor.jpg';
import fieldImg from '../assets/road-safety-game-field-trip.jpg';
import extraImg from '../assets/karate-championship-trophies-divyataa.jpg';
import eventImg from '../assets/girls-festive-traditional-dress-celebration.jpg';

const ImageSection = () => {
  const images = [
    { src: campusImg, alt: 'The Divyataa International School building in Tirupur at dusk' },
    { src: annualImg, alt: 'Children in butterfly wings performing a nature dance at the Divyataa annual day' },
    { src: classImg1, alt: 'A Montessori guide leading circle time with children at Divyataa, Tirupur' },
    { src: eventImg1, alt: 'Children making a flower pookolam together at a school celebration' },
    { src: fieldImg, alt: 'Divyataa students at a road safety awareness game on a field trip' },
    { src: extraImg, alt: 'Divyataa karate students with their championship trophies' },
    { src: eventImg, alt: 'Girls in colourful traditional dress at a Divyataa festival celebration' },
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
              src={images[current].src}
              alt={images[current].alt}
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
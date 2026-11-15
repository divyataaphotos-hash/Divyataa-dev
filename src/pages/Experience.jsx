import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Phone, Mail, MapPin, Compass } from 'lucide-react';
import { ArrowRight } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Assets
import campusHeroImg from '../assets/campus/montessori-classroom-mountain-mural-low-shelves.webp';
import readingCornerImg from '../assets/campus/classroom-reading-corner-bookshelf-tree-mural.webp';
import buildingFrontImg from '../assets/campus/divyataa-international-school-tirupur-building-front.webp';
import buildingTreesImg from '../assets/campus/divyataa-school-building-portico-trees.webp';
import emblemImg from '../assets/campus/divyataa-lotus-emblem-school-pediment.webp';
import classroomWideImg from '../assets/campus/montessori-classroom-materials-shelves-mural.webp';
import classroomTreeImg from '../assets/campus/montessori-classroom-tree-mural-natural-light.webp';
import materialsShelfImg from '../assets/campus/montessori-materials-shelf-leaf-mural.webp';
import flamingoRoomImg from '../assets/campus/montessori-classroom-flamingo-mural.webp';
import sandPlayImg from '../assets/campus/sand-play-area-slide-climbing-frame.webp';
import climbingWallImg from '../assets/campus/sand-pit-climbing-wall-shade-tree.webp';
import coveredPlayImg from '../assets/campus/covered-outdoor-play-area-terracotta-jali.webp';
import playRoomImg from '../assets/campus/indoor-play-room-tunnel-soft-blocks.webp';
import trampolineImg from '../assets/campus/movement-corner-mini-trampoline-tree-mural.webp';
import corridorImg from '../assets/campus/corridor-terracotta-jali-brick-wall.webp';
import eventsImg from '../assets/children-exploring-montessori-globe.jpg';
import events2Img from '../assets/children-collaborating-montessori-classroom.jpg';
import annualDayImg2 from '../Website/Gallery Page/Extracurricular/children-watering-plants-school-garden.jpg';
import readyImg from '../Website/Gallery Page/Extracurricular/students-holding-yellow-karate-belts-senseis.jpg';
import LazyMap from '../components/LazyMap';
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-purple-100">
      <Navbar />

      {/* Hero Section */}
     <section className="relative pt-40 pb-12 px-6 overflow-hidden border-b border-slate-100">
     
       {/* Background Image */}
       <div className="absolute inset-0">
         <img fetchPriority="high"
           src={campusHeroImg}
           alt="A Divyataa Montessori classroom in Tirupur with low wooden shelves of materials beneath a mountain mural"
           className="w-full h-full object-cover object-[50%_65%]"
         />
          {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50" />
  </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Our Environment
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-serif text-white mb-6 font-bold leading-tight"
          >
            A place made for children
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white max-w-4xl mx-auto mb-12 leading-relaxed font-normal gayathri text-justify md:text-center"
          >
            The Montessori environment is not decoration. Every element is a decision made in service of the child.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl relative max-w-6xl mx-auto"
          >
          
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Address and Location Section */}
      <section className="py-5 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 text-purple-600">
                <MapPin size={32} />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Address and Location</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Divyataa International School</h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  #76/6, Angeripalayam Main Road, <br />
                  Tirupur 641 603, Tamil Nadu, India
                </p>
                <div className="w-20 h-1 bg-purple-200" />
                <p className="text-slate-500 leading-relaxed italic">
                  Situated in the heart of Tirupur, our campus is easily accessible from all parts of the city. 
                  We welcome families from across the Tirupur district.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://maps.app.goo.gl/Z9wA5xkkWd4GRqDI8v" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  <Compass size={20} />
                  Get Directions
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-inner h-[400px] bg-slate-100 relative group">
               <LazyMap 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.40120274826!2d77.332928!3d11.128163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9074e70a1b233%3A0x7fcff7033eb25aec!2sDIVYATAA-International%20School!5e0!3m2!1sen!2sin!4v1776306643085!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                className="transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Classrooms */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 font-bold leading-tight">
              Calm. Ordered. Beautiful.
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-normal text-justify">
              <p>
                A Montessori classroom is unlike any classroom most parents remember from their own schooling. 
                The shelves are low, so every child can reach every material independently. Materials are laid 
                out in sequence, accessible and inviting.
              </p>
              <p>
                The room is calm, not enforced quiet, but the natural quiet of children who are genuinely 
                absorbed in work. Natural light matters here. Clutter does not belong.
              </p>
              <div className="bg-purple-50 p-8 rounded-3xl border-l-4 border-purple-500 italic text-justify">
                Each classroom is prepared before the first child arrives each morning and restored before 
                the last child leaves each afternoon. The environment is never accidental.
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 rounded-3xl overflow-hidden shadow-xl aspect-[16/9]">
              <img loading="lazy" decoding="async" src={classroomWideImg} alt="Low Montessori shelves of materials and globes in front of a painted mountain wall" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
              <img loading="lazy" decoding="async" src={eventsImg} alt="Two children exploring continents on a Montessori globe in a prepared classroom" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
              <img loading="lazy" decoding="async" src={events2Img} alt="Two children working together on a floor activity in a calm Montessori classroom" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outdoor Spaces */}
      <section className="py-2 px-6 md:px-12 bg-[#faf7ff]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="lg:w-1/2 space-y-8 text-right lg:text-left"
          >
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 font-bold leading-tight">
              Children need to move, dig, and be in the world.
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-normal text-justify">
              <p>
                Our outdoor areas are not afterthoughts. They are part of the educational environment, 
                spaces where children can work with soil and plants, observe insects and weather, 
                run, climb and test their bodies.
              </p>
              <p>
                The outdoor space at Divyataa is where our most important learning happens, 
                our children are completely themselves.
              </p>
              <p className="font-medium text-slate-700">
                Here, they experience the unstructured freedom that supports cognitive development 
                just as powerfully as any material on a shelf.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
              <img loading="lazy" decoding="async" src={annualDayImg2} alt="Children watering plants in the Divyataa school garden" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5]">
              <img loading="lazy" decoding="async" src={sandPlayImg} alt="The shaded sand play area at Divyataa with a slide and climbing frame" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Photo Gallery */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xl md:text-3xl font-serif text-slate-900 font-bold">Campus Gallery</h2>
            <p className="text-slate-500">Our classrooms, play areas and building on Angeripalayam Main Road, Tirupur</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: buildingFrontImg, alt: 'Front of the Divyataa International School building in Tirupur, with its white pillared portico' },
              { src: buildingTreesImg, alt: 'The Divyataa school building and portico framed by trees, with the garden beds in front' },
              { src: readingCornerImg, alt: 'A classroom reading corner with a low bookshelf, curtains and a painted tree' },
              { src: sandPlayImg, alt: 'The shaded sand play area at Divyataa with a slide and climbing frame' },
              { src: classroomTreeImg, alt: 'A bright Divyataa classroom with a tree mural, large windows and low Montessori shelves' },
              { src: climbingWallImg, alt: 'A colourful climbing wall in the sand pit beside a shade tree' },
              { src: playRoomImg, pos: 'object-[50%_80%]', alt: 'The indoor play room with a play tunnel, soft blocks and foam floor mats' },
              { src: corridorImg, alt: 'A school corridor lined with a terracotta jali brick wall and shoe racks' },
              { src: materialsShelfImg, alt: 'Low shelves of wooden Montessori materials under a painted leaf mural' },
              { src: trampolineImg, pos: 'object-[50%_75%]', alt: 'A movement corner with a mini trampoline beside a painted tree' },
              { src: flamingoRoomImg, alt: 'A Montessori classroom with a flamingo mural between two windows' },
              { src: coveredPlayImg, alt: 'The covered outdoor play area with a slide, sand and a terracotta jali wall' },
              { src: emblemImg, alt: 'The Divyataa lotus emblem on the pediment of the school building' },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                  idx === 0 ? 'col-span-2 aspect-[16/10] md:aspect-auto md:row-span-2 md:h-full' : 'aspect-square'
                }`}
              >
                <img loading="lazy" decoding="async" src={img.src} alt={img.alt} className={`w-full h-full object-cover ${img.pos || ''} hover:scale-110 transition-transform duration-700`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center px-6">
  <div className="relative overflow-hidden rounded-[2.5rem] border border-purple-100 bg-gradient-to-br from-white via-purple-50/40 to-white p-8 md:p-12 shadow-lg shadow-purple-900/5 max-w-4xl w-full">

    {/* Accent Line */}
    <div className="absolute top-0 left-0 h-full w-1.5 bg-purple-600 rounded-l-[2.5rem]" />

    <div className="max-w-3xl mx-auto text-center">

      <span className="text-purple-600 font-bold uppercase tracking-[0.25em] text-xs">
        Location Matters
      </span>

      <h2 className="mt-4 text-2xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
        Close Enough to Matter
      </h2>

      <div className="w-16 h-1 bg-purple-200 rounded-full mx-auto mt-5 mb-7" />

      <p className="text-slate-700 text-base md:text-lg leading-relaxed">
        The commute to school has quietly become part of the school day.
        Divyataa made a different choice. We sit at the heart of the city,
        so your child arrives with energy intact and comes home with some
        still left.
      </p>

      <p className="mt-5 text-slate-700 text-base md:text-lg leading-relaxed">
        The time saved on the road is time returned to play, to rest,
        to learning, and to you.
      </p>

      <p className="mt-8 text-xl md:text-2xl font-serif italic text-purple-700">
        “That too is part of the education we offer.”
      </p>

    </div>
  </div>
</div>

     {/* Final CTA */}
<section className="relative mt-12 py-28 px-6 bg-slate-50 overflow-hidden">
   {/* Background Image */}
<div className="absolute inset-0">
  <img loading="lazy" decoding="async"
    src={readyImg}
    alt="Divyataa students holding their new yellow karate belts with their senseis"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay (main control) */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Soft gradient for depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />
</div>

   <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative z-10 max-w-4xl mx-auto text-center text-white"
>
    <span className="text-purple-150 uppercase tracking-[0.3em] text-s font-bold">
      Visit Divyataa
    </span>

<h2 className="mt-6 text-3xl md:text-5xl font-normal font-bold text-white leading-tight">  Ready to see it{" "}
 <span className="text-purple-200 font-semibold md:font-bold">
  in person?
</span>
</h2>

<div className="flex items-center justify-center gap-4 my-8">
  <div className="w-16 h-px bg-purple-200" />
  <div className="w-2 h-2 rounded-full bg-purple-200" />
  <div className="w-16 h-px bg-purple-200" />
</div>
    <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-white text-slate-600">
      The best way to understand Divyataa is to spend a morning
      with us, watching children learn, explore, create and
      grow with confidence.
    </p>

    <Link
      to="/contact"
      className="group inline-flex items-center gap-3 mt-12 text-purple-200 font-bold text-lg transition-all"
    >
      Schedule a Visit

      <ArrowRight
        size={22}
        className="transition-transform duration-300 group-hover:translate-x-2"
      />
    </Link>
  </motion.div>
</section>

      <Footer />
    </div>
  );
};

export default Experience;


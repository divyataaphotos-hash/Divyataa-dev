import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// 🚀 Generate 6 rockets ONLY in safe (outside) areas
const getSafePosition = () => {
  const zone = Math.floor(Math.random() * 4);

  switch (zone) {
    case 0: // TOP
      return {
        top: `${Math.random() * 10}%`,
        left: `${Math.random() * 100}%`,
      };
    case 1: // BOTTOM
      return {
        top: `${75 + Math.random() * 25}%`,
        left: `${Math.random() * 100}%`,
      };
    case 2: // LEFT
      return {
        top: `${10 + Math.random() * 65}%`,
        left: `${Math.random() * 15}%`,
      };
    case 3: // RIGHT
      return {
        top: `${10 + Math.random() * 65}%`,
        left: `${85 + Math.random() * 15}%`,
      };
    default:
      return { top: "0%", left: "0%" };
  }
};

const rockets = Array.from({ length: 6 }, (_, i) => {
  const pos = getSafePosition();

  return {
    id: i,
    ...pos,
    delay: Math.random() * 4,
    size: 20 + Math.random() * 20,
    duration: 6 + Math.random() * 4,
    opacity: 0.4 + Math.random() * 0.4,
  };
});

const CTA = () => {
  return (
    <section className="relative w-full py-16 md:py-20 px-5 overflow-hidden bg-transparent">

      {/* ✅ SVG MASK */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <mask id="cta-mask">
            <rect width="100%" height="100%" fill="white" />

            {/* ❌ Hide center content */}
            <rect
              x="15%"
              y="10%"
              width="70%"
              height="460"
              rx="40"
              fill="black"
            />
          </mask>
        </defs>
      </svg>

      {/* 🚀 ROCKETS BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none blur-[2px]"
        style={{
          mask: "url(#cta-mask)",
          WebkitMask: "url(#cta-mask)",
        }}
      >
        {rockets.map((rocket) => (
          <motion.div
            key={rocket.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              x: [0, 40, -20, 0],
              y: [40, -80, 20],
              rotate: [0, 10, -8, 0],
              opacity: [0, rocket.opacity, rocket.opacity, 0],
            }}
            transition={{
              duration: rocket.duration,
              repeat: Infinity,
              delay: rocket.delay,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              top: rocket.top,
              left: rocket.left,
            }}
          >
            <svg
              width={rocket.size}
              height={rocket.size}
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-md"
            >
              <path
                d="M2 21l21-9L2 3l4 9-4 9z"
                fill="#9333ea"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 sm:space-y-8 md:space-y-10">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
         className="inline-block px-2 py-2 mb-2 md:mb-2 rounded-full bg-purple-50 text-purple-600 font-bold tracking-widest text-[10px] md:text-xs uppercase shadow-md border border-purple-100/50"
          >
          2025–26 Admissions Open
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl py-2 md:text-6xl lg:text-7xl font-gayathri text-[#1a1a1a] leading-tight font-bold"
        >
          Come and see it for yourself.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-600 text-gayathri md:text-base leading-relaxed max-w-2xl mx-auto"
        >
          The best way to understand Divyataa is to visit on a working morning and watch the children.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-[#7208b3] px-10 py-5 text-base font-bold text-white shadow-lg transition-all hover:bg-[#8a1fd0] hover:scale-105"
          >
            Visit Our Campus <ArrowRight size={20} />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-10 py-5 text-base font-bold text-[#1a1a1a] shadow-sm transition-all hover:bg-slate-50 hover:scale-105"
          >
            Schedule a Meeting
          </Link>
        </motion.div>

        {/* Contact */}
        <p className="text-slate-900 text-xs md:text-sm pt-2">
          Or call us directly:{' '}
          <a href="tel:9751112300" className="hover:text-[#7208b3]">
            +91 97511 12300
          </a>{' '}
          &{' '}
          <a href="tel:8428412300" className="hover:text-[#7208b3]">
            +91 84284 12300
          </a>
        </p>

      </div>
    </section>
  );
};

export default CTA;
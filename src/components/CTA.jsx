import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PartyBurst = ({ className = "", flip = false, delay = 0 }) => {
  const particles = [
  { x: 130, y: -90 },
  { x: 155, y: -55 },
  { x: 180, y: -20 },
  { x: 175, y: 25 },
  { x: 145, y: 75 },
  { x: 210, y: -70 },
  { x: 225, y: 45 },
  { x: 245, y: 0 },
  { x: 190, y: -110 },
  { x: 195, y: 95 },
  { x: 160, y: -125 },
  { x: 160, y: 115 },
];

  const dir = flip ? -1 : 1;

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: 0,
        height: 0,
      }}
    >
      {/* Party Popper Cone */}
      <motion.div
        className="absolute"
        style={{
          width: 0,
          height: 0,
          borderTop: "16px solid transparent",
          borderBottom: "16px solid transparent",
          borderLeft: flip
            ? "none"
            : "34px solid rgb(109 40 217)",
          borderRight: flip
            ? "34px solid rgb(109 40 217)"
            : "none",
        }}
        animate={{
          rotate: flip ? [15, 8, 15] : [-15, -8, -15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Confetti */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm"
          style={{
            width: i % 3 === 0 ? 10 : 6,
            height: i % 2 === 0 ? 5 : 12,
            background:
              i % 4 === 0
                ? "#6d28d9"
                : i % 3 === 0
                ? "#8b5cf6"
                : "#d8b4fe",
            left: 8,
            top: 0,
            boxShadow: "0 0 8px rgba(139,92,246,0.25)",
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.3,
            rotate: 0,
          }}
          animate={{
            x: [0, dir * p.x],
            y: [0, p.y],
            opacity: [0, 1, 1, 0],
            scale: [0.3, 1, 1, 0.8],
            rotate: [0, 180, 540],
          }}
          transition={{
            duration: 1.3,
            delay: delay + i * 0.03,
            repeat: Infinity,
            repeatDelay: 3.8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Sparkles */}
      {[0, 1, 2, 3].map((n) => (
        <motion.div
          key={n}
          className="absolute rounded-full bg-violet-300"
          style={{
            width: 4,
            height: 4,
            left: 5,
            top: 0,
          }}
          animate={{
            x: [0, dir * (70 + n * 18)],
            y: [0, -25 + n * 18],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 1,
            delay: delay + n * 0.08,
            repeat: Infinity,
            repeatDelay: 4.1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent px-1 py-0.1 md:py-0.1">
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        {/* Ambient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-purple-300/15 blur-3xl" />
          <div className="absolute right-8 top-20 h-52 w-52 rounded-full bg-pink-300/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute bottom-4 right-1/4 h-56 w-56 rounded-full bg-indigo-300/15 blur-3xl" />
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-24"
        >
          {/* Animated Party Poppers */}

          <PartyBurst
            className="hidden lg:block left-[-120px] top-1/2 -translate-y-1/2"
          />

          <PartyBurst
            className="hidden lg:block right-[-120px] top-1/2 -translate-y-1/2"
            flip={true}
            delay={0.4}
          />

          {/* Main Content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto max-w-2xl space-y-6"
          >
            <motion.span
              animate={{
                opacity: [1, 0.9, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="inline-block rounded-full bg-gradient-to-r from-purple-700 to-violet-600 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl"
            >
              2025–26 Admissions Open
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-[#1a1a1a] md:text-6xl lg:text-7xl"
            >
              Come and see it for yourself.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
            >
              The best way to understand Divyataa is to visit on a
              working morning and watch the children learning,
              exploring, creating, and growing with confidence.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6"
        >
          <Link
            to="/contact"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-700 to-violet-600 px-10 py-5 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-purple-400/40 sm:w-auto"
          >
            Visit Our Campus
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/contact"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/80 px-10 py-5 text-base font-bold text-[#1a1a1a] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white sm:w-auto"
          >
            Schedule a Meeting
          </Link>
        </motion.div>

        {/* Contact */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <span className="text-sm text-slate-900 md:text-base">
            Or call us directly:
          </span>

         <motion.a
  href="tel:9751112300"
  initial={{
    opacity: 0,
    y: 30,
    scale: 0.6,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: [0.6, 1.15, 1],
  }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: "easeOut",
  }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.08,
  }}
  animate={{
  textShadow: [
    "0 0 0px rgba(147,51,234,0)",
    "0 0 14px rgba(147,51,234,0.35)",
    "0 0 0px rgba(147,51,234,0)",
  ],
}}
transition={{
  duration: 2,
  delay: 1.2,
  repeat: Infinity,
  repeatDelay: 4,
}}
  className="text-lg font-bold text-purple-700 transition-colors hover:text-purple-900 md:text-xl"
>
  +91 97511 12300
</motion.a>

<span className="text-slate-900">-</span>

<motion.a
  href="tel:8428412300"
  initial={{
    opacity: 0,
    y: 30,
    scale: 0.6,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: [0.6, 1.15, 1],
  }}
  transition={{
    duration: 0.8,
    delay: 0.8,
    ease: "easeOut",
  }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.08,
  }}
  animate={{
  textShadow: [
    "0 0 0px rgba(147,51,234,0)",
    "0 0 14px rgba(147,51,234,0.35)",
    "0 0 0px rgba(147,51,234,0)",
  ],
}}
transition={{
  duration: 2,
  delay: 1.2,
  repeat: Infinity,
  repeatDelay: 4,
}}
  className="text-lg font-bold text-purple-700 transition-colors hover:text-purple-900 md:text-xl"
>
  +91 84284 12300
</motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
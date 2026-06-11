import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Child-led learning",
      desc: "Every child at Divyataa directs their own work. They choose, they focus, they finish, building the habit of self-direction that most adults are still trying to develop.",
    },
    {
      title: "A prepared environment",
      desc: "Our classrooms are designed, not decorated. Every shelf, every material, every element of the room is there because it serves the child's development. Nothing is accidental.",
    },
    {
      title: "Trained Montessori guides",
      desc: "Our educators are trained to observe before they speak, to offer a lesson at the right moment, and then to step back. A great Montessori classroom hums without the teacher at its centre.",
    },
    {
      title: "Three hours of deep work",
      desc: "No bells. No forced transitions. Every morning, children at Divyataa have three uninterrupted hours to go deep into their chosen work. Concentration is not demanded here, it is grown.",
    },
  ];

  return (
    <section className="relative w-full py-10 px-5 overflow-hidden bg-transparent">

      {/* Purple Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Floating Purple Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
            }}
            initial={{
              x: Math.random() * 1400,
              y: 900,
            }}
            animate={{
              y: -200,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Glow 1 */}
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[150px]"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-0 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[150px]"
        />

        {/* Glow 3 */}
        <motion.div
          animate={{
            y: [0, -60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-400/15 rounded-full blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6"
          >
            What makes Divyataa different
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            We are not Montessori-inspired. We are pure Montessori, and that
            distinction matters more than any brochure can explain.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white/90
                backdrop-blur-md
                border
                border-purple-100
                rounded-[32px]
                p-8
                text-center
                shadow-xl
                hover:border-purple-300
                hover:shadow-purple-200/50
                transition-all
                duration-500
              "
            >
              <h3 className="text-xl font-semibold text-black mb-5">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
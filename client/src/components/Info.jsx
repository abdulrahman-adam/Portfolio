import React from "react";
import { motion } from "framer-motion";
import { useAnimationTrigger } from "../context/AnimationProvider";

const Info = () => {
  const { trigger } = useAnimationTrigger();

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      window.history.pushState(null, null, "/contact");
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation system
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.section
      key={trigger} // 🔥 navbar click → restart animation
      initial="hidden"
      whileInView="show" // 🔥 scroll trigger
      viewport={{ once: false }} // 🔥 replay on scroll
      variants={container}
      className="relative overflow-hidden bg-white"
    >
      {/* 🔵 Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-indigo-600 blur-[100px] animate-pulse"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-20">

        {/* 🖼 IMAGE */}
        <motion.div variants={fadeLeft} className="my-16 relative flex-shrink-0 group">
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-30 blur-sm"
          />

          <motion.img
            src="/mon.jpg"
            alt="Abdulrahman Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full shadow-2xl border-4 border-white z-10"
          />
        </motion.div>

        {/* 📝 TEXT */}
        <div className="flex-1 flex flex-col text-center lg:text-left">

          <motion.h6 variants={fadeUp} className="text-2xl sm:text-xl lg:text-4xl font-extrabold text-slate-900 mb-6">
            Bonjour ! Je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Abdulrahman
            </span>
          </motion.h6>

          <motion.p variants={fadeUp} className="text-gray-600 text-lg sm:text-xl lg:text-2xl mb-8">
            Expert <span className="font-bold text-slate-800">Full Stack & DevOps</span>. 
            Je conçois des solutions digitales robustes et intuitives.
          </motion.p>

          {/* 🧠 SKILLS */}
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
              Stacks Principales
            </h2>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {["React", "React Native", "Angular", "Node.js", "NestJS", "Java", "Python", "DevOps", "Nginx"].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.07 }}
                  className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* 🎯 BUTTONS */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl"
            >
              Me contacter
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/abdulrahman-adam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-indigo-600 border border-slate-200 font-bold rounded-2xl"
            >
              Voir mes projets
            </motion.a>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Info;
import React from "react";
import { motion } from "framer-motion";
import { useAnimationTrigger } from "../context/AnimationProvider";

const certifications = [
  {
    name: "CTO & Tech Lead Mastère",
    place: "HETIC Montreuil",
    date: "En cours / Récent",
    icon: "bi-mortarboard-fill",
  },
  {
    name: "Concepteur Développeur d'Applications",
    level: "BAC + 3",
    place: "DORANCO Paris",
    date: "Précédent",
    icon: "bi-award-fill",
  },
  {
    name: "Développeur Web et Web Mobile",
    level: "BAC + 2",
    place: "ALT-RH Paris",
    date: "Précédent",
    icon: "bi-code-square",
  },
];

const Certifications = () => {
  const { trigger } = useAnimationTrigger();

  // 🔥 animation system
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      key={trigger} // 🔥 navbar click → restart
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }} // 🔥 replay on scroll
      variants={container}
      className="min-h-screen bg-white py-20 px-6 lg:px-20 w-full"
    >
      <div className="max-w-5xl mx-auto">

        {/* 🧠 HEADER */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3">
            Parcours Académique
          </h2>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Formations &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Diplômes
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Mon parcours académique reflète ma progression technique, d'un développeur passionné 
            vers un rôle de concepteur et futur Tech Lead.
          </p>
        </motion.div>

        {/* 📍 TIMELINE */}
        <motion.div
          variants={container}
          className="relative border-l-2 border-indigo-100 ml-4 md:ml-10 space-y-12"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeLeft}
              whileHover={{ x: 6 }}
              className="relative pl-8 group"
            >
              
              {/* DOT */}
              <motion.div
                whileHover={{ scale: 1.4 }}
                className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm"
              />

              {/* CARD */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  <div className="flex items-start gap-4">
                    
                    {/* ICON */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="hidden sm:flex w-12 h-12 bg-white rounded-xl items-center justify-center shadow-sm border border-gray-100 text-indigo-600"
                    >
                      <i className={`bi ${cert.icon} text-2xl`}></i>
                    </motion.div>

                    <div>
                      <h5 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        {cert.name}

                        {cert.level && (
                          <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded uppercase font-black">
                            {cert.level}
                          </span>
                        )}
                      </h5>

                      <div className="flex items-center gap-2 text-gray-500 mt-1">
                        <i className="bi bi-geo-alt-fill text-sm"></i>
                        <span className="font-medium">{cert.place}</span>
                      </div>
                    </div>
                  </div>

                  {/* DATE */}
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-500 shadow-sm uppercase tracking-wider">
                      {cert.date}
                    </span>
                  </div>

                </div>
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

        {/* 🚀 NOTE */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          className="mt-20 p-8 rounded-3xl bg-slate-900 text-center text-white"
        >
          <h4 className="text-xl font-bold mb-2">Apprentissage Continu</h4>
          <p className="text-slate-400 text-sm md:text-base">
            Au-delà des diplômes, je me forme quotidiennement sur les nouvelles architectures Cloud, 
            la sécurité et les pratiques DevOps.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Certifications;
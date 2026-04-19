import React from "react";
import { motion } from "framer-motion";
import { useAnimationTrigger } from "../context/AnimationProvider";

const About = () => {
  const { trigger } = useAnimationTrigger();

  const handleCta = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      window.history.pushState(null, null, "/contact");
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: ["React", "React Native", "Angular", "Tailwind CSS"],
      icon: "bi-code-slash",
    },
    {
      title: "Backend & Logic",
      skills: ["Node.js", "NestJS", "Java", "Python"],
      icon: "bi-database-fill-gear",
    },
    {
      title: "Data & Cloud",
      skills: ["MongoDB", "MySQL", "MariaDB", "REST APIs"],
      icon: "bi-server",
    },
    {
      title: "DevOps & Admin",
      skills: ["VPS & Nginx", "CI/CD", "Docker", "Linux Admin"],
      icon: "bi-terminal-fill",
    },
  ];

  // 🔥 animation system (same as Info)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
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

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      key={trigger} // 🔥 navbar click → restart animation
      initial="hidden"
      whileInView="show" // 🔥 scroll animation
      viewport={{ once: false }} // 🔥 replay on scroll
      variants={container}
      className="w-full min-h-screen bg-white py-20 px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* 🧠 HEADER */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          
          <motion.div variants={fadeUp} className="flex-1 text-center lg:text-left">
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">
              À Propos
            </h2>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Ingénierie <span className="text-indigo-600">Full Stack</span> & Culture DevOps
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Passionné par l'architecture logicielle, je construis des environnements complets,
              combinant backend robuste, interfaces modernes et déploiement DevOps optimisé.
            </p>
          </motion.div>

          {/* 📊 STATS */}
          <motion.div variants={fadeRight} className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="group p-6 bg-indigo-50 rounded-2xl text-center"
            >
              <div className="text-3xl font-black text-indigo-600">3+</div>
              <div className="text-xs font-bold text-slate-500 uppercase">Années d'Exp.</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="group p-6 bg-purple-50 rounded-2xl text-center"
            >
              <div className="text-3xl font-black text-purple-600">15+</div>
              <div className="text-xs font-bold text-slate-500 uppercase">Projets Livrés</div>
            </motion.div>

          </motion.div>
        </div>

        {/* 🧩 SKILLS GRID */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:bg-white transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
              >
                <i className={`bi ${cat.icon} text-indigo-600 text-xl`}></i>
              </motion.div>

              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-600">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                    className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-2 py-1 rounded-md shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🚀 EXPERTISE */}
        <motion.div variants={fadeUp} className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-500 inline-block"></span>
                Ce que je propose
              </h2>

              <ul className="space-y-4">
                {[
                  { t: "Architecture Frontend", d: "React & Angular modernes." },
                  { t: "Backend robuste", d: "Node.js, Java, Python sécurisés." },
                  { t: "DevOps & CI/CD", d: "Docker, VPS, automatisation." },
                  { t: "Bases de données", d: "SQL & NoSQL optimisés." },
                ].map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 8 }} className="flex gap-4">
                    <i className="bi bi-check2-circle text-indigo-400 text-xl"></i>
                    <div>
                      <h4 className="font-bold text-gray-100">{item.t}</h4>
                      <p className="text-sm text-gray-400">{item.d}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* RIGHT CTA */}
            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              
              <div className="mb-8">
                <motion.p
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-gray-400 mb-2 uppercase text-sm"
                >
                  Prêt pour un nouveau projet ?
                </motion.p>

                <h3 className="text-3xl font-bold">
                  Transformons vos idées en réalité numérique.
                </h3>
              </div>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCta}
                className="inline-flex items-center px-8 py-4 font-bold text-white bg-indigo-600 rounded-full shadow-lg cursor-pointer"
              >
                Lancer une discussion
                <motion.i
                  className="bi bi-arrow-right ml-2"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </motion.a>

            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;
import React from "react";
import { motion } from "framer-motion";
import { useAnimationTrigger } from "../context/AnimationProvider";

const Services = () => {
  const { trigger } = useAnimationTrigger();

  const services = [
    {
      title: "Architecture Backend",
      desc: "Conception de systèmes robustes avec Node.js, NestJS ou Java. Focus sur la sécurité, l'authentification JWT et la scalabilité.",
      icon: "bi-cpu-fill",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Expertise API",
      desc: "Conception et intégration d'APIs RESTful et GraphQL. Optimisation des flux de données et documentation Swagger.",
      icon: "bi-patch-check-fill",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Gestion de Données",
      desc: "Modélisation avancée SQL et NoSQL. Optimisation des requêtes et intégrité des données.",
      icon: "bi-database-fill-lock",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud & DevOps",
      desc: "CI/CD, Docker, VPS & Nginx pour une haute disponibilité et un déploiement fiable.",
      icon: "bi-cloud-check-fill",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  // 🔥 global animation system
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      key={trigger} // 🔥 navbar click → restart animation
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }} // 🔥 replay on scroll
      variants={container}
      className="w-full bg-white py-24 px-6 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* 🧠 HEADER */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Services & Solutions
          </h2>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Une expertise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              bout-en-bout
            </span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Je transforme vos concepts en produits technologiques finis, de l’architecture
            serveur à la mise en production sécurisée.
          </p>
        </motion.div>

        {/* 🧩 SERVICES GRID */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative p-8 bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden transition-all"
            >
              {/* glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.12 }}
                className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl`}
              />

              {/* icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
              >
                <i className={`bi ${service.icon} text-white text-3xl`}></i>
              </motion.div>

              {/* title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>

              {/* desc */}
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {service.desc}
              </p>

              {/* bottom line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 🛡 TRUST BAR */}
        <motion.div
          variants={fadeUp}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {[
            { icon: "bi-shield-lock-fill", text: "SÉCURITÉ BY DESIGN" },
            { icon: "bi-lightning-charge-fill", text: "HAUTE PERFORMANCE" },
            { icon: "bi-infinity", text: "CI/CD WORKFLOW" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -3 }}
              className="flex items-center gap-2 font-bold text-slate-400"
            >
              <i className={`bi ${item.icon}`}></i>
              {item.text}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Services;
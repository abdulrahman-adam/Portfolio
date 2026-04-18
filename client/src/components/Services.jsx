import React from 'react';

const Services = () => {
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
      desc: "Modélisation avancée SQL (MySQL/MariaDB) et NoSQL (MongoDB). Optimisation des requêtes et intégrité des données.",
      icon: "bi-database-fill-lock",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud & DevOps",
      desc: "Déploiement CI/CD, conteneurisation Docker et configuration de serveurs VPS/Nginx pour une disponibilité de 99.9%.",
      icon: "bi-cloud-check-fill",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Services & Solutions
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Une expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">bout-en-bout</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Je transforme vos concepts en produits technologiques finis. 
            De l'architecture serveur à la mise en production sécurisée, je garantis 
            la performance et la pérennité de vos applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-gray-50 rounded-3xl border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl`}></div>

              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                <i className={`bi ${service.icon} text-white text-3xl`}></i>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {service.desc}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Professional Trust Bar */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-slate-400">
             <i className="bi bi-shield-lock-fill"></i> SÉCURITÉ BY DESIGN
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-400">
             <i className="bi bi-lightning-charge-fill"></i> HAUTE PERFORMANCE
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-400">
             <i className="bi bi-infinity"></i> CI/CD WORKFLOW
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
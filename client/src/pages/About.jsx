import React from "react";

const About = () => {
  const handleCta = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.history.pushState(null, null, '/contact');
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: ["React", "React Native", "Angular", "Tailwind CSS"],
      icon: "bi-code-slash"
    },
    {
      title: "Backend & Logic",
      skills: ["Node.js", "NestJS", "Java", "Python"],
      icon: "bi-database-fill-gear"
    },
    {
      title: "Data & Cloud",
      skills: ["MongoDB", "MySQL", "MariaDB", "REST APIs"],
      icon: "bi-server"
    },
    {
      title: "DevOps & Admin",
      skills: ["VPS & Nginx", "CI/CD", "Docker", "Linux Admin"],
      icon: "bi-terminal-fill"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white py-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Entrance Animation */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-sm mb-4">À Propos</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Ingénierie <span className="text-indigo-600">Full Stack</span> & Culture DevOps
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Passionné par l'architecture logicielle, je ne me contente pas d'écrire du code : 
              je construis des environnements complets. Mon approche combine la rigueur du 
              backend avec la fluidité des interfaces modernes, tout en garantissant une 
              haute disponibilité grâce aux outils DevOps.
            </p>
          </div>
          
          {/* Stats Box - Hover Animation */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto animate-in fade-in zoom-in-95 delay-300 duration-700">
            <div className="group p-6 bg-indigo-50 rounded-2xl text-center transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:-translate-y-2">
              <div className="text-3xl font-black text-indigo-600 group-hover:text-white transition-colors duration-300">3+</div>
              <div className="text-xs font-bold text-slate-500 group-hover:text-indigo-100 uppercase tracking-tighter">Années d'Exp.</div>
            </div>
            <div className="group p-6 bg-purple-50 rounded-2xl text-center transition-all duration-300 hover:bg-purple-600 hover:shadow-xl hover:-translate-y-2">
              <div className="text-3xl font-black text-purple-600 group-hover:text-white transition-colors duration-300">15+</div>
              <div className="text-xs font-bold text-slate-500 group-hover:text-purple-100 uppercase tracking-tighter">Projets Livrés</div>
            </div>
          </div>
        </div>

        {/* Skills Grid - Staggered Card Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, index) => (
            <div 
              key={index} 
              style={{ animationDelay: `${index * 150}ms` }}
              className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:bg-white hover:-translate-y-2 animate-in fade-in slide-in-from-bottom fill-mode-both"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:rotate-[360deg] transition-all duration-700">
                <i className={`bi ${cat.icon} text-indigo-600 text-xl group-hover:text-white`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-2 py-1 rounded-md shadow-sm transition-all hover:border-indigo-400 hover:text-indigo-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Detail Section - Slide from side Animation */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl animate-in fade-in slide-in-from-right duration-1000 delay-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-500 inline-block"></span>
                Ce que je propose
              </h2>
              <ul className="space-y-4">
                {[
                  { t: "Architecture Frontend", d: "Interfaces modernes et réactives avec React & Angular." },
                  { t: "Systèmes Backend", d: "APIs robustes et sécurisées via Node.js et Java/Python." },
                  { t: "Infrastructure & CI/CD", d: "Déploiement sur VPS (Nginx), conteneurisation et automatisation." },
                  { t: "Gestion de Données", d: "Modélisation et optimisation de bases SQL et NoSQL." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 group cursor-default">
                    <i className="bi bi-check2-circle text-indigo-400 text-xl group-hover:scale-125 transition-transform duration-300"></i>
                    <div>
                      <h4 className="font-bold text-gray-100 group-hover:text-indigo-300 transition-colors">{item.t}</h4>
                      <p className="text-sm text-gray-400">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <div className="mb-8">
                <p className="text-gray-400 mb-2 font-medium uppercase tracking-widest text-sm animate-pulse">Prêt pour un nouveau projet ?</p>
                <h3 className="text-3xl font-bold leading-snug">Transformons vos idées en réalité numérique.</h3>
              </div>
              <a
                href="/contact"
                onClick={handleCta}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-indigo-500/50"
              >
                Lancer une discussion
                <i className="bi bi-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
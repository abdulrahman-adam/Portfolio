import React from "react";

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
  return (
    <section className="min-h-screen bg-white py-20 px-6 lg:px-20 w-full">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3">
            Parcours Académique
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Formations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Diplômes</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Mon parcours académique reflète ma progression technique, d'un développeur passionné 
            vers un rôle de concepteur et futur Tech Lead.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-10 space-y-12">
          {certifications.map((cert, index) => (
            <div key={index} className="relative pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm transition-transform group-hover:scale-150 duration-300"></div>

              {/* Content Card */}
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  <div className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div className="hidden sm:flex shrink-0 w-12 h-12 bg-white rounded-xl items-center justify-center shadow-sm border border-gray-100 text-indigo-600">
                      <i className={`bi ${cert.icon} text-2xl`}></i>
                    </div>

                    <div>
                      <h5 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        {cert.name}
                        {cert.level && (
                          <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded uppercase tracking-tighter font-black">
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

                  {/* Date Tag */}
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-500 shadow-sm uppercase tracking-wider">
                      {cert.date}
                    </span>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Professional Note */}
        <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-center text-white">
          <h4 className="text-xl font-bold mb-2">Apprentissage Continu</h4>
          <p className="text-slate-400 text-sm md:text-base">
            Au-delà des diplômes, je me forme quotidiennement sur les nouvelles architectures Cloud, 
            la sécurité et les pratiques DevOps.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
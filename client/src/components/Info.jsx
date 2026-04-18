import React from 'react';

const Info = () => {
  // Navigation helper for the CTA button
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.history.pushState(null, null, '/contact');
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-16">
      {/* Background Decorative Element - Added a subtle floating pulse */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 transform opacity-10 animate-pulse">
        <div className="h-[400px] w-[400px] rounded-full bg-indigo-600 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Profile / Image Section - Entrance Animation */}
        <div className="relative flex-shrink-0 group animate-in fade-in slide-in-from-left duration-1000">
          {/* Animated rings - Rotate on hover */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 group-hover:opacity-60 group-hover:rotate-180 transition-all duration-1000 blur-sm"></div>
          <img
            src="/mon.jpg" 
            alt="Abdulrahman Profile"
            className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full shadow-2xl border-4 border-white z-10 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Section - Staggered entrance animations */}
        <div className="flex-1 flex flex-col text-center lg:text-left">
          
          <h6 className="text-2xl sm:text-2xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            Bonjour ! Je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Abdulrahman</span>
          </h6>

          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom delay-200 duration-700">
            Expert <span className="font-bold text-slate-800">Full Stack & DevOps</span>. Je conçois des solutions digitales robustes et intuitives, transformant des architectures complexes en expériences fluides pour l'utilisateur final.
          </p>

          {/* Skills Area */}
          <div className="mb-10 animate-in fade-in slide-in-from-bottom delay-300 duration-700">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                Stacks Principales
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {["React", "React Native", "Angular", "Node.js", "NestJS", "Java", "Python", "DevOps", "Nginx"].map((skill, index) => (
                <span 
                  key={skill} 
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className="bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons Section - Fade in with a pop effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in fade-in zoom-in-95 delay-500 duration-500">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-indigo-200 cursor-pointer"
            >
              Me contacter
            </button>
            
            <a 
              href="https://github.com/abdulrahman-adam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 hover:border-indigo-200 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Voir mes projets <i className="bi bi-github text-xl group-hover:rotate-12 transition-transform"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Info;
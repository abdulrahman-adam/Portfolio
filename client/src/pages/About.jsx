import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/mon.jpg" // Remplace par ton image
            alt="Abdulrahman"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full shadow-lg object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-6">
        
          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-3 text-center md:text-left">
              Compétences & Expertise
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {["React", "React Native", "Tailwind CSS", "Angular", "Node.js", "NestJS", "Java","Python", "MongoDB", "MySQL", "MariaDB", "REST APIs", "VPS & Nginx", "DevOps"].map((skill) => (
                <span key={skill} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm sm:text-base">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2 text-center md:text-left">
              Mon Expertise
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1 text-center md:text-left">
              <li>Développement frontend avec React, React Native, Angular et Tailwind CSS</li>
              <li>Développement backend avec Node.js, Java Python</li>
              <li>Gestion et optimisation de bases de données SQL et MongoDB</li>
              <li>Intégration et consommation d’APIs REST et services externes</li>
              <li>Déploiement sur VPS avec Nginx et optimisation des performances</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="/contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition text-sm sm:text-base"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

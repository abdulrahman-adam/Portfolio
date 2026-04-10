import React from "react";

const certifications = [
  {
    name: "CTO & Tech Lead Mastère",
    place: "HETIC Montreuil",
  },
  {
    name: "Concepteur Développeur d'Applications BAC + 3",
    place: "DORANCO Paris",
  },
  {
    name: "Développeur web et web mobile BAC + 2",
    place: "ALT-RH Paris",
  },
  
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 w-full">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">
          🎓 Liste des Formations
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
          Voici quelques-unes des formations et certifications que j'ai suivies
          pour développer mes compétences en développement web et applications.
          Elles démontrent mon engagement à rester à jour avec les technologies
          modernes et à améliorer continuellement mes compétences professionnelles.
        </p>

        {/* Desktop / Tablet Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-600 text-white text-left">
                <th className="p-3">Nom de Formation</th>
                <th className="p-3">Lieu de Formation</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-purple-50 transition"
                >
                  <td className="p-3 font-medium text-gray-700">{cert.name}</td>
                  <td className="p-3 text-gray-600">{cert.place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden mt-6 space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <p className="font-semibold text-purple-700 mb-1">{cert.name}</p>
              <p className="text-gray-600">{cert.place}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

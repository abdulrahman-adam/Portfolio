import React from "react";

const projects = [
  {
    id: 1,
    name: "Ayacodia",
    description:
      "Une boutique en ligne complète avec intégration de paiement en ligne, authentification, panier d'achat, rôle d'administrateur et fonctionnalités CRUD et statut de commande.",
    languages: "React,Tailwind CSS, Node.js/Express, MongoDB",
    isOnline: "https://www.ayacodia.com/",
    file: "../../public/downloads/project.zip",
  },
 
  {
    id: 3,
    name: "Publier",
    description: "Une application mobile intuitive qui permet aux utilisateurs de s’abonner, publier et explorer des articles en toute sécurité.",
    languages: "React native node.js/Express et MongoDB",
    isOnline: null, // not online
    file: "../../public/downloads/Publier.zip",
  },

   {
    id: 3,
    name: "Hotel Reservation",
    description: "Une application de réservation d’hôtel permettant aux utilisateurs de rechercher des chambres disponibles, gérer les réservations et consulter l’historique.",
    languages: "Angular, Java Spring Boot Mysql",
    isOnline: null, // not online
    file: "../../public/downloads/hotelReservation.zip",
  },

   {
    id: 3,
    name: "Site Vitrine",
    description: "Site moderne et responsive présentant une entreprise, ses services et facilitant la prise de contact.",
    languages: "HTML, CSS, JavaScript",
    isOnline: null, // not online
    file: "../../public/downloads/wehda.zip",
  },

];

const Download = () => {
  return (
<div className="min-h-screen bg-gray-50 py-6 px-2 w-full">
  <div className="w-full my-6 bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-4 sm:mb-6 text-center w-full">
      📂 Mes Projets
    </h1>

    <p className="text-gray-600 text-center w-full mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
      Voici quelques projets sur lesquels j'ai travaillé en tant que
      développeur Full Stack. Chaque projet démontre mes compétences en
      création d'applications web évolutives en utilisant{" "}
      <span className="font-semibold text-purple-600">
        React, React Native, Angular
      </span>{" "}
      sur le frontend et{" "}
      <span className="font-semibold text-purple-600">Node.js, Java</span>{" "}
      sur le backend, avec{" "}
      <span className="font-semibold text-purple-600">MySQL, MongoDB</span>{" "}
      comme base de données. Je me concentre sur une conception épurée et des
      fonctionnalités robustes.
    </p>

    {/* Desktop / Tablet Table */}
    <div className="hidden md:block overflow-x-auto w-full">
      <table className="w-full border-collapse text-sm sm:text-base">
        <thead>
          <tr className="bg-purple-600 text-white text-left">
            <th className="p-2 sm:p-3">ID</th>
            <th className="p-2 sm:p-3">Nom du Projet</th>
            <th className="p-2 sm:p-3">Description</th>
            <th className="p-2 sm:p-3">Langages</th>
            <th className="p-2 sm:p-3">Status</th>
            <th className="p-2 sm:p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="border-b hover:bg-purple-50 transition"
            >
              <td className="p-2 sm:p-3">{project.id}</td>
              <td className="p-2 sm:p-3 font-semibold">{project.name}</td>
              <td className="p-2 sm:p-3 text-gray-600">{project.description}</td>
              <td className="p-2 sm:p-3 text-gray-600">{project.languages}</td>
              <td className="p-2 sm:p-3 font-medium">
                {project.isOnline ? (
                  <a
                    href={project.isOnline}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 underline"
                  >
                    en ligne
                  </a>
                ) : (
                  <span className="text-red-600">hors ligne</span>
                )}
              </td>
              <td className="p-2 sm:p-3 text-center">
                <a
                  href={project.file}
                  download
                  className="bg-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
                >
                  Télécharger
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Cards */}
    <div className="md:hidden mt-4 sm:mt-6 w-full space-y-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border rounded-lg p-4 sm:p-6 shadow-sm bg-white w-full"
        >
          <h2 className="text-lg sm:text-xl font-bold text-purple-700">
            {project.name}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-2">
            {project.description}
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            <span className="font-semibold">Langages:</span> {project.languages}
          </p>
          <p className="text-sm font-semibold mt-1">
            Status:{" "}
            {project.isOnline ? (
              <a
                href={project.isOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                en ligne
              </a>
            ) : (
              <span className="text-red-600">hors ligne</span>
            )}
          </p>
          <a
            href={project.file}
            download
            className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm sm:text-base w-full text-center"
          >
            Télécharger
          </a>
        </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default Download;

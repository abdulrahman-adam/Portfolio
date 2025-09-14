import React from 'react'

const Services = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">
      🚀 Mes Services
    </h2>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-10">
      En tant que développeur Full Stack, je crée des applications web complètes,
      robustes et évolutives. Je gère le code backend, l'intégration d'APIs,
      la gestion des bases de données et le déploiement de vos applications.
    </p>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Backend Development */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
        <div className="bg-purple-100 text-purple-700 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-2xl">
          💻
        </div>
        <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
        <p className="text-gray-600 text-sm">
          Création de logiques serveur solides, gestion des routes, authentification, et sécurité.
        </p>
      </div>

      {/* API Integration */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
        <div className="bg-purple-100 text-purple-700 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-2xl">
          🔗
        </div>
        <h3 className="text-xl font-semibold mb-2">API Integration</h3>
        <p className="text-gray-600 text-sm">
          Connexion de votre frontend aux APIs, gestion des appels et traitement des données.
        </p>
      </div>

      {/* Database Management */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
        <div className="bg-purple-100 text-purple-700 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-2xl">
          🗄️
        </div>
        <h3 className="text-xl font-semibold mb-2">Database Management</h3>
        <p className="text-gray-600 text-sm">
          Conception et optimisation de bases de données SQL et NoSQL pour des performances maximales.
        </p>
      </div>

      {/* Deployment */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
        <div className="bg-purple-100 text-purple-700 w-16 h-16 flex items-center justify-center rounded-full mb-4 text-2xl">
          ☁️
        </div>
        <h3 className="text-xl font-semibold mb-2">Deployment</h3>
        <p className="text-gray-600 text-sm">
          Déploiement d’applications sur serveur VPS, configuration de Nginx et optimisation des performances pour un service stable et sécurisé ✅.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Services

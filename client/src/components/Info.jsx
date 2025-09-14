import React from 'react'

const Info = () => {
  return (
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 my-14 px-4 md:px-0">
  {/* Profile / Image Section */}
  <div className="flex-shrink-0">
    <img
      src="/mon.jpg" // Replace with your image
      alt="My image"
      className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full shadow-lg object-ccontain"
    />
  </div>

  {/* Text Section */}
  <div className="flex-1 flex flex-col gap-4 sm:gap-6">
    {/* Introduction */}
    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 text-center md:text-left">
      Bonjour ! Je suis Abdulrahman
    </h3>
    <p className="text-gray-700 text-base sm:text-lg md:text-xl text-center md:text-left">
      Je suis un développeur Full Stack passionné, expérimenté dans la création d'applications web évolutives utilisant React, React Native, Angular, Java, Node.js et les technologies modernes. J'aime transformer des problèmes complexes en expériences utilisateur simples et intuitives.
    </p>

    {/* Skills */}
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-3 text-center md:text-left">
       Compétences et Expertise
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">React</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">React Native</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">Tailwind CSS</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">Angular</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">Node.js</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">Java</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">Python</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">MongoDB</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">MySQL</span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">REST APIs</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Info



import { useState } from 'react';
import { assets } from "../assets/assets";
import { useAnimationTrigger } from '../context/AnimationProvider';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { replayAnimation } = useAnimationTrigger();



  // The professional way to change URL without a hash (#) and scroll
  const handleNavigation = (e, id, path) => {
    e.preventDefault(); // Stops the page from reloading
    
    // 1. Update the browser URL to /about, /contact, etc.
    window.history.pushState(null, null, path);

    replayAnimation();
    // 2. Find the section on the page
    const element = document.getElementById(id);
    
    if (element) {
      // 3. Smooth scroll to that section
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    setVisible(false); // Close mobile menu
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 font-medium bg-[#979798] h-[55px] sticky top-0 z-50 shadow-md">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <a href="/" onClick={(e) => handleNavigation(e, 'home', '/')}>
          <img
            src="/mon.jpg"
            alt="Logo"
            className="w-[50px] h-[50px] rounded-full border-2 border-white shadow-sm cursor-pointer"
          />
        </a>
      </div>

      {/* Right: Menu (Desktop) */}
      <ul className="hidden sm:flex gap-10 text-sm text-gray-800">
        <li className="cursor-pointer hover:text-white transition-colors">
          <a onClick={(e) => handleNavigation(e, 'home', '/')}>ACCUEIL</a>
        </li>
        <li className="cursor-pointer hover:text-white transition-colors">
          <a onClick={(e) => handleNavigation(e, 'about', '/about')}>À PROPOS</a>
        </li>
        {/* <li className="cursor-pointer hover:text-white transition-colors">
          <a onClick={(e) => handleNavigation(e, 'projects', '/projects')}>PROJETS</a>
        </li> */}
        <li className="cursor-pointer hover:text-white transition-colors">
          <a onClick={(e) => handleNavigation(e, 'contact', '/contact')}>CONTACT</a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="Menu" className="w-6 cursor-pointer" />
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`fixed top-0 right-0 h-full overflow-hidden transition-all duration-300 z-50 ${visible ? "w-full" : "w-0"}`} style={{ backgroundColor: "#979798" }}>
        <div className="flex flex-col text-white">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-6 cursor-pointer border-b border-gray-600">
            <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180 brightness-0 invert" />
            <p className="font-bold">RETOUR</p>
          </div>

          <a onClick={(e) => handleNavigation(e, 'home', '/')} className="py-4 pl-10 border-b border-gray-600 font-bold">ACCUEIL</a>
          <a onClick={(e) => handleNavigation(e, 'about', '/about')} className="py-4 pl-10 border-b border-gray-600 font-bold">À PROPOS</a>
          {/* <a onClick={(e) => handleNavigation(e, 'projects', '/projects')} className="py-4 pl-10 border-b border-gray-600 font-bold">PROJETS</a> */}
          <a onClick={(e) => handleNavigation(e, 'contact', '/contact')} className="py-4 pl-10 border-b border-gray-600 font-bold">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

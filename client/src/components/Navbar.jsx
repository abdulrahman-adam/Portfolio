// import { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { assets } from "../assets/assets";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <nav
//       className="flex items-center justify-between px-6 md:px-12 py-4 font-medium bg-[#979798] h-[55px]"
//     >
//       {/* Left: Logo */}
//       <div className="flex-shrink-0">
//         <Link to="/">
//           <img
//             src="/mon.jpg"
//             alt="My image"
//             className="w-[50px] h-[50px] rounded-full"
//           />
//         </Link>
//       </div>

//       {/* Right: Menu */}
//       <ul className="hidden sm:flex gap-10 text-sm text-gray-600">
//         <NavLink to="/" className="flex flex-col items-center gap-1">
//           <p>ACCUEIL </p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to="/about" className="flex flex-col items-center gap-1">
//           <p>À PROPOS</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to="/contact" className="flex flex-col items-center gap-1">
//           <p>CONTACT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//       </ul>

//       {/* Mobile Menu Icon */}
//       <div className="sm:hidden">
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           alt=""
//           className="w-6 cursor-pointer"
//         />
//       </div>

//       {/* Sidebar Menu for Mobile */}
//       <div
//         className={`fixed top-0 right-0 h-full overflow-hidden transition-all duration-300 ${
//           visible ? "w-full" : "w-0"
//         }`}
//         style={{ backgroundColor: "#979798" }}
//       >
//         <div className="flex flex-col text-gray-600">
//           <div
//             onClick={() => setVisible(false)}
//             className="flex items-center gap-4 p-3 cursor-pointer"
//           >
//             <img
//               src={assets.dropdown_icon}
//               alt=""
//               className="h-4 rotate-180"
//             />
//             <p>Back</p>
//           </div>

//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border-b border-gray-700"
//             to="/"
//           >
//             ACCUEIL 
//           </NavLink>
         
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border-b border-gray-700"
//             to="/about"
//           >
//             À PROPOS
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border-b border-gray-700"
//             to="/contact"
//           >
//             CONTACT
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from 'react';
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // The professional way to change URL without a hash (#) and scroll
  const handleNavigation = (e, id, path) => {
    e.preventDefault(); // Stops the page from reloading
    
    // 1. Update the browser URL to /about, /contact, etc.
    window.history.pushState(null, null, path);

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

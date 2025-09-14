import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav
      className="flex items-center justify-between px-6 md:px-12 py-4 font-medium bg-[#979798] h-[55px]"
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            src="/mon.jpg"
            alt="My image"
            className="w-[50px] h-[50px] rounded-full"
          />
        </Link>
      </div>

      {/* Right: Menu */}
      <ul className="hidden sm:flex gap-10 text-sm text-gray-600">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>ACCUEIL </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>À PROPOS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-6 cursor-pointer"
        />
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full overflow-hidden transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
        style={{ backgroundColor: "#979798" }}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt=""
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-gray-700"
            to="/"
          >
            ACCUEIL 
          </NavLink>
         
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-gray-700"
            to="/about"
          >
            À PROPOS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b border-gray-700"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

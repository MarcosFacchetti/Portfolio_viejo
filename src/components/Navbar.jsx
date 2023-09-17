import React, { useState, useContext } from "react";
import { HiMenu } from "react-icons/hi";
import perfil from "./perfil.jpg";
import { Link } from "react-scroll";
import { DarkModeContext } from "./DarkModeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { id: "introduccion", text: "Inicio" },
    { id: "habilidades", text: "Habilidades" },
    { id: "proyectos", text: "Proyectos" },
    { id: "contacto", text: "Contacto" },
  ];

  return (
    <nav
      className={`flex items-center justify-between flex-wrap px-6 p-1 fixed w-full z-10 ${
        isDarkMode ? "bg-gray-500" : "bg-gray-800"
      }`}
    >
      <div>
        <img
          src={perfil}
          alt="Perfil"
          className={`w-[75px] filter ${
            isDarkMode ? "" : "grayscale"
          }`}
        />
      </div>
      <div className="block lg:hidden">
        <button
          className={`flex items-center px-3 py-2 border rounded text-black border-black hover:bg-gray-600 ${
            isDarkMode ? "bg-gray-600 text-white" : "text-white border-white"
          }`}
          onClick={handleMenuClick}
        >
          <HiMenu className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:w-auto transition duration-500 ease-in-out lg:ml-[65%]`}
      >
        <div className={`text-lg lg:flex flex-grow justify-evenly mr-10 ${
          isDarkMode ? "text-white" : "text-white"
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              activeClass="font-Montserrat-LightItalic"
              to={link.id}
              spy={true}
              smooth={true}
              duration={500}
              className={`${isDarkMode ? "hover:text-blue-800" : "hover:text-blue-400"}  lg:mt-auto cursor-pointer block mt-5 ${
                link.id === "contacto" ? "pb-3 lg:pb-0" : "" //<-- asi se modifica solo un enlace
              }`} 
              onClick={closeMenu}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      <button //boton de darkmode
        className={`fixed bottom-4 right-4 p-2 rounded-md shadow ${
          isDarkMode ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
        }`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;

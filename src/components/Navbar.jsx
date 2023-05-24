import React from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#0d0657] p-6 fixed w-full z-10">
      <div className="flex items-center flex-shrink-0 text-white">
        <span className="font-Montserrat-LightItalic text-xl tracking-tight select-none">MF</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          onClick={handleMenuClick}
        >
          <HiMenu className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full flex-grow lg:flex lg:items-center lg:w-auto transition duration-500 ease-in-out lg:ml-[65%] `}
      >
        <div className="text-lg lg:flex flex-grow text-white justify-between mr-10">
          <Link
            activeClass="font-Montserrat-LightItalic"
            to="introduccion"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-blue-300 cursor-pointer block"
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link
            activeClass="font-Montserrat-LightItalic"
            to="habilidades"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-blue-300 cursor-pointer block"
            onClick={closeMenu}
          >
            Habilidades
          </Link>
          <Link
            activeClass="font-Montserrat-LightItalic"
            to="proyectos"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-blue-300 cursor-pointer block"
            onClick={closeMenu}
          >
            Proyectos
          </Link>
          <Link
            activeClass="font-Montserrat-LightItalic"
            to="contacto"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-blue-300 cursor-pointer block"
            onClick={closeMenu}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

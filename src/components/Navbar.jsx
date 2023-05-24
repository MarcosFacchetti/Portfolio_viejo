import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
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
    <nav className="flex items-center justify-between flex-wrap bg-[#0d0657] p-6 fixed w-full z-10">
      <div className="flex items-center text-white">
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
        className={`${isOpen ? "block" : "hidden"} w-full flex-grow lg:flex lg:w-auto transition duration-500 ease-in-out lg:ml-[65%]`}
      >
        <div className="text-lg lg:flex flex-grow text-white justify-evenly mr-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              activeClass="font-Montserrat-LightItalic"
              to={link.id}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-300 lg:mt-auto cursor-pointer block mt-5 border-b-2 border-b-blue-300"
              onClick={closeMenu}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

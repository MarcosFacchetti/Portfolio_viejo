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
    <nav className="flex items-center justify-between flex-wrap bg-slate-950 p-6 fixed w-full z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight select-none">MF</span>
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
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto transition duration-500 ease-in-out`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            activeClass="font-bold"
            to="introduccion"
            spy={true}
            smooth={true}
            duration={500}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            activeClass="font-bold"
            to="habilidades"
            spy={true}
            smooth={true}
            duration={500}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            activeClass="font-bold"
            to="contacto"
            spy={true}
            smooth={true}
            duration={500}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white"
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
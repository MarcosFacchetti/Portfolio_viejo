import React, { useContext } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DarkModeContext } from "./DarkModeContext";

function Contacto() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`text-white h-screen py-10 px-4 md:px-16 lg:px-24 lg:mt-0 mt-16 flex flex-col justify-center items-center text-xl space-y-5 ${
        isDarkMode ? "bg-dark" : "bg-light"
      }`}
    >
      <h1 className="text-4xl font-bold mb-8 backdrop-blur-3xl px-2 pb-2 mt-20 animate-bounce rounded-xl shadow-lg">
        ¡Contáctame!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`bg-[#061657] p-6 rounded-lg flex items-center ${
            isDarkMode ? "bg-gray-500" : "bg-gray-600"
          }`}
        >
          <AiOutlineMail className="text-3xl animate-[pulse_1s_infinite] mr-4 text-blue-500" />
          <div>
            <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>
              Email
            </h2>
            <a
              href="mailto:marcos-facchetti@hotmail.com"
              className={`text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              marcos-facchetti@hotmail.com
            </a>
          </div>
        </div>

        <div
          className={`bg-[#061657] p-6 rounded-lg flex items-center ${
            isDarkMode ? "bg-gray-500" : "bg-gray-600"
          }`}
        >
          <AiOutlinePhone className="text-3xl animate-[pulse_1s_infinite] mr-4 text-blue-500" />
          <div>
            <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>
              Teléfono
            </h2>
            <a
              href="tel:+543413025312"
              className={`text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              +54 341 3025312
            </a>
          </div>
        </div>

        <div
          className={`bg-[#061657] p-6 rounded-lg flex items-center ${
            isDarkMode ? "bg-gray-500" : "bg-gray-600"
          }`}
        >
          <AiOutlineGithub className="text-3xl animate-[pulse_1s_infinite] mr-4 text-blue-500" />
          <div>
            <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>
              GitHub
            </h2>
            <a
              href="https://github.com/MarcosFacchetti"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              github.com/MarcosFacchetti
            </a>
          </div>
        </div>

        <div
          className={`bg-[#061657] p-6 rounded-lg flex items-center ${
            isDarkMode ? "bg-gray-500" : "bg-gray-600"
          }`}
        >
          <AiOutlineLinkedin className="text-3xl animate-[pulse_1s_infinite] mr-4 text-blue-500" />
          <div>
            <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-white"}`}>
              Linkedin
            </h2>
            <a
              href="https://www.linkedin.com/in/marcos-facchetti-460030237/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              linkedin.com/in/marcos-facchetti
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;

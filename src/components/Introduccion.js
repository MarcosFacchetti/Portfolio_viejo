import React, { useContext } from "react";
import resumePDF from "./MF.pdf";
import AnimatedArrow from "./flecha";
import { DarkModeContext } from "./DarkModeContext";
import perfilImage from "./foto_facha.jpg";
import TituloConBordeGradiente from "./titulo";

function Introduccion() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className="
      min-h-screen
      flex 
      flex-col 
      items-center 
      justify-center 
      text-white
      space-y-5 
      px-4
      md:px-0
      text-center
      mt-10
      select-none
    "
    >
      <div className="mb-4">
        <div className="relative w-60 h-60">
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff9900] via-[#ff33cc] to-[#ff9900] border-4 border-transparent">
            <img
              src={perfilImage}
              alt="Marcos Facchetti"
              className="rounded-full w-full h-full shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="text-4xl font-bold mb-8 backdrop-blur-3xl px-2 mt-20  rounded-xl shadow-lg">
        <TituloConBordeGradiente titulo="Marcos Facchetti" />
      </div>
      <p className="text-lg">Programador Fullstack</p>
      <div className={`flex justify-center mt-8`}>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className={` ${
            isDarkMode ? "bg-gray-400" : "bg-gray-600 text-white"
          } mb-2 font-Montserrat-LightItalic py-2 px-4 rounded`}
        >
          - Ver Curriculum 🎓 -
        </a>
      </div>
      <div>
        <AnimatedArrow />
      </div>
    </div>
  );
}

export default Introduccion;


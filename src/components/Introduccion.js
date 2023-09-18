import React, { useContext } from "react";
import resumePDF from "./MF.pdf";
import AnimatedArrow from "./flecha";
import { DarkModeContext } from "./DarkModeContext";
import perfilImage from "./foto_facha.jpg";

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
    "
    >
      <div className="mb-4">
        {/* Agregar tu foto redonda aquí */  }
        <img
          src={perfilImage}
          alt="Marcos Facchetti"
          className="rounded-full w-60 h-60 border-4 border-white shadow-lg"
          style={{ objectFit: "cover" }} // Aplicar el estilo para el ajuste
        />
      </div>
      <h1 className="text-3xl font-bold">Marcos Facchetti</h1>
      <p className="text-lg">Programador Fullstack</p>

      <div className={`flex justify-center mt-8`}>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className={` ${
            isDarkMode ? "bg-gray-500" : "bg-gray-600 text-white"
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


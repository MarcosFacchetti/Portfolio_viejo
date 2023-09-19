import React, { useContext } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { DarkModeContext } from "./DarkModeContext";
import TituloConBordeGradiente from "./titulo";

function Contacto() {
  const { isDarkMode } = useContext(DarkModeContext);

  const CustomCard = ({
    title,
    IconComponent,
    link,
    isDarkMode,
    buttonText,
  }) => {
    return (
      <div
        className={`bg-gray-800 p-4 px-10 rounded-lg shadow-lg ${
          isDarkMode ? "text-white" : "text-white"
        }`}
      >
        <div className="flex items-center mb-4">
          <div
            className={`text-3xl mr-4 ${
              isDarkMode ? "text-blue-400" : "text-blue-500"
            }`}
          >
            <IconComponent />
          </div>
          <h2
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            {title}
          </h2>
        </div>
        <button
          onClick={() => window.open(link, "_blank")}
          className={`text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300 ${
            isDarkMode ? "text-black" : "text-white"
          }`}
        >
          {buttonText}
        </button>
      </div>
    );
  };

  return (
    <div
      className={`text-white h-screen py-10 px-4 md:px-16 lg:px-24 lg:mt-0 mt-16 flex flex-col justify-center items-center text-xl space-y-5 ${
        isDarkMode ? "bg-dark" : "bg-light"
      }`}
    >
        <div className="text-4xl font-bold mb-8 backdrop-blur-3xl px-2 mt-20 animate-bounce rounded-xl shadow-lg">
          <TituloConBordeGradiente  titulo="Contactame" />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CustomCard
          IconComponent={AiOutlineMail} // Pasa el componente del ícono
          title="Email"
          link="mailto:marcos-facchetti@hotmail.com"
          isDarkMode={isDarkMode}
          buttonText="Enviar Correo"
        />
        <CustomCard
          IconComponent={AiOutlinePhone} // Pasa el componente del ícono
          title="Teléfono"
          link="https://wa.me/543413025312" // Enlace de WhatsApp
          isDarkMode={isDarkMode}
          buttonText="Enviar WhatsApp"
        />
        <CustomCard
          IconComponent={AiOutlineGithub} // Pasa el componente del ícono
          title="GitHub"
          link="https://github.com/MarcosFacchetti"
          isDarkMode={isDarkMode}
          buttonText="Ver en GitHub"
        />
        <CustomCard
          IconComponent={AiOutlineLinkedin} // Pasa el componente del ícono
          title="Linkedin"
          link="https://www.linkedin.com/in/marcos-facchetti-460030237/"
          isDarkMode={isDarkMode}
          buttonText="Ver en Linkedin"
        />
      </div>
    </div>
  );
}

export default Contacto;



import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abogadoImage from "./abogado.png";
import { DarkModeContext } from "./DarkModeContext";
import ProjectCard from "./projecttarjeta";
import TituloConBordeGradiente from "./titulo";



function Proyectos() {
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className={`text-white min-h-screen flex flex-col items-center text-xl space-y-5 justify-center py-10 ${
        isDarkMode ? "bg-dark" : "bg-light"
      }`}
    >
           
           <div className="text-4xl font-bold mb-8 backdrop-blur-3xl px-2 mt-20 rounded-xl shadow-lg">
          <TituloConBordeGradiente  titulo="Proyectos" />
        </div>
      <div className="flex items-center flex-col max-w-2xl">
        <ProjectCard
          imageSrc={abogadoImage}
          title="Página de abogacía"
          description="Es un proyecto responsive desarrollado con React y Tailwind CSS que ofrece una plataforma en línea para mostrar los servicios de un abogado"
          websiteLink="https://abogacia.netlify.app/"
          githubLink="https://github.com/MarcosFacchetti/Pagina_Abogacia"
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}

export default Proyectos;

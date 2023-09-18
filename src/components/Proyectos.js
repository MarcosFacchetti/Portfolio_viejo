import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abogadoImage from "./abogado.png";
import { DarkModeContext } from "./DarkModeContext";
import ProjectCard from "./projecttarjeta";
import perfilImage from "./perfil.jpg";

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
      <h1
        className={`backdrop-blur-3xl rounded-xl text-4xl text-center mb-10 select-none pb-3 px-2 pt-1 mt-28 border-b-2 ${
          isDarkMode ? "text-white" : "text-white"
        }`}
        data-aos="fade-up"
      >
        Proyectos
      </h1>

      <div className="grid grid-cols-1 gap-8 mx-10 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          imageSrc={abogadoImage}
          title="Página de abogacía"
          description="Es un proyecto responsive desarrollado con React y Tailwind CSS que ofrece una plataforma en línea para mostrar los servicios de un abogado"
          websiteLink="https://abogacia.netlify.app/"
          githubLink="https://github.com/MarcosFacchetti/Pagina_Abogacia"
          isDarkMode={isDarkMode}
        />
        <ProjectCard
          imageSrc={perfilImage}
          title="trabajo en progreso"
          description="trabajo en progreso"
          websiteLink=""
          githubLink=""
          isDarkMode={isDarkMode}
        />
        <ProjectCard
          imageSrc={perfilImage}
          title="trabajo en progreso"
          description="trabajo en progreso"
          websiteLink=""
          githubLink=""
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}

export default Proyectos;

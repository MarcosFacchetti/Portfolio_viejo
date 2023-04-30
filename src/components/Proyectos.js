import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abogadoImage from "./abogado.png";

function Proyectos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="
        text-white
        min-h-screen
        flex 
        flex-col 
        items-center 
        text-xl 
        space-y-5 
        justify-center 
        py-10
      "
    >
      <h1
        className="
        backdrop-blur-3xl rounded-xl
          text-4xl 
          text-center 
          mb-10 
          select-none 
          pb-3
          px-2
          pt-1
        "
        data-aos="fade-up"
      >
        Proyectos
      </h1>
      <h3
        className="
        backdrop-blur-3xl rounded-xl
          text-4xl 
          text-center 
          mb-10 
          select-none 
          pb-3
          px-2
          pt-1
        "
        data-aos="fade-up"
      >
        En proceso
      </h3>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          className="bg-slate-950 rounded-md shadow-md p-4"
          data-aos="fade-up"
        >
          <img src={abogadoImage} alt="Página de abogacía" className="mb-4" />
          <h2 className="text-2xl mb-4">
            Pagina de abogacia utilizando React y Tailwind
          </h2>
          <p className="text-gray-400">
            La página de Abogacía es un proyecto responsive desarrollado con
            React y Tailwind CSS que ofrece una plataforma en línea para
            abogados y bufetes legales. Con un diseño moderno y funcional, la
            página proporciona información clara sobre los servicios legales
            ofrecidos, perfiles de abogados y recursos útiles. Optimizada para
            dispositivos móviles, la página garantiza una experiencia fluida y
            receptiva, permitiendo a los usuarios acceder desde cualquier lugar
            y en cualquier momento. Es una solución confiable y profesional para
            quienes buscan servicios legales y asesoramiento jurídico en el
            entorno digital actual.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://abogacia.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Ir a la página
            </a>
            <a
              href="https://github.com/MarcosFacchetti/Pagina_Abogacia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
            >
              Visitar GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;

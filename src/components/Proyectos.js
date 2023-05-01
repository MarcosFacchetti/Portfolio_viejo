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
          mt-28
          border-b-2
        "
        data-aos="fade-up"
      >
        Proyectos
      </h1>

      <div className="flex flex-row mx-10 md:max-w-[700px]">
        <div
          className="bg-[#061657] rounded-md shadow-md p-4"
          data-aos="fade-up"
        >
          <img src={abogadoImage} alt="Página de abogacía" className="mb-4" />
          <h2 className="text-2xl mb-4 text-center">Página de abogacía</h2>
          <p className="text-white">
            La página de Abogacía es un proyecto responsive desarrollado con
            React y Tailwind CSS que ofrece una plataforma en línea para mostrar
            los servicios de un solo abogado. Con un diseño moderno y funcional,
            la página proporciona información clara sobre los servicios legales
            ofrecidos por este abogado, su perfil y recursos útiles. Optimizada
            para dispositivos móviles, la página garantiza una experiencia
            fluida y receptiva, permitiendo a los usuarios acceder desde
            cualquier lugar y en cualquier momento. Es una solución confiable y
            profesional para quienes buscan servicios legales y asesoramiento
            jurídico en el entorno digital actual.
          </p>
          <div className="flex justify-between mt-4">
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
              Ver repositorio GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;

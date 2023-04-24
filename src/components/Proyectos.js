import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
          pb-2
          px-2
        "
        data-aos="fade-up"
      >
        Proyectos
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          className="bg-slate-950 rounded-md shadow-md p-4"
          data-aos="fade-up"
        >
          <h2 className="text-2xl mb-4">Proyecto 1</h2>
          <p className="text-gray-400">Descripción del proyecto</p>
        </div>
        <div
          className="bg-slate-950 rounded-md shadow-md p-4"
          data-aos="fade-up"
        >
          <h2 className="text-2xl mb-4">Proyecto 2</h2>
          <p className="text-gray-400">Descripción del proyecto</p>
        </div>
        <div
          className="bg-slate-950 rounded-md shadow-md p-4"
          data-aos="fade-up"
        >
          <h2 className="text-2xl mb-4">Proyecto 3</h2>
          <p className="text-gray-400">Descripción del proyecto</p>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;

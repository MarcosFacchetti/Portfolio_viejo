import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Contacto() {
  return (
    <div
      className="    
  text-white
    h-screen
    py-10
    px-4 
    md:px-16 
    lg:px-24
    mt-20
    flex flex-col justify-center items-center text-xl space-y-5
    "
    >
      <h1 className="text-4xl font-bold mb-8 backdrop-blur-3xl px-2 pb-2">¡Contáctame!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-950 p-6 rounded-lg flex items-center">
          <AiOutlineMail className="text-3xl mr-4 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <a
              href="mailto:marcos-facchetti@hotmail.com"
              className="text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              marcos-facchetti@hotmail.com
            </a>
          </div>
        </div>

        <div className="bg-slate-950 p-6 rounded-lg flex items-center">
          <AiOutlinePhone className="text-3xl mr-4 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold mb-2">Teléfono</h2>
            <a
              href="tel:+543413025312"
              className="text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              +54 341 3025312
            </a>
          </div>
        </div>

        <div className="bg-slate-950 p-6 rounded-lg flex items-center">
          <AiOutlineGithub className="text-3xl mr-4 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold mb-2">GitHub</h2>
            <a
              href="https://github.com/MarcosFacchetti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              github.com/MarcosFacchetti
            </a>
          </div>
        </div>

        <div className="bg-slate-950 p-6 rounded-lg flex items-center">
          <AiOutlineLinkedin className="text-3xl mr-4 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold mb-2">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/marcos-facchetti-460030237/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300"
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

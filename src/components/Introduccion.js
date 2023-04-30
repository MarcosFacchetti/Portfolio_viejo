import React, { useState } from 'react';
import perfil from './perfil.jpg';
import resumePDF from "./MF.pdf";


function Introduccion() {
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
    "
    >
      <div>
        <img src={perfil} alt="Perfil" className="w-[300px]" />
      </div>

      <div className="pointer-events-none backdrop-blur-3xl pl-3">
        <a href="https://git.io/typing-svg">
          <img
            src="https://readme-typing-svg.demolab.com?font=Press+Start+2P&size=22&duration=2000&pause=1000&color=ffffff&vCenter=true&repeat=false&width=435&lines=Marcos+Facchetti"
            alt="Typing SVG"
          />
        </a>
      </div>

      <div className="pointer-events-none backdrop-blur-3xl pl-3 pr-3">
        <a href="https://git.io/typing-svg">
          <img
            src="https://readme-typing-svg.demolab.com?font=Press+Start+2P&pause=1000&color=ffffff&width=435&lines=Programador+Fullstack"
            alt="Typing SVG"
          />
        </a>
      </div>

      <div className="flex justify-center mt-8 ">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#061657] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          - Ver Curriculum 🎓 -
        </a>
      </div>
    </div>
  );
}

export default Introduccion;

import React from 'react';
import perfil from './perfil.jpg';
import resumePDF from "./MF.pdf";
import AnimatedArrow from './flecha';



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
      mt-10
    "
    >
      <div>
        <img src={perfil} alt="Perfil" className="w-[200px]" />
      </div>

      <div className="pointer-events-none backdrop-blur-3xl pl-3">
        <a href="https://git.io/typing-svg">
          <img
            src="https://readme-typing-svg.demolab.com?font=Press+Start+2P&duration=1000&pause=3000&color=F7F7F7&center=true&vCenter=true&repeat=false&width=435&lines=Marcos+Facchetti"
            alt="Typing SVG"
          />
        </a>
      </div>

      <div className="pointer-events-none backdrop-blur-3xl pl-3 pr-3">
        <a href="https://git.io/typing-svg">
          <img
            src="https://readme-typing-svg.demolab.com?font=Press+Start+2P&duration=1000&pause=3000&color=F7F7F7&center=true&vCenter=true&width=435&lines=Programador+Fullstack"
            alt="Typing SVG"
          />
        </a>
      </div>

      <div className="flex justify-center mt-8 animate-pulse ">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#061657] mb-2 hover:bg-blue-700 text-white font-Montserrat-LightItalic py-2 px-4 rounded"
        >
          - Toca este botón para ver Curriculum 🎓 -
        </a>
      </div>
      <div>
        <AnimatedArrow />
      </div>
    </div>
  );
}

export default Introduccion;

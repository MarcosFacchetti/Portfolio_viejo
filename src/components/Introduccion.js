import React, { useState } from 'react';
import perfil from './perfil.jpg';
import resumePDF from "./MF.pdf";


function Introduccion() {
  const [rotating, setRotating] = useState(false);

  const handleRotation = () => {
    setRotating(!rotating);
  }

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
    "
    >
      <div
        className="
        relative
        rounded-full
        overflow-hidden
        cursor-pointer
        transform 
        transition-all 
        duration-1000 
        ease-in-out 
        hover:backdrop-blur-md 
        active:rotate-360 
        active:duration-2000
      "
        onClick={handleRotation}
      >
          <img
            src={perfil}
            alt="Perfil"
            className={`w-2/3 h-auto object-cover mx-auto flex items-center ${rotating ? "active" : ""}`}
          />
          </div>

      <div className="pointer-events-none backdrop-blur-3xl pl-3">
        <a href="https://git.io/typing-svg">
          <img
            src="https://readme-typing-svg.demolab.com?font=Press+Start+2P&size=22&duration=2000&pause=1000&color=0E6EF7&vCenter=true&repeat=false&width=435&lines=Marcos+Facchetti"
            alt="Typing SVG"
          />
        </a>
      </div>

      <div className="pointer-events-none backdrop-blur-3xl pl-3 pr-3">
        <a href="https://git.io/typing-svg">
          <img
            src="https://readme-typing-svg.demolab.com?font=Press+Start+2P&size=17&duration=1500&pause=1000&color=2CF73E&width=435&lines=Programador+Frontend+.+.+.;Programador+Backend+.+.+."
            alt="Typing SVG"
          />
        </a>
      </div>

      <div className="flex justify-center mt-8 ">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          - Ver Curriculum 🎓 -
        </a>
      </div>
    </div>
  );
}

export default Introduccion;

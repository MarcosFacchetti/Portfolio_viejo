import React from 'react'
import {IoLogoHtml5, IoLogoJavascript, IoLogoCss3, IoLogoPython} from 'react-icons/io'
import {SiVisualstudio, SiPostgresql, SiTailwindcss} from 'react-icons/si'
import {FaBootstrap, FaReact} from 'react-icons/fa'
import {DiDjango} from 'react-icons/di'


function Habilidades() {
  return (
    <div
      className="
    text-white
      h-screen
      flex 
      flex-col 
      items-center 
      text-xl 
      space-y-5 
      justify-center 
    "
    >
      <p className="pb-10">Habilidades</p>
      <div className="grid grid-cols-2 gap-x-20 gap-y-5 pl-10 ">
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <IoLogoHtml5 size="5rem" />
          <p className="text-xs">HTML</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <IoLogoCss3 size="5rem" />
          <p className="text-xs">CSS</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <IoLogoJavascript size="5rem" />
          <p className="text-xs">JavaScript</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <IoLogoPython size="5rem" />
          <p className="text-xs">Python</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <SiVisualstudio size="5rem" />
          <p className="text-xs">VSCode</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <FaBootstrap size="5rem" />
          <p className="text-xs">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <DiDjango size="5rem" />
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <FaReact size="5rem" />
          <p className="text-xs">React</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <SiTailwindcss size="5rem" />
          <p className="text-xs">Tailwind</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <SiPostgresql size="5rem" />
          <p className="text-xs">Postgresql</p>
        </div>
      </div>
    </div>
  );
}

export default Habilidades
import React from 'react'
import {IoLogoHtml5, IoLogoJavascript, IoLogoCss3, IoLogoPython} from 'react-icons/io'
import {SiVisualstudio, SiPostgresql, SiTailwindcss} from 'react-icons/si'
import {FaBootstrap, FaReact} from 'react-icons/fa'
import {DiDjango} from 'react-icons/di'


function Habilidades() {
  return (
    <div className='
    text-white
      h-screen
      flex 
      flex-col 
      items-center 
      text-xl 
      space-y-5 
      justify-center 
    '>
        <p className='pb-10'>Habilidades</p>
        <div className='grid grid-cols-5 gap-4 place-content-evenly '>

        <div className='flex flex-col text-center'><IoLogoHtml5 size="5rem" /><p>HTML</p></div>
        <div className='flex flex-col text-center'><IoLogoCss3 size="5rem" /><p>CSS</p></div>
        <div className='flex flex-col text-center'><IoLogoJavascript size="5rem" /><p>JavaScript</p></div>
        <div className='flex flex-col text-center'><IoLogoPython size="5rem" /><p>Python</p></div>
        <div className='flex flex-col text-center'><SiVisualstudio size="5rem" /><p>VSCode</p></div>
        <div className='flex flex-col text-center'><FaBootstrap size="5rem" /><p>Bootstrap</p></div>
        <div className='flex flex-col text-center'><DiDjango size="5rem" /></div>
        <div className='flex flex-col text-center'><FaReact size="5rem" /><p>React</p></div>
        <div className='flex flex-col text-center'><SiTailwindcss size="5rem" /><p>Tailwind</p></div>
        <div className='flex flex-col text-center'><SiPostgresql size="5rem" /><p>Postgresql</p></div>


        </div>

    </div>
  )
}

export default Habilidades
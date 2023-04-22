import React from 'react'
import {IoLogoHtml5, IoLogoJavascript, IoLogoCss3, IoLogoPython} from 'react-icons/io'
import {SiVisualstudio, SiPostgresql} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
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
        <div className='grid grid-cols-2 gap-4 place-content-evenly'>

        <IoLogoHtml5 size="5rem" />
        <IoLogoCss3 size="5rem" />
        <IoLogoJavascript size="5rem" />
        <IoLogoPython size="5rem" />
        <SiVisualstudio size="5rem" />
        <FaBootstrap size="5rem" />
        <DiDjango size="5rem" />
        <SiPostgresql size="5rem" />


        </div>

    </div>
  )
}

export default Habilidades
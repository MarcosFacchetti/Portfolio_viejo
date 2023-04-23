import React from 'react'
import {AiOutlineMail, AiOutlinePhone, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'

function Contacto() {
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
      <p className='pb-10'>Contacto</p>

      <div>

      <div className='flex'>
      <AiOutlineMail/><p className="pb-5 ml-5"><a href="mailto:Marcos-facchetti@hotmail.com" className="text-blue-500 hover:text-blue-700">Marcos-facchetti@hotmail.com</a></p>
      </div>
      <div className='flex'>
      <AiOutlinePhone/><p className="pb-5 ml-5"><a href="tel:+543413025312" className="text-blue-500 hover:text-blue-700">+54 341 3025312</a></p>
      </div>

      <div className='flex'>
      <AiOutlineGithub/><p className="pb-5 ml-5"><a href="https://github.com/MarcosFacchetti" className="text-blue-500 hover:text-blue-700">GitHub</a></p>
      </div>
      <div className='flex'>
      <AiOutlineLinkedin/><p className="pb-5 ml-5"><a href="https://www.linkedin.com/in/marcos-facchetti-460030237/" className="text-blue-500 hover:text-blue-700">LinkedIn</a></p>
      </div>

      </div>
    </div>
  )
}

export default Contacto

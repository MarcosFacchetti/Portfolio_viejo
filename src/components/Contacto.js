import React from 'react'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'

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
      <div className='flex'>
      <AiOutlineMail/><p className="pb-5 ml-5">Email: <a href="mailto:Marcos-facchetti@hotmail.com" className="text-blue-500 hover:text-blue-700">Marcos-facchetti@hotmail.com</a></p>
      </div>
      <div className='flex'>
      <AiOutlinePhone/><p className="pb-5 ml-5">Phone: <a href="tel:+543413025312" className="text-blue-500 hover:text-blue-700">+54 341 3025312</a></p>
      </div>
    </div>
  )
}

export default Contacto
import React from 'react'
import {
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoPython,
} from "react-icons/io";
import { SiVisualstudio, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { DiDjango, DiNpm } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { motion } from "framer-motion";

function Habilidades() {
  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
        yoyo: 3,
      },
    },
  };

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
      "
    >
      <h1 className="text-3xl border-b-2 mb-4 select-none text-center text-white backdrop-blur-3xl px-2 py-1 mt-28 rounded-xl">
        Habilidades
      </h1>

      <div className="grid mx-auto grid-cols-2 gap-x-20 gap-y-5 pl-0 lg:pl-10  ">
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <motion.div variants={iconVariants} whileHover="hover">
            <IoLogoHtml5 size="5rem" />
          </motion.div>
          <p className="text-xs pointer-events-none select-none">HTML</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <motion.div variants={iconVariants} whileHover="hover">
            <IoLogoCss3 size="5rem" />
          </motion.div>
          <p className="text-xs pointer-events-none select-none">CSS</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <motion.div variants={iconVariants} whileHover="hover">
            <IoLogoJavascript size="5rem" />
          </motion.div>
          <p className="text-xs pointer-events-none select-none">JavaScript</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <motion.div variants={iconVariants} whileHover="hover">
            <IoLogoPython size="5rem" />
          </motion.div>
          <p className="text-xs pointer-events-none select-none">Python</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <motion.div variants={iconVariants} whileHover="hover">
            <SiVisualstudio size="5rem" />
          </motion.div>
          <p className="text-xs pointer-events-none select-none">VSCode</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <motion.div variants={iconVariants} whileHover="hover">
            <FaBootstrap size="5rem" />
          </motion.div>
          <p className="text-xs pointer-events-none select-none">Bootstrap</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="flex flex-col items-center text-center sm:w-1/2"
        >
          <DiDjango size="5rem" />
        </motion.div>

        <div className="flex flex-col items-center text-center sm:w-1/2">
          <FaReact
            size="5rem"
            className="transition duration-300 transform hover:-translate-y-1 hover:scale-110"
          />
          <p className="text-xs pointer-events-none select-none">React</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <BsGit
            size="5rem"
            className="transition duration-300 transform hover:-translate-y-1 hover:scale-110"
          />
          <p className="text-xs pointer-events-none select-none">Git</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <DiNpm
            size="5rem"
            className="transition duration-300 transform hover:-translate-y-1 hover:scale-110"
          />
          <p className="text-xs pointer-events-none select-none">npm</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <SiTailwindcss
            size="5rem"
            className="transition duration-300 transform hover:-translate-y-1 hover:scale-110"
          />
          <p className="text-xs pointer-events-none select-none">Tailwind</p>
        </div>
        <div className="flex flex-col items-center text-center sm:w-1/2">
          <SiPostgresql
            size="5rem"
            className="transition duration-300 transform hover:-translate-y-1 hover:scale-110"
          />
          <p className="text-xs pointer-events-none select-none">PostgreSQL</p>
        </div>
      </div>
    </div>
  );
}

export default Habilidades
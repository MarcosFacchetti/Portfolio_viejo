import React from 'react';
import { createElement } from 'react';
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
import TituloConBordeGradiente from "./titulo";
import "../index.css";


const iconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      yoyo: 3,
    },
  },
};

function renderIcon(icon, text) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        whileTap={{ scale: 0.8 }}
        className="transition duration-300 transform hover:-translate-y-1 hover:scale-110"
      >
        {createElement(icon, { size: "5rem", className: "icon-hover" })}
      </motion.div>
      <p className="text-base pointer-events-none select-none">{text}</p>
    </div>
  );
}

function Habilidades() {
  return (
    <div
      className="
        text-white
        min-h-screen
        flex 
        flex-col 
        items-center 
        text-2xl 
        space-y-5 
        justify-center 
      "
    >
        <div className="text-4xl font-bold mb-8 backdrop-blur-3xl px-2 mt-20 rounded-xl shadow-lg">
          <TituloConBordeGradiente titulo="Habilidades" />
        </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-20 gap-y-5 p-5 px-5 justify-center items-center cursor-pointer lg:gap-y-20">
        {renderIcon(IoLogoHtml5, "HTML")}
        {renderIcon(IoLogoCss3, "CSS")}
        {renderIcon(IoLogoJavascript, "JavaScript")}
        {renderIcon(IoLogoPython, "Python")}
        {renderIcon(SiVisualstudio, "VSCode")}
        {renderIcon(FaBootstrap, "Bootstrap")}
        {renderIcon(DiDjango, "Django")}
        {renderIcon(FaReact, "React")}
        {renderIcon(BsGit, "Git")}
        {renderIcon(DiNpm, "npm")}
        {renderIcon(SiTailwindcss, "Tailwind")}
        {renderIcon(SiPostgresql, "PostgreSQL")}
      </div>
    </div>
  );
}

export default Habilidades;

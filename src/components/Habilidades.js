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
    <div className="flex flex-col items-center text-center sm:w-1/2">
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        whileTap={{ scale: 0.8 }}
        className="transition duration-300 transform hover:-translate-y-1 hover:scale-110"
      >
        {createElement(icon, { size: "5rem" })}
      </motion.div>
      <p className="text-xs pointer-events-none select-none">{text}</p>
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
        text-xl 
        space-y-5 
        justify-center 
      "
    >
      <h1 className="text-3xl border-b-2 mb-4 select-none text-center text-white backdrop-blur-3xl px-2 py-1 mt-28 rounded-xl">
        Habilidades
      </h1>

      <div className="grid mx-auto grid-cols-2 gap-x-20 gap-y-5 pl-0 lg:pl-10">
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

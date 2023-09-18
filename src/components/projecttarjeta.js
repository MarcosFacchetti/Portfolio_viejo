import React from "react";

function ProjectCard({ imageSrc, title, description, websiteLink, githubLink, isDarkMode }) {
  return (
    <div
      className={`rounded-md shadow-md p-4 ${
        isDarkMode ? "bg-gray-500" : "bg-gray-600"
      }`}
    >
      <img src={imageSrc} alt={title} className="mb-4" />
      <h2 className={`text-2xl mb-4 text-center ${isDarkMode ? "text-white" : "text-white"}`}>
        {title}
      </h2>
      <p className={`${isDarkMode ? "text-white" : "text-white"}`}>{description}</p>
      <div className="flex justify-between mt-4">
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 ${
            isDarkMode ? "bg-gray-600 text-white" : "bg-gray-500 text-white"
          }`}
        >
          Ir a la página
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 ${
            isDarkMode ? "bg-gray-600 text-white" : "bg-gray-500 text-white"
          }`}
        >
          Ver repositorio Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

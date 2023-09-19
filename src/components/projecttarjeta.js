import React from "react";

function ProjectCard({ imageSrc, title, description, websiteLink, githubLink, isDarkMode }) {
  return (
    <div
      className={`bg-gray-800 p-6 rounded-lg shadow-lg ${
        isDarkMode ? "text-white" : "text-white"
      }`}
    >
      <div className="mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-sm  border-4 border-gray-600"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-lg mb-4 text-center">{description}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300`}
        >
          Ir a la página
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-600 text-white transition-colors duration-300`}
        >
          Ver repositorio Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;


import React from "react";
import "../index.css";

function TituloConBordeGradiente({ titulo }) {
  return (
    <h1 className="text-4xl text-center text-white mb-4 relative">
      <span className="inline-block px-2 py-1 rounded-full gradient-animation">
        {titulo}
      </span>
    </h1>
  );
}

export default TituloConBordeGradiente;

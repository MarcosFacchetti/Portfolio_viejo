import React, { useEffect, useState } from "react";
import Introduccion from "./components/Introduccion";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col font-Montserrat-LightItalic">
      <Navbar />
      <section
        id="introduccion"
        className={`section ${isLoaded ? "" : "opacity-0"}`}
      >
        <Introduccion />
      </section>
      <section
        id="habilidades"
        className={`section ${isLoaded ? "" : "opacity-0"}`}
      >
        <Habilidades />
      </section>
      <section
        id="proyectos"
        className={`section ${isLoaded ? "" : "opacity-0"}`}
      >
        <Proyectos />
      </section>
      <section
        id="contacto"
        className={`section ${isLoaded ? "" : "opacity-0"}`}
      >
        <Contacto />
      </section>
    </div>
  );
}

export default App;

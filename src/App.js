import React, { useEffect, useState } from "react";
import Introduccion from "./components/Introduccion";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos"



function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (

    <div style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1s" }} className="flex flex-col font-Montserrat-LightItalic">

      <Navbar />
      <section id="introduccion" className={isLoaded ? "section" : ""}>
        <Introduccion />
      </section>
      <section id="habilidades" className={isLoaded ? "section" : ""}>
        <Habilidades />
      </section>
      <section id="proyectos" className={isLoaded ? "section" : ""}>
        <Proyectos />
      </section>
      <section id="contacto" className={isLoaded ? "section" : ""}>
        <Contacto />
      </section>

    </div>
  );
}

export default App;

import React from "react";
import Introduccion from "./components/Introduccion";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <section id="introduccion">
        <Introduccion />
      </section>
      <section id="habilidades">
        <Habilidades />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
}

export default App;

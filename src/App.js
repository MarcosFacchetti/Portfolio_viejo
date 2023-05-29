import React from 'react';
import { DarkModeProvider, DarkModeContext } from './components/DarkModeContext';
import Introduccion from "./components/Introduccion";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <DarkModeProvider>
      <DarkModeContext.Consumer>
        {({ isDarkMode }) => (
          <div className={`flex flex-col font-Montserrat-LightItalic ${isDarkMode ? 'bg-gray-400' : 'bg-gray-700'}`}>
            <Navbar />
            <section id="introduccion">
              <Introduccion />
            </section>
            <section id="habilidades">
              <Habilidades />
            </section>
            <section id="proyectos">
              <Proyectos />
            </section>
            <section id="contacto">
              <Contacto />
            </section>
          </div>
        )}
      </DarkModeContext.Consumer>
    </DarkModeProvider>
  );
}

export default App;

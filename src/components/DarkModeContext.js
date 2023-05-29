import React, { createContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Aquí puedes agregar lógica adicional para cambiar el tema de tu aplicación
    // por ejemplo, cambiando las clases CSS en el elemento raíz de tu aplicación
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };

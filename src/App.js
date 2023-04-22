import Introduccion from "./components/Introduccion";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";

function App() {
  return (
    <div className="flex flex-col">
      <section>
        <Introduccion />
      </section>
      <section>
        <Habilidades />
      </section>
      <section>
        <Contacto />
      </section>
    </div>
  );
}

export default App;

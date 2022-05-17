import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import FormularioContextProvider from './context/contextoFormulario';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/formularioEntrada" element={<FormularioContextProvider><Formulario /></FormularioContextProvider>} />
      </Routes>
    </div>
  );
}

export default App;

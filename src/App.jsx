import { Routes, Route } from "react-router-dom";
import FormularioContextProvider from "./context/contextoFormulario";
import { QueryClient, QueryClientProvider } from "react-query";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/formularioEntrada"
          element={
            <QueryClientProvider client={queryClient}>
              <FormularioContextProvider>
                <Formulario />
              </FormularioContextProvider>
            </QueryClientProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

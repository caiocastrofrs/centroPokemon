// Aqui devemos criar nosso contexto e nosso provider.
import { createContext, useState } from "react";

export const FormularioContext = createContext();

const FormularioContextProvider = ({ children }) => {
  const [ocorrencia, setOcorrencia] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    nomePokemon: "",
  });

  const addOcorrencia = (chaveObj, valorObj) => {
    setOcorrencia(prevState => {
      return { ...prevState, [chaveObj]: valorObj };
    });
  };

  return (
    <FormularioContext.Provider value={{ ocorrencia, addOcorrencia }}>
      {children}
    </FormularioContext.Provider>
  );
};

export default FormularioContextProvider;

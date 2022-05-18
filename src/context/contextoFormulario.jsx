// Aqui devemos criar nosso contexto e nosso provider.
import { createContext, useReducer } from "react";

export const FormularioContext = createContext();

const initialState = {
  treinador: {
    nome: "",
    sobrenome: "",
    email: "",
  },
  pokemon: {
    nomePokemon: "",
    tipoPokemon: "",
    elementoPokemon: "",
    alturaPokemon: 0,
    idadePokemon: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ATUALIZAR_TREINADOR":
      return {
        ...state,
        treinador: {
          ...state.treinador,
          [action.payload.key]: action.payload.value,
        },
      };
    case "ATUALIZAR_POKEMON":
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
const FormularioContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleReducer = (type, values) => {
    dispatch({type: type, payload: values});
  }

  return (
    <FormularioContext.Provider value={{ state, handleReducer }}>
      {children}
    </FormularioContext.Provider>
  );
};

export default FormularioContextProvider;

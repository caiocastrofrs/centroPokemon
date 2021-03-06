// Aqui devemos criar nosso contexto e nosso provider.
import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';
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
  /**
   * Aqui é o nosso reducer que executará a ação que está determinada no action.payload. 
   * No action existirá duas ações: ATUALIZAR_TREINADOR e ATUALIZAR_POKEMON, 
   * que servem para atualizar os dados desses objetos no contexto.
   * @author Caio Castro
   * @param {Array} state
   * @param {Object} action
   * 
   */

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
  /**
   * Este é o nosso provedor do contexto e fornecerá aos componentes filhos o estado do reducer e o dispatch. 
   * @author Caio Castro
   * @param {JSX.Element} children
   * 
   */
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

FormularioContextProvider.propTypes = {
  children: PropTypes.object,
}

export default FormularioContextProvider;

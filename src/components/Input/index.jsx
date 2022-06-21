import React, { useContext, useState, useRef, useEffect } from "react";
import { FormularioContext } from '../../context/contextoFormulario';
import PropTypes from 'prop-types';

/**
 * Objeto com os campos que o input precisa.
 * @author Caio Castro
 * @param {{
 *    name: string,
 *    label: string,
 *    type:  string
 * }}
 */
const Input = ({ name, label, type = "text" }) => {
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.
  const context = useContext(FormularioContext);
  const { handleReducer } = context;
  const inputRef = useRef(null);

  const borderColorOnLoadScreen = () => {
    inputRef.current.style.borderColor = 'red';
  }

  useEffect(borderColorOnLoadScreen);

  // Além disso, usaremos um estado local para lidar com o estado da input.
  const [valorCampo, setValorCampo] = useState("");

  /**
   * Aqui devemos atualizar o estado local do input.
   * @author Caio Castro
   * @param {Event} e 
   * 
   */

  const onInputChange = (e) => {
    setValorCampo(e.target.value);
  };

    /**
   * Aqui devemos atualizar o contexto usando o valor do estado do input.
   * @author Caio Castro
   * @param {Event} e
   * 
   */
  const onBlur = (e) => {
    e.preventDefault();
    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }
    if(name[name.length-1] === 'n') {
      handleReducer('ATUALIZAR_POKEMON',{key: name, value: valorCampo});
    } else {
      handleReducer('ATUALIZAR_TREINADOR', {key: name, value: valorCampo});
    }
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={name}
        onChange={onInputChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}.isRequired;

export default Input;

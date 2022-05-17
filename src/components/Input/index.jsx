import React, { useContext, useState } from "react";
import { FormularioContext } from '../../context/contextoFormulario';

const Input = ({ name, label, type = "text" }) => {
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.
  const context = useContext(FormularioContext);
  const { addOcorrencia } = context;

  // Além disso, usaremos um estado local para lidar com o estado da input.
  const [valorCampo, setValorCampo] = useState("");

  const onChange = (e) => {
    // Aqui devemos atualizar o estado local do input
    setValorCampo(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();
    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }
    addOcorrencia(name, valorCampo);
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={valorCampo}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;

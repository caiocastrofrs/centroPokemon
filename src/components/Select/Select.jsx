import '../../App.css'
import React, { useContext, useState, useEffect } from "react";
import { FormularioContext } from '../../context/contextoFormulario';
const Select = ({isLoading, data, isDisabled}) => {

    const context = useContext(FormularioContext);
    const { handleReducer } = context;
    const [tipoSelecionado, setTipoSelecionado] = useState();

    const handlerOnChange = (e) => {
        e.preventDefault();
        setTipoSelecionado(e.target.value);
      };
    
    
    useEffect(() => {
        handleReducer('ATUALIZAR_POKEMON',{key: 'tipoPokemon', value: tipoSelecionado});
    },[tipoSelecionado]);
    
    return(
        <div className="input-receptor">
            <label htmlFor={"type"}>Tipo</label>
            <select onChange={handlerOnChange} htmlFor={"type"}  {...isDisabled && "disabled"}>
                <option value="Selecione um tipo">{isLoading ? "Carregando...": "Selecione um tipo"}</option>
                {data && data.map((tipo, i) => <option key={i}>{tipo.name}</option>)}
            </select>
        </div>
    );
}

export default Select;
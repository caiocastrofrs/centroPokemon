import React, { useContext } from "react";
import { FormularioContext } from '../../context/contextoFormulario';


const Detalhe = () => {
  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const context = useContext(FormularioContext);
  const { ocorrencia } = context;
  const { nome, sobrenome, email, nomePokemon } = ocorrencia;

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome:{nome}</p>
          <p>Sobrenome:{sobrenome}</p>
          <p>Email:{email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome:{nomePokemon}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;

import React, { useContext } from "react";
import { FormularioContext } from '../../context/contextoFormulario';
import { useMutation } from 'react-query';

const Detalhe = () => {
  /* **/
  // Aqui devemos pegar os dados do formulário para podermos mostrá-lo em a visualização.
  const context = useContext(FormularioContext);
  const { state } = context;
  const { nome, sobrenome, email } = state.treinador;
  const { nomePokemon, tipoPokemon, elementoPokemon, alturaPokemon, idadePokemon } = state.pokemon;

  const sendDataToApi = (data) => {
    if(!data[1].nome) return;

    return fetch(`http://localhost:3005/${data[0]}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data[1])
    })
  }

  const mutation = useMutation(sendDataToApi);

  const apiHandler = () => {
    mutation.mutate(['treinadores',{
      "nome": nome,
      "sobrenome": sobrenome,
      "email": email
    }]);
    mutation.mutate(['pokemons',{
      "nome": nomePokemon,
      "tipo": tipoPokemon,
      "elemento": elementoPokemon,
      "altura": alturaPokemon,
      "idade": idadePokemon
    }]);
    
}

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
          <p>Tipo:{tipoPokemon}</p>
          <p>Elemento:{elementoPokemon}</p>
          <p>Altura:{alturaPokemon}</p>
          <p>Idade:{idadePokemon}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={apiHandler}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;

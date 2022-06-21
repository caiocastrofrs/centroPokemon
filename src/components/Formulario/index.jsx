import React, { useState } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import treinador from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";
import Select from '../Select/Select';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useQuery } from "react-query";

// Neste componente temos nosso formulário e dentro dele
// temos os componentes que precisam consumir nosso estado.
// Lembre-se qual é o passo que devemos dar para que nosso
// componentes podem consumir um estado global.

const Formulario = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const getTypes = async () => {
    const types = await fetch("https://pokeapi.co/api/v2/type/")
    .then((res) => res.json())
    .catch((e) => "error");
    return types;
  }



  const queryTypes = useQuery("getTypes", getTypes);



  const {isLoadingType, errorType, dataType} = queryTypes;

  const modalHandler = () => {
    setModalStatus(prevState => !prevState);
  }

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        {modalStatus && 
        <Modal />}
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
          {/*
           Se ao menos tivéssemos uma maneira de "encapsular" nossos componentes
           para que possam acessar o estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nome-secao">
                <img src={treinador} alt="treinador" />
                <span>Treinador</span>
              </p>
              <Input name="nome" label="Nome" />
              <Input name="sobrenome" label="Sobrenome" />
              <Input name="email" label="Email" type="email" />
            </div>
            <div>
              <p className="nome-secao">
                <img src={pikachu} alt="pikachu" />
                <span>Pokémon</span>
              </p>
              <Button text="Selecionar" onClickFn={modalHandler} />
              <Input name="nomePokemon" label="Nome" />
              <Select isLoading={isLoadingType} isDisabled={errorType && true} data={dataType?.results}/>
              <Input name="elementoPokemon" label="Elemento" />
              <Input name="alturaPokemon" label="Altura" />
              <Input name="idadePokemon" label="Idade" />
            </div>
          </div>
          <Detalhe />
        </div>
      </div>
    </>
  );
};

export default Formulario;

import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";

const Inicio = () => {
  return (
    <header className="App-header">
      <img className="App-logo" alt="logo" src={pokebola} />
      <h1>Centro Pokémon de Ash</h1>
      <Link to="/formularioEntrada" className="botao-entrada">
        Digite o Pokémon
      </Link>
    </header>
  );
};

export default Inicio;

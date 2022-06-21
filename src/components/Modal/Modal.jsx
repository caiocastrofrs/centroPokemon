import React, { useState } from "react";
import { useQuery } from "react-query";
import Button from "../Button/Button";

const Modal = () => {
  let [page, setPage] = useState(0);

  const getPokemons = async (page) => {
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${page}&limit=10`)
    .then((res) => res.json())
    .catch((e) => "error");
    return pokemons;
  }

  let queryPokemons = useQuery(["POKEMONS", page], () => getPokemons(page));

  const { data } = queryPokemons;

  let handleDecrementPage = () => setPage(prevState => Math.max(0, prevState - 1));
  let handleIncrementPage = () => setPage(prevState => Math.min(data.count,prevState + 1));

  return (
    <div className="pokemons">
      <p>Lista de Pokémon</p>
      <div>
        {data?.results
          ? data?.results.map((pokemon, index) => {
              return <div key={index}>{pokemon.name}</div>;
            })
          : "Nenhum pokémon encontrado."}
      </div>
      <div className="div-botoes">
        <Button text="Anterior" onClickFn={handleDecrementPage} />
        <Button text="Próximo" onClickFn={handleIncrementPage} />
      </div>
    </div>
  );
};

export default Modal;

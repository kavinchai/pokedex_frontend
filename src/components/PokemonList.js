import React, { useEffect, useState } from "react";
import "../css/PokemonList.css";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="pokemonList">
      <ul className="pokemons">
        {Object.keys(pokemonList).map((key) => (
          <Pokemon key={key} index={key} details={pokemonList[key]} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

import React, { useEffect, useState } from "react";
import "../css/PokemonList.css";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonList, searchInput, filteredResults }) => {
  return (
    <div className="pokemonList">
      <ul className="pokemons">
        {searchInput.length > 0
          ? Object.keys(filteredResults).map((key) => (
              <Pokemon key={key} index={key} details={filteredResults[key]} />
            ))
          : Object.keys(pokemonList).map((key) => (
              <Pokemon key={key} index={key} details={pokemonList[key]} />
            ))}
      </ul>
    </div>
  );
};

export default PokemonList;

// If searchword = '' ? object.keys blablabla : pokeList.filter
// if searchWord.length > 1

import React, { useEffect, useState } from "react";
import "../css/PokemonList.css";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonList, searchInput, filteredResults }) => {
  return (
    <div className="pokemonListContainer">
      <div className="pokemonData">
        {searchInput.length > 0
          ? Object.keys(filteredResults).map((key) => (
              <Pokemon key={key} index={key} details={filteredResults[key]} />
            ))
          : Object.keys(pokemonList).map((key) => (
              <Pokemon key={key} index={key} details={pokemonList[key]} />
            ))}
      </div>
    </div>
  );
};

export default PokemonList;

import React from "react";
import PokemonCard from "./PokemonCard";
import "../css/PokemonList.css";

const PokemonList = ({
  setPokePage,
  pokemonList,
  searchInput,
  filteredResults,
}) => {
  return (
    <div className="pokemonListContainer">
      <div className="pokemonData">
        {searchInput.length > 0
          ? Object.keys(filteredResults).map((key) => (
              <PokemonCard
                key={key}
                index={key}
                setPokePage={setPokePage}
                details={filteredResults[key]}
              />
            ))
          : Object.keys(pokemonList).map((key) => (
              <PokemonCard
                key={key}
                index={key}
                setPokePage={setPokePage}
                details={pokemonList[key]}
              />
            ))}
      </div>
    </div>
  );
};

export default PokemonList;

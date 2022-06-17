import React from "react";
import PokemonCard from "./PokemonCard";
import "../css/PokemonList.css";

const PokemonList = ({ pokemonList, searchInput, filteredResults }) => {
  return (
    <div className="pokemonListContainer">
      <div className="pokemonData">
        {searchInput.length > 0
          ? filteredResults.map((key, index) => (
              <PokemonCard key={index} identity={index} details={key} />
            ))
          : pokemonList.map((key, index) => (
              <PokemonCard key={index} identity={index} details={key} />
            ))}
      </div>
    </div>
  );
};

export default PokemonList;

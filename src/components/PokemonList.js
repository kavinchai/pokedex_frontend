import React from "react";
import PokemonCard from "./PokemonCard";
import "../css/PokemonList.css";

const PokemonList = ({
  pokemonPage,
  pokemonList,
  searchInput,
  filteredResults,
  filteredSearchPage,
}) => {
  return (
    <div className="pokemonListContainer">
      <div className="pokemonData">
        {searchInput.length > 0
          ? filteredResults.map((details, index) => (
              <PokemonCard
                key={`${filteredSearchPage} ${index}`}
                identity={index}
                details={details}
              />
            ))
          : pokemonList.map((details, index) => (
              <PokemonCard
                key={`${pokemonPage} ${index}`}
                identity={index}
                details={details}
              />
            ))}
      </div>
    </div>
  );
};

export default PokemonList;

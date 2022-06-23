import React from "react";
import PokemonCard from "./PokemonCard";
import "../css/PokemonList.css";

const PokemonList = ({
  filteredSearchPage,
  pokemonPage,
  pokemonList,
  searchInput,
  filteredResults,
}) => {
  //Good job using the object destructuring here!
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
              //I've mentioned this in a couple other places too, but we shouldn't be managing two different sets 
              //of pokemon here. This component shouldn't care about whether or not the list is filtered, it should simply
              //take a list of Pokemon and map over them all and display them. 

              //In your App componenet there should be a single pokemonList variable that hold the list of pokemon, then
              //you can update it with the API response whether or not its filtered
            ))}
            
      </div>
    </div>
  );
};

export default PokemonList;

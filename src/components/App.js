import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import "../css/MainScreen.css";

function App() {
  const [pokemonPage, setPokemonPage] = useState(1);

  const getPokemonFromApi = async (pokemonPage) => {
    fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${pokemonPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.data);
      });
  };

  const [pokemonList, setPokemonList] = useState(
    getPokemonFromApi(pokemonPage)
  );

  return (
    <div className="mainContainer">
      <SearchBar
        pokemonPage={pokemonPage}
        setPokemonPage={setPokemonPage}
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
      />
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import "../css/MainScreen.css";

function App() {
  const [pokemonPage, setPokemonPage] = useState(1);

  const getPokemonFromApi = async () => {
    const response = await fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${pokemonPage}`
    );
    const json = await response.json();
    console.log(json.data);
    setPokemonList(json.data);
  };

  const [pokemonList, setPokemonList] = useState(() => getPokemonFromApi());

  useEffect(() => {
    getPokemonFromApi();
  }, [pokemonPage]);

  return (
    <div className="mainContainer">
      <SearchBar pokemonPage={pokemonPage} setPokemonPage={setPokemonPage} />
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

export default App;

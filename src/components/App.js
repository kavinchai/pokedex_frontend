import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import "../css/MainScreen.css";

function App() {
  const [pokemonPage, setPokemonPage] = useState(1);

  //   const loadPokemon = (e) => {
  //     // this.setState({ pokemonPage: 1 });
  //     setPokemonPage(e);
  //   };

  const getPokemonFromApi = async () => {
    const api_call = await fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${pokemonPage}`
    );
    const data = await api_call.json();
    console.log(data);
  };

  return (
    <div className="mainContainer">
      <SearchBar getPokemonFromApi={getPokemonFromApi} />
      <PokemonList />
    </div>
  );
}

export default App;

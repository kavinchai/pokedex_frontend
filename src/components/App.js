import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import "../css/MainScreen.css";

function App() {
  const [pokePage, setPokePage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const getPokemonFromApi = async () => {
    const response = await fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${pokePage}`
    );
    const json = await response.json();
    console.log(json.data);
    setPokemonList(json.data);
  };

  const [pokemonList, setPokemonList] = useState(() => getPokemonFromApi());

  useEffect(() => {
    getPokemonFromApi();
  }, [pokePage]);

  return (
    <div className="mainContainer">
      <SearchBar
        pokePage={pokePage}
        setPokePage={setPokePage}
        pokemonList={pokemonList}
        setFilteredResults={setFilteredResults}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <PokemonList
        pokemonList={pokemonList}
        searchInput={searchInput}
        filteredResults={filteredResults}
      />
    </div>
  );
}

export default App;

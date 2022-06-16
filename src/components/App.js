import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import LoadingPage from "./LoadingPage";
import "../css/MainScreen.css";
import "typeface-roboto";

function App() {
  const [pokePage, setPokePage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const getPokemonFromApi = async () => {
    const response = await fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${pokePage}`
    );
    const json = await response.json();
    return json.data;
  };

  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    getPokemonFromApi().then((res) => {
      setPokemonList(res);
    });
    // eslint-disable-next-line
  }, [pokePage]);

  return (
    <div className="mainContainer">
      {pokemonList === null ? (
        <LoadingPage />
      ) : (
        <div className="appContainer">
          <SearchBar
            pokePage={pokePage}
            setPokePage={setPokePage}
            setFilteredResults={setFilteredResults}
            setSearchInput={setSearchInput}
          />
          <PokemonList
            pokePage={pokePage}
            pokemonList={pokemonList}
            searchInput={searchInput}
            filteredResults={filteredResults}
          />
        </div>
      )}
    </div>
  );
}

export default App;

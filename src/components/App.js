import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import LoadingPage from "./LoadingPage";

import "typeface-roboto";
import "../css/MainScreen.css";

function App() {
  const { pokemonPage } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [pokemonList, setPokemonList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredSearchPage, setFilteredSearchPage] = useState(1);
  const [filteredMaxPage, setFilteredMaxPage] = useState();

  useEffect(() => {
    fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${pokemonPage}`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setPokemonList(data);
      });
    // eslint-disable-next-line
  }, [pokemonPage]);

  return (
    <div className="mainContainer">
      {pokemonList === null ? (
        <LoadingPage />
      ) : (
        <div className="appContainer">
          <SearchBar
            searchInput={searchInput}
            filteredMaxPage={filteredMaxPage}
            filteredSearchPage={filteredSearchPage}
            setSearchInput={setSearchInput}
            setFilteredMaxPage={setFilteredMaxPage}
            setFilteredResults={setFilteredResults}
            setFilteredSearchPage={setFilteredSearchPage}
          />
          <PokemonList
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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../helpers";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import LoadingPage from "./LoadingPage";

import "typeface-roboto";
import "../css/MainScreen.css";

const App = () => {
  const { pokemonPage } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [pokemonList, setPokemonList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredSearchPage, setFilteredSearchPage] = useState(1);
  const [maxPage, setMaxPage] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${URL}?page=${pokemonPage}`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then(({ data, meta }) => {
        setPokemonList(data);
        setMaxPage(meta.last_page);
      });
    return function cancel() {
      abortController.abort();
    };
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
            maxPage={maxPage}
            filteredSearchPage={filteredSearchPage}
            setSearchInput={setSearchInput}
            setMaxPage={setMaxPage}
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
};

export default App;

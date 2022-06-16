import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import LoadingPage from "./LoadingPage";
import { getPokemonFromApi } from "../helpers";
import "typeface-roboto";
import "../css/MainScreen.css";

function App() {
  const { pokemonPage } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [pokemonList, setPokemonList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    getPokemonFromApi(pokemonPage).then((res) => {
      setPokemonList(res);
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
            setPokemonList={setPokemonList}
            setFilteredResults={setFilteredResults}
            setSearchInput={setSearchInput}
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

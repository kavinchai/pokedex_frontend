import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { URL } from "../helpers";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import LoadingPage from "./LoadingPage";

import "typeface-roboto";
import "../css/MainScreen.css";

const App = () => {
  const navigate = useNavigate();
  const { pokemonPage } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [pokemonList, setPokemonList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredSearchPage, setFilteredSearchPage] = useState(1);
  const [maxPage, setMaxPage] = useState();

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      // Left arrow
      if (searchInput.length > 0) {
        if (filteredSearchPage === 1) {
          setFilteredSearchPage(1);
        } else {
          setFilteredSearchPage(filteredSearchPage - 1);
        }
      } else {
        if (parseInt(pokemonPage) === 1) {
          navigate("/page/1");
        } else {
          navigate(`/page/${parseInt(pokemonPage) - 1}`);
        }
      }
    }
    if (e.keyCode === 39) {
      // Right arrow
      if (searchInput.length > 0) {
        if (filteredSearchPage + 1 < maxPage) {
          setFilteredSearchPage(filteredSearchPage + 1);
        } else {
          setFilteredSearchPage(maxPage);
        }
      } else {
        if (parseInt(pokemonPage) + 1 < maxPage) {
          navigate(`/page/${parseInt(pokemonPage) + 1}`);
        } else {
          navigate(`/page/${maxPage}`);
        }
      }
    }
  };

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
        <div className="appContainer" onKeyDown={handleKeyDown}>
          <SearchBar
            maxPage={maxPage}
            searchInput={searchInput}
            filteredSearchPage={filteredSearchPage}
            setMaxPage={setMaxPage}
            setSearchInput={setSearchInput}
            setFilteredResults={setFilteredResults}
            setFilteredSearchPage={setFilteredSearchPage}
          />
          <PokemonList
            pokemonPage={pokemonPage}
            pokemonList={pokemonList}
            searchInput={searchInput}
            filteredResults={filteredResults}
            filteredSearchPage={filteredSearchPage}
          />
        </div>
      )}
    </div>
  );
};

export default App;

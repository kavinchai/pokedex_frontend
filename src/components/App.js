import React, { useMemo, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
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
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filteredSearchPage, setFilteredSearchPage] = useState(1);
  const [lastPage, setLastPage] = useState();

  const searchItems = (searchValue, filteredSearchPage) => {
    setSearchInput(searchValue);
    fetch(`${URL}?name=${searchValue}&page=${filteredSearchPage}`)
      .then((res) => res.json())
      .then(({ data, meta }) => {
        setFilteredResults(data);
        setLastPage(meta.last_page);
      });
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${URL}?page=${pokemonPage}`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then(({ data, meta }) => {
        setPokemonList(data);
        setLastPage(meta.last_page);
      });
    return function cancel() {
      abortController.abort();
    };
    // eslint-disable-next-line
  }, [pokemonPage]);

  useEffect(() => {
    if (filteredSearchPage === 1 && searchInput.length === 0) {
      return () => {
        debouncedSearch.cancel();
      };
    } else {
      searchItems(searchInput, filteredSearchPage);
    }

    // eslint-disable-next-line
  }, [filteredSearchPage]);

  const debouncedSearch = useMemo(() => {
    return debounce((e) => {
      searchItems(e.target.value, filteredSearchPage);
    }, 300);
    // eslint-disable-next-line
  }, []);

  const leftPageBtnFunc = () => {
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
  };

  const rightPageBtnFunc = () => {
    if (searchInput.length > 0) {
      if (filteredSearchPage + 1 < lastPage) {
        setFilteredSearchPage(filteredSearchPage + 1);
      } else {
        setFilteredSearchPage(lastPage);
      }
    } else {
      if (parseInt(pokemonPage) + 1 < lastPage) {
        navigate(`/page/${parseInt(pokemonPage) + 1}`);
      } else {
        navigate(`/page/${lastPage}`);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      // Left arrow
      leftPageBtnFunc();
    }
    if (e.keyCode === 39) {
      // Right arrow
      rightPageBtnFunc();
    }
  };

  return (
    <div className="mainContainer">
      {pokemonList ? (
        <div className="appContainer" onKeyDown={handleKeyDown}>
          <SearchBar
            lastPage={lastPage}
            searchInput={searchInput}
            filteredSearchPage={filteredSearchPage}
            searchItems={searchItems}
            leftPageBtnFunc={leftPageBtnFunc}
            rightPageBtnFunc={rightPageBtnFunc}
            debouncedSearch={debouncedSearch}
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
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default App;

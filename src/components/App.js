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
  //Pokemon list is later set to using an array, so rather than null here we can instantiate 
  //pokemon list with an empty arrary, just like filteredResults below
  const [filteredResults, setFilteredResults] = useState([]);
  //Filtered results and pokemon list should not be two separate state variables. Both are a list of pokemon
  //that is returned from the exact same endpoint. The pokemon list shouldn't care that the list is filtered or not
  //all it should care about is that it takes a list of pokemon and displays it.
  //Keeping two separate lists like this also is harder to manage since you have to keep two things in sync
  //and is more challenging to understand what's going on in the app
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
  //Nice work adding the arrow functionality! This is a nice addition for the user and probably
  //made is so much easier for you to navigate around as you were building it.
  //These conditional blocks are a bit challenging to read though and are very similar to 
  //the code used over in SearchBar.js Ideally there could be two functions here, one called 'nextPage'
  //and one for 'lastPage'

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`${URL}?page=${pokemonPage}`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then(({ data, meta }) => {
        setPokemonList(data);
        setMaxPage(meta.last_page);
        //This would be much better called lastPage instead of maxPage so it matches the API
        //that way if you are ever having conversations with the backend dev team and they are
        //discussing the app, you are using the same language around the application. As a general rule
        //you always want to keep the variable the same in cases like this
      });
    return function cancel() {
      abortController.abort();
    };
    //Nice work using the return function on a useEffect, just like you did here this is a great place 
    //to clean up pending requests or events that are still triggering

    // eslint-disable-next-line
  }, [pokemonPage]);

  return (
    <div className="mainContainer">
      {pokemonList === null ? (
        <LoadingPage />
      ) : (
        <div className="appContainer" onKeyDown={handleKeyDown}>
          <SearchBar
            searchInput={searchInput}
            maxPage={maxPage}
            filteredSearchPage={filteredSearchPage}
            setSearchInput={setSearchInput}
            setMaxPage={setMaxPage}
            setFilteredResults={setFilteredResults}
            setFilteredSearchPage={setFilteredSearchPage}
            //I expand on this more in the search bar component, but the search bar element shouldn't know
            //about the API layer and many of these props can be removed
          />
          <PokemonList
            pokemonPage={pokemonPage}
            filteredSearchPage={filteredSearchPage}
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

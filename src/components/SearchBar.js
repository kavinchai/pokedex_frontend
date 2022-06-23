import React, { useMemo, useEffect } from "react";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { URL } from "../helpers";
import "../css/SearchBar.css";
import "../fonts/PokemonSolid.ttf";

const SearchBar = ({
  searchInput,
  maxPage,
  filteredSearchPage,
  setSearchInput,
  setMaxPage,
  setFilteredResults,
  setFilteredSearchPage,
}) => {

  //There are a few things that could be improved upon in this file. 
  //The main point being that we should restrict the concerns of this component
  //Ideally this component would be a search bar with two buttons on either side 
  //of it and nothing else. Rather than pass through all seven props above we could 
  //just pass through the bits this component needs to know about. 

  //To put it a different way, this component shouldn't care about how it fetches data 
  //or navigates from page to page, instead we can just pass it a function for how it should 
  //respond when the user clicks on the button. This allows us to segment all of this API logic 
  //into the App component. It's generally a good rule of thumb to keep all of the logic 
  //around fetching data in a singlular spot so it's easier to reason about without 
  //switching between files like we have to in this case.


  const navigate = useNavigate();
  const { pokemonPage } = useParams();
  const searchItems = (searchValue, filteredSearchPage) => {
    setSearchInput(searchValue);
    fetch(`${URL}?name=${searchValue}&page=${filteredSearchPage}`)
      .then((res) => res.json())
      .then(({ data, meta }) => {
        setFilteredResults(data);
        setMaxPage(meta.last_page);
      });
      //Again, I think all of this information could live in App.js
      //since both locations are hitting the same URL it would be better to keep
      //all of this logic consolidated in the same location
  };

  const debouncedSearch = useMemo(() => {
    return debounce((e) => {
      searchItems(e.target.value, filteredSearchPage);
    }, 300);
    // eslint-disable-next-line
  }, []);

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

  return (
    <div className="pokemon-selector">
      <button
        className="navButtonFirst navButton"
        type="submit"
        onClick={() => {
          searchInput.length > 0
            ? setFilteredSearchPage(1)
            : navigate("/page/1");
        }}
      >
        <MdFirstPage style={{ color: "#FDF4FF", fontSize: "20px" }} />
      </button>
      <button
        className="navButtonLeft navButton"
        type="submit"
        onClick={() => {
          searchInput.length > 0
            ? filteredSearchPage === 1
              ? setFilteredSearchPage(1)
              : setFilteredSearchPage(filteredSearchPage - 1)
            : parseInt(pokemonPage) === 1
            ? navigate("/page/1")
            : navigate(`/page/${parseInt(pokemonPage) - 1}`);
            //This chunk with nested terneries is really challenging to read. 
            //Like I mentioned in above comments I think this logic could live on the parent
            //and be refactored into a way that's a bit more readable 
        }}
      >
        <FaArrowLeft style={{ color: "#FDF4FF" }} />
      </button>
      <a className="pokedex" href="/">
        Pokedéx
      </a>
      <div className="pokemon-searchBarContainer">
        {/*
        //This uses a mixture of css class structures between dashes and camel casing, 
        //it's a good rule of thumb to keep these consistent
        */}
        <button type="submit" className="searchButton">
          <FaSearch className="searchIcon" />
        </button>
        <input
          className="pokemon-searchBar"
          type="text"
          onChange={debouncedSearch}
          placeholder="Search"
        />
      </div>
      <button
        className="navButtonRight navButton"
        type="submit"
        onClick={() => {
          searchInput.length > 0
            ? filteredSearchPage + 1 < maxPage
              ? setFilteredSearchPage(filteredSearchPage + 1)
              : setFilteredSearchPage(maxPage)
            : parseInt(pokemonPage) + 1 < maxPage
            ? navigate(`/page/${parseInt(pokemonPage) + 1}`)
            : navigate(`/page/${maxPage}`);
        }}
        //Just like my previous comment, components like this one should know about the bare minimum
        //amount of information to be functional. This onClick handler could take a singular function "lastPage"
        //or something similar that way it doesn't have to know about what page the user is on
      >
        <FaArrowRight style={{ color: "#FDF4FF" }} />
      </button>
      <button
        className="navButtonLast navButton"
        type="submit"
        onClick={() => {
          searchInput.length > 0
            ? setFilteredSearchPage(maxPage)
            : navigate(`/page/${maxPage}`);
        }}
        //Just like the other examples I would prefer to see this on the parent component
      >
        <MdLastPage style={{ color: "#FDF4FF", fontSize: "20px" }} />
        {/*
          //This is a bit overkill for your current app, but I just wanted to highlight that
          //when a color is used repeatedly like this, it could be abstracted to a constant
          //no need to change it here as you'll be adding chakra and refactoring the styles shortly
        */}
      </button>
    </div>
  );
};

export default SearchBar;

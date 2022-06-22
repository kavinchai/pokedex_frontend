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
  //Ideally this component would be a search bar with two buttons on either side of it and nothing else
  //Rather than pass through all seven props above we could just pass through the bits this component needs 
  //to know about. 

  //To put it a different way, this component shouldn't care about how it fetches data or navigates from page to page,
  //instead we can just pass it a function for how it should respond when the user clicks on the button
  //This allows us to segment all of this API logic into the App component. It's generally a good rule of thumb to keep all of the logic 
  //around fetching data in a singlular spot so it's easier to reason about without switching between files like we have to in this case.


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
            //This chunk with nested terneries is really challenging to read. Is there a way we can abstract it into the parent file
            //and make it more consice? 
        }}
      >
        <FaArrowLeft style={{ color: "#FDF4FF" }} />
      </button>
      <a className="pokedex" href="/">
        Pokedéx
      </a>
      <div className="pokemon-searchBarContainer">
        //This uses a mixture of css class structures between dashes and camel casing, it's a good rule of thumb to keep these consistent
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
      >
        <MdLastPage style={{ color: "#FDF4FF", fontSize: "20px" }} />
      </button>
    </div>
  );
};

export default SearchBar;

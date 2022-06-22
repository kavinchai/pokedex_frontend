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
        }}
      >
        <FaArrowLeft style={{ color: "#FDF4FF" }} />
      </button>
      <a className="pokedex" href="/">
        Pokedéx
      </a>
      <div className="pokemon-searchBarContainer">
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

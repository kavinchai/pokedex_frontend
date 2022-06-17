import React, { useMemo, useEffect } from "react";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import "../css/SearchBar.css";
import "../fonts/PokemonSolid.ttf";

const SearchBar = ({
  searchInput,
  filteredMaxPage,
  filteredSearchPage,
  setSearchInput,
  setFilteredMaxPage,
  setFilteredResults,
  setFilteredSearchPage,
}) => {
  const navigate = useNavigate();
  const { pokemonPage } = useParams();
  const searchItems = (searchValue, filteredSearchPage) => {
    setSearchInput(searchValue);
    fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}&page=${filteredSearchPage}`
    )
      .then((res) => res.json())
      .then(({ data, meta }) => {
        setFilteredResults(data);
        setFilteredMaxPage(meta.last_page);
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
        className="navButtonFirst"
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
        className="navButtonLeft"
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
          <FaSearch style={{ fontSize: "20px", paddingLeft: "15px" }} />
        </button>
        <input
          className="pokemon-searchBar"
          type="text"
          onChange={debouncedSearch}
          placeholder="Search"
        />
      </div>
      <button
        className="navButtonRight"
        type="submit"
        onClick={() => {
          searchInput.length > 0
            ? filteredSearchPage + 1 < filteredMaxPage
              ? setFilteredSearchPage(filteredSearchPage + 1)
              : setFilteredSearchPage(filteredMaxPage)
            : parseInt(pokemonPage) + 1 < 38
            ? navigate(`/page/${parseInt(pokemonPage) + 1}`)
            : navigate("/page/37");
        }}
      >
        <FaArrowRight style={{ color: "#FDF4FF" }} />
      </button>
      <button
        className="navButtonLast"
        type="submit"
        onClick={() => {
          searchInput.length > 0
            ? setFilteredSearchPage(filteredMaxPage)
            : navigate("/page/37");
        }}
      >
        <MdLastPage style={{ color: "#FDF4FF", fontSize: "20px" }} />
      </button>
    </div>
  );
};

export default SearchBar;

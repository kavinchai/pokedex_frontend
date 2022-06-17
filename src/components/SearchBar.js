import React, { useMemo, useEffect, useState } from "react";
import { debounce } from "lodash";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import "../css/SearchBar.css";
import "../fonts/PokemonSolid.ttf";

const SearchBar = ({
  filteredSearchPage,
  setFilteredSearchPage,
  searchInput,
  filteredMaxPage,
  setFilteredMaxPage,
  setFilteredResults,
  setSearchInput,
}) => {
  const navigate = useNavigate();
  const { pokemonPage } = useParams();
  const searchItems = (searchValue, filteredSearchPage) => {
    setSearchInput(searchValue);
    const filteredData = async (filteredSearchPage) => {
      const response = await fetch(
        `https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}&page=${filteredSearchPage}`
      );
      const json = await response.json();
      return json.data;
    };
    const filteredMeta = async (filteredSearchPage) => {
      const response = await fetch(
        `https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}&page=${filteredSearchPage}`
      );
      const json = await response.json();
      return json.meta.last_page;
    };
    filteredData(filteredSearchPage).then((res) => {
      setFilteredResults(res);
    });
    filteredMeta(filteredSearchPage).then((res) => {
      setFilteredMaxPage(res);
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
  }, [filteredSearchPage]);

  return (
    <div className="pokemon-selector">
      <button
        className="navButtonFirst"
        type="submit"
        onClick={() => {
          navigate("/page/1");
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
          navigate("/page/37");
        }}
      >
        <MdLastPage style={{ color: "#FDF4FF", fontSize: "20px" }} />
      </button>
    </div>
  );
};

export default SearchBar;
//https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=p&page=2

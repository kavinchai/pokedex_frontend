import React from "react";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { useMemo, useEffect } from "react";
import "../css/SearchBar.css";
import { debounce } from "lodash";

const SearchBar = ({
  pokePage,
  setPokePage,
  setFilteredResults,
  setSearchInput,
}) => {
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    const filteredData = async () => {
      const response = await fetch(
        `https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}`
      );
      const json = await response.json();
      return json.data;
    };
    filteredData().then((res) => {
      setFilteredResults(res);
    });
  };

  const debouncedSearch = useMemo(() => {
    return debounce((e) => {
      searchItems(e.target.value);
    }, 300);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });
  return (
    <div className="pokemon-selector">
      <button
        className="navButtonFirst"
        type="submit"
        onClick={() => {
          setPokePage(1);
        }}
      >
        <MdFirstPage style={{ color: "#FDF4FF", fontSize: "20px" }} />
      </button>
      <button
        className="navButtonLeft"
        type="submit"
        onClick={() => {
          setPokePage(pokePage === 1 ? 1 : pokePage - 1);
        }}
      >
        <FaArrowLeft style={{ color: "#FDF4FF" }} />
      </button>
      <p className="pokedex">Pokedéx</p>
      <div className="pokemon-searchBarContainer">
        <button type="submit" className="searchButton">
          <FaSearch style={{ fontSize: "20px", paddingLeft: "15px" }} />
        </button>
        <input
          className="pokemon-searchBar"
          type="text"
          // value={searchInput}
          onChange={debouncedSearch}
          placeholder="Search"
        />
      </div>

      <button
        className="navButtonRight"
        type="submit"
        onClick={() => {
          setPokePage(pokePage + 1 < 38 ? pokePage + 1 : 37);
        }}
      >
        <FaArrowRight style={{ color: "#FDF4FF" }} />
      </button>
      <button
        className="navButtonLast"
        type="submit"
        onClick={() => {
          setPokePage(37);
        }}
      >
        <MdLastPage style={{ color: "#FDF4FF", fontSize: "20px" }} />
      </button>
    </div>
  );
};

export default SearchBar;

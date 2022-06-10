import React, { useState } from "react";
import "../css/SearchBar.css";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "typeface-roboto";

const SearchBar = ({
  pokePage,
  setPokePage,
  pokemonList,
  setFilteredResults,
  searchInput,
  setSearchInput,
}) => {
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput.length !== "") {
      const filteredData = pokemonList.filter((item) => {
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(pokemonList);
    }
  };
  return (
    <div className="pokemon-selector">
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
      <input
        className="pokemon-searchBar"
        type="text"
        value={searchInput}
        onChange={(e) => searchItems(e.target.value)}
        placeholder="Search"
      />
      <button
        className="navButtonRight"
        type="submit"
        onClick={() => {
          setPokePage(pokePage + 1);
        }}
      >
        <FaArrowRight style={{ color: "#FDF4FF" }} />
      </button>
    </div>
  );
};

export default SearchBar;

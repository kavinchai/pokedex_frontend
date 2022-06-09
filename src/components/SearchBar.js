import React, { useEffect } from "react";
import "../css/SearchBar.css";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "typeface-roboto";

const SearchBar = ({
  pokemonPage,
  setPokemonPage,
  pokemonList,
  setPokemonList,
}) => {
  const getPokemonFromApi = async (pokemonPage) => {
    fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${pokemonPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.data);
      });
  };
  return (
    <div className="pokemon-selector">
      <button
        className="navButtonLeft"
        type="submit"
        onClick={() => {
          setPokemonPage(pokemonPage === 1 ? 1 : pokemonPage - 1);
          setPokemonList(pokemonList);
        }}
      >
        <FaArrowLeft style={{ color: "#FDF4FF" }} />
      </button>
      <p className="pokedex">Pokedéx</p>
      <input
        className="pokemon-searchBar"
        type="text"
        required
        placeholder="Search"
      />

      <button
        className="navButtonRight"
        type="submit"
        onClick={() => {
          setPokemonPage(pokemonPage + 1);
          setPokemonList(pokemonList);
        }}
      >
        <FaArrowRight style={{ color: "#FDF4FF" }} />
      </button>
    </div>
  );
};

export default SearchBar;

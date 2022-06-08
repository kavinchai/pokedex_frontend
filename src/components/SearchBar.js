import React from "react";
import "../css/SearchBar.css";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "typeface-roboto";

function SearchBar() {
  const myInput = React.createRef();
  //   const findPokemon = (event) => {
  //     event.preventDefault();
  //     const pokemonName = this.myInput.current.value;
  //     this.props.history.push(`/store/${pokemonName}`);
  //   };

  return (
    <form className="pokemon-selector" onSubmit={this.findPokemon}>
      <button
        className="navButtonLeft"
        type="submit"
        onClick={this.props.getPokemonFromApi}
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

      <button className="navButtonRight" type="submit">
        <FaArrowRight style={{ color: "#FDF4FF" }} />
      </button>
    </form>
  );
}

export default SearchBar;

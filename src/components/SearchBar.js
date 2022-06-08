import React from "react";
import "../css/SearchBar.css";
import { FaSearch, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "typeface-roboto";

class SearchBar extends React.Component {
  myInput = React.createRef();
  findPokemon = (event) => {
    event.preventDefault();
    const pokemonName = this.myInput.current.value;
    this.props.history.push(`/store/${pokemonName}`);
  };
  render() {
    return (
      <form className="pokemon-selector" onsubmit={this.findPokemon}>
        <button className="navButtonLeft" type="submit">
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
}

export default SearchBar;

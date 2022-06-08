import React from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import "../css/MainScreen.css";
class App extends React.Component {
  state = {
    pokemonPage: 2,
  };

  loadPokemon = () => {
    this.setState({ pokemonPage: 1 });
  };

  getPokemonFromApi = async () => {
    const api_call = await fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=${this.pokemonPage}`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div className="mainContainer">
        <SearchBar getPokemonFromApi={this.getPokemonFromApi} />
        <PokemonList />
      </div>
    );
  }
}

export default App;

import React from "react";
import "../css/PokemonList.css";

const API = "https://intern-pokedex.myriadapps.com/api/v1/pokemon/";
class PokemonList extends React.Component {
  //   loadPokemonSet = () => {
  //     this.setState({ pokemons: sampleFishes });
  //   };
  render() {
    return (
      //   <div className="pokemonList">
      //     <div className="row1">
      //       <div className="pokemon"></div>
      //     </div>
      //     <div className="row2"></div>
      //     <div className="row3"></div>
      //   </div>
      <div className="pokemonList">
        {/* <ul className="pokemons">
          {Object.keys(this.state.pokemons).map((key) => (
            <Pokemon key={key} index={key} details={this.state.pokemons[key]} />
          ))}
        </ul> */}
        <p>{API}</p>
      </div>
    );
  }
}

export default PokemonList;

import React from "react";
import "../css/PokemonInfoStat.css";
import { pokeTypeBgColor } from "../helpers";

const PokemonInfoStat = ({ pokemonInfo, specificStat }) => {
  const highestStat = (specificStat) => {
    let numStat;
    if (specificStat === "hp") {
      numStat = 250;
    } else if (specificStat === "attack") {
      numStat = 160;
    } else if (specificStat === "defense") {
      numStat = 180;
    } else if (specificStat === "speed") {
      numStat = 130;
    } else if (specificStat === "special-attack") {
      numStat = 154;
    } else if (specificStat === "special-defense") {
      numStat = 230;
    }
    return numStat;
  };
  return (
    <>
      <div
        className={`fullBar ${pokeTypeBgColor(pokemonInfo.types)}BgColor`}
      ></div>
      <div
        className={`statBar-${specificStat} ${pokeTypeBgColor(
          pokemonInfo.types
        )}BgColor`}
        style={{
          width: `${
            (pokemonInfo.stats[`${specificStat}`] / highestStat(specificStat)) *
            100
          }%`,
        }}
      >
        {pokemonInfo.stats[`${specificStat}`]}
      </div>
    </>
  );
};

export default PokemonInfoStat;

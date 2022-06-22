import React from "react";
import { pokeTypeBgColor, calcPercent } from "../helpers";
import "../css/PokemonInfoStat.css";

const PokemonInfoStat = ({ pokemonInfo, specificStat }) => {
  const highestStat = (specificStat) => {
    let maxStatVal;
    if (specificStat === "hp") {
      maxStatVal = 255;
    } else if (specificStat === "attack") {
      maxStatVal = 160;
    } else if (specificStat === "defense") {
      maxStatVal = 200;
    } else if (specificStat === "speed") {
      maxStatVal = 150;
    } else if (specificStat === "special-attack") {
      maxStatVal = 154;
    } else if (specificStat === "special-defense") {
      maxStatVal = 230;
    }
    return maxStatVal;
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
          width: `${calcPercent(
            pokemonInfo.stats[`${specificStat}`],
            highestStat(specificStat)
          )}%`,
        }}
      >
        {pokemonInfo.stats[`${specificStat}`]}
      </div>
    </>
  );
};

export default PokemonInfoStat;

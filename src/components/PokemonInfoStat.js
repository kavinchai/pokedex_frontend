import React from "react";
import { pokeTypeBgColor, calcPercent, capitalizeFirst } from "../helpers";
import "../css/PokemonInfoStat.css";

const PokemonInfoStat = ({ pokemonInfo, specificStat }) => {
  const highestStat = {
    hp: 255,
    attack: 160,
    defense: 200,
    speed: 150,
    "special-attack": 154,
    "special-defense": 230,
  };
  return (
    <>
      <div
        className={`fullBar ${pokeTypeBgColor(pokemonInfo.types)}BgColor`}
      ></div>
      <div
        className={`statBar${capitalizeFirst(specificStat)} ${pokeTypeBgColor(
          pokemonInfo.types
        )}BgColor`}
        style={{
          width: `${calcPercent(
            pokemonInfo.stats[specificStat],
            highestStat[specificStat]
          )}%`,
        }}
      >
        {pokemonInfo.stats[specificStat]}
      </div>
    </>
  );
};

export default PokemonInfoStat;

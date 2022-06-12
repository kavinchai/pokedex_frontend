import React from "react";
import "../css/Pokemon.css";
const Pokemon = ({ details }) => {
  const { name, image, types } = details;
  return (
    <div className="pokemonContainer">
      <div className="pokeNameContainer">
        <div className="pokeName">{name}</div>
      </div>
      <div className="pokeImgContainer">
        <img src={image} alt={name} className="pokeImg"></img>
      </div>
      <div className="pokeTypeContainer">
        <div className="pokemonTypes">
          {Object.keys(types).map((key) => (
            <div key={key} index={key} className="test">
              {types[key]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

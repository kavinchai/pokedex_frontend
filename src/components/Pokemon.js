import React from "react";

const Pokemon = ({ details }) => {
  const { id, name, image, types } = details;
  return (
    <li className="pokemonContainer">
      <div className="pokemonName">{name}</div>
      <img src={image} alt={name} className="pokemonImage"></img>
      <div className="pokemonTypes">
        {Object.keys(types).map((key) => (
          <div>{types[key]}</div>
        ))}
      </div>
    </li>
  );
};

export default Pokemon;

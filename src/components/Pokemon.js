import React from "react";

const Pokemon = (props) => {
  const { id, name, image, types } = props;
  return (
    <li className="pokemonContainer">
      <h3 className="pokemonName">{name}</h3>
      <img src={image} alt={name} className="pokemonImage"></img>
      <div className="pokemonTypes">{types}</div>
    </li>
  );
};

export default Pokemon;

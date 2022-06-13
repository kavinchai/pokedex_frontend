import React from "react";
import "../css/Pokemon.css";
import { useNavigate } from "react-router-dom";
const Pokemon = ({ details }) => {
  let navigate = useNavigate();
  const { id, name, image, types } = details;
  const goToPokemonDetails = () => {
    console.log({ id });
    navigate(`/pokemonDetails/${id}`);
  };
  return (
    <button className="pokemonContainer" onClick={goToPokemonDetails}>
      <div className="pokeNameContainer">
        <div className="pokeName">{name}</div>
      </div>
      <div className="pokeImgContainer">
        <img src={image} alt={name} className="pokeImg"></img>
      </div>
      <div className="pokeTypeContainer">
        <div className="pokemonTypes">
          {Object.keys(types).map((key) => (
            <div key={key} className={types[key]}>
              {types[key]}
            </div>
          ))}
        </div>
      </div>
    </button>
  );
};

export default Pokemon;

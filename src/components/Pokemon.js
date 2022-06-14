import React from "react";
import "../css/Pokemon.css";
import { useNavigate } from "react-router-dom";
const Pokemon = ({ details }) => {
  let navigate = useNavigate();
  const { id, name, image, types } = details;
  const goToPokemonInfo = () => {
    console.log({ id });
    navigate(`/pokemonInfo/${id}`);
  };
  return (
    <button className="pokemonContainer" onClick={goToPokemonInfo}>
      <div className="pokeNameContainer">
        <div className="pokeName">{name}</div>
      </div>
      <div className="pokeImgContainer">
        <img src={image} alt={name} className="pokeImg"></img>
      </div>
      <div className="pokeTypeContainer">
        <div className="pokemonTypes">
          {types.map((key) => (
            <div key={key} className={`${key}Type typeContainer`}>
              {key}
            </div>
          ))}
        </div>
      </div>
    </button>
  );
};

export default Pokemon;

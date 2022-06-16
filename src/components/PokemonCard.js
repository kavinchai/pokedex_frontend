import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Pokemon.css";

const PokemonCard = ({ pokePage, details }) => {
  let navigate = useNavigate();
  const { id, name, image, types } = details;
  const goToPokemonInfo = () => {
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
          {types.map((type, index) => (
            <div key={index} className={`${type}Type typeContainer`}>
              {type}
            </div>
          ))}
        </div>
      </div>
    </button>
  );
};

export default PokemonCard;

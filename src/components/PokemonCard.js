import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/PokemonCard.css";
import Type from "./Type";

const PokemonCard = ({ identity, details: { id, name, image, types } }) => {
  const navigate = useNavigate();
  const goToPokemonInfo = () => {
    navigate(`/pokemonInfo/${id}`);
  };
  return (
    <a
      className={`pokemonContainer pokemonCard${identity}`}
      onClick={goToPokemonInfo}
    >
      <div className="pokeNameContainer">
        <div className="pokeName">{name}</div>
      </div>
      <div className="pokeImgContainer">
        <img src={image} alt={name} className="pokeImg" />
      </div>
      <div className="pokeTypeContainer">
        <Type types={types} />
      </div>
    </a>
  );
};

export default PokemonCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/PokemonCard.css";

const PokemonCard = ({ identity, details: { id, name, image, types } }) => {
  //Great use of nested object destructuring!
  let navigate = useNavigate();
  //This can be a const since the variable is never changed
  const goToPokemonInfo = () => {
    navigate(`/pokemonInfo/${id}`);
  };
  return (
    <button
      className={`pokemonContainer pokemonCard${identity}`}
      onClick={goToPokemonInfo}
    >
      <div className="pokeNameContainer">
        <div className="pokeName">{name}</div>
      </div>
      <div className="pokeImgContainer">
        <img src={image} alt={name} className="pokeImg"></img>
        {/* Here we could close the tag immediately like this <img/> */}
      </div>
      <div className="pokeTypeContainer">
        <div className="pokemonTypes">
          {types.map((type, index) => (
            <div key={index} className={`${type}Type typeContainer`}>
              {type}
            </div>
            //This type and the other one could use the same components
          ))}
        </div>
      </div>
    </button>
  );
};

export default PokemonCard;

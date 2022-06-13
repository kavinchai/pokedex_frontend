import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PokemonDetails = () => {
  const params = useParams(); // Get pokemon id from link

  const getPokemonDetailsFromApi = async () => {
    const response = await fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon/${params.PokemonId}`
    );
    const json = await response.json();
    console.log(json.data);
    setPokemonDetails(json.data);
  };
  const [pokemonDetails, setPokemonDetails] = useState(() =>
    getPokemonDetailsFromApi()
  );
  return (
    <div className="pokeDetailsContainer">
      <div className="pokeHeader">
        <button
          className="navButtonLeft"
          type="submit"
          onClick={() => {
            console.log("this works");
          }}
        >
          <FaArrowLeft style={{ color: "#FDF4FF" }} />
        </button>
        <p>test</p>
      </div>
    </div>
  );
};

export default PokemonDetails;

// pokemonDetails.name

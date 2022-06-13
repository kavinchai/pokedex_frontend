import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../css/PokemonInfo.css";
import "../css/Pokemon.css";
import "typeface-roboto";

function PokemonInfo() {
  const params = useParams(); // Get pokemon id from link

  const getPokemonInfoFromApi = async () => {
    const response = await fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon/${params.pokemonId}`
    );
    const json = await response.json();
    console.log(json.data);
    return json.data;
  };
  const [pokemonInfo, setPokemonInfo] = useState(null);
  useEffect(() => {
    const tempvar = getPokemonInfoFromApi().then((res) => {
      setPokemonInfo(res);
    });
    console.log(tempvar);
  });
  // const {
  //   id,
  //   name,
  //   image,
  //   types,
  //   height,
  //   weight,
  //   abilities,
  //   egg_groups,
  //   stats,
  //   genus,
  //   description,
  // } = pokemonInfo;
  return (
    <div className="pokeInfoContainer">
      {pokemonInfo === null ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="pokeInfoHeader">
            <button
              className="navButtonLeft"
              type="submit"
              onClick={() => {
                console.log("this works");
              }}
            >
              <FaArrowLeft style={{ color: "#FDF4FF" }} />
            </button>
            <div className="pokemonNameHeader " style={{ color: "white" }}>
              {pokemonInfo.name}
            </div>
          </div>
          <div className="pokeInfoBody">
            <div className="pokemonCard">
              <div className="pokemonCardHeader">
                <div className="pokemonCardName">{pokemonInfo.name}</div>
                <div className="pokemonCardId">{`#${pokemonInfo.id}`}</div>
                <div className="blankSpace"></div>
                <div className="pokemonCardTypes">
                  {pokemonInfo.types.map((key) => (
                    <div key={key} className={key}>
                      {key}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pokemonStats"></div>
              <div className="pokemonDetails"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonInfo;
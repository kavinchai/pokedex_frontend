import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pokeTypeBgColor } from "../helpers";
import { FaArrowLeft } from "react-icons/fa";
import PokemonInfoStat from "./PokemonInfoStat";
import LoadingPage from "./LoadingPage";
import "../css/PokemonInfo.css";

const PokemonInfo = () => {
  let navigate = useNavigate();
  const { pokemonId } = useParams(); // Get pokemon id from link
  const [pokemonInfo, setPokemonInfo] = useState(null);
  useEffect(() => {
    fetch(`https://intern-pokedex.myriadapps.com/api/v1/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setPokemonInfo(data);
      });
    // eslint-disable-next-line
  });

  return (
    <>
      {pokemonInfo === null ? (
        <LoadingPage />
      ) : (
        <div
          className={`pokeInfoContainer ${pokeTypeBgColor(
            pokemonInfo.types
          )}BgColor`}
        >
          <div
            className={`pokeInfoHeader ${pokeTypeBgColor(
              pokemonInfo.types
            )}BgColor`}
          >
            <button
              className="navButtonHome"
              type="submit"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft style={{ color: "#FDF4FF" }} />
            </button>
            <div className="pokemonNameHeader " style={{ color: "white" }}>
              {pokemonInfo.name}
            </div>
          </div>

          <div
            className={`pokeInfoBody ${pokeTypeBgColor(
              pokemonInfo.types
            )}BgColor`}
          >
            <div className="pokemonCard">
              <div className="pokemonCardHeader">
                <div className="pokemonCardName">{pokemonInfo.name}</div>
                <div className="pokemonCardId">{`#${pokemonInfo.id}`}</div>
                <div className="blankSpace"></div>
                <div className="pokemonCardTypes">
                  {pokemonInfo.types.map((type, index) => (
                    <div key={index} className={`${type}Type typeContainer`}>
                      {type}
                    </div>
                  ))}
                </div>
              </div>
              <div className="line"></div>
              <div className="pokemonStats">
                <div className="statsChild Left">
                  <img
                    src={pokemonInfo.image}
                    alt={pokemonInfo.name}
                    className="statsChildImg"
                  ></img>
                </div>
                <div className="statsChild Right">
                  <div className="statTextContainer">
                    <div className="statText">
                      <p>HP</p>
                      <p>Attack</p>
                      <p>Defense</p>
                      <p>Speed</p>
                      <p>Sp Atk</p>
                      <p>Sp Def</p>
                    </div>
                  </div>
                  <div className="statBarContainer">
                    <PokemonInfoStat
                      pokemonInfo={pokemonInfo}
                      specificStat={"hp"}
                    />
                    <PokemonInfoStat
                      pokemonInfo={pokemonInfo}
                      specificStat={"attack"}
                    />
                    <PokemonInfoStat
                      pokemonInfo={pokemonInfo}
                      specificStat={"defense"}
                    />
                    <PokemonInfoStat
                      pokemonInfo={pokemonInfo}
                      specificStat={"speed"}
                    />
                    <PokemonInfoStat
                      pokemonInfo={pokemonInfo}
                      specificStat={"special-attack"}
                    />
                    <PokemonInfoStat
                      pokemonInfo={pokemonInfo}
                      specificStat={"special-defense"}
                    />
                  </div>
                </div>
              </div>
              <div className="pokemonDetails">
                <div className="genusDescContainer">
                  <div className="pokemonGenus">{pokemonInfo.genus}</div>
                  <div className="pokemonDesc">{pokemonInfo.description}</div>
                </div>
                <div
                  className={`pokemonProfile ${pokeTypeBgColor(
                    pokemonInfo.types
                  )}BgColor`}
                >
                  <p>Profile</p>
                </div>
                <div className="pokemonAltStatsContainer">
                  <div className="leftTextColStat">
                    <p>Height:</p>
                    <p>Weight:</p>
                  </div>
                  <div className="leftNumColStat">
                    <div className="statDiv">{`${pokemonInfo.height} m`}</div>
                    <div className="statDiv">{`${pokemonInfo.weight} kg`}</div>
                  </div>
                  <div className="rightTextColStat">
                    <p>Egg Groups:</p>
                    <p>Abilities:</p>
                  </div>
                  <div className="rightNumColStat">
                    <div className="statDiv eggGroupDiv">
                      {pokemonInfo.egg_groups.map((egg_group, index) => (
                        <div key={index} className={`eggGroup${index}`}>
                          {egg_group ===
                          pokemonInfo.egg_groups[
                            pokemonInfo.egg_groups.length - 1
                          ]
                            ? egg_group.replace(/[0-9]/g, "").replace("-", " ")
                            : `${egg_group
                                .replace(/[0-9]/g, "")
                                .replace("-", " ")},`}
                        </div>
                      ))}
                    </div>
                    <div className="statDiv abilityDiv">
                      {pokemonInfo.abilities.map((ability, index) => (
                        <div key={index} className={`ability${index}`}>
                          {ability ===
                          pokemonInfo.abilities[
                            pokemonInfo.abilities.length - 1
                          ]
                            ? ability.replace(/[0-9]/g, "").replace("-", " ")
                            : `${ability
                                .replace(/[0-9]/g, "")
                                .replace("-", " ")},`}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonInfo;

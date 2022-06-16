import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import CreateStat from "./CreateStat";
import "../css/PokemonInfo.css";

const PokemonInfo = () => {
  const param = useParams(); // Get pokemon id from link
  let navigate = useNavigate();
  const getPokemonInfoFromApi = async () => {
    const response = await fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon/${param.pokemonId}`
    );
    const json = await response.json();
    console.log(json.data);
    return json.data;
  };
  const [pokemonInfo, setPokemonInfo] = useState(null);
  useEffect(() => {
    const response = getPokemonInfoFromApi().then((res) => {
      setPokemonInfo(res);
    });
    // eslint-disable-next-line
  }, []);

  const pokeTypeBgColor = (e) => {
    return e.length === 2 ? e[1] : e[0];
  };

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
                <div className="pokePicStat">
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
                      <CreateStat
                        pokemonInfo={pokemonInfo}
                        specificStat={"hp"}
                      />
                      <CreateStat
                        pokemonInfo={pokemonInfo}
                        specificStat={"attack"}
                      />
                      <CreateStat
                        pokemonInfo={pokemonInfo}
                        specificStat={"defense"}
                      />
                      <CreateStat
                        pokemonInfo={pokemonInfo}
                        specificStat={"speed"}
                      />
                      <CreateStat
                        pokemonInfo={pokemonInfo}
                        specificStat={"special-attack"}
                      />
                      <CreateStat
                        pokemonInfo={pokemonInfo}
                        specificStat={"special-defense"}
                      />
                    </div>
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
                    <div className="statDiv">{pokemonInfo["egg_groups"]}</div>
                    <div className="statDiv abilityBox">
                      {pokemonInfo.abilities.map((ability, index) => (
                        <div key={index} className="abilityName">
                          {ability ===
                          pokemonInfo.abilities[
                            pokemonInfo.abilities.length - 1
                          ]
                            ? ability
                            : `${ability},`}
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
//https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=p&page=2

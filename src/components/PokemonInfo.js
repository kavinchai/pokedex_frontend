import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import "../css/PokemonInfo.css";

const PokemonInfo = ({ setPokePage }) => {
  const params = useParams(); // Get pokemon id from link
  let navigate = useNavigate();
  const goToMainPage = () => {
    navigate("/");
  };
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
    const response = getPokemonInfoFromApi().then((res) => {
      setPokemonInfo(res);
    });
    console.log(response);
    // eslint-disable-next-line
  }, []);

  const pokeTypeBgColor = (e) => {
    return e.length === 2 ? e[1] : e[0];
  };
  return (
    <div>
      {pokemonInfo === null ? (
        <LoadingPage />
      ) : (
        <div className="pokeInfoContainer">
          <div
            className={`pokeInfoHeader ${pokeTypeBgColor(
              pokemonInfo.types
            )}BgColor`}
          >
            <button
              className="navButtonHome"
              type="submit"
              onClick={goToMainPage}
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
                      <div className="statHp">
                        <div
                          className={`fullBar ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                        ></div>
                        <div
                          className={`statBar-hp ${
                            pokemonInfo.types.length === 2
                              ? pokemonInfo.types[1]
                              : pokemonInfo.types[0]
                          }BgColor`}
                          style={{
                            width: `${(pokemonInfo.stats.hp / 250) * 100}%`,
                          }}
                        >
                          {pokemonInfo.stats.hp}
                        </div>
                      </div>
                      <div className="statAttack">
                        <div
                          className={`fullBar ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                        ></div>
                        <div
                          className={`statBar-attack ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                          style={{
                            width: `${(pokemonInfo.stats.attack / 160) * 100}%`,
                          }}
                        >
                          {pokemonInfo.stats.attack}
                        </div>
                      </div>
                      <div className="statDefense">
                        <div
                          className={`fullBar ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                        ></div>
                        <div
                          className={`statBar-defense ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                          style={{
                            width: `${
                              (pokemonInfo.stats.defense / 180) * 100
                            }%`,
                          }}
                        >
                          {pokemonInfo.stats.defense}
                        </div>
                      </div>
                      <div className="statSpeed">
                        <div
                          className={`fullBar ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                        ></div>
                        <div
                          className={`statBar-speed ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                          style={{
                            width: `${(pokemonInfo.stats.speed / 140) * 100}%`,
                          }}
                        >
                          {pokemonInfo.stats.speed}
                        </div>
                      </div>
                      <div className="statSpAtk">
                        <div
                          className={`fullBar ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                        ></div>
                        <div
                          className={`statBar-special-attack ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                          style={{
                            width: `${
                              (pokemonInfo.stats["special-attack"] / 154) * 100
                            }%`,
                          }}
                        >
                          {pokemonInfo.stats["special-attack"]}
                        </div>
                      </div>
                      <div className="statSpDef">
                        <div
                          className={`fullBar ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                        ></div>
                        <div
                          className={`statBar-special-defense ${pokeTypeBgColor(
                            pokemonInfo.types
                          )}BgColor`}
                          style={{
                            width: `${
                              (pokemonInfo.stats["special-defense"] / 230) * 100
                            }%`,
                          }}
                        >
                          {pokemonInfo.stats["special-defense"]}
                        </div>
                      </div>
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
    </div>
  );
};

export default PokemonInfo;

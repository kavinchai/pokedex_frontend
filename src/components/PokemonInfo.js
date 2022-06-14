import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../css/PokemonInfo.css";

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
    const response = getPokemonInfoFromApi().then((res) => {
      setPokemonInfo(res);
    });
    console.log(response);
    // eslint-disable-next-line
  }, []);

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
                        <div className="fullBar"></div>
                        <div
                          className={`statBar-hp`}
                          style={{
                            width: `${(pokemonInfo.stats.hp / 250) * 100}%`,
                          }}
                        >
                          {pokemonInfo.stats.hp}
                        </div>
                      </div>
                      <div className="statAttack">
                        <div className="fullBar"></div>
                        <div
                          className={`statBar-attack`}
                          style={{
                            width: `${(pokemonInfo.stats.attack / 134) * 100}%`,
                          }}
                        >
                          {pokemonInfo.stats.attack}
                        </div>
                      </div>
                      <div className="statDefense">
                        <div className="fullBar"></div>
                        <div
                          className={`statBar-defense`}
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
                        <div className="fullBar"></div>
                        <div
                          className={`statBar-speed`}
                          style={{
                            width: `${(pokemonInfo.stats.speed / 140) * 100}%`,
                          }}
                        >
                          {pokemonInfo.stats.speed}
                        </div>
                      </div>
                      <div className="statSpAtk">
                        <div className="fullBar"></div>
                        <div
                          className={`statBar-special-attack`}
                          style={{
                            width: `${
                              (pokemonInfo.stats["special-attack"] / 135) * 100
                            }%`,
                          }}
                        >
                          {pokemonInfo.stats["special-attack"]}
                        </div>
                      </div>
                      <div className="statSpDef">
                        <div className="fullBar"></div>
                        <div
                          className={`statBar-special-defense`}
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
                <div className="pokemonProfile">test</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonInfo;

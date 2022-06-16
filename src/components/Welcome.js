import React from "react";
import "../css/Welcome.css";
import "../fonts/PokemonSolid.ttf";

const Welcome = () => {
  return (
    <>
      <div
        className="welcomePageContainer"
        tabIndex={0}
        onKeyDown={() => {
          window.location.href = "/page/1";
        }}
      >
        <div className="pokemonHeadAnimation">
          <div className="letterP letter">P</div>
          <div className="letterO letter">o</div>
          <div className="letterK letter">K</div>
          <div className="letterE letter">e</div>
          <div className="letterM letter">M</div>
          <div className="letterO letter">o</div>
          <div className="letterN letter">N</div>
        </div>
        <div className="pokemonBody">test</div>
      </div>
    </>
  );
};

export default Welcome;

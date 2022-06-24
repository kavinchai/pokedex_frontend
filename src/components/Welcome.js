import React from "react";
import "../css/Welcome.css";
import "../fonts/PokemonSolid.ttf";
import "../fonts/slkscr.ttf";
import asheImg from "../contents/img/ashImg.png";
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
          <div className="letterP letterClass animate">P</div>
          <div className="letterO letterClass animate">o</div>
          <div className="letterK letterClass animate">K</div>
          <div className="letterE letterClass animate">é</div>
          <div className="letterM letterClass animate">M</div>
          <div className="letterO letterClass animate">o</div>
          <div className="letterN letterClass animate">N</div>
          <div className="wordTM wordClass animate">TM</div>
        </div>
        <div className="pokemonBody">
          <img className="ashImg" src={asheImg} alt="ashImg" />
          <div className="pressKey">press any key to start</div>
          <div className="bottomText">&#169;`95.`96.`98 GAME FREAK inc. </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

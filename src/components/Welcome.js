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
        //We could use react router navigation here instead of window.location.href
      >
        <div className="pokemonHeadAnimation">
          <div className="letterP letter animate">P</div>
          <div className="letterO letter animate">o</div>
          <div className="letterK letter animate">K</div>
          <div className="letterE letter animate">é</div>
          <div className="letterM letter animate">M</div>
          <div className="letterO letter animate">o</div>
          <div className="letterN letter animate">N</div>
          <div className="wordTM word animate">TM</div>
          //A lot of these classes do not look like they are used anymore in your css files
          //I think that letterP is the only one that is still utilized differently from the 
          //rest with some margin top
        </div>
        <div className="pokemonBody">
          <img className="ashImg" src={asheImg} alt="ashImg"></img>
          <div className="pressKey">press any key to start</div>
          <div className="bottomText">&#169;`95.`96.`98 GAME FREAK inc. </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

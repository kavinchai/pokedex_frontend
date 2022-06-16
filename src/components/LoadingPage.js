import React from "react";
import pokeballImg from "../contents/pokeball/pokeball.gif";

import "../css/LoadingPage.css";
function LoadingPage() {
  return (
    <div className="loadingPageContainer">
      <div className="loadingBody">
        <img className="pokeballProp" src={pokeballImg} alt="pokeballGif"></img>
      </div>
    </div>
  );
}

export default LoadingPage;

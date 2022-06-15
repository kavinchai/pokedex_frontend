import React from "react";
import pokeballImg from "../contents/pokeball/pokeball.gif";

import "../css/LoadingPage.css";
function LoadingPage() {
  return (
    <div className="loadingPageContainer">
      {/* <div className="loadingHeader">
        <div className="dot1 dotProp" />
        <div className="dot2 dotProp" />
        <div className="dot3 dotProp" />
        <div className="dot4 dotProp" />
        <div className="dot5 dotProp" />
      </div> */}
      <div className="loadingBody">
        <img className=" pokeballProp" src={pokeballImg}></img>
      </div>
    </div>
  );
}

export default LoadingPage;

import React from "react";
import pokeballImg from "../contents/gif/pokeball.gif";

import "../css/LoadingPage.css";
const LoadingPage = () => {
  return (
    <div className="loadingPageContainer">
      <div className="loadingBody">
        <img className="pokeballProp" src={pokeballImg} alt="pokeballGif"></img>
      </div>
      {/* Love the loading gif and attention to detail here */}
    </div>
  );
};

export default LoadingPage;

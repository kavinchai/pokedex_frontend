import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pokeballImg from "../contents/gif/pokeball.gif";

import "../css/LoadingPage.css";
function LoadingPage() {
  const navigate = useNavigate();
  const runAfter = () => {
    setTimeout(function () {
      navigate("/page/1");
    }, 2000);
  };

  return (
    <div className="loadingPageContainer">
      <div className="loadingBody">
        <img className="pokeballProp" src={pokeballImg} alt="pokeballGif"></img>
      </div>
    </div>
  );
}

export default LoadingPage;

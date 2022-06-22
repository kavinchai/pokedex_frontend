import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Welcome from "./Welcome";
import NotFound from "./NotFound";
import PokemonInfo from "./PokemonInfo";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/page/:pokemonPage" element={<App />} />
        <Route path="/pokemonInfo/:pokemonId" element={<PokemonInfo />} />
        <Route component={NotFound} />
      </Routes>
    </>
  );
};

export default Router;

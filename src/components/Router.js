import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import PokemonInfo from "./PokemonInfo";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemonInfo/:pokemonId" element={<PokemonInfo />} />
      </Routes>
    </>
  );
}

export default Router;

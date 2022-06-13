import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import PokemonDetails from "./PokemonDetails";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemonDetails/:PokemonId" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default Router;

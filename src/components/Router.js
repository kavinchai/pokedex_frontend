import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
const Router = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" component={PagePicker} />
      <Route path="/pokemon/:PokemonId" component={App} />
    </Routes>
  </BrowserRouter>;
};

export default Router;

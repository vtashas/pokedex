import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Details from "./Components/Details";

const Poke = () => {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/pokemon/:pokeId">
          <Details />
        </Route>
      </Router>
    </div>
  );
};

export default Poke;

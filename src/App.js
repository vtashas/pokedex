import React, { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Components/Card";
import axios from "axios";
import { Loading } from "./Components/Loading";
import { NavLink } from "react-router-dom";
import { Heading } from "./Components/Heading";

const App = () => {
  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const path = window.location.href;
  const lastPath = path.substr(path.lastIndexOf("/"));

  const fetchData = async counts => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${counts}&limit=20`
    );
    await setPokemon(prevState => {
      return prevState.length > 0
        ? [...prevState, ...response.data.results]
        : [...response.data.results];
    });
  };

  useEffect(() => {
    fetchData(count);
  }, [count]);

  useEffect(() => {
    const windows = document.getElementsByClassName("outer-wrapper")[0];
    if (lastPath === "/") {
      windows.addEventListener("scroll", () => {
        if (windows.scrollTop + windows.clientHeight >= windows.scrollHeight) {
          setCount(prevData => prevData + 20);
        }
      });
    }
  }, []);

  return (
    <div className="outer-wrapper">
      <Heading></Heading>
      <div id="outer-container" className="outer-container">
        {pokemon.length > 0 ? (
          pokemon &&
          pokemon.map((data, key) => (
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to={`/pokemon/${key + 1}`}
              key={key}
            >
              <Card
                description={data.name}
                number={key + 1}
                imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${key +
                  1}.png`}
              ></Card>
            </NavLink>
          ))
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};

export default App;

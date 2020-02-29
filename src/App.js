import React, { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Components/Card";
import axios from "axios";
import { Loading } from "./Components/Loading";
import { Layout } from "./Components/Layout";
import { NavLink } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  const fetchData = async counts => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${counts}&limit=20`
      );
      return pokemon.length > 0
        ? pokemon.push(...response.data.results)
        : await setPokemon(response.data.results);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData(count);
    console.log(pokemon);
  }, [count]);

  return (
    <div className="outer-wrapper">
      <div id="outer-container" className="outer-container">
        <Layout setCount={setCount} count={count}>
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
        </Layout>
      </div>
    </div>
  );
};

export default App;

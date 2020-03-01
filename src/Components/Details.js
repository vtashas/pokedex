import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "./Loading";
import { styleColor } from "../Data/styleColor";
import { NavLink } from "react-router-dom";

const Details = () => {
  const [states, setStates] = useState("init");

  const fetchPoke = async () => {
    const path = window.location.href;
    const lastPath = path.substr(path.lastIndexOf("/") + 1);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${lastPath}`
      );
      return setStates(response.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchPoke();
  }, []);

  return (
    <div className="details-wrapper">
      <div className="details-container">
        <NavLink
          style={{
            textDecoration: "none",
            position: "absolute",
            alignSelf: "flex-start",
            margin: "0px 16px"
          }}
          to={`/`}
        >
          <h3 className="back-button">
            <b>Back</b>
            <small>to pokedex</small>
          </h3>
        </NavLink>

        <h2 className="details-pokemon-name">{states.name}</h2>
        {states !== "init" ? (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${states.id}.png`}
            alt="this-is-something"
          ></img>
        ) : (
          <Loading></Loading>
        )}
        <div className="details-pokemon-stats">
          <div>
            <div>
              <h3>types</h3>
              {states !== "init" ? (
                states.types.map((data, key) => {
                  let a = data.type.name;
                  return (
                    <div
                      style={styleColor[a]}
                      key={key}
                      className="details-pokemon-type"
                    >
                      {a}
                    </div>
                  );
                })
              ) : (
                <Loading></Loading>
              )}
            </div>
            <div>
              <h3>abilities</h3>
              {states !== "init" ? (
                states.abilities.map((data, key) => (
                  <div key={key}>{data.ability.name}</div>
                ))
              ) : (
                <Loading></Loading>
              )}
            </div>
          </div>
          <div>
            <h3>stats</h3>
            {states !== "init" ? (
              states.stats.map((data, key) => (
                <div
                  style={{
                    display: "flex",
                    width: "200px",
                    justifyContent: "space-between"
                  }}
                  key={key}
                >
                  <div>{data.stat.name}</div>
                  <div>{data.base_stat}</div>
                </div>
              ))
            ) : (
              <Loading></Loading>
            )}
          </div>
        </div>
      </div>
      <style jsx="true">
        {`
          h3 {
            font-size: 24px;
            margin: 16px 0px;
          }
          .back-button b {
            color: black;
          }
          .back-button:hover {
            color: black;
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }
          .back-button small {
            display: none;
          }
          .back-button:hover small {
            display: flex;
            font-size: 16px;
            color: var(--color-pokemon-yellow);
            text-shadow: 3px 3px 0 var(--color-pokemon-blue),
              -1px -1px 0 var(--color-pokemon-blue),
              1px -1px 0 var(--color-pokemon-blue),
              -1px 1px 0 var(--color-pokemon-blue),
              1px 1px 0 var(--color-pokemon-blue);
          }
          .details-wrapper {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
          }
          .details-container {
            max-width: 800px;
            width: 100%;
            min-height: 500px;
            border: solid 2px black;
            box-shadow: black 10px 10px;
            margin: 16px;
            display: flex;
            justify-self: center;
            align-self: center;
            flex-direction: column;
            align-items: center;
          }
          .details-container img {
            align-self: center;
          }
          .details-pokemon-name {
            font-family: courier new;
            font-weight: bold;
            width: auto;
            font-size: 34px;
            letter-spacing: 3px;
            color: var(--color-pokemon-yellow);
            text-shadow: 3px 3px 0 var(--color-pokemon-blue),
              -1px -1px 0 var(--color-pokemon-blue),
              1px -1px 0 var(--color-pokemon-blue),
              -1px 1px 0 var(--color-pokemon-blue),
              1px 1px 0 var(--color-pokemon-blue);
          }
          .details-pokemon-type {
            font-family: courier new;
            font-weight: bold;
            font-size: 20px;
            text-shadow: 2px 2px 0 black, -1px -1px 0 black, 1px -1px 0 black,
              -1px 1px 0 black, 1px 1px 0 black;
          }
          .details-pokemon-stats {
            display: flex;
            justify-content: space-between;
            max-width: 500px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Details;

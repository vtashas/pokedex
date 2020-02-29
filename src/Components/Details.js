import React, { useState, useEffect } from "react";
import { Layout } from "./Layout";
import axios from "axios";
import { Loading } from "./Loading";
import { styleColor } from "../Data/styleColor";

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
    <Layout>
      <div className="details-wrapper">
        <div className="details-container">
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
                <h3>Types</h3>
                {states !== "init" ? (
                  states.types.map((data, key) => {
                    let a = data.type.name;
                    return (
                      <div style={styleColor[a]} key={key}>
                        {a}
                      </div>
                    );
                  })
                ) : (
                  <Loading></Loading>
                )}
              </div>
              <div>
                <h3>Abilities</h3>
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
              <h3>Stats</h3>
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
      </div>
      <style jsx="true">
        {`
          .details-wrapper {
            width: 100vw;
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
          .details-pokemon-stats {
            display: flex;
            justify-content: space-between;
            max-width: 500px;
            width: 100%;
          }
        `}
      </style>
    </Layout>
  );
};

export default Details;

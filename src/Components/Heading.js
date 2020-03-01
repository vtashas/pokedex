import React from "react";

export const Heading = () => {
  return (
    <h1 className="layout-page-title">
      Pokédex<br></br>
      <small>your mini pokémon encyclopedia</small>
      <style jsx="true">{`
        .layout-page-title {
          letter-spacing: 2px;
          color: #ffcb05;
          text-shadow: 3px 3px 0 #3466af, -1px -1px 0 #3466af,
            1px -1px 0 #3466af, -1px 1px 0 #3466af, 1px 1px 0 #3466af;
          position: sticky;
          margin: 16px;
          top: 16px;
          font-family: century gothic;
          font-weight: bold;
          font-style: italic;
          align-self: start;
        }
        small {
          font-size: 16px;
          color: black;
          text-shadow: none;
          margin: 0px;
          letter-spacing: 0px;
        }
      `}</style>
    </h1>
  );
};

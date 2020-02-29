import React from "react";

export const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-container">Loading...</div>
      <style jsx="true">{`
        .loading-wrapper {
          width: 100px;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loading-container {
          color: yellow;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          font-family: courier new;
          font-size: 25px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

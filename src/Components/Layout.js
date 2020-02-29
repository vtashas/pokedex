import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Layout = ({ children, setCount, count }) => {
  const path = window.location.href;
  const lastPath = path.substr(path.lastIndexOf("/"));

  useEffect(() => {
    const windows = document.getElementsByClassName("layout-wrapper")[0];
    if (lastPath === "/") {
      windows.addEventListener("scroll", () => {
        if (windows.scrollTop + windows.clientHeight >= windows.scrollHeight) {
          setCount(prevData => prevData + 20);
        }
      });
    }
    console.log(count);
  }, []);

  return (
    <div id="layout-wrapper" className="layout-wrapper">
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          position: "sticky",
          margin: "16px",
          top: "16px",
          fontFamily: "century gothic",
          fontWeight: "bold",
          fontStyle: "italic",
          alignSelf: "start"
        }}
        to={`/`}
      >
        <h1 className="layout-page-title">Pokédex</h1>
      </NavLink>
      <div id="layout-container" className="layout-container">
        {children}
      </div>
      <style jsx="true">{`
        .layout-wrapper {
          display: flex;
          width: 100vw;
          height: 100vh;
          flex-direction: column;
          align-items: center;
          overflow: auto;
        }
        .layout-page-title {
          position: sticky;
          margin: 16px;
          top: 16px;
          font-family: century gothic;
          font-weight: bold;
          font-style: italic;
          align-self: start;
        }
        .layout-wrapper h1 {
          letter-spacing: 2px;
          color: #ffcb05;
          text-shadow: 3px 3px 0 #3466af, -1px -1px 0 #3466af,
            1px -1px 0 #3466af, -1px 1px 0 #3466af, 1px 1px 0 #3466af;
        }
        .layout-container {
          display: flex;
          flex-wrap: wrap;
          max-width: 940px;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

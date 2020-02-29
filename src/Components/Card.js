import React from "react";

export const Card = props => {
  const { imgUrl, description, onClick, number } = props;

  return (
    <div className="card-wrapper" onClick={onClick}>
      <div className="card-container">
        <div className="card-number">#{number}</div>
        {imgUrl ? (
          <img
            src={imgUrl}
            className="card-image"
            alt="this-is-something"
          ></img>
        ) : (
          <div className="card-no-image">Image not found</div>
        )}
        <div className="card-description">{description}</div>
      </div>
      <style jsx="true">{`
        .card-wrapper {
          border: solid 2px black;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          margin: 20px;
          box-shadow: black 10px 10px;
        }
        .card-wrapper:hover {
          cursor: pointer;
          border: solid 2px #ffcb05;
          box-shadow: #3466af 10px 10px;
        }
        .card-container {
          display: flex;
          width: 100px;
          flex-direction: column;
          margin: 25px;
          font-family: courier new;
        }
        .card-number {
          color: #ffcb05;
          font-size: 22px;
          font-weight: bold;
          text-align: center;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        }

        .card-image {
          width: 100%;
        }
        .card-description {
          font-weight: bold;
          font-size: 18px;
          text-align: center;
        }
        .card-description::first-letter {
          font-size: 22px;
          letter-spacing: 2px;
          color: #ffcb05;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        }
        .card-no-image {
          border: solid 2px black;
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 25px 0px;
          background-color: gray;
        }
      `}</style>
    </div>
  );
};

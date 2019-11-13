import React from "react";

export default function Heroe(props) {
  return (
    // <div className="wrapper">
    <div className="contain">
      <div className="text">
        <p style={{ fontFamily: "bold" }}> {props.restaurant.name} </p>
        <p style={{ color: "grey" }}> {props.restaurant.description} </p>
      </div>
      <div className="imageHeroe">
        <img alt="Header" src={props.restaurant.picture} />
      </div>
    </div>

    // </div>
  );
}

import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <button className="validCard">Valide mon panier</button>
      <div className="panier">
        {/* {props.map(list => (
          <li> {list.title} </li>
        ))} */}

        {props.product.map(list => (
          <div>
            <span>
              {list.title} {list.price}
            </span>
          </div>
        ))}
      </div>
      <span className="cardUnpty">Votre panier est vide</span>
    </div>
  );
}

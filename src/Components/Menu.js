import React from "react";

export default function Menu(props) {
  return (
    <div className="containMenu">
      {Object.keys(props.menu).map((category, index) => {
        return (
          <div className="category" key={index}>
            <p>{category}</p>
            <div className="containofMenu">
              {props.menu[category].map((meal, index) => {
                return (
                  <div className="menuContain" key={index}>
                    <div className="textMenu">
                      {meal.title}
                      <span className="spanMenu">{meal.description}</span>
                      {meal.price}
                      {meal.popular}
                      {"€"}
                    </div>

                    {meal.picture === undefined ? null : (
                      <img
                        className="picMenu"
                        alt="picMenu"
                        src={meal.picture}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

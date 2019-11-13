import React from "react";

// {props[category].length ? (
//   <div className=“category”>{category}</div>
// ) : null}

export default function Menu(props) {
  return (
    <div className="containMenu">
      {Object.keys(props.menu).map((category, index) => {
        return (
          <div className="category" key={index}>
            <p>{category}</p>
            <div className="containofMenu">
              {props.menu[category].map((meal, index) => {
                const product = {
                  id: meal.id,
                  title: meal.title,
                  price: meal.price
                };
                return (
                  <div
                    onClick={() => {
                      props.add(product);
                    }}
                    className="menuContain"
                    key={index}
                  >
                    <div className="textMenu">
                      {meal.title}
                      <span className="spanMenu">{meal.description}</span>
                      {meal.price}
                      {"€"}

                      {meal.popular === true ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#f5a623"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeLinejoin="arcs"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <polyline points="17 11 19 13 23 9"></polyline>
                        </svg>
                      ) : null}
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

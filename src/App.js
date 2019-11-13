import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Heroe from "./Components/Heroe";
import Menu from "./Components/Menu";
import Card from "./Components/Card";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);
  const [products, setProducts] = useState(["Test"]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setRestaurant(response.data.restaurant);
    setMenu(response.data.menu);
    setIsLoading(false);
  };

  const addProduct = product => {
    const newProducts = [...products];

    let isFound = false;

    for (let i = 0; i < newProducts.length; i++) {
      if (newProducts[i].id === product.id) {
        newProducts[i].quantity = newProducts[i].quantity + 1;
        isFound = true;

        break;
      }
    }

    if (isFound === false) {
      product.quantity = 1;
      newProducts.push(product);
    }

    products = newProducts;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <div>
          {" "}
          <div className="heroe">
            <Heroe restaurant={restaurant} />
          </div>
          <div className="menuName">
            <Menu menu={menu} />
            <div className="containOfCard">
              <Card />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

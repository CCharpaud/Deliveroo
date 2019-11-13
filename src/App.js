import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Heroe from "./Components/Heroe";
import Menu from "./Components/Menu";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setRestaurant(response.data.restaurant);
    setMenu(response.data.menu);
    setIsLoading(false);
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
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

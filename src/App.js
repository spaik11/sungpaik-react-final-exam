import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";

const App = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers").then(({ data }) => {
      setBeers(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Cards beers={beers} />
    </div>
  );
};

export default App;

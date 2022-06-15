import { useState, useEffect } from "react";

import "./App.scss";

import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";

function App() {
  /* -------------------------------------------------------------------------- */
  /*                                   States                                   */
  /* -------------------------------------------------------------------------- */

  const [beers, setBeers] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                                   Effects                                  */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    getBeers();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };


  return (
    <div className="app">
      <h1>Punk Beers</h1>
      <div className="app__content">
        <Navbar />
        <Main beerArray={beers} />
      </div>
    </div>
  );
}

export default App;

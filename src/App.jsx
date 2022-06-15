import { useState, useEffect } from "react";

import "./App.scss";

import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";

function App() {
  /* -------------------------------------------------------------------------- */
  /*                                   States                                   */
  /* -------------------------------------------------------------------------- */

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  /* -------------------------------------------------------------------------- */
  /*                                   Effects                                  */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    getBeers(searchTerm, filterTerm);
  }, [searchTerm, filterTerm]);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  const getBeers = async (beerName, filter) => {
    let url = "https://api.punkapi.com/v2/beers";

    if (beerName && !filter) {
      url += `?beer_name=${beerName}`;
    } else if (!beerName && filter) {
      url += `?${filter}`;
    } else if (beerName && filter) {
      url += `?beer_name=${beerName}&${filter}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target[0].value);
  };

  const handleFilterClick = (event) => {
    if (event.target.id != "acidic") {
      if (event.target.checked === true) {
        console.log(event.target.value);
        setFilterTerm(event.target.value);
      } else {
        setFilterTerm("");
      }
    } else {
      if (event.target.checked === true) {
        const acidicArray = beers.filter((beer) => {
          return beer.ph < 4;
        });
        setBeers(acidicArray);
      } else {
        setBeers(beers)
      }
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                                   Return                                   */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="app">
      <h1>Punk Beers</h1>
      <div className="app__content">
        <Navbar
          searchFunction={handleSearchInput}
          filterFunction={handleFilterClick}
        />
        <Main beerArray={beers} />
      </div>
    </div>
  );
}

export default App;

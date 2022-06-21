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
  const [filtersArray, setFiltersArray] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                                   Effects                                  */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    getBeers2(searchTerm, filtersArray);
  }, [searchTerm, filtersArray]);

  /* -------------------------------------------------------------------------- */
  /*                                  Function                                  */
  /* -------------------------------------------------------------------------- */

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target[0].value);
  };

  /* ---------------------------- Filter Functions ---------------------------- */

  const pushFiltersToArray = (event) => {
    const copyFiltersArray = [...filtersArray];
    const filter = event.target.value;
    if (event.target.checked === true) {
      console.log(filter);
      copyFiltersArray.push(filter);
    } else {
      if (copyFiltersArray.includes(filter)) {
        copyFiltersArray.pop(filter);
      }
    }
    setFiltersArray(copyFiltersArray);
    console.log(filtersArray);
  };

  const getBeers2 = async (beerName, filters) => {
    let url = "https://api.punkapi.com/v2/beers?";

    if (beerName) {
      url += `beer_name=${beerName}`;
    }

    filters.forEach((filter) => {
      switch (filter) {
        case "abv_gt=6":
          url[url.length - 1] != "?"
            ? (url += `&${filter}`)
            : (url += `${filter}`);
          console.log(url);
          break;
        case "brewed_before=01-2010":
          url[url.length - 1] != "?"
            ? (url += `&${filter}`)
            : (url += `${filter}`);
          console.log(url);
          break;
      }
    });

    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);

    filters.forEach((filter) => {
      switch (filter) {
        case "acidic":
          const acidicArray = data.filter((beer) => {
            return beer.ph < 4;
          });
          setBeers(acidicArray);
          break;
      }
    });
  };

  /* -------------------------------------------------------------------------- */
  /*                                   Return                                   */
  /* -------------------------------------------------------------------------- */

  return (
    <div className="app">
      <h1 className="app__title">Punk Beers</h1>
      <div className="app__content">
        <Navbar
          searchFunction={handleSearchInput}
          filterFunction={pushFiltersToArray}
        />
        <Main beerArray={beers} />
      </div>
    </div>
  );
}

export default App;

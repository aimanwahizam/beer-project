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
  const [dataCopy, setDataCopy] = useState("");
  const [filtersArray, setFiltersArray] = useState([]);

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
    let url = "https://api.punkapi.com/v2/beers?";

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
    setDataCopy(data);
  };

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target[0].value);
  };

  /* ---------------------------- Filter Functions ---------------------------- */

  const urlFilterClick = (event) => {
    if (event.target.checked === true) {
      setFilterTerm(event.target.value);
    } else {
      setFilterTerm("");
    }
  };

  const handleFilterClick = (event) => {
    if (event.target.id === "acidic") {
      if (event.target.checked === true) {
        const acidicArray = beers.filter((beer) => {
          return beer.ph < 4;
        });
        setBeers(acidicArray);
      } else {
        setBeers(dataCopy);
      }
    } else if (event.target.id === "keg") {
      if (event.target.checked === true) {
        const kegArray = beers.filter((beer) => {
          return beer.image_url.includes("/keg");
        });
        setBeers(kegArray);
      } else {
        setBeers(dataCopy);
      }
    } else {
      urlFilterClick(event);
    }
  };

  // Filter Function 2.0

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
    let url = "https://api.punkapi.com/v2/beers";

    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
    setDataCopy(data);

    filters.forEach((filter) => {
      switch (filter) {
        case "abv_gt=6" && "brewed_before=01-2010":
          url += `${filter}`;
          break;
        case "acidic":
          const acidicArray = beers.filter((beer) => {
            return beer.ph < 4;
          });
          setBeers(acidicArray);
          break;
        case "keg":
          const kegArray = beers.filter((beer) => {
            return beer.image_url.includes("/keg");
          });
          setBeers(kegArray);
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

import React from "react";

import "./Navbar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersList from "../FiltersList/FiltersList";

const Navbar = (props) => {
  const {searchFunction, filterFunction} = props;

  return (
    <div className="navbar">
      <SearchBar searchFunction={searchFunction}/>
      <div className="navbar__filters">
        <FiltersList filterFunction={filterFunction}/>
      </div>
    </div>
  );
};

export default Navbar;

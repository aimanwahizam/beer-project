import React from "react";

import "./Navbar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersList from "../FiltersList/FiltersList";

const Navbar = (props) => {
  const {} = props;

  return (
    <div className="navbar">
      <SearchBar/>
      <div className="navbar__filters">
        <FiltersList/>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

import "./Navbar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter"

const Navbar = () => {
  return (
    <div className="navbar">
      NAV
      <SearchBar />
      <Filter />
    </div>
  );
};

export default Navbar;

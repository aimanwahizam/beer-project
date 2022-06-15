import React from "react";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const {searchFunction} = props;

  return (
    <form onSubmit={searchFunction}>
      <input type={"text"} placeholder="Search..." className="search-bar"/>
      <input type={"submit"} />
    </form>
  );
};

export default SearchBar;

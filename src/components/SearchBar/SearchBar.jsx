import React from "react";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const {} = props;

  return (
    <form>
      <input type={"text"} placeholder="Search..." className="search-bar"/>
      <input type={"submit"} />
    </form>
  );
};

export default SearchBar;

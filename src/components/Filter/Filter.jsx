import React from "react";

import "./Filter.scss";

const Filter = (props) => {
  const { title, id, filterClick } = props;

  

  return (
  <div className="filter">
    <label htmlFor={id} className="filter__title">{title}</label>
    <input type="checkbox" id={id} className="filter__box" onChange={filterClick}></input>
  </div>
  );
};

export default Filter;

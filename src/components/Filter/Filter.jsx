import React from "react";

import "./Filter.scss";

const Filter = (props) => {
  const { title, id } = props;

  

  return (
  <div className="filter">
    <label for={id} className="filter__title">{title}</label>
    <input type="checkbox" id={id} className="filter__box"></input>
  </div>
  );
};

export default Filter;

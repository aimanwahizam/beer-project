import React from "react";
import "./Filter.scss";

const Filter = (props) => {
  const { title, id, filterFunction, value } = props;

  return (
    <div className="filter">
      <label htmlFor={id} className="filter__title">
        {title}
      </label>
      <input
        type="checkbox"
        id={id}
        className="filter__box"
        onInput={filterFunction}
        value={value}
      ></input>
    </div>
  );
};

export default Filter;

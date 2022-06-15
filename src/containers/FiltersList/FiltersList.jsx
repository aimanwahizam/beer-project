import React from "react";

import "./FiltersList.scss";
import Filter from "../../components/Filter/Filter";

const FiltersList = (props) => {
  const {} = props;

  return (
    <div className="filter-list">
      <Filter title="High ABV (>6.0%)" id="high-ABV" />
      <Filter title="Classic Range" id="classic-range" />
      <Filter title="Acidic (ph < 4)" id="acidic" />
    </div>
  );
};

export default FiltersList;

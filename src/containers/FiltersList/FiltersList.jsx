import React from "react";

import "./FiltersList.scss";
import Filter from "../../components/Filter/Filter";

const FiltersList = (props) => {
  const { filterFunction } = props;

  return (
    <div className="filter-list">
      <Filter
        title="High ABV (>6.0%)"
        id="high-ABV"
        filterFunction={filterFunction}
        value="abv_gt=6"
      />
      <Filter
        title="Classic Range"
        id="classic-range"
        filterFunction={filterFunction}
      />
      <Filter
        title="Acidic (ph < 4)"
        id="acidic"
        filterFunction={filterFunction}
      />
    </div>
  );
};

export default FiltersList;

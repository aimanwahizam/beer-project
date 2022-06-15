import React from "react";

import "./CardList.scss";
import Card from "../../components/Card/Card";

const CardList = (props) => {
  const { beerArray } = props;

  const beerCardsJSX = beerArray.map((beer) => {
    return (
      <Card
        key={beer.id}
        name={beer.name}
        image={beer.image_url}
        tagline={beer.tagline}
        description={beer.description}
      />
    );
  });
  return (
    <div className="card-grid">
      {beerCardsJSX}
    </div>
  );
};

export default CardList;

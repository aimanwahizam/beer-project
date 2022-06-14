import React from 'react';

import "./Main.scss";
import CardList from '../CardList/CardList';

const Main = (props) => {
  const {beerArray} = props;
  return (
    <div>
      <CardList beerArray={beerArray}/>
    </div>
  )
}

export default Main
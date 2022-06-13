import React from 'react';

import "./CardList.scss";
import Card from '../../components/Card/Card';

const CardList = () => {
  return (
    <div className='card-grid'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default CardList
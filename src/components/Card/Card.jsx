import React from 'react';

import "./Card.scss";
import image from "../../assets/images/beer.webp"

const Card = () => {
  return (
    <div className='card'>
        <img src={image} alt="Beer" className='card__image'/>
        <h2 className='card__title'>Best Beer</h2>
        <h3 className='card_info'>Here is all the most important info about beer.</h3>
    </div>
  )
}

export default Card
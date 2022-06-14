import React from 'react';

import "./Card.scss";

const Card = (props) => {
  const {name, image, tagline, description} = props;

  return (
    <div className='card'>
        <img src={image} alt={name} className='card__image'/>
        <h2 className='card__title'>{name}</h2>
        <h3 className='card_tagline'>{tagline}</h3>
        <h4 className='card_info'>{description}</h4>
    </div>
  )
}

export default Card
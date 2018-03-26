import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({card, controlFunction}) => {
  
  const keys = Object.keys(card)
    .filter(key => key !== 'name' && key !== 'isActive');
  
  const newCardInfo = keys.map((element, idx) => {
    return <p 
      className={'card-info ' + element} 
      key={idx}><strong>{element}</strong> : {card[element]}</p>;
  });

  let active = card.isActive ? 'active' : '';

  return (
    <li className={'card ' + active} 
      onClick={() => controlFunction(card)}
    >
      <h2 className='card-title'>{card.name}</h2>
      {newCardInfo}
      <button
        className='favorites-btn-card'
        name='favorites-card'
      >Favorite
      </button>
    </li>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  controlFunction: PropTypes.func
};

export default Card ;


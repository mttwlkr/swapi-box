import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CardContainer = ({cards, controlFunction}) => {
  const newCards = cards.map((card, idx) => {
    return <Card 
      card={card} 
      controlFunction={controlFunction} 
      key={idx} 
    />;
  });
  
  return (
    <section className="card-container">
      {newCards}
    </section>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array,
  controlFunction: PropTypes.func
};

export default CardContainer;

import React from 'react'
// import Button from '../Button/Button.js'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({card, controlFunction}) => {
  
  const keys = Object.keys(card).filter(key => key !== 'name')
  
  const newCardInfo = keys.map((element, idx) => {
    return <p className={element} key={idx}>{element} : {card[element]}</p>
  })

  return (
    <li className='card'>
      <h2 className='card-title'>{card.name}</h2>
      <button
        className='favorites-card'
        name='favorites-card'
        onClick={() => controlFunction(card)}
      >favorites-card
      </button>
      {newCardInfo}
    </li>
  )
}

Card.propTypes = {
  card: PropTypes.object,
  controlFunction: PropTypes.func
}

export default Card 


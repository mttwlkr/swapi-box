import React from 'react'
import Button from '../Button/Button.js'
import './Card.css'

const Card = ({card, controlFunction}) => {
  
  const keys = Object.keys(card).filter(key => key !== 'name')
  
  const newCardInfo = keys.map((element, idx) => {
    return <p className={element} key={idx}>{element} : {card[element]}</p>
  })

  return (
    <li className='card'>
      <h2 className='card-title'>{card.name}</h2>
      <Button 
        name='favorites-card'
        controlFunction={() => controlFunction(card)}
      />
      {newCardInfo}
    </li>
  )
}

export default Card 


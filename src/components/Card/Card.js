import React from 'react'
import Button from '../Button/Button.js'
import './Card.css'

const Card = ({card, controlFunction}) => {
  const keys = Object.keys(card)
  const newCardInfo = keys.map((element, idx) => {
    return <li className={element} key={idx}>{element} : {card[element]}</li>
  })

  return (
    <div>
      {newCardInfo}
    </div>
  )
}

export default Card 

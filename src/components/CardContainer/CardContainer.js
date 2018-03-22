import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card.js'

const CardContainer = ({people, controlFunction}) => {
  const newCards = people.map((unit, idx) => {
    return <Card unit={unit} controlFunction={controlFunction} key={idx}/>
  })
  
  return (
    <ul className="card-container">
      {newCards}
    </ul>
  )
}

export default CardContainer 
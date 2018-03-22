import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card.js'

const CardContainer = ({people}) => {
  const newCards = people.map((unit, idx) => {
    return <Card unit={unit} key={idx}/>
  })
  
  return (
    <ul className="card-container">
      {newCards}
    </ul>
  )
}

export default CardContainer 
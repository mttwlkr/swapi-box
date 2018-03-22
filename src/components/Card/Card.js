import React from 'react'
import Button from '../Button/Button.js'
import './Card.css'

const Card = ({unit, controlFunction}) => {
  const {personName, planetName, species, population} = unit
  return (
    <li className="card">
      <header>
        <h1 className="card-info card-title">{personName}</h1>
        <Button 
          className="card-favorite-button"
          name="favorites-card"
          controlFunction={controlFunction}
        />
      </header>
      <h2 className="card-info card-name">{planetName}</h2>
      <p className="card-info card-sub">{species}</p>
      <p className="card-info card-footer">{population}</p>
    </li>
  )
}

export default Card 
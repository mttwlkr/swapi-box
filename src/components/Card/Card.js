import React from 'react'
import './Card.css'

const Card = ({unit}) => {
  const {personName, planetName, species, population} = unit
  return (
    <li className="card">
      <h1 className="card-info card-title">{personName}</h1>
      <h2 className="card-info card-name">{planetName}</h2>
      <p className="card-info card-sub">{species}</p>
      <p className="card-info card-footer">{population}</p>
    </li>
  )
}

export default Card 
import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({card, controlFunction}) => {
  
  const keys = Object.keys(card).filter(key => key !== 'name')
  
  const newCardInfo = keys.map((element, idx) => {
    return <p className={'card-info ' + element} key={idx}>{element} : {card[element]}</p>
  })

  return (
    <li className='card'>
      <div className='card-header-div'>
        <h2 className='card-title'>{card.name}</h2>
        <button
          className='favorites-btn-card'
          name='favorites-card'
          onClick={() => controlFunction(card)}
        >Favorite
        </button>
      </div>
      {newCardInfo}
    </li>
  )
}

Card.propTypes = {
  card: PropTypes.object,
  controlFunction: PropTypes.func
}

export default Card 


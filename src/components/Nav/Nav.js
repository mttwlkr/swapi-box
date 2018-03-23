import React from 'react'
import './Nav.css'

const Nav = (props) => {
  return (
    <nav className='button-nav'>
      <button
        className='nav-button people-button'
        name='people'
        onClick={props.controlFunction}>
        People
      </button>
      <button
        className='nav-button planets-button'
        name='planets'
        onClick={props.controlFunction}>
        Planets
      </button>      
      <button
        className='nav-button vehicles-button'
        name='vehicles'
        onClick={props.controlFunction}>
        Vehicles
      </button>
    </nav>
  )
}

export default Nav;
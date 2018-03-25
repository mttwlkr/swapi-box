import React from 'react'
import './Header.css'
import logo from './swapi-box-logo.png'

const Header = (props) => {
  return (
    <header className='header'>
      <img src={logo} alt="Swapi Box" />
      <div className='favorites-button-div'>
        <button
        className='favorites-button'
        name='favorites-nav'
        onClick={props.controlFunction}
        >Your Favorites
        </button>
        <span>{props.value.length}</span>
      </div>
    </header>
  )
}

export default Header;
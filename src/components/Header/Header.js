import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header className='header'>
      <h1>Swapi Box</h1>
      <div className='favorites-button-div'>
        <button
        className='favorites-button'
        name='favorites-nav'
        onClick={props.controlFunction}
        >favorites-nav
        </button>
        <span>{props.value.length}</span>
      </div>
    </header>
  )
}

export default Header;
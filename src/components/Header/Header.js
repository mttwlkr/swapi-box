import React from 'react'
import Button from '../Button/Button.js'
import './Header.css'

const Header = (props) => {
  return (
    <header className='header'>
      <h1>Swapi Box</h1>
      <div className='favorites-button-div'>
        <Button 
        name="favorites-nav"
        controlFunction={props.controlFunction}
      />
        <span>{props.value.length}</span>
      </div>

    </header>
  )
}

export default Header;
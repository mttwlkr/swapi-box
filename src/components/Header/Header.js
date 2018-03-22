import React from 'react'
import Button from '../Button/Button.js'
import './Header.css'

const Header = (props) => {
  return (
    <header className='header'>
      <h1>Swapi Box</h1>
      <Button 
        name="favorites-nav"
        controlFunction={props.controlFunction}
      />
    </header>
  )
}

export default Header;
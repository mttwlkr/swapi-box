import React from 'react'
import Button from '../Button/Button.js'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1>Swapi Box</h1>
      <Button 
        name="favorites"
      />
    </header>
  )
}

export default Header;
import React from 'react'
import Button from '../Button/Button.js'
import './Nav.css'

const Nav = ({handleClick}) => {

  return (
    <div>
      <Button 
        name='people'
        onClick={handleClick}
      />
      <Button 
        name='planets'
        onClick={handleClick}
      />
      <Button 
        name='vehicles'
        onClick={handleClick}
      />
    </div>
  )
}

export default Nav;
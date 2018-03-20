import React from 'react'
import Button from '../Button/Button.js'
import './Nav.css'

const Nav = () => {
  return (
    <div>
      <Button 
        name='people'
      />
      <Button 
        name='planets'
      />
      <Button 
        name='vehicles'
      />
    </div>
  )
}

export default Nav;
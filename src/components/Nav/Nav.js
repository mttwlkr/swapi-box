import React from 'react'
import Button from '../Button/Button.js'
import './Nav.css'

const Nav = (props) => {
  return (
    <nav className='button-nav'>
      <Button 
        name='people'
        controlFunction={props.controlFunction}
      />
      <Button 
        name='planets'
        controlFunction={props.controlFunction}
      />
      <Button 
        name='vehicles'
        controlFunction={props.controlFunction}
      />
    </nav>
  )
}

export default Nav;
import React from 'react'
import './Button.css'

const Button = ({name}) => {
  
  return (
    <button 
      className={name}
      name={name}
    >{name}</button>
  )
}

export default Button;
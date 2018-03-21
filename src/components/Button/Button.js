import React from 'react'
import './Button.css'

const Button = ({name, controlFunction}) => {
  return (
    <button 
      className={"button" + name}
      name={name}
      onClick={controlFunction}
    >{name}</button>
  )
}

export default Button;
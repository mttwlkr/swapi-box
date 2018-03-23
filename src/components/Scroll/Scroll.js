import React from 'react'
import './Scroll.css'

const Scroll = ({scroll}) => {
  const {title, text, date} = scroll
  return (
    <div>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Scroll
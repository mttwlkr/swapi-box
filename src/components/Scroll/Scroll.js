import React from 'react'
import './Scroll.css'

const Scroll = (props) => {
  const {title, scroll, date} = props.scroll
  return (
    <div>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <p>{scroll}</p>
    </div>
  )
}

export default Scroll
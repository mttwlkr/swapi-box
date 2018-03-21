import React from 'react'
import './Scroll.css'

const Scroll = (props) => {
  const {title, scroll, date} = props.scroll
  return (
    <div>
      {title}
      {date}
      {scroll}
    </div>
  )
}

export default Scroll
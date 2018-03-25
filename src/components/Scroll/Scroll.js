import React from 'react'
import './Scroll.css'

const Scroll = ({scroll}) => {
  const {title, text, date} = scroll
  return (
    <section className='star-wars'>  
      <div className='crawl'>
        <div className='title'>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p>{text}</p>
      </div>
    </section>
  )
}

export default Scroll
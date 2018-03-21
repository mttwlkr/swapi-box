import React from 'react';
import Scroll from '../Scroll/Scroll.js'
import './Main.css'

const Main = ({scroll}) => {
  return (
    <div>
      <Scroll scroll={scroll}/>
    </div>
  )
}

export default Main;
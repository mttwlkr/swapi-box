import React from 'react';
import Scroll from '../Scroll/Scroll.js'
import CardContainer from '../CardContainer/CardContainer.js'
import './Main.css'

const Main = ({scroll, people, controlFunction}) => {
  return (
    <div>
      <div className="scroll-div">
      {!people && <Scroll scroll={scroll}/>}
      </div>
      {people && <CardContainer people={people} controlFunction={controlFunction}/>}
    </div>
  )
}

export default Main;
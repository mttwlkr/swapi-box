import React from 'react';
import Scroll from '../Scroll/Scroll.js'
import CardContainer from '../CardContainer/CardContainer.js'
import './Main.css'

const Main = ({info, scroll, controlFunction}) => {
  return (
    <div>
      <div className="scroll-div">
      {info.length === 0 && <Scroll scroll={scroll}/>}
      </div>
      <div className="card-div">
      {info.length > 0 && <CardContainer info={info} controlFunction={controlFunction}/>}
      </div>
    </div>
  )
}

export default Main;
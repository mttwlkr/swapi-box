import React from 'react';
import Scroll from '../Scroll/Scroll.js'
import CardContainer from '../CardContainer/CardContainer.js'
import './Main.css'

const Main = ({cards, scroll, controlFunction}) => {
  return (
    <div>
      { cards.length === 0 &&
        <div className="scroll-div">
          <Scroll scroll={scroll}/>
        </div>
      }
      { cards.length > 0 &&
        <div className="card-div">
          <CardContainer cards={cards} controlFunction={controlFunction}/>
        </div>
      }
    </div>
  )
}

export default Main;
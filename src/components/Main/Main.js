import React from 'react';
import Scroll from '../Scroll/Scroll.js'
import './Main.css'

const Main = ({scroll}) => {
  return (
    <div>
      <Scroll scroll={scroll}/>
      <div>
      Turmoil has engulfed the
      Galactic Republic. The taxation
      of trade routes to outlying star
      systems is in dispute.
      
      Hoping to resolve the matter
      with a blockade of deadly
      battleships, the greedy Trade
      Federation has stopped all
      shipping to the small planet
      of Naboo.
      
      While the Congress of the
      Republic endlessly debates
      this alarming chain of events,
      the Supreme Chancellor has
      secretly dispatched two Jedi
      Knights, the guardians of
      peace and justice in the
      galaxy, to settle the conflict....
      </div>
    </div>
  )
}

export default Main;
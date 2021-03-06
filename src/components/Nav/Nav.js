import React from 'react';
import './Nav.css';
import PropTypes from 'prop-types';

const Nav = (props) => {
  return (
    <nav className='button-nav'>
      <button
        className='button people-button'
        name='people'
        onClick={props.controlFunction}>
        People
      </button>
      <button
        className='button planets-button'
        name='planets'
        onClick={props.controlFunction}>
        Planets
      </button>      
      <button
        className='button vehicles-button'
        name='vehicles'
        onClick={props.controlFunction}>
        Vehicles
      </button>
    </nav>
  );
};

Nav.propTypes = {
  controlFunction: PropTypes.func
};

export default Nav;
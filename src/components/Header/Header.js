import React from 'react';
import './Header.css';
import logo from './swapi-box-logo.png';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='logo-div'>
        <img src={logo} alt="Swapi Box" />
      </div>
      <div 
      className='favorites-button-div'
      onClick={props.controlFunction}
      >
        <button
          className='favorites-button'
          name='favorites-nav'
        >Favorites
        </button>
        <span>{props.value.length}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  value: PropTypes.array,
  controlFunction: PropTypes.func
};

export default Header;
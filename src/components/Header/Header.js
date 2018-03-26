import React from 'react';
import './Header.css';
import logo from './swapi-box-logo.png';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className='header'>
      <img src={logo} alt="Swapi Box" />
      <div className='favorites-button-div'>
        <button
          className='favorites-button'
          name='favorites-nav'
          onClick={props.controlFunction}
        >Your Favorites
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
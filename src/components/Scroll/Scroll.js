import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';

const Scroll = ({scroll}) => {
  const {title, text, date} = scroll;

  setTimeout(() => {
    
  }, 30000);

  return (
    <div className='fade'>
      <section className='star-wars'>  
        <div className='crawl'>
          <div className='title'>
            <p>{date}</p>
            <h1>{title}</h1>
          </div>
          <p>{text}</p>
        </div>
      </section>
    </div>
  );
};

Scroll.propTypes = {
  scroll: PropTypes.object
};

export default Scroll;
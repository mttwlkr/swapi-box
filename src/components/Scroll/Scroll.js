import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';

const Scroll = ({scroll}) => {
  const {title, text, date} = scroll;

  return (
    <section className='star-wars'>  
      <div className='crawl'>
        <div className='title'>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <p>{text}</p>
        <br />
        { title && <p 
          className='option'>Please click on an option above to continue...</p>
        }
      </div>
    </section>
  );
};

Scroll.propTypes = {
  scroll: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};



export default Scroll;
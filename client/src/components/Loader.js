import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '200px',
        height: '200px',
        margin: 'auto',
        display: 'block'
      }}
    >
      <span className='sr-only'>Loading.....Loading...🌶  🎭 🖊 🐤</span>
    </Spinner>
  )
}

export default Loader;


import React from 'react';

import './filter.css';

const Filter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-outline-info active">Left</button>
      <button type="button" className="btn btn-outline-info">Middle</button>
      <button type="button" className="btn btn-outline-info">Right</button>
    </div>
  );
}

export default Filter;


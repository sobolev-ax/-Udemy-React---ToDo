import React, { Component } from 'react';

import './filter.css';

export default class Filter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-outline-info active">Left</button>
        <button type="button" className="btn btn-outline-info">Middle</button>
        <button type="button" className="btn btn-outline-info">Right</button>
      </div>
    );
  }
}

import React, { Component } from 'react';

import './item.css';

export default class Item extends Component {
  render() {

    const { label, important = false } = this.props;

    const isImportant = important ? 'text-danger' : '';

    return (
      <span className="d-flex justify-content-between">
        <span className={`c-item-label ${isImportant}`}>
          { label }
        </span>

        <span>
          <button className="btn c-btn btn-sm btn-outline-danger mr-1" type="button">
            Delete
          </button>
          <button className="btn c-btn btn-sm btn-outline-primary" type="button">
            Toggle
          </button>
        </span>
      </span>
    );
  }
}

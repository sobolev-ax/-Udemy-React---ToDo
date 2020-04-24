import React, { Component } from 'react';

import './item.css';

export default class Item extends Component {

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  }

  render() {

    const { label, important = false } = this.props;

    const isImportant = important ? 'text-danger' : '';

    return (
      <span className="d-flex justify-content-between">
        <span className={`c-item-label ${isImportant}`}
          onClick={ this.onLabelClick }>
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

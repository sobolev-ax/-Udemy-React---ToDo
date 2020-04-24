import React, { Component } from 'react';
import classNames from 'classnames';

import './item.css';

export default class Item extends Component {

  state = {
    done: false,
    important: false,
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      }
    });
  }

  onImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      }
    });
  }

  render() {

    const { label } = this.props;
    const { done, important } = this.state;

    const labelClasses = classNames(
      'c-item-label',
      {
        'c-item-label-important': important,
        'c-item-label-done': done,
      }
    );

    return (
      <span className="d-flex align-items-center justify-content-between">
        <span className={ labelClasses }
          onClick={ this.onLabelClick }>
          { label }
        </span>

        <span>
          <button className="btn c-btn btn-sm btn-outline-danger mr-1" type="button">
            Delete
          </button>
          <button className="btn c-btn btn-sm btn-outline-primary"
            type="button"
            onClick={ this.onImportantClick }>
            Toggle
          </button>
        </span>
      </span>
    );
  }
}

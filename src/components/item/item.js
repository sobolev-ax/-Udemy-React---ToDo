import React, { Component } from 'react';
import classNames from 'classnames';

import './item.css';

export default class Item extends Component {

  state = {
    done: false,
  }

  onLabelClick = () => {
    this.setState({
      done: !this.state.done,
    });
  }

  render() {

    const { label, important = false } = this.props;
    const { done } = this.state;

    const labelClasses = classNames(
      'c-item-label',
      {
        'text-danger': important,
        'c-item-label-done': done,
      }
    );

    return (
      <span className="d-flex justify-content-between">
        <span className={ labelClasses }
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

import React from 'react';
import classNames from 'classnames';

import './item.css';

const Item = ({ label, done, important, onDeleted, onImportant, onDone }) => {

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
        onClick={ onDone }>
        { label }
      </span>

      <span>
        <button className="btn c-btn btn-sm btn-outline-danger mr-1"
          type="button"
          onClick={ onDeleted }>
          Delete
        </button>
        <button className="btn c-btn btn-sm btn-outline-primary"
          type="button"
          onClick={ onImportant }>
          Toggle
        </button>
      </span>
    </span>
  );
}

export default Item;

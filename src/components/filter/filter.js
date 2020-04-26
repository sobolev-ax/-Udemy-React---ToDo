import React from 'react';
import classNames from 'classnames';

import './filter.css';

const Filter = ({ filters, onFilter }) => {

    return (
      <div className="btn-group">
        {
          filters.map(({ label, id, active }) => {

            const btnClasses = classNames(
              'btn',
              'btn-outline-info',
              {
                'active': active
              }
            );

            return (
              <button type="button"
                onClick={ () => onFilter(id) }
                key={ id }
                className={ btnClasses }>
                { label }
              </button>
            )
          })
        }
      </div>
    );
}

export default Filter;

import React from 'react';

import Item from '../item';

import './list.css';

const List = ({ data, onDeleted }) => {
  const items = data.map((item) => {

    const { id, ...itemProps} = item;

    return (
      <li key={id} className="c-list-group-item list-group-item">
        <Item {...itemProps} onDeleted={ () => onDeleted(id) } />
      </li>
    );
  });

  return (
    <ul className="list-group">
      { items }
    </ul>
  );
}

export default List;

import React from 'react';

import Item from './item';

const List = ({ data }) => {
  const items = data.map((item) => {

    const { id, ...itemProps} = item;

    return (
      <li key={id}>
        <Item {...itemProps} />
      </li>
    );
  });

  return (
    <ul>
      { items }
    </ul>
  );
}

export default List;

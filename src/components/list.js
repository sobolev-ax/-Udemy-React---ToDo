import React from 'react';

import Item from './item';

const List = ({ items }) => {
  const elements = items.map((item) => {
    return <li><Item {...item} /></li>
  });

  return (
    <ul>
      { elements }
    </ul>
  );
}

export default List;

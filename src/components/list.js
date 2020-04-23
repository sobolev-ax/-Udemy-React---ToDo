import React from 'react';

import Item from './item';

const List = () => {
  return (
    <ul>
      <li><Item label="Do sport" important /></li>
      <li><Item label="Drink coffee" /></li>
      <li><Item label="Read book" /></li>
    </ul>
  );
}

export default List;

import React from 'react';

const Item = ({ label, important = false }) => {
  const style = {
    color: important ? 'Tomato' : 'inherit',
  };

  return <span style={style} >{ label }</span>
}

export default Item;

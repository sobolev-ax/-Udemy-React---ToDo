import React from 'react';

const Control = ({ onAdded }) => {
  return (
    <div className="mt-3">
      <button type="button"
        className="btn btn-primary"
        onClick={ () => onAdded('Go to shop') } >
        Go to shop
      </button>
    </div>
  );
}

export default Control;

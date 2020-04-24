import React from 'react';

import './header.css';

const Header = ({done, left}) => {
  return (
    <header className="d-flex justify-content-between align-items-end mb-4">
      <h1>Stay at home</h1>
      <span className="text-muted">
        {left} more to do, {done} done
      </span>
    </header>
  );
}

export default Header;

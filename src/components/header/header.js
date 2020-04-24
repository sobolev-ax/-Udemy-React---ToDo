import React from 'react';

import './header.css';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-end mb-4">
      <h1>Stay at home</h1>
      <span className="text-muted">
        1 more to do, 1 done
      </span>
    </header>
  );
}

export default Header;

import React from 'react';

import Filter from '../filter';

import './search.css';

const Search = () => {
  const holder = 'Type here to search';

  return (
    <section className="d-flex justify-content-between mb-2">
      <input type="text" placeholder={holder} className="form-control mr-1" />

      <Filter />
    </section>
  );
}

export default Search;

import React from 'react';

import Filter from '../filter';

import './search.css';

const Search = ({ onSearch, onFilter, search, filters }) => {
  const holder = 'Type here to search';

  return (
    <section className="d-flex justify-content-between mb-2">
      <input type="text"
        onChange={ (e) => onSearch(e.target.value) }
        value={ search }
        placeholder={ holder }
        className="form-control mr-1" />

      <Filter filters={ filters } onFilter={ onFilter } />
    </section>
  );
}

export default Search;

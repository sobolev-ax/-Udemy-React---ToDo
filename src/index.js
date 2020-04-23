import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Search from './components/search';
import List from './components/list';

const App = () => {
  return (
    <main>
      <Header />
      <Search />
      <List />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

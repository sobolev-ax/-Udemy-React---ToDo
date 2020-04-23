import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Search from './components/search';
import List from './components/list';

const App = () => {
  const todos = [
    { label: "Do sport", important: true, },
    { label: "Drink coffee", important: false, },
    { label: "Read book", important: false, },
  ];

  return (
    <main>
      <Header />
      <Search />
      <List items={ todos } />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

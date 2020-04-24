import React from 'react';

import Header from '../header';
import Search from '../search';
import List from '../list';

import './app.css';

const App = () => {
  const todoData = [
    { label: "Do sport", important: true, id: 1, },
    { label: "Drink coffee", important: false, id: 2, },
    { label: "Read book", important: false, id: 3, },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
          <div className="col-xl-6">

            <Header />
            <Search />
            <List data={ todoData } onDeleted={(id) => console.log('del', id)} />

          </div>
      </div>
    </div>
  );
}

export default App;

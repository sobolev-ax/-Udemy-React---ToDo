import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Search from './components/search';
import List from './components/list';

import './index.css';

const App = () => {
  const todos = [
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
            <List data={ todos } />

          </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

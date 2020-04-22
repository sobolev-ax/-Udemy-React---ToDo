import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return <h1>Stay at home</h1>;
}

const Search = () => {
  return <input type="text" placeholder="search" />;
}

const List = () => {
  return (
    <ul>
      <li>Do exercises</li>
      <li>Drink coffee</li>
    </ul>
  );
}


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

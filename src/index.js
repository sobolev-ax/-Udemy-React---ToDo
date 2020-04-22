import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return <h1>Stay at home</h1>;
}

const Search = () => {
  const holder = 'Type here to search';

  return <input type="text" placeholder={holder} />;
}

const List = () => {
  const todo = ['Do exercises','Drink coffee'];

  return (
    <ul>
      <li>{ todo[0] }</li>
      <li>{ todo[1] }</li>
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

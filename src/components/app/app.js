import React, { Component } from 'react';

import Header from '../header';
import Search from '../search';
import List from '../list';
import Control from '../control';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: "Do sport", important: true, id: 1, },
      { label: "Drink coffee", important: false, id: 2, },
      { label: "Read book", important: false, id: 3, },
    ],
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((item) => item.id !== id)
    }))
  }

  addItem = (label) => {
    this.setState(({ todoData }) => ({
      todoData: [
        ...todoData,
        {
          label,
          important: false,
          id: todoData[todoData.length - 1].id + 1
        }
      ]
    }));
  }

  render() {
    const { todoData } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6">
  
              <Header />
              <Search />
              <List data={ todoData } onDeleted={ this.deleteItem } />
              <Control onAdded={ this.addItem } />
  
            </div>
        </div>
      </div>
    );
  }
}

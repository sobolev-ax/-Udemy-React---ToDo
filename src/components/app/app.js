import React, { Component } from 'react';

import Header from '../header';
import Search from '../search';
import List from '../list';
import Control from '../control';

import './app.css';

export default class App extends Component {

  itemId = 0;

  createItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.itemId++,
    }
  }

  toggleItem = (data, id, property) => {
    return data.map((item) => {
      const value = item.id === id ? !item[property] : item[property];

      return {
        ...item,
        [property]: value
      }
    });
  }

  state = {
    search: '',
    todoData: [
      this.createItem('Do sport'),
      this.createItem('Drink coffee'),
      this.createItem('Read book'),
    ],
  }

  getData = () => {
    const { search, todoData } = this.state;

    return todoData.filter((item) => {
      return search === '' || item.label.toLowerCase().includes(search.toLowerCase())
    })
  }

  searchItem = (search) => {
    this.setState({
      search
    })
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
        this.createItem(label),
      ]
    }));
  }

  doneItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleItem(todoData, id, 'done')
    }))
  }

  importantItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleItem(todoData, id, 'important')
    }))
  }

  render() {
    const { todoData } = this.state;

    const done = todoData.filter(item => item.done).length;
    const left = todoData.length - done;

    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6">
  
              <Header done={done} left={left} />
              <Search onSearch={ this.searchItem } />
              <List data={ this.getData() }
                onDeleted={ this.deleteItem }
                onDone={ this.doneItem }
                onImportant={ this.importantItem } />
              <Control onAdded={ this.addItem } />
  
            </div>
        </div>
      </div>
    );
  }
}

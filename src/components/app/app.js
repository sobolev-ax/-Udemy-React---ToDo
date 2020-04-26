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

  createFilter = (label, active = false) => {
    return {
      label,
      active,
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
    filters: [
      this.createFilter('All', true),
      this.createFilter('Active'),
      this.createFilter('Done'),
    ],
    todoData: [
      this.createItem('Do sport'),
      this.createItem('Drink coffee'),
      this.createItem('Read book'),
    ],
  }

  getData = () => {
    const { search, todoData, filters } = this.state;
    const filter = filters.find((filter) => filter.active).label;

    const isSearch = (search, item) => search === '' || item.label.toLowerCase().includes(search.toLowerCase());

    const isFilter = (filter, item) => {
      if (filter === 'All')
        return true;
      
      if (filter === 'Done')
        return item.done

      if (filter === 'Active')
        return !item.done
    }

    return todoData.filter((item) => {
      return isSearch(search, item) && isFilter(filter, item)
    })
  }

  filterItem = (id) => {
    this.setState(({ filters }) => {
      return {
        filters: filters.map((filter) => {
          return {
            ...filter,
            active: id === filter.id
          }
        })
      }
    });
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
    const { todoData, search, filters } = this.state;

    const done = todoData.filter(item => item.done).length;
    const left = todoData.length - done;

    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-6">
  
              <Header done={done} left={left} />
              <Search search={ search }
                onSearch={ this.searchItem }
                filters={ filters }
                onFilter={ this.filterItem } />
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

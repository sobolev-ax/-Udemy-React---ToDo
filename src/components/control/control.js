import React, { Component } from 'react';

export default class Control extends Component {

  state = {
    label: ''
  }

  change = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault();

    const { onAdded } = this.props;

    this.setState(({ label }) => {

      if(label === '')
        return;

      onAdded(label);

      return {
        label: ''
      }
    })
  }

  render() {
    const { label } = this.state;

    return (
      <form className="mt-3" onSubmit={ this.submit }>
        <div className="input-group">
          <input type="text"
            placeholder="Type here to add item..."
            className="form-control"
            onChange={ this.change }
            value={ label } />
          <div className="input-group-append">
            <button type="submit"
              disabled={!label}
              className="btn btn-primary">
              Add item
            </button>
          </div>
        </div>
      </form>
    );
  }
}

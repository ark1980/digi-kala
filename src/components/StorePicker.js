import React, { Component } from 'react';
import { randomCity } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();
  
  componentDidMount() {
    this.myInput.current.focus();
  }

  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input 
          type="text"
          ref={this.myInput}
          defaultValue={randomCity()}
        />
        <button typer="submit">Submit</button>
      </form>
    )
  } 
}

export default StorePicker;
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    term1: '',
    term2: '',
    width: '',
    height: ''
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState(
      {
        [name]: value
      },
      this.findValue
    );
  };

  findValue = () => {
    if (this.state.term1 && this.state.term2 && this.state.width) {
      const height = (this.state.term2 * this.state.width) / this.state.term1;
      this.setState({
        height: height
      });
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Ratio</h1>
        </header>
        <section className="preview" />
        <section className="controls">
          <div className="terms">
            <label>Ratio A</label>
            <input
              name="term1"
              type="number"
              value={this.state.term1}
              onChange={this.handleChange}
            />
            <label>Ratio B</label>
            <input
              name="term2"
              type="number"
              value={this.state.term2}
              onChange={this.handleChange}
            />
          </div>
          <div className="values">
            <label>Width</label>
            <input
              name="width"
              type="number"
              value={this.state.width}
              onChange={this.handleChange}
            />
            <label>Height</label>
            <input
              name="height"
              type="number"
              value={this.state.height}
              disabled={true}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;

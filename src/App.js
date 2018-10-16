import React, { Component } from 'react';
import './App.css';

// const previewBoxStyle = `{
//   width: '300px',
//   height: ${(this.state.term2 * 300) / this.state.term1}
// }`;

class App extends Component {
  state = {};

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
        <section className="preview">
          <div className="preview-box">
            <p>
              {this.state.width} × {this.state.height}
            </p>
          </div>
        </section>
        <section className="controls">
          <div className="terms">
            <input
              name="term1"
              type="number"
              value={this.state.term1}
              onChange={this.handleChange}
            />
            {' : '}
            <input
              name="term2"
              type="number"
              value={this.state.term2}
              onChange={this.handleChange}
            />
            <div>=</div>
          </div>
          <div className="values">
            <input
              name="width"
              type="number"
              value={this.state.width}
              onChange={this.handleChange}
            />
            {' : '}
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

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    term1: 3,
    term2: 2,
    width: 960
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
    const height = Math.round(
      (this.state.term2 * this.state.width) / this.state.term1
    );
    this.setState({
      height: height
    });
  };

  componentDidMount() {
    this.findValue();
  }
  render() {
    return (
      <div className="App">
        <main>
          <section className="controls">
            <div className="controls-wrap">
              <h1>Ratio</h1>
              <div className="terms">
                <input
                  name="term1"
                  type="number"
                  value={this.state.term1}
                  onChange={this.handleChange}
                  min="1"
                />
                <span class="colon">:</span>
                <input
                  name="term2"
                  type="number"
                  value={this.state.term2}
                  onChange={this.handleChange}
                  min="1"
                />
              </div>
              <div className="values">
                <input
                  name="width"
                  type="number"
                  value={this.state.width}
                  onChange={this.handleChange}
                  min="1"
                />
                <span class="colon">:</span>
                <input
                  name="height"
                  type="number"
                  value={this.state.height}
                  disabled={true}
                />
              </div>
            </div>
          </section>
          <section className="preview">
            <div
              className="preview-box"
              style={{
                width: '360px',
                height: (this.state.term2 * 360) / this.state.term1
              }}
            >
              <p>
                {this.state.width}
                <span class="times"> × </span>
                {this.state.height}
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

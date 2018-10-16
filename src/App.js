import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    ratio: '',
    value1: '',
    value2: ''
  };

  // handleChange = event => {
  //   const { value, name } = event.target;
  //   this.setState(
  //     {
  //       [name]: value
  //     },
  //     this.setValues
  //   );
  // };

  // setValues = () => {
  //   const numerator = 4;
  //   const denominator = 3;
  //   const v1 = (numerator * this.state.value2) / denominator;
  //   const v2 = (denominator * this.state.value1) / numerator;
  //   this.setState({
  //     value1: v1,
  //     value2: v2
  //   });
  // };

  changeRatio = event => {
    this.setState(
      {
        ratio: event.target.value
      },
      this.setValues
    );
  };

  setValues = () => {
    const ratioValues = this.state.ratio.split(':');
    const ratioNum = ratioValues[0];
    const ratioDen = ratioValues[1];
    // const v1 = (ratioNum * this.state.value2) / ratioDen;
    const v2 = (ratioDen * this.state.value1) / ratioNum;
    console.log(v2);
    this.setState({
      value2: v2
    });
  };

  changeValue1 = event => {
    this.setState(
      {
        value1: event.target.value
      },
      this.setValues
    );
  };
  changeValue2 = event => {
    this.setState({
      value2: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>Ratio</h1>
        </header>
        <section className="preview" />
        <section className="controls">
          <select
            name="ratio"
            value={this.state.value}
            onChange={this.changeRatio}
          >
            <option value="1:1">1:1</option>
            <option value="4:3">4:3</option>
            <option value="3:2">3:2</option>
            <option value="8:5">8:5</option>
            <option value="5:3">5:3</option>
            <option value="16:9">16:9</option>
            <option value="2:1">2:1</option>
          </select>
          <input
            name="value1"
            value={this.state.value1}
            onChange={this.changeValue1}
          />
          <input
            name="value2"
            value={this.state.value2}
            onChange={this.changeValue2}
          />
        </section>
      </div>
    );
  }
}

export default App;

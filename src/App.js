import React, { Component } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  // onClick function
  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  // show results when = is pressed
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  // clears when C is pressed
  reset = () => {
    this.setState({
      result: " "
    });
  };
  // clear the last character when CE is pressed
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-body">
          <h1 className="title py-2">React Calculator</h1>
          <Input result={this.state.result} />
          <Button onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;

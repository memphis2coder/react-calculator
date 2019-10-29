import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default Input;

import React, { Component } from "react";
import "../styleSheet.css";

class InputsValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctcValue: 0,
      rentValue: 0,
      deduction80C: 0,
      deduction80D: 0,
      stanDard: 0,
      metroorNot: "",
      PF: "",
      ESI: "",
    };
  }
  getInputs = (e) => {
    const numValues = [
      "ctcValue",
      "rentValue",
      "deduction80C",
      "deduction80D",
      "stanDard",
    ];
    const property = e.target.name;
    let value = e.target.value;
    if (numValues.includes(property)) {
      value = parseInt(value);
    }
    this.setState({
      [property]: value,
    });
  };

  taxCalculations = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="number"
            placeholder="Enter CTC"
            name="ctcValue"
            onChange={this.getInputs}
          />
          <input
            type="number"
            placeholder="enter Annual Rent"
            name="rentValue"
            onChange={this.getInputs}
          />
          <input
            type="number"
            placeholder="enter 80C value"
            name="deduction80C"
            onChange={this.getInputs}
          />
          <input
            type="number"
            placeholder="enter 80D value"
            name="deduction80D"
            onChange={this.getInputs}
          />
          <input
            type="number"
            placeholder="enter Stand. deduction"
            name="stanDard"
            onChange={this.getInputs}
          />
          <input
            type="text"
            placeholder="Metro City? YES/NO"
            name="metroorNot"
            onChange={this.getInputs}
          />
          <input
            type="text"
            placeholder="Have PF? YES/NO"
            name="PF"
            onChange={this.getInputs}
          />
          <input
            type="text"
            placeholder="Have ESI? YES/NO"
            name="ESI"
            onChange={this.getInputs}
          />
        </div>
        <div>
          <button onClick={this.taxCalculations}>Calculate Tax</button>
        </div>
      </div>
    );
  }
}

export default InputsValue;

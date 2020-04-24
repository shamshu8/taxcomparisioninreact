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
            className="input"
            type="number"
            placeholder="Enter CTC"
            name="ctcValue"
            onChange={this.getInputs}
          />
          <input
            className="input"
            type="number"
            placeholder=" Annual Rent"
            name="rentValue"
            onChange={this.getInputs}
          />
          <input
            className="input"
            type="number"
            placeholder="Invest/Insurance. max 1.5L"
            name="deduction80C"
            onChange={this.getInputs}
          />
          <input
            className="input"
            type="number"
            placeholder="Medical Insurance max 50k"
            name="deduction80D"
            onChange={this.getInputs}
          />
          <input
            className="input"
            type="number"
            placeholder="Standard Deduct. Max 50K"
            name="stanDard"
            onChange={this.getInputs}
          />
          <input
            className="input"
            type="text"
            name="metroorNot"
            list="chose"
            placeholder="Metro City?"
            onChange={this.getInputs}
          />
          <datalist id="chose">
            <option value="Yes"></option>
            <option value="No"></option>
          </datalist>
          {/* <input
            type="text"
            name="PF"
            list="chose"
            placeholder="Have PF?"
            onChange={this.getInputs}
          />
          <datalist id="chose">
            <option value="Yes"></option>
            <option value="No"></option>
          </datalist>
    
          <input
            type="text"
            name="ESI"
            list="chose"
            placeholder="Have ESI?"
            onChange={this.getInputs}
          />
          <datalist id="chose">
            <option value="Yes"></option>
            <option value="No"></option>
          </datalist> */}
        </div>
        <div className="button_container">
          <button onClick={this.taxCalculations}>Calculate Tax</button>
        </div>
      </div>
    );
  }
}

export default InputsValue;

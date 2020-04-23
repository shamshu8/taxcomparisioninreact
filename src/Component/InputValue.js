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
            type="number"
            placeholder="Enter CTC"
            name="ctcValue"
            onChange={this.getInputs}
          />
          <input
            type="number"
            placeholder="Enter Annual Rent"
            name="rentValue"
            onChange={this.getInputs}
          />
          <input
            type="number"
            placeholder="Enter 80C value"
            name="deduction80C"
            onChange={this.getInputs}
          />
          <input
            type="number"
            placeholder="Enter 80D value"
            name="deduction80D"
            onChange={this.getInputs}
          />
          <input
            type="number"
            placeholder="Enter Stand. deduction"
            name="stanDard"
            onChange={this.getInputs}
          />
          {/* <input
            type="text"
            placeholder="Metro City? YES/NO"
            name="metroorNot"
            onChange={this.getInputs}
          /> */}
          <input
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
        <div>
          <button onClick={this.taxCalculations}>Calculate Tax</button>
        </div>
      </div>
    );
  }
}

export default InputsValue;

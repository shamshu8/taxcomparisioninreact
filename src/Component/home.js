import React from "react";
import "../styleSheet.css";
import InputsValue from "./InputValue";
import OldTax from "./oldTax";
import NewTax from "./newTax";
import SalaryHead from "./Salaries";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = (data) => {
    this.setState(data);
  };

  showNewTaxValue = (newTax) => {
    if (newTax !== this.state.newTax) {
      this.setState({
        newTax,
      });
    }
  };
  showOldTaxValue = (oldTax) => {
    // console.log(oldTax);
    if (oldTax !== this.state.oldTax) {
      this.setState({
        oldTax,
      });
    }
  };

  handleTax = (event) => {
    this.setState({
      showTDS: event.target.checked,
    });
  };

  // componentWillUnmount() {
  //   const { newTax, oldTax } = this.state;
  //   if (newTax && oldTax) {
  //     this.setState({
  //       taxDifference: newTax - oldTax >= 0 ? newTax - oldTax : oldTax - newTax,
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        <div className="input_div">
          <InputsValue onSubmit={this.handleSubmit} />
        </div>
        <div className="tax_message">
          <div>Tax payable as per new Tax :{this.state.newTax}</div>
          <div>Tax payable as per Old Tax :{this.state.oldTax}</div>
        </div>
        <div className="mainsalary_componentDiv">
          <NewTax onCalculationDone={this.showNewTaxValue} data={this.state} />
          <OldTax oldTaxDone={this.showOldTaxValue} data={this.state} />

          <SalaryHead onTDSChange={this.handleTax} data={this.state} />
        </div>
      </div>
    );
  }
}

export default Home;

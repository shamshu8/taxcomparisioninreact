import React from "react";
import "../styleSheet.css";
import InputsValue from "./InputValue";
import OldTax from "./oldTax";
import NewTax from "./newTax";
import SalaryHead from "./Salaries";
import Compare from "./comparision";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <div>
        <div className="input_div">
          <InputsValue onSubmit={this.handleSubmit} />
        </div>
        <div className="mainsalary_componentDiv">
          {/* <Compare data={this.state} /> */}
          <OldTax data={this.state} />
          <NewTax data={this.state} />
          <SalaryHead data={this.state} />
        </div>
      </div>
    );
  }
}

export default Home;

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
  render() {
    return (
      <div>
        <InputsValue onSubmit={this.handleSubmit} />

        <OldTax data={this.state} />
        <NewTax data={this.state} />
        <SalaryHead data={this.state} />
      </div>
    );
  }
}

export default Home;

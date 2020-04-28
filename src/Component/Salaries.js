import React from "react";
import "../styleSheet.css";
import NewTax from "./newTax";

const SalaryComponent = (data) => {
  let ctcValue = data.ctcValue || 0;
  let metroorNot = data.metroorNot;
  let ctcToSpecial = ctcValue / 12;

  let BasicSalary_value;
  BasicSalary_value = ctcValue / 2 / 12;

  let hraValue;
  if (metroorNot === "Yes") {
    hraValue = (BasicSalary_value * 50) / 100;
  } else if (metroorNot === "No") {
    hraValue = (BasicSalary_value * 40) / 100;
  } else {
    hraValue = (BasicSalary_value * 40) / 100;
  }
  let da_value = (BasicSalary_value * 10) / 100;
  let special_value = ctcToSpecial - (BasicSalary_value + hraValue + da_value);
  let totalSalaryValue =
    BasicSalary_value + hraValue + da_value + special_value;

  const showOldTDS = data.showTDS;
  const tds = showOldTDS ? data.oldTax : data.newTax;
  const totalDeductionValue = tds / 12;

  const showText = data.showTex;
  const taxtext = showText ? "Old Tax (Yearly)" : "New Tax (Yearly)";

  let netSalaryValue;
  netSalaryValue = totalSalaryValue - totalDeductionValue;

  return {
    BasicSalary: Math.round(BasicSalary_value),
    Hra: Math.round(hraValue),
    da: Math.round(da_value),
    Special: Math.round(special_value),
    totalSalary: Math.round(totalSalaryValue),
    totalDeduction: Math.round(totalDeductionValue),
    grossSalary: Math.round(totalSalaryValue),
    netSalary: Math.round(netSalaryValue),
    tds,
    taxtext,
  };
};

const SalaryHead = ({ data, onTDSChange }) => {
  if (!data.ctcValue) {
    return <div></div>;
  }
  const salaries = SalaryComponent(data);

  return (
    <div>
      <div className="monthly_salary2">
        <h3 className="monthlySalaryH3tag">Monthly Salary</h3>
        <table className="table3">
          <tr>
            <th>Earning</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Basic Salary</td>
            <td>{salaries.BasicSalary}</td>
          </tr>
          <tr>
            <td>D . A </td>
            <td>{salaries.da}</td>
          </tr>
          <tr>
            <td>HRA </td>
            <td>{salaries.Hra}</td>
          </tr>
          <tr>
            <td>Special Allowance </td>
            <td>{salaries.Special}</td>
          </tr>
          <tr>
            <td>Total Earned </td>
            <td>{salaries.totalSalary}</td>
          </tr>
        </table>

        <div>
          <table className="table3">
            <tr>
              <th>Deductions</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>
                {salaries.taxtext}
                <input
                  className="old_new"
                  type="checkbox"
                  onChange={onTDSChange}
                />
              </td>
              <td>{salaries.tds}</td>
            </tr>
            <tr>
              <td> Monthly TDS </td>
              <td>{salaries.totalDeduction}</td>
            </tr>
            <tr>
              <td className="suggestion">Take Home salary </td>
              <td className="suggestion">{salaries.netSalary}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalaryHead;

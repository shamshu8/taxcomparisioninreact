import React from "react";
import "../styleSheet.css";

const SalaryComponent = (data) => {
  let esiSalary = 21000;
  let PFsalary = 15000;
  let ctcValue = data.ctcValue || 0;
  let metroorNot = data.metroorNot;
  let PF = data.PF;
  let ESI = data.ESI;
  let ctcToSpecial = ctcValue / 12;

  let BasicSalary_value;
  BasicSalary_value = ctcValue / 2 / 12;

  let hraValue;
  if (metroorNot === "YES") {
    hraValue = (BasicSalary_value * 50) / 100;
  } else if (metroorNot === "NO") {
    hraValue = (BasicSalary_value * 40) / 100;
  } else {
    hraValue = (BasicSalary_value * 40) / 100;
  }
  let da_value = (BasicSalary_value * 10) / 100;
  let special_value = ctcToSpecial - (BasicSalary_value + hraValue + da_value);
  let totalSalaryValue =
    BasicSalary_value + hraValue + da_value + special_value;

  let ESIValue;
  if (ESI === "YES") {
    if (totalSalaryValue <= esiSalary) {
      ESIValue = (totalSalaryValue * 0.75) / 100;
    } else {
      ESIValue = 0;
    }
  }
  let PFValue;
  if (PF === "YES") {
    if (BasicSalary_value + da_value + special_value <= PFsalary) {
      PFValue = (BasicSalary_value + da_value + special_value * 12) / 100;
    } else {
      PFValue = 0;
    }
  }
  let totalDeductionValue;
  totalDeductionValue = ESIValue + PFValue || 0;

  let netSalaryValue;
  netSalaryValue = totalSalaryValue - totalDeductionValue;

  return {
    BasicSalary: Math.round(BasicSalary_value),
    Hra: Math.round(hraValue),
    da: Math.round(da_value),
    Special: Math.round(special_value),
    totalSalary: Math.round(totalSalaryValue),
    ESIdeduction: ESIValue,
    PFdeduction: PFValue,
    totalDeduction: Math.round(totalDeductionValue),
    grossSalary: Math.round(totalSalaryValue),
    netSalary: Math.round(netSalaryValue),
  };
};

const SalaryHead = ({ data }) => {
  const salaires = SalaryComponent(data);
  return (
    <div className="monthly_salary">
      <div className="monthly_salary2">
        <div>
          <table>
            <tr>
              <th>Earning</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Basic Salary </td>
              <td>{salaires.BasicSalary}</td>
            </tr>
            <tr>
              <td>D . A </td>
              <td>{salaires.da}</td>
            </tr>
            <tr>
              <td>HRA </td>
              <td>{salaires.Hra}</td>
            </tr>
            <tr>
              <td>Special Allowance </td>
              <td>{salaires.Special}</td>
            </tr>
            <tr>
              <td>Total Earned </td>
              <td>{salaires.totalSalary}</td>
            </tr>
            <tr>
              <td>Gross Salary </td>
              <td>{salaires.totalSalary}</td>
            </tr>
          </table>
        </div>
        <div>
          <table>
            <tr>
              <th>Deductions</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>PT </td>
              <td></td>
            </tr>
            <tr>
              <td>PF </td>
              <td>{salaires.PFdeduction}</td>
            </tr>
            <tr>
              <td>ESI </td>
              <td>{salaires.ESIdeduction}</td>
            </tr>
            <tr>
              <td>TDS </td>
              <td></td>
            </tr>
            <tr>
              <td>Total Deductions </td>
              <td>{salaires.totalDeduction}</td>
            </tr>
            <tr>
              <td>Net Salary </td>
              <td>{salaires.netSalary}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalaryHead;

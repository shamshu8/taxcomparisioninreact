import React from "react";
import "../styleSheet.css";

const oldTaxCalcuation = (data) => {
  let FirstSlab = 250000;
  let SecondSlab = 500000;
  let Surcharge1 = 5000000;
  let Surcharge2 = 10000000;
  let ctcValue = data.ctcValue || 0;
  let rentValue = data.rentValue || 0;
  let deduction80C = data.deduction80C || 0;
  let deduction80D = data.deduction80D || 0;
  let stanDard = data.stanDard || 0;
  let metroorNot = data.metroorNot;
  let basicSalaryValue = (ctcValue * 50) / 100;

  let hraValue;
  if (metroorNot === "YES") {
    hraValue = (basicSalaryValue * 50) / 100;
  } else if (metroorNot === "NO") {
    hraValue = (basicSalaryValue * 40) / 100;
  } else {
    hraValue = (basicSalaryValue * 40) / 100;
  }
  let da_value = (basicSalaryValue * 10) / 100;
  let special_value = ctcValue - (basicSalaryValue + hraValue + da_value);
  let totalSalary = basicSalaryValue + hraValue + da_value + special_value;
  // HRA calculations..
  let basic_plus_DA = (basicSalaryValue + da_value) * (10 / 100);
  let rentSalaryValue;
  if (rentValue > basic_plus_DA) {
    rentSalaryValue = rentValue - basic_plus_DA;
  } else {
    rentSalaryValue = 0;
  }
  let hra_exemption = Math.min(hraValue, rentSalaryValue, hraValue);

  let taxableSalaryValue;
  taxableSalaryValue =
    ctcValue - deduction80C - deduction80D - stanDard - hra_exemption;

  // Tax calculation sections
  let Appl_amount1_value;
  if (taxableSalaryValue <= FirstSlab) {
    Appl_amount1_value = taxableSalaryValue;
  } else if (taxableSalaryValue >= FirstSlab) {
    Appl_amount1_value = FirstSlab;
  } else {
    Appl_amount1_value = 0;
  }

  let bal_amount1_value;
  if (taxableSalaryValue >= FirstSlab) {
    bal_amount1_value = taxableSalaryValue - FirstSlab;
  } else {
    bal_amount1_value = 0;
  }
  let Appl_amount2_value;
  if (bal_amount1_value >= FirstSlab) {
    Appl_amount2_value = FirstSlab;
  } else {
    Appl_amount2_value = bal_amount1_value;
  }
  let bal_amount2_value;
  if (Appl_amount2_value < bal_amount1_value) {
    bal_amount2_value = bal_amount1_value - Appl_amount2_value;
  } else {
    bal_amount2_value = 0;
  }
  let Appl_amount3_value;
  if (bal_amount2_value >= SecondSlab) {
    Appl_amount3_value = SecondSlab;
  } else {
    Appl_amount3_value = bal_amount2_value;
  }
  let bal_amount3_value;
  if (Appl_amount3_value < bal_amount2_value) {
    bal_amount3_value = bal_amount2_value - Appl_amount3_value;
  } else {
    bal_amount3_value = 0;
  }
  let Appl_amount4_value = bal_amount3_value;
  let sub_total_Appl_value =
    Appl_amount1_value +
    Appl_amount2_value +
    Appl_amount3_value +
    Appl_amount4_value;
  let first_TaxValue = (Appl_amount2_value * 5) / 100;
  let second_taxValue = (Appl_amount3_value * 20) / 100;
  let third_TaxValue = (Appl_amount4_value * 30) / 100;
  let sub_total_taxvalue = first_TaxValue + second_taxValue + third_TaxValue;
  let Surcharge_value;
  if (taxableSalaryValue > Surcharge1 && taxableSalaryValue < Surcharge2) {
    Surcharge_value = (sub_total_taxvalue * 10) / 100;
  } else if (taxableSalaryValue > Surcharge2) {
    Surcharge_value = (sub_total_taxvalue * 15) / 100;
  } else {
    Surcharge_value = 0;
  }
  let cess_Value;
  if (taxableSalaryValue > SecondSlab) {
    cess_Value = ((sub_total_taxvalue + Surcharge_value) * 4) / 100;
  } else {
    cess_Value = 0;
  }

  let taxCredit_Value;
  if (taxableSalaryValue <= SecondSlab) {
    taxCredit_Value = sub_total_taxvalue;
  } else {
    taxCredit_Value = 0;
  }
  let totalTaxValue;
  totalTaxValue =
    sub_total_taxvalue + Surcharge_value + cess_Value - taxCredit_Value;

  return {
    taxableSalary: taxableSalaryValue,
    Appl_amount1: Appl_amount1_value,
    bal_amount1: bal_amount1_value,
    Appl_amount2: Appl_amount2_value,
    bal_amount2: bal_amount2_value,
    Appl_amount3: Appl_amount3_value,
    bal_amount3: bal_amount3_value,
    Appl_amount4: Appl_amount4_value,
    sub_total_Appl: sub_total_Appl_value,
    first_Tax: Math.round(first_TaxValue),
    second_Tax: Math.round(second_taxValue),
    third_Tax: Math.round(third_TaxValue),
    sub_total_tax: Math.round(sub_total_taxvalue),
    Surcharge: Math.round(Surcharge_value),
    ceSS: Math.round(cess_Value),
    taxCredit: Math.round(taxCredit_Value),
    totalTax: Math.round(totalTaxValue),
    basicSalary: basicSalaryValue,
    hra: hraValue,
    da: da_value,
    special: special_value,
    total: totalSalary,
    hra_exemption: hra_exemption,
  };
};

const OldTax = ({ data }) => {
  //   if (!data.ctcValue) {
  //     return <p>Put your ctc and check the tax payable</p>;
  //   }
  const calculation = oldTaxCalcuation(data);

  return (
    <div className="main_salary_componentDiv">
      <div>
        <h3>Tax payable as per Old slab</h3>
        <table>
          <tr>
            <th>Tax slabs</th>
            <th>Tax Rate</th>
            <th>Applicable Amount</th>
            <th>Balance Amount</th>
            <th>Tax Amount</th>
          </tr>
          <tr>
            <td>0-2,50,000</td>
            <td>0%</td>
            <td>{calculation.Appl_amount1}</td>
            <td>{calculation.bal_amount1}</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2,50,001-5,00,000</td>
            <td>5%</td>
            <td>{calculation.Appl_amount2}</td>
            <td>{calculation.bal_amount2}</td>
            <td>{calculation.first_Tax}</td>
          </tr>
          <tr>
            <td>5,00,001-10,000,00</td>
            <td>20%</td>
            <td>{calculation.Appl_amount3}</td>
            <td>{calculation.bal_amount3}</td>
            <td>{calculation.second_Tax}</td>
          </tr>
          <tr>
            <td>Above 10,00,000</td>
            <td>30%</td>
            <td>{calculation.Appl_amount4}</td>
            <td></td>
            <td>{calculation.third_Tax}</td>
          </tr>
          <tr>
            <td>Sub Total</td>
            <td></td>
            <td>{calculation.sub_total_Appl}</td>
            <td></td>
            <td>{calculation.sub_total_tax}</td>
          </tr>
          <tr>
            <td>Surcharge</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{calculation.Surcharge}</td>
          </tr>
          <tr>
            <td>Health and Edu Cess</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{calculation.ceSS}</td>
          </tr>
          <tr>
            <td>Tax credit (Sec 87A)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{calculation.taxCredit}</td>
          </tr>
          <tr>
            <td>Total Tax payable</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{calculation.totalTax}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default OldTax;

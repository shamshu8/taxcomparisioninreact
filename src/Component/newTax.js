import React from "react";
import "../styleSheet.css";

const newTaxCalculation = (data) => {
  let FirstSlab = 250000;
  let Surcharge1 = 5000000;
  let SecondSlab = 500000;
  let Surcharge2 = 10000000;
  let ctcValue = data.ctcValue || 0;

  // Tax calculation

  let Appl_amnt1_value;
  if (ctcValue >= FirstSlab) {
    Appl_amnt1_value = FirstSlab;
  } else {
    Appl_amnt1_value = ctcValue;
  }

  let bal_amnt1_value;
  if (Appl_amnt1_value <= ctcValue) {
    bal_amnt1_value = ctcValue - Appl_amnt1_value;
  } else {
    bal_amnt1_value = 0;
  }

  let Appl_amnt2_value;
  if (bal_amnt1_value >= FirstSlab) {
    Appl_amnt2_value = FirstSlab;
  } else {
    Appl_amnt2_value = bal_amnt1_value;
  }
  let bal_amnt2_value;
  if (bal_amnt1_value >= FirstSlab) {
    bal_amnt2_value = bal_amnt1_value - Appl_amnt2_value;
  } else {
    bal_amnt2_value = 0;
  }
  let Appl_amnt3_value;
  if (bal_amnt2_value >= FirstSlab) {
    Appl_amnt3_value = FirstSlab;
  } else {
    Appl_amnt3_value = bal_amnt2_value;
  }
  let bal_amnt3_value;
  bal_amnt3_value = bal_amnt2_value - Appl_amnt3_value;

  let Appl_amnt4_value;
  if (bal_amnt3_value >= FirstSlab) {
    Appl_amnt4_value = FirstSlab;
  } else {
    Appl_amnt4_value = bal_amnt3_value;
  }
  let bal_amnt4_value;
  bal_amnt4_value = bal_amnt3_value - Appl_amnt4_value;

  let Appl_amnt5_value;
  if (bal_amnt4_value >= FirstSlab) {
    Appl_amnt5_value = FirstSlab;
  } else {
    Appl_amnt5_value = bal_amnt4_value;
  }

  let bal_amnt5_value;
  bal_amnt5_value = bal_amnt4_value - Appl_amnt5_value;

  let Appl_amnt6_value;
  if (bal_amnt5_value >= FirstSlab) {
    Appl_amnt6_value = FirstSlab;
  } else {
    Appl_amnt6_value = bal_amnt5_value;
  }
  let bal_amnt6_value;
  bal_amnt6_value = bal_amnt5_value - Appl_amnt6_value;

  let Appl_amnt7_value;
  Appl_amnt7_value = bal_amnt6_value;

  let sub_Total_App_value;
  sub_Total_App_value =
    Appl_amnt1_value +
    Appl_amnt2_value +
    Appl_amnt3_value +
    Appl_amnt4_value +
    Appl_amnt5_value +
    Appl_amnt6_value +
    Appl_amnt7_value;
  console.log({
    sub_Total_App_value,
    Appl_amnt1_value,
    Appl_amnt2_value,
    Appl_amnt3_value,
    Appl_amnt4_value,
    Appl_amnt5_value,
    Appl_amnt6_value,
    Appl_amnt7_value,
  });

  let FirstTax_value;
  FirstTax_value = (Appl_amnt2_value * 5) / 100;
  let SecondTax_value;
  SecondTax_value = (Appl_amnt3_value * 10) / 100;
  let ThirdTax_value;
  ThirdTax_value = (Appl_amnt4_value * 15) / 100;
  let FourthTax_value;
  FourthTax_value = (Appl_amnt5_value * 20) / 100;
  let FifthTax_value;
  FifthTax_value = (Appl_amnt6_value * 25) / 100;
  let SixthTax_value;
  SixthTax_value = (Appl_amnt7_value * 30) / 100;

  let sub_Total_Tax_value;
  sub_Total_Tax_value =
    FirstTax_value +
    SecondTax_value +
    ThirdTax_value +
    FourthTax_value +
    FifthTax_value +
    SixthTax_value;

  let Surcharge_value;
  if (ctcValue > Surcharge1 && ctcValue < Surcharge2) {
    Surcharge_value = (sub_Total_Tax_value * 10) / 100;
  } else if (ctcValue > Surcharge2) {
    Surcharge_value = (sub_Total_Tax_value * 15) / 100;
  } else {
    Surcharge_value = 0;
  }
  let cess_Value;
  if (ctcValue > SecondSlab) {
    cess_Value = ((sub_Total_Tax_value + Surcharge_value) * 4) / 100;
  } else {
    cess_Value = 0;
  }

  let taxCredit_Value;
  if (ctcValue <= SecondSlab) {
    taxCredit_Value = sub_Total_Tax_value;
  } else {
    taxCredit_Value = 0;
  }
  let total_tax_value;
  total_tax_value =
    sub_Total_Tax_value + Surcharge_value + cess_Value - taxCredit_Value;

  return {
    Appl_amnt1: Appl_amnt1_value,
    bal_amnt1: bal_amnt1_value,
    Appl_amnt2: Appl_amnt2_value,
    bal_amnt2: bal_amnt2_value,
    Appl_amnt3: Appl_amnt3_value,
    bal_amnt3: bal_amnt3_value,
    Appl_amnt4: Appl_amnt4_value,
    bal_amnt4: bal_amnt4_value,
    Appl_amnt5: Appl_amnt5_value,
    bal_amnt5: bal_amnt5_value,
    Appl_amnt6: Appl_amnt6_value,
    bal_amnt6: bal_amnt6_value,
    Appl_amnt7: Appl_amnt7_value,
    sub_Total_App: sub_Total_App_value,
    FirstTax: Math.round(FirstTax_value),
    SecondTax: Math.round(SecondTax_value),
    ThirdTax: Math.round(ThirdTax_value),
    FourthTax: Math.round(FourthTax_value),
    FifthTax: Math.round(FifthTax_value),
    SixthTax: Math.round(SixthTax_value),
    sub_Total_Tax: Math.round(sub_Total_Tax_value),
    SurCharge: Math.round(Surcharge_value),
    ceSS: Math.round(cess_Value),
    taxCredit: Math.round(taxCredit_Value),
    total_tax: Math.round(total_tax_value),
  };
};

const NewTax = ({ data }) => {
  const calculation = newTaxCalculation(data);
  return (
    <div className="main_salary_componentDiv">
      <h3>Tax payable as per new slab </h3>
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
          <td>{calculation.Appl_amnt1}</td>
          <td>{calculation.bal_amnt1}</td>
          <td></td>
        </tr>
        <tr>
          <td>2,50,001-5,00,000</td>
          <td>5%</td>
          <td>{calculation.Appl_amnt2}</td>
          <td>{calculation.bal_amnt2}</td>
          <td>{calculation.FirstTax}</td>
        </tr>
        <tr>
          <td>5,00,001-7,50,000</td>
          <td>10%</td>
          <td>{calculation.Appl_amnt3}</td>
          <td>{calculation.bal_amnt3}</td>
          <td>{calculation.SecondTax}</td>
        </tr>
        <tr>
          <td>7,50,000 - 10,00,000</td>
          <td>15%</td>
          <td>{calculation.Appl_amnt4}</td>
          <td>{calculation.bal_amnt4}</td>
          <td>{calculation.ThirdTax}</td>
        </tr>
        <tr>
          <td>10,00,001 - 12,50,000</td>
          <td>20%</td>
          <td>{calculation.Appl_amnt5}</td>
          <td>{calculation.bal_amnt5}</td>
          <td>{calculation.FourthTax}</td>
        </tr>
        <tr>
          <td>12,50,001 - 15,00,000</td>
          <td>25%</td>
          <td>{calculation.Appl_amnt6}</td>
          <td>{calculation.bal_amnt6}</td>
          <td>{calculation.FifthTax}</td>
        </tr>
        <tr>
          <td>Above 15,00,001</td>
          <td>30%</td>
          <td>{calculation.Appl_amnt7}</td>
          <td></td>
          <td>{calculation.SixthTax}</td>
        </tr>
        <tr>
          <td>Sub Total</td>
          <td></td>
          <td>{calculation.sub_Total_App}</td>
          <td></td>
          <td>{calculation.sub_Total_Tax}</td>
        </tr>
        <tr>
          <td>Surcharge</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{calculation.SurCharge} </td>
        </tr>
        <tr>
          <td>Health and Edu Cess</td>
          <td></td>
          <td></td>
          <td></td>
          <td>{calculation.ceSS}</td>
        </tr>
        <tr>
          <td>Tax Credit (Sec 87A)</td>
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
          <td>{calculation.total_tax}</td>
        </tr>
      </table>
    </div>
  );
};
export default NewTax;

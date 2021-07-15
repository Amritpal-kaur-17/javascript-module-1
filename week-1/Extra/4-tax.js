/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(price) {
  const salestax = (price *20)/100;
  const precost = price + salestax;
   
  return precost;
}
console.log(calculateSalesTax(15));
console.log(calculateSalesTax(17.5));
console.log(calculateSalesTax(34));

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that adds tax to a number, and then transforms the total into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function addTaxAndFormatCurrency(price) {
  const salestax = (price *20)/100;
  const precost = price + salestax;
  const precost_In_decimal = precost.toFixed(2);
  const currencySymbol = "£";
  const output  = currencySymbol.concat(precost_In_decimal);
  return output;
}


console.log(addTaxAndFormatCurrency(15.0));
console.log(addTaxAndFormatCurrency(17.500));
console.log(addTaxAndFormatCurrency(34.00));
/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node 4-tax.js` into your terminal
*/

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("calculateSalesTax function - case 1 works", calculateSalesTax(15), 18)
test("calculateSalesTax function - case 2 works", calculateSalesTax(17.5), 21)
test("calculateSalesTax function - case 3 works", calculateSalesTax(34), 40.8)

test("addTaxAndFormatCurrency function - case 1 works", addTaxAndFormatCurrency(15), "£18.00")
test("addTaxAndFormatCurrency function - case 2 works", addTaxAndFormatCurrency(17.5), "£21.00")
test("addTaxAndFormatCurrency function - case 3 works", addTaxAndFormatCurrency(34), "£40.80")

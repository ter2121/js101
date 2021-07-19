let readlineSync = require('readline-sync');
let billAmount = parseFloat(readlineSync.question("What is the bill? \n"));
let tipRate = parseFloat(readlineSync.question("What is the percent tip?\n"));


function tipCalculator (billAmount, tipRate) {
  tip = billAmount * (tipRate/100)
  total = billAmount + tip
  console.log(`The total is ${total.toFixed(2)}`)
}

tipCalculator(billAmount, tipRate)

// p
//   input: billAmount, tipRate [integers]
//   output: tip, total [integers]
// e
//   0
// d
//   primitives
// a
//   tip = tipRate(billAmount)
//   total = tip + billAmount
const readline = require('readline-sync');

console.log("What's the loan amount?");
let loanAmount = readline.question()

console.log("What's the APR?");
let annualInterestRate = readline.question()
let monthlyInterestRate = annualInterestRate/12

console.log("How many years does the loan last")
let loanDurationYears = readline.question()
let loanDurationMonths = loanDurationYears*12

function mortgageCalculator(loanAmount, monthlyInterestRate, loanDurationMonths) {
  let monthlyPayment = loanAmount*(monthlyInterestRate / (1-Math.pow((1+monthlyInterestRate), (-loanDurationMonths))))
  console.log(monthlyPayment)
}

mortgageCalculator(loanAmount, monthlyInterestRate, loanDurationMonths)

